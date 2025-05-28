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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GMOCLT%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKwiBBhOMX%2FvwSCzZXX3Nhql%2FR4hjrABfwlO87cQeTfAiAPVSaQ%2FOz4O2OFU7lmrwqiI8GAc72E7BZIvo82bpARfCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMQ0TSFZyqroFb2nBmKtwDlIVi5NbDNQRkSre3eRhPUJ5kNbH8I3Zv2RyuvxDBuedHYROMAYatB73yvjThhqLekn8QF12tvVbyOpIYJoJdJbFnOQXT2k%2FqndmU2INfF6Z2vMS5E7XdWJ9XBGdeYCTfsdolvWiykYe96cP14mAOc34Dg09g8irqavj5pPSMdrI%2FFo7WNNORSBElWeb1ox3b%2BHtc8GoLx%2FE30MEwj%2F3kbQrUAWCuZp8iw3iw9AdygWl0RRImpStcYPRDeJpp8CpwT2J3T0CF4Hzk13Nz17ulsRJYEqHJMU2uYK4J6zJnXJsC3zb2KzyD%2F5xyY6A41tw1SnCSsWwlJ4sEpvxJ7w4rEYd%2FBkHSwODKsV7oDCJ9EqqIUhdhSaUs%2FuyFCikcmNx0XJ%2Fm2Pr7cNlJ%2BC5ezBdngSduMXA7zT9xdtZLNM66%2FT0cg21sWyDNaINKw9MXN6hKfk8FSadFDZf70lunaxA%2Fvd6Fke7%2FqNg3%2BjhWc4ibHubOxthAYvTqt3rSg49XOYWkgCUzQgqU1poCdF7qjUoXlDzVxpV%2B1jWJCD5p6i13Gucwth%2By9u%2BejVdielZLwKfvI0Ni8gMUMpRU%2FKY28z5y5S6u3jeeS5Lp5fzrMaixF423AQSmIJIY4OXqmuwwgcLbwQY6pgHevRETsN1qCVL%2BdfrPgQ8rHIN3fgc9WFy5AKX6KlcctE0kTVPhXEhXV7psLbKFQZsU8F6suGHl6CLIyfzTQYBIp2ky53V35ahQjUpo4I2F%2FtCSRasixS6jMQaV3uo24RcY0BV1jhD399KcRCPYQWGUDW9khF%2BzdbRJotjGQu%2Ftb4PuiFFkWtdUDzDkLyjS%2B1AHBOby6DIdS%2B6dgjFtyd%2Bt%2F%2BL109jY&X-Amz-Signature=5a77c21056432eba14450033a602df77b6d7a4aaf5c62776cbc16b80d665f53a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GMOCLT%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKwiBBhOMX%2FvwSCzZXX3Nhql%2FR4hjrABfwlO87cQeTfAiAPVSaQ%2FOz4O2OFU7lmrwqiI8GAc72E7BZIvo82bpARfCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMQ0TSFZyqroFb2nBmKtwDlIVi5NbDNQRkSre3eRhPUJ5kNbH8I3Zv2RyuvxDBuedHYROMAYatB73yvjThhqLekn8QF12tvVbyOpIYJoJdJbFnOQXT2k%2FqndmU2INfF6Z2vMS5E7XdWJ9XBGdeYCTfsdolvWiykYe96cP14mAOc34Dg09g8irqavj5pPSMdrI%2FFo7WNNORSBElWeb1ox3b%2BHtc8GoLx%2FE30MEwj%2F3kbQrUAWCuZp8iw3iw9AdygWl0RRImpStcYPRDeJpp8CpwT2J3T0CF4Hzk13Nz17ulsRJYEqHJMU2uYK4J6zJnXJsC3zb2KzyD%2F5xyY6A41tw1SnCSsWwlJ4sEpvxJ7w4rEYd%2FBkHSwODKsV7oDCJ9EqqIUhdhSaUs%2FuyFCikcmNx0XJ%2Fm2Pr7cNlJ%2BC5ezBdngSduMXA7zT9xdtZLNM66%2FT0cg21sWyDNaINKw9MXN6hKfk8FSadFDZf70lunaxA%2Fvd6Fke7%2FqNg3%2BjhWc4ibHubOxthAYvTqt3rSg49XOYWkgCUzQgqU1poCdF7qjUoXlDzVxpV%2B1jWJCD5p6i13Gucwth%2By9u%2BejVdielZLwKfvI0Ni8gMUMpRU%2FKY28z5y5S6u3jeeS5Lp5fzrMaixF423AQSmIJIY4OXqmuwwgcLbwQY6pgHevRETsN1qCVL%2BdfrPgQ8rHIN3fgc9WFy5AKX6KlcctE0kTVPhXEhXV7psLbKFQZsU8F6suGHl6CLIyfzTQYBIp2ky53V35ahQjUpo4I2F%2FtCSRasixS6jMQaV3uo24RcY0BV1jhD399KcRCPYQWGUDW9khF%2BzdbRJotjGQu%2Ftb4PuiFFkWtdUDzDkLyjS%2B1AHBOby6DIdS%2B6dgjFtyd%2Bt%2F%2BL109jY&X-Amz-Signature=27b2a20b6c5e1f81748aeb30111cc313fbd5190252fcc57dd829cc0cff3ee445&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GMOCLT%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKwiBBhOMX%2FvwSCzZXX3Nhql%2FR4hjrABfwlO87cQeTfAiAPVSaQ%2FOz4O2OFU7lmrwqiI8GAc72E7BZIvo82bpARfCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMQ0TSFZyqroFb2nBmKtwDlIVi5NbDNQRkSre3eRhPUJ5kNbH8I3Zv2RyuvxDBuedHYROMAYatB73yvjThhqLekn8QF12tvVbyOpIYJoJdJbFnOQXT2k%2FqndmU2INfF6Z2vMS5E7XdWJ9XBGdeYCTfsdolvWiykYe96cP14mAOc34Dg09g8irqavj5pPSMdrI%2FFo7WNNORSBElWeb1ox3b%2BHtc8GoLx%2FE30MEwj%2F3kbQrUAWCuZp8iw3iw9AdygWl0RRImpStcYPRDeJpp8CpwT2J3T0CF4Hzk13Nz17ulsRJYEqHJMU2uYK4J6zJnXJsC3zb2KzyD%2F5xyY6A41tw1SnCSsWwlJ4sEpvxJ7w4rEYd%2FBkHSwODKsV7oDCJ9EqqIUhdhSaUs%2FuyFCikcmNx0XJ%2Fm2Pr7cNlJ%2BC5ezBdngSduMXA7zT9xdtZLNM66%2FT0cg21sWyDNaINKw9MXN6hKfk8FSadFDZf70lunaxA%2Fvd6Fke7%2FqNg3%2BjhWc4ibHubOxthAYvTqt3rSg49XOYWkgCUzQgqU1poCdF7qjUoXlDzVxpV%2B1jWJCD5p6i13Gucwth%2By9u%2BejVdielZLwKfvI0Ni8gMUMpRU%2FKY28z5y5S6u3jeeS5Lp5fzrMaixF423AQSmIJIY4OXqmuwwgcLbwQY6pgHevRETsN1qCVL%2BdfrPgQ8rHIN3fgc9WFy5AKX6KlcctE0kTVPhXEhXV7psLbKFQZsU8F6suGHl6CLIyfzTQYBIp2ky53V35ahQjUpo4I2F%2FtCSRasixS6jMQaV3uo24RcY0BV1jhD399KcRCPYQWGUDW9khF%2BzdbRJotjGQu%2Ftb4PuiFFkWtdUDzDkLyjS%2B1AHBOby6DIdS%2B6dgjFtyd%2Bt%2F%2BL109jY&X-Amz-Signature=2121f3edbbf45b4bfdbb9478b90d417772f47bec65144d57cc036f348200bbdb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GMOCLT%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKwiBBhOMX%2FvwSCzZXX3Nhql%2FR4hjrABfwlO87cQeTfAiAPVSaQ%2FOz4O2OFU7lmrwqiI8GAc72E7BZIvo82bpARfCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMQ0TSFZyqroFb2nBmKtwDlIVi5NbDNQRkSre3eRhPUJ5kNbH8I3Zv2RyuvxDBuedHYROMAYatB73yvjThhqLekn8QF12tvVbyOpIYJoJdJbFnOQXT2k%2FqndmU2INfF6Z2vMS5E7XdWJ9XBGdeYCTfsdolvWiykYe96cP14mAOc34Dg09g8irqavj5pPSMdrI%2FFo7WNNORSBElWeb1ox3b%2BHtc8GoLx%2FE30MEwj%2F3kbQrUAWCuZp8iw3iw9AdygWl0RRImpStcYPRDeJpp8CpwT2J3T0CF4Hzk13Nz17ulsRJYEqHJMU2uYK4J6zJnXJsC3zb2KzyD%2F5xyY6A41tw1SnCSsWwlJ4sEpvxJ7w4rEYd%2FBkHSwODKsV7oDCJ9EqqIUhdhSaUs%2FuyFCikcmNx0XJ%2Fm2Pr7cNlJ%2BC5ezBdngSduMXA7zT9xdtZLNM66%2FT0cg21sWyDNaINKw9MXN6hKfk8FSadFDZf70lunaxA%2Fvd6Fke7%2FqNg3%2BjhWc4ibHubOxthAYvTqt3rSg49XOYWkgCUzQgqU1poCdF7qjUoXlDzVxpV%2B1jWJCD5p6i13Gucwth%2By9u%2BejVdielZLwKfvI0Ni8gMUMpRU%2FKY28z5y5S6u3jeeS5Lp5fzrMaixF423AQSmIJIY4OXqmuwwgcLbwQY6pgHevRETsN1qCVL%2BdfrPgQ8rHIN3fgc9WFy5AKX6KlcctE0kTVPhXEhXV7psLbKFQZsU8F6suGHl6CLIyfzTQYBIp2ky53V35ahQjUpo4I2F%2FtCSRasixS6jMQaV3uo24RcY0BV1jhD399KcRCPYQWGUDW9khF%2BzdbRJotjGQu%2Ftb4PuiFFkWtdUDzDkLyjS%2B1AHBOby6DIdS%2B6dgjFtyd%2Bt%2F%2BL109jY&X-Amz-Signature=7cb2e75e5d436552ff2d60a8bf74998795a9db549c79fd6425cad50418b90406&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GMOCLT%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKwiBBhOMX%2FvwSCzZXX3Nhql%2FR4hjrABfwlO87cQeTfAiAPVSaQ%2FOz4O2OFU7lmrwqiI8GAc72E7BZIvo82bpARfCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMQ0TSFZyqroFb2nBmKtwDlIVi5NbDNQRkSre3eRhPUJ5kNbH8I3Zv2RyuvxDBuedHYROMAYatB73yvjThhqLekn8QF12tvVbyOpIYJoJdJbFnOQXT2k%2FqndmU2INfF6Z2vMS5E7XdWJ9XBGdeYCTfsdolvWiykYe96cP14mAOc34Dg09g8irqavj5pPSMdrI%2FFo7WNNORSBElWeb1ox3b%2BHtc8GoLx%2FE30MEwj%2F3kbQrUAWCuZp8iw3iw9AdygWl0RRImpStcYPRDeJpp8CpwT2J3T0CF4Hzk13Nz17ulsRJYEqHJMU2uYK4J6zJnXJsC3zb2KzyD%2F5xyY6A41tw1SnCSsWwlJ4sEpvxJ7w4rEYd%2FBkHSwODKsV7oDCJ9EqqIUhdhSaUs%2FuyFCikcmNx0XJ%2Fm2Pr7cNlJ%2BC5ezBdngSduMXA7zT9xdtZLNM66%2FT0cg21sWyDNaINKw9MXN6hKfk8FSadFDZf70lunaxA%2Fvd6Fke7%2FqNg3%2BjhWc4ibHubOxthAYvTqt3rSg49XOYWkgCUzQgqU1poCdF7qjUoXlDzVxpV%2B1jWJCD5p6i13Gucwth%2By9u%2BejVdielZLwKfvI0Ni8gMUMpRU%2FKY28z5y5S6u3jeeS5Lp5fzrMaixF423AQSmIJIY4OXqmuwwgcLbwQY6pgHevRETsN1qCVL%2BdfrPgQ8rHIN3fgc9WFy5AKX6KlcctE0kTVPhXEhXV7psLbKFQZsU8F6suGHl6CLIyfzTQYBIp2ky53V35ahQjUpo4I2F%2FtCSRasixS6jMQaV3uo24RcY0BV1jhD399KcRCPYQWGUDW9khF%2BzdbRJotjGQu%2Ftb4PuiFFkWtdUDzDkLyjS%2B1AHBOby6DIdS%2B6dgjFtyd%2Bt%2F%2BL109jY&X-Amz-Signature=b034781f0faa198600263893eab10035c7915d8723529ff4e9ffb6960101eb1c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
