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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7FT5CIQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMbUWj%2FJyEApCYGRjaDkkZUAvIBJHge%2BB0nkYRqUEJ2AiA1x%2BGCGizcX8azkDgbRC%2BlWjImaoXOuKBLp7%2B10iL5oCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFZWUa0Ly7GFPS5zpKtwDu8DNqI5Oj4u4XudfW%2BG8x9cl5Ouj9StQXNj2nXVB0IoEfAPbxmaClNPRHbWjlslGRNsn3zcd1LvRhWMSHRNbYaJF4oGB4icRMAwp3loB6YYKnwx6F32iEHXf5pZ8f2MuytlFFUOnqbdW6mjbd1fKS5sRUM525xqfI2unK8NeOA%2Fc5mFNkZmqty2D6ZIU9I%2BCw6nbLLmjEZopDEK1d67e5%2Fjm0GoghlMx0yBF5ejk0QxzkrUMGTo%2F0Y08i52NUoITVLvhZ1MDFKlBxeC%2Bf3y%2B79N9Hbd5sS7UQ8Lx7nPzO%2FbfL0AzWzfBrFhZKrtmRVKk6C50%2F1LMKvCS1811tlxUnxO%2F6BcoDE%2BrE8fyqq2RrOi7JYCs3bOBRcQ8LZQAc6SGNGskBP2A2TlmljOyyoUaBTidqlKhZQ4f2%2Fiq6ICNiE1ZyoEsNddkXhW9sXtUPJPe9l4n4uPIdP%2FpkBD1vP78UfUaDwaqHG%2FZtdD0nYSBBEEbVfTB2cucGQlPyjxYtOUDxDDmH1QA0OEF8mcHjXpfpwj5zOs00XtEveZS8RCHYeFi5OWORMthYufrT2K1OaEOwD8Z2bCn4mB3Qb9R3M8HYoiiQ9EZP%2F3yK1x%2BV24OaUoDDJbXOqxcGulNtcYw9YrfxAY6pgGaLnuRTn%2BfqDfbAMTJbOaMwFIO%2FAJwVodKenmg%2B7stj8QFVMnGit%2FJN4J3Q32YnPp546oBzXHkfuYAVAcZFYfSy3VJmegmUCIuKxDUVMwEm5ptJTSDkFGwu9ObOG8LXR7l58%2B0WQ4LygYex88HHg2OGFrbueBX9FdQ5bn7fqQ3CZG29%2FlF7GqQqRq813gZtr%2FoRXhy8vLiPA8Hs6z%2Bx8yWArd20s%2F8&X-Amz-Signature=863426f31a41db84d7739d6ab85494b71570533ac121d847a1679a563c8687a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7FT5CIQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMbUWj%2FJyEApCYGRjaDkkZUAvIBJHge%2BB0nkYRqUEJ2AiA1x%2BGCGizcX8azkDgbRC%2BlWjImaoXOuKBLp7%2B10iL5oCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFZWUa0Ly7GFPS5zpKtwDu8DNqI5Oj4u4XudfW%2BG8x9cl5Ouj9StQXNj2nXVB0IoEfAPbxmaClNPRHbWjlslGRNsn3zcd1LvRhWMSHRNbYaJF4oGB4icRMAwp3loB6YYKnwx6F32iEHXf5pZ8f2MuytlFFUOnqbdW6mjbd1fKS5sRUM525xqfI2unK8NeOA%2Fc5mFNkZmqty2D6ZIU9I%2BCw6nbLLmjEZopDEK1d67e5%2Fjm0GoghlMx0yBF5ejk0QxzkrUMGTo%2F0Y08i52NUoITVLvhZ1MDFKlBxeC%2Bf3y%2B79N9Hbd5sS7UQ8Lx7nPzO%2FbfL0AzWzfBrFhZKrtmRVKk6C50%2F1LMKvCS1811tlxUnxO%2F6BcoDE%2BrE8fyqq2RrOi7JYCs3bOBRcQ8LZQAc6SGNGskBP2A2TlmljOyyoUaBTidqlKhZQ4f2%2Fiq6ICNiE1ZyoEsNddkXhW9sXtUPJPe9l4n4uPIdP%2FpkBD1vP78UfUaDwaqHG%2FZtdD0nYSBBEEbVfTB2cucGQlPyjxYtOUDxDDmH1QA0OEF8mcHjXpfpwj5zOs00XtEveZS8RCHYeFi5OWORMthYufrT2K1OaEOwD8Z2bCn4mB3Qb9R3M8HYoiiQ9EZP%2F3yK1x%2BV24OaUoDDJbXOqxcGulNtcYw9YrfxAY6pgGaLnuRTn%2BfqDfbAMTJbOaMwFIO%2FAJwVodKenmg%2B7stj8QFVMnGit%2FJN4J3Q32YnPp546oBzXHkfuYAVAcZFYfSy3VJmegmUCIuKxDUVMwEm5ptJTSDkFGwu9ObOG8LXR7l58%2B0WQ4LygYex88HHg2OGFrbueBX9FdQ5bn7fqQ3CZG29%2FlF7GqQqRq813gZtr%2FoRXhy8vLiPA8Hs6z%2Bx8yWArd20s%2F8&X-Amz-Signature=e7bef9d8c33925664108d150aa4e1717c5be2b1592e28248f616b93f57081542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7FT5CIQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMbUWj%2FJyEApCYGRjaDkkZUAvIBJHge%2BB0nkYRqUEJ2AiA1x%2BGCGizcX8azkDgbRC%2BlWjImaoXOuKBLp7%2B10iL5oCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFZWUa0Ly7GFPS5zpKtwDu8DNqI5Oj4u4XudfW%2BG8x9cl5Ouj9StQXNj2nXVB0IoEfAPbxmaClNPRHbWjlslGRNsn3zcd1LvRhWMSHRNbYaJF4oGB4icRMAwp3loB6YYKnwx6F32iEHXf5pZ8f2MuytlFFUOnqbdW6mjbd1fKS5sRUM525xqfI2unK8NeOA%2Fc5mFNkZmqty2D6ZIU9I%2BCw6nbLLmjEZopDEK1d67e5%2Fjm0GoghlMx0yBF5ejk0QxzkrUMGTo%2F0Y08i52NUoITVLvhZ1MDFKlBxeC%2Bf3y%2B79N9Hbd5sS7UQ8Lx7nPzO%2FbfL0AzWzfBrFhZKrtmRVKk6C50%2F1LMKvCS1811tlxUnxO%2F6BcoDE%2BrE8fyqq2RrOi7JYCs3bOBRcQ8LZQAc6SGNGskBP2A2TlmljOyyoUaBTidqlKhZQ4f2%2Fiq6ICNiE1ZyoEsNddkXhW9sXtUPJPe9l4n4uPIdP%2FpkBD1vP78UfUaDwaqHG%2FZtdD0nYSBBEEbVfTB2cucGQlPyjxYtOUDxDDmH1QA0OEF8mcHjXpfpwj5zOs00XtEveZS8RCHYeFi5OWORMthYufrT2K1OaEOwD8Z2bCn4mB3Qb9R3M8HYoiiQ9EZP%2F3yK1x%2BV24OaUoDDJbXOqxcGulNtcYw9YrfxAY6pgGaLnuRTn%2BfqDfbAMTJbOaMwFIO%2FAJwVodKenmg%2B7stj8QFVMnGit%2FJN4J3Q32YnPp546oBzXHkfuYAVAcZFYfSy3VJmegmUCIuKxDUVMwEm5ptJTSDkFGwu9ObOG8LXR7l58%2B0WQ4LygYex88HHg2OGFrbueBX9FdQ5bn7fqQ3CZG29%2FlF7GqQqRq813gZtr%2FoRXhy8vLiPA8Hs6z%2Bx8yWArd20s%2F8&X-Amz-Signature=891720880f1039a95fbfdc6a2f49828c215b1ba7125bd75d6035febe24c30b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7FT5CIQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMbUWj%2FJyEApCYGRjaDkkZUAvIBJHge%2BB0nkYRqUEJ2AiA1x%2BGCGizcX8azkDgbRC%2BlWjImaoXOuKBLp7%2B10iL5oCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFZWUa0Ly7GFPS5zpKtwDu8DNqI5Oj4u4XudfW%2BG8x9cl5Ouj9StQXNj2nXVB0IoEfAPbxmaClNPRHbWjlslGRNsn3zcd1LvRhWMSHRNbYaJF4oGB4icRMAwp3loB6YYKnwx6F32iEHXf5pZ8f2MuytlFFUOnqbdW6mjbd1fKS5sRUM525xqfI2unK8NeOA%2Fc5mFNkZmqty2D6ZIU9I%2BCw6nbLLmjEZopDEK1d67e5%2Fjm0GoghlMx0yBF5ejk0QxzkrUMGTo%2F0Y08i52NUoITVLvhZ1MDFKlBxeC%2Bf3y%2B79N9Hbd5sS7UQ8Lx7nPzO%2FbfL0AzWzfBrFhZKrtmRVKk6C50%2F1LMKvCS1811tlxUnxO%2F6BcoDE%2BrE8fyqq2RrOi7JYCs3bOBRcQ8LZQAc6SGNGskBP2A2TlmljOyyoUaBTidqlKhZQ4f2%2Fiq6ICNiE1ZyoEsNddkXhW9sXtUPJPe9l4n4uPIdP%2FpkBD1vP78UfUaDwaqHG%2FZtdD0nYSBBEEbVfTB2cucGQlPyjxYtOUDxDDmH1QA0OEF8mcHjXpfpwj5zOs00XtEveZS8RCHYeFi5OWORMthYufrT2K1OaEOwD8Z2bCn4mB3Qb9R3M8HYoiiQ9EZP%2F3yK1x%2BV24OaUoDDJbXOqxcGulNtcYw9YrfxAY6pgGaLnuRTn%2BfqDfbAMTJbOaMwFIO%2FAJwVodKenmg%2B7stj8QFVMnGit%2FJN4J3Q32YnPp546oBzXHkfuYAVAcZFYfSy3VJmegmUCIuKxDUVMwEm5ptJTSDkFGwu9ObOG8LXR7l58%2B0WQ4LygYex88HHg2OGFrbueBX9FdQ5bn7fqQ3CZG29%2FlF7GqQqRq813gZtr%2FoRXhy8vLiPA8Hs6z%2Bx8yWArd20s%2F8&X-Amz-Signature=d2e49ffca2cec6c83c37d44935596d69b4ff1fbb4152ddb123dc073bcf115258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7FT5CIQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMbUWj%2FJyEApCYGRjaDkkZUAvIBJHge%2BB0nkYRqUEJ2AiA1x%2BGCGizcX8azkDgbRC%2BlWjImaoXOuKBLp7%2B10iL5oCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFZWUa0Ly7GFPS5zpKtwDu8DNqI5Oj4u4XudfW%2BG8x9cl5Ouj9StQXNj2nXVB0IoEfAPbxmaClNPRHbWjlslGRNsn3zcd1LvRhWMSHRNbYaJF4oGB4icRMAwp3loB6YYKnwx6F32iEHXf5pZ8f2MuytlFFUOnqbdW6mjbd1fKS5sRUM525xqfI2unK8NeOA%2Fc5mFNkZmqty2D6ZIU9I%2BCw6nbLLmjEZopDEK1d67e5%2Fjm0GoghlMx0yBF5ejk0QxzkrUMGTo%2F0Y08i52NUoITVLvhZ1MDFKlBxeC%2Bf3y%2B79N9Hbd5sS7UQ8Lx7nPzO%2FbfL0AzWzfBrFhZKrtmRVKk6C50%2F1LMKvCS1811tlxUnxO%2F6BcoDE%2BrE8fyqq2RrOi7JYCs3bOBRcQ8LZQAc6SGNGskBP2A2TlmljOyyoUaBTidqlKhZQ4f2%2Fiq6ICNiE1ZyoEsNddkXhW9sXtUPJPe9l4n4uPIdP%2FpkBD1vP78UfUaDwaqHG%2FZtdD0nYSBBEEbVfTB2cucGQlPyjxYtOUDxDDmH1QA0OEF8mcHjXpfpwj5zOs00XtEveZS8RCHYeFi5OWORMthYufrT2K1OaEOwD8Z2bCn4mB3Qb9R3M8HYoiiQ9EZP%2F3yK1x%2BV24OaUoDDJbXOqxcGulNtcYw9YrfxAY6pgGaLnuRTn%2BfqDfbAMTJbOaMwFIO%2FAJwVodKenmg%2B7stj8QFVMnGit%2FJN4J3Q32YnPp546oBzXHkfuYAVAcZFYfSy3VJmegmUCIuKxDUVMwEm5ptJTSDkFGwu9ObOG8LXR7l58%2B0WQ4LygYex88HHg2OGFrbueBX9FdQ5bn7fqQ3CZG29%2FlF7GqQqRq813gZtr%2FoRXhy8vLiPA8Hs6z%2Bx8yWArd20s%2F8&X-Amz-Signature=669b23072696a4e433e17620d7e4495b9181cdbfe3d22d21fe4a94507840673e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
