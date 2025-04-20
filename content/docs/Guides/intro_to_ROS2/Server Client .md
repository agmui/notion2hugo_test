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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37JWLKD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCXjQdHSxoJl0FyvtWZU9hceB%2F6yr%2B9FxBliWCHHScjnQIhAPhjqG%2BFwtXOk7XtUFxKKyLEmDydJU84maNea7q8C5T%2BKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHGNPGIjpSJLSXwuQq3AOrGdxzoz2xl%2F4LokifKDWjjFxeBb3FGrNM3fN7k%2FO7DA8C8fI3SM3nOIPeBvL2On5Q5cdl%2F7PRwOlYwuMMWyMD9u9Pvo%2BNfPmDMJ%2FfcQ90h1cV%2F%2FXHwzs%2FVWRKaWXRyg3uhl%2BaS5Vy8npdt8tB3bSJQ7asGilukBilaidO3yqjd0fWwRWTw7ucarBNUWAhTsEf%2FZInTlAAA1Apu9BnGRvtmyUqo34LJaTTSlg7MiDgSi4bob1Y0U0Eds%2FUBGt9imn1tIKUcIARyReoIfJnltZE7KEjU6F2XSdF3TF17tQDwzbi2hiej1BTRL0DIcoPfxaGP964S7igpL0Db6aU1eT%2F%2F4qsyUAibWTOPOcSy9TT1PEuXJMIfowWMQUjPKhPJadcy8unvJ82ZS%2BaFMcwjK0XEJ2K9uxDQwNZAoxOG0aVch6XfaoGckUYGVLGEJGQizGa4TE6dLkBl%2FZcOSj6zbUxcsT9pVExYP1f5oCNcI2lP61nX4St%2BXBZtzaq8EZj4%2BSzvL0igBZ8Dw7IgJULoqxx1kBvymVSSZw43kZ6ZBdKiKE5N7%2FQJyRzz5XPhB5K8PWcDbdqoAtmS4qJzWY5TwAzIuYWY%2BTcaYsAexark0qO2uIj6IWSzNNxx6nw6TCg25XABjqkAdnpwLF%2BF9PNgdgeQ%2Brrrj%2Fm205003mD8nUvab%2B7dCxbhu8Zcp3rglCkoHo5vkPHA%2F93u2NPF44Al68fjXKjuUmB0UlM1Pn0LHTbsj7CuM99Dqxc18uQy22160UMbmrbmRyPvfZSpqzJ35AIQipK%2BoaW7r5eSSpivL8F6axqca4ih%2FD9p%2FhIK%2FDd471rXWMObBmuZGjvjODmHBU467PpHV6bbGgi&X-Amz-Signature=e54817571456f7a165475edaa2913c2636d2e47ba4630cf3b25437be504db3c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37JWLKD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCXjQdHSxoJl0FyvtWZU9hceB%2F6yr%2B9FxBliWCHHScjnQIhAPhjqG%2BFwtXOk7XtUFxKKyLEmDydJU84maNea7q8C5T%2BKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHGNPGIjpSJLSXwuQq3AOrGdxzoz2xl%2F4LokifKDWjjFxeBb3FGrNM3fN7k%2FO7DA8C8fI3SM3nOIPeBvL2On5Q5cdl%2F7PRwOlYwuMMWyMD9u9Pvo%2BNfPmDMJ%2FfcQ90h1cV%2F%2FXHwzs%2FVWRKaWXRyg3uhl%2BaS5Vy8npdt8tB3bSJQ7asGilukBilaidO3yqjd0fWwRWTw7ucarBNUWAhTsEf%2FZInTlAAA1Apu9BnGRvtmyUqo34LJaTTSlg7MiDgSi4bob1Y0U0Eds%2FUBGt9imn1tIKUcIARyReoIfJnltZE7KEjU6F2XSdF3TF17tQDwzbi2hiej1BTRL0DIcoPfxaGP964S7igpL0Db6aU1eT%2F%2F4qsyUAibWTOPOcSy9TT1PEuXJMIfowWMQUjPKhPJadcy8unvJ82ZS%2BaFMcwjK0XEJ2K9uxDQwNZAoxOG0aVch6XfaoGckUYGVLGEJGQizGa4TE6dLkBl%2FZcOSj6zbUxcsT9pVExYP1f5oCNcI2lP61nX4St%2BXBZtzaq8EZj4%2BSzvL0igBZ8Dw7IgJULoqxx1kBvymVSSZw43kZ6ZBdKiKE5N7%2FQJyRzz5XPhB5K8PWcDbdqoAtmS4qJzWY5TwAzIuYWY%2BTcaYsAexark0qO2uIj6IWSzNNxx6nw6TCg25XABjqkAdnpwLF%2BF9PNgdgeQ%2Brrrj%2Fm205003mD8nUvab%2B7dCxbhu8Zcp3rglCkoHo5vkPHA%2F93u2NPF44Al68fjXKjuUmB0UlM1Pn0LHTbsj7CuM99Dqxc18uQy22160UMbmrbmRyPvfZSpqzJ35AIQipK%2BoaW7r5eSSpivL8F6axqca4ih%2FD9p%2FhIK%2FDd471rXWMObBmuZGjvjODmHBU467PpHV6bbGgi&X-Amz-Signature=1ecfe7bd12c8f195b0d713252b9794ca3f94647b6fa57b5edcd2b5214b9cd5da&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37JWLKD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCXjQdHSxoJl0FyvtWZU9hceB%2F6yr%2B9FxBliWCHHScjnQIhAPhjqG%2BFwtXOk7XtUFxKKyLEmDydJU84maNea7q8C5T%2BKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHGNPGIjpSJLSXwuQq3AOrGdxzoz2xl%2F4LokifKDWjjFxeBb3FGrNM3fN7k%2FO7DA8C8fI3SM3nOIPeBvL2On5Q5cdl%2F7PRwOlYwuMMWyMD9u9Pvo%2BNfPmDMJ%2FfcQ90h1cV%2F%2FXHwzs%2FVWRKaWXRyg3uhl%2BaS5Vy8npdt8tB3bSJQ7asGilukBilaidO3yqjd0fWwRWTw7ucarBNUWAhTsEf%2FZInTlAAA1Apu9BnGRvtmyUqo34LJaTTSlg7MiDgSi4bob1Y0U0Eds%2FUBGt9imn1tIKUcIARyReoIfJnltZE7KEjU6F2XSdF3TF17tQDwzbi2hiej1BTRL0DIcoPfxaGP964S7igpL0Db6aU1eT%2F%2F4qsyUAibWTOPOcSy9TT1PEuXJMIfowWMQUjPKhPJadcy8unvJ82ZS%2BaFMcwjK0XEJ2K9uxDQwNZAoxOG0aVch6XfaoGckUYGVLGEJGQizGa4TE6dLkBl%2FZcOSj6zbUxcsT9pVExYP1f5oCNcI2lP61nX4St%2BXBZtzaq8EZj4%2BSzvL0igBZ8Dw7IgJULoqxx1kBvymVSSZw43kZ6ZBdKiKE5N7%2FQJyRzz5XPhB5K8PWcDbdqoAtmS4qJzWY5TwAzIuYWY%2BTcaYsAexark0qO2uIj6IWSzNNxx6nw6TCg25XABjqkAdnpwLF%2BF9PNgdgeQ%2Brrrj%2Fm205003mD8nUvab%2B7dCxbhu8Zcp3rglCkoHo5vkPHA%2F93u2NPF44Al68fjXKjuUmB0UlM1Pn0LHTbsj7CuM99Dqxc18uQy22160UMbmrbmRyPvfZSpqzJ35AIQipK%2BoaW7r5eSSpivL8F6axqca4ih%2FD9p%2FhIK%2FDd471rXWMObBmuZGjvjODmHBU467PpHV6bbGgi&X-Amz-Signature=a36fa4014eaf69ad1a42317eb2862e880de02aa298e4cf456388c846430f88b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37JWLKD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCXjQdHSxoJl0FyvtWZU9hceB%2F6yr%2B9FxBliWCHHScjnQIhAPhjqG%2BFwtXOk7XtUFxKKyLEmDydJU84maNea7q8C5T%2BKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHGNPGIjpSJLSXwuQq3AOrGdxzoz2xl%2F4LokifKDWjjFxeBb3FGrNM3fN7k%2FO7DA8C8fI3SM3nOIPeBvL2On5Q5cdl%2F7PRwOlYwuMMWyMD9u9Pvo%2BNfPmDMJ%2FfcQ90h1cV%2F%2FXHwzs%2FVWRKaWXRyg3uhl%2BaS5Vy8npdt8tB3bSJQ7asGilukBilaidO3yqjd0fWwRWTw7ucarBNUWAhTsEf%2FZInTlAAA1Apu9BnGRvtmyUqo34LJaTTSlg7MiDgSi4bob1Y0U0Eds%2FUBGt9imn1tIKUcIARyReoIfJnltZE7KEjU6F2XSdF3TF17tQDwzbi2hiej1BTRL0DIcoPfxaGP964S7igpL0Db6aU1eT%2F%2F4qsyUAibWTOPOcSy9TT1PEuXJMIfowWMQUjPKhPJadcy8unvJ82ZS%2BaFMcwjK0XEJ2K9uxDQwNZAoxOG0aVch6XfaoGckUYGVLGEJGQizGa4TE6dLkBl%2FZcOSj6zbUxcsT9pVExYP1f5oCNcI2lP61nX4St%2BXBZtzaq8EZj4%2BSzvL0igBZ8Dw7IgJULoqxx1kBvymVSSZw43kZ6ZBdKiKE5N7%2FQJyRzz5XPhB5K8PWcDbdqoAtmS4qJzWY5TwAzIuYWY%2BTcaYsAexark0qO2uIj6IWSzNNxx6nw6TCg25XABjqkAdnpwLF%2BF9PNgdgeQ%2Brrrj%2Fm205003mD8nUvab%2B7dCxbhu8Zcp3rglCkoHo5vkPHA%2F93u2NPF44Al68fjXKjuUmB0UlM1Pn0LHTbsj7CuM99Dqxc18uQy22160UMbmrbmRyPvfZSpqzJ35AIQipK%2BoaW7r5eSSpivL8F6axqca4ih%2FD9p%2FhIK%2FDd471rXWMObBmuZGjvjODmHBU467PpHV6bbGgi&X-Amz-Signature=bb146512bf78bc94aab92c285f63ce65a4d190eee77e7b8049bf84151b9a3f2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37JWLKD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCXjQdHSxoJl0FyvtWZU9hceB%2F6yr%2B9FxBliWCHHScjnQIhAPhjqG%2BFwtXOk7XtUFxKKyLEmDydJU84maNea7q8C5T%2BKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHGNPGIjpSJLSXwuQq3AOrGdxzoz2xl%2F4LokifKDWjjFxeBb3FGrNM3fN7k%2FO7DA8C8fI3SM3nOIPeBvL2On5Q5cdl%2F7PRwOlYwuMMWyMD9u9Pvo%2BNfPmDMJ%2FfcQ90h1cV%2F%2FXHwzs%2FVWRKaWXRyg3uhl%2BaS5Vy8npdt8tB3bSJQ7asGilukBilaidO3yqjd0fWwRWTw7ucarBNUWAhTsEf%2FZInTlAAA1Apu9BnGRvtmyUqo34LJaTTSlg7MiDgSi4bob1Y0U0Eds%2FUBGt9imn1tIKUcIARyReoIfJnltZE7KEjU6F2XSdF3TF17tQDwzbi2hiej1BTRL0DIcoPfxaGP964S7igpL0Db6aU1eT%2F%2F4qsyUAibWTOPOcSy9TT1PEuXJMIfowWMQUjPKhPJadcy8unvJ82ZS%2BaFMcwjK0XEJ2K9uxDQwNZAoxOG0aVch6XfaoGckUYGVLGEJGQizGa4TE6dLkBl%2FZcOSj6zbUxcsT9pVExYP1f5oCNcI2lP61nX4St%2BXBZtzaq8EZj4%2BSzvL0igBZ8Dw7IgJULoqxx1kBvymVSSZw43kZ6ZBdKiKE5N7%2FQJyRzz5XPhB5K8PWcDbdqoAtmS4qJzWY5TwAzIuYWY%2BTcaYsAexark0qO2uIj6IWSzNNxx6nw6TCg25XABjqkAdnpwLF%2BF9PNgdgeQ%2Brrrj%2Fm205003mD8nUvab%2B7dCxbhu8Zcp3rglCkoHo5vkPHA%2F93u2NPF44Al68fjXKjuUmB0UlM1Pn0LHTbsj7CuM99Dqxc18uQy22160UMbmrbmRyPvfZSpqzJ35AIQipK%2BoaW7r5eSSpivL8F6axqca4ih%2FD9p%2FhIK%2FDd471rXWMObBmuZGjvjODmHBU467PpHV6bbGgi&X-Amz-Signature=42e6cbe7d7dfc124149753dbe72afa94e9c5152b41dfa6c46a8681b2da5dcb70&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
