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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YS2CBHF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCeH%2BZdCohzsUXlcAyNEHWhWT%2Ba%2BSTz%2B91PlD4FmimrzAIgQv1SaQTYmuatnKrutgVg8M4TYw5MpMQW7XYKepmE9TUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyEx%2B8PpGkczCKi6CrcAxUB%2BNpH94xzpHqARK7pJI7u2trCkZ1GAz8tpwSsuRuvXgkLHLkUxweomjA088AtPGtf9pzMjRP01aor3%2BNcFuI%2BYLexmTQzAA3aHpp7xz48JpVJVbpzPbHSelz8VZYHMmBaNr5j1EXnWNOxvVaOwuDPwn8JFd5Edwf4dB2tbA3rrMrxXOUv3y9dzDlW%2Fzur5Ojsjnwxzth5OT%2FuyIHZztsZFxLtGNqzfg%2Bzb58zRyoUKcGx7NE%2FHzHrxpoOqCF3MVNEAVJFTtIMBcftj8IOj2neIXJkP3Go%2FlZ33btm0%2BMIol2X4vP7vRhRs4N7dTXMrnoGW8QAEfU0AW2wT1%2FJcx%2B%2FsxPL4oso6uZV6rP3UQ%2BS4nels0mi3F4d%2BcCM%2Fbh9%2B8nybYZiPj7JGcyGMn8BrSXt7jvnPFzywCcvyIzOla5bJXWVl53H3phwvtExNwLUvdheRI2PRdRQ%2BRYFp0ni8TGnDT0UtSw08hmu3D2Pa3%2Fbaw0L5FNkZJlmXJZpt1Tsk7FXiB4ZT%2FZFAmpleIrSvLBTrGEy05KDj8u47HFqFgRGH3khwjk0lB5NLPPvUKzgquUrJy6aW9ksK%2Blcb3qDaIZ1%2Bnuc4nm6ovJgv0ZwjBP2u%2FsIyqhpMl8QWZmNMIz1ycAGOqUBA2Pcek531awJ4ro4buUcpJHTE61Jzf32EIoYNdSMkZ66FcHFg9SofYDsUXqh%2BanmXFu1JE%2F5tWQURZn1lfOXXy6440wYtholGtuAGCcIZdLhRLV17bR%2BbslwjK2exA1LSuKLio6sU%2B8y4JqYQrwcBG%2BRl5oNZr0QLjPVfmIwDxLTh0B%2BsqRP66E7URoFxn8lIZiGTv%2BL76ur3LrAH0ngoXm4RaMZ&X-Amz-Signature=a6dd3a59944029f4e0b3dd60c01180ed26772210a05e28f1d769610908a05f9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YS2CBHF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCeH%2BZdCohzsUXlcAyNEHWhWT%2Ba%2BSTz%2B91PlD4FmimrzAIgQv1SaQTYmuatnKrutgVg8M4TYw5MpMQW7XYKepmE9TUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyEx%2B8PpGkczCKi6CrcAxUB%2BNpH94xzpHqARK7pJI7u2trCkZ1GAz8tpwSsuRuvXgkLHLkUxweomjA088AtPGtf9pzMjRP01aor3%2BNcFuI%2BYLexmTQzAA3aHpp7xz48JpVJVbpzPbHSelz8VZYHMmBaNr5j1EXnWNOxvVaOwuDPwn8JFd5Edwf4dB2tbA3rrMrxXOUv3y9dzDlW%2Fzur5Ojsjnwxzth5OT%2FuyIHZztsZFxLtGNqzfg%2Bzb58zRyoUKcGx7NE%2FHzHrxpoOqCF3MVNEAVJFTtIMBcftj8IOj2neIXJkP3Go%2FlZ33btm0%2BMIol2X4vP7vRhRs4N7dTXMrnoGW8QAEfU0AW2wT1%2FJcx%2B%2FsxPL4oso6uZV6rP3UQ%2BS4nels0mi3F4d%2BcCM%2Fbh9%2B8nybYZiPj7JGcyGMn8BrSXt7jvnPFzywCcvyIzOla5bJXWVl53H3phwvtExNwLUvdheRI2PRdRQ%2BRYFp0ni8TGnDT0UtSw08hmu3D2Pa3%2Fbaw0L5FNkZJlmXJZpt1Tsk7FXiB4ZT%2FZFAmpleIrSvLBTrGEy05KDj8u47HFqFgRGH3khwjk0lB5NLPPvUKzgquUrJy6aW9ksK%2Blcb3qDaIZ1%2Bnuc4nm6ovJgv0ZwjBP2u%2FsIyqhpMl8QWZmNMIz1ycAGOqUBA2Pcek531awJ4ro4buUcpJHTE61Jzf32EIoYNdSMkZ66FcHFg9SofYDsUXqh%2BanmXFu1JE%2F5tWQURZn1lfOXXy6440wYtholGtuAGCcIZdLhRLV17bR%2BbslwjK2exA1LSuKLio6sU%2B8y4JqYQrwcBG%2BRl5oNZr0QLjPVfmIwDxLTh0B%2BsqRP66E7URoFxn8lIZiGTv%2BL76ur3LrAH0ngoXm4RaMZ&X-Amz-Signature=a4125a7be75e6e9ab0f528dc1fd39a772de47197f3b66d5e565681c3cef4d9d1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YS2CBHF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCeH%2BZdCohzsUXlcAyNEHWhWT%2Ba%2BSTz%2B91PlD4FmimrzAIgQv1SaQTYmuatnKrutgVg8M4TYw5MpMQW7XYKepmE9TUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyEx%2B8PpGkczCKi6CrcAxUB%2BNpH94xzpHqARK7pJI7u2trCkZ1GAz8tpwSsuRuvXgkLHLkUxweomjA088AtPGtf9pzMjRP01aor3%2BNcFuI%2BYLexmTQzAA3aHpp7xz48JpVJVbpzPbHSelz8VZYHMmBaNr5j1EXnWNOxvVaOwuDPwn8JFd5Edwf4dB2tbA3rrMrxXOUv3y9dzDlW%2Fzur5Ojsjnwxzth5OT%2FuyIHZztsZFxLtGNqzfg%2Bzb58zRyoUKcGx7NE%2FHzHrxpoOqCF3MVNEAVJFTtIMBcftj8IOj2neIXJkP3Go%2FlZ33btm0%2BMIol2X4vP7vRhRs4N7dTXMrnoGW8QAEfU0AW2wT1%2FJcx%2B%2FsxPL4oso6uZV6rP3UQ%2BS4nels0mi3F4d%2BcCM%2Fbh9%2B8nybYZiPj7JGcyGMn8BrSXt7jvnPFzywCcvyIzOla5bJXWVl53H3phwvtExNwLUvdheRI2PRdRQ%2BRYFp0ni8TGnDT0UtSw08hmu3D2Pa3%2Fbaw0L5FNkZJlmXJZpt1Tsk7FXiB4ZT%2FZFAmpleIrSvLBTrGEy05KDj8u47HFqFgRGH3khwjk0lB5NLPPvUKzgquUrJy6aW9ksK%2Blcb3qDaIZ1%2Bnuc4nm6ovJgv0ZwjBP2u%2FsIyqhpMl8QWZmNMIz1ycAGOqUBA2Pcek531awJ4ro4buUcpJHTE61Jzf32EIoYNdSMkZ66FcHFg9SofYDsUXqh%2BanmXFu1JE%2F5tWQURZn1lfOXXy6440wYtholGtuAGCcIZdLhRLV17bR%2BbslwjK2exA1LSuKLio6sU%2B8y4JqYQrwcBG%2BRl5oNZr0QLjPVfmIwDxLTh0B%2BsqRP66E7URoFxn8lIZiGTv%2BL76ur3LrAH0ngoXm4RaMZ&X-Amz-Signature=1f4a4ad7be432b6f723ada6a9f20cac941033baffec7fcf7b91007551f28bb8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YS2CBHF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCeH%2BZdCohzsUXlcAyNEHWhWT%2Ba%2BSTz%2B91PlD4FmimrzAIgQv1SaQTYmuatnKrutgVg8M4TYw5MpMQW7XYKepmE9TUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyEx%2B8PpGkczCKi6CrcAxUB%2BNpH94xzpHqARK7pJI7u2trCkZ1GAz8tpwSsuRuvXgkLHLkUxweomjA088AtPGtf9pzMjRP01aor3%2BNcFuI%2BYLexmTQzAA3aHpp7xz48JpVJVbpzPbHSelz8VZYHMmBaNr5j1EXnWNOxvVaOwuDPwn8JFd5Edwf4dB2tbA3rrMrxXOUv3y9dzDlW%2Fzur5Ojsjnwxzth5OT%2FuyIHZztsZFxLtGNqzfg%2Bzb58zRyoUKcGx7NE%2FHzHrxpoOqCF3MVNEAVJFTtIMBcftj8IOj2neIXJkP3Go%2FlZ33btm0%2BMIol2X4vP7vRhRs4N7dTXMrnoGW8QAEfU0AW2wT1%2FJcx%2B%2FsxPL4oso6uZV6rP3UQ%2BS4nels0mi3F4d%2BcCM%2Fbh9%2B8nybYZiPj7JGcyGMn8BrSXt7jvnPFzywCcvyIzOla5bJXWVl53H3phwvtExNwLUvdheRI2PRdRQ%2BRYFp0ni8TGnDT0UtSw08hmu3D2Pa3%2Fbaw0L5FNkZJlmXJZpt1Tsk7FXiB4ZT%2FZFAmpleIrSvLBTrGEy05KDj8u47HFqFgRGH3khwjk0lB5NLPPvUKzgquUrJy6aW9ksK%2Blcb3qDaIZ1%2Bnuc4nm6ovJgv0ZwjBP2u%2FsIyqhpMl8QWZmNMIz1ycAGOqUBA2Pcek531awJ4ro4buUcpJHTE61Jzf32EIoYNdSMkZ66FcHFg9SofYDsUXqh%2BanmXFu1JE%2F5tWQURZn1lfOXXy6440wYtholGtuAGCcIZdLhRLV17bR%2BbslwjK2exA1LSuKLio6sU%2B8y4JqYQrwcBG%2BRl5oNZr0QLjPVfmIwDxLTh0B%2BsqRP66E7URoFxn8lIZiGTv%2BL76ur3LrAH0ngoXm4RaMZ&X-Amz-Signature=4873d247b2d595d164ef6d2ca519d9fd58cac6d379053f945ee59128a7c9a6b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YS2CBHF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCeH%2BZdCohzsUXlcAyNEHWhWT%2Ba%2BSTz%2B91PlD4FmimrzAIgQv1SaQTYmuatnKrutgVg8M4TYw5MpMQW7XYKepmE9TUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyEx%2B8PpGkczCKi6CrcAxUB%2BNpH94xzpHqARK7pJI7u2trCkZ1GAz8tpwSsuRuvXgkLHLkUxweomjA088AtPGtf9pzMjRP01aor3%2BNcFuI%2BYLexmTQzAA3aHpp7xz48JpVJVbpzPbHSelz8VZYHMmBaNr5j1EXnWNOxvVaOwuDPwn8JFd5Edwf4dB2tbA3rrMrxXOUv3y9dzDlW%2Fzur5Ojsjnwxzth5OT%2FuyIHZztsZFxLtGNqzfg%2Bzb58zRyoUKcGx7NE%2FHzHrxpoOqCF3MVNEAVJFTtIMBcftj8IOj2neIXJkP3Go%2FlZ33btm0%2BMIol2X4vP7vRhRs4N7dTXMrnoGW8QAEfU0AW2wT1%2FJcx%2B%2FsxPL4oso6uZV6rP3UQ%2BS4nels0mi3F4d%2BcCM%2Fbh9%2B8nybYZiPj7JGcyGMn8BrSXt7jvnPFzywCcvyIzOla5bJXWVl53H3phwvtExNwLUvdheRI2PRdRQ%2BRYFp0ni8TGnDT0UtSw08hmu3D2Pa3%2Fbaw0L5FNkZJlmXJZpt1Tsk7FXiB4ZT%2FZFAmpleIrSvLBTrGEy05KDj8u47HFqFgRGH3khwjk0lB5NLPPvUKzgquUrJy6aW9ksK%2Blcb3qDaIZ1%2Bnuc4nm6ovJgv0ZwjBP2u%2FsIyqhpMl8QWZmNMIz1ycAGOqUBA2Pcek531awJ4ro4buUcpJHTE61Jzf32EIoYNdSMkZ66FcHFg9SofYDsUXqh%2BanmXFu1JE%2F5tWQURZn1lfOXXy6440wYtholGtuAGCcIZdLhRLV17bR%2BbslwjK2exA1LSuKLio6sU%2B8y4JqYQrwcBG%2BRl5oNZr0QLjPVfmIwDxLTh0B%2BsqRP66E7URoFxn8lIZiGTv%2BL76ur3LrAH0ngoXm4RaMZ&X-Amz-Signature=c2458d30332c2a8189d55c99200e3700b1cb76df852634efc2da8a1bafddce21&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
