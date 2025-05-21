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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PAZIEK7%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIFmPA1fCBhFh%2BHZtME3iAg6t%2FLtpHqEJdX28TTbnROCuAiBAg6NBD6Kn1FUGNg5Rsc590GemFuSp7JxYzI8ySa6FQyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZSLAc71ZhhT5sK1zKtwD946mWNgNC1C8LDsZlNEy3EJiY54epyqSW%2FuDq%2BBSk%2FP9M4yUL9xTAnR%2FA8DVTMgH2djNBSq4LntF0FWHTu6p0Oj5xLZM5x%2FbPSIu1rCAG7zaBC4J7HNAozkLnf5nLGwCCZnAjaB6UK4OgGcpHHjaeCFQownF4UiNd5TwiS2fuFBQf84GpOeW46t6vknDlPYVxQt%2F6m94TRenRA56%2FSH8uEKhTXFb6KcIvz6tpsGFtsKHgRawiMwHE3w95jCn7dYHr4UchKsbgsoCx2vcYGbgmMInyeGYyHGSj6a%2FqX%2F2xgxWuA%2FMC4wNpIBgegID9K8Xlu8aLp9MODpLLkCxe7WWDgHwDJ9io5mLK1XZbGX95J3LHM6W3NJoM002PRYbZ2q5vdIm7lnDu9o52RCQLxmE2ohcjlXWOgCwVkLVUGQq%2BpnWBNrTkvLwTu0Us5%2FaUMjoxgrdBhr6NWID2m70GZI6YGdvGvI0RrtjQkuZbT2jitqjsejF3faclJlShJfbyMii2F0cz3dmRsqxfjq%2FtWTjHaEpeCrt%2BAe4ArVOqTIWYlmmV8IDxCP0LRK03eZpDTt8W8SrOWQSh5ubKEVWeI9Y62oTZ2xChPdXzIa%2FW8pQkwOuNWHilVtM1yvMdgAwwti4wQY6pgF5xBX5i1z%2Bnz3KjZUWg8FayceCpnTGNS5GXw1EXZKuoT4k4C9lipgQQbG%2BetXvVr8ERgkVVsJoDJxkCswtIWqMelB7w5G0qJgHAwcgatUUnlUlGwe11wVWIA0m680TWNWiqC6FyhqFj4QdnWf1EW4dZs3cFZW%2FgNEBktzPIZ680BwiOWnljLDDgSNyk0ivSIPypg5nMt8H9J9ELfRrO3trBftYW4Z%2F&X-Amz-Signature=6213dd1e114fe86aac880206214fc18656c41903404a09acf6d1c1468a12d628&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PAZIEK7%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIFmPA1fCBhFh%2BHZtME3iAg6t%2FLtpHqEJdX28TTbnROCuAiBAg6NBD6Kn1FUGNg5Rsc590GemFuSp7JxYzI8ySa6FQyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZSLAc71ZhhT5sK1zKtwD946mWNgNC1C8LDsZlNEy3EJiY54epyqSW%2FuDq%2BBSk%2FP9M4yUL9xTAnR%2FA8DVTMgH2djNBSq4LntF0FWHTu6p0Oj5xLZM5x%2FbPSIu1rCAG7zaBC4J7HNAozkLnf5nLGwCCZnAjaB6UK4OgGcpHHjaeCFQownF4UiNd5TwiS2fuFBQf84GpOeW46t6vknDlPYVxQt%2F6m94TRenRA56%2FSH8uEKhTXFb6KcIvz6tpsGFtsKHgRawiMwHE3w95jCn7dYHr4UchKsbgsoCx2vcYGbgmMInyeGYyHGSj6a%2FqX%2F2xgxWuA%2FMC4wNpIBgegID9K8Xlu8aLp9MODpLLkCxe7WWDgHwDJ9io5mLK1XZbGX95J3LHM6W3NJoM002PRYbZ2q5vdIm7lnDu9o52RCQLxmE2ohcjlXWOgCwVkLVUGQq%2BpnWBNrTkvLwTu0Us5%2FaUMjoxgrdBhr6NWID2m70GZI6YGdvGvI0RrtjQkuZbT2jitqjsejF3faclJlShJfbyMii2F0cz3dmRsqxfjq%2FtWTjHaEpeCrt%2BAe4ArVOqTIWYlmmV8IDxCP0LRK03eZpDTt8W8SrOWQSh5ubKEVWeI9Y62oTZ2xChPdXzIa%2FW8pQkwOuNWHilVtM1yvMdgAwwti4wQY6pgF5xBX5i1z%2Bnz3KjZUWg8FayceCpnTGNS5GXw1EXZKuoT4k4C9lipgQQbG%2BetXvVr8ERgkVVsJoDJxkCswtIWqMelB7w5G0qJgHAwcgatUUnlUlGwe11wVWIA0m680TWNWiqC6FyhqFj4QdnWf1EW4dZs3cFZW%2FgNEBktzPIZ680BwiOWnljLDDgSNyk0ivSIPypg5nMt8H9J9ELfRrO3trBftYW4Z%2F&X-Amz-Signature=6987fd8cf57c33850031855a1e97b1d0f9738567135af341a8afd4f97a268073&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PAZIEK7%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIFmPA1fCBhFh%2BHZtME3iAg6t%2FLtpHqEJdX28TTbnROCuAiBAg6NBD6Kn1FUGNg5Rsc590GemFuSp7JxYzI8ySa6FQyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZSLAc71ZhhT5sK1zKtwD946mWNgNC1C8LDsZlNEy3EJiY54epyqSW%2FuDq%2BBSk%2FP9M4yUL9xTAnR%2FA8DVTMgH2djNBSq4LntF0FWHTu6p0Oj5xLZM5x%2FbPSIu1rCAG7zaBC4J7HNAozkLnf5nLGwCCZnAjaB6UK4OgGcpHHjaeCFQownF4UiNd5TwiS2fuFBQf84GpOeW46t6vknDlPYVxQt%2F6m94TRenRA56%2FSH8uEKhTXFb6KcIvz6tpsGFtsKHgRawiMwHE3w95jCn7dYHr4UchKsbgsoCx2vcYGbgmMInyeGYyHGSj6a%2FqX%2F2xgxWuA%2FMC4wNpIBgegID9K8Xlu8aLp9MODpLLkCxe7WWDgHwDJ9io5mLK1XZbGX95J3LHM6W3NJoM002PRYbZ2q5vdIm7lnDu9o52RCQLxmE2ohcjlXWOgCwVkLVUGQq%2BpnWBNrTkvLwTu0Us5%2FaUMjoxgrdBhr6NWID2m70GZI6YGdvGvI0RrtjQkuZbT2jitqjsejF3faclJlShJfbyMii2F0cz3dmRsqxfjq%2FtWTjHaEpeCrt%2BAe4ArVOqTIWYlmmV8IDxCP0LRK03eZpDTt8W8SrOWQSh5ubKEVWeI9Y62oTZ2xChPdXzIa%2FW8pQkwOuNWHilVtM1yvMdgAwwti4wQY6pgF5xBX5i1z%2Bnz3KjZUWg8FayceCpnTGNS5GXw1EXZKuoT4k4C9lipgQQbG%2BetXvVr8ERgkVVsJoDJxkCswtIWqMelB7w5G0qJgHAwcgatUUnlUlGwe11wVWIA0m680TWNWiqC6FyhqFj4QdnWf1EW4dZs3cFZW%2FgNEBktzPIZ680BwiOWnljLDDgSNyk0ivSIPypg5nMt8H9J9ELfRrO3trBftYW4Z%2F&X-Amz-Signature=94e8afe635417a939c8d05e76ac2edfcefae4995e59310da80a910be71ab2e34&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PAZIEK7%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIFmPA1fCBhFh%2BHZtME3iAg6t%2FLtpHqEJdX28TTbnROCuAiBAg6NBD6Kn1FUGNg5Rsc590GemFuSp7JxYzI8ySa6FQyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZSLAc71ZhhT5sK1zKtwD946mWNgNC1C8LDsZlNEy3EJiY54epyqSW%2FuDq%2BBSk%2FP9M4yUL9xTAnR%2FA8DVTMgH2djNBSq4LntF0FWHTu6p0Oj5xLZM5x%2FbPSIu1rCAG7zaBC4J7HNAozkLnf5nLGwCCZnAjaB6UK4OgGcpHHjaeCFQownF4UiNd5TwiS2fuFBQf84GpOeW46t6vknDlPYVxQt%2F6m94TRenRA56%2FSH8uEKhTXFb6KcIvz6tpsGFtsKHgRawiMwHE3w95jCn7dYHr4UchKsbgsoCx2vcYGbgmMInyeGYyHGSj6a%2FqX%2F2xgxWuA%2FMC4wNpIBgegID9K8Xlu8aLp9MODpLLkCxe7WWDgHwDJ9io5mLK1XZbGX95J3LHM6W3NJoM002PRYbZ2q5vdIm7lnDu9o52RCQLxmE2ohcjlXWOgCwVkLVUGQq%2BpnWBNrTkvLwTu0Us5%2FaUMjoxgrdBhr6NWID2m70GZI6YGdvGvI0RrtjQkuZbT2jitqjsejF3faclJlShJfbyMii2F0cz3dmRsqxfjq%2FtWTjHaEpeCrt%2BAe4ArVOqTIWYlmmV8IDxCP0LRK03eZpDTt8W8SrOWQSh5ubKEVWeI9Y62oTZ2xChPdXzIa%2FW8pQkwOuNWHilVtM1yvMdgAwwti4wQY6pgF5xBX5i1z%2Bnz3KjZUWg8FayceCpnTGNS5GXw1EXZKuoT4k4C9lipgQQbG%2BetXvVr8ERgkVVsJoDJxkCswtIWqMelB7w5G0qJgHAwcgatUUnlUlGwe11wVWIA0m680TWNWiqC6FyhqFj4QdnWf1EW4dZs3cFZW%2FgNEBktzPIZ680BwiOWnljLDDgSNyk0ivSIPypg5nMt8H9J9ELfRrO3trBftYW4Z%2F&X-Amz-Signature=441e8679006ad674105e9a5b06c27dabd019140367276051f9d2315c5e1885ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PAZIEK7%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIFmPA1fCBhFh%2BHZtME3iAg6t%2FLtpHqEJdX28TTbnROCuAiBAg6NBD6Kn1FUGNg5Rsc590GemFuSp7JxYzI8ySa6FQyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZSLAc71ZhhT5sK1zKtwD946mWNgNC1C8LDsZlNEy3EJiY54epyqSW%2FuDq%2BBSk%2FP9M4yUL9xTAnR%2FA8DVTMgH2djNBSq4LntF0FWHTu6p0Oj5xLZM5x%2FbPSIu1rCAG7zaBC4J7HNAozkLnf5nLGwCCZnAjaB6UK4OgGcpHHjaeCFQownF4UiNd5TwiS2fuFBQf84GpOeW46t6vknDlPYVxQt%2F6m94TRenRA56%2FSH8uEKhTXFb6KcIvz6tpsGFtsKHgRawiMwHE3w95jCn7dYHr4UchKsbgsoCx2vcYGbgmMInyeGYyHGSj6a%2FqX%2F2xgxWuA%2FMC4wNpIBgegID9K8Xlu8aLp9MODpLLkCxe7WWDgHwDJ9io5mLK1XZbGX95J3LHM6W3NJoM002PRYbZ2q5vdIm7lnDu9o52RCQLxmE2ohcjlXWOgCwVkLVUGQq%2BpnWBNrTkvLwTu0Us5%2FaUMjoxgrdBhr6NWID2m70GZI6YGdvGvI0RrtjQkuZbT2jitqjsejF3faclJlShJfbyMii2F0cz3dmRsqxfjq%2FtWTjHaEpeCrt%2BAe4ArVOqTIWYlmmV8IDxCP0LRK03eZpDTt8W8SrOWQSh5ubKEVWeI9Y62oTZ2xChPdXzIa%2FW8pQkwOuNWHilVtM1yvMdgAwwti4wQY6pgF5xBX5i1z%2Bnz3KjZUWg8FayceCpnTGNS5GXw1EXZKuoT4k4C9lipgQQbG%2BetXvVr8ERgkVVsJoDJxkCswtIWqMelB7w5G0qJgHAwcgatUUnlUlGwe11wVWIA0m680TWNWiqC6FyhqFj4QdnWf1EW4dZs3cFZW%2FgNEBktzPIZ680BwiOWnljLDDgSNyk0ivSIPypg5nMt8H9J9ELfRrO3trBftYW4Z%2F&X-Amz-Signature=54548cafd5408fea7f153a298cbd506cbeabe99e6b50e2fca2f6246f1d27084e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
