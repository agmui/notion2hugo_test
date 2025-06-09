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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ22NUWE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwrI4vEF714rifhPL9AlBkt1zt0vPof%2Fd9HLqLXjEC6AiEA8puNcLHufnondz9qJlL6eZN4TiiZEJWs2ncX4dya8jUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsnwhkyTp7BR507IyrcA7rWxRqZ66MgQjdhWCAquA8wJlIoPBUA8GuTQCXKt7%2FayivboH9q5BP9VZ4oyibVkstZFrQFyGrhLkEgu4UY111%2FfiD8v7jsd1FuH6cx10bpWFjIRNLGXPPKb9y2SWb1o2bM8cmRWGm4MjFvfsZDS0XzuQSvxJORhRzOllxO2zv1NnLMNN9z07nopXTPwwSSGeuWE6Z4YBA%2FdSEBuYelyYaA7V9nbCf%2B44tKzMgnZhTQfo5mTL436v2uPnCQBkWW5lnc0RqudSCQ6CO4E%2B8c3wX4j81NgF7yTMe06hMYz%2BJumg4ydmo3%2BW4yVuAybzWk62y5IL58qqskVOq7ZVKzsyRR5SgvzA4U6INjk%2B6F6qGCzhh2lmW1YikwHNtjPiGuAcpnI289wQMKjdD9aGz8xXzeyrtKskduFaVPPq%2FxdAfD1rD45EYrzbSUhSKlogFsZWKa5VHLXGk4pn4Fn0FeHdzFQCr8nKPndpjz0Yzgffx%2BJ7A9K4fhqnok%2BkEnQp7qXSizgF0ZX9AW1cH0Z2DvBVEgaX3oC0W9ErfIeQqpGONL6uNO2gh56Ur3%2B04bmbIHXdeabMBylgpWvzDaLFO1bJNnKumzF03mFKN7087lfrteOLYIFP7DEnRmaeTeMJXumMIGOqUBWU2vJRANyuq3GR86nVojHbcCN4wplOYHDpUzjZV9ahpuhmIuE3PNPL4zqWOEJcgAqjWJNR6iSFano0rNSPM0sCSyhfEx56Ct3y%2Bp20RZma5b9YBfP5SF7eR67UBfo7kZiS8yemfQN4jLTwXgtonFUxGW8JicR0cGjWYzuX3fT4eJzWI%2F1F%2F35ZClG7FJ1LlppRwshJKB0y8NFVVVTYUVVOAwGmEN&X-Amz-Signature=d58c35571475323e6794ee5d0625902a586edc2e105580a5c17d219499622611&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ22NUWE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwrI4vEF714rifhPL9AlBkt1zt0vPof%2Fd9HLqLXjEC6AiEA8puNcLHufnondz9qJlL6eZN4TiiZEJWs2ncX4dya8jUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsnwhkyTp7BR507IyrcA7rWxRqZ66MgQjdhWCAquA8wJlIoPBUA8GuTQCXKt7%2FayivboH9q5BP9VZ4oyibVkstZFrQFyGrhLkEgu4UY111%2FfiD8v7jsd1FuH6cx10bpWFjIRNLGXPPKb9y2SWb1o2bM8cmRWGm4MjFvfsZDS0XzuQSvxJORhRzOllxO2zv1NnLMNN9z07nopXTPwwSSGeuWE6Z4YBA%2FdSEBuYelyYaA7V9nbCf%2B44tKzMgnZhTQfo5mTL436v2uPnCQBkWW5lnc0RqudSCQ6CO4E%2B8c3wX4j81NgF7yTMe06hMYz%2BJumg4ydmo3%2BW4yVuAybzWk62y5IL58qqskVOq7ZVKzsyRR5SgvzA4U6INjk%2B6F6qGCzhh2lmW1YikwHNtjPiGuAcpnI289wQMKjdD9aGz8xXzeyrtKskduFaVPPq%2FxdAfD1rD45EYrzbSUhSKlogFsZWKa5VHLXGk4pn4Fn0FeHdzFQCr8nKPndpjz0Yzgffx%2BJ7A9K4fhqnok%2BkEnQp7qXSizgF0ZX9AW1cH0Z2DvBVEgaX3oC0W9ErfIeQqpGONL6uNO2gh56Ur3%2B04bmbIHXdeabMBylgpWvzDaLFO1bJNnKumzF03mFKN7087lfrteOLYIFP7DEnRmaeTeMJXumMIGOqUBWU2vJRANyuq3GR86nVojHbcCN4wplOYHDpUzjZV9ahpuhmIuE3PNPL4zqWOEJcgAqjWJNR6iSFano0rNSPM0sCSyhfEx56Ct3y%2Bp20RZma5b9YBfP5SF7eR67UBfo7kZiS8yemfQN4jLTwXgtonFUxGW8JicR0cGjWYzuX3fT4eJzWI%2F1F%2F35ZClG7FJ1LlppRwshJKB0y8NFVVVTYUVVOAwGmEN&X-Amz-Signature=ac8050f0b64d79cc9e9e85a8325fafb9f562d4f6f3dc65093869ec62da367c53&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ22NUWE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwrI4vEF714rifhPL9AlBkt1zt0vPof%2Fd9HLqLXjEC6AiEA8puNcLHufnondz9qJlL6eZN4TiiZEJWs2ncX4dya8jUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsnwhkyTp7BR507IyrcA7rWxRqZ66MgQjdhWCAquA8wJlIoPBUA8GuTQCXKt7%2FayivboH9q5BP9VZ4oyibVkstZFrQFyGrhLkEgu4UY111%2FfiD8v7jsd1FuH6cx10bpWFjIRNLGXPPKb9y2SWb1o2bM8cmRWGm4MjFvfsZDS0XzuQSvxJORhRzOllxO2zv1NnLMNN9z07nopXTPwwSSGeuWE6Z4YBA%2FdSEBuYelyYaA7V9nbCf%2B44tKzMgnZhTQfo5mTL436v2uPnCQBkWW5lnc0RqudSCQ6CO4E%2B8c3wX4j81NgF7yTMe06hMYz%2BJumg4ydmo3%2BW4yVuAybzWk62y5IL58qqskVOq7ZVKzsyRR5SgvzA4U6INjk%2B6F6qGCzhh2lmW1YikwHNtjPiGuAcpnI289wQMKjdD9aGz8xXzeyrtKskduFaVPPq%2FxdAfD1rD45EYrzbSUhSKlogFsZWKa5VHLXGk4pn4Fn0FeHdzFQCr8nKPndpjz0Yzgffx%2BJ7A9K4fhqnok%2BkEnQp7qXSizgF0ZX9AW1cH0Z2DvBVEgaX3oC0W9ErfIeQqpGONL6uNO2gh56Ur3%2B04bmbIHXdeabMBylgpWvzDaLFO1bJNnKumzF03mFKN7087lfrteOLYIFP7DEnRmaeTeMJXumMIGOqUBWU2vJRANyuq3GR86nVojHbcCN4wplOYHDpUzjZV9ahpuhmIuE3PNPL4zqWOEJcgAqjWJNR6iSFano0rNSPM0sCSyhfEx56Ct3y%2Bp20RZma5b9YBfP5SF7eR67UBfo7kZiS8yemfQN4jLTwXgtonFUxGW8JicR0cGjWYzuX3fT4eJzWI%2F1F%2F35ZClG7FJ1LlppRwshJKB0y8NFVVVTYUVVOAwGmEN&X-Amz-Signature=28e7d93331e3e6727e6aa6f7c74a6c291fb1d63b41de3768a145a6b8a3db34f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ22NUWE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwrI4vEF714rifhPL9AlBkt1zt0vPof%2Fd9HLqLXjEC6AiEA8puNcLHufnondz9qJlL6eZN4TiiZEJWs2ncX4dya8jUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsnwhkyTp7BR507IyrcA7rWxRqZ66MgQjdhWCAquA8wJlIoPBUA8GuTQCXKt7%2FayivboH9q5BP9VZ4oyibVkstZFrQFyGrhLkEgu4UY111%2FfiD8v7jsd1FuH6cx10bpWFjIRNLGXPPKb9y2SWb1o2bM8cmRWGm4MjFvfsZDS0XzuQSvxJORhRzOllxO2zv1NnLMNN9z07nopXTPwwSSGeuWE6Z4YBA%2FdSEBuYelyYaA7V9nbCf%2B44tKzMgnZhTQfo5mTL436v2uPnCQBkWW5lnc0RqudSCQ6CO4E%2B8c3wX4j81NgF7yTMe06hMYz%2BJumg4ydmo3%2BW4yVuAybzWk62y5IL58qqskVOq7ZVKzsyRR5SgvzA4U6INjk%2B6F6qGCzhh2lmW1YikwHNtjPiGuAcpnI289wQMKjdD9aGz8xXzeyrtKskduFaVPPq%2FxdAfD1rD45EYrzbSUhSKlogFsZWKa5VHLXGk4pn4Fn0FeHdzFQCr8nKPndpjz0Yzgffx%2BJ7A9K4fhqnok%2BkEnQp7qXSizgF0ZX9AW1cH0Z2DvBVEgaX3oC0W9ErfIeQqpGONL6uNO2gh56Ur3%2B04bmbIHXdeabMBylgpWvzDaLFO1bJNnKumzF03mFKN7087lfrteOLYIFP7DEnRmaeTeMJXumMIGOqUBWU2vJRANyuq3GR86nVojHbcCN4wplOYHDpUzjZV9ahpuhmIuE3PNPL4zqWOEJcgAqjWJNR6iSFano0rNSPM0sCSyhfEx56Ct3y%2Bp20RZma5b9YBfP5SF7eR67UBfo7kZiS8yemfQN4jLTwXgtonFUxGW8JicR0cGjWYzuX3fT4eJzWI%2F1F%2F35ZClG7FJ1LlppRwshJKB0y8NFVVVTYUVVOAwGmEN&X-Amz-Signature=fe3a9846ca10d48bb5c52ad8ec30f0adb4fe7ef7eb8802b250406f183261e98c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ22NUWE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwrI4vEF714rifhPL9AlBkt1zt0vPof%2Fd9HLqLXjEC6AiEA8puNcLHufnondz9qJlL6eZN4TiiZEJWs2ncX4dya8jUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsnwhkyTp7BR507IyrcA7rWxRqZ66MgQjdhWCAquA8wJlIoPBUA8GuTQCXKt7%2FayivboH9q5BP9VZ4oyibVkstZFrQFyGrhLkEgu4UY111%2FfiD8v7jsd1FuH6cx10bpWFjIRNLGXPPKb9y2SWb1o2bM8cmRWGm4MjFvfsZDS0XzuQSvxJORhRzOllxO2zv1NnLMNN9z07nopXTPwwSSGeuWE6Z4YBA%2FdSEBuYelyYaA7V9nbCf%2B44tKzMgnZhTQfo5mTL436v2uPnCQBkWW5lnc0RqudSCQ6CO4E%2B8c3wX4j81NgF7yTMe06hMYz%2BJumg4ydmo3%2BW4yVuAybzWk62y5IL58qqskVOq7ZVKzsyRR5SgvzA4U6INjk%2B6F6qGCzhh2lmW1YikwHNtjPiGuAcpnI289wQMKjdD9aGz8xXzeyrtKskduFaVPPq%2FxdAfD1rD45EYrzbSUhSKlogFsZWKa5VHLXGk4pn4Fn0FeHdzFQCr8nKPndpjz0Yzgffx%2BJ7A9K4fhqnok%2BkEnQp7qXSizgF0ZX9AW1cH0Z2DvBVEgaX3oC0W9ErfIeQqpGONL6uNO2gh56Ur3%2B04bmbIHXdeabMBylgpWvzDaLFO1bJNnKumzF03mFKN7087lfrteOLYIFP7DEnRmaeTeMJXumMIGOqUBWU2vJRANyuq3GR86nVojHbcCN4wplOYHDpUzjZV9ahpuhmIuE3PNPL4zqWOEJcgAqjWJNR6iSFano0rNSPM0sCSyhfEx56Ct3y%2Bp20RZma5b9YBfP5SF7eR67UBfo7kZiS8yemfQN4jLTwXgtonFUxGW8JicR0cGjWYzuX3fT4eJzWI%2F1F%2F35ZClG7FJ1LlppRwshJKB0y8NFVVVTYUVVOAwGmEN&X-Amz-Signature=2279f21e7523e8563048f899044227ac6317243201d5e54de18c56e0ef8bb0a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
