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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X72YTD4X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIA7TBsxEp0DbXX5OM7okzrSBIm04c6xjSSwrwCzo32CYAiABdZz03RIbov6OD4DDk4b21kYorfmRl8WMqW63GdLxaiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtEPuzG5QsTMX%2B8WSKtwDRUGefRcms1dM8iOLkpNKh83N8xK1JAE9wyUYDpbU%2B1GZXhEK94PZjhmlc9dtOyEvLB7eoHbo%2FqdgWVZ3hSPEVpEnpAjRwiTJY9JFeLyt7Q9IQQsaf9H0%2BAkBpP0GFYSh4p31rhzaTHtfr5WEbto1j52GPKHUBWIxJ7%2BXWtDkW%2BJV4mhnyhES%2BlLaA4ABxwJBUvyWDhUZzYzGAZS4TR8qlxgKMZ%2FipwAeUPt12fcznqRf9WxVUGQFXP22nW0DReimILVrVQCjEGNah%2BtJM1QV5pVC1alGaz7xygWeooCQzabBL7N3IBdYY7%2Beu3NN1caMK8yZ4xa0cUc7%2Fi1iOUKpCIVv36Mcu6AjmxoPGfydpGz15v27vPS2ZokorueHc3bYlfLwA0Lz8%2BjDknDpeWr8r%2BinP7UNrKvfd0QTq86RgiH2GiLO8Juy5Jozh0S4FB5s3nfHkd2YMNQxWrzjii1sdh%2Bp3%2FCVpug1YpcvwE041DOlCfcI73V5kKT%2B7VX1A8g65f1lu83z9WXqVW0qW3JhTbtCYitaFvolY6mO1S5W%2B0Ol%2BtviTt%2BiodfudgwRa06fTMYz4mHgYeZdKE0n8qlMr%2BLmftj1Ls1aHNhCeNDWOADoY65rHygKE3LPyCQwgevHwAY6pgFMIaHA7YreBbrrU8Ba7XGno8o79d%2BELV0XE85vzZ3JBp3kyDEAW28z9gz7nqawnKuPWU%2BYbn%2B2hmBjg7wtICKRKubwhmRFQNh3xppYdLWhIql7UNHSxeiDuIlHNaQYNonBg%2B2AV6tkg3jJj3wMReyYlj53op94Y4nSgAIg4NSjS6ZN9mp6JHzb54m%2BhoRW%2Be6heymETce8%2BCcgqySiZDXVBzHaL3ci&X-Amz-Signature=6fefed7858225df291f01e82f01fdfaed6934b0e6761a896087d2ab7680ff348&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X72YTD4X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIA7TBsxEp0DbXX5OM7okzrSBIm04c6xjSSwrwCzo32CYAiABdZz03RIbov6OD4DDk4b21kYorfmRl8WMqW63GdLxaiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtEPuzG5QsTMX%2B8WSKtwDRUGefRcms1dM8iOLkpNKh83N8xK1JAE9wyUYDpbU%2B1GZXhEK94PZjhmlc9dtOyEvLB7eoHbo%2FqdgWVZ3hSPEVpEnpAjRwiTJY9JFeLyt7Q9IQQsaf9H0%2BAkBpP0GFYSh4p31rhzaTHtfr5WEbto1j52GPKHUBWIxJ7%2BXWtDkW%2BJV4mhnyhES%2BlLaA4ABxwJBUvyWDhUZzYzGAZS4TR8qlxgKMZ%2FipwAeUPt12fcznqRf9WxVUGQFXP22nW0DReimILVrVQCjEGNah%2BtJM1QV5pVC1alGaz7xygWeooCQzabBL7N3IBdYY7%2Beu3NN1caMK8yZ4xa0cUc7%2Fi1iOUKpCIVv36Mcu6AjmxoPGfydpGz15v27vPS2ZokorueHc3bYlfLwA0Lz8%2BjDknDpeWr8r%2BinP7UNrKvfd0QTq86RgiH2GiLO8Juy5Jozh0S4FB5s3nfHkd2YMNQxWrzjii1sdh%2Bp3%2FCVpug1YpcvwE041DOlCfcI73V5kKT%2B7VX1A8g65f1lu83z9WXqVW0qW3JhTbtCYitaFvolY6mO1S5W%2B0Ol%2BtviTt%2BiodfudgwRa06fTMYz4mHgYeZdKE0n8qlMr%2BLmftj1Ls1aHNhCeNDWOADoY65rHygKE3LPyCQwgevHwAY6pgFMIaHA7YreBbrrU8Ba7XGno8o79d%2BELV0XE85vzZ3JBp3kyDEAW28z9gz7nqawnKuPWU%2BYbn%2B2hmBjg7wtICKRKubwhmRFQNh3xppYdLWhIql7UNHSxeiDuIlHNaQYNonBg%2B2AV6tkg3jJj3wMReyYlj53op94Y4nSgAIg4NSjS6ZN9mp6JHzb54m%2BhoRW%2Be6heymETce8%2BCcgqySiZDXVBzHaL3ci&X-Amz-Signature=545f3ad3d6702a978e7aff9d30109e0c4def89ec1e48070f4eb6d7ebcba98360&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X72YTD4X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIA7TBsxEp0DbXX5OM7okzrSBIm04c6xjSSwrwCzo32CYAiABdZz03RIbov6OD4DDk4b21kYorfmRl8WMqW63GdLxaiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtEPuzG5QsTMX%2B8WSKtwDRUGefRcms1dM8iOLkpNKh83N8xK1JAE9wyUYDpbU%2B1GZXhEK94PZjhmlc9dtOyEvLB7eoHbo%2FqdgWVZ3hSPEVpEnpAjRwiTJY9JFeLyt7Q9IQQsaf9H0%2BAkBpP0GFYSh4p31rhzaTHtfr5WEbto1j52GPKHUBWIxJ7%2BXWtDkW%2BJV4mhnyhES%2BlLaA4ABxwJBUvyWDhUZzYzGAZS4TR8qlxgKMZ%2FipwAeUPt12fcznqRf9WxVUGQFXP22nW0DReimILVrVQCjEGNah%2BtJM1QV5pVC1alGaz7xygWeooCQzabBL7N3IBdYY7%2Beu3NN1caMK8yZ4xa0cUc7%2Fi1iOUKpCIVv36Mcu6AjmxoPGfydpGz15v27vPS2ZokorueHc3bYlfLwA0Lz8%2BjDknDpeWr8r%2BinP7UNrKvfd0QTq86RgiH2GiLO8Juy5Jozh0S4FB5s3nfHkd2YMNQxWrzjii1sdh%2Bp3%2FCVpug1YpcvwE041DOlCfcI73V5kKT%2B7VX1A8g65f1lu83z9WXqVW0qW3JhTbtCYitaFvolY6mO1S5W%2B0Ol%2BtviTt%2BiodfudgwRa06fTMYz4mHgYeZdKE0n8qlMr%2BLmftj1Ls1aHNhCeNDWOADoY65rHygKE3LPyCQwgevHwAY6pgFMIaHA7YreBbrrU8Ba7XGno8o79d%2BELV0XE85vzZ3JBp3kyDEAW28z9gz7nqawnKuPWU%2BYbn%2B2hmBjg7wtICKRKubwhmRFQNh3xppYdLWhIql7UNHSxeiDuIlHNaQYNonBg%2B2AV6tkg3jJj3wMReyYlj53op94Y4nSgAIg4NSjS6ZN9mp6JHzb54m%2BhoRW%2Be6heymETce8%2BCcgqySiZDXVBzHaL3ci&X-Amz-Signature=36ab47484b29bd354b63349c87662ee5c0da517364227ba3ede97a1fac244750&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X72YTD4X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIA7TBsxEp0DbXX5OM7okzrSBIm04c6xjSSwrwCzo32CYAiABdZz03RIbov6OD4DDk4b21kYorfmRl8WMqW63GdLxaiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtEPuzG5QsTMX%2B8WSKtwDRUGefRcms1dM8iOLkpNKh83N8xK1JAE9wyUYDpbU%2B1GZXhEK94PZjhmlc9dtOyEvLB7eoHbo%2FqdgWVZ3hSPEVpEnpAjRwiTJY9JFeLyt7Q9IQQsaf9H0%2BAkBpP0GFYSh4p31rhzaTHtfr5WEbto1j52GPKHUBWIxJ7%2BXWtDkW%2BJV4mhnyhES%2BlLaA4ABxwJBUvyWDhUZzYzGAZS4TR8qlxgKMZ%2FipwAeUPt12fcznqRf9WxVUGQFXP22nW0DReimILVrVQCjEGNah%2BtJM1QV5pVC1alGaz7xygWeooCQzabBL7N3IBdYY7%2Beu3NN1caMK8yZ4xa0cUc7%2Fi1iOUKpCIVv36Mcu6AjmxoPGfydpGz15v27vPS2ZokorueHc3bYlfLwA0Lz8%2BjDknDpeWr8r%2BinP7UNrKvfd0QTq86RgiH2GiLO8Juy5Jozh0S4FB5s3nfHkd2YMNQxWrzjii1sdh%2Bp3%2FCVpug1YpcvwE041DOlCfcI73V5kKT%2B7VX1A8g65f1lu83z9WXqVW0qW3JhTbtCYitaFvolY6mO1S5W%2B0Ol%2BtviTt%2BiodfudgwRa06fTMYz4mHgYeZdKE0n8qlMr%2BLmftj1Ls1aHNhCeNDWOADoY65rHygKE3LPyCQwgevHwAY6pgFMIaHA7YreBbrrU8Ba7XGno8o79d%2BELV0XE85vzZ3JBp3kyDEAW28z9gz7nqawnKuPWU%2BYbn%2B2hmBjg7wtICKRKubwhmRFQNh3xppYdLWhIql7UNHSxeiDuIlHNaQYNonBg%2B2AV6tkg3jJj3wMReyYlj53op94Y4nSgAIg4NSjS6ZN9mp6JHzb54m%2BhoRW%2Be6heymETce8%2BCcgqySiZDXVBzHaL3ci&X-Amz-Signature=a91a0c6000f68358a0f8e43a72c272abbdf73f304eecb9aa299341c1a747fa03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X72YTD4X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIA7TBsxEp0DbXX5OM7okzrSBIm04c6xjSSwrwCzo32CYAiABdZz03RIbov6OD4DDk4b21kYorfmRl8WMqW63GdLxaiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtEPuzG5QsTMX%2B8WSKtwDRUGefRcms1dM8iOLkpNKh83N8xK1JAE9wyUYDpbU%2B1GZXhEK94PZjhmlc9dtOyEvLB7eoHbo%2FqdgWVZ3hSPEVpEnpAjRwiTJY9JFeLyt7Q9IQQsaf9H0%2BAkBpP0GFYSh4p31rhzaTHtfr5WEbto1j52GPKHUBWIxJ7%2BXWtDkW%2BJV4mhnyhES%2BlLaA4ABxwJBUvyWDhUZzYzGAZS4TR8qlxgKMZ%2FipwAeUPt12fcznqRf9WxVUGQFXP22nW0DReimILVrVQCjEGNah%2BtJM1QV5pVC1alGaz7xygWeooCQzabBL7N3IBdYY7%2Beu3NN1caMK8yZ4xa0cUc7%2Fi1iOUKpCIVv36Mcu6AjmxoPGfydpGz15v27vPS2ZokorueHc3bYlfLwA0Lz8%2BjDknDpeWr8r%2BinP7UNrKvfd0QTq86RgiH2GiLO8Juy5Jozh0S4FB5s3nfHkd2YMNQxWrzjii1sdh%2Bp3%2FCVpug1YpcvwE041DOlCfcI73V5kKT%2B7VX1A8g65f1lu83z9WXqVW0qW3JhTbtCYitaFvolY6mO1S5W%2B0Ol%2BtviTt%2BiodfudgwRa06fTMYz4mHgYeZdKE0n8qlMr%2BLmftj1Ls1aHNhCeNDWOADoY65rHygKE3LPyCQwgevHwAY6pgFMIaHA7YreBbrrU8Ba7XGno8o79d%2BELV0XE85vzZ3JBp3kyDEAW28z9gz7nqawnKuPWU%2BYbn%2B2hmBjg7wtICKRKubwhmRFQNh3xppYdLWhIql7UNHSxeiDuIlHNaQYNonBg%2B2AV6tkg3jJj3wMReyYlj53op94Y4nSgAIg4NSjS6ZN9mp6JHzb54m%2BhoRW%2Be6heymETce8%2BCcgqySiZDXVBzHaL3ci&X-Amz-Signature=d96ae8382a06fb3e90049d9b942b5e65cf9af47ae430d21468a4d55405a6927a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
