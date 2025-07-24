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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466634Y4PRF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGHJVReAVpFXlTxiyj3TM0hCZYuiJ4Z%2FJAeWuYmTkMhyAiAhK5w04XvEJ%2FcmuN%2FDKwQoSerzf8FKifPrKmgdKQo0Sir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMZf%2BWmNsHfkPpxEtcKtwDbu9pPzr5sRyGdgB4OUfuKS2Kj8bUEFsLtgCP%2FIvfCn%2B%2BqPbWGsezUpQq1MRfGfHP9jMMdUz7JzSZs8BZT5%2Fxh5tgLvoj5SU9V11HBIRrt0oOMw1nU2RX4UaZSyZjNpHFV%2FIcb0sFfeWAbGo90e%2BnqFdBLcrWItWO22LDKX0833woaxQ5wRPZaHCfImW9FsjRflNkZIdtiCE1M0KqekQqag25JbpmeCN8zevyjlbHKKl0NAKJU93zKlgfbZ942Jxp3CaldZ1N5arito9w3w7dKktBBQMZXH0PgGYO6ALrjvF0Y9gneGLv3hRdzT5t4yk8rK7vTi6utfmjEHF4g7EriFnbYRVIGBLSupsvnMzHFeIXXKuiLvRhfFDdVt4CYmyiHp%2BHdBHut308qBx5Jw7w7w%2FF6UPB1vvWd18Us5ba%2F9se0886RFraqZ8LnbjRBmX8Vqas3hZR1XWqYIFCwWjhJ34Vqtx7%2Bro9BQkMHopYE5hfTjmtt2lCA1GnBmr%2FKSzGV0zVDVGgLX8DC2OOu0bMMBOKPEUZcaaO4Jig8ppI05Iphi0f9%2Bcx7r33Og65C3qx3A9EKGHvED7VOlCkEW5N4G%2F4R1p%2FIG11Er5PyjOj4fBakcuzjW3DJWv4Dgkw%2FI%2BIxAY6pgEglXv49PvDO8qSjrEVeRL8sNVZ2m6CLEu05N%2FmsskNm7BFdVBhp1l0pFkiCh%2BhlU6duFS8uhMNAf9Rr5gNRRddy1zJOFG5utx%2FgwXwsnOtuBNcezylk3Xmip7EfopocGuMomvI4usfAd9gOu%2Bl8D323SAHuUCWqRrjA%2BYxNV%2Ff06kGmYeN5c9ufSnArKmaMr5yq20TP81ksk%2FdfiSGz2%2FhDbwH%2FXn2&X-Amz-Signature=31408589ccd5998f3fb67491a08f459fbbc8d012e187ccbd7cda7001e479f685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466634Y4PRF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGHJVReAVpFXlTxiyj3TM0hCZYuiJ4Z%2FJAeWuYmTkMhyAiAhK5w04XvEJ%2FcmuN%2FDKwQoSerzf8FKifPrKmgdKQo0Sir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMZf%2BWmNsHfkPpxEtcKtwDbu9pPzr5sRyGdgB4OUfuKS2Kj8bUEFsLtgCP%2FIvfCn%2B%2BqPbWGsezUpQq1MRfGfHP9jMMdUz7JzSZs8BZT5%2Fxh5tgLvoj5SU9V11HBIRrt0oOMw1nU2RX4UaZSyZjNpHFV%2FIcb0sFfeWAbGo90e%2BnqFdBLcrWItWO22LDKX0833woaxQ5wRPZaHCfImW9FsjRflNkZIdtiCE1M0KqekQqag25JbpmeCN8zevyjlbHKKl0NAKJU93zKlgfbZ942Jxp3CaldZ1N5arito9w3w7dKktBBQMZXH0PgGYO6ALrjvF0Y9gneGLv3hRdzT5t4yk8rK7vTi6utfmjEHF4g7EriFnbYRVIGBLSupsvnMzHFeIXXKuiLvRhfFDdVt4CYmyiHp%2BHdBHut308qBx5Jw7w7w%2FF6UPB1vvWd18Us5ba%2F9se0886RFraqZ8LnbjRBmX8Vqas3hZR1XWqYIFCwWjhJ34Vqtx7%2Bro9BQkMHopYE5hfTjmtt2lCA1GnBmr%2FKSzGV0zVDVGgLX8DC2OOu0bMMBOKPEUZcaaO4Jig8ppI05Iphi0f9%2Bcx7r33Og65C3qx3A9EKGHvED7VOlCkEW5N4G%2F4R1p%2FIG11Er5PyjOj4fBakcuzjW3DJWv4Dgkw%2FI%2BIxAY6pgEglXv49PvDO8qSjrEVeRL8sNVZ2m6CLEu05N%2FmsskNm7BFdVBhp1l0pFkiCh%2BhlU6duFS8uhMNAf9Rr5gNRRddy1zJOFG5utx%2FgwXwsnOtuBNcezylk3Xmip7EfopocGuMomvI4usfAd9gOu%2Bl8D323SAHuUCWqRrjA%2BYxNV%2Ff06kGmYeN5c9ufSnArKmaMr5yq20TP81ksk%2FdfiSGz2%2FhDbwH%2FXn2&X-Amz-Signature=5a2c51b26247847ceb929c38cb4746565f5244387e151eacd57c2fb7404ea2e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466634Y4PRF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGHJVReAVpFXlTxiyj3TM0hCZYuiJ4Z%2FJAeWuYmTkMhyAiAhK5w04XvEJ%2FcmuN%2FDKwQoSerzf8FKifPrKmgdKQo0Sir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMZf%2BWmNsHfkPpxEtcKtwDbu9pPzr5sRyGdgB4OUfuKS2Kj8bUEFsLtgCP%2FIvfCn%2B%2BqPbWGsezUpQq1MRfGfHP9jMMdUz7JzSZs8BZT5%2Fxh5tgLvoj5SU9V11HBIRrt0oOMw1nU2RX4UaZSyZjNpHFV%2FIcb0sFfeWAbGo90e%2BnqFdBLcrWItWO22LDKX0833woaxQ5wRPZaHCfImW9FsjRflNkZIdtiCE1M0KqekQqag25JbpmeCN8zevyjlbHKKl0NAKJU93zKlgfbZ942Jxp3CaldZ1N5arito9w3w7dKktBBQMZXH0PgGYO6ALrjvF0Y9gneGLv3hRdzT5t4yk8rK7vTi6utfmjEHF4g7EriFnbYRVIGBLSupsvnMzHFeIXXKuiLvRhfFDdVt4CYmyiHp%2BHdBHut308qBx5Jw7w7w%2FF6UPB1vvWd18Us5ba%2F9se0886RFraqZ8LnbjRBmX8Vqas3hZR1XWqYIFCwWjhJ34Vqtx7%2Bro9BQkMHopYE5hfTjmtt2lCA1GnBmr%2FKSzGV0zVDVGgLX8DC2OOu0bMMBOKPEUZcaaO4Jig8ppI05Iphi0f9%2Bcx7r33Og65C3qx3A9EKGHvED7VOlCkEW5N4G%2F4R1p%2FIG11Er5PyjOj4fBakcuzjW3DJWv4Dgkw%2FI%2BIxAY6pgEglXv49PvDO8qSjrEVeRL8sNVZ2m6CLEu05N%2FmsskNm7BFdVBhp1l0pFkiCh%2BhlU6duFS8uhMNAf9Rr5gNRRddy1zJOFG5utx%2FgwXwsnOtuBNcezylk3Xmip7EfopocGuMomvI4usfAd9gOu%2Bl8D323SAHuUCWqRrjA%2BYxNV%2Ff06kGmYeN5c9ufSnArKmaMr5yq20TP81ksk%2FdfiSGz2%2FhDbwH%2FXn2&X-Amz-Signature=5e3713001c8e454fd76f362ddf8ce82c3f7ac00433952ca6e19f010aae7d6ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466634Y4PRF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGHJVReAVpFXlTxiyj3TM0hCZYuiJ4Z%2FJAeWuYmTkMhyAiAhK5w04XvEJ%2FcmuN%2FDKwQoSerzf8FKifPrKmgdKQo0Sir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMZf%2BWmNsHfkPpxEtcKtwDbu9pPzr5sRyGdgB4OUfuKS2Kj8bUEFsLtgCP%2FIvfCn%2B%2BqPbWGsezUpQq1MRfGfHP9jMMdUz7JzSZs8BZT5%2Fxh5tgLvoj5SU9V11HBIRrt0oOMw1nU2RX4UaZSyZjNpHFV%2FIcb0sFfeWAbGo90e%2BnqFdBLcrWItWO22LDKX0833woaxQ5wRPZaHCfImW9FsjRflNkZIdtiCE1M0KqekQqag25JbpmeCN8zevyjlbHKKl0NAKJU93zKlgfbZ942Jxp3CaldZ1N5arito9w3w7dKktBBQMZXH0PgGYO6ALrjvF0Y9gneGLv3hRdzT5t4yk8rK7vTi6utfmjEHF4g7EriFnbYRVIGBLSupsvnMzHFeIXXKuiLvRhfFDdVt4CYmyiHp%2BHdBHut308qBx5Jw7w7w%2FF6UPB1vvWd18Us5ba%2F9se0886RFraqZ8LnbjRBmX8Vqas3hZR1XWqYIFCwWjhJ34Vqtx7%2Bro9BQkMHopYE5hfTjmtt2lCA1GnBmr%2FKSzGV0zVDVGgLX8DC2OOu0bMMBOKPEUZcaaO4Jig8ppI05Iphi0f9%2Bcx7r33Og65C3qx3A9EKGHvED7VOlCkEW5N4G%2F4R1p%2FIG11Er5PyjOj4fBakcuzjW3DJWv4Dgkw%2FI%2BIxAY6pgEglXv49PvDO8qSjrEVeRL8sNVZ2m6CLEu05N%2FmsskNm7BFdVBhp1l0pFkiCh%2BhlU6duFS8uhMNAf9Rr5gNRRddy1zJOFG5utx%2FgwXwsnOtuBNcezylk3Xmip7EfopocGuMomvI4usfAd9gOu%2Bl8D323SAHuUCWqRrjA%2BYxNV%2Ff06kGmYeN5c9ufSnArKmaMr5yq20TP81ksk%2FdfiSGz2%2FhDbwH%2FXn2&X-Amz-Signature=f8924354769179b0f7549f94908dfdbd0d10a43b2e96a997bb00868bddfca7d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466634Y4PRF%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGHJVReAVpFXlTxiyj3TM0hCZYuiJ4Z%2FJAeWuYmTkMhyAiAhK5w04XvEJ%2FcmuN%2FDKwQoSerzf8FKifPrKmgdKQo0Sir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMZf%2BWmNsHfkPpxEtcKtwDbu9pPzr5sRyGdgB4OUfuKS2Kj8bUEFsLtgCP%2FIvfCn%2B%2BqPbWGsezUpQq1MRfGfHP9jMMdUz7JzSZs8BZT5%2Fxh5tgLvoj5SU9V11HBIRrt0oOMw1nU2RX4UaZSyZjNpHFV%2FIcb0sFfeWAbGo90e%2BnqFdBLcrWItWO22LDKX0833woaxQ5wRPZaHCfImW9FsjRflNkZIdtiCE1M0KqekQqag25JbpmeCN8zevyjlbHKKl0NAKJU93zKlgfbZ942Jxp3CaldZ1N5arito9w3w7dKktBBQMZXH0PgGYO6ALrjvF0Y9gneGLv3hRdzT5t4yk8rK7vTi6utfmjEHF4g7EriFnbYRVIGBLSupsvnMzHFeIXXKuiLvRhfFDdVt4CYmyiHp%2BHdBHut308qBx5Jw7w7w%2FF6UPB1vvWd18Us5ba%2F9se0886RFraqZ8LnbjRBmX8Vqas3hZR1XWqYIFCwWjhJ34Vqtx7%2Bro9BQkMHopYE5hfTjmtt2lCA1GnBmr%2FKSzGV0zVDVGgLX8DC2OOu0bMMBOKPEUZcaaO4Jig8ppI05Iphi0f9%2Bcx7r33Og65C3qx3A9EKGHvED7VOlCkEW5N4G%2F4R1p%2FIG11Er5PyjOj4fBakcuzjW3DJWv4Dgkw%2FI%2BIxAY6pgEglXv49PvDO8qSjrEVeRL8sNVZ2m6CLEu05N%2FmsskNm7BFdVBhp1l0pFkiCh%2BhlU6duFS8uhMNAf9Rr5gNRRddy1zJOFG5utx%2FgwXwsnOtuBNcezylk3Xmip7EfopocGuMomvI4usfAd9gOu%2Bl8D323SAHuUCWqRrjA%2BYxNV%2Ff06kGmYeN5c9ufSnArKmaMr5yq20TP81ksk%2FdfiSGz2%2FhDbwH%2FXn2&X-Amz-Signature=832d579836f97ce2f76b4123db13edd3a091b678a90f50e9d9934a952a7ba2d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
