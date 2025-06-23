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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677RX4UBC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCml4vMzb1HVceP6%2FycpLFkpmD4Z50xWelQZHuxvw6AYgIhAL0aHlMXuh6AkOqermhZEQzMFIDe6IvbYvruC9WLxUoGKv8DCB4QABoMNjM3NDIzMTgzODA1IgzPpHLbQhUFTpotMGMq3ANsJ75%2BLyVU1ixufyj57wRgsRRF8EaRNCO1MrtCFRC2faN5LL2XD%2FOnGPopEx3FG%2BxRs2omZmmYmBx4hFORBucCHPJH7hGSk2cjedMbT4otVfVUvqeardPZxq5akXxjCoL77mrKhzQsqCCpOzZCkGvYhe4BuFGRHdNZP%2BW44jAVIX%2FsJi2mLwgHA%2BdmmBrL0ecBacYBENOfgsYDsAi8DSwinOgcrFiV%2Fgy6MGvrGHinS%2FumeK3XN6ZpRYYkWLG2ziUF6iwr2Z5kRRg08pZBXqHIthceBruth0u4lfh6fGw86RAoLJtw2OVPMJOSyqW%2BAbbE4KnQAVFGqQ0XfJDQGzsUSmU0t3zEYv82ccqGc4%2BMEvu7td6zcMiMyMH%2FXiaiptsbgjKj0hwVWYvwWYE3vLXYWO8g4zUwQYL%2BcSyt46dSF8IZMgF%2BO%2BACxTpa8owpGva%2FCv6LPeCu0mb9DQhofWfK%2FeGwapJFvc83H%2BW2r7pBOPC6h8gJjuizXUXQX6mB41AzNSctYiWoRkFqdvUcrWXgFO%2Buwjk51hXuWBIZA%2BlIZf0mUik1iUc6%2FJ5tjdfhVyDpP2C51Azxut5uWlUX14wQP5LuPQd%2BebkQIBAQZIbVhgP%2Ft2XFDoGEwG4L3DCw%2F%2BbCBjqkAf0ZCc6FeCQEcydS8G7Sn9FKjwLF2cy8BLPm9L7PGfEyqF5%2BtjtJ9ZPzCKRl0QeIsB8WPHF5FGJgibhqWmFUOdtvDCa7%2F6%2Fa%2FLwc2L6Z0QGerwTTWAvjgxJu4U2egBjD794gDdXQU8rukri65RH2u7VqsMtglADyltcdNcMkRDiqxLTdkEUE2UsLh3ZVpVQC3GrZQ97l0eyUOVqmmLqhx3PtSV3u&X-Amz-Signature=da9d46ee2258aceb7792285ae86e65740801738cdf49c92b05b2b3995e69e34c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677RX4UBC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCml4vMzb1HVceP6%2FycpLFkpmD4Z50xWelQZHuxvw6AYgIhAL0aHlMXuh6AkOqermhZEQzMFIDe6IvbYvruC9WLxUoGKv8DCB4QABoMNjM3NDIzMTgzODA1IgzPpHLbQhUFTpotMGMq3ANsJ75%2BLyVU1ixufyj57wRgsRRF8EaRNCO1MrtCFRC2faN5LL2XD%2FOnGPopEx3FG%2BxRs2omZmmYmBx4hFORBucCHPJH7hGSk2cjedMbT4otVfVUvqeardPZxq5akXxjCoL77mrKhzQsqCCpOzZCkGvYhe4BuFGRHdNZP%2BW44jAVIX%2FsJi2mLwgHA%2BdmmBrL0ecBacYBENOfgsYDsAi8DSwinOgcrFiV%2Fgy6MGvrGHinS%2FumeK3XN6ZpRYYkWLG2ziUF6iwr2Z5kRRg08pZBXqHIthceBruth0u4lfh6fGw86RAoLJtw2OVPMJOSyqW%2BAbbE4KnQAVFGqQ0XfJDQGzsUSmU0t3zEYv82ccqGc4%2BMEvu7td6zcMiMyMH%2FXiaiptsbgjKj0hwVWYvwWYE3vLXYWO8g4zUwQYL%2BcSyt46dSF8IZMgF%2BO%2BACxTpa8owpGva%2FCv6LPeCu0mb9DQhofWfK%2FeGwapJFvc83H%2BW2r7pBOPC6h8gJjuizXUXQX6mB41AzNSctYiWoRkFqdvUcrWXgFO%2Buwjk51hXuWBIZA%2BlIZf0mUik1iUc6%2FJ5tjdfhVyDpP2C51Azxut5uWlUX14wQP5LuPQd%2BebkQIBAQZIbVhgP%2Ft2XFDoGEwG4L3DCw%2F%2BbCBjqkAf0ZCc6FeCQEcydS8G7Sn9FKjwLF2cy8BLPm9L7PGfEyqF5%2BtjtJ9ZPzCKRl0QeIsB8WPHF5FGJgibhqWmFUOdtvDCa7%2F6%2Fa%2FLwc2L6Z0QGerwTTWAvjgxJu4U2egBjD794gDdXQU8rukri65RH2u7VqsMtglADyltcdNcMkRDiqxLTdkEUE2UsLh3ZVpVQC3GrZQ97l0eyUOVqmmLqhx3PtSV3u&X-Amz-Signature=e234727635ae8f6537938f2e72ca0bf507c7415f077f724425937bec33be4065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677RX4UBC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCml4vMzb1HVceP6%2FycpLFkpmD4Z50xWelQZHuxvw6AYgIhAL0aHlMXuh6AkOqermhZEQzMFIDe6IvbYvruC9WLxUoGKv8DCB4QABoMNjM3NDIzMTgzODA1IgzPpHLbQhUFTpotMGMq3ANsJ75%2BLyVU1ixufyj57wRgsRRF8EaRNCO1MrtCFRC2faN5LL2XD%2FOnGPopEx3FG%2BxRs2omZmmYmBx4hFORBucCHPJH7hGSk2cjedMbT4otVfVUvqeardPZxq5akXxjCoL77mrKhzQsqCCpOzZCkGvYhe4BuFGRHdNZP%2BW44jAVIX%2FsJi2mLwgHA%2BdmmBrL0ecBacYBENOfgsYDsAi8DSwinOgcrFiV%2Fgy6MGvrGHinS%2FumeK3XN6ZpRYYkWLG2ziUF6iwr2Z5kRRg08pZBXqHIthceBruth0u4lfh6fGw86RAoLJtw2OVPMJOSyqW%2BAbbE4KnQAVFGqQ0XfJDQGzsUSmU0t3zEYv82ccqGc4%2BMEvu7td6zcMiMyMH%2FXiaiptsbgjKj0hwVWYvwWYE3vLXYWO8g4zUwQYL%2BcSyt46dSF8IZMgF%2BO%2BACxTpa8owpGva%2FCv6LPeCu0mb9DQhofWfK%2FeGwapJFvc83H%2BW2r7pBOPC6h8gJjuizXUXQX6mB41AzNSctYiWoRkFqdvUcrWXgFO%2Buwjk51hXuWBIZA%2BlIZf0mUik1iUc6%2FJ5tjdfhVyDpP2C51Azxut5uWlUX14wQP5LuPQd%2BebkQIBAQZIbVhgP%2Ft2XFDoGEwG4L3DCw%2F%2BbCBjqkAf0ZCc6FeCQEcydS8G7Sn9FKjwLF2cy8BLPm9L7PGfEyqF5%2BtjtJ9ZPzCKRl0QeIsB8WPHF5FGJgibhqWmFUOdtvDCa7%2F6%2Fa%2FLwc2L6Z0QGerwTTWAvjgxJu4U2egBjD794gDdXQU8rukri65RH2u7VqsMtglADyltcdNcMkRDiqxLTdkEUE2UsLh3ZVpVQC3GrZQ97l0eyUOVqmmLqhx3PtSV3u&X-Amz-Signature=457760ccd0ad07ef71339527e5c348a2ac150a2673e6eb867538a977a160a0ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677RX4UBC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCml4vMzb1HVceP6%2FycpLFkpmD4Z50xWelQZHuxvw6AYgIhAL0aHlMXuh6AkOqermhZEQzMFIDe6IvbYvruC9WLxUoGKv8DCB4QABoMNjM3NDIzMTgzODA1IgzPpHLbQhUFTpotMGMq3ANsJ75%2BLyVU1ixufyj57wRgsRRF8EaRNCO1MrtCFRC2faN5LL2XD%2FOnGPopEx3FG%2BxRs2omZmmYmBx4hFORBucCHPJH7hGSk2cjedMbT4otVfVUvqeardPZxq5akXxjCoL77mrKhzQsqCCpOzZCkGvYhe4BuFGRHdNZP%2BW44jAVIX%2FsJi2mLwgHA%2BdmmBrL0ecBacYBENOfgsYDsAi8DSwinOgcrFiV%2Fgy6MGvrGHinS%2FumeK3XN6ZpRYYkWLG2ziUF6iwr2Z5kRRg08pZBXqHIthceBruth0u4lfh6fGw86RAoLJtw2OVPMJOSyqW%2BAbbE4KnQAVFGqQ0XfJDQGzsUSmU0t3zEYv82ccqGc4%2BMEvu7td6zcMiMyMH%2FXiaiptsbgjKj0hwVWYvwWYE3vLXYWO8g4zUwQYL%2BcSyt46dSF8IZMgF%2BO%2BACxTpa8owpGva%2FCv6LPeCu0mb9DQhofWfK%2FeGwapJFvc83H%2BW2r7pBOPC6h8gJjuizXUXQX6mB41AzNSctYiWoRkFqdvUcrWXgFO%2Buwjk51hXuWBIZA%2BlIZf0mUik1iUc6%2FJ5tjdfhVyDpP2C51Azxut5uWlUX14wQP5LuPQd%2BebkQIBAQZIbVhgP%2Ft2XFDoGEwG4L3DCw%2F%2BbCBjqkAf0ZCc6FeCQEcydS8G7Sn9FKjwLF2cy8BLPm9L7PGfEyqF5%2BtjtJ9ZPzCKRl0QeIsB8WPHF5FGJgibhqWmFUOdtvDCa7%2F6%2Fa%2FLwc2L6Z0QGerwTTWAvjgxJu4U2egBjD794gDdXQU8rukri65RH2u7VqsMtglADyltcdNcMkRDiqxLTdkEUE2UsLh3ZVpVQC3GrZQ97l0eyUOVqmmLqhx3PtSV3u&X-Amz-Signature=506830b0ac3b63b2af0d286d401afd416cbce115cd296b51eec75842fa9a4bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677RX4UBC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCml4vMzb1HVceP6%2FycpLFkpmD4Z50xWelQZHuxvw6AYgIhAL0aHlMXuh6AkOqermhZEQzMFIDe6IvbYvruC9WLxUoGKv8DCB4QABoMNjM3NDIzMTgzODA1IgzPpHLbQhUFTpotMGMq3ANsJ75%2BLyVU1ixufyj57wRgsRRF8EaRNCO1MrtCFRC2faN5LL2XD%2FOnGPopEx3FG%2BxRs2omZmmYmBx4hFORBucCHPJH7hGSk2cjedMbT4otVfVUvqeardPZxq5akXxjCoL77mrKhzQsqCCpOzZCkGvYhe4BuFGRHdNZP%2BW44jAVIX%2FsJi2mLwgHA%2BdmmBrL0ecBacYBENOfgsYDsAi8DSwinOgcrFiV%2Fgy6MGvrGHinS%2FumeK3XN6ZpRYYkWLG2ziUF6iwr2Z5kRRg08pZBXqHIthceBruth0u4lfh6fGw86RAoLJtw2OVPMJOSyqW%2BAbbE4KnQAVFGqQ0XfJDQGzsUSmU0t3zEYv82ccqGc4%2BMEvu7td6zcMiMyMH%2FXiaiptsbgjKj0hwVWYvwWYE3vLXYWO8g4zUwQYL%2BcSyt46dSF8IZMgF%2BO%2BACxTpa8owpGva%2FCv6LPeCu0mb9DQhofWfK%2FeGwapJFvc83H%2BW2r7pBOPC6h8gJjuizXUXQX6mB41AzNSctYiWoRkFqdvUcrWXgFO%2Buwjk51hXuWBIZA%2BlIZf0mUik1iUc6%2FJ5tjdfhVyDpP2C51Azxut5uWlUX14wQP5LuPQd%2BebkQIBAQZIbVhgP%2Ft2XFDoGEwG4L3DCw%2F%2BbCBjqkAf0ZCc6FeCQEcydS8G7Sn9FKjwLF2cy8BLPm9L7PGfEyqF5%2BtjtJ9ZPzCKRl0QeIsB8WPHF5FGJgibhqWmFUOdtvDCa7%2F6%2Fa%2FLwc2L6Z0QGerwTTWAvjgxJu4U2egBjD794gDdXQU8rukri65RH2u7VqsMtglADyltcdNcMkRDiqxLTdkEUE2UsLh3ZVpVQC3GrZQ97l0eyUOVqmmLqhx3PtSV3u&X-Amz-Signature=f964b1df0b2a16121c90b5315207d21046688c529e8f3c36ad07fdd867721312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
