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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSYZ7L4G%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAb9EARyVwf2n1uiGEjxuMQfH7Q3WP1CEfG5tTyQ8s3nAiBXwFokOlW2AOwILug%2Bd%2F7eBffoDBUDgfIwOneB5N1ugiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8ZBW67VHG6hnTOHAKtwDqzNsLpgv9LP%2BsMvVpmdwiAyLpIvEs1ytijZ%2FNIZz38JHA90uBdrledvIMCZ%2FNQWym8OZrwPgz19nUu1QYcwmn8KDF0pE9IuCaUX1wQlDwdnKLbRuPq936NUV0ea0bE%2FmecrHeyi8pbH5op%2F78mmMRJ%2B4sBTGOmraxqLqNeuXVoXY5ENKLRkA62FN2Fh3csQNRYtJJf%2BCCCefXuOO%2FM%2FuI2P7n9o9TKP2uftDHu7YR2nk5AlFJWsdJe2tFXOnZX%2B4vVF0ozW%2BJMiPYA43yKn640CXUV5t3H%2FzSH4X2wT%2BeC7XuYw9KUVYbJg3RYvw9e53kMsWnftLm%2BLxM%2FOak0i09UGjmD2UGv6t60CkTs3LbLdyejstln6mAsK9QUmfjySvPnhEFBjmGD3qHH8VVqUluAjzEov5OstANxqx527CAOHYXPx4LAM0T2N8UF02f5og%2F4uuMFmMxw4sxQWvMO%2BbXKd%2FNckCFO13xPJiIYEodQKhuPU8NvYQEtEjvXFgAdD4ZmZI2I6Rk4Kw0ZmeYTYkeIGxoWNflnJvIcLNhPGVT%2FP2MHBN6eYTUE%2BHh4CisiDLkH66QQOFHG%2FdwpOejD0rBA5VkfPMfvzdvWBnUrdcd56jC2KWsDzXOoJWB5YwuIO2wwY6pgGKeYuRTwfsTaOHawqiI0ZUp7pTWtzT0t8pJNeuqSj5vUmYQK%2FQcYECCbUwTJebQJS3EEbPgiLEWfehpJLZFqoBilIcRsmszeD1s2Owt2GaTHFH%2BDlGcFiPLrKYCufcGL07%2B4w4AwoNeOuwcDYRWnhD2kZ8pLna0%2BOXrGLYB%2BGmjS%2F9GKNgNvxicSXxY%2Fzqi%2FE5%2FAjAr7I1GXdPgeSNUbFSyepM%2F0hm&X-Amz-Signature=6bc99c99481c27cbe62f332586b1fc529635458c559926c1870bff563f9c4080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSYZ7L4G%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAb9EARyVwf2n1uiGEjxuMQfH7Q3WP1CEfG5tTyQ8s3nAiBXwFokOlW2AOwILug%2Bd%2F7eBffoDBUDgfIwOneB5N1ugiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8ZBW67VHG6hnTOHAKtwDqzNsLpgv9LP%2BsMvVpmdwiAyLpIvEs1ytijZ%2FNIZz38JHA90uBdrledvIMCZ%2FNQWym8OZrwPgz19nUu1QYcwmn8KDF0pE9IuCaUX1wQlDwdnKLbRuPq936NUV0ea0bE%2FmecrHeyi8pbH5op%2F78mmMRJ%2B4sBTGOmraxqLqNeuXVoXY5ENKLRkA62FN2Fh3csQNRYtJJf%2BCCCefXuOO%2FM%2FuI2P7n9o9TKP2uftDHu7YR2nk5AlFJWsdJe2tFXOnZX%2B4vVF0ozW%2BJMiPYA43yKn640CXUV5t3H%2FzSH4X2wT%2BeC7XuYw9KUVYbJg3RYvw9e53kMsWnftLm%2BLxM%2FOak0i09UGjmD2UGv6t60CkTs3LbLdyejstln6mAsK9QUmfjySvPnhEFBjmGD3qHH8VVqUluAjzEov5OstANxqx527CAOHYXPx4LAM0T2N8UF02f5og%2F4uuMFmMxw4sxQWvMO%2BbXKd%2FNckCFO13xPJiIYEodQKhuPU8NvYQEtEjvXFgAdD4ZmZI2I6Rk4Kw0ZmeYTYkeIGxoWNflnJvIcLNhPGVT%2FP2MHBN6eYTUE%2BHh4CisiDLkH66QQOFHG%2FdwpOejD0rBA5VkfPMfvzdvWBnUrdcd56jC2KWsDzXOoJWB5YwuIO2wwY6pgGKeYuRTwfsTaOHawqiI0ZUp7pTWtzT0t8pJNeuqSj5vUmYQK%2FQcYECCbUwTJebQJS3EEbPgiLEWfehpJLZFqoBilIcRsmszeD1s2Owt2GaTHFH%2BDlGcFiPLrKYCufcGL07%2B4w4AwoNeOuwcDYRWnhD2kZ8pLna0%2BOXrGLYB%2BGmjS%2F9GKNgNvxicSXxY%2Fzqi%2FE5%2FAjAr7I1GXdPgeSNUbFSyepM%2F0hm&X-Amz-Signature=ab242143b1ea0d4c228bfa4aecee053c8eb38c7c492446cd8894c6637f33ed9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSYZ7L4G%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAb9EARyVwf2n1uiGEjxuMQfH7Q3WP1CEfG5tTyQ8s3nAiBXwFokOlW2AOwILug%2Bd%2F7eBffoDBUDgfIwOneB5N1ugiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8ZBW67VHG6hnTOHAKtwDqzNsLpgv9LP%2BsMvVpmdwiAyLpIvEs1ytijZ%2FNIZz38JHA90uBdrledvIMCZ%2FNQWym8OZrwPgz19nUu1QYcwmn8KDF0pE9IuCaUX1wQlDwdnKLbRuPq936NUV0ea0bE%2FmecrHeyi8pbH5op%2F78mmMRJ%2B4sBTGOmraxqLqNeuXVoXY5ENKLRkA62FN2Fh3csQNRYtJJf%2BCCCefXuOO%2FM%2FuI2P7n9o9TKP2uftDHu7YR2nk5AlFJWsdJe2tFXOnZX%2B4vVF0ozW%2BJMiPYA43yKn640CXUV5t3H%2FzSH4X2wT%2BeC7XuYw9KUVYbJg3RYvw9e53kMsWnftLm%2BLxM%2FOak0i09UGjmD2UGv6t60CkTs3LbLdyejstln6mAsK9QUmfjySvPnhEFBjmGD3qHH8VVqUluAjzEov5OstANxqx527CAOHYXPx4LAM0T2N8UF02f5og%2F4uuMFmMxw4sxQWvMO%2BbXKd%2FNckCFO13xPJiIYEodQKhuPU8NvYQEtEjvXFgAdD4ZmZI2I6Rk4Kw0ZmeYTYkeIGxoWNflnJvIcLNhPGVT%2FP2MHBN6eYTUE%2BHh4CisiDLkH66QQOFHG%2FdwpOejD0rBA5VkfPMfvzdvWBnUrdcd56jC2KWsDzXOoJWB5YwuIO2wwY6pgGKeYuRTwfsTaOHawqiI0ZUp7pTWtzT0t8pJNeuqSj5vUmYQK%2FQcYECCbUwTJebQJS3EEbPgiLEWfehpJLZFqoBilIcRsmszeD1s2Owt2GaTHFH%2BDlGcFiPLrKYCufcGL07%2B4w4AwoNeOuwcDYRWnhD2kZ8pLna0%2BOXrGLYB%2BGmjS%2F9GKNgNvxicSXxY%2Fzqi%2FE5%2FAjAr7I1GXdPgeSNUbFSyepM%2F0hm&X-Amz-Signature=b9888358340d009e63636d1ff6a6694cfeda6317e31049dba25c1d7d29fb905b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSYZ7L4G%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAb9EARyVwf2n1uiGEjxuMQfH7Q3WP1CEfG5tTyQ8s3nAiBXwFokOlW2AOwILug%2Bd%2F7eBffoDBUDgfIwOneB5N1ugiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8ZBW67VHG6hnTOHAKtwDqzNsLpgv9LP%2BsMvVpmdwiAyLpIvEs1ytijZ%2FNIZz38JHA90uBdrledvIMCZ%2FNQWym8OZrwPgz19nUu1QYcwmn8KDF0pE9IuCaUX1wQlDwdnKLbRuPq936NUV0ea0bE%2FmecrHeyi8pbH5op%2F78mmMRJ%2B4sBTGOmraxqLqNeuXVoXY5ENKLRkA62FN2Fh3csQNRYtJJf%2BCCCefXuOO%2FM%2FuI2P7n9o9TKP2uftDHu7YR2nk5AlFJWsdJe2tFXOnZX%2B4vVF0ozW%2BJMiPYA43yKn640CXUV5t3H%2FzSH4X2wT%2BeC7XuYw9KUVYbJg3RYvw9e53kMsWnftLm%2BLxM%2FOak0i09UGjmD2UGv6t60CkTs3LbLdyejstln6mAsK9QUmfjySvPnhEFBjmGD3qHH8VVqUluAjzEov5OstANxqx527CAOHYXPx4LAM0T2N8UF02f5og%2F4uuMFmMxw4sxQWvMO%2BbXKd%2FNckCFO13xPJiIYEodQKhuPU8NvYQEtEjvXFgAdD4ZmZI2I6Rk4Kw0ZmeYTYkeIGxoWNflnJvIcLNhPGVT%2FP2MHBN6eYTUE%2BHh4CisiDLkH66QQOFHG%2FdwpOejD0rBA5VkfPMfvzdvWBnUrdcd56jC2KWsDzXOoJWB5YwuIO2wwY6pgGKeYuRTwfsTaOHawqiI0ZUp7pTWtzT0t8pJNeuqSj5vUmYQK%2FQcYECCbUwTJebQJS3EEbPgiLEWfehpJLZFqoBilIcRsmszeD1s2Owt2GaTHFH%2BDlGcFiPLrKYCufcGL07%2B4w4AwoNeOuwcDYRWnhD2kZ8pLna0%2BOXrGLYB%2BGmjS%2F9GKNgNvxicSXxY%2Fzqi%2FE5%2FAjAr7I1GXdPgeSNUbFSyepM%2F0hm&X-Amz-Signature=3fe46b163178420493bc8528bb32ad9a1cb8cabb6892ca02b173d0a015ea5706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSYZ7L4G%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAb9EARyVwf2n1uiGEjxuMQfH7Q3WP1CEfG5tTyQ8s3nAiBXwFokOlW2AOwILug%2Bd%2F7eBffoDBUDgfIwOneB5N1ugiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8ZBW67VHG6hnTOHAKtwDqzNsLpgv9LP%2BsMvVpmdwiAyLpIvEs1ytijZ%2FNIZz38JHA90uBdrledvIMCZ%2FNQWym8OZrwPgz19nUu1QYcwmn8KDF0pE9IuCaUX1wQlDwdnKLbRuPq936NUV0ea0bE%2FmecrHeyi8pbH5op%2F78mmMRJ%2B4sBTGOmraxqLqNeuXVoXY5ENKLRkA62FN2Fh3csQNRYtJJf%2BCCCefXuOO%2FM%2FuI2P7n9o9TKP2uftDHu7YR2nk5AlFJWsdJe2tFXOnZX%2B4vVF0ozW%2BJMiPYA43yKn640CXUV5t3H%2FzSH4X2wT%2BeC7XuYw9KUVYbJg3RYvw9e53kMsWnftLm%2BLxM%2FOak0i09UGjmD2UGv6t60CkTs3LbLdyejstln6mAsK9QUmfjySvPnhEFBjmGD3qHH8VVqUluAjzEov5OstANxqx527CAOHYXPx4LAM0T2N8UF02f5og%2F4uuMFmMxw4sxQWvMO%2BbXKd%2FNckCFO13xPJiIYEodQKhuPU8NvYQEtEjvXFgAdD4ZmZI2I6Rk4Kw0ZmeYTYkeIGxoWNflnJvIcLNhPGVT%2FP2MHBN6eYTUE%2BHh4CisiDLkH66QQOFHG%2FdwpOejD0rBA5VkfPMfvzdvWBnUrdcd56jC2KWsDzXOoJWB5YwuIO2wwY6pgGKeYuRTwfsTaOHawqiI0ZUp7pTWtzT0t8pJNeuqSj5vUmYQK%2FQcYECCbUwTJebQJS3EEbPgiLEWfehpJLZFqoBilIcRsmszeD1s2Owt2GaTHFH%2BDlGcFiPLrKYCufcGL07%2B4w4AwoNeOuwcDYRWnhD2kZ8pLna0%2BOXrGLYB%2BGmjS%2F9GKNgNvxicSXxY%2Fzqi%2FE5%2FAjAr7I1GXdPgeSNUbFSyepM%2F0hm&X-Amz-Signature=7ec34a7299c4225729f624db05957399ef7565aab2553066a12a266a7ac163a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
