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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3C455EL%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFt63mRXDO2zXOPnBNrIvLElkx16jZ1qjHYMac0ug2RSAiBBrGRtz9gF3DyYBQw%2F6%2Ba0vT5d05rNJro0dRKA7nkvhCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoJnVPqtRyYLuxeEwKtwDVmT2I4PVgmyvxaMIBz6szA%2FrHXj2jjCTWh07AzRale7NIfn01TKDd25lr3sCN6us6VAKiUplbcC6lIva4lw5cm7VgZ%2BVq0x29JRFf1CW3pyYBiECs4Z124XS3ar2ZDDlfpdDzovKR4USB0BG2xnO3Q5CtnZhki%2FHOLyTCXWRk3hJr2WiqPbuw5vnP1Amv26pr80r%2Bcep3IRj64849WV%2BE01YoV5MHubQXKSS%2FH4Oh4aObxjvrgtau7f8kRcv8r%2FevKKA5i8YoIVzKFSimaR1oIoYwlMVH9Cajs9XEpICCcN4esYhCtGBKuMgcq7cx57HpTQotg%2FYQev1WJGtsck6C%2FMFZPdxlAswKQnSebol%2FWWFJkE%2FMRN4rWM4VXP3rt2n%2BmP62OOKWQw7%2FJSR%2FwHW79w%2FLWl8D%2BbKVT7zEAj5hpwn4t4%2FUXSA5hot%2FdToFdK67f817K1X%2BX4%2BUtwqweEU5V9P%2FXpDM58VeglRMxMNkbjetesikeRgb2Nx1KKVW8dST4cm1DVsKWEcXDSb7P4pz6ijGdk%2FEX4eUvaeZVBFLlPxIgRM9apSk5saRAHXFfQHcRohhVL9%2BUneJLeEpCsZ%2Fpz7O%2FmuPWaJwL1MwHhj3Uld53FTP2tGppwg5o4wjvGXwAY6pgEQ9J8Yo5pCv82uEnSU5dWH13H5Gxe62ikpnhgO%2Bo2LAU%2FIq58SOrm2aa8uFhK2LiiddE6ZIS5MrtMtDxXRz0jRkxUJv4fLG%2F0gmI8IkP27UyPbVcciMH%2FvKYyuvzOFORgn8k07qWWOT0FrfIk44dmveO6scrFJRBd1Gv6hThccVLw1Vc7T%2BTWjUFwIp7QX1PJ0XLs9TQsqi2XxXynFKsHAAgQFm5m4&X-Amz-Signature=fe3e1206e38261cb4cbd40ccf4b7f64153500db33c89868f86a4e65c95189de1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3C455EL%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFt63mRXDO2zXOPnBNrIvLElkx16jZ1qjHYMac0ug2RSAiBBrGRtz9gF3DyYBQw%2F6%2Ba0vT5d05rNJro0dRKA7nkvhCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoJnVPqtRyYLuxeEwKtwDVmT2I4PVgmyvxaMIBz6szA%2FrHXj2jjCTWh07AzRale7NIfn01TKDd25lr3sCN6us6VAKiUplbcC6lIva4lw5cm7VgZ%2BVq0x29JRFf1CW3pyYBiECs4Z124XS3ar2ZDDlfpdDzovKR4USB0BG2xnO3Q5CtnZhki%2FHOLyTCXWRk3hJr2WiqPbuw5vnP1Amv26pr80r%2Bcep3IRj64849WV%2BE01YoV5MHubQXKSS%2FH4Oh4aObxjvrgtau7f8kRcv8r%2FevKKA5i8YoIVzKFSimaR1oIoYwlMVH9Cajs9XEpICCcN4esYhCtGBKuMgcq7cx57HpTQotg%2FYQev1WJGtsck6C%2FMFZPdxlAswKQnSebol%2FWWFJkE%2FMRN4rWM4VXP3rt2n%2BmP62OOKWQw7%2FJSR%2FwHW79w%2FLWl8D%2BbKVT7zEAj5hpwn4t4%2FUXSA5hot%2FdToFdK67f817K1X%2BX4%2BUtwqweEU5V9P%2FXpDM58VeglRMxMNkbjetesikeRgb2Nx1KKVW8dST4cm1DVsKWEcXDSb7P4pz6ijGdk%2FEX4eUvaeZVBFLlPxIgRM9apSk5saRAHXFfQHcRohhVL9%2BUneJLeEpCsZ%2Fpz7O%2FmuPWaJwL1MwHhj3Uld53FTP2tGppwg5o4wjvGXwAY6pgEQ9J8Yo5pCv82uEnSU5dWH13H5Gxe62ikpnhgO%2Bo2LAU%2FIq58SOrm2aa8uFhK2LiiddE6ZIS5MrtMtDxXRz0jRkxUJv4fLG%2F0gmI8IkP27UyPbVcciMH%2FvKYyuvzOFORgn8k07qWWOT0FrfIk44dmveO6scrFJRBd1Gv6hThccVLw1Vc7T%2BTWjUFwIp7QX1PJ0XLs9TQsqi2XxXynFKsHAAgQFm5m4&X-Amz-Signature=1f62e6e03cd72a8c4ff7cbab63ce1eeb5c37c850d13acc3d3d1bca691e812ecf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3C455EL%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFt63mRXDO2zXOPnBNrIvLElkx16jZ1qjHYMac0ug2RSAiBBrGRtz9gF3DyYBQw%2F6%2Ba0vT5d05rNJro0dRKA7nkvhCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoJnVPqtRyYLuxeEwKtwDVmT2I4PVgmyvxaMIBz6szA%2FrHXj2jjCTWh07AzRale7NIfn01TKDd25lr3sCN6us6VAKiUplbcC6lIva4lw5cm7VgZ%2BVq0x29JRFf1CW3pyYBiECs4Z124XS3ar2ZDDlfpdDzovKR4USB0BG2xnO3Q5CtnZhki%2FHOLyTCXWRk3hJr2WiqPbuw5vnP1Amv26pr80r%2Bcep3IRj64849WV%2BE01YoV5MHubQXKSS%2FH4Oh4aObxjvrgtau7f8kRcv8r%2FevKKA5i8YoIVzKFSimaR1oIoYwlMVH9Cajs9XEpICCcN4esYhCtGBKuMgcq7cx57HpTQotg%2FYQev1WJGtsck6C%2FMFZPdxlAswKQnSebol%2FWWFJkE%2FMRN4rWM4VXP3rt2n%2BmP62OOKWQw7%2FJSR%2FwHW79w%2FLWl8D%2BbKVT7zEAj5hpwn4t4%2FUXSA5hot%2FdToFdK67f817K1X%2BX4%2BUtwqweEU5V9P%2FXpDM58VeglRMxMNkbjetesikeRgb2Nx1KKVW8dST4cm1DVsKWEcXDSb7P4pz6ijGdk%2FEX4eUvaeZVBFLlPxIgRM9apSk5saRAHXFfQHcRohhVL9%2BUneJLeEpCsZ%2Fpz7O%2FmuPWaJwL1MwHhj3Uld53FTP2tGppwg5o4wjvGXwAY6pgEQ9J8Yo5pCv82uEnSU5dWH13H5Gxe62ikpnhgO%2Bo2LAU%2FIq58SOrm2aa8uFhK2LiiddE6ZIS5MrtMtDxXRz0jRkxUJv4fLG%2F0gmI8IkP27UyPbVcciMH%2FvKYyuvzOFORgn8k07qWWOT0FrfIk44dmveO6scrFJRBd1Gv6hThccVLw1Vc7T%2BTWjUFwIp7QX1PJ0XLs9TQsqi2XxXynFKsHAAgQFm5m4&X-Amz-Signature=7fd828ded9691d509c0d37b6c6419825d781fe9a74b8d1b8d34b764d52fad9b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3C455EL%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFt63mRXDO2zXOPnBNrIvLElkx16jZ1qjHYMac0ug2RSAiBBrGRtz9gF3DyYBQw%2F6%2Ba0vT5d05rNJro0dRKA7nkvhCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoJnVPqtRyYLuxeEwKtwDVmT2I4PVgmyvxaMIBz6szA%2FrHXj2jjCTWh07AzRale7NIfn01TKDd25lr3sCN6us6VAKiUplbcC6lIva4lw5cm7VgZ%2BVq0x29JRFf1CW3pyYBiECs4Z124XS3ar2ZDDlfpdDzovKR4USB0BG2xnO3Q5CtnZhki%2FHOLyTCXWRk3hJr2WiqPbuw5vnP1Amv26pr80r%2Bcep3IRj64849WV%2BE01YoV5MHubQXKSS%2FH4Oh4aObxjvrgtau7f8kRcv8r%2FevKKA5i8YoIVzKFSimaR1oIoYwlMVH9Cajs9XEpICCcN4esYhCtGBKuMgcq7cx57HpTQotg%2FYQev1WJGtsck6C%2FMFZPdxlAswKQnSebol%2FWWFJkE%2FMRN4rWM4VXP3rt2n%2BmP62OOKWQw7%2FJSR%2FwHW79w%2FLWl8D%2BbKVT7zEAj5hpwn4t4%2FUXSA5hot%2FdToFdK67f817K1X%2BX4%2BUtwqweEU5V9P%2FXpDM58VeglRMxMNkbjetesikeRgb2Nx1KKVW8dST4cm1DVsKWEcXDSb7P4pz6ijGdk%2FEX4eUvaeZVBFLlPxIgRM9apSk5saRAHXFfQHcRohhVL9%2BUneJLeEpCsZ%2Fpz7O%2FmuPWaJwL1MwHhj3Uld53FTP2tGppwg5o4wjvGXwAY6pgEQ9J8Yo5pCv82uEnSU5dWH13H5Gxe62ikpnhgO%2Bo2LAU%2FIq58SOrm2aa8uFhK2LiiddE6ZIS5MrtMtDxXRz0jRkxUJv4fLG%2F0gmI8IkP27UyPbVcciMH%2FvKYyuvzOFORgn8k07qWWOT0FrfIk44dmveO6scrFJRBd1Gv6hThccVLw1Vc7T%2BTWjUFwIp7QX1PJ0XLs9TQsqi2XxXynFKsHAAgQFm5m4&X-Amz-Signature=de5a3633329cadd1b2a5478348af27bd47a29e7b29f94caee2da31ed3eacbfd6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3C455EL%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFt63mRXDO2zXOPnBNrIvLElkx16jZ1qjHYMac0ug2RSAiBBrGRtz9gF3DyYBQw%2F6%2Ba0vT5d05rNJro0dRKA7nkvhCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoJnVPqtRyYLuxeEwKtwDVmT2I4PVgmyvxaMIBz6szA%2FrHXj2jjCTWh07AzRale7NIfn01TKDd25lr3sCN6us6VAKiUplbcC6lIva4lw5cm7VgZ%2BVq0x29JRFf1CW3pyYBiECs4Z124XS3ar2ZDDlfpdDzovKR4USB0BG2xnO3Q5CtnZhki%2FHOLyTCXWRk3hJr2WiqPbuw5vnP1Amv26pr80r%2Bcep3IRj64849WV%2BE01YoV5MHubQXKSS%2FH4Oh4aObxjvrgtau7f8kRcv8r%2FevKKA5i8YoIVzKFSimaR1oIoYwlMVH9Cajs9XEpICCcN4esYhCtGBKuMgcq7cx57HpTQotg%2FYQev1WJGtsck6C%2FMFZPdxlAswKQnSebol%2FWWFJkE%2FMRN4rWM4VXP3rt2n%2BmP62OOKWQw7%2FJSR%2FwHW79w%2FLWl8D%2BbKVT7zEAj5hpwn4t4%2FUXSA5hot%2FdToFdK67f817K1X%2BX4%2BUtwqweEU5V9P%2FXpDM58VeglRMxMNkbjetesikeRgb2Nx1KKVW8dST4cm1DVsKWEcXDSb7P4pz6ijGdk%2FEX4eUvaeZVBFLlPxIgRM9apSk5saRAHXFfQHcRohhVL9%2BUneJLeEpCsZ%2Fpz7O%2FmuPWaJwL1MwHhj3Uld53FTP2tGppwg5o4wjvGXwAY6pgEQ9J8Yo5pCv82uEnSU5dWH13H5Gxe62ikpnhgO%2Bo2LAU%2FIq58SOrm2aa8uFhK2LiiddE6ZIS5MrtMtDxXRz0jRkxUJv4fLG%2F0gmI8IkP27UyPbVcciMH%2FvKYyuvzOFORgn8k07qWWOT0FrfIk44dmveO6scrFJRBd1Gv6hThccVLw1Vc7T%2BTWjUFwIp7QX1PJ0XLs9TQsqi2XxXynFKsHAAgQFm5m4&X-Amz-Signature=ffc51324fd04bd3b35c1bb919abd03c26a0b9cb337d6d93e93ef34230774420e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
