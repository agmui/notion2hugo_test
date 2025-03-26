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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VXVMQB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcjJCTnssah5RrCrf8pQJbi2pjNfXCtzoQXrETy1jRvAiAXtgg8Rb0MnUR4rCz7zPioIdNFgpwdjNFAZgvNnfvhXCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM0KOm185H%2BseFXCGcKtwDlm9dVrbF9eneLWw%2Bvo7nZsb41LzexJ57g7PGMy%2FdKieBOi8r05qQ5HRekSxsMhbaG2azozlXruJ%2Fzudd4AfwJ6tvBzjPEOXzg8iWaVCKr35IUH%2B4EwOz3g%2B9%2FAaf7ObE9KIdI%2Bw%2B96UUaC%2FhORTBZgP1KM4u2zAUJd15PX8LQyr2aAUTk3oAW4NkGnF4RG%2FvB8XvL80entM317E9XdgzaJIqr5QDv%2BSV8tj86ksgzuUOAv1XvdjZzhJaB4lItDKPWIKbm2Sj12PMP7BhvRQf%2B4%2BGLmpObkb9aImTYJ7G4q0z3XZHa8rRNThYVhc60EhWYTDAmk3yVE0R%2BwEFeUHVTs%2BzXzezJxLl3BCvaBJz4RH%2FRk%2Fal7HpPUNgpW551H8r%2F0eH4BAqT4tCYwynLbKIwuxSYmDmC2%2F6tOPJ0Gp8ztBu4iy%2FvNPK1S%2BniVMzOvGhH1t4sNc4YHxtfljOqraN3R2X3N2uh3h5HEXyqHjQoI7p9iKKnTu2ZOvQgCDmX5wnCyTydOOPqXbu2zVg6RgUQDCBVfz%2FhuoFvudj%2BSofSVh9qkl5HwQQGUn%2BFzWUxOf8WhURJTYJA0WlckSsSH%2Bep0%2BLcqPkeDXRY6pRCSDyYg%2B8Gn%2BKjss4tHnxGiow2dqPvwY6pgF5CBjYZU6aZ%2BTJgDLg6cdCKpZg8NHPkQXZwX1rsqPvsgsdfzNul%2FtYKPSt%2BVqztcrtK6bNa3vztNPmyy%2FXpwvphido3L8s6WlzbEY1BQa2OsPwZhMrvz8numqCirR0rE9sMoi9PbhslFoZZck3DBusD2a%2FtOTHr8vMUhEwmVZzKxLwkKKRS%2FG8Wg4ClNfZ%2F%2B9E7he1v41bk%2FI5qZ3qJ%2BILmtPwAyjX&X-Amz-Signature=57ed59afb024c7bac3c977036cd5543e5e7b654382bdfad75d91d0ca41c6d5e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VXVMQB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcjJCTnssah5RrCrf8pQJbi2pjNfXCtzoQXrETy1jRvAiAXtgg8Rb0MnUR4rCz7zPioIdNFgpwdjNFAZgvNnfvhXCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM0KOm185H%2BseFXCGcKtwDlm9dVrbF9eneLWw%2Bvo7nZsb41LzexJ57g7PGMy%2FdKieBOi8r05qQ5HRekSxsMhbaG2azozlXruJ%2Fzudd4AfwJ6tvBzjPEOXzg8iWaVCKr35IUH%2B4EwOz3g%2B9%2FAaf7ObE9KIdI%2Bw%2B96UUaC%2FhORTBZgP1KM4u2zAUJd15PX8LQyr2aAUTk3oAW4NkGnF4RG%2FvB8XvL80entM317E9XdgzaJIqr5QDv%2BSV8tj86ksgzuUOAv1XvdjZzhJaB4lItDKPWIKbm2Sj12PMP7BhvRQf%2B4%2BGLmpObkb9aImTYJ7G4q0z3XZHa8rRNThYVhc60EhWYTDAmk3yVE0R%2BwEFeUHVTs%2BzXzezJxLl3BCvaBJz4RH%2FRk%2Fal7HpPUNgpW551H8r%2F0eH4BAqT4tCYwynLbKIwuxSYmDmC2%2F6tOPJ0Gp8ztBu4iy%2FvNPK1S%2BniVMzOvGhH1t4sNc4YHxtfljOqraN3R2X3N2uh3h5HEXyqHjQoI7p9iKKnTu2ZOvQgCDmX5wnCyTydOOPqXbu2zVg6RgUQDCBVfz%2FhuoFvudj%2BSofSVh9qkl5HwQQGUn%2BFzWUxOf8WhURJTYJA0WlckSsSH%2Bep0%2BLcqPkeDXRY6pRCSDyYg%2B8Gn%2BKjss4tHnxGiow2dqPvwY6pgF5CBjYZU6aZ%2BTJgDLg6cdCKpZg8NHPkQXZwX1rsqPvsgsdfzNul%2FtYKPSt%2BVqztcrtK6bNa3vztNPmyy%2FXpwvphido3L8s6WlzbEY1BQa2OsPwZhMrvz8numqCirR0rE9sMoi9PbhslFoZZck3DBusD2a%2FtOTHr8vMUhEwmVZzKxLwkKKRS%2FG8Wg4ClNfZ%2F%2B9E7he1v41bk%2FI5qZ3qJ%2BILmtPwAyjX&X-Amz-Signature=fbf406433413302e627110777814bb6fe6812d72d6c2aeddcfb3786bb24b022c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VXVMQB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcjJCTnssah5RrCrf8pQJbi2pjNfXCtzoQXrETy1jRvAiAXtgg8Rb0MnUR4rCz7zPioIdNFgpwdjNFAZgvNnfvhXCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM0KOm185H%2BseFXCGcKtwDlm9dVrbF9eneLWw%2Bvo7nZsb41LzexJ57g7PGMy%2FdKieBOi8r05qQ5HRekSxsMhbaG2azozlXruJ%2Fzudd4AfwJ6tvBzjPEOXzg8iWaVCKr35IUH%2B4EwOz3g%2B9%2FAaf7ObE9KIdI%2Bw%2B96UUaC%2FhORTBZgP1KM4u2zAUJd15PX8LQyr2aAUTk3oAW4NkGnF4RG%2FvB8XvL80entM317E9XdgzaJIqr5QDv%2BSV8tj86ksgzuUOAv1XvdjZzhJaB4lItDKPWIKbm2Sj12PMP7BhvRQf%2B4%2BGLmpObkb9aImTYJ7G4q0z3XZHa8rRNThYVhc60EhWYTDAmk3yVE0R%2BwEFeUHVTs%2BzXzezJxLl3BCvaBJz4RH%2FRk%2Fal7HpPUNgpW551H8r%2F0eH4BAqT4tCYwynLbKIwuxSYmDmC2%2F6tOPJ0Gp8ztBu4iy%2FvNPK1S%2BniVMzOvGhH1t4sNc4YHxtfljOqraN3R2X3N2uh3h5HEXyqHjQoI7p9iKKnTu2ZOvQgCDmX5wnCyTydOOPqXbu2zVg6RgUQDCBVfz%2FhuoFvudj%2BSofSVh9qkl5HwQQGUn%2BFzWUxOf8WhURJTYJA0WlckSsSH%2Bep0%2BLcqPkeDXRY6pRCSDyYg%2B8Gn%2BKjss4tHnxGiow2dqPvwY6pgF5CBjYZU6aZ%2BTJgDLg6cdCKpZg8NHPkQXZwX1rsqPvsgsdfzNul%2FtYKPSt%2BVqztcrtK6bNa3vztNPmyy%2FXpwvphido3L8s6WlzbEY1BQa2OsPwZhMrvz8numqCirR0rE9sMoi9PbhslFoZZck3DBusD2a%2FtOTHr8vMUhEwmVZzKxLwkKKRS%2FG8Wg4ClNfZ%2F%2B9E7he1v41bk%2FI5qZ3qJ%2BILmtPwAyjX&X-Amz-Signature=4ae3871f32aa0dbdefd37b1d0c58832662576466aa6c2ee476579482ceaa2e92&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VXVMQB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcjJCTnssah5RrCrf8pQJbi2pjNfXCtzoQXrETy1jRvAiAXtgg8Rb0MnUR4rCz7zPioIdNFgpwdjNFAZgvNnfvhXCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM0KOm185H%2BseFXCGcKtwDlm9dVrbF9eneLWw%2Bvo7nZsb41LzexJ57g7PGMy%2FdKieBOi8r05qQ5HRekSxsMhbaG2azozlXruJ%2Fzudd4AfwJ6tvBzjPEOXzg8iWaVCKr35IUH%2B4EwOz3g%2B9%2FAaf7ObE9KIdI%2Bw%2B96UUaC%2FhORTBZgP1KM4u2zAUJd15PX8LQyr2aAUTk3oAW4NkGnF4RG%2FvB8XvL80entM317E9XdgzaJIqr5QDv%2BSV8tj86ksgzuUOAv1XvdjZzhJaB4lItDKPWIKbm2Sj12PMP7BhvRQf%2B4%2BGLmpObkb9aImTYJ7G4q0z3XZHa8rRNThYVhc60EhWYTDAmk3yVE0R%2BwEFeUHVTs%2BzXzezJxLl3BCvaBJz4RH%2FRk%2Fal7HpPUNgpW551H8r%2F0eH4BAqT4tCYwynLbKIwuxSYmDmC2%2F6tOPJ0Gp8ztBu4iy%2FvNPK1S%2BniVMzOvGhH1t4sNc4YHxtfljOqraN3R2X3N2uh3h5HEXyqHjQoI7p9iKKnTu2ZOvQgCDmX5wnCyTydOOPqXbu2zVg6RgUQDCBVfz%2FhuoFvudj%2BSofSVh9qkl5HwQQGUn%2BFzWUxOf8WhURJTYJA0WlckSsSH%2Bep0%2BLcqPkeDXRY6pRCSDyYg%2B8Gn%2BKjss4tHnxGiow2dqPvwY6pgF5CBjYZU6aZ%2BTJgDLg6cdCKpZg8NHPkQXZwX1rsqPvsgsdfzNul%2FtYKPSt%2BVqztcrtK6bNa3vztNPmyy%2FXpwvphido3L8s6WlzbEY1BQa2OsPwZhMrvz8numqCirR0rE9sMoi9PbhslFoZZck3DBusD2a%2FtOTHr8vMUhEwmVZzKxLwkKKRS%2FG8Wg4ClNfZ%2F%2B9E7he1v41bk%2FI5qZ3qJ%2BILmtPwAyjX&X-Amz-Signature=b383266832c744abcd8c1bb4d5404b014a5337529bd84c39985a166123bd720c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VXVMQB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcjJCTnssah5RrCrf8pQJbi2pjNfXCtzoQXrETy1jRvAiAXtgg8Rb0MnUR4rCz7zPioIdNFgpwdjNFAZgvNnfvhXCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM0KOm185H%2BseFXCGcKtwDlm9dVrbF9eneLWw%2Bvo7nZsb41LzexJ57g7PGMy%2FdKieBOi8r05qQ5HRekSxsMhbaG2azozlXruJ%2Fzudd4AfwJ6tvBzjPEOXzg8iWaVCKr35IUH%2B4EwOz3g%2B9%2FAaf7ObE9KIdI%2Bw%2B96UUaC%2FhORTBZgP1KM4u2zAUJd15PX8LQyr2aAUTk3oAW4NkGnF4RG%2FvB8XvL80entM317E9XdgzaJIqr5QDv%2BSV8tj86ksgzuUOAv1XvdjZzhJaB4lItDKPWIKbm2Sj12PMP7BhvRQf%2B4%2BGLmpObkb9aImTYJ7G4q0z3XZHa8rRNThYVhc60EhWYTDAmk3yVE0R%2BwEFeUHVTs%2BzXzezJxLl3BCvaBJz4RH%2FRk%2Fal7HpPUNgpW551H8r%2F0eH4BAqT4tCYwynLbKIwuxSYmDmC2%2F6tOPJ0Gp8ztBu4iy%2FvNPK1S%2BniVMzOvGhH1t4sNc4YHxtfljOqraN3R2X3N2uh3h5HEXyqHjQoI7p9iKKnTu2ZOvQgCDmX5wnCyTydOOPqXbu2zVg6RgUQDCBVfz%2FhuoFvudj%2BSofSVh9qkl5HwQQGUn%2BFzWUxOf8WhURJTYJA0WlckSsSH%2Bep0%2BLcqPkeDXRY6pRCSDyYg%2B8Gn%2BKjss4tHnxGiow2dqPvwY6pgF5CBjYZU6aZ%2BTJgDLg6cdCKpZg8NHPkQXZwX1rsqPvsgsdfzNul%2FtYKPSt%2BVqztcrtK6bNa3vztNPmyy%2FXpwvphido3L8s6WlzbEY1BQa2OsPwZhMrvz8numqCirR0rE9sMoi9PbhslFoZZck3DBusD2a%2FtOTHr8vMUhEwmVZzKxLwkKKRS%2FG8Wg4ClNfZ%2F%2B9E7he1v41bk%2FI5qZ3qJ%2BILmtPwAyjX&X-Amz-Signature=d55ddfd6f24414ea1eca5eaa6989be8bcaed188d9ce16c7f511050eee818fbc3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
