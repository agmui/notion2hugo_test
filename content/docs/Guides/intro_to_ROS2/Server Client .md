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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWL7KKIT%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDfIfdjlD2TKty3Jj5PfnLm1apW%2FCNa4u40BqUBrMBXOgIgOMDLWUQJ7t1GA1%2FTFWVPLxDFEmL0F24QGq%2BzyE4%2FkEEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs0547E5qaMBglceSrcA%2BXwsQlUr0r04YPu2r4JCEUI%2FvO8HCzYmdSoLBJi6nWep369Fy6HxizKC%2Fh7oQX8tNf6OWkJhgfjq9jZapGoN1pPsjLkXHplRMleU5IZ2U7Rneiz%2BTAk8oxUEGTRbsP5n3dqVTqpH6XkhDJpfEeBPslA8UYhkxGStAPUEu%2FkZcRe3DDqfD2fVDEhMXMK68OTfFNuzMUGo7wsX9klUGSGAlZdLsQj24B24EebfsRfehyvhgR8Mv%2BVTQX5Fv2QODKYQ24zirlDuK7rxneRwpJy9lGQSK1fyqQmeZ%2B8M%2FCoFfZXk5EM%2BstolKBcBSXBqO88GC67gvKF1ihocCDV9e8kI46H7Jf37a1KVVFQD6xLfUBX0xEYtfJ%2FAWaCjyeKiJ0z6%2F9PnnsQ404aC%2FI5BtlJ205OEOHqPqQlmQrwEDuEOJRKiJOx33VX5ifUOa8RjdpIIA6%2FmmZEhb%2Fn7bVK8uGOgSDyMx2J2GtNmG90NZUmzTYc%2BjqbprLROH0Nbs2EXwQmYvUYGNupcx7sQN%2B6Jcnhsf5nKXnkng0hecP%2FrvNY3I2lI5%2Bg678Uo4QQGIK%2FCYijbh30UDKyvk2kAiOkf2u5NlZUn0aBwh7cDBONhABm0UIDqwxSmAhWT6A3kWEtMIDG3L8GOqUB8MRcQoPUDnp4I%2FH33LUAQGSb8uREbLV%2FAvwDSZ03TaC2M%2Blbh%2FEkqB%2FGeTOoSCzA0Jq6TfEOPYNCVJZEy5eOhRo8sICc2nKUzqAoAk5d2a7R%2FrV5BJsxumteXDw1CpSPocRMZN0N5Mez%2FtPbvfE3eTii1RCkJLDjgO7Obh5EZDvCT0sN%2BFIcBeCBL%2FUvlOpSvIwKIK%2FCGzHWG8t9CFEhcIj1TbDr&X-Amz-Signature=21344c7769e8d1511951b2d5441aacd3da6a94e51f65d96a16082b548905c942&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWL7KKIT%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDfIfdjlD2TKty3Jj5PfnLm1apW%2FCNa4u40BqUBrMBXOgIgOMDLWUQJ7t1GA1%2FTFWVPLxDFEmL0F24QGq%2BzyE4%2FkEEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs0547E5qaMBglceSrcA%2BXwsQlUr0r04YPu2r4JCEUI%2FvO8HCzYmdSoLBJi6nWep369Fy6HxizKC%2Fh7oQX8tNf6OWkJhgfjq9jZapGoN1pPsjLkXHplRMleU5IZ2U7Rneiz%2BTAk8oxUEGTRbsP5n3dqVTqpH6XkhDJpfEeBPslA8UYhkxGStAPUEu%2FkZcRe3DDqfD2fVDEhMXMK68OTfFNuzMUGo7wsX9klUGSGAlZdLsQj24B24EebfsRfehyvhgR8Mv%2BVTQX5Fv2QODKYQ24zirlDuK7rxneRwpJy9lGQSK1fyqQmeZ%2B8M%2FCoFfZXk5EM%2BstolKBcBSXBqO88GC67gvKF1ihocCDV9e8kI46H7Jf37a1KVVFQD6xLfUBX0xEYtfJ%2FAWaCjyeKiJ0z6%2F9PnnsQ404aC%2FI5BtlJ205OEOHqPqQlmQrwEDuEOJRKiJOx33VX5ifUOa8RjdpIIA6%2FmmZEhb%2Fn7bVK8uGOgSDyMx2J2GtNmG90NZUmzTYc%2BjqbprLROH0Nbs2EXwQmYvUYGNupcx7sQN%2B6Jcnhsf5nKXnkng0hecP%2FrvNY3I2lI5%2Bg678Uo4QQGIK%2FCYijbh30UDKyvk2kAiOkf2u5NlZUn0aBwh7cDBONhABm0UIDqwxSmAhWT6A3kWEtMIDG3L8GOqUB8MRcQoPUDnp4I%2FH33LUAQGSb8uREbLV%2FAvwDSZ03TaC2M%2Blbh%2FEkqB%2FGeTOoSCzA0Jq6TfEOPYNCVJZEy5eOhRo8sICc2nKUzqAoAk5d2a7R%2FrV5BJsxumteXDw1CpSPocRMZN0N5Mez%2FtPbvfE3eTii1RCkJLDjgO7Obh5EZDvCT0sN%2BFIcBeCBL%2FUvlOpSvIwKIK%2FCGzHWG8t9CFEhcIj1TbDr&X-Amz-Signature=7b885804bef99eef8727a7f98870c9ff8fbbb35bce6b6bcb26a0d7dd4cb0bbfe&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWL7KKIT%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDfIfdjlD2TKty3Jj5PfnLm1apW%2FCNa4u40BqUBrMBXOgIgOMDLWUQJ7t1GA1%2FTFWVPLxDFEmL0F24QGq%2BzyE4%2FkEEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs0547E5qaMBglceSrcA%2BXwsQlUr0r04YPu2r4JCEUI%2FvO8HCzYmdSoLBJi6nWep369Fy6HxizKC%2Fh7oQX8tNf6OWkJhgfjq9jZapGoN1pPsjLkXHplRMleU5IZ2U7Rneiz%2BTAk8oxUEGTRbsP5n3dqVTqpH6XkhDJpfEeBPslA8UYhkxGStAPUEu%2FkZcRe3DDqfD2fVDEhMXMK68OTfFNuzMUGo7wsX9klUGSGAlZdLsQj24B24EebfsRfehyvhgR8Mv%2BVTQX5Fv2QODKYQ24zirlDuK7rxneRwpJy9lGQSK1fyqQmeZ%2B8M%2FCoFfZXk5EM%2BstolKBcBSXBqO88GC67gvKF1ihocCDV9e8kI46H7Jf37a1KVVFQD6xLfUBX0xEYtfJ%2FAWaCjyeKiJ0z6%2F9PnnsQ404aC%2FI5BtlJ205OEOHqPqQlmQrwEDuEOJRKiJOx33VX5ifUOa8RjdpIIA6%2FmmZEhb%2Fn7bVK8uGOgSDyMx2J2GtNmG90NZUmzTYc%2BjqbprLROH0Nbs2EXwQmYvUYGNupcx7sQN%2B6Jcnhsf5nKXnkng0hecP%2FrvNY3I2lI5%2Bg678Uo4QQGIK%2FCYijbh30UDKyvk2kAiOkf2u5NlZUn0aBwh7cDBONhABm0UIDqwxSmAhWT6A3kWEtMIDG3L8GOqUB8MRcQoPUDnp4I%2FH33LUAQGSb8uREbLV%2FAvwDSZ03TaC2M%2Blbh%2FEkqB%2FGeTOoSCzA0Jq6TfEOPYNCVJZEy5eOhRo8sICc2nKUzqAoAk5d2a7R%2FrV5BJsxumteXDw1CpSPocRMZN0N5Mez%2FtPbvfE3eTii1RCkJLDjgO7Obh5EZDvCT0sN%2BFIcBeCBL%2FUvlOpSvIwKIK%2FCGzHWG8t9CFEhcIj1TbDr&X-Amz-Signature=7d7e648e4552e14561c73bbc77d56416195bf9e3e677b43fc8fe095fbf1bc177&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWL7KKIT%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDfIfdjlD2TKty3Jj5PfnLm1apW%2FCNa4u40BqUBrMBXOgIgOMDLWUQJ7t1GA1%2FTFWVPLxDFEmL0F24QGq%2BzyE4%2FkEEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs0547E5qaMBglceSrcA%2BXwsQlUr0r04YPu2r4JCEUI%2FvO8HCzYmdSoLBJi6nWep369Fy6HxizKC%2Fh7oQX8tNf6OWkJhgfjq9jZapGoN1pPsjLkXHplRMleU5IZ2U7Rneiz%2BTAk8oxUEGTRbsP5n3dqVTqpH6XkhDJpfEeBPslA8UYhkxGStAPUEu%2FkZcRe3DDqfD2fVDEhMXMK68OTfFNuzMUGo7wsX9klUGSGAlZdLsQj24B24EebfsRfehyvhgR8Mv%2BVTQX5Fv2QODKYQ24zirlDuK7rxneRwpJy9lGQSK1fyqQmeZ%2B8M%2FCoFfZXk5EM%2BstolKBcBSXBqO88GC67gvKF1ihocCDV9e8kI46H7Jf37a1KVVFQD6xLfUBX0xEYtfJ%2FAWaCjyeKiJ0z6%2F9PnnsQ404aC%2FI5BtlJ205OEOHqPqQlmQrwEDuEOJRKiJOx33VX5ifUOa8RjdpIIA6%2FmmZEhb%2Fn7bVK8uGOgSDyMx2J2GtNmG90NZUmzTYc%2BjqbprLROH0Nbs2EXwQmYvUYGNupcx7sQN%2B6Jcnhsf5nKXnkng0hecP%2FrvNY3I2lI5%2Bg678Uo4QQGIK%2FCYijbh30UDKyvk2kAiOkf2u5NlZUn0aBwh7cDBONhABm0UIDqwxSmAhWT6A3kWEtMIDG3L8GOqUB8MRcQoPUDnp4I%2FH33LUAQGSb8uREbLV%2FAvwDSZ03TaC2M%2Blbh%2FEkqB%2FGeTOoSCzA0Jq6TfEOPYNCVJZEy5eOhRo8sICc2nKUzqAoAk5d2a7R%2FrV5BJsxumteXDw1CpSPocRMZN0N5Mez%2FtPbvfE3eTii1RCkJLDjgO7Obh5EZDvCT0sN%2BFIcBeCBL%2FUvlOpSvIwKIK%2FCGzHWG8t9CFEhcIj1TbDr&X-Amz-Signature=fbb217c33ae3f43b823bae32c5c20365200fe70853efb73c12688677dfef81da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWL7KKIT%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDfIfdjlD2TKty3Jj5PfnLm1apW%2FCNa4u40BqUBrMBXOgIgOMDLWUQJ7t1GA1%2FTFWVPLxDFEmL0F24QGq%2BzyE4%2FkEEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs0547E5qaMBglceSrcA%2BXwsQlUr0r04YPu2r4JCEUI%2FvO8HCzYmdSoLBJi6nWep369Fy6HxizKC%2Fh7oQX8tNf6OWkJhgfjq9jZapGoN1pPsjLkXHplRMleU5IZ2U7Rneiz%2BTAk8oxUEGTRbsP5n3dqVTqpH6XkhDJpfEeBPslA8UYhkxGStAPUEu%2FkZcRe3DDqfD2fVDEhMXMK68OTfFNuzMUGo7wsX9klUGSGAlZdLsQj24B24EebfsRfehyvhgR8Mv%2BVTQX5Fv2QODKYQ24zirlDuK7rxneRwpJy9lGQSK1fyqQmeZ%2B8M%2FCoFfZXk5EM%2BstolKBcBSXBqO88GC67gvKF1ihocCDV9e8kI46H7Jf37a1KVVFQD6xLfUBX0xEYtfJ%2FAWaCjyeKiJ0z6%2F9PnnsQ404aC%2FI5BtlJ205OEOHqPqQlmQrwEDuEOJRKiJOx33VX5ifUOa8RjdpIIA6%2FmmZEhb%2Fn7bVK8uGOgSDyMx2J2GtNmG90NZUmzTYc%2BjqbprLROH0Nbs2EXwQmYvUYGNupcx7sQN%2B6Jcnhsf5nKXnkng0hecP%2FrvNY3I2lI5%2Bg678Uo4QQGIK%2FCYijbh30UDKyvk2kAiOkf2u5NlZUn0aBwh7cDBONhABm0UIDqwxSmAhWT6A3kWEtMIDG3L8GOqUB8MRcQoPUDnp4I%2FH33LUAQGSb8uREbLV%2FAvwDSZ03TaC2M%2Blbh%2FEkqB%2FGeTOoSCzA0Jq6TfEOPYNCVJZEy5eOhRo8sICc2nKUzqAoAk5d2a7R%2FrV5BJsxumteXDw1CpSPocRMZN0N5Mez%2FtPbvfE3eTii1RCkJLDjgO7Obh5EZDvCT0sN%2BFIcBeCBL%2FUvlOpSvIwKIK%2FCGzHWG8t9CFEhcIj1TbDr&X-Amz-Signature=55120ead314cfa974f90d81b101e925096b7ede52f1951c39d68a4dcf06ecbfc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
