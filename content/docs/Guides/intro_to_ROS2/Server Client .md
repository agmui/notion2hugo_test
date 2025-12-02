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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMQUX7UZ%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDp7ePnogJwbQvaOu0lknWHGacBezKiEx70n1%2BcxTfQ6QIhAJD6e7Pmkxc61D3gZzGLbSvmF%2FQZx2%2BzE7naljQNgqg%2BKv8DCAkQABoMNjM3NDIzMTgzODA1IgxBdmLWvCDVLlykb1kq3AMz2j3v9Bg72vVy7%2FeY1aKSvfkpPUqEq2TXXf%2F1JM1PH3YuoO7w%2Bqs0JXfa9KmUduWWPfASlznmBQWRlq3apNBA0Y7tLeWr2L%2BVzdfDazrtKlJcHIPvI%2FMkMWDree57oRlM1hWk%2B69fpl20aKvclIEeF%2FGl51LUcpKmHUgKgBdjiik%2ByS7vROrefGoE1%2B68cAfnNwynsGyMjVlqQl0GhcGVyNkYW7I6JWO0QqiCzWDt%2Bnp19X97Vw6PeRQUC%2B%2BwsTfzUyvqqDyjQEzC1iOWH9s9aygRC%2BWeS%2F%2FU4%2Fgbq582s6PuLpmestR%2Fhj0ANqMHqAPBg0c%2FTyzCvJuhl3vBUCEJIqtf9zkptsT7a1sY476KoFnaZ0EbdJ2rmcvy05RsqPm8ec6%2BsDcC4ywcDsEEi2yJp9GABi0ugQDVbUN9cEmdENKAJwP9gSN61ziWBAIh%2BBFyf3Q1OZGt%2BZUJ7lrceUr%2FTN%2F3%2BCBSocjxp902mNBQYJZNBAV639iaDPlN7RV6CEae1Dt5oiKRy6eWeTdHT8y0gX8PamKAOh9eAJARqB75C11zY%2FYV1Nkyq%2FR7CrwbXFeXBnlmXrDbgrC1L585XG2aAIoASJsMn2UW%2FU0Emz%2Btq7ziyRk%2FPeXrmZbsmzCn4LjJBjqkAXEnrrpexS0fL6JHwJMec6lBEWf9TbSgDSUAVKJNmpNsofEAmxXl1pVmOMCelirM2q%2BXLrYRk0p3vpLsHdh80WsLX7uhAdPgEIH6kt23U%2F9xcMGjquty%2BFSAW7gpo%2BRasnI8tgB0Lxsq3vQvD6siMb0G03435%2F%2Fh5GIrvKSX7K8BRg0cQGN2fa3ML5xOizyTy3zIUf9rYm0h8l%2Bc9DKJZKd3mEO6&X-Amz-Signature=c21daabd2b32c175aa0c5ec4b216542fda8f28c1e1bf3378295c8cba2c33ec38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMQUX7UZ%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDp7ePnogJwbQvaOu0lknWHGacBezKiEx70n1%2BcxTfQ6QIhAJD6e7Pmkxc61D3gZzGLbSvmF%2FQZx2%2BzE7naljQNgqg%2BKv8DCAkQABoMNjM3NDIzMTgzODA1IgxBdmLWvCDVLlykb1kq3AMz2j3v9Bg72vVy7%2FeY1aKSvfkpPUqEq2TXXf%2F1JM1PH3YuoO7w%2Bqs0JXfa9KmUduWWPfASlznmBQWRlq3apNBA0Y7tLeWr2L%2BVzdfDazrtKlJcHIPvI%2FMkMWDree57oRlM1hWk%2B69fpl20aKvclIEeF%2FGl51LUcpKmHUgKgBdjiik%2ByS7vROrefGoE1%2B68cAfnNwynsGyMjVlqQl0GhcGVyNkYW7I6JWO0QqiCzWDt%2Bnp19X97Vw6PeRQUC%2B%2BwsTfzUyvqqDyjQEzC1iOWH9s9aygRC%2BWeS%2F%2FU4%2Fgbq582s6PuLpmestR%2Fhj0ANqMHqAPBg0c%2FTyzCvJuhl3vBUCEJIqtf9zkptsT7a1sY476KoFnaZ0EbdJ2rmcvy05RsqPm8ec6%2BsDcC4ywcDsEEi2yJp9GABi0ugQDVbUN9cEmdENKAJwP9gSN61ziWBAIh%2BBFyf3Q1OZGt%2BZUJ7lrceUr%2FTN%2F3%2BCBSocjxp902mNBQYJZNBAV639iaDPlN7RV6CEae1Dt5oiKRy6eWeTdHT8y0gX8PamKAOh9eAJARqB75C11zY%2FYV1Nkyq%2FR7CrwbXFeXBnlmXrDbgrC1L585XG2aAIoASJsMn2UW%2FU0Emz%2Btq7ziyRk%2FPeXrmZbsmzCn4LjJBjqkAXEnrrpexS0fL6JHwJMec6lBEWf9TbSgDSUAVKJNmpNsofEAmxXl1pVmOMCelirM2q%2BXLrYRk0p3vpLsHdh80WsLX7uhAdPgEIH6kt23U%2F9xcMGjquty%2BFSAW7gpo%2BRasnI8tgB0Lxsq3vQvD6siMb0G03435%2F%2Fh5GIrvKSX7K8BRg0cQGN2fa3ML5xOizyTy3zIUf9rYm0h8l%2Bc9DKJZKd3mEO6&X-Amz-Signature=61ee918aacc49b9ac2e2ac67bc017d0ccea03ad643282d0680a92845b188f73e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMQUX7UZ%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDp7ePnogJwbQvaOu0lknWHGacBezKiEx70n1%2BcxTfQ6QIhAJD6e7Pmkxc61D3gZzGLbSvmF%2FQZx2%2BzE7naljQNgqg%2BKv8DCAkQABoMNjM3NDIzMTgzODA1IgxBdmLWvCDVLlykb1kq3AMz2j3v9Bg72vVy7%2FeY1aKSvfkpPUqEq2TXXf%2F1JM1PH3YuoO7w%2Bqs0JXfa9KmUduWWPfASlznmBQWRlq3apNBA0Y7tLeWr2L%2BVzdfDazrtKlJcHIPvI%2FMkMWDree57oRlM1hWk%2B69fpl20aKvclIEeF%2FGl51LUcpKmHUgKgBdjiik%2ByS7vROrefGoE1%2B68cAfnNwynsGyMjVlqQl0GhcGVyNkYW7I6JWO0QqiCzWDt%2Bnp19X97Vw6PeRQUC%2B%2BwsTfzUyvqqDyjQEzC1iOWH9s9aygRC%2BWeS%2F%2FU4%2Fgbq582s6PuLpmestR%2Fhj0ANqMHqAPBg0c%2FTyzCvJuhl3vBUCEJIqtf9zkptsT7a1sY476KoFnaZ0EbdJ2rmcvy05RsqPm8ec6%2BsDcC4ywcDsEEi2yJp9GABi0ugQDVbUN9cEmdENKAJwP9gSN61ziWBAIh%2BBFyf3Q1OZGt%2BZUJ7lrceUr%2FTN%2F3%2BCBSocjxp902mNBQYJZNBAV639iaDPlN7RV6CEae1Dt5oiKRy6eWeTdHT8y0gX8PamKAOh9eAJARqB75C11zY%2FYV1Nkyq%2FR7CrwbXFeXBnlmXrDbgrC1L585XG2aAIoASJsMn2UW%2FU0Emz%2Btq7ziyRk%2FPeXrmZbsmzCn4LjJBjqkAXEnrrpexS0fL6JHwJMec6lBEWf9TbSgDSUAVKJNmpNsofEAmxXl1pVmOMCelirM2q%2BXLrYRk0p3vpLsHdh80WsLX7uhAdPgEIH6kt23U%2F9xcMGjquty%2BFSAW7gpo%2BRasnI8tgB0Lxsq3vQvD6siMb0G03435%2F%2Fh5GIrvKSX7K8BRg0cQGN2fa3ML5xOizyTy3zIUf9rYm0h8l%2Bc9DKJZKd3mEO6&X-Amz-Signature=19609ba10aab6436e63bf2aa85ab5b7e36dade15acbbd614c61c26911f4e6ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMQUX7UZ%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDp7ePnogJwbQvaOu0lknWHGacBezKiEx70n1%2BcxTfQ6QIhAJD6e7Pmkxc61D3gZzGLbSvmF%2FQZx2%2BzE7naljQNgqg%2BKv8DCAkQABoMNjM3NDIzMTgzODA1IgxBdmLWvCDVLlykb1kq3AMz2j3v9Bg72vVy7%2FeY1aKSvfkpPUqEq2TXXf%2F1JM1PH3YuoO7w%2Bqs0JXfa9KmUduWWPfASlznmBQWRlq3apNBA0Y7tLeWr2L%2BVzdfDazrtKlJcHIPvI%2FMkMWDree57oRlM1hWk%2B69fpl20aKvclIEeF%2FGl51LUcpKmHUgKgBdjiik%2ByS7vROrefGoE1%2B68cAfnNwynsGyMjVlqQl0GhcGVyNkYW7I6JWO0QqiCzWDt%2Bnp19X97Vw6PeRQUC%2B%2BwsTfzUyvqqDyjQEzC1iOWH9s9aygRC%2BWeS%2F%2FU4%2Fgbq582s6PuLpmestR%2Fhj0ANqMHqAPBg0c%2FTyzCvJuhl3vBUCEJIqtf9zkptsT7a1sY476KoFnaZ0EbdJ2rmcvy05RsqPm8ec6%2BsDcC4ywcDsEEi2yJp9GABi0ugQDVbUN9cEmdENKAJwP9gSN61ziWBAIh%2BBFyf3Q1OZGt%2BZUJ7lrceUr%2FTN%2F3%2BCBSocjxp902mNBQYJZNBAV639iaDPlN7RV6CEae1Dt5oiKRy6eWeTdHT8y0gX8PamKAOh9eAJARqB75C11zY%2FYV1Nkyq%2FR7CrwbXFeXBnlmXrDbgrC1L585XG2aAIoASJsMn2UW%2FU0Emz%2Btq7ziyRk%2FPeXrmZbsmzCn4LjJBjqkAXEnrrpexS0fL6JHwJMec6lBEWf9TbSgDSUAVKJNmpNsofEAmxXl1pVmOMCelirM2q%2BXLrYRk0p3vpLsHdh80WsLX7uhAdPgEIH6kt23U%2F9xcMGjquty%2BFSAW7gpo%2BRasnI8tgB0Lxsq3vQvD6siMb0G03435%2F%2Fh5GIrvKSX7K8BRg0cQGN2fa3ML5xOizyTy3zIUf9rYm0h8l%2Bc9DKJZKd3mEO6&X-Amz-Signature=e561a47918ac89f66557445381e665b8841f7bdd0eb2416fa98eac5844c2adb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMQUX7UZ%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDp7ePnogJwbQvaOu0lknWHGacBezKiEx70n1%2BcxTfQ6QIhAJD6e7Pmkxc61D3gZzGLbSvmF%2FQZx2%2BzE7naljQNgqg%2BKv8DCAkQABoMNjM3NDIzMTgzODA1IgxBdmLWvCDVLlykb1kq3AMz2j3v9Bg72vVy7%2FeY1aKSvfkpPUqEq2TXXf%2F1JM1PH3YuoO7w%2Bqs0JXfa9KmUduWWPfASlznmBQWRlq3apNBA0Y7tLeWr2L%2BVzdfDazrtKlJcHIPvI%2FMkMWDree57oRlM1hWk%2B69fpl20aKvclIEeF%2FGl51LUcpKmHUgKgBdjiik%2ByS7vROrefGoE1%2B68cAfnNwynsGyMjVlqQl0GhcGVyNkYW7I6JWO0QqiCzWDt%2Bnp19X97Vw6PeRQUC%2B%2BwsTfzUyvqqDyjQEzC1iOWH9s9aygRC%2BWeS%2F%2FU4%2Fgbq582s6PuLpmestR%2Fhj0ANqMHqAPBg0c%2FTyzCvJuhl3vBUCEJIqtf9zkptsT7a1sY476KoFnaZ0EbdJ2rmcvy05RsqPm8ec6%2BsDcC4ywcDsEEi2yJp9GABi0ugQDVbUN9cEmdENKAJwP9gSN61ziWBAIh%2BBFyf3Q1OZGt%2BZUJ7lrceUr%2FTN%2F3%2BCBSocjxp902mNBQYJZNBAV639iaDPlN7RV6CEae1Dt5oiKRy6eWeTdHT8y0gX8PamKAOh9eAJARqB75C11zY%2FYV1Nkyq%2FR7CrwbXFeXBnlmXrDbgrC1L585XG2aAIoASJsMn2UW%2FU0Emz%2Btq7ziyRk%2FPeXrmZbsmzCn4LjJBjqkAXEnrrpexS0fL6JHwJMec6lBEWf9TbSgDSUAVKJNmpNsofEAmxXl1pVmOMCelirM2q%2BXLrYRk0p3vpLsHdh80WsLX7uhAdPgEIH6kt23U%2F9xcMGjquty%2BFSAW7gpo%2BRasnI8tgB0Lxsq3vQvD6siMb0G03435%2F%2Fh5GIrvKSX7K8BRg0cQGN2fa3ML5xOizyTy3zIUf9rYm0h8l%2Bc9DKJZKd3mEO6&X-Amz-Signature=378696e8bc1dbf754a788552abd93241baa08f891a6d81cd353c59bb26af2a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
