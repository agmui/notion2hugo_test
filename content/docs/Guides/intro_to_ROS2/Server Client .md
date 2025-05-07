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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPVUPVP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJbGP0h%2FSfN0rHIpqpM20Wch28JW1FFuPc0A6UKsFkHAiEAt0nuq7ldyi3fJEAU6xBQmRCEMC9UmH%2BfPr%2BnYe%2BuCuIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDA%2FPy1MjxKByZOX%2F6ircA1RFQhxHpm2HCXrDwcNgOiphEZCQlXjaoGflEuf3V4%2B%2B7vJNl4PBJ8k1iGVLuJIT5lroLZM8yM%2FWdKu4f%2BEoVIXxE%2BsOakc%2FCeG1wJkmceNq2AhjWnqTqi79t4SKYvXtG4gJ8W7jPM5IyhRdZEgGPj%2BFsvqiQDGhfKv2W%2BIb0dDA%2BsbhSNEca%2FqE9PwyOhceSrlUfgp3vguAIqUpZn0V%2BA0LcAfk9sQiXAoAj2drtJOGP90%2FTwljdg4Pcc8iCq%2FlDOOwQ%2BomyLUwwwruYMWCadNF7j%2B7ILpzZ1yRaLS1wvnz6IoN6FhbowOZOnUdPraf1oftHs3M6%2FQSjv9Z%2B0l2S1jFDw8FZkHLJ0%2Fo3SxGeR1A0MuL6tq4RKSHdgmLBM9FhuNF41yC4xu2nV1FBKsGy1kmZWM8U23zMcc2qyR1SyWRTfl89cUZcLErJWlVYVmx5%2BS3YdBdQH6taQswr6Hy4nuDLRBo28RDtF83enw4ixNYw5NL0whpRhD%2BxlQtQ7GnNLDEeVyB6bDCAIS3NtTLMetlnl4GYApWj1Yk1BKqIMcBENLYOwFHe6uE2hwTIb0ddJGLstlmvKp6lKlw2Dg3XukzTuubTpnQK%2FADH9UiA8akKVh35Vq2i8UW3E6iMOXv68AGOqUBhefz%2BUm%2BrTLfZR%2BeAFvupz0Kz7P3Ajd6qAt839wkfP1Yj7X9pGr6EFYJJVn7QjD4SkAMEzlklS5jgcC7yV%2BEy5tN7E1qYCeoRLDh%2BOyCoC0VMCoGo2QiSCgp2BKBirN6t%2Bea281LX2E9gM9nh%2FkOECWwzbDSRCy0JgZ1e%2BBbWNtHpZZUaU39rP3DPdEEInnyL9zWYjlgWBjaxFkYjMj%2BVHAULYb0&X-Amz-Signature=b67d245064b49c52e0cdf1baab518fec83d5d09314e6d5b64f4d05b3fb76a167&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPVUPVP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJbGP0h%2FSfN0rHIpqpM20Wch28JW1FFuPc0A6UKsFkHAiEAt0nuq7ldyi3fJEAU6xBQmRCEMC9UmH%2BfPr%2BnYe%2BuCuIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDA%2FPy1MjxKByZOX%2F6ircA1RFQhxHpm2HCXrDwcNgOiphEZCQlXjaoGflEuf3V4%2B%2B7vJNl4PBJ8k1iGVLuJIT5lroLZM8yM%2FWdKu4f%2BEoVIXxE%2BsOakc%2FCeG1wJkmceNq2AhjWnqTqi79t4SKYvXtG4gJ8W7jPM5IyhRdZEgGPj%2BFsvqiQDGhfKv2W%2BIb0dDA%2BsbhSNEca%2FqE9PwyOhceSrlUfgp3vguAIqUpZn0V%2BA0LcAfk9sQiXAoAj2drtJOGP90%2FTwljdg4Pcc8iCq%2FlDOOwQ%2BomyLUwwwruYMWCadNF7j%2B7ILpzZ1yRaLS1wvnz6IoN6FhbowOZOnUdPraf1oftHs3M6%2FQSjv9Z%2B0l2S1jFDw8FZkHLJ0%2Fo3SxGeR1A0MuL6tq4RKSHdgmLBM9FhuNF41yC4xu2nV1FBKsGy1kmZWM8U23zMcc2qyR1SyWRTfl89cUZcLErJWlVYVmx5%2BS3YdBdQH6taQswr6Hy4nuDLRBo28RDtF83enw4ixNYw5NL0whpRhD%2BxlQtQ7GnNLDEeVyB6bDCAIS3NtTLMetlnl4GYApWj1Yk1BKqIMcBENLYOwFHe6uE2hwTIb0ddJGLstlmvKp6lKlw2Dg3XukzTuubTpnQK%2FADH9UiA8akKVh35Vq2i8UW3E6iMOXv68AGOqUBhefz%2BUm%2BrTLfZR%2BeAFvupz0Kz7P3Ajd6qAt839wkfP1Yj7X9pGr6EFYJJVn7QjD4SkAMEzlklS5jgcC7yV%2BEy5tN7E1qYCeoRLDh%2BOyCoC0VMCoGo2QiSCgp2BKBirN6t%2Bea281LX2E9gM9nh%2FkOECWwzbDSRCy0JgZ1e%2BBbWNtHpZZUaU39rP3DPdEEInnyL9zWYjlgWBjaxFkYjMj%2BVHAULYb0&X-Amz-Signature=dc0eff640ee2678f8f4b201dc6fcab08e7ffe95bb6fc5be24efc0b04a9ae7a24&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPVUPVP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJbGP0h%2FSfN0rHIpqpM20Wch28JW1FFuPc0A6UKsFkHAiEAt0nuq7ldyi3fJEAU6xBQmRCEMC9UmH%2BfPr%2BnYe%2BuCuIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDA%2FPy1MjxKByZOX%2F6ircA1RFQhxHpm2HCXrDwcNgOiphEZCQlXjaoGflEuf3V4%2B%2B7vJNl4PBJ8k1iGVLuJIT5lroLZM8yM%2FWdKu4f%2BEoVIXxE%2BsOakc%2FCeG1wJkmceNq2AhjWnqTqi79t4SKYvXtG4gJ8W7jPM5IyhRdZEgGPj%2BFsvqiQDGhfKv2W%2BIb0dDA%2BsbhSNEca%2FqE9PwyOhceSrlUfgp3vguAIqUpZn0V%2BA0LcAfk9sQiXAoAj2drtJOGP90%2FTwljdg4Pcc8iCq%2FlDOOwQ%2BomyLUwwwruYMWCadNF7j%2B7ILpzZ1yRaLS1wvnz6IoN6FhbowOZOnUdPraf1oftHs3M6%2FQSjv9Z%2B0l2S1jFDw8FZkHLJ0%2Fo3SxGeR1A0MuL6tq4RKSHdgmLBM9FhuNF41yC4xu2nV1FBKsGy1kmZWM8U23zMcc2qyR1SyWRTfl89cUZcLErJWlVYVmx5%2BS3YdBdQH6taQswr6Hy4nuDLRBo28RDtF83enw4ixNYw5NL0whpRhD%2BxlQtQ7GnNLDEeVyB6bDCAIS3NtTLMetlnl4GYApWj1Yk1BKqIMcBENLYOwFHe6uE2hwTIb0ddJGLstlmvKp6lKlw2Dg3XukzTuubTpnQK%2FADH9UiA8akKVh35Vq2i8UW3E6iMOXv68AGOqUBhefz%2BUm%2BrTLfZR%2BeAFvupz0Kz7P3Ajd6qAt839wkfP1Yj7X9pGr6EFYJJVn7QjD4SkAMEzlklS5jgcC7yV%2BEy5tN7E1qYCeoRLDh%2BOyCoC0VMCoGo2QiSCgp2BKBirN6t%2Bea281LX2E9gM9nh%2FkOECWwzbDSRCy0JgZ1e%2BBbWNtHpZZUaU39rP3DPdEEInnyL9zWYjlgWBjaxFkYjMj%2BVHAULYb0&X-Amz-Signature=80c98850d5bb9b9add6f23909517e4485f5c22cdb0a47f89cc26f92a27184c16&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPVUPVP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJbGP0h%2FSfN0rHIpqpM20Wch28JW1FFuPc0A6UKsFkHAiEAt0nuq7ldyi3fJEAU6xBQmRCEMC9UmH%2BfPr%2BnYe%2BuCuIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDA%2FPy1MjxKByZOX%2F6ircA1RFQhxHpm2HCXrDwcNgOiphEZCQlXjaoGflEuf3V4%2B%2B7vJNl4PBJ8k1iGVLuJIT5lroLZM8yM%2FWdKu4f%2BEoVIXxE%2BsOakc%2FCeG1wJkmceNq2AhjWnqTqi79t4SKYvXtG4gJ8W7jPM5IyhRdZEgGPj%2BFsvqiQDGhfKv2W%2BIb0dDA%2BsbhSNEca%2FqE9PwyOhceSrlUfgp3vguAIqUpZn0V%2BA0LcAfk9sQiXAoAj2drtJOGP90%2FTwljdg4Pcc8iCq%2FlDOOwQ%2BomyLUwwwruYMWCadNF7j%2B7ILpzZ1yRaLS1wvnz6IoN6FhbowOZOnUdPraf1oftHs3M6%2FQSjv9Z%2B0l2S1jFDw8FZkHLJ0%2Fo3SxGeR1A0MuL6tq4RKSHdgmLBM9FhuNF41yC4xu2nV1FBKsGy1kmZWM8U23zMcc2qyR1SyWRTfl89cUZcLErJWlVYVmx5%2BS3YdBdQH6taQswr6Hy4nuDLRBo28RDtF83enw4ixNYw5NL0whpRhD%2BxlQtQ7GnNLDEeVyB6bDCAIS3NtTLMetlnl4GYApWj1Yk1BKqIMcBENLYOwFHe6uE2hwTIb0ddJGLstlmvKp6lKlw2Dg3XukzTuubTpnQK%2FADH9UiA8akKVh35Vq2i8UW3E6iMOXv68AGOqUBhefz%2BUm%2BrTLfZR%2BeAFvupz0Kz7P3Ajd6qAt839wkfP1Yj7X9pGr6EFYJJVn7QjD4SkAMEzlklS5jgcC7yV%2BEy5tN7E1qYCeoRLDh%2BOyCoC0VMCoGo2QiSCgp2BKBirN6t%2Bea281LX2E9gM9nh%2FkOECWwzbDSRCy0JgZ1e%2BBbWNtHpZZUaU39rP3DPdEEInnyL9zWYjlgWBjaxFkYjMj%2BVHAULYb0&X-Amz-Signature=617afd03167e65b2e6d529be7eb338672faa218c8e542003b4d67d2d1e0300a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPVUPVP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJbGP0h%2FSfN0rHIpqpM20Wch28JW1FFuPc0A6UKsFkHAiEAt0nuq7ldyi3fJEAU6xBQmRCEMC9UmH%2BfPr%2BnYe%2BuCuIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDA%2FPy1MjxKByZOX%2F6ircA1RFQhxHpm2HCXrDwcNgOiphEZCQlXjaoGflEuf3V4%2B%2B7vJNl4PBJ8k1iGVLuJIT5lroLZM8yM%2FWdKu4f%2BEoVIXxE%2BsOakc%2FCeG1wJkmceNq2AhjWnqTqi79t4SKYvXtG4gJ8W7jPM5IyhRdZEgGPj%2BFsvqiQDGhfKv2W%2BIb0dDA%2BsbhSNEca%2FqE9PwyOhceSrlUfgp3vguAIqUpZn0V%2BA0LcAfk9sQiXAoAj2drtJOGP90%2FTwljdg4Pcc8iCq%2FlDOOwQ%2BomyLUwwwruYMWCadNF7j%2B7ILpzZ1yRaLS1wvnz6IoN6FhbowOZOnUdPraf1oftHs3M6%2FQSjv9Z%2B0l2S1jFDw8FZkHLJ0%2Fo3SxGeR1A0MuL6tq4RKSHdgmLBM9FhuNF41yC4xu2nV1FBKsGy1kmZWM8U23zMcc2qyR1SyWRTfl89cUZcLErJWlVYVmx5%2BS3YdBdQH6taQswr6Hy4nuDLRBo28RDtF83enw4ixNYw5NL0whpRhD%2BxlQtQ7GnNLDEeVyB6bDCAIS3NtTLMetlnl4GYApWj1Yk1BKqIMcBENLYOwFHe6uE2hwTIb0ddJGLstlmvKp6lKlw2Dg3XukzTuubTpnQK%2FADH9UiA8akKVh35Vq2i8UW3E6iMOXv68AGOqUBhefz%2BUm%2BrTLfZR%2BeAFvupz0Kz7P3Ajd6qAt839wkfP1Yj7X9pGr6EFYJJVn7QjD4SkAMEzlklS5jgcC7yV%2BEy5tN7E1qYCeoRLDh%2BOyCoC0VMCoGo2QiSCgp2BKBirN6t%2Bea281LX2E9gM9nh%2FkOECWwzbDSRCy0JgZ1e%2BBbWNtHpZZUaU39rP3DPdEEInnyL9zWYjlgWBjaxFkYjMj%2BVHAULYb0&X-Amz-Signature=5b9b939b94b8b9d3e65203f22c7d8f82bce9f53cd968c48b53d990df770c7b77&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
