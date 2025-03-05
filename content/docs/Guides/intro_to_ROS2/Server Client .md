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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647Q4X3UA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBifQDEpJmZ5UPyW2tGWbUTNLVEmIqfihvaGE09373UxAiBErDW6oW%2BDXgHzANEei0G58SPM1qnxXPDNDKAAslwMJyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMTpyofg7zN00P%2BdZjKtwD%2BCwgc7ZAahzL%2FvlugWo05RS9jkj8NgE9imPldmWCyebkIWUA%2Fal3ZONNqfx4SuQlM6os7uGD%2FLkwPw%2FuZfevmMxUOmKNM5jrO%2FGo3QXuShZHV75zZtL7TG2ouB8ZynbvtriidmklBJbtHZGECDA3LiIcdMwAqVB5VwnY79wkjiYRFehuG5qmAUH1v8prPprWetNGx6x8Wd4Po5d9p8VH4ZUl5OX5%2FV5fZknSmbmqgunV2d54nHZrjXgHicX%2B6ir3Vv2E4fWkRRpJdw%2BF1VnMQHh%2FKi6MtHWOopwi55McHpzcZnY7gCj30U9swSoNxg7p2azZF%2BZlWvqp0uBsxyDmIcUoOw%2BMtrwCcXdJvYIQzcMt15MHnEyitsQYUIPJCZp8CWgoJmSuzmDAKI%2FhIMafzHWBRl4JhlmW0nbqVemb6wgr2sBEJFSCgsL5soQS3YzLQkc58CdLyr8YgN4pZJIi50fAyhkhahviOKigcglF%2Fi7kWiKNsMMzuOeBZxk4jQkSjJ2bCgP3JhrtsjZsNK97M0kXYHR1%2Fes61ABcwri9J5XzgcVgxDDr5A2dkui78%2FVrXShDceCMCY5A4dXJHX4%2F9Y7j28q0FC76cNTxQuiDNmeIGtJAwd%2F3HWzQBlQw3fSgvgY6pgFiaFX9tHNMgfUHndfwEYmdNXWcApu2A%2BskUjZ%2B88iUVD9CPPoerN8GfnEWpRUhat1SELwEZFbEa7CGk%2Ba5Fz5%2FbRb9C055WzJpxLWyWgiHzzE%2BY5KL8TweOO2l3I%2B88%2BolykLvmLDSg2XFtUy%2Bngz9aGGzQTFJ2xLCk684Al7inxdTMRcmibwW3fG87PbLG4d4jI8Uirv24yXe7hc%2BgmLIAHIIH6MS&X-Amz-Signature=1994c7535268ba55f29ec884ea59ce083dab390c46027991653e07db9a4da62b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647Q4X3UA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBifQDEpJmZ5UPyW2tGWbUTNLVEmIqfihvaGE09373UxAiBErDW6oW%2BDXgHzANEei0G58SPM1qnxXPDNDKAAslwMJyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMTpyofg7zN00P%2BdZjKtwD%2BCwgc7ZAahzL%2FvlugWo05RS9jkj8NgE9imPldmWCyebkIWUA%2Fal3ZONNqfx4SuQlM6os7uGD%2FLkwPw%2FuZfevmMxUOmKNM5jrO%2FGo3QXuShZHV75zZtL7TG2ouB8ZynbvtriidmklBJbtHZGECDA3LiIcdMwAqVB5VwnY79wkjiYRFehuG5qmAUH1v8prPprWetNGx6x8Wd4Po5d9p8VH4ZUl5OX5%2FV5fZknSmbmqgunV2d54nHZrjXgHicX%2B6ir3Vv2E4fWkRRpJdw%2BF1VnMQHh%2FKi6MtHWOopwi55McHpzcZnY7gCj30U9swSoNxg7p2azZF%2BZlWvqp0uBsxyDmIcUoOw%2BMtrwCcXdJvYIQzcMt15MHnEyitsQYUIPJCZp8CWgoJmSuzmDAKI%2FhIMafzHWBRl4JhlmW0nbqVemb6wgr2sBEJFSCgsL5soQS3YzLQkc58CdLyr8YgN4pZJIi50fAyhkhahviOKigcglF%2Fi7kWiKNsMMzuOeBZxk4jQkSjJ2bCgP3JhrtsjZsNK97M0kXYHR1%2Fes61ABcwri9J5XzgcVgxDDr5A2dkui78%2FVrXShDceCMCY5A4dXJHX4%2F9Y7j28q0FC76cNTxQuiDNmeIGtJAwd%2F3HWzQBlQw3fSgvgY6pgFiaFX9tHNMgfUHndfwEYmdNXWcApu2A%2BskUjZ%2B88iUVD9CPPoerN8GfnEWpRUhat1SELwEZFbEa7CGk%2Ba5Fz5%2FbRb9C055WzJpxLWyWgiHzzE%2BY5KL8TweOO2l3I%2B88%2BolykLvmLDSg2XFtUy%2Bngz9aGGzQTFJ2xLCk684Al7inxdTMRcmibwW3fG87PbLG4d4jI8Uirv24yXe7hc%2BgmLIAHIIH6MS&X-Amz-Signature=aac50ac4c6a5979ef9de3f98dc9266f108e02005150d28881b305e6c4bc5863c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647Q4X3UA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBifQDEpJmZ5UPyW2tGWbUTNLVEmIqfihvaGE09373UxAiBErDW6oW%2BDXgHzANEei0G58SPM1qnxXPDNDKAAslwMJyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMTpyofg7zN00P%2BdZjKtwD%2BCwgc7ZAahzL%2FvlugWo05RS9jkj8NgE9imPldmWCyebkIWUA%2Fal3ZONNqfx4SuQlM6os7uGD%2FLkwPw%2FuZfevmMxUOmKNM5jrO%2FGo3QXuShZHV75zZtL7TG2ouB8ZynbvtriidmklBJbtHZGECDA3LiIcdMwAqVB5VwnY79wkjiYRFehuG5qmAUH1v8prPprWetNGx6x8Wd4Po5d9p8VH4ZUl5OX5%2FV5fZknSmbmqgunV2d54nHZrjXgHicX%2B6ir3Vv2E4fWkRRpJdw%2BF1VnMQHh%2FKi6MtHWOopwi55McHpzcZnY7gCj30U9swSoNxg7p2azZF%2BZlWvqp0uBsxyDmIcUoOw%2BMtrwCcXdJvYIQzcMt15MHnEyitsQYUIPJCZp8CWgoJmSuzmDAKI%2FhIMafzHWBRl4JhlmW0nbqVemb6wgr2sBEJFSCgsL5soQS3YzLQkc58CdLyr8YgN4pZJIi50fAyhkhahviOKigcglF%2Fi7kWiKNsMMzuOeBZxk4jQkSjJ2bCgP3JhrtsjZsNK97M0kXYHR1%2Fes61ABcwri9J5XzgcVgxDDr5A2dkui78%2FVrXShDceCMCY5A4dXJHX4%2F9Y7j28q0FC76cNTxQuiDNmeIGtJAwd%2F3HWzQBlQw3fSgvgY6pgFiaFX9tHNMgfUHndfwEYmdNXWcApu2A%2BskUjZ%2B88iUVD9CPPoerN8GfnEWpRUhat1SELwEZFbEa7CGk%2Ba5Fz5%2FbRb9C055WzJpxLWyWgiHzzE%2BY5KL8TweOO2l3I%2B88%2BolykLvmLDSg2XFtUy%2Bngz9aGGzQTFJ2xLCk684Al7inxdTMRcmibwW3fG87PbLG4d4jI8Uirv24yXe7hc%2BgmLIAHIIH6MS&X-Amz-Signature=d9e5166d72e18bc6f43e07f3f8ec01f57e1913e429ad7b807f0176f844c93e3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647Q4X3UA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBifQDEpJmZ5UPyW2tGWbUTNLVEmIqfihvaGE09373UxAiBErDW6oW%2BDXgHzANEei0G58SPM1qnxXPDNDKAAslwMJyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMTpyofg7zN00P%2BdZjKtwD%2BCwgc7ZAahzL%2FvlugWo05RS9jkj8NgE9imPldmWCyebkIWUA%2Fal3ZONNqfx4SuQlM6os7uGD%2FLkwPw%2FuZfevmMxUOmKNM5jrO%2FGo3QXuShZHV75zZtL7TG2ouB8ZynbvtriidmklBJbtHZGECDA3LiIcdMwAqVB5VwnY79wkjiYRFehuG5qmAUH1v8prPprWetNGx6x8Wd4Po5d9p8VH4ZUl5OX5%2FV5fZknSmbmqgunV2d54nHZrjXgHicX%2B6ir3Vv2E4fWkRRpJdw%2BF1VnMQHh%2FKi6MtHWOopwi55McHpzcZnY7gCj30U9swSoNxg7p2azZF%2BZlWvqp0uBsxyDmIcUoOw%2BMtrwCcXdJvYIQzcMt15MHnEyitsQYUIPJCZp8CWgoJmSuzmDAKI%2FhIMafzHWBRl4JhlmW0nbqVemb6wgr2sBEJFSCgsL5soQS3YzLQkc58CdLyr8YgN4pZJIi50fAyhkhahviOKigcglF%2Fi7kWiKNsMMzuOeBZxk4jQkSjJ2bCgP3JhrtsjZsNK97M0kXYHR1%2Fes61ABcwri9J5XzgcVgxDDr5A2dkui78%2FVrXShDceCMCY5A4dXJHX4%2F9Y7j28q0FC76cNTxQuiDNmeIGtJAwd%2F3HWzQBlQw3fSgvgY6pgFiaFX9tHNMgfUHndfwEYmdNXWcApu2A%2BskUjZ%2B88iUVD9CPPoerN8GfnEWpRUhat1SELwEZFbEa7CGk%2Ba5Fz5%2FbRb9C055WzJpxLWyWgiHzzE%2BY5KL8TweOO2l3I%2B88%2BolykLvmLDSg2XFtUy%2Bngz9aGGzQTFJ2xLCk684Al7inxdTMRcmibwW3fG87PbLG4d4jI8Uirv24yXe7hc%2BgmLIAHIIH6MS&X-Amz-Signature=edf44096f447c90797af590c9bc94693931c4879934802c097c290c7f1fe2d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647Q4X3UA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBifQDEpJmZ5UPyW2tGWbUTNLVEmIqfihvaGE09373UxAiBErDW6oW%2BDXgHzANEei0G58SPM1qnxXPDNDKAAslwMJyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMTpyofg7zN00P%2BdZjKtwD%2BCwgc7ZAahzL%2FvlugWo05RS9jkj8NgE9imPldmWCyebkIWUA%2Fal3ZONNqfx4SuQlM6os7uGD%2FLkwPw%2FuZfevmMxUOmKNM5jrO%2FGo3QXuShZHV75zZtL7TG2ouB8ZynbvtriidmklBJbtHZGECDA3LiIcdMwAqVB5VwnY79wkjiYRFehuG5qmAUH1v8prPprWetNGx6x8Wd4Po5d9p8VH4ZUl5OX5%2FV5fZknSmbmqgunV2d54nHZrjXgHicX%2B6ir3Vv2E4fWkRRpJdw%2BF1VnMQHh%2FKi6MtHWOopwi55McHpzcZnY7gCj30U9swSoNxg7p2azZF%2BZlWvqp0uBsxyDmIcUoOw%2BMtrwCcXdJvYIQzcMt15MHnEyitsQYUIPJCZp8CWgoJmSuzmDAKI%2FhIMafzHWBRl4JhlmW0nbqVemb6wgr2sBEJFSCgsL5soQS3YzLQkc58CdLyr8YgN4pZJIi50fAyhkhahviOKigcglF%2Fi7kWiKNsMMzuOeBZxk4jQkSjJ2bCgP3JhrtsjZsNK97M0kXYHR1%2Fes61ABcwri9J5XzgcVgxDDr5A2dkui78%2FVrXShDceCMCY5A4dXJHX4%2F9Y7j28q0FC76cNTxQuiDNmeIGtJAwd%2F3HWzQBlQw3fSgvgY6pgFiaFX9tHNMgfUHndfwEYmdNXWcApu2A%2BskUjZ%2B88iUVD9CPPoerN8GfnEWpRUhat1SELwEZFbEa7CGk%2Ba5Fz5%2FbRb9C055WzJpxLWyWgiHzzE%2BY5KL8TweOO2l3I%2B88%2BolykLvmLDSg2XFtUy%2Bngz9aGGzQTFJ2xLCk684Al7inxdTMRcmibwW3fG87PbLG4d4jI8Uirv24yXe7hc%2BgmLIAHIIH6MS&X-Amz-Signature=a88048daa888f48446373a3b453f95fa86babd4a5c9daecb7b513897529541e7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
