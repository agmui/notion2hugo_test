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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U6QTETE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs9wBv6zrCSh2n4pVaOfTND9o%2Fk6VjQOie7a1elNbsuwIhAKO7d65Cw1XkmU3LN%2BcMJkseB1CGrSzsV3U%2BGZEyhE9GKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPeXXLHuianIvoWsoq3ANzXY2FyQterz%2BY2fSwtk%2Fr59%2Ft1ju3QVuI6azjJ5zCsxrRfwc4EWwsWImMRpPQ5Mc2UThWWQKe001vkWGX58dNjpm3ZEImnzzQFWUwyazvcSxrFSo7h%2BgksjK1g6k0qrhFcqkznKYpHae%2FgC%2FhHqUu%2Fry7NyuULSy10J8tHjOZ25FflztN8Zlxmnh1iW4ppfJcDvxpcfweqvtHNgUuFPf5LVnbONnYLDATZnTsHW3sehLGupRv%2F56cbF3flVzMst8JD%2FiJBfW4%2FcSnGJFLTpcZ0nRRNPMHmWQ0SGMBfVjOdnNTKRV%2BqXg%2Flny57is819TJRZKIW0IldFQOiwDrCssGbShLGw4aqrZjGmCPPnOMR2vmfcWkt2l2jlytB5NHCS2qkJ1neTC%2Fe0kbnC%2Bg17B14cA7CIF8WUAgw9oXsXC6gSGj%2B9sWSorcbwUZKq6UDGNQrV8vQceRSwXKzKzI2Wb5I0Y23Wt48XyataRL7%2FMJo4UtBIOIIczyi8t0TlGJ8P%2B2qZGo5Phmz%2BcW2Kp03wBJwa8OzJr4EJ1pAG7hgfli4Ta7X%2BMMLIbV7W4iy4jZgugj8Xq7fXoyDbcxhDG77q1W%2BuDepfdyzS2AIgITPaUGgQP1O3EDRtCs6lLBlDDpx%2FbDBjqkAZ%2BIui0uogIi6keGZUE2ApeWvu%2BB9uVC7TiUJNsxHTr%2FEq0BPaju%2BbUy1HJvIiaixnz1AhJQmtEqCCw8fiIvoGYG2sCJnos%2F4A%2FjQsMS6lERh9aiz7AEZhwkLIfCfjMt638NSsHw5TYeB52sDZ7S5jkxrO0CwZLls8iqM%2Bi8kCRoKK7KpFdaZKraLZqYHmhdHkJHSliyxnU8RUk5yOqnQDr4a3w7&X-Amz-Signature=c6f0fca4902ec9cdb191eabe31fc082e906aaaf2d1b51f1157d70e6a71d41e8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U6QTETE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs9wBv6zrCSh2n4pVaOfTND9o%2Fk6VjQOie7a1elNbsuwIhAKO7d65Cw1XkmU3LN%2BcMJkseB1CGrSzsV3U%2BGZEyhE9GKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPeXXLHuianIvoWsoq3ANzXY2FyQterz%2BY2fSwtk%2Fr59%2Ft1ju3QVuI6azjJ5zCsxrRfwc4EWwsWImMRpPQ5Mc2UThWWQKe001vkWGX58dNjpm3ZEImnzzQFWUwyazvcSxrFSo7h%2BgksjK1g6k0qrhFcqkznKYpHae%2FgC%2FhHqUu%2Fry7NyuULSy10J8tHjOZ25FflztN8Zlxmnh1iW4ppfJcDvxpcfweqvtHNgUuFPf5LVnbONnYLDATZnTsHW3sehLGupRv%2F56cbF3flVzMst8JD%2FiJBfW4%2FcSnGJFLTpcZ0nRRNPMHmWQ0SGMBfVjOdnNTKRV%2BqXg%2Flny57is819TJRZKIW0IldFQOiwDrCssGbShLGw4aqrZjGmCPPnOMR2vmfcWkt2l2jlytB5NHCS2qkJ1neTC%2Fe0kbnC%2Bg17B14cA7CIF8WUAgw9oXsXC6gSGj%2B9sWSorcbwUZKq6UDGNQrV8vQceRSwXKzKzI2Wb5I0Y23Wt48XyataRL7%2FMJo4UtBIOIIczyi8t0TlGJ8P%2B2qZGo5Phmz%2BcW2Kp03wBJwa8OzJr4EJ1pAG7hgfli4Ta7X%2BMMLIbV7W4iy4jZgugj8Xq7fXoyDbcxhDG77q1W%2BuDepfdyzS2AIgITPaUGgQP1O3EDRtCs6lLBlDDpx%2FbDBjqkAZ%2BIui0uogIi6keGZUE2ApeWvu%2BB9uVC7TiUJNsxHTr%2FEq0BPaju%2BbUy1HJvIiaixnz1AhJQmtEqCCw8fiIvoGYG2sCJnos%2F4A%2FjQsMS6lERh9aiz7AEZhwkLIfCfjMt638NSsHw5TYeB52sDZ7S5jkxrO0CwZLls8iqM%2Bi8kCRoKK7KpFdaZKraLZqYHmhdHkJHSliyxnU8RUk5yOqnQDr4a3w7&X-Amz-Signature=f1bfad5ac2ede9bf2e8f5a4d15e7ff2689b6b74b3d46a7e88d4d51f504ee8e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U6QTETE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs9wBv6zrCSh2n4pVaOfTND9o%2Fk6VjQOie7a1elNbsuwIhAKO7d65Cw1XkmU3LN%2BcMJkseB1CGrSzsV3U%2BGZEyhE9GKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPeXXLHuianIvoWsoq3ANzXY2FyQterz%2BY2fSwtk%2Fr59%2Ft1ju3QVuI6azjJ5zCsxrRfwc4EWwsWImMRpPQ5Mc2UThWWQKe001vkWGX58dNjpm3ZEImnzzQFWUwyazvcSxrFSo7h%2BgksjK1g6k0qrhFcqkznKYpHae%2FgC%2FhHqUu%2Fry7NyuULSy10J8tHjOZ25FflztN8Zlxmnh1iW4ppfJcDvxpcfweqvtHNgUuFPf5LVnbONnYLDATZnTsHW3sehLGupRv%2F56cbF3flVzMst8JD%2FiJBfW4%2FcSnGJFLTpcZ0nRRNPMHmWQ0SGMBfVjOdnNTKRV%2BqXg%2Flny57is819TJRZKIW0IldFQOiwDrCssGbShLGw4aqrZjGmCPPnOMR2vmfcWkt2l2jlytB5NHCS2qkJ1neTC%2Fe0kbnC%2Bg17B14cA7CIF8WUAgw9oXsXC6gSGj%2B9sWSorcbwUZKq6UDGNQrV8vQceRSwXKzKzI2Wb5I0Y23Wt48XyataRL7%2FMJo4UtBIOIIczyi8t0TlGJ8P%2B2qZGo5Phmz%2BcW2Kp03wBJwa8OzJr4EJ1pAG7hgfli4Ta7X%2BMMLIbV7W4iy4jZgugj8Xq7fXoyDbcxhDG77q1W%2BuDepfdyzS2AIgITPaUGgQP1O3EDRtCs6lLBlDDpx%2FbDBjqkAZ%2BIui0uogIi6keGZUE2ApeWvu%2BB9uVC7TiUJNsxHTr%2FEq0BPaju%2BbUy1HJvIiaixnz1AhJQmtEqCCw8fiIvoGYG2sCJnos%2F4A%2FjQsMS6lERh9aiz7AEZhwkLIfCfjMt638NSsHw5TYeB52sDZ7S5jkxrO0CwZLls8iqM%2Bi8kCRoKK7KpFdaZKraLZqYHmhdHkJHSliyxnU8RUk5yOqnQDr4a3w7&X-Amz-Signature=03a889981458d9659498ccfa70acfecca462a9f5f7dba6a324f3f91440afbbdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U6QTETE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs9wBv6zrCSh2n4pVaOfTND9o%2Fk6VjQOie7a1elNbsuwIhAKO7d65Cw1XkmU3LN%2BcMJkseB1CGrSzsV3U%2BGZEyhE9GKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPeXXLHuianIvoWsoq3ANzXY2FyQterz%2BY2fSwtk%2Fr59%2Ft1ju3QVuI6azjJ5zCsxrRfwc4EWwsWImMRpPQ5Mc2UThWWQKe001vkWGX58dNjpm3ZEImnzzQFWUwyazvcSxrFSo7h%2BgksjK1g6k0qrhFcqkznKYpHae%2FgC%2FhHqUu%2Fry7NyuULSy10J8tHjOZ25FflztN8Zlxmnh1iW4ppfJcDvxpcfweqvtHNgUuFPf5LVnbONnYLDATZnTsHW3sehLGupRv%2F56cbF3flVzMst8JD%2FiJBfW4%2FcSnGJFLTpcZ0nRRNPMHmWQ0SGMBfVjOdnNTKRV%2BqXg%2Flny57is819TJRZKIW0IldFQOiwDrCssGbShLGw4aqrZjGmCPPnOMR2vmfcWkt2l2jlytB5NHCS2qkJ1neTC%2Fe0kbnC%2Bg17B14cA7CIF8WUAgw9oXsXC6gSGj%2B9sWSorcbwUZKq6UDGNQrV8vQceRSwXKzKzI2Wb5I0Y23Wt48XyataRL7%2FMJo4UtBIOIIczyi8t0TlGJ8P%2B2qZGo5Phmz%2BcW2Kp03wBJwa8OzJr4EJ1pAG7hgfli4Ta7X%2BMMLIbV7W4iy4jZgugj8Xq7fXoyDbcxhDG77q1W%2BuDepfdyzS2AIgITPaUGgQP1O3EDRtCs6lLBlDDpx%2FbDBjqkAZ%2BIui0uogIi6keGZUE2ApeWvu%2BB9uVC7TiUJNsxHTr%2FEq0BPaju%2BbUy1HJvIiaixnz1AhJQmtEqCCw8fiIvoGYG2sCJnos%2F4A%2FjQsMS6lERh9aiz7AEZhwkLIfCfjMt638NSsHw5TYeB52sDZ7S5jkxrO0CwZLls8iqM%2Bi8kCRoKK7KpFdaZKraLZqYHmhdHkJHSliyxnU8RUk5yOqnQDr4a3w7&X-Amz-Signature=863e40dc09dd3353863e256bc1b57a4ac7f733e2ea041fddd2e392bfc3dd693b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U6QTETE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs9wBv6zrCSh2n4pVaOfTND9o%2Fk6VjQOie7a1elNbsuwIhAKO7d65Cw1XkmU3LN%2BcMJkseB1CGrSzsV3U%2BGZEyhE9GKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPeXXLHuianIvoWsoq3ANzXY2FyQterz%2BY2fSwtk%2Fr59%2Ft1ju3QVuI6azjJ5zCsxrRfwc4EWwsWImMRpPQ5Mc2UThWWQKe001vkWGX58dNjpm3ZEImnzzQFWUwyazvcSxrFSo7h%2BgksjK1g6k0qrhFcqkznKYpHae%2FgC%2FhHqUu%2Fry7NyuULSy10J8tHjOZ25FflztN8Zlxmnh1iW4ppfJcDvxpcfweqvtHNgUuFPf5LVnbONnYLDATZnTsHW3sehLGupRv%2F56cbF3flVzMst8JD%2FiJBfW4%2FcSnGJFLTpcZ0nRRNPMHmWQ0SGMBfVjOdnNTKRV%2BqXg%2Flny57is819TJRZKIW0IldFQOiwDrCssGbShLGw4aqrZjGmCPPnOMR2vmfcWkt2l2jlytB5NHCS2qkJ1neTC%2Fe0kbnC%2Bg17B14cA7CIF8WUAgw9oXsXC6gSGj%2B9sWSorcbwUZKq6UDGNQrV8vQceRSwXKzKzI2Wb5I0Y23Wt48XyataRL7%2FMJo4UtBIOIIczyi8t0TlGJ8P%2B2qZGo5Phmz%2BcW2Kp03wBJwa8OzJr4EJ1pAG7hgfli4Ta7X%2BMMLIbV7W4iy4jZgugj8Xq7fXoyDbcxhDG77q1W%2BuDepfdyzS2AIgITPaUGgQP1O3EDRtCs6lLBlDDpx%2FbDBjqkAZ%2BIui0uogIi6keGZUE2ApeWvu%2BB9uVC7TiUJNsxHTr%2FEq0BPaju%2BbUy1HJvIiaixnz1AhJQmtEqCCw8fiIvoGYG2sCJnos%2F4A%2FjQsMS6lERh9aiz7AEZhwkLIfCfjMt638NSsHw5TYeB52sDZ7S5jkxrO0CwZLls8iqM%2Bi8kCRoKK7KpFdaZKraLZqYHmhdHkJHSliyxnU8RUk5yOqnQDr4a3w7&X-Amz-Signature=5547cda97777233c6419ec674f7f6c71386b0b2201beb4a821a862165c073ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
