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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABTHJ36%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6LFlpRa1ay16ea4nxbwvtLj6UO9skMSCQwwALSGMY9AiAq4P4%2F2eR3bb5vDuU8wQzus0r3I9DViqSkBL0nDphFVCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn514YGpqgAsXsy3aKtwDr%2FdP6lz1Ooq06bqBd5cylbK%2Frsv64RoGgZ0mk9pRX2jcGWFXNqiemFxnuTuu2cqexIHtIlWO13lTGvtXJZougsT02rqxcHTVkLKvnAUmrlowP8h5SO8H96k9ndvncskXIw6PtC5dgWlxlAu5LvpIRHomNHnJFFuVf83sKKdqDJVyvnyWqGHMffSP5LpJbJcH86Hs2rMPkKdaG9TV6%2BkrRzmnI0ZE5tt58evswLYGpgkAHdSqQMSwa031PozmN2tmgudd5v89etmoICSBgpOZAfoZuUpQnYdMXlwG5XzY41rRtK43o2PGUVTbpDIvjybAWBXhkFdtKSyKqA6MbTeJKq3czcrIZOF080X9zT7ENT8h%2BBy4Sq9mSE01bMKwuNn9Z3N6IeXvFvOLVFpbFwzuFjvJ1yf2vImfpQppVpKxd9gBVufkBT0NW%2BCBuHN5%2FBaFQse5aat8gcQ6TZDbobfQwz4Cpox83YbsbwWu7hq9M4v7nMmCgHeZfsclkS13EDRiQf6IFfGpfxRIvGYN%2BiTq%2Bk3IoCP9tw%2F6LXxmJspHWBAXFAioCQw%2F7s%2FNtXE0wj3K65YvDEmanXvJyYNanoP7T9mp%2F%2BbPOogEwwZLCZa0NhYmQnpidjoN6zsNyuAwtMawwQY6pgGAto2sc7icx%2BzdLaI6YLAnsryd8oa7VDULmh9F2Nr3XR827ndFWiIPgl%2Ft7Ilijm3%2BygUDXfTgU99dCaVSHNiWgKZxJX8P0jH3UFjS%2Bu7URAKhPK8LRgmRjq7bdn1Z03Cw1wmGM5YipNUeOT4qLJpFlMhsEOM1KWdwZ%2FHlZ75eUAseN3QkG3YjrJOJwEpVuXIpYhsVdBf12i0Eujon3ehfYjupj2xp&X-Amz-Signature=d14af4bdde972c9a2438d586106c3424fec9008deb96e41c4ce3a05672e5e044&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABTHJ36%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6LFlpRa1ay16ea4nxbwvtLj6UO9skMSCQwwALSGMY9AiAq4P4%2F2eR3bb5vDuU8wQzus0r3I9DViqSkBL0nDphFVCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn514YGpqgAsXsy3aKtwDr%2FdP6lz1Ooq06bqBd5cylbK%2Frsv64RoGgZ0mk9pRX2jcGWFXNqiemFxnuTuu2cqexIHtIlWO13lTGvtXJZougsT02rqxcHTVkLKvnAUmrlowP8h5SO8H96k9ndvncskXIw6PtC5dgWlxlAu5LvpIRHomNHnJFFuVf83sKKdqDJVyvnyWqGHMffSP5LpJbJcH86Hs2rMPkKdaG9TV6%2BkrRzmnI0ZE5tt58evswLYGpgkAHdSqQMSwa031PozmN2tmgudd5v89etmoICSBgpOZAfoZuUpQnYdMXlwG5XzY41rRtK43o2PGUVTbpDIvjybAWBXhkFdtKSyKqA6MbTeJKq3czcrIZOF080X9zT7ENT8h%2BBy4Sq9mSE01bMKwuNn9Z3N6IeXvFvOLVFpbFwzuFjvJ1yf2vImfpQppVpKxd9gBVufkBT0NW%2BCBuHN5%2FBaFQse5aat8gcQ6TZDbobfQwz4Cpox83YbsbwWu7hq9M4v7nMmCgHeZfsclkS13EDRiQf6IFfGpfxRIvGYN%2BiTq%2Bk3IoCP9tw%2F6LXxmJspHWBAXFAioCQw%2F7s%2FNtXE0wj3K65YvDEmanXvJyYNanoP7T9mp%2F%2BbPOogEwwZLCZa0NhYmQnpidjoN6zsNyuAwtMawwQY6pgGAto2sc7icx%2BzdLaI6YLAnsryd8oa7VDULmh9F2Nr3XR827ndFWiIPgl%2Ft7Ilijm3%2BygUDXfTgU99dCaVSHNiWgKZxJX8P0jH3UFjS%2Bu7URAKhPK8LRgmRjq7bdn1Z03Cw1wmGM5YipNUeOT4qLJpFlMhsEOM1KWdwZ%2FHlZ75eUAseN3QkG3YjrJOJwEpVuXIpYhsVdBf12i0Eujon3ehfYjupj2xp&X-Amz-Signature=d76dafa1443e1a1dd9e057b3d35190e68b545cea1d09d44a612ef6e292bc2c76&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABTHJ36%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6LFlpRa1ay16ea4nxbwvtLj6UO9skMSCQwwALSGMY9AiAq4P4%2F2eR3bb5vDuU8wQzus0r3I9DViqSkBL0nDphFVCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn514YGpqgAsXsy3aKtwDr%2FdP6lz1Ooq06bqBd5cylbK%2Frsv64RoGgZ0mk9pRX2jcGWFXNqiemFxnuTuu2cqexIHtIlWO13lTGvtXJZougsT02rqxcHTVkLKvnAUmrlowP8h5SO8H96k9ndvncskXIw6PtC5dgWlxlAu5LvpIRHomNHnJFFuVf83sKKdqDJVyvnyWqGHMffSP5LpJbJcH86Hs2rMPkKdaG9TV6%2BkrRzmnI0ZE5tt58evswLYGpgkAHdSqQMSwa031PozmN2tmgudd5v89etmoICSBgpOZAfoZuUpQnYdMXlwG5XzY41rRtK43o2PGUVTbpDIvjybAWBXhkFdtKSyKqA6MbTeJKq3czcrIZOF080X9zT7ENT8h%2BBy4Sq9mSE01bMKwuNn9Z3N6IeXvFvOLVFpbFwzuFjvJ1yf2vImfpQppVpKxd9gBVufkBT0NW%2BCBuHN5%2FBaFQse5aat8gcQ6TZDbobfQwz4Cpox83YbsbwWu7hq9M4v7nMmCgHeZfsclkS13EDRiQf6IFfGpfxRIvGYN%2BiTq%2Bk3IoCP9tw%2F6LXxmJspHWBAXFAioCQw%2F7s%2FNtXE0wj3K65YvDEmanXvJyYNanoP7T9mp%2F%2BbPOogEwwZLCZa0NhYmQnpidjoN6zsNyuAwtMawwQY6pgGAto2sc7icx%2BzdLaI6YLAnsryd8oa7VDULmh9F2Nr3XR827ndFWiIPgl%2Ft7Ilijm3%2BygUDXfTgU99dCaVSHNiWgKZxJX8P0jH3UFjS%2Bu7URAKhPK8LRgmRjq7bdn1Z03Cw1wmGM5YipNUeOT4qLJpFlMhsEOM1KWdwZ%2FHlZ75eUAseN3QkG3YjrJOJwEpVuXIpYhsVdBf12i0Eujon3ehfYjupj2xp&X-Amz-Signature=c7a222a4d76f57f6b9c2b496eaabaad60fe138109917ba5f67d9ff590379b716&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABTHJ36%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6LFlpRa1ay16ea4nxbwvtLj6UO9skMSCQwwALSGMY9AiAq4P4%2F2eR3bb5vDuU8wQzus0r3I9DViqSkBL0nDphFVCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn514YGpqgAsXsy3aKtwDr%2FdP6lz1Ooq06bqBd5cylbK%2Frsv64RoGgZ0mk9pRX2jcGWFXNqiemFxnuTuu2cqexIHtIlWO13lTGvtXJZougsT02rqxcHTVkLKvnAUmrlowP8h5SO8H96k9ndvncskXIw6PtC5dgWlxlAu5LvpIRHomNHnJFFuVf83sKKdqDJVyvnyWqGHMffSP5LpJbJcH86Hs2rMPkKdaG9TV6%2BkrRzmnI0ZE5tt58evswLYGpgkAHdSqQMSwa031PozmN2tmgudd5v89etmoICSBgpOZAfoZuUpQnYdMXlwG5XzY41rRtK43o2PGUVTbpDIvjybAWBXhkFdtKSyKqA6MbTeJKq3czcrIZOF080X9zT7ENT8h%2BBy4Sq9mSE01bMKwuNn9Z3N6IeXvFvOLVFpbFwzuFjvJ1yf2vImfpQppVpKxd9gBVufkBT0NW%2BCBuHN5%2FBaFQse5aat8gcQ6TZDbobfQwz4Cpox83YbsbwWu7hq9M4v7nMmCgHeZfsclkS13EDRiQf6IFfGpfxRIvGYN%2BiTq%2Bk3IoCP9tw%2F6LXxmJspHWBAXFAioCQw%2F7s%2FNtXE0wj3K65YvDEmanXvJyYNanoP7T9mp%2F%2BbPOogEwwZLCZa0NhYmQnpidjoN6zsNyuAwtMawwQY6pgGAto2sc7icx%2BzdLaI6YLAnsryd8oa7VDULmh9F2Nr3XR827ndFWiIPgl%2Ft7Ilijm3%2BygUDXfTgU99dCaVSHNiWgKZxJX8P0jH3UFjS%2Bu7URAKhPK8LRgmRjq7bdn1Z03Cw1wmGM5YipNUeOT4qLJpFlMhsEOM1KWdwZ%2FHlZ75eUAseN3QkG3YjrJOJwEpVuXIpYhsVdBf12i0Eujon3ehfYjupj2xp&X-Amz-Signature=f9fe4fa72dedcc059598a30edbab988068e01797cd1b91094dd69788970088a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABTHJ36%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6LFlpRa1ay16ea4nxbwvtLj6UO9skMSCQwwALSGMY9AiAq4P4%2F2eR3bb5vDuU8wQzus0r3I9DViqSkBL0nDphFVCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn514YGpqgAsXsy3aKtwDr%2FdP6lz1Ooq06bqBd5cylbK%2Frsv64RoGgZ0mk9pRX2jcGWFXNqiemFxnuTuu2cqexIHtIlWO13lTGvtXJZougsT02rqxcHTVkLKvnAUmrlowP8h5SO8H96k9ndvncskXIw6PtC5dgWlxlAu5LvpIRHomNHnJFFuVf83sKKdqDJVyvnyWqGHMffSP5LpJbJcH86Hs2rMPkKdaG9TV6%2BkrRzmnI0ZE5tt58evswLYGpgkAHdSqQMSwa031PozmN2tmgudd5v89etmoICSBgpOZAfoZuUpQnYdMXlwG5XzY41rRtK43o2PGUVTbpDIvjybAWBXhkFdtKSyKqA6MbTeJKq3czcrIZOF080X9zT7ENT8h%2BBy4Sq9mSE01bMKwuNn9Z3N6IeXvFvOLVFpbFwzuFjvJ1yf2vImfpQppVpKxd9gBVufkBT0NW%2BCBuHN5%2FBaFQse5aat8gcQ6TZDbobfQwz4Cpox83YbsbwWu7hq9M4v7nMmCgHeZfsclkS13EDRiQf6IFfGpfxRIvGYN%2BiTq%2Bk3IoCP9tw%2F6LXxmJspHWBAXFAioCQw%2F7s%2FNtXE0wj3K65YvDEmanXvJyYNanoP7T9mp%2F%2BbPOogEwwZLCZa0NhYmQnpidjoN6zsNyuAwtMawwQY6pgGAto2sc7icx%2BzdLaI6YLAnsryd8oa7VDULmh9F2Nr3XR827ndFWiIPgl%2Ft7Ilijm3%2BygUDXfTgU99dCaVSHNiWgKZxJX8P0jH3UFjS%2Bu7URAKhPK8LRgmRjq7bdn1Z03Cw1wmGM5YipNUeOT4qLJpFlMhsEOM1KWdwZ%2FHlZ75eUAseN3QkG3YjrJOJwEpVuXIpYhsVdBf12i0Eujon3ehfYjupj2xp&X-Amz-Signature=1c33cb88a8f364eef5e165ff52886aba17d9be87c06a9a92ae84b560a2e8b993&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
