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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642ZQDLDX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5Q0nerLi0DiPzx%2FmxZ6qZmPIGNVw%2F0ntaI6LHVpblJAiAMvDijqZ3oBqfPYSA8XGFTGtWd17ANppPsS4q7zMvHeCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMd7ND1AzCocBujbjqKtwDsHa1TOe%2BcJ7yIJqdP7PQ5T6nKVxJ4zyTx0jX%2FG1rVm%2B5nu7sGzcbJ7xzw6uMKVCnuKB9xD0RLwAPUkFtXBpSZKjjojbPxomRVIm61%2B78UIWYxw%2FhEGSFawfi9YsKmktBf4Cd589iZ7rgEpgCYS1Fe504IUoCH0R2fQIfwd3kHmAXEhu6m%2F%2FrV0NUCZdLB1mxwA0SsvfWJ7H010ONOxEWa8SaKcYJ1oZcsjpMERRBV3lRp9GkKuclnt1RsMSsJ9uPIzkt4WTdu8aktCB6bKoc46BtL3jwfjUbauBMKUJQVesRvc%2BJ8frkRF3enohYs3Yc7%2BqAMyI7cRWDoQig1kArL8d%2BeAs6dHllTRY6v0FihC9EM%2F%2Fef7RAiQxaiV%2F%2BQAWInR5nWyL6pz3dC%2FFK75R%2BY9UlczS74%2B9Q3MTXhfBDCNaWqAoraNxfbxJEXWjSCoxvIb4JE%2F3orz7Z%2FCGB2lMyA9FfwVbz8f81ReVFn8jj1X2Y54iSlQ1MWMJtYgrZIPf7Fi7S41Ig7b%2FErryHsqUNj9%2Fl5iB%2Bz%2BdBhASPHk8r1ab4Ej%2ByksIqt2il%2Fq8dw4giH0ksBtEalhj4f7DTMKY%2BOIoFoEYixWAEI10gwfFzCNVpcZNty1OFk1mJQUQw5f2ZwQY6pgFc2GNvpfd46NX9a2QHdXjoRF3rJduMABG1FToRGvbTRZl%2BRU5ypKE9VJG4MNq21ZjqIIOAaX2u4PQN6IUdGd%2FDgKqYnSTd3%2FQMRz9t4di44RtfkLT8zOO5BLZdnPdecavoYDEhoF4pGSARi%2FNmugUEzxq6Ry4A4p2RAyFIpjecOxKutM%2F0d3rPLOJcL%2B2LbBztF9x9OM%2BUv46phCPGaB4ou0OYexwz&X-Amz-Signature=b48640f1aa0a6300277eeaf56b2ffc2400b46a894308c0189495abfa653c58d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642ZQDLDX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5Q0nerLi0DiPzx%2FmxZ6qZmPIGNVw%2F0ntaI6LHVpblJAiAMvDijqZ3oBqfPYSA8XGFTGtWd17ANppPsS4q7zMvHeCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMd7ND1AzCocBujbjqKtwDsHa1TOe%2BcJ7yIJqdP7PQ5T6nKVxJ4zyTx0jX%2FG1rVm%2B5nu7sGzcbJ7xzw6uMKVCnuKB9xD0RLwAPUkFtXBpSZKjjojbPxomRVIm61%2B78UIWYxw%2FhEGSFawfi9YsKmktBf4Cd589iZ7rgEpgCYS1Fe504IUoCH0R2fQIfwd3kHmAXEhu6m%2F%2FrV0NUCZdLB1mxwA0SsvfWJ7H010ONOxEWa8SaKcYJ1oZcsjpMERRBV3lRp9GkKuclnt1RsMSsJ9uPIzkt4WTdu8aktCB6bKoc46BtL3jwfjUbauBMKUJQVesRvc%2BJ8frkRF3enohYs3Yc7%2BqAMyI7cRWDoQig1kArL8d%2BeAs6dHllTRY6v0FihC9EM%2F%2Fef7RAiQxaiV%2F%2BQAWInR5nWyL6pz3dC%2FFK75R%2BY9UlczS74%2B9Q3MTXhfBDCNaWqAoraNxfbxJEXWjSCoxvIb4JE%2F3orz7Z%2FCGB2lMyA9FfwVbz8f81ReVFn8jj1X2Y54iSlQ1MWMJtYgrZIPf7Fi7S41Ig7b%2FErryHsqUNj9%2Fl5iB%2Bz%2BdBhASPHk8r1ab4Ej%2ByksIqt2il%2Fq8dw4giH0ksBtEalhj4f7DTMKY%2BOIoFoEYixWAEI10gwfFzCNVpcZNty1OFk1mJQUQw5f2ZwQY6pgFc2GNvpfd46NX9a2QHdXjoRF3rJduMABG1FToRGvbTRZl%2BRU5ypKE9VJG4MNq21ZjqIIOAaX2u4PQN6IUdGd%2FDgKqYnSTd3%2FQMRz9t4di44RtfkLT8zOO5BLZdnPdecavoYDEhoF4pGSARi%2FNmugUEzxq6Ry4A4p2RAyFIpjecOxKutM%2F0d3rPLOJcL%2B2LbBztF9x9OM%2BUv46phCPGaB4ou0OYexwz&X-Amz-Signature=33b06cc97d606bb9dba5ad9f9583eee2b2f6ef37d1a0dd675a2bdac3542999b7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642ZQDLDX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5Q0nerLi0DiPzx%2FmxZ6qZmPIGNVw%2F0ntaI6LHVpblJAiAMvDijqZ3oBqfPYSA8XGFTGtWd17ANppPsS4q7zMvHeCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMd7ND1AzCocBujbjqKtwDsHa1TOe%2BcJ7yIJqdP7PQ5T6nKVxJ4zyTx0jX%2FG1rVm%2B5nu7sGzcbJ7xzw6uMKVCnuKB9xD0RLwAPUkFtXBpSZKjjojbPxomRVIm61%2B78UIWYxw%2FhEGSFawfi9YsKmktBf4Cd589iZ7rgEpgCYS1Fe504IUoCH0R2fQIfwd3kHmAXEhu6m%2F%2FrV0NUCZdLB1mxwA0SsvfWJ7H010ONOxEWa8SaKcYJ1oZcsjpMERRBV3lRp9GkKuclnt1RsMSsJ9uPIzkt4WTdu8aktCB6bKoc46BtL3jwfjUbauBMKUJQVesRvc%2BJ8frkRF3enohYs3Yc7%2BqAMyI7cRWDoQig1kArL8d%2BeAs6dHllTRY6v0FihC9EM%2F%2Fef7RAiQxaiV%2F%2BQAWInR5nWyL6pz3dC%2FFK75R%2BY9UlczS74%2B9Q3MTXhfBDCNaWqAoraNxfbxJEXWjSCoxvIb4JE%2F3orz7Z%2FCGB2lMyA9FfwVbz8f81ReVFn8jj1X2Y54iSlQ1MWMJtYgrZIPf7Fi7S41Ig7b%2FErryHsqUNj9%2Fl5iB%2Bz%2BdBhASPHk8r1ab4Ej%2ByksIqt2il%2Fq8dw4giH0ksBtEalhj4f7DTMKY%2BOIoFoEYixWAEI10gwfFzCNVpcZNty1OFk1mJQUQw5f2ZwQY6pgFc2GNvpfd46NX9a2QHdXjoRF3rJduMABG1FToRGvbTRZl%2BRU5ypKE9VJG4MNq21ZjqIIOAaX2u4PQN6IUdGd%2FDgKqYnSTd3%2FQMRz9t4di44RtfkLT8zOO5BLZdnPdecavoYDEhoF4pGSARi%2FNmugUEzxq6Ry4A4p2RAyFIpjecOxKutM%2F0d3rPLOJcL%2B2LbBztF9x9OM%2BUv46phCPGaB4ou0OYexwz&X-Amz-Signature=22273f2faafc9db21414cde40d5a003021496d2b4c85e6a1c3285058e8ef1a1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642ZQDLDX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5Q0nerLi0DiPzx%2FmxZ6qZmPIGNVw%2F0ntaI6LHVpblJAiAMvDijqZ3oBqfPYSA8XGFTGtWd17ANppPsS4q7zMvHeCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMd7ND1AzCocBujbjqKtwDsHa1TOe%2BcJ7yIJqdP7PQ5T6nKVxJ4zyTx0jX%2FG1rVm%2B5nu7sGzcbJ7xzw6uMKVCnuKB9xD0RLwAPUkFtXBpSZKjjojbPxomRVIm61%2B78UIWYxw%2FhEGSFawfi9YsKmktBf4Cd589iZ7rgEpgCYS1Fe504IUoCH0R2fQIfwd3kHmAXEhu6m%2F%2FrV0NUCZdLB1mxwA0SsvfWJ7H010ONOxEWa8SaKcYJ1oZcsjpMERRBV3lRp9GkKuclnt1RsMSsJ9uPIzkt4WTdu8aktCB6bKoc46BtL3jwfjUbauBMKUJQVesRvc%2BJ8frkRF3enohYs3Yc7%2BqAMyI7cRWDoQig1kArL8d%2BeAs6dHllTRY6v0FihC9EM%2F%2Fef7RAiQxaiV%2F%2BQAWInR5nWyL6pz3dC%2FFK75R%2BY9UlczS74%2B9Q3MTXhfBDCNaWqAoraNxfbxJEXWjSCoxvIb4JE%2F3orz7Z%2FCGB2lMyA9FfwVbz8f81ReVFn8jj1X2Y54iSlQ1MWMJtYgrZIPf7Fi7S41Ig7b%2FErryHsqUNj9%2Fl5iB%2Bz%2BdBhASPHk8r1ab4Ej%2ByksIqt2il%2Fq8dw4giH0ksBtEalhj4f7DTMKY%2BOIoFoEYixWAEI10gwfFzCNVpcZNty1OFk1mJQUQw5f2ZwQY6pgFc2GNvpfd46NX9a2QHdXjoRF3rJduMABG1FToRGvbTRZl%2BRU5ypKE9VJG4MNq21ZjqIIOAaX2u4PQN6IUdGd%2FDgKqYnSTd3%2FQMRz9t4di44RtfkLT8zOO5BLZdnPdecavoYDEhoF4pGSARi%2FNmugUEzxq6Ry4A4p2RAyFIpjecOxKutM%2F0d3rPLOJcL%2B2LbBztF9x9OM%2BUv46phCPGaB4ou0OYexwz&X-Amz-Signature=d69b5d290527ee534a3db3d8ac769a41a871e300a3332f62ee55abdb8c794c33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642ZQDLDX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5Q0nerLi0DiPzx%2FmxZ6qZmPIGNVw%2F0ntaI6LHVpblJAiAMvDijqZ3oBqfPYSA8XGFTGtWd17ANppPsS4q7zMvHeCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMd7ND1AzCocBujbjqKtwDsHa1TOe%2BcJ7yIJqdP7PQ5T6nKVxJ4zyTx0jX%2FG1rVm%2B5nu7sGzcbJ7xzw6uMKVCnuKB9xD0RLwAPUkFtXBpSZKjjojbPxomRVIm61%2B78UIWYxw%2FhEGSFawfi9YsKmktBf4Cd589iZ7rgEpgCYS1Fe504IUoCH0R2fQIfwd3kHmAXEhu6m%2F%2FrV0NUCZdLB1mxwA0SsvfWJ7H010ONOxEWa8SaKcYJ1oZcsjpMERRBV3lRp9GkKuclnt1RsMSsJ9uPIzkt4WTdu8aktCB6bKoc46BtL3jwfjUbauBMKUJQVesRvc%2BJ8frkRF3enohYs3Yc7%2BqAMyI7cRWDoQig1kArL8d%2BeAs6dHllTRY6v0FihC9EM%2F%2Fef7RAiQxaiV%2F%2BQAWInR5nWyL6pz3dC%2FFK75R%2BY9UlczS74%2B9Q3MTXhfBDCNaWqAoraNxfbxJEXWjSCoxvIb4JE%2F3orz7Z%2FCGB2lMyA9FfwVbz8f81ReVFn8jj1X2Y54iSlQ1MWMJtYgrZIPf7Fi7S41Ig7b%2FErryHsqUNj9%2Fl5iB%2Bz%2BdBhASPHk8r1ab4Ej%2ByksIqt2il%2Fq8dw4giH0ksBtEalhj4f7DTMKY%2BOIoFoEYixWAEI10gwfFzCNVpcZNty1OFk1mJQUQw5f2ZwQY6pgFc2GNvpfd46NX9a2QHdXjoRF3rJduMABG1FToRGvbTRZl%2BRU5ypKE9VJG4MNq21ZjqIIOAaX2u4PQN6IUdGd%2FDgKqYnSTd3%2FQMRz9t4di44RtfkLT8zOO5BLZdnPdecavoYDEhoF4pGSARi%2FNmugUEzxq6Ry4A4p2RAyFIpjecOxKutM%2F0d3rPLOJcL%2B2LbBztF9x9OM%2BUv46phCPGaB4ou0OYexwz&X-Amz-Signature=893dd2d747bb25869657d990ee0951980f7af8da123ef52cad83965f6ef3011e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
