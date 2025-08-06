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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4WNG3YD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICjBCFHKTtMRqHHBWbo9HhYxye4X%2FetDvvbdcS3ybK4zAiA8O9D707dOgaMY5LaikUls1VAPIUfC3w6JuXY8LW5V6Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMA9xSHRVMwBgQoHFTKtwDfF%2Fo4I7SmLnhKJlarMYWmqdk8EM8EKMdhYjtZy2z%2BHnA20eD34QEZdMtYIWW6Ao2oO5z2oxkgHPQxLQhqZyakWj61LmsGqEm91n9d2Cwx4Cqwtbu6hnU2vlpTvw4TMyRtc%2B%2BW8TvlacbGe1qP3%2F6fVDNz3FyZanq8AkWrwQv0SsRvb1PmLzjsPFmt9sFkeIxFW6yIpHuiBLuxkbeuGHnCogR8ch6SjWKyLd%2FSKbxn%2F1CMfbl%2F%2BbTIar3kCLLmFJf%2BJrAYDYsHAV8WWcFs0LW7vH%2BuYF1%2Fo%2FGNagc5YqODnr7a2aPcExtlZLoNFgjpOzcaoaXHoMbAebBzrZpTOF3bx9zp6Dn0Ulyy6IRbx6G9n9pmoVo0lsbyCX4FDK6Iv3AreNLuH%2FO%2FM0xFRTz445yVBhTTUZjzxnZDNAOOhb0wVLkUJbxmt7W29oQLtBcc2rHl6Phpr9v23edeTdUnK571i6JOZJaxwMA1XMA%2FSi%2FCvXoJovQmFpjM4monWuhv78rsAB%2FJBN%2BdSL9ZOcQizRWFg%2FDK5KlHIyV9Ytv3pmuvh7BMFDbzAdxXhKj6qR6GpDayTJFNuW6uEGj50Joa%2FolHwYmxleYbJzftQoi2bYZ5l3%2BWoL49GetT9Kbjkkwq8%2FMxAY6pgHeQPXTVirBzBIMuHBr0weAD%2FyRc0fLyBUWdfWoM4Wz3UnV8k1GpoNf0v3lZ5CjnZd9EFXPUPIJyU4GibcNbMrvVrFra6Sv4TyOmSFodjdhW8O1ORk2Z2l8F3UwOCLwWtB%2BwFlqv8szvwT3XPIaZSqFmm6yCIt8sqyTN%2FFs0XhsfpSGCC7ymPv3zceWNP7ngQpNsoU4ypoFO%2BaY%2F4nGI7kmG32IGM4n&X-Amz-Signature=8b00e787d90e30ac84c10df405124841d659744affd371fe884c77fc5cba7548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4WNG3YD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICjBCFHKTtMRqHHBWbo9HhYxye4X%2FetDvvbdcS3ybK4zAiA8O9D707dOgaMY5LaikUls1VAPIUfC3w6JuXY8LW5V6Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMA9xSHRVMwBgQoHFTKtwDfF%2Fo4I7SmLnhKJlarMYWmqdk8EM8EKMdhYjtZy2z%2BHnA20eD34QEZdMtYIWW6Ao2oO5z2oxkgHPQxLQhqZyakWj61LmsGqEm91n9d2Cwx4Cqwtbu6hnU2vlpTvw4TMyRtc%2B%2BW8TvlacbGe1qP3%2F6fVDNz3FyZanq8AkWrwQv0SsRvb1PmLzjsPFmt9sFkeIxFW6yIpHuiBLuxkbeuGHnCogR8ch6SjWKyLd%2FSKbxn%2F1CMfbl%2F%2BbTIar3kCLLmFJf%2BJrAYDYsHAV8WWcFs0LW7vH%2BuYF1%2Fo%2FGNagc5YqODnr7a2aPcExtlZLoNFgjpOzcaoaXHoMbAebBzrZpTOF3bx9zp6Dn0Ulyy6IRbx6G9n9pmoVo0lsbyCX4FDK6Iv3AreNLuH%2FO%2FM0xFRTz445yVBhTTUZjzxnZDNAOOhb0wVLkUJbxmt7W29oQLtBcc2rHl6Phpr9v23edeTdUnK571i6JOZJaxwMA1XMA%2FSi%2FCvXoJovQmFpjM4monWuhv78rsAB%2FJBN%2BdSL9ZOcQizRWFg%2FDK5KlHIyV9Ytv3pmuvh7BMFDbzAdxXhKj6qR6GpDayTJFNuW6uEGj50Joa%2FolHwYmxleYbJzftQoi2bYZ5l3%2BWoL49GetT9Kbjkkwq8%2FMxAY6pgHeQPXTVirBzBIMuHBr0weAD%2FyRc0fLyBUWdfWoM4Wz3UnV8k1GpoNf0v3lZ5CjnZd9EFXPUPIJyU4GibcNbMrvVrFra6Sv4TyOmSFodjdhW8O1ORk2Z2l8F3UwOCLwWtB%2BwFlqv8szvwT3XPIaZSqFmm6yCIt8sqyTN%2FFs0XhsfpSGCC7ymPv3zceWNP7ngQpNsoU4ypoFO%2BaY%2F4nGI7kmG32IGM4n&X-Amz-Signature=9bd892f329b83b5a4b0cd7cd8983411a6eb06e9747c833cad6dd0e3aacc6dde8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4WNG3YD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICjBCFHKTtMRqHHBWbo9HhYxye4X%2FetDvvbdcS3ybK4zAiA8O9D707dOgaMY5LaikUls1VAPIUfC3w6JuXY8LW5V6Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMA9xSHRVMwBgQoHFTKtwDfF%2Fo4I7SmLnhKJlarMYWmqdk8EM8EKMdhYjtZy2z%2BHnA20eD34QEZdMtYIWW6Ao2oO5z2oxkgHPQxLQhqZyakWj61LmsGqEm91n9d2Cwx4Cqwtbu6hnU2vlpTvw4TMyRtc%2B%2BW8TvlacbGe1qP3%2F6fVDNz3FyZanq8AkWrwQv0SsRvb1PmLzjsPFmt9sFkeIxFW6yIpHuiBLuxkbeuGHnCogR8ch6SjWKyLd%2FSKbxn%2F1CMfbl%2F%2BbTIar3kCLLmFJf%2BJrAYDYsHAV8WWcFs0LW7vH%2BuYF1%2Fo%2FGNagc5YqODnr7a2aPcExtlZLoNFgjpOzcaoaXHoMbAebBzrZpTOF3bx9zp6Dn0Ulyy6IRbx6G9n9pmoVo0lsbyCX4FDK6Iv3AreNLuH%2FO%2FM0xFRTz445yVBhTTUZjzxnZDNAOOhb0wVLkUJbxmt7W29oQLtBcc2rHl6Phpr9v23edeTdUnK571i6JOZJaxwMA1XMA%2FSi%2FCvXoJovQmFpjM4monWuhv78rsAB%2FJBN%2BdSL9ZOcQizRWFg%2FDK5KlHIyV9Ytv3pmuvh7BMFDbzAdxXhKj6qR6GpDayTJFNuW6uEGj50Joa%2FolHwYmxleYbJzftQoi2bYZ5l3%2BWoL49GetT9Kbjkkwq8%2FMxAY6pgHeQPXTVirBzBIMuHBr0weAD%2FyRc0fLyBUWdfWoM4Wz3UnV8k1GpoNf0v3lZ5CjnZd9EFXPUPIJyU4GibcNbMrvVrFra6Sv4TyOmSFodjdhW8O1ORk2Z2l8F3UwOCLwWtB%2BwFlqv8szvwT3XPIaZSqFmm6yCIt8sqyTN%2FFs0XhsfpSGCC7ymPv3zceWNP7ngQpNsoU4ypoFO%2BaY%2F4nGI7kmG32IGM4n&X-Amz-Signature=cf7810f4e781ea43a5d47f4711455a77d6980b685eb525075e9816197b3dc59d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4WNG3YD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICjBCFHKTtMRqHHBWbo9HhYxye4X%2FetDvvbdcS3ybK4zAiA8O9D707dOgaMY5LaikUls1VAPIUfC3w6JuXY8LW5V6Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMA9xSHRVMwBgQoHFTKtwDfF%2Fo4I7SmLnhKJlarMYWmqdk8EM8EKMdhYjtZy2z%2BHnA20eD34QEZdMtYIWW6Ao2oO5z2oxkgHPQxLQhqZyakWj61LmsGqEm91n9d2Cwx4Cqwtbu6hnU2vlpTvw4TMyRtc%2B%2BW8TvlacbGe1qP3%2F6fVDNz3FyZanq8AkWrwQv0SsRvb1PmLzjsPFmt9sFkeIxFW6yIpHuiBLuxkbeuGHnCogR8ch6SjWKyLd%2FSKbxn%2F1CMfbl%2F%2BbTIar3kCLLmFJf%2BJrAYDYsHAV8WWcFs0LW7vH%2BuYF1%2Fo%2FGNagc5YqODnr7a2aPcExtlZLoNFgjpOzcaoaXHoMbAebBzrZpTOF3bx9zp6Dn0Ulyy6IRbx6G9n9pmoVo0lsbyCX4FDK6Iv3AreNLuH%2FO%2FM0xFRTz445yVBhTTUZjzxnZDNAOOhb0wVLkUJbxmt7W29oQLtBcc2rHl6Phpr9v23edeTdUnK571i6JOZJaxwMA1XMA%2FSi%2FCvXoJovQmFpjM4monWuhv78rsAB%2FJBN%2BdSL9ZOcQizRWFg%2FDK5KlHIyV9Ytv3pmuvh7BMFDbzAdxXhKj6qR6GpDayTJFNuW6uEGj50Joa%2FolHwYmxleYbJzftQoi2bYZ5l3%2BWoL49GetT9Kbjkkwq8%2FMxAY6pgHeQPXTVirBzBIMuHBr0weAD%2FyRc0fLyBUWdfWoM4Wz3UnV8k1GpoNf0v3lZ5CjnZd9EFXPUPIJyU4GibcNbMrvVrFra6Sv4TyOmSFodjdhW8O1ORk2Z2l8F3UwOCLwWtB%2BwFlqv8szvwT3XPIaZSqFmm6yCIt8sqyTN%2FFs0XhsfpSGCC7ymPv3zceWNP7ngQpNsoU4ypoFO%2BaY%2F4nGI7kmG32IGM4n&X-Amz-Signature=8927b47766a3087ecdb1df7d54c94c7de671bf84243687e7166dcc146f5f4474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4WNG3YD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICjBCFHKTtMRqHHBWbo9HhYxye4X%2FetDvvbdcS3ybK4zAiA8O9D707dOgaMY5LaikUls1VAPIUfC3w6JuXY8LW5V6Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMA9xSHRVMwBgQoHFTKtwDfF%2Fo4I7SmLnhKJlarMYWmqdk8EM8EKMdhYjtZy2z%2BHnA20eD34QEZdMtYIWW6Ao2oO5z2oxkgHPQxLQhqZyakWj61LmsGqEm91n9d2Cwx4Cqwtbu6hnU2vlpTvw4TMyRtc%2B%2BW8TvlacbGe1qP3%2F6fVDNz3FyZanq8AkWrwQv0SsRvb1PmLzjsPFmt9sFkeIxFW6yIpHuiBLuxkbeuGHnCogR8ch6SjWKyLd%2FSKbxn%2F1CMfbl%2F%2BbTIar3kCLLmFJf%2BJrAYDYsHAV8WWcFs0LW7vH%2BuYF1%2Fo%2FGNagc5YqODnr7a2aPcExtlZLoNFgjpOzcaoaXHoMbAebBzrZpTOF3bx9zp6Dn0Ulyy6IRbx6G9n9pmoVo0lsbyCX4FDK6Iv3AreNLuH%2FO%2FM0xFRTz445yVBhTTUZjzxnZDNAOOhb0wVLkUJbxmt7W29oQLtBcc2rHl6Phpr9v23edeTdUnK571i6JOZJaxwMA1XMA%2FSi%2FCvXoJovQmFpjM4monWuhv78rsAB%2FJBN%2BdSL9ZOcQizRWFg%2FDK5KlHIyV9Ytv3pmuvh7BMFDbzAdxXhKj6qR6GpDayTJFNuW6uEGj50Joa%2FolHwYmxleYbJzftQoi2bYZ5l3%2BWoL49GetT9Kbjkkwq8%2FMxAY6pgHeQPXTVirBzBIMuHBr0weAD%2FyRc0fLyBUWdfWoM4Wz3UnV8k1GpoNf0v3lZ5CjnZd9EFXPUPIJyU4GibcNbMrvVrFra6Sv4TyOmSFodjdhW8O1ORk2Z2l8F3UwOCLwWtB%2BwFlqv8szvwT3XPIaZSqFmm6yCIt8sqyTN%2FFs0XhsfpSGCC7ymPv3zceWNP7ngQpNsoU4ypoFO%2BaY%2F4nGI7kmG32IGM4n&X-Amz-Signature=a2411d23937aecc7dc8ae8251f75e26282a07731d232fee2748e3afec2095c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
