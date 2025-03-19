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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QD2UQKP%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQChAr1VRvBd0lCPImlTepgJGyOZsm6%2BO1ovEvKKjAMTFgIhAL2hL2OZ%2BG7lS2k9OFJIearFqq1ecmoDTSrP%2BV4bxwC9Kv8DCHoQABoMNjM3NDIzMTgzODA1IgzvoIcbnnLzH1PWvrsq3AM8sk4%2FunlppjOfR8gM2RG4dVkd8bmk4NhXwgnvhNdjk2FUBC9rvKFHGcdtFEZdYRUVcPrzuzh9qeu93dMx0oiwjEIsLPUCEh6mtOp6MXaMX5X154Io%2FCAqlwdi7CHtcS87b92v9zFTckwd2g%2F84%2FG1k34tDm5PnE%2BabiaFqqeBKn%2BKeRyM9I23c5mtfO37LU08dWfvrh%2BgyjgOPn9dR66yCpKnpozngUXLcR9roWoZLSQXH1kgCQ54Mur7muWaLW2VsvQKNIilVewv1bT%2FlYzOsfu%2F%2BN3xF%2FjtSasUimwG2BKb6K3iSOu7Mc8PGHqlIJrBUGOtu%2FVPXTXYWCnMLSiyc5yaL9zD4Z%2BDS0c67MwH0GorA9UktXRaT40jGrwrJIhz0BtBI5tCCkU35ZlhNbkm2vzP66GVNRmuONU7YMCPIpDBasBBKJRWaWb2jsScK9Q6QnLV5wMzDtB3PQzVckZRbSB8aQSBE%2Fkhfl6iMhTwN7SKxkpHRCKx834HQ6s2vF1b7CX%2B0QK%2BslbHmCO756IwoI%2F%2FE7ZwWZ2MAal%2BJ%2FAI6wSAX6ammoEgLxA8DZG5p6HjgTCsg1r6FndkFUZ9Pd31rqLh8e6BnyCA330YvCp2MJ2PeHVIJ%2BJ%2F6rg%2FfjDV7eu%2BBjqkAdkcQZLz3r8MPvlkh0LWfun9XbrRmk5ZcHpDvTERer6bD6W%2BD%2B9hUDOaQnq6KkJtM5OlmG%2FiArOmI44c%2FuJl4ITAbzZ7rqXV7rigKfNTkp2U9FiA2%2BA6RoAzuPxPna1hJ8hxmIbdvNGz8L%2BT2cBr0pXAWCvt9raV%2B%2BJUNvF%2BH3S5RVTQD4qu1hzD7trVhUAzlM%2B8vWBeJSUdXHfjpIcd%2F%2B6QOYrv&X-Amz-Signature=1c856f5b098da50f8df82c32f14cad58290e7a8cf36cf93070584e78e085214f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QD2UQKP%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQChAr1VRvBd0lCPImlTepgJGyOZsm6%2BO1ovEvKKjAMTFgIhAL2hL2OZ%2BG7lS2k9OFJIearFqq1ecmoDTSrP%2BV4bxwC9Kv8DCHoQABoMNjM3NDIzMTgzODA1IgzvoIcbnnLzH1PWvrsq3AM8sk4%2FunlppjOfR8gM2RG4dVkd8bmk4NhXwgnvhNdjk2FUBC9rvKFHGcdtFEZdYRUVcPrzuzh9qeu93dMx0oiwjEIsLPUCEh6mtOp6MXaMX5X154Io%2FCAqlwdi7CHtcS87b92v9zFTckwd2g%2F84%2FG1k34tDm5PnE%2BabiaFqqeBKn%2BKeRyM9I23c5mtfO37LU08dWfvrh%2BgyjgOPn9dR66yCpKnpozngUXLcR9roWoZLSQXH1kgCQ54Mur7muWaLW2VsvQKNIilVewv1bT%2FlYzOsfu%2F%2BN3xF%2FjtSasUimwG2BKb6K3iSOu7Mc8PGHqlIJrBUGOtu%2FVPXTXYWCnMLSiyc5yaL9zD4Z%2BDS0c67MwH0GorA9UktXRaT40jGrwrJIhz0BtBI5tCCkU35ZlhNbkm2vzP66GVNRmuONU7YMCPIpDBasBBKJRWaWb2jsScK9Q6QnLV5wMzDtB3PQzVckZRbSB8aQSBE%2Fkhfl6iMhTwN7SKxkpHRCKx834HQ6s2vF1b7CX%2B0QK%2BslbHmCO756IwoI%2F%2FE7ZwWZ2MAal%2BJ%2FAI6wSAX6ammoEgLxA8DZG5p6HjgTCsg1r6FndkFUZ9Pd31rqLh8e6BnyCA330YvCp2MJ2PeHVIJ%2BJ%2F6rg%2FfjDV7eu%2BBjqkAdkcQZLz3r8MPvlkh0LWfun9XbrRmk5ZcHpDvTERer6bD6W%2BD%2B9hUDOaQnq6KkJtM5OlmG%2FiArOmI44c%2FuJl4ITAbzZ7rqXV7rigKfNTkp2U9FiA2%2BA6RoAzuPxPna1hJ8hxmIbdvNGz8L%2BT2cBr0pXAWCvt9raV%2B%2BJUNvF%2BH3S5RVTQD4qu1hzD7trVhUAzlM%2B8vWBeJSUdXHfjpIcd%2F%2B6QOYrv&X-Amz-Signature=887ee13cfc0598a7955a2299258960088d8b3729a8e7c7debaedb5f60e977224&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QD2UQKP%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQChAr1VRvBd0lCPImlTepgJGyOZsm6%2BO1ovEvKKjAMTFgIhAL2hL2OZ%2BG7lS2k9OFJIearFqq1ecmoDTSrP%2BV4bxwC9Kv8DCHoQABoMNjM3NDIzMTgzODA1IgzvoIcbnnLzH1PWvrsq3AM8sk4%2FunlppjOfR8gM2RG4dVkd8bmk4NhXwgnvhNdjk2FUBC9rvKFHGcdtFEZdYRUVcPrzuzh9qeu93dMx0oiwjEIsLPUCEh6mtOp6MXaMX5X154Io%2FCAqlwdi7CHtcS87b92v9zFTckwd2g%2F84%2FG1k34tDm5PnE%2BabiaFqqeBKn%2BKeRyM9I23c5mtfO37LU08dWfvrh%2BgyjgOPn9dR66yCpKnpozngUXLcR9roWoZLSQXH1kgCQ54Mur7muWaLW2VsvQKNIilVewv1bT%2FlYzOsfu%2F%2BN3xF%2FjtSasUimwG2BKb6K3iSOu7Mc8PGHqlIJrBUGOtu%2FVPXTXYWCnMLSiyc5yaL9zD4Z%2BDS0c67MwH0GorA9UktXRaT40jGrwrJIhz0BtBI5tCCkU35ZlhNbkm2vzP66GVNRmuONU7YMCPIpDBasBBKJRWaWb2jsScK9Q6QnLV5wMzDtB3PQzVckZRbSB8aQSBE%2Fkhfl6iMhTwN7SKxkpHRCKx834HQ6s2vF1b7CX%2B0QK%2BslbHmCO756IwoI%2F%2FE7ZwWZ2MAal%2BJ%2FAI6wSAX6ammoEgLxA8DZG5p6HjgTCsg1r6FndkFUZ9Pd31rqLh8e6BnyCA330YvCp2MJ2PeHVIJ%2BJ%2F6rg%2FfjDV7eu%2BBjqkAdkcQZLz3r8MPvlkh0LWfun9XbrRmk5ZcHpDvTERer6bD6W%2BD%2B9hUDOaQnq6KkJtM5OlmG%2FiArOmI44c%2FuJl4ITAbzZ7rqXV7rigKfNTkp2U9FiA2%2BA6RoAzuPxPna1hJ8hxmIbdvNGz8L%2BT2cBr0pXAWCvt9raV%2B%2BJUNvF%2BH3S5RVTQD4qu1hzD7trVhUAzlM%2B8vWBeJSUdXHfjpIcd%2F%2B6QOYrv&X-Amz-Signature=fb58fe2e86a6bde3974c2b3821c3b2d4c6ec062053ffdf1e3b20935e87ba7881&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QD2UQKP%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQChAr1VRvBd0lCPImlTepgJGyOZsm6%2BO1ovEvKKjAMTFgIhAL2hL2OZ%2BG7lS2k9OFJIearFqq1ecmoDTSrP%2BV4bxwC9Kv8DCHoQABoMNjM3NDIzMTgzODA1IgzvoIcbnnLzH1PWvrsq3AM8sk4%2FunlppjOfR8gM2RG4dVkd8bmk4NhXwgnvhNdjk2FUBC9rvKFHGcdtFEZdYRUVcPrzuzh9qeu93dMx0oiwjEIsLPUCEh6mtOp6MXaMX5X154Io%2FCAqlwdi7CHtcS87b92v9zFTckwd2g%2F84%2FG1k34tDm5PnE%2BabiaFqqeBKn%2BKeRyM9I23c5mtfO37LU08dWfvrh%2BgyjgOPn9dR66yCpKnpozngUXLcR9roWoZLSQXH1kgCQ54Mur7muWaLW2VsvQKNIilVewv1bT%2FlYzOsfu%2F%2BN3xF%2FjtSasUimwG2BKb6K3iSOu7Mc8PGHqlIJrBUGOtu%2FVPXTXYWCnMLSiyc5yaL9zD4Z%2BDS0c67MwH0GorA9UktXRaT40jGrwrJIhz0BtBI5tCCkU35ZlhNbkm2vzP66GVNRmuONU7YMCPIpDBasBBKJRWaWb2jsScK9Q6QnLV5wMzDtB3PQzVckZRbSB8aQSBE%2Fkhfl6iMhTwN7SKxkpHRCKx834HQ6s2vF1b7CX%2B0QK%2BslbHmCO756IwoI%2F%2FE7ZwWZ2MAal%2BJ%2FAI6wSAX6ammoEgLxA8DZG5p6HjgTCsg1r6FndkFUZ9Pd31rqLh8e6BnyCA330YvCp2MJ2PeHVIJ%2BJ%2F6rg%2FfjDV7eu%2BBjqkAdkcQZLz3r8MPvlkh0LWfun9XbrRmk5ZcHpDvTERer6bD6W%2BD%2B9hUDOaQnq6KkJtM5OlmG%2FiArOmI44c%2FuJl4ITAbzZ7rqXV7rigKfNTkp2U9FiA2%2BA6RoAzuPxPna1hJ8hxmIbdvNGz8L%2BT2cBr0pXAWCvt9raV%2B%2BJUNvF%2BH3S5RVTQD4qu1hzD7trVhUAzlM%2B8vWBeJSUdXHfjpIcd%2F%2B6QOYrv&X-Amz-Signature=46a34b56b2652ebf6fa5e102ff9bc43b256d671dada48f2178912802da67ff38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QD2UQKP%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQChAr1VRvBd0lCPImlTepgJGyOZsm6%2BO1ovEvKKjAMTFgIhAL2hL2OZ%2BG7lS2k9OFJIearFqq1ecmoDTSrP%2BV4bxwC9Kv8DCHoQABoMNjM3NDIzMTgzODA1IgzvoIcbnnLzH1PWvrsq3AM8sk4%2FunlppjOfR8gM2RG4dVkd8bmk4NhXwgnvhNdjk2FUBC9rvKFHGcdtFEZdYRUVcPrzuzh9qeu93dMx0oiwjEIsLPUCEh6mtOp6MXaMX5X154Io%2FCAqlwdi7CHtcS87b92v9zFTckwd2g%2F84%2FG1k34tDm5PnE%2BabiaFqqeBKn%2BKeRyM9I23c5mtfO37LU08dWfvrh%2BgyjgOPn9dR66yCpKnpozngUXLcR9roWoZLSQXH1kgCQ54Mur7muWaLW2VsvQKNIilVewv1bT%2FlYzOsfu%2F%2BN3xF%2FjtSasUimwG2BKb6K3iSOu7Mc8PGHqlIJrBUGOtu%2FVPXTXYWCnMLSiyc5yaL9zD4Z%2BDS0c67MwH0GorA9UktXRaT40jGrwrJIhz0BtBI5tCCkU35ZlhNbkm2vzP66GVNRmuONU7YMCPIpDBasBBKJRWaWb2jsScK9Q6QnLV5wMzDtB3PQzVckZRbSB8aQSBE%2Fkhfl6iMhTwN7SKxkpHRCKx834HQ6s2vF1b7CX%2B0QK%2BslbHmCO756IwoI%2F%2FE7ZwWZ2MAal%2BJ%2FAI6wSAX6ammoEgLxA8DZG5p6HjgTCsg1r6FndkFUZ9Pd31rqLh8e6BnyCA330YvCp2MJ2PeHVIJ%2BJ%2F6rg%2FfjDV7eu%2BBjqkAdkcQZLz3r8MPvlkh0LWfun9XbrRmk5ZcHpDvTERer6bD6W%2BD%2B9hUDOaQnq6KkJtM5OlmG%2FiArOmI44c%2FuJl4ITAbzZ7rqXV7rigKfNTkp2U9FiA2%2BA6RoAzuPxPna1hJ8hxmIbdvNGz8L%2BT2cBr0pXAWCvt9raV%2B%2BJUNvF%2BH3S5RVTQD4qu1hzD7trVhUAzlM%2B8vWBeJSUdXHfjpIcd%2F%2B6QOYrv&X-Amz-Signature=69ad39578cbb4555e820b3cbaeea6427db66a8753308c769e10ceba3c49f500b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
