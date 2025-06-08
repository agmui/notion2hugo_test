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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQZT6EM%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlYltDdVawV1Jo5gD6ROD%2FrqcTabaW4m%2BxYTQAJbziYAiAN0XFRsIq%2BvtXMADeqgzLblrTNi%2Bp4Ga6cWpHGYDFQOCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbF5qnz12AiM96iu2KtwDraO%2B3UUqCYVOrESsXoU%2BirxKy6kLVbRDhNj3r%2BKiv9d0qmrKNR%2FdCo3p7riDIESrRfgdPp6z2nbOJZ5xceaA%2FSpX%2FukiGG0UFsJrJD57uXceQxn69NraC6D6oeuND8Cv0%2Fkm1GChukoGlq7PUF4RvufI%2B57fzVd6bxCOhmKdDourWxeH9lcCGDFfK2Aoq065mszN9m2iMjrdzlKyeBLwFnByIVNJT3ucsSFFLV3khoSsuC6cAXWtlTnt9YpWdsE9j7xv8DEzTdj17shddx8vvgJtp4rVSJPxGWg6f%2BlM8eMDZ2T2IKkxGGJgQQBTWMy0q7%2BVxB4Ch5Ob0e2hzc4HCMUYCwdppV7C033fJ%2BnwZqXTjpeJ0rsFZ4wjgzR8tfK4s0klqNMBoAkh5n8s%2FUI1bdGm2f0ZiWrM34L%2BAqP0v4pJhbVmk%2Fm44%2BuHhqBM6%2BhJxvnQlJui4QjKr%2BOAqEsE2anGUo4cQxhCWzm0u%2Bq%2F1vtnp2NPbByCRFVMRK5Vci7SR%2FtunOFAP%2BwuXAlivLKPb1qYK6bDZoJ%2Bat1QXnb7eenR5oO8rtplXvArVVkdTzhg113gtJ%2FLskNn%2FDl3sLCsN7fz3%2BLtmrvrA92Cs4x%2FfArJG%2FbaVluNKqgM%2BuIwpLGUwgY6pgEGW6Th7UNiEv%2B5k8VvjoMDscnv1ORn6N7uXRRkBr3LHgh9cprEnuWLpoC2nIC7ew94HdRhmxqaF0sCG7SPHJ2sS%2FekqE52nnW4S2Ad3X7EyJmZhCIY0s%2FxZH%2FU37P813JAxSc56rAL2A6nlpaMnKRzNB8bblB114kMMgUkenCsfVU2G2HM42rA1daes5B%2F037RgGFcFpcKxqZr66IGEex5G8dXWdQO&X-Amz-Signature=be30f6a07ba21f3920eab17a8e61f1a08e75f1f32ba9896985e3fe2e33ca3c4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQZT6EM%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlYltDdVawV1Jo5gD6ROD%2FrqcTabaW4m%2BxYTQAJbziYAiAN0XFRsIq%2BvtXMADeqgzLblrTNi%2Bp4Ga6cWpHGYDFQOCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbF5qnz12AiM96iu2KtwDraO%2B3UUqCYVOrESsXoU%2BirxKy6kLVbRDhNj3r%2BKiv9d0qmrKNR%2FdCo3p7riDIESrRfgdPp6z2nbOJZ5xceaA%2FSpX%2FukiGG0UFsJrJD57uXceQxn69NraC6D6oeuND8Cv0%2Fkm1GChukoGlq7PUF4RvufI%2B57fzVd6bxCOhmKdDourWxeH9lcCGDFfK2Aoq065mszN9m2iMjrdzlKyeBLwFnByIVNJT3ucsSFFLV3khoSsuC6cAXWtlTnt9YpWdsE9j7xv8DEzTdj17shddx8vvgJtp4rVSJPxGWg6f%2BlM8eMDZ2T2IKkxGGJgQQBTWMy0q7%2BVxB4Ch5Ob0e2hzc4HCMUYCwdppV7C033fJ%2BnwZqXTjpeJ0rsFZ4wjgzR8tfK4s0klqNMBoAkh5n8s%2FUI1bdGm2f0ZiWrM34L%2BAqP0v4pJhbVmk%2Fm44%2BuHhqBM6%2BhJxvnQlJui4QjKr%2BOAqEsE2anGUo4cQxhCWzm0u%2Bq%2F1vtnp2NPbByCRFVMRK5Vci7SR%2FtunOFAP%2BwuXAlivLKPb1qYK6bDZoJ%2Bat1QXnb7eenR5oO8rtplXvArVVkdTzhg113gtJ%2FLskNn%2FDl3sLCsN7fz3%2BLtmrvrA92Cs4x%2FfArJG%2FbaVluNKqgM%2BuIwpLGUwgY6pgEGW6Th7UNiEv%2B5k8VvjoMDscnv1ORn6N7uXRRkBr3LHgh9cprEnuWLpoC2nIC7ew94HdRhmxqaF0sCG7SPHJ2sS%2FekqE52nnW4S2Ad3X7EyJmZhCIY0s%2FxZH%2FU37P813JAxSc56rAL2A6nlpaMnKRzNB8bblB114kMMgUkenCsfVU2G2HM42rA1daes5B%2F037RgGFcFpcKxqZr66IGEex5G8dXWdQO&X-Amz-Signature=a5425c358abfbf3a5802b587439466ffc97d2a1769712d7f540291f349cfaf77&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQZT6EM%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlYltDdVawV1Jo5gD6ROD%2FrqcTabaW4m%2BxYTQAJbziYAiAN0XFRsIq%2BvtXMADeqgzLblrTNi%2Bp4Ga6cWpHGYDFQOCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbF5qnz12AiM96iu2KtwDraO%2B3UUqCYVOrESsXoU%2BirxKy6kLVbRDhNj3r%2BKiv9d0qmrKNR%2FdCo3p7riDIESrRfgdPp6z2nbOJZ5xceaA%2FSpX%2FukiGG0UFsJrJD57uXceQxn69NraC6D6oeuND8Cv0%2Fkm1GChukoGlq7PUF4RvufI%2B57fzVd6bxCOhmKdDourWxeH9lcCGDFfK2Aoq065mszN9m2iMjrdzlKyeBLwFnByIVNJT3ucsSFFLV3khoSsuC6cAXWtlTnt9YpWdsE9j7xv8DEzTdj17shddx8vvgJtp4rVSJPxGWg6f%2BlM8eMDZ2T2IKkxGGJgQQBTWMy0q7%2BVxB4Ch5Ob0e2hzc4HCMUYCwdppV7C033fJ%2BnwZqXTjpeJ0rsFZ4wjgzR8tfK4s0klqNMBoAkh5n8s%2FUI1bdGm2f0ZiWrM34L%2BAqP0v4pJhbVmk%2Fm44%2BuHhqBM6%2BhJxvnQlJui4QjKr%2BOAqEsE2anGUo4cQxhCWzm0u%2Bq%2F1vtnp2NPbByCRFVMRK5Vci7SR%2FtunOFAP%2BwuXAlivLKPb1qYK6bDZoJ%2Bat1QXnb7eenR5oO8rtplXvArVVkdTzhg113gtJ%2FLskNn%2FDl3sLCsN7fz3%2BLtmrvrA92Cs4x%2FfArJG%2FbaVluNKqgM%2BuIwpLGUwgY6pgEGW6Th7UNiEv%2B5k8VvjoMDscnv1ORn6N7uXRRkBr3LHgh9cprEnuWLpoC2nIC7ew94HdRhmxqaF0sCG7SPHJ2sS%2FekqE52nnW4S2Ad3X7EyJmZhCIY0s%2FxZH%2FU37P813JAxSc56rAL2A6nlpaMnKRzNB8bblB114kMMgUkenCsfVU2G2HM42rA1daes5B%2F037RgGFcFpcKxqZr66IGEex5G8dXWdQO&X-Amz-Signature=1fa0a864e28241ffd320a6e393557715af04a96e75fc6b2e9a538b8e5a7cdd08&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQZT6EM%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlYltDdVawV1Jo5gD6ROD%2FrqcTabaW4m%2BxYTQAJbziYAiAN0XFRsIq%2BvtXMADeqgzLblrTNi%2Bp4Ga6cWpHGYDFQOCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbF5qnz12AiM96iu2KtwDraO%2B3UUqCYVOrESsXoU%2BirxKy6kLVbRDhNj3r%2BKiv9d0qmrKNR%2FdCo3p7riDIESrRfgdPp6z2nbOJZ5xceaA%2FSpX%2FukiGG0UFsJrJD57uXceQxn69NraC6D6oeuND8Cv0%2Fkm1GChukoGlq7PUF4RvufI%2B57fzVd6bxCOhmKdDourWxeH9lcCGDFfK2Aoq065mszN9m2iMjrdzlKyeBLwFnByIVNJT3ucsSFFLV3khoSsuC6cAXWtlTnt9YpWdsE9j7xv8DEzTdj17shddx8vvgJtp4rVSJPxGWg6f%2BlM8eMDZ2T2IKkxGGJgQQBTWMy0q7%2BVxB4Ch5Ob0e2hzc4HCMUYCwdppV7C033fJ%2BnwZqXTjpeJ0rsFZ4wjgzR8tfK4s0klqNMBoAkh5n8s%2FUI1bdGm2f0ZiWrM34L%2BAqP0v4pJhbVmk%2Fm44%2BuHhqBM6%2BhJxvnQlJui4QjKr%2BOAqEsE2anGUo4cQxhCWzm0u%2Bq%2F1vtnp2NPbByCRFVMRK5Vci7SR%2FtunOFAP%2BwuXAlivLKPb1qYK6bDZoJ%2Bat1QXnb7eenR5oO8rtplXvArVVkdTzhg113gtJ%2FLskNn%2FDl3sLCsN7fz3%2BLtmrvrA92Cs4x%2FfArJG%2FbaVluNKqgM%2BuIwpLGUwgY6pgEGW6Th7UNiEv%2B5k8VvjoMDscnv1ORn6N7uXRRkBr3LHgh9cprEnuWLpoC2nIC7ew94HdRhmxqaF0sCG7SPHJ2sS%2FekqE52nnW4S2Ad3X7EyJmZhCIY0s%2FxZH%2FU37P813JAxSc56rAL2A6nlpaMnKRzNB8bblB114kMMgUkenCsfVU2G2HM42rA1daes5B%2F037RgGFcFpcKxqZr66IGEex5G8dXWdQO&X-Amz-Signature=6e39d10e642e47299a6b9cf3cee540c9dcbde06cc6a7516ac1715bc825e5beb7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQZT6EM%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlYltDdVawV1Jo5gD6ROD%2FrqcTabaW4m%2BxYTQAJbziYAiAN0XFRsIq%2BvtXMADeqgzLblrTNi%2Bp4Ga6cWpHGYDFQOCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbF5qnz12AiM96iu2KtwDraO%2B3UUqCYVOrESsXoU%2BirxKy6kLVbRDhNj3r%2BKiv9d0qmrKNR%2FdCo3p7riDIESrRfgdPp6z2nbOJZ5xceaA%2FSpX%2FukiGG0UFsJrJD57uXceQxn69NraC6D6oeuND8Cv0%2Fkm1GChukoGlq7PUF4RvufI%2B57fzVd6bxCOhmKdDourWxeH9lcCGDFfK2Aoq065mszN9m2iMjrdzlKyeBLwFnByIVNJT3ucsSFFLV3khoSsuC6cAXWtlTnt9YpWdsE9j7xv8DEzTdj17shddx8vvgJtp4rVSJPxGWg6f%2BlM8eMDZ2T2IKkxGGJgQQBTWMy0q7%2BVxB4Ch5Ob0e2hzc4HCMUYCwdppV7C033fJ%2BnwZqXTjpeJ0rsFZ4wjgzR8tfK4s0klqNMBoAkh5n8s%2FUI1bdGm2f0ZiWrM34L%2BAqP0v4pJhbVmk%2Fm44%2BuHhqBM6%2BhJxvnQlJui4QjKr%2BOAqEsE2anGUo4cQxhCWzm0u%2Bq%2F1vtnp2NPbByCRFVMRK5Vci7SR%2FtunOFAP%2BwuXAlivLKPb1qYK6bDZoJ%2Bat1QXnb7eenR5oO8rtplXvArVVkdTzhg113gtJ%2FLskNn%2FDl3sLCsN7fz3%2BLtmrvrA92Cs4x%2FfArJG%2FbaVluNKqgM%2BuIwpLGUwgY6pgEGW6Th7UNiEv%2B5k8VvjoMDscnv1ORn6N7uXRRkBr3LHgh9cprEnuWLpoC2nIC7ew94HdRhmxqaF0sCG7SPHJ2sS%2FekqE52nnW4S2Ad3X7EyJmZhCIY0s%2FxZH%2FU37P813JAxSc56rAL2A6nlpaMnKRzNB8bblB114kMMgUkenCsfVU2G2HM42rA1daes5B%2F037RgGFcFpcKxqZr66IGEex5G8dXWdQO&X-Amz-Signature=b09a9a1a42c91d35be58ab111030ce0a5f61269011ce1dfc0620546662ae08b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
