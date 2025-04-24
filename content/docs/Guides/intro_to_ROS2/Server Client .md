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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJV2UJU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEirD2D388ecVQlvNjUEWhxGcWZKRsCgSZFfeysYpziGAiEAsGTQOzkzfDqazKNmIpJ5liQe9DYUWnBzxUoOb9h%2FZ4gq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDG3zW8I4YU03vznk%2BSrcA5lomJaUiDBoRnE2nbmXzDes03XI1uiZ2huB%2FhTiqOxXGyZqpZuCqg5SAGVNd2miVMBZDLOcj3LNOq80%2BWL0q6KdRywlZwl7EYKdNRaIEpTZHmOp5YYrCVK5jgBFBKiWlEYmpe6%2Fl7K18ZmzkDRGdfhO%2FfNv2xkp6igO0ZbUs5wC7ehVEWz85zStOEOqHH3WMqVT7V9obbJ0b%2FZn6q5QAi8bXs9g899VPVkKt9ZOVUP5js5huqrwjW3XM%2Fsg%2BbirCRZyBvNZIZgJGOwzQ1R3OzEYo8gX0Ghp%2BjbYe5jVvvV6Ba74HlqVL4GzCdov8X9HTHMkOYJGmgIlviwmEfVS31iqHTe2QJW4YZ4vs91Cpb%2BB%2BGUV%2BhROWibhkBiaK4eMiW8XX6cpkczCLDIMorpHP55hggRSikuGt%2B2H1JsU76pEw7PXAK0%2FTW%2BFd5G6F%2F1IW8GJbz3eLPdwiVIk2DJcSbYAxkknaqMtS6dHSNSjyXB%2BWNQM2HkrKnsHZXJX4A9lNGhtyVb8S6fe3t8LZHWREgPyGYsSiTNWsK6Xn%2FQYPsl93%2F%2FuEuAdXbpkCPJGpCmyIxH2QzbhF0IWpJaZ2kS8RkCdPa1K74iGL1RlNQ7owBjdBt7O%2Blo1lahhGh32ML66qcAGOqUBF%2FmC%2FAm6nOmrhW7RRKpyFqnpeICyN5R9Xz6ubj5BjUmpBjLdjktpLNU3kM9bU7HB5saf81BdS3DEKEZyTM61ivxK%2FwEAfcA8%2B4H8vwpuIhBytq3wsIYhSlOuKkFsuWDBIJLOdNSzloqOgY0VXrSEScFG4RWsoLddJZ03VYypcZeyb75UXWMv3vGiP6BZ5h59ydXkybNKT2XBqmINKrG%2B6TgDc8SF&X-Amz-Signature=c86b52a871d97829436f492c72d1edca917f4950199d9c978a088c3f3020c4bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJV2UJU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEirD2D388ecVQlvNjUEWhxGcWZKRsCgSZFfeysYpziGAiEAsGTQOzkzfDqazKNmIpJ5liQe9DYUWnBzxUoOb9h%2FZ4gq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDG3zW8I4YU03vznk%2BSrcA5lomJaUiDBoRnE2nbmXzDes03XI1uiZ2huB%2FhTiqOxXGyZqpZuCqg5SAGVNd2miVMBZDLOcj3LNOq80%2BWL0q6KdRywlZwl7EYKdNRaIEpTZHmOp5YYrCVK5jgBFBKiWlEYmpe6%2Fl7K18ZmzkDRGdfhO%2FfNv2xkp6igO0ZbUs5wC7ehVEWz85zStOEOqHH3WMqVT7V9obbJ0b%2FZn6q5QAi8bXs9g899VPVkKt9ZOVUP5js5huqrwjW3XM%2Fsg%2BbirCRZyBvNZIZgJGOwzQ1R3OzEYo8gX0Ghp%2BjbYe5jVvvV6Ba74HlqVL4GzCdov8X9HTHMkOYJGmgIlviwmEfVS31iqHTe2QJW4YZ4vs91Cpb%2BB%2BGUV%2BhROWibhkBiaK4eMiW8XX6cpkczCLDIMorpHP55hggRSikuGt%2B2H1JsU76pEw7PXAK0%2FTW%2BFd5G6F%2F1IW8GJbz3eLPdwiVIk2DJcSbYAxkknaqMtS6dHSNSjyXB%2BWNQM2HkrKnsHZXJX4A9lNGhtyVb8S6fe3t8LZHWREgPyGYsSiTNWsK6Xn%2FQYPsl93%2F%2FuEuAdXbpkCPJGpCmyIxH2QzbhF0IWpJaZ2kS8RkCdPa1K74iGL1RlNQ7owBjdBt7O%2Blo1lahhGh32ML66qcAGOqUBF%2FmC%2FAm6nOmrhW7RRKpyFqnpeICyN5R9Xz6ubj5BjUmpBjLdjktpLNU3kM9bU7HB5saf81BdS3DEKEZyTM61ivxK%2FwEAfcA8%2B4H8vwpuIhBytq3wsIYhSlOuKkFsuWDBIJLOdNSzloqOgY0VXrSEScFG4RWsoLddJZ03VYypcZeyb75UXWMv3vGiP6BZ5h59ydXkybNKT2XBqmINKrG%2B6TgDc8SF&X-Amz-Signature=1c8a9afe09c4295f90ee3ad6958aa9b9b8b5da8d81c0a112e6148b8bdd6edae6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJV2UJU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEirD2D388ecVQlvNjUEWhxGcWZKRsCgSZFfeysYpziGAiEAsGTQOzkzfDqazKNmIpJ5liQe9DYUWnBzxUoOb9h%2FZ4gq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDG3zW8I4YU03vznk%2BSrcA5lomJaUiDBoRnE2nbmXzDes03XI1uiZ2huB%2FhTiqOxXGyZqpZuCqg5SAGVNd2miVMBZDLOcj3LNOq80%2BWL0q6KdRywlZwl7EYKdNRaIEpTZHmOp5YYrCVK5jgBFBKiWlEYmpe6%2Fl7K18ZmzkDRGdfhO%2FfNv2xkp6igO0ZbUs5wC7ehVEWz85zStOEOqHH3WMqVT7V9obbJ0b%2FZn6q5QAi8bXs9g899VPVkKt9ZOVUP5js5huqrwjW3XM%2Fsg%2BbirCRZyBvNZIZgJGOwzQ1R3OzEYo8gX0Ghp%2BjbYe5jVvvV6Ba74HlqVL4GzCdov8X9HTHMkOYJGmgIlviwmEfVS31iqHTe2QJW4YZ4vs91Cpb%2BB%2BGUV%2BhROWibhkBiaK4eMiW8XX6cpkczCLDIMorpHP55hggRSikuGt%2B2H1JsU76pEw7PXAK0%2FTW%2BFd5G6F%2F1IW8GJbz3eLPdwiVIk2DJcSbYAxkknaqMtS6dHSNSjyXB%2BWNQM2HkrKnsHZXJX4A9lNGhtyVb8S6fe3t8LZHWREgPyGYsSiTNWsK6Xn%2FQYPsl93%2F%2FuEuAdXbpkCPJGpCmyIxH2QzbhF0IWpJaZ2kS8RkCdPa1K74iGL1RlNQ7owBjdBt7O%2Blo1lahhGh32ML66qcAGOqUBF%2FmC%2FAm6nOmrhW7RRKpyFqnpeICyN5R9Xz6ubj5BjUmpBjLdjktpLNU3kM9bU7HB5saf81BdS3DEKEZyTM61ivxK%2FwEAfcA8%2B4H8vwpuIhBytq3wsIYhSlOuKkFsuWDBIJLOdNSzloqOgY0VXrSEScFG4RWsoLddJZ03VYypcZeyb75UXWMv3vGiP6BZ5h59ydXkybNKT2XBqmINKrG%2B6TgDc8SF&X-Amz-Signature=a64334d50364cc819d0be747e4aaa1a5e23f1907e72825a5c74a8c0f5ae75a16&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJV2UJU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEirD2D388ecVQlvNjUEWhxGcWZKRsCgSZFfeysYpziGAiEAsGTQOzkzfDqazKNmIpJ5liQe9DYUWnBzxUoOb9h%2FZ4gq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDG3zW8I4YU03vznk%2BSrcA5lomJaUiDBoRnE2nbmXzDes03XI1uiZ2huB%2FhTiqOxXGyZqpZuCqg5SAGVNd2miVMBZDLOcj3LNOq80%2BWL0q6KdRywlZwl7EYKdNRaIEpTZHmOp5YYrCVK5jgBFBKiWlEYmpe6%2Fl7K18ZmzkDRGdfhO%2FfNv2xkp6igO0ZbUs5wC7ehVEWz85zStOEOqHH3WMqVT7V9obbJ0b%2FZn6q5QAi8bXs9g899VPVkKt9ZOVUP5js5huqrwjW3XM%2Fsg%2BbirCRZyBvNZIZgJGOwzQ1R3OzEYo8gX0Ghp%2BjbYe5jVvvV6Ba74HlqVL4GzCdov8X9HTHMkOYJGmgIlviwmEfVS31iqHTe2QJW4YZ4vs91Cpb%2BB%2BGUV%2BhROWibhkBiaK4eMiW8XX6cpkczCLDIMorpHP55hggRSikuGt%2B2H1JsU76pEw7PXAK0%2FTW%2BFd5G6F%2F1IW8GJbz3eLPdwiVIk2DJcSbYAxkknaqMtS6dHSNSjyXB%2BWNQM2HkrKnsHZXJX4A9lNGhtyVb8S6fe3t8LZHWREgPyGYsSiTNWsK6Xn%2FQYPsl93%2F%2FuEuAdXbpkCPJGpCmyIxH2QzbhF0IWpJaZ2kS8RkCdPa1K74iGL1RlNQ7owBjdBt7O%2Blo1lahhGh32ML66qcAGOqUBF%2FmC%2FAm6nOmrhW7RRKpyFqnpeICyN5R9Xz6ubj5BjUmpBjLdjktpLNU3kM9bU7HB5saf81BdS3DEKEZyTM61ivxK%2FwEAfcA8%2B4H8vwpuIhBytq3wsIYhSlOuKkFsuWDBIJLOdNSzloqOgY0VXrSEScFG4RWsoLddJZ03VYypcZeyb75UXWMv3vGiP6BZ5h59ydXkybNKT2XBqmINKrG%2B6TgDc8SF&X-Amz-Signature=5d9ee5ad2fbf269123d87d3522bfd19257b44f63c109fdcc3b799a1f4510e90e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJV2UJU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEirD2D388ecVQlvNjUEWhxGcWZKRsCgSZFfeysYpziGAiEAsGTQOzkzfDqazKNmIpJ5liQe9DYUWnBzxUoOb9h%2FZ4gq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDG3zW8I4YU03vznk%2BSrcA5lomJaUiDBoRnE2nbmXzDes03XI1uiZ2huB%2FhTiqOxXGyZqpZuCqg5SAGVNd2miVMBZDLOcj3LNOq80%2BWL0q6KdRywlZwl7EYKdNRaIEpTZHmOp5YYrCVK5jgBFBKiWlEYmpe6%2Fl7K18ZmzkDRGdfhO%2FfNv2xkp6igO0ZbUs5wC7ehVEWz85zStOEOqHH3WMqVT7V9obbJ0b%2FZn6q5QAi8bXs9g899VPVkKt9ZOVUP5js5huqrwjW3XM%2Fsg%2BbirCRZyBvNZIZgJGOwzQ1R3OzEYo8gX0Ghp%2BjbYe5jVvvV6Ba74HlqVL4GzCdov8X9HTHMkOYJGmgIlviwmEfVS31iqHTe2QJW4YZ4vs91Cpb%2BB%2BGUV%2BhROWibhkBiaK4eMiW8XX6cpkczCLDIMorpHP55hggRSikuGt%2B2H1JsU76pEw7PXAK0%2FTW%2BFd5G6F%2F1IW8GJbz3eLPdwiVIk2DJcSbYAxkknaqMtS6dHSNSjyXB%2BWNQM2HkrKnsHZXJX4A9lNGhtyVb8S6fe3t8LZHWREgPyGYsSiTNWsK6Xn%2FQYPsl93%2F%2FuEuAdXbpkCPJGpCmyIxH2QzbhF0IWpJaZ2kS8RkCdPa1K74iGL1RlNQ7owBjdBt7O%2Blo1lahhGh32ML66qcAGOqUBF%2FmC%2FAm6nOmrhW7RRKpyFqnpeICyN5R9Xz6ubj5BjUmpBjLdjktpLNU3kM9bU7HB5saf81BdS3DEKEZyTM61ivxK%2FwEAfcA8%2B4H8vwpuIhBytq3wsIYhSlOuKkFsuWDBIJLOdNSzloqOgY0VXrSEScFG4RWsoLddJZ03VYypcZeyb75UXWMv3vGiP6BZ5h59ydXkybNKT2XBqmINKrG%2B6TgDc8SF&X-Amz-Signature=4036a81589fe72689fb4a5655e0a23ff08affc858b0136d072b0c854d926a926&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
