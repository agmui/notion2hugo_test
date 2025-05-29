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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHTOBIS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjFwXQlfRqDMl34U39Rs7IUo03nZK02GEM9xMtpda9HAiBTkUo4RzBtuF2F2HiljUYqZjQHSUwLcsrQ%2F44S%2BLcu8SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9WwIdoZl8QJQGGniKtwDlz84QpqtnXzwx644pLfMeJLI4vqS%2FN9vdRYbQSO98k9JIXn4hIoCsCE2%2Bd%2FtTg%2BkF1LUwEEKAFwwB%2FXkRNkI464sFCCNzWbFjFFcKY0wKrjlmBkomBaEOaytvb%2FJCPOcKfnM6jg8kG6lT40i9kyyJrax5a1Tj0bPTJiqbeqBzPKmQbzAl5i0EKYrOGoAyN1%2BpGfJylh3ilM%2FdMOcVPStpaPRtDzO%2Fzalo480Q294VsEe4%2B3rXR6I0gejKsuLicWws7B9ye3iDLjP3JZz8QnsT0UdtmsWwPPkjsNhToEZmd5dziJ6ccUQvH15JAw9xsCtsGCobK40BmNOaSwQNZcJC5UNNqwRzE6Rr4UE4xBoF3NyVeBI6GQ4P7VmwrrHcYAWirlXB6VzX6yoB3OxvE08QIRAZXFfRGjECxJptgYoBOj3Ir6rHNLSVBEvUi8MOeoPbZC6q5u21MvQ9WdEk4aQJkRUE3ES6iNz6qymkIhuQ9vOmk6NPc%2BVCDNHPKwwpnrbRa14aXd0N%2Bvuml6zBqKd8%2FDl%2FC6aaMlck%2Bnv9pevQfr6S0hw6srjXGSKy%2FRD7CQ67rZIh%2BTewSy8RD3X0T8OI2XxSMCX%2F5SGKnfW2qHJq69Ftj1nh5CO9fo2gRswxLLjwQY6pgGkXEwKZqCfRGDyvyWrrnTofUFNBJBaJuntq4UZ8WxhudrtTWPva295gkEj7Mvk%2FV%2BkylP45MujULpS%2B5uy%2FTSaDGse6uIrD1uo3i87%2FEDm9lqodS1aaQU9AX9Fx9bNvlxSwmt9kcL0%2B3lmyS2hN%2B9fsYnZVAYjv4eakuBAFnlrCXklBwufPg5qcR6nXUuVdg6eKqdqWKy0QoDbmS8VO2%2Fxk%2F%2B%2FP8E5&X-Amz-Signature=edc4902c690900801c95feef913ca088545c0b8bc7973b3232332add59375ece&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHTOBIS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjFwXQlfRqDMl34U39Rs7IUo03nZK02GEM9xMtpda9HAiBTkUo4RzBtuF2F2HiljUYqZjQHSUwLcsrQ%2F44S%2BLcu8SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9WwIdoZl8QJQGGniKtwDlz84QpqtnXzwx644pLfMeJLI4vqS%2FN9vdRYbQSO98k9JIXn4hIoCsCE2%2Bd%2FtTg%2BkF1LUwEEKAFwwB%2FXkRNkI464sFCCNzWbFjFFcKY0wKrjlmBkomBaEOaytvb%2FJCPOcKfnM6jg8kG6lT40i9kyyJrax5a1Tj0bPTJiqbeqBzPKmQbzAl5i0EKYrOGoAyN1%2BpGfJylh3ilM%2FdMOcVPStpaPRtDzO%2Fzalo480Q294VsEe4%2B3rXR6I0gejKsuLicWws7B9ye3iDLjP3JZz8QnsT0UdtmsWwPPkjsNhToEZmd5dziJ6ccUQvH15JAw9xsCtsGCobK40BmNOaSwQNZcJC5UNNqwRzE6Rr4UE4xBoF3NyVeBI6GQ4P7VmwrrHcYAWirlXB6VzX6yoB3OxvE08QIRAZXFfRGjECxJptgYoBOj3Ir6rHNLSVBEvUi8MOeoPbZC6q5u21MvQ9WdEk4aQJkRUE3ES6iNz6qymkIhuQ9vOmk6NPc%2BVCDNHPKwwpnrbRa14aXd0N%2Bvuml6zBqKd8%2FDl%2FC6aaMlck%2Bnv9pevQfr6S0hw6srjXGSKy%2FRD7CQ67rZIh%2BTewSy8RD3X0T8OI2XxSMCX%2F5SGKnfW2qHJq69Ftj1nh5CO9fo2gRswxLLjwQY6pgGkXEwKZqCfRGDyvyWrrnTofUFNBJBaJuntq4UZ8WxhudrtTWPva295gkEj7Mvk%2FV%2BkylP45MujULpS%2B5uy%2FTSaDGse6uIrD1uo3i87%2FEDm9lqodS1aaQU9AX9Fx9bNvlxSwmt9kcL0%2B3lmyS2hN%2B9fsYnZVAYjv4eakuBAFnlrCXklBwufPg5qcR6nXUuVdg6eKqdqWKy0QoDbmS8VO2%2Fxk%2F%2B%2FP8E5&X-Amz-Signature=2797c65ce7ae7f77e41e783e288ff6f3016d2e6b81f4e10dd0095d63c6016ce9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHTOBIS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjFwXQlfRqDMl34U39Rs7IUo03nZK02GEM9xMtpda9HAiBTkUo4RzBtuF2F2HiljUYqZjQHSUwLcsrQ%2F44S%2BLcu8SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9WwIdoZl8QJQGGniKtwDlz84QpqtnXzwx644pLfMeJLI4vqS%2FN9vdRYbQSO98k9JIXn4hIoCsCE2%2Bd%2FtTg%2BkF1LUwEEKAFwwB%2FXkRNkI464sFCCNzWbFjFFcKY0wKrjlmBkomBaEOaytvb%2FJCPOcKfnM6jg8kG6lT40i9kyyJrax5a1Tj0bPTJiqbeqBzPKmQbzAl5i0EKYrOGoAyN1%2BpGfJylh3ilM%2FdMOcVPStpaPRtDzO%2Fzalo480Q294VsEe4%2B3rXR6I0gejKsuLicWws7B9ye3iDLjP3JZz8QnsT0UdtmsWwPPkjsNhToEZmd5dziJ6ccUQvH15JAw9xsCtsGCobK40BmNOaSwQNZcJC5UNNqwRzE6Rr4UE4xBoF3NyVeBI6GQ4P7VmwrrHcYAWirlXB6VzX6yoB3OxvE08QIRAZXFfRGjECxJptgYoBOj3Ir6rHNLSVBEvUi8MOeoPbZC6q5u21MvQ9WdEk4aQJkRUE3ES6iNz6qymkIhuQ9vOmk6NPc%2BVCDNHPKwwpnrbRa14aXd0N%2Bvuml6zBqKd8%2FDl%2FC6aaMlck%2Bnv9pevQfr6S0hw6srjXGSKy%2FRD7CQ67rZIh%2BTewSy8RD3X0T8OI2XxSMCX%2F5SGKnfW2qHJq69Ftj1nh5CO9fo2gRswxLLjwQY6pgGkXEwKZqCfRGDyvyWrrnTofUFNBJBaJuntq4UZ8WxhudrtTWPva295gkEj7Mvk%2FV%2BkylP45MujULpS%2B5uy%2FTSaDGse6uIrD1uo3i87%2FEDm9lqodS1aaQU9AX9Fx9bNvlxSwmt9kcL0%2B3lmyS2hN%2B9fsYnZVAYjv4eakuBAFnlrCXklBwufPg5qcR6nXUuVdg6eKqdqWKy0QoDbmS8VO2%2Fxk%2F%2B%2FP8E5&X-Amz-Signature=b15a5b9c650c9a6640c9360350f5fc9fe0ea708028990b95d6686abe954b8d0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHTOBIS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjFwXQlfRqDMl34U39Rs7IUo03nZK02GEM9xMtpda9HAiBTkUo4RzBtuF2F2HiljUYqZjQHSUwLcsrQ%2F44S%2BLcu8SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9WwIdoZl8QJQGGniKtwDlz84QpqtnXzwx644pLfMeJLI4vqS%2FN9vdRYbQSO98k9JIXn4hIoCsCE2%2Bd%2FtTg%2BkF1LUwEEKAFwwB%2FXkRNkI464sFCCNzWbFjFFcKY0wKrjlmBkomBaEOaytvb%2FJCPOcKfnM6jg8kG6lT40i9kyyJrax5a1Tj0bPTJiqbeqBzPKmQbzAl5i0EKYrOGoAyN1%2BpGfJylh3ilM%2FdMOcVPStpaPRtDzO%2Fzalo480Q294VsEe4%2B3rXR6I0gejKsuLicWws7B9ye3iDLjP3JZz8QnsT0UdtmsWwPPkjsNhToEZmd5dziJ6ccUQvH15JAw9xsCtsGCobK40BmNOaSwQNZcJC5UNNqwRzE6Rr4UE4xBoF3NyVeBI6GQ4P7VmwrrHcYAWirlXB6VzX6yoB3OxvE08QIRAZXFfRGjECxJptgYoBOj3Ir6rHNLSVBEvUi8MOeoPbZC6q5u21MvQ9WdEk4aQJkRUE3ES6iNz6qymkIhuQ9vOmk6NPc%2BVCDNHPKwwpnrbRa14aXd0N%2Bvuml6zBqKd8%2FDl%2FC6aaMlck%2Bnv9pevQfr6S0hw6srjXGSKy%2FRD7CQ67rZIh%2BTewSy8RD3X0T8OI2XxSMCX%2F5SGKnfW2qHJq69Ftj1nh5CO9fo2gRswxLLjwQY6pgGkXEwKZqCfRGDyvyWrrnTofUFNBJBaJuntq4UZ8WxhudrtTWPva295gkEj7Mvk%2FV%2BkylP45MujULpS%2B5uy%2FTSaDGse6uIrD1uo3i87%2FEDm9lqodS1aaQU9AX9Fx9bNvlxSwmt9kcL0%2B3lmyS2hN%2B9fsYnZVAYjv4eakuBAFnlrCXklBwufPg5qcR6nXUuVdg6eKqdqWKy0QoDbmS8VO2%2Fxk%2F%2B%2FP8E5&X-Amz-Signature=ee9b3ae22315300074ad4bf840567877491b7f58c9f834233995d60bc3f8e656&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHTOBIS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjFwXQlfRqDMl34U39Rs7IUo03nZK02GEM9xMtpda9HAiBTkUo4RzBtuF2F2HiljUYqZjQHSUwLcsrQ%2F44S%2BLcu8SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9WwIdoZl8QJQGGniKtwDlz84QpqtnXzwx644pLfMeJLI4vqS%2FN9vdRYbQSO98k9JIXn4hIoCsCE2%2Bd%2FtTg%2BkF1LUwEEKAFwwB%2FXkRNkI464sFCCNzWbFjFFcKY0wKrjlmBkomBaEOaytvb%2FJCPOcKfnM6jg8kG6lT40i9kyyJrax5a1Tj0bPTJiqbeqBzPKmQbzAl5i0EKYrOGoAyN1%2BpGfJylh3ilM%2FdMOcVPStpaPRtDzO%2Fzalo480Q294VsEe4%2B3rXR6I0gejKsuLicWws7B9ye3iDLjP3JZz8QnsT0UdtmsWwPPkjsNhToEZmd5dziJ6ccUQvH15JAw9xsCtsGCobK40BmNOaSwQNZcJC5UNNqwRzE6Rr4UE4xBoF3NyVeBI6GQ4P7VmwrrHcYAWirlXB6VzX6yoB3OxvE08QIRAZXFfRGjECxJptgYoBOj3Ir6rHNLSVBEvUi8MOeoPbZC6q5u21MvQ9WdEk4aQJkRUE3ES6iNz6qymkIhuQ9vOmk6NPc%2BVCDNHPKwwpnrbRa14aXd0N%2Bvuml6zBqKd8%2FDl%2FC6aaMlck%2Bnv9pevQfr6S0hw6srjXGSKy%2FRD7CQ67rZIh%2BTewSy8RD3X0T8OI2XxSMCX%2F5SGKnfW2qHJq69Ftj1nh5CO9fo2gRswxLLjwQY6pgGkXEwKZqCfRGDyvyWrrnTofUFNBJBaJuntq4UZ8WxhudrtTWPva295gkEj7Mvk%2FV%2BkylP45MujULpS%2B5uy%2FTSaDGse6uIrD1uo3i87%2FEDm9lqodS1aaQU9AX9Fx9bNvlxSwmt9kcL0%2B3lmyS2hN%2B9fsYnZVAYjv4eakuBAFnlrCXklBwufPg5qcR6nXUuVdg6eKqdqWKy0QoDbmS8VO2%2Fxk%2F%2B%2FP8E5&X-Amz-Signature=95964c4289a05e6ae0384b78db6c3117c3636f2f281cf6ede44f2bd620c8ffcb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
