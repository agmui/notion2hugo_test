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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW7COUQ5%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDy8Kg0yMekqevm6%2Fur1DFTtpVLXlr0PrVF9UJCTvLpOgIgLvmHE7GICXOxvD%2FVgxbI1UegLg7s3EV0Rbp96FJ92kgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7VuOjLai2xRd3mCyrcAwQNl5CWwTfUkitMkUSGWSuL0vNhCVUqZpUTfKKJsTHdKBP%2BIzs8TUnRzrZhKXmMvY5lypittTTF1QM4ypzLCY0JVX%2BWywynVtmV%2Bmx%2BN7t0XsxBbTT3a2sgh4cIk4%2B%2BK%2FjDyb75%2BZsij11gelboMqhdngvI3FWcokPP%2B0yZ%2B9NywqN5%2FZPzBmyD9dD3Zesfja06SQ7e8R7m6UVtqH5FsFinucGlm2wLYwTjd6lGp81iSGBGjlHKIAbgaw%2FXYezkxQCiWgYlkH49wQdOlVfGcirYDpNqegXag%2BhTQhDLp%2FWW2jmevngF%2BbC0gSUez%2Fvi3hCOmSMjHpjzsHfM%2FGhOyUv1BrTc8K4RKOeAER%2Fjxn5nGo3aMqKb7VyvbWbqU6bAfd5K5dNQk95d%2FhBsFWYSa34deq8OyrzNKh6rH%2B4joeMGJ1GHvQTMHfaUr%2BsD49n3jgBPoN8pNxBJAZl%2Ffvmlkd9mEeT42sHvDidHA5PpAgawAbM5WtL6Id1atvYCNIFd0EOxkoZqkKKvtsm3sP9vTEabBO8WN8OucsJ7sEqrOJSRn7zD8PfMVQp9oLtBCqivFaI%2Bsm9Bz11575Ytan0asF7f7uqu7r42K1n4%2FJwkfmozc%2BIRQ7n0dVGR5zFXMPqQir4GOqUB6PE4QcTME3dsRpC3zSq4299N016A1lTQGHXrtNCgC7wEe4Teu8GhLrnaWHvO1ewC8i6Jx2X4izpLcsqvOq1rX4sQz2UCty3l7atRIShUTfcavcCiJJpeVAXh5OxnqGA0LyVHcZp5qF7J2JHxZ4yoDg%2FKIBAW5jo3FGlJNgDGbZ13g8ofDs64MIR7eZ%2F%2B%2Fr8nONFlWjmKDJC%2BzV2Ff1QhB6HjInP3&X-Amz-Signature=148b06ad691c69b11ae2b0e05e39f8c4ff6ed1d6e79961d55ed2267bb30e19e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW7COUQ5%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDy8Kg0yMekqevm6%2Fur1DFTtpVLXlr0PrVF9UJCTvLpOgIgLvmHE7GICXOxvD%2FVgxbI1UegLg7s3EV0Rbp96FJ92kgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7VuOjLai2xRd3mCyrcAwQNl5CWwTfUkitMkUSGWSuL0vNhCVUqZpUTfKKJsTHdKBP%2BIzs8TUnRzrZhKXmMvY5lypittTTF1QM4ypzLCY0JVX%2BWywynVtmV%2Bmx%2BN7t0XsxBbTT3a2sgh4cIk4%2B%2BK%2FjDyb75%2BZsij11gelboMqhdngvI3FWcokPP%2B0yZ%2B9NywqN5%2FZPzBmyD9dD3Zesfja06SQ7e8R7m6UVtqH5FsFinucGlm2wLYwTjd6lGp81iSGBGjlHKIAbgaw%2FXYezkxQCiWgYlkH49wQdOlVfGcirYDpNqegXag%2BhTQhDLp%2FWW2jmevngF%2BbC0gSUez%2Fvi3hCOmSMjHpjzsHfM%2FGhOyUv1BrTc8K4RKOeAER%2Fjxn5nGo3aMqKb7VyvbWbqU6bAfd5K5dNQk95d%2FhBsFWYSa34deq8OyrzNKh6rH%2B4joeMGJ1GHvQTMHfaUr%2BsD49n3jgBPoN8pNxBJAZl%2Ffvmlkd9mEeT42sHvDidHA5PpAgawAbM5WtL6Id1atvYCNIFd0EOxkoZqkKKvtsm3sP9vTEabBO8WN8OucsJ7sEqrOJSRn7zD8PfMVQp9oLtBCqivFaI%2Bsm9Bz11575Ytan0asF7f7uqu7r42K1n4%2FJwkfmozc%2BIRQ7n0dVGR5zFXMPqQir4GOqUB6PE4QcTME3dsRpC3zSq4299N016A1lTQGHXrtNCgC7wEe4Teu8GhLrnaWHvO1ewC8i6Jx2X4izpLcsqvOq1rX4sQz2UCty3l7atRIShUTfcavcCiJJpeVAXh5OxnqGA0LyVHcZp5qF7J2JHxZ4yoDg%2FKIBAW5jo3FGlJNgDGbZ13g8ofDs64MIR7eZ%2F%2B%2Fr8nONFlWjmKDJC%2BzV2Ff1QhB6HjInP3&X-Amz-Signature=8d1af9b078c1d5cafb334b4119ae551547148b5c3dc0c0f6b5dfb8f7cb0b0e96&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW7COUQ5%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDy8Kg0yMekqevm6%2Fur1DFTtpVLXlr0PrVF9UJCTvLpOgIgLvmHE7GICXOxvD%2FVgxbI1UegLg7s3EV0Rbp96FJ92kgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7VuOjLai2xRd3mCyrcAwQNl5CWwTfUkitMkUSGWSuL0vNhCVUqZpUTfKKJsTHdKBP%2BIzs8TUnRzrZhKXmMvY5lypittTTF1QM4ypzLCY0JVX%2BWywynVtmV%2Bmx%2BN7t0XsxBbTT3a2sgh4cIk4%2B%2BK%2FjDyb75%2BZsij11gelboMqhdngvI3FWcokPP%2B0yZ%2B9NywqN5%2FZPzBmyD9dD3Zesfja06SQ7e8R7m6UVtqH5FsFinucGlm2wLYwTjd6lGp81iSGBGjlHKIAbgaw%2FXYezkxQCiWgYlkH49wQdOlVfGcirYDpNqegXag%2BhTQhDLp%2FWW2jmevngF%2BbC0gSUez%2Fvi3hCOmSMjHpjzsHfM%2FGhOyUv1BrTc8K4RKOeAER%2Fjxn5nGo3aMqKb7VyvbWbqU6bAfd5K5dNQk95d%2FhBsFWYSa34deq8OyrzNKh6rH%2B4joeMGJ1GHvQTMHfaUr%2BsD49n3jgBPoN8pNxBJAZl%2Ffvmlkd9mEeT42sHvDidHA5PpAgawAbM5WtL6Id1atvYCNIFd0EOxkoZqkKKvtsm3sP9vTEabBO8WN8OucsJ7sEqrOJSRn7zD8PfMVQp9oLtBCqivFaI%2Bsm9Bz11575Ytan0asF7f7uqu7r42K1n4%2FJwkfmozc%2BIRQ7n0dVGR5zFXMPqQir4GOqUB6PE4QcTME3dsRpC3zSq4299N016A1lTQGHXrtNCgC7wEe4Teu8GhLrnaWHvO1ewC8i6Jx2X4izpLcsqvOq1rX4sQz2UCty3l7atRIShUTfcavcCiJJpeVAXh5OxnqGA0LyVHcZp5qF7J2JHxZ4yoDg%2FKIBAW5jo3FGlJNgDGbZ13g8ofDs64MIR7eZ%2F%2B%2Fr8nONFlWjmKDJC%2BzV2Ff1QhB6HjInP3&X-Amz-Signature=922c75b2ecef475f702179f511441875c98b7a709a3ee63ceb358e3a8115d401&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW7COUQ5%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDy8Kg0yMekqevm6%2Fur1DFTtpVLXlr0PrVF9UJCTvLpOgIgLvmHE7GICXOxvD%2FVgxbI1UegLg7s3EV0Rbp96FJ92kgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7VuOjLai2xRd3mCyrcAwQNl5CWwTfUkitMkUSGWSuL0vNhCVUqZpUTfKKJsTHdKBP%2BIzs8TUnRzrZhKXmMvY5lypittTTF1QM4ypzLCY0JVX%2BWywynVtmV%2Bmx%2BN7t0XsxBbTT3a2sgh4cIk4%2B%2BK%2FjDyb75%2BZsij11gelboMqhdngvI3FWcokPP%2B0yZ%2B9NywqN5%2FZPzBmyD9dD3Zesfja06SQ7e8R7m6UVtqH5FsFinucGlm2wLYwTjd6lGp81iSGBGjlHKIAbgaw%2FXYezkxQCiWgYlkH49wQdOlVfGcirYDpNqegXag%2BhTQhDLp%2FWW2jmevngF%2BbC0gSUez%2Fvi3hCOmSMjHpjzsHfM%2FGhOyUv1BrTc8K4RKOeAER%2Fjxn5nGo3aMqKb7VyvbWbqU6bAfd5K5dNQk95d%2FhBsFWYSa34deq8OyrzNKh6rH%2B4joeMGJ1GHvQTMHfaUr%2BsD49n3jgBPoN8pNxBJAZl%2Ffvmlkd9mEeT42sHvDidHA5PpAgawAbM5WtL6Id1atvYCNIFd0EOxkoZqkKKvtsm3sP9vTEabBO8WN8OucsJ7sEqrOJSRn7zD8PfMVQp9oLtBCqivFaI%2Bsm9Bz11575Ytan0asF7f7uqu7r42K1n4%2FJwkfmozc%2BIRQ7n0dVGR5zFXMPqQir4GOqUB6PE4QcTME3dsRpC3zSq4299N016A1lTQGHXrtNCgC7wEe4Teu8GhLrnaWHvO1ewC8i6Jx2X4izpLcsqvOq1rX4sQz2UCty3l7atRIShUTfcavcCiJJpeVAXh5OxnqGA0LyVHcZp5qF7J2JHxZ4yoDg%2FKIBAW5jo3FGlJNgDGbZ13g8ofDs64MIR7eZ%2F%2B%2Fr8nONFlWjmKDJC%2BzV2Ff1QhB6HjInP3&X-Amz-Signature=29cf5979ef6cec85df5c0c3f29886a9bf6a852894b8005d1e9a6422dab0eaefc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW7COUQ5%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDy8Kg0yMekqevm6%2Fur1DFTtpVLXlr0PrVF9UJCTvLpOgIgLvmHE7GICXOxvD%2FVgxbI1UegLg7s3EV0Rbp96FJ92kgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7VuOjLai2xRd3mCyrcAwQNl5CWwTfUkitMkUSGWSuL0vNhCVUqZpUTfKKJsTHdKBP%2BIzs8TUnRzrZhKXmMvY5lypittTTF1QM4ypzLCY0JVX%2BWywynVtmV%2Bmx%2BN7t0XsxBbTT3a2sgh4cIk4%2B%2BK%2FjDyb75%2BZsij11gelboMqhdngvI3FWcokPP%2B0yZ%2B9NywqN5%2FZPzBmyD9dD3Zesfja06SQ7e8R7m6UVtqH5FsFinucGlm2wLYwTjd6lGp81iSGBGjlHKIAbgaw%2FXYezkxQCiWgYlkH49wQdOlVfGcirYDpNqegXag%2BhTQhDLp%2FWW2jmevngF%2BbC0gSUez%2Fvi3hCOmSMjHpjzsHfM%2FGhOyUv1BrTc8K4RKOeAER%2Fjxn5nGo3aMqKb7VyvbWbqU6bAfd5K5dNQk95d%2FhBsFWYSa34deq8OyrzNKh6rH%2B4joeMGJ1GHvQTMHfaUr%2BsD49n3jgBPoN8pNxBJAZl%2Ffvmlkd9mEeT42sHvDidHA5PpAgawAbM5WtL6Id1atvYCNIFd0EOxkoZqkKKvtsm3sP9vTEabBO8WN8OucsJ7sEqrOJSRn7zD8PfMVQp9oLtBCqivFaI%2Bsm9Bz11575Ytan0asF7f7uqu7r42K1n4%2FJwkfmozc%2BIRQ7n0dVGR5zFXMPqQir4GOqUB6PE4QcTME3dsRpC3zSq4299N016A1lTQGHXrtNCgC7wEe4Teu8GhLrnaWHvO1ewC8i6Jx2X4izpLcsqvOq1rX4sQz2UCty3l7atRIShUTfcavcCiJJpeVAXh5OxnqGA0LyVHcZp5qF7J2JHxZ4yoDg%2FKIBAW5jo3FGlJNgDGbZ13g8ofDs64MIR7eZ%2F%2B%2Fr8nONFlWjmKDJC%2BzV2Ff1QhB6HjInP3&X-Amz-Signature=e51d25a6ff921c238562397fbd92340d2e4ef039a9e9e6d0569221f5a19dddc2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
