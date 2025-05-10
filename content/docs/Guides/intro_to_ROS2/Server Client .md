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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BPV5LBR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCp9Avyshc6jsMGUAReLWXUILHNgN1MrEADwxjN1K2FDgIhAKzGUcyZcjmSmyowXddSCa1f3hYO%2BZgJ4pauxkmNkB3vKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWJYmceFi7JSEpCgUq3AOLbwuPjNOkKc8TuvyM9vtH9Hd9%2FjkevrlShrWoHqHSjo%2BavnU2Yri%2ByUzPlCGY9NIxK4utfqkF8vkO%2B2ABnD%2BZaC9GNUVHhNt%2B%2Bjg8Sojy8BwJDW7tbwqfdK0e0ZAOiPWFWKa1siqJKqWVgPuIrOlgnUpEPmT6WO6wwgaQB750aEOBUHQI7Ap0PwRYyhbn2pVHqx1kDaWYF6rQ1XxP%2F8%2FK%2FIMOU73dtKGa3XvrSKiFRyJgiXnYi3jDp9jNvfcFqQVmjxW2FO%2FEQZxvvP2JiiUMTkAEfSAN6RcCc%2F3EiBPGxSyJEt5AanGuPKGfN%2Fes4V0LWrNfZa9V9vNNOYzLRQYg%2FZH%2Fw7unrYZl9j4MnR1d2yiS5i4E%2BrOPICJOg6Y7Y0OqBeSnZhpDlaMw%2F7%2BCtrZpg6C0j2CUiUPx7%2BoLTrANet9D53%2F71N4apKjKiOszdavP5fjsq%2BDwBBSJFbEeBjKSi69cwCgiCDPPAWpI60BmoJBmMoXnpzdW6f7ZkeMn7x4702RYW%2FKXxu%2FLOc7NTDBWzLvESQQBldIiX9P358ZBLuc1NdUPijqdu1R4bdkMYS0jaDZuoSKqxlxqUuUq8OnfLs%2FXF%2FWtO15nzkpQnA87W8S8oBVENOOL1%2FSCLDC%2Fiv%2FABjqkAXgMiVzI%2BKXaKzJlbrZUwdHyrSiOY7667xd%2Fu6gejHpYAtEVGOyodRB%2FUyEPLVnOum3hWFUWI4bBDA61REoA1FlQ%2BYRnbORp8KfPmWzj%2F5ZsSXiLPncKQjWXzgjX1y8GdwMG2ktSK3oRaAX1hWTlR9jphB17Jj%2Bv2exWKea0%2BAmXLR0rjv%2B7ckQSn1VKEvVHnlnyzqKM6LtSLZ%2BGd88FCmN5Ov78&X-Amz-Signature=37068e4280327d47086f584446aaa22f59cd25f77ec974b84c4880db0c5d73d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BPV5LBR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCp9Avyshc6jsMGUAReLWXUILHNgN1MrEADwxjN1K2FDgIhAKzGUcyZcjmSmyowXddSCa1f3hYO%2BZgJ4pauxkmNkB3vKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWJYmceFi7JSEpCgUq3AOLbwuPjNOkKc8TuvyM9vtH9Hd9%2FjkevrlShrWoHqHSjo%2BavnU2Yri%2ByUzPlCGY9NIxK4utfqkF8vkO%2B2ABnD%2BZaC9GNUVHhNt%2B%2Bjg8Sojy8BwJDW7tbwqfdK0e0ZAOiPWFWKa1siqJKqWVgPuIrOlgnUpEPmT6WO6wwgaQB750aEOBUHQI7Ap0PwRYyhbn2pVHqx1kDaWYF6rQ1XxP%2F8%2FK%2FIMOU73dtKGa3XvrSKiFRyJgiXnYi3jDp9jNvfcFqQVmjxW2FO%2FEQZxvvP2JiiUMTkAEfSAN6RcCc%2F3EiBPGxSyJEt5AanGuPKGfN%2Fes4V0LWrNfZa9V9vNNOYzLRQYg%2FZH%2Fw7unrYZl9j4MnR1d2yiS5i4E%2BrOPICJOg6Y7Y0OqBeSnZhpDlaMw%2F7%2BCtrZpg6C0j2CUiUPx7%2BoLTrANet9D53%2F71N4apKjKiOszdavP5fjsq%2BDwBBSJFbEeBjKSi69cwCgiCDPPAWpI60BmoJBmMoXnpzdW6f7ZkeMn7x4702RYW%2FKXxu%2FLOc7NTDBWzLvESQQBldIiX9P358ZBLuc1NdUPijqdu1R4bdkMYS0jaDZuoSKqxlxqUuUq8OnfLs%2FXF%2FWtO15nzkpQnA87W8S8oBVENOOL1%2FSCLDC%2Fiv%2FABjqkAXgMiVzI%2BKXaKzJlbrZUwdHyrSiOY7667xd%2Fu6gejHpYAtEVGOyodRB%2FUyEPLVnOum3hWFUWI4bBDA61REoA1FlQ%2BYRnbORp8KfPmWzj%2F5ZsSXiLPncKQjWXzgjX1y8GdwMG2ktSK3oRaAX1hWTlR9jphB17Jj%2Bv2exWKea0%2BAmXLR0rjv%2B7ckQSn1VKEvVHnlnyzqKM6LtSLZ%2BGd88FCmN5Ov78&X-Amz-Signature=cda38374fa3f82359456db7fe6f405517691576ef669a635ae7fb17d3faac33c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BPV5LBR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCp9Avyshc6jsMGUAReLWXUILHNgN1MrEADwxjN1K2FDgIhAKzGUcyZcjmSmyowXddSCa1f3hYO%2BZgJ4pauxkmNkB3vKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWJYmceFi7JSEpCgUq3AOLbwuPjNOkKc8TuvyM9vtH9Hd9%2FjkevrlShrWoHqHSjo%2BavnU2Yri%2ByUzPlCGY9NIxK4utfqkF8vkO%2B2ABnD%2BZaC9GNUVHhNt%2B%2Bjg8Sojy8BwJDW7tbwqfdK0e0ZAOiPWFWKa1siqJKqWVgPuIrOlgnUpEPmT6WO6wwgaQB750aEOBUHQI7Ap0PwRYyhbn2pVHqx1kDaWYF6rQ1XxP%2F8%2FK%2FIMOU73dtKGa3XvrSKiFRyJgiXnYi3jDp9jNvfcFqQVmjxW2FO%2FEQZxvvP2JiiUMTkAEfSAN6RcCc%2F3EiBPGxSyJEt5AanGuPKGfN%2Fes4V0LWrNfZa9V9vNNOYzLRQYg%2FZH%2Fw7unrYZl9j4MnR1d2yiS5i4E%2BrOPICJOg6Y7Y0OqBeSnZhpDlaMw%2F7%2BCtrZpg6C0j2CUiUPx7%2BoLTrANet9D53%2F71N4apKjKiOszdavP5fjsq%2BDwBBSJFbEeBjKSi69cwCgiCDPPAWpI60BmoJBmMoXnpzdW6f7ZkeMn7x4702RYW%2FKXxu%2FLOc7NTDBWzLvESQQBldIiX9P358ZBLuc1NdUPijqdu1R4bdkMYS0jaDZuoSKqxlxqUuUq8OnfLs%2FXF%2FWtO15nzkpQnA87W8S8oBVENOOL1%2FSCLDC%2Fiv%2FABjqkAXgMiVzI%2BKXaKzJlbrZUwdHyrSiOY7667xd%2Fu6gejHpYAtEVGOyodRB%2FUyEPLVnOum3hWFUWI4bBDA61REoA1FlQ%2BYRnbORp8KfPmWzj%2F5ZsSXiLPncKQjWXzgjX1y8GdwMG2ktSK3oRaAX1hWTlR9jphB17Jj%2Bv2exWKea0%2BAmXLR0rjv%2B7ckQSn1VKEvVHnlnyzqKM6LtSLZ%2BGd88FCmN5Ov78&X-Amz-Signature=6c3b130708f1f94b35c9e6655a6add5c67a97b482c53d83510d44d360f57d42e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BPV5LBR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCp9Avyshc6jsMGUAReLWXUILHNgN1MrEADwxjN1K2FDgIhAKzGUcyZcjmSmyowXddSCa1f3hYO%2BZgJ4pauxkmNkB3vKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWJYmceFi7JSEpCgUq3AOLbwuPjNOkKc8TuvyM9vtH9Hd9%2FjkevrlShrWoHqHSjo%2BavnU2Yri%2ByUzPlCGY9NIxK4utfqkF8vkO%2B2ABnD%2BZaC9GNUVHhNt%2B%2Bjg8Sojy8BwJDW7tbwqfdK0e0ZAOiPWFWKa1siqJKqWVgPuIrOlgnUpEPmT6WO6wwgaQB750aEOBUHQI7Ap0PwRYyhbn2pVHqx1kDaWYF6rQ1XxP%2F8%2FK%2FIMOU73dtKGa3XvrSKiFRyJgiXnYi3jDp9jNvfcFqQVmjxW2FO%2FEQZxvvP2JiiUMTkAEfSAN6RcCc%2F3EiBPGxSyJEt5AanGuPKGfN%2Fes4V0LWrNfZa9V9vNNOYzLRQYg%2FZH%2Fw7unrYZl9j4MnR1d2yiS5i4E%2BrOPICJOg6Y7Y0OqBeSnZhpDlaMw%2F7%2BCtrZpg6C0j2CUiUPx7%2BoLTrANet9D53%2F71N4apKjKiOszdavP5fjsq%2BDwBBSJFbEeBjKSi69cwCgiCDPPAWpI60BmoJBmMoXnpzdW6f7ZkeMn7x4702RYW%2FKXxu%2FLOc7NTDBWzLvESQQBldIiX9P358ZBLuc1NdUPijqdu1R4bdkMYS0jaDZuoSKqxlxqUuUq8OnfLs%2FXF%2FWtO15nzkpQnA87W8S8oBVENOOL1%2FSCLDC%2Fiv%2FABjqkAXgMiVzI%2BKXaKzJlbrZUwdHyrSiOY7667xd%2Fu6gejHpYAtEVGOyodRB%2FUyEPLVnOum3hWFUWI4bBDA61REoA1FlQ%2BYRnbORp8KfPmWzj%2F5ZsSXiLPncKQjWXzgjX1y8GdwMG2ktSK3oRaAX1hWTlR9jphB17Jj%2Bv2exWKea0%2BAmXLR0rjv%2B7ckQSn1VKEvVHnlnyzqKM6LtSLZ%2BGd88FCmN5Ov78&X-Amz-Signature=3522aa1375acb3d157f88ef6e0c9c01b95e170e1515e200602937925cd2e263c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BPV5LBR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCp9Avyshc6jsMGUAReLWXUILHNgN1MrEADwxjN1K2FDgIhAKzGUcyZcjmSmyowXddSCa1f3hYO%2BZgJ4pauxkmNkB3vKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWJYmceFi7JSEpCgUq3AOLbwuPjNOkKc8TuvyM9vtH9Hd9%2FjkevrlShrWoHqHSjo%2BavnU2Yri%2ByUzPlCGY9NIxK4utfqkF8vkO%2B2ABnD%2BZaC9GNUVHhNt%2B%2Bjg8Sojy8BwJDW7tbwqfdK0e0ZAOiPWFWKa1siqJKqWVgPuIrOlgnUpEPmT6WO6wwgaQB750aEOBUHQI7Ap0PwRYyhbn2pVHqx1kDaWYF6rQ1XxP%2F8%2FK%2FIMOU73dtKGa3XvrSKiFRyJgiXnYi3jDp9jNvfcFqQVmjxW2FO%2FEQZxvvP2JiiUMTkAEfSAN6RcCc%2F3EiBPGxSyJEt5AanGuPKGfN%2Fes4V0LWrNfZa9V9vNNOYzLRQYg%2FZH%2Fw7unrYZl9j4MnR1d2yiS5i4E%2BrOPICJOg6Y7Y0OqBeSnZhpDlaMw%2F7%2BCtrZpg6C0j2CUiUPx7%2BoLTrANet9D53%2F71N4apKjKiOszdavP5fjsq%2BDwBBSJFbEeBjKSi69cwCgiCDPPAWpI60BmoJBmMoXnpzdW6f7ZkeMn7x4702RYW%2FKXxu%2FLOc7NTDBWzLvESQQBldIiX9P358ZBLuc1NdUPijqdu1R4bdkMYS0jaDZuoSKqxlxqUuUq8OnfLs%2FXF%2FWtO15nzkpQnA87W8S8oBVENOOL1%2FSCLDC%2Fiv%2FABjqkAXgMiVzI%2BKXaKzJlbrZUwdHyrSiOY7667xd%2Fu6gejHpYAtEVGOyodRB%2FUyEPLVnOum3hWFUWI4bBDA61REoA1FlQ%2BYRnbORp8KfPmWzj%2F5ZsSXiLPncKQjWXzgjX1y8GdwMG2ktSK3oRaAX1hWTlR9jphB17Jj%2Bv2exWKea0%2BAmXLR0rjv%2B7ckQSn1VKEvVHnlnyzqKM6LtSLZ%2BGd88FCmN5Ov78&X-Amz-Signature=1edcc835ef392164deff3eab729ef021288ee57b4402283771c115d589ee7b85&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
