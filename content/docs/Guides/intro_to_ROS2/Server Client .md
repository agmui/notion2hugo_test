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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBS3QTFN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCID6BO4PRDAiT02CUHqCGlM84dwGAJ9emsFb4Wp1Ji4ncAiBDvoRytGmG%2BV%2FdQlYlwIxZwxBUnpgx%2BbsL6DjjvpaDTiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeEmCTcwOJ2lck100KtwDfMECVbfKKGzE0IOuzdWz1kKD2wQpZQYrKrd4nF5qf6IfEvXSmaRDOzg8rIpDxXjzDTlflK9pDR8S%2FojUUMSWYdC5MU9Q970859VjsPxgQlNTrlFEUWkQqqK9LiLYm%2FsE4fi6lLT3hXg5eyeSyAY46rl6mOZ%2FPKwc566b5Tn5An079hx%2FcwgBXXxXJZ4qNpJDoIvSmA3pqnCuBIKsUEn0kSHQ8CAhcfaWTJ9wA5M%2BB2SKT%2FpZ3U%2BBYRHsvlRo8Qw3snvuGFWucAUkTspUuGjSqlNLdLSL93Knfgr7PKL9gy%2BNx8gyDwahmPUJpg3q6tFlk9akVWDPNRmEXh7hqx9wqHnmLUmIsIawpqSFvvMPDHSFX4uGcLt%2FNNlSbY60ZoHqI3q3n6WKoj1XhEe5TT4w8PdG79l1aiMmegla%2FoW8RoAqWj%2F1qglPyQbyToSfflYkJILhXycya3WExsIhI0Sd54a%2BV%2FaIqMZuzU%2BqhP2x7ERzwesonCkQBdFFhY%2Fq70zeoIjYVpH51TLz%2BfBSiuOo4bBzOTJJvV5i81BoSJMe6JNvR8OBlAuil5k3UfTwxwHc5YbBbTDcq%2B58GHCo1ep2QkrqjJyMVP4T3AUjPM9ED5dsF5rV3jq5WRtCQ%2Fcwu8vKwAY6pgHXC6uvIL1DiDiR7Ekg4QaCdElGe7rWkrGSDK0Yx8yOxB7h44zhaYqKYcBU1fuANOPSWoxYhqLc47cYrz9x8SflcvodT8xxPuz3XJKLxxRbfvOrJQAUCkz50HGY%2BEt%2B71Z%2BklAeWwc3RLz7OoSABUpq73Iwv471iVh3v7MEJFVldcbq7ij%2F1ttCuzCPxyJNvkXb9XTPUiMD3eQbLG70Cbt2AF%2FFa3Tk&X-Amz-Signature=b8fdba7c0bb040a616b685787195d14d9c35bdb95c5b14096dc24ede1291971c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBS3QTFN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCID6BO4PRDAiT02CUHqCGlM84dwGAJ9emsFb4Wp1Ji4ncAiBDvoRytGmG%2BV%2FdQlYlwIxZwxBUnpgx%2BbsL6DjjvpaDTiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeEmCTcwOJ2lck100KtwDfMECVbfKKGzE0IOuzdWz1kKD2wQpZQYrKrd4nF5qf6IfEvXSmaRDOzg8rIpDxXjzDTlflK9pDR8S%2FojUUMSWYdC5MU9Q970859VjsPxgQlNTrlFEUWkQqqK9LiLYm%2FsE4fi6lLT3hXg5eyeSyAY46rl6mOZ%2FPKwc566b5Tn5An079hx%2FcwgBXXxXJZ4qNpJDoIvSmA3pqnCuBIKsUEn0kSHQ8CAhcfaWTJ9wA5M%2BB2SKT%2FpZ3U%2BBYRHsvlRo8Qw3snvuGFWucAUkTspUuGjSqlNLdLSL93Knfgr7PKL9gy%2BNx8gyDwahmPUJpg3q6tFlk9akVWDPNRmEXh7hqx9wqHnmLUmIsIawpqSFvvMPDHSFX4uGcLt%2FNNlSbY60ZoHqI3q3n6WKoj1XhEe5TT4w8PdG79l1aiMmegla%2FoW8RoAqWj%2F1qglPyQbyToSfflYkJILhXycya3WExsIhI0Sd54a%2BV%2FaIqMZuzU%2BqhP2x7ERzwesonCkQBdFFhY%2Fq70zeoIjYVpH51TLz%2BfBSiuOo4bBzOTJJvV5i81BoSJMe6JNvR8OBlAuil5k3UfTwxwHc5YbBbTDcq%2B58GHCo1ep2QkrqjJyMVP4T3AUjPM9ED5dsF5rV3jq5WRtCQ%2Fcwu8vKwAY6pgHXC6uvIL1DiDiR7Ekg4QaCdElGe7rWkrGSDK0Yx8yOxB7h44zhaYqKYcBU1fuANOPSWoxYhqLc47cYrz9x8SflcvodT8xxPuz3XJKLxxRbfvOrJQAUCkz50HGY%2BEt%2B71Z%2BklAeWwc3RLz7OoSABUpq73Iwv471iVh3v7MEJFVldcbq7ij%2F1ttCuzCPxyJNvkXb9XTPUiMD3eQbLG70Cbt2AF%2FFa3Tk&X-Amz-Signature=ad621b61f404634f0ee61d1fa392888a6283554d8c10a47f47b0e2d53c0c9270&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBS3QTFN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCID6BO4PRDAiT02CUHqCGlM84dwGAJ9emsFb4Wp1Ji4ncAiBDvoRytGmG%2BV%2FdQlYlwIxZwxBUnpgx%2BbsL6DjjvpaDTiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeEmCTcwOJ2lck100KtwDfMECVbfKKGzE0IOuzdWz1kKD2wQpZQYrKrd4nF5qf6IfEvXSmaRDOzg8rIpDxXjzDTlflK9pDR8S%2FojUUMSWYdC5MU9Q970859VjsPxgQlNTrlFEUWkQqqK9LiLYm%2FsE4fi6lLT3hXg5eyeSyAY46rl6mOZ%2FPKwc566b5Tn5An079hx%2FcwgBXXxXJZ4qNpJDoIvSmA3pqnCuBIKsUEn0kSHQ8CAhcfaWTJ9wA5M%2BB2SKT%2FpZ3U%2BBYRHsvlRo8Qw3snvuGFWucAUkTspUuGjSqlNLdLSL93Knfgr7PKL9gy%2BNx8gyDwahmPUJpg3q6tFlk9akVWDPNRmEXh7hqx9wqHnmLUmIsIawpqSFvvMPDHSFX4uGcLt%2FNNlSbY60ZoHqI3q3n6WKoj1XhEe5TT4w8PdG79l1aiMmegla%2FoW8RoAqWj%2F1qglPyQbyToSfflYkJILhXycya3WExsIhI0Sd54a%2BV%2FaIqMZuzU%2BqhP2x7ERzwesonCkQBdFFhY%2Fq70zeoIjYVpH51TLz%2BfBSiuOo4bBzOTJJvV5i81BoSJMe6JNvR8OBlAuil5k3UfTwxwHc5YbBbTDcq%2B58GHCo1ep2QkrqjJyMVP4T3AUjPM9ED5dsF5rV3jq5WRtCQ%2Fcwu8vKwAY6pgHXC6uvIL1DiDiR7Ekg4QaCdElGe7rWkrGSDK0Yx8yOxB7h44zhaYqKYcBU1fuANOPSWoxYhqLc47cYrz9x8SflcvodT8xxPuz3XJKLxxRbfvOrJQAUCkz50HGY%2BEt%2B71Z%2BklAeWwc3RLz7OoSABUpq73Iwv471iVh3v7MEJFVldcbq7ij%2F1ttCuzCPxyJNvkXb9XTPUiMD3eQbLG70Cbt2AF%2FFa3Tk&X-Amz-Signature=34b70459f59cf3f71ce61ea5572c5d545f45feaa8a0188df0f6442dcd8368207&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBS3QTFN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCID6BO4PRDAiT02CUHqCGlM84dwGAJ9emsFb4Wp1Ji4ncAiBDvoRytGmG%2BV%2FdQlYlwIxZwxBUnpgx%2BbsL6DjjvpaDTiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeEmCTcwOJ2lck100KtwDfMECVbfKKGzE0IOuzdWz1kKD2wQpZQYrKrd4nF5qf6IfEvXSmaRDOzg8rIpDxXjzDTlflK9pDR8S%2FojUUMSWYdC5MU9Q970859VjsPxgQlNTrlFEUWkQqqK9LiLYm%2FsE4fi6lLT3hXg5eyeSyAY46rl6mOZ%2FPKwc566b5Tn5An079hx%2FcwgBXXxXJZ4qNpJDoIvSmA3pqnCuBIKsUEn0kSHQ8CAhcfaWTJ9wA5M%2BB2SKT%2FpZ3U%2BBYRHsvlRo8Qw3snvuGFWucAUkTspUuGjSqlNLdLSL93Knfgr7PKL9gy%2BNx8gyDwahmPUJpg3q6tFlk9akVWDPNRmEXh7hqx9wqHnmLUmIsIawpqSFvvMPDHSFX4uGcLt%2FNNlSbY60ZoHqI3q3n6WKoj1XhEe5TT4w8PdG79l1aiMmegla%2FoW8RoAqWj%2F1qglPyQbyToSfflYkJILhXycya3WExsIhI0Sd54a%2BV%2FaIqMZuzU%2BqhP2x7ERzwesonCkQBdFFhY%2Fq70zeoIjYVpH51TLz%2BfBSiuOo4bBzOTJJvV5i81BoSJMe6JNvR8OBlAuil5k3UfTwxwHc5YbBbTDcq%2B58GHCo1ep2QkrqjJyMVP4T3AUjPM9ED5dsF5rV3jq5WRtCQ%2Fcwu8vKwAY6pgHXC6uvIL1DiDiR7Ekg4QaCdElGe7rWkrGSDK0Yx8yOxB7h44zhaYqKYcBU1fuANOPSWoxYhqLc47cYrz9x8SflcvodT8xxPuz3XJKLxxRbfvOrJQAUCkz50HGY%2BEt%2B71Z%2BklAeWwc3RLz7OoSABUpq73Iwv471iVh3v7MEJFVldcbq7ij%2F1ttCuzCPxyJNvkXb9XTPUiMD3eQbLG70Cbt2AF%2FFa3Tk&X-Amz-Signature=fcdc4e048ae5457c1f72c877cba6e3dbdf1b599bc34eeb98cdf0b8360a30e372&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBS3QTFN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCID6BO4PRDAiT02CUHqCGlM84dwGAJ9emsFb4Wp1Ji4ncAiBDvoRytGmG%2BV%2FdQlYlwIxZwxBUnpgx%2BbsL6DjjvpaDTiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeEmCTcwOJ2lck100KtwDfMECVbfKKGzE0IOuzdWz1kKD2wQpZQYrKrd4nF5qf6IfEvXSmaRDOzg8rIpDxXjzDTlflK9pDR8S%2FojUUMSWYdC5MU9Q970859VjsPxgQlNTrlFEUWkQqqK9LiLYm%2FsE4fi6lLT3hXg5eyeSyAY46rl6mOZ%2FPKwc566b5Tn5An079hx%2FcwgBXXxXJZ4qNpJDoIvSmA3pqnCuBIKsUEn0kSHQ8CAhcfaWTJ9wA5M%2BB2SKT%2FpZ3U%2BBYRHsvlRo8Qw3snvuGFWucAUkTspUuGjSqlNLdLSL93Knfgr7PKL9gy%2BNx8gyDwahmPUJpg3q6tFlk9akVWDPNRmEXh7hqx9wqHnmLUmIsIawpqSFvvMPDHSFX4uGcLt%2FNNlSbY60ZoHqI3q3n6WKoj1XhEe5TT4w8PdG79l1aiMmegla%2FoW8RoAqWj%2F1qglPyQbyToSfflYkJILhXycya3WExsIhI0Sd54a%2BV%2FaIqMZuzU%2BqhP2x7ERzwesonCkQBdFFhY%2Fq70zeoIjYVpH51TLz%2BfBSiuOo4bBzOTJJvV5i81BoSJMe6JNvR8OBlAuil5k3UfTwxwHc5YbBbTDcq%2B58GHCo1ep2QkrqjJyMVP4T3AUjPM9ED5dsF5rV3jq5WRtCQ%2Fcwu8vKwAY6pgHXC6uvIL1DiDiR7Ekg4QaCdElGe7rWkrGSDK0Yx8yOxB7h44zhaYqKYcBU1fuANOPSWoxYhqLc47cYrz9x8SflcvodT8xxPuz3XJKLxxRbfvOrJQAUCkz50HGY%2BEt%2B71Z%2BklAeWwc3RLz7OoSABUpq73Iwv471iVh3v7MEJFVldcbq7ij%2F1ttCuzCPxyJNvkXb9XTPUiMD3eQbLG70Cbt2AF%2FFa3Tk&X-Amz-Signature=697cdb1637f61932b76a333d9713840426b9438974cc78846733553e31167337&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
