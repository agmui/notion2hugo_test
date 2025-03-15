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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S44OCVKC%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsMD2i7%2BLCfqsJLCEi5Mt6mP5Hca5WzefpdJYRwCb1OAiBzKcv63YBsENJwW3C3%2FcI2EG2%2FTpW3%2BY79RXI9RvysiSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWo5gvvwbfIbYSU0WKtwDSoRCljK3xSoVbmK1yIHrNJikGhlshKvWCBwoXI2bjnmChQB0dExMa45V49KCajfzYEX3GSf9L6dUyshHJXt%2FjJuSHhfBnf2iEcZCP3957cqHwGc%2F2j%2F9eMctcN1JJxAJnLXeRpGN7k%2FtToqcwHlF79YvpDyqgGIgSTPMZ5kkHnmeZ7hCIYrzW95ZWyKD2BlCgTkxm1PfD3%2FSBz75kZQs3OoxJJBdcIie8oXnUkZAvaLAqFQCSjqPAhfkLr4tXrWelDrwOYhCMEaXlzmWBqwjmYWc31d5RGEcTJlRTaxOf3P7sjZyeXF%2FvOnLUpEl5hAqR1y9DYPGEGlNK%2BN5S3e%2Fpblig8X%2Bm8Qp3FOU9ckJdki6WnzZ4aUX6GvGpvmFEjQgxHLWBpUphApeZvUK4n12tqnxcylMQ3%2BgT3Tl4MTUvkWvzUPYI3XY5d%2FFE5QPaC1hb6esoWAwFxO4daYFgHhzroKRAldvaeDdsDdohq56UjO%2FH2F6HJJ52sytRoloLpUXhPPxuL%2Bh921095s5ABPpFL%2FtOf3nWYO4PsqIEo%2Fdc8r7RnFVoTIQesXmliZx0IbwASu%2B%2F5Aim0eTSRkRTK49SJGDDy9NuJFzN86qFn9vsntRe%2FO1O%2B%2Fo%2FyJQBZ0wxKvTvgY6pgE8A8MLkXVucIq%2BY9bvyXKzHMzRv9keiH4ZFQMyzc5qkscYeA1nyGXJO4QyuSVUn5rarvxQN7O2Dmb%2FhEURtGmiZ4zn6QVN2s7mqKeSmMRFIlwF6pCEQwaZ9%2FC9yoCgGk9dxGIKCIhCFaV%2F5REnADx%2B7QeYNhmDecKVNjFZuLLR3XQ%2F9JxvJENjwO%2Bi3qNNzPAjn5kEyAbRfuLjBO5rquEk6e26S5Jb&X-Amz-Signature=522d28f0d5c2658935aa0c70959ca065d763b319ae8711cafdf828abf91635a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S44OCVKC%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsMD2i7%2BLCfqsJLCEi5Mt6mP5Hca5WzefpdJYRwCb1OAiBzKcv63YBsENJwW3C3%2FcI2EG2%2FTpW3%2BY79RXI9RvysiSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWo5gvvwbfIbYSU0WKtwDSoRCljK3xSoVbmK1yIHrNJikGhlshKvWCBwoXI2bjnmChQB0dExMa45V49KCajfzYEX3GSf9L6dUyshHJXt%2FjJuSHhfBnf2iEcZCP3957cqHwGc%2F2j%2F9eMctcN1JJxAJnLXeRpGN7k%2FtToqcwHlF79YvpDyqgGIgSTPMZ5kkHnmeZ7hCIYrzW95ZWyKD2BlCgTkxm1PfD3%2FSBz75kZQs3OoxJJBdcIie8oXnUkZAvaLAqFQCSjqPAhfkLr4tXrWelDrwOYhCMEaXlzmWBqwjmYWc31d5RGEcTJlRTaxOf3P7sjZyeXF%2FvOnLUpEl5hAqR1y9DYPGEGlNK%2BN5S3e%2Fpblig8X%2Bm8Qp3FOU9ckJdki6WnzZ4aUX6GvGpvmFEjQgxHLWBpUphApeZvUK4n12tqnxcylMQ3%2BgT3Tl4MTUvkWvzUPYI3XY5d%2FFE5QPaC1hb6esoWAwFxO4daYFgHhzroKRAldvaeDdsDdohq56UjO%2FH2F6HJJ52sytRoloLpUXhPPxuL%2Bh921095s5ABPpFL%2FtOf3nWYO4PsqIEo%2Fdc8r7RnFVoTIQesXmliZx0IbwASu%2B%2F5Aim0eTSRkRTK49SJGDDy9NuJFzN86qFn9vsntRe%2FO1O%2B%2Fo%2FyJQBZ0wxKvTvgY6pgE8A8MLkXVucIq%2BY9bvyXKzHMzRv9keiH4ZFQMyzc5qkscYeA1nyGXJO4QyuSVUn5rarvxQN7O2Dmb%2FhEURtGmiZ4zn6QVN2s7mqKeSmMRFIlwF6pCEQwaZ9%2FC9yoCgGk9dxGIKCIhCFaV%2F5REnADx%2B7QeYNhmDecKVNjFZuLLR3XQ%2F9JxvJENjwO%2Bi3qNNzPAjn5kEyAbRfuLjBO5rquEk6e26S5Jb&X-Amz-Signature=df922c01127d0300e769fab1bb464b5865feaf9d6f26ebddc6b63969385593a7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S44OCVKC%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsMD2i7%2BLCfqsJLCEi5Mt6mP5Hca5WzefpdJYRwCb1OAiBzKcv63YBsENJwW3C3%2FcI2EG2%2FTpW3%2BY79RXI9RvysiSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWo5gvvwbfIbYSU0WKtwDSoRCljK3xSoVbmK1yIHrNJikGhlshKvWCBwoXI2bjnmChQB0dExMa45V49KCajfzYEX3GSf9L6dUyshHJXt%2FjJuSHhfBnf2iEcZCP3957cqHwGc%2F2j%2F9eMctcN1JJxAJnLXeRpGN7k%2FtToqcwHlF79YvpDyqgGIgSTPMZ5kkHnmeZ7hCIYrzW95ZWyKD2BlCgTkxm1PfD3%2FSBz75kZQs3OoxJJBdcIie8oXnUkZAvaLAqFQCSjqPAhfkLr4tXrWelDrwOYhCMEaXlzmWBqwjmYWc31d5RGEcTJlRTaxOf3P7sjZyeXF%2FvOnLUpEl5hAqR1y9DYPGEGlNK%2BN5S3e%2Fpblig8X%2Bm8Qp3FOU9ckJdki6WnzZ4aUX6GvGpvmFEjQgxHLWBpUphApeZvUK4n12tqnxcylMQ3%2BgT3Tl4MTUvkWvzUPYI3XY5d%2FFE5QPaC1hb6esoWAwFxO4daYFgHhzroKRAldvaeDdsDdohq56UjO%2FH2F6HJJ52sytRoloLpUXhPPxuL%2Bh921095s5ABPpFL%2FtOf3nWYO4PsqIEo%2Fdc8r7RnFVoTIQesXmliZx0IbwASu%2B%2F5Aim0eTSRkRTK49SJGDDy9NuJFzN86qFn9vsntRe%2FO1O%2B%2Fo%2FyJQBZ0wxKvTvgY6pgE8A8MLkXVucIq%2BY9bvyXKzHMzRv9keiH4ZFQMyzc5qkscYeA1nyGXJO4QyuSVUn5rarvxQN7O2Dmb%2FhEURtGmiZ4zn6QVN2s7mqKeSmMRFIlwF6pCEQwaZ9%2FC9yoCgGk9dxGIKCIhCFaV%2F5REnADx%2B7QeYNhmDecKVNjFZuLLR3XQ%2F9JxvJENjwO%2Bi3qNNzPAjn5kEyAbRfuLjBO5rquEk6e26S5Jb&X-Amz-Signature=8d34f9853f22d1a016199c2efd6a96e133826e84f73b385d1d8afd7b9243bb7c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S44OCVKC%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsMD2i7%2BLCfqsJLCEi5Mt6mP5Hca5WzefpdJYRwCb1OAiBzKcv63YBsENJwW3C3%2FcI2EG2%2FTpW3%2BY79RXI9RvysiSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWo5gvvwbfIbYSU0WKtwDSoRCljK3xSoVbmK1yIHrNJikGhlshKvWCBwoXI2bjnmChQB0dExMa45V49KCajfzYEX3GSf9L6dUyshHJXt%2FjJuSHhfBnf2iEcZCP3957cqHwGc%2F2j%2F9eMctcN1JJxAJnLXeRpGN7k%2FtToqcwHlF79YvpDyqgGIgSTPMZ5kkHnmeZ7hCIYrzW95ZWyKD2BlCgTkxm1PfD3%2FSBz75kZQs3OoxJJBdcIie8oXnUkZAvaLAqFQCSjqPAhfkLr4tXrWelDrwOYhCMEaXlzmWBqwjmYWc31d5RGEcTJlRTaxOf3P7sjZyeXF%2FvOnLUpEl5hAqR1y9DYPGEGlNK%2BN5S3e%2Fpblig8X%2Bm8Qp3FOU9ckJdki6WnzZ4aUX6GvGpvmFEjQgxHLWBpUphApeZvUK4n12tqnxcylMQ3%2BgT3Tl4MTUvkWvzUPYI3XY5d%2FFE5QPaC1hb6esoWAwFxO4daYFgHhzroKRAldvaeDdsDdohq56UjO%2FH2F6HJJ52sytRoloLpUXhPPxuL%2Bh921095s5ABPpFL%2FtOf3nWYO4PsqIEo%2Fdc8r7RnFVoTIQesXmliZx0IbwASu%2B%2F5Aim0eTSRkRTK49SJGDDy9NuJFzN86qFn9vsntRe%2FO1O%2B%2Fo%2FyJQBZ0wxKvTvgY6pgE8A8MLkXVucIq%2BY9bvyXKzHMzRv9keiH4ZFQMyzc5qkscYeA1nyGXJO4QyuSVUn5rarvxQN7O2Dmb%2FhEURtGmiZ4zn6QVN2s7mqKeSmMRFIlwF6pCEQwaZ9%2FC9yoCgGk9dxGIKCIhCFaV%2F5REnADx%2B7QeYNhmDecKVNjFZuLLR3XQ%2F9JxvJENjwO%2Bi3qNNzPAjn5kEyAbRfuLjBO5rquEk6e26S5Jb&X-Amz-Signature=56a6f9f5c801ece08c1cb3658d1f02cd8e18c7cfa1fb2c77acc2b8762fab5833&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S44OCVKC%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsMD2i7%2BLCfqsJLCEi5Mt6mP5Hca5WzefpdJYRwCb1OAiBzKcv63YBsENJwW3C3%2FcI2EG2%2FTpW3%2BY79RXI9RvysiSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWo5gvvwbfIbYSU0WKtwDSoRCljK3xSoVbmK1yIHrNJikGhlshKvWCBwoXI2bjnmChQB0dExMa45V49KCajfzYEX3GSf9L6dUyshHJXt%2FjJuSHhfBnf2iEcZCP3957cqHwGc%2F2j%2F9eMctcN1JJxAJnLXeRpGN7k%2FtToqcwHlF79YvpDyqgGIgSTPMZ5kkHnmeZ7hCIYrzW95ZWyKD2BlCgTkxm1PfD3%2FSBz75kZQs3OoxJJBdcIie8oXnUkZAvaLAqFQCSjqPAhfkLr4tXrWelDrwOYhCMEaXlzmWBqwjmYWc31d5RGEcTJlRTaxOf3P7sjZyeXF%2FvOnLUpEl5hAqR1y9DYPGEGlNK%2BN5S3e%2Fpblig8X%2Bm8Qp3FOU9ckJdki6WnzZ4aUX6GvGpvmFEjQgxHLWBpUphApeZvUK4n12tqnxcylMQ3%2BgT3Tl4MTUvkWvzUPYI3XY5d%2FFE5QPaC1hb6esoWAwFxO4daYFgHhzroKRAldvaeDdsDdohq56UjO%2FH2F6HJJ52sytRoloLpUXhPPxuL%2Bh921095s5ABPpFL%2FtOf3nWYO4PsqIEo%2Fdc8r7RnFVoTIQesXmliZx0IbwASu%2B%2F5Aim0eTSRkRTK49SJGDDy9NuJFzN86qFn9vsntRe%2FO1O%2B%2Fo%2FyJQBZ0wxKvTvgY6pgE8A8MLkXVucIq%2BY9bvyXKzHMzRv9keiH4ZFQMyzc5qkscYeA1nyGXJO4QyuSVUn5rarvxQN7O2Dmb%2FhEURtGmiZ4zn6QVN2s7mqKeSmMRFIlwF6pCEQwaZ9%2FC9yoCgGk9dxGIKCIhCFaV%2F5REnADx%2B7QeYNhmDecKVNjFZuLLR3XQ%2F9JxvJENjwO%2Bi3qNNzPAjn5kEyAbRfuLjBO5rquEk6e26S5Jb&X-Amz-Signature=766cfd5933d551b0f64ed0ed0874efd9025ae44b604e38946d7b96cba11b895b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
