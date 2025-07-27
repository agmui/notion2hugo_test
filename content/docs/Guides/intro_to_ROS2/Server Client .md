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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ND72RC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDUhzm2KUxnTZ5C%2FA%2F3Uh2YJmafK9pxTIXEmToJqOGBiQIhALsMWyZMLhYftPWYXcAU%2FPsteOpkOnb0p3nrvD8AVSbuKv8DCG0QABoMNjM3NDIzMTgzODA1IgyTGBnsRFR7eFeW72oq3AMDxIYMPPnw5ki%2BbV0Xqy1mqTiLedSCXNVyZaEJQz5lrIN1pSABANb9pMTDxJXwMoYNPGunjsfd2oSEDJLGSKBi5G7ASsnZZDkLB15aThkoZJm9EFb9JKZImE0xx1t08%2FDwWHeJ2FBSq7bmmYxc1FTd002OWUgec76aQdbI7fsv0QSDIia4znQWrXP8u%2F35a%2BLH3n7Yj6hXCHU44Ec3CrvBuMrpS38w4eDoM6N05t2S%2B2F0V456RkDdKJ8rmqn30MDXkbkzK5cE5EK1hkh0RIlmJkjZHRbsGy1caSocDFnV14NA8Weo%2F8RxJ8M1ivTEDoHD%2BvJrbhdMQ%2B%2F9uo4IaD702A7kn%2BBbRxweh41jzwHHSKWz5Vcc%2F4XngKgsLA5%2BDphPKqHscSUCB8RhmlxUkuQ0UV4FOYl%2F802x%2FgZMGZkPH5PD2U6gYW8cMMXKny1O7Z5RbUoLjc2pFAO%2Brg%2BsFCMh5qDZEnvEigIoHx3u9BPSj1zrooQvHvjUtc6VsSyPjaeQq06jvMaJcXQP6FwuI1saV2P0BNd04WMcT0ZP2SdlBsGa%2ByTgVuQCtRKXXyeS1j7U%2BY8q4mXqTXMh5XDK%2B7tF%2B1GxIMGbxWphaO9rNnj2%2BZ9A%2F4atbvH%2FDXi9yjDWu5bEBjqkAUWPFu0%2BalYHXgn5W8HKZiODokjpQfla2f09D8ZnSTENcyKQsdDZxDfLMfWd7tgRx2QD26fvGHxUgMoU2xjcht9lqQsGkAI8tX7paxL02osHu%2FNVTPwN2tzQE13NYGqRrZxMdxN8c9i51p05qAPIhOs6Gvvei4B%2BwMJdWJW59zF%2FGaRKvzoTPBnx6uQJT8brSlGSlbsx2QAcvq7Omgs6J1BoPc5i&X-Amz-Signature=e7c01f18396b20656e6d6747c63867fe87ca566f3f24b74537748e056cbdde32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ND72RC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDUhzm2KUxnTZ5C%2FA%2F3Uh2YJmafK9pxTIXEmToJqOGBiQIhALsMWyZMLhYftPWYXcAU%2FPsteOpkOnb0p3nrvD8AVSbuKv8DCG0QABoMNjM3NDIzMTgzODA1IgyTGBnsRFR7eFeW72oq3AMDxIYMPPnw5ki%2BbV0Xqy1mqTiLedSCXNVyZaEJQz5lrIN1pSABANb9pMTDxJXwMoYNPGunjsfd2oSEDJLGSKBi5G7ASsnZZDkLB15aThkoZJm9EFb9JKZImE0xx1t08%2FDwWHeJ2FBSq7bmmYxc1FTd002OWUgec76aQdbI7fsv0QSDIia4znQWrXP8u%2F35a%2BLH3n7Yj6hXCHU44Ec3CrvBuMrpS38w4eDoM6N05t2S%2B2F0V456RkDdKJ8rmqn30MDXkbkzK5cE5EK1hkh0RIlmJkjZHRbsGy1caSocDFnV14NA8Weo%2F8RxJ8M1ivTEDoHD%2BvJrbhdMQ%2B%2F9uo4IaD702A7kn%2BBbRxweh41jzwHHSKWz5Vcc%2F4XngKgsLA5%2BDphPKqHscSUCB8RhmlxUkuQ0UV4FOYl%2F802x%2FgZMGZkPH5PD2U6gYW8cMMXKny1O7Z5RbUoLjc2pFAO%2Brg%2BsFCMh5qDZEnvEigIoHx3u9BPSj1zrooQvHvjUtc6VsSyPjaeQq06jvMaJcXQP6FwuI1saV2P0BNd04WMcT0ZP2SdlBsGa%2ByTgVuQCtRKXXyeS1j7U%2BY8q4mXqTXMh5XDK%2B7tF%2B1GxIMGbxWphaO9rNnj2%2BZ9A%2F4atbvH%2FDXi9yjDWu5bEBjqkAUWPFu0%2BalYHXgn5W8HKZiODokjpQfla2f09D8ZnSTENcyKQsdDZxDfLMfWd7tgRx2QD26fvGHxUgMoU2xjcht9lqQsGkAI8tX7paxL02osHu%2FNVTPwN2tzQE13NYGqRrZxMdxN8c9i51p05qAPIhOs6Gvvei4B%2BwMJdWJW59zF%2FGaRKvzoTPBnx6uQJT8brSlGSlbsx2QAcvq7Omgs6J1BoPc5i&X-Amz-Signature=9a3c9eaaff3ae6113cf27ac75322aec7504dddc01d7fc5ef19ac3b75d2e67f0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ND72RC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDUhzm2KUxnTZ5C%2FA%2F3Uh2YJmafK9pxTIXEmToJqOGBiQIhALsMWyZMLhYftPWYXcAU%2FPsteOpkOnb0p3nrvD8AVSbuKv8DCG0QABoMNjM3NDIzMTgzODA1IgyTGBnsRFR7eFeW72oq3AMDxIYMPPnw5ki%2BbV0Xqy1mqTiLedSCXNVyZaEJQz5lrIN1pSABANb9pMTDxJXwMoYNPGunjsfd2oSEDJLGSKBi5G7ASsnZZDkLB15aThkoZJm9EFb9JKZImE0xx1t08%2FDwWHeJ2FBSq7bmmYxc1FTd002OWUgec76aQdbI7fsv0QSDIia4znQWrXP8u%2F35a%2BLH3n7Yj6hXCHU44Ec3CrvBuMrpS38w4eDoM6N05t2S%2B2F0V456RkDdKJ8rmqn30MDXkbkzK5cE5EK1hkh0RIlmJkjZHRbsGy1caSocDFnV14NA8Weo%2F8RxJ8M1ivTEDoHD%2BvJrbhdMQ%2B%2F9uo4IaD702A7kn%2BBbRxweh41jzwHHSKWz5Vcc%2F4XngKgsLA5%2BDphPKqHscSUCB8RhmlxUkuQ0UV4FOYl%2F802x%2FgZMGZkPH5PD2U6gYW8cMMXKny1O7Z5RbUoLjc2pFAO%2Brg%2BsFCMh5qDZEnvEigIoHx3u9BPSj1zrooQvHvjUtc6VsSyPjaeQq06jvMaJcXQP6FwuI1saV2P0BNd04WMcT0ZP2SdlBsGa%2ByTgVuQCtRKXXyeS1j7U%2BY8q4mXqTXMh5XDK%2B7tF%2B1GxIMGbxWphaO9rNnj2%2BZ9A%2F4atbvH%2FDXi9yjDWu5bEBjqkAUWPFu0%2BalYHXgn5W8HKZiODokjpQfla2f09D8ZnSTENcyKQsdDZxDfLMfWd7tgRx2QD26fvGHxUgMoU2xjcht9lqQsGkAI8tX7paxL02osHu%2FNVTPwN2tzQE13NYGqRrZxMdxN8c9i51p05qAPIhOs6Gvvei4B%2BwMJdWJW59zF%2FGaRKvzoTPBnx6uQJT8brSlGSlbsx2QAcvq7Omgs6J1BoPc5i&X-Amz-Signature=3fe8bcc861466cb5d1ffe5fd699a5cfb04abe4803cf1eca969121a10677674e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ND72RC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDUhzm2KUxnTZ5C%2FA%2F3Uh2YJmafK9pxTIXEmToJqOGBiQIhALsMWyZMLhYftPWYXcAU%2FPsteOpkOnb0p3nrvD8AVSbuKv8DCG0QABoMNjM3NDIzMTgzODA1IgyTGBnsRFR7eFeW72oq3AMDxIYMPPnw5ki%2BbV0Xqy1mqTiLedSCXNVyZaEJQz5lrIN1pSABANb9pMTDxJXwMoYNPGunjsfd2oSEDJLGSKBi5G7ASsnZZDkLB15aThkoZJm9EFb9JKZImE0xx1t08%2FDwWHeJ2FBSq7bmmYxc1FTd002OWUgec76aQdbI7fsv0QSDIia4znQWrXP8u%2F35a%2BLH3n7Yj6hXCHU44Ec3CrvBuMrpS38w4eDoM6N05t2S%2B2F0V456RkDdKJ8rmqn30MDXkbkzK5cE5EK1hkh0RIlmJkjZHRbsGy1caSocDFnV14NA8Weo%2F8RxJ8M1ivTEDoHD%2BvJrbhdMQ%2B%2F9uo4IaD702A7kn%2BBbRxweh41jzwHHSKWz5Vcc%2F4XngKgsLA5%2BDphPKqHscSUCB8RhmlxUkuQ0UV4FOYl%2F802x%2FgZMGZkPH5PD2U6gYW8cMMXKny1O7Z5RbUoLjc2pFAO%2Brg%2BsFCMh5qDZEnvEigIoHx3u9BPSj1zrooQvHvjUtc6VsSyPjaeQq06jvMaJcXQP6FwuI1saV2P0BNd04WMcT0ZP2SdlBsGa%2ByTgVuQCtRKXXyeS1j7U%2BY8q4mXqTXMh5XDK%2B7tF%2B1GxIMGbxWphaO9rNnj2%2BZ9A%2F4atbvH%2FDXi9yjDWu5bEBjqkAUWPFu0%2BalYHXgn5W8HKZiODokjpQfla2f09D8ZnSTENcyKQsdDZxDfLMfWd7tgRx2QD26fvGHxUgMoU2xjcht9lqQsGkAI8tX7paxL02osHu%2FNVTPwN2tzQE13NYGqRrZxMdxN8c9i51p05qAPIhOs6Gvvei4B%2BwMJdWJW59zF%2FGaRKvzoTPBnx6uQJT8brSlGSlbsx2QAcvq7Omgs6J1BoPc5i&X-Amz-Signature=144d4da02c20ac775ed16c790cab9e919b75c25f7cf485a14f27d6b5e991d8fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ND72RC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDUhzm2KUxnTZ5C%2FA%2F3Uh2YJmafK9pxTIXEmToJqOGBiQIhALsMWyZMLhYftPWYXcAU%2FPsteOpkOnb0p3nrvD8AVSbuKv8DCG0QABoMNjM3NDIzMTgzODA1IgyTGBnsRFR7eFeW72oq3AMDxIYMPPnw5ki%2BbV0Xqy1mqTiLedSCXNVyZaEJQz5lrIN1pSABANb9pMTDxJXwMoYNPGunjsfd2oSEDJLGSKBi5G7ASsnZZDkLB15aThkoZJm9EFb9JKZImE0xx1t08%2FDwWHeJ2FBSq7bmmYxc1FTd002OWUgec76aQdbI7fsv0QSDIia4znQWrXP8u%2F35a%2BLH3n7Yj6hXCHU44Ec3CrvBuMrpS38w4eDoM6N05t2S%2B2F0V456RkDdKJ8rmqn30MDXkbkzK5cE5EK1hkh0RIlmJkjZHRbsGy1caSocDFnV14NA8Weo%2F8RxJ8M1ivTEDoHD%2BvJrbhdMQ%2B%2F9uo4IaD702A7kn%2BBbRxweh41jzwHHSKWz5Vcc%2F4XngKgsLA5%2BDphPKqHscSUCB8RhmlxUkuQ0UV4FOYl%2F802x%2FgZMGZkPH5PD2U6gYW8cMMXKny1O7Z5RbUoLjc2pFAO%2Brg%2BsFCMh5qDZEnvEigIoHx3u9BPSj1zrooQvHvjUtc6VsSyPjaeQq06jvMaJcXQP6FwuI1saV2P0BNd04WMcT0ZP2SdlBsGa%2ByTgVuQCtRKXXyeS1j7U%2BY8q4mXqTXMh5XDK%2B7tF%2B1GxIMGbxWphaO9rNnj2%2BZ9A%2F4atbvH%2FDXi9yjDWu5bEBjqkAUWPFu0%2BalYHXgn5W8HKZiODokjpQfla2f09D8ZnSTENcyKQsdDZxDfLMfWd7tgRx2QD26fvGHxUgMoU2xjcht9lqQsGkAI8tX7paxL02osHu%2FNVTPwN2tzQE13NYGqRrZxMdxN8c9i51p05qAPIhOs6Gvvei4B%2BwMJdWJW59zF%2FGaRKvzoTPBnx6uQJT8brSlGSlbsx2QAcvq7Omgs6J1BoPc5i&X-Amz-Signature=154f5ee7ae656bcdc7ae794add7547499025d59815cc3ad3047dee306cd7e540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
