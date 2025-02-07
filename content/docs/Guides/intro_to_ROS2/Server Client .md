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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUU5XGC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCgBN2Ne0%2B%2BLuXbu2Vnp31BmoXUZ%2F8F9%2BfG9Wi29BbcZwIhAOllbH7icwckHsc3RmN8f3Wj%2BzJCT0yTnD37R%2BjMOslqKv8DCHYQABoMNjM3NDIzMTgzODA1IgyQ94CbcVIbBft0KFgq3AOBvKuX%2BfFJQtJR5PDFnuWQSswhf5Ltzav0IzLKmZIk9Q9KoW6Ot2iTtCLrbMR56pxc%2BmHho%2Bh%2FgzI5Bpzh%2BAwrUdcHzVDZyqV3sxg1w%2FSsfvKF59Mzg5N%2B%2BHgATThzyGeP%2FWyoEKzRRy%2BpOEkqtMKAXhVfrcNB9otR6JHrFMV0XFu1HMYnEcDGzwe5VAC17lODzl7F%2BHrrBHRNDz1C3euL3BHGeLiCCBdu6lnz6maVjwk3spBxvn0jfmyxLqiAmRLXlt4z%2FWFmKdjdfH%2FxvjTetbEZWaoYMxS2SOUB%2BFPvNcl%2BshAXIDDCwUGpwPrbE0UFmzCtKe%2FhWxpSD5mOWzul%2F6ySc%2FmDDh8dbRtUxAmYNq57GQdRWCEPDVH9YSN1eZM1YR3qY2bH5ilbKhnOFo7BKmOT%2FY6GMoIbdlM956sI9a%2BLwLgwhHvTM8H%2FaqQoXiUjaaxFAEB2v3K59H9YGBS%2BjVdm62h%2FpxSwLH%2B5HvLBJB7i2SPjzqfehVec7bTUpMmyHwa7Kov1ZnjzRV4akwhlokiPRBovj6afLATAc9uT9PoYVbt10vCs%2B%2FLXunILBtQLuWFjLiC4DMBRedYQ473ex4SdKadkITybo5vGSoDx3ujKGl4NgJM5BIpoCTDtjJi9BjqkAYwTZxQWU2oGxrLRkkzUyLgXSDv7WqzY2ZgWisNBt3mL4jKFhxjmL%2FwG1rs%2FXqNZ%2FdgdBgZtytTZad3NNmNvfyOoPhjdKHQFp4LCwAXhkb7KkSw1lrxc9Lji4%2BY8c%2FAxdNkWWT4oUjPxsBhsw5X%2BrcEodnGjo%2BVpF59hcg6qF8sAAKr%2FAf%2BegSBhScjIwzQQLpH5cVANi2FktvclDsbrIkTw%2B%2BiD&X-Amz-Signature=17ddff02706ef91319a3caecfbe08aa9f85e359178cfcc366dc04097205406d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUU5XGC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCgBN2Ne0%2B%2BLuXbu2Vnp31BmoXUZ%2F8F9%2BfG9Wi29BbcZwIhAOllbH7icwckHsc3RmN8f3Wj%2BzJCT0yTnD37R%2BjMOslqKv8DCHYQABoMNjM3NDIzMTgzODA1IgyQ94CbcVIbBft0KFgq3AOBvKuX%2BfFJQtJR5PDFnuWQSswhf5Ltzav0IzLKmZIk9Q9KoW6Ot2iTtCLrbMR56pxc%2BmHho%2Bh%2FgzI5Bpzh%2BAwrUdcHzVDZyqV3sxg1w%2FSsfvKF59Mzg5N%2B%2BHgATThzyGeP%2FWyoEKzRRy%2BpOEkqtMKAXhVfrcNB9otR6JHrFMV0XFu1HMYnEcDGzwe5VAC17lODzl7F%2BHrrBHRNDz1C3euL3BHGeLiCCBdu6lnz6maVjwk3spBxvn0jfmyxLqiAmRLXlt4z%2FWFmKdjdfH%2FxvjTetbEZWaoYMxS2SOUB%2BFPvNcl%2BshAXIDDCwUGpwPrbE0UFmzCtKe%2FhWxpSD5mOWzul%2F6ySc%2FmDDh8dbRtUxAmYNq57GQdRWCEPDVH9YSN1eZM1YR3qY2bH5ilbKhnOFo7BKmOT%2FY6GMoIbdlM956sI9a%2BLwLgwhHvTM8H%2FaqQoXiUjaaxFAEB2v3K59H9YGBS%2BjVdm62h%2FpxSwLH%2B5HvLBJB7i2SPjzqfehVec7bTUpMmyHwa7Kov1ZnjzRV4akwhlokiPRBovj6afLATAc9uT9PoYVbt10vCs%2B%2FLXunILBtQLuWFjLiC4DMBRedYQ473ex4SdKadkITybo5vGSoDx3ujKGl4NgJM5BIpoCTDtjJi9BjqkAYwTZxQWU2oGxrLRkkzUyLgXSDv7WqzY2ZgWisNBt3mL4jKFhxjmL%2FwG1rs%2FXqNZ%2FdgdBgZtytTZad3NNmNvfyOoPhjdKHQFp4LCwAXhkb7KkSw1lrxc9Lji4%2BY8c%2FAxdNkWWT4oUjPxsBhsw5X%2BrcEodnGjo%2BVpF59hcg6qF8sAAKr%2FAf%2BegSBhScjIwzQQLpH5cVANi2FktvclDsbrIkTw%2B%2BiD&X-Amz-Signature=f52dad68fb44c00d803d4dbfbdc17ae07d113de136512ac70792f4e2a19ffe68&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUU5XGC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCgBN2Ne0%2B%2BLuXbu2Vnp31BmoXUZ%2F8F9%2BfG9Wi29BbcZwIhAOllbH7icwckHsc3RmN8f3Wj%2BzJCT0yTnD37R%2BjMOslqKv8DCHYQABoMNjM3NDIzMTgzODA1IgyQ94CbcVIbBft0KFgq3AOBvKuX%2BfFJQtJR5PDFnuWQSswhf5Ltzav0IzLKmZIk9Q9KoW6Ot2iTtCLrbMR56pxc%2BmHho%2Bh%2FgzI5Bpzh%2BAwrUdcHzVDZyqV3sxg1w%2FSsfvKF59Mzg5N%2B%2BHgATThzyGeP%2FWyoEKzRRy%2BpOEkqtMKAXhVfrcNB9otR6JHrFMV0XFu1HMYnEcDGzwe5VAC17lODzl7F%2BHrrBHRNDz1C3euL3BHGeLiCCBdu6lnz6maVjwk3spBxvn0jfmyxLqiAmRLXlt4z%2FWFmKdjdfH%2FxvjTetbEZWaoYMxS2SOUB%2BFPvNcl%2BshAXIDDCwUGpwPrbE0UFmzCtKe%2FhWxpSD5mOWzul%2F6ySc%2FmDDh8dbRtUxAmYNq57GQdRWCEPDVH9YSN1eZM1YR3qY2bH5ilbKhnOFo7BKmOT%2FY6GMoIbdlM956sI9a%2BLwLgwhHvTM8H%2FaqQoXiUjaaxFAEB2v3K59H9YGBS%2BjVdm62h%2FpxSwLH%2B5HvLBJB7i2SPjzqfehVec7bTUpMmyHwa7Kov1ZnjzRV4akwhlokiPRBovj6afLATAc9uT9PoYVbt10vCs%2B%2FLXunILBtQLuWFjLiC4DMBRedYQ473ex4SdKadkITybo5vGSoDx3ujKGl4NgJM5BIpoCTDtjJi9BjqkAYwTZxQWU2oGxrLRkkzUyLgXSDv7WqzY2ZgWisNBt3mL4jKFhxjmL%2FwG1rs%2FXqNZ%2FdgdBgZtytTZad3NNmNvfyOoPhjdKHQFp4LCwAXhkb7KkSw1lrxc9Lji4%2BY8c%2FAxdNkWWT4oUjPxsBhsw5X%2BrcEodnGjo%2BVpF59hcg6qF8sAAKr%2FAf%2BegSBhScjIwzQQLpH5cVANi2FktvclDsbrIkTw%2B%2BiD&X-Amz-Signature=f5384fca7dc133cc7e2c04b3c27a7c213f2b050b836c564a924a835e3dbd954b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUU5XGC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCgBN2Ne0%2B%2BLuXbu2Vnp31BmoXUZ%2F8F9%2BfG9Wi29BbcZwIhAOllbH7icwckHsc3RmN8f3Wj%2BzJCT0yTnD37R%2BjMOslqKv8DCHYQABoMNjM3NDIzMTgzODA1IgyQ94CbcVIbBft0KFgq3AOBvKuX%2BfFJQtJR5PDFnuWQSswhf5Ltzav0IzLKmZIk9Q9KoW6Ot2iTtCLrbMR56pxc%2BmHho%2Bh%2FgzI5Bpzh%2BAwrUdcHzVDZyqV3sxg1w%2FSsfvKF59Mzg5N%2B%2BHgATThzyGeP%2FWyoEKzRRy%2BpOEkqtMKAXhVfrcNB9otR6JHrFMV0XFu1HMYnEcDGzwe5VAC17lODzl7F%2BHrrBHRNDz1C3euL3BHGeLiCCBdu6lnz6maVjwk3spBxvn0jfmyxLqiAmRLXlt4z%2FWFmKdjdfH%2FxvjTetbEZWaoYMxS2SOUB%2BFPvNcl%2BshAXIDDCwUGpwPrbE0UFmzCtKe%2FhWxpSD5mOWzul%2F6ySc%2FmDDh8dbRtUxAmYNq57GQdRWCEPDVH9YSN1eZM1YR3qY2bH5ilbKhnOFo7BKmOT%2FY6GMoIbdlM956sI9a%2BLwLgwhHvTM8H%2FaqQoXiUjaaxFAEB2v3K59H9YGBS%2BjVdm62h%2FpxSwLH%2B5HvLBJB7i2SPjzqfehVec7bTUpMmyHwa7Kov1ZnjzRV4akwhlokiPRBovj6afLATAc9uT9PoYVbt10vCs%2B%2FLXunILBtQLuWFjLiC4DMBRedYQ473ex4SdKadkITybo5vGSoDx3ujKGl4NgJM5BIpoCTDtjJi9BjqkAYwTZxQWU2oGxrLRkkzUyLgXSDv7WqzY2ZgWisNBt3mL4jKFhxjmL%2FwG1rs%2FXqNZ%2FdgdBgZtytTZad3NNmNvfyOoPhjdKHQFp4LCwAXhkb7KkSw1lrxc9Lji4%2BY8c%2FAxdNkWWT4oUjPxsBhsw5X%2BrcEodnGjo%2BVpF59hcg6qF8sAAKr%2FAf%2BegSBhScjIwzQQLpH5cVANi2FktvclDsbrIkTw%2B%2BiD&X-Amz-Signature=39a8fca5192ca4283a04446bc1984cf74c357923c6f44c607e41860c611989a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYUU5XGC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCgBN2Ne0%2B%2BLuXbu2Vnp31BmoXUZ%2F8F9%2BfG9Wi29BbcZwIhAOllbH7icwckHsc3RmN8f3Wj%2BzJCT0yTnD37R%2BjMOslqKv8DCHYQABoMNjM3NDIzMTgzODA1IgyQ94CbcVIbBft0KFgq3AOBvKuX%2BfFJQtJR5PDFnuWQSswhf5Ltzav0IzLKmZIk9Q9KoW6Ot2iTtCLrbMR56pxc%2BmHho%2Bh%2FgzI5Bpzh%2BAwrUdcHzVDZyqV3sxg1w%2FSsfvKF59Mzg5N%2B%2BHgATThzyGeP%2FWyoEKzRRy%2BpOEkqtMKAXhVfrcNB9otR6JHrFMV0XFu1HMYnEcDGzwe5VAC17lODzl7F%2BHrrBHRNDz1C3euL3BHGeLiCCBdu6lnz6maVjwk3spBxvn0jfmyxLqiAmRLXlt4z%2FWFmKdjdfH%2FxvjTetbEZWaoYMxS2SOUB%2BFPvNcl%2BshAXIDDCwUGpwPrbE0UFmzCtKe%2FhWxpSD5mOWzul%2F6ySc%2FmDDh8dbRtUxAmYNq57GQdRWCEPDVH9YSN1eZM1YR3qY2bH5ilbKhnOFo7BKmOT%2FY6GMoIbdlM956sI9a%2BLwLgwhHvTM8H%2FaqQoXiUjaaxFAEB2v3K59H9YGBS%2BjVdm62h%2FpxSwLH%2B5HvLBJB7i2SPjzqfehVec7bTUpMmyHwa7Kov1ZnjzRV4akwhlokiPRBovj6afLATAc9uT9PoYVbt10vCs%2B%2FLXunILBtQLuWFjLiC4DMBRedYQ473ex4SdKadkITybo5vGSoDx3ujKGl4NgJM5BIpoCTDtjJi9BjqkAYwTZxQWU2oGxrLRkkzUyLgXSDv7WqzY2ZgWisNBt3mL4jKFhxjmL%2FwG1rs%2FXqNZ%2FdgdBgZtytTZad3NNmNvfyOoPhjdKHQFp4LCwAXhkb7KkSw1lrxc9Lji4%2BY8c%2FAxdNkWWT4oUjPxsBhsw5X%2BrcEodnGjo%2BVpF59hcg6qF8sAAKr%2FAf%2BegSBhScjIwzQQLpH5cVANi2FktvclDsbrIkTw%2B%2BiD&X-Amz-Signature=1ec594732cc9811b748163ab01c8a35612b06520160ca0310eacd4a5150aba36&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
