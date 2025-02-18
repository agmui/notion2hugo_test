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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QMNBXUX%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDGnxa7SJzY5pIxNbgiKskkzvVJ2CZlgqxI29KuheYYDAIhAMIyfEEwsIQvOzRq5g88JrBD9zOp59RSSCqpz1rBiP%2FAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxn0EZ3vznP4mx6W7cq3AN82qSelNaBq4nmXiuYw7Xx4InAutm96uRqvi0H8akege9gXPjpI2sBwxutDcIWzlc5NAJpzaEJqE5PdXDPzcU6jAlRYElFh1hNnRKR3MChojIF7ntQqeVaQ%2FDRx6Hz%2FohwB6Bj6UiEKRnCX91VKe%2BErP4%2BVvI6mHM%2FjJ5g0ZXPIgK0%2BIxJyiNhWRLPA0%2BYcjmjZOV4%2FyGoOKlVQ5%2Fxf4CHU29GjO2%2B6wN7IoVfhYmBsI9kTaRyqyG%2FGFoYgd93u1LWrX%2BK4PEijXRICf67GT7HaT3yISrJGyhhn659Tv3QaG2IfmUgz4xKhjdKrLvKlHrbsUL%2FXsU%2F5dYb9TGE%2BmaBp3GasnpdrTps5AGdTriBkfLKJSYTKh3M2h0vv%2B54kEmxxkBLrDe61Z3BIbhXsah0mAAvJXhqUbkjgydoPBlh3qUYjc0j0nMl%2FF8QCHZn4ZNJnQvhe4BYKJkOsOyKfLVdumhD3zrZfletpNP2yCykJpcCxiAQBSdc0zs7WTVuYwNknfJUwia9d4YHTH4BfbpurPUxrbt1V6Bx3rmwczaAZdysAMliwGl0rMB%2Bt6wNq3a7UVlUCjtYfBsPPVpA7VVasM9MHAC0EGTygNHX4CmlBuaqRwhAHM0Z0LpUpTD2stK9BjqkAWqdVTVfD8r875Vn%2FbAPlL%2BKtgc7R6p6wA31Qg5Y7WaIxdevpevIMpDfD1BXusVRKF0plFmxoAapDlcI1KDTk5Qa6ua4SzhfGz%2BVPqPG2kGod74bb6dk9eSA%2FB8GB3saeHF0a0%2Bmwc3CmiUbzlU%2FesCAjQZgR6ImaYG%2Bm4VFZkrLS0RXZeAwfOtnuH34gpZrwTx9SsWbeFYPdjwqRhoo8DOEhLlM&X-Amz-Signature=bf77ae9a4b6bb0e85a48fbf3d87dbe8318f5f05406b995e2cf3556a314928fda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QMNBXUX%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDGnxa7SJzY5pIxNbgiKskkzvVJ2CZlgqxI29KuheYYDAIhAMIyfEEwsIQvOzRq5g88JrBD9zOp59RSSCqpz1rBiP%2FAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxn0EZ3vznP4mx6W7cq3AN82qSelNaBq4nmXiuYw7Xx4InAutm96uRqvi0H8akege9gXPjpI2sBwxutDcIWzlc5NAJpzaEJqE5PdXDPzcU6jAlRYElFh1hNnRKR3MChojIF7ntQqeVaQ%2FDRx6Hz%2FohwB6Bj6UiEKRnCX91VKe%2BErP4%2BVvI6mHM%2FjJ5g0ZXPIgK0%2BIxJyiNhWRLPA0%2BYcjmjZOV4%2FyGoOKlVQ5%2Fxf4CHU29GjO2%2B6wN7IoVfhYmBsI9kTaRyqyG%2FGFoYgd93u1LWrX%2BK4PEijXRICf67GT7HaT3yISrJGyhhn659Tv3QaG2IfmUgz4xKhjdKrLvKlHrbsUL%2FXsU%2F5dYb9TGE%2BmaBp3GasnpdrTps5AGdTriBkfLKJSYTKh3M2h0vv%2B54kEmxxkBLrDe61Z3BIbhXsah0mAAvJXhqUbkjgydoPBlh3qUYjc0j0nMl%2FF8QCHZn4ZNJnQvhe4BYKJkOsOyKfLVdumhD3zrZfletpNP2yCykJpcCxiAQBSdc0zs7WTVuYwNknfJUwia9d4YHTH4BfbpurPUxrbt1V6Bx3rmwczaAZdysAMliwGl0rMB%2Bt6wNq3a7UVlUCjtYfBsPPVpA7VVasM9MHAC0EGTygNHX4CmlBuaqRwhAHM0Z0LpUpTD2stK9BjqkAWqdVTVfD8r875Vn%2FbAPlL%2BKtgc7R6p6wA31Qg5Y7WaIxdevpevIMpDfD1BXusVRKF0plFmxoAapDlcI1KDTk5Qa6ua4SzhfGz%2BVPqPG2kGod74bb6dk9eSA%2FB8GB3saeHF0a0%2Bmwc3CmiUbzlU%2FesCAjQZgR6ImaYG%2Bm4VFZkrLS0RXZeAwfOtnuH34gpZrwTx9SsWbeFYPdjwqRhoo8DOEhLlM&X-Amz-Signature=1a505c56fa1ea856b33cd3e29c7f338226debb9c8477cfe86cdc53098d0d48f4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QMNBXUX%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDGnxa7SJzY5pIxNbgiKskkzvVJ2CZlgqxI29KuheYYDAIhAMIyfEEwsIQvOzRq5g88JrBD9zOp59RSSCqpz1rBiP%2FAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxn0EZ3vznP4mx6W7cq3AN82qSelNaBq4nmXiuYw7Xx4InAutm96uRqvi0H8akege9gXPjpI2sBwxutDcIWzlc5NAJpzaEJqE5PdXDPzcU6jAlRYElFh1hNnRKR3MChojIF7ntQqeVaQ%2FDRx6Hz%2FohwB6Bj6UiEKRnCX91VKe%2BErP4%2BVvI6mHM%2FjJ5g0ZXPIgK0%2BIxJyiNhWRLPA0%2BYcjmjZOV4%2FyGoOKlVQ5%2Fxf4CHU29GjO2%2B6wN7IoVfhYmBsI9kTaRyqyG%2FGFoYgd93u1LWrX%2BK4PEijXRICf67GT7HaT3yISrJGyhhn659Tv3QaG2IfmUgz4xKhjdKrLvKlHrbsUL%2FXsU%2F5dYb9TGE%2BmaBp3GasnpdrTps5AGdTriBkfLKJSYTKh3M2h0vv%2B54kEmxxkBLrDe61Z3BIbhXsah0mAAvJXhqUbkjgydoPBlh3qUYjc0j0nMl%2FF8QCHZn4ZNJnQvhe4BYKJkOsOyKfLVdumhD3zrZfletpNP2yCykJpcCxiAQBSdc0zs7WTVuYwNknfJUwia9d4YHTH4BfbpurPUxrbt1V6Bx3rmwczaAZdysAMliwGl0rMB%2Bt6wNq3a7UVlUCjtYfBsPPVpA7VVasM9MHAC0EGTygNHX4CmlBuaqRwhAHM0Z0LpUpTD2stK9BjqkAWqdVTVfD8r875Vn%2FbAPlL%2BKtgc7R6p6wA31Qg5Y7WaIxdevpevIMpDfD1BXusVRKF0plFmxoAapDlcI1KDTk5Qa6ua4SzhfGz%2BVPqPG2kGod74bb6dk9eSA%2FB8GB3saeHF0a0%2Bmwc3CmiUbzlU%2FesCAjQZgR6ImaYG%2Bm4VFZkrLS0RXZeAwfOtnuH34gpZrwTx9SsWbeFYPdjwqRhoo8DOEhLlM&X-Amz-Signature=46740542cdb00802b040725517c32d10bd234bcfda3ab9fcf7af315bfca9dab8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QMNBXUX%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDGnxa7SJzY5pIxNbgiKskkzvVJ2CZlgqxI29KuheYYDAIhAMIyfEEwsIQvOzRq5g88JrBD9zOp59RSSCqpz1rBiP%2FAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxn0EZ3vznP4mx6W7cq3AN82qSelNaBq4nmXiuYw7Xx4InAutm96uRqvi0H8akege9gXPjpI2sBwxutDcIWzlc5NAJpzaEJqE5PdXDPzcU6jAlRYElFh1hNnRKR3MChojIF7ntQqeVaQ%2FDRx6Hz%2FohwB6Bj6UiEKRnCX91VKe%2BErP4%2BVvI6mHM%2FjJ5g0ZXPIgK0%2BIxJyiNhWRLPA0%2BYcjmjZOV4%2FyGoOKlVQ5%2Fxf4CHU29GjO2%2B6wN7IoVfhYmBsI9kTaRyqyG%2FGFoYgd93u1LWrX%2BK4PEijXRICf67GT7HaT3yISrJGyhhn659Tv3QaG2IfmUgz4xKhjdKrLvKlHrbsUL%2FXsU%2F5dYb9TGE%2BmaBp3GasnpdrTps5AGdTriBkfLKJSYTKh3M2h0vv%2B54kEmxxkBLrDe61Z3BIbhXsah0mAAvJXhqUbkjgydoPBlh3qUYjc0j0nMl%2FF8QCHZn4ZNJnQvhe4BYKJkOsOyKfLVdumhD3zrZfletpNP2yCykJpcCxiAQBSdc0zs7WTVuYwNknfJUwia9d4YHTH4BfbpurPUxrbt1V6Bx3rmwczaAZdysAMliwGl0rMB%2Bt6wNq3a7UVlUCjtYfBsPPVpA7VVasM9MHAC0EGTygNHX4CmlBuaqRwhAHM0Z0LpUpTD2stK9BjqkAWqdVTVfD8r875Vn%2FbAPlL%2BKtgc7R6p6wA31Qg5Y7WaIxdevpevIMpDfD1BXusVRKF0plFmxoAapDlcI1KDTk5Qa6ua4SzhfGz%2BVPqPG2kGod74bb6dk9eSA%2FB8GB3saeHF0a0%2Bmwc3CmiUbzlU%2FesCAjQZgR6ImaYG%2Bm4VFZkrLS0RXZeAwfOtnuH34gpZrwTx9SsWbeFYPdjwqRhoo8DOEhLlM&X-Amz-Signature=21e4b87a672060b2cf7dff325ed8f00cc74f17339cdc72a5c99def7e413bcb07&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QMNBXUX%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDGnxa7SJzY5pIxNbgiKskkzvVJ2CZlgqxI29KuheYYDAIhAMIyfEEwsIQvOzRq5g88JrBD9zOp59RSSCqpz1rBiP%2FAKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxn0EZ3vznP4mx6W7cq3AN82qSelNaBq4nmXiuYw7Xx4InAutm96uRqvi0H8akege9gXPjpI2sBwxutDcIWzlc5NAJpzaEJqE5PdXDPzcU6jAlRYElFh1hNnRKR3MChojIF7ntQqeVaQ%2FDRx6Hz%2FohwB6Bj6UiEKRnCX91VKe%2BErP4%2BVvI6mHM%2FjJ5g0ZXPIgK0%2BIxJyiNhWRLPA0%2BYcjmjZOV4%2FyGoOKlVQ5%2Fxf4CHU29GjO2%2B6wN7IoVfhYmBsI9kTaRyqyG%2FGFoYgd93u1LWrX%2BK4PEijXRICf67GT7HaT3yISrJGyhhn659Tv3QaG2IfmUgz4xKhjdKrLvKlHrbsUL%2FXsU%2F5dYb9TGE%2BmaBp3GasnpdrTps5AGdTriBkfLKJSYTKh3M2h0vv%2B54kEmxxkBLrDe61Z3BIbhXsah0mAAvJXhqUbkjgydoPBlh3qUYjc0j0nMl%2FF8QCHZn4ZNJnQvhe4BYKJkOsOyKfLVdumhD3zrZfletpNP2yCykJpcCxiAQBSdc0zs7WTVuYwNknfJUwia9d4YHTH4BfbpurPUxrbt1V6Bx3rmwczaAZdysAMliwGl0rMB%2Bt6wNq3a7UVlUCjtYfBsPPVpA7VVasM9MHAC0EGTygNHX4CmlBuaqRwhAHM0Z0LpUpTD2stK9BjqkAWqdVTVfD8r875Vn%2FbAPlL%2BKtgc7R6p6wA31Qg5Y7WaIxdevpevIMpDfD1BXusVRKF0plFmxoAapDlcI1KDTk5Qa6ua4SzhfGz%2BVPqPG2kGod74bb6dk9eSA%2FB8GB3saeHF0a0%2Bmwc3CmiUbzlU%2FesCAjQZgR6ImaYG%2Bm4VFZkrLS0RXZeAwfOtnuH34gpZrwTx9SsWbeFYPdjwqRhoo8DOEhLlM&X-Amz-Signature=a36ba5bef0517fad12c1e35ecd215e11e0ea4a13da0e73d2a1dfa8b6117f2082&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
