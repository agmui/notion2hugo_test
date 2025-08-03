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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677JJJ3NM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjaJpi8ADEp9WvHkvvkY4OPOOOiwjp54QM6%2BRugFBC4QIhAKz7AV4%2F5%2F0zcmRjs6rwBOXQs5pW8basD3MYpKJF08WFKv8DCB4QABoMNjM3NDIzMTgzODA1Igzw0m7Hu%2BqpcjMKqCgq3ANzZ%2FnvCHcS20Io9qxSONX5dMjbij7doFI0apo3P6d%2F%2FxLg4FURkWXTBnmcAF7AHmKVI%2Fp4kCFnj9DGzPmQVlqlYBcF%2B7G%2BUM%2Fh%2BGrm03XR6TZmXPvbPTTc%2F8oDSD2HOBLY554fa6cLYhEqV2TO4xFAuWPOSRF9n0hfTQYQGeoLxORu82oviPyFgZmR549zzTNg0SAyumF1ddYyIINY97x2RIRKP3UHIfB9UZszK4e%2FnrjSXNqyIa%2FvFJoQ5MJ7FluxFd62M%2FtJQzyb5V0RTBW0%2F8qlg00kEFBv%2F5PdhNU0OA5X52oEck31pJXyuWmwbPQWsKIXYFXny%2FCnQNukbllIs07OnCkUFEcn2Fb%2BiA9B4fEzadkwbi5dKZjfsk0E%2BanahTl37FG6NddbCXlx4NGoPyhrwAZ%2FGycFjwalAzQiwXx%2BLvcsCUtyGkvKYWkILGnfjP7d2jW1RnHCNqPIj6knY7QLQPjhnButsJL15tPFiCQzuqVYFhOZ4mZ2v03Ap8fcCaFlb1lnSq%2BAsHB7Pni2cNGo9uMX4kgdzmOE3hlxEUIUfNICq3qN1fR3vsf5MTH4M0BD1wbnzjsxhGoUAKx348ZXitGG%2FiwsdUruvsEABpmWOndtNRF6VYxikjDZgLrEBjqkAS8gdS0lqbbkPFGLGhsuw2edjUFRHkU93Bv2ewWe8wW21Ix2VXYmNKG92uxh5532bM7SrJTXKs0k2J7%2F9KAAq4X2hPaiH0uY3Hpplj%2FZTQW%2BvYIYKfBkVb9UFuV%2B0QOyFaLWW5wLjTesCBLrDoP3p9jMmi3kXUHt%2FY2jt5SBzCPsZHQHivkJ03xKYqtlLS6mNNTWh6PbSibchiRm5IwSbhaBSlGu&X-Amz-Signature=51a2ce9e79362200339e36ee967fcbf3d164b72dde05e923ee640ff922f1b006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677JJJ3NM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjaJpi8ADEp9WvHkvvkY4OPOOOiwjp54QM6%2BRugFBC4QIhAKz7AV4%2F5%2F0zcmRjs6rwBOXQs5pW8basD3MYpKJF08WFKv8DCB4QABoMNjM3NDIzMTgzODA1Igzw0m7Hu%2BqpcjMKqCgq3ANzZ%2FnvCHcS20Io9qxSONX5dMjbij7doFI0apo3P6d%2F%2FxLg4FURkWXTBnmcAF7AHmKVI%2Fp4kCFnj9DGzPmQVlqlYBcF%2B7G%2BUM%2Fh%2BGrm03XR6TZmXPvbPTTc%2F8oDSD2HOBLY554fa6cLYhEqV2TO4xFAuWPOSRF9n0hfTQYQGeoLxORu82oviPyFgZmR549zzTNg0SAyumF1ddYyIINY97x2RIRKP3UHIfB9UZszK4e%2FnrjSXNqyIa%2FvFJoQ5MJ7FluxFd62M%2FtJQzyb5V0RTBW0%2F8qlg00kEFBv%2F5PdhNU0OA5X52oEck31pJXyuWmwbPQWsKIXYFXny%2FCnQNukbllIs07OnCkUFEcn2Fb%2BiA9B4fEzadkwbi5dKZjfsk0E%2BanahTl37FG6NddbCXlx4NGoPyhrwAZ%2FGycFjwalAzQiwXx%2BLvcsCUtyGkvKYWkILGnfjP7d2jW1RnHCNqPIj6knY7QLQPjhnButsJL15tPFiCQzuqVYFhOZ4mZ2v03Ap8fcCaFlb1lnSq%2BAsHB7Pni2cNGo9uMX4kgdzmOE3hlxEUIUfNICq3qN1fR3vsf5MTH4M0BD1wbnzjsxhGoUAKx348ZXitGG%2FiwsdUruvsEABpmWOndtNRF6VYxikjDZgLrEBjqkAS8gdS0lqbbkPFGLGhsuw2edjUFRHkU93Bv2ewWe8wW21Ix2VXYmNKG92uxh5532bM7SrJTXKs0k2J7%2F9KAAq4X2hPaiH0uY3Hpplj%2FZTQW%2BvYIYKfBkVb9UFuV%2B0QOyFaLWW5wLjTesCBLrDoP3p9jMmi3kXUHt%2FY2jt5SBzCPsZHQHivkJ03xKYqtlLS6mNNTWh6PbSibchiRm5IwSbhaBSlGu&X-Amz-Signature=e7492f6d9ee7f8cc7b36d09153c15faabe431dc86f4597e90375f5e31ee7e053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677JJJ3NM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjaJpi8ADEp9WvHkvvkY4OPOOOiwjp54QM6%2BRugFBC4QIhAKz7AV4%2F5%2F0zcmRjs6rwBOXQs5pW8basD3MYpKJF08WFKv8DCB4QABoMNjM3NDIzMTgzODA1Igzw0m7Hu%2BqpcjMKqCgq3ANzZ%2FnvCHcS20Io9qxSONX5dMjbij7doFI0apo3P6d%2F%2FxLg4FURkWXTBnmcAF7AHmKVI%2Fp4kCFnj9DGzPmQVlqlYBcF%2B7G%2BUM%2Fh%2BGrm03XR6TZmXPvbPTTc%2F8oDSD2HOBLY554fa6cLYhEqV2TO4xFAuWPOSRF9n0hfTQYQGeoLxORu82oviPyFgZmR549zzTNg0SAyumF1ddYyIINY97x2RIRKP3UHIfB9UZszK4e%2FnrjSXNqyIa%2FvFJoQ5MJ7FluxFd62M%2FtJQzyb5V0RTBW0%2F8qlg00kEFBv%2F5PdhNU0OA5X52oEck31pJXyuWmwbPQWsKIXYFXny%2FCnQNukbllIs07OnCkUFEcn2Fb%2BiA9B4fEzadkwbi5dKZjfsk0E%2BanahTl37FG6NddbCXlx4NGoPyhrwAZ%2FGycFjwalAzQiwXx%2BLvcsCUtyGkvKYWkILGnfjP7d2jW1RnHCNqPIj6knY7QLQPjhnButsJL15tPFiCQzuqVYFhOZ4mZ2v03Ap8fcCaFlb1lnSq%2BAsHB7Pni2cNGo9uMX4kgdzmOE3hlxEUIUfNICq3qN1fR3vsf5MTH4M0BD1wbnzjsxhGoUAKx348ZXitGG%2FiwsdUruvsEABpmWOndtNRF6VYxikjDZgLrEBjqkAS8gdS0lqbbkPFGLGhsuw2edjUFRHkU93Bv2ewWe8wW21Ix2VXYmNKG92uxh5532bM7SrJTXKs0k2J7%2F9KAAq4X2hPaiH0uY3Hpplj%2FZTQW%2BvYIYKfBkVb9UFuV%2B0QOyFaLWW5wLjTesCBLrDoP3p9jMmi3kXUHt%2FY2jt5SBzCPsZHQHivkJ03xKYqtlLS6mNNTWh6PbSibchiRm5IwSbhaBSlGu&X-Amz-Signature=c5543920b2b36a4c6dc6ae4e51de78f42a08784f2172b1cbd574ea9ae1c011de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677JJJ3NM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjaJpi8ADEp9WvHkvvkY4OPOOOiwjp54QM6%2BRugFBC4QIhAKz7AV4%2F5%2F0zcmRjs6rwBOXQs5pW8basD3MYpKJF08WFKv8DCB4QABoMNjM3NDIzMTgzODA1Igzw0m7Hu%2BqpcjMKqCgq3ANzZ%2FnvCHcS20Io9qxSONX5dMjbij7doFI0apo3P6d%2F%2FxLg4FURkWXTBnmcAF7AHmKVI%2Fp4kCFnj9DGzPmQVlqlYBcF%2B7G%2BUM%2Fh%2BGrm03XR6TZmXPvbPTTc%2F8oDSD2HOBLY554fa6cLYhEqV2TO4xFAuWPOSRF9n0hfTQYQGeoLxORu82oviPyFgZmR549zzTNg0SAyumF1ddYyIINY97x2RIRKP3UHIfB9UZszK4e%2FnrjSXNqyIa%2FvFJoQ5MJ7FluxFd62M%2FtJQzyb5V0RTBW0%2F8qlg00kEFBv%2F5PdhNU0OA5X52oEck31pJXyuWmwbPQWsKIXYFXny%2FCnQNukbllIs07OnCkUFEcn2Fb%2BiA9B4fEzadkwbi5dKZjfsk0E%2BanahTl37FG6NddbCXlx4NGoPyhrwAZ%2FGycFjwalAzQiwXx%2BLvcsCUtyGkvKYWkILGnfjP7d2jW1RnHCNqPIj6knY7QLQPjhnButsJL15tPFiCQzuqVYFhOZ4mZ2v03Ap8fcCaFlb1lnSq%2BAsHB7Pni2cNGo9uMX4kgdzmOE3hlxEUIUfNICq3qN1fR3vsf5MTH4M0BD1wbnzjsxhGoUAKx348ZXitGG%2FiwsdUruvsEABpmWOndtNRF6VYxikjDZgLrEBjqkAS8gdS0lqbbkPFGLGhsuw2edjUFRHkU93Bv2ewWe8wW21Ix2VXYmNKG92uxh5532bM7SrJTXKs0k2J7%2F9KAAq4X2hPaiH0uY3Hpplj%2FZTQW%2BvYIYKfBkVb9UFuV%2B0QOyFaLWW5wLjTesCBLrDoP3p9jMmi3kXUHt%2FY2jt5SBzCPsZHQHivkJ03xKYqtlLS6mNNTWh6PbSibchiRm5IwSbhaBSlGu&X-Amz-Signature=6f1a4413340f64d872a6f0cef467d676f9facd312cf7d2e75d87a106a6e91446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677JJJ3NM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjaJpi8ADEp9WvHkvvkY4OPOOOiwjp54QM6%2BRugFBC4QIhAKz7AV4%2F5%2F0zcmRjs6rwBOXQs5pW8basD3MYpKJF08WFKv8DCB4QABoMNjM3NDIzMTgzODA1Igzw0m7Hu%2BqpcjMKqCgq3ANzZ%2FnvCHcS20Io9qxSONX5dMjbij7doFI0apo3P6d%2F%2FxLg4FURkWXTBnmcAF7AHmKVI%2Fp4kCFnj9DGzPmQVlqlYBcF%2B7G%2BUM%2Fh%2BGrm03XR6TZmXPvbPTTc%2F8oDSD2HOBLY554fa6cLYhEqV2TO4xFAuWPOSRF9n0hfTQYQGeoLxORu82oviPyFgZmR549zzTNg0SAyumF1ddYyIINY97x2RIRKP3UHIfB9UZszK4e%2FnrjSXNqyIa%2FvFJoQ5MJ7FluxFd62M%2FtJQzyb5V0RTBW0%2F8qlg00kEFBv%2F5PdhNU0OA5X52oEck31pJXyuWmwbPQWsKIXYFXny%2FCnQNukbllIs07OnCkUFEcn2Fb%2BiA9B4fEzadkwbi5dKZjfsk0E%2BanahTl37FG6NddbCXlx4NGoPyhrwAZ%2FGycFjwalAzQiwXx%2BLvcsCUtyGkvKYWkILGnfjP7d2jW1RnHCNqPIj6knY7QLQPjhnButsJL15tPFiCQzuqVYFhOZ4mZ2v03Ap8fcCaFlb1lnSq%2BAsHB7Pni2cNGo9uMX4kgdzmOE3hlxEUIUfNICq3qN1fR3vsf5MTH4M0BD1wbnzjsxhGoUAKx348ZXitGG%2FiwsdUruvsEABpmWOndtNRF6VYxikjDZgLrEBjqkAS8gdS0lqbbkPFGLGhsuw2edjUFRHkU93Bv2ewWe8wW21Ix2VXYmNKG92uxh5532bM7SrJTXKs0k2J7%2F9KAAq4X2hPaiH0uY3Hpplj%2FZTQW%2BvYIYKfBkVb9UFuV%2B0QOyFaLWW5wLjTesCBLrDoP3p9jMmi3kXUHt%2FY2jt5SBzCPsZHQHivkJ03xKYqtlLS6mNNTWh6PbSibchiRm5IwSbhaBSlGu&X-Amz-Signature=a2af4cd7d0d23df054f0abd7efa8adbca46c647266d126620408c49b17a37563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
