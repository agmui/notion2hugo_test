---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRXRNYNH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMJ%2BA5lt61Ao6OsPRk1UjPvuF9Guhzk3TEPwkHPK6iUwIhAI44viLhfDn5ks6iuppgybHnBsc1npmdsKmK4ICe6sD%2BKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvFBO0Lmz7x9CwmQQq3AOwP4COQWfCbXPQFS4noC5UXceZn9x59JSwwfqjcBGQyx%2BTnxWVwWrOCOgW44FAYSelAw0I6dWtECELXEpSQslhy%2BeWlyrNyUVtttsdhPSWyB4U2A7W9ZteS%2FrIrv7mlhCl8FcRo24%2FSNLMSa1vkm31Anwfexunn7WwPrPIHPE7gOp0u4kF7mcdU5LXQQa%2BUY3zh1%2FoYCLgXJ8WPLiMwJZ9h8rVBLY3GLh1LFuiBXZn2kK5oAT%2FSz%2FvC4GKl8dZHORdqItAt6sE%2B251jFiJC4OWkd78QFLZlW52%2FJ%2BWYdSwoxQuFHxFKukg0l%2BXcgAhw50tkK%2BfoJqki7s3ltbQ1KvyL7rhc818uK3ZEFXZodnrLmoM65lPfrnMcH%2FPsdd7vlMZL9S7s6BfdtpSxVSOCjDwGZjFc2ceO4YAHJhqrY2SXJLJqko%2BRel0uyrHK1DTsaIDI%2FMmMh0pZSZXTeLQoPL7z0NI4XDUZ%2B6pJWHsenKsskh86JUiMnuJ0TEpT8QlMjZzYUwuY%2FEYJdPxaf5H%2Bu8S5d7uozVSZnm0ZqjAYL8Hqii6JLDR0UFPq7FoOg3LszuNBv5jip5Acm5M%2FEg%2FC4rmI8T9GNXrU3d6qFqDiRariQFbapiGUgGPFMss7zD4h%2Bi9BjqkAdjhg19lMp4hwpOz79%2B06IkF8BUDySloE50JRQVonGCfcnzvmELoYP3lwk1bdBNNRxEIWk3vZfMUm7TXTBZBnY2luMHRV%2FolgLQb6LEBjBlhhcwnVvET4IFdsKf%2FfzFphuGED2rvjXUGVTeRwoVSPZSkTe4ffmPtJ%2FxRzhrhlRvaaTXTpwme15KyVSrL8k7RyAMvVpQWYT7oRKwfoerOCGgbapj%2F&X-Amz-Signature=e8b1936f80a0319fdd9413c09e6b5e83e48c9284cc97f2c7b64d728091e21b4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRXRNYNH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMJ%2BA5lt61Ao6OsPRk1UjPvuF9Guhzk3TEPwkHPK6iUwIhAI44viLhfDn5ks6iuppgybHnBsc1npmdsKmK4ICe6sD%2BKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvFBO0Lmz7x9CwmQQq3AOwP4COQWfCbXPQFS4noC5UXceZn9x59JSwwfqjcBGQyx%2BTnxWVwWrOCOgW44FAYSelAw0I6dWtECELXEpSQslhy%2BeWlyrNyUVtttsdhPSWyB4U2A7W9ZteS%2FrIrv7mlhCl8FcRo24%2FSNLMSa1vkm31Anwfexunn7WwPrPIHPE7gOp0u4kF7mcdU5LXQQa%2BUY3zh1%2FoYCLgXJ8WPLiMwJZ9h8rVBLY3GLh1LFuiBXZn2kK5oAT%2FSz%2FvC4GKl8dZHORdqItAt6sE%2B251jFiJC4OWkd78QFLZlW52%2FJ%2BWYdSwoxQuFHxFKukg0l%2BXcgAhw50tkK%2BfoJqki7s3ltbQ1KvyL7rhc818uK3ZEFXZodnrLmoM65lPfrnMcH%2FPsdd7vlMZL9S7s6BfdtpSxVSOCjDwGZjFc2ceO4YAHJhqrY2SXJLJqko%2BRel0uyrHK1DTsaIDI%2FMmMh0pZSZXTeLQoPL7z0NI4XDUZ%2B6pJWHsenKsskh86JUiMnuJ0TEpT8QlMjZzYUwuY%2FEYJdPxaf5H%2Bu8S5d7uozVSZnm0ZqjAYL8Hqii6JLDR0UFPq7FoOg3LszuNBv5jip5Acm5M%2FEg%2FC4rmI8T9GNXrU3d6qFqDiRariQFbapiGUgGPFMss7zD4h%2Bi9BjqkAdjhg19lMp4hwpOz79%2B06IkF8BUDySloE50JRQVonGCfcnzvmELoYP3lwk1bdBNNRxEIWk3vZfMUm7TXTBZBnY2luMHRV%2FolgLQb6LEBjBlhhcwnVvET4IFdsKf%2FfzFphuGED2rvjXUGVTeRwoVSPZSkTe4ffmPtJ%2FxRzhrhlRvaaTXTpwme15KyVSrL8k7RyAMvVpQWYT7oRKwfoerOCGgbapj%2F&X-Amz-Signature=1ace3c51c62fec979cdf798f069e7ad611bba87822ea057e8f2a3e6e74a62cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRXRNYNH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMJ%2BA5lt61Ao6OsPRk1UjPvuF9Guhzk3TEPwkHPK6iUwIhAI44viLhfDn5ks6iuppgybHnBsc1npmdsKmK4ICe6sD%2BKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvFBO0Lmz7x9CwmQQq3AOwP4COQWfCbXPQFS4noC5UXceZn9x59JSwwfqjcBGQyx%2BTnxWVwWrOCOgW44FAYSelAw0I6dWtECELXEpSQslhy%2BeWlyrNyUVtttsdhPSWyB4U2A7W9ZteS%2FrIrv7mlhCl8FcRo24%2FSNLMSa1vkm31Anwfexunn7WwPrPIHPE7gOp0u4kF7mcdU5LXQQa%2BUY3zh1%2FoYCLgXJ8WPLiMwJZ9h8rVBLY3GLh1LFuiBXZn2kK5oAT%2FSz%2FvC4GKl8dZHORdqItAt6sE%2B251jFiJC4OWkd78QFLZlW52%2FJ%2BWYdSwoxQuFHxFKukg0l%2BXcgAhw50tkK%2BfoJqki7s3ltbQ1KvyL7rhc818uK3ZEFXZodnrLmoM65lPfrnMcH%2FPsdd7vlMZL9S7s6BfdtpSxVSOCjDwGZjFc2ceO4YAHJhqrY2SXJLJqko%2BRel0uyrHK1DTsaIDI%2FMmMh0pZSZXTeLQoPL7z0NI4XDUZ%2B6pJWHsenKsskh86JUiMnuJ0TEpT8QlMjZzYUwuY%2FEYJdPxaf5H%2Bu8S5d7uozVSZnm0ZqjAYL8Hqii6JLDR0UFPq7FoOg3LszuNBv5jip5Acm5M%2FEg%2FC4rmI8T9GNXrU3d6qFqDiRariQFbapiGUgGPFMss7zD4h%2Bi9BjqkAdjhg19lMp4hwpOz79%2B06IkF8BUDySloE50JRQVonGCfcnzvmELoYP3lwk1bdBNNRxEIWk3vZfMUm7TXTBZBnY2luMHRV%2FolgLQb6LEBjBlhhcwnVvET4IFdsKf%2FfzFphuGED2rvjXUGVTeRwoVSPZSkTe4ffmPtJ%2FxRzhrhlRvaaTXTpwme15KyVSrL8k7RyAMvVpQWYT7oRKwfoerOCGgbapj%2F&X-Amz-Signature=15d2b6db8e6e331d52251aa5c3b7672f0f59a17ad863b77f4637a47fa45e585b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRXRNYNH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMJ%2BA5lt61Ao6OsPRk1UjPvuF9Guhzk3TEPwkHPK6iUwIhAI44viLhfDn5ks6iuppgybHnBsc1npmdsKmK4ICe6sD%2BKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvFBO0Lmz7x9CwmQQq3AOwP4COQWfCbXPQFS4noC5UXceZn9x59JSwwfqjcBGQyx%2BTnxWVwWrOCOgW44FAYSelAw0I6dWtECELXEpSQslhy%2BeWlyrNyUVtttsdhPSWyB4U2A7W9ZteS%2FrIrv7mlhCl8FcRo24%2FSNLMSa1vkm31Anwfexunn7WwPrPIHPE7gOp0u4kF7mcdU5LXQQa%2BUY3zh1%2FoYCLgXJ8WPLiMwJZ9h8rVBLY3GLh1LFuiBXZn2kK5oAT%2FSz%2FvC4GKl8dZHORdqItAt6sE%2B251jFiJC4OWkd78QFLZlW52%2FJ%2BWYdSwoxQuFHxFKukg0l%2BXcgAhw50tkK%2BfoJqki7s3ltbQ1KvyL7rhc818uK3ZEFXZodnrLmoM65lPfrnMcH%2FPsdd7vlMZL9S7s6BfdtpSxVSOCjDwGZjFc2ceO4YAHJhqrY2SXJLJqko%2BRel0uyrHK1DTsaIDI%2FMmMh0pZSZXTeLQoPL7z0NI4XDUZ%2B6pJWHsenKsskh86JUiMnuJ0TEpT8QlMjZzYUwuY%2FEYJdPxaf5H%2Bu8S5d7uozVSZnm0ZqjAYL8Hqii6JLDR0UFPq7FoOg3LszuNBv5jip5Acm5M%2FEg%2FC4rmI8T9GNXrU3d6qFqDiRariQFbapiGUgGPFMss7zD4h%2Bi9BjqkAdjhg19lMp4hwpOz79%2B06IkF8BUDySloE50JRQVonGCfcnzvmELoYP3lwk1bdBNNRxEIWk3vZfMUm7TXTBZBnY2luMHRV%2FolgLQb6LEBjBlhhcwnVvET4IFdsKf%2FfzFphuGED2rvjXUGVTeRwoVSPZSkTe4ffmPtJ%2FxRzhrhlRvaaTXTpwme15KyVSrL8k7RyAMvVpQWYT7oRKwfoerOCGgbapj%2F&X-Amz-Signature=ce910caa5db797064c9029b54360a6c0fd4fac6e5026920daee74bb2862e11ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRXRNYNH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMJ%2BA5lt61Ao6OsPRk1UjPvuF9Guhzk3TEPwkHPK6iUwIhAI44viLhfDn5ks6iuppgybHnBsc1npmdsKmK4ICe6sD%2BKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvFBO0Lmz7x9CwmQQq3AOwP4COQWfCbXPQFS4noC5UXceZn9x59JSwwfqjcBGQyx%2BTnxWVwWrOCOgW44FAYSelAw0I6dWtECELXEpSQslhy%2BeWlyrNyUVtttsdhPSWyB4U2A7W9ZteS%2FrIrv7mlhCl8FcRo24%2FSNLMSa1vkm31Anwfexunn7WwPrPIHPE7gOp0u4kF7mcdU5LXQQa%2BUY3zh1%2FoYCLgXJ8WPLiMwJZ9h8rVBLY3GLh1LFuiBXZn2kK5oAT%2FSz%2FvC4GKl8dZHORdqItAt6sE%2B251jFiJC4OWkd78QFLZlW52%2FJ%2BWYdSwoxQuFHxFKukg0l%2BXcgAhw50tkK%2BfoJqki7s3ltbQ1KvyL7rhc818uK3ZEFXZodnrLmoM65lPfrnMcH%2FPsdd7vlMZL9S7s6BfdtpSxVSOCjDwGZjFc2ceO4YAHJhqrY2SXJLJqko%2BRel0uyrHK1DTsaIDI%2FMmMh0pZSZXTeLQoPL7z0NI4XDUZ%2B6pJWHsenKsskh86JUiMnuJ0TEpT8QlMjZzYUwuY%2FEYJdPxaf5H%2Bu8S5d7uozVSZnm0ZqjAYL8Hqii6JLDR0UFPq7FoOg3LszuNBv5jip5Acm5M%2FEg%2FC4rmI8T9GNXrU3d6qFqDiRariQFbapiGUgGPFMss7zD4h%2Bi9BjqkAdjhg19lMp4hwpOz79%2B06IkF8BUDySloE50JRQVonGCfcnzvmELoYP3lwk1bdBNNRxEIWk3vZfMUm7TXTBZBnY2luMHRV%2FolgLQb6LEBjBlhhcwnVvET4IFdsKf%2FfzFphuGED2rvjXUGVTeRwoVSPZSkTe4ffmPtJ%2FxRzhrhlRvaaTXTpwme15KyVSrL8k7RyAMvVpQWYT7oRKwfoerOCGgbapj%2F&X-Amz-Signature=cd7a6aed438b43443f63e3bf4cf8002a9d25e9e065c2e78c94a2c727f821ee9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
