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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4FOVN7V%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj3h4%2FywbnE8OzzPVW2yvlXNWREl3Z20ZKXA3UmlJ90AIgcBlNkhi5x10vcz2D47g%2BJmgb6HvugzB8S3keYk8hLWIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnnmadh9hbjMfPNCCrcA6dYMJWJC5CZF8Eo1Xt3Jm22BKycBr1e0BCqy1N%2BwMh2locK0f9Ki1lVSY7bL5zRWuMk28LbzsFPvP6m%2B1n068YAJIg9z6itlVEuHa34l49IVv4I4ooTcVjtCpj2IZvQvY%2FojSQ7z%2BE3iZPxyqpBbmTNgd%2BOmq2r2E%2FAVvRpHTsBPWZId%2B7eg3eyGdtjTh6UKKgJd9XEdVElQEa13mWX8ovJqy%2BALzZ9SYG%2BosaJ07eFzAcjtHLwT%2FV55pq1kWVSTzMb7SDtp8v7bxGInT6U3laX7w%2BsxDV9TioJAwYyuVrZ%2BEw%2Bs8oFPk%2Fn7IBxB1pNYHQ%2BvsE296If23XUiojln8HKBMl7sGzx6kQs5nyR%2FBcxUmGO7mGgmqotyoFYUX1iGHpq0UhvDJHaurGNrodwGNutRQA%2F%2BKWE4wrXbZzOzwDkvOcqYTYdg9zFH2Vxg0GxDrsLPVpWU7BTNHT%2B994hXXXBj2KHXJGGb6z0dI9JLfbX7%2FsBfCpr2uR6JPZJjguSOPYv8Fs7kX48VsV5ePeW4BpOHo%2BE9ctErS9gDWYSPm9s%2BuXxKmegYT3CyKkUbVaTctsXVuF29AuupRMoGnn48xE6Kbq8ZNlCqcNdjh%2BSPS4mJd1ZbY9VoZM6JRQGMMr76L0GOqUBXNuNimMEuKJ9u8A3bmTwagJ90547ychbTXOTngtjmKjmzWx6cFKC8a9xWpzyHCS8%2BcKMh1ZUwrQVYmRzfVQUJJ7%2FuJn7WcUga0COYdrV5DTs2lZ36v%2BgGe9T25IfuRam1RQyayJ9YhBJHgmD9N9jUCe6ZrmOtvLUMFdkePpkcH2d2BmnRtyWT2nxyryDHjdCQzm1mHkvZD5GrfbaDlXJx9ToXsaq&X-Amz-Signature=db3d3327c1d272cc856b7170128f7a6663d5dea8646531bb0b1892d806fae6e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4FOVN7V%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj3h4%2FywbnE8OzzPVW2yvlXNWREl3Z20ZKXA3UmlJ90AIgcBlNkhi5x10vcz2D47g%2BJmgb6HvugzB8S3keYk8hLWIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnnmadh9hbjMfPNCCrcA6dYMJWJC5CZF8Eo1Xt3Jm22BKycBr1e0BCqy1N%2BwMh2locK0f9Ki1lVSY7bL5zRWuMk28LbzsFPvP6m%2B1n068YAJIg9z6itlVEuHa34l49IVv4I4ooTcVjtCpj2IZvQvY%2FojSQ7z%2BE3iZPxyqpBbmTNgd%2BOmq2r2E%2FAVvRpHTsBPWZId%2B7eg3eyGdtjTh6UKKgJd9XEdVElQEa13mWX8ovJqy%2BALzZ9SYG%2BosaJ07eFzAcjtHLwT%2FV55pq1kWVSTzMb7SDtp8v7bxGInT6U3laX7w%2BsxDV9TioJAwYyuVrZ%2BEw%2Bs8oFPk%2Fn7IBxB1pNYHQ%2BvsE296If23XUiojln8HKBMl7sGzx6kQs5nyR%2FBcxUmGO7mGgmqotyoFYUX1iGHpq0UhvDJHaurGNrodwGNutRQA%2F%2BKWE4wrXbZzOzwDkvOcqYTYdg9zFH2Vxg0GxDrsLPVpWU7BTNHT%2B994hXXXBj2KHXJGGb6z0dI9JLfbX7%2FsBfCpr2uR6JPZJjguSOPYv8Fs7kX48VsV5ePeW4BpOHo%2BE9ctErS9gDWYSPm9s%2BuXxKmegYT3CyKkUbVaTctsXVuF29AuupRMoGnn48xE6Kbq8ZNlCqcNdjh%2BSPS4mJd1ZbY9VoZM6JRQGMMr76L0GOqUBXNuNimMEuKJ9u8A3bmTwagJ90547ychbTXOTngtjmKjmzWx6cFKC8a9xWpzyHCS8%2BcKMh1ZUwrQVYmRzfVQUJJ7%2FuJn7WcUga0COYdrV5DTs2lZ36v%2BgGe9T25IfuRam1RQyayJ9YhBJHgmD9N9jUCe6ZrmOtvLUMFdkePpkcH2d2BmnRtyWT2nxyryDHjdCQzm1mHkvZD5GrfbaDlXJx9ToXsaq&X-Amz-Signature=a3b0b00269ff89d715fa4ddfe705edca4033045374d55c3ec9885f1613d5b6f4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4FOVN7V%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj3h4%2FywbnE8OzzPVW2yvlXNWREl3Z20ZKXA3UmlJ90AIgcBlNkhi5x10vcz2D47g%2BJmgb6HvugzB8S3keYk8hLWIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnnmadh9hbjMfPNCCrcA6dYMJWJC5CZF8Eo1Xt3Jm22BKycBr1e0BCqy1N%2BwMh2locK0f9Ki1lVSY7bL5zRWuMk28LbzsFPvP6m%2B1n068YAJIg9z6itlVEuHa34l49IVv4I4ooTcVjtCpj2IZvQvY%2FojSQ7z%2BE3iZPxyqpBbmTNgd%2BOmq2r2E%2FAVvRpHTsBPWZId%2B7eg3eyGdtjTh6UKKgJd9XEdVElQEa13mWX8ovJqy%2BALzZ9SYG%2BosaJ07eFzAcjtHLwT%2FV55pq1kWVSTzMb7SDtp8v7bxGInT6U3laX7w%2BsxDV9TioJAwYyuVrZ%2BEw%2Bs8oFPk%2Fn7IBxB1pNYHQ%2BvsE296If23XUiojln8HKBMl7sGzx6kQs5nyR%2FBcxUmGO7mGgmqotyoFYUX1iGHpq0UhvDJHaurGNrodwGNutRQA%2F%2BKWE4wrXbZzOzwDkvOcqYTYdg9zFH2Vxg0GxDrsLPVpWU7BTNHT%2B994hXXXBj2KHXJGGb6z0dI9JLfbX7%2FsBfCpr2uR6JPZJjguSOPYv8Fs7kX48VsV5ePeW4BpOHo%2BE9ctErS9gDWYSPm9s%2BuXxKmegYT3CyKkUbVaTctsXVuF29AuupRMoGnn48xE6Kbq8ZNlCqcNdjh%2BSPS4mJd1ZbY9VoZM6JRQGMMr76L0GOqUBXNuNimMEuKJ9u8A3bmTwagJ90547ychbTXOTngtjmKjmzWx6cFKC8a9xWpzyHCS8%2BcKMh1ZUwrQVYmRzfVQUJJ7%2FuJn7WcUga0COYdrV5DTs2lZ36v%2BgGe9T25IfuRam1RQyayJ9YhBJHgmD9N9jUCe6ZrmOtvLUMFdkePpkcH2d2BmnRtyWT2nxyryDHjdCQzm1mHkvZD5GrfbaDlXJx9ToXsaq&X-Amz-Signature=7a277560fc80b8a15330e71fc5903bcb1df33f9936c46918ed80ca0c69613156&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4FOVN7V%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj3h4%2FywbnE8OzzPVW2yvlXNWREl3Z20ZKXA3UmlJ90AIgcBlNkhi5x10vcz2D47g%2BJmgb6HvugzB8S3keYk8hLWIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnnmadh9hbjMfPNCCrcA6dYMJWJC5CZF8Eo1Xt3Jm22BKycBr1e0BCqy1N%2BwMh2locK0f9Ki1lVSY7bL5zRWuMk28LbzsFPvP6m%2B1n068YAJIg9z6itlVEuHa34l49IVv4I4ooTcVjtCpj2IZvQvY%2FojSQ7z%2BE3iZPxyqpBbmTNgd%2BOmq2r2E%2FAVvRpHTsBPWZId%2B7eg3eyGdtjTh6UKKgJd9XEdVElQEa13mWX8ovJqy%2BALzZ9SYG%2BosaJ07eFzAcjtHLwT%2FV55pq1kWVSTzMb7SDtp8v7bxGInT6U3laX7w%2BsxDV9TioJAwYyuVrZ%2BEw%2Bs8oFPk%2Fn7IBxB1pNYHQ%2BvsE296If23XUiojln8HKBMl7sGzx6kQs5nyR%2FBcxUmGO7mGgmqotyoFYUX1iGHpq0UhvDJHaurGNrodwGNutRQA%2F%2BKWE4wrXbZzOzwDkvOcqYTYdg9zFH2Vxg0GxDrsLPVpWU7BTNHT%2B994hXXXBj2KHXJGGb6z0dI9JLfbX7%2FsBfCpr2uR6JPZJjguSOPYv8Fs7kX48VsV5ePeW4BpOHo%2BE9ctErS9gDWYSPm9s%2BuXxKmegYT3CyKkUbVaTctsXVuF29AuupRMoGnn48xE6Kbq8ZNlCqcNdjh%2BSPS4mJd1ZbY9VoZM6JRQGMMr76L0GOqUBXNuNimMEuKJ9u8A3bmTwagJ90547ychbTXOTngtjmKjmzWx6cFKC8a9xWpzyHCS8%2BcKMh1ZUwrQVYmRzfVQUJJ7%2FuJn7WcUga0COYdrV5DTs2lZ36v%2BgGe9T25IfuRam1RQyayJ9YhBJHgmD9N9jUCe6ZrmOtvLUMFdkePpkcH2d2BmnRtyWT2nxyryDHjdCQzm1mHkvZD5GrfbaDlXJx9ToXsaq&X-Amz-Signature=cb085693cfe536e1e08047178eac04d5542f9c6ec71e8f0123b3ff443f925771&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4FOVN7V%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj3h4%2FywbnE8OzzPVW2yvlXNWREl3Z20ZKXA3UmlJ90AIgcBlNkhi5x10vcz2D47g%2BJmgb6HvugzB8S3keYk8hLWIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnnmadh9hbjMfPNCCrcA6dYMJWJC5CZF8Eo1Xt3Jm22BKycBr1e0BCqy1N%2BwMh2locK0f9Ki1lVSY7bL5zRWuMk28LbzsFPvP6m%2B1n068YAJIg9z6itlVEuHa34l49IVv4I4ooTcVjtCpj2IZvQvY%2FojSQ7z%2BE3iZPxyqpBbmTNgd%2BOmq2r2E%2FAVvRpHTsBPWZId%2B7eg3eyGdtjTh6UKKgJd9XEdVElQEa13mWX8ovJqy%2BALzZ9SYG%2BosaJ07eFzAcjtHLwT%2FV55pq1kWVSTzMb7SDtp8v7bxGInT6U3laX7w%2BsxDV9TioJAwYyuVrZ%2BEw%2Bs8oFPk%2Fn7IBxB1pNYHQ%2BvsE296If23XUiojln8HKBMl7sGzx6kQs5nyR%2FBcxUmGO7mGgmqotyoFYUX1iGHpq0UhvDJHaurGNrodwGNutRQA%2F%2BKWE4wrXbZzOzwDkvOcqYTYdg9zFH2Vxg0GxDrsLPVpWU7BTNHT%2B994hXXXBj2KHXJGGb6z0dI9JLfbX7%2FsBfCpr2uR6JPZJjguSOPYv8Fs7kX48VsV5ePeW4BpOHo%2BE9ctErS9gDWYSPm9s%2BuXxKmegYT3CyKkUbVaTctsXVuF29AuupRMoGnn48xE6Kbq8ZNlCqcNdjh%2BSPS4mJd1ZbY9VoZM6JRQGMMr76L0GOqUBXNuNimMEuKJ9u8A3bmTwagJ90547ychbTXOTngtjmKjmzWx6cFKC8a9xWpzyHCS8%2BcKMh1ZUwrQVYmRzfVQUJJ7%2FuJn7WcUga0COYdrV5DTs2lZ36v%2BgGe9T25IfuRam1RQyayJ9YhBJHgmD9N9jUCe6ZrmOtvLUMFdkePpkcH2d2BmnRtyWT2nxyryDHjdCQzm1mHkvZD5GrfbaDlXJx9ToXsaq&X-Amz-Signature=a1277093511930814d68587c711041580721432c9f2e25a456b5f753d1dcc239&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
