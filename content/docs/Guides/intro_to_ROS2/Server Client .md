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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3NVY34%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLUFCEGAsbUqFAR5LHMZoWQtxLX%2FsUdFPc%2Bk%2Bh07gRBAIgLe4AmiHia%2Bm6b2gegdZC7ad7ewq%2Bitdi%2F0y85sqTsSsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDA6sQ3crompgMe%2FI5yrcAxtzGpekySUSLLVLq5UlhZ0Sc476phOAwLJFm3CrFSZfC7K9IVAK%2B0OZYx%2FIVq4NrtMny6o2VBzvfEz2hwMdg9ylPaX6Phgo2Yfvvh3jN8P7nAWnCq9AXKnpUaoR%2BTlvTbj4yP65rKngysW6HQ5Zopc4FkslVg3UzmxiEUZvPJlT1zDQZHZTK%2FteXd%2B%2F5mUu%2FBeVk%2BUeyyuOHULHuJ%2B4TnbO51eOlvMxjvVqFZeUqTYBL3MXTi6sZJEzgAGFzuC0zVl5BlzRh7r6S9%2BsAv4B3TtMXuG64YHIxOhxGpDsg9rHJSXHjsJ%2FTQOC7gzV2806Umm73vLACXgxnt7r0%2Bt85fG%2BEExdMWPOzitwhhxa34s3oooThIUT5OuG%2BwWkWgzeVbCf0OKHTdx5XFgFw3AzlLe0OHlL22LNIlfsGQDQFY3UimGJBz5zIsTwDvYXbE%2BVcrEElJM8SHCJzBM5n%2BIzuEzmOkhBcDvdq7lRA3tF6Oyumfhabr39Lo3eMEFlpAgWDCEncogok4yElITvC3nsLqdKok9A7zP0bxurf0l647ZtD6kQ%2BO1AzQC5TwKNn0ErNZw7IKdhK6vzqB%2FshhiuOkWKNxD6F2ul%2FIdvLxxu015E4B958bRNiKqr0y4BMJzW%2Br8GOqUBJiCFcNyrCupQUGdPDCSTB0%2FjewhI00XHjGAW59O3yjm0pt8HvpYwG%2BuvVrZT7wFTNuLbCGAEpa1cWM4zpdwADgGUqK3lhVMBejelnLql2x%2B9K3exrewPiZH62g5dpLfP%2FEm0%2FlZ3TmgsXknd%2Fsa9dXwtLjE418QB%2BOu2Dk69FY0e87mhaQz%2FRuBxS7y1IhXJKjiLcVDM%2FhklUi8kbh%2BM%2FLUuZYvu&X-Amz-Signature=14bac2d0dbd50df37f377928de292b25f5b86cb3022425c40d55db120c5e26a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3NVY34%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLUFCEGAsbUqFAR5LHMZoWQtxLX%2FsUdFPc%2Bk%2Bh07gRBAIgLe4AmiHia%2Bm6b2gegdZC7ad7ewq%2Bitdi%2F0y85sqTsSsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDA6sQ3crompgMe%2FI5yrcAxtzGpekySUSLLVLq5UlhZ0Sc476phOAwLJFm3CrFSZfC7K9IVAK%2B0OZYx%2FIVq4NrtMny6o2VBzvfEz2hwMdg9ylPaX6Phgo2Yfvvh3jN8P7nAWnCq9AXKnpUaoR%2BTlvTbj4yP65rKngysW6HQ5Zopc4FkslVg3UzmxiEUZvPJlT1zDQZHZTK%2FteXd%2B%2F5mUu%2FBeVk%2BUeyyuOHULHuJ%2B4TnbO51eOlvMxjvVqFZeUqTYBL3MXTi6sZJEzgAGFzuC0zVl5BlzRh7r6S9%2BsAv4B3TtMXuG64YHIxOhxGpDsg9rHJSXHjsJ%2FTQOC7gzV2806Umm73vLACXgxnt7r0%2Bt85fG%2BEExdMWPOzitwhhxa34s3oooThIUT5OuG%2BwWkWgzeVbCf0OKHTdx5XFgFw3AzlLe0OHlL22LNIlfsGQDQFY3UimGJBz5zIsTwDvYXbE%2BVcrEElJM8SHCJzBM5n%2BIzuEzmOkhBcDvdq7lRA3tF6Oyumfhabr39Lo3eMEFlpAgWDCEncogok4yElITvC3nsLqdKok9A7zP0bxurf0l647ZtD6kQ%2BO1AzQC5TwKNn0ErNZw7IKdhK6vzqB%2FshhiuOkWKNxD6F2ul%2FIdvLxxu015E4B958bRNiKqr0y4BMJzW%2Br8GOqUBJiCFcNyrCupQUGdPDCSTB0%2FjewhI00XHjGAW59O3yjm0pt8HvpYwG%2BuvVrZT7wFTNuLbCGAEpa1cWM4zpdwADgGUqK3lhVMBejelnLql2x%2B9K3exrewPiZH62g5dpLfP%2FEm0%2FlZ3TmgsXknd%2Fsa9dXwtLjE418QB%2BOu2Dk69FY0e87mhaQz%2FRuBxS7y1IhXJKjiLcVDM%2FhklUi8kbh%2BM%2FLUuZYvu&X-Amz-Signature=e4e922eb3203216515d979aa4d2cc9dbb843c365f617e99bfe9d8c0a9737cd04&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3NVY34%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLUFCEGAsbUqFAR5LHMZoWQtxLX%2FsUdFPc%2Bk%2Bh07gRBAIgLe4AmiHia%2Bm6b2gegdZC7ad7ewq%2Bitdi%2F0y85sqTsSsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDA6sQ3crompgMe%2FI5yrcAxtzGpekySUSLLVLq5UlhZ0Sc476phOAwLJFm3CrFSZfC7K9IVAK%2B0OZYx%2FIVq4NrtMny6o2VBzvfEz2hwMdg9ylPaX6Phgo2Yfvvh3jN8P7nAWnCq9AXKnpUaoR%2BTlvTbj4yP65rKngysW6HQ5Zopc4FkslVg3UzmxiEUZvPJlT1zDQZHZTK%2FteXd%2B%2F5mUu%2FBeVk%2BUeyyuOHULHuJ%2B4TnbO51eOlvMxjvVqFZeUqTYBL3MXTi6sZJEzgAGFzuC0zVl5BlzRh7r6S9%2BsAv4B3TtMXuG64YHIxOhxGpDsg9rHJSXHjsJ%2FTQOC7gzV2806Umm73vLACXgxnt7r0%2Bt85fG%2BEExdMWPOzitwhhxa34s3oooThIUT5OuG%2BwWkWgzeVbCf0OKHTdx5XFgFw3AzlLe0OHlL22LNIlfsGQDQFY3UimGJBz5zIsTwDvYXbE%2BVcrEElJM8SHCJzBM5n%2BIzuEzmOkhBcDvdq7lRA3tF6Oyumfhabr39Lo3eMEFlpAgWDCEncogok4yElITvC3nsLqdKok9A7zP0bxurf0l647ZtD6kQ%2BO1AzQC5TwKNn0ErNZw7IKdhK6vzqB%2FshhiuOkWKNxD6F2ul%2FIdvLxxu015E4B958bRNiKqr0y4BMJzW%2Br8GOqUBJiCFcNyrCupQUGdPDCSTB0%2FjewhI00XHjGAW59O3yjm0pt8HvpYwG%2BuvVrZT7wFTNuLbCGAEpa1cWM4zpdwADgGUqK3lhVMBejelnLql2x%2B9K3exrewPiZH62g5dpLfP%2FEm0%2FlZ3TmgsXknd%2Fsa9dXwtLjE418QB%2BOu2Dk69FY0e87mhaQz%2FRuBxS7y1IhXJKjiLcVDM%2FhklUi8kbh%2BM%2FLUuZYvu&X-Amz-Signature=26cf870bb5306d1027d3b9ff350c307249397add3995104df2454635e2235f42&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3NVY34%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLUFCEGAsbUqFAR5LHMZoWQtxLX%2FsUdFPc%2Bk%2Bh07gRBAIgLe4AmiHia%2Bm6b2gegdZC7ad7ewq%2Bitdi%2F0y85sqTsSsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDA6sQ3crompgMe%2FI5yrcAxtzGpekySUSLLVLq5UlhZ0Sc476phOAwLJFm3CrFSZfC7K9IVAK%2B0OZYx%2FIVq4NrtMny6o2VBzvfEz2hwMdg9ylPaX6Phgo2Yfvvh3jN8P7nAWnCq9AXKnpUaoR%2BTlvTbj4yP65rKngysW6HQ5Zopc4FkslVg3UzmxiEUZvPJlT1zDQZHZTK%2FteXd%2B%2F5mUu%2FBeVk%2BUeyyuOHULHuJ%2B4TnbO51eOlvMxjvVqFZeUqTYBL3MXTi6sZJEzgAGFzuC0zVl5BlzRh7r6S9%2BsAv4B3TtMXuG64YHIxOhxGpDsg9rHJSXHjsJ%2FTQOC7gzV2806Umm73vLACXgxnt7r0%2Bt85fG%2BEExdMWPOzitwhhxa34s3oooThIUT5OuG%2BwWkWgzeVbCf0OKHTdx5XFgFw3AzlLe0OHlL22LNIlfsGQDQFY3UimGJBz5zIsTwDvYXbE%2BVcrEElJM8SHCJzBM5n%2BIzuEzmOkhBcDvdq7lRA3tF6Oyumfhabr39Lo3eMEFlpAgWDCEncogok4yElITvC3nsLqdKok9A7zP0bxurf0l647ZtD6kQ%2BO1AzQC5TwKNn0ErNZw7IKdhK6vzqB%2FshhiuOkWKNxD6F2ul%2FIdvLxxu015E4B958bRNiKqr0y4BMJzW%2Br8GOqUBJiCFcNyrCupQUGdPDCSTB0%2FjewhI00XHjGAW59O3yjm0pt8HvpYwG%2BuvVrZT7wFTNuLbCGAEpa1cWM4zpdwADgGUqK3lhVMBejelnLql2x%2B9K3exrewPiZH62g5dpLfP%2FEm0%2FlZ3TmgsXknd%2Fsa9dXwtLjE418QB%2BOu2Dk69FY0e87mhaQz%2FRuBxS7y1IhXJKjiLcVDM%2FhklUi8kbh%2BM%2FLUuZYvu&X-Amz-Signature=9b4c7a87e52d34312bf1b7441afc815592395fdc7dc3e826eae2e806c14f7808&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3NVY34%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLUFCEGAsbUqFAR5LHMZoWQtxLX%2FsUdFPc%2Bk%2Bh07gRBAIgLe4AmiHia%2Bm6b2gegdZC7ad7ewq%2Bitdi%2F0y85sqTsSsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDA6sQ3crompgMe%2FI5yrcAxtzGpekySUSLLVLq5UlhZ0Sc476phOAwLJFm3CrFSZfC7K9IVAK%2B0OZYx%2FIVq4NrtMny6o2VBzvfEz2hwMdg9ylPaX6Phgo2Yfvvh3jN8P7nAWnCq9AXKnpUaoR%2BTlvTbj4yP65rKngysW6HQ5Zopc4FkslVg3UzmxiEUZvPJlT1zDQZHZTK%2FteXd%2B%2F5mUu%2FBeVk%2BUeyyuOHULHuJ%2B4TnbO51eOlvMxjvVqFZeUqTYBL3MXTi6sZJEzgAGFzuC0zVl5BlzRh7r6S9%2BsAv4B3TtMXuG64YHIxOhxGpDsg9rHJSXHjsJ%2FTQOC7gzV2806Umm73vLACXgxnt7r0%2Bt85fG%2BEExdMWPOzitwhhxa34s3oooThIUT5OuG%2BwWkWgzeVbCf0OKHTdx5XFgFw3AzlLe0OHlL22LNIlfsGQDQFY3UimGJBz5zIsTwDvYXbE%2BVcrEElJM8SHCJzBM5n%2BIzuEzmOkhBcDvdq7lRA3tF6Oyumfhabr39Lo3eMEFlpAgWDCEncogok4yElITvC3nsLqdKok9A7zP0bxurf0l647ZtD6kQ%2BO1AzQC5TwKNn0ErNZw7IKdhK6vzqB%2FshhiuOkWKNxD6F2ul%2FIdvLxxu015E4B958bRNiKqr0y4BMJzW%2Br8GOqUBJiCFcNyrCupQUGdPDCSTB0%2FjewhI00XHjGAW59O3yjm0pt8HvpYwG%2BuvVrZT7wFTNuLbCGAEpa1cWM4zpdwADgGUqK3lhVMBejelnLql2x%2B9K3exrewPiZH62g5dpLfP%2FEm0%2FlZ3TmgsXknd%2Fsa9dXwtLjE418QB%2BOu2Dk69FY0e87mhaQz%2FRuBxS7y1IhXJKjiLcVDM%2FhklUi8kbh%2BM%2FLUuZYvu&X-Amz-Signature=7c1b7d8b59794fc7d5960d6eb819412c3a38b24deab6d48fddf510ec4982f22d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
