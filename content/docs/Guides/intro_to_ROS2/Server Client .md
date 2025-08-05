---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWDHTPJ2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCZ4VCIDssv40C1Afe7uKxgc%2BYUZ0tqot2nICypA5UPyAIgP3rTMxhVA1F7unn2%2F3g9tW6%2FKWbwcGWKNahiICXj6hwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNYB7b2EA7Gd5QZ3YCrcAxmMMOYeg0TUEEIy1GTZ6c7zYgpb2VSwHi5vJom%2B%2Fh6P6WDoYJT0opbWxDLo2JizZz8Rvi7P%2FqGTwjk5BXRfR%2F4nFajw06IEhhFCkecDzsSCXDrVdu9s%2FHbJPtgiZZaxyohorbFq5DSr9wRvfh%2BYF3PGTYsdF5YDssPOnu%2FoKz8072M1Wy7uFqwt26W%2BHgomJyV73B6hvJ3ay2fzwXQxRqy%2BCLrhrhFw4lX%2B%2BvmagsOxcOdrmlErEfirTxISoUN92gmscTYUZ6Qz0yfQoLW3ahj0ZhYslv1Vb9pHb7YF5n6xNQbCxkWMueAuVDzAnNKtUvetqUOslQt4TZEFucdHhXw41%2B0B2PKQpDJ%2F9AeVIPAJgutrXGYSb0n11cAsVubL06lnG41GUbfeAcQnOV7KWWjsRipWXIkwypeIrinGaRw49NdimJ7%2BHGnyx4UcQ%2BUvFGsYSdeo3zqfx0ae9kYTPp%2B%2FjBWm4tsQ0BAyJJjk72L4SQs3Avp%2Ffq7wW4P1zFT5L1%2FpMzfSDBysaXJ1D8SowZcfwaZP%2BxDsBogeh9Icsns2mTtX0R0ntKGl6kP3KG87rey0%2Fvri7LBkDlRWQlsOslIrPBw3YuwpbfeJBzWwS2ssuMOjbjfEzXv0%2FKeqMPyMxsQGOqUBKY27bhSorfV7H7GClrhOGQ5mimDK2xvfFU3Qfa2oarciXZM3jk8j6Mtk9iyjdDK4qGeYL54aemmSoIAyPb%2Fno6N0p5nOth8HbdRnsbBJgQ%2FTBR5L3DFP2LaQ%2FVSQutHeYly1U4mg%2FiPbSOijR5R90DetccwLSERjQfgBtXh6MXncAy8upf9%2B9F8mw7bm%2BxLPBpf9oXxRfQJiecobewS%2BkP0E0STh&X-Amz-Signature=bef3ce66bb8f4b08ab51b52532f5b66dc029c66b7f2c4035a0bd1ff5533c343a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWDHTPJ2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCZ4VCIDssv40C1Afe7uKxgc%2BYUZ0tqot2nICypA5UPyAIgP3rTMxhVA1F7unn2%2F3g9tW6%2FKWbwcGWKNahiICXj6hwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNYB7b2EA7Gd5QZ3YCrcAxmMMOYeg0TUEEIy1GTZ6c7zYgpb2VSwHi5vJom%2B%2Fh6P6WDoYJT0opbWxDLo2JizZz8Rvi7P%2FqGTwjk5BXRfR%2F4nFajw06IEhhFCkecDzsSCXDrVdu9s%2FHbJPtgiZZaxyohorbFq5DSr9wRvfh%2BYF3PGTYsdF5YDssPOnu%2FoKz8072M1Wy7uFqwt26W%2BHgomJyV73B6hvJ3ay2fzwXQxRqy%2BCLrhrhFw4lX%2B%2BvmagsOxcOdrmlErEfirTxISoUN92gmscTYUZ6Qz0yfQoLW3ahj0ZhYslv1Vb9pHb7YF5n6xNQbCxkWMueAuVDzAnNKtUvetqUOslQt4TZEFucdHhXw41%2B0B2PKQpDJ%2F9AeVIPAJgutrXGYSb0n11cAsVubL06lnG41GUbfeAcQnOV7KWWjsRipWXIkwypeIrinGaRw49NdimJ7%2BHGnyx4UcQ%2BUvFGsYSdeo3zqfx0ae9kYTPp%2B%2FjBWm4tsQ0BAyJJjk72L4SQs3Avp%2Ffq7wW4P1zFT5L1%2FpMzfSDBysaXJ1D8SowZcfwaZP%2BxDsBogeh9Icsns2mTtX0R0ntKGl6kP3KG87rey0%2Fvri7LBkDlRWQlsOslIrPBw3YuwpbfeJBzWwS2ssuMOjbjfEzXv0%2FKeqMPyMxsQGOqUBKY27bhSorfV7H7GClrhOGQ5mimDK2xvfFU3Qfa2oarciXZM3jk8j6Mtk9iyjdDK4qGeYL54aemmSoIAyPb%2Fno6N0p5nOth8HbdRnsbBJgQ%2FTBR5L3DFP2LaQ%2FVSQutHeYly1U4mg%2FiPbSOijR5R90DetccwLSERjQfgBtXh6MXncAy8upf9%2B9F8mw7bm%2BxLPBpf9oXxRfQJiecobewS%2BkP0E0STh&X-Amz-Signature=0745d396fbb586da96d7d10b54a96018bfc3f7c1ef481e0d42cdf3826a9aac91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWDHTPJ2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCZ4VCIDssv40C1Afe7uKxgc%2BYUZ0tqot2nICypA5UPyAIgP3rTMxhVA1F7unn2%2F3g9tW6%2FKWbwcGWKNahiICXj6hwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNYB7b2EA7Gd5QZ3YCrcAxmMMOYeg0TUEEIy1GTZ6c7zYgpb2VSwHi5vJom%2B%2Fh6P6WDoYJT0opbWxDLo2JizZz8Rvi7P%2FqGTwjk5BXRfR%2F4nFajw06IEhhFCkecDzsSCXDrVdu9s%2FHbJPtgiZZaxyohorbFq5DSr9wRvfh%2BYF3PGTYsdF5YDssPOnu%2FoKz8072M1Wy7uFqwt26W%2BHgomJyV73B6hvJ3ay2fzwXQxRqy%2BCLrhrhFw4lX%2B%2BvmagsOxcOdrmlErEfirTxISoUN92gmscTYUZ6Qz0yfQoLW3ahj0ZhYslv1Vb9pHb7YF5n6xNQbCxkWMueAuVDzAnNKtUvetqUOslQt4TZEFucdHhXw41%2B0B2PKQpDJ%2F9AeVIPAJgutrXGYSb0n11cAsVubL06lnG41GUbfeAcQnOV7KWWjsRipWXIkwypeIrinGaRw49NdimJ7%2BHGnyx4UcQ%2BUvFGsYSdeo3zqfx0ae9kYTPp%2B%2FjBWm4tsQ0BAyJJjk72L4SQs3Avp%2Ffq7wW4P1zFT5L1%2FpMzfSDBysaXJ1D8SowZcfwaZP%2BxDsBogeh9Icsns2mTtX0R0ntKGl6kP3KG87rey0%2Fvri7LBkDlRWQlsOslIrPBw3YuwpbfeJBzWwS2ssuMOjbjfEzXv0%2FKeqMPyMxsQGOqUBKY27bhSorfV7H7GClrhOGQ5mimDK2xvfFU3Qfa2oarciXZM3jk8j6Mtk9iyjdDK4qGeYL54aemmSoIAyPb%2Fno6N0p5nOth8HbdRnsbBJgQ%2FTBR5L3DFP2LaQ%2FVSQutHeYly1U4mg%2FiPbSOijR5R90DetccwLSERjQfgBtXh6MXncAy8upf9%2B9F8mw7bm%2BxLPBpf9oXxRfQJiecobewS%2BkP0E0STh&X-Amz-Signature=e0c2c8fc9ecfe260f06bc75bd457b6e40c6cd32702ad15d127f7362d0e2b511f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWDHTPJ2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCZ4VCIDssv40C1Afe7uKxgc%2BYUZ0tqot2nICypA5UPyAIgP3rTMxhVA1F7unn2%2F3g9tW6%2FKWbwcGWKNahiICXj6hwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNYB7b2EA7Gd5QZ3YCrcAxmMMOYeg0TUEEIy1GTZ6c7zYgpb2VSwHi5vJom%2B%2Fh6P6WDoYJT0opbWxDLo2JizZz8Rvi7P%2FqGTwjk5BXRfR%2F4nFajw06IEhhFCkecDzsSCXDrVdu9s%2FHbJPtgiZZaxyohorbFq5DSr9wRvfh%2BYF3PGTYsdF5YDssPOnu%2FoKz8072M1Wy7uFqwt26W%2BHgomJyV73B6hvJ3ay2fzwXQxRqy%2BCLrhrhFw4lX%2B%2BvmagsOxcOdrmlErEfirTxISoUN92gmscTYUZ6Qz0yfQoLW3ahj0ZhYslv1Vb9pHb7YF5n6xNQbCxkWMueAuVDzAnNKtUvetqUOslQt4TZEFucdHhXw41%2B0B2PKQpDJ%2F9AeVIPAJgutrXGYSb0n11cAsVubL06lnG41GUbfeAcQnOV7KWWjsRipWXIkwypeIrinGaRw49NdimJ7%2BHGnyx4UcQ%2BUvFGsYSdeo3zqfx0ae9kYTPp%2B%2FjBWm4tsQ0BAyJJjk72L4SQs3Avp%2Ffq7wW4P1zFT5L1%2FpMzfSDBysaXJ1D8SowZcfwaZP%2BxDsBogeh9Icsns2mTtX0R0ntKGl6kP3KG87rey0%2Fvri7LBkDlRWQlsOslIrPBw3YuwpbfeJBzWwS2ssuMOjbjfEzXv0%2FKeqMPyMxsQGOqUBKY27bhSorfV7H7GClrhOGQ5mimDK2xvfFU3Qfa2oarciXZM3jk8j6Mtk9iyjdDK4qGeYL54aemmSoIAyPb%2Fno6N0p5nOth8HbdRnsbBJgQ%2FTBR5L3DFP2LaQ%2FVSQutHeYly1U4mg%2FiPbSOijR5R90DetccwLSERjQfgBtXh6MXncAy8upf9%2B9F8mw7bm%2BxLPBpf9oXxRfQJiecobewS%2BkP0E0STh&X-Amz-Signature=41f71b5b8f673834dde49d8bdd9b6455a29f1cd0cba9718b15028db3f149fbee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWDHTPJ2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCZ4VCIDssv40C1Afe7uKxgc%2BYUZ0tqot2nICypA5UPyAIgP3rTMxhVA1F7unn2%2F3g9tW6%2FKWbwcGWKNahiICXj6hwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNYB7b2EA7Gd5QZ3YCrcAxmMMOYeg0TUEEIy1GTZ6c7zYgpb2VSwHi5vJom%2B%2Fh6P6WDoYJT0opbWxDLo2JizZz8Rvi7P%2FqGTwjk5BXRfR%2F4nFajw06IEhhFCkecDzsSCXDrVdu9s%2FHbJPtgiZZaxyohorbFq5DSr9wRvfh%2BYF3PGTYsdF5YDssPOnu%2FoKz8072M1Wy7uFqwt26W%2BHgomJyV73B6hvJ3ay2fzwXQxRqy%2BCLrhrhFw4lX%2B%2BvmagsOxcOdrmlErEfirTxISoUN92gmscTYUZ6Qz0yfQoLW3ahj0ZhYslv1Vb9pHb7YF5n6xNQbCxkWMueAuVDzAnNKtUvetqUOslQt4TZEFucdHhXw41%2B0B2PKQpDJ%2F9AeVIPAJgutrXGYSb0n11cAsVubL06lnG41GUbfeAcQnOV7KWWjsRipWXIkwypeIrinGaRw49NdimJ7%2BHGnyx4UcQ%2BUvFGsYSdeo3zqfx0ae9kYTPp%2B%2FjBWm4tsQ0BAyJJjk72L4SQs3Avp%2Ffq7wW4P1zFT5L1%2FpMzfSDBysaXJ1D8SowZcfwaZP%2BxDsBogeh9Icsns2mTtX0R0ntKGl6kP3KG87rey0%2Fvri7LBkDlRWQlsOslIrPBw3YuwpbfeJBzWwS2ssuMOjbjfEzXv0%2FKeqMPyMxsQGOqUBKY27bhSorfV7H7GClrhOGQ5mimDK2xvfFU3Qfa2oarciXZM3jk8j6Mtk9iyjdDK4qGeYL54aemmSoIAyPb%2Fno6N0p5nOth8HbdRnsbBJgQ%2FTBR5L3DFP2LaQ%2FVSQutHeYly1U4mg%2FiPbSOijR5R90DetccwLSERjQfgBtXh6MXncAy8upf9%2B9F8mw7bm%2BxLPBpf9oXxRfQJiecobewS%2BkP0E0STh&X-Amz-Signature=000c8dd87b5c81a85cf4dc74ed4d63ed9f6312ba227c171e6918942f4821cc63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
