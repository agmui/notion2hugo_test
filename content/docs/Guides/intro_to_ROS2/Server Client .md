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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKJXGKMF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfuePbvtqu7IGCo7%2FMvGLwuErukvhx8rUrazGewI0QjwIgcQeLiJA12cWAltxDrgCHauVcR%2FyZCFjdrdu6cgoUPykq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOSwf32O%2F8%2BtiMxr6SrcA%2BYOalt4TasNbIUPeXLaP5CRRal3a97xm3A2k%2FXUXFY5rMO6piAMn8QzJlt0OoKGyxZKRzylqkwU97ThyCUP8dwjzpo41RJpshRl8wpOpc4FDnQ7t6kS%2F%2BNyq1Nl7%2BhDu3BxczmBa%2BQPqMjucWuJBj5Fjn2Ia%2FDXGgXGXbN%2Fr2xOa4ndyLXuopab%2F3lq729WEemzEDpVImzehweSsd%2BymbozETLOWwp6AkW15KcaCa4NR76wN8pH%2FXa0MV33MQA7VEJgMwLhon8lyolR%2FLSFnWkn%2B%2FP1NQwjtOMUVxkHj6iWfWaNlrfIXE0Cqnj5qJHDndfrZw28xK%2BN0gRrPBuQ4ORo46mD9E7XeHqLclh5q%2FJaK6PlH%2FYnJdRsXC4r7KfTD0BxzbjtOk98HLwyv5bSy78SX6P5%2BgIDKpBfA5GpS%2B%2Fab3wtFs5JyzBeO1izVh7VUCxog3Ar0vOLPAWm%2FyoYb2jhdgsPYzj3wxc7uqBGgOfn8Rg9cL3V259w3irdASjR9Ccu9E10M%2B9IEg4Vbm0wIbLtQekLyuCR5S5Zuseeo476NtVgSG6cn%2B1AERxWgJhuDsM5wh8BTs%2Ba%2F2SbvwwkbDwx%2BR6hi96MKmH6JM9M8qWL7sv0vxM%2BuXPJzE%2FqMOCezb8GOqUBPv8oyv4Vrk%2FNbtPkTkfkhHryVwvV%2BfjoWottYlTtuNkp2issDhH9we0SOqt%2FBjkjnNct66AeWomnethYoJCmMs3G5ZRB%2Bc1HBlDAzSM6EMs8TBy5K9zfTtzxIJWAfFfpse612u0SmtkKvRUpjT5m37f7vPDdG7AzwriZTeuAF7oTizaRMA2phSs%2FSlRptLl2GImuGDzVdSfnklfOfr8Qgf23VmGc&X-Amz-Signature=dcdd18b9b5c34cb8d2d9fb90eb129a31a26673bd89164a7573bc609b0c12bc0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKJXGKMF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfuePbvtqu7IGCo7%2FMvGLwuErukvhx8rUrazGewI0QjwIgcQeLiJA12cWAltxDrgCHauVcR%2FyZCFjdrdu6cgoUPykq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOSwf32O%2F8%2BtiMxr6SrcA%2BYOalt4TasNbIUPeXLaP5CRRal3a97xm3A2k%2FXUXFY5rMO6piAMn8QzJlt0OoKGyxZKRzylqkwU97ThyCUP8dwjzpo41RJpshRl8wpOpc4FDnQ7t6kS%2F%2BNyq1Nl7%2BhDu3BxczmBa%2BQPqMjucWuJBj5Fjn2Ia%2FDXGgXGXbN%2Fr2xOa4ndyLXuopab%2F3lq729WEemzEDpVImzehweSsd%2BymbozETLOWwp6AkW15KcaCa4NR76wN8pH%2FXa0MV33MQA7VEJgMwLhon8lyolR%2FLSFnWkn%2B%2FP1NQwjtOMUVxkHj6iWfWaNlrfIXE0Cqnj5qJHDndfrZw28xK%2BN0gRrPBuQ4ORo46mD9E7XeHqLclh5q%2FJaK6PlH%2FYnJdRsXC4r7KfTD0BxzbjtOk98HLwyv5bSy78SX6P5%2BgIDKpBfA5GpS%2B%2Fab3wtFs5JyzBeO1izVh7VUCxog3Ar0vOLPAWm%2FyoYb2jhdgsPYzj3wxc7uqBGgOfn8Rg9cL3V259w3irdASjR9Ccu9E10M%2B9IEg4Vbm0wIbLtQekLyuCR5S5Zuseeo476NtVgSG6cn%2B1AERxWgJhuDsM5wh8BTs%2Ba%2F2SbvwwkbDwx%2BR6hi96MKmH6JM9M8qWL7sv0vxM%2BuXPJzE%2FqMOCezb8GOqUBPv8oyv4Vrk%2FNbtPkTkfkhHryVwvV%2BfjoWottYlTtuNkp2issDhH9we0SOqt%2FBjkjnNct66AeWomnethYoJCmMs3G5ZRB%2Bc1HBlDAzSM6EMs8TBy5K9zfTtzxIJWAfFfpse612u0SmtkKvRUpjT5m37f7vPDdG7AzwriZTeuAF7oTizaRMA2phSs%2FSlRptLl2GImuGDzVdSfnklfOfr8Qgf23VmGc&X-Amz-Signature=9ece336b9b52ca2f59867f21b564740e46f21f1a43f3e2440141ec40b60f4326&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKJXGKMF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfuePbvtqu7IGCo7%2FMvGLwuErukvhx8rUrazGewI0QjwIgcQeLiJA12cWAltxDrgCHauVcR%2FyZCFjdrdu6cgoUPykq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOSwf32O%2F8%2BtiMxr6SrcA%2BYOalt4TasNbIUPeXLaP5CRRal3a97xm3A2k%2FXUXFY5rMO6piAMn8QzJlt0OoKGyxZKRzylqkwU97ThyCUP8dwjzpo41RJpshRl8wpOpc4FDnQ7t6kS%2F%2BNyq1Nl7%2BhDu3BxczmBa%2BQPqMjucWuJBj5Fjn2Ia%2FDXGgXGXbN%2Fr2xOa4ndyLXuopab%2F3lq729WEemzEDpVImzehweSsd%2BymbozETLOWwp6AkW15KcaCa4NR76wN8pH%2FXa0MV33MQA7VEJgMwLhon8lyolR%2FLSFnWkn%2B%2FP1NQwjtOMUVxkHj6iWfWaNlrfIXE0Cqnj5qJHDndfrZw28xK%2BN0gRrPBuQ4ORo46mD9E7XeHqLclh5q%2FJaK6PlH%2FYnJdRsXC4r7KfTD0BxzbjtOk98HLwyv5bSy78SX6P5%2BgIDKpBfA5GpS%2B%2Fab3wtFs5JyzBeO1izVh7VUCxog3Ar0vOLPAWm%2FyoYb2jhdgsPYzj3wxc7uqBGgOfn8Rg9cL3V259w3irdASjR9Ccu9E10M%2B9IEg4Vbm0wIbLtQekLyuCR5S5Zuseeo476NtVgSG6cn%2B1AERxWgJhuDsM5wh8BTs%2Ba%2F2SbvwwkbDwx%2BR6hi96MKmH6JM9M8qWL7sv0vxM%2BuXPJzE%2FqMOCezb8GOqUBPv8oyv4Vrk%2FNbtPkTkfkhHryVwvV%2BfjoWottYlTtuNkp2issDhH9we0SOqt%2FBjkjnNct66AeWomnethYoJCmMs3G5ZRB%2Bc1HBlDAzSM6EMs8TBy5K9zfTtzxIJWAfFfpse612u0SmtkKvRUpjT5m37f7vPDdG7AzwriZTeuAF7oTizaRMA2phSs%2FSlRptLl2GImuGDzVdSfnklfOfr8Qgf23VmGc&X-Amz-Signature=449596a4564ed518f613df49ee810fc707a47e7aa2ccae6394b0486409d3ebc5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKJXGKMF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfuePbvtqu7IGCo7%2FMvGLwuErukvhx8rUrazGewI0QjwIgcQeLiJA12cWAltxDrgCHauVcR%2FyZCFjdrdu6cgoUPykq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOSwf32O%2F8%2BtiMxr6SrcA%2BYOalt4TasNbIUPeXLaP5CRRal3a97xm3A2k%2FXUXFY5rMO6piAMn8QzJlt0OoKGyxZKRzylqkwU97ThyCUP8dwjzpo41RJpshRl8wpOpc4FDnQ7t6kS%2F%2BNyq1Nl7%2BhDu3BxczmBa%2BQPqMjucWuJBj5Fjn2Ia%2FDXGgXGXbN%2Fr2xOa4ndyLXuopab%2F3lq729WEemzEDpVImzehweSsd%2BymbozETLOWwp6AkW15KcaCa4NR76wN8pH%2FXa0MV33MQA7VEJgMwLhon8lyolR%2FLSFnWkn%2B%2FP1NQwjtOMUVxkHj6iWfWaNlrfIXE0Cqnj5qJHDndfrZw28xK%2BN0gRrPBuQ4ORo46mD9E7XeHqLclh5q%2FJaK6PlH%2FYnJdRsXC4r7KfTD0BxzbjtOk98HLwyv5bSy78SX6P5%2BgIDKpBfA5GpS%2B%2Fab3wtFs5JyzBeO1izVh7VUCxog3Ar0vOLPAWm%2FyoYb2jhdgsPYzj3wxc7uqBGgOfn8Rg9cL3V259w3irdASjR9Ccu9E10M%2B9IEg4Vbm0wIbLtQekLyuCR5S5Zuseeo476NtVgSG6cn%2B1AERxWgJhuDsM5wh8BTs%2Ba%2F2SbvwwkbDwx%2BR6hi96MKmH6JM9M8qWL7sv0vxM%2BuXPJzE%2FqMOCezb8GOqUBPv8oyv4Vrk%2FNbtPkTkfkhHryVwvV%2BfjoWottYlTtuNkp2issDhH9we0SOqt%2FBjkjnNct66AeWomnethYoJCmMs3G5ZRB%2Bc1HBlDAzSM6EMs8TBy5K9zfTtzxIJWAfFfpse612u0SmtkKvRUpjT5m37f7vPDdG7AzwriZTeuAF7oTizaRMA2phSs%2FSlRptLl2GImuGDzVdSfnklfOfr8Qgf23VmGc&X-Amz-Signature=b9df90045929baa6e35f532b81aba24aa3902946eb8c2ef5a005dbbf45e9eef1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKJXGKMF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfuePbvtqu7IGCo7%2FMvGLwuErukvhx8rUrazGewI0QjwIgcQeLiJA12cWAltxDrgCHauVcR%2FyZCFjdrdu6cgoUPykq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOSwf32O%2F8%2BtiMxr6SrcA%2BYOalt4TasNbIUPeXLaP5CRRal3a97xm3A2k%2FXUXFY5rMO6piAMn8QzJlt0OoKGyxZKRzylqkwU97ThyCUP8dwjzpo41RJpshRl8wpOpc4FDnQ7t6kS%2F%2BNyq1Nl7%2BhDu3BxczmBa%2BQPqMjucWuJBj5Fjn2Ia%2FDXGgXGXbN%2Fr2xOa4ndyLXuopab%2F3lq729WEemzEDpVImzehweSsd%2BymbozETLOWwp6AkW15KcaCa4NR76wN8pH%2FXa0MV33MQA7VEJgMwLhon8lyolR%2FLSFnWkn%2B%2FP1NQwjtOMUVxkHj6iWfWaNlrfIXE0Cqnj5qJHDndfrZw28xK%2BN0gRrPBuQ4ORo46mD9E7XeHqLclh5q%2FJaK6PlH%2FYnJdRsXC4r7KfTD0BxzbjtOk98HLwyv5bSy78SX6P5%2BgIDKpBfA5GpS%2B%2Fab3wtFs5JyzBeO1izVh7VUCxog3Ar0vOLPAWm%2FyoYb2jhdgsPYzj3wxc7uqBGgOfn8Rg9cL3V259w3irdASjR9Ccu9E10M%2B9IEg4Vbm0wIbLtQekLyuCR5S5Zuseeo476NtVgSG6cn%2B1AERxWgJhuDsM5wh8BTs%2Ba%2F2SbvwwkbDwx%2BR6hi96MKmH6JM9M8qWL7sv0vxM%2BuXPJzE%2FqMOCezb8GOqUBPv8oyv4Vrk%2FNbtPkTkfkhHryVwvV%2BfjoWottYlTtuNkp2issDhH9we0SOqt%2FBjkjnNct66AeWomnethYoJCmMs3G5ZRB%2Bc1HBlDAzSM6EMs8TBy5K9zfTtzxIJWAfFfpse612u0SmtkKvRUpjT5m37f7vPDdG7AzwriZTeuAF7oTizaRMA2phSs%2FSlRptLl2GImuGDzVdSfnklfOfr8Qgf23VmGc&X-Amz-Signature=1be4782a6c59338ce527b74863b5fee9360d68fc139321742e3900072e1f23d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
