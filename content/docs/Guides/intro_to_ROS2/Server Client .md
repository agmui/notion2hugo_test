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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPQ7QGI3%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWf8sAcijgVh%2FNUVTHmAufnvvHtM7Z2wMqqZNJ3upuRAiASKRdHUdlz%2B%2Fz72bEobrUv6rGitZ9Azv4NuoTp678ljyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMLT6q4fIWyg7tOzhMKtwDg0M71ymN3SwhfSbDQ96L3wv%2BJvTwtL93MIkOWZaEQq1eGvnh%2F1hafd%2BnQZ6KCT%2Bgc6YvkmFZSerYP%2FzqUTOgsY%2BrmhbNBxXlw7FaRiqji0cgO2wyPCox110UkmGOYzLDXZr%2BvbBnLGAYn8miOXVf0tRtzeBBWeG4Us0IDCx8LJwjVkvsdxRL%2BJlPwvrmcMj1WlpHQlH5cluIPdDq6bTlziN7pt8vUhvEdVg29lR0h%2BrRQD1zRBpkXiMtVCw9NyUE1FaI1E72LR%2ByKf%2FF1IIqQiNbCxxTl6iocHzoNZf13oX43i8P7wBupRdQ%2BB3BNOgJsy9zqcuNhtX6F5fIkmoaOUcvkgzMwM5Vk19o1Os2dSSwErU1C%2FqLhCIzFU2WLVunITJpF8JFaeAHyj9%2FMatts5A5XYYSdOTm0XHSk9%2Bx6ySbFa6H8FbGr1Xh%2BbWoOgv7tJnTl9IYkbfQDEdoxWogr0KGFQZaPz3FIpvFYziGesO8qtTGflUqd4FKuLv6WLhekrkqKkF%2FAtkAKM3Vzj2l9E%2B2xwHQb9eYu%2BJS2u662vP9Y8Rpz2X2zxsI2AKrSDJrWofO9vI615AFFMcgWfn9TFoGGy5z7OK4fiFKMyskwA9pxpvsLEfUNgRyAAcwuOzivgY6pgEqsMvFFKHr3YeGqM%2BCE1f4zTXMwiXGctM6zyTGBw%2Bw9sYfXaG8IOkOzYj44FXvPLPL3AzowKGRNq7%2BKqRkczf5hob8ORirGlYSLDPV%2FWAuXZGTiXjaXG674S46%2FIlg7WxnTuoZHk4auuNhIqv6%2FguDdCefO5j%2FA5q1IjoA001zbi5x3czBp9UyHT7UsnIVpZSpQjmTVH6FkCO%2BBAEzBTouq1fl04xL&X-Amz-Signature=6fe9b4703c1d5d8d2e07e3ae67c5753ce68d0c67da60559706a5f1eb2c3c75e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPQ7QGI3%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWf8sAcijgVh%2FNUVTHmAufnvvHtM7Z2wMqqZNJ3upuRAiASKRdHUdlz%2B%2Fz72bEobrUv6rGitZ9Azv4NuoTp678ljyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMLT6q4fIWyg7tOzhMKtwDg0M71ymN3SwhfSbDQ96L3wv%2BJvTwtL93MIkOWZaEQq1eGvnh%2F1hafd%2BnQZ6KCT%2Bgc6YvkmFZSerYP%2FzqUTOgsY%2BrmhbNBxXlw7FaRiqji0cgO2wyPCox110UkmGOYzLDXZr%2BvbBnLGAYn8miOXVf0tRtzeBBWeG4Us0IDCx8LJwjVkvsdxRL%2BJlPwvrmcMj1WlpHQlH5cluIPdDq6bTlziN7pt8vUhvEdVg29lR0h%2BrRQD1zRBpkXiMtVCw9NyUE1FaI1E72LR%2ByKf%2FF1IIqQiNbCxxTl6iocHzoNZf13oX43i8P7wBupRdQ%2BB3BNOgJsy9zqcuNhtX6F5fIkmoaOUcvkgzMwM5Vk19o1Os2dSSwErU1C%2FqLhCIzFU2WLVunITJpF8JFaeAHyj9%2FMatts5A5XYYSdOTm0XHSk9%2Bx6ySbFa6H8FbGr1Xh%2BbWoOgv7tJnTl9IYkbfQDEdoxWogr0KGFQZaPz3FIpvFYziGesO8qtTGflUqd4FKuLv6WLhekrkqKkF%2FAtkAKM3Vzj2l9E%2B2xwHQb9eYu%2BJS2u662vP9Y8Rpz2X2zxsI2AKrSDJrWofO9vI615AFFMcgWfn9TFoGGy5z7OK4fiFKMyskwA9pxpvsLEfUNgRyAAcwuOzivgY6pgEqsMvFFKHr3YeGqM%2BCE1f4zTXMwiXGctM6zyTGBw%2Bw9sYfXaG8IOkOzYj44FXvPLPL3AzowKGRNq7%2BKqRkczf5hob8ORirGlYSLDPV%2FWAuXZGTiXjaXG674S46%2FIlg7WxnTuoZHk4auuNhIqv6%2FguDdCefO5j%2FA5q1IjoA001zbi5x3czBp9UyHT7UsnIVpZSpQjmTVH6FkCO%2BBAEzBTouq1fl04xL&X-Amz-Signature=faef1d17fb911846895f00fb147a125e9b0e59d359a6f2706a7d1fbdb7ccfe1e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPQ7QGI3%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWf8sAcijgVh%2FNUVTHmAufnvvHtM7Z2wMqqZNJ3upuRAiASKRdHUdlz%2B%2Fz72bEobrUv6rGitZ9Azv4NuoTp678ljyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMLT6q4fIWyg7tOzhMKtwDg0M71ymN3SwhfSbDQ96L3wv%2BJvTwtL93MIkOWZaEQq1eGvnh%2F1hafd%2BnQZ6KCT%2Bgc6YvkmFZSerYP%2FzqUTOgsY%2BrmhbNBxXlw7FaRiqji0cgO2wyPCox110UkmGOYzLDXZr%2BvbBnLGAYn8miOXVf0tRtzeBBWeG4Us0IDCx8LJwjVkvsdxRL%2BJlPwvrmcMj1WlpHQlH5cluIPdDq6bTlziN7pt8vUhvEdVg29lR0h%2BrRQD1zRBpkXiMtVCw9NyUE1FaI1E72LR%2ByKf%2FF1IIqQiNbCxxTl6iocHzoNZf13oX43i8P7wBupRdQ%2BB3BNOgJsy9zqcuNhtX6F5fIkmoaOUcvkgzMwM5Vk19o1Os2dSSwErU1C%2FqLhCIzFU2WLVunITJpF8JFaeAHyj9%2FMatts5A5XYYSdOTm0XHSk9%2Bx6ySbFa6H8FbGr1Xh%2BbWoOgv7tJnTl9IYkbfQDEdoxWogr0KGFQZaPz3FIpvFYziGesO8qtTGflUqd4FKuLv6WLhekrkqKkF%2FAtkAKM3Vzj2l9E%2B2xwHQb9eYu%2BJS2u662vP9Y8Rpz2X2zxsI2AKrSDJrWofO9vI615AFFMcgWfn9TFoGGy5z7OK4fiFKMyskwA9pxpvsLEfUNgRyAAcwuOzivgY6pgEqsMvFFKHr3YeGqM%2BCE1f4zTXMwiXGctM6zyTGBw%2Bw9sYfXaG8IOkOzYj44FXvPLPL3AzowKGRNq7%2BKqRkczf5hob8ORirGlYSLDPV%2FWAuXZGTiXjaXG674S46%2FIlg7WxnTuoZHk4auuNhIqv6%2FguDdCefO5j%2FA5q1IjoA001zbi5x3czBp9UyHT7UsnIVpZSpQjmTVH6FkCO%2BBAEzBTouq1fl04xL&X-Amz-Signature=e1eb0c78bb6a5a6cfbaf6c4249df72d0b98fd4747fdaf7c3e7c41800f9518f57&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPQ7QGI3%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWf8sAcijgVh%2FNUVTHmAufnvvHtM7Z2wMqqZNJ3upuRAiASKRdHUdlz%2B%2Fz72bEobrUv6rGitZ9Azv4NuoTp678ljyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMLT6q4fIWyg7tOzhMKtwDg0M71ymN3SwhfSbDQ96L3wv%2BJvTwtL93MIkOWZaEQq1eGvnh%2F1hafd%2BnQZ6KCT%2Bgc6YvkmFZSerYP%2FzqUTOgsY%2BrmhbNBxXlw7FaRiqji0cgO2wyPCox110UkmGOYzLDXZr%2BvbBnLGAYn8miOXVf0tRtzeBBWeG4Us0IDCx8LJwjVkvsdxRL%2BJlPwvrmcMj1WlpHQlH5cluIPdDq6bTlziN7pt8vUhvEdVg29lR0h%2BrRQD1zRBpkXiMtVCw9NyUE1FaI1E72LR%2ByKf%2FF1IIqQiNbCxxTl6iocHzoNZf13oX43i8P7wBupRdQ%2BB3BNOgJsy9zqcuNhtX6F5fIkmoaOUcvkgzMwM5Vk19o1Os2dSSwErU1C%2FqLhCIzFU2WLVunITJpF8JFaeAHyj9%2FMatts5A5XYYSdOTm0XHSk9%2Bx6ySbFa6H8FbGr1Xh%2BbWoOgv7tJnTl9IYkbfQDEdoxWogr0KGFQZaPz3FIpvFYziGesO8qtTGflUqd4FKuLv6WLhekrkqKkF%2FAtkAKM3Vzj2l9E%2B2xwHQb9eYu%2BJS2u662vP9Y8Rpz2X2zxsI2AKrSDJrWofO9vI615AFFMcgWfn9TFoGGy5z7OK4fiFKMyskwA9pxpvsLEfUNgRyAAcwuOzivgY6pgEqsMvFFKHr3YeGqM%2BCE1f4zTXMwiXGctM6zyTGBw%2Bw9sYfXaG8IOkOzYj44FXvPLPL3AzowKGRNq7%2BKqRkczf5hob8ORirGlYSLDPV%2FWAuXZGTiXjaXG674S46%2FIlg7WxnTuoZHk4auuNhIqv6%2FguDdCefO5j%2FA5q1IjoA001zbi5x3czBp9UyHT7UsnIVpZSpQjmTVH6FkCO%2BBAEzBTouq1fl04xL&X-Amz-Signature=dddc7ddb4318826ad90adbdcd7e0cb5149caeb3c902a8b645cd4a07a499f90b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPQ7QGI3%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWf8sAcijgVh%2FNUVTHmAufnvvHtM7Z2wMqqZNJ3upuRAiASKRdHUdlz%2B%2Fz72bEobrUv6rGitZ9Azv4NuoTp678ljyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMLT6q4fIWyg7tOzhMKtwDg0M71ymN3SwhfSbDQ96L3wv%2BJvTwtL93MIkOWZaEQq1eGvnh%2F1hafd%2BnQZ6KCT%2Bgc6YvkmFZSerYP%2FzqUTOgsY%2BrmhbNBxXlw7FaRiqji0cgO2wyPCox110UkmGOYzLDXZr%2BvbBnLGAYn8miOXVf0tRtzeBBWeG4Us0IDCx8LJwjVkvsdxRL%2BJlPwvrmcMj1WlpHQlH5cluIPdDq6bTlziN7pt8vUhvEdVg29lR0h%2BrRQD1zRBpkXiMtVCw9NyUE1FaI1E72LR%2ByKf%2FF1IIqQiNbCxxTl6iocHzoNZf13oX43i8P7wBupRdQ%2BB3BNOgJsy9zqcuNhtX6F5fIkmoaOUcvkgzMwM5Vk19o1Os2dSSwErU1C%2FqLhCIzFU2WLVunITJpF8JFaeAHyj9%2FMatts5A5XYYSdOTm0XHSk9%2Bx6ySbFa6H8FbGr1Xh%2BbWoOgv7tJnTl9IYkbfQDEdoxWogr0KGFQZaPz3FIpvFYziGesO8qtTGflUqd4FKuLv6WLhekrkqKkF%2FAtkAKM3Vzj2l9E%2B2xwHQb9eYu%2BJS2u662vP9Y8Rpz2X2zxsI2AKrSDJrWofO9vI615AFFMcgWfn9TFoGGy5z7OK4fiFKMyskwA9pxpvsLEfUNgRyAAcwuOzivgY6pgEqsMvFFKHr3YeGqM%2BCE1f4zTXMwiXGctM6zyTGBw%2Bw9sYfXaG8IOkOzYj44FXvPLPL3AzowKGRNq7%2BKqRkczf5hob8ORirGlYSLDPV%2FWAuXZGTiXjaXG674S46%2FIlg7WxnTuoZHk4auuNhIqv6%2FguDdCefO5j%2FA5q1IjoA001zbi5x3czBp9UyHT7UsnIVpZSpQjmTVH6FkCO%2BBAEzBTouq1fl04xL&X-Amz-Signature=7d5af87d599612a570d37cd3d16fd727ea806a640f47f4df3973d7584107069b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
