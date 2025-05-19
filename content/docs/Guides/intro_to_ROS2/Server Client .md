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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2DPUQM%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqpaqe9ukbXk9gk%2BfBsUk7y7QeH8K6LgWuZuzABqJbMwIgYj0ZZRcihih2F4kTIiFzWGoNFoChszWfBJmVd%2FxJJnYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BC1li6TZsSn3HpqyrcA9T7B0UbjehQQmk3Hodd60Xmgm%2B2vo%2FwoK%2BsdJrR1Qw%2B7OCkpC8yLoWq7JcMlkv91AkQCbiWP5b92rvPaTFneCrLNFY2%2FrVxLLYK2XqER%2BCSX8H0k2ODFEx1ZftsM2EijDImjSESZqTvLdAnt6izt4UMCuPvEU4FC4B0Ys2fcboXxiVqH9q4pI%2Fap5JnPvemhc3LZG2FcU6QlVqVKjHH4NX1%2BqD%2B0qNo2bMy5Nz4V6IXBgUWAetMYdFEncr4Gta7gp0jVYUgVJFUfDEImNzu4Sxr3rSZUi2T9sa0S460LZiy%2FKdhSgvKJRxxQEy3S4sl%2F%2FLsq32J2npeYbQFJTnze%2FsQK%2BnZ%2FDbhN%2F6XaxbZYB18k%2BbjHSMNVJIX5QtxI1ib7%2B2A0sWlD9AkrWxe8zkyW7DWKHyp2Hcy2Q572sAdqadf%2BobJ4Vo4X7hj8ai44F4M9Ek5env3QHoXgxGFTaeU802peH3BzhJoH0XD97KtRZdZuCDiTAE0IJY6Lol9iH0WDuqH4eEzAGaP9RZ1XVycbCK7G3%2Bp0sopwUQwglKM%2Far9mt642edzqN7IJW21A9zwUwr0jmP50jmQEoaoNQon7FHxd6F%2BxpTUJvIZVHruakwTs1b4w5CMiLLxtRi5MJnsqcEGOqUByjnFxQBTZq0b8HUqdG%2FUIUplEwZA8XpvGMRtBTuaZ%2Bs7tDMRh1nj9GFzv%2BVNt0JA9NAA3z955QU9jpIv51iwB6WnAqjh51JrZOqB8UyxReS37y3NfKWUBLfoXYRO6O1kDB7c1s9n9W3PAjC25Z9VMh6odJdLRLGWZ1XIc3XHeplB7lfoAXjGiHnILOF9VJsCQIGEyDCVEdkKo%2FWfp57Icx2Q1T3B&X-Amz-Signature=bcf073f69e25c7b31c6e5ce3bb53faa9e60bf1da235999230275f1141dd7fcfc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2DPUQM%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqpaqe9ukbXk9gk%2BfBsUk7y7QeH8K6LgWuZuzABqJbMwIgYj0ZZRcihih2F4kTIiFzWGoNFoChszWfBJmVd%2FxJJnYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BC1li6TZsSn3HpqyrcA9T7B0UbjehQQmk3Hodd60Xmgm%2B2vo%2FwoK%2BsdJrR1Qw%2B7OCkpC8yLoWq7JcMlkv91AkQCbiWP5b92rvPaTFneCrLNFY2%2FrVxLLYK2XqER%2BCSX8H0k2ODFEx1ZftsM2EijDImjSESZqTvLdAnt6izt4UMCuPvEU4FC4B0Ys2fcboXxiVqH9q4pI%2Fap5JnPvemhc3LZG2FcU6QlVqVKjHH4NX1%2BqD%2B0qNo2bMy5Nz4V6IXBgUWAetMYdFEncr4Gta7gp0jVYUgVJFUfDEImNzu4Sxr3rSZUi2T9sa0S460LZiy%2FKdhSgvKJRxxQEy3S4sl%2F%2FLsq32J2npeYbQFJTnze%2FsQK%2BnZ%2FDbhN%2F6XaxbZYB18k%2BbjHSMNVJIX5QtxI1ib7%2B2A0sWlD9AkrWxe8zkyW7DWKHyp2Hcy2Q572sAdqadf%2BobJ4Vo4X7hj8ai44F4M9Ek5env3QHoXgxGFTaeU802peH3BzhJoH0XD97KtRZdZuCDiTAE0IJY6Lol9iH0WDuqH4eEzAGaP9RZ1XVycbCK7G3%2Bp0sopwUQwglKM%2Far9mt642edzqN7IJW21A9zwUwr0jmP50jmQEoaoNQon7FHxd6F%2BxpTUJvIZVHruakwTs1b4w5CMiLLxtRi5MJnsqcEGOqUByjnFxQBTZq0b8HUqdG%2FUIUplEwZA8XpvGMRtBTuaZ%2Bs7tDMRh1nj9GFzv%2BVNt0JA9NAA3z955QU9jpIv51iwB6WnAqjh51JrZOqB8UyxReS37y3NfKWUBLfoXYRO6O1kDB7c1s9n9W3PAjC25Z9VMh6odJdLRLGWZ1XIc3XHeplB7lfoAXjGiHnILOF9VJsCQIGEyDCVEdkKo%2FWfp57Icx2Q1T3B&X-Amz-Signature=a286777f380171c161c20a42dcc1deff9f5b6e2c55ad3048caff195d31d3f5c2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2DPUQM%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqpaqe9ukbXk9gk%2BfBsUk7y7QeH8K6LgWuZuzABqJbMwIgYj0ZZRcihih2F4kTIiFzWGoNFoChszWfBJmVd%2FxJJnYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BC1li6TZsSn3HpqyrcA9T7B0UbjehQQmk3Hodd60Xmgm%2B2vo%2FwoK%2BsdJrR1Qw%2B7OCkpC8yLoWq7JcMlkv91AkQCbiWP5b92rvPaTFneCrLNFY2%2FrVxLLYK2XqER%2BCSX8H0k2ODFEx1ZftsM2EijDImjSESZqTvLdAnt6izt4UMCuPvEU4FC4B0Ys2fcboXxiVqH9q4pI%2Fap5JnPvemhc3LZG2FcU6QlVqVKjHH4NX1%2BqD%2B0qNo2bMy5Nz4V6IXBgUWAetMYdFEncr4Gta7gp0jVYUgVJFUfDEImNzu4Sxr3rSZUi2T9sa0S460LZiy%2FKdhSgvKJRxxQEy3S4sl%2F%2FLsq32J2npeYbQFJTnze%2FsQK%2BnZ%2FDbhN%2F6XaxbZYB18k%2BbjHSMNVJIX5QtxI1ib7%2B2A0sWlD9AkrWxe8zkyW7DWKHyp2Hcy2Q572sAdqadf%2BobJ4Vo4X7hj8ai44F4M9Ek5env3QHoXgxGFTaeU802peH3BzhJoH0XD97KtRZdZuCDiTAE0IJY6Lol9iH0WDuqH4eEzAGaP9RZ1XVycbCK7G3%2Bp0sopwUQwglKM%2Far9mt642edzqN7IJW21A9zwUwr0jmP50jmQEoaoNQon7FHxd6F%2BxpTUJvIZVHruakwTs1b4w5CMiLLxtRi5MJnsqcEGOqUByjnFxQBTZq0b8HUqdG%2FUIUplEwZA8XpvGMRtBTuaZ%2Bs7tDMRh1nj9GFzv%2BVNt0JA9NAA3z955QU9jpIv51iwB6WnAqjh51JrZOqB8UyxReS37y3NfKWUBLfoXYRO6O1kDB7c1s9n9W3PAjC25Z9VMh6odJdLRLGWZ1XIc3XHeplB7lfoAXjGiHnILOF9VJsCQIGEyDCVEdkKo%2FWfp57Icx2Q1T3B&X-Amz-Signature=820e37e8d58492aaebc7acf697bd7f708eb541adadece44c831f7e858f3a8326&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2DPUQM%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqpaqe9ukbXk9gk%2BfBsUk7y7QeH8K6LgWuZuzABqJbMwIgYj0ZZRcihih2F4kTIiFzWGoNFoChszWfBJmVd%2FxJJnYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BC1li6TZsSn3HpqyrcA9T7B0UbjehQQmk3Hodd60Xmgm%2B2vo%2FwoK%2BsdJrR1Qw%2B7OCkpC8yLoWq7JcMlkv91AkQCbiWP5b92rvPaTFneCrLNFY2%2FrVxLLYK2XqER%2BCSX8H0k2ODFEx1ZftsM2EijDImjSESZqTvLdAnt6izt4UMCuPvEU4FC4B0Ys2fcboXxiVqH9q4pI%2Fap5JnPvemhc3LZG2FcU6QlVqVKjHH4NX1%2BqD%2B0qNo2bMy5Nz4V6IXBgUWAetMYdFEncr4Gta7gp0jVYUgVJFUfDEImNzu4Sxr3rSZUi2T9sa0S460LZiy%2FKdhSgvKJRxxQEy3S4sl%2F%2FLsq32J2npeYbQFJTnze%2FsQK%2BnZ%2FDbhN%2F6XaxbZYB18k%2BbjHSMNVJIX5QtxI1ib7%2B2A0sWlD9AkrWxe8zkyW7DWKHyp2Hcy2Q572sAdqadf%2BobJ4Vo4X7hj8ai44F4M9Ek5env3QHoXgxGFTaeU802peH3BzhJoH0XD97KtRZdZuCDiTAE0IJY6Lol9iH0WDuqH4eEzAGaP9RZ1XVycbCK7G3%2Bp0sopwUQwglKM%2Far9mt642edzqN7IJW21A9zwUwr0jmP50jmQEoaoNQon7FHxd6F%2BxpTUJvIZVHruakwTs1b4w5CMiLLxtRi5MJnsqcEGOqUByjnFxQBTZq0b8HUqdG%2FUIUplEwZA8XpvGMRtBTuaZ%2Bs7tDMRh1nj9GFzv%2BVNt0JA9NAA3z955QU9jpIv51iwB6WnAqjh51JrZOqB8UyxReS37y3NfKWUBLfoXYRO6O1kDB7c1s9n9W3PAjC25Z9VMh6odJdLRLGWZ1XIc3XHeplB7lfoAXjGiHnILOF9VJsCQIGEyDCVEdkKo%2FWfp57Icx2Q1T3B&X-Amz-Signature=187386f67403d639d613c2aa7275afa0965ec3a5e2fa436ec8df413d50131a3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2DPUQM%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqpaqe9ukbXk9gk%2BfBsUk7y7QeH8K6LgWuZuzABqJbMwIgYj0ZZRcihih2F4kTIiFzWGoNFoChszWfBJmVd%2FxJJnYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BC1li6TZsSn3HpqyrcA9T7B0UbjehQQmk3Hodd60Xmgm%2B2vo%2FwoK%2BsdJrR1Qw%2B7OCkpC8yLoWq7JcMlkv91AkQCbiWP5b92rvPaTFneCrLNFY2%2FrVxLLYK2XqER%2BCSX8H0k2ODFEx1ZftsM2EijDImjSESZqTvLdAnt6izt4UMCuPvEU4FC4B0Ys2fcboXxiVqH9q4pI%2Fap5JnPvemhc3LZG2FcU6QlVqVKjHH4NX1%2BqD%2B0qNo2bMy5Nz4V6IXBgUWAetMYdFEncr4Gta7gp0jVYUgVJFUfDEImNzu4Sxr3rSZUi2T9sa0S460LZiy%2FKdhSgvKJRxxQEy3S4sl%2F%2FLsq32J2npeYbQFJTnze%2FsQK%2BnZ%2FDbhN%2F6XaxbZYB18k%2BbjHSMNVJIX5QtxI1ib7%2B2A0sWlD9AkrWxe8zkyW7DWKHyp2Hcy2Q572sAdqadf%2BobJ4Vo4X7hj8ai44F4M9Ek5env3QHoXgxGFTaeU802peH3BzhJoH0XD97KtRZdZuCDiTAE0IJY6Lol9iH0WDuqH4eEzAGaP9RZ1XVycbCK7G3%2Bp0sopwUQwglKM%2Far9mt642edzqN7IJW21A9zwUwr0jmP50jmQEoaoNQon7FHxd6F%2BxpTUJvIZVHruakwTs1b4w5CMiLLxtRi5MJnsqcEGOqUByjnFxQBTZq0b8HUqdG%2FUIUplEwZA8XpvGMRtBTuaZ%2Bs7tDMRh1nj9GFzv%2BVNt0JA9NAA3z955QU9jpIv51iwB6WnAqjh51JrZOqB8UyxReS37y3NfKWUBLfoXYRO6O1kDB7c1s9n9W3PAjC25Z9VMh6odJdLRLGWZ1XIc3XHeplB7lfoAXjGiHnILOF9VJsCQIGEyDCVEdkKo%2FWfp57Icx2Q1T3B&X-Amz-Signature=f47501c16d965bf9d3d60264b416efaf22d987303db49a182bacae23773a8c2e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
