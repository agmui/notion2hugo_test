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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQBMLJU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDcZ05mfDG%2B2H1AYYdIXeoww9owQPgojXa13yok%2BqOEiwIhAOyWT4sX0brU0eg75t%2FHys1TCnyatiMujBFzi6dL9%2F94Kv8DCHkQABoMNjM3NDIzMTgzODA1IgyHDTTnn5AZuiYJ7Owq3AMMwAdeagEHfjXthenr%2BTlEXwqWdShmBJ6OA80sCRNIDaDyUHk%2BiZwwJX9y%2BU%2BV4vs8M%2FSp2iWGCzRisLJPK5%2BnhxV2iDWC244Va9CtbW8t9tKrzqKNS3G%2B8NK0%2BuKlmunEWMr%2BkWuMR%2F%2BFxqB0jPrVSHLFdVhRxvsw8XbyACC3fUeM346pSiujYnH4SiCQxDM08UXzqombGfpUSjAzE8G344WmZxfwkI4p%2FRF2WxfnlzvLQFjXmA1aLAQTlmzMZFu01pQcCCqnqBo3oRY45hEZZxAuMzuQs2Ntt4kAbI2ze8E0NMYsFTtGkuiGaDXxkFH7s7q7%2BhUOW9OV3XhLsd%2BfJE%2Bqa%2FpPEtJQVi4hKAvBBKkxSKFrAX3HlignPSkFLXU%2BwDjhk1A6a7GN%2BIbN4OT9zbBqQfb9yDxVfJX1cnBu8I1jHUIDzVLS8qbK7Hal5URNxt2%2FiHDb2WpA%2Ft8u4nz9o4x6evLXSQBI3eM2yJIqiO5bKwSq%2BXU3L8dyY2p6HrWFfPQJVceioXiXjX0CYvSPO%2BhDj2CV01MDzpBKFmtSopyF75FpscXaeEcLuM1r2ZP1FollF3b3xpSg4EcMLaOXdSrTk7OWLENrJSTFuvsrfXzqX1ElQGbTIt%2BWFjDE4Zi9BjqkAatxdWZEUJ2tXg1H6TKOeEetn3iWwRDyRsOEKNcY6E%2FrNDbvAyI2EddvEL5z%2BE7jip0n2glI%2BG58AOmTBkB5Lq9tWO42LvoN23qwKIMGM9HBeNnWQybyX7FcOqlApo7n%2F%2BqxecEbveBilsvMqxyuZb6P6uzVfyGul%2F65%2B6MBfmuL7bIoERHQmAVi3rqNoO7xh21%2F%2B5NGlRI%2Bi9G%2F6J6DabLcZCj8&X-Amz-Signature=91232f44d99a3d7808f73d69709430d5d8f6262a942bc51d9969339b84081b83&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQBMLJU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDcZ05mfDG%2B2H1AYYdIXeoww9owQPgojXa13yok%2BqOEiwIhAOyWT4sX0brU0eg75t%2FHys1TCnyatiMujBFzi6dL9%2F94Kv8DCHkQABoMNjM3NDIzMTgzODA1IgyHDTTnn5AZuiYJ7Owq3AMMwAdeagEHfjXthenr%2BTlEXwqWdShmBJ6OA80sCRNIDaDyUHk%2BiZwwJX9y%2BU%2BV4vs8M%2FSp2iWGCzRisLJPK5%2BnhxV2iDWC244Va9CtbW8t9tKrzqKNS3G%2B8NK0%2BuKlmunEWMr%2BkWuMR%2F%2BFxqB0jPrVSHLFdVhRxvsw8XbyACC3fUeM346pSiujYnH4SiCQxDM08UXzqombGfpUSjAzE8G344WmZxfwkI4p%2FRF2WxfnlzvLQFjXmA1aLAQTlmzMZFu01pQcCCqnqBo3oRY45hEZZxAuMzuQs2Ntt4kAbI2ze8E0NMYsFTtGkuiGaDXxkFH7s7q7%2BhUOW9OV3XhLsd%2BfJE%2Bqa%2FpPEtJQVi4hKAvBBKkxSKFrAX3HlignPSkFLXU%2BwDjhk1A6a7GN%2BIbN4OT9zbBqQfb9yDxVfJX1cnBu8I1jHUIDzVLS8qbK7Hal5URNxt2%2FiHDb2WpA%2Ft8u4nz9o4x6evLXSQBI3eM2yJIqiO5bKwSq%2BXU3L8dyY2p6HrWFfPQJVceioXiXjX0CYvSPO%2BhDj2CV01MDzpBKFmtSopyF75FpscXaeEcLuM1r2ZP1FollF3b3xpSg4EcMLaOXdSrTk7OWLENrJSTFuvsrfXzqX1ElQGbTIt%2BWFjDE4Zi9BjqkAatxdWZEUJ2tXg1H6TKOeEetn3iWwRDyRsOEKNcY6E%2FrNDbvAyI2EddvEL5z%2BE7jip0n2glI%2BG58AOmTBkB5Lq9tWO42LvoN23qwKIMGM9HBeNnWQybyX7FcOqlApo7n%2F%2BqxecEbveBilsvMqxyuZb6P6uzVfyGul%2F65%2B6MBfmuL7bIoERHQmAVi3rqNoO7xh21%2F%2B5NGlRI%2Bi9G%2F6J6DabLcZCj8&X-Amz-Signature=6fa33816318e5de6b22b991044c6c5dc4c44a76b1b0d17a09eefd5fcf48021d0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQBMLJU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDcZ05mfDG%2B2H1AYYdIXeoww9owQPgojXa13yok%2BqOEiwIhAOyWT4sX0brU0eg75t%2FHys1TCnyatiMujBFzi6dL9%2F94Kv8DCHkQABoMNjM3NDIzMTgzODA1IgyHDTTnn5AZuiYJ7Owq3AMMwAdeagEHfjXthenr%2BTlEXwqWdShmBJ6OA80sCRNIDaDyUHk%2BiZwwJX9y%2BU%2BV4vs8M%2FSp2iWGCzRisLJPK5%2BnhxV2iDWC244Va9CtbW8t9tKrzqKNS3G%2B8NK0%2BuKlmunEWMr%2BkWuMR%2F%2BFxqB0jPrVSHLFdVhRxvsw8XbyACC3fUeM346pSiujYnH4SiCQxDM08UXzqombGfpUSjAzE8G344WmZxfwkI4p%2FRF2WxfnlzvLQFjXmA1aLAQTlmzMZFu01pQcCCqnqBo3oRY45hEZZxAuMzuQs2Ntt4kAbI2ze8E0NMYsFTtGkuiGaDXxkFH7s7q7%2BhUOW9OV3XhLsd%2BfJE%2Bqa%2FpPEtJQVi4hKAvBBKkxSKFrAX3HlignPSkFLXU%2BwDjhk1A6a7GN%2BIbN4OT9zbBqQfb9yDxVfJX1cnBu8I1jHUIDzVLS8qbK7Hal5URNxt2%2FiHDb2WpA%2Ft8u4nz9o4x6evLXSQBI3eM2yJIqiO5bKwSq%2BXU3L8dyY2p6HrWFfPQJVceioXiXjX0CYvSPO%2BhDj2CV01MDzpBKFmtSopyF75FpscXaeEcLuM1r2ZP1FollF3b3xpSg4EcMLaOXdSrTk7OWLENrJSTFuvsrfXzqX1ElQGbTIt%2BWFjDE4Zi9BjqkAatxdWZEUJ2tXg1H6TKOeEetn3iWwRDyRsOEKNcY6E%2FrNDbvAyI2EddvEL5z%2BE7jip0n2glI%2BG58AOmTBkB5Lq9tWO42LvoN23qwKIMGM9HBeNnWQybyX7FcOqlApo7n%2F%2BqxecEbveBilsvMqxyuZb6P6uzVfyGul%2F65%2B6MBfmuL7bIoERHQmAVi3rqNoO7xh21%2F%2B5NGlRI%2Bi9G%2F6J6DabLcZCj8&X-Amz-Signature=13096d4a7df6c07ab93148f9563167311c1607d34856e5dd7737058912990edd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQBMLJU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDcZ05mfDG%2B2H1AYYdIXeoww9owQPgojXa13yok%2BqOEiwIhAOyWT4sX0brU0eg75t%2FHys1TCnyatiMujBFzi6dL9%2F94Kv8DCHkQABoMNjM3NDIzMTgzODA1IgyHDTTnn5AZuiYJ7Owq3AMMwAdeagEHfjXthenr%2BTlEXwqWdShmBJ6OA80sCRNIDaDyUHk%2BiZwwJX9y%2BU%2BV4vs8M%2FSp2iWGCzRisLJPK5%2BnhxV2iDWC244Va9CtbW8t9tKrzqKNS3G%2B8NK0%2BuKlmunEWMr%2BkWuMR%2F%2BFxqB0jPrVSHLFdVhRxvsw8XbyACC3fUeM346pSiujYnH4SiCQxDM08UXzqombGfpUSjAzE8G344WmZxfwkI4p%2FRF2WxfnlzvLQFjXmA1aLAQTlmzMZFu01pQcCCqnqBo3oRY45hEZZxAuMzuQs2Ntt4kAbI2ze8E0NMYsFTtGkuiGaDXxkFH7s7q7%2BhUOW9OV3XhLsd%2BfJE%2Bqa%2FpPEtJQVi4hKAvBBKkxSKFrAX3HlignPSkFLXU%2BwDjhk1A6a7GN%2BIbN4OT9zbBqQfb9yDxVfJX1cnBu8I1jHUIDzVLS8qbK7Hal5URNxt2%2FiHDb2WpA%2Ft8u4nz9o4x6evLXSQBI3eM2yJIqiO5bKwSq%2BXU3L8dyY2p6HrWFfPQJVceioXiXjX0CYvSPO%2BhDj2CV01MDzpBKFmtSopyF75FpscXaeEcLuM1r2ZP1FollF3b3xpSg4EcMLaOXdSrTk7OWLENrJSTFuvsrfXzqX1ElQGbTIt%2BWFjDE4Zi9BjqkAatxdWZEUJ2tXg1H6TKOeEetn3iWwRDyRsOEKNcY6E%2FrNDbvAyI2EddvEL5z%2BE7jip0n2glI%2BG58AOmTBkB5Lq9tWO42LvoN23qwKIMGM9HBeNnWQybyX7FcOqlApo7n%2F%2BqxecEbveBilsvMqxyuZb6P6uzVfyGul%2F65%2B6MBfmuL7bIoERHQmAVi3rqNoO7xh21%2F%2B5NGlRI%2Bi9G%2F6J6DabLcZCj8&X-Amz-Signature=74041d5879c67fdbfc0a605d15618770a125948c3e41874492cbeb67b7b5c665&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQBMLJU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDcZ05mfDG%2B2H1AYYdIXeoww9owQPgojXa13yok%2BqOEiwIhAOyWT4sX0brU0eg75t%2FHys1TCnyatiMujBFzi6dL9%2F94Kv8DCHkQABoMNjM3NDIzMTgzODA1IgyHDTTnn5AZuiYJ7Owq3AMMwAdeagEHfjXthenr%2BTlEXwqWdShmBJ6OA80sCRNIDaDyUHk%2BiZwwJX9y%2BU%2BV4vs8M%2FSp2iWGCzRisLJPK5%2BnhxV2iDWC244Va9CtbW8t9tKrzqKNS3G%2B8NK0%2BuKlmunEWMr%2BkWuMR%2F%2BFxqB0jPrVSHLFdVhRxvsw8XbyACC3fUeM346pSiujYnH4SiCQxDM08UXzqombGfpUSjAzE8G344WmZxfwkI4p%2FRF2WxfnlzvLQFjXmA1aLAQTlmzMZFu01pQcCCqnqBo3oRY45hEZZxAuMzuQs2Ntt4kAbI2ze8E0NMYsFTtGkuiGaDXxkFH7s7q7%2BhUOW9OV3XhLsd%2BfJE%2Bqa%2FpPEtJQVi4hKAvBBKkxSKFrAX3HlignPSkFLXU%2BwDjhk1A6a7GN%2BIbN4OT9zbBqQfb9yDxVfJX1cnBu8I1jHUIDzVLS8qbK7Hal5URNxt2%2FiHDb2WpA%2Ft8u4nz9o4x6evLXSQBI3eM2yJIqiO5bKwSq%2BXU3L8dyY2p6HrWFfPQJVceioXiXjX0CYvSPO%2BhDj2CV01MDzpBKFmtSopyF75FpscXaeEcLuM1r2ZP1FollF3b3xpSg4EcMLaOXdSrTk7OWLENrJSTFuvsrfXzqX1ElQGbTIt%2BWFjDE4Zi9BjqkAatxdWZEUJ2tXg1H6TKOeEetn3iWwRDyRsOEKNcY6E%2FrNDbvAyI2EddvEL5z%2BE7jip0n2glI%2BG58AOmTBkB5Lq9tWO42LvoN23qwKIMGM9HBeNnWQybyX7FcOqlApo7n%2F%2BqxecEbveBilsvMqxyuZb6P6uzVfyGul%2F65%2B6MBfmuL7bIoERHQmAVi3rqNoO7xh21%2F%2B5NGlRI%2Bi9G%2F6J6DabLcZCj8&X-Amz-Signature=eca0ff88b76ac6e5402ad3b75bf3921e730b5a6a73707f29051f4987e5e2e562&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
