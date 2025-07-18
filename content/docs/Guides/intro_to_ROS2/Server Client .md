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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CD4GZX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGGKbPufwIAOQ3RiRTEfun0LmY1InHax9vhIOiswsOl2AiAbt0KiYB6xWzWM8%2BFGIdaxDzOoOlOsiFswDCVP1Rg0yCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEcMaPrSGRSWp4gY8KtwDQtRbiJMCEffY7yI1A57MlvzNpxB%2B3YdSIni9JtfrgFrERUS1CynbZhTDOcPo8oSLHvjUY3ZRzSddO2G0YN1iORpGegzRfwg4jNERFtZkPNUv3jBPaY8xh7hQm5XkQTKAJ%2B24bsKeR%2Bj0lvLJN%2BTAqcsNGD0L4P2BIFkz%2B%2BYuStaHZ6NEBrjEOOLVfeRvj0E1y1TbUEihFdiR3W9DHkfIr403QiK5c%2Bj4uTzn0U5PEyyGtyQGfMLWi4ggPXMabKawSQOY0oxorZ8baAiAzepYiUT%2Bhsl0YToLog6ubSXJY%2FGncqFYoTdCIChUt5Eo59f3pG%2BjRsvwrzgYZJ2ByH4frvh%2BfnSJbLqBYp4K1Ob3xpetHPX8G982J6cN6b72XomU6bDpAhI4QwB6DFhGllor6YyD8EdiXLLXEkTgB1IPZ7abUJVHpEEukJO%2BDfjUoD0Fszhjru0I07JQuhNRqscqxsJLrcIDwWqCsI3YBVACUUOaPBMzlViu%2ByGNjCb0RcUOfhXhGVotiU%2FJF2xrY5svuNyT%2FFQHiZgxiauNIWikjwpAjjUWu11s2ngQi9JgK4LpEbWBRyhT67EldzRtORId6HIEcaVnjWAko0sy9QwkbLSVJssQCn4ALAqwWekw%2BOrpwwY6pgHAioSkn3JdgGX9gq6zuLclXTNj09kJC9xsg9e9XD3cSwMDP1yA0lD4KGo%2FhIE1VNsmlB%2FY7ZAuHqfUmh7x69erkAOCzGQmn8cTctBfeh%2Fbzbljaba1pTblgb1lhsNW9zh3sfNonKvxT2n3ewErHSD9yAjuKIxP0lE%2BtTDNrGye0pNxWmKk7ZJbEaGCHV2MQDQ%2F1kR8dsBn4Zplub7Zyzgenv0GwCgX&X-Amz-Signature=374416c0302234ed3abe3c0321783f746aa1317b42b2919b8a9cdfdf7258f694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CD4GZX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGGKbPufwIAOQ3RiRTEfun0LmY1InHax9vhIOiswsOl2AiAbt0KiYB6xWzWM8%2BFGIdaxDzOoOlOsiFswDCVP1Rg0yCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEcMaPrSGRSWp4gY8KtwDQtRbiJMCEffY7yI1A57MlvzNpxB%2B3YdSIni9JtfrgFrERUS1CynbZhTDOcPo8oSLHvjUY3ZRzSddO2G0YN1iORpGegzRfwg4jNERFtZkPNUv3jBPaY8xh7hQm5XkQTKAJ%2B24bsKeR%2Bj0lvLJN%2BTAqcsNGD0L4P2BIFkz%2B%2BYuStaHZ6NEBrjEOOLVfeRvj0E1y1TbUEihFdiR3W9DHkfIr403QiK5c%2Bj4uTzn0U5PEyyGtyQGfMLWi4ggPXMabKawSQOY0oxorZ8baAiAzepYiUT%2Bhsl0YToLog6ubSXJY%2FGncqFYoTdCIChUt5Eo59f3pG%2BjRsvwrzgYZJ2ByH4frvh%2BfnSJbLqBYp4K1Ob3xpetHPX8G982J6cN6b72XomU6bDpAhI4QwB6DFhGllor6YyD8EdiXLLXEkTgB1IPZ7abUJVHpEEukJO%2BDfjUoD0Fszhjru0I07JQuhNRqscqxsJLrcIDwWqCsI3YBVACUUOaPBMzlViu%2ByGNjCb0RcUOfhXhGVotiU%2FJF2xrY5svuNyT%2FFQHiZgxiauNIWikjwpAjjUWu11s2ngQi9JgK4LpEbWBRyhT67EldzRtORId6HIEcaVnjWAko0sy9QwkbLSVJssQCn4ALAqwWekw%2BOrpwwY6pgHAioSkn3JdgGX9gq6zuLclXTNj09kJC9xsg9e9XD3cSwMDP1yA0lD4KGo%2FhIE1VNsmlB%2FY7ZAuHqfUmh7x69erkAOCzGQmn8cTctBfeh%2Fbzbljaba1pTblgb1lhsNW9zh3sfNonKvxT2n3ewErHSD9yAjuKIxP0lE%2BtTDNrGye0pNxWmKk7ZJbEaGCHV2MQDQ%2F1kR8dsBn4Zplub7Zyzgenv0GwCgX&X-Amz-Signature=f4ab63322f3562df7a0f5340f106a03d82e8f8c2a98cd2d787fb580e63b0aa22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CD4GZX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGGKbPufwIAOQ3RiRTEfun0LmY1InHax9vhIOiswsOl2AiAbt0KiYB6xWzWM8%2BFGIdaxDzOoOlOsiFswDCVP1Rg0yCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEcMaPrSGRSWp4gY8KtwDQtRbiJMCEffY7yI1A57MlvzNpxB%2B3YdSIni9JtfrgFrERUS1CynbZhTDOcPo8oSLHvjUY3ZRzSddO2G0YN1iORpGegzRfwg4jNERFtZkPNUv3jBPaY8xh7hQm5XkQTKAJ%2B24bsKeR%2Bj0lvLJN%2BTAqcsNGD0L4P2BIFkz%2B%2BYuStaHZ6NEBrjEOOLVfeRvj0E1y1TbUEihFdiR3W9DHkfIr403QiK5c%2Bj4uTzn0U5PEyyGtyQGfMLWi4ggPXMabKawSQOY0oxorZ8baAiAzepYiUT%2Bhsl0YToLog6ubSXJY%2FGncqFYoTdCIChUt5Eo59f3pG%2BjRsvwrzgYZJ2ByH4frvh%2BfnSJbLqBYp4K1Ob3xpetHPX8G982J6cN6b72XomU6bDpAhI4QwB6DFhGllor6YyD8EdiXLLXEkTgB1IPZ7abUJVHpEEukJO%2BDfjUoD0Fszhjru0I07JQuhNRqscqxsJLrcIDwWqCsI3YBVACUUOaPBMzlViu%2ByGNjCb0RcUOfhXhGVotiU%2FJF2xrY5svuNyT%2FFQHiZgxiauNIWikjwpAjjUWu11s2ngQi9JgK4LpEbWBRyhT67EldzRtORId6HIEcaVnjWAko0sy9QwkbLSVJssQCn4ALAqwWekw%2BOrpwwY6pgHAioSkn3JdgGX9gq6zuLclXTNj09kJC9xsg9e9XD3cSwMDP1yA0lD4KGo%2FhIE1VNsmlB%2FY7ZAuHqfUmh7x69erkAOCzGQmn8cTctBfeh%2Fbzbljaba1pTblgb1lhsNW9zh3sfNonKvxT2n3ewErHSD9yAjuKIxP0lE%2BtTDNrGye0pNxWmKk7ZJbEaGCHV2MQDQ%2F1kR8dsBn4Zplub7Zyzgenv0GwCgX&X-Amz-Signature=f95c8fa13fe20a20cfd4cf940dc3bac55d3defa8ad2754947e90b7a725b40c10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CD4GZX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGGKbPufwIAOQ3RiRTEfun0LmY1InHax9vhIOiswsOl2AiAbt0KiYB6xWzWM8%2BFGIdaxDzOoOlOsiFswDCVP1Rg0yCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEcMaPrSGRSWp4gY8KtwDQtRbiJMCEffY7yI1A57MlvzNpxB%2B3YdSIni9JtfrgFrERUS1CynbZhTDOcPo8oSLHvjUY3ZRzSddO2G0YN1iORpGegzRfwg4jNERFtZkPNUv3jBPaY8xh7hQm5XkQTKAJ%2B24bsKeR%2Bj0lvLJN%2BTAqcsNGD0L4P2BIFkz%2B%2BYuStaHZ6NEBrjEOOLVfeRvj0E1y1TbUEihFdiR3W9DHkfIr403QiK5c%2Bj4uTzn0U5PEyyGtyQGfMLWi4ggPXMabKawSQOY0oxorZ8baAiAzepYiUT%2Bhsl0YToLog6ubSXJY%2FGncqFYoTdCIChUt5Eo59f3pG%2BjRsvwrzgYZJ2ByH4frvh%2BfnSJbLqBYp4K1Ob3xpetHPX8G982J6cN6b72XomU6bDpAhI4QwB6DFhGllor6YyD8EdiXLLXEkTgB1IPZ7abUJVHpEEukJO%2BDfjUoD0Fszhjru0I07JQuhNRqscqxsJLrcIDwWqCsI3YBVACUUOaPBMzlViu%2ByGNjCb0RcUOfhXhGVotiU%2FJF2xrY5svuNyT%2FFQHiZgxiauNIWikjwpAjjUWu11s2ngQi9JgK4LpEbWBRyhT67EldzRtORId6HIEcaVnjWAko0sy9QwkbLSVJssQCn4ALAqwWekw%2BOrpwwY6pgHAioSkn3JdgGX9gq6zuLclXTNj09kJC9xsg9e9XD3cSwMDP1yA0lD4KGo%2FhIE1VNsmlB%2FY7ZAuHqfUmh7x69erkAOCzGQmn8cTctBfeh%2Fbzbljaba1pTblgb1lhsNW9zh3sfNonKvxT2n3ewErHSD9yAjuKIxP0lE%2BtTDNrGye0pNxWmKk7ZJbEaGCHV2MQDQ%2F1kR8dsBn4Zplub7Zyzgenv0GwCgX&X-Amz-Signature=55e70f6dbab95ec8fad456f9fbe60c15b4eb2fc7a273c6b0c161647b65b309df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CD4GZX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGGKbPufwIAOQ3RiRTEfun0LmY1InHax9vhIOiswsOl2AiAbt0KiYB6xWzWM8%2BFGIdaxDzOoOlOsiFswDCVP1Rg0yCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEcMaPrSGRSWp4gY8KtwDQtRbiJMCEffY7yI1A57MlvzNpxB%2B3YdSIni9JtfrgFrERUS1CynbZhTDOcPo8oSLHvjUY3ZRzSddO2G0YN1iORpGegzRfwg4jNERFtZkPNUv3jBPaY8xh7hQm5XkQTKAJ%2B24bsKeR%2Bj0lvLJN%2BTAqcsNGD0L4P2BIFkz%2B%2BYuStaHZ6NEBrjEOOLVfeRvj0E1y1TbUEihFdiR3W9DHkfIr403QiK5c%2Bj4uTzn0U5PEyyGtyQGfMLWi4ggPXMabKawSQOY0oxorZ8baAiAzepYiUT%2Bhsl0YToLog6ubSXJY%2FGncqFYoTdCIChUt5Eo59f3pG%2BjRsvwrzgYZJ2ByH4frvh%2BfnSJbLqBYp4K1Ob3xpetHPX8G982J6cN6b72XomU6bDpAhI4QwB6DFhGllor6YyD8EdiXLLXEkTgB1IPZ7abUJVHpEEukJO%2BDfjUoD0Fszhjru0I07JQuhNRqscqxsJLrcIDwWqCsI3YBVACUUOaPBMzlViu%2ByGNjCb0RcUOfhXhGVotiU%2FJF2xrY5svuNyT%2FFQHiZgxiauNIWikjwpAjjUWu11s2ngQi9JgK4LpEbWBRyhT67EldzRtORId6HIEcaVnjWAko0sy9QwkbLSVJssQCn4ALAqwWekw%2BOrpwwY6pgHAioSkn3JdgGX9gq6zuLclXTNj09kJC9xsg9e9XD3cSwMDP1yA0lD4KGo%2FhIE1VNsmlB%2FY7ZAuHqfUmh7x69erkAOCzGQmn8cTctBfeh%2Fbzbljaba1pTblgb1lhsNW9zh3sfNonKvxT2n3ewErHSD9yAjuKIxP0lE%2BtTDNrGye0pNxWmKk7ZJbEaGCHV2MQDQ%2F1kR8dsBn4Zplub7Zyzgenv0GwCgX&X-Amz-Signature=a34b513943a6c63fde98d5564b4b3848c1e78ac28458e47c0aa139d286873c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
