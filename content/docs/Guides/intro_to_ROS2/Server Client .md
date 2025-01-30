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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646GAYLFD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBRqWUmFn%2BkirWZ5RO5vnXkng5Gh9IPMq2OQxW97iGQAiBuJLCbfrVrr8sKEck21YuupJp9%2BgNaR%2BuPrHimyPuWUSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfRQIVB2SgBxrRz2hKtwDMkXr0tjzMR8rAqKgD7saCDeT9%2Fk7eLcUa7%2BpEkoYSAOkx4mdIIcjGjBdenVFt3pgdikxfwQlABKV6mLktAxc2jEyQ06WcaIFApOdRFYEWn%2FiLgbFUNZJAuXSSxpXMnbW9vTmFvV7EKffk%2BLnq8WbkDmHupJ8hSLUAYY2Pacp643ukMhgZsJscjJIe2r404C5UjYSszKXfDZzpBYZm8dhfo6jGeips77cFubDcMnqg04o91DTm8cwEcqIt0EShM%2Fl51rRQY7j1chwSw0l6X%2FEMfCgw4S9Oy0MPH7SJFliQ%2FWBjJixV7t%2BdRHT6UGpElbJYwgV1I7VOZCKyWeuV55r1cjuGnHG0Vc4SJ3grl5gMn4sw%2BRiukqbrWj5NKhuE2gpRwvez3WK%2BbIUwNLzesyVvWfpsqKAMc1iE2GhHwZ%2FjTIw6n37g5SmccPNx1rAl3k0zl38q9x4e%2BoUvmUMI18YUQR8vbpRdy1c0skrqYPvofJVPxD68rDm0gqrbbUMp1lN8GoJC1ZnyXiOiNluiE7Jyf0VXqk%2Bf4xIHUIHpI5Rlkz0hF5GsCa%2FyfGSpBxyuxP5P8P9jIrPAu7e7hvCgixIZs7K3xP09iREXBhUx4rZFJxIj%2FN6RCM4kFTp8CAwxfTuvAY6pgEIl5nq8IDynN5ioeg0Q8r9EIwkCskvDmITE5o935LZBou1AHYZh2%2F1xIbUBbCz6khdlgZVAEGoHBfjpHqbJ65gSZiJXnGpIjCTaboiSwUkFT17sk4Ls6CkMmo0BLZpocZu5PhLdLdV7oJMm2Y9aAfHKSjInnHeMCBL02ZfuebMPelVwzMmjEb9MBuCGVBLIflAQW5%2FRjguZ%2F0jDimf7SxqAAQ%2BENjW&X-Amz-Signature=44a33951d484214bb1f9cdf710b58c78cb3a32e429e3890927cd5be2f59b9de9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646GAYLFD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBRqWUmFn%2BkirWZ5RO5vnXkng5Gh9IPMq2OQxW97iGQAiBuJLCbfrVrr8sKEck21YuupJp9%2BgNaR%2BuPrHimyPuWUSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfRQIVB2SgBxrRz2hKtwDMkXr0tjzMR8rAqKgD7saCDeT9%2Fk7eLcUa7%2BpEkoYSAOkx4mdIIcjGjBdenVFt3pgdikxfwQlABKV6mLktAxc2jEyQ06WcaIFApOdRFYEWn%2FiLgbFUNZJAuXSSxpXMnbW9vTmFvV7EKffk%2BLnq8WbkDmHupJ8hSLUAYY2Pacp643ukMhgZsJscjJIe2r404C5UjYSszKXfDZzpBYZm8dhfo6jGeips77cFubDcMnqg04o91DTm8cwEcqIt0EShM%2Fl51rRQY7j1chwSw0l6X%2FEMfCgw4S9Oy0MPH7SJFliQ%2FWBjJixV7t%2BdRHT6UGpElbJYwgV1I7VOZCKyWeuV55r1cjuGnHG0Vc4SJ3grl5gMn4sw%2BRiukqbrWj5NKhuE2gpRwvez3WK%2BbIUwNLzesyVvWfpsqKAMc1iE2GhHwZ%2FjTIw6n37g5SmccPNx1rAl3k0zl38q9x4e%2BoUvmUMI18YUQR8vbpRdy1c0skrqYPvofJVPxD68rDm0gqrbbUMp1lN8GoJC1ZnyXiOiNluiE7Jyf0VXqk%2Bf4xIHUIHpI5Rlkz0hF5GsCa%2FyfGSpBxyuxP5P8P9jIrPAu7e7hvCgixIZs7K3xP09iREXBhUx4rZFJxIj%2FN6RCM4kFTp8CAwxfTuvAY6pgEIl5nq8IDynN5ioeg0Q8r9EIwkCskvDmITE5o935LZBou1AHYZh2%2F1xIbUBbCz6khdlgZVAEGoHBfjpHqbJ65gSZiJXnGpIjCTaboiSwUkFT17sk4Ls6CkMmo0BLZpocZu5PhLdLdV7oJMm2Y9aAfHKSjInnHeMCBL02ZfuebMPelVwzMmjEb9MBuCGVBLIflAQW5%2FRjguZ%2F0jDimf7SxqAAQ%2BENjW&X-Amz-Signature=9c286ff4583066526dc58b3b85a20786f4d1d108f8ec51969ea25e987baf669a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646GAYLFD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBRqWUmFn%2BkirWZ5RO5vnXkng5Gh9IPMq2OQxW97iGQAiBuJLCbfrVrr8sKEck21YuupJp9%2BgNaR%2BuPrHimyPuWUSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfRQIVB2SgBxrRz2hKtwDMkXr0tjzMR8rAqKgD7saCDeT9%2Fk7eLcUa7%2BpEkoYSAOkx4mdIIcjGjBdenVFt3pgdikxfwQlABKV6mLktAxc2jEyQ06WcaIFApOdRFYEWn%2FiLgbFUNZJAuXSSxpXMnbW9vTmFvV7EKffk%2BLnq8WbkDmHupJ8hSLUAYY2Pacp643ukMhgZsJscjJIe2r404C5UjYSszKXfDZzpBYZm8dhfo6jGeips77cFubDcMnqg04o91DTm8cwEcqIt0EShM%2Fl51rRQY7j1chwSw0l6X%2FEMfCgw4S9Oy0MPH7SJFliQ%2FWBjJixV7t%2BdRHT6UGpElbJYwgV1I7VOZCKyWeuV55r1cjuGnHG0Vc4SJ3grl5gMn4sw%2BRiukqbrWj5NKhuE2gpRwvez3WK%2BbIUwNLzesyVvWfpsqKAMc1iE2GhHwZ%2FjTIw6n37g5SmccPNx1rAl3k0zl38q9x4e%2BoUvmUMI18YUQR8vbpRdy1c0skrqYPvofJVPxD68rDm0gqrbbUMp1lN8GoJC1ZnyXiOiNluiE7Jyf0VXqk%2Bf4xIHUIHpI5Rlkz0hF5GsCa%2FyfGSpBxyuxP5P8P9jIrPAu7e7hvCgixIZs7K3xP09iREXBhUx4rZFJxIj%2FN6RCM4kFTp8CAwxfTuvAY6pgEIl5nq8IDynN5ioeg0Q8r9EIwkCskvDmITE5o935LZBou1AHYZh2%2F1xIbUBbCz6khdlgZVAEGoHBfjpHqbJ65gSZiJXnGpIjCTaboiSwUkFT17sk4Ls6CkMmo0BLZpocZu5PhLdLdV7oJMm2Y9aAfHKSjInnHeMCBL02ZfuebMPelVwzMmjEb9MBuCGVBLIflAQW5%2FRjguZ%2F0jDimf7SxqAAQ%2BENjW&X-Amz-Signature=43995d48f90c8c42240297023b718e1e507b4512ea922bcdb2b64bb428360277&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646GAYLFD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBRqWUmFn%2BkirWZ5RO5vnXkng5Gh9IPMq2OQxW97iGQAiBuJLCbfrVrr8sKEck21YuupJp9%2BgNaR%2BuPrHimyPuWUSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfRQIVB2SgBxrRz2hKtwDMkXr0tjzMR8rAqKgD7saCDeT9%2Fk7eLcUa7%2BpEkoYSAOkx4mdIIcjGjBdenVFt3pgdikxfwQlABKV6mLktAxc2jEyQ06WcaIFApOdRFYEWn%2FiLgbFUNZJAuXSSxpXMnbW9vTmFvV7EKffk%2BLnq8WbkDmHupJ8hSLUAYY2Pacp643ukMhgZsJscjJIe2r404C5UjYSszKXfDZzpBYZm8dhfo6jGeips77cFubDcMnqg04o91DTm8cwEcqIt0EShM%2Fl51rRQY7j1chwSw0l6X%2FEMfCgw4S9Oy0MPH7SJFliQ%2FWBjJixV7t%2BdRHT6UGpElbJYwgV1I7VOZCKyWeuV55r1cjuGnHG0Vc4SJ3grl5gMn4sw%2BRiukqbrWj5NKhuE2gpRwvez3WK%2BbIUwNLzesyVvWfpsqKAMc1iE2GhHwZ%2FjTIw6n37g5SmccPNx1rAl3k0zl38q9x4e%2BoUvmUMI18YUQR8vbpRdy1c0skrqYPvofJVPxD68rDm0gqrbbUMp1lN8GoJC1ZnyXiOiNluiE7Jyf0VXqk%2Bf4xIHUIHpI5Rlkz0hF5GsCa%2FyfGSpBxyuxP5P8P9jIrPAu7e7hvCgixIZs7K3xP09iREXBhUx4rZFJxIj%2FN6RCM4kFTp8CAwxfTuvAY6pgEIl5nq8IDynN5ioeg0Q8r9EIwkCskvDmITE5o935LZBou1AHYZh2%2F1xIbUBbCz6khdlgZVAEGoHBfjpHqbJ65gSZiJXnGpIjCTaboiSwUkFT17sk4Ls6CkMmo0BLZpocZu5PhLdLdV7oJMm2Y9aAfHKSjInnHeMCBL02ZfuebMPelVwzMmjEb9MBuCGVBLIflAQW5%2FRjguZ%2F0jDimf7SxqAAQ%2BENjW&X-Amz-Signature=7e4efe150bebf2a65220fa384a48ff35c967c7f5b092fa92e30dbd814f5898b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646GAYLFD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBRqWUmFn%2BkirWZ5RO5vnXkng5Gh9IPMq2OQxW97iGQAiBuJLCbfrVrr8sKEck21YuupJp9%2BgNaR%2BuPrHimyPuWUSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfRQIVB2SgBxrRz2hKtwDMkXr0tjzMR8rAqKgD7saCDeT9%2Fk7eLcUa7%2BpEkoYSAOkx4mdIIcjGjBdenVFt3pgdikxfwQlABKV6mLktAxc2jEyQ06WcaIFApOdRFYEWn%2FiLgbFUNZJAuXSSxpXMnbW9vTmFvV7EKffk%2BLnq8WbkDmHupJ8hSLUAYY2Pacp643ukMhgZsJscjJIe2r404C5UjYSszKXfDZzpBYZm8dhfo6jGeips77cFubDcMnqg04o91DTm8cwEcqIt0EShM%2Fl51rRQY7j1chwSw0l6X%2FEMfCgw4S9Oy0MPH7SJFliQ%2FWBjJixV7t%2BdRHT6UGpElbJYwgV1I7VOZCKyWeuV55r1cjuGnHG0Vc4SJ3grl5gMn4sw%2BRiukqbrWj5NKhuE2gpRwvez3WK%2BbIUwNLzesyVvWfpsqKAMc1iE2GhHwZ%2FjTIw6n37g5SmccPNx1rAl3k0zl38q9x4e%2BoUvmUMI18YUQR8vbpRdy1c0skrqYPvofJVPxD68rDm0gqrbbUMp1lN8GoJC1ZnyXiOiNluiE7Jyf0VXqk%2Bf4xIHUIHpI5Rlkz0hF5GsCa%2FyfGSpBxyuxP5P8P9jIrPAu7e7hvCgixIZs7K3xP09iREXBhUx4rZFJxIj%2FN6RCM4kFTp8CAwxfTuvAY6pgEIl5nq8IDynN5ioeg0Q8r9EIwkCskvDmITE5o935LZBou1AHYZh2%2F1xIbUBbCz6khdlgZVAEGoHBfjpHqbJ65gSZiJXnGpIjCTaboiSwUkFT17sk4Ls6CkMmo0BLZpocZu5PhLdLdV7oJMm2Y9aAfHKSjInnHeMCBL02ZfuebMPelVwzMmjEb9MBuCGVBLIflAQW5%2FRjguZ%2F0jDimf7SxqAAQ%2BENjW&X-Amz-Signature=ea63bbf186c3462f14e1fbd1ffda67f26d72d0d72d13bfbdd5c0403484987ec6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
