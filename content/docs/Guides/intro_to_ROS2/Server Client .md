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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DKLF7C6%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDUr%2BJGtgnaiPbxCQh%2BvYRlgFq6CnTYgt%2B16g0GZJt4wAiAHVrJhPOav68AoKFQIU4Wl3kunx7r4xwqokOlN8UK%2FyCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM8tg7Q55%2B2TawyEhMKtwDIclurvAJXIubw6xc6UqDpKr4i0Oo7iXZNjTHBbIRhvr8xTs5rNmdoPbWcMZbEcnasZfno7mTa2BW2cMTENbU3lQFoCbtwCGLESlwp%2Bjy9r9uAFwwKlQ959UDOHiIPfPxRSBB6PJ71xi%2BFHSWUiOScJ%2BFTL1JY4HLsOh1EJnvETQJ7uAqm9%2BmWpMXd7%2BfbPDZELfFALHaK5VcEH9VlAZ%2Fyq3tVyHMFRidk8qnnc4sIVtoEIQU0k3poL0v947gCwrxmV2tA7P1fsZXYM3YAhO1t3atVrbQBF3nR4B2irdCPpFH3jE2PtsVLiklep1VuGY7gPzSWXpmKxQ9fWZheO1Y7uzHYxzO1UXuCRe3r3SVJ7SxGVa7U3nNAegD38aynukfYNEFS%2B0hDncnGO2NIaDIrv1tYOY3Z2pw4jmUvHb%2FHi11pfUNFh1WrL9Pks6c8JCyB%2FkE6G%2FWZVuaMLo5TaEdJgzQf6ku6XL2LA%2F0JAC2oyS07n%2BoedLtJdpTOjvYzE1j2ge81vcSh9%2F2BrOpamP4hOsxb%2BhHGnh3r6w3ra7MSpXkGJQNgIePhj2pd08hFqsmGX1hTDCTY2K29SXStst3HLCKZJ%2FVA%2F%2Bro3wrLD6KcLcce6Eh5j6EHi6xbPkwiYeCwgY6pgEb9vU8wQZsg6aC0o7FBAPu273YXFFO%2ByNzhDUiGsMn%2FuKc0%2Bz5ySsoXlOmiAuKe%2FZmgws88orcFrk0vjiPsf%2FAGf14Wf0buIJ%2B8o3U%2Bg6VIES3jY4%2BTO2F%2Fy3QuNzgqPPsTJphlCsnwN%2F8SZtic0YEkJa3FamTSRdCX9Q33dPZrQbU5P36GR0VOc%2BqO%2FcvddoMcAIpwfxGv2EQ7PAFaNeQyE8STegH&X-Amz-Signature=8a59acb0157c3e8b837d84f3dbd919e47c9ca464ca19482f10ab5db09b9eb9fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DKLF7C6%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDUr%2BJGtgnaiPbxCQh%2BvYRlgFq6CnTYgt%2B16g0GZJt4wAiAHVrJhPOav68AoKFQIU4Wl3kunx7r4xwqokOlN8UK%2FyCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM8tg7Q55%2B2TawyEhMKtwDIclurvAJXIubw6xc6UqDpKr4i0Oo7iXZNjTHBbIRhvr8xTs5rNmdoPbWcMZbEcnasZfno7mTa2BW2cMTENbU3lQFoCbtwCGLESlwp%2Bjy9r9uAFwwKlQ959UDOHiIPfPxRSBB6PJ71xi%2BFHSWUiOScJ%2BFTL1JY4HLsOh1EJnvETQJ7uAqm9%2BmWpMXd7%2BfbPDZELfFALHaK5VcEH9VlAZ%2Fyq3tVyHMFRidk8qnnc4sIVtoEIQU0k3poL0v947gCwrxmV2tA7P1fsZXYM3YAhO1t3atVrbQBF3nR4B2irdCPpFH3jE2PtsVLiklep1VuGY7gPzSWXpmKxQ9fWZheO1Y7uzHYxzO1UXuCRe3r3SVJ7SxGVa7U3nNAegD38aynukfYNEFS%2B0hDncnGO2NIaDIrv1tYOY3Z2pw4jmUvHb%2FHi11pfUNFh1WrL9Pks6c8JCyB%2FkE6G%2FWZVuaMLo5TaEdJgzQf6ku6XL2LA%2F0JAC2oyS07n%2BoedLtJdpTOjvYzE1j2ge81vcSh9%2F2BrOpamP4hOsxb%2BhHGnh3r6w3ra7MSpXkGJQNgIePhj2pd08hFqsmGX1hTDCTY2K29SXStst3HLCKZJ%2FVA%2F%2Bro3wrLD6KcLcce6Eh5j6EHi6xbPkwiYeCwgY6pgEb9vU8wQZsg6aC0o7FBAPu273YXFFO%2ByNzhDUiGsMn%2FuKc0%2Bz5ySsoXlOmiAuKe%2FZmgws88orcFrk0vjiPsf%2FAGf14Wf0buIJ%2B8o3U%2Bg6VIES3jY4%2BTO2F%2Fy3QuNzgqPPsTJphlCsnwN%2F8SZtic0YEkJa3FamTSRdCX9Q33dPZrQbU5P36GR0VOc%2BqO%2FcvddoMcAIpwfxGv2EQ7PAFaNeQyE8STegH&X-Amz-Signature=7040dc13069a382184f2cd54d350fda97108884d033457a613109ca083e62fe9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DKLF7C6%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDUr%2BJGtgnaiPbxCQh%2BvYRlgFq6CnTYgt%2B16g0GZJt4wAiAHVrJhPOav68AoKFQIU4Wl3kunx7r4xwqokOlN8UK%2FyCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM8tg7Q55%2B2TawyEhMKtwDIclurvAJXIubw6xc6UqDpKr4i0Oo7iXZNjTHBbIRhvr8xTs5rNmdoPbWcMZbEcnasZfno7mTa2BW2cMTENbU3lQFoCbtwCGLESlwp%2Bjy9r9uAFwwKlQ959UDOHiIPfPxRSBB6PJ71xi%2BFHSWUiOScJ%2BFTL1JY4HLsOh1EJnvETQJ7uAqm9%2BmWpMXd7%2BfbPDZELfFALHaK5VcEH9VlAZ%2Fyq3tVyHMFRidk8qnnc4sIVtoEIQU0k3poL0v947gCwrxmV2tA7P1fsZXYM3YAhO1t3atVrbQBF3nR4B2irdCPpFH3jE2PtsVLiklep1VuGY7gPzSWXpmKxQ9fWZheO1Y7uzHYxzO1UXuCRe3r3SVJ7SxGVa7U3nNAegD38aynukfYNEFS%2B0hDncnGO2NIaDIrv1tYOY3Z2pw4jmUvHb%2FHi11pfUNFh1WrL9Pks6c8JCyB%2FkE6G%2FWZVuaMLo5TaEdJgzQf6ku6XL2LA%2F0JAC2oyS07n%2BoedLtJdpTOjvYzE1j2ge81vcSh9%2F2BrOpamP4hOsxb%2BhHGnh3r6w3ra7MSpXkGJQNgIePhj2pd08hFqsmGX1hTDCTY2K29SXStst3HLCKZJ%2FVA%2F%2Bro3wrLD6KcLcce6Eh5j6EHi6xbPkwiYeCwgY6pgEb9vU8wQZsg6aC0o7FBAPu273YXFFO%2ByNzhDUiGsMn%2FuKc0%2Bz5ySsoXlOmiAuKe%2FZmgws88orcFrk0vjiPsf%2FAGf14Wf0buIJ%2B8o3U%2Bg6VIES3jY4%2BTO2F%2Fy3QuNzgqPPsTJphlCsnwN%2F8SZtic0YEkJa3FamTSRdCX9Q33dPZrQbU5P36GR0VOc%2BqO%2FcvddoMcAIpwfxGv2EQ7PAFaNeQyE8STegH&X-Amz-Signature=a6c79076e5c346f6335bb96ca5b46f661ede5f4bd896accd30d4695a40ad5ed5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DKLF7C6%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDUr%2BJGtgnaiPbxCQh%2BvYRlgFq6CnTYgt%2B16g0GZJt4wAiAHVrJhPOav68AoKFQIU4Wl3kunx7r4xwqokOlN8UK%2FyCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM8tg7Q55%2B2TawyEhMKtwDIclurvAJXIubw6xc6UqDpKr4i0Oo7iXZNjTHBbIRhvr8xTs5rNmdoPbWcMZbEcnasZfno7mTa2BW2cMTENbU3lQFoCbtwCGLESlwp%2Bjy9r9uAFwwKlQ959UDOHiIPfPxRSBB6PJ71xi%2BFHSWUiOScJ%2BFTL1JY4HLsOh1EJnvETQJ7uAqm9%2BmWpMXd7%2BfbPDZELfFALHaK5VcEH9VlAZ%2Fyq3tVyHMFRidk8qnnc4sIVtoEIQU0k3poL0v947gCwrxmV2tA7P1fsZXYM3YAhO1t3atVrbQBF3nR4B2irdCPpFH3jE2PtsVLiklep1VuGY7gPzSWXpmKxQ9fWZheO1Y7uzHYxzO1UXuCRe3r3SVJ7SxGVa7U3nNAegD38aynukfYNEFS%2B0hDncnGO2NIaDIrv1tYOY3Z2pw4jmUvHb%2FHi11pfUNFh1WrL9Pks6c8JCyB%2FkE6G%2FWZVuaMLo5TaEdJgzQf6ku6XL2LA%2F0JAC2oyS07n%2BoedLtJdpTOjvYzE1j2ge81vcSh9%2F2BrOpamP4hOsxb%2BhHGnh3r6w3ra7MSpXkGJQNgIePhj2pd08hFqsmGX1hTDCTY2K29SXStst3HLCKZJ%2FVA%2F%2Bro3wrLD6KcLcce6Eh5j6EHi6xbPkwiYeCwgY6pgEb9vU8wQZsg6aC0o7FBAPu273YXFFO%2ByNzhDUiGsMn%2FuKc0%2Bz5ySsoXlOmiAuKe%2FZmgws88orcFrk0vjiPsf%2FAGf14Wf0buIJ%2B8o3U%2Bg6VIES3jY4%2BTO2F%2Fy3QuNzgqPPsTJphlCsnwN%2F8SZtic0YEkJa3FamTSRdCX9Q33dPZrQbU5P36GR0VOc%2BqO%2FcvddoMcAIpwfxGv2EQ7PAFaNeQyE8STegH&X-Amz-Signature=d4efc3250539dee8b3db6107c9eaf20a88e92f79c47c9fc4eeee280299b2fae1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DKLF7C6%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDUr%2BJGtgnaiPbxCQh%2BvYRlgFq6CnTYgt%2B16g0GZJt4wAiAHVrJhPOav68AoKFQIU4Wl3kunx7r4xwqokOlN8UK%2FyCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM8tg7Q55%2B2TawyEhMKtwDIclurvAJXIubw6xc6UqDpKr4i0Oo7iXZNjTHBbIRhvr8xTs5rNmdoPbWcMZbEcnasZfno7mTa2BW2cMTENbU3lQFoCbtwCGLESlwp%2Bjy9r9uAFwwKlQ959UDOHiIPfPxRSBB6PJ71xi%2BFHSWUiOScJ%2BFTL1JY4HLsOh1EJnvETQJ7uAqm9%2BmWpMXd7%2BfbPDZELfFALHaK5VcEH9VlAZ%2Fyq3tVyHMFRidk8qnnc4sIVtoEIQU0k3poL0v947gCwrxmV2tA7P1fsZXYM3YAhO1t3atVrbQBF3nR4B2irdCPpFH3jE2PtsVLiklep1VuGY7gPzSWXpmKxQ9fWZheO1Y7uzHYxzO1UXuCRe3r3SVJ7SxGVa7U3nNAegD38aynukfYNEFS%2B0hDncnGO2NIaDIrv1tYOY3Z2pw4jmUvHb%2FHi11pfUNFh1WrL9Pks6c8JCyB%2FkE6G%2FWZVuaMLo5TaEdJgzQf6ku6XL2LA%2F0JAC2oyS07n%2BoedLtJdpTOjvYzE1j2ge81vcSh9%2F2BrOpamP4hOsxb%2BhHGnh3r6w3ra7MSpXkGJQNgIePhj2pd08hFqsmGX1hTDCTY2K29SXStst3HLCKZJ%2FVA%2F%2Bro3wrLD6KcLcce6Eh5j6EHi6xbPkwiYeCwgY6pgEb9vU8wQZsg6aC0o7FBAPu273YXFFO%2ByNzhDUiGsMn%2FuKc0%2Bz5ySsoXlOmiAuKe%2FZmgws88orcFrk0vjiPsf%2FAGf14Wf0buIJ%2B8o3U%2Bg6VIES3jY4%2BTO2F%2Fy3QuNzgqPPsTJphlCsnwN%2F8SZtic0YEkJa3FamTSRdCX9Q33dPZrQbU5P36GR0VOc%2BqO%2FcvddoMcAIpwfxGv2EQ7PAFaNeQyE8STegH&X-Amz-Signature=0f1186fc35d168c59cb2b6aee63dfce0a9ba393fe2b42448d0338247a62bfef7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
