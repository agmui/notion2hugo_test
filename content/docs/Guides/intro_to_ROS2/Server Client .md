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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z5IDDCM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQC%2FcJxsNy3JMZSGc0sDS2gkr0vfxuQWACj1nymn9qI6CwIhAJ5M9135nxOLpFlI9xc1r42Tc%2FmHTZ3e4cCxTmDZEODoKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsukKStmpZdiqpIn8q3AOhGW3dgcEz9EVIFv%2FnAJgEGEplCNEORvPx%2BRuzb%2FEsxVF9TrRsfD1g43qkBMNcLYoV1YT1z8O5gwF8%2FGFg0wbHUszf0Yfe2he%2F8bEkpixfWDO46eATG3yrSALW5fNUWE00uDGwVmHeuIod7mO%2B4HwYm6BgNuaJxAejQESP78%2Fkh20NgIeRcuz705YkE78saNhThAgoYFGMDvzEzEPpO9B4yj8ykOWQ91jjGT5Wgw0tivGE0sBx4nVEnxC6ytOk%2F4cUtNxylJQDv7Xme9uLMUIoz2sd31s67FUrVBqOmSa3JhKmmfuG1kEYxJ5ij7pSLZ1z%2Frlqae7ihLzTW7ZC%2BLO%2B3M1%2FUCIy8n8NjvRD3ixegk5hrlVAAOC4N8COGtjS%2FfS1HhLfirXeaNusVdlU8fgiz9F80VZ3ntzYxVnfeSgx8xhhocRtAdblSKWc3F5XkYcIDxwtEp%2FcyzN4v8QK%2B304m%2Be68Q6SmiQyuEW8KaQUXlWt1B5B%2FDP%2BzGb61Rb6dKf3%2ByfxFPRGTDfqRUYyQ7hcJ8LI7d7tzkNJgO0r7dgv5zM8YvYVV376%2By36XETFgOqC0Q0NAZxUgA1yD7akB3%2BKhWOcmde%2FF0QjjejdRjkH1w%2FutASG26B36XGgszDN0YS%2BBjqkAZ415dublzpIXMbU525uDWEqpGiFgzPUB6TYSvJOKRZ%2B7vtsPECPGJozLIws1L4B3JGY18L1QwINbeLk5zy9N17IR6gNqwJD%2FjjGnOr3kaa4I4xKI8upm1O77JuKzaXPeqizph7S6nbwWZg0ikQfwGe5CWje8YoGV0EMPUbJJI3543ODE191617TCYRkL8en4jbWxOd6kaouhi4tMn0i1uKF7LN3&X-Amz-Signature=6288af0979a247a00373db84b79fc07bc69511816b0c5dcfaa8cd3371b82452c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z5IDDCM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQC%2FcJxsNy3JMZSGc0sDS2gkr0vfxuQWACj1nymn9qI6CwIhAJ5M9135nxOLpFlI9xc1r42Tc%2FmHTZ3e4cCxTmDZEODoKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsukKStmpZdiqpIn8q3AOhGW3dgcEz9EVIFv%2FnAJgEGEplCNEORvPx%2BRuzb%2FEsxVF9TrRsfD1g43qkBMNcLYoV1YT1z8O5gwF8%2FGFg0wbHUszf0Yfe2he%2F8bEkpixfWDO46eATG3yrSALW5fNUWE00uDGwVmHeuIod7mO%2B4HwYm6BgNuaJxAejQESP78%2Fkh20NgIeRcuz705YkE78saNhThAgoYFGMDvzEzEPpO9B4yj8ykOWQ91jjGT5Wgw0tivGE0sBx4nVEnxC6ytOk%2F4cUtNxylJQDv7Xme9uLMUIoz2sd31s67FUrVBqOmSa3JhKmmfuG1kEYxJ5ij7pSLZ1z%2Frlqae7ihLzTW7ZC%2BLO%2B3M1%2FUCIy8n8NjvRD3ixegk5hrlVAAOC4N8COGtjS%2FfS1HhLfirXeaNusVdlU8fgiz9F80VZ3ntzYxVnfeSgx8xhhocRtAdblSKWc3F5XkYcIDxwtEp%2FcyzN4v8QK%2B304m%2Be68Q6SmiQyuEW8KaQUXlWt1B5B%2FDP%2BzGb61Rb6dKf3%2ByfxFPRGTDfqRUYyQ7hcJ8LI7d7tzkNJgO0r7dgv5zM8YvYVV376%2By36XETFgOqC0Q0NAZxUgA1yD7akB3%2BKhWOcmde%2FF0QjjejdRjkH1w%2FutASG26B36XGgszDN0YS%2BBjqkAZ415dublzpIXMbU525uDWEqpGiFgzPUB6TYSvJOKRZ%2B7vtsPECPGJozLIws1L4B3JGY18L1QwINbeLk5zy9N17IR6gNqwJD%2FjjGnOr3kaa4I4xKI8upm1O77JuKzaXPeqizph7S6nbwWZg0ikQfwGe5CWje8YoGV0EMPUbJJI3543ODE191617TCYRkL8en4jbWxOd6kaouhi4tMn0i1uKF7LN3&X-Amz-Signature=147c90498ee4d41e60705371e049cce2a595b76b013d8feb7ee4e2d156dd3824&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z5IDDCM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQC%2FcJxsNy3JMZSGc0sDS2gkr0vfxuQWACj1nymn9qI6CwIhAJ5M9135nxOLpFlI9xc1r42Tc%2FmHTZ3e4cCxTmDZEODoKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsukKStmpZdiqpIn8q3AOhGW3dgcEz9EVIFv%2FnAJgEGEplCNEORvPx%2BRuzb%2FEsxVF9TrRsfD1g43qkBMNcLYoV1YT1z8O5gwF8%2FGFg0wbHUszf0Yfe2he%2F8bEkpixfWDO46eATG3yrSALW5fNUWE00uDGwVmHeuIod7mO%2B4HwYm6BgNuaJxAejQESP78%2Fkh20NgIeRcuz705YkE78saNhThAgoYFGMDvzEzEPpO9B4yj8ykOWQ91jjGT5Wgw0tivGE0sBx4nVEnxC6ytOk%2F4cUtNxylJQDv7Xme9uLMUIoz2sd31s67FUrVBqOmSa3JhKmmfuG1kEYxJ5ij7pSLZ1z%2Frlqae7ihLzTW7ZC%2BLO%2B3M1%2FUCIy8n8NjvRD3ixegk5hrlVAAOC4N8COGtjS%2FfS1HhLfirXeaNusVdlU8fgiz9F80VZ3ntzYxVnfeSgx8xhhocRtAdblSKWc3F5XkYcIDxwtEp%2FcyzN4v8QK%2B304m%2Be68Q6SmiQyuEW8KaQUXlWt1B5B%2FDP%2BzGb61Rb6dKf3%2ByfxFPRGTDfqRUYyQ7hcJ8LI7d7tzkNJgO0r7dgv5zM8YvYVV376%2By36XETFgOqC0Q0NAZxUgA1yD7akB3%2BKhWOcmde%2FF0QjjejdRjkH1w%2FutASG26B36XGgszDN0YS%2BBjqkAZ415dublzpIXMbU525uDWEqpGiFgzPUB6TYSvJOKRZ%2B7vtsPECPGJozLIws1L4B3JGY18L1QwINbeLk5zy9N17IR6gNqwJD%2FjjGnOr3kaa4I4xKI8upm1O77JuKzaXPeqizph7S6nbwWZg0ikQfwGe5CWje8YoGV0EMPUbJJI3543ODE191617TCYRkL8en4jbWxOd6kaouhi4tMn0i1uKF7LN3&X-Amz-Signature=42946de1dfb015a5622d1f5d79e5ce4b98cbf4bcdde640174ee677d98f9af4c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z5IDDCM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQC%2FcJxsNy3JMZSGc0sDS2gkr0vfxuQWACj1nymn9qI6CwIhAJ5M9135nxOLpFlI9xc1r42Tc%2FmHTZ3e4cCxTmDZEODoKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsukKStmpZdiqpIn8q3AOhGW3dgcEz9EVIFv%2FnAJgEGEplCNEORvPx%2BRuzb%2FEsxVF9TrRsfD1g43qkBMNcLYoV1YT1z8O5gwF8%2FGFg0wbHUszf0Yfe2he%2F8bEkpixfWDO46eATG3yrSALW5fNUWE00uDGwVmHeuIod7mO%2B4HwYm6BgNuaJxAejQESP78%2Fkh20NgIeRcuz705YkE78saNhThAgoYFGMDvzEzEPpO9B4yj8ykOWQ91jjGT5Wgw0tivGE0sBx4nVEnxC6ytOk%2F4cUtNxylJQDv7Xme9uLMUIoz2sd31s67FUrVBqOmSa3JhKmmfuG1kEYxJ5ij7pSLZ1z%2Frlqae7ihLzTW7ZC%2BLO%2B3M1%2FUCIy8n8NjvRD3ixegk5hrlVAAOC4N8COGtjS%2FfS1HhLfirXeaNusVdlU8fgiz9F80VZ3ntzYxVnfeSgx8xhhocRtAdblSKWc3F5XkYcIDxwtEp%2FcyzN4v8QK%2B304m%2Be68Q6SmiQyuEW8KaQUXlWt1B5B%2FDP%2BzGb61Rb6dKf3%2ByfxFPRGTDfqRUYyQ7hcJ8LI7d7tzkNJgO0r7dgv5zM8YvYVV376%2By36XETFgOqC0Q0NAZxUgA1yD7akB3%2BKhWOcmde%2FF0QjjejdRjkH1w%2FutASG26B36XGgszDN0YS%2BBjqkAZ415dublzpIXMbU525uDWEqpGiFgzPUB6TYSvJOKRZ%2B7vtsPECPGJozLIws1L4B3JGY18L1QwINbeLk5zy9N17IR6gNqwJD%2FjjGnOr3kaa4I4xKI8upm1O77JuKzaXPeqizph7S6nbwWZg0ikQfwGe5CWje8YoGV0EMPUbJJI3543ODE191617TCYRkL8en4jbWxOd6kaouhi4tMn0i1uKF7LN3&X-Amz-Signature=e32275af94436e4e02f81c075e3ae00d14cfec541f2a6bf0dba7d9a670222018&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z5IDDCM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQC%2FcJxsNy3JMZSGc0sDS2gkr0vfxuQWACj1nymn9qI6CwIhAJ5M9135nxOLpFlI9xc1r42Tc%2FmHTZ3e4cCxTmDZEODoKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsukKStmpZdiqpIn8q3AOhGW3dgcEz9EVIFv%2FnAJgEGEplCNEORvPx%2BRuzb%2FEsxVF9TrRsfD1g43qkBMNcLYoV1YT1z8O5gwF8%2FGFg0wbHUszf0Yfe2he%2F8bEkpixfWDO46eATG3yrSALW5fNUWE00uDGwVmHeuIod7mO%2B4HwYm6BgNuaJxAejQESP78%2Fkh20NgIeRcuz705YkE78saNhThAgoYFGMDvzEzEPpO9B4yj8ykOWQ91jjGT5Wgw0tivGE0sBx4nVEnxC6ytOk%2F4cUtNxylJQDv7Xme9uLMUIoz2sd31s67FUrVBqOmSa3JhKmmfuG1kEYxJ5ij7pSLZ1z%2Frlqae7ihLzTW7ZC%2BLO%2B3M1%2FUCIy8n8NjvRD3ixegk5hrlVAAOC4N8COGtjS%2FfS1HhLfirXeaNusVdlU8fgiz9F80VZ3ntzYxVnfeSgx8xhhocRtAdblSKWc3F5XkYcIDxwtEp%2FcyzN4v8QK%2B304m%2Be68Q6SmiQyuEW8KaQUXlWt1B5B%2FDP%2BzGb61Rb6dKf3%2ByfxFPRGTDfqRUYyQ7hcJ8LI7d7tzkNJgO0r7dgv5zM8YvYVV376%2By36XETFgOqC0Q0NAZxUgA1yD7akB3%2BKhWOcmde%2FF0QjjejdRjkH1w%2FutASG26B36XGgszDN0YS%2BBjqkAZ415dublzpIXMbU525uDWEqpGiFgzPUB6TYSvJOKRZ%2B7vtsPECPGJozLIws1L4B3JGY18L1QwINbeLk5zy9N17IR6gNqwJD%2FjjGnOr3kaa4I4xKI8upm1O77JuKzaXPeqizph7S6nbwWZg0ikQfwGe5CWje8YoGV0EMPUbJJI3543ODE191617TCYRkL8en4jbWxOd6kaouhi4tMn0i1uKF7LN3&X-Amz-Signature=753371d17793037c658aa59a564c95f45e899a1bffd456f19ae6a1f8e73b897b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
