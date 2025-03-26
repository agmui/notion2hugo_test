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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTAPWWZQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYI4Dzk64QdylpAL8%2BGcnopvAAZCi7b7cQsgfiPRVlRAiBkeAguY%2BBRy6eYvR9VdZfQtTaDxdYMXAkWY7V62NwcXir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMNsnTccONSzSTmvQFKtwDmX6Ygw9Lrmf%2F5BanPmreix8wTd2lwPaarOyjAKvQs6M6xx5SjX2foXp1stM%2B1rAC35lID1JAl1SbohyYSWt2jmMaeiET4dj52o48odcly%2BqyJ6D%2BELUCQokIZd%2BimpUAJhMp3t5G%2Bdq1g7nSwHfIDghgMM6UjXpzuR4NH7x7cL%2Bxuo77XdmRc2HEZzJwuGhc7ULR83DqvzOeies6QaZDTPFHwZj0cBswEExhsI6QX%2F47BB3NvYCscT2Rxv2nUr3lRc8jFZiGA7kZ%2BKuIHO4RJ10qGcppX%2BT16rqnheb7LpmO5QbW5B%2F%2Fmm4Mty9fpqj%2FeRKdwlVtCZCKRJN3DyfgQczM8Tv9TcuPFvA0SFQhU2EN4FOG%2F0mqIsn7XsR4cXZFhVvGpbqo3g5H5LrCoYPpjhR9aUwh0QohrIe5rdNZD9XKPrGo6M5mSchlv9CYOhN9SnvolVNVh5MU3D7rdTmW9c%2Be4sMjCMJrTaH1z1%2FFbVlr8C4eMAiXWdnrtp%2BOhL0GiNQEKeVffwIYlF93RT2%2FQhzXmR2bEkh7hqYJMh8y87Z2bO%2FajA3cSjjqYcM%2BoyPk%2FfXEHFygPlLVrPkYkBWWrDU7qCs6XYqFMiWlwdwlLrtLALJXNAOnTRdytGww6uyOvwY6pgHr6I6Wu1WlJt3gN%2Fh0eWjgm%2B%2FX%2BFjl%2BbunF9iPUFHCjqsSW3PNdOVES3JRDtGcbbMeipNpDQjEw2FGONjKceIIU7eVlxMozwXUls8aloYwWgy5DlyvV%2BOa6r6Uc68R1a8x%2F4fybwc%2FIqwBpmixy%2FL7IvmaYMH17yH3VIpW%2F4JvT%2FuqMvr9Eu4ytdTIy1gGcACYI6LJgHg5ov%2B8sRoLGPRZdh5OLKVy&X-Amz-Signature=7694d4804ed3dae5b282f8fb6704fdfc40dd22a2dcc6aefe17b30733bb2b57df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTAPWWZQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYI4Dzk64QdylpAL8%2BGcnopvAAZCi7b7cQsgfiPRVlRAiBkeAguY%2BBRy6eYvR9VdZfQtTaDxdYMXAkWY7V62NwcXir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMNsnTccONSzSTmvQFKtwDmX6Ygw9Lrmf%2F5BanPmreix8wTd2lwPaarOyjAKvQs6M6xx5SjX2foXp1stM%2B1rAC35lID1JAl1SbohyYSWt2jmMaeiET4dj52o48odcly%2BqyJ6D%2BELUCQokIZd%2BimpUAJhMp3t5G%2Bdq1g7nSwHfIDghgMM6UjXpzuR4NH7x7cL%2Bxuo77XdmRc2HEZzJwuGhc7ULR83DqvzOeies6QaZDTPFHwZj0cBswEExhsI6QX%2F47BB3NvYCscT2Rxv2nUr3lRc8jFZiGA7kZ%2BKuIHO4RJ10qGcppX%2BT16rqnheb7LpmO5QbW5B%2F%2Fmm4Mty9fpqj%2FeRKdwlVtCZCKRJN3DyfgQczM8Tv9TcuPFvA0SFQhU2EN4FOG%2F0mqIsn7XsR4cXZFhVvGpbqo3g5H5LrCoYPpjhR9aUwh0QohrIe5rdNZD9XKPrGo6M5mSchlv9CYOhN9SnvolVNVh5MU3D7rdTmW9c%2Be4sMjCMJrTaH1z1%2FFbVlr8C4eMAiXWdnrtp%2BOhL0GiNQEKeVffwIYlF93RT2%2FQhzXmR2bEkh7hqYJMh8y87Z2bO%2FajA3cSjjqYcM%2BoyPk%2FfXEHFygPlLVrPkYkBWWrDU7qCs6XYqFMiWlwdwlLrtLALJXNAOnTRdytGww6uyOvwY6pgHr6I6Wu1WlJt3gN%2Fh0eWjgm%2B%2FX%2BFjl%2BbunF9iPUFHCjqsSW3PNdOVES3JRDtGcbbMeipNpDQjEw2FGONjKceIIU7eVlxMozwXUls8aloYwWgy5DlyvV%2BOa6r6Uc68R1a8x%2F4fybwc%2FIqwBpmixy%2FL7IvmaYMH17yH3VIpW%2F4JvT%2FuqMvr9Eu4ytdTIy1gGcACYI6LJgHg5ov%2B8sRoLGPRZdh5OLKVy&X-Amz-Signature=fa8fa21b91cc75012bc1c237bec727bbb99499f084dc2e31f31550300917d98f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTAPWWZQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYI4Dzk64QdylpAL8%2BGcnopvAAZCi7b7cQsgfiPRVlRAiBkeAguY%2BBRy6eYvR9VdZfQtTaDxdYMXAkWY7V62NwcXir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMNsnTccONSzSTmvQFKtwDmX6Ygw9Lrmf%2F5BanPmreix8wTd2lwPaarOyjAKvQs6M6xx5SjX2foXp1stM%2B1rAC35lID1JAl1SbohyYSWt2jmMaeiET4dj52o48odcly%2BqyJ6D%2BELUCQokIZd%2BimpUAJhMp3t5G%2Bdq1g7nSwHfIDghgMM6UjXpzuR4NH7x7cL%2Bxuo77XdmRc2HEZzJwuGhc7ULR83DqvzOeies6QaZDTPFHwZj0cBswEExhsI6QX%2F47BB3NvYCscT2Rxv2nUr3lRc8jFZiGA7kZ%2BKuIHO4RJ10qGcppX%2BT16rqnheb7LpmO5QbW5B%2F%2Fmm4Mty9fpqj%2FeRKdwlVtCZCKRJN3DyfgQczM8Tv9TcuPFvA0SFQhU2EN4FOG%2F0mqIsn7XsR4cXZFhVvGpbqo3g5H5LrCoYPpjhR9aUwh0QohrIe5rdNZD9XKPrGo6M5mSchlv9CYOhN9SnvolVNVh5MU3D7rdTmW9c%2Be4sMjCMJrTaH1z1%2FFbVlr8C4eMAiXWdnrtp%2BOhL0GiNQEKeVffwIYlF93RT2%2FQhzXmR2bEkh7hqYJMh8y87Z2bO%2FajA3cSjjqYcM%2BoyPk%2FfXEHFygPlLVrPkYkBWWrDU7qCs6XYqFMiWlwdwlLrtLALJXNAOnTRdytGww6uyOvwY6pgHr6I6Wu1WlJt3gN%2Fh0eWjgm%2B%2FX%2BFjl%2BbunF9iPUFHCjqsSW3PNdOVES3JRDtGcbbMeipNpDQjEw2FGONjKceIIU7eVlxMozwXUls8aloYwWgy5DlyvV%2BOa6r6Uc68R1a8x%2F4fybwc%2FIqwBpmixy%2FL7IvmaYMH17yH3VIpW%2F4JvT%2FuqMvr9Eu4ytdTIy1gGcACYI6LJgHg5ov%2B8sRoLGPRZdh5OLKVy&X-Amz-Signature=cc24d45d683b90a2f664c6119b4cf8164edca50d610b5755b7845840709d9d4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTAPWWZQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYI4Dzk64QdylpAL8%2BGcnopvAAZCi7b7cQsgfiPRVlRAiBkeAguY%2BBRy6eYvR9VdZfQtTaDxdYMXAkWY7V62NwcXir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMNsnTccONSzSTmvQFKtwDmX6Ygw9Lrmf%2F5BanPmreix8wTd2lwPaarOyjAKvQs6M6xx5SjX2foXp1stM%2B1rAC35lID1JAl1SbohyYSWt2jmMaeiET4dj52o48odcly%2BqyJ6D%2BELUCQokIZd%2BimpUAJhMp3t5G%2Bdq1g7nSwHfIDghgMM6UjXpzuR4NH7x7cL%2Bxuo77XdmRc2HEZzJwuGhc7ULR83DqvzOeies6QaZDTPFHwZj0cBswEExhsI6QX%2F47BB3NvYCscT2Rxv2nUr3lRc8jFZiGA7kZ%2BKuIHO4RJ10qGcppX%2BT16rqnheb7LpmO5QbW5B%2F%2Fmm4Mty9fpqj%2FeRKdwlVtCZCKRJN3DyfgQczM8Tv9TcuPFvA0SFQhU2EN4FOG%2F0mqIsn7XsR4cXZFhVvGpbqo3g5H5LrCoYPpjhR9aUwh0QohrIe5rdNZD9XKPrGo6M5mSchlv9CYOhN9SnvolVNVh5MU3D7rdTmW9c%2Be4sMjCMJrTaH1z1%2FFbVlr8C4eMAiXWdnrtp%2BOhL0GiNQEKeVffwIYlF93RT2%2FQhzXmR2bEkh7hqYJMh8y87Z2bO%2FajA3cSjjqYcM%2BoyPk%2FfXEHFygPlLVrPkYkBWWrDU7qCs6XYqFMiWlwdwlLrtLALJXNAOnTRdytGww6uyOvwY6pgHr6I6Wu1WlJt3gN%2Fh0eWjgm%2B%2FX%2BFjl%2BbunF9iPUFHCjqsSW3PNdOVES3JRDtGcbbMeipNpDQjEw2FGONjKceIIU7eVlxMozwXUls8aloYwWgy5DlyvV%2BOa6r6Uc68R1a8x%2F4fybwc%2FIqwBpmixy%2FL7IvmaYMH17yH3VIpW%2F4JvT%2FuqMvr9Eu4ytdTIy1gGcACYI6LJgHg5ov%2B8sRoLGPRZdh5OLKVy&X-Amz-Signature=8cf5e0330659096ab895940836a75140132883e63a8db25b2665bfd827b8d3a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTAPWWZQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYI4Dzk64QdylpAL8%2BGcnopvAAZCi7b7cQsgfiPRVlRAiBkeAguY%2BBRy6eYvR9VdZfQtTaDxdYMXAkWY7V62NwcXir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMNsnTccONSzSTmvQFKtwDmX6Ygw9Lrmf%2F5BanPmreix8wTd2lwPaarOyjAKvQs6M6xx5SjX2foXp1stM%2B1rAC35lID1JAl1SbohyYSWt2jmMaeiET4dj52o48odcly%2BqyJ6D%2BELUCQokIZd%2BimpUAJhMp3t5G%2Bdq1g7nSwHfIDghgMM6UjXpzuR4NH7x7cL%2Bxuo77XdmRc2HEZzJwuGhc7ULR83DqvzOeies6QaZDTPFHwZj0cBswEExhsI6QX%2F47BB3NvYCscT2Rxv2nUr3lRc8jFZiGA7kZ%2BKuIHO4RJ10qGcppX%2BT16rqnheb7LpmO5QbW5B%2F%2Fmm4Mty9fpqj%2FeRKdwlVtCZCKRJN3DyfgQczM8Tv9TcuPFvA0SFQhU2EN4FOG%2F0mqIsn7XsR4cXZFhVvGpbqo3g5H5LrCoYPpjhR9aUwh0QohrIe5rdNZD9XKPrGo6M5mSchlv9CYOhN9SnvolVNVh5MU3D7rdTmW9c%2Be4sMjCMJrTaH1z1%2FFbVlr8C4eMAiXWdnrtp%2BOhL0GiNQEKeVffwIYlF93RT2%2FQhzXmR2bEkh7hqYJMh8y87Z2bO%2FajA3cSjjqYcM%2BoyPk%2FfXEHFygPlLVrPkYkBWWrDU7qCs6XYqFMiWlwdwlLrtLALJXNAOnTRdytGww6uyOvwY6pgHr6I6Wu1WlJt3gN%2Fh0eWjgm%2B%2FX%2BFjl%2BbunF9iPUFHCjqsSW3PNdOVES3JRDtGcbbMeipNpDQjEw2FGONjKceIIU7eVlxMozwXUls8aloYwWgy5DlyvV%2BOa6r6Uc68R1a8x%2F4fybwc%2FIqwBpmixy%2FL7IvmaYMH17yH3VIpW%2F4JvT%2FuqMvr9Eu4ytdTIy1gGcACYI6LJgHg5ov%2B8sRoLGPRZdh5OLKVy&X-Amz-Signature=0f58e1f499c9503c1c7a9ac8186456c0312b6e852dc60888ba0e392357df21d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
