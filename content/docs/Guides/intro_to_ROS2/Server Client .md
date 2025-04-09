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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RBV556A%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIHXQtSu0o%2BnGqvgM5Jasbp3GQIl1r%2FgWEBzMzOIEdsQ9AiAD01tjOm7qayvHqTQQou4WpkZQJoIky2ae5nXNHfWF0yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoZSaT5sQfK1haWN8KtwDnLr7oCTeU15xLXdvHJp%2F2R%2BGt7T5Q3u1jP1hZHUY%2FNE5joHBMWKcKlG8XPywadUMOTTj%2BSfHl7T26sgDeOlKRLG%2Bqk7gr5ItU2RMcm4C1KxXGw65w1S96AWLKwWOv0wRQIibXw85HM6qYdETxhUvlU%2BObQKbJlRLGQrX9Yd4mn%2FI%2FL3pMT9dHcd8p6FYBZq%2BDIW%2BHpvjGt3maAnGp7R6OOOZNw4K73jGWlZA9y1mfsknMSd94%2FnFIZP0y%2FaBchSyZBoBEs2X1n2aQTxYa%2Bd5xYjAeFWa55dEdQpz1lRqCk4p0l56qAtiBE68xeOg4U5dHdC5mdJJcxCbVg6LO8LFERA9mweDViKXOvBDc5YN7KBpp3kqIqWVejq1cuEYWaf5TuDnGtuJQ3Wpuqq9eTvFhuedjIDqM24gNTOFEBVGjDCiyVqv3LhoPECwkWxcko4hxvmsI1rG32kWsmpl1Xwo7XUsxDNTCYjyG4WWT3RQUE7OUrRDWc9XGwkbBTcqaBbL4UL8%2F2Rirmrshw8mIX9g3vjMa0FPiEpNZDLYJgkmXzbA45ZD0QrS0AQ8GRljS6BUvDe0VpTjJbVVWeA6QioAcSrt6Se56vXGX8DCdPPcFjyJTzEduPuqZKMf%2BsUwtPzYvwY6pgFuh%2BrkH9TPyGIxMgUMTPQVXCO1Ux2PBeGHc5pFoZfYqHleuSiClEJPF9FCl9c8zqddhCz43%2BW8JK0y%2BLcELY65UM2eiCTPzEEXq5T7Ngol5xJryxf%2FJmoJEx29Xs6G%2FlDxeCpEkI%2B6LwioRaefguVraKaOBzslg%2BXS20SCpjxwwgswENtjqA6dlnUgqiPG1uqxnppqGAgfB2%2Fq6VxZW%2B1Q5G%2FXcQ9N&X-Amz-Signature=4f97daf083097132ce082ec7191e2710c8dd08dbe9b289b66306b3e4cace86a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RBV556A%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIHXQtSu0o%2BnGqvgM5Jasbp3GQIl1r%2FgWEBzMzOIEdsQ9AiAD01tjOm7qayvHqTQQou4WpkZQJoIky2ae5nXNHfWF0yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoZSaT5sQfK1haWN8KtwDnLr7oCTeU15xLXdvHJp%2F2R%2BGt7T5Q3u1jP1hZHUY%2FNE5joHBMWKcKlG8XPywadUMOTTj%2BSfHl7T26sgDeOlKRLG%2Bqk7gr5ItU2RMcm4C1KxXGw65w1S96AWLKwWOv0wRQIibXw85HM6qYdETxhUvlU%2BObQKbJlRLGQrX9Yd4mn%2FI%2FL3pMT9dHcd8p6FYBZq%2BDIW%2BHpvjGt3maAnGp7R6OOOZNw4K73jGWlZA9y1mfsknMSd94%2FnFIZP0y%2FaBchSyZBoBEs2X1n2aQTxYa%2Bd5xYjAeFWa55dEdQpz1lRqCk4p0l56qAtiBE68xeOg4U5dHdC5mdJJcxCbVg6LO8LFERA9mweDViKXOvBDc5YN7KBpp3kqIqWVejq1cuEYWaf5TuDnGtuJQ3Wpuqq9eTvFhuedjIDqM24gNTOFEBVGjDCiyVqv3LhoPECwkWxcko4hxvmsI1rG32kWsmpl1Xwo7XUsxDNTCYjyG4WWT3RQUE7OUrRDWc9XGwkbBTcqaBbL4UL8%2F2Rirmrshw8mIX9g3vjMa0FPiEpNZDLYJgkmXzbA45ZD0QrS0AQ8GRljS6BUvDe0VpTjJbVVWeA6QioAcSrt6Se56vXGX8DCdPPcFjyJTzEduPuqZKMf%2BsUwtPzYvwY6pgFuh%2BrkH9TPyGIxMgUMTPQVXCO1Ux2PBeGHc5pFoZfYqHleuSiClEJPF9FCl9c8zqddhCz43%2BW8JK0y%2BLcELY65UM2eiCTPzEEXq5T7Ngol5xJryxf%2FJmoJEx29Xs6G%2FlDxeCpEkI%2B6LwioRaefguVraKaOBzslg%2BXS20SCpjxwwgswENtjqA6dlnUgqiPG1uqxnppqGAgfB2%2Fq6VxZW%2B1Q5G%2FXcQ9N&X-Amz-Signature=c99787ddeec4c975994c28e8807d304ce671de5e16708ccf67384c11a105d375&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RBV556A%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIHXQtSu0o%2BnGqvgM5Jasbp3GQIl1r%2FgWEBzMzOIEdsQ9AiAD01tjOm7qayvHqTQQou4WpkZQJoIky2ae5nXNHfWF0yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoZSaT5sQfK1haWN8KtwDnLr7oCTeU15xLXdvHJp%2F2R%2BGt7T5Q3u1jP1hZHUY%2FNE5joHBMWKcKlG8XPywadUMOTTj%2BSfHl7T26sgDeOlKRLG%2Bqk7gr5ItU2RMcm4C1KxXGw65w1S96AWLKwWOv0wRQIibXw85HM6qYdETxhUvlU%2BObQKbJlRLGQrX9Yd4mn%2FI%2FL3pMT9dHcd8p6FYBZq%2BDIW%2BHpvjGt3maAnGp7R6OOOZNw4K73jGWlZA9y1mfsknMSd94%2FnFIZP0y%2FaBchSyZBoBEs2X1n2aQTxYa%2Bd5xYjAeFWa55dEdQpz1lRqCk4p0l56qAtiBE68xeOg4U5dHdC5mdJJcxCbVg6LO8LFERA9mweDViKXOvBDc5YN7KBpp3kqIqWVejq1cuEYWaf5TuDnGtuJQ3Wpuqq9eTvFhuedjIDqM24gNTOFEBVGjDCiyVqv3LhoPECwkWxcko4hxvmsI1rG32kWsmpl1Xwo7XUsxDNTCYjyG4WWT3RQUE7OUrRDWc9XGwkbBTcqaBbL4UL8%2F2Rirmrshw8mIX9g3vjMa0FPiEpNZDLYJgkmXzbA45ZD0QrS0AQ8GRljS6BUvDe0VpTjJbVVWeA6QioAcSrt6Se56vXGX8DCdPPcFjyJTzEduPuqZKMf%2BsUwtPzYvwY6pgFuh%2BrkH9TPyGIxMgUMTPQVXCO1Ux2PBeGHc5pFoZfYqHleuSiClEJPF9FCl9c8zqddhCz43%2BW8JK0y%2BLcELY65UM2eiCTPzEEXq5T7Ngol5xJryxf%2FJmoJEx29Xs6G%2FlDxeCpEkI%2B6LwioRaefguVraKaOBzslg%2BXS20SCpjxwwgswENtjqA6dlnUgqiPG1uqxnppqGAgfB2%2Fq6VxZW%2B1Q5G%2FXcQ9N&X-Amz-Signature=2a8296c4891467563d0b27009b939028e79a820b4ea9ce7df953785d053a16e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RBV556A%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIHXQtSu0o%2BnGqvgM5Jasbp3GQIl1r%2FgWEBzMzOIEdsQ9AiAD01tjOm7qayvHqTQQou4WpkZQJoIky2ae5nXNHfWF0yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoZSaT5sQfK1haWN8KtwDnLr7oCTeU15xLXdvHJp%2F2R%2BGt7T5Q3u1jP1hZHUY%2FNE5joHBMWKcKlG8XPywadUMOTTj%2BSfHl7T26sgDeOlKRLG%2Bqk7gr5ItU2RMcm4C1KxXGw65w1S96AWLKwWOv0wRQIibXw85HM6qYdETxhUvlU%2BObQKbJlRLGQrX9Yd4mn%2FI%2FL3pMT9dHcd8p6FYBZq%2BDIW%2BHpvjGt3maAnGp7R6OOOZNw4K73jGWlZA9y1mfsknMSd94%2FnFIZP0y%2FaBchSyZBoBEs2X1n2aQTxYa%2Bd5xYjAeFWa55dEdQpz1lRqCk4p0l56qAtiBE68xeOg4U5dHdC5mdJJcxCbVg6LO8LFERA9mweDViKXOvBDc5YN7KBpp3kqIqWVejq1cuEYWaf5TuDnGtuJQ3Wpuqq9eTvFhuedjIDqM24gNTOFEBVGjDCiyVqv3LhoPECwkWxcko4hxvmsI1rG32kWsmpl1Xwo7XUsxDNTCYjyG4WWT3RQUE7OUrRDWc9XGwkbBTcqaBbL4UL8%2F2Rirmrshw8mIX9g3vjMa0FPiEpNZDLYJgkmXzbA45ZD0QrS0AQ8GRljS6BUvDe0VpTjJbVVWeA6QioAcSrt6Se56vXGX8DCdPPcFjyJTzEduPuqZKMf%2BsUwtPzYvwY6pgFuh%2BrkH9TPyGIxMgUMTPQVXCO1Ux2PBeGHc5pFoZfYqHleuSiClEJPF9FCl9c8zqddhCz43%2BW8JK0y%2BLcELY65UM2eiCTPzEEXq5T7Ngol5xJryxf%2FJmoJEx29Xs6G%2FlDxeCpEkI%2B6LwioRaefguVraKaOBzslg%2BXS20SCpjxwwgswENtjqA6dlnUgqiPG1uqxnppqGAgfB2%2Fq6VxZW%2B1Q5G%2FXcQ9N&X-Amz-Signature=b823249cd549aaff5f2483fedb70a7aa6931ccd5f143aa5f1579c524a03e2a55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RBV556A%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIHXQtSu0o%2BnGqvgM5Jasbp3GQIl1r%2FgWEBzMzOIEdsQ9AiAD01tjOm7qayvHqTQQou4WpkZQJoIky2ae5nXNHfWF0yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoZSaT5sQfK1haWN8KtwDnLr7oCTeU15xLXdvHJp%2F2R%2BGt7T5Q3u1jP1hZHUY%2FNE5joHBMWKcKlG8XPywadUMOTTj%2BSfHl7T26sgDeOlKRLG%2Bqk7gr5ItU2RMcm4C1KxXGw65w1S96AWLKwWOv0wRQIibXw85HM6qYdETxhUvlU%2BObQKbJlRLGQrX9Yd4mn%2FI%2FL3pMT9dHcd8p6FYBZq%2BDIW%2BHpvjGt3maAnGp7R6OOOZNw4K73jGWlZA9y1mfsknMSd94%2FnFIZP0y%2FaBchSyZBoBEs2X1n2aQTxYa%2Bd5xYjAeFWa55dEdQpz1lRqCk4p0l56qAtiBE68xeOg4U5dHdC5mdJJcxCbVg6LO8LFERA9mweDViKXOvBDc5YN7KBpp3kqIqWVejq1cuEYWaf5TuDnGtuJQ3Wpuqq9eTvFhuedjIDqM24gNTOFEBVGjDCiyVqv3LhoPECwkWxcko4hxvmsI1rG32kWsmpl1Xwo7XUsxDNTCYjyG4WWT3RQUE7OUrRDWc9XGwkbBTcqaBbL4UL8%2F2Rirmrshw8mIX9g3vjMa0FPiEpNZDLYJgkmXzbA45ZD0QrS0AQ8GRljS6BUvDe0VpTjJbVVWeA6QioAcSrt6Se56vXGX8DCdPPcFjyJTzEduPuqZKMf%2BsUwtPzYvwY6pgFuh%2BrkH9TPyGIxMgUMTPQVXCO1Ux2PBeGHc5pFoZfYqHleuSiClEJPF9FCl9c8zqddhCz43%2BW8JK0y%2BLcELY65UM2eiCTPzEEXq5T7Ngol5xJryxf%2FJmoJEx29Xs6G%2FlDxeCpEkI%2B6LwioRaefguVraKaOBzslg%2BXS20SCpjxwwgswENtjqA6dlnUgqiPG1uqxnppqGAgfB2%2Fq6VxZW%2B1Q5G%2FXcQ9N&X-Amz-Signature=df115dbe37eaec6422ffa9f75246032ec295d8dab42caf602c40e3790aa48584&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
