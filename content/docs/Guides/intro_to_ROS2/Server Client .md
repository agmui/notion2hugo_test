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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QOL33XW%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD7%2B8gtyobML3j9sQp%2Fdx5u56kLv%2BHC6tmVkvDtcNQJ1gIhAKS%2BMJqMy4U%2Bi%2BJwZMwzCDD24%2F3z3LdCMUNmedI%2BuBbWKv8DCAIQABoMNjM3NDIzMTgzODA1Igw%2BONnnYR4Y6IPSAjQq3ANwjjtSB4YP2zIuYOmekWw3bxFQzwzFkxC%2Fd976EaYroQwvS4ZS0a7svJxOzB4MG2SPu5AU9cZo3bRLwm%2FQvhennC09N32%2BCmXLpx9QBREajr5zYUWLHYfr%2FxL%2FFWVJQqvw6d0CdwKhI%2BAF1SiHV%2Flxr4%2BIV40ofNc6cwQZFE5PYVbTTzm%2BV7BGEshnktJ4AfxYd9bV4NSxtvFjFexlMtzWeC0IYbltKxDrF0MuT7VxnOrsrKwXEpsoN7np7nRiIvILj33F0FQ7vVau4SvRuiYY7mblzPsBz9F7H8zQ%2Fm%2F1PxRZIEkTftjzQWQgAZtq2OGSFqiPee3wgtMSibudJioxT3pcyEACXtuwRn%2F88HdrUOcQ9yWTsqlUjon0WN5kytclrMKMBo1%2BSvD6VIrGGGVX4vcoQo5LZ3EgC3Lbxbv4pmRL8pQH9f7ataBzLUZKomUrDSOrvrVxPhwRs%2FHaOpjZQuKb9iAw0TgccQQDfeGk3eeUFcmBBVm%2Flb%2BDhQjezeFQ%2BGsLWQyHgrfQvbJcqba28JtM89V8N6KiCk799dTZGRM59y4dhaO2uthtAELNKanoaHwoXR8%2FmbDo7OFq4YTYJr3zPoUl8nOzrzywateMIWzgzyNGCcJdIYi4kjC7gf%2FIBjqkAWDezVD3lun3q4WM3J4328kbKq2lvugOIStYpub5A5zB30PyfUc5KjhSGnC2%2Fu%2BYQbFYs6DCd5xGVc76oiIiHH%2BhQCkVM0KN%2FTdVhMlPcS1YPHSsNdUItoDYtF21wk%2F0EI76ebbVcDwqAPhGfRADS1rw6RG03oy26YFB%2BIKsjHDH42wSkFIzsB0tDacyuttEJUZoUFJznAdQoiLITIDEwesyZD9x&X-Amz-Signature=cce64b523d5bf1bb1b18de6d2c6f788dae93ffeecd1c116b554c0e8a33a898d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QOL33XW%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD7%2B8gtyobML3j9sQp%2Fdx5u56kLv%2BHC6tmVkvDtcNQJ1gIhAKS%2BMJqMy4U%2Bi%2BJwZMwzCDD24%2F3z3LdCMUNmedI%2BuBbWKv8DCAIQABoMNjM3NDIzMTgzODA1Igw%2BONnnYR4Y6IPSAjQq3ANwjjtSB4YP2zIuYOmekWw3bxFQzwzFkxC%2Fd976EaYroQwvS4ZS0a7svJxOzB4MG2SPu5AU9cZo3bRLwm%2FQvhennC09N32%2BCmXLpx9QBREajr5zYUWLHYfr%2FxL%2FFWVJQqvw6d0CdwKhI%2BAF1SiHV%2Flxr4%2BIV40ofNc6cwQZFE5PYVbTTzm%2BV7BGEshnktJ4AfxYd9bV4NSxtvFjFexlMtzWeC0IYbltKxDrF0MuT7VxnOrsrKwXEpsoN7np7nRiIvILj33F0FQ7vVau4SvRuiYY7mblzPsBz9F7H8zQ%2Fm%2F1PxRZIEkTftjzQWQgAZtq2OGSFqiPee3wgtMSibudJioxT3pcyEACXtuwRn%2F88HdrUOcQ9yWTsqlUjon0WN5kytclrMKMBo1%2BSvD6VIrGGGVX4vcoQo5LZ3EgC3Lbxbv4pmRL8pQH9f7ataBzLUZKomUrDSOrvrVxPhwRs%2FHaOpjZQuKb9iAw0TgccQQDfeGk3eeUFcmBBVm%2Flb%2BDhQjezeFQ%2BGsLWQyHgrfQvbJcqba28JtM89V8N6KiCk799dTZGRM59y4dhaO2uthtAELNKanoaHwoXR8%2FmbDo7OFq4YTYJr3zPoUl8nOzrzywateMIWzgzyNGCcJdIYi4kjC7gf%2FIBjqkAWDezVD3lun3q4WM3J4328kbKq2lvugOIStYpub5A5zB30PyfUc5KjhSGnC2%2Fu%2BYQbFYs6DCd5xGVc76oiIiHH%2BhQCkVM0KN%2FTdVhMlPcS1YPHSsNdUItoDYtF21wk%2F0EI76ebbVcDwqAPhGfRADS1rw6RG03oy26YFB%2BIKsjHDH42wSkFIzsB0tDacyuttEJUZoUFJznAdQoiLITIDEwesyZD9x&X-Amz-Signature=ae793b1fad2aba41ee217fa385a709c8d49d7bd32a845be545ff9b860c4c26cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QOL33XW%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD7%2B8gtyobML3j9sQp%2Fdx5u56kLv%2BHC6tmVkvDtcNQJ1gIhAKS%2BMJqMy4U%2Bi%2BJwZMwzCDD24%2F3z3LdCMUNmedI%2BuBbWKv8DCAIQABoMNjM3NDIzMTgzODA1Igw%2BONnnYR4Y6IPSAjQq3ANwjjtSB4YP2zIuYOmekWw3bxFQzwzFkxC%2Fd976EaYroQwvS4ZS0a7svJxOzB4MG2SPu5AU9cZo3bRLwm%2FQvhennC09N32%2BCmXLpx9QBREajr5zYUWLHYfr%2FxL%2FFWVJQqvw6d0CdwKhI%2BAF1SiHV%2Flxr4%2BIV40ofNc6cwQZFE5PYVbTTzm%2BV7BGEshnktJ4AfxYd9bV4NSxtvFjFexlMtzWeC0IYbltKxDrF0MuT7VxnOrsrKwXEpsoN7np7nRiIvILj33F0FQ7vVau4SvRuiYY7mblzPsBz9F7H8zQ%2Fm%2F1PxRZIEkTftjzQWQgAZtq2OGSFqiPee3wgtMSibudJioxT3pcyEACXtuwRn%2F88HdrUOcQ9yWTsqlUjon0WN5kytclrMKMBo1%2BSvD6VIrGGGVX4vcoQo5LZ3EgC3Lbxbv4pmRL8pQH9f7ataBzLUZKomUrDSOrvrVxPhwRs%2FHaOpjZQuKb9iAw0TgccQQDfeGk3eeUFcmBBVm%2Flb%2BDhQjezeFQ%2BGsLWQyHgrfQvbJcqba28JtM89V8N6KiCk799dTZGRM59y4dhaO2uthtAELNKanoaHwoXR8%2FmbDo7OFq4YTYJr3zPoUl8nOzrzywateMIWzgzyNGCcJdIYi4kjC7gf%2FIBjqkAWDezVD3lun3q4WM3J4328kbKq2lvugOIStYpub5A5zB30PyfUc5KjhSGnC2%2Fu%2BYQbFYs6DCd5xGVc76oiIiHH%2BhQCkVM0KN%2FTdVhMlPcS1YPHSsNdUItoDYtF21wk%2F0EI76ebbVcDwqAPhGfRADS1rw6RG03oy26YFB%2BIKsjHDH42wSkFIzsB0tDacyuttEJUZoUFJznAdQoiLITIDEwesyZD9x&X-Amz-Signature=16f918680dccb1bd112f0ae9c51e7fbeb8cef40cf6907d125e0c8f22beca54ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QOL33XW%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD7%2B8gtyobML3j9sQp%2Fdx5u56kLv%2BHC6tmVkvDtcNQJ1gIhAKS%2BMJqMy4U%2Bi%2BJwZMwzCDD24%2F3z3LdCMUNmedI%2BuBbWKv8DCAIQABoMNjM3NDIzMTgzODA1Igw%2BONnnYR4Y6IPSAjQq3ANwjjtSB4YP2zIuYOmekWw3bxFQzwzFkxC%2Fd976EaYroQwvS4ZS0a7svJxOzB4MG2SPu5AU9cZo3bRLwm%2FQvhennC09N32%2BCmXLpx9QBREajr5zYUWLHYfr%2FxL%2FFWVJQqvw6d0CdwKhI%2BAF1SiHV%2Flxr4%2BIV40ofNc6cwQZFE5PYVbTTzm%2BV7BGEshnktJ4AfxYd9bV4NSxtvFjFexlMtzWeC0IYbltKxDrF0MuT7VxnOrsrKwXEpsoN7np7nRiIvILj33F0FQ7vVau4SvRuiYY7mblzPsBz9F7H8zQ%2Fm%2F1PxRZIEkTftjzQWQgAZtq2OGSFqiPee3wgtMSibudJioxT3pcyEACXtuwRn%2F88HdrUOcQ9yWTsqlUjon0WN5kytclrMKMBo1%2BSvD6VIrGGGVX4vcoQo5LZ3EgC3Lbxbv4pmRL8pQH9f7ataBzLUZKomUrDSOrvrVxPhwRs%2FHaOpjZQuKb9iAw0TgccQQDfeGk3eeUFcmBBVm%2Flb%2BDhQjezeFQ%2BGsLWQyHgrfQvbJcqba28JtM89V8N6KiCk799dTZGRM59y4dhaO2uthtAELNKanoaHwoXR8%2FmbDo7OFq4YTYJr3zPoUl8nOzrzywateMIWzgzyNGCcJdIYi4kjC7gf%2FIBjqkAWDezVD3lun3q4WM3J4328kbKq2lvugOIStYpub5A5zB30PyfUc5KjhSGnC2%2Fu%2BYQbFYs6DCd5xGVc76oiIiHH%2BhQCkVM0KN%2FTdVhMlPcS1YPHSsNdUItoDYtF21wk%2F0EI76ebbVcDwqAPhGfRADS1rw6RG03oy26YFB%2BIKsjHDH42wSkFIzsB0tDacyuttEJUZoUFJznAdQoiLITIDEwesyZD9x&X-Amz-Signature=524f62b9b70068d936ac0c7ca3eb6fb384c5bb89938cec00136e4d7a4aedcb94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QOL33XW%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD7%2B8gtyobML3j9sQp%2Fdx5u56kLv%2BHC6tmVkvDtcNQJ1gIhAKS%2BMJqMy4U%2Bi%2BJwZMwzCDD24%2F3z3LdCMUNmedI%2BuBbWKv8DCAIQABoMNjM3NDIzMTgzODA1Igw%2BONnnYR4Y6IPSAjQq3ANwjjtSB4YP2zIuYOmekWw3bxFQzwzFkxC%2Fd976EaYroQwvS4ZS0a7svJxOzB4MG2SPu5AU9cZo3bRLwm%2FQvhennC09N32%2BCmXLpx9QBREajr5zYUWLHYfr%2FxL%2FFWVJQqvw6d0CdwKhI%2BAF1SiHV%2Flxr4%2BIV40ofNc6cwQZFE5PYVbTTzm%2BV7BGEshnktJ4AfxYd9bV4NSxtvFjFexlMtzWeC0IYbltKxDrF0MuT7VxnOrsrKwXEpsoN7np7nRiIvILj33F0FQ7vVau4SvRuiYY7mblzPsBz9F7H8zQ%2Fm%2F1PxRZIEkTftjzQWQgAZtq2OGSFqiPee3wgtMSibudJioxT3pcyEACXtuwRn%2F88HdrUOcQ9yWTsqlUjon0WN5kytclrMKMBo1%2BSvD6VIrGGGVX4vcoQo5LZ3EgC3Lbxbv4pmRL8pQH9f7ataBzLUZKomUrDSOrvrVxPhwRs%2FHaOpjZQuKb9iAw0TgccQQDfeGk3eeUFcmBBVm%2Flb%2BDhQjezeFQ%2BGsLWQyHgrfQvbJcqba28JtM89V8N6KiCk799dTZGRM59y4dhaO2uthtAELNKanoaHwoXR8%2FmbDo7OFq4YTYJr3zPoUl8nOzrzywateMIWzgzyNGCcJdIYi4kjC7gf%2FIBjqkAWDezVD3lun3q4WM3J4328kbKq2lvugOIStYpub5A5zB30PyfUc5KjhSGnC2%2Fu%2BYQbFYs6DCd5xGVc76oiIiHH%2BhQCkVM0KN%2FTdVhMlPcS1YPHSsNdUItoDYtF21wk%2F0EI76ebbVcDwqAPhGfRADS1rw6RG03oy26YFB%2BIKsjHDH42wSkFIzsB0tDacyuttEJUZoUFJznAdQoiLITIDEwesyZD9x&X-Amz-Signature=ed2b61949545e7fb98a36099f5b7827cf65fd843ded30f988a6ac4b3702c0ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
