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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JURSZCL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBLte4tzz1odiKBq8QcZWB6LxPGKLsYDmr7oNWj8lB4iAiEAxNdzalvytNuoaeEh6ML7d6Fk7ZaNWwx4MjO9uWudaOYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyR5uFuHzp%2FKLSjtyrcA6wNBRgSw%2BzzOqjCYOvtpGvxcj9cjRte5aG2OO%2BTmFxt8DS3hZtapBkDyeP%2FpN4AjCL2S%2Ft6gfZvJoK%2BysKV7iPQELTk9B2zge6Ydv27jFqD9qrpSdLjJvrPBoEAZWvlls8mK1yivFHNY7H87ePUfCHWe4IqSEoX%2Fb3F%2F1enlbCDZRaIo%2BZeNgGvyid3esyjQ5gqdKj0OQfLW6Zl14aNl4VFNCN3PoYZmBRk4GQ6SYeaqFcGwvslvU5d4OicD6%2FIDxovYGXYI7JABfsZ1pHam3nyF3R0FVf9adxKI6kC3BrDa6m%2Bwhpc6%2BQ9AFfM7zhgDmvwEAHIWfsr9tFnp2OoOmivzc4uKSeoIo5bR7UQ9lNL6vTlXyZr4iR7VVaGZPAdJEOVe9YFclfMtSJoPJxjoNdavminKnkVoTWMeLMy4mqreivCf51BecYM41VBhfSzaKVhczUBmgCUpFfApHN8g0z0a5IKPvLe1BhmBXQJJsLPoazugpEyfvffslENYohZ9Bj%2FSlwGl1U5x5UjGcwXtjiBkjejA6KXTFNKv3rG3GBCsnJ4I55oAS6g08rh2RTZ0EpAGDyos3V19m%2BZYg9z9VdxvB7FFrwDYKV8dIM0s2oal6ZiYa9Og0p6YaUHMIqfn8AGOqUBramgCvOphLOI6Hh9rU8wk69hqn5Z3zQwxI%2Ba4LNRlhDKZyH75RnbZPuBXEYdXaM%2F3tGuzSBLSBXXsAfuewSONonvFwPVuHMaqmeWHDI1uVGuuXayhk6Znxmpz48CMDzLVL1S7Jkxt1w9LsjHM%2BsHyQx820NZeB7fU%2Bhn15cq%2F5AXmTJ0PXVhGQMJk36zaYVfWeCiBhCCuWHzyLR3%2BRuLTrFV%2F0Qv&X-Amz-Signature=bc4d0de4f5f29b098fda366b9939d283a71703e36bcc9937648a14523a9868bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JURSZCL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBLte4tzz1odiKBq8QcZWB6LxPGKLsYDmr7oNWj8lB4iAiEAxNdzalvytNuoaeEh6ML7d6Fk7ZaNWwx4MjO9uWudaOYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyR5uFuHzp%2FKLSjtyrcA6wNBRgSw%2BzzOqjCYOvtpGvxcj9cjRte5aG2OO%2BTmFxt8DS3hZtapBkDyeP%2FpN4AjCL2S%2Ft6gfZvJoK%2BysKV7iPQELTk9B2zge6Ydv27jFqD9qrpSdLjJvrPBoEAZWvlls8mK1yivFHNY7H87ePUfCHWe4IqSEoX%2Fb3F%2F1enlbCDZRaIo%2BZeNgGvyid3esyjQ5gqdKj0OQfLW6Zl14aNl4VFNCN3PoYZmBRk4GQ6SYeaqFcGwvslvU5d4OicD6%2FIDxovYGXYI7JABfsZ1pHam3nyF3R0FVf9adxKI6kC3BrDa6m%2Bwhpc6%2BQ9AFfM7zhgDmvwEAHIWfsr9tFnp2OoOmivzc4uKSeoIo5bR7UQ9lNL6vTlXyZr4iR7VVaGZPAdJEOVe9YFclfMtSJoPJxjoNdavminKnkVoTWMeLMy4mqreivCf51BecYM41VBhfSzaKVhczUBmgCUpFfApHN8g0z0a5IKPvLe1BhmBXQJJsLPoazugpEyfvffslENYohZ9Bj%2FSlwGl1U5x5UjGcwXtjiBkjejA6KXTFNKv3rG3GBCsnJ4I55oAS6g08rh2RTZ0EpAGDyos3V19m%2BZYg9z9VdxvB7FFrwDYKV8dIM0s2oal6ZiYa9Og0p6YaUHMIqfn8AGOqUBramgCvOphLOI6Hh9rU8wk69hqn5Z3zQwxI%2Ba4LNRlhDKZyH75RnbZPuBXEYdXaM%2F3tGuzSBLSBXXsAfuewSONonvFwPVuHMaqmeWHDI1uVGuuXayhk6Znxmpz48CMDzLVL1S7Jkxt1w9LsjHM%2BsHyQx820NZeB7fU%2Bhn15cq%2F5AXmTJ0PXVhGQMJk36zaYVfWeCiBhCCuWHzyLR3%2BRuLTrFV%2F0Qv&X-Amz-Signature=e6062e33e300db8799fa5ce4fcf063c2cbf5cc9da9cd0aa7d9c71c8e200543c0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JURSZCL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBLte4tzz1odiKBq8QcZWB6LxPGKLsYDmr7oNWj8lB4iAiEAxNdzalvytNuoaeEh6ML7d6Fk7ZaNWwx4MjO9uWudaOYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyR5uFuHzp%2FKLSjtyrcA6wNBRgSw%2BzzOqjCYOvtpGvxcj9cjRte5aG2OO%2BTmFxt8DS3hZtapBkDyeP%2FpN4AjCL2S%2Ft6gfZvJoK%2BysKV7iPQELTk9B2zge6Ydv27jFqD9qrpSdLjJvrPBoEAZWvlls8mK1yivFHNY7H87ePUfCHWe4IqSEoX%2Fb3F%2F1enlbCDZRaIo%2BZeNgGvyid3esyjQ5gqdKj0OQfLW6Zl14aNl4VFNCN3PoYZmBRk4GQ6SYeaqFcGwvslvU5d4OicD6%2FIDxovYGXYI7JABfsZ1pHam3nyF3R0FVf9adxKI6kC3BrDa6m%2Bwhpc6%2BQ9AFfM7zhgDmvwEAHIWfsr9tFnp2OoOmivzc4uKSeoIo5bR7UQ9lNL6vTlXyZr4iR7VVaGZPAdJEOVe9YFclfMtSJoPJxjoNdavminKnkVoTWMeLMy4mqreivCf51BecYM41VBhfSzaKVhczUBmgCUpFfApHN8g0z0a5IKPvLe1BhmBXQJJsLPoazugpEyfvffslENYohZ9Bj%2FSlwGl1U5x5UjGcwXtjiBkjejA6KXTFNKv3rG3GBCsnJ4I55oAS6g08rh2RTZ0EpAGDyos3V19m%2BZYg9z9VdxvB7FFrwDYKV8dIM0s2oal6ZiYa9Og0p6YaUHMIqfn8AGOqUBramgCvOphLOI6Hh9rU8wk69hqn5Z3zQwxI%2Ba4LNRlhDKZyH75RnbZPuBXEYdXaM%2F3tGuzSBLSBXXsAfuewSONonvFwPVuHMaqmeWHDI1uVGuuXayhk6Znxmpz48CMDzLVL1S7Jkxt1w9LsjHM%2BsHyQx820NZeB7fU%2Bhn15cq%2F5AXmTJ0PXVhGQMJk36zaYVfWeCiBhCCuWHzyLR3%2BRuLTrFV%2F0Qv&X-Amz-Signature=e6efe88cc96b1cddde2d676c1cdfc0d193eca9121c287f4573c7e025c4297925&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JURSZCL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBLte4tzz1odiKBq8QcZWB6LxPGKLsYDmr7oNWj8lB4iAiEAxNdzalvytNuoaeEh6ML7d6Fk7ZaNWwx4MjO9uWudaOYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyR5uFuHzp%2FKLSjtyrcA6wNBRgSw%2BzzOqjCYOvtpGvxcj9cjRte5aG2OO%2BTmFxt8DS3hZtapBkDyeP%2FpN4AjCL2S%2Ft6gfZvJoK%2BysKV7iPQELTk9B2zge6Ydv27jFqD9qrpSdLjJvrPBoEAZWvlls8mK1yivFHNY7H87ePUfCHWe4IqSEoX%2Fb3F%2F1enlbCDZRaIo%2BZeNgGvyid3esyjQ5gqdKj0OQfLW6Zl14aNl4VFNCN3PoYZmBRk4GQ6SYeaqFcGwvslvU5d4OicD6%2FIDxovYGXYI7JABfsZ1pHam3nyF3R0FVf9adxKI6kC3BrDa6m%2Bwhpc6%2BQ9AFfM7zhgDmvwEAHIWfsr9tFnp2OoOmivzc4uKSeoIo5bR7UQ9lNL6vTlXyZr4iR7VVaGZPAdJEOVe9YFclfMtSJoPJxjoNdavminKnkVoTWMeLMy4mqreivCf51BecYM41VBhfSzaKVhczUBmgCUpFfApHN8g0z0a5IKPvLe1BhmBXQJJsLPoazugpEyfvffslENYohZ9Bj%2FSlwGl1U5x5UjGcwXtjiBkjejA6KXTFNKv3rG3GBCsnJ4I55oAS6g08rh2RTZ0EpAGDyos3V19m%2BZYg9z9VdxvB7FFrwDYKV8dIM0s2oal6ZiYa9Og0p6YaUHMIqfn8AGOqUBramgCvOphLOI6Hh9rU8wk69hqn5Z3zQwxI%2Ba4LNRlhDKZyH75RnbZPuBXEYdXaM%2F3tGuzSBLSBXXsAfuewSONonvFwPVuHMaqmeWHDI1uVGuuXayhk6Znxmpz48CMDzLVL1S7Jkxt1w9LsjHM%2BsHyQx820NZeB7fU%2Bhn15cq%2F5AXmTJ0PXVhGQMJk36zaYVfWeCiBhCCuWHzyLR3%2BRuLTrFV%2F0Qv&X-Amz-Signature=aa67df58687b0e50d97e27be4accca2a4029b5c041c9ca2c5c72683bc7919500&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JURSZCL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBLte4tzz1odiKBq8QcZWB6LxPGKLsYDmr7oNWj8lB4iAiEAxNdzalvytNuoaeEh6ML7d6Fk7ZaNWwx4MjO9uWudaOYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyR5uFuHzp%2FKLSjtyrcA6wNBRgSw%2BzzOqjCYOvtpGvxcj9cjRte5aG2OO%2BTmFxt8DS3hZtapBkDyeP%2FpN4AjCL2S%2Ft6gfZvJoK%2BysKV7iPQELTk9B2zge6Ydv27jFqD9qrpSdLjJvrPBoEAZWvlls8mK1yivFHNY7H87ePUfCHWe4IqSEoX%2Fb3F%2F1enlbCDZRaIo%2BZeNgGvyid3esyjQ5gqdKj0OQfLW6Zl14aNl4VFNCN3PoYZmBRk4GQ6SYeaqFcGwvslvU5d4OicD6%2FIDxovYGXYI7JABfsZ1pHam3nyF3R0FVf9adxKI6kC3BrDa6m%2Bwhpc6%2BQ9AFfM7zhgDmvwEAHIWfsr9tFnp2OoOmivzc4uKSeoIo5bR7UQ9lNL6vTlXyZr4iR7VVaGZPAdJEOVe9YFclfMtSJoPJxjoNdavminKnkVoTWMeLMy4mqreivCf51BecYM41VBhfSzaKVhczUBmgCUpFfApHN8g0z0a5IKPvLe1BhmBXQJJsLPoazugpEyfvffslENYohZ9Bj%2FSlwGl1U5x5UjGcwXtjiBkjejA6KXTFNKv3rG3GBCsnJ4I55oAS6g08rh2RTZ0EpAGDyos3V19m%2BZYg9z9VdxvB7FFrwDYKV8dIM0s2oal6ZiYa9Og0p6YaUHMIqfn8AGOqUBramgCvOphLOI6Hh9rU8wk69hqn5Z3zQwxI%2Ba4LNRlhDKZyH75RnbZPuBXEYdXaM%2F3tGuzSBLSBXXsAfuewSONonvFwPVuHMaqmeWHDI1uVGuuXayhk6Znxmpz48CMDzLVL1S7Jkxt1w9LsjHM%2BsHyQx820NZeB7fU%2Bhn15cq%2F5AXmTJ0PXVhGQMJk36zaYVfWeCiBhCCuWHzyLR3%2BRuLTrFV%2F0Qv&X-Amz-Signature=16dded35a3d4a79b8394ff648be06602d94c2dc680807690532d35d68e0782ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
