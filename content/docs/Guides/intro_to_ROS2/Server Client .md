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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES5BBX4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHknxO1xGVAiCRS4GDkWKY9XqE7Bj7t10964Tlrw1Xp6AiEA2iFCDEmkOxasf1l5Red4KG8hQRhd1dOPc0eA8bK8kiMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuen5VYo9ut0VVzkircA%2BMnbvF5gm70l5rOD2qsuLhNvCPLQv4o74n8wpjYERQ%2B6f5BQjxo6yh6YJ8bdEejomXHaLY70Osvr9QbxWjbIxSpCjIBtXrZMUdIxZajAOTNEnsnaSbddkAYGvQsimcvLINuqQJaiLJBcldP7AJOKIObywu%2BzoAMhzZOBmZsHinL1HdI%2FjRHgZg7F3QsGg7L2DlfRuUB9gH48lFjBUx9ip1vPOrVa1tRtP2sH8V1fpu02a1kul%2FF3WqEYIYUgKxR%2BvudJhAUyNmT1fRgUm0WzbtA6zOksM6H4%2BhJwEJCAXV9fdlpf3RGA8PuFFN0KWLSeassLyXNwBS4LeBG6I1N4%2FSsekY9mrXuBerKLxAj2motZiqV8stUKKCarSIshdRXBrAexm1b8c25FwLnVnzL3ZqKlzpkk%2BrEKRyyoxK6ioxE0atd7Zq3KpsCi53SAWalsBHHXMDUzj6%2F9kCevDryIWsHSo6VoQNBzr38KK%2FdkFnICJqltP%2B5VAMSfUQc9ILV4fA%2FzZiDZXUlwhF%2FxVuB1Ktso5a5omsZW0coTOSBBaXrLE1kKXyBbuIdmUllgTnloSu0DN1bjgHBpgTpFLJ3q07hYb0vLSVVNRgxL7FNncqandT15heePLmWTSaYMIah7MMGOqUButp34tPL9Q1K%2FFpe12URF%2Fjx%2BnUr4cJMcn4KoRyBzKtTit3kIdTlkxEIO7avUlKE9Gzrq9V3R4aAJifoENQ0sCG%2BsByQd0ntzRib0r8fcIDxAWGK7yCkwQ%2B%2B8vCYEfZGXhqkQenBpwbZftG8BLAaF5to0R7kQ%2FpZol0uDDjUuJF8zaTSko8Kf2HZWLA0jX13siHs4A8jdaJr16K8SBFP8S7VQkUk&X-Amz-Signature=6cc196177e76b9163038a97a999f4c9422df5af263d358e7a397f253a0e95099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES5BBX4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHknxO1xGVAiCRS4GDkWKY9XqE7Bj7t10964Tlrw1Xp6AiEA2iFCDEmkOxasf1l5Red4KG8hQRhd1dOPc0eA8bK8kiMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuen5VYo9ut0VVzkircA%2BMnbvF5gm70l5rOD2qsuLhNvCPLQv4o74n8wpjYERQ%2B6f5BQjxo6yh6YJ8bdEejomXHaLY70Osvr9QbxWjbIxSpCjIBtXrZMUdIxZajAOTNEnsnaSbddkAYGvQsimcvLINuqQJaiLJBcldP7AJOKIObywu%2BzoAMhzZOBmZsHinL1HdI%2FjRHgZg7F3QsGg7L2DlfRuUB9gH48lFjBUx9ip1vPOrVa1tRtP2sH8V1fpu02a1kul%2FF3WqEYIYUgKxR%2BvudJhAUyNmT1fRgUm0WzbtA6zOksM6H4%2BhJwEJCAXV9fdlpf3RGA8PuFFN0KWLSeassLyXNwBS4LeBG6I1N4%2FSsekY9mrXuBerKLxAj2motZiqV8stUKKCarSIshdRXBrAexm1b8c25FwLnVnzL3ZqKlzpkk%2BrEKRyyoxK6ioxE0atd7Zq3KpsCi53SAWalsBHHXMDUzj6%2F9kCevDryIWsHSo6VoQNBzr38KK%2FdkFnICJqltP%2B5VAMSfUQc9ILV4fA%2FzZiDZXUlwhF%2FxVuB1Ktso5a5omsZW0coTOSBBaXrLE1kKXyBbuIdmUllgTnloSu0DN1bjgHBpgTpFLJ3q07hYb0vLSVVNRgxL7FNncqandT15heePLmWTSaYMIah7MMGOqUButp34tPL9Q1K%2FFpe12URF%2Fjx%2BnUr4cJMcn4KoRyBzKtTit3kIdTlkxEIO7avUlKE9Gzrq9V3R4aAJifoENQ0sCG%2BsByQd0ntzRib0r8fcIDxAWGK7yCkwQ%2B%2B8vCYEfZGXhqkQenBpwbZftG8BLAaF5to0R7kQ%2FpZol0uDDjUuJF8zaTSko8Kf2HZWLA0jX13siHs4A8jdaJr16K8SBFP8S7VQkUk&X-Amz-Signature=81510892fff02ec0b1953f4fcd64d44f374451fba50c1ab92d9988a7335534c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES5BBX4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHknxO1xGVAiCRS4GDkWKY9XqE7Bj7t10964Tlrw1Xp6AiEA2iFCDEmkOxasf1l5Red4KG8hQRhd1dOPc0eA8bK8kiMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuen5VYo9ut0VVzkircA%2BMnbvF5gm70l5rOD2qsuLhNvCPLQv4o74n8wpjYERQ%2B6f5BQjxo6yh6YJ8bdEejomXHaLY70Osvr9QbxWjbIxSpCjIBtXrZMUdIxZajAOTNEnsnaSbddkAYGvQsimcvLINuqQJaiLJBcldP7AJOKIObywu%2BzoAMhzZOBmZsHinL1HdI%2FjRHgZg7F3QsGg7L2DlfRuUB9gH48lFjBUx9ip1vPOrVa1tRtP2sH8V1fpu02a1kul%2FF3WqEYIYUgKxR%2BvudJhAUyNmT1fRgUm0WzbtA6zOksM6H4%2BhJwEJCAXV9fdlpf3RGA8PuFFN0KWLSeassLyXNwBS4LeBG6I1N4%2FSsekY9mrXuBerKLxAj2motZiqV8stUKKCarSIshdRXBrAexm1b8c25FwLnVnzL3ZqKlzpkk%2BrEKRyyoxK6ioxE0atd7Zq3KpsCi53SAWalsBHHXMDUzj6%2F9kCevDryIWsHSo6VoQNBzr38KK%2FdkFnICJqltP%2B5VAMSfUQc9ILV4fA%2FzZiDZXUlwhF%2FxVuB1Ktso5a5omsZW0coTOSBBaXrLE1kKXyBbuIdmUllgTnloSu0DN1bjgHBpgTpFLJ3q07hYb0vLSVVNRgxL7FNncqandT15heePLmWTSaYMIah7MMGOqUButp34tPL9Q1K%2FFpe12URF%2Fjx%2BnUr4cJMcn4KoRyBzKtTit3kIdTlkxEIO7avUlKE9Gzrq9V3R4aAJifoENQ0sCG%2BsByQd0ntzRib0r8fcIDxAWGK7yCkwQ%2B%2B8vCYEfZGXhqkQenBpwbZftG8BLAaF5to0R7kQ%2FpZol0uDDjUuJF8zaTSko8Kf2HZWLA0jX13siHs4A8jdaJr16K8SBFP8S7VQkUk&X-Amz-Signature=81cf68d675d385ad1d856633753ade14bd2ab3e1ca8af5d97d510aca6842e916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES5BBX4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHknxO1xGVAiCRS4GDkWKY9XqE7Bj7t10964Tlrw1Xp6AiEA2iFCDEmkOxasf1l5Red4KG8hQRhd1dOPc0eA8bK8kiMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuen5VYo9ut0VVzkircA%2BMnbvF5gm70l5rOD2qsuLhNvCPLQv4o74n8wpjYERQ%2B6f5BQjxo6yh6YJ8bdEejomXHaLY70Osvr9QbxWjbIxSpCjIBtXrZMUdIxZajAOTNEnsnaSbddkAYGvQsimcvLINuqQJaiLJBcldP7AJOKIObywu%2BzoAMhzZOBmZsHinL1HdI%2FjRHgZg7F3QsGg7L2DlfRuUB9gH48lFjBUx9ip1vPOrVa1tRtP2sH8V1fpu02a1kul%2FF3WqEYIYUgKxR%2BvudJhAUyNmT1fRgUm0WzbtA6zOksM6H4%2BhJwEJCAXV9fdlpf3RGA8PuFFN0KWLSeassLyXNwBS4LeBG6I1N4%2FSsekY9mrXuBerKLxAj2motZiqV8stUKKCarSIshdRXBrAexm1b8c25FwLnVnzL3ZqKlzpkk%2BrEKRyyoxK6ioxE0atd7Zq3KpsCi53SAWalsBHHXMDUzj6%2F9kCevDryIWsHSo6VoQNBzr38KK%2FdkFnICJqltP%2B5VAMSfUQc9ILV4fA%2FzZiDZXUlwhF%2FxVuB1Ktso5a5omsZW0coTOSBBaXrLE1kKXyBbuIdmUllgTnloSu0DN1bjgHBpgTpFLJ3q07hYb0vLSVVNRgxL7FNncqandT15heePLmWTSaYMIah7MMGOqUButp34tPL9Q1K%2FFpe12URF%2Fjx%2BnUr4cJMcn4KoRyBzKtTit3kIdTlkxEIO7avUlKE9Gzrq9V3R4aAJifoENQ0sCG%2BsByQd0ntzRib0r8fcIDxAWGK7yCkwQ%2B%2B8vCYEfZGXhqkQenBpwbZftG8BLAaF5to0R7kQ%2FpZol0uDDjUuJF8zaTSko8Kf2HZWLA0jX13siHs4A8jdaJr16K8SBFP8S7VQkUk&X-Amz-Signature=053df6aefe5cdf33bd3e8618278c5103e95caaf132d5aa9760d5b7cff10bf1fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES5BBX4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHknxO1xGVAiCRS4GDkWKY9XqE7Bj7t10964Tlrw1Xp6AiEA2iFCDEmkOxasf1l5Red4KG8hQRhd1dOPc0eA8bK8kiMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuen5VYo9ut0VVzkircA%2BMnbvF5gm70l5rOD2qsuLhNvCPLQv4o74n8wpjYERQ%2B6f5BQjxo6yh6YJ8bdEejomXHaLY70Osvr9QbxWjbIxSpCjIBtXrZMUdIxZajAOTNEnsnaSbddkAYGvQsimcvLINuqQJaiLJBcldP7AJOKIObywu%2BzoAMhzZOBmZsHinL1HdI%2FjRHgZg7F3QsGg7L2DlfRuUB9gH48lFjBUx9ip1vPOrVa1tRtP2sH8V1fpu02a1kul%2FF3WqEYIYUgKxR%2BvudJhAUyNmT1fRgUm0WzbtA6zOksM6H4%2BhJwEJCAXV9fdlpf3RGA8PuFFN0KWLSeassLyXNwBS4LeBG6I1N4%2FSsekY9mrXuBerKLxAj2motZiqV8stUKKCarSIshdRXBrAexm1b8c25FwLnVnzL3ZqKlzpkk%2BrEKRyyoxK6ioxE0atd7Zq3KpsCi53SAWalsBHHXMDUzj6%2F9kCevDryIWsHSo6VoQNBzr38KK%2FdkFnICJqltP%2B5VAMSfUQc9ILV4fA%2FzZiDZXUlwhF%2FxVuB1Ktso5a5omsZW0coTOSBBaXrLE1kKXyBbuIdmUllgTnloSu0DN1bjgHBpgTpFLJ3q07hYb0vLSVVNRgxL7FNncqandT15heePLmWTSaYMIah7MMGOqUButp34tPL9Q1K%2FFpe12URF%2Fjx%2BnUr4cJMcn4KoRyBzKtTit3kIdTlkxEIO7avUlKE9Gzrq9V3R4aAJifoENQ0sCG%2BsByQd0ntzRib0r8fcIDxAWGK7yCkwQ%2B%2B8vCYEfZGXhqkQenBpwbZftG8BLAaF5to0R7kQ%2FpZol0uDDjUuJF8zaTSko8Kf2HZWLA0jX13siHs4A8jdaJr16K8SBFP8S7VQkUk&X-Amz-Signature=768c1ec11262a8f70549a752e2b2761a06b08d792f1dd2d27276af8b5a8c75aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
