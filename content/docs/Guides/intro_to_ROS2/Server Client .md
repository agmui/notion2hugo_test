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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TFZ3FDQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb%2F0LLQ4Qh2QRuCmZN1xaHJ8gzzJd8u%2F6NhY4eb5tKHAiBS2mnVksNHFuwSwWCesf1oqiJvRjQ7BujB%2B3EUn7tNuCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzlfoyZw8pJzWAIeOKtwD8lkbzjv7j8WyKJQVr%2FIv%2BJ7fY5o4qwlivK1nkEZttolGRBJxXRgxAtcTBdwdyGB%2BllHfXuGyAaapHpMGuF7DyhAi3k2CB5xjzToCbpJx5Ss%2FdUjJB0bfKKGuqIpzsah9dQl4NAVJKqdAjH8ktSiMP7VHZ%2F7gLVxWPoLbPOUwKh3GfjkZGaROLmDWJTqG1ZLsMP4LO8nRphbymo%2BpYzUe2QMSyBbxnhjrfrayfCUHngC0IY5ox%2B0CVTSzgfelm4B6tlANz%2BXI0xS6FNqDmN5H%2BLmTIFPwSja6J67AwB4uIQFYPzM55nE4vbqUJaDFstZZ1WW%2FK1GyZZkNQyYlO%2BkqcdSY9FVzCJsFFidzKRFmtWtZMWbCHhHA7I%2F4NNSlPAaf5PN%2BBHqK6FEz4nU3KEpg7ejsgQjIlVe40MSL8Q9bgc1rUovYoGbQqCzcZsS%2BTDktvt2ZDIxRAimD4Uiws1X1ZyflfXfqdi7DhUWs6dSj5Gb%2FVoENGgacPEgfC%2BaNE1eZtR%2Fl9Lq7saN4LpNshDnnQY4FVvzKX97HZyf0D9AqaIKTx%2FuV41DcR5jv4roAIJehmj1pYUcxwDUHKdEEZqW%2BQ6GBOwxPp9Zi9f0nmVvwEkHPaqL4kEfhIIT4nDYw7fSwxAY6pgFy61kHDvL3fr4XEFajVvNoNFXAho34rpT2%2BhitM4P94EA3i20RzO%2FS16piXXvQCiqOvdKNl%2Fg5CIaZ0lGadesLvmcuUk8rEZmZ%2BCZ2eP0mpeAwoTU6LZp8ji1mOrtE1g8gY2G8tl2U3jDV0Xoq0e8wIJWzfXEp%2BPjHtGyG%2FxnD%2F7IAe7fDgmWAR5QR07L%2F7BN0BqGErDX6yaVixIS99V0fL%2FIyOFiz&X-Amz-Signature=54d64650d1fb947db32bad634c8c665d9216fd3832640696cee326cf8bf3220c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TFZ3FDQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb%2F0LLQ4Qh2QRuCmZN1xaHJ8gzzJd8u%2F6NhY4eb5tKHAiBS2mnVksNHFuwSwWCesf1oqiJvRjQ7BujB%2B3EUn7tNuCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzlfoyZw8pJzWAIeOKtwD8lkbzjv7j8WyKJQVr%2FIv%2BJ7fY5o4qwlivK1nkEZttolGRBJxXRgxAtcTBdwdyGB%2BllHfXuGyAaapHpMGuF7DyhAi3k2CB5xjzToCbpJx5Ss%2FdUjJB0bfKKGuqIpzsah9dQl4NAVJKqdAjH8ktSiMP7VHZ%2F7gLVxWPoLbPOUwKh3GfjkZGaROLmDWJTqG1ZLsMP4LO8nRphbymo%2BpYzUe2QMSyBbxnhjrfrayfCUHngC0IY5ox%2B0CVTSzgfelm4B6tlANz%2BXI0xS6FNqDmN5H%2BLmTIFPwSja6J67AwB4uIQFYPzM55nE4vbqUJaDFstZZ1WW%2FK1GyZZkNQyYlO%2BkqcdSY9FVzCJsFFidzKRFmtWtZMWbCHhHA7I%2F4NNSlPAaf5PN%2BBHqK6FEz4nU3KEpg7ejsgQjIlVe40MSL8Q9bgc1rUovYoGbQqCzcZsS%2BTDktvt2ZDIxRAimD4Uiws1X1ZyflfXfqdi7DhUWs6dSj5Gb%2FVoENGgacPEgfC%2BaNE1eZtR%2Fl9Lq7saN4LpNshDnnQY4FVvzKX97HZyf0D9AqaIKTx%2FuV41DcR5jv4roAIJehmj1pYUcxwDUHKdEEZqW%2BQ6GBOwxPp9Zi9f0nmVvwEkHPaqL4kEfhIIT4nDYw7fSwxAY6pgFy61kHDvL3fr4XEFajVvNoNFXAho34rpT2%2BhitM4P94EA3i20RzO%2FS16piXXvQCiqOvdKNl%2Fg5CIaZ0lGadesLvmcuUk8rEZmZ%2BCZ2eP0mpeAwoTU6LZp8ji1mOrtE1g8gY2G8tl2U3jDV0Xoq0e8wIJWzfXEp%2BPjHtGyG%2FxnD%2F7IAe7fDgmWAR5QR07L%2F7BN0BqGErDX6yaVixIS99V0fL%2FIyOFiz&X-Amz-Signature=f375a655c683fbfa1497e668a6e8e8c53d9b3d54421ca49360cf5e159e8554f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TFZ3FDQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb%2F0LLQ4Qh2QRuCmZN1xaHJ8gzzJd8u%2F6NhY4eb5tKHAiBS2mnVksNHFuwSwWCesf1oqiJvRjQ7BujB%2B3EUn7tNuCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzlfoyZw8pJzWAIeOKtwD8lkbzjv7j8WyKJQVr%2FIv%2BJ7fY5o4qwlivK1nkEZttolGRBJxXRgxAtcTBdwdyGB%2BllHfXuGyAaapHpMGuF7DyhAi3k2CB5xjzToCbpJx5Ss%2FdUjJB0bfKKGuqIpzsah9dQl4NAVJKqdAjH8ktSiMP7VHZ%2F7gLVxWPoLbPOUwKh3GfjkZGaROLmDWJTqG1ZLsMP4LO8nRphbymo%2BpYzUe2QMSyBbxnhjrfrayfCUHngC0IY5ox%2B0CVTSzgfelm4B6tlANz%2BXI0xS6FNqDmN5H%2BLmTIFPwSja6J67AwB4uIQFYPzM55nE4vbqUJaDFstZZ1WW%2FK1GyZZkNQyYlO%2BkqcdSY9FVzCJsFFidzKRFmtWtZMWbCHhHA7I%2F4NNSlPAaf5PN%2BBHqK6FEz4nU3KEpg7ejsgQjIlVe40MSL8Q9bgc1rUovYoGbQqCzcZsS%2BTDktvt2ZDIxRAimD4Uiws1X1ZyflfXfqdi7DhUWs6dSj5Gb%2FVoENGgacPEgfC%2BaNE1eZtR%2Fl9Lq7saN4LpNshDnnQY4FVvzKX97HZyf0D9AqaIKTx%2FuV41DcR5jv4roAIJehmj1pYUcxwDUHKdEEZqW%2BQ6GBOwxPp9Zi9f0nmVvwEkHPaqL4kEfhIIT4nDYw7fSwxAY6pgFy61kHDvL3fr4XEFajVvNoNFXAho34rpT2%2BhitM4P94EA3i20RzO%2FS16piXXvQCiqOvdKNl%2Fg5CIaZ0lGadesLvmcuUk8rEZmZ%2BCZ2eP0mpeAwoTU6LZp8ji1mOrtE1g8gY2G8tl2U3jDV0Xoq0e8wIJWzfXEp%2BPjHtGyG%2FxnD%2F7IAe7fDgmWAR5QR07L%2F7BN0BqGErDX6yaVixIS99V0fL%2FIyOFiz&X-Amz-Signature=6fce4e4dcf2588c66fc9c0af08ebc97b8effd1b06bff0c1625f953f0d055ff1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TFZ3FDQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb%2F0LLQ4Qh2QRuCmZN1xaHJ8gzzJd8u%2F6NhY4eb5tKHAiBS2mnVksNHFuwSwWCesf1oqiJvRjQ7BujB%2B3EUn7tNuCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzlfoyZw8pJzWAIeOKtwD8lkbzjv7j8WyKJQVr%2FIv%2BJ7fY5o4qwlivK1nkEZttolGRBJxXRgxAtcTBdwdyGB%2BllHfXuGyAaapHpMGuF7DyhAi3k2CB5xjzToCbpJx5Ss%2FdUjJB0bfKKGuqIpzsah9dQl4NAVJKqdAjH8ktSiMP7VHZ%2F7gLVxWPoLbPOUwKh3GfjkZGaROLmDWJTqG1ZLsMP4LO8nRphbymo%2BpYzUe2QMSyBbxnhjrfrayfCUHngC0IY5ox%2B0CVTSzgfelm4B6tlANz%2BXI0xS6FNqDmN5H%2BLmTIFPwSja6J67AwB4uIQFYPzM55nE4vbqUJaDFstZZ1WW%2FK1GyZZkNQyYlO%2BkqcdSY9FVzCJsFFidzKRFmtWtZMWbCHhHA7I%2F4NNSlPAaf5PN%2BBHqK6FEz4nU3KEpg7ejsgQjIlVe40MSL8Q9bgc1rUovYoGbQqCzcZsS%2BTDktvt2ZDIxRAimD4Uiws1X1ZyflfXfqdi7DhUWs6dSj5Gb%2FVoENGgacPEgfC%2BaNE1eZtR%2Fl9Lq7saN4LpNshDnnQY4FVvzKX97HZyf0D9AqaIKTx%2FuV41DcR5jv4roAIJehmj1pYUcxwDUHKdEEZqW%2BQ6GBOwxPp9Zi9f0nmVvwEkHPaqL4kEfhIIT4nDYw7fSwxAY6pgFy61kHDvL3fr4XEFajVvNoNFXAho34rpT2%2BhitM4P94EA3i20RzO%2FS16piXXvQCiqOvdKNl%2Fg5CIaZ0lGadesLvmcuUk8rEZmZ%2BCZ2eP0mpeAwoTU6LZp8ji1mOrtE1g8gY2G8tl2U3jDV0Xoq0e8wIJWzfXEp%2BPjHtGyG%2FxnD%2F7IAe7fDgmWAR5QR07L%2F7BN0BqGErDX6yaVixIS99V0fL%2FIyOFiz&X-Amz-Signature=3e553d94dbd78ef4461407ecfaa7bc75a94093a3526e720e9d37e48be2fe3a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TFZ3FDQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb%2F0LLQ4Qh2QRuCmZN1xaHJ8gzzJd8u%2F6NhY4eb5tKHAiBS2mnVksNHFuwSwWCesf1oqiJvRjQ7BujB%2B3EUn7tNuCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzlfoyZw8pJzWAIeOKtwD8lkbzjv7j8WyKJQVr%2FIv%2BJ7fY5o4qwlivK1nkEZttolGRBJxXRgxAtcTBdwdyGB%2BllHfXuGyAaapHpMGuF7DyhAi3k2CB5xjzToCbpJx5Ss%2FdUjJB0bfKKGuqIpzsah9dQl4NAVJKqdAjH8ktSiMP7VHZ%2F7gLVxWPoLbPOUwKh3GfjkZGaROLmDWJTqG1ZLsMP4LO8nRphbymo%2BpYzUe2QMSyBbxnhjrfrayfCUHngC0IY5ox%2B0CVTSzgfelm4B6tlANz%2BXI0xS6FNqDmN5H%2BLmTIFPwSja6J67AwB4uIQFYPzM55nE4vbqUJaDFstZZ1WW%2FK1GyZZkNQyYlO%2BkqcdSY9FVzCJsFFidzKRFmtWtZMWbCHhHA7I%2F4NNSlPAaf5PN%2BBHqK6FEz4nU3KEpg7ejsgQjIlVe40MSL8Q9bgc1rUovYoGbQqCzcZsS%2BTDktvt2ZDIxRAimD4Uiws1X1ZyflfXfqdi7DhUWs6dSj5Gb%2FVoENGgacPEgfC%2BaNE1eZtR%2Fl9Lq7saN4LpNshDnnQY4FVvzKX97HZyf0D9AqaIKTx%2FuV41DcR5jv4roAIJehmj1pYUcxwDUHKdEEZqW%2BQ6GBOwxPp9Zi9f0nmVvwEkHPaqL4kEfhIIT4nDYw7fSwxAY6pgFy61kHDvL3fr4XEFajVvNoNFXAho34rpT2%2BhitM4P94EA3i20RzO%2FS16piXXvQCiqOvdKNl%2Fg5CIaZ0lGadesLvmcuUk8rEZmZ%2BCZ2eP0mpeAwoTU6LZp8ji1mOrtE1g8gY2G8tl2U3jDV0Xoq0e8wIJWzfXEp%2BPjHtGyG%2FxnD%2F7IAe7fDgmWAR5QR07L%2F7BN0BqGErDX6yaVixIS99V0fL%2FIyOFiz&X-Amz-Signature=353c71118fbc581e14ea7e0cb9cdadb81185571b9f2f4189b913cebbac1e0ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
