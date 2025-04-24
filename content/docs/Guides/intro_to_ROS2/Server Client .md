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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z3RQJZV%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIG9CqCDI8JAqcX26m1srJf2lU122axld3pJ7WjMzqbnPAiEA%2BoFe%2BqkFoI5gGooZ4eShKfBA5pTE5TqB5%2BkjGQSB%2FP4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDNc5CFZwY5EErNvifSrcAxN6zFJxrFONA3ldS%2BVXougfb2m6iu4ESBNqWcPfoY9aMUfmNBQUNXGXeOpHwYVBXddXNehhblkdKpNquROSQ5LFdPv7Y1cTMI42gYOWnW5boG9jkOyJlcwvuYo6uVk7BXjdjd9zte8nghgPwn31ar4uYxKcMXksUHQ%2B%2FCwIL6oF5LLNq3JvKucfv6sGYHfL%2FnJC9RcTJYOU6eejCGDBHZUevmKFeTyplMdJWrZ3yauxmu5FpZTfJPvGheRaPARNxxhqNLKeKON4dKQGjGKeJcfayFhPHl3Tmn1bjIBtGUo56R2ISLSDO1DTsjrFGmp3HxYwpuNTQ5mb8O5%2FC4wUr2yC1H6omCZaiUwMJ7HVJHZtdZ4ZZuhjvs88fi6knDDs2euuq%2FrGZR9Cr7uJcSEFVo%2F9ZCjkBWXS5HVN6UXMAm%2Flmysw94HCE4cAkJg%2BxM8DRrEjdDkEkZTFlSpWTDDYBFZVjTbrUqgGLNm7i%2FbrgraOggCK94zQ6Ed0ubgZ00lT0xXdr2aSSt7TrMsVnrwyxt9aSzvlqXyq75IkiaKMDibE4X3HFkE8KESO7hJbkEjWz86kj6LMWzUlzmpp9JSxBPt%2FRtap3TDyCr%2BlPRK2pqxSoskiJbYjR2IXqegAMPmfqMAGOqUBiMshZBxKhU%2FhP%2B%2FMY1MrFuvTF09UmB9tfwmJE9%2BqXWuVxSrWKm2sUQuzjk0xs4gIDxFowi%2FcukvpoxyLXuG3i6NAdLpwSxKTrkIHvJPOJgo8sKZT8uE8mgZT71mOLixr3Iercmua4V%2BdBh0hHO6eHnXloOJTaKVykL%2FlGKoILPWf%2B4B%2B%2BUBWhTyB8x7Ky0Er3ssm1p7ORdIJaUJWA1CJuH%2BKXsLi&X-Amz-Signature=bde9dd5a1e4c1f72c3fd2cffc97b99e7e24634d1e6f51bd889111172768f29ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z3RQJZV%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIG9CqCDI8JAqcX26m1srJf2lU122axld3pJ7WjMzqbnPAiEA%2BoFe%2BqkFoI5gGooZ4eShKfBA5pTE5TqB5%2BkjGQSB%2FP4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDNc5CFZwY5EErNvifSrcAxN6zFJxrFONA3ldS%2BVXougfb2m6iu4ESBNqWcPfoY9aMUfmNBQUNXGXeOpHwYVBXddXNehhblkdKpNquROSQ5LFdPv7Y1cTMI42gYOWnW5boG9jkOyJlcwvuYo6uVk7BXjdjd9zte8nghgPwn31ar4uYxKcMXksUHQ%2B%2FCwIL6oF5LLNq3JvKucfv6sGYHfL%2FnJC9RcTJYOU6eejCGDBHZUevmKFeTyplMdJWrZ3yauxmu5FpZTfJPvGheRaPARNxxhqNLKeKON4dKQGjGKeJcfayFhPHl3Tmn1bjIBtGUo56R2ISLSDO1DTsjrFGmp3HxYwpuNTQ5mb8O5%2FC4wUr2yC1H6omCZaiUwMJ7HVJHZtdZ4ZZuhjvs88fi6knDDs2euuq%2FrGZR9Cr7uJcSEFVo%2F9ZCjkBWXS5HVN6UXMAm%2Flmysw94HCE4cAkJg%2BxM8DRrEjdDkEkZTFlSpWTDDYBFZVjTbrUqgGLNm7i%2FbrgraOggCK94zQ6Ed0ubgZ00lT0xXdr2aSSt7TrMsVnrwyxt9aSzvlqXyq75IkiaKMDibE4X3HFkE8KESO7hJbkEjWz86kj6LMWzUlzmpp9JSxBPt%2FRtap3TDyCr%2BlPRK2pqxSoskiJbYjR2IXqegAMPmfqMAGOqUBiMshZBxKhU%2FhP%2B%2FMY1MrFuvTF09UmB9tfwmJE9%2BqXWuVxSrWKm2sUQuzjk0xs4gIDxFowi%2FcukvpoxyLXuG3i6NAdLpwSxKTrkIHvJPOJgo8sKZT8uE8mgZT71mOLixr3Iercmua4V%2BdBh0hHO6eHnXloOJTaKVykL%2FlGKoILPWf%2B4B%2B%2BUBWhTyB8x7Ky0Er3ssm1p7ORdIJaUJWA1CJuH%2BKXsLi&X-Amz-Signature=2df7944a23c03a4bfe46e3062ee73c69c554654677c09f721e427961d70e6703&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z3RQJZV%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIG9CqCDI8JAqcX26m1srJf2lU122axld3pJ7WjMzqbnPAiEA%2BoFe%2BqkFoI5gGooZ4eShKfBA5pTE5TqB5%2BkjGQSB%2FP4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDNc5CFZwY5EErNvifSrcAxN6zFJxrFONA3ldS%2BVXougfb2m6iu4ESBNqWcPfoY9aMUfmNBQUNXGXeOpHwYVBXddXNehhblkdKpNquROSQ5LFdPv7Y1cTMI42gYOWnW5boG9jkOyJlcwvuYo6uVk7BXjdjd9zte8nghgPwn31ar4uYxKcMXksUHQ%2B%2FCwIL6oF5LLNq3JvKucfv6sGYHfL%2FnJC9RcTJYOU6eejCGDBHZUevmKFeTyplMdJWrZ3yauxmu5FpZTfJPvGheRaPARNxxhqNLKeKON4dKQGjGKeJcfayFhPHl3Tmn1bjIBtGUo56R2ISLSDO1DTsjrFGmp3HxYwpuNTQ5mb8O5%2FC4wUr2yC1H6omCZaiUwMJ7HVJHZtdZ4ZZuhjvs88fi6knDDs2euuq%2FrGZR9Cr7uJcSEFVo%2F9ZCjkBWXS5HVN6UXMAm%2Flmysw94HCE4cAkJg%2BxM8DRrEjdDkEkZTFlSpWTDDYBFZVjTbrUqgGLNm7i%2FbrgraOggCK94zQ6Ed0ubgZ00lT0xXdr2aSSt7TrMsVnrwyxt9aSzvlqXyq75IkiaKMDibE4X3HFkE8KESO7hJbkEjWz86kj6LMWzUlzmpp9JSxBPt%2FRtap3TDyCr%2BlPRK2pqxSoskiJbYjR2IXqegAMPmfqMAGOqUBiMshZBxKhU%2FhP%2B%2FMY1MrFuvTF09UmB9tfwmJE9%2BqXWuVxSrWKm2sUQuzjk0xs4gIDxFowi%2FcukvpoxyLXuG3i6NAdLpwSxKTrkIHvJPOJgo8sKZT8uE8mgZT71mOLixr3Iercmua4V%2BdBh0hHO6eHnXloOJTaKVykL%2FlGKoILPWf%2B4B%2B%2BUBWhTyB8x7Ky0Er3ssm1p7ORdIJaUJWA1CJuH%2BKXsLi&X-Amz-Signature=4354ebc1e05db847e486da122c165a0a7d97ea4bd212d4752cb4f0ef17581b59&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z3RQJZV%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIG9CqCDI8JAqcX26m1srJf2lU122axld3pJ7WjMzqbnPAiEA%2BoFe%2BqkFoI5gGooZ4eShKfBA5pTE5TqB5%2BkjGQSB%2FP4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDNc5CFZwY5EErNvifSrcAxN6zFJxrFONA3ldS%2BVXougfb2m6iu4ESBNqWcPfoY9aMUfmNBQUNXGXeOpHwYVBXddXNehhblkdKpNquROSQ5LFdPv7Y1cTMI42gYOWnW5boG9jkOyJlcwvuYo6uVk7BXjdjd9zte8nghgPwn31ar4uYxKcMXksUHQ%2B%2FCwIL6oF5LLNq3JvKucfv6sGYHfL%2FnJC9RcTJYOU6eejCGDBHZUevmKFeTyplMdJWrZ3yauxmu5FpZTfJPvGheRaPARNxxhqNLKeKON4dKQGjGKeJcfayFhPHl3Tmn1bjIBtGUo56R2ISLSDO1DTsjrFGmp3HxYwpuNTQ5mb8O5%2FC4wUr2yC1H6omCZaiUwMJ7HVJHZtdZ4ZZuhjvs88fi6knDDs2euuq%2FrGZR9Cr7uJcSEFVo%2F9ZCjkBWXS5HVN6UXMAm%2Flmysw94HCE4cAkJg%2BxM8DRrEjdDkEkZTFlSpWTDDYBFZVjTbrUqgGLNm7i%2FbrgraOggCK94zQ6Ed0ubgZ00lT0xXdr2aSSt7TrMsVnrwyxt9aSzvlqXyq75IkiaKMDibE4X3HFkE8KESO7hJbkEjWz86kj6LMWzUlzmpp9JSxBPt%2FRtap3TDyCr%2BlPRK2pqxSoskiJbYjR2IXqegAMPmfqMAGOqUBiMshZBxKhU%2FhP%2B%2FMY1MrFuvTF09UmB9tfwmJE9%2BqXWuVxSrWKm2sUQuzjk0xs4gIDxFowi%2FcukvpoxyLXuG3i6NAdLpwSxKTrkIHvJPOJgo8sKZT8uE8mgZT71mOLixr3Iercmua4V%2BdBh0hHO6eHnXloOJTaKVykL%2FlGKoILPWf%2B4B%2B%2BUBWhTyB8x7Ky0Er3ssm1p7ORdIJaUJWA1CJuH%2BKXsLi&X-Amz-Signature=18833a328e87d6266dd5b5ebae1b7dece0f789f93fe3bd22425108c34ba80ade&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z3RQJZV%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIG9CqCDI8JAqcX26m1srJf2lU122axld3pJ7WjMzqbnPAiEA%2BoFe%2BqkFoI5gGooZ4eShKfBA5pTE5TqB5%2BkjGQSB%2FP4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDNc5CFZwY5EErNvifSrcAxN6zFJxrFONA3ldS%2BVXougfb2m6iu4ESBNqWcPfoY9aMUfmNBQUNXGXeOpHwYVBXddXNehhblkdKpNquROSQ5LFdPv7Y1cTMI42gYOWnW5boG9jkOyJlcwvuYo6uVk7BXjdjd9zte8nghgPwn31ar4uYxKcMXksUHQ%2B%2FCwIL6oF5LLNq3JvKucfv6sGYHfL%2FnJC9RcTJYOU6eejCGDBHZUevmKFeTyplMdJWrZ3yauxmu5FpZTfJPvGheRaPARNxxhqNLKeKON4dKQGjGKeJcfayFhPHl3Tmn1bjIBtGUo56R2ISLSDO1DTsjrFGmp3HxYwpuNTQ5mb8O5%2FC4wUr2yC1H6omCZaiUwMJ7HVJHZtdZ4ZZuhjvs88fi6knDDs2euuq%2FrGZR9Cr7uJcSEFVo%2F9ZCjkBWXS5HVN6UXMAm%2Flmysw94HCE4cAkJg%2BxM8DRrEjdDkEkZTFlSpWTDDYBFZVjTbrUqgGLNm7i%2FbrgraOggCK94zQ6Ed0ubgZ00lT0xXdr2aSSt7TrMsVnrwyxt9aSzvlqXyq75IkiaKMDibE4X3HFkE8KESO7hJbkEjWz86kj6LMWzUlzmpp9JSxBPt%2FRtap3TDyCr%2BlPRK2pqxSoskiJbYjR2IXqegAMPmfqMAGOqUBiMshZBxKhU%2FhP%2B%2FMY1MrFuvTF09UmB9tfwmJE9%2BqXWuVxSrWKm2sUQuzjk0xs4gIDxFowi%2FcukvpoxyLXuG3i6NAdLpwSxKTrkIHvJPOJgo8sKZT8uE8mgZT71mOLixr3Iercmua4V%2BdBh0hHO6eHnXloOJTaKVykL%2FlGKoILPWf%2B4B%2B%2BUBWhTyB8x7Ky0Er3ssm1p7ORdIJaUJWA1CJuH%2BKXsLi&X-Amz-Signature=e2d071fd592ec6edc264bead8531118b1c16e11ad47a4d01a114231f91cbaca6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
