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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKC6J2Z%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTWYlFPyY5Z5oCb41INRa9BOhk4m%2BLtOA992raNfolVAiEA2ao%2BDfCarZVtrwp0SXojRIdW4Enxoe6%2FMkRTnUzZmKUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo7Ka7y0LLXT%2Fur4SrcA9ZuQkqdE4TQiGCPgxpX4QI0f8cOyAfF%2BVZFZTQ7xG7QFVKiVnGX4ARBbqh7ujHGl8KhOZVGbN6tSqQtxVkarHCCaU1%2FcYCGNeX3YvD3HrkAvkVdBT%2FgemGc2I1OK%2Bh7whO69g2MgaCr%2BXYRhNuT7zB6CZOptdKn1100LUycA9hXvUemR%2Bex7Q7cApOpN%2F4s%2FkZSy%2B78uHeJviEjArCb7a7H346%2B3szJ86b3nkqpPywvaq2yL%2BU%2B65GPj9BC01ehxamKK6qB4%2B7gTuhU5V8dnPyhLSP%2Ba8P2pB%2FPd9PrKoHSFt2%2Fy7HOEjSyM%2BtWLrSm7yVnOy9NBWPNiJvCnTMSM6mOv712EFj1x7DbEK3HpgGmpZZUlmqfamcIlSGHHrkN4L%2BgcfFlqgEfwlhExszD36LhwjsEAixe8EDtZlqSpsOD%2Frg4RGaYNpSy47rabUOrVd1AIjMeVz1OB1GE8%2FbKh%2FfU2GuwZ20TqNh6w25phUT%2F2dZ%2FzwOE%2FwNpvM1%2B9i8eGAuUFcvRZkyGOwkHspvQ1n8SatOT47xwGDYbj3sfS5Vb%2Bd2ne9gB1oB5TRFdcaqFW39He3E%2BKR2Cvm%2BEgZPnae4jsZUE7%2FZzKNH4tH1Bh481y6Pujt86wffO2k3EMLeWpMIGOqUBJK%2FVQjFHJuY47%2BPkbJQFF6hHRtT4SIDGq%2BK8Haul7kg0xWN8ethp4wI3eGe5Y%2BNNJnMYnZiQC7OuK%2F4%2Bm4cr4k3HscvSdYc6i017%2Ft3Lta8iQwED849RUuDdeRcKyv0tPpgvhSGnEa0PgW1HyQ1A%2BKw7mnwCQEuHza9txiZ2yy%2FbGfoTW%2BwSqTZLRN7%2BWXoIV8F4v6%2Fo8LMSGHutZeZ17AzOpxYV&X-Amz-Signature=7d2e026a71da4e04682959dfd72ac45b2f427d75e7122334ad8ab416bc80f9f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKC6J2Z%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTWYlFPyY5Z5oCb41INRa9BOhk4m%2BLtOA992raNfolVAiEA2ao%2BDfCarZVtrwp0SXojRIdW4Enxoe6%2FMkRTnUzZmKUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo7Ka7y0LLXT%2Fur4SrcA9ZuQkqdE4TQiGCPgxpX4QI0f8cOyAfF%2BVZFZTQ7xG7QFVKiVnGX4ARBbqh7ujHGl8KhOZVGbN6tSqQtxVkarHCCaU1%2FcYCGNeX3YvD3HrkAvkVdBT%2FgemGc2I1OK%2Bh7whO69g2MgaCr%2BXYRhNuT7zB6CZOptdKn1100LUycA9hXvUemR%2Bex7Q7cApOpN%2F4s%2FkZSy%2B78uHeJviEjArCb7a7H346%2B3szJ86b3nkqpPywvaq2yL%2BU%2B65GPj9BC01ehxamKK6qB4%2B7gTuhU5V8dnPyhLSP%2Ba8P2pB%2FPd9PrKoHSFt2%2Fy7HOEjSyM%2BtWLrSm7yVnOy9NBWPNiJvCnTMSM6mOv712EFj1x7DbEK3HpgGmpZZUlmqfamcIlSGHHrkN4L%2BgcfFlqgEfwlhExszD36LhwjsEAixe8EDtZlqSpsOD%2Frg4RGaYNpSy47rabUOrVd1AIjMeVz1OB1GE8%2FbKh%2FfU2GuwZ20TqNh6w25phUT%2F2dZ%2FzwOE%2FwNpvM1%2B9i8eGAuUFcvRZkyGOwkHspvQ1n8SatOT47xwGDYbj3sfS5Vb%2Bd2ne9gB1oB5TRFdcaqFW39He3E%2BKR2Cvm%2BEgZPnae4jsZUE7%2FZzKNH4tH1Bh481y6Pujt86wffO2k3EMLeWpMIGOqUBJK%2FVQjFHJuY47%2BPkbJQFF6hHRtT4SIDGq%2BK8Haul7kg0xWN8ethp4wI3eGe5Y%2BNNJnMYnZiQC7OuK%2F4%2Bm4cr4k3HscvSdYc6i017%2Ft3Lta8iQwED849RUuDdeRcKyv0tPpgvhSGnEa0PgW1HyQ1A%2BKw7mnwCQEuHza9txiZ2yy%2FbGfoTW%2BwSqTZLRN7%2BWXoIV8F4v6%2Fo8LMSGHutZeZ17AzOpxYV&X-Amz-Signature=86a6f8c9bd9a16cc214afee4455ccb0511b2c8f0f8a5789669780c1f50094fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKC6J2Z%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTWYlFPyY5Z5oCb41INRa9BOhk4m%2BLtOA992raNfolVAiEA2ao%2BDfCarZVtrwp0SXojRIdW4Enxoe6%2FMkRTnUzZmKUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo7Ka7y0LLXT%2Fur4SrcA9ZuQkqdE4TQiGCPgxpX4QI0f8cOyAfF%2BVZFZTQ7xG7QFVKiVnGX4ARBbqh7ujHGl8KhOZVGbN6tSqQtxVkarHCCaU1%2FcYCGNeX3YvD3HrkAvkVdBT%2FgemGc2I1OK%2Bh7whO69g2MgaCr%2BXYRhNuT7zB6CZOptdKn1100LUycA9hXvUemR%2Bex7Q7cApOpN%2F4s%2FkZSy%2B78uHeJviEjArCb7a7H346%2B3szJ86b3nkqpPywvaq2yL%2BU%2B65GPj9BC01ehxamKK6qB4%2B7gTuhU5V8dnPyhLSP%2Ba8P2pB%2FPd9PrKoHSFt2%2Fy7HOEjSyM%2BtWLrSm7yVnOy9NBWPNiJvCnTMSM6mOv712EFj1x7DbEK3HpgGmpZZUlmqfamcIlSGHHrkN4L%2BgcfFlqgEfwlhExszD36LhwjsEAixe8EDtZlqSpsOD%2Frg4RGaYNpSy47rabUOrVd1AIjMeVz1OB1GE8%2FbKh%2FfU2GuwZ20TqNh6w25phUT%2F2dZ%2FzwOE%2FwNpvM1%2B9i8eGAuUFcvRZkyGOwkHspvQ1n8SatOT47xwGDYbj3sfS5Vb%2Bd2ne9gB1oB5TRFdcaqFW39He3E%2BKR2Cvm%2BEgZPnae4jsZUE7%2FZzKNH4tH1Bh481y6Pujt86wffO2k3EMLeWpMIGOqUBJK%2FVQjFHJuY47%2BPkbJQFF6hHRtT4SIDGq%2BK8Haul7kg0xWN8ethp4wI3eGe5Y%2BNNJnMYnZiQC7OuK%2F4%2Bm4cr4k3HscvSdYc6i017%2Ft3Lta8iQwED849RUuDdeRcKyv0tPpgvhSGnEa0PgW1HyQ1A%2BKw7mnwCQEuHza9txiZ2yy%2FbGfoTW%2BwSqTZLRN7%2BWXoIV8F4v6%2Fo8LMSGHutZeZ17AzOpxYV&X-Amz-Signature=8d390d95b203cc1de633c23ce7d0b9cf689273d4a1456f5de138528ec88c26fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKC6J2Z%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTWYlFPyY5Z5oCb41INRa9BOhk4m%2BLtOA992raNfolVAiEA2ao%2BDfCarZVtrwp0SXojRIdW4Enxoe6%2FMkRTnUzZmKUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo7Ka7y0LLXT%2Fur4SrcA9ZuQkqdE4TQiGCPgxpX4QI0f8cOyAfF%2BVZFZTQ7xG7QFVKiVnGX4ARBbqh7ujHGl8KhOZVGbN6tSqQtxVkarHCCaU1%2FcYCGNeX3YvD3HrkAvkVdBT%2FgemGc2I1OK%2Bh7whO69g2MgaCr%2BXYRhNuT7zB6CZOptdKn1100LUycA9hXvUemR%2Bex7Q7cApOpN%2F4s%2FkZSy%2B78uHeJviEjArCb7a7H346%2B3szJ86b3nkqpPywvaq2yL%2BU%2B65GPj9BC01ehxamKK6qB4%2B7gTuhU5V8dnPyhLSP%2Ba8P2pB%2FPd9PrKoHSFt2%2Fy7HOEjSyM%2BtWLrSm7yVnOy9NBWPNiJvCnTMSM6mOv712EFj1x7DbEK3HpgGmpZZUlmqfamcIlSGHHrkN4L%2BgcfFlqgEfwlhExszD36LhwjsEAixe8EDtZlqSpsOD%2Frg4RGaYNpSy47rabUOrVd1AIjMeVz1OB1GE8%2FbKh%2FfU2GuwZ20TqNh6w25phUT%2F2dZ%2FzwOE%2FwNpvM1%2B9i8eGAuUFcvRZkyGOwkHspvQ1n8SatOT47xwGDYbj3sfS5Vb%2Bd2ne9gB1oB5TRFdcaqFW39He3E%2BKR2Cvm%2BEgZPnae4jsZUE7%2FZzKNH4tH1Bh481y6Pujt86wffO2k3EMLeWpMIGOqUBJK%2FVQjFHJuY47%2BPkbJQFF6hHRtT4SIDGq%2BK8Haul7kg0xWN8ethp4wI3eGe5Y%2BNNJnMYnZiQC7OuK%2F4%2Bm4cr4k3HscvSdYc6i017%2Ft3Lta8iQwED849RUuDdeRcKyv0tPpgvhSGnEa0PgW1HyQ1A%2BKw7mnwCQEuHza9txiZ2yy%2FbGfoTW%2BwSqTZLRN7%2BWXoIV8F4v6%2Fo8LMSGHutZeZ17AzOpxYV&X-Amz-Signature=836ebf0381c311ca56f6181d0e8b9dd6ef14afad35984b6edf095b9871cf03ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKC6J2Z%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTWYlFPyY5Z5oCb41INRa9BOhk4m%2BLtOA992raNfolVAiEA2ao%2BDfCarZVtrwp0SXojRIdW4Enxoe6%2FMkRTnUzZmKUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo7Ka7y0LLXT%2Fur4SrcA9ZuQkqdE4TQiGCPgxpX4QI0f8cOyAfF%2BVZFZTQ7xG7QFVKiVnGX4ARBbqh7ujHGl8KhOZVGbN6tSqQtxVkarHCCaU1%2FcYCGNeX3YvD3HrkAvkVdBT%2FgemGc2I1OK%2Bh7whO69g2MgaCr%2BXYRhNuT7zB6CZOptdKn1100LUycA9hXvUemR%2Bex7Q7cApOpN%2F4s%2FkZSy%2B78uHeJviEjArCb7a7H346%2B3szJ86b3nkqpPywvaq2yL%2BU%2B65GPj9BC01ehxamKK6qB4%2B7gTuhU5V8dnPyhLSP%2Ba8P2pB%2FPd9PrKoHSFt2%2Fy7HOEjSyM%2BtWLrSm7yVnOy9NBWPNiJvCnTMSM6mOv712EFj1x7DbEK3HpgGmpZZUlmqfamcIlSGHHrkN4L%2BgcfFlqgEfwlhExszD36LhwjsEAixe8EDtZlqSpsOD%2Frg4RGaYNpSy47rabUOrVd1AIjMeVz1OB1GE8%2FbKh%2FfU2GuwZ20TqNh6w25phUT%2F2dZ%2FzwOE%2FwNpvM1%2B9i8eGAuUFcvRZkyGOwkHspvQ1n8SatOT47xwGDYbj3sfS5Vb%2Bd2ne9gB1oB5TRFdcaqFW39He3E%2BKR2Cvm%2BEgZPnae4jsZUE7%2FZzKNH4tH1Bh481y6Pujt86wffO2k3EMLeWpMIGOqUBJK%2FVQjFHJuY47%2BPkbJQFF6hHRtT4SIDGq%2BK8Haul7kg0xWN8ethp4wI3eGe5Y%2BNNJnMYnZiQC7OuK%2F4%2Bm4cr4k3HscvSdYc6i017%2Ft3Lta8iQwED849RUuDdeRcKyv0tPpgvhSGnEa0PgW1HyQ1A%2BKw7mnwCQEuHza9txiZ2yy%2FbGfoTW%2BwSqTZLRN7%2BWXoIV8F4v6%2Fo8LMSGHutZeZ17AzOpxYV&X-Amz-Signature=f490ef00739aca39a5dc28f95635227567ff0351fb53c6bbbf75d5545376da59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
