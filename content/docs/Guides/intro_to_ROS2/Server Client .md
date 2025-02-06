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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652WWK44K%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCOZn7Dy1Mm86sNkYucPjIRSO%2BP7Oplgun0G8JkPAxOQgIhAImkM%2FlF5NwGoMKPnCSGWwkeFb4bTXTU4BqyOSXY7k2SKv8DCGgQABoMNjM3NDIzMTgzODA1Igz0f9eB4CsTKlyvuDwq3AMu3f9ka3%2BBtES5HLB36kKZgtwiI7JDKF%2BER%2FANGtFlp40hvE3i0QQuWpGXIxNdQTOrKlQqoag%2F7eux0oZ%2B5JIGIRLo8ZcQ4jU04JS2LB2gaJgxYB5fXPSN1%2FCTIx%2FnXhRvbrs%2B5%2F1ztn%2F%2BvWE%2BOU8ssR1An2qDq55YeCTOKUvQfDCSSztR7brq0GDmv3fEWXGqUr6Jcvy3uhTa3mAyh7RyeNhByfVWqmqObzNTPmEX%2F%2BF55UdHVhW4t0kZKyQ4%2BeieGZePQxVczvUAgDgDqVvuf7P5%2FBqjsYJbw%2BZowC15GMu6Fs1R1soRdYjIDrNzwhaKFk%2BjcS5yVLL1JsXKeRzFNO31KuXVtpudXcpPhDSELL8CEO8ZHXlgfevaMsHpOkjYrZDGnM9tbHIJM6MciZSLAfsKf%2F3rcwOa02p7Slg1NeVUjH9r545PnVMmmOnO%2FqtZGhQq7f1YjLKwEZ3qhkXK1lE6eCdwbueuMLg7z%2FWxYy0cZgHccneVwyCggzoZE4nfl6Yju5VzvGfzmbZ8PbzjGHtQkVdbETSPIQ5lBveMkdKNK48Di8Tyb3bgKMwkGpRLdyMxi6fvkHxHDB7Yru3Ot80fQGEbt6hJapujG0uiGV5DIM%2FEmBHcKsy%2BQTC0%2FpS9BjqkAZ4OL%2BgxCAlY7I1zdHIO3vA0VPnEvC279L2ADZ1%2FtJ%2FD9AxSPHD6bBeAiZZDIL8llzMjiJve4As1SK0XRtMCqL8zQHKBaZlhTQC%2BAbtqfp3eQ9xDqVFQeMP0us1sl8qOxuD1AsKlUgXWe5SSpH6Nc%2FTxkjPe8rlVFWVktgo59nxpQCDmhQidb4lRhN%2F0ECPYvhxDPWVIKkVimudZjqYkpQ1%2FuvUc&X-Amz-Signature=08363daddf9b801f86030953f60bf72ffb4387b7455aee5598d7b41bf422204d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652WWK44K%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCOZn7Dy1Mm86sNkYucPjIRSO%2BP7Oplgun0G8JkPAxOQgIhAImkM%2FlF5NwGoMKPnCSGWwkeFb4bTXTU4BqyOSXY7k2SKv8DCGgQABoMNjM3NDIzMTgzODA1Igz0f9eB4CsTKlyvuDwq3AMu3f9ka3%2BBtES5HLB36kKZgtwiI7JDKF%2BER%2FANGtFlp40hvE3i0QQuWpGXIxNdQTOrKlQqoag%2F7eux0oZ%2B5JIGIRLo8ZcQ4jU04JS2LB2gaJgxYB5fXPSN1%2FCTIx%2FnXhRvbrs%2B5%2F1ztn%2F%2BvWE%2BOU8ssR1An2qDq55YeCTOKUvQfDCSSztR7brq0GDmv3fEWXGqUr6Jcvy3uhTa3mAyh7RyeNhByfVWqmqObzNTPmEX%2F%2BF55UdHVhW4t0kZKyQ4%2BeieGZePQxVczvUAgDgDqVvuf7P5%2FBqjsYJbw%2BZowC15GMu6Fs1R1soRdYjIDrNzwhaKFk%2BjcS5yVLL1JsXKeRzFNO31KuXVtpudXcpPhDSELL8CEO8ZHXlgfevaMsHpOkjYrZDGnM9tbHIJM6MciZSLAfsKf%2F3rcwOa02p7Slg1NeVUjH9r545PnVMmmOnO%2FqtZGhQq7f1YjLKwEZ3qhkXK1lE6eCdwbueuMLg7z%2FWxYy0cZgHccneVwyCggzoZE4nfl6Yju5VzvGfzmbZ8PbzjGHtQkVdbETSPIQ5lBveMkdKNK48Di8Tyb3bgKMwkGpRLdyMxi6fvkHxHDB7Yru3Ot80fQGEbt6hJapujG0uiGV5DIM%2FEmBHcKsy%2BQTC0%2FpS9BjqkAZ4OL%2BgxCAlY7I1zdHIO3vA0VPnEvC279L2ADZ1%2FtJ%2FD9AxSPHD6bBeAiZZDIL8llzMjiJve4As1SK0XRtMCqL8zQHKBaZlhTQC%2BAbtqfp3eQ9xDqVFQeMP0us1sl8qOxuD1AsKlUgXWe5SSpH6Nc%2FTxkjPe8rlVFWVktgo59nxpQCDmhQidb4lRhN%2F0ECPYvhxDPWVIKkVimudZjqYkpQ1%2FuvUc&X-Amz-Signature=ea839286305b6c3c97ca572604236b16db388d55e75d3ec3897bccbe87bad4de&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652WWK44K%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCOZn7Dy1Mm86sNkYucPjIRSO%2BP7Oplgun0G8JkPAxOQgIhAImkM%2FlF5NwGoMKPnCSGWwkeFb4bTXTU4BqyOSXY7k2SKv8DCGgQABoMNjM3NDIzMTgzODA1Igz0f9eB4CsTKlyvuDwq3AMu3f9ka3%2BBtES5HLB36kKZgtwiI7JDKF%2BER%2FANGtFlp40hvE3i0QQuWpGXIxNdQTOrKlQqoag%2F7eux0oZ%2B5JIGIRLo8ZcQ4jU04JS2LB2gaJgxYB5fXPSN1%2FCTIx%2FnXhRvbrs%2B5%2F1ztn%2F%2BvWE%2BOU8ssR1An2qDq55YeCTOKUvQfDCSSztR7brq0GDmv3fEWXGqUr6Jcvy3uhTa3mAyh7RyeNhByfVWqmqObzNTPmEX%2F%2BF55UdHVhW4t0kZKyQ4%2BeieGZePQxVczvUAgDgDqVvuf7P5%2FBqjsYJbw%2BZowC15GMu6Fs1R1soRdYjIDrNzwhaKFk%2BjcS5yVLL1JsXKeRzFNO31KuXVtpudXcpPhDSELL8CEO8ZHXlgfevaMsHpOkjYrZDGnM9tbHIJM6MciZSLAfsKf%2F3rcwOa02p7Slg1NeVUjH9r545PnVMmmOnO%2FqtZGhQq7f1YjLKwEZ3qhkXK1lE6eCdwbueuMLg7z%2FWxYy0cZgHccneVwyCggzoZE4nfl6Yju5VzvGfzmbZ8PbzjGHtQkVdbETSPIQ5lBveMkdKNK48Di8Tyb3bgKMwkGpRLdyMxi6fvkHxHDB7Yru3Ot80fQGEbt6hJapujG0uiGV5DIM%2FEmBHcKsy%2BQTC0%2FpS9BjqkAZ4OL%2BgxCAlY7I1zdHIO3vA0VPnEvC279L2ADZ1%2FtJ%2FD9AxSPHD6bBeAiZZDIL8llzMjiJve4As1SK0XRtMCqL8zQHKBaZlhTQC%2BAbtqfp3eQ9xDqVFQeMP0us1sl8qOxuD1AsKlUgXWe5SSpH6Nc%2FTxkjPe8rlVFWVktgo59nxpQCDmhQidb4lRhN%2F0ECPYvhxDPWVIKkVimudZjqYkpQ1%2FuvUc&X-Amz-Signature=0abdd0d4118ea1e09f1b14ace281f8e835c649c58fad5ccec4b1645f372044f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652WWK44K%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCOZn7Dy1Mm86sNkYucPjIRSO%2BP7Oplgun0G8JkPAxOQgIhAImkM%2FlF5NwGoMKPnCSGWwkeFb4bTXTU4BqyOSXY7k2SKv8DCGgQABoMNjM3NDIzMTgzODA1Igz0f9eB4CsTKlyvuDwq3AMu3f9ka3%2BBtES5HLB36kKZgtwiI7JDKF%2BER%2FANGtFlp40hvE3i0QQuWpGXIxNdQTOrKlQqoag%2F7eux0oZ%2B5JIGIRLo8ZcQ4jU04JS2LB2gaJgxYB5fXPSN1%2FCTIx%2FnXhRvbrs%2B5%2F1ztn%2F%2BvWE%2BOU8ssR1An2qDq55YeCTOKUvQfDCSSztR7brq0GDmv3fEWXGqUr6Jcvy3uhTa3mAyh7RyeNhByfVWqmqObzNTPmEX%2F%2BF55UdHVhW4t0kZKyQ4%2BeieGZePQxVczvUAgDgDqVvuf7P5%2FBqjsYJbw%2BZowC15GMu6Fs1R1soRdYjIDrNzwhaKFk%2BjcS5yVLL1JsXKeRzFNO31KuXVtpudXcpPhDSELL8CEO8ZHXlgfevaMsHpOkjYrZDGnM9tbHIJM6MciZSLAfsKf%2F3rcwOa02p7Slg1NeVUjH9r545PnVMmmOnO%2FqtZGhQq7f1YjLKwEZ3qhkXK1lE6eCdwbueuMLg7z%2FWxYy0cZgHccneVwyCggzoZE4nfl6Yju5VzvGfzmbZ8PbzjGHtQkVdbETSPIQ5lBveMkdKNK48Di8Tyb3bgKMwkGpRLdyMxi6fvkHxHDB7Yru3Ot80fQGEbt6hJapujG0uiGV5DIM%2FEmBHcKsy%2BQTC0%2FpS9BjqkAZ4OL%2BgxCAlY7I1zdHIO3vA0VPnEvC279L2ADZ1%2FtJ%2FD9AxSPHD6bBeAiZZDIL8llzMjiJve4As1SK0XRtMCqL8zQHKBaZlhTQC%2BAbtqfp3eQ9xDqVFQeMP0us1sl8qOxuD1AsKlUgXWe5SSpH6Nc%2FTxkjPe8rlVFWVktgo59nxpQCDmhQidb4lRhN%2F0ECPYvhxDPWVIKkVimudZjqYkpQ1%2FuvUc&X-Amz-Signature=75dd5e84b1df915b2bdc420da8993a91524df0507537094dec3f7de3d43b8c7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652WWK44K%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCOZn7Dy1Mm86sNkYucPjIRSO%2BP7Oplgun0G8JkPAxOQgIhAImkM%2FlF5NwGoMKPnCSGWwkeFb4bTXTU4BqyOSXY7k2SKv8DCGgQABoMNjM3NDIzMTgzODA1Igz0f9eB4CsTKlyvuDwq3AMu3f9ka3%2BBtES5HLB36kKZgtwiI7JDKF%2BER%2FANGtFlp40hvE3i0QQuWpGXIxNdQTOrKlQqoag%2F7eux0oZ%2B5JIGIRLo8ZcQ4jU04JS2LB2gaJgxYB5fXPSN1%2FCTIx%2FnXhRvbrs%2B5%2F1ztn%2F%2BvWE%2BOU8ssR1An2qDq55YeCTOKUvQfDCSSztR7brq0GDmv3fEWXGqUr6Jcvy3uhTa3mAyh7RyeNhByfVWqmqObzNTPmEX%2F%2BF55UdHVhW4t0kZKyQ4%2BeieGZePQxVczvUAgDgDqVvuf7P5%2FBqjsYJbw%2BZowC15GMu6Fs1R1soRdYjIDrNzwhaKFk%2BjcS5yVLL1JsXKeRzFNO31KuXVtpudXcpPhDSELL8CEO8ZHXlgfevaMsHpOkjYrZDGnM9tbHIJM6MciZSLAfsKf%2F3rcwOa02p7Slg1NeVUjH9r545PnVMmmOnO%2FqtZGhQq7f1YjLKwEZ3qhkXK1lE6eCdwbueuMLg7z%2FWxYy0cZgHccneVwyCggzoZE4nfl6Yju5VzvGfzmbZ8PbzjGHtQkVdbETSPIQ5lBveMkdKNK48Di8Tyb3bgKMwkGpRLdyMxi6fvkHxHDB7Yru3Ot80fQGEbt6hJapujG0uiGV5DIM%2FEmBHcKsy%2BQTC0%2FpS9BjqkAZ4OL%2BgxCAlY7I1zdHIO3vA0VPnEvC279L2ADZ1%2FtJ%2FD9AxSPHD6bBeAiZZDIL8llzMjiJve4As1SK0XRtMCqL8zQHKBaZlhTQC%2BAbtqfp3eQ9xDqVFQeMP0us1sl8qOxuD1AsKlUgXWe5SSpH6Nc%2FTxkjPe8rlVFWVktgo59nxpQCDmhQidb4lRhN%2F0ECPYvhxDPWVIKkVimudZjqYkpQ1%2FuvUc&X-Amz-Signature=4f4a5835866e923817bb7eac828ec317a0dbb2aa53b6b263e05f6e192d999cfc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
