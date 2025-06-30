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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJU3UOH5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BXkJBJwaMxMBeu8f9E3jU2ev1yKLYArU5XWE3kxC1VAiACpc2DomIgwYIztt%2F7ktm%2BhT7n5%2F6wiiJCrbX%2BTSgzHCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyBXV8QAAQz%2FNOGkiKtwD3ct3%2B5bD8qwoV4ENjUFpRF912qzUjH4B5rQm9WPK3PijKB%2BR1EodsyAuVlpW1NKX7GHFws19phWYt5oXqSshQMPouXiCXnz2IZSF%2FoSyGEro8%2F1m0nXafuUCY%2FHtcDZsBbb6aT9%2FXFw7jLqBZv%2B4YD1ebZfAqrUdCVDEu0TqRrm0iGvpBLzEQQJdE%2BCBOQ6u4n%2BiubjY6OmFt0%2Fu%2Bkz5iIuJEcsz9OxmQMJ0rw586MabTsUMGjCtqNB4NQrXtrY7NGI1QTNyusNSa%2BgXVY3P0MxD0tBnrSQwbr%2BY66n4JQlFDrpAwSxc5z3tmwr9C1bUX2HxKkTMkVbOz0J36BXlQwFO5NnUUbxOezhn4SpgOWSNYGLQdj3N62bLrpnC%2BhS9i5rq0SH0XpdB6Gml5UOlvMPxWE%2Fc86iAT8rhRdLOCmt5UY%2B9Pni%2FVxKYwqY2WJe7picFw51oa0cuj8mr6FcjmiUVDc%2FFi0k5Tdj4iEnoKsxkHFGQdjwjwU3oO9Yg5b6v0OVXDMkwEr06wMjaqxYEAOIZVtCtetAyOwxlNMqPcJSIPFRDJKkw8t74r%2FgfyvqVdkgV%2FE0cm4D6cfQ%2ByrOMpNZnusS1pHgJNpbXTWKH%2BFL8kQjl%2FyGMLyiMdrQwzNuHwwY6pgE8S8u9n4%2BrKvVg8d7Wf98h%2BI9e3GmDr0eDgPP5uMi3WNU%2FNgD3tuEH6T6aMDAlx2Z3POiol%2BZoswQwjaLbdUFaNvyrAZWY8dhDjwzhhZqSTPu1ZluwvZPEI31BVzwdfcay4uUaP2jYxCHjVi9DQbFEGBuW4kOu5w1GLc%2BSmvlH08fVEzSlkYCSMlxNWpctfnL%2Fp7120%2BuaDIvlvEt5zsQwrAE5qB%2Bm&X-Amz-Signature=f7aeb4004de319adb5dcc5e30659cab6235bb9b667347f692b5913fbd15fef8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJU3UOH5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BXkJBJwaMxMBeu8f9E3jU2ev1yKLYArU5XWE3kxC1VAiACpc2DomIgwYIztt%2F7ktm%2BhT7n5%2F6wiiJCrbX%2BTSgzHCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyBXV8QAAQz%2FNOGkiKtwD3ct3%2B5bD8qwoV4ENjUFpRF912qzUjH4B5rQm9WPK3PijKB%2BR1EodsyAuVlpW1NKX7GHFws19phWYt5oXqSshQMPouXiCXnz2IZSF%2FoSyGEro8%2F1m0nXafuUCY%2FHtcDZsBbb6aT9%2FXFw7jLqBZv%2B4YD1ebZfAqrUdCVDEu0TqRrm0iGvpBLzEQQJdE%2BCBOQ6u4n%2BiubjY6OmFt0%2Fu%2Bkz5iIuJEcsz9OxmQMJ0rw586MabTsUMGjCtqNB4NQrXtrY7NGI1QTNyusNSa%2BgXVY3P0MxD0tBnrSQwbr%2BY66n4JQlFDrpAwSxc5z3tmwr9C1bUX2HxKkTMkVbOz0J36BXlQwFO5NnUUbxOezhn4SpgOWSNYGLQdj3N62bLrpnC%2BhS9i5rq0SH0XpdB6Gml5UOlvMPxWE%2Fc86iAT8rhRdLOCmt5UY%2B9Pni%2FVxKYwqY2WJe7picFw51oa0cuj8mr6FcjmiUVDc%2FFi0k5Tdj4iEnoKsxkHFGQdjwjwU3oO9Yg5b6v0OVXDMkwEr06wMjaqxYEAOIZVtCtetAyOwxlNMqPcJSIPFRDJKkw8t74r%2FgfyvqVdkgV%2FE0cm4D6cfQ%2ByrOMpNZnusS1pHgJNpbXTWKH%2BFL8kQjl%2FyGMLyiMdrQwzNuHwwY6pgE8S8u9n4%2BrKvVg8d7Wf98h%2BI9e3GmDr0eDgPP5uMi3WNU%2FNgD3tuEH6T6aMDAlx2Z3POiol%2BZoswQwjaLbdUFaNvyrAZWY8dhDjwzhhZqSTPu1ZluwvZPEI31BVzwdfcay4uUaP2jYxCHjVi9DQbFEGBuW4kOu5w1GLc%2BSmvlH08fVEzSlkYCSMlxNWpctfnL%2Fp7120%2BuaDIvlvEt5zsQwrAE5qB%2Bm&X-Amz-Signature=25f484732036045c3b1fc20ed77fc0bca6771d4c5402df77c6de23594e5484a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJU3UOH5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BXkJBJwaMxMBeu8f9E3jU2ev1yKLYArU5XWE3kxC1VAiACpc2DomIgwYIztt%2F7ktm%2BhT7n5%2F6wiiJCrbX%2BTSgzHCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyBXV8QAAQz%2FNOGkiKtwD3ct3%2B5bD8qwoV4ENjUFpRF912qzUjH4B5rQm9WPK3PijKB%2BR1EodsyAuVlpW1NKX7GHFws19phWYt5oXqSshQMPouXiCXnz2IZSF%2FoSyGEro8%2F1m0nXafuUCY%2FHtcDZsBbb6aT9%2FXFw7jLqBZv%2B4YD1ebZfAqrUdCVDEu0TqRrm0iGvpBLzEQQJdE%2BCBOQ6u4n%2BiubjY6OmFt0%2Fu%2Bkz5iIuJEcsz9OxmQMJ0rw586MabTsUMGjCtqNB4NQrXtrY7NGI1QTNyusNSa%2BgXVY3P0MxD0tBnrSQwbr%2BY66n4JQlFDrpAwSxc5z3tmwr9C1bUX2HxKkTMkVbOz0J36BXlQwFO5NnUUbxOezhn4SpgOWSNYGLQdj3N62bLrpnC%2BhS9i5rq0SH0XpdB6Gml5UOlvMPxWE%2Fc86iAT8rhRdLOCmt5UY%2B9Pni%2FVxKYwqY2WJe7picFw51oa0cuj8mr6FcjmiUVDc%2FFi0k5Tdj4iEnoKsxkHFGQdjwjwU3oO9Yg5b6v0OVXDMkwEr06wMjaqxYEAOIZVtCtetAyOwxlNMqPcJSIPFRDJKkw8t74r%2FgfyvqVdkgV%2FE0cm4D6cfQ%2ByrOMpNZnusS1pHgJNpbXTWKH%2BFL8kQjl%2FyGMLyiMdrQwzNuHwwY6pgE8S8u9n4%2BrKvVg8d7Wf98h%2BI9e3GmDr0eDgPP5uMi3WNU%2FNgD3tuEH6T6aMDAlx2Z3POiol%2BZoswQwjaLbdUFaNvyrAZWY8dhDjwzhhZqSTPu1ZluwvZPEI31BVzwdfcay4uUaP2jYxCHjVi9DQbFEGBuW4kOu5w1GLc%2BSmvlH08fVEzSlkYCSMlxNWpctfnL%2Fp7120%2BuaDIvlvEt5zsQwrAE5qB%2Bm&X-Amz-Signature=aa2fb600605e34e05ba05ed0202435e535bb9755dfb38f3da3afe6b82cee1904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJU3UOH5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BXkJBJwaMxMBeu8f9E3jU2ev1yKLYArU5XWE3kxC1VAiACpc2DomIgwYIztt%2F7ktm%2BhT7n5%2F6wiiJCrbX%2BTSgzHCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyBXV8QAAQz%2FNOGkiKtwD3ct3%2B5bD8qwoV4ENjUFpRF912qzUjH4B5rQm9WPK3PijKB%2BR1EodsyAuVlpW1NKX7GHFws19phWYt5oXqSshQMPouXiCXnz2IZSF%2FoSyGEro8%2F1m0nXafuUCY%2FHtcDZsBbb6aT9%2FXFw7jLqBZv%2B4YD1ebZfAqrUdCVDEu0TqRrm0iGvpBLzEQQJdE%2BCBOQ6u4n%2BiubjY6OmFt0%2Fu%2Bkz5iIuJEcsz9OxmQMJ0rw586MabTsUMGjCtqNB4NQrXtrY7NGI1QTNyusNSa%2BgXVY3P0MxD0tBnrSQwbr%2BY66n4JQlFDrpAwSxc5z3tmwr9C1bUX2HxKkTMkVbOz0J36BXlQwFO5NnUUbxOezhn4SpgOWSNYGLQdj3N62bLrpnC%2BhS9i5rq0SH0XpdB6Gml5UOlvMPxWE%2Fc86iAT8rhRdLOCmt5UY%2B9Pni%2FVxKYwqY2WJe7picFw51oa0cuj8mr6FcjmiUVDc%2FFi0k5Tdj4iEnoKsxkHFGQdjwjwU3oO9Yg5b6v0OVXDMkwEr06wMjaqxYEAOIZVtCtetAyOwxlNMqPcJSIPFRDJKkw8t74r%2FgfyvqVdkgV%2FE0cm4D6cfQ%2ByrOMpNZnusS1pHgJNpbXTWKH%2BFL8kQjl%2FyGMLyiMdrQwzNuHwwY6pgE8S8u9n4%2BrKvVg8d7Wf98h%2BI9e3GmDr0eDgPP5uMi3WNU%2FNgD3tuEH6T6aMDAlx2Z3POiol%2BZoswQwjaLbdUFaNvyrAZWY8dhDjwzhhZqSTPu1ZluwvZPEI31BVzwdfcay4uUaP2jYxCHjVi9DQbFEGBuW4kOu5w1GLc%2BSmvlH08fVEzSlkYCSMlxNWpctfnL%2Fp7120%2BuaDIvlvEt5zsQwrAE5qB%2Bm&X-Amz-Signature=4379825812bb94a4897f287e835e067d04f8995fb8f325f4ecc0efae8219f520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJU3UOH5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BXkJBJwaMxMBeu8f9E3jU2ev1yKLYArU5XWE3kxC1VAiACpc2DomIgwYIztt%2F7ktm%2BhT7n5%2F6wiiJCrbX%2BTSgzHCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyBXV8QAAQz%2FNOGkiKtwD3ct3%2B5bD8qwoV4ENjUFpRF912qzUjH4B5rQm9WPK3PijKB%2BR1EodsyAuVlpW1NKX7GHFws19phWYt5oXqSshQMPouXiCXnz2IZSF%2FoSyGEro8%2F1m0nXafuUCY%2FHtcDZsBbb6aT9%2FXFw7jLqBZv%2B4YD1ebZfAqrUdCVDEu0TqRrm0iGvpBLzEQQJdE%2BCBOQ6u4n%2BiubjY6OmFt0%2Fu%2Bkz5iIuJEcsz9OxmQMJ0rw586MabTsUMGjCtqNB4NQrXtrY7NGI1QTNyusNSa%2BgXVY3P0MxD0tBnrSQwbr%2BY66n4JQlFDrpAwSxc5z3tmwr9C1bUX2HxKkTMkVbOz0J36BXlQwFO5NnUUbxOezhn4SpgOWSNYGLQdj3N62bLrpnC%2BhS9i5rq0SH0XpdB6Gml5UOlvMPxWE%2Fc86iAT8rhRdLOCmt5UY%2B9Pni%2FVxKYwqY2WJe7picFw51oa0cuj8mr6FcjmiUVDc%2FFi0k5Tdj4iEnoKsxkHFGQdjwjwU3oO9Yg5b6v0OVXDMkwEr06wMjaqxYEAOIZVtCtetAyOwxlNMqPcJSIPFRDJKkw8t74r%2FgfyvqVdkgV%2FE0cm4D6cfQ%2ByrOMpNZnusS1pHgJNpbXTWKH%2BFL8kQjl%2FyGMLyiMdrQwzNuHwwY6pgE8S8u9n4%2BrKvVg8d7Wf98h%2BI9e3GmDr0eDgPP5uMi3WNU%2FNgD3tuEH6T6aMDAlx2Z3POiol%2BZoswQwjaLbdUFaNvyrAZWY8dhDjwzhhZqSTPu1ZluwvZPEI31BVzwdfcay4uUaP2jYxCHjVi9DQbFEGBuW4kOu5w1GLc%2BSmvlH08fVEzSlkYCSMlxNWpctfnL%2Fp7120%2BuaDIvlvEt5zsQwrAE5qB%2Bm&X-Amz-Signature=30179d5a62ad755a102258122253168b16ae2620085b46543cd37990dcbb6cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
