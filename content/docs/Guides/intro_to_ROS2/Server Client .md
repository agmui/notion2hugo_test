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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7SAGGQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDp1sKTA8%2B8e222MBas4Jwb%2Fj10P47EQaxNyRa%2B8MXFrQIgI8vPT5VuYy5jZbTR6v%2BpVhLmjBkm6eaUGXk1IibMdIcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWBbgvUQVMcMIBllyrcAxK9oj393oEpKE%2B6axaA44h1moTQyuVH7GQuqcs4O3GIeAT7T5NE4C5kFYX2i9J7y4q7l5Q587MG0G%2BZY1ID7DuWXavyW%2FwnHh%2FXtA9eWvlEiByPyhyFt61fL3%2FwnATu2cxxG0vwRsnFaJplFEx9mmF2UJ7JEuSYqwBzh1payTONJlnz4gbxWUAlLuZM1CVvyd4O4dyr81z0pAmjTZK4ZCk9lgWAEe11G3CYCpnxl4%2Fn4x98cQCqe6bXEJX0y3HM7aGUYC2EZdiPRqAfqw6yl9a9qAo3pzV%2BJOJNLv4Fj%2Fdbn7oh2nLQUe%2BPWlhPhvq1hMrJBX%2FRpRdbu%2F1s06y0dVjdULgkkQH%2BxS0iUiqOMRLbeT4O8abuak9x1%2BkWm4ZxTAT9ihLmd0fzLwGEaYL8%2BOIGOGojRHrFOh6kzRelrtDQKWcM2oqSYu%2FDSngDdPsEM2W99psFXX%2Bt2kKW8U95Bk4qe%2BMUyVWtbtSHPArRM8BlJfizXlCoVA1w9K1v0BfyUFlmyEWyCdwrNoXYVia5geDp8k%2B9bAqIxEk%2BCZtyJN2yTj7Xpx%2BoUZRx0U1tuf4clwiCr27TDVG7QkRwf5cbqNwwzvtd38hO9iSpNZ59A9KxJ3u0KZKcc6kIyMjOMNDShL4GOqUBWI1178ji3gEX0LGPTGqPFY64Zxbmz5M2k98fhIMcZiW2s8ILHZgeL9Om5h0hTY41yMPZzCOl7jwIvRe%2BbqJZmUyDhUOmNU2eq%2BMwoc5GhtP%2BOnzHXjvOGs%2BN%2Fra3Te1%2Bsw9Z6N96Zgk810UY6jY8KpL0D1paCcjftArYHx%2FQ25qBKvmwks8nmZOd0IB4B3TYjHW01H2PgLPrn6gUSse2LFIxrYLF&X-Amz-Signature=baeebf010192c155cae8204286b1f8863097dbe69e382acdd97b70d68c58aeb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7SAGGQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDp1sKTA8%2B8e222MBas4Jwb%2Fj10P47EQaxNyRa%2B8MXFrQIgI8vPT5VuYy5jZbTR6v%2BpVhLmjBkm6eaUGXk1IibMdIcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWBbgvUQVMcMIBllyrcAxK9oj393oEpKE%2B6axaA44h1moTQyuVH7GQuqcs4O3GIeAT7T5NE4C5kFYX2i9J7y4q7l5Q587MG0G%2BZY1ID7DuWXavyW%2FwnHh%2FXtA9eWvlEiByPyhyFt61fL3%2FwnATu2cxxG0vwRsnFaJplFEx9mmF2UJ7JEuSYqwBzh1payTONJlnz4gbxWUAlLuZM1CVvyd4O4dyr81z0pAmjTZK4ZCk9lgWAEe11G3CYCpnxl4%2Fn4x98cQCqe6bXEJX0y3HM7aGUYC2EZdiPRqAfqw6yl9a9qAo3pzV%2BJOJNLv4Fj%2Fdbn7oh2nLQUe%2BPWlhPhvq1hMrJBX%2FRpRdbu%2F1s06y0dVjdULgkkQH%2BxS0iUiqOMRLbeT4O8abuak9x1%2BkWm4ZxTAT9ihLmd0fzLwGEaYL8%2BOIGOGojRHrFOh6kzRelrtDQKWcM2oqSYu%2FDSngDdPsEM2W99psFXX%2Bt2kKW8U95Bk4qe%2BMUyVWtbtSHPArRM8BlJfizXlCoVA1w9K1v0BfyUFlmyEWyCdwrNoXYVia5geDp8k%2B9bAqIxEk%2BCZtyJN2yTj7Xpx%2BoUZRx0U1tuf4clwiCr27TDVG7QkRwf5cbqNwwzvtd38hO9iSpNZ59A9KxJ3u0KZKcc6kIyMjOMNDShL4GOqUBWI1178ji3gEX0LGPTGqPFY64Zxbmz5M2k98fhIMcZiW2s8ILHZgeL9Om5h0hTY41yMPZzCOl7jwIvRe%2BbqJZmUyDhUOmNU2eq%2BMwoc5GhtP%2BOnzHXjvOGs%2BN%2Fra3Te1%2Bsw9Z6N96Zgk810UY6jY8KpL0D1paCcjftArYHx%2FQ25qBKvmwks8nmZOd0IB4B3TYjHW01H2PgLPrn6gUSse2LFIxrYLF&X-Amz-Signature=9cce1efd9c0ce44df298621bda8da460fcb803103f770552d132a0ef1b6de7fc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7SAGGQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDp1sKTA8%2B8e222MBas4Jwb%2Fj10P47EQaxNyRa%2B8MXFrQIgI8vPT5VuYy5jZbTR6v%2BpVhLmjBkm6eaUGXk1IibMdIcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWBbgvUQVMcMIBllyrcAxK9oj393oEpKE%2B6axaA44h1moTQyuVH7GQuqcs4O3GIeAT7T5NE4C5kFYX2i9J7y4q7l5Q587MG0G%2BZY1ID7DuWXavyW%2FwnHh%2FXtA9eWvlEiByPyhyFt61fL3%2FwnATu2cxxG0vwRsnFaJplFEx9mmF2UJ7JEuSYqwBzh1payTONJlnz4gbxWUAlLuZM1CVvyd4O4dyr81z0pAmjTZK4ZCk9lgWAEe11G3CYCpnxl4%2Fn4x98cQCqe6bXEJX0y3HM7aGUYC2EZdiPRqAfqw6yl9a9qAo3pzV%2BJOJNLv4Fj%2Fdbn7oh2nLQUe%2BPWlhPhvq1hMrJBX%2FRpRdbu%2F1s06y0dVjdULgkkQH%2BxS0iUiqOMRLbeT4O8abuak9x1%2BkWm4ZxTAT9ihLmd0fzLwGEaYL8%2BOIGOGojRHrFOh6kzRelrtDQKWcM2oqSYu%2FDSngDdPsEM2W99psFXX%2Bt2kKW8U95Bk4qe%2BMUyVWtbtSHPArRM8BlJfizXlCoVA1w9K1v0BfyUFlmyEWyCdwrNoXYVia5geDp8k%2B9bAqIxEk%2BCZtyJN2yTj7Xpx%2BoUZRx0U1tuf4clwiCr27TDVG7QkRwf5cbqNwwzvtd38hO9iSpNZ59A9KxJ3u0KZKcc6kIyMjOMNDShL4GOqUBWI1178ji3gEX0LGPTGqPFY64Zxbmz5M2k98fhIMcZiW2s8ILHZgeL9Om5h0hTY41yMPZzCOl7jwIvRe%2BbqJZmUyDhUOmNU2eq%2BMwoc5GhtP%2BOnzHXjvOGs%2BN%2Fra3Te1%2Bsw9Z6N96Zgk810UY6jY8KpL0D1paCcjftArYHx%2FQ25qBKvmwks8nmZOd0IB4B3TYjHW01H2PgLPrn6gUSse2LFIxrYLF&X-Amz-Signature=f152027a35b77bfe650f25c0ed8d0497cf63600fa3fdaabbe4b18916caa5835b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7SAGGQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDp1sKTA8%2B8e222MBas4Jwb%2Fj10P47EQaxNyRa%2B8MXFrQIgI8vPT5VuYy5jZbTR6v%2BpVhLmjBkm6eaUGXk1IibMdIcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWBbgvUQVMcMIBllyrcAxK9oj393oEpKE%2B6axaA44h1moTQyuVH7GQuqcs4O3GIeAT7T5NE4C5kFYX2i9J7y4q7l5Q587MG0G%2BZY1ID7DuWXavyW%2FwnHh%2FXtA9eWvlEiByPyhyFt61fL3%2FwnATu2cxxG0vwRsnFaJplFEx9mmF2UJ7JEuSYqwBzh1payTONJlnz4gbxWUAlLuZM1CVvyd4O4dyr81z0pAmjTZK4ZCk9lgWAEe11G3CYCpnxl4%2Fn4x98cQCqe6bXEJX0y3HM7aGUYC2EZdiPRqAfqw6yl9a9qAo3pzV%2BJOJNLv4Fj%2Fdbn7oh2nLQUe%2BPWlhPhvq1hMrJBX%2FRpRdbu%2F1s06y0dVjdULgkkQH%2BxS0iUiqOMRLbeT4O8abuak9x1%2BkWm4ZxTAT9ihLmd0fzLwGEaYL8%2BOIGOGojRHrFOh6kzRelrtDQKWcM2oqSYu%2FDSngDdPsEM2W99psFXX%2Bt2kKW8U95Bk4qe%2BMUyVWtbtSHPArRM8BlJfizXlCoVA1w9K1v0BfyUFlmyEWyCdwrNoXYVia5geDp8k%2B9bAqIxEk%2BCZtyJN2yTj7Xpx%2BoUZRx0U1tuf4clwiCr27TDVG7QkRwf5cbqNwwzvtd38hO9iSpNZ59A9KxJ3u0KZKcc6kIyMjOMNDShL4GOqUBWI1178ji3gEX0LGPTGqPFY64Zxbmz5M2k98fhIMcZiW2s8ILHZgeL9Om5h0hTY41yMPZzCOl7jwIvRe%2BbqJZmUyDhUOmNU2eq%2BMwoc5GhtP%2BOnzHXjvOGs%2BN%2Fra3Te1%2Bsw9Z6N96Zgk810UY6jY8KpL0D1paCcjftArYHx%2FQ25qBKvmwks8nmZOd0IB4B3TYjHW01H2PgLPrn6gUSse2LFIxrYLF&X-Amz-Signature=860b0fd852ee9d4756d3e30bdaeab058d7e4c7b6f25eabf743e8c64cedf42453&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7SAGGQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDp1sKTA8%2B8e222MBas4Jwb%2Fj10P47EQaxNyRa%2B8MXFrQIgI8vPT5VuYy5jZbTR6v%2BpVhLmjBkm6eaUGXk1IibMdIcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWBbgvUQVMcMIBllyrcAxK9oj393oEpKE%2B6axaA44h1moTQyuVH7GQuqcs4O3GIeAT7T5NE4C5kFYX2i9J7y4q7l5Q587MG0G%2BZY1ID7DuWXavyW%2FwnHh%2FXtA9eWvlEiByPyhyFt61fL3%2FwnATu2cxxG0vwRsnFaJplFEx9mmF2UJ7JEuSYqwBzh1payTONJlnz4gbxWUAlLuZM1CVvyd4O4dyr81z0pAmjTZK4ZCk9lgWAEe11G3CYCpnxl4%2Fn4x98cQCqe6bXEJX0y3HM7aGUYC2EZdiPRqAfqw6yl9a9qAo3pzV%2BJOJNLv4Fj%2Fdbn7oh2nLQUe%2BPWlhPhvq1hMrJBX%2FRpRdbu%2F1s06y0dVjdULgkkQH%2BxS0iUiqOMRLbeT4O8abuak9x1%2BkWm4ZxTAT9ihLmd0fzLwGEaYL8%2BOIGOGojRHrFOh6kzRelrtDQKWcM2oqSYu%2FDSngDdPsEM2W99psFXX%2Bt2kKW8U95Bk4qe%2BMUyVWtbtSHPArRM8BlJfizXlCoVA1w9K1v0BfyUFlmyEWyCdwrNoXYVia5geDp8k%2B9bAqIxEk%2BCZtyJN2yTj7Xpx%2BoUZRx0U1tuf4clwiCr27TDVG7QkRwf5cbqNwwzvtd38hO9iSpNZ59A9KxJ3u0KZKcc6kIyMjOMNDShL4GOqUBWI1178ji3gEX0LGPTGqPFY64Zxbmz5M2k98fhIMcZiW2s8ILHZgeL9Om5h0hTY41yMPZzCOl7jwIvRe%2BbqJZmUyDhUOmNU2eq%2BMwoc5GhtP%2BOnzHXjvOGs%2BN%2Fra3Te1%2Bsw9Z6N96Zgk810UY6jY8KpL0D1paCcjftArYHx%2FQ25qBKvmwks8nmZOd0IB4B3TYjHW01H2PgLPrn6gUSse2LFIxrYLF&X-Amz-Signature=2790463f93eed43347b7c78ca7e4026982b10f3fc8a787a8541f136d533b14d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
