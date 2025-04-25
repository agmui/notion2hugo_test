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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICGBAHO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSok1Pih3aN01byOac4aWAzTnw4MyJFeoV9QpUTZhQGAiEAq0niKC0dn21EP4bcKSPGifpbhyjBCYJDKB6Ra0ANfI4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGO5Tqo%2Ftxj3%2FbbuYyrcA2CS0j9ugqlmrydQ7Riq9XKx44Ui%2FldJcNkKRhWGXUgSvwLU1KFTEYant99EYeMkhJFWE8R5k7Kzeu56%2BDGlxGQXfYptziYkSh7o7LQj6s6AUPOF481cMBGEkiRYXwXcT3sB%2BcGEGWavTEXP2QHEXzpeCnyXpd7anDKcWT2g7I1jixDKYyyMTRVYcG1DFhmsLKFBlRLDZJDCmLrBzbbWOgLdlTS4%2FMk%2FzrAy2f8xZEb9N9Irocmkk%2F4pttRWqZxrOXlNT5saB843vPc2eWdLt8LPj6%2FyCWvgMW7Nwl7zinvfjYSShNLkKuBU4onBik92RzG4vAllrLs5KNoz0%2F4MgPoiw3tO33g7Cfb6FJ1CZ%2BJFekJXvwrI3X93FKxlw8U%2BQJfM4gu6RelAo3kKfVygNORqDDZJLWYJs%2FsjcOzNJPchMzI8QGZ6Ze9%2BcE1uetutU1KaelYGpHP1IQA4lOo7utZbhgR8neNsJzUlqWcGxZjmYtdW3VXV8JP7CLg3YMO%2FBuhOodcmEPWaknt7wbWxYSkriUkWkCQ7U0c%2F0Y85Mc5ALd9VKMhZn7ynJXVoVzS299GJTdG14B0VbdHNt%2BxZVnzo4mhGEeti7rARfYH%2Fz0XkAPJX0CrJ0DefTkdEMOCcrcAGOqUBtt%2F0WMHqQ7qGfwBuaZadhdLdx3OnqsVMY6TwIZZKMFMDFtcOpEiTO5Ls4uq7uJa5V01%2BCCfkwOp131mHM7J6W3Oi5kPsM%2B%2BoKFZLXa99mWopI8AcLGayCMBaMAnFEVh%2BoEtmUUsp8wVbOg1AzfbbQSXwsJCr7lwg3XlzYKIgJXMBpwvxE%2BTubOhdxziJF3pFfE%2B4g%2FkAUwymb6rCl6FYQnKFBhvb&X-Amz-Signature=30809195139c9e29fc727727eab940879c0f1ff366cdbd1a5c3061b3f453707b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICGBAHO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSok1Pih3aN01byOac4aWAzTnw4MyJFeoV9QpUTZhQGAiEAq0niKC0dn21EP4bcKSPGifpbhyjBCYJDKB6Ra0ANfI4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGO5Tqo%2Ftxj3%2FbbuYyrcA2CS0j9ugqlmrydQ7Riq9XKx44Ui%2FldJcNkKRhWGXUgSvwLU1KFTEYant99EYeMkhJFWE8R5k7Kzeu56%2BDGlxGQXfYptziYkSh7o7LQj6s6AUPOF481cMBGEkiRYXwXcT3sB%2BcGEGWavTEXP2QHEXzpeCnyXpd7anDKcWT2g7I1jixDKYyyMTRVYcG1DFhmsLKFBlRLDZJDCmLrBzbbWOgLdlTS4%2FMk%2FzrAy2f8xZEb9N9Irocmkk%2F4pttRWqZxrOXlNT5saB843vPc2eWdLt8LPj6%2FyCWvgMW7Nwl7zinvfjYSShNLkKuBU4onBik92RzG4vAllrLs5KNoz0%2F4MgPoiw3tO33g7Cfb6FJ1CZ%2BJFekJXvwrI3X93FKxlw8U%2BQJfM4gu6RelAo3kKfVygNORqDDZJLWYJs%2FsjcOzNJPchMzI8QGZ6Ze9%2BcE1uetutU1KaelYGpHP1IQA4lOo7utZbhgR8neNsJzUlqWcGxZjmYtdW3VXV8JP7CLg3YMO%2FBuhOodcmEPWaknt7wbWxYSkriUkWkCQ7U0c%2F0Y85Mc5ALd9VKMhZn7ynJXVoVzS299GJTdG14B0VbdHNt%2BxZVnzo4mhGEeti7rARfYH%2Fz0XkAPJX0CrJ0DefTkdEMOCcrcAGOqUBtt%2F0WMHqQ7qGfwBuaZadhdLdx3OnqsVMY6TwIZZKMFMDFtcOpEiTO5Ls4uq7uJa5V01%2BCCfkwOp131mHM7J6W3Oi5kPsM%2B%2BoKFZLXa99mWopI8AcLGayCMBaMAnFEVh%2BoEtmUUsp8wVbOg1AzfbbQSXwsJCr7lwg3XlzYKIgJXMBpwvxE%2BTubOhdxziJF3pFfE%2B4g%2FkAUwymb6rCl6FYQnKFBhvb&X-Amz-Signature=9ae14062d1bae779d1b6dff5f37c84d96c5d011d928e64c8f8f65c2edcdc4065&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICGBAHO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSok1Pih3aN01byOac4aWAzTnw4MyJFeoV9QpUTZhQGAiEAq0niKC0dn21EP4bcKSPGifpbhyjBCYJDKB6Ra0ANfI4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGO5Tqo%2Ftxj3%2FbbuYyrcA2CS0j9ugqlmrydQ7Riq9XKx44Ui%2FldJcNkKRhWGXUgSvwLU1KFTEYant99EYeMkhJFWE8R5k7Kzeu56%2BDGlxGQXfYptziYkSh7o7LQj6s6AUPOF481cMBGEkiRYXwXcT3sB%2BcGEGWavTEXP2QHEXzpeCnyXpd7anDKcWT2g7I1jixDKYyyMTRVYcG1DFhmsLKFBlRLDZJDCmLrBzbbWOgLdlTS4%2FMk%2FzrAy2f8xZEb9N9Irocmkk%2F4pttRWqZxrOXlNT5saB843vPc2eWdLt8LPj6%2FyCWvgMW7Nwl7zinvfjYSShNLkKuBU4onBik92RzG4vAllrLs5KNoz0%2F4MgPoiw3tO33g7Cfb6FJ1CZ%2BJFekJXvwrI3X93FKxlw8U%2BQJfM4gu6RelAo3kKfVygNORqDDZJLWYJs%2FsjcOzNJPchMzI8QGZ6Ze9%2BcE1uetutU1KaelYGpHP1IQA4lOo7utZbhgR8neNsJzUlqWcGxZjmYtdW3VXV8JP7CLg3YMO%2FBuhOodcmEPWaknt7wbWxYSkriUkWkCQ7U0c%2F0Y85Mc5ALd9VKMhZn7ynJXVoVzS299GJTdG14B0VbdHNt%2BxZVnzo4mhGEeti7rARfYH%2Fz0XkAPJX0CrJ0DefTkdEMOCcrcAGOqUBtt%2F0WMHqQ7qGfwBuaZadhdLdx3OnqsVMY6TwIZZKMFMDFtcOpEiTO5Ls4uq7uJa5V01%2BCCfkwOp131mHM7J6W3Oi5kPsM%2B%2BoKFZLXa99mWopI8AcLGayCMBaMAnFEVh%2BoEtmUUsp8wVbOg1AzfbbQSXwsJCr7lwg3XlzYKIgJXMBpwvxE%2BTubOhdxziJF3pFfE%2B4g%2FkAUwymb6rCl6FYQnKFBhvb&X-Amz-Signature=701747c7d222bb1dc4bcc7df4534e1938a71252f096105549b33db6f51ba256e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICGBAHO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSok1Pih3aN01byOac4aWAzTnw4MyJFeoV9QpUTZhQGAiEAq0niKC0dn21EP4bcKSPGifpbhyjBCYJDKB6Ra0ANfI4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGO5Tqo%2Ftxj3%2FbbuYyrcA2CS0j9ugqlmrydQ7Riq9XKx44Ui%2FldJcNkKRhWGXUgSvwLU1KFTEYant99EYeMkhJFWE8R5k7Kzeu56%2BDGlxGQXfYptziYkSh7o7LQj6s6AUPOF481cMBGEkiRYXwXcT3sB%2BcGEGWavTEXP2QHEXzpeCnyXpd7anDKcWT2g7I1jixDKYyyMTRVYcG1DFhmsLKFBlRLDZJDCmLrBzbbWOgLdlTS4%2FMk%2FzrAy2f8xZEb9N9Irocmkk%2F4pttRWqZxrOXlNT5saB843vPc2eWdLt8LPj6%2FyCWvgMW7Nwl7zinvfjYSShNLkKuBU4onBik92RzG4vAllrLs5KNoz0%2F4MgPoiw3tO33g7Cfb6FJ1CZ%2BJFekJXvwrI3X93FKxlw8U%2BQJfM4gu6RelAo3kKfVygNORqDDZJLWYJs%2FsjcOzNJPchMzI8QGZ6Ze9%2BcE1uetutU1KaelYGpHP1IQA4lOo7utZbhgR8neNsJzUlqWcGxZjmYtdW3VXV8JP7CLg3YMO%2FBuhOodcmEPWaknt7wbWxYSkriUkWkCQ7U0c%2F0Y85Mc5ALd9VKMhZn7ynJXVoVzS299GJTdG14B0VbdHNt%2BxZVnzo4mhGEeti7rARfYH%2Fz0XkAPJX0CrJ0DefTkdEMOCcrcAGOqUBtt%2F0WMHqQ7qGfwBuaZadhdLdx3OnqsVMY6TwIZZKMFMDFtcOpEiTO5Ls4uq7uJa5V01%2BCCfkwOp131mHM7J6W3Oi5kPsM%2B%2BoKFZLXa99mWopI8AcLGayCMBaMAnFEVh%2BoEtmUUsp8wVbOg1AzfbbQSXwsJCr7lwg3XlzYKIgJXMBpwvxE%2BTubOhdxziJF3pFfE%2B4g%2FkAUwymb6rCl6FYQnKFBhvb&X-Amz-Signature=f5dbcb62763b50cd75cb8386fb1ed3e97f44875d6634485b813d37780059b293&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICGBAHO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSok1Pih3aN01byOac4aWAzTnw4MyJFeoV9QpUTZhQGAiEAq0niKC0dn21EP4bcKSPGifpbhyjBCYJDKB6Ra0ANfI4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGO5Tqo%2Ftxj3%2FbbuYyrcA2CS0j9ugqlmrydQ7Riq9XKx44Ui%2FldJcNkKRhWGXUgSvwLU1KFTEYant99EYeMkhJFWE8R5k7Kzeu56%2BDGlxGQXfYptziYkSh7o7LQj6s6AUPOF481cMBGEkiRYXwXcT3sB%2BcGEGWavTEXP2QHEXzpeCnyXpd7anDKcWT2g7I1jixDKYyyMTRVYcG1DFhmsLKFBlRLDZJDCmLrBzbbWOgLdlTS4%2FMk%2FzrAy2f8xZEb9N9Irocmkk%2F4pttRWqZxrOXlNT5saB843vPc2eWdLt8LPj6%2FyCWvgMW7Nwl7zinvfjYSShNLkKuBU4onBik92RzG4vAllrLs5KNoz0%2F4MgPoiw3tO33g7Cfb6FJ1CZ%2BJFekJXvwrI3X93FKxlw8U%2BQJfM4gu6RelAo3kKfVygNORqDDZJLWYJs%2FsjcOzNJPchMzI8QGZ6Ze9%2BcE1uetutU1KaelYGpHP1IQA4lOo7utZbhgR8neNsJzUlqWcGxZjmYtdW3VXV8JP7CLg3YMO%2FBuhOodcmEPWaknt7wbWxYSkriUkWkCQ7U0c%2F0Y85Mc5ALd9VKMhZn7ynJXVoVzS299GJTdG14B0VbdHNt%2BxZVnzo4mhGEeti7rARfYH%2Fz0XkAPJX0CrJ0DefTkdEMOCcrcAGOqUBtt%2F0WMHqQ7qGfwBuaZadhdLdx3OnqsVMY6TwIZZKMFMDFtcOpEiTO5Ls4uq7uJa5V01%2BCCfkwOp131mHM7J6W3Oi5kPsM%2B%2BoKFZLXa99mWopI8AcLGayCMBaMAnFEVh%2BoEtmUUsp8wVbOg1AzfbbQSXwsJCr7lwg3XlzYKIgJXMBpwvxE%2BTubOhdxziJF3pFfE%2B4g%2FkAUwymb6rCl6FYQnKFBhvb&X-Amz-Signature=f4d7233f8125ff6019ab8595d321883eb9497e3d9455440f4a609debc824631f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
