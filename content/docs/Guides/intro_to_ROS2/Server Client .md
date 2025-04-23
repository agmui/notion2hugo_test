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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINYPZPA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDHnOnzbyjOQskbTvnf3WGOSDpVVwpWvF0uzNmha%2BjIVQIhAJDyUP%2B%2BZmYPFgglC2xV4MdqwMF%2FBhFRMmggVN9FxOJgKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgeNhHmHlcdogvGMgq3APIZOgi67oN%2Fz%2B%2FeDIEihIS6euXpTsTn1p1NwIsM%2FtPWDcO5XaqNGBhZiWJpwk1JvRFERmcTS7wzROcuyYiwpBZitHHc3%2F9fP%2FtO%2FKe0Qu25uBW30d8craHNfhUwP%2BeC%2F%2BADJx4h2qKjQKqw4B6bLm3WGAOF9EG7M%2BQFjFZrnUANDfL5%2BwBtdQO9obnLgcdyCyGIHquxyNOQ77XZkM3rbOYcEKmzNMFprGlW%2BYNan%2F1%2FGGDClzNxO37RtG0jWDhee8TJR%2FUwaFKhameE%2FMRFFe2Mt%2FAjRtm%2BwxDjD5ERgg4usiE97tbT0eiigGb0DtyymTOrzETJaXx613ea7hyO3rWmXcLrBUB3MTZmSH9F1X%2FQGlTapwjPacmtl8O4XLlhl%2BEnhUE9XLYf8ctArYGxtah44Ys0TgmCf6GWyJqIpTLxzQMcKA6%2FsBnKjyth8qGBG5duzrHmrZ0D6It6AThhYqEsTjQZJZNDN0T8a4rHLSIdNBtpdJFZgrGfWbp6fHFyyqskGmsV%2BnKR2908DussCAEpNrLUMmLPp7%2BZtHttOwoJTCeeaTSOIRbVmZf35UmZPDiAMuIILYbEtjGH5pDT0FQ98EcVfwPJ1K%2FPKh5yp24EeIKvtfC2oL8%2BqSU4TD%2F1qTABjqkAV8ePmEVD4fCaDOVguybw1fvkUK6JeliaUhsFNBKaC07kLSDsEZ9N%2FtQ0OXGpt2E10ePbJdQEsFyFaHJWwTeKhDBrEG9NDx%2Bb9BPYTtE3%2BfPJxR8vAlUBS%2FNn7PCD8EwKKXqj19Djc9VJNLWDkdLhtKnoV1huTxdSE2MqzCRP148EAxdl4JL4D4f4B%2BPW4SJ2fY5CEH9nIucgvWyI69CVRsTM3%2FI&X-Amz-Signature=e3658f4960d7b386a8c058c981d4d0bdeaa725a9b948907b964571d65ccbaa52&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINYPZPA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDHnOnzbyjOQskbTvnf3WGOSDpVVwpWvF0uzNmha%2BjIVQIhAJDyUP%2B%2BZmYPFgglC2xV4MdqwMF%2FBhFRMmggVN9FxOJgKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgeNhHmHlcdogvGMgq3APIZOgi67oN%2Fz%2B%2FeDIEihIS6euXpTsTn1p1NwIsM%2FtPWDcO5XaqNGBhZiWJpwk1JvRFERmcTS7wzROcuyYiwpBZitHHc3%2F9fP%2FtO%2FKe0Qu25uBW30d8craHNfhUwP%2BeC%2F%2BADJx4h2qKjQKqw4B6bLm3WGAOF9EG7M%2BQFjFZrnUANDfL5%2BwBtdQO9obnLgcdyCyGIHquxyNOQ77XZkM3rbOYcEKmzNMFprGlW%2BYNan%2F1%2FGGDClzNxO37RtG0jWDhee8TJR%2FUwaFKhameE%2FMRFFe2Mt%2FAjRtm%2BwxDjD5ERgg4usiE97tbT0eiigGb0DtyymTOrzETJaXx613ea7hyO3rWmXcLrBUB3MTZmSH9F1X%2FQGlTapwjPacmtl8O4XLlhl%2BEnhUE9XLYf8ctArYGxtah44Ys0TgmCf6GWyJqIpTLxzQMcKA6%2FsBnKjyth8qGBG5duzrHmrZ0D6It6AThhYqEsTjQZJZNDN0T8a4rHLSIdNBtpdJFZgrGfWbp6fHFyyqskGmsV%2BnKR2908DussCAEpNrLUMmLPp7%2BZtHttOwoJTCeeaTSOIRbVmZf35UmZPDiAMuIILYbEtjGH5pDT0FQ98EcVfwPJ1K%2FPKh5yp24EeIKvtfC2oL8%2BqSU4TD%2F1qTABjqkAV8ePmEVD4fCaDOVguybw1fvkUK6JeliaUhsFNBKaC07kLSDsEZ9N%2FtQ0OXGpt2E10ePbJdQEsFyFaHJWwTeKhDBrEG9NDx%2Bb9BPYTtE3%2BfPJxR8vAlUBS%2FNn7PCD8EwKKXqj19Djc9VJNLWDkdLhtKnoV1huTxdSE2MqzCRP148EAxdl4JL4D4f4B%2BPW4SJ2fY5CEH9nIucgvWyI69CVRsTM3%2FI&X-Amz-Signature=3339a71637642aaccf286014fc1205661edc3c3d898b988c90ee9f3b4214a689&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINYPZPA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDHnOnzbyjOQskbTvnf3WGOSDpVVwpWvF0uzNmha%2BjIVQIhAJDyUP%2B%2BZmYPFgglC2xV4MdqwMF%2FBhFRMmggVN9FxOJgKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgeNhHmHlcdogvGMgq3APIZOgi67oN%2Fz%2B%2FeDIEihIS6euXpTsTn1p1NwIsM%2FtPWDcO5XaqNGBhZiWJpwk1JvRFERmcTS7wzROcuyYiwpBZitHHc3%2F9fP%2FtO%2FKe0Qu25uBW30d8craHNfhUwP%2BeC%2F%2BADJx4h2qKjQKqw4B6bLm3WGAOF9EG7M%2BQFjFZrnUANDfL5%2BwBtdQO9obnLgcdyCyGIHquxyNOQ77XZkM3rbOYcEKmzNMFprGlW%2BYNan%2F1%2FGGDClzNxO37RtG0jWDhee8TJR%2FUwaFKhameE%2FMRFFe2Mt%2FAjRtm%2BwxDjD5ERgg4usiE97tbT0eiigGb0DtyymTOrzETJaXx613ea7hyO3rWmXcLrBUB3MTZmSH9F1X%2FQGlTapwjPacmtl8O4XLlhl%2BEnhUE9XLYf8ctArYGxtah44Ys0TgmCf6GWyJqIpTLxzQMcKA6%2FsBnKjyth8qGBG5duzrHmrZ0D6It6AThhYqEsTjQZJZNDN0T8a4rHLSIdNBtpdJFZgrGfWbp6fHFyyqskGmsV%2BnKR2908DussCAEpNrLUMmLPp7%2BZtHttOwoJTCeeaTSOIRbVmZf35UmZPDiAMuIILYbEtjGH5pDT0FQ98EcVfwPJ1K%2FPKh5yp24EeIKvtfC2oL8%2BqSU4TD%2F1qTABjqkAV8ePmEVD4fCaDOVguybw1fvkUK6JeliaUhsFNBKaC07kLSDsEZ9N%2FtQ0OXGpt2E10ePbJdQEsFyFaHJWwTeKhDBrEG9NDx%2Bb9BPYTtE3%2BfPJxR8vAlUBS%2FNn7PCD8EwKKXqj19Djc9VJNLWDkdLhtKnoV1huTxdSE2MqzCRP148EAxdl4JL4D4f4B%2BPW4SJ2fY5CEH9nIucgvWyI69CVRsTM3%2FI&X-Amz-Signature=a99592faec747ff3406283f91b83ddf6218a1fbe6b97e31f9326591225885b3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINYPZPA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDHnOnzbyjOQskbTvnf3WGOSDpVVwpWvF0uzNmha%2BjIVQIhAJDyUP%2B%2BZmYPFgglC2xV4MdqwMF%2FBhFRMmggVN9FxOJgKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgeNhHmHlcdogvGMgq3APIZOgi67oN%2Fz%2B%2FeDIEihIS6euXpTsTn1p1NwIsM%2FtPWDcO5XaqNGBhZiWJpwk1JvRFERmcTS7wzROcuyYiwpBZitHHc3%2F9fP%2FtO%2FKe0Qu25uBW30d8craHNfhUwP%2BeC%2F%2BADJx4h2qKjQKqw4B6bLm3WGAOF9EG7M%2BQFjFZrnUANDfL5%2BwBtdQO9obnLgcdyCyGIHquxyNOQ77XZkM3rbOYcEKmzNMFprGlW%2BYNan%2F1%2FGGDClzNxO37RtG0jWDhee8TJR%2FUwaFKhameE%2FMRFFe2Mt%2FAjRtm%2BwxDjD5ERgg4usiE97tbT0eiigGb0DtyymTOrzETJaXx613ea7hyO3rWmXcLrBUB3MTZmSH9F1X%2FQGlTapwjPacmtl8O4XLlhl%2BEnhUE9XLYf8ctArYGxtah44Ys0TgmCf6GWyJqIpTLxzQMcKA6%2FsBnKjyth8qGBG5duzrHmrZ0D6It6AThhYqEsTjQZJZNDN0T8a4rHLSIdNBtpdJFZgrGfWbp6fHFyyqskGmsV%2BnKR2908DussCAEpNrLUMmLPp7%2BZtHttOwoJTCeeaTSOIRbVmZf35UmZPDiAMuIILYbEtjGH5pDT0FQ98EcVfwPJ1K%2FPKh5yp24EeIKvtfC2oL8%2BqSU4TD%2F1qTABjqkAV8ePmEVD4fCaDOVguybw1fvkUK6JeliaUhsFNBKaC07kLSDsEZ9N%2FtQ0OXGpt2E10ePbJdQEsFyFaHJWwTeKhDBrEG9NDx%2Bb9BPYTtE3%2BfPJxR8vAlUBS%2FNn7PCD8EwKKXqj19Djc9VJNLWDkdLhtKnoV1huTxdSE2MqzCRP148EAxdl4JL4D4f4B%2BPW4SJ2fY5CEH9nIucgvWyI69CVRsTM3%2FI&X-Amz-Signature=61c5b0738f84afcbd1951017143ef1ef0ce76556334cffa0ec3d89ae139f9af1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINYPZPA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDHnOnzbyjOQskbTvnf3WGOSDpVVwpWvF0uzNmha%2BjIVQIhAJDyUP%2B%2BZmYPFgglC2xV4MdqwMF%2FBhFRMmggVN9FxOJgKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgeNhHmHlcdogvGMgq3APIZOgi67oN%2Fz%2B%2FeDIEihIS6euXpTsTn1p1NwIsM%2FtPWDcO5XaqNGBhZiWJpwk1JvRFERmcTS7wzROcuyYiwpBZitHHc3%2F9fP%2FtO%2FKe0Qu25uBW30d8craHNfhUwP%2BeC%2F%2BADJx4h2qKjQKqw4B6bLm3WGAOF9EG7M%2BQFjFZrnUANDfL5%2BwBtdQO9obnLgcdyCyGIHquxyNOQ77XZkM3rbOYcEKmzNMFprGlW%2BYNan%2F1%2FGGDClzNxO37RtG0jWDhee8TJR%2FUwaFKhameE%2FMRFFe2Mt%2FAjRtm%2BwxDjD5ERgg4usiE97tbT0eiigGb0DtyymTOrzETJaXx613ea7hyO3rWmXcLrBUB3MTZmSH9F1X%2FQGlTapwjPacmtl8O4XLlhl%2BEnhUE9XLYf8ctArYGxtah44Ys0TgmCf6GWyJqIpTLxzQMcKA6%2FsBnKjyth8qGBG5duzrHmrZ0D6It6AThhYqEsTjQZJZNDN0T8a4rHLSIdNBtpdJFZgrGfWbp6fHFyyqskGmsV%2BnKR2908DussCAEpNrLUMmLPp7%2BZtHttOwoJTCeeaTSOIRbVmZf35UmZPDiAMuIILYbEtjGH5pDT0FQ98EcVfwPJ1K%2FPKh5yp24EeIKvtfC2oL8%2BqSU4TD%2F1qTABjqkAV8ePmEVD4fCaDOVguybw1fvkUK6JeliaUhsFNBKaC07kLSDsEZ9N%2FtQ0OXGpt2E10ePbJdQEsFyFaHJWwTeKhDBrEG9NDx%2Bb9BPYTtE3%2BfPJxR8vAlUBS%2FNn7PCD8EwKKXqj19Djc9VJNLWDkdLhtKnoV1huTxdSE2MqzCRP148EAxdl4JL4D4f4B%2BPW4SJ2fY5CEH9nIucgvWyI69CVRsTM3%2FI&X-Amz-Signature=c0d63334d35fd8d876d7a4778382c8f9eeb56bc0d724f8007b151d896f7e9d45&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
