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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRUNQQEE%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZmSfOK7ssdhOvT1ycadbCTAwfkPWC0qMs%2BSAr01H5iAiEA16TboV17YRQ9fqeYWdeLcY01i8xwDKBcTxLPOmlsksoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHqJQ2txoN8E3eITxircA8nZ9cu%2FPtJjpwX9LyoPglbcsmE5%2BPLZ7TMsz5RIKcbQifvLohwz1ir2W7JSQyNVIihR9NRSkI9mztB9%2BDs%2BzukWxytbjdAhqY%2FEWbRGNDnkxUFMUFcTFLDXxPvAqXpFrnL7icwFpuLFO3bHYdvisXHEYlJm%2BX7aQAeRWNJ1M3J4HJIo1hJ1dhNy66sztgAMrvHNmt0arpeTVoRO92MytmyJ0kZAFvqQbBJn6iuepemD5qFid0%2F1pcLcS1YWBMHeN6g8h9oCR%2FVPp5ZMB4t6Zwj4PBnue2iNvClUXirjaiMmjHVJDSCVvJ5sSHZD52OSmC%2BKEflmgiwlB7BfbGk5ZvB5ms%2BHbWL74O5No1gpDxcO%2BNU1IR931spKgYXO0PtdjD1oUPeahYgKk7clKQ8zS3b1swYYHoLMgy0fI4GazT3Y2a3ZzU%2B9li59tTZIwLntxEE84RbMjAorbDHIuUCjEFydsSzLpsQKf1e%2F5fuuxKmP5iaRm3oRtcF1Zvuhoalkkb0kvAyZnesBJ6zaehzEi3P0CUG9pNDvJea6QQ%2FXDuGjPDLlqWGorx5D9hEJXD2Igop0lDdVnzyIxAW2Dqp4Jt2QI%2Fv8j9NWdFhQJexJIEwplj%2BFpiS9jPIb6GHvMK6I7M4GOqUBHMCCqHVdsQvyME7%2FXNBeptslaiaR4NsZOUlsGd%2BpjxsOxcIv%2Bm7mVxx2VRtUlbv6EOpTw%2FohesX0f%2FdPIQjmydWaUrCGGikbZWgLpW8tPTuI3YYIAt8kfBvqTQ0JlluvEv6PyzbFRBcCSRa%2Fe3URpvTjC49m5sGkmatlmUFcSBYa2Z7dHin8N9uYhJw77doi3Eo0pRsASDsURE4TinJ1TYWYnewM&X-Amz-Signature=fb646e36204bdf0e65705a45e726e1728aee56e50dc361e236065f50fc6e487f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRUNQQEE%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZmSfOK7ssdhOvT1ycadbCTAwfkPWC0qMs%2BSAr01H5iAiEA16TboV17YRQ9fqeYWdeLcY01i8xwDKBcTxLPOmlsksoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHqJQ2txoN8E3eITxircA8nZ9cu%2FPtJjpwX9LyoPglbcsmE5%2BPLZ7TMsz5RIKcbQifvLohwz1ir2W7JSQyNVIihR9NRSkI9mztB9%2BDs%2BzukWxytbjdAhqY%2FEWbRGNDnkxUFMUFcTFLDXxPvAqXpFrnL7icwFpuLFO3bHYdvisXHEYlJm%2BX7aQAeRWNJ1M3J4HJIo1hJ1dhNy66sztgAMrvHNmt0arpeTVoRO92MytmyJ0kZAFvqQbBJn6iuepemD5qFid0%2F1pcLcS1YWBMHeN6g8h9oCR%2FVPp5ZMB4t6Zwj4PBnue2iNvClUXirjaiMmjHVJDSCVvJ5sSHZD52OSmC%2BKEflmgiwlB7BfbGk5ZvB5ms%2BHbWL74O5No1gpDxcO%2BNU1IR931spKgYXO0PtdjD1oUPeahYgKk7clKQ8zS3b1swYYHoLMgy0fI4GazT3Y2a3ZzU%2B9li59tTZIwLntxEE84RbMjAorbDHIuUCjEFydsSzLpsQKf1e%2F5fuuxKmP5iaRm3oRtcF1Zvuhoalkkb0kvAyZnesBJ6zaehzEi3P0CUG9pNDvJea6QQ%2FXDuGjPDLlqWGorx5D9hEJXD2Igop0lDdVnzyIxAW2Dqp4Jt2QI%2Fv8j9NWdFhQJexJIEwplj%2BFpiS9jPIb6GHvMK6I7M4GOqUBHMCCqHVdsQvyME7%2FXNBeptslaiaR4NsZOUlsGd%2BpjxsOxcIv%2Bm7mVxx2VRtUlbv6EOpTw%2FohesX0f%2FdPIQjmydWaUrCGGikbZWgLpW8tPTuI3YYIAt8kfBvqTQ0JlluvEv6PyzbFRBcCSRa%2Fe3URpvTjC49m5sGkmatlmUFcSBYa2Z7dHin8N9uYhJw77doi3Eo0pRsASDsURE4TinJ1TYWYnewM&X-Amz-Signature=22b91ab0c5099d20f9310624fa9477a12a78fc90bfe26b5c2384815bf6577566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRUNQQEE%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZmSfOK7ssdhOvT1ycadbCTAwfkPWC0qMs%2BSAr01H5iAiEA16TboV17YRQ9fqeYWdeLcY01i8xwDKBcTxLPOmlsksoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHqJQ2txoN8E3eITxircA8nZ9cu%2FPtJjpwX9LyoPglbcsmE5%2BPLZ7TMsz5RIKcbQifvLohwz1ir2W7JSQyNVIihR9NRSkI9mztB9%2BDs%2BzukWxytbjdAhqY%2FEWbRGNDnkxUFMUFcTFLDXxPvAqXpFrnL7icwFpuLFO3bHYdvisXHEYlJm%2BX7aQAeRWNJ1M3J4HJIo1hJ1dhNy66sztgAMrvHNmt0arpeTVoRO92MytmyJ0kZAFvqQbBJn6iuepemD5qFid0%2F1pcLcS1YWBMHeN6g8h9oCR%2FVPp5ZMB4t6Zwj4PBnue2iNvClUXirjaiMmjHVJDSCVvJ5sSHZD52OSmC%2BKEflmgiwlB7BfbGk5ZvB5ms%2BHbWL74O5No1gpDxcO%2BNU1IR931spKgYXO0PtdjD1oUPeahYgKk7clKQ8zS3b1swYYHoLMgy0fI4GazT3Y2a3ZzU%2B9li59tTZIwLntxEE84RbMjAorbDHIuUCjEFydsSzLpsQKf1e%2F5fuuxKmP5iaRm3oRtcF1Zvuhoalkkb0kvAyZnesBJ6zaehzEi3P0CUG9pNDvJea6QQ%2FXDuGjPDLlqWGorx5D9hEJXD2Igop0lDdVnzyIxAW2Dqp4Jt2QI%2Fv8j9NWdFhQJexJIEwplj%2BFpiS9jPIb6GHvMK6I7M4GOqUBHMCCqHVdsQvyME7%2FXNBeptslaiaR4NsZOUlsGd%2BpjxsOxcIv%2Bm7mVxx2VRtUlbv6EOpTw%2FohesX0f%2FdPIQjmydWaUrCGGikbZWgLpW8tPTuI3YYIAt8kfBvqTQ0JlluvEv6PyzbFRBcCSRa%2Fe3URpvTjC49m5sGkmatlmUFcSBYa2Z7dHin8N9uYhJw77doi3Eo0pRsASDsURE4TinJ1TYWYnewM&X-Amz-Signature=4bcc1f730edd9d6adbb460fa8e4d1d5310a55399e4eda2efae8b1e151d5eb17f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRUNQQEE%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZmSfOK7ssdhOvT1ycadbCTAwfkPWC0qMs%2BSAr01H5iAiEA16TboV17YRQ9fqeYWdeLcY01i8xwDKBcTxLPOmlsksoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHqJQ2txoN8E3eITxircA8nZ9cu%2FPtJjpwX9LyoPglbcsmE5%2BPLZ7TMsz5RIKcbQifvLohwz1ir2W7JSQyNVIihR9NRSkI9mztB9%2BDs%2BzukWxytbjdAhqY%2FEWbRGNDnkxUFMUFcTFLDXxPvAqXpFrnL7icwFpuLFO3bHYdvisXHEYlJm%2BX7aQAeRWNJ1M3J4HJIo1hJ1dhNy66sztgAMrvHNmt0arpeTVoRO92MytmyJ0kZAFvqQbBJn6iuepemD5qFid0%2F1pcLcS1YWBMHeN6g8h9oCR%2FVPp5ZMB4t6Zwj4PBnue2iNvClUXirjaiMmjHVJDSCVvJ5sSHZD52OSmC%2BKEflmgiwlB7BfbGk5ZvB5ms%2BHbWL74O5No1gpDxcO%2BNU1IR931spKgYXO0PtdjD1oUPeahYgKk7clKQ8zS3b1swYYHoLMgy0fI4GazT3Y2a3ZzU%2B9li59tTZIwLntxEE84RbMjAorbDHIuUCjEFydsSzLpsQKf1e%2F5fuuxKmP5iaRm3oRtcF1Zvuhoalkkb0kvAyZnesBJ6zaehzEi3P0CUG9pNDvJea6QQ%2FXDuGjPDLlqWGorx5D9hEJXD2Igop0lDdVnzyIxAW2Dqp4Jt2QI%2Fv8j9NWdFhQJexJIEwplj%2BFpiS9jPIb6GHvMK6I7M4GOqUBHMCCqHVdsQvyME7%2FXNBeptslaiaR4NsZOUlsGd%2BpjxsOxcIv%2Bm7mVxx2VRtUlbv6EOpTw%2FohesX0f%2FdPIQjmydWaUrCGGikbZWgLpW8tPTuI3YYIAt8kfBvqTQ0JlluvEv6PyzbFRBcCSRa%2Fe3URpvTjC49m5sGkmatlmUFcSBYa2Z7dHin8N9uYhJw77doi3Eo0pRsASDsURE4TinJ1TYWYnewM&X-Amz-Signature=df072d090183b76e5316e70eab34de3275ddff2375d94efd51a6055d33b46569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRUNQQEE%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZmSfOK7ssdhOvT1ycadbCTAwfkPWC0qMs%2BSAr01H5iAiEA16TboV17YRQ9fqeYWdeLcY01i8xwDKBcTxLPOmlsksoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHqJQ2txoN8E3eITxircA8nZ9cu%2FPtJjpwX9LyoPglbcsmE5%2BPLZ7TMsz5RIKcbQifvLohwz1ir2W7JSQyNVIihR9NRSkI9mztB9%2BDs%2BzukWxytbjdAhqY%2FEWbRGNDnkxUFMUFcTFLDXxPvAqXpFrnL7icwFpuLFO3bHYdvisXHEYlJm%2BX7aQAeRWNJ1M3J4HJIo1hJ1dhNy66sztgAMrvHNmt0arpeTVoRO92MytmyJ0kZAFvqQbBJn6iuepemD5qFid0%2F1pcLcS1YWBMHeN6g8h9oCR%2FVPp5ZMB4t6Zwj4PBnue2iNvClUXirjaiMmjHVJDSCVvJ5sSHZD52OSmC%2BKEflmgiwlB7BfbGk5ZvB5ms%2BHbWL74O5No1gpDxcO%2BNU1IR931spKgYXO0PtdjD1oUPeahYgKk7clKQ8zS3b1swYYHoLMgy0fI4GazT3Y2a3ZzU%2B9li59tTZIwLntxEE84RbMjAorbDHIuUCjEFydsSzLpsQKf1e%2F5fuuxKmP5iaRm3oRtcF1Zvuhoalkkb0kvAyZnesBJ6zaehzEi3P0CUG9pNDvJea6QQ%2FXDuGjPDLlqWGorx5D9hEJXD2Igop0lDdVnzyIxAW2Dqp4Jt2QI%2Fv8j9NWdFhQJexJIEwplj%2BFpiS9jPIb6GHvMK6I7M4GOqUBHMCCqHVdsQvyME7%2FXNBeptslaiaR4NsZOUlsGd%2BpjxsOxcIv%2Bm7mVxx2VRtUlbv6EOpTw%2FohesX0f%2FdPIQjmydWaUrCGGikbZWgLpW8tPTuI3YYIAt8kfBvqTQ0JlluvEv6PyzbFRBcCSRa%2Fe3URpvTjC49m5sGkmatlmUFcSBYa2Z7dHin8N9uYhJw77doi3Eo0pRsASDsURE4TinJ1TYWYnewM&X-Amz-Signature=c0d7fcd50b4d67b33ab850c09abada3ccd5df7132ed32017cc948471cfd422d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
