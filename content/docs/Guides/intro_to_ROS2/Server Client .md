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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWJH4SJ%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTjLb1qm8e6DC5qhKx6TmvifEbSgDQ5HF8W74xB6cwEAIgHCK7rikM1t%2FBqhP7DkkikW1svg6hZCAYn%2BGLSxnziVgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNUaE3tTHbE7cabRnyrcA7GSbZH9D3%2B%2F8H0u3akOoHzM%2FdUXOrLTe8IVmXYq9BI8Rzn84%2BNklUHID82UTn2lFssZKT68n8PAoxRv8zklmWKDexAZ%2BrpSLWD0OsImFBmOR1K5UR8DmRaB0rvj0AITarYMXVKCvPBgJP93sPG75CMhWMsAeSYo%2BZoaurdveipiE6bb1P9YIGeqtx%2F10gqv%2FJ4v4gDbQblZpUuB%2F%2F2AsQjr%2B9PpplncfPNisNH%2FiWDS5EBviaQxa7X0IQiFZ791GvMZmGs8gjDTuPOp0kEe6hk54%2B70C1tEcdblZlkY%2FU70GEzENUbr2zFGwLRZaCIhn3EaKfH4mm4vfzAJr2o8Nd4vrGyPhqEJDUjNGeAsh85D7TWuNfHC538lZFAXsQYsScA4wOjby9K2SjvHd3WLp8VTk5kpDqAcXCDuyzWr3btQ2bM2Fvmo7%2B46alHR76Klb4lZT9YvV6evSR1GrJr29Jwj2pgh07rCUhpkuAI%2BP4z3QjOsEu0EVNCucxaZTzzItCXlHMF%2FnrAIO5HUtAE3%2B2KKPdjmYcujAVChbqelVWMNu4tQb8fBKqm4zhooVqfMNQGHNbhU%2BV3ObqspX0W%2FkfjWpwF7eOnspxTPRGxRmxplAsySID0K%2FfNvVjk8MJGvjs0GOqUBn3%2B%2FTvpBlae4%2FDZyPT38sLHQYlGUt6PAiPU0C3GKhT6oHjRDn4ILqpg3XtWlVmbbgKL%2Bv0%2BcccRUXPgUvxFDuGjwf7VRj8fuJnyw7HyUIxZCp%2BNtxcP15LhpoOf2PuCIxpF0rD4qsJ0%2F450RAxhumbNgNSBcsDcWHRthZAEohDgVX1WGo0REkLuh8q66chctuBC2nEDafFm0w%2B%2Bs4PyXMMNbqYyb&X-Amz-Signature=37e4f5ad9da8e8030d877a638d48555bb4a48876b9c7ee4772073334ee79cc25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWJH4SJ%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTjLb1qm8e6DC5qhKx6TmvifEbSgDQ5HF8W74xB6cwEAIgHCK7rikM1t%2FBqhP7DkkikW1svg6hZCAYn%2BGLSxnziVgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNUaE3tTHbE7cabRnyrcA7GSbZH9D3%2B%2F8H0u3akOoHzM%2FdUXOrLTe8IVmXYq9BI8Rzn84%2BNklUHID82UTn2lFssZKT68n8PAoxRv8zklmWKDexAZ%2BrpSLWD0OsImFBmOR1K5UR8DmRaB0rvj0AITarYMXVKCvPBgJP93sPG75CMhWMsAeSYo%2BZoaurdveipiE6bb1P9YIGeqtx%2F10gqv%2FJ4v4gDbQblZpUuB%2F%2F2AsQjr%2B9PpplncfPNisNH%2FiWDS5EBviaQxa7X0IQiFZ791GvMZmGs8gjDTuPOp0kEe6hk54%2B70C1tEcdblZlkY%2FU70GEzENUbr2zFGwLRZaCIhn3EaKfH4mm4vfzAJr2o8Nd4vrGyPhqEJDUjNGeAsh85D7TWuNfHC538lZFAXsQYsScA4wOjby9K2SjvHd3WLp8VTk5kpDqAcXCDuyzWr3btQ2bM2Fvmo7%2B46alHR76Klb4lZT9YvV6evSR1GrJr29Jwj2pgh07rCUhpkuAI%2BP4z3QjOsEu0EVNCucxaZTzzItCXlHMF%2FnrAIO5HUtAE3%2B2KKPdjmYcujAVChbqelVWMNu4tQb8fBKqm4zhooVqfMNQGHNbhU%2BV3ObqspX0W%2FkfjWpwF7eOnspxTPRGxRmxplAsySID0K%2FfNvVjk8MJGvjs0GOqUBn3%2B%2FTvpBlae4%2FDZyPT38sLHQYlGUt6PAiPU0C3GKhT6oHjRDn4ILqpg3XtWlVmbbgKL%2Bv0%2BcccRUXPgUvxFDuGjwf7VRj8fuJnyw7HyUIxZCp%2BNtxcP15LhpoOf2PuCIxpF0rD4qsJ0%2F450RAxhumbNgNSBcsDcWHRthZAEohDgVX1WGo0REkLuh8q66chctuBC2nEDafFm0w%2B%2Bs4PyXMMNbqYyb&X-Amz-Signature=8a9c28dab73894aadb544e22d3108f672eefaa23325244cb3d22b1429fa23c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWJH4SJ%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTjLb1qm8e6DC5qhKx6TmvifEbSgDQ5HF8W74xB6cwEAIgHCK7rikM1t%2FBqhP7DkkikW1svg6hZCAYn%2BGLSxnziVgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNUaE3tTHbE7cabRnyrcA7GSbZH9D3%2B%2F8H0u3akOoHzM%2FdUXOrLTe8IVmXYq9BI8Rzn84%2BNklUHID82UTn2lFssZKT68n8PAoxRv8zklmWKDexAZ%2BrpSLWD0OsImFBmOR1K5UR8DmRaB0rvj0AITarYMXVKCvPBgJP93sPG75CMhWMsAeSYo%2BZoaurdveipiE6bb1P9YIGeqtx%2F10gqv%2FJ4v4gDbQblZpUuB%2F%2F2AsQjr%2B9PpplncfPNisNH%2FiWDS5EBviaQxa7X0IQiFZ791GvMZmGs8gjDTuPOp0kEe6hk54%2B70C1tEcdblZlkY%2FU70GEzENUbr2zFGwLRZaCIhn3EaKfH4mm4vfzAJr2o8Nd4vrGyPhqEJDUjNGeAsh85D7TWuNfHC538lZFAXsQYsScA4wOjby9K2SjvHd3WLp8VTk5kpDqAcXCDuyzWr3btQ2bM2Fvmo7%2B46alHR76Klb4lZT9YvV6evSR1GrJr29Jwj2pgh07rCUhpkuAI%2BP4z3QjOsEu0EVNCucxaZTzzItCXlHMF%2FnrAIO5HUtAE3%2B2KKPdjmYcujAVChbqelVWMNu4tQb8fBKqm4zhooVqfMNQGHNbhU%2BV3ObqspX0W%2FkfjWpwF7eOnspxTPRGxRmxplAsySID0K%2FfNvVjk8MJGvjs0GOqUBn3%2B%2FTvpBlae4%2FDZyPT38sLHQYlGUt6PAiPU0C3GKhT6oHjRDn4ILqpg3XtWlVmbbgKL%2Bv0%2BcccRUXPgUvxFDuGjwf7VRj8fuJnyw7HyUIxZCp%2BNtxcP15LhpoOf2PuCIxpF0rD4qsJ0%2F450RAxhumbNgNSBcsDcWHRthZAEohDgVX1WGo0REkLuh8q66chctuBC2nEDafFm0w%2B%2Bs4PyXMMNbqYyb&X-Amz-Signature=78f8db6fa9ca6f2ff2b057e1f021393c998c5b01425ae2726e70d1fcefe1d61d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWJH4SJ%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTjLb1qm8e6DC5qhKx6TmvifEbSgDQ5HF8W74xB6cwEAIgHCK7rikM1t%2FBqhP7DkkikW1svg6hZCAYn%2BGLSxnziVgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNUaE3tTHbE7cabRnyrcA7GSbZH9D3%2B%2F8H0u3akOoHzM%2FdUXOrLTe8IVmXYq9BI8Rzn84%2BNklUHID82UTn2lFssZKT68n8PAoxRv8zklmWKDexAZ%2BrpSLWD0OsImFBmOR1K5UR8DmRaB0rvj0AITarYMXVKCvPBgJP93sPG75CMhWMsAeSYo%2BZoaurdveipiE6bb1P9YIGeqtx%2F10gqv%2FJ4v4gDbQblZpUuB%2F%2F2AsQjr%2B9PpplncfPNisNH%2FiWDS5EBviaQxa7X0IQiFZ791GvMZmGs8gjDTuPOp0kEe6hk54%2B70C1tEcdblZlkY%2FU70GEzENUbr2zFGwLRZaCIhn3EaKfH4mm4vfzAJr2o8Nd4vrGyPhqEJDUjNGeAsh85D7TWuNfHC538lZFAXsQYsScA4wOjby9K2SjvHd3WLp8VTk5kpDqAcXCDuyzWr3btQ2bM2Fvmo7%2B46alHR76Klb4lZT9YvV6evSR1GrJr29Jwj2pgh07rCUhpkuAI%2BP4z3QjOsEu0EVNCucxaZTzzItCXlHMF%2FnrAIO5HUtAE3%2B2KKPdjmYcujAVChbqelVWMNu4tQb8fBKqm4zhooVqfMNQGHNbhU%2BV3ObqspX0W%2FkfjWpwF7eOnspxTPRGxRmxplAsySID0K%2FfNvVjk8MJGvjs0GOqUBn3%2B%2FTvpBlae4%2FDZyPT38sLHQYlGUt6PAiPU0C3GKhT6oHjRDn4ILqpg3XtWlVmbbgKL%2Bv0%2BcccRUXPgUvxFDuGjwf7VRj8fuJnyw7HyUIxZCp%2BNtxcP15LhpoOf2PuCIxpF0rD4qsJ0%2F450RAxhumbNgNSBcsDcWHRthZAEohDgVX1WGo0REkLuh8q66chctuBC2nEDafFm0w%2B%2Bs4PyXMMNbqYyb&X-Amz-Signature=59dc9ed69ba081ea95b323b37d2589d63802720ac5ca7590f9ec0baa8eda9db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWJH4SJ%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTjLb1qm8e6DC5qhKx6TmvifEbSgDQ5HF8W74xB6cwEAIgHCK7rikM1t%2FBqhP7DkkikW1svg6hZCAYn%2BGLSxnziVgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNUaE3tTHbE7cabRnyrcA7GSbZH9D3%2B%2F8H0u3akOoHzM%2FdUXOrLTe8IVmXYq9BI8Rzn84%2BNklUHID82UTn2lFssZKT68n8PAoxRv8zklmWKDexAZ%2BrpSLWD0OsImFBmOR1K5UR8DmRaB0rvj0AITarYMXVKCvPBgJP93sPG75CMhWMsAeSYo%2BZoaurdveipiE6bb1P9YIGeqtx%2F10gqv%2FJ4v4gDbQblZpUuB%2F%2F2AsQjr%2B9PpplncfPNisNH%2FiWDS5EBviaQxa7X0IQiFZ791GvMZmGs8gjDTuPOp0kEe6hk54%2B70C1tEcdblZlkY%2FU70GEzENUbr2zFGwLRZaCIhn3EaKfH4mm4vfzAJr2o8Nd4vrGyPhqEJDUjNGeAsh85D7TWuNfHC538lZFAXsQYsScA4wOjby9K2SjvHd3WLp8VTk5kpDqAcXCDuyzWr3btQ2bM2Fvmo7%2B46alHR76Klb4lZT9YvV6evSR1GrJr29Jwj2pgh07rCUhpkuAI%2BP4z3QjOsEu0EVNCucxaZTzzItCXlHMF%2FnrAIO5HUtAE3%2B2KKPdjmYcujAVChbqelVWMNu4tQb8fBKqm4zhooVqfMNQGHNbhU%2BV3ObqspX0W%2FkfjWpwF7eOnspxTPRGxRmxplAsySID0K%2FfNvVjk8MJGvjs0GOqUBn3%2B%2FTvpBlae4%2FDZyPT38sLHQYlGUt6PAiPU0C3GKhT6oHjRDn4ILqpg3XtWlVmbbgKL%2Bv0%2BcccRUXPgUvxFDuGjwf7VRj8fuJnyw7HyUIxZCp%2BNtxcP15LhpoOf2PuCIxpF0rD4qsJ0%2F450RAxhumbNgNSBcsDcWHRthZAEohDgVX1WGo0REkLuh8q66chctuBC2nEDafFm0w%2B%2Bs4PyXMMNbqYyb&X-Amz-Signature=a47fb6fe7ca0f8ac9e807fcbdc3cc5b8d4798241d0fe85b92cd6ddf4acfba9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
