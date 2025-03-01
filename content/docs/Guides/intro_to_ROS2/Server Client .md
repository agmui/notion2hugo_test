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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EWP272C%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIC5DteS%2FQgQI%2FS4dRg5FJofgWmq92lYz%2BoVyQ5z1C1YOAiAskSJiVULRmGKKMmXH7tx77cCKG7HwFXP%2FrWWM1lbwmiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKri%2Bxqr%2FWFWrtFgUKtwDnfCqaS2P1OOHBbKFXqJtyEXCTabvfuFysKgqG1XI74%2FTWP1RxL04wiroylj5JitxHSCvQzqfvxFRMpqSXDxqO%2BEnyZwpttTsD%2F1CyWIekSi5fsCtBNhxQgN3wNWrH7f08q8shW8wVWa51hAZyqVsviXH5eD7CKzfoQWLDNuqaUyjwwWMDv6fNN7qySXHH6vGKoVasac68wGO20xfnLSSBEQ64sDWLckKoCoRv3kjv6wc%2FJm1uDvv47aRRSwcAdntMXKHRSyFJqnSHD%2B1JsRIiLKP51%2B1XwBXBG5x21ho9n9DEneLOdv5L54wmFQmeTzxp5b8R0b4L7mz4M76G2sBC30wG6itk08fhzN9sCNnjBEX2F5daHXFSeGEw4kLwZQx0HTNhl1b8uyD2EVjglBKRVWQ%2BiDEjlDVutKVfB4DYfR0gZKKmDdwjPiejIXG4Do8WlLcL6MRhYsBm0CEOnOO6UrKqhMA67sV9IH41Jj1es5GTWeUCgfokM%2Bm5MqX5jF%2B%2Bpc2%2FwWH8YmWMDCas7swA6LjcKvYofBSF1qsHP7S0iNUZW%2FKY3lXVmtXHLP3aZoYJSfZbkrHXExi0crTQJn93ry5ohYkLeDwaw70uCrhrf0tlCWaU%2BNwNZs%2BlUkw%2B%2FGJvgY6pgH%2Feep5nrDumKnkJOaYF4rDyZ%2Bk%2BVAdyZoJxmXYsUaOCiCkD0OT9%2BQ%2BNnJG66RkDUbKuKPGibwYLTYNpepDoKzcwn3wJwbmnWiOdodBzZr49aU4SQ2c%2BtN2XwD1UL%2F0Nxkmr%2BWmcjkrn%2Fkh0m9zFecBD%2BMs94oOVDtphABjJwus%2FcgFhpXkIPVlZCRAnzPlO5AAbLO0PnVAirsLLgb87q6%2Bm%2BBhgTlO&X-Amz-Signature=bf1f7100fc02ea221308e489f95d087b0d443858424767047962b3cf9eb0586e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EWP272C%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIC5DteS%2FQgQI%2FS4dRg5FJofgWmq92lYz%2BoVyQ5z1C1YOAiAskSJiVULRmGKKMmXH7tx77cCKG7HwFXP%2FrWWM1lbwmiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKri%2Bxqr%2FWFWrtFgUKtwDnfCqaS2P1OOHBbKFXqJtyEXCTabvfuFysKgqG1XI74%2FTWP1RxL04wiroylj5JitxHSCvQzqfvxFRMpqSXDxqO%2BEnyZwpttTsD%2F1CyWIekSi5fsCtBNhxQgN3wNWrH7f08q8shW8wVWa51hAZyqVsviXH5eD7CKzfoQWLDNuqaUyjwwWMDv6fNN7qySXHH6vGKoVasac68wGO20xfnLSSBEQ64sDWLckKoCoRv3kjv6wc%2FJm1uDvv47aRRSwcAdntMXKHRSyFJqnSHD%2B1JsRIiLKP51%2B1XwBXBG5x21ho9n9DEneLOdv5L54wmFQmeTzxp5b8R0b4L7mz4M76G2sBC30wG6itk08fhzN9sCNnjBEX2F5daHXFSeGEw4kLwZQx0HTNhl1b8uyD2EVjglBKRVWQ%2BiDEjlDVutKVfB4DYfR0gZKKmDdwjPiejIXG4Do8WlLcL6MRhYsBm0CEOnOO6UrKqhMA67sV9IH41Jj1es5GTWeUCgfokM%2Bm5MqX5jF%2B%2Bpc2%2FwWH8YmWMDCas7swA6LjcKvYofBSF1qsHP7S0iNUZW%2FKY3lXVmtXHLP3aZoYJSfZbkrHXExi0crTQJn93ry5ohYkLeDwaw70uCrhrf0tlCWaU%2BNwNZs%2BlUkw%2B%2FGJvgY6pgH%2Feep5nrDumKnkJOaYF4rDyZ%2Bk%2BVAdyZoJxmXYsUaOCiCkD0OT9%2BQ%2BNnJG66RkDUbKuKPGibwYLTYNpepDoKzcwn3wJwbmnWiOdodBzZr49aU4SQ2c%2BtN2XwD1UL%2F0Nxkmr%2BWmcjkrn%2Fkh0m9zFecBD%2BMs94oOVDtphABjJwus%2FcgFhpXkIPVlZCRAnzPlO5AAbLO0PnVAirsLLgb87q6%2Bm%2BBhgTlO&X-Amz-Signature=146c72b40ced3137cfc2788a8ca4d9b487a456db7656a16f1377d793e4cb21f7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EWP272C%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIC5DteS%2FQgQI%2FS4dRg5FJofgWmq92lYz%2BoVyQ5z1C1YOAiAskSJiVULRmGKKMmXH7tx77cCKG7HwFXP%2FrWWM1lbwmiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKri%2Bxqr%2FWFWrtFgUKtwDnfCqaS2P1OOHBbKFXqJtyEXCTabvfuFysKgqG1XI74%2FTWP1RxL04wiroylj5JitxHSCvQzqfvxFRMpqSXDxqO%2BEnyZwpttTsD%2F1CyWIekSi5fsCtBNhxQgN3wNWrH7f08q8shW8wVWa51hAZyqVsviXH5eD7CKzfoQWLDNuqaUyjwwWMDv6fNN7qySXHH6vGKoVasac68wGO20xfnLSSBEQ64sDWLckKoCoRv3kjv6wc%2FJm1uDvv47aRRSwcAdntMXKHRSyFJqnSHD%2B1JsRIiLKP51%2B1XwBXBG5x21ho9n9DEneLOdv5L54wmFQmeTzxp5b8R0b4L7mz4M76G2sBC30wG6itk08fhzN9sCNnjBEX2F5daHXFSeGEw4kLwZQx0HTNhl1b8uyD2EVjglBKRVWQ%2BiDEjlDVutKVfB4DYfR0gZKKmDdwjPiejIXG4Do8WlLcL6MRhYsBm0CEOnOO6UrKqhMA67sV9IH41Jj1es5GTWeUCgfokM%2Bm5MqX5jF%2B%2Bpc2%2FwWH8YmWMDCas7swA6LjcKvYofBSF1qsHP7S0iNUZW%2FKY3lXVmtXHLP3aZoYJSfZbkrHXExi0crTQJn93ry5ohYkLeDwaw70uCrhrf0tlCWaU%2BNwNZs%2BlUkw%2B%2FGJvgY6pgH%2Feep5nrDumKnkJOaYF4rDyZ%2Bk%2BVAdyZoJxmXYsUaOCiCkD0OT9%2BQ%2BNnJG66RkDUbKuKPGibwYLTYNpepDoKzcwn3wJwbmnWiOdodBzZr49aU4SQ2c%2BtN2XwD1UL%2F0Nxkmr%2BWmcjkrn%2Fkh0m9zFecBD%2BMs94oOVDtphABjJwus%2FcgFhpXkIPVlZCRAnzPlO5AAbLO0PnVAirsLLgb87q6%2Bm%2BBhgTlO&X-Amz-Signature=0aa138baa824d3124fddc07402dadd846bee475f0ebe9e953439fdbe67aa041e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EWP272C%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIC5DteS%2FQgQI%2FS4dRg5FJofgWmq92lYz%2BoVyQ5z1C1YOAiAskSJiVULRmGKKMmXH7tx77cCKG7HwFXP%2FrWWM1lbwmiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKri%2Bxqr%2FWFWrtFgUKtwDnfCqaS2P1OOHBbKFXqJtyEXCTabvfuFysKgqG1XI74%2FTWP1RxL04wiroylj5JitxHSCvQzqfvxFRMpqSXDxqO%2BEnyZwpttTsD%2F1CyWIekSi5fsCtBNhxQgN3wNWrH7f08q8shW8wVWa51hAZyqVsviXH5eD7CKzfoQWLDNuqaUyjwwWMDv6fNN7qySXHH6vGKoVasac68wGO20xfnLSSBEQ64sDWLckKoCoRv3kjv6wc%2FJm1uDvv47aRRSwcAdntMXKHRSyFJqnSHD%2B1JsRIiLKP51%2B1XwBXBG5x21ho9n9DEneLOdv5L54wmFQmeTzxp5b8R0b4L7mz4M76G2sBC30wG6itk08fhzN9sCNnjBEX2F5daHXFSeGEw4kLwZQx0HTNhl1b8uyD2EVjglBKRVWQ%2BiDEjlDVutKVfB4DYfR0gZKKmDdwjPiejIXG4Do8WlLcL6MRhYsBm0CEOnOO6UrKqhMA67sV9IH41Jj1es5GTWeUCgfokM%2Bm5MqX5jF%2B%2Bpc2%2FwWH8YmWMDCas7swA6LjcKvYofBSF1qsHP7S0iNUZW%2FKY3lXVmtXHLP3aZoYJSfZbkrHXExi0crTQJn93ry5ohYkLeDwaw70uCrhrf0tlCWaU%2BNwNZs%2BlUkw%2B%2FGJvgY6pgH%2Feep5nrDumKnkJOaYF4rDyZ%2Bk%2BVAdyZoJxmXYsUaOCiCkD0OT9%2BQ%2BNnJG66RkDUbKuKPGibwYLTYNpepDoKzcwn3wJwbmnWiOdodBzZr49aU4SQ2c%2BtN2XwD1UL%2F0Nxkmr%2BWmcjkrn%2Fkh0m9zFecBD%2BMs94oOVDtphABjJwus%2FcgFhpXkIPVlZCRAnzPlO5AAbLO0PnVAirsLLgb87q6%2Bm%2BBhgTlO&X-Amz-Signature=d4d8fa250b63063616641b5400aac9d1a9f5340062d9ec5751ec077088ff4f64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EWP272C%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIC5DteS%2FQgQI%2FS4dRg5FJofgWmq92lYz%2BoVyQ5z1C1YOAiAskSJiVULRmGKKMmXH7tx77cCKG7HwFXP%2FrWWM1lbwmiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKri%2Bxqr%2FWFWrtFgUKtwDnfCqaS2P1OOHBbKFXqJtyEXCTabvfuFysKgqG1XI74%2FTWP1RxL04wiroylj5JitxHSCvQzqfvxFRMpqSXDxqO%2BEnyZwpttTsD%2F1CyWIekSi5fsCtBNhxQgN3wNWrH7f08q8shW8wVWa51hAZyqVsviXH5eD7CKzfoQWLDNuqaUyjwwWMDv6fNN7qySXHH6vGKoVasac68wGO20xfnLSSBEQ64sDWLckKoCoRv3kjv6wc%2FJm1uDvv47aRRSwcAdntMXKHRSyFJqnSHD%2B1JsRIiLKP51%2B1XwBXBG5x21ho9n9DEneLOdv5L54wmFQmeTzxp5b8R0b4L7mz4M76G2sBC30wG6itk08fhzN9sCNnjBEX2F5daHXFSeGEw4kLwZQx0HTNhl1b8uyD2EVjglBKRVWQ%2BiDEjlDVutKVfB4DYfR0gZKKmDdwjPiejIXG4Do8WlLcL6MRhYsBm0CEOnOO6UrKqhMA67sV9IH41Jj1es5GTWeUCgfokM%2Bm5MqX5jF%2B%2Bpc2%2FwWH8YmWMDCas7swA6LjcKvYofBSF1qsHP7S0iNUZW%2FKY3lXVmtXHLP3aZoYJSfZbkrHXExi0crTQJn93ry5ohYkLeDwaw70uCrhrf0tlCWaU%2BNwNZs%2BlUkw%2B%2FGJvgY6pgH%2Feep5nrDumKnkJOaYF4rDyZ%2Bk%2BVAdyZoJxmXYsUaOCiCkD0OT9%2BQ%2BNnJG66RkDUbKuKPGibwYLTYNpepDoKzcwn3wJwbmnWiOdodBzZr49aU4SQ2c%2BtN2XwD1UL%2F0Nxkmr%2BWmcjkrn%2Fkh0m9zFecBD%2BMs94oOVDtphABjJwus%2FcgFhpXkIPVlZCRAnzPlO5AAbLO0PnVAirsLLgb87q6%2Bm%2BBhgTlO&X-Amz-Signature=7a6f41817154d10aff80d4bd7a7b03edf8c0da8f0ec0bcd05e417aab4aff66ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
