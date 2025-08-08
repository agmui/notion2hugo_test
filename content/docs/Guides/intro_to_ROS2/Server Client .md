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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XZXQGS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDhJYhcWD1HpLRFEHfpS5Kzzb0Z49lvkkxFau9Jk4ZN4wIhAPwcIJjGMDdFDOj55vTAN0ClYKJwhGRA6324c9uEC8g3KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUkJsUxnL9h9x48Qwq3ANP%2FhWAYnSUF65oMSN5c0h9wEv2bAM2l149X7CiqwQpcHdOXQj6Q1g7hiBvJotTQ26g8U5Dl7D%2BFC2wsBRZzWaaI5XMLUurpXeCGdxzCPAEqWTS4UJqqGIcmMBCJ1hfr2rki5qrGdawcDP5rdBD6dUYNxH1HVRqhQFl6aPe1VVXhzj57uhlyVqSq0sXXEbMRoTVL5%2FaYT4nXLCvJ4LF5M09gwKCKAKC2UTvytYdIUUwZI4AOsd80wKP4jWk5RTtcHut8Y%2FIifefQPIL4uFIuefwMjN%2FmTwsB7Ob2bxpdoSptzMqhVM2V%2FoQ%2Ft6G%2Fj%2BfzINA%2FR%2BnOw%2BTqZ3rB9TJRPQmE0kXK1AgTB3SyZE6%2BCdHgyU0u5jg4%2Fs%2FD9%2B9vtH9y4NgTA49SGZcGaw1aaSIZK5Lz%2BTJ802PX5%2Bg3acjRMkjICw4027TRfuVaBTCU0KzCNKnPE73Vnf8nCnCopSYvS6rp%2F8K7EOVG94OXG%2FAaHdcoTb9JfbHE%2ByEyheKvWJiMu5zJJPVUVkXEEhpXSDr5xA5dT7QGpEfrO8NmA2JZzp%2Bzxjz8N1%2Fympp%2F5oAVC5tWqAizvCjjDXknHUlNWOk%2BUF2FI7JAeW4RTTnlvYucM5O1iDGyt2vHEiwvtfTujDoutnEBjqkAcVUuiC3WsY%2BqDtw0o9h2QUUs13A6x40Rffcyaeysxe2s2iX05%2Blo%2FL2iUo0rUqzbdbrswThl%2FyfIk5t05KGbyA27ncEi1J5R5wXxz89ETEE1Q%2F090xVDTcuYsRvl9XWEoWDVoV1c0MXrHJq0j0y4UBK72FNPeDiZdIcLzYRhSshB279OU2J%2FJSYQQa2UELm8PtNQKxi%2FyvFVcYs0gUTXPV8SPEr&X-Amz-Signature=2bfd2fb738736cd833f01eecc4af4b455c1540c8419de3378350f39f4a8963ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XZXQGS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDhJYhcWD1HpLRFEHfpS5Kzzb0Z49lvkkxFau9Jk4ZN4wIhAPwcIJjGMDdFDOj55vTAN0ClYKJwhGRA6324c9uEC8g3KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUkJsUxnL9h9x48Qwq3ANP%2FhWAYnSUF65oMSN5c0h9wEv2bAM2l149X7CiqwQpcHdOXQj6Q1g7hiBvJotTQ26g8U5Dl7D%2BFC2wsBRZzWaaI5XMLUurpXeCGdxzCPAEqWTS4UJqqGIcmMBCJ1hfr2rki5qrGdawcDP5rdBD6dUYNxH1HVRqhQFl6aPe1VVXhzj57uhlyVqSq0sXXEbMRoTVL5%2FaYT4nXLCvJ4LF5M09gwKCKAKC2UTvytYdIUUwZI4AOsd80wKP4jWk5RTtcHut8Y%2FIifefQPIL4uFIuefwMjN%2FmTwsB7Ob2bxpdoSptzMqhVM2V%2FoQ%2Ft6G%2Fj%2BfzINA%2FR%2BnOw%2BTqZ3rB9TJRPQmE0kXK1AgTB3SyZE6%2BCdHgyU0u5jg4%2Fs%2FD9%2B9vtH9y4NgTA49SGZcGaw1aaSIZK5Lz%2BTJ802PX5%2Bg3acjRMkjICw4027TRfuVaBTCU0KzCNKnPE73Vnf8nCnCopSYvS6rp%2F8K7EOVG94OXG%2FAaHdcoTb9JfbHE%2ByEyheKvWJiMu5zJJPVUVkXEEhpXSDr5xA5dT7QGpEfrO8NmA2JZzp%2Bzxjz8N1%2Fympp%2F5oAVC5tWqAizvCjjDXknHUlNWOk%2BUF2FI7JAeW4RTTnlvYucM5O1iDGyt2vHEiwvtfTujDoutnEBjqkAcVUuiC3WsY%2BqDtw0o9h2QUUs13A6x40Rffcyaeysxe2s2iX05%2Blo%2FL2iUo0rUqzbdbrswThl%2FyfIk5t05KGbyA27ncEi1J5R5wXxz89ETEE1Q%2F090xVDTcuYsRvl9XWEoWDVoV1c0MXrHJq0j0y4UBK72FNPeDiZdIcLzYRhSshB279OU2J%2FJSYQQa2UELm8PtNQKxi%2FyvFVcYs0gUTXPV8SPEr&X-Amz-Signature=55d7b9bf3568aa1c5871955b5eae0bfae124709e7eacbec9355ad151d2f19e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XZXQGS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDhJYhcWD1HpLRFEHfpS5Kzzb0Z49lvkkxFau9Jk4ZN4wIhAPwcIJjGMDdFDOj55vTAN0ClYKJwhGRA6324c9uEC8g3KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUkJsUxnL9h9x48Qwq3ANP%2FhWAYnSUF65oMSN5c0h9wEv2bAM2l149X7CiqwQpcHdOXQj6Q1g7hiBvJotTQ26g8U5Dl7D%2BFC2wsBRZzWaaI5XMLUurpXeCGdxzCPAEqWTS4UJqqGIcmMBCJ1hfr2rki5qrGdawcDP5rdBD6dUYNxH1HVRqhQFl6aPe1VVXhzj57uhlyVqSq0sXXEbMRoTVL5%2FaYT4nXLCvJ4LF5M09gwKCKAKC2UTvytYdIUUwZI4AOsd80wKP4jWk5RTtcHut8Y%2FIifefQPIL4uFIuefwMjN%2FmTwsB7Ob2bxpdoSptzMqhVM2V%2FoQ%2Ft6G%2Fj%2BfzINA%2FR%2BnOw%2BTqZ3rB9TJRPQmE0kXK1AgTB3SyZE6%2BCdHgyU0u5jg4%2Fs%2FD9%2B9vtH9y4NgTA49SGZcGaw1aaSIZK5Lz%2BTJ802PX5%2Bg3acjRMkjICw4027TRfuVaBTCU0KzCNKnPE73Vnf8nCnCopSYvS6rp%2F8K7EOVG94OXG%2FAaHdcoTb9JfbHE%2ByEyheKvWJiMu5zJJPVUVkXEEhpXSDr5xA5dT7QGpEfrO8NmA2JZzp%2Bzxjz8N1%2Fympp%2F5oAVC5tWqAizvCjjDXknHUlNWOk%2BUF2FI7JAeW4RTTnlvYucM5O1iDGyt2vHEiwvtfTujDoutnEBjqkAcVUuiC3WsY%2BqDtw0o9h2QUUs13A6x40Rffcyaeysxe2s2iX05%2Blo%2FL2iUo0rUqzbdbrswThl%2FyfIk5t05KGbyA27ncEi1J5R5wXxz89ETEE1Q%2F090xVDTcuYsRvl9XWEoWDVoV1c0MXrHJq0j0y4UBK72FNPeDiZdIcLzYRhSshB279OU2J%2FJSYQQa2UELm8PtNQKxi%2FyvFVcYs0gUTXPV8SPEr&X-Amz-Signature=f6eedead7bcb813ac6ab2fc3bc581eefec4f42cd3237699b863ea9f287dca9e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XZXQGS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDhJYhcWD1HpLRFEHfpS5Kzzb0Z49lvkkxFau9Jk4ZN4wIhAPwcIJjGMDdFDOj55vTAN0ClYKJwhGRA6324c9uEC8g3KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUkJsUxnL9h9x48Qwq3ANP%2FhWAYnSUF65oMSN5c0h9wEv2bAM2l149X7CiqwQpcHdOXQj6Q1g7hiBvJotTQ26g8U5Dl7D%2BFC2wsBRZzWaaI5XMLUurpXeCGdxzCPAEqWTS4UJqqGIcmMBCJ1hfr2rki5qrGdawcDP5rdBD6dUYNxH1HVRqhQFl6aPe1VVXhzj57uhlyVqSq0sXXEbMRoTVL5%2FaYT4nXLCvJ4LF5M09gwKCKAKC2UTvytYdIUUwZI4AOsd80wKP4jWk5RTtcHut8Y%2FIifefQPIL4uFIuefwMjN%2FmTwsB7Ob2bxpdoSptzMqhVM2V%2FoQ%2Ft6G%2Fj%2BfzINA%2FR%2BnOw%2BTqZ3rB9TJRPQmE0kXK1AgTB3SyZE6%2BCdHgyU0u5jg4%2Fs%2FD9%2B9vtH9y4NgTA49SGZcGaw1aaSIZK5Lz%2BTJ802PX5%2Bg3acjRMkjICw4027TRfuVaBTCU0KzCNKnPE73Vnf8nCnCopSYvS6rp%2F8K7EOVG94OXG%2FAaHdcoTb9JfbHE%2ByEyheKvWJiMu5zJJPVUVkXEEhpXSDr5xA5dT7QGpEfrO8NmA2JZzp%2Bzxjz8N1%2Fympp%2F5oAVC5tWqAizvCjjDXknHUlNWOk%2BUF2FI7JAeW4RTTnlvYucM5O1iDGyt2vHEiwvtfTujDoutnEBjqkAcVUuiC3WsY%2BqDtw0o9h2QUUs13A6x40Rffcyaeysxe2s2iX05%2Blo%2FL2iUo0rUqzbdbrswThl%2FyfIk5t05KGbyA27ncEi1J5R5wXxz89ETEE1Q%2F090xVDTcuYsRvl9XWEoWDVoV1c0MXrHJq0j0y4UBK72FNPeDiZdIcLzYRhSshB279OU2J%2FJSYQQa2UELm8PtNQKxi%2FyvFVcYs0gUTXPV8SPEr&X-Amz-Signature=ffc8aac83a11d94df16da4bf110d7b8122ef2a65b057ffcb4cd8a304e0c1dff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XZXQGS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDhJYhcWD1HpLRFEHfpS5Kzzb0Z49lvkkxFau9Jk4ZN4wIhAPwcIJjGMDdFDOj55vTAN0ClYKJwhGRA6324c9uEC8g3KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUkJsUxnL9h9x48Qwq3ANP%2FhWAYnSUF65oMSN5c0h9wEv2bAM2l149X7CiqwQpcHdOXQj6Q1g7hiBvJotTQ26g8U5Dl7D%2BFC2wsBRZzWaaI5XMLUurpXeCGdxzCPAEqWTS4UJqqGIcmMBCJ1hfr2rki5qrGdawcDP5rdBD6dUYNxH1HVRqhQFl6aPe1VVXhzj57uhlyVqSq0sXXEbMRoTVL5%2FaYT4nXLCvJ4LF5M09gwKCKAKC2UTvytYdIUUwZI4AOsd80wKP4jWk5RTtcHut8Y%2FIifefQPIL4uFIuefwMjN%2FmTwsB7Ob2bxpdoSptzMqhVM2V%2FoQ%2Ft6G%2Fj%2BfzINA%2FR%2BnOw%2BTqZ3rB9TJRPQmE0kXK1AgTB3SyZE6%2BCdHgyU0u5jg4%2Fs%2FD9%2B9vtH9y4NgTA49SGZcGaw1aaSIZK5Lz%2BTJ802PX5%2Bg3acjRMkjICw4027TRfuVaBTCU0KzCNKnPE73Vnf8nCnCopSYvS6rp%2F8K7EOVG94OXG%2FAaHdcoTb9JfbHE%2ByEyheKvWJiMu5zJJPVUVkXEEhpXSDr5xA5dT7QGpEfrO8NmA2JZzp%2Bzxjz8N1%2Fympp%2F5oAVC5tWqAizvCjjDXknHUlNWOk%2BUF2FI7JAeW4RTTnlvYucM5O1iDGyt2vHEiwvtfTujDoutnEBjqkAcVUuiC3WsY%2BqDtw0o9h2QUUs13A6x40Rffcyaeysxe2s2iX05%2Blo%2FL2iUo0rUqzbdbrswThl%2FyfIk5t05KGbyA27ncEi1J5R5wXxz89ETEE1Q%2F090xVDTcuYsRvl9XWEoWDVoV1c0MXrHJq0j0y4UBK72FNPeDiZdIcLzYRhSshB279OU2J%2FJSYQQa2UELm8PtNQKxi%2FyvFVcYs0gUTXPV8SPEr&X-Amz-Signature=041677eb0a1aba224de2a6007f5256cc5913076be2c09bcc2a5cb5529c4b3a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
