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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PJXUAP7%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLjyS28UH3xDO23MT4Kjsc86SJ%2BfsQ%2FYt0xupSYik%2FkAiEAxxR88QkvKtm1uFMSJty8bhtCjDUeWCg1%2Bxm8gRENQxwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyQOjvNO%2Fdyd8VZByrcA04wnUQzBxMEamJFnhZxcCnSwVEwPDj2s9j2C%2Bgqqaq7QdF%2FwJPT83hspvp9HTyBqZ3AEIZFpz3bPlHX%2BBIOFo3VxJh53Ah%2FBoKYCTUxrL7XZSHeqUoD1XKML0eW78pG7JGRmeEfL4rpCN4ZT97sgO%2FiLXUHQCjoABs18h8mAagU72yoEyRnKcI%2BVob76zlBF0HL2D2M%2F3Bxor4jUoLinsg8Os683UaI3A089uR5KOypo0XrtysbBdEGyjmUElcVB7NODjFFnZHKqRBdt3OQg1vWsZ7rOqsGMT5IAQi2i7giMJnR3EP%2B8fjZUJSiRs3qmmLLHz8tMV0wW1IT9Pvy45eI73rzPgqUGa2M%2B360AQ5DHmpScqnPQqnUzypp0sCztvHwcEe53IgnBZyCQjhzv4FdEntRkrh%2FvqSE%2BtUxnoEyqBuXHqo3t1H2gtCzpo0lvjeAwta51a7Kq1aZ4JQlwP47p2qxgyJDza%2FdkGheQnzNZTPPbkSNt0fRF9uErMmSz57uEJSusWMEFecIytGXur2wuTsRerTcU%2FEWvKLNOx2K07jp4AYq8LRcuhgkUYXChpfNwEwVOiOtFgDt9JX9SjQquAQIa8KuAXo4I9ZXuqxwOtvsaNy6eoBOkVPTMIf1n70GOqUBXFJltbYui24ZUdD3DYkFtleCelyRRDoVjxqSa7S2OQ0T13%2BqbE30ttDGDV7JKVYLFGquqs1RMzqxhiHr8PJsKuaiomF7TzP7GGV5j2uXh68xHJTZGhru4qwXLLQfHHs2aZ5ermQVq8zvNAfICL23wnNAOfvqADTzpe3%2BdP3EAVx2lTpPlofFayc8qoE3T3WB0h8XXxMYfa1PjUeeMDC695Br4LS%2B&X-Amz-Signature=7e8281f185491c933b7e57d28614e787ac2f70cf8d06d26003260c54258bf318&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PJXUAP7%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLjyS28UH3xDO23MT4Kjsc86SJ%2BfsQ%2FYt0xupSYik%2FkAiEAxxR88QkvKtm1uFMSJty8bhtCjDUeWCg1%2Bxm8gRENQxwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyQOjvNO%2Fdyd8VZByrcA04wnUQzBxMEamJFnhZxcCnSwVEwPDj2s9j2C%2Bgqqaq7QdF%2FwJPT83hspvp9HTyBqZ3AEIZFpz3bPlHX%2BBIOFo3VxJh53Ah%2FBoKYCTUxrL7XZSHeqUoD1XKML0eW78pG7JGRmeEfL4rpCN4ZT97sgO%2FiLXUHQCjoABs18h8mAagU72yoEyRnKcI%2BVob76zlBF0HL2D2M%2F3Bxor4jUoLinsg8Os683UaI3A089uR5KOypo0XrtysbBdEGyjmUElcVB7NODjFFnZHKqRBdt3OQg1vWsZ7rOqsGMT5IAQi2i7giMJnR3EP%2B8fjZUJSiRs3qmmLLHz8tMV0wW1IT9Pvy45eI73rzPgqUGa2M%2B360AQ5DHmpScqnPQqnUzypp0sCztvHwcEe53IgnBZyCQjhzv4FdEntRkrh%2FvqSE%2BtUxnoEyqBuXHqo3t1H2gtCzpo0lvjeAwta51a7Kq1aZ4JQlwP47p2qxgyJDza%2FdkGheQnzNZTPPbkSNt0fRF9uErMmSz57uEJSusWMEFecIytGXur2wuTsRerTcU%2FEWvKLNOx2K07jp4AYq8LRcuhgkUYXChpfNwEwVOiOtFgDt9JX9SjQquAQIa8KuAXo4I9ZXuqxwOtvsaNy6eoBOkVPTMIf1n70GOqUBXFJltbYui24ZUdD3DYkFtleCelyRRDoVjxqSa7S2OQ0T13%2BqbE30ttDGDV7JKVYLFGquqs1RMzqxhiHr8PJsKuaiomF7TzP7GGV5j2uXh68xHJTZGhru4qwXLLQfHHs2aZ5ermQVq8zvNAfICL23wnNAOfvqADTzpe3%2BdP3EAVx2lTpPlofFayc8qoE3T3WB0h8XXxMYfa1PjUeeMDC695Br4LS%2B&X-Amz-Signature=4c6777380c47a1ebde0d7eb7513c764bd133b78e89f0de36aceb472e4e92d6f6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PJXUAP7%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLjyS28UH3xDO23MT4Kjsc86SJ%2BfsQ%2FYt0xupSYik%2FkAiEAxxR88QkvKtm1uFMSJty8bhtCjDUeWCg1%2Bxm8gRENQxwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyQOjvNO%2Fdyd8VZByrcA04wnUQzBxMEamJFnhZxcCnSwVEwPDj2s9j2C%2Bgqqaq7QdF%2FwJPT83hspvp9HTyBqZ3AEIZFpz3bPlHX%2BBIOFo3VxJh53Ah%2FBoKYCTUxrL7XZSHeqUoD1XKML0eW78pG7JGRmeEfL4rpCN4ZT97sgO%2FiLXUHQCjoABs18h8mAagU72yoEyRnKcI%2BVob76zlBF0HL2D2M%2F3Bxor4jUoLinsg8Os683UaI3A089uR5KOypo0XrtysbBdEGyjmUElcVB7NODjFFnZHKqRBdt3OQg1vWsZ7rOqsGMT5IAQi2i7giMJnR3EP%2B8fjZUJSiRs3qmmLLHz8tMV0wW1IT9Pvy45eI73rzPgqUGa2M%2B360AQ5DHmpScqnPQqnUzypp0sCztvHwcEe53IgnBZyCQjhzv4FdEntRkrh%2FvqSE%2BtUxnoEyqBuXHqo3t1H2gtCzpo0lvjeAwta51a7Kq1aZ4JQlwP47p2qxgyJDza%2FdkGheQnzNZTPPbkSNt0fRF9uErMmSz57uEJSusWMEFecIytGXur2wuTsRerTcU%2FEWvKLNOx2K07jp4AYq8LRcuhgkUYXChpfNwEwVOiOtFgDt9JX9SjQquAQIa8KuAXo4I9ZXuqxwOtvsaNy6eoBOkVPTMIf1n70GOqUBXFJltbYui24ZUdD3DYkFtleCelyRRDoVjxqSa7S2OQ0T13%2BqbE30ttDGDV7JKVYLFGquqs1RMzqxhiHr8PJsKuaiomF7TzP7GGV5j2uXh68xHJTZGhru4qwXLLQfHHs2aZ5ermQVq8zvNAfICL23wnNAOfvqADTzpe3%2BdP3EAVx2lTpPlofFayc8qoE3T3WB0h8XXxMYfa1PjUeeMDC695Br4LS%2B&X-Amz-Signature=6846ef3d92de4bef226b0e0240d5069f54a1c27b1be6d291719f4855749f6385&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PJXUAP7%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLjyS28UH3xDO23MT4Kjsc86SJ%2BfsQ%2FYt0xupSYik%2FkAiEAxxR88QkvKtm1uFMSJty8bhtCjDUeWCg1%2Bxm8gRENQxwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyQOjvNO%2Fdyd8VZByrcA04wnUQzBxMEamJFnhZxcCnSwVEwPDj2s9j2C%2Bgqqaq7QdF%2FwJPT83hspvp9HTyBqZ3AEIZFpz3bPlHX%2BBIOFo3VxJh53Ah%2FBoKYCTUxrL7XZSHeqUoD1XKML0eW78pG7JGRmeEfL4rpCN4ZT97sgO%2FiLXUHQCjoABs18h8mAagU72yoEyRnKcI%2BVob76zlBF0HL2D2M%2F3Bxor4jUoLinsg8Os683UaI3A089uR5KOypo0XrtysbBdEGyjmUElcVB7NODjFFnZHKqRBdt3OQg1vWsZ7rOqsGMT5IAQi2i7giMJnR3EP%2B8fjZUJSiRs3qmmLLHz8tMV0wW1IT9Pvy45eI73rzPgqUGa2M%2B360AQ5DHmpScqnPQqnUzypp0sCztvHwcEe53IgnBZyCQjhzv4FdEntRkrh%2FvqSE%2BtUxnoEyqBuXHqo3t1H2gtCzpo0lvjeAwta51a7Kq1aZ4JQlwP47p2qxgyJDza%2FdkGheQnzNZTPPbkSNt0fRF9uErMmSz57uEJSusWMEFecIytGXur2wuTsRerTcU%2FEWvKLNOx2K07jp4AYq8LRcuhgkUYXChpfNwEwVOiOtFgDt9JX9SjQquAQIa8KuAXo4I9ZXuqxwOtvsaNy6eoBOkVPTMIf1n70GOqUBXFJltbYui24ZUdD3DYkFtleCelyRRDoVjxqSa7S2OQ0T13%2BqbE30ttDGDV7JKVYLFGquqs1RMzqxhiHr8PJsKuaiomF7TzP7GGV5j2uXh68xHJTZGhru4qwXLLQfHHs2aZ5ermQVq8zvNAfICL23wnNAOfvqADTzpe3%2BdP3EAVx2lTpPlofFayc8qoE3T3WB0h8XXxMYfa1PjUeeMDC695Br4LS%2B&X-Amz-Signature=5a0cefafdc5ef8940aaab0345b2fa0a821a7bbc99f887434a674103450ff0644&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PJXUAP7%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLjyS28UH3xDO23MT4Kjsc86SJ%2BfsQ%2FYt0xupSYik%2FkAiEAxxR88QkvKtm1uFMSJty8bhtCjDUeWCg1%2Bxm8gRENQxwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyQOjvNO%2Fdyd8VZByrcA04wnUQzBxMEamJFnhZxcCnSwVEwPDj2s9j2C%2Bgqqaq7QdF%2FwJPT83hspvp9HTyBqZ3AEIZFpz3bPlHX%2BBIOFo3VxJh53Ah%2FBoKYCTUxrL7XZSHeqUoD1XKML0eW78pG7JGRmeEfL4rpCN4ZT97sgO%2FiLXUHQCjoABs18h8mAagU72yoEyRnKcI%2BVob76zlBF0HL2D2M%2F3Bxor4jUoLinsg8Os683UaI3A089uR5KOypo0XrtysbBdEGyjmUElcVB7NODjFFnZHKqRBdt3OQg1vWsZ7rOqsGMT5IAQi2i7giMJnR3EP%2B8fjZUJSiRs3qmmLLHz8tMV0wW1IT9Pvy45eI73rzPgqUGa2M%2B360AQ5DHmpScqnPQqnUzypp0sCztvHwcEe53IgnBZyCQjhzv4FdEntRkrh%2FvqSE%2BtUxnoEyqBuXHqo3t1H2gtCzpo0lvjeAwta51a7Kq1aZ4JQlwP47p2qxgyJDza%2FdkGheQnzNZTPPbkSNt0fRF9uErMmSz57uEJSusWMEFecIytGXur2wuTsRerTcU%2FEWvKLNOx2K07jp4AYq8LRcuhgkUYXChpfNwEwVOiOtFgDt9JX9SjQquAQIa8KuAXo4I9ZXuqxwOtvsaNy6eoBOkVPTMIf1n70GOqUBXFJltbYui24ZUdD3DYkFtleCelyRRDoVjxqSa7S2OQ0T13%2BqbE30ttDGDV7JKVYLFGquqs1RMzqxhiHr8PJsKuaiomF7TzP7GGV5j2uXh68xHJTZGhru4qwXLLQfHHs2aZ5ermQVq8zvNAfICL23wnNAOfvqADTzpe3%2BdP3EAVx2lTpPlofFayc8qoE3T3WB0h8XXxMYfa1PjUeeMDC695Br4LS%2B&X-Amz-Signature=c9621f0a094d4a6058381cee4a993f41ab4fb6bbd682c0ec2d309b352887e00b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
