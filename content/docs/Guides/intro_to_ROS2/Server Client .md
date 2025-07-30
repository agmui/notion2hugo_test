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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIATG2TK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDykNs0yPvZH79ioQYBGsXyDiYpCznOXioMBD08oQbWXAiEAy5AwxaA73%2BpA6h4skeKzYdlrr9tkYO94NGCtXnxGHy4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFiGrEor6YwJnAioCrcA%2Bjr9M5mC7MjLGiRsZwM8rSeNEIW%2FhSxJuje7%2BkXCeP2nwimURtczbErDiTw%2B4VtJB2mWP0K%2FXSvGnN%2FA6kXWLOw3tL7BSFMgpAnLZV8FTANdXJKAatLUvFP6vmmCwi%2B4jZYpFF1b0f4wkpPbkRFdgKPGaeu%2FJwLMOhNZfuwPbB3QJ2wYBYLft4fc9noUedIbCURYrMiej7gfv6bZ7U8MxNZUsWQR4zXMvQHoC8nQ8UsMv2qeULuOGq15%2FtrkuAEIy2CW7%2FuoSDHcsbuBYRXofUIFfSH8zRxDQoLV84rH%2BuipNRditKDzgLi9TTE2ZYbCOhioytmJu1g0NKJdXygh%2FCkmi7%2BVvkeoXHzCMDmnIrWyUDRHY8w%2FbIxc5nTjDuLfcifdVTvJWApQU4WPMmql9Fqo%2F%2B5vK%2BS7BZMAyN9K4IohR4esFKWJMWoWa47rVlFJ%2F8XaABxX3xgqcSotuIGbiSjdi%2BJY%2BO0urkFmhWEN5HYJxiWsmhPZWrOwlroUcAsdNiyernJUKROgUx21rALHKeqKjWzdXU9KB5a7o6A0tdpfr4NdnV4UARNId3UX6HNrgteRLw8jirvW%2B1Ks0hadotuiWO1QAwS0VTDjzWEqN%2FPITNpS7cIqURJU4S3MIDpqcQGOqUBd1dY%2BFQPAva3fiIWSuh6kBDSZO0%2BYdD3g60BLBg2Arkx0H%2Bssb%2FkadtyiDKHoBX8ZUGIKhGciWGcMHMEkg3keL8WhQ1FwAraUTcob%2BZJBtiWjDUM2KX8ME2s%2BiZsZtREGRzi1PdHhFW%2B9pu3DG6Fq7ilD6yeXEJbpBEQkllwuGOXaTBoLuFd%2BiaXRLECvM11Y2XnDzmjIsJvIh1u3TacGh2LB%2BSF&X-Amz-Signature=cf1b61aaacda77981a7de1a6fc13e971e50c3ae0913a369ea7a4fd53d92321aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIATG2TK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDykNs0yPvZH79ioQYBGsXyDiYpCznOXioMBD08oQbWXAiEAy5AwxaA73%2BpA6h4skeKzYdlrr9tkYO94NGCtXnxGHy4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFiGrEor6YwJnAioCrcA%2Bjr9M5mC7MjLGiRsZwM8rSeNEIW%2FhSxJuje7%2BkXCeP2nwimURtczbErDiTw%2B4VtJB2mWP0K%2FXSvGnN%2FA6kXWLOw3tL7BSFMgpAnLZV8FTANdXJKAatLUvFP6vmmCwi%2B4jZYpFF1b0f4wkpPbkRFdgKPGaeu%2FJwLMOhNZfuwPbB3QJ2wYBYLft4fc9noUedIbCURYrMiej7gfv6bZ7U8MxNZUsWQR4zXMvQHoC8nQ8UsMv2qeULuOGq15%2FtrkuAEIy2CW7%2FuoSDHcsbuBYRXofUIFfSH8zRxDQoLV84rH%2BuipNRditKDzgLi9TTE2ZYbCOhioytmJu1g0NKJdXygh%2FCkmi7%2BVvkeoXHzCMDmnIrWyUDRHY8w%2FbIxc5nTjDuLfcifdVTvJWApQU4WPMmql9Fqo%2F%2B5vK%2BS7BZMAyN9K4IohR4esFKWJMWoWa47rVlFJ%2F8XaABxX3xgqcSotuIGbiSjdi%2BJY%2BO0urkFmhWEN5HYJxiWsmhPZWrOwlroUcAsdNiyernJUKROgUx21rALHKeqKjWzdXU9KB5a7o6A0tdpfr4NdnV4UARNId3UX6HNrgteRLw8jirvW%2B1Ks0hadotuiWO1QAwS0VTDjzWEqN%2FPITNpS7cIqURJU4S3MIDpqcQGOqUBd1dY%2BFQPAva3fiIWSuh6kBDSZO0%2BYdD3g60BLBg2Arkx0H%2Bssb%2FkadtyiDKHoBX8ZUGIKhGciWGcMHMEkg3keL8WhQ1FwAraUTcob%2BZJBtiWjDUM2KX8ME2s%2BiZsZtREGRzi1PdHhFW%2B9pu3DG6Fq7ilD6yeXEJbpBEQkllwuGOXaTBoLuFd%2BiaXRLECvM11Y2XnDzmjIsJvIh1u3TacGh2LB%2BSF&X-Amz-Signature=3251ba1e13dfa53eae12d4b105ff730faa5fb9ea46f6c31fb6510acb6913800a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIATG2TK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDykNs0yPvZH79ioQYBGsXyDiYpCznOXioMBD08oQbWXAiEAy5AwxaA73%2BpA6h4skeKzYdlrr9tkYO94NGCtXnxGHy4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFiGrEor6YwJnAioCrcA%2Bjr9M5mC7MjLGiRsZwM8rSeNEIW%2FhSxJuje7%2BkXCeP2nwimURtczbErDiTw%2B4VtJB2mWP0K%2FXSvGnN%2FA6kXWLOw3tL7BSFMgpAnLZV8FTANdXJKAatLUvFP6vmmCwi%2B4jZYpFF1b0f4wkpPbkRFdgKPGaeu%2FJwLMOhNZfuwPbB3QJ2wYBYLft4fc9noUedIbCURYrMiej7gfv6bZ7U8MxNZUsWQR4zXMvQHoC8nQ8UsMv2qeULuOGq15%2FtrkuAEIy2CW7%2FuoSDHcsbuBYRXofUIFfSH8zRxDQoLV84rH%2BuipNRditKDzgLi9TTE2ZYbCOhioytmJu1g0NKJdXygh%2FCkmi7%2BVvkeoXHzCMDmnIrWyUDRHY8w%2FbIxc5nTjDuLfcifdVTvJWApQU4WPMmql9Fqo%2F%2B5vK%2BS7BZMAyN9K4IohR4esFKWJMWoWa47rVlFJ%2F8XaABxX3xgqcSotuIGbiSjdi%2BJY%2BO0urkFmhWEN5HYJxiWsmhPZWrOwlroUcAsdNiyernJUKROgUx21rALHKeqKjWzdXU9KB5a7o6A0tdpfr4NdnV4UARNId3UX6HNrgteRLw8jirvW%2B1Ks0hadotuiWO1QAwS0VTDjzWEqN%2FPITNpS7cIqURJU4S3MIDpqcQGOqUBd1dY%2BFQPAva3fiIWSuh6kBDSZO0%2BYdD3g60BLBg2Arkx0H%2Bssb%2FkadtyiDKHoBX8ZUGIKhGciWGcMHMEkg3keL8WhQ1FwAraUTcob%2BZJBtiWjDUM2KX8ME2s%2BiZsZtREGRzi1PdHhFW%2B9pu3DG6Fq7ilD6yeXEJbpBEQkllwuGOXaTBoLuFd%2BiaXRLECvM11Y2XnDzmjIsJvIh1u3TacGh2LB%2BSF&X-Amz-Signature=cce20c1fcee4882df96cd1137b5de97bee1e23e99e6891f77a034c9a7d319ece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIATG2TK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDykNs0yPvZH79ioQYBGsXyDiYpCznOXioMBD08oQbWXAiEAy5AwxaA73%2BpA6h4skeKzYdlrr9tkYO94NGCtXnxGHy4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFiGrEor6YwJnAioCrcA%2Bjr9M5mC7MjLGiRsZwM8rSeNEIW%2FhSxJuje7%2BkXCeP2nwimURtczbErDiTw%2B4VtJB2mWP0K%2FXSvGnN%2FA6kXWLOw3tL7BSFMgpAnLZV8FTANdXJKAatLUvFP6vmmCwi%2B4jZYpFF1b0f4wkpPbkRFdgKPGaeu%2FJwLMOhNZfuwPbB3QJ2wYBYLft4fc9noUedIbCURYrMiej7gfv6bZ7U8MxNZUsWQR4zXMvQHoC8nQ8UsMv2qeULuOGq15%2FtrkuAEIy2CW7%2FuoSDHcsbuBYRXofUIFfSH8zRxDQoLV84rH%2BuipNRditKDzgLi9TTE2ZYbCOhioytmJu1g0NKJdXygh%2FCkmi7%2BVvkeoXHzCMDmnIrWyUDRHY8w%2FbIxc5nTjDuLfcifdVTvJWApQU4WPMmql9Fqo%2F%2B5vK%2BS7BZMAyN9K4IohR4esFKWJMWoWa47rVlFJ%2F8XaABxX3xgqcSotuIGbiSjdi%2BJY%2BO0urkFmhWEN5HYJxiWsmhPZWrOwlroUcAsdNiyernJUKROgUx21rALHKeqKjWzdXU9KB5a7o6A0tdpfr4NdnV4UARNId3UX6HNrgteRLw8jirvW%2B1Ks0hadotuiWO1QAwS0VTDjzWEqN%2FPITNpS7cIqURJU4S3MIDpqcQGOqUBd1dY%2BFQPAva3fiIWSuh6kBDSZO0%2BYdD3g60BLBg2Arkx0H%2Bssb%2FkadtyiDKHoBX8ZUGIKhGciWGcMHMEkg3keL8WhQ1FwAraUTcob%2BZJBtiWjDUM2KX8ME2s%2BiZsZtREGRzi1PdHhFW%2B9pu3DG6Fq7ilD6yeXEJbpBEQkllwuGOXaTBoLuFd%2BiaXRLECvM11Y2XnDzmjIsJvIh1u3TacGh2LB%2BSF&X-Amz-Signature=72ac61b4dbca30a99f682dba95a1aaca2b9421c47e0001de18802c50160c6c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIATG2TK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDykNs0yPvZH79ioQYBGsXyDiYpCznOXioMBD08oQbWXAiEAy5AwxaA73%2BpA6h4skeKzYdlrr9tkYO94NGCtXnxGHy4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFiGrEor6YwJnAioCrcA%2Bjr9M5mC7MjLGiRsZwM8rSeNEIW%2FhSxJuje7%2BkXCeP2nwimURtczbErDiTw%2B4VtJB2mWP0K%2FXSvGnN%2FA6kXWLOw3tL7BSFMgpAnLZV8FTANdXJKAatLUvFP6vmmCwi%2B4jZYpFF1b0f4wkpPbkRFdgKPGaeu%2FJwLMOhNZfuwPbB3QJ2wYBYLft4fc9noUedIbCURYrMiej7gfv6bZ7U8MxNZUsWQR4zXMvQHoC8nQ8UsMv2qeULuOGq15%2FtrkuAEIy2CW7%2FuoSDHcsbuBYRXofUIFfSH8zRxDQoLV84rH%2BuipNRditKDzgLi9TTE2ZYbCOhioytmJu1g0NKJdXygh%2FCkmi7%2BVvkeoXHzCMDmnIrWyUDRHY8w%2FbIxc5nTjDuLfcifdVTvJWApQU4WPMmql9Fqo%2F%2B5vK%2BS7BZMAyN9K4IohR4esFKWJMWoWa47rVlFJ%2F8XaABxX3xgqcSotuIGbiSjdi%2BJY%2BO0urkFmhWEN5HYJxiWsmhPZWrOwlroUcAsdNiyernJUKROgUx21rALHKeqKjWzdXU9KB5a7o6A0tdpfr4NdnV4UARNId3UX6HNrgteRLw8jirvW%2B1Ks0hadotuiWO1QAwS0VTDjzWEqN%2FPITNpS7cIqURJU4S3MIDpqcQGOqUBd1dY%2BFQPAva3fiIWSuh6kBDSZO0%2BYdD3g60BLBg2Arkx0H%2Bssb%2FkadtyiDKHoBX8ZUGIKhGciWGcMHMEkg3keL8WhQ1FwAraUTcob%2BZJBtiWjDUM2KX8ME2s%2BiZsZtREGRzi1PdHhFW%2B9pu3DG6Fq7ilD6yeXEJbpBEQkllwuGOXaTBoLuFd%2BiaXRLECvM11Y2XnDzmjIsJvIh1u3TacGh2LB%2BSF&X-Amz-Signature=7070bf9fd456289b83d7ee36960af48b325cfeb8de74a37ba42d76402c0b989c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
