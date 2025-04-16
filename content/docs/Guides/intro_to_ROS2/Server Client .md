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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JRYCSHU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhZUZ8DMEiKb6RgotiNPJUKrbFpLSOIrEiqH5jkOONdAiEA7ne5Z5r1jrp8ep1uU0V%2BoQUUXi%2FXf0vY1%2BxVd1jRoyIq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDK6gXoVqiYuBc%2BBfTircA0w60hw1FmRuf4FVlQT1UklfOi837Q7LojGlIQWCsqOec%2FnaMpCvPW4XE%2BzbaF7NYZLrzN%2F%2F6F1mDgEvJA%2F3WNkdIBZHu7zdiWxmPXxCGFilDJFMHT1Tb7MQIjNCHF2b3UcVcXhnn%2BPYT9UYAKeXvmHJcE3xv1TlLYSvRFcCwds06%2F1tJWFs8tvxirYOFUw36GfhD5xuOqmXkUM6hAZOiT%2Br0rigUvH1%2FIVtPrHPuozoEwPImIfphT%2FU4cb8nEhIQboAZ2DnsUiC8pJDJXe9u4zheKssJJgKJdhE%2FILHoqldiAzGCXRglnKBBtktEhyKGGU9AZG%2BKLxuzdxezPla1yUddONfUwdwsyJUX8ljLncu6LEEImW6ho2qb%2BIenDsjB2T%2FIsY%2FVa%2F2z6DkyluVoVRwQqQMwLAFyZEGAiSa14N1g1uVkTviAcmr54bygSu7BlKvebww2NbmSXWoPXroyPeJpzjlGmHAt8pRhHe4fydkMPsopWcHsgUf747gYVASlbT8xpWLmZSIJ2dMWQFwhuLGwN8KedC302EjJIOJfGmvyuaYwh6dXfnT%2FcfcvOGQtLlIdyYDMZCrea893WFDZBV3BR%2FLo4%2FcWedm4RMhY%2FlilzsmSi3NDe2d3R0TMPD3%2Fr8GOqUBgCQSH0qHaagrxZRw%2BWDtKUfYSzaIZwoQO0KUQ2CUdbyYnia%2Bjq6k3TIAa3eyB01w%2F4U8iyGlYiAJmTVDAIYXyh2yM0XRLzvK2RD3%2FeGQcMS9SmYtNa2eD7NCA%2F3YoM7bzjyUTI%2BV3nPl4%2FaE%2FAFghqwBXsahJSfSYR%2BUGI%2Bt254xnX%2Bkn8OSHHSq%2FkWC9B1fCNNrIC0m1e7P95gdn%2FrBHFKf7F02&X-Amz-Signature=6627f4e37f86da6ab77f45f65c297d56a7d676c49d300a704ddc060d01b489e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JRYCSHU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhZUZ8DMEiKb6RgotiNPJUKrbFpLSOIrEiqH5jkOONdAiEA7ne5Z5r1jrp8ep1uU0V%2BoQUUXi%2FXf0vY1%2BxVd1jRoyIq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDK6gXoVqiYuBc%2BBfTircA0w60hw1FmRuf4FVlQT1UklfOi837Q7LojGlIQWCsqOec%2FnaMpCvPW4XE%2BzbaF7NYZLrzN%2F%2F6F1mDgEvJA%2F3WNkdIBZHu7zdiWxmPXxCGFilDJFMHT1Tb7MQIjNCHF2b3UcVcXhnn%2BPYT9UYAKeXvmHJcE3xv1TlLYSvRFcCwds06%2F1tJWFs8tvxirYOFUw36GfhD5xuOqmXkUM6hAZOiT%2Br0rigUvH1%2FIVtPrHPuozoEwPImIfphT%2FU4cb8nEhIQboAZ2DnsUiC8pJDJXe9u4zheKssJJgKJdhE%2FILHoqldiAzGCXRglnKBBtktEhyKGGU9AZG%2BKLxuzdxezPla1yUddONfUwdwsyJUX8ljLncu6LEEImW6ho2qb%2BIenDsjB2T%2FIsY%2FVa%2F2z6DkyluVoVRwQqQMwLAFyZEGAiSa14N1g1uVkTviAcmr54bygSu7BlKvebww2NbmSXWoPXroyPeJpzjlGmHAt8pRhHe4fydkMPsopWcHsgUf747gYVASlbT8xpWLmZSIJ2dMWQFwhuLGwN8KedC302EjJIOJfGmvyuaYwh6dXfnT%2FcfcvOGQtLlIdyYDMZCrea893WFDZBV3BR%2FLo4%2FcWedm4RMhY%2FlilzsmSi3NDe2d3R0TMPD3%2Fr8GOqUBgCQSH0qHaagrxZRw%2BWDtKUfYSzaIZwoQO0KUQ2CUdbyYnia%2Bjq6k3TIAa3eyB01w%2F4U8iyGlYiAJmTVDAIYXyh2yM0XRLzvK2RD3%2FeGQcMS9SmYtNa2eD7NCA%2F3YoM7bzjyUTI%2BV3nPl4%2FaE%2FAFghqwBXsahJSfSYR%2BUGI%2Bt254xnX%2Bkn8OSHHSq%2FkWC9B1fCNNrIC0m1e7P95gdn%2FrBHFKf7F02&X-Amz-Signature=595689194acefdcb4cb41f33b54d94bea50c5ae36f76fd7c2308c746e2584efd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JRYCSHU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhZUZ8DMEiKb6RgotiNPJUKrbFpLSOIrEiqH5jkOONdAiEA7ne5Z5r1jrp8ep1uU0V%2BoQUUXi%2FXf0vY1%2BxVd1jRoyIq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDK6gXoVqiYuBc%2BBfTircA0w60hw1FmRuf4FVlQT1UklfOi837Q7LojGlIQWCsqOec%2FnaMpCvPW4XE%2BzbaF7NYZLrzN%2F%2F6F1mDgEvJA%2F3WNkdIBZHu7zdiWxmPXxCGFilDJFMHT1Tb7MQIjNCHF2b3UcVcXhnn%2BPYT9UYAKeXvmHJcE3xv1TlLYSvRFcCwds06%2F1tJWFs8tvxirYOFUw36GfhD5xuOqmXkUM6hAZOiT%2Br0rigUvH1%2FIVtPrHPuozoEwPImIfphT%2FU4cb8nEhIQboAZ2DnsUiC8pJDJXe9u4zheKssJJgKJdhE%2FILHoqldiAzGCXRglnKBBtktEhyKGGU9AZG%2BKLxuzdxezPla1yUddONfUwdwsyJUX8ljLncu6LEEImW6ho2qb%2BIenDsjB2T%2FIsY%2FVa%2F2z6DkyluVoVRwQqQMwLAFyZEGAiSa14N1g1uVkTviAcmr54bygSu7BlKvebww2NbmSXWoPXroyPeJpzjlGmHAt8pRhHe4fydkMPsopWcHsgUf747gYVASlbT8xpWLmZSIJ2dMWQFwhuLGwN8KedC302EjJIOJfGmvyuaYwh6dXfnT%2FcfcvOGQtLlIdyYDMZCrea893WFDZBV3BR%2FLo4%2FcWedm4RMhY%2FlilzsmSi3NDe2d3R0TMPD3%2Fr8GOqUBgCQSH0qHaagrxZRw%2BWDtKUfYSzaIZwoQO0KUQ2CUdbyYnia%2Bjq6k3TIAa3eyB01w%2F4U8iyGlYiAJmTVDAIYXyh2yM0XRLzvK2RD3%2FeGQcMS9SmYtNa2eD7NCA%2F3YoM7bzjyUTI%2BV3nPl4%2FaE%2FAFghqwBXsahJSfSYR%2BUGI%2Bt254xnX%2Bkn8OSHHSq%2FkWC9B1fCNNrIC0m1e7P95gdn%2FrBHFKf7F02&X-Amz-Signature=1369346851d65bb402a2a78117bb87287d047c877b99dd48ffc67019ca2ec45d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JRYCSHU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhZUZ8DMEiKb6RgotiNPJUKrbFpLSOIrEiqH5jkOONdAiEA7ne5Z5r1jrp8ep1uU0V%2BoQUUXi%2FXf0vY1%2BxVd1jRoyIq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDK6gXoVqiYuBc%2BBfTircA0w60hw1FmRuf4FVlQT1UklfOi837Q7LojGlIQWCsqOec%2FnaMpCvPW4XE%2BzbaF7NYZLrzN%2F%2F6F1mDgEvJA%2F3WNkdIBZHu7zdiWxmPXxCGFilDJFMHT1Tb7MQIjNCHF2b3UcVcXhnn%2BPYT9UYAKeXvmHJcE3xv1TlLYSvRFcCwds06%2F1tJWFs8tvxirYOFUw36GfhD5xuOqmXkUM6hAZOiT%2Br0rigUvH1%2FIVtPrHPuozoEwPImIfphT%2FU4cb8nEhIQboAZ2DnsUiC8pJDJXe9u4zheKssJJgKJdhE%2FILHoqldiAzGCXRglnKBBtktEhyKGGU9AZG%2BKLxuzdxezPla1yUddONfUwdwsyJUX8ljLncu6LEEImW6ho2qb%2BIenDsjB2T%2FIsY%2FVa%2F2z6DkyluVoVRwQqQMwLAFyZEGAiSa14N1g1uVkTviAcmr54bygSu7BlKvebww2NbmSXWoPXroyPeJpzjlGmHAt8pRhHe4fydkMPsopWcHsgUf747gYVASlbT8xpWLmZSIJ2dMWQFwhuLGwN8KedC302EjJIOJfGmvyuaYwh6dXfnT%2FcfcvOGQtLlIdyYDMZCrea893WFDZBV3BR%2FLo4%2FcWedm4RMhY%2FlilzsmSi3NDe2d3R0TMPD3%2Fr8GOqUBgCQSH0qHaagrxZRw%2BWDtKUfYSzaIZwoQO0KUQ2CUdbyYnia%2Bjq6k3TIAa3eyB01w%2F4U8iyGlYiAJmTVDAIYXyh2yM0XRLzvK2RD3%2FeGQcMS9SmYtNa2eD7NCA%2F3YoM7bzjyUTI%2BV3nPl4%2FaE%2FAFghqwBXsahJSfSYR%2BUGI%2Bt254xnX%2Bkn8OSHHSq%2FkWC9B1fCNNrIC0m1e7P95gdn%2FrBHFKf7F02&X-Amz-Signature=c4f761b95bb9abe312c2ebab518be39de58c4ac261da03f9c09e807a10baeffc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JRYCSHU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhZUZ8DMEiKb6RgotiNPJUKrbFpLSOIrEiqH5jkOONdAiEA7ne5Z5r1jrp8ep1uU0V%2BoQUUXi%2FXf0vY1%2BxVd1jRoyIq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDK6gXoVqiYuBc%2BBfTircA0w60hw1FmRuf4FVlQT1UklfOi837Q7LojGlIQWCsqOec%2FnaMpCvPW4XE%2BzbaF7NYZLrzN%2F%2F6F1mDgEvJA%2F3WNkdIBZHu7zdiWxmPXxCGFilDJFMHT1Tb7MQIjNCHF2b3UcVcXhnn%2BPYT9UYAKeXvmHJcE3xv1TlLYSvRFcCwds06%2F1tJWFs8tvxirYOFUw36GfhD5xuOqmXkUM6hAZOiT%2Br0rigUvH1%2FIVtPrHPuozoEwPImIfphT%2FU4cb8nEhIQboAZ2DnsUiC8pJDJXe9u4zheKssJJgKJdhE%2FILHoqldiAzGCXRglnKBBtktEhyKGGU9AZG%2BKLxuzdxezPla1yUddONfUwdwsyJUX8ljLncu6LEEImW6ho2qb%2BIenDsjB2T%2FIsY%2FVa%2F2z6DkyluVoVRwQqQMwLAFyZEGAiSa14N1g1uVkTviAcmr54bygSu7BlKvebww2NbmSXWoPXroyPeJpzjlGmHAt8pRhHe4fydkMPsopWcHsgUf747gYVASlbT8xpWLmZSIJ2dMWQFwhuLGwN8KedC302EjJIOJfGmvyuaYwh6dXfnT%2FcfcvOGQtLlIdyYDMZCrea893WFDZBV3BR%2FLo4%2FcWedm4RMhY%2FlilzsmSi3NDe2d3R0TMPD3%2Fr8GOqUBgCQSH0qHaagrxZRw%2BWDtKUfYSzaIZwoQO0KUQ2CUdbyYnia%2Bjq6k3TIAa3eyB01w%2F4U8iyGlYiAJmTVDAIYXyh2yM0XRLzvK2RD3%2FeGQcMS9SmYtNa2eD7NCA%2F3YoM7bzjyUTI%2BV3nPl4%2FaE%2FAFghqwBXsahJSfSYR%2BUGI%2Bt254xnX%2Bkn8OSHHSq%2FkWC9B1fCNNrIC0m1e7P95gdn%2FrBHFKf7F02&X-Amz-Signature=e770fc85ff34a0091c82a95eed870f285a031e7f77dc362c9a6e047a175bbdc5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
