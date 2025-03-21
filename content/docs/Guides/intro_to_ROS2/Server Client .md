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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YURYTR2K%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDZmzh%2BfIeeMstvrhI34N8TP%2Besbky0WkVg4gJsfA0NRQIhAMQM5%2Bnd0h3ahklKLrguoO3vlIK3D3e2ESPs%2BOjA6qy%2FKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTNRKZr3%2BPs3rpRuEq3APn8NQNnZjDQJLZ4iEskp1xWe6KcX01aUTFwa9Njh2ZJA9M3FHQ4NVm52OB4QsD2vvUkzoLT2XSXIUDkIhnbN0mkqmsxjz8ad695lCfAoYiFhADopk65qMetcU8%2BkC6%2FRWk3IFHpkIdhVxIZDH%2FO2%2FjhLZhqkS2GZ1yRtwXuaJ7Ve7KeN5Cl0HumHAiTO3x6sLrPWGlvlASgw1iqu%2B3AEKqQEE7laFWBk%2F7r2jZi7IwsglPzk11JWA%2F1ibYuzQfiJVzIlW%2BUmv8LxBhWhWO1gRvrTnJnTbVMyy5okeVvqkoX2UAF2bGd74tvJy0HT3%2BxszP7G7kjYthko2IqmFRPHfSSJfmnvJBLcZeXRhYQ8XCJLYWBMpdqCwYnmLGHkSufygXUDa0cLu6f0C4Z7I%2FIln9P0%2Bvb4IGMuitlN3PI0CWr0bwPaVpeFdOYKbaHs1ADmYliS0n9cxPS9h%2FhoNOybFZqlsDrdOeCbn0WktbscA5X2cwUgBKwXWZUzpBgO%2BVD3oYp60AOWnh%2B3B0G0oKTYzMNDUQKXvCyTl7HbexSou0HTNcrnqDX8U5FPCwe%2Ba3WVyFDGUMMKeTJ8VB9%2FD522N7FjH9oDC%2BlLQu7BbN9FxUGClcQXhX7gLtZ2Ma5TCXu%2FS%2BBjqkAQFy7mjdUrn6%2FeD9e3hcSB%2BfkXWUKPImiyQ8pQBrLWWk5ppjrw1Lc0O9ixmMTlVksv8lLY8PhqsLER2JJ58nxHnnMr%2BWsSl8pPv1HJowV87su5oEol548Fw5hPnnkkjp%2Foh1pAQe%2Bfnylc5yX%2BhNaKi3tA3emnjGfKeRArgukQ%2Bk8kZkvs1eYPtisg0y6ypZIejC4XzM7HtSauYWTzmwfYHp49K3&X-Amz-Signature=0e4ee86902d9a2452e9a17fa24bed775087b432fbcd7ac6099bd02f563f3beab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YURYTR2K%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDZmzh%2BfIeeMstvrhI34N8TP%2Besbky0WkVg4gJsfA0NRQIhAMQM5%2Bnd0h3ahklKLrguoO3vlIK3D3e2ESPs%2BOjA6qy%2FKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTNRKZr3%2BPs3rpRuEq3APn8NQNnZjDQJLZ4iEskp1xWe6KcX01aUTFwa9Njh2ZJA9M3FHQ4NVm52OB4QsD2vvUkzoLT2XSXIUDkIhnbN0mkqmsxjz8ad695lCfAoYiFhADopk65qMetcU8%2BkC6%2FRWk3IFHpkIdhVxIZDH%2FO2%2FjhLZhqkS2GZ1yRtwXuaJ7Ve7KeN5Cl0HumHAiTO3x6sLrPWGlvlASgw1iqu%2B3AEKqQEE7laFWBk%2F7r2jZi7IwsglPzk11JWA%2F1ibYuzQfiJVzIlW%2BUmv8LxBhWhWO1gRvrTnJnTbVMyy5okeVvqkoX2UAF2bGd74tvJy0HT3%2BxszP7G7kjYthko2IqmFRPHfSSJfmnvJBLcZeXRhYQ8XCJLYWBMpdqCwYnmLGHkSufygXUDa0cLu6f0C4Z7I%2FIln9P0%2Bvb4IGMuitlN3PI0CWr0bwPaVpeFdOYKbaHs1ADmYliS0n9cxPS9h%2FhoNOybFZqlsDrdOeCbn0WktbscA5X2cwUgBKwXWZUzpBgO%2BVD3oYp60AOWnh%2B3B0G0oKTYzMNDUQKXvCyTl7HbexSou0HTNcrnqDX8U5FPCwe%2Ba3WVyFDGUMMKeTJ8VB9%2FD522N7FjH9oDC%2BlLQu7BbN9FxUGClcQXhX7gLtZ2Ma5TCXu%2FS%2BBjqkAQFy7mjdUrn6%2FeD9e3hcSB%2BfkXWUKPImiyQ8pQBrLWWk5ppjrw1Lc0O9ixmMTlVksv8lLY8PhqsLER2JJ58nxHnnMr%2BWsSl8pPv1HJowV87su5oEol548Fw5hPnnkkjp%2Foh1pAQe%2Bfnylc5yX%2BhNaKi3tA3emnjGfKeRArgukQ%2Bk8kZkvs1eYPtisg0y6ypZIejC4XzM7HtSauYWTzmwfYHp49K3&X-Amz-Signature=a9854807c91a633d9da9086cb090ab1f201e2b0b7decd0e5619591adcdafa582&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YURYTR2K%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDZmzh%2BfIeeMstvrhI34N8TP%2Besbky0WkVg4gJsfA0NRQIhAMQM5%2Bnd0h3ahklKLrguoO3vlIK3D3e2ESPs%2BOjA6qy%2FKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTNRKZr3%2BPs3rpRuEq3APn8NQNnZjDQJLZ4iEskp1xWe6KcX01aUTFwa9Njh2ZJA9M3FHQ4NVm52OB4QsD2vvUkzoLT2XSXIUDkIhnbN0mkqmsxjz8ad695lCfAoYiFhADopk65qMetcU8%2BkC6%2FRWk3IFHpkIdhVxIZDH%2FO2%2FjhLZhqkS2GZ1yRtwXuaJ7Ve7KeN5Cl0HumHAiTO3x6sLrPWGlvlASgw1iqu%2B3AEKqQEE7laFWBk%2F7r2jZi7IwsglPzk11JWA%2F1ibYuzQfiJVzIlW%2BUmv8LxBhWhWO1gRvrTnJnTbVMyy5okeVvqkoX2UAF2bGd74tvJy0HT3%2BxszP7G7kjYthko2IqmFRPHfSSJfmnvJBLcZeXRhYQ8XCJLYWBMpdqCwYnmLGHkSufygXUDa0cLu6f0C4Z7I%2FIln9P0%2Bvb4IGMuitlN3PI0CWr0bwPaVpeFdOYKbaHs1ADmYliS0n9cxPS9h%2FhoNOybFZqlsDrdOeCbn0WktbscA5X2cwUgBKwXWZUzpBgO%2BVD3oYp60AOWnh%2B3B0G0oKTYzMNDUQKXvCyTl7HbexSou0HTNcrnqDX8U5FPCwe%2Ba3WVyFDGUMMKeTJ8VB9%2FD522N7FjH9oDC%2BlLQu7BbN9FxUGClcQXhX7gLtZ2Ma5TCXu%2FS%2BBjqkAQFy7mjdUrn6%2FeD9e3hcSB%2BfkXWUKPImiyQ8pQBrLWWk5ppjrw1Lc0O9ixmMTlVksv8lLY8PhqsLER2JJ58nxHnnMr%2BWsSl8pPv1HJowV87su5oEol548Fw5hPnnkkjp%2Foh1pAQe%2Bfnylc5yX%2BhNaKi3tA3emnjGfKeRArgukQ%2Bk8kZkvs1eYPtisg0y6ypZIejC4XzM7HtSauYWTzmwfYHp49K3&X-Amz-Signature=0e5fea86126ba69b25f395c7db56dfd7bd74a756fa8c7a33a11897866a5e2a26&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YURYTR2K%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDZmzh%2BfIeeMstvrhI34N8TP%2Besbky0WkVg4gJsfA0NRQIhAMQM5%2Bnd0h3ahklKLrguoO3vlIK3D3e2ESPs%2BOjA6qy%2FKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTNRKZr3%2BPs3rpRuEq3APn8NQNnZjDQJLZ4iEskp1xWe6KcX01aUTFwa9Njh2ZJA9M3FHQ4NVm52OB4QsD2vvUkzoLT2XSXIUDkIhnbN0mkqmsxjz8ad695lCfAoYiFhADopk65qMetcU8%2BkC6%2FRWk3IFHpkIdhVxIZDH%2FO2%2FjhLZhqkS2GZ1yRtwXuaJ7Ve7KeN5Cl0HumHAiTO3x6sLrPWGlvlASgw1iqu%2B3AEKqQEE7laFWBk%2F7r2jZi7IwsglPzk11JWA%2F1ibYuzQfiJVzIlW%2BUmv8LxBhWhWO1gRvrTnJnTbVMyy5okeVvqkoX2UAF2bGd74tvJy0HT3%2BxszP7G7kjYthko2IqmFRPHfSSJfmnvJBLcZeXRhYQ8XCJLYWBMpdqCwYnmLGHkSufygXUDa0cLu6f0C4Z7I%2FIln9P0%2Bvb4IGMuitlN3PI0CWr0bwPaVpeFdOYKbaHs1ADmYliS0n9cxPS9h%2FhoNOybFZqlsDrdOeCbn0WktbscA5X2cwUgBKwXWZUzpBgO%2BVD3oYp60AOWnh%2B3B0G0oKTYzMNDUQKXvCyTl7HbexSou0HTNcrnqDX8U5FPCwe%2Ba3WVyFDGUMMKeTJ8VB9%2FD522N7FjH9oDC%2BlLQu7BbN9FxUGClcQXhX7gLtZ2Ma5TCXu%2FS%2BBjqkAQFy7mjdUrn6%2FeD9e3hcSB%2BfkXWUKPImiyQ8pQBrLWWk5ppjrw1Lc0O9ixmMTlVksv8lLY8PhqsLER2JJ58nxHnnMr%2BWsSl8pPv1HJowV87su5oEol548Fw5hPnnkkjp%2Foh1pAQe%2Bfnylc5yX%2BhNaKi3tA3emnjGfKeRArgukQ%2Bk8kZkvs1eYPtisg0y6ypZIejC4XzM7HtSauYWTzmwfYHp49K3&X-Amz-Signature=ac4b26cea56bbf9e2f4a296fd129655d91ddb58e2037d172200ff12d7e9d142d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YURYTR2K%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDZmzh%2BfIeeMstvrhI34N8TP%2Besbky0WkVg4gJsfA0NRQIhAMQM5%2Bnd0h3ahklKLrguoO3vlIK3D3e2ESPs%2BOjA6qy%2FKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTNRKZr3%2BPs3rpRuEq3APn8NQNnZjDQJLZ4iEskp1xWe6KcX01aUTFwa9Njh2ZJA9M3FHQ4NVm52OB4QsD2vvUkzoLT2XSXIUDkIhnbN0mkqmsxjz8ad695lCfAoYiFhADopk65qMetcU8%2BkC6%2FRWk3IFHpkIdhVxIZDH%2FO2%2FjhLZhqkS2GZ1yRtwXuaJ7Ve7KeN5Cl0HumHAiTO3x6sLrPWGlvlASgw1iqu%2B3AEKqQEE7laFWBk%2F7r2jZi7IwsglPzk11JWA%2F1ibYuzQfiJVzIlW%2BUmv8LxBhWhWO1gRvrTnJnTbVMyy5okeVvqkoX2UAF2bGd74tvJy0HT3%2BxszP7G7kjYthko2IqmFRPHfSSJfmnvJBLcZeXRhYQ8XCJLYWBMpdqCwYnmLGHkSufygXUDa0cLu6f0C4Z7I%2FIln9P0%2Bvb4IGMuitlN3PI0CWr0bwPaVpeFdOYKbaHs1ADmYliS0n9cxPS9h%2FhoNOybFZqlsDrdOeCbn0WktbscA5X2cwUgBKwXWZUzpBgO%2BVD3oYp60AOWnh%2B3B0G0oKTYzMNDUQKXvCyTl7HbexSou0HTNcrnqDX8U5FPCwe%2Ba3WVyFDGUMMKeTJ8VB9%2FD522N7FjH9oDC%2BlLQu7BbN9FxUGClcQXhX7gLtZ2Ma5TCXu%2FS%2BBjqkAQFy7mjdUrn6%2FeD9e3hcSB%2BfkXWUKPImiyQ8pQBrLWWk5ppjrw1Lc0O9ixmMTlVksv8lLY8PhqsLER2JJ58nxHnnMr%2BWsSl8pPv1HJowV87su5oEol548Fw5hPnnkkjp%2Foh1pAQe%2Bfnylc5yX%2BhNaKi3tA3emnjGfKeRArgukQ%2Bk8kZkvs1eYPtisg0y6ypZIejC4XzM7HtSauYWTzmwfYHp49K3&X-Amz-Signature=e41f2f2b7c83d1f79306102d67e191d43bf24c6b0e02af4cd3a0769c3dd9038c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
