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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X3JDBCV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B5XUxG5OhbJ84cCrnVReO5VunE72OAQpEt7%2BP%2FIM3uAiEAndpUCvhMzT5MGQ%2F4fnnbccr7nzreBJnevADdF5K7%2F1UqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhxcYFEehi6IhK67ircAyuR6%2BdzPmAZxHMD5NfAXHyt%2BlnxJXpv2Sed4Q6%2BBmeNAfLH8MlX1n1fe7bZLnRyHUYjuqnQwSZpQNbxS3Lyj6pFLJcAeZa5U51bqfmS5VqxG5vBVrKmEO6u%2BbUyz1H8p50mGkgtpWv%2FueZFWCSPBF2QuZbIghxgJFRpTIBkePdwo6XbIjKAoRqMYPvu2JuomRLaWQs%2Ff6T52OlmZHyxX9fydOrjtuXNgPT8lVZ3S2yi9R2mkyTz1Wyry%2B15PIDvcNUYolP7yn3pNY3bP97hfSo6Vm0LldLcQ5hZJBjyMOWI27jKFnT1U6CBtGl1hS8zdd7tMN6gHzQsXH%2BnsqvQrsXFxpRds1PhvkFvuLEzdxfUDf3unH22H9nZ4gVJSJXIpLksd73PygopSK0K%2BqF2hClcfZOIWq62ARNNb54N2R2FhHfh%2B8xFBTYmXNeadhr7coxiXyQ5wmh7mYYzUdC3ROMGrwutgQOiG7NmBYAqVE9aHNUIea2AeTepR9K3urGaI08r2k3aPnlyBucyRAY0fQQCBnVSJm8T8xvSdXyJgPWK%2Fu7SoXiZLmDsYHUGfqv8vbD6YCTj3lX%2BhJx3ZJgfgGR3JF6aOhwJPH%2BEvHZGiiTz3%2F%2BjHR4umWm1b2iFMPGXqb0GOqUBGiEme2ePr7e3ejlSBFSpFbGD9i%2BK%2FNMftFhbVrDeUpqDR2FAfgPL%2BgMA%2B3UFKJleew51F%2BZ0bqI8DTrdTQm0ABaCWBEBvThTyqA9Kk%2BnCk5JGy05SC0o66Ay0JF2KilrozArnc6YE5GEfCwAeP%2B%2FjPIff6%2BVfMLukndY8Qqjt9jMaB1jJhs380Z3dGgkn51WQ8RtqeHWjVRDaEKsmq77exO9WDi1&X-Amz-Signature=572524b2a7957a5cd070631bf96e57b5eddc74e6d04bff46dd01ce849ae93eba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X3JDBCV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B5XUxG5OhbJ84cCrnVReO5VunE72OAQpEt7%2BP%2FIM3uAiEAndpUCvhMzT5MGQ%2F4fnnbccr7nzreBJnevADdF5K7%2F1UqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhxcYFEehi6IhK67ircAyuR6%2BdzPmAZxHMD5NfAXHyt%2BlnxJXpv2Sed4Q6%2BBmeNAfLH8MlX1n1fe7bZLnRyHUYjuqnQwSZpQNbxS3Lyj6pFLJcAeZa5U51bqfmS5VqxG5vBVrKmEO6u%2BbUyz1H8p50mGkgtpWv%2FueZFWCSPBF2QuZbIghxgJFRpTIBkePdwo6XbIjKAoRqMYPvu2JuomRLaWQs%2Ff6T52OlmZHyxX9fydOrjtuXNgPT8lVZ3S2yi9R2mkyTz1Wyry%2B15PIDvcNUYolP7yn3pNY3bP97hfSo6Vm0LldLcQ5hZJBjyMOWI27jKFnT1U6CBtGl1hS8zdd7tMN6gHzQsXH%2BnsqvQrsXFxpRds1PhvkFvuLEzdxfUDf3unH22H9nZ4gVJSJXIpLksd73PygopSK0K%2BqF2hClcfZOIWq62ARNNb54N2R2FhHfh%2B8xFBTYmXNeadhr7coxiXyQ5wmh7mYYzUdC3ROMGrwutgQOiG7NmBYAqVE9aHNUIea2AeTepR9K3urGaI08r2k3aPnlyBucyRAY0fQQCBnVSJm8T8xvSdXyJgPWK%2Fu7SoXiZLmDsYHUGfqv8vbD6YCTj3lX%2BhJx3ZJgfgGR3JF6aOhwJPH%2BEvHZGiiTz3%2F%2BjHR4umWm1b2iFMPGXqb0GOqUBGiEme2ePr7e3ejlSBFSpFbGD9i%2BK%2FNMftFhbVrDeUpqDR2FAfgPL%2BgMA%2B3UFKJleew51F%2BZ0bqI8DTrdTQm0ABaCWBEBvThTyqA9Kk%2BnCk5JGy05SC0o66Ay0JF2KilrozArnc6YE5GEfCwAeP%2B%2FjPIff6%2BVfMLukndY8Qqjt9jMaB1jJhs380Z3dGgkn51WQ8RtqeHWjVRDaEKsmq77exO9WDi1&X-Amz-Signature=01e5f8c2322fbdfd7e78a8b88ddb33b01e37ba542960cf8e1183afe09a54fff2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X3JDBCV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B5XUxG5OhbJ84cCrnVReO5VunE72OAQpEt7%2BP%2FIM3uAiEAndpUCvhMzT5MGQ%2F4fnnbccr7nzreBJnevADdF5K7%2F1UqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhxcYFEehi6IhK67ircAyuR6%2BdzPmAZxHMD5NfAXHyt%2BlnxJXpv2Sed4Q6%2BBmeNAfLH8MlX1n1fe7bZLnRyHUYjuqnQwSZpQNbxS3Lyj6pFLJcAeZa5U51bqfmS5VqxG5vBVrKmEO6u%2BbUyz1H8p50mGkgtpWv%2FueZFWCSPBF2QuZbIghxgJFRpTIBkePdwo6XbIjKAoRqMYPvu2JuomRLaWQs%2Ff6T52OlmZHyxX9fydOrjtuXNgPT8lVZ3S2yi9R2mkyTz1Wyry%2B15PIDvcNUYolP7yn3pNY3bP97hfSo6Vm0LldLcQ5hZJBjyMOWI27jKFnT1U6CBtGl1hS8zdd7tMN6gHzQsXH%2BnsqvQrsXFxpRds1PhvkFvuLEzdxfUDf3unH22H9nZ4gVJSJXIpLksd73PygopSK0K%2BqF2hClcfZOIWq62ARNNb54N2R2FhHfh%2B8xFBTYmXNeadhr7coxiXyQ5wmh7mYYzUdC3ROMGrwutgQOiG7NmBYAqVE9aHNUIea2AeTepR9K3urGaI08r2k3aPnlyBucyRAY0fQQCBnVSJm8T8xvSdXyJgPWK%2Fu7SoXiZLmDsYHUGfqv8vbD6YCTj3lX%2BhJx3ZJgfgGR3JF6aOhwJPH%2BEvHZGiiTz3%2F%2BjHR4umWm1b2iFMPGXqb0GOqUBGiEme2ePr7e3ejlSBFSpFbGD9i%2BK%2FNMftFhbVrDeUpqDR2FAfgPL%2BgMA%2B3UFKJleew51F%2BZ0bqI8DTrdTQm0ABaCWBEBvThTyqA9Kk%2BnCk5JGy05SC0o66Ay0JF2KilrozArnc6YE5GEfCwAeP%2B%2FjPIff6%2BVfMLukndY8Qqjt9jMaB1jJhs380Z3dGgkn51WQ8RtqeHWjVRDaEKsmq77exO9WDi1&X-Amz-Signature=7b518c8ca92f8ae3a1f7c86a1c542affdccc4c297d490e87bc3a514b1d8003f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X3JDBCV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B5XUxG5OhbJ84cCrnVReO5VunE72OAQpEt7%2BP%2FIM3uAiEAndpUCvhMzT5MGQ%2F4fnnbccr7nzreBJnevADdF5K7%2F1UqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhxcYFEehi6IhK67ircAyuR6%2BdzPmAZxHMD5NfAXHyt%2BlnxJXpv2Sed4Q6%2BBmeNAfLH8MlX1n1fe7bZLnRyHUYjuqnQwSZpQNbxS3Lyj6pFLJcAeZa5U51bqfmS5VqxG5vBVrKmEO6u%2BbUyz1H8p50mGkgtpWv%2FueZFWCSPBF2QuZbIghxgJFRpTIBkePdwo6XbIjKAoRqMYPvu2JuomRLaWQs%2Ff6T52OlmZHyxX9fydOrjtuXNgPT8lVZ3S2yi9R2mkyTz1Wyry%2B15PIDvcNUYolP7yn3pNY3bP97hfSo6Vm0LldLcQ5hZJBjyMOWI27jKFnT1U6CBtGl1hS8zdd7tMN6gHzQsXH%2BnsqvQrsXFxpRds1PhvkFvuLEzdxfUDf3unH22H9nZ4gVJSJXIpLksd73PygopSK0K%2BqF2hClcfZOIWq62ARNNb54N2R2FhHfh%2B8xFBTYmXNeadhr7coxiXyQ5wmh7mYYzUdC3ROMGrwutgQOiG7NmBYAqVE9aHNUIea2AeTepR9K3urGaI08r2k3aPnlyBucyRAY0fQQCBnVSJm8T8xvSdXyJgPWK%2Fu7SoXiZLmDsYHUGfqv8vbD6YCTj3lX%2BhJx3ZJgfgGR3JF6aOhwJPH%2BEvHZGiiTz3%2F%2BjHR4umWm1b2iFMPGXqb0GOqUBGiEme2ePr7e3ejlSBFSpFbGD9i%2BK%2FNMftFhbVrDeUpqDR2FAfgPL%2BgMA%2B3UFKJleew51F%2BZ0bqI8DTrdTQm0ABaCWBEBvThTyqA9Kk%2BnCk5JGy05SC0o66Ay0JF2KilrozArnc6YE5GEfCwAeP%2B%2FjPIff6%2BVfMLukndY8Qqjt9jMaB1jJhs380Z3dGgkn51WQ8RtqeHWjVRDaEKsmq77exO9WDi1&X-Amz-Signature=f23b3142311e23ed9e477e7e4147d0ef60bc53ec328776446f39cc3c41652dd7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X3JDBCV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B5XUxG5OhbJ84cCrnVReO5VunE72OAQpEt7%2BP%2FIM3uAiEAndpUCvhMzT5MGQ%2F4fnnbccr7nzreBJnevADdF5K7%2F1UqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhxcYFEehi6IhK67ircAyuR6%2BdzPmAZxHMD5NfAXHyt%2BlnxJXpv2Sed4Q6%2BBmeNAfLH8MlX1n1fe7bZLnRyHUYjuqnQwSZpQNbxS3Lyj6pFLJcAeZa5U51bqfmS5VqxG5vBVrKmEO6u%2BbUyz1H8p50mGkgtpWv%2FueZFWCSPBF2QuZbIghxgJFRpTIBkePdwo6XbIjKAoRqMYPvu2JuomRLaWQs%2Ff6T52OlmZHyxX9fydOrjtuXNgPT8lVZ3S2yi9R2mkyTz1Wyry%2B15PIDvcNUYolP7yn3pNY3bP97hfSo6Vm0LldLcQ5hZJBjyMOWI27jKFnT1U6CBtGl1hS8zdd7tMN6gHzQsXH%2BnsqvQrsXFxpRds1PhvkFvuLEzdxfUDf3unH22H9nZ4gVJSJXIpLksd73PygopSK0K%2BqF2hClcfZOIWq62ARNNb54N2R2FhHfh%2B8xFBTYmXNeadhr7coxiXyQ5wmh7mYYzUdC3ROMGrwutgQOiG7NmBYAqVE9aHNUIea2AeTepR9K3urGaI08r2k3aPnlyBucyRAY0fQQCBnVSJm8T8xvSdXyJgPWK%2Fu7SoXiZLmDsYHUGfqv8vbD6YCTj3lX%2BhJx3ZJgfgGR3JF6aOhwJPH%2BEvHZGiiTz3%2F%2BjHR4umWm1b2iFMPGXqb0GOqUBGiEme2ePr7e3ejlSBFSpFbGD9i%2BK%2FNMftFhbVrDeUpqDR2FAfgPL%2BgMA%2B3UFKJleew51F%2BZ0bqI8DTrdTQm0ABaCWBEBvThTyqA9Kk%2BnCk5JGy05SC0o66Ay0JF2KilrozArnc6YE5GEfCwAeP%2B%2FjPIff6%2BVfMLukndY8Qqjt9jMaB1jJhs380Z3dGgkn51WQ8RtqeHWjVRDaEKsmq77exO9WDi1&X-Amz-Signature=7b62aca697c0a344f8d2e38271928960ad8ac214e7d4708d379ed13a973d7881&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
