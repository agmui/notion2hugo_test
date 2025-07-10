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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662REKICF7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHD3DCLk6pP%2BWcmnHgiUYHx6qI%2Fv7S1hA1USMxepWDjAiBB%2BZFSQW3mfnBOH%2B54mFwlCL7HaIdPN%2BHwqXRZOiLTZiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzKB9sWwl9ttAyO4MKtwDvbSsJy0nE1N%2BPEXxVYTdSdWscfwfahnN3q%2B6bErKiex1EHMgpCEVkm3uu4v7yapYPr0JpNxqSO3aQme3W7q9opafyv0kUzeRDLFqGC4r3k3bPh%2FK66es97OZi0tLCPgG8stvm4kDRet%2FdSOU48OsKdp3vSgGEH%2FVjA5i%2Flpj3XpETK%2FongwiZDNM3ow%2Fhwvb83ejx6bpbJ395e6%2FbwcVgMAdjwo11%2FAdqanAYQ849rUPvOTNFCKM1RIFh2x5yfgRvmpaQXOCBy6g4EjnlbP1TOVdWL%2Fe65o0zzmgZ1XbOAf%2F6kUvP5dpzNQFNlVTrUsWQ2B5MYB3SNlcM8p6SYN1hka6rB4LZeSExygioMCpP9FVxydeUETdEDcPTOqgG2SeI0hxglRBe4KgDbLOm5iTqXLm3nZM%2Fp5KR0raTrAOJRqJnBEtSoNiS7U5qxB7WRjz2DT1stdGPe%2B64RHwFR%2Fj7wSfDyeJyUjAAhyzU6GV3J8d4geaJC7p57i6%2FHJpu2D8jAimo3oMh%2FmoMX0MMPCAwBWT%2FcstzIRZ2N8%2FjRNrS93%2BU7IBofWzfLsDOZ23GsEzlYOTJLgHtcjEULFB0%2BxOuOpo0NEq32zAjD%2BlcQt7tsQu9%2BE81n9myiHZBecw4%2F68wwY6pgGhKd0542adUZ3jEy9qV4Pis0tx0%2B5q0wKrwxxfCH%2Bx5vFRPL9%2FA%2FMYArhm3VFSyX6OD2A8%2F1CmgL4xhWRdIRXbPnrj%2F7D4nE2SiI0OPhaFnOKnqRBSZ2rgK7rHl4LlGybDDdSh824FJP%2F61cwMm5LxPF8HQu%2Fkco9%2BM1g74v5xUI500eMfAKY5ZSjQ0Z9mOoDTb1aNaQGkrXhR3%2BwHN3Q%2BRNlsvNdd&X-Amz-Signature=28c57c72ebb6499a7ec9d386ce21e03cff88685e39fec1fd4572ae0bce435694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662REKICF7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHD3DCLk6pP%2BWcmnHgiUYHx6qI%2Fv7S1hA1USMxepWDjAiBB%2BZFSQW3mfnBOH%2B54mFwlCL7HaIdPN%2BHwqXRZOiLTZiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzKB9sWwl9ttAyO4MKtwDvbSsJy0nE1N%2BPEXxVYTdSdWscfwfahnN3q%2B6bErKiex1EHMgpCEVkm3uu4v7yapYPr0JpNxqSO3aQme3W7q9opafyv0kUzeRDLFqGC4r3k3bPh%2FK66es97OZi0tLCPgG8stvm4kDRet%2FdSOU48OsKdp3vSgGEH%2FVjA5i%2Flpj3XpETK%2FongwiZDNM3ow%2Fhwvb83ejx6bpbJ395e6%2FbwcVgMAdjwo11%2FAdqanAYQ849rUPvOTNFCKM1RIFh2x5yfgRvmpaQXOCBy6g4EjnlbP1TOVdWL%2Fe65o0zzmgZ1XbOAf%2F6kUvP5dpzNQFNlVTrUsWQ2B5MYB3SNlcM8p6SYN1hka6rB4LZeSExygioMCpP9FVxydeUETdEDcPTOqgG2SeI0hxglRBe4KgDbLOm5iTqXLm3nZM%2Fp5KR0raTrAOJRqJnBEtSoNiS7U5qxB7WRjz2DT1stdGPe%2B64RHwFR%2Fj7wSfDyeJyUjAAhyzU6GV3J8d4geaJC7p57i6%2FHJpu2D8jAimo3oMh%2FmoMX0MMPCAwBWT%2FcstzIRZ2N8%2FjRNrS93%2BU7IBofWzfLsDOZ23GsEzlYOTJLgHtcjEULFB0%2BxOuOpo0NEq32zAjD%2BlcQt7tsQu9%2BE81n9myiHZBecw4%2F68wwY6pgGhKd0542adUZ3jEy9qV4Pis0tx0%2B5q0wKrwxxfCH%2Bx5vFRPL9%2FA%2FMYArhm3VFSyX6OD2A8%2F1CmgL4xhWRdIRXbPnrj%2F7D4nE2SiI0OPhaFnOKnqRBSZ2rgK7rHl4LlGybDDdSh824FJP%2F61cwMm5LxPF8HQu%2Fkco9%2BM1g74v5xUI500eMfAKY5ZSjQ0Z9mOoDTb1aNaQGkrXhR3%2BwHN3Q%2BRNlsvNdd&X-Amz-Signature=51f3eee806a52c93fc61a2884a4d85e29348c040b953ee70bd15dc81760c1800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662REKICF7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHD3DCLk6pP%2BWcmnHgiUYHx6qI%2Fv7S1hA1USMxepWDjAiBB%2BZFSQW3mfnBOH%2B54mFwlCL7HaIdPN%2BHwqXRZOiLTZiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzKB9sWwl9ttAyO4MKtwDvbSsJy0nE1N%2BPEXxVYTdSdWscfwfahnN3q%2B6bErKiex1EHMgpCEVkm3uu4v7yapYPr0JpNxqSO3aQme3W7q9opafyv0kUzeRDLFqGC4r3k3bPh%2FK66es97OZi0tLCPgG8stvm4kDRet%2FdSOU48OsKdp3vSgGEH%2FVjA5i%2Flpj3XpETK%2FongwiZDNM3ow%2Fhwvb83ejx6bpbJ395e6%2FbwcVgMAdjwo11%2FAdqanAYQ849rUPvOTNFCKM1RIFh2x5yfgRvmpaQXOCBy6g4EjnlbP1TOVdWL%2Fe65o0zzmgZ1XbOAf%2F6kUvP5dpzNQFNlVTrUsWQ2B5MYB3SNlcM8p6SYN1hka6rB4LZeSExygioMCpP9FVxydeUETdEDcPTOqgG2SeI0hxglRBe4KgDbLOm5iTqXLm3nZM%2Fp5KR0raTrAOJRqJnBEtSoNiS7U5qxB7WRjz2DT1stdGPe%2B64RHwFR%2Fj7wSfDyeJyUjAAhyzU6GV3J8d4geaJC7p57i6%2FHJpu2D8jAimo3oMh%2FmoMX0MMPCAwBWT%2FcstzIRZ2N8%2FjRNrS93%2BU7IBofWzfLsDOZ23GsEzlYOTJLgHtcjEULFB0%2BxOuOpo0NEq32zAjD%2BlcQt7tsQu9%2BE81n9myiHZBecw4%2F68wwY6pgGhKd0542adUZ3jEy9qV4Pis0tx0%2B5q0wKrwxxfCH%2Bx5vFRPL9%2FA%2FMYArhm3VFSyX6OD2A8%2F1CmgL4xhWRdIRXbPnrj%2F7D4nE2SiI0OPhaFnOKnqRBSZ2rgK7rHl4LlGybDDdSh824FJP%2F61cwMm5LxPF8HQu%2Fkco9%2BM1g74v5xUI500eMfAKY5ZSjQ0Z9mOoDTb1aNaQGkrXhR3%2BwHN3Q%2BRNlsvNdd&X-Amz-Signature=20548570c420b0933b5b0927bb473c44cdc8a953cc03698baafa776c70e68306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662REKICF7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHD3DCLk6pP%2BWcmnHgiUYHx6qI%2Fv7S1hA1USMxepWDjAiBB%2BZFSQW3mfnBOH%2B54mFwlCL7HaIdPN%2BHwqXRZOiLTZiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzKB9sWwl9ttAyO4MKtwDvbSsJy0nE1N%2BPEXxVYTdSdWscfwfahnN3q%2B6bErKiex1EHMgpCEVkm3uu4v7yapYPr0JpNxqSO3aQme3W7q9opafyv0kUzeRDLFqGC4r3k3bPh%2FK66es97OZi0tLCPgG8stvm4kDRet%2FdSOU48OsKdp3vSgGEH%2FVjA5i%2Flpj3XpETK%2FongwiZDNM3ow%2Fhwvb83ejx6bpbJ395e6%2FbwcVgMAdjwo11%2FAdqanAYQ849rUPvOTNFCKM1RIFh2x5yfgRvmpaQXOCBy6g4EjnlbP1TOVdWL%2Fe65o0zzmgZ1XbOAf%2F6kUvP5dpzNQFNlVTrUsWQ2B5MYB3SNlcM8p6SYN1hka6rB4LZeSExygioMCpP9FVxydeUETdEDcPTOqgG2SeI0hxglRBe4KgDbLOm5iTqXLm3nZM%2Fp5KR0raTrAOJRqJnBEtSoNiS7U5qxB7WRjz2DT1stdGPe%2B64RHwFR%2Fj7wSfDyeJyUjAAhyzU6GV3J8d4geaJC7p57i6%2FHJpu2D8jAimo3oMh%2FmoMX0MMPCAwBWT%2FcstzIRZ2N8%2FjRNrS93%2BU7IBofWzfLsDOZ23GsEzlYOTJLgHtcjEULFB0%2BxOuOpo0NEq32zAjD%2BlcQt7tsQu9%2BE81n9myiHZBecw4%2F68wwY6pgGhKd0542adUZ3jEy9qV4Pis0tx0%2B5q0wKrwxxfCH%2Bx5vFRPL9%2FA%2FMYArhm3VFSyX6OD2A8%2F1CmgL4xhWRdIRXbPnrj%2F7D4nE2SiI0OPhaFnOKnqRBSZ2rgK7rHl4LlGybDDdSh824FJP%2F61cwMm5LxPF8HQu%2Fkco9%2BM1g74v5xUI500eMfAKY5ZSjQ0Z9mOoDTb1aNaQGkrXhR3%2BwHN3Q%2BRNlsvNdd&X-Amz-Signature=6be5bc47ccbc083c2ed7503dba0fb35efabe427c204894d00d3c0175ec407f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662REKICF7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHD3DCLk6pP%2BWcmnHgiUYHx6qI%2Fv7S1hA1USMxepWDjAiBB%2BZFSQW3mfnBOH%2B54mFwlCL7HaIdPN%2BHwqXRZOiLTZiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzKB9sWwl9ttAyO4MKtwDvbSsJy0nE1N%2BPEXxVYTdSdWscfwfahnN3q%2B6bErKiex1EHMgpCEVkm3uu4v7yapYPr0JpNxqSO3aQme3W7q9opafyv0kUzeRDLFqGC4r3k3bPh%2FK66es97OZi0tLCPgG8stvm4kDRet%2FdSOU48OsKdp3vSgGEH%2FVjA5i%2Flpj3XpETK%2FongwiZDNM3ow%2Fhwvb83ejx6bpbJ395e6%2FbwcVgMAdjwo11%2FAdqanAYQ849rUPvOTNFCKM1RIFh2x5yfgRvmpaQXOCBy6g4EjnlbP1TOVdWL%2Fe65o0zzmgZ1XbOAf%2F6kUvP5dpzNQFNlVTrUsWQ2B5MYB3SNlcM8p6SYN1hka6rB4LZeSExygioMCpP9FVxydeUETdEDcPTOqgG2SeI0hxglRBe4KgDbLOm5iTqXLm3nZM%2Fp5KR0raTrAOJRqJnBEtSoNiS7U5qxB7WRjz2DT1stdGPe%2B64RHwFR%2Fj7wSfDyeJyUjAAhyzU6GV3J8d4geaJC7p57i6%2FHJpu2D8jAimo3oMh%2FmoMX0MMPCAwBWT%2FcstzIRZ2N8%2FjRNrS93%2BU7IBofWzfLsDOZ23GsEzlYOTJLgHtcjEULFB0%2BxOuOpo0NEq32zAjD%2BlcQt7tsQu9%2BE81n9myiHZBecw4%2F68wwY6pgGhKd0542adUZ3jEy9qV4Pis0tx0%2B5q0wKrwxxfCH%2Bx5vFRPL9%2FA%2FMYArhm3VFSyX6OD2A8%2F1CmgL4xhWRdIRXbPnrj%2F7D4nE2SiI0OPhaFnOKnqRBSZ2rgK7rHl4LlGybDDdSh824FJP%2F61cwMm5LxPF8HQu%2Fkco9%2BM1g74v5xUI500eMfAKY5ZSjQ0Z9mOoDTb1aNaQGkrXhR3%2BwHN3Q%2BRNlsvNdd&X-Amz-Signature=573cf5e225f45b1cfb6b8223990e02a98ee5c64983674c92d3c56df9a050289b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
