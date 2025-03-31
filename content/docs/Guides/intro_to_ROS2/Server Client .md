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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE2FNDLF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCwc8W1%2BBgJn%2FnXXKs2IKIBx1bxoQYUtUvQOCfJ9R%2FJpQIhAKz7UH2Ly30cNDIUob7DNnaDfcJ1vE7p3LV8dMFIi5QcKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh6wSYnbcP0fe%2B6pQq3ANfkMAAlUYFK9XRbI9FxM7l51M56CSx0UELhWRzbihtPohft%2BVt2K96oe4p%2Blngh135PEMFHMuWcVR%2BZaZXxelibD0yXPWy6o7NyIaAB6dKa735%2FDKAcLOVM5xat%2B9uP9EmxcvVRGe2FHmDgfwScoZgT3hwHUccOyF0rJ1sqEuD7DAubgXQGiFS6JkpuMsiEZvxpC%2F5fJWpXOe9aIr3%2BEoYlEgrvmdeIRmyEfe%2Fso2dvuWNhxup4S688QNnXg92ZcSTdy0SAC%2FRpILyqmsN%2FltIu3kj%2Bq6X3fcKDQWi%2FfNtQF7Ax4DKbiVOrATtimXhxhhruso9IkOu08bw1uAE4pSLAZl%2FBO46l%2BFah6Z6CVHwqcrugA2AXuGozUzp4KqFVd5wClWFomv%2BmHpwVYhFUDCpneNkdkO8ta%2B2xUekl%2FhvyvoktI4mnLTsri2%2BbHZKr4giwWKM%2BrA7dayqkuql8cEuatRjOf7iM59a7V1RQDCiEqQHhQi2%2Bxsnw2dvdHPDy8kQkR%2F%2FtUUk0a1vvUel9oufP2MaoXc4sPv20K86Y1FcDNl3TazbJaXdoOBbZqiTb1BmJee%2FQIPHFhEi%2BusAkXiuH6QjU%2B5dtajHFnt9Ib8H3pBFrETM6%2BKncmv%2F4TDNuKu%2FBjqkAYwWodRA7gEHxj%2BkUq7VO9kZnz8tDLiLni1rhY43TxeYm6FcjhhpthQg1we%2FenT2z8A1R2cnmiafWtL%2FDXQ0LOq0N36S04NAPS2v0S%2FmKY8caFxwhfybYHLj6oRXxrIP%2FGQzgZ9nZnHep9hoxG3SgE0V9RW6SeIqf390fklUFQYeEON4rxeLrnigXoYH8zFkSGqZIjJbpHxfjCJodolr80br8T6a&X-Amz-Signature=aed1fd617acc24b5ad8e4c3926e35baf30dd58fc4ae63e3b5d9ccb07e96bce69&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE2FNDLF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCwc8W1%2BBgJn%2FnXXKs2IKIBx1bxoQYUtUvQOCfJ9R%2FJpQIhAKz7UH2Ly30cNDIUob7DNnaDfcJ1vE7p3LV8dMFIi5QcKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh6wSYnbcP0fe%2B6pQq3ANfkMAAlUYFK9XRbI9FxM7l51M56CSx0UELhWRzbihtPohft%2BVt2K96oe4p%2Blngh135PEMFHMuWcVR%2BZaZXxelibD0yXPWy6o7NyIaAB6dKa735%2FDKAcLOVM5xat%2B9uP9EmxcvVRGe2FHmDgfwScoZgT3hwHUccOyF0rJ1sqEuD7DAubgXQGiFS6JkpuMsiEZvxpC%2F5fJWpXOe9aIr3%2BEoYlEgrvmdeIRmyEfe%2Fso2dvuWNhxup4S688QNnXg92ZcSTdy0SAC%2FRpILyqmsN%2FltIu3kj%2Bq6X3fcKDQWi%2FfNtQF7Ax4DKbiVOrATtimXhxhhruso9IkOu08bw1uAE4pSLAZl%2FBO46l%2BFah6Z6CVHwqcrugA2AXuGozUzp4KqFVd5wClWFomv%2BmHpwVYhFUDCpneNkdkO8ta%2B2xUekl%2FhvyvoktI4mnLTsri2%2BbHZKr4giwWKM%2BrA7dayqkuql8cEuatRjOf7iM59a7V1RQDCiEqQHhQi2%2Bxsnw2dvdHPDy8kQkR%2F%2FtUUk0a1vvUel9oufP2MaoXc4sPv20K86Y1FcDNl3TazbJaXdoOBbZqiTb1BmJee%2FQIPHFhEi%2BusAkXiuH6QjU%2B5dtajHFnt9Ib8H3pBFrETM6%2BKncmv%2F4TDNuKu%2FBjqkAYwWodRA7gEHxj%2BkUq7VO9kZnz8tDLiLni1rhY43TxeYm6FcjhhpthQg1we%2FenT2z8A1R2cnmiafWtL%2FDXQ0LOq0N36S04NAPS2v0S%2FmKY8caFxwhfybYHLj6oRXxrIP%2FGQzgZ9nZnHep9hoxG3SgE0V9RW6SeIqf390fklUFQYeEON4rxeLrnigXoYH8zFkSGqZIjJbpHxfjCJodolr80br8T6a&X-Amz-Signature=53018be9c60a1ea6760b9e125334b26f0525f2b3b61949d858fc3e5ef2e13e06&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE2FNDLF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCwc8W1%2BBgJn%2FnXXKs2IKIBx1bxoQYUtUvQOCfJ9R%2FJpQIhAKz7UH2Ly30cNDIUob7DNnaDfcJ1vE7p3LV8dMFIi5QcKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh6wSYnbcP0fe%2B6pQq3ANfkMAAlUYFK9XRbI9FxM7l51M56CSx0UELhWRzbihtPohft%2BVt2K96oe4p%2Blngh135PEMFHMuWcVR%2BZaZXxelibD0yXPWy6o7NyIaAB6dKa735%2FDKAcLOVM5xat%2B9uP9EmxcvVRGe2FHmDgfwScoZgT3hwHUccOyF0rJ1sqEuD7DAubgXQGiFS6JkpuMsiEZvxpC%2F5fJWpXOe9aIr3%2BEoYlEgrvmdeIRmyEfe%2Fso2dvuWNhxup4S688QNnXg92ZcSTdy0SAC%2FRpILyqmsN%2FltIu3kj%2Bq6X3fcKDQWi%2FfNtQF7Ax4DKbiVOrATtimXhxhhruso9IkOu08bw1uAE4pSLAZl%2FBO46l%2BFah6Z6CVHwqcrugA2AXuGozUzp4KqFVd5wClWFomv%2BmHpwVYhFUDCpneNkdkO8ta%2B2xUekl%2FhvyvoktI4mnLTsri2%2BbHZKr4giwWKM%2BrA7dayqkuql8cEuatRjOf7iM59a7V1RQDCiEqQHhQi2%2Bxsnw2dvdHPDy8kQkR%2F%2FtUUk0a1vvUel9oufP2MaoXc4sPv20K86Y1FcDNl3TazbJaXdoOBbZqiTb1BmJee%2FQIPHFhEi%2BusAkXiuH6QjU%2B5dtajHFnt9Ib8H3pBFrETM6%2BKncmv%2F4TDNuKu%2FBjqkAYwWodRA7gEHxj%2BkUq7VO9kZnz8tDLiLni1rhY43TxeYm6FcjhhpthQg1we%2FenT2z8A1R2cnmiafWtL%2FDXQ0LOq0N36S04NAPS2v0S%2FmKY8caFxwhfybYHLj6oRXxrIP%2FGQzgZ9nZnHep9hoxG3SgE0V9RW6SeIqf390fklUFQYeEON4rxeLrnigXoYH8zFkSGqZIjJbpHxfjCJodolr80br8T6a&X-Amz-Signature=363a72e8fe3bd72545c520c95bba08712c117acee2cb397f5003e0d96c7e60f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE2FNDLF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCwc8W1%2BBgJn%2FnXXKs2IKIBx1bxoQYUtUvQOCfJ9R%2FJpQIhAKz7UH2Ly30cNDIUob7DNnaDfcJ1vE7p3LV8dMFIi5QcKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh6wSYnbcP0fe%2B6pQq3ANfkMAAlUYFK9XRbI9FxM7l51M56CSx0UELhWRzbihtPohft%2BVt2K96oe4p%2Blngh135PEMFHMuWcVR%2BZaZXxelibD0yXPWy6o7NyIaAB6dKa735%2FDKAcLOVM5xat%2B9uP9EmxcvVRGe2FHmDgfwScoZgT3hwHUccOyF0rJ1sqEuD7DAubgXQGiFS6JkpuMsiEZvxpC%2F5fJWpXOe9aIr3%2BEoYlEgrvmdeIRmyEfe%2Fso2dvuWNhxup4S688QNnXg92ZcSTdy0SAC%2FRpILyqmsN%2FltIu3kj%2Bq6X3fcKDQWi%2FfNtQF7Ax4DKbiVOrATtimXhxhhruso9IkOu08bw1uAE4pSLAZl%2FBO46l%2BFah6Z6CVHwqcrugA2AXuGozUzp4KqFVd5wClWFomv%2BmHpwVYhFUDCpneNkdkO8ta%2B2xUekl%2FhvyvoktI4mnLTsri2%2BbHZKr4giwWKM%2BrA7dayqkuql8cEuatRjOf7iM59a7V1RQDCiEqQHhQi2%2Bxsnw2dvdHPDy8kQkR%2F%2FtUUk0a1vvUel9oufP2MaoXc4sPv20K86Y1FcDNl3TazbJaXdoOBbZqiTb1BmJee%2FQIPHFhEi%2BusAkXiuH6QjU%2B5dtajHFnt9Ib8H3pBFrETM6%2BKncmv%2F4TDNuKu%2FBjqkAYwWodRA7gEHxj%2BkUq7VO9kZnz8tDLiLni1rhY43TxeYm6FcjhhpthQg1we%2FenT2z8A1R2cnmiafWtL%2FDXQ0LOq0N36S04NAPS2v0S%2FmKY8caFxwhfybYHLj6oRXxrIP%2FGQzgZ9nZnHep9hoxG3SgE0V9RW6SeIqf390fklUFQYeEON4rxeLrnigXoYH8zFkSGqZIjJbpHxfjCJodolr80br8T6a&X-Amz-Signature=88eb5ef2e51c3044c90704cccae54d7ea97a691b95c857b7781ef7d5f6c4e01f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE2FNDLF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCwc8W1%2BBgJn%2FnXXKs2IKIBx1bxoQYUtUvQOCfJ9R%2FJpQIhAKz7UH2Ly30cNDIUob7DNnaDfcJ1vE7p3LV8dMFIi5QcKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh6wSYnbcP0fe%2B6pQq3ANfkMAAlUYFK9XRbI9FxM7l51M56CSx0UELhWRzbihtPohft%2BVt2K96oe4p%2Blngh135PEMFHMuWcVR%2BZaZXxelibD0yXPWy6o7NyIaAB6dKa735%2FDKAcLOVM5xat%2B9uP9EmxcvVRGe2FHmDgfwScoZgT3hwHUccOyF0rJ1sqEuD7DAubgXQGiFS6JkpuMsiEZvxpC%2F5fJWpXOe9aIr3%2BEoYlEgrvmdeIRmyEfe%2Fso2dvuWNhxup4S688QNnXg92ZcSTdy0SAC%2FRpILyqmsN%2FltIu3kj%2Bq6X3fcKDQWi%2FfNtQF7Ax4DKbiVOrATtimXhxhhruso9IkOu08bw1uAE4pSLAZl%2FBO46l%2BFah6Z6CVHwqcrugA2AXuGozUzp4KqFVd5wClWFomv%2BmHpwVYhFUDCpneNkdkO8ta%2B2xUekl%2FhvyvoktI4mnLTsri2%2BbHZKr4giwWKM%2BrA7dayqkuql8cEuatRjOf7iM59a7V1RQDCiEqQHhQi2%2Bxsnw2dvdHPDy8kQkR%2F%2FtUUk0a1vvUel9oufP2MaoXc4sPv20K86Y1FcDNl3TazbJaXdoOBbZqiTb1BmJee%2FQIPHFhEi%2BusAkXiuH6QjU%2B5dtajHFnt9Ib8H3pBFrETM6%2BKncmv%2F4TDNuKu%2FBjqkAYwWodRA7gEHxj%2BkUq7VO9kZnz8tDLiLni1rhY43TxeYm6FcjhhpthQg1we%2FenT2z8A1R2cnmiafWtL%2FDXQ0LOq0N36S04NAPS2v0S%2FmKY8caFxwhfybYHLj6oRXxrIP%2FGQzgZ9nZnHep9hoxG3SgE0V9RW6SeIqf390fklUFQYeEON4rxeLrnigXoYH8zFkSGqZIjJbpHxfjCJodolr80br8T6a&X-Amz-Signature=0fbe8c861e983c18c58f5edcca12684b3f886ca53fc183f92362a1abc1faaea9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
