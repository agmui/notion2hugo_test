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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKCH2J6X%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBANwDBtPpd1WxYDJm0bOVBhJwpxP7Wul%2BkGBPeThTIhAiAUGFhw9SwOQ4PZY9tM4mei0EPIhmaiFf6ywYgnnxTzACqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDKXHl1Nz600%2Fw2IJKtwDYAdPjKa%2FpxBKJjTzVpgx5oLvCAeiz6lKsqMbdEJeuU2fLsZtzOqLqiQtp4N5tDPrEJ0p1mqH%2BfZTCQdoF6%2F502zM0G2IN%2BpzWf8Xk6bqhAYuVZDhMTQHLLcn1j1KxN0WU6%2BV01GCDbYTxQ7Nf0Ho4CnEWuq3KV3aKAdakoCnItgQWSq2l4JrJouDlCJ6gnzgZgX4fWiZiY1a9KsJ0JyhRhogwsplTauPF0vtSfeEF7%2FWB7U05S5SdjeNfAHsAokJ6mGpiq2BoYKEq%2BpcvgxWwVrE4K86HeNcMmyIWTbDhGiaxS5tV1VnoYZthTBnP6yCzf%2BumSmeZQoxzxtlJk%2F7dbULWYftxns4buSe2LTl7%2B70vp5jvZ0zLhbXGv6L4mamxVXJTELZP95m%2FmODyblzbED3%2BGOiJShLAfLcv1EOL4HcejIVgx5RV9vE89GBxjI78esDQ9wgr0ZZ6bIo9aKnlnDWriMPRZ8mu2cK5NGz4g%2BBipDsRjsqFU9k1njXUuW5daIG1u7ZM0JhXFFmCHUw7MwhLCZZBsARoHgcOgF4SBDMdXCD%2FipzybQPF2L7E3SI%2Fj45QA6gzyxNzNMPTZlhPRkKqiUxf58Tf6amy79R4i4op%2F9Wo2KgAEaRNRowzbb9vAY6pgE6q56NjFk4IY1zBrv%2BqQypEa51IrPKaSusmAfB6O2TroxsBCY5OjjOW%2BbhmEz41W77o9Eak%2FZetC2EBS%2FzyAK46rNhe9%2BkTT8Yztoizqd4thYg2inAC5ORv%2BLawLQm8K64Lvgap7Papx%2F0LUWWjMrPURreepLCY2%2F03Vy8KUAKyQtp3TVAFVMFIJKjsrvW5bdDRgkMCjq1maI7XtkkuVqPh0MkEaXc&X-Amz-Signature=db9d0c4faa3decc0123d5f4fcbb3f7d37d9944ec19c8885112cf68ba9e1c5137&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKCH2J6X%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBANwDBtPpd1WxYDJm0bOVBhJwpxP7Wul%2BkGBPeThTIhAiAUGFhw9SwOQ4PZY9tM4mei0EPIhmaiFf6ywYgnnxTzACqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDKXHl1Nz600%2Fw2IJKtwDYAdPjKa%2FpxBKJjTzVpgx5oLvCAeiz6lKsqMbdEJeuU2fLsZtzOqLqiQtp4N5tDPrEJ0p1mqH%2BfZTCQdoF6%2F502zM0G2IN%2BpzWf8Xk6bqhAYuVZDhMTQHLLcn1j1KxN0WU6%2BV01GCDbYTxQ7Nf0Ho4CnEWuq3KV3aKAdakoCnItgQWSq2l4JrJouDlCJ6gnzgZgX4fWiZiY1a9KsJ0JyhRhogwsplTauPF0vtSfeEF7%2FWB7U05S5SdjeNfAHsAokJ6mGpiq2BoYKEq%2BpcvgxWwVrE4K86HeNcMmyIWTbDhGiaxS5tV1VnoYZthTBnP6yCzf%2BumSmeZQoxzxtlJk%2F7dbULWYftxns4buSe2LTl7%2B70vp5jvZ0zLhbXGv6L4mamxVXJTELZP95m%2FmODyblzbED3%2BGOiJShLAfLcv1EOL4HcejIVgx5RV9vE89GBxjI78esDQ9wgr0ZZ6bIo9aKnlnDWriMPRZ8mu2cK5NGz4g%2BBipDsRjsqFU9k1njXUuW5daIG1u7ZM0JhXFFmCHUw7MwhLCZZBsARoHgcOgF4SBDMdXCD%2FipzybQPF2L7E3SI%2Fj45QA6gzyxNzNMPTZlhPRkKqiUxf58Tf6amy79R4i4op%2F9Wo2KgAEaRNRowzbb9vAY6pgE6q56NjFk4IY1zBrv%2BqQypEa51IrPKaSusmAfB6O2TroxsBCY5OjjOW%2BbhmEz41W77o9Eak%2FZetC2EBS%2FzyAK46rNhe9%2BkTT8Yztoizqd4thYg2inAC5ORv%2BLawLQm8K64Lvgap7Papx%2F0LUWWjMrPURreepLCY2%2F03Vy8KUAKyQtp3TVAFVMFIJKjsrvW5bdDRgkMCjq1maI7XtkkuVqPh0MkEaXc&X-Amz-Signature=97edba53571fc20ba5e612f11fde4953ca421dddebbbac0e62b36f4080cd6e15&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKCH2J6X%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBANwDBtPpd1WxYDJm0bOVBhJwpxP7Wul%2BkGBPeThTIhAiAUGFhw9SwOQ4PZY9tM4mei0EPIhmaiFf6ywYgnnxTzACqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDKXHl1Nz600%2Fw2IJKtwDYAdPjKa%2FpxBKJjTzVpgx5oLvCAeiz6lKsqMbdEJeuU2fLsZtzOqLqiQtp4N5tDPrEJ0p1mqH%2BfZTCQdoF6%2F502zM0G2IN%2BpzWf8Xk6bqhAYuVZDhMTQHLLcn1j1KxN0WU6%2BV01GCDbYTxQ7Nf0Ho4CnEWuq3KV3aKAdakoCnItgQWSq2l4JrJouDlCJ6gnzgZgX4fWiZiY1a9KsJ0JyhRhogwsplTauPF0vtSfeEF7%2FWB7U05S5SdjeNfAHsAokJ6mGpiq2BoYKEq%2BpcvgxWwVrE4K86HeNcMmyIWTbDhGiaxS5tV1VnoYZthTBnP6yCzf%2BumSmeZQoxzxtlJk%2F7dbULWYftxns4buSe2LTl7%2B70vp5jvZ0zLhbXGv6L4mamxVXJTELZP95m%2FmODyblzbED3%2BGOiJShLAfLcv1EOL4HcejIVgx5RV9vE89GBxjI78esDQ9wgr0ZZ6bIo9aKnlnDWriMPRZ8mu2cK5NGz4g%2BBipDsRjsqFU9k1njXUuW5daIG1u7ZM0JhXFFmCHUw7MwhLCZZBsARoHgcOgF4SBDMdXCD%2FipzybQPF2L7E3SI%2Fj45QA6gzyxNzNMPTZlhPRkKqiUxf58Tf6amy79R4i4op%2F9Wo2KgAEaRNRowzbb9vAY6pgE6q56NjFk4IY1zBrv%2BqQypEa51IrPKaSusmAfB6O2TroxsBCY5OjjOW%2BbhmEz41W77o9Eak%2FZetC2EBS%2FzyAK46rNhe9%2BkTT8Yztoizqd4thYg2inAC5ORv%2BLawLQm8K64Lvgap7Papx%2F0LUWWjMrPURreepLCY2%2F03Vy8KUAKyQtp3TVAFVMFIJKjsrvW5bdDRgkMCjq1maI7XtkkuVqPh0MkEaXc&X-Amz-Signature=2c64f9feed9038034533021b6ca401fc1376160b823923bb70cf2d52aa571906&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKCH2J6X%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBANwDBtPpd1WxYDJm0bOVBhJwpxP7Wul%2BkGBPeThTIhAiAUGFhw9SwOQ4PZY9tM4mei0EPIhmaiFf6ywYgnnxTzACqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDKXHl1Nz600%2Fw2IJKtwDYAdPjKa%2FpxBKJjTzVpgx5oLvCAeiz6lKsqMbdEJeuU2fLsZtzOqLqiQtp4N5tDPrEJ0p1mqH%2BfZTCQdoF6%2F502zM0G2IN%2BpzWf8Xk6bqhAYuVZDhMTQHLLcn1j1KxN0WU6%2BV01GCDbYTxQ7Nf0Ho4CnEWuq3KV3aKAdakoCnItgQWSq2l4JrJouDlCJ6gnzgZgX4fWiZiY1a9KsJ0JyhRhogwsplTauPF0vtSfeEF7%2FWB7U05S5SdjeNfAHsAokJ6mGpiq2BoYKEq%2BpcvgxWwVrE4K86HeNcMmyIWTbDhGiaxS5tV1VnoYZthTBnP6yCzf%2BumSmeZQoxzxtlJk%2F7dbULWYftxns4buSe2LTl7%2B70vp5jvZ0zLhbXGv6L4mamxVXJTELZP95m%2FmODyblzbED3%2BGOiJShLAfLcv1EOL4HcejIVgx5RV9vE89GBxjI78esDQ9wgr0ZZ6bIo9aKnlnDWriMPRZ8mu2cK5NGz4g%2BBipDsRjsqFU9k1njXUuW5daIG1u7ZM0JhXFFmCHUw7MwhLCZZBsARoHgcOgF4SBDMdXCD%2FipzybQPF2L7E3SI%2Fj45QA6gzyxNzNMPTZlhPRkKqiUxf58Tf6amy79R4i4op%2F9Wo2KgAEaRNRowzbb9vAY6pgE6q56NjFk4IY1zBrv%2BqQypEa51IrPKaSusmAfB6O2TroxsBCY5OjjOW%2BbhmEz41W77o9Eak%2FZetC2EBS%2FzyAK46rNhe9%2BkTT8Yztoizqd4thYg2inAC5ORv%2BLawLQm8K64Lvgap7Papx%2F0LUWWjMrPURreepLCY2%2F03Vy8KUAKyQtp3TVAFVMFIJKjsrvW5bdDRgkMCjq1maI7XtkkuVqPh0MkEaXc&X-Amz-Signature=bed2dbb755a71e0a25d7d63f4109a80b1585374e52179f46a82e8aba024ad422&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKCH2J6X%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBANwDBtPpd1WxYDJm0bOVBhJwpxP7Wul%2BkGBPeThTIhAiAUGFhw9SwOQ4PZY9tM4mei0EPIhmaiFf6ywYgnnxTzACqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDKXHl1Nz600%2Fw2IJKtwDYAdPjKa%2FpxBKJjTzVpgx5oLvCAeiz6lKsqMbdEJeuU2fLsZtzOqLqiQtp4N5tDPrEJ0p1mqH%2BfZTCQdoF6%2F502zM0G2IN%2BpzWf8Xk6bqhAYuVZDhMTQHLLcn1j1KxN0WU6%2BV01GCDbYTxQ7Nf0Ho4CnEWuq3KV3aKAdakoCnItgQWSq2l4JrJouDlCJ6gnzgZgX4fWiZiY1a9KsJ0JyhRhogwsplTauPF0vtSfeEF7%2FWB7U05S5SdjeNfAHsAokJ6mGpiq2BoYKEq%2BpcvgxWwVrE4K86HeNcMmyIWTbDhGiaxS5tV1VnoYZthTBnP6yCzf%2BumSmeZQoxzxtlJk%2F7dbULWYftxns4buSe2LTl7%2B70vp5jvZ0zLhbXGv6L4mamxVXJTELZP95m%2FmODyblzbED3%2BGOiJShLAfLcv1EOL4HcejIVgx5RV9vE89GBxjI78esDQ9wgr0ZZ6bIo9aKnlnDWriMPRZ8mu2cK5NGz4g%2BBipDsRjsqFU9k1njXUuW5daIG1u7ZM0JhXFFmCHUw7MwhLCZZBsARoHgcOgF4SBDMdXCD%2FipzybQPF2L7E3SI%2Fj45QA6gzyxNzNMPTZlhPRkKqiUxf58Tf6amy79R4i4op%2F9Wo2KgAEaRNRowzbb9vAY6pgE6q56NjFk4IY1zBrv%2BqQypEa51IrPKaSusmAfB6O2TroxsBCY5OjjOW%2BbhmEz41W77o9Eak%2FZetC2EBS%2FzyAK46rNhe9%2BkTT8Yztoizqd4thYg2inAC5ORv%2BLawLQm8K64Lvgap7Papx%2F0LUWWjMrPURreepLCY2%2F03Vy8KUAKyQtp3TVAFVMFIJKjsrvW5bdDRgkMCjq1maI7XtkkuVqPh0MkEaXc&X-Amz-Signature=1d9933da04be2cc56b9a773617c16f0aa452eb8f02a3432ce7ead768dadabc1c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
