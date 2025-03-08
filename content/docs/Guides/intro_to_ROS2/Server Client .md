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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAK7BDZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDKgG2s0vd9Pg%2BEehFO3PwjkomnZAaYdfDQNEElVRZ5egIhAI8%2Bzqg7aexfhq6Rhn9z1MfdSUeMuuqqUUH9VFh29TZbKv8DCFgQABoMNjM3NDIzMTgzODA1Igwf%2FchGQKX2q0%2BacGYq3AMttu3OZGEjwkHeEN5Fvjrz%2BP6tnFWKZtw4%2BUqxHQsI9fEsJvtcTd6W%2F1mhcfo3Ps%2BDirnZYusgb%2FB3SMK0ClOugOu4EsvTR15CsZy9R11hbIrwdow7OaIoTQQvBN%2FFqSraNXDqyEyMDXnJaw9q5RVl%2Bi3GdoYtITOwuqnWw3nPgiIKEgKxU9okacfhSRAxfJbkCC8ytAhez%2FvqbF7sX307Z2ZVd4iI%2FDHheJBl9iO4j0u4gm3oMdb0ioQ0mkhGCDBFV0aK%2F%2BH4BVdofz7LkJescE6KW1fM5UX3MIFjf3H5lLzOoqHO9kOnOLKpO1676kALmdQ2ohaO4O%2BZpBTMpgCwlZLGFTL1k8cOJ59ujDboNhZi8aHerBtHVC9nXt3esG02ECDr6sK6qBKqUoB47%2B8InGdXiM24k9YK8EH9vlr5T8MmxLmV7AnP%2BIzHGQibaIJrwYUQa3n8mWIngL3joMp6dBrpFSISrDm%2B5LQeIF58Y1FJUQDjKWb%2FGT7M7XsTYSN%2BOBQ5hn%2BRi2eNqwmXZ9SFCEFFSoDEzz0u6eoQSq3Bk4p6pzn3VH9x7bhPqDetzKhCiutCykmsMneN%2BJ8SzDQqR01r8Jw5U04IdV7%2F3b4C0eAN%2FnU3Ev%2B7fUtgpTDH4K%2B%2BBjqkAShJHO1exEBfswynERYCtU%2Bnbru6JR2AW2cFw5BSFPaOBkBpWQwLopQrPiW9tJ8%2F0YnyX2kJO4YaLE8nxpCYNf3S%2F%2FtIQcXSiMCkF4XCBxEFB1aHJZt4GIddrKq%2Fs4IiB%2BLKxN%2BjxwHefcoIFZ6RpBotFrsDgy8RsfCMCZdsUywwsYjz6f9U1jXvVlPOe33kcicKp8bBDnI1X8FhPEEZBThgku6C&X-Amz-Signature=0772ae6a1f80d76edb9d8e5473b09d92dbcbb11f8f184ba18976ab9bf8f334ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAK7BDZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDKgG2s0vd9Pg%2BEehFO3PwjkomnZAaYdfDQNEElVRZ5egIhAI8%2Bzqg7aexfhq6Rhn9z1MfdSUeMuuqqUUH9VFh29TZbKv8DCFgQABoMNjM3NDIzMTgzODA1Igwf%2FchGQKX2q0%2BacGYq3AMttu3OZGEjwkHeEN5Fvjrz%2BP6tnFWKZtw4%2BUqxHQsI9fEsJvtcTd6W%2F1mhcfo3Ps%2BDirnZYusgb%2FB3SMK0ClOugOu4EsvTR15CsZy9R11hbIrwdow7OaIoTQQvBN%2FFqSraNXDqyEyMDXnJaw9q5RVl%2Bi3GdoYtITOwuqnWw3nPgiIKEgKxU9okacfhSRAxfJbkCC8ytAhez%2FvqbF7sX307Z2ZVd4iI%2FDHheJBl9iO4j0u4gm3oMdb0ioQ0mkhGCDBFV0aK%2F%2BH4BVdofz7LkJescE6KW1fM5UX3MIFjf3H5lLzOoqHO9kOnOLKpO1676kALmdQ2ohaO4O%2BZpBTMpgCwlZLGFTL1k8cOJ59ujDboNhZi8aHerBtHVC9nXt3esG02ECDr6sK6qBKqUoB47%2B8InGdXiM24k9YK8EH9vlr5T8MmxLmV7AnP%2BIzHGQibaIJrwYUQa3n8mWIngL3joMp6dBrpFSISrDm%2B5LQeIF58Y1FJUQDjKWb%2FGT7M7XsTYSN%2BOBQ5hn%2BRi2eNqwmXZ9SFCEFFSoDEzz0u6eoQSq3Bk4p6pzn3VH9x7bhPqDetzKhCiutCykmsMneN%2BJ8SzDQqR01r8Jw5U04IdV7%2F3b4C0eAN%2FnU3Ev%2B7fUtgpTDH4K%2B%2BBjqkAShJHO1exEBfswynERYCtU%2Bnbru6JR2AW2cFw5BSFPaOBkBpWQwLopQrPiW9tJ8%2F0YnyX2kJO4YaLE8nxpCYNf3S%2F%2FtIQcXSiMCkF4XCBxEFB1aHJZt4GIddrKq%2Fs4IiB%2BLKxN%2BjxwHefcoIFZ6RpBotFrsDgy8RsfCMCZdsUywwsYjz6f9U1jXvVlPOe33kcicKp8bBDnI1X8FhPEEZBThgku6C&X-Amz-Signature=73c0f1b1d61f73d4147aea265b28ad6da5ba6155e2b0eaf904d6d33446c57a7c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAK7BDZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDKgG2s0vd9Pg%2BEehFO3PwjkomnZAaYdfDQNEElVRZ5egIhAI8%2Bzqg7aexfhq6Rhn9z1MfdSUeMuuqqUUH9VFh29TZbKv8DCFgQABoMNjM3NDIzMTgzODA1Igwf%2FchGQKX2q0%2BacGYq3AMttu3OZGEjwkHeEN5Fvjrz%2BP6tnFWKZtw4%2BUqxHQsI9fEsJvtcTd6W%2F1mhcfo3Ps%2BDirnZYusgb%2FB3SMK0ClOugOu4EsvTR15CsZy9R11hbIrwdow7OaIoTQQvBN%2FFqSraNXDqyEyMDXnJaw9q5RVl%2Bi3GdoYtITOwuqnWw3nPgiIKEgKxU9okacfhSRAxfJbkCC8ytAhez%2FvqbF7sX307Z2ZVd4iI%2FDHheJBl9iO4j0u4gm3oMdb0ioQ0mkhGCDBFV0aK%2F%2BH4BVdofz7LkJescE6KW1fM5UX3MIFjf3H5lLzOoqHO9kOnOLKpO1676kALmdQ2ohaO4O%2BZpBTMpgCwlZLGFTL1k8cOJ59ujDboNhZi8aHerBtHVC9nXt3esG02ECDr6sK6qBKqUoB47%2B8InGdXiM24k9YK8EH9vlr5T8MmxLmV7AnP%2BIzHGQibaIJrwYUQa3n8mWIngL3joMp6dBrpFSISrDm%2B5LQeIF58Y1FJUQDjKWb%2FGT7M7XsTYSN%2BOBQ5hn%2BRi2eNqwmXZ9SFCEFFSoDEzz0u6eoQSq3Bk4p6pzn3VH9x7bhPqDetzKhCiutCykmsMneN%2BJ8SzDQqR01r8Jw5U04IdV7%2F3b4C0eAN%2FnU3Ev%2B7fUtgpTDH4K%2B%2BBjqkAShJHO1exEBfswynERYCtU%2Bnbru6JR2AW2cFw5BSFPaOBkBpWQwLopQrPiW9tJ8%2F0YnyX2kJO4YaLE8nxpCYNf3S%2F%2FtIQcXSiMCkF4XCBxEFB1aHJZt4GIddrKq%2Fs4IiB%2BLKxN%2BjxwHefcoIFZ6RpBotFrsDgy8RsfCMCZdsUywwsYjz6f9U1jXvVlPOe33kcicKp8bBDnI1X8FhPEEZBThgku6C&X-Amz-Signature=fbf0a375c8823d76ded4c9163e677152cad8693313e726771ed23175ec089386&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAK7BDZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDKgG2s0vd9Pg%2BEehFO3PwjkomnZAaYdfDQNEElVRZ5egIhAI8%2Bzqg7aexfhq6Rhn9z1MfdSUeMuuqqUUH9VFh29TZbKv8DCFgQABoMNjM3NDIzMTgzODA1Igwf%2FchGQKX2q0%2BacGYq3AMttu3OZGEjwkHeEN5Fvjrz%2BP6tnFWKZtw4%2BUqxHQsI9fEsJvtcTd6W%2F1mhcfo3Ps%2BDirnZYusgb%2FB3SMK0ClOugOu4EsvTR15CsZy9R11hbIrwdow7OaIoTQQvBN%2FFqSraNXDqyEyMDXnJaw9q5RVl%2Bi3GdoYtITOwuqnWw3nPgiIKEgKxU9okacfhSRAxfJbkCC8ytAhez%2FvqbF7sX307Z2ZVd4iI%2FDHheJBl9iO4j0u4gm3oMdb0ioQ0mkhGCDBFV0aK%2F%2BH4BVdofz7LkJescE6KW1fM5UX3MIFjf3H5lLzOoqHO9kOnOLKpO1676kALmdQ2ohaO4O%2BZpBTMpgCwlZLGFTL1k8cOJ59ujDboNhZi8aHerBtHVC9nXt3esG02ECDr6sK6qBKqUoB47%2B8InGdXiM24k9YK8EH9vlr5T8MmxLmV7AnP%2BIzHGQibaIJrwYUQa3n8mWIngL3joMp6dBrpFSISrDm%2B5LQeIF58Y1FJUQDjKWb%2FGT7M7XsTYSN%2BOBQ5hn%2BRi2eNqwmXZ9SFCEFFSoDEzz0u6eoQSq3Bk4p6pzn3VH9x7bhPqDetzKhCiutCykmsMneN%2BJ8SzDQqR01r8Jw5U04IdV7%2F3b4C0eAN%2FnU3Ev%2B7fUtgpTDH4K%2B%2BBjqkAShJHO1exEBfswynERYCtU%2Bnbru6JR2AW2cFw5BSFPaOBkBpWQwLopQrPiW9tJ8%2F0YnyX2kJO4YaLE8nxpCYNf3S%2F%2FtIQcXSiMCkF4XCBxEFB1aHJZt4GIddrKq%2Fs4IiB%2BLKxN%2BjxwHefcoIFZ6RpBotFrsDgy8RsfCMCZdsUywwsYjz6f9U1jXvVlPOe33kcicKp8bBDnI1X8FhPEEZBThgku6C&X-Amz-Signature=ab80a7978288f5441a6bc69511d57fb08226648f15d0fff2332657c070c53446&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAK7BDZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDKgG2s0vd9Pg%2BEehFO3PwjkomnZAaYdfDQNEElVRZ5egIhAI8%2Bzqg7aexfhq6Rhn9z1MfdSUeMuuqqUUH9VFh29TZbKv8DCFgQABoMNjM3NDIzMTgzODA1Igwf%2FchGQKX2q0%2BacGYq3AMttu3OZGEjwkHeEN5Fvjrz%2BP6tnFWKZtw4%2BUqxHQsI9fEsJvtcTd6W%2F1mhcfo3Ps%2BDirnZYusgb%2FB3SMK0ClOugOu4EsvTR15CsZy9R11hbIrwdow7OaIoTQQvBN%2FFqSraNXDqyEyMDXnJaw9q5RVl%2Bi3GdoYtITOwuqnWw3nPgiIKEgKxU9okacfhSRAxfJbkCC8ytAhez%2FvqbF7sX307Z2ZVd4iI%2FDHheJBl9iO4j0u4gm3oMdb0ioQ0mkhGCDBFV0aK%2F%2BH4BVdofz7LkJescE6KW1fM5UX3MIFjf3H5lLzOoqHO9kOnOLKpO1676kALmdQ2ohaO4O%2BZpBTMpgCwlZLGFTL1k8cOJ59ujDboNhZi8aHerBtHVC9nXt3esG02ECDr6sK6qBKqUoB47%2B8InGdXiM24k9YK8EH9vlr5T8MmxLmV7AnP%2BIzHGQibaIJrwYUQa3n8mWIngL3joMp6dBrpFSISrDm%2B5LQeIF58Y1FJUQDjKWb%2FGT7M7XsTYSN%2BOBQ5hn%2BRi2eNqwmXZ9SFCEFFSoDEzz0u6eoQSq3Bk4p6pzn3VH9x7bhPqDetzKhCiutCykmsMneN%2BJ8SzDQqR01r8Jw5U04IdV7%2F3b4C0eAN%2FnU3Ev%2B7fUtgpTDH4K%2B%2BBjqkAShJHO1exEBfswynERYCtU%2Bnbru6JR2AW2cFw5BSFPaOBkBpWQwLopQrPiW9tJ8%2F0YnyX2kJO4YaLE8nxpCYNf3S%2F%2FtIQcXSiMCkF4XCBxEFB1aHJZt4GIddrKq%2Fs4IiB%2BLKxN%2BjxwHefcoIFZ6RpBotFrsDgy8RsfCMCZdsUywwsYjz6f9U1jXvVlPOe33kcicKp8bBDnI1X8FhPEEZBThgku6C&X-Amz-Signature=8d6bd3f3331c1a4ec9ce3d3eef945cb1d7a452f02edd47f033fae8d9612a7b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
