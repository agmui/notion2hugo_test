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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDU5ELM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCQFjzZtDSog3gd9sMq1bXTImmpajq636ruVJQvsl0%2BaAIhAJWEuNzp%2Fu%2BD14i4nZ2bOfACl3ea%2Fh1PQM%2F%2FWhvJ4zs7Kv8DCHwQABoMNjM3NDIzMTgzODA1Igyx6L9aDoYVwiTpNZIq3AObyuuPqgHRcd5b%2B4KP6oQFjU6eeWj%2FJC9gl3CTmYaLlB6Ohr6MTryELRCCP%2FRdBV%2Fb9XuVVQyWnF%2BJYBGFv8ufzNpY%2BlAD7HEVMZuid%2FdFSuF2JM8iDcnhCWMVh6EPcLGRJHzy3oPVVLZ5V3fC7fkOn34N%2BR2wrZOYr3CZdeapmOQNcu5yT32ABhWyg%2FGlBQABqGzm6kC%2BNkuPdEVNsSoFn%2BabNPsm%2FYiI%2FWPaRj2d4Pgx8XzSh2A57Q0Rl61%2BE%2F6DajFISDsHdbNb70n5UQ1WeKjCEI4ttjL3no13j2NEH9WLtrzfrnlzStmAbZzIjrvdjhGfLAldVi4j2B%2B9jDHvUGGfyy2MxCbhrpPduYwXy3gBhUNRaNY1TWfCMPMCw6kl%2BprKzJqAHhThMWwPBVjezxfeOMqiqLPlTeaMyIuHA1KrmKpQevaAqPQDe6o42YaUpkn4ynIVIVhg%2F0BdzACFoTWl%2FQ0u8eRFIWAGRqyDYc%2Fjh1N9Sy%2BnHF0DnhNSQBWpev34jNk%2Bna8178AYCXPnQCtehfT5jSGKZGzUiit8rtLAcm6aIrYTl34VWy0QBG8bG7qlH5Gt%2Fn%2F5%2BLlElw8ycTiCiAwW74HPA4IRitdMvXSV4dq6Wp9v5J4U4TCPxs7EBjqkAWHOTk0xPsHrfmvDwGm8lXQw0eOYKrcf0V%2B5Uli8i%2F8M99MHJrD5nashcI9hd56RWLT8ntr9NPMRPLIapa1Qv1neBulQutH%2BWk5dEjGA%2FSyIJhlQa%2FNmZz%2Bj4HL%2FuKToMsQPgmbx97cBPUfBGe43FIpWktVU%2FLIFggc74v7MxndH0Um45XYjCfvsby3eWFoXQL4XjQAUNCPqOcs5I5KRD8ZXGjUx&X-Amz-Signature=da520dea8eb5205fbb7965b9e3452ec7020dd9dc072b4894d7b6195bcca0a5bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDU5ELM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCQFjzZtDSog3gd9sMq1bXTImmpajq636ruVJQvsl0%2BaAIhAJWEuNzp%2Fu%2BD14i4nZ2bOfACl3ea%2Fh1PQM%2F%2FWhvJ4zs7Kv8DCHwQABoMNjM3NDIzMTgzODA1Igyx6L9aDoYVwiTpNZIq3AObyuuPqgHRcd5b%2B4KP6oQFjU6eeWj%2FJC9gl3CTmYaLlB6Ohr6MTryELRCCP%2FRdBV%2Fb9XuVVQyWnF%2BJYBGFv8ufzNpY%2BlAD7HEVMZuid%2FdFSuF2JM8iDcnhCWMVh6EPcLGRJHzy3oPVVLZ5V3fC7fkOn34N%2BR2wrZOYr3CZdeapmOQNcu5yT32ABhWyg%2FGlBQABqGzm6kC%2BNkuPdEVNsSoFn%2BabNPsm%2FYiI%2FWPaRj2d4Pgx8XzSh2A57Q0Rl61%2BE%2F6DajFISDsHdbNb70n5UQ1WeKjCEI4ttjL3no13j2NEH9WLtrzfrnlzStmAbZzIjrvdjhGfLAldVi4j2B%2B9jDHvUGGfyy2MxCbhrpPduYwXy3gBhUNRaNY1TWfCMPMCw6kl%2BprKzJqAHhThMWwPBVjezxfeOMqiqLPlTeaMyIuHA1KrmKpQevaAqPQDe6o42YaUpkn4ynIVIVhg%2F0BdzACFoTWl%2FQ0u8eRFIWAGRqyDYc%2Fjh1N9Sy%2BnHF0DnhNSQBWpev34jNk%2Bna8178AYCXPnQCtehfT5jSGKZGzUiit8rtLAcm6aIrYTl34VWy0QBG8bG7qlH5Gt%2Fn%2F5%2BLlElw8ycTiCiAwW74HPA4IRitdMvXSV4dq6Wp9v5J4U4TCPxs7EBjqkAWHOTk0xPsHrfmvDwGm8lXQw0eOYKrcf0V%2B5Uli8i%2F8M99MHJrD5nashcI9hd56RWLT8ntr9NPMRPLIapa1Qv1neBulQutH%2BWk5dEjGA%2FSyIJhlQa%2FNmZz%2Bj4HL%2FuKToMsQPgmbx97cBPUfBGe43FIpWktVU%2FLIFggc74v7MxndH0Um45XYjCfvsby3eWFoXQL4XjQAUNCPqOcs5I5KRD8ZXGjUx&X-Amz-Signature=4f9a0c672d80f4621f9174385b69b53535f691957817f8d9bb01c2194eace666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDU5ELM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCQFjzZtDSog3gd9sMq1bXTImmpajq636ruVJQvsl0%2BaAIhAJWEuNzp%2Fu%2BD14i4nZ2bOfACl3ea%2Fh1PQM%2F%2FWhvJ4zs7Kv8DCHwQABoMNjM3NDIzMTgzODA1Igyx6L9aDoYVwiTpNZIq3AObyuuPqgHRcd5b%2B4KP6oQFjU6eeWj%2FJC9gl3CTmYaLlB6Ohr6MTryELRCCP%2FRdBV%2Fb9XuVVQyWnF%2BJYBGFv8ufzNpY%2BlAD7HEVMZuid%2FdFSuF2JM8iDcnhCWMVh6EPcLGRJHzy3oPVVLZ5V3fC7fkOn34N%2BR2wrZOYr3CZdeapmOQNcu5yT32ABhWyg%2FGlBQABqGzm6kC%2BNkuPdEVNsSoFn%2BabNPsm%2FYiI%2FWPaRj2d4Pgx8XzSh2A57Q0Rl61%2BE%2F6DajFISDsHdbNb70n5UQ1WeKjCEI4ttjL3no13j2NEH9WLtrzfrnlzStmAbZzIjrvdjhGfLAldVi4j2B%2B9jDHvUGGfyy2MxCbhrpPduYwXy3gBhUNRaNY1TWfCMPMCw6kl%2BprKzJqAHhThMWwPBVjezxfeOMqiqLPlTeaMyIuHA1KrmKpQevaAqPQDe6o42YaUpkn4ynIVIVhg%2F0BdzACFoTWl%2FQ0u8eRFIWAGRqyDYc%2Fjh1N9Sy%2BnHF0DnhNSQBWpev34jNk%2Bna8178AYCXPnQCtehfT5jSGKZGzUiit8rtLAcm6aIrYTl34VWy0QBG8bG7qlH5Gt%2Fn%2F5%2BLlElw8ycTiCiAwW74HPA4IRitdMvXSV4dq6Wp9v5J4U4TCPxs7EBjqkAWHOTk0xPsHrfmvDwGm8lXQw0eOYKrcf0V%2B5Uli8i%2F8M99MHJrD5nashcI9hd56RWLT8ntr9NPMRPLIapa1Qv1neBulQutH%2BWk5dEjGA%2FSyIJhlQa%2FNmZz%2Bj4HL%2FuKToMsQPgmbx97cBPUfBGe43FIpWktVU%2FLIFggc74v7MxndH0Um45XYjCfvsby3eWFoXQL4XjQAUNCPqOcs5I5KRD8ZXGjUx&X-Amz-Signature=159aab54ba62d9309d5ab61f83e70deacab30d7ba007f09b55bac77abc14529d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDU5ELM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCQFjzZtDSog3gd9sMq1bXTImmpajq636ruVJQvsl0%2BaAIhAJWEuNzp%2Fu%2BD14i4nZ2bOfACl3ea%2Fh1PQM%2F%2FWhvJ4zs7Kv8DCHwQABoMNjM3NDIzMTgzODA1Igyx6L9aDoYVwiTpNZIq3AObyuuPqgHRcd5b%2B4KP6oQFjU6eeWj%2FJC9gl3CTmYaLlB6Ohr6MTryELRCCP%2FRdBV%2Fb9XuVVQyWnF%2BJYBGFv8ufzNpY%2BlAD7HEVMZuid%2FdFSuF2JM8iDcnhCWMVh6EPcLGRJHzy3oPVVLZ5V3fC7fkOn34N%2BR2wrZOYr3CZdeapmOQNcu5yT32ABhWyg%2FGlBQABqGzm6kC%2BNkuPdEVNsSoFn%2BabNPsm%2FYiI%2FWPaRj2d4Pgx8XzSh2A57Q0Rl61%2BE%2F6DajFISDsHdbNb70n5UQ1WeKjCEI4ttjL3no13j2NEH9WLtrzfrnlzStmAbZzIjrvdjhGfLAldVi4j2B%2B9jDHvUGGfyy2MxCbhrpPduYwXy3gBhUNRaNY1TWfCMPMCw6kl%2BprKzJqAHhThMWwPBVjezxfeOMqiqLPlTeaMyIuHA1KrmKpQevaAqPQDe6o42YaUpkn4ynIVIVhg%2F0BdzACFoTWl%2FQ0u8eRFIWAGRqyDYc%2Fjh1N9Sy%2BnHF0DnhNSQBWpev34jNk%2Bna8178AYCXPnQCtehfT5jSGKZGzUiit8rtLAcm6aIrYTl34VWy0QBG8bG7qlH5Gt%2Fn%2F5%2BLlElw8ycTiCiAwW74HPA4IRitdMvXSV4dq6Wp9v5J4U4TCPxs7EBjqkAWHOTk0xPsHrfmvDwGm8lXQw0eOYKrcf0V%2B5Uli8i%2F8M99MHJrD5nashcI9hd56RWLT8ntr9NPMRPLIapa1Qv1neBulQutH%2BWk5dEjGA%2FSyIJhlQa%2FNmZz%2Bj4HL%2FuKToMsQPgmbx97cBPUfBGe43FIpWktVU%2FLIFggc74v7MxndH0Um45XYjCfvsby3eWFoXQL4XjQAUNCPqOcs5I5KRD8ZXGjUx&X-Amz-Signature=2417f7ffd08fd8e6c494d60d2dc053c28c1eb1f3a8946f907a89806fc6d65703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDU5ELM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCQFjzZtDSog3gd9sMq1bXTImmpajq636ruVJQvsl0%2BaAIhAJWEuNzp%2Fu%2BD14i4nZ2bOfACl3ea%2Fh1PQM%2F%2FWhvJ4zs7Kv8DCHwQABoMNjM3NDIzMTgzODA1Igyx6L9aDoYVwiTpNZIq3AObyuuPqgHRcd5b%2B4KP6oQFjU6eeWj%2FJC9gl3CTmYaLlB6Ohr6MTryELRCCP%2FRdBV%2Fb9XuVVQyWnF%2BJYBGFv8ufzNpY%2BlAD7HEVMZuid%2FdFSuF2JM8iDcnhCWMVh6EPcLGRJHzy3oPVVLZ5V3fC7fkOn34N%2BR2wrZOYr3CZdeapmOQNcu5yT32ABhWyg%2FGlBQABqGzm6kC%2BNkuPdEVNsSoFn%2BabNPsm%2FYiI%2FWPaRj2d4Pgx8XzSh2A57Q0Rl61%2BE%2F6DajFISDsHdbNb70n5UQ1WeKjCEI4ttjL3no13j2NEH9WLtrzfrnlzStmAbZzIjrvdjhGfLAldVi4j2B%2B9jDHvUGGfyy2MxCbhrpPduYwXy3gBhUNRaNY1TWfCMPMCw6kl%2BprKzJqAHhThMWwPBVjezxfeOMqiqLPlTeaMyIuHA1KrmKpQevaAqPQDe6o42YaUpkn4ynIVIVhg%2F0BdzACFoTWl%2FQ0u8eRFIWAGRqyDYc%2Fjh1N9Sy%2BnHF0DnhNSQBWpev34jNk%2Bna8178AYCXPnQCtehfT5jSGKZGzUiit8rtLAcm6aIrYTl34VWy0QBG8bG7qlH5Gt%2Fn%2F5%2BLlElw8ycTiCiAwW74HPA4IRitdMvXSV4dq6Wp9v5J4U4TCPxs7EBjqkAWHOTk0xPsHrfmvDwGm8lXQw0eOYKrcf0V%2B5Uli8i%2F8M99MHJrD5nashcI9hd56RWLT8ntr9NPMRPLIapa1Qv1neBulQutH%2BWk5dEjGA%2FSyIJhlQa%2FNmZz%2Bj4HL%2FuKToMsQPgmbx97cBPUfBGe43FIpWktVU%2FLIFggc74v7MxndH0Um45XYjCfvsby3eWFoXQL4XjQAUNCPqOcs5I5KRD8ZXGjUx&X-Amz-Signature=67c549b56d6c59fbd944298df2c4e12965fa4d1c987b4a9a7b19b3ffb3fae2b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
