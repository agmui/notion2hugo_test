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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H2K4RFM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0%2FtYlGwgqUvpCKYqbhKBc4pW7Ns7ozPNWjZlNJxaHQwIhAJUxZ14nD35WZnC1nKOzOrbGE%2FACQjx6YOwPdWsLsHYFKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVrhdUzrybImMfMhoq3AN%2BoEfWRBqPijw4llwXRuuiqkJZica2CLFibS5Olagk3b5wojYIWo6cNMCTD4AIKWzLvnLe%2B%2BVHdB0euOP%2Bp34C8bunIoY8ZRUq9YSYOF8QJ%2FqMcgB7n%2FYc2qz9aH7ygWDybW%2FKz2c7RQqcpLJIm5%2BqU1YGlrp65WaLrH1JweJb1hFQYViXVIk7Gm6b7Nf0dYPI128mg9P3gocLWy8WPvVlmiHaKICqBBk85cVjNmMDNcCVzhE1g2iv92B%2FtSyNB07YDZm8nlUXmtqW3viHqMPbH3hT4rhhOfwHaqA1zD7W9Ww1Nu1LWIqEErHu7NPsRMe57NDyUZGSgalyhtOpDr9m9%2FAqXdo5rjw5jQE9fj2vrdCI4Z8gF3fCy45sFwWHpzrROTgvcfisxzr%2BtIvX90lmW1zlCwvwMf8wgNL2kNLfSg77hxmUjj13r1VjerODyVAM%2B9QCIAhrOXBfyRZIZC2SL5i2LaFW4VRIGhGt4NHMk%2BLQRoiFoEMqIp1ha32%2FpM7DzlRlx7ZFIRPUv7onZ5h5jU%2BVLnbaCUHKVPqHBGJeW9VktuPJiTLrnOq7mtjWKhdGR7x8xCJ7SjsyDC%2BL1KDoz6cfzq5VORL2zRqOrxAMVkowaFSFZ%2FCVZ4ZJlTD2xbDBBjqkAW%2BSF9nG2tNwZRg3BA1ubD3tXbldrXDQ5ADRLoQPjR%2F660jfpjZtQGWjooS1kGcZd54xTZVJwA%2BQJIPiqm7QgvO6S%2FGMIdHv4i%2Bj%2Faa1L7pOomEXPM12mDS7rdfoY%2FO6%2Brdbe8jWo9WxC8kjPObLkenmM0Y3t8TEZKDnhkqYYwBHO6JooPyjx4sjvs0DKi2oHzlfeL8j1LYVSKUpVvZpQNxaNYvG&X-Amz-Signature=32dc7fc769e4c8a7590c5e23a31867e9c5cadd279bc4708461c754e04252e176&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H2K4RFM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0%2FtYlGwgqUvpCKYqbhKBc4pW7Ns7ozPNWjZlNJxaHQwIhAJUxZ14nD35WZnC1nKOzOrbGE%2FACQjx6YOwPdWsLsHYFKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVrhdUzrybImMfMhoq3AN%2BoEfWRBqPijw4llwXRuuiqkJZica2CLFibS5Olagk3b5wojYIWo6cNMCTD4AIKWzLvnLe%2B%2BVHdB0euOP%2Bp34C8bunIoY8ZRUq9YSYOF8QJ%2FqMcgB7n%2FYc2qz9aH7ygWDybW%2FKz2c7RQqcpLJIm5%2BqU1YGlrp65WaLrH1JweJb1hFQYViXVIk7Gm6b7Nf0dYPI128mg9P3gocLWy8WPvVlmiHaKICqBBk85cVjNmMDNcCVzhE1g2iv92B%2FtSyNB07YDZm8nlUXmtqW3viHqMPbH3hT4rhhOfwHaqA1zD7W9Ww1Nu1LWIqEErHu7NPsRMe57NDyUZGSgalyhtOpDr9m9%2FAqXdo5rjw5jQE9fj2vrdCI4Z8gF3fCy45sFwWHpzrROTgvcfisxzr%2BtIvX90lmW1zlCwvwMf8wgNL2kNLfSg77hxmUjj13r1VjerODyVAM%2B9QCIAhrOXBfyRZIZC2SL5i2LaFW4VRIGhGt4NHMk%2BLQRoiFoEMqIp1ha32%2FpM7DzlRlx7ZFIRPUv7onZ5h5jU%2BVLnbaCUHKVPqHBGJeW9VktuPJiTLrnOq7mtjWKhdGR7x8xCJ7SjsyDC%2BL1KDoz6cfzq5VORL2zRqOrxAMVkowaFSFZ%2FCVZ4ZJlTD2xbDBBjqkAW%2BSF9nG2tNwZRg3BA1ubD3tXbldrXDQ5ADRLoQPjR%2F660jfpjZtQGWjooS1kGcZd54xTZVJwA%2BQJIPiqm7QgvO6S%2FGMIdHv4i%2Bj%2Faa1L7pOomEXPM12mDS7rdfoY%2FO6%2Brdbe8jWo9WxC8kjPObLkenmM0Y3t8TEZKDnhkqYYwBHO6JooPyjx4sjvs0DKi2oHzlfeL8j1LYVSKUpVvZpQNxaNYvG&X-Amz-Signature=aee1606b0b9d966d3f63f8197059c89b50b615982449db30bce2c1100d632603&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H2K4RFM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0%2FtYlGwgqUvpCKYqbhKBc4pW7Ns7ozPNWjZlNJxaHQwIhAJUxZ14nD35WZnC1nKOzOrbGE%2FACQjx6YOwPdWsLsHYFKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVrhdUzrybImMfMhoq3AN%2BoEfWRBqPijw4llwXRuuiqkJZica2CLFibS5Olagk3b5wojYIWo6cNMCTD4AIKWzLvnLe%2B%2BVHdB0euOP%2Bp34C8bunIoY8ZRUq9YSYOF8QJ%2FqMcgB7n%2FYc2qz9aH7ygWDybW%2FKz2c7RQqcpLJIm5%2BqU1YGlrp65WaLrH1JweJb1hFQYViXVIk7Gm6b7Nf0dYPI128mg9P3gocLWy8WPvVlmiHaKICqBBk85cVjNmMDNcCVzhE1g2iv92B%2FtSyNB07YDZm8nlUXmtqW3viHqMPbH3hT4rhhOfwHaqA1zD7W9Ww1Nu1LWIqEErHu7NPsRMe57NDyUZGSgalyhtOpDr9m9%2FAqXdo5rjw5jQE9fj2vrdCI4Z8gF3fCy45sFwWHpzrROTgvcfisxzr%2BtIvX90lmW1zlCwvwMf8wgNL2kNLfSg77hxmUjj13r1VjerODyVAM%2B9QCIAhrOXBfyRZIZC2SL5i2LaFW4VRIGhGt4NHMk%2BLQRoiFoEMqIp1ha32%2FpM7DzlRlx7ZFIRPUv7onZ5h5jU%2BVLnbaCUHKVPqHBGJeW9VktuPJiTLrnOq7mtjWKhdGR7x8xCJ7SjsyDC%2BL1KDoz6cfzq5VORL2zRqOrxAMVkowaFSFZ%2FCVZ4ZJlTD2xbDBBjqkAW%2BSF9nG2tNwZRg3BA1ubD3tXbldrXDQ5ADRLoQPjR%2F660jfpjZtQGWjooS1kGcZd54xTZVJwA%2BQJIPiqm7QgvO6S%2FGMIdHv4i%2Bj%2Faa1L7pOomEXPM12mDS7rdfoY%2FO6%2Brdbe8jWo9WxC8kjPObLkenmM0Y3t8TEZKDnhkqYYwBHO6JooPyjx4sjvs0DKi2oHzlfeL8j1LYVSKUpVvZpQNxaNYvG&X-Amz-Signature=dd0e7c4ad69096a3f3f02e332d07a02b7c8d9203d015040c5a58ce8e1657706e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H2K4RFM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0%2FtYlGwgqUvpCKYqbhKBc4pW7Ns7ozPNWjZlNJxaHQwIhAJUxZ14nD35WZnC1nKOzOrbGE%2FACQjx6YOwPdWsLsHYFKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVrhdUzrybImMfMhoq3AN%2BoEfWRBqPijw4llwXRuuiqkJZica2CLFibS5Olagk3b5wojYIWo6cNMCTD4AIKWzLvnLe%2B%2BVHdB0euOP%2Bp34C8bunIoY8ZRUq9YSYOF8QJ%2FqMcgB7n%2FYc2qz9aH7ygWDybW%2FKz2c7RQqcpLJIm5%2BqU1YGlrp65WaLrH1JweJb1hFQYViXVIk7Gm6b7Nf0dYPI128mg9P3gocLWy8WPvVlmiHaKICqBBk85cVjNmMDNcCVzhE1g2iv92B%2FtSyNB07YDZm8nlUXmtqW3viHqMPbH3hT4rhhOfwHaqA1zD7W9Ww1Nu1LWIqEErHu7NPsRMe57NDyUZGSgalyhtOpDr9m9%2FAqXdo5rjw5jQE9fj2vrdCI4Z8gF3fCy45sFwWHpzrROTgvcfisxzr%2BtIvX90lmW1zlCwvwMf8wgNL2kNLfSg77hxmUjj13r1VjerODyVAM%2B9QCIAhrOXBfyRZIZC2SL5i2LaFW4VRIGhGt4NHMk%2BLQRoiFoEMqIp1ha32%2FpM7DzlRlx7ZFIRPUv7onZ5h5jU%2BVLnbaCUHKVPqHBGJeW9VktuPJiTLrnOq7mtjWKhdGR7x8xCJ7SjsyDC%2BL1KDoz6cfzq5VORL2zRqOrxAMVkowaFSFZ%2FCVZ4ZJlTD2xbDBBjqkAW%2BSF9nG2tNwZRg3BA1ubD3tXbldrXDQ5ADRLoQPjR%2F660jfpjZtQGWjooS1kGcZd54xTZVJwA%2BQJIPiqm7QgvO6S%2FGMIdHv4i%2Bj%2Faa1L7pOomEXPM12mDS7rdfoY%2FO6%2Brdbe8jWo9WxC8kjPObLkenmM0Y3t8TEZKDnhkqYYwBHO6JooPyjx4sjvs0DKi2oHzlfeL8j1LYVSKUpVvZpQNxaNYvG&X-Amz-Signature=de24a9af04edf1ac7cc02e5de55fbceac9d4d6fd3648ca36c15277dc35d0248f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H2K4RFM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0%2FtYlGwgqUvpCKYqbhKBc4pW7Ns7ozPNWjZlNJxaHQwIhAJUxZ14nD35WZnC1nKOzOrbGE%2FACQjx6YOwPdWsLsHYFKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVrhdUzrybImMfMhoq3AN%2BoEfWRBqPijw4llwXRuuiqkJZica2CLFibS5Olagk3b5wojYIWo6cNMCTD4AIKWzLvnLe%2B%2BVHdB0euOP%2Bp34C8bunIoY8ZRUq9YSYOF8QJ%2FqMcgB7n%2FYc2qz9aH7ygWDybW%2FKz2c7RQqcpLJIm5%2BqU1YGlrp65WaLrH1JweJb1hFQYViXVIk7Gm6b7Nf0dYPI128mg9P3gocLWy8WPvVlmiHaKICqBBk85cVjNmMDNcCVzhE1g2iv92B%2FtSyNB07YDZm8nlUXmtqW3viHqMPbH3hT4rhhOfwHaqA1zD7W9Ww1Nu1LWIqEErHu7NPsRMe57NDyUZGSgalyhtOpDr9m9%2FAqXdo5rjw5jQE9fj2vrdCI4Z8gF3fCy45sFwWHpzrROTgvcfisxzr%2BtIvX90lmW1zlCwvwMf8wgNL2kNLfSg77hxmUjj13r1VjerODyVAM%2B9QCIAhrOXBfyRZIZC2SL5i2LaFW4VRIGhGt4NHMk%2BLQRoiFoEMqIp1ha32%2FpM7DzlRlx7ZFIRPUv7onZ5h5jU%2BVLnbaCUHKVPqHBGJeW9VktuPJiTLrnOq7mtjWKhdGR7x8xCJ7SjsyDC%2BL1KDoz6cfzq5VORL2zRqOrxAMVkowaFSFZ%2FCVZ4ZJlTD2xbDBBjqkAW%2BSF9nG2tNwZRg3BA1ubD3tXbldrXDQ5ADRLoQPjR%2F660jfpjZtQGWjooS1kGcZd54xTZVJwA%2BQJIPiqm7QgvO6S%2FGMIdHv4i%2Bj%2Faa1L7pOomEXPM12mDS7rdfoY%2FO6%2Brdbe8jWo9WxC8kjPObLkenmM0Y3t8TEZKDnhkqYYwBHO6JooPyjx4sjvs0DKi2oHzlfeL8j1LYVSKUpVvZpQNxaNYvG&X-Amz-Signature=f9b0bb2466fa21debd976cee0eb5d407dc6ee0b7502f3df16c53af4bec99a771&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
