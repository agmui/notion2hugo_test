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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NVXP4CL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxJ2svD0bFMRqwWFqPQh3fdWWEYrbn0zUJjnImzUfxXAiEAurDnYwyVOeTR3UKcpXjnOEW97SMnWKrkj3DtkET1yIwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTGH6vhQKAr5NawJSrcA9CroQ1gkD4R%2BaIMCgLLdufP%2B%2FKpX2adPLYZZLtJyfqrrZxD7OIW74Qc7ErLio6dQ5aI6BP6tupvOhcz8mwW%2FGamraPAvlQqsqgyOoupEzwaptGdIxLR%2F1g2uuOA68NeTjAL1Dcw0duxQuqoLc1dxQ3GcSL%2BMO1uPKz5nA1WE6q%2F%2F6pvkS5ioSlzVsevpZQFVMnhor5m38LEWRWR1Mk9%2BtPaTFSKDN%2BWUXKf14glg9jWnAqwmipJAMvC7WR55Q9Nal1d%2F9wXr354J4%2BJ%2B2Lw4uHzeYReAqlwysyJa6d2P2JLKi76MXcTVYSOirJl0ede4gjJZVejiX0lrboCMiMbQ8j9FnQS33h5VSAJVI1wl144dL84jmJ%2B44rG%2Bt%2FtOSZUEreizu60lTFmXDPkhRBxkk%2FysKAzAgToCGHnTEFcgQ0XH2pHX3CJYSHXEgj3m0Rg3J4Wnz10Sc83P7MnJUfr2J4AcjS6bQTLnHEGYXU73LYyj0KXOWx%2B1eSIllrYU0G1T2msGqxHE4fOYCD65DzVLjRPRRioXGpkm6jAUsyiQ5pVx3857BcjKrGAO%2FDn33D6VDMLe2hoqcdygjDR2WOTjTCxIz6WCglQlatAhsPXhH3OP0RV2heP2tHcEzQ%2BMP20k8MGOqUBMO5VYM5tP14lKTqwKwMu8i3zTWN4CamwA8Aq6pxugZmiAoaJjeDTGUJ0unIx8bH7Kv8m%2Bsl70PZ2zfrWQCMImP988nORk%2Fqwe%2F8y7Ii%2Bqb6AIWL%2BmwG40CJhautsc69K1LiqqFR%2BNyYQo6z69tAqOdCEmXkECsluTCtEpa1kTY4GxhMFF2HbqdcyzvdbPstZ24qcbu%2BdumPv0klBBss6TnE0OIMY&X-Amz-Signature=9a236c35221450c853da8624709e7a50ad360bc4dc5c9253992ecf51160db27c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NVXP4CL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxJ2svD0bFMRqwWFqPQh3fdWWEYrbn0zUJjnImzUfxXAiEAurDnYwyVOeTR3UKcpXjnOEW97SMnWKrkj3DtkET1yIwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTGH6vhQKAr5NawJSrcA9CroQ1gkD4R%2BaIMCgLLdufP%2B%2FKpX2adPLYZZLtJyfqrrZxD7OIW74Qc7ErLio6dQ5aI6BP6tupvOhcz8mwW%2FGamraPAvlQqsqgyOoupEzwaptGdIxLR%2F1g2uuOA68NeTjAL1Dcw0duxQuqoLc1dxQ3GcSL%2BMO1uPKz5nA1WE6q%2F%2F6pvkS5ioSlzVsevpZQFVMnhor5m38LEWRWR1Mk9%2BtPaTFSKDN%2BWUXKf14glg9jWnAqwmipJAMvC7WR55Q9Nal1d%2F9wXr354J4%2BJ%2B2Lw4uHzeYReAqlwysyJa6d2P2JLKi76MXcTVYSOirJl0ede4gjJZVejiX0lrboCMiMbQ8j9FnQS33h5VSAJVI1wl144dL84jmJ%2B44rG%2Bt%2FtOSZUEreizu60lTFmXDPkhRBxkk%2FysKAzAgToCGHnTEFcgQ0XH2pHX3CJYSHXEgj3m0Rg3J4Wnz10Sc83P7MnJUfr2J4AcjS6bQTLnHEGYXU73LYyj0KXOWx%2B1eSIllrYU0G1T2msGqxHE4fOYCD65DzVLjRPRRioXGpkm6jAUsyiQ5pVx3857BcjKrGAO%2FDn33D6VDMLe2hoqcdygjDR2WOTjTCxIz6WCglQlatAhsPXhH3OP0RV2heP2tHcEzQ%2BMP20k8MGOqUBMO5VYM5tP14lKTqwKwMu8i3zTWN4CamwA8Aq6pxugZmiAoaJjeDTGUJ0unIx8bH7Kv8m%2Bsl70PZ2zfrWQCMImP988nORk%2Fqwe%2F8y7Ii%2Bqb6AIWL%2BmwG40CJhautsc69K1LiqqFR%2BNyYQo6z69tAqOdCEmXkECsluTCtEpa1kTY4GxhMFF2HbqdcyzvdbPstZ24qcbu%2BdumPv0klBBss6TnE0OIMY&X-Amz-Signature=b38dad95c532b4956d1907664a112469ce391571b0e38b5430dbbfb5b5458051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NVXP4CL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxJ2svD0bFMRqwWFqPQh3fdWWEYrbn0zUJjnImzUfxXAiEAurDnYwyVOeTR3UKcpXjnOEW97SMnWKrkj3DtkET1yIwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTGH6vhQKAr5NawJSrcA9CroQ1gkD4R%2BaIMCgLLdufP%2B%2FKpX2adPLYZZLtJyfqrrZxD7OIW74Qc7ErLio6dQ5aI6BP6tupvOhcz8mwW%2FGamraPAvlQqsqgyOoupEzwaptGdIxLR%2F1g2uuOA68NeTjAL1Dcw0duxQuqoLc1dxQ3GcSL%2BMO1uPKz5nA1WE6q%2F%2F6pvkS5ioSlzVsevpZQFVMnhor5m38LEWRWR1Mk9%2BtPaTFSKDN%2BWUXKf14glg9jWnAqwmipJAMvC7WR55Q9Nal1d%2F9wXr354J4%2BJ%2B2Lw4uHzeYReAqlwysyJa6d2P2JLKi76MXcTVYSOirJl0ede4gjJZVejiX0lrboCMiMbQ8j9FnQS33h5VSAJVI1wl144dL84jmJ%2B44rG%2Bt%2FtOSZUEreizu60lTFmXDPkhRBxkk%2FysKAzAgToCGHnTEFcgQ0XH2pHX3CJYSHXEgj3m0Rg3J4Wnz10Sc83P7MnJUfr2J4AcjS6bQTLnHEGYXU73LYyj0KXOWx%2B1eSIllrYU0G1T2msGqxHE4fOYCD65DzVLjRPRRioXGpkm6jAUsyiQ5pVx3857BcjKrGAO%2FDn33D6VDMLe2hoqcdygjDR2WOTjTCxIz6WCglQlatAhsPXhH3OP0RV2heP2tHcEzQ%2BMP20k8MGOqUBMO5VYM5tP14lKTqwKwMu8i3zTWN4CamwA8Aq6pxugZmiAoaJjeDTGUJ0unIx8bH7Kv8m%2Bsl70PZ2zfrWQCMImP988nORk%2Fqwe%2F8y7Ii%2Bqb6AIWL%2BmwG40CJhautsc69K1LiqqFR%2BNyYQo6z69tAqOdCEmXkECsluTCtEpa1kTY4GxhMFF2HbqdcyzvdbPstZ24qcbu%2BdumPv0klBBss6TnE0OIMY&X-Amz-Signature=648b7fd5cd116526cb33872f89437ffcd947a83ce6af21e99c0716dd019c28ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NVXP4CL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxJ2svD0bFMRqwWFqPQh3fdWWEYrbn0zUJjnImzUfxXAiEAurDnYwyVOeTR3UKcpXjnOEW97SMnWKrkj3DtkET1yIwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTGH6vhQKAr5NawJSrcA9CroQ1gkD4R%2BaIMCgLLdufP%2B%2FKpX2adPLYZZLtJyfqrrZxD7OIW74Qc7ErLio6dQ5aI6BP6tupvOhcz8mwW%2FGamraPAvlQqsqgyOoupEzwaptGdIxLR%2F1g2uuOA68NeTjAL1Dcw0duxQuqoLc1dxQ3GcSL%2BMO1uPKz5nA1WE6q%2F%2F6pvkS5ioSlzVsevpZQFVMnhor5m38LEWRWR1Mk9%2BtPaTFSKDN%2BWUXKf14glg9jWnAqwmipJAMvC7WR55Q9Nal1d%2F9wXr354J4%2BJ%2B2Lw4uHzeYReAqlwysyJa6d2P2JLKi76MXcTVYSOirJl0ede4gjJZVejiX0lrboCMiMbQ8j9FnQS33h5VSAJVI1wl144dL84jmJ%2B44rG%2Bt%2FtOSZUEreizu60lTFmXDPkhRBxkk%2FysKAzAgToCGHnTEFcgQ0XH2pHX3CJYSHXEgj3m0Rg3J4Wnz10Sc83P7MnJUfr2J4AcjS6bQTLnHEGYXU73LYyj0KXOWx%2B1eSIllrYU0G1T2msGqxHE4fOYCD65DzVLjRPRRioXGpkm6jAUsyiQ5pVx3857BcjKrGAO%2FDn33D6VDMLe2hoqcdygjDR2WOTjTCxIz6WCglQlatAhsPXhH3OP0RV2heP2tHcEzQ%2BMP20k8MGOqUBMO5VYM5tP14lKTqwKwMu8i3zTWN4CamwA8Aq6pxugZmiAoaJjeDTGUJ0unIx8bH7Kv8m%2Bsl70PZ2zfrWQCMImP988nORk%2Fqwe%2F8y7Ii%2Bqb6AIWL%2BmwG40CJhautsc69K1LiqqFR%2BNyYQo6z69tAqOdCEmXkECsluTCtEpa1kTY4GxhMFF2HbqdcyzvdbPstZ24qcbu%2BdumPv0klBBss6TnE0OIMY&X-Amz-Signature=81729baec154131a115d02b4fb10a1dba56399b1064074758ae8a2d5340c8243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NVXP4CL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxJ2svD0bFMRqwWFqPQh3fdWWEYrbn0zUJjnImzUfxXAiEAurDnYwyVOeTR3UKcpXjnOEW97SMnWKrkj3DtkET1yIwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTGH6vhQKAr5NawJSrcA9CroQ1gkD4R%2BaIMCgLLdufP%2B%2FKpX2adPLYZZLtJyfqrrZxD7OIW74Qc7ErLio6dQ5aI6BP6tupvOhcz8mwW%2FGamraPAvlQqsqgyOoupEzwaptGdIxLR%2F1g2uuOA68NeTjAL1Dcw0duxQuqoLc1dxQ3GcSL%2BMO1uPKz5nA1WE6q%2F%2F6pvkS5ioSlzVsevpZQFVMnhor5m38LEWRWR1Mk9%2BtPaTFSKDN%2BWUXKf14glg9jWnAqwmipJAMvC7WR55Q9Nal1d%2F9wXr354J4%2BJ%2B2Lw4uHzeYReAqlwysyJa6d2P2JLKi76MXcTVYSOirJl0ede4gjJZVejiX0lrboCMiMbQ8j9FnQS33h5VSAJVI1wl144dL84jmJ%2B44rG%2Bt%2FtOSZUEreizu60lTFmXDPkhRBxkk%2FysKAzAgToCGHnTEFcgQ0XH2pHX3CJYSHXEgj3m0Rg3J4Wnz10Sc83P7MnJUfr2J4AcjS6bQTLnHEGYXU73LYyj0KXOWx%2B1eSIllrYU0G1T2msGqxHE4fOYCD65DzVLjRPRRioXGpkm6jAUsyiQ5pVx3857BcjKrGAO%2FDn33D6VDMLe2hoqcdygjDR2WOTjTCxIz6WCglQlatAhsPXhH3OP0RV2heP2tHcEzQ%2BMP20k8MGOqUBMO5VYM5tP14lKTqwKwMu8i3zTWN4CamwA8Aq6pxugZmiAoaJjeDTGUJ0unIx8bH7Kv8m%2Bsl70PZ2zfrWQCMImP988nORk%2Fqwe%2F8y7Ii%2Bqb6AIWL%2BmwG40CJhautsc69K1LiqqFR%2BNyYQo6z69tAqOdCEmXkECsluTCtEpa1kTY4GxhMFF2HbqdcyzvdbPstZ24qcbu%2BdumPv0klBBss6TnE0OIMY&X-Amz-Signature=5b4b71797172daca3ab43c2d43506dd8ee4a0cefbcc310c4550426463478a551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
