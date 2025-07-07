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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6DLDB2T%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCCJ2ku4n5uRFIfd1Apv7tMxAsoOpfHEzt16P3Vr1KmTgIgFFz13HpANrAGQ%2F193z7GstbmlzeZa%2FBWgV21SFxy%2B1gq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBG30YhmFb3R7mt3jircA6eQkFCpdQx%2BAuA13U%2Bzrs39aBF8nvGHQAXdfuAZXAL6LBp5%2Bwd%2FsvIT8jyXcWLBqaU3UYEbxofgDiihDT9ekHT533XdUnpm7YFZLGL%2F8L3%2FDHlxc3JY2xn87QIFG0aIcn3Q5akEb%2Bl21VvNexJ2cPasmwJbi26wwvbU47%2BCPPrQV23jWI%2FpDtXwSTDQS7dRNf%2Fa8VaVptNchoDp4gw%2BdVLGQPKs4BWwHlyk9AC%2FWPdBjlnYlY%2F1CeAc3ffjkUjdbB71jH7b1JfWl3hMfzkDvWe0DK%2BtLJvBOZRRrCX1EX4b%2B7648aTeDmlH6kgKYomK%2FwfRuRzdWPk8LaWo0Rgr%2FT6ai6gzMndXRKmPDh5UfReQNnn5Ys%2Bf9XrgIHXp2MFq%2F1OGn24LlG6yYVvx3fdrt0eHdWObqAoRIWXgiP3BxmPv81NqoSmc9hGHd6G2hxflRAf83IRYwct52yTgC3zzQ86lbOArbm0378pMwHB%2FhAwNrg0ivIdoidSWZXb%2BwXF4APK9RybNxKWgIuwhSogTwIX2fr3ljttnKthR5RAGholP1MZ%2FgZhBTcG%2FuwIRh%2Fe8xpwUU76CfynEWkL0LlTY9EuXGmq%2FWFgRp7ivsUjIamFfgm%2FStO4Kaer4tZHVMPu3rsMGOqUBCJ%2B0N7%2FCNoYvHzgnWTsvgbh5yuJ98ArB%2F3HPgh6AL36SodZU82TrOXloJHI10txVsLIy66JMrCnBrIZHi6NSjLZHIO9uvCK5hvOHxr6LthqQ3zJH4yvq7ywJIVZCxDwXpKEUxaxhXUSgep6O4EdANfg3FgZylA0rEcuyUjkwzEVYFICiv3Q2kX27QBXXTr%2FgNxKRLgxDVqhHB6cOwcpAPGfskWX3&X-Amz-Signature=2da96326e119104f6f4bcbf3f22359cfcea0333019f45ecef6a1a79792bccd54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6DLDB2T%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCCJ2ku4n5uRFIfd1Apv7tMxAsoOpfHEzt16P3Vr1KmTgIgFFz13HpANrAGQ%2F193z7GstbmlzeZa%2FBWgV21SFxy%2B1gq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBG30YhmFb3R7mt3jircA6eQkFCpdQx%2BAuA13U%2Bzrs39aBF8nvGHQAXdfuAZXAL6LBp5%2Bwd%2FsvIT8jyXcWLBqaU3UYEbxofgDiihDT9ekHT533XdUnpm7YFZLGL%2F8L3%2FDHlxc3JY2xn87QIFG0aIcn3Q5akEb%2Bl21VvNexJ2cPasmwJbi26wwvbU47%2BCPPrQV23jWI%2FpDtXwSTDQS7dRNf%2Fa8VaVptNchoDp4gw%2BdVLGQPKs4BWwHlyk9AC%2FWPdBjlnYlY%2F1CeAc3ffjkUjdbB71jH7b1JfWl3hMfzkDvWe0DK%2BtLJvBOZRRrCX1EX4b%2B7648aTeDmlH6kgKYomK%2FwfRuRzdWPk8LaWo0Rgr%2FT6ai6gzMndXRKmPDh5UfReQNnn5Ys%2Bf9XrgIHXp2MFq%2F1OGn24LlG6yYVvx3fdrt0eHdWObqAoRIWXgiP3BxmPv81NqoSmc9hGHd6G2hxflRAf83IRYwct52yTgC3zzQ86lbOArbm0378pMwHB%2FhAwNrg0ivIdoidSWZXb%2BwXF4APK9RybNxKWgIuwhSogTwIX2fr3ljttnKthR5RAGholP1MZ%2FgZhBTcG%2FuwIRh%2Fe8xpwUU76CfynEWkL0LlTY9EuXGmq%2FWFgRp7ivsUjIamFfgm%2FStO4Kaer4tZHVMPu3rsMGOqUBCJ%2B0N7%2FCNoYvHzgnWTsvgbh5yuJ98ArB%2F3HPgh6AL36SodZU82TrOXloJHI10txVsLIy66JMrCnBrIZHi6NSjLZHIO9uvCK5hvOHxr6LthqQ3zJH4yvq7ywJIVZCxDwXpKEUxaxhXUSgep6O4EdANfg3FgZylA0rEcuyUjkwzEVYFICiv3Q2kX27QBXXTr%2FgNxKRLgxDVqhHB6cOwcpAPGfskWX3&X-Amz-Signature=b481bd54bdf2355fca591fc24f886ea8c3be17ac390bb96ceb1e3c62b01403a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6DLDB2T%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCCJ2ku4n5uRFIfd1Apv7tMxAsoOpfHEzt16P3Vr1KmTgIgFFz13HpANrAGQ%2F193z7GstbmlzeZa%2FBWgV21SFxy%2B1gq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBG30YhmFb3R7mt3jircA6eQkFCpdQx%2BAuA13U%2Bzrs39aBF8nvGHQAXdfuAZXAL6LBp5%2Bwd%2FsvIT8jyXcWLBqaU3UYEbxofgDiihDT9ekHT533XdUnpm7YFZLGL%2F8L3%2FDHlxc3JY2xn87QIFG0aIcn3Q5akEb%2Bl21VvNexJ2cPasmwJbi26wwvbU47%2BCPPrQV23jWI%2FpDtXwSTDQS7dRNf%2Fa8VaVptNchoDp4gw%2BdVLGQPKs4BWwHlyk9AC%2FWPdBjlnYlY%2F1CeAc3ffjkUjdbB71jH7b1JfWl3hMfzkDvWe0DK%2BtLJvBOZRRrCX1EX4b%2B7648aTeDmlH6kgKYomK%2FwfRuRzdWPk8LaWo0Rgr%2FT6ai6gzMndXRKmPDh5UfReQNnn5Ys%2Bf9XrgIHXp2MFq%2F1OGn24LlG6yYVvx3fdrt0eHdWObqAoRIWXgiP3BxmPv81NqoSmc9hGHd6G2hxflRAf83IRYwct52yTgC3zzQ86lbOArbm0378pMwHB%2FhAwNrg0ivIdoidSWZXb%2BwXF4APK9RybNxKWgIuwhSogTwIX2fr3ljttnKthR5RAGholP1MZ%2FgZhBTcG%2FuwIRh%2Fe8xpwUU76CfynEWkL0LlTY9EuXGmq%2FWFgRp7ivsUjIamFfgm%2FStO4Kaer4tZHVMPu3rsMGOqUBCJ%2B0N7%2FCNoYvHzgnWTsvgbh5yuJ98ArB%2F3HPgh6AL36SodZU82TrOXloJHI10txVsLIy66JMrCnBrIZHi6NSjLZHIO9uvCK5hvOHxr6LthqQ3zJH4yvq7ywJIVZCxDwXpKEUxaxhXUSgep6O4EdANfg3FgZylA0rEcuyUjkwzEVYFICiv3Q2kX27QBXXTr%2FgNxKRLgxDVqhHB6cOwcpAPGfskWX3&X-Amz-Signature=49c805920beaf8a53c865a7aa65d6a2ded02968f5963ccb04ceff445c5933bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6DLDB2T%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCCJ2ku4n5uRFIfd1Apv7tMxAsoOpfHEzt16P3Vr1KmTgIgFFz13HpANrAGQ%2F193z7GstbmlzeZa%2FBWgV21SFxy%2B1gq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBG30YhmFb3R7mt3jircA6eQkFCpdQx%2BAuA13U%2Bzrs39aBF8nvGHQAXdfuAZXAL6LBp5%2Bwd%2FsvIT8jyXcWLBqaU3UYEbxofgDiihDT9ekHT533XdUnpm7YFZLGL%2F8L3%2FDHlxc3JY2xn87QIFG0aIcn3Q5akEb%2Bl21VvNexJ2cPasmwJbi26wwvbU47%2BCPPrQV23jWI%2FpDtXwSTDQS7dRNf%2Fa8VaVptNchoDp4gw%2BdVLGQPKs4BWwHlyk9AC%2FWPdBjlnYlY%2F1CeAc3ffjkUjdbB71jH7b1JfWl3hMfzkDvWe0DK%2BtLJvBOZRRrCX1EX4b%2B7648aTeDmlH6kgKYomK%2FwfRuRzdWPk8LaWo0Rgr%2FT6ai6gzMndXRKmPDh5UfReQNnn5Ys%2Bf9XrgIHXp2MFq%2F1OGn24LlG6yYVvx3fdrt0eHdWObqAoRIWXgiP3BxmPv81NqoSmc9hGHd6G2hxflRAf83IRYwct52yTgC3zzQ86lbOArbm0378pMwHB%2FhAwNrg0ivIdoidSWZXb%2BwXF4APK9RybNxKWgIuwhSogTwIX2fr3ljttnKthR5RAGholP1MZ%2FgZhBTcG%2FuwIRh%2Fe8xpwUU76CfynEWkL0LlTY9EuXGmq%2FWFgRp7ivsUjIamFfgm%2FStO4Kaer4tZHVMPu3rsMGOqUBCJ%2B0N7%2FCNoYvHzgnWTsvgbh5yuJ98ArB%2F3HPgh6AL36SodZU82TrOXloJHI10txVsLIy66JMrCnBrIZHi6NSjLZHIO9uvCK5hvOHxr6LthqQ3zJH4yvq7ywJIVZCxDwXpKEUxaxhXUSgep6O4EdANfg3FgZylA0rEcuyUjkwzEVYFICiv3Q2kX27QBXXTr%2FgNxKRLgxDVqhHB6cOwcpAPGfskWX3&X-Amz-Signature=7f052c3d912c53e8058661a1fde5f2e58e8af4b573fdbd0e07c011c33377b7cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6DLDB2T%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCCJ2ku4n5uRFIfd1Apv7tMxAsoOpfHEzt16P3Vr1KmTgIgFFz13HpANrAGQ%2F193z7GstbmlzeZa%2FBWgV21SFxy%2B1gq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBG30YhmFb3R7mt3jircA6eQkFCpdQx%2BAuA13U%2Bzrs39aBF8nvGHQAXdfuAZXAL6LBp5%2Bwd%2FsvIT8jyXcWLBqaU3UYEbxofgDiihDT9ekHT533XdUnpm7YFZLGL%2F8L3%2FDHlxc3JY2xn87QIFG0aIcn3Q5akEb%2Bl21VvNexJ2cPasmwJbi26wwvbU47%2BCPPrQV23jWI%2FpDtXwSTDQS7dRNf%2Fa8VaVptNchoDp4gw%2BdVLGQPKs4BWwHlyk9AC%2FWPdBjlnYlY%2F1CeAc3ffjkUjdbB71jH7b1JfWl3hMfzkDvWe0DK%2BtLJvBOZRRrCX1EX4b%2B7648aTeDmlH6kgKYomK%2FwfRuRzdWPk8LaWo0Rgr%2FT6ai6gzMndXRKmPDh5UfReQNnn5Ys%2Bf9XrgIHXp2MFq%2F1OGn24LlG6yYVvx3fdrt0eHdWObqAoRIWXgiP3BxmPv81NqoSmc9hGHd6G2hxflRAf83IRYwct52yTgC3zzQ86lbOArbm0378pMwHB%2FhAwNrg0ivIdoidSWZXb%2BwXF4APK9RybNxKWgIuwhSogTwIX2fr3ljttnKthR5RAGholP1MZ%2FgZhBTcG%2FuwIRh%2Fe8xpwUU76CfynEWkL0LlTY9EuXGmq%2FWFgRp7ivsUjIamFfgm%2FStO4Kaer4tZHVMPu3rsMGOqUBCJ%2B0N7%2FCNoYvHzgnWTsvgbh5yuJ98ArB%2F3HPgh6AL36SodZU82TrOXloJHI10txVsLIy66JMrCnBrIZHi6NSjLZHIO9uvCK5hvOHxr6LthqQ3zJH4yvq7ywJIVZCxDwXpKEUxaxhXUSgep6O4EdANfg3FgZylA0rEcuyUjkwzEVYFICiv3Q2kX27QBXXTr%2FgNxKRLgxDVqhHB6cOwcpAPGfskWX3&X-Amz-Signature=0df3209c118351a1dd2e3a3b4a512af2dbd490118d840a077eee897e369af828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
