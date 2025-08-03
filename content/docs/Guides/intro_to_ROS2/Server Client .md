---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X53MC6VP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuAMkbz%2FoolZ8GudOrZmxqaAzjWUOwTvgKtYi4wj2KwAiAkJgRAlfcz7jsmBr0xQEIqOxknhjDC4LM4Tu88vdrvxSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMBin46tJc4O%2FQyOgNKtwD%2BbGmWT5jep8C58lrdFejkQRGzNFYSyeldMnzfg9sULUFd45ebiWJMlP7Fk27XqEPBrHW0qhLbEI9iDPI6UdovaDu0%2BNj6nlpR77rDJ8ZB%2FWDYVMC6%2F%2FCM5jBIKxZSMYm4UycC9bBY6CwBBu9eUxaj%2FfTmTB8N%2FrJyHgBdR%2FwLLBr7MOzftblmYE%2Fk1Ki147mt9XkChR2UKYpyMemfWuQCGHGArmH0n5cE8YS5ZqxWWNVqVPVKU0MmUrDHVQB1EOGL4rE3gfHXvgjeEK1iYrzeGWBD5s2Y1TwKvblQ5hwszeTxEcB8eKA24o0GAlCNlHPBswsNDp1gLBfLG2vch%2BGOONJVy7FdxvY8B5N0jt5HWQL7vrHJCe02uvwFrY%2BHlDQX0vqHXbUYi7j%2FsV0FSYf9K0w9BJbkLMFOwUkXhZbiD%2F0IXUcAR%2FsK2bDcbPnPu%2BAEEGpn39hP2hK8E3I600FHLpNyGHzkzEDm7d%2FZr%2FsRC0iSO125QLp%2BHEYQfU8JZS4OklSd49rIsxxSrhijQPwazlyuQBzmvcS1MjS5KG6zuGhH3LUaoWgxrxov5W1MC7dDl1%2FyahWT%2BBcCwL1%2FFFK8AKzYLw8RVxd7SXAsYjm%2BQKTP4vQB4oLkqvqaRswgsi8xAY6pgGB4bCBa2EWA%2FN%2BNqThVK74dTHFWsc%2BhkDbGew%2FYkjYwWfYW8tW0KLIy8ASFrWEgcx0u6ub9ljlQZDVG303hLHj6tCX21ItvbBdo7V9XqzLXiOEaFUb97Zins1lYDmQSN0WH1vth25sgghiV3kYcE%2FG88OCEs1Ehx%2BvmBHU6bRJ1GSDA59WqoDIZaV2ToT7U2lJU0kK0kBGlKvFkcvjCF8ioq5aF9ur&X-Amz-Signature=6e1e652d933b60fd88cf965697a24fc8e621adf984b3dd71348c2249624aa7e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X53MC6VP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuAMkbz%2FoolZ8GudOrZmxqaAzjWUOwTvgKtYi4wj2KwAiAkJgRAlfcz7jsmBr0xQEIqOxknhjDC4LM4Tu88vdrvxSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMBin46tJc4O%2FQyOgNKtwD%2BbGmWT5jep8C58lrdFejkQRGzNFYSyeldMnzfg9sULUFd45ebiWJMlP7Fk27XqEPBrHW0qhLbEI9iDPI6UdovaDu0%2BNj6nlpR77rDJ8ZB%2FWDYVMC6%2F%2FCM5jBIKxZSMYm4UycC9bBY6CwBBu9eUxaj%2FfTmTB8N%2FrJyHgBdR%2FwLLBr7MOzftblmYE%2Fk1Ki147mt9XkChR2UKYpyMemfWuQCGHGArmH0n5cE8YS5ZqxWWNVqVPVKU0MmUrDHVQB1EOGL4rE3gfHXvgjeEK1iYrzeGWBD5s2Y1TwKvblQ5hwszeTxEcB8eKA24o0GAlCNlHPBswsNDp1gLBfLG2vch%2BGOONJVy7FdxvY8B5N0jt5HWQL7vrHJCe02uvwFrY%2BHlDQX0vqHXbUYi7j%2FsV0FSYf9K0w9BJbkLMFOwUkXhZbiD%2F0IXUcAR%2FsK2bDcbPnPu%2BAEEGpn39hP2hK8E3I600FHLpNyGHzkzEDm7d%2FZr%2FsRC0iSO125QLp%2BHEYQfU8JZS4OklSd49rIsxxSrhijQPwazlyuQBzmvcS1MjS5KG6zuGhH3LUaoWgxrxov5W1MC7dDl1%2FyahWT%2BBcCwL1%2FFFK8AKzYLw8RVxd7SXAsYjm%2BQKTP4vQB4oLkqvqaRswgsi8xAY6pgGB4bCBa2EWA%2FN%2BNqThVK74dTHFWsc%2BhkDbGew%2FYkjYwWfYW8tW0KLIy8ASFrWEgcx0u6ub9ljlQZDVG303hLHj6tCX21ItvbBdo7V9XqzLXiOEaFUb97Zins1lYDmQSN0WH1vth25sgghiV3kYcE%2FG88OCEs1Ehx%2BvmBHU6bRJ1GSDA59WqoDIZaV2ToT7U2lJU0kK0kBGlKvFkcvjCF8ioq5aF9ur&X-Amz-Signature=2dc90e5570210848975e0869b909c9edd5bd1f47d3e4df6d9e2a1dd35bf19faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X53MC6VP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuAMkbz%2FoolZ8GudOrZmxqaAzjWUOwTvgKtYi4wj2KwAiAkJgRAlfcz7jsmBr0xQEIqOxknhjDC4LM4Tu88vdrvxSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMBin46tJc4O%2FQyOgNKtwD%2BbGmWT5jep8C58lrdFejkQRGzNFYSyeldMnzfg9sULUFd45ebiWJMlP7Fk27XqEPBrHW0qhLbEI9iDPI6UdovaDu0%2BNj6nlpR77rDJ8ZB%2FWDYVMC6%2F%2FCM5jBIKxZSMYm4UycC9bBY6CwBBu9eUxaj%2FfTmTB8N%2FrJyHgBdR%2FwLLBr7MOzftblmYE%2Fk1Ki147mt9XkChR2UKYpyMemfWuQCGHGArmH0n5cE8YS5ZqxWWNVqVPVKU0MmUrDHVQB1EOGL4rE3gfHXvgjeEK1iYrzeGWBD5s2Y1TwKvblQ5hwszeTxEcB8eKA24o0GAlCNlHPBswsNDp1gLBfLG2vch%2BGOONJVy7FdxvY8B5N0jt5HWQL7vrHJCe02uvwFrY%2BHlDQX0vqHXbUYi7j%2FsV0FSYf9K0w9BJbkLMFOwUkXhZbiD%2F0IXUcAR%2FsK2bDcbPnPu%2BAEEGpn39hP2hK8E3I600FHLpNyGHzkzEDm7d%2FZr%2FsRC0iSO125QLp%2BHEYQfU8JZS4OklSd49rIsxxSrhijQPwazlyuQBzmvcS1MjS5KG6zuGhH3LUaoWgxrxov5W1MC7dDl1%2FyahWT%2BBcCwL1%2FFFK8AKzYLw8RVxd7SXAsYjm%2BQKTP4vQB4oLkqvqaRswgsi8xAY6pgGB4bCBa2EWA%2FN%2BNqThVK74dTHFWsc%2BhkDbGew%2FYkjYwWfYW8tW0KLIy8ASFrWEgcx0u6ub9ljlQZDVG303hLHj6tCX21ItvbBdo7V9XqzLXiOEaFUb97Zins1lYDmQSN0WH1vth25sgghiV3kYcE%2FG88OCEs1Ehx%2BvmBHU6bRJ1GSDA59WqoDIZaV2ToT7U2lJU0kK0kBGlKvFkcvjCF8ioq5aF9ur&X-Amz-Signature=0743c90deb1e6f05a7e7643bcd32743d5e1888f1e25ccee7b85bef3457a0b240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X53MC6VP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuAMkbz%2FoolZ8GudOrZmxqaAzjWUOwTvgKtYi4wj2KwAiAkJgRAlfcz7jsmBr0xQEIqOxknhjDC4LM4Tu88vdrvxSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMBin46tJc4O%2FQyOgNKtwD%2BbGmWT5jep8C58lrdFejkQRGzNFYSyeldMnzfg9sULUFd45ebiWJMlP7Fk27XqEPBrHW0qhLbEI9iDPI6UdovaDu0%2BNj6nlpR77rDJ8ZB%2FWDYVMC6%2F%2FCM5jBIKxZSMYm4UycC9bBY6CwBBu9eUxaj%2FfTmTB8N%2FrJyHgBdR%2FwLLBr7MOzftblmYE%2Fk1Ki147mt9XkChR2UKYpyMemfWuQCGHGArmH0n5cE8YS5ZqxWWNVqVPVKU0MmUrDHVQB1EOGL4rE3gfHXvgjeEK1iYrzeGWBD5s2Y1TwKvblQ5hwszeTxEcB8eKA24o0GAlCNlHPBswsNDp1gLBfLG2vch%2BGOONJVy7FdxvY8B5N0jt5HWQL7vrHJCe02uvwFrY%2BHlDQX0vqHXbUYi7j%2FsV0FSYf9K0w9BJbkLMFOwUkXhZbiD%2F0IXUcAR%2FsK2bDcbPnPu%2BAEEGpn39hP2hK8E3I600FHLpNyGHzkzEDm7d%2FZr%2FsRC0iSO125QLp%2BHEYQfU8JZS4OklSd49rIsxxSrhijQPwazlyuQBzmvcS1MjS5KG6zuGhH3LUaoWgxrxov5W1MC7dDl1%2FyahWT%2BBcCwL1%2FFFK8AKzYLw8RVxd7SXAsYjm%2BQKTP4vQB4oLkqvqaRswgsi8xAY6pgGB4bCBa2EWA%2FN%2BNqThVK74dTHFWsc%2BhkDbGew%2FYkjYwWfYW8tW0KLIy8ASFrWEgcx0u6ub9ljlQZDVG303hLHj6tCX21ItvbBdo7V9XqzLXiOEaFUb97Zins1lYDmQSN0WH1vth25sgghiV3kYcE%2FG88OCEs1Ehx%2BvmBHU6bRJ1GSDA59WqoDIZaV2ToT7U2lJU0kK0kBGlKvFkcvjCF8ioq5aF9ur&X-Amz-Signature=ce4be00bf2ba25cb762d1d58f8f23fc03f26da19b0617c7a9bbfd4a6e70a516b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X53MC6VP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuAMkbz%2FoolZ8GudOrZmxqaAzjWUOwTvgKtYi4wj2KwAiAkJgRAlfcz7jsmBr0xQEIqOxknhjDC4LM4Tu88vdrvxSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMBin46tJc4O%2FQyOgNKtwD%2BbGmWT5jep8C58lrdFejkQRGzNFYSyeldMnzfg9sULUFd45ebiWJMlP7Fk27XqEPBrHW0qhLbEI9iDPI6UdovaDu0%2BNj6nlpR77rDJ8ZB%2FWDYVMC6%2F%2FCM5jBIKxZSMYm4UycC9bBY6CwBBu9eUxaj%2FfTmTB8N%2FrJyHgBdR%2FwLLBr7MOzftblmYE%2Fk1Ki147mt9XkChR2UKYpyMemfWuQCGHGArmH0n5cE8YS5ZqxWWNVqVPVKU0MmUrDHVQB1EOGL4rE3gfHXvgjeEK1iYrzeGWBD5s2Y1TwKvblQ5hwszeTxEcB8eKA24o0GAlCNlHPBswsNDp1gLBfLG2vch%2BGOONJVy7FdxvY8B5N0jt5HWQL7vrHJCe02uvwFrY%2BHlDQX0vqHXbUYi7j%2FsV0FSYf9K0w9BJbkLMFOwUkXhZbiD%2F0IXUcAR%2FsK2bDcbPnPu%2BAEEGpn39hP2hK8E3I600FHLpNyGHzkzEDm7d%2FZr%2FsRC0iSO125QLp%2BHEYQfU8JZS4OklSd49rIsxxSrhijQPwazlyuQBzmvcS1MjS5KG6zuGhH3LUaoWgxrxov5W1MC7dDl1%2FyahWT%2BBcCwL1%2FFFK8AKzYLw8RVxd7SXAsYjm%2BQKTP4vQB4oLkqvqaRswgsi8xAY6pgGB4bCBa2EWA%2FN%2BNqThVK74dTHFWsc%2BhkDbGew%2FYkjYwWfYW8tW0KLIy8ASFrWEgcx0u6ub9ljlQZDVG303hLHj6tCX21ItvbBdo7V9XqzLXiOEaFUb97Zins1lYDmQSN0WH1vth25sgghiV3kYcE%2FG88OCEs1Ehx%2BvmBHU6bRJ1GSDA59WqoDIZaV2ToT7U2lJU0kK0kBGlKvFkcvjCF8ioq5aF9ur&X-Amz-Signature=b25add579d59a85f0822d9276dfe08b5adbe627e1b31ed454007582ab03ce65f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
