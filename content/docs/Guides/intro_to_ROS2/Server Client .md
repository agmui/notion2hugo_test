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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OQZN2VV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0yOSMP5zpyy%2F%2F%2FDZNQHdQPrbM79LK9HF8jz%2Fn%2BpZ3XgIhAPVlsosrC5ynYNhvu7PaBj2tY9l5BnsPCtqd%2BRRfTAcUKv8DCHYQABoMNjM3NDIzMTgzODA1Igx3jYOu%2Bdx4Rr%2BBK2Mq3ANDpPilvBe39rtXrhe9lqf1N4e%2F2A9pCNZQcxfTW%2F7mQzj2M91ljZxL2DhwI21M8NYYIKyOscKFCyisyrE1enoBKU7YPR87toJyLlstHxporAY6mNPMDjsHMbswOcvjySiFag2mKQK4kUxP41zmNHAiCRk3fvLmjt0h6hKFeBxqA3YBEKrFdoSTXXBiscmgnAhIC%2Bxi6MqEKonjC0RQdvFCRJu3rfeS%2Fr%2FXTM4RWk44zdorh0bA7NlEOLpwGGI80Rv7Ohftyh7l5dqPmr25%2FAZ3OISOoOIFD4AxtDWmxym5Q1tUltUiuSrEFtPuqr8hf0fGDL2joMAndlkZTTGaJ92UXUIfNvBcfANnHxHJk969hHhnkuQlmZ3tDLMLwIVQ5wL4oL1567CZQqdXJOd2rpHKCI0A%2Fmo9DKn6Gs3l1cCX7hglPj58xV8rx7CLgXmhsgUppEE%2FQt2F3zh8txAkhQE22YcEjvR0XfcXStXWO5DcatPlQcupX6vdlBYl9XOlemsCt5nskNjcdOSNeO%2FQAxt7dBTrMhqld0uNrmMptBWDmtwkEk%2FieXCDArdT9kon%2B4Vp6LOOqrDaCrtpeKVPqb%2BD6Y%2BTi92FngRbw%2F%2F3x42ttpVtTp1vHiUhpwMUfDDKjYnABjqkAbpmsWhxLj%2FHnHF4YrOUnOljvORUSNonzkc7kII3H69G9X5ZF%2F0ntz0BQ8yIUS3rv0C8BtfqLfrVBQu3sopt810kcwUXeaziyEE1v4UU7uNCOuBZ6KG4Xc5vMcC2ERFOkm%2F9hKdNGk2X%2B2TsCM%2BgQxakYyQwixGLkstzGGqH%2FGcQW0gwN9UsmjJfBrzRvg0nMlz91idjBqKBDqI6%2F6ULC95ibnfq&X-Amz-Signature=39f744736e5dc20935b1144f663e81d36ada68acf370cca8184a55f2e9cb7986&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OQZN2VV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0yOSMP5zpyy%2F%2F%2FDZNQHdQPrbM79LK9HF8jz%2Fn%2BpZ3XgIhAPVlsosrC5ynYNhvu7PaBj2tY9l5BnsPCtqd%2BRRfTAcUKv8DCHYQABoMNjM3NDIzMTgzODA1Igx3jYOu%2Bdx4Rr%2BBK2Mq3ANDpPilvBe39rtXrhe9lqf1N4e%2F2A9pCNZQcxfTW%2F7mQzj2M91ljZxL2DhwI21M8NYYIKyOscKFCyisyrE1enoBKU7YPR87toJyLlstHxporAY6mNPMDjsHMbswOcvjySiFag2mKQK4kUxP41zmNHAiCRk3fvLmjt0h6hKFeBxqA3YBEKrFdoSTXXBiscmgnAhIC%2Bxi6MqEKonjC0RQdvFCRJu3rfeS%2Fr%2FXTM4RWk44zdorh0bA7NlEOLpwGGI80Rv7Ohftyh7l5dqPmr25%2FAZ3OISOoOIFD4AxtDWmxym5Q1tUltUiuSrEFtPuqr8hf0fGDL2joMAndlkZTTGaJ92UXUIfNvBcfANnHxHJk969hHhnkuQlmZ3tDLMLwIVQ5wL4oL1567CZQqdXJOd2rpHKCI0A%2Fmo9DKn6Gs3l1cCX7hglPj58xV8rx7CLgXmhsgUppEE%2FQt2F3zh8txAkhQE22YcEjvR0XfcXStXWO5DcatPlQcupX6vdlBYl9XOlemsCt5nskNjcdOSNeO%2FQAxt7dBTrMhqld0uNrmMptBWDmtwkEk%2FieXCDArdT9kon%2B4Vp6LOOqrDaCrtpeKVPqb%2BD6Y%2BTi92FngRbw%2F%2F3x42ttpVtTp1vHiUhpwMUfDDKjYnABjqkAbpmsWhxLj%2FHnHF4YrOUnOljvORUSNonzkc7kII3H69G9X5ZF%2F0ntz0BQ8yIUS3rv0C8BtfqLfrVBQu3sopt810kcwUXeaziyEE1v4UU7uNCOuBZ6KG4Xc5vMcC2ERFOkm%2F9hKdNGk2X%2B2TsCM%2BgQxakYyQwixGLkstzGGqH%2FGcQW0gwN9UsmjJfBrzRvg0nMlz91idjBqKBDqI6%2F6ULC95ibnfq&X-Amz-Signature=524b0c9fac3115b6e8da8dbff9c3536d7d944b8b7b7807246f641fd209fec746&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OQZN2VV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0yOSMP5zpyy%2F%2F%2FDZNQHdQPrbM79LK9HF8jz%2Fn%2BpZ3XgIhAPVlsosrC5ynYNhvu7PaBj2tY9l5BnsPCtqd%2BRRfTAcUKv8DCHYQABoMNjM3NDIzMTgzODA1Igx3jYOu%2Bdx4Rr%2BBK2Mq3ANDpPilvBe39rtXrhe9lqf1N4e%2F2A9pCNZQcxfTW%2F7mQzj2M91ljZxL2DhwI21M8NYYIKyOscKFCyisyrE1enoBKU7YPR87toJyLlstHxporAY6mNPMDjsHMbswOcvjySiFag2mKQK4kUxP41zmNHAiCRk3fvLmjt0h6hKFeBxqA3YBEKrFdoSTXXBiscmgnAhIC%2Bxi6MqEKonjC0RQdvFCRJu3rfeS%2Fr%2FXTM4RWk44zdorh0bA7NlEOLpwGGI80Rv7Ohftyh7l5dqPmr25%2FAZ3OISOoOIFD4AxtDWmxym5Q1tUltUiuSrEFtPuqr8hf0fGDL2joMAndlkZTTGaJ92UXUIfNvBcfANnHxHJk969hHhnkuQlmZ3tDLMLwIVQ5wL4oL1567CZQqdXJOd2rpHKCI0A%2Fmo9DKn6Gs3l1cCX7hglPj58xV8rx7CLgXmhsgUppEE%2FQt2F3zh8txAkhQE22YcEjvR0XfcXStXWO5DcatPlQcupX6vdlBYl9XOlemsCt5nskNjcdOSNeO%2FQAxt7dBTrMhqld0uNrmMptBWDmtwkEk%2FieXCDArdT9kon%2B4Vp6LOOqrDaCrtpeKVPqb%2BD6Y%2BTi92FngRbw%2F%2F3x42ttpVtTp1vHiUhpwMUfDDKjYnABjqkAbpmsWhxLj%2FHnHF4YrOUnOljvORUSNonzkc7kII3H69G9X5ZF%2F0ntz0BQ8yIUS3rv0C8BtfqLfrVBQu3sopt810kcwUXeaziyEE1v4UU7uNCOuBZ6KG4Xc5vMcC2ERFOkm%2F9hKdNGk2X%2B2TsCM%2BgQxakYyQwixGLkstzGGqH%2FGcQW0gwN9UsmjJfBrzRvg0nMlz91idjBqKBDqI6%2F6ULC95ibnfq&X-Amz-Signature=afdd0adf78be2a2256c763678f577108d59b5c65fdf1753e06ae324d0eaf62ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OQZN2VV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0yOSMP5zpyy%2F%2F%2FDZNQHdQPrbM79LK9HF8jz%2Fn%2BpZ3XgIhAPVlsosrC5ynYNhvu7PaBj2tY9l5BnsPCtqd%2BRRfTAcUKv8DCHYQABoMNjM3NDIzMTgzODA1Igx3jYOu%2Bdx4Rr%2BBK2Mq3ANDpPilvBe39rtXrhe9lqf1N4e%2F2A9pCNZQcxfTW%2F7mQzj2M91ljZxL2DhwI21M8NYYIKyOscKFCyisyrE1enoBKU7YPR87toJyLlstHxporAY6mNPMDjsHMbswOcvjySiFag2mKQK4kUxP41zmNHAiCRk3fvLmjt0h6hKFeBxqA3YBEKrFdoSTXXBiscmgnAhIC%2Bxi6MqEKonjC0RQdvFCRJu3rfeS%2Fr%2FXTM4RWk44zdorh0bA7NlEOLpwGGI80Rv7Ohftyh7l5dqPmr25%2FAZ3OISOoOIFD4AxtDWmxym5Q1tUltUiuSrEFtPuqr8hf0fGDL2joMAndlkZTTGaJ92UXUIfNvBcfANnHxHJk969hHhnkuQlmZ3tDLMLwIVQ5wL4oL1567CZQqdXJOd2rpHKCI0A%2Fmo9DKn6Gs3l1cCX7hglPj58xV8rx7CLgXmhsgUppEE%2FQt2F3zh8txAkhQE22YcEjvR0XfcXStXWO5DcatPlQcupX6vdlBYl9XOlemsCt5nskNjcdOSNeO%2FQAxt7dBTrMhqld0uNrmMptBWDmtwkEk%2FieXCDArdT9kon%2B4Vp6LOOqrDaCrtpeKVPqb%2BD6Y%2BTi92FngRbw%2F%2F3x42ttpVtTp1vHiUhpwMUfDDKjYnABjqkAbpmsWhxLj%2FHnHF4YrOUnOljvORUSNonzkc7kII3H69G9X5ZF%2F0ntz0BQ8yIUS3rv0C8BtfqLfrVBQu3sopt810kcwUXeaziyEE1v4UU7uNCOuBZ6KG4Xc5vMcC2ERFOkm%2F9hKdNGk2X%2B2TsCM%2BgQxakYyQwixGLkstzGGqH%2FGcQW0gwN9UsmjJfBrzRvg0nMlz91idjBqKBDqI6%2F6ULC95ibnfq&X-Amz-Signature=19c928b3a92eada0cda68b49f6accc3dbfedf0f283d3c877f3a8dcffc966f6f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OQZN2VV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0yOSMP5zpyy%2F%2F%2FDZNQHdQPrbM79LK9HF8jz%2Fn%2BpZ3XgIhAPVlsosrC5ynYNhvu7PaBj2tY9l5BnsPCtqd%2BRRfTAcUKv8DCHYQABoMNjM3NDIzMTgzODA1Igx3jYOu%2Bdx4Rr%2BBK2Mq3ANDpPilvBe39rtXrhe9lqf1N4e%2F2A9pCNZQcxfTW%2F7mQzj2M91ljZxL2DhwI21M8NYYIKyOscKFCyisyrE1enoBKU7YPR87toJyLlstHxporAY6mNPMDjsHMbswOcvjySiFag2mKQK4kUxP41zmNHAiCRk3fvLmjt0h6hKFeBxqA3YBEKrFdoSTXXBiscmgnAhIC%2Bxi6MqEKonjC0RQdvFCRJu3rfeS%2Fr%2FXTM4RWk44zdorh0bA7NlEOLpwGGI80Rv7Ohftyh7l5dqPmr25%2FAZ3OISOoOIFD4AxtDWmxym5Q1tUltUiuSrEFtPuqr8hf0fGDL2joMAndlkZTTGaJ92UXUIfNvBcfANnHxHJk969hHhnkuQlmZ3tDLMLwIVQ5wL4oL1567CZQqdXJOd2rpHKCI0A%2Fmo9DKn6Gs3l1cCX7hglPj58xV8rx7CLgXmhsgUppEE%2FQt2F3zh8txAkhQE22YcEjvR0XfcXStXWO5DcatPlQcupX6vdlBYl9XOlemsCt5nskNjcdOSNeO%2FQAxt7dBTrMhqld0uNrmMptBWDmtwkEk%2FieXCDArdT9kon%2B4Vp6LOOqrDaCrtpeKVPqb%2BD6Y%2BTi92FngRbw%2F%2F3x42ttpVtTp1vHiUhpwMUfDDKjYnABjqkAbpmsWhxLj%2FHnHF4YrOUnOljvORUSNonzkc7kII3H69G9X5ZF%2F0ntz0BQ8yIUS3rv0C8BtfqLfrVBQu3sopt810kcwUXeaziyEE1v4UU7uNCOuBZ6KG4Xc5vMcC2ERFOkm%2F9hKdNGk2X%2B2TsCM%2BgQxakYyQwixGLkstzGGqH%2FGcQW0gwN9UsmjJfBrzRvg0nMlz91idjBqKBDqI6%2F6ULC95ibnfq&X-Amz-Signature=3565a05f86312a05e24703bd53314beef66eb488c3b3c1ff470b34355f2bb31d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
