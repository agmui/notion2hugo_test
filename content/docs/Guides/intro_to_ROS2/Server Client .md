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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67NEVIA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFQ4FebJBJqG503MGFwh3l5exd3Tr518qTat3lIpM%2FRAIgDcC%2F%2B0rOE7VZNZMAnKwyMSruboy2UlS3dvD59Sb2cuIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGVn15yZTf4AhurOyrcA536O4AqB93TdzHAtNbEWAXwHrkJKuI4SR9qSqRsQqCeJHA7r3gyvCRo60stlX0bBmh7cAfSoO58rYjfhnDxYgcg4q%2BLiALqZmXXq3AO23x4Gj4xvzGGkL5xbABHShuqZrNhot240kAWI%2FFqVHum1AMomiyIA01JLhHyEpMuk0Lu1Bb5txdV0qeFaWaObgY6Ym%2Fn8w4p2pTS12MKJz%2BCcsq6qb9btoc1jtHMeRfoNHl4nIyEs6Y6dtlBph5AUwoQk%2FmeI1L02lPXiO8idq5SG3Od1MuP9%2BijySxAOa0Xap7yHRaWCcND9lala2Ot9tX%2FZh85w6U%2FmcxrjCxl0vKa1Rt7msHA9blSDMAibzbD%2BL1C7Hd8hoySmLZdWwzJeuKVMbeGnGipLWluArgcmVT6juSugtuuOlXRZzTcEQvW4iCM6J%2F9cn0v0J%2Fhs%2Bm919cbec7ODfyW1KrHiLMgWF9HqvcqKUto5FkoSdtho8b%2FknQWxbBvULJMFHeodKiOIbM75dywGIN3ALcr%2FjGtlRqN0YmtRwChVmcwglY7t4tFZBZ7qxNnyqmZNmlcwGqDBebTcxZ45%2B2Y98z%2B7aFlzLD8GK1e%2BQqeexROuE3VNWr0%2FGT2HrDEXD1vc1I1EuBJMM%2BCiMMGOqUBZ2GOfx%2FBmuGLlK1%2B%2FO%2FsLQB8O4ilZ9dA7cyeWgy148LlAJOq7hWZJGQ4DEGp8Cl8SKx%2FqMM8uiNOq16Zb2gwsMrxHIJAQxW6zJRSKy3xSV3gyDmapyIXkYGPJmr97KFoxXxRDecLBuykJDWpoQ7WwBv5VZgGgR3oimnzlW93PjLjbLwgMmNBLUbbXstIO%2FUDBqnKtireesdqp%2FgDkDrq4U7nWNb0&X-Amz-Signature=7ef6ddd864fee49d608d9890a452432ab492b53a6c4d7bb1c41d0b492246018a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67NEVIA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFQ4FebJBJqG503MGFwh3l5exd3Tr518qTat3lIpM%2FRAIgDcC%2F%2B0rOE7VZNZMAnKwyMSruboy2UlS3dvD59Sb2cuIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGVn15yZTf4AhurOyrcA536O4AqB93TdzHAtNbEWAXwHrkJKuI4SR9qSqRsQqCeJHA7r3gyvCRo60stlX0bBmh7cAfSoO58rYjfhnDxYgcg4q%2BLiALqZmXXq3AO23x4Gj4xvzGGkL5xbABHShuqZrNhot240kAWI%2FFqVHum1AMomiyIA01JLhHyEpMuk0Lu1Bb5txdV0qeFaWaObgY6Ym%2Fn8w4p2pTS12MKJz%2BCcsq6qb9btoc1jtHMeRfoNHl4nIyEs6Y6dtlBph5AUwoQk%2FmeI1L02lPXiO8idq5SG3Od1MuP9%2BijySxAOa0Xap7yHRaWCcND9lala2Ot9tX%2FZh85w6U%2FmcxrjCxl0vKa1Rt7msHA9blSDMAibzbD%2BL1C7Hd8hoySmLZdWwzJeuKVMbeGnGipLWluArgcmVT6juSugtuuOlXRZzTcEQvW4iCM6J%2F9cn0v0J%2Fhs%2Bm919cbec7ODfyW1KrHiLMgWF9HqvcqKUto5FkoSdtho8b%2FknQWxbBvULJMFHeodKiOIbM75dywGIN3ALcr%2FjGtlRqN0YmtRwChVmcwglY7t4tFZBZ7qxNnyqmZNmlcwGqDBebTcxZ45%2B2Y98z%2B7aFlzLD8GK1e%2BQqeexROuE3VNWr0%2FGT2HrDEXD1vc1I1EuBJMM%2BCiMMGOqUBZ2GOfx%2FBmuGLlK1%2B%2FO%2FsLQB8O4ilZ9dA7cyeWgy148LlAJOq7hWZJGQ4DEGp8Cl8SKx%2FqMM8uiNOq16Zb2gwsMrxHIJAQxW6zJRSKy3xSV3gyDmapyIXkYGPJmr97KFoxXxRDecLBuykJDWpoQ7WwBv5VZgGgR3oimnzlW93PjLjbLwgMmNBLUbbXstIO%2FUDBqnKtireesdqp%2FgDkDrq4U7nWNb0&X-Amz-Signature=a9e45678a82febd842a5f60d7150d3df9c91456a9b078660f667a774a85451a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67NEVIA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFQ4FebJBJqG503MGFwh3l5exd3Tr518qTat3lIpM%2FRAIgDcC%2F%2B0rOE7VZNZMAnKwyMSruboy2UlS3dvD59Sb2cuIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGVn15yZTf4AhurOyrcA536O4AqB93TdzHAtNbEWAXwHrkJKuI4SR9qSqRsQqCeJHA7r3gyvCRo60stlX0bBmh7cAfSoO58rYjfhnDxYgcg4q%2BLiALqZmXXq3AO23x4Gj4xvzGGkL5xbABHShuqZrNhot240kAWI%2FFqVHum1AMomiyIA01JLhHyEpMuk0Lu1Bb5txdV0qeFaWaObgY6Ym%2Fn8w4p2pTS12MKJz%2BCcsq6qb9btoc1jtHMeRfoNHl4nIyEs6Y6dtlBph5AUwoQk%2FmeI1L02lPXiO8idq5SG3Od1MuP9%2BijySxAOa0Xap7yHRaWCcND9lala2Ot9tX%2FZh85w6U%2FmcxrjCxl0vKa1Rt7msHA9blSDMAibzbD%2BL1C7Hd8hoySmLZdWwzJeuKVMbeGnGipLWluArgcmVT6juSugtuuOlXRZzTcEQvW4iCM6J%2F9cn0v0J%2Fhs%2Bm919cbec7ODfyW1KrHiLMgWF9HqvcqKUto5FkoSdtho8b%2FknQWxbBvULJMFHeodKiOIbM75dywGIN3ALcr%2FjGtlRqN0YmtRwChVmcwglY7t4tFZBZ7qxNnyqmZNmlcwGqDBebTcxZ45%2B2Y98z%2B7aFlzLD8GK1e%2BQqeexROuE3VNWr0%2FGT2HrDEXD1vc1I1EuBJMM%2BCiMMGOqUBZ2GOfx%2FBmuGLlK1%2B%2FO%2FsLQB8O4ilZ9dA7cyeWgy148LlAJOq7hWZJGQ4DEGp8Cl8SKx%2FqMM8uiNOq16Zb2gwsMrxHIJAQxW6zJRSKy3xSV3gyDmapyIXkYGPJmr97KFoxXxRDecLBuykJDWpoQ7WwBv5VZgGgR3oimnzlW93PjLjbLwgMmNBLUbbXstIO%2FUDBqnKtireesdqp%2FgDkDrq4U7nWNb0&X-Amz-Signature=1b14319dbddf1ab586f150e1402af3cb17c2fc6d4eb57652cf7de0ca5a278ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67NEVIA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFQ4FebJBJqG503MGFwh3l5exd3Tr518qTat3lIpM%2FRAIgDcC%2F%2B0rOE7VZNZMAnKwyMSruboy2UlS3dvD59Sb2cuIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGVn15yZTf4AhurOyrcA536O4AqB93TdzHAtNbEWAXwHrkJKuI4SR9qSqRsQqCeJHA7r3gyvCRo60stlX0bBmh7cAfSoO58rYjfhnDxYgcg4q%2BLiALqZmXXq3AO23x4Gj4xvzGGkL5xbABHShuqZrNhot240kAWI%2FFqVHum1AMomiyIA01JLhHyEpMuk0Lu1Bb5txdV0qeFaWaObgY6Ym%2Fn8w4p2pTS12MKJz%2BCcsq6qb9btoc1jtHMeRfoNHl4nIyEs6Y6dtlBph5AUwoQk%2FmeI1L02lPXiO8idq5SG3Od1MuP9%2BijySxAOa0Xap7yHRaWCcND9lala2Ot9tX%2FZh85w6U%2FmcxrjCxl0vKa1Rt7msHA9blSDMAibzbD%2BL1C7Hd8hoySmLZdWwzJeuKVMbeGnGipLWluArgcmVT6juSugtuuOlXRZzTcEQvW4iCM6J%2F9cn0v0J%2Fhs%2Bm919cbec7ODfyW1KrHiLMgWF9HqvcqKUto5FkoSdtho8b%2FknQWxbBvULJMFHeodKiOIbM75dywGIN3ALcr%2FjGtlRqN0YmtRwChVmcwglY7t4tFZBZ7qxNnyqmZNmlcwGqDBebTcxZ45%2B2Y98z%2B7aFlzLD8GK1e%2BQqeexROuE3VNWr0%2FGT2HrDEXD1vc1I1EuBJMM%2BCiMMGOqUBZ2GOfx%2FBmuGLlK1%2B%2FO%2FsLQB8O4ilZ9dA7cyeWgy148LlAJOq7hWZJGQ4DEGp8Cl8SKx%2FqMM8uiNOq16Zb2gwsMrxHIJAQxW6zJRSKy3xSV3gyDmapyIXkYGPJmr97KFoxXxRDecLBuykJDWpoQ7WwBv5VZgGgR3oimnzlW93PjLjbLwgMmNBLUbbXstIO%2FUDBqnKtireesdqp%2FgDkDrq4U7nWNb0&X-Amz-Signature=f03691e53ccaed6bb0ec8edaa11946db2f2975ac97886ce453104f09f6679591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67NEVIA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFQ4FebJBJqG503MGFwh3l5exd3Tr518qTat3lIpM%2FRAIgDcC%2F%2B0rOE7VZNZMAnKwyMSruboy2UlS3dvD59Sb2cuIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGVn15yZTf4AhurOyrcA536O4AqB93TdzHAtNbEWAXwHrkJKuI4SR9qSqRsQqCeJHA7r3gyvCRo60stlX0bBmh7cAfSoO58rYjfhnDxYgcg4q%2BLiALqZmXXq3AO23x4Gj4xvzGGkL5xbABHShuqZrNhot240kAWI%2FFqVHum1AMomiyIA01JLhHyEpMuk0Lu1Bb5txdV0qeFaWaObgY6Ym%2Fn8w4p2pTS12MKJz%2BCcsq6qb9btoc1jtHMeRfoNHl4nIyEs6Y6dtlBph5AUwoQk%2FmeI1L02lPXiO8idq5SG3Od1MuP9%2BijySxAOa0Xap7yHRaWCcND9lala2Ot9tX%2FZh85w6U%2FmcxrjCxl0vKa1Rt7msHA9blSDMAibzbD%2BL1C7Hd8hoySmLZdWwzJeuKVMbeGnGipLWluArgcmVT6juSugtuuOlXRZzTcEQvW4iCM6J%2F9cn0v0J%2Fhs%2Bm919cbec7ODfyW1KrHiLMgWF9HqvcqKUto5FkoSdtho8b%2FknQWxbBvULJMFHeodKiOIbM75dywGIN3ALcr%2FjGtlRqN0YmtRwChVmcwglY7t4tFZBZ7qxNnyqmZNmlcwGqDBebTcxZ45%2B2Y98z%2B7aFlzLD8GK1e%2BQqeexROuE3VNWr0%2FGT2HrDEXD1vc1I1EuBJMM%2BCiMMGOqUBZ2GOfx%2FBmuGLlK1%2B%2FO%2FsLQB8O4ilZ9dA7cyeWgy148LlAJOq7hWZJGQ4DEGp8Cl8SKx%2FqMM8uiNOq16Zb2gwsMrxHIJAQxW6zJRSKy3xSV3gyDmapyIXkYGPJmr97KFoxXxRDecLBuykJDWpoQ7WwBv5VZgGgR3oimnzlW93PjLjbLwgMmNBLUbbXstIO%2FUDBqnKtireesdqp%2FgDkDrq4U7nWNb0&X-Amz-Signature=35e9bdf04b26c15652388d66ac91284f2091214de5c1965580d477255e30bbe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
