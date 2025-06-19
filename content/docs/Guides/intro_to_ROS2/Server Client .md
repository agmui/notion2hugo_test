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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZFPNSLK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClmHYT2TTwWNo1yetETukFA3snKgCiEhSBpfk5vsk5JAIhANzIXUlCKcNXqMLLNIIa9bWq9g7807LFCg6KInWH%2FWA%2BKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9oyvz0lGH02bNREoq3AP2%2F2dAYJHrjq7qxBeNstKsMs5QpYTtX37YFu5GTe5oapcId%2Bz8AZQm9%2BJcX44St%2Byp00H8Pmu8gjAnI0cp8AYftFQxHKGl1zWKqtPjBpLy0dDZcAZ5%2BeoT1tsRE6e7gCz58zCdnb12YBP%2BOaNlrBNIB89sOMDC2EqrKs2ET70C65HMIVAa5zAFtfGMXJ%2FeFLy7kIXbL1XqthaDKYDco3WjGbNaHlCzu6N9EoI%2Fos1weYS3llLEB%2Bq8kUNjxSTXC8seCKwGpebrPE9hnWuQTUgGJCKamFzJlnpqQNH216IvXNQ9dc%2FGZyOrnsCVBMJALlFVWekzocHfn7E33hlDH693f43U6gUY8iQGqEQiN3y2BhrkX31KxeQd9io1%2B2S0w6FiKVk4OGW9QVMScniOE8GrtG287zoJNgVbj3%2BDDa%2BLN2TetjvVk6WXoWdxs8aFN69UZySrGJ0E4FTxNf6QFquWUmdUFhOY1lcP%2FOyaBK%2FDh%2BsAu2wOEpP6g9cIuoyAkgcLWHgt9PGgv7QEObU5FYRskZA%2Fa3IGU2YX7CBjohlrK%2ByVW1Zit1W8BgNhp4C%2FyaapaQIi1SrStB7c3djx7wL74jvyY6yrBn3fvSmMAY4Gy38soHEDt1nC95HZgzD9s87CBjqkARFyAztkdK3klcCRTImtgllxg9UZ9LWjLhz6HctX0CZNtEWAaTj578m%2BnpPbCI65GO4rQhKb0fMwrTvyQDOFeRv5AWRGed0zwuJk6hYhTj4EySzouDM4IuxkHTjuzz2dyguiXagjwzOmnd05NglvTeY6l0GF4MUaeqKdFkf9Yev%2B9L4uw2LN9Xh82dNyBluXgN0tRO6VEUja1mIgB7c98WeFjkEk&X-Amz-Signature=c1e6c2914356e4dd5c9d2b4734af8fa03751678b42d8c7a9249036f38e8235c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZFPNSLK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClmHYT2TTwWNo1yetETukFA3snKgCiEhSBpfk5vsk5JAIhANzIXUlCKcNXqMLLNIIa9bWq9g7807LFCg6KInWH%2FWA%2BKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9oyvz0lGH02bNREoq3AP2%2F2dAYJHrjq7qxBeNstKsMs5QpYTtX37YFu5GTe5oapcId%2Bz8AZQm9%2BJcX44St%2Byp00H8Pmu8gjAnI0cp8AYftFQxHKGl1zWKqtPjBpLy0dDZcAZ5%2BeoT1tsRE6e7gCz58zCdnb12YBP%2BOaNlrBNIB89sOMDC2EqrKs2ET70C65HMIVAa5zAFtfGMXJ%2FeFLy7kIXbL1XqthaDKYDco3WjGbNaHlCzu6N9EoI%2Fos1weYS3llLEB%2Bq8kUNjxSTXC8seCKwGpebrPE9hnWuQTUgGJCKamFzJlnpqQNH216IvXNQ9dc%2FGZyOrnsCVBMJALlFVWekzocHfn7E33hlDH693f43U6gUY8iQGqEQiN3y2BhrkX31KxeQd9io1%2B2S0w6FiKVk4OGW9QVMScniOE8GrtG287zoJNgVbj3%2BDDa%2BLN2TetjvVk6WXoWdxs8aFN69UZySrGJ0E4FTxNf6QFquWUmdUFhOY1lcP%2FOyaBK%2FDh%2BsAu2wOEpP6g9cIuoyAkgcLWHgt9PGgv7QEObU5FYRskZA%2Fa3IGU2YX7CBjohlrK%2ByVW1Zit1W8BgNhp4C%2FyaapaQIi1SrStB7c3djx7wL74jvyY6yrBn3fvSmMAY4Gy38soHEDt1nC95HZgzD9s87CBjqkARFyAztkdK3klcCRTImtgllxg9UZ9LWjLhz6HctX0CZNtEWAaTj578m%2BnpPbCI65GO4rQhKb0fMwrTvyQDOFeRv5AWRGed0zwuJk6hYhTj4EySzouDM4IuxkHTjuzz2dyguiXagjwzOmnd05NglvTeY6l0GF4MUaeqKdFkf9Yev%2B9L4uw2LN9Xh82dNyBluXgN0tRO6VEUja1mIgB7c98WeFjkEk&X-Amz-Signature=a6e6c2785ab8366c0375584952983badb3c15d2f731f38226e8b217e975a5e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZFPNSLK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClmHYT2TTwWNo1yetETukFA3snKgCiEhSBpfk5vsk5JAIhANzIXUlCKcNXqMLLNIIa9bWq9g7807LFCg6KInWH%2FWA%2BKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9oyvz0lGH02bNREoq3AP2%2F2dAYJHrjq7qxBeNstKsMs5QpYTtX37YFu5GTe5oapcId%2Bz8AZQm9%2BJcX44St%2Byp00H8Pmu8gjAnI0cp8AYftFQxHKGl1zWKqtPjBpLy0dDZcAZ5%2BeoT1tsRE6e7gCz58zCdnb12YBP%2BOaNlrBNIB89sOMDC2EqrKs2ET70C65HMIVAa5zAFtfGMXJ%2FeFLy7kIXbL1XqthaDKYDco3WjGbNaHlCzu6N9EoI%2Fos1weYS3llLEB%2Bq8kUNjxSTXC8seCKwGpebrPE9hnWuQTUgGJCKamFzJlnpqQNH216IvXNQ9dc%2FGZyOrnsCVBMJALlFVWekzocHfn7E33hlDH693f43U6gUY8iQGqEQiN3y2BhrkX31KxeQd9io1%2B2S0w6FiKVk4OGW9QVMScniOE8GrtG287zoJNgVbj3%2BDDa%2BLN2TetjvVk6WXoWdxs8aFN69UZySrGJ0E4FTxNf6QFquWUmdUFhOY1lcP%2FOyaBK%2FDh%2BsAu2wOEpP6g9cIuoyAkgcLWHgt9PGgv7QEObU5FYRskZA%2Fa3IGU2YX7CBjohlrK%2ByVW1Zit1W8BgNhp4C%2FyaapaQIi1SrStB7c3djx7wL74jvyY6yrBn3fvSmMAY4Gy38soHEDt1nC95HZgzD9s87CBjqkARFyAztkdK3klcCRTImtgllxg9UZ9LWjLhz6HctX0CZNtEWAaTj578m%2BnpPbCI65GO4rQhKb0fMwrTvyQDOFeRv5AWRGed0zwuJk6hYhTj4EySzouDM4IuxkHTjuzz2dyguiXagjwzOmnd05NglvTeY6l0GF4MUaeqKdFkf9Yev%2B9L4uw2LN9Xh82dNyBluXgN0tRO6VEUja1mIgB7c98WeFjkEk&X-Amz-Signature=130622f50a9d7a4ce634a024656cde30e0f56fa38db51d0fbfb73ea1a3bc8aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZFPNSLK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClmHYT2TTwWNo1yetETukFA3snKgCiEhSBpfk5vsk5JAIhANzIXUlCKcNXqMLLNIIa9bWq9g7807LFCg6KInWH%2FWA%2BKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9oyvz0lGH02bNREoq3AP2%2F2dAYJHrjq7qxBeNstKsMs5QpYTtX37YFu5GTe5oapcId%2Bz8AZQm9%2BJcX44St%2Byp00H8Pmu8gjAnI0cp8AYftFQxHKGl1zWKqtPjBpLy0dDZcAZ5%2BeoT1tsRE6e7gCz58zCdnb12YBP%2BOaNlrBNIB89sOMDC2EqrKs2ET70C65HMIVAa5zAFtfGMXJ%2FeFLy7kIXbL1XqthaDKYDco3WjGbNaHlCzu6N9EoI%2Fos1weYS3llLEB%2Bq8kUNjxSTXC8seCKwGpebrPE9hnWuQTUgGJCKamFzJlnpqQNH216IvXNQ9dc%2FGZyOrnsCVBMJALlFVWekzocHfn7E33hlDH693f43U6gUY8iQGqEQiN3y2BhrkX31KxeQd9io1%2B2S0w6FiKVk4OGW9QVMScniOE8GrtG287zoJNgVbj3%2BDDa%2BLN2TetjvVk6WXoWdxs8aFN69UZySrGJ0E4FTxNf6QFquWUmdUFhOY1lcP%2FOyaBK%2FDh%2BsAu2wOEpP6g9cIuoyAkgcLWHgt9PGgv7QEObU5FYRskZA%2Fa3IGU2YX7CBjohlrK%2ByVW1Zit1W8BgNhp4C%2FyaapaQIi1SrStB7c3djx7wL74jvyY6yrBn3fvSmMAY4Gy38soHEDt1nC95HZgzD9s87CBjqkARFyAztkdK3klcCRTImtgllxg9UZ9LWjLhz6HctX0CZNtEWAaTj578m%2BnpPbCI65GO4rQhKb0fMwrTvyQDOFeRv5AWRGed0zwuJk6hYhTj4EySzouDM4IuxkHTjuzz2dyguiXagjwzOmnd05NglvTeY6l0GF4MUaeqKdFkf9Yev%2B9L4uw2LN9Xh82dNyBluXgN0tRO6VEUja1mIgB7c98WeFjkEk&X-Amz-Signature=03dc3eb8c95a66a05cb6a2d4b27855cfbb02a377bb02e21375aed48a69d7883d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZFPNSLK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClmHYT2TTwWNo1yetETukFA3snKgCiEhSBpfk5vsk5JAIhANzIXUlCKcNXqMLLNIIa9bWq9g7807LFCg6KInWH%2FWA%2BKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9oyvz0lGH02bNREoq3AP2%2F2dAYJHrjq7qxBeNstKsMs5QpYTtX37YFu5GTe5oapcId%2Bz8AZQm9%2BJcX44St%2Byp00H8Pmu8gjAnI0cp8AYftFQxHKGl1zWKqtPjBpLy0dDZcAZ5%2BeoT1tsRE6e7gCz58zCdnb12YBP%2BOaNlrBNIB89sOMDC2EqrKs2ET70C65HMIVAa5zAFtfGMXJ%2FeFLy7kIXbL1XqthaDKYDco3WjGbNaHlCzu6N9EoI%2Fos1weYS3llLEB%2Bq8kUNjxSTXC8seCKwGpebrPE9hnWuQTUgGJCKamFzJlnpqQNH216IvXNQ9dc%2FGZyOrnsCVBMJALlFVWekzocHfn7E33hlDH693f43U6gUY8iQGqEQiN3y2BhrkX31KxeQd9io1%2B2S0w6FiKVk4OGW9QVMScniOE8GrtG287zoJNgVbj3%2BDDa%2BLN2TetjvVk6WXoWdxs8aFN69UZySrGJ0E4FTxNf6QFquWUmdUFhOY1lcP%2FOyaBK%2FDh%2BsAu2wOEpP6g9cIuoyAkgcLWHgt9PGgv7QEObU5FYRskZA%2Fa3IGU2YX7CBjohlrK%2ByVW1Zit1W8BgNhp4C%2FyaapaQIi1SrStB7c3djx7wL74jvyY6yrBn3fvSmMAY4Gy38soHEDt1nC95HZgzD9s87CBjqkARFyAztkdK3klcCRTImtgllxg9UZ9LWjLhz6HctX0CZNtEWAaTj578m%2BnpPbCI65GO4rQhKb0fMwrTvyQDOFeRv5AWRGed0zwuJk6hYhTj4EySzouDM4IuxkHTjuzz2dyguiXagjwzOmnd05NglvTeY6l0GF4MUaeqKdFkf9Yev%2B9L4uw2LN9Xh82dNyBluXgN0tRO6VEUja1mIgB7c98WeFjkEk&X-Amz-Signature=8406ed047537a221f9dc99ca51bb7a8a07a70bbd35b730e67f566f3dff971864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
