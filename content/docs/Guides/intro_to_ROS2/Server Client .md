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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJAE463V%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQD%2F5BEg1pYncn94tujm5i%2FZaPQ%2FBCGRhWnhjVaPn3V3WwIhAKw1TTp6BPVYUVO1CAJFq3X31N%2FcOJtP4bJCKLDYPMs2Kv8DCGkQABoMNjM3NDIzMTgzODA1IgyMt%2F5lo4rPa5yUd6cq3AOnqIwE87Qo1nywydo0PMjgst%2F05JG7wcJkmpdMQLQkspnTiLcKmM2p1llXCQabKaE0v9BxJeqWVt4SKh6E08a6ZfCVWZo6RR%2Bwahb7lCHoRBa6XkQBA06CwESZdrMB%2F131FRQKxPgG%2FXOuzpuD8jfrTa21Gevw4sH75mCdIlKhnMVj7HGPpPB%2BQL5xIPJsTrI3rqCJ5EXAtNRZB%2FqwfdN5jS4CAatRUat1j0bY8uXFzGeg7vqFLhNOJt0LEnVfxdHvneZPqp0PNIAme7uHVwMx6W3rIdfOHXG0Wqp1f3njwGahtzAh38SqpzaX5nGLfXahbLjSwaG4AO9felbp8dPLDSY9KozoaQXVhw8aS3G3anrvG3f2HMinx2MVMPm7KeWrTe7kmqJIy7Kne8i4T0Jk0D%2FwkN6GlLdKwxzVTcsdlh30Z%2Btbe%2FVZduh%2BY0k60KjmBh%2FkapvwCBwL%2Fq%2FHhD0Xem5VbTpeN5zwUZ5AUneh4SE0kSPqwpAfX4PVyVFWzOln65pKhJLzBjHBvZKez6GzoGhNliwHELASjBEb%2FEIkuyx9k7h3NlNNR2VPOAugSxckIut5cXRF9awWBS5%2F1OEIR44hq8KgPvexd5H9VGmKGOTayMhvto6bSm1ayDCVm5W9BjqkAW3rz1PiHRdzQQLEfBOnBqy2UWSOF0LjCGUkdJqfhVyeI8Yx%2FnkKA%2F9Fb05kzbQwU8fd1Koxtpguy0BfzPq1xT%2BGr2pVmXhftU5DTQiklL5yOeuVAfoKCXTlE9qoIhZrmrvy0YhEtXPz0TZHnju9QPNmjHebemNJREgef1hRyoOSD3WlygjvdqmFq1Zd2u2H%2BnONG7CBbLaKX6ZCkSbiVDNn56KX&X-Amz-Signature=4cbe0e19df401cd2fc262db8b8b4d785d546af301b766db31fcb5e8a5c6d22ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJAE463V%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQD%2F5BEg1pYncn94tujm5i%2FZaPQ%2FBCGRhWnhjVaPn3V3WwIhAKw1TTp6BPVYUVO1CAJFq3X31N%2FcOJtP4bJCKLDYPMs2Kv8DCGkQABoMNjM3NDIzMTgzODA1IgyMt%2F5lo4rPa5yUd6cq3AOnqIwE87Qo1nywydo0PMjgst%2F05JG7wcJkmpdMQLQkspnTiLcKmM2p1llXCQabKaE0v9BxJeqWVt4SKh6E08a6ZfCVWZo6RR%2Bwahb7lCHoRBa6XkQBA06CwESZdrMB%2F131FRQKxPgG%2FXOuzpuD8jfrTa21Gevw4sH75mCdIlKhnMVj7HGPpPB%2BQL5xIPJsTrI3rqCJ5EXAtNRZB%2FqwfdN5jS4CAatRUat1j0bY8uXFzGeg7vqFLhNOJt0LEnVfxdHvneZPqp0PNIAme7uHVwMx6W3rIdfOHXG0Wqp1f3njwGahtzAh38SqpzaX5nGLfXahbLjSwaG4AO9felbp8dPLDSY9KozoaQXVhw8aS3G3anrvG3f2HMinx2MVMPm7KeWrTe7kmqJIy7Kne8i4T0Jk0D%2FwkN6GlLdKwxzVTcsdlh30Z%2Btbe%2FVZduh%2BY0k60KjmBh%2FkapvwCBwL%2Fq%2FHhD0Xem5VbTpeN5zwUZ5AUneh4SE0kSPqwpAfX4PVyVFWzOln65pKhJLzBjHBvZKez6GzoGhNliwHELASjBEb%2FEIkuyx9k7h3NlNNR2VPOAugSxckIut5cXRF9awWBS5%2F1OEIR44hq8KgPvexd5H9VGmKGOTayMhvto6bSm1ayDCVm5W9BjqkAW3rz1PiHRdzQQLEfBOnBqy2UWSOF0LjCGUkdJqfhVyeI8Yx%2FnkKA%2F9Fb05kzbQwU8fd1Koxtpguy0BfzPq1xT%2BGr2pVmXhftU5DTQiklL5yOeuVAfoKCXTlE9qoIhZrmrvy0YhEtXPz0TZHnju9QPNmjHebemNJREgef1hRyoOSD3WlygjvdqmFq1Zd2u2H%2BnONG7CBbLaKX6ZCkSbiVDNn56KX&X-Amz-Signature=225a27cbff4aa6c7bd3e2e239ac6d4db49e06556a4cea22a8774e31d36ac0c28&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJAE463V%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQD%2F5BEg1pYncn94tujm5i%2FZaPQ%2FBCGRhWnhjVaPn3V3WwIhAKw1TTp6BPVYUVO1CAJFq3X31N%2FcOJtP4bJCKLDYPMs2Kv8DCGkQABoMNjM3NDIzMTgzODA1IgyMt%2F5lo4rPa5yUd6cq3AOnqIwE87Qo1nywydo0PMjgst%2F05JG7wcJkmpdMQLQkspnTiLcKmM2p1llXCQabKaE0v9BxJeqWVt4SKh6E08a6ZfCVWZo6RR%2Bwahb7lCHoRBa6XkQBA06CwESZdrMB%2F131FRQKxPgG%2FXOuzpuD8jfrTa21Gevw4sH75mCdIlKhnMVj7HGPpPB%2BQL5xIPJsTrI3rqCJ5EXAtNRZB%2FqwfdN5jS4CAatRUat1j0bY8uXFzGeg7vqFLhNOJt0LEnVfxdHvneZPqp0PNIAme7uHVwMx6W3rIdfOHXG0Wqp1f3njwGahtzAh38SqpzaX5nGLfXahbLjSwaG4AO9felbp8dPLDSY9KozoaQXVhw8aS3G3anrvG3f2HMinx2MVMPm7KeWrTe7kmqJIy7Kne8i4T0Jk0D%2FwkN6GlLdKwxzVTcsdlh30Z%2Btbe%2FVZduh%2BY0k60KjmBh%2FkapvwCBwL%2Fq%2FHhD0Xem5VbTpeN5zwUZ5AUneh4SE0kSPqwpAfX4PVyVFWzOln65pKhJLzBjHBvZKez6GzoGhNliwHELASjBEb%2FEIkuyx9k7h3NlNNR2VPOAugSxckIut5cXRF9awWBS5%2F1OEIR44hq8KgPvexd5H9VGmKGOTayMhvto6bSm1ayDCVm5W9BjqkAW3rz1PiHRdzQQLEfBOnBqy2UWSOF0LjCGUkdJqfhVyeI8Yx%2FnkKA%2F9Fb05kzbQwU8fd1Koxtpguy0BfzPq1xT%2BGr2pVmXhftU5DTQiklL5yOeuVAfoKCXTlE9qoIhZrmrvy0YhEtXPz0TZHnju9QPNmjHebemNJREgef1hRyoOSD3WlygjvdqmFq1Zd2u2H%2BnONG7CBbLaKX6ZCkSbiVDNn56KX&X-Amz-Signature=2fe6d95c3c1a7c25210d4b3de85dd1624acdc2661e97d749573c958570892b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJAE463V%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQD%2F5BEg1pYncn94tujm5i%2FZaPQ%2FBCGRhWnhjVaPn3V3WwIhAKw1TTp6BPVYUVO1CAJFq3X31N%2FcOJtP4bJCKLDYPMs2Kv8DCGkQABoMNjM3NDIzMTgzODA1IgyMt%2F5lo4rPa5yUd6cq3AOnqIwE87Qo1nywydo0PMjgst%2F05JG7wcJkmpdMQLQkspnTiLcKmM2p1llXCQabKaE0v9BxJeqWVt4SKh6E08a6ZfCVWZo6RR%2Bwahb7lCHoRBa6XkQBA06CwESZdrMB%2F131FRQKxPgG%2FXOuzpuD8jfrTa21Gevw4sH75mCdIlKhnMVj7HGPpPB%2BQL5xIPJsTrI3rqCJ5EXAtNRZB%2FqwfdN5jS4CAatRUat1j0bY8uXFzGeg7vqFLhNOJt0LEnVfxdHvneZPqp0PNIAme7uHVwMx6W3rIdfOHXG0Wqp1f3njwGahtzAh38SqpzaX5nGLfXahbLjSwaG4AO9felbp8dPLDSY9KozoaQXVhw8aS3G3anrvG3f2HMinx2MVMPm7KeWrTe7kmqJIy7Kne8i4T0Jk0D%2FwkN6GlLdKwxzVTcsdlh30Z%2Btbe%2FVZduh%2BY0k60KjmBh%2FkapvwCBwL%2Fq%2FHhD0Xem5VbTpeN5zwUZ5AUneh4SE0kSPqwpAfX4PVyVFWzOln65pKhJLzBjHBvZKez6GzoGhNliwHELASjBEb%2FEIkuyx9k7h3NlNNR2VPOAugSxckIut5cXRF9awWBS5%2F1OEIR44hq8KgPvexd5H9VGmKGOTayMhvto6bSm1ayDCVm5W9BjqkAW3rz1PiHRdzQQLEfBOnBqy2UWSOF0LjCGUkdJqfhVyeI8Yx%2FnkKA%2F9Fb05kzbQwU8fd1Koxtpguy0BfzPq1xT%2BGr2pVmXhftU5DTQiklL5yOeuVAfoKCXTlE9qoIhZrmrvy0YhEtXPz0TZHnju9QPNmjHebemNJREgef1hRyoOSD3WlygjvdqmFq1Zd2u2H%2BnONG7CBbLaKX6ZCkSbiVDNn56KX&X-Amz-Signature=e0de9a812f91874b45f5906359f59121fb77341727599e07d5b5e80800b3851b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJAE463V%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQD%2F5BEg1pYncn94tujm5i%2FZaPQ%2FBCGRhWnhjVaPn3V3WwIhAKw1TTp6BPVYUVO1CAJFq3X31N%2FcOJtP4bJCKLDYPMs2Kv8DCGkQABoMNjM3NDIzMTgzODA1IgyMt%2F5lo4rPa5yUd6cq3AOnqIwE87Qo1nywydo0PMjgst%2F05JG7wcJkmpdMQLQkspnTiLcKmM2p1llXCQabKaE0v9BxJeqWVt4SKh6E08a6ZfCVWZo6RR%2Bwahb7lCHoRBa6XkQBA06CwESZdrMB%2F131FRQKxPgG%2FXOuzpuD8jfrTa21Gevw4sH75mCdIlKhnMVj7HGPpPB%2BQL5xIPJsTrI3rqCJ5EXAtNRZB%2FqwfdN5jS4CAatRUat1j0bY8uXFzGeg7vqFLhNOJt0LEnVfxdHvneZPqp0PNIAme7uHVwMx6W3rIdfOHXG0Wqp1f3njwGahtzAh38SqpzaX5nGLfXahbLjSwaG4AO9felbp8dPLDSY9KozoaQXVhw8aS3G3anrvG3f2HMinx2MVMPm7KeWrTe7kmqJIy7Kne8i4T0Jk0D%2FwkN6GlLdKwxzVTcsdlh30Z%2Btbe%2FVZduh%2BY0k60KjmBh%2FkapvwCBwL%2Fq%2FHhD0Xem5VbTpeN5zwUZ5AUneh4SE0kSPqwpAfX4PVyVFWzOln65pKhJLzBjHBvZKez6GzoGhNliwHELASjBEb%2FEIkuyx9k7h3NlNNR2VPOAugSxckIut5cXRF9awWBS5%2F1OEIR44hq8KgPvexd5H9VGmKGOTayMhvto6bSm1ayDCVm5W9BjqkAW3rz1PiHRdzQQLEfBOnBqy2UWSOF0LjCGUkdJqfhVyeI8Yx%2FnkKA%2F9Fb05kzbQwU8fd1Koxtpguy0BfzPq1xT%2BGr2pVmXhftU5DTQiklL5yOeuVAfoKCXTlE9qoIhZrmrvy0YhEtXPz0TZHnju9QPNmjHebemNJREgef1hRyoOSD3WlygjvdqmFq1Zd2u2H%2BnONG7CBbLaKX6ZCkSbiVDNn56KX&X-Amz-Signature=7f9a1142a4a8d07561e8c0df7fd622a661635f58a098d0af369ef5e914949ec1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
