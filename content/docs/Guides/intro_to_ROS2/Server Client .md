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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6SO7P6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDR%2FuDDUU0dclzfBoocFGUM1TAps93OSrRhU11CZULimAIgeJDKhBpJCp7GnvP8kE32cxmNMdtZNAvjuyClUibZqBQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDda6Qv4XAxgsZ9LyrcA38REH6PgzqFZ8MDnVFvUdL7FjAPfYcPJtPzPSp132yq9M6k8EaqP3TILOBFoMGT7tCXzty4uqHs8WnWRtGBjHrszeLTPiNqrISlrG9NcSOQhwoQ%2FB029PdSsKXOwJebXD4%2BP0%2FSoBe0c437la6kFDfWJjhfD5m0YtUa7x16DyTMUIPz3sZFjSp0QLpQVyLEXZGOKuCJSCZv15TlDOjrQcfLH54Wy6%2B1tZjSNJc5XgdujqSkWc%2B37B2M7bznrdH3AEwuk9wlz6dB%2FIB2h%2BmDH2BImSX66ee82%2BegVVm%2BixHXyhnyzZiEiIbxS%2F13CEqKsz%2BEHYoYi4R5ldrQtP4jNZ7JxvO76X%2F6Ce5Z7Xr%2FA0yfzV8rJXBPJ73xXNwz%2FdaGoSm02WCkW4kamKyr4k%2F%2FdBYyzm6fvcW%2Fs8TIJ3Ndn3e0oJYnUMo0iGlBbjC6dpB9Jw%2FmEuIxLZxEhjjDH0oatVsnUvAPyjExekk2t4WYF1V4rt%2FAWfNeu9Fj9X9pEUzdvo8WvlQxaSEvZufy5s08qhu8AKNXT8%2F77ALTSEcfO45RM7mKSocClHazpg09Zcm0Ihi1lKbndW9GOqy4II%2FJ7UmGhOSOo6%2FaYZut5RD61cE3b140YNuX2eNeLh6PMLaUusEGOqUBJuEyhPESeKQLhw0%2F%2BRJG2RgnhKCDQHUcVroHDoigl9Dq0tbQrdimbLhpDg3iRzOtMR3PF4ACC0x7%2F0T6AvBBR7vrpSssjTCg7N9nGZOZmRL8jZnqC5XWhyutyDGkpgSJ3FMZvMV%2BATSa0VxNoTotlg6u0%2B5IB1qFxOZwMoR%2FmcpJt16Xicq%2FBqNv4B%2FAXJ53cmiw5VNd1cLR0wjarYMkix%2B%2B6lyn&X-Amz-Signature=bfe96e27da137962a4df4206855c3144e36553e363f93bed90bb4fce073ec5f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6SO7P6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDR%2FuDDUU0dclzfBoocFGUM1TAps93OSrRhU11CZULimAIgeJDKhBpJCp7GnvP8kE32cxmNMdtZNAvjuyClUibZqBQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDda6Qv4XAxgsZ9LyrcA38REH6PgzqFZ8MDnVFvUdL7FjAPfYcPJtPzPSp132yq9M6k8EaqP3TILOBFoMGT7tCXzty4uqHs8WnWRtGBjHrszeLTPiNqrISlrG9NcSOQhwoQ%2FB029PdSsKXOwJebXD4%2BP0%2FSoBe0c437la6kFDfWJjhfD5m0YtUa7x16DyTMUIPz3sZFjSp0QLpQVyLEXZGOKuCJSCZv15TlDOjrQcfLH54Wy6%2B1tZjSNJc5XgdujqSkWc%2B37B2M7bznrdH3AEwuk9wlz6dB%2FIB2h%2BmDH2BImSX66ee82%2BegVVm%2BixHXyhnyzZiEiIbxS%2F13CEqKsz%2BEHYoYi4R5ldrQtP4jNZ7JxvO76X%2F6Ce5Z7Xr%2FA0yfzV8rJXBPJ73xXNwz%2FdaGoSm02WCkW4kamKyr4k%2F%2FdBYyzm6fvcW%2Fs8TIJ3Ndn3e0oJYnUMo0iGlBbjC6dpB9Jw%2FmEuIxLZxEhjjDH0oatVsnUvAPyjExekk2t4WYF1V4rt%2FAWfNeu9Fj9X9pEUzdvo8WvlQxaSEvZufy5s08qhu8AKNXT8%2F77ALTSEcfO45RM7mKSocClHazpg09Zcm0Ihi1lKbndW9GOqy4II%2FJ7UmGhOSOo6%2FaYZut5RD61cE3b140YNuX2eNeLh6PMLaUusEGOqUBJuEyhPESeKQLhw0%2F%2BRJG2RgnhKCDQHUcVroHDoigl9Dq0tbQrdimbLhpDg3iRzOtMR3PF4ACC0x7%2F0T6AvBBR7vrpSssjTCg7N9nGZOZmRL8jZnqC5XWhyutyDGkpgSJ3FMZvMV%2BATSa0VxNoTotlg6u0%2B5IB1qFxOZwMoR%2FmcpJt16Xicq%2FBqNv4B%2FAXJ53cmiw5VNd1cLR0wjarYMkix%2B%2B6lyn&X-Amz-Signature=8d185be255f227d0bcf3adcf07634561442f3734fa83fdc155f3ca545dff4da5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6SO7P6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDR%2FuDDUU0dclzfBoocFGUM1TAps93OSrRhU11CZULimAIgeJDKhBpJCp7GnvP8kE32cxmNMdtZNAvjuyClUibZqBQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDda6Qv4XAxgsZ9LyrcA38REH6PgzqFZ8MDnVFvUdL7FjAPfYcPJtPzPSp132yq9M6k8EaqP3TILOBFoMGT7tCXzty4uqHs8WnWRtGBjHrszeLTPiNqrISlrG9NcSOQhwoQ%2FB029PdSsKXOwJebXD4%2BP0%2FSoBe0c437la6kFDfWJjhfD5m0YtUa7x16DyTMUIPz3sZFjSp0QLpQVyLEXZGOKuCJSCZv15TlDOjrQcfLH54Wy6%2B1tZjSNJc5XgdujqSkWc%2B37B2M7bznrdH3AEwuk9wlz6dB%2FIB2h%2BmDH2BImSX66ee82%2BegVVm%2BixHXyhnyzZiEiIbxS%2F13CEqKsz%2BEHYoYi4R5ldrQtP4jNZ7JxvO76X%2F6Ce5Z7Xr%2FA0yfzV8rJXBPJ73xXNwz%2FdaGoSm02WCkW4kamKyr4k%2F%2FdBYyzm6fvcW%2Fs8TIJ3Ndn3e0oJYnUMo0iGlBbjC6dpB9Jw%2FmEuIxLZxEhjjDH0oatVsnUvAPyjExekk2t4WYF1V4rt%2FAWfNeu9Fj9X9pEUzdvo8WvlQxaSEvZufy5s08qhu8AKNXT8%2F77ALTSEcfO45RM7mKSocClHazpg09Zcm0Ihi1lKbndW9GOqy4II%2FJ7UmGhOSOo6%2FaYZut5RD61cE3b140YNuX2eNeLh6PMLaUusEGOqUBJuEyhPESeKQLhw0%2F%2BRJG2RgnhKCDQHUcVroHDoigl9Dq0tbQrdimbLhpDg3iRzOtMR3PF4ACC0x7%2F0T6AvBBR7vrpSssjTCg7N9nGZOZmRL8jZnqC5XWhyutyDGkpgSJ3FMZvMV%2BATSa0VxNoTotlg6u0%2B5IB1qFxOZwMoR%2FmcpJt16Xicq%2FBqNv4B%2FAXJ53cmiw5VNd1cLR0wjarYMkix%2B%2B6lyn&X-Amz-Signature=a890239a274683ce9d0a0caf4f414b928f5ee8cfcc33ea02e67fb2079cc6ac98&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6SO7P6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDR%2FuDDUU0dclzfBoocFGUM1TAps93OSrRhU11CZULimAIgeJDKhBpJCp7GnvP8kE32cxmNMdtZNAvjuyClUibZqBQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDda6Qv4XAxgsZ9LyrcA38REH6PgzqFZ8MDnVFvUdL7FjAPfYcPJtPzPSp132yq9M6k8EaqP3TILOBFoMGT7tCXzty4uqHs8WnWRtGBjHrszeLTPiNqrISlrG9NcSOQhwoQ%2FB029PdSsKXOwJebXD4%2BP0%2FSoBe0c437la6kFDfWJjhfD5m0YtUa7x16DyTMUIPz3sZFjSp0QLpQVyLEXZGOKuCJSCZv15TlDOjrQcfLH54Wy6%2B1tZjSNJc5XgdujqSkWc%2B37B2M7bznrdH3AEwuk9wlz6dB%2FIB2h%2BmDH2BImSX66ee82%2BegVVm%2BixHXyhnyzZiEiIbxS%2F13CEqKsz%2BEHYoYi4R5ldrQtP4jNZ7JxvO76X%2F6Ce5Z7Xr%2FA0yfzV8rJXBPJ73xXNwz%2FdaGoSm02WCkW4kamKyr4k%2F%2FdBYyzm6fvcW%2Fs8TIJ3Ndn3e0oJYnUMo0iGlBbjC6dpB9Jw%2FmEuIxLZxEhjjDH0oatVsnUvAPyjExekk2t4WYF1V4rt%2FAWfNeu9Fj9X9pEUzdvo8WvlQxaSEvZufy5s08qhu8AKNXT8%2F77ALTSEcfO45RM7mKSocClHazpg09Zcm0Ihi1lKbndW9GOqy4II%2FJ7UmGhOSOo6%2FaYZut5RD61cE3b140YNuX2eNeLh6PMLaUusEGOqUBJuEyhPESeKQLhw0%2F%2BRJG2RgnhKCDQHUcVroHDoigl9Dq0tbQrdimbLhpDg3iRzOtMR3PF4ACC0x7%2F0T6AvBBR7vrpSssjTCg7N9nGZOZmRL8jZnqC5XWhyutyDGkpgSJ3FMZvMV%2BATSa0VxNoTotlg6u0%2B5IB1qFxOZwMoR%2FmcpJt16Xicq%2FBqNv4B%2FAXJ53cmiw5VNd1cLR0wjarYMkix%2B%2B6lyn&X-Amz-Signature=ee8b00b6508135b8d79e5563a481446ec7d1680dc1660586bd23f10510a66d57&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6SO7P6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDR%2FuDDUU0dclzfBoocFGUM1TAps93OSrRhU11CZULimAIgeJDKhBpJCp7GnvP8kE32cxmNMdtZNAvjuyClUibZqBQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDda6Qv4XAxgsZ9LyrcA38REH6PgzqFZ8MDnVFvUdL7FjAPfYcPJtPzPSp132yq9M6k8EaqP3TILOBFoMGT7tCXzty4uqHs8WnWRtGBjHrszeLTPiNqrISlrG9NcSOQhwoQ%2FB029PdSsKXOwJebXD4%2BP0%2FSoBe0c437la6kFDfWJjhfD5m0YtUa7x16DyTMUIPz3sZFjSp0QLpQVyLEXZGOKuCJSCZv15TlDOjrQcfLH54Wy6%2B1tZjSNJc5XgdujqSkWc%2B37B2M7bznrdH3AEwuk9wlz6dB%2FIB2h%2BmDH2BImSX66ee82%2BegVVm%2BixHXyhnyzZiEiIbxS%2F13CEqKsz%2BEHYoYi4R5ldrQtP4jNZ7JxvO76X%2F6Ce5Z7Xr%2FA0yfzV8rJXBPJ73xXNwz%2FdaGoSm02WCkW4kamKyr4k%2F%2FdBYyzm6fvcW%2Fs8TIJ3Ndn3e0oJYnUMo0iGlBbjC6dpB9Jw%2FmEuIxLZxEhjjDH0oatVsnUvAPyjExekk2t4WYF1V4rt%2FAWfNeu9Fj9X9pEUzdvo8WvlQxaSEvZufy5s08qhu8AKNXT8%2F77ALTSEcfO45RM7mKSocClHazpg09Zcm0Ihi1lKbndW9GOqy4II%2FJ7UmGhOSOo6%2FaYZut5RD61cE3b140YNuX2eNeLh6PMLaUusEGOqUBJuEyhPESeKQLhw0%2F%2BRJG2RgnhKCDQHUcVroHDoigl9Dq0tbQrdimbLhpDg3iRzOtMR3PF4ACC0x7%2F0T6AvBBR7vrpSssjTCg7N9nGZOZmRL8jZnqC5XWhyutyDGkpgSJ3FMZvMV%2BATSa0VxNoTotlg6u0%2B5IB1qFxOZwMoR%2FmcpJt16Xicq%2FBqNv4B%2FAXJ53cmiw5VNd1cLR0wjarYMkix%2B%2B6lyn&X-Amz-Signature=de5fb0e81f8fc925e475af8147c6cf1e50382f84293f7ba98a2b3971a4d7897b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
