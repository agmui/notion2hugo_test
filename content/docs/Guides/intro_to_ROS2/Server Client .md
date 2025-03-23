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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM6F2PBS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHuTENOAUVskkStDyHGMnbUIezgtsChrqpLeEWZQjzHCAiEA2exro9O7VJOokIlHA18D2ZhKn%2FcuEBHTUX1Sd1ljn8kqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyQMV2jdhImQMLdmircAx%2Fjm9SngLd9bKjif86fNEcqQZtoEsmasp72cd11dGoGbK1IAvdK41cAHdqGO3UpdXotdYOXYj7fxgdHqkZBS7rky7%2FlVmzTZfoeU42F6rnvyJIgGd5t2f%2BFaTwtwUF0RqXkRu5%2FYsMu2KXMOBf%2FWGAckhyoJdYo9QTS%2BbP8ziPud83XNCPe8ZjHeKBRP6nPChKDfiTIcqGhk3%2B9wl6Vv1RYf1ht5EOf%2BL5XprCcqGdUjqMMlBv5CPObQDdkrNDy2LU42t4uCqIfPnc1TFGNoeVPX7kFwX3z%2F5vqzu4Xw8PvfgkdIdeJD%2B%2Bpe8G9pqkDbGGBAUaSPwuDBFUNcADZmO39ffVxzZqMe0WOZL3U5UOS%2BgSMtMVyCEFKBbMXsqFOARPA8HFsjQHooU%2BiyywOTvVNDsO91P%2F0kcBSR9PFbDCd1QQn9JFHB0jSlQ2pHfEJTxICRQKSfqZ9G8%2Fr9%2FJIRaxO2mXjO%2FgUwzbyDTCEp4QlPOlD3HctW0sE9iguGOV6Tes%2BaKbdMdzFXu8aFr%2BgUWsLv4PMgXgmQkd1hSzc0rY4zzA93OOobLZ52li7qbjBF65yj46AChujUh5dfvuFKMFSt4TFZ6qE%2FQTRRl7Ow2zDHhzCluCW7jqhJmrKMKry%2Fr4GOqUBe4FUHrQiIr%2FcQg1UpB0gDKlocPUQShtjKHD%2B3bzNuF5aDjBglsObJwdQhOEKmq9Ihlkp0GzM3Wy%2B%2BthDbN3SwiONaEadJbbMEujAbFgwv1elpUprSq7qzhRIVx0jfJfVmMwEonN2tK%2FLlYs6UwH8K2W5mgDGGMx5CP%2Faf42xX9Ho5EstuuxgiJffVtWGz4LKUW1k%2Bo3WWtSY2hKGDs0y8LOW7lDv&X-Amz-Signature=c5558018cc7d8c37f990553527a0dc8bf980369dfd17a783986bc37a6f478afd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM6F2PBS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHuTENOAUVskkStDyHGMnbUIezgtsChrqpLeEWZQjzHCAiEA2exro9O7VJOokIlHA18D2ZhKn%2FcuEBHTUX1Sd1ljn8kqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyQMV2jdhImQMLdmircAx%2Fjm9SngLd9bKjif86fNEcqQZtoEsmasp72cd11dGoGbK1IAvdK41cAHdqGO3UpdXotdYOXYj7fxgdHqkZBS7rky7%2FlVmzTZfoeU42F6rnvyJIgGd5t2f%2BFaTwtwUF0RqXkRu5%2FYsMu2KXMOBf%2FWGAckhyoJdYo9QTS%2BbP8ziPud83XNCPe8ZjHeKBRP6nPChKDfiTIcqGhk3%2B9wl6Vv1RYf1ht5EOf%2BL5XprCcqGdUjqMMlBv5CPObQDdkrNDy2LU42t4uCqIfPnc1TFGNoeVPX7kFwX3z%2F5vqzu4Xw8PvfgkdIdeJD%2B%2Bpe8G9pqkDbGGBAUaSPwuDBFUNcADZmO39ffVxzZqMe0WOZL3U5UOS%2BgSMtMVyCEFKBbMXsqFOARPA8HFsjQHooU%2BiyywOTvVNDsO91P%2F0kcBSR9PFbDCd1QQn9JFHB0jSlQ2pHfEJTxICRQKSfqZ9G8%2Fr9%2FJIRaxO2mXjO%2FgUwzbyDTCEp4QlPOlD3HctW0sE9iguGOV6Tes%2BaKbdMdzFXu8aFr%2BgUWsLv4PMgXgmQkd1hSzc0rY4zzA93OOobLZ52li7qbjBF65yj46AChujUh5dfvuFKMFSt4TFZ6qE%2FQTRRl7Ow2zDHhzCluCW7jqhJmrKMKry%2Fr4GOqUBe4FUHrQiIr%2FcQg1UpB0gDKlocPUQShtjKHD%2B3bzNuF5aDjBglsObJwdQhOEKmq9Ihlkp0GzM3Wy%2B%2BthDbN3SwiONaEadJbbMEujAbFgwv1elpUprSq7qzhRIVx0jfJfVmMwEonN2tK%2FLlYs6UwH8K2W5mgDGGMx5CP%2Faf42xX9Ho5EstuuxgiJffVtWGz4LKUW1k%2Bo3WWtSY2hKGDs0y8LOW7lDv&X-Amz-Signature=5773f258a6b10acae3fb172e19487496249268289b0bc4c835ee21ba4e45e579&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM6F2PBS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHuTENOAUVskkStDyHGMnbUIezgtsChrqpLeEWZQjzHCAiEA2exro9O7VJOokIlHA18D2ZhKn%2FcuEBHTUX1Sd1ljn8kqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyQMV2jdhImQMLdmircAx%2Fjm9SngLd9bKjif86fNEcqQZtoEsmasp72cd11dGoGbK1IAvdK41cAHdqGO3UpdXotdYOXYj7fxgdHqkZBS7rky7%2FlVmzTZfoeU42F6rnvyJIgGd5t2f%2BFaTwtwUF0RqXkRu5%2FYsMu2KXMOBf%2FWGAckhyoJdYo9QTS%2BbP8ziPud83XNCPe8ZjHeKBRP6nPChKDfiTIcqGhk3%2B9wl6Vv1RYf1ht5EOf%2BL5XprCcqGdUjqMMlBv5CPObQDdkrNDy2LU42t4uCqIfPnc1TFGNoeVPX7kFwX3z%2F5vqzu4Xw8PvfgkdIdeJD%2B%2Bpe8G9pqkDbGGBAUaSPwuDBFUNcADZmO39ffVxzZqMe0WOZL3U5UOS%2BgSMtMVyCEFKBbMXsqFOARPA8HFsjQHooU%2BiyywOTvVNDsO91P%2F0kcBSR9PFbDCd1QQn9JFHB0jSlQ2pHfEJTxICRQKSfqZ9G8%2Fr9%2FJIRaxO2mXjO%2FgUwzbyDTCEp4QlPOlD3HctW0sE9iguGOV6Tes%2BaKbdMdzFXu8aFr%2BgUWsLv4PMgXgmQkd1hSzc0rY4zzA93OOobLZ52li7qbjBF65yj46AChujUh5dfvuFKMFSt4TFZ6qE%2FQTRRl7Ow2zDHhzCluCW7jqhJmrKMKry%2Fr4GOqUBe4FUHrQiIr%2FcQg1UpB0gDKlocPUQShtjKHD%2B3bzNuF5aDjBglsObJwdQhOEKmq9Ihlkp0GzM3Wy%2B%2BthDbN3SwiONaEadJbbMEujAbFgwv1elpUprSq7qzhRIVx0jfJfVmMwEonN2tK%2FLlYs6UwH8K2W5mgDGGMx5CP%2Faf42xX9Ho5EstuuxgiJffVtWGz4LKUW1k%2Bo3WWtSY2hKGDs0y8LOW7lDv&X-Amz-Signature=95a997c122804b0bb98a3b9cb924902fa1dc6a5137e14824ec8737e40da03485&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM6F2PBS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHuTENOAUVskkStDyHGMnbUIezgtsChrqpLeEWZQjzHCAiEA2exro9O7VJOokIlHA18D2ZhKn%2FcuEBHTUX1Sd1ljn8kqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyQMV2jdhImQMLdmircAx%2Fjm9SngLd9bKjif86fNEcqQZtoEsmasp72cd11dGoGbK1IAvdK41cAHdqGO3UpdXotdYOXYj7fxgdHqkZBS7rky7%2FlVmzTZfoeU42F6rnvyJIgGd5t2f%2BFaTwtwUF0RqXkRu5%2FYsMu2KXMOBf%2FWGAckhyoJdYo9QTS%2BbP8ziPud83XNCPe8ZjHeKBRP6nPChKDfiTIcqGhk3%2B9wl6Vv1RYf1ht5EOf%2BL5XprCcqGdUjqMMlBv5CPObQDdkrNDy2LU42t4uCqIfPnc1TFGNoeVPX7kFwX3z%2F5vqzu4Xw8PvfgkdIdeJD%2B%2Bpe8G9pqkDbGGBAUaSPwuDBFUNcADZmO39ffVxzZqMe0WOZL3U5UOS%2BgSMtMVyCEFKBbMXsqFOARPA8HFsjQHooU%2BiyywOTvVNDsO91P%2F0kcBSR9PFbDCd1QQn9JFHB0jSlQ2pHfEJTxICRQKSfqZ9G8%2Fr9%2FJIRaxO2mXjO%2FgUwzbyDTCEp4QlPOlD3HctW0sE9iguGOV6Tes%2BaKbdMdzFXu8aFr%2BgUWsLv4PMgXgmQkd1hSzc0rY4zzA93OOobLZ52li7qbjBF65yj46AChujUh5dfvuFKMFSt4TFZ6qE%2FQTRRl7Ow2zDHhzCluCW7jqhJmrKMKry%2Fr4GOqUBe4FUHrQiIr%2FcQg1UpB0gDKlocPUQShtjKHD%2B3bzNuF5aDjBglsObJwdQhOEKmq9Ihlkp0GzM3Wy%2B%2BthDbN3SwiONaEadJbbMEujAbFgwv1elpUprSq7qzhRIVx0jfJfVmMwEonN2tK%2FLlYs6UwH8K2W5mgDGGMx5CP%2Faf42xX9Ho5EstuuxgiJffVtWGz4LKUW1k%2Bo3WWtSY2hKGDs0y8LOW7lDv&X-Amz-Signature=a0bcf6eb74433fb3416403af2b9fe059b3ed350d2c49522a6bf981bf18d048d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM6F2PBS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHuTENOAUVskkStDyHGMnbUIezgtsChrqpLeEWZQjzHCAiEA2exro9O7VJOokIlHA18D2ZhKn%2FcuEBHTUX1Sd1ljn8kqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyQMV2jdhImQMLdmircAx%2Fjm9SngLd9bKjif86fNEcqQZtoEsmasp72cd11dGoGbK1IAvdK41cAHdqGO3UpdXotdYOXYj7fxgdHqkZBS7rky7%2FlVmzTZfoeU42F6rnvyJIgGd5t2f%2BFaTwtwUF0RqXkRu5%2FYsMu2KXMOBf%2FWGAckhyoJdYo9QTS%2BbP8ziPud83XNCPe8ZjHeKBRP6nPChKDfiTIcqGhk3%2B9wl6Vv1RYf1ht5EOf%2BL5XprCcqGdUjqMMlBv5CPObQDdkrNDy2LU42t4uCqIfPnc1TFGNoeVPX7kFwX3z%2F5vqzu4Xw8PvfgkdIdeJD%2B%2Bpe8G9pqkDbGGBAUaSPwuDBFUNcADZmO39ffVxzZqMe0WOZL3U5UOS%2BgSMtMVyCEFKBbMXsqFOARPA8HFsjQHooU%2BiyywOTvVNDsO91P%2F0kcBSR9PFbDCd1QQn9JFHB0jSlQ2pHfEJTxICRQKSfqZ9G8%2Fr9%2FJIRaxO2mXjO%2FgUwzbyDTCEp4QlPOlD3HctW0sE9iguGOV6Tes%2BaKbdMdzFXu8aFr%2BgUWsLv4PMgXgmQkd1hSzc0rY4zzA93OOobLZ52li7qbjBF65yj46AChujUh5dfvuFKMFSt4TFZ6qE%2FQTRRl7Ow2zDHhzCluCW7jqhJmrKMKry%2Fr4GOqUBe4FUHrQiIr%2FcQg1UpB0gDKlocPUQShtjKHD%2B3bzNuF5aDjBglsObJwdQhOEKmq9Ihlkp0GzM3Wy%2B%2BthDbN3SwiONaEadJbbMEujAbFgwv1elpUprSq7qzhRIVx0jfJfVmMwEonN2tK%2FLlYs6UwH8K2W5mgDGGMx5CP%2Faf42xX9Ho5EstuuxgiJffVtWGz4LKUW1k%2Bo3WWtSY2hKGDs0y8LOW7lDv&X-Amz-Signature=5bea4c5b26eceb03ead1677bb290aac2c0ed3ee4519d19992958b3942e2795e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
