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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGL3MB2D%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6Yr7KWF%2BVdpc%2FHaViwQdXc9j4OnQ1VtGJ7S8pKlUQjAiA2r1tUu%2FaLGUoy32c5clOg%2BmxURUhAdI5FGnsmrQxCUyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2B58aZ11UKwFLrmmKtwDZWS%2FmUM2gDxD%2BfwPow6B%2BJ1EYGoeIXaI6eOxFC5QUl%2Bd7XBK6Nc%2BnJ4orepMamvLSJF6wsRyAItreSUTu3VBY6M%2FxMD7lpreL58kcFgfWV24gETmSGOPM1cRz16IjCnV%2FhbaNnc4F9DAn6H6iszSjRBJJRETx52xk6c8%2BI6fZsNinaFszFWoS%2FqX8xpGuEmCSB22pxLeHFUTZaWLGuAH9R5BT8StHWpYyvQGclfIh6grvMtojYup%2FSH%2FhLVecpobjv5FJu7MCE8P6cgGos9JMLcSFjVBmaWvR8aCfHe7r8zS7snijwP%2BK2OyewYL7loFcLAHqu2eitHVYikvUnhCtb%2BrcoiIexwUAk6LYncX8Fi5jwBMTR3mprNb2nNVKNRamp5lD5hAgHQpO95E9BSdfeYd0grc5%2F7PrD%2FL9dddRXpWRo6anN8iLARHPjS%2BqA8l%2B6l7tPiQrZ8mAqL4XTn8j7fE7kAghfAXywnwYoGltq%2FlNi7AlxpKOhVmxZ9XlBFFSnRbCpK8rqlmyQWpccKdxDoAoEFj8TwXEnDL4mtzy6HtqbI%2Btiz1mKfuFkJSWc7m8Odiw8l51Vdv8nnlx31P2Cob1Y9AL2yL6N4L7b23%2FRdq6lWapi%2FxcokGzFAwwbuEwwY6pgEGfoJDPNs0uiSB4RPsR04N087sm9H3faDlcgU7quDbDItNUN1K%2BLEAeVABINTsuX2rUg%2B%2Bpce1e%2BGWCwNn2vMcPeEHaPK%2BMMXSOl9ODcmlTgHIYeDphBgkM%2FaSsGSvw%2FEdyrxMvJfYbTGge1jX8%2FHnBAmoCYDz95DLfBCPJnCEpzBtHQIF8WDiSidw5y7RhVY%2FhrP6aHwPP%2BN8GiyVdjctu63eSZJF&X-Amz-Signature=f73ed9c89d5bc496287d9110592ddf7e8e121ccdf3da33c7fec2385263a92172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGL3MB2D%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6Yr7KWF%2BVdpc%2FHaViwQdXc9j4OnQ1VtGJ7S8pKlUQjAiA2r1tUu%2FaLGUoy32c5clOg%2BmxURUhAdI5FGnsmrQxCUyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2B58aZ11UKwFLrmmKtwDZWS%2FmUM2gDxD%2BfwPow6B%2BJ1EYGoeIXaI6eOxFC5QUl%2Bd7XBK6Nc%2BnJ4orepMamvLSJF6wsRyAItreSUTu3VBY6M%2FxMD7lpreL58kcFgfWV24gETmSGOPM1cRz16IjCnV%2FhbaNnc4F9DAn6H6iszSjRBJJRETx52xk6c8%2BI6fZsNinaFszFWoS%2FqX8xpGuEmCSB22pxLeHFUTZaWLGuAH9R5BT8StHWpYyvQGclfIh6grvMtojYup%2FSH%2FhLVecpobjv5FJu7MCE8P6cgGos9JMLcSFjVBmaWvR8aCfHe7r8zS7snijwP%2BK2OyewYL7loFcLAHqu2eitHVYikvUnhCtb%2BrcoiIexwUAk6LYncX8Fi5jwBMTR3mprNb2nNVKNRamp5lD5hAgHQpO95E9BSdfeYd0grc5%2F7PrD%2FL9dddRXpWRo6anN8iLARHPjS%2BqA8l%2B6l7tPiQrZ8mAqL4XTn8j7fE7kAghfAXywnwYoGltq%2FlNi7AlxpKOhVmxZ9XlBFFSnRbCpK8rqlmyQWpccKdxDoAoEFj8TwXEnDL4mtzy6HtqbI%2Btiz1mKfuFkJSWc7m8Odiw8l51Vdv8nnlx31P2Cob1Y9AL2yL6N4L7b23%2FRdq6lWapi%2FxcokGzFAwwbuEwwY6pgEGfoJDPNs0uiSB4RPsR04N087sm9H3faDlcgU7quDbDItNUN1K%2BLEAeVABINTsuX2rUg%2B%2Bpce1e%2BGWCwNn2vMcPeEHaPK%2BMMXSOl9ODcmlTgHIYeDphBgkM%2FaSsGSvw%2FEdyrxMvJfYbTGge1jX8%2FHnBAmoCYDz95DLfBCPJnCEpzBtHQIF8WDiSidw5y7RhVY%2FhrP6aHwPP%2BN8GiyVdjctu63eSZJF&X-Amz-Signature=13f45fa6cf7ccc5b3acc78450731e284736767e99041506d0a3b3a19a0d0ab41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGL3MB2D%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6Yr7KWF%2BVdpc%2FHaViwQdXc9j4OnQ1VtGJ7S8pKlUQjAiA2r1tUu%2FaLGUoy32c5clOg%2BmxURUhAdI5FGnsmrQxCUyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2B58aZ11UKwFLrmmKtwDZWS%2FmUM2gDxD%2BfwPow6B%2BJ1EYGoeIXaI6eOxFC5QUl%2Bd7XBK6Nc%2BnJ4orepMamvLSJF6wsRyAItreSUTu3VBY6M%2FxMD7lpreL58kcFgfWV24gETmSGOPM1cRz16IjCnV%2FhbaNnc4F9DAn6H6iszSjRBJJRETx52xk6c8%2BI6fZsNinaFszFWoS%2FqX8xpGuEmCSB22pxLeHFUTZaWLGuAH9R5BT8StHWpYyvQGclfIh6grvMtojYup%2FSH%2FhLVecpobjv5FJu7MCE8P6cgGos9JMLcSFjVBmaWvR8aCfHe7r8zS7snijwP%2BK2OyewYL7loFcLAHqu2eitHVYikvUnhCtb%2BrcoiIexwUAk6LYncX8Fi5jwBMTR3mprNb2nNVKNRamp5lD5hAgHQpO95E9BSdfeYd0grc5%2F7PrD%2FL9dddRXpWRo6anN8iLARHPjS%2BqA8l%2B6l7tPiQrZ8mAqL4XTn8j7fE7kAghfAXywnwYoGltq%2FlNi7AlxpKOhVmxZ9XlBFFSnRbCpK8rqlmyQWpccKdxDoAoEFj8TwXEnDL4mtzy6HtqbI%2Btiz1mKfuFkJSWc7m8Odiw8l51Vdv8nnlx31P2Cob1Y9AL2yL6N4L7b23%2FRdq6lWapi%2FxcokGzFAwwbuEwwY6pgEGfoJDPNs0uiSB4RPsR04N087sm9H3faDlcgU7quDbDItNUN1K%2BLEAeVABINTsuX2rUg%2B%2Bpce1e%2BGWCwNn2vMcPeEHaPK%2BMMXSOl9ODcmlTgHIYeDphBgkM%2FaSsGSvw%2FEdyrxMvJfYbTGge1jX8%2FHnBAmoCYDz95DLfBCPJnCEpzBtHQIF8WDiSidw5y7RhVY%2FhrP6aHwPP%2BN8GiyVdjctu63eSZJF&X-Amz-Signature=62eaa23735c394b89811e1a3dec214310b20c0c157dee45b07b6361937181f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGL3MB2D%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6Yr7KWF%2BVdpc%2FHaViwQdXc9j4OnQ1VtGJ7S8pKlUQjAiA2r1tUu%2FaLGUoy32c5clOg%2BmxURUhAdI5FGnsmrQxCUyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2B58aZ11UKwFLrmmKtwDZWS%2FmUM2gDxD%2BfwPow6B%2BJ1EYGoeIXaI6eOxFC5QUl%2Bd7XBK6Nc%2BnJ4orepMamvLSJF6wsRyAItreSUTu3VBY6M%2FxMD7lpreL58kcFgfWV24gETmSGOPM1cRz16IjCnV%2FhbaNnc4F9DAn6H6iszSjRBJJRETx52xk6c8%2BI6fZsNinaFszFWoS%2FqX8xpGuEmCSB22pxLeHFUTZaWLGuAH9R5BT8StHWpYyvQGclfIh6grvMtojYup%2FSH%2FhLVecpobjv5FJu7MCE8P6cgGos9JMLcSFjVBmaWvR8aCfHe7r8zS7snijwP%2BK2OyewYL7loFcLAHqu2eitHVYikvUnhCtb%2BrcoiIexwUAk6LYncX8Fi5jwBMTR3mprNb2nNVKNRamp5lD5hAgHQpO95E9BSdfeYd0grc5%2F7PrD%2FL9dddRXpWRo6anN8iLARHPjS%2BqA8l%2B6l7tPiQrZ8mAqL4XTn8j7fE7kAghfAXywnwYoGltq%2FlNi7AlxpKOhVmxZ9XlBFFSnRbCpK8rqlmyQWpccKdxDoAoEFj8TwXEnDL4mtzy6HtqbI%2Btiz1mKfuFkJSWc7m8Odiw8l51Vdv8nnlx31P2Cob1Y9AL2yL6N4L7b23%2FRdq6lWapi%2FxcokGzFAwwbuEwwY6pgEGfoJDPNs0uiSB4RPsR04N087sm9H3faDlcgU7quDbDItNUN1K%2BLEAeVABINTsuX2rUg%2B%2Bpce1e%2BGWCwNn2vMcPeEHaPK%2BMMXSOl9ODcmlTgHIYeDphBgkM%2FaSsGSvw%2FEdyrxMvJfYbTGge1jX8%2FHnBAmoCYDz95DLfBCPJnCEpzBtHQIF8WDiSidw5y7RhVY%2FhrP6aHwPP%2BN8GiyVdjctu63eSZJF&X-Amz-Signature=737d83983dd57f7290e823c1580cec7dcd7b53c937d5415e24c8696cee9a8949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGL3MB2D%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6Yr7KWF%2BVdpc%2FHaViwQdXc9j4OnQ1VtGJ7S8pKlUQjAiA2r1tUu%2FaLGUoy32c5clOg%2BmxURUhAdI5FGnsmrQxCUyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2B58aZ11UKwFLrmmKtwDZWS%2FmUM2gDxD%2BfwPow6B%2BJ1EYGoeIXaI6eOxFC5QUl%2Bd7XBK6Nc%2BnJ4orepMamvLSJF6wsRyAItreSUTu3VBY6M%2FxMD7lpreL58kcFgfWV24gETmSGOPM1cRz16IjCnV%2FhbaNnc4F9DAn6H6iszSjRBJJRETx52xk6c8%2BI6fZsNinaFszFWoS%2FqX8xpGuEmCSB22pxLeHFUTZaWLGuAH9R5BT8StHWpYyvQGclfIh6grvMtojYup%2FSH%2FhLVecpobjv5FJu7MCE8P6cgGos9JMLcSFjVBmaWvR8aCfHe7r8zS7snijwP%2BK2OyewYL7loFcLAHqu2eitHVYikvUnhCtb%2BrcoiIexwUAk6LYncX8Fi5jwBMTR3mprNb2nNVKNRamp5lD5hAgHQpO95E9BSdfeYd0grc5%2F7PrD%2FL9dddRXpWRo6anN8iLARHPjS%2BqA8l%2B6l7tPiQrZ8mAqL4XTn8j7fE7kAghfAXywnwYoGltq%2FlNi7AlxpKOhVmxZ9XlBFFSnRbCpK8rqlmyQWpccKdxDoAoEFj8TwXEnDL4mtzy6HtqbI%2Btiz1mKfuFkJSWc7m8Odiw8l51Vdv8nnlx31P2Cob1Y9AL2yL6N4L7b23%2FRdq6lWapi%2FxcokGzFAwwbuEwwY6pgEGfoJDPNs0uiSB4RPsR04N087sm9H3faDlcgU7quDbDItNUN1K%2BLEAeVABINTsuX2rUg%2B%2Bpce1e%2BGWCwNn2vMcPeEHaPK%2BMMXSOl9ODcmlTgHIYeDphBgkM%2FaSsGSvw%2FEdyrxMvJfYbTGge1jX8%2FHnBAmoCYDz95DLfBCPJnCEpzBtHQIF8WDiSidw5y7RhVY%2FhrP6aHwPP%2BN8GiyVdjctu63eSZJF&X-Amz-Signature=e148fbff384e9ec366d7c3505c9ca13794c84c0cedfb8c2ea586aeb52ed96e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
