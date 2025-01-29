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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFHUBSN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2rXeInoIfZRD0dmQRHmvMrYX%2FYA1PyjixKhQaUnMjNAiEAq2FCzmFiYZ3q4chp97LHqNpQ%2BGL7vsi5pMzKCFw1E8MqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJXoG3D3lHr1uUMQircA8OKSa14WlOFVQfT2Pjy6EY5meDjtocsva%2B7TUrYXD0ZYgJTwz4LYJTBPL75NjZNglogiEsutBIK9hdLo%2B25Ucdk3dW81p4lU0KrdJg7WTZrKRPslmyKkhJ7hwrBXgJmXgLsJqIJIFfs8Aq1QL8PxZ7wWSWHgacPYAWnq1oUcnOVR%2FVYt%2FJxIpmHPG%2BreAlhd60emNRxwg%2FgTjKTN%2BFqhTtkGziv9R4mwbWQMtEOitLqigVLL5qCNDF1bqdFn8rATC%2FfR1AB4U1nRE7YddIFg837zssbR%2FqYU7n0kOwBf6inbDVQcRv7m59BZimtYoY0k1rXU7C9z37CCiltUZb4z3fBMkCubh0%2B3X8ZjmJ6BLw6JYzulhyFz9V8j6wQWXb9MlazMNJZXHVISLtac31d38PsWwTREFkmSyCN2xtZsljZ1ay67CTWg9W%2BEvPubiwN31Q5cVfprsEOxqVTzvvIMc6iG%2BltxvRCzDedsm1qbqYbeHh73AnLMTE773BHAravl2ZoS59hNsy2DelVBWac1yPHHQZpb3XBBc0V6K81jpzmjaoQsRt14qxuZ0AKHs7GD9p5mJH%2F9g0sxgde%2F7U7bqkWxYa6%2FADmVnmiXVMq0lh8LfZhP7GykiJQ3gwEMLOq6rwGOqUBK%2BTNqsB2jnPZz%2BZzzjfFZS7yZYVJdlOj2h6G95z0eICCIy1A8z07i%2F4xhvSbVvLae50kWvXZNl4YNtiMbXyRFpm1CDaVbR1jMXOdMvv7bfmOaq4lVAe8oOGmQZBdZjPVHTrKDLZh051COCp4t8f7dwOPirrw%2FOSDYSnxvylZlcSS4y0nTlvNQbZ7Wg%2FEURMLbqgck2v46m9MDutwndJhFI%2FC6kvk&X-Amz-Signature=b9c2061a9a4b6d2d27adf900174977f55329034cdbdd9859e3e4eef226824cb6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFHUBSN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2rXeInoIfZRD0dmQRHmvMrYX%2FYA1PyjixKhQaUnMjNAiEAq2FCzmFiYZ3q4chp97LHqNpQ%2BGL7vsi5pMzKCFw1E8MqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJXoG3D3lHr1uUMQircA8OKSa14WlOFVQfT2Pjy6EY5meDjtocsva%2B7TUrYXD0ZYgJTwz4LYJTBPL75NjZNglogiEsutBIK9hdLo%2B25Ucdk3dW81p4lU0KrdJg7WTZrKRPslmyKkhJ7hwrBXgJmXgLsJqIJIFfs8Aq1QL8PxZ7wWSWHgacPYAWnq1oUcnOVR%2FVYt%2FJxIpmHPG%2BreAlhd60emNRxwg%2FgTjKTN%2BFqhTtkGziv9R4mwbWQMtEOitLqigVLL5qCNDF1bqdFn8rATC%2FfR1AB4U1nRE7YddIFg837zssbR%2FqYU7n0kOwBf6inbDVQcRv7m59BZimtYoY0k1rXU7C9z37CCiltUZb4z3fBMkCubh0%2B3X8ZjmJ6BLw6JYzulhyFz9V8j6wQWXb9MlazMNJZXHVISLtac31d38PsWwTREFkmSyCN2xtZsljZ1ay67CTWg9W%2BEvPubiwN31Q5cVfprsEOxqVTzvvIMc6iG%2BltxvRCzDedsm1qbqYbeHh73AnLMTE773BHAravl2ZoS59hNsy2DelVBWac1yPHHQZpb3XBBc0V6K81jpzmjaoQsRt14qxuZ0AKHs7GD9p5mJH%2F9g0sxgde%2F7U7bqkWxYa6%2FADmVnmiXVMq0lh8LfZhP7GykiJQ3gwEMLOq6rwGOqUBK%2BTNqsB2jnPZz%2BZzzjfFZS7yZYVJdlOj2h6G95z0eICCIy1A8z07i%2F4xhvSbVvLae50kWvXZNl4YNtiMbXyRFpm1CDaVbR1jMXOdMvv7bfmOaq4lVAe8oOGmQZBdZjPVHTrKDLZh051COCp4t8f7dwOPirrw%2FOSDYSnxvylZlcSS4y0nTlvNQbZ7Wg%2FEURMLbqgck2v46m9MDutwndJhFI%2FC6kvk&X-Amz-Signature=c37639e6ef9a53bf9af21846a7c897f9d83d48470046c433746fb84073c8229c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFHUBSN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2rXeInoIfZRD0dmQRHmvMrYX%2FYA1PyjixKhQaUnMjNAiEAq2FCzmFiYZ3q4chp97LHqNpQ%2BGL7vsi5pMzKCFw1E8MqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJXoG3D3lHr1uUMQircA8OKSa14WlOFVQfT2Pjy6EY5meDjtocsva%2B7TUrYXD0ZYgJTwz4LYJTBPL75NjZNglogiEsutBIK9hdLo%2B25Ucdk3dW81p4lU0KrdJg7WTZrKRPslmyKkhJ7hwrBXgJmXgLsJqIJIFfs8Aq1QL8PxZ7wWSWHgacPYAWnq1oUcnOVR%2FVYt%2FJxIpmHPG%2BreAlhd60emNRxwg%2FgTjKTN%2BFqhTtkGziv9R4mwbWQMtEOitLqigVLL5qCNDF1bqdFn8rATC%2FfR1AB4U1nRE7YddIFg837zssbR%2FqYU7n0kOwBf6inbDVQcRv7m59BZimtYoY0k1rXU7C9z37CCiltUZb4z3fBMkCubh0%2B3X8ZjmJ6BLw6JYzulhyFz9V8j6wQWXb9MlazMNJZXHVISLtac31d38PsWwTREFkmSyCN2xtZsljZ1ay67CTWg9W%2BEvPubiwN31Q5cVfprsEOxqVTzvvIMc6iG%2BltxvRCzDedsm1qbqYbeHh73AnLMTE773BHAravl2ZoS59hNsy2DelVBWac1yPHHQZpb3XBBc0V6K81jpzmjaoQsRt14qxuZ0AKHs7GD9p5mJH%2F9g0sxgde%2F7U7bqkWxYa6%2FADmVnmiXVMq0lh8LfZhP7GykiJQ3gwEMLOq6rwGOqUBK%2BTNqsB2jnPZz%2BZzzjfFZS7yZYVJdlOj2h6G95z0eICCIy1A8z07i%2F4xhvSbVvLae50kWvXZNl4YNtiMbXyRFpm1CDaVbR1jMXOdMvv7bfmOaq4lVAe8oOGmQZBdZjPVHTrKDLZh051COCp4t8f7dwOPirrw%2FOSDYSnxvylZlcSS4y0nTlvNQbZ7Wg%2FEURMLbqgck2v46m9MDutwndJhFI%2FC6kvk&X-Amz-Signature=097aba8966e2a25173e32f8f328998561225b7b8b7b1a3175a8252fdac2bbd56&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFHUBSN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2rXeInoIfZRD0dmQRHmvMrYX%2FYA1PyjixKhQaUnMjNAiEAq2FCzmFiYZ3q4chp97LHqNpQ%2BGL7vsi5pMzKCFw1E8MqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJXoG3D3lHr1uUMQircA8OKSa14WlOFVQfT2Pjy6EY5meDjtocsva%2B7TUrYXD0ZYgJTwz4LYJTBPL75NjZNglogiEsutBIK9hdLo%2B25Ucdk3dW81p4lU0KrdJg7WTZrKRPslmyKkhJ7hwrBXgJmXgLsJqIJIFfs8Aq1QL8PxZ7wWSWHgacPYAWnq1oUcnOVR%2FVYt%2FJxIpmHPG%2BreAlhd60emNRxwg%2FgTjKTN%2BFqhTtkGziv9R4mwbWQMtEOitLqigVLL5qCNDF1bqdFn8rATC%2FfR1AB4U1nRE7YddIFg837zssbR%2FqYU7n0kOwBf6inbDVQcRv7m59BZimtYoY0k1rXU7C9z37CCiltUZb4z3fBMkCubh0%2B3X8ZjmJ6BLw6JYzulhyFz9V8j6wQWXb9MlazMNJZXHVISLtac31d38PsWwTREFkmSyCN2xtZsljZ1ay67CTWg9W%2BEvPubiwN31Q5cVfprsEOxqVTzvvIMc6iG%2BltxvRCzDedsm1qbqYbeHh73AnLMTE773BHAravl2ZoS59hNsy2DelVBWac1yPHHQZpb3XBBc0V6K81jpzmjaoQsRt14qxuZ0AKHs7GD9p5mJH%2F9g0sxgde%2F7U7bqkWxYa6%2FADmVnmiXVMq0lh8LfZhP7GykiJQ3gwEMLOq6rwGOqUBK%2BTNqsB2jnPZz%2BZzzjfFZS7yZYVJdlOj2h6G95z0eICCIy1A8z07i%2F4xhvSbVvLae50kWvXZNl4YNtiMbXyRFpm1CDaVbR1jMXOdMvv7bfmOaq4lVAe8oOGmQZBdZjPVHTrKDLZh051COCp4t8f7dwOPirrw%2FOSDYSnxvylZlcSS4y0nTlvNQbZ7Wg%2FEURMLbqgck2v46m9MDutwndJhFI%2FC6kvk&X-Amz-Signature=acd6154aa1b2524ab7d2cc3d5c223109fb75ef72e2489b997d04b1cc1519622e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFHUBSN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2rXeInoIfZRD0dmQRHmvMrYX%2FYA1PyjixKhQaUnMjNAiEAq2FCzmFiYZ3q4chp97LHqNpQ%2BGL7vsi5pMzKCFw1E8MqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJXoG3D3lHr1uUMQircA8OKSa14WlOFVQfT2Pjy6EY5meDjtocsva%2B7TUrYXD0ZYgJTwz4LYJTBPL75NjZNglogiEsutBIK9hdLo%2B25Ucdk3dW81p4lU0KrdJg7WTZrKRPslmyKkhJ7hwrBXgJmXgLsJqIJIFfs8Aq1QL8PxZ7wWSWHgacPYAWnq1oUcnOVR%2FVYt%2FJxIpmHPG%2BreAlhd60emNRxwg%2FgTjKTN%2BFqhTtkGziv9R4mwbWQMtEOitLqigVLL5qCNDF1bqdFn8rATC%2FfR1AB4U1nRE7YddIFg837zssbR%2FqYU7n0kOwBf6inbDVQcRv7m59BZimtYoY0k1rXU7C9z37CCiltUZb4z3fBMkCubh0%2B3X8ZjmJ6BLw6JYzulhyFz9V8j6wQWXb9MlazMNJZXHVISLtac31d38PsWwTREFkmSyCN2xtZsljZ1ay67CTWg9W%2BEvPubiwN31Q5cVfprsEOxqVTzvvIMc6iG%2BltxvRCzDedsm1qbqYbeHh73AnLMTE773BHAravl2ZoS59hNsy2DelVBWac1yPHHQZpb3XBBc0V6K81jpzmjaoQsRt14qxuZ0AKHs7GD9p5mJH%2F9g0sxgde%2F7U7bqkWxYa6%2FADmVnmiXVMq0lh8LfZhP7GykiJQ3gwEMLOq6rwGOqUBK%2BTNqsB2jnPZz%2BZzzjfFZS7yZYVJdlOj2h6G95z0eICCIy1A8z07i%2F4xhvSbVvLae50kWvXZNl4YNtiMbXyRFpm1CDaVbR1jMXOdMvv7bfmOaq4lVAe8oOGmQZBdZjPVHTrKDLZh051COCp4t8f7dwOPirrw%2FOSDYSnxvylZlcSS4y0nTlvNQbZ7Wg%2FEURMLbqgck2v46m9MDutwndJhFI%2FC6kvk&X-Amz-Signature=7643ea68ba38051ce1776f054bb7c26a1d210239e8ba3b917f26ebe32e0f3e77&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
