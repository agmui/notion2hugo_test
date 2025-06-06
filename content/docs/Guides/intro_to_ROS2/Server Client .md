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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623EBB2GP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGTm%2Bu8fOVuKt9EtYInU3%2BuwLegYhTWgykmpBuT6MMbAIgZDljRObXKq3m7Kmn1ic%2BG4tfLkyloSxJLH1jHL%2BPU4cq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKGzQVzWt3mO2vN2OyrcAzfCmQYtQZmwu8Yg7mF2wWmDs8D%2FuMGFKsrJHOfokhNNcKUbFxaGeMHNkP%2Fbg%2B9jvzZlJ5VJ8k44bHhAolCtE%2FEuwfufWw0z%2FPUVA6wAxu9LohuIKYsJkpZpVMrBj9mEZiWkYYxOCG19uaF0pbXk3fLoCk7F6gMCcpYe1UaOzyqIRDmtVvMjHNsSb8Wy4DUJC76TknoDQl79hcJG2FX0hg4MkRuzYsIfUWvnEGDGqF9Hxl6sO9UW4XG7Fm5FKmO3v4fMUeUr6TYVujIHw5bq2qJJj8VXnOiV17%2BSThpvjr%2B7QjaJk%2BEf%2BXULZtHQvEqu1AasAf5fmMv0bS7b%2FgEJypqyu%2Bm4WlHH8xP8V8r6uo93RS6nItuWx6Jep306J2m%2FX2fm2FTjUw59JLaddwbMuzSAneuZYRkKvltspfiYcdNVybudtQV0G8Dm28LsAV7sXvtJ73O%2FZ8GDh46aUjqMqAw%2BDBkstMXEsPivsEe5VR%2BBwFMIoA%2FGl7TpjkDmvy9LHrXV%2FSN9hmiaxG4%2FNBN9asSknTV%2BqigaaIWqAh8y%2BcgLgwSoiKLUT7lXR0DA0jXCGcikpXqsPEc8SZ%2BKDrqrYMWwuohGfX4HZs74Ry1fiNAmFPjF8J%2Fs2jhGSZusML3WjMIGOqUBzhW8NFWjgXfctkRi3ib5miU9aWY2PGiTkw2AL%2BTIb8s9AYWmkabRyUcwvyPc6PuhTuTDEVSahzeVVwcAsoIIDQd63XrbH8edog4nIPXHOELfE%2B5Jxj3I%2FaS4TGLqPQJn1Me%2FR%2F6S2ICn%2F2obnrTb%2BhSkYzhXebYKb7jpcRKyH2ujctF2K1%2BGi47rjO7Eq3e1J4LlJSMZLEIeWp%2FqQ%2FMukO9ZziDq&X-Amz-Signature=33595fe86d72f83f16773bad5e6b9d3367cdf4c7b5f4a28e349ea3cb37abd099&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623EBB2GP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGTm%2Bu8fOVuKt9EtYInU3%2BuwLegYhTWgykmpBuT6MMbAIgZDljRObXKq3m7Kmn1ic%2BG4tfLkyloSxJLH1jHL%2BPU4cq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKGzQVzWt3mO2vN2OyrcAzfCmQYtQZmwu8Yg7mF2wWmDs8D%2FuMGFKsrJHOfokhNNcKUbFxaGeMHNkP%2Fbg%2B9jvzZlJ5VJ8k44bHhAolCtE%2FEuwfufWw0z%2FPUVA6wAxu9LohuIKYsJkpZpVMrBj9mEZiWkYYxOCG19uaF0pbXk3fLoCk7F6gMCcpYe1UaOzyqIRDmtVvMjHNsSb8Wy4DUJC76TknoDQl79hcJG2FX0hg4MkRuzYsIfUWvnEGDGqF9Hxl6sO9UW4XG7Fm5FKmO3v4fMUeUr6TYVujIHw5bq2qJJj8VXnOiV17%2BSThpvjr%2B7QjaJk%2BEf%2BXULZtHQvEqu1AasAf5fmMv0bS7b%2FgEJypqyu%2Bm4WlHH8xP8V8r6uo93RS6nItuWx6Jep306J2m%2FX2fm2FTjUw59JLaddwbMuzSAneuZYRkKvltspfiYcdNVybudtQV0G8Dm28LsAV7sXvtJ73O%2FZ8GDh46aUjqMqAw%2BDBkstMXEsPivsEe5VR%2BBwFMIoA%2FGl7TpjkDmvy9LHrXV%2FSN9hmiaxG4%2FNBN9asSknTV%2BqigaaIWqAh8y%2BcgLgwSoiKLUT7lXR0DA0jXCGcikpXqsPEc8SZ%2BKDrqrYMWwuohGfX4HZs74Ry1fiNAmFPjF8J%2Fs2jhGSZusML3WjMIGOqUBzhW8NFWjgXfctkRi3ib5miU9aWY2PGiTkw2AL%2BTIb8s9AYWmkabRyUcwvyPc6PuhTuTDEVSahzeVVwcAsoIIDQd63XrbH8edog4nIPXHOELfE%2B5Jxj3I%2FaS4TGLqPQJn1Me%2FR%2F6S2ICn%2F2obnrTb%2BhSkYzhXebYKb7jpcRKyH2ujctF2K1%2BGi47rjO7Eq3e1J4LlJSMZLEIeWp%2FqQ%2FMukO9ZziDq&X-Amz-Signature=a64a891e23579fc59d68e10d533632a2248d81935a62e11fe371b3a75fb8b950&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623EBB2GP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGTm%2Bu8fOVuKt9EtYInU3%2BuwLegYhTWgykmpBuT6MMbAIgZDljRObXKq3m7Kmn1ic%2BG4tfLkyloSxJLH1jHL%2BPU4cq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKGzQVzWt3mO2vN2OyrcAzfCmQYtQZmwu8Yg7mF2wWmDs8D%2FuMGFKsrJHOfokhNNcKUbFxaGeMHNkP%2Fbg%2B9jvzZlJ5VJ8k44bHhAolCtE%2FEuwfufWw0z%2FPUVA6wAxu9LohuIKYsJkpZpVMrBj9mEZiWkYYxOCG19uaF0pbXk3fLoCk7F6gMCcpYe1UaOzyqIRDmtVvMjHNsSb8Wy4DUJC76TknoDQl79hcJG2FX0hg4MkRuzYsIfUWvnEGDGqF9Hxl6sO9UW4XG7Fm5FKmO3v4fMUeUr6TYVujIHw5bq2qJJj8VXnOiV17%2BSThpvjr%2B7QjaJk%2BEf%2BXULZtHQvEqu1AasAf5fmMv0bS7b%2FgEJypqyu%2Bm4WlHH8xP8V8r6uo93RS6nItuWx6Jep306J2m%2FX2fm2FTjUw59JLaddwbMuzSAneuZYRkKvltspfiYcdNVybudtQV0G8Dm28LsAV7sXvtJ73O%2FZ8GDh46aUjqMqAw%2BDBkstMXEsPivsEe5VR%2BBwFMIoA%2FGl7TpjkDmvy9LHrXV%2FSN9hmiaxG4%2FNBN9asSknTV%2BqigaaIWqAh8y%2BcgLgwSoiKLUT7lXR0DA0jXCGcikpXqsPEc8SZ%2BKDrqrYMWwuohGfX4HZs74Ry1fiNAmFPjF8J%2Fs2jhGSZusML3WjMIGOqUBzhW8NFWjgXfctkRi3ib5miU9aWY2PGiTkw2AL%2BTIb8s9AYWmkabRyUcwvyPc6PuhTuTDEVSahzeVVwcAsoIIDQd63XrbH8edog4nIPXHOELfE%2B5Jxj3I%2FaS4TGLqPQJn1Me%2FR%2F6S2ICn%2F2obnrTb%2BhSkYzhXebYKb7jpcRKyH2ujctF2K1%2BGi47rjO7Eq3e1J4LlJSMZLEIeWp%2FqQ%2FMukO9ZziDq&X-Amz-Signature=b62f2c47e6e85a92fbc0b1b486c753f9b939000b1e6fbc2b4b5396f40c73478a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623EBB2GP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGTm%2Bu8fOVuKt9EtYInU3%2BuwLegYhTWgykmpBuT6MMbAIgZDljRObXKq3m7Kmn1ic%2BG4tfLkyloSxJLH1jHL%2BPU4cq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKGzQVzWt3mO2vN2OyrcAzfCmQYtQZmwu8Yg7mF2wWmDs8D%2FuMGFKsrJHOfokhNNcKUbFxaGeMHNkP%2Fbg%2B9jvzZlJ5VJ8k44bHhAolCtE%2FEuwfufWw0z%2FPUVA6wAxu9LohuIKYsJkpZpVMrBj9mEZiWkYYxOCG19uaF0pbXk3fLoCk7F6gMCcpYe1UaOzyqIRDmtVvMjHNsSb8Wy4DUJC76TknoDQl79hcJG2FX0hg4MkRuzYsIfUWvnEGDGqF9Hxl6sO9UW4XG7Fm5FKmO3v4fMUeUr6TYVujIHw5bq2qJJj8VXnOiV17%2BSThpvjr%2B7QjaJk%2BEf%2BXULZtHQvEqu1AasAf5fmMv0bS7b%2FgEJypqyu%2Bm4WlHH8xP8V8r6uo93RS6nItuWx6Jep306J2m%2FX2fm2FTjUw59JLaddwbMuzSAneuZYRkKvltspfiYcdNVybudtQV0G8Dm28LsAV7sXvtJ73O%2FZ8GDh46aUjqMqAw%2BDBkstMXEsPivsEe5VR%2BBwFMIoA%2FGl7TpjkDmvy9LHrXV%2FSN9hmiaxG4%2FNBN9asSknTV%2BqigaaIWqAh8y%2BcgLgwSoiKLUT7lXR0DA0jXCGcikpXqsPEc8SZ%2BKDrqrYMWwuohGfX4HZs74Ry1fiNAmFPjF8J%2Fs2jhGSZusML3WjMIGOqUBzhW8NFWjgXfctkRi3ib5miU9aWY2PGiTkw2AL%2BTIb8s9AYWmkabRyUcwvyPc6PuhTuTDEVSahzeVVwcAsoIIDQd63XrbH8edog4nIPXHOELfE%2B5Jxj3I%2FaS4TGLqPQJn1Me%2FR%2F6S2ICn%2F2obnrTb%2BhSkYzhXebYKb7jpcRKyH2ujctF2K1%2BGi47rjO7Eq3e1J4LlJSMZLEIeWp%2FqQ%2FMukO9ZziDq&X-Amz-Signature=e960076cc23542f1eb1f47d40a342abfdbccf8ada15346e210cb91391b7b5540&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623EBB2GP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGTm%2Bu8fOVuKt9EtYInU3%2BuwLegYhTWgykmpBuT6MMbAIgZDljRObXKq3m7Kmn1ic%2BG4tfLkyloSxJLH1jHL%2BPU4cq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKGzQVzWt3mO2vN2OyrcAzfCmQYtQZmwu8Yg7mF2wWmDs8D%2FuMGFKsrJHOfokhNNcKUbFxaGeMHNkP%2Fbg%2B9jvzZlJ5VJ8k44bHhAolCtE%2FEuwfufWw0z%2FPUVA6wAxu9LohuIKYsJkpZpVMrBj9mEZiWkYYxOCG19uaF0pbXk3fLoCk7F6gMCcpYe1UaOzyqIRDmtVvMjHNsSb8Wy4DUJC76TknoDQl79hcJG2FX0hg4MkRuzYsIfUWvnEGDGqF9Hxl6sO9UW4XG7Fm5FKmO3v4fMUeUr6TYVujIHw5bq2qJJj8VXnOiV17%2BSThpvjr%2B7QjaJk%2BEf%2BXULZtHQvEqu1AasAf5fmMv0bS7b%2FgEJypqyu%2Bm4WlHH8xP8V8r6uo93RS6nItuWx6Jep306J2m%2FX2fm2FTjUw59JLaddwbMuzSAneuZYRkKvltspfiYcdNVybudtQV0G8Dm28LsAV7sXvtJ73O%2FZ8GDh46aUjqMqAw%2BDBkstMXEsPivsEe5VR%2BBwFMIoA%2FGl7TpjkDmvy9LHrXV%2FSN9hmiaxG4%2FNBN9asSknTV%2BqigaaIWqAh8y%2BcgLgwSoiKLUT7lXR0DA0jXCGcikpXqsPEc8SZ%2BKDrqrYMWwuohGfX4HZs74Ry1fiNAmFPjF8J%2Fs2jhGSZusML3WjMIGOqUBzhW8NFWjgXfctkRi3ib5miU9aWY2PGiTkw2AL%2BTIb8s9AYWmkabRyUcwvyPc6PuhTuTDEVSahzeVVwcAsoIIDQd63XrbH8edog4nIPXHOELfE%2B5Jxj3I%2FaS4TGLqPQJn1Me%2FR%2F6S2ICn%2F2obnrTb%2BhSkYzhXebYKb7jpcRKyH2ujctF2K1%2BGi47rjO7Eq3e1J4LlJSMZLEIeWp%2FqQ%2FMukO9ZziDq&X-Amz-Signature=b500bbaf23c00da8293eb5849a5f24365bcc2bbc6cb1af0496d44399bcd8d68a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
