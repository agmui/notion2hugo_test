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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLQTL3Q4%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2A2BX%2B8oMB0Ule0YmjlBSoYyz76k%2FDBkE2CaQMas1MAiBEmpU52e3iyjCero0AAaQePjd%2FnHRUElR6Bp6Y6jJn2Cr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMR0%2FquaYSWKx88exZKtwDm4%2FYhIzOKL6LTj2pJvygEt4G32Lv0jeshotriOR23EgtZ0BdT3BLg8ZCqCIBns5vIw5vTl5q3wKHhc%2FzA2XrvoWNovkEMJafy4Z1RTAlh6MP7hNx3cJy%2BZ6VqvEdS%2FVo4tMNvgjUOBvk%2Fhjb52C9Vr7PVjCyj%2FZRncRnB9eb9b6O5vM2KRLyK416GzAkC%2ByeX8PmIvEjN%2FZ8KAsdxsyrywU0Zq6pbzevMIn0JdgdE%2FDtcA4VSgSdm9p6%2FtbGQhcV7ILMWMd%2BAw%2BV686iru%2BN%2BGxoGkT%2B7lPYWX3I7nqUf%2Bll5Qd%2BE3SA%2BSAQl1tQ7bP9u6oo3hdxRjaGjSYuXEL%2BHNCqTR5I%2FwWoKLy5Yg5CPHsRnwpYMtfj4Ra5NGVmLb6%2Bai0mjDZes%2BzlUnlavF%2Fdz9N%2F0eynN6jROKJ%2F%2BoS61C3ubAsk%2BlvPKs6oyENEsil1Bcz8X7lo%2BPMMCl7o%2FevgcyODAA0Y%2BIB6ln19%2FI1mopQDjUVWxnRaRiW%2FLMsqpm%2BjLyRvGOTpgV9y7NqWUMLjMi98olEKbNAGxClbQF2%2FFqE%2B0PH%2BbLIIzk6oPIQlI3uhOKWH0hO2q%2BlnnyuqV%2FuLa8zQK2edM5oAALrlZW4Nuqi60q4R03thWkRlhLQw%2Br%2FzvwY6pgH0lZ0nx4xATa7pJSKshZCNYIbEdPe71%2FUkOzUzPr6yzoaaR2nMls0188CkOLBjwCnyq%2FLQa5kdh%2Bs9iX57JcUu%2BT6Fd9RLL7Msl%2FrkhJLCPaL9%2BPkDNQFJWt31iyAWFgVWTqSe5fqq52LFkQDgn%2F1KlLZEnHR5cQPifSAfyB1oOSzAq5t5wKrE5eWZz1fFZGKD0ywWgG6%2BPcNueD8cEs5qhUHQ2g5b&X-Amz-Signature=6ac27ce3c3d830a7c5f4e1c0d01b5ee15157ff321f2dcfc756b1ae8e865f654b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLQTL3Q4%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2A2BX%2B8oMB0Ule0YmjlBSoYyz76k%2FDBkE2CaQMas1MAiBEmpU52e3iyjCero0AAaQePjd%2FnHRUElR6Bp6Y6jJn2Cr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMR0%2FquaYSWKx88exZKtwDm4%2FYhIzOKL6LTj2pJvygEt4G32Lv0jeshotriOR23EgtZ0BdT3BLg8ZCqCIBns5vIw5vTl5q3wKHhc%2FzA2XrvoWNovkEMJafy4Z1RTAlh6MP7hNx3cJy%2BZ6VqvEdS%2FVo4tMNvgjUOBvk%2Fhjb52C9Vr7PVjCyj%2FZRncRnB9eb9b6O5vM2KRLyK416GzAkC%2ByeX8PmIvEjN%2FZ8KAsdxsyrywU0Zq6pbzevMIn0JdgdE%2FDtcA4VSgSdm9p6%2FtbGQhcV7ILMWMd%2BAw%2BV686iru%2BN%2BGxoGkT%2B7lPYWX3I7nqUf%2Bll5Qd%2BE3SA%2BSAQl1tQ7bP9u6oo3hdxRjaGjSYuXEL%2BHNCqTR5I%2FwWoKLy5Yg5CPHsRnwpYMtfj4Ra5NGVmLb6%2Bai0mjDZes%2BzlUnlavF%2Fdz9N%2F0eynN6jROKJ%2F%2BoS61C3ubAsk%2BlvPKs6oyENEsil1Bcz8X7lo%2BPMMCl7o%2FevgcyODAA0Y%2BIB6ln19%2FI1mopQDjUVWxnRaRiW%2FLMsqpm%2BjLyRvGOTpgV9y7NqWUMLjMi98olEKbNAGxClbQF2%2FFqE%2B0PH%2BbLIIzk6oPIQlI3uhOKWH0hO2q%2BlnnyuqV%2FuLa8zQK2edM5oAALrlZW4Nuqi60q4R03thWkRlhLQw%2Br%2FzvwY6pgH0lZ0nx4xATa7pJSKshZCNYIbEdPe71%2FUkOzUzPr6yzoaaR2nMls0188CkOLBjwCnyq%2FLQa5kdh%2Bs9iX57JcUu%2BT6Fd9RLL7Msl%2FrkhJLCPaL9%2BPkDNQFJWt31iyAWFgVWTqSe5fqq52LFkQDgn%2F1KlLZEnHR5cQPifSAfyB1oOSzAq5t5wKrE5eWZz1fFZGKD0ywWgG6%2BPcNueD8cEs5qhUHQ2g5b&X-Amz-Signature=9c634f2c0052cf2d835e1b9055540fada3f1246121b2fa8c549a10ff12298e21&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLQTL3Q4%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2A2BX%2B8oMB0Ule0YmjlBSoYyz76k%2FDBkE2CaQMas1MAiBEmpU52e3iyjCero0AAaQePjd%2FnHRUElR6Bp6Y6jJn2Cr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMR0%2FquaYSWKx88exZKtwDm4%2FYhIzOKL6LTj2pJvygEt4G32Lv0jeshotriOR23EgtZ0BdT3BLg8ZCqCIBns5vIw5vTl5q3wKHhc%2FzA2XrvoWNovkEMJafy4Z1RTAlh6MP7hNx3cJy%2BZ6VqvEdS%2FVo4tMNvgjUOBvk%2Fhjb52C9Vr7PVjCyj%2FZRncRnB9eb9b6O5vM2KRLyK416GzAkC%2ByeX8PmIvEjN%2FZ8KAsdxsyrywU0Zq6pbzevMIn0JdgdE%2FDtcA4VSgSdm9p6%2FtbGQhcV7ILMWMd%2BAw%2BV686iru%2BN%2BGxoGkT%2B7lPYWX3I7nqUf%2Bll5Qd%2BE3SA%2BSAQl1tQ7bP9u6oo3hdxRjaGjSYuXEL%2BHNCqTR5I%2FwWoKLy5Yg5CPHsRnwpYMtfj4Ra5NGVmLb6%2Bai0mjDZes%2BzlUnlavF%2Fdz9N%2F0eynN6jROKJ%2F%2BoS61C3ubAsk%2BlvPKs6oyENEsil1Bcz8X7lo%2BPMMCl7o%2FevgcyODAA0Y%2BIB6ln19%2FI1mopQDjUVWxnRaRiW%2FLMsqpm%2BjLyRvGOTpgV9y7NqWUMLjMi98olEKbNAGxClbQF2%2FFqE%2B0PH%2BbLIIzk6oPIQlI3uhOKWH0hO2q%2BlnnyuqV%2FuLa8zQK2edM5oAALrlZW4Nuqi60q4R03thWkRlhLQw%2Br%2FzvwY6pgH0lZ0nx4xATa7pJSKshZCNYIbEdPe71%2FUkOzUzPr6yzoaaR2nMls0188CkOLBjwCnyq%2FLQa5kdh%2Bs9iX57JcUu%2BT6Fd9RLL7Msl%2FrkhJLCPaL9%2BPkDNQFJWt31iyAWFgVWTqSe5fqq52LFkQDgn%2F1KlLZEnHR5cQPifSAfyB1oOSzAq5t5wKrE5eWZz1fFZGKD0ywWgG6%2BPcNueD8cEs5qhUHQ2g5b&X-Amz-Signature=d4cee9fe46f9642d6395444d3d8475955029915fad1239bc1d09422a17f1988d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLQTL3Q4%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2A2BX%2B8oMB0Ule0YmjlBSoYyz76k%2FDBkE2CaQMas1MAiBEmpU52e3iyjCero0AAaQePjd%2FnHRUElR6Bp6Y6jJn2Cr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMR0%2FquaYSWKx88exZKtwDm4%2FYhIzOKL6LTj2pJvygEt4G32Lv0jeshotriOR23EgtZ0BdT3BLg8ZCqCIBns5vIw5vTl5q3wKHhc%2FzA2XrvoWNovkEMJafy4Z1RTAlh6MP7hNx3cJy%2BZ6VqvEdS%2FVo4tMNvgjUOBvk%2Fhjb52C9Vr7PVjCyj%2FZRncRnB9eb9b6O5vM2KRLyK416GzAkC%2ByeX8PmIvEjN%2FZ8KAsdxsyrywU0Zq6pbzevMIn0JdgdE%2FDtcA4VSgSdm9p6%2FtbGQhcV7ILMWMd%2BAw%2BV686iru%2BN%2BGxoGkT%2B7lPYWX3I7nqUf%2Bll5Qd%2BE3SA%2BSAQl1tQ7bP9u6oo3hdxRjaGjSYuXEL%2BHNCqTR5I%2FwWoKLy5Yg5CPHsRnwpYMtfj4Ra5NGVmLb6%2Bai0mjDZes%2BzlUnlavF%2Fdz9N%2F0eynN6jROKJ%2F%2BoS61C3ubAsk%2BlvPKs6oyENEsil1Bcz8X7lo%2BPMMCl7o%2FevgcyODAA0Y%2BIB6ln19%2FI1mopQDjUVWxnRaRiW%2FLMsqpm%2BjLyRvGOTpgV9y7NqWUMLjMi98olEKbNAGxClbQF2%2FFqE%2B0PH%2BbLIIzk6oPIQlI3uhOKWH0hO2q%2BlnnyuqV%2FuLa8zQK2edM5oAALrlZW4Nuqi60q4R03thWkRlhLQw%2Br%2FzvwY6pgH0lZ0nx4xATa7pJSKshZCNYIbEdPe71%2FUkOzUzPr6yzoaaR2nMls0188CkOLBjwCnyq%2FLQa5kdh%2Bs9iX57JcUu%2BT6Fd9RLL7Msl%2FrkhJLCPaL9%2BPkDNQFJWt31iyAWFgVWTqSe5fqq52LFkQDgn%2F1KlLZEnHR5cQPifSAfyB1oOSzAq5t5wKrE5eWZz1fFZGKD0ywWgG6%2BPcNueD8cEs5qhUHQ2g5b&X-Amz-Signature=286c3ec1318e92c194e42622e6a7bc71d1a532a5c86bc3d0c8e2441b43d6faf8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLQTL3Q4%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2A2BX%2B8oMB0Ule0YmjlBSoYyz76k%2FDBkE2CaQMas1MAiBEmpU52e3iyjCero0AAaQePjd%2FnHRUElR6Bp6Y6jJn2Cr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMR0%2FquaYSWKx88exZKtwDm4%2FYhIzOKL6LTj2pJvygEt4G32Lv0jeshotriOR23EgtZ0BdT3BLg8ZCqCIBns5vIw5vTl5q3wKHhc%2FzA2XrvoWNovkEMJafy4Z1RTAlh6MP7hNx3cJy%2BZ6VqvEdS%2FVo4tMNvgjUOBvk%2Fhjb52C9Vr7PVjCyj%2FZRncRnB9eb9b6O5vM2KRLyK416GzAkC%2ByeX8PmIvEjN%2FZ8KAsdxsyrywU0Zq6pbzevMIn0JdgdE%2FDtcA4VSgSdm9p6%2FtbGQhcV7ILMWMd%2BAw%2BV686iru%2BN%2BGxoGkT%2B7lPYWX3I7nqUf%2Bll5Qd%2BE3SA%2BSAQl1tQ7bP9u6oo3hdxRjaGjSYuXEL%2BHNCqTR5I%2FwWoKLy5Yg5CPHsRnwpYMtfj4Ra5NGVmLb6%2Bai0mjDZes%2BzlUnlavF%2Fdz9N%2F0eynN6jROKJ%2F%2BoS61C3ubAsk%2BlvPKs6oyENEsil1Bcz8X7lo%2BPMMCl7o%2FevgcyODAA0Y%2BIB6ln19%2FI1mopQDjUVWxnRaRiW%2FLMsqpm%2BjLyRvGOTpgV9y7NqWUMLjMi98olEKbNAGxClbQF2%2FFqE%2B0PH%2BbLIIzk6oPIQlI3uhOKWH0hO2q%2BlnnyuqV%2FuLa8zQK2edM5oAALrlZW4Nuqi60q4R03thWkRlhLQw%2Br%2FzvwY6pgH0lZ0nx4xATa7pJSKshZCNYIbEdPe71%2FUkOzUzPr6yzoaaR2nMls0188CkOLBjwCnyq%2FLQa5kdh%2Bs9iX57JcUu%2BT6Fd9RLL7Msl%2FrkhJLCPaL9%2BPkDNQFJWt31iyAWFgVWTqSe5fqq52LFkQDgn%2F1KlLZEnHR5cQPifSAfyB1oOSzAq5t5wKrE5eWZz1fFZGKD0ywWgG6%2BPcNueD8cEs5qhUHQ2g5b&X-Amz-Signature=9172237039848dbd4d1b8feaaa0017df053832cb8cd1980554e8213fb87bde34&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
