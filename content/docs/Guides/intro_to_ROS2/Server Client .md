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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZBU2EKI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDpbOBxvte9LcaJIOZTuumLaS4unFj17%2BjaB7mkh9PyxAiEA1UMUW%2B5L5R8%2BD4jRDuvb%2BxfA8bhUdiol4kRwtIzWtz4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnStkPKe75RA7IglircA5LvjV1flcofy6AF5fDLDyGluLIMq5KXgMCJ9asXY2GrjNBvs1bkrfZ1GSZ0IOdtyT7oV7JQH8WvZK2tN14Ujtl0T1NHVxPyjBYG4U1zLCBZ2th2%2FG5otgb0Prjare87GO4bvUXIp9dk120cTQCPlzF%2Bthqw%2BQ9YW7bRlqfGHuMJexb3IygBHPue5druQGJ4Yp17kVjiDQ%2FvHekPVePf4j5QYwpB1%2F%2FMiMYdNFt3xmtfOB31y%2Bk%2FXD%2F3KASygeHXJOxldxi57yv%2FUUvIdTzrpW9m4hch27MxL4cFsCJJi%2B8KZXhJeORgBhKc8Ogjg8NEfajM0MmHlwdxYREuLrVai8W1fHmyd6%2F4CGyDQO5FsUKurvRMN7ZRbdcK2hNqJyM3tj84pn2a9RlR38dd79GKnDr1p%2BMUYUl5I0owxNQ59x0pN2mAuze8frjbndk1%2BVBE07%2FpNfpfB7J%2F5fOwxrChkKN6XKsJ791%2BIZHwFlPaZqgBrErJGuo5EOEqUBHLTI4KhCj9AWrqAjzKaVwwjcXllZlA1Xq8dfLKKKAqRruKevZ3lwbsi%2FuddriyGwQJOSu36lt8Ak61goYLCqeiMA2FCenmzQNT1z7j1m4HffJAYdjdJV7pMDYb2Z%2FQfvOoMPey98EGOqUBFDDEB1jqO%2FVQYhsngwnTRgHcGXJbiRrT%2FcAd0PheZwM2%2Fj82C3xXhgiGda7ugsh%2F69BcN%2FxNH%2BNo%2BloUGB1GuAETIXVFRL67SagliSG2vlA%2BQ3L66Sc%2BBuiXaOY9JerzXzv4%2FbzufHJTQJu7UBzPY9rPd3fCkOunP4TMq6%2Bc1U7D%2Bo%2F1hhi2zIKOb1lAKagS8E7n0mMuvY8rusfkesMI1wLbTwxt&X-Amz-Signature=fe7788ce63e52df4bb727be9b959f879b859be7e75aa27f2c442b63d48a00ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZBU2EKI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDpbOBxvte9LcaJIOZTuumLaS4unFj17%2BjaB7mkh9PyxAiEA1UMUW%2B5L5R8%2BD4jRDuvb%2BxfA8bhUdiol4kRwtIzWtz4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnStkPKe75RA7IglircA5LvjV1flcofy6AF5fDLDyGluLIMq5KXgMCJ9asXY2GrjNBvs1bkrfZ1GSZ0IOdtyT7oV7JQH8WvZK2tN14Ujtl0T1NHVxPyjBYG4U1zLCBZ2th2%2FG5otgb0Prjare87GO4bvUXIp9dk120cTQCPlzF%2Bthqw%2BQ9YW7bRlqfGHuMJexb3IygBHPue5druQGJ4Yp17kVjiDQ%2FvHekPVePf4j5QYwpB1%2F%2FMiMYdNFt3xmtfOB31y%2Bk%2FXD%2F3KASygeHXJOxldxi57yv%2FUUvIdTzrpW9m4hch27MxL4cFsCJJi%2B8KZXhJeORgBhKc8Ogjg8NEfajM0MmHlwdxYREuLrVai8W1fHmyd6%2F4CGyDQO5FsUKurvRMN7ZRbdcK2hNqJyM3tj84pn2a9RlR38dd79GKnDr1p%2BMUYUl5I0owxNQ59x0pN2mAuze8frjbndk1%2BVBE07%2FpNfpfB7J%2F5fOwxrChkKN6XKsJ791%2BIZHwFlPaZqgBrErJGuo5EOEqUBHLTI4KhCj9AWrqAjzKaVwwjcXllZlA1Xq8dfLKKKAqRruKevZ3lwbsi%2FuddriyGwQJOSu36lt8Ak61goYLCqeiMA2FCenmzQNT1z7j1m4HffJAYdjdJV7pMDYb2Z%2FQfvOoMPey98EGOqUBFDDEB1jqO%2FVQYhsngwnTRgHcGXJbiRrT%2FcAd0PheZwM2%2Fj82C3xXhgiGda7ugsh%2F69BcN%2FxNH%2BNo%2BloUGB1GuAETIXVFRL67SagliSG2vlA%2BQ3L66Sc%2BBuiXaOY9JerzXzv4%2FbzufHJTQJu7UBzPY9rPd3fCkOunP4TMq6%2Bc1U7D%2Bo%2F1hhi2zIKOb1lAKagS8E7n0mMuvY8rusfkesMI1wLbTwxt&X-Amz-Signature=2d6b814b2186ed21ffb5de779fd0ec92267a0b97199db5159583ffb4c9478d18&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZBU2EKI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDpbOBxvte9LcaJIOZTuumLaS4unFj17%2BjaB7mkh9PyxAiEA1UMUW%2B5L5R8%2BD4jRDuvb%2BxfA8bhUdiol4kRwtIzWtz4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnStkPKe75RA7IglircA5LvjV1flcofy6AF5fDLDyGluLIMq5KXgMCJ9asXY2GrjNBvs1bkrfZ1GSZ0IOdtyT7oV7JQH8WvZK2tN14Ujtl0T1NHVxPyjBYG4U1zLCBZ2th2%2FG5otgb0Prjare87GO4bvUXIp9dk120cTQCPlzF%2Bthqw%2BQ9YW7bRlqfGHuMJexb3IygBHPue5druQGJ4Yp17kVjiDQ%2FvHekPVePf4j5QYwpB1%2F%2FMiMYdNFt3xmtfOB31y%2Bk%2FXD%2F3KASygeHXJOxldxi57yv%2FUUvIdTzrpW9m4hch27MxL4cFsCJJi%2B8KZXhJeORgBhKc8Ogjg8NEfajM0MmHlwdxYREuLrVai8W1fHmyd6%2F4CGyDQO5FsUKurvRMN7ZRbdcK2hNqJyM3tj84pn2a9RlR38dd79GKnDr1p%2BMUYUl5I0owxNQ59x0pN2mAuze8frjbndk1%2BVBE07%2FpNfpfB7J%2F5fOwxrChkKN6XKsJ791%2BIZHwFlPaZqgBrErJGuo5EOEqUBHLTI4KhCj9AWrqAjzKaVwwjcXllZlA1Xq8dfLKKKAqRruKevZ3lwbsi%2FuddriyGwQJOSu36lt8Ak61goYLCqeiMA2FCenmzQNT1z7j1m4HffJAYdjdJV7pMDYb2Z%2FQfvOoMPey98EGOqUBFDDEB1jqO%2FVQYhsngwnTRgHcGXJbiRrT%2FcAd0PheZwM2%2Fj82C3xXhgiGda7ugsh%2F69BcN%2FxNH%2BNo%2BloUGB1GuAETIXVFRL67SagliSG2vlA%2BQ3L66Sc%2BBuiXaOY9JerzXzv4%2FbzufHJTQJu7UBzPY9rPd3fCkOunP4TMq6%2Bc1U7D%2Bo%2F1hhi2zIKOb1lAKagS8E7n0mMuvY8rusfkesMI1wLbTwxt&X-Amz-Signature=a5f818a1349b48ef88639d1d82f785742237048fc44eae9d5ab8ea85e5d22d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZBU2EKI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDpbOBxvte9LcaJIOZTuumLaS4unFj17%2BjaB7mkh9PyxAiEA1UMUW%2B5L5R8%2BD4jRDuvb%2BxfA8bhUdiol4kRwtIzWtz4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnStkPKe75RA7IglircA5LvjV1flcofy6AF5fDLDyGluLIMq5KXgMCJ9asXY2GrjNBvs1bkrfZ1GSZ0IOdtyT7oV7JQH8WvZK2tN14Ujtl0T1NHVxPyjBYG4U1zLCBZ2th2%2FG5otgb0Prjare87GO4bvUXIp9dk120cTQCPlzF%2Bthqw%2BQ9YW7bRlqfGHuMJexb3IygBHPue5druQGJ4Yp17kVjiDQ%2FvHekPVePf4j5QYwpB1%2F%2FMiMYdNFt3xmtfOB31y%2Bk%2FXD%2F3KASygeHXJOxldxi57yv%2FUUvIdTzrpW9m4hch27MxL4cFsCJJi%2B8KZXhJeORgBhKc8Ogjg8NEfajM0MmHlwdxYREuLrVai8W1fHmyd6%2F4CGyDQO5FsUKurvRMN7ZRbdcK2hNqJyM3tj84pn2a9RlR38dd79GKnDr1p%2BMUYUl5I0owxNQ59x0pN2mAuze8frjbndk1%2BVBE07%2FpNfpfB7J%2F5fOwxrChkKN6XKsJ791%2BIZHwFlPaZqgBrErJGuo5EOEqUBHLTI4KhCj9AWrqAjzKaVwwjcXllZlA1Xq8dfLKKKAqRruKevZ3lwbsi%2FuddriyGwQJOSu36lt8Ak61goYLCqeiMA2FCenmzQNT1z7j1m4HffJAYdjdJV7pMDYb2Z%2FQfvOoMPey98EGOqUBFDDEB1jqO%2FVQYhsngwnTRgHcGXJbiRrT%2FcAd0PheZwM2%2Fj82C3xXhgiGda7ugsh%2F69BcN%2FxNH%2BNo%2BloUGB1GuAETIXVFRL67SagliSG2vlA%2BQ3L66Sc%2BBuiXaOY9JerzXzv4%2FbzufHJTQJu7UBzPY9rPd3fCkOunP4TMq6%2Bc1U7D%2Bo%2F1hhi2zIKOb1lAKagS8E7n0mMuvY8rusfkesMI1wLbTwxt&X-Amz-Signature=1cd3a57a38701bb9af8d730bf91e64f78d1f59c074d8588deabef24715fd9ab8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZBU2EKI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDpbOBxvte9LcaJIOZTuumLaS4unFj17%2BjaB7mkh9PyxAiEA1UMUW%2B5L5R8%2BD4jRDuvb%2BxfA8bhUdiol4kRwtIzWtz4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnStkPKe75RA7IglircA5LvjV1flcofy6AF5fDLDyGluLIMq5KXgMCJ9asXY2GrjNBvs1bkrfZ1GSZ0IOdtyT7oV7JQH8WvZK2tN14Ujtl0T1NHVxPyjBYG4U1zLCBZ2th2%2FG5otgb0Prjare87GO4bvUXIp9dk120cTQCPlzF%2Bthqw%2BQ9YW7bRlqfGHuMJexb3IygBHPue5druQGJ4Yp17kVjiDQ%2FvHekPVePf4j5QYwpB1%2F%2FMiMYdNFt3xmtfOB31y%2Bk%2FXD%2F3KASygeHXJOxldxi57yv%2FUUvIdTzrpW9m4hch27MxL4cFsCJJi%2B8KZXhJeORgBhKc8Ogjg8NEfajM0MmHlwdxYREuLrVai8W1fHmyd6%2F4CGyDQO5FsUKurvRMN7ZRbdcK2hNqJyM3tj84pn2a9RlR38dd79GKnDr1p%2BMUYUl5I0owxNQ59x0pN2mAuze8frjbndk1%2BVBE07%2FpNfpfB7J%2F5fOwxrChkKN6XKsJ791%2BIZHwFlPaZqgBrErJGuo5EOEqUBHLTI4KhCj9AWrqAjzKaVwwjcXllZlA1Xq8dfLKKKAqRruKevZ3lwbsi%2FuddriyGwQJOSu36lt8Ak61goYLCqeiMA2FCenmzQNT1z7j1m4HffJAYdjdJV7pMDYb2Z%2FQfvOoMPey98EGOqUBFDDEB1jqO%2FVQYhsngwnTRgHcGXJbiRrT%2FcAd0PheZwM2%2Fj82C3xXhgiGda7ugsh%2F69BcN%2FxNH%2BNo%2BloUGB1GuAETIXVFRL67SagliSG2vlA%2BQ3L66Sc%2BBuiXaOY9JerzXzv4%2FbzufHJTQJu7UBzPY9rPd3fCkOunP4TMq6%2Bc1U7D%2Bo%2F1hhi2zIKOb1lAKagS8E7n0mMuvY8rusfkesMI1wLbTwxt&X-Amz-Signature=f95d0d64af149e2b6972870206b4b193ba1cee5704f905d6be5824020b067714&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
