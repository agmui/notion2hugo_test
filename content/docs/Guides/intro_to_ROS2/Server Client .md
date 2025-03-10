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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQXZDPQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIHzEJiipxl7mJjFtvBQJxkp6hHEg1LDGNjYLeE01XsqxAiBMMwREnig0lZ%2B2BJHRjE%2FXQUGR0dwbjp4xOFEfuOq5ICqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMONarV4KiLHdNoT5uKtwD7Uy4Q79pWCeypmyNyrOKo%2BF%2BINZFynsth3VAEKlKdtpU0iJjVUyPXD2BBLbZGkzhLfW89uPK%2B%2FDcIHjSpo5vDb6UooGY3hzAI7pMKRrYtqT%2BEEDpFKV6QAVdfbe6D1HBaNM0wtUnaQa6MDr8mHUh1QgNFxNzZ3eBpZR2TtnkubEomY1qxHotjWRbadEZxnuWfRiEkAyk18ufQXs888EiaEbDkMaNK7RSWcHnO2Xvd6tETQGnnDEM9vDAZmph5UTMJ3rYm3eSImCRe8dAhLLuIvy57wDbzdZ%2BsNDePsFq5j2hTT8GRzmlP%2FtVyN9QOnuWKAFFB%2Bm9iUkh5ycUwGX4n2mY9legVgBPuJe0ztUWDVK2h2ZvCOZXQd6GgNd9CACmPnF%2FA6gnLFDhPyBm4u%2Fy3%2FaUK%2BwCNyawG%2B9gdSik25CzK%2BAjzJqDry04SDCoW1TrQTIUlkOZZtp%2BurKoLuugoXlrrj6tv%2FoMpITga4Y13QvQaL6mIDtjI2ZLhns3jwa%2FFpv2V1%2FRWHz9O2UsD1bAULKNkYjh1GUvjCBSfi%2FAl0IPsJXj89sy3UV%2FX3S4lHffRRkKUEbqtx%2FCfI5A4K0uaPMbGtLZ607EIgKzhyF7r1Abwhkv95eaW61ruV8wuqm6vgY6pgEwJLsdeVn7pMOYzFZvg63TaypaJxLwa7mTTKo1MT6J1J%2FY95XQjM%2BZuBXRgEN01R2isMFB29xYBxuXNToNA3iBLvoptfBieE503JogdO7ds8Q2JfIjGKnVWgeLvCVSuzhRnownHDYipDEDI%2B5vloTxUSWPYdGHu7ofF2amMJqYvT3rBX7cQ0kTumbkOoc1Ry2HKVCT6I1lLt1R9u5zhRkpM82IBNB5&X-Amz-Signature=b036ba160286faa32b11f70053d1655a0c1f3d495b34a91a775ac3b3bb4b4b3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQXZDPQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIHzEJiipxl7mJjFtvBQJxkp6hHEg1LDGNjYLeE01XsqxAiBMMwREnig0lZ%2B2BJHRjE%2FXQUGR0dwbjp4xOFEfuOq5ICqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMONarV4KiLHdNoT5uKtwD7Uy4Q79pWCeypmyNyrOKo%2BF%2BINZFynsth3VAEKlKdtpU0iJjVUyPXD2BBLbZGkzhLfW89uPK%2B%2FDcIHjSpo5vDb6UooGY3hzAI7pMKRrYtqT%2BEEDpFKV6QAVdfbe6D1HBaNM0wtUnaQa6MDr8mHUh1QgNFxNzZ3eBpZR2TtnkubEomY1qxHotjWRbadEZxnuWfRiEkAyk18ufQXs888EiaEbDkMaNK7RSWcHnO2Xvd6tETQGnnDEM9vDAZmph5UTMJ3rYm3eSImCRe8dAhLLuIvy57wDbzdZ%2BsNDePsFq5j2hTT8GRzmlP%2FtVyN9QOnuWKAFFB%2Bm9iUkh5ycUwGX4n2mY9legVgBPuJe0ztUWDVK2h2ZvCOZXQd6GgNd9CACmPnF%2FA6gnLFDhPyBm4u%2Fy3%2FaUK%2BwCNyawG%2B9gdSik25CzK%2BAjzJqDry04SDCoW1TrQTIUlkOZZtp%2BurKoLuugoXlrrj6tv%2FoMpITga4Y13QvQaL6mIDtjI2ZLhns3jwa%2FFpv2V1%2FRWHz9O2UsD1bAULKNkYjh1GUvjCBSfi%2FAl0IPsJXj89sy3UV%2FX3S4lHffRRkKUEbqtx%2FCfI5A4K0uaPMbGtLZ607EIgKzhyF7r1Abwhkv95eaW61ruV8wuqm6vgY6pgEwJLsdeVn7pMOYzFZvg63TaypaJxLwa7mTTKo1MT6J1J%2FY95XQjM%2BZuBXRgEN01R2isMFB29xYBxuXNToNA3iBLvoptfBieE503JogdO7ds8Q2JfIjGKnVWgeLvCVSuzhRnownHDYipDEDI%2B5vloTxUSWPYdGHu7ofF2amMJqYvT3rBX7cQ0kTumbkOoc1Ry2HKVCT6I1lLt1R9u5zhRkpM82IBNB5&X-Amz-Signature=a254b84b5ed3117ae639a3021cc5e6e3ee2d25e699cd95ecc6e32b0bb82acc0b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQXZDPQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIHzEJiipxl7mJjFtvBQJxkp6hHEg1LDGNjYLeE01XsqxAiBMMwREnig0lZ%2B2BJHRjE%2FXQUGR0dwbjp4xOFEfuOq5ICqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMONarV4KiLHdNoT5uKtwD7Uy4Q79pWCeypmyNyrOKo%2BF%2BINZFynsth3VAEKlKdtpU0iJjVUyPXD2BBLbZGkzhLfW89uPK%2B%2FDcIHjSpo5vDb6UooGY3hzAI7pMKRrYtqT%2BEEDpFKV6QAVdfbe6D1HBaNM0wtUnaQa6MDr8mHUh1QgNFxNzZ3eBpZR2TtnkubEomY1qxHotjWRbadEZxnuWfRiEkAyk18ufQXs888EiaEbDkMaNK7RSWcHnO2Xvd6tETQGnnDEM9vDAZmph5UTMJ3rYm3eSImCRe8dAhLLuIvy57wDbzdZ%2BsNDePsFq5j2hTT8GRzmlP%2FtVyN9QOnuWKAFFB%2Bm9iUkh5ycUwGX4n2mY9legVgBPuJe0ztUWDVK2h2ZvCOZXQd6GgNd9CACmPnF%2FA6gnLFDhPyBm4u%2Fy3%2FaUK%2BwCNyawG%2B9gdSik25CzK%2BAjzJqDry04SDCoW1TrQTIUlkOZZtp%2BurKoLuugoXlrrj6tv%2FoMpITga4Y13QvQaL6mIDtjI2ZLhns3jwa%2FFpv2V1%2FRWHz9O2UsD1bAULKNkYjh1GUvjCBSfi%2FAl0IPsJXj89sy3UV%2FX3S4lHffRRkKUEbqtx%2FCfI5A4K0uaPMbGtLZ607EIgKzhyF7r1Abwhkv95eaW61ruV8wuqm6vgY6pgEwJLsdeVn7pMOYzFZvg63TaypaJxLwa7mTTKo1MT6J1J%2FY95XQjM%2BZuBXRgEN01R2isMFB29xYBxuXNToNA3iBLvoptfBieE503JogdO7ds8Q2JfIjGKnVWgeLvCVSuzhRnownHDYipDEDI%2B5vloTxUSWPYdGHu7ofF2amMJqYvT3rBX7cQ0kTumbkOoc1Ry2HKVCT6I1lLt1R9u5zhRkpM82IBNB5&X-Amz-Signature=03938ca9186ebfb19125110abb23fbe7e2b8705de166d09d2658eaafbf1b2742&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQXZDPQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIHzEJiipxl7mJjFtvBQJxkp6hHEg1LDGNjYLeE01XsqxAiBMMwREnig0lZ%2B2BJHRjE%2FXQUGR0dwbjp4xOFEfuOq5ICqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMONarV4KiLHdNoT5uKtwD7Uy4Q79pWCeypmyNyrOKo%2BF%2BINZFynsth3VAEKlKdtpU0iJjVUyPXD2BBLbZGkzhLfW89uPK%2B%2FDcIHjSpo5vDb6UooGY3hzAI7pMKRrYtqT%2BEEDpFKV6QAVdfbe6D1HBaNM0wtUnaQa6MDr8mHUh1QgNFxNzZ3eBpZR2TtnkubEomY1qxHotjWRbadEZxnuWfRiEkAyk18ufQXs888EiaEbDkMaNK7RSWcHnO2Xvd6tETQGnnDEM9vDAZmph5UTMJ3rYm3eSImCRe8dAhLLuIvy57wDbzdZ%2BsNDePsFq5j2hTT8GRzmlP%2FtVyN9QOnuWKAFFB%2Bm9iUkh5ycUwGX4n2mY9legVgBPuJe0ztUWDVK2h2ZvCOZXQd6GgNd9CACmPnF%2FA6gnLFDhPyBm4u%2Fy3%2FaUK%2BwCNyawG%2B9gdSik25CzK%2BAjzJqDry04SDCoW1TrQTIUlkOZZtp%2BurKoLuugoXlrrj6tv%2FoMpITga4Y13QvQaL6mIDtjI2ZLhns3jwa%2FFpv2V1%2FRWHz9O2UsD1bAULKNkYjh1GUvjCBSfi%2FAl0IPsJXj89sy3UV%2FX3S4lHffRRkKUEbqtx%2FCfI5A4K0uaPMbGtLZ607EIgKzhyF7r1Abwhkv95eaW61ruV8wuqm6vgY6pgEwJLsdeVn7pMOYzFZvg63TaypaJxLwa7mTTKo1MT6J1J%2FY95XQjM%2BZuBXRgEN01R2isMFB29xYBxuXNToNA3iBLvoptfBieE503JogdO7ds8Q2JfIjGKnVWgeLvCVSuzhRnownHDYipDEDI%2B5vloTxUSWPYdGHu7ofF2amMJqYvT3rBX7cQ0kTumbkOoc1Ry2HKVCT6I1lLt1R9u5zhRkpM82IBNB5&X-Amz-Signature=b8963cfe314d7c80c7b0bfe52b1e1b207e6c669a34f49f0105db7486d55f3738&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQXZDPQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIHzEJiipxl7mJjFtvBQJxkp6hHEg1LDGNjYLeE01XsqxAiBMMwREnig0lZ%2B2BJHRjE%2FXQUGR0dwbjp4xOFEfuOq5ICqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMONarV4KiLHdNoT5uKtwD7Uy4Q79pWCeypmyNyrOKo%2BF%2BINZFynsth3VAEKlKdtpU0iJjVUyPXD2BBLbZGkzhLfW89uPK%2B%2FDcIHjSpo5vDb6UooGY3hzAI7pMKRrYtqT%2BEEDpFKV6QAVdfbe6D1HBaNM0wtUnaQa6MDr8mHUh1QgNFxNzZ3eBpZR2TtnkubEomY1qxHotjWRbadEZxnuWfRiEkAyk18ufQXs888EiaEbDkMaNK7RSWcHnO2Xvd6tETQGnnDEM9vDAZmph5UTMJ3rYm3eSImCRe8dAhLLuIvy57wDbzdZ%2BsNDePsFq5j2hTT8GRzmlP%2FtVyN9QOnuWKAFFB%2Bm9iUkh5ycUwGX4n2mY9legVgBPuJe0ztUWDVK2h2ZvCOZXQd6GgNd9CACmPnF%2FA6gnLFDhPyBm4u%2Fy3%2FaUK%2BwCNyawG%2B9gdSik25CzK%2BAjzJqDry04SDCoW1TrQTIUlkOZZtp%2BurKoLuugoXlrrj6tv%2FoMpITga4Y13QvQaL6mIDtjI2ZLhns3jwa%2FFpv2V1%2FRWHz9O2UsD1bAULKNkYjh1GUvjCBSfi%2FAl0IPsJXj89sy3UV%2FX3S4lHffRRkKUEbqtx%2FCfI5A4K0uaPMbGtLZ607EIgKzhyF7r1Abwhkv95eaW61ruV8wuqm6vgY6pgEwJLsdeVn7pMOYzFZvg63TaypaJxLwa7mTTKo1MT6J1J%2FY95XQjM%2BZuBXRgEN01R2isMFB29xYBxuXNToNA3iBLvoptfBieE503JogdO7ds8Q2JfIjGKnVWgeLvCVSuzhRnownHDYipDEDI%2B5vloTxUSWPYdGHu7ofF2amMJqYvT3rBX7cQ0kTumbkOoc1Ry2HKVCT6I1lLt1R9u5zhRkpM82IBNB5&X-Amz-Signature=9b855086368b1568eea3bbd7bf5308587992aaab2f72c380cdf4cf7791c6481c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
