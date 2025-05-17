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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TF5NZ3N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD13ZAYe7Hosg8gkihSdwS3KBvTXn7mqT9yafPWnzYHWwIgI2giawSiv8gqkq7kOh2dpuGAizkGsKU%2BpoM6wFvoY80q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOgo%2BSQTiLEDS%2B9yHircA6Jn343jJYi08dL4WORTh4YygImfyMBKOChsRzCzHtrQhTgYE7eAW2wI5RuBbTT%2FxUrkDgLlSvrQloow0bK9sSlvWVXLXLEOW4ON5522d6EyOZf1uFg1c%2FWkh0W1uQV4%2BZ3oxy33RBA1RLzyxlNXp%2BgvyihqbltgzxhZPXayfiN3UFRT8QHkXBMmGIg49a9aWD%2BAJ%2Fh4E4RQIWOI0crLM9LHKB6IF%2FKgsfusbCfyZhJqYO%2F8bDQf6cNLXD2mxYHMBUMJHuYwuj0YUqgjlsIQHSGpQrpP5oASJyhalX9HWffYBwX2%2F9FFxl7%2FjyXgWnt%2FG3qoJSTsyugLCttcRy7rcGgKhLo%2BnP89QQhaPjK9vUNX6LmRTDSrHCmLcqVdg%2BAEJaShybiQxkNkY0SvaFqYpf6%2FcueQOol%2Fq1EuISyB5%2FYmYlCHuvWVJPR2WDxeUhJvZaG7AaOnDsnQA%2FKaPLjh0%2BhSncee9A5Jc2gehidUKhm7eUwQ5DG6%2BisJ9gaWWjjPIliDMIVTGb2pFMwdQy%2B1hYQTCthToiCiSj3CEmcjZtzV6v9mnAOBWNWLky3gUwaopfRRCFwUVfeWci%2Fdoff6TxNBq86EYdFgfehVaPZp3AnsOhWYzm3gYm0Kz7CiMMmgn8EGOqUBnzHenaOnrr1haFD2mCjA5drEvb8hP6u19NFblB05L0KM%2BnDl0%2Fb1fZFuUZzwALVjANmgwHvhtTXJkSOUasH6vunVqTSMo7o23MJt5zwas%2BvD2nMLQNJvP%2FzDlz6LZS0s1cobsKFyKRIYEeyAOTEaDEhxSOdmuR947KqS1Xz7uWLm8eT1hm3fc41ko62sQOvMkhNt68yujuYTrOwSU5ZIRD9V8RPT&X-Amz-Signature=ee358cd40b772da7d3af7642fbd6e716c455453476c00c14866205a290286e97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TF5NZ3N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD13ZAYe7Hosg8gkihSdwS3KBvTXn7mqT9yafPWnzYHWwIgI2giawSiv8gqkq7kOh2dpuGAizkGsKU%2BpoM6wFvoY80q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOgo%2BSQTiLEDS%2B9yHircA6Jn343jJYi08dL4WORTh4YygImfyMBKOChsRzCzHtrQhTgYE7eAW2wI5RuBbTT%2FxUrkDgLlSvrQloow0bK9sSlvWVXLXLEOW4ON5522d6EyOZf1uFg1c%2FWkh0W1uQV4%2BZ3oxy33RBA1RLzyxlNXp%2BgvyihqbltgzxhZPXayfiN3UFRT8QHkXBMmGIg49a9aWD%2BAJ%2Fh4E4RQIWOI0crLM9LHKB6IF%2FKgsfusbCfyZhJqYO%2F8bDQf6cNLXD2mxYHMBUMJHuYwuj0YUqgjlsIQHSGpQrpP5oASJyhalX9HWffYBwX2%2F9FFxl7%2FjyXgWnt%2FG3qoJSTsyugLCttcRy7rcGgKhLo%2BnP89QQhaPjK9vUNX6LmRTDSrHCmLcqVdg%2BAEJaShybiQxkNkY0SvaFqYpf6%2FcueQOol%2Fq1EuISyB5%2FYmYlCHuvWVJPR2WDxeUhJvZaG7AaOnDsnQA%2FKaPLjh0%2BhSncee9A5Jc2gehidUKhm7eUwQ5DG6%2BisJ9gaWWjjPIliDMIVTGb2pFMwdQy%2B1hYQTCthToiCiSj3CEmcjZtzV6v9mnAOBWNWLky3gUwaopfRRCFwUVfeWci%2Fdoff6TxNBq86EYdFgfehVaPZp3AnsOhWYzm3gYm0Kz7CiMMmgn8EGOqUBnzHenaOnrr1haFD2mCjA5drEvb8hP6u19NFblB05L0KM%2BnDl0%2Fb1fZFuUZzwALVjANmgwHvhtTXJkSOUasH6vunVqTSMo7o23MJt5zwas%2BvD2nMLQNJvP%2FzDlz6LZS0s1cobsKFyKRIYEeyAOTEaDEhxSOdmuR947KqS1Xz7uWLm8eT1hm3fc41ko62sQOvMkhNt68yujuYTrOwSU5ZIRD9V8RPT&X-Amz-Signature=dc6c8d1b27215e203b4ccb8a72288d8f5337e9a423989435a91d01263b25382d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TF5NZ3N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD13ZAYe7Hosg8gkihSdwS3KBvTXn7mqT9yafPWnzYHWwIgI2giawSiv8gqkq7kOh2dpuGAizkGsKU%2BpoM6wFvoY80q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOgo%2BSQTiLEDS%2B9yHircA6Jn343jJYi08dL4WORTh4YygImfyMBKOChsRzCzHtrQhTgYE7eAW2wI5RuBbTT%2FxUrkDgLlSvrQloow0bK9sSlvWVXLXLEOW4ON5522d6EyOZf1uFg1c%2FWkh0W1uQV4%2BZ3oxy33RBA1RLzyxlNXp%2BgvyihqbltgzxhZPXayfiN3UFRT8QHkXBMmGIg49a9aWD%2BAJ%2Fh4E4RQIWOI0crLM9LHKB6IF%2FKgsfusbCfyZhJqYO%2F8bDQf6cNLXD2mxYHMBUMJHuYwuj0YUqgjlsIQHSGpQrpP5oASJyhalX9HWffYBwX2%2F9FFxl7%2FjyXgWnt%2FG3qoJSTsyugLCttcRy7rcGgKhLo%2BnP89QQhaPjK9vUNX6LmRTDSrHCmLcqVdg%2BAEJaShybiQxkNkY0SvaFqYpf6%2FcueQOol%2Fq1EuISyB5%2FYmYlCHuvWVJPR2WDxeUhJvZaG7AaOnDsnQA%2FKaPLjh0%2BhSncee9A5Jc2gehidUKhm7eUwQ5DG6%2BisJ9gaWWjjPIliDMIVTGb2pFMwdQy%2B1hYQTCthToiCiSj3CEmcjZtzV6v9mnAOBWNWLky3gUwaopfRRCFwUVfeWci%2Fdoff6TxNBq86EYdFgfehVaPZp3AnsOhWYzm3gYm0Kz7CiMMmgn8EGOqUBnzHenaOnrr1haFD2mCjA5drEvb8hP6u19NFblB05L0KM%2BnDl0%2Fb1fZFuUZzwALVjANmgwHvhtTXJkSOUasH6vunVqTSMo7o23MJt5zwas%2BvD2nMLQNJvP%2FzDlz6LZS0s1cobsKFyKRIYEeyAOTEaDEhxSOdmuR947KqS1Xz7uWLm8eT1hm3fc41ko62sQOvMkhNt68yujuYTrOwSU5ZIRD9V8RPT&X-Amz-Signature=6767e870a93934d8bbd99aa9570c933d0e2855a45672cb76fa194d68cf0f9686&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TF5NZ3N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD13ZAYe7Hosg8gkihSdwS3KBvTXn7mqT9yafPWnzYHWwIgI2giawSiv8gqkq7kOh2dpuGAizkGsKU%2BpoM6wFvoY80q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOgo%2BSQTiLEDS%2B9yHircA6Jn343jJYi08dL4WORTh4YygImfyMBKOChsRzCzHtrQhTgYE7eAW2wI5RuBbTT%2FxUrkDgLlSvrQloow0bK9sSlvWVXLXLEOW4ON5522d6EyOZf1uFg1c%2FWkh0W1uQV4%2BZ3oxy33RBA1RLzyxlNXp%2BgvyihqbltgzxhZPXayfiN3UFRT8QHkXBMmGIg49a9aWD%2BAJ%2Fh4E4RQIWOI0crLM9LHKB6IF%2FKgsfusbCfyZhJqYO%2F8bDQf6cNLXD2mxYHMBUMJHuYwuj0YUqgjlsIQHSGpQrpP5oASJyhalX9HWffYBwX2%2F9FFxl7%2FjyXgWnt%2FG3qoJSTsyugLCttcRy7rcGgKhLo%2BnP89QQhaPjK9vUNX6LmRTDSrHCmLcqVdg%2BAEJaShybiQxkNkY0SvaFqYpf6%2FcueQOol%2Fq1EuISyB5%2FYmYlCHuvWVJPR2WDxeUhJvZaG7AaOnDsnQA%2FKaPLjh0%2BhSncee9A5Jc2gehidUKhm7eUwQ5DG6%2BisJ9gaWWjjPIliDMIVTGb2pFMwdQy%2B1hYQTCthToiCiSj3CEmcjZtzV6v9mnAOBWNWLky3gUwaopfRRCFwUVfeWci%2Fdoff6TxNBq86EYdFgfehVaPZp3AnsOhWYzm3gYm0Kz7CiMMmgn8EGOqUBnzHenaOnrr1haFD2mCjA5drEvb8hP6u19NFblB05L0KM%2BnDl0%2Fb1fZFuUZzwALVjANmgwHvhtTXJkSOUasH6vunVqTSMo7o23MJt5zwas%2BvD2nMLQNJvP%2FzDlz6LZS0s1cobsKFyKRIYEeyAOTEaDEhxSOdmuR947KqS1Xz7uWLm8eT1hm3fc41ko62sQOvMkhNt68yujuYTrOwSU5ZIRD9V8RPT&X-Amz-Signature=7e2634a9fee3226a99cf03b163a3f16dd2e2002f3d0a89458ff112a6c3b6cedd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TF5NZ3N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD13ZAYe7Hosg8gkihSdwS3KBvTXn7mqT9yafPWnzYHWwIgI2giawSiv8gqkq7kOh2dpuGAizkGsKU%2BpoM6wFvoY80q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOgo%2BSQTiLEDS%2B9yHircA6Jn343jJYi08dL4WORTh4YygImfyMBKOChsRzCzHtrQhTgYE7eAW2wI5RuBbTT%2FxUrkDgLlSvrQloow0bK9sSlvWVXLXLEOW4ON5522d6EyOZf1uFg1c%2FWkh0W1uQV4%2BZ3oxy33RBA1RLzyxlNXp%2BgvyihqbltgzxhZPXayfiN3UFRT8QHkXBMmGIg49a9aWD%2BAJ%2Fh4E4RQIWOI0crLM9LHKB6IF%2FKgsfusbCfyZhJqYO%2F8bDQf6cNLXD2mxYHMBUMJHuYwuj0YUqgjlsIQHSGpQrpP5oASJyhalX9HWffYBwX2%2F9FFxl7%2FjyXgWnt%2FG3qoJSTsyugLCttcRy7rcGgKhLo%2BnP89QQhaPjK9vUNX6LmRTDSrHCmLcqVdg%2BAEJaShybiQxkNkY0SvaFqYpf6%2FcueQOol%2Fq1EuISyB5%2FYmYlCHuvWVJPR2WDxeUhJvZaG7AaOnDsnQA%2FKaPLjh0%2BhSncee9A5Jc2gehidUKhm7eUwQ5DG6%2BisJ9gaWWjjPIliDMIVTGb2pFMwdQy%2B1hYQTCthToiCiSj3CEmcjZtzV6v9mnAOBWNWLky3gUwaopfRRCFwUVfeWci%2Fdoff6TxNBq86EYdFgfehVaPZp3AnsOhWYzm3gYm0Kz7CiMMmgn8EGOqUBnzHenaOnrr1haFD2mCjA5drEvb8hP6u19NFblB05L0KM%2BnDl0%2Fb1fZFuUZzwALVjANmgwHvhtTXJkSOUasH6vunVqTSMo7o23MJt5zwas%2BvD2nMLQNJvP%2FzDlz6LZS0s1cobsKFyKRIYEeyAOTEaDEhxSOdmuR947KqS1Xz7uWLm8eT1hm3fc41ko62sQOvMkhNt68yujuYTrOwSU5ZIRD9V8RPT&X-Amz-Signature=897271498b14d8435c4710b9fd03fc1f0293591f4b97141a06a8ea661422574d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
