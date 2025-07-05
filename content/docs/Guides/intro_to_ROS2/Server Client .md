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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICFWDPQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDx8OpaaBop3dKMUCbWsyv8Il7xIPHmu6ppPjTHQPfhggIhAINLMBWluiwo7L9RhNPpFEFqrHzF2gnLr8u31Y2it9%2BeKv8DCEEQABoMNjM3NDIzMTgzODA1IgwsYMVqCobxSPWEA%2F8q3APYiBewnyCMgrxuaXd%2FTXwBXvoGCK2eNSnXBONoWGPGsC%2Fcud6u9DIlIOTQEpiwewnvkD%2Fwk9lqPEWlX9P0lv2ZnsTRdh5kAggQQDZ%2FP96NPkapnfrHcanmQh4%2BsXx33DsTKjJ%2BMCbxnM%2FPf%2FW5WJFSr9ldVXAcBN2K1HXP8OwUlo%2F7YRK06hMiXIWWUDNEkM1EuoCgc1fVtfMK4fB71Xg%2FIy0JtH1skRuk3%2BZX8ZbOXj4C0lE0UMcGdRLyF0seW88eqFxUvgs7lXakqG1t%2FHF0FLoUSRBUoT7nuqIogxg4GsACK2EcszboLTQCJGU9gV7zK32wb37W%2Fd22qWiCu%2BNb3yzNToZuBiPgpngMfsaQnAhUQ9i0fJZc2yxXkds3jS7kziwtVodx51Uks1p1iRrhtgXBZEUbvoLjBQYhrc1qcUL8Vv4KTCNHOp7D64iCBI7L147ege7npaLX5SplSC6xVM3QfyfycNaJmtf3vF6uoUGwCAW0gA4qvv461%2FZWHDOQW%2Fn1c7xzILGRVNQQuqWIMkQaS%2BHPqBrWKRPj2D9%2BuS6MH0gax8eXz40HbNzz6YI3SI2t%2FdF6p2%2F%2B5KGLRKEAOZAXl%2BVPYkR%2B8jNjHMPA42P83NfSvpGLgfg0ODDmpaPDBjqkAWzoVekRhp50CaYUGrMcZDUUQdhlFjRram7lmc6Z4FYCtP6MdO7FYejLGmHzCEQKjkWBxNih%2BWxSBIYO9Qk9V1%2FY71n7H4gYChY8MjzspMIPaDTby7JLT1gqmUzBiLQYs1ekpmQuwkjVWiNNsvMfa53Knn1j8sRBJFvc9tkI4ciYtmLFkoDMA%2BvbP52wyKcL5AQJ1K4NiQq4%2BP2sVtVLN2frM45Y&X-Amz-Signature=9ae80c41bb0d79a5308eb26c8e27df992fc2b6ede1da001a06e858f4a2afbbce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICFWDPQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDx8OpaaBop3dKMUCbWsyv8Il7xIPHmu6ppPjTHQPfhggIhAINLMBWluiwo7L9RhNPpFEFqrHzF2gnLr8u31Y2it9%2BeKv8DCEEQABoMNjM3NDIzMTgzODA1IgwsYMVqCobxSPWEA%2F8q3APYiBewnyCMgrxuaXd%2FTXwBXvoGCK2eNSnXBONoWGPGsC%2Fcud6u9DIlIOTQEpiwewnvkD%2Fwk9lqPEWlX9P0lv2ZnsTRdh5kAggQQDZ%2FP96NPkapnfrHcanmQh4%2BsXx33DsTKjJ%2BMCbxnM%2FPf%2FW5WJFSr9ldVXAcBN2K1HXP8OwUlo%2F7YRK06hMiXIWWUDNEkM1EuoCgc1fVtfMK4fB71Xg%2FIy0JtH1skRuk3%2BZX8ZbOXj4C0lE0UMcGdRLyF0seW88eqFxUvgs7lXakqG1t%2FHF0FLoUSRBUoT7nuqIogxg4GsACK2EcszboLTQCJGU9gV7zK32wb37W%2Fd22qWiCu%2BNb3yzNToZuBiPgpngMfsaQnAhUQ9i0fJZc2yxXkds3jS7kziwtVodx51Uks1p1iRrhtgXBZEUbvoLjBQYhrc1qcUL8Vv4KTCNHOp7D64iCBI7L147ege7npaLX5SplSC6xVM3QfyfycNaJmtf3vF6uoUGwCAW0gA4qvv461%2FZWHDOQW%2Fn1c7xzILGRVNQQuqWIMkQaS%2BHPqBrWKRPj2D9%2BuS6MH0gax8eXz40HbNzz6YI3SI2t%2FdF6p2%2F%2B5KGLRKEAOZAXl%2BVPYkR%2B8jNjHMPA42P83NfSvpGLgfg0ODDmpaPDBjqkAWzoVekRhp50CaYUGrMcZDUUQdhlFjRram7lmc6Z4FYCtP6MdO7FYejLGmHzCEQKjkWBxNih%2BWxSBIYO9Qk9V1%2FY71n7H4gYChY8MjzspMIPaDTby7JLT1gqmUzBiLQYs1ekpmQuwkjVWiNNsvMfa53Knn1j8sRBJFvc9tkI4ciYtmLFkoDMA%2BvbP52wyKcL5AQJ1K4NiQq4%2BP2sVtVLN2frM45Y&X-Amz-Signature=5cf75f12cab1f281abcb0c65488840bc0f6edc36f6d2cb584a46a785b0f67137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICFWDPQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDx8OpaaBop3dKMUCbWsyv8Il7xIPHmu6ppPjTHQPfhggIhAINLMBWluiwo7L9RhNPpFEFqrHzF2gnLr8u31Y2it9%2BeKv8DCEEQABoMNjM3NDIzMTgzODA1IgwsYMVqCobxSPWEA%2F8q3APYiBewnyCMgrxuaXd%2FTXwBXvoGCK2eNSnXBONoWGPGsC%2Fcud6u9DIlIOTQEpiwewnvkD%2Fwk9lqPEWlX9P0lv2ZnsTRdh5kAggQQDZ%2FP96NPkapnfrHcanmQh4%2BsXx33DsTKjJ%2BMCbxnM%2FPf%2FW5WJFSr9ldVXAcBN2K1HXP8OwUlo%2F7YRK06hMiXIWWUDNEkM1EuoCgc1fVtfMK4fB71Xg%2FIy0JtH1skRuk3%2BZX8ZbOXj4C0lE0UMcGdRLyF0seW88eqFxUvgs7lXakqG1t%2FHF0FLoUSRBUoT7nuqIogxg4GsACK2EcszboLTQCJGU9gV7zK32wb37W%2Fd22qWiCu%2BNb3yzNToZuBiPgpngMfsaQnAhUQ9i0fJZc2yxXkds3jS7kziwtVodx51Uks1p1iRrhtgXBZEUbvoLjBQYhrc1qcUL8Vv4KTCNHOp7D64iCBI7L147ege7npaLX5SplSC6xVM3QfyfycNaJmtf3vF6uoUGwCAW0gA4qvv461%2FZWHDOQW%2Fn1c7xzILGRVNQQuqWIMkQaS%2BHPqBrWKRPj2D9%2BuS6MH0gax8eXz40HbNzz6YI3SI2t%2FdF6p2%2F%2B5KGLRKEAOZAXl%2BVPYkR%2B8jNjHMPA42P83NfSvpGLgfg0ODDmpaPDBjqkAWzoVekRhp50CaYUGrMcZDUUQdhlFjRram7lmc6Z4FYCtP6MdO7FYejLGmHzCEQKjkWBxNih%2BWxSBIYO9Qk9V1%2FY71n7H4gYChY8MjzspMIPaDTby7JLT1gqmUzBiLQYs1ekpmQuwkjVWiNNsvMfa53Knn1j8sRBJFvc9tkI4ciYtmLFkoDMA%2BvbP52wyKcL5AQJ1K4NiQq4%2BP2sVtVLN2frM45Y&X-Amz-Signature=141155c8d90430d00a55d61c7506e3dad89016632a62bcd163b73a57719129d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICFWDPQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDx8OpaaBop3dKMUCbWsyv8Il7xIPHmu6ppPjTHQPfhggIhAINLMBWluiwo7L9RhNPpFEFqrHzF2gnLr8u31Y2it9%2BeKv8DCEEQABoMNjM3NDIzMTgzODA1IgwsYMVqCobxSPWEA%2F8q3APYiBewnyCMgrxuaXd%2FTXwBXvoGCK2eNSnXBONoWGPGsC%2Fcud6u9DIlIOTQEpiwewnvkD%2Fwk9lqPEWlX9P0lv2ZnsTRdh5kAggQQDZ%2FP96NPkapnfrHcanmQh4%2BsXx33DsTKjJ%2BMCbxnM%2FPf%2FW5WJFSr9ldVXAcBN2K1HXP8OwUlo%2F7YRK06hMiXIWWUDNEkM1EuoCgc1fVtfMK4fB71Xg%2FIy0JtH1skRuk3%2BZX8ZbOXj4C0lE0UMcGdRLyF0seW88eqFxUvgs7lXakqG1t%2FHF0FLoUSRBUoT7nuqIogxg4GsACK2EcszboLTQCJGU9gV7zK32wb37W%2Fd22qWiCu%2BNb3yzNToZuBiPgpngMfsaQnAhUQ9i0fJZc2yxXkds3jS7kziwtVodx51Uks1p1iRrhtgXBZEUbvoLjBQYhrc1qcUL8Vv4KTCNHOp7D64iCBI7L147ege7npaLX5SplSC6xVM3QfyfycNaJmtf3vF6uoUGwCAW0gA4qvv461%2FZWHDOQW%2Fn1c7xzILGRVNQQuqWIMkQaS%2BHPqBrWKRPj2D9%2BuS6MH0gax8eXz40HbNzz6YI3SI2t%2FdF6p2%2F%2B5KGLRKEAOZAXl%2BVPYkR%2B8jNjHMPA42P83NfSvpGLgfg0ODDmpaPDBjqkAWzoVekRhp50CaYUGrMcZDUUQdhlFjRram7lmc6Z4FYCtP6MdO7FYejLGmHzCEQKjkWBxNih%2BWxSBIYO9Qk9V1%2FY71n7H4gYChY8MjzspMIPaDTby7JLT1gqmUzBiLQYs1ekpmQuwkjVWiNNsvMfa53Knn1j8sRBJFvc9tkI4ciYtmLFkoDMA%2BvbP52wyKcL5AQJ1K4NiQq4%2BP2sVtVLN2frM45Y&X-Amz-Signature=8973a77341269c26627db893f7d55b825b0e072c4176e6c16a160ca09e1ec42b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICFWDPQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDx8OpaaBop3dKMUCbWsyv8Il7xIPHmu6ppPjTHQPfhggIhAINLMBWluiwo7L9RhNPpFEFqrHzF2gnLr8u31Y2it9%2BeKv8DCEEQABoMNjM3NDIzMTgzODA1IgwsYMVqCobxSPWEA%2F8q3APYiBewnyCMgrxuaXd%2FTXwBXvoGCK2eNSnXBONoWGPGsC%2Fcud6u9DIlIOTQEpiwewnvkD%2Fwk9lqPEWlX9P0lv2ZnsTRdh5kAggQQDZ%2FP96NPkapnfrHcanmQh4%2BsXx33DsTKjJ%2BMCbxnM%2FPf%2FW5WJFSr9ldVXAcBN2K1HXP8OwUlo%2F7YRK06hMiXIWWUDNEkM1EuoCgc1fVtfMK4fB71Xg%2FIy0JtH1skRuk3%2BZX8ZbOXj4C0lE0UMcGdRLyF0seW88eqFxUvgs7lXakqG1t%2FHF0FLoUSRBUoT7nuqIogxg4GsACK2EcszboLTQCJGU9gV7zK32wb37W%2Fd22qWiCu%2BNb3yzNToZuBiPgpngMfsaQnAhUQ9i0fJZc2yxXkds3jS7kziwtVodx51Uks1p1iRrhtgXBZEUbvoLjBQYhrc1qcUL8Vv4KTCNHOp7D64iCBI7L147ege7npaLX5SplSC6xVM3QfyfycNaJmtf3vF6uoUGwCAW0gA4qvv461%2FZWHDOQW%2Fn1c7xzILGRVNQQuqWIMkQaS%2BHPqBrWKRPj2D9%2BuS6MH0gax8eXz40HbNzz6YI3SI2t%2FdF6p2%2F%2B5KGLRKEAOZAXl%2BVPYkR%2B8jNjHMPA42P83NfSvpGLgfg0ODDmpaPDBjqkAWzoVekRhp50CaYUGrMcZDUUQdhlFjRram7lmc6Z4FYCtP6MdO7FYejLGmHzCEQKjkWBxNih%2BWxSBIYO9Qk9V1%2FY71n7H4gYChY8MjzspMIPaDTby7JLT1gqmUzBiLQYs1ekpmQuwkjVWiNNsvMfa53Knn1j8sRBJFvc9tkI4ciYtmLFkoDMA%2BvbP52wyKcL5AQJ1K4NiQq4%2BP2sVtVLN2frM45Y&X-Amz-Signature=ee156edffe5300f022ac8f8a7e4997ccfc0032da44926e9792d5e3b9b311dae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
