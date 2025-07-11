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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3RWUWU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIUAgH4c6X4Nd2IT9IQZk6HjEJyBUPIIdDtHyx%2B3C7QAiBmTvj11tj1gwY28ObBS%2B3Munuy0pAaQ0dAKFDZnekfwiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyikWzy67asFIdVwtKtwDRxVRI9TiyjGIerPDIaN9zE2q7fWxBndFnBEhmh9N2RXxqCgPySLSFuaYPUGtugKaUkjkuWC5YjbCChMFoC%2B09epBS0vS%2BFf9981idATQl0BNJ59znkMr4dVdV1c32uHQpGBAc0Crdczxagq%2FLzKA48pHL3KcW0XaVQLYXRf7fIkL0RCFYof86cjk1JFUePpK3FYIEB3HGC2l3aEH1Ae2VGgEyVA%2Be9bSoXTMA%2BiA%2FVEyHe3v9Ak3uPUNvkSrgX%2Fs%2BJvL3oUja2Ge3mai7bglXxd7wxJmS79DO5lrMTE8c0y5cZj%2BG3HY9GRKeb%2BkxX79O42cjMy68HtRzyM4WzRxth5oxDGhMdiYxFDyJvwm8QNMzVZh0N0jExi1ABZe3m7R0qGlCrfidwTfX8aoatNbyQijGBU1C8MBaKVQ07PpivFCOv90QThif7R93MLhR1NCXtB9HvwymWMKc3Wx%2Be4XdO2cCLQ7mS4rN1Zanm2y8e5VFZfTR6BBkJPmSf8cGEakNG9uRGsX%2Bcvcg6U1eJSPaGAHVQPFwubSj1E1P2rBpXHjr2JGTi7edUfcdyT20I%2F7o1b67bcw0F6flgJFK5x8ygFsFwpiDRkMO6YyvOrw57%2Bj6EGzEWlDNgrbQGIw19TEwwY6pgHbdAEgBObhTWA0rwU3pAeJIy04m0O%2Fs0fKbjJmv9eUS1HkEd2wF99qTqUpqwUiuIl8Py%2B9Tira%2FLPeKTDlj%2Fpl9gr%2FMdwtaZEzcpXSfXG7eIR%2BIb%2FFb8PgEDB1UFR6NslUzaKF3r2SSLMNLor1hHnzn5D6MaNhl06N4zrcflRz4efUGKrDRQWojJLqaXtQfmmllBeEzTcH20sUj0U54uwQ6njy5wUt&X-Amz-Signature=ab07a2bf0b3bd0b1fbb4bb910b8c58143f7a3c375c715049c73c73c3e8353b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3RWUWU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIUAgH4c6X4Nd2IT9IQZk6HjEJyBUPIIdDtHyx%2B3C7QAiBmTvj11tj1gwY28ObBS%2B3Munuy0pAaQ0dAKFDZnekfwiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyikWzy67asFIdVwtKtwDRxVRI9TiyjGIerPDIaN9zE2q7fWxBndFnBEhmh9N2RXxqCgPySLSFuaYPUGtugKaUkjkuWC5YjbCChMFoC%2B09epBS0vS%2BFf9981idATQl0BNJ59znkMr4dVdV1c32uHQpGBAc0Crdczxagq%2FLzKA48pHL3KcW0XaVQLYXRf7fIkL0RCFYof86cjk1JFUePpK3FYIEB3HGC2l3aEH1Ae2VGgEyVA%2Be9bSoXTMA%2BiA%2FVEyHe3v9Ak3uPUNvkSrgX%2Fs%2BJvL3oUja2Ge3mai7bglXxd7wxJmS79DO5lrMTE8c0y5cZj%2BG3HY9GRKeb%2BkxX79O42cjMy68HtRzyM4WzRxth5oxDGhMdiYxFDyJvwm8QNMzVZh0N0jExi1ABZe3m7R0qGlCrfidwTfX8aoatNbyQijGBU1C8MBaKVQ07PpivFCOv90QThif7R93MLhR1NCXtB9HvwymWMKc3Wx%2Be4XdO2cCLQ7mS4rN1Zanm2y8e5VFZfTR6BBkJPmSf8cGEakNG9uRGsX%2Bcvcg6U1eJSPaGAHVQPFwubSj1E1P2rBpXHjr2JGTi7edUfcdyT20I%2F7o1b67bcw0F6flgJFK5x8ygFsFwpiDRkMO6YyvOrw57%2Bj6EGzEWlDNgrbQGIw19TEwwY6pgHbdAEgBObhTWA0rwU3pAeJIy04m0O%2Fs0fKbjJmv9eUS1HkEd2wF99qTqUpqwUiuIl8Py%2B9Tira%2FLPeKTDlj%2Fpl9gr%2FMdwtaZEzcpXSfXG7eIR%2BIb%2FFb8PgEDB1UFR6NslUzaKF3r2SSLMNLor1hHnzn5D6MaNhl06N4zrcflRz4efUGKrDRQWojJLqaXtQfmmllBeEzTcH20sUj0U54uwQ6njy5wUt&X-Amz-Signature=adabfcd76a0176464693f9acedbd77043320b7e48fb758a602970168032b2b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3RWUWU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIUAgH4c6X4Nd2IT9IQZk6HjEJyBUPIIdDtHyx%2B3C7QAiBmTvj11tj1gwY28ObBS%2B3Munuy0pAaQ0dAKFDZnekfwiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyikWzy67asFIdVwtKtwDRxVRI9TiyjGIerPDIaN9zE2q7fWxBndFnBEhmh9N2RXxqCgPySLSFuaYPUGtugKaUkjkuWC5YjbCChMFoC%2B09epBS0vS%2BFf9981idATQl0BNJ59znkMr4dVdV1c32uHQpGBAc0Crdczxagq%2FLzKA48pHL3KcW0XaVQLYXRf7fIkL0RCFYof86cjk1JFUePpK3FYIEB3HGC2l3aEH1Ae2VGgEyVA%2Be9bSoXTMA%2BiA%2FVEyHe3v9Ak3uPUNvkSrgX%2Fs%2BJvL3oUja2Ge3mai7bglXxd7wxJmS79DO5lrMTE8c0y5cZj%2BG3HY9GRKeb%2BkxX79O42cjMy68HtRzyM4WzRxth5oxDGhMdiYxFDyJvwm8QNMzVZh0N0jExi1ABZe3m7R0qGlCrfidwTfX8aoatNbyQijGBU1C8MBaKVQ07PpivFCOv90QThif7R93MLhR1NCXtB9HvwymWMKc3Wx%2Be4XdO2cCLQ7mS4rN1Zanm2y8e5VFZfTR6BBkJPmSf8cGEakNG9uRGsX%2Bcvcg6U1eJSPaGAHVQPFwubSj1E1P2rBpXHjr2JGTi7edUfcdyT20I%2F7o1b67bcw0F6flgJFK5x8ygFsFwpiDRkMO6YyvOrw57%2Bj6EGzEWlDNgrbQGIw19TEwwY6pgHbdAEgBObhTWA0rwU3pAeJIy04m0O%2Fs0fKbjJmv9eUS1HkEd2wF99qTqUpqwUiuIl8Py%2B9Tira%2FLPeKTDlj%2Fpl9gr%2FMdwtaZEzcpXSfXG7eIR%2BIb%2FFb8PgEDB1UFR6NslUzaKF3r2SSLMNLor1hHnzn5D6MaNhl06N4zrcflRz4efUGKrDRQWojJLqaXtQfmmllBeEzTcH20sUj0U54uwQ6njy5wUt&X-Amz-Signature=d91af048a8d9700e5aab83172ee5dd1b430526ea84f01ebaf0e2386b2d6b135e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3RWUWU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIUAgH4c6X4Nd2IT9IQZk6HjEJyBUPIIdDtHyx%2B3C7QAiBmTvj11tj1gwY28ObBS%2B3Munuy0pAaQ0dAKFDZnekfwiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyikWzy67asFIdVwtKtwDRxVRI9TiyjGIerPDIaN9zE2q7fWxBndFnBEhmh9N2RXxqCgPySLSFuaYPUGtugKaUkjkuWC5YjbCChMFoC%2B09epBS0vS%2BFf9981idATQl0BNJ59znkMr4dVdV1c32uHQpGBAc0Crdczxagq%2FLzKA48pHL3KcW0XaVQLYXRf7fIkL0RCFYof86cjk1JFUePpK3FYIEB3HGC2l3aEH1Ae2VGgEyVA%2Be9bSoXTMA%2BiA%2FVEyHe3v9Ak3uPUNvkSrgX%2Fs%2BJvL3oUja2Ge3mai7bglXxd7wxJmS79DO5lrMTE8c0y5cZj%2BG3HY9GRKeb%2BkxX79O42cjMy68HtRzyM4WzRxth5oxDGhMdiYxFDyJvwm8QNMzVZh0N0jExi1ABZe3m7R0qGlCrfidwTfX8aoatNbyQijGBU1C8MBaKVQ07PpivFCOv90QThif7R93MLhR1NCXtB9HvwymWMKc3Wx%2Be4XdO2cCLQ7mS4rN1Zanm2y8e5VFZfTR6BBkJPmSf8cGEakNG9uRGsX%2Bcvcg6U1eJSPaGAHVQPFwubSj1E1P2rBpXHjr2JGTi7edUfcdyT20I%2F7o1b67bcw0F6flgJFK5x8ygFsFwpiDRkMO6YyvOrw57%2Bj6EGzEWlDNgrbQGIw19TEwwY6pgHbdAEgBObhTWA0rwU3pAeJIy04m0O%2Fs0fKbjJmv9eUS1HkEd2wF99qTqUpqwUiuIl8Py%2B9Tira%2FLPeKTDlj%2Fpl9gr%2FMdwtaZEzcpXSfXG7eIR%2BIb%2FFb8PgEDB1UFR6NslUzaKF3r2SSLMNLor1hHnzn5D6MaNhl06N4zrcflRz4efUGKrDRQWojJLqaXtQfmmllBeEzTcH20sUj0U54uwQ6njy5wUt&X-Amz-Signature=6f7ff8657913f7423c5e46e69edbe40afcbae29daf5d705432b34591c7e3cd0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3RWUWU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIUAgH4c6X4Nd2IT9IQZk6HjEJyBUPIIdDtHyx%2B3C7QAiBmTvj11tj1gwY28ObBS%2B3Munuy0pAaQ0dAKFDZnekfwiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyikWzy67asFIdVwtKtwDRxVRI9TiyjGIerPDIaN9zE2q7fWxBndFnBEhmh9N2RXxqCgPySLSFuaYPUGtugKaUkjkuWC5YjbCChMFoC%2B09epBS0vS%2BFf9981idATQl0BNJ59znkMr4dVdV1c32uHQpGBAc0Crdczxagq%2FLzKA48pHL3KcW0XaVQLYXRf7fIkL0RCFYof86cjk1JFUePpK3FYIEB3HGC2l3aEH1Ae2VGgEyVA%2Be9bSoXTMA%2BiA%2FVEyHe3v9Ak3uPUNvkSrgX%2Fs%2BJvL3oUja2Ge3mai7bglXxd7wxJmS79DO5lrMTE8c0y5cZj%2BG3HY9GRKeb%2BkxX79O42cjMy68HtRzyM4WzRxth5oxDGhMdiYxFDyJvwm8QNMzVZh0N0jExi1ABZe3m7R0qGlCrfidwTfX8aoatNbyQijGBU1C8MBaKVQ07PpivFCOv90QThif7R93MLhR1NCXtB9HvwymWMKc3Wx%2Be4XdO2cCLQ7mS4rN1Zanm2y8e5VFZfTR6BBkJPmSf8cGEakNG9uRGsX%2Bcvcg6U1eJSPaGAHVQPFwubSj1E1P2rBpXHjr2JGTi7edUfcdyT20I%2F7o1b67bcw0F6flgJFK5x8ygFsFwpiDRkMO6YyvOrw57%2Bj6EGzEWlDNgrbQGIw19TEwwY6pgHbdAEgBObhTWA0rwU3pAeJIy04m0O%2Fs0fKbjJmv9eUS1HkEd2wF99qTqUpqwUiuIl8Py%2B9Tira%2FLPeKTDlj%2Fpl9gr%2FMdwtaZEzcpXSfXG7eIR%2BIb%2FFb8PgEDB1UFR6NslUzaKF3r2SSLMNLor1hHnzn5D6MaNhl06N4zrcflRz4efUGKrDRQWojJLqaXtQfmmllBeEzTcH20sUj0U54uwQ6njy5wUt&X-Amz-Signature=7c51167d70f36300eb4ba6f72b15490cd78e8962412e426d712b4a5fc0adb002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
