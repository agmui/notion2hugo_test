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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4P7CCGW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAs3gYhEQbafLGKwVMktNKZa60GgvGuc%2FIIpGKRAXZJQIgMb6jQgNdtrUBcn64QvgasIgDm7k8gaVktcq%2FW3y9XrsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJimPoQf7Gd6vjVuiircA8KFPadd0CUwH0FO4p3vA5GtT5IqX%2BqJJ4Rk4Pyb2gvhinoXQAGiuM8ppJSw9rjZlzw%2Bb0h4TW%2FB9mQPF91N6nzhsaJUZwjvhuZRtVaxXhDrx%2F3Bx35CM1Rcv4qjfE4GyufyYlrDVCbc%2BPnWxf2gII%2BwzR6iyOHwiAPVTd8A29eOQ%2FwXep6neNkWWnLb4oGi9MU8bEfR3I45g0cc880BQO5St5nk1fEIee9c1pSM07JgGOJ%2FG3HFWT97DI6RFhlCCpo3A%2F2%2FLJEpEG5Gl%2BCCMm%2FlquyIEn4%2BgaRgW2poArFroDGeUaGBNLQ1oZ%2FI19P0JH91pKcEwm7Lg8zMbI8C3UIowo03PPFtNmp1AwGQBvuoc9hM1ocbRKzWHgYTQQzik0dmwEfneoUjyYeuk%2FuBr9%2F9Ej3GEUF%2Ff2hhI3loiniMAmuZVvUwi3qOIGI6WRvYDGRv5z5WieVmbA2ao%2FbpNgaa%2BKa4FFq2u%2FzEZLueLdIeWg15i%2Bm31Mf8iY2lMKzJtRXLFGELpbE4XX0KaTtBHJpaNLIIe%2BA1ev9eIssKCzd%2FXkJHo%2BaA%2FT42t9DfKFNB7T6kUZW76l6nMfZqWYmiI5Wuiz7DMJSp32a3Bp1ioWq9wiKOltmZ8bElJ%2BAhMICI3cIGOqUB6NGhfE9%2FjWb04UWEZJEcgQuLlJ4%2B7WKMu6MXb%2F8kyHCOgR1OhFpZb8lCmyH6MWQnS5iE5pMrrMXI4g%2B7vVz0BA14NiZllahWh4Mx0opq3%2F2rz5Ar4wheiL0H9TVuMw14i4NI37QIQNGFWJQYaYea71vlKfWFk7ZvyeyJfAe69gcPRLjT%2F4tCnby9eYmzqo%2FTDobUJiH%2FDNKBe%2BOfNQZRtO7Je6Bu&X-Amz-Signature=93d5946729f804cfef61d8f90c8b18f4dc6c3624991e0728f3aba95bc62ef967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4P7CCGW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAs3gYhEQbafLGKwVMktNKZa60GgvGuc%2FIIpGKRAXZJQIgMb6jQgNdtrUBcn64QvgasIgDm7k8gaVktcq%2FW3y9XrsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJimPoQf7Gd6vjVuiircA8KFPadd0CUwH0FO4p3vA5GtT5IqX%2BqJJ4Rk4Pyb2gvhinoXQAGiuM8ppJSw9rjZlzw%2Bb0h4TW%2FB9mQPF91N6nzhsaJUZwjvhuZRtVaxXhDrx%2F3Bx35CM1Rcv4qjfE4GyufyYlrDVCbc%2BPnWxf2gII%2BwzR6iyOHwiAPVTd8A29eOQ%2FwXep6neNkWWnLb4oGi9MU8bEfR3I45g0cc880BQO5St5nk1fEIee9c1pSM07JgGOJ%2FG3HFWT97DI6RFhlCCpo3A%2F2%2FLJEpEG5Gl%2BCCMm%2FlquyIEn4%2BgaRgW2poArFroDGeUaGBNLQ1oZ%2FI19P0JH91pKcEwm7Lg8zMbI8C3UIowo03PPFtNmp1AwGQBvuoc9hM1ocbRKzWHgYTQQzik0dmwEfneoUjyYeuk%2FuBr9%2F9Ej3GEUF%2Ff2hhI3loiniMAmuZVvUwi3qOIGI6WRvYDGRv5z5WieVmbA2ao%2FbpNgaa%2BKa4FFq2u%2FzEZLueLdIeWg15i%2Bm31Mf8iY2lMKzJtRXLFGELpbE4XX0KaTtBHJpaNLIIe%2BA1ev9eIssKCzd%2FXkJHo%2BaA%2FT42t9DfKFNB7T6kUZW76l6nMfZqWYmiI5Wuiz7DMJSp32a3Bp1ioWq9wiKOltmZ8bElJ%2BAhMICI3cIGOqUB6NGhfE9%2FjWb04UWEZJEcgQuLlJ4%2B7WKMu6MXb%2F8kyHCOgR1OhFpZb8lCmyH6MWQnS5iE5pMrrMXI4g%2B7vVz0BA14NiZllahWh4Mx0opq3%2F2rz5Ar4wheiL0H9TVuMw14i4NI37QIQNGFWJQYaYea71vlKfWFk7ZvyeyJfAe69gcPRLjT%2F4tCnby9eYmzqo%2FTDobUJiH%2FDNKBe%2BOfNQZRtO7Je6Bu&X-Amz-Signature=03f6387ab624a2b341631df1ba306578c137db1fda10dfaebc8bceafc041a6f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4P7CCGW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAs3gYhEQbafLGKwVMktNKZa60GgvGuc%2FIIpGKRAXZJQIgMb6jQgNdtrUBcn64QvgasIgDm7k8gaVktcq%2FW3y9XrsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJimPoQf7Gd6vjVuiircA8KFPadd0CUwH0FO4p3vA5GtT5IqX%2BqJJ4Rk4Pyb2gvhinoXQAGiuM8ppJSw9rjZlzw%2Bb0h4TW%2FB9mQPF91N6nzhsaJUZwjvhuZRtVaxXhDrx%2F3Bx35CM1Rcv4qjfE4GyufyYlrDVCbc%2BPnWxf2gII%2BwzR6iyOHwiAPVTd8A29eOQ%2FwXep6neNkWWnLb4oGi9MU8bEfR3I45g0cc880BQO5St5nk1fEIee9c1pSM07JgGOJ%2FG3HFWT97DI6RFhlCCpo3A%2F2%2FLJEpEG5Gl%2BCCMm%2FlquyIEn4%2BgaRgW2poArFroDGeUaGBNLQ1oZ%2FI19P0JH91pKcEwm7Lg8zMbI8C3UIowo03PPFtNmp1AwGQBvuoc9hM1ocbRKzWHgYTQQzik0dmwEfneoUjyYeuk%2FuBr9%2F9Ej3GEUF%2Ff2hhI3loiniMAmuZVvUwi3qOIGI6WRvYDGRv5z5WieVmbA2ao%2FbpNgaa%2BKa4FFq2u%2FzEZLueLdIeWg15i%2Bm31Mf8iY2lMKzJtRXLFGELpbE4XX0KaTtBHJpaNLIIe%2BA1ev9eIssKCzd%2FXkJHo%2BaA%2FT42t9DfKFNB7T6kUZW76l6nMfZqWYmiI5Wuiz7DMJSp32a3Bp1ioWq9wiKOltmZ8bElJ%2BAhMICI3cIGOqUB6NGhfE9%2FjWb04UWEZJEcgQuLlJ4%2B7WKMu6MXb%2F8kyHCOgR1OhFpZb8lCmyH6MWQnS5iE5pMrrMXI4g%2B7vVz0BA14NiZllahWh4Mx0opq3%2F2rz5Ar4wheiL0H9TVuMw14i4NI37QIQNGFWJQYaYea71vlKfWFk7ZvyeyJfAe69gcPRLjT%2F4tCnby9eYmzqo%2FTDobUJiH%2FDNKBe%2BOfNQZRtO7Je6Bu&X-Amz-Signature=32d729713407dd4ea18c6633c0c519c6b3b56c4bc389ed2c399ac4dc81c74772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4P7CCGW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAs3gYhEQbafLGKwVMktNKZa60GgvGuc%2FIIpGKRAXZJQIgMb6jQgNdtrUBcn64QvgasIgDm7k8gaVktcq%2FW3y9XrsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJimPoQf7Gd6vjVuiircA8KFPadd0CUwH0FO4p3vA5GtT5IqX%2BqJJ4Rk4Pyb2gvhinoXQAGiuM8ppJSw9rjZlzw%2Bb0h4TW%2FB9mQPF91N6nzhsaJUZwjvhuZRtVaxXhDrx%2F3Bx35CM1Rcv4qjfE4GyufyYlrDVCbc%2BPnWxf2gII%2BwzR6iyOHwiAPVTd8A29eOQ%2FwXep6neNkWWnLb4oGi9MU8bEfR3I45g0cc880BQO5St5nk1fEIee9c1pSM07JgGOJ%2FG3HFWT97DI6RFhlCCpo3A%2F2%2FLJEpEG5Gl%2BCCMm%2FlquyIEn4%2BgaRgW2poArFroDGeUaGBNLQ1oZ%2FI19P0JH91pKcEwm7Lg8zMbI8C3UIowo03PPFtNmp1AwGQBvuoc9hM1ocbRKzWHgYTQQzik0dmwEfneoUjyYeuk%2FuBr9%2F9Ej3GEUF%2Ff2hhI3loiniMAmuZVvUwi3qOIGI6WRvYDGRv5z5WieVmbA2ao%2FbpNgaa%2BKa4FFq2u%2FzEZLueLdIeWg15i%2Bm31Mf8iY2lMKzJtRXLFGELpbE4XX0KaTtBHJpaNLIIe%2BA1ev9eIssKCzd%2FXkJHo%2BaA%2FT42t9DfKFNB7T6kUZW76l6nMfZqWYmiI5Wuiz7DMJSp32a3Bp1ioWq9wiKOltmZ8bElJ%2BAhMICI3cIGOqUB6NGhfE9%2FjWb04UWEZJEcgQuLlJ4%2B7WKMu6MXb%2F8kyHCOgR1OhFpZb8lCmyH6MWQnS5iE5pMrrMXI4g%2B7vVz0BA14NiZllahWh4Mx0opq3%2F2rz5Ar4wheiL0H9TVuMw14i4NI37QIQNGFWJQYaYea71vlKfWFk7ZvyeyJfAe69gcPRLjT%2F4tCnby9eYmzqo%2FTDobUJiH%2FDNKBe%2BOfNQZRtO7Je6Bu&X-Amz-Signature=97a18e49482d6e1d00aa20851760774b178735de1318a9ce927905dd22bda7e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4P7CCGW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAs3gYhEQbafLGKwVMktNKZa60GgvGuc%2FIIpGKRAXZJQIgMb6jQgNdtrUBcn64QvgasIgDm7k8gaVktcq%2FW3y9XrsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJimPoQf7Gd6vjVuiircA8KFPadd0CUwH0FO4p3vA5GtT5IqX%2BqJJ4Rk4Pyb2gvhinoXQAGiuM8ppJSw9rjZlzw%2Bb0h4TW%2FB9mQPF91N6nzhsaJUZwjvhuZRtVaxXhDrx%2F3Bx35CM1Rcv4qjfE4GyufyYlrDVCbc%2BPnWxf2gII%2BwzR6iyOHwiAPVTd8A29eOQ%2FwXep6neNkWWnLb4oGi9MU8bEfR3I45g0cc880BQO5St5nk1fEIee9c1pSM07JgGOJ%2FG3HFWT97DI6RFhlCCpo3A%2F2%2FLJEpEG5Gl%2BCCMm%2FlquyIEn4%2BgaRgW2poArFroDGeUaGBNLQ1oZ%2FI19P0JH91pKcEwm7Lg8zMbI8C3UIowo03PPFtNmp1AwGQBvuoc9hM1ocbRKzWHgYTQQzik0dmwEfneoUjyYeuk%2FuBr9%2F9Ej3GEUF%2Ff2hhI3loiniMAmuZVvUwi3qOIGI6WRvYDGRv5z5WieVmbA2ao%2FbpNgaa%2BKa4FFq2u%2FzEZLueLdIeWg15i%2Bm31Mf8iY2lMKzJtRXLFGELpbE4XX0KaTtBHJpaNLIIe%2BA1ev9eIssKCzd%2FXkJHo%2BaA%2FT42t9DfKFNB7T6kUZW76l6nMfZqWYmiI5Wuiz7DMJSp32a3Bp1ioWq9wiKOltmZ8bElJ%2BAhMICI3cIGOqUB6NGhfE9%2FjWb04UWEZJEcgQuLlJ4%2B7WKMu6MXb%2F8kyHCOgR1OhFpZb8lCmyH6MWQnS5iE5pMrrMXI4g%2B7vVz0BA14NiZllahWh4Mx0opq3%2F2rz5Ar4wheiL0H9TVuMw14i4NI37QIQNGFWJQYaYea71vlKfWFk7ZvyeyJfAe69gcPRLjT%2F4tCnby9eYmzqo%2FTDobUJiH%2FDNKBe%2BOfNQZRtO7Je6Bu&X-Amz-Signature=8dd0799aca5f6259fbd1a32de56528c558fa020d04969023513cc8f3f4b3ff0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
