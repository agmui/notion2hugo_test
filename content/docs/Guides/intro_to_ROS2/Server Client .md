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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOVCCO6Q%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIHRO%2BIfxKCNziMOrYzXwS3%2FfwtNkEBeZRbCkdfv23c73AiA8fq1k2ZPP58fQ0ICQAvBBybJizM%2FsrwOQlj6QSH5pryr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMhBgIMw1TF8ZGQPMpKtwDJWiofc4PqZd%2FK6qDzW2085FNCJN8W7S7vYjpDuiyJ5%2BI9t2Dxvr2wns%2BO74wYzY%2FCIuUISoPTO0Odw02RUSxx%2BZ08xxYW1d0wqF7ieEzc50u9tdGQNlYQvlbHry4Ik%2FXFUqH9WHAUESTW64iSAHd8tM%2BM9rDhAt7k48pGygoM5pXDH5qsoMhz85Ufqy881UAr%2Bu65XJRJSxkEV40rGo2oZynSLBHLqkENrlVro49et94FEZF0n6EkptqQM%2Bif9TLuJurHE9sV2Vz3bPOP0d%2BOQ4Z8YPKjIRyswMtanYRcJ0TPiqiu0WFyDYLtXFRwJNI4%2FR0GJxP7cLGzL3EwzBe8ADUIe1M3mb1sHdx8u7%2Beq15pNAk4QYicHKDWBpBNrn2AKjN4zih9a6zHuQzYjenDmGyOLlckBbOqk0XdZNu9X0kB4cpWQgySin3FeSVZq2%2BStvB0yZaMDho4lUfG90avxcZv%2BsqtxXxbhL7h1ZuQIAfrK5%2ByDx8i8ScvyaJYp%2FdPF9kfjBDaJ4r1yghXIULNu8S8QtKUhAGYpgjOQYfjlm6YjdnQiYhm%2Fx6NQ4ptwo%2Bc4o56ns%2FZsZPqcXzAiVszkqsClftd%2BSm%2Bf5N5vAbgj2czvK0SsrYDFVidBww7efdwwY6pgFyL6lYyG97hozaM16WZuNQjpyYWC0QLtHTdoxI0J5cvlDCn585Qdgel7TfpEt0mR5D8Nz4w3MyoP0suebhVjXAcjK3VR3Bq1%2Bb78MKn2AKnI10711znI5kSIev5bQHlDoWuGEXuSU9s9jbjMx6yZqCPICr1xhyP9bFjWf4jmAWPiztzy0L8U4FGmABnmTWh5q6tI2U1moHxCpSp3oy87sG32mHDBw8&X-Amz-Signature=f6f8dfb7396735cd3bb4011b30c381eca8cefb254d0d4c9d137691a3ade52f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOVCCO6Q%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIHRO%2BIfxKCNziMOrYzXwS3%2FfwtNkEBeZRbCkdfv23c73AiA8fq1k2ZPP58fQ0ICQAvBBybJizM%2FsrwOQlj6QSH5pryr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMhBgIMw1TF8ZGQPMpKtwDJWiofc4PqZd%2FK6qDzW2085FNCJN8W7S7vYjpDuiyJ5%2BI9t2Dxvr2wns%2BO74wYzY%2FCIuUISoPTO0Odw02RUSxx%2BZ08xxYW1d0wqF7ieEzc50u9tdGQNlYQvlbHry4Ik%2FXFUqH9WHAUESTW64iSAHd8tM%2BM9rDhAt7k48pGygoM5pXDH5qsoMhz85Ufqy881UAr%2Bu65XJRJSxkEV40rGo2oZynSLBHLqkENrlVro49et94FEZF0n6EkptqQM%2Bif9TLuJurHE9sV2Vz3bPOP0d%2BOQ4Z8YPKjIRyswMtanYRcJ0TPiqiu0WFyDYLtXFRwJNI4%2FR0GJxP7cLGzL3EwzBe8ADUIe1M3mb1sHdx8u7%2Beq15pNAk4QYicHKDWBpBNrn2AKjN4zih9a6zHuQzYjenDmGyOLlckBbOqk0XdZNu9X0kB4cpWQgySin3FeSVZq2%2BStvB0yZaMDho4lUfG90avxcZv%2BsqtxXxbhL7h1ZuQIAfrK5%2ByDx8i8ScvyaJYp%2FdPF9kfjBDaJ4r1yghXIULNu8S8QtKUhAGYpgjOQYfjlm6YjdnQiYhm%2Fx6NQ4ptwo%2Bc4o56ns%2FZsZPqcXzAiVszkqsClftd%2BSm%2Bf5N5vAbgj2czvK0SsrYDFVidBww7efdwwY6pgFyL6lYyG97hozaM16WZuNQjpyYWC0QLtHTdoxI0J5cvlDCn585Qdgel7TfpEt0mR5D8Nz4w3MyoP0suebhVjXAcjK3VR3Bq1%2Bb78MKn2AKnI10711znI5kSIev5bQHlDoWuGEXuSU9s9jbjMx6yZqCPICr1xhyP9bFjWf4jmAWPiztzy0L8U4FGmABnmTWh5q6tI2U1moHxCpSp3oy87sG32mHDBw8&X-Amz-Signature=e02e637701b9eb67a17979ed63518cf081b4d8de3d830cea466d7f6e4efb10aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOVCCO6Q%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIHRO%2BIfxKCNziMOrYzXwS3%2FfwtNkEBeZRbCkdfv23c73AiA8fq1k2ZPP58fQ0ICQAvBBybJizM%2FsrwOQlj6QSH5pryr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMhBgIMw1TF8ZGQPMpKtwDJWiofc4PqZd%2FK6qDzW2085FNCJN8W7S7vYjpDuiyJ5%2BI9t2Dxvr2wns%2BO74wYzY%2FCIuUISoPTO0Odw02RUSxx%2BZ08xxYW1d0wqF7ieEzc50u9tdGQNlYQvlbHry4Ik%2FXFUqH9WHAUESTW64iSAHd8tM%2BM9rDhAt7k48pGygoM5pXDH5qsoMhz85Ufqy881UAr%2Bu65XJRJSxkEV40rGo2oZynSLBHLqkENrlVro49et94FEZF0n6EkptqQM%2Bif9TLuJurHE9sV2Vz3bPOP0d%2BOQ4Z8YPKjIRyswMtanYRcJ0TPiqiu0WFyDYLtXFRwJNI4%2FR0GJxP7cLGzL3EwzBe8ADUIe1M3mb1sHdx8u7%2Beq15pNAk4QYicHKDWBpBNrn2AKjN4zih9a6zHuQzYjenDmGyOLlckBbOqk0XdZNu9X0kB4cpWQgySin3FeSVZq2%2BStvB0yZaMDho4lUfG90avxcZv%2BsqtxXxbhL7h1ZuQIAfrK5%2ByDx8i8ScvyaJYp%2FdPF9kfjBDaJ4r1yghXIULNu8S8QtKUhAGYpgjOQYfjlm6YjdnQiYhm%2Fx6NQ4ptwo%2Bc4o56ns%2FZsZPqcXzAiVszkqsClftd%2BSm%2Bf5N5vAbgj2czvK0SsrYDFVidBww7efdwwY6pgFyL6lYyG97hozaM16WZuNQjpyYWC0QLtHTdoxI0J5cvlDCn585Qdgel7TfpEt0mR5D8Nz4w3MyoP0suebhVjXAcjK3VR3Bq1%2Bb78MKn2AKnI10711znI5kSIev5bQHlDoWuGEXuSU9s9jbjMx6yZqCPICr1xhyP9bFjWf4jmAWPiztzy0L8U4FGmABnmTWh5q6tI2U1moHxCpSp3oy87sG32mHDBw8&X-Amz-Signature=48839e9f6f0fd40217323b79522e4d497fdd1680eb7cc21f32b0a37caa17d46e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOVCCO6Q%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIHRO%2BIfxKCNziMOrYzXwS3%2FfwtNkEBeZRbCkdfv23c73AiA8fq1k2ZPP58fQ0ICQAvBBybJizM%2FsrwOQlj6QSH5pryr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMhBgIMw1TF8ZGQPMpKtwDJWiofc4PqZd%2FK6qDzW2085FNCJN8W7S7vYjpDuiyJ5%2BI9t2Dxvr2wns%2BO74wYzY%2FCIuUISoPTO0Odw02RUSxx%2BZ08xxYW1d0wqF7ieEzc50u9tdGQNlYQvlbHry4Ik%2FXFUqH9WHAUESTW64iSAHd8tM%2BM9rDhAt7k48pGygoM5pXDH5qsoMhz85Ufqy881UAr%2Bu65XJRJSxkEV40rGo2oZynSLBHLqkENrlVro49et94FEZF0n6EkptqQM%2Bif9TLuJurHE9sV2Vz3bPOP0d%2BOQ4Z8YPKjIRyswMtanYRcJ0TPiqiu0WFyDYLtXFRwJNI4%2FR0GJxP7cLGzL3EwzBe8ADUIe1M3mb1sHdx8u7%2Beq15pNAk4QYicHKDWBpBNrn2AKjN4zih9a6zHuQzYjenDmGyOLlckBbOqk0XdZNu9X0kB4cpWQgySin3FeSVZq2%2BStvB0yZaMDho4lUfG90avxcZv%2BsqtxXxbhL7h1ZuQIAfrK5%2ByDx8i8ScvyaJYp%2FdPF9kfjBDaJ4r1yghXIULNu8S8QtKUhAGYpgjOQYfjlm6YjdnQiYhm%2Fx6NQ4ptwo%2Bc4o56ns%2FZsZPqcXzAiVszkqsClftd%2BSm%2Bf5N5vAbgj2czvK0SsrYDFVidBww7efdwwY6pgFyL6lYyG97hozaM16WZuNQjpyYWC0QLtHTdoxI0J5cvlDCn585Qdgel7TfpEt0mR5D8Nz4w3MyoP0suebhVjXAcjK3VR3Bq1%2Bb78MKn2AKnI10711znI5kSIev5bQHlDoWuGEXuSU9s9jbjMx6yZqCPICr1xhyP9bFjWf4jmAWPiztzy0L8U4FGmABnmTWh5q6tI2U1moHxCpSp3oy87sG32mHDBw8&X-Amz-Signature=9cf7aaf89bab38152ea9b954baa8628d031b8752080d972ba886c7e412d13828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOVCCO6Q%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIHRO%2BIfxKCNziMOrYzXwS3%2FfwtNkEBeZRbCkdfv23c73AiA8fq1k2ZPP58fQ0ICQAvBBybJizM%2FsrwOQlj6QSH5pryr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMhBgIMw1TF8ZGQPMpKtwDJWiofc4PqZd%2FK6qDzW2085FNCJN8W7S7vYjpDuiyJ5%2BI9t2Dxvr2wns%2BO74wYzY%2FCIuUISoPTO0Odw02RUSxx%2BZ08xxYW1d0wqF7ieEzc50u9tdGQNlYQvlbHry4Ik%2FXFUqH9WHAUESTW64iSAHd8tM%2BM9rDhAt7k48pGygoM5pXDH5qsoMhz85Ufqy881UAr%2Bu65XJRJSxkEV40rGo2oZynSLBHLqkENrlVro49et94FEZF0n6EkptqQM%2Bif9TLuJurHE9sV2Vz3bPOP0d%2BOQ4Z8YPKjIRyswMtanYRcJ0TPiqiu0WFyDYLtXFRwJNI4%2FR0GJxP7cLGzL3EwzBe8ADUIe1M3mb1sHdx8u7%2Beq15pNAk4QYicHKDWBpBNrn2AKjN4zih9a6zHuQzYjenDmGyOLlckBbOqk0XdZNu9X0kB4cpWQgySin3FeSVZq2%2BStvB0yZaMDho4lUfG90avxcZv%2BsqtxXxbhL7h1ZuQIAfrK5%2ByDx8i8ScvyaJYp%2FdPF9kfjBDaJ4r1yghXIULNu8S8QtKUhAGYpgjOQYfjlm6YjdnQiYhm%2Fx6NQ4ptwo%2Bc4o56ns%2FZsZPqcXzAiVszkqsClftd%2BSm%2Bf5N5vAbgj2czvK0SsrYDFVidBww7efdwwY6pgFyL6lYyG97hozaM16WZuNQjpyYWC0QLtHTdoxI0J5cvlDCn585Qdgel7TfpEt0mR5D8Nz4w3MyoP0suebhVjXAcjK3VR3Bq1%2Bb78MKn2AKnI10711znI5kSIev5bQHlDoWuGEXuSU9s9jbjMx6yZqCPICr1xhyP9bFjWf4jmAWPiztzy0L8U4FGmABnmTWh5q6tI2U1moHxCpSp3oy87sG32mHDBw8&X-Amz-Signature=e62d5c3a16d6fa079df59b01f9e631e2ea560de5e114b932f4c6dacad35109d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
