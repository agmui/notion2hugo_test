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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLDINM4R%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDk3sCIig7rXeOOMAeFPItMPrm%2F79CUm3j1sUpc%2FkWCTwIgC0abqLsL1HPrs272kUeQpPgVwxSj57IxE0AnQCMTtzQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWW9PYDXcJb0jZbyyrcA0CrOE1zcS905ESJd27J7zGAyxhwBbJAQl7wcBdjZuBUg2rRKonHok%2Fz5N87ks8KaLZhPhhoqnqflOC7KZSlkGZNm%2F84lkGn6PstNjOTz06anRgZC7dh%2Fhi81nNDWfOefVk4MAUR01RLs9PAZt28p4QVMbR4scl7VURmKepLEwEltPlDs%2B3VB2wnsBVikoxRBUnkFvEVPDY2WMZpsBxM4uNMUuJIUZ0P%2F8X2OG06Cu3x8o5e4A1UeFQ7Hx%2FozLRL6Dz4pJtiFTKro9qpjpLn22sjd5aGY%2BaK4dy%2FWlOLK8zHl0Jn5BmYCyDuHwcjTJk9qdbqwqpn4J7BGhASFJJ0UDEjOLm4ig7c%2Fq0acMTeK3F5hoGgbZWad1YytkUvnHnih6dHsmmMCUU3OyCLiJkN4Ev%2BKB854wr1uH5tLZbcEUg0mv3I1yMwesJIhWIiGmhAsR6ji%2BI7imLYlN2CXJOZWOTtTgpErqlAHCsCAFLhqfN5SgsVSRnVTj7rBVilILljcmoPv7HdoDCVn0KGrTAO5ITsUPwInHCgawsaFXGQvdwVmX%2FKyQYBnb6Sokfw5%2BF%2F47ULTZFKN6FlCTrUN5M8ALIxWzj7BLOfzQmHj02PVkpfQE9hEp3f7YKrvEbQML%2FHjb4GOqUBe51ojCOqRY%2B1eEYAC%2Ft9RlWcRggQ0yGVlonPvjb%2BolcauCBscVBoieMenNjvskBEhj4nd7O%2B1Cs1A0gXRK0ZIq9hijpDQdRl0F1Qt%2BiC6oOJ%2BYGYHnS2s70x1sXcSiixmwA6bLcU2bjaAGmlm58GCgZfS5R9NJdCWMvGSa1go3L2xVNMJB%2Fc5FrpPW41XuqcURU8CkGTa67wY0E%2B63%2BoDGzSVyhU&X-Amz-Signature=de95599465228f100a36084b01a73fa75b5fd6ae0e8912450a2fb40f1cbd7813&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLDINM4R%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDk3sCIig7rXeOOMAeFPItMPrm%2F79CUm3j1sUpc%2FkWCTwIgC0abqLsL1HPrs272kUeQpPgVwxSj57IxE0AnQCMTtzQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWW9PYDXcJb0jZbyyrcA0CrOE1zcS905ESJd27J7zGAyxhwBbJAQl7wcBdjZuBUg2rRKonHok%2Fz5N87ks8KaLZhPhhoqnqflOC7KZSlkGZNm%2F84lkGn6PstNjOTz06anRgZC7dh%2Fhi81nNDWfOefVk4MAUR01RLs9PAZt28p4QVMbR4scl7VURmKepLEwEltPlDs%2B3VB2wnsBVikoxRBUnkFvEVPDY2WMZpsBxM4uNMUuJIUZ0P%2F8X2OG06Cu3x8o5e4A1UeFQ7Hx%2FozLRL6Dz4pJtiFTKro9qpjpLn22sjd5aGY%2BaK4dy%2FWlOLK8zHl0Jn5BmYCyDuHwcjTJk9qdbqwqpn4J7BGhASFJJ0UDEjOLm4ig7c%2Fq0acMTeK3F5hoGgbZWad1YytkUvnHnih6dHsmmMCUU3OyCLiJkN4Ev%2BKB854wr1uH5tLZbcEUg0mv3I1yMwesJIhWIiGmhAsR6ji%2BI7imLYlN2CXJOZWOTtTgpErqlAHCsCAFLhqfN5SgsVSRnVTj7rBVilILljcmoPv7HdoDCVn0KGrTAO5ITsUPwInHCgawsaFXGQvdwVmX%2FKyQYBnb6Sokfw5%2BF%2F47ULTZFKN6FlCTrUN5M8ALIxWzj7BLOfzQmHj02PVkpfQE9hEp3f7YKrvEbQML%2FHjb4GOqUBe51ojCOqRY%2B1eEYAC%2Ft9RlWcRggQ0yGVlonPvjb%2BolcauCBscVBoieMenNjvskBEhj4nd7O%2B1Cs1A0gXRK0ZIq9hijpDQdRl0F1Qt%2BiC6oOJ%2BYGYHnS2s70x1sXcSiixmwA6bLcU2bjaAGmlm58GCgZfS5R9NJdCWMvGSa1go3L2xVNMJB%2Fc5FrpPW41XuqcURU8CkGTa67wY0E%2B63%2BoDGzSVyhU&X-Amz-Signature=27a320b264a81bb732c3ab840a30ad42877c3b1b02d011d84abcb45c9934b055&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLDINM4R%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDk3sCIig7rXeOOMAeFPItMPrm%2F79CUm3j1sUpc%2FkWCTwIgC0abqLsL1HPrs272kUeQpPgVwxSj57IxE0AnQCMTtzQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWW9PYDXcJb0jZbyyrcA0CrOE1zcS905ESJd27J7zGAyxhwBbJAQl7wcBdjZuBUg2rRKonHok%2Fz5N87ks8KaLZhPhhoqnqflOC7KZSlkGZNm%2F84lkGn6PstNjOTz06anRgZC7dh%2Fhi81nNDWfOefVk4MAUR01RLs9PAZt28p4QVMbR4scl7VURmKepLEwEltPlDs%2B3VB2wnsBVikoxRBUnkFvEVPDY2WMZpsBxM4uNMUuJIUZ0P%2F8X2OG06Cu3x8o5e4A1UeFQ7Hx%2FozLRL6Dz4pJtiFTKro9qpjpLn22sjd5aGY%2BaK4dy%2FWlOLK8zHl0Jn5BmYCyDuHwcjTJk9qdbqwqpn4J7BGhASFJJ0UDEjOLm4ig7c%2Fq0acMTeK3F5hoGgbZWad1YytkUvnHnih6dHsmmMCUU3OyCLiJkN4Ev%2BKB854wr1uH5tLZbcEUg0mv3I1yMwesJIhWIiGmhAsR6ji%2BI7imLYlN2CXJOZWOTtTgpErqlAHCsCAFLhqfN5SgsVSRnVTj7rBVilILljcmoPv7HdoDCVn0KGrTAO5ITsUPwInHCgawsaFXGQvdwVmX%2FKyQYBnb6Sokfw5%2BF%2F47ULTZFKN6FlCTrUN5M8ALIxWzj7BLOfzQmHj02PVkpfQE9hEp3f7YKrvEbQML%2FHjb4GOqUBe51ojCOqRY%2B1eEYAC%2Ft9RlWcRggQ0yGVlonPvjb%2BolcauCBscVBoieMenNjvskBEhj4nd7O%2B1Cs1A0gXRK0ZIq9hijpDQdRl0F1Qt%2BiC6oOJ%2BYGYHnS2s70x1sXcSiixmwA6bLcU2bjaAGmlm58GCgZfS5R9NJdCWMvGSa1go3L2xVNMJB%2Fc5FrpPW41XuqcURU8CkGTa67wY0E%2B63%2BoDGzSVyhU&X-Amz-Signature=9e7f604f039de6da871a6465e5e793588d2e5254ddc258a612cb81f173930892&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLDINM4R%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDk3sCIig7rXeOOMAeFPItMPrm%2F79CUm3j1sUpc%2FkWCTwIgC0abqLsL1HPrs272kUeQpPgVwxSj57IxE0AnQCMTtzQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWW9PYDXcJb0jZbyyrcA0CrOE1zcS905ESJd27J7zGAyxhwBbJAQl7wcBdjZuBUg2rRKonHok%2Fz5N87ks8KaLZhPhhoqnqflOC7KZSlkGZNm%2F84lkGn6PstNjOTz06anRgZC7dh%2Fhi81nNDWfOefVk4MAUR01RLs9PAZt28p4QVMbR4scl7VURmKepLEwEltPlDs%2B3VB2wnsBVikoxRBUnkFvEVPDY2WMZpsBxM4uNMUuJIUZ0P%2F8X2OG06Cu3x8o5e4A1UeFQ7Hx%2FozLRL6Dz4pJtiFTKro9qpjpLn22sjd5aGY%2BaK4dy%2FWlOLK8zHl0Jn5BmYCyDuHwcjTJk9qdbqwqpn4J7BGhASFJJ0UDEjOLm4ig7c%2Fq0acMTeK3F5hoGgbZWad1YytkUvnHnih6dHsmmMCUU3OyCLiJkN4Ev%2BKB854wr1uH5tLZbcEUg0mv3I1yMwesJIhWIiGmhAsR6ji%2BI7imLYlN2CXJOZWOTtTgpErqlAHCsCAFLhqfN5SgsVSRnVTj7rBVilILljcmoPv7HdoDCVn0KGrTAO5ITsUPwInHCgawsaFXGQvdwVmX%2FKyQYBnb6Sokfw5%2BF%2F47ULTZFKN6FlCTrUN5M8ALIxWzj7BLOfzQmHj02PVkpfQE9hEp3f7YKrvEbQML%2FHjb4GOqUBe51ojCOqRY%2B1eEYAC%2Ft9RlWcRggQ0yGVlonPvjb%2BolcauCBscVBoieMenNjvskBEhj4nd7O%2B1Cs1A0gXRK0ZIq9hijpDQdRl0F1Qt%2BiC6oOJ%2BYGYHnS2s70x1sXcSiixmwA6bLcU2bjaAGmlm58GCgZfS5R9NJdCWMvGSa1go3L2xVNMJB%2Fc5FrpPW41XuqcURU8CkGTa67wY0E%2B63%2BoDGzSVyhU&X-Amz-Signature=ecb8e342c005d24bc5d5444a3da3e215018f924718a3ab37960cb1ff3e0251ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLDINM4R%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDk3sCIig7rXeOOMAeFPItMPrm%2F79CUm3j1sUpc%2FkWCTwIgC0abqLsL1HPrs272kUeQpPgVwxSj57IxE0AnQCMTtzQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWW9PYDXcJb0jZbyyrcA0CrOE1zcS905ESJd27J7zGAyxhwBbJAQl7wcBdjZuBUg2rRKonHok%2Fz5N87ks8KaLZhPhhoqnqflOC7KZSlkGZNm%2F84lkGn6PstNjOTz06anRgZC7dh%2Fhi81nNDWfOefVk4MAUR01RLs9PAZt28p4QVMbR4scl7VURmKepLEwEltPlDs%2B3VB2wnsBVikoxRBUnkFvEVPDY2WMZpsBxM4uNMUuJIUZ0P%2F8X2OG06Cu3x8o5e4A1UeFQ7Hx%2FozLRL6Dz4pJtiFTKro9qpjpLn22sjd5aGY%2BaK4dy%2FWlOLK8zHl0Jn5BmYCyDuHwcjTJk9qdbqwqpn4J7BGhASFJJ0UDEjOLm4ig7c%2Fq0acMTeK3F5hoGgbZWad1YytkUvnHnih6dHsmmMCUU3OyCLiJkN4Ev%2BKB854wr1uH5tLZbcEUg0mv3I1yMwesJIhWIiGmhAsR6ji%2BI7imLYlN2CXJOZWOTtTgpErqlAHCsCAFLhqfN5SgsVSRnVTj7rBVilILljcmoPv7HdoDCVn0KGrTAO5ITsUPwInHCgawsaFXGQvdwVmX%2FKyQYBnb6Sokfw5%2BF%2F47ULTZFKN6FlCTrUN5M8ALIxWzj7BLOfzQmHj02PVkpfQE9hEp3f7YKrvEbQML%2FHjb4GOqUBe51ojCOqRY%2B1eEYAC%2Ft9RlWcRggQ0yGVlonPvjb%2BolcauCBscVBoieMenNjvskBEhj4nd7O%2B1Cs1A0gXRK0ZIq9hijpDQdRl0F1Qt%2BiC6oOJ%2BYGYHnS2s70x1sXcSiixmwA6bLcU2bjaAGmlm58GCgZfS5R9NJdCWMvGSa1go3L2xVNMJB%2Fc5FrpPW41XuqcURU8CkGTa67wY0E%2B63%2BoDGzSVyhU&X-Amz-Signature=559939634459da285117435cd6862c924eb738a13d7210ea57a34b6677737e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
