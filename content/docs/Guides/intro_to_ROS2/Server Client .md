---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHYZZPV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDs0BYHvWDhSECC%2F9A%2Bmc6ICXOztvJdIIAwSjuWsdQe%2BAIhALdxWBc20vVUlf%2F1XTZGAqWEn0I2DlLHZFFdeIGShiCrKv8DCEQQABoMNjM3NDIzMTgzODA1Igy4084SkVu31d1L1jUq3AOhm6Zi5btDcqcCFbvK39WhA2naNOuCODo8bcgsWolbWXjDPNyB4bUFOwIHZ8FXSwFp%2Fci8zCeAe9h5Z%2BsTC0y%2FvNPT5dK7ORejxlVJsN7J3cS4uj%2BHqYDRJiBYg%2BnElvsrXjtip9CFxkuMc30Lkhlg6ioVgFkLFghA10qwMXj99wakZ7r4Mx5ulLNkfB3rThOoa83NXxfp5Riya1%2B75H6yH3TpmU7MxZEZBPun%2FzhTKc%2BDOmpKD2rY6kmYoygt%2FzLfhw8uY0MRe47VccGMJ0zXQFe7%2Fle5XFafKntMU8vRA8SaV5Xh4uJIPRPANcywuQxlhYth3BZLlqpjAkNKNED6s0nasDGS%2F6SZikQ0zfAMj7zLNYW0QARSu2J%2F7gbOGJhECaZ5Tj24ekn9NjjnvHKpR46sfd7p9P%2B7iHxHLCPFKxaNYhU9mY5SlZbpuJP0PrQ5%2FnYiZuyoG0VIGue3TwGzdJkdpWmOn42aHanCkTysyJXPw7urVOTGp6fXbbz8pxGSHVrDGPTL1uDEV7%2Fg73HktroPmRSCoqIMNfWY4k4RF%2FjjGXeLA1yqkqGvftcUJIcI8uFoxhzDYZevG1oStHmwoKfNtanybrZsJhTLokO%2Bzrvib49tE2dXo%2B1rYzDEp8LEBjqkAfd2BlPBd6K6E%2B324ZAOXe50%2FkTcvObXGPKoiBALHw9Nt0jXubEjZ6MoxIitb9%2Fa%2B71mLOrWdPv%2Fjb5QOEqyXvLfHlzeNdngaSlhDk3U0uMCPxVmpJ5rsdmSnJCYDVacFUuNxCiBXrf9sl2kfABqsAEjssRcGww6KkiJ6tJrP%2Fr6J3Olbxl5aYhYRahwOzAY3oH1Xvrga5%2Blr8P6%2Fj7zaWlaMX3t&X-Amz-Signature=00fced23ece3feaf6feecc9133383daa079a4ec090f67e119b28ad13ea3ba34b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHYZZPV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDs0BYHvWDhSECC%2F9A%2Bmc6ICXOztvJdIIAwSjuWsdQe%2BAIhALdxWBc20vVUlf%2F1XTZGAqWEn0I2DlLHZFFdeIGShiCrKv8DCEQQABoMNjM3NDIzMTgzODA1Igy4084SkVu31d1L1jUq3AOhm6Zi5btDcqcCFbvK39WhA2naNOuCODo8bcgsWolbWXjDPNyB4bUFOwIHZ8FXSwFp%2Fci8zCeAe9h5Z%2BsTC0y%2FvNPT5dK7ORejxlVJsN7J3cS4uj%2BHqYDRJiBYg%2BnElvsrXjtip9CFxkuMc30Lkhlg6ioVgFkLFghA10qwMXj99wakZ7r4Mx5ulLNkfB3rThOoa83NXxfp5Riya1%2B75H6yH3TpmU7MxZEZBPun%2FzhTKc%2BDOmpKD2rY6kmYoygt%2FzLfhw8uY0MRe47VccGMJ0zXQFe7%2Fle5XFafKntMU8vRA8SaV5Xh4uJIPRPANcywuQxlhYth3BZLlqpjAkNKNED6s0nasDGS%2F6SZikQ0zfAMj7zLNYW0QARSu2J%2F7gbOGJhECaZ5Tj24ekn9NjjnvHKpR46sfd7p9P%2B7iHxHLCPFKxaNYhU9mY5SlZbpuJP0PrQ5%2FnYiZuyoG0VIGue3TwGzdJkdpWmOn42aHanCkTysyJXPw7urVOTGp6fXbbz8pxGSHVrDGPTL1uDEV7%2Fg73HktroPmRSCoqIMNfWY4k4RF%2FjjGXeLA1yqkqGvftcUJIcI8uFoxhzDYZevG1oStHmwoKfNtanybrZsJhTLokO%2Bzrvib49tE2dXo%2B1rYzDEp8LEBjqkAfd2BlPBd6K6E%2B324ZAOXe50%2FkTcvObXGPKoiBALHw9Nt0jXubEjZ6MoxIitb9%2Fa%2B71mLOrWdPv%2Fjb5QOEqyXvLfHlzeNdngaSlhDk3U0uMCPxVmpJ5rsdmSnJCYDVacFUuNxCiBXrf9sl2kfABqsAEjssRcGww6KkiJ6tJrP%2Fr6J3Olbxl5aYhYRahwOzAY3oH1Xvrga5%2Blr8P6%2Fj7zaWlaMX3t&X-Amz-Signature=824c6b2069f26ae32d05711e8ea3ebad66eb01c7bf3803ade37616bf5971888d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHYZZPV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDs0BYHvWDhSECC%2F9A%2Bmc6ICXOztvJdIIAwSjuWsdQe%2BAIhALdxWBc20vVUlf%2F1XTZGAqWEn0I2DlLHZFFdeIGShiCrKv8DCEQQABoMNjM3NDIzMTgzODA1Igy4084SkVu31d1L1jUq3AOhm6Zi5btDcqcCFbvK39WhA2naNOuCODo8bcgsWolbWXjDPNyB4bUFOwIHZ8FXSwFp%2Fci8zCeAe9h5Z%2BsTC0y%2FvNPT5dK7ORejxlVJsN7J3cS4uj%2BHqYDRJiBYg%2BnElvsrXjtip9CFxkuMc30Lkhlg6ioVgFkLFghA10qwMXj99wakZ7r4Mx5ulLNkfB3rThOoa83NXxfp5Riya1%2B75H6yH3TpmU7MxZEZBPun%2FzhTKc%2BDOmpKD2rY6kmYoygt%2FzLfhw8uY0MRe47VccGMJ0zXQFe7%2Fle5XFafKntMU8vRA8SaV5Xh4uJIPRPANcywuQxlhYth3BZLlqpjAkNKNED6s0nasDGS%2F6SZikQ0zfAMj7zLNYW0QARSu2J%2F7gbOGJhECaZ5Tj24ekn9NjjnvHKpR46sfd7p9P%2B7iHxHLCPFKxaNYhU9mY5SlZbpuJP0PrQ5%2FnYiZuyoG0VIGue3TwGzdJkdpWmOn42aHanCkTysyJXPw7urVOTGp6fXbbz8pxGSHVrDGPTL1uDEV7%2Fg73HktroPmRSCoqIMNfWY4k4RF%2FjjGXeLA1yqkqGvftcUJIcI8uFoxhzDYZevG1oStHmwoKfNtanybrZsJhTLokO%2Bzrvib49tE2dXo%2B1rYzDEp8LEBjqkAfd2BlPBd6K6E%2B324ZAOXe50%2FkTcvObXGPKoiBALHw9Nt0jXubEjZ6MoxIitb9%2Fa%2B71mLOrWdPv%2Fjb5QOEqyXvLfHlzeNdngaSlhDk3U0uMCPxVmpJ5rsdmSnJCYDVacFUuNxCiBXrf9sl2kfABqsAEjssRcGww6KkiJ6tJrP%2Fr6J3Olbxl5aYhYRahwOzAY3oH1Xvrga5%2Blr8P6%2Fj7zaWlaMX3t&X-Amz-Signature=4942f6751ee4127d5a2f1896bc2347b4b30b89ec6693e51aab6e73ddc8193fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHYZZPV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDs0BYHvWDhSECC%2F9A%2Bmc6ICXOztvJdIIAwSjuWsdQe%2BAIhALdxWBc20vVUlf%2F1XTZGAqWEn0I2DlLHZFFdeIGShiCrKv8DCEQQABoMNjM3NDIzMTgzODA1Igy4084SkVu31d1L1jUq3AOhm6Zi5btDcqcCFbvK39WhA2naNOuCODo8bcgsWolbWXjDPNyB4bUFOwIHZ8FXSwFp%2Fci8zCeAe9h5Z%2BsTC0y%2FvNPT5dK7ORejxlVJsN7J3cS4uj%2BHqYDRJiBYg%2BnElvsrXjtip9CFxkuMc30Lkhlg6ioVgFkLFghA10qwMXj99wakZ7r4Mx5ulLNkfB3rThOoa83NXxfp5Riya1%2B75H6yH3TpmU7MxZEZBPun%2FzhTKc%2BDOmpKD2rY6kmYoygt%2FzLfhw8uY0MRe47VccGMJ0zXQFe7%2Fle5XFafKntMU8vRA8SaV5Xh4uJIPRPANcywuQxlhYth3BZLlqpjAkNKNED6s0nasDGS%2F6SZikQ0zfAMj7zLNYW0QARSu2J%2F7gbOGJhECaZ5Tj24ekn9NjjnvHKpR46sfd7p9P%2B7iHxHLCPFKxaNYhU9mY5SlZbpuJP0PrQ5%2FnYiZuyoG0VIGue3TwGzdJkdpWmOn42aHanCkTysyJXPw7urVOTGp6fXbbz8pxGSHVrDGPTL1uDEV7%2Fg73HktroPmRSCoqIMNfWY4k4RF%2FjjGXeLA1yqkqGvftcUJIcI8uFoxhzDYZevG1oStHmwoKfNtanybrZsJhTLokO%2Bzrvib49tE2dXo%2B1rYzDEp8LEBjqkAfd2BlPBd6K6E%2B324ZAOXe50%2FkTcvObXGPKoiBALHw9Nt0jXubEjZ6MoxIitb9%2Fa%2B71mLOrWdPv%2Fjb5QOEqyXvLfHlzeNdngaSlhDk3U0uMCPxVmpJ5rsdmSnJCYDVacFUuNxCiBXrf9sl2kfABqsAEjssRcGww6KkiJ6tJrP%2Fr6J3Olbxl5aYhYRahwOzAY3oH1Xvrga5%2Blr8P6%2Fj7zaWlaMX3t&X-Amz-Signature=74643ad9c14bd9ade7bc24efaea7eb2e2d8b1d17fe07300b3f6c07afbb51543d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHYZZPV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDs0BYHvWDhSECC%2F9A%2Bmc6ICXOztvJdIIAwSjuWsdQe%2BAIhALdxWBc20vVUlf%2F1XTZGAqWEn0I2DlLHZFFdeIGShiCrKv8DCEQQABoMNjM3NDIzMTgzODA1Igy4084SkVu31d1L1jUq3AOhm6Zi5btDcqcCFbvK39WhA2naNOuCODo8bcgsWolbWXjDPNyB4bUFOwIHZ8FXSwFp%2Fci8zCeAe9h5Z%2BsTC0y%2FvNPT5dK7ORejxlVJsN7J3cS4uj%2BHqYDRJiBYg%2BnElvsrXjtip9CFxkuMc30Lkhlg6ioVgFkLFghA10qwMXj99wakZ7r4Mx5ulLNkfB3rThOoa83NXxfp5Riya1%2B75H6yH3TpmU7MxZEZBPun%2FzhTKc%2BDOmpKD2rY6kmYoygt%2FzLfhw8uY0MRe47VccGMJ0zXQFe7%2Fle5XFafKntMU8vRA8SaV5Xh4uJIPRPANcywuQxlhYth3BZLlqpjAkNKNED6s0nasDGS%2F6SZikQ0zfAMj7zLNYW0QARSu2J%2F7gbOGJhECaZ5Tj24ekn9NjjnvHKpR46sfd7p9P%2B7iHxHLCPFKxaNYhU9mY5SlZbpuJP0PrQ5%2FnYiZuyoG0VIGue3TwGzdJkdpWmOn42aHanCkTysyJXPw7urVOTGp6fXbbz8pxGSHVrDGPTL1uDEV7%2Fg73HktroPmRSCoqIMNfWY4k4RF%2FjjGXeLA1yqkqGvftcUJIcI8uFoxhzDYZevG1oStHmwoKfNtanybrZsJhTLokO%2Bzrvib49tE2dXo%2B1rYzDEp8LEBjqkAfd2BlPBd6K6E%2B324ZAOXe50%2FkTcvObXGPKoiBALHw9Nt0jXubEjZ6MoxIitb9%2Fa%2B71mLOrWdPv%2Fjb5QOEqyXvLfHlzeNdngaSlhDk3U0uMCPxVmpJ5rsdmSnJCYDVacFUuNxCiBXrf9sl2kfABqsAEjssRcGww6KkiJ6tJrP%2Fr6J3Olbxl5aYhYRahwOzAY3oH1Xvrga5%2Blr8P6%2Fj7zaWlaMX3t&X-Amz-Signature=ed07df049e295a4c8f2e7d42720d1677aee34bb612da33a62b4ae9299ce5865e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
