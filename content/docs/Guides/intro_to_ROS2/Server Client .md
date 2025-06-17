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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRRA2XE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC79qtQc3ahuuAeV2WYggdA%2FajxexyJYxENQacu35V3hAiEA0yU8geX6yo9%2FPixbkuyMcTav0X2Qso0EYruwa%2FD8I%2BQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIZszqqNYonMzWLwtircA1lUM%2FVDbLsu0patDVvhHZ6hKwid9sVi1xli6ylKjufUq8aBPmJfHBeO5NogDsrOXCFi0Z5PiQcXKDAfIs%2BG17GbG8h9bwuCQEr902l1nVPaIu4Uuu6CPVcB3e6m%2BOoYliGkenTGTkhgC6vhzaZquiQtmm9dBmSQx735zD6E5uQhwAfgUHqqMhq%2BLjZuxr2Lnc2xmFaNgAfKx33yzN%2BXku%2B%2FzShyTLnxKCKVfl2ODnhv5LW2Pau21X2tufXGVfwWKQ2h60O4wL4dcxwPoWNqNrwyCBqjikw%2BcT1rXhu5RubpECo29SpMlIPx8ad6xoRmkXqF4%2BpN1j8RBpfi%2F7ylv9NNryKo7zNkFdwsFJ51wuCJvZEVaTvfFJS3ve%2BfZZp7zjLtjVKbbKACjY6cj1u3hFx2XKqSHm7R8dEGlBWeP0vehF3SsCaM0ITkhFekwB406yvInAG6aS5ttgp0jhfsMYOiJY3gkvudESjAWQTwLvLc9xyIEAfz04XSPR0CH%2BNL0NMKvqNcTgPcnxcutL3ZP3aBQbrfArt%2B7Cn9118rGaSDpZLp1dOdNK8o44MResHV7axiDfEWdKcvJ%2FZ97gWsVX6pGWUCsx6OLPLuhNZhub9ZMQaGT9CGRN86YjaAMLnuxMIGOqUBIp4xgpliZND%2BDCGhlMJ3cBOb0JBHJWrxej5y2BOJvBr5H%2BUndgD0cO3CppBG0gYop%2FjYVkcPEsNWtB6RkrrkGKC61M866nTDljKLFdZR4Ge0jroDBpU6vCvr33ddW%2Bs3RkK8mms9CXpaqhLhmK%2BiDWpvvcR6YGn7PZJzlIjq1wOM9CMz8Jiz6H2j2NwNrxSBfgurO09U%2BeVnO205Z47%2FIGJuD0yz&X-Amz-Signature=759b2250d87e3d15cde915d49e5934e2cb3a73ba3df082c2cb2fbc77e22f4423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRRA2XE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC79qtQc3ahuuAeV2WYggdA%2FajxexyJYxENQacu35V3hAiEA0yU8geX6yo9%2FPixbkuyMcTav0X2Qso0EYruwa%2FD8I%2BQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIZszqqNYonMzWLwtircA1lUM%2FVDbLsu0patDVvhHZ6hKwid9sVi1xli6ylKjufUq8aBPmJfHBeO5NogDsrOXCFi0Z5PiQcXKDAfIs%2BG17GbG8h9bwuCQEr902l1nVPaIu4Uuu6CPVcB3e6m%2BOoYliGkenTGTkhgC6vhzaZquiQtmm9dBmSQx735zD6E5uQhwAfgUHqqMhq%2BLjZuxr2Lnc2xmFaNgAfKx33yzN%2BXku%2B%2FzShyTLnxKCKVfl2ODnhv5LW2Pau21X2tufXGVfwWKQ2h60O4wL4dcxwPoWNqNrwyCBqjikw%2BcT1rXhu5RubpECo29SpMlIPx8ad6xoRmkXqF4%2BpN1j8RBpfi%2F7ylv9NNryKo7zNkFdwsFJ51wuCJvZEVaTvfFJS3ve%2BfZZp7zjLtjVKbbKACjY6cj1u3hFx2XKqSHm7R8dEGlBWeP0vehF3SsCaM0ITkhFekwB406yvInAG6aS5ttgp0jhfsMYOiJY3gkvudESjAWQTwLvLc9xyIEAfz04XSPR0CH%2BNL0NMKvqNcTgPcnxcutL3ZP3aBQbrfArt%2B7Cn9118rGaSDpZLp1dOdNK8o44MResHV7axiDfEWdKcvJ%2FZ97gWsVX6pGWUCsx6OLPLuhNZhub9ZMQaGT9CGRN86YjaAMLnuxMIGOqUBIp4xgpliZND%2BDCGhlMJ3cBOb0JBHJWrxej5y2BOJvBr5H%2BUndgD0cO3CppBG0gYop%2FjYVkcPEsNWtB6RkrrkGKC61M866nTDljKLFdZR4Ge0jroDBpU6vCvr33ddW%2Bs3RkK8mms9CXpaqhLhmK%2BiDWpvvcR6YGn7PZJzlIjq1wOM9CMz8Jiz6H2j2NwNrxSBfgurO09U%2BeVnO205Z47%2FIGJuD0yz&X-Amz-Signature=99c37d86b7acd05e5c5c1ce2a8aeae252f0ff73a589423b7b76242a14bf98c05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRRA2XE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC79qtQc3ahuuAeV2WYggdA%2FajxexyJYxENQacu35V3hAiEA0yU8geX6yo9%2FPixbkuyMcTav0X2Qso0EYruwa%2FD8I%2BQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIZszqqNYonMzWLwtircA1lUM%2FVDbLsu0patDVvhHZ6hKwid9sVi1xli6ylKjufUq8aBPmJfHBeO5NogDsrOXCFi0Z5PiQcXKDAfIs%2BG17GbG8h9bwuCQEr902l1nVPaIu4Uuu6CPVcB3e6m%2BOoYliGkenTGTkhgC6vhzaZquiQtmm9dBmSQx735zD6E5uQhwAfgUHqqMhq%2BLjZuxr2Lnc2xmFaNgAfKx33yzN%2BXku%2B%2FzShyTLnxKCKVfl2ODnhv5LW2Pau21X2tufXGVfwWKQ2h60O4wL4dcxwPoWNqNrwyCBqjikw%2BcT1rXhu5RubpECo29SpMlIPx8ad6xoRmkXqF4%2BpN1j8RBpfi%2F7ylv9NNryKo7zNkFdwsFJ51wuCJvZEVaTvfFJS3ve%2BfZZp7zjLtjVKbbKACjY6cj1u3hFx2XKqSHm7R8dEGlBWeP0vehF3SsCaM0ITkhFekwB406yvInAG6aS5ttgp0jhfsMYOiJY3gkvudESjAWQTwLvLc9xyIEAfz04XSPR0CH%2BNL0NMKvqNcTgPcnxcutL3ZP3aBQbrfArt%2B7Cn9118rGaSDpZLp1dOdNK8o44MResHV7axiDfEWdKcvJ%2FZ97gWsVX6pGWUCsx6OLPLuhNZhub9ZMQaGT9CGRN86YjaAMLnuxMIGOqUBIp4xgpliZND%2BDCGhlMJ3cBOb0JBHJWrxej5y2BOJvBr5H%2BUndgD0cO3CppBG0gYop%2FjYVkcPEsNWtB6RkrrkGKC61M866nTDljKLFdZR4Ge0jroDBpU6vCvr33ddW%2Bs3RkK8mms9CXpaqhLhmK%2BiDWpvvcR6YGn7PZJzlIjq1wOM9CMz8Jiz6H2j2NwNrxSBfgurO09U%2BeVnO205Z47%2FIGJuD0yz&X-Amz-Signature=ec9ab1acb75a886794d365981aa7b41cc0c0e82f70cee80eb1f963911aab0e21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRRA2XE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC79qtQc3ahuuAeV2WYggdA%2FajxexyJYxENQacu35V3hAiEA0yU8geX6yo9%2FPixbkuyMcTav0X2Qso0EYruwa%2FD8I%2BQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIZszqqNYonMzWLwtircA1lUM%2FVDbLsu0patDVvhHZ6hKwid9sVi1xli6ylKjufUq8aBPmJfHBeO5NogDsrOXCFi0Z5PiQcXKDAfIs%2BG17GbG8h9bwuCQEr902l1nVPaIu4Uuu6CPVcB3e6m%2BOoYliGkenTGTkhgC6vhzaZquiQtmm9dBmSQx735zD6E5uQhwAfgUHqqMhq%2BLjZuxr2Lnc2xmFaNgAfKx33yzN%2BXku%2B%2FzShyTLnxKCKVfl2ODnhv5LW2Pau21X2tufXGVfwWKQ2h60O4wL4dcxwPoWNqNrwyCBqjikw%2BcT1rXhu5RubpECo29SpMlIPx8ad6xoRmkXqF4%2BpN1j8RBpfi%2F7ylv9NNryKo7zNkFdwsFJ51wuCJvZEVaTvfFJS3ve%2BfZZp7zjLtjVKbbKACjY6cj1u3hFx2XKqSHm7R8dEGlBWeP0vehF3SsCaM0ITkhFekwB406yvInAG6aS5ttgp0jhfsMYOiJY3gkvudESjAWQTwLvLc9xyIEAfz04XSPR0CH%2BNL0NMKvqNcTgPcnxcutL3ZP3aBQbrfArt%2B7Cn9118rGaSDpZLp1dOdNK8o44MResHV7axiDfEWdKcvJ%2FZ97gWsVX6pGWUCsx6OLPLuhNZhub9ZMQaGT9CGRN86YjaAMLnuxMIGOqUBIp4xgpliZND%2BDCGhlMJ3cBOb0JBHJWrxej5y2BOJvBr5H%2BUndgD0cO3CppBG0gYop%2FjYVkcPEsNWtB6RkrrkGKC61M866nTDljKLFdZR4Ge0jroDBpU6vCvr33ddW%2Bs3RkK8mms9CXpaqhLhmK%2BiDWpvvcR6YGn7PZJzlIjq1wOM9CMz8Jiz6H2j2NwNrxSBfgurO09U%2BeVnO205Z47%2FIGJuD0yz&X-Amz-Signature=ff22f3e747adcb8da09a307012f1a8a2994773a3f2dc5c7c0fabbcd63c3edb20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRRA2XE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC79qtQc3ahuuAeV2WYggdA%2FajxexyJYxENQacu35V3hAiEA0yU8geX6yo9%2FPixbkuyMcTav0X2Qso0EYruwa%2FD8I%2BQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIZszqqNYonMzWLwtircA1lUM%2FVDbLsu0patDVvhHZ6hKwid9sVi1xli6ylKjufUq8aBPmJfHBeO5NogDsrOXCFi0Z5PiQcXKDAfIs%2BG17GbG8h9bwuCQEr902l1nVPaIu4Uuu6CPVcB3e6m%2BOoYliGkenTGTkhgC6vhzaZquiQtmm9dBmSQx735zD6E5uQhwAfgUHqqMhq%2BLjZuxr2Lnc2xmFaNgAfKx33yzN%2BXku%2B%2FzShyTLnxKCKVfl2ODnhv5LW2Pau21X2tufXGVfwWKQ2h60O4wL4dcxwPoWNqNrwyCBqjikw%2BcT1rXhu5RubpECo29SpMlIPx8ad6xoRmkXqF4%2BpN1j8RBpfi%2F7ylv9NNryKo7zNkFdwsFJ51wuCJvZEVaTvfFJS3ve%2BfZZp7zjLtjVKbbKACjY6cj1u3hFx2XKqSHm7R8dEGlBWeP0vehF3SsCaM0ITkhFekwB406yvInAG6aS5ttgp0jhfsMYOiJY3gkvudESjAWQTwLvLc9xyIEAfz04XSPR0CH%2BNL0NMKvqNcTgPcnxcutL3ZP3aBQbrfArt%2B7Cn9118rGaSDpZLp1dOdNK8o44MResHV7axiDfEWdKcvJ%2FZ97gWsVX6pGWUCsx6OLPLuhNZhub9ZMQaGT9CGRN86YjaAMLnuxMIGOqUBIp4xgpliZND%2BDCGhlMJ3cBOb0JBHJWrxej5y2BOJvBr5H%2BUndgD0cO3CppBG0gYop%2FjYVkcPEsNWtB6RkrrkGKC61M866nTDljKLFdZR4Ge0jroDBpU6vCvr33ddW%2Bs3RkK8mms9CXpaqhLhmK%2BiDWpvvcR6YGn7PZJzlIjq1wOM9CMz8Jiz6H2j2NwNrxSBfgurO09U%2BeVnO205Z47%2FIGJuD0yz&X-Amz-Signature=d6c11b00fac8f43ee5f9fff83de7e4f5bc79786cf9bb75fcb20a34ba21564dc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
