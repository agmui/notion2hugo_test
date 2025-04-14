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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLN6F6RR%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9av9Vcma%2BxlNdtcqxLTHvr8orkHMAyqt9S6VayP7C1QIhANj8OModzENWvX%2BpaqM%2F0fslF8lNY38JQIfkKP7gMqi6KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXiMVe1keUcQr0prkq3AOSL8CaGhyFYtR2mYUZJuawo4RD9JACPAoC1X3VHBWJjpOZOsap6wRCGbbwFCn%2BvGC7k9OeAme4z5WbY1InKjXsdjsJK8lxNISq%2Bv29YImwE%2BoF1eIblJkgKwuko%2FydCWpMnG6XAZD5D5wd1fwB%2FXT9qbZp9FeHfqY%2BI79qHfGqvHjWNqcgCxpJk7YUY5mmSrij3z96D1YkArmGc5%2FQbhX2G%2BjKLi1WZGbIByZG0hz3xMWR2SO0hOkiu6J2rHm0brNyl5pFa0E6nlq7vo%2BaI%2Bregb0dKvriy8NQvcAEdICJdumHepevy0TdKzHwfSUFkoSNc547HkZ4%2FiRWxPibwGO7%2F6dCwU5Oax%2BYS9w3hOon5RcsImdaJUPfgwgouJtRYZHXI8kGdqjUVbCT3DJ6B9N1JKDrS9typSaEAfbq0rZ%2FnRIS61e6m2JHQI585kYb7vxagzdkbOertDBp4HzIwut7YYsbA64h0Yt2X2S8xl82R93UFrFZpdmfe4wKuVwIanrl2yh7hWfFvp8fcj9TZphQjQQ4QB4LdTKXEEeWAtUJ3Vhyn8CG%2Bv8qRr2WApifC%2FD%2Fo5oNagYOTetWGG1kcUgF4Bvb4hiZpjp0dXhPdlDje2HKD5OXmGVm5231%2BjD%2BufG%2FBjqkARZa7O8y90nFyjmpWwrXAQ8Jj56NT0qAXcrqdql9JWM2wg25uJJS3zlFuYkpZpVEaPNr5TuHq6JuFtENIzX8r6m%2FjReOGuveTQqIxcHdLoL5ma3ULHLVRQEJ64IcdLsgZUAnoBtSMSC%2FotqV8wdlS0MDJTAEBNq5NpqBgf3UL4WCU62x3bt1mVxOu63UTescMrN49xoYb41KsZpwZcMUOGg7%2FrR5&X-Amz-Signature=58552946d067c1c88998d9d1567c982ae3a317e28ca39de41f0337ba2020108f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLN6F6RR%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9av9Vcma%2BxlNdtcqxLTHvr8orkHMAyqt9S6VayP7C1QIhANj8OModzENWvX%2BpaqM%2F0fslF8lNY38JQIfkKP7gMqi6KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXiMVe1keUcQr0prkq3AOSL8CaGhyFYtR2mYUZJuawo4RD9JACPAoC1X3VHBWJjpOZOsap6wRCGbbwFCn%2BvGC7k9OeAme4z5WbY1InKjXsdjsJK8lxNISq%2Bv29YImwE%2BoF1eIblJkgKwuko%2FydCWpMnG6XAZD5D5wd1fwB%2FXT9qbZp9FeHfqY%2BI79qHfGqvHjWNqcgCxpJk7YUY5mmSrij3z96D1YkArmGc5%2FQbhX2G%2BjKLi1WZGbIByZG0hz3xMWR2SO0hOkiu6J2rHm0brNyl5pFa0E6nlq7vo%2BaI%2Bregb0dKvriy8NQvcAEdICJdumHepevy0TdKzHwfSUFkoSNc547HkZ4%2FiRWxPibwGO7%2F6dCwU5Oax%2BYS9w3hOon5RcsImdaJUPfgwgouJtRYZHXI8kGdqjUVbCT3DJ6B9N1JKDrS9typSaEAfbq0rZ%2FnRIS61e6m2JHQI585kYb7vxagzdkbOertDBp4HzIwut7YYsbA64h0Yt2X2S8xl82R93UFrFZpdmfe4wKuVwIanrl2yh7hWfFvp8fcj9TZphQjQQ4QB4LdTKXEEeWAtUJ3Vhyn8CG%2Bv8qRr2WApifC%2FD%2Fo5oNagYOTetWGG1kcUgF4Bvb4hiZpjp0dXhPdlDje2HKD5OXmGVm5231%2BjD%2BufG%2FBjqkARZa7O8y90nFyjmpWwrXAQ8Jj56NT0qAXcrqdql9JWM2wg25uJJS3zlFuYkpZpVEaPNr5TuHq6JuFtENIzX8r6m%2FjReOGuveTQqIxcHdLoL5ma3ULHLVRQEJ64IcdLsgZUAnoBtSMSC%2FotqV8wdlS0MDJTAEBNq5NpqBgf3UL4WCU62x3bt1mVxOu63UTescMrN49xoYb41KsZpwZcMUOGg7%2FrR5&X-Amz-Signature=4910a0c7927b8035cf5049f095c07e31d856e548481fa35028e167108fcdc304&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLN6F6RR%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9av9Vcma%2BxlNdtcqxLTHvr8orkHMAyqt9S6VayP7C1QIhANj8OModzENWvX%2BpaqM%2F0fslF8lNY38JQIfkKP7gMqi6KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXiMVe1keUcQr0prkq3AOSL8CaGhyFYtR2mYUZJuawo4RD9JACPAoC1X3VHBWJjpOZOsap6wRCGbbwFCn%2BvGC7k9OeAme4z5WbY1InKjXsdjsJK8lxNISq%2Bv29YImwE%2BoF1eIblJkgKwuko%2FydCWpMnG6XAZD5D5wd1fwB%2FXT9qbZp9FeHfqY%2BI79qHfGqvHjWNqcgCxpJk7YUY5mmSrij3z96D1YkArmGc5%2FQbhX2G%2BjKLi1WZGbIByZG0hz3xMWR2SO0hOkiu6J2rHm0brNyl5pFa0E6nlq7vo%2BaI%2Bregb0dKvriy8NQvcAEdICJdumHepevy0TdKzHwfSUFkoSNc547HkZ4%2FiRWxPibwGO7%2F6dCwU5Oax%2BYS9w3hOon5RcsImdaJUPfgwgouJtRYZHXI8kGdqjUVbCT3DJ6B9N1JKDrS9typSaEAfbq0rZ%2FnRIS61e6m2JHQI585kYb7vxagzdkbOertDBp4HzIwut7YYsbA64h0Yt2X2S8xl82R93UFrFZpdmfe4wKuVwIanrl2yh7hWfFvp8fcj9TZphQjQQ4QB4LdTKXEEeWAtUJ3Vhyn8CG%2Bv8qRr2WApifC%2FD%2Fo5oNagYOTetWGG1kcUgF4Bvb4hiZpjp0dXhPdlDje2HKD5OXmGVm5231%2BjD%2BufG%2FBjqkARZa7O8y90nFyjmpWwrXAQ8Jj56NT0qAXcrqdql9JWM2wg25uJJS3zlFuYkpZpVEaPNr5TuHq6JuFtENIzX8r6m%2FjReOGuveTQqIxcHdLoL5ma3ULHLVRQEJ64IcdLsgZUAnoBtSMSC%2FotqV8wdlS0MDJTAEBNq5NpqBgf3UL4WCU62x3bt1mVxOu63UTescMrN49xoYb41KsZpwZcMUOGg7%2FrR5&X-Amz-Signature=bc1c4ef1c1ae6dcf130d43ce28d109d7ef4d98ebac4bb6d82180004116b5cd18&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLN6F6RR%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9av9Vcma%2BxlNdtcqxLTHvr8orkHMAyqt9S6VayP7C1QIhANj8OModzENWvX%2BpaqM%2F0fslF8lNY38JQIfkKP7gMqi6KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXiMVe1keUcQr0prkq3AOSL8CaGhyFYtR2mYUZJuawo4RD9JACPAoC1X3VHBWJjpOZOsap6wRCGbbwFCn%2BvGC7k9OeAme4z5WbY1InKjXsdjsJK8lxNISq%2Bv29YImwE%2BoF1eIblJkgKwuko%2FydCWpMnG6XAZD5D5wd1fwB%2FXT9qbZp9FeHfqY%2BI79qHfGqvHjWNqcgCxpJk7YUY5mmSrij3z96D1YkArmGc5%2FQbhX2G%2BjKLi1WZGbIByZG0hz3xMWR2SO0hOkiu6J2rHm0brNyl5pFa0E6nlq7vo%2BaI%2Bregb0dKvriy8NQvcAEdICJdumHepevy0TdKzHwfSUFkoSNc547HkZ4%2FiRWxPibwGO7%2F6dCwU5Oax%2BYS9w3hOon5RcsImdaJUPfgwgouJtRYZHXI8kGdqjUVbCT3DJ6B9N1JKDrS9typSaEAfbq0rZ%2FnRIS61e6m2JHQI585kYb7vxagzdkbOertDBp4HzIwut7YYsbA64h0Yt2X2S8xl82R93UFrFZpdmfe4wKuVwIanrl2yh7hWfFvp8fcj9TZphQjQQ4QB4LdTKXEEeWAtUJ3Vhyn8CG%2Bv8qRr2WApifC%2FD%2Fo5oNagYOTetWGG1kcUgF4Bvb4hiZpjp0dXhPdlDje2HKD5OXmGVm5231%2BjD%2BufG%2FBjqkARZa7O8y90nFyjmpWwrXAQ8Jj56NT0qAXcrqdql9JWM2wg25uJJS3zlFuYkpZpVEaPNr5TuHq6JuFtENIzX8r6m%2FjReOGuveTQqIxcHdLoL5ma3ULHLVRQEJ64IcdLsgZUAnoBtSMSC%2FotqV8wdlS0MDJTAEBNq5NpqBgf3UL4WCU62x3bt1mVxOu63UTescMrN49xoYb41KsZpwZcMUOGg7%2FrR5&X-Amz-Signature=f1c3d6d0c144cb8a33d68c95759a09bb725deb00c5de5cd20934a245cffbfb25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLN6F6RR%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9av9Vcma%2BxlNdtcqxLTHvr8orkHMAyqt9S6VayP7C1QIhANj8OModzENWvX%2BpaqM%2F0fslF8lNY38JQIfkKP7gMqi6KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXiMVe1keUcQr0prkq3AOSL8CaGhyFYtR2mYUZJuawo4RD9JACPAoC1X3VHBWJjpOZOsap6wRCGbbwFCn%2BvGC7k9OeAme4z5WbY1InKjXsdjsJK8lxNISq%2Bv29YImwE%2BoF1eIblJkgKwuko%2FydCWpMnG6XAZD5D5wd1fwB%2FXT9qbZp9FeHfqY%2BI79qHfGqvHjWNqcgCxpJk7YUY5mmSrij3z96D1YkArmGc5%2FQbhX2G%2BjKLi1WZGbIByZG0hz3xMWR2SO0hOkiu6J2rHm0brNyl5pFa0E6nlq7vo%2BaI%2Bregb0dKvriy8NQvcAEdICJdumHepevy0TdKzHwfSUFkoSNc547HkZ4%2FiRWxPibwGO7%2F6dCwU5Oax%2BYS9w3hOon5RcsImdaJUPfgwgouJtRYZHXI8kGdqjUVbCT3DJ6B9N1JKDrS9typSaEAfbq0rZ%2FnRIS61e6m2JHQI585kYb7vxagzdkbOertDBp4HzIwut7YYsbA64h0Yt2X2S8xl82R93UFrFZpdmfe4wKuVwIanrl2yh7hWfFvp8fcj9TZphQjQQ4QB4LdTKXEEeWAtUJ3Vhyn8CG%2Bv8qRr2WApifC%2FD%2Fo5oNagYOTetWGG1kcUgF4Bvb4hiZpjp0dXhPdlDje2HKD5OXmGVm5231%2BjD%2BufG%2FBjqkARZa7O8y90nFyjmpWwrXAQ8Jj56NT0qAXcrqdql9JWM2wg25uJJS3zlFuYkpZpVEaPNr5TuHq6JuFtENIzX8r6m%2FjReOGuveTQqIxcHdLoL5ma3ULHLVRQEJ64IcdLsgZUAnoBtSMSC%2FotqV8wdlS0MDJTAEBNq5NpqBgf3UL4WCU62x3bt1mVxOu63UTescMrN49xoYb41KsZpwZcMUOGg7%2FrR5&X-Amz-Signature=6b59b947adb74d701c10dc79a08aad459fd7eed4c695a31df27a08f3a95b22a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
