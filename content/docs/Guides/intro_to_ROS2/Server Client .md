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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPBTZSX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIE5QRW5EJKyWD7twV%2BcrAfLB8v87gCUQWgmYaX19e879AiEAqqbUx0wKmAYXFKoSWTi%2B1Z%2FnTmgyncKsIMrkYZHwLboq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDL3ClW%2FV6b6N6RGx%2FCrcAx3UwtJQCpSwsJg%2FrkGxcA5pf1iVE5ziNl2QwSehs9xI1wS379Yy1PUDy3A5fmB%2F31byrRab67sNm6AlfMOiSoVSaozl47MiNu4P0urYAvjoN5x7MIZ7Hur7AsGjb%2FrvX3uNxIugljTatHDfT2ttlzPR5cuzVIdB5WK9O6Ii7sRMQ%2FDYK%2FbWD0PFzJyaClVI%2BQN69qfNcYewugOYEZYeVJ3tmDleQOKSPQviwWlS5mqwlT0pPA8BpppQG2yM5pewdKW7peG7jWfv5fkWG2Qr8Tp9p9a2x9Qm%2FyFo8%2FhVJSQF5bAXLtnylAabHZFv7hljv0w6Yh80v0hy04qvaB1%2BxT1GvMMbp5BUyC5unhqoHi4N3jWpdg180TPhv3ADuBLwwEKyTUthdpf74PHSmP6f9AE5ZTB9l6iCGwo55DWkr9HHpHZvCz3C3B2UFiSaQtY3FwekvYFjWsjmZKLERfjz%2B2UlXqrRMqRfM53RteAb%2Bdmx29GIDOzu3%2FSBBpHW0wbZzEYOKnU89C1luxGkFV%2FnMF35TvrsLW4Babo66dOvGSxgmz%2BhxYiHjgSkA3bT0fKUdRFknyx3opYpCN7SqvTS1baiT9aRcgqeClQ0w4ppSgiBr6OOgx8Qc0aLMbJXMJyg%2FMEGOqUBatbgirCCEfpAtl8YObVr7il1cYO7qnxX6YdpzyssnfdJo%2Fu4NRwvxI333TS87I%2B9T18Q%2BMFp5aafQC0UEJzZN5KdNq5gZkhr2PR23INkdq0DgKyMSscb9BN7cx%2FoiYKtOwvFMj66gby1zoYIduyE4UG27fRYMdmcPdfqLETxXw9JUWiLOn0Rvt6ijoYHEebTUjCoKZpV2451kMeMTOQpsqmOj2xp&X-Amz-Signature=89c6b89ca20e2508ff01a464c44b82dc48f2759355b6f2befac83fd5648929a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPBTZSX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIE5QRW5EJKyWD7twV%2BcrAfLB8v87gCUQWgmYaX19e879AiEAqqbUx0wKmAYXFKoSWTi%2B1Z%2FnTmgyncKsIMrkYZHwLboq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDL3ClW%2FV6b6N6RGx%2FCrcAx3UwtJQCpSwsJg%2FrkGxcA5pf1iVE5ziNl2QwSehs9xI1wS379Yy1PUDy3A5fmB%2F31byrRab67sNm6AlfMOiSoVSaozl47MiNu4P0urYAvjoN5x7MIZ7Hur7AsGjb%2FrvX3uNxIugljTatHDfT2ttlzPR5cuzVIdB5WK9O6Ii7sRMQ%2FDYK%2FbWD0PFzJyaClVI%2BQN69qfNcYewugOYEZYeVJ3tmDleQOKSPQviwWlS5mqwlT0pPA8BpppQG2yM5pewdKW7peG7jWfv5fkWG2Qr8Tp9p9a2x9Qm%2FyFo8%2FhVJSQF5bAXLtnylAabHZFv7hljv0w6Yh80v0hy04qvaB1%2BxT1GvMMbp5BUyC5unhqoHi4N3jWpdg180TPhv3ADuBLwwEKyTUthdpf74PHSmP6f9AE5ZTB9l6iCGwo55DWkr9HHpHZvCz3C3B2UFiSaQtY3FwekvYFjWsjmZKLERfjz%2B2UlXqrRMqRfM53RteAb%2Bdmx29GIDOzu3%2FSBBpHW0wbZzEYOKnU89C1luxGkFV%2FnMF35TvrsLW4Babo66dOvGSxgmz%2BhxYiHjgSkA3bT0fKUdRFknyx3opYpCN7SqvTS1baiT9aRcgqeClQ0w4ppSgiBr6OOgx8Qc0aLMbJXMJyg%2FMEGOqUBatbgirCCEfpAtl8YObVr7il1cYO7qnxX6YdpzyssnfdJo%2Fu4NRwvxI333TS87I%2B9T18Q%2BMFp5aafQC0UEJzZN5KdNq5gZkhr2PR23INkdq0DgKyMSscb9BN7cx%2FoiYKtOwvFMj66gby1zoYIduyE4UG27fRYMdmcPdfqLETxXw9JUWiLOn0Rvt6ijoYHEebTUjCoKZpV2451kMeMTOQpsqmOj2xp&X-Amz-Signature=c1ef0f969c6aa8473dac3244028de083da3b9241a64bdaceec96531d04015158&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPBTZSX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIE5QRW5EJKyWD7twV%2BcrAfLB8v87gCUQWgmYaX19e879AiEAqqbUx0wKmAYXFKoSWTi%2B1Z%2FnTmgyncKsIMrkYZHwLboq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDL3ClW%2FV6b6N6RGx%2FCrcAx3UwtJQCpSwsJg%2FrkGxcA5pf1iVE5ziNl2QwSehs9xI1wS379Yy1PUDy3A5fmB%2F31byrRab67sNm6AlfMOiSoVSaozl47MiNu4P0urYAvjoN5x7MIZ7Hur7AsGjb%2FrvX3uNxIugljTatHDfT2ttlzPR5cuzVIdB5WK9O6Ii7sRMQ%2FDYK%2FbWD0PFzJyaClVI%2BQN69qfNcYewugOYEZYeVJ3tmDleQOKSPQviwWlS5mqwlT0pPA8BpppQG2yM5pewdKW7peG7jWfv5fkWG2Qr8Tp9p9a2x9Qm%2FyFo8%2FhVJSQF5bAXLtnylAabHZFv7hljv0w6Yh80v0hy04qvaB1%2BxT1GvMMbp5BUyC5unhqoHi4N3jWpdg180TPhv3ADuBLwwEKyTUthdpf74PHSmP6f9AE5ZTB9l6iCGwo55DWkr9HHpHZvCz3C3B2UFiSaQtY3FwekvYFjWsjmZKLERfjz%2B2UlXqrRMqRfM53RteAb%2Bdmx29GIDOzu3%2FSBBpHW0wbZzEYOKnU89C1luxGkFV%2FnMF35TvrsLW4Babo66dOvGSxgmz%2BhxYiHjgSkA3bT0fKUdRFknyx3opYpCN7SqvTS1baiT9aRcgqeClQ0w4ppSgiBr6OOgx8Qc0aLMbJXMJyg%2FMEGOqUBatbgirCCEfpAtl8YObVr7il1cYO7qnxX6YdpzyssnfdJo%2Fu4NRwvxI333TS87I%2B9T18Q%2BMFp5aafQC0UEJzZN5KdNq5gZkhr2PR23INkdq0DgKyMSscb9BN7cx%2FoiYKtOwvFMj66gby1zoYIduyE4UG27fRYMdmcPdfqLETxXw9JUWiLOn0Rvt6ijoYHEebTUjCoKZpV2451kMeMTOQpsqmOj2xp&X-Amz-Signature=364dd8c669e094c7a228d4c83454ab20d8350836e32161d1c511d43ccbdcf207&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPBTZSX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIE5QRW5EJKyWD7twV%2BcrAfLB8v87gCUQWgmYaX19e879AiEAqqbUx0wKmAYXFKoSWTi%2B1Z%2FnTmgyncKsIMrkYZHwLboq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDL3ClW%2FV6b6N6RGx%2FCrcAx3UwtJQCpSwsJg%2FrkGxcA5pf1iVE5ziNl2QwSehs9xI1wS379Yy1PUDy3A5fmB%2F31byrRab67sNm6AlfMOiSoVSaozl47MiNu4P0urYAvjoN5x7MIZ7Hur7AsGjb%2FrvX3uNxIugljTatHDfT2ttlzPR5cuzVIdB5WK9O6Ii7sRMQ%2FDYK%2FbWD0PFzJyaClVI%2BQN69qfNcYewugOYEZYeVJ3tmDleQOKSPQviwWlS5mqwlT0pPA8BpppQG2yM5pewdKW7peG7jWfv5fkWG2Qr8Tp9p9a2x9Qm%2FyFo8%2FhVJSQF5bAXLtnylAabHZFv7hljv0w6Yh80v0hy04qvaB1%2BxT1GvMMbp5BUyC5unhqoHi4N3jWpdg180TPhv3ADuBLwwEKyTUthdpf74PHSmP6f9AE5ZTB9l6iCGwo55DWkr9HHpHZvCz3C3B2UFiSaQtY3FwekvYFjWsjmZKLERfjz%2B2UlXqrRMqRfM53RteAb%2Bdmx29GIDOzu3%2FSBBpHW0wbZzEYOKnU89C1luxGkFV%2FnMF35TvrsLW4Babo66dOvGSxgmz%2BhxYiHjgSkA3bT0fKUdRFknyx3opYpCN7SqvTS1baiT9aRcgqeClQ0w4ppSgiBr6OOgx8Qc0aLMbJXMJyg%2FMEGOqUBatbgirCCEfpAtl8YObVr7il1cYO7qnxX6YdpzyssnfdJo%2Fu4NRwvxI333TS87I%2B9T18Q%2BMFp5aafQC0UEJzZN5KdNq5gZkhr2PR23INkdq0DgKyMSscb9BN7cx%2FoiYKtOwvFMj66gby1zoYIduyE4UG27fRYMdmcPdfqLETxXw9JUWiLOn0Rvt6ijoYHEebTUjCoKZpV2451kMeMTOQpsqmOj2xp&X-Amz-Signature=c92af1b32586b2882d7d0aed24e0d731aff7cf662252c6b880f58e3f228efac5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPBTZSX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIE5QRW5EJKyWD7twV%2BcrAfLB8v87gCUQWgmYaX19e879AiEAqqbUx0wKmAYXFKoSWTi%2B1Z%2FnTmgyncKsIMrkYZHwLboq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDL3ClW%2FV6b6N6RGx%2FCrcAx3UwtJQCpSwsJg%2FrkGxcA5pf1iVE5ziNl2QwSehs9xI1wS379Yy1PUDy3A5fmB%2F31byrRab67sNm6AlfMOiSoVSaozl47MiNu4P0urYAvjoN5x7MIZ7Hur7AsGjb%2FrvX3uNxIugljTatHDfT2ttlzPR5cuzVIdB5WK9O6Ii7sRMQ%2FDYK%2FbWD0PFzJyaClVI%2BQN69qfNcYewugOYEZYeVJ3tmDleQOKSPQviwWlS5mqwlT0pPA8BpppQG2yM5pewdKW7peG7jWfv5fkWG2Qr8Tp9p9a2x9Qm%2FyFo8%2FhVJSQF5bAXLtnylAabHZFv7hljv0w6Yh80v0hy04qvaB1%2BxT1GvMMbp5BUyC5unhqoHi4N3jWpdg180TPhv3ADuBLwwEKyTUthdpf74PHSmP6f9AE5ZTB9l6iCGwo55DWkr9HHpHZvCz3C3B2UFiSaQtY3FwekvYFjWsjmZKLERfjz%2B2UlXqrRMqRfM53RteAb%2Bdmx29GIDOzu3%2FSBBpHW0wbZzEYOKnU89C1luxGkFV%2FnMF35TvrsLW4Babo66dOvGSxgmz%2BhxYiHjgSkA3bT0fKUdRFknyx3opYpCN7SqvTS1baiT9aRcgqeClQ0w4ppSgiBr6OOgx8Qc0aLMbJXMJyg%2FMEGOqUBatbgirCCEfpAtl8YObVr7il1cYO7qnxX6YdpzyssnfdJo%2Fu4NRwvxI333TS87I%2B9T18Q%2BMFp5aafQC0UEJzZN5KdNq5gZkhr2PR23INkdq0DgKyMSscb9BN7cx%2FoiYKtOwvFMj66gby1zoYIduyE4UG27fRYMdmcPdfqLETxXw9JUWiLOn0Rvt6ijoYHEebTUjCoKZpV2451kMeMTOQpsqmOj2xp&X-Amz-Signature=cd331f33e3e4b106024ecd65c43e1a08d097e9f2cc310c1ccaf61faa68d5280e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
