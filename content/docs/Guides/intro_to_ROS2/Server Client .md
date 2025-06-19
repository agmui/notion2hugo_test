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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE3TURDG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAEOriv%2BpA47RmnjVHnCFN9R9m%2BBAgXH4LT4kEFP1uFAiA4I3M%2BnRqyc8KqCfFy0X3Si6bE8FqYJBiXlUzQ%2BBR3PiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNtTK%2BhIp4QdLg7c1KtwD7JRqq7Kng0Pe9GKRQt%2BWZzzfNdlunU4uDMwfCrH3Dvr0ZPAkLF6Oievb%2BKZlX7fIUkqTLKRuZqgBEp74kJDGrHMRN4%2Bu%2Bhpjssh7%2BAElhwj2FPasPGufItA9lb%2FD118zVN7O1oZTqsJBr3BBFXzQeKlWFu%2BNER6W0gxcu3t78s2Oa9eQ8MeeM8hwaG3Av744QgqDceb2TmJtDsbkpTu%2BYZqEHR994JZEouUEgRU0j3gYkOhBRTLctb8xKIw5voeMOauIPaL6n8jcAFOf0TUlz7fUdZxiVET0wNLKUYwclgww4RCIB2RQiEg%2F4%2FjXvb6E3bB4EvcOko3vVsM6c2HDS1i%2BaRFB5sUG8IcogDoSI3GjGaDSTM5CVY%2B2OUXwBmjpOzYdhPzbqMPmMKwwoILrqwYO5anVkKjoyvuFnve7MLGf%2Bn2dk%2Biw372GJp%2F9HlLjw1SB8I5I5jOJ8N2kHUocjGlkxAM%2Fiti%2FJrWpUuetGxLsFPg%2Fvlazy5dy4Nsqiza6whxmDlVKm5MFtRLeXD4zeEOyzPcdqdIa9U3mtSpgTIZnDZmaSs6F0uj30S8OJcLn2OEc%2BP%2BkUkGR8jsRl%2B52xdSDa4QpXxoaBiVBUA2jIoUkXfjIx9I74uwJU5kwscrNwgY6pgEdXusd9A%2BwFKnfGmyIi%2BAxUBx0%2FfYNN8clYVMl5qUsWOHZbbgQLs7X0xkG%2BUiSo6asP874n5DPRxg1evIT1yuxtZaqXNavIY3PRYlD5Cqoo%2BZDgR%2BjjZ0ScO5mvKv%2BMwxlr80a%2Barf1GyE2Rknis9Lsh3WDZOsP4eHTr1ZUzWL60Yuebt2L6GeuvtYzL%2BJzEH%2FqPP2ZCOi7NVvtoJQ39eNL%2BelMEP1&X-Amz-Signature=9d36dd6a59f72307c8c9dc7ff7ad05edd7945e838d41e91beefe2dda1ed1adbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE3TURDG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAEOriv%2BpA47RmnjVHnCFN9R9m%2BBAgXH4LT4kEFP1uFAiA4I3M%2BnRqyc8KqCfFy0X3Si6bE8FqYJBiXlUzQ%2BBR3PiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNtTK%2BhIp4QdLg7c1KtwD7JRqq7Kng0Pe9GKRQt%2BWZzzfNdlunU4uDMwfCrH3Dvr0ZPAkLF6Oievb%2BKZlX7fIUkqTLKRuZqgBEp74kJDGrHMRN4%2Bu%2Bhpjssh7%2BAElhwj2FPasPGufItA9lb%2FD118zVN7O1oZTqsJBr3BBFXzQeKlWFu%2BNER6W0gxcu3t78s2Oa9eQ8MeeM8hwaG3Av744QgqDceb2TmJtDsbkpTu%2BYZqEHR994JZEouUEgRU0j3gYkOhBRTLctb8xKIw5voeMOauIPaL6n8jcAFOf0TUlz7fUdZxiVET0wNLKUYwclgww4RCIB2RQiEg%2F4%2FjXvb6E3bB4EvcOko3vVsM6c2HDS1i%2BaRFB5sUG8IcogDoSI3GjGaDSTM5CVY%2B2OUXwBmjpOzYdhPzbqMPmMKwwoILrqwYO5anVkKjoyvuFnve7MLGf%2Bn2dk%2Biw372GJp%2F9HlLjw1SB8I5I5jOJ8N2kHUocjGlkxAM%2Fiti%2FJrWpUuetGxLsFPg%2Fvlazy5dy4Nsqiza6whxmDlVKm5MFtRLeXD4zeEOyzPcdqdIa9U3mtSpgTIZnDZmaSs6F0uj30S8OJcLn2OEc%2BP%2BkUkGR8jsRl%2B52xdSDa4QpXxoaBiVBUA2jIoUkXfjIx9I74uwJU5kwscrNwgY6pgEdXusd9A%2BwFKnfGmyIi%2BAxUBx0%2FfYNN8clYVMl5qUsWOHZbbgQLs7X0xkG%2BUiSo6asP874n5DPRxg1evIT1yuxtZaqXNavIY3PRYlD5Cqoo%2BZDgR%2BjjZ0ScO5mvKv%2BMwxlr80a%2Barf1GyE2Rknis9Lsh3WDZOsP4eHTr1ZUzWL60Yuebt2L6GeuvtYzL%2BJzEH%2FqPP2ZCOi7NVvtoJQ39eNL%2BelMEP1&X-Amz-Signature=9af12c163f6cf36bcf86e1876736f3917b16387d976bb074fad1f6419b60ce9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE3TURDG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAEOriv%2BpA47RmnjVHnCFN9R9m%2BBAgXH4LT4kEFP1uFAiA4I3M%2BnRqyc8KqCfFy0X3Si6bE8FqYJBiXlUzQ%2BBR3PiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNtTK%2BhIp4QdLg7c1KtwD7JRqq7Kng0Pe9GKRQt%2BWZzzfNdlunU4uDMwfCrH3Dvr0ZPAkLF6Oievb%2BKZlX7fIUkqTLKRuZqgBEp74kJDGrHMRN4%2Bu%2Bhpjssh7%2BAElhwj2FPasPGufItA9lb%2FD118zVN7O1oZTqsJBr3BBFXzQeKlWFu%2BNER6W0gxcu3t78s2Oa9eQ8MeeM8hwaG3Av744QgqDceb2TmJtDsbkpTu%2BYZqEHR994JZEouUEgRU0j3gYkOhBRTLctb8xKIw5voeMOauIPaL6n8jcAFOf0TUlz7fUdZxiVET0wNLKUYwclgww4RCIB2RQiEg%2F4%2FjXvb6E3bB4EvcOko3vVsM6c2HDS1i%2BaRFB5sUG8IcogDoSI3GjGaDSTM5CVY%2B2OUXwBmjpOzYdhPzbqMPmMKwwoILrqwYO5anVkKjoyvuFnve7MLGf%2Bn2dk%2Biw372GJp%2F9HlLjw1SB8I5I5jOJ8N2kHUocjGlkxAM%2Fiti%2FJrWpUuetGxLsFPg%2Fvlazy5dy4Nsqiza6whxmDlVKm5MFtRLeXD4zeEOyzPcdqdIa9U3mtSpgTIZnDZmaSs6F0uj30S8OJcLn2OEc%2BP%2BkUkGR8jsRl%2B52xdSDa4QpXxoaBiVBUA2jIoUkXfjIx9I74uwJU5kwscrNwgY6pgEdXusd9A%2BwFKnfGmyIi%2BAxUBx0%2FfYNN8clYVMl5qUsWOHZbbgQLs7X0xkG%2BUiSo6asP874n5DPRxg1evIT1yuxtZaqXNavIY3PRYlD5Cqoo%2BZDgR%2BjjZ0ScO5mvKv%2BMwxlr80a%2Barf1GyE2Rknis9Lsh3WDZOsP4eHTr1ZUzWL60Yuebt2L6GeuvtYzL%2BJzEH%2FqPP2ZCOi7NVvtoJQ39eNL%2BelMEP1&X-Amz-Signature=9b8c6f4d044c3e9cac231c96522e02bff28d566d9eaa73a7a14a429e06c642ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE3TURDG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAEOriv%2BpA47RmnjVHnCFN9R9m%2BBAgXH4LT4kEFP1uFAiA4I3M%2BnRqyc8KqCfFy0X3Si6bE8FqYJBiXlUzQ%2BBR3PiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNtTK%2BhIp4QdLg7c1KtwD7JRqq7Kng0Pe9GKRQt%2BWZzzfNdlunU4uDMwfCrH3Dvr0ZPAkLF6Oievb%2BKZlX7fIUkqTLKRuZqgBEp74kJDGrHMRN4%2Bu%2Bhpjssh7%2BAElhwj2FPasPGufItA9lb%2FD118zVN7O1oZTqsJBr3BBFXzQeKlWFu%2BNER6W0gxcu3t78s2Oa9eQ8MeeM8hwaG3Av744QgqDceb2TmJtDsbkpTu%2BYZqEHR994JZEouUEgRU0j3gYkOhBRTLctb8xKIw5voeMOauIPaL6n8jcAFOf0TUlz7fUdZxiVET0wNLKUYwclgww4RCIB2RQiEg%2F4%2FjXvb6E3bB4EvcOko3vVsM6c2HDS1i%2BaRFB5sUG8IcogDoSI3GjGaDSTM5CVY%2B2OUXwBmjpOzYdhPzbqMPmMKwwoILrqwYO5anVkKjoyvuFnve7MLGf%2Bn2dk%2Biw372GJp%2F9HlLjw1SB8I5I5jOJ8N2kHUocjGlkxAM%2Fiti%2FJrWpUuetGxLsFPg%2Fvlazy5dy4Nsqiza6whxmDlVKm5MFtRLeXD4zeEOyzPcdqdIa9U3mtSpgTIZnDZmaSs6F0uj30S8OJcLn2OEc%2BP%2BkUkGR8jsRl%2B52xdSDa4QpXxoaBiVBUA2jIoUkXfjIx9I74uwJU5kwscrNwgY6pgEdXusd9A%2BwFKnfGmyIi%2BAxUBx0%2FfYNN8clYVMl5qUsWOHZbbgQLs7X0xkG%2BUiSo6asP874n5DPRxg1evIT1yuxtZaqXNavIY3PRYlD5Cqoo%2BZDgR%2BjjZ0ScO5mvKv%2BMwxlr80a%2Barf1GyE2Rknis9Lsh3WDZOsP4eHTr1ZUzWL60Yuebt2L6GeuvtYzL%2BJzEH%2FqPP2ZCOi7NVvtoJQ39eNL%2BelMEP1&X-Amz-Signature=ba41c6033a13fc281ab3a9882dba11ffd2be538306de567dd345f993ddcc64e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE3TURDG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAEOriv%2BpA47RmnjVHnCFN9R9m%2BBAgXH4LT4kEFP1uFAiA4I3M%2BnRqyc8KqCfFy0X3Si6bE8FqYJBiXlUzQ%2BBR3PiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNtTK%2BhIp4QdLg7c1KtwD7JRqq7Kng0Pe9GKRQt%2BWZzzfNdlunU4uDMwfCrH3Dvr0ZPAkLF6Oievb%2BKZlX7fIUkqTLKRuZqgBEp74kJDGrHMRN4%2Bu%2Bhpjssh7%2BAElhwj2FPasPGufItA9lb%2FD118zVN7O1oZTqsJBr3BBFXzQeKlWFu%2BNER6W0gxcu3t78s2Oa9eQ8MeeM8hwaG3Av744QgqDceb2TmJtDsbkpTu%2BYZqEHR994JZEouUEgRU0j3gYkOhBRTLctb8xKIw5voeMOauIPaL6n8jcAFOf0TUlz7fUdZxiVET0wNLKUYwclgww4RCIB2RQiEg%2F4%2FjXvb6E3bB4EvcOko3vVsM6c2HDS1i%2BaRFB5sUG8IcogDoSI3GjGaDSTM5CVY%2B2OUXwBmjpOzYdhPzbqMPmMKwwoILrqwYO5anVkKjoyvuFnve7MLGf%2Bn2dk%2Biw372GJp%2F9HlLjw1SB8I5I5jOJ8N2kHUocjGlkxAM%2Fiti%2FJrWpUuetGxLsFPg%2Fvlazy5dy4Nsqiza6whxmDlVKm5MFtRLeXD4zeEOyzPcdqdIa9U3mtSpgTIZnDZmaSs6F0uj30S8OJcLn2OEc%2BP%2BkUkGR8jsRl%2B52xdSDa4QpXxoaBiVBUA2jIoUkXfjIx9I74uwJU5kwscrNwgY6pgEdXusd9A%2BwFKnfGmyIi%2BAxUBx0%2FfYNN8clYVMl5qUsWOHZbbgQLs7X0xkG%2BUiSo6asP874n5DPRxg1evIT1yuxtZaqXNavIY3PRYlD5Cqoo%2BZDgR%2BjjZ0ScO5mvKv%2BMwxlr80a%2Barf1GyE2Rknis9Lsh3WDZOsP4eHTr1ZUzWL60Yuebt2L6GeuvtYzL%2BJzEH%2FqPP2ZCOi7NVvtoJQ39eNL%2BelMEP1&X-Amz-Signature=349b180efa4824480ba9c9b9e43d788350b767d85a7cc9fb3e8d68111eb61563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
