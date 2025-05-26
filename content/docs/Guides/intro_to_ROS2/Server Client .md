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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPQGZJ3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC3d7WP1ZCC9pxfz29Gfp2Z8R41OxYBOx3IZXAAgGuR7wIhAKUhn7TfEV32LVIgdFnZcHLhI%2BaM7u06ymvs9q%2BoaWDNKv8DCEUQABoMNjM3NDIzMTgzODA1IgwnvwQ9Bs%2FkAgNFtj0q3APR9cws1a%2B1OckOaEILkMFdQDhNkxnixct%2FijkIysu2wxcdQFbAWz%2BS3%2FaShhLnnj5yt9tpf3gKyp8TJ4A21XZSX8KlghJZFpN0WMdNE7xONeFU%2FHmFAGa0tCnAqLtR6zQRpCZyRCkcO1k5pDOBNei3e%2Bzj1UAEtf2jxb%2BzTgZx2DhUHcxygBL%2B6akzEMizdrVhqcWu66jLn8%2BYNJ6BHHiSYmRPzeASHgN6nZvIt8Evw4xKhpcHmh%2FrPO0w1qZGsmXIJwxUjxZswTjAaOivBoQeF5lEPorTJj0E8Jzc7%2Fiyca%2BXrDz8wapbn%2FfbGNZG%2BcCHilodpgIJfPUpABNidEGgsHrhQnOK8MC0UEUcYWCyzoLtomL5Azj259FGHT0iNg0Gu0Hm%2FcSr1s1Zwxm7wuDYn4mCzwFDPjnoKZgn6tuFDJAFw23wQqdLFjurud6IIZU4fvcoPqF%2Fz0J1jgkRMOgnU3lRE56o35l6mTVL3AGx4VkSCCrscJlyJlz3RYeJUgHltbmbWKnf0Xxc14GO%2BYi7Az0KfJhLbrfUOF3BqBcVsyC3oj%2BnOUb1tWXH2yXZ5%2B1ENsHnjAjaILEKLqcAHPLuUOfLmeVEg%2BHVWID8V8PHxJolrLvjijjsI2GNFDCjqtHBBjqkAUcvTkzj7BO75OovJlYv48rpYxshq%2BSSCGCBLYxTRLx26L321m2GYzpXc9tY%2B71YBWZZf4RgZnfnHNreCESn%2Bt0SHiG89fXd5rSvU6Rq%2F%2FwnSiBrSoM76AK3%2FOur8s%2Fug7AHkTFKoYuwmg1US1%2FNTaQbTCGAgXfFepLuP0ROWZfhGJKDIyWJbAXVM6VfK9nYDdcuhbQXuHODpYYcuaxzI7WsjamI&X-Amz-Signature=6e747483956762e1533ac689e0ca49843d353578edea51c863b09fa73927a16e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPQGZJ3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC3d7WP1ZCC9pxfz29Gfp2Z8R41OxYBOx3IZXAAgGuR7wIhAKUhn7TfEV32LVIgdFnZcHLhI%2BaM7u06ymvs9q%2BoaWDNKv8DCEUQABoMNjM3NDIzMTgzODA1IgwnvwQ9Bs%2FkAgNFtj0q3APR9cws1a%2B1OckOaEILkMFdQDhNkxnixct%2FijkIysu2wxcdQFbAWz%2BS3%2FaShhLnnj5yt9tpf3gKyp8TJ4A21XZSX8KlghJZFpN0WMdNE7xONeFU%2FHmFAGa0tCnAqLtR6zQRpCZyRCkcO1k5pDOBNei3e%2Bzj1UAEtf2jxb%2BzTgZx2DhUHcxygBL%2B6akzEMizdrVhqcWu66jLn8%2BYNJ6BHHiSYmRPzeASHgN6nZvIt8Evw4xKhpcHmh%2FrPO0w1qZGsmXIJwxUjxZswTjAaOivBoQeF5lEPorTJj0E8Jzc7%2Fiyca%2BXrDz8wapbn%2FfbGNZG%2BcCHilodpgIJfPUpABNidEGgsHrhQnOK8MC0UEUcYWCyzoLtomL5Azj259FGHT0iNg0Gu0Hm%2FcSr1s1Zwxm7wuDYn4mCzwFDPjnoKZgn6tuFDJAFw23wQqdLFjurud6IIZU4fvcoPqF%2Fz0J1jgkRMOgnU3lRE56o35l6mTVL3AGx4VkSCCrscJlyJlz3RYeJUgHltbmbWKnf0Xxc14GO%2BYi7Az0KfJhLbrfUOF3BqBcVsyC3oj%2BnOUb1tWXH2yXZ5%2B1ENsHnjAjaILEKLqcAHPLuUOfLmeVEg%2BHVWID8V8PHxJolrLvjijjsI2GNFDCjqtHBBjqkAUcvTkzj7BO75OovJlYv48rpYxshq%2BSSCGCBLYxTRLx26L321m2GYzpXc9tY%2B71YBWZZf4RgZnfnHNreCESn%2Bt0SHiG89fXd5rSvU6Rq%2F%2FwnSiBrSoM76AK3%2FOur8s%2Fug7AHkTFKoYuwmg1US1%2FNTaQbTCGAgXfFepLuP0ROWZfhGJKDIyWJbAXVM6VfK9nYDdcuhbQXuHODpYYcuaxzI7WsjamI&X-Amz-Signature=5df9681dd67c7b9050188acfd6bc58b231dbcc66dd62fad2eda913ca828ef29a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPQGZJ3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC3d7WP1ZCC9pxfz29Gfp2Z8R41OxYBOx3IZXAAgGuR7wIhAKUhn7TfEV32LVIgdFnZcHLhI%2BaM7u06ymvs9q%2BoaWDNKv8DCEUQABoMNjM3NDIzMTgzODA1IgwnvwQ9Bs%2FkAgNFtj0q3APR9cws1a%2B1OckOaEILkMFdQDhNkxnixct%2FijkIysu2wxcdQFbAWz%2BS3%2FaShhLnnj5yt9tpf3gKyp8TJ4A21XZSX8KlghJZFpN0WMdNE7xONeFU%2FHmFAGa0tCnAqLtR6zQRpCZyRCkcO1k5pDOBNei3e%2Bzj1UAEtf2jxb%2BzTgZx2DhUHcxygBL%2B6akzEMizdrVhqcWu66jLn8%2BYNJ6BHHiSYmRPzeASHgN6nZvIt8Evw4xKhpcHmh%2FrPO0w1qZGsmXIJwxUjxZswTjAaOivBoQeF5lEPorTJj0E8Jzc7%2Fiyca%2BXrDz8wapbn%2FfbGNZG%2BcCHilodpgIJfPUpABNidEGgsHrhQnOK8MC0UEUcYWCyzoLtomL5Azj259FGHT0iNg0Gu0Hm%2FcSr1s1Zwxm7wuDYn4mCzwFDPjnoKZgn6tuFDJAFw23wQqdLFjurud6IIZU4fvcoPqF%2Fz0J1jgkRMOgnU3lRE56o35l6mTVL3AGx4VkSCCrscJlyJlz3RYeJUgHltbmbWKnf0Xxc14GO%2BYi7Az0KfJhLbrfUOF3BqBcVsyC3oj%2BnOUb1tWXH2yXZ5%2B1ENsHnjAjaILEKLqcAHPLuUOfLmeVEg%2BHVWID8V8PHxJolrLvjijjsI2GNFDCjqtHBBjqkAUcvTkzj7BO75OovJlYv48rpYxshq%2BSSCGCBLYxTRLx26L321m2GYzpXc9tY%2B71YBWZZf4RgZnfnHNreCESn%2Bt0SHiG89fXd5rSvU6Rq%2F%2FwnSiBrSoM76AK3%2FOur8s%2Fug7AHkTFKoYuwmg1US1%2FNTaQbTCGAgXfFepLuP0ROWZfhGJKDIyWJbAXVM6VfK9nYDdcuhbQXuHODpYYcuaxzI7WsjamI&X-Amz-Signature=14a808fba67f443e6bacf3dab078062d7a4a87acc1ba3784ab572aca4202a561&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPQGZJ3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC3d7WP1ZCC9pxfz29Gfp2Z8R41OxYBOx3IZXAAgGuR7wIhAKUhn7TfEV32LVIgdFnZcHLhI%2BaM7u06ymvs9q%2BoaWDNKv8DCEUQABoMNjM3NDIzMTgzODA1IgwnvwQ9Bs%2FkAgNFtj0q3APR9cws1a%2B1OckOaEILkMFdQDhNkxnixct%2FijkIysu2wxcdQFbAWz%2BS3%2FaShhLnnj5yt9tpf3gKyp8TJ4A21XZSX8KlghJZFpN0WMdNE7xONeFU%2FHmFAGa0tCnAqLtR6zQRpCZyRCkcO1k5pDOBNei3e%2Bzj1UAEtf2jxb%2BzTgZx2DhUHcxygBL%2B6akzEMizdrVhqcWu66jLn8%2BYNJ6BHHiSYmRPzeASHgN6nZvIt8Evw4xKhpcHmh%2FrPO0w1qZGsmXIJwxUjxZswTjAaOivBoQeF5lEPorTJj0E8Jzc7%2Fiyca%2BXrDz8wapbn%2FfbGNZG%2BcCHilodpgIJfPUpABNidEGgsHrhQnOK8MC0UEUcYWCyzoLtomL5Azj259FGHT0iNg0Gu0Hm%2FcSr1s1Zwxm7wuDYn4mCzwFDPjnoKZgn6tuFDJAFw23wQqdLFjurud6IIZU4fvcoPqF%2Fz0J1jgkRMOgnU3lRE56o35l6mTVL3AGx4VkSCCrscJlyJlz3RYeJUgHltbmbWKnf0Xxc14GO%2BYi7Az0KfJhLbrfUOF3BqBcVsyC3oj%2BnOUb1tWXH2yXZ5%2B1ENsHnjAjaILEKLqcAHPLuUOfLmeVEg%2BHVWID8V8PHxJolrLvjijjsI2GNFDCjqtHBBjqkAUcvTkzj7BO75OovJlYv48rpYxshq%2BSSCGCBLYxTRLx26L321m2GYzpXc9tY%2B71YBWZZf4RgZnfnHNreCESn%2Bt0SHiG89fXd5rSvU6Rq%2F%2FwnSiBrSoM76AK3%2FOur8s%2Fug7AHkTFKoYuwmg1US1%2FNTaQbTCGAgXfFepLuP0ROWZfhGJKDIyWJbAXVM6VfK9nYDdcuhbQXuHODpYYcuaxzI7WsjamI&X-Amz-Signature=94fa3aef92edc4f39a3580f1a33309c110c50c5cdb73b0db90dbc63a842dbc18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPQGZJ3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC3d7WP1ZCC9pxfz29Gfp2Z8R41OxYBOx3IZXAAgGuR7wIhAKUhn7TfEV32LVIgdFnZcHLhI%2BaM7u06ymvs9q%2BoaWDNKv8DCEUQABoMNjM3NDIzMTgzODA1IgwnvwQ9Bs%2FkAgNFtj0q3APR9cws1a%2B1OckOaEILkMFdQDhNkxnixct%2FijkIysu2wxcdQFbAWz%2BS3%2FaShhLnnj5yt9tpf3gKyp8TJ4A21XZSX8KlghJZFpN0WMdNE7xONeFU%2FHmFAGa0tCnAqLtR6zQRpCZyRCkcO1k5pDOBNei3e%2Bzj1UAEtf2jxb%2BzTgZx2DhUHcxygBL%2B6akzEMizdrVhqcWu66jLn8%2BYNJ6BHHiSYmRPzeASHgN6nZvIt8Evw4xKhpcHmh%2FrPO0w1qZGsmXIJwxUjxZswTjAaOivBoQeF5lEPorTJj0E8Jzc7%2Fiyca%2BXrDz8wapbn%2FfbGNZG%2BcCHilodpgIJfPUpABNidEGgsHrhQnOK8MC0UEUcYWCyzoLtomL5Azj259FGHT0iNg0Gu0Hm%2FcSr1s1Zwxm7wuDYn4mCzwFDPjnoKZgn6tuFDJAFw23wQqdLFjurud6IIZU4fvcoPqF%2Fz0J1jgkRMOgnU3lRE56o35l6mTVL3AGx4VkSCCrscJlyJlz3RYeJUgHltbmbWKnf0Xxc14GO%2BYi7Az0KfJhLbrfUOF3BqBcVsyC3oj%2BnOUb1tWXH2yXZ5%2B1ENsHnjAjaILEKLqcAHPLuUOfLmeVEg%2BHVWID8V8PHxJolrLvjijjsI2GNFDCjqtHBBjqkAUcvTkzj7BO75OovJlYv48rpYxshq%2BSSCGCBLYxTRLx26L321m2GYzpXc9tY%2B71YBWZZf4RgZnfnHNreCESn%2Bt0SHiG89fXd5rSvU6Rq%2F%2FwnSiBrSoM76AK3%2FOur8s%2Fug7AHkTFKoYuwmg1US1%2FNTaQbTCGAgXfFepLuP0ROWZfhGJKDIyWJbAXVM6VfK9nYDdcuhbQXuHODpYYcuaxzI7WsjamI&X-Amz-Signature=ab9c305d6f1f3889b17dbcefe5939a4f19f7dce4a94050646bb71b58a77f1429&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
