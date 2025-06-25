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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUOLY2I%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBDJgv1CrwJu5IXa6i3VXBGGSbCN%2BnyPz2Zma1hD32q3AiEAhR%2F2rU92mjN3Stxja%2FxRKubh%2BjmGDJr3yrHkxAG6W7cq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD0u8zL1nK5DbfjUmCrcA%2B7kMpN9RclB82%2FtoX3HEQWHvk3Ly1uo%2FpQq59hv%2BKYaTvNgLlxPqVD4eZ3AsjWeDiZM19%2BlUNE%2F%2BmOmyFo%2F20at6mYtWAF4xz6KvaV%2FCtrSCTTo6C5esW7oERLnHFbf2ineSsGIvrcHA7PbFhH%2B7%2BfuulN64EqGzZV1hE7bS0AIsG7eA1riAJEgMNH3wcyT7Ii28Wlb3Yh2ysJsAUm3wf%2BbfJNHAsMl%2Bpa%2FlfIdftUZyBN7TPDzY4UVRtonWMPcNb2Jqp34isIUKQjQ5mhKqP0uZ%2BLSVGEPQIzUJfGn6fLm8WWATo%2BDLgeqzPfyu8SlTG7qGGSWTxcttuyQbu4aYGvEaFE8QOhNM3fcxAnJTYSZVlGiIaqjrWvxZytkT4POlzl4NdQrOqoEyL%2Fue5vxHekBP%2BxYybNiPfpPtRTYBNAyOgw0SEzpkD647hcqnVVpZmbd%2Bz8J2qaBons1pG%2FLQIBFKDzaC0BpFdnZWBZMZHs7u1ejzFyCRTx5gr7%2FBsf5D3%2BFR8d%2BI93kIuxjDPEXt0qd%2BMQnvGuyjzGZ5FnDPesUy0y5wGNVdyN%2BG1seGAOzoFSkRgK4aKGIxjQKb6bIzo2mid7NXXb9dFHvfuJMsQnGEwlHDjZn%2FchDBetLMI%2BS8MIGOqUBdGVs7DwdhTIkerHjjPKzxGyBUpFB9mLHxl4kxQrHlKauAJuEwUano%2FdZLuE2tN7VslOF17Ge%2BYRPk9R2AhVing%2BD8NJg3pzAic7CHSxnwUqjJMBRluLPnusPpMMVs97Mx0kYuYTUOx%2BEElKiH10DSM5zo%2BM6IT8y4OzxeHFE9Mc%2FWRksJFYre4IpsYsz3QSoRfUoqLoLodwT6qbTVMEocqLiSNsP&X-Amz-Signature=518e0d3e23bf3f65bca6373205273f1875f32d1d4206690c9e081bcdac3627d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUOLY2I%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBDJgv1CrwJu5IXa6i3VXBGGSbCN%2BnyPz2Zma1hD32q3AiEAhR%2F2rU92mjN3Stxja%2FxRKubh%2BjmGDJr3yrHkxAG6W7cq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD0u8zL1nK5DbfjUmCrcA%2B7kMpN9RclB82%2FtoX3HEQWHvk3Ly1uo%2FpQq59hv%2BKYaTvNgLlxPqVD4eZ3AsjWeDiZM19%2BlUNE%2F%2BmOmyFo%2F20at6mYtWAF4xz6KvaV%2FCtrSCTTo6C5esW7oERLnHFbf2ineSsGIvrcHA7PbFhH%2B7%2BfuulN64EqGzZV1hE7bS0AIsG7eA1riAJEgMNH3wcyT7Ii28Wlb3Yh2ysJsAUm3wf%2BbfJNHAsMl%2Bpa%2FlfIdftUZyBN7TPDzY4UVRtonWMPcNb2Jqp34isIUKQjQ5mhKqP0uZ%2BLSVGEPQIzUJfGn6fLm8WWATo%2BDLgeqzPfyu8SlTG7qGGSWTxcttuyQbu4aYGvEaFE8QOhNM3fcxAnJTYSZVlGiIaqjrWvxZytkT4POlzl4NdQrOqoEyL%2Fue5vxHekBP%2BxYybNiPfpPtRTYBNAyOgw0SEzpkD647hcqnVVpZmbd%2Bz8J2qaBons1pG%2FLQIBFKDzaC0BpFdnZWBZMZHs7u1ejzFyCRTx5gr7%2FBsf5D3%2BFR8d%2BI93kIuxjDPEXt0qd%2BMQnvGuyjzGZ5FnDPesUy0y5wGNVdyN%2BG1seGAOzoFSkRgK4aKGIxjQKb6bIzo2mid7NXXb9dFHvfuJMsQnGEwlHDjZn%2FchDBetLMI%2BS8MIGOqUBdGVs7DwdhTIkerHjjPKzxGyBUpFB9mLHxl4kxQrHlKauAJuEwUano%2FdZLuE2tN7VslOF17Ge%2BYRPk9R2AhVing%2BD8NJg3pzAic7CHSxnwUqjJMBRluLPnusPpMMVs97Mx0kYuYTUOx%2BEElKiH10DSM5zo%2BM6IT8y4OzxeHFE9Mc%2FWRksJFYre4IpsYsz3QSoRfUoqLoLodwT6qbTVMEocqLiSNsP&X-Amz-Signature=a18135374f4df0417505a16baa4914041ebd67500883c6cdec21fd06fa94bfde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUOLY2I%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBDJgv1CrwJu5IXa6i3VXBGGSbCN%2BnyPz2Zma1hD32q3AiEAhR%2F2rU92mjN3Stxja%2FxRKubh%2BjmGDJr3yrHkxAG6W7cq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD0u8zL1nK5DbfjUmCrcA%2B7kMpN9RclB82%2FtoX3HEQWHvk3Ly1uo%2FpQq59hv%2BKYaTvNgLlxPqVD4eZ3AsjWeDiZM19%2BlUNE%2F%2BmOmyFo%2F20at6mYtWAF4xz6KvaV%2FCtrSCTTo6C5esW7oERLnHFbf2ineSsGIvrcHA7PbFhH%2B7%2BfuulN64EqGzZV1hE7bS0AIsG7eA1riAJEgMNH3wcyT7Ii28Wlb3Yh2ysJsAUm3wf%2BbfJNHAsMl%2Bpa%2FlfIdftUZyBN7TPDzY4UVRtonWMPcNb2Jqp34isIUKQjQ5mhKqP0uZ%2BLSVGEPQIzUJfGn6fLm8WWATo%2BDLgeqzPfyu8SlTG7qGGSWTxcttuyQbu4aYGvEaFE8QOhNM3fcxAnJTYSZVlGiIaqjrWvxZytkT4POlzl4NdQrOqoEyL%2Fue5vxHekBP%2BxYybNiPfpPtRTYBNAyOgw0SEzpkD647hcqnVVpZmbd%2Bz8J2qaBons1pG%2FLQIBFKDzaC0BpFdnZWBZMZHs7u1ejzFyCRTx5gr7%2FBsf5D3%2BFR8d%2BI93kIuxjDPEXt0qd%2BMQnvGuyjzGZ5FnDPesUy0y5wGNVdyN%2BG1seGAOzoFSkRgK4aKGIxjQKb6bIzo2mid7NXXb9dFHvfuJMsQnGEwlHDjZn%2FchDBetLMI%2BS8MIGOqUBdGVs7DwdhTIkerHjjPKzxGyBUpFB9mLHxl4kxQrHlKauAJuEwUano%2FdZLuE2tN7VslOF17Ge%2BYRPk9R2AhVing%2BD8NJg3pzAic7CHSxnwUqjJMBRluLPnusPpMMVs97Mx0kYuYTUOx%2BEElKiH10DSM5zo%2BM6IT8y4OzxeHFE9Mc%2FWRksJFYre4IpsYsz3QSoRfUoqLoLodwT6qbTVMEocqLiSNsP&X-Amz-Signature=3b2517bc84e8c3fce28720840e7e68f28ce9350b390c9c4900b3346740808ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUOLY2I%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBDJgv1CrwJu5IXa6i3VXBGGSbCN%2BnyPz2Zma1hD32q3AiEAhR%2F2rU92mjN3Stxja%2FxRKubh%2BjmGDJr3yrHkxAG6W7cq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD0u8zL1nK5DbfjUmCrcA%2B7kMpN9RclB82%2FtoX3HEQWHvk3Ly1uo%2FpQq59hv%2BKYaTvNgLlxPqVD4eZ3AsjWeDiZM19%2BlUNE%2F%2BmOmyFo%2F20at6mYtWAF4xz6KvaV%2FCtrSCTTo6C5esW7oERLnHFbf2ineSsGIvrcHA7PbFhH%2B7%2BfuulN64EqGzZV1hE7bS0AIsG7eA1riAJEgMNH3wcyT7Ii28Wlb3Yh2ysJsAUm3wf%2BbfJNHAsMl%2Bpa%2FlfIdftUZyBN7TPDzY4UVRtonWMPcNb2Jqp34isIUKQjQ5mhKqP0uZ%2BLSVGEPQIzUJfGn6fLm8WWATo%2BDLgeqzPfyu8SlTG7qGGSWTxcttuyQbu4aYGvEaFE8QOhNM3fcxAnJTYSZVlGiIaqjrWvxZytkT4POlzl4NdQrOqoEyL%2Fue5vxHekBP%2BxYybNiPfpPtRTYBNAyOgw0SEzpkD647hcqnVVpZmbd%2Bz8J2qaBons1pG%2FLQIBFKDzaC0BpFdnZWBZMZHs7u1ejzFyCRTx5gr7%2FBsf5D3%2BFR8d%2BI93kIuxjDPEXt0qd%2BMQnvGuyjzGZ5FnDPesUy0y5wGNVdyN%2BG1seGAOzoFSkRgK4aKGIxjQKb6bIzo2mid7NXXb9dFHvfuJMsQnGEwlHDjZn%2FchDBetLMI%2BS8MIGOqUBdGVs7DwdhTIkerHjjPKzxGyBUpFB9mLHxl4kxQrHlKauAJuEwUano%2FdZLuE2tN7VslOF17Ge%2BYRPk9R2AhVing%2BD8NJg3pzAic7CHSxnwUqjJMBRluLPnusPpMMVs97Mx0kYuYTUOx%2BEElKiH10DSM5zo%2BM6IT8y4OzxeHFE9Mc%2FWRksJFYre4IpsYsz3QSoRfUoqLoLodwT6qbTVMEocqLiSNsP&X-Amz-Signature=c9ffcee6cf4d47adc59cff74447e5a878e0144c530e80bbcf0c38fea1c15df07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUOLY2I%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBDJgv1CrwJu5IXa6i3VXBGGSbCN%2BnyPz2Zma1hD32q3AiEAhR%2F2rU92mjN3Stxja%2FxRKubh%2BjmGDJr3yrHkxAG6W7cq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD0u8zL1nK5DbfjUmCrcA%2B7kMpN9RclB82%2FtoX3HEQWHvk3Ly1uo%2FpQq59hv%2BKYaTvNgLlxPqVD4eZ3AsjWeDiZM19%2BlUNE%2F%2BmOmyFo%2F20at6mYtWAF4xz6KvaV%2FCtrSCTTo6C5esW7oERLnHFbf2ineSsGIvrcHA7PbFhH%2B7%2BfuulN64EqGzZV1hE7bS0AIsG7eA1riAJEgMNH3wcyT7Ii28Wlb3Yh2ysJsAUm3wf%2BbfJNHAsMl%2Bpa%2FlfIdftUZyBN7TPDzY4UVRtonWMPcNb2Jqp34isIUKQjQ5mhKqP0uZ%2BLSVGEPQIzUJfGn6fLm8WWATo%2BDLgeqzPfyu8SlTG7qGGSWTxcttuyQbu4aYGvEaFE8QOhNM3fcxAnJTYSZVlGiIaqjrWvxZytkT4POlzl4NdQrOqoEyL%2Fue5vxHekBP%2BxYybNiPfpPtRTYBNAyOgw0SEzpkD647hcqnVVpZmbd%2Bz8J2qaBons1pG%2FLQIBFKDzaC0BpFdnZWBZMZHs7u1ejzFyCRTx5gr7%2FBsf5D3%2BFR8d%2BI93kIuxjDPEXt0qd%2BMQnvGuyjzGZ5FnDPesUy0y5wGNVdyN%2BG1seGAOzoFSkRgK4aKGIxjQKb6bIzo2mid7NXXb9dFHvfuJMsQnGEwlHDjZn%2FchDBetLMI%2BS8MIGOqUBdGVs7DwdhTIkerHjjPKzxGyBUpFB9mLHxl4kxQrHlKauAJuEwUano%2FdZLuE2tN7VslOF17Ge%2BYRPk9R2AhVing%2BD8NJg3pzAic7CHSxnwUqjJMBRluLPnusPpMMVs97Mx0kYuYTUOx%2BEElKiH10DSM5zo%2BM6IT8y4OzxeHFE9Mc%2FWRksJFYre4IpsYsz3QSoRfUoqLoLodwT6qbTVMEocqLiSNsP&X-Amz-Signature=c114f05154480f886a35b94d863491f687ffd7d67948b1785d0c5d06be27f8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
