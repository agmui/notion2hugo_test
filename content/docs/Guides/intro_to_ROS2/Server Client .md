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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2R5FR6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx25A0kILewI50RsTtt03YfJZVJfkol8sYvT5%2FxhfvdAiAC1FZgwiOjNf9F0vPq%2FI6E3i2pvBCSSBA6a3jZWfMnJiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlYW1LSx%2B5vTLtVcRKtwDhkyjt4FLt0DPi3i2Z63y%2FHZ9zaewgJHxJ7k3XuMlDT8jRfpNqcCwwRdF990imF%2FHzqMRuNO4sgUqgAs2iRnBa3fHC81RSog%2B5D1cSLhKJ0AhidFL35LTdeMDJaMFfxuyclTm8czul6dW1gPVtfcinqf1Bod7s%2B0%2FdMMzgo%2B3gH3nco5tV1xwFgp%2FZXVfk4nMk8LM3Ep3Tk9FoKmJvq3oMb2q%2Fqf%2BjubCP%2BrEx0xAGEawCOLI7EP%2F1pW3i29yPVY2k7XIB5BIsegnZ5TW%2BBxngifYxmhw7z3IHDgBjSgWOWcBW4Qar4Q2%2BUaNaXIoZiVg4seVem5ytWSeKl2M9VSBnfcQUHckkosZ%2FX1f9TqZ7rjcupSvuxJWrKTwrupQm9rK6mwMuZc%2Bpopxv%2BWExvjuExVBtwAl8FYB0%2BMqk%2BCNyznGa2Tv56wsTQ7PB7%2BpkORbSo4PG%2FfiR%2FCjkqMQEr52joB%2Bh%2Fwz8CY1GNerGP%2B9Q5RQ2%2Fr5weSVxjHxSaxXPfk%2B9Q7ydwI1kDZNmOqBi2w2Ilw4mDzuqdWd2FnBbxNb1CIMzfE6LA9YIQueRALn0UTKy78v2QLbs%2FwSamZVx0Ylb9lKUbU94ZOFIev%2BOuOGWL%2Fydze5c92ew%2Bg8c%2F8w5c%2FHwwY6pgHK8ZxuloMuQoUaK9MUIHoEuzojnt2KaT00g%2F9kTFTRC1%2FOoTqQPMK%2FCOGPjdD6U2%2FGiR8JjVHlrZd03gWudn40BeQKQKfGM0HZJr2ObillsEO0JJe6EH4%2BRjArKfzqPZrGaHNFdeUqJ%2Bkp8TFRbeEqUzdNRZksJ%2B3HoP8m8KGWe7VGnBxmcld4y4LsUmZqYSWZOK4%2FAvdyo08QkwzEVHu1gYD0dYYW&X-Amz-Signature=1a338d78ea1b26094822724c1d11d52ab6a86bc079ea99520dc0e68ddc4a2173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2R5FR6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx25A0kILewI50RsTtt03YfJZVJfkol8sYvT5%2FxhfvdAiAC1FZgwiOjNf9F0vPq%2FI6E3i2pvBCSSBA6a3jZWfMnJiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlYW1LSx%2B5vTLtVcRKtwDhkyjt4FLt0DPi3i2Z63y%2FHZ9zaewgJHxJ7k3XuMlDT8jRfpNqcCwwRdF990imF%2FHzqMRuNO4sgUqgAs2iRnBa3fHC81RSog%2B5D1cSLhKJ0AhidFL35LTdeMDJaMFfxuyclTm8czul6dW1gPVtfcinqf1Bod7s%2B0%2FdMMzgo%2B3gH3nco5tV1xwFgp%2FZXVfk4nMk8LM3Ep3Tk9FoKmJvq3oMb2q%2Fqf%2BjubCP%2BrEx0xAGEawCOLI7EP%2F1pW3i29yPVY2k7XIB5BIsegnZ5TW%2BBxngifYxmhw7z3IHDgBjSgWOWcBW4Qar4Q2%2BUaNaXIoZiVg4seVem5ytWSeKl2M9VSBnfcQUHckkosZ%2FX1f9TqZ7rjcupSvuxJWrKTwrupQm9rK6mwMuZc%2Bpopxv%2BWExvjuExVBtwAl8FYB0%2BMqk%2BCNyznGa2Tv56wsTQ7PB7%2BpkORbSo4PG%2FfiR%2FCjkqMQEr52joB%2Bh%2Fwz8CY1GNerGP%2B9Q5RQ2%2Fr5weSVxjHxSaxXPfk%2B9Q7ydwI1kDZNmOqBi2w2Ilw4mDzuqdWd2FnBbxNb1CIMzfE6LA9YIQueRALn0UTKy78v2QLbs%2FwSamZVx0Ylb9lKUbU94ZOFIev%2BOuOGWL%2Fydze5c92ew%2Bg8c%2F8w5c%2FHwwY6pgHK8ZxuloMuQoUaK9MUIHoEuzojnt2KaT00g%2F9kTFTRC1%2FOoTqQPMK%2FCOGPjdD6U2%2FGiR8JjVHlrZd03gWudn40BeQKQKfGM0HZJr2ObillsEO0JJe6EH4%2BRjArKfzqPZrGaHNFdeUqJ%2Bkp8TFRbeEqUzdNRZksJ%2B3HoP8m8KGWe7VGnBxmcld4y4LsUmZqYSWZOK4%2FAvdyo08QkwzEVHu1gYD0dYYW&X-Amz-Signature=906f053405bbafcfb460f63179bb55f8a66ae0354b9a187505c05d4d703b8ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2R5FR6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx25A0kILewI50RsTtt03YfJZVJfkol8sYvT5%2FxhfvdAiAC1FZgwiOjNf9F0vPq%2FI6E3i2pvBCSSBA6a3jZWfMnJiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlYW1LSx%2B5vTLtVcRKtwDhkyjt4FLt0DPi3i2Z63y%2FHZ9zaewgJHxJ7k3XuMlDT8jRfpNqcCwwRdF990imF%2FHzqMRuNO4sgUqgAs2iRnBa3fHC81RSog%2B5D1cSLhKJ0AhidFL35LTdeMDJaMFfxuyclTm8czul6dW1gPVtfcinqf1Bod7s%2B0%2FdMMzgo%2B3gH3nco5tV1xwFgp%2FZXVfk4nMk8LM3Ep3Tk9FoKmJvq3oMb2q%2Fqf%2BjubCP%2BrEx0xAGEawCOLI7EP%2F1pW3i29yPVY2k7XIB5BIsegnZ5TW%2BBxngifYxmhw7z3IHDgBjSgWOWcBW4Qar4Q2%2BUaNaXIoZiVg4seVem5ytWSeKl2M9VSBnfcQUHckkosZ%2FX1f9TqZ7rjcupSvuxJWrKTwrupQm9rK6mwMuZc%2Bpopxv%2BWExvjuExVBtwAl8FYB0%2BMqk%2BCNyznGa2Tv56wsTQ7PB7%2BpkORbSo4PG%2FfiR%2FCjkqMQEr52joB%2Bh%2Fwz8CY1GNerGP%2B9Q5RQ2%2Fr5weSVxjHxSaxXPfk%2B9Q7ydwI1kDZNmOqBi2w2Ilw4mDzuqdWd2FnBbxNb1CIMzfE6LA9YIQueRALn0UTKy78v2QLbs%2FwSamZVx0Ylb9lKUbU94ZOFIev%2BOuOGWL%2Fydze5c92ew%2Bg8c%2F8w5c%2FHwwY6pgHK8ZxuloMuQoUaK9MUIHoEuzojnt2KaT00g%2F9kTFTRC1%2FOoTqQPMK%2FCOGPjdD6U2%2FGiR8JjVHlrZd03gWudn40BeQKQKfGM0HZJr2ObillsEO0JJe6EH4%2BRjArKfzqPZrGaHNFdeUqJ%2Bkp8TFRbeEqUzdNRZksJ%2B3HoP8m8KGWe7VGnBxmcld4y4LsUmZqYSWZOK4%2FAvdyo08QkwzEVHu1gYD0dYYW&X-Amz-Signature=65b7cfde076b2041a5051cb24b6e606e6e5c33ebc29a60b5b56fbee91cb3d90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2R5FR6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx25A0kILewI50RsTtt03YfJZVJfkol8sYvT5%2FxhfvdAiAC1FZgwiOjNf9F0vPq%2FI6E3i2pvBCSSBA6a3jZWfMnJiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlYW1LSx%2B5vTLtVcRKtwDhkyjt4FLt0DPi3i2Z63y%2FHZ9zaewgJHxJ7k3XuMlDT8jRfpNqcCwwRdF990imF%2FHzqMRuNO4sgUqgAs2iRnBa3fHC81RSog%2B5D1cSLhKJ0AhidFL35LTdeMDJaMFfxuyclTm8czul6dW1gPVtfcinqf1Bod7s%2B0%2FdMMzgo%2B3gH3nco5tV1xwFgp%2FZXVfk4nMk8LM3Ep3Tk9FoKmJvq3oMb2q%2Fqf%2BjubCP%2BrEx0xAGEawCOLI7EP%2F1pW3i29yPVY2k7XIB5BIsegnZ5TW%2BBxngifYxmhw7z3IHDgBjSgWOWcBW4Qar4Q2%2BUaNaXIoZiVg4seVem5ytWSeKl2M9VSBnfcQUHckkosZ%2FX1f9TqZ7rjcupSvuxJWrKTwrupQm9rK6mwMuZc%2Bpopxv%2BWExvjuExVBtwAl8FYB0%2BMqk%2BCNyznGa2Tv56wsTQ7PB7%2BpkORbSo4PG%2FfiR%2FCjkqMQEr52joB%2Bh%2Fwz8CY1GNerGP%2B9Q5RQ2%2Fr5weSVxjHxSaxXPfk%2B9Q7ydwI1kDZNmOqBi2w2Ilw4mDzuqdWd2FnBbxNb1CIMzfE6LA9YIQueRALn0UTKy78v2QLbs%2FwSamZVx0Ylb9lKUbU94ZOFIev%2BOuOGWL%2Fydze5c92ew%2Bg8c%2F8w5c%2FHwwY6pgHK8ZxuloMuQoUaK9MUIHoEuzojnt2KaT00g%2F9kTFTRC1%2FOoTqQPMK%2FCOGPjdD6U2%2FGiR8JjVHlrZd03gWudn40BeQKQKfGM0HZJr2ObillsEO0JJe6EH4%2BRjArKfzqPZrGaHNFdeUqJ%2Bkp8TFRbeEqUzdNRZksJ%2B3HoP8m8KGWe7VGnBxmcld4y4LsUmZqYSWZOK4%2FAvdyo08QkwzEVHu1gYD0dYYW&X-Amz-Signature=657e7d06a29776d5c522abfb278c64a229353f3a71cfdffd78153cfa21ae27da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2R5FR6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx25A0kILewI50RsTtt03YfJZVJfkol8sYvT5%2FxhfvdAiAC1FZgwiOjNf9F0vPq%2FI6E3i2pvBCSSBA6a3jZWfMnJiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlYW1LSx%2B5vTLtVcRKtwDhkyjt4FLt0DPi3i2Z63y%2FHZ9zaewgJHxJ7k3XuMlDT8jRfpNqcCwwRdF990imF%2FHzqMRuNO4sgUqgAs2iRnBa3fHC81RSog%2B5D1cSLhKJ0AhidFL35LTdeMDJaMFfxuyclTm8czul6dW1gPVtfcinqf1Bod7s%2B0%2FdMMzgo%2B3gH3nco5tV1xwFgp%2FZXVfk4nMk8LM3Ep3Tk9FoKmJvq3oMb2q%2Fqf%2BjubCP%2BrEx0xAGEawCOLI7EP%2F1pW3i29yPVY2k7XIB5BIsegnZ5TW%2BBxngifYxmhw7z3IHDgBjSgWOWcBW4Qar4Q2%2BUaNaXIoZiVg4seVem5ytWSeKl2M9VSBnfcQUHckkosZ%2FX1f9TqZ7rjcupSvuxJWrKTwrupQm9rK6mwMuZc%2Bpopxv%2BWExvjuExVBtwAl8FYB0%2BMqk%2BCNyznGa2Tv56wsTQ7PB7%2BpkORbSo4PG%2FfiR%2FCjkqMQEr52joB%2Bh%2Fwz8CY1GNerGP%2B9Q5RQ2%2Fr5weSVxjHxSaxXPfk%2B9Q7ydwI1kDZNmOqBi2w2Ilw4mDzuqdWd2FnBbxNb1CIMzfE6LA9YIQueRALn0UTKy78v2QLbs%2FwSamZVx0Ylb9lKUbU94ZOFIev%2BOuOGWL%2Fydze5c92ew%2Bg8c%2F8w5c%2FHwwY6pgHK8ZxuloMuQoUaK9MUIHoEuzojnt2KaT00g%2F9kTFTRC1%2FOoTqQPMK%2FCOGPjdD6U2%2FGiR8JjVHlrZd03gWudn40BeQKQKfGM0HZJr2ObillsEO0JJe6EH4%2BRjArKfzqPZrGaHNFdeUqJ%2Bkp8TFRbeEqUzdNRZksJ%2B3HoP8m8KGWe7VGnBxmcld4y4LsUmZqYSWZOK4%2FAvdyo08QkwzEVHu1gYD0dYYW&X-Amz-Signature=343201f69297369debc0869a9a1e86eb76c5d2de538883b230c75c9c7246b519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
