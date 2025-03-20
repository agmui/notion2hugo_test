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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JDS6OGC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQC5emChYS7Vin3nk9SYYmiCNurFHVnoi6HTydXKbtVraAIgMPJjdt8cB5vzevPi%2BZhG9he0WiRlhMGDP1LsY6smqbwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGYFHx0f7u4sR%2FYLCrcA4KMHjbKSoRhHUAO6q7NBNNwWuul00n0SD8a%2FshSsgFB5eQ%2FK8D4DaPvDgnxLx9OPTgSS1dF378ZdNpBdw%2FKAxErsMreiNcuA3zdK8A936c51LCKM4rF5PZxvS8LQX0UbP92vAJfALeUheMv9wbMPJQZ%2BHEh%2Bbg50uTCCWe%2FqvFC52pD1YvuXmFNg7OpzMp7kBjO6lZ6pYL3oxwh2M6mHQ6t7GyBSxbH3xHBITTejS69KkUsSDjUuuasDh1eh1d0vw%2FgCoU55TTsXnIQGKboXGDVqsOjXA1qgUDYlIEHtKwpj7bd839LI3g22pZo%2F9S3FFqyQmNo%2BFtwsP8pStrm6WB30u5l9By7TG7mm7DMKVDZbr7izpUWwePaQUyX6USVHPVf9K42makYWOlxI%2FsTgVWHLZaJHz5555oWfkl%2BPg0M6RrPAyFDj5bfOG5zZDZu3Uh8%2FsBvvZJgjVyXIlgSPXFoq09Be7jCy2CTcydVzXnqtaCGKuug5TFG5%2B8dNhIMckDRVuJOuQ%2FR8xYsVMiooX2vVzsghtVMKTNx9MR7nMnFNqLFlrw8PN5YzhWsNmNgtKIaHDMHaW6nbAl7gC531kBnEgliwhs2x9QrD%2FZIKg46EjMVV%2BI2AebxsE5WMLLl8b4GOqUBJljPHwJ2JNEXyk1pSBtHNDko6w5TvXpRqs20MJES%2Fszxcun%2BcCscEKCLn7Xoz8tiB9PbAhO9bESTm%2BCSsk0TjElyvE39Wrx%2FzHZRHggQzINltUsbo77%2BhstCWFl22FgHtYoLJRgTeki1xAA19gmPzvWxxOjbPJsGqt6LYGkxqoX4ek3EypYH5Yf3Zr4I2uyBg%2BJHaN3wnjamDbtmUIIp%2FxX%2Bw1ig&X-Amz-Signature=91f6bd0721d5b32bae0af9668f4041fcf499ac53a4ce85fb0f46550fa9dcff2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JDS6OGC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQC5emChYS7Vin3nk9SYYmiCNurFHVnoi6HTydXKbtVraAIgMPJjdt8cB5vzevPi%2BZhG9he0WiRlhMGDP1LsY6smqbwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGYFHx0f7u4sR%2FYLCrcA4KMHjbKSoRhHUAO6q7NBNNwWuul00n0SD8a%2FshSsgFB5eQ%2FK8D4DaPvDgnxLx9OPTgSS1dF378ZdNpBdw%2FKAxErsMreiNcuA3zdK8A936c51LCKM4rF5PZxvS8LQX0UbP92vAJfALeUheMv9wbMPJQZ%2BHEh%2Bbg50uTCCWe%2FqvFC52pD1YvuXmFNg7OpzMp7kBjO6lZ6pYL3oxwh2M6mHQ6t7GyBSxbH3xHBITTejS69KkUsSDjUuuasDh1eh1d0vw%2FgCoU55TTsXnIQGKboXGDVqsOjXA1qgUDYlIEHtKwpj7bd839LI3g22pZo%2F9S3FFqyQmNo%2BFtwsP8pStrm6WB30u5l9By7TG7mm7DMKVDZbr7izpUWwePaQUyX6USVHPVf9K42makYWOlxI%2FsTgVWHLZaJHz5555oWfkl%2BPg0M6RrPAyFDj5bfOG5zZDZu3Uh8%2FsBvvZJgjVyXIlgSPXFoq09Be7jCy2CTcydVzXnqtaCGKuug5TFG5%2B8dNhIMckDRVuJOuQ%2FR8xYsVMiooX2vVzsghtVMKTNx9MR7nMnFNqLFlrw8PN5YzhWsNmNgtKIaHDMHaW6nbAl7gC531kBnEgliwhs2x9QrD%2FZIKg46EjMVV%2BI2AebxsE5WMLLl8b4GOqUBJljPHwJ2JNEXyk1pSBtHNDko6w5TvXpRqs20MJES%2Fszxcun%2BcCscEKCLn7Xoz8tiB9PbAhO9bESTm%2BCSsk0TjElyvE39Wrx%2FzHZRHggQzINltUsbo77%2BhstCWFl22FgHtYoLJRgTeki1xAA19gmPzvWxxOjbPJsGqt6LYGkxqoX4ek3EypYH5Yf3Zr4I2uyBg%2BJHaN3wnjamDbtmUIIp%2FxX%2Bw1ig&X-Amz-Signature=e9c22cffa9b72818ae53f34d9be389626a21111bcc28e1e589ba54916573530a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JDS6OGC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQC5emChYS7Vin3nk9SYYmiCNurFHVnoi6HTydXKbtVraAIgMPJjdt8cB5vzevPi%2BZhG9he0WiRlhMGDP1LsY6smqbwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGYFHx0f7u4sR%2FYLCrcA4KMHjbKSoRhHUAO6q7NBNNwWuul00n0SD8a%2FshSsgFB5eQ%2FK8D4DaPvDgnxLx9OPTgSS1dF378ZdNpBdw%2FKAxErsMreiNcuA3zdK8A936c51LCKM4rF5PZxvS8LQX0UbP92vAJfALeUheMv9wbMPJQZ%2BHEh%2Bbg50uTCCWe%2FqvFC52pD1YvuXmFNg7OpzMp7kBjO6lZ6pYL3oxwh2M6mHQ6t7GyBSxbH3xHBITTejS69KkUsSDjUuuasDh1eh1d0vw%2FgCoU55TTsXnIQGKboXGDVqsOjXA1qgUDYlIEHtKwpj7bd839LI3g22pZo%2F9S3FFqyQmNo%2BFtwsP8pStrm6WB30u5l9By7TG7mm7DMKVDZbr7izpUWwePaQUyX6USVHPVf9K42makYWOlxI%2FsTgVWHLZaJHz5555oWfkl%2BPg0M6RrPAyFDj5bfOG5zZDZu3Uh8%2FsBvvZJgjVyXIlgSPXFoq09Be7jCy2CTcydVzXnqtaCGKuug5TFG5%2B8dNhIMckDRVuJOuQ%2FR8xYsVMiooX2vVzsghtVMKTNx9MR7nMnFNqLFlrw8PN5YzhWsNmNgtKIaHDMHaW6nbAl7gC531kBnEgliwhs2x9QrD%2FZIKg46EjMVV%2BI2AebxsE5WMLLl8b4GOqUBJljPHwJ2JNEXyk1pSBtHNDko6w5TvXpRqs20MJES%2Fszxcun%2BcCscEKCLn7Xoz8tiB9PbAhO9bESTm%2BCSsk0TjElyvE39Wrx%2FzHZRHggQzINltUsbo77%2BhstCWFl22FgHtYoLJRgTeki1xAA19gmPzvWxxOjbPJsGqt6LYGkxqoX4ek3EypYH5Yf3Zr4I2uyBg%2BJHaN3wnjamDbtmUIIp%2FxX%2Bw1ig&X-Amz-Signature=f256dce5fa3039e2d84a1c254e3da65ede60052ebf50082887126e49d3f27bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JDS6OGC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQC5emChYS7Vin3nk9SYYmiCNurFHVnoi6HTydXKbtVraAIgMPJjdt8cB5vzevPi%2BZhG9he0WiRlhMGDP1LsY6smqbwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGYFHx0f7u4sR%2FYLCrcA4KMHjbKSoRhHUAO6q7NBNNwWuul00n0SD8a%2FshSsgFB5eQ%2FK8D4DaPvDgnxLx9OPTgSS1dF378ZdNpBdw%2FKAxErsMreiNcuA3zdK8A936c51LCKM4rF5PZxvS8LQX0UbP92vAJfALeUheMv9wbMPJQZ%2BHEh%2Bbg50uTCCWe%2FqvFC52pD1YvuXmFNg7OpzMp7kBjO6lZ6pYL3oxwh2M6mHQ6t7GyBSxbH3xHBITTejS69KkUsSDjUuuasDh1eh1d0vw%2FgCoU55TTsXnIQGKboXGDVqsOjXA1qgUDYlIEHtKwpj7bd839LI3g22pZo%2F9S3FFqyQmNo%2BFtwsP8pStrm6WB30u5l9By7TG7mm7DMKVDZbr7izpUWwePaQUyX6USVHPVf9K42makYWOlxI%2FsTgVWHLZaJHz5555oWfkl%2BPg0M6RrPAyFDj5bfOG5zZDZu3Uh8%2FsBvvZJgjVyXIlgSPXFoq09Be7jCy2CTcydVzXnqtaCGKuug5TFG5%2B8dNhIMckDRVuJOuQ%2FR8xYsVMiooX2vVzsghtVMKTNx9MR7nMnFNqLFlrw8PN5YzhWsNmNgtKIaHDMHaW6nbAl7gC531kBnEgliwhs2x9QrD%2FZIKg46EjMVV%2BI2AebxsE5WMLLl8b4GOqUBJljPHwJ2JNEXyk1pSBtHNDko6w5TvXpRqs20MJES%2Fszxcun%2BcCscEKCLn7Xoz8tiB9PbAhO9bESTm%2BCSsk0TjElyvE39Wrx%2FzHZRHggQzINltUsbo77%2BhstCWFl22FgHtYoLJRgTeki1xAA19gmPzvWxxOjbPJsGqt6LYGkxqoX4ek3EypYH5Yf3Zr4I2uyBg%2BJHaN3wnjamDbtmUIIp%2FxX%2Bw1ig&X-Amz-Signature=159223adfbafc1883852550da31ba9b57e59acfa7a6ab18034d0668a530d493c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JDS6OGC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQC5emChYS7Vin3nk9SYYmiCNurFHVnoi6HTydXKbtVraAIgMPJjdt8cB5vzevPi%2BZhG9he0WiRlhMGDP1LsY6smqbwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGYFHx0f7u4sR%2FYLCrcA4KMHjbKSoRhHUAO6q7NBNNwWuul00n0SD8a%2FshSsgFB5eQ%2FK8D4DaPvDgnxLx9OPTgSS1dF378ZdNpBdw%2FKAxErsMreiNcuA3zdK8A936c51LCKM4rF5PZxvS8LQX0UbP92vAJfALeUheMv9wbMPJQZ%2BHEh%2Bbg50uTCCWe%2FqvFC52pD1YvuXmFNg7OpzMp7kBjO6lZ6pYL3oxwh2M6mHQ6t7GyBSxbH3xHBITTejS69KkUsSDjUuuasDh1eh1d0vw%2FgCoU55TTsXnIQGKboXGDVqsOjXA1qgUDYlIEHtKwpj7bd839LI3g22pZo%2F9S3FFqyQmNo%2BFtwsP8pStrm6WB30u5l9By7TG7mm7DMKVDZbr7izpUWwePaQUyX6USVHPVf9K42makYWOlxI%2FsTgVWHLZaJHz5555oWfkl%2BPg0M6RrPAyFDj5bfOG5zZDZu3Uh8%2FsBvvZJgjVyXIlgSPXFoq09Be7jCy2CTcydVzXnqtaCGKuug5TFG5%2B8dNhIMckDRVuJOuQ%2FR8xYsVMiooX2vVzsghtVMKTNx9MR7nMnFNqLFlrw8PN5YzhWsNmNgtKIaHDMHaW6nbAl7gC531kBnEgliwhs2x9QrD%2FZIKg46EjMVV%2BI2AebxsE5WMLLl8b4GOqUBJljPHwJ2JNEXyk1pSBtHNDko6w5TvXpRqs20MJES%2Fszxcun%2BcCscEKCLn7Xoz8tiB9PbAhO9bESTm%2BCSsk0TjElyvE39Wrx%2FzHZRHggQzINltUsbo77%2BhstCWFl22FgHtYoLJRgTeki1xAA19gmPzvWxxOjbPJsGqt6LYGkxqoX4ek3EypYH5Yf3Zr4I2uyBg%2BJHaN3wnjamDbtmUIIp%2FxX%2Bw1ig&X-Amz-Signature=9ea1e74bf1a57e88eb7fa902fd6546bb9529a1809998200ee84173ab876d54e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
