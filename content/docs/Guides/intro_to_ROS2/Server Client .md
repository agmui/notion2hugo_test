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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AVEJKCH%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYndg23aBqwOad1ay%2BvNdmnmElyOlC2nN1A81veRWBiwIhAJZ6a8WhOfYc%2FoqfJ%2BE6%2BjrjkXDggk0tGX5Riul8Kw%2B6Kv8DCGYQABoMNjM3NDIzMTgzODA1IgxdnP8BLaZrzCmMxTEq3AOVGdP3ScPplPBd9Nkg9dVknAtj7pgZRy%2FjBWwmSALb%2Fx6UAXo46J6LzVG3BGEI5Weqvo2qXiEvTkk6yKr3gFc9XOmVl18DEeIL39DE4t3GZVWKPLeR9wEWk1aAwUNUsvVCh6tcQzeYfuQ2LjMDSYXQ3VUVHwXBnCQFH9o6n5kyTtwNQlZB5iLtYAKfMAwmuf2w0muHeyPzJKzGl%2BglnSWsMNfL5pxqjpBNIFLH5aoaTlY0I8GneU1C3lC9mAKMuFzN1VjQ%2FmxD6XPI0F%2BFp282zwZnvvJt64vnqNXYc312eZigV5Ew312BdrLZa78pJFp76zbo9H25wO41TIGDf7n%2BfBKRvRKkKPqvHlt3xH0omnmg0tbomhc0QtF%2FJMyunXDc%2FpeVvPnuYPnWzWEjnueWFfGcdVzrVvCYIJA0%2Ffu70%2FKHEdxU4YD%2BpnQ1FCkpsv82CGNhHKu%2Fp6wdiz2cdReiDmtsrRQd3PYA%2FaO9r%2FWxuGbMch34ed1yMGJiN2X9sDnDOYkcjbRwUKax7GyyzjCQxVm98DTbigwsZaU%2FJ6OXH2UPdJlwyrp7GRwIpjm1YMCbord4OF0AcfYgMwF3DGIcue8XpAod3M3o2MKGVtekN7WzpONxiFZN26hYkzDuydjBBjqkAfC9S54PhSsFiSHu%2Br0NzxszqAjIkRKhq4j2zVrzENsBp0pr0gv63B59f0bg1TxOzMMUREp3AFokiZgIyk1AWtA%2FdU8q%2F9K1MgI5y8Z3y4QhfEdy%2FlisYpRPY4LjyKwCkvYNBukQqoQQFkfB60Rq%2FzHsWIizDqKfT%2Fuqhj74LvXYLFmz5Ms4suYex0oMXPrROY8EODPekQ8HTu%2FGXCwIVHBX8IOh&X-Amz-Signature=ed79768b6a5067b341105dd2bd5344fe136578f5d4ed449fd2d49318e2968025&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AVEJKCH%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYndg23aBqwOad1ay%2BvNdmnmElyOlC2nN1A81veRWBiwIhAJZ6a8WhOfYc%2FoqfJ%2BE6%2BjrjkXDggk0tGX5Riul8Kw%2B6Kv8DCGYQABoMNjM3NDIzMTgzODA1IgxdnP8BLaZrzCmMxTEq3AOVGdP3ScPplPBd9Nkg9dVknAtj7pgZRy%2FjBWwmSALb%2Fx6UAXo46J6LzVG3BGEI5Weqvo2qXiEvTkk6yKr3gFc9XOmVl18DEeIL39DE4t3GZVWKPLeR9wEWk1aAwUNUsvVCh6tcQzeYfuQ2LjMDSYXQ3VUVHwXBnCQFH9o6n5kyTtwNQlZB5iLtYAKfMAwmuf2w0muHeyPzJKzGl%2BglnSWsMNfL5pxqjpBNIFLH5aoaTlY0I8GneU1C3lC9mAKMuFzN1VjQ%2FmxD6XPI0F%2BFp282zwZnvvJt64vnqNXYc312eZigV5Ew312BdrLZa78pJFp76zbo9H25wO41TIGDf7n%2BfBKRvRKkKPqvHlt3xH0omnmg0tbomhc0QtF%2FJMyunXDc%2FpeVvPnuYPnWzWEjnueWFfGcdVzrVvCYIJA0%2Ffu70%2FKHEdxU4YD%2BpnQ1FCkpsv82CGNhHKu%2Fp6wdiz2cdReiDmtsrRQd3PYA%2FaO9r%2FWxuGbMch34ed1yMGJiN2X9sDnDOYkcjbRwUKax7GyyzjCQxVm98DTbigwsZaU%2FJ6OXH2UPdJlwyrp7GRwIpjm1YMCbord4OF0AcfYgMwF3DGIcue8XpAod3M3o2MKGVtekN7WzpONxiFZN26hYkzDuydjBBjqkAfC9S54PhSsFiSHu%2Br0NzxszqAjIkRKhq4j2zVrzENsBp0pr0gv63B59f0bg1TxOzMMUREp3AFokiZgIyk1AWtA%2FdU8q%2F9K1MgI5y8Z3y4QhfEdy%2FlisYpRPY4LjyKwCkvYNBukQqoQQFkfB60Rq%2FzHsWIizDqKfT%2Fuqhj74LvXYLFmz5Ms4suYex0oMXPrROY8EODPekQ8HTu%2FGXCwIVHBX8IOh&X-Amz-Signature=a97f99a94cb2ab6399fe048258a7c1fe969e52f4ac3ee74a0ebd41ad6eebffa6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AVEJKCH%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYndg23aBqwOad1ay%2BvNdmnmElyOlC2nN1A81veRWBiwIhAJZ6a8WhOfYc%2FoqfJ%2BE6%2BjrjkXDggk0tGX5Riul8Kw%2B6Kv8DCGYQABoMNjM3NDIzMTgzODA1IgxdnP8BLaZrzCmMxTEq3AOVGdP3ScPplPBd9Nkg9dVknAtj7pgZRy%2FjBWwmSALb%2Fx6UAXo46J6LzVG3BGEI5Weqvo2qXiEvTkk6yKr3gFc9XOmVl18DEeIL39DE4t3GZVWKPLeR9wEWk1aAwUNUsvVCh6tcQzeYfuQ2LjMDSYXQ3VUVHwXBnCQFH9o6n5kyTtwNQlZB5iLtYAKfMAwmuf2w0muHeyPzJKzGl%2BglnSWsMNfL5pxqjpBNIFLH5aoaTlY0I8GneU1C3lC9mAKMuFzN1VjQ%2FmxD6XPI0F%2BFp282zwZnvvJt64vnqNXYc312eZigV5Ew312BdrLZa78pJFp76zbo9H25wO41TIGDf7n%2BfBKRvRKkKPqvHlt3xH0omnmg0tbomhc0QtF%2FJMyunXDc%2FpeVvPnuYPnWzWEjnueWFfGcdVzrVvCYIJA0%2Ffu70%2FKHEdxU4YD%2BpnQ1FCkpsv82CGNhHKu%2Fp6wdiz2cdReiDmtsrRQd3PYA%2FaO9r%2FWxuGbMch34ed1yMGJiN2X9sDnDOYkcjbRwUKax7GyyzjCQxVm98DTbigwsZaU%2FJ6OXH2UPdJlwyrp7GRwIpjm1YMCbord4OF0AcfYgMwF3DGIcue8XpAod3M3o2MKGVtekN7WzpONxiFZN26hYkzDuydjBBjqkAfC9S54PhSsFiSHu%2Br0NzxszqAjIkRKhq4j2zVrzENsBp0pr0gv63B59f0bg1TxOzMMUREp3AFokiZgIyk1AWtA%2FdU8q%2F9K1MgI5y8Z3y4QhfEdy%2FlisYpRPY4LjyKwCkvYNBukQqoQQFkfB60Rq%2FzHsWIizDqKfT%2Fuqhj74LvXYLFmz5Ms4suYex0oMXPrROY8EODPekQ8HTu%2FGXCwIVHBX8IOh&X-Amz-Signature=3cd424a9151e6bfbfe676ecc463a213984507b3daa4ac91a945fd8e335576274&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AVEJKCH%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYndg23aBqwOad1ay%2BvNdmnmElyOlC2nN1A81veRWBiwIhAJZ6a8WhOfYc%2FoqfJ%2BE6%2BjrjkXDggk0tGX5Riul8Kw%2B6Kv8DCGYQABoMNjM3NDIzMTgzODA1IgxdnP8BLaZrzCmMxTEq3AOVGdP3ScPplPBd9Nkg9dVknAtj7pgZRy%2FjBWwmSALb%2Fx6UAXo46J6LzVG3BGEI5Weqvo2qXiEvTkk6yKr3gFc9XOmVl18DEeIL39DE4t3GZVWKPLeR9wEWk1aAwUNUsvVCh6tcQzeYfuQ2LjMDSYXQ3VUVHwXBnCQFH9o6n5kyTtwNQlZB5iLtYAKfMAwmuf2w0muHeyPzJKzGl%2BglnSWsMNfL5pxqjpBNIFLH5aoaTlY0I8GneU1C3lC9mAKMuFzN1VjQ%2FmxD6XPI0F%2BFp282zwZnvvJt64vnqNXYc312eZigV5Ew312BdrLZa78pJFp76zbo9H25wO41TIGDf7n%2BfBKRvRKkKPqvHlt3xH0omnmg0tbomhc0QtF%2FJMyunXDc%2FpeVvPnuYPnWzWEjnueWFfGcdVzrVvCYIJA0%2Ffu70%2FKHEdxU4YD%2BpnQ1FCkpsv82CGNhHKu%2Fp6wdiz2cdReiDmtsrRQd3PYA%2FaO9r%2FWxuGbMch34ed1yMGJiN2X9sDnDOYkcjbRwUKax7GyyzjCQxVm98DTbigwsZaU%2FJ6OXH2UPdJlwyrp7GRwIpjm1YMCbord4OF0AcfYgMwF3DGIcue8XpAod3M3o2MKGVtekN7WzpONxiFZN26hYkzDuydjBBjqkAfC9S54PhSsFiSHu%2Br0NzxszqAjIkRKhq4j2zVrzENsBp0pr0gv63B59f0bg1TxOzMMUREp3AFokiZgIyk1AWtA%2FdU8q%2F9K1MgI5y8Z3y4QhfEdy%2FlisYpRPY4LjyKwCkvYNBukQqoQQFkfB60Rq%2FzHsWIizDqKfT%2Fuqhj74LvXYLFmz5Ms4suYex0oMXPrROY8EODPekQ8HTu%2FGXCwIVHBX8IOh&X-Amz-Signature=fcfde1aadfccd8a921e157b8e5e357fcac25817290b7b026c9d74ea18d9e9724&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AVEJKCH%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYndg23aBqwOad1ay%2BvNdmnmElyOlC2nN1A81veRWBiwIhAJZ6a8WhOfYc%2FoqfJ%2BE6%2BjrjkXDggk0tGX5Riul8Kw%2B6Kv8DCGYQABoMNjM3NDIzMTgzODA1IgxdnP8BLaZrzCmMxTEq3AOVGdP3ScPplPBd9Nkg9dVknAtj7pgZRy%2FjBWwmSALb%2Fx6UAXo46J6LzVG3BGEI5Weqvo2qXiEvTkk6yKr3gFc9XOmVl18DEeIL39DE4t3GZVWKPLeR9wEWk1aAwUNUsvVCh6tcQzeYfuQ2LjMDSYXQ3VUVHwXBnCQFH9o6n5kyTtwNQlZB5iLtYAKfMAwmuf2w0muHeyPzJKzGl%2BglnSWsMNfL5pxqjpBNIFLH5aoaTlY0I8GneU1C3lC9mAKMuFzN1VjQ%2FmxD6XPI0F%2BFp282zwZnvvJt64vnqNXYc312eZigV5Ew312BdrLZa78pJFp76zbo9H25wO41TIGDf7n%2BfBKRvRKkKPqvHlt3xH0omnmg0tbomhc0QtF%2FJMyunXDc%2FpeVvPnuYPnWzWEjnueWFfGcdVzrVvCYIJA0%2Ffu70%2FKHEdxU4YD%2BpnQ1FCkpsv82CGNhHKu%2Fp6wdiz2cdReiDmtsrRQd3PYA%2FaO9r%2FWxuGbMch34ed1yMGJiN2X9sDnDOYkcjbRwUKax7GyyzjCQxVm98DTbigwsZaU%2FJ6OXH2UPdJlwyrp7GRwIpjm1YMCbord4OF0AcfYgMwF3DGIcue8XpAod3M3o2MKGVtekN7WzpONxiFZN26hYkzDuydjBBjqkAfC9S54PhSsFiSHu%2Br0NzxszqAjIkRKhq4j2zVrzENsBp0pr0gv63B59f0bg1TxOzMMUREp3AFokiZgIyk1AWtA%2FdU8q%2F9K1MgI5y8Z3y4QhfEdy%2FlisYpRPY4LjyKwCkvYNBukQqoQQFkfB60Rq%2FzHsWIizDqKfT%2Fuqhj74LvXYLFmz5Ms4suYex0oMXPrROY8EODPekQ8HTu%2FGXCwIVHBX8IOh&X-Amz-Signature=42afac42130e04a26ee91bf21d5f9a7cfdc59d1faf4453e1b1400e748102ca4c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
