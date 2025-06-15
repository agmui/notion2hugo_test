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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAY5XA7J%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGOMBaaxnM7Yttmjf8rnpKjbTwKtFKz%2BAJKOxgaL3TQrAiEA5Hi8geaNC%2BbztdGuWGWLYbV6zO72Cwd%2BD4HIO6zdfCYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHmiNw5%2FNAo4NONuHSrcAzH%2FNILuM3g6ksmrIIAvMtLCEz9sURxH27GDCWG5JPEh2XwEfdK4NBu2LzYHji%2F1GqH4IrSCdvFMQGQ6SixteG5hRYs2pmf0hFC3Jl4r%2FU8IgCUbwYh8q5SYQLrJRDwOtxIS5vbhionzUCOqfsblnl9TkVgaZSJ2lfqA1A1mQLjONMZzFtRDD8VhVZEsU7Lc4LjnUOomH%2BIOsLXEZD0o4NT4FMRWmabOxWEZsWnMPM9YFcZe3RvXHfl8ntitYgDL5wY3ozQFK07rkivxP8obY%2FFTzgztbHkonICQb8mfubCXi9XOwX7cCMRgBDn6%2F1xpSwGG%2BVEyrgyL8d3UAoX34vAVWENlfFixMGk%2FZph5lwMsZzqXDLIQJGZq8GctP%2Bf9vKTtMntYIVdv6Io2O9xmq4AcysFr7EeJItqTCA1BxF1Tbcgs1vYQ%2FB4kKO%2BtgCTCFzSMbo%2BDBHTLk2dFUWf%2BA5No3Az%2BHebINo%2BbU%2Fw1SoQRdzeOn0IS0UdrNuTFd1kqk3w5jRYvPgFNii9pfSDsryOq3cTzWJSuvBmdz7gFAsuwkhmPdXfO8lAo0arXMW5UzHZpbtF%2Fm%2F09dIyqoeKsNwxCiz2vjOzTos%2FpA0d8kX1hQo7eNWn7wiezcFY%2FMI6nu8IGOqUBnoFjeDjJ2FUDcddoBqznnPY9vGR1xGse9ttJVbj13zGank2pyGD1yC%2FVrqSRL2pK9%2F4ZPql5klWEzUS9GGlEVQhQTgWkRL1jFoE3KNyCR79mDQDWvAYHe%2F8Rlho2VMhAv8%2FQGcE4l7d9bYv%2BFJYH3nVKXpUsVT04h%2BQh9rFj%2FE%2BByi2xfVHmaZG4XmFLJqHe%2BFtO6HReoNTeRJwU7lXUzuSkeeGg&X-Amz-Signature=a5eb2ebd4d97ce65300bfd26925c30d22c904967c851aa12f7cf17179f2cc097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAY5XA7J%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGOMBaaxnM7Yttmjf8rnpKjbTwKtFKz%2BAJKOxgaL3TQrAiEA5Hi8geaNC%2BbztdGuWGWLYbV6zO72Cwd%2BD4HIO6zdfCYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHmiNw5%2FNAo4NONuHSrcAzH%2FNILuM3g6ksmrIIAvMtLCEz9sURxH27GDCWG5JPEh2XwEfdK4NBu2LzYHji%2F1GqH4IrSCdvFMQGQ6SixteG5hRYs2pmf0hFC3Jl4r%2FU8IgCUbwYh8q5SYQLrJRDwOtxIS5vbhionzUCOqfsblnl9TkVgaZSJ2lfqA1A1mQLjONMZzFtRDD8VhVZEsU7Lc4LjnUOomH%2BIOsLXEZD0o4NT4FMRWmabOxWEZsWnMPM9YFcZe3RvXHfl8ntitYgDL5wY3ozQFK07rkivxP8obY%2FFTzgztbHkonICQb8mfubCXi9XOwX7cCMRgBDn6%2F1xpSwGG%2BVEyrgyL8d3UAoX34vAVWENlfFixMGk%2FZph5lwMsZzqXDLIQJGZq8GctP%2Bf9vKTtMntYIVdv6Io2O9xmq4AcysFr7EeJItqTCA1BxF1Tbcgs1vYQ%2FB4kKO%2BtgCTCFzSMbo%2BDBHTLk2dFUWf%2BA5No3Az%2BHebINo%2BbU%2Fw1SoQRdzeOn0IS0UdrNuTFd1kqk3w5jRYvPgFNii9pfSDsryOq3cTzWJSuvBmdz7gFAsuwkhmPdXfO8lAo0arXMW5UzHZpbtF%2Fm%2F09dIyqoeKsNwxCiz2vjOzTos%2FpA0d8kX1hQo7eNWn7wiezcFY%2FMI6nu8IGOqUBnoFjeDjJ2FUDcddoBqznnPY9vGR1xGse9ttJVbj13zGank2pyGD1yC%2FVrqSRL2pK9%2F4ZPql5klWEzUS9GGlEVQhQTgWkRL1jFoE3KNyCR79mDQDWvAYHe%2F8Rlho2VMhAv8%2FQGcE4l7d9bYv%2BFJYH3nVKXpUsVT04h%2BQh9rFj%2FE%2BByi2xfVHmaZG4XmFLJqHe%2BFtO6HReoNTeRJwU7lXUzuSkeeGg&X-Amz-Signature=aa714f08bdcb2b218fd6023d442dac2c3585c24af2d4dae9d43a0f763ada22bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAY5XA7J%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGOMBaaxnM7Yttmjf8rnpKjbTwKtFKz%2BAJKOxgaL3TQrAiEA5Hi8geaNC%2BbztdGuWGWLYbV6zO72Cwd%2BD4HIO6zdfCYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHmiNw5%2FNAo4NONuHSrcAzH%2FNILuM3g6ksmrIIAvMtLCEz9sURxH27GDCWG5JPEh2XwEfdK4NBu2LzYHji%2F1GqH4IrSCdvFMQGQ6SixteG5hRYs2pmf0hFC3Jl4r%2FU8IgCUbwYh8q5SYQLrJRDwOtxIS5vbhionzUCOqfsblnl9TkVgaZSJ2lfqA1A1mQLjONMZzFtRDD8VhVZEsU7Lc4LjnUOomH%2BIOsLXEZD0o4NT4FMRWmabOxWEZsWnMPM9YFcZe3RvXHfl8ntitYgDL5wY3ozQFK07rkivxP8obY%2FFTzgztbHkonICQb8mfubCXi9XOwX7cCMRgBDn6%2F1xpSwGG%2BVEyrgyL8d3UAoX34vAVWENlfFixMGk%2FZph5lwMsZzqXDLIQJGZq8GctP%2Bf9vKTtMntYIVdv6Io2O9xmq4AcysFr7EeJItqTCA1BxF1Tbcgs1vYQ%2FB4kKO%2BtgCTCFzSMbo%2BDBHTLk2dFUWf%2BA5No3Az%2BHebINo%2BbU%2Fw1SoQRdzeOn0IS0UdrNuTFd1kqk3w5jRYvPgFNii9pfSDsryOq3cTzWJSuvBmdz7gFAsuwkhmPdXfO8lAo0arXMW5UzHZpbtF%2Fm%2F09dIyqoeKsNwxCiz2vjOzTos%2FpA0d8kX1hQo7eNWn7wiezcFY%2FMI6nu8IGOqUBnoFjeDjJ2FUDcddoBqznnPY9vGR1xGse9ttJVbj13zGank2pyGD1yC%2FVrqSRL2pK9%2F4ZPql5klWEzUS9GGlEVQhQTgWkRL1jFoE3KNyCR79mDQDWvAYHe%2F8Rlho2VMhAv8%2FQGcE4l7d9bYv%2BFJYH3nVKXpUsVT04h%2BQh9rFj%2FE%2BByi2xfVHmaZG4XmFLJqHe%2BFtO6HReoNTeRJwU7lXUzuSkeeGg&X-Amz-Signature=b2c5f742d4d3b7c45f62ff496bce42319d5b549dc1da02df79dc2e99ca0be3ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAY5XA7J%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGOMBaaxnM7Yttmjf8rnpKjbTwKtFKz%2BAJKOxgaL3TQrAiEA5Hi8geaNC%2BbztdGuWGWLYbV6zO72Cwd%2BD4HIO6zdfCYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHmiNw5%2FNAo4NONuHSrcAzH%2FNILuM3g6ksmrIIAvMtLCEz9sURxH27GDCWG5JPEh2XwEfdK4NBu2LzYHji%2F1GqH4IrSCdvFMQGQ6SixteG5hRYs2pmf0hFC3Jl4r%2FU8IgCUbwYh8q5SYQLrJRDwOtxIS5vbhionzUCOqfsblnl9TkVgaZSJ2lfqA1A1mQLjONMZzFtRDD8VhVZEsU7Lc4LjnUOomH%2BIOsLXEZD0o4NT4FMRWmabOxWEZsWnMPM9YFcZe3RvXHfl8ntitYgDL5wY3ozQFK07rkivxP8obY%2FFTzgztbHkonICQb8mfubCXi9XOwX7cCMRgBDn6%2F1xpSwGG%2BVEyrgyL8d3UAoX34vAVWENlfFixMGk%2FZph5lwMsZzqXDLIQJGZq8GctP%2Bf9vKTtMntYIVdv6Io2O9xmq4AcysFr7EeJItqTCA1BxF1Tbcgs1vYQ%2FB4kKO%2BtgCTCFzSMbo%2BDBHTLk2dFUWf%2BA5No3Az%2BHebINo%2BbU%2Fw1SoQRdzeOn0IS0UdrNuTFd1kqk3w5jRYvPgFNii9pfSDsryOq3cTzWJSuvBmdz7gFAsuwkhmPdXfO8lAo0arXMW5UzHZpbtF%2Fm%2F09dIyqoeKsNwxCiz2vjOzTos%2FpA0d8kX1hQo7eNWn7wiezcFY%2FMI6nu8IGOqUBnoFjeDjJ2FUDcddoBqznnPY9vGR1xGse9ttJVbj13zGank2pyGD1yC%2FVrqSRL2pK9%2F4ZPql5klWEzUS9GGlEVQhQTgWkRL1jFoE3KNyCR79mDQDWvAYHe%2F8Rlho2VMhAv8%2FQGcE4l7d9bYv%2BFJYH3nVKXpUsVT04h%2BQh9rFj%2FE%2BByi2xfVHmaZG4XmFLJqHe%2BFtO6HReoNTeRJwU7lXUzuSkeeGg&X-Amz-Signature=b950cc5b11591639d1658223f99de1caa771431b05aa8ee931e88aa505bf4fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAY5XA7J%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGOMBaaxnM7Yttmjf8rnpKjbTwKtFKz%2BAJKOxgaL3TQrAiEA5Hi8geaNC%2BbztdGuWGWLYbV6zO72Cwd%2BD4HIO6zdfCYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHmiNw5%2FNAo4NONuHSrcAzH%2FNILuM3g6ksmrIIAvMtLCEz9sURxH27GDCWG5JPEh2XwEfdK4NBu2LzYHji%2F1GqH4IrSCdvFMQGQ6SixteG5hRYs2pmf0hFC3Jl4r%2FU8IgCUbwYh8q5SYQLrJRDwOtxIS5vbhionzUCOqfsblnl9TkVgaZSJ2lfqA1A1mQLjONMZzFtRDD8VhVZEsU7Lc4LjnUOomH%2BIOsLXEZD0o4NT4FMRWmabOxWEZsWnMPM9YFcZe3RvXHfl8ntitYgDL5wY3ozQFK07rkivxP8obY%2FFTzgztbHkonICQb8mfubCXi9XOwX7cCMRgBDn6%2F1xpSwGG%2BVEyrgyL8d3UAoX34vAVWENlfFixMGk%2FZph5lwMsZzqXDLIQJGZq8GctP%2Bf9vKTtMntYIVdv6Io2O9xmq4AcysFr7EeJItqTCA1BxF1Tbcgs1vYQ%2FB4kKO%2BtgCTCFzSMbo%2BDBHTLk2dFUWf%2BA5No3Az%2BHebINo%2BbU%2Fw1SoQRdzeOn0IS0UdrNuTFd1kqk3w5jRYvPgFNii9pfSDsryOq3cTzWJSuvBmdz7gFAsuwkhmPdXfO8lAo0arXMW5UzHZpbtF%2Fm%2F09dIyqoeKsNwxCiz2vjOzTos%2FpA0d8kX1hQo7eNWn7wiezcFY%2FMI6nu8IGOqUBnoFjeDjJ2FUDcddoBqznnPY9vGR1xGse9ttJVbj13zGank2pyGD1yC%2FVrqSRL2pK9%2F4ZPql5klWEzUS9GGlEVQhQTgWkRL1jFoE3KNyCR79mDQDWvAYHe%2F8Rlho2VMhAv8%2FQGcE4l7d9bYv%2BFJYH3nVKXpUsVT04h%2BQh9rFj%2FE%2BByi2xfVHmaZG4XmFLJqHe%2BFtO6HReoNTeRJwU7lXUzuSkeeGg&X-Amz-Signature=5366a3945e77867bccc887aa06799edfad21746e089cd1c1ad1272f0e3e44ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
