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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVE6TDF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUh9M0eH76%2Bn7sRn1tKW%2FnY4DO4ojNEsGnmptPEhKmsAiBlqIUjsxsr%2FzzQNdB7H7MJih97lk0MI4mZK%2FaBClM4QSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeiZZ6WZ3%2BrboCNUrKtwDpWuxb3Wtb3RJNjJAC5VsT%2FKAJjCQSJuaY%2BJRBaM1GfmbNMKftZMm21TjIRfo91QGOyezTad%2FMLAScPrQ3zz8T64wWrPvCd9Ng4t7WtI1uaQGFnyy%2BOT%2FDJrWDRE7s7tN4woDDyzDgyaOXN6L8lmELruuxDiZqL7F%2Bg4Esbz4RoOUqD2kGNYNkk6ubLDXruxFo0xD7J22RkjOXpcIkKlL4GAtj%2B0vFkZDcoXQ6YsShnEXBZjGHNN7WePMWqA6DKKSfWwBsEmZQlAU311EsSkQ5d6P81FoCbfbDXi9Z4wpwWT2X5ap3R1zFnamonBntjwQhLwLih%2Br2cGt6yusTiZ0qb%2FTfWNowA0DtNZMb9PsAQld9tqsM3Qm6ua2TTtBpsmQCWLbR7q3W2n28nkfKuUHuYtOsWqo3agP9X9E%2FpzYP%2BzcaNO1u7vncPLOT6nM7P1UGSR8oRj13EiP1ei9zcQVVfLVoS5RHG6fLvknxNabq4EGMC1amXJF8VizYl6JT1fm6arkjJuk0c359L5zb3p4GUbbuOE8BA800%2FvhJneBSVkN4v0fbV%2FSY%2BJfCY7z86%2BIbWsSEy%2Bzb35Rj6wRD9OJ83AyxHYduU%2B4NgEAKj7eEoIMplqjWMlJUKiPn10wi7LhwQY6pgH5YUtd%2BKBb34DlBMyaJC4cstkX5E2b%2BhNqHbPSkjKBHMcs2MO5gDfEZfq4KbxMf%2FCAbsb%2FivuPfKMAuob2pihlMpGVpCu%2FNZxhUyS8wBjRlm7Se1z0ksgceK%2BxtCr1YBsl2IDDdagQ%2F2ACObtfWkclJIen%2F8VjnWSIiQS51IyG%2B5GlOS17%2FAE2JEi5g9P5oRHifnQU6AF9ER7Kp72QMnnza4zGfcVw&X-Amz-Signature=5035355f57e5fb4821440b830b15b5d78879a285b97dcd68d1ec89ca53f93718&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVE6TDF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUh9M0eH76%2Bn7sRn1tKW%2FnY4DO4ojNEsGnmptPEhKmsAiBlqIUjsxsr%2FzzQNdB7H7MJih97lk0MI4mZK%2FaBClM4QSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeiZZ6WZ3%2BrboCNUrKtwDpWuxb3Wtb3RJNjJAC5VsT%2FKAJjCQSJuaY%2BJRBaM1GfmbNMKftZMm21TjIRfo91QGOyezTad%2FMLAScPrQ3zz8T64wWrPvCd9Ng4t7WtI1uaQGFnyy%2BOT%2FDJrWDRE7s7tN4woDDyzDgyaOXN6L8lmELruuxDiZqL7F%2Bg4Esbz4RoOUqD2kGNYNkk6ubLDXruxFo0xD7J22RkjOXpcIkKlL4GAtj%2B0vFkZDcoXQ6YsShnEXBZjGHNN7WePMWqA6DKKSfWwBsEmZQlAU311EsSkQ5d6P81FoCbfbDXi9Z4wpwWT2X5ap3R1zFnamonBntjwQhLwLih%2Br2cGt6yusTiZ0qb%2FTfWNowA0DtNZMb9PsAQld9tqsM3Qm6ua2TTtBpsmQCWLbR7q3W2n28nkfKuUHuYtOsWqo3agP9X9E%2FpzYP%2BzcaNO1u7vncPLOT6nM7P1UGSR8oRj13EiP1ei9zcQVVfLVoS5RHG6fLvknxNabq4EGMC1amXJF8VizYl6JT1fm6arkjJuk0c359L5zb3p4GUbbuOE8BA800%2FvhJneBSVkN4v0fbV%2FSY%2BJfCY7z86%2BIbWsSEy%2Bzb35Rj6wRD9OJ83AyxHYduU%2B4NgEAKj7eEoIMplqjWMlJUKiPn10wi7LhwQY6pgH5YUtd%2BKBb34DlBMyaJC4cstkX5E2b%2BhNqHbPSkjKBHMcs2MO5gDfEZfq4KbxMf%2FCAbsb%2FivuPfKMAuob2pihlMpGVpCu%2FNZxhUyS8wBjRlm7Se1z0ksgceK%2BxtCr1YBsl2IDDdagQ%2F2ACObtfWkclJIen%2F8VjnWSIiQS51IyG%2B5GlOS17%2FAE2JEi5g9P5oRHifnQU6AF9ER7Kp72QMnnza4zGfcVw&X-Amz-Signature=70245d9860dccb95e55e0614d6de366568b7bd43e6ab81016af234067f844f59&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVE6TDF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUh9M0eH76%2Bn7sRn1tKW%2FnY4DO4ojNEsGnmptPEhKmsAiBlqIUjsxsr%2FzzQNdB7H7MJih97lk0MI4mZK%2FaBClM4QSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeiZZ6WZ3%2BrboCNUrKtwDpWuxb3Wtb3RJNjJAC5VsT%2FKAJjCQSJuaY%2BJRBaM1GfmbNMKftZMm21TjIRfo91QGOyezTad%2FMLAScPrQ3zz8T64wWrPvCd9Ng4t7WtI1uaQGFnyy%2BOT%2FDJrWDRE7s7tN4woDDyzDgyaOXN6L8lmELruuxDiZqL7F%2Bg4Esbz4RoOUqD2kGNYNkk6ubLDXruxFo0xD7J22RkjOXpcIkKlL4GAtj%2B0vFkZDcoXQ6YsShnEXBZjGHNN7WePMWqA6DKKSfWwBsEmZQlAU311EsSkQ5d6P81FoCbfbDXi9Z4wpwWT2X5ap3R1zFnamonBntjwQhLwLih%2Br2cGt6yusTiZ0qb%2FTfWNowA0DtNZMb9PsAQld9tqsM3Qm6ua2TTtBpsmQCWLbR7q3W2n28nkfKuUHuYtOsWqo3agP9X9E%2FpzYP%2BzcaNO1u7vncPLOT6nM7P1UGSR8oRj13EiP1ei9zcQVVfLVoS5RHG6fLvknxNabq4EGMC1amXJF8VizYl6JT1fm6arkjJuk0c359L5zb3p4GUbbuOE8BA800%2FvhJneBSVkN4v0fbV%2FSY%2BJfCY7z86%2BIbWsSEy%2Bzb35Rj6wRD9OJ83AyxHYduU%2B4NgEAKj7eEoIMplqjWMlJUKiPn10wi7LhwQY6pgH5YUtd%2BKBb34DlBMyaJC4cstkX5E2b%2BhNqHbPSkjKBHMcs2MO5gDfEZfq4KbxMf%2FCAbsb%2FivuPfKMAuob2pihlMpGVpCu%2FNZxhUyS8wBjRlm7Se1z0ksgceK%2BxtCr1YBsl2IDDdagQ%2F2ACObtfWkclJIen%2F8VjnWSIiQS51IyG%2B5GlOS17%2FAE2JEi5g9P5oRHifnQU6AF9ER7Kp72QMnnza4zGfcVw&X-Amz-Signature=1794cf5e9413bd2140760e704899e2cbf62b04a1a0e9610f976289a3f686c472&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVE6TDF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUh9M0eH76%2Bn7sRn1tKW%2FnY4DO4ojNEsGnmptPEhKmsAiBlqIUjsxsr%2FzzQNdB7H7MJih97lk0MI4mZK%2FaBClM4QSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeiZZ6WZ3%2BrboCNUrKtwDpWuxb3Wtb3RJNjJAC5VsT%2FKAJjCQSJuaY%2BJRBaM1GfmbNMKftZMm21TjIRfo91QGOyezTad%2FMLAScPrQ3zz8T64wWrPvCd9Ng4t7WtI1uaQGFnyy%2BOT%2FDJrWDRE7s7tN4woDDyzDgyaOXN6L8lmELruuxDiZqL7F%2Bg4Esbz4RoOUqD2kGNYNkk6ubLDXruxFo0xD7J22RkjOXpcIkKlL4GAtj%2B0vFkZDcoXQ6YsShnEXBZjGHNN7WePMWqA6DKKSfWwBsEmZQlAU311EsSkQ5d6P81FoCbfbDXi9Z4wpwWT2X5ap3R1zFnamonBntjwQhLwLih%2Br2cGt6yusTiZ0qb%2FTfWNowA0DtNZMb9PsAQld9tqsM3Qm6ua2TTtBpsmQCWLbR7q3W2n28nkfKuUHuYtOsWqo3agP9X9E%2FpzYP%2BzcaNO1u7vncPLOT6nM7P1UGSR8oRj13EiP1ei9zcQVVfLVoS5RHG6fLvknxNabq4EGMC1amXJF8VizYl6JT1fm6arkjJuk0c359L5zb3p4GUbbuOE8BA800%2FvhJneBSVkN4v0fbV%2FSY%2BJfCY7z86%2BIbWsSEy%2Bzb35Rj6wRD9OJ83AyxHYduU%2B4NgEAKj7eEoIMplqjWMlJUKiPn10wi7LhwQY6pgH5YUtd%2BKBb34DlBMyaJC4cstkX5E2b%2BhNqHbPSkjKBHMcs2MO5gDfEZfq4KbxMf%2FCAbsb%2FivuPfKMAuob2pihlMpGVpCu%2FNZxhUyS8wBjRlm7Se1z0ksgceK%2BxtCr1YBsl2IDDdagQ%2F2ACObtfWkclJIen%2F8VjnWSIiQS51IyG%2B5GlOS17%2FAE2JEi5g9P5oRHifnQU6AF9ER7Kp72QMnnza4zGfcVw&X-Amz-Signature=259dcd43701750aa43b67c5a7aee67ac03856c5eab2b661a4335ea514f88fb51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVE6TDF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUh9M0eH76%2Bn7sRn1tKW%2FnY4DO4ojNEsGnmptPEhKmsAiBlqIUjsxsr%2FzzQNdB7H7MJih97lk0MI4mZK%2FaBClM4QSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeiZZ6WZ3%2BrboCNUrKtwDpWuxb3Wtb3RJNjJAC5VsT%2FKAJjCQSJuaY%2BJRBaM1GfmbNMKftZMm21TjIRfo91QGOyezTad%2FMLAScPrQ3zz8T64wWrPvCd9Ng4t7WtI1uaQGFnyy%2BOT%2FDJrWDRE7s7tN4woDDyzDgyaOXN6L8lmELruuxDiZqL7F%2Bg4Esbz4RoOUqD2kGNYNkk6ubLDXruxFo0xD7J22RkjOXpcIkKlL4GAtj%2B0vFkZDcoXQ6YsShnEXBZjGHNN7WePMWqA6DKKSfWwBsEmZQlAU311EsSkQ5d6P81FoCbfbDXi9Z4wpwWT2X5ap3R1zFnamonBntjwQhLwLih%2Br2cGt6yusTiZ0qb%2FTfWNowA0DtNZMb9PsAQld9tqsM3Qm6ua2TTtBpsmQCWLbR7q3W2n28nkfKuUHuYtOsWqo3agP9X9E%2FpzYP%2BzcaNO1u7vncPLOT6nM7P1UGSR8oRj13EiP1ei9zcQVVfLVoS5RHG6fLvknxNabq4EGMC1amXJF8VizYl6JT1fm6arkjJuk0c359L5zb3p4GUbbuOE8BA800%2FvhJneBSVkN4v0fbV%2FSY%2BJfCY7z86%2BIbWsSEy%2Bzb35Rj6wRD9OJ83AyxHYduU%2B4NgEAKj7eEoIMplqjWMlJUKiPn10wi7LhwQY6pgH5YUtd%2BKBb34DlBMyaJC4cstkX5E2b%2BhNqHbPSkjKBHMcs2MO5gDfEZfq4KbxMf%2FCAbsb%2FivuPfKMAuob2pihlMpGVpCu%2FNZxhUyS8wBjRlm7Se1z0ksgceK%2BxtCr1YBsl2IDDdagQ%2F2ACObtfWkclJIen%2F8VjnWSIiQS51IyG%2B5GlOS17%2FAE2JEi5g9P5oRHifnQU6AF9ER7Kp72QMnnza4zGfcVw&X-Amz-Signature=fa774541769cbc825b414d9276f627a3cc7eb93c80e596d33b6ffec033476491&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
