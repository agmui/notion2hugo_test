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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNZZJG7H%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW6L%2BY7nj475y44HlUaXGb8ULwozqHLUGv6e9Cvkku8QIgaefckPshSQuU63U%2B9nNj7Fc%2FkCNlg28ZzY2UfXLWrKcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDLpLZnNe1OCLbbRaRCrcA0p6AsGiPCMfBbFBxDYGwx%2BPCsBTDXjuF23qTOU%2BsKJqM75Pfuq9U%2F%2BvTzg7iWpUpiY8xzRvovK4LnAq3xIQq6fU5R44FxcLpD9bdbieTgpHJ4MJRExcezAXjX5peIRvj70yg4lBW%2F2GM8sVZKB0a0Qlv5v7qvVUyEeHJhqTfcY10KTi9TVXEZnDseQINvZjiEn1O1HaohrNvntnaXWG7UppOkJ3AUhVc8m2xIxxoC7rDFyCYSvNcPOiu6nDIlhjHBex%2FpAwEDj%2B8fMxQgUlGu3GIn1jODIAwxwJBN%2F6U4%2BHoZEQajoQc1F52o2Tt1koEQ2zW96ygKiMtXyx%2BuILfptcq3Hr01nj6ERgog7ldcRr1H7kA6YEibk0CRK%2BTWbP54uuAnpg6ZRX3CU573WL0B6BsvVakYeplXjztq1LGYoG5SJKxNTatSOkArkeJNB2mOJdeVuIQYLIjRBZKXx5%2Fmp96yoH1bvNLMG27%2BNMkw0v4xLucLI7fqujDIwpNui%2BGpfDfUPB7yt98g8vPueJH1H0fnYN5voR1qpoStDkIQiBQOcJBVqLAbQva58me8u2XpHVEB%2FRa8HeVKJ9Vv0ZSBLSH%2B7Lubz6zFGX7t6DnfdlUjHFeYcs%2BF1UfuzHMMHXuMAGOqUBwSWva7XLY0yj3Z%2B729az9b107%2BemAq8Sv1zrJxeRvd4%2F0V%2Bed8nhCe4AvV77fahuySqiBGXw2b7SPtvz08E87BVRlgQp97TbrktYLZkRLfpRqvPdf9kcwMvMySlw2V3iBAlHU8UTJxN8br7l99eYC2xGRybRbGZleBxhg0CObnHqFMbYVzmW9GYbfNcRoSYSUjhXP6hEv39ZuM3fHW2Zrhg%2FVNz7&X-Amz-Signature=0bebcf5e313fcba4ccfceabc3418f102b4aee96d08d09d2723c1525186285bf5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNZZJG7H%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW6L%2BY7nj475y44HlUaXGb8ULwozqHLUGv6e9Cvkku8QIgaefckPshSQuU63U%2B9nNj7Fc%2FkCNlg28ZzY2UfXLWrKcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDLpLZnNe1OCLbbRaRCrcA0p6AsGiPCMfBbFBxDYGwx%2BPCsBTDXjuF23qTOU%2BsKJqM75Pfuq9U%2F%2BvTzg7iWpUpiY8xzRvovK4LnAq3xIQq6fU5R44FxcLpD9bdbieTgpHJ4MJRExcezAXjX5peIRvj70yg4lBW%2F2GM8sVZKB0a0Qlv5v7qvVUyEeHJhqTfcY10KTi9TVXEZnDseQINvZjiEn1O1HaohrNvntnaXWG7UppOkJ3AUhVc8m2xIxxoC7rDFyCYSvNcPOiu6nDIlhjHBex%2FpAwEDj%2B8fMxQgUlGu3GIn1jODIAwxwJBN%2F6U4%2BHoZEQajoQc1F52o2Tt1koEQ2zW96ygKiMtXyx%2BuILfptcq3Hr01nj6ERgog7ldcRr1H7kA6YEibk0CRK%2BTWbP54uuAnpg6ZRX3CU573WL0B6BsvVakYeplXjztq1LGYoG5SJKxNTatSOkArkeJNB2mOJdeVuIQYLIjRBZKXx5%2Fmp96yoH1bvNLMG27%2BNMkw0v4xLucLI7fqujDIwpNui%2BGpfDfUPB7yt98g8vPueJH1H0fnYN5voR1qpoStDkIQiBQOcJBVqLAbQva58me8u2XpHVEB%2FRa8HeVKJ9Vv0ZSBLSH%2B7Lubz6zFGX7t6DnfdlUjHFeYcs%2BF1UfuzHMMHXuMAGOqUBwSWva7XLY0yj3Z%2B729az9b107%2BemAq8Sv1zrJxeRvd4%2F0V%2Bed8nhCe4AvV77fahuySqiBGXw2b7SPtvz08E87BVRlgQp97TbrktYLZkRLfpRqvPdf9kcwMvMySlw2V3iBAlHU8UTJxN8br7l99eYC2xGRybRbGZleBxhg0CObnHqFMbYVzmW9GYbfNcRoSYSUjhXP6hEv39ZuM3fHW2Zrhg%2FVNz7&X-Amz-Signature=bbb185ce51bbeeceaa42efe0883d7a5192583c6b55eb7ddc43149ee7f6d33ed1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNZZJG7H%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW6L%2BY7nj475y44HlUaXGb8ULwozqHLUGv6e9Cvkku8QIgaefckPshSQuU63U%2B9nNj7Fc%2FkCNlg28ZzY2UfXLWrKcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDLpLZnNe1OCLbbRaRCrcA0p6AsGiPCMfBbFBxDYGwx%2BPCsBTDXjuF23qTOU%2BsKJqM75Pfuq9U%2F%2BvTzg7iWpUpiY8xzRvovK4LnAq3xIQq6fU5R44FxcLpD9bdbieTgpHJ4MJRExcezAXjX5peIRvj70yg4lBW%2F2GM8sVZKB0a0Qlv5v7qvVUyEeHJhqTfcY10KTi9TVXEZnDseQINvZjiEn1O1HaohrNvntnaXWG7UppOkJ3AUhVc8m2xIxxoC7rDFyCYSvNcPOiu6nDIlhjHBex%2FpAwEDj%2B8fMxQgUlGu3GIn1jODIAwxwJBN%2F6U4%2BHoZEQajoQc1F52o2Tt1koEQ2zW96ygKiMtXyx%2BuILfptcq3Hr01nj6ERgog7ldcRr1H7kA6YEibk0CRK%2BTWbP54uuAnpg6ZRX3CU573WL0B6BsvVakYeplXjztq1LGYoG5SJKxNTatSOkArkeJNB2mOJdeVuIQYLIjRBZKXx5%2Fmp96yoH1bvNLMG27%2BNMkw0v4xLucLI7fqujDIwpNui%2BGpfDfUPB7yt98g8vPueJH1H0fnYN5voR1qpoStDkIQiBQOcJBVqLAbQva58me8u2XpHVEB%2FRa8HeVKJ9Vv0ZSBLSH%2B7Lubz6zFGX7t6DnfdlUjHFeYcs%2BF1UfuzHMMHXuMAGOqUBwSWva7XLY0yj3Z%2B729az9b107%2BemAq8Sv1zrJxeRvd4%2F0V%2Bed8nhCe4AvV77fahuySqiBGXw2b7SPtvz08E87BVRlgQp97TbrktYLZkRLfpRqvPdf9kcwMvMySlw2V3iBAlHU8UTJxN8br7l99eYC2xGRybRbGZleBxhg0CObnHqFMbYVzmW9GYbfNcRoSYSUjhXP6hEv39ZuM3fHW2Zrhg%2FVNz7&X-Amz-Signature=7e6ce1bdf1bc8aa41048ba8f714116582eb51eb8f5fad1fc1700573e1b149c35&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNZZJG7H%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW6L%2BY7nj475y44HlUaXGb8ULwozqHLUGv6e9Cvkku8QIgaefckPshSQuU63U%2B9nNj7Fc%2FkCNlg28ZzY2UfXLWrKcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDLpLZnNe1OCLbbRaRCrcA0p6AsGiPCMfBbFBxDYGwx%2BPCsBTDXjuF23qTOU%2BsKJqM75Pfuq9U%2F%2BvTzg7iWpUpiY8xzRvovK4LnAq3xIQq6fU5R44FxcLpD9bdbieTgpHJ4MJRExcezAXjX5peIRvj70yg4lBW%2F2GM8sVZKB0a0Qlv5v7qvVUyEeHJhqTfcY10KTi9TVXEZnDseQINvZjiEn1O1HaohrNvntnaXWG7UppOkJ3AUhVc8m2xIxxoC7rDFyCYSvNcPOiu6nDIlhjHBex%2FpAwEDj%2B8fMxQgUlGu3GIn1jODIAwxwJBN%2F6U4%2BHoZEQajoQc1F52o2Tt1koEQ2zW96ygKiMtXyx%2BuILfptcq3Hr01nj6ERgog7ldcRr1H7kA6YEibk0CRK%2BTWbP54uuAnpg6ZRX3CU573WL0B6BsvVakYeplXjztq1LGYoG5SJKxNTatSOkArkeJNB2mOJdeVuIQYLIjRBZKXx5%2Fmp96yoH1bvNLMG27%2BNMkw0v4xLucLI7fqujDIwpNui%2BGpfDfUPB7yt98g8vPueJH1H0fnYN5voR1qpoStDkIQiBQOcJBVqLAbQva58me8u2XpHVEB%2FRa8HeVKJ9Vv0ZSBLSH%2B7Lubz6zFGX7t6DnfdlUjHFeYcs%2BF1UfuzHMMHXuMAGOqUBwSWva7XLY0yj3Z%2B729az9b107%2BemAq8Sv1zrJxeRvd4%2F0V%2Bed8nhCe4AvV77fahuySqiBGXw2b7SPtvz08E87BVRlgQp97TbrktYLZkRLfpRqvPdf9kcwMvMySlw2V3iBAlHU8UTJxN8br7l99eYC2xGRybRbGZleBxhg0CObnHqFMbYVzmW9GYbfNcRoSYSUjhXP6hEv39ZuM3fHW2Zrhg%2FVNz7&X-Amz-Signature=7762f4d4c3c7b5764bf7c0d58c48a9a79ff44a593e6bdc325136e5da62ae109d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNZZJG7H%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW6L%2BY7nj475y44HlUaXGb8ULwozqHLUGv6e9Cvkku8QIgaefckPshSQuU63U%2B9nNj7Fc%2FkCNlg28ZzY2UfXLWrKcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDLpLZnNe1OCLbbRaRCrcA0p6AsGiPCMfBbFBxDYGwx%2BPCsBTDXjuF23qTOU%2BsKJqM75Pfuq9U%2F%2BvTzg7iWpUpiY8xzRvovK4LnAq3xIQq6fU5R44FxcLpD9bdbieTgpHJ4MJRExcezAXjX5peIRvj70yg4lBW%2F2GM8sVZKB0a0Qlv5v7qvVUyEeHJhqTfcY10KTi9TVXEZnDseQINvZjiEn1O1HaohrNvntnaXWG7UppOkJ3AUhVc8m2xIxxoC7rDFyCYSvNcPOiu6nDIlhjHBex%2FpAwEDj%2B8fMxQgUlGu3GIn1jODIAwxwJBN%2F6U4%2BHoZEQajoQc1F52o2Tt1koEQ2zW96ygKiMtXyx%2BuILfptcq3Hr01nj6ERgog7ldcRr1H7kA6YEibk0CRK%2BTWbP54uuAnpg6ZRX3CU573WL0B6BsvVakYeplXjztq1LGYoG5SJKxNTatSOkArkeJNB2mOJdeVuIQYLIjRBZKXx5%2Fmp96yoH1bvNLMG27%2BNMkw0v4xLucLI7fqujDIwpNui%2BGpfDfUPB7yt98g8vPueJH1H0fnYN5voR1qpoStDkIQiBQOcJBVqLAbQva58me8u2XpHVEB%2FRa8HeVKJ9Vv0ZSBLSH%2B7Lubz6zFGX7t6DnfdlUjHFeYcs%2BF1UfuzHMMHXuMAGOqUBwSWva7XLY0yj3Z%2B729az9b107%2BemAq8Sv1zrJxeRvd4%2F0V%2Bed8nhCe4AvV77fahuySqiBGXw2b7SPtvz08E87BVRlgQp97TbrktYLZkRLfpRqvPdf9kcwMvMySlw2V3iBAlHU8UTJxN8br7l99eYC2xGRybRbGZleBxhg0CObnHqFMbYVzmW9GYbfNcRoSYSUjhXP6hEv39ZuM3fHW2Zrhg%2FVNz7&X-Amz-Signature=c257fa49ef43b65a47cc008cc3b3aa1011f47c8c6d5117f379c68c7484bfc34b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
