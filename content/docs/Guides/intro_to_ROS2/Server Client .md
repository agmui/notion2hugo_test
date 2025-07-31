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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYVBEXYC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEE4isBrRtgslVYtG6IeaykL26PDEyxYQNBIWxzTwopNAiAtvCu5%2FbpljgG5maKFD2GKOOOXNoTqPMzGPKJipycEEyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXh7ZaSPI32BhOYZbKtwDMmMOt%2BwVEo2SuqpnEsbDDvOCIuI1jULyx4BrmRLp3cgMdscg%2FGN6fCQLy62gmHXa7XMvHeYT8htWIkeuW3LcuamsNQPB6mag9OkWAcaOMkbzTmfQB%2Fz%2BLJz96hECQt2FtSbEvDD4xPq6VukFELKp4Hc7NTF%2BMS6e2c%2FrMHjBohz%2BWvCrmQgSGEn3QxOacyyOt6d10Icc7%2B5UQ%2BrMECpCy7A2HHsbKTsBfpabFxqKqfxMANWeVpYtnWhN%2FEdVYwA6lOvS%2BuhZxYr0%2Bs9Yv%2FwSadXkjfGSkAHZWNF%2BZi%2Br0we2icTykEXvI5WqXKHG4QRdWpIBs5vpMC%2Fqgj9%2B4AVBQWd1nG2cQLQ23X36aW2%2BpKX7rdOvII5aMuP8%2FCUf17NQrPlosyPyA%2BwZY0BnULBT%2BNSVQBWlK3UbkkTZq85qsVJzwo0WkpeqDey%2FqfBAJrly21lpC2OHeZUAJXrioyBozPwQPEo%2FZ94y3rdf%2FhLSzOHsXL%2BzvA9OAMBlwVw88Qf3PlsZJCeNNU0k9Ng3Npfn5JorvaeaShV4AxvT9C51Ak39wi1WxyHW%2B429bN%2FBC8zfYC7zY3jWhEGZQCWOeU3ksNkhFpZwtrE8Ley%2BZklwJSb1T%2Fhd6UYR34cgwQMw0syvxAY6pgEn45vioBX%2F9H7fGQD3tOWzxpXk4aH3cH5Q33Y8Qyvn4Zl3rXcAzxmmNDwymiMvGwTlC55mFzrT4x2WsV0oSUIsWoGwNfYDoXgMOt4jL3PWXJ%2F2u4nDEDGowqOy7fD6DjM5yqbQIuhlrEMD4Neeh%2Fx8AG7WQamHIgJojljHPIuFL%2FU%2F5qn5c8U2wPCxDtUOuzNgFX79dxOdd1W7PGGa8PUhxJTEEQ4R&X-Amz-Signature=7d69a1be62a9dc3905dbab35b63638866496c5d0341b5b9ae8d82f866bad6aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYVBEXYC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEE4isBrRtgslVYtG6IeaykL26PDEyxYQNBIWxzTwopNAiAtvCu5%2FbpljgG5maKFD2GKOOOXNoTqPMzGPKJipycEEyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXh7ZaSPI32BhOYZbKtwDMmMOt%2BwVEo2SuqpnEsbDDvOCIuI1jULyx4BrmRLp3cgMdscg%2FGN6fCQLy62gmHXa7XMvHeYT8htWIkeuW3LcuamsNQPB6mag9OkWAcaOMkbzTmfQB%2Fz%2BLJz96hECQt2FtSbEvDD4xPq6VukFELKp4Hc7NTF%2BMS6e2c%2FrMHjBohz%2BWvCrmQgSGEn3QxOacyyOt6d10Icc7%2B5UQ%2BrMECpCy7A2HHsbKTsBfpabFxqKqfxMANWeVpYtnWhN%2FEdVYwA6lOvS%2BuhZxYr0%2Bs9Yv%2FwSadXkjfGSkAHZWNF%2BZi%2Br0we2icTykEXvI5WqXKHG4QRdWpIBs5vpMC%2Fqgj9%2B4AVBQWd1nG2cQLQ23X36aW2%2BpKX7rdOvII5aMuP8%2FCUf17NQrPlosyPyA%2BwZY0BnULBT%2BNSVQBWlK3UbkkTZq85qsVJzwo0WkpeqDey%2FqfBAJrly21lpC2OHeZUAJXrioyBozPwQPEo%2FZ94y3rdf%2FhLSzOHsXL%2BzvA9OAMBlwVw88Qf3PlsZJCeNNU0k9Ng3Npfn5JorvaeaShV4AxvT9C51Ak39wi1WxyHW%2B429bN%2FBC8zfYC7zY3jWhEGZQCWOeU3ksNkhFpZwtrE8Ley%2BZklwJSb1T%2Fhd6UYR34cgwQMw0syvxAY6pgEn45vioBX%2F9H7fGQD3tOWzxpXk4aH3cH5Q33Y8Qyvn4Zl3rXcAzxmmNDwymiMvGwTlC55mFzrT4x2WsV0oSUIsWoGwNfYDoXgMOt4jL3PWXJ%2F2u4nDEDGowqOy7fD6DjM5yqbQIuhlrEMD4Neeh%2Fx8AG7WQamHIgJojljHPIuFL%2FU%2F5qn5c8U2wPCxDtUOuzNgFX79dxOdd1W7PGGa8PUhxJTEEQ4R&X-Amz-Signature=ebdb257c794909adc2af0767a0f4d413566664049585f52e912efd5c698f997b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYVBEXYC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEE4isBrRtgslVYtG6IeaykL26PDEyxYQNBIWxzTwopNAiAtvCu5%2FbpljgG5maKFD2GKOOOXNoTqPMzGPKJipycEEyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXh7ZaSPI32BhOYZbKtwDMmMOt%2BwVEo2SuqpnEsbDDvOCIuI1jULyx4BrmRLp3cgMdscg%2FGN6fCQLy62gmHXa7XMvHeYT8htWIkeuW3LcuamsNQPB6mag9OkWAcaOMkbzTmfQB%2Fz%2BLJz96hECQt2FtSbEvDD4xPq6VukFELKp4Hc7NTF%2BMS6e2c%2FrMHjBohz%2BWvCrmQgSGEn3QxOacyyOt6d10Icc7%2B5UQ%2BrMECpCy7A2HHsbKTsBfpabFxqKqfxMANWeVpYtnWhN%2FEdVYwA6lOvS%2BuhZxYr0%2Bs9Yv%2FwSadXkjfGSkAHZWNF%2BZi%2Br0we2icTykEXvI5WqXKHG4QRdWpIBs5vpMC%2Fqgj9%2B4AVBQWd1nG2cQLQ23X36aW2%2BpKX7rdOvII5aMuP8%2FCUf17NQrPlosyPyA%2BwZY0BnULBT%2BNSVQBWlK3UbkkTZq85qsVJzwo0WkpeqDey%2FqfBAJrly21lpC2OHeZUAJXrioyBozPwQPEo%2FZ94y3rdf%2FhLSzOHsXL%2BzvA9OAMBlwVw88Qf3PlsZJCeNNU0k9Ng3Npfn5JorvaeaShV4AxvT9C51Ak39wi1WxyHW%2B429bN%2FBC8zfYC7zY3jWhEGZQCWOeU3ksNkhFpZwtrE8Ley%2BZklwJSb1T%2Fhd6UYR34cgwQMw0syvxAY6pgEn45vioBX%2F9H7fGQD3tOWzxpXk4aH3cH5Q33Y8Qyvn4Zl3rXcAzxmmNDwymiMvGwTlC55mFzrT4x2WsV0oSUIsWoGwNfYDoXgMOt4jL3PWXJ%2F2u4nDEDGowqOy7fD6DjM5yqbQIuhlrEMD4Neeh%2Fx8AG7WQamHIgJojljHPIuFL%2FU%2F5qn5c8U2wPCxDtUOuzNgFX79dxOdd1W7PGGa8PUhxJTEEQ4R&X-Amz-Signature=d27b8df227d7d873cac0a1fba6eee4c209b8f58bcf35c396205e3fe0b8758891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYVBEXYC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEE4isBrRtgslVYtG6IeaykL26PDEyxYQNBIWxzTwopNAiAtvCu5%2FbpljgG5maKFD2GKOOOXNoTqPMzGPKJipycEEyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXh7ZaSPI32BhOYZbKtwDMmMOt%2BwVEo2SuqpnEsbDDvOCIuI1jULyx4BrmRLp3cgMdscg%2FGN6fCQLy62gmHXa7XMvHeYT8htWIkeuW3LcuamsNQPB6mag9OkWAcaOMkbzTmfQB%2Fz%2BLJz96hECQt2FtSbEvDD4xPq6VukFELKp4Hc7NTF%2BMS6e2c%2FrMHjBohz%2BWvCrmQgSGEn3QxOacyyOt6d10Icc7%2B5UQ%2BrMECpCy7A2HHsbKTsBfpabFxqKqfxMANWeVpYtnWhN%2FEdVYwA6lOvS%2BuhZxYr0%2Bs9Yv%2FwSadXkjfGSkAHZWNF%2BZi%2Br0we2icTykEXvI5WqXKHG4QRdWpIBs5vpMC%2Fqgj9%2B4AVBQWd1nG2cQLQ23X36aW2%2BpKX7rdOvII5aMuP8%2FCUf17NQrPlosyPyA%2BwZY0BnULBT%2BNSVQBWlK3UbkkTZq85qsVJzwo0WkpeqDey%2FqfBAJrly21lpC2OHeZUAJXrioyBozPwQPEo%2FZ94y3rdf%2FhLSzOHsXL%2BzvA9OAMBlwVw88Qf3PlsZJCeNNU0k9Ng3Npfn5JorvaeaShV4AxvT9C51Ak39wi1WxyHW%2B429bN%2FBC8zfYC7zY3jWhEGZQCWOeU3ksNkhFpZwtrE8Ley%2BZklwJSb1T%2Fhd6UYR34cgwQMw0syvxAY6pgEn45vioBX%2F9H7fGQD3tOWzxpXk4aH3cH5Q33Y8Qyvn4Zl3rXcAzxmmNDwymiMvGwTlC55mFzrT4x2WsV0oSUIsWoGwNfYDoXgMOt4jL3PWXJ%2F2u4nDEDGowqOy7fD6DjM5yqbQIuhlrEMD4Neeh%2Fx8AG7WQamHIgJojljHPIuFL%2FU%2F5qn5c8U2wPCxDtUOuzNgFX79dxOdd1W7PGGa8PUhxJTEEQ4R&X-Amz-Signature=26ee7707d693282dd5f2b1b313711d29dd9eb8d7dfc13af59c09e2557379cf8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYVBEXYC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEE4isBrRtgslVYtG6IeaykL26PDEyxYQNBIWxzTwopNAiAtvCu5%2FbpljgG5maKFD2GKOOOXNoTqPMzGPKJipycEEyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXh7ZaSPI32BhOYZbKtwDMmMOt%2BwVEo2SuqpnEsbDDvOCIuI1jULyx4BrmRLp3cgMdscg%2FGN6fCQLy62gmHXa7XMvHeYT8htWIkeuW3LcuamsNQPB6mag9OkWAcaOMkbzTmfQB%2Fz%2BLJz96hECQt2FtSbEvDD4xPq6VukFELKp4Hc7NTF%2BMS6e2c%2FrMHjBohz%2BWvCrmQgSGEn3QxOacyyOt6d10Icc7%2B5UQ%2BrMECpCy7A2HHsbKTsBfpabFxqKqfxMANWeVpYtnWhN%2FEdVYwA6lOvS%2BuhZxYr0%2Bs9Yv%2FwSadXkjfGSkAHZWNF%2BZi%2Br0we2icTykEXvI5WqXKHG4QRdWpIBs5vpMC%2Fqgj9%2B4AVBQWd1nG2cQLQ23X36aW2%2BpKX7rdOvII5aMuP8%2FCUf17NQrPlosyPyA%2BwZY0BnULBT%2BNSVQBWlK3UbkkTZq85qsVJzwo0WkpeqDey%2FqfBAJrly21lpC2OHeZUAJXrioyBozPwQPEo%2FZ94y3rdf%2FhLSzOHsXL%2BzvA9OAMBlwVw88Qf3PlsZJCeNNU0k9Ng3Npfn5JorvaeaShV4AxvT9C51Ak39wi1WxyHW%2B429bN%2FBC8zfYC7zY3jWhEGZQCWOeU3ksNkhFpZwtrE8Ley%2BZklwJSb1T%2Fhd6UYR34cgwQMw0syvxAY6pgEn45vioBX%2F9H7fGQD3tOWzxpXk4aH3cH5Q33Y8Qyvn4Zl3rXcAzxmmNDwymiMvGwTlC55mFzrT4x2WsV0oSUIsWoGwNfYDoXgMOt4jL3PWXJ%2F2u4nDEDGowqOy7fD6DjM5yqbQIuhlrEMD4Neeh%2Fx8AG7WQamHIgJojljHPIuFL%2FU%2F5qn5c8U2wPCxDtUOuzNgFX79dxOdd1W7PGGa8PUhxJTEEQ4R&X-Amz-Signature=2e74f70a06ec1c50212f69bfeea6d149395c56955c8f69f9b800223ca08a7b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
