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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSC435AQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQC7cruBR8FtR2Tw15c5OZcIz8%2B1xuMqz9H6z8qPyMr6bwIhAIhshxgqdEHVjh5OY%2BebwE4jcCVGbdTNhK8UN8dLxyeEKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0MmBM7nRSpqk6Ce4q3AMyL0e3OVmmagAJOU4YWVrz0cHA%2BT2PjmlHXpGoawPDU%2B1EnJSPYPo1bmh2xYccYZUJyR2ufkB%2BeLlmTNdCxwRg%2FzdGby5AzgudEFzEwvNGypVHTZ2j7lg8zPi8gb0dL1INLIRoB4Cd8V4xq0ExzM4g%2BOO9BfL3G5bWYDGETTJN15pMxVWVV09jq3glnshFa0bxPEFQlZECOohH2zBlEwjeFi2hMIpwhkwABevhsfB5SYeOWXp4OXAgyQC4%2Fud6rtqFC6l8zJIYN%2FeaAbBrv4UXvGMbUGjTxfGxQl54TmBXDE%2FhmV0VjfGOb1993Yq0kb4w0M4WzStQPj1ge5RcU%2FRO6CWSUO2u5lFds7wp81oWVRmcMxkWKOKUmQLhrFM7tQE%2F1jYdbDC61JMqTzT3mMoo35kaniuUUwyjGiJWJnKHZKwcxGaGF%2BuNh4zn03cBMZ69hxAUcPRlokeztMcRP1hfnpxA4Oc08ej%2FyJ7ildRs4yQw3ounb2vdfP40EDGcaHIJPDeu9095lwIJLAXjqd%2F7xka0KoC2kdWv7SLPJr4rwFR%2BUiGsaVOx%2FKg8Ul06nF3%2BNkI%2BJpYMWGS03F3ws9cmLumb00Wln6rNk9xi3mAWDBoLQ6df7nsfM8UTIzD5jdPABjqkAaa5ZwlZNoGEWyyUFlIMfuvtSCHNausoKpKFmeY533ulkgLU%2BarX9wIRhXmdaNTxbaRkIAD1Y%2BnchsUCm%2BzHbxxXsvQwfNE%2FeNyQNQ6ItFfqlVL40zfH0H%2Fu2Ws1Hgi1e%2Fnziv2Edg8er2lRvz58qX4gh%2FcopRD%2FX%2B6COuJ0RVkBJ0emJHEjBKZXi%2FMQJ7NiIS2nkm6rZIVONNXbwJWJM6jjalaH&X-Amz-Signature=048af100ae19a5e67995c9ffbdd493429c29759f6b78f3b046bea4e45058acce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSC435AQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQC7cruBR8FtR2Tw15c5OZcIz8%2B1xuMqz9H6z8qPyMr6bwIhAIhshxgqdEHVjh5OY%2BebwE4jcCVGbdTNhK8UN8dLxyeEKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0MmBM7nRSpqk6Ce4q3AMyL0e3OVmmagAJOU4YWVrz0cHA%2BT2PjmlHXpGoawPDU%2B1EnJSPYPo1bmh2xYccYZUJyR2ufkB%2BeLlmTNdCxwRg%2FzdGby5AzgudEFzEwvNGypVHTZ2j7lg8zPi8gb0dL1INLIRoB4Cd8V4xq0ExzM4g%2BOO9BfL3G5bWYDGETTJN15pMxVWVV09jq3glnshFa0bxPEFQlZECOohH2zBlEwjeFi2hMIpwhkwABevhsfB5SYeOWXp4OXAgyQC4%2Fud6rtqFC6l8zJIYN%2FeaAbBrv4UXvGMbUGjTxfGxQl54TmBXDE%2FhmV0VjfGOb1993Yq0kb4w0M4WzStQPj1ge5RcU%2FRO6CWSUO2u5lFds7wp81oWVRmcMxkWKOKUmQLhrFM7tQE%2F1jYdbDC61JMqTzT3mMoo35kaniuUUwyjGiJWJnKHZKwcxGaGF%2BuNh4zn03cBMZ69hxAUcPRlokeztMcRP1hfnpxA4Oc08ej%2FyJ7ildRs4yQw3ounb2vdfP40EDGcaHIJPDeu9095lwIJLAXjqd%2F7xka0KoC2kdWv7SLPJr4rwFR%2BUiGsaVOx%2FKg8Ul06nF3%2BNkI%2BJpYMWGS03F3ws9cmLumb00Wln6rNk9xi3mAWDBoLQ6df7nsfM8UTIzD5jdPABjqkAaa5ZwlZNoGEWyyUFlIMfuvtSCHNausoKpKFmeY533ulkgLU%2BarX9wIRhXmdaNTxbaRkIAD1Y%2BnchsUCm%2BzHbxxXsvQwfNE%2FeNyQNQ6ItFfqlVL40zfH0H%2Fu2Ws1Hgi1e%2Fnziv2Edg8er2lRvz58qX4gh%2FcopRD%2FX%2B6COuJ0RVkBJ0emJHEjBKZXi%2FMQJ7NiIS2nkm6rZIVONNXbwJWJM6jjalaH&X-Amz-Signature=0c2cd7807900280b14ad6bc7e52df4610b75438a60bef71a74e4803fda16789a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSC435AQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQC7cruBR8FtR2Tw15c5OZcIz8%2B1xuMqz9H6z8qPyMr6bwIhAIhshxgqdEHVjh5OY%2BebwE4jcCVGbdTNhK8UN8dLxyeEKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0MmBM7nRSpqk6Ce4q3AMyL0e3OVmmagAJOU4YWVrz0cHA%2BT2PjmlHXpGoawPDU%2B1EnJSPYPo1bmh2xYccYZUJyR2ufkB%2BeLlmTNdCxwRg%2FzdGby5AzgudEFzEwvNGypVHTZ2j7lg8zPi8gb0dL1INLIRoB4Cd8V4xq0ExzM4g%2BOO9BfL3G5bWYDGETTJN15pMxVWVV09jq3glnshFa0bxPEFQlZECOohH2zBlEwjeFi2hMIpwhkwABevhsfB5SYeOWXp4OXAgyQC4%2Fud6rtqFC6l8zJIYN%2FeaAbBrv4UXvGMbUGjTxfGxQl54TmBXDE%2FhmV0VjfGOb1993Yq0kb4w0M4WzStQPj1ge5RcU%2FRO6CWSUO2u5lFds7wp81oWVRmcMxkWKOKUmQLhrFM7tQE%2F1jYdbDC61JMqTzT3mMoo35kaniuUUwyjGiJWJnKHZKwcxGaGF%2BuNh4zn03cBMZ69hxAUcPRlokeztMcRP1hfnpxA4Oc08ej%2FyJ7ildRs4yQw3ounb2vdfP40EDGcaHIJPDeu9095lwIJLAXjqd%2F7xka0KoC2kdWv7SLPJr4rwFR%2BUiGsaVOx%2FKg8Ul06nF3%2BNkI%2BJpYMWGS03F3ws9cmLumb00Wln6rNk9xi3mAWDBoLQ6df7nsfM8UTIzD5jdPABjqkAaa5ZwlZNoGEWyyUFlIMfuvtSCHNausoKpKFmeY533ulkgLU%2BarX9wIRhXmdaNTxbaRkIAD1Y%2BnchsUCm%2BzHbxxXsvQwfNE%2FeNyQNQ6ItFfqlVL40zfH0H%2Fu2Ws1Hgi1e%2Fnziv2Edg8er2lRvz58qX4gh%2FcopRD%2FX%2B6COuJ0RVkBJ0emJHEjBKZXi%2FMQJ7NiIS2nkm6rZIVONNXbwJWJM6jjalaH&X-Amz-Signature=3d93e236d351ae37b53a9fddb95f3745e1ae340a549d3e114e1297fd56523ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSC435AQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQC7cruBR8FtR2Tw15c5OZcIz8%2B1xuMqz9H6z8qPyMr6bwIhAIhshxgqdEHVjh5OY%2BebwE4jcCVGbdTNhK8UN8dLxyeEKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0MmBM7nRSpqk6Ce4q3AMyL0e3OVmmagAJOU4YWVrz0cHA%2BT2PjmlHXpGoawPDU%2B1EnJSPYPo1bmh2xYccYZUJyR2ufkB%2BeLlmTNdCxwRg%2FzdGby5AzgudEFzEwvNGypVHTZ2j7lg8zPi8gb0dL1INLIRoB4Cd8V4xq0ExzM4g%2BOO9BfL3G5bWYDGETTJN15pMxVWVV09jq3glnshFa0bxPEFQlZECOohH2zBlEwjeFi2hMIpwhkwABevhsfB5SYeOWXp4OXAgyQC4%2Fud6rtqFC6l8zJIYN%2FeaAbBrv4UXvGMbUGjTxfGxQl54TmBXDE%2FhmV0VjfGOb1993Yq0kb4w0M4WzStQPj1ge5RcU%2FRO6CWSUO2u5lFds7wp81oWVRmcMxkWKOKUmQLhrFM7tQE%2F1jYdbDC61JMqTzT3mMoo35kaniuUUwyjGiJWJnKHZKwcxGaGF%2BuNh4zn03cBMZ69hxAUcPRlokeztMcRP1hfnpxA4Oc08ej%2FyJ7ildRs4yQw3ounb2vdfP40EDGcaHIJPDeu9095lwIJLAXjqd%2F7xka0KoC2kdWv7SLPJr4rwFR%2BUiGsaVOx%2FKg8Ul06nF3%2BNkI%2BJpYMWGS03F3ws9cmLumb00Wln6rNk9xi3mAWDBoLQ6df7nsfM8UTIzD5jdPABjqkAaa5ZwlZNoGEWyyUFlIMfuvtSCHNausoKpKFmeY533ulkgLU%2BarX9wIRhXmdaNTxbaRkIAD1Y%2BnchsUCm%2BzHbxxXsvQwfNE%2FeNyQNQ6ItFfqlVL40zfH0H%2Fu2Ws1Hgi1e%2Fnziv2Edg8er2lRvz58qX4gh%2FcopRD%2FX%2B6COuJ0RVkBJ0emJHEjBKZXi%2FMQJ7NiIS2nkm6rZIVONNXbwJWJM6jjalaH&X-Amz-Signature=413f9700fffd4aa3f68a2d202f601e08add99f5c38ad22895c6ba674ec8902a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSC435AQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQC7cruBR8FtR2Tw15c5OZcIz8%2B1xuMqz9H6z8qPyMr6bwIhAIhshxgqdEHVjh5OY%2BebwE4jcCVGbdTNhK8UN8dLxyeEKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0MmBM7nRSpqk6Ce4q3AMyL0e3OVmmagAJOU4YWVrz0cHA%2BT2PjmlHXpGoawPDU%2B1EnJSPYPo1bmh2xYccYZUJyR2ufkB%2BeLlmTNdCxwRg%2FzdGby5AzgudEFzEwvNGypVHTZ2j7lg8zPi8gb0dL1INLIRoB4Cd8V4xq0ExzM4g%2BOO9BfL3G5bWYDGETTJN15pMxVWVV09jq3glnshFa0bxPEFQlZECOohH2zBlEwjeFi2hMIpwhkwABevhsfB5SYeOWXp4OXAgyQC4%2Fud6rtqFC6l8zJIYN%2FeaAbBrv4UXvGMbUGjTxfGxQl54TmBXDE%2FhmV0VjfGOb1993Yq0kb4w0M4WzStQPj1ge5RcU%2FRO6CWSUO2u5lFds7wp81oWVRmcMxkWKOKUmQLhrFM7tQE%2F1jYdbDC61JMqTzT3mMoo35kaniuUUwyjGiJWJnKHZKwcxGaGF%2BuNh4zn03cBMZ69hxAUcPRlokeztMcRP1hfnpxA4Oc08ej%2FyJ7ildRs4yQw3ounb2vdfP40EDGcaHIJPDeu9095lwIJLAXjqd%2F7xka0KoC2kdWv7SLPJr4rwFR%2BUiGsaVOx%2FKg8Ul06nF3%2BNkI%2BJpYMWGS03F3ws9cmLumb00Wln6rNk9xi3mAWDBoLQ6df7nsfM8UTIzD5jdPABjqkAaa5ZwlZNoGEWyyUFlIMfuvtSCHNausoKpKFmeY533ulkgLU%2BarX9wIRhXmdaNTxbaRkIAD1Y%2BnchsUCm%2BzHbxxXsvQwfNE%2FeNyQNQ6ItFfqlVL40zfH0H%2Fu2Ws1Hgi1e%2Fnziv2Edg8er2lRvz58qX4gh%2FcopRD%2FX%2B6COuJ0RVkBJ0emJHEjBKZXi%2FMQJ7NiIS2nkm6rZIVONNXbwJWJM6jjalaH&X-Amz-Signature=03c8f421f2e15176f54faf00df06f14a2419952e8c78bf904ad89ed5b5802272&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
