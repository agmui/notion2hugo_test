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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ISINFZL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJIlU1kJuBNRXXPgq%2B%2FZwPDki53KEv%2B6ifpPmld1zvnAIhANeWNaHyTFszl9fsmDWpXDHhrs9iHhArqvRaS%2FCWQbglKv8DCCQQABoMNjM3NDIzMTgzODA1IgykTV7IX2qc3Erv5BEq3AO1b%2Fsqnrs5EGJhZJ0NSjfXKG5sSve4VIii63CGX8Xj%2Fir8ntYn1VjxIRJSAXChl8cdTO6waLhLljwZ7PsIn73trSq3B4GBum78My35Z2ntT6n5FOS8JMZQ0VkOxoGppSCmc%2BEhcKl3%2ByXozVqFK5UK%2FGpvYjkuT0cIqdrW8k2XcL%2F8mEoni980lQjHSYkLKqx5qT4DmnSNt1zYaacl5xhMiFYiKGLPu0Ue0Jx1HLUCUCpTuSRmRk6NfWkw%2F%2FBiffBv77zqrlrxBaj%2F%2FNMfd2%2FI7TJfBoS6yErhNqVDZsUsubHBcSsOtYlq2XDA%2Fxz2DyJRyC9C3PI0uHqq8PMh4lOV%2F%2FidbHsYOCsxvVPyEgXWdR4SgQGnCU9VpNnOK0KetHetLTIA98HHZyYf%2FPL4ClGO%2BI5VxkLxgs%2F2zn%2BECWS2niOCJpCsHAs8%2B72htqsOnD9g03JiP40uQBhlN5DkOI8AB1VhrwD7%2BYCHoCRL0Uyw2qtpX6clFsZDz5jvqG9UYmPRi9RufgkBi0ErjTflxvQC%2BgwNBsymDsPw5ZZrS6lV6VLFPcaMdJ8%2FsbNTVEjVu5g6ud5znnIrXWLdIZYKrsd1kPSSdsx47RDAnqaqmNItw2th95yXhSCKQ7Rn7DC7obvEBjqkAYddggfl9Ni2s51pmX4Nixp8nT17xNcRGFmFk0doYFXEecNReWR1kZhSdwv4wDDdRpnPEdES5a3sbx%2BT1tt%2Bue62DJlCelwabiPG7EVEd%2FJuKLpB1I2%2BwWGkovehrIGMi44SbaLp4SxBr7x82HSHtfGYjyGG6SHiE4%2FCRtbt6mhuwRXK%2FHwaT1lNvve6nrTOTyPJ8WXujBxk%2BFXlRa264AJZpG67&X-Amz-Signature=86d9ab9595bb1a3d6d36546e19cd4445ba3676fa901f224714b083d330fb7be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ISINFZL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJIlU1kJuBNRXXPgq%2B%2FZwPDki53KEv%2B6ifpPmld1zvnAIhANeWNaHyTFszl9fsmDWpXDHhrs9iHhArqvRaS%2FCWQbglKv8DCCQQABoMNjM3NDIzMTgzODA1IgykTV7IX2qc3Erv5BEq3AO1b%2Fsqnrs5EGJhZJ0NSjfXKG5sSve4VIii63CGX8Xj%2Fir8ntYn1VjxIRJSAXChl8cdTO6waLhLljwZ7PsIn73trSq3B4GBum78My35Z2ntT6n5FOS8JMZQ0VkOxoGppSCmc%2BEhcKl3%2ByXozVqFK5UK%2FGpvYjkuT0cIqdrW8k2XcL%2F8mEoni980lQjHSYkLKqx5qT4DmnSNt1zYaacl5xhMiFYiKGLPu0Ue0Jx1HLUCUCpTuSRmRk6NfWkw%2F%2FBiffBv77zqrlrxBaj%2F%2FNMfd2%2FI7TJfBoS6yErhNqVDZsUsubHBcSsOtYlq2XDA%2Fxz2DyJRyC9C3PI0uHqq8PMh4lOV%2F%2FidbHsYOCsxvVPyEgXWdR4SgQGnCU9VpNnOK0KetHetLTIA98HHZyYf%2FPL4ClGO%2BI5VxkLxgs%2F2zn%2BECWS2niOCJpCsHAs8%2B72htqsOnD9g03JiP40uQBhlN5DkOI8AB1VhrwD7%2BYCHoCRL0Uyw2qtpX6clFsZDz5jvqG9UYmPRi9RufgkBi0ErjTflxvQC%2BgwNBsymDsPw5ZZrS6lV6VLFPcaMdJ8%2FsbNTVEjVu5g6ud5znnIrXWLdIZYKrsd1kPSSdsx47RDAnqaqmNItw2th95yXhSCKQ7Rn7DC7obvEBjqkAYddggfl9Ni2s51pmX4Nixp8nT17xNcRGFmFk0doYFXEecNReWR1kZhSdwv4wDDdRpnPEdES5a3sbx%2BT1tt%2Bue62DJlCelwabiPG7EVEd%2FJuKLpB1I2%2BwWGkovehrIGMi44SbaLp4SxBr7x82HSHtfGYjyGG6SHiE4%2FCRtbt6mhuwRXK%2FHwaT1lNvve6nrTOTyPJ8WXujBxk%2BFXlRa264AJZpG67&X-Amz-Signature=3d6c47dab8c7c7a4e4c9feb7719832e09ddc8523c201422010240c7cb19e1bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ISINFZL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJIlU1kJuBNRXXPgq%2B%2FZwPDki53KEv%2B6ifpPmld1zvnAIhANeWNaHyTFszl9fsmDWpXDHhrs9iHhArqvRaS%2FCWQbglKv8DCCQQABoMNjM3NDIzMTgzODA1IgykTV7IX2qc3Erv5BEq3AO1b%2Fsqnrs5EGJhZJ0NSjfXKG5sSve4VIii63CGX8Xj%2Fir8ntYn1VjxIRJSAXChl8cdTO6waLhLljwZ7PsIn73trSq3B4GBum78My35Z2ntT6n5FOS8JMZQ0VkOxoGppSCmc%2BEhcKl3%2ByXozVqFK5UK%2FGpvYjkuT0cIqdrW8k2XcL%2F8mEoni980lQjHSYkLKqx5qT4DmnSNt1zYaacl5xhMiFYiKGLPu0Ue0Jx1HLUCUCpTuSRmRk6NfWkw%2F%2FBiffBv77zqrlrxBaj%2F%2FNMfd2%2FI7TJfBoS6yErhNqVDZsUsubHBcSsOtYlq2XDA%2Fxz2DyJRyC9C3PI0uHqq8PMh4lOV%2F%2FidbHsYOCsxvVPyEgXWdR4SgQGnCU9VpNnOK0KetHetLTIA98HHZyYf%2FPL4ClGO%2BI5VxkLxgs%2F2zn%2BECWS2niOCJpCsHAs8%2B72htqsOnD9g03JiP40uQBhlN5DkOI8AB1VhrwD7%2BYCHoCRL0Uyw2qtpX6clFsZDz5jvqG9UYmPRi9RufgkBi0ErjTflxvQC%2BgwNBsymDsPw5ZZrS6lV6VLFPcaMdJ8%2FsbNTVEjVu5g6ud5znnIrXWLdIZYKrsd1kPSSdsx47RDAnqaqmNItw2th95yXhSCKQ7Rn7DC7obvEBjqkAYddggfl9Ni2s51pmX4Nixp8nT17xNcRGFmFk0doYFXEecNReWR1kZhSdwv4wDDdRpnPEdES5a3sbx%2BT1tt%2Bue62DJlCelwabiPG7EVEd%2FJuKLpB1I2%2BwWGkovehrIGMi44SbaLp4SxBr7x82HSHtfGYjyGG6SHiE4%2FCRtbt6mhuwRXK%2FHwaT1lNvve6nrTOTyPJ8WXujBxk%2BFXlRa264AJZpG67&X-Amz-Signature=34e36904e3e6b035ba9c4a07c3a148966b5c8c425743424147ca2dc6db30e0e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ISINFZL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJIlU1kJuBNRXXPgq%2B%2FZwPDki53KEv%2B6ifpPmld1zvnAIhANeWNaHyTFszl9fsmDWpXDHhrs9iHhArqvRaS%2FCWQbglKv8DCCQQABoMNjM3NDIzMTgzODA1IgykTV7IX2qc3Erv5BEq3AO1b%2Fsqnrs5EGJhZJ0NSjfXKG5sSve4VIii63CGX8Xj%2Fir8ntYn1VjxIRJSAXChl8cdTO6waLhLljwZ7PsIn73trSq3B4GBum78My35Z2ntT6n5FOS8JMZQ0VkOxoGppSCmc%2BEhcKl3%2ByXozVqFK5UK%2FGpvYjkuT0cIqdrW8k2XcL%2F8mEoni980lQjHSYkLKqx5qT4DmnSNt1zYaacl5xhMiFYiKGLPu0Ue0Jx1HLUCUCpTuSRmRk6NfWkw%2F%2FBiffBv77zqrlrxBaj%2F%2FNMfd2%2FI7TJfBoS6yErhNqVDZsUsubHBcSsOtYlq2XDA%2Fxz2DyJRyC9C3PI0uHqq8PMh4lOV%2F%2FidbHsYOCsxvVPyEgXWdR4SgQGnCU9VpNnOK0KetHetLTIA98HHZyYf%2FPL4ClGO%2BI5VxkLxgs%2F2zn%2BECWS2niOCJpCsHAs8%2B72htqsOnD9g03JiP40uQBhlN5DkOI8AB1VhrwD7%2BYCHoCRL0Uyw2qtpX6clFsZDz5jvqG9UYmPRi9RufgkBi0ErjTflxvQC%2BgwNBsymDsPw5ZZrS6lV6VLFPcaMdJ8%2FsbNTVEjVu5g6ud5znnIrXWLdIZYKrsd1kPSSdsx47RDAnqaqmNItw2th95yXhSCKQ7Rn7DC7obvEBjqkAYddggfl9Ni2s51pmX4Nixp8nT17xNcRGFmFk0doYFXEecNReWR1kZhSdwv4wDDdRpnPEdES5a3sbx%2BT1tt%2Bue62DJlCelwabiPG7EVEd%2FJuKLpB1I2%2BwWGkovehrIGMi44SbaLp4SxBr7x82HSHtfGYjyGG6SHiE4%2FCRtbt6mhuwRXK%2FHwaT1lNvve6nrTOTyPJ8WXujBxk%2BFXlRa264AJZpG67&X-Amz-Signature=c0da2005ae2fc221c99b49292fbd083b7a0b7f86355de00ad643724d2bbd6730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ISINFZL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJIlU1kJuBNRXXPgq%2B%2FZwPDki53KEv%2B6ifpPmld1zvnAIhANeWNaHyTFszl9fsmDWpXDHhrs9iHhArqvRaS%2FCWQbglKv8DCCQQABoMNjM3NDIzMTgzODA1IgykTV7IX2qc3Erv5BEq3AO1b%2Fsqnrs5EGJhZJ0NSjfXKG5sSve4VIii63CGX8Xj%2Fir8ntYn1VjxIRJSAXChl8cdTO6waLhLljwZ7PsIn73trSq3B4GBum78My35Z2ntT6n5FOS8JMZQ0VkOxoGppSCmc%2BEhcKl3%2ByXozVqFK5UK%2FGpvYjkuT0cIqdrW8k2XcL%2F8mEoni980lQjHSYkLKqx5qT4DmnSNt1zYaacl5xhMiFYiKGLPu0Ue0Jx1HLUCUCpTuSRmRk6NfWkw%2F%2FBiffBv77zqrlrxBaj%2F%2FNMfd2%2FI7TJfBoS6yErhNqVDZsUsubHBcSsOtYlq2XDA%2Fxz2DyJRyC9C3PI0uHqq8PMh4lOV%2F%2FidbHsYOCsxvVPyEgXWdR4SgQGnCU9VpNnOK0KetHetLTIA98HHZyYf%2FPL4ClGO%2BI5VxkLxgs%2F2zn%2BECWS2niOCJpCsHAs8%2B72htqsOnD9g03JiP40uQBhlN5DkOI8AB1VhrwD7%2BYCHoCRL0Uyw2qtpX6clFsZDz5jvqG9UYmPRi9RufgkBi0ErjTflxvQC%2BgwNBsymDsPw5ZZrS6lV6VLFPcaMdJ8%2FsbNTVEjVu5g6ud5znnIrXWLdIZYKrsd1kPSSdsx47RDAnqaqmNItw2th95yXhSCKQ7Rn7DC7obvEBjqkAYddggfl9Ni2s51pmX4Nixp8nT17xNcRGFmFk0doYFXEecNReWR1kZhSdwv4wDDdRpnPEdES5a3sbx%2BT1tt%2Bue62DJlCelwabiPG7EVEd%2FJuKLpB1I2%2BwWGkovehrIGMi44SbaLp4SxBr7x82HSHtfGYjyGG6SHiE4%2FCRtbt6mhuwRXK%2FHwaT1lNvve6nrTOTyPJ8WXujBxk%2BFXlRa264AJZpG67&X-Amz-Signature=cf9849883d78d99b1c308a094fdc565beeb67060247ec8e128eace319b7e3f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
