---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QZ54ACD%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFsxab7RMqTZzXFDB%2Fao9CQd0iQgAIQyYkVVNCGVG8wZAiAdMFKRtoyu5rSIAbgE9UXvjPhbRHfPJvbrGvWgsNUxHSr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMLYGpkpTIwfpp31x9KtwDgC7qqIHUyR0RJaeuHqVN%2BUnf3YfTzhMZ8DuEwwjqdifh9ZOiNBqiVLKLBQ6a%2FWLuqLGZabKyGx4DqMzHPkAk0bLEEUOuvK3SgReyFu6oojwuTOucmDORVOshEa4sHLV1rdV%2BO81PHsqWYRZ8xGlhRS5ptuSo4IKiBuIxQNdTiHrfKDUeVUT9OMCZO3MJJMBnZ8NXWisXuG9yXJfbIui0sTJdryI%2FPFmFxkGKtmInatzHTVqTcOWicg%2BBNQg%2Bz4mJOKp1CJU1EJYXVmgZOUMPrlHeUT58Sh%2FdAE7fJFJTbhtI5d479PNidDVcHBhOMSg91xgTV%2FXMaFTEorl%2B3WTItd4p1MGwGrSD9bUtp5yHoPYukUUqu26GiLHnnXdO%2F3VwHuXU5K1wUmX7xw65HfRfB8TvMwVM93O0gD%2FH4fqbn2IG1KZZcbBd3h0E3csRA9pZMbvwbbV6ZNGNH804s0NrqpSqikMsEPecQGKZu9UZgefg5bsRG68Aj09H2%2F0y89%2FtjgP%2BpRCADMb4qofnBe6Wkg6Is%2BQowCGuogleI5Xb5WsR3gsB2oknhIYWjcrsee9qVFgC0xis3GZktdSywztKSG2cvYJmUCeIz8tTV1A%2BLJz5VtALPVCmw0Tseb4wgIOF0AY6pgFZG%2FE%2FE6WB%2BpSxdYOjtWqLJbvpyrs%2B4FC5HtMgfbCWSacBaD8Cer0gEjfkB4%2BiJXO7E2W%2FJBoIe4wS0t6P1lO%2FQK%2B2OjLeXf7PUmhyihKcE1u%2FjaABUqdgGWo5iGX%2BdseOJT49Pfy6%2BCKLUh3GtnSzCNf7G1MLbiclCf0aZu83gIAl3K3enaNWAp9YeORK9uuLd29zm7%2BxwvdwgBeCjq7qrJHeuPs%2F&X-Amz-Signature=a92832f6680524ebd0d9ac79000f5e12551ea26f4aa708220bd0b3b66e208195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QZ54ACD%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFsxab7RMqTZzXFDB%2Fao9CQd0iQgAIQyYkVVNCGVG8wZAiAdMFKRtoyu5rSIAbgE9UXvjPhbRHfPJvbrGvWgsNUxHSr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMLYGpkpTIwfpp31x9KtwDgC7qqIHUyR0RJaeuHqVN%2BUnf3YfTzhMZ8DuEwwjqdifh9ZOiNBqiVLKLBQ6a%2FWLuqLGZabKyGx4DqMzHPkAk0bLEEUOuvK3SgReyFu6oojwuTOucmDORVOshEa4sHLV1rdV%2BO81PHsqWYRZ8xGlhRS5ptuSo4IKiBuIxQNdTiHrfKDUeVUT9OMCZO3MJJMBnZ8NXWisXuG9yXJfbIui0sTJdryI%2FPFmFxkGKtmInatzHTVqTcOWicg%2BBNQg%2Bz4mJOKp1CJU1EJYXVmgZOUMPrlHeUT58Sh%2FdAE7fJFJTbhtI5d479PNidDVcHBhOMSg91xgTV%2FXMaFTEorl%2B3WTItd4p1MGwGrSD9bUtp5yHoPYukUUqu26GiLHnnXdO%2F3VwHuXU5K1wUmX7xw65HfRfB8TvMwVM93O0gD%2FH4fqbn2IG1KZZcbBd3h0E3csRA9pZMbvwbbV6ZNGNH804s0NrqpSqikMsEPecQGKZu9UZgefg5bsRG68Aj09H2%2F0y89%2FtjgP%2BpRCADMb4qofnBe6Wkg6Is%2BQowCGuogleI5Xb5WsR3gsB2oknhIYWjcrsee9qVFgC0xis3GZktdSywztKSG2cvYJmUCeIz8tTV1A%2BLJz5VtALPVCmw0Tseb4wgIOF0AY6pgFZG%2FE%2FE6WB%2BpSxdYOjtWqLJbvpyrs%2B4FC5HtMgfbCWSacBaD8Cer0gEjfkB4%2BiJXO7E2W%2FJBoIe4wS0t6P1lO%2FQK%2B2OjLeXf7PUmhyihKcE1u%2FjaABUqdgGWo5iGX%2BdseOJT49Pfy6%2BCKLUh3GtnSzCNf7G1MLbiclCf0aZu83gIAl3K3enaNWAp9YeORK9uuLd29zm7%2BxwvdwgBeCjq7qrJHeuPs%2F&X-Amz-Signature=6264e9882fa8c07d822ec2f3cb90be552927da9469222a7541b47f3a9ae23c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QZ54ACD%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFsxab7RMqTZzXFDB%2Fao9CQd0iQgAIQyYkVVNCGVG8wZAiAdMFKRtoyu5rSIAbgE9UXvjPhbRHfPJvbrGvWgsNUxHSr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMLYGpkpTIwfpp31x9KtwDgC7qqIHUyR0RJaeuHqVN%2BUnf3YfTzhMZ8DuEwwjqdifh9ZOiNBqiVLKLBQ6a%2FWLuqLGZabKyGx4DqMzHPkAk0bLEEUOuvK3SgReyFu6oojwuTOucmDORVOshEa4sHLV1rdV%2BO81PHsqWYRZ8xGlhRS5ptuSo4IKiBuIxQNdTiHrfKDUeVUT9OMCZO3MJJMBnZ8NXWisXuG9yXJfbIui0sTJdryI%2FPFmFxkGKtmInatzHTVqTcOWicg%2BBNQg%2Bz4mJOKp1CJU1EJYXVmgZOUMPrlHeUT58Sh%2FdAE7fJFJTbhtI5d479PNidDVcHBhOMSg91xgTV%2FXMaFTEorl%2B3WTItd4p1MGwGrSD9bUtp5yHoPYukUUqu26GiLHnnXdO%2F3VwHuXU5K1wUmX7xw65HfRfB8TvMwVM93O0gD%2FH4fqbn2IG1KZZcbBd3h0E3csRA9pZMbvwbbV6ZNGNH804s0NrqpSqikMsEPecQGKZu9UZgefg5bsRG68Aj09H2%2F0y89%2FtjgP%2BpRCADMb4qofnBe6Wkg6Is%2BQowCGuogleI5Xb5WsR3gsB2oknhIYWjcrsee9qVFgC0xis3GZktdSywztKSG2cvYJmUCeIz8tTV1A%2BLJz5VtALPVCmw0Tseb4wgIOF0AY6pgFZG%2FE%2FE6WB%2BpSxdYOjtWqLJbvpyrs%2B4FC5HtMgfbCWSacBaD8Cer0gEjfkB4%2BiJXO7E2W%2FJBoIe4wS0t6P1lO%2FQK%2B2OjLeXf7PUmhyihKcE1u%2FjaABUqdgGWo5iGX%2BdseOJT49Pfy6%2BCKLUh3GtnSzCNf7G1MLbiclCf0aZu83gIAl3K3enaNWAp9YeORK9uuLd29zm7%2BxwvdwgBeCjq7qrJHeuPs%2F&X-Amz-Signature=5172ddafb676f6fc05b91c254b7d5f8694284af3b8526e7a606959f03d60acf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QZ54ACD%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFsxab7RMqTZzXFDB%2Fao9CQd0iQgAIQyYkVVNCGVG8wZAiAdMFKRtoyu5rSIAbgE9UXvjPhbRHfPJvbrGvWgsNUxHSr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMLYGpkpTIwfpp31x9KtwDgC7qqIHUyR0RJaeuHqVN%2BUnf3YfTzhMZ8DuEwwjqdifh9ZOiNBqiVLKLBQ6a%2FWLuqLGZabKyGx4DqMzHPkAk0bLEEUOuvK3SgReyFu6oojwuTOucmDORVOshEa4sHLV1rdV%2BO81PHsqWYRZ8xGlhRS5ptuSo4IKiBuIxQNdTiHrfKDUeVUT9OMCZO3MJJMBnZ8NXWisXuG9yXJfbIui0sTJdryI%2FPFmFxkGKtmInatzHTVqTcOWicg%2BBNQg%2Bz4mJOKp1CJU1EJYXVmgZOUMPrlHeUT58Sh%2FdAE7fJFJTbhtI5d479PNidDVcHBhOMSg91xgTV%2FXMaFTEorl%2B3WTItd4p1MGwGrSD9bUtp5yHoPYukUUqu26GiLHnnXdO%2F3VwHuXU5K1wUmX7xw65HfRfB8TvMwVM93O0gD%2FH4fqbn2IG1KZZcbBd3h0E3csRA9pZMbvwbbV6ZNGNH804s0NrqpSqikMsEPecQGKZu9UZgefg5bsRG68Aj09H2%2F0y89%2FtjgP%2BpRCADMb4qofnBe6Wkg6Is%2BQowCGuogleI5Xb5WsR3gsB2oknhIYWjcrsee9qVFgC0xis3GZktdSywztKSG2cvYJmUCeIz8tTV1A%2BLJz5VtALPVCmw0Tseb4wgIOF0AY6pgFZG%2FE%2FE6WB%2BpSxdYOjtWqLJbvpyrs%2B4FC5HtMgfbCWSacBaD8Cer0gEjfkB4%2BiJXO7E2W%2FJBoIe4wS0t6P1lO%2FQK%2B2OjLeXf7PUmhyihKcE1u%2FjaABUqdgGWo5iGX%2BdseOJT49Pfy6%2BCKLUh3GtnSzCNf7G1MLbiclCf0aZu83gIAl3K3enaNWAp9YeORK9uuLd29zm7%2BxwvdwgBeCjq7qrJHeuPs%2F&X-Amz-Signature=0ade5bafac3e083bca83787ff9dcab5056ebbfcf6313b86f70182dc460713f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QZ54ACD%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFsxab7RMqTZzXFDB%2Fao9CQd0iQgAIQyYkVVNCGVG8wZAiAdMFKRtoyu5rSIAbgE9UXvjPhbRHfPJvbrGvWgsNUxHSr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMLYGpkpTIwfpp31x9KtwDgC7qqIHUyR0RJaeuHqVN%2BUnf3YfTzhMZ8DuEwwjqdifh9ZOiNBqiVLKLBQ6a%2FWLuqLGZabKyGx4DqMzHPkAk0bLEEUOuvK3SgReyFu6oojwuTOucmDORVOshEa4sHLV1rdV%2BO81PHsqWYRZ8xGlhRS5ptuSo4IKiBuIxQNdTiHrfKDUeVUT9OMCZO3MJJMBnZ8NXWisXuG9yXJfbIui0sTJdryI%2FPFmFxkGKtmInatzHTVqTcOWicg%2BBNQg%2Bz4mJOKp1CJU1EJYXVmgZOUMPrlHeUT58Sh%2FdAE7fJFJTbhtI5d479PNidDVcHBhOMSg91xgTV%2FXMaFTEorl%2B3WTItd4p1MGwGrSD9bUtp5yHoPYukUUqu26GiLHnnXdO%2F3VwHuXU5K1wUmX7xw65HfRfB8TvMwVM93O0gD%2FH4fqbn2IG1KZZcbBd3h0E3csRA9pZMbvwbbV6ZNGNH804s0NrqpSqikMsEPecQGKZu9UZgefg5bsRG68Aj09H2%2F0y89%2FtjgP%2BpRCADMb4qofnBe6Wkg6Is%2BQowCGuogleI5Xb5WsR3gsB2oknhIYWjcrsee9qVFgC0xis3GZktdSywztKSG2cvYJmUCeIz8tTV1A%2BLJz5VtALPVCmw0Tseb4wgIOF0AY6pgFZG%2FE%2FE6WB%2BpSxdYOjtWqLJbvpyrs%2B4FC5HtMgfbCWSacBaD8Cer0gEjfkB4%2BiJXO7E2W%2FJBoIe4wS0t6P1lO%2FQK%2B2OjLeXf7PUmhyihKcE1u%2FjaABUqdgGWo5iGX%2BdseOJT49Pfy6%2BCKLUh3GtnSzCNf7G1MLbiclCf0aZu83gIAl3K3enaNWAp9YeORK9uuLd29zm7%2BxwvdwgBeCjq7qrJHeuPs%2F&X-Amz-Signature=300a49ede2dd767efa6b2ffc5ab585c8addb6eabb937cf38b7fd40fd27738b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
