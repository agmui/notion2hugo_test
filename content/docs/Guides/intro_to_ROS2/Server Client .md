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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH244QD3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo1k1ILAk0chi5Ae4Do8ND7h1fvAB8hhcN2mH9FcRcHAiEA1tNINg5DMMuUPvVRLZ8e4UX%2BcyFx2dLmOTIXcqnrY%2Fgq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCXq8owFL4Aig4nsKSrcAxo%2FD9d9cTlkOIN6gZShyyi7AJx%2F%2BMP25GmLmV9cg928WtrQhAIzAb%2FD9FJyN%2BHhUA%2B3v2n7KnTi%2BfZCLDRjB3ozJghxklt3hv7ia1DF7AJrDabBV%2BZMmnV6YPRxEO98Uy%2Bvqh2l%2Fg0p9jamIxi3pbiNECsp3g8W3c7qKApQ4%2FnDL8oGBVWPf2Oh7LXssCZxIMBpVdSqveFIUtPYQAcnNzd08jkovgXgcut0s5tQtpGK1UslucY6j4HjsuTjevuWNOBWXtnheH97ApgLgKwJgRlJo8tEsp9WWK2MM8XsPSt%2FWF262iluY7WVbwH3vIgrDXxwH%2Fk%2F4aT5UxCxsLuzhV8vEDziFEe0zRSjcBYFeIo%2B4SODQrXxnGZD3ahg0xj%2F8%2BsetZJSYaGL1E36jjhiLt6Tt5tE5ZRLfwyGRjjwSz7JIeymJTeqAVLluxON2aP032XiV%2B66l9tP9F6wx9A4y4Khqev05ouJr5M7V1aCSVpNPj2bK0lnkmGoarVjXcBwf9RCcN4%2B%2FrwnvBna4QBRMYh4SDjQYwtyYDAFzhHotMJ9zBnVPRJGR7lvH5gSh%2B6ukM3%2FWSWWqS6BrMMpJKpHavG5dfe9ri97yhoFY%2BqyxjjEc8IP9IzAFvH%2F3SLYMOnsw8IGOqUB9YnhPBeDwSzOvTV02z8zawfDOZLO0keNxl9l0n7ZXmgmpJECFiF0a4i%2FEtqqXAShCXXtheidemNC9Yr0TS344ei4QBk1n5jDdv0fzBJsdmn1kBvuTb4cAzlsqT05Vr260jv009DfF1tVKFKXi7OOUlu0VXgJqyIQgSwpGaZ0KF%2F7gvD3kFzXc7OdTGJC6KDJ4PfgQKKoQWZRgtzmuh55y9f16E4t&X-Amz-Signature=510e6199267f889cb06a4bf61057f3263149308ca6360bfb448d78310c287bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH244QD3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo1k1ILAk0chi5Ae4Do8ND7h1fvAB8hhcN2mH9FcRcHAiEA1tNINg5DMMuUPvVRLZ8e4UX%2BcyFx2dLmOTIXcqnrY%2Fgq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCXq8owFL4Aig4nsKSrcAxo%2FD9d9cTlkOIN6gZShyyi7AJx%2F%2BMP25GmLmV9cg928WtrQhAIzAb%2FD9FJyN%2BHhUA%2B3v2n7KnTi%2BfZCLDRjB3ozJghxklt3hv7ia1DF7AJrDabBV%2BZMmnV6YPRxEO98Uy%2Bvqh2l%2Fg0p9jamIxi3pbiNECsp3g8W3c7qKApQ4%2FnDL8oGBVWPf2Oh7LXssCZxIMBpVdSqveFIUtPYQAcnNzd08jkovgXgcut0s5tQtpGK1UslucY6j4HjsuTjevuWNOBWXtnheH97ApgLgKwJgRlJo8tEsp9WWK2MM8XsPSt%2FWF262iluY7WVbwH3vIgrDXxwH%2Fk%2F4aT5UxCxsLuzhV8vEDziFEe0zRSjcBYFeIo%2B4SODQrXxnGZD3ahg0xj%2F8%2BsetZJSYaGL1E36jjhiLt6Tt5tE5ZRLfwyGRjjwSz7JIeymJTeqAVLluxON2aP032XiV%2B66l9tP9F6wx9A4y4Khqev05ouJr5M7V1aCSVpNPj2bK0lnkmGoarVjXcBwf9RCcN4%2B%2FrwnvBna4QBRMYh4SDjQYwtyYDAFzhHotMJ9zBnVPRJGR7lvH5gSh%2B6ukM3%2FWSWWqS6BrMMpJKpHavG5dfe9ri97yhoFY%2BqyxjjEc8IP9IzAFvH%2F3SLYMOnsw8IGOqUB9YnhPBeDwSzOvTV02z8zawfDOZLO0keNxl9l0n7ZXmgmpJECFiF0a4i%2FEtqqXAShCXXtheidemNC9Yr0TS344ei4QBk1n5jDdv0fzBJsdmn1kBvuTb4cAzlsqT05Vr260jv009DfF1tVKFKXi7OOUlu0VXgJqyIQgSwpGaZ0KF%2F7gvD3kFzXc7OdTGJC6KDJ4PfgQKKoQWZRgtzmuh55y9f16E4t&X-Amz-Signature=5689f3ca87df06b1cfba4979a10bc7aba70bb75f3166780c8cff50fc2276d6c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH244QD3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo1k1ILAk0chi5Ae4Do8ND7h1fvAB8hhcN2mH9FcRcHAiEA1tNINg5DMMuUPvVRLZ8e4UX%2BcyFx2dLmOTIXcqnrY%2Fgq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCXq8owFL4Aig4nsKSrcAxo%2FD9d9cTlkOIN6gZShyyi7AJx%2F%2BMP25GmLmV9cg928WtrQhAIzAb%2FD9FJyN%2BHhUA%2B3v2n7KnTi%2BfZCLDRjB3ozJghxklt3hv7ia1DF7AJrDabBV%2BZMmnV6YPRxEO98Uy%2Bvqh2l%2Fg0p9jamIxi3pbiNECsp3g8W3c7qKApQ4%2FnDL8oGBVWPf2Oh7LXssCZxIMBpVdSqveFIUtPYQAcnNzd08jkovgXgcut0s5tQtpGK1UslucY6j4HjsuTjevuWNOBWXtnheH97ApgLgKwJgRlJo8tEsp9WWK2MM8XsPSt%2FWF262iluY7WVbwH3vIgrDXxwH%2Fk%2F4aT5UxCxsLuzhV8vEDziFEe0zRSjcBYFeIo%2B4SODQrXxnGZD3ahg0xj%2F8%2BsetZJSYaGL1E36jjhiLt6Tt5tE5ZRLfwyGRjjwSz7JIeymJTeqAVLluxON2aP032XiV%2B66l9tP9F6wx9A4y4Khqev05ouJr5M7V1aCSVpNPj2bK0lnkmGoarVjXcBwf9RCcN4%2B%2FrwnvBna4QBRMYh4SDjQYwtyYDAFzhHotMJ9zBnVPRJGR7lvH5gSh%2B6ukM3%2FWSWWqS6BrMMpJKpHavG5dfe9ri97yhoFY%2BqyxjjEc8IP9IzAFvH%2F3SLYMOnsw8IGOqUB9YnhPBeDwSzOvTV02z8zawfDOZLO0keNxl9l0n7ZXmgmpJECFiF0a4i%2FEtqqXAShCXXtheidemNC9Yr0TS344ei4QBk1n5jDdv0fzBJsdmn1kBvuTb4cAzlsqT05Vr260jv009DfF1tVKFKXi7OOUlu0VXgJqyIQgSwpGaZ0KF%2F7gvD3kFzXc7OdTGJC6KDJ4PfgQKKoQWZRgtzmuh55y9f16E4t&X-Amz-Signature=8ae97bb7122a01fe20ff8173188c0cfc3dd35f5c3321b35ab473fa973e52855f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH244QD3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo1k1ILAk0chi5Ae4Do8ND7h1fvAB8hhcN2mH9FcRcHAiEA1tNINg5DMMuUPvVRLZ8e4UX%2BcyFx2dLmOTIXcqnrY%2Fgq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCXq8owFL4Aig4nsKSrcAxo%2FD9d9cTlkOIN6gZShyyi7AJx%2F%2BMP25GmLmV9cg928WtrQhAIzAb%2FD9FJyN%2BHhUA%2B3v2n7KnTi%2BfZCLDRjB3ozJghxklt3hv7ia1DF7AJrDabBV%2BZMmnV6YPRxEO98Uy%2Bvqh2l%2Fg0p9jamIxi3pbiNECsp3g8W3c7qKApQ4%2FnDL8oGBVWPf2Oh7LXssCZxIMBpVdSqveFIUtPYQAcnNzd08jkovgXgcut0s5tQtpGK1UslucY6j4HjsuTjevuWNOBWXtnheH97ApgLgKwJgRlJo8tEsp9WWK2MM8XsPSt%2FWF262iluY7WVbwH3vIgrDXxwH%2Fk%2F4aT5UxCxsLuzhV8vEDziFEe0zRSjcBYFeIo%2B4SODQrXxnGZD3ahg0xj%2F8%2BsetZJSYaGL1E36jjhiLt6Tt5tE5ZRLfwyGRjjwSz7JIeymJTeqAVLluxON2aP032XiV%2B66l9tP9F6wx9A4y4Khqev05ouJr5M7V1aCSVpNPj2bK0lnkmGoarVjXcBwf9RCcN4%2B%2FrwnvBna4QBRMYh4SDjQYwtyYDAFzhHotMJ9zBnVPRJGR7lvH5gSh%2B6ukM3%2FWSWWqS6BrMMpJKpHavG5dfe9ri97yhoFY%2BqyxjjEc8IP9IzAFvH%2F3SLYMOnsw8IGOqUB9YnhPBeDwSzOvTV02z8zawfDOZLO0keNxl9l0n7ZXmgmpJECFiF0a4i%2FEtqqXAShCXXtheidemNC9Yr0TS344ei4QBk1n5jDdv0fzBJsdmn1kBvuTb4cAzlsqT05Vr260jv009DfF1tVKFKXi7OOUlu0VXgJqyIQgSwpGaZ0KF%2F7gvD3kFzXc7OdTGJC6KDJ4PfgQKKoQWZRgtzmuh55y9f16E4t&X-Amz-Signature=e6aca797fe3eba892eab2e69b13f8fd36462738841f182286a0095ed3179a361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH244QD3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo1k1ILAk0chi5Ae4Do8ND7h1fvAB8hhcN2mH9FcRcHAiEA1tNINg5DMMuUPvVRLZ8e4UX%2BcyFx2dLmOTIXcqnrY%2Fgq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCXq8owFL4Aig4nsKSrcAxo%2FD9d9cTlkOIN6gZShyyi7AJx%2F%2BMP25GmLmV9cg928WtrQhAIzAb%2FD9FJyN%2BHhUA%2B3v2n7KnTi%2BfZCLDRjB3ozJghxklt3hv7ia1DF7AJrDabBV%2BZMmnV6YPRxEO98Uy%2Bvqh2l%2Fg0p9jamIxi3pbiNECsp3g8W3c7qKApQ4%2FnDL8oGBVWPf2Oh7LXssCZxIMBpVdSqveFIUtPYQAcnNzd08jkovgXgcut0s5tQtpGK1UslucY6j4HjsuTjevuWNOBWXtnheH97ApgLgKwJgRlJo8tEsp9WWK2MM8XsPSt%2FWF262iluY7WVbwH3vIgrDXxwH%2Fk%2F4aT5UxCxsLuzhV8vEDziFEe0zRSjcBYFeIo%2B4SODQrXxnGZD3ahg0xj%2F8%2BsetZJSYaGL1E36jjhiLt6Tt5tE5ZRLfwyGRjjwSz7JIeymJTeqAVLluxON2aP032XiV%2B66l9tP9F6wx9A4y4Khqev05ouJr5M7V1aCSVpNPj2bK0lnkmGoarVjXcBwf9RCcN4%2B%2FrwnvBna4QBRMYh4SDjQYwtyYDAFzhHotMJ9zBnVPRJGR7lvH5gSh%2B6ukM3%2FWSWWqS6BrMMpJKpHavG5dfe9ri97yhoFY%2BqyxjjEc8IP9IzAFvH%2F3SLYMOnsw8IGOqUB9YnhPBeDwSzOvTV02z8zawfDOZLO0keNxl9l0n7ZXmgmpJECFiF0a4i%2FEtqqXAShCXXtheidemNC9Yr0TS344ei4QBk1n5jDdv0fzBJsdmn1kBvuTb4cAzlsqT05Vr260jv009DfF1tVKFKXi7OOUlu0VXgJqyIQgSwpGaZ0KF%2F7gvD3kFzXc7OdTGJC6KDJ4PfgQKKoQWZRgtzmuh55y9f16E4t&X-Amz-Signature=7e3b7e5492ae5e4bd2996d139ae0de943aa7e81c305205b1fc92ee0df8a74bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
