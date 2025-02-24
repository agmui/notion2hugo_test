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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJA3VMM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEdrmrEYeEN4YG9sQQxi27DXwy18Hv2bOS4IM6IXbdWwIhAKa1c4A9Dw5DFNSyoE4%2FwQIymP1WXtjSnKruTQ4cNz6GKv8DCCUQABoMNjM3NDIzMTgzODA1IgyylhYQBhBspmm%2F1Q0q3AMY8hmJ2qywwMImAUboZHSmm7%2FSRiskG91U85FVGhMqaSxE3gjjHKQeQ%2FaxprFBncN9%2BfodMUy3KvP3xFLGeYJcvP0w95cwxoBfIMa%2BskNoR2U4AqhhbhU4wUMSwiMIJcuvySM%2FIR5k27VoeNX3fXzxJ5IZ6UjP540JicdaFFVL1QJc2dTc3LL979ldD3OwndK6z6q%2FToO8xHHjXfuVEEo%2B1WAtlI7ky7jBF3wnT1LVVPNs5M5ayFkt1wK932op07Pt55tu9vj6%2Fi7x%2BxXFXWpQcZW3HzFFEieupipz9P1HssoKzZmQobkfEPwxSAN3PSDnjDZlv12TNySYg52fjul80vMxWmqhAZ9i%2BLOcEI0QznQPr7aiFDZUwaOepxtkEFsHlsb9VjioYGx5C1tFZxZnqYTJLaoqTuP39adMd9hKr6fKjFQE%2B2ikvmAGRmk86Lsf5ynEb2Y72ZBcvFPl4xPaEnwy951C%2FzuJekh7olonVbcKIe5Q%2BvXgq6tTq8v8qfHd8vvCUaPXMbwEIdBalgOQsTt6W32152JwONCXUfzcVgjkxzYZD3RsMr0p8eapc0X%2Ftgm2C%2FrGLbi4scxXW7B%2BxDuKiRJ2WjBO3s2MUK2ok5iFLbPQk0f3ufhBZDDe4e%2B9BjqkAZxBlNsY7h5Jcv3radj63Z7C6iGKj8me1N3VShmKg5X%2BGoZpgmzXK1282eXq0qLoAO1DTK%2BUB04u%2FMsNEwziSSUfOYlHV5Kf01ThoNthVc5Zhz9jm3wU%2FgrOp52be0ns5frm21YnuPtuwTKFzGxW%2Bp77GJlEImW7q28h%2B%2BimrzXAYZEB49GZqyRPbgz7Unm8Ggi%2BybuwP4i656t85PiYfF%2FtWKk1&X-Amz-Signature=9dfb22679a485602c7b859d3dcd733aec598478255c66dbd82ca0ee386809e80&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJA3VMM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEdrmrEYeEN4YG9sQQxi27DXwy18Hv2bOS4IM6IXbdWwIhAKa1c4A9Dw5DFNSyoE4%2FwQIymP1WXtjSnKruTQ4cNz6GKv8DCCUQABoMNjM3NDIzMTgzODA1IgyylhYQBhBspmm%2F1Q0q3AMY8hmJ2qywwMImAUboZHSmm7%2FSRiskG91U85FVGhMqaSxE3gjjHKQeQ%2FaxprFBncN9%2BfodMUy3KvP3xFLGeYJcvP0w95cwxoBfIMa%2BskNoR2U4AqhhbhU4wUMSwiMIJcuvySM%2FIR5k27VoeNX3fXzxJ5IZ6UjP540JicdaFFVL1QJc2dTc3LL979ldD3OwndK6z6q%2FToO8xHHjXfuVEEo%2B1WAtlI7ky7jBF3wnT1LVVPNs5M5ayFkt1wK932op07Pt55tu9vj6%2Fi7x%2BxXFXWpQcZW3HzFFEieupipz9P1HssoKzZmQobkfEPwxSAN3PSDnjDZlv12TNySYg52fjul80vMxWmqhAZ9i%2BLOcEI0QznQPr7aiFDZUwaOepxtkEFsHlsb9VjioYGx5C1tFZxZnqYTJLaoqTuP39adMd9hKr6fKjFQE%2B2ikvmAGRmk86Lsf5ynEb2Y72ZBcvFPl4xPaEnwy951C%2FzuJekh7olonVbcKIe5Q%2BvXgq6tTq8v8qfHd8vvCUaPXMbwEIdBalgOQsTt6W32152JwONCXUfzcVgjkxzYZD3RsMr0p8eapc0X%2Ftgm2C%2FrGLbi4scxXW7B%2BxDuKiRJ2WjBO3s2MUK2ok5iFLbPQk0f3ufhBZDDe4e%2B9BjqkAZxBlNsY7h5Jcv3radj63Z7C6iGKj8me1N3VShmKg5X%2BGoZpgmzXK1282eXq0qLoAO1DTK%2BUB04u%2FMsNEwziSSUfOYlHV5Kf01ThoNthVc5Zhz9jm3wU%2FgrOp52be0ns5frm21YnuPtuwTKFzGxW%2Bp77GJlEImW7q28h%2B%2BimrzXAYZEB49GZqyRPbgz7Unm8Ggi%2BybuwP4i656t85PiYfF%2FtWKk1&X-Amz-Signature=26977aba77e9a0a269e0a933f3508a134cb530e0a96f43e482f0492782f4bee3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJA3VMM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEdrmrEYeEN4YG9sQQxi27DXwy18Hv2bOS4IM6IXbdWwIhAKa1c4A9Dw5DFNSyoE4%2FwQIymP1WXtjSnKruTQ4cNz6GKv8DCCUQABoMNjM3NDIzMTgzODA1IgyylhYQBhBspmm%2F1Q0q3AMY8hmJ2qywwMImAUboZHSmm7%2FSRiskG91U85FVGhMqaSxE3gjjHKQeQ%2FaxprFBncN9%2BfodMUy3KvP3xFLGeYJcvP0w95cwxoBfIMa%2BskNoR2U4AqhhbhU4wUMSwiMIJcuvySM%2FIR5k27VoeNX3fXzxJ5IZ6UjP540JicdaFFVL1QJc2dTc3LL979ldD3OwndK6z6q%2FToO8xHHjXfuVEEo%2B1WAtlI7ky7jBF3wnT1LVVPNs5M5ayFkt1wK932op07Pt55tu9vj6%2Fi7x%2BxXFXWpQcZW3HzFFEieupipz9P1HssoKzZmQobkfEPwxSAN3PSDnjDZlv12TNySYg52fjul80vMxWmqhAZ9i%2BLOcEI0QznQPr7aiFDZUwaOepxtkEFsHlsb9VjioYGx5C1tFZxZnqYTJLaoqTuP39adMd9hKr6fKjFQE%2B2ikvmAGRmk86Lsf5ynEb2Y72ZBcvFPl4xPaEnwy951C%2FzuJekh7olonVbcKIe5Q%2BvXgq6tTq8v8qfHd8vvCUaPXMbwEIdBalgOQsTt6W32152JwONCXUfzcVgjkxzYZD3RsMr0p8eapc0X%2Ftgm2C%2FrGLbi4scxXW7B%2BxDuKiRJ2WjBO3s2MUK2ok5iFLbPQk0f3ufhBZDDe4e%2B9BjqkAZxBlNsY7h5Jcv3radj63Z7C6iGKj8me1N3VShmKg5X%2BGoZpgmzXK1282eXq0qLoAO1DTK%2BUB04u%2FMsNEwziSSUfOYlHV5Kf01ThoNthVc5Zhz9jm3wU%2FgrOp52be0ns5frm21YnuPtuwTKFzGxW%2Bp77GJlEImW7q28h%2B%2BimrzXAYZEB49GZqyRPbgz7Unm8Ggi%2BybuwP4i656t85PiYfF%2FtWKk1&X-Amz-Signature=041497c7f9f13b11283881f2cf981317d7068dd8696453791f334022754ed0ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJA3VMM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEdrmrEYeEN4YG9sQQxi27DXwy18Hv2bOS4IM6IXbdWwIhAKa1c4A9Dw5DFNSyoE4%2FwQIymP1WXtjSnKruTQ4cNz6GKv8DCCUQABoMNjM3NDIzMTgzODA1IgyylhYQBhBspmm%2F1Q0q3AMY8hmJ2qywwMImAUboZHSmm7%2FSRiskG91U85FVGhMqaSxE3gjjHKQeQ%2FaxprFBncN9%2BfodMUy3KvP3xFLGeYJcvP0w95cwxoBfIMa%2BskNoR2U4AqhhbhU4wUMSwiMIJcuvySM%2FIR5k27VoeNX3fXzxJ5IZ6UjP540JicdaFFVL1QJc2dTc3LL979ldD3OwndK6z6q%2FToO8xHHjXfuVEEo%2B1WAtlI7ky7jBF3wnT1LVVPNs5M5ayFkt1wK932op07Pt55tu9vj6%2Fi7x%2BxXFXWpQcZW3HzFFEieupipz9P1HssoKzZmQobkfEPwxSAN3PSDnjDZlv12TNySYg52fjul80vMxWmqhAZ9i%2BLOcEI0QznQPr7aiFDZUwaOepxtkEFsHlsb9VjioYGx5C1tFZxZnqYTJLaoqTuP39adMd9hKr6fKjFQE%2B2ikvmAGRmk86Lsf5ynEb2Y72ZBcvFPl4xPaEnwy951C%2FzuJekh7olonVbcKIe5Q%2BvXgq6tTq8v8qfHd8vvCUaPXMbwEIdBalgOQsTt6W32152JwONCXUfzcVgjkxzYZD3RsMr0p8eapc0X%2Ftgm2C%2FrGLbi4scxXW7B%2BxDuKiRJ2WjBO3s2MUK2ok5iFLbPQk0f3ufhBZDDe4e%2B9BjqkAZxBlNsY7h5Jcv3radj63Z7C6iGKj8me1N3VShmKg5X%2BGoZpgmzXK1282eXq0qLoAO1DTK%2BUB04u%2FMsNEwziSSUfOYlHV5Kf01ThoNthVc5Zhz9jm3wU%2FgrOp52be0ns5frm21YnuPtuwTKFzGxW%2Bp77GJlEImW7q28h%2B%2BimrzXAYZEB49GZqyRPbgz7Unm8Ggi%2BybuwP4i656t85PiYfF%2FtWKk1&X-Amz-Signature=d2ca0429e026bdf53ab18ccd08ce7fcc9f71351163b7629cdde694c2b93c3712&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJA3VMM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEdrmrEYeEN4YG9sQQxi27DXwy18Hv2bOS4IM6IXbdWwIhAKa1c4A9Dw5DFNSyoE4%2FwQIymP1WXtjSnKruTQ4cNz6GKv8DCCUQABoMNjM3NDIzMTgzODA1IgyylhYQBhBspmm%2F1Q0q3AMY8hmJ2qywwMImAUboZHSmm7%2FSRiskG91U85FVGhMqaSxE3gjjHKQeQ%2FaxprFBncN9%2BfodMUy3KvP3xFLGeYJcvP0w95cwxoBfIMa%2BskNoR2U4AqhhbhU4wUMSwiMIJcuvySM%2FIR5k27VoeNX3fXzxJ5IZ6UjP540JicdaFFVL1QJc2dTc3LL979ldD3OwndK6z6q%2FToO8xHHjXfuVEEo%2B1WAtlI7ky7jBF3wnT1LVVPNs5M5ayFkt1wK932op07Pt55tu9vj6%2Fi7x%2BxXFXWpQcZW3HzFFEieupipz9P1HssoKzZmQobkfEPwxSAN3PSDnjDZlv12TNySYg52fjul80vMxWmqhAZ9i%2BLOcEI0QznQPr7aiFDZUwaOepxtkEFsHlsb9VjioYGx5C1tFZxZnqYTJLaoqTuP39adMd9hKr6fKjFQE%2B2ikvmAGRmk86Lsf5ynEb2Y72ZBcvFPl4xPaEnwy951C%2FzuJekh7olonVbcKIe5Q%2BvXgq6tTq8v8qfHd8vvCUaPXMbwEIdBalgOQsTt6W32152JwONCXUfzcVgjkxzYZD3RsMr0p8eapc0X%2Ftgm2C%2FrGLbi4scxXW7B%2BxDuKiRJ2WjBO3s2MUK2ok5iFLbPQk0f3ufhBZDDe4e%2B9BjqkAZxBlNsY7h5Jcv3radj63Z7C6iGKj8me1N3VShmKg5X%2BGoZpgmzXK1282eXq0qLoAO1DTK%2BUB04u%2FMsNEwziSSUfOYlHV5Kf01ThoNthVc5Zhz9jm3wU%2FgrOp52be0ns5frm21YnuPtuwTKFzGxW%2Bp77GJlEImW7q28h%2B%2BimrzXAYZEB49GZqyRPbgz7Unm8Ggi%2BybuwP4i656t85PiYfF%2FtWKk1&X-Amz-Signature=6c98a44ae65ff8b58e56584bf356770dda6a678b47e48c4a4ee3567100dc9d56&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
