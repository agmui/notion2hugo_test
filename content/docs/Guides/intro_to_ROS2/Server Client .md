---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQTGJR2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDaDiyR7SCunEw5PUVd%2FYsmHMyuVEY2AkSeyB89jIcKhQIgCfIsAWN0k5sXvmlVoY4l0GTD29xyGRHDS9djhomQoe4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGvDZZoSAUxLf4ZPyrcA%2Blbu6l0pipfRa6KDgS%2FgOHOQXH2%2BJgoNiZdYG0U61X5%2FNi9U6zzVh4SQ6cns336iNcfqmGnp2HJRSOLsHt6gS6BzjT0gCXzOKApXwKTVB3gET3h0CxHCRuFgK7C%2BBXlyE9Z72bjn9EC9gu5h9Ny7BZFLGfxzIuxqHw53kJ6aKWS9Jznocea6cJN%2Bcs5A8sWd8mTRrtAi6wBdln7sPnC%2BdyZoPtEbVbj7jZxgz6tkn74s0OQsSTty5Mhi2c7WBuZdJFL8vUxA2Yxw0OvMHNJVoZ2iAIkgN7vKF%2Fn04r4XZbjMT5wR5hODzJo4NvcBmBnJS7co%2BcYlJPr0L1s4Y4l%2FV0SqdAG1Y74y%2F7U2%2FvC8aOmdfdlRAyHhEHQiB0sBeOZ6iDdlE%2BvWjU6L2GAEN8Q6QWhSCTtThhsKDBNS4R2oE4UVgE%2BLwJxbYDRb5PMYTSZ%2FCNh0wZKtrOjUf%2BMHmSlQbgldErjPAX03zJ2eaCW3g0JoW4bvheBUgj4AHZ8vxB08ANwJ%2BDRa%2B5H%2FcFyzqBkqssxSoIeI2VgnMLTYzAhVkoWx05iMrrrYA0lJXUMH8Z9MX0AiwV38IycPseHTkE0oc47wUBN9EVBoxu%2BcbO%2B%2B5dexgGAMnLoMh1x%2BxX8MPGu3MoGOqUBEQNT2exzyLHjy%2FbLxoL0ffg8uvMpKUQCwdHmgXkZ3HSOySOkQ2kPEXu0wp%2BewecDRe1n9G9GSVa6Kpro5dGjpcnbXX5vES51UVs7srByBwqsgRMq4niGR%2Fl0X0tGgCWTPYNG0CNw3AzcoVZCTp3x1DYmxMAGNBZGNdxIb9qW%2FLNL3A4gKysO0egFumkDqspOWrCek7jRcHtmSuWn0pA1398KgNGo&X-Amz-Signature=976b75bc34aaac1b7285d4670bba00a5eb0f97b0f591d2fa44054d1ef8d7eb1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQTGJR2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDaDiyR7SCunEw5PUVd%2FYsmHMyuVEY2AkSeyB89jIcKhQIgCfIsAWN0k5sXvmlVoY4l0GTD29xyGRHDS9djhomQoe4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGvDZZoSAUxLf4ZPyrcA%2Blbu6l0pipfRa6KDgS%2FgOHOQXH2%2BJgoNiZdYG0U61X5%2FNi9U6zzVh4SQ6cns336iNcfqmGnp2HJRSOLsHt6gS6BzjT0gCXzOKApXwKTVB3gET3h0CxHCRuFgK7C%2BBXlyE9Z72bjn9EC9gu5h9Ny7BZFLGfxzIuxqHw53kJ6aKWS9Jznocea6cJN%2Bcs5A8sWd8mTRrtAi6wBdln7sPnC%2BdyZoPtEbVbj7jZxgz6tkn74s0OQsSTty5Mhi2c7WBuZdJFL8vUxA2Yxw0OvMHNJVoZ2iAIkgN7vKF%2Fn04r4XZbjMT5wR5hODzJo4NvcBmBnJS7co%2BcYlJPr0L1s4Y4l%2FV0SqdAG1Y74y%2F7U2%2FvC8aOmdfdlRAyHhEHQiB0sBeOZ6iDdlE%2BvWjU6L2GAEN8Q6QWhSCTtThhsKDBNS4R2oE4UVgE%2BLwJxbYDRb5PMYTSZ%2FCNh0wZKtrOjUf%2BMHmSlQbgldErjPAX03zJ2eaCW3g0JoW4bvheBUgj4AHZ8vxB08ANwJ%2BDRa%2B5H%2FcFyzqBkqssxSoIeI2VgnMLTYzAhVkoWx05iMrrrYA0lJXUMH8Z9MX0AiwV38IycPseHTkE0oc47wUBN9EVBoxu%2BcbO%2B%2B5dexgGAMnLoMh1x%2BxX8MPGu3MoGOqUBEQNT2exzyLHjy%2FbLxoL0ffg8uvMpKUQCwdHmgXkZ3HSOySOkQ2kPEXu0wp%2BewecDRe1n9G9GSVa6Kpro5dGjpcnbXX5vES51UVs7srByBwqsgRMq4niGR%2Fl0X0tGgCWTPYNG0CNw3AzcoVZCTp3x1DYmxMAGNBZGNdxIb9qW%2FLNL3A4gKysO0egFumkDqspOWrCek7jRcHtmSuWn0pA1398KgNGo&X-Amz-Signature=d49e6e43f7f753625648abe5ec450aa7d31fd31beb94ad18e95ba1f6084aa471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQTGJR2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDaDiyR7SCunEw5PUVd%2FYsmHMyuVEY2AkSeyB89jIcKhQIgCfIsAWN0k5sXvmlVoY4l0GTD29xyGRHDS9djhomQoe4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGvDZZoSAUxLf4ZPyrcA%2Blbu6l0pipfRa6KDgS%2FgOHOQXH2%2BJgoNiZdYG0U61X5%2FNi9U6zzVh4SQ6cns336iNcfqmGnp2HJRSOLsHt6gS6BzjT0gCXzOKApXwKTVB3gET3h0CxHCRuFgK7C%2BBXlyE9Z72bjn9EC9gu5h9Ny7BZFLGfxzIuxqHw53kJ6aKWS9Jznocea6cJN%2Bcs5A8sWd8mTRrtAi6wBdln7sPnC%2BdyZoPtEbVbj7jZxgz6tkn74s0OQsSTty5Mhi2c7WBuZdJFL8vUxA2Yxw0OvMHNJVoZ2iAIkgN7vKF%2Fn04r4XZbjMT5wR5hODzJo4NvcBmBnJS7co%2BcYlJPr0L1s4Y4l%2FV0SqdAG1Y74y%2F7U2%2FvC8aOmdfdlRAyHhEHQiB0sBeOZ6iDdlE%2BvWjU6L2GAEN8Q6QWhSCTtThhsKDBNS4R2oE4UVgE%2BLwJxbYDRb5PMYTSZ%2FCNh0wZKtrOjUf%2BMHmSlQbgldErjPAX03zJ2eaCW3g0JoW4bvheBUgj4AHZ8vxB08ANwJ%2BDRa%2B5H%2FcFyzqBkqssxSoIeI2VgnMLTYzAhVkoWx05iMrrrYA0lJXUMH8Z9MX0AiwV38IycPseHTkE0oc47wUBN9EVBoxu%2BcbO%2B%2B5dexgGAMnLoMh1x%2BxX8MPGu3MoGOqUBEQNT2exzyLHjy%2FbLxoL0ffg8uvMpKUQCwdHmgXkZ3HSOySOkQ2kPEXu0wp%2BewecDRe1n9G9GSVa6Kpro5dGjpcnbXX5vES51UVs7srByBwqsgRMq4niGR%2Fl0X0tGgCWTPYNG0CNw3AzcoVZCTp3x1DYmxMAGNBZGNdxIb9qW%2FLNL3A4gKysO0egFumkDqspOWrCek7jRcHtmSuWn0pA1398KgNGo&X-Amz-Signature=ef16921ea1f0520fdd5106c7e84db4572b88397dd96a5bee06f0fa6aed112ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQTGJR2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDaDiyR7SCunEw5PUVd%2FYsmHMyuVEY2AkSeyB89jIcKhQIgCfIsAWN0k5sXvmlVoY4l0GTD29xyGRHDS9djhomQoe4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGvDZZoSAUxLf4ZPyrcA%2Blbu6l0pipfRa6KDgS%2FgOHOQXH2%2BJgoNiZdYG0U61X5%2FNi9U6zzVh4SQ6cns336iNcfqmGnp2HJRSOLsHt6gS6BzjT0gCXzOKApXwKTVB3gET3h0CxHCRuFgK7C%2BBXlyE9Z72bjn9EC9gu5h9Ny7BZFLGfxzIuxqHw53kJ6aKWS9Jznocea6cJN%2Bcs5A8sWd8mTRrtAi6wBdln7sPnC%2BdyZoPtEbVbj7jZxgz6tkn74s0OQsSTty5Mhi2c7WBuZdJFL8vUxA2Yxw0OvMHNJVoZ2iAIkgN7vKF%2Fn04r4XZbjMT5wR5hODzJo4NvcBmBnJS7co%2BcYlJPr0L1s4Y4l%2FV0SqdAG1Y74y%2F7U2%2FvC8aOmdfdlRAyHhEHQiB0sBeOZ6iDdlE%2BvWjU6L2GAEN8Q6QWhSCTtThhsKDBNS4R2oE4UVgE%2BLwJxbYDRb5PMYTSZ%2FCNh0wZKtrOjUf%2BMHmSlQbgldErjPAX03zJ2eaCW3g0JoW4bvheBUgj4AHZ8vxB08ANwJ%2BDRa%2B5H%2FcFyzqBkqssxSoIeI2VgnMLTYzAhVkoWx05iMrrrYA0lJXUMH8Z9MX0AiwV38IycPseHTkE0oc47wUBN9EVBoxu%2BcbO%2B%2B5dexgGAMnLoMh1x%2BxX8MPGu3MoGOqUBEQNT2exzyLHjy%2FbLxoL0ffg8uvMpKUQCwdHmgXkZ3HSOySOkQ2kPEXu0wp%2BewecDRe1n9G9GSVa6Kpro5dGjpcnbXX5vES51UVs7srByBwqsgRMq4niGR%2Fl0X0tGgCWTPYNG0CNw3AzcoVZCTp3x1DYmxMAGNBZGNdxIb9qW%2FLNL3A4gKysO0egFumkDqspOWrCek7jRcHtmSuWn0pA1398KgNGo&X-Amz-Signature=ea81ba7865c4115248a743272f57bd58caa04dd675a9337f01d8d373fd559d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQTGJR2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDaDiyR7SCunEw5PUVd%2FYsmHMyuVEY2AkSeyB89jIcKhQIgCfIsAWN0k5sXvmlVoY4l0GTD29xyGRHDS9djhomQoe4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGvDZZoSAUxLf4ZPyrcA%2Blbu6l0pipfRa6KDgS%2FgOHOQXH2%2BJgoNiZdYG0U61X5%2FNi9U6zzVh4SQ6cns336iNcfqmGnp2HJRSOLsHt6gS6BzjT0gCXzOKApXwKTVB3gET3h0CxHCRuFgK7C%2BBXlyE9Z72bjn9EC9gu5h9Ny7BZFLGfxzIuxqHw53kJ6aKWS9Jznocea6cJN%2Bcs5A8sWd8mTRrtAi6wBdln7sPnC%2BdyZoPtEbVbj7jZxgz6tkn74s0OQsSTty5Mhi2c7WBuZdJFL8vUxA2Yxw0OvMHNJVoZ2iAIkgN7vKF%2Fn04r4XZbjMT5wR5hODzJo4NvcBmBnJS7co%2BcYlJPr0L1s4Y4l%2FV0SqdAG1Y74y%2F7U2%2FvC8aOmdfdlRAyHhEHQiB0sBeOZ6iDdlE%2BvWjU6L2GAEN8Q6QWhSCTtThhsKDBNS4R2oE4UVgE%2BLwJxbYDRb5PMYTSZ%2FCNh0wZKtrOjUf%2BMHmSlQbgldErjPAX03zJ2eaCW3g0JoW4bvheBUgj4AHZ8vxB08ANwJ%2BDRa%2B5H%2FcFyzqBkqssxSoIeI2VgnMLTYzAhVkoWx05iMrrrYA0lJXUMH8Z9MX0AiwV38IycPseHTkE0oc47wUBN9EVBoxu%2BcbO%2B%2B5dexgGAMnLoMh1x%2BxX8MPGu3MoGOqUBEQNT2exzyLHjy%2FbLxoL0ffg8uvMpKUQCwdHmgXkZ3HSOySOkQ2kPEXu0wp%2BewecDRe1n9G9GSVa6Kpro5dGjpcnbXX5vES51UVs7srByBwqsgRMq4niGR%2Fl0X0tGgCWTPYNG0CNw3AzcoVZCTp3x1DYmxMAGNBZGNdxIb9qW%2FLNL3A4gKysO0egFumkDqspOWrCek7jRcHtmSuWn0pA1398KgNGo&X-Amz-Signature=29fb9e6861a5e3060eeb6a73e9bced80a1dd549013f86cf837662a01b4fc62b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
