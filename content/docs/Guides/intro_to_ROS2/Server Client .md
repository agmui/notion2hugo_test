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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR4JW6ZJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIB8kMo%2FLyX%2BcjZZQ0ZkUMpTQcztrg7YBBSZ6jLJM0gFzAiAduROgCTl7MZ1B0NpkxlpftfuboKQTHCLYZ%2Fd83jJC9Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMP5i9lvh8DbQUlmzDKtwDU258J4WlDVSK7Z7iYqhArjCWEBOfPvDI7KIeHb06%2B7dQH%2FxzSfFYGxDDzUqiA441wNQBwGMaC823zD4iaXYsPb%2Fu%2FcG8xN0DEtGcLm%2BbWL7H%2F%2F3DAqY%2Fj910ud0aVng%2FrkzCXcirXlWsZEkAZHPTghQrILqcOGoeVZELWqTAsijQVfzhhMtqqqjnGf7MjX4TihNB%2F3kz28dANwH%2FMdJ0SJS7o4%2BNVXYvNzUttLI1kD5NzhkBiBkjLJGbXBkKpPDWW%2FOKfbjk93YDVV%2By%2F93sYScFqW%2B1Fgjjp9Mu5imE8%2FMPg%2BBOBEjGPLMza0NtAaPK%2BSe1t7oU%2BvxolLeGpefANz7HQscWUbmiTOF4Gvtv42CSjfUuaNjMBfk2nDDc4g3T4OW2DzaGKMmJsDtWZ4%2F%2FsGms1A8ICEs7STdC4BrwNZEb2eyl2jm%2FP6weWeQ7J0T7bMzPnTjRTmCAtci5cA1cTUYXwsKsXrIpvSneRAQa8Jt8d2TVtowj6QX3RMeU3SQuJOjO4N7Ha%2BIo%2Beuj7nwt%2BFfErfX920GvyNOxqdkJIay%2FfAsTPrHzI%2BursOzipaC7t6dzHbvBIpcptpoVk%2FOn17PPXO1A4uZqI4rmZQj378uSxpnjW7x%2Bf%2BbOXqgwsoTBvQY6pgGKoNk%2ByI7BpUuBUWoq3CE06%2B4glwfDGh0Deaag1s9z461CJUgDk4CdABGB6FzBBUzzt23DyKmxop%2BATrvmsvncS5Pk5qKfCjUrmnbd%2BzVauBd3pbGAz2PecNvcXrCLZUyBy%2BBkL%2FSD6BXTFjEyLMUVLwziHJFxzEkl6rubeifeOGnLrgsSVHekEIIAbK6WWtsDm%2BueSQId2I1sAZCoy5FapXjq8WMt&X-Amz-Signature=0d2cba3e5d1f645e15f29980cb522468726fd72e75e53d7d84ba216d689bb8ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR4JW6ZJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIB8kMo%2FLyX%2BcjZZQ0ZkUMpTQcztrg7YBBSZ6jLJM0gFzAiAduROgCTl7MZ1B0NpkxlpftfuboKQTHCLYZ%2Fd83jJC9Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMP5i9lvh8DbQUlmzDKtwDU258J4WlDVSK7Z7iYqhArjCWEBOfPvDI7KIeHb06%2B7dQH%2FxzSfFYGxDDzUqiA441wNQBwGMaC823zD4iaXYsPb%2Fu%2FcG8xN0DEtGcLm%2BbWL7H%2F%2F3DAqY%2Fj910ud0aVng%2FrkzCXcirXlWsZEkAZHPTghQrILqcOGoeVZELWqTAsijQVfzhhMtqqqjnGf7MjX4TihNB%2F3kz28dANwH%2FMdJ0SJS7o4%2BNVXYvNzUttLI1kD5NzhkBiBkjLJGbXBkKpPDWW%2FOKfbjk93YDVV%2By%2F93sYScFqW%2B1Fgjjp9Mu5imE8%2FMPg%2BBOBEjGPLMza0NtAaPK%2BSe1t7oU%2BvxolLeGpefANz7HQscWUbmiTOF4Gvtv42CSjfUuaNjMBfk2nDDc4g3T4OW2DzaGKMmJsDtWZ4%2F%2FsGms1A8ICEs7STdC4BrwNZEb2eyl2jm%2FP6weWeQ7J0T7bMzPnTjRTmCAtci5cA1cTUYXwsKsXrIpvSneRAQa8Jt8d2TVtowj6QX3RMeU3SQuJOjO4N7Ha%2BIo%2Beuj7nwt%2BFfErfX920GvyNOxqdkJIay%2FfAsTPrHzI%2BursOzipaC7t6dzHbvBIpcptpoVk%2FOn17PPXO1A4uZqI4rmZQj378uSxpnjW7x%2Bf%2BbOXqgwsoTBvQY6pgGKoNk%2ByI7BpUuBUWoq3CE06%2B4glwfDGh0Deaag1s9z461CJUgDk4CdABGB6FzBBUzzt23DyKmxop%2BATrvmsvncS5Pk5qKfCjUrmnbd%2BzVauBd3pbGAz2PecNvcXrCLZUyBy%2BBkL%2FSD6BXTFjEyLMUVLwziHJFxzEkl6rubeifeOGnLrgsSVHekEIIAbK6WWtsDm%2BueSQId2I1sAZCoy5FapXjq8WMt&X-Amz-Signature=acbac70f504dd3b1691fce1d479912ca96382121f4324d3eea693e1288d6db21&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR4JW6ZJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIB8kMo%2FLyX%2BcjZZQ0ZkUMpTQcztrg7YBBSZ6jLJM0gFzAiAduROgCTl7MZ1B0NpkxlpftfuboKQTHCLYZ%2Fd83jJC9Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMP5i9lvh8DbQUlmzDKtwDU258J4WlDVSK7Z7iYqhArjCWEBOfPvDI7KIeHb06%2B7dQH%2FxzSfFYGxDDzUqiA441wNQBwGMaC823zD4iaXYsPb%2Fu%2FcG8xN0DEtGcLm%2BbWL7H%2F%2F3DAqY%2Fj910ud0aVng%2FrkzCXcirXlWsZEkAZHPTghQrILqcOGoeVZELWqTAsijQVfzhhMtqqqjnGf7MjX4TihNB%2F3kz28dANwH%2FMdJ0SJS7o4%2BNVXYvNzUttLI1kD5NzhkBiBkjLJGbXBkKpPDWW%2FOKfbjk93YDVV%2By%2F93sYScFqW%2B1Fgjjp9Mu5imE8%2FMPg%2BBOBEjGPLMza0NtAaPK%2BSe1t7oU%2BvxolLeGpefANz7HQscWUbmiTOF4Gvtv42CSjfUuaNjMBfk2nDDc4g3T4OW2DzaGKMmJsDtWZ4%2F%2FsGms1A8ICEs7STdC4BrwNZEb2eyl2jm%2FP6weWeQ7J0T7bMzPnTjRTmCAtci5cA1cTUYXwsKsXrIpvSneRAQa8Jt8d2TVtowj6QX3RMeU3SQuJOjO4N7Ha%2BIo%2Beuj7nwt%2BFfErfX920GvyNOxqdkJIay%2FfAsTPrHzI%2BursOzipaC7t6dzHbvBIpcptpoVk%2FOn17PPXO1A4uZqI4rmZQj378uSxpnjW7x%2Bf%2BbOXqgwsoTBvQY6pgGKoNk%2ByI7BpUuBUWoq3CE06%2B4glwfDGh0Deaag1s9z461CJUgDk4CdABGB6FzBBUzzt23DyKmxop%2BATrvmsvncS5Pk5qKfCjUrmnbd%2BzVauBd3pbGAz2PecNvcXrCLZUyBy%2BBkL%2FSD6BXTFjEyLMUVLwziHJFxzEkl6rubeifeOGnLrgsSVHekEIIAbK6WWtsDm%2BueSQId2I1sAZCoy5FapXjq8WMt&X-Amz-Signature=31de6c5f4bf88ff41373e240516ea1955203fe18a1e1822e546f16891e9064ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR4JW6ZJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIB8kMo%2FLyX%2BcjZZQ0ZkUMpTQcztrg7YBBSZ6jLJM0gFzAiAduROgCTl7MZ1B0NpkxlpftfuboKQTHCLYZ%2Fd83jJC9Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMP5i9lvh8DbQUlmzDKtwDU258J4WlDVSK7Z7iYqhArjCWEBOfPvDI7KIeHb06%2B7dQH%2FxzSfFYGxDDzUqiA441wNQBwGMaC823zD4iaXYsPb%2Fu%2FcG8xN0DEtGcLm%2BbWL7H%2F%2F3DAqY%2Fj910ud0aVng%2FrkzCXcirXlWsZEkAZHPTghQrILqcOGoeVZELWqTAsijQVfzhhMtqqqjnGf7MjX4TihNB%2F3kz28dANwH%2FMdJ0SJS7o4%2BNVXYvNzUttLI1kD5NzhkBiBkjLJGbXBkKpPDWW%2FOKfbjk93YDVV%2By%2F93sYScFqW%2B1Fgjjp9Mu5imE8%2FMPg%2BBOBEjGPLMza0NtAaPK%2BSe1t7oU%2BvxolLeGpefANz7HQscWUbmiTOF4Gvtv42CSjfUuaNjMBfk2nDDc4g3T4OW2DzaGKMmJsDtWZ4%2F%2FsGms1A8ICEs7STdC4BrwNZEb2eyl2jm%2FP6weWeQ7J0T7bMzPnTjRTmCAtci5cA1cTUYXwsKsXrIpvSneRAQa8Jt8d2TVtowj6QX3RMeU3SQuJOjO4N7Ha%2BIo%2Beuj7nwt%2BFfErfX920GvyNOxqdkJIay%2FfAsTPrHzI%2BursOzipaC7t6dzHbvBIpcptpoVk%2FOn17PPXO1A4uZqI4rmZQj378uSxpnjW7x%2Bf%2BbOXqgwsoTBvQY6pgGKoNk%2ByI7BpUuBUWoq3CE06%2B4glwfDGh0Deaag1s9z461CJUgDk4CdABGB6FzBBUzzt23DyKmxop%2BATrvmsvncS5Pk5qKfCjUrmnbd%2BzVauBd3pbGAz2PecNvcXrCLZUyBy%2BBkL%2FSD6BXTFjEyLMUVLwziHJFxzEkl6rubeifeOGnLrgsSVHekEIIAbK6WWtsDm%2BueSQId2I1sAZCoy5FapXjq8WMt&X-Amz-Signature=422381d0c941795105427e52176efb91e247aa3d1460910199510d1e45a2c71a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR4JW6ZJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIB8kMo%2FLyX%2BcjZZQ0ZkUMpTQcztrg7YBBSZ6jLJM0gFzAiAduROgCTl7MZ1B0NpkxlpftfuboKQTHCLYZ%2Fd83jJC9Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMP5i9lvh8DbQUlmzDKtwDU258J4WlDVSK7Z7iYqhArjCWEBOfPvDI7KIeHb06%2B7dQH%2FxzSfFYGxDDzUqiA441wNQBwGMaC823zD4iaXYsPb%2Fu%2FcG8xN0DEtGcLm%2BbWL7H%2F%2F3DAqY%2Fj910ud0aVng%2FrkzCXcirXlWsZEkAZHPTghQrILqcOGoeVZELWqTAsijQVfzhhMtqqqjnGf7MjX4TihNB%2F3kz28dANwH%2FMdJ0SJS7o4%2BNVXYvNzUttLI1kD5NzhkBiBkjLJGbXBkKpPDWW%2FOKfbjk93YDVV%2By%2F93sYScFqW%2B1Fgjjp9Mu5imE8%2FMPg%2BBOBEjGPLMza0NtAaPK%2BSe1t7oU%2BvxolLeGpefANz7HQscWUbmiTOF4Gvtv42CSjfUuaNjMBfk2nDDc4g3T4OW2DzaGKMmJsDtWZ4%2F%2FsGms1A8ICEs7STdC4BrwNZEb2eyl2jm%2FP6weWeQ7J0T7bMzPnTjRTmCAtci5cA1cTUYXwsKsXrIpvSneRAQa8Jt8d2TVtowj6QX3RMeU3SQuJOjO4N7Ha%2BIo%2Beuj7nwt%2BFfErfX920GvyNOxqdkJIay%2FfAsTPrHzI%2BursOzipaC7t6dzHbvBIpcptpoVk%2FOn17PPXO1A4uZqI4rmZQj378uSxpnjW7x%2Bf%2BbOXqgwsoTBvQY6pgGKoNk%2ByI7BpUuBUWoq3CE06%2B4glwfDGh0Deaag1s9z461CJUgDk4CdABGB6FzBBUzzt23DyKmxop%2BATrvmsvncS5Pk5qKfCjUrmnbd%2BzVauBd3pbGAz2PecNvcXrCLZUyBy%2BBkL%2FSD6BXTFjEyLMUVLwziHJFxzEkl6rubeifeOGnLrgsSVHekEIIAbK6WWtsDm%2BueSQId2I1sAZCoy5FapXjq8WMt&X-Amz-Signature=9b724ee587445a506b74d5f2e064d0448e914840c3357b7dd3e760757c0f3ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
