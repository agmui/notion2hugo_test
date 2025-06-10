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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SCEOZEB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBb7MUg3hhl9cwroVTaEJe5kNxHKb5654Lc2NWVTreNHAiAHZx3NlLpla9HqnbG3siRZzpgpzkt64gP2X2geimg3nCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV07vnIbgGUMz%2FgvjKtwDu7UTkQIsWjRj91VQZ%2BWj1iJF2DGvBrAm8iD61nw%2Bzz3KzRxuDKywsnEh8DqfTkNV9U0brlx5uy54vaxn3%2B6%2BqoFZOlKfKmY%2BzhkGAykc9rDY%2FvTWsM9nuIDmlyZhNBy%2FbtO1y0aPaWLuUFDhNXHkpBDShSoqLcmYXmiF7n01C7c%2BRvq%2FyeLA9btd3TVW6bK1KIZ8HUcHHVds0cB0L9p8wdCp%2FDDIbJ08UraFSx8urZl18KWxX2HnVIzj0t5prVhDAvW4czs0fkyCtPSQQ9bQPl5UOlS6uDAaElLay5oiNkkt2GeYGxSnQQGG%2BZh7FT2kvJ1cIp295v25kcSdaL78EVlmFzrs8gI5ri9BuokoOWRExpisvjLvRVKwbSfbjmtqz3WaSDxyWoQR7Dr3epJCBB8Y25SsvOt5MvvPTa8WLKUOB%2B8ChuRUP4qfEQZB3VJTvJxrHX3ndsiBoq0%2B%2FD1DbV%2FbvkUyFMwvK2%2F4AiyfNGnIiKeMgvO0p%2FELHxnLR8OwbwP%2Byd6lwyVDO%2FOGv66B4Dj%2BELrT8w1cCwGITk5iqCa6MZzZcxCNmIr3Ibbvrawp1ibBqhyOz1%2BdhBktUiZGrWhzxSE6KGS6y1BNfZL1Km8MtEtajVHIE8Mnn7kwz4iiwgY6pgGonPtaZG2iIItGjCIRFI6VYoBiLaF3bPDo%2BSHArWUeYcYUo8JZwKTDVBRXv1MYytsLLz%2FU02YPRBexkbnExtSyXtCVreX0wnaNoWONo1NSJAjMX6k878CuAZOxqqJljXF88evAHeMQBx3d07AEpF%2B7jvRag4gciMX3Zm6JFZm8lZTAtm%2F%2FJiQIDH51KL2fv8JTZZ5JIYOOVTyFCnTEYxuOuDKWxHjh&X-Amz-Signature=5ac4e807f68d785e7858e5749e0aac78d741f56c4154aadf954f41836271274a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SCEOZEB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBb7MUg3hhl9cwroVTaEJe5kNxHKb5654Lc2NWVTreNHAiAHZx3NlLpla9HqnbG3siRZzpgpzkt64gP2X2geimg3nCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV07vnIbgGUMz%2FgvjKtwDu7UTkQIsWjRj91VQZ%2BWj1iJF2DGvBrAm8iD61nw%2Bzz3KzRxuDKywsnEh8DqfTkNV9U0brlx5uy54vaxn3%2B6%2BqoFZOlKfKmY%2BzhkGAykc9rDY%2FvTWsM9nuIDmlyZhNBy%2FbtO1y0aPaWLuUFDhNXHkpBDShSoqLcmYXmiF7n01C7c%2BRvq%2FyeLA9btd3TVW6bK1KIZ8HUcHHVds0cB0L9p8wdCp%2FDDIbJ08UraFSx8urZl18KWxX2HnVIzj0t5prVhDAvW4czs0fkyCtPSQQ9bQPl5UOlS6uDAaElLay5oiNkkt2GeYGxSnQQGG%2BZh7FT2kvJ1cIp295v25kcSdaL78EVlmFzrs8gI5ri9BuokoOWRExpisvjLvRVKwbSfbjmtqz3WaSDxyWoQR7Dr3epJCBB8Y25SsvOt5MvvPTa8WLKUOB%2B8ChuRUP4qfEQZB3VJTvJxrHX3ndsiBoq0%2B%2FD1DbV%2FbvkUyFMwvK2%2F4AiyfNGnIiKeMgvO0p%2FELHxnLR8OwbwP%2Byd6lwyVDO%2FOGv66B4Dj%2BELrT8w1cCwGITk5iqCa6MZzZcxCNmIr3Ibbvrawp1ibBqhyOz1%2BdhBktUiZGrWhzxSE6KGS6y1BNfZL1Km8MtEtajVHIE8Mnn7kwz4iiwgY6pgGonPtaZG2iIItGjCIRFI6VYoBiLaF3bPDo%2BSHArWUeYcYUo8JZwKTDVBRXv1MYytsLLz%2FU02YPRBexkbnExtSyXtCVreX0wnaNoWONo1NSJAjMX6k878CuAZOxqqJljXF88evAHeMQBx3d07AEpF%2B7jvRag4gciMX3Zm6JFZm8lZTAtm%2F%2FJiQIDH51KL2fv8JTZZ5JIYOOVTyFCnTEYxuOuDKWxHjh&X-Amz-Signature=5a922f435eff9f25251f03ffc02fabaf22682559ce8cf4c3bc0f0c0e0bbd30c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SCEOZEB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBb7MUg3hhl9cwroVTaEJe5kNxHKb5654Lc2NWVTreNHAiAHZx3NlLpla9HqnbG3siRZzpgpzkt64gP2X2geimg3nCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV07vnIbgGUMz%2FgvjKtwDu7UTkQIsWjRj91VQZ%2BWj1iJF2DGvBrAm8iD61nw%2Bzz3KzRxuDKywsnEh8DqfTkNV9U0brlx5uy54vaxn3%2B6%2BqoFZOlKfKmY%2BzhkGAykc9rDY%2FvTWsM9nuIDmlyZhNBy%2FbtO1y0aPaWLuUFDhNXHkpBDShSoqLcmYXmiF7n01C7c%2BRvq%2FyeLA9btd3TVW6bK1KIZ8HUcHHVds0cB0L9p8wdCp%2FDDIbJ08UraFSx8urZl18KWxX2HnVIzj0t5prVhDAvW4czs0fkyCtPSQQ9bQPl5UOlS6uDAaElLay5oiNkkt2GeYGxSnQQGG%2BZh7FT2kvJ1cIp295v25kcSdaL78EVlmFzrs8gI5ri9BuokoOWRExpisvjLvRVKwbSfbjmtqz3WaSDxyWoQR7Dr3epJCBB8Y25SsvOt5MvvPTa8WLKUOB%2B8ChuRUP4qfEQZB3VJTvJxrHX3ndsiBoq0%2B%2FD1DbV%2FbvkUyFMwvK2%2F4AiyfNGnIiKeMgvO0p%2FELHxnLR8OwbwP%2Byd6lwyVDO%2FOGv66B4Dj%2BELrT8w1cCwGITk5iqCa6MZzZcxCNmIr3Ibbvrawp1ibBqhyOz1%2BdhBktUiZGrWhzxSE6KGS6y1BNfZL1Km8MtEtajVHIE8Mnn7kwz4iiwgY6pgGonPtaZG2iIItGjCIRFI6VYoBiLaF3bPDo%2BSHArWUeYcYUo8JZwKTDVBRXv1MYytsLLz%2FU02YPRBexkbnExtSyXtCVreX0wnaNoWONo1NSJAjMX6k878CuAZOxqqJljXF88evAHeMQBx3d07AEpF%2B7jvRag4gciMX3Zm6JFZm8lZTAtm%2F%2FJiQIDH51KL2fv8JTZZ5JIYOOVTyFCnTEYxuOuDKWxHjh&X-Amz-Signature=4d244d97d67956756d515f467e97f35d8fe6d36f97f0fe7f5814072c07afbf91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SCEOZEB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBb7MUg3hhl9cwroVTaEJe5kNxHKb5654Lc2NWVTreNHAiAHZx3NlLpla9HqnbG3siRZzpgpzkt64gP2X2geimg3nCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV07vnIbgGUMz%2FgvjKtwDu7UTkQIsWjRj91VQZ%2BWj1iJF2DGvBrAm8iD61nw%2Bzz3KzRxuDKywsnEh8DqfTkNV9U0brlx5uy54vaxn3%2B6%2BqoFZOlKfKmY%2BzhkGAykc9rDY%2FvTWsM9nuIDmlyZhNBy%2FbtO1y0aPaWLuUFDhNXHkpBDShSoqLcmYXmiF7n01C7c%2BRvq%2FyeLA9btd3TVW6bK1KIZ8HUcHHVds0cB0L9p8wdCp%2FDDIbJ08UraFSx8urZl18KWxX2HnVIzj0t5prVhDAvW4czs0fkyCtPSQQ9bQPl5UOlS6uDAaElLay5oiNkkt2GeYGxSnQQGG%2BZh7FT2kvJ1cIp295v25kcSdaL78EVlmFzrs8gI5ri9BuokoOWRExpisvjLvRVKwbSfbjmtqz3WaSDxyWoQR7Dr3epJCBB8Y25SsvOt5MvvPTa8WLKUOB%2B8ChuRUP4qfEQZB3VJTvJxrHX3ndsiBoq0%2B%2FD1DbV%2FbvkUyFMwvK2%2F4AiyfNGnIiKeMgvO0p%2FELHxnLR8OwbwP%2Byd6lwyVDO%2FOGv66B4Dj%2BELrT8w1cCwGITk5iqCa6MZzZcxCNmIr3Ibbvrawp1ibBqhyOz1%2BdhBktUiZGrWhzxSE6KGS6y1BNfZL1Km8MtEtajVHIE8Mnn7kwz4iiwgY6pgGonPtaZG2iIItGjCIRFI6VYoBiLaF3bPDo%2BSHArWUeYcYUo8JZwKTDVBRXv1MYytsLLz%2FU02YPRBexkbnExtSyXtCVreX0wnaNoWONo1NSJAjMX6k878CuAZOxqqJljXF88evAHeMQBx3d07AEpF%2B7jvRag4gciMX3Zm6JFZm8lZTAtm%2F%2FJiQIDH51KL2fv8JTZZ5JIYOOVTyFCnTEYxuOuDKWxHjh&X-Amz-Signature=489ab3ae64d84e36350769c18c82f2eebf564a5982724e90c9d96f90a03ef341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SCEOZEB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBb7MUg3hhl9cwroVTaEJe5kNxHKb5654Lc2NWVTreNHAiAHZx3NlLpla9HqnbG3siRZzpgpzkt64gP2X2geimg3nCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV07vnIbgGUMz%2FgvjKtwDu7UTkQIsWjRj91VQZ%2BWj1iJF2DGvBrAm8iD61nw%2Bzz3KzRxuDKywsnEh8DqfTkNV9U0brlx5uy54vaxn3%2B6%2BqoFZOlKfKmY%2BzhkGAykc9rDY%2FvTWsM9nuIDmlyZhNBy%2FbtO1y0aPaWLuUFDhNXHkpBDShSoqLcmYXmiF7n01C7c%2BRvq%2FyeLA9btd3TVW6bK1KIZ8HUcHHVds0cB0L9p8wdCp%2FDDIbJ08UraFSx8urZl18KWxX2HnVIzj0t5prVhDAvW4czs0fkyCtPSQQ9bQPl5UOlS6uDAaElLay5oiNkkt2GeYGxSnQQGG%2BZh7FT2kvJ1cIp295v25kcSdaL78EVlmFzrs8gI5ri9BuokoOWRExpisvjLvRVKwbSfbjmtqz3WaSDxyWoQR7Dr3epJCBB8Y25SsvOt5MvvPTa8WLKUOB%2B8ChuRUP4qfEQZB3VJTvJxrHX3ndsiBoq0%2B%2FD1DbV%2FbvkUyFMwvK2%2F4AiyfNGnIiKeMgvO0p%2FELHxnLR8OwbwP%2Byd6lwyVDO%2FOGv66B4Dj%2BELrT8w1cCwGITk5iqCa6MZzZcxCNmIr3Ibbvrawp1ibBqhyOz1%2BdhBktUiZGrWhzxSE6KGS6y1BNfZL1Km8MtEtajVHIE8Mnn7kwz4iiwgY6pgGonPtaZG2iIItGjCIRFI6VYoBiLaF3bPDo%2BSHArWUeYcYUo8JZwKTDVBRXv1MYytsLLz%2FU02YPRBexkbnExtSyXtCVreX0wnaNoWONo1NSJAjMX6k878CuAZOxqqJljXF88evAHeMQBx3d07AEpF%2B7jvRag4gciMX3Zm6JFZm8lZTAtm%2F%2FJiQIDH51KL2fv8JTZZ5JIYOOVTyFCnTEYxuOuDKWxHjh&X-Amz-Signature=3aa9dc367bce86167668780733f782a91bc65e98e16e1d4c01d28840cb6df18e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
