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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS5GNZHF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDerGLkuF%2Bb9vZ99Hh6OaNJZwdgB3TpdeyoJ9AKC6LplAIhALGxwosbQGYQEZNgKrc6%2FUp6T6KGUT3f5j6qvZhIWEpvKv8DCCEQABoMNjM3NDIzMTgzODA1IgwsLKiy%2BARQsvKJcMUq3APLwSbkuBKphxvNiX4wN%2BoegIyy%2BKc69oLKcgZdJHBzI5FM5s3j0WNp60mP2YDZZOM%2Fb156G4EQcCIIFI5%2F2d7WCRbNIM4lBh9dYPXIvKzJtcVJbYHyi81E8HTNeL7ffKkK0pqhAG7pNvmUsUWjMimpS6QPoglkk0fdsNC0cUrJjl%2BcYLUzDBpGUApJt0fUWpAHz%2BkbSuymO7dvUmnxEBIhH00PgzpoYc97KtJAK1%2BImnasnYERKSEMmnaCHq2uO6ds7H%2FkYDMUaTxiA8oFV2xhzKYLyZYCiORxbgRV3%2FPmrBnviWgDR4i%2FjJNgzLdyPWon%2BHWQuRKhXIh7hfbYkqwolAtu8rpMiiK3r2wFshhX7FYrHCvln5Mjf9QjJsU8PB%2FgWNU88v6wC7egVjwJhki7eSM6XlzZ%2BVowsukEYkmFOgfAtldNDT2hDq2rY6CJe%2FARe4a8G%2FqoVs%2FEZGC%2FhK2F91HYPyvHfdbCENhue902NSRVeSRpMCoTm8Ac2MACjz8dchTlgc2NvaH%2Fjvh6Dd6toqp6yuGpZzHqglbnSIlKXh%2BldHL41BTqUDOGR4X8rP5fdl0EvvdEBSAUa3YUCLevfL4gA3CYCwGTQiO7lrDK6azre9YTjVuH4mcL8jDm8O69BjqkAYVb9bOOid%2BaWg9xMjTLw2PO8uAH%2BzKox%2BaXprlF7w9rHQQGwPwki09md9QWUAmo%2FXazVysxWyivJrFYKUIghkeH0Ai7L3hvwC2SoCyDVcp%2BiVd%2FgMEozuGWPDzpnB%2BRizVFUPULKtRq7jWt%2Fdufe8vzU04H9SIJg22drq76yaIsG6RL%2FOOPHHkrLTJy3fh3YMy%2BNYZjrxRSTN9GfR036nR%2BlE0C&X-Amz-Signature=9bf9d95c477c87c88847c953f83fdb850cd81973ae5f31feb32c1d265bd1dae8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS5GNZHF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDerGLkuF%2Bb9vZ99Hh6OaNJZwdgB3TpdeyoJ9AKC6LplAIhALGxwosbQGYQEZNgKrc6%2FUp6T6KGUT3f5j6qvZhIWEpvKv8DCCEQABoMNjM3NDIzMTgzODA1IgwsLKiy%2BARQsvKJcMUq3APLwSbkuBKphxvNiX4wN%2BoegIyy%2BKc69oLKcgZdJHBzI5FM5s3j0WNp60mP2YDZZOM%2Fb156G4EQcCIIFI5%2F2d7WCRbNIM4lBh9dYPXIvKzJtcVJbYHyi81E8HTNeL7ffKkK0pqhAG7pNvmUsUWjMimpS6QPoglkk0fdsNC0cUrJjl%2BcYLUzDBpGUApJt0fUWpAHz%2BkbSuymO7dvUmnxEBIhH00PgzpoYc97KtJAK1%2BImnasnYERKSEMmnaCHq2uO6ds7H%2FkYDMUaTxiA8oFV2xhzKYLyZYCiORxbgRV3%2FPmrBnviWgDR4i%2FjJNgzLdyPWon%2BHWQuRKhXIh7hfbYkqwolAtu8rpMiiK3r2wFshhX7FYrHCvln5Mjf9QjJsU8PB%2FgWNU88v6wC7egVjwJhki7eSM6XlzZ%2BVowsukEYkmFOgfAtldNDT2hDq2rY6CJe%2FARe4a8G%2FqoVs%2FEZGC%2FhK2F91HYPyvHfdbCENhue902NSRVeSRpMCoTm8Ac2MACjz8dchTlgc2NvaH%2Fjvh6Dd6toqp6yuGpZzHqglbnSIlKXh%2BldHL41BTqUDOGR4X8rP5fdl0EvvdEBSAUa3YUCLevfL4gA3CYCwGTQiO7lrDK6azre9YTjVuH4mcL8jDm8O69BjqkAYVb9bOOid%2BaWg9xMjTLw2PO8uAH%2BzKox%2BaXprlF7w9rHQQGwPwki09md9QWUAmo%2FXazVysxWyivJrFYKUIghkeH0Ai7L3hvwC2SoCyDVcp%2BiVd%2FgMEozuGWPDzpnB%2BRizVFUPULKtRq7jWt%2Fdufe8vzU04H9SIJg22drq76yaIsG6RL%2FOOPHHkrLTJy3fh3YMy%2BNYZjrxRSTN9GfR036nR%2BlE0C&X-Amz-Signature=2e46e2fea9b651e67002163755d5cdcee68aafe9f7714cd7cd8a39413c46c739&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS5GNZHF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDerGLkuF%2Bb9vZ99Hh6OaNJZwdgB3TpdeyoJ9AKC6LplAIhALGxwosbQGYQEZNgKrc6%2FUp6T6KGUT3f5j6qvZhIWEpvKv8DCCEQABoMNjM3NDIzMTgzODA1IgwsLKiy%2BARQsvKJcMUq3APLwSbkuBKphxvNiX4wN%2BoegIyy%2BKc69oLKcgZdJHBzI5FM5s3j0WNp60mP2YDZZOM%2Fb156G4EQcCIIFI5%2F2d7WCRbNIM4lBh9dYPXIvKzJtcVJbYHyi81E8HTNeL7ffKkK0pqhAG7pNvmUsUWjMimpS6QPoglkk0fdsNC0cUrJjl%2BcYLUzDBpGUApJt0fUWpAHz%2BkbSuymO7dvUmnxEBIhH00PgzpoYc97KtJAK1%2BImnasnYERKSEMmnaCHq2uO6ds7H%2FkYDMUaTxiA8oFV2xhzKYLyZYCiORxbgRV3%2FPmrBnviWgDR4i%2FjJNgzLdyPWon%2BHWQuRKhXIh7hfbYkqwolAtu8rpMiiK3r2wFshhX7FYrHCvln5Mjf9QjJsU8PB%2FgWNU88v6wC7egVjwJhki7eSM6XlzZ%2BVowsukEYkmFOgfAtldNDT2hDq2rY6CJe%2FARe4a8G%2FqoVs%2FEZGC%2FhK2F91HYPyvHfdbCENhue902NSRVeSRpMCoTm8Ac2MACjz8dchTlgc2NvaH%2Fjvh6Dd6toqp6yuGpZzHqglbnSIlKXh%2BldHL41BTqUDOGR4X8rP5fdl0EvvdEBSAUa3YUCLevfL4gA3CYCwGTQiO7lrDK6azre9YTjVuH4mcL8jDm8O69BjqkAYVb9bOOid%2BaWg9xMjTLw2PO8uAH%2BzKox%2BaXprlF7w9rHQQGwPwki09md9QWUAmo%2FXazVysxWyivJrFYKUIghkeH0Ai7L3hvwC2SoCyDVcp%2BiVd%2FgMEozuGWPDzpnB%2BRizVFUPULKtRq7jWt%2Fdufe8vzU04H9SIJg22drq76yaIsG6RL%2FOOPHHkrLTJy3fh3YMy%2BNYZjrxRSTN9GfR036nR%2BlE0C&X-Amz-Signature=08f2ddbbc19319649b97945de6211ba042556c6d2d83ac3d803635584cb290c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS5GNZHF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDerGLkuF%2Bb9vZ99Hh6OaNJZwdgB3TpdeyoJ9AKC6LplAIhALGxwosbQGYQEZNgKrc6%2FUp6T6KGUT3f5j6qvZhIWEpvKv8DCCEQABoMNjM3NDIzMTgzODA1IgwsLKiy%2BARQsvKJcMUq3APLwSbkuBKphxvNiX4wN%2BoegIyy%2BKc69oLKcgZdJHBzI5FM5s3j0WNp60mP2YDZZOM%2Fb156G4EQcCIIFI5%2F2d7WCRbNIM4lBh9dYPXIvKzJtcVJbYHyi81E8HTNeL7ffKkK0pqhAG7pNvmUsUWjMimpS6QPoglkk0fdsNC0cUrJjl%2BcYLUzDBpGUApJt0fUWpAHz%2BkbSuymO7dvUmnxEBIhH00PgzpoYc97KtJAK1%2BImnasnYERKSEMmnaCHq2uO6ds7H%2FkYDMUaTxiA8oFV2xhzKYLyZYCiORxbgRV3%2FPmrBnviWgDR4i%2FjJNgzLdyPWon%2BHWQuRKhXIh7hfbYkqwolAtu8rpMiiK3r2wFshhX7FYrHCvln5Mjf9QjJsU8PB%2FgWNU88v6wC7egVjwJhki7eSM6XlzZ%2BVowsukEYkmFOgfAtldNDT2hDq2rY6CJe%2FARe4a8G%2FqoVs%2FEZGC%2FhK2F91HYPyvHfdbCENhue902NSRVeSRpMCoTm8Ac2MACjz8dchTlgc2NvaH%2Fjvh6Dd6toqp6yuGpZzHqglbnSIlKXh%2BldHL41BTqUDOGR4X8rP5fdl0EvvdEBSAUa3YUCLevfL4gA3CYCwGTQiO7lrDK6azre9YTjVuH4mcL8jDm8O69BjqkAYVb9bOOid%2BaWg9xMjTLw2PO8uAH%2BzKox%2BaXprlF7w9rHQQGwPwki09md9QWUAmo%2FXazVysxWyivJrFYKUIghkeH0Ai7L3hvwC2SoCyDVcp%2BiVd%2FgMEozuGWPDzpnB%2BRizVFUPULKtRq7jWt%2Fdufe8vzU04H9SIJg22drq76yaIsG6RL%2FOOPHHkrLTJy3fh3YMy%2BNYZjrxRSTN9GfR036nR%2BlE0C&X-Amz-Signature=99182e3f92847a6a0f456b0d78b18afc639edd6806dc15718cdc2aa410a9d7a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS5GNZHF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDerGLkuF%2Bb9vZ99Hh6OaNJZwdgB3TpdeyoJ9AKC6LplAIhALGxwosbQGYQEZNgKrc6%2FUp6T6KGUT3f5j6qvZhIWEpvKv8DCCEQABoMNjM3NDIzMTgzODA1IgwsLKiy%2BARQsvKJcMUq3APLwSbkuBKphxvNiX4wN%2BoegIyy%2BKc69oLKcgZdJHBzI5FM5s3j0WNp60mP2YDZZOM%2Fb156G4EQcCIIFI5%2F2d7WCRbNIM4lBh9dYPXIvKzJtcVJbYHyi81E8HTNeL7ffKkK0pqhAG7pNvmUsUWjMimpS6QPoglkk0fdsNC0cUrJjl%2BcYLUzDBpGUApJt0fUWpAHz%2BkbSuymO7dvUmnxEBIhH00PgzpoYc97KtJAK1%2BImnasnYERKSEMmnaCHq2uO6ds7H%2FkYDMUaTxiA8oFV2xhzKYLyZYCiORxbgRV3%2FPmrBnviWgDR4i%2FjJNgzLdyPWon%2BHWQuRKhXIh7hfbYkqwolAtu8rpMiiK3r2wFshhX7FYrHCvln5Mjf9QjJsU8PB%2FgWNU88v6wC7egVjwJhki7eSM6XlzZ%2BVowsukEYkmFOgfAtldNDT2hDq2rY6CJe%2FARe4a8G%2FqoVs%2FEZGC%2FhK2F91HYPyvHfdbCENhue902NSRVeSRpMCoTm8Ac2MACjz8dchTlgc2NvaH%2Fjvh6Dd6toqp6yuGpZzHqglbnSIlKXh%2BldHL41BTqUDOGR4X8rP5fdl0EvvdEBSAUa3YUCLevfL4gA3CYCwGTQiO7lrDK6azre9YTjVuH4mcL8jDm8O69BjqkAYVb9bOOid%2BaWg9xMjTLw2PO8uAH%2BzKox%2BaXprlF7w9rHQQGwPwki09md9QWUAmo%2FXazVysxWyivJrFYKUIghkeH0Ai7L3hvwC2SoCyDVcp%2BiVd%2FgMEozuGWPDzpnB%2BRizVFUPULKtRq7jWt%2Fdufe8vzU04H9SIJg22drq76yaIsG6RL%2FOOPHHkrLTJy3fh3YMy%2BNYZjrxRSTN9GfR036nR%2BlE0C&X-Amz-Signature=7af834acc632e65d759bca7a91dc8697701fea04fe9ac791629a15e14a0f52fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
