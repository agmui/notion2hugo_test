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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55CO6IX%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDtlhJBWFxm361eysYyuLvyXG9D2kLHP4oUTqaEfFrRBQIgCbpRDQ8Zgi%2F3NoRfiffpkA2sdyYKXgI9PZztg5EtMdAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4caVLx8abIvb4hiircAxdifMBON5dqJtL%2FyvHg8rOifA4e9KcE4MjwcAVvRTy6D48u1q%2Bd4PazEW9dHhn2cOqZ%2FydDHDmCH95dtQZeU%2BE16lMJqBYFK4h1gB0QGUr9cEFXQQkTaLHVpxv8JFGnR2xMDICSeqBuZl6RV%2B6DjynAQcKzzGii7ZmrwpS3Gy4I%2FpN7QKjUuG7Nh7ybO1w%2FYQjR2VaJ3Gle9tsHrOsrxm2tf9IXuOf7oRW1kdhYdF0q5A6BvQbqlF6q9Hd2UtXRUdm2BR7wSSAfp9URC%2Bg8JX9btuO0iM6NkIb2Iy2kGYAtN35m%2FeYXjmXUA8lwQijeZqxYTHDVfCZdC2wrMY%2B7N5QZ6KGVF3%2FEBXCh0Qriu8NJYB%2FyOfMZ9juxtM7xi8i5%2F3KX%2F9mahvBOEc1kzPO%2BcuGqmGn5YiJpOrbOcsT4K%2BY%2BUrmj%2Ba1dbwnOW6bvE6O%2FQJ2S5LAV4i2puqWC4x4IbxJmhntkidaB4kEjps71SXrWS8TKeLb2VCK9kGBV%2BEKilT6231rVRlz0uAUKaD%2B7VrtbMvSEbpRrmAQrB0Hs5RIEk90aYXuxrhSz4T3%2BqZCcK%2BPVXI0BNvC76UzPNV%2Fb8%2FfYT63%2BQAztefDh7XVjJu1i1nsy9QEfjYfq2ZtmMPu4q78GOqUBC9DIw9Ne4xmYNWGedOh3tUzjXEdNJt2IcexzaQa8bU3K1%2BuNOD5pUiUMZk%2F7dQ%2Fd5OXO0cEHBhZOXcLVx228FuCVVvHRAqbnuiLZq0UohFaI7ELfq7dvKiTvZLFruIlOUNKwSmpPPADFxCJPHqH51JC41%2F65pWDO%2FE9bGZFo9XjOLpqp8%2FUasvEQKm1QxLTmq%2F%2BjWluxMNlX4QTAKkLzZHjokUlJ&X-Amz-Signature=880aee244f1a48505bc6ec31f0101c42b6836189eabdbd32d3781e1043282053&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55CO6IX%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDtlhJBWFxm361eysYyuLvyXG9D2kLHP4oUTqaEfFrRBQIgCbpRDQ8Zgi%2F3NoRfiffpkA2sdyYKXgI9PZztg5EtMdAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4caVLx8abIvb4hiircAxdifMBON5dqJtL%2FyvHg8rOifA4e9KcE4MjwcAVvRTy6D48u1q%2Bd4PazEW9dHhn2cOqZ%2FydDHDmCH95dtQZeU%2BE16lMJqBYFK4h1gB0QGUr9cEFXQQkTaLHVpxv8JFGnR2xMDICSeqBuZl6RV%2B6DjynAQcKzzGii7ZmrwpS3Gy4I%2FpN7QKjUuG7Nh7ybO1w%2FYQjR2VaJ3Gle9tsHrOsrxm2tf9IXuOf7oRW1kdhYdF0q5A6BvQbqlF6q9Hd2UtXRUdm2BR7wSSAfp9URC%2Bg8JX9btuO0iM6NkIb2Iy2kGYAtN35m%2FeYXjmXUA8lwQijeZqxYTHDVfCZdC2wrMY%2B7N5QZ6KGVF3%2FEBXCh0Qriu8NJYB%2FyOfMZ9juxtM7xi8i5%2F3KX%2F9mahvBOEc1kzPO%2BcuGqmGn5YiJpOrbOcsT4K%2BY%2BUrmj%2Ba1dbwnOW6bvE6O%2FQJ2S5LAV4i2puqWC4x4IbxJmhntkidaB4kEjps71SXrWS8TKeLb2VCK9kGBV%2BEKilT6231rVRlz0uAUKaD%2B7VrtbMvSEbpRrmAQrB0Hs5RIEk90aYXuxrhSz4T3%2BqZCcK%2BPVXI0BNvC76UzPNV%2Fb8%2FfYT63%2BQAztefDh7XVjJu1i1nsy9QEfjYfq2ZtmMPu4q78GOqUBC9DIw9Ne4xmYNWGedOh3tUzjXEdNJt2IcexzaQa8bU3K1%2BuNOD5pUiUMZk%2F7dQ%2Fd5OXO0cEHBhZOXcLVx228FuCVVvHRAqbnuiLZq0UohFaI7ELfq7dvKiTvZLFruIlOUNKwSmpPPADFxCJPHqH51JC41%2F65pWDO%2FE9bGZFo9XjOLpqp8%2FUasvEQKm1QxLTmq%2F%2BjWluxMNlX4QTAKkLzZHjokUlJ&X-Amz-Signature=481dbc614772faad3ccc43928e20f1385101e7db5aed7511231d3a43135a2c17&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55CO6IX%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDtlhJBWFxm361eysYyuLvyXG9D2kLHP4oUTqaEfFrRBQIgCbpRDQ8Zgi%2F3NoRfiffpkA2sdyYKXgI9PZztg5EtMdAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4caVLx8abIvb4hiircAxdifMBON5dqJtL%2FyvHg8rOifA4e9KcE4MjwcAVvRTy6D48u1q%2Bd4PazEW9dHhn2cOqZ%2FydDHDmCH95dtQZeU%2BE16lMJqBYFK4h1gB0QGUr9cEFXQQkTaLHVpxv8JFGnR2xMDICSeqBuZl6RV%2B6DjynAQcKzzGii7ZmrwpS3Gy4I%2FpN7QKjUuG7Nh7ybO1w%2FYQjR2VaJ3Gle9tsHrOsrxm2tf9IXuOf7oRW1kdhYdF0q5A6BvQbqlF6q9Hd2UtXRUdm2BR7wSSAfp9URC%2Bg8JX9btuO0iM6NkIb2Iy2kGYAtN35m%2FeYXjmXUA8lwQijeZqxYTHDVfCZdC2wrMY%2B7N5QZ6KGVF3%2FEBXCh0Qriu8NJYB%2FyOfMZ9juxtM7xi8i5%2F3KX%2F9mahvBOEc1kzPO%2BcuGqmGn5YiJpOrbOcsT4K%2BY%2BUrmj%2Ba1dbwnOW6bvE6O%2FQJ2S5LAV4i2puqWC4x4IbxJmhntkidaB4kEjps71SXrWS8TKeLb2VCK9kGBV%2BEKilT6231rVRlz0uAUKaD%2B7VrtbMvSEbpRrmAQrB0Hs5RIEk90aYXuxrhSz4T3%2BqZCcK%2BPVXI0BNvC76UzPNV%2Fb8%2FfYT63%2BQAztefDh7XVjJu1i1nsy9QEfjYfq2ZtmMPu4q78GOqUBC9DIw9Ne4xmYNWGedOh3tUzjXEdNJt2IcexzaQa8bU3K1%2BuNOD5pUiUMZk%2F7dQ%2Fd5OXO0cEHBhZOXcLVx228FuCVVvHRAqbnuiLZq0UohFaI7ELfq7dvKiTvZLFruIlOUNKwSmpPPADFxCJPHqH51JC41%2F65pWDO%2FE9bGZFo9XjOLpqp8%2FUasvEQKm1QxLTmq%2F%2BjWluxMNlX4QTAKkLzZHjokUlJ&X-Amz-Signature=bcf0b2b22c6dfcab2bb9a2f9c153dba8905f88b02b72d096bd6eae71cacbbfe6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55CO6IX%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDtlhJBWFxm361eysYyuLvyXG9D2kLHP4oUTqaEfFrRBQIgCbpRDQ8Zgi%2F3NoRfiffpkA2sdyYKXgI9PZztg5EtMdAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4caVLx8abIvb4hiircAxdifMBON5dqJtL%2FyvHg8rOifA4e9KcE4MjwcAVvRTy6D48u1q%2Bd4PazEW9dHhn2cOqZ%2FydDHDmCH95dtQZeU%2BE16lMJqBYFK4h1gB0QGUr9cEFXQQkTaLHVpxv8JFGnR2xMDICSeqBuZl6RV%2B6DjynAQcKzzGii7ZmrwpS3Gy4I%2FpN7QKjUuG7Nh7ybO1w%2FYQjR2VaJ3Gle9tsHrOsrxm2tf9IXuOf7oRW1kdhYdF0q5A6BvQbqlF6q9Hd2UtXRUdm2BR7wSSAfp9URC%2Bg8JX9btuO0iM6NkIb2Iy2kGYAtN35m%2FeYXjmXUA8lwQijeZqxYTHDVfCZdC2wrMY%2B7N5QZ6KGVF3%2FEBXCh0Qriu8NJYB%2FyOfMZ9juxtM7xi8i5%2F3KX%2F9mahvBOEc1kzPO%2BcuGqmGn5YiJpOrbOcsT4K%2BY%2BUrmj%2Ba1dbwnOW6bvE6O%2FQJ2S5LAV4i2puqWC4x4IbxJmhntkidaB4kEjps71SXrWS8TKeLb2VCK9kGBV%2BEKilT6231rVRlz0uAUKaD%2B7VrtbMvSEbpRrmAQrB0Hs5RIEk90aYXuxrhSz4T3%2BqZCcK%2BPVXI0BNvC76UzPNV%2Fb8%2FfYT63%2BQAztefDh7XVjJu1i1nsy9QEfjYfq2ZtmMPu4q78GOqUBC9DIw9Ne4xmYNWGedOh3tUzjXEdNJt2IcexzaQa8bU3K1%2BuNOD5pUiUMZk%2F7dQ%2Fd5OXO0cEHBhZOXcLVx228FuCVVvHRAqbnuiLZq0UohFaI7ELfq7dvKiTvZLFruIlOUNKwSmpPPADFxCJPHqH51JC41%2F65pWDO%2FE9bGZFo9XjOLpqp8%2FUasvEQKm1QxLTmq%2F%2BjWluxMNlX4QTAKkLzZHjokUlJ&X-Amz-Signature=f61efbc04ed73d1577d062dc23e7961670638bb9d9c2dab9ba8613a4e09796bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55CO6IX%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDtlhJBWFxm361eysYyuLvyXG9D2kLHP4oUTqaEfFrRBQIgCbpRDQ8Zgi%2F3NoRfiffpkA2sdyYKXgI9PZztg5EtMdAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4caVLx8abIvb4hiircAxdifMBON5dqJtL%2FyvHg8rOifA4e9KcE4MjwcAVvRTy6D48u1q%2Bd4PazEW9dHhn2cOqZ%2FydDHDmCH95dtQZeU%2BE16lMJqBYFK4h1gB0QGUr9cEFXQQkTaLHVpxv8JFGnR2xMDICSeqBuZl6RV%2B6DjynAQcKzzGii7ZmrwpS3Gy4I%2FpN7QKjUuG7Nh7ybO1w%2FYQjR2VaJ3Gle9tsHrOsrxm2tf9IXuOf7oRW1kdhYdF0q5A6BvQbqlF6q9Hd2UtXRUdm2BR7wSSAfp9URC%2Bg8JX9btuO0iM6NkIb2Iy2kGYAtN35m%2FeYXjmXUA8lwQijeZqxYTHDVfCZdC2wrMY%2B7N5QZ6KGVF3%2FEBXCh0Qriu8NJYB%2FyOfMZ9juxtM7xi8i5%2F3KX%2F9mahvBOEc1kzPO%2BcuGqmGn5YiJpOrbOcsT4K%2BY%2BUrmj%2Ba1dbwnOW6bvE6O%2FQJ2S5LAV4i2puqWC4x4IbxJmhntkidaB4kEjps71SXrWS8TKeLb2VCK9kGBV%2BEKilT6231rVRlz0uAUKaD%2B7VrtbMvSEbpRrmAQrB0Hs5RIEk90aYXuxrhSz4T3%2BqZCcK%2BPVXI0BNvC76UzPNV%2Fb8%2FfYT63%2BQAztefDh7XVjJu1i1nsy9QEfjYfq2ZtmMPu4q78GOqUBC9DIw9Ne4xmYNWGedOh3tUzjXEdNJt2IcexzaQa8bU3K1%2BuNOD5pUiUMZk%2F7dQ%2Fd5OXO0cEHBhZOXcLVx228FuCVVvHRAqbnuiLZq0UohFaI7ELfq7dvKiTvZLFruIlOUNKwSmpPPADFxCJPHqH51JC41%2F65pWDO%2FE9bGZFo9XjOLpqp8%2FUasvEQKm1QxLTmq%2F%2BjWluxMNlX4QTAKkLzZHjokUlJ&X-Amz-Signature=08844d291741065431dcf7b703c6f0dfcb396a832e623022921780c54a9d0ef2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
