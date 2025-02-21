---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZL3M7TB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvUln91VUxL0RFnjPl46i%2BmXAxyBYEEA059V6soqlP8QIhAMpe1YCQjJU3lthTtjQ3V3eq2uJSv%2BrP%2FFjkKD05tllNKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuuCsxazjhnrvhfBYq3AN6ORywWw2mczES%2BL46qZjWh5FYAdTXxxYAShHfpi7%2BGpKGzFBgLoRmeRj1skU5pik4eDPOFnZkh8nuWwIAHq8Gyrif5YyGdaIu62S0HXt%2FXXnivrJ2lp2aBVHh08mj2jZI2J%2F3uYeMXA1IUgmH5pz7Ma5bku0n%2BR6gO1zQfuUd2trS1cti%2BwiRQxLI0f78PKWnqyCaHH3aUI5%2B%2BddINErWgTQnPPJ%2Ft6AxZUb02xGZdf4%2FK%2Bxk5wrXROkzJpYrPBmDWqhz8J3YNKyjpH8xiZ1lRaZQtqXyVGYfdNrkwdH3MkcOS779Ak45aZ%2Fz8Bp9LpLW61InWnSsUZYwRTdJ1vPw68ovSItx8B9rEOSA2VCQPF4JX6YQDoXSIbwMhbXp1AlfnRD9Iw%2BTbNevQgEjHvjh9mG%2BWcu%2BQI8kQC%2BXkFlKv2vxHSofJR62GF6EtiL78CbthXqJClq6cC2ln4Wsu3mlbNLRGutpvvJlSjN70Clv1BRxJCqhXDtZmPiQfpnuc7yY2NG0a1EQcQJlsOK4qt9f5NH3fwvA1BK5T2B9bt0iD54CcBCXG3icCMN9jGjDrmekwV%2FloPI9GddbHx569Z8bP9j0AO2u82NjRt9%2F4RFkmfPWSv%2BEgI2l5hglUDCUhN%2B9BjqkAW31%2F2QJ9QreIoIdK2ovNe0zXbc5Bj1PuPDvmfAaOL0%2Fph3LyacjBtPdOOVOzT3A5GIgMd8RdYb75mQ3Y%2FygkpNX7PqEy%2BdCZJIt6SFgrbqxsCkIPxiYeHqeBD4FdVQX%2F1aqx%2BHcA2WJhzHyIjxLNsvw0fpOWL6HlsrEM4Qgvx6QWuzfmBjdpBXwfdOc3l8tSWTW%2FmpIbqDePiHBqRBj2eWVpNCP&X-Amz-Signature=663ce8f7191bf6ba6daae850888d90c389c9dfbf90227e528cb00cb567a3e678&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZL3M7TB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvUln91VUxL0RFnjPl46i%2BmXAxyBYEEA059V6soqlP8QIhAMpe1YCQjJU3lthTtjQ3V3eq2uJSv%2BrP%2FFjkKD05tllNKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuuCsxazjhnrvhfBYq3AN6ORywWw2mczES%2BL46qZjWh5FYAdTXxxYAShHfpi7%2BGpKGzFBgLoRmeRj1skU5pik4eDPOFnZkh8nuWwIAHq8Gyrif5YyGdaIu62S0HXt%2FXXnivrJ2lp2aBVHh08mj2jZI2J%2F3uYeMXA1IUgmH5pz7Ma5bku0n%2BR6gO1zQfuUd2trS1cti%2BwiRQxLI0f78PKWnqyCaHH3aUI5%2B%2BddINErWgTQnPPJ%2Ft6AxZUb02xGZdf4%2FK%2Bxk5wrXROkzJpYrPBmDWqhz8J3YNKyjpH8xiZ1lRaZQtqXyVGYfdNrkwdH3MkcOS779Ak45aZ%2Fz8Bp9LpLW61InWnSsUZYwRTdJ1vPw68ovSItx8B9rEOSA2VCQPF4JX6YQDoXSIbwMhbXp1AlfnRD9Iw%2BTbNevQgEjHvjh9mG%2BWcu%2BQI8kQC%2BXkFlKv2vxHSofJR62GF6EtiL78CbthXqJClq6cC2ln4Wsu3mlbNLRGutpvvJlSjN70Clv1BRxJCqhXDtZmPiQfpnuc7yY2NG0a1EQcQJlsOK4qt9f5NH3fwvA1BK5T2B9bt0iD54CcBCXG3icCMN9jGjDrmekwV%2FloPI9GddbHx569Z8bP9j0AO2u82NjRt9%2F4RFkmfPWSv%2BEgI2l5hglUDCUhN%2B9BjqkAW31%2F2QJ9QreIoIdK2ovNe0zXbc5Bj1PuPDvmfAaOL0%2Fph3LyacjBtPdOOVOzT3A5GIgMd8RdYb75mQ3Y%2FygkpNX7PqEy%2BdCZJIt6SFgrbqxsCkIPxiYeHqeBD4FdVQX%2F1aqx%2BHcA2WJhzHyIjxLNsvw0fpOWL6HlsrEM4Qgvx6QWuzfmBjdpBXwfdOc3l8tSWTW%2FmpIbqDePiHBqRBj2eWVpNCP&X-Amz-Signature=d718429ce6191b3ec152e65a3f556761e5e9f7dc11e49e410e1c2eb529484c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZL3M7TB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvUln91VUxL0RFnjPl46i%2BmXAxyBYEEA059V6soqlP8QIhAMpe1YCQjJU3lthTtjQ3V3eq2uJSv%2BrP%2FFjkKD05tllNKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuuCsxazjhnrvhfBYq3AN6ORywWw2mczES%2BL46qZjWh5FYAdTXxxYAShHfpi7%2BGpKGzFBgLoRmeRj1skU5pik4eDPOFnZkh8nuWwIAHq8Gyrif5YyGdaIu62S0HXt%2FXXnivrJ2lp2aBVHh08mj2jZI2J%2F3uYeMXA1IUgmH5pz7Ma5bku0n%2BR6gO1zQfuUd2trS1cti%2BwiRQxLI0f78PKWnqyCaHH3aUI5%2B%2BddINErWgTQnPPJ%2Ft6AxZUb02xGZdf4%2FK%2Bxk5wrXROkzJpYrPBmDWqhz8J3YNKyjpH8xiZ1lRaZQtqXyVGYfdNrkwdH3MkcOS779Ak45aZ%2Fz8Bp9LpLW61InWnSsUZYwRTdJ1vPw68ovSItx8B9rEOSA2VCQPF4JX6YQDoXSIbwMhbXp1AlfnRD9Iw%2BTbNevQgEjHvjh9mG%2BWcu%2BQI8kQC%2BXkFlKv2vxHSofJR62GF6EtiL78CbthXqJClq6cC2ln4Wsu3mlbNLRGutpvvJlSjN70Clv1BRxJCqhXDtZmPiQfpnuc7yY2NG0a1EQcQJlsOK4qt9f5NH3fwvA1BK5T2B9bt0iD54CcBCXG3icCMN9jGjDrmekwV%2FloPI9GddbHx569Z8bP9j0AO2u82NjRt9%2F4RFkmfPWSv%2BEgI2l5hglUDCUhN%2B9BjqkAW31%2F2QJ9QreIoIdK2ovNe0zXbc5Bj1PuPDvmfAaOL0%2Fph3LyacjBtPdOOVOzT3A5GIgMd8RdYb75mQ3Y%2FygkpNX7PqEy%2BdCZJIt6SFgrbqxsCkIPxiYeHqeBD4FdVQX%2F1aqx%2BHcA2WJhzHyIjxLNsvw0fpOWL6HlsrEM4Qgvx6QWuzfmBjdpBXwfdOc3l8tSWTW%2FmpIbqDePiHBqRBj2eWVpNCP&X-Amz-Signature=2f7faac80ab86f5609c1cec20c38b04b50ba1ea346523be2909a3526c3747190&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZL3M7TB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvUln91VUxL0RFnjPl46i%2BmXAxyBYEEA059V6soqlP8QIhAMpe1YCQjJU3lthTtjQ3V3eq2uJSv%2BrP%2FFjkKD05tllNKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuuCsxazjhnrvhfBYq3AN6ORywWw2mczES%2BL46qZjWh5FYAdTXxxYAShHfpi7%2BGpKGzFBgLoRmeRj1skU5pik4eDPOFnZkh8nuWwIAHq8Gyrif5YyGdaIu62S0HXt%2FXXnivrJ2lp2aBVHh08mj2jZI2J%2F3uYeMXA1IUgmH5pz7Ma5bku0n%2BR6gO1zQfuUd2trS1cti%2BwiRQxLI0f78PKWnqyCaHH3aUI5%2B%2BddINErWgTQnPPJ%2Ft6AxZUb02xGZdf4%2FK%2Bxk5wrXROkzJpYrPBmDWqhz8J3YNKyjpH8xiZ1lRaZQtqXyVGYfdNrkwdH3MkcOS779Ak45aZ%2Fz8Bp9LpLW61InWnSsUZYwRTdJ1vPw68ovSItx8B9rEOSA2VCQPF4JX6YQDoXSIbwMhbXp1AlfnRD9Iw%2BTbNevQgEjHvjh9mG%2BWcu%2BQI8kQC%2BXkFlKv2vxHSofJR62GF6EtiL78CbthXqJClq6cC2ln4Wsu3mlbNLRGutpvvJlSjN70Clv1BRxJCqhXDtZmPiQfpnuc7yY2NG0a1EQcQJlsOK4qt9f5NH3fwvA1BK5T2B9bt0iD54CcBCXG3icCMN9jGjDrmekwV%2FloPI9GddbHx569Z8bP9j0AO2u82NjRt9%2F4RFkmfPWSv%2BEgI2l5hglUDCUhN%2B9BjqkAW31%2F2QJ9QreIoIdK2ovNe0zXbc5Bj1PuPDvmfAaOL0%2Fph3LyacjBtPdOOVOzT3A5GIgMd8RdYb75mQ3Y%2FygkpNX7PqEy%2BdCZJIt6SFgrbqxsCkIPxiYeHqeBD4FdVQX%2F1aqx%2BHcA2WJhzHyIjxLNsvw0fpOWL6HlsrEM4Qgvx6QWuzfmBjdpBXwfdOc3l8tSWTW%2FmpIbqDePiHBqRBj2eWVpNCP&X-Amz-Signature=781534c45fbf63fc0bcc4c533d57f547c8c168a3343a7a8069e4823328f996d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZL3M7TB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvUln91VUxL0RFnjPl46i%2BmXAxyBYEEA059V6soqlP8QIhAMpe1YCQjJU3lthTtjQ3V3eq2uJSv%2BrP%2FFjkKD05tllNKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuuCsxazjhnrvhfBYq3AN6ORywWw2mczES%2BL46qZjWh5FYAdTXxxYAShHfpi7%2BGpKGzFBgLoRmeRj1skU5pik4eDPOFnZkh8nuWwIAHq8Gyrif5YyGdaIu62S0HXt%2FXXnivrJ2lp2aBVHh08mj2jZI2J%2F3uYeMXA1IUgmH5pz7Ma5bku0n%2BR6gO1zQfuUd2trS1cti%2BwiRQxLI0f78PKWnqyCaHH3aUI5%2B%2BddINErWgTQnPPJ%2Ft6AxZUb02xGZdf4%2FK%2Bxk5wrXROkzJpYrPBmDWqhz8J3YNKyjpH8xiZ1lRaZQtqXyVGYfdNrkwdH3MkcOS779Ak45aZ%2Fz8Bp9LpLW61InWnSsUZYwRTdJ1vPw68ovSItx8B9rEOSA2VCQPF4JX6YQDoXSIbwMhbXp1AlfnRD9Iw%2BTbNevQgEjHvjh9mG%2BWcu%2BQI8kQC%2BXkFlKv2vxHSofJR62GF6EtiL78CbthXqJClq6cC2ln4Wsu3mlbNLRGutpvvJlSjN70Clv1BRxJCqhXDtZmPiQfpnuc7yY2NG0a1EQcQJlsOK4qt9f5NH3fwvA1BK5T2B9bt0iD54CcBCXG3icCMN9jGjDrmekwV%2FloPI9GddbHx569Z8bP9j0AO2u82NjRt9%2F4RFkmfPWSv%2BEgI2l5hglUDCUhN%2B9BjqkAW31%2F2QJ9QreIoIdK2ovNe0zXbc5Bj1PuPDvmfAaOL0%2Fph3LyacjBtPdOOVOzT3A5GIgMd8RdYb75mQ3Y%2FygkpNX7PqEy%2BdCZJIt6SFgrbqxsCkIPxiYeHqeBD4FdVQX%2F1aqx%2BHcA2WJhzHyIjxLNsvw0fpOWL6HlsrEM4Qgvx6QWuzfmBjdpBXwfdOc3l8tSWTW%2FmpIbqDePiHBqRBj2eWVpNCP&X-Amz-Signature=c3698bcfa55f4976999abd787276a60bf3e2613d5f4d8541f59b3c7f1ac7f786&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
