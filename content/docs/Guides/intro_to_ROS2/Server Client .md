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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNI345L7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFs%2B%2FqWEjZiUC%2FLf0OAUgTNN9WbUFQwpqKMcchDzvJCYAiBkElV7E7lI2ncBYO901wW3BRwx7UjdQzpFw%2FMesjLkFCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMRe5WugLZ5TEbLfKhKtwDqb6gIb1UOF6ZEE8B5CWYxACPa7Fiz4LHuMJ2UIoqxMem0gUMqoVjelAGXo4NZ1YZPdyWErhCTqeUOYgdVTiazP6DBsMPgtvylg1fyKT0MXFfhAlyPkZKowFX0TVl9Tm0QTw7xzshwyl3B1g%2FLdylLsdn8Td%2BpOpmK2eQpU03vFL9DVaj0EGyB4RVUfXqxJ0cOwsy8d8%2FP5tH8jzU99c%2FOg2bUPNWajztdYcOXeLgQm3D%2B3P3z1Dl6gJauV%2B0YUZtNRrEXeqyiY4J4dbd7hQWVYuCdN0p1NFl33B2g%2BiLQouhC1Ts4q4GmGBx2xZ7CqA2AMAQd9vwJSoTG2WoW0GNRhzsdwVS8WDkquGLJ3OyJQvWVaLcAeG5qjdUL5tZaw7Qgk3HIyL0mfHCSberY8awY1pkn2anwd8aE5SeV3ovUxdDVAIUNpd61R4R5KJfNTubH6tNgc%2FC3oOW7diCnEFmUq9CqAw%2BehYAQ31Uv9Zv5QFUYOQsAw%2BtZDk%2B0xL2pQ5zFmIT1jFygjKpIWPNgZDKNyfzqo%2BSSABxt4SunKHodnSgrLVjTwgovFkdS6mTsykVGP8Mp8Zbk2nscMlCrjqrn0qkRZUQJJ%2Fj%2FDIxc0El%2FJxiFD7j7h%2Fr7Ozx4I4w3qvQywY6pgGHIBKav6bsBMO5loYj2mydmrjtstNZXXz7loxBbifKqy86SBBO8g8R%2Fq4S0WrFcxpVXBV4LK52FflEIUoAObSEE3vvtC6xqBGY52fcv3%2B2sX6xFDTDOIiPtx2idT4ByIClNBTgFIT%2Fbeno%2ByhBFUuFX4yLKewX2iUZR%2BpsKFAYfecvALGNgONFV0pIK7pVzcNQFflPtMJvVMygrQxEjoTMkTk%2F9NEv&X-Amz-Signature=2c31f83de4ea9b0c69f9df5af7c7b1bd342a4bd993d28866e38a1c0cde181e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNI345L7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFs%2B%2FqWEjZiUC%2FLf0OAUgTNN9WbUFQwpqKMcchDzvJCYAiBkElV7E7lI2ncBYO901wW3BRwx7UjdQzpFw%2FMesjLkFCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMRe5WugLZ5TEbLfKhKtwDqb6gIb1UOF6ZEE8B5CWYxACPa7Fiz4LHuMJ2UIoqxMem0gUMqoVjelAGXo4NZ1YZPdyWErhCTqeUOYgdVTiazP6DBsMPgtvylg1fyKT0MXFfhAlyPkZKowFX0TVl9Tm0QTw7xzshwyl3B1g%2FLdylLsdn8Td%2BpOpmK2eQpU03vFL9DVaj0EGyB4RVUfXqxJ0cOwsy8d8%2FP5tH8jzU99c%2FOg2bUPNWajztdYcOXeLgQm3D%2B3P3z1Dl6gJauV%2B0YUZtNRrEXeqyiY4J4dbd7hQWVYuCdN0p1NFl33B2g%2BiLQouhC1Ts4q4GmGBx2xZ7CqA2AMAQd9vwJSoTG2WoW0GNRhzsdwVS8WDkquGLJ3OyJQvWVaLcAeG5qjdUL5tZaw7Qgk3HIyL0mfHCSberY8awY1pkn2anwd8aE5SeV3ovUxdDVAIUNpd61R4R5KJfNTubH6tNgc%2FC3oOW7diCnEFmUq9CqAw%2BehYAQ31Uv9Zv5QFUYOQsAw%2BtZDk%2B0xL2pQ5zFmIT1jFygjKpIWPNgZDKNyfzqo%2BSSABxt4SunKHodnSgrLVjTwgovFkdS6mTsykVGP8Mp8Zbk2nscMlCrjqrn0qkRZUQJJ%2Fj%2FDIxc0El%2FJxiFD7j7h%2Fr7Ozx4I4w3qvQywY6pgGHIBKav6bsBMO5loYj2mydmrjtstNZXXz7loxBbifKqy86SBBO8g8R%2Fq4S0WrFcxpVXBV4LK52FflEIUoAObSEE3vvtC6xqBGY52fcv3%2B2sX6xFDTDOIiPtx2idT4ByIClNBTgFIT%2Fbeno%2ByhBFUuFX4yLKewX2iUZR%2BpsKFAYfecvALGNgONFV0pIK7pVzcNQFflPtMJvVMygrQxEjoTMkTk%2F9NEv&X-Amz-Signature=6ae24d8a24ee020885023fa50723a78215a8b588410effebf81b626c56a87734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNI345L7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFs%2B%2FqWEjZiUC%2FLf0OAUgTNN9WbUFQwpqKMcchDzvJCYAiBkElV7E7lI2ncBYO901wW3BRwx7UjdQzpFw%2FMesjLkFCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMRe5WugLZ5TEbLfKhKtwDqb6gIb1UOF6ZEE8B5CWYxACPa7Fiz4LHuMJ2UIoqxMem0gUMqoVjelAGXo4NZ1YZPdyWErhCTqeUOYgdVTiazP6DBsMPgtvylg1fyKT0MXFfhAlyPkZKowFX0TVl9Tm0QTw7xzshwyl3B1g%2FLdylLsdn8Td%2BpOpmK2eQpU03vFL9DVaj0EGyB4RVUfXqxJ0cOwsy8d8%2FP5tH8jzU99c%2FOg2bUPNWajztdYcOXeLgQm3D%2B3P3z1Dl6gJauV%2B0YUZtNRrEXeqyiY4J4dbd7hQWVYuCdN0p1NFl33B2g%2BiLQouhC1Ts4q4GmGBx2xZ7CqA2AMAQd9vwJSoTG2WoW0GNRhzsdwVS8WDkquGLJ3OyJQvWVaLcAeG5qjdUL5tZaw7Qgk3HIyL0mfHCSberY8awY1pkn2anwd8aE5SeV3ovUxdDVAIUNpd61R4R5KJfNTubH6tNgc%2FC3oOW7diCnEFmUq9CqAw%2BehYAQ31Uv9Zv5QFUYOQsAw%2BtZDk%2B0xL2pQ5zFmIT1jFygjKpIWPNgZDKNyfzqo%2BSSABxt4SunKHodnSgrLVjTwgovFkdS6mTsykVGP8Mp8Zbk2nscMlCrjqrn0qkRZUQJJ%2Fj%2FDIxc0El%2FJxiFD7j7h%2Fr7Ozx4I4w3qvQywY6pgGHIBKav6bsBMO5loYj2mydmrjtstNZXXz7loxBbifKqy86SBBO8g8R%2Fq4S0WrFcxpVXBV4LK52FflEIUoAObSEE3vvtC6xqBGY52fcv3%2B2sX6xFDTDOIiPtx2idT4ByIClNBTgFIT%2Fbeno%2ByhBFUuFX4yLKewX2iUZR%2BpsKFAYfecvALGNgONFV0pIK7pVzcNQFflPtMJvVMygrQxEjoTMkTk%2F9NEv&X-Amz-Signature=c6d54e739b555080acf671c64738d4b7b8389832241416641b5eac4d198f4020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNI345L7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFs%2B%2FqWEjZiUC%2FLf0OAUgTNN9WbUFQwpqKMcchDzvJCYAiBkElV7E7lI2ncBYO901wW3BRwx7UjdQzpFw%2FMesjLkFCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMRe5WugLZ5TEbLfKhKtwDqb6gIb1UOF6ZEE8B5CWYxACPa7Fiz4LHuMJ2UIoqxMem0gUMqoVjelAGXo4NZ1YZPdyWErhCTqeUOYgdVTiazP6DBsMPgtvylg1fyKT0MXFfhAlyPkZKowFX0TVl9Tm0QTw7xzshwyl3B1g%2FLdylLsdn8Td%2BpOpmK2eQpU03vFL9DVaj0EGyB4RVUfXqxJ0cOwsy8d8%2FP5tH8jzU99c%2FOg2bUPNWajztdYcOXeLgQm3D%2B3P3z1Dl6gJauV%2B0YUZtNRrEXeqyiY4J4dbd7hQWVYuCdN0p1NFl33B2g%2BiLQouhC1Ts4q4GmGBx2xZ7CqA2AMAQd9vwJSoTG2WoW0GNRhzsdwVS8WDkquGLJ3OyJQvWVaLcAeG5qjdUL5tZaw7Qgk3HIyL0mfHCSberY8awY1pkn2anwd8aE5SeV3ovUxdDVAIUNpd61R4R5KJfNTubH6tNgc%2FC3oOW7diCnEFmUq9CqAw%2BehYAQ31Uv9Zv5QFUYOQsAw%2BtZDk%2B0xL2pQ5zFmIT1jFygjKpIWPNgZDKNyfzqo%2BSSABxt4SunKHodnSgrLVjTwgovFkdS6mTsykVGP8Mp8Zbk2nscMlCrjqrn0qkRZUQJJ%2Fj%2FDIxc0El%2FJxiFD7j7h%2Fr7Ozx4I4w3qvQywY6pgGHIBKav6bsBMO5loYj2mydmrjtstNZXXz7loxBbifKqy86SBBO8g8R%2Fq4S0WrFcxpVXBV4LK52FflEIUoAObSEE3vvtC6xqBGY52fcv3%2B2sX6xFDTDOIiPtx2idT4ByIClNBTgFIT%2Fbeno%2ByhBFUuFX4yLKewX2iUZR%2BpsKFAYfecvALGNgONFV0pIK7pVzcNQFflPtMJvVMygrQxEjoTMkTk%2F9NEv&X-Amz-Signature=394fb1d4a9020de90aafde9533dc75816a6275fb3b83b9f1d2a3607704b274c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNI345L7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFs%2B%2FqWEjZiUC%2FLf0OAUgTNN9WbUFQwpqKMcchDzvJCYAiBkElV7E7lI2ncBYO901wW3BRwx7UjdQzpFw%2FMesjLkFCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMRe5WugLZ5TEbLfKhKtwDqb6gIb1UOF6ZEE8B5CWYxACPa7Fiz4LHuMJ2UIoqxMem0gUMqoVjelAGXo4NZ1YZPdyWErhCTqeUOYgdVTiazP6DBsMPgtvylg1fyKT0MXFfhAlyPkZKowFX0TVl9Tm0QTw7xzshwyl3B1g%2FLdylLsdn8Td%2BpOpmK2eQpU03vFL9DVaj0EGyB4RVUfXqxJ0cOwsy8d8%2FP5tH8jzU99c%2FOg2bUPNWajztdYcOXeLgQm3D%2B3P3z1Dl6gJauV%2B0YUZtNRrEXeqyiY4J4dbd7hQWVYuCdN0p1NFl33B2g%2BiLQouhC1Ts4q4GmGBx2xZ7CqA2AMAQd9vwJSoTG2WoW0GNRhzsdwVS8WDkquGLJ3OyJQvWVaLcAeG5qjdUL5tZaw7Qgk3HIyL0mfHCSberY8awY1pkn2anwd8aE5SeV3ovUxdDVAIUNpd61R4R5KJfNTubH6tNgc%2FC3oOW7diCnEFmUq9CqAw%2BehYAQ31Uv9Zv5QFUYOQsAw%2BtZDk%2B0xL2pQ5zFmIT1jFygjKpIWPNgZDKNyfzqo%2BSSABxt4SunKHodnSgrLVjTwgovFkdS6mTsykVGP8Mp8Zbk2nscMlCrjqrn0qkRZUQJJ%2Fj%2FDIxc0El%2FJxiFD7j7h%2Fr7Ozx4I4w3qvQywY6pgGHIBKav6bsBMO5loYj2mydmrjtstNZXXz7loxBbifKqy86SBBO8g8R%2Fq4S0WrFcxpVXBV4LK52FflEIUoAObSEE3vvtC6xqBGY52fcv3%2B2sX6xFDTDOIiPtx2idT4ByIClNBTgFIT%2Fbeno%2ByhBFUuFX4yLKewX2iUZR%2BpsKFAYfecvALGNgONFV0pIK7pVzcNQFflPtMJvVMygrQxEjoTMkTk%2F9NEv&X-Amz-Signature=80043e42c36c50b45d02e08eb1912712b4ae201ae1b58c86f466dfcc182f2b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
