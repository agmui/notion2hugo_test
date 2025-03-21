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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDJOYUT2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCkaeVT8NhiCCRv1K4%2B21BJp8UddgbVtTKSI7MXsdNxNwIgBScswxJsQQ%2Fq%2FenSODy6Of2dgdnbtMGK7wqa4p%2F5Z28qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGe24W5K%2FJMoulq1lSrcA0Mdlqh4SMXW9aNRWTXFSiIFcI%2F37vDtcDDy1mWzg7vygjWaFXMF6CZZPpJGrfdVUfGg1RsHDsoLyhY3A5dFK4nHJwkDFGkiKPFORX%2B87VNCLmkGJYkhIW%2F%2BtYG1fuNCx7hzmwnwF%2BuqBc0AKXt%2BiWR0uztroioOfZgtpj7QEd%2BLr%2B%2FRPMFicXyt7Jlc2KvFGhkSxIJAj9pZIVi46XHiQvNSp9oC425%2FXCjyWjRHIITsSLZC0zwH%2BSB93XvafTZ8iDvVbi4PC2p610LVeIq5OHkoIVxHwQB5ibPz50wfRSQOZ7uNIAQujMKxgIi92JleJCnYX2vtqhmaesgYDdcU8siUu4EXNoimadY5rFs2J3ng1Y1DHPAjPirmTNmTdMguZp8OwRWqItEfuRzH1kgebhKAinxU4goWGlFZZ5bwYBqZ0TTdp4mv8TU3KrDp%2ByNqio%2FNWrxDuQIcCis5skgH7cNCg3Bz5g3idMg%2FJ5iCqhBcCu0mhczs7l8jynw8P%2Bu8PVKUZyG3riaJi7cELLCrb%2FPA4lBiSqQFABxUoMzs3xXoYrus9OmYGlg5t%2FSbCSveEqQ2QSMuFN%2FWwEIJ4Xj7uuvrVshHFuHqYBUzFZy1iZNylQbWf0k7k6Qvlv6kMJGb9r4GOqUBC25X4g8PDLED8H91N2B8sy1E9OBKM3EnoajR0hbpMLN%2F0aWtfqUJRodXjI46t35rI8lhfVHYkyWmP5gLBoek3bmmqgdbfONR970mzgqeBtdN625bkHWKOQpPmHBOPyEGAfeAVIvxhL9%2FTtZUMUOkTA3ygZvoIhjy%2BcgIxgkmDAZ3o%2F2aSW%2Fou%2F3K354oQGOcPpBoT0LiF0jZtxNJmHlwp3cwz8Ld&X-Amz-Signature=b0fa3c7c4357a9c37dd89bab8465341184c4a6d95534602cd9924145dc926cd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDJOYUT2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCkaeVT8NhiCCRv1K4%2B21BJp8UddgbVtTKSI7MXsdNxNwIgBScswxJsQQ%2Fq%2FenSODy6Of2dgdnbtMGK7wqa4p%2F5Z28qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGe24W5K%2FJMoulq1lSrcA0Mdlqh4SMXW9aNRWTXFSiIFcI%2F37vDtcDDy1mWzg7vygjWaFXMF6CZZPpJGrfdVUfGg1RsHDsoLyhY3A5dFK4nHJwkDFGkiKPFORX%2B87VNCLmkGJYkhIW%2F%2BtYG1fuNCx7hzmwnwF%2BuqBc0AKXt%2BiWR0uztroioOfZgtpj7QEd%2BLr%2B%2FRPMFicXyt7Jlc2KvFGhkSxIJAj9pZIVi46XHiQvNSp9oC425%2FXCjyWjRHIITsSLZC0zwH%2BSB93XvafTZ8iDvVbi4PC2p610LVeIq5OHkoIVxHwQB5ibPz50wfRSQOZ7uNIAQujMKxgIi92JleJCnYX2vtqhmaesgYDdcU8siUu4EXNoimadY5rFs2J3ng1Y1DHPAjPirmTNmTdMguZp8OwRWqItEfuRzH1kgebhKAinxU4goWGlFZZ5bwYBqZ0TTdp4mv8TU3KrDp%2ByNqio%2FNWrxDuQIcCis5skgH7cNCg3Bz5g3idMg%2FJ5iCqhBcCu0mhczs7l8jynw8P%2Bu8PVKUZyG3riaJi7cELLCrb%2FPA4lBiSqQFABxUoMzs3xXoYrus9OmYGlg5t%2FSbCSveEqQ2QSMuFN%2FWwEIJ4Xj7uuvrVshHFuHqYBUzFZy1iZNylQbWf0k7k6Qvlv6kMJGb9r4GOqUBC25X4g8PDLED8H91N2B8sy1E9OBKM3EnoajR0hbpMLN%2F0aWtfqUJRodXjI46t35rI8lhfVHYkyWmP5gLBoek3bmmqgdbfONR970mzgqeBtdN625bkHWKOQpPmHBOPyEGAfeAVIvxhL9%2FTtZUMUOkTA3ygZvoIhjy%2BcgIxgkmDAZ3o%2F2aSW%2Fou%2F3K354oQGOcPpBoT0LiF0jZtxNJmHlwp3cwz8Ld&X-Amz-Signature=60112745ce9a89481d21b31df33389c1435e6db6d6b300dbb1a19bbaa2617531&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDJOYUT2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCkaeVT8NhiCCRv1K4%2B21BJp8UddgbVtTKSI7MXsdNxNwIgBScswxJsQQ%2Fq%2FenSODy6Of2dgdnbtMGK7wqa4p%2F5Z28qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGe24W5K%2FJMoulq1lSrcA0Mdlqh4SMXW9aNRWTXFSiIFcI%2F37vDtcDDy1mWzg7vygjWaFXMF6CZZPpJGrfdVUfGg1RsHDsoLyhY3A5dFK4nHJwkDFGkiKPFORX%2B87VNCLmkGJYkhIW%2F%2BtYG1fuNCx7hzmwnwF%2BuqBc0AKXt%2BiWR0uztroioOfZgtpj7QEd%2BLr%2B%2FRPMFicXyt7Jlc2KvFGhkSxIJAj9pZIVi46XHiQvNSp9oC425%2FXCjyWjRHIITsSLZC0zwH%2BSB93XvafTZ8iDvVbi4PC2p610LVeIq5OHkoIVxHwQB5ibPz50wfRSQOZ7uNIAQujMKxgIi92JleJCnYX2vtqhmaesgYDdcU8siUu4EXNoimadY5rFs2J3ng1Y1DHPAjPirmTNmTdMguZp8OwRWqItEfuRzH1kgebhKAinxU4goWGlFZZ5bwYBqZ0TTdp4mv8TU3KrDp%2ByNqio%2FNWrxDuQIcCis5skgH7cNCg3Bz5g3idMg%2FJ5iCqhBcCu0mhczs7l8jynw8P%2Bu8PVKUZyG3riaJi7cELLCrb%2FPA4lBiSqQFABxUoMzs3xXoYrus9OmYGlg5t%2FSbCSveEqQ2QSMuFN%2FWwEIJ4Xj7uuvrVshHFuHqYBUzFZy1iZNylQbWf0k7k6Qvlv6kMJGb9r4GOqUBC25X4g8PDLED8H91N2B8sy1E9OBKM3EnoajR0hbpMLN%2F0aWtfqUJRodXjI46t35rI8lhfVHYkyWmP5gLBoek3bmmqgdbfONR970mzgqeBtdN625bkHWKOQpPmHBOPyEGAfeAVIvxhL9%2FTtZUMUOkTA3ygZvoIhjy%2BcgIxgkmDAZ3o%2F2aSW%2Fou%2F3K354oQGOcPpBoT0LiF0jZtxNJmHlwp3cwz8Ld&X-Amz-Signature=c3d6749e32c57627d7191ec47029bde6fde61a55a327ee6d3291e465b71c8b6a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDJOYUT2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCkaeVT8NhiCCRv1K4%2B21BJp8UddgbVtTKSI7MXsdNxNwIgBScswxJsQQ%2Fq%2FenSODy6Of2dgdnbtMGK7wqa4p%2F5Z28qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGe24W5K%2FJMoulq1lSrcA0Mdlqh4SMXW9aNRWTXFSiIFcI%2F37vDtcDDy1mWzg7vygjWaFXMF6CZZPpJGrfdVUfGg1RsHDsoLyhY3A5dFK4nHJwkDFGkiKPFORX%2B87VNCLmkGJYkhIW%2F%2BtYG1fuNCx7hzmwnwF%2BuqBc0AKXt%2BiWR0uztroioOfZgtpj7QEd%2BLr%2B%2FRPMFicXyt7Jlc2KvFGhkSxIJAj9pZIVi46XHiQvNSp9oC425%2FXCjyWjRHIITsSLZC0zwH%2BSB93XvafTZ8iDvVbi4PC2p610LVeIq5OHkoIVxHwQB5ibPz50wfRSQOZ7uNIAQujMKxgIi92JleJCnYX2vtqhmaesgYDdcU8siUu4EXNoimadY5rFs2J3ng1Y1DHPAjPirmTNmTdMguZp8OwRWqItEfuRzH1kgebhKAinxU4goWGlFZZ5bwYBqZ0TTdp4mv8TU3KrDp%2ByNqio%2FNWrxDuQIcCis5skgH7cNCg3Bz5g3idMg%2FJ5iCqhBcCu0mhczs7l8jynw8P%2Bu8PVKUZyG3riaJi7cELLCrb%2FPA4lBiSqQFABxUoMzs3xXoYrus9OmYGlg5t%2FSbCSveEqQ2QSMuFN%2FWwEIJ4Xj7uuvrVshHFuHqYBUzFZy1iZNylQbWf0k7k6Qvlv6kMJGb9r4GOqUBC25X4g8PDLED8H91N2B8sy1E9OBKM3EnoajR0hbpMLN%2F0aWtfqUJRodXjI46t35rI8lhfVHYkyWmP5gLBoek3bmmqgdbfONR970mzgqeBtdN625bkHWKOQpPmHBOPyEGAfeAVIvxhL9%2FTtZUMUOkTA3ygZvoIhjy%2BcgIxgkmDAZ3o%2F2aSW%2Fou%2F3K354oQGOcPpBoT0LiF0jZtxNJmHlwp3cwz8Ld&X-Amz-Signature=d25707cfdd7d3d3e0ca6f81dd5582eb05336580fe9ff24cdb32b88b108b8bb38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDJOYUT2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCkaeVT8NhiCCRv1K4%2B21BJp8UddgbVtTKSI7MXsdNxNwIgBScswxJsQQ%2Fq%2FenSODy6Of2dgdnbtMGK7wqa4p%2F5Z28qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGe24W5K%2FJMoulq1lSrcA0Mdlqh4SMXW9aNRWTXFSiIFcI%2F37vDtcDDy1mWzg7vygjWaFXMF6CZZPpJGrfdVUfGg1RsHDsoLyhY3A5dFK4nHJwkDFGkiKPFORX%2B87VNCLmkGJYkhIW%2F%2BtYG1fuNCx7hzmwnwF%2BuqBc0AKXt%2BiWR0uztroioOfZgtpj7QEd%2BLr%2B%2FRPMFicXyt7Jlc2KvFGhkSxIJAj9pZIVi46XHiQvNSp9oC425%2FXCjyWjRHIITsSLZC0zwH%2BSB93XvafTZ8iDvVbi4PC2p610LVeIq5OHkoIVxHwQB5ibPz50wfRSQOZ7uNIAQujMKxgIi92JleJCnYX2vtqhmaesgYDdcU8siUu4EXNoimadY5rFs2J3ng1Y1DHPAjPirmTNmTdMguZp8OwRWqItEfuRzH1kgebhKAinxU4goWGlFZZ5bwYBqZ0TTdp4mv8TU3KrDp%2ByNqio%2FNWrxDuQIcCis5skgH7cNCg3Bz5g3idMg%2FJ5iCqhBcCu0mhczs7l8jynw8P%2Bu8PVKUZyG3riaJi7cELLCrb%2FPA4lBiSqQFABxUoMzs3xXoYrus9OmYGlg5t%2FSbCSveEqQ2QSMuFN%2FWwEIJ4Xj7uuvrVshHFuHqYBUzFZy1iZNylQbWf0k7k6Qvlv6kMJGb9r4GOqUBC25X4g8PDLED8H91N2B8sy1E9OBKM3EnoajR0hbpMLN%2F0aWtfqUJRodXjI46t35rI8lhfVHYkyWmP5gLBoek3bmmqgdbfONR970mzgqeBtdN625bkHWKOQpPmHBOPyEGAfeAVIvxhL9%2FTtZUMUOkTA3ygZvoIhjy%2BcgIxgkmDAZ3o%2F2aSW%2Fou%2F3K354oQGOcPpBoT0LiF0jZtxNJmHlwp3cwz8Ld&X-Amz-Signature=c7597c802d8a98038005c89454b3ca45a3c6ba5f9006240f6668d8334d1d1a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
