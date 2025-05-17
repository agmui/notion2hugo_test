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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XETBB6Y%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbnA8d7oh%2Fb4DdDIrwh2rNgJbIIDH7ta%2FTrABecaTCFAiEA6DFnPgMwTqbWJQ813IkpvEhqtIXVi4s%2BNMZg5eIIjUIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBy4Zz0lPdCnZeWN6CrcA35c4yoc9FMaISWnLy9GhAdGtT1BaajFIJBGx79%2BFi61t3nl%2BF%2BKeh1iENpCmJFyX%2Bq7Dkd%2Fz9HWEIX70QgYa0DB7%2BrE5UUeEXEuqeKymzQDFO1J49A6IClTyydVu%2FcJkC2zlkDfQJQpDGvg%2BaOJj50lgqwGSJAzbGq5lO5I%2FmVNz%2FdYtfpmim78sIUHrjIsBZmMIT5QKslFgwc1cFsUuzADsDD5MBPv%2FAk6G3q9cnrXObNnDuWjZHy3lDjsizgYB6idUXiid4cOFfXxIcqMtlu76cN7xrFlRxp7lUJjmgcDgajbdzTKg2qXmNWyso8pJQKOGJZp4VeTQSQuJnuRoL5QU%2B7MViSIwmV2df17vhIKeJEvkBZcQ0exQfHeTaVCSIFYUNS5ZUuQJJMAxy1tw870EO9LKLKX10EQYKI5I2CQmaviYuBTub%2FRTGlm9aHedGiQk2L75qbjgs2ECT%2B1enGhoQ4MgtCWxH1PaOqESwetMAdmslbe4quAgnN%2F9rK7HfJQBVKYrU8r1ip1ATWXAkEroXnOXa3YqzIFpAojV8KxOfzO%2B8pNPFulGXUSRmeR64xB9nd2g%2B9ZyijwqpaBXTjEkSea8jklJ5VfphsvulMK6RdGJFwuZ4HM4B71MP7DoMEGOqUBwoMJ0uNhPmJqsAYqKIao9vb%2BMdFEllBBH61UPfZoYZ9Di3K2E0kvLJQullwlclV%2Fcvx6Vor6%2F0Ey29UJPh89OJIJ%2F2aW2ORMXbPbe8oTBgcHnkf1AHP%2F0oNCGV5%2BSjZMNpyV1WhCc8aQAnJjraOpKfQAeJhzNFuBSRa0dbrGx6xOwNLejbKsRWmOKwXSTdyIzqlZ4GI%2BbyGkwOJz1B5mjmzZcw3z&X-Amz-Signature=f0e9b5cef06c9c8dd2d25062416d4fb4eeb0d62da7f156f1ac4f6f624baea19c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XETBB6Y%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbnA8d7oh%2Fb4DdDIrwh2rNgJbIIDH7ta%2FTrABecaTCFAiEA6DFnPgMwTqbWJQ813IkpvEhqtIXVi4s%2BNMZg5eIIjUIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBy4Zz0lPdCnZeWN6CrcA35c4yoc9FMaISWnLy9GhAdGtT1BaajFIJBGx79%2BFi61t3nl%2BF%2BKeh1iENpCmJFyX%2Bq7Dkd%2Fz9HWEIX70QgYa0DB7%2BrE5UUeEXEuqeKymzQDFO1J49A6IClTyydVu%2FcJkC2zlkDfQJQpDGvg%2BaOJj50lgqwGSJAzbGq5lO5I%2FmVNz%2FdYtfpmim78sIUHrjIsBZmMIT5QKslFgwc1cFsUuzADsDD5MBPv%2FAk6G3q9cnrXObNnDuWjZHy3lDjsizgYB6idUXiid4cOFfXxIcqMtlu76cN7xrFlRxp7lUJjmgcDgajbdzTKg2qXmNWyso8pJQKOGJZp4VeTQSQuJnuRoL5QU%2B7MViSIwmV2df17vhIKeJEvkBZcQ0exQfHeTaVCSIFYUNS5ZUuQJJMAxy1tw870EO9LKLKX10EQYKI5I2CQmaviYuBTub%2FRTGlm9aHedGiQk2L75qbjgs2ECT%2B1enGhoQ4MgtCWxH1PaOqESwetMAdmslbe4quAgnN%2F9rK7HfJQBVKYrU8r1ip1ATWXAkEroXnOXa3YqzIFpAojV8KxOfzO%2B8pNPFulGXUSRmeR64xB9nd2g%2B9ZyijwqpaBXTjEkSea8jklJ5VfphsvulMK6RdGJFwuZ4HM4B71MP7DoMEGOqUBwoMJ0uNhPmJqsAYqKIao9vb%2BMdFEllBBH61UPfZoYZ9Di3K2E0kvLJQullwlclV%2Fcvx6Vor6%2F0Ey29UJPh89OJIJ%2F2aW2ORMXbPbe8oTBgcHnkf1AHP%2F0oNCGV5%2BSjZMNpyV1WhCc8aQAnJjraOpKfQAeJhzNFuBSRa0dbrGx6xOwNLejbKsRWmOKwXSTdyIzqlZ4GI%2BbyGkwOJz1B5mjmzZcw3z&X-Amz-Signature=829c28fd4e27b812263258ef0acf289880b4ed0b77ffc90d9d75d8cd9fa016d6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XETBB6Y%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbnA8d7oh%2Fb4DdDIrwh2rNgJbIIDH7ta%2FTrABecaTCFAiEA6DFnPgMwTqbWJQ813IkpvEhqtIXVi4s%2BNMZg5eIIjUIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBy4Zz0lPdCnZeWN6CrcA35c4yoc9FMaISWnLy9GhAdGtT1BaajFIJBGx79%2BFi61t3nl%2BF%2BKeh1iENpCmJFyX%2Bq7Dkd%2Fz9HWEIX70QgYa0DB7%2BrE5UUeEXEuqeKymzQDFO1J49A6IClTyydVu%2FcJkC2zlkDfQJQpDGvg%2BaOJj50lgqwGSJAzbGq5lO5I%2FmVNz%2FdYtfpmim78sIUHrjIsBZmMIT5QKslFgwc1cFsUuzADsDD5MBPv%2FAk6G3q9cnrXObNnDuWjZHy3lDjsizgYB6idUXiid4cOFfXxIcqMtlu76cN7xrFlRxp7lUJjmgcDgajbdzTKg2qXmNWyso8pJQKOGJZp4VeTQSQuJnuRoL5QU%2B7MViSIwmV2df17vhIKeJEvkBZcQ0exQfHeTaVCSIFYUNS5ZUuQJJMAxy1tw870EO9LKLKX10EQYKI5I2CQmaviYuBTub%2FRTGlm9aHedGiQk2L75qbjgs2ECT%2B1enGhoQ4MgtCWxH1PaOqESwetMAdmslbe4quAgnN%2F9rK7HfJQBVKYrU8r1ip1ATWXAkEroXnOXa3YqzIFpAojV8KxOfzO%2B8pNPFulGXUSRmeR64xB9nd2g%2B9ZyijwqpaBXTjEkSea8jklJ5VfphsvulMK6RdGJFwuZ4HM4B71MP7DoMEGOqUBwoMJ0uNhPmJqsAYqKIao9vb%2BMdFEllBBH61UPfZoYZ9Di3K2E0kvLJQullwlclV%2Fcvx6Vor6%2F0Ey29UJPh89OJIJ%2F2aW2ORMXbPbe8oTBgcHnkf1AHP%2F0oNCGV5%2BSjZMNpyV1WhCc8aQAnJjraOpKfQAeJhzNFuBSRa0dbrGx6xOwNLejbKsRWmOKwXSTdyIzqlZ4GI%2BbyGkwOJz1B5mjmzZcw3z&X-Amz-Signature=71fa554919b5687c972ba67c05635c30d3900f3d5f0e63361b60e305cf53b145&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XETBB6Y%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbnA8d7oh%2Fb4DdDIrwh2rNgJbIIDH7ta%2FTrABecaTCFAiEA6DFnPgMwTqbWJQ813IkpvEhqtIXVi4s%2BNMZg5eIIjUIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBy4Zz0lPdCnZeWN6CrcA35c4yoc9FMaISWnLy9GhAdGtT1BaajFIJBGx79%2BFi61t3nl%2BF%2BKeh1iENpCmJFyX%2Bq7Dkd%2Fz9HWEIX70QgYa0DB7%2BrE5UUeEXEuqeKymzQDFO1J49A6IClTyydVu%2FcJkC2zlkDfQJQpDGvg%2BaOJj50lgqwGSJAzbGq5lO5I%2FmVNz%2FdYtfpmim78sIUHrjIsBZmMIT5QKslFgwc1cFsUuzADsDD5MBPv%2FAk6G3q9cnrXObNnDuWjZHy3lDjsizgYB6idUXiid4cOFfXxIcqMtlu76cN7xrFlRxp7lUJjmgcDgajbdzTKg2qXmNWyso8pJQKOGJZp4VeTQSQuJnuRoL5QU%2B7MViSIwmV2df17vhIKeJEvkBZcQ0exQfHeTaVCSIFYUNS5ZUuQJJMAxy1tw870EO9LKLKX10EQYKI5I2CQmaviYuBTub%2FRTGlm9aHedGiQk2L75qbjgs2ECT%2B1enGhoQ4MgtCWxH1PaOqESwetMAdmslbe4quAgnN%2F9rK7HfJQBVKYrU8r1ip1ATWXAkEroXnOXa3YqzIFpAojV8KxOfzO%2B8pNPFulGXUSRmeR64xB9nd2g%2B9ZyijwqpaBXTjEkSea8jklJ5VfphsvulMK6RdGJFwuZ4HM4B71MP7DoMEGOqUBwoMJ0uNhPmJqsAYqKIao9vb%2BMdFEllBBH61UPfZoYZ9Di3K2E0kvLJQullwlclV%2Fcvx6Vor6%2F0Ey29UJPh89OJIJ%2F2aW2ORMXbPbe8oTBgcHnkf1AHP%2F0oNCGV5%2BSjZMNpyV1WhCc8aQAnJjraOpKfQAeJhzNFuBSRa0dbrGx6xOwNLejbKsRWmOKwXSTdyIzqlZ4GI%2BbyGkwOJz1B5mjmzZcw3z&X-Amz-Signature=d039bae711981c9a6075489d42b5ba1b18de17a452b93831031ce49c1f247a13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XETBB6Y%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbnA8d7oh%2Fb4DdDIrwh2rNgJbIIDH7ta%2FTrABecaTCFAiEA6DFnPgMwTqbWJQ813IkpvEhqtIXVi4s%2BNMZg5eIIjUIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBy4Zz0lPdCnZeWN6CrcA35c4yoc9FMaISWnLy9GhAdGtT1BaajFIJBGx79%2BFi61t3nl%2BF%2BKeh1iENpCmJFyX%2Bq7Dkd%2Fz9HWEIX70QgYa0DB7%2BrE5UUeEXEuqeKymzQDFO1J49A6IClTyydVu%2FcJkC2zlkDfQJQpDGvg%2BaOJj50lgqwGSJAzbGq5lO5I%2FmVNz%2FdYtfpmim78sIUHrjIsBZmMIT5QKslFgwc1cFsUuzADsDD5MBPv%2FAk6G3q9cnrXObNnDuWjZHy3lDjsizgYB6idUXiid4cOFfXxIcqMtlu76cN7xrFlRxp7lUJjmgcDgajbdzTKg2qXmNWyso8pJQKOGJZp4VeTQSQuJnuRoL5QU%2B7MViSIwmV2df17vhIKeJEvkBZcQ0exQfHeTaVCSIFYUNS5ZUuQJJMAxy1tw870EO9LKLKX10EQYKI5I2CQmaviYuBTub%2FRTGlm9aHedGiQk2L75qbjgs2ECT%2B1enGhoQ4MgtCWxH1PaOqESwetMAdmslbe4quAgnN%2F9rK7HfJQBVKYrU8r1ip1ATWXAkEroXnOXa3YqzIFpAojV8KxOfzO%2B8pNPFulGXUSRmeR64xB9nd2g%2B9ZyijwqpaBXTjEkSea8jklJ5VfphsvulMK6RdGJFwuZ4HM4B71MP7DoMEGOqUBwoMJ0uNhPmJqsAYqKIao9vb%2BMdFEllBBH61UPfZoYZ9Di3K2E0kvLJQullwlclV%2Fcvx6Vor6%2F0Ey29UJPh89OJIJ%2F2aW2ORMXbPbe8oTBgcHnkf1AHP%2F0oNCGV5%2BSjZMNpyV1WhCc8aQAnJjraOpKfQAeJhzNFuBSRa0dbrGx6xOwNLejbKsRWmOKwXSTdyIzqlZ4GI%2BbyGkwOJz1B5mjmzZcw3z&X-Amz-Signature=e308136d85e438656d2a9d1a61d9f3b690b469efaec6b581719b4d68b15fef61&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
