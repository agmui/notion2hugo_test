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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634TRZ2ED%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4o6b%2BxJYdMVdHu9avG61zGZ54vdvtIIcVjYAnlPrtyQIhAKF3UxGSffMthBvmaaEH%2BebLN8l0haBC5NLN7Srn6NnRKv8DCFsQABoMNjM3NDIzMTgzODA1IgwWS8JKrZk7xzRZ38gq3APazBN2wIdRJHTltzr3jEgWVTIRPICFSKcRj1shGLtR8xd4zIuIlzt%2FZJK8yhOdowfgffaKCgQTvQ3xMQaGaRerX5NwkwGayMuVfhqguIByIO5WNQF%2BBoSFAFuBSEbtkjZH8VJ2RLf1oVmv8GOwN8K%2BwiyzwVE6E498u6A1ux4esIWlrpa1dxIJ5RqTR9iQbmVtcPNC9GAuCzFF6qeVpneHfAoZgJvcP3YkLcA04udN7Sa6g0rRK8pmeR4FgHh6a9p3oWdph2M7oqGk41hwVWtE664u7WrRLoc%2B2PALNHGo%2FgV13ZaZmlP1HO97e%2FQtPiYtbLWXIf1Xn1I4FywW8dX9bchVrLZ618wuJw8juvNE%2Fb%2BBfHcVlx1O6wSFogQ0DmKUPfvh9aw2A92xZkNDNZPjmXXEXbJbqyfQmvGVkzR3%2F91QcfmNqI6ETlbhaWU%2B5rIw5aPxLALLFa3RORz3CkHcBPKDo3EK6fWFT2AT2%2FQWTZVP6HnOBdYZB238TNrxUYGKX04SH8IRqwJUgTYJFtNVTpD3jhvaqC0toNuOcz%2FRS306tfgJQVgKMqoSuDpLeNxAmu1pjKUf%2FRXs1QmgsYati%2FAyoH72mNfXkbuEVG71XSxt20Y%2FWmGY9RQMwzCG3Jm%2FBjqkASnmhlsAGyVWi6LnEumUNqXRMKwUl2yVoXsQiMHqECiokxSoKTBSXN4rC9bRZFsuAVM3QPth5tTuTZTPORz55xYCEzjzzs4bdztO36UW9PVr6pjE7pCmi7teg13cFS7RXP6gpHBLI3c9e1oM5Ac2YAGLYPCqmwaeL3m6bqWD5V4dSmIj2jHOb2rfpu0Kzronuff7pbHuNlKyQsSpIO6zC0l4DOkQ&X-Amz-Signature=9f2d123fa0399aa9aceaf9ccd2ff77904a8321788a63d95544ad8eb91e6f1989&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634TRZ2ED%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4o6b%2BxJYdMVdHu9avG61zGZ54vdvtIIcVjYAnlPrtyQIhAKF3UxGSffMthBvmaaEH%2BebLN8l0haBC5NLN7Srn6NnRKv8DCFsQABoMNjM3NDIzMTgzODA1IgwWS8JKrZk7xzRZ38gq3APazBN2wIdRJHTltzr3jEgWVTIRPICFSKcRj1shGLtR8xd4zIuIlzt%2FZJK8yhOdowfgffaKCgQTvQ3xMQaGaRerX5NwkwGayMuVfhqguIByIO5WNQF%2BBoSFAFuBSEbtkjZH8VJ2RLf1oVmv8GOwN8K%2BwiyzwVE6E498u6A1ux4esIWlrpa1dxIJ5RqTR9iQbmVtcPNC9GAuCzFF6qeVpneHfAoZgJvcP3YkLcA04udN7Sa6g0rRK8pmeR4FgHh6a9p3oWdph2M7oqGk41hwVWtE664u7WrRLoc%2B2PALNHGo%2FgV13ZaZmlP1HO97e%2FQtPiYtbLWXIf1Xn1I4FywW8dX9bchVrLZ618wuJw8juvNE%2Fb%2BBfHcVlx1O6wSFogQ0DmKUPfvh9aw2A92xZkNDNZPjmXXEXbJbqyfQmvGVkzR3%2F91QcfmNqI6ETlbhaWU%2B5rIw5aPxLALLFa3RORz3CkHcBPKDo3EK6fWFT2AT2%2FQWTZVP6HnOBdYZB238TNrxUYGKX04SH8IRqwJUgTYJFtNVTpD3jhvaqC0toNuOcz%2FRS306tfgJQVgKMqoSuDpLeNxAmu1pjKUf%2FRXs1QmgsYati%2FAyoH72mNfXkbuEVG71XSxt20Y%2FWmGY9RQMwzCG3Jm%2FBjqkASnmhlsAGyVWi6LnEumUNqXRMKwUl2yVoXsQiMHqECiokxSoKTBSXN4rC9bRZFsuAVM3QPth5tTuTZTPORz55xYCEzjzzs4bdztO36UW9PVr6pjE7pCmi7teg13cFS7RXP6gpHBLI3c9e1oM5Ac2YAGLYPCqmwaeL3m6bqWD5V4dSmIj2jHOb2rfpu0Kzronuff7pbHuNlKyQsSpIO6zC0l4DOkQ&X-Amz-Signature=d556f583f30c15f36501274ce8cc1af240a63620574a4be6b22a58f052b4955d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634TRZ2ED%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4o6b%2BxJYdMVdHu9avG61zGZ54vdvtIIcVjYAnlPrtyQIhAKF3UxGSffMthBvmaaEH%2BebLN8l0haBC5NLN7Srn6NnRKv8DCFsQABoMNjM3NDIzMTgzODA1IgwWS8JKrZk7xzRZ38gq3APazBN2wIdRJHTltzr3jEgWVTIRPICFSKcRj1shGLtR8xd4zIuIlzt%2FZJK8yhOdowfgffaKCgQTvQ3xMQaGaRerX5NwkwGayMuVfhqguIByIO5WNQF%2BBoSFAFuBSEbtkjZH8VJ2RLf1oVmv8GOwN8K%2BwiyzwVE6E498u6A1ux4esIWlrpa1dxIJ5RqTR9iQbmVtcPNC9GAuCzFF6qeVpneHfAoZgJvcP3YkLcA04udN7Sa6g0rRK8pmeR4FgHh6a9p3oWdph2M7oqGk41hwVWtE664u7WrRLoc%2B2PALNHGo%2FgV13ZaZmlP1HO97e%2FQtPiYtbLWXIf1Xn1I4FywW8dX9bchVrLZ618wuJw8juvNE%2Fb%2BBfHcVlx1O6wSFogQ0DmKUPfvh9aw2A92xZkNDNZPjmXXEXbJbqyfQmvGVkzR3%2F91QcfmNqI6ETlbhaWU%2B5rIw5aPxLALLFa3RORz3CkHcBPKDo3EK6fWFT2AT2%2FQWTZVP6HnOBdYZB238TNrxUYGKX04SH8IRqwJUgTYJFtNVTpD3jhvaqC0toNuOcz%2FRS306tfgJQVgKMqoSuDpLeNxAmu1pjKUf%2FRXs1QmgsYati%2FAyoH72mNfXkbuEVG71XSxt20Y%2FWmGY9RQMwzCG3Jm%2FBjqkASnmhlsAGyVWi6LnEumUNqXRMKwUl2yVoXsQiMHqECiokxSoKTBSXN4rC9bRZFsuAVM3QPth5tTuTZTPORz55xYCEzjzzs4bdztO36UW9PVr6pjE7pCmi7teg13cFS7RXP6gpHBLI3c9e1oM5Ac2YAGLYPCqmwaeL3m6bqWD5V4dSmIj2jHOb2rfpu0Kzronuff7pbHuNlKyQsSpIO6zC0l4DOkQ&X-Amz-Signature=31f213c24d6cb7dfa74b38ec9d02cf7c789f02b878cb5d296aed10185059080d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634TRZ2ED%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4o6b%2BxJYdMVdHu9avG61zGZ54vdvtIIcVjYAnlPrtyQIhAKF3UxGSffMthBvmaaEH%2BebLN8l0haBC5NLN7Srn6NnRKv8DCFsQABoMNjM3NDIzMTgzODA1IgwWS8JKrZk7xzRZ38gq3APazBN2wIdRJHTltzr3jEgWVTIRPICFSKcRj1shGLtR8xd4zIuIlzt%2FZJK8yhOdowfgffaKCgQTvQ3xMQaGaRerX5NwkwGayMuVfhqguIByIO5WNQF%2BBoSFAFuBSEbtkjZH8VJ2RLf1oVmv8GOwN8K%2BwiyzwVE6E498u6A1ux4esIWlrpa1dxIJ5RqTR9iQbmVtcPNC9GAuCzFF6qeVpneHfAoZgJvcP3YkLcA04udN7Sa6g0rRK8pmeR4FgHh6a9p3oWdph2M7oqGk41hwVWtE664u7WrRLoc%2B2PALNHGo%2FgV13ZaZmlP1HO97e%2FQtPiYtbLWXIf1Xn1I4FywW8dX9bchVrLZ618wuJw8juvNE%2Fb%2BBfHcVlx1O6wSFogQ0DmKUPfvh9aw2A92xZkNDNZPjmXXEXbJbqyfQmvGVkzR3%2F91QcfmNqI6ETlbhaWU%2B5rIw5aPxLALLFa3RORz3CkHcBPKDo3EK6fWFT2AT2%2FQWTZVP6HnOBdYZB238TNrxUYGKX04SH8IRqwJUgTYJFtNVTpD3jhvaqC0toNuOcz%2FRS306tfgJQVgKMqoSuDpLeNxAmu1pjKUf%2FRXs1QmgsYati%2FAyoH72mNfXkbuEVG71XSxt20Y%2FWmGY9RQMwzCG3Jm%2FBjqkASnmhlsAGyVWi6LnEumUNqXRMKwUl2yVoXsQiMHqECiokxSoKTBSXN4rC9bRZFsuAVM3QPth5tTuTZTPORz55xYCEzjzzs4bdztO36UW9PVr6pjE7pCmi7teg13cFS7RXP6gpHBLI3c9e1oM5Ac2YAGLYPCqmwaeL3m6bqWD5V4dSmIj2jHOb2rfpu0Kzronuff7pbHuNlKyQsSpIO6zC0l4DOkQ&X-Amz-Signature=d37be655b9e3b7e0db5d88aa8e84c93f823470e4981ed08e6d8cdc7724f19b25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634TRZ2ED%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4o6b%2BxJYdMVdHu9avG61zGZ54vdvtIIcVjYAnlPrtyQIhAKF3UxGSffMthBvmaaEH%2BebLN8l0haBC5NLN7Srn6NnRKv8DCFsQABoMNjM3NDIzMTgzODA1IgwWS8JKrZk7xzRZ38gq3APazBN2wIdRJHTltzr3jEgWVTIRPICFSKcRj1shGLtR8xd4zIuIlzt%2FZJK8yhOdowfgffaKCgQTvQ3xMQaGaRerX5NwkwGayMuVfhqguIByIO5WNQF%2BBoSFAFuBSEbtkjZH8VJ2RLf1oVmv8GOwN8K%2BwiyzwVE6E498u6A1ux4esIWlrpa1dxIJ5RqTR9iQbmVtcPNC9GAuCzFF6qeVpneHfAoZgJvcP3YkLcA04udN7Sa6g0rRK8pmeR4FgHh6a9p3oWdph2M7oqGk41hwVWtE664u7WrRLoc%2B2PALNHGo%2FgV13ZaZmlP1HO97e%2FQtPiYtbLWXIf1Xn1I4FywW8dX9bchVrLZ618wuJw8juvNE%2Fb%2BBfHcVlx1O6wSFogQ0DmKUPfvh9aw2A92xZkNDNZPjmXXEXbJbqyfQmvGVkzR3%2F91QcfmNqI6ETlbhaWU%2B5rIw5aPxLALLFa3RORz3CkHcBPKDo3EK6fWFT2AT2%2FQWTZVP6HnOBdYZB238TNrxUYGKX04SH8IRqwJUgTYJFtNVTpD3jhvaqC0toNuOcz%2FRS306tfgJQVgKMqoSuDpLeNxAmu1pjKUf%2FRXs1QmgsYati%2FAyoH72mNfXkbuEVG71XSxt20Y%2FWmGY9RQMwzCG3Jm%2FBjqkASnmhlsAGyVWi6LnEumUNqXRMKwUl2yVoXsQiMHqECiokxSoKTBSXN4rC9bRZFsuAVM3QPth5tTuTZTPORz55xYCEzjzzs4bdztO36UW9PVr6pjE7pCmi7teg13cFS7RXP6gpHBLI3c9e1oM5Ac2YAGLYPCqmwaeL3m6bqWD5V4dSmIj2jHOb2rfpu0Kzronuff7pbHuNlKyQsSpIO6zC0l4DOkQ&X-Amz-Signature=115d4e391876c4c9fba7d4c3d0d6a08148f1a2c3e3f4aeb600b3ffe22c9f79f2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
