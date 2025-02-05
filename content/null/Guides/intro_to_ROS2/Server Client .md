---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Server Client .md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z4SYR7D%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICBrptjRZmomEzFNnwcUu3VyEm%2BB5x81w8gBRillHIwRAiBd2S%2BqTsPhwb0gZg8bc%2Ff3%2BjC6E%2BFpCAMyr6J6AYwSqCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMQU6Kmn0IXBEd7I3TKtwDfinJ7sC9ATWiS64eVVvALdUSYR3BBXvSBUflMiXVrFQIz3DXhh3amuj6hvnvruAD2aamlZh3MB5XUlopFnI54y286xprYqfMrhLSxZRuYheU3puXJ5lQnKnTWsiKC6rOJ96cXueYHZ6jG2qTLtKjPXZ%2BjCt1KDFd%2FH1HZTOsPf%2BsJ05bLPTvWfo8wHu795uXafn10K0Cxd6Kucb6PBPwWg%2BoKUB0o8B5tUQOJ%2BfOk4qqzijpuQcFt4S90NEHgy8%2B%2FUFFKXQyUQYMQEo4tpm0rjT7qMP6xiWJUW2uWfTiQe925c1YYjn5lyge5MUpZncZRZrLoch8c3elT0pRtYlqlWNYRBrzeF2D7CWeFCjBLX6zsxUaJiih712ExAd8dalsAy%2BJQlSvBQ47bAh8qLptA97BkLCo6SJVlJcnMdtP90uMA9ZtbDh7L%2B0ksKnYMVFd2sQrXdGg%2BsuxLxTtSRxOXUdFLI0xO2wgR9UnCvmVVTj7eN%2F9FtAhdXPMqEOLMy4Td1HjLHhq5SHVuyRDQwaVmZcKKxkvxgPc3Klt7jOkgTA5PsnL%2FnMR00oxdkyPedxBq6AB2ZjcDFol8gK6dVGOYUQD9Nd0Sb3hEE%2FpgncE1XB0QCrE1OfuWlzvsnMw6c%2BKvQY6pgFmdC2Azln83E9TPe0gqk4q56QsgE85F2aAvW1t3K6E8SjS4Srcq3eDyXLKW15I8bwdDOtPzXw%2BlPdJ5uWYDh6Xslb2qbNqTfFDQStrOp7opgsMACynButAucwYLcRpZuL4XCh3PcktvKlYyuaiQ6PQIDA3sX1t3R9ARwuSXOyrA0X19Y4bzuVBjYqWt6SudZ4DCjSm0soc3WWmQo%2FXME%2FPLDPR1939&X-Amz-Signature=2a7a3a2c3a91b3c4b07872fcaa61f50da48c7d005ec030f497b34721dd4a2970&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z4SYR7D%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICBrptjRZmomEzFNnwcUu3VyEm%2BB5x81w8gBRillHIwRAiBd2S%2BqTsPhwb0gZg8bc%2Ff3%2BjC6E%2BFpCAMyr6J6AYwSqCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMQU6Kmn0IXBEd7I3TKtwDfinJ7sC9ATWiS64eVVvALdUSYR3BBXvSBUflMiXVrFQIz3DXhh3amuj6hvnvruAD2aamlZh3MB5XUlopFnI54y286xprYqfMrhLSxZRuYheU3puXJ5lQnKnTWsiKC6rOJ96cXueYHZ6jG2qTLtKjPXZ%2BjCt1KDFd%2FH1HZTOsPf%2BsJ05bLPTvWfo8wHu795uXafn10K0Cxd6Kucb6PBPwWg%2BoKUB0o8B5tUQOJ%2BfOk4qqzijpuQcFt4S90NEHgy8%2B%2FUFFKXQyUQYMQEo4tpm0rjT7qMP6xiWJUW2uWfTiQe925c1YYjn5lyge5MUpZncZRZrLoch8c3elT0pRtYlqlWNYRBrzeF2D7CWeFCjBLX6zsxUaJiih712ExAd8dalsAy%2BJQlSvBQ47bAh8qLptA97BkLCo6SJVlJcnMdtP90uMA9ZtbDh7L%2B0ksKnYMVFd2sQrXdGg%2BsuxLxTtSRxOXUdFLI0xO2wgR9UnCvmVVTj7eN%2F9FtAhdXPMqEOLMy4Td1HjLHhq5SHVuyRDQwaVmZcKKxkvxgPc3Klt7jOkgTA5PsnL%2FnMR00oxdkyPedxBq6AB2ZjcDFol8gK6dVGOYUQD9Nd0Sb3hEE%2FpgncE1XB0QCrE1OfuWlzvsnMw6c%2BKvQY6pgFmdC2Azln83E9TPe0gqk4q56QsgE85F2aAvW1t3K6E8SjS4Srcq3eDyXLKW15I8bwdDOtPzXw%2BlPdJ5uWYDh6Xslb2qbNqTfFDQStrOp7opgsMACynButAucwYLcRpZuL4XCh3PcktvKlYyuaiQ6PQIDA3sX1t3R9ARwuSXOyrA0X19Y4bzuVBjYqWt6SudZ4DCjSm0soc3WWmQo%2FXME%2FPLDPR1939&X-Amz-Signature=4843cc572949681f5a7ae21b05cc2d25e8254b95f567a9d8f304678d490ec153&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z4SYR7D%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICBrptjRZmomEzFNnwcUu3VyEm%2BB5x81w8gBRillHIwRAiBd2S%2BqTsPhwb0gZg8bc%2Ff3%2BjC6E%2BFpCAMyr6J6AYwSqCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMQU6Kmn0IXBEd7I3TKtwDfinJ7sC9ATWiS64eVVvALdUSYR3BBXvSBUflMiXVrFQIz3DXhh3amuj6hvnvruAD2aamlZh3MB5XUlopFnI54y286xprYqfMrhLSxZRuYheU3puXJ5lQnKnTWsiKC6rOJ96cXueYHZ6jG2qTLtKjPXZ%2BjCt1KDFd%2FH1HZTOsPf%2BsJ05bLPTvWfo8wHu795uXafn10K0Cxd6Kucb6PBPwWg%2BoKUB0o8B5tUQOJ%2BfOk4qqzijpuQcFt4S90NEHgy8%2B%2FUFFKXQyUQYMQEo4tpm0rjT7qMP6xiWJUW2uWfTiQe925c1YYjn5lyge5MUpZncZRZrLoch8c3elT0pRtYlqlWNYRBrzeF2D7CWeFCjBLX6zsxUaJiih712ExAd8dalsAy%2BJQlSvBQ47bAh8qLptA97BkLCo6SJVlJcnMdtP90uMA9ZtbDh7L%2B0ksKnYMVFd2sQrXdGg%2BsuxLxTtSRxOXUdFLI0xO2wgR9UnCvmVVTj7eN%2F9FtAhdXPMqEOLMy4Td1HjLHhq5SHVuyRDQwaVmZcKKxkvxgPc3Klt7jOkgTA5PsnL%2FnMR00oxdkyPedxBq6AB2ZjcDFol8gK6dVGOYUQD9Nd0Sb3hEE%2FpgncE1XB0QCrE1OfuWlzvsnMw6c%2BKvQY6pgFmdC2Azln83E9TPe0gqk4q56QsgE85F2aAvW1t3K6E8SjS4Srcq3eDyXLKW15I8bwdDOtPzXw%2BlPdJ5uWYDh6Xslb2qbNqTfFDQStrOp7opgsMACynButAucwYLcRpZuL4XCh3PcktvKlYyuaiQ6PQIDA3sX1t3R9ARwuSXOyrA0X19Y4bzuVBjYqWt6SudZ4DCjSm0soc3WWmQo%2FXME%2FPLDPR1939&X-Amz-Signature=164ce733976953b55c31d457dc9399212e415ff8c24cb731b807794020c73a4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z4SYR7D%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICBrptjRZmomEzFNnwcUu3VyEm%2BB5x81w8gBRillHIwRAiBd2S%2BqTsPhwb0gZg8bc%2Ff3%2BjC6E%2BFpCAMyr6J6AYwSqCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMQU6Kmn0IXBEd7I3TKtwDfinJ7sC9ATWiS64eVVvALdUSYR3BBXvSBUflMiXVrFQIz3DXhh3amuj6hvnvruAD2aamlZh3MB5XUlopFnI54y286xprYqfMrhLSxZRuYheU3puXJ5lQnKnTWsiKC6rOJ96cXueYHZ6jG2qTLtKjPXZ%2BjCt1KDFd%2FH1HZTOsPf%2BsJ05bLPTvWfo8wHu795uXafn10K0Cxd6Kucb6PBPwWg%2BoKUB0o8B5tUQOJ%2BfOk4qqzijpuQcFt4S90NEHgy8%2B%2FUFFKXQyUQYMQEo4tpm0rjT7qMP6xiWJUW2uWfTiQe925c1YYjn5lyge5MUpZncZRZrLoch8c3elT0pRtYlqlWNYRBrzeF2D7CWeFCjBLX6zsxUaJiih712ExAd8dalsAy%2BJQlSvBQ47bAh8qLptA97BkLCo6SJVlJcnMdtP90uMA9ZtbDh7L%2B0ksKnYMVFd2sQrXdGg%2BsuxLxTtSRxOXUdFLI0xO2wgR9UnCvmVVTj7eN%2F9FtAhdXPMqEOLMy4Td1HjLHhq5SHVuyRDQwaVmZcKKxkvxgPc3Klt7jOkgTA5PsnL%2FnMR00oxdkyPedxBq6AB2ZjcDFol8gK6dVGOYUQD9Nd0Sb3hEE%2FpgncE1XB0QCrE1OfuWlzvsnMw6c%2BKvQY6pgFmdC2Azln83E9TPe0gqk4q56QsgE85F2aAvW1t3K6E8SjS4Srcq3eDyXLKW15I8bwdDOtPzXw%2BlPdJ5uWYDh6Xslb2qbNqTfFDQStrOp7opgsMACynButAucwYLcRpZuL4XCh3PcktvKlYyuaiQ6PQIDA3sX1t3R9ARwuSXOyrA0X19Y4bzuVBjYqWt6SudZ4DCjSm0soc3WWmQo%2FXME%2FPLDPR1939&X-Amz-Signature=b6e900dbb13a8c887690e1810be9201f8496cbb723c9cf02e1ccc5a933da29bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z4SYR7D%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICBrptjRZmomEzFNnwcUu3VyEm%2BB5x81w8gBRillHIwRAiBd2S%2BqTsPhwb0gZg8bc%2Ff3%2BjC6E%2BFpCAMyr6J6AYwSqCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMQU6Kmn0IXBEd7I3TKtwDfinJ7sC9ATWiS64eVVvALdUSYR3BBXvSBUflMiXVrFQIz3DXhh3amuj6hvnvruAD2aamlZh3MB5XUlopFnI54y286xprYqfMrhLSxZRuYheU3puXJ5lQnKnTWsiKC6rOJ96cXueYHZ6jG2qTLtKjPXZ%2BjCt1KDFd%2FH1HZTOsPf%2BsJ05bLPTvWfo8wHu795uXafn10K0Cxd6Kucb6PBPwWg%2BoKUB0o8B5tUQOJ%2BfOk4qqzijpuQcFt4S90NEHgy8%2B%2FUFFKXQyUQYMQEo4tpm0rjT7qMP6xiWJUW2uWfTiQe925c1YYjn5lyge5MUpZncZRZrLoch8c3elT0pRtYlqlWNYRBrzeF2D7CWeFCjBLX6zsxUaJiih712ExAd8dalsAy%2BJQlSvBQ47bAh8qLptA97BkLCo6SJVlJcnMdtP90uMA9ZtbDh7L%2B0ksKnYMVFd2sQrXdGg%2BsuxLxTtSRxOXUdFLI0xO2wgR9UnCvmVVTj7eN%2F9FtAhdXPMqEOLMy4Td1HjLHhq5SHVuyRDQwaVmZcKKxkvxgPc3Klt7jOkgTA5PsnL%2FnMR00oxdkyPedxBq6AB2ZjcDFol8gK6dVGOYUQD9Nd0Sb3hEE%2FpgncE1XB0QCrE1OfuWlzvsnMw6c%2BKvQY6pgFmdC2Azln83E9TPe0gqk4q56QsgE85F2aAvW1t3K6E8SjS4Srcq3eDyXLKW15I8bwdDOtPzXw%2BlPdJ5uWYDh6Xslb2qbNqTfFDQStrOp7opgsMACynButAucwYLcRpZuL4XCh3PcktvKlYyuaiQ6PQIDA3sX1t3R9ARwuSXOyrA0X19Y4bzuVBjYqWt6SudZ4DCjSm0soc3WWmQo%2FXME%2FPLDPR1939&X-Amz-Signature=bf03a35b2211fb3c240d7a5aca30db35f390f638f5fba14ad20a754cd4ec1d95&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
