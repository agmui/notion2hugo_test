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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCKV5Y5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIBveTIX3eGT%2FlQ9pyiUisz7kZIGPjX1TK0dm1fWepLuxAiAj6FV6Gj%2FKoLGniT8qsff84lLJe9Nbuvzqim6UVUhPbyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM6rm%2BNJp1CjdTN%2FuNKtwDcBdGUgeei5GrrfyizQ3J%2BaY6DDDF6nqijSxXKxVbbyHM1NEXPxkurIYDYff3fNgNqNcXHyQApPv4J%2FoseHqxUULUOuseR0cLfySlzk8OADKx10E0HS87HSxpOt6vyZJwvnluWz%2BxU4TlbWXRiNEe%2BGFZMawCT5EweGGiyyDrA2%2B5xrsJqHfoYMLY9lY1%2FAo2p95TV67F4J7So%2BwAGPIVt9xdKvKIK9R6nV2uWR6FG2WXKESo3wyo8fpE%2F4tOT2Ob0IY9DOnToEwHylTWC8LafHDW7Y2%2FT58x50o%2BBBweNh1pRowzR0GLbZ7ShYg%2FvoESDu6CXdnWDIAZSUyUEbbdnDQ3U9Ml7NfoV62toaZov3bXdcx762bIaeiXq16J%2FiEzwlvLWrx7gKa3m8qNN%2F%2BORBFNjj2wTXgagUjwkYIg546BK%2FKzBaBW5rrcEOn5Ec2Cg0eHQeEOPQSSq1RSIvlMZa5yjJfgLuLusOPNqOoD%2BG0%2B%2FMi4YG04vlOuNUuAl422DxmvBdTkVoK1aeNdDlOXIP5PWuXIyzeKVvzB2fjWvmm8AVBOS1ZV9vOBFjF108iE%2BHv0XW9R8oKzMrpLKGJVq9DbZSiLCwBqxuBrnKAp4GDFUDxDdpQD%2FGud2aAw%2FeP%2FxAY6pgFdQgOQDCdzigMc8F5UF46lc%2BjYX%2BXC8E5hm8GdlePlHa0PZhScxAXvOyM6X2Bcv6GWQ5YJj0p9HaP36Og%2F9sRN2Po4rjkjPAzvx1jF5Ir0dsyPnF9fBVLJJ6BAh8uPEJkBC4VzWIWXvR5aZXruQYnYq3CyHb9xuKjGJJo%2BiEdglASA%2BqMrXboQkN3aacGJl%2BbaW81tqAYcZO4hAsYo5rQ8xlr2LZlR&X-Amz-Signature=0e128ce7f813793aee16cfb4c7708e7b5bdd8526df971ac628529e6debd2f250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCKV5Y5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIBveTIX3eGT%2FlQ9pyiUisz7kZIGPjX1TK0dm1fWepLuxAiAj6FV6Gj%2FKoLGniT8qsff84lLJe9Nbuvzqim6UVUhPbyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM6rm%2BNJp1CjdTN%2FuNKtwDcBdGUgeei5GrrfyizQ3J%2BaY6DDDF6nqijSxXKxVbbyHM1NEXPxkurIYDYff3fNgNqNcXHyQApPv4J%2FoseHqxUULUOuseR0cLfySlzk8OADKx10E0HS87HSxpOt6vyZJwvnluWz%2BxU4TlbWXRiNEe%2BGFZMawCT5EweGGiyyDrA2%2B5xrsJqHfoYMLY9lY1%2FAo2p95TV67F4J7So%2BwAGPIVt9xdKvKIK9R6nV2uWR6FG2WXKESo3wyo8fpE%2F4tOT2Ob0IY9DOnToEwHylTWC8LafHDW7Y2%2FT58x50o%2BBBweNh1pRowzR0GLbZ7ShYg%2FvoESDu6CXdnWDIAZSUyUEbbdnDQ3U9Ml7NfoV62toaZov3bXdcx762bIaeiXq16J%2FiEzwlvLWrx7gKa3m8qNN%2F%2BORBFNjj2wTXgagUjwkYIg546BK%2FKzBaBW5rrcEOn5Ec2Cg0eHQeEOPQSSq1RSIvlMZa5yjJfgLuLusOPNqOoD%2BG0%2B%2FMi4YG04vlOuNUuAl422DxmvBdTkVoK1aeNdDlOXIP5PWuXIyzeKVvzB2fjWvmm8AVBOS1ZV9vOBFjF108iE%2BHv0XW9R8oKzMrpLKGJVq9DbZSiLCwBqxuBrnKAp4GDFUDxDdpQD%2FGud2aAw%2FeP%2FxAY6pgFdQgOQDCdzigMc8F5UF46lc%2BjYX%2BXC8E5hm8GdlePlHa0PZhScxAXvOyM6X2Bcv6GWQ5YJj0p9HaP36Og%2F9sRN2Po4rjkjPAzvx1jF5Ir0dsyPnF9fBVLJJ6BAh8uPEJkBC4VzWIWXvR5aZXruQYnYq3CyHb9xuKjGJJo%2BiEdglASA%2BqMrXboQkN3aacGJl%2BbaW81tqAYcZO4hAsYo5rQ8xlr2LZlR&X-Amz-Signature=416855cdb9f7236940a8aa980244af953e0ce5b8df0c9bb6dc1acd57f0594294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCKV5Y5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIBveTIX3eGT%2FlQ9pyiUisz7kZIGPjX1TK0dm1fWepLuxAiAj6FV6Gj%2FKoLGniT8qsff84lLJe9Nbuvzqim6UVUhPbyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM6rm%2BNJp1CjdTN%2FuNKtwDcBdGUgeei5GrrfyizQ3J%2BaY6DDDF6nqijSxXKxVbbyHM1NEXPxkurIYDYff3fNgNqNcXHyQApPv4J%2FoseHqxUULUOuseR0cLfySlzk8OADKx10E0HS87HSxpOt6vyZJwvnluWz%2BxU4TlbWXRiNEe%2BGFZMawCT5EweGGiyyDrA2%2B5xrsJqHfoYMLY9lY1%2FAo2p95TV67F4J7So%2BwAGPIVt9xdKvKIK9R6nV2uWR6FG2WXKESo3wyo8fpE%2F4tOT2Ob0IY9DOnToEwHylTWC8LafHDW7Y2%2FT58x50o%2BBBweNh1pRowzR0GLbZ7ShYg%2FvoESDu6CXdnWDIAZSUyUEbbdnDQ3U9Ml7NfoV62toaZov3bXdcx762bIaeiXq16J%2FiEzwlvLWrx7gKa3m8qNN%2F%2BORBFNjj2wTXgagUjwkYIg546BK%2FKzBaBW5rrcEOn5Ec2Cg0eHQeEOPQSSq1RSIvlMZa5yjJfgLuLusOPNqOoD%2BG0%2B%2FMi4YG04vlOuNUuAl422DxmvBdTkVoK1aeNdDlOXIP5PWuXIyzeKVvzB2fjWvmm8AVBOS1ZV9vOBFjF108iE%2BHv0XW9R8oKzMrpLKGJVq9DbZSiLCwBqxuBrnKAp4GDFUDxDdpQD%2FGud2aAw%2FeP%2FxAY6pgFdQgOQDCdzigMc8F5UF46lc%2BjYX%2BXC8E5hm8GdlePlHa0PZhScxAXvOyM6X2Bcv6GWQ5YJj0p9HaP36Og%2F9sRN2Po4rjkjPAzvx1jF5Ir0dsyPnF9fBVLJJ6BAh8uPEJkBC4VzWIWXvR5aZXruQYnYq3CyHb9xuKjGJJo%2BiEdglASA%2BqMrXboQkN3aacGJl%2BbaW81tqAYcZO4hAsYo5rQ8xlr2LZlR&X-Amz-Signature=e17bacd8b4fcf72734987cfa16b34dca0915de407019d79ae3c57cdfaf2e8d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCKV5Y5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIBveTIX3eGT%2FlQ9pyiUisz7kZIGPjX1TK0dm1fWepLuxAiAj6FV6Gj%2FKoLGniT8qsff84lLJe9Nbuvzqim6UVUhPbyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM6rm%2BNJp1CjdTN%2FuNKtwDcBdGUgeei5GrrfyizQ3J%2BaY6DDDF6nqijSxXKxVbbyHM1NEXPxkurIYDYff3fNgNqNcXHyQApPv4J%2FoseHqxUULUOuseR0cLfySlzk8OADKx10E0HS87HSxpOt6vyZJwvnluWz%2BxU4TlbWXRiNEe%2BGFZMawCT5EweGGiyyDrA2%2B5xrsJqHfoYMLY9lY1%2FAo2p95TV67F4J7So%2BwAGPIVt9xdKvKIK9R6nV2uWR6FG2WXKESo3wyo8fpE%2F4tOT2Ob0IY9DOnToEwHylTWC8LafHDW7Y2%2FT58x50o%2BBBweNh1pRowzR0GLbZ7ShYg%2FvoESDu6CXdnWDIAZSUyUEbbdnDQ3U9Ml7NfoV62toaZov3bXdcx762bIaeiXq16J%2FiEzwlvLWrx7gKa3m8qNN%2F%2BORBFNjj2wTXgagUjwkYIg546BK%2FKzBaBW5rrcEOn5Ec2Cg0eHQeEOPQSSq1RSIvlMZa5yjJfgLuLusOPNqOoD%2BG0%2B%2FMi4YG04vlOuNUuAl422DxmvBdTkVoK1aeNdDlOXIP5PWuXIyzeKVvzB2fjWvmm8AVBOS1ZV9vOBFjF108iE%2BHv0XW9R8oKzMrpLKGJVq9DbZSiLCwBqxuBrnKAp4GDFUDxDdpQD%2FGud2aAw%2FeP%2FxAY6pgFdQgOQDCdzigMc8F5UF46lc%2BjYX%2BXC8E5hm8GdlePlHa0PZhScxAXvOyM6X2Bcv6GWQ5YJj0p9HaP36Og%2F9sRN2Po4rjkjPAzvx1jF5Ir0dsyPnF9fBVLJJ6BAh8uPEJkBC4VzWIWXvR5aZXruQYnYq3CyHb9xuKjGJJo%2BiEdglASA%2BqMrXboQkN3aacGJl%2BbaW81tqAYcZO4hAsYo5rQ8xlr2LZlR&X-Amz-Signature=e5babde167809ead7c3af2f13fc51d0d8f6a7e33d55fb0802127cdbd6732a5c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCKV5Y5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIBveTIX3eGT%2FlQ9pyiUisz7kZIGPjX1TK0dm1fWepLuxAiAj6FV6Gj%2FKoLGniT8qsff84lLJe9Nbuvzqim6UVUhPbyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM6rm%2BNJp1CjdTN%2FuNKtwDcBdGUgeei5GrrfyizQ3J%2BaY6DDDF6nqijSxXKxVbbyHM1NEXPxkurIYDYff3fNgNqNcXHyQApPv4J%2FoseHqxUULUOuseR0cLfySlzk8OADKx10E0HS87HSxpOt6vyZJwvnluWz%2BxU4TlbWXRiNEe%2BGFZMawCT5EweGGiyyDrA2%2B5xrsJqHfoYMLY9lY1%2FAo2p95TV67F4J7So%2BwAGPIVt9xdKvKIK9R6nV2uWR6FG2WXKESo3wyo8fpE%2F4tOT2Ob0IY9DOnToEwHylTWC8LafHDW7Y2%2FT58x50o%2BBBweNh1pRowzR0GLbZ7ShYg%2FvoESDu6CXdnWDIAZSUyUEbbdnDQ3U9Ml7NfoV62toaZov3bXdcx762bIaeiXq16J%2FiEzwlvLWrx7gKa3m8qNN%2F%2BORBFNjj2wTXgagUjwkYIg546BK%2FKzBaBW5rrcEOn5Ec2Cg0eHQeEOPQSSq1RSIvlMZa5yjJfgLuLusOPNqOoD%2BG0%2B%2FMi4YG04vlOuNUuAl422DxmvBdTkVoK1aeNdDlOXIP5PWuXIyzeKVvzB2fjWvmm8AVBOS1ZV9vOBFjF108iE%2BHv0XW9R8oKzMrpLKGJVq9DbZSiLCwBqxuBrnKAp4GDFUDxDdpQD%2FGud2aAw%2FeP%2FxAY6pgFdQgOQDCdzigMc8F5UF46lc%2BjYX%2BXC8E5hm8GdlePlHa0PZhScxAXvOyM6X2Bcv6GWQ5YJj0p9HaP36Og%2F9sRN2Po4rjkjPAzvx1jF5Ir0dsyPnF9fBVLJJ6BAh8uPEJkBC4VzWIWXvR5aZXruQYnYq3CyHb9xuKjGJJo%2BiEdglASA%2BqMrXboQkN3aacGJl%2BbaW81tqAYcZO4hAsYo5rQ8xlr2LZlR&X-Amz-Signature=831407ae07700675440d4e97266a6d0c9763765534e82e1bbbdf44e9af7f7ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
