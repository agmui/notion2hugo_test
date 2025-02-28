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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3UE23J%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIHyanWGIWBlUZVRosWpw53iichEPRmW1pDXreP%2B4V6WjAiBvQ1uk%2FaC3hRA2TYuPf8x4EMCHe%2FdbZCyX421YnzjjlyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRPiyr8yRt7wQPl2BKtwDfFfaSu2KkZRQossYUdlSFkM1Hh9QTMzj5%2F%2BnmJF44ovjZg9UhYtCUsCNC7MbBXjFSqyHs8l48zJdXai2Lp44zJTP6k4NFlqlH0g8D3DHx5MkSLHsHGKFnyZzD3jPp2NBjP5dvIpaf2XI3jjIWZpf6nWYPrV%2FxZHXsfE1EKJQtdi%2BhtpTTyH9jqEjbABKfdheXAY319iR4J0chOGMueIAeoc5tvn9QolZ0QnlSg6OvBSVsqlXWoH8r5Mwd4TWBWcqq%2F4j29EVHvk5DoDRxyfnxv1jeDscIPZjDSDDJSeuWXRm3oExAfbH2WyPJpVJhHudhM0AQVAhbe%2B6F%2F%2BXeqxgrjHGdUZlT97pTFADnLzGmneyVUJs0l4zulZ1NV7Mb48BrLsxEVZYHF9leq2Yp9FurC%2BeMoXFtlfRrwC7cqvY3zpOF%2B9x3m2jE0rvtei19oka8AlTzuUXS4BohepzkLd6fUKzbpiivyJS1fY%2BmnPT64GstV3adlkUPO5lanMUILlQ2cB155HEhfqEdSZMXoNtL6tesyg2QW0%2BornJ46zncJE9%2BxBEa6T457aSUPV0Xxy6bvUe1I%2BOHykhkRzE6ZbqOJ4lhuXlWRrMyx2JTmLymGY5jCQLvFmoKlEm8Pow8JKGvgY6pgGxx8zYnrR0VL%2FYcAIlgb1N43Pw304BtMgQBrMLp9BPq%2FK%2Fz04DWiz0KrvQ62A%2FbffnUAa2%2BTy9tKB%2BoNp8ZqD%2BFAGt37eOS6PE4ipDMPuyWUbiXgR3kM9098TGgCYrHnD1pXC5Yn9V%2B2qw5GvzGu16CWR0yCIKNL0b08QZeamhrvml2kL3qbJntKbdQk6J2o5WZYi1FBUC6dyVeOxWBb9d5uvvtcYr&X-Amz-Signature=ddb7411382b8ae2da9afcede49d995ccbb579b87bac129eadd43dd5195c96c88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3UE23J%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIHyanWGIWBlUZVRosWpw53iichEPRmW1pDXreP%2B4V6WjAiBvQ1uk%2FaC3hRA2TYuPf8x4EMCHe%2FdbZCyX421YnzjjlyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRPiyr8yRt7wQPl2BKtwDfFfaSu2KkZRQossYUdlSFkM1Hh9QTMzj5%2F%2BnmJF44ovjZg9UhYtCUsCNC7MbBXjFSqyHs8l48zJdXai2Lp44zJTP6k4NFlqlH0g8D3DHx5MkSLHsHGKFnyZzD3jPp2NBjP5dvIpaf2XI3jjIWZpf6nWYPrV%2FxZHXsfE1EKJQtdi%2BhtpTTyH9jqEjbABKfdheXAY319iR4J0chOGMueIAeoc5tvn9QolZ0QnlSg6OvBSVsqlXWoH8r5Mwd4TWBWcqq%2F4j29EVHvk5DoDRxyfnxv1jeDscIPZjDSDDJSeuWXRm3oExAfbH2WyPJpVJhHudhM0AQVAhbe%2B6F%2F%2BXeqxgrjHGdUZlT97pTFADnLzGmneyVUJs0l4zulZ1NV7Mb48BrLsxEVZYHF9leq2Yp9FurC%2BeMoXFtlfRrwC7cqvY3zpOF%2B9x3m2jE0rvtei19oka8AlTzuUXS4BohepzkLd6fUKzbpiivyJS1fY%2BmnPT64GstV3adlkUPO5lanMUILlQ2cB155HEhfqEdSZMXoNtL6tesyg2QW0%2BornJ46zncJE9%2BxBEa6T457aSUPV0Xxy6bvUe1I%2BOHykhkRzE6ZbqOJ4lhuXlWRrMyx2JTmLymGY5jCQLvFmoKlEm8Pow8JKGvgY6pgGxx8zYnrR0VL%2FYcAIlgb1N43Pw304BtMgQBrMLp9BPq%2FK%2Fz04DWiz0KrvQ62A%2FbffnUAa2%2BTy9tKB%2BoNp8ZqD%2BFAGt37eOS6PE4ipDMPuyWUbiXgR3kM9098TGgCYrHnD1pXC5Yn9V%2B2qw5GvzGu16CWR0yCIKNL0b08QZeamhrvml2kL3qbJntKbdQk6J2o5WZYi1FBUC6dyVeOxWBb9d5uvvtcYr&X-Amz-Signature=2c1175994f69e7632e57670ff4d8433ee97a272f55ee05a8ee4f84e2bcfe73f7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3UE23J%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIHyanWGIWBlUZVRosWpw53iichEPRmW1pDXreP%2B4V6WjAiBvQ1uk%2FaC3hRA2TYuPf8x4EMCHe%2FdbZCyX421YnzjjlyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRPiyr8yRt7wQPl2BKtwDfFfaSu2KkZRQossYUdlSFkM1Hh9QTMzj5%2F%2BnmJF44ovjZg9UhYtCUsCNC7MbBXjFSqyHs8l48zJdXai2Lp44zJTP6k4NFlqlH0g8D3DHx5MkSLHsHGKFnyZzD3jPp2NBjP5dvIpaf2XI3jjIWZpf6nWYPrV%2FxZHXsfE1EKJQtdi%2BhtpTTyH9jqEjbABKfdheXAY319iR4J0chOGMueIAeoc5tvn9QolZ0QnlSg6OvBSVsqlXWoH8r5Mwd4TWBWcqq%2F4j29EVHvk5DoDRxyfnxv1jeDscIPZjDSDDJSeuWXRm3oExAfbH2WyPJpVJhHudhM0AQVAhbe%2B6F%2F%2BXeqxgrjHGdUZlT97pTFADnLzGmneyVUJs0l4zulZ1NV7Mb48BrLsxEVZYHF9leq2Yp9FurC%2BeMoXFtlfRrwC7cqvY3zpOF%2B9x3m2jE0rvtei19oka8AlTzuUXS4BohepzkLd6fUKzbpiivyJS1fY%2BmnPT64GstV3adlkUPO5lanMUILlQ2cB155HEhfqEdSZMXoNtL6tesyg2QW0%2BornJ46zncJE9%2BxBEa6T457aSUPV0Xxy6bvUe1I%2BOHykhkRzE6ZbqOJ4lhuXlWRrMyx2JTmLymGY5jCQLvFmoKlEm8Pow8JKGvgY6pgGxx8zYnrR0VL%2FYcAIlgb1N43Pw304BtMgQBrMLp9BPq%2FK%2Fz04DWiz0KrvQ62A%2FbffnUAa2%2BTy9tKB%2BoNp8ZqD%2BFAGt37eOS6PE4ipDMPuyWUbiXgR3kM9098TGgCYrHnD1pXC5Yn9V%2B2qw5GvzGu16CWR0yCIKNL0b08QZeamhrvml2kL3qbJntKbdQk6J2o5WZYi1FBUC6dyVeOxWBb9d5uvvtcYr&X-Amz-Signature=be336efb6ea38952ede53c7d32a995984b5cef5fa6cd2043768e3a80e94cefb3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3UE23J%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIHyanWGIWBlUZVRosWpw53iichEPRmW1pDXreP%2B4V6WjAiBvQ1uk%2FaC3hRA2TYuPf8x4EMCHe%2FdbZCyX421YnzjjlyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRPiyr8yRt7wQPl2BKtwDfFfaSu2KkZRQossYUdlSFkM1Hh9QTMzj5%2F%2BnmJF44ovjZg9UhYtCUsCNC7MbBXjFSqyHs8l48zJdXai2Lp44zJTP6k4NFlqlH0g8D3DHx5MkSLHsHGKFnyZzD3jPp2NBjP5dvIpaf2XI3jjIWZpf6nWYPrV%2FxZHXsfE1EKJQtdi%2BhtpTTyH9jqEjbABKfdheXAY319iR4J0chOGMueIAeoc5tvn9QolZ0QnlSg6OvBSVsqlXWoH8r5Mwd4TWBWcqq%2F4j29EVHvk5DoDRxyfnxv1jeDscIPZjDSDDJSeuWXRm3oExAfbH2WyPJpVJhHudhM0AQVAhbe%2B6F%2F%2BXeqxgrjHGdUZlT97pTFADnLzGmneyVUJs0l4zulZ1NV7Mb48BrLsxEVZYHF9leq2Yp9FurC%2BeMoXFtlfRrwC7cqvY3zpOF%2B9x3m2jE0rvtei19oka8AlTzuUXS4BohepzkLd6fUKzbpiivyJS1fY%2BmnPT64GstV3adlkUPO5lanMUILlQ2cB155HEhfqEdSZMXoNtL6tesyg2QW0%2BornJ46zncJE9%2BxBEa6T457aSUPV0Xxy6bvUe1I%2BOHykhkRzE6ZbqOJ4lhuXlWRrMyx2JTmLymGY5jCQLvFmoKlEm8Pow8JKGvgY6pgGxx8zYnrR0VL%2FYcAIlgb1N43Pw304BtMgQBrMLp9BPq%2FK%2Fz04DWiz0KrvQ62A%2FbffnUAa2%2BTy9tKB%2BoNp8ZqD%2BFAGt37eOS6PE4ipDMPuyWUbiXgR3kM9098TGgCYrHnD1pXC5Yn9V%2B2qw5GvzGu16CWR0yCIKNL0b08QZeamhrvml2kL3qbJntKbdQk6J2o5WZYi1FBUC6dyVeOxWBb9d5uvvtcYr&X-Amz-Signature=b00f4caa5d14ddd4a847fdf4efe17f51ef15b31d479e48b90078d99387ef4a08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3UE23J%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIHyanWGIWBlUZVRosWpw53iichEPRmW1pDXreP%2B4V6WjAiBvQ1uk%2FaC3hRA2TYuPf8x4EMCHe%2FdbZCyX421YnzjjlyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRPiyr8yRt7wQPl2BKtwDfFfaSu2KkZRQossYUdlSFkM1Hh9QTMzj5%2F%2BnmJF44ovjZg9UhYtCUsCNC7MbBXjFSqyHs8l48zJdXai2Lp44zJTP6k4NFlqlH0g8D3DHx5MkSLHsHGKFnyZzD3jPp2NBjP5dvIpaf2XI3jjIWZpf6nWYPrV%2FxZHXsfE1EKJQtdi%2BhtpTTyH9jqEjbABKfdheXAY319iR4J0chOGMueIAeoc5tvn9QolZ0QnlSg6OvBSVsqlXWoH8r5Mwd4TWBWcqq%2F4j29EVHvk5DoDRxyfnxv1jeDscIPZjDSDDJSeuWXRm3oExAfbH2WyPJpVJhHudhM0AQVAhbe%2B6F%2F%2BXeqxgrjHGdUZlT97pTFADnLzGmneyVUJs0l4zulZ1NV7Mb48BrLsxEVZYHF9leq2Yp9FurC%2BeMoXFtlfRrwC7cqvY3zpOF%2B9x3m2jE0rvtei19oka8AlTzuUXS4BohepzkLd6fUKzbpiivyJS1fY%2BmnPT64GstV3adlkUPO5lanMUILlQ2cB155HEhfqEdSZMXoNtL6tesyg2QW0%2BornJ46zncJE9%2BxBEa6T457aSUPV0Xxy6bvUe1I%2BOHykhkRzE6ZbqOJ4lhuXlWRrMyx2JTmLymGY5jCQLvFmoKlEm8Pow8JKGvgY6pgGxx8zYnrR0VL%2FYcAIlgb1N43Pw304BtMgQBrMLp9BPq%2FK%2Fz04DWiz0KrvQ62A%2FbffnUAa2%2BTy9tKB%2BoNp8ZqD%2BFAGt37eOS6PE4ipDMPuyWUbiXgR3kM9098TGgCYrHnD1pXC5Yn9V%2B2qw5GvzGu16CWR0yCIKNL0b08QZeamhrvml2kL3qbJntKbdQk6J2o5WZYi1FBUC6dyVeOxWBb9d5uvvtcYr&X-Amz-Signature=c372bbc19e4f03d19617e25d3c74c0ab50122c697c4b1ed98d86c81580751af2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
