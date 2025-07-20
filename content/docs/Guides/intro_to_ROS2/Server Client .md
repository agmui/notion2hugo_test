---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-04-05T22:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-04-05T22:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZDHRUMF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgERwL7mStSfvCZRP%2Bl4zFDFORqBzSgrwZjobeorVGxAiEAttHpG7QX3IlHYoNyz1144nBAmmGEGavGfWLi0BVnd3EqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrvtPzS9aLr7C4%2FJCrcA8LJ2Af7whp5MapLQAXofGIi3Rdl%2BvmOgaS%2FR3K5TWGCC5UoGiIk%2FwSTTw5%2FurVSJ6GWWu3ecOrG%2F%2BRWgJQ428Jy4BBylWkxPmsV7s3zuNyTpGH4s0Ty7CYj6eDY%2BOPbjn3hogO4NatSYhLoXHbRPMdZhFiEq5RoenO4VQUlORFURfY%2BhdlJzqMiRyFHBUG5kGVpJ9oVa7Qf6wTRxZsmlh4auwMnIWlb2zCS9shVbj0kZ4YREReJYigUApBNK9nbq0HmSl6aC2oxI9LxWGy%2BQTaVXNu6hVfSOE%2FcbOCL0Pge%2BypruciijV5acd2wLowHKc%2FwD%2BFvvkGQm7w0U6HbcamTsn38qMvJDOOGnnm%2F%2BJOYw9AUnavovaFuu46PT%2FUESYBCUbTq5KzM3QcGV6OZYOjKCi7eEPrLaMS%2FdtplvvGKJuVJlPNmiv%2F7AiWe2jgwbWg7uYFeolHv1mAd9bHEDjwg4GS3VPnB0FS1Lf0Yb3LuZA%2BAXI7UUe9Qi6d4tqRzThmxmWQbgeA8P544K%2BqEv2uSVVodPEztBA7Js8gSlFdseHZY5vzQyHCuRiNHA9EfzmU5%2BUWx%2BEfI4Vgcs7yrMbrx3wQoQ5h5qT41PlvuOSnKaT41TrCcQXhJAS88MMWv8sMGOqUBhec10Pj%2BtMHhGsdDnQrlQ9TZJ2K41dRRehIzKHCwNXp8jFhDLa4%2B787AQViXvDoUsDAnyi7IHxXTr3UrRi6nnyifrY8MWQtyE1MjbNCKl5Bjq6Pr2VXwULKDXOkO%2Fi2brcvzxZ7cMdv136MkzTCL%2BMrVdQ7gkwKCpJrsuNoHTArMfYLjR%2B6mkqwovg3rd%2FgkaBnUX4dMEw1vd4i2BqS7qyCxBF1R&X-Amz-Signature=57be9d1e8c7fe65428ead6742cc898670d5785875b7f5be1ad141d1860cffef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZDHRUMF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgERwL7mStSfvCZRP%2Bl4zFDFORqBzSgrwZjobeorVGxAiEAttHpG7QX3IlHYoNyz1144nBAmmGEGavGfWLi0BVnd3EqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrvtPzS9aLr7C4%2FJCrcA8LJ2Af7whp5MapLQAXofGIi3Rdl%2BvmOgaS%2FR3K5TWGCC5UoGiIk%2FwSTTw5%2FurVSJ6GWWu3ecOrG%2F%2BRWgJQ428Jy4BBylWkxPmsV7s3zuNyTpGH4s0Ty7CYj6eDY%2BOPbjn3hogO4NatSYhLoXHbRPMdZhFiEq5RoenO4VQUlORFURfY%2BhdlJzqMiRyFHBUG5kGVpJ9oVa7Qf6wTRxZsmlh4auwMnIWlb2zCS9shVbj0kZ4YREReJYigUApBNK9nbq0HmSl6aC2oxI9LxWGy%2BQTaVXNu6hVfSOE%2FcbOCL0Pge%2BypruciijV5acd2wLowHKc%2FwD%2BFvvkGQm7w0U6HbcamTsn38qMvJDOOGnnm%2F%2BJOYw9AUnavovaFuu46PT%2FUESYBCUbTq5KzM3QcGV6OZYOjKCi7eEPrLaMS%2FdtplvvGKJuVJlPNmiv%2F7AiWe2jgwbWg7uYFeolHv1mAd9bHEDjwg4GS3VPnB0FS1Lf0Yb3LuZA%2BAXI7UUe9Qi6d4tqRzThmxmWQbgeA8P544K%2BqEv2uSVVodPEztBA7Js8gSlFdseHZY5vzQyHCuRiNHA9EfzmU5%2BUWx%2BEfI4Vgcs7yrMbrx3wQoQ5h5qT41PlvuOSnKaT41TrCcQXhJAS88MMWv8sMGOqUBhec10Pj%2BtMHhGsdDnQrlQ9TZJ2K41dRRehIzKHCwNXp8jFhDLa4%2B787AQViXvDoUsDAnyi7IHxXTr3UrRi6nnyifrY8MWQtyE1MjbNCKl5Bjq6Pr2VXwULKDXOkO%2Fi2brcvzxZ7cMdv136MkzTCL%2BMrVdQ7gkwKCpJrsuNoHTArMfYLjR%2B6mkqwovg3rd%2FgkaBnUX4dMEw1vd4i2BqS7qyCxBF1R&X-Amz-Signature=bc1124c8977cfd91e9c64af34ed0da79b38372fb8e8529037e0fff989a8be947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZDHRUMF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgERwL7mStSfvCZRP%2Bl4zFDFORqBzSgrwZjobeorVGxAiEAttHpG7QX3IlHYoNyz1144nBAmmGEGavGfWLi0BVnd3EqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrvtPzS9aLr7C4%2FJCrcA8LJ2Af7whp5MapLQAXofGIi3Rdl%2BvmOgaS%2FR3K5TWGCC5UoGiIk%2FwSTTw5%2FurVSJ6GWWu3ecOrG%2F%2BRWgJQ428Jy4BBylWkxPmsV7s3zuNyTpGH4s0Ty7CYj6eDY%2BOPbjn3hogO4NatSYhLoXHbRPMdZhFiEq5RoenO4VQUlORFURfY%2BhdlJzqMiRyFHBUG5kGVpJ9oVa7Qf6wTRxZsmlh4auwMnIWlb2zCS9shVbj0kZ4YREReJYigUApBNK9nbq0HmSl6aC2oxI9LxWGy%2BQTaVXNu6hVfSOE%2FcbOCL0Pge%2BypruciijV5acd2wLowHKc%2FwD%2BFvvkGQm7w0U6HbcamTsn38qMvJDOOGnnm%2F%2BJOYw9AUnavovaFuu46PT%2FUESYBCUbTq5KzM3QcGV6OZYOjKCi7eEPrLaMS%2FdtplvvGKJuVJlPNmiv%2F7AiWe2jgwbWg7uYFeolHv1mAd9bHEDjwg4GS3VPnB0FS1Lf0Yb3LuZA%2BAXI7UUe9Qi6d4tqRzThmxmWQbgeA8P544K%2BqEv2uSVVodPEztBA7Js8gSlFdseHZY5vzQyHCuRiNHA9EfzmU5%2BUWx%2BEfI4Vgcs7yrMbrx3wQoQ5h5qT41PlvuOSnKaT41TrCcQXhJAS88MMWv8sMGOqUBhec10Pj%2BtMHhGsdDnQrlQ9TZJ2K41dRRehIzKHCwNXp8jFhDLa4%2B787AQViXvDoUsDAnyi7IHxXTr3UrRi6nnyifrY8MWQtyE1MjbNCKl5Bjq6Pr2VXwULKDXOkO%2Fi2brcvzxZ7cMdv136MkzTCL%2BMrVdQ7gkwKCpJrsuNoHTArMfYLjR%2B6mkqwovg3rd%2FgkaBnUX4dMEw1vd4i2BqS7qyCxBF1R&X-Amz-Signature=450e2a46717a8936f04935264425784e7ff261774e421235215c470f0093808a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZDHRUMF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgERwL7mStSfvCZRP%2Bl4zFDFORqBzSgrwZjobeorVGxAiEAttHpG7QX3IlHYoNyz1144nBAmmGEGavGfWLi0BVnd3EqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrvtPzS9aLr7C4%2FJCrcA8LJ2Af7whp5MapLQAXofGIi3Rdl%2BvmOgaS%2FR3K5TWGCC5UoGiIk%2FwSTTw5%2FurVSJ6GWWu3ecOrG%2F%2BRWgJQ428Jy4BBylWkxPmsV7s3zuNyTpGH4s0Ty7CYj6eDY%2BOPbjn3hogO4NatSYhLoXHbRPMdZhFiEq5RoenO4VQUlORFURfY%2BhdlJzqMiRyFHBUG5kGVpJ9oVa7Qf6wTRxZsmlh4auwMnIWlb2zCS9shVbj0kZ4YREReJYigUApBNK9nbq0HmSl6aC2oxI9LxWGy%2BQTaVXNu6hVfSOE%2FcbOCL0Pge%2BypruciijV5acd2wLowHKc%2FwD%2BFvvkGQm7w0U6HbcamTsn38qMvJDOOGnnm%2F%2BJOYw9AUnavovaFuu46PT%2FUESYBCUbTq5KzM3QcGV6OZYOjKCi7eEPrLaMS%2FdtplvvGKJuVJlPNmiv%2F7AiWe2jgwbWg7uYFeolHv1mAd9bHEDjwg4GS3VPnB0FS1Lf0Yb3LuZA%2BAXI7UUe9Qi6d4tqRzThmxmWQbgeA8P544K%2BqEv2uSVVodPEztBA7Js8gSlFdseHZY5vzQyHCuRiNHA9EfzmU5%2BUWx%2BEfI4Vgcs7yrMbrx3wQoQ5h5qT41PlvuOSnKaT41TrCcQXhJAS88MMWv8sMGOqUBhec10Pj%2BtMHhGsdDnQrlQ9TZJ2K41dRRehIzKHCwNXp8jFhDLa4%2B787AQViXvDoUsDAnyi7IHxXTr3UrRi6nnyifrY8MWQtyE1MjbNCKl5Bjq6Pr2VXwULKDXOkO%2Fi2brcvzxZ7cMdv136MkzTCL%2BMrVdQ7gkwKCpJrsuNoHTArMfYLjR%2B6mkqwovg3rd%2FgkaBnUX4dMEw1vd4i2BqS7qyCxBF1R&X-Amz-Signature=5b0663dd0883e3d3cddb28eae0ba36ab6e91da8a9a6aa04fcbc89f97c3c4743b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZDHRUMF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgERwL7mStSfvCZRP%2Bl4zFDFORqBzSgrwZjobeorVGxAiEAttHpG7QX3IlHYoNyz1144nBAmmGEGavGfWLi0BVnd3EqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrvtPzS9aLr7C4%2FJCrcA8LJ2Af7whp5MapLQAXofGIi3Rdl%2BvmOgaS%2FR3K5TWGCC5UoGiIk%2FwSTTw5%2FurVSJ6GWWu3ecOrG%2F%2BRWgJQ428Jy4BBylWkxPmsV7s3zuNyTpGH4s0Ty7CYj6eDY%2BOPbjn3hogO4NatSYhLoXHbRPMdZhFiEq5RoenO4VQUlORFURfY%2BhdlJzqMiRyFHBUG5kGVpJ9oVa7Qf6wTRxZsmlh4auwMnIWlb2zCS9shVbj0kZ4YREReJYigUApBNK9nbq0HmSl6aC2oxI9LxWGy%2BQTaVXNu6hVfSOE%2FcbOCL0Pge%2BypruciijV5acd2wLowHKc%2FwD%2BFvvkGQm7w0U6HbcamTsn38qMvJDOOGnnm%2F%2BJOYw9AUnavovaFuu46PT%2FUESYBCUbTq5KzM3QcGV6OZYOjKCi7eEPrLaMS%2FdtplvvGKJuVJlPNmiv%2F7AiWe2jgwbWg7uYFeolHv1mAd9bHEDjwg4GS3VPnB0FS1Lf0Yb3LuZA%2BAXI7UUe9Qi6d4tqRzThmxmWQbgeA8P544K%2BqEv2uSVVodPEztBA7Js8gSlFdseHZY5vzQyHCuRiNHA9EfzmU5%2BUWx%2BEfI4Vgcs7yrMbrx3wQoQ5h5qT41PlvuOSnKaT41TrCcQXhJAS88MMWv8sMGOqUBhec10Pj%2BtMHhGsdDnQrlQ9TZJ2K41dRRehIzKHCwNXp8jFhDLa4%2B787AQViXvDoUsDAnyi7IHxXTr3UrRi6nnyifrY8MWQtyE1MjbNCKl5Bjq6Pr2VXwULKDXOkO%2Fi2brcvzxZ7cMdv136MkzTCL%2BMrVdQ7gkwKCpJrsuNoHTArMfYLjR%2B6mkqwovg3rd%2FgkaBnUX4dMEw1vd4i2BqS7qyCxBF1R&X-Amz-Signature=33ba23a875418eabc6e33ce953f6701bc44101a16f3a5690abab4675bfcc0a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
