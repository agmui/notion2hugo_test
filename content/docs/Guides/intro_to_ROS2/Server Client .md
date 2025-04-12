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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2RQMSE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC%2BuWMhh%2ByzXhhHV0USX2UUbI4qUmIgbYk%2B8zxTJMdn7wIhALyNSfO8bXEuAkmt6QK9GYhR726yaMIq56nu1eV0937pKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEltz7jFbY5sW6OKUq3APd4c%2FtmZqbZzEKUw3rN1bzAE8YS2Qt180sA689prKDihJdR8M1zGpTZBtX%2F2bRp%2Fp6ERXLuVzMuuJd3tTNgXZqDXhC8j9%2BRenWgOCMW2CVLN0cJOWfAtlbYqtLMsQK0AMmBU0sDef6UAhBtYv7QWnpJS95LIoz3LqtrDa932cblvPfUkE%2FUP8EvOQxXKeTcxH%2FnZDPw2e4j%2FKqTD3t2rAnNZFt1X1Zv3%2BEUyOMLLqny3J03rh17C%2BzBu6hGU%2Bai9HMtW51JgJYyOMrP2Fy6NiFmtuLpp%2Bo%2BPX0pjrCaC6CnGwbyXfVH4PdCP0hv6MOjsuZS0hml9QbwdVocdQxT0BSLxz1RSOtfIOD7lzB033hesb1Xk0hCOKEotqfKrPHiGV6opyXY3l6at1%2FP%2BV1wxpv%2FxqiBH5XOWOiSR4Lel2CkPbxIrzfcb6IzBXAA0zLtbKA5o6vQLvT5IU%2FOEt0MB0Exr6C%2BDGqk%2Bjftef1hc3cwSDsg5pLEpJnevOexOmToYXBCslf5Cqvuw6n2BJ4hAp9x3estM9w%2BxuwBp7t66%2BFSO9A90iGVYsAkjO0%2BEcSVWMh6itTiutnCikPoFVV34YfFi2XuBRfrJKT8piM8hk9sAzQohWClFyNyS5O8zCZp%2Bi%2FBjqkAVfoXBPxvqr431ZB%2FnsXqC3zdSr8PVX0zpFpFrK9mF9Ft02oP%2FScXUNVCCqBlo1fZ52LdhFwUz2i1FOkD0M%2FGfao6SqtCv4rMs2R2wJ7%2FjCMECD%2FnY2WjJrzi%2FqjJdHvXvgChQBI%2BxMFkLYZ8zzmNJszpJiO6D02lkKmlD3ybjylVKWBDV5THKY%2FtrnXVqQ3S6S%2Bo4OAt9a5%2FbfVcYPnS9RQ7534&X-Amz-Signature=4740bf046c5e60627f37cbe76fcf6d23361941dc4984b82fc48331b70e8cd99d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2RQMSE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC%2BuWMhh%2ByzXhhHV0USX2UUbI4qUmIgbYk%2B8zxTJMdn7wIhALyNSfO8bXEuAkmt6QK9GYhR726yaMIq56nu1eV0937pKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEltz7jFbY5sW6OKUq3APd4c%2FtmZqbZzEKUw3rN1bzAE8YS2Qt180sA689prKDihJdR8M1zGpTZBtX%2F2bRp%2Fp6ERXLuVzMuuJd3tTNgXZqDXhC8j9%2BRenWgOCMW2CVLN0cJOWfAtlbYqtLMsQK0AMmBU0sDef6UAhBtYv7QWnpJS95LIoz3LqtrDa932cblvPfUkE%2FUP8EvOQxXKeTcxH%2FnZDPw2e4j%2FKqTD3t2rAnNZFt1X1Zv3%2BEUyOMLLqny3J03rh17C%2BzBu6hGU%2Bai9HMtW51JgJYyOMrP2Fy6NiFmtuLpp%2Bo%2BPX0pjrCaC6CnGwbyXfVH4PdCP0hv6MOjsuZS0hml9QbwdVocdQxT0BSLxz1RSOtfIOD7lzB033hesb1Xk0hCOKEotqfKrPHiGV6opyXY3l6at1%2FP%2BV1wxpv%2FxqiBH5XOWOiSR4Lel2CkPbxIrzfcb6IzBXAA0zLtbKA5o6vQLvT5IU%2FOEt0MB0Exr6C%2BDGqk%2Bjftef1hc3cwSDsg5pLEpJnevOexOmToYXBCslf5Cqvuw6n2BJ4hAp9x3estM9w%2BxuwBp7t66%2BFSO9A90iGVYsAkjO0%2BEcSVWMh6itTiutnCikPoFVV34YfFi2XuBRfrJKT8piM8hk9sAzQohWClFyNyS5O8zCZp%2Bi%2FBjqkAVfoXBPxvqr431ZB%2FnsXqC3zdSr8PVX0zpFpFrK9mF9Ft02oP%2FScXUNVCCqBlo1fZ52LdhFwUz2i1FOkD0M%2FGfao6SqtCv4rMs2R2wJ7%2FjCMECD%2FnY2WjJrzi%2FqjJdHvXvgChQBI%2BxMFkLYZ8zzmNJszpJiO6D02lkKmlD3ybjylVKWBDV5THKY%2FtrnXVqQ3S6S%2Bo4OAt9a5%2FbfVcYPnS9RQ7534&X-Amz-Signature=bf931bf5e68f85a9a128da3c0ab1762ddc5d22e9b6cbc68934e0a999b6ea2e49&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2RQMSE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC%2BuWMhh%2ByzXhhHV0USX2UUbI4qUmIgbYk%2B8zxTJMdn7wIhALyNSfO8bXEuAkmt6QK9GYhR726yaMIq56nu1eV0937pKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEltz7jFbY5sW6OKUq3APd4c%2FtmZqbZzEKUw3rN1bzAE8YS2Qt180sA689prKDihJdR8M1zGpTZBtX%2F2bRp%2Fp6ERXLuVzMuuJd3tTNgXZqDXhC8j9%2BRenWgOCMW2CVLN0cJOWfAtlbYqtLMsQK0AMmBU0sDef6UAhBtYv7QWnpJS95LIoz3LqtrDa932cblvPfUkE%2FUP8EvOQxXKeTcxH%2FnZDPw2e4j%2FKqTD3t2rAnNZFt1X1Zv3%2BEUyOMLLqny3J03rh17C%2BzBu6hGU%2Bai9HMtW51JgJYyOMrP2Fy6NiFmtuLpp%2Bo%2BPX0pjrCaC6CnGwbyXfVH4PdCP0hv6MOjsuZS0hml9QbwdVocdQxT0BSLxz1RSOtfIOD7lzB033hesb1Xk0hCOKEotqfKrPHiGV6opyXY3l6at1%2FP%2BV1wxpv%2FxqiBH5XOWOiSR4Lel2CkPbxIrzfcb6IzBXAA0zLtbKA5o6vQLvT5IU%2FOEt0MB0Exr6C%2BDGqk%2Bjftef1hc3cwSDsg5pLEpJnevOexOmToYXBCslf5Cqvuw6n2BJ4hAp9x3estM9w%2BxuwBp7t66%2BFSO9A90iGVYsAkjO0%2BEcSVWMh6itTiutnCikPoFVV34YfFi2XuBRfrJKT8piM8hk9sAzQohWClFyNyS5O8zCZp%2Bi%2FBjqkAVfoXBPxvqr431ZB%2FnsXqC3zdSr8PVX0zpFpFrK9mF9Ft02oP%2FScXUNVCCqBlo1fZ52LdhFwUz2i1FOkD0M%2FGfao6SqtCv4rMs2R2wJ7%2FjCMECD%2FnY2WjJrzi%2FqjJdHvXvgChQBI%2BxMFkLYZ8zzmNJszpJiO6D02lkKmlD3ybjylVKWBDV5THKY%2FtrnXVqQ3S6S%2Bo4OAt9a5%2FbfVcYPnS9RQ7534&X-Amz-Signature=8f948d0f21749bb2b3cf0914e8c705c03a0a378af5e6a93e032220d67d857fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2RQMSE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC%2BuWMhh%2ByzXhhHV0USX2UUbI4qUmIgbYk%2B8zxTJMdn7wIhALyNSfO8bXEuAkmt6QK9GYhR726yaMIq56nu1eV0937pKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEltz7jFbY5sW6OKUq3APd4c%2FtmZqbZzEKUw3rN1bzAE8YS2Qt180sA689prKDihJdR8M1zGpTZBtX%2F2bRp%2Fp6ERXLuVzMuuJd3tTNgXZqDXhC8j9%2BRenWgOCMW2CVLN0cJOWfAtlbYqtLMsQK0AMmBU0sDef6UAhBtYv7QWnpJS95LIoz3LqtrDa932cblvPfUkE%2FUP8EvOQxXKeTcxH%2FnZDPw2e4j%2FKqTD3t2rAnNZFt1X1Zv3%2BEUyOMLLqny3J03rh17C%2BzBu6hGU%2Bai9HMtW51JgJYyOMrP2Fy6NiFmtuLpp%2Bo%2BPX0pjrCaC6CnGwbyXfVH4PdCP0hv6MOjsuZS0hml9QbwdVocdQxT0BSLxz1RSOtfIOD7lzB033hesb1Xk0hCOKEotqfKrPHiGV6opyXY3l6at1%2FP%2BV1wxpv%2FxqiBH5XOWOiSR4Lel2CkPbxIrzfcb6IzBXAA0zLtbKA5o6vQLvT5IU%2FOEt0MB0Exr6C%2BDGqk%2Bjftef1hc3cwSDsg5pLEpJnevOexOmToYXBCslf5Cqvuw6n2BJ4hAp9x3estM9w%2BxuwBp7t66%2BFSO9A90iGVYsAkjO0%2BEcSVWMh6itTiutnCikPoFVV34YfFi2XuBRfrJKT8piM8hk9sAzQohWClFyNyS5O8zCZp%2Bi%2FBjqkAVfoXBPxvqr431ZB%2FnsXqC3zdSr8PVX0zpFpFrK9mF9Ft02oP%2FScXUNVCCqBlo1fZ52LdhFwUz2i1FOkD0M%2FGfao6SqtCv4rMs2R2wJ7%2FjCMECD%2FnY2WjJrzi%2FqjJdHvXvgChQBI%2BxMFkLYZ8zzmNJszpJiO6D02lkKmlD3ybjylVKWBDV5THKY%2FtrnXVqQ3S6S%2Bo4OAt9a5%2FbfVcYPnS9RQ7534&X-Amz-Signature=db365786857e35dfc13cb3ce7f6b6034acd1c79a3b24567b50feb1a2ca0b776c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2RQMSE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC%2BuWMhh%2ByzXhhHV0USX2UUbI4qUmIgbYk%2B8zxTJMdn7wIhALyNSfO8bXEuAkmt6QK9GYhR726yaMIq56nu1eV0937pKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEltz7jFbY5sW6OKUq3APd4c%2FtmZqbZzEKUw3rN1bzAE8YS2Qt180sA689prKDihJdR8M1zGpTZBtX%2F2bRp%2Fp6ERXLuVzMuuJd3tTNgXZqDXhC8j9%2BRenWgOCMW2CVLN0cJOWfAtlbYqtLMsQK0AMmBU0sDef6UAhBtYv7QWnpJS95LIoz3LqtrDa932cblvPfUkE%2FUP8EvOQxXKeTcxH%2FnZDPw2e4j%2FKqTD3t2rAnNZFt1X1Zv3%2BEUyOMLLqny3J03rh17C%2BzBu6hGU%2Bai9HMtW51JgJYyOMrP2Fy6NiFmtuLpp%2Bo%2BPX0pjrCaC6CnGwbyXfVH4PdCP0hv6MOjsuZS0hml9QbwdVocdQxT0BSLxz1RSOtfIOD7lzB033hesb1Xk0hCOKEotqfKrPHiGV6opyXY3l6at1%2FP%2BV1wxpv%2FxqiBH5XOWOiSR4Lel2CkPbxIrzfcb6IzBXAA0zLtbKA5o6vQLvT5IU%2FOEt0MB0Exr6C%2BDGqk%2Bjftef1hc3cwSDsg5pLEpJnevOexOmToYXBCslf5Cqvuw6n2BJ4hAp9x3estM9w%2BxuwBp7t66%2BFSO9A90iGVYsAkjO0%2BEcSVWMh6itTiutnCikPoFVV34YfFi2XuBRfrJKT8piM8hk9sAzQohWClFyNyS5O8zCZp%2Bi%2FBjqkAVfoXBPxvqr431ZB%2FnsXqC3zdSr8PVX0zpFpFrK9mF9Ft02oP%2FScXUNVCCqBlo1fZ52LdhFwUz2i1FOkD0M%2FGfao6SqtCv4rMs2R2wJ7%2FjCMECD%2FnY2WjJrzi%2FqjJdHvXvgChQBI%2BxMFkLYZ8zzmNJszpJiO6D02lkKmlD3ybjylVKWBDV5THKY%2FtrnXVqQ3S6S%2Bo4OAt9a5%2FbfVcYPnS9RQ7534&X-Amz-Signature=a022d9c509f29cbc13eb418404ee0fc89c3f1556e02ff73a7c8f2f7eaafe2c5d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
