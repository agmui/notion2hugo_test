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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDUIX7R2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIBo%2B4oH2a5EuqpjXb7nV%2BCt7dCHlyDg9ctJpB1V27VQLAiBh8qG%2BHxIezR5NcSlw4OMXLSWGmAkvedl3XC3HRqJnDSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFGlRZSXWgI4FF5SKtwDcJUD0bGUQKy9MksNQu8VtYKoFawSxjhgPq6hKWDRiwYhUM1tdWZsWnbrZO79bjIuE4lT10UfaGhbbdxvZVaC7xT1oGIUy8HdmMgqqvFzQSUZ27fpt0HFA2V4kk5Y5u%2Bg0k%2BQQjYEHQRx%2FUnjO1RvG8KorRuXtYuSE3124nzjxDxgXqgPEU0FAsNz1%2FsRPRwHu2m96gAvlA3BsQPWt4lrbUAqD%2F6%2FxIAZNhvMDFgmqR2Ybhljkp5nVV4GYWj%2BTBU5O82dd64WSqyXosY7escQPcar5gy6PBQebW66YpEurgE%2BvsAle0xxoXeQcrZmr4I%2BI1A42QrWvEe24Bl9vRyWh5OG91U%2BG6nFMhcELCzKDd6B6vk3p%2Fc5utJbad4MQYK2bsCwlEwJLMWd1M8pR%2BzxVgUASMCLbP63V%2FjmRinQ%2BWJMFrn52xSVIFff%2F6mmMus1YO4FCuhMKZX7vIi2hscNQKvj2XpvnpRYVBvoqlLaivEc1%2Fo0ykAst8phKql9Q57oMBlUytNJGfa%2F0ESTTANmUbyFYi6SQul4u4xaW8aL%2FrqpmXT9Td%2FOUNajEVvi3jUYjx7zxUgjT2mrbyo5XdVuP%2FaQUC%2FR5N7pd6sBQYizdpP%2F6lerRO9T%2BscB20Ewh9HQwAY6pgGLjg%2Fs3dDZi3BbuTMoPapy0tAnapc3VMU7AKyI2RY1h1unHtROe2pU7OGzb47qIEEIrAD3dt8ILkL2IcdExIba5x9Z73B43wTHf8RAafCHigatJ3Vv%2BgmkJlSrDqrsYYOJ32reLfep4oZInF8eVve%2Fe38ZFm5a1P6bG60ZVAJhi4PjJKQ4%2FIKKiyQPjfHo6dqY0OZROHw4AlHaYBoNOhLgBOe8j65c&X-Amz-Signature=ca1d0c57af250ca3ff2461d32e19c2d758616f89604359ef11118e5ddcc7c2e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDUIX7R2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIBo%2B4oH2a5EuqpjXb7nV%2BCt7dCHlyDg9ctJpB1V27VQLAiBh8qG%2BHxIezR5NcSlw4OMXLSWGmAkvedl3XC3HRqJnDSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFGlRZSXWgI4FF5SKtwDcJUD0bGUQKy9MksNQu8VtYKoFawSxjhgPq6hKWDRiwYhUM1tdWZsWnbrZO79bjIuE4lT10UfaGhbbdxvZVaC7xT1oGIUy8HdmMgqqvFzQSUZ27fpt0HFA2V4kk5Y5u%2Bg0k%2BQQjYEHQRx%2FUnjO1RvG8KorRuXtYuSE3124nzjxDxgXqgPEU0FAsNz1%2FsRPRwHu2m96gAvlA3BsQPWt4lrbUAqD%2F6%2FxIAZNhvMDFgmqR2Ybhljkp5nVV4GYWj%2BTBU5O82dd64WSqyXosY7escQPcar5gy6PBQebW66YpEurgE%2BvsAle0xxoXeQcrZmr4I%2BI1A42QrWvEe24Bl9vRyWh5OG91U%2BG6nFMhcELCzKDd6B6vk3p%2Fc5utJbad4MQYK2bsCwlEwJLMWd1M8pR%2BzxVgUASMCLbP63V%2FjmRinQ%2BWJMFrn52xSVIFff%2F6mmMus1YO4FCuhMKZX7vIi2hscNQKvj2XpvnpRYVBvoqlLaivEc1%2Fo0ykAst8phKql9Q57oMBlUytNJGfa%2F0ESTTANmUbyFYi6SQul4u4xaW8aL%2FrqpmXT9Td%2FOUNajEVvi3jUYjx7zxUgjT2mrbyo5XdVuP%2FaQUC%2FR5N7pd6sBQYizdpP%2F6lerRO9T%2BscB20Ewh9HQwAY6pgGLjg%2Fs3dDZi3BbuTMoPapy0tAnapc3VMU7AKyI2RY1h1unHtROe2pU7OGzb47qIEEIrAD3dt8ILkL2IcdExIba5x9Z73B43wTHf8RAafCHigatJ3Vv%2BgmkJlSrDqrsYYOJ32reLfep4oZInF8eVve%2Fe38ZFm5a1P6bG60ZVAJhi4PjJKQ4%2FIKKiyQPjfHo6dqY0OZROHw4AlHaYBoNOhLgBOe8j65c&X-Amz-Signature=9e5a839b8cae734e19b9831fb9ade541d2d5c4b2b78a87251ce2d079e26ac02e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDUIX7R2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIBo%2B4oH2a5EuqpjXb7nV%2BCt7dCHlyDg9ctJpB1V27VQLAiBh8qG%2BHxIezR5NcSlw4OMXLSWGmAkvedl3XC3HRqJnDSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFGlRZSXWgI4FF5SKtwDcJUD0bGUQKy9MksNQu8VtYKoFawSxjhgPq6hKWDRiwYhUM1tdWZsWnbrZO79bjIuE4lT10UfaGhbbdxvZVaC7xT1oGIUy8HdmMgqqvFzQSUZ27fpt0HFA2V4kk5Y5u%2Bg0k%2BQQjYEHQRx%2FUnjO1RvG8KorRuXtYuSE3124nzjxDxgXqgPEU0FAsNz1%2FsRPRwHu2m96gAvlA3BsQPWt4lrbUAqD%2F6%2FxIAZNhvMDFgmqR2Ybhljkp5nVV4GYWj%2BTBU5O82dd64WSqyXosY7escQPcar5gy6PBQebW66YpEurgE%2BvsAle0xxoXeQcrZmr4I%2BI1A42QrWvEe24Bl9vRyWh5OG91U%2BG6nFMhcELCzKDd6B6vk3p%2Fc5utJbad4MQYK2bsCwlEwJLMWd1M8pR%2BzxVgUASMCLbP63V%2FjmRinQ%2BWJMFrn52xSVIFff%2F6mmMus1YO4FCuhMKZX7vIi2hscNQKvj2XpvnpRYVBvoqlLaivEc1%2Fo0ykAst8phKql9Q57oMBlUytNJGfa%2F0ESTTANmUbyFYi6SQul4u4xaW8aL%2FrqpmXT9Td%2FOUNajEVvi3jUYjx7zxUgjT2mrbyo5XdVuP%2FaQUC%2FR5N7pd6sBQYizdpP%2F6lerRO9T%2BscB20Ewh9HQwAY6pgGLjg%2Fs3dDZi3BbuTMoPapy0tAnapc3VMU7AKyI2RY1h1unHtROe2pU7OGzb47qIEEIrAD3dt8ILkL2IcdExIba5x9Z73B43wTHf8RAafCHigatJ3Vv%2BgmkJlSrDqrsYYOJ32reLfep4oZInF8eVve%2Fe38ZFm5a1P6bG60ZVAJhi4PjJKQ4%2FIKKiyQPjfHo6dqY0OZROHw4AlHaYBoNOhLgBOe8j65c&X-Amz-Signature=744410ff03801bf32901835fcd1baf8cab34be1ed77b42ab681c636bf3ed3be7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDUIX7R2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIBo%2B4oH2a5EuqpjXb7nV%2BCt7dCHlyDg9ctJpB1V27VQLAiBh8qG%2BHxIezR5NcSlw4OMXLSWGmAkvedl3XC3HRqJnDSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFGlRZSXWgI4FF5SKtwDcJUD0bGUQKy9MksNQu8VtYKoFawSxjhgPq6hKWDRiwYhUM1tdWZsWnbrZO79bjIuE4lT10UfaGhbbdxvZVaC7xT1oGIUy8HdmMgqqvFzQSUZ27fpt0HFA2V4kk5Y5u%2Bg0k%2BQQjYEHQRx%2FUnjO1RvG8KorRuXtYuSE3124nzjxDxgXqgPEU0FAsNz1%2FsRPRwHu2m96gAvlA3BsQPWt4lrbUAqD%2F6%2FxIAZNhvMDFgmqR2Ybhljkp5nVV4GYWj%2BTBU5O82dd64WSqyXosY7escQPcar5gy6PBQebW66YpEurgE%2BvsAle0xxoXeQcrZmr4I%2BI1A42QrWvEe24Bl9vRyWh5OG91U%2BG6nFMhcELCzKDd6B6vk3p%2Fc5utJbad4MQYK2bsCwlEwJLMWd1M8pR%2BzxVgUASMCLbP63V%2FjmRinQ%2BWJMFrn52xSVIFff%2F6mmMus1YO4FCuhMKZX7vIi2hscNQKvj2XpvnpRYVBvoqlLaivEc1%2Fo0ykAst8phKql9Q57oMBlUytNJGfa%2F0ESTTANmUbyFYi6SQul4u4xaW8aL%2FrqpmXT9Td%2FOUNajEVvi3jUYjx7zxUgjT2mrbyo5XdVuP%2FaQUC%2FR5N7pd6sBQYizdpP%2F6lerRO9T%2BscB20Ewh9HQwAY6pgGLjg%2Fs3dDZi3BbuTMoPapy0tAnapc3VMU7AKyI2RY1h1unHtROe2pU7OGzb47qIEEIrAD3dt8ILkL2IcdExIba5x9Z73B43wTHf8RAafCHigatJ3Vv%2BgmkJlSrDqrsYYOJ32reLfep4oZInF8eVve%2Fe38ZFm5a1P6bG60ZVAJhi4PjJKQ4%2FIKKiyQPjfHo6dqY0OZROHw4AlHaYBoNOhLgBOe8j65c&X-Amz-Signature=839637d4e79e53272d3ee349ce295582934fcf9c8b579aa9b81c80aaf97af9af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDUIX7R2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIBo%2B4oH2a5EuqpjXb7nV%2BCt7dCHlyDg9ctJpB1V27VQLAiBh8qG%2BHxIezR5NcSlw4OMXLSWGmAkvedl3XC3HRqJnDSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFGlRZSXWgI4FF5SKtwDcJUD0bGUQKy9MksNQu8VtYKoFawSxjhgPq6hKWDRiwYhUM1tdWZsWnbrZO79bjIuE4lT10UfaGhbbdxvZVaC7xT1oGIUy8HdmMgqqvFzQSUZ27fpt0HFA2V4kk5Y5u%2Bg0k%2BQQjYEHQRx%2FUnjO1RvG8KorRuXtYuSE3124nzjxDxgXqgPEU0FAsNz1%2FsRPRwHu2m96gAvlA3BsQPWt4lrbUAqD%2F6%2FxIAZNhvMDFgmqR2Ybhljkp5nVV4GYWj%2BTBU5O82dd64WSqyXosY7escQPcar5gy6PBQebW66YpEurgE%2BvsAle0xxoXeQcrZmr4I%2BI1A42QrWvEe24Bl9vRyWh5OG91U%2BG6nFMhcELCzKDd6B6vk3p%2Fc5utJbad4MQYK2bsCwlEwJLMWd1M8pR%2BzxVgUASMCLbP63V%2FjmRinQ%2BWJMFrn52xSVIFff%2F6mmMus1YO4FCuhMKZX7vIi2hscNQKvj2XpvnpRYVBvoqlLaivEc1%2Fo0ykAst8phKql9Q57oMBlUytNJGfa%2F0ESTTANmUbyFYi6SQul4u4xaW8aL%2FrqpmXT9Td%2FOUNajEVvi3jUYjx7zxUgjT2mrbyo5XdVuP%2FaQUC%2FR5N7pd6sBQYizdpP%2F6lerRO9T%2BscB20Ewh9HQwAY6pgGLjg%2Fs3dDZi3BbuTMoPapy0tAnapc3VMU7AKyI2RY1h1unHtROe2pU7OGzb47qIEEIrAD3dt8ILkL2IcdExIba5x9Z73B43wTHf8RAafCHigatJ3Vv%2BgmkJlSrDqrsYYOJ32reLfep4oZInF8eVve%2Fe38ZFm5a1P6bG60ZVAJhi4PjJKQ4%2FIKKiyQPjfHo6dqY0OZROHw4AlHaYBoNOhLgBOe8j65c&X-Amz-Signature=3579c01bddb9db6f4adb5197b0226b41101d4f0d8ac8b5df11da731fb75413e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
