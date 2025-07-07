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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RCNFY6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGKlx6nPz%2BCA%2B5ToEKTatPnoAZqZhYpU%2BM%2BdkeSMkLdQAiAzpQZz80NRTRoTNFx31SKJn%2FUONRPgztqjesE42X2i9Sr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMfQepF6eEAJzoM0vjKtwDc5vp3keGjmkYJV%2Fag2%2BT39FAQqBfmbcYfQYMen5GJF29ee1QlPIQA1NyL%2FKHeUliQ8VPyiJ2vxoO1EbYMqBxOpc6Z8Q984NOJzphYFUJjBV%2BtS4rmLQlQVSL06WJlstJLyHVlr8M6dvhSNxKuuK%2Frmh6XZos7lz5Y%2FYQQqQHjhN0bhJj8nE3XdsnWtCw3EOksUMowrb48zBgp0lfVjjELc0mbt0YxrDi2t77O7z7CrcK8YtCL2i1%2FmRYu6%2B9FH5bNnfhZzPGSJ%2BwjOKMk60Vyeed0rv3bHFnBEEvkQIpJZLaeGeIt4DLdv1nOLoY%2BSNXn0hE%2BVE7sOm9RW2jgNFjhSP9ezOMXK0XgS%2BgUA%2Fgl%2F5fOmzW3Of4yjrghN6D36roqUsTzTW%2F6Gfh2Kt35DzzX5ixSxk7cjJCZFfRUv%2FDrBXE%2Burv8AVlCBoIkY1q2ZDqRMY6DR0KVq0SUxiIQDt8zVIhm1SMSIVO1pjJHZ78LGRd%2FW3F66B1nnW1S6f7EQFioxdm0OLBWBI4MbHZyHd8R2Rd6XkSqonLhEz%2FTOOd%2FIebs1hOMjiNDvnSYqcqaWxbuD5AeWSlQm%2B0Ch3ip2kIiBDw3WheYAB3wXyx7pYNcLkWfo3%2Fllb26n2glFkwk6ytwwY6pgFbVomPwLPw6yp00gsU9PhbMfyxPWHRbvTk2tM2GKqra2zeXlC17yT5kjAbyGIExG0EQyMc4f29Q87IP1i309pVV3aLik0Ox1pKb1phrcvfTKmr5pEa1WFvAvbPLhNzA68f3DmrDxVHBcVUDMNRecN%2BL0WzhYihxEXeUlIwxZgTrwwjOU3FOj3iLYJxe8o8CbGc79NmWRuUfyWAQXpUwvaddOaMnPqh&X-Amz-Signature=2dd2ad01a149bbf1ff73e7239b73dcc59a6132169fc4b489c6520232d8c49ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RCNFY6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGKlx6nPz%2BCA%2B5ToEKTatPnoAZqZhYpU%2BM%2BdkeSMkLdQAiAzpQZz80NRTRoTNFx31SKJn%2FUONRPgztqjesE42X2i9Sr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMfQepF6eEAJzoM0vjKtwDc5vp3keGjmkYJV%2Fag2%2BT39FAQqBfmbcYfQYMen5GJF29ee1QlPIQA1NyL%2FKHeUliQ8VPyiJ2vxoO1EbYMqBxOpc6Z8Q984NOJzphYFUJjBV%2BtS4rmLQlQVSL06WJlstJLyHVlr8M6dvhSNxKuuK%2Frmh6XZos7lz5Y%2FYQQqQHjhN0bhJj8nE3XdsnWtCw3EOksUMowrb48zBgp0lfVjjELc0mbt0YxrDi2t77O7z7CrcK8YtCL2i1%2FmRYu6%2B9FH5bNnfhZzPGSJ%2BwjOKMk60Vyeed0rv3bHFnBEEvkQIpJZLaeGeIt4DLdv1nOLoY%2BSNXn0hE%2BVE7sOm9RW2jgNFjhSP9ezOMXK0XgS%2BgUA%2Fgl%2F5fOmzW3Of4yjrghN6D36roqUsTzTW%2F6Gfh2Kt35DzzX5ixSxk7cjJCZFfRUv%2FDrBXE%2Burv8AVlCBoIkY1q2ZDqRMY6DR0KVq0SUxiIQDt8zVIhm1SMSIVO1pjJHZ78LGRd%2FW3F66B1nnW1S6f7EQFioxdm0OLBWBI4MbHZyHd8R2Rd6XkSqonLhEz%2FTOOd%2FIebs1hOMjiNDvnSYqcqaWxbuD5AeWSlQm%2B0Ch3ip2kIiBDw3WheYAB3wXyx7pYNcLkWfo3%2Fllb26n2glFkwk6ytwwY6pgFbVomPwLPw6yp00gsU9PhbMfyxPWHRbvTk2tM2GKqra2zeXlC17yT5kjAbyGIExG0EQyMc4f29Q87IP1i309pVV3aLik0Ox1pKb1phrcvfTKmr5pEa1WFvAvbPLhNzA68f3DmrDxVHBcVUDMNRecN%2BL0WzhYihxEXeUlIwxZgTrwwjOU3FOj3iLYJxe8o8CbGc79NmWRuUfyWAQXpUwvaddOaMnPqh&X-Amz-Signature=3fd8f8c285a5ca076da94ab3caae7e8b47d7427bd1b0acae3bd1e59fdb31076f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RCNFY6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGKlx6nPz%2BCA%2B5ToEKTatPnoAZqZhYpU%2BM%2BdkeSMkLdQAiAzpQZz80NRTRoTNFx31SKJn%2FUONRPgztqjesE42X2i9Sr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMfQepF6eEAJzoM0vjKtwDc5vp3keGjmkYJV%2Fag2%2BT39FAQqBfmbcYfQYMen5GJF29ee1QlPIQA1NyL%2FKHeUliQ8VPyiJ2vxoO1EbYMqBxOpc6Z8Q984NOJzphYFUJjBV%2BtS4rmLQlQVSL06WJlstJLyHVlr8M6dvhSNxKuuK%2Frmh6XZos7lz5Y%2FYQQqQHjhN0bhJj8nE3XdsnWtCw3EOksUMowrb48zBgp0lfVjjELc0mbt0YxrDi2t77O7z7CrcK8YtCL2i1%2FmRYu6%2B9FH5bNnfhZzPGSJ%2BwjOKMk60Vyeed0rv3bHFnBEEvkQIpJZLaeGeIt4DLdv1nOLoY%2BSNXn0hE%2BVE7sOm9RW2jgNFjhSP9ezOMXK0XgS%2BgUA%2Fgl%2F5fOmzW3Of4yjrghN6D36roqUsTzTW%2F6Gfh2Kt35DzzX5ixSxk7cjJCZFfRUv%2FDrBXE%2Burv8AVlCBoIkY1q2ZDqRMY6DR0KVq0SUxiIQDt8zVIhm1SMSIVO1pjJHZ78LGRd%2FW3F66B1nnW1S6f7EQFioxdm0OLBWBI4MbHZyHd8R2Rd6XkSqonLhEz%2FTOOd%2FIebs1hOMjiNDvnSYqcqaWxbuD5AeWSlQm%2B0Ch3ip2kIiBDw3WheYAB3wXyx7pYNcLkWfo3%2Fllb26n2glFkwk6ytwwY6pgFbVomPwLPw6yp00gsU9PhbMfyxPWHRbvTk2tM2GKqra2zeXlC17yT5kjAbyGIExG0EQyMc4f29Q87IP1i309pVV3aLik0Ox1pKb1phrcvfTKmr5pEa1WFvAvbPLhNzA68f3DmrDxVHBcVUDMNRecN%2BL0WzhYihxEXeUlIwxZgTrwwjOU3FOj3iLYJxe8o8CbGc79NmWRuUfyWAQXpUwvaddOaMnPqh&X-Amz-Signature=1828d07dfe6e4ed46ce21e08719cce0ca962ea3ec2d3e06a96e3bbf332bea8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RCNFY6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGKlx6nPz%2BCA%2B5ToEKTatPnoAZqZhYpU%2BM%2BdkeSMkLdQAiAzpQZz80NRTRoTNFx31SKJn%2FUONRPgztqjesE42X2i9Sr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMfQepF6eEAJzoM0vjKtwDc5vp3keGjmkYJV%2Fag2%2BT39FAQqBfmbcYfQYMen5GJF29ee1QlPIQA1NyL%2FKHeUliQ8VPyiJ2vxoO1EbYMqBxOpc6Z8Q984NOJzphYFUJjBV%2BtS4rmLQlQVSL06WJlstJLyHVlr8M6dvhSNxKuuK%2Frmh6XZos7lz5Y%2FYQQqQHjhN0bhJj8nE3XdsnWtCw3EOksUMowrb48zBgp0lfVjjELc0mbt0YxrDi2t77O7z7CrcK8YtCL2i1%2FmRYu6%2B9FH5bNnfhZzPGSJ%2BwjOKMk60Vyeed0rv3bHFnBEEvkQIpJZLaeGeIt4DLdv1nOLoY%2BSNXn0hE%2BVE7sOm9RW2jgNFjhSP9ezOMXK0XgS%2BgUA%2Fgl%2F5fOmzW3Of4yjrghN6D36roqUsTzTW%2F6Gfh2Kt35DzzX5ixSxk7cjJCZFfRUv%2FDrBXE%2Burv8AVlCBoIkY1q2ZDqRMY6DR0KVq0SUxiIQDt8zVIhm1SMSIVO1pjJHZ78LGRd%2FW3F66B1nnW1S6f7EQFioxdm0OLBWBI4MbHZyHd8R2Rd6XkSqonLhEz%2FTOOd%2FIebs1hOMjiNDvnSYqcqaWxbuD5AeWSlQm%2B0Ch3ip2kIiBDw3WheYAB3wXyx7pYNcLkWfo3%2Fllb26n2glFkwk6ytwwY6pgFbVomPwLPw6yp00gsU9PhbMfyxPWHRbvTk2tM2GKqra2zeXlC17yT5kjAbyGIExG0EQyMc4f29Q87IP1i309pVV3aLik0Ox1pKb1phrcvfTKmr5pEa1WFvAvbPLhNzA68f3DmrDxVHBcVUDMNRecN%2BL0WzhYihxEXeUlIwxZgTrwwjOU3FOj3iLYJxe8o8CbGc79NmWRuUfyWAQXpUwvaddOaMnPqh&X-Amz-Signature=974f254ce8fa0779185b1d240817eeceac10a0627e6c3dcdfefd4b63a09306d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RCNFY6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGKlx6nPz%2BCA%2B5ToEKTatPnoAZqZhYpU%2BM%2BdkeSMkLdQAiAzpQZz80NRTRoTNFx31SKJn%2FUONRPgztqjesE42X2i9Sr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMfQepF6eEAJzoM0vjKtwDc5vp3keGjmkYJV%2Fag2%2BT39FAQqBfmbcYfQYMen5GJF29ee1QlPIQA1NyL%2FKHeUliQ8VPyiJ2vxoO1EbYMqBxOpc6Z8Q984NOJzphYFUJjBV%2BtS4rmLQlQVSL06WJlstJLyHVlr8M6dvhSNxKuuK%2Frmh6XZos7lz5Y%2FYQQqQHjhN0bhJj8nE3XdsnWtCw3EOksUMowrb48zBgp0lfVjjELc0mbt0YxrDi2t77O7z7CrcK8YtCL2i1%2FmRYu6%2B9FH5bNnfhZzPGSJ%2BwjOKMk60Vyeed0rv3bHFnBEEvkQIpJZLaeGeIt4DLdv1nOLoY%2BSNXn0hE%2BVE7sOm9RW2jgNFjhSP9ezOMXK0XgS%2BgUA%2Fgl%2F5fOmzW3Of4yjrghN6D36roqUsTzTW%2F6Gfh2Kt35DzzX5ixSxk7cjJCZFfRUv%2FDrBXE%2Burv8AVlCBoIkY1q2ZDqRMY6DR0KVq0SUxiIQDt8zVIhm1SMSIVO1pjJHZ78LGRd%2FW3F66B1nnW1S6f7EQFioxdm0OLBWBI4MbHZyHd8R2Rd6XkSqonLhEz%2FTOOd%2FIebs1hOMjiNDvnSYqcqaWxbuD5AeWSlQm%2B0Ch3ip2kIiBDw3WheYAB3wXyx7pYNcLkWfo3%2Fllb26n2glFkwk6ytwwY6pgFbVomPwLPw6yp00gsU9PhbMfyxPWHRbvTk2tM2GKqra2zeXlC17yT5kjAbyGIExG0EQyMc4f29Q87IP1i309pVV3aLik0Ox1pKb1phrcvfTKmr5pEa1WFvAvbPLhNzA68f3DmrDxVHBcVUDMNRecN%2BL0WzhYihxEXeUlIwxZgTrwwjOU3FOj3iLYJxe8o8CbGc79NmWRuUfyWAQXpUwvaddOaMnPqh&X-Amz-Signature=fae9304beec59a0083fd72f2d186d007a3a8c0aa3bb70ef154a6e30351ef0f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
