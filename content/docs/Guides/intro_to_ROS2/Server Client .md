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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CSJL3J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAvoayuyaJli00plEg3RoYYo8bxvNepcHJOd%2FskFXLGcAiA53i1xVP9NZghcaMsD6JrJZmhdcQXu40dY%2BNS%2BMX9B2iqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMztrFqC%2Bo4BSbXoiKtwDG9duuPl%2FD14kfRGPpt7u78ZD4Hn3J9rniOmbmtMMNoBAoTQ%2F0hp5NpGUAYi%2BgaR80CJYiE6Pdt2i%2Bvf8SzTBP4GJKDINmEiee42%2FUuiUchgXHdZeeDv5gSHnjp9UXIn9eXDWssP2%2BjiZ%2F%2BP1IU9n6Ja94wf0oeiTA9PYsIRcby6Teuf76qt8kN1XBSPULXBS0KL3Ze802Byyorztlkc48h8kzKS6BHGOYXDSnSaviWOm1KStRO77Cxxvx185VXPr%2BkXvap0AzJUC6LCDu2n6sjxh6uhgdyiOcDI8Kf1BoaAjYTq3LIRIUL3tX7uGYmKx9ve4aIIU1Ig1XMhNCO%2BsWJhl3sw4cQz4C%2F3m43fyvi7IQqeq5qdCLteQeNxHprNK9lpohvtHm9QEu2dJ7Bp1FIukpLT4AkSP6PyKvICV5frHKR00JSvBaTIUeQ%2FZlMDWSuYWD%2BzIg40dX8d8gOBJX2C%2FXmSzGKXWDMHa1GvYjk%2FQKeCkzaiQO6oLVnHIUDAoSZkZfxxvW%2B5YFHrwC9HC2jexFPdjO05UosTbpNkQJKB4FZz0T97pQD7r%2BHxOtRGyDTewalbUXF2skurcPHL6Q8Dg%2BzVa%2Bb5x8Nr5OiBt8%2FJtwcd7AVFvaGkfMJwwoPnSxAY6pgE7AYpvkJTTFM0tLCFtHiypXtxrRosGillE9Czvuyp7WnCgK4%2F2C%2B4U%2F5U7Er%2FpFZZfehrZus2zgI9alNbE4bDRx%2F%2B8HfuKmgOF%2F56hHxiVZoOWsz64n8dRQpvuvCZXttjjeZ4CSEsEAlm319rHeB1QT1Cy%2F4oD96vV9%2BSyMmnngJO4CuPnWtB702rU5ZrZU73bbCAgmW9ZNK3J72bnxILqi1NexFsF&X-Amz-Signature=e678216346cb607964c144fcd75f6a96a78622ceed18dbd9737ec6598b5437ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CSJL3J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAvoayuyaJli00plEg3RoYYo8bxvNepcHJOd%2FskFXLGcAiA53i1xVP9NZghcaMsD6JrJZmhdcQXu40dY%2BNS%2BMX9B2iqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMztrFqC%2Bo4BSbXoiKtwDG9duuPl%2FD14kfRGPpt7u78ZD4Hn3J9rniOmbmtMMNoBAoTQ%2F0hp5NpGUAYi%2BgaR80CJYiE6Pdt2i%2Bvf8SzTBP4GJKDINmEiee42%2FUuiUchgXHdZeeDv5gSHnjp9UXIn9eXDWssP2%2BjiZ%2F%2BP1IU9n6Ja94wf0oeiTA9PYsIRcby6Teuf76qt8kN1XBSPULXBS0KL3Ze802Byyorztlkc48h8kzKS6BHGOYXDSnSaviWOm1KStRO77Cxxvx185VXPr%2BkXvap0AzJUC6LCDu2n6sjxh6uhgdyiOcDI8Kf1BoaAjYTq3LIRIUL3tX7uGYmKx9ve4aIIU1Ig1XMhNCO%2BsWJhl3sw4cQz4C%2F3m43fyvi7IQqeq5qdCLteQeNxHprNK9lpohvtHm9QEu2dJ7Bp1FIukpLT4AkSP6PyKvICV5frHKR00JSvBaTIUeQ%2FZlMDWSuYWD%2BzIg40dX8d8gOBJX2C%2FXmSzGKXWDMHa1GvYjk%2FQKeCkzaiQO6oLVnHIUDAoSZkZfxxvW%2B5YFHrwC9HC2jexFPdjO05UosTbpNkQJKB4FZz0T97pQD7r%2BHxOtRGyDTewalbUXF2skurcPHL6Q8Dg%2BzVa%2Bb5x8Nr5OiBt8%2FJtwcd7AVFvaGkfMJwwoPnSxAY6pgE7AYpvkJTTFM0tLCFtHiypXtxrRosGillE9Czvuyp7WnCgK4%2F2C%2B4U%2F5U7Er%2FpFZZfehrZus2zgI9alNbE4bDRx%2F%2B8HfuKmgOF%2F56hHxiVZoOWsz64n8dRQpvuvCZXttjjeZ4CSEsEAlm319rHeB1QT1Cy%2F4oD96vV9%2BSyMmnngJO4CuPnWtB702rU5ZrZU73bbCAgmW9ZNK3J72bnxILqi1NexFsF&X-Amz-Signature=eed91056a88353ff8460d4d8364283cee118f8541e25b9692be8fc81e5b28065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CSJL3J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAvoayuyaJli00plEg3RoYYo8bxvNepcHJOd%2FskFXLGcAiA53i1xVP9NZghcaMsD6JrJZmhdcQXu40dY%2BNS%2BMX9B2iqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMztrFqC%2Bo4BSbXoiKtwDG9duuPl%2FD14kfRGPpt7u78ZD4Hn3J9rniOmbmtMMNoBAoTQ%2F0hp5NpGUAYi%2BgaR80CJYiE6Pdt2i%2Bvf8SzTBP4GJKDINmEiee42%2FUuiUchgXHdZeeDv5gSHnjp9UXIn9eXDWssP2%2BjiZ%2F%2BP1IU9n6Ja94wf0oeiTA9PYsIRcby6Teuf76qt8kN1XBSPULXBS0KL3Ze802Byyorztlkc48h8kzKS6BHGOYXDSnSaviWOm1KStRO77Cxxvx185VXPr%2BkXvap0AzJUC6LCDu2n6sjxh6uhgdyiOcDI8Kf1BoaAjYTq3LIRIUL3tX7uGYmKx9ve4aIIU1Ig1XMhNCO%2BsWJhl3sw4cQz4C%2F3m43fyvi7IQqeq5qdCLteQeNxHprNK9lpohvtHm9QEu2dJ7Bp1FIukpLT4AkSP6PyKvICV5frHKR00JSvBaTIUeQ%2FZlMDWSuYWD%2BzIg40dX8d8gOBJX2C%2FXmSzGKXWDMHa1GvYjk%2FQKeCkzaiQO6oLVnHIUDAoSZkZfxxvW%2B5YFHrwC9HC2jexFPdjO05UosTbpNkQJKB4FZz0T97pQD7r%2BHxOtRGyDTewalbUXF2skurcPHL6Q8Dg%2BzVa%2Bb5x8Nr5OiBt8%2FJtwcd7AVFvaGkfMJwwoPnSxAY6pgE7AYpvkJTTFM0tLCFtHiypXtxrRosGillE9Czvuyp7WnCgK4%2F2C%2B4U%2F5U7Er%2FpFZZfehrZus2zgI9alNbE4bDRx%2F%2B8HfuKmgOF%2F56hHxiVZoOWsz64n8dRQpvuvCZXttjjeZ4CSEsEAlm319rHeB1QT1Cy%2F4oD96vV9%2BSyMmnngJO4CuPnWtB702rU5ZrZU73bbCAgmW9ZNK3J72bnxILqi1NexFsF&X-Amz-Signature=1748d2016beb7518fc9069372a1d1d30cf6fb482928a2dfd51299ab7d42e1961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CSJL3J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAvoayuyaJli00plEg3RoYYo8bxvNepcHJOd%2FskFXLGcAiA53i1xVP9NZghcaMsD6JrJZmhdcQXu40dY%2BNS%2BMX9B2iqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMztrFqC%2Bo4BSbXoiKtwDG9duuPl%2FD14kfRGPpt7u78ZD4Hn3J9rniOmbmtMMNoBAoTQ%2F0hp5NpGUAYi%2BgaR80CJYiE6Pdt2i%2Bvf8SzTBP4GJKDINmEiee42%2FUuiUchgXHdZeeDv5gSHnjp9UXIn9eXDWssP2%2BjiZ%2F%2BP1IU9n6Ja94wf0oeiTA9PYsIRcby6Teuf76qt8kN1XBSPULXBS0KL3Ze802Byyorztlkc48h8kzKS6BHGOYXDSnSaviWOm1KStRO77Cxxvx185VXPr%2BkXvap0AzJUC6LCDu2n6sjxh6uhgdyiOcDI8Kf1BoaAjYTq3LIRIUL3tX7uGYmKx9ve4aIIU1Ig1XMhNCO%2BsWJhl3sw4cQz4C%2F3m43fyvi7IQqeq5qdCLteQeNxHprNK9lpohvtHm9QEu2dJ7Bp1FIukpLT4AkSP6PyKvICV5frHKR00JSvBaTIUeQ%2FZlMDWSuYWD%2BzIg40dX8d8gOBJX2C%2FXmSzGKXWDMHa1GvYjk%2FQKeCkzaiQO6oLVnHIUDAoSZkZfxxvW%2B5YFHrwC9HC2jexFPdjO05UosTbpNkQJKB4FZz0T97pQD7r%2BHxOtRGyDTewalbUXF2skurcPHL6Q8Dg%2BzVa%2Bb5x8Nr5OiBt8%2FJtwcd7AVFvaGkfMJwwoPnSxAY6pgE7AYpvkJTTFM0tLCFtHiypXtxrRosGillE9Czvuyp7WnCgK4%2F2C%2B4U%2F5U7Er%2FpFZZfehrZus2zgI9alNbE4bDRx%2F%2B8HfuKmgOF%2F56hHxiVZoOWsz64n8dRQpvuvCZXttjjeZ4CSEsEAlm319rHeB1QT1Cy%2F4oD96vV9%2BSyMmnngJO4CuPnWtB702rU5ZrZU73bbCAgmW9ZNK3J72bnxILqi1NexFsF&X-Amz-Signature=08daebc7eebd6402a01323d480c44410bdc74fd2b8a17ef38cbf8516777b4507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CSJL3J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAvoayuyaJli00plEg3RoYYo8bxvNepcHJOd%2FskFXLGcAiA53i1xVP9NZghcaMsD6JrJZmhdcQXu40dY%2BNS%2BMX9B2iqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMztrFqC%2Bo4BSbXoiKtwDG9duuPl%2FD14kfRGPpt7u78ZD4Hn3J9rniOmbmtMMNoBAoTQ%2F0hp5NpGUAYi%2BgaR80CJYiE6Pdt2i%2Bvf8SzTBP4GJKDINmEiee42%2FUuiUchgXHdZeeDv5gSHnjp9UXIn9eXDWssP2%2BjiZ%2F%2BP1IU9n6Ja94wf0oeiTA9PYsIRcby6Teuf76qt8kN1XBSPULXBS0KL3Ze802Byyorztlkc48h8kzKS6BHGOYXDSnSaviWOm1KStRO77Cxxvx185VXPr%2BkXvap0AzJUC6LCDu2n6sjxh6uhgdyiOcDI8Kf1BoaAjYTq3LIRIUL3tX7uGYmKx9ve4aIIU1Ig1XMhNCO%2BsWJhl3sw4cQz4C%2F3m43fyvi7IQqeq5qdCLteQeNxHprNK9lpohvtHm9QEu2dJ7Bp1FIukpLT4AkSP6PyKvICV5frHKR00JSvBaTIUeQ%2FZlMDWSuYWD%2BzIg40dX8d8gOBJX2C%2FXmSzGKXWDMHa1GvYjk%2FQKeCkzaiQO6oLVnHIUDAoSZkZfxxvW%2B5YFHrwC9HC2jexFPdjO05UosTbpNkQJKB4FZz0T97pQD7r%2BHxOtRGyDTewalbUXF2skurcPHL6Q8Dg%2BzVa%2Bb5x8Nr5OiBt8%2FJtwcd7AVFvaGkfMJwwoPnSxAY6pgE7AYpvkJTTFM0tLCFtHiypXtxrRosGillE9Czvuyp7WnCgK4%2F2C%2B4U%2F5U7Er%2FpFZZfehrZus2zgI9alNbE4bDRx%2F%2B8HfuKmgOF%2F56hHxiVZoOWsz64n8dRQpvuvCZXttjjeZ4CSEsEAlm319rHeB1QT1Cy%2F4oD96vV9%2BSyMmnngJO4CuPnWtB702rU5ZrZU73bbCAgmW9ZNK3J72bnxILqi1NexFsF&X-Amz-Signature=9ffbe152060506c23d0d11a837812e7da28200a77eed3b7c4a1bf2fc7d214c28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
