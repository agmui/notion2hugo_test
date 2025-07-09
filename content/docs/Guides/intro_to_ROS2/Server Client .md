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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NH3ICK7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0UHzV0jKY1DoenO6h94OUOTwCSOyKNROgEN8e43n12AIhAMNxK4eKcfkXBBBNzSk2yuePMTZiw3Ixec2%2FTjkctJOvKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEjHl58bGagD%2FsNbwq3AOQZdk3QTmKTcBdSpdnbPWVgugerqN8T4%2B%2FaDXcGU%2Bm9WFdoYrBv7sbWlVrQ7xIuT38KkGvELhkn1TwQ941zG0tNyzScA5MsgsCYi7B92mFERWJhui1IAEAFGyoyBHCEQetLRI%2Fs7Iw2MXqbPjT2Q4rVC6mKo2G6b9B4s84JiZy8EC84AK001YjqARZeFRf2HMtdPQTMF36%2BruOkXaOFx%2BoZSQGodvEg6cnd8GAl%2FKokXYwD3jn1fITmt64Ih0ovAWGR5KnUUYoiFR6J9%2FpCgKJIwP1QMBF1v747hWemwQpbHLvXd8y7D1n6jc44voEY0rGgmRaWk4UiIfLwOXyyB84MXgNfTWMuSlXD79RhWZHcnXpzxhv5DuVz7CXtjgzRQM2HEq2doOdSZ8Van3Eu%2B0ff0vEeXCbUhKp3mw584OflnMw0CLadeLkGjmfwFGWQmAoG%2Fb6vIHCIKy0S2WulwivjC5ZoQH1m0dxR0DZqVGh8yy7186q0X3ZLLt7JMBcKzUU6p2dXyNp9tejz1JybQFkQbkkHystgZ2VUyLJiBihqAqt4S1weIpy8MgwaqqwiwklceScKWMoO2xIw6Ed5Bjhq7%2BF1dr%2FtHDLnej6o0Y8l8siaX6KZ1XFr9cHCjCO9bfDBjqkAW0YFj3EPJyuIyqmDDBCAhfBdJA0VMTAkyufrsbaSYV2wr0kNy7KtCPSF5dSZWu29W6fHJvlqbXMM%2B5NxW9xDZJtBy9Oat6mshVQU0ywLMNa%2BpkkMaqS%2FuvgTXECJ0JBCbLc0UJhUpKFGHspA3qzyN3S%2FTKfTT%2B3%2FjqW2HoV98hFpbpnME33omeKx%2FtJcciBthd2vzZXS%2Bklj%2BamNDho%2B5Ut2RBX&X-Amz-Signature=34db0573a11ec10ad8b83e2f02c1832c8f72365057f49e6321c744066632aef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NH3ICK7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0UHzV0jKY1DoenO6h94OUOTwCSOyKNROgEN8e43n12AIhAMNxK4eKcfkXBBBNzSk2yuePMTZiw3Ixec2%2FTjkctJOvKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEjHl58bGagD%2FsNbwq3AOQZdk3QTmKTcBdSpdnbPWVgugerqN8T4%2B%2FaDXcGU%2Bm9WFdoYrBv7sbWlVrQ7xIuT38KkGvELhkn1TwQ941zG0tNyzScA5MsgsCYi7B92mFERWJhui1IAEAFGyoyBHCEQetLRI%2Fs7Iw2MXqbPjT2Q4rVC6mKo2G6b9B4s84JiZy8EC84AK001YjqARZeFRf2HMtdPQTMF36%2BruOkXaOFx%2BoZSQGodvEg6cnd8GAl%2FKokXYwD3jn1fITmt64Ih0ovAWGR5KnUUYoiFR6J9%2FpCgKJIwP1QMBF1v747hWemwQpbHLvXd8y7D1n6jc44voEY0rGgmRaWk4UiIfLwOXyyB84MXgNfTWMuSlXD79RhWZHcnXpzxhv5DuVz7CXtjgzRQM2HEq2doOdSZ8Van3Eu%2B0ff0vEeXCbUhKp3mw584OflnMw0CLadeLkGjmfwFGWQmAoG%2Fb6vIHCIKy0S2WulwivjC5ZoQH1m0dxR0DZqVGh8yy7186q0X3ZLLt7JMBcKzUU6p2dXyNp9tejz1JybQFkQbkkHystgZ2VUyLJiBihqAqt4S1weIpy8MgwaqqwiwklceScKWMoO2xIw6Ed5Bjhq7%2BF1dr%2FtHDLnej6o0Y8l8siaX6KZ1XFr9cHCjCO9bfDBjqkAW0YFj3EPJyuIyqmDDBCAhfBdJA0VMTAkyufrsbaSYV2wr0kNy7KtCPSF5dSZWu29W6fHJvlqbXMM%2B5NxW9xDZJtBy9Oat6mshVQU0ywLMNa%2BpkkMaqS%2FuvgTXECJ0JBCbLc0UJhUpKFGHspA3qzyN3S%2FTKfTT%2B3%2FjqW2HoV98hFpbpnME33omeKx%2FtJcciBthd2vzZXS%2Bklj%2BamNDho%2B5Ut2RBX&X-Amz-Signature=6b15ee53ee981cd55d960a93e6b4791467f014d03929cbdf1ad31f29e36900d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NH3ICK7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0UHzV0jKY1DoenO6h94OUOTwCSOyKNROgEN8e43n12AIhAMNxK4eKcfkXBBBNzSk2yuePMTZiw3Ixec2%2FTjkctJOvKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEjHl58bGagD%2FsNbwq3AOQZdk3QTmKTcBdSpdnbPWVgugerqN8T4%2B%2FaDXcGU%2Bm9WFdoYrBv7sbWlVrQ7xIuT38KkGvELhkn1TwQ941zG0tNyzScA5MsgsCYi7B92mFERWJhui1IAEAFGyoyBHCEQetLRI%2Fs7Iw2MXqbPjT2Q4rVC6mKo2G6b9B4s84JiZy8EC84AK001YjqARZeFRf2HMtdPQTMF36%2BruOkXaOFx%2BoZSQGodvEg6cnd8GAl%2FKokXYwD3jn1fITmt64Ih0ovAWGR5KnUUYoiFR6J9%2FpCgKJIwP1QMBF1v747hWemwQpbHLvXd8y7D1n6jc44voEY0rGgmRaWk4UiIfLwOXyyB84MXgNfTWMuSlXD79RhWZHcnXpzxhv5DuVz7CXtjgzRQM2HEq2doOdSZ8Van3Eu%2B0ff0vEeXCbUhKp3mw584OflnMw0CLadeLkGjmfwFGWQmAoG%2Fb6vIHCIKy0S2WulwivjC5ZoQH1m0dxR0DZqVGh8yy7186q0X3ZLLt7JMBcKzUU6p2dXyNp9tejz1JybQFkQbkkHystgZ2VUyLJiBihqAqt4S1weIpy8MgwaqqwiwklceScKWMoO2xIw6Ed5Bjhq7%2BF1dr%2FtHDLnej6o0Y8l8siaX6KZ1XFr9cHCjCO9bfDBjqkAW0YFj3EPJyuIyqmDDBCAhfBdJA0VMTAkyufrsbaSYV2wr0kNy7KtCPSF5dSZWu29W6fHJvlqbXMM%2B5NxW9xDZJtBy9Oat6mshVQU0ywLMNa%2BpkkMaqS%2FuvgTXECJ0JBCbLc0UJhUpKFGHspA3qzyN3S%2FTKfTT%2B3%2FjqW2HoV98hFpbpnME33omeKx%2FtJcciBthd2vzZXS%2Bklj%2BamNDho%2B5Ut2RBX&X-Amz-Signature=4259ecad32f052cd9af5ff097f8f8c7a17aec195e4a19af67ab335e1b4076043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NH3ICK7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0UHzV0jKY1DoenO6h94OUOTwCSOyKNROgEN8e43n12AIhAMNxK4eKcfkXBBBNzSk2yuePMTZiw3Ixec2%2FTjkctJOvKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEjHl58bGagD%2FsNbwq3AOQZdk3QTmKTcBdSpdnbPWVgugerqN8T4%2B%2FaDXcGU%2Bm9WFdoYrBv7sbWlVrQ7xIuT38KkGvELhkn1TwQ941zG0tNyzScA5MsgsCYi7B92mFERWJhui1IAEAFGyoyBHCEQetLRI%2Fs7Iw2MXqbPjT2Q4rVC6mKo2G6b9B4s84JiZy8EC84AK001YjqARZeFRf2HMtdPQTMF36%2BruOkXaOFx%2BoZSQGodvEg6cnd8GAl%2FKokXYwD3jn1fITmt64Ih0ovAWGR5KnUUYoiFR6J9%2FpCgKJIwP1QMBF1v747hWemwQpbHLvXd8y7D1n6jc44voEY0rGgmRaWk4UiIfLwOXyyB84MXgNfTWMuSlXD79RhWZHcnXpzxhv5DuVz7CXtjgzRQM2HEq2doOdSZ8Van3Eu%2B0ff0vEeXCbUhKp3mw584OflnMw0CLadeLkGjmfwFGWQmAoG%2Fb6vIHCIKy0S2WulwivjC5ZoQH1m0dxR0DZqVGh8yy7186q0X3ZLLt7JMBcKzUU6p2dXyNp9tejz1JybQFkQbkkHystgZ2VUyLJiBihqAqt4S1weIpy8MgwaqqwiwklceScKWMoO2xIw6Ed5Bjhq7%2BF1dr%2FtHDLnej6o0Y8l8siaX6KZ1XFr9cHCjCO9bfDBjqkAW0YFj3EPJyuIyqmDDBCAhfBdJA0VMTAkyufrsbaSYV2wr0kNy7KtCPSF5dSZWu29W6fHJvlqbXMM%2B5NxW9xDZJtBy9Oat6mshVQU0ywLMNa%2BpkkMaqS%2FuvgTXECJ0JBCbLc0UJhUpKFGHspA3qzyN3S%2FTKfTT%2B3%2FjqW2HoV98hFpbpnME33omeKx%2FtJcciBthd2vzZXS%2Bklj%2BamNDho%2B5Ut2RBX&X-Amz-Signature=7e244ef49587e02ce20c45f795c89da49275f7df03da81ab57a713a93c117838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NH3ICK7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0UHzV0jKY1DoenO6h94OUOTwCSOyKNROgEN8e43n12AIhAMNxK4eKcfkXBBBNzSk2yuePMTZiw3Ixec2%2FTjkctJOvKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEjHl58bGagD%2FsNbwq3AOQZdk3QTmKTcBdSpdnbPWVgugerqN8T4%2B%2FaDXcGU%2Bm9WFdoYrBv7sbWlVrQ7xIuT38KkGvELhkn1TwQ941zG0tNyzScA5MsgsCYi7B92mFERWJhui1IAEAFGyoyBHCEQetLRI%2Fs7Iw2MXqbPjT2Q4rVC6mKo2G6b9B4s84JiZy8EC84AK001YjqARZeFRf2HMtdPQTMF36%2BruOkXaOFx%2BoZSQGodvEg6cnd8GAl%2FKokXYwD3jn1fITmt64Ih0ovAWGR5KnUUYoiFR6J9%2FpCgKJIwP1QMBF1v747hWemwQpbHLvXd8y7D1n6jc44voEY0rGgmRaWk4UiIfLwOXyyB84MXgNfTWMuSlXD79RhWZHcnXpzxhv5DuVz7CXtjgzRQM2HEq2doOdSZ8Van3Eu%2B0ff0vEeXCbUhKp3mw584OflnMw0CLadeLkGjmfwFGWQmAoG%2Fb6vIHCIKy0S2WulwivjC5ZoQH1m0dxR0DZqVGh8yy7186q0X3ZLLt7JMBcKzUU6p2dXyNp9tejz1JybQFkQbkkHystgZ2VUyLJiBihqAqt4S1weIpy8MgwaqqwiwklceScKWMoO2xIw6Ed5Bjhq7%2BF1dr%2FtHDLnej6o0Y8l8siaX6KZ1XFr9cHCjCO9bfDBjqkAW0YFj3EPJyuIyqmDDBCAhfBdJA0VMTAkyufrsbaSYV2wr0kNy7KtCPSF5dSZWu29W6fHJvlqbXMM%2B5NxW9xDZJtBy9Oat6mshVQU0ywLMNa%2BpkkMaqS%2FuvgTXECJ0JBCbLc0UJhUpKFGHspA3qzyN3S%2FTKfTT%2B3%2FjqW2HoV98hFpbpnME33omeKx%2FtJcciBthd2vzZXS%2Bklj%2BamNDho%2B5Ut2RBX&X-Amz-Signature=56976e6ab1d9e5a9d9959df6ac3826f2555f5a7ef6825aaa29b0047c3468b1cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
