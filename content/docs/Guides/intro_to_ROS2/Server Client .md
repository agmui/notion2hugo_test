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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAKSLCP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJnLjOr6prAFKtU0qM615EmHgmNyK2qkKX2WZ%2FojV01AiBDJNA8SKQRDuSj%2B2DKOec%2FuUbb0PBf8QUVUbRaXiMgDiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVWPC%2FVNq7YQzoHE3KtwDmujTjDViWO42JS7vbxr5savu2pD4EoxiIUd6zAkWKocHA3hjxtuNo9rRVUKkZu2un%2FJ6b%2FqJx4rh6VKayE8wcj7N3Qork9wuE1uTIYUIVJM4kXD8ZYhpe7JnGzEcTRTLvJ%2BiIWAc%2BFso%2B2VaZWyGd5rSjwJY4JrTM3XbqpFzzxFeNZ5XdtdBbmpwm8Vf4ARu7FiD3Ln6%2BI1dzGGb9Q63AuYRmEiEXudcpLvQf3Mve1YNzUZPnRgwU2aUoXIQkKXfdjq7je9fsd5nd2vu0WO2vto2tKMiTWt7pEVXdQgTaCj3QaT4B1JixVZVq3GaeukouZDbAcHTeyj9fxHK5ghjSKav7wRaRZcIEl%2FBsEmvXQREEaZZ93HpPaygFWtc%2Bzt4v4A6bfuRI3X7R8Al228WqpYE0asRvuJA5lB0XZAdlX9Aro9Sg7YOp3WQ2oohb%2Fzg2bUeMOFiZBOSj72Uo%2FZacTst6Nt%2BHjKqezmahGpxO7m0ba6Rgl5fZR0GzOaAtxhGLLgiUacBg8XnZV%2B7n12SPQEyMieG6R9TW%2FNRjI4vRojQp4B36MZ32Ox3mUP4lrZu0FCGdKhmZVtlU1N%2FvtbZ7Ks4uzXMdRP79B5oZt1Yd5acTKUxH8nuiWPZ6wIw7qK0wQY6pgHgCl4QvkiyBPmTx937PEJ7DPxCvJJqffEQARAWxwcAB1GVK%2Fc6C%2F5ZHBKt1ozHlBG7g2uvyErg7FJB2HpcRjOPMLh1xTaAGcDvLsOtNLPHqPcmS07%2FrkyU4wPvgUUYwzhrh9OuFmAWdvuMEZKVxTw%2FztOyMjanxQf4I0Uw074tHRol4aUDpAsgVuMKb%2FzDmgmHJOibRTCLyUdfdZcNO7QqeNp7RWhK&X-Amz-Signature=d4a458eeb60f34a2914ad2fde6e84b5b9ae008dc4af18770b2a6caa257acde4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAKSLCP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJnLjOr6prAFKtU0qM615EmHgmNyK2qkKX2WZ%2FojV01AiBDJNA8SKQRDuSj%2B2DKOec%2FuUbb0PBf8QUVUbRaXiMgDiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVWPC%2FVNq7YQzoHE3KtwDmujTjDViWO42JS7vbxr5savu2pD4EoxiIUd6zAkWKocHA3hjxtuNo9rRVUKkZu2un%2FJ6b%2FqJx4rh6VKayE8wcj7N3Qork9wuE1uTIYUIVJM4kXD8ZYhpe7JnGzEcTRTLvJ%2BiIWAc%2BFso%2B2VaZWyGd5rSjwJY4JrTM3XbqpFzzxFeNZ5XdtdBbmpwm8Vf4ARu7FiD3Ln6%2BI1dzGGb9Q63AuYRmEiEXudcpLvQf3Mve1YNzUZPnRgwU2aUoXIQkKXfdjq7je9fsd5nd2vu0WO2vto2tKMiTWt7pEVXdQgTaCj3QaT4B1JixVZVq3GaeukouZDbAcHTeyj9fxHK5ghjSKav7wRaRZcIEl%2FBsEmvXQREEaZZ93HpPaygFWtc%2Bzt4v4A6bfuRI3X7R8Al228WqpYE0asRvuJA5lB0XZAdlX9Aro9Sg7YOp3WQ2oohb%2Fzg2bUeMOFiZBOSj72Uo%2FZacTst6Nt%2BHjKqezmahGpxO7m0ba6Rgl5fZR0GzOaAtxhGLLgiUacBg8XnZV%2B7n12SPQEyMieG6R9TW%2FNRjI4vRojQp4B36MZ32Ox3mUP4lrZu0FCGdKhmZVtlU1N%2FvtbZ7Ks4uzXMdRP79B5oZt1Yd5acTKUxH8nuiWPZ6wIw7qK0wQY6pgHgCl4QvkiyBPmTx937PEJ7DPxCvJJqffEQARAWxwcAB1GVK%2Fc6C%2F5ZHBKt1ozHlBG7g2uvyErg7FJB2HpcRjOPMLh1xTaAGcDvLsOtNLPHqPcmS07%2FrkyU4wPvgUUYwzhrh9OuFmAWdvuMEZKVxTw%2FztOyMjanxQf4I0Uw074tHRol4aUDpAsgVuMKb%2FzDmgmHJOibRTCLyUdfdZcNO7QqeNp7RWhK&X-Amz-Signature=3ed0de831734d87d96738ea38c549fbf6af1ba29bb96283988a032a7b7d60583&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAKSLCP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJnLjOr6prAFKtU0qM615EmHgmNyK2qkKX2WZ%2FojV01AiBDJNA8SKQRDuSj%2B2DKOec%2FuUbb0PBf8QUVUbRaXiMgDiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVWPC%2FVNq7YQzoHE3KtwDmujTjDViWO42JS7vbxr5savu2pD4EoxiIUd6zAkWKocHA3hjxtuNo9rRVUKkZu2un%2FJ6b%2FqJx4rh6VKayE8wcj7N3Qork9wuE1uTIYUIVJM4kXD8ZYhpe7JnGzEcTRTLvJ%2BiIWAc%2BFso%2B2VaZWyGd5rSjwJY4JrTM3XbqpFzzxFeNZ5XdtdBbmpwm8Vf4ARu7FiD3Ln6%2BI1dzGGb9Q63AuYRmEiEXudcpLvQf3Mve1YNzUZPnRgwU2aUoXIQkKXfdjq7je9fsd5nd2vu0WO2vto2tKMiTWt7pEVXdQgTaCj3QaT4B1JixVZVq3GaeukouZDbAcHTeyj9fxHK5ghjSKav7wRaRZcIEl%2FBsEmvXQREEaZZ93HpPaygFWtc%2Bzt4v4A6bfuRI3X7R8Al228WqpYE0asRvuJA5lB0XZAdlX9Aro9Sg7YOp3WQ2oohb%2Fzg2bUeMOFiZBOSj72Uo%2FZacTst6Nt%2BHjKqezmahGpxO7m0ba6Rgl5fZR0GzOaAtxhGLLgiUacBg8XnZV%2B7n12SPQEyMieG6R9TW%2FNRjI4vRojQp4B36MZ32Ox3mUP4lrZu0FCGdKhmZVtlU1N%2FvtbZ7Ks4uzXMdRP79B5oZt1Yd5acTKUxH8nuiWPZ6wIw7qK0wQY6pgHgCl4QvkiyBPmTx937PEJ7DPxCvJJqffEQARAWxwcAB1GVK%2Fc6C%2F5ZHBKt1ozHlBG7g2uvyErg7FJB2HpcRjOPMLh1xTaAGcDvLsOtNLPHqPcmS07%2FrkyU4wPvgUUYwzhrh9OuFmAWdvuMEZKVxTw%2FztOyMjanxQf4I0Uw074tHRol4aUDpAsgVuMKb%2FzDmgmHJOibRTCLyUdfdZcNO7QqeNp7RWhK&X-Amz-Signature=d4b08c1ca4fd145af2216d078847be9ca559546c4c5a119b86f18afbc5088249&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAKSLCP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJnLjOr6prAFKtU0qM615EmHgmNyK2qkKX2WZ%2FojV01AiBDJNA8SKQRDuSj%2B2DKOec%2FuUbb0PBf8QUVUbRaXiMgDiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVWPC%2FVNq7YQzoHE3KtwDmujTjDViWO42JS7vbxr5savu2pD4EoxiIUd6zAkWKocHA3hjxtuNo9rRVUKkZu2un%2FJ6b%2FqJx4rh6VKayE8wcj7N3Qork9wuE1uTIYUIVJM4kXD8ZYhpe7JnGzEcTRTLvJ%2BiIWAc%2BFso%2B2VaZWyGd5rSjwJY4JrTM3XbqpFzzxFeNZ5XdtdBbmpwm8Vf4ARu7FiD3Ln6%2BI1dzGGb9Q63AuYRmEiEXudcpLvQf3Mve1YNzUZPnRgwU2aUoXIQkKXfdjq7je9fsd5nd2vu0WO2vto2tKMiTWt7pEVXdQgTaCj3QaT4B1JixVZVq3GaeukouZDbAcHTeyj9fxHK5ghjSKav7wRaRZcIEl%2FBsEmvXQREEaZZ93HpPaygFWtc%2Bzt4v4A6bfuRI3X7R8Al228WqpYE0asRvuJA5lB0XZAdlX9Aro9Sg7YOp3WQ2oohb%2Fzg2bUeMOFiZBOSj72Uo%2FZacTst6Nt%2BHjKqezmahGpxO7m0ba6Rgl5fZR0GzOaAtxhGLLgiUacBg8XnZV%2B7n12SPQEyMieG6R9TW%2FNRjI4vRojQp4B36MZ32Ox3mUP4lrZu0FCGdKhmZVtlU1N%2FvtbZ7Ks4uzXMdRP79B5oZt1Yd5acTKUxH8nuiWPZ6wIw7qK0wQY6pgHgCl4QvkiyBPmTx937PEJ7DPxCvJJqffEQARAWxwcAB1GVK%2Fc6C%2F5ZHBKt1ozHlBG7g2uvyErg7FJB2HpcRjOPMLh1xTaAGcDvLsOtNLPHqPcmS07%2FrkyU4wPvgUUYwzhrh9OuFmAWdvuMEZKVxTw%2FztOyMjanxQf4I0Uw074tHRol4aUDpAsgVuMKb%2FzDmgmHJOibRTCLyUdfdZcNO7QqeNp7RWhK&X-Amz-Signature=b35948207b0bb75bcc8d56ce350a54160e4456f6c5fbbbe8b0b9541bb4f1ef14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAKSLCP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJnLjOr6prAFKtU0qM615EmHgmNyK2qkKX2WZ%2FojV01AiBDJNA8SKQRDuSj%2B2DKOec%2FuUbb0PBf8QUVUbRaXiMgDiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVWPC%2FVNq7YQzoHE3KtwDmujTjDViWO42JS7vbxr5savu2pD4EoxiIUd6zAkWKocHA3hjxtuNo9rRVUKkZu2un%2FJ6b%2FqJx4rh6VKayE8wcj7N3Qork9wuE1uTIYUIVJM4kXD8ZYhpe7JnGzEcTRTLvJ%2BiIWAc%2BFso%2B2VaZWyGd5rSjwJY4JrTM3XbqpFzzxFeNZ5XdtdBbmpwm8Vf4ARu7FiD3Ln6%2BI1dzGGb9Q63AuYRmEiEXudcpLvQf3Mve1YNzUZPnRgwU2aUoXIQkKXfdjq7je9fsd5nd2vu0WO2vto2tKMiTWt7pEVXdQgTaCj3QaT4B1JixVZVq3GaeukouZDbAcHTeyj9fxHK5ghjSKav7wRaRZcIEl%2FBsEmvXQREEaZZ93HpPaygFWtc%2Bzt4v4A6bfuRI3X7R8Al228WqpYE0asRvuJA5lB0XZAdlX9Aro9Sg7YOp3WQ2oohb%2Fzg2bUeMOFiZBOSj72Uo%2FZacTst6Nt%2BHjKqezmahGpxO7m0ba6Rgl5fZR0GzOaAtxhGLLgiUacBg8XnZV%2B7n12SPQEyMieG6R9TW%2FNRjI4vRojQp4B36MZ32Ox3mUP4lrZu0FCGdKhmZVtlU1N%2FvtbZ7Ks4uzXMdRP79B5oZt1Yd5acTKUxH8nuiWPZ6wIw7qK0wQY6pgHgCl4QvkiyBPmTx937PEJ7DPxCvJJqffEQARAWxwcAB1GVK%2Fc6C%2F5ZHBKt1ozHlBG7g2uvyErg7FJB2HpcRjOPMLh1xTaAGcDvLsOtNLPHqPcmS07%2FrkyU4wPvgUUYwzhrh9OuFmAWdvuMEZKVxTw%2FztOyMjanxQf4I0Uw074tHRol4aUDpAsgVuMKb%2FzDmgmHJOibRTCLyUdfdZcNO7QqeNp7RWhK&X-Amz-Signature=8bc41ee8da55609a3e6cb1e57b45f73e16ee6f230914266e5b23ed25f10a4ff9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
