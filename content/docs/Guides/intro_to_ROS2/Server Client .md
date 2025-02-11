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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBXJ7GYS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw1O0ON6yzw%2FuzZt2wEu1LSNjsnycSh6y0SeCAISLnhAiEA0Lb8AqHjN65XSScbQwE%2BeJBb2jSCDGDm1%2FH4iNCYhq8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8JSW9y4qhE0uG4hircA2S2yWO6%2F1o%2BtPKgU5Q4t4TXlxklbHPhR1dYW20ONwZQKiLrRWne%2BSaYXO6JhXIRuCFR%2BhY9suBKSF8tbs5rH5r8a76yDT%2FYJRfvgniFREY1C5O2JFcLNoqWp5zSe5SnzzHImaUq1GTUGApm%2BKUxW2TBSIqDTfuiujk%2FELjkxTJ%2FdZ%2FcK%2F6bDX8JJikS74SgXHxXGTMChCtY3t3BanGch2NbIQtxP0HJxUpbWszLzZzu0ZVF6BcflUgtJ%2FAFr8aL4K2yLB%2FZN9Zsa3k%2FcE571wZuUyb85kE7JZDrhOtMYwzoehsvYVU6jMBVk5nDVTl00Fk%2BUd5BhBAeaprrbpVlncr7ynMKdNvuG8Q5M6UqJeLzpDAyHhmYMJJRqcJM3Rsqx%2FETF%2FYOCroI4UxIG1LJd4h1%2BK376ztIsA%2FCCP8kUuzkLqOhMODnfoQok7k0KF%2BQ3M2wQNE7advE3ozGPKJfS8iK82BLaBul7k0Cbes6aMQYfTXPxn5%2FnK4Ld9rHPdAVxrpsp3wFqmfYzj6UlceJCaglmeqit44qOMMUH4YBarenTAHF5G49COk36gEkMjeDq3RaNgTG3QOPCvC8nGmMQViizFbgnazDC%2FsclJ3uaGkdPuLClRTMaLLGXCxIMJizqr0GOqUBesSUn3rFHCA5K0F8hTVptwfVd6PKL9uYcZzPtowqyU21OaXxnG9Ct55NK9YhnVR8Tcg8S6806585dMEns6SvRiNTFVGjUS9aqRG7%2FMZ%2BGeuNYytNZG5DwTxzHFckP5FvSJwPM6wGRfS1c2okaVNxjjr1ZSbCRwZ2J%2FWpQmB6u9%2FD8SzS%2BeVPuVXE1yjK22yyDykL2usb5ZjoApHua%2BceOjxFS3Cj&X-Amz-Signature=bd9395c9d8ec6cf1e8f11fdc400647276dc138783dc38916c60598cec98a6002&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBXJ7GYS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw1O0ON6yzw%2FuzZt2wEu1LSNjsnycSh6y0SeCAISLnhAiEA0Lb8AqHjN65XSScbQwE%2BeJBb2jSCDGDm1%2FH4iNCYhq8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8JSW9y4qhE0uG4hircA2S2yWO6%2F1o%2BtPKgU5Q4t4TXlxklbHPhR1dYW20ONwZQKiLrRWne%2BSaYXO6JhXIRuCFR%2BhY9suBKSF8tbs5rH5r8a76yDT%2FYJRfvgniFREY1C5O2JFcLNoqWp5zSe5SnzzHImaUq1GTUGApm%2BKUxW2TBSIqDTfuiujk%2FELjkxTJ%2FdZ%2FcK%2F6bDX8JJikS74SgXHxXGTMChCtY3t3BanGch2NbIQtxP0HJxUpbWszLzZzu0ZVF6BcflUgtJ%2FAFr8aL4K2yLB%2FZN9Zsa3k%2FcE571wZuUyb85kE7JZDrhOtMYwzoehsvYVU6jMBVk5nDVTl00Fk%2BUd5BhBAeaprrbpVlncr7ynMKdNvuG8Q5M6UqJeLzpDAyHhmYMJJRqcJM3Rsqx%2FETF%2FYOCroI4UxIG1LJd4h1%2BK376ztIsA%2FCCP8kUuzkLqOhMODnfoQok7k0KF%2BQ3M2wQNE7advE3ozGPKJfS8iK82BLaBul7k0Cbes6aMQYfTXPxn5%2FnK4Ld9rHPdAVxrpsp3wFqmfYzj6UlceJCaglmeqit44qOMMUH4YBarenTAHF5G49COk36gEkMjeDq3RaNgTG3QOPCvC8nGmMQViizFbgnazDC%2FsclJ3uaGkdPuLClRTMaLLGXCxIMJizqr0GOqUBesSUn3rFHCA5K0F8hTVptwfVd6PKL9uYcZzPtowqyU21OaXxnG9Ct55NK9YhnVR8Tcg8S6806585dMEns6SvRiNTFVGjUS9aqRG7%2FMZ%2BGeuNYytNZG5DwTxzHFckP5FvSJwPM6wGRfS1c2okaVNxjjr1ZSbCRwZ2J%2FWpQmB6u9%2FD8SzS%2BeVPuVXE1yjK22yyDykL2usb5ZjoApHua%2BceOjxFS3Cj&X-Amz-Signature=54e6a84a17432540fce20a36bcda040b598991d8843d4ddc46b241670e933dc8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBXJ7GYS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw1O0ON6yzw%2FuzZt2wEu1LSNjsnycSh6y0SeCAISLnhAiEA0Lb8AqHjN65XSScbQwE%2BeJBb2jSCDGDm1%2FH4iNCYhq8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8JSW9y4qhE0uG4hircA2S2yWO6%2F1o%2BtPKgU5Q4t4TXlxklbHPhR1dYW20ONwZQKiLrRWne%2BSaYXO6JhXIRuCFR%2BhY9suBKSF8tbs5rH5r8a76yDT%2FYJRfvgniFREY1C5O2JFcLNoqWp5zSe5SnzzHImaUq1GTUGApm%2BKUxW2TBSIqDTfuiujk%2FELjkxTJ%2FdZ%2FcK%2F6bDX8JJikS74SgXHxXGTMChCtY3t3BanGch2NbIQtxP0HJxUpbWszLzZzu0ZVF6BcflUgtJ%2FAFr8aL4K2yLB%2FZN9Zsa3k%2FcE571wZuUyb85kE7JZDrhOtMYwzoehsvYVU6jMBVk5nDVTl00Fk%2BUd5BhBAeaprrbpVlncr7ynMKdNvuG8Q5M6UqJeLzpDAyHhmYMJJRqcJM3Rsqx%2FETF%2FYOCroI4UxIG1LJd4h1%2BK376ztIsA%2FCCP8kUuzkLqOhMODnfoQok7k0KF%2BQ3M2wQNE7advE3ozGPKJfS8iK82BLaBul7k0Cbes6aMQYfTXPxn5%2FnK4Ld9rHPdAVxrpsp3wFqmfYzj6UlceJCaglmeqit44qOMMUH4YBarenTAHF5G49COk36gEkMjeDq3RaNgTG3QOPCvC8nGmMQViizFbgnazDC%2FsclJ3uaGkdPuLClRTMaLLGXCxIMJizqr0GOqUBesSUn3rFHCA5K0F8hTVptwfVd6PKL9uYcZzPtowqyU21OaXxnG9Ct55NK9YhnVR8Tcg8S6806585dMEns6SvRiNTFVGjUS9aqRG7%2FMZ%2BGeuNYytNZG5DwTxzHFckP5FvSJwPM6wGRfS1c2okaVNxjjr1ZSbCRwZ2J%2FWpQmB6u9%2FD8SzS%2BeVPuVXE1yjK22yyDykL2usb5ZjoApHua%2BceOjxFS3Cj&X-Amz-Signature=2470ac03f991eaa0ea7f4cb582a8d535a2b49086fb9eba6fdd4b8380a492e75c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBXJ7GYS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw1O0ON6yzw%2FuzZt2wEu1LSNjsnycSh6y0SeCAISLnhAiEA0Lb8AqHjN65XSScbQwE%2BeJBb2jSCDGDm1%2FH4iNCYhq8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8JSW9y4qhE0uG4hircA2S2yWO6%2F1o%2BtPKgU5Q4t4TXlxklbHPhR1dYW20ONwZQKiLrRWne%2BSaYXO6JhXIRuCFR%2BhY9suBKSF8tbs5rH5r8a76yDT%2FYJRfvgniFREY1C5O2JFcLNoqWp5zSe5SnzzHImaUq1GTUGApm%2BKUxW2TBSIqDTfuiujk%2FELjkxTJ%2FdZ%2FcK%2F6bDX8JJikS74SgXHxXGTMChCtY3t3BanGch2NbIQtxP0HJxUpbWszLzZzu0ZVF6BcflUgtJ%2FAFr8aL4K2yLB%2FZN9Zsa3k%2FcE571wZuUyb85kE7JZDrhOtMYwzoehsvYVU6jMBVk5nDVTl00Fk%2BUd5BhBAeaprrbpVlncr7ynMKdNvuG8Q5M6UqJeLzpDAyHhmYMJJRqcJM3Rsqx%2FETF%2FYOCroI4UxIG1LJd4h1%2BK376ztIsA%2FCCP8kUuzkLqOhMODnfoQok7k0KF%2BQ3M2wQNE7advE3ozGPKJfS8iK82BLaBul7k0Cbes6aMQYfTXPxn5%2FnK4Ld9rHPdAVxrpsp3wFqmfYzj6UlceJCaglmeqit44qOMMUH4YBarenTAHF5G49COk36gEkMjeDq3RaNgTG3QOPCvC8nGmMQViizFbgnazDC%2FsclJ3uaGkdPuLClRTMaLLGXCxIMJizqr0GOqUBesSUn3rFHCA5K0F8hTVptwfVd6PKL9uYcZzPtowqyU21OaXxnG9Ct55NK9YhnVR8Tcg8S6806585dMEns6SvRiNTFVGjUS9aqRG7%2FMZ%2BGeuNYytNZG5DwTxzHFckP5FvSJwPM6wGRfS1c2okaVNxjjr1ZSbCRwZ2J%2FWpQmB6u9%2FD8SzS%2BeVPuVXE1yjK22yyDykL2usb5ZjoApHua%2BceOjxFS3Cj&X-Amz-Signature=03fdfdb04b78ed70cba740feb655486083b62c0064ccf199d0af3dacf21ccf32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBXJ7GYS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw1O0ON6yzw%2FuzZt2wEu1LSNjsnycSh6y0SeCAISLnhAiEA0Lb8AqHjN65XSScbQwE%2BeJBb2jSCDGDm1%2FH4iNCYhq8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8JSW9y4qhE0uG4hircA2S2yWO6%2F1o%2BtPKgU5Q4t4TXlxklbHPhR1dYW20ONwZQKiLrRWne%2BSaYXO6JhXIRuCFR%2BhY9suBKSF8tbs5rH5r8a76yDT%2FYJRfvgniFREY1C5O2JFcLNoqWp5zSe5SnzzHImaUq1GTUGApm%2BKUxW2TBSIqDTfuiujk%2FELjkxTJ%2FdZ%2FcK%2F6bDX8JJikS74SgXHxXGTMChCtY3t3BanGch2NbIQtxP0HJxUpbWszLzZzu0ZVF6BcflUgtJ%2FAFr8aL4K2yLB%2FZN9Zsa3k%2FcE571wZuUyb85kE7JZDrhOtMYwzoehsvYVU6jMBVk5nDVTl00Fk%2BUd5BhBAeaprrbpVlncr7ynMKdNvuG8Q5M6UqJeLzpDAyHhmYMJJRqcJM3Rsqx%2FETF%2FYOCroI4UxIG1LJd4h1%2BK376ztIsA%2FCCP8kUuzkLqOhMODnfoQok7k0KF%2BQ3M2wQNE7advE3ozGPKJfS8iK82BLaBul7k0Cbes6aMQYfTXPxn5%2FnK4Ld9rHPdAVxrpsp3wFqmfYzj6UlceJCaglmeqit44qOMMUH4YBarenTAHF5G49COk36gEkMjeDq3RaNgTG3QOPCvC8nGmMQViizFbgnazDC%2FsclJ3uaGkdPuLClRTMaLLGXCxIMJizqr0GOqUBesSUn3rFHCA5K0F8hTVptwfVd6PKL9uYcZzPtowqyU21OaXxnG9Ct55NK9YhnVR8Tcg8S6806585dMEns6SvRiNTFVGjUS9aqRG7%2FMZ%2BGeuNYytNZG5DwTxzHFckP5FvSJwPM6wGRfS1c2okaVNxjjr1ZSbCRwZ2J%2FWpQmB6u9%2FD8SzS%2BeVPuVXE1yjK22yyDykL2usb5ZjoApHua%2BceOjxFS3Cj&X-Amz-Signature=7ba78d0ab2e456fb9a655e86f26c7d1d3df5dfb3c68cc577299e76a55acd9918&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
