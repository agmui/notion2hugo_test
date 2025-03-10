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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643N6C7XI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEchX%2Br19rijdsYBQtg9GVLpmUTl6iaQENFK70j0sQGCAiAIjehor4hii3%2FpcfRbK%2FuC8jaKt8edlE7HRbHq1Olw8CqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZOJDBqCC7J941KWKtwD2bCyBP9ZQRKS5%2FAsped6AallYq5qgxIyvlBj%2FDKdSom1CpdRVZm4GBz7UmydEUFki8aWKHAhjGVNU3rZNBfPqAZjAtCqGiE7sd6GbypfFeaPmdqGNInDDVMntf%2BFfSgMlwjZLsfHqqvxYNhLXbDHDrZCyEsAlrlYxO9fRb9qS2w%2FMaNwz0KTXENV%2F7CTMHyRbrLyJEMDSVuxcVUyf87LFEmrlsNX1v%2F9GB4WbbVlR5%2FaQq8rwk48y%2FIQUskXG1msy2qkYiHx%2F226W3mXDA9d2T%2FP0XCBbyaA8zyktwJn%2FwG%2BJAOTtcgqFEBA%2BzFDddTWkdnvvhrz9hWL8hHsYus62qJZwWYsC7%2FOmHH9ORVrSXiUAPXZ2HmuuxN9AfcO7cuGzitbEzxev2r0bOwQHVHzU0tjeAJUprbPCNy9e7ddXvb4cSF71vU%2F9ctDjdlSvXSlpkjZQWFM1fYSeziwUFHAttpzoY6S6EvD2cK8Dj7GFuw0DLeByGFbKjX0KPa7XRt2XrV5OW6vQ57dpGtjO3kVGEr4xfQ6sIcAi7OIV3MEKMjJkCwc1ll%2B9HHxluROCVb9JGld%2FOVLJyIqnJxv5NJkiuO%2B%2B3SMxuSp%2FCp6%2Fpbl6rP2ZO9irknj5Iv0I7Mw9vq4vgY6pgH6H9LNGFLYnhFUlYChe4ICegLyIGbHs214pFQgJKY%2F1D0fDxBRa%2F529qcVWshliFoNl7ZtIoNA00D%2BzrzQSglJxlRCGAz0EyvYZzXWaCyJAiq74moDFzfA4%2FQapkwy8%2BI9WsBZI6b0N4i0RwSgAB3kSUUso9YuJdzidECIwvueu1FGsd3AjBk5Sxw26FPC86NXf1ZIqZKeXqDFDXPq7tWKzSbkf4zt&X-Amz-Signature=7ed433e8e69feed244c6e21ff90312ad54c77ccc72d083f8b2d9a9435f8d60ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643N6C7XI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEchX%2Br19rijdsYBQtg9GVLpmUTl6iaQENFK70j0sQGCAiAIjehor4hii3%2FpcfRbK%2FuC8jaKt8edlE7HRbHq1Olw8CqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZOJDBqCC7J941KWKtwD2bCyBP9ZQRKS5%2FAsped6AallYq5qgxIyvlBj%2FDKdSom1CpdRVZm4GBz7UmydEUFki8aWKHAhjGVNU3rZNBfPqAZjAtCqGiE7sd6GbypfFeaPmdqGNInDDVMntf%2BFfSgMlwjZLsfHqqvxYNhLXbDHDrZCyEsAlrlYxO9fRb9qS2w%2FMaNwz0KTXENV%2F7CTMHyRbrLyJEMDSVuxcVUyf87LFEmrlsNX1v%2F9GB4WbbVlR5%2FaQq8rwk48y%2FIQUskXG1msy2qkYiHx%2F226W3mXDA9d2T%2FP0XCBbyaA8zyktwJn%2FwG%2BJAOTtcgqFEBA%2BzFDddTWkdnvvhrz9hWL8hHsYus62qJZwWYsC7%2FOmHH9ORVrSXiUAPXZ2HmuuxN9AfcO7cuGzitbEzxev2r0bOwQHVHzU0tjeAJUprbPCNy9e7ddXvb4cSF71vU%2F9ctDjdlSvXSlpkjZQWFM1fYSeziwUFHAttpzoY6S6EvD2cK8Dj7GFuw0DLeByGFbKjX0KPa7XRt2XrV5OW6vQ57dpGtjO3kVGEr4xfQ6sIcAi7OIV3MEKMjJkCwc1ll%2B9HHxluROCVb9JGld%2FOVLJyIqnJxv5NJkiuO%2B%2B3SMxuSp%2FCp6%2Fpbl6rP2ZO9irknj5Iv0I7Mw9vq4vgY6pgH6H9LNGFLYnhFUlYChe4ICegLyIGbHs214pFQgJKY%2F1D0fDxBRa%2F529qcVWshliFoNl7ZtIoNA00D%2BzrzQSglJxlRCGAz0EyvYZzXWaCyJAiq74moDFzfA4%2FQapkwy8%2BI9WsBZI6b0N4i0RwSgAB3kSUUso9YuJdzidECIwvueu1FGsd3AjBk5Sxw26FPC86NXf1ZIqZKeXqDFDXPq7tWKzSbkf4zt&X-Amz-Signature=853a3729f7db224cfdfcbd57d9838653d18787085a294958f3809fcbbb91a8e1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643N6C7XI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEchX%2Br19rijdsYBQtg9GVLpmUTl6iaQENFK70j0sQGCAiAIjehor4hii3%2FpcfRbK%2FuC8jaKt8edlE7HRbHq1Olw8CqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZOJDBqCC7J941KWKtwD2bCyBP9ZQRKS5%2FAsped6AallYq5qgxIyvlBj%2FDKdSom1CpdRVZm4GBz7UmydEUFki8aWKHAhjGVNU3rZNBfPqAZjAtCqGiE7sd6GbypfFeaPmdqGNInDDVMntf%2BFfSgMlwjZLsfHqqvxYNhLXbDHDrZCyEsAlrlYxO9fRb9qS2w%2FMaNwz0KTXENV%2F7CTMHyRbrLyJEMDSVuxcVUyf87LFEmrlsNX1v%2F9GB4WbbVlR5%2FaQq8rwk48y%2FIQUskXG1msy2qkYiHx%2F226W3mXDA9d2T%2FP0XCBbyaA8zyktwJn%2FwG%2BJAOTtcgqFEBA%2BzFDddTWkdnvvhrz9hWL8hHsYus62qJZwWYsC7%2FOmHH9ORVrSXiUAPXZ2HmuuxN9AfcO7cuGzitbEzxev2r0bOwQHVHzU0tjeAJUprbPCNy9e7ddXvb4cSF71vU%2F9ctDjdlSvXSlpkjZQWFM1fYSeziwUFHAttpzoY6S6EvD2cK8Dj7GFuw0DLeByGFbKjX0KPa7XRt2XrV5OW6vQ57dpGtjO3kVGEr4xfQ6sIcAi7OIV3MEKMjJkCwc1ll%2B9HHxluROCVb9JGld%2FOVLJyIqnJxv5NJkiuO%2B%2B3SMxuSp%2FCp6%2Fpbl6rP2ZO9irknj5Iv0I7Mw9vq4vgY6pgH6H9LNGFLYnhFUlYChe4ICegLyIGbHs214pFQgJKY%2F1D0fDxBRa%2F529qcVWshliFoNl7ZtIoNA00D%2BzrzQSglJxlRCGAz0EyvYZzXWaCyJAiq74moDFzfA4%2FQapkwy8%2BI9WsBZI6b0N4i0RwSgAB3kSUUso9YuJdzidECIwvueu1FGsd3AjBk5Sxw26FPC86NXf1ZIqZKeXqDFDXPq7tWKzSbkf4zt&X-Amz-Signature=c79772f184246e6f7d139ca203067914ef00a0994a1aba0527b87e2670daa3df&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643N6C7XI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEchX%2Br19rijdsYBQtg9GVLpmUTl6iaQENFK70j0sQGCAiAIjehor4hii3%2FpcfRbK%2FuC8jaKt8edlE7HRbHq1Olw8CqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZOJDBqCC7J941KWKtwD2bCyBP9ZQRKS5%2FAsped6AallYq5qgxIyvlBj%2FDKdSom1CpdRVZm4GBz7UmydEUFki8aWKHAhjGVNU3rZNBfPqAZjAtCqGiE7sd6GbypfFeaPmdqGNInDDVMntf%2BFfSgMlwjZLsfHqqvxYNhLXbDHDrZCyEsAlrlYxO9fRb9qS2w%2FMaNwz0KTXENV%2F7CTMHyRbrLyJEMDSVuxcVUyf87LFEmrlsNX1v%2F9GB4WbbVlR5%2FaQq8rwk48y%2FIQUskXG1msy2qkYiHx%2F226W3mXDA9d2T%2FP0XCBbyaA8zyktwJn%2FwG%2BJAOTtcgqFEBA%2BzFDddTWkdnvvhrz9hWL8hHsYus62qJZwWYsC7%2FOmHH9ORVrSXiUAPXZ2HmuuxN9AfcO7cuGzitbEzxev2r0bOwQHVHzU0tjeAJUprbPCNy9e7ddXvb4cSF71vU%2F9ctDjdlSvXSlpkjZQWFM1fYSeziwUFHAttpzoY6S6EvD2cK8Dj7GFuw0DLeByGFbKjX0KPa7XRt2XrV5OW6vQ57dpGtjO3kVGEr4xfQ6sIcAi7OIV3MEKMjJkCwc1ll%2B9HHxluROCVb9JGld%2FOVLJyIqnJxv5NJkiuO%2B%2B3SMxuSp%2FCp6%2Fpbl6rP2ZO9irknj5Iv0I7Mw9vq4vgY6pgH6H9LNGFLYnhFUlYChe4ICegLyIGbHs214pFQgJKY%2F1D0fDxBRa%2F529qcVWshliFoNl7ZtIoNA00D%2BzrzQSglJxlRCGAz0EyvYZzXWaCyJAiq74moDFzfA4%2FQapkwy8%2BI9WsBZI6b0N4i0RwSgAB3kSUUso9YuJdzidECIwvueu1FGsd3AjBk5Sxw26FPC86NXf1ZIqZKeXqDFDXPq7tWKzSbkf4zt&X-Amz-Signature=5e51a514451d72c026d78a1274f766e00a16ef9874abe66939175133cc41704c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643N6C7XI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEchX%2Br19rijdsYBQtg9GVLpmUTl6iaQENFK70j0sQGCAiAIjehor4hii3%2FpcfRbK%2FuC8jaKt8edlE7HRbHq1Olw8CqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZOJDBqCC7J941KWKtwD2bCyBP9ZQRKS5%2FAsped6AallYq5qgxIyvlBj%2FDKdSom1CpdRVZm4GBz7UmydEUFki8aWKHAhjGVNU3rZNBfPqAZjAtCqGiE7sd6GbypfFeaPmdqGNInDDVMntf%2BFfSgMlwjZLsfHqqvxYNhLXbDHDrZCyEsAlrlYxO9fRb9qS2w%2FMaNwz0KTXENV%2F7CTMHyRbrLyJEMDSVuxcVUyf87LFEmrlsNX1v%2F9GB4WbbVlR5%2FaQq8rwk48y%2FIQUskXG1msy2qkYiHx%2F226W3mXDA9d2T%2FP0XCBbyaA8zyktwJn%2FwG%2BJAOTtcgqFEBA%2BzFDddTWkdnvvhrz9hWL8hHsYus62qJZwWYsC7%2FOmHH9ORVrSXiUAPXZ2HmuuxN9AfcO7cuGzitbEzxev2r0bOwQHVHzU0tjeAJUprbPCNy9e7ddXvb4cSF71vU%2F9ctDjdlSvXSlpkjZQWFM1fYSeziwUFHAttpzoY6S6EvD2cK8Dj7GFuw0DLeByGFbKjX0KPa7XRt2XrV5OW6vQ57dpGtjO3kVGEr4xfQ6sIcAi7OIV3MEKMjJkCwc1ll%2B9HHxluROCVb9JGld%2FOVLJyIqnJxv5NJkiuO%2B%2B3SMxuSp%2FCp6%2Fpbl6rP2ZO9irknj5Iv0I7Mw9vq4vgY6pgH6H9LNGFLYnhFUlYChe4ICegLyIGbHs214pFQgJKY%2F1D0fDxBRa%2F529qcVWshliFoNl7ZtIoNA00D%2BzrzQSglJxlRCGAz0EyvYZzXWaCyJAiq74moDFzfA4%2FQapkwy8%2BI9WsBZI6b0N4i0RwSgAB3kSUUso9YuJdzidECIwvueu1FGsd3AjBk5Sxw26FPC86NXf1ZIqZKeXqDFDXPq7tWKzSbkf4zt&X-Amz-Signature=7fe0a8c068d4cd9633f27a5d0f1712d63532e4abbede582704eb693e2e804c2a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
