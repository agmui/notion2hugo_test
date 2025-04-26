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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTXEYFQ4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqUR3Ll%2FVPifFdxCQdTxZPrBxRqdZdX%2B7wP4xNxNCM8AiEAlsJ2k%2BTspD5oMbHFOMU%2BXtCIiexS1eV1ZVcZIw7UFi4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDUORaNx5NscusVAoSrcA2%2FW08q12qWbbsE9Ns6QC95HBru0dUahp7C1BZOMPEOiI3SySZBCEv7STNrGbD%2FZInMNh9A5GG9GMXC9Y%2FRzXDg71YyjvXh3%2Bc%2FBK%2Brnbaw%2BtJLxVGFAgBv8%2FioNFSReD4DEhpjLdsdfLZ%2BSxTYHc5DsMn3cK0ibwwz9tzm9kokQvCONnyReagoi1Q9DJvW2gNU5BNn3XBbDVF3s3C2K78A36EC0XGO92sk6KhVwmPAfBO4n0rEbnjBed35JqdizHlSSbrDf97A1SUPzXuHr%2F1Qk9qOASd930EW9Y0%2BWx8Ee2S3WSHy70R%2FfzpuCg80TsvLezE9l4YbEOXGpUnp957pcpqUAIA0VA4hNHRzVWdIvFZVVuTwxk5L1UWYn0Pa%2Bhtss0X6LAiUpc1L77ILpmGI%2BKR6J5q1vqU39z1zln5lh2Kb1GeCnwmCVkiM%2B1tNUjW5cj56yRET12g4Fix%2FeiUMXVSb5vA3kfMSE784grJQae52%2FTKQMzwq7cq6ZeC%2Bb6Ag7f0WnQZlIYjqoIhuW2UUXuF9Peb9%2B0jQhq%2BGZk6pF1FVDDNN1tOhAXgEKOR84xmw%2BjOLJHBDDcEzqDiEQkqJvw5KAcHV1Cd5%2BGtva3XrDxjBy9Fct0Dpkm1fTMPODssAGOqUBBznXJJ4UeBr3Nt0jCOnmgAemN7SP75SdS6JTZv7khIFNu2YO%2BTUAynkzj8J2%2BoTvHSCoP5D%2FW8XYLim63iUmSXuxIWuuT27Oq%2BkVgHzvopIJJdMCEj3Qq%2Fbq2NORQhvjz3qYPlJePF%2FZ%2FskjvN90ObyY3gNcLxl8HtSLcGFS%2Flo4IY615IxOjtFQkWt97D9JX%2BLEzZcFJJNHQ5Y5qURLvApm1iPG&X-Amz-Signature=e4d8a4c141ec37235baa9da6cd99e160e18761b4cbc01a1bfe19a5b00a908f42&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTXEYFQ4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqUR3Ll%2FVPifFdxCQdTxZPrBxRqdZdX%2B7wP4xNxNCM8AiEAlsJ2k%2BTspD5oMbHFOMU%2BXtCIiexS1eV1ZVcZIw7UFi4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDUORaNx5NscusVAoSrcA2%2FW08q12qWbbsE9Ns6QC95HBru0dUahp7C1BZOMPEOiI3SySZBCEv7STNrGbD%2FZInMNh9A5GG9GMXC9Y%2FRzXDg71YyjvXh3%2Bc%2FBK%2Brnbaw%2BtJLxVGFAgBv8%2FioNFSReD4DEhpjLdsdfLZ%2BSxTYHc5DsMn3cK0ibwwz9tzm9kokQvCONnyReagoi1Q9DJvW2gNU5BNn3XBbDVF3s3C2K78A36EC0XGO92sk6KhVwmPAfBO4n0rEbnjBed35JqdizHlSSbrDf97A1SUPzXuHr%2F1Qk9qOASd930EW9Y0%2BWx8Ee2S3WSHy70R%2FfzpuCg80TsvLezE9l4YbEOXGpUnp957pcpqUAIA0VA4hNHRzVWdIvFZVVuTwxk5L1UWYn0Pa%2Bhtss0X6LAiUpc1L77ILpmGI%2BKR6J5q1vqU39z1zln5lh2Kb1GeCnwmCVkiM%2B1tNUjW5cj56yRET12g4Fix%2FeiUMXVSb5vA3kfMSE784grJQae52%2FTKQMzwq7cq6ZeC%2Bb6Ag7f0WnQZlIYjqoIhuW2UUXuF9Peb9%2B0jQhq%2BGZk6pF1FVDDNN1tOhAXgEKOR84xmw%2BjOLJHBDDcEzqDiEQkqJvw5KAcHV1Cd5%2BGtva3XrDxjBy9Fct0Dpkm1fTMPODssAGOqUBBznXJJ4UeBr3Nt0jCOnmgAemN7SP75SdS6JTZv7khIFNu2YO%2BTUAynkzj8J2%2BoTvHSCoP5D%2FW8XYLim63iUmSXuxIWuuT27Oq%2BkVgHzvopIJJdMCEj3Qq%2Fbq2NORQhvjz3qYPlJePF%2FZ%2FskjvN90ObyY3gNcLxl8HtSLcGFS%2Flo4IY615IxOjtFQkWt97D9JX%2BLEzZcFJJNHQ5Y5qURLvApm1iPG&X-Amz-Signature=9f49f5cb9370ce001beca2d065f3e8d2b889df101575f81ed011137e834f7b16&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTXEYFQ4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqUR3Ll%2FVPifFdxCQdTxZPrBxRqdZdX%2B7wP4xNxNCM8AiEAlsJ2k%2BTspD5oMbHFOMU%2BXtCIiexS1eV1ZVcZIw7UFi4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDUORaNx5NscusVAoSrcA2%2FW08q12qWbbsE9Ns6QC95HBru0dUahp7C1BZOMPEOiI3SySZBCEv7STNrGbD%2FZInMNh9A5GG9GMXC9Y%2FRzXDg71YyjvXh3%2Bc%2FBK%2Brnbaw%2BtJLxVGFAgBv8%2FioNFSReD4DEhpjLdsdfLZ%2BSxTYHc5DsMn3cK0ibwwz9tzm9kokQvCONnyReagoi1Q9DJvW2gNU5BNn3XBbDVF3s3C2K78A36EC0XGO92sk6KhVwmPAfBO4n0rEbnjBed35JqdizHlSSbrDf97A1SUPzXuHr%2F1Qk9qOASd930EW9Y0%2BWx8Ee2S3WSHy70R%2FfzpuCg80TsvLezE9l4YbEOXGpUnp957pcpqUAIA0VA4hNHRzVWdIvFZVVuTwxk5L1UWYn0Pa%2Bhtss0X6LAiUpc1L77ILpmGI%2BKR6J5q1vqU39z1zln5lh2Kb1GeCnwmCVkiM%2B1tNUjW5cj56yRET12g4Fix%2FeiUMXVSb5vA3kfMSE784grJQae52%2FTKQMzwq7cq6ZeC%2Bb6Ag7f0WnQZlIYjqoIhuW2UUXuF9Peb9%2B0jQhq%2BGZk6pF1FVDDNN1tOhAXgEKOR84xmw%2BjOLJHBDDcEzqDiEQkqJvw5KAcHV1Cd5%2BGtva3XrDxjBy9Fct0Dpkm1fTMPODssAGOqUBBznXJJ4UeBr3Nt0jCOnmgAemN7SP75SdS6JTZv7khIFNu2YO%2BTUAynkzj8J2%2BoTvHSCoP5D%2FW8XYLim63iUmSXuxIWuuT27Oq%2BkVgHzvopIJJdMCEj3Qq%2Fbq2NORQhvjz3qYPlJePF%2FZ%2FskjvN90ObyY3gNcLxl8HtSLcGFS%2Flo4IY615IxOjtFQkWt97D9JX%2BLEzZcFJJNHQ5Y5qURLvApm1iPG&X-Amz-Signature=3542834473e1724b7542ee8bc04cf2f519695c6f4648fbc09a04dc3843df2f73&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTXEYFQ4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqUR3Ll%2FVPifFdxCQdTxZPrBxRqdZdX%2B7wP4xNxNCM8AiEAlsJ2k%2BTspD5oMbHFOMU%2BXtCIiexS1eV1ZVcZIw7UFi4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDUORaNx5NscusVAoSrcA2%2FW08q12qWbbsE9Ns6QC95HBru0dUahp7C1BZOMPEOiI3SySZBCEv7STNrGbD%2FZInMNh9A5GG9GMXC9Y%2FRzXDg71YyjvXh3%2Bc%2FBK%2Brnbaw%2BtJLxVGFAgBv8%2FioNFSReD4DEhpjLdsdfLZ%2BSxTYHc5DsMn3cK0ibwwz9tzm9kokQvCONnyReagoi1Q9DJvW2gNU5BNn3XBbDVF3s3C2K78A36EC0XGO92sk6KhVwmPAfBO4n0rEbnjBed35JqdizHlSSbrDf97A1SUPzXuHr%2F1Qk9qOASd930EW9Y0%2BWx8Ee2S3WSHy70R%2FfzpuCg80TsvLezE9l4YbEOXGpUnp957pcpqUAIA0VA4hNHRzVWdIvFZVVuTwxk5L1UWYn0Pa%2Bhtss0X6LAiUpc1L77ILpmGI%2BKR6J5q1vqU39z1zln5lh2Kb1GeCnwmCVkiM%2B1tNUjW5cj56yRET12g4Fix%2FeiUMXVSb5vA3kfMSE784grJQae52%2FTKQMzwq7cq6ZeC%2Bb6Ag7f0WnQZlIYjqoIhuW2UUXuF9Peb9%2B0jQhq%2BGZk6pF1FVDDNN1tOhAXgEKOR84xmw%2BjOLJHBDDcEzqDiEQkqJvw5KAcHV1Cd5%2BGtva3XrDxjBy9Fct0Dpkm1fTMPODssAGOqUBBznXJJ4UeBr3Nt0jCOnmgAemN7SP75SdS6JTZv7khIFNu2YO%2BTUAynkzj8J2%2BoTvHSCoP5D%2FW8XYLim63iUmSXuxIWuuT27Oq%2BkVgHzvopIJJdMCEj3Qq%2Fbq2NORQhvjz3qYPlJePF%2FZ%2FskjvN90ObyY3gNcLxl8HtSLcGFS%2Flo4IY615IxOjtFQkWt97D9JX%2BLEzZcFJJNHQ5Y5qURLvApm1iPG&X-Amz-Signature=8342f80c7d4dec77c0dd3ccf2af4aa4683b67a6457f120f77eb002f1896dec91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTXEYFQ4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqUR3Ll%2FVPifFdxCQdTxZPrBxRqdZdX%2B7wP4xNxNCM8AiEAlsJ2k%2BTspD5oMbHFOMU%2BXtCIiexS1eV1ZVcZIw7UFi4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDUORaNx5NscusVAoSrcA2%2FW08q12qWbbsE9Ns6QC95HBru0dUahp7C1BZOMPEOiI3SySZBCEv7STNrGbD%2FZInMNh9A5GG9GMXC9Y%2FRzXDg71YyjvXh3%2Bc%2FBK%2Brnbaw%2BtJLxVGFAgBv8%2FioNFSReD4DEhpjLdsdfLZ%2BSxTYHc5DsMn3cK0ibwwz9tzm9kokQvCONnyReagoi1Q9DJvW2gNU5BNn3XBbDVF3s3C2K78A36EC0XGO92sk6KhVwmPAfBO4n0rEbnjBed35JqdizHlSSbrDf97A1SUPzXuHr%2F1Qk9qOASd930EW9Y0%2BWx8Ee2S3WSHy70R%2FfzpuCg80TsvLezE9l4YbEOXGpUnp957pcpqUAIA0VA4hNHRzVWdIvFZVVuTwxk5L1UWYn0Pa%2Bhtss0X6LAiUpc1L77ILpmGI%2BKR6J5q1vqU39z1zln5lh2Kb1GeCnwmCVkiM%2B1tNUjW5cj56yRET12g4Fix%2FeiUMXVSb5vA3kfMSE784grJQae52%2FTKQMzwq7cq6ZeC%2Bb6Ag7f0WnQZlIYjqoIhuW2UUXuF9Peb9%2B0jQhq%2BGZk6pF1FVDDNN1tOhAXgEKOR84xmw%2BjOLJHBDDcEzqDiEQkqJvw5KAcHV1Cd5%2BGtva3XrDxjBy9Fct0Dpkm1fTMPODssAGOqUBBznXJJ4UeBr3Nt0jCOnmgAemN7SP75SdS6JTZv7khIFNu2YO%2BTUAynkzj8J2%2BoTvHSCoP5D%2FW8XYLim63iUmSXuxIWuuT27Oq%2BkVgHzvopIJJdMCEj3Qq%2Fbq2NORQhvjz3qYPlJePF%2FZ%2FskjvN90ObyY3gNcLxl8HtSLcGFS%2Flo4IY615IxOjtFQkWt97D9JX%2BLEzZcFJJNHQ5Y5qURLvApm1iPG&X-Amz-Signature=927fcdd687eeeba678b7ba3dae3a3f5e1d73c4675e89ad2d8413206e6fae1d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
