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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKRHCT73%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE5j%2F7pPY3jmyv9IaVYA6tUM3WJqC88DkmQQiqAP6n6AiBB4OsXDFl6VFR%2BehstMCKMq2%2BjNSvQTH%2Bh7lh0whFLBCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMuUbI74%2BqcXl6IvhhKtwDDT8qu12491%2BIl%2BbkUSsjoRqvayunHKDUzQx3gd4CnLPRh6nCcFISuvks4a9Fb6sDFZJYqaDHf15svxUopoL6YeQF2vQmEm%2BOEj4h1dGUwMixmqzOwwahpIQ9M3O2%2B8bsQG%2BEqCA1IshdfIPPv2qc6UcRwvsQtBBJwH0%2B%2F1vpITIbGRMI7p0cj1NkLVSEtLl58rtAlAGbyIOna8BOJpmIx23s4mBLl91Yza%2FXACbz%2FRRvF0qKJhd8rAFtwclvKCY4JJI66Qu30LhUN3fbBDVeGmeKc9HraTeIpiFmRYRZDjWBSajA1cBGpvKUpXHYnlUARIt7zAXrh0tYc38oEQUblgKnaCi6QmtSubAix73QB9ISXH69CfbTgN%2FvrshucNFPn%2BZ4utUIA8XLPTYC4lTC8eZUiDTNNeDhH%2FI4NtFcUvkSA%2BjO8jEru1%2FVqXQZKOBzzpbH3WWwtUqW2f86HbCbb0VC0%2BCZgA6OtIC3K29ZaFfmnjBVfMUjCq9IDHGBNB9rkGddOrHd9B6z%2BXya8IuMAgn%2BUYMyFrqhlLPTiGFxprAk%2BvHVcQVyrtg26sEWG2BY7wq%2FvlzUNfBJPwId23kF2G1TqqxDWeiti4hZjaGLvZfp56ti0bZUdFR6v4wwv6TNwwY6pgGy704rix1NcU3r3fMkCxsHnytCHjeuUi6pfWBwYXrAtn886knmwrsaCkcrtoQmCabrdLDfPKkHKkUFplZUkBo9x0dNzD3MN7PONw%2FtutN%2B6mTXroqz%2BRArqeUTyvrIBY8sQgjd%2BFAGp1OmMLj1Z4Y59%2FEReqEwZFvarcn40NWVWN0ExmJNZjekubCUtka%2FvLfppEkT2TJfF%2F%2BUNMzq7jC2%2BpwN3VV%2B&X-Amz-Signature=46eb9284bf6b6bbffa4aa5905a926f768033285c4c14274d3a6920b3d123d367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKRHCT73%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE5j%2F7pPY3jmyv9IaVYA6tUM3WJqC88DkmQQiqAP6n6AiBB4OsXDFl6VFR%2BehstMCKMq2%2BjNSvQTH%2Bh7lh0whFLBCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMuUbI74%2BqcXl6IvhhKtwDDT8qu12491%2BIl%2BbkUSsjoRqvayunHKDUzQx3gd4CnLPRh6nCcFISuvks4a9Fb6sDFZJYqaDHf15svxUopoL6YeQF2vQmEm%2BOEj4h1dGUwMixmqzOwwahpIQ9M3O2%2B8bsQG%2BEqCA1IshdfIPPv2qc6UcRwvsQtBBJwH0%2B%2F1vpITIbGRMI7p0cj1NkLVSEtLl58rtAlAGbyIOna8BOJpmIx23s4mBLl91Yza%2FXACbz%2FRRvF0qKJhd8rAFtwclvKCY4JJI66Qu30LhUN3fbBDVeGmeKc9HraTeIpiFmRYRZDjWBSajA1cBGpvKUpXHYnlUARIt7zAXrh0tYc38oEQUblgKnaCi6QmtSubAix73QB9ISXH69CfbTgN%2FvrshucNFPn%2BZ4utUIA8XLPTYC4lTC8eZUiDTNNeDhH%2FI4NtFcUvkSA%2BjO8jEru1%2FVqXQZKOBzzpbH3WWwtUqW2f86HbCbb0VC0%2BCZgA6OtIC3K29ZaFfmnjBVfMUjCq9IDHGBNB9rkGddOrHd9B6z%2BXya8IuMAgn%2BUYMyFrqhlLPTiGFxprAk%2BvHVcQVyrtg26sEWG2BY7wq%2FvlzUNfBJPwId23kF2G1TqqxDWeiti4hZjaGLvZfp56ti0bZUdFR6v4wwv6TNwwY6pgGy704rix1NcU3r3fMkCxsHnytCHjeuUi6pfWBwYXrAtn886knmwrsaCkcrtoQmCabrdLDfPKkHKkUFplZUkBo9x0dNzD3MN7PONw%2FtutN%2B6mTXroqz%2BRArqeUTyvrIBY8sQgjd%2BFAGp1OmMLj1Z4Y59%2FEReqEwZFvarcn40NWVWN0ExmJNZjekubCUtka%2FvLfppEkT2TJfF%2F%2BUNMzq7jC2%2BpwN3VV%2B&X-Amz-Signature=a47fcf28e8b514576cdb9738fff1d1d4e4435c6a0991063952553942af82defe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKRHCT73%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE5j%2F7pPY3jmyv9IaVYA6tUM3WJqC88DkmQQiqAP6n6AiBB4OsXDFl6VFR%2BehstMCKMq2%2BjNSvQTH%2Bh7lh0whFLBCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMuUbI74%2BqcXl6IvhhKtwDDT8qu12491%2BIl%2BbkUSsjoRqvayunHKDUzQx3gd4CnLPRh6nCcFISuvks4a9Fb6sDFZJYqaDHf15svxUopoL6YeQF2vQmEm%2BOEj4h1dGUwMixmqzOwwahpIQ9M3O2%2B8bsQG%2BEqCA1IshdfIPPv2qc6UcRwvsQtBBJwH0%2B%2F1vpITIbGRMI7p0cj1NkLVSEtLl58rtAlAGbyIOna8BOJpmIx23s4mBLl91Yza%2FXACbz%2FRRvF0qKJhd8rAFtwclvKCY4JJI66Qu30LhUN3fbBDVeGmeKc9HraTeIpiFmRYRZDjWBSajA1cBGpvKUpXHYnlUARIt7zAXrh0tYc38oEQUblgKnaCi6QmtSubAix73QB9ISXH69CfbTgN%2FvrshucNFPn%2BZ4utUIA8XLPTYC4lTC8eZUiDTNNeDhH%2FI4NtFcUvkSA%2BjO8jEru1%2FVqXQZKOBzzpbH3WWwtUqW2f86HbCbb0VC0%2BCZgA6OtIC3K29ZaFfmnjBVfMUjCq9IDHGBNB9rkGddOrHd9B6z%2BXya8IuMAgn%2BUYMyFrqhlLPTiGFxprAk%2BvHVcQVyrtg26sEWG2BY7wq%2FvlzUNfBJPwId23kF2G1TqqxDWeiti4hZjaGLvZfp56ti0bZUdFR6v4wwv6TNwwY6pgGy704rix1NcU3r3fMkCxsHnytCHjeuUi6pfWBwYXrAtn886knmwrsaCkcrtoQmCabrdLDfPKkHKkUFplZUkBo9x0dNzD3MN7PONw%2FtutN%2B6mTXroqz%2BRArqeUTyvrIBY8sQgjd%2BFAGp1OmMLj1Z4Y59%2FEReqEwZFvarcn40NWVWN0ExmJNZjekubCUtka%2FvLfppEkT2TJfF%2F%2BUNMzq7jC2%2BpwN3VV%2B&X-Amz-Signature=6f4db75e12ee084ee78bed475020c03c5f26021c07b81e72a0c27f41fd6a8b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKRHCT73%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE5j%2F7pPY3jmyv9IaVYA6tUM3WJqC88DkmQQiqAP6n6AiBB4OsXDFl6VFR%2BehstMCKMq2%2BjNSvQTH%2Bh7lh0whFLBCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMuUbI74%2BqcXl6IvhhKtwDDT8qu12491%2BIl%2BbkUSsjoRqvayunHKDUzQx3gd4CnLPRh6nCcFISuvks4a9Fb6sDFZJYqaDHf15svxUopoL6YeQF2vQmEm%2BOEj4h1dGUwMixmqzOwwahpIQ9M3O2%2B8bsQG%2BEqCA1IshdfIPPv2qc6UcRwvsQtBBJwH0%2B%2F1vpITIbGRMI7p0cj1NkLVSEtLl58rtAlAGbyIOna8BOJpmIx23s4mBLl91Yza%2FXACbz%2FRRvF0qKJhd8rAFtwclvKCY4JJI66Qu30LhUN3fbBDVeGmeKc9HraTeIpiFmRYRZDjWBSajA1cBGpvKUpXHYnlUARIt7zAXrh0tYc38oEQUblgKnaCi6QmtSubAix73QB9ISXH69CfbTgN%2FvrshucNFPn%2BZ4utUIA8XLPTYC4lTC8eZUiDTNNeDhH%2FI4NtFcUvkSA%2BjO8jEru1%2FVqXQZKOBzzpbH3WWwtUqW2f86HbCbb0VC0%2BCZgA6OtIC3K29ZaFfmnjBVfMUjCq9IDHGBNB9rkGddOrHd9B6z%2BXya8IuMAgn%2BUYMyFrqhlLPTiGFxprAk%2BvHVcQVyrtg26sEWG2BY7wq%2FvlzUNfBJPwId23kF2G1TqqxDWeiti4hZjaGLvZfp56ti0bZUdFR6v4wwv6TNwwY6pgGy704rix1NcU3r3fMkCxsHnytCHjeuUi6pfWBwYXrAtn886knmwrsaCkcrtoQmCabrdLDfPKkHKkUFplZUkBo9x0dNzD3MN7PONw%2FtutN%2B6mTXroqz%2BRArqeUTyvrIBY8sQgjd%2BFAGp1OmMLj1Z4Y59%2FEReqEwZFvarcn40NWVWN0ExmJNZjekubCUtka%2FvLfppEkT2TJfF%2F%2BUNMzq7jC2%2BpwN3VV%2B&X-Amz-Signature=2a7b7b8844b02dcb24fa78f21858de1d2386f13b7ca5db70b38dd48250638208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKRHCT73%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE5j%2F7pPY3jmyv9IaVYA6tUM3WJqC88DkmQQiqAP6n6AiBB4OsXDFl6VFR%2BehstMCKMq2%2BjNSvQTH%2Bh7lh0whFLBCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMuUbI74%2BqcXl6IvhhKtwDDT8qu12491%2BIl%2BbkUSsjoRqvayunHKDUzQx3gd4CnLPRh6nCcFISuvks4a9Fb6sDFZJYqaDHf15svxUopoL6YeQF2vQmEm%2BOEj4h1dGUwMixmqzOwwahpIQ9M3O2%2B8bsQG%2BEqCA1IshdfIPPv2qc6UcRwvsQtBBJwH0%2B%2F1vpITIbGRMI7p0cj1NkLVSEtLl58rtAlAGbyIOna8BOJpmIx23s4mBLl91Yza%2FXACbz%2FRRvF0qKJhd8rAFtwclvKCY4JJI66Qu30LhUN3fbBDVeGmeKc9HraTeIpiFmRYRZDjWBSajA1cBGpvKUpXHYnlUARIt7zAXrh0tYc38oEQUblgKnaCi6QmtSubAix73QB9ISXH69CfbTgN%2FvrshucNFPn%2BZ4utUIA8XLPTYC4lTC8eZUiDTNNeDhH%2FI4NtFcUvkSA%2BjO8jEru1%2FVqXQZKOBzzpbH3WWwtUqW2f86HbCbb0VC0%2BCZgA6OtIC3K29ZaFfmnjBVfMUjCq9IDHGBNB9rkGddOrHd9B6z%2BXya8IuMAgn%2BUYMyFrqhlLPTiGFxprAk%2BvHVcQVyrtg26sEWG2BY7wq%2FvlzUNfBJPwId23kF2G1TqqxDWeiti4hZjaGLvZfp56ti0bZUdFR6v4wwv6TNwwY6pgGy704rix1NcU3r3fMkCxsHnytCHjeuUi6pfWBwYXrAtn886knmwrsaCkcrtoQmCabrdLDfPKkHKkUFplZUkBo9x0dNzD3MN7PONw%2FtutN%2B6mTXroqz%2BRArqeUTyvrIBY8sQgjd%2BFAGp1OmMLj1Z4Y59%2FEReqEwZFvarcn40NWVWN0ExmJNZjekubCUtka%2FvLfppEkT2TJfF%2F%2BUNMzq7jC2%2BpwN3VV%2B&X-Amz-Signature=ee8260e9bdf3f53751b681a31d0a2bbf0fff08cb3c4220fd09e68c59ece6ffaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
