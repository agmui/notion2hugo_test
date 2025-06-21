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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TE6E4KI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICV7r4OQZrp2ZMetVL8QsEgXqwmG6Ng8Oqgre%2FecvBWkAiB6AMM5S11h2gcqzrkYoLjCOBqRR%2BgQsNkOpqLDymHNESqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZy7eko2p82yE6oCOKtwDK6VKzdE%2BL0TesTQS2SwNs%2BfQ%2FPe%2BJMhHnbVQoqHrFXX8nlfhML6uLZ%2BctGKswgl9KUAX9eAeSex7A19yuTaTpORdeyH5roSh8XEbDsop1psxnRRh8LJOKGEbLa4JDOJcwRP%2BVw2DVS1%2Bes5kDeQAefgiPWww156%2B12UCmTVShdSV8vj02w4%2BIcw2gz%2Bs5kK%2BJcLhZzuGGl%2B2EiZ0rRVC4%2Fo7EzujOaRwNPNzug0B2bxOkMWoWsiaysYGO8m5T95RWimthletgB3eL4%2FU8tBrr7GA7yqkb3%2Fus4od7cn5yONw%2FJoBKhseSf%2BhKx3qFYocQ0830s4SJVElCtetnbJmr18Y1UGfnrg7YpYy5Aja%2BplF4EYX6GoKiKwQ1ARSs%2FzpPSJKkkHvvNPtSUgxvas4eT2VeRIBkDkbjYu0JUTCmzmhLHFHGXpgCweuLI2Cp7f1J5R7SeFNTpD6tCvP%2F6otW83US0ZAUdAVty3b6y3aiNK3Zx7J69oCdO%2FK7xNERdZduxXNfxb31Wv3lEAfX3dKQLdR2x%2BP1b3vHJufxyKGExVZewFNt3rn3bb7akubXATv7toZqcGP18Zz7BZIUpSHeWDipUMa4V5FR6mPjuFwP5KuA3NVx7xc8trTcGswlt3cwgY6pgFbFEtQI2BEq%2Ft9Wbs0KDdfkObM0CrViQOv4IGHqs45zG3Rtib7N878ufveG%2Fg7a4c13spybr7PkCFkAfDnZr8MgCViVAXmDfQjNoHrD7anF%2FYh4%2F%2BZ14V3aLlHn6ztxTsnq0mBPGUJY1OUXkbESA5N70skSr16NmhFCdLNDPbhDkJhIRY3Y0z2MN6jENICtXb6KJsbxYm46kJT0zTy3JCDxAYrXfZv&X-Amz-Signature=2a5099585b80bb5bacb01ad606ea584ff8b8f1b979cc1f1187ffa78478a8cb98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TE6E4KI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICV7r4OQZrp2ZMetVL8QsEgXqwmG6Ng8Oqgre%2FecvBWkAiB6AMM5S11h2gcqzrkYoLjCOBqRR%2BgQsNkOpqLDymHNESqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZy7eko2p82yE6oCOKtwDK6VKzdE%2BL0TesTQS2SwNs%2BfQ%2FPe%2BJMhHnbVQoqHrFXX8nlfhML6uLZ%2BctGKswgl9KUAX9eAeSex7A19yuTaTpORdeyH5roSh8XEbDsop1psxnRRh8LJOKGEbLa4JDOJcwRP%2BVw2DVS1%2Bes5kDeQAefgiPWww156%2B12UCmTVShdSV8vj02w4%2BIcw2gz%2Bs5kK%2BJcLhZzuGGl%2B2EiZ0rRVC4%2Fo7EzujOaRwNPNzug0B2bxOkMWoWsiaysYGO8m5T95RWimthletgB3eL4%2FU8tBrr7GA7yqkb3%2Fus4od7cn5yONw%2FJoBKhseSf%2BhKx3qFYocQ0830s4SJVElCtetnbJmr18Y1UGfnrg7YpYy5Aja%2BplF4EYX6GoKiKwQ1ARSs%2FzpPSJKkkHvvNPtSUgxvas4eT2VeRIBkDkbjYu0JUTCmzmhLHFHGXpgCweuLI2Cp7f1J5R7SeFNTpD6tCvP%2F6otW83US0ZAUdAVty3b6y3aiNK3Zx7J69oCdO%2FK7xNERdZduxXNfxb31Wv3lEAfX3dKQLdR2x%2BP1b3vHJufxyKGExVZewFNt3rn3bb7akubXATv7toZqcGP18Zz7BZIUpSHeWDipUMa4V5FR6mPjuFwP5KuA3NVx7xc8trTcGswlt3cwgY6pgFbFEtQI2BEq%2Ft9Wbs0KDdfkObM0CrViQOv4IGHqs45zG3Rtib7N878ufveG%2Fg7a4c13spybr7PkCFkAfDnZr8MgCViVAXmDfQjNoHrD7anF%2FYh4%2F%2BZ14V3aLlHn6ztxTsnq0mBPGUJY1OUXkbESA5N70skSr16NmhFCdLNDPbhDkJhIRY3Y0z2MN6jENICtXb6KJsbxYm46kJT0zTy3JCDxAYrXfZv&X-Amz-Signature=9c4ce0a65be46e410cc84aa0874e276a3031437906f2ced9ee5072cd971100be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TE6E4KI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICV7r4OQZrp2ZMetVL8QsEgXqwmG6Ng8Oqgre%2FecvBWkAiB6AMM5S11h2gcqzrkYoLjCOBqRR%2BgQsNkOpqLDymHNESqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZy7eko2p82yE6oCOKtwDK6VKzdE%2BL0TesTQS2SwNs%2BfQ%2FPe%2BJMhHnbVQoqHrFXX8nlfhML6uLZ%2BctGKswgl9KUAX9eAeSex7A19yuTaTpORdeyH5roSh8XEbDsop1psxnRRh8LJOKGEbLa4JDOJcwRP%2BVw2DVS1%2Bes5kDeQAefgiPWww156%2B12UCmTVShdSV8vj02w4%2BIcw2gz%2Bs5kK%2BJcLhZzuGGl%2B2EiZ0rRVC4%2Fo7EzujOaRwNPNzug0B2bxOkMWoWsiaysYGO8m5T95RWimthletgB3eL4%2FU8tBrr7GA7yqkb3%2Fus4od7cn5yONw%2FJoBKhseSf%2BhKx3qFYocQ0830s4SJVElCtetnbJmr18Y1UGfnrg7YpYy5Aja%2BplF4EYX6GoKiKwQ1ARSs%2FzpPSJKkkHvvNPtSUgxvas4eT2VeRIBkDkbjYu0JUTCmzmhLHFHGXpgCweuLI2Cp7f1J5R7SeFNTpD6tCvP%2F6otW83US0ZAUdAVty3b6y3aiNK3Zx7J69oCdO%2FK7xNERdZduxXNfxb31Wv3lEAfX3dKQLdR2x%2BP1b3vHJufxyKGExVZewFNt3rn3bb7akubXATv7toZqcGP18Zz7BZIUpSHeWDipUMa4V5FR6mPjuFwP5KuA3NVx7xc8trTcGswlt3cwgY6pgFbFEtQI2BEq%2Ft9Wbs0KDdfkObM0CrViQOv4IGHqs45zG3Rtib7N878ufveG%2Fg7a4c13spybr7PkCFkAfDnZr8MgCViVAXmDfQjNoHrD7anF%2FYh4%2F%2BZ14V3aLlHn6ztxTsnq0mBPGUJY1OUXkbESA5N70skSr16NmhFCdLNDPbhDkJhIRY3Y0z2MN6jENICtXb6KJsbxYm46kJT0zTy3JCDxAYrXfZv&X-Amz-Signature=83be82c9700508693e319d15927fbe36765a978821f3bfd5fd8c0625e332734e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TE6E4KI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICV7r4OQZrp2ZMetVL8QsEgXqwmG6Ng8Oqgre%2FecvBWkAiB6AMM5S11h2gcqzrkYoLjCOBqRR%2BgQsNkOpqLDymHNESqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZy7eko2p82yE6oCOKtwDK6VKzdE%2BL0TesTQS2SwNs%2BfQ%2FPe%2BJMhHnbVQoqHrFXX8nlfhML6uLZ%2BctGKswgl9KUAX9eAeSex7A19yuTaTpORdeyH5roSh8XEbDsop1psxnRRh8LJOKGEbLa4JDOJcwRP%2BVw2DVS1%2Bes5kDeQAefgiPWww156%2B12UCmTVShdSV8vj02w4%2BIcw2gz%2Bs5kK%2BJcLhZzuGGl%2B2EiZ0rRVC4%2Fo7EzujOaRwNPNzug0B2bxOkMWoWsiaysYGO8m5T95RWimthletgB3eL4%2FU8tBrr7GA7yqkb3%2Fus4od7cn5yONw%2FJoBKhseSf%2BhKx3qFYocQ0830s4SJVElCtetnbJmr18Y1UGfnrg7YpYy5Aja%2BplF4EYX6GoKiKwQ1ARSs%2FzpPSJKkkHvvNPtSUgxvas4eT2VeRIBkDkbjYu0JUTCmzmhLHFHGXpgCweuLI2Cp7f1J5R7SeFNTpD6tCvP%2F6otW83US0ZAUdAVty3b6y3aiNK3Zx7J69oCdO%2FK7xNERdZduxXNfxb31Wv3lEAfX3dKQLdR2x%2BP1b3vHJufxyKGExVZewFNt3rn3bb7akubXATv7toZqcGP18Zz7BZIUpSHeWDipUMa4V5FR6mPjuFwP5KuA3NVx7xc8trTcGswlt3cwgY6pgFbFEtQI2BEq%2Ft9Wbs0KDdfkObM0CrViQOv4IGHqs45zG3Rtib7N878ufveG%2Fg7a4c13spybr7PkCFkAfDnZr8MgCViVAXmDfQjNoHrD7anF%2FYh4%2F%2BZ14V3aLlHn6ztxTsnq0mBPGUJY1OUXkbESA5N70skSr16NmhFCdLNDPbhDkJhIRY3Y0z2MN6jENICtXb6KJsbxYm46kJT0zTy3JCDxAYrXfZv&X-Amz-Signature=de657c96a86f1e03833d9d0602bb8fb8d1520729fa2ec2e8aad29187a388b8c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TE6E4KI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICV7r4OQZrp2ZMetVL8QsEgXqwmG6Ng8Oqgre%2FecvBWkAiB6AMM5S11h2gcqzrkYoLjCOBqRR%2BgQsNkOpqLDymHNESqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZy7eko2p82yE6oCOKtwDK6VKzdE%2BL0TesTQS2SwNs%2BfQ%2FPe%2BJMhHnbVQoqHrFXX8nlfhML6uLZ%2BctGKswgl9KUAX9eAeSex7A19yuTaTpORdeyH5roSh8XEbDsop1psxnRRh8LJOKGEbLa4JDOJcwRP%2BVw2DVS1%2Bes5kDeQAefgiPWww156%2B12UCmTVShdSV8vj02w4%2BIcw2gz%2Bs5kK%2BJcLhZzuGGl%2B2EiZ0rRVC4%2Fo7EzujOaRwNPNzug0B2bxOkMWoWsiaysYGO8m5T95RWimthletgB3eL4%2FU8tBrr7GA7yqkb3%2Fus4od7cn5yONw%2FJoBKhseSf%2BhKx3qFYocQ0830s4SJVElCtetnbJmr18Y1UGfnrg7YpYy5Aja%2BplF4EYX6GoKiKwQ1ARSs%2FzpPSJKkkHvvNPtSUgxvas4eT2VeRIBkDkbjYu0JUTCmzmhLHFHGXpgCweuLI2Cp7f1J5R7SeFNTpD6tCvP%2F6otW83US0ZAUdAVty3b6y3aiNK3Zx7J69oCdO%2FK7xNERdZduxXNfxb31Wv3lEAfX3dKQLdR2x%2BP1b3vHJufxyKGExVZewFNt3rn3bb7akubXATv7toZqcGP18Zz7BZIUpSHeWDipUMa4V5FR6mPjuFwP5KuA3NVx7xc8trTcGswlt3cwgY6pgFbFEtQI2BEq%2Ft9Wbs0KDdfkObM0CrViQOv4IGHqs45zG3Rtib7N878ufveG%2Fg7a4c13spybr7PkCFkAfDnZr8MgCViVAXmDfQjNoHrD7anF%2FYh4%2F%2BZ14V3aLlHn6ztxTsnq0mBPGUJY1OUXkbESA5N70skSr16NmhFCdLNDPbhDkJhIRY3Y0z2MN6jENICtXb6KJsbxYm46kJT0zTy3JCDxAYrXfZv&X-Amz-Signature=d6ac47f27859c15e452fd5b68298be96c6d2f69da2ea79d06912c43a537ee186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
