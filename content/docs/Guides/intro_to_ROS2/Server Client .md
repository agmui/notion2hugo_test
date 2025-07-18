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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGVTUE4H%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIHku%2F0HMzjLmUd5Z9HfnsPEEcCrRdXowMbyXQ2oJ9cd7AiEAvaPpxBMfNlT0QamR7wVCDZo5kMLXFjkrvZr1NzxmW3sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg9Xeo%2BSzlWW9LrxSrcA%2FNme%2BR8xluI5THUOi1%2F7QBAg4ey0LllORYLlj48%2BrzdqXgIFFY%2FLDOnRsojcorU1buTeh3sjj6IpMttd1Cmv0KTDMIwtkObpu9iPnh6icVBca6kL4mguYWJ7fLcbl1XsPf4I%2FTbouBEHLGJFG6ZkhGU6No5KWjHVetHzr9Xxz0OM6KF3YLdQ%2FXa%2FtzTHyHTKu9DVSWsaGqHbdQaYVYnDMEEA9xHUkxq%2FE5avVZOpdGe5bArc%2Bfr3JrSCo8A4%2BwwyBsUcWfqyZk1gFQmoVHofKLU9qoTiOZ3WNX96QxcTPwQObnsX7OPcHy3f9YxfRZnSGfHPuNGbbjW8RoAVu9BFv9NgJX877r8hxZOV4JAv8bfgP%2F988dfDr8vB0gyFTzjxJwFjKiCtANPpp68wTvFL7rzYQ1050aZI2s8BFq8cO1X2HmA9Gi2SDtbjRixZy5Pq9OYF%2FQkr4wtSrkxQHJpMHtrauQdSZzVICX%2BtVkL7oBnOpuk87A5e2pU8ma0ZkVSiTFq0j1eJte4yabtdGtUAHzv9EV9YpNuXthBKduL%2BJJwbJr58KMWzxTIT3EOnoCUhqemv%2Fm14ghFMcuenT7UUwxiJw8kqoa1lPkeNHh4VoZ6fQmHmCzWd%2B7DjoNJMKqI58MGOqUBWp0z1Kw9CS%2BUw2i88ZjMsdzoJJ2VrT%2BU4CM2r20O36ANdValQwu7%2BWMhJGZxkjJDZKve6CWhchwGv8OPtFGw6OVzw5hvjWF2PruVCq0Ot5aUpasseBBSRY9SNttkdtOQ4%2B5JuAxglSOB9XKzHf25DZmeTTz5p6LWiEmyxhMo1RNKyQNDeKN8EsW56aTeyvvKwE8pM6aYnkPxjjGYFuKdIaa%2FP9jI&X-Amz-Signature=782024dd6fa8433b610a8952f24975254acd7cb358611ba6094496bd5ea31b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGVTUE4H%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIHku%2F0HMzjLmUd5Z9HfnsPEEcCrRdXowMbyXQ2oJ9cd7AiEAvaPpxBMfNlT0QamR7wVCDZo5kMLXFjkrvZr1NzxmW3sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg9Xeo%2BSzlWW9LrxSrcA%2FNme%2BR8xluI5THUOi1%2F7QBAg4ey0LllORYLlj48%2BrzdqXgIFFY%2FLDOnRsojcorU1buTeh3sjj6IpMttd1Cmv0KTDMIwtkObpu9iPnh6icVBca6kL4mguYWJ7fLcbl1XsPf4I%2FTbouBEHLGJFG6ZkhGU6No5KWjHVetHzr9Xxz0OM6KF3YLdQ%2FXa%2FtzTHyHTKu9DVSWsaGqHbdQaYVYnDMEEA9xHUkxq%2FE5avVZOpdGe5bArc%2Bfr3JrSCo8A4%2BwwyBsUcWfqyZk1gFQmoVHofKLU9qoTiOZ3WNX96QxcTPwQObnsX7OPcHy3f9YxfRZnSGfHPuNGbbjW8RoAVu9BFv9NgJX877r8hxZOV4JAv8bfgP%2F988dfDr8vB0gyFTzjxJwFjKiCtANPpp68wTvFL7rzYQ1050aZI2s8BFq8cO1X2HmA9Gi2SDtbjRixZy5Pq9OYF%2FQkr4wtSrkxQHJpMHtrauQdSZzVICX%2BtVkL7oBnOpuk87A5e2pU8ma0ZkVSiTFq0j1eJte4yabtdGtUAHzv9EV9YpNuXthBKduL%2BJJwbJr58KMWzxTIT3EOnoCUhqemv%2Fm14ghFMcuenT7UUwxiJw8kqoa1lPkeNHh4VoZ6fQmHmCzWd%2B7DjoNJMKqI58MGOqUBWp0z1Kw9CS%2BUw2i88ZjMsdzoJJ2VrT%2BU4CM2r20O36ANdValQwu7%2BWMhJGZxkjJDZKve6CWhchwGv8OPtFGw6OVzw5hvjWF2PruVCq0Ot5aUpasseBBSRY9SNttkdtOQ4%2B5JuAxglSOB9XKzHf25DZmeTTz5p6LWiEmyxhMo1RNKyQNDeKN8EsW56aTeyvvKwE8pM6aYnkPxjjGYFuKdIaa%2FP9jI&X-Amz-Signature=dea5f8c6ba3ee7eaa48740f7aa805195866fa94aef0dfc286392cff7f532718c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGVTUE4H%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIHku%2F0HMzjLmUd5Z9HfnsPEEcCrRdXowMbyXQ2oJ9cd7AiEAvaPpxBMfNlT0QamR7wVCDZo5kMLXFjkrvZr1NzxmW3sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg9Xeo%2BSzlWW9LrxSrcA%2FNme%2BR8xluI5THUOi1%2F7QBAg4ey0LllORYLlj48%2BrzdqXgIFFY%2FLDOnRsojcorU1buTeh3sjj6IpMttd1Cmv0KTDMIwtkObpu9iPnh6icVBca6kL4mguYWJ7fLcbl1XsPf4I%2FTbouBEHLGJFG6ZkhGU6No5KWjHVetHzr9Xxz0OM6KF3YLdQ%2FXa%2FtzTHyHTKu9DVSWsaGqHbdQaYVYnDMEEA9xHUkxq%2FE5avVZOpdGe5bArc%2Bfr3JrSCo8A4%2BwwyBsUcWfqyZk1gFQmoVHofKLU9qoTiOZ3WNX96QxcTPwQObnsX7OPcHy3f9YxfRZnSGfHPuNGbbjW8RoAVu9BFv9NgJX877r8hxZOV4JAv8bfgP%2F988dfDr8vB0gyFTzjxJwFjKiCtANPpp68wTvFL7rzYQ1050aZI2s8BFq8cO1X2HmA9Gi2SDtbjRixZy5Pq9OYF%2FQkr4wtSrkxQHJpMHtrauQdSZzVICX%2BtVkL7oBnOpuk87A5e2pU8ma0ZkVSiTFq0j1eJte4yabtdGtUAHzv9EV9YpNuXthBKduL%2BJJwbJr58KMWzxTIT3EOnoCUhqemv%2Fm14ghFMcuenT7UUwxiJw8kqoa1lPkeNHh4VoZ6fQmHmCzWd%2B7DjoNJMKqI58MGOqUBWp0z1Kw9CS%2BUw2i88ZjMsdzoJJ2VrT%2BU4CM2r20O36ANdValQwu7%2BWMhJGZxkjJDZKve6CWhchwGv8OPtFGw6OVzw5hvjWF2PruVCq0Ot5aUpasseBBSRY9SNttkdtOQ4%2B5JuAxglSOB9XKzHf25DZmeTTz5p6LWiEmyxhMo1RNKyQNDeKN8EsW56aTeyvvKwE8pM6aYnkPxjjGYFuKdIaa%2FP9jI&X-Amz-Signature=a88784c1679844c63837023b63fa07e8da46d78bec080752509423ec9c19c2d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGVTUE4H%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIHku%2F0HMzjLmUd5Z9HfnsPEEcCrRdXowMbyXQ2oJ9cd7AiEAvaPpxBMfNlT0QamR7wVCDZo5kMLXFjkrvZr1NzxmW3sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg9Xeo%2BSzlWW9LrxSrcA%2FNme%2BR8xluI5THUOi1%2F7QBAg4ey0LllORYLlj48%2BrzdqXgIFFY%2FLDOnRsojcorU1buTeh3sjj6IpMttd1Cmv0KTDMIwtkObpu9iPnh6icVBca6kL4mguYWJ7fLcbl1XsPf4I%2FTbouBEHLGJFG6ZkhGU6No5KWjHVetHzr9Xxz0OM6KF3YLdQ%2FXa%2FtzTHyHTKu9DVSWsaGqHbdQaYVYnDMEEA9xHUkxq%2FE5avVZOpdGe5bArc%2Bfr3JrSCo8A4%2BwwyBsUcWfqyZk1gFQmoVHofKLU9qoTiOZ3WNX96QxcTPwQObnsX7OPcHy3f9YxfRZnSGfHPuNGbbjW8RoAVu9BFv9NgJX877r8hxZOV4JAv8bfgP%2F988dfDr8vB0gyFTzjxJwFjKiCtANPpp68wTvFL7rzYQ1050aZI2s8BFq8cO1X2HmA9Gi2SDtbjRixZy5Pq9OYF%2FQkr4wtSrkxQHJpMHtrauQdSZzVICX%2BtVkL7oBnOpuk87A5e2pU8ma0ZkVSiTFq0j1eJte4yabtdGtUAHzv9EV9YpNuXthBKduL%2BJJwbJr58KMWzxTIT3EOnoCUhqemv%2Fm14ghFMcuenT7UUwxiJw8kqoa1lPkeNHh4VoZ6fQmHmCzWd%2B7DjoNJMKqI58MGOqUBWp0z1Kw9CS%2BUw2i88ZjMsdzoJJ2VrT%2BU4CM2r20O36ANdValQwu7%2BWMhJGZxkjJDZKve6CWhchwGv8OPtFGw6OVzw5hvjWF2PruVCq0Ot5aUpasseBBSRY9SNttkdtOQ4%2B5JuAxglSOB9XKzHf25DZmeTTz5p6LWiEmyxhMo1RNKyQNDeKN8EsW56aTeyvvKwE8pM6aYnkPxjjGYFuKdIaa%2FP9jI&X-Amz-Signature=da6a77ee3c121382a0776e2c2390979c966e5d332b4c814788889c10dc39cf1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGVTUE4H%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIHku%2F0HMzjLmUd5Z9HfnsPEEcCrRdXowMbyXQ2oJ9cd7AiEAvaPpxBMfNlT0QamR7wVCDZo5kMLXFjkrvZr1NzxmW3sqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg9Xeo%2BSzlWW9LrxSrcA%2FNme%2BR8xluI5THUOi1%2F7QBAg4ey0LllORYLlj48%2BrzdqXgIFFY%2FLDOnRsojcorU1buTeh3sjj6IpMttd1Cmv0KTDMIwtkObpu9iPnh6icVBca6kL4mguYWJ7fLcbl1XsPf4I%2FTbouBEHLGJFG6ZkhGU6No5KWjHVetHzr9Xxz0OM6KF3YLdQ%2FXa%2FtzTHyHTKu9DVSWsaGqHbdQaYVYnDMEEA9xHUkxq%2FE5avVZOpdGe5bArc%2Bfr3JrSCo8A4%2BwwyBsUcWfqyZk1gFQmoVHofKLU9qoTiOZ3WNX96QxcTPwQObnsX7OPcHy3f9YxfRZnSGfHPuNGbbjW8RoAVu9BFv9NgJX877r8hxZOV4JAv8bfgP%2F988dfDr8vB0gyFTzjxJwFjKiCtANPpp68wTvFL7rzYQ1050aZI2s8BFq8cO1X2HmA9Gi2SDtbjRixZy5Pq9OYF%2FQkr4wtSrkxQHJpMHtrauQdSZzVICX%2BtVkL7oBnOpuk87A5e2pU8ma0ZkVSiTFq0j1eJte4yabtdGtUAHzv9EV9YpNuXthBKduL%2BJJwbJr58KMWzxTIT3EOnoCUhqemv%2Fm14ghFMcuenT7UUwxiJw8kqoa1lPkeNHh4VoZ6fQmHmCzWd%2B7DjoNJMKqI58MGOqUBWp0z1Kw9CS%2BUw2i88ZjMsdzoJJ2VrT%2BU4CM2r20O36ANdValQwu7%2BWMhJGZxkjJDZKve6CWhchwGv8OPtFGw6OVzw5hvjWF2PruVCq0Ot5aUpasseBBSRY9SNttkdtOQ4%2B5JuAxglSOB9XKzHf25DZmeTTz5p6LWiEmyxhMo1RNKyQNDeKN8EsW56aTeyvvKwE8pM6aYnkPxjjGYFuKdIaa%2FP9jI&X-Amz-Signature=6949d2eda953b90212d9d245f873a5ab1b9032ede6cf9892f86446d1a2a25d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
