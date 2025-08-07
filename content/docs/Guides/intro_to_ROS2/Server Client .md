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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTLDLHNQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDcwkau1wALMN%2BG9NHU4Ei%2BbbiAHQmi5f0kvuGy7ZMbqQIhAKtan1Aax883Y%2BqBk7mUkfJ0X0XXWjKsEdFiX1LQPPNhKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCeYLLDRqRf6vywM0q3APl%2FVk4JwnmGpNiNH5YD962OykFWifhRuN6GMMkXnsOmmAJ395G5LCOqEZ2Uer%2BV8jrQq6cEa3UcegVb5YFWxh3sIukWpZqMQVo%2FPLNDvkajycxCu3r8sC%2BAYKhTjlVil4LnPXOhIT5boJwgN1IjwhAC3wdLnGZw4%2FfdSc1PGcIb8h4uRm3KONthoJ2F2m5x1wZHjTMUUOI8iuDuCC9EvPg3iL26n7yO5SgRQDonDK%2F4oXh7G6xo4Y2C6NvTMCx3HZgHpt%2Bz3bxP94cBrTxu0SFN292hb0qihvBa0ga%2F9s%2FJf44Lozmdfz3rODEd2dIN2Zc%2FGHqQDoCsojfYXY1o716MiopThfAnjRm5XQ1lmn%2B%2FBhCS1vmyqEJpXq7WEE4G%2BodRz5ZVWOf2Wyl%2BpGjUcD3m7bppR7Dyb6NOd56jbtLOPsPk81yGacxGjs5%2F6PPoHfB8OdzIVZEbHiz6St8G9NglRwO5NkedSxGR2VQnMc1PS6KRZXka%2Bp7MGvwhbZAm7zjUWxrbgWzo8qMng7LJrVb8HNh8uZxjB6OkMgXppHjhh5IdvLrkCUUgV7cv3K7eoU0Sd7Hd7ovI1m2uN0T8xwCuutAsDy6hgx26zs2neEPPpL20ba8f3aup7l%2BjDCBotPEBjqkAZTvqLnIqyx18QBZ2D0fnaMSGrJV883UNM%2B74rj3QK%2BXHs0te8b5%2FfjgXPwgyL5tbM270QKqpQ3NOtvbuI3jX0hcmMakh8wT9kKbnRnGZrPiq7P8SEyVjJ6i0TGqku7PtFvZuYQl3weM6Ekdzl2gkvyLlw0QHf5fm8eC%2FuvWE%2FsEi56XMOMzaC93wfvbVVXQnx3fyoylhMRfHZW5lSzgzgAUCUXy&X-Amz-Signature=9e5405f4197e72bab9b8f0b7686f074d8d9834e5bbfbdd312e6ec5e28e1044d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTLDLHNQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDcwkau1wALMN%2BG9NHU4Ei%2BbbiAHQmi5f0kvuGy7ZMbqQIhAKtan1Aax883Y%2BqBk7mUkfJ0X0XXWjKsEdFiX1LQPPNhKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCeYLLDRqRf6vywM0q3APl%2FVk4JwnmGpNiNH5YD962OykFWifhRuN6GMMkXnsOmmAJ395G5LCOqEZ2Uer%2BV8jrQq6cEa3UcegVb5YFWxh3sIukWpZqMQVo%2FPLNDvkajycxCu3r8sC%2BAYKhTjlVil4LnPXOhIT5boJwgN1IjwhAC3wdLnGZw4%2FfdSc1PGcIb8h4uRm3KONthoJ2F2m5x1wZHjTMUUOI8iuDuCC9EvPg3iL26n7yO5SgRQDonDK%2F4oXh7G6xo4Y2C6NvTMCx3HZgHpt%2Bz3bxP94cBrTxu0SFN292hb0qihvBa0ga%2F9s%2FJf44Lozmdfz3rODEd2dIN2Zc%2FGHqQDoCsojfYXY1o716MiopThfAnjRm5XQ1lmn%2B%2FBhCS1vmyqEJpXq7WEE4G%2BodRz5ZVWOf2Wyl%2BpGjUcD3m7bppR7Dyb6NOd56jbtLOPsPk81yGacxGjs5%2F6PPoHfB8OdzIVZEbHiz6St8G9NglRwO5NkedSxGR2VQnMc1PS6KRZXka%2Bp7MGvwhbZAm7zjUWxrbgWzo8qMng7LJrVb8HNh8uZxjB6OkMgXppHjhh5IdvLrkCUUgV7cv3K7eoU0Sd7Hd7ovI1m2uN0T8xwCuutAsDy6hgx26zs2neEPPpL20ba8f3aup7l%2BjDCBotPEBjqkAZTvqLnIqyx18QBZ2D0fnaMSGrJV883UNM%2B74rj3QK%2BXHs0te8b5%2FfjgXPwgyL5tbM270QKqpQ3NOtvbuI3jX0hcmMakh8wT9kKbnRnGZrPiq7P8SEyVjJ6i0TGqku7PtFvZuYQl3weM6Ekdzl2gkvyLlw0QHf5fm8eC%2FuvWE%2FsEi56XMOMzaC93wfvbVVXQnx3fyoylhMRfHZW5lSzgzgAUCUXy&X-Amz-Signature=181e103d9ca60ea19f691cb91723695a564ad74f642564c2ef2d42aa1518ba44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTLDLHNQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDcwkau1wALMN%2BG9NHU4Ei%2BbbiAHQmi5f0kvuGy7ZMbqQIhAKtan1Aax883Y%2BqBk7mUkfJ0X0XXWjKsEdFiX1LQPPNhKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCeYLLDRqRf6vywM0q3APl%2FVk4JwnmGpNiNH5YD962OykFWifhRuN6GMMkXnsOmmAJ395G5LCOqEZ2Uer%2BV8jrQq6cEa3UcegVb5YFWxh3sIukWpZqMQVo%2FPLNDvkajycxCu3r8sC%2BAYKhTjlVil4LnPXOhIT5boJwgN1IjwhAC3wdLnGZw4%2FfdSc1PGcIb8h4uRm3KONthoJ2F2m5x1wZHjTMUUOI8iuDuCC9EvPg3iL26n7yO5SgRQDonDK%2F4oXh7G6xo4Y2C6NvTMCx3HZgHpt%2Bz3bxP94cBrTxu0SFN292hb0qihvBa0ga%2F9s%2FJf44Lozmdfz3rODEd2dIN2Zc%2FGHqQDoCsojfYXY1o716MiopThfAnjRm5XQ1lmn%2B%2FBhCS1vmyqEJpXq7WEE4G%2BodRz5ZVWOf2Wyl%2BpGjUcD3m7bppR7Dyb6NOd56jbtLOPsPk81yGacxGjs5%2F6PPoHfB8OdzIVZEbHiz6St8G9NglRwO5NkedSxGR2VQnMc1PS6KRZXka%2Bp7MGvwhbZAm7zjUWxrbgWzo8qMng7LJrVb8HNh8uZxjB6OkMgXppHjhh5IdvLrkCUUgV7cv3K7eoU0Sd7Hd7ovI1m2uN0T8xwCuutAsDy6hgx26zs2neEPPpL20ba8f3aup7l%2BjDCBotPEBjqkAZTvqLnIqyx18QBZ2D0fnaMSGrJV883UNM%2B74rj3QK%2BXHs0te8b5%2FfjgXPwgyL5tbM270QKqpQ3NOtvbuI3jX0hcmMakh8wT9kKbnRnGZrPiq7P8SEyVjJ6i0TGqku7PtFvZuYQl3weM6Ekdzl2gkvyLlw0QHf5fm8eC%2FuvWE%2FsEi56XMOMzaC93wfvbVVXQnx3fyoylhMRfHZW5lSzgzgAUCUXy&X-Amz-Signature=4d7bd0c89e64fbeb17238e7299dc9e4da166b6c6874620745de16784a7d1abc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTLDLHNQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDcwkau1wALMN%2BG9NHU4Ei%2BbbiAHQmi5f0kvuGy7ZMbqQIhAKtan1Aax883Y%2BqBk7mUkfJ0X0XXWjKsEdFiX1LQPPNhKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCeYLLDRqRf6vywM0q3APl%2FVk4JwnmGpNiNH5YD962OykFWifhRuN6GMMkXnsOmmAJ395G5LCOqEZ2Uer%2BV8jrQq6cEa3UcegVb5YFWxh3sIukWpZqMQVo%2FPLNDvkajycxCu3r8sC%2BAYKhTjlVil4LnPXOhIT5boJwgN1IjwhAC3wdLnGZw4%2FfdSc1PGcIb8h4uRm3KONthoJ2F2m5x1wZHjTMUUOI8iuDuCC9EvPg3iL26n7yO5SgRQDonDK%2F4oXh7G6xo4Y2C6NvTMCx3HZgHpt%2Bz3bxP94cBrTxu0SFN292hb0qihvBa0ga%2F9s%2FJf44Lozmdfz3rODEd2dIN2Zc%2FGHqQDoCsojfYXY1o716MiopThfAnjRm5XQ1lmn%2B%2FBhCS1vmyqEJpXq7WEE4G%2BodRz5ZVWOf2Wyl%2BpGjUcD3m7bppR7Dyb6NOd56jbtLOPsPk81yGacxGjs5%2F6PPoHfB8OdzIVZEbHiz6St8G9NglRwO5NkedSxGR2VQnMc1PS6KRZXka%2Bp7MGvwhbZAm7zjUWxrbgWzo8qMng7LJrVb8HNh8uZxjB6OkMgXppHjhh5IdvLrkCUUgV7cv3K7eoU0Sd7Hd7ovI1m2uN0T8xwCuutAsDy6hgx26zs2neEPPpL20ba8f3aup7l%2BjDCBotPEBjqkAZTvqLnIqyx18QBZ2D0fnaMSGrJV883UNM%2B74rj3QK%2BXHs0te8b5%2FfjgXPwgyL5tbM270QKqpQ3NOtvbuI3jX0hcmMakh8wT9kKbnRnGZrPiq7P8SEyVjJ6i0TGqku7PtFvZuYQl3weM6Ekdzl2gkvyLlw0QHf5fm8eC%2FuvWE%2FsEi56XMOMzaC93wfvbVVXQnx3fyoylhMRfHZW5lSzgzgAUCUXy&X-Amz-Signature=09d70e811e4c0aeaa44ba1c38d7e5303e46b727927041dfd201fee8a0e82008b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTLDLHNQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDcwkau1wALMN%2BG9NHU4Ei%2BbbiAHQmi5f0kvuGy7ZMbqQIhAKtan1Aax883Y%2BqBk7mUkfJ0X0XXWjKsEdFiX1LQPPNhKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCeYLLDRqRf6vywM0q3APl%2FVk4JwnmGpNiNH5YD962OykFWifhRuN6GMMkXnsOmmAJ395G5LCOqEZ2Uer%2BV8jrQq6cEa3UcegVb5YFWxh3sIukWpZqMQVo%2FPLNDvkajycxCu3r8sC%2BAYKhTjlVil4LnPXOhIT5boJwgN1IjwhAC3wdLnGZw4%2FfdSc1PGcIb8h4uRm3KONthoJ2F2m5x1wZHjTMUUOI8iuDuCC9EvPg3iL26n7yO5SgRQDonDK%2F4oXh7G6xo4Y2C6NvTMCx3HZgHpt%2Bz3bxP94cBrTxu0SFN292hb0qihvBa0ga%2F9s%2FJf44Lozmdfz3rODEd2dIN2Zc%2FGHqQDoCsojfYXY1o716MiopThfAnjRm5XQ1lmn%2B%2FBhCS1vmyqEJpXq7WEE4G%2BodRz5ZVWOf2Wyl%2BpGjUcD3m7bppR7Dyb6NOd56jbtLOPsPk81yGacxGjs5%2F6PPoHfB8OdzIVZEbHiz6St8G9NglRwO5NkedSxGR2VQnMc1PS6KRZXka%2Bp7MGvwhbZAm7zjUWxrbgWzo8qMng7LJrVb8HNh8uZxjB6OkMgXppHjhh5IdvLrkCUUgV7cv3K7eoU0Sd7Hd7ovI1m2uN0T8xwCuutAsDy6hgx26zs2neEPPpL20ba8f3aup7l%2BjDCBotPEBjqkAZTvqLnIqyx18QBZ2D0fnaMSGrJV883UNM%2B74rj3QK%2BXHs0te8b5%2FfjgXPwgyL5tbM270QKqpQ3NOtvbuI3jX0hcmMakh8wT9kKbnRnGZrPiq7P8SEyVjJ6i0TGqku7PtFvZuYQl3weM6Ekdzl2gkvyLlw0QHf5fm8eC%2FuvWE%2FsEi56XMOMzaC93wfvbVVXQnx3fyoylhMRfHZW5lSzgzgAUCUXy&X-Amz-Signature=53755a2db1133a1610b6594d2d38b8d4786da1fdddfde3ea955dddfd3007b78c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
