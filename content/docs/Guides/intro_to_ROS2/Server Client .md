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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USJUONT%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIHOu%2FpoPBt%2FtHf9UFTP9KBJ2C2rtjhjKKF3V0cPcmC3aAiEAnMteS0pMMPhv%2BP8RWck38b0w95q7Se9MgaNFuXhhEawq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDM2WYe9FZL3yKCegaCrcA%2BMawewBO4bMyABrRSbKbaIA5L9TEPXnt06Fg2xwtKPrH4MV2cr1Pm1WhxoUPFvnCfQ7ZDDq2XYcjNxScrQHCminljflZpWH9TWsOmhPFnrouhmLszPKbvYRagzbII7xgjG5zrl0senifLMLARB7ZZnCGW79uU1dERpzxZeAWXv0muxP2%2F3HAMyDcRLxCj5upBPeotMtYvr2r0qspRlRQSjDyZ3Ss77OOhqjkQeqReUbRHa%2FxLJDsQ3huOdltKRX0NntWbJrV8n5KKd8g7QckxSFi2qZ%2FqqdLwwKuPPt%2BVVVj%2B09UFMkvChI%2B6tDh%2B7gh8nOVPYWlp9SqoQmDuORmq0LEUvN5adH0QO8XC2%2BrnjHCvXQIWQuY3f2IpLVUc4g3z0ytp6QhKRp5SGYUwuWqT0OJ5tkO74hEZfvjqpe12CFQ3uUlPLYTJ0eG8yC6QZz0tyRk0VvdULOQhjA1PJfkLi9vWcJhkOSUIxc4VcM2%2FM%2BLeyRio6EYAcxYBdKBKGEfopeE05POGGo4a0sNCjjor0Q2K9rgSsm3rI2uYWGS1xT3BGYdbDjdX7OdnIblIpeeJONXMnqVLwk9Z0YsWUVGEGGdtIcM37Z6pKio3kbhgOqOxLLmgM1%2BhL4vwznMLDcob8GOqUBs%2BqDC54KLdjauFNru0VABemjuvn%2FtMqAYUM9bm6QPBe1KHj%2B0ZRurT7pGPEF5%2FC0mkuKK3ZQTybMce09fo5Fvg6xDgcuShhtFEK0%2BR9O6lPvRYIWZObBnNxtbl%2BtlEjxwZLDjKFLOrfhXlZgYnhsvnRHlwIZwj25IlNPInFkFCij51U8ICSXnQAn6sQ9Y61WoIirS0yGFdintMMqb971IjiuFjeC&X-Amz-Signature=46f173f6312c8542e41f2d46e5e5c6316a63d449207f35d9c8a5c58d37f05a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USJUONT%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIHOu%2FpoPBt%2FtHf9UFTP9KBJ2C2rtjhjKKF3V0cPcmC3aAiEAnMteS0pMMPhv%2BP8RWck38b0w95q7Se9MgaNFuXhhEawq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDM2WYe9FZL3yKCegaCrcA%2BMawewBO4bMyABrRSbKbaIA5L9TEPXnt06Fg2xwtKPrH4MV2cr1Pm1WhxoUPFvnCfQ7ZDDq2XYcjNxScrQHCminljflZpWH9TWsOmhPFnrouhmLszPKbvYRagzbII7xgjG5zrl0senifLMLARB7ZZnCGW79uU1dERpzxZeAWXv0muxP2%2F3HAMyDcRLxCj5upBPeotMtYvr2r0qspRlRQSjDyZ3Ss77OOhqjkQeqReUbRHa%2FxLJDsQ3huOdltKRX0NntWbJrV8n5KKd8g7QckxSFi2qZ%2FqqdLwwKuPPt%2BVVVj%2B09UFMkvChI%2B6tDh%2B7gh8nOVPYWlp9SqoQmDuORmq0LEUvN5adH0QO8XC2%2BrnjHCvXQIWQuY3f2IpLVUc4g3z0ytp6QhKRp5SGYUwuWqT0OJ5tkO74hEZfvjqpe12CFQ3uUlPLYTJ0eG8yC6QZz0tyRk0VvdULOQhjA1PJfkLi9vWcJhkOSUIxc4VcM2%2FM%2BLeyRio6EYAcxYBdKBKGEfopeE05POGGo4a0sNCjjor0Q2K9rgSsm3rI2uYWGS1xT3BGYdbDjdX7OdnIblIpeeJONXMnqVLwk9Z0YsWUVGEGGdtIcM37Z6pKio3kbhgOqOxLLmgM1%2BhL4vwznMLDcob8GOqUBs%2BqDC54KLdjauFNru0VABemjuvn%2FtMqAYUM9bm6QPBe1KHj%2B0ZRurT7pGPEF5%2FC0mkuKK3ZQTybMce09fo5Fvg6xDgcuShhtFEK0%2BR9O6lPvRYIWZObBnNxtbl%2BtlEjxwZLDjKFLOrfhXlZgYnhsvnRHlwIZwj25IlNPInFkFCij51U8ICSXnQAn6sQ9Y61WoIirS0yGFdintMMqb971IjiuFjeC&X-Amz-Signature=0c5f8c721dbb6f0122a295e12d54c76484ee039d269de63ae1d2b583cb6d7747&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USJUONT%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIHOu%2FpoPBt%2FtHf9UFTP9KBJ2C2rtjhjKKF3V0cPcmC3aAiEAnMteS0pMMPhv%2BP8RWck38b0w95q7Se9MgaNFuXhhEawq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDM2WYe9FZL3yKCegaCrcA%2BMawewBO4bMyABrRSbKbaIA5L9TEPXnt06Fg2xwtKPrH4MV2cr1Pm1WhxoUPFvnCfQ7ZDDq2XYcjNxScrQHCminljflZpWH9TWsOmhPFnrouhmLszPKbvYRagzbII7xgjG5zrl0senifLMLARB7ZZnCGW79uU1dERpzxZeAWXv0muxP2%2F3HAMyDcRLxCj5upBPeotMtYvr2r0qspRlRQSjDyZ3Ss77OOhqjkQeqReUbRHa%2FxLJDsQ3huOdltKRX0NntWbJrV8n5KKd8g7QckxSFi2qZ%2FqqdLwwKuPPt%2BVVVj%2B09UFMkvChI%2B6tDh%2B7gh8nOVPYWlp9SqoQmDuORmq0LEUvN5adH0QO8XC2%2BrnjHCvXQIWQuY3f2IpLVUc4g3z0ytp6QhKRp5SGYUwuWqT0OJ5tkO74hEZfvjqpe12CFQ3uUlPLYTJ0eG8yC6QZz0tyRk0VvdULOQhjA1PJfkLi9vWcJhkOSUIxc4VcM2%2FM%2BLeyRio6EYAcxYBdKBKGEfopeE05POGGo4a0sNCjjor0Q2K9rgSsm3rI2uYWGS1xT3BGYdbDjdX7OdnIblIpeeJONXMnqVLwk9Z0YsWUVGEGGdtIcM37Z6pKio3kbhgOqOxLLmgM1%2BhL4vwznMLDcob8GOqUBs%2BqDC54KLdjauFNru0VABemjuvn%2FtMqAYUM9bm6QPBe1KHj%2B0ZRurT7pGPEF5%2FC0mkuKK3ZQTybMce09fo5Fvg6xDgcuShhtFEK0%2BR9O6lPvRYIWZObBnNxtbl%2BtlEjxwZLDjKFLOrfhXlZgYnhsvnRHlwIZwj25IlNPInFkFCij51U8ICSXnQAn6sQ9Y61WoIirS0yGFdintMMqb971IjiuFjeC&X-Amz-Signature=52c3314d4c10ba89966366c036105de44beae75f0757b2de4e8517686f327ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USJUONT%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIHOu%2FpoPBt%2FtHf9UFTP9KBJ2C2rtjhjKKF3V0cPcmC3aAiEAnMteS0pMMPhv%2BP8RWck38b0w95q7Se9MgaNFuXhhEawq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDM2WYe9FZL3yKCegaCrcA%2BMawewBO4bMyABrRSbKbaIA5L9TEPXnt06Fg2xwtKPrH4MV2cr1Pm1WhxoUPFvnCfQ7ZDDq2XYcjNxScrQHCminljflZpWH9TWsOmhPFnrouhmLszPKbvYRagzbII7xgjG5zrl0senifLMLARB7ZZnCGW79uU1dERpzxZeAWXv0muxP2%2F3HAMyDcRLxCj5upBPeotMtYvr2r0qspRlRQSjDyZ3Ss77OOhqjkQeqReUbRHa%2FxLJDsQ3huOdltKRX0NntWbJrV8n5KKd8g7QckxSFi2qZ%2FqqdLwwKuPPt%2BVVVj%2B09UFMkvChI%2B6tDh%2B7gh8nOVPYWlp9SqoQmDuORmq0LEUvN5adH0QO8XC2%2BrnjHCvXQIWQuY3f2IpLVUc4g3z0ytp6QhKRp5SGYUwuWqT0OJ5tkO74hEZfvjqpe12CFQ3uUlPLYTJ0eG8yC6QZz0tyRk0VvdULOQhjA1PJfkLi9vWcJhkOSUIxc4VcM2%2FM%2BLeyRio6EYAcxYBdKBKGEfopeE05POGGo4a0sNCjjor0Q2K9rgSsm3rI2uYWGS1xT3BGYdbDjdX7OdnIblIpeeJONXMnqVLwk9Z0YsWUVGEGGdtIcM37Z6pKio3kbhgOqOxLLmgM1%2BhL4vwznMLDcob8GOqUBs%2BqDC54KLdjauFNru0VABemjuvn%2FtMqAYUM9bm6QPBe1KHj%2B0ZRurT7pGPEF5%2FC0mkuKK3ZQTybMce09fo5Fvg6xDgcuShhtFEK0%2BR9O6lPvRYIWZObBnNxtbl%2BtlEjxwZLDjKFLOrfhXlZgYnhsvnRHlwIZwj25IlNPInFkFCij51U8ICSXnQAn6sQ9Y61WoIirS0yGFdintMMqb971IjiuFjeC&X-Amz-Signature=4e5e88c8fe6e374ff099c3edc8d4b6936c0d44a54565512694e8f49809172848&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USJUONT%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIHOu%2FpoPBt%2FtHf9UFTP9KBJ2C2rtjhjKKF3V0cPcmC3aAiEAnMteS0pMMPhv%2BP8RWck38b0w95q7Se9MgaNFuXhhEawq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDM2WYe9FZL3yKCegaCrcA%2BMawewBO4bMyABrRSbKbaIA5L9TEPXnt06Fg2xwtKPrH4MV2cr1Pm1WhxoUPFvnCfQ7ZDDq2XYcjNxScrQHCminljflZpWH9TWsOmhPFnrouhmLszPKbvYRagzbII7xgjG5zrl0senifLMLARB7ZZnCGW79uU1dERpzxZeAWXv0muxP2%2F3HAMyDcRLxCj5upBPeotMtYvr2r0qspRlRQSjDyZ3Ss77OOhqjkQeqReUbRHa%2FxLJDsQ3huOdltKRX0NntWbJrV8n5KKd8g7QckxSFi2qZ%2FqqdLwwKuPPt%2BVVVj%2B09UFMkvChI%2B6tDh%2B7gh8nOVPYWlp9SqoQmDuORmq0LEUvN5adH0QO8XC2%2BrnjHCvXQIWQuY3f2IpLVUc4g3z0ytp6QhKRp5SGYUwuWqT0OJ5tkO74hEZfvjqpe12CFQ3uUlPLYTJ0eG8yC6QZz0tyRk0VvdULOQhjA1PJfkLi9vWcJhkOSUIxc4VcM2%2FM%2BLeyRio6EYAcxYBdKBKGEfopeE05POGGo4a0sNCjjor0Q2K9rgSsm3rI2uYWGS1xT3BGYdbDjdX7OdnIblIpeeJONXMnqVLwk9Z0YsWUVGEGGdtIcM37Z6pKio3kbhgOqOxLLmgM1%2BhL4vwznMLDcob8GOqUBs%2BqDC54KLdjauFNru0VABemjuvn%2FtMqAYUM9bm6QPBe1KHj%2B0ZRurT7pGPEF5%2FC0mkuKK3ZQTybMce09fo5Fvg6xDgcuShhtFEK0%2BR9O6lPvRYIWZObBnNxtbl%2BtlEjxwZLDjKFLOrfhXlZgYnhsvnRHlwIZwj25IlNPInFkFCij51U8ICSXnQAn6sQ9Y61WoIirS0yGFdintMMqb971IjiuFjeC&X-Amz-Signature=ea25880da48d885fb6d9e108aa0d40deed8b498aaeb8d1679bd68adc77489f26&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
