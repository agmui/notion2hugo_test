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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2DFTCJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDeUMLXhOBa5CeVIAwfkJYvmiwcIk82TvFSTCGUm6JFnAiAbgvg7lcJ2VWemthqrHFAU6gncogb58QbdK%2BAk9OxM5Cr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMNPkLIAG%2BokPUfBoPKtwDpbw57ab9qmMHj2EDutqD9YO0p%2FhgVEoscO%2FB63wZBu03%2FYBpZBa6l9R7waKS1ryUS2ApGkp9UgW9Q98KA8fKo9dupGT%2BBKGbKFeCIuOJSbqmDJUKNZbpZCM9b7JGghzkbVyWcHvhWiKJ3LAvEgweQB90rd61Ctv83etsfnFjY8%2BU5ADdbk8lGK2amAfoO2stxuJN2LgQjaQTliupS4T9N0zftAICHTaYOzG5BQ%2FT6lfoOQfjN7CoEzB63uDkdH5m41nzCrMm0xuuwMq5e7K0tmeCS3RueVWLmY3Kk2Wf8Y6ISyBJCh902vX%2FWuR%2FF4T1WWiXgbmB%2F892VpUqc%2B5v6zxzxVt2GpTJrfjQUucpdP2t7WBFd05IIDXljslSpeR9RwLsYUe08O%2FFL4rCOC9U%2B2Ua4D5bZYFPDY7Gc52bvfZPz4wUka8HienjF8AxJaCA%2Bs%2FOXfb60LgCXiSQxHdKjNeCAyoHzmklnOuENIMixD%2F8QjGLiJHEvFMFhbkkCy78DCKAqJR%2F7n0VOKMHNmbSzrBqFr1pVkwszvNAiaFoQF3N2E9Jk%2FkGaC3Sm0Oi9vKdzkjrgTcW1WGmsj23Anv2OmUVbawLRh2Me9ybQHxOlVhmerqerI6BAJWcgaswxf7FvQY6pgGdR8PHN%2F4jyjKwLIiD3xyGcLHajZtQcEzkKFPqaTR6qwvRRDawsy35BNyifd6W7Vv2q0gQQwy6oJTXCk3rf6U0UG9nani18AQ63Rmgn%2B%2F74NsOItp9wiRAbp%2FcmV2XmCwdEp%2Ff%2BbqQgD6U33fjQUskBNQKmYWMFnA0UijGpl36Jf9fYlIeKLmU1Q46QZMCOThv6d8Y2v3OQsVjXTdAdVZPLOvgCegX&X-Amz-Signature=f96cd4a4f8038f76ba46b87766fe81dd1c8b0258c1dd03609da83503076829d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2DFTCJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDeUMLXhOBa5CeVIAwfkJYvmiwcIk82TvFSTCGUm6JFnAiAbgvg7lcJ2VWemthqrHFAU6gncogb58QbdK%2BAk9OxM5Cr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMNPkLIAG%2BokPUfBoPKtwDpbw57ab9qmMHj2EDutqD9YO0p%2FhgVEoscO%2FB63wZBu03%2FYBpZBa6l9R7waKS1ryUS2ApGkp9UgW9Q98KA8fKo9dupGT%2BBKGbKFeCIuOJSbqmDJUKNZbpZCM9b7JGghzkbVyWcHvhWiKJ3LAvEgweQB90rd61Ctv83etsfnFjY8%2BU5ADdbk8lGK2amAfoO2stxuJN2LgQjaQTliupS4T9N0zftAICHTaYOzG5BQ%2FT6lfoOQfjN7CoEzB63uDkdH5m41nzCrMm0xuuwMq5e7K0tmeCS3RueVWLmY3Kk2Wf8Y6ISyBJCh902vX%2FWuR%2FF4T1WWiXgbmB%2F892VpUqc%2B5v6zxzxVt2GpTJrfjQUucpdP2t7WBFd05IIDXljslSpeR9RwLsYUe08O%2FFL4rCOC9U%2B2Ua4D5bZYFPDY7Gc52bvfZPz4wUka8HienjF8AxJaCA%2Bs%2FOXfb60LgCXiSQxHdKjNeCAyoHzmklnOuENIMixD%2F8QjGLiJHEvFMFhbkkCy78DCKAqJR%2F7n0VOKMHNmbSzrBqFr1pVkwszvNAiaFoQF3N2E9Jk%2FkGaC3Sm0Oi9vKdzkjrgTcW1WGmsj23Anv2OmUVbawLRh2Me9ybQHxOlVhmerqerI6BAJWcgaswxf7FvQY6pgGdR8PHN%2F4jyjKwLIiD3xyGcLHajZtQcEzkKFPqaTR6qwvRRDawsy35BNyifd6W7Vv2q0gQQwy6oJTXCk3rf6U0UG9nani18AQ63Rmgn%2B%2F74NsOItp9wiRAbp%2FcmV2XmCwdEp%2Ff%2BbqQgD6U33fjQUskBNQKmYWMFnA0UijGpl36Jf9fYlIeKLmU1Q46QZMCOThv6d8Y2v3OQsVjXTdAdVZPLOvgCegX&X-Amz-Signature=9203e8f5cafeb11b0009ed1b9039e3271a9337ff580767bd3ddc53ee51b217b6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2DFTCJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDeUMLXhOBa5CeVIAwfkJYvmiwcIk82TvFSTCGUm6JFnAiAbgvg7lcJ2VWemthqrHFAU6gncogb58QbdK%2BAk9OxM5Cr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMNPkLIAG%2BokPUfBoPKtwDpbw57ab9qmMHj2EDutqD9YO0p%2FhgVEoscO%2FB63wZBu03%2FYBpZBa6l9R7waKS1ryUS2ApGkp9UgW9Q98KA8fKo9dupGT%2BBKGbKFeCIuOJSbqmDJUKNZbpZCM9b7JGghzkbVyWcHvhWiKJ3LAvEgweQB90rd61Ctv83etsfnFjY8%2BU5ADdbk8lGK2amAfoO2stxuJN2LgQjaQTliupS4T9N0zftAICHTaYOzG5BQ%2FT6lfoOQfjN7CoEzB63uDkdH5m41nzCrMm0xuuwMq5e7K0tmeCS3RueVWLmY3Kk2Wf8Y6ISyBJCh902vX%2FWuR%2FF4T1WWiXgbmB%2F892VpUqc%2B5v6zxzxVt2GpTJrfjQUucpdP2t7WBFd05IIDXljslSpeR9RwLsYUe08O%2FFL4rCOC9U%2B2Ua4D5bZYFPDY7Gc52bvfZPz4wUka8HienjF8AxJaCA%2Bs%2FOXfb60LgCXiSQxHdKjNeCAyoHzmklnOuENIMixD%2F8QjGLiJHEvFMFhbkkCy78DCKAqJR%2F7n0VOKMHNmbSzrBqFr1pVkwszvNAiaFoQF3N2E9Jk%2FkGaC3Sm0Oi9vKdzkjrgTcW1WGmsj23Anv2OmUVbawLRh2Me9ybQHxOlVhmerqerI6BAJWcgaswxf7FvQY6pgGdR8PHN%2F4jyjKwLIiD3xyGcLHajZtQcEzkKFPqaTR6qwvRRDawsy35BNyifd6W7Vv2q0gQQwy6oJTXCk3rf6U0UG9nani18AQ63Rmgn%2B%2F74NsOItp9wiRAbp%2FcmV2XmCwdEp%2Ff%2BbqQgD6U33fjQUskBNQKmYWMFnA0UijGpl36Jf9fYlIeKLmU1Q46QZMCOThv6d8Y2v3OQsVjXTdAdVZPLOvgCegX&X-Amz-Signature=14d24d6a3227a8387437f6213d1607509633af58931d6e383d406dfefb695ba5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2DFTCJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDeUMLXhOBa5CeVIAwfkJYvmiwcIk82TvFSTCGUm6JFnAiAbgvg7lcJ2VWemthqrHFAU6gncogb58QbdK%2BAk9OxM5Cr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMNPkLIAG%2BokPUfBoPKtwDpbw57ab9qmMHj2EDutqD9YO0p%2FhgVEoscO%2FB63wZBu03%2FYBpZBa6l9R7waKS1ryUS2ApGkp9UgW9Q98KA8fKo9dupGT%2BBKGbKFeCIuOJSbqmDJUKNZbpZCM9b7JGghzkbVyWcHvhWiKJ3LAvEgweQB90rd61Ctv83etsfnFjY8%2BU5ADdbk8lGK2amAfoO2stxuJN2LgQjaQTliupS4T9N0zftAICHTaYOzG5BQ%2FT6lfoOQfjN7CoEzB63uDkdH5m41nzCrMm0xuuwMq5e7K0tmeCS3RueVWLmY3Kk2Wf8Y6ISyBJCh902vX%2FWuR%2FF4T1WWiXgbmB%2F892VpUqc%2B5v6zxzxVt2GpTJrfjQUucpdP2t7WBFd05IIDXljslSpeR9RwLsYUe08O%2FFL4rCOC9U%2B2Ua4D5bZYFPDY7Gc52bvfZPz4wUka8HienjF8AxJaCA%2Bs%2FOXfb60LgCXiSQxHdKjNeCAyoHzmklnOuENIMixD%2F8QjGLiJHEvFMFhbkkCy78DCKAqJR%2F7n0VOKMHNmbSzrBqFr1pVkwszvNAiaFoQF3N2E9Jk%2FkGaC3Sm0Oi9vKdzkjrgTcW1WGmsj23Anv2OmUVbawLRh2Me9ybQHxOlVhmerqerI6BAJWcgaswxf7FvQY6pgGdR8PHN%2F4jyjKwLIiD3xyGcLHajZtQcEzkKFPqaTR6qwvRRDawsy35BNyifd6W7Vv2q0gQQwy6oJTXCk3rf6U0UG9nani18AQ63Rmgn%2B%2F74NsOItp9wiRAbp%2FcmV2XmCwdEp%2Ff%2BbqQgD6U33fjQUskBNQKmYWMFnA0UijGpl36Jf9fYlIeKLmU1Q46QZMCOThv6d8Y2v3OQsVjXTdAdVZPLOvgCegX&X-Amz-Signature=cbba8d2f86b332c2539a88d90467f0ce2248179d64fe25ac5fc6e9a1bc63ad8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2DFTCJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDeUMLXhOBa5CeVIAwfkJYvmiwcIk82TvFSTCGUm6JFnAiAbgvg7lcJ2VWemthqrHFAU6gncogb58QbdK%2BAk9OxM5Cr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMNPkLIAG%2BokPUfBoPKtwDpbw57ab9qmMHj2EDutqD9YO0p%2FhgVEoscO%2FB63wZBu03%2FYBpZBa6l9R7waKS1ryUS2ApGkp9UgW9Q98KA8fKo9dupGT%2BBKGbKFeCIuOJSbqmDJUKNZbpZCM9b7JGghzkbVyWcHvhWiKJ3LAvEgweQB90rd61Ctv83etsfnFjY8%2BU5ADdbk8lGK2amAfoO2stxuJN2LgQjaQTliupS4T9N0zftAICHTaYOzG5BQ%2FT6lfoOQfjN7CoEzB63uDkdH5m41nzCrMm0xuuwMq5e7K0tmeCS3RueVWLmY3Kk2Wf8Y6ISyBJCh902vX%2FWuR%2FF4T1WWiXgbmB%2F892VpUqc%2B5v6zxzxVt2GpTJrfjQUucpdP2t7WBFd05IIDXljslSpeR9RwLsYUe08O%2FFL4rCOC9U%2B2Ua4D5bZYFPDY7Gc52bvfZPz4wUka8HienjF8AxJaCA%2Bs%2FOXfb60LgCXiSQxHdKjNeCAyoHzmklnOuENIMixD%2F8QjGLiJHEvFMFhbkkCy78DCKAqJR%2F7n0VOKMHNmbSzrBqFr1pVkwszvNAiaFoQF3N2E9Jk%2FkGaC3Sm0Oi9vKdzkjrgTcW1WGmsj23Anv2OmUVbawLRh2Me9ybQHxOlVhmerqerI6BAJWcgaswxf7FvQY6pgGdR8PHN%2F4jyjKwLIiD3xyGcLHajZtQcEzkKFPqaTR6qwvRRDawsy35BNyifd6W7Vv2q0gQQwy6oJTXCk3rf6U0UG9nani18AQ63Rmgn%2B%2F74NsOItp9wiRAbp%2FcmV2XmCwdEp%2Ff%2BbqQgD6U33fjQUskBNQKmYWMFnA0UijGpl36Jf9fYlIeKLmU1Q46QZMCOThv6d8Y2v3OQsVjXTdAdVZPLOvgCegX&X-Amz-Signature=58cbca1000dafac6342da84bee41e0278d6d206cd9767982ef0fd5c9172dfad0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
