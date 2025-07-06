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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z53UOPLI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIG%2BZmN91Nx1ylXNIFQmq9m4RdGVMkpKmAataFxVbvf9hAiBWwvNQHTHGMDY%2BeW8sdfWsgNBMgjLZaIGAA0oZIMexDir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM%2Bl5RODpW1Yq%2BV9gqKtwD7yKhtgeYGQqqfkw4Qh%2FMsp8Y09kNdVme3Wj8SlvwMXR4bk9VUvn%2FM4oF1UmEp4pP%2FyJsmleAW7bnASAVD%2BVEVMVKkJ4cvtkvIuQt6InA%2BTUsdYMOvtLDD2DnJQrFGu739LsjF30iMCnJh%2BgeoQDn4d80j6%2BNEcHOJfcoPdvTUDapn4zVOefIg5IbVw%2BTxU9PKGwdYKGITIT7MCd2nn60Hd68O8kLQAgVe3QzIFR2St3uqgRV9axpQ4otmPLyVMWawSmwoO%2BT8PJgbmbvj5EoQoXIHpOTm0qSHyVNZM%2B9aJyy%2BGXmV9x6zOh46Q%2FWmSnl4LcpjaE13ZtMyDioAEOuTQEj2iDXaSm5daSESEuMa%2BMdK3JrDZcGBP1JNdwCiZnhqaoriKqw9plLlkVE6QA2LaZ%2FmtL5eT3puYnOdaZG2COrr5r3eI84arELEy3LpnTZyKxxLysKjDq0bkFH%2B7gN50GJMNC7rl2%2B9dk%2FGbdmihT%2FgXMkP72ud%2FhTWpaR0kDQ2%2BnOp7H%2FdVObsicVpAEzSM08qEKnsNAvPZJbIGI53RDyXInMdmU4MMcqTT9Szf%2Bw5cY1zxi%2FL1LqWOJD4US%2B7rALYbfbpmg7i809SWEOWG7n1AfiZhXar83WkUEwidOpwwY6pgEgRxSpfy5uuZGfGe2GWnY0N%2BfQdMQ%2B1IFVhb%2Fw9NKfgDBzCwY%2F%2BwSgAB00nl%2F8hzTAvwBPzh7jCwv8nDEqRfYwq0sw%2BgHYieTmELSQ3zyJFrQOXswdc244snce2qyX8n6NdmyPnIdrLXIL6gyqYlihxTZWm1%2B0CK79ax75yPX6xRwvr71GSDl4U8R2uJ%2BCJWWokBbQeVp%2F8EJG%2FRzq06gZPD2klh%2F%2F&X-Amz-Signature=5f1ac03638ca60fff3470e5801c85c1e9bccd2f2a2580d52d01f1588304e4086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z53UOPLI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIG%2BZmN91Nx1ylXNIFQmq9m4RdGVMkpKmAataFxVbvf9hAiBWwvNQHTHGMDY%2BeW8sdfWsgNBMgjLZaIGAA0oZIMexDir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM%2Bl5RODpW1Yq%2BV9gqKtwD7yKhtgeYGQqqfkw4Qh%2FMsp8Y09kNdVme3Wj8SlvwMXR4bk9VUvn%2FM4oF1UmEp4pP%2FyJsmleAW7bnASAVD%2BVEVMVKkJ4cvtkvIuQt6InA%2BTUsdYMOvtLDD2DnJQrFGu739LsjF30iMCnJh%2BgeoQDn4d80j6%2BNEcHOJfcoPdvTUDapn4zVOefIg5IbVw%2BTxU9PKGwdYKGITIT7MCd2nn60Hd68O8kLQAgVe3QzIFR2St3uqgRV9axpQ4otmPLyVMWawSmwoO%2BT8PJgbmbvj5EoQoXIHpOTm0qSHyVNZM%2B9aJyy%2BGXmV9x6zOh46Q%2FWmSnl4LcpjaE13ZtMyDioAEOuTQEj2iDXaSm5daSESEuMa%2BMdK3JrDZcGBP1JNdwCiZnhqaoriKqw9plLlkVE6QA2LaZ%2FmtL5eT3puYnOdaZG2COrr5r3eI84arELEy3LpnTZyKxxLysKjDq0bkFH%2B7gN50GJMNC7rl2%2B9dk%2FGbdmihT%2FgXMkP72ud%2FhTWpaR0kDQ2%2BnOp7H%2FdVObsicVpAEzSM08qEKnsNAvPZJbIGI53RDyXInMdmU4MMcqTT9Szf%2Bw5cY1zxi%2FL1LqWOJD4US%2B7rALYbfbpmg7i809SWEOWG7n1AfiZhXar83WkUEwidOpwwY6pgEgRxSpfy5uuZGfGe2GWnY0N%2BfQdMQ%2B1IFVhb%2Fw9NKfgDBzCwY%2F%2BwSgAB00nl%2F8hzTAvwBPzh7jCwv8nDEqRfYwq0sw%2BgHYieTmELSQ3zyJFrQOXswdc244snce2qyX8n6NdmyPnIdrLXIL6gyqYlihxTZWm1%2B0CK79ax75yPX6xRwvr71GSDl4U8R2uJ%2BCJWWokBbQeVp%2F8EJG%2FRzq06gZPD2klh%2F%2F&X-Amz-Signature=9dc580c26a880b112a4fcdb9d5dbf65b356bfa2cfa89032594f13bf23c04791e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z53UOPLI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIG%2BZmN91Nx1ylXNIFQmq9m4RdGVMkpKmAataFxVbvf9hAiBWwvNQHTHGMDY%2BeW8sdfWsgNBMgjLZaIGAA0oZIMexDir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM%2Bl5RODpW1Yq%2BV9gqKtwD7yKhtgeYGQqqfkw4Qh%2FMsp8Y09kNdVme3Wj8SlvwMXR4bk9VUvn%2FM4oF1UmEp4pP%2FyJsmleAW7bnASAVD%2BVEVMVKkJ4cvtkvIuQt6InA%2BTUsdYMOvtLDD2DnJQrFGu739LsjF30iMCnJh%2BgeoQDn4d80j6%2BNEcHOJfcoPdvTUDapn4zVOefIg5IbVw%2BTxU9PKGwdYKGITIT7MCd2nn60Hd68O8kLQAgVe3QzIFR2St3uqgRV9axpQ4otmPLyVMWawSmwoO%2BT8PJgbmbvj5EoQoXIHpOTm0qSHyVNZM%2B9aJyy%2BGXmV9x6zOh46Q%2FWmSnl4LcpjaE13ZtMyDioAEOuTQEj2iDXaSm5daSESEuMa%2BMdK3JrDZcGBP1JNdwCiZnhqaoriKqw9plLlkVE6QA2LaZ%2FmtL5eT3puYnOdaZG2COrr5r3eI84arELEy3LpnTZyKxxLysKjDq0bkFH%2B7gN50GJMNC7rl2%2B9dk%2FGbdmihT%2FgXMkP72ud%2FhTWpaR0kDQ2%2BnOp7H%2FdVObsicVpAEzSM08qEKnsNAvPZJbIGI53RDyXInMdmU4MMcqTT9Szf%2Bw5cY1zxi%2FL1LqWOJD4US%2B7rALYbfbpmg7i809SWEOWG7n1AfiZhXar83WkUEwidOpwwY6pgEgRxSpfy5uuZGfGe2GWnY0N%2BfQdMQ%2B1IFVhb%2Fw9NKfgDBzCwY%2F%2BwSgAB00nl%2F8hzTAvwBPzh7jCwv8nDEqRfYwq0sw%2BgHYieTmELSQ3zyJFrQOXswdc244snce2qyX8n6NdmyPnIdrLXIL6gyqYlihxTZWm1%2B0CK79ax75yPX6xRwvr71GSDl4U8R2uJ%2BCJWWokBbQeVp%2F8EJG%2FRzq06gZPD2klh%2F%2F&X-Amz-Signature=51f7963a2c007081f2dfdb6b6cc52dbcd9a3a91580ed380cb48503011ec522b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z53UOPLI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIG%2BZmN91Nx1ylXNIFQmq9m4RdGVMkpKmAataFxVbvf9hAiBWwvNQHTHGMDY%2BeW8sdfWsgNBMgjLZaIGAA0oZIMexDir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM%2Bl5RODpW1Yq%2BV9gqKtwD7yKhtgeYGQqqfkw4Qh%2FMsp8Y09kNdVme3Wj8SlvwMXR4bk9VUvn%2FM4oF1UmEp4pP%2FyJsmleAW7bnASAVD%2BVEVMVKkJ4cvtkvIuQt6InA%2BTUsdYMOvtLDD2DnJQrFGu739LsjF30iMCnJh%2BgeoQDn4d80j6%2BNEcHOJfcoPdvTUDapn4zVOefIg5IbVw%2BTxU9PKGwdYKGITIT7MCd2nn60Hd68O8kLQAgVe3QzIFR2St3uqgRV9axpQ4otmPLyVMWawSmwoO%2BT8PJgbmbvj5EoQoXIHpOTm0qSHyVNZM%2B9aJyy%2BGXmV9x6zOh46Q%2FWmSnl4LcpjaE13ZtMyDioAEOuTQEj2iDXaSm5daSESEuMa%2BMdK3JrDZcGBP1JNdwCiZnhqaoriKqw9plLlkVE6QA2LaZ%2FmtL5eT3puYnOdaZG2COrr5r3eI84arELEy3LpnTZyKxxLysKjDq0bkFH%2B7gN50GJMNC7rl2%2B9dk%2FGbdmihT%2FgXMkP72ud%2FhTWpaR0kDQ2%2BnOp7H%2FdVObsicVpAEzSM08qEKnsNAvPZJbIGI53RDyXInMdmU4MMcqTT9Szf%2Bw5cY1zxi%2FL1LqWOJD4US%2B7rALYbfbpmg7i809SWEOWG7n1AfiZhXar83WkUEwidOpwwY6pgEgRxSpfy5uuZGfGe2GWnY0N%2BfQdMQ%2B1IFVhb%2Fw9NKfgDBzCwY%2F%2BwSgAB00nl%2F8hzTAvwBPzh7jCwv8nDEqRfYwq0sw%2BgHYieTmELSQ3zyJFrQOXswdc244snce2qyX8n6NdmyPnIdrLXIL6gyqYlihxTZWm1%2B0CK79ax75yPX6xRwvr71GSDl4U8R2uJ%2BCJWWokBbQeVp%2F8EJG%2FRzq06gZPD2klh%2F%2F&X-Amz-Signature=7fe076f6c9fed47fc6347f512e046112ffbb061caeb7c84cae211f01f536f035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z53UOPLI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIG%2BZmN91Nx1ylXNIFQmq9m4RdGVMkpKmAataFxVbvf9hAiBWwvNQHTHGMDY%2BeW8sdfWsgNBMgjLZaIGAA0oZIMexDir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM%2Bl5RODpW1Yq%2BV9gqKtwD7yKhtgeYGQqqfkw4Qh%2FMsp8Y09kNdVme3Wj8SlvwMXR4bk9VUvn%2FM4oF1UmEp4pP%2FyJsmleAW7bnASAVD%2BVEVMVKkJ4cvtkvIuQt6InA%2BTUsdYMOvtLDD2DnJQrFGu739LsjF30iMCnJh%2BgeoQDn4d80j6%2BNEcHOJfcoPdvTUDapn4zVOefIg5IbVw%2BTxU9PKGwdYKGITIT7MCd2nn60Hd68O8kLQAgVe3QzIFR2St3uqgRV9axpQ4otmPLyVMWawSmwoO%2BT8PJgbmbvj5EoQoXIHpOTm0qSHyVNZM%2B9aJyy%2BGXmV9x6zOh46Q%2FWmSnl4LcpjaE13ZtMyDioAEOuTQEj2iDXaSm5daSESEuMa%2BMdK3JrDZcGBP1JNdwCiZnhqaoriKqw9plLlkVE6QA2LaZ%2FmtL5eT3puYnOdaZG2COrr5r3eI84arELEy3LpnTZyKxxLysKjDq0bkFH%2B7gN50GJMNC7rl2%2B9dk%2FGbdmihT%2FgXMkP72ud%2FhTWpaR0kDQ2%2BnOp7H%2FdVObsicVpAEzSM08qEKnsNAvPZJbIGI53RDyXInMdmU4MMcqTT9Szf%2Bw5cY1zxi%2FL1LqWOJD4US%2B7rALYbfbpmg7i809SWEOWG7n1AfiZhXar83WkUEwidOpwwY6pgEgRxSpfy5uuZGfGe2GWnY0N%2BfQdMQ%2B1IFVhb%2Fw9NKfgDBzCwY%2F%2BwSgAB00nl%2F8hzTAvwBPzh7jCwv8nDEqRfYwq0sw%2BgHYieTmELSQ3zyJFrQOXswdc244snce2qyX8n6NdmyPnIdrLXIL6gyqYlihxTZWm1%2B0CK79ax75yPX6xRwvr71GSDl4U8R2uJ%2BCJWWokBbQeVp%2F8EJG%2FRzq06gZPD2klh%2F%2F&X-Amz-Signature=21199019e364650060e4533281e819f7aa410784d81ce8cc97678bf0af992acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
