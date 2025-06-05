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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLSKLQW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDj5ccmn9vaQMcaltRjSjZbmc0phOhEFoZi0Qct%2FjZJsAiEAkd2W65PdhF1lbacSAKKxU21ip6shNvapy1Ku2clTTJEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDD14PX3z0z9PmBUR0CrcAwa1eno4oBQAxcqu6VOpdkDQ1W%2FknxTYMYOXITFfUFQIZtOGvlQdf6f%2ByZv48Yg0W63t4%2FstnNviyWdMM6ZDmNJg53O%2Fa%2BdmmIyePtklGYpZL5axAeLEE9QWbZzNVQsfJa6eIblaZE41W7YhVzlQNVHtxwDGhORhwTM0W2e4pOcFQvSRVPBLpxH6SJaCu4g%2By1R88M2vMCsbTbADRv9tJ4lzIiOQZdU%2BOPqAjUtpNrnn4KfGkyu9fWwE4npYKhA6z1y4zLB%2BP4ICsVTsWu92XqaZ6I9Qzi79wQt9QQNLckYF5xKmnzhWxxOHivSb59llT9c6amaB5MiFWPgqlBkcOe9aE9zM5dC3sjofD9Kty17xYcJqvrMA1irA6aMHGf%2BIsAmKHsUzq1ZLVtfX%2F1mgly%2BfDlQ%2BqCpm7U7%2FDNCHQ9J15%2FHuZjgreJkzgHTzIbgXQT496kfkCDtFC1egLdcxj8%2Fy0sMV%2FOCieK91pjF6HHNe5rgI8f9%2FMxNE4XRQDS4rl1TqJ7N21LIxnlywQ8O7Cvu3YbLpzuw7SwamzuzBa%2BV%2B3mz1XETcbg0lMDYzGHLjj6xheGPCtv%2Fwg7Kd4HaEckv90Uz7UNkWKwaBkhWhDRxpnd5hCU2GBFXyv1kMMKWph8IGOqUBYuaQSLA4EYum6m3maDID29Qku3YkRbKJ%2BFyvsY%2B%2FqATosQ0d7wdadzu0f6yv%2FmRDdO%2BVkRJHOCHq5viFaOwvm4DE8EIbT5vrNfBmkEKJ6F6RdPf%2BnJ91%2FSm7snb9P7ko85CrLQVqI%2BBK3oyMHXokzSj9GFesd4s6f8P%2BqtUyleAXlhfAso5%2F1Mn%2FGN%2B0%2FlY%2B1fz1O2cmvKk2BQgaPbzfR1ZLD%2Bk0&X-Amz-Signature=298ba4af905351176ee9aaa9dfdaf9999252d7fad15615903b0b7403b9c64029&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLSKLQW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDj5ccmn9vaQMcaltRjSjZbmc0phOhEFoZi0Qct%2FjZJsAiEAkd2W65PdhF1lbacSAKKxU21ip6shNvapy1Ku2clTTJEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDD14PX3z0z9PmBUR0CrcAwa1eno4oBQAxcqu6VOpdkDQ1W%2FknxTYMYOXITFfUFQIZtOGvlQdf6f%2ByZv48Yg0W63t4%2FstnNviyWdMM6ZDmNJg53O%2Fa%2BdmmIyePtklGYpZL5axAeLEE9QWbZzNVQsfJa6eIblaZE41W7YhVzlQNVHtxwDGhORhwTM0W2e4pOcFQvSRVPBLpxH6SJaCu4g%2By1R88M2vMCsbTbADRv9tJ4lzIiOQZdU%2BOPqAjUtpNrnn4KfGkyu9fWwE4npYKhA6z1y4zLB%2BP4ICsVTsWu92XqaZ6I9Qzi79wQt9QQNLckYF5xKmnzhWxxOHivSb59llT9c6amaB5MiFWPgqlBkcOe9aE9zM5dC3sjofD9Kty17xYcJqvrMA1irA6aMHGf%2BIsAmKHsUzq1ZLVtfX%2F1mgly%2BfDlQ%2BqCpm7U7%2FDNCHQ9J15%2FHuZjgreJkzgHTzIbgXQT496kfkCDtFC1egLdcxj8%2Fy0sMV%2FOCieK91pjF6HHNe5rgI8f9%2FMxNE4XRQDS4rl1TqJ7N21LIxnlywQ8O7Cvu3YbLpzuw7SwamzuzBa%2BV%2B3mz1XETcbg0lMDYzGHLjj6xheGPCtv%2Fwg7Kd4HaEckv90Uz7UNkWKwaBkhWhDRxpnd5hCU2GBFXyv1kMMKWph8IGOqUBYuaQSLA4EYum6m3maDID29Qku3YkRbKJ%2BFyvsY%2B%2FqATosQ0d7wdadzu0f6yv%2FmRDdO%2BVkRJHOCHq5viFaOwvm4DE8EIbT5vrNfBmkEKJ6F6RdPf%2BnJ91%2FSm7snb9P7ko85CrLQVqI%2BBK3oyMHXokzSj9GFesd4s6f8P%2BqtUyleAXlhfAso5%2F1Mn%2FGN%2B0%2FlY%2B1fz1O2cmvKk2BQgaPbzfR1ZLD%2Bk0&X-Amz-Signature=90418ffcebbc2cb34bb23650008ae91ee23f86c955555caa220df75bb89f801b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLSKLQW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDj5ccmn9vaQMcaltRjSjZbmc0phOhEFoZi0Qct%2FjZJsAiEAkd2W65PdhF1lbacSAKKxU21ip6shNvapy1Ku2clTTJEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDD14PX3z0z9PmBUR0CrcAwa1eno4oBQAxcqu6VOpdkDQ1W%2FknxTYMYOXITFfUFQIZtOGvlQdf6f%2ByZv48Yg0W63t4%2FstnNviyWdMM6ZDmNJg53O%2Fa%2BdmmIyePtklGYpZL5axAeLEE9QWbZzNVQsfJa6eIblaZE41W7YhVzlQNVHtxwDGhORhwTM0W2e4pOcFQvSRVPBLpxH6SJaCu4g%2By1R88M2vMCsbTbADRv9tJ4lzIiOQZdU%2BOPqAjUtpNrnn4KfGkyu9fWwE4npYKhA6z1y4zLB%2BP4ICsVTsWu92XqaZ6I9Qzi79wQt9QQNLckYF5xKmnzhWxxOHivSb59llT9c6amaB5MiFWPgqlBkcOe9aE9zM5dC3sjofD9Kty17xYcJqvrMA1irA6aMHGf%2BIsAmKHsUzq1ZLVtfX%2F1mgly%2BfDlQ%2BqCpm7U7%2FDNCHQ9J15%2FHuZjgreJkzgHTzIbgXQT496kfkCDtFC1egLdcxj8%2Fy0sMV%2FOCieK91pjF6HHNe5rgI8f9%2FMxNE4XRQDS4rl1TqJ7N21LIxnlywQ8O7Cvu3YbLpzuw7SwamzuzBa%2BV%2B3mz1XETcbg0lMDYzGHLjj6xheGPCtv%2Fwg7Kd4HaEckv90Uz7UNkWKwaBkhWhDRxpnd5hCU2GBFXyv1kMMKWph8IGOqUBYuaQSLA4EYum6m3maDID29Qku3YkRbKJ%2BFyvsY%2B%2FqATosQ0d7wdadzu0f6yv%2FmRDdO%2BVkRJHOCHq5viFaOwvm4DE8EIbT5vrNfBmkEKJ6F6RdPf%2BnJ91%2FSm7snb9P7ko85CrLQVqI%2BBK3oyMHXokzSj9GFesd4s6f8P%2BqtUyleAXlhfAso5%2F1Mn%2FGN%2B0%2FlY%2B1fz1O2cmvKk2BQgaPbzfR1ZLD%2Bk0&X-Amz-Signature=eb7533c2e33c99932c0ef4fda732897a89d65386ca86de99327a3859ec493ad0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLSKLQW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDj5ccmn9vaQMcaltRjSjZbmc0phOhEFoZi0Qct%2FjZJsAiEAkd2W65PdhF1lbacSAKKxU21ip6shNvapy1Ku2clTTJEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDD14PX3z0z9PmBUR0CrcAwa1eno4oBQAxcqu6VOpdkDQ1W%2FknxTYMYOXITFfUFQIZtOGvlQdf6f%2ByZv48Yg0W63t4%2FstnNviyWdMM6ZDmNJg53O%2Fa%2BdmmIyePtklGYpZL5axAeLEE9QWbZzNVQsfJa6eIblaZE41W7YhVzlQNVHtxwDGhORhwTM0W2e4pOcFQvSRVPBLpxH6SJaCu4g%2By1R88M2vMCsbTbADRv9tJ4lzIiOQZdU%2BOPqAjUtpNrnn4KfGkyu9fWwE4npYKhA6z1y4zLB%2BP4ICsVTsWu92XqaZ6I9Qzi79wQt9QQNLckYF5xKmnzhWxxOHivSb59llT9c6amaB5MiFWPgqlBkcOe9aE9zM5dC3sjofD9Kty17xYcJqvrMA1irA6aMHGf%2BIsAmKHsUzq1ZLVtfX%2F1mgly%2BfDlQ%2BqCpm7U7%2FDNCHQ9J15%2FHuZjgreJkzgHTzIbgXQT496kfkCDtFC1egLdcxj8%2Fy0sMV%2FOCieK91pjF6HHNe5rgI8f9%2FMxNE4XRQDS4rl1TqJ7N21LIxnlywQ8O7Cvu3YbLpzuw7SwamzuzBa%2BV%2B3mz1XETcbg0lMDYzGHLjj6xheGPCtv%2Fwg7Kd4HaEckv90Uz7UNkWKwaBkhWhDRxpnd5hCU2GBFXyv1kMMKWph8IGOqUBYuaQSLA4EYum6m3maDID29Qku3YkRbKJ%2BFyvsY%2B%2FqATosQ0d7wdadzu0f6yv%2FmRDdO%2BVkRJHOCHq5viFaOwvm4DE8EIbT5vrNfBmkEKJ6F6RdPf%2BnJ91%2FSm7snb9P7ko85CrLQVqI%2BBK3oyMHXokzSj9GFesd4s6f8P%2BqtUyleAXlhfAso5%2F1Mn%2FGN%2B0%2FlY%2B1fz1O2cmvKk2BQgaPbzfR1ZLD%2Bk0&X-Amz-Signature=fbe7baf0d4e6ab93f4b3e368a6362bcad9f015b2168d02c3f4f978e405070509&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLSKLQW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDj5ccmn9vaQMcaltRjSjZbmc0phOhEFoZi0Qct%2FjZJsAiEAkd2W65PdhF1lbacSAKKxU21ip6shNvapy1Ku2clTTJEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDD14PX3z0z9PmBUR0CrcAwa1eno4oBQAxcqu6VOpdkDQ1W%2FknxTYMYOXITFfUFQIZtOGvlQdf6f%2ByZv48Yg0W63t4%2FstnNviyWdMM6ZDmNJg53O%2Fa%2BdmmIyePtklGYpZL5axAeLEE9QWbZzNVQsfJa6eIblaZE41W7YhVzlQNVHtxwDGhORhwTM0W2e4pOcFQvSRVPBLpxH6SJaCu4g%2By1R88M2vMCsbTbADRv9tJ4lzIiOQZdU%2BOPqAjUtpNrnn4KfGkyu9fWwE4npYKhA6z1y4zLB%2BP4ICsVTsWu92XqaZ6I9Qzi79wQt9QQNLckYF5xKmnzhWxxOHivSb59llT9c6amaB5MiFWPgqlBkcOe9aE9zM5dC3sjofD9Kty17xYcJqvrMA1irA6aMHGf%2BIsAmKHsUzq1ZLVtfX%2F1mgly%2BfDlQ%2BqCpm7U7%2FDNCHQ9J15%2FHuZjgreJkzgHTzIbgXQT496kfkCDtFC1egLdcxj8%2Fy0sMV%2FOCieK91pjF6HHNe5rgI8f9%2FMxNE4XRQDS4rl1TqJ7N21LIxnlywQ8O7Cvu3YbLpzuw7SwamzuzBa%2BV%2B3mz1XETcbg0lMDYzGHLjj6xheGPCtv%2Fwg7Kd4HaEckv90Uz7UNkWKwaBkhWhDRxpnd5hCU2GBFXyv1kMMKWph8IGOqUBYuaQSLA4EYum6m3maDID29Qku3YkRbKJ%2BFyvsY%2B%2FqATosQ0d7wdadzu0f6yv%2FmRDdO%2BVkRJHOCHq5viFaOwvm4DE8EIbT5vrNfBmkEKJ6F6RdPf%2BnJ91%2FSm7snb9P7ko85CrLQVqI%2BBK3oyMHXokzSj9GFesd4s6f8P%2BqtUyleAXlhfAso5%2F1Mn%2FGN%2B0%2FlY%2B1fz1O2cmvKk2BQgaPbzfR1ZLD%2Bk0&X-Amz-Signature=924647737ca7a7fb074ef611cdcbf029bad9000bd70b389f48b22cba4617c57c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
