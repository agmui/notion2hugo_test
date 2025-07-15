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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNC7KRIY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDC4V8gZGHURQjkENs2DOaG9tsXpIIv7L708tHVFJYWkAiAiE3w8pAy4UBfGWqqDFoo2JLKZ%2FJikwLy%2FdaZd6GzNVSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMRTw6OEslg3Hn%2BTelKtwDSXi49N6EN%2B3l0vqenX627wL0o5R9nWVZK%2FAucURYV8N5n7h%2FLAn%2Bxy1nGhesKtvKcpcB8lpOTbzC2Og%2FmoE7bR321rOBBRd2YKmvtiTrsSpfJN9Zxc40N%2FvXtyoCyG62lGqBdfrqcVuqTjZDsPAxePDd2BO5VKn5JqAAG2PxMaUH45tLoxKDXMVrWclcKViqEAajVZLJV8Lezk5AzCiDkZ5tQ6We2UWQ%2FNfc1KuDm9HE6gIGYeFZF0vtwRa6SxQ09KOXfvdK979s7dx%2FKOZ4knhSvQ9DBKrZC86WGoxkIAmEHuvMd7FnL9x3A1wqhBXIyW2duudnH0xMfumHTvpOjiRW0%2BJtAOE9mUuSa7ks8kIeiwZiLnv7MAfB7tRPbHsJWonnuM3k1SxmFozHHZkvCGpC2p67CfB2z0AYBFeMZMFW8uFRE9Wj91luKmgSd4pNetjLYyeAJb1WJvQ6RmyU4sVfEl%2FP%2FbLdbYmsPg6M7OWLARE0%2BYjBOicqncm7%2FHVFakGL6TSqcJdTkmebbqDUOhcOditrw5U%2F86kQqJt%2FKF0oFkKOuuYjcEcQC7URvFg8XYht0%2B7R%2BZ102SCw4ktFGiSEdASsWdumj1DWIAQpE%2BMuSaR%2BjTCqX2pd6zowg6XbwwY6pgHiSaBcfoc2x7gfnZUyOeKZkmNmvNjsiwZDH3zn%2BKGwFtbRR1RZRi%2F%2FhIImOHSwBN0V0lIe%2BKuPd3riBxm1ZfNcCNQClUxUrY%2BkM0KUNW9sLCHeoauK7HZnCw%2FY%2FThvTbFLb%2FRAyy3yrUkXHOJycCfJrd1B6Vi%2BKHV4wDA2zZXpSXc7QF3QngzDWIgdhh3XbuRFvFOB%2FfvJXsfoXb4UsoJS7FAWqcp7&X-Amz-Signature=48d458480f07ee61eaf7f3e1cdc76505be92456fee83ba4154440177da9e641e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNC7KRIY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDC4V8gZGHURQjkENs2DOaG9tsXpIIv7L708tHVFJYWkAiAiE3w8pAy4UBfGWqqDFoo2JLKZ%2FJikwLy%2FdaZd6GzNVSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMRTw6OEslg3Hn%2BTelKtwDSXi49N6EN%2B3l0vqenX627wL0o5R9nWVZK%2FAucURYV8N5n7h%2FLAn%2Bxy1nGhesKtvKcpcB8lpOTbzC2Og%2FmoE7bR321rOBBRd2YKmvtiTrsSpfJN9Zxc40N%2FvXtyoCyG62lGqBdfrqcVuqTjZDsPAxePDd2BO5VKn5JqAAG2PxMaUH45tLoxKDXMVrWclcKViqEAajVZLJV8Lezk5AzCiDkZ5tQ6We2UWQ%2FNfc1KuDm9HE6gIGYeFZF0vtwRa6SxQ09KOXfvdK979s7dx%2FKOZ4knhSvQ9DBKrZC86WGoxkIAmEHuvMd7FnL9x3A1wqhBXIyW2duudnH0xMfumHTvpOjiRW0%2BJtAOE9mUuSa7ks8kIeiwZiLnv7MAfB7tRPbHsJWonnuM3k1SxmFozHHZkvCGpC2p67CfB2z0AYBFeMZMFW8uFRE9Wj91luKmgSd4pNetjLYyeAJb1WJvQ6RmyU4sVfEl%2FP%2FbLdbYmsPg6M7OWLARE0%2BYjBOicqncm7%2FHVFakGL6TSqcJdTkmebbqDUOhcOditrw5U%2F86kQqJt%2FKF0oFkKOuuYjcEcQC7URvFg8XYht0%2B7R%2BZ102SCw4ktFGiSEdASsWdumj1DWIAQpE%2BMuSaR%2BjTCqX2pd6zowg6XbwwY6pgHiSaBcfoc2x7gfnZUyOeKZkmNmvNjsiwZDH3zn%2BKGwFtbRR1RZRi%2F%2FhIImOHSwBN0V0lIe%2BKuPd3riBxm1ZfNcCNQClUxUrY%2BkM0KUNW9sLCHeoauK7HZnCw%2FY%2FThvTbFLb%2FRAyy3yrUkXHOJycCfJrd1B6Vi%2BKHV4wDA2zZXpSXc7QF3QngzDWIgdhh3XbuRFvFOB%2FfvJXsfoXb4UsoJS7FAWqcp7&X-Amz-Signature=9e483e41bb0f7c53059bc527ca663bc0b7de3c62f47df9e669bff72494847da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNC7KRIY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDC4V8gZGHURQjkENs2DOaG9tsXpIIv7L708tHVFJYWkAiAiE3w8pAy4UBfGWqqDFoo2JLKZ%2FJikwLy%2FdaZd6GzNVSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMRTw6OEslg3Hn%2BTelKtwDSXi49N6EN%2B3l0vqenX627wL0o5R9nWVZK%2FAucURYV8N5n7h%2FLAn%2Bxy1nGhesKtvKcpcB8lpOTbzC2Og%2FmoE7bR321rOBBRd2YKmvtiTrsSpfJN9Zxc40N%2FvXtyoCyG62lGqBdfrqcVuqTjZDsPAxePDd2BO5VKn5JqAAG2PxMaUH45tLoxKDXMVrWclcKViqEAajVZLJV8Lezk5AzCiDkZ5tQ6We2UWQ%2FNfc1KuDm9HE6gIGYeFZF0vtwRa6SxQ09KOXfvdK979s7dx%2FKOZ4knhSvQ9DBKrZC86WGoxkIAmEHuvMd7FnL9x3A1wqhBXIyW2duudnH0xMfumHTvpOjiRW0%2BJtAOE9mUuSa7ks8kIeiwZiLnv7MAfB7tRPbHsJWonnuM3k1SxmFozHHZkvCGpC2p67CfB2z0AYBFeMZMFW8uFRE9Wj91luKmgSd4pNetjLYyeAJb1WJvQ6RmyU4sVfEl%2FP%2FbLdbYmsPg6M7OWLARE0%2BYjBOicqncm7%2FHVFakGL6TSqcJdTkmebbqDUOhcOditrw5U%2F86kQqJt%2FKF0oFkKOuuYjcEcQC7URvFg8XYht0%2B7R%2BZ102SCw4ktFGiSEdASsWdumj1DWIAQpE%2BMuSaR%2BjTCqX2pd6zowg6XbwwY6pgHiSaBcfoc2x7gfnZUyOeKZkmNmvNjsiwZDH3zn%2BKGwFtbRR1RZRi%2F%2FhIImOHSwBN0V0lIe%2BKuPd3riBxm1ZfNcCNQClUxUrY%2BkM0KUNW9sLCHeoauK7HZnCw%2FY%2FThvTbFLb%2FRAyy3yrUkXHOJycCfJrd1B6Vi%2BKHV4wDA2zZXpSXc7QF3QngzDWIgdhh3XbuRFvFOB%2FfvJXsfoXb4UsoJS7FAWqcp7&X-Amz-Signature=da7b22b13dad5813b8276764b4a7e0c888ef44589980bdf314520f4bddf53e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNC7KRIY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDC4V8gZGHURQjkENs2DOaG9tsXpIIv7L708tHVFJYWkAiAiE3w8pAy4UBfGWqqDFoo2JLKZ%2FJikwLy%2FdaZd6GzNVSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMRTw6OEslg3Hn%2BTelKtwDSXi49N6EN%2B3l0vqenX627wL0o5R9nWVZK%2FAucURYV8N5n7h%2FLAn%2Bxy1nGhesKtvKcpcB8lpOTbzC2Og%2FmoE7bR321rOBBRd2YKmvtiTrsSpfJN9Zxc40N%2FvXtyoCyG62lGqBdfrqcVuqTjZDsPAxePDd2BO5VKn5JqAAG2PxMaUH45tLoxKDXMVrWclcKViqEAajVZLJV8Lezk5AzCiDkZ5tQ6We2UWQ%2FNfc1KuDm9HE6gIGYeFZF0vtwRa6SxQ09KOXfvdK979s7dx%2FKOZ4knhSvQ9DBKrZC86WGoxkIAmEHuvMd7FnL9x3A1wqhBXIyW2duudnH0xMfumHTvpOjiRW0%2BJtAOE9mUuSa7ks8kIeiwZiLnv7MAfB7tRPbHsJWonnuM3k1SxmFozHHZkvCGpC2p67CfB2z0AYBFeMZMFW8uFRE9Wj91luKmgSd4pNetjLYyeAJb1WJvQ6RmyU4sVfEl%2FP%2FbLdbYmsPg6M7OWLARE0%2BYjBOicqncm7%2FHVFakGL6TSqcJdTkmebbqDUOhcOditrw5U%2F86kQqJt%2FKF0oFkKOuuYjcEcQC7URvFg8XYht0%2B7R%2BZ102SCw4ktFGiSEdASsWdumj1DWIAQpE%2BMuSaR%2BjTCqX2pd6zowg6XbwwY6pgHiSaBcfoc2x7gfnZUyOeKZkmNmvNjsiwZDH3zn%2BKGwFtbRR1RZRi%2F%2FhIImOHSwBN0V0lIe%2BKuPd3riBxm1ZfNcCNQClUxUrY%2BkM0KUNW9sLCHeoauK7HZnCw%2FY%2FThvTbFLb%2FRAyy3yrUkXHOJycCfJrd1B6Vi%2BKHV4wDA2zZXpSXc7QF3QngzDWIgdhh3XbuRFvFOB%2FfvJXsfoXb4UsoJS7FAWqcp7&X-Amz-Signature=8956b7229c2677739112ea22899bc795b557cd8e974cfa9651c8f3dc7994dc93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNC7KRIY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDC4V8gZGHURQjkENs2DOaG9tsXpIIv7L708tHVFJYWkAiAiE3w8pAy4UBfGWqqDFoo2JLKZ%2FJikwLy%2FdaZd6GzNVSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMRTw6OEslg3Hn%2BTelKtwDSXi49N6EN%2B3l0vqenX627wL0o5R9nWVZK%2FAucURYV8N5n7h%2FLAn%2Bxy1nGhesKtvKcpcB8lpOTbzC2Og%2FmoE7bR321rOBBRd2YKmvtiTrsSpfJN9Zxc40N%2FvXtyoCyG62lGqBdfrqcVuqTjZDsPAxePDd2BO5VKn5JqAAG2PxMaUH45tLoxKDXMVrWclcKViqEAajVZLJV8Lezk5AzCiDkZ5tQ6We2UWQ%2FNfc1KuDm9HE6gIGYeFZF0vtwRa6SxQ09KOXfvdK979s7dx%2FKOZ4knhSvQ9DBKrZC86WGoxkIAmEHuvMd7FnL9x3A1wqhBXIyW2duudnH0xMfumHTvpOjiRW0%2BJtAOE9mUuSa7ks8kIeiwZiLnv7MAfB7tRPbHsJWonnuM3k1SxmFozHHZkvCGpC2p67CfB2z0AYBFeMZMFW8uFRE9Wj91luKmgSd4pNetjLYyeAJb1WJvQ6RmyU4sVfEl%2FP%2FbLdbYmsPg6M7OWLARE0%2BYjBOicqncm7%2FHVFakGL6TSqcJdTkmebbqDUOhcOditrw5U%2F86kQqJt%2FKF0oFkKOuuYjcEcQC7URvFg8XYht0%2B7R%2BZ102SCw4ktFGiSEdASsWdumj1DWIAQpE%2BMuSaR%2BjTCqX2pd6zowg6XbwwY6pgHiSaBcfoc2x7gfnZUyOeKZkmNmvNjsiwZDH3zn%2BKGwFtbRR1RZRi%2F%2FhIImOHSwBN0V0lIe%2BKuPd3riBxm1ZfNcCNQClUxUrY%2BkM0KUNW9sLCHeoauK7HZnCw%2FY%2FThvTbFLb%2FRAyy3yrUkXHOJycCfJrd1B6Vi%2BKHV4wDA2zZXpSXc7QF3QngzDWIgdhh3XbuRFvFOB%2FfvJXsfoXb4UsoJS7FAWqcp7&X-Amz-Signature=730564b86183a0c7d51393d47014d9cc61ac9e6dcd1cfdb69c43026b18a8e7cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
