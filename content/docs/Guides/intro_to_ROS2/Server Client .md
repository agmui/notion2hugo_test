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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E5R3SW7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCID9f9ww5F39WbtIRkhfFXLKQBRbuoVPO1hWncT2ceu6zAiAcVLSrqklpQhh%2FZKfyx7JEGT06Fu%2BYOXPgr2KQAV3XWyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMV7nw2mg4YvTdXBikKtwD%2Bb4MHvx9rWCiOoLFP24I0Ui7Zus1skvADDw3a2fv9NjwA0gxoPWo%2FaNAdFGhg%2BYieVeDM6CXF0dhUbBr5JwtaDxRZoYNDKX7%2BGsIJBzo9q1Lf6i9RWq3yAGxdWEPW1R9xOglraONLAeAy78v3qeXMLXGyexSQPUVFDNsiHR3EtZIvHjxk7sccjBbyKF%2FOC%2F6GUuk5yXTW0bsVfuK2ebVuFnCJSJJX18fuJF4RaQDlBA95u9h6TV1p5a%2BcUOPzXu0NZ3lA7bJM%2FddNHZ%2Fdg2kHHXW3kMX1waSi%2FhFLNrvtf0s0qkF7w3%2FfU58rEvWM%2BMEexxfPRHQ9s12FXNbJ%2FB96BQVGIipK4x2upykqKv5RLSEcJeJwI%2BFMNRgOPHUjAN2jRqc3fd6fm5MBlsz5ekRWEnyko1%2FtAgaNm7K2k4w7abND%2By6TgBjYgkoHGehHPqk78QCaOCbbQMWFSzuUDTpootg3ocxsE%2BHtxq%2FzXtzhQnzQlvAM3pGty%2FNOGBfwpWCfdFi8bYI8gHs0ZN595qQY7K9qQWhmP8DmxvWTnK9qw%2Bb3qZCVTROUcOT2d%2FQG29T0sa3JzZXZ%2B%2FafqyyjCesVG851FEE6xBd06PLgXny%2FDFptq8s8Y29A70DiSowx83HwQY6pgFbS%2BFzyUbWotie7YSrsoe%2F3vKvhw9D1THIoK2g%2FkktxUuqUWYa8%2FgRr%2F5SAZ3%2BlJTdz6mW8x7CLsKxqj3Z5eEapTl7Tf4pFnHMV7qQCqzoiKDPW4XrGtqAaT%2BjCILDYFSV6wwXzqMBwj2ABaQqABC37%2B3L03vL2C5ZYis0MWT2T2ghIVVorAtlih6hrnDPrqnp5mxUKVtWnVEWIEws4HLjo1TI0BV%2F&X-Amz-Signature=f2c992e257e9fd8a0c20947eaa04e1451c000edece6158e04c6f0980564f28a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E5R3SW7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCID9f9ww5F39WbtIRkhfFXLKQBRbuoVPO1hWncT2ceu6zAiAcVLSrqklpQhh%2FZKfyx7JEGT06Fu%2BYOXPgr2KQAV3XWyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMV7nw2mg4YvTdXBikKtwD%2Bb4MHvx9rWCiOoLFP24I0Ui7Zus1skvADDw3a2fv9NjwA0gxoPWo%2FaNAdFGhg%2BYieVeDM6CXF0dhUbBr5JwtaDxRZoYNDKX7%2BGsIJBzo9q1Lf6i9RWq3yAGxdWEPW1R9xOglraONLAeAy78v3qeXMLXGyexSQPUVFDNsiHR3EtZIvHjxk7sccjBbyKF%2FOC%2F6GUuk5yXTW0bsVfuK2ebVuFnCJSJJX18fuJF4RaQDlBA95u9h6TV1p5a%2BcUOPzXu0NZ3lA7bJM%2FddNHZ%2Fdg2kHHXW3kMX1waSi%2FhFLNrvtf0s0qkF7w3%2FfU58rEvWM%2BMEexxfPRHQ9s12FXNbJ%2FB96BQVGIipK4x2upykqKv5RLSEcJeJwI%2BFMNRgOPHUjAN2jRqc3fd6fm5MBlsz5ekRWEnyko1%2FtAgaNm7K2k4w7abND%2By6TgBjYgkoHGehHPqk78QCaOCbbQMWFSzuUDTpootg3ocxsE%2BHtxq%2FzXtzhQnzQlvAM3pGty%2FNOGBfwpWCfdFi8bYI8gHs0ZN595qQY7K9qQWhmP8DmxvWTnK9qw%2Bb3qZCVTROUcOT2d%2FQG29T0sa3JzZXZ%2B%2FafqyyjCesVG851FEE6xBd06PLgXny%2FDFptq8s8Y29A70DiSowx83HwQY6pgFbS%2BFzyUbWotie7YSrsoe%2F3vKvhw9D1THIoK2g%2FkktxUuqUWYa8%2FgRr%2F5SAZ3%2BlJTdz6mW8x7CLsKxqj3Z5eEapTl7Tf4pFnHMV7qQCqzoiKDPW4XrGtqAaT%2BjCILDYFSV6wwXzqMBwj2ABaQqABC37%2B3L03vL2C5ZYis0MWT2T2ghIVVorAtlih6hrnDPrqnp5mxUKVtWnVEWIEws4HLjo1TI0BV%2F&X-Amz-Signature=50021ae17fbad4d28a178db92fe7ac22e20186d1878091b17655c2ef471f6e91&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E5R3SW7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCID9f9ww5F39WbtIRkhfFXLKQBRbuoVPO1hWncT2ceu6zAiAcVLSrqklpQhh%2FZKfyx7JEGT06Fu%2BYOXPgr2KQAV3XWyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMV7nw2mg4YvTdXBikKtwD%2Bb4MHvx9rWCiOoLFP24I0Ui7Zus1skvADDw3a2fv9NjwA0gxoPWo%2FaNAdFGhg%2BYieVeDM6CXF0dhUbBr5JwtaDxRZoYNDKX7%2BGsIJBzo9q1Lf6i9RWq3yAGxdWEPW1R9xOglraONLAeAy78v3qeXMLXGyexSQPUVFDNsiHR3EtZIvHjxk7sccjBbyKF%2FOC%2F6GUuk5yXTW0bsVfuK2ebVuFnCJSJJX18fuJF4RaQDlBA95u9h6TV1p5a%2BcUOPzXu0NZ3lA7bJM%2FddNHZ%2Fdg2kHHXW3kMX1waSi%2FhFLNrvtf0s0qkF7w3%2FfU58rEvWM%2BMEexxfPRHQ9s12FXNbJ%2FB96BQVGIipK4x2upykqKv5RLSEcJeJwI%2BFMNRgOPHUjAN2jRqc3fd6fm5MBlsz5ekRWEnyko1%2FtAgaNm7K2k4w7abND%2By6TgBjYgkoHGehHPqk78QCaOCbbQMWFSzuUDTpootg3ocxsE%2BHtxq%2FzXtzhQnzQlvAM3pGty%2FNOGBfwpWCfdFi8bYI8gHs0ZN595qQY7K9qQWhmP8DmxvWTnK9qw%2Bb3qZCVTROUcOT2d%2FQG29T0sa3JzZXZ%2B%2FafqyyjCesVG851FEE6xBd06PLgXny%2FDFptq8s8Y29A70DiSowx83HwQY6pgFbS%2BFzyUbWotie7YSrsoe%2F3vKvhw9D1THIoK2g%2FkktxUuqUWYa8%2FgRr%2F5SAZ3%2BlJTdz6mW8x7CLsKxqj3Z5eEapTl7Tf4pFnHMV7qQCqzoiKDPW4XrGtqAaT%2BjCILDYFSV6wwXzqMBwj2ABaQqABC37%2B3L03vL2C5ZYis0MWT2T2ghIVVorAtlih6hrnDPrqnp5mxUKVtWnVEWIEws4HLjo1TI0BV%2F&X-Amz-Signature=702546440a635f60456c0bf5393281e823cafb48ba344654175539a8e6a621dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E5R3SW7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCID9f9ww5F39WbtIRkhfFXLKQBRbuoVPO1hWncT2ceu6zAiAcVLSrqklpQhh%2FZKfyx7JEGT06Fu%2BYOXPgr2KQAV3XWyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMV7nw2mg4YvTdXBikKtwD%2Bb4MHvx9rWCiOoLFP24I0Ui7Zus1skvADDw3a2fv9NjwA0gxoPWo%2FaNAdFGhg%2BYieVeDM6CXF0dhUbBr5JwtaDxRZoYNDKX7%2BGsIJBzo9q1Lf6i9RWq3yAGxdWEPW1R9xOglraONLAeAy78v3qeXMLXGyexSQPUVFDNsiHR3EtZIvHjxk7sccjBbyKF%2FOC%2F6GUuk5yXTW0bsVfuK2ebVuFnCJSJJX18fuJF4RaQDlBA95u9h6TV1p5a%2BcUOPzXu0NZ3lA7bJM%2FddNHZ%2Fdg2kHHXW3kMX1waSi%2FhFLNrvtf0s0qkF7w3%2FfU58rEvWM%2BMEexxfPRHQ9s12FXNbJ%2FB96BQVGIipK4x2upykqKv5RLSEcJeJwI%2BFMNRgOPHUjAN2jRqc3fd6fm5MBlsz5ekRWEnyko1%2FtAgaNm7K2k4w7abND%2By6TgBjYgkoHGehHPqk78QCaOCbbQMWFSzuUDTpootg3ocxsE%2BHtxq%2FzXtzhQnzQlvAM3pGty%2FNOGBfwpWCfdFi8bYI8gHs0ZN595qQY7K9qQWhmP8DmxvWTnK9qw%2Bb3qZCVTROUcOT2d%2FQG29T0sa3JzZXZ%2B%2FafqyyjCesVG851FEE6xBd06PLgXny%2FDFptq8s8Y29A70DiSowx83HwQY6pgFbS%2BFzyUbWotie7YSrsoe%2F3vKvhw9D1THIoK2g%2FkktxUuqUWYa8%2FgRr%2F5SAZ3%2BlJTdz6mW8x7CLsKxqj3Z5eEapTl7Tf4pFnHMV7qQCqzoiKDPW4XrGtqAaT%2BjCILDYFSV6wwXzqMBwj2ABaQqABC37%2B3L03vL2C5ZYis0MWT2T2ghIVVorAtlih6hrnDPrqnp5mxUKVtWnVEWIEws4HLjo1TI0BV%2F&X-Amz-Signature=0788961a21c2328d81591a2f4cf0800813bbf15a6614758c31541fc54d822522&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E5R3SW7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCID9f9ww5F39WbtIRkhfFXLKQBRbuoVPO1hWncT2ceu6zAiAcVLSrqklpQhh%2FZKfyx7JEGT06Fu%2BYOXPgr2KQAV3XWyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMV7nw2mg4YvTdXBikKtwD%2Bb4MHvx9rWCiOoLFP24I0Ui7Zus1skvADDw3a2fv9NjwA0gxoPWo%2FaNAdFGhg%2BYieVeDM6CXF0dhUbBr5JwtaDxRZoYNDKX7%2BGsIJBzo9q1Lf6i9RWq3yAGxdWEPW1R9xOglraONLAeAy78v3qeXMLXGyexSQPUVFDNsiHR3EtZIvHjxk7sccjBbyKF%2FOC%2F6GUuk5yXTW0bsVfuK2ebVuFnCJSJJX18fuJF4RaQDlBA95u9h6TV1p5a%2BcUOPzXu0NZ3lA7bJM%2FddNHZ%2Fdg2kHHXW3kMX1waSi%2FhFLNrvtf0s0qkF7w3%2FfU58rEvWM%2BMEexxfPRHQ9s12FXNbJ%2FB96BQVGIipK4x2upykqKv5RLSEcJeJwI%2BFMNRgOPHUjAN2jRqc3fd6fm5MBlsz5ekRWEnyko1%2FtAgaNm7K2k4w7abND%2By6TgBjYgkoHGehHPqk78QCaOCbbQMWFSzuUDTpootg3ocxsE%2BHtxq%2FzXtzhQnzQlvAM3pGty%2FNOGBfwpWCfdFi8bYI8gHs0ZN595qQY7K9qQWhmP8DmxvWTnK9qw%2Bb3qZCVTROUcOT2d%2FQG29T0sa3JzZXZ%2B%2FafqyyjCesVG851FEE6xBd06PLgXny%2FDFptq8s8Y29A70DiSowx83HwQY6pgFbS%2BFzyUbWotie7YSrsoe%2F3vKvhw9D1THIoK2g%2FkktxUuqUWYa8%2FgRr%2F5SAZ3%2BlJTdz6mW8x7CLsKxqj3Z5eEapTl7Tf4pFnHMV7qQCqzoiKDPW4XrGtqAaT%2BjCILDYFSV6wwXzqMBwj2ABaQqABC37%2B3L03vL2C5ZYis0MWT2T2ghIVVorAtlih6hrnDPrqnp5mxUKVtWnVEWIEws4HLjo1TI0BV%2F&X-Amz-Signature=661b0476d25f1e4e1444993c8ceab2c43137a27df4d2cca69b8f63bedca8944b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
