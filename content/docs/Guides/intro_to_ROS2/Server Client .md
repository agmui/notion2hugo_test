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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCXPE6WF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEOKQda66tqZLac9c%2FB36iEMLbJ2UBU3yq%2BReYigAJ%2FxAiEA77hW14y5dVxfY5glDLpcdDy74yRO7rH0hfY0%2B8t3qrAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FUhNpECGQRQiN0xSrcA0350VT3WyBN7uzhfdLpgOk1vX2Qoq0ABdoa5dsZJUtWdr7WPIoco5R01A1e9psYUcietdLy2QZe2ZCvUoiDV3EYF1xKqeOfuZOg8nCPUjohNNKpAppnlHNXjRP7Ymfu%2Fa8R59SpMqTeiTN7MGLZmSWefCaqOF5vc0ailB9GXnL9HzdxtcrPp9JscxvvN2alB3YqRpge%2B5B3nH16M01UY%2BodaVATafm34J1LAP2lXJS%2F5%2F9W5p4xP%2FaPQnxzkEpYBSrs3pUrOvH7EpGhsb7AP6ee1BLeI6zcC5%2FZATwCghCXBIwYZeS1Gf%2FrqxhvTOlVfTJRHmj08SGeQlw%2BVSpfIX7awuKOWqG%2FFKzcQvN7brN54N%2F%2FCV4W%2FqGi7bInJQIUopyqH3wjuAwteOCZAuiRfsjRdnUfJh7s0hFRuD0%2FIIpTcpbSUVTWMAMVWTPh6c%2Bfs4W%2B36VAiop8kcc62s2AlG270Q701bWvx6%2F1GIdi65s11Xv2Wth0Z346q1B2yuzoq5%2FByXuzlhWMkyZ%2B%2BK3rA9HhYq9wnKIuVsj0uF88FeQ2XN0bX23tB%2F%2FtCck5o%2F6adJuzC6u%2B0WWcyILl%2F2npFOCPaD%2F%2BmLy938yp%2BwJrO38jRfD6FHyMSxGVwgVgMPCzncQGOqUBMaWmGHdYgvhxpKkNtaQEao8V70wkPojfsJGgS5CQY7ILDlQ%2B%2FJ6nPqFtip2g57YO5WxOLqc29UM9rqgpcbRP8%2FBa6qeW%2BIotO%2BszlZozsGHOgNx7SVfITalaDARCxPz04Nnf8tiCW%2Fan9Rt1ijg%2F9lEWyBT9L3b32l%2Fg%2BpQ2jZ56E3Uud4vocyGwdSicb3yTwKjGf81EAzn79l5%2B9Fhx2%2Bh5zoam&X-Amz-Signature=c66848b9267f799f67e58c50404342ad47d7195465417580062bd251afa9e36f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCXPE6WF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEOKQda66tqZLac9c%2FB36iEMLbJ2UBU3yq%2BReYigAJ%2FxAiEA77hW14y5dVxfY5glDLpcdDy74yRO7rH0hfY0%2B8t3qrAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FUhNpECGQRQiN0xSrcA0350VT3WyBN7uzhfdLpgOk1vX2Qoq0ABdoa5dsZJUtWdr7WPIoco5R01A1e9psYUcietdLy2QZe2ZCvUoiDV3EYF1xKqeOfuZOg8nCPUjohNNKpAppnlHNXjRP7Ymfu%2Fa8R59SpMqTeiTN7MGLZmSWefCaqOF5vc0ailB9GXnL9HzdxtcrPp9JscxvvN2alB3YqRpge%2B5B3nH16M01UY%2BodaVATafm34J1LAP2lXJS%2F5%2F9W5p4xP%2FaPQnxzkEpYBSrs3pUrOvH7EpGhsb7AP6ee1BLeI6zcC5%2FZATwCghCXBIwYZeS1Gf%2FrqxhvTOlVfTJRHmj08SGeQlw%2BVSpfIX7awuKOWqG%2FFKzcQvN7brN54N%2F%2FCV4W%2FqGi7bInJQIUopyqH3wjuAwteOCZAuiRfsjRdnUfJh7s0hFRuD0%2FIIpTcpbSUVTWMAMVWTPh6c%2Bfs4W%2B36VAiop8kcc62s2AlG270Q701bWvx6%2F1GIdi65s11Xv2Wth0Z346q1B2yuzoq5%2FByXuzlhWMkyZ%2B%2BK3rA9HhYq9wnKIuVsj0uF88FeQ2XN0bX23tB%2F%2FtCck5o%2F6adJuzC6u%2B0WWcyILl%2F2npFOCPaD%2F%2BmLy938yp%2BwJrO38jRfD6FHyMSxGVwgVgMPCzncQGOqUBMaWmGHdYgvhxpKkNtaQEao8V70wkPojfsJGgS5CQY7ILDlQ%2B%2FJ6nPqFtip2g57YO5WxOLqc29UM9rqgpcbRP8%2FBa6qeW%2BIotO%2BszlZozsGHOgNx7SVfITalaDARCxPz04Nnf8tiCW%2Fan9Rt1ijg%2F9lEWyBT9L3b32l%2Fg%2BpQ2jZ56E3Uud4vocyGwdSicb3yTwKjGf81EAzn79l5%2B9Fhx2%2Bh5zoam&X-Amz-Signature=e459cfd332e1f903f40dd3864584c7f05fbd83b18ff6e1b176dafdc1f2dbd8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCXPE6WF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEOKQda66tqZLac9c%2FB36iEMLbJ2UBU3yq%2BReYigAJ%2FxAiEA77hW14y5dVxfY5glDLpcdDy74yRO7rH0hfY0%2B8t3qrAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FUhNpECGQRQiN0xSrcA0350VT3WyBN7uzhfdLpgOk1vX2Qoq0ABdoa5dsZJUtWdr7WPIoco5R01A1e9psYUcietdLy2QZe2ZCvUoiDV3EYF1xKqeOfuZOg8nCPUjohNNKpAppnlHNXjRP7Ymfu%2Fa8R59SpMqTeiTN7MGLZmSWefCaqOF5vc0ailB9GXnL9HzdxtcrPp9JscxvvN2alB3YqRpge%2B5B3nH16M01UY%2BodaVATafm34J1LAP2lXJS%2F5%2F9W5p4xP%2FaPQnxzkEpYBSrs3pUrOvH7EpGhsb7AP6ee1BLeI6zcC5%2FZATwCghCXBIwYZeS1Gf%2FrqxhvTOlVfTJRHmj08SGeQlw%2BVSpfIX7awuKOWqG%2FFKzcQvN7brN54N%2F%2FCV4W%2FqGi7bInJQIUopyqH3wjuAwteOCZAuiRfsjRdnUfJh7s0hFRuD0%2FIIpTcpbSUVTWMAMVWTPh6c%2Bfs4W%2B36VAiop8kcc62s2AlG270Q701bWvx6%2F1GIdi65s11Xv2Wth0Z346q1B2yuzoq5%2FByXuzlhWMkyZ%2B%2BK3rA9HhYq9wnKIuVsj0uF88FeQ2XN0bX23tB%2F%2FtCck5o%2F6adJuzC6u%2B0WWcyILl%2F2npFOCPaD%2F%2BmLy938yp%2BwJrO38jRfD6FHyMSxGVwgVgMPCzncQGOqUBMaWmGHdYgvhxpKkNtaQEao8V70wkPojfsJGgS5CQY7ILDlQ%2B%2FJ6nPqFtip2g57YO5WxOLqc29UM9rqgpcbRP8%2FBa6qeW%2BIotO%2BszlZozsGHOgNx7SVfITalaDARCxPz04Nnf8tiCW%2Fan9Rt1ijg%2F9lEWyBT9L3b32l%2Fg%2BpQ2jZ56E3Uud4vocyGwdSicb3yTwKjGf81EAzn79l5%2B9Fhx2%2Bh5zoam&X-Amz-Signature=7c40aa66a784e53ac7a243822a402df15dd445769c0937ab3abed27672696a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCXPE6WF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEOKQda66tqZLac9c%2FB36iEMLbJ2UBU3yq%2BReYigAJ%2FxAiEA77hW14y5dVxfY5glDLpcdDy74yRO7rH0hfY0%2B8t3qrAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FUhNpECGQRQiN0xSrcA0350VT3WyBN7uzhfdLpgOk1vX2Qoq0ABdoa5dsZJUtWdr7WPIoco5R01A1e9psYUcietdLy2QZe2ZCvUoiDV3EYF1xKqeOfuZOg8nCPUjohNNKpAppnlHNXjRP7Ymfu%2Fa8R59SpMqTeiTN7MGLZmSWefCaqOF5vc0ailB9GXnL9HzdxtcrPp9JscxvvN2alB3YqRpge%2B5B3nH16M01UY%2BodaVATafm34J1LAP2lXJS%2F5%2F9W5p4xP%2FaPQnxzkEpYBSrs3pUrOvH7EpGhsb7AP6ee1BLeI6zcC5%2FZATwCghCXBIwYZeS1Gf%2FrqxhvTOlVfTJRHmj08SGeQlw%2BVSpfIX7awuKOWqG%2FFKzcQvN7brN54N%2F%2FCV4W%2FqGi7bInJQIUopyqH3wjuAwteOCZAuiRfsjRdnUfJh7s0hFRuD0%2FIIpTcpbSUVTWMAMVWTPh6c%2Bfs4W%2B36VAiop8kcc62s2AlG270Q701bWvx6%2F1GIdi65s11Xv2Wth0Z346q1B2yuzoq5%2FByXuzlhWMkyZ%2B%2BK3rA9HhYq9wnKIuVsj0uF88FeQ2XN0bX23tB%2F%2FtCck5o%2F6adJuzC6u%2B0WWcyILl%2F2npFOCPaD%2F%2BmLy938yp%2BwJrO38jRfD6FHyMSxGVwgVgMPCzncQGOqUBMaWmGHdYgvhxpKkNtaQEao8V70wkPojfsJGgS5CQY7ILDlQ%2B%2FJ6nPqFtip2g57YO5WxOLqc29UM9rqgpcbRP8%2FBa6qeW%2BIotO%2BszlZozsGHOgNx7SVfITalaDARCxPz04Nnf8tiCW%2Fan9Rt1ijg%2F9lEWyBT9L3b32l%2Fg%2BpQ2jZ56E3Uud4vocyGwdSicb3yTwKjGf81EAzn79l5%2B9Fhx2%2Bh5zoam&X-Amz-Signature=e691e96c569e1224d7ff31390728694cbc014528a051ca12c5ba4ec78e75d059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCXPE6WF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEOKQda66tqZLac9c%2FB36iEMLbJ2UBU3yq%2BReYigAJ%2FxAiEA77hW14y5dVxfY5glDLpcdDy74yRO7rH0hfY0%2B8t3qrAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FUhNpECGQRQiN0xSrcA0350VT3WyBN7uzhfdLpgOk1vX2Qoq0ABdoa5dsZJUtWdr7WPIoco5R01A1e9psYUcietdLy2QZe2ZCvUoiDV3EYF1xKqeOfuZOg8nCPUjohNNKpAppnlHNXjRP7Ymfu%2Fa8R59SpMqTeiTN7MGLZmSWefCaqOF5vc0ailB9GXnL9HzdxtcrPp9JscxvvN2alB3YqRpge%2B5B3nH16M01UY%2BodaVATafm34J1LAP2lXJS%2F5%2F9W5p4xP%2FaPQnxzkEpYBSrs3pUrOvH7EpGhsb7AP6ee1BLeI6zcC5%2FZATwCghCXBIwYZeS1Gf%2FrqxhvTOlVfTJRHmj08SGeQlw%2BVSpfIX7awuKOWqG%2FFKzcQvN7brN54N%2F%2FCV4W%2FqGi7bInJQIUopyqH3wjuAwteOCZAuiRfsjRdnUfJh7s0hFRuD0%2FIIpTcpbSUVTWMAMVWTPh6c%2Bfs4W%2B36VAiop8kcc62s2AlG270Q701bWvx6%2F1GIdi65s11Xv2Wth0Z346q1B2yuzoq5%2FByXuzlhWMkyZ%2B%2BK3rA9HhYq9wnKIuVsj0uF88FeQ2XN0bX23tB%2F%2FtCck5o%2F6adJuzC6u%2B0WWcyILl%2F2npFOCPaD%2F%2BmLy938yp%2BwJrO38jRfD6FHyMSxGVwgVgMPCzncQGOqUBMaWmGHdYgvhxpKkNtaQEao8V70wkPojfsJGgS5CQY7ILDlQ%2B%2FJ6nPqFtip2g57YO5WxOLqc29UM9rqgpcbRP8%2FBa6qeW%2BIotO%2BszlZozsGHOgNx7SVfITalaDARCxPz04Nnf8tiCW%2Fan9Rt1ijg%2F9lEWyBT9L3b32l%2Fg%2BpQ2jZ56E3Uud4vocyGwdSicb3yTwKjGf81EAzn79l5%2B9Fhx2%2Bh5zoam&X-Amz-Signature=ac5b623259fa83db91e7ad1dc940e0cc5ab81a886599a20c022a8c4248ee1e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
