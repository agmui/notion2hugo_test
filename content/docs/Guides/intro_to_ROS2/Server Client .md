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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YHVXYWX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHul89%2B5Yk2ITrLt3c9OdRgdSAkIXSXlfLMySIhS6OAPAiA0MCgRZ4nGCtb7SkNuo8bbxKvkBDLPdpHQsYBZ3NXGJiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMija2rSsURxcE9aPGKtwD%2FqqDlZVs%2BeTEPgqdnf1ch19NV5At9gFBQhVYkL9xiI2Eh7G1vJpQP2lyhqw19ylryeXBU4mDSBt%2FEedObXaF%2FVvkYbEtrQaR8JMreXpHYy%2F%2FQJgWihNDMoZWF9%2BgMGRxa7vE35ASfz3iLxi1sW595TbjPbPx7PI8E0ws445880OjqZ7xKZX0tVJQY8YfkVNPBQW0eN8y3v3WyeenRKkUj5Etw275svoX7dLw6EqJO9bfdD8UT6OVccTh9USRa%2BAkK1KIJxDNDAhES1kFAtJd8pHFdw3vpxy%2BXVfZE%2FJra5niappkoIY%2FWFdHa%2FQBAc%2FvDE5FVCQojQezK8nF9TIhELw02F5fjO81vpDeOshwvzowsTfFyHQFsd6DtLasZC255NktxgXPEl2U4vRUvm8HC%2FZtVcWW%2FGLtfrDO7YLR0EI1LBFncwJFlyupl85Yl5MXd7rx2XoKdXb3H6Ce6zW7BNWGG09MwDBsteoGxRHp4%2B89N5aSJkeQwRzFA3qTAMXyjFsACxudyL25XKxL1AOZEQt9gkH1L3BdVqfj3kDiOt2lMAp6q%2FqT2RnqIwEwsEvu7LdZIdzYzs78WgN0hNJXP7Frbl5rICPwcF386Zc93N2cUeK%2FhWH6sAnMJvEw1JylvQY6pgHNohTpy28HMW1ZFmvjq%2FTkWRkja3bbhuEIUSPccCQDKfAQ8f3zmHApSPTPCdjGZW8sbOdP1g1bB5a4zX%2BAAeW2wvMHVy8F0BoH6%2B23P1XHN5hYD%2BNOri%2F4n7A6kgdPzfXfmrQmfLUld3%2BqIDe9M%2FnakvpdrAZkKY6NElOZvEPyRnalu5Fyspd0BdqzwozlCIdMB%2BD5Tv9Ah1auVFNVjOX5ehgyKhuo&X-Amz-Signature=9d2a1c57f0bac07946ed5321cf27228906f929e01d2c07fe60e4ac9fc9b6b73a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YHVXYWX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHul89%2B5Yk2ITrLt3c9OdRgdSAkIXSXlfLMySIhS6OAPAiA0MCgRZ4nGCtb7SkNuo8bbxKvkBDLPdpHQsYBZ3NXGJiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMija2rSsURxcE9aPGKtwD%2FqqDlZVs%2BeTEPgqdnf1ch19NV5At9gFBQhVYkL9xiI2Eh7G1vJpQP2lyhqw19ylryeXBU4mDSBt%2FEedObXaF%2FVvkYbEtrQaR8JMreXpHYy%2F%2FQJgWihNDMoZWF9%2BgMGRxa7vE35ASfz3iLxi1sW595TbjPbPx7PI8E0ws445880OjqZ7xKZX0tVJQY8YfkVNPBQW0eN8y3v3WyeenRKkUj5Etw275svoX7dLw6EqJO9bfdD8UT6OVccTh9USRa%2BAkK1KIJxDNDAhES1kFAtJd8pHFdw3vpxy%2BXVfZE%2FJra5niappkoIY%2FWFdHa%2FQBAc%2FvDE5FVCQojQezK8nF9TIhELw02F5fjO81vpDeOshwvzowsTfFyHQFsd6DtLasZC255NktxgXPEl2U4vRUvm8HC%2FZtVcWW%2FGLtfrDO7YLR0EI1LBFncwJFlyupl85Yl5MXd7rx2XoKdXb3H6Ce6zW7BNWGG09MwDBsteoGxRHp4%2B89N5aSJkeQwRzFA3qTAMXyjFsACxudyL25XKxL1AOZEQt9gkH1L3BdVqfj3kDiOt2lMAp6q%2FqT2RnqIwEwsEvu7LdZIdzYzs78WgN0hNJXP7Frbl5rICPwcF386Zc93N2cUeK%2FhWH6sAnMJvEw1JylvQY6pgHNohTpy28HMW1ZFmvjq%2FTkWRkja3bbhuEIUSPccCQDKfAQ8f3zmHApSPTPCdjGZW8sbOdP1g1bB5a4zX%2BAAeW2wvMHVy8F0BoH6%2B23P1XHN5hYD%2BNOri%2F4n7A6kgdPzfXfmrQmfLUld3%2BqIDe9M%2FnakvpdrAZkKY6NElOZvEPyRnalu5Fyspd0BdqzwozlCIdMB%2BD5Tv9Ah1auVFNVjOX5ehgyKhuo&X-Amz-Signature=b20567271aa27fcc342125addd8c08cc93c94229cda3d0cc78c5405e1733f7db&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YHVXYWX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHul89%2B5Yk2ITrLt3c9OdRgdSAkIXSXlfLMySIhS6OAPAiA0MCgRZ4nGCtb7SkNuo8bbxKvkBDLPdpHQsYBZ3NXGJiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMija2rSsURxcE9aPGKtwD%2FqqDlZVs%2BeTEPgqdnf1ch19NV5At9gFBQhVYkL9xiI2Eh7G1vJpQP2lyhqw19ylryeXBU4mDSBt%2FEedObXaF%2FVvkYbEtrQaR8JMreXpHYy%2F%2FQJgWihNDMoZWF9%2BgMGRxa7vE35ASfz3iLxi1sW595TbjPbPx7PI8E0ws445880OjqZ7xKZX0tVJQY8YfkVNPBQW0eN8y3v3WyeenRKkUj5Etw275svoX7dLw6EqJO9bfdD8UT6OVccTh9USRa%2BAkK1KIJxDNDAhES1kFAtJd8pHFdw3vpxy%2BXVfZE%2FJra5niappkoIY%2FWFdHa%2FQBAc%2FvDE5FVCQojQezK8nF9TIhELw02F5fjO81vpDeOshwvzowsTfFyHQFsd6DtLasZC255NktxgXPEl2U4vRUvm8HC%2FZtVcWW%2FGLtfrDO7YLR0EI1LBFncwJFlyupl85Yl5MXd7rx2XoKdXb3H6Ce6zW7BNWGG09MwDBsteoGxRHp4%2B89N5aSJkeQwRzFA3qTAMXyjFsACxudyL25XKxL1AOZEQt9gkH1L3BdVqfj3kDiOt2lMAp6q%2FqT2RnqIwEwsEvu7LdZIdzYzs78WgN0hNJXP7Frbl5rICPwcF386Zc93N2cUeK%2FhWH6sAnMJvEw1JylvQY6pgHNohTpy28HMW1ZFmvjq%2FTkWRkja3bbhuEIUSPccCQDKfAQ8f3zmHApSPTPCdjGZW8sbOdP1g1bB5a4zX%2BAAeW2wvMHVy8F0BoH6%2B23P1XHN5hYD%2BNOri%2F4n7A6kgdPzfXfmrQmfLUld3%2BqIDe9M%2FnakvpdrAZkKY6NElOZvEPyRnalu5Fyspd0BdqzwozlCIdMB%2BD5Tv9Ah1auVFNVjOX5ehgyKhuo&X-Amz-Signature=6bb7ae7f825e3c95cc85189687e881cbb709bcb43ff27c7e607b625796b69b7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YHVXYWX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHul89%2B5Yk2ITrLt3c9OdRgdSAkIXSXlfLMySIhS6OAPAiA0MCgRZ4nGCtb7SkNuo8bbxKvkBDLPdpHQsYBZ3NXGJiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMija2rSsURxcE9aPGKtwD%2FqqDlZVs%2BeTEPgqdnf1ch19NV5At9gFBQhVYkL9xiI2Eh7G1vJpQP2lyhqw19ylryeXBU4mDSBt%2FEedObXaF%2FVvkYbEtrQaR8JMreXpHYy%2F%2FQJgWihNDMoZWF9%2BgMGRxa7vE35ASfz3iLxi1sW595TbjPbPx7PI8E0ws445880OjqZ7xKZX0tVJQY8YfkVNPBQW0eN8y3v3WyeenRKkUj5Etw275svoX7dLw6EqJO9bfdD8UT6OVccTh9USRa%2BAkK1KIJxDNDAhES1kFAtJd8pHFdw3vpxy%2BXVfZE%2FJra5niappkoIY%2FWFdHa%2FQBAc%2FvDE5FVCQojQezK8nF9TIhELw02F5fjO81vpDeOshwvzowsTfFyHQFsd6DtLasZC255NktxgXPEl2U4vRUvm8HC%2FZtVcWW%2FGLtfrDO7YLR0EI1LBFncwJFlyupl85Yl5MXd7rx2XoKdXb3H6Ce6zW7BNWGG09MwDBsteoGxRHp4%2B89N5aSJkeQwRzFA3qTAMXyjFsACxudyL25XKxL1AOZEQt9gkH1L3BdVqfj3kDiOt2lMAp6q%2FqT2RnqIwEwsEvu7LdZIdzYzs78WgN0hNJXP7Frbl5rICPwcF386Zc93N2cUeK%2FhWH6sAnMJvEw1JylvQY6pgHNohTpy28HMW1ZFmvjq%2FTkWRkja3bbhuEIUSPccCQDKfAQ8f3zmHApSPTPCdjGZW8sbOdP1g1bB5a4zX%2BAAeW2wvMHVy8F0BoH6%2B23P1XHN5hYD%2BNOri%2F4n7A6kgdPzfXfmrQmfLUld3%2BqIDe9M%2FnakvpdrAZkKY6NElOZvEPyRnalu5Fyspd0BdqzwozlCIdMB%2BD5Tv9Ah1auVFNVjOX5ehgyKhuo&X-Amz-Signature=782a8f5807bdd2ffa3b321668cf32c21b7d9f73cc54661f779590e373bf3bda4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YHVXYWX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHul89%2B5Yk2ITrLt3c9OdRgdSAkIXSXlfLMySIhS6OAPAiA0MCgRZ4nGCtb7SkNuo8bbxKvkBDLPdpHQsYBZ3NXGJiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMija2rSsURxcE9aPGKtwD%2FqqDlZVs%2BeTEPgqdnf1ch19NV5At9gFBQhVYkL9xiI2Eh7G1vJpQP2lyhqw19ylryeXBU4mDSBt%2FEedObXaF%2FVvkYbEtrQaR8JMreXpHYy%2F%2FQJgWihNDMoZWF9%2BgMGRxa7vE35ASfz3iLxi1sW595TbjPbPx7PI8E0ws445880OjqZ7xKZX0tVJQY8YfkVNPBQW0eN8y3v3WyeenRKkUj5Etw275svoX7dLw6EqJO9bfdD8UT6OVccTh9USRa%2BAkK1KIJxDNDAhES1kFAtJd8pHFdw3vpxy%2BXVfZE%2FJra5niappkoIY%2FWFdHa%2FQBAc%2FvDE5FVCQojQezK8nF9TIhELw02F5fjO81vpDeOshwvzowsTfFyHQFsd6DtLasZC255NktxgXPEl2U4vRUvm8HC%2FZtVcWW%2FGLtfrDO7YLR0EI1LBFncwJFlyupl85Yl5MXd7rx2XoKdXb3H6Ce6zW7BNWGG09MwDBsteoGxRHp4%2B89N5aSJkeQwRzFA3qTAMXyjFsACxudyL25XKxL1AOZEQt9gkH1L3BdVqfj3kDiOt2lMAp6q%2FqT2RnqIwEwsEvu7LdZIdzYzs78WgN0hNJXP7Frbl5rICPwcF386Zc93N2cUeK%2FhWH6sAnMJvEw1JylvQY6pgHNohTpy28HMW1ZFmvjq%2FTkWRkja3bbhuEIUSPccCQDKfAQ8f3zmHApSPTPCdjGZW8sbOdP1g1bB5a4zX%2BAAeW2wvMHVy8F0BoH6%2B23P1XHN5hYD%2BNOri%2F4n7A6kgdPzfXfmrQmfLUld3%2BqIDe9M%2FnakvpdrAZkKY6NElOZvEPyRnalu5Fyspd0BdqzwozlCIdMB%2BD5Tv9Ah1auVFNVjOX5ehgyKhuo&X-Amz-Signature=ee14a843fd047d597015edfac1d102ddf68a1b7f119b21c397cdb2fcf8a39903&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
