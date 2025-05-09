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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCGXY3S%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGdu7ApYPvr%2FKVpo1%2BaW7Pv1n9TAV5VOwAwzVtWy4XnAiEA9%2F8v%2F4%2FQRos9bMgKCpsg4A7zmSw33508jINotsfn4DoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSu%2FzEsmfBROl%2FE1CrcA1SKZR7VSesEEh5RgespOgXGyvO0HD2XHKIMcbqglnL%2BfnP9dqyw3Honf3UwVG71liOuFGYJy%2BfmwMYztSZTzOp%2BKgHKw3YY8T0vESBtiI4jyvau%2BcBnSJ0FtZD485Bg1CwY2jIRoDCNpuYSKYbWaLMnIV8oDbX1YUdxh156LsVdAAkjHNz%2B4DcosEwj8ejUw0l5QoMcPF%2BDh6JPJkXd3Y5xMuqzZ%2F3O%2BIxyiJqo%2F87BGjuEqEkns6sT8QAG0zhLFzq2FBKalZlBZAhLTQMSeCyovdTp8CrjgPGWhSwGMrEookCN4EDNQmkT4zNa%2FZx4ewu%2FL8L8GpKWDqBl%2FYpErbZCZMoR8Ksy9DKNOv7pdwc%2F%2FLoPPORpYQ5vT3vx6BAcIs6hQQEMookpfuFHyHawrK07%2Baz2XPwD7ZeMdZY%2BRUrcMWl4eQOXiQHRGGOjtgiwqQxHXs4KhmQthqfI6myIkHtXHgt6R1Wa%2FImI0ZHUVELcJkGrpW66IqKvStEkQDzp5IEeV%2BGS2xjFp43oJDuXCOVI%2BmzCglqge9QIUxIKPQT3GauCWKzscp6ty0LmW5Zb1TYg25aj0GGzbsmbrXmMeIV4h%2BmkFHVLhoS4BtFt4%2FTuXaztVXLe5OBnH63%2BMPuj%2BMAGOqUBE7fCun6Z%2FOb7iZ0BHSJYrkcCLdqHNtvP9uoiIj85VzJT66YJzw1F1muVHkhzeUm4n05j1DFqZmOUrpEVQxtybKeETquP1LCpwR4WVbpmRYWeCE89AUhf4gsbGnhrvJsrBM7PAYjH5KOa%2B86UNg34ayfZkzSprDJFoad2biwih1j92dGeeGdjPU0ezBt6%2BtAGB1gMDysyc1pSvRJpM1lRhmBQV9gD&X-Amz-Signature=55f0cf231d2055d5a5e730965614a4d746b67f5bab14af3ac91647464b5b6422&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCGXY3S%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGdu7ApYPvr%2FKVpo1%2BaW7Pv1n9TAV5VOwAwzVtWy4XnAiEA9%2F8v%2F4%2FQRos9bMgKCpsg4A7zmSw33508jINotsfn4DoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSu%2FzEsmfBROl%2FE1CrcA1SKZR7VSesEEh5RgespOgXGyvO0HD2XHKIMcbqglnL%2BfnP9dqyw3Honf3UwVG71liOuFGYJy%2BfmwMYztSZTzOp%2BKgHKw3YY8T0vESBtiI4jyvau%2BcBnSJ0FtZD485Bg1CwY2jIRoDCNpuYSKYbWaLMnIV8oDbX1YUdxh156LsVdAAkjHNz%2B4DcosEwj8ejUw0l5QoMcPF%2BDh6JPJkXd3Y5xMuqzZ%2F3O%2BIxyiJqo%2F87BGjuEqEkns6sT8QAG0zhLFzq2FBKalZlBZAhLTQMSeCyovdTp8CrjgPGWhSwGMrEookCN4EDNQmkT4zNa%2FZx4ewu%2FL8L8GpKWDqBl%2FYpErbZCZMoR8Ksy9DKNOv7pdwc%2F%2FLoPPORpYQ5vT3vx6BAcIs6hQQEMookpfuFHyHawrK07%2Baz2XPwD7ZeMdZY%2BRUrcMWl4eQOXiQHRGGOjtgiwqQxHXs4KhmQthqfI6myIkHtXHgt6R1Wa%2FImI0ZHUVELcJkGrpW66IqKvStEkQDzp5IEeV%2BGS2xjFp43oJDuXCOVI%2BmzCglqge9QIUxIKPQT3GauCWKzscp6ty0LmW5Zb1TYg25aj0GGzbsmbrXmMeIV4h%2BmkFHVLhoS4BtFt4%2FTuXaztVXLe5OBnH63%2BMPuj%2BMAGOqUBE7fCun6Z%2FOb7iZ0BHSJYrkcCLdqHNtvP9uoiIj85VzJT66YJzw1F1muVHkhzeUm4n05j1DFqZmOUrpEVQxtybKeETquP1LCpwR4WVbpmRYWeCE89AUhf4gsbGnhrvJsrBM7PAYjH5KOa%2B86UNg34ayfZkzSprDJFoad2biwih1j92dGeeGdjPU0ezBt6%2BtAGB1gMDysyc1pSvRJpM1lRhmBQV9gD&X-Amz-Signature=a01179e6cd0d84d4ef9bc6353d5d6ab4e1e4a82f87fd341aeb5c6baa5d9e19bf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCGXY3S%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGdu7ApYPvr%2FKVpo1%2BaW7Pv1n9TAV5VOwAwzVtWy4XnAiEA9%2F8v%2F4%2FQRos9bMgKCpsg4A7zmSw33508jINotsfn4DoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSu%2FzEsmfBROl%2FE1CrcA1SKZR7VSesEEh5RgespOgXGyvO0HD2XHKIMcbqglnL%2BfnP9dqyw3Honf3UwVG71liOuFGYJy%2BfmwMYztSZTzOp%2BKgHKw3YY8T0vESBtiI4jyvau%2BcBnSJ0FtZD485Bg1CwY2jIRoDCNpuYSKYbWaLMnIV8oDbX1YUdxh156LsVdAAkjHNz%2B4DcosEwj8ejUw0l5QoMcPF%2BDh6JPJkXd3Y5xMuqzZ%2F3O%2BIxyiJqo%2F87BGjuEqEkns6sT8QAG0zhLFzq2FBKalZlBZAhLTQMSeCyovdTp8CrjgPGWhSwGMrEookCN4EDNQmkT4zNa%2FZx4ewu%2FL8L8GpKWDqBl%2FYpErbZCZMoR8Ksy9DKNOv7pdwc%2F%2FLoPPORpYQ5vT3vx6BAcIs6hQQEMookpfuFHyHawrK07%2Baz2XPwD7ZeMdZY%2BRUrcMWl4eQOXiQHRGGOjtgiwqQxHXs4KhmQthqfI6myIkHtXHgt6R1Wa%2FImI0ZHUVELcJkGrpW66IqKvStEkQDzp5IEeV%2BGS2xjFp43oJDuXCOVI%2BmzCglqge9QIUxIKPQT3GauCWKzscp6ty0LmW5Zb1TYg25aj0GGzbsmbrXmMeIV4h%2BmkFHVLhoS4BtFt4%2FTuXaztVXLe5OBnH63%2BMPuj%2BMAGOqUBE7fCun6Z%2FOb7iZ0BHSJYrkcCLdqHNtvP9uoiIj85VzJT66YJzw1F1muVHkhzeUm4n05j1DFqZmOUrpEVQxtybKeETquP1LCpwR4WVbpmRYWeCE89AUhf4gsbGnhrvJsrBM7PAYjH5KOa%2B86UNg34ayfZkzSprDJFoad2biwih1j92dGeeGdjPU0ezBt6%2BtAGB1gMDysyc1pSvRJpM1lRhmBQV9gD&X-Amz-Signature=1dfb38bf58ea1ed29c40add194cd9dcb3c4020227955d8d204dd736bb5c438b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCGXY3S%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGdu7ApYPvr%2FKVpo1%2BaW7Pv1n9TAV5VOwAwzVtWy4XnAiEA9%2F8v%2F4%2FQRos9bMgKCpsg4A7zmSw33508jINotsfn4DoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSu%2FzEsmfBROl%2FE1CrcA1SKZR7VSesEEh5RgespOgXGyvO0HD2XHKIMcbqglnL%2BfnP9dqyw3Honf3UwVG71liOuFGYJy%2BfmwMYztSZTzOp%2BKgHKw3YY8T0vESBtiI4jyvau%2BcBnSJ0FtZD485Bg1CwY2jIRoDCNpuYSKYbWaLMnIV8oDbX1YUdxh156LsVdAAkjHNz%2B4DcosEwj8ejUw0l5QoMcPF%2BDh6JPJkXd3Y5xMuqzZ%2F3O%2BIxyiJqo%2F87BGjuEqEkns6sT8QAG0zhLFzq2FBKalZlBZAhLTQMSeCyovdTp8CrjgPGWhSwGMrEookCN4EDNQmkT4zNa%2FZx4ewu%2FL8L8GpKWDqBl%2FYpErbZCZMoR8Ksy9DKNOv7pdwc%2F%2FLoPPORpYQ5vT3vx6BAcIs6hQQEMookpfuFHyHawrK07%2Baz2XPwD7ZeMdZY%2BRUrcMWl4eQOXiQHRGGOjtgiwqQxHXs4KhmQthqfI6myIkHtXHgt6R1Wa%2FImI0ZHUVELcJkGrpW66IqKvStEkQDzp5IEeV%2BGS2xjFp43oJDuXCOVI%2BmzCglqge9QIUxIKPQT3GauCWKzscp6ty0LmW5Zb1TYg25aj0GGzbsmbrXmMeIV4h%2BmkFHVLhoS4BtFt4%2FTuXaztVXLe5OBnH63%2BMPuj%2BMAGOqUBE7fCun6Z%2FOb7iZ0BHSJYrkcCLdqHNtvP9uoiIj85VzJT66YJzw1F1muVHkhzeUm4n05j1DFqZmOUrpEVQxtybKeETquP1LCpwR4WVbpmRYWeCE89AUhf4gsbGnhrvJsrBM7PAYjH5KOa%2B86UNg34ayfZkzSprDJFoad2biwih1j92dGeeGdjPU0ezBt6%2BtAGB1gMDysyc1pSvRJpM1lRhmBQV9gD&X-Amz-Signature=b531c7ba42227e3d5bcae53353ff583909d1363e27cbacd3466ca5768f4e10d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCGXY3S%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGdu7ApYPvr%2FKVpo1%2BaW7Pv1n9TAV5VOwAwzVtWy4XnAiEA9%2F8v%2F4%2FQRos9bMgKCpsg4A7zmSw33508jINotsfn4DoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSu%2FzEsmfBROl%2FE1CrcA1SKZR7VSesEEh5RgespOgXGyvO0HD2XHKIMcbqglnL%2BfnP9dqyw3Honf3UwVG71liOuFGYJy%2BfmwMYztSZTzOp%2BKgHKw3YY8T0vESBtiI4jyvau%2BcBnSJ0FtZD485Bg1CwY2jIRoDCNpuYSKYbWaLMnIV8oDbX1YUdxh156LsVdAAkjHNz%2B4DcosEwj8ejUw0l5QoMcPF%2BDh6JPJkXd3Y5xMuqzZ%2F3O%2BIxyiJqo%2F87BGjuEqEkns6sT8QAG0zhLFzq2FBKalZlBZAhLTQMSeCyovdTp8CrjgPGWhSwGMrEookCN4EDNQmkT4zNa%2FZx4ewu%2FL8L8GpKWDqBl%2FYpErbZCZMoR8Ksy9DKNOv7pdwc%2F%2FLoPPORpYQ5vT3vx6BAcIs6hQQEMookpfuFHyHawrK07%2Baz2XPwD7ZeMdZY%2BRUrcMWl4eQOXiQHRGGOjtgiwqQxHXs4KhmQthqfI6myIkHtXHgt6R1Wa%2FImI0ZHUVELcJkGrpW66IqKvStEkQDzp5IEeV%2BGS2xjFp43oJDuXCOVI%2BmzCglqge9QIUxIKPQT3GauCWKzscp6ty0LmW5Zb1TYg25aj0GGzbsmbrXmMeIV4h%2BmkFHVLhoS4BtFt4%2FTuXaztVXLe5OBnH63%2BMPuj%2BMAGOqUBE7fCun6Z%2FOb7iZ0BHSJYrkcCLdqHNtvP9uoiIj85VzJT66YJzw1F1muVHkhzeUm4n05j1DFqZmOUrpEVQxtybKeETquP1LCpwR4WVbpmRYWeCE89AUhf4gsbGnhrvJsrBM7PAYjH5KOa%2B86UNg34ayfZkzSprDJFoad2biwih1j92dGeeGdjPU0ezBt6%2BtAGB1gMDysyc1pSvRJpM1lRhmBQV9gD&X-Amz-Signature=265c9dca3f7df3ef2cd182dec6576b9ac376bbd8059c37c085f594970bd1afde&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
