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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAL46KBN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIDla2ldzBM3pkEZR4wHWFUez0HNfl33sWlXZoYRislTSAiBLjVkxAXumWVGegfWnaMw%2FkSW9Ciql04KOva%2FyjyUqtiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrXztFKqiFNMgqcCxKtwDIbbkAA8uSmPE44Yq5niQLBEUxK%2FGHZwpjKmG4Ri%2FUL2TBxY%2BIgXq5tOVElpT%2Fd8FONQWHHxgrCx2YcWNhquiLqMK86vdSOykFk2xdnuL5PlifJo9WSBDxZar46T%2FAkZM7EyGYQY5KNc5z74QLh3UqLQUoNNvYV2H8qjJjzhCQQzli7UWpPcU1P15lpm4%2BkhNm6y3JAYQUsma6id3pV8%2BGvowtjIiQZ13kwS0er7YIcLiLVfcKxxrtax7qGyErPQl8ah4GaLTpqfMyUvXvQNCDOMVjaMqmIbfOjKGD8pezJqoasyL21MsAdOZQBVwe1SpSAYJEWpWIv%2BwaZbMThPn7iT9IfbOEbbTpXrNOE0OucFsVmtWGrFjFhQeB4W2X5yQqn2vPpUppqC%2B1RTpwo7uxsttHQ02s9UVdEjsf%2FmlvvbegV9RVHv0jEq1cStyZMfIb3xW7vtWScPEwykrrOqEUIXQGRTjQF9FHxco%2FCgvIps1gfX0X32DCdIyGEg8rUDkjBEFmZAQOHa5PNYNvzl1y6gTLVDNXZbcXV%2FEPKswn5%2Bm8mudJZxasIMCAMBO65ARcl0ZC3r%2Frhincg1I7r4eAxBPpxF4BV3chzxlTz2DE7zq6B90CKqWJVb0MVYw7NKZwAY6pgHrlXq3zhDt6BSr4ROw2PIaRhwLJDeXBmXQPL9GI0qX%2BVUBlnTS1MqbdyuuBODHCPKn7Sjz7O8Z2nG%2F%2FYQRcaoSdlwZ2HxQz%2Bz1y6DYTdAiahk%2FeshvKbzfM19YQhVa7q4xsMvKbM5u96ygpSqUygO1WgisQjKh9yXwhG%2F2Xlh7a9R0fve2orv6asPogpZEDATVyWHerIRX4RoBAflgpwBi2loTLRfW&X-Amz-Signature=1848c8e1ac5b99d01c3864c5e3d124983cdb4af5173b5570a029fa2959a0a88b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAL46KBN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIDla2ldzBM3pkEZR4wHWFUez0HNfl33sWlXZoYRislTSAiBLjVkxAXumWVGegfWnaMw%2FkSW9Ciql04KOva%2FyjyUqtiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrXztFKqiFNMgqcCxKtwDIbbkAA8uSmPE44Yq5niQLBEUxK%2FGHZwpjKmG4Ri%2FUL2TBxY%2BIgXq5tOVElpT%2Fd8FONQWHHxgrCx2YcWNhquiLqMK86vdSOykFk2xdnuL5PlifJo9WSBDxZar46T%2FAkZM7EyGYQY5KNc5z74QLh3UqLQUoNNvYV2H8qjJjzhCQQzli7UWpPcU1P15lpm4%2BkhNm6y3JAYQUsma6id3pV8%2BGvowtjIiQZ13kwS0er7YIcLiLVfcKxxrtax7qGyErPQl8ah4GaLTpqfMyUvXvQNCDOMVjaMqmIbfOjKGD8pezJqoasyL21MsAdOZQBVwe1SpSAYJEWpWIv%2BwaZbMThPn7iT9IfbOEbbTpXrNOE0OucFsVmtWGrFjFhQeB4W2X5yQqn2vPpUppqC%2B1RTpwo7uxsttHQ02s9UVdEjsf%2FmlvvbegV9RVHv0jEq1cStyZMfIb3xW7vtWScPEwykrrOqEUIXQGRTjQF9FHxco%2FCgvIps1gfX0X32DCdIyGEg8rUDkjBEFmZAQOHa5PNYNvzl1y6gTLVDNXZbcXV%2FEPKswn5%2Bm8mudJZxasIMCAMBO65ARcl0ZC3r%2Frhincg1I7r4eAxBPpxF4BV3chzxlTz2DE7zq6B90CKqWJVb0MVYw7NKZwAY6pgHrlXq3zhDt6BSr4ROw2PIaRhwLJDeXBmXQPL9GI0qX%2BVUBlnTS1MqbdyuuBODHCPKn7Sjz7O8Z2nG%2F%2FYQRcaoSdlwZ2HxQz%2Bz1y6DYTdAiahk%2FeshvKbzfM19YQhVa7q4xsMvKbM5u96ygpSqUygO1WgisQjKh9yXwhG%2F2Xlh7a9R0fve2orv6asPogpZEDATVyWHerIRX4RoBAflgpwBi2loTLRfW&X-Amz-Signature=878a558101d6936f4e158966ed9f9bffad745b32ef7135add89d3f3f6df7a9cb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAL46KBN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIDla2ldzBM3pkEZR4wHWFUez0HNfl33sWlXZoYRislTSAiBLjVkxAXumWVGegfWnaMw%2FkSW9Ciql04KOva%2FyjyUqtiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrXztFKqiFNMgqcCxKtwDIbbkAA8uSmPE44Yq5niQLBEUxK%2FGHZwpjKmG4Ri%2FUL2TBxY%2BIgXq5tOVElpT%2Fd8FONQWHHxgrCx2YcWNhquiLqMK86vdSOykFk2xdnuL5PlifJo9WSBDxZar46T%2FAkZM7EyGYQY5KNc5z74QLh3UqLQUoNNvYV2H8qjJjzhCQQzli7UWpPcU1P15lpm4%2BkhNm6y3JAYQUsma6id3pV8%2BGvowtjIiQZ13kwS0er7YIcLiLVfcKxxrtax7qGyErPQl8ah4GaLTpqfMyUvXvQNCDOMVjaMqmIbfOjKGD8pezJqoasyL21MsAdOZQBVwe1SpSAYJEWpWIv%2BwaZbMThPn7iT9IfbOEbbTpXrNOE0OucFsVmtWGrFjFhQeB4W2X5yQqn2vPpUppqC%2B1RTpwo7uxsttHQ02s9UVdEjsf%2FmlvvbegV9RVHv0jEq1cStyZMfIb3xW7vtWScPEwykrrOqEUIXQGRTjQF9FHxco%2FCgvIps1gfX0X32DCdIyGEg8rUDkjBEFmZAQOHa5PNYNvzl1y6gTLVDNXZbcXV%2FEPKswn5%2Bm8mudJZxasIMCAMBO65ARcl0ZC3r%2Frhincg1I7r4eAxBPpxF4BV3chzxlTz2DE7zq6B90CKqWJVb0MVYw7NKZwAY6pgHrlXq3zhDt6BSr4ROw2PIaRhwLJDeXBmXQPL9GI0qX%2BVUBlnTS1MqbdyuuBODHCPKn7Sjz7O8Z2nG%2F%2FYQRcaoSdlwZ2HxQz%2Bz1y6DYTdAiahk%2FeshvKbzfM19YQhVa7q4xsMvKbM5u96ygpSqUygO1WgisQjKh9yXwhG%2F2Xlh7a9R0fve2orv6asPogpZEDATVyWHerIRX4RoBAflgpwBi2loTLRfW&X-Amz-Signature=e871257c0da24bfb33b25774f3fd62649fa97d0630936dea4a4ebf6d0be0e425&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAL46KBN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIDla2ldzBM3pkEZR4wHWFUez0HNfl33sWlXZoYRislTSAiBLjVkxAXumWVGegfWnaMw%2FkSW9Ciql04KOva%2FyjyUqtiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrXztFKqiFNMgqcCxKtwDIbbkAA8uSmPE44Yq5niQLBEUxK%2FGHZwpjKmG4Ri%2FUL2TBxY%2BIgXq5tOVElpT%2Fd8FONQWHHxgrCx2YcWNhquiLqMK86vdSOykFk2xdnuL5PlifJo9WSBDxZar46T%2FAkZM7EyGYQY5KNc5z74QLh3UqLQUoNNvYV2H8qjJjzhCQQzli7UWpPcU1P15lpm4%2BkhNm6y3JAYQUsma6id3pV8%2BGvowtjIiQZ13kwS0er7YIcLiLVfcKxxrtax7qGyErPQl8ah4GaLTpqfMyUvXvQNCDOMVjaMqmIbfOjKGD8pezJqoasyL21MsAdOZQBVwe1SpSAYJEWpWIv%2BwaZbMThPn7iT9IfbOEbbTpXrNOE0OucFsVmtWGrFjFhQeB4W2X5yQqn2vPpUppqC%2B1RTpwo7uxsttHQ02s9UVdEjsf%2FmlvvbegV9RVHv0jEq1cStyZMfIb3xW7vtWScPEwykrrOqEUIXQGRTjQF9FHxco%2FCgvIps1gfX0X32DCdIyGEg8rUDkjBEFmZAQOHa5PNYNvzl1y6gTLVDNXZbcXV%2FEPKswn5%2Bm8mudJZxasIMCAMBO65ARcl0ZC3r%2Frhincg1I7r4eAxBPpxF4BV3chzxlTz2DE7zq6B90CKqWJVb0MVYw7NKZwAY6pgHrlXq3zhDt6BSr4ROw2PIaRhwLJDeXBmXQPL9GI0qX%2BVUBlnTS1MqbdyuuBODHCPKn7Sjz7O8Z2nG%2F%2FYQRcaoSdlwZ2HxQz%2Bz1y6DYTdAiahk%2FeshvKbzfM19YQhVa7q4xsMvKbM5u96ygpSqUygO1WgisQjKh9yXwhG%2F2Xlh7a9R0fve2orv6asPogpZEDATVyWHerIRX4RoBAflgpwBi2loTLRfW&X-Amz-Signature=1940c09fbcad9a8fb55f5ea798826bbf44bbedfdbba6efbd7def9f378412d635&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAL46KBN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIDla2ldzBM3pkEZR4wHWFUez0HNfl33sWlXZoYRislTSAiBLjVkxAXumWVGegfWnaMw%2FkSW9Ciql04KOva%2FyjyUqtiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrXztFKqiFNMgqcCxKtwDIbbkAA8uSmPE44Yq5niQLBEUxK%2FGHZwpjKmG4Ri%2FUL2TBxY%2BIgXq5tOVElpT%2Fd8FONQWHHxgrCx2YcWNhquiLqMK86vdSOykFk2xdnuL5PlifJo9WSBDxZar46T%2FAkZM7EyGYQY5KNc5z74QLh3UqLQUoNNvYV2H8qjJjzhCQQzli7UWpPcU1P15lpm4%2BkhNm6y3JAYQUsma6id3pV8%2BGvowtjIiQZ13kwS0er7YIcLiLVfcKxxrtax7qGyErPQl8ah4GaLTpqfMyUvXvQNCDOMVjaMqmIbfOjKGD8pezJqoasyL21MsAdOZQBVwe1SpSAYJEWpWIv%2BwaZbMThPn7iT9IfbOEbbTpXrNOE0OucFsVmtWGrFjFhQeB4W2X5yQqn2vPpUppqC%2B1RTpwo7uxsttHQ02s9UVdEjsf%2FmlvvbegV9RVHv0jEq1cStyZMfIb3xW7vtWScPEwykrrOqEUIXQGRTjQF9FHxco%2FCgvIps1gfX0X32DCdIyGEg8rUDkjBEFmZAQOHa5PNYNvzl1y6gTLVDNXZbcXV%2FEPKswn5%2Bm8mudJZxasIMCAMBO65ARcl0ZC3r%2Frhincg1I7r4eAxBPpxF4BV3chzxlTz2DE7zq6B90CKqWJVb0MVYw7NKZwAY6pgHrlXq3zhDt6BSr4ROw2PIaRhwLJDeXBmXQPL9GI0qX%2BVUBlnTS1MqbdyuuBODHCPKn7Sjz7O8Z2nG%2F%2FYQRcaoSdlwZ2HxQz%2Bz1y6DYTdAiahk%2FeshvKbzfM19YQhVa7q4xsMvKbM5u96ygpSqUygO1WgisQjKh9yXwhG%2F2Xlh7a9R0fve2orv6asPogpZEDATVyWHerIRX4RoBAflgpwBi2loTLRfW&X-Amz-Signature=bc07373f7f97f6683136be7132becdc51e32985d8fa79d3ef0028d347394931d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
