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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52VIFG4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKtqMLdn6GHXMLBFPNqZ9IORSP0Z062X8s21%2FDUbdLgAIhAMsL%2Fl3BbRUbe9xMEDnuwF5%2F7o%2FdGXHlOdBN0LCLS277Kv8DCCUQABoMNjM3NDIzMTgzODA1IgwajZV9TUUUd%2FkeuQUq3AMCCIe3vSaExYYcy4My%2BWs4LbSDIc6YrXyXEiAlklnznB8tJ5VBT8Qyrxs4zD8KiqvLrlTeSnb%2FgxgMqcVnnfajxVcZijRks9OhYb8ccW1qiZlADgiUtmb05PnrxFOfq4vtCgGgJJ3LtjItI0PW6qkfWf4imaUULqCv%2FYbNUEC6wKIv0UkE1QtCeMJZIXWaw2oVVjKvQSyuXe5%2FX5vKEEOI6RcOgB064rMCY%2FaffU4gW663e4JrLJ4NroXaL6UJWGoHmu978QcY53NtRmXr4rPnhJAJbGQc%2FtwW%2FXoeWRBD%2FmVhxgLmkbsmwqZBYclCf9G6xmHuHItsQyfW75NKR1VmP0h3a2jtc2KrNJFTcfgT38ZZ4bzEgkvHy1gddgRtWSU6dD0Qh66g%2F0mHsYbPyfF2n36DqPdjqKITXCljpMmGePmg3%2FiqqB7wIuAInGrtIQyQUQ2sOii9bwL4GqT%2FVIH%2FD3stGELiFpm7foUHymDJElqNuDVvm4uuTZiNf7bqMb%2Bpa7VtzzlUSTGI0brX9o6iHfSLk0zLTWlaaVQ6GKWpTi%2Fhwa7fMNgYowOl1VJnlhlxwMFkusjZZPvWrOoHDrkGZVi5dTpvXc%2FOl4n2KObMNgjOWRJxyWjmtIT3hDCV642%2FBjqkAQbETDOf4FpV6iTVd2BtWUsm1a6C4eirOoz8KnOhyByV%2BIZy8Oa3%2FJj4H5GgU03hYcYMri2V5WgJ0TcxDJIGbnx8j87FAnOUPfcyW99QjIbRxNdIC9QEfyk6JR11e1Wl5vVkBufHEczgk2Cm1EUoJgRjj8SsnOz%2FaeqeHu9zLObB5KNOO48%2BS3wF5u%2BOGDmzj8dxGS%2B%2FTD35V7UImIK6yllKNEGQ&X-Amz-Signature=59bf12c5371b0398f236e199e3f68c29619c12b2d2ad895344da11a2d51c3ced&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52VIFG4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKtqMLdn6GHXMLBFPNqZ9IORSP0Z062X8s21%2FDUbdLgAIhAMsL%2Fl3BbRUbe9xMEDnuwF5%2F7o%2FdGXHlOdBN0LCLS277Kv8DCCUQABoMNjM3NDIzMTgzODA1IgwajZV9TUUUd%2FkeuQUq3AMCCIe3vSaExYYcy4My%2BWs4LbSDIc6YrXyXEiAlklnznB8tJ5VBT8Qyrxs4zD8KiqvLrlTeSnb%2FgxgMqcVnnfajxVcZijRks9OhYb8ccW1qiZlADgiUtmb05PnrxFOfq4vtCgGgJJ3LtjItI0PW6qkfWf4imaUULqCv%2FYbNUEC6wKIv0UkE1QtCeMJZIXWaw2oVVjKvQSyuXe5%2FX5vKEEOI6RcOgB064rMCY%2FaffU4gW663e4JrLJ4NroXaL6UJWGoHmu978QcY53NtRmXr4rPnhJAJbGQc%2FtwW%2FXoeWRBD%2FmVhxgLmkbsmwqZBYclCf9G6xmHuHItsQyfW75NKR1VmP0h3a2jtc2KrNJFTcfgT38ZZ4bzEgkvHy1gddgRtWSU6dD0Qh66g%2F0mHsYbPyfF2n36DqPdjqKITXCljpMmGePmg3%2FiqqB7wIuAInGrtIQyQUQ2sOii9bwL4GqT%2FVIH%2FD3stGELiFpm7foUHymDJElqNuDVvm4uuTZiNf7bqMb%2Bpa7VtzzlUSTGI0brX9o6iHfSLk0zLTWlaaVQ6GKWpTi%2Fhwa7fMNgYowOl1VJnlhlxwMFkusjZZPvWrOoHDrkGZVi5dTpvXc%2FOl4n2KObMNgjOWRJxyWjmtIT3hDCV642%2FBjqkAQbETDOf4FpV6iTVd2BtWUsm1a6C4eirOoz8KnOhyByV%2BIZy8Oa3%2FJj4H5GgU03hYcYMri2V5WgJ0TcxDJIGbnx8j87FAnOUPfcyW99QjIbRxNdIC9QEfyk6JR11e1Wl5vVkBufHEczgk2Cm1EUoJgRjj8SsnOz%2FaeqeHu9zLObB5KNOO48%2BS3wF5u%2BOGDmzj8dxGS%2B%2FTD35V7UImIK6yllKNEGQ&X-Amz-Signature=a6629e896ea99f537b5c3f5e270f9a755ee4cfd4f9d94f5f68352c2ced8958e9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52VIFG4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKtqMLdn6GHXMLBFPNqZ9IORSP0Z062X8s21%2FDUbdLgAIhAMsL%2Fl3BbRUbe9xMEDnuwF5%2F7o%2FdGXHlOdBN0LCLS277Kv8DCCUQABoMNjM3NDIzMTgzODA1IgwajZV9TUUUd%2FkeuQUq3AMCCIe3vSaExYYcy4My%2BWs4LbSDIc6YrXyXEiAlklnznB8tJ5VBT8Qyrxs4zD8KiqvLrlTeSnb%2FgxgMqcVnnfajxVcZijRks9OhYb8ccW1qiZlADgiUtmb05PnrxFOfq4vtCgGgJJ3LtjItI0PW6qkfWf4imaUULqCv%2FYbNUEC6wKIv0UkE1QtCeMJZIXWaw2oVVjKvQSyuXe5%2FX5vKEEOI6RcOgB064rMCY%2FaffU4gW663e4JrLJ4NroXaL6UJWGoHmu978QcY53NtRmXr4rPnhJAJbGQc%2FtwW%2FXoeWRBD%2FmVhxgLmkbsmwqZBYclCf9G6xmHuHItsQyfW75NKR1VmP0h3a2jtc2KrNJFTcfgT38ZZ4bzEgkvHy1gddgRtWSU6dD0Qh66g%2F0mHsYbPyfF2n36DqPdjqKITXCljpMmGePmg3%2FiqqB7wIuAInGrtIQyQUQ2sOii9bwL4GqT%2FVIH%2FD3stGELiFpm7foUHymDJElqNuDVvm4uuTZiNf7bqMb%2Bpa7VtzzlUSTGI0brX9o6iHfSLk0zLTWlaaVQ6GKWpTi%2Fhwa7fMNgYowOl1VJnlhlxwMFkusjZZPvWrOoHDrkGZVi5dTpvXc%2FOl4n2KObMNgjOWRJxyWjmtIT3hDCV642%2FBjqkAQbETDOf4FpV6iTVd2BtWUsm1a6C4eirOoz8KnOhyByV%2BIZy8Oa3%2FJj4H5GgU03hYcYMri2V5WgJ0TcxDJIGbnx8j87FAnOUPfcyW99QjIbRxNdIC9QEfyk6JR11e1Wl5vVkBufHEczgk2Cm1EUoJgRjj8SsnOz%2FaeqeHu9zLObB5KNOO48%2BS3wF5u%2BOGDmzj8dxGS%2B%2FTD35V7UImIK6yllKNEGQ&X-Amz-Signature=2816bd4e87102fbc464a9494e9bcf875045e89f49f7a7f0048370f312def5581&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52VIFG4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKtqMLdn6GHXMLBFPNqZ9IORSP0Z062X8s21%2FDUbdLgAIhAMsL%2Fl3BbRUbe9xMEDnuwF5%2F7o%2FdGXHlOdBN0LCLS277Kv8DCCUQABoMNjM3NDIzMTgzODA1IgwajZV9TUUUd%2FkeuQUq3AMCCIe3vSaExYYcy4My%2BWs4LbSDIc6YrXyXEiAlklnznB8tJ5VBT8Qyrxs4zD8KiqvLrlTeSnb%2FgxgMqcVnnfajxVcZijRks9OhYb8ccW1qiZlADgiUtmb05PnrxFOfq4vtCgGgJJ3LtjItI0PW6qkfWf4imaUULqCv%2FYbNUEC6wKIv0UkE1QtCeMJZIXWaw2oVVjKvQSyuXe5%2FX5vKEEOI6RcOgB064rMCY%2FaffU4gW663e4JrLJ4NroXaL6UJWGoHmu978QcY53NtRmXr4rPnhJAJbGQc%2FtwW%2FXoeWRBD%2FmVhxgLmkbsmwqZBYclCf9G6xmHuHItsQyfW75NKR1VmP0h3a2jtc2KrNJFTcfgT38ZZ4bzEgkvHy1gddgRtWSU6dD0Qh66g%2F0mHsYbPyfF2n36DqPdjqKITXCljpMmGePmg3%2FiqqB7wIuAInGrtIQyQUQ2sOii9bwL4GqT%2FVIH%2FD3stGELiFpm7foUHymDJElqNuDVvm4uuTZiNf7bqMb%2Bpa7VtzzlUSTGI0brX9o6iHfSLk0zLTWlaaVQ6GKWpTi%2Fhwa7fMNgYowOl1VJnlhlxwMFkusjZZPvWrOoHDrkGZVi5dTpvXc%2FOl4n2KObMNgjOWRJxyWjmtIT3hDCV642%2FBjqkAQbETDOf4FpV6iTVd2BtWUsm1a6C4eirOoz8KnOhyByV%2BIZy8Oa3%2FJj4H5GgU03hYcYMri2V5WgJ0TcxDJIGbnx8j87FAnOUPfcyW99QjIbRxNdIC9QEfyk6JR11e1Wl5vVkBufHEczgk2Cm1EUoJgRjj8SsnOz%2FaeqeHu9zLObB5KNOO48%2BS3wF5u%2BOGDmzj8dxGS%2B%2FTD35V7UImIK6yllKNEGQ&X-Amz-Signature=a929aa054ee2c7403b076d919d3371236309e928e1c01c3a371a296177493f21&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52VIFG4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKtqMLdn6GHXMLBFPNqZ9IORSP0Z062X8s21%2FDUbdLgAIhAMsL%2Fl3BbRUbe9xMEDnuwF5%2F7o%2FdGXHlOdBN0LCLS277Kv8DCCUQABoMNjM3NDIzMTgzODA1IgwajZV9TUUUd%2FkeuQUq3AMCCIe3vSaExYYcy4My%2BWs4LbSDIc6YrXyXEiAlklnznB8tJ5VBT8Qyrxs4zD8KiqvLrlTeSnb%2FgxgMqcVnnfajxVcZijRks9OhYb8ccW1qiZlADgiUtmb05PnrxFOfq4vtCgGgJJ3LtjItI0PW6qkfWf4imaUULqCv%2FYbNUEC6wKIv0UkE1QtCeMJZIXWaw2oVVjKvQSyuXe5%2FX5vKEEOI6RcOgB064rMCY%2FaffU4gW663e4JrLJ4NroXaL6UJWGoHmu978QcY53NtRmXr4rPnhJAJbGQc%2FtwW%2FXoeWRBD%2FmVhxgLmkbsmwqZBYclCf9G6xmHuHItsQyfW75NKR1VmP0h3a2jtc2KrNJFTcfgT38ZZ4bzEgkvHy1gddgRtWSU6dD0Qh66g%2F0mHsYbPyfF2n36DqPdjqKITXCljpMmGePmg3%2FiqqB7wIuAInGrtIQyQUQ2sOii9bwL4GqT%2FVIH%2FD3stGELiFpm7foUHymDJElqNuDVvm4uuTZiNf7bqMb%2Bpa7VtzzlUSTGI0brX9o6iHfSLk0zLTWlaaVQ6GKWpTi%2Fhwa7fMNgYowOl1VJnlhlxwMFkusjZZPvWrOoHDrkGZVi5dTpvXc%2FOl4n2KObMNgjOWRJxyWjmtIT3hDCV642%2FBjqkAQbETDOf4FpV6iTVd2BtWUsm1a6C4eirOoz8KnOhyByV%2BIZy8Oa3%2FJj4H5GgU03hYcYMri2V5WgJ0TcxDJIGbnx8j87FAnOUPfcyW99QjIbRxNdIC9QEfyk6JR11e1Wl5vVkBufHEczgk2Cm1EUoJgRjj8SsnOz%2FaeqeHu9zLObB5KNOO48%2BS3wF5u%2BOGDmzj8dxGS%2B%2FTD35V7UImIK6yllKNEGQ&X-Amz-Signature=c45e5d12073605937dcead0dfe0d43549ac2d8cec62baac58dffe49cd1aad684&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
