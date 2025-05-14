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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHUDZMQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCID%2FBaKEEAZM8LK2fewYRBJ%2F5ZwvDFwNVpB0L2UcrMJrYAiB4GstF5y5fkkbU3SCLhAQvgHgna1UJ2iW8Y5yFDVCDfSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM7Lg%2FpWT6tcaC2TfUKtwDfWPrvn75FDjXpcoHP81PN6seI57KQlHDmozXNWc52a%2FkWvfQTfKrvf0jT9cevBFElGmhSp36eoZSw3bAtnvgN%2FyS3LFq1R1MKAgzEGCX6bKbZCKmj%2BMa4%2B6uFgW%2FuyncJwH5bS07bBgHuOVClGXO8c4lorJl%2B7Mp5rvYPT%2FQUsbSjYoG2An5RKQcrEySZpx%2FXvtpdXGN5gItDwEQ57OBK5GlgJUu0geS6xkrK9mRjhbrGnMvM%2BlH6Lh0yhLIGiPsJ2c8ZuVSp%2FbDagHpTOfglWy250f2Ho06XNemoLV%2BIhC4rj1gZ8YBbscNDT3nN%2FZyJmLnAyCuYxkuIBoebpZqTaNhVRHa%2B9wJtihL2Lc2vO4PqNWVp0nI0feLqAtfQb4gakikHNQ5J5i21UGHjD1bQnGdOMq6tgd%2BJ11C%2BjSFZGYVCgvkhefYe8OBf7G%2BvTlBLFP8TGEN2n6UZvhuFONPUAtMnyhMtBMBQr43oaZwYYMbXOkR1DFSTqaNWvusf8mzk%2FwD3d0YZyLUb7HtVxdqvd%2B1%2BKMj%2BFGUJXq4Nh6EncYcqg%2B5wyoy%2Fx8Ax1o3empn99rWH4Au9M%2FpylFkY54QYATqOUFCIn%2Fw%2B5vLt82oLKjXqbSEv2u7yzUlez0w0%2B%2BSwQY6pgEDNgwEC%2F3XnExw2jVr6SL%2Bm9U%2B8%2Bwpzo79Ktf3orGg3OpJbUzRw6Uz1SUWIifyCs2BC4N4dX2WPFMS01M9CVxOWH2EbKzNjtecDTvrr%2F%2BtG1A832vO2x4Tw4lzWE970eAej3kRz2aktcMrA%2FLnj6UDY4IUJIMeGxyjGJfsiN4j0tlkqNF2oJ5PxM0PgAAiyS4T2xPahkXfg%2F3gTX%2FQQD57BWbvrQHB&X-Amz-Signature=febb8ef49717fd49f8bf99b7984c14b843ebe0f84ebade1074f78c9e3e0666b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHUDZMQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCID%2FBaKEEAZM8LK2fewYRBJ%2F5ZwvDFwNVpB0L2UcrMJrYAiB4GstF5y5fkkbU3SCLhAQvgHgna1UJ2iW8Y5yFDVCDfSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM7Lg%2FpWT6tcaC2TfUKtwDfWPrvn75FDjXpcoHP81PN6seI57KQlHDmozXNWc52a%2FkWvfQTfKrvf0jT9cevBFElGmhSp36eoZSw3bAtnvgN%2FyS3LFq1R1MKAgzEGCX6bKbZCKmj%2BMa4%2B6uFgW%2FuyncJwH5bS07bBgHuOVClGXO8c4lorJl%2B7Mp5rvYPT%2FQUsbSjYoG2An5RKQcrEySZpx%2FXvtpdXGN5gItDwEQ57OBK5GlgJUu0geS6xkrK9mRjhbrGnMvM%2BlH6Lh0yhLIGiPsJ2c8ZuVSp%2FbDagHpTOfglWy250f2Ho06XNemoLV%2BIhC4rj1gZ8YBbscNDT3nN%2FZyJmLnAyCuYxkuIBoebpZqTaNhVRHa%2B9wJtihL2Lc2vO4PqNWVp0nI0feLqAtfQb4gakikHNQ5J5i21UGHjD1bQnGdOMq6tgd%2BJ11C%2BjSFZGYVCgvkhefYe8OBf7G%2BvTlBLFP8TGEN2n6UZvhuFONPUAtMnyhMtBMBQr43oaZwYYMbXOkR1DFSTqaNWvusf8mzk%2FwD3d0YZyLUb7HtVxdqvd%2B1%2BKMj%2BFGUJXq4Nh6EncYcqg%2B5wyoy%2Fx8Ax1o3empn99rWH4Au9M%2FpylFkY54QYATqOUFCIn%2Fw%2B5vLt82oLKjXqbSEv2u7yzUlez0w0%2B%2BSwQY6pgEDNgwEC%2F3XnExw2jVr6SL%2Bm9U%2B8%2Bwpzo79Ktf3orGg3OpJbUzRw6Uz1SUWIifyCs2BC4N4dX2WPFMS01M9CVxOWH2EbKzNjtecDTvrr%2F%2BtG1A832vO2x4Tw4lzWE970eAej3kRz2aktcMrA%2FLnj6UDY4IUJIMeGxyjGJfsiN4j0tlkqNF2oJ5PxM0PgAAiyS4T2xPahkXfg%2F3gTX%2FQQD57BWbvrQHB&X-Amz-Signature=56b3504defef457ea530753daef0676438262e23fc84a2a4dc04ddce4845ec9f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHUDZMQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCID%2FBaKEEAZM8LK2fewYRBJ%2F5ZwvDFwNVpB0L2UcrMJrYAiB4GstF5y5fkkbU3SCLhAQvgHgna1UJ2iW8Y5yFDVCDfSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM7Lg%2FpWT6tcaC2TfUKtwDfWPrvn75FDjXpcoHP81PN6seI57KQlHDmozXNWc52a%2FkWvfQTfKrvf0jT9cevBFElGmhSp36eoZSw3bAtnvgN%2FyS3LFq1R1MKAgzEGCX6bKbZCKmj%2BMa4%2B6uFgW%2FuyncJwH5bS07bBgHuOVClGXO8c4lorJl%2B7Mp5rvYPT%2FQUsbSjYoG2An5RKQcrEySZpx%2FXvtpdXGN5gItDwEQ57OBK5GlgJUu0geS6xkrK9mRjhbrGnMvM%2BlH6Lh0yhLIGiPsJ2c8ZuVSp%2FbDagHpTOfglWy250f2Ho06XNemoLV%2BIhC4rj1gZ8YBbscNDT3nN%2FZyJmLnAyCuYxkuIBoebpZqTaNhVRHa%2B9wJtihL2Lc2vO4PqNWVp0nI0feLqAtfQb4gakikHNQ5J5i21UGHjD1bQnGdOMq6tgd%2BJ11C%2BjSFZGYVCgvkhefYe8OBf7G%2BvTlBLFP8TGEN2n6UZvhuFONPUAtMnyhMtBMBQr43oaZwYYMbXOkR1DFSTqaNWvusf8mzk%2FwD3d0YZyLUb7HtVxdqvd%2B1%2BKMj%2BFGUJXq4Nh6EncYcqg%2B5wyoy%2Fx8Ax1o3empn99rWH4Au9M%2FpylFkY54QYATqOUFCIn%2Fw%2B5vLt82oLKjXqbSEv2u7yzUlez0w0%2B%2BSwQY6pgEDNgwEC%2F3XnExw2jVr6SL%2Bm9U%2B8%2Bwpzo79Ktf3orGg3OpJbUzRw6Uz1SUWIifyCs2BC4N4dX2WPFMS01M9CVxOWH2EbKzNjtecDTvrr%2F%2BtG1A832vO2x4Tw4lzWE970eAej3kRz2aktcMrA%2FLnj6UDY4IUJIMeGxyjGJfsiN4j0tlkqNF2oJ5PxM0PgAAiyS4T2xPahkXfg%2F3gTX%2FQQD57BWbvrQHB&X-Amz-Signature=cf95558d0b7c187b4690db10f1940f40c6cffb6e3c69693d4d541e71bc1bdf66&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHUDZMQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCID%2FBaKEEAZM8LK2fewYRBJ%2F5ZwvDFwNVpB0L2UcrMJrYAiB4GstF5y5fkkbU3SCLhAQvgHgna1UJ2iW8Y5yFDVCDfSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM7Lg%2FpWT6tcaC2TfUKtwDfWPrvn75FDjXpcoHP81PN6seI57KQlHDmozXNWc52a%2FkWvfQTfKrvf0jT9cevBFElGmhSp36eoZSw3bAtnvgN%2FyS3LFq1R1MKAgzEGCX6bKbZCKmj%2BMa4%2B6uFgW%2FuyncJwH5bS07bBgHuOVClGXO8c4lorJl%2B7Mp5rvYPT%2FQUsbSjYoG2An5RKQcrEySZpx%2FXvtpdXGN5gItDwEQ57OBK5GlgJUu0geS6xkrK9mRjhbrGnMvM%2BlH6Lh0yhLIGiPsJ2c8ZuVSp%2FbDagHpTOfglWy250f2Ho06XNemoLV%2BIhC4rj1gZ8YBbscNDT3nN%2FZyJmLnAyCuYxkuIBoebpZqTaNhVRHa%2B9wJtihL2Lc2vO4PqNWVp0nI0feLqAtfQb4gakikHNQ5J5i21UGHjD1bQnGdOMq6tgd%2BJ11C%2BjSFZGYVCgvkhefYe8OBf7G%2BvTlBLFP8TGEN2n6UZvhuFONPUAtMnyhMtBMBQr43oaZwYYMbXOkR1DFSTqaNWvusf8mzk%2FwD3d0YZyLUb7HtVxdqvd%2B1%2BKMj%2BFGUJXq4Nh6EncYcqg%2B5wyoy%2Fx8Ax1o3empn99rWH4Au9M%2FpylFkY54QYATqOUFCIn%2Fw%2B5vLt82oLKjXqbSEv2u7yzUlez0w0%2B%2BSwQY6pgEDNgwEC%2F3XnExw2jVr6SL%2Bm9U%2B8%2Bwpzo79Ktf3orGg3OpJbUzRw6Uz1SUWIifyCs2BC4N4dX2WPFMS01M9CVxOWH2EbKzNjtecDTvrr%2F%2BtG1A832vO2x4Tw4lzWE970eAej3kRz2aktcMrA%2FLnj6UDY4IUJIMeGxyjGJfsiN4j0tlkqNF2oJ5PxM0PgAAiyS4T2xPahkXfg%2F3gTX%2FQQD57BWbvrQHB&X-Amz-Signature=30a1d7d50131c0756f79ab75533cfb60a0856c47b78dacad13f0c5743c56833a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHUDZMQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCID%2FBaKEEAZM8LK2fewYRBJ%2F5ZwvDFwNVpB0L2UcrMJrYAiB4GstF5y5fkkbU3SCLhAQvgHgna1UJ2iW8Y5yFDVCDfSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM7Lg%2FpWT6tcaC2TfUKtwDfWPrvn75FDjXpcoHP81PN6seI57KQlHDmozXNWc52a%2FkWvfQTfKrvf0jT9cevBFElGmhSp36eoZSw3bAtnvgN%2FyS3LFq1R1MKAgzEGCX6bKbZCKmj%2BMa4%2B6uFgW%2FuyncJwH5bS07bBgHuOVClGXO8c4lorJl%2B7Mp5rvYPT%2FQUsbSjYoG2An5RKQcrEySZpx%2FXvtpdXGN5gItDwEQ57OBK5GlgJUu0geS6xkrK9mRjhbrGnMvM%2BlH6Lh0yhLIGiPsJ2c8ZuVSp%2FbDagHpTOfglWy250f2Ho06XNemoLV%2BIhC4rj1gZ8YBbscNDT3nN%2FZyJmLnAyCuYxkuIBoebpZqTaNhVRHa%2B9wJtihL2Lc2vO4PqNWVp0nI0feLqAtfQb4gakikHNQ5J5i21UGHjD1bQnGdOMq6tgd%2BJ11C%2BjSFZGYVCgvkhefYe8OBf7G%2BvTlBLFP8TGEN2n6UZvhuFONPUAtMnyhMtBMBQr43oaZwYYMbXOkR1DFSTqaNWvusf8mzk%2FwD3d0YZyLUb7HtVxdqvd%2B1%2BKMj%2BFGUJXq4Nh6EncYcqg%2B5wyoy%2Fx8Ax1o3empn99rWH4Au9M%2FpylFkY54QYATqOUFCIn%2Fw%2B5vLt82oLKjXqbSEv2u7yzUlez0w0%2B%2BSwQY6pgEDNgwEC%2F3XnExw2jVr6SL%2Bm9U%2B8%2Bwpzo79Ktf3orGg3OpJbUzRw6Uz1SUWIifyCs2BC4N4dX2WPFMS01M9CVxOWH2EbKzNjtecDTvrr%2F%2BtG1A832vO2x4Tw4lzWE970eAej3kRz2aktcMrA%2FLnj6UDY4IUJIMeGxyjGJfsiN4j0tlkqNF2oJ5PxM0PgAAiyS4T2xPahkXfg%2F3gTX%2FQQD57BWbvrQHB&X-Amz-Signature=9637782f6ee86cc401084e3ed8f7f0ac2eb9d2cd354fa3c01405b10312519d01&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
