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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GX5A47R%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg1jn9ke%2BqnKsHeMsjQ76hxXjVbNZEVWGPm0M32y1FXAiB1socOf%2BgY56M9dLpNZjs7F0vrLoKi%2BobZ1Jq%2BdlSNwyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbpKSbvgzKzDoHSE2KtwD7A37%2F85ZKQ3zeb0j8GNgxK%2Bx3bNnCKUJ%2FQD64JqrCGpLRnxWhfrLFat5HVnaNUlLyG4tP6JPlvt52kdwXP%2Bcgj2ljlOHebn30Ok2BUYs6WCk0h58ogObAY2ukahpiEY9AY00uK9QqXMZM7qgrkkFLhSNy5sTOXb5tbooaBcZcMvHw4EtN7KJJchjDwJb7eT9DnVCKjAI11COJP8djo77An24%2BKM5WEfuIvidyHBynz%2FxZhS8%2BTwSD08lSt7ge8bNydApHb9VI1HtYgIHQnEeAHAojRWzFxDdiYdxnsKGe0lNiTpgD%2BXHeC%2FY5WxCaitSAOG%2BgY%2B%2FliQtc2uJI6B0rLmBCTDmwL%2BjtYdOkQDohasRNoP8JoAuu73waxHzs355r29TuksNC2sk1cL1NlDJ9a4YK3hfu4C7v4kpIFguM6UZNwlQ%2FLKyI5r5opXc0fj1q88ynqcjM4ufN7Gq4klFywqVlQaUnOyXvUynJPin3734cvr%2BnF8YPR01leDY4jaRnDi%2FQg0SB5nbkOBAPC9w8GbUg9l1EjmJWBKim%2FmRUqP3nhJgEVD6LlpShsMqWxHjkRf3FJnss3YjFm9fPgBa6TjwEmy9KPpvFDVJZbOZ%2Fsyt0sWsWuDWzfP0DHYwstLZwgY6pgELBvRvN4KAvkg5JJ0zymcDuJoHRee42I%2Fc%2BvfVihol9Cyc%2BB4ZGQ8hQHMfdFRXkyBvXm%2F9143EIpv8pelGAZJeQFYZG8TpJEYDn9tn%2FGQcVYxZ%2BgZhdeHvLBtA26ZKV%2F5XlXB%2FD5BaU0SolePqsHbISQ554to3N0lDu9rQrDv%2BQQeSntVhs8BNK9iSqve0%2FJb5Ds%2BxHUpUBb32a4q09rvtafB%2B4yZB&X-Amz-Signature=382b0d06dd8eefddaff6e52783fce06a5b4effb6abcc38f77200e6dc17ab1504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GX5A47R%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg1jn9ke%2BqnKsHeMsjQ76hxXjVbNZEVWGPm0M32y1FXAiB1socOf%2BgY56M9dLpNZjs7F0vrLoKi%2BobZ1Jq%2BdlSNwyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbpKSbvgzKzDoHSE2KtwD7A37%2F85ZKQ3zeb0j8GNgxK%2Bx3bNnCKUJ%2FQD64JqrCGpLRnxWhfrLFat5HVnaNUlLyG4tP6JPlvt52kdwXP%2Bcgj2ljlOHebn30Ok2BUYs6WCk0h58ogObAY2ukahpiEY9AY00uK9QqXMZM7qgrkkFLhSNy5sTOXb5tbooaBcZcMvHw4EtN7KJJchjDwJb7eT9DnVCKjAI11COJP8djo77An24%2BKM5WEfuIvidyHBynz%2FxZhS8%2BTwSD08lSt7ge8bNydApHb9VI1HtYgIHQnEeAHAojRWzFxDdiYdxnsKGe0lNiTpgD%2BXHeC%2FY5WxCaitSAOG%2BgY%2B%2FliQtc2uJI6B0rLmBCTDmwL%2BjtYdOkQDohasRNoP8JoAuu73waxHzs355r29TuksNC2sk1cL1NlDJ9a4YK3hfu4C7v4kpIFguM6UZNwlQ%2FLKyI5r5opXc0fj1q88ynqcjM4ufN7Gq4klFywqVlQaUnOyXvUynJPin3734cvr%2BnF8YPR01leDY4jaRnDi%2FQg0SB5nbkOBAPC9w8GbUg9l1EjmJWBKim%2FmRUqP3nhJgEVD6LlpShsMqWxHjkRf3FJnss3YjFm9fPgBa6TjwEmy9KPpvFDVJZbOZ%2Fsyt0sWsWuDWzfP0DHYwstLZwgY6pgELBvRvN4KAvkg5JJ0zymcDuJoHRee42I%2Fc%2BvfVihol9Cyc%2BB4ZGQ8hQHMfdFRXkyBvXm%2F9143EIpv8pelGAZJeQFYZG8TpJEYDn9tn%2FGQcVYxZ%2BgZhdeHvLBtA26ZKV%2F5XlXB%2FD5BaU0SolePqsHbISQ554to3N0lDu9rQrDv%2BQQeSntVhs8BNK9iSqve0%2FJb5Ds%2BxHUpUBb32a4q09rvtafB%2B4yZB&X-Amz-Signature=d620b6209dd8620588949431ef2e1e3142ec8a9195ef50795e9f3636375f4cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GX5A47R%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg1jn9ke%2BqnKsHeMsjQ76hxXjVbNZEVWGPm0M32y1FXAiB1socOf%2BgY56M9dLpNZjs7F0vrLoKi%2BobZ1Jq%2BdlSNwyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbpKSbvgzKzDoHSE2KtwD7A37%2F85ZKQ3zeb0j8GNgxK%2Bx3bNnCKUJ%2FQD64JqrCGpLRnxWhfrLFat5HVnaNUlLyG4tP6JPlvt52kdwXP%2Bcgj2ljlOHebn30Ok2BUYs6WCk0h58ogObAY2ukahpiEY9AY00uK9QqXMZM7qgrkkFLhSNy5sTOXb5tbooaBcZcMvHw4EtN7KJJchjDwJb7eT9DnVCKjAI11COJP8djo77An24%2BKM5WEfuIvidyHBynz%2FxZhS8%2BTwSD08lSt7ge8bNydApHb9VI1HtYgIHQnEeAHAojRWzFxDdiYdxnsKGe0lNiTpgD%2BXHeC%2FY5WxCaitSAOG%2BgY%2B%2FliQtc2uJI6B0rLmBCTDmwL%2BjtYdOkQDohasRNoP8JoAuu73waxHzs355r29TuksNC2sk1cL1NlDJ9a4YK3hfu4C7v4kpIFguM6UZNwlQ%2FLKyI5r5opXc0fj1q88ynqcjM4ufN7Gq4klFywqVlQaUnOyXvUynJPin3734cvr%2BnF8YPR01leDY4jaRnDi%2FQg0SB5nbkOBAPC9w8GbUg9l1EjmJWBKim%2FmRUqP3nhJgEVD6LlpShsMqWxHjkRf3FJnss3YjFm9fPgBa6TjwEmy9KPpvFDVJZbOZ%2Fsyt0sWsWuDWzfP0DHYwstLZwgY6pgELBvRvN4KAvkg5JJ0zymcDuJoHRee42I%2Fc%2BvfVihol9Cyc%2BB4ZGQ8hQHMfdFRXkyBvXm%2F9143EIpv8pelGAZJeQFYZG8TpJEYDn9tn%2FGQcVYxZ%2BgZhdeHvLBtA26ZKV%2F5XlXB%2FD5BaU0SolePqsHbISQ554to3N0lDu9rQrDv%2BQQeSntVhs8BNK9iSqve0%2FJb5Ds%2BxHUpUBb32a4q09rvtafB%2B4yZB&X-Amz-Signature=efdfc21f57e9a86e91cc5c726af4bfbee8b450183b905e37c5321f02ccc8ce67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GX5A47R%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg1jn9ke%2BqnKsHeMsjQ76hxXjVbNZEVWGPm0M32y1FXAiB1socOf%2BgY56M9dLpNZjs7F0vrLoKi%2BobZ1Jq%2BdlSNwyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbpKSbvgzKzDoHSE2KtwD7A37%2F85ZKQ3zeb0j8GNgxK%2Bx3bNnCKUJ%2FQD64JqrCGpLRnxWhfrLFat5HVnaNUlLyG4tP6JPlvt52kdwXP%2Bcgj2ljlOHebn30Ok2BUYs6WCk0h58ogObAY2ukahpiEY9AY00uK9QqXMZM7qgrkkFLhSNy5sTOXb5tbooaBcZcMvHw4EtN7KJJchjDwJb7eT9DnVCKjAI11COJP8djo77An24%2BKM5WEfuIvidyHBynz%2FxZhS8%2BTwSD08lSt7ge8bNydApHb9VI1HtYgIHQnEeAHAojRWzFxDdiYdxnsKGe0lNiTpgD%2BXHeC%2FY5WxCaitSAOG%2BgY%2B%2FliQtc2uJI6B0rLmBCTDmwL%2BjtYdOkQDohasRNoP8JoAuu73waxHzs355r29TuksNC2sk1cL1NlDJ9a4YK3hfu4C7v4kpIFguM6UZNwlQ%2FLKyI5r5opXc0fj1q88ynqcjM4ufN7Gq4klFywqVlQaUnOyXvUynJPin3734cvr%2BnF8YPR01leDY4jaRnDi%2FQg0SB5nbkOBAPC9w8GbUg9l1EjmJWBKim%2FmRUqP3nhJgEVD6LlpShsMqWxHjkRf3FJnss3YjFm9fPgBa6TjwEmy9KPpvFDVJZbOZ%2Fsyt0sWsWuDWzfP0DHYwstLZwgY6pgELBvRvN4KAvkg5JJ0zymcDuJoHRee42I%2Fc%2BvfVihol9Cyc%2BB4ZGQ8hQHMfdFRXkyBvXm%2F9143EIpv8pelGAZJeQFYZG8TpJEYDn9tn%2FGQcVYxZ%2BgZhdeHvLBtA26ZKV%2F5XlXB%2FD5BaU0SolePqsHbISQ554to3N0lDu9rQrDv%2BQQeSntVhs8BNK9iSqve0%2FJb5Ds%2BxHUpUBb32a4q09rvtafB%2B4yZB&X-Amz-Signature=5e0d5d7c9304e5d2a3e288052e8398137412263314f50e238f1451bd539c8cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GX5A47R%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg1jn9ke%2BqnKsHeMsjQ76hxXjVbNZEVWGPm0M32y1FXAiB1socOf%2BgY56M9dLpNZjs7F0vrLoKi%2BobZ1Jq%2BdlSNwyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbpKSbvgzKzDoHSE2KtwD7A37%2F85ZKQ3zeb0j8GNgxK%2Bx3bNnCKUJ%2FQD64JqrCGpLRnxWhfrLFat5HVnaNUlLyG4tP6JPlvt52kdwXP%2Bcgj2ljlOHebn30Ok2BUYs6WCk0h58ogObAY2ukahpiEY9AY00uK9QqXMZM7qgrkkFLhSNy5sTOXb5tbooaBcZcMvHw4EtN7KJJchjDwJb7eT9DnVCKjAI11COJP8djo77An24%2BKM5WEfuIvidyHBynz%2FxZhS8%2BTwSD08lSt7ge8bNydApHb9VI1HtYgIHQnEeAHAojRWzFxDdiYdxnsKGe0lNiTpgD%2BXHeC%2FY5WxCaitSAOG%2BgY%2B%2FliQtc2uJI6B0rLmBCTDmwL%2BjtYdOkQDohasRNoP8JoAuu73waxHzs355r29TuksNC2sk1cL1NlDJ9a4YK3hfu4C7v4kpIFguM6UZNwlQ%2FLKyI5r5opXc0fj1q88ynqcjM4ufN7Gq4klFywqVlQaUnOyXvUynJPin3734cvr%2BnF8YPR01leDY4jaRnDi%2FQg0SB5nbkOBAPC9w8GbUg9l1EjmJWBKim%2FmRUqP3nhJgEVD6LlpShsMqWxHjkRf3FJnss3YjFm9fPgBa6TjwEmy9KPpvFDVJZbOZ%2Fsyt0sWsWuDWzfP0DHYwstLZwgY6pgELBvRvN4KAvkg5JJ0zymcDuJoHRee42I%2Fc%2BvfVihol9Cyc%2BB4ZGQ8hQHMfdFRXkyBvXm%2F9143EIpv8pelGAZJeQFYZG8TpJEYDn9tn%2FGQcVYxZ%2BgZhdeHvLBtA26ZKV%2F5XlXB%2FD5BaU0SolePqsHbISQ554to3N0lDu9rQrDv%2BQQeSntVhs8BNK9iSqve0%2FJb5Ds%2BxHUpUBb32a4q09rvtafB%2B4yZB&X-Amz-Signature=dc39f4a100482e0925351858edbc55800e11fd1f3b19e90a94756c102ba11b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
