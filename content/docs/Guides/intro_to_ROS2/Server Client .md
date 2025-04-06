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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZP2TVUC%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDF917S7BkeUh1AbNbMvFsq3Mk%2FWODp%2Fi0M%2Br16%2Bd63gIhAL%2BHg7ucF3Xsmm4%2F0Au0PnPFutiBgyPykQP0XybFO%2FyTKv8DCE8QABoMNjM3NDIzMTgzODA1Igy002cE2IIEjDGwCSgq3AObfkW%2B%2B3K99eZ5Qq7sKPncA4u64lOqR04MPYTa9QzcMX3d3HdjfZn%2Bji7I7JCjJX3u0%2FFy7vmxJrz3JQ%2BOxMZoBUAJnH4mVPaTfRcCYpA0O%2BZSAnKZZ2rxgSkPFgmiER0Kz2KlAmq%2FbcVYvUGkO8mM4KKDdr0OK%2FhFgdUu97%2FNBALQg6B%2FPJhyMpuhuFxUQNKXRDEXLLVdF4gI90JKPpkOcdIY7ipB2wShInPcWGODxPjL6T58QQupjTtCUj1qkp6Ui6EOcNSYHsVd00N9SVtyp8nxUFBKdYV0W%2BZ5GYgz0P7lhhCQ6QBAJAUV6y%2B334VGWPACozf5Nhr4JY5g5o3%2FTMHldQeQhi3W3C0PW2XxWjCv0kxS5yl7RVwfbE3dVMMcUzqlKOBmahK65w8YeVTZGbQVtd65%2BNWPfTZrzg08Ox%2BCR0OadN5ZZIzmktBURJ3E%2BrY%2FegyxrZvCUuu2qQynZyPn8L2PZ%2F25ZSVOwvnxGuGhmLhtqusIMTiZkGQ0TCjfUKfF9DWz7uC1IFUA1%2Byz7DG45Qivuo8V3pduHMcpOZs5nKmdk6gIY9WQHg1XVbxlNsELjmRdOKW9m6wOV3S9AvOyE3nOsqSAao3m88%2BNXdRe0osLR5RgC8jFTjDd9Mu%2FBjqkASdmUA%2B05TVFZUvWLhOXa4fPqVqx4UlncRnOSkauO2s8NQS%2BN5jnNG%2Bmg81A84ycudyvA9Y79UUERiwxbmWbKTFKXjnL5gUDuYBcJfXMeIDebWhCIKioyvMij4XlYFojRrY7ungEOivd5gwpFyY4SGIxRkSwmjrqH1T7D2dea3ZREqNI%2Fo1XcqmkfOGFNNAHBPK8KtD%2BVbC8zdZ2t3B8mX9FgEGF&X-Amz-Signature=0c3f00fbf430b112d56db0903a2bc1bf67c25caea0513b1f15a72237180d4fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZP2TVUC%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDF917S7BkeUh1AbNbMvFsq3Mk%2FWODp%2Fi0M%2Br16%2Bd63gIhAL%2BHg7ucF3Xsmm4%2F0Au0PnPFutiBgyPykQP0XybFO%2FyTKv8DCE8QABoMNjM3NDIzMTgzODA1Igy002cE2IIEjDGwCSgq3AObfkW%2B%2B3K99eZ5Qq7sKPncA4u64lOqR04MPYTa9QzcMX3d3HdjfZn%2Bji7I7JCjJX3u0%2FFy7vmxJrz3JQ%2BOxMZoBUAJnH4mVPaTfRcCYpA0O%2BZSAnKZZ2rxgSkPFgmiER0Kz2KlAmq%2FbcVYvUGkO8mM4KKDdr0OK%2FhFgdUu97%2FNBALQg6B%2FPJhyMpuhuFxUQNKXRDEXLLVdF4gI90JKPpkOcdIY7ipB2wShInPcWGODxPjL6T58QQupjTtCUj1qkp6Ui6EOcNSYHsVd00N9SVtyp8nxUFBKdYV0W%2BZ5GYgz0P7lhhCQ6QBAJAUV6y%2B334VGWPACozf5Nhr4JY5g5o3%2FTMHldQeQhi3W3C0PW2XxWjCv0kxS5yl7RVwfbE3dVMMcUzqlKOBmahK65w8YeVTZGbQVtd65%2BNWPfTZrzg08Ox%2BCR0OadN5ZZIzmktBURJ3E%2BrY%2FegyxrZvCUuu2qQynZyPn8L2PZ%2F25ZSVOwvnxGuGhmLhtqusIMTiZkGQ0TCjfUKfF9DWz7uC1IFUA1%2Byz7DG45Qivuo8V3pduHMcpOZs5nKmdk6gIY9WQHg1XVbxlNsELjmRdOKW9m6wOV3S9AvOyE3nOsqSAao3m88%2BNXdRe0osLR5RgC8jFTjDd9Mu%2FBjqkASdmUA%2B05TVFZUvWLhOXa4fPqVqx4UlncRnOSkauO2s8NQS%2BN5jnNG%2Bmg81A84ycudyvA9Y79UUERiwxbmWbKTFKXjnL5gUDuYBcJfXMeIDebWhCIKioyvMij4XlYFojRrY7ungEOivd5gwpFyY4SGIxRkSwmjrqH1T7D2dea3ZREqNI%2Fo1XcqmkfOGFNNAHBPK8KtD%2BVbC8zdZ2t3B8mX9FgEGF&X-Amz-Signature=7e8f10c0e80bd59b8aee37428292d63fe7ea757534658aed0505138d35203cac&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZP2TVUC%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDF917S7BkeUh1AbNbMvFsq3Mk%2FWODp%2Fi0M%2Br16%2Bd63gIhAL%2BHg7ucF3Xsmm4%2F0Au0PnPFutiBgyPykQP0XybFO%2FyTKv8DCE8QABoMNjM3NDIzMTgzODA1Igy002cE2IIEjDGwCSgq3AObfkW%2B%2B3K99eZ5Qq7sKPncA4u64lOqR04MPYTa9QzcMX3d3HdjfZn%2Bji7I7JCjJX3u0%2FFy7vmxJrz3JQ%2BOxMZoBUAJnH4mVPaTfRcCYpA0O%2BZSAnKZZ2rxgSkPFgmiER0Kz2KlAmq%2FbcVYvUGkO8mM4KKDdr0OK%2FhFgdUu97%2FNBALQg6B%2FPJhyMpuhuFxUQNKXRDEXLLVdF4gI90JKPpkOcdIY7ipB2wShInPcWGODxPjL6T58QQupjTtCUj1qkp6Ui6EOcNSYHsVd00N9SVtyp8nxUFBKdYV0W%2BZ5GYgz0P7lhhCQ6QBAJAUV6y%2B334VGWPACozf5Nhr4JY5g5o3%2FTMHldQeQhi3W3C0PW2XxWjCv0kxS5yl7RVwfbE3dVMMcUzqlKOBmahK65w8YeVTZGbQVtd65%2BNWPfTZrzg08Ox%2BCR0OadN5ZZIzmktBURJ3E%2BrY%2FegyxrZvCUuu2qQynZyPn8L2PZ%2F25ZSVOwvnxGuGhmLhtqusIMTiZkGQ0TCjfUKfF9DWz7uC1IFUA1%2Byz7DG45Qivuo8V3pduHMcpOZs5nKmdk6gIY9WQHg1XVbxlNsELjmRdOKW9m6wOV3S9AvOyE3nOsqSAao3m88%2BNXdRe0osLR5RgC8jFTjDd9Mu%2FBjqkASdmUA%2B05TVFZUvWLhOXa4fPqVqx4UlncRnOSkauO2s8NQS%2BN5jnNG%2Bmg81A84ycudyvA9Y79UUERiwxbmWbKTFKXjnL5gUDuYBcJfXMeIDebWhCIKioyvMij4XlYFojRrY7ungEOivd5gwpFyY4SGIxRkSwmjrqH1T7D2dea3ZREqNI%2Fo1XcqmkfOGFNNAHBPK8KtD%2BVbC8zdZ2t3B8mX9FgEGF&X-Amz-Signature=506f37edfae3d668ce0143ba7e8a53d2dfa279bd4922f07a8408e67cc0b541d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZP2TVUC%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDF917S7BkeUh1AbNbMvFsq3Mk%2FWODp%2Fi0M%2Br16%2Bd63gIhAL%2BHg7ucF3Xsmm4%2F0Au0PnPFutiBgyPykQP0XybFO%2FyTKv8DCE8QABoMNjM3NDIzMTgzODA1Igy002cE2IIEjDGwCSgq3AObfkW%2B%2B3K99eZ5Qq7sKPncA4u64lOqR04MPYTa9QzcMX3d3HdjfZn%2Bji7I7JCjJX3u0%2FFy7vmxJrz3JQ%2BOxMZoBUAJnH4mVPaTfRcCYpA0O%2BZSAnKZZ2rxgSkPFgmiER0Kz2KlAmq%2FbcVYvUGkO8mM4KKDdr0OK%2FhFgdUu97%2FNBALQg6B%2FPJhyMpuhuFxUQNKXRDEXLLVdF4gI90JKPpkOcdIY7ipB2wShInPcWGODxPjL6T58QQupjTtCUj1qkp6Ui6EOcNSYHsVd00N9SVtyp8nxUFBKdYV0W%2BZ5GYgz0P7lhhCQ6QBAJAUV6y%2B334VGWPACozf5Nhr4JY5g5o3%2FTMHldQeQhi3W3C0PW2XxWjCv0kxS5yl7RVwfbE3dVMMcUzqlKOBmahK65w8YeVTZGbQVtd65%2BNWPfTZrzg08Ox%2BCR0OadN5ZZIzmktBURJ3E%2BrY%2FegyxrZvCUuu2qQynZyPn8L2PZ%2F25ZSVOwvnxGuGhmLhtqusIMTiZkGQ0TCjfUKfF9DWz7uC1IFUA1%2Byz7DG45Qivuo8V3pduHMcpOZs5nKmdk6gIY9WQHg1XVbxlNsELjmRdOKW9m6wOV3S9AvOyE3nOsqSAao3m88%2BNXdRe0osLR5RgC8jFTjDd9Mu%2FBjqkASdmUA%2B05TVFZUvWLhOXa4fPqVqx4UlncRnOSkauO2s8NQS%2BN5jnNG%2Bmg81A84ycudyvA9Y79UUERiwxbmWbKTFKXjnL5gUDuYBcJfXMeIDebWhCIKioyvMij4XlYFojRrY7ungEOivd5gwpFyY4SGIxRkSwmjrqH1T7D2dea3ZREqNI%2Fo1XcqmkfOGFNNAHBPK8KtD%2BVbC8zdZ2t3B8mX9FgEGF&X-Amz-Signature=8c61bfd0278c11d7b0e29def743386d0a2b17a43f3fccf3810fd27dc9a01789e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZP2TVUC%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDF917S7BkeUh1AbNbMvFsq3Mk%2FWODp%2Fi0M%2Br16%2Bd63gIhAL%2BHg7ucF3Xsmm4%2F0Au0PnPFutiBgyPykQP0XybFO%2FyTKv8DCE8QABoMNjM3NDIzMTgzODA1Igy002cE2IIEjDGwCSgq3AObfkW%2B%2B3K99eZ5Qq7sKPncA4u64lOqR04MPYTa9QzcMX3d3HdjfZn%2Bji7I7JCjJX3u0%2FFy7vmxJrz3JQ%2BOxMZoBUAJnH4mVPaTfRcCYpA0O%2BZSAnKZZ2rxgSkPFgmiER0Kz2KlAmq%2FbcVYvUGkO8mM4KKDdr0OK%2FhFgdUu97%2FNBALQg6B%2FPJhyMpuhuFxUQNKXRDEXLLVdF4gI90JKPpkOcdIY7ipB2wShInPcWGODxPjL6T58QQupjTtCUj1qkp6Ui6EOcNSYHsVd00N9SVtyp8nxUFBKdYV0W%2BZ5GYgz0P7lhhCQ6QBAJAUV6y%2B334VGWPACozf5Nhr4JY5g5o3%2FTMHldQeQhi3W3C0PW2XxWjCv0kxS5yl7RVwfbE3dVMMcUzqlKOBmahK65w8YeVTZGbQVtd65%2BNWPfTZrzg08Ox%2BCR0OadN5ZZIzmktBURJ3E%2BrY%2FegyxrZvCUuu2qQynZyPn8L2PZ%2F25ZSVOwvnxGuGhmLhtqusIMTiZkGQ0TCjfUKfF9DWz7uC1IFUA1%2Byz7DG45Qivuo8V3pduHMcpOZs5nKmdk6gIY9WQHg1XVbxlNsELjmRdOKW9m6wOV3S9AvOyE3nOsqSAao3m88%2BNXdRe0osLR5RgC8jFTjDd9Mu%2FBjqkASdmUA%2B05TVFZUvWLhOXa4fPqVqx4UlncRnOSkauO2s8NQS%2BN5jnNG%2Bmg81A84ycudyvA9Y79UUERiwxbmWbKTFKXjnL5gUDuYBcJfXMeIDebWhCIKioyvMij4XlYFojRrY7ungEOivd5gwpFyY4SGIxRkSwmjrqH1T7D2dea3ZREqNI%2Fo1XcqmkfOGFNNAHBPK8KtD%2BVbC8zdZ2t3B8mX9FgEGF&X-Amz-Signature=3af85d6dfd5b9960021debed6bf8801571900c8bea487e235621dcd8464ac4c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
