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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALR3JDQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDc5w0TOvU9d8s4J%2F5H3KQ95QJFkpX7RuK2pC13fYGHcAiA8EDkoNqUKvoyIGS4eBFW%2BicaA%2FakDaZvtVt13hsV3FiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmOXf200%2FSNMv3SPAKtwDvvSJ04h9sZrfHVgomqfL4w7gERmnC6fzKLAONslwp206CHAstWC3T9sl6i5j2HUz7gijG81j%2FgKDYlLqp4yrU893vINGw7efBQJvgi69CZeW6zqVxW1ANp8hQS1Qa02OxjpHu0%2BR5YNe00C2Sg7EwDrFerS%2BZ7W%2BNRw0u7d4mvIsAxMdpOnFur4WoOJ%2BZZ%2BfbxRx9zBk%2B5iw2ReXUYzZGNIP%2B2ocmzqQW5LnwXVgf2AM%2B4Qpi0Ix0p2kt8B%2BXTLN3SNIVqcOzqC0AwxoGEm60T9Qqgu7NMLHt3Ik%2BOxBn2cAt7cXObTnqCrQHAL01qRL0BA15HfhqueqDnR7faosOLlrum00SafPmq5X7055DyARd4A8ElP67WH11cKLvaZlej%2B2fnkx3PWCtkkX4wvlaJaWuUs%2FFTPZiHX50lT1y%2FkiveildI8NR%2F%2FGWop3NS45HfMjvNn3ehYB78qBYShBJMAvPSzcowFiNKlaAPzXBMR65nnBt245P5XaTvZbxFsZH2pUb6N8qvI1dhRiw10Cp0R7qk0VGuXrmNJ%2B22b2HIOu%2BD%2FZGNCdX%2Bdqb8Av7LT5zQuuoAbpOH8LNhPLheh7ROLH37Nnlmx8j4jfDbNKD716uNU0z%2BI%2F9ebnR0kw6NH9wgY6pgHXUT3japUQUb8hKJ3UJ%2FcyKi%2BXOGQmqevYeuB%2Fs0RY8NJwHttXosRUGI2HdXhpOWaO0O7ZC%2BvM86Csrwct5T%2Bd40BVHibCZvwrA3URw0DF224R%2BgiWsfl7my4vQTZN8GgVfxU967ZMTjpe5gu1un%2BdwNmDgS6vvao0G10pvPAewbC2n%2F5R4muHW0pvIcmXFkiYaUNGKOWmSC4Hv4e4fOOeuGUpTl%2FL&X-Amz-Signature=5e65082f6036f8128a1bf7f14a685b7827b36127ef3ff1f59b1fe4e8f9b09dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALR3JDQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDc5w0TOvU9d8s4J%2F5H3KQ95QJFkpX7RuK2pC13fYGHcAiA8EDkoNqUKvoyIGS4eBFW%2BicaA%2FakDaZvtVt13hsV3FiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmOXf200%2FSNMv3SPAKtwDvvSJ04h9sZrfHVgomqfL4w7gERmnC6fzKLAONslwp206CHAstWC3T9sl6i5j2HUz7gijG81j%2FgKDYlLqp4yrU893vINGw7efBQJvgi69CZeW6zqVxW1ANp8hQS1Qa02OxjpHu0%2BR5YNe00C2Sg7EwDrFerS%2BZ7W%2BNRw0u7d4mvIsAxMdpOnFur4WoOJ%2BZZ%2BfbxRx9zBk%2B5iw2ReXUYzZGNIP%2B2ocmzqQW5LnwXVgf2AM%2B4Qpi0Ix0p2kt8B%2BXTLN3SNIVqcOzqC0AwxoGEm60T9Qqgu7NMLHt3Ik%2BOxBn2cAt7cXObTnqCrQHAL01qRL0BA15HfhqueqDnR7faosOLlrum00SafPmq5X7055DyARd4A8ElP67WH11cKLvaZlej%2B2fnkx3PWCtkkX4wvlaJaWuUs%2FFTPZiHX50lT1y%2FkiveildI8NR%2F%2FGWop3NS45HfMjvNn3ehYB78qBYShBJMAvPSzcowFiNKlaAPzXBMR65nnBt245P5XaTvZbxFsZH2pUb6N8qvI1dhRiw10Cp0R7qk0VGuXrmNJ%2B22b2HIOu%2BD%2FZGNCdX%2Bdqb8Av7LT5zQuuoAbpOH8LNhPLheh7ROLH37Nnlmx8j4jfDbNKD716uNU0z%2BI%2F9ebnR0kw6NH9wgY6pgHXUT3japUQUb8hKJ3UJ%2FcyKi%2BXOGQmqevYeuB%2Fs0RY8NJwHttXosRUGI2HdXhpOWaO0O7ZC%2BvM86Csrwct5T%2Bd40BVHibCZvwrA3URw0DF224R%2BgiWsfl7my4vQTZN8GgVfxU967ZMTjpe5gu1un%2BdwNmDgS6vvao0G10pvPAewbC2n%2F5R4muHW0pvIcmXFkiYaUNGKOWmSC4Hv4e4fOOeuGUpTl%2FL&X-Amz-Signature=ddc64a56bf07484d59de0d768b3eebe7b6c9d7bd0e2cc804385ac13d3f193a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALR3JDQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDc5w0TOvU9d8s4J%2F5H3KQ95QJFkpX7RuK2pC13fYGHcAiA8EDkoNqUKvoyIGS4eBFW%2BicaA%2FakDaZvtVt13hsV3FiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmOXf200%2FSNMv3SPAKtwDvvSJ04h9sZrfHVgomqfL4w7gERmnC6fzKLAONslwp206CHAstWC3T9sl6i5j2HUz7gijG81j%2FgKDYlLqp4yrU893vINGw7efBQJvgi69CZeW6zqVxW1ANp8hQS1Qa02OxjpHu0%2BR5YNe00C2Sg7EwDrFerS%2BZ7W%2BNRw0u7d4mvIsAxMdpOnFur4WoOJ%2BZZ%2BfbxRx9zBk%2B5iw2ReXUYzZGNIP%2B2ocmzqQW5LnwXVgf2AM%2B4Qpi0Ix0p2kt8B%2BXTLN3SNIVqcOzqC0AwxoGEm60T9Qqgu7NMLHt3Ik%2BOxBn2cAt7cXObTnqCrQHAL01qRL0BA15HfhqueqDnR7faosOLlrum00SafPmq5X7055DyARd4A8ElP67WH11cKLvaZlej%2B2fnkx3PWCtkkX4wvlaJaWuUs%2FFTPZiHX50lT1y%2FkiveildI8NR%2F%2FGWop3NS45HfMjvNn3ehYB78qBYShBJMAvPSzcowFiNKlaAPzXBMR65nnBt245P5XaTvZbxFsZH2pUb6N8qvI1dhRiw10Cp0R7qk0VGuXrmNJ%2B22b2HIOu%2BD%2FZGNCdX%2Bdqb8Av7LT5zQuuoAbpOH8LNhPLheh7ROLH37Nnlmx8j4jfDbNKD716uNU0z%2BI%2F9ebnR0kw6NH9wgY6pgHXUT3japUQUb8hKJ3UJ%2FcyKi%2BXOGQmqevYeuB%2Fs0RY8NJwHttXosRUGI2HdXhpOWaO0O7ZC%2BvM86Csrwct5T%2Bd40BVHibCZvwrA3URw0DF224R%2BgiWsfl7my4vQTZN8GgVfxU967ZMTjpe5gu1un%2BdwNmDgS6vvao0G10pvPAewbC2n%2F5R4muHW0pvIcmXFkiYaUNGKOWmSC4Hv4e4fOOeuGUpTl%2FL&X-Amz-Signature=502deee9dfed4e8f0b2bcd60d91ef60fde01f8b7877f3b29e5010103d5c4923d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALR3JDQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDc5w0TOvU9d8s4J%2F5H3KQ95QJFkpX7RuK2pC13fYGHcAiA8EDkoNqUKvoyIGS4eBFW%2BicaA%2FakDaZvtVt13hsV3FiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmOXf200%2FSNMv3SPAKtwDvvSJ04h9sZrfHVgomqfL4w7gERmnC6fzKLAONslwp206CHAstWC3T9sl6i5j2HUz7gijG81j%2FgKDYlLqp4yrU893vINGw7efBQJvgi69CZeW6zqVxW1ANp8hQS1Qa02OxjpHu0%2BR5YNe00C2Sg7EwDrFerS%2BZ7W%2BNRw0u7d4mvIsAxMdpOnFur4WoOJ%2BZZ%2BfbxRx9zBk%2B5iw2ReXUYzZGNIP%2B2ocmzqQW5LnwXVgf2AM%2B4Qpi0Ix0p2kt8B%2BXTLN3SNIVqcOzqC0AwxoGEm60T9Qqgu7NMLHt3Ik%2BOxBn2cAt7cXObTnqCrQHAL01qRL0BA15HfhqueqDnR7faosOLlrum00SafPmq5X7055DyARd4A8ElP67WH11cKLvaZlej%2B2fnkx3PWCtkkX4wvlaJaWuUs%2FFTPZiHX50lT1y%2FkiveildI8NR%2F%2FGWop3NS45HfMjvNn3ehYB78qBYShBJMAvPSzcowFiNKlaAPzXBMR65nnBt245P5XaTvZbxFsZH2pUb6N8qvI1dhRiw10Cp0R7qk0VGuXrmNJ%2B22b2HIOu%2BD%2FZGNCdX%2Bdqb8Av7LT5zQuuoAbpOH8LNhPLheh7ROLH37Nnlmx8j4jfDbNKD716uNU0z%2BI%2F9ebnR0kw6NH9wgY6pgHXUT3japUQUb8hKJ3UJ%2FcyKi%2BXOGQmqevYeuB%2Fs0RY8NJwHttXosRUGI2HdXhpOWaO0O7ZC%2BvM86Csrwct5T%2Bd40BVHibCZvwrA3URw0DF224R%2BgiWsfl7my4vQTZN8GgVfxU967ZMTjpe5gu1un%2BdwNmDgS6vvao0G10pvPAewbC2n%2F5R4muHW0pvIcmXFkiYaUNGKOWmSC4Hv4e4fOOeuGUpTl%2FL&X-Amz-Signature=2969eaa672225020884820380feb61588c1a9d50bb3b568ac57506f6305fa725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALR3JDQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDc5w0TOvU9d8s4J%2F5H3KQ95QJFkpX7RuK2pC13fYGHcAiA8EDkoNqUKvoyIGS4eBFW%2BicaA%2FakDaZvtVt13hsV3FiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmOXf200%2FSNMv3SPAKtwDvvSJ04h9sZrfHVgomqfL4w7gERmnC6fzKLAONslwp206CHAstWC3T9sl6i5j2HUz7gijG81j%2FgKDYlLqp4yrU893vINGw7efBQJvgi69CZeW6zqVxW1ANp8hQS1Qa02OxjpHu0%2BR5YNe00C2Sg7EwDrFerS%2BZ7W%2BNRw0u7d4mvIsAxMdpOnFur4WoOJ%2BZZ%2BfbxRx9zBk%2B5iw2ReXUYzZGNIP%2B2ocmzqQW5LnwXVgf2AM%2B4Qpi0Ix0p2kt8B%2BXTLN3SNIVqcOzqC0AwxoGEm60T9Qqgu7NMLHt3Ik%2BOxBn2cAt7cXObTnqCrQHAL01qRL0BA15HfhqueqDnR7faosOLlrum00SafPmq5X7055DyARd4A8ElP67WH11cKLvaZlej%2B2fnkx3PWCtkkX4wvlaJaWuUs%2FFTPZiHX50lT1y%2FkiveildI8NR%2F%2FGWop3NS45HfMjvNn3ehYB78qBYShBJMAvPSzcowFiNKlaAPzXBMR65nnBt245P5XaTvZbxFsZH2pUb6N8qvI1dhRiw10Cp0R7qk0VGuXrmNJ%2B22b2HIOu%2BD%2FZGNCdX%2Bdqb8Av7LT5zQuuoAbpOH8LNhPLheh7ROLH37Nnlmx8j4jfDbNKD716uNU0z%2BI%2F9ebnR0kw6NH9wgY6pgHXUT3japUQUb8hKJ3UJ%2FcyKi%2BXOGQmqevYeuB%2Fs0RY8NJwHttXosRUGI2HdXhpOWaO0O7ZC%2BvM86Csrwct5T%2Bd40BVHibCZvwrA3URw0DF224R%2BgiWsfl7my4vQTZN8GgVfxU967ZMTjpe5gu1un%2BdwNmDgS6vvao0G10pvPAewbC2n%2F5R4muHW0pvIcmXFkiYaUNGKOWmSC4Hv4e4fOOeuGUpTl%2FL&X-Amz-Signature=4066adc48c2d18c46a3086a39586716de1824bcb27df28c1f579d2807386288d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
