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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRNRZSU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFTyss%2FJFux6Oe9%2F7rjptcQmQAjf41cMvCcPAqcKI1nlAiEAmWsrRUz%2Bfa6djz5Tl0WYhDnuPAuSFijrU0nq4CapxMIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDPvB%2FCbG4jCOQznpZCrcA8aM0mPsrKJ%2Fw%2Bzh4LrQLL9hJsnXKYTd2JTlWcx2mwxCLT8ZO2MqiaNqagOefGbL7Ga%2Fko%2F%2FOAidIwVz4QWi3rSTkPZhO2uzP%2FvW1f1mZ2P6r5hfcOMQPkj20VUepoxDI%2FdER9XZQG31iE9eGfCOXQvbBNhQ0Ou0RF0U9E%2BuZR7Cqperw6lzG0XGZJRhi%2F0peKPADu0GU9G6T08aPfeVnA4jJXzNDiF%2Bsjb%2BoG41a0d%2FKzdRUJ6zUBUg9VzPBibvxd%2F6YeE6Ut0j6RlT%2Bf0TS5HZL7pAlLLvnb5vnSNwSVISaKBuYjncXkzTNluBydhbvbrCoayGSkeGBKIv51zgDIndooXh25MXCbk2VzIcxWhc8kr0e1MPhkvBjfYVLuZ2GmU5XnCpFiXbXrBYi50vFTbl35ncaVoPlUCr2HG15EnTcHhouPUhcbMjXg%2FFOql%2FP4vLS5w0IE0uYWqp9WYoDJcFm7xcGfnSwMv0t7H8mo%2FM8vH%2BKUdJaAGd9%2FuqM61Ng3135nVgsIWzPMfPYAFl0d1Ec3DiviJcdP16ieBi63Orez99HZC5eN38NGrkotNzXs5A8OmFnv9urBxWKVNiwq9WpXpMqN7pqPLfxtVqFfqG3gRpNk%2FuS2hdGtSvMMfFwMQGOqUBQpC0itq4wZBbOjMc8Qgl1j%2BTuLb1kE6eG9y06IKRYF0DchuJI5bMR5%2BxnJkItaxl0LqvCz2TjCmzL8QKeel9dhf9%2FC8iCQPChJwXrGzsw%2FbSVhxTCnU1MGoRZUDRmK2GPGInhaSBgXWrMx7PBLr72Be5Rw8PQ27dgJI1VGLnLONXa6rayfdCb6YvpH6FZTWfiDe59us4f1bF872rWQ9YVgKv20Fs&X-Amz-Signature=ccd856ba97766618c300ae1e0bd46007b0f63cfb35e7199d6d25cb24aa190bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRNRZSU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFTyss%2FJFux6Oe9%2F7rjptcQmQAjf41cMvCcPAqcKI1nlAiEAmWsrRUz%2Bfa6djz5Tl0WYhDnuPAuSFijrU0nq4CapxMIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDPvB%2FCbG4jCOQznpZCrcA8aM0mPsrKJ%2Fw%2Bzh4LrQLL9hJsnXKYTd2JTlWcx2mwxCLT8ZO2MqiaNqagOefGbL7Ga%2Fko%2F%2FOAidIwVz4QWi3rSTkPZhO2uzP%2FvW1f1mZ2P6r5hfcOMQPkj20VUepoxDI%2FdER9XZQG31iE9eGfCOXQvbBNhQ0Ou0RF0U9E%2BuZR7Cqperw6lzG0XGZJRhi%2F0peKPADu0GU9G6T08aPfeVnA4jJXzNDiF%2Bsjb%2BoG41a0d%2FKzdRUJ6zUBUg9VzPBibvxd%2F6YeE6Ut0j6RlT%2Bf0TS5HZL7pAlLLvnb5vnSNwSVISaKBuYjncXkzTNluBydhbvbrCoayGSkeGBKIv51zgDIndooXh25MXCbk2VzIcxWhc8kr0e1MPhkvBjfYVLuZ2GmU5XnCpFiXbXrBYi50vFTbl35ncaVoPlUCr2HG15EnTcHhouPUhcbMjXg%2FFOql%2FP4vLS5w0IE0uYWqp9WYoDJcFm7xcGfnSwMv0t7H8mo%2FM8vH%2BKUdJaAGd9%2FuqM61Ng3135nVgsIWzPMfPYAFl0d1Ec3DiviJcdP16ieBi63Orez99HZC5eN38NGrkotNzXs5A8OmFnv9urBxWKVNiwq9WpXpMqN7pqPLfxtVqFfqG3gRpNk%2FuS2hdGtSvMMfFwMQGOqUBQpC0itq4wZBbOjMc8Qgl1j%2BTuLb1kE6eG9y06IKRYF0DchuJI5bMR5%2BxnJkItaxl0LqvCz2TjCmzL8QKeel9dhf9%2FC8iCQPChJwXrGzsw%2FbSVhxTCnU1MGoRZUDRmK2GPGInhaSBgXWrMx7PBLr72Be5Rw8PQ27dgJI1VGLnLONXa6rayfdCb6YvpH6FZTWfiDe59us4f1bF872rWQ9YVgKv20Fs&X-Amz-Signature=97c48cc133fe47d9fda6bf4eca9d9c741e9fd60b6f3eb384cadc457d1aec4436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRNRZSU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFTyss%2FJFux6Oe9%2F7rjptcQmQAjf41cMvCcPAqcKI1nlAiEAmWsrRUz%2Bfa6djz5Tl0WYhDnuPAuSFijrU0nq4CapxMIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDPvB%2FCbG4jCOQznpZCrcA8aM0mPsrKJ%2Fw%2Bzh4LrQLL9hJsnXKYTd2JTlWcx2mwxCLT8ZO2MqiaNqagOefGbL7Ga%2Fko%2F%2FOAidIwVz4QWi3rSTkPZhO2uzP%2FvW1f1mZ2P6r5hfcOMQPkj20VUepoxDI%2FdER9XZQG31iE9eGfCOXQvbBNhQ0Ou0RF0U9E%2BuZR7Cqperw6lzG0XGZJRhi%2F0peKPADu0GU9G6T08aPfeVnA4jJXzNDiF%2Bsjb%2BoG41a0d%2FKzdRUJ6zUBUg9VzPBibvxd%2F6YeE6Ut0j6RlT%2Bf0TS5HZL7pAlLLvnb5vnSNwSVISaKBuYjncXkzTNluBydhbvbrCoayGSkeGBKIv51zgDIndooXh25MXCbk2VzIcxWhc8kr0e1MPhkvBjfYVLuZ2GmU5XnCpFiXbXrBYi50vFTbl35ncaVoPlUCr2HG15EnTcHhouPUhcbMjXg%2FFOql%2FP4vLS5w0IE0uYWqp9WYoDJcFm7xcGfnSwMv0t7H8mo%2FM8vH%2BKUdJaAGd9%2FuqM61Ng3135nVgsIWzPMfPYAFl0d1Ec3DiviJcdP16ieBi63Orez99HZC5eN38NGrkotNzXs5A8OmFnv9urBxWKVNiwq9WpXpMqN7pqPLfxtVqFfqG3gRpNk%2FuS2hdGtSvMMfFwMQGOqUBQpC0itq4wZBbOjMc8Qgl1j%2BTuLb1kE6eG9y06IKRYF0DchuJI5bMR5%2BxnJkItaxl0LqvCz2TjCmzL8QKeel9dhf9%2FC8iCQPChJwXrGzsw%2FbSVhxTCnU1MGoRZUDRmK2GPGInhaSBgXWrMx7PBLr72Be5Rw8PQ27dgJI1VGLnLONXa6rayfdCb6YvpH6FZTWfiDe59us4f1bF872rWQ9YVgKv20Fs&X-Amz-Signature=b4703135c29123e6408cc4451f76d53a5a33fd743c70a1780172d08e594177cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRNRZSU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFTyss%2FJFux6Oe9%2F7rjptcQmQAjf41cMvCcPAqcKI1nlAiEAmWsrRUz%2Bfa6djz5Tl0WYhDnuPAuSFijrU0nq4CapxMIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDPvB%2FCbG4jCOQznpZCrcA8aM0mPsrKJ%2Fw%2Bzh4LrQLL9hJsnXKYTd2JTlWcx2mwxCLT8ZO2MqiaNqagOefGbL7Ga%2Fko%2F%2FOAidIwVz4QWi3rSTkPZhO2uzP%2FvW1f1mZ2P6r5hfcOMQPkj20VUepoxDI%2FdER9XZQG31iE9eGfCOXQvbBNhQ0Ou0RF0U9E%2BuZR7Cqperw6lzG0XGZJRhi%2F0peKPADu0GU9G6T08aPfeVnA4jJXzNDiF%2Bsjb%2BoG41a0d%2FKzdRUJ6zUBUg9VzPBibvxd%2F6YeE6Ut0j6RlT%2Bf0TS5HZL7pAlLLvnb5vnSNwSVISaKBuYjncXkzTNluBydhbvbrCoayGSkeGBKIv51zgDIndooXh25MXCbk2VzIcxWhc8kr0e1MPhkvBjfYVLuZ2GmU5XnCpFiXbXrBYi50vFTbl35ncaVoPlUCr2HG15EnTcHhouPUhcbMjXg%2FFOql%2FP4vLS5w0IE0uYWqp9WYoDJcFm7xcGfnSwMv0t7H8mo%2FM8vH%2BKUdJaAGd9%2FuqM61Ng3135nVgsIWzPMfPYAFl0d1Ec3DiviJcdP16ieBi63Orez99HZC5eN38NGrkotNzXs5A8OmFnv9urBxWKVNiwq9WpXpMqN7pqPLfxtVqFfqG3gRpNk%2FuS2hdGtSvMMfFwMQGOqUBQpC0itq4wZBbOjMc8Qgl1j%2BTuLb1kE6eG9y06IKRYF0DchuJI5bMR5%2BxnJkItaxl0LqvCz2TjCmzL8QKeel9dhf9%2FC8iCQPChJwXrGzsw%2FbSVhxTCnU1MGoRZUDRmK2GPGInhaSBgXWrMx7PBLr72Be5Rw8PQ27dgJI1VGLnLONXa6rayfdCb6YvpH6FZTWfiDe59us4f1bF872rWQ9YVgKv20Fs&X-Amz-Signature=64e435a75cd1bfe0fe9784a92e55e4652cbfcabc4268a7d60afb73515357042a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRNRZSU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFTyss%2FJFux6Oe9%2F7rjptcQmQAjf41cMvCcPAqcKI1nlAiEAmWsrRUz%2Bfa6djz5Tl0WYhDnuPAuSFijrU0nq4CapxMIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDPvB%2FCbG4jCOQznpZCrcA8aM0mPsrKJ%2Fw%2Bzh4LrQLL9hJsnXKYTd2JTlWcx2mwxCLT8ZO2MqiaNqagOefGbL7Ga%2Fko%2F%2FOAidIwVz4QWi3rSTkPZhO2uzP%2FvW1f1mZ2P6r5hfcOMQPkj20VUepoxDI%2FdER9XZQG31iE9eGfCOXQvbBNhQ0Ou0RF0U9E%2BuZR7Cqperw6lzG0XGZJRhi%2F0peKPADu0GU9G6T08aPfeVnA4jJXzNDiF%2Bsjb%2BoG41a0d%2FKzdRUJ6zUBUg9VzPBibvxd%2F6YeE6Ut0j6RlT%2Bf0TS5HZL7pAlLLvnb5vnSNwSVISaKBuYjncXkzTNluBydhbvbrCoayGSkeGBKIv51zgDIndooXh25MXCbk2VzIcxWhc8kr0e1MPhkvBjfYVLuZ2GmU5XnCpFiXbXrBYi50vFTbl35ncaVoPlUCr2HG15EnTcHhouPUhcbMjXg%2FFOql%2FP4vLS5w0IE0uYWqp9WYoDJcFm7xcGfnSwMv0t7H8mo%2FM8vH%2BKUdJaAGd9%2FuqM61Ng3135nVgsIWzPMfPYAFl0d1Ec3DiviJcdP16ieBi63Orez99HZC5eN38NGrkotNzXs5A8OmFnv9urBxWKVNiwq9WpXpMqN7pqPLfxtVqFfqG3gRpNk%2FuS2hdGtSvMMfFwMQGOqUBQpC0itq4wZBbOjMc8Qgl1j%2BTuLb1kE6eG9y06IKRYF0DchuJI5bMR5%2BxnJkItaxl0LqvCz2TjCmzL8QKeel9dhf9%2FC8iCQPChJwXrGzsw%2FbSVhxTCnU1MGoRZUDRmK2GPGInhaSBgXWrMx7PBLr72Be5Rw8PQ27dgJI1VGLnLONXa6rayfdCb6YvpH6FZTWfiDe59us4f1bF872rWQ9YVgKv20Fs&X-Amz-Signature=1f697d48d8abbfdb6363eae475adb1ae3dc87e9d568a14ad5d717c80ec81d421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
