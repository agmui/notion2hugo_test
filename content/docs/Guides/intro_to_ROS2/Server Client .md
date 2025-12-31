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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL37W2B7%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3viQGBqMZjX8VE7fJgbDyaPZdfpAbLN4jWf8QQlSTIwIgbd5Y3hx6hkf%2BeGyYKNxrJNQZ8jiKeUTIuNS%2FF6dPvBMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWKZguLCDT6QhynTSrcAxw%2FXRmXjhpmXVKZpp16hdOlbocUZ2zcSb7xUMncLV9Jy0XhPGEi%2B0iD3VS%2BKgqPRNrYax58Ox3KNGs1hHvKc04nshD2nqKQycttJg5T%2B6L5zzw%2FkVHjy5Va%2FWZC9ocxfEtChZEr4DVJuQQxYR0Bxt187I8L89%2FN8lVZ5AwV1WltdJrtzVaa8Ab1xihX06GBPb4cRtcHMLb%2B4o9Jige6j8HPxPAjNb5u2wIR3pFYGrODre7CK86fitK2ZLSTZRb%2F0HcYyFAJFldAOpKpk7oa9wkR%2F8MmARBuYBXZM6sjfyZHRAIro%2FrcZs63zO9m0DWRvs0qkDfRtrJ%2Bn0lZmaF28vzoIuq%2F5BTB1jkR75xPx1jumpxdVZHOiLvRT6JdiddaLopDwtkMUwfKsGds2mbEyOs7s1%2Ba9ZWuVcallivJx%2BEyppoxETCsrUFEL5nzU2BL4%2F66u3zOyA%2FbpzoLQ7SFn0pelBgXln2O0aIzkEYtOvKCGhEyQdydOiWFrIECgNBeZlUygM9VGUe%2FWkTCoTXDEDq8hqznCWunx60lEe3oMjIqUR7MXKxIQoV7CVZug16OB7m0W8dBGEo%2Fx3SJTY524B72xge6JuwN7Jw0su9CUXFKhOvaPQDnsFcYeSasMMTw0coGOqUBnmmPxoAryMr8HLFccNg9IFtQjyS3x9EHYcUDad4LqNFNC9zaWvBR6Pp4tQ8kWa8KKDS5%2BsIvH37ipdxZ3iCkdniV9%2BvLb7QGrmF%2FYW%2B0B9pf5D4t6HRYxeoeKYp6x%2BTYf3VztlKu5HMcHxKJYpcDCq4DklVFUFXCwYzYmEafybL40P%2BBxgOIxFxS%2BZKAP8FmigyT7LbJI0rXUHbuLN5eWE0TqiO5&X-Amz-Signature=0661156deaa8d88e2c1930d69ea45df55df45793cabb2d515a51e9ba4af8a2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL37W2B7%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3viQGBqMZjX8VE7fJgbDyaPZdfpAbLN4jWf8QQlSTIwIgbd5Y3hx6hkf%2BeGyYKNxrJNQZ8jiKeUTIuNS%2FF6dPvBMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWKZguLCDT6QhynTSrcAxw%2FXRmXjhpmXVKZpp16hdOlbocUZ2zcSb7xUMncLV9Jy0XhPGEi%2B0iD3VS%2BKgqPRNrYax58Ox3KNGs1hHvKc04nshD2nqKQycttJg5T%2B6L5zzw%2FkVHjy5Va%2FWZC9ocxfEtChZEr4DVJuQQxYR0Bxt187I8L89%2FN8lVZ5AwV1WltdJrtzVaa8Ab1xihX06GBPb4cRtcHMLb%2B4o9Jige6j8HPxPAjNb5u2wIR3pFYGrODre7CK86fitK2ZLSTZRb%2F0HcYyFAJFldAOpKpk7oa9wkR%2F8MmARBuYBXZM6sjfyZHRAIro%2FrcZs63zO9m0DWRvs0qkDfRtrJ%2Bn0lZmaF28vzoIuq%2F5BTB1jkR75xPx1jumpxdVZHOiLvRT6JdiddaLopDwtkMUwfKsGds2mbEyOs7s1%2Ba9ZWuVcallivJx%2BEyppoxETCsrUFEL5nzU2BL4%2F66u3zOyA%2FbpzoLQ7SFn0pelBgXln2O0aIzkEYtOvKCGhEyQdydOiWFrIECgNBeZlUygM9VGUe%2FWkTCoTXDEDq8hqznCWunx60lEe3oMjIqUR7MXKxIQoV7CVZug16OB7m0W8dBGEo%2Fx3SJTY524B72xge6JuwN7Jw0su9CUXFKhOvaPQDnsFcYeSasMMTw0coGOqUBnmmPxoAryMr8HLFccNg9IFtQjyS3x9EHYcUDad4LqNFNC9zaWvBR6Pp4tQ8kWa8KKDS5%2BsIvH37ipdxZ3iCkdniV9%2BvLb7QGrmF%2FYW%2B0B9pf5D4t6HRYxeoeKYp6x%2BTYf3VztlKu5HMcHxKJYpcDCq4DklVFUFXCwYzYmEafybL40P%2BBxgOIxFxS%2BZKAP8FmigyT7LbJI0rXUHbuLN5eWE0TqiO5&X-Amz-Signature=2dfccad7647825cd2052c84335386076279e80b8371e7f9607578df9eb83ce8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL37W2B7%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3viQGBqMZjX8VE7fJgbDyaPZdfpAbLN4jWf8QQlSTIwIgbd5Y3hx6hkf%2BeGyYKNxrJNQZ8jiKeUTIuNS%2FF6dPvBMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWKZguLCDT6QhynTSrcAxw%2FXRmXjhpmXVKZpp16hdOlbocUZ2zcSb7xUMncLV9Jy0XhPGEi%2B0iD3VS%2BKgqPRNrYax58Ox3KNGs1hHvKc04nshD2nqKQycttJg5T%2B6L5zzw%2FkVHjy5Va%2FWZC9ocxfEtChZEr4DVJuQQxYR0Bxt187I8L89%2FN8lVZ5AwV1WltdJrtzVaa8Ab1xihX06GBPb4cRtcHMLb%2B4o9Jige6j8HPxPAjNb5u2wIR3pFYGrODre7CK86fitK2ZLSTZRb%2F0HcYyFAJFldAOpKpk7oa9wkR%2F8MmARBuYBXZM6sjfyZHRAIro%2FrcZs63zO9m0DWRvs0qkDfRtrJ%2Bn0lZmaF28vzoIuq%2F5BTB1jkR75xPx1jumpxdVZHOiLvRT6JdiddaLopDwtkMUwfKsGds2mbEyOs7s1%2Ba9ZWuVcallivJx%2BEyppoxETCsrUFEL5nzU2BL4%2F66u3zOyA%2FbpzoLQ7SFn0pelBgXln2O0aIzkEYtOvKCGhEyQdydOiWFrIECgNBeZlUygM9VGUe%2FWkTCoTXDEDq8hqznCWunx60lEe3oMjIqUR7MXKxIQoV7CVZug16OB7m0W8dBGEo%2Fx3SJTY524B72xge6JuwN7Jw0su9CUXFKhOvaPQDnsFcYeSasMMTw0coGOqUBnmmPxoAryMr8HLFccNg9IFtQjyS3x9EHYcUDad4LqNFNC9zaWvBR6Pp4tQ8kWa8KKDS5%2BsIvH37ipdxZ3iCkdniV9%2BvLb7QGrmF%2FYW%2B0B9pf5D4t6HRYxeoeKYp6x%2BTYf3VztlKu5HMcHxKJYpcDCq4DklVFUFXCwYzYmEafybL40P%2BBxgOIxFxS%2BZKAP8FmigyT7LbJI0rXUHbuLN5eWE0TqiO5&X-Amz-Signature=6916cbe6caebccbfea389a05a5dbdb85c13d87931f037e849c9703f812825140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL37W2B7%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3viQGBqMZjX8VE7fJgbDyaPZdfpAbLN4jWf8QQlSTIwIgbd5Y3hx6hkf%2BeGyYKNxrJNQZ8jiKeUTIuNS%2FF6dPvBMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWKZguLCDT6QhynTSrcAxw%2FXRmXjhpmXVKZpp16hdOlbocUZ2zcSb7xUMncLV9Jy0XhPGEi%2B0iD3VS%2BKgqPRNrYax58Ox3KNGs1hHvKc04nshD2nqKQycttJg5T%2B6L5zzw%2FkVHjy5Va%2FWZC9ocxfEtChZEr4DVJuQQxYR0Bxt187I8L89%2FN8lVZ5AwV1WltdJrtzVaa8Ab1xihX06GBPb4cRtcHMLb%2B4o9Jige6j8HPxPAjNb5u2wIR3pFYGrODre7CK86fitK2ZLSTZRb%2F0HcYyFAJFldAOpKpk7oa9wkR%2F8MmARBuYBXZM6sjfyZHRAIro%2FrcZs63zO9m0DWRvs0qkDfRtrJ%2Bn0lZmaF28vzoIuq%2F5BTB1jkR75xPx1jumpxdVZHOiLvRT6JdiddaLopDwtkMUwfKsGds2mbEyOs7s1%2Ba9ZWuVcallivJx%2BEyppoxETCsrUFEL5nzU2BL4%2F66u3zOyA%2FbpzoLQ7SFn0pelBgXln2O0aIzkEYtOvKCGhEyQdydOiWFrIECgNBeZlUygM9VGUe%2FWkTCoTXDEDq8hqznCWunx60lEe3oMjIqUR7MXKxIQoV7CVZug16OB7m0W8dBGEo%2Fx3SJTY524B72xge6JuwN7Jw0su9CUXFKhOvaPQDnsFcYeSasMMTw0coGOqUBnmmPxoAryMr8HLFccNg9IFtQjyS3x9EHYcUDad4LqNFNC9zaWvBR6Pp4tQ8kWa8KKDS5%2BsIvH37ipdxZ3iCkdniV9%2BvLb7QGrmF%2FYW%2B0B9pf5D4t6HRYxeoeKYp6x%2BTYf3VztlKu5HMcHxKJYpcDCq4DklVFUFXCwYzYmEafybL40P%2BBxgOIxFxS%2BZKAP8FmigyT7LbJI0rXUHbuLN5eWE0TqiO5&X-Amz-Signature=81d5b25d855e040b513b5f3ad18450f931840583776e1720dd3c49ddd0083db2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL37W2B7%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3viQGBqMZjX8VE7fJgbDyaPZdfpAbLN4jWf8QQlSTIwIgbd5Y3hx6hkf%2BeGyYKNxrJNQZ8jiKeUTIuNS%2FF6dPvBMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWKZguLCDT6QhynTSrcAxw%2FXRmXjhpmXVKZpp16hdOlbocUZ2zcSb7xUMncLV9Jy0XhPGEi%2B0iD3VS%2BKgqPRNrYax58Ox3KNGs1hHvKc04nshD2nqKQycttJg5T%2B6L5zzw%2FkVHjy5Va%2FWZC9ocxfEtChZEr4DVJuQQxYR0Bxt187I8L89%2FN8lVZ5AwV1WltdJrtzVaa8Ab1xihX06GBPb4cRtcHMLb%2B4o9Jige6j8HPxPAjNb5u2wIR3pFYGrODre7CK86fitK2ZLSTZRb%2F0HcYyFAJFldAOpKpk7oa9wkR%2F8MmARBuYBXZM6sjfyZHRAIro%2FrcZs63zO9m0DWRvs0qkDfRtrJ%2Bn0lZmaF28vzoIuq%2F5BTB1jkR75xPx1jumpxdVZHOiLvRT6JdiddaLopDwtkMUwfKsGds2mbEyOs7s1%2Ba9ZWuVcallivJx%2BEyppoxETCsrUFEL5nzU2BL4%2F66u3zOyA%2FbpzoLQ7SFn0pelBgXln2O0aIzkEYtOvKCGhEyQdydOiWFrIECgNBeZlUygM9VGUe%2FWkTCoTXDEDq8hqznCWunx60lEe3oMjIqUR7MXKxIQoV7CVZug16OB7m0W8dBGEo%2Fx3SJTY524B72xge6JuwN7Jw0su9CUXFKhOvaPQDnsFcYeSasMMTw0coGOqUBnmmPxoAryMr8HLFccNg9IFtQjyS3x9EHYcUDad4LqNFNC9zaWvBR6Pp4tQ8kWa8KKDS5%2BsIvH37ipdxZ3iCkdniV9%2BvLb7QGrmF%2FYW%2B0B9pf5D4t6HRYxeoeKYp6x%2BTYf3VztlKu5HMcHxKJYpcDCq4DklVFUFXCwYzYmEafybL40P%2BBxgOIxFxS%2BZKAP8FmigyT7LbJI0rXUHbuLN5eWE0TqiO5&X-Amz-Signature=5b808edf835ff7c16b24f4a0e9fd4cfdedb441b0db771c88c1a89030d391a9b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
