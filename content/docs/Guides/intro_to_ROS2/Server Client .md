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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AKWZIS%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIH0cJ4mCU%2Blh7xbjPaUBPRhVmGE8OCQKTubQ4ZYxEjHyAiAcuT9mzNGum0SfALMfiXPN0Qi5G%2FKOyZYD2fW11zClxyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9YO8WSeoOp%2BvWNZAKtwDpgtnG2Ap5Uzy9VmX%2BtZbJdqK%2FvSjlRjYbTJrvOkY0Ofc2em7dFFvSJOwJHFKFvm7OpjWz%2FIMxfYT%2FpFRgs9nlgQuRtkmRiHvyJpH%2FJcTAKE6QGHOvK0QV1NIVPeA4%2BH7z0Dm%2F3BrvAn9OhRmLq%2BcSnxtJ6jstOXkdySIxccgz%2F4vZ0rXUGC87wdz0%2FCdZtfPAFGpHbdVplMZDY7tAYgI39bKY2QB2Bm%2BaQjS7zoWFFStG8sOQmbggD0Ryof2tFyUKDgI%2F6w19auIuRNctHSWHIHPm9mDN2ErZkchXXP3LE%2BZl3HNH84HrXu3KsnIYVTISDd4oBfOL6uYB%2Bm9Kuv%2FJEn9QpiA4JjjRf43YFJwVL39cdyRe4DO4wX4r%2BSbEP2MUk9EFnW2f7MwR63uO1G45Lni%2FJguH4HrlFLFh9SP%2FmIk2h3QSfLP%2F00wdHKosVLjCRNoSFV4TflQ5uPEIlHB9OjE5U3WM2TKTAIz8UXovf8dIZPGla4%2BKiBMQ9PtOLj0DkbCKKN27RatFoT8n8flJnYmCsa9Kvje%2B9JRJrNlpTxPhIxnedNNr8WxLAPllCcgnwrLirzHYpkZoD3rYfBg9aRP%2B07IoPgrbxJ4zZ%2BVk0vTmKGLBG%2B0tnPdoLcw1KrivwY6pgGWnAxrlAKcuWxP8Spl4m8czmdO9QTDEybGeqYlFcFG3sOpl8DsZpRpxuLeQ%2F4zDvnoeRkH5aBy339B0%2F7PXT%2B5HYqypCln6cdFSF5JZe2XekLWhcGX0WHysy29EjK3za0FJxGX5x69Asqfai%2FkuDzfrAvN7LPFCEVHmEE2UGKL%2BNlUGmtghazySqHJ3Td3WDWTcEj2tJbtGm9f7RxwkHCFIDWnO%2FXS&X-Amz-Signature=4b6abac3de770058236d7d7ee08779043c77bbb8f286c3392632cfe66a9aab17&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AKWZIS%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIH0cJ4mCU%2Blh7xbjPaUBPRhVmGE8OCQKTubQ4ZYxEjHyAiAcuT9mzNGum0SfALMfiXPN0Qi5G%2FKOyZYD2fW11zClxyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9YO8WSeoOp%2BvWNZAKtwDpgtnG2Ap5Uzy9VmX%2BtZbJdqK%2FvSjlRjYbTJrvOkY0Ofc2em7dFFvSJOwJHFKFvm7OpjWz%2FIMxfYT%2FpFRgs9nlgQuRtkmRiHvyJpH%2FJcTAKE6QGHOvK0QV1NIVPeA4%2BH7z0Dm%2F3BrvAn9OhRmLq%2BcSnxtJ6jstOXkdySIxccgz%2F4vZ0rXUGC87wdz0%2FCdZtfPAFGpHbdVplMZDY7tAYgI39bKY2QB2Bm%2BaQjS7zoWFFStG8sOQmbggD0Ryof2tFyUKDgI%2F6w19auIuRNctHSWHIHPm9mDN2ErZkchXXP3LE%2BZl3HNH84HrXu3KsnIYVTISDd4oBfOL6uYB%2Bm9Kuv%2FJEn9QpiA4JjjRf43YFJwVL39cdyRe4DO4wX4r%2BSbEP2MUk9EFnW2f7MwR63uO1G45Lni%2FJguH4HrlFLFh9SP%2FmIk2h3QSfLP%2F00wdHKosVLjCRNoSFV4TflQ5uPEIlHB9OjE5U3WM2TKTAIz8UXovf8dIZPGla4%2BKiBMQ9PtOLj0DkbCKKN27RatFoT8n8flJnYmCsa9Kvje%2B9JRJrNlpTxPhIxnedNNr8WxLAPllCcgnwrLirzHYpkZoD3rYfBg9aRP%2B07IoPgrbxJ4zZ%2BVk0vTmKGLBG%2B0tnPdoLcw1KrivwY6pgGWnAxrlAKcuWxP8Spl4m8czmdO9QTDEybGeqYlFcFG3sOpl8DsZpRpxuLeQ%2F4zDvnoeRkH5aBy339B0%2F7PXT%2B5HYqypCln6cdFSF5JZe2XekLWhcGX0WHysy29EjK3za0FJxGX5x69Asqfai%2FkuDzfrAvN7LPFCEVHmEE2UGKL%2BNlUGmtghazySqHJ3Td3WDWTcEj2tJbtGm9f7RxwkHCFIDWnO%2FXS&X-Amz-Signature=f96bd1a12bd5eaa004f38da770a67184da1154643182ff27549720cb601f8660&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AKWZIS%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIH0cJ4mCU%2Blh7xbjPaUBPRhVmGE8OCQKTubQ4ZYxEjHyAiAcuT9mzNGum0SfALMfiXPN0Qi5G%2FKOyZYD2fW11zClxyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9YO8WSeoOp%2BvWNZAKtwDpgtnG2Ap5Uzy9VmX%2BtZbJdqK%2FvSjlRjYbTJrvOkY0Ofc2em7dFFvSJOwJHFKFvm7OpjWz%2FIMxfYT%2FpFRgs9nlgQuRtkmRiHvyJpH%2FJcTAKE6QGHOvK0QV1NIVPeA4%2BH7z0Dm%2F3BrvAn9OhRmLq%2BcSnxtJ6jstOXkdySIxccgz%2F4vZ0rXUGC87wdz0%2FCdZtfPAFGpHbdVplMZDY7tAYgI39bKY2QB2Bm%2BaQjS7zoWFFStG8sOQmbggD0Ryof2tFyUKDgI%2F6w19auIuRNctHSWHIHPm9mDN2ErZkchXXP3LE%2BZl3HNH84HrXu3KsnIYVTISDd4oBfOL6uYB%2Bm9Kuv%2FJEn9QpiA4JjjRf43YFJwVL39cdyRe4DO4wX4r%2BSbEP2MUk9EFnW2f7MwR63uO1G45Lni%2FJguH4HrlFLFh9SP%2FmIk2h3QSfLP%2F00wdHKosVLjCRNoSFV4TflQ5uPEIlHB9OjE5U3WM2TKTAIz8UXovf8dIZPGla4%2BKiBMQ9PtOLj0DkbCKKN27RatFoT8n8flJnYmCsa9Kvje%2B9JRJrNlpTxPhIxnedNNr8WxLAPllCcgnwrLirzHYpkZoD3rYfBg9aRP%2B07IoPgrbxJ4zZ%2BVk0vTmKGLBG%2B0tnPdoLcw1KrivwY6pgGWnAxrlAKcuWxP8Spl4m8czmdO9QTDEybGeqYlFcFG3sOpl8DsZpRpxuLeQ%2F4zDvnoeRkH5aBy339B0%2F7PXT%2B5HYqypCln6cdFSF5JZe2XekLWhcGX0WHysy29EjK3za0FJxGX5x69Asqfai%2FkuDzfrAvN7LPFCEVHmEE2UGKL%2BNlUGmtghazySqHJ3Td3WDWTcEj2tJbtGm9f7RxwkHCFIDWnO%2FXS&X-Amz-Signature=dadf2165d8c47674304a9409e45d48ddadf4bace23c34e41df1eb0fd431151af&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AKWZIS%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIH0cJ4mCU%2Blh7xbjPaUBPRhVmGE8OCQKTubQ4ZYxEjHyAiAcuT9mzNGum0SfALMfiXPN0Qi5G%2FKOyZYD2fW11zClxyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9YO8WSeoOp%2BvWNZAKtwDpgtnG2Ap5Uzy9VmX%2BtZbJdqK%2FvSjlRjYbTJrvOkY0Ofc2em7dFFvSJOwJHFKFvm7OpjWz%2FIMxfYT%2FpFRgs9nlgQuRtkmRiHvyJpH%2FJcTAKE6QGHOvK0QV1NIVPeA4%2BH7z0Dm%2F3BrvAn9OhRmLq%2BcSnxtJ6jstOXkdySIxccgz%2F4vZ0rXUGC87wdz0%2FCdZtfPAFGpHbdVplMZDY7tAYgI39bKY2QB2Bm%2BaQjS7zoWFFStG8sOQmbggD0Ryof2tFyUKDgI%2F6w19auIuRNctHSWHIHPm9mDN2ErZkchXXP3LE%2BZl3HNH84HrXu3KsnIYVTISDd4oBfOL6uYB%2Bm9Kuv%2FJEn9QpiA4JjjRf43YFJwVL39cdyRe4DO4wX4r%2BSbEP2MUk9EFnW2f7MwR63uO1G45Lni%2FJguH4HrlFLFh9SP%2FmIk2h3QSfLP%2F00wdHKosVLjCRNoSFV4TflQ5uPEIlHB9OjE5U3WM2TKTAIz8UXovf8dIZPGla4%2BKiBMQ9PtOLj0DkbCKKN27RatFoT8n8flJnYmCsa9Kvje%2B9JRJrNlpTxPhIxnedNNr8WxLAPllCcgnwrLirzHYpkZoD3rYfBg9aRP%2B07IoPgrbxJ4zZ%2BVk0vTmKGLBG%2B0tnPdoLcw1KrivwY6pgGWnAxrlAKcuWxP8Spl4m8czmdO9QTDEybGeqYlFcFG3sOpl8DsZpRpxuLeQ%2F4zDvnoeRkH5aBy339B0%2F7PXT%2B5HYqypCln6cdFSF5JZe2XekLWhcGX0WHysy29EjK3za0FJxGX5x69Asqfai%2FkuDzfrAvN7LPFCEVHmEE2UGKL%2BNlUGmtghazySqHJ3Td3WDWTcEj2tJbtGm9f7RxwkHCFIDWnO%2FXS&X-Amz-Signature=9e2cc1f2f460b81cd39c26816ea89df80bd5d28d667a0aeca6ffffaf7500a1e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AKWZIS%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIH0cJ4mCU%2Blh7xbjPaUBPRhVmGE8OCQKTubQ4ZYxEjHyAiAcuT9mzNGum0SfALMfiXPN0Qi5G%2FKOyZYD2fW11zClxyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9YO8WSeoOp%2BvWNZAKtwDpgtnG2Ap5Uzy9VmX%2BtZbJdqK%2FvSjlRjYbTJrvOkY0Ofc2em7dFFvSJOwJHFKFvm7OpjWz%2FIMxfYT%2FpFRgs9nlgQuRtkmRiHvyJpH%2FJcTAKE6QGHOvK0QV1NIVPeA4%2BH7z0Dm%2F3BrvAn9OhRmLq%2BcSnxtJ6jstOXkdySIxccgz%2F4vZ0rXUGC87wdz0%2FCdZtfPAFGpHbdVplMZDY7tAYgI39bKY2QB2Bm%2BaQjS7zoWFFStG8sOQmbggD0Ryof2tFyUKDgI%2F6w19auIuRNctHSWHIHPm9mDN2ErZkchXXP3LE%2BZl3HNH84HrXu3KsnIYVTISDd4oBfOL6uYB%2Bm9Kuv%2FJEn9QpiA4JjjRf43YFJwVL39cdyRe4DO4wX4r%2BSbEP2MUk9EFnW2f7MwR63uO1G45Lni%2FJguH4HrlFLFh9SP%2FmIk2h3QSfLP%2F00wdHKosVLjCRNoSFV4TflQ5uPEIlHB9OjE5U3WM2TKTAIz8UXovf8dIZPGla4%2BKiBMQ9PtOLj0DkbCKKN27RatFoT8n8flJnYmCsa9Kvje%2B9JRJrNlpTxPhIxnedNNr8WxLAPllCcgnwrLirzHYpkZoD3rYfBg9aRP%2B07IoPgrbxJ4zZ%2BVk0vTmKGLBG%2B0tnPdoLcw1KrivwY6pgGWnAxrlAKcuWxP8Spl4m8czmdO9QTDEybGeqYlFcFG3sOpl8DsZpRpxuLeQ%2F4zDvnoeRkH5aBy339B0%2F7PXT%2B5HYqypCln6cdFSF5JZe2XekLWhcGX0WHysy29EjK3za0FJxGX5x69Asqfai%2FkuDzfrAvN7LPFCEVHmEE2UGKL%2BNlUGmtghazySqHJ3Td3WDWTcEj2tJbtGm9f7RxwkHCFIDWnO%2FXS&X-Amz-Signature=03f273ec8930a6187bf5248c179b424f890aa5d73d5b75df834a390dac3ed516&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
