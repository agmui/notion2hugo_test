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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDU4URF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi78hMClmof4qeWkNUIvpn4uaqGtWY6Xj8UftKxT1UQwIgX9o0UFmvPb41hKHvy6OXd4OQ2BfEssvs1%2FQOMzqQwc8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIUp6%2FG1lvaESxjFEyrcAxDqK%2BXvK3UOH0Ir%2BYKDQtHQa6dMKAL9w2oK7KOH8MvSrrQ8%2BTi4NCWYcu0cf4HtjKzVY%2FR8e8ZJ3c7e2Tp4p37nsDCgQ7NaG6yG4L6NUhC3R34%2BnaP6LqLSNF0WDqwNPRQ79dBeuR0i9suM6LpqSI2Qz5e2%2BeaumGciZ9zio5wEFIAPnJgVij3ZgPbJyZCsTuQh%2FXdOUtfuWKWWRyOa5mvznFwQidKQ1rwRxD6cTY%2BU6CItrUugjYjVVS%2FSyRuXkfWioNDhYmS5ku128%2F3Jw8yjrMdB6V6JvtaSBu4yTGYZdY3YG3fGdUnGdilVF7X4XFKEt8OsfoAGkulgfA73vVcxwQ%2FxmP2QiVjtFucmc%2BCknf6hbBZNraBVGE4tq5Z7wjK4c38gJ1p7JqkIQ6qiKhBUfgPj7DWSQmAeV6kdgFGxUjtcHYyS19uXC5zHzMlIFm5lU7ajtw1ATxEwsAQUHZeBhXJI2XIYSGpDalUGhO065Y3qTlzKY%2Bc6PGerTGLyO1REyughYRfgrewAOJLzwrJklNidQ4if9%2FQ%2Fc40MyPAW2IoMLRWNHngb1OGzwsIGCY7NQ522T%2FDpe4eZ4lXhP49dO3IUtsWWwhojVDPjpYy9OllHWhZxuwGSZDNHMPm0%2BL8GOqUBJMHE25G5jlWS2uhFvpjBv1lmyC%2BdD4YgvQNRs3zHsdhgkO0LkGNV%2BuZze8muK5y2njqOgQBVJwDOye3TnamZqvR3DfXLV9Qtvt3SJd8XpnuICD6YsaEesyEYPbIRGPet1z56sas2qAk674WbzMSdWkVxXKb%2BjWKvCkLXCHuBT6sk5FOv9oPQGepSLH%2FeD42eHCg52RZkrPP7O242bUfySbs5ng%2Bq&X-Amz-Signature=3d5edf078b04937ec368bf10f854bae00c3f7c1c3f880c07fd4f11557322dfc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDU4URF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi78hMClmof4qeWkNUIvpn4uaqGtWY6Xj8UftKxT1UQwIgX9o0UFmvPb41hKHvy6OXd4OQ2BfEssvs1%2FQOMzqQwc8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIUp6%2FG1lvaESxjFEyrcAxDqK%2BXvK3UOH0Ir%2BYKDQtHQa6dMKAL9w2oK7KOH8MvSrrQ8%2BTi4NCWYcu0cf4HtjKzVY%2FR8e8ZJ3c7e2Tp4p37nsDCgQ7NaG6yG4L6NUhC3R34%2BnaP6LqLSNF0WDqwNPRQ79dBeuR0i9suM6LpqSI2Qz5e2%2BeaumGciZ9zio5wEFIAPnJgVij3ZgPbJyZCsTuQh%2FXdOUtfuWKWWRyOa5mvznFwQidKQ1rwRxD6cTY%2BU6CItrUugjYjVVS%2FSyRuXkfWioNDhYmS5ku128%2F3Jw8yjrMdB6V6JvtaSBu4yTGYZdY3YG3fGdUnGdilVF7X4XFKEt8OsfoAGkulgfA73vVcxwQ%2FxmP2QiVjtFucmc%2BCknf6hbBZNraBVGE4tq5Z7wjK4c38gJ1p7JqkIQ6qiKhBUfgPj7DWSQmAeV6kdgFGxUjtcHYyS19uXC5zHzMlIFm5lU7ajtw1ATxEwsAQUHZeBhXJI2XIYSGpDalUGhO065Y3qTlzKY%2Bc6PGerTGLyO1REyughYRfgrewAOJLzwrJklNidQ4if9%2FQ%2Fc40MyPAW2IoMLRWNHngb1OGzwsIGCY7NQ522T%2FDpe4eZ4lXhP49dO3IUtsWWwhojVDPjpYy9OllHWhZxuwGSZDNHMPm0%2BL8GOqUBJMHE25G5jlWS2uhFvpjBv1lmyC%2BdD4YgvQNRs3zHsdhgkO0LkGNV%2BuZze8muK5y2njqOgQBVJwDOye3TnamZqvR3DfXLV9Qtvt3SJd8XpnuICD6YsaEesyEYPbIRGPet1z56sas2qAk674WbzMSdWkVxXKb%2BjWKvCkLXCHuBT6sk5FOv9oPQGepSLH%2FeD42eHCg52RZkrPP7O242bUfySbs5ng%2Bq&X-Amz-Signature=6b2cc7ce1e58ab62f9cac0b22e12790b09211c35231756cfcadfbf2f19b0db39&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDU4URF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi78hMClmof4qeWkNUIvpn4uaqGtWY6Xj8UftKxT1UQwIgX9o0UFmvPb41hKHvy6OXd4OQ2BfEssvs1%2FQOMzqQwc8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIUp6%2FG1lvaESxjFEyrcAxDqK%2BXvK3UOH0Ir%2BYKDQtHQa6dMKAL9w2oK7KOH8MvSrrQ8%2BTi4NCWYcu0cf4HtjKzVY%2FR8e8ZJ3c7e2Tp4p37nsDCgQ7NaG6yG4L6NUhC3R34%2BnaP6LqLSNF0WDqwNPRQ79dBeuR0i9suM6LpqSI2Qz5e2%2BeaumGciZ9zio5wEFIAPnJgVij3ZgPbJyZCsTuQh%2FXdOUtfuWKWWRyOa5mvznFwQidKQ1rwRxD6cTY%2BU6CItrUugjYjVVS%2FSyRuXkfWioNDhYmS5ku128%2F3Jw8yjrMdB6V6JvtaSBu4yTGYZdY3YG3fGdUnGdilVF7X4XFKEt8OsfoAGkulgfA73vVcxwQ%2FxmP2QiVjtFucmc%2BCknf6hbBZNraBVGE4tq5Z7wjK4c38gJ1p7JqkIQ6qiKhBUfgPj7DWSQmAeV6kdgFGxUjtcHYyS19uXC5zHzMlIFm5lU7ajtw1ATxEwsAQUHZeBhXJI2XIYSGpDalUGhO065Y3qTlzKY%2Bc6PGerTGLyO1REyughYRfgrewAOJLzwrJklNidQ4if9%2FQ%2Fc40MyPAW2IoMLRWNHngb1OGzwsIGCY7NQ522T%2FDpe4eZ4lXhP49dO3IUtsWWwhojVDPjpYy9OllHWhZxuwGSZDNHMPm0%2BL8GOqUBJMHE25G5jlWS2uhFvpjBv1lmyC%2BdD4YgvQNRs3zHsdhgkO0LkGNV%2BuZze8muK5y2njqOgQBVJwDOye3TnamZqvR3DfXLV9Qtvt3SJd8XpnuICD6YsaEesyEYPbIRGPet1z56sas2qAk674WbzMSdWkVxXKb%2BjWKvCkLXCHuBT6sk5FOv9oPQGepSLH%2FeD42eHCg52RZkrPP7O242bUfySbs5ng%2Bq&X-Amz-Signature=f3fedae1064601114ed37993069c71a1fd7f40f0dfd7319543330f1f16f52f86&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDU4URF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi78hMClmof4qeWkNUIvpn4uaqGtWY6Xj8UftKxT1UQwIgX9o0UFmvPb41hKHvy6OXd4OQ2BfEssvs1%2FQOMzqQwc8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIUp6%2FG1lvaESxjFEyrcAxDqK%2BXvK3UOH0Ir%2BYKDQtHQa6dMKAL9w2oK7KOH8MvSrrQ8%2BTi4NCWYcu0cf4HtjKzVY%2FR8e8ZJ3c7e2Tp4p37nsDCgQ7NaG6yG4L6NUhC3R34%2BnaP6LqLSNF0WDqwNPRQ79dBeuR0i9suM6LpqSI2Qz5e2%2BeaumGciZ9zio5wEFIAPnJgVij3ZgPbJyZCsTuQh%2FXdOUtfuWKWWRyOa5mvznFwQidKQ1rwRxD6cTY%2BU6CItrUugjYjVVS%2FSyRuXkfWioNDhYmS5ku128%2F3Jw8yjrMdB6V6JvtaSBu4yTGYZdY3YG3fGdUnGdilVF7X4XFKEt8OsfoAGkulgfA73vVcxwQ%2FxmP2QiVjtFucmc%2BCknf6hbBZNraBVGE4tq5Z7wjK4c38gJ1p7JqkIQ6qiKhBUfgPj7DWSQmAeV6kdgFGxUjtcHYyS19uXC5zHzMlIFm5lU7ajtw1ATxEwsAQUHZeBhXJI2XIYSGpDalUGhO065Y3qTlzKY%2Bc6PGerTGLyO1REyughYRfgrewAOJLzwrJklNidQ4if9%2FQ%2Fc40MyPAW2IoMLRWNHngb1OGzwsIGCY7NQ522T%2FDpe4eZ4lXhP49dO3IUtsWWwhojVDPjpYy9OllHWhZxuwGSZDNHMPm0%2BL8GOqUBJMHE25G5jlWS2uhFvpjBv1lmyC%2BdD4YgvQNRs3zHsdhgkO0LkGNV%2BuZze8muK5y2njqOgQBVJwDOye3TnamZqvR3DfXLV9Qtvt3SJd8XpnuICD6YsaEesyEYPbIRGPet1z56sas2qAk674WbzMSdWkVxXKb%2BjWKvCkLXCHuBT6sk5FOv9oPQGepSLH%2FeD42eHCg52RZkrPP7O242bUfySbs5ng%2Bq&X-Amz-Signature=929706f212aaa2bcfb6b23b87954ff130253df394fabf611b8dfa411ff18a969&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDU4URF%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi78hMClmof4qeWkNUIvpn4uaqGtWY6Xj8UftKxT1UQwIgX9o0UFmvPb41hKHvy6OXd4OQ2BfEssvs1%2FQOMzqQwc8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIUp6%2FG1lvaESxjFEyrcAxDqK%2BXvK3UOH0Ir%2BYKDQtHQa6dMKAL9w2oK7KOH8MvSrrQ8%2BTi4NCWYcu0cf4HtjKzVY%2FR8e8ZJ3c7e2Tp4p37nsDCgQ7NaG6yG4L6NUhC3R34%2BnaP6LqLSNF0WDqwNPRQ79dBeuR0i9suM6LpqSI2Qz5e2%2BeaumGciZ9zio5wEFIAPnJgVij3ZgPbJyZCsTuQh%2FXdOUtfuWKWWRyOa5mvznFwQidKQ1rwRxD6cTY%2BU6CItrUugjYjVVS%2FSyRuXkfWioNDhYmS5ku128%2F3Jw8yjrMdB6V6JvtaSBu4yTGYZdY3YG3fGdUnGdilVF7X4XFKEt8OsfoAGkulgfA73vVcxwQ%2FxmP2QiVjtFucmc%2BCknf6hbBZNraBVGE4tq5Z7wjK4c38gJ1p7JqkIQ6qiKhBUfgPj7DWSQmAeV6kdgFGxUjtcHYyS19uXC5zHzMlIFm5lU7ajtw1ATxEwsAQUHZeBhXJI2XIYSGpDalUGhO065Y3qTlzKY%2Bc6PGerTGLyO1REyughYRfgrewAOJLzwrJklNidQ4if9%2FQ%2Fc40MyPAW2IoMLRWNHngb1OGzwsIGCY7NQ522T%2FDpe4eZ4lXhP49dO3IUtsWWwhojVDPjpYy9OllHWhZxuwGSZDNHMPm0%2BL8GOqUBJMHE25G5jlWS2uhFvpjBv1lmyC%2BdD4YgvQNRs3zHsdhgkO0LkGNV%2BuZze8muK5y2njqOgQBVJwDOye3TnamZqvR3DfXLV9Qtvt3SJd8XpnuICD6YsaEesyEYPbIRGPet1z56sas2qAk674WbzMSdWkVxXKb%2BjWKvCkLXCHuBT6sk5FOv9oPQGepSLH%2FeD42eHCg52RZkrPP7O242bUfySbs5ng%2Bq&X-Amz-Signature=3cdded2748e895a502482de29c20317e124b4226df615d340a99229674d45d83&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
