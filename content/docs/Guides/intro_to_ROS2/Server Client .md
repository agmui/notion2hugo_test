---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 143
toc: false
icon: ""
---

Publishers and Subscribers are good but what if you want a two-way style of communication between nodes?

Server and Clients are similar to Publisher and Subscribers where they have a `Service` and Nodes can communicate through those services.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB6BGM4R%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqXZDsrfEt%2BMwtMQLcSnW3sXVD5i8Oq0ZlpY709uFL8gIgRkf%2BaDdG9EN2mpEfnbOumHcpDVkUAg9hkfu1TZTXsywqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1rskJIbTGRWe90eircA6Dr8tFAu8QXzGlmSnb1BxAfZTjlxQDCpcnMOkG0QSr66HZwgBMPfxt%2BsEg9CSWXvtG%2FvK%2Bof3B6pQMQzm%2BmZAjH0pLQwB9whkVoYo7V%2BOlhVyk6sKm6FNd58nVuvZXybMFJ82h03nmoksVCM50fGuaitRdDL7A%2B4Pchkzv32bNqDZVxudMw0IvRwkbP2vCfbO1sHKp4kSKECpOulIKZDshcVzYrOjuTiSsDnQh4EQnSk5lErQ2lqfbijczMdVn%2FzufxLTZmJK6TLeg8HndsIv7cQKOlTYKY%2BiSqsJNQr0m60Gl0mtBmFGMHSmxMxtZmccmxw7v0ba4nGWS4mHZftSpv0QAq67L%2FXcLHTac%2Fxqi%2BlO1sKAGyj0JFumD1x3QXG4ezhKbd4GLbAcEkX2OV%2BUXVcFr3WQBboeX53JUpX5QlywZ%2FZkemWJHweYf9an9%2FKWbph0l90dQ6gojLrCYrvuBhLZfHIHW%2BC5YaVHlBuE%2F2jOF2CorsqS2Spi3dB8T7sny%2F3VLeiK5R9%2Faf3AsGa9QMQnarGVZ4NFMPnRKhVoNoJ3f%2ByQlgSjj2fwlHTrwhgm7sgna7IJI9ATILWpNValS6jnyJQTw8qbtTk9j3rRLsgK0i8M%2BpsekhzvPzMNrAyL4GOqUBEILOrVm8pkLOXjl22wmt3tnEkT2Ys2oQE6pwV2GKIt3ltbgY6XIywv%2Fs%2FvvW4BWPlnCHSwlGvZxhyM7Mdzw6s5cmHYq%2FmmtR436qrszZ5iQ6mKhM9JIXPJ3wlscHCxaZSphWvXmkiIRTRCl2lpgZmwq0e18zPeeNbBeTiONEdBss%2BRq0Ew%2BZKo1dS6YAms1M2o2QBoQzD%2FEzQ88Xntr6sCIy40lP&X-Amz-Signature=c6f5fef0b4b4662b72db7997c43e99a0b4bd8ffcf5a01141b2c368c710b09071&X-Amz-SignedHeaders=host&x-id=GetObject)

![Service-MultipleServiceClient.gif](https://docs.ros.org/en/humble/_images/Service-MultipleServiceClient.gif)

Let's make a basic service where it just adds 2 numbers

# Server

create a file called `server.py` and import the `ROS` libraries:

```python
from example_interfaces.srv import AddTwoInts

import rclpy
from rclpy.node import Node
```

Then create a class `MinimalService` that implements `Node`

```python
class MinimalService(Node):
```

in the constructor run the parent constructor and create a service object:

```python
    def __init__(self):
        super().__init__("minimal_service")
        self.srv = self.create_service(AddTwoInts, "add_two_ints", self.add_two_ints_callback)
```

The service object takes the type it expects, the name, and the function to handle the request.

Next, create the function to handle the request and have it return the result of the sum.

```python
    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info("Incoming request\na: "+ str(request.a) +" b: " + str(request.b))
        return response
```

Then outside of the class, we want to start the node:

```python
def main():
    rclpy.init()                        # initializes the ROS library

    minimal_service = MinimalService()  # creates our MinimalService obj

    rclpy.spin(minimal_service)         # causes minimal_service to loop

    rclpy.shutdown()                    # deinits the ROS library


if __name__ == '__main__':
    main()
```

## Solution

```python
from example_interfaces.srv import AddTwoInts

import rclpy
from rclpy.node import Node


class MinimalService(Node):
    def __init__(self):
        super().__init__("minimal_service")
        self.srv = self.create_service(AddTwoInts, "add_two_ints", self.add_two_ints_callback)

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info("Incoming request\na: "+ str(request.a) +" b: " + str(request.b))
        return response


def main():
    rclpy.init()                        # initializes the ROS library

    minimal_service = MinimalService()  # creates our MinimalService obj

    rclpy.spin(minimal_service)         # causes minimal_service to loop

    rclpy.shutdown()                    # deinits the ROS library


if __name__ == '__main__':
    main()
```

# Client

For the client lets have it where it takes in the two numbers as input arguments before we run it: `python3 client.py 2 3`

create a file called client`.py` and import the `ROS` libraries:

```python
import sys

from example_interfaces.srv import AddTwoInts
import rclpy
from rclpy.node import Node
```

create a class called `MinimalClientAsync` and extend the `Node` class

```python
class MinimalClientAsync(Node):
```

in the constructor run the parent class’s constructor and create a client object and a request object.

Then we try to connect the client with the service by using `while`. This will search for 1 second for the service `"add_two_ints"` before it gives up. 

```python
    def __init__(self):
        super().__init__("minimal_client_async")
        self.cli = self.create_client(AddTwoInts, "add_two_ints")
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info("service not available, waiting again...")
        self.req = AddTwoInts.Request()

```

Next lets create a function, `send_request()` to take in two numbers and call the service:

```python
	def send_request(self, a, b):
		self.req.a = a
		self.req.b = b
		return self.cli.call_async(self.req) # uses client object to call the service
```

Then outside of the class we want to run our new Node so first init the `ROS` library with:

```python
rclpy.init()
```

Then create a `MinimalClientAsync()` object.

We are then going to take the two input arguments with `sys.argv[1]` and `sys.argv[2]` 

plug them into `send_request` and wait for the result

To wait for a response from the service we use `rclpy.spin_until_future_complete()`

It takes in 2 arguments, the Client Node and the variable that holds the result.

finally, we get our results with `future.result()` and print it out.

```python

minimal_client = MinimalClientAsync()
future = minimal_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
rclpy.spin_until_future_complete(minimal_client, future)
response = future.result()
minimal_client.get_logger().info("Result of add_two_ints: for "+ sys.argv[1] + " + " + sys.argv[2] + " = " + str(response.sum))
```

Then we shut everything down:

```python
minimal_client.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import sys

from example_interfaces.srv import AddTwoInts
import rclpy
from rclpy.node import Node


class MinimalClientAsync(Node):
    def __init__(self):
        super().__init__("minimal_client_async")
        self.cli = self.create_client(AddTwoInts, "add_two_ints")
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info("service not available, waiting again...")
        self.req = AddTwoInts.Request()

    def send_request(self, a, b):
        self.req.a = a
        self.req.b = b
        return self.cli.call_async(self.req)


def main():
    rclpy.init()

    minimal_client = MinimalClientAsync()
    future = minimal_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
    rclpy.spin_until_future_complete(minimal_client, future)
    response = future.result()
    minimal_client.get_logger().info("Result of add_two_ints: for "+ sys.argv[1] + " + " + sys.argv[2] + " = " + str(response.sum))

    minimal_client.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Now that we have created a Server and Client we can run them both to see them in action

In two different terminals run the Server first then the client

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB6BGM4R%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqXZDsrfEt%2BMwtMQLcSnW3sXVD5i8Oq0ZlpY709uFL8gIgRkf%2BaDdG9EN2mpEfnbOumHcpDVkUAg9hkfu1TZTXsywqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1rskJIbTGRWe90eircA6Dr8tFAu8QXzGlmSnb1BxAfZTjlxQDCpcnMOkG0QSr66HZwgBMPfxt%2BsEg9CSWXvtG%2FvK%2Bof3B6pQMQzm%2BmZAjH0pLQwB9whkVoYo7V%2BOlhVyk6sKm6FNd58nVuvZXybMFJ82h03nmoksVCM50fGuaitRdDL7A%2B4Pchkzv32bNqDZVxudMw0IvRwkbP2vCfbO1sHKp4kSKECpOulIKZDshcVzYrOjuTiSsDnQh4EQnSk5lErQ2lqfbijczMdVn%2FzufxLTZmJK6TLeg8HndsIv7cQKOlTYKY%2BiSqsJNQr0m60Gl0mtBmFGMHSmxMxtZmccmxw7v0ba4nGWS4mHZftSpv0QAq67L%2FXcLHTac%2Fxqi%2BlO1sKAGyj0JFumD1x3QXG4ezhKbd4GLbAcEkX2OV%2BUXVcFr3WQBboeX53JUpX5QlywZ%2FZkemWJHweYf9an9%2FKWbph0l90dQ6gojLrCYrvuBhLZfHIHW%2BC5YaVHlBuE%2F2jOF2CorsqS2Spi3dB8T7sny%2F3VLeiK5R9%2Faf3AsGa9QMQnarGVZ4NFMPnRKhVoNoJ3f%2ByQlgSjj2fwlHTrwhgm7sgna7IJI9ATILWpNValS6jnyJQTw8qbtTk9j3rRLsgK0i8M%2BpsekhzvPzMNrAyL4GOqUBEILOrVm8pkLOXjl22wmt3tnEkT2Ys2oQE6pwV2GKIt3ltbgY6XIywv%2Fs%2FvvW4BWPlnCHSwlGvZxhyM7Mdzw6s5cmHYq%2FmmtR436qrszZ5iQ6mKhM9JIXPJ3wlscHCxaZSphWvXmkiIRTRCl2lpgZmwq0e18zPeeNbBeTiONEdBss%2BRq0Ew%2BZKo1dS6YAms1M2o2QBoQzD%2FEzQ88Xntr6sCIy40lP&X-Amz-Signature=5070ae41d29cbaf078de4351db7edc58a76e95d4b73ac0099d6069154966d4b7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB6BGM4R%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqXZDsrfEt%2BMwtMQLcSnW3sXVD5i8Oq0ZlpY709uFL8gIgRkf%2BaDdG9EN2mpEfnbOumHcpDVkUAg9hkfu1TZTXsywqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1rskJIbTGRWe90eircA6Dr8tFAu8QXzGlmSnb1BxAfZTjlxQDCpcnMOkG0QSr66HZwgBMPfxt%2BsEg9CSWXvtG%2FvK%2Bof3B6pQMQzm%2BmZAjH0pLQwB9whkVoYo7V%2BOlhVyk6sKm6FNd58nVuvZXybMFJ82h03nmoksVCM50fGuaitRdDL7A%2B4Pchkzv32bNqDZVxudMw0IvRwkbP2vCfbO1sHKp4kSKECpOulIKZDshcVzYrOjuTiSsDnQh4EQnSk5lErQ2lqfbijczMdVn%2FzufxLTZmJK6TLeg8HndsIv7cQKOlTYKY%2BiSqsJNQr0m60Gl0mtBmFGMHSmxMxtZmccmxw7v0ba4nGWS4mHZftSpv0QAq67L%2FXcLHTac%2Fxqi%2BlO1sKAGyj0JFumD1x3QXG4ezhKbd4GLbAcEkX2OV%2BUXVcFr3WQBboeX53JUpX5QlywZ%2FZkemWJHweYf9an9%2FKWbph0l90dQ6gojLrCYrvuBhLZfHIHW%2BC5YaVHlBuE%2F2jOF2CorsqS2Spi3dB8T7sny%2F3VLeiK5R9%2Faf3AsGa9QMQnarGVZ4NFMPnRKhVoNoJ3f%2ByQlgSjj2fwlHTrwhgm7sgna7IJI9ATILWpNValS6jnyJQTw8qbtTk9j3rRLsgK0i8M%2BpsekhzvPzMNrAyL4GOqUBEILOrVm8pkLOXjl22wmt3tnEkT2Ys2oQE6pwV2GKIt3ltbgY6XIywv%2Fs%2FvvW4BWPlnCHSwlGvZxhyM7Mdzw6s5cmHYq%2FmmtR436qrszZ5iQ6mKhM9JIXPJ3wlscHCxaZSphWvXmkiIRTRCl2lpgZmwq0e18zPeeNbBeTiONEdBss%2BRq0Ew%2BZKo1dS6YAms1M2o2QBoQzD%2FEzQ88Xntr6sCIy40lP&X-Amz-Signature=7f630b1388df846a6f3d2abb78b878715bc604f3530f82d64bdf8afbe03b47f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB6BGM4R%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqXZDsrfEt%2BMwtMQLcSnW3sXVD5i8Oq0ZlpY709uFL8gIgRkf%2BaDdG9EN2mpEfnbOumHcpDVkUAg9hkfu1TZTXsywqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1rskJIbTGRWe90eircA6Dr8tFAu8QXzGlmSnb1BxAfZTjlxQDCpcnMOkG0QSr66HZwgBMPfxt%2BsEg9CSWXvtG%2FvK%2Bof3B6pQMQzm%2BmZAjH0pLQwB9whkVoYo7V%2BOlhVyk6sKm6FNd58nVuvZXybMFJ82h03nmoksVCM50fGuaitRdDL7A%2B4Pchkzv32bNqDZVxudMw0IvRwkbP2vCfbO1sHKp4kSKECpOulIKZDshcVzYrOjuTiSsDnQh4EQnSk5lErQ2lqfbijczMdVn%2FzufxLTZmJK6TLeg8HndsIv7cQKOlTYKY%2BiSqsJNQr0m60Gl0mtBmFGMHSmxMxtZmccmxw7v0ba4nGWS4mHZftSpv0QAq67L%2FXcLHTac%2Fxqi%2BlO1sKAGyj0JFumD1x3QXG4ezhKbd4GLbAcEkX2OV%2BUXVcFr3WQBboeX53JUpX5QlywZ%2FZkemWJHweYf9an9%2FKWbph0l90dQ6gojLrCYrvuBhLZfHIHW%2BC5YaVHlBuE%2F2jOF2CorsqS2Spi3dB8T7sny%2F3VLeiK5R9%2Faf3AsGa9QMQnarGVZ4NFMPnRKhVoNoJ3f%2ByQlgSjj2fwlHTrwhgm7sgna7IJI9ATILWpNValS6jnyJQTw8qbtTk9j3rRLsgK0i8M%2BpsekhzvPzMNrAyL4GOqUBEILOrVm8pkLOXjl22wmt3tnEkT2Ys2oQE6pwV2GKIt3ltbgY6XIywv%2Fs%2FvvW4BWPlnCHSwlGvZxhyM7Mdzw6s5cmHYq%2FmmtR436qrszZ5iQ6mKhM9JIXPJ3wlscHCxaZSphWvXmkiIRTRCl2lpgZmwq0e18zPeeNbBeTiONEdBss%2BRq0Ew%2BZKo1dS6YAms1M2o2QBoQzD%2FEzQ88Xntr6sCIy40lP&X-Amz-Signature=4860f71bd0bcbea5bee4f52e85872b0bed85fdcfeace349ef0169390489de940&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB6BGM4R%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqXZDsrfEt%2BMwtMQLcSnW3sXVD5i8Oq0ZlpY709uFL8gIgRkf%2BaDdG9EN2mpEfnbOumHcpDVkUAg9hkfu1TZTXsywqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1rskJIbTGRWe90eircA6Dr8tFAu8QXzGlmSnb1BxAfZTjlxQDCpcnMOkG0QSr66HZwgBMPfxt%2BsEg9CSWXvtG%2FvK%2Bof3B6pQMQzm%2BmZAjH0pLQwB9whkVoYo7V%2BOlhVyk6sKm6FNd58nVuvZXybMFJ82h03nmoksVCM50fGuaitRdDL7A%2B4Pchkzv32bNqDZVxudMw0IvRwkbP2vCfbO1sHKp4kSKECpOulIKZDshcVzYrOjuTiSsDnQh4EQnSk5lErQ2lqfbijczMdVn%2FzufxLTZmJK6TLeg8HndsIv7cQKOlTYKY%2BiSqsJNQr0m60Gl0mtBmFGMHSmxMxtZmccmxw7v0ba4nGWS4mHZftSpv0QAq67L%2FXcLHTac%2Fxqi%2BlO1sKAGyj0JFumD1x3QXG4ezhKbd4GLbAcEkX2OV%2BUXVcFr3WQBboeX53JUpX5QlywZ%2FZkemWJHweYf9an9%2FKWbph0l90dQ6gojLrCYrvuBhLZfHIHW%2BC5YaVHlBuE%2F2jOF2CorsqS2Spi3dB8T7sny%2F3VLeiK5R9%2Faf3AsGa9QMQnarGVZ4NFMPnRKhVoNoJ3f%2ByQlgSjj2fwlHTrwhgm7sgna7IJI9ATILWpNValS6jnyJQTw8qbtTk9j3rRLsgK0i8M%2BpsekhzvPzMNrAyL4GOqUBEILOrVm8pkLOXjl22wmt3tnEkT2Ys2oQE6pwV2GKIt3ltbgY6XIywv%2Fs%2FvvW4BWPlnCHSwlGvZxhyM7Mdzw6s5cmHYq%2FmmtR436qrszZ5iQ6mKhM9JIXPJ3wlscHCxaZSphWvXmkiIRTRCl2lpgZmwq0e18zPeeNbBeTiONEdBss%2BRq0Ew%2BZKo1dS6YAms1M2o2QBoQzD%2FEzQ88Xntr6sCIy40lP&X-Amz-Signature=e24b7bd32ea9133e8103aba099c47d3b5de6d4577db8f068571060f89a06a4d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
