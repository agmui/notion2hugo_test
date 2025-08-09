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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PJEB3Y%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk6zekPCv0EMqdC3YDnDoBennWTS%2FmWEYBFn6RBQLF8AiEA7qw2uR7%2BE4RjhjY5c6kAyWJbcg%2BgPGjdY4vLRjqwALIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZJtd9RD%2FlW6g9lVSrcA%2FO0OnYpDMI0BPTZvMfixNUcwpUNgh73DJdr%2Fzk6lcXrBUMOMbgOX%2BGi008VsWTPBDFWla4DnENOvw4ltbVyoKfhxLNZ3qB5EX%2FcyF3WL3fHpWOIpXxpUYp5mt64zKERweIXnpHTebA6IlQkGtg%2FIaVIxhGhnHMyAc6l3V9pgJCQVSXuQhcINf3K6KGJKtjvOR9lsq4oHwomdBZg%2BRV3jXNu6wYUx1Omj4mMhAhZzTLIHeAWdTuhT6jw6AsA94yDv7gGIf4pkt7fDCZmCeLT6LxA%2F4aqH1rUlxRWn8Lt4Dc%2FdFyRUb1vBt%2Fd6qkYREthLzQwn634ciCW06CjXVRdNAUnnY2xGN9SBtOQyyWD6uJt%2Bu0%2FOgOOiKjCuDH8IYXsrrQ2mDTOR%2BQvg9UIAFiWKwPp%2FcT7QKZBTzqj6VqDHHnXvTgpPwazpQE%2F9T6DVKbIhxuhdx0ZTZFZeppP3FobDWCFLdaqZrKTAeZEYo0jvIncMgW%2B0aj1UpoIlD8n3g8wmvlhIDyWv42olm8mSuOxXryFkcDizw8CokPXCpPPACPZt4kyhkz%2FFghCNjB5DgY1c0sI9m%2FXpOwNaOi2PzU2ks9GIkp1YqEQ1qQ%2BeT9t6Oo6jcEz5C2owtEcCgpdML%2BL38QGOqUBn%2BW6Uz%2Fp7IS0NLjWCXOe7ZZg6cZyMsZiIknYjKMtEPgKD4NPjtEjCQEVqKD6TaEXhWeyE8GcKTzo9g2FSeL73PUd%2BDQN3bOjRKSaWvAMp9tqk4Ht134JLt0Rm9ylGt5vNAOnbajBIJw6bfkFzZ39%2FKhZ%2Bqt%2F%2Bsevlo%2B0ffXICa9cQHAC7eHUREdlGlzARZyc3av929%2B7tvacfZxnCDEmtglM%2Bbh8&X-Amz-Signature=cecb9b733062daab0b94f5d4a327c2334fb5dbc254d405c94508cb8b30f3a76f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PJEB3Y%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk6zekPCv0EMqdC3YDnDoBennWTS%2FmWEYBFn6RBQLF8AiEA7qw2uR7%2BE4RjhjY5c6kAyWJbcg%2BgPGjdY4vLRjqwALIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZJtd9RD%2FlW6g9lVSrcA%2FO0OnYpDMI0BPTZvMfixNUcwpUNgh73DJdr%2Fzk6lcXrBUMOMbgOX%2BGi008VsWTPBDFWla4DnENOvw4ltbVyoKfhxLNZ3qB5EX%2FcyF3WL3fHpWOIpXxpUYp5mt64zKERweIXnpHTebA6IlQkGtg%2FIaVIxhGhnHMyAc6l3V9pgJCQVSXuQhcINf3K6KGJKtjvOR9lsq4oHwomdBZg%2BRV3jXNu6wYUx1Omj4mMhAhZzTLIHeAWdTuhT6jw6AsA94yDv7gGIf4pkt7fDCZmCeLT6LxA%2F4aqH1rUlxRWn8Lt4Dc%2FdFyRUb1vBt%2Fd6qkYREthLzQwn634ciCW06CjXVRdNAUnnY2xGN9SBtOQyyWD6uJt%2Bu0%2FOgOOiKjCuDH8IYXsrrQ2mDTOR%2BQvg9UIAFiWKwPp%2FcT7QKZBTzqj6VqDHHnXvTgpPwazpQE%2F9T6DVKbIhxuhdx0ZTZFZeppP3FobDWCFLdaqZrKTAeZEYo0jvIncMgW%2B0aj1UpoIlD8n3g8wmvlhIDyWv42olm8mSuOxXryFkcDizw8CokPXCpPPACPZt4kyhkz%2FFghCNjB5DgY1c0sI9m%2FXpOwNaOi2PzU2ks9GIkp1YqEQ1qQ%2BeT9t6Oo6jcEz5C2owtEcCgpdML%2BL38QGOqUBn%2BW6Uz%2Fp7IS0NLjWCXOe7ZZg6cZyMsZiIknYjKMtEPgKD4NPjtEjCQEVqKD6TaEXhWeyE8GcKTzo9g2FSeL73PUd%2BDQN3bOjRKSaWvAMp9tqk4Ht134JLt0Rm9ylGt5vNAOnbajBIJw6bfkFzZ39%2FKhZ%2Bqt%2F%2Bsevlo%2B0ffXICa9cQHAC7eHUREdlGlzARZyc3av929%2B7tvacfZxnCDEmtglM%2Bbh8&X-Amz-Signature=26164d317706423e1514dffdbd8c65a104c02c8f82f197430d4133e45ec039f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PJEB3Y%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk6zekPCv0EMqdC3YDnDoBennWTS%2FmWEYBFn6RBQLF8AiEA7qw2uR7%2BE4RjhjY5c6kAyWJbcg%2BgPGjdY4vLRjqwALIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZJtd9RD%2FlW6g9lVSrcA%2FO0OnYpDMI0BPTZvMfixNUcwpUNgh73DJdr%2Fzk6lcXrBUMOMbgOX%2BGi008VsWTPBDFWla4DnENOvw4ltbVyoKfhxLNZ3qB5EX%2FcyF3WL3fHpWOIpXxpUYp5mt64zKERweIXnpHTebA6IlQkGtg%2FIaVIxhGhnHMyAc6l3V9pgJCQVSXuQhcINf3K6KGJKtjvOR9lsq4oHwomdBZg%2BRV3jXNu6wYUx1Omj4mMhAhZzTLIHeAWdTuhT6jw6AsA94yDv7gGIf4pkt7fDCZmCeLT6LxA%2F4aqH1rUlxRWn8Lt4Dc%2FdFyRUb1vBt%2Fd6qkYREthLzQwn634ciCW06CjXVRdNAUnnY2xGN9SBtOQyyWD6uJt%2Bu0%2FOgOOiKjCuDH8IYXsrrQ2mDTOR%2BQvg9UIAFiWKwPp%2FcT7QKZBTzqj6VqDHHnXvTgpPwazpQE%2F9T6DVKbIhxuhdx0ZTZFZeppP3FobDWCFLdaqZrKTAeZEYo0jvIncMgW%2B0aj1UpoIlD8n3g8wmvlhIDyWv42olm8mSuOxXryFkcDizw8CokPXCpPPACPZt4kyhkz%2FFghCNjB5DgY1c0sI9m%2FXpOwNaOi2PzU2ks9GIkp1YqEQ1qQ%2BeT9t6Oo6jcEz5C2owtEcCgpdML%2BL38QGOqUBn%2BW6Uz%2Fp7IS0NLjWCXOe7ZZg6cZyMsZiIknYjKMtEPgKD4NPjtEjCQEVqKD6TaEXhWeyE8GcKTzo9g2FSeL73PUd%2BDQN3bOjRKSaWvAMp9tqk4Ht134JLt0Rm9ylGt5vNAOnbajBIJw6bfkFzZ39%2FKhZ%2Bqt%2F%2Bsevlo%2B0ffXICa9cQHAC7eHUREdlGlzARZyc3av929%2B7tvacfZxnCDEmtglM%2Bbh8&X-Amz-Signature=ccbfb42fb1b91789f529d8927ba42376ad2c3e14cb144436692ff8eeb705819a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PJEB3Y%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk6zekPCv0EMqdC3YDnDoBennWTS%2FmWEYBFn6RBQLF8AiEA7qw2uR7%2BE4RjhjY5c6kAyWJbcg%2BgPGjdY4vLRjqwALIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZJtd9RD%2FlW6g9lVSrcA%2FO0OnYpDMI0BPTZvMfixNUcwpUNgh73DJdr%2Fzk6lcXrBUMOMbgOX%2BGi008VsWTPBDFWla4DnENOvw4ltbVyoKfhxLNZ3qB5EX%2FcyF3WL3fHpWOIpXxpUYp5mt64zKERweIXnpHTebA6IlQkGtg%2FIaVIxhGhnHMyAc6l3V9pgJCQVSXuQhcINf3K6KGJKtjvOR9lsq4oHwomdBZg%2BRV3jXNu6wYUx1Omj4mMhAhZzTLIHeAWdTuhT6jw6AsA94yDv7gGIf4pkt7fDCZmCeLT6LxA%2F4aqH1rUlxRWn8Lt4Dc%2FdFyRUb1vBt%2Fd6qkYREthLzQwn634ciCW06CjXVRdNAUnnY2xGN9SBtOQyyWD6uJt%2Bu0%2FOgOOiKjCuDH8IYXsrrQ2mDTOR%2BQvg9UIAFiWKwPp%2FcT7QKZBTzqj6VqDHHnXvTgpPwazpQE%2F9T6DVKbIhxuhdx0ZTZFZeppP3FobDWCFLdaqZrKTAeZEYo0jvIncMgW%2B0aj1UpoIlD8n3g8wmvlhIDyWv42olm8mSuOxXryFkcDizw8CokPXCpPPACPZt4kyhkz%2FFghCNjB5DgY1c0sI9m%2FXpOwNaOi2PzU2ks9GIkp1YqEQ1qQ%2BeT9t6Oo6jcEz5C2owtEcCgpdML%2BL38QGOqUBn%2BW6Uz%2Fp7IS0NLjWCXOe7ZZg6cZyMsZiIknYjKMtEPgKD4NPjtEjCQEVqKD6TaEXhWeyE8GcKTzo9g2FSeL73PUd%2BDQN3bOjRKSaWvAMp9tqk4Ht134JLt0Rm9ylGt5vNAOnbajBIJw6bfkFzZ39%2FKhZ%2Bqt%2F%2Bsevlo%2B0ffXICa9cQHAC7eHUREdlGlzARZyc3av929%2B7tvacfZxnCDEmtglM%2Bbh8&X-Amz-Signature=f398d504fbe15099ea232335c0e8188d42341c781788147643d018181551d9a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PJEB3Y%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk6zekPCv0EMqdC3YDnDoBennWTS%2FmWEYBFn6RBQLF8AiEA7qw2uR7%2BE4RjhjY5c6kAyWJbcg%2BgPGjdY4vLRjqwALIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZJtd9RD%2FlW6g9lVSrcA%2FO0OnYpDMI0BPTZvMfixNUcwpUNgh73DJdr%2Fzk6lcXrBUMOMbgOX%2BGi008VsWTPBDFWla4DnENOvw4ltbVyoKfhxLNZ3qB5EX%2FcyF3WL3fHpWOIpXxpUYp5mt64zKERweIXnpHTebA6IlQkGtg%2FIaVIxhGhnHMyAc6l3V9pgJCQVSXuQhcINf3K6KGJKtjvOR9lsq4oHwomdBZg%2BRV3jXNu6wYUx1Omj4mMhAhZzTLIHeAWdTuhT6jw6AsA94yDv7gGIf4pkt7fDCZmCeLT6LxA%2F4aqH1rUlxRWn8Lt4Dc%2FdFyRUb1vBt%2Fd6qkYREthLzQwn634ciCW06CjXVRdNAUnnY2xGN9SBtOQyyWD6uJt%2Bu0%2FOgOOiKjCuDH8IYXsrrQ2mDTOR%2BQvg9UIAFiWKwPp%2FcT7QKZBTzqj6VqDHHnXvTgpPwazpQE%2F9T6DVKbIhxuhdx0ZTZFZeppP3FobDWCFLdaqZrKTAeZEYo0jvIncMgW%2B0aj1UpoIlD8n3g8wmvlhIDyWv42olm8mSuOxXryFkcDizw8CokPXCpPPACPZt4kyhkz%2FFghCNjB5DgY1c0sI9m%2FXpOwNaOi2PzU2ks9GIkp1YqEQ1qQ%2BeT9t6Oo6jcEz5C2owtEcCgpdML%2BL38QGOqUBn%2BW6Uz%2Fp7IS0NLjWCXOe7ZZg6cZyMsZiIknYjKMtEPgKD4NPjtEjCQEVqKD6TaEXhWeyE8GcKTzo9g2FSeL73PUd%2BDQN3bOjRKSaWvAMp9tqk4Ht134JLt0Rm9ylGt5vNAOnbajBIJw6bfkFzZ39%2FKhZ%2Bqt%2F%2Bsevlo%2B0ffXICa9cQHAC7eHUREdlGlzARZyc3av929%2B7tvacfZxnCDEmtglM%2Bbh8&X-Amz-Signature=c9fa75a5da1fbd0a1e9022734c2662b220e78419698c0661099b8b3e76750dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
