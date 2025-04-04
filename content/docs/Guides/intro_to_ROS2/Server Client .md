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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYAQFJF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaXQUIDk%2Bx0kR7uj2ib6EQu%2FOXQmRKlX4o22I8TrMoAAIge0TRO1WhY%2FxGSQnp0xoUO28tssLsOPEOwrU5ni567yAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDO1j4vIhcMjthOFFuCrcA%2FVFzHnuQRxWqkdj1hX6okUfi1zK6HVgZs12JRFZ2PKmk0siG5mhPrYBCnP3EhBMXUh%2F5dnnZu%2FGeeUbfy5My3bpxfpVVt2i6e0ur6NGV3OfApAWFOwc8lCU1O64bUDCZe4mb2H0zr%2FcH%2FXVPXXI3M5dl7pRsecE%2F5lRWBxdGTI4%2FNMR2nFVF4C9xmjfEngwxrbZWGrnwQ7%2B9tNlYfi8B9cQDiHc5dNt2b0Ws4%2Fsw4ArHmZWD6ziO91Izk5u3O6bRXn%2FkXqdTIofVU6oxyFc5CtDUoCbmo5P9omvGBzKX64vc7nj6%2BYA6vIjWYS9aEnmWRYtdNaGtBQqZEZrCsB5%2F74xVmzH1HFsvNK%2BeUWiuowulOiCItHeEKj39ST0LONsXJukvWB0e62HS84bcEvGZyrCqtuhB7BJfiDTO9NwQhMM2dDcLtvXVb92j%2BfmMj9tqteQ0h32lhnuXBna1qJQqHMFSq0utyic8%2FX%2FU3VL81mAK%2FMGDuQ8AEl0vMHOKyCQfG0zF5JvvgJL6If0vKdubyTnbmhD4bOvOKoiNc%2BOPn7s5jwrjYEN%2BF6HzgTm6PPeRNl7nE7ur0NPMifNRvyoRmzklAbTcLo6VEGKV8rTxoT4zBCYrC3ngMotqpSfMJvkvr8GOqUB7aYjM1vtKHi9dZvHXRDeROeM21h2x0Erg7EdYPyARi088e4w2uU%2BSzfPSaSiDmVLGBoSV6LVl%2FOSadxtSRReZcZoFXQQWDLfT%2F5OPZmkcsiHw8iqeEldWkgeJY7QOpzFUtL4wS867%2BZP7z3HTVxQetHfg6LPui3YLhATpbAoLfnpOoQ4DPYXLQvhFiiFCsvMK6qomxlE3XDCw3ge5N%2FgG8z9jp0%2B&X-Amz-Signature=705406de000072f08cdbd59972e942be7d87d07e3e740152e25e6e8c58f6aaa6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYAQFJF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaXQUIDk%2Bx0kR7uj2ib6EQu%2FOXQmRKlX4o22I8TrMoAAIge0TRO1WhY%2FxGSQnp0xoUO28tssLsOPEOwrU5ni567yAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDO1j4vIhcMjthOFFuCrcA%2FVFzHnuQRxWqkdj1hX6okUfi1zK6HVgZs12JRFZ2PKmk0siG5mhPrYBCnP3EhBMXUh%2F5dnnZu%2FGeeUbfy5My3bpxfpVVt2i6e0ur6NGV3OfApAWFOwc8lCU1O64bUDCZe4mb2H0zr%2FcH%2FXVPXXI3M5dl7pRsecE%2F5lRWBxdGTI4%2FNMR2nFVF4C9xmjfEngwxrbZWGrnwQ7%2B9tNlYfi8B9cQDiHc5dNt2b0Ws4%2Fsw4ArHmZWD6ziO91Izk5u3O6bRXn%2FkXqdTIofVU6oxyFc5CtDUoCbmo5P9omvGBzKX64vc7nj6%2BYA6vIjWYS9aEnmWRYtdNaGtBQqZEZrCsB5%2F74xVmzH1HFsvNK%2BeUWiuowulOiCItHeEKj39ST0LONsXJukvWB0e62HS84bcEvGZyrCqtuhB7BJfiDTO9NwQhMM2dDcLtvXVb92j%2BfmMj9tqteQ0h32lhnuXBna1qJQqHMFSq0utyic8%2FX%2FU3VL81mAK%2FMGDuQ8AEl0vMHOKyCQfG0zF5JvvgJL6If0vKdubyTnbmhD4bOvOKoiNc%2BOPn7s5jwrjYEN%2BF6HzgTm6PPeRNl7nE7ur0NPMifNRvyoRmzklAbTcLo6VEGKV8rTxoT4zBCYrC3ngMotqpSfMJvkvr8GOqUB7aYjM1vtKHi9dZvHXRDeROeM21h2x0Erg7EdYPyARi088e4w2uU%2BSzfPSaSiDmVLGBoSV6LVl%2FOSadxtSRReZcZoFXQQWDLfT%2F5OPZmkcsiHw8iqeEldWkgeJY7QOpzFUtL4wS867%2BZP7z3HTVxQetHfg6LPui3YLhATpbAoLfnpOoQ4DPYXLQvhFiiFCsvMK6qomxlE3XDCw3ge5N%2FgG8z9jp0%2B&X-Amz-Signature=3ce5be270dce126fa9c5f88ddff88118cd2184b5d186eceb141a5a228ec99f16&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYAQFJF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaXQUIDk%2Bx0kR7uj2ib6EQu%2FOXQmRKlX4o22I8TrMoAAIge0TRO1WhY%2FxGSQnp0xoUO28tssLsOPEOwrU5ni567yAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDO1j4vIhcMjthOFFuCrcA%2FVFzHnuQRxWqkdj1hX6okUfi1zK6HVgZs12JRFZ2PKmk0siG5mhPrYBCnP3EhBMXUh%2F5dnnZu%2FGeeUbfy5My3bpxfpVVt2i6e0ur6NGV3OfApAWFOwc8lCU1O64bUDCZe4mb2H0zr%2FcH%2FXVPXXI3M5dl7pRsecE%2F5lRWBxdGTI4%2FNMR2nFVF4C9xmjfEngwxrbZWGrnwQ7%2B9tNlYfi8B9cQDiHc5dNt2b0Ws4%2Fsw4ArHmZWD6ziO91Izk5u3O6bRXn%2FkXqdTIofVU6oxyFc5CtDUoCbmo5P9omvGBzKX64vc7nj6%2BYA6vIjWYS9aEnmWRYtdNaGtBQqZEZrCsB5%2F74xVmzH1HFsvNK%2BeUWiuowulOiCItHeEKj39ST0LONsXJukvWB0e62HS84bcEvGZyrCqtuhB7BJfiDTO9NwQhMM2dDcLtvXVb92j%2BfmMj9tqteQ0h32lhnuXBna1qJQqHMFSq0utyic8%2FX%2FU3VL81mAK%2FMGDuQ8AEl0vMHOKyCQfG0zF5JvvgJL6If0vKdubyTnbmhD4bOvOKoiNc%2BOPn7s5jwrjYEN%2BF6HzgTm6PPeRNl7nE7ur0NPMifNRvyoRmzklAbTcLo6VEGKV8rTxoT4zBCYrC3ngMotqpSfMJvkvr8GOqUB7aYjM1vtKHi9dZvHXRDeROeM21h2x0Erg7EdYPyARi088e4w2uU%2BSzfPSaSiDmVLGBoSV6LVl%2FOSadxtSRReZcZoFXQQWDLfT%2F5OPZmkcsiHw8iqeEldWkgeJY7QOpzFUtL4wS867%2BZP7z3HTVxQetHfg6LPui3YLhATpbAoLfnpOoQ4DPYXLQvhFiiFCsvMK6qomxlE3XDCw3ge5N%2FgG8z9jp0%2B&X-Amz-Signature=01238e11a8a24c88ec06a720929010f9d5beca308bcbf1d22357bfe6b08deeec&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYAQFJF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaXQUIDk%2Bx0kR7uj2ib6EQu%2FOXQmRKlX4o22I8TrMoAAIge0TRO1WhY%2FxGSQnp0xoUO28tssLsOPEOwrU5ni567yAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDO1j4vIhcMjthOFFuCrcA%2FVFzHnuQRxWqkdj1hX6okUfi1zK6HVgZs12JRFZ2PKmk0siG5mhPrYBCnP3EhBMXUh%2F5dnnZu%2FGeeUbfy5My3bpxfpVVt2i6e0ur6NGV3OfApAWFOwc8lCU1O64bUDCZe4mb2H0zr%2FcH%2FXVPXXI3M5dl7pRsecE%2F5lRWBxdGTI4%2FNMR2nFVF4C9xmjfEngwxrbZWGrnwQ7%2B9tNlYfi8B9cQDiHc5dNt2b0Ws4%2Fsw4ArHmZWD6ziO91Izk5u3O6bRXn%2FkXqdTIofVU6oxyFc5CtDUoCbmo5P9omvGBzKX64vc7nj6%2BYA6vIjWYS9aEnmWRYtdNaGtBQqZEZrCsB5%2F74xVmzH1HFsvNK%2BeUWiuowulOiCItHeEKj39ST0LONsXJukvWB0e62HS84bcEvGZyrCqtuhB7BJfiDTO9NwQhMM2dDcLtvXVb92j%2BfmMj9tqteQ0h32lhnuXBna1qJQqHMFSq0utyic8%2FX%2FU3VL81mAK%2FMGDuQ8AEl0vMHOKyCQfG0zF5JvvgJL6If0vKdubyTnbmhD4bOvOKoiNc%2BOPn7s5jwrjYEN%2BF6HzgTm6PPeRNl7nE7ur0NPMifNRvyoRmzklAbTcLo6VEGKV8rTxoT4zBCYrC3ngMotqpSfMJvkvr8GOqUB7aYjM1vtKHi9dZvHXRDeROeM21h2x0Erg7EdYPyARi088e4w2uU%2BSzfPSaSiDmVLGBoSV6LVl%2FOSadxtSRReZcZoFXQQWDLfT%2F5OPZmkcsiHw8iqeEldWkgeJY7QOpzFUtL4wS867%2BZP7z3HTVxQetHfg6LPui3YLhATpbAoLfnpOoQ4DPYXLQvhFiiFCsvMK6qomxlE3XDCw3ge5N%2FgG8z9jp0%2B&X-Amz-Signature=9eb55c1ce3ae5ecb04d57630d036f6ac52667c6ee89f11c0e2c0e7ac4d146d78&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYAQFJF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaXQUIDk%2Bx0kR7uj2ib6EQu%2FOXQmRKlX4o22I8TrMoAAIge0TRO1WhY%2FxGSQnp0xoUO28tssLsOPEOwrU5ni567yAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDO1j4vIhcMjthOFFuCrcA%2FVFzHnuQRxWqkdj1hX6okUfi1zK6HVgZs12JRFZ2PKmk0siG5mhPrYBCnP3EhBMXUh%2F5dnnZu%2FGeeUbfy5My3bpxfpVVt2i6e0ur6NGV3OfApAWFOwc8lCU1O64bUDCZe4mb2H0zr%2FcH%2FXVPXXI3M5dl7pRsecE%2F5lRWBxdGTI4%2FNMR2nFVF4C9xmjfEngwxrbZWGrnwQ7%2B9tNlYfi8B9cQDiHc5dNt2b0Ws4%2Fsw4ArHmZWD6ziO91Izk5u3O6bRXn%2FkXqdTIofVU6oxyFc5CtDUoCbmo5P9omvGBzKX64vc7nj6%2BYA6vIjWYS9aEnmWRYtdNaGtBQqZEZrCsB5%2F74xVmzH1HFsvNK%2BeUWiuowulOiCItHeEKj39ST0LONsXJukvWB0e62HS84bcEvGZyrCqtuhB7BJfiDTO9NwQhMM2dDcLtvXVb92j%2BfmMj9tqteQ0h32lhnuXBna1qJQqHMFSq0utyic8%2FX%2FU3VL81mAK%2FMGDuQ8AEl0vMHOKyCQfG0zF5JvvgJL6If0vKdubyTnbmhD4bOvOKoiNc%2BOPn7s5jwrjYEN%2BF6HzgTm6PPeRNl7nE7ur0NPMifNRvyoRmzklAbTcLo6VEGKV8rTxoT4zBCYrC3ngMotqpSfMJvkvr8GOqUB7aYjM1vtKHi9dZvHXRDeROeM21h2x0Erg7EdYPyARi088e4w2uU%2BSzfPSaSiDmVLGBoSV6LVl%2FOSadxtSRReZcZoFXQQWDLfT%2F5OPZmkcsiHw8iqeEldWkgeJY7QOpzFUtL4wS867%2BZP7z3HTVxQetHfg6LPui3YLhATpbAoLfnpOoQ4DPYXLQvhFiiFCsvMK6qomxlE3XDCw3ge5N%2FgG8z9jp0%2B&X-Amz-Signature=e99ba56df4690ed3ab8c29169b0d4451f8c9188d516d05443f01ed1c2de95894&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
