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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4EB4ABW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEX43TshhpFkwFWJzQq7cS%2Fa6moVYsGksFEH4v7MYJ2AiBJv4U2FZSuMEY2cz3EIQ1Ey9uzbBx0jIkDR3cxGFNT%2BCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM71Dy4dWDC8gwLRH6KtwDQts5krDpSBXS8lSiUOoW%2FWmr3yCCsJuZikN6VXyTgjxFwwWQQwqBLRNkaiW2HJnK1gObxDr3dC%2FhImrWu9mceTH7BBq0xwsDc9FolEuM8y66R5M1a5wfvl%2BVwfZpfLCI0wdjQ8NbPm6xGzcyHMzQcI97QvTDp%2F2mUQjnWdNiFu2CyzO6%2F%2FMcAS3nQM6Kx6ouAv%2B%2FPZgpySCXtfoUn5il9Y5i7QpkT%2FC81Gh%2FJt4hgkyVhk3GqoiapJNlQmSZZ2LCeTpsCJGGusZ4XUYHaVuVCrCyCfoY2QT3NHL%2BGBBhE6%2Bpi1NftUFeqMZDbKZx3WWM8DmylCczEEprE7d5z0K%2B5tqhS%2Bn1hWYuwCEjSDd7wZi4Vz5jpSD03nqVUcEbJgvjqRqKkGjBAxfxlvvxZULi8W3IjzwJOHORhl4G%2BAvZy4Evq2bMtXkgAZQHzA6P3Yog7v6divxxvRYvepEatMw96Maj76ZELhNvuNH3WFLJlR28PYc5LRXx9IxRoH7SiFiXFGa2jt6Wms1Z3AAwper2mewOOBJ23yw65Zes2s2nRmMF0ceSe%2FfUdcUYVLg9hhJ%2B%2F1OSPWin84%2Bc%2FScKl6i3pAeRqpiDrYFqUESD%2F44AoHetct8rsjdbwl%2FRq%2FIwzMC7vQY6pgEGHuIQvEJmXg9g8xdHVPLAItz%2FK6cW%2Byz5Xm8dZ88gYh4sjoJgs5x2LS1jiLphZipELgQBMApwvth7kdFXcCZ523rMr9XFuMjKaSlzRDhfg5ewEqgeJpLMRFcSkHVMC8QjwLkRrU1NfLd7EfQYEXQ7Z3Br4Xyk6%2FBBmpSqy3oFWom69URFM2K0HbMktqA0xwej7rtsL3SUBBSFFiYfho%2Fr32jNHW9f&X-Amz-Signature=fffdd45cf4c2c249f217573ce015ec23e86d2e25f84d2234d282d280f65b5fc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4EB4ABW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEX43TshhpFkwFWJzQq7cS%2Fa6moVYsGksFEH4v7MYJ2AiBJv4U2FZSuMEY2cz3EIQ1Ey9uzbBx0jIkDR3cxGFNT%2BCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM71Dy4dWDC8gwLRH6KtwDQts5krDpSBXS8lSiUOoW%2FWmr3yCCsJuZikN6VXyTgjxFwwWQQwqBLRNkaiW2HJnK1gObxDr3dC%2FhImrWu9mceTH7BBq0xwsDc9FolEuM8y66R5M1a5wfvl%2BVwfZpfLCI0wdjQ8NbPm6xGzcyHMzQcI97QvTDp%2F2mUQjnWdNiFu2CyzO6%2F%2FMcAS3nQM6Kx6ouAv%2B%2FPZgpySCXtfoUn5il9Y5i7QpkT%2FC81Gh%2FJt4hgkyVhk3GqoiapJNlQmSZZ2LCeTpsCJGGusZ4XUYHaVuVCrCyCfoY2QT3NHL%2BGBBhE6%2Bpi1NftUFeqMZDbKZx3WWM8DmylCczEEprE7d5z0K%2B5tqhS%2Bn1hWYuwCEjSDd7wZi4Vz5jpSD03nqVUcEbJgvjqRqKkGjBAxfxlvvxZULi8W3IjzwJOHORhl4G%2BAvZy4Evq2bMtXkgAZQHzA6P3Yog7v6divxxvRYvepEatMw96Maj76ZELhNvuNH3WFLJlR28PYc5LRXx9IxRoH7SiFiXFGa2jt6Wms1Z3AAwper2mewOOBJ23yw65Zes2s2nRmMF0ceSe%2FfUdcUYVLg9hhJ%2B%2F1OSPWin84%2Bc%2FScKl6i3pAeRqpiDrYFqUESD%2F44AoHetct8rsjdbwl%2FRq%2FIwzMC7vQY6pgEGHuIQvEJmXg9g8xdHVPLAItz%2FK6cW%2Byz5Xm8dZ88gYh4sjoJgs5x2LS1jiLphZipELgQBMApwvth7kdFXcCZ523rMr9XFuMjKaSlzRDhfg5ewEqgeJpLMRFcSkHVMC8QjwLkRrU1NfLd7EfQYEXQ7Z3Br4Xyk6%2FBBmpSqy3oFWom69URFM2K0HbMktqA0xwej7rtsL3SUBBSFFiYfho%2Fr32jNHW9f&X-Amz-Signature=f055275a5a34a03bc78c19de8a0246af3c6cd1b9a2e036c7365883960d5b64b9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4EB4ABW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEX43TshhpFkwFWJzQq7cS%2Fa6moVYsGksFEH4v7MYJ2AiBJv4U2FZSuMEY2cz3EIQ1Ey9uzbBx0jIkDR3cxGFNT%2BCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM71Dy4dWDC8gwLRH6KtwDQts5krDpSBXS8lSiUOoW%2FWmr3yCCsJuZikN6VXyTgjxFwwWQQwqBLRNkaiW2HJnK1gObxDr3dC%2FhImrWu9mceTH7BBq0xwsDc9FolEuM8y66R5M1a5wfvl%2BVwfZpfLCI0wdjQ8NbPm6xGzcyHMzQcI97QvTDp%2F2mUQjnWdNiFu2CyzO6%2F%2FMcAS3nQM6Kx6ouAv%2B%2FPZgpySCXtfoUn5il9Y5i7QpkT%2FC81Gh%2FJt4hgkyVhk3GqoiapJNlQmSZZ2LCeTpsCJGGusZ4XUYHaVuVCrCyCfoY2QT3NHL%2BGBBhE6%2Bpi1NftUFeqMZDbKZx3WWM8DmylCczEEprE7d5z0K%2B5tqhS%2Bn1hWYuwCEjSDd7wZi4Vz5jpSD03nqVUcEbJgvjqRqKkGjBAxfxlvvxZULi8W3IjzwJOHORhl4G%2BAvZy4Evq2bMtXkgAZQHzA6P3Yog7v6divxxvRYvepEatMw96Maj76ZELhNvuNH3WFLJlR28PYc5LRXx9IxRoH7SiFiXFGa2jt6Wms1Z3AAwper2mewOOBJ23yw65Zes2s2nRmMF0ceSe%2FfUdcUYVLg9hhJ%2B%2F1OSPWin84%2Bc%2FScKl6i3pAeRqpiDrYFqUESD%2F44AoHetct8rsjdbwl%2FRq%2FIwzMC7vQY6pgEGHuIQvEJmXg9g8xdHVPLAItz%2FK6cW%2Byz5Xm8dZ88gYh4sjoJgs5x2LS1jiLphZipELgQBMApwvth7kdFXcCZ523rMr9XFuMjKaSlzRDhfg5ewEqgeJpLMRFcSkHVMC8QjwLkRrU1NfLd7EfQYEXQ7Z3Br4Xyk6%2FBBmpSqy3oFWom69URFM2K0HbMktqA0xwej7rtsL3SUBBSFFiYfho%2Fr32jNHW9f&X-Amz-Signature=fa514cfba40f0c0e13af735527c3ec5d13784862348dd8f3baa0f8a36153cb39&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4EB4ABW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEX43TshhpFkwFWJzQq7cS%2Fa6moVYsGksFEH4v7MYJ2AiBJv4U2FZSuMEY2cz3EIQ1Ey9uzbBx0jIkDR3cxGFNT%2BCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM71Dy4dWDC8gwLRH6KtwDQts5krDpSBXS8lSiUOoW%2FWmr3yCCsJuZikN6VXyTgjxFwwWQQwqBLRNkaiW2HJnK1gObxDr3dC%2FhImrWu9mceTH7BBq0xwsDc9FolEuM8y66R5M1a5wfvl%2BVwfZpfLCI0wdjQ8NbPm6xGzcyHMzQcI97QvTDp%2F2mUQjnWdNiFu2CyzO6%2F%2FMcAS3nQM6Kx6ouAv%2B%2FPZgpySCXtfoUn5il9Y5i7QpkT%2FC81Gh%2FJt4hgkyVhk3GqoiapJNlQmSZZ2LCeTpsCJGGusZ4XUYHaVuVCrCyCfoY2QT3NHL%2BGBBhE6%2Bpi1NftUFeqMZDbKZx3WWM8DmylCczEEprE7d5z0K%2B5tqhS%2Bn1hWYuwCEjSDd7wZi4Vz5jpSD03nqVUcEbJgvjqRqKkGjBAxfxlvvxZULi8W3IjzwJOHORhl4G%2BAvZy4Evq2bMtXkgAZQHzA6P3Yog7v6divxxvRYvepEatMw96Maj76ZELhNvuNH3WFLJlR28PYc5LRXx9IxRoH7SiFiXFGa2jt6Wms1Z3AAwper2mewOOBJ23yw65Zes2s2nRmMF0ceSe%2FfUdcUYVLg9hhJ%2B%2F1OSPWin84%2Bc%2FScKl6i3pAeRqpiDrYFqUESD%2F44AoHetct8rsjdbwl%2FRq%2FIwzMC7vQY6pgEGHuIQvEJmXg9g8xdHVPLAItz%2FK6cW%2Byz5Xm8dZ88gYh4sjoJgs5x2LS1jiLphZipELgQBMApwvth7kdFXcCZ523rMr9XFuMjKaSlzRDhfg5ewEqgeJpLMRFcSkHVMC8QjwLkRrU1NfLd7EfQYEXQ7Z3Br4Xyk6%2FBBmpSqy3oFWom69URFM2K0HbMktqA0xwej7rtsL3SUBBSFFiYfho%2Fr32jNHW9f&X-Amz-Signature=237de07743026f8746f2cf8b3314070b5c001f5286a250c387554c372cfe2e3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4EB4ABW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEX43TshhpFkwFWJzQq7cS%2Fa6moVYsGksFEH4v7MYJ2AiBJv4U2FZSuMEY2cz3EIQ1Ey9uzbBx0jIkDR3cxGFNT%2BCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM71Dy4dWDC8gwLRH6KtwDQts5krDpSBXS8lSiUOoW%2FWmr3yCCsJuZikN6VXyTgjxFwwWQQwqBLRNkaiW2HJnK1gObxDr3dC%2FhImrWu9mceTH7BBq0xwsDc9FolEuM8y66R5M1a5wfvl%2BVwfZpfLCI0wdjQ8NbPm6xGzcyHMzQcI97QvTDp%2F2mUQjnWdNiFu2CyzO6%2F%2FMcAS3nQM6Kx6ouAv%2B%2FPZgpySCXtfoUn5il9Y5i7QpkT%2FC81Gh%2FJt4hgkyVhk3GqoiapJNlQmSZZ2LCeTpsCJGGusZ4XUYHaVuVCrCyCfoY2QT3NHL%2BGBBhE6%2Bpi1NftUFeqMZDbKZx3WWM8DmylCczEEprE7d5z0K%2B5tqhS%2Bn1hWYuwCEjSDd7wZi4Vz5jpSD03nqVUcEbJgvjqRqKkGjBAxfxlvvxZULi8W3IjzwJOHORhl4G%2BAvZy4Evq2bMtXkgAZQHzA6P3Yog7v6divxxvRYvepEatMw96Maj76ZELhNvuNH3WFLJlR28PYc5LRXx9IxRoH7SiFiXFGa2jt6Wms1Z3AAwper2mewOOBJ23yw65Zes2s2nRmMF0ceSe%2FfUdcUYVLg9hhJ%2B%2F1OSPWin84%2Bc%2FScKl6i3pAeRqpiDrYFqUESD%2F44AoHetct8rsjdbwl%2FRq%2FIwzMC7vQY6pgEGHuIQvEJmXg9g8xdHVPLAItz%2FK6cW%2Byz5Xm8dZ88gYh4sjoJgs5x2LS1jiLphZipELgQBMApwvth7kdFXcCZ523rMr9XFuMjKaSlzRDhfg5ewEqgeJpLMRFcSkHVMC8QjwLkRrU1NfLd7EfQYEXQ7Z3Br4Xyk6%2FBBmpSqy3oFWom69URFM2K0HbMktqA0xwej7rtsL3SUBBSFFiYfho%2Fr32jNHW9f&X-Amz-Signature=c68a51cea48532fe4bd7fa008561b6a2e2e9164f6520634d0a60bece5bba449b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
