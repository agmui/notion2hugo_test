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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVTBVX5B%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICVYKBCZZQsHwSN8iKIo%2Few%2BL8CgQVFaht38gNdAPRzqAiBfvUu6Wl2%2FmhnI423iNsAonNTyXDiJjzB45LMJFzo4mSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ0UyKGrzbjZSsEnWKtwDsqdZvkJ%2FMHQ%2FCm7%2FvcZoOuj1%2FZxCGwrQSZ5DfgzKseafICY1keOgPZbb79yJk%2B7LIavn%2BOWmmslAbIZ8Ew6Tfc8b3EfpwswHAIJz91WLGOJTi1HqXQCn7wr3cuNxU%2FvpgnF9czlkmBoaTM8UfGyEPJqTA067KJPdzjNuT4KP3DlC%2Fm0LyimZ8wftyvmfqpmZ0kKsSRCbONphH7R6Yg6QJE9lPgd63H9WfNtv08hTk4qGExYcJxdbOutVRYTQo%2FMNoP8NAVtdZ9gIQzpHdp72BOFDEQgndUpurDvKXYCF2GCT6aaJ6AGsnyMns1Sv91fCu74andQzNDb67wzwT4OawaCLWBD9jI9noWjZDb4JsT8MuMyS30qBl6I2cpXS7Io%2B9y73w5uceciAX%2FPZMZKXw6bJSt6wO7Hag35YcmOROhtAE3j%2B0B9HDy1uFIKAiI5m8xqYW14CKIHvUfuErYnXnCpAgcJ553ArA%2FePC%2Fi2CKfn0qjBSctjj20WH22%2FpiYG%2FJMFWLOMDW42o2K1MhkXmZc0f9dZcsxfMFZ6WdA2wHYRwa8sFc1e1z17I6JhGkDr0qRBDWogkrrclKhsOQHnueZ2fyyqA0HecOBe4sYhnI2gCpa1yNGZusRfbEMwhILywQY6pgEhGV4tOYunnFVxipXUaXjO04ER5ehKB8ChbRZcmTobQFri4lEdBz0MDr%2B6qSqrKTDWs9kboTYmXtGW5X5%2B5M%2FFXh932uj4rV%2BzuS38S1YFyAslfv5nwqY7iWIqrWNKth%2Few8EMvq%2Fk%2FcSUzEDePE6blQ9YgZ%2FqOsGUXVkiO3Zb60YhSq5mQREUcZEKjWQqn5jy3No0qiGFwh%2B8ZedVOhb9HsbIWugi&X-Amz-Signature=ae91b54cbce995b10494cea465fc5d7395e94beee1eb7894c13779bdbdfd9d73&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVTBVX5B%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICVYKBCZZQsHwSN8iKIo%2Few%2BL8CgQVFaht38gNdAPRzqAiBfvUu6Wl2%2FmhnI423iNsAonNTyXDiJjzB45LMJFzo4mSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ0UyKGrzbjZSsEnWKtwDsqdZvkJ%2FMHQ%2FCm7%2FvcZoOuj1%2FZxCGwrQSZ5DfgzKseafICY1keOgPZbb79yJk%2B7LIavn%2BOWmmslAbIZ8Ew6Tfc8b3EfpwswHAIJz91WLGOJTi1HqXQCn7wr3cuNxU%2FvpgnF9czlkmBoaTM8UfGyEPJqTA067KJPdzjNuT4KP3DlC%2Fm0LyimZ8wftyvmfqpmZ0kKsSRCbONphH7R6Yg6QJE9lPgd63H9WfNtv08hTk4qGExYcJxdbOutVRYTQo%2FMNoP8NAVtdZ9gIQzpHdp72BOFDEQgndUpurDvKXYCF2GCT6aaJ6AGsnyMns1Sv91fCu74andQzNDb67wzwT4OawaCLWBD9jI9noWjZDb4JsT8MuMyS30qBl6I2cpXS7Io%2B9y73w5uceciAX%2FPZMZKXw6bJSt6wO7Hag35YcmOROhtAE3j%2B0B9HDy1uFIKAiI5m8xqYW14CKIHvUfuErYnXnCpAgcJ553ArA%2FePC%2Fi2CKfn0qjBSctjj20WH22%2FpiYG%2FJMFWLOMDW42o2K1MhkXmZc0f9dZcsxfMFZ6WdA2wHYRwa8sFc1e1z17I6JhGkDr0qRBDWogkrrclKhsOQHnueZ2fyyqA0HecOBe4sYhnI2gCpa1yNGZusRfbEMwhILywQY6pgEhGV4tOYunnFVxipXUaXjO04ER5ehKB8ChbRZcmTobQFri4lEdBz0MDr%2B6qSqrKTDWs9kboTYmXtGW5X5%2B5M%2FFXh932uj4rV%2BzuS38S1YFyAslfv5nwqY7iWIqrWNKth%2Few8EMvq%2Fk%2FcSUzEDePE6blQ9YgZ%2FqOsGUXVkiO3Zb60YhSq5mQREUcZEKjWQqn5jy3No0qiGFwh%2B8ZedVOhb9HsbIWugi&X-Amz-Signature=93c7d07e1a73b958fc9b2f9e408ce551090504facedd12bef29a6f7f801b98b0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVTBVX5B%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICVYKBCZZQsHwSN8iKIo%2Few%2BL8CgQVFaht38gNdAPRzqAiBfvUu6Wl2%2FmhnI423iNsAonNTyXDiJjzB45LMJFzo4mSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ0UyKGrzbjZSsEnWKtwDsqdZvkJ%2FMHQ%2FCm7%2FvcZoOuj1%2FZxCGwrQSZ5DfgzKseafICY1keOgPZbb79yJk%2B7LIavn%2BOWmmslAbIZ8Ew6Tfc8b3EfpwswHAIJz91WLGOJTi1HqXQCn7wr3cuNxU%2FvpgnF9czlkmBoaTM8UfGyEPJqTA067KJPdzjNuT4KP3DlC%2Fm0LyimZ8wftyvmfqpmZ0kKsSRCbONphH7R6Yg6QJE9lPgd63H9WfNtv08hTk4qGExYcJxdbOutVRYTQo%2FMNoP8NAVtdZ9gIQzpHdp72BOFDEQgndUpurDvKXYCF2GCT6aaJ6AGsnyMns1Sv91fCu74andQzNDb67wzwT4OawaCLWBD9jI9noWjZDb4JsT8MuMyS30qBl6I2cpXS7Io%2B9y73w5uceciAX%2FPZMZKXw6bJSt6wO7Hag35YcmOROhtAE3j%2B0B9HDy1uFIKAiI5m8xqYW14CKIHvUfuErYnXnCpAgcJ553ArA%2FePC%2Fi2CKfn0qjBSctjj20WH22%2FpiYG%2FJMFWLOMDW42o2K1MhkXmZc0f9dZcsxfMFZ6WdA2wHYRwa8sFc1e1z17I6JhGkDr0qRBDWogkrrclKhsOQHnueZ2fyyqA0HecOBe4sYhnI2gCpa1yNGZusRfbEMwhILywQY6pgEhGV4tOYunnFVxipXUaXjO04ER5ehKB8ChbRZcmTobQFri4lEdBz0MDr%2B6qSqrKTDWs9kboTYmXtGW5X5%2B5M%2FFXh932uj4rV%2BzuS38S1YFyAslfv5nwqY7iWIqrWNKth%2Few8EMvq%2Fk%2FcSUzEDePE6blQ9YgZ%2FqOsGUXVkiO3Zb60YhSq5mQREUcZEKjWQqn5jy3No0qiGFwh%2B8ZedVOhb9HsbIWugi&X-Amz-Signature=f0f09c5f9b709756595b59b0dfce7625fd21c705aef46cfc33d95c62bc84e6d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVTBVX5B%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICVYKBCZZQsHwSN8iKIo%2Few%2BL8CgQVFaht38gNdAPRzqAiBfvUu6Wl2%2FmhnI423iNsAonNTyXDiJjzB45LMJFzo4mSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ0UyKGrzbjZSsEnWKtwDsqdZvkJ%2FMHQ%2FCm7%2FvcZoOuj1%2FZxCGwrQSZ5DfgzKseafICY1keOgPZbb79yJk%2B7LIavn%2BOWmmslAbIZ8Ew6Tfc8b3EfpwswHAIJz91WLGOJTi1HqXQCn7wr3cuNxU%2FvpgnF9czlkmBoaTM8UfGyEPJqTA067KJPdzjNuT4KP3DlC%2Fm0LyimZ8wftyvmfqpmZ0kKsSRCbONphH7R6Yg6QJE9lPgd63H9WfNtv08hTk4qGExYcJxdbOutVRYTQo%2FMNoP8NAVtdZ9gIQzpHdp72BOFDEQgndUpurDvKXYCF2GCT6aaJ6AGsnyMns1Sv91fCu74andQzNDb67wzwT4OawaCLWBD9jI9noWjZDb4JsT8MuMyS30qBl6I2cpXS7Io%2B9y73w5uceciAX%2FPZMZKXw6bJSt6wO7Hag35YcmOROhtAE3j%2B0B9HDy1uFIKAiI5m8xqYW14CKIHvUfuErYnXnCpAgcJ553ArA%2FePC%2Fi2CKfn0qjBSctjj20WH22%2FpiYG%2FJMFWLOMDW42o2K1MhkXmZc0f9dZcsxfMFZ6WdA2wHYRwa8sFc1e1z17I6JhGkDr0qRBDWogkrrclKhsOQHnueZ2fyyqA0HecOBe4sYhnI2gCpa1yNGZusRfbEMwhILywQY6pgEhGV4tOYunnFVxipXUaXjO04ER5ehKB8ChbRZcmTobQFri4lEdBz0MDr%2B6qSqrKTDWs9kboTYmXtGW5X5%2B5M%2FFXh932uj4rV%2BzuS38S1YFyAslfv5nwqY7iWIqrWNKth%2Few8EMvq%2Fk%2FcSUzEDePE6blQ9YgZ%2FqOsGUXVkiO3Zb60YhSq5mQREUcZEKjWQqn5jy3No0qiGFwh%2B8ZedVOhb9HsbIWugi&X-Amz-Signature=f039861659202b7290873b623d39242c723c4a51b2b6d2d9ebb199ebd0917998&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVTBVX5B%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICVYKBCZZQsHwSN8iKIo%2Few%2BL8CgQVFaht38gNdAPRzqAiBfvUu6Wl2%2FmhnI423iNsAonNTyXDiJjzB45LMJFzo4mSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ0UyKGrzbjZSsEnWKtwDsqdZvkJ%2FMHQ%2FCm7%2FvcZoOuj1%2FZxCGwrQSZ5DfgzKseafICY1keOgPZbb79yJk%2B7LIavn%2BOWmmslAbIZ8Ew6Tfc8b3EfpwswHAIJz91WLGOJTi1HqXQCn7wr3cuNxU%2FvpgnF9czlkmBoaTM8UfGyEPJqTA067KJPdzjNuT4KP3DlC%2Fm0LyimZ8wftyvmfqpmZ0kKsSRCbONphH7R6Yg6QJE9lPgd63H9WfNtv08hTk4qGExYcJxdbOutVRYTQo%2FMNoP8NAVtdZ9gIQzpHdp72BOFDEQgndUpurDvKXYCF2GCT6aaJ6AGsnyMns1Sv91fCu74andQzNDb67wzwT4OawaCLWBD9jI9noWjZDb4JsT8MuMyS30qBl6I2cpXS7Io%2B9y73w5uceciAX%2FPZMZKXw6bJSt6wO7Hag35YcmOROhtAE3j%2B0B9HDy1uFIKAiI5m8xqYW14CKIHvUfuErYnXnCpAgcJ553ArA%2FePC%2Fi2CKfn0qjBSctjj20WH22%2FpiYG%2FJMFWLOMDW42o2K1MhkXmZc0f9dZcsxfMFZ6WdA2wHYRwa8sFc1e1z17I6JhGkDr0qRBDWogkrrclKhsOQHnueZ2fyyqA0HecOBe4sYhnI2gCpa1yNGZusRfbEMwhILywQY6pgEhGV4tOYunnFVxipXUaXjO04ER5ehKB8ChbRZcmTobQFri4lEdBz0MDr%2B6qSqrKTDWs9kboTYmXtGW5X5%2B5M%2FFXh932uj4rV%2BzuS38S1YFyAslfv5nwqY7iWIqrWNKth%2Few8EMvq%2Fk%2FcSUzEDePE6blQ9YgZ%2FqOsGUXVkiO3Zb60YhSq5mQREUcZEKjWQqn5jy3No0qiGFwh%2B8ZedVOhb9HsbIWugi&X-Amz-Signature=401718d202f7774f107565aa15251d317c3206e4b51a1144e2841d9ba910f6a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
