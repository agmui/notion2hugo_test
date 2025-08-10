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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWG4B53%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFU00%2Fl11khbl%2FVLXwiLgFKkDhyOIlx1ShO2oMCe3JRkAiEA6g0cpWYs3dx9XZO8crne4xoOsmx2s0%2FoNvOXOOpZFKwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh0Pu8kW1QdbdwQkyrcAwGBM9bsgYWKpRBuCU1J8aKi%2F75eyUkfzAyUKKACdoux2QbqmXpSVajqWBNDRw%2B%2B3Eia6qyOEPEDy2ZZDUNlzTWjDOHAaPSLlE70Tq5Qb5SYgwj9Ezhqy9Jdt1E669qzClt6eAMTPJQ5v5bqJ71eTmYB3n9mleUk9e2yDkJISdPEgozsJLwnwVba5cS1tTX5nTLobJxKUEU2blLcSRE6RjOAVoL0RXD2Xv%2BBpnlOs2yCIee42a57bT0hK2ufBGl%2B%2ByQG%2FJ9UDLWlAN3WAajE3pQ%2BcA%2F37evOio0dZ29RitK8HohFFZ94%2FiiC63WQOKQwgmbZYX%2BFJArOVtNLCwdP11tWlaD%2ByPJTrxZTchyGKxz%2BM60YGpANMNltKYWXgYy9%2BKkIWeH%2FXYopPoCAQik4auganQ45tBVlxfZcTInyNmaRaklhGndHFaMiDJoNiWCvDo6H0rl4g51g4tSKqLGOqfKH65msXPlvKwOZhbXn7qC6MsfmdT3o%2FS98D37LGBS4GL39ilky3dYcJbwGp5SfycYQiiR43o8pVnmhzvkK0dzwxHJsxBWuD4kcvwCIvxFA9WgYqHu5xh98fQt%2FgY2av9Ucpv6wwIW6CDeQ%2BFnxZjLmseAX8PClvS5EKn6BMLfR4MQGOqUBI7OjcEbBoBkV8owKZrpi4St8wRzN1NDd8iHgOZKFySkxmtjG9z3Qb8RxH8sc4m0V8et1FPXpfMT%2F1U%2FiB5%2Bu5twQK8Nb7QmNFReYVsD3nXV9%2BLEemNRAmhSkHeJoENEpnam9sKhbT4638%2B21wn2tOBXbJvxUizBt5dIR%2Bt2%2BQya0sFT9E%2Ff14ffDu8Z8oM71hG4U%2FLN2qFst72LLOP%2BwLGLr5Omg&X-Amz-Signature=b56f01fb1eb9d603fdadb0bd37b18d5128943e6017867f18f8ecb59850187e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWG4B53%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFU00%2Fl11khbl%2FVLXwiLgFKkDhyOIlx1ShO2oMCe3JRkAiEA6g0cpWYs3dx9XZO8crne4xoOsmx2s0%2FoNvOXOOpZFKwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh0Pu8kW1QdbdwQkyrcAwGBM9bsgYWKpRBuCU1J8aKi%2F75eyUkfzAyUKKACdoux2QbqmXpSVajqWBNDRw%2B%2B3Eia6qyOEPEDy2ZZDUNlzTWjDOHAaPSLlE70Tq5Qb5SYgwj9Ezhqy9Jdt1E669qzClt6eAMTPJQ5v5bqJ71eTmYB3n9mleUk9e2yDkJISdPEgozsJLwnwVba5cS1tTX5nTLobJxKUEU2blLcSRE6RjOAVoL0RXD2Xv%2BBpnlOs2yCIee42a57bT0hK2ufBGl%2B%2ByQG%2FJ9UDLWlAN3WAajE3pQ%2BcA%2F37evOio0dZ29RitK8HohFFZ94%2FiiC63WQOKQwgmbZYX%2BFJArOVtNLCwdP11tWlaD%2ByPJTrxZTchyGKxz%2BM60YGpANMNltKYWXgYy9%2BKkIWeH%2FXYopPoCAQik4auganQ45tBVlxfZcTInyNmaRaklhGndHFaMiDJoNiWCvDo6H0rl4g51g4tSKqLGOqfKH65msXPlvKwOZhbXn7qC6MsfmdT3o%2FS98D37LGBS4GL39ilky3dYcJbwGp5SfycYQiiR43o8pVnmhzvkK0dzwxHJsxBWuD4kcvwCIvxFA9WgYqHu5xh98fQt%2FgY2av9Ucpv6wwIW6CDeQ%2BFnxZjLmseAX8PClvS5EKn6BMLfR4MQGOqUBI7OjcEbBoBkV8owKZrpi4St8wRzN1NDd8iHgOZKFySkxmtjG9z3Qb8RxH8sc4m0V8et1FPXpfMT%2F1U%2FiB5%2Bu5twQK8Nb7QmNFReYVsD3nXV9%2BLEemNRAmhSkHeJoENEpnam9sKhbT4638%2B21wn2tOBXbJvxUizBt5dIR%2Bt2%2BQya0sFT9E%2Ff14ffDu8Z8oM71hG4U%2FLN2qFst72LLOP%2BwLGLr5Omg&X-Amz-Signature=841235a99d1927ff31050e7a5238a2ce57a0983b982593dfa9e450a55fe51f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWG4B53%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFU00%2Fl11khbl%2FVLXwiLgFKkDhyOIlx1ShO2oMCe3JRkAiEA6g0cpWYs3dx9XZO8crne4xoOsmx2s0%2FoNvOXOOpZFKwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh0Pu8kW1QdbdwQkyrcAwGBM9bsgYWKpRBuCU1J8aKi%2F75eyUkfzAyUKKACdoux2QbqmXpSVajqWBNDRw%2B%2B3Eia6qyOEPEDy2ZZDUNlzTWjDOHAaPSLlE70Tq5Qb5SYgwj9Ezhqy9Jdt1E669qzClt6eAMTPJQ5v5bqJ71eTmYB3n9mleUk9e2yDkJISdPEgozsJLwnwVba5cS1tTX5nTLobJxKUEU2blLcSRE6RjOAVoL0RXD2Xv%2BBpnlOs2yCIee42a57bT0hK2ufBGl%2B%2ByQG%2FJ9UDLWlAN3WAajE3pQ%2BcA%2F37evOio0dZ29RitK8HohFFZ94%2FiiC63WQOKQwgmbZYX%2BFJArOVtNLCwdP11tWlaD%2ByPJTrxZTchyGKxz%2BM60YGpANMNltKYWXgYy9%2BKkIWeH%2FXYopPoCAQik4auganQ45tBVlxfZcTInyNmaRaklhGndHFaMiDJoNiWCvDo6H0rl4g51g4tSKqLGOqfKH65msXPlvKwOZhbXn7qC6MsfmdT3o%2FS98D37LGBS4GL39ilky3dYcJbwGp5SfycYQiiR43o8pVnmhzvkK0dzwxHJsxBWuD4kcvwCIvxFA9WgYqHu5xh98fQt%2FgY2av9Ucpv6wwIW6CDeQ%2BFnxZjLmseAX8PClvS5EKn6BMLfR4MQGOqUBI7OjcEbBoBkV8owKZrpi4St8wRzN1NDd8iHgOZKFySkxmtjG9z3Qb8RxH8sc4m0V8et1FPXpfMT%2F1U%2FiB5%2Bu5twQK8Nb7QmNFReYVsD3nXV9%2BLEemNRAmhSkHeJoENEpnam9sKhbT4638%2B21wn2tOBXbJvxUizBt5dIR%2Bt2%2BQya0sFT9E%2Ff14ffDu8Z8oM71hG4U%2FLN2qFst72LLOP%2BwLGLr5Omg&X-Amz-Signature=af48060448d5ebac141e380f94476926689eb9319a3a0326809653b33ca601bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWG4B53%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFU00%2Fl11khbl%2FVLXwiLgFKkDhyOIlx1ShO2oMCe3JRkAiEA6g0cpWYs3dx9XZO8crne4xoOsmx2s0%2FoNvOXOOpZFKwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh0Pu8kW1QdbdwQkyrcAwGBM9bsgYWKpRBuCU1J8aKi%2F75eyUkfzAyUKKACdoux2QbqmXpSVajqWBNDRw%2B%2B3Eia6qyOEPEDy2ZZDUNlzTWjDOHAaPSLlE70Tq5Qb5SYgwj9Ezhqy9Jdt1E669qzClt6eAMTPJQ5v5bqJ71eTmYB3n9mleUk9e2yDkJISdPEgozsJLwnwVba5cS1tTX5nTLobJxKUEU2blLcSRE6RjOAVoL0RXD2Xv%2BBpnlOs2yCIee42a57bT0hK2ufBGl%2B%2ByQG%2FJ9UDLWlAN3WAajE3pQ%2BcA%2F37evOio0dZ29RitK8HohFFZ94%2FiiC63WQOKQwgmbZYX%2BFJArOVtNLCwdP11tWlaD%2ByPJTrxZTchyGKxz%2BM60YGpANMNltKYWXgYy9%2BKkIWeH%2FXYopPoCAQik4auganQ45tBVlxfZcTInyNmaRaklhGndHFaMiDJoNiWCvDo6H0rl4g51g4tSKqLGOqfKH65msXPlvKwOZhbXn7qC6MsfmdT3o%2FS98D37LGBS4GL39ilky3dYcJbwGp5SfycYQiiR43o8pVnmhzvkK0dzwxHJsxBWuD4kcvwCIvxFA9WgYqHu5xh98fQt%2FgY2av9Ucpv6wwIW6CDeQ%2BFnxZjLmseAX8PClvS5EKn6BMLfR4MQGOqUBI7OjcEbBoBkV8owKZrpi4St8wRzN1NDd8iHgOZKFySkxmtjG9z3Qb8RxH8sc4m0V8et1FPXpfMT%2F1U%2FiB5%2Bu5twQK8Nb7QmNFReYVsD3nXV9%2BLEemNRAmhSkHeJoENEpnam9sKhbT4638%2B21wn2tOBXbJvxUizBt5dIR%2Bt2%2BQya0sFT9E%2Ff14ffDu8Z8oM71hG4U%2FLN2qFst72LLOP%2BwLGLr5Omg&X-Amz-Signature=61260526e64fd1e9f611e2b30e5ad9f95eb2026d6bccf7df4c1c91def0e8e1f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWG4B53%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFU00%2Fl11khbl%2FVLXwiLgFKkDhyOIlx1ShO2oMCe3JRkAiEA6g0cpWYs3dx9XZO8crne4xoOsmx2s0%2FoNvOXOOpZFKwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh0Pu8kW1QdbdwQkyrcAwGBM9bsgYWKpRBuCU1J8aKi%2F75eyUkfzAyUKKACdoux2QbqmXpSVajqWBNDRw%2B%2B3Eia6qyOEPEDy2ZZDUNlzTWjDOHAaPSLlE70Tq5Qb5SYgwj9Ezhqy9Jdt1E669qzClt6eAMTPJQ5v5bqJ71eTmYB3n9mleUk9e2yDkJISdPEgozsJLwnwVba5cS1tTX5nTLobJxKUEU2blLcSRE6RjOAVoL0RXD2Xv%2BBpnlOs2yCIee42a57bT0hK2ufBGl%2B%2ByQG%2FJ9UDLWlAN3WAajE3pQ%2BcA%2F37evOio0dZ29RitK8HohFFZ94%2FiiC63WQOKQwgmbZYX%2BFJArOVtNLCwdP11tWlaD%2ByPJTrxZTchyGKxz%2BM60YGpANMNltKYWXgYy9%2BKkIWeH%2FXYopPoCAQik4auganQ45tBVlxfZcTInyNmaRaklhGndHFaMiDJoNiWCvDo6H0rl4g51g4tSKqLGOqfKH65msXPlvKwOZhbXn7qC6MsfmdT3o%2FS98D37LGBS4GL39ilky3dYcJbwGp5SfycYQiiR43o8pVnmhzvkK0dzwxHJsxBWuD4kcvwCIvxFA9WgYqHu5xh98fQt%2FgY2av9Ucpv6wwIW6CDeQ%2BFnxZjLmseAX8PClvS5EKn6BMLfR4MQGOqUBI7OjcEbBoBkV8owKZrpi4St8wRzN1NDd8iHgOZKFySkxmtjG9z3Qb8RxH8sc4m0V8et1FPXpfMT%2F1U%2FiB5%2Bu5twQK8Nb7QmNFReYVsD3nXV9%2BLEemNRAmhSkHeJoENEpnam9sKhbT4638%2B21wn2tOBXbJvxUizBt5dIR%2Bt2%2BQya0sFT9E%2Ff14ffDu8Z8oM71hG4U%2FLN2qFst72LLOP%2BwLGLr5Omg&X-Amz-Signature=6accd2c22cf262abc36456bc9b1bab9ef6aed48cd4433ce2e0e3c63874ad1f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
