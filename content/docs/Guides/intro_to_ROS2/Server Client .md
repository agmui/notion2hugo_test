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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2GK2FOM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEag2g%2FTQI2zejO%2BsJBPGJ%2FttmKEIRKlLkIW2iE4L86wIgZe%2FnRE%2FxbuYwUEAun8Y7%2FVI11lUbBHYI3g%2Fen228iWIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVZ%2Bt7n1KeouXgkiSrcA7fka%2B9A9GR8LD334R1%2FwzDSS41uETDIpUFLdNRaKzbgWX5VHQdVNP2U60dUax%2F8GbQ6Iuna5V43uqzXd0ycu69Sjh9PwmeLVGj%2B9D9W8jZVJQ7usxwn%2Fabnucb4jiYqJ3NeI9HD8Aad7GvpwmxNz3b4Pypi2OHUeUOqUdPSBcSApoOkoKHgBnNrmwV72b%2FJ6aBVrttdkYpw5hKU4DLQ8FX86a2DL4UVkSk0%2F8h4Ply0sZKPeNCGgCu859eR0ZoiBbIKJNt7n2PvpOdmEyl60m8wcQz0%2Bje0L7estsYUt%2BAr3d7059f1GS42gdzbt7SA%2BT%2BxOuY9HhyDRKrHKLC%2F%2Fw7GhmRj6a0NDZStENi7VCxkLFXZahJdZ7opq%2FOtxDovTckzoM%2BQmqHu1Cysb46XjYP%2F%2FQFgl5YM8xPVZr6J95FA5fUKIMM6RUq4gDZ0o%2BS677NMsTQGB6kCQ%2B%2BiuM10Pl4oxBTsOUcitNlBkjp1CstcnsDe8FTSCBxSCmsx5c3nYASil8S17Zy75tV07RTeb7BbCkQK3OP1%2FY90CZzEMXO%2FhylRLGne0xHT3ITJ4URvEwPl8lvNPXYXjGFzhrJ%2FLpjoDDAJXFjaN7gqBUu8UKu7rSFKjKR1pU2sCzE7MPeyn8IGOqUB4h627C3VpPRm7KuG%2FwVBAN4mg6hsGJkF5kkvxaNNCocZJhBApWTVTkBYJcZMvQXCHz8Dno3tQFznheGKFNYEDwVDzzq4aayLGIcdH%2FJXIEmcJbno%2FNIemgU7yN92kkQ4tiKZ%2B5tQppzy%2Frz5m5qF3B0pSEeSmMILRJ%2FKzztKlu3ZBqFaFxdCiNnn%2FGoaM%2FvKC5f0MBrAYlL6WRLzTNvHs9Qja0R9&X-Amz-Signature=18e131c179cac74170cf92523852c36c51efab87518ce10087b4def4da9c92a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2GK2FOM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEag2g%2FTQI2zejO%2BsJBPGJ%2FttmKEIRKlLkIW2iE4L86wIgZe%2FnRE%2FxbuYwUEAun8Y7%2FVI11lUbBHYI3g%2Fen228iWIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVZ%2Bt7n1KeouXgkiSrcA7fka%2B9A9GR8LD334R1%2FwzDSS41uETDIpUFLdNRaKzbgWX5VHQdVNP2U60dUax%2F8GbQ6Iuna5V43uqzXd0ycu69Sjh9PwmeLVGj%2B9D9W8jZVJQ7usxwn%2Fabnucb4jiYqJ3NeI9HD8Aad7GvpwmxNz3b4Pypi2OHUeUOqUdPSBcSApoOkoKHgBnNrmwV72b%2FJ6aBVrttdkYpw5hKU4DLQ8FX86a2DL4UVkSk0%2F8h4Ply0sZKPeNCGgCu859eR0ZoiBbIKJNt7n2PvpOdmEyl60m8wcQz0%2Bje0L7estsYUt%2BAr3d7059f1GS42gdzbt7SA%2BT%2BxOuY9HhyDRKrHKLC%2F%2Fw7GhmRj6a0NDZStENi7VCxkLFXZahJdZ7opq%2FOtxDovTckzoM%2BQmqHu1Cysb46XjYP%2F%2FQFgl5YM8xPVZr6J95FA5fUKIMM6RUq4gDZ0o%2BS677NMsTQGB6kCQ%2B%2BiuM10Pl4oxBTsOUcitNlBkjp1CstcnsDe8FTSCBxSCmsx5c3nYASil8S17Zy75tV07RTeb7BbCkQK3OP1%2FY90CZzEMXO%2FhylRLGne0xHT3ITJ4URvEwPl8lvNPXYXjGFzhrJ%2FLpjoDDAJXFjaN7gqBUu8UKu7rSFKjKR1pU2sCzE7MPeyn8IGOqUB4h627C3VpPRm7KuG%2FwVBAN4mg6hsGJkF5kkvxaNNCocZJhBApWTVTkBYJcZMvQXCHz8Dno3tQFznheGKFNYEDwVDzzq4aayLGIcdH%2FJXIEmcJbno%2FNIemgU7yN92kkQ4tiKZ%2B5tQppzy%2Frz5m5qF3B0pSEeSmMILRJ%2FKzztKlu3ZBqFaFxdCiNnn%2FGoaM%2FvKC5f0MBrAYlL6WRLzTNvHs9Qja0R9&X-Amz-Signature=2a1a05ddc01bb9aa2b2aeaadb247a9094348aca97869eb10e9ac5177407343fa&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2GK2FOM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEag2g%2FTQI2zejO%2BsJBPGJ%2FttmKEIRKlLkIW2iE4L86wIgZe%2FnRE%2FxbuYwUEAun8Y7%2FVI11lUbBHYI3g%2Fen228iWIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVZ%2Bt7n1KeouXgkiSrcA7fka%2B9A9GR8LD334R1%2FwzDSS41uETDIpUFLdNRaKzbgWX5VHQdVNP2U60dUax%2F8GbQ6Iuna5V43uqzXd0ycu69Sjh9PwmeLVGj%2B9D9W8jZVJQ7usxwn%2Fabnucb4jiYqJ3NeI9HD8Aad7GvpwmxNz3b4Pypi2OHUeUOqUdPSBcSApoOkoKHgBnNrmwV72b%2FJ6aBVrttdkYpw5hKU4DLQ8FX86a2DL4UVkSk0%2F8h4Ply0sZKPeNCGgCu859eR0ZoiBbIKJNt7n2PvpOdmEyl60m8wcQz0%2Bje0L7estsYUt%2BAr3d7059f1GS42gdzbt7SA%2BT%2BxOuY9HhyDRKrHKLC%2F%2Fw7GhmRj6a0NDZStENi7VCxkLFXZahJdZ7opq%2FOtxDovTckzoM%2BQmqHu1Cysb46XjYP%2F%2FQFgl5YM8xPVZr6J95FA5fUKIMM6RUq4gDZ0o%2BS677NMsTQGB6kCQ%2B%2BiuM10Pl4oxBTsOUcitNlBkjp1CstcnsDe8FTSCBxSCmsx5c3nYASil8S17Zy75tV07RTeb7BbCkQK3OP1%2FY90CZzEMXO%2FhylRLGne0xHT3ITJ4URvEwPl8lvNPXYXjGFzhrJ%2FLpjoDDAJXFjaN7gqBUu8UKu7rSFKjKR1pU2sCzE7MPeyn8IGOqUB4h627C3VpPRm7KuG%2FwVBAN4mg6hsGJkF5kkvxaNNCocZJhBApWTVTkBYJcZMvQXCHz8Dno3tQFznheGKFNYEDwVDzzq4aayLGIcdH%2FJXIEmcJbno%2FNIemgU7yN92kkQ4tiKZ%2B5tQppzy%2Frz5m5qF3B0pSEeSmMILRJ%2FKzztKlu3ZBqFaFxdCiNnn%2FGoaM%2FvKC5f0MBrAYlL6WRLzTNvHs9Qja0R9&X-Amz-Signature=2febf7aa88e393d8ef4ad6ba16df4d7ba70ae2091afeb7acf5414f3d04a8e74b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2GK2FOM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEag2g%2FTQI2zejO%2BsJBPGJ%2FttmKEIRKlLkIW2iE4L86wIgZe%2FnRE%2FxbuYwUEAun8Y7%2FVI11lUbBHYI3g%2Fen228iWIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVZ%2Bt7n1KeouXgkiSrcA7fka%2B9A9GR8LD334R1%2FwzDSS41uETDIpUFLdNRaKzbgWX5VHQdVNP2U60dUax%2F8GbQ6Iuna5V43uqzXd0ycu69Sjh9PwmeLVGj%2B9D9W8jZVJQ7usxwn%2Fabnucb4jiYqJ3NeI9HD8Aad7GvpwmxNz3b4Pypi2OHUeUOqUdPSBcSApoOkoKHgBnNrmwV72b%2FJ6aBVrttdkYpw5hKU4DLQ8FX86a2DL4UVkSk0%2F8h4Ply0sZKPeNCGgCu859eR0ZoiBbIKJNt7n2PvpOdmEyl60m8wcQz0%2Bje0L7estsYUt%2BAr3d7059f1GS42gdzbt7SA%2BT%2BxOuY9HhyDRKrHKLC%2F%2Fw7GhmRj6a0NDZStENi7VCxkLFXZahJdZ7opq%2FOtxDovTckzoM%2BQmqHu1Cysb46XjYP%2F%2FQFgl5YM8xPVZr6J95FA5fUKIMM6RUq4gDZ0o%2BS677NMsTQGB6kCQ%2B%2BiuM10Pl4oxBTsOUcitNlBkjp1CstcnsDe8FTSCBxSCmsx5c3nYASil8S17Zy75tV07RTeb7BbCkQK3OP1%2FY90CZzEMXO%2FhylRLGne0xHT3ITJ4URvEwPl8lvNPXYXjGFzhrJ%2FLpjoDDAJXFjaN7gqBUu8UKu7rSFKjKR1pU2sCzE7MPeyn8IGOqUB4h627C3VpPRm7KuG%2FwVBAN4mg6hsGJkF5kkvxaNNCocZJhBApWTVTkBYJcZMvQXCHz8Dno3tQFznheGKFNYEDwVDzzq4aayLGIcdH%2FJXIEmcJbno%2FNIemgU7yN92kkQ4tiKZ%2B5tQppzy%2Frz5m5qF3B0pSEeSmMILRJ%2FKzztKlu3ZBqFaFxdCiNnn%2FGoaM%2FvKC5f0MBrAYlL6WRLzTNvHs9Qja0R9&X-Amz-Signature=2790ce080191e131f94e187402997f02bbf642e7e02707258299bbcc48a8da05&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2GK2FOM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEag2g%2FTQI2zejO%2BsJBPGJ%2FttmKEIRKlLkIW2iE4L86wIgZe%2FnRE%2FxbuYwUEAun8Y7%2FVI11lUbBHYI3g%2Fen228iWIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVZ%2Bt7n1KeouXgkiSrcA7fka%2B9A9GR8LD334R1%2FwzDSS41uETDIpUFLdNRaKzbgWX5VHQdVNP2U60dUax%2F8GbQ6Iuna5V43uqzXd0ycu69Sjh9PwmeLVGj%2B9D9W8jZVJQ7usxwn%2Fabnucb4jiYqJ3NeI9HD8Aad7GvpwmxNz3b4Pypi2OHUeUOqUdPSBcSApoOkoKHgBnNrmwV72b%2FJ6aBVrttdkYpw5hKU4DLQ8FX86a2DL4UVkSk0%2F8h4Ply0sZKPeNCGgCu859eR0ZoiBbIKJNt7n2PvpOdmEyl60m8wcQz0%2Bje0L7estsYUt%2BAr3d7059f1GS42gdzbt7SA%2BT%2BxOuY9HhyDRKrHKLC%2F%2Fw7GhmRj6a0NDZStENi7VCxkLFXZahJdZ7opq%2FOtxDovTckzoM%2BQmqHu1Cysb46XjYP%2F%2FQFgl5YM8xPVZr6J95FA5fUKIMM6RUq4gDZ0o%2BS677NMsTQGB6kCQ%2B%2BiuM10Pl4oxBTsOUcitNlBkjp1CstcnsDe8FTSCBxSCmsx5c3nYASil8S17Zy75tV07RTeb7BbCkQK3OP1%2FY90CZzEMXO%2FhylRLGne0xHT3ITJ4URvEwPl8lvNPXYXjGFzhrJ%2FLpjoDDAJXFjaN7gqBUu8UKu7rSFKjKR1pU2sCzE7MPeyn8IGOqUB4h627C3VpPRm7KuG%2FwVBAN4mg6hsGJkF5kkvxaNNCocZJhBApWTVTkBYJcZMvQXCHz8Dno3tQFznheGKFNYEDwVDzzq4aayLGIcdH%2FJXIEmcJbno%2FNIemgU7yN92kkQ4tiKZ%2B5tQppzy%2Frz5m5qF3B0pSEeSmMILRJ%2FKzztKlu3ZBqFaFxdCiNnn%2FGoaM%2FvKC5f0MBrAYlL6WRLzTNvHs9Qja0R9&X-Amz-Signature=bcfac368ad6ae7584f9f32bf1de5604114d66ca3ee78d91bb966e61800b0fd13&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
