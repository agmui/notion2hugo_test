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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TDGZSLT%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJzY%2BuGlkxlaFHi7MCxC%2BP95wOR6BDlHY2SfBwkZp2HAIhAMTDVOhH8SpmOrUOZOMa4xiHoaKrA2kxXXvgor8sAVLWKv8DCEAQABoMNjM3NDIzMTgzODA1IgxR%2FfP3dKJj2yTj1U0q3AO59vF9jg8GRDjFqNkoue4X1Kel0%2BdRcm4x5CgdAFtGrwu789OsTCCNCZ655jr253fLSVcXSynEnl2sqTJcvmSzAJ60M2MN7RojckOJdoRxpYZ2EZ5%2B2BSv5DvzvdjN458XNAo4he%2F7QCWV7yzm43XtnwpKhXLYgcy6O1P7LQ3Ep%2F83UbGMhHkM8EZO1%2FZ7EvES4gH%2FJDsBPABVysl6nnGh1a5KphswFTLL17mXXZvYZ7EkBB54Kmr%2Bph89z5aBmroymNMX9IbY7o8i42cnnfcAIcZNhLkUOzhH4AHlirNKlcPt7qHpa%2BynHkVIyF9eyu7%2FHozWOTsi1pWvcOsy7fP0oOwtMJLRqM%2BE0%2Fn0awUvPid1T0qWgSQk3HFOwPOMO9%2F8miDFC7zoS02CCgK4nsvuvP0YnoIBK6fJlbIz1L9Nvtw5gVTdGCwdCCgFBC2c7Ku2sbU4%2BzPwpBJRM9LjjomH5OStozWTioxDnawXfOyGxD1ME7oojxHGPzpOZPHc1gPNCjuNQ24vZE7wtcpRaReOj%2FkOHKUesX6nOItKCtWE2mtzT%2BypD41x2AB6oRdCbzcX%2FvjuHinYw3xdACaPm%2FlFPb2raFGGXBL8WwcER76JC2f7pSjCpVwZYoiFKTCghLLABjqkAS1gi4hJc0l1gY9dVxlzG7eE8qYnkmxTxzF%2FZHzwiWQKhBUTbjma0sp8KXqX1UQuxL8yOcxb9oXpap9ckHJOHnG3xWSOuCstCwaH5ahdM0Ftj24UarksmF11%2BOfik2vysayIQK0RmCwCGxZPVFu%2FPJWhCaMKIiNtsVgayRR%2B32R2FOqwS9kWDecpKQq2p%2FjoP0oE7gVOyEwg3kfd7IRqgX2lKRvB&X-Amz-Signature=3df6a7bff444debe5d3c0b5a09e85ef59b824b186620952c79f7b77c39006ae6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TDGZSLT%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJzY%2BuGlkxlaFHi7MCxC%2BP95wOR6BDlHY2SfBwkZp2HAIhAMTDVOhH8SpmOrUOZOMa4xiHoaKrA2kxXXvgor8sAVLWKv8DCEAQABoMNjM3NDIzMTgzODA1IgxR%2FfP3dKJj2yTj1U0q3AO59vF9jg8GRDjFqNkoue4X1Kel0%2BdRcm4x5CgdAFtGrwu789OsTCCNCZ655jr253fLSVcXSynEnl2sqTJcvmSzAJ60M2MN7RojckOJdoRxpYZ2EZ5%2B2BSv5DvzvdjN458XNAo4he%2F7QCWV7yzm43XtnwpKhXLYgcy6O1P7LQ3Ep%2F83UbGMhHkM8EZO1%2FZ7EvES4gH%2FJDsBPABVysl6nnGh1a5KphswFTLL17mXXZvYZ7EkBB54Kmr%2Bph89z5aBmroymNMX9IbY7o8i42cnnfcAIcZNhLkUOzhH4AHlirNKlcPt7qHpa%2BynHkVIyF9eyu7%2FHozWOTsi1pWvcOsy7fP0oOwtMJLRqM%2BE0%2Fn0awUvPid1T0qWgSQk3HFOwPOMO9%2F8miDFC7zoS02CCgK4nsvuvP0YnoIBK6fJlbIz1L9Nvtw5gVTdGCwdCCgFBC2c7Ku2sbU4%2BzPwpBJRM9LjjomH5OStozWTioxDnawXfOyGxD1ME7oojxHGPzpOZPHc1gPNCjuNQ24vZE7wtcpRaReOj%2FkOHKUesX6nOItKCtWE2mtzT%2BypD41x2AB6oRdCbzcX%2FvjuHinYw3xdACaPm%2FlFPb2raFGGXBL8WwcER76JC2f7pSjCpVwZYoiFKTCghLLABjqkAS1gi4hJc0l1gY9dVxlzG7eE8qYnkmxTxzF%2FZHzwiWQKhBUTbjma0sp8KXqX1UQuxL8yOcxb9oXpap9ckHJOHnG3xWSOuCstCwaH5ahdM0Ftj24UarksmF11%2BOfik2vysayIQK0RmCwCGxZPVFu%2FPJWhCaMKIiNtsVgayRR%2B32R2FOqwS9kWDecpKQq2p%2FjoP0oE7gVOyEwg3kfd7IRqgX2lKRvB&X-Amz-Signature=c9f9e9fbab91370353c5037ef6f0c7714e66ac6685725ea49c51641b4d7dc5c9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TDGZSLT%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJzY%2BuGlkxlaFHi7MCxC%2BP95wOR6BDlHY2SfBwkZp2HAIhAMTDVOhH8SpmOrUOZOMa4xiHoaKrA2kxXXvgor8sAVLWKv8DCEAQABoMNjM3NDIzMTgzODA1IgxR%2FfP3dKJj2yTj1U0q3AO59vF9jg8GRDjFqNkoue4X1Kel0%2BdRcm4x5CgdAFtGrwu789OsTCCNCZ655jr253fLSVcXSynEnl2sqTJcvmSzAJ60M2MN7RojckOJdoRxpYZ2EZ5%2B2BSv5DvzvdjN458XNAo4he%2F7QCWV7yzm43XtnwpKhXLYgcy6O1P7LQ3Ep%2F83UbGMhHkM8EZO1%2FZ7EvES4gH%2FJDsBPABVysl6nnGh1a5KphswFTLL17mXXZvYZ7EkBB54Kmr%2Bph89z5aBmroymNMX9IbY7o8i42cnnfcAIcZNhLkUOzhH4AHlirNKlcPt7qHpa%2BynHkVIyF9eyu7%2FHozWOTsi1pWvcOsy7fP0oOwtMJLRqM%2BE0%2Fn0awUvPid1T0qWgSQk3HFOwPOMO9%2F8miDFC7zoS02CCgK4nsvuvP0YnoIBK6fJlbIz1L9Nvtw5gVTdGCwdCCgFBC2c7Ku2sbU4%2BzPwpBJRM9LjjomH5OStozWTioxDnawXfOyGxD1ME7oojxHGPzpOZPHc1gPNCjuNQ24vZE7wtcpRaReOj%2FkOHKUesX6nOItKCtWE2mtzT%2BypD41x2AB6oRdCbzcX%2FvjuHinYw3xdACaPm%2FlFPb2raFGGXBL8WwcER76JC2f7pSjCpVwZYoiFKTCghLLABjqkAS1gi4hJc0l1gY9dVxlzG7eE8qYnkmxTxzF%2FZHzwiWQKhBUTbjma0sp8KXqX1UQuxL8yOcxb9oXpap9ckHJOHnG3xWSOuCstCwaH5ahdM0Ftj24UarksmF11%2BOfik2vysayIQK0RmCwCGxZPVFu%2FPJWhCaMKIiNtsVgayRR%2B32R2FOqwS9kWDecpKQq2p%2FjoP0oE7gVOyEwg3kfd7IRqgX2lKRvB&X-Amz-Signature=83c01ce4ae12a328a8bb5a666e2dd8824ef6ad8cfc459bdc37e9f4f857b1d44f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TDGZSLT%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJzY%2BuGlkxlaFHi7MCxC%2BP95wOR6BDlHY2SfBwkZp2HAIhAMTDVOhH8SpmOrUOZOMa4xiHoaKrA2kxXXvgor8sAVLWKv8DCEAQABoMNjM3NDIzMTgzODA1IgxR%2FfP3dKJj2yTj1U0q3AO59vF9jg8GRDjFqNkoue4X1Kel0%2BdRcm4x5CgdAFtGrwu789OsTCCNCZ655jr253fLSVcXSynEnl2sqTJcvmSzAJ60M2MN7RojckOJdoRxpYZ2EZ5%2B2BSv5DvzvdjN458XNAo4he%2F7QCWV7yzm43XtnwpKhXLYgcy6O1P7LQ3Ep%2F83UbGMhHkM8EZO1%2FZ7EvES4gH%2FJDsBPABVysl6nnGh1a5KphswFTLL17mXXZvYZ7EkBB54Kmr%2Bph89z5aBmroymNMX9IbY7o8i42cnnfcAIcZNhLkUOzhH4AHlirNKlcPt7qHpa%2BynHkVIyF9eyu7%2FHozWOTsi1pWvcOsy7fP0oOwtMJLRqM%2BE0%2Fn0awUvPid1T0qWgSQk3HFOwPOMO9%2F8miDFC7zoS02CCgK4nsvuvP0YnoIBK6fJlbIz1L9Nvtw5gVTdGCwdCCgFBC2c7Ku2sbU4%2BzPwpBJRM9LjjomH5OStozWTioxDnawXfOyGxD1ME7oojxHGPzpOZPHc1gPNCjuNQ24vZE7wtcpRaReOj%2FkOHKUesX6nOItKCtWE2mtzT%2BypD41x2AB6oRdCbzcX%2FvjuHinYw3xdACaPm%2FlFPb2raFGGXBL8WwcER76JC2f7pSjCpVwZYoiFKTCghLLABjqkAS1gi4hJc0l1gY9dVxlzG7eE8qYnkmxTxzF%2FZHzwiWQKhBUTbjma0sp8KXqX1UQuxL8yOcxb9oXpap9ckHJOHnG3xWSOuCstCwaH5ahdM0Ftj24UarksmF11%2BOfik2vysayIQK0RmCwCGxZPVFu%2FPJWhCaMKIiNtsVgayRR%2B32R2FOqwS9kWDecpKQq2p%2FjoP0oE7gVOyEwg3kfd7IRqgX2lKRvB&X-Amz-Signature=530810a73cae26c61b77f46a8ad54da328fef98bfc195f2343a5f0a024b54d49&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TDGZSLT%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJzY%2BuGlkxlaFHi7MCxC%2BP95wOR6BDlHY2SfBwkZp2HAIhAMTDVOhH8SpmOrUOZOMa4xiHoaKrA2kxXXvgor8sAVLWKv8DCEAQABoMNjM3NDIzMTgzODA1IgxR%2FfP3dKJj2yTj1U0q3AO59vF9jg8GRDjFqNkoue4X1Kel0%2BdRcm4x5CgdAFtGrwu789OsTCCNCZ655jr253fLSVcXSynEnl2sqTJcvmSzAJ60M2MN7RojckOJdoRxpYZ2EZ5%2B2BSv5DvzvdjN458XNAo4he%2F7QCWV7yzm43XtnwpKhXLYgcy6O1P7LQ3Ep%2F83UbGMhHkM8EZO1%2FZ7EvES4gH%2FJDsBPABVysl6nnGh1a5KphswFTLL17mXXZvYZ7EkBB54Kmr%2Bph89z5aBmroymNMX9IbY7o8i42cnnfcAIcZNhLkUOzhH4AHlirNKlcPt7qHpa%2BynHkVIyF9eyu7%2FHozWOTsi1pWvcOsy7fP0oOwtMJLRqM%2BE0%2Fn0awUvPid1T0qWgSQk3HFOwPOMO9%2F8miDFC7zoS02CCgK4nsvuvP0YnoIBK6fJlbIz1L9Nvtw5gVTdGCwdCCgFBC2c7Ku2sbU4%2BzPwpBJRM9LjjomH5OStozWTioxDnawXfOyGxD1ME7oojxHGPzpOZPHc1gPNCjuNQ24vZE7wtcpRaReOj%2FkOHKUesX6nOItKCtWE2mtzT%2BypD41x2AB6oRdCbzcX%2FvjuHinYw3xdACaPm%2FlFPb2raFGGXBL8WwcER76JC2f7pSjCpVwZYoiFKTCghLLABjqkAS1gi4hJc0l1gY9dVxlzG7eE8qYnkmxTxzF%2FZHzwiWQKhBUTbjma0sp8KXqX1UQuxL8yOcxb9oXpap9ckHJOHnG3xWSOuCstCwaH5ahdM0Ftj24UarksmF11%2BOfik2vysayIQK0RmCwCGxZPVFu%2FPJWhCaMKIiNtsVgayRR%2B32R2FOqwS9kWDecpKQq2p%2FjoP0oE7gVOyEwg3kfd7IRqgX2lKRvB&X-Amz-Signature=2ca87e2b9cb1ac323c79f9bf4ab924cef2be32e9a1b20b2d13726cc5a1eb5650&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
