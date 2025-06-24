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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIJYKWXU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAmZnX6vWDkPgIomoTb89YpN0Iew8gU1QSZBp9fAK7PcAiEApUf6va08cpootRd79kvWjuVWTsaNsS0cGF1bEh7D6e4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLnfkD32O17BpBQb0CrcAxTsDxkioEJ%2BpXCiXLwHi9JwlrWKa%2FQeklQ2tuNp%2FXk95drHoWtORrRI4Nsl7drWYBcJTmSpP3OpxUwmEUU081n5oKcgDKxKgrgTwBeL2MxFkq2lG91Onps6lGakVyPZccq3fTERv4mjpdC2rgeMFCswIJbYNQ4uXYKp6f%2BGBQpCv5J1ocGXz96Ps%2FSb13WTtnTgLGjLbKxJo3ZMvp96I4Gis1CQmYW2srg0NAxBh4q7LJVkDdZoqZvG%2BkknKFFqzVscYpSSMzs8YpAh%2B3KaY3PJe5sj42849xGlNWabTJjTB7WsbVfAbWbo66ZFx%2Fg25ptnV6CTeR6fMCBBJS1dN4pR1mzgOfnrY7O7v7kWiJfB8zc0TsUYh6VHR5rEeFmDeMq39Suj8ErUflpjPaWMycycgmIhHL3Dm1Xa7J%2Bn0eEoy60zMkfnGguQ%2BFaRATKPWRwWaVYIGtwlY8BZxqqmWlQYFvXIB9wXAi8QLUH9hLg0%2FhzfypP9AInisEW5tFpvqfs0IfCsIUrprmkiW%2FYSsIsSbrf7a2fsdWA3a4OcoSXSG1QuKwJuzL4H9qy9rXZ90CvBJ5k7cqxudHntzoF468TfmwkG2DNro3NLGb2EqqJjAm6VN0mYkET9AhWnMP3N6MIGOqUB3kmse5zk7%2BUotQ%2FkqT1DfHDzV%2FKpzF9uTdDST7kVXTYGhxjpfrpjqt%2FJHLIVsfmR0S0m8E7cPHmQJ%2BkzUAvR80GcQ1qlF8p8ebUf1d%2BmvcZauen1Q3H8vtTGqnj8Gby6TYSZsJ%2FnjLiChWBZWHNdY4mAP292jAOkRLGj79AEz0F8qfLQoQIeRweiNKP%2FybKZOU%2Fn3RYkkWesd5fvY6NXmnUBj7ln&X-Amz-Signature=01f33a368f29687ac64dd8dbf8cb0b219ba5abaf3938f74869a1b5e9843c159a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIJYKWXU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAmZnX6vWDkPgIomoTb89YpN0Iew8gU1QSZBp9fAK7PcAiEApUf6va08cpootRd79kvWjuVWTsaNsS0cGF1bEh7D6e4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLnfkD32O17BpBQb0CrcAxTsDxkioEJ%2BpXCiXLwHi9JwlrWKa%2FQeklQ2tuNp%2FXk95drHoWtORrRI4Nsl7drWYBcJTmSpP3OpxUwmEUU081n5oKcgDKxKgrgTwBeL2MxFkq2lG91Onps6lGakVyPZccq3fTERv4mjpdC2rgeMFCswIJbYNQ4uXYKp6f%2BGBQpCv5J1ocGXz96Ps%2FSb13WTtnTgLGjLbKxJo3ZMvp96I4Gis1CQmYW2srg0NAxBh4q7LJVkDdZoqZvG%2BkknKFFqzVscYpSSMzs8YpAh%2B3KaY3PJe5sj42849xGlNWabTJjTB7WsbVfAbWbo66ZFx%2Fg25ptnV6CTeR6fMCBBJS1dN4pR1mzgOfnrY7O7v7kWiJfB8zc0TsUYh6VHR5rEeFmDeMq39Suj8ErUflpjPaWMycycgmIhHL3Dm1Xa7J%2Bn0eEoy60zMkfnGguQ%2BFaRATKPWRwWaVYIGtwlY8BZxqqmWlQYFvXIB9wXAi8QLUH9hLg0%2FhzfypP9AInisEW5tFpvqfs0IfCsIUrprmkiW%2FYSsIsSbrf7a2fsdWA3a4OcoSXSG1QuKwJuzL4H9qy9rXZ90CvBJ5k7cqxudHntzoF468TfmwkG2DNro3NLGb2EqqJjAm6VN0mYkET9AhWnMP3N6MIGOqUB3kmse5zk7%2BUotQ%2FkqT1DfHDzV%2FKpzF9uTdDST7kVXTYGhxjpfrpjqt%2FJHLIVsfmR0S0m8E7cPHmQJ%2BkzUAvR80GcQ1qlF8p8ebUf1d%2BmvcZauen1Q3H8vtTGqnj8Gby6TYSZsJ%2FnjLiChWBZWHNdY4mAP292jAOkRLGj79AEz0F8qfLQoQIeRweiNKP%2FybKZOU%2Fn3RYkkWesd5fvY6NXmnUBj7ln&X-Amz-Signature=baa2bbe14e493bb7d5224716cb7c900f72a237737d4ccc13372359c7be5f938b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIJYKWXU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAmZnX6vWDkPgIomoTb89YpN0Iew8gU1QSZBp9fAK7PcAiEApUf6va08cpootRd79kvWjuVWTsaNsS0cGF1bEh7D6e4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLnfkD32O17BpBQb0CrcAxTsDxkioEJ%2BpXCiXLwHi9JwlrWKa%2FQeklQ2tuNp%2FXk95drHoWtORrRI4Nsl7drWYBcJTmSpP3OpxUwmEUU081n5oKcgDKxKgrgTwBeL2MxFkq2lG91Onps6lGakVyPZccq3fTERv4mjpdC2rgeMFCswIJbYNQ4uXYKp6f%2BGBQpCv5J1ocGXz96Ps%2FSb13WTtnTgLGjLbKxJo3ZMvp96I4Gis1CQmYW2srg0NAxBh4q7LJVkDdZoqZvG%2BkknKFFqzVscYpSSMzs8YpAh%2B3KaY3PJe5sj42849xGlNWabTJjTB7WsbVfAbWbo66ZFx%2Fg25ptnV6CTeR6fMCBBJS1dN4pR1mzgOfnrY7O7v7kWiJfB8zc0TsUYh6VHR5rEeFmDeMq39Suj8ErUflpjPaWMycycgmIhHL3Dm1Xa7J%2Bn0eEoy60zMkfnGguQ%2BFaRATKPWRwWaVYIGtwlY8BZxqqmWlQYFvXIB9wXAi8QLUH9hLg0%2FhzfypP9AInisEW5tFpvqfs0IfCsIUrprmkiW%2FYSsIsSbrf7a2fsdWA3a4OcoSXSG1QuKwJuzL4H9qy9rXZ90CvBJ5k7cqxudHntzoF468TfmwkG2DNro3NLGb2EqqJjAm6VN0mYkET9AhWnMP3N6MIGOqUB3kmse5zk7%2BUotQ%2FkqT1DfHDzV%2FKpzF9uTdDST7kVXTYGhxjpfrpjqt%2FJHLIVsfmR0S0m8E7cPHmQJ%2BkzUAvR80GcQ1qlF8p8ebUf1d%2BmvcZauen1Q3H8vtTGqnj8Gby6TYSZsJ%2FnjLiChWBZWHNdY4mAP292jAOkRLGj79AEz0F8qfLQoQIeRweiNKP%2FybKZOU%2Fn3RYkkWesd5fvY6NXmnUBj7ln&X-Amz-Signature=08beb95c6b5d2db7de5f71c0eefc5e89653334c0ae8bdedff3d99e5f59c8c2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIJYKWXU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAmZnX6vWDkPgIomoTb89YpN0Iew8gU1QSZBp9fAK7PcAiEApUf6va08cpootRd79kvWjuVWTsaNsS0cGF1bEh7D6e4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLnfkD32O17BpBQb0CrcAxTsDxkioEJ%2BpXCiXLwHi9JwlrWKa%2FQeklQ2tuNp%2FXk95drHoWtORrRI4Nsl7drWYBcJTmSpP3OpxUwmEUU081n5oKcgDKxKgrgTwBeL2MxFkq2lG91Onps6lGakVyPZccq3fTERv4mjpdC2rgeMFCswIJbYNQ4uXYKp6f%2BGBQpCv5J1ocGXz96Ps%2FSb13WTtnTgLGjLbKxJo3ZMvp96I4Gis1CQmYW2srg0NAxBh4q7LJVkDdZoqZvG%2BkknKFFqzVscYpSSMzs8YpAh%2B3KaY3PJe5sj42849xGlNWabTJjTB7WsbVfAbWbo66ZFx%2Fg25ptnV6CTeR6fMCBBJS1dN4pR1mzgOfnrY7O7v7kWiJfB8zc0TsUYh6VHR5rEeFmDeMq39Suj8ErUflpjPaWMycycgmIhHL3Dm1Xa7J%2Bn0eEoy60zMkfnGguQ%2BFaRATKPWRwWaVYIGtwlY8BZxqqmWlQYFvXIB9wXAi8QLUH9hLg0%2FhzfypP9AInisEW5tFpvqfs0IfCsIUrprmkiW%2FYSsIsSbrf7a2fsdWA3a4OcoSXSG1QuKwJuzL4H9qy9rXZ90CvBJ5k7cqxudHntzoF468TfmwkG2DNro3NLGb2EqqJjAm6VN0mYkET9AhWnMP3N6MIGOqUB3kmse5zk7%2BUotQ%2FkqT1DfHDzV%2FKpzF9uTdDST7kVXTYGhxjpfrpjqt%2FJHLIVsfmR0S0m8E7cPHmQJ%2BkzUAvR80GcQ1qlF8p8ebUf1d%2BmvcZauen1Q3H8vtTGqnj8Gby6TYSZsJ%2FnjLiChWBZWHNdY4mAP292jAOkRLGj79AEz0F8qfLQoQIeRweiNKP%2FybKZOU%2Fn3RYkkWesd5fvY6NXmnUBj7ln&X-Amz-Signature=e7e4adfbf13334e74dfeba2c8866f7054405c72cf706131085304b4e045acc57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIJYKWXU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAmZnX6vWDkPgIomoTb89YpN0Iew8gU1QSZBp9fAK7PcAiEApUf6va08cpootRd79kvWjuVWTsaNsS0cGF1bEh7D6e4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLnfkD32O17BpBQb0CrcAxTsDxkioEJ%2BpXCiXLwHi9JwlrWKa%2FQeklQ2tuNp%2FXk95drHoWtORrRI4Nsl7drWYBcJTmSpP3OpxUwmEUU081n5oKcgDKxKgrgTwBeL2MxFkq2lG91Onps6lGakVyPZccq3fTERv4mjpdC2rgeMFCswIJbYNQ4uXYKp6f%2BGBQpCv5J1ocGXz96Ps%2FSb13WTtnTgLGjLbKxJo3ZMvp96I4Gis1CQmYW2srg0NAxBh4q7LJVkDdZoqZvG%2BkknKFFqzVscYpSSMzs8YpAh%2B3KaY3PJe5sj42849xGlNWabTJjTB7WsbVfAbWbo66ZFx%2Fg25ptnV6CTeR6fMCBBJS1dN4pR1mzgOfnrY7O7v7kWiJfB8zc0TsUYh6VHR5rEeFmDeMq39Suj8ErUflpjPaWMycycgmIhHL3Dm1Xa7J%2Bn0eEoy60zMkfnGguQ%2BFaRATKPWRwWaVYIGtwlY8BZxqqmWlQYFvXIB9wXAi8QLUH9hLg0%2FhzfypP9AInisEW5tFpvqfs0IfCsIUrprmkiW%2FYSsIsSbrf7a2fsdWA3a4OcoSXSG1QuKwJuzL4H9qy9rXZ90CvBJ5k7cqxudHntzoF468TfmwkG2DNro3NLGb2EqqJjAm6VN0mYkET9AhWnMP3N6MIGOqUB3kmse5zk7%2BUotQ%2FkqT1DfHDzV%2FKpzF9uTdDST7kVXTYGhxjpfrpjqt%2FJHLIVsfmR0S0m8E7cPHmQJ%2BkzUAvR80GcQ1qlF8p8ebUf1d%2BmvcZauen1Q3H8vtTGqnj8Gby6TYSZsJ%2FnjLiChWBZWHNdY4mAP292jAOkRLGj79AEz0F8qfLQoQIeRweiNKP%2FybKZOU%2Fn3RYkkWesd5fvY6NXmnUBj7ln&X-Amz-Signature=25499dd38f12bae3530902fa6d8260639a1e8509e312bda9ae94d2bbd629fa42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
