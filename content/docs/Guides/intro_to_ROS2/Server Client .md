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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHWKAP7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCltxb8y%2FNkUVsWGXkqyxLBtWWdde8Ir4uD4eJhsX1qxQIhAPzMuDbENDs1Qw4gahmEubzwSRdpEi4aufTXvDByT2eAKv8DCFMQABoMNjM3NDIzMTgzODA1Igw7C0PlkqktleRh9TMq3AOwJqVda6jAvfVbJ0a5ftNaoz8BMS2m6C8HYziTcUcv5pmoJPDU%2BMqMvvewRR3TodU18ZZKXM%2F%2FqARRZSL3bpcfIxdnrP6sR5kIXjO2LZpEBH%2BkSrL%2FmdV%2Bl8Y2empVkdTbmojCRPk6VR0iWCWw700j3n17arCofl4ICNI6w86SamCseaHBFz%2FAYtRtLGoLKnAvbBky43rAQiHr3%2Fw%2FhjpfHdi1AMBwH0QY7gQJtXmLXkb8RDOjT0T08ZGlS5B5lnucdmuNtpm29hd20ZGzm%2FqU7ZOE3B32veMtSuV7vJq6Rw%2FhkQtrbTgzKrg9FZTNADpqzJJj0e%2BqZI%2Bs%2BtXXofUYlRiSkXDB6Tk37uh5UVZaqMIwP9tp3dvySdImEGZIujFEDouFVXhGam59QoA%2BP8BeVZaYggcZCK6Vder2dtGAZPV2kR8AlEAKozOXSu%2Fgg3lkNsJTCDnb%2BIPhSw8VvpB4hxlh3TK1BDE5ijHGXpvX61G4u0MNAGYk6pcxxZqWM5aQgp0lvdZHVTlSukWP4grsf8eQX7Wdl4wE3THwg1d3k%2FzQvQ9GQi0fJQ5JQzvrMxFwSY94r5QCU70OWzxC4uxgFegcP%2BH1phy4LDm0ii17BGAs91Q0sazy8dA%2F2zC9%2Fr3CBjqkAcsjamyX3JN29mXPLBPJ5Tdv%2B8FnfTM0EVAGXQn4on%2B1ji01bH3DcTvJX8BOFDs7UfDi%2B%2F6EtQ2au8UupBSn4%2Bsj1r7mBdVp0zeA%2BLPL6f798SKtl4NAra9smfE4P8ZXZFQx1AYhP72mrvg3dj8aOM1UHK5CO5SGBmWg33AxSTkpDvrUO0HmH0WStlhTFUYNKyDrHf%2F3Gsn5ijxV3ssRnXVqDYNX&X-Amz-Signature=c2ff430961446e88b89aee8eea97e5e593d9b8de221a1cfac8e72770db38e049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHWKAP7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCltxb8y%2FNkUVsWGXkqyxLBtWWdde8Ir4uD4eJhsX1qxQIhAPzMuDbENDs1Qw4gahmEubzwSRdpEi4aufTXvDByT2eAKv8DCFMQABoMNjM3NDIzMTgzODA1Igw7C0PlkqktleRh9TMq3AOwJqVda6jAvfVbJ0a5ftNaoz8BMS2m6C8HYziTcUcv5pmoJPDU%2BMqMvvewRR3TodU18ZZKXM%2F%2FqARRZSL3bpcfIxdnrP6sR5kIXjO2LZpEBH%2BkSrL%2FmdV%2Bl8Y2empVkdTbmojCRPk6VR0iWCWw700j3n17arCofl4ICNI6w86SamCseaHBFz%2FAYtRtLGoLKnAvbBky43rAQiHr3%2Fw%2FhjpfHdi1AMBwH0QY7gQJtXmLXkb8RDOjT0T08ZGlS5B5lnucdmuNtpm29hd20ZGzm%2FqU7ZOE3B32veMtSuV7vJq6Rw%2FhkQtrbTgzKrg9FZTNADpqzJJj0e%2BqZI%2Bs%2BtXXofUYlRiSkXDB6Tk37uh5UVZaqMIwP9tp3dvySdImEGZIujFEDouFVXhGam59QoA%2BP8BeVZaYggcZCK6Vder2dtGAZPV2kR8AlEAKozOXSu%2Fgg3lkNsJTCDnb%2BIPhSw8VvpB4hxlh3TK1BDE5ijHGXpvX61G4u0MNAGYk6pcxxZqWM5aQgp0lvdZHVTlSukWP4grsf8eQX7Wdl4wE3THwg1d3k%2FzQvQ9GQi0fJQ5JQzvrMxFwSY94r5QCU70OWzxC4uxgFegcP%2BH1phy4LDm0ii17BGAs91Q0sazy8dA%2F2zC9%2Fr3CBjqkAcsjamyX3JN29mXPLBPJ5Tdv%2B8FnfTM0EVAGXQn4on%2B1ji01bH3DcTvJX8BOFDs7UfDi%2B%2F6EtQ2au8UupBSn4%2Bsj1r7mBdVp0zeA%2BLPL6f798SKtl4NAra9smfE4P8ZXZFQx1AYhP72mrvg3dj8aOM1UHK5CO5SGBmWg33AxSTkpDvrUO0HmH0WStlhTFUYNKyDrHf%2F3Gsn5ijxV3ssRnXVqDYNX&X-Amz-Signature=ba2c2a2ac6d339b279f2691f81f7358437a85da2995e03fb0311e1793dc04425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHWKAP7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCltxb8y%2FNkUVsWGXkqyxLBtWWdde8Ir4uD4eJhsX1qxQIhAPzMuDbENDs1Qw4gahmEubzwSRdpEi4aufTXvDByT2eAKv8DCFMQABoMNjM3NDIzMTgzODA1Igw7C0PlkqktleRh9TMq3AOwJqVda6jAvfVbJ0a5ftNaoz8BMS2m6C8HYziTcUcv5pmoJPDU%2BMqMvvewRR3TodU18ZZKXM%2F%2FqARRZSL3bpcfIxdnrP6sR5kIXjO2LZpEBH%2BkSrL%2FmdV%2Bl8Y2empVkdTbmojCRPk6VR0iWCWw700j3n17arCofl4ICNI6w86SamCseaHBFz%2FAYtRtLGoLKnAvbBky43rAQiHr3%2Fw%2FhjpfHdi1AMBwH0QY7gQJtXmLXkb8RDOjT0T08ZGlS5B5lnucdmuNtpm29hd20ZGzm%2FqU7ZOE3B32veMtSuV7vJq6Rw%2FhkQtrbTgzKrg9FZTNADpqzJJj0e%2BqZI%2Bs%2BtXXofUYlRiSkXDB6Tk37uh5UVZaqMIwP9tp3dvySdImEGZIujFEDouFVXhGam59QoA%2BP8BeVZaYggcZCK6Vder2dtGAZPV2kR8AlEAKozOXSu%2Fgg3lkNsJTCDnb%2BIPhSw8VvpB4hxlh3TK1BDE5ijHGXpvX61G4u0MNAGYk6pcxxZqWM5aQgp0lvdZHVTlSukWP4grsf8eQX7Wdl4wE3THwg1d3k%2FzQvQ9GQi0fJQ5JQzvrMxFwSY94r5QCU70OWzxC4uxgFegcP%2BH1phy4LDm0ii17BGAs91Q0sazy8dA%2F2zC9%2Fr3CBjqkAcsjamyX3JN29mXPLBPJ5Tdv%2B8FnfTM0EVAGXQn4on%2B1ji01bH3DcTvJX8BOFDs7UfDi%2B%2F6EtQ2au8UupBSn4%2Bsj1r7mBdVp0zeA%2BLPL6f798SKtl4NAra9smfE4P8ZXZFQx1AYhP72mrvg3dj8aOM1UHK5CO5SGBmWg33AxSTkpDvrUO0HmH0WStlhTFUYNKyDrHf%2F3Gsn5ijxV3ssRnXVqDYNX&X-Amz-Signature=a3c7c634cde798d845626129bb61a1758de43caa86f89275928ee5253e907e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHWKAP7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCltxb8y%2FNkUVsWGXkqyxLBtWWdde8Ir4uD4eJhsX1qxQIhAPzMuDbENDs1Qw4gahmEubzwSRdpEi4aufTXvDByT2eAKv8DCFMQABoMNjM3NDIzMTgzODA1Igw7C0PlkqktleRh9TMq3AOwJqVda6jAvfVbJ0a5ftNaoz8BMS2m6C8HYziTcUcv5pmoJPDU%2BMqMvvewRR3TodU18ZZKXM%2F%2FqARRZSL3bpcfIxdnrP6sR5kIXjO2LZpEBH%2BkSrL%2FmdV%2Bl8Y2empVkdTbmojCRPk6VR0iWCWw700j3n17arCofl4ICNI6w86SamCseaHBFz%2FAYtRtLGoLKnAvbBky43rAQiHr3%2Fw%2FhjpfHdi1AMBwH0QY7gQJtXmLXkb8RDOjT0T08ZGlS5B5lnucdmuNtpm29hd20ZGzm%2FqU7ZOE3B32veMtSuV7vJq6Rw%2FhkQtrbTgzKrg9FZTNADpqzJJj0e%2BqZI%2Bs%2BtXXofUYlRiSkXDB6Tk37uh5UVZaqMIwP9tp3dvySdImEGZIujFEDouFVXhGam59QoA%2BP8BeVZaYggcZCK6Vder2dtGAZPV2kR8AlEAKozOXSu%2Fgg3lkNsJTCDnb%2BIPhSw8VvpB4hxlh3TK1BDE5ijHGXpvX61G4u0MNAGYk6pcxxZqWM5aQgp0lvdZHVTlSukWP4grsf8eQX7Wdl4wE3THwg1d3k%2FzQvQ9GQi0fJQ5JQzvrMxFwSY94r5QCU70OWzxC4uxgFegcP%2BH1phy4LDm0ii17BGAs91Q0sazy8dA%2F2zC9%2Fr3CBjqkAcsjamyX3JN29mXPLBPJ5Tdv%2B8FnfTM0EVAGXQn4on%2B1ji01bH3DcTvJX8BOFDs7UfDi%2B%2F6EtQ2au8UupBSn4%2Bsj1r7mBdVp0zeA%2BLPL6f798SKtl4NAra9smfE4P8ZXZFQx1AYhP72mrvg3dj8aOM1UHK5CO5SGBmWg33AxSTkpDvrUO0HmH0WStlhTFUYNKyDrHf%2F3Gsn5ijxV3ssRnXVqDYNX&X-Amz-Signature=7bf9ab473594f13b723de7d7923ced2d2ad800b57123f96190628aee402fb65f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHWKAP7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCltxb8y%2FNkUVsWGXkqyxLBtWWdde8Ir4uD4eJhsX1qxQIhAPzMuDbENDs1Qw4gahmEubzwSRdpEi4aufTXvDByT2eAKv8DCFMQABoMNjM3NDIzMTgzODA1Igw7C0PlkqktleRh9TMq3AOwJqVda6jAvfVbJ0a5ftNaoz8BMS2m6C8HYziTcUcv5pmoJPDU%2BMqMvvewRR3TodU18ZZKXM%2F%2FqARRZSL3bpcfIxdnrP6sR5kIXjO2LZpEBH%2BkSrL%2FmdV%2Bl8Y2empVkdTbmojCRPk6VR0iWCWw700j3n17arCofl4ICNI6w86SamCseaHBFz%2FAYtRtLGoLKnAvbBky43rAQiHr3%2Fw%2FhjpfHdi1AMBwH0QY7gQJtXmLXkb8RDOjT0T08ZGlS5B5lnucdmuNtpm29hd20ZGzm%2FqU7ZOE3B32veMtSuV7vJq6Rw%2FhkQtrbTgzKrg9FZTNADpqzJJj0e%2BqZI%2Bs%2BtXXofUYlRiSkXDB6Tk37uh5UVZaqMIwP9tp3dvySdImEGZIujFEDouFVXhGam59QoA%2BP8BeVZaYggcZCK6Vder2dtGAZPV2kR8AlEAKozOXSu%2Fgg3lkNsJTCDnb%2BIPhSw8VvpB4hxlh3TK1BDE5ijHGXpvX61G4u0MNAGYk6pcxxZqWM5aQgp0lvdZHVTlSukWP4grsf8eQX7Wdl4wE3THwg1d3k%2FzQvQ9GQi0fJQ5JQzvrMxFwSY94r5QCU70OWzxC4uxgFegcP%2BH1phy4LDm0ii17BGAs91Q0sazy8dA%2F2zC9%2Fr3CBjqkAcsjamyX3JN29mXPLBPJ5Tdv%2B8FnfTM0EVAGXQn4on%2B1ji01bH3DcTvJX8BOFDs7UfDi%2B%2F6EtQ2au8UupBSn4%2Bsj1r7mBdVp0zeA%2BLPL6f798SKtl4NAra9smfE4P8ZXZFQx1AYhP72mrvg3dj8aOM1UHK5CO5SGBmWg33AxSTkpDvrUO0HmH0WStlhTFUYNKyDrHf%2F3Gsn5ijxV3ssRnXVqDYNX&X-Amz-Signature=47d1e5a0193792f659cac28b265a6497f4211500c789d8ded499c7b9229754e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
