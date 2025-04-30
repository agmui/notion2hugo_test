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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6UOX5O%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQD8ZUaoz2nv0glklH2aQsIKCBAZOioO4WWyPM6mJSHZ%2FwIgLlOMtuUzkY8LmhWNw%2BwciEQZ8jSeMct3CZnjs6Cc%2F0EqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDicKgpnL3edBvqTMyrcA32Bji%2F2wczxsAspLK%2BrGQ2xwTNW9VcGqw6%2Fq0yXB6IkHECbqXKmBhISKAWTtNO7e6GeJjrLsQbngITro1XtMfjDTh%2BdH8y9R7RHqfmd7ioQop0Q1d3wrhmkEfqg9oEsTUyaQJDQtjZRkM6%2B8FM6OoMZwGj4t%2FClE5J5JpBob0umM%2Bw2%2Fq4bGVH6EhRp0soHuKhvsuuclSJUHvQ%2BQK9spCuonSgblgcKVkEMVLgex2WDkoG%2BnMnAhKkbFLJL%2F8U%2FLQdDE9zdhv3UsFMdqdUptToSR%2B5vWO0YztyL3jFUfiY7kS7dgoyM%2FsvYvFSmSmKx32CVQvwsG1vr0BdFmfCGctgKpAzCrrTakpBbLyOY4uD605qQvTvLwRUuFxJuj35sGrT%2FD6LgM%2BNRgJW8yjNQUN1rUKV63wqrP8Frbqo2h1QKOb1Z0031K%2BKKyVFJm1hi%2F8bBzLw4aZoY%2B3zaYYxir5Ub2BQ5r%2Fp%2Bx4Vxy9sXOsQyvOx6V6QybL%2FwtFn0p54762g%2F7A48K57zUo9qZK8it3LokdPM1MwgvJtiP6Z64sHQGnZKXlWH3JiZr6%2BYCaQ3ZCr8VwlMhyoFpXAswlwbI9upe7BVxRe9JvWzXGymIHU4AO4P6vRIhC1x0E%2BiMLayx8AGOqUBG1TAXRVfiRyYSEgQ68DJ0Azq0kW8qspoQMeSMi3tLcK8dVACV5P%2BIH1k%2FKhD%2B5IhIK9EXXRg5kXcvHkibtPzyYCZwpHIHxSsyJ2AWMJ0o8iC2ZwrDZ1QywW5cwI%2F7P6dka805%2BXhcs9MNHSUpzon6oB1JjZ2usC5DeRZ64aRNGZRvRCL5T0omZ5XUO5vSZvFJK1BBFpoUV4WU%2B%2BpfqcqGhEUtYLO&X-Amz-Signature=ef664d0bb0d1022b0616fe9353a273fcdba0eda5db9389332aba5b7d98718916&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6UOX5O%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQD8ZUaoz2nv0glklH2aQsIKCBAZOioO4WWyPM6mJSHZ%2FwIgLlOMtuUzkY8LmhWNw%2BwciEQZ8jSeMct3CZnjs6Cc%2F0EqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDicKgpnL3edBvqTMyrcA32Bji%2F2wczxsAspLK%2BrGQ2xwTNW9VcGqw6%2Fq0yXB6IkHECbqXKmBhISKAWTtNO7e6GeJjrLsQbngITro1XtMfjDTh%2BdH8y9R7RHqfmd7ioQop0Q1d3wrhmkEfqg9oEsTUyaQJDQtjZRkM6%2B8FM6OoMZwGj4t%2FClE5J5JpBob0umM%2Bw2%2Fq4bGVH6EhRp0soHuKhvsuuclSJUHvQ%2BQK9spCuonSgblgcKVkEMVLgex2WDkoG%2BnMnAhKkbFLJL%2F8U%2FLQdDE9zdhv3UsFMdqdUptToSR%2B5vWO0YztyL3jFUfiY7kS7dgoyM%2FsvYvFSmSmKx32CVQvwsG1vr0BdFmfCGctgKpAzCrrTakpBbLyOY4uD605qQvTvLwRUuFxJuj35sGrT%2FD6LgM%2BNRgJW8yjNQUN1rUKV63wqrP8Frbqo2h1QKOb1Z0031K%2BKKyVFJm1hi%2F8bBzLw4aZoY%2B3zaYYxir5Ub2BQ5r%2Fp%2Bx4Vxy9sXOsQyvOx6V6QybL%2FwtFn0p54762g%2F7A48K57zUo9qZK8it3LokdPM1MwgvJtiP6Z64sHQGnZKXlWH3JiZr6%2BYCaQ3ZCr8VwlMhyoFpXAswlwbI9upe7BVxRe9JvWzXGymIHU4AO4P6vRIhC1x0E%2BiMLayx8AGOqUBG1TAXRVfiRyYSEgQ68DJ0Azq0kW8qspoQMeSMi3tLcK8dVACV5P%2BIH1k%2FKhD%2B5IhIK9EXXRg5kXcvHkibtPzyYCZwpHIHxSsyJ2AWMJ0o8iC2ZwrDZ1QywW5cwI%2F7P6dka805%2BXhcs9MNHSUpzon6oB1JjZ2usC5DeRZ64aRNGZRvRCL5T0omZ5XUO5vSZvFJK1BBFpoUV4WU%2B%2BpfqcqGhEUtYLO&X-Amz-Signature=d67fd034cad8f25428fa24c2c5c8a004dc4753cfea2909bfa1d509dd64e56c17&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6UOX5O%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQD8ZUaoz2nv0glklH2aQsIKCBAZOioO4WWyPM6mJSHZ%2FwIgLlOMtuUzkY8LmhWNw%2BwciEQZ8jSeMct3CZnjs6Cc%2F0EqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDicKgpnL3edBvqTMyrcA32Bji%2F2wczxsAspLK%2BrGQ2xwTNW9VcGqw6%2Fq0yXB6IkHECbqXKmBhISKAWTtNO7e6GeJjrLsQbngITro1XtMfjDTh%2BdH8y9R7RHqfmd7ioQop0Q1d3wrhmkEfqg9oEsTUyaQJDQtjZRkM6%2B8FM6OoMZwGj4t%2FClE5J5JpBob0umM%2Bw2%2Fq4bGVH6EhRp0soHuKhvsuuclSJUHvQ%2BQK9spCuonSgblgcKVkEMVLgex2WDkoG%2BnMnAhKkbFLJL%2F8U%2FLQdDE9zdhv3UsFMdqdUptToSR%2B5vWO0YztyL3jFUfiY7kS7dgoyM%2FsvYvFSmSmKx32CVQvwsG1vr0BdFmfCGctgKpAzCrrTakpBbLyOY4uD605qQvTvLwRUuFxJuj35sGrT%2FD6LgM%2BNRgJW8yjNQUN1rUKV63wqrP8Frbqo2h1QKOb1Z0031K%2BKKyVFJm1hi%2F8bBzLw4aZoY%2B3zaYYxir5Ub2BQ5r%2Fp%2Bx4Vxy9sXOsQyvOx6V6QybL%2FwtFn0p54762g%2F7A48K57zUo9qZK8it3LokdPM1MwgvJtiP6Z64sHQGnZKXlWH3JiZr6%2BYCaQ3ZCr8VwlMhyoFpXAswlwbI9upe7BVxRe9JvWzXGymIHU4AO4P6vRIhC1x0E%2BiMLayx8AGOqUBG1TAXRVfiRyYSEgQ68DJ0Azq0kW8qspoQMeSMi3tLcK8dVACV5P%2BIH1k%2FKhD%2B5IhIK9EXXRg5kXcvHkibtPzyYCZwpHIHxSsyJ2AWMJ0o8iC2ZwrDZ1QywW5cwI%2F7P6dka805%2BXhcs9MNHSUpzon6oB1JjZ2usC5DeRZ64aRNGZRvRCL5T0omZ5XUO5vSZvFJK1BBFpoUV4WU%2B%2BpfqcqGhEUtYLO&X-Amz-Signature=d19aa6b2fdf49f8c68fb5aff689fa02c6d6f853327f9ff4f485d7ac39f15e79e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6UOX5O%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQD8ZUaoz2nv0glklH2aQsIKCBAZOioO4WWyPM6mJSHZ%2FwIgLlOMtuUzkY8LmhWNw%2BwciEQZ8jSeMct3CZnjs6Cc%2F0EqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDicKgpnL3edBvqTMyrcA32Bji%2F2wczxsAspLK%2BrGQ2xwTNW9VcGqw6%2Fq0yXB6IkHECbqXKmBhISKAWTtNO7e6GeJjrLsQbngITro1XtMfjDTh%2BdH8y9R7RHqfmd7ioQop0Q1d3wrhmkEfqg9oEsTUyaQJDQtjZRkM6%2B8FM6OoMZwGj4t%2FClE5J5JpBob0umM%2Bw2%2Fq4bGVH6EhRp0soHuKhvsuuclSJUHvQ%2BQK9spCuonSgblgcKVkEMVLgex2WDkoG%2BnMnAhKkbFLJL%2F8U%2FLQdDE9zdhv3UsFMdqdUptToSR%2B5vWO0YztyL3jFUfiY7kS7dgoyM%2FsvYvFSmSmKx32CVQvwsG1vr0BdFmfCGctgKpAzCrrTakpBbLyOY4uD605qQvTvLwRUuFxJuj35sGrT%2FD6LgM%2BNRgJW8yjNQUN1rUKV63wqrP8Frbqo2h1QKOb1Z0031K%2BKKyVFJm1hi%2F8bBzLw4aZoY%2B3zaYYxir5Ub2BQ5r%2Fp%2Bx4Vxy9sXOsQyvOx6V6QybL%2FwtFn0p54762g%2F7A48K57zUo9qZK8it3LokdPM1MwgvJtiP6Z64sHQGnZKXlWH3JiZr6%2BYCaQ3ZCr8VwlMhyoFpXAswlwbI9upe7BVxRe9JvWzXGymIHU4AO4P6vRIhC1x0E%2BiMLayx8AGOqUBG1TAXRVfiRyYSEgQ68DJ0Azq0kW8qspoQMeSMi3tLcK8dVACV5P%2BIH1k%2FKhD%2B5IhIK9EXXRg5kXcvHkibtPzyYCZwpHIHxSsyJ2AWMJ0o8iC2ZwrDZ1QywW5cwI%2F7P6dka805%2BXhcs9MNHSUpzon6oB1JjZ2usC5DeRZ64aRNGZRvRCL5T0omZ5XUO5vSZvFJK1BBFpoUV4WU%2B%2BpfqcqGhEUtYLO&X-Amz-Signature=d1b6e8b081be81807d6604ccbf7aad7b851ad471b6577d8cd900c0065f83e719&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6UOX5O%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQD8ZUaoz2nv0glklH2aQsIKCBAZOioO4WWyPM6mJSHZ%2FwIgLlOMtuUzkY8LmhWNw%2BwciEQZ8jSeMct3CZnjs6Cc%2F0EqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDicKgpnL3edBvqTMyrcA32Bji%2F2wczxsAspLK%2BrGQ2xwTNW9VcGqw6%2Fq0yXB6IkHECbqXKmBhISKAWTtNO7e6GeJjrLsQbngITro1XtMfjDTh%2BdH8y9R7RHqfmd7ioQop0Q1d3wrhmkEfqg9oEsTUyaQJDQtjZRkM6%2B8FM6OoMZwGj4t%2FClE5J5JpBob0umM%2Bw2%2Fq4bGVH6EhRp0soHuKhvsuuclSJUHvQ%2BQK9spCuonSgblgcKVkEMVLgex2WDkoG%2BnMnAhKkbFLJL%2F8U%2FLQdDE9zdhv3UsFMdqdUptToSR%2B5vWO0YztyL3jFUfiY7kS7dgoyM%2FsvYvFSmSmKx32CVQvwsG1vr0BdFmfCGctgKpAzCrrTakpBbLyOY4uD605qQvTvLwRUuFxJuj35sGrT%2FD6LgM%2BNRgJW8yjNQUN1rUKV63wqrP8Frbqo2h1QKOb1Z0031K%2BKKyVFJm1hi%2F8bBzLw4aZoY%2B3zaYYxir5Ub2BQ5r%2Fp%2Bx4Vxy9sXOsQyvOx6V6QybL%2FwtFn0p54762g%2F7A48K57zUo9qZK8it3LokdPM1MwgvJtiP6Z64sHQGnZKXlWH3JiZr6%2BYCaQ3ZCr8VwlMhyoFpXAswlwbI9upe7BVxRe9JvWzXGymIHU4AO4P6vRIhC1x0E%2BiMLayx8AGOqUBG1TAXRVfiRyYSEgQ68DJ0Azq0kW8qspoQMeSMi3tLcK8dVACV5P%2BIH1k%2FKhD%2B5IhIK9EXXRg5kXcvHkibtPzyYCZwpHIHxSsyJ2AWMJ0o8iC2ZwrDZ1QywW5cwI%2F7P6dka805%2BXhcs9MNHSUpzon6oB1JjZ2usC5DeRZ64aRNGZRvRCL5T0omZ5XUO5vSZvFJK1BBFpoUV4WU%2B%2BpfqcqGhEUtYLO&X-Amz-Signature=5cc576b95467368dc27fc5cfebb6314a35cb6af2cd309c61c7ad48d3c802c2aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
