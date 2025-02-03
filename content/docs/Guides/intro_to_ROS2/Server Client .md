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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST3IDUFO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmbN3O6m7rw744OSi8mw8Ayy6Ppw1hHt71PwXXYzr%2F5AiAPQA4Wcl0g%2FDSyR%2BkxPAjBAhsnTO4Kxb2W13kWg8qQGCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWrvMmZaMHuA3S%2FI5KtwDh6Gd6uE2AgOhrVtCkxJVlt8mmG3Ql5LmFadVvHcAJNNmgQSu6B5v4SxyL6KE3g1ZkcYwwZIc4DEY7pfiksduiaTy74OjCqM84K2W0t1063jQSWE%2BG0sRrlumfOkdOb1CLlvNdv5KMf3MJfvyjCSNcEMWnjChCriqeECz4tTHmtBXfdt4db%2BTwhPud9tU2H2XGrNLzrylJgAgcTOgoU71X4GUynfw7OBT2yQLDeB0qGc%2F3UFb%2BJglYUYtdAqb98g7oLwAnBhYuI7vy5vIjHmxNXwWetC8AdsiEcJPd6DQY6Rqv1wJxItI5Yf%2FJcQkZE34hJS9r%2FaLvTCqBE7QvE%2Fqbux%2Bx406oJ%2FrRPhx1s7ygI7s2CiZT3S8ox9d%2Fstwue0dX35B59TSBUDN1rNAdpQYHTK2tiPNUj6G96Ndgu4IQPeksmkxOEtfkelfUhOu8IE1n799sF41GNKAdcqlR4b4YPh7BF8S2dqf68%2BgcjoDW3AKy4MuTFvreLQXf7ZmAgQ%2Bu0CXsewGbZ%2FCusqOeINuPS9%2Be07nocr2zM1Lt13R0g%2FLmdMvar6ofkc67DRDerkvszwSorPPGQg7qb8dTWt3SQLV%2BJwLtZ0lWjLLlfeUyqfNVagQrefmvpB%2BO2gwyruBvQY6pgFNSxX2n3OqKWkY3rzNNioehMV8gudL9lecqCihf4rzoiNVpmYVlFTHoWcvMHrZD0SAxiUDqgSlq11jwtu9PGZ8ZsbQeeoovNaZTNoK72aMAISU5FJW4yJ0ABf17kZHqdxW5y3Q69XLUumoky7jEGfRqczPjFK6RNccQ4VEKDJ23zmz0wKFUL5hUA31%2BRBKTT48VVhwhybTpZoEEUEMgTziA2eRufgF&X-Amz-Signature=edcb581f9a632b59109b391ca638be6b615165af571a74e87a61f4dc85ebbd73&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST3IDUFO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmbN3O6m7rw744OSi8mw8Ayy6Ppw1hHt71PwXXYzr%2F5AiAPQA4Wcl0g%2FDSyR%2BkxPAjBAhsnTO4Kxb2W13kWg8qQGCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWrvMmZaMHuA3S%2FI5KtwDh6Gd6uE2AgOhrVtCkxJVlt8mmG3Ql5LmFadVvHcAJNNmgQSu6B5v4SxyL6KE3g1ZkcYwwZIc4DEY7pfiksduiaTy74OjCqM84K2W0t1063jQSWE%2BG0sRrlumfOkdOb1CLlvNdv5KMf3MJfvyjCSNcEMWnjChCriqeECz4tTHmtBXfdt4db%2BTwhPud9tU2H2XGrNLzrylJgAgcTOgoU71X4GUynfw7OBT2yQLDeB0qGc%2F3UFb%2BJglYUYtdAqb98g7oLwAnBhYuI7vy5vIjHmxNXwWetC8AdsiEcJPd6DQY6Rqv1wJxItI5Yf%2FJcQkZE34hJS9r%2FaLvTCqBE7QvE%2Fqbux%2Bx406oJ%2FrRPhx1s7ygI7s2CiZT3S8ox9d%2Fstwue0dX35B59TSBUDN1rNAdpQYHTK2tiPNUj6G96Ndgu4IQPeksmkxOEtfkelfUhOu8IE1n799sF41GNKAdcqlR4b4YPh7BF8S2dqf68%2BgcjoDW3AKy4MuTFvreLQXf7ZmAgQ%2Bu0CXsewGbZ%2FCusqOeINuPS9%2Be07nocr2zM1Lt13R0g%2FLmdMvar6ofkc67DRDerkvszwSorPPGQg7qb8dTWt3SQLV%2BJwLtZ0lWjLLlfeUyqfNVagQrefmvpB%2BO2gwyruBvQY6pgFNSxX2n3OqKWkY3rzNNioehMV8gudL9lecqCihf4rzoiNVpmYVlFTHoWcvMHrZD0SAxiUDqgSlq11jwtu9PGZ8ZsbQeeoovNaZTNoK72aMAISU5FJW4yJ0ABf17kZHqdxW5y3Q69XLUumoky7jEGfRqczPjFK6RNccQ4VEKDJ23zmz0wKFUL5hUA31%2BRBKTT48VVhwhybTpZoEEUEMgTziA2eRufgF&X-Amz-Signature=75a43de4b5339b77c7567ea512f7b4523e6c715ad1025d429e44fd4cf3bdca5d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST3IDUFO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmbN3O6m7rw744OSi8mw8Ayy6Ppw1hHt71PwXXYzr%2F5AiAPQA4Wcl0g%2FDSyR%2BkxPAjBAhsnTO4Kxb2W13kWg8qQGCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWrvMmZaMHuA3S%2FI5KtwDh6Gd6uE2AgOhrVtCkxJVlt8mmG3Ql5LmFadVvHcAJNNmgQSu6B5v4SxyL6KE3g1ZkcYwwZIc4DEY7pfiksduiaTy74OjCqM84K2W0t1063jQSWE%2BG0sRrlumfOkdOb1CLlvNdv5KMf3MJfvyjCSNcEMWnjChCriqeECz4tTHmtBXfdt4db%2BTwhPud9tU2H2XGrNLzrylJgAgcTOgoU71X4GUynfw7OBT2yQLDeB0qGc%2F3UFb%2BJglYUYtdAqb98g7oLwAnBhYuI7vy5vIjHmxNXwWetC8AdsiEcJPd6DQY6Rqv1wJxItI5Yf%2FJcQkZE34hJS9r%2FaLvTCqBE7QvE%2Fqbux%2Bx406oJ%2FrRPhx1s7ygI7s2CiZT3S8ox9d%2Fstwue0dX35B59TSBUDN1rNAdpQYHTK2tiPNUj6G96Ndgu4IQPeksmkxOEtfkelfUhOu8IE1n799sF41GNKAdcqlR4b4YPh7BF8S2dqf68%2BgcjoDW3AKy4MuTFvreLQXf7ZmAgQ%2Bu0CXsewGbZ%2FCusqOeINuPS9%2Be07nocr2zM1Lt13R0g%2FLmdMvar6ofkc67DRDerkvszwSorPPGQg7qb8dTWt3SQLV%2BJwLtZ0lWjLLlfeUyqfNVagQrefmvpB%2BO2gwyruBvQY6pgFNSxX2n3OqKWkY3rzNNioehMV8gudL9lecqCihf4rzoiNVpmYVlFTHoWcvMHrZD0SAxiUDqgSlq11jwtu9PGZ8ZsbQeeoovNaZTNoK72aMAISU5FJW4yJ0ABf17kZHqdxW5y3Q69XLUumoky7jEGfRqczPjFK6RNccQ4VEKDJ23zmz0wKFUL5hUA31%2BRBKTT48VVhwhybTpZoEEUEMgTziA2eRufgF&X-Amz-Signature=487f6f16bfd36ee75a4bfff1215a0cf38df8877db95f3bb458429d4dbeee59da&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST3IDUFO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmbN3O6m7rw744OSi8mw8Ayy6Ppw1hHt71PwXXYzr%2F5AiAPQA4Wcl0g%2FDSyR%2BkxPAjBAhsnTO4Kxb2W13kWg8qQGCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWrvMmZaMHuA3S%2FI5KtwDh6Gd6uE2AgOhrVtCkxJVlt8mmG3Ql5LmFadVvHcAJNNmgQSu6B5v4SxyL6KE3g1ZkcYwwZIc4DEY7pfiksduiaTy74OjCqM84K2W0t1063jQSWE%2BG0sRrlumfOkdOb1CLlvNdv5KMf3MJfvyjCSNcEMWnjChCriqeECz4tTHmtBXfdt4db%2BTwhPud9tU2H2XGrNLzrylJgAgcTOgoU71X4GUynfw7OBT2yQLDeB0qGc%2F3UFb%2BJglYUYtdAqb98g7oLwAnBhYuI7vy5vIjHmxNXwWetC8AdsiEcJPd6DQY6Rqv1wJxItI5Yf%2FJcQkZE34hJS9r%2FaLvTCqBE7QvE%2Fqbux%2Bx406oJ%2FrRPhx1s7ygI7s2CiZT3S8ox9d%2Fstwue0dX35B59TSBUDN1rNAdpQYHTK2tiPNUj6G96Ndgu4IQPeksmkxOEtfkelfUhOu8IE1n799sF41GNKAdcqlR4b4YPh7BF8S2dqf68%2BgcjoDW3AKy4MuTFvreLQXf7ZmAgQ%2Bu0CXsewGbZ%2FCusqOeINuPS9%2Be07nocr2zM1Lt13R0g%2FLmdMvar6ofkc67DRDerkvszwSorPPGQg7qb8dTWt3SQLV%2BJwLtZ0lWjLLlfeUyqfNVagQrefmvpB%2BO2gwyruBvQY6pgFNSxX2n3OqKWkY3rzNNioehMV8gudL9lecqCihf4rzoiNVpmYVlFTHoWcvMHrZD0SAxiUDqgSlq11jwtu9PGZ8ZsbQeeoovNaZTNoK72aMAISU5FJW4yJ0ABf17kZHqdxW5y3Q69XLUumoky7jEGfRqczPjFK6RNccQ4VEKDJ23zmz0wKFUL5hUA31%2BRBKTT48VVhwhybTpZoEEUEMgTziA2eRufgF&X-Amz-Signature=d299e745a62f3169f11e401c6f9ce5ada0e12fbec94cf2b309e4b19428b741dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST3IDUFO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmbN3O6m7rw744OSi8mw8Ayy6Ppw1hHt71PwXXYzr%2F5AiAPQA4Wcl0g%2FDSyR%2BkxPAjBAhsnTO4Kxb2W13kWg8qQGCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWrvMmZaMHuA3S%2FI5KtwDh6Gd6uE2AgOhrVtCkxJVlt8mmG3Ql5LmFadVvHcAJNNmgQSu6B5v4SxyL6KE3g1ZkcYwwZIc4DEY7pfiksduiaTy74OjCqM84K2W0t1063jQSWE%2BG0sRrlumfOkdOb1CLlvNdv5KMf3MJfvyjCSNcEMWnjChCriqeECz4tTHmtBXfdt4db%2BTwhPud9tU2H2XGrNLzrylJgAgcTOgoU71X4GUynfw7OBT2yQLDeB0qGc%2F3UFb%2BJglYUYtdAqb98g7oLwAnBhYuI7vy5vIjHmxNXwWetC8AdsiEcJPd6DQY6Rqv1wJxItI5Yf%2FJcQkZE34hJS9r%2FaLvTCqBE7QvE%2Fqbux%2Bx406oJ%2FrRPhx1s7ygI7s2CiZT3S8ox9d%2Fstwue0dX35B59TSBUDN1rNAdpQYHTK2tiPNUj6G96Ndgu4IQPeksmkxOEtfkelfUhOu8IE1n799sF41GNKAdcqlR4b4YPh7BF8S2dqf68%2BgcjoDW3AKy4MuTFvreLQXf7ZmAgQ%2Bu0CXsewGbZ%2FCusqOeINuPS9%2Be07nocr2zM1Lt13R0g%2FLmdMvar6ofkc67DRDerkvszwSorPPGQg7qb8dTWt3SQLV%2BJwLtZ0lWjLLlfeUyqfNVagQrefmvpB%2BO2gwyruBvQY6pgFNSxX2n3OqKWkY3rzNNioehMV8gudL9lecqCihf4rzoiNVpmYVlFTHoWcvMHrZD0SAxiUDqgSlq11jwtu9PGZ8ZsbQeeoovNaZTNoK72aMAISU5FJW4yJ0ABf17kZHqdxW5y3Q69XLUumoky7jEGfRqczPjFK6RNccQ4VEKDJ23zmz0wKFUL5hUA31%2BRBKTT48VVhwhybTpZoEEUEMgTziA2eRufgF&X-Amz-Signature=d84434b534cc75a3927e4f582a43e5a31e8d8ac24d713bd0a151fae6037ec8dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
