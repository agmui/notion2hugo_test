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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3X2QSX%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZnyJ3H4oPELcBHH26QYQKjG2avQsEB%2FF8KenPnanqYAIgR2%2BO5QSNkGt9hPjAAsKWt%2FARJIauL75vxAoAYtWDYkIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgN56kGG7ehPh8jeCrcA49pC%2F304Ebmczu3bLunQeg9bCulUIYG9fnDho1qkD19hgeA9%2F2OPNab397mc2n%2Bld%2BT%2BMb3DCuTQMGVDgaNsZY1OqTw%2BtBo887JKsOwK4fM5nEWAm2KkRQDiaXfi4vmLilb9iodLzQQhvo%2B47jrBU1GQB2ATBLFsJIyAPYDbXs%2BDzJk%2BC7VUAPFFAqLCHBIORgZQ4HBD6u0l4zFlpwzG2wuIvVByt3dd7HdmI53nfbPV%2FBCReTNH53VvOLxbj3dOd9whQASyDjVxj2nrLX5O0HPXJ8Y2QY%2FE51oyW2oN3gOQ8IIb6edf%2B1ynQzg0SCwpmLfx7Q6UW3Dnk3iSRd1iK9YhaFpvBt2So%2FY8UU7km71CT4sGE05Dm9kIOQ5BB%2FadRlOWxcWdwswx%2FZoMCFP9EPiGSJHIZwKSCSYnhPFTefU7H1iXD1SAaFMHMmnPpo5Yyqbn1Vmvnkir%2BmFDmJWOgy1oYAG%2BQlhfO3aJ2c2z82brNMgEKtYoHvq5zOpvYX4vCdRqQFCiPELrBudOkDwqZPCnsKVBcXEE1fKAuJa0r6Aj85yVtzXWfYuVwl3QFSPYb3njPdigr%2B%2BtB1F8cXLFxAxibRa%2BD2bpGyzR%2Fnp1W7WMwXRAb1NlC89vNvyMIHw%2BMAGOqUBsp7YpOVSXq8%2BR9Jcl%2FALGylLSokyAzWQ%2B%2Fz04ropC6E33jFN6desIzzNt6jy06YOUkv1H23k3SVQaMc%2FMwVi1IqJAC7lIGjhJSbNzrTSq8xrI22XW2exZrd56SS3WeeYIH%2BavhvPo%2BkT%2BOhiu0gYM5EvlIAF6mqAAy7QkkuicxpapIpnXBsSaFQKMAGttbSkgZllK24c5WFxkMnHxfTZ6x%2BVZkcy&X-Amz-Signature=2c4a6de59e25a62951d55e8453872c9c0e7f3e314c1affd5a17550d526d89ecb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3X2QSX%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZnyJ3H4oPELcBHH26QYQKjG2avQsEB%2FF8KenPnanqYAIgR2%2BO5QSNkGt9hPjAAsKWt%2FARJIauL75vxAoAYtWDYkIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgN56kGG7ehPh8jeCrcA49pC%2F304Ebmczu3bLunQeg9bCulUIYG9fnDho1qkD19hgeA9%2F2OPNab397mc2n%2Bld%2BT%2BMb3DCuTQMGVDgaNsZY1OqTw%2BtBo887JKsOwK4fM5nEWAm2KkRQDiaXfi4vmLilb9iodLzQQhvo%2B47jrBU1GQB2ATBLFsJIyAPYDbXs%2BDzJk%2BC7VUAPFFAqLCHBIORgZQ4HBD6u0l4zFlpwzG2wuIvVByt3dd7HdmI53nfbPV%2FBCReTNH53VvOLxbj3dOd9whQASyDjVxj2nrLX5O0HPXJ8Y2QY%2FE51oyW2oN3gOQ8IIb6edf%2B1ynQzg0SCwpmLfx7Q6UW3Dnk3iSRd1iK9YhaFpvBt2So%2FY8UU7km71CT4sGE05Dm9kIOQ5BB%2FadRlOWxcWdwswx%2FZoMCFP9EPiGSJHIZwKSCSYnhPFTefU7H1iXD1SAaFMHMmnPpo5Yyqbn1Vmvnkir%2BmFDmJWOgy1oYAG%2BQlhfO3aJ2c2z82brNMgEKtYoHvq5zOpvYX4vCdRqQFCiPELrBudOkDwqZPCnsKVBcXEE1fKAuJa0r6Aj85yVtzXWfYuVwl3QFSPYb3njPdigr%2B%2BtB1F8cXLFxAxibRa%2BD2bpGyzR%2Fnp1W7WMwXRAb1NlC89vNvyMIHw%2BMAGOqUBsp7YpOVSXq8%2BR9Jcl%2FALGylLSokyAzWQ%2B%2Fz04ropC6E33jFN6desIzzNt6jy06YOUkv1H23k3SVQaMc%2FMwVi1IqJAC7lIGjhJSbNzrTSq8xrI22XW2exZrd56SS3WeeYIH%2BavhvPo%2BkT%2BOhiu0gYM5EvlIAF6mqAAy7QkkuicxpapIpnXBsSaFQKMAGttbSkgZllK24c5WFxkMnHxfTZ6x%2BVZkcy&X-Amz-Signature=c109e1a24724435debd2a8580908c818cd8e59bf93ce9e2a300d4b111fbc049c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3X2QSX%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZnyJ3H4oPELcBHH26QYQKjG2avQsEB%2FF8KenPnanqYAIgR2%2BO5QSNkGt9hPjAAsKWt%2FARJIauL75vxAoAYtWDYkIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgN56kGG7ehPh8jeCrcA49pC%2F304Ebmczu3bLunQeg9bCulUIYG9fnDho1qkD19hgeA9%2F2OPNab397mc2n%2Bld%2BT%2BMb3DCuTQMGVDgaNsZY1OqTw%2BtBo887JKsOwK4fM5nEWAm2KkRQDiaXfi4vmLilb9iodLzQQhvo%2B47jrBU1GQB2ATBLFsJIyAPYDbXs%2BDzJk%2BC7VUAPFFAqLCHBIORgZQ4HBD6u0l4zFlpwzG2wuIvVByt3dd7HdmI53nfbPV%2FBCReTNH53VvOLxbj3dOd9whQASyDjVxj2nrLX5O0HPXJ8Y2QY%2FE51oyW2oN3gOQ8IIb6edf%2B1ynQzg0SCwpmLfx7Q6UW3Dnk3iSRd1iK9YhaFpvBt2So%2FY8UU7km71CT4sGE05Dm9kIOQ5BB%2FadRlOWxcWdwswx%2FZoMCFP9EPiGSJHIZwKSCSYnhPFTefU7H1iXD1SAaFMHMmnPpo5Yyqbn1Vmvnkir%2BmFDmJWOgy1oYAG%2BQlhfO3aJ2c2z82brNMgEKtYoHvq5zOpvYX4vCdRqQFCiPELrBudOkDwqZPCnsKVBcXEE1fKAuJa0r6Aj85yVtzXWfYuVwl3QFSPYb3njPdigr%2B%2BtB1F8cXLFxAxibRa%2BD2bpGyzR%2Fnp1W7WMwXRAb1NlC89vNvyMIHw%2BMAGOqUBsp7YpOVSXq8%2BR9Jcl%2FALGylLSokyAzWQ%2B%2Fz04ropC6E33jFN6desIzzNt6jy06YOUkv1H23k3SVQaMc%2FMwVi1IqJAC7lIGjhJSbNzrTSq8xrI22XW2exZrd56SS3WeeYIH%2BavhvPo%2BkT%2BOhiu0gYM5EvlIAF6mqAAy7QkkuicxpapIpnXBsSaFQKMAGttbSkgZllK24c5WFxkMnHxfTZ6x%2BVZkcy&X-Amz-Signature=e38afe541752046e4d857076940515bc825d823e9a744fc6643702f46eccebbe&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3X2QSX%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZnyJ3H4oPELcBHH26QYQKjG2avQsEB%2FF8KenPnanqYAIgR2%2BO5QSNkGt9hPjAAsKWt%2FARJIauL75vxAoAYtWDYkIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgN56kGG7ehPh8jeCrcA49pC%2F304Ebmczu3bLunQeg9bCulUIYG9fnDho1qkD19hgeA9%2F2OPNab397mc2n%2Bld%2BT%2BMb3DCuTQMGVDgaNsZY1OqTw%2BtBo887JKsOwK4fM5nEWAm2KkRQDiaXfi4vmLilb9iodLzQQhvo%2B47jrBU1GQB2ATBLFsJIyAPYDbXs%2BDzJk%2BC7VUAPFFAqLCHBIORgZQ4HBD6u0l4zFlpwzG2wuIvVByt3dd7HdmI53nfbPV%2FBCReTNH53VvOLxbj3dOd9whQASyDjVxj2nrLX5O0HPXJ8Y2QY%2FE51oyW2oN3gOQ8IIb6edf%2B1ynQzg0SCwpmLfx7Q6UW3Dnk3iSRd1iK9YhaFpvBt2So%2FY8UU7km71CT4sGE05Dm9kIOQ5BB%2FadRlOWxcWdwswx%2FZoMCFP9EPiGSJHIZwKSCSYnhPFTefU7H1iXD1SAaFMHMmnPpo5Yyqbn1Vmvnkir%2BmFDmJWOgy1oYAG%2BQlhfO3aJ2c2z82brNMgEKtYoHvq5zOpvYX4vCdRqQFCiPELrBudOkDwqZPCnsKVBcXEE1fKAuJa0r6Aj85yVtzXWfYuVwl3QFSPYb3njPdigr%2B%2BtB1F8cXLFxAxibRa%2BD2bpGyzR%2Fnp1W7WMwXRAb1NlC89vNvyMIHw%2BMAGOqUBsp7YpOVSXq8%2BR9Jcl%2FALGylLSokyAzWQ%2B%2Fz04ropC6E33jFN6desIzzNt6jy06YOUkv1H23k3SVQaMc%2FMwVi1IqJAC7lIGjhJSbNzrTSq8xrI22XW2exZrd56SS3WeeYIH%2BavhvPo%2BkT%2BOhiu0gYM5EvlIAF6mqAAy7QkkuicxpapIpnXBsSaFQKMAGttbSkgZllK24c5WFxkMnHxfTZ6x%2BVZkcy&X-Amz-Signature=af2c5db92475a9d983a59d968a77f9a29e94ae3359d155be4917d69c16716d7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3X2QSX%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZnyJ3H4oPELcBHH26QYQKjG2avQsEB%2FF8KenPnanqYAIgR2%2BO5QSNkGt9hPjAAsKWt%2FARJIauL75vxAoAYtWDYkIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgN56kGG7ehPh8jeCrcA49pC%2F304Ebmczu3bLunQeg9bCulUIYG9fnDho1qkD19hgeA9%2F2OPNab397mc2n%2Bld%2BT%2BMb3DCuTQMGVDgaNsZY1OqTw%2BtBo887JKsOwK4fM5nEWAm2KkRQDiaXfi4vmLilb9iodLzQQhvo%2B47jrBU1GQB2ATBLFsJIyAPYDbXs%2BDzJk%2BC7VUAPFFAqLCHBIORgZQ4HBD6u0l4zFlpwzG2wuIvVByt3dd7HdmI53nfbPV%2FBCReTNH53VvOLxbj3dOd9whQASyDjVxj2nrLX5O0HPXJ8Y2QY%2FE51oyW2oN3gOQ8IIb6edf%2B1ynQzg0SCwpmLfx7Q6UW3Dnk3iSRd1iK9YhaFpvBt2So%2FY8UU7km71CT4sGE05Dm9kIOQ5BB%2FadRlOWxcWdwswx%2FZoMCFP9EPiGSJHIZwKSCSYnhPFTefU7H1iXD1SAaFMHMmnPpo5Yyqbn1Vmvnkir%2BmFDmJWOgy1oYAG%2BQlhfO3aJ2c2z82brNMgEKtYoHvq5zOpvYX4vCdRqQFCiPELrBudOkDwqZPCnsKVBcXEE1fKAuJa0r6Aj85yVtzXWfYuVwl3QFSPYb3njPdigr%2B%2BtB1F8cXLFxAxibRa%2BD2bpGyzR%2Fnp1W7WMwXRAb1NlC89vNvyMIHw%2BMAGOqUBsp7YpOVSXq8%2BR9Jcl%2FALGylLSokyAzWQ%2B%2Fz04ropC6E33jFN6desIzzNt6jy06YOUkv1H23k3SVQaMc%2FMwVi1IqJAC7lIGjhJSbNzrTSq8xrI22XW2exZrd56SS3WeeYIH%2BavhvPo%2BkT%2BOhiu0gYM5EvlIAF6mqAAy7QkkuicxpapIpnXBsSaFQKMAGttbSkgZllK24c5WFxkMnHxfTZ6x%2BVZkcy&X-Amz-Signature=481175bf425fdafa54374c84529c00dff30365b24a6eaa2d4b406f519c7e1e16&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
