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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HFMMNES%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCMwt%2F397ejv8HHyb%2Fq%2BTjPkwCaGv5J8HMnhiQ2oog%2FhQIhAOYEPboaC1gBU%2F8f%2F9tlwVSRRPyq7hUrpubuI6j68m7pKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHTZpDy%2FNaSRKCmdAq3AP32fAqAFcVwjarpLvHsCkhR%2FpV85FoRQyFegScib8vva0iR6l49OTrLW3m2ZeNuU933W8zzWUil5CdcYu0b0XwRm6hhI5u65kY7%2BkUoAScxEHPB1uDURW4sGygbzLlowQcTyxUgqJ0t3prUZaw4%2FeIUz%2FZ5pkBjhGVWLHj0RMr4WCOCYVEXnuiXomM9ILpyZVzzJr5nKazAqgCqqD3vW1CgRCBVB%2FBbt3%2Fpo%2FTRHXq%2BRTVjgKQTd29KqBZ7RmAKgvBTJvrdlHoCQAaxjqvYEUgcAL0QFXI88rjFRx7YGZIHxWGsWI5fZap2Xq9imApx1toJQ9HgCbFURZ27vXZbye3u4YGJ9wsTAzETubnRVyK48QQSy6bZkqPRDMfoJw%2F0MLPMl2bQj4Wyh05X8oOiLLvRf4zS2PgFzEdWgmJXn8BMv17EpxoObjPq6uLrDKSyHZQTeT8U3Py4FYJRWGOvZ%2B0rOUGKPpss50vN%2FqcOP%2F%2FY1E5GsSwqXqaHWo0haHjm1rrF4Zlbai7wbn5NZO6w6%2BkXIdJAlbRkgCnyPWO7PauNEiDMA8i7d1v340wpTj%2FEDJS0ws2%2FD77fTs%2B%2BYzFXxCy2Y6hHNh1aROx0FxLJEICQqHdmDpzAmZToN0tBjCJ%2FufDBjqkAR%2Bn2xs2G0hsoejDljJZDUZgftOi4eHPpyOMpgOGHR%2BxPkaz8FKzNYaXsEw%2Bz59dLtcc0gqxrTWIbqxrxrTw4ye9xTnMxb8aX5jyPYlvQTGaJk%2BNM%2Bd5VB4aflR0lG%2Bl0fI7eZEoLxn8zu07rBdnmUTZ4MNnNYD%2FcFOU3XoD7bxaUYZwjxso%2BDmQiteXL4I9Gpu8cGO2t0x4D7HlHMfDQ%2Fl78ko1&X-Amz-Signature=f13199afcd911dbe063c38fcc033b0e8a21c46d08e5175a5572139bdd496e314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HFMMNES%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCMwt%2F397ejv8HHyb%2Fq%2BTjPkwCaGv5J8HMnhiQ2oog%2FhQIhAOYEPboaC1gBU%2F8f%2F9tlwVSRRPyq7hUrpubuI6j68m7pKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHTZpDy%2FNaSRKCmdAq3AP32fAqAFcVwjarpLvHsCkhR%2FpV85FoRQyFegScib8vva0iR6l49OTrLW3m2ZeNuU933W8zzWUil5CdcYu0b0XwRm6hhI5u65kY7%2BkUoAScxEHPB1uDURW4sGygbzLlowQcTyxUgqJ0t3prUZaw4%2FeIUz%2FZ5pkBjhGVWLHj0RMr4WCOCYVEXnuiXomM9ILpyZVzzJr5nKazAqgCqqD3vW1CgRCBVB%2FBbt3%2Fpo%2FTRHXq%2BRTVjgKQTd29KqBZ7RmAKgvBTJvrdlHoCQAaxjqvYEUgcAL0QFXI88rjFRx7YGZIHxWGsWI5fZap2Xq9imApx1toJQ9HgCbFURZ27vXZbye3u4YGJ9wsTAzETubnRVyK48QQSy6bZkqPRDMfoJw%2F0MLPMl2bQj4Wyh05X8oOiLLvRf4zS2PgFzEdWgmJXn8BMv17EpxoObjPq6uLrDKSyHZQTeT8U3Py4FYJRWGOvZ%2B0rOUGKPpss50vN%2FqcOP%2F%2FY1E5GsSwqXqaHWo0haHjm1rrF4Zlbai7wbn5NZO6w6%2BkXIdJAlbRkgCnyPWO7PauNEiDMA8i7d1v340wpTj%2FEDJS0ws2%2FD77fTs%2B%2BYzFXxCy2Y6hHNh1aROx0FxLJEICQqHdmDpzAmZToN0tBjCJ%2FufDBjqkAR%2Bn2xs2G0hsoejDljJZDUZgftOi4eHPpyOMpgOGHR%2BxPkaz8FKzNYaXsEw%2Bz59dLtcc0gqxrTWIbqxrxrTw4ye9xTnMxb8aX5jyPYlvQTGaJk%2BNM%2Bd5VB4aflR0lG%2Bl0fI7eZEoLxn8zu07rBdnmUTZ4MNnNYD%2FcFOU3XoD7bxaUYZwjxso%2BDmQiteXL4I9Gpu8cGO2t0x4D7HlHMfDQ%2Fl78ko1&X-Amz-Signature=9318fb21afa31c388405c05574123d95523b314f0aea98c224b79f482e299b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HFMMNES%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCMwt%2F397ejv8HHyb%2Fq%2BTjPkwCaGv5J8HMnhiQ2oog%2FhQIhAOYEPboaC1gBU%2F8f%2F9tlwVSRRPyq7hUrpubuI6j68m7pKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHTZpDy%2FNaSRKCmdAq3AP32fAqAFcVwjarpLvHsCkhR%2FpV85FoRQyFegScib8vva0iR6l49OTrLW3m2ZeNuU933W8zzWUil5CdcYu0b0XwRm6hhI5u65kY7%2BkUoAScxEHPB1uDURW4sGygbzLlowQcTyxUgqJ0t3prUZaw4%2FeIUz%2FZ5pkBjhGVWLHj0RMr4WCOCYVEXnuiXomM9ILpyZVzzJr5nKazAqgCqqD3vW1CgRCBVB%2FBbt3%2Fpo%2FTRHXq%2BRTVjgKQTd29KqBZ7RmAKgvBTJvrdlHoCQAaxjqvYEUgcAL0QFXI88rjFRx7YGZIHxWGsWI5fZap2Xq9imApx1toJQ9HgCbFURZ27vXZbye3u4YGJ9wsTAzETubnRVyK48QQSy6bZkqPRDMfoJw%2F0MLPMl2bQj4Wyh05X8oOiLLvRf4zS2PgFzEdWgmJXn8BMv17EpxoObjPq6uLrDKSyHZQTeT8U3Py4FYJRWGOvZ%2B0rOUGKPpss50vN%2FqcOP%2F%2FY1E5GsSwqXqaHWo0haHjm1rrF4Zlbai7wbn5NZO6w6%2BkXIdJAlbRkgCnyPWO7PauNEiDMA8i7d1v340wpTj%2FEDJS0ws2%2FD77fTs%2B%2BYzFXxCy2Y6hHNh1aROx0FxLJEICQqHdmDpzAmZToN0tBjCJ%2FufDBjqkAR%2Bn2xs2G0hsoejDljJZDUZgftOi4eHPpyOMpgOGHR%2BxPkaz8FKzNYaXsEw%2Bz59dLtcc0gqxrTWIbqxrxrTw4ye9xTnMxb8aX5jyPYlvQTGaJk%2BNM%2Bd5VB4aflR0lG%2Bl0fI7eZEoLxn8zu07rBdnmUTZ4MNnNYD%2FcFOU3XoD7bxaUYZwjxso%2BDmQiteXL4I9Gpu8cGO2t0x4D7HlHMfDQ%2Fl78ko1&X-Amz-Signature=ac0d3e972c7f80760379aef307f2dbefe80844019bee800d352eda1567269545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HFMMNES%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCMwt%2F397ejv8HHyb%2Fq%2BTjPkwCaGv5J8HMnhiQ2oog%2FhQIhAOYEPboaC1gBU%2F8f%2F9tlwVSRRPyq7hUrpubuI6j68m7pKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHTZpDy%2FNaSRKCmdAq3AP32fAqAFcVwjarpLvHsCkhR%2FpV85FoRQyFegScib8vva0iR6l49OTrLW3m2ZeNuU933W8zzWUil5CdcYu0b0XwRm6hhI5u65kY7%2BkUoAScxEHPB1uDURW4sGygbzLlowQcTyxUgqJ0t3prUZaw4%2FeIUz%2FZ5pkBjhGVWLHj0RMr4WCOCYVEXnuiXomM9ILpyZVzzJr5nKazAqgCqqD3vW1CgRCBVB%2FBbt3%2Fpo%2FTRHXq%2BRTVjgKQTd29KqBZ7RmAKgvBTJvrdlHoCQAaxjqvYEUgcAL0QFXI88rjFRx7YGZIHxWGsWI5fZap2Xq9imApx1toJQ9HgCbFURZ27vXZbye3u4YGJ9wsTAzETubnRVyK48QQSy6bZkqPRDMfoJw%2F0MLPMl2bQj4Wyh05X8oOiLLvRf4zS2PgFzEdWgmJXn8BMv17EpxoObjPq6uLrDKSyHZQTeT8U3Py4FYJRWGOvZ%2B0rOUGKPpss50vN%2FqcOP%2F%2FY1E5GsSwqXqaHWo0haHjm1rrF4Zlbai7wbn5NZO6w6%2BkXIdJAlbRkgCnyPWO7PauNEiDMA8i7d1v340wpTj%2FEDJS0ws2%2FD77fTs%2B%2BYzFXxCy2Y6hHNh1aROx0FxLJEICQqHdmDpzAmZToN0tBjCJ%2FufDBjqkAR%2Bn2xs2G0hsoejDljJZDUZgftOi4eHPpyOMpgOGHR%2BxPkaz8FKzNYaXsEw%2Bz59dLtcc0gqxrTWIbqxrxrTw4ye9xTnMxb8aX5jyPYlvQTGaJk%2BNM%2Bd5VB4aflR0lG%2Bl0fI7eZEoLxn8zu07rBdnmUTZ4MNnNYD%2FcFOU3XoD7bxaUYZwjxso%2BDmQiteXL4I9Gpu8cGO2t0x4D7HlHMfDQ%2Fl78ko1&X-Amz-Signature=8ef788081f7421561b8a65f469da2fcf0730201498e6e6ac77304cfbe9550fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HFMMNES%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCMwt%2F397ejv8HHyb%2Fq%2BTjPkwCaGv5J8HMnhiQ2oog%2FhQIhAOYEPboaC1gBU%2F8f%2F9tlwVSRRPyq7hUrpubuI6j68m7pKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHTZpDy%2FNaSRKCmdAq3AP32fAqAFcVwjarpLvHsCkhR%2FpV85FoRQyFegScib8vva0iR6l49OTrLW3m2ZeNuU933W8zzWUil5CdcYu0b0XwRm6hhI5u65kY7%2BkUoAScxEHPB1uDURW4sGygbzLlowQcTyxUgqJ0t3prUZaw4%2FeIUz%2FZ5pkBjhGVWLHj0RMr4WCOCYVEXnuiXomM9ILpyZVzzJr5nKazAqgCqqD3vW1CgRCBVB%2FBbt3%2Fpo%2FTRHXq%2BRTVjgKQTd29KqBZ7RmAKgvBTJvrdlHoCQAaxjqvYEUgcAL0QFXI88rjFRx7YGZIHxWGsWI5fZap2Xq9imApx1toJQ9HgCbFURZ27vXZbye3u4YGJ9wsTAzETubnRVyK48QQSy6bZkqPRDMfoJw%2F0MLPMl2bQj4Wyh05X8oOiLLvRf4zS2PgFzEdWgmJXn8BMv17EpxoObjPq6uLrDKSyHZQTeT8U3Py4FYJRWGOvZ%2B0rOUGKPpss50vN%2FqcOP%2F%2FY1E5GsSwqXqaHWo0haHjm1rrF4Zlbai7wbn5NZO6w6%2BkXIdJAlbRkgCnyPWO7PauNEiDMA8i7d1v340wpTj%2FEDJS0ws2%2FD77fTs%2B%2BYzFXxCy2Y6hHNh1aROx0FxLJEICQqHdmDpzAmZToN0tBjCJ%2FufDBjqkAR%2Bn2xs2G0hsoejDljJZDUZgftOi4eHPpyOMpgOGHR%2BxPkaz8FKzNYaXsEw%2Bz59dLtcc0gqxrTWIbqxrxrTw4ye9xTnMxb8aX5jyPYlvQTGaJk%2BNM%2Bd5VB4aflR0lG%2Bl0fI7eZEoLxn8zu07rBdnmUTZ4MNnNYD%2FcFOU3XoD7bxaUYZwjxso%2BDmQiteXL4I9Gpu8cGO2t0x4D7HlHMfDQ%2Fl78ko1&X-Amz-Signature=1b9b43467e65b121c3f00859b497f21947db0062e930f3683b402c3aa5409f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
