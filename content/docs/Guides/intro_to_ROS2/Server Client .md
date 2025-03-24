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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IW4FODG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDePCxx39d3AN7UhpoVdjmdd4TYoAfExgD%2Bw5cSJv2X%2BAIgHOFditruOThfd6m4me20qA7FDyS7rrC%2BIC%2B9H9nV0nsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl0gDtAzPdrIlzT6yrcA8Q2RiXIZ3CKRBSc3h67%2BjJkI5mcs%2BwoHu5noxjvZpEEFU3FDSyEp1tCW9DTIe%2B2ofK32CmYenqHD1XoRj6yxWd7WXKsfrbCwYsNEZNthWMld1mGPXN5HwIOp6BlSn3JUqGuKDoQTaj6Z04jHS%2FdlUTTnIfh4Qk2t7Dxasdv%2BnJfeSsPCB2R6BN3mwInEmeUiaFH%2F4fecp34LO1cB5miLsECKEOHdgBCD6atx296PkJ0XnCf8bDnApdKAYf%2BZ9JyTnbO4ctJvR04QZX9vhMTDq9ZF%2FSEYtMkXamNQpkREY6t6kO6BngQo2cplZ%2BFQUR9G0sA1cKcuYl2c1SM%2FpvBaseTfamrTmWqGx%2FpMXVIehFfUsS5ayWgQklbTpOnm61gvCpKtBRwEldnV3qsFjWUhJCiF35zlPx04wbzFv%2BTaR%2Fu%2BJ6X1TTMr9B332qp3sJTME5ce%2FEil%2BxeujvlTuN8dmQO15Ypz0qPucagpBWm42vrwnsaFroehO9sbsiJ%2F62TfoSTO9cGljuAvc9uiLxs%2F%2B3o%2BEgsKu0ilGb99HZDwRAii25PN2rMsnXD4phQmgQuLXfoYe15ESFqftqRRoFPJtfnPVWZ0Tx%2BqomHRNXptygkCO5LC93K%2B4SYDAaiMMuxgr8GOqUBwRzxQJjulzRZgIoaKwih%2FqS2e1LI4sUBz2WBcC0Gy3QqINo2%2B9Faki0s%2BZ40nDNhWNWLXIafjwVIGmuji8hgQRmUGbUZdJY5DjkvIxjJ9EZN4FWtR1PMII%2BPKBLkAF1D2y8EUSq%2BXbQ2Q1ge6cWkrTEiUFDozuESWEnSUAgWWGJtZLCututRKoDh%2FKICS59fkbD5f5pKgI0vAEo16FRhjRY7n2%2Fx&X-Amz-Signature=43920d341a01a4b21e2999974bf72a74e67b437e81bb7e23bfb3cca8e8c21ee7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IW4FODG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDePCxx39d3AN7UhpoVdjmdd4TYoAfExgD%2Bw5cSJv2X%2BAIgHOFditruOThfd6m4me20qA7FDyS7rrC%2BIC%2B9H9nV0nsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl0gDtAzPdrIlzT6yrcA8Q2RiXIZ3CKRBSc3h67%2BjJkI5mcs%2BwoHu5noxjvZpEEFU3FDSyEp1tCW9DTIe%2B2ofK32CmYenqHD1XoRj6yxWd7WXKsfrbCwYsNEZNthWMld1mGPXN5HwIOp6BlSn3JUqGuKDoQTaj6Z04jHS%2FdlUTTnIfh4Qk2t7Dxasdv%2BnJfeSsPCB2R6BN3mwInEmeUiaFH%2F4fecp34LO1cB5miLsECKEOHdgBCD6atx296PkJ0XnCf8bDnApdKAYf%2BZ9JyTnbO4ctJvR04QZX9vhMTDq9ZF%2FSEYtMkXamNQpkREY6t6kO6BngQo2cplZ%2BFQUR9G0sA1cKcuYl2c1SM%2FpvBaseTfamrTmWqGx%2FpMXVIehFfUsS5ayWgQklbTpOnm61gvCpKtBRwEldnV3qsFjWUhJCiF35zlPx04wbzFv%2BTaR%2Fu%2BJ6X1TTMr9B332qp3sJTME5ce%2FEil%2BxeujvlTuN8dmQO15Ypz0qPucagpBWm42vrwnsaFroehO9sbsiJ%2F62TfoSTO9cGljuAvc9uiLxs%2F%2B3o%2BEgsKu0ilGb99HZDwRAii25PN2rMsnXD4phQmgQuLXfoYe15ESFqftqRRoFPJtfnPVWZ0Tx%2BqomHRNXptygkCO5LC93K%2B4SYDAaiMMuxgr8GOqUBwRzxQJjulzRZgIoaKwih%2FqS2e1LI4sUBz2WBcC0Gy3QqINo2%2B9Faki0s%2BZ40nDNhWNWLXIafjwVIGmuji8hgQRmUGbUZdJY5DjkvIxjJ9EZN4FWtR1PMII%2BPKBLkAF1D2y8EUSq%2BXbQ2Q1ge6cWkrTEiUFDozuESWEnSUAgWWGJtZLCututRKoDh%2FKICS59fkbD5f5pKgI0vAEo16FRhjRY7n2%2Fx&X-Amz-Signature=4b5cfbb4fe725610d7f21faebf17d079a1cf650399e423e53e8010653b4f82e8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IW4FODG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDePCxx39d3AN7UhpoVdjmdd4TYoAfExgD%2Bw5cSJv2X%2BAIgHOFditruOThfd6m4me20qA7FDyS7rrC%2BIC%2B9H9nV0nsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl0gDtAzPdrIlzT6yrcA8Q2RiXIZ3CKRBSc3h67%2BjJkI5mcs%2BwoHu5noxjvZpEEFU3FDSyEp1tCW9DTIe%2B2ofK32CmYenqHD1XoRj6yxWd7WXKsfrbCwYsNEZNthWMld1mGPXN5HwIOp6BlSn3JUqGuKDoQTaj6Z04jHS%2FdlUTTnIfh4Qk2t7Dxasdv%2BnJfeSsPCB2R6BN3mwInEmeUiaFH%2F4fecp34LO1cB5miLsECKEOHdgBCD6atx296PkJ0XnCf8bDnApdKAYf%2BZ9JyTnbO4ctJvR04QZX9vhMTDq9ZF%2FSEYtMkXamNQpkREY6t6kO6BngQo2cplZ%2BFQUR9G0sA1cKcuYl2c1SM%2FpvBaseTfamrTmWqGx%2FpMXVIehFfUsS5ayWgQklbTpOnm61gvCpKtBRwEldnV3qsFjWUhJCiF35zlPx04wbzFv%2BTaR%2Fu%2BJ6X1TTMr9B332qp3sJTME5ce%2FEil%2BxeujvlTuN8dmQO15Ypz0qPucagpBWm42vrwnsaFroehO9sbsiJ%2F62TfoSTO9cGljuAvc9uiLxs%2F%2B3o%2BEgsKu0ilGb99HZDwRAii25PN2rMsnXD4phQmgQuLXfoYe15ESFqftqRRoFPJtfnPVWZ0Tx%2BqomHRNXptygkCO5LC93K%2B4SYDAaiMMuxgr8GOqUBwRzxQJjulzRZgIoaKwih%2FqS2e1LI4sUBz2WBcC0Gy3QqINo2%2B9Faki0s%2BZ40nDNhWNWLXIafjwVIGmuji8hgQRmUGbUZdJY5DjkvIxjJ9EZN4FWtR1PMII%2BPKBLkAF1D2y8EUSq%2BXbQ2Q1ge6cWkrTEiUFDozuESWEnSUAgWWGJtZLCututRKoDh%2FKICS59fkbD5f5pKgI0vAEo16FRhjRY7n2%2Fx&X-Amz-Signature=ee983b2e16f48e7823c913f9bf46d9c6052bff15960746f4d0376bb79c94889b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IW4FODG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDePCxx39d3AN7UhpoVdjmdd4TYoAfExgD%2Bw5cSJv2X%2BAIgHOFditruOThfd6m4me20qA7FDyS7rrC%2BIC%2B9H9nV0nsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl0gDtAzPdrIlzT6yrcA8Q2RiXIZ3CKRBSc3h67%2BjJkI5mcs%2BwoHu5noxjvZpEEFU3FDSyEp1tCW9DTIe%2B2ofK32CmYenqHD1XoRj6yxWd7WXKsfrbCwYsNEZNthWMld1mGPXN5HwIOp6BlSn3JUqGuKDoQTaj6Z04jHS%2FdlUTTnIfh4Qk2t7Dxasdv%2BnJfeSsPCB2R6BN3mwInEmeUiaFH%2F4fecp34LO1cB5miLsECKEOHdgBCD6atx296PkJ0XnCf8bDnApdKAYf%2BZ9JyTnbO4ctJvR04QZX9vhMTDq9ZF%2FSEYtMkXamNQpkREY6t6kO6BngQo2cplZ%2BFQUR9G0sA1cKcuYl2c1SM%2FpvBaseTfamrTmWqGx%2FpMXVIehFfUsS5ayWgQklbTpOnm61gvCpKtBRwEldnV3qsFjWUhJCiF35zlPx04wbzFv%2BTaR%2Fu%2BJ6X1TTMr9B332qp3sJTME5ce%2FEil%2BxeujvlTuN8dmQO15Ypz0qPucagpBWm42vrwnsaFroehO9sbsiJ%2F62TfoSTO9cGljuAvc9uiLxs%2F%2B3o%2BEgsKu0ilGb99HZDwRAii25PN2rMsnXD4phQmgQuLXfoYe15ESFqftqRRoFPJtfnPVWZ0Tx%2BqomHRNXptygkCO5LC93K%2B4SYDAaiMMuxgr8GOqUBwRzxQJjulzRZgIoaKwih%2FqS2e1LI4sUBz2WBcC0Gy3QqINo2%2B9Faki0s%2BZ40nDNhWNWLXIafjwVIGmuji8hgQRmUGbUZdJY5DjkvIxjJ9EZN4FWtR1PMII%2BPKBLkAF1D2y8EUSq%2BXbQ2Q1ge6cWkrTEiUFDozuESWEnSUAgWWGJtZLCututRKoDh%2FKICS59fkbD5f5pKgI0vAEo16FRhjRY7n2%2Fx&X-Amz-Signature=5af807f004d43c9a8c9b10205ada664fca28498fecc3f34bffcc1e265da2363f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IW4FODG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDePCxx39d3AN7UhpoVdjmdd4TYoAfExgD%2Bw5cSJv2X%2BAIgHOFditruOThfd6m4me20qA7FDyS7rrC%2BIC%2B9H9nV0nsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl0gDtAzPdrIlzT6yrcA8Q2RiXIZ3CKRBSc3h67%2BjJkI5mcs%2BwoHu5noxjvZpEEFU3FDSyEp1tCW9DTIe%2B2ofK32CmYenqHD1XoRj6yxWd7WXKsfrbCwYsNEZNthWMld1mGPXN5HwIOp6BlSn3JUqGuKDoQTaj6Z04jHS%2FdlUTTnIfh4Qk2t7Dxasdv%2BnJfeSsPCB2R6BN3mwInEmeUiaFH%2F4fecp34LO1cB5miLsECKEOHdgBCD6atx296PkJ0XnCf8bDnApdKAYf%2BZ9JyTnbO4ctJvR04QZX9vhMTDq9ZF%2FSEYtMkXamNQpkREY6t6kO6BngQo2cplZ%2BFQUR9G0sA1cKcuYl2c1SM%2FpvBaseTfamrTmWqGx%2FpMXVIehFfUsS5ayWgQklbTpOnm61gvCpKtBRwEldnV3qsFjWUhJCiF35zlPx04wbzFv%2BTaR%2Fu%2BJ6X1TTMr9B332qp3sJTME5ce%2FEil%2BxeujvlTuN8dmQO15Ypz0qPucagpBWm42vrwnsaFroehO9sbsiJ%2F62TfoSTO9cGljuAvc9uiLxs%2F%2B3o%2BEgsKu0ilGb99HZDwRAii25PN2rMsnXD4phQmgQuLXfoYe15ESFqftqRRoFPJtfnPVWZ0Tx%2BqomHRNXptygkCO5LC93K%2B4SYDAaiMMuxgr8GOqUBwRzxQJjulzRZgIoaKwih%2FqS2e1LI4sUBz2WBcC0Gy3QqINo2%2B9Faki0s%2BZ40nDNhWNWLXIafjwVIGmuji8hgQRmUGbUZdJY5DjkvIxjJ9EZN4FWtR1PMII%2BPKBLkAF1D2y8EUSq%2BXbQ2Q1ge6cWkrTEiUFDozuESWEnSUAgWWGJtZLCututRKoDh%2FKICS59fkbD5f5pKgI0vAEo16FRhjRY7n2%2Fx&X-Amz-Signature=507dc8178ad49bc8980c26cb87fcc40d7cf2eb049f1ac65badff13a52726b47c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
