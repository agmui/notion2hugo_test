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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCIDQFU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCAZdmFjpNTBn0GKsEuZmyP3X8S7bE23giVO7kmHgdC7gIhAP6%2BmMgZ3%2FBz4T6lp7FP1uDqYNijvTftYiiNo1QsuY0WKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B9ZSULGytwrxotE8q3AMLDP1YyLtZWfjKzQHsvWdv9ghTiN72ALFy2k7GZIItc8B3Z5VPgVcXN4QwE543WLokVjT3cI%2FrgLNcpxG0bWpTz4NhMbIK8hP6oZ1B8YC603W7cSu7forY49RwGNznAp0VHRTCQTTVCeIKec3IST1ceg9MqpHO21ngE0A%2FRj%2FZyxqTGxDompMfIcr5voZQmpyFJJ%2F4bGq9%2F6oQxkzRyeMOkuvTibOSwJzCsWq8Ph5TYD69pMW%2Fil2HJlKzWHX0ca45FB75A7mdPKx9AccO5s36Uq620TQIgwcDmeVFPO6Bup57U1WONYCznI8N%2BzVvHl0xJUfxiM%2FiYCIZ6XfYmJYkHTwDiWiQzYm8RPV5EHTZ%2FPgQz6rsCrE1D6WB3x2CimPDLsSB7TrtL6tXzI2kHn3BfPfzsqZN7An%2FchXFpb0jsbwfaVg%2BXPlav%2FU34RyqE%2BFBJnkPrkjqPVNX%2F6p8PHt2yzWFCCN6MoZp5gN10lgq%2FNLtQC07XJyR8wXGgCkTwrLOJiMTn31SyuRT%2BW%2Fqv6yDk1HYgRYTnDNWOr3kLV1b7wX3MHh2L7bmbLLauC2IuiKjF%2BqR4e230df%2B7gY5ZPzmzQDpZCXN%2F4h%2FxoESgmVcd6MH8yTHAuHzu9DXhTC2tPbBBjqkASTifeCckzzIiaf%2BlH%2FFFZ7Wie8ijun6ZO5Qv1hHKFuMsyq4EufG%2BlXWTHt7OuEqI0A6%2BRLZHcHF8eZqSlTNLrkTQzNxjJ93BJJ62zmSB7tpdUIwA34uIQ0K4%2BN5SlQancOEJ8AowqZcN6v5j5OIDWG5p5cNDlmaXzuBJZoPu0SVxLoF6P4o5c1v2hVBaRYf%2BMAtmrRv%2B9CriKhPu9j56SuA%2Fjv2&X-Amz-Signature=409d1745dbd224bc757e596a0a3a4dda15d36009de4dcf416c2e2163d501de67&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCIDQFU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCAZdmFjpNTBn0GKsEuZmyP3X8S7bE23giVO7kmHgdC7gIhAP6%2BmMgZ3%2FBz4T6lp7FP1uDqYNijvTftYiiNo1QsuY0WKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B9ZSULGytwrxotE8q3AMLDP1YyLtZWfjKzQHsvWdv9ghTiN72ALFy2k7GZIItc8B3Z5VPgVcXN4QwE543WLokVjT3cI%2FrgLNcpxG0bWpTz4NhMbIK8hP6oZ1B8YC603W7cSu7forY49RwGNznAp0VHRTCQTTVCeIKec3IST1ceg9MqpHO21ngE0A%2FRj%2FZyxqTGxDompMfIcr5voZQmpyFJJ%2F4bGq9%2F6oQxkzRyeMOkuvTibOSwJzCsWq8Ph5TYD69pMW%2Fil2HJlKzWHX0ca45FB75A7mdPKx9AccO5s36Uq620TQIgwcDmeVFPO6Bup57U1WONYCznI8N%2BzVvHl0xJUfxiM%2FiYCIZ6XfYmJYkHTwDiWiQzYm8RPV5EHTZ%2FPgQz6rsCrE1D6WB3x2CimPDLsSB7TrtL6tXzI2kHn3BfPfzsqZN7An%2FchXFpb0jsbwfaVg%2BXPlav%2FU34RyqE%2BFBJnkPrkjqPVNX%2F6p8PHt2yzWFCCN6MoZp5gN10lgq%2FNLtQC07XJyR8wXGgCkTwrLOJiMTn31SyuRT%2BW%2Fqv6yDk1HYgRYTnDNWOr3kLV1b7wX3MHh2L7bmbLLauC2IuiKjF%2BqR4e230df%2B7gY5ZPzmzQDpZCXN%2F4h%2FxoESgmVcd6MH8yTHAuHzu9DXhTC2tPbBBjqkASTifeCckzzIiaf%2BlH%2FFFZ7Wie8ijun6ZO5Qv1hHKFuMsyq4EufG%2BlXWTHt7OuEqI0A6%2BRLZHcHF8eZqSlTNLrkTQzNxjJ93BJJ62zmSB7tpdUIwA34uIQ0K4%2BN5SlQancOEJ8AowqZcN6v5j5OIDWG5p5cNDlmaXzuBJZoPu0SVxLoF6P4o5c1v2hVBaRYf%2BMAtmrRv%2B9CriKhPu9j56SuA%2Fjv2&X-Amz-Signature=d24ebf3a2f190dc95ef5721d8e9ef7807513b51e66a6be482ceeb0262438c6bb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCIDQFU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCAZdmFjpNTBn0GKsEuZmyP3X8S7bE23giVO7kmHgdC7gIhAP6%2BmMgZ3%2FBz4T6lp7FP1uDqYNijvTftYiiNo1QsuY0WKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B9ZSULGytwrxotE8q3AMLDP1YyLtZWfjKzQHsvWdv9ghTiN72ALFy2k7GZIItc8B3Z5VPgVcXN4QwE543WLokVjT3cI%2FrgLNcpxG0bWpTz4NhMbIK8hP6oZ1B8YC603W7cSu7forY49RwGNznAp0VHRTCQTTVCeIKec3IST1ceg9MqpHO21ngE0A%2FRj%2FZyxqTGxDompMfIcr5voZQmpyFJJ%2F4bGq9%2F6oQxkzRyeMOkuvTibOSwJzCsWq8Ph5TYD69pMW%2Fil2HJlKzWHX0ca45FB75A7mdPKx9AccO5s36Uq620TQIgwcDmeVFPO6Bup57U1WONYCznI8N%2BzVvHl0xJUfxiM%2FiYCIZ6XfYmJYkHTwDiWiQzYm8RPV5EHTZ%2FPgQz6rsCrE1D6WB3x2CimPDLsSB7TrtL6tXzI2kHn3BfPfzsqZN7An%2FchXFpb0jsbwfaVg%2BXPlav%2FU34RyqE%2BFBJnkPrkjqPVNX%2F6p8PHt2yzWFCCN6MoZp5gN10lgq%2FNLtQC07XJyR8wXGgCkTwrLOJiMTn31SyuRT%2BW%2Fqv6yDk1HYgRYTnDNWOr3kLV1b7wX3MHh2L7bmbLLauC2IuiKjF%2BqR4e230df%2B7gY5ZPzmzQDpZCXN%2F4h%2FxoESgmVcd6MH8yTHAuHzu9DXhTC2tPbBBjqkASTifeCckzzIiaf%2BlH%2FFFZ7Wie8ijun6ZO5Qv1hHKFuMsyq4EufG%2BlXWTHt7OuEqI0A6%2BRLZHcHF8eZqSlTNLrkTQzNxjJ93BJJ62zmSB7tpdUIwA34uIQ0K4%2BN5SlQancOEJ8AowqZcN6v5j5OIDWG5p5cNDlmaXzuBJZoPu0SVxLoF6P4o5c1v2hVBaRYf%2BMAtmrRv%2B9CriKhPu9j56SuA%2Fjv2&X-Amz-Signature=ec09c1505076be6fcf2394fa3674c1b6c850b801741271ca2b8c1f709ee264e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCIDQFU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCAZdmFjpNTBn0GKsEuZmyP3X8S7bE23giVO7kmHgdC7gIhAP6%2BmMgZ3%2FBz4T6lp7FP1uDqYNijvTftYiiNo1QsuY0WKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B9ZSULGytwrxotE8q3AMLDP1YyLtZWfjKzQHsvWdv9ghTiN72ALFy2k7GZIItc8B3Z5VPgVcXN4QwE543WLokVjT3cI%2FrgLNcpxG0bWpTz4NhMbIK8hP6oZ1B8YC603W7cSu7forY49RwGNznAp0VHRTCQTTVCeIKec3IST1ceg9MqpHO21ngE0A%2FRj%2FZyxqTGxDompMfIcr5voZQmpyFJJ%2F4bGq9%2F6oQxkzRyeMOkuvTibOSwJzCsWq8Ph5TYD69pMW%2Fil2HJlKzWHX0ca45FB75A7mdPKx9AccO5s36Uq620TQIgwcDmeVFPO6Bup57U1WONYCznI8N%2BzVvHl0xJUfxiM%2FiYCIZ6XfYmJYkHTwDiWiQzYm8RPV5EHTZ%2FPgQz6rsCrE1D6WB3x2CimPDLsSB7TrtL6tXzI2kHn3BfPfzsqZN7An%2FchXFpb0jsbwfaVg%2BXPlav%2FU34RyqE%2BFBJnkPrkjqPVNX%2F6p8PHt2yzWFCCN6MoZp5gN10lgq%2FNLtQC07XJyR8wXGgCkTwrLOJiMTn31SyuRT%2BW%2Fqv6yDk1HYgRYTnDNWOr3kLV1b7wX3MHh2L7bmbLLauC2IuiKjF%2BqR4e230df%2B7gY5ZPzmzQDpZCXN%2F4h%2FxoESgmVcd6MH8yTHAuHzu9DXhTC2tPbBBjqkASTifeCckzzIiaf%2BlH%2FFFZ7Wie8ijun6ZO5Qv1hHKFuMsyq4EufG%2BlXWTHt7OuEqI0A6%2BRLZHcHF8eZqSlTNLrkTQzNxjJ93BJJ62zmSB7tpdUIwA34uIQ0K4%2BN5SlQancOEJ8AowqZcN6v5j5OIDWG5p5cNDlmaXzuBJZoPu0SVxLoF6P4o5c1v2hVBaRYf%2BMAtmrRv%2B9CriKhPu9j56SuA%2Fjv2&X-Amz-Signature=4ae9c42493735ad2d15dbed670df50d3c3477517741ed5667668fd5ff809a3ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCIDQFU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCAZdmFjpNTBn0GKsEuZmyP3X8S7bE23giVO7kmHgdC7gIhAP6%2BmMgZ3%2FBz4T6lp7FP1uDqYNijvTftYiiNo1QsuY0WKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B9ZSULGytwrxotE8q3AMLDP1YyLtZWfjKzQHsvWdv9ghTiN72ALFy2k7GZIItc8B3Z5VPgVcXN4QwE543WLokVjT3cI%2FrgLNcpxG0bWpTz4NhMbIK8hP6oZ1B8YC603W7cSu7forY49RwGNznAp0VHRTCQTTVCeIKec3IST1ceg9MqpHO21ngE0A%2FRj%2FZyxqTGxDompMfIcr5voZQmpyFJJ%2F4bGq9%2F6oQxkzRyeMOkuvTibOSwJzCsWq8Ph5TYD69pMW%2Fil2HJlKzWHX0ca45FB75A7mdPKx9AccO5s36Uq620TQIgwcDmeVFPO6Bup57U1WONYCznI8N%2BzVvHl0xJUfxiM%2FiYCIZ6XfYmJYkHTwDiWiQzYm8RPV5EHTZ%2FPgQz6rsCrE1D6WB3x2CimPDLsSB7TrtL6tXzI2kHn3BfPfzsqZN7An%2FchXFpb0jsbwfaVg%2BXPlav%2FU34RyqE%2BFBJnkPrkjqPVNX%2F6p8PHt2yzWFCCN6MoZp5gN10lgq%2FNLtQC07XJyR8wXGgCkTwrLOJiMTn31SyuRT%2BW%2Fqv6yDk1HYgRYTnDNWOr3kLV1b7wX3MHh2L7bmbLLauC2IuiKjF%2BqR4e230df%2B7gY5ZPzmzQDpZCXN%2F4h%2FxoESgmVcd6MH8yTHAuHzu9DXhTC2tPbBBjqkASTifeCckzzIiaf%2BlH%2FFFZ7Wie8ijun6ZO5Qv1hHKFuMsyq4EufG%2BlXWTHt7OuEqI0A6%2BRLZHcHF8eZqSlTNLrkTQzNxjJ93BJJ62zmSB7tpdUIwA34uIQ0K4%2BN5SlQancOEJ8AowqZcN6v5j5OIDWG5p5cNDlmaXzuBJZoPu0SVxLoF6P4o5c1v2hVBaRYf%2BMAtmrRv%2B9CriKhPu9j56SuA%2Fjv2&X-Amz-Signature=3d92ee17f1cece33ff95c86d0860089c0e8e7a0a632b1c631b2b6228fdc41855&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
