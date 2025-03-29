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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAU34WP%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCoJdSSmB1nZ9iltIiHqiQgZyIj1TtBhD%2FimqkZLFXcYQIgcYpwCgZr20ms9b7u72WnqyMzFccLiaWlzkqp8%2FArs5cq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDO7B7hbRMrZEvcyPcyrcAzkEf4etiIv0Q%2FaTv2733EpEGN3k6SK0ypW39QUoME%2FqFiCMDdRYjBcdA%2BGFs4RH5b1M97dD%2Ft9DdCSRl2p4WBjJPdWYISGo9ASlGNEzKVbOxUWFz4iyh%2Fd%2BJVvYwycs8aUPN1Wl5AupsO8lTbDcmi1R%2FMdeXsQYhUeb7y2%2FsaSvA%2F3juh2ULLsW%2F%2BHIuGYux9ueTTqXPdv6JZuz%2BEZdYqqHMJyzEUtX8u6KyZL47ByThLZacFU68hH2AfmBXtic%2B%2BLwl5cFKhrDTZmU5ia6%2B6FhxggeAO6hpezw7aNtlq%2FTKnQ8sboojwx9iI7YyBSU2qO%2B1kdvCqXrClXD5tcyF5%2BdmntUF3tAxadCe2J%2BV75X97zwmGt57YTiq0lW9HS1%2BPmOEWQl1Uhi24iZAZqJ0V5Tpm7UPGD5QueCvqG%2BPKsjrxRk1HrfIOL6TSfxu63I4OdZGhFjy7pGrj5o9NBNbVnSCieCB4UfhziW3KelrURYa6CYP3X0UcO5xA14V5Ux5IV0lJe5b4TQUnYkhnYsxT%2FE6T7rNjOKzLT1psCov73QhfH0K6eaeLG%2B8UeoVqPliqhNGWxJnN4TLKMoBi69CJ5LaC%2FR6pb3ukGHp5o%2BYu8IiYXLPFfQOxkdrLaaMKq1n78GOqUBwREDmkw%2FJhiDIISxQ1bHfvLzT6sKUN4tn%2F6nZrkBxCOurH6TtwSa8fasHmYUvtNhPsrSFUSR6iZJxmKHcjQpI%2FLGUyRL4FO8oInIIxTPX9rAslBbOkkTE6AXpRkMA5nv5YEEb%2FMsRk2bs2Z4soJyxyhspa3kKZBPXYoSDBzDcc3yadZfWuolKGGwSjuuQLVemxPaeZN8H3gCwVkKMtHQngyomOs0&X-Amz-Signature=7a0a38ef5fa508ce8e665c8fd63d7e284fbbbaa8cead816e2f3393daafe031f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAU34WP%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCoJdSSmB1nZ9iltIiHqiQgZyIj1TtBhD%2FimqkZLFXcYQIgcYpwCgZr20ms9b7u72WnqyMzFccLiaWlzkqp8%2FArs5cq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDO7B7hbRMrZEvcyPcyrcAzkEf4etiIv0Q%2FaTv2733EpEGN3k6SK0ypW39QUoME%2FqFiCMDdRYjBcdA%2BGFs4RH5b1M97dD%2Ft9DdCSRl2p4WBjJPdWYISGo9ASlGNEzKVbOxUWFz4iyh%2Fd%2BJVvYwycs8aUPN1Wl5AupsO8lTbDcmi1R%2FMdeXsQYhUeb7y2%2FsaSvA%2F3juh2ULLsW%2F%2BHIuGYux9ueTTqXPdv6JZuz%2BEZdYqqHMJyzEUtX8u6KyZL47ByThLZacFU68hH2AfmBXtic%2B%2BLwl5cFKhrDTZmU5ia6%2B6FhxggeAO6hpezw7aNtlq%2FTKnQ8sboojwx9iI7YyBSU2qO%2B1kdvCqXrClXD5tcyF5%2BdmntUF3tAxadCe2J%2BV75X97zwmGt57YTiq0lW9HS1%2BPmOEWQl1Uhi24iZAZqJ0V5Tpm7UPGD5QueCvqG%2BPKsjrxRk1HrfIOL6TSfxu63I4OdZGhFjy7pGrj5o9NBNbVnSCieCB4UfhziW3KelrURYa6CYP3X0UcO5xA14V5Ux5IV0lJe5b4TQUnYkhnYsxT%2FE6T7rNjOKzLT1psCov73QhfH0K6eaeLG%2B8UeoVqPliqhNGWxJnN4TLKMoBi69CJ5LaC%2FR6pb3ukGHp5o%2BYu8IiYXLPFfQOxkdrLaaMKq1n78GOqUBwREDmkw%2FJhiDIISxQ1bHfvLzT6sKUN4tn%2F6nZrkBxCOurH6TtwSa8fasHmYUvtNhPsrSFUSR6iZJxmKHcjQpI%2FLGUyRL4FO8oInIIxTPX9rAslBbOkkTE6AXpRkMA5nv5YEEb%2FMsRk2bs2Z4soJyxyhspa3kKZBPXYoSDBzDcc3yadZfWuolKGGwSjuuQLVemxPaeZN8H3gCwVkKMtHQngyomOs0&X-Amz-Signature=9db3a1b5b8796990ea927936f7c0fc105f770ace0e531a0d7c2c575123a8c1f3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAU34WP%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCoJdSSmB1nZ9iltIiHqiQgZyIj1TtBhD%2FimqkZLFXcYQIgcYpwCgZr20ms9b7u72WnqyMzFccLiaWlzkqp8%2FArs5cq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDO7B7hbRMrZEvcyPcyrcAzkEf4etiIv0Q%2FaTv2733EpEGN3k6SK0ypW39QUoME%2FqFiCMDdRYjBcdA%2BGFs4RH5b1M97dD%2Ft9DdCSRl2p4WBjJPdWYISGo9ASlGNEzKVbOxUWFz4iyh%2Fd%2BJVvYwycs8aUPN1Wl5AupsO8lTbDcmi1R%2FMdeXsQYhUeb7y2%2FsaSvA%2F3juh2ULLsW%2F%2BHIuGYux9ueTTqXPdv6JZuz%2BEZdYqqHMJyzEUtX8u6KyZL47ByThLZacFU68hH2AfmBXtic%2B%2BLwl5cFKhrDTZmU5ia6%2B6FhxggeAO6hpezw7aNtlq%2FTKnQ8sboojwx9iI7YyBSU2qO%2B1kdvCqXrClXD5tcyF5%2BdmntUF3tAxadCe2J%2BV75X97zwmGt57YTiq0lW9HS1%2BPmOEWQl1Uhi24iZAZqJ0V5Tpm7UPGD5QueCvqG%2BPKsjrxRk1HrfIOL6TSfxu63I4OdZGhFjy7pGrj5o9NBNbVnSCieCB4UfhziW3KelrURYa6CYP3X0UcO5xA14V5Ux5IV0lJe5b4TQUnYkhnYsxT%2FE6T7rNjOKzLT1psCov73QhfH0K6eaeLG%2B8UeoVqPliqhNGWxJnN4TLKMoBi69CJ5LaC%2FR6pb3ukGHp5o%2BYu8IiYXLPFfQOxkdrLaaMKq1n78GOqUBwREDmkw%2FJhiDIISxQ1bHfvLzT6sKUN4tn%2F6nZrkBxCOurH6TtwSa8fasHmYUvtNhPsrSFUSR6iZJxmKHcjQpI%2FLGUyRL4FO8oInIIxTPX9rAslBbOkkTE6AXpRkMA5nv5YEEb%2FMsRk2bs2Z4soJyxyhspa3kKZBPXYoSDBzDcc3yadZfWuolKGGwSjuuQLVemxPaeZN8H3gCwVkKMtHQngyomOs0&X-Amz-Signature=78b85a0b91f44aa05f837cb1da12af1f541d98258a76ce52c2a804d0cc808d88&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAU34WP%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCoJdSSmB1nZ9iltIiHqiQgZyIj1TtBhD%2FimqkZLFXcYQIgcYpwCgZr20ms9b7u72WnqyMzFccLiaWlzkqp8%2FArs5cq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDO7B7hbRMrZEvcyPcyrcAzkEf4etiIv0Q%2FaTv2733EpEGN3k6SK0ypW39QUoME%2FqFiCMDdRYjBcdA%2BGFs4RH5b1M97dD%2Ft9DdCSRl2p4WBjJPdWYISGo9ASlGNEzKVbOxUWFz4iyh%2Fd%2BJVvYwycs8aUPN1Wl5AupsO8lTbDcmi1R%2FMdeXsQYhUeb7y2%2FsaSvA%2F3juh2ULLsW%2F%2BHIuGYux9ueTTqXPdv6JZuz%2BEZdYqqHMJyzEUtX8u6KyZL47ByThLZacFU68hH2AfmBXtic%2B%2BLwl5cFKhrDTZmU5ia6%2B6FhxggeAO6hpezw7aNtlq%2FTKnQ8sboojwx9iI7YyBSU2qO%2B1kdvCqXrClXD5tcyF5%2BdmntUF3tAxadCe2J%2BV75X97zwmGt57YTiq0lW9HS1%2BPmOEWQl1Uhi24iZAZqJ0V5Tpm7UPGD5QueCvqG%2BPKsjrxRk1HrfIOL6TSfxu63I4OdZGhFjy7pGrj5o9NBNbVnSCieCB4UfhziW3KelrURYa6CYP3X0UcO5xA14V5Ux5IV0lJe5b4TQUnYkhnYsxT%2FE6T7rNjOKzLT1psCov73QhfH0K6eaeLG%2B8UeoVqPliqhNGWxJnN4TLKMoBi69CJ5LaC%2FR6pb3ukGHp5o%2BYu8IiYXLPFfQOxkdrLaaMKq1n78GOqUBwREDmkw%2FJhiDIISxQ1bHfvLzT6sKUN4tn%2F6nZrkBxCOurH6TtwSa8fasHmYUvtNhPsrSFUSR6iZJxmKHcjQpI%2FLGUyRL4FO8oInIIxTPX9rAslBbOkkTE6AXpRkMA5nv5YEEb%2FMsRk2bs2Z4soJyxyhspa3kKZBPXYoSDBzDcc3yadZfWuolKGGwSjuuQLVemxPaeZN8H3gCwVkKMtHQngyomOs0&X-Amz-Signature=afa2d9e453bfd65b1f4be6381d26d10985873edf5fb4914d5badc798e7711d87&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAU34WP%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCoJdSSmB1nZ9iltIiHqiQgZyIj1TtBhD%2FimqkZLFXcYQIgcYpwCgZr20ms9b7u72WnqyMzFccLiaWlzkqp8%2FArs5cq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDO7B7hbRMrZEvcyPcyrcAzkEf4etiIv0Q%2FaTv2733EpEGN3k6SK0ypW39QUoME%2FqFiCMDdRYjBcdA%2BGFs4RH5b1M97dD%2Ft9DdCSRl2p4WBjJPdWYISGo9ASlGNEzKVbOxUWFz4iyh%2Fd%2BJVvYwycs8aUPN1Wl5AupsO8lTbDcmi1R%2FMdeXsQYhUeb7y2%2FsaSvA%2F3juh2ULLsW%2F%2BHIuGYux9ueTTqXPdv6JZuz%2BEZdYqqHMJyzEUtX8u6KyZL47ByThLZacFU68hH2AfmBXtic%2B%2BLwl5cFKhrDTZmU5ia6%2B6FhxggeAO6hpezw7aNtlq%2FTKnQ8sboojwx9iI7YyBSU2qO%2B1kdvCqXrClXD5tcyF5%2BdmntUF3tAxadCe2J%2BV75X97zwmGt57YTiq0lW9HS1%2BPmOEWQl1Uhi24iZAZqJ0V5Tpm7UPGD5QueCvqG%2BPKsjrxRk1HrfIOL6TSfxu63I4OdZGhFjy7pGrj5o9NBNbVnSCieCB4UfhziW3KelrURYa6CYP3X0UcO5xA14V5Ux5IV0lJe5b4TQUnYkhnYsxT%2FE6T7rNjOKzLT1psCov73QhfH0K6eaeLG%2B8UeoVqPliqhNGWxJnN4TLKMoBi69CJ5LaC%2FR6pb3ukGHp5o%2BYu8IiYXLPFfQOxkdrLaaMKq1n78GOqUBwREDmkw%2FJhiDIISxQ1bHfvLzT6sKUN4tn%2F6nZrkBxCOurH6TtwSa8fasHmYUvtNhPsrSFUSR6iZJxmKHcjQpI%2FLGUyRL4FO8oInIIxTPX9rAslBbOkkTE6AXpRkMA5nv5YEEb%2FMsRk2bs2Z4soJyxyhspa3kKZBPXYoSDBzDcc3yadZfWuolKGGwSjuuQLVemxPaeZN8H3gCwVkKMtHQngyomOs0&X-Amz-Signature=c35488b55b4d8415b2a2f8a66835b371a0fbe9aab5d4dd9e8bd724103b15e166&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
