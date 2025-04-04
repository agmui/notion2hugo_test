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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7TNUSF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFR%2BWaztmuOOyZuGLiruUVecxUSK5K1Ys4AGYaav1%2Ba%2FAiEAsA0HzAmI%2FP%2BBsOdkuuM7GI9BhkzgaHba0Z%2BljLvFBq4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4YLUpACN4Lc1q0SircAxrzfx114Mm8tyCxHBv0Erj%2BrmIcsUyW6k2Nm%2F6kyTYCp6XxC2N5D3YmdonjXmqLirdPDgKot7IZPW9bdLRK5oNLxj%2FAVgTswsf3MQ2RFzDdPDLdTQp1%2BpUVVbcAE3OV1pK6hjUotWrQelIFVpY3Wuh467R8ijnuRVPQ3F6BNCu1URbngjD1dmTGYRE0XdyB4V4%2B%2FyWj1CGBdmVy%2BzuLCIIK%2FsYGWS9M9mtSo48gTnQFBEf1A0nHJM43t11ns7mEB7SDzdkpck%2BxpsfB4uPWZWYRVxP917HoasBUj5b4KuaQ1zfgKjBFKOpIif7rDdXpSPrI0HgGdZtGHpc9WKP%2FTbc1DnO%2FLfc6xbsjsDhqSEMrnCeUr9f9k5DYislouruYol2btiIFkNeQAymtQGXkjEGmIWbi3Z6w73Bx2MUu1JsKLi9BA3NB0Qhr4Yw%2BkVlh8sq%2BT5O5YgujnsteNJwaB%2FqrFDoLtHEG4rvS95RJDOyBNOXd7ELbJQa9lEtTV6J%2FscPAtGtjXlzJgD8kR%2FQNcL59QYqEU1EaPRne9905z8gzwzA%2F22REMr7AOnW33V59tyGvmYw2Pad8VhMDfsqemQ2KM%2F71DrEoSc0rUa4XQX1O2VrQCEaNpmNKGpa3MOCBvb8GOqUB58ZcR8jy6yliiJMrjPqN5NiAe9wA23MXiaTtPS%2Fb5d6KxBJJK4PQQs0uZvQOjNA%2Bp4yXuh4PB2BbPNY6rdDod6G%2Bbf2uXw5cuccTv3OGvY75WEhY45JKUhDhylS0gITGs%2FJAZmRAmxFhDRXdRVsMoegr2qHRNoIYG%2F2G44jLx0X1zL7Bemc6bMGAZqf%2FOCLoy6lh2bCk81PFNswZMPl%2BVCSlTnSh&X-Amz-Signature=47bf3f2efa41a3d8e6e53123ca0487822d4acadb098afeded326361def839e22&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7TNUSF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFR%2BWaztmuOOyZuGLiruUVecxUSK5K1Ys4AGYaav1%2Ba%2FAiEAsA0HzAmI%2FP%2BBsOdkuuM7GI9BhkzgaHba0Z%2BljLvFBq4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4YLUpACN4Lc1q0SircAxrzfx114Mm8tyCxHBv0Erj%2BrmIcsUyW6k2Nm%2F6kyTYCp6XxC2N5D3YmdonjXmqLirdPDgKot7IZPW9bdLRK5oNLxj%2FAVgTswsf3MQ2RFzDdPDLdTQp1%2BpUVVbcAE3OV1pK6hjUotWrQelIFVpY3Wuh467R8ijnuRVPQ3F6BNCu1URbngjD1dmTGYRE0XdyB4V4%2B%2FyWj1CGBdmVy%2BzuLCIIK%2FsYGWS9M9mtSo48gTnQFBEf1A0nHJM43t11ns7mEB7SDzdkpck%2BxpsfB4uPWZWYRVxP917HoasBUj5b4KuaQ1zfgKjBFKOpIif7rDdXpSPrI0HgGdZtGHpc9WKP%2FTbc1DnO%2FLfc6xbsjsDhqSEMrnCeUr9f9k5DYislouruYol2btiIFkNeQAymtQGXkjEGmIWbi3Z6w73Bx2MUu1JsKLi9BA3NB0Qhr4Yw%2BkVlh8sq%2BT5O5YgujnsteNJwaB%2FqrFDoLtHEG4rvS95RJDOyBNOXd7ELbJQa9lEtTV6J%2FscPAtGtjXlzJgD8kR%2FQNcL59QYqEU1EaPRne9905z8gzwzA%2F22REMr7AOnW33V59tyGvmYw2Pad8VhMDfsqemQ2KM%2F71DrEoSc0rUa4XQX1O2VrQCEaNpmNKGpa3MOCBvb8GOqUB58ZcR8jy6yliiJMrjPqN5NiAe9wA23MXiaTtPS%2Fb5d6KxBJJK4PQQs0uZvQOjNA%2Bp4yXuh4PB2BbPNY6rdDod6G%2Bbf2uXw5cuccTv3OGvY75WEhY45JKUhDhylS0gITGs%2FJAZmRAmxFhDRXdRVsMoegr2qHRNoIYG%2F2G44jLx0X1zL7Bemc6bMGAZqf%2FOCLoy6lh2bCk81PFNswZMPl%2BVCSlTnSh&X-Amz-Signature=7604ea585183f2e1b3e4f5f81ae56992ee7fab788bd30bc0a2e13c883dfb7b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7TNUSF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFR%2BWaztmuOOyZuGLiruUVecxUSK5K1Ys4AGYaav1%2Ba%2FAiEAsA0HzAmI%2FP%2BBsOdkuuM7GI9BhkzgaHba0Z%2BljLvFBq4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4YLUpACN4Lc1q0SircAxrzfx114Mm8tyCxHBv0Erj%2BrmIcsUyW6k2Nm%2F6kyTYCp6XxC2N5D3YmdonjXmqLirdPDgKot7IZPW9bdLRK5oNLxj%2FAVgTswsf3MQ2RFzDdPDLdTQp1%2BpUVVbcAE3OV1pK6hjUotWrQelIFVpY3Wuh467R8ijnuRVPQ3F6BNCu1URbngjD1dmTGYRE0XdyB4V4%2B%2FyWj1CGBdmVy%2BzuLCIIK%2FsYGWS9M9mtSo48gTnQFBEf1A0nHJM43t11ns7mEB7SDzdkpck%2BxpsfB4uPWZWYRVxP917HoasBUj5b4KuaQ1zfgKjBFKOpIif7rDdXpSPrI0HgGdZtGHpc9WKP%2FTbc1DnO%2FLfc6xbsjsDhqSEMrnCeUr9f9k5DYislouruYol2btiIFkNeQAymtQGXkjEGmIWbi3Z6w73Bx2MUu1JsKLi9BA3NB0Qhr4Yw%2BkVlh8sq%2BT5O5YgujnsteNJwaB%2FqrFDoLtHEG4rvS95RJDOyBNOXd7ELbJQa9lEtTV6J%2FscPAtGtjXlzJgD8kR%2FQNcL59QYqEU1EaPRne9905z8gzwzA%2F22REMr7AOnW33V59tyGvmYw2Pad8VhMDfsqemQ2KM%2F71DrEoSc0rUa4XQX1O2VrQCEaNpmNKGpa3MOCBvb8GOqUB58ZcR8jy6yliiJMrjPqN5NiAe9wA23MXiaTtPS%2Fb5d6KxBJJK4PQQs0uZvQOjNA%2Bp4yXuh4PB2BbPNY6rdDod6G%2Bbf2uXw5cuccTv3OGvY75WEhY45JKUhDhylS0gITGs%2FJAZmRAmxFhDRXdRVsMoegr2qHRNoIYG%2F2G44jLx0X1zL7Bemc6bMGAZqf%2FOCLoy6lh2bCk81PFNswZMPl%2BVCSlTnSh&X-Amz-Signature=24d2401898643ebba51d2b93b5602c91d753332fe12e69660ba63939bb20124c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7TNUSF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFR%2BWaztmuOOyZuGLiruUVecxUSK5K1Ys4AGYaav1%2Ba%2FAiEAsA0HzAmI%2FP%2BBsOdkuuM7GI9BhkzgaHba0Z%2BljLvFBq4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4YLUpACN4Lc1q0SircAxrzfx114Mm8tyCxHBv0Erj%2BrmIcsUyW6k2Nm%2F6kyTYCp6XxC2N5D3YmdonjXmqLirdPDgKot7IZPW9bdLRK5oNLxj%2FAVgTswsf3MQ2RFzDdPDLdTQp1%2BpUVVbcAE3OV1pK6hjUotWrQelIFVpY3Wuh467R8ijnuRVPQ3F6BNCu1URbngjD1dmTGYRE0XdyB4V4%2B%2FyWj1CGBdmVy%2BzuLCIIK%2FsYGWS9M9mtSo48gTnQFBEf1A0nHJM43t11ns7mEB7SDzdkpck%2BxpsfB4uPWZWYRVxP917HoasBUj5b4KuaQ1zfgKjBFKOpIif7rDdXpSPrI0HgGdZtGHpc9WKP%2FTbc1DnO%2FLfc6xbsjsDhqSEMrnCeUr9f9k5DYislouruYol2btiIFkNeQAymtQGXkjEGmIWbi3Z6w73Bx2MUu1JsKLi9BA3NB0Qhr4Yw%2BkVlh8sq%2BT5O5YgujnsteNJwaB%2FqrFDoLtHEG4rvS95RJDOyBNOXd7ELbJQa9lEtTV6J%2FscPAtGtjXlzJgD8kR%2FQNcL59QYqEU1EaPRne9905z8gzwzA%2F22REMr7AOnW33V59tyGvmYw2Pad8VhMDfsqemQ2KM%2F71DrEoSc0rUa4XQX1O2VrQCEaNpmNKGpa3MOCBvb8GOqUB58ZcR8jy6yliiJMrjPqN5NiAe9wA23MXiaTtPS%2Fb5d6KxBJJK4PQQs0uZvQOjNA%2Bp4yXuh4PB2BbPNY6rdDod6G%2Bbf2uXw5cuccTv3OGvY75WEhY45JKUhDhylS0gITGs%2FJAZmRAmxFhDRXdRVsMoegr2qHRNoIYG%2F2G44jLx0X1zL7Bemc6bMGAZqf%2FOCLoy6lh2bCk81PFNswZMPl%2BVCSlTnSh&X-Amz-Signature=5d655df789c55823bbfec07f402fa2455d7ee10985f8287130404cd3e6334e93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7TNUSF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFR%2BWaztmuOOyZuGLiruUVecxUSK5K1Ys4AGYaav1%2Ba%2FAiEAsA0HzAmI%2FP%2BBsOdkuuM7GI9BhkzgaHba0Z%2BljLvFBq4qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4YLUpACN4Lc1q0SircAxrzfx114Mm8tyCxHBv0Erj%2BrmIcsUyW6k2Nm%2F6kyTYCp6XxC2N5D3YmdonjXmqLirdPDgKot7IZPW9bdLRK5oNLxj%2FAVgTswsf3MQ2RFzDdPDLdTQp1%2BpUVVbcAE3OV1pK6hjUotWrQelIFVpY3Wuh467R8ijnuRVPQ3F6BNCu1URbngjD1dmTGYRE0XdyB4V4%2B%2FyWj1CGBdmVy%2BzuLCIIK%2FsYGWS9M9mtSo48gTnQFBEf1A0nHJM43t11ns7mEB7SDzdkpck%2BxpsfB4uPWZWYRVxP917HoasBUj5b4KuaQ1zfgKjBFKOpIif7rDdXpSPrI0HgGdZtGHpc9WKP%2FTbc1DnO%2FLfc6xbsjsDhqSEMrnCeUr9f9k5DYislouruYol2btiIFkNeQAymtQGXkjEGmIWbi3Z6w73Bx2MUu1JsKLi9BA3NB0Qhr4Yw%2BkVlh8sq%2BT5O5YgujnsteNJwaB%2FqrFDoLtHEG4rvS95RJDOyBNOXd7ELbJQa9lEtTV6J%2FscPAtGtjXlzJgD8kR%2FQNcL59QYqEU1EaPRne9905z8gzwzA%2F22REMr7AOnW33V59tyGvmYw2Pad8VhMDfsqemQ2KM%2F71DrEoSc0rUa4XQX1O2VrQCEaNpmNKGpa3MOCBvb8GOqUB58ZcR8jy6yliiJMrjPqN5NiAe9wA23MXiaTtPS%2Fb5d6KxBJJK4PQQs0uZvQOjNA%2Bp4yXuh4PB2BbPNY6rdDod6G%2Bbf2uXw5cuccTv3OGvY75WEhY45JKUhDhylS0gITGs%2FJAZmRAmxFhDRXdRVsMoegr2qHRNoIYG%2F2G44jLx0X1zL7Bemc6bMGAZqf%2FOCLoy6lh2bCk81PFNswZMPl%2BVCSlTnSh&X-Amz-Signature=63b1dff0bc6ad9b945880e350e89e44a1d69aa005bc94401f9fff601fa920b64&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
