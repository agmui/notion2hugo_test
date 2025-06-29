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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZVBXMRJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3YNwJH1uOmYHnKEE%2FELGyl0PxWOLSUCYaRUtNDK2eEAiEAry3ZZnWks2HP6zVrN%2BLMJaMmcVibK0zfWDJmTe4H9JIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBU7RrCr6Yaf4Au%2FRyrcA%2BTuUvYqzRGCK4LoDURcKyfXDJF5or37BGGHbr6dqaAy3M5c%2F7DND4q71IA1j4CTsLlTefm%2Bwm%2FB1%2BzzRfU584L5QeMAb3t3YFM90HLbzkeqBlAoX3sXVSfcft%2FUD410W2xEGGI1o0mqPNsFhNyl7PVCRwsbRICp9A1HUHyP%2FLvyBznq%2FGwDlxP%2BnNc%2FYoj5jsraKPj%2F6iSNYaKq4dao2oYLYkzP0YmE6FmkVSmyZ2JtnOJZtpE1Wv2nJQPeueN2gl%2F%2FsHmscFazGM%2FDYHAIH6gTaOaXgDy9gQEE130TXGFhcQUpyvzfgR9%2FRoWqxhjNd7M2pE%2FDd8ekyJx%2B5bjLzsk%2FNNFxVDg66M%2FQvfOWpZ06ayngekLR5kNLja482W%2F1mHUd7JR%2B7o%2F%2Bgpa6YnevwQu5Xgq1Y114tUlo8dyN4nq5SEbNKDUF1Ojm5LkmJuqLzgDYGStT8F0OPxlm3nWYXeoYzZd%2Bpr%2F1x3sQ4yOe4uTZAuqyeGHmD7gETq47Z9Nl52LVBmLKdUTUjo7OBsUkO%2BB4cUFQmr6REZsNQqjCrmVMZb0o4Tuu0pVlh%2FqPDMt47M3%2BUPY1%2FCi0HZyYVm7SCVidT0iKCN6bWU19y%2FCZ%2FDm17xKxgGER%2FXyS3ASOMI%2F1gMMGOqUBBA1WXawTbyOUd%2BkX8AXf5EBTvLW9gsIVBGfoedZeMNgDkI6EopgAuBvxt2WaCVx6TPJhioeN4%2BgYQgO8AyULq4ec1ugJsIhT%2BMty4Aj2Su82QSPIQWImX4Mal8vvhDiY%2BB0KCqe4cGgpXetSazWzzbp3eD5Df0ENP%2BduTx3iB2Aqd9LfFiKgHaSW1p8Y9WgD3idIYxLfGYmP31ci7S1PfFzy4pMP&X-Amz-Signature=8d07fe678557cbe29c6a5b0f79abba3dd16cad8fd2704c239f7454644e84ae95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZVBXMRJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3YNwJH1uOmYHnKEE%2FELGyl0PxWOLSUCYaRUtNDK2eEAiEAry3ZZnWks2HP6zVrN%2BLMJaMmcVibK0zfWDJmTe4H9JIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBU7RrCr6Yaf4Au%2FRyrcA%2BTuUvYqzRGCK4LoDURcKyfXDJF5or37BGGHbr6dqaAy3M5c%2F7DND4q71IA1j4CTsLlTefm%2Bwm%2FB1%2BzzRfU584L5QeMAb3t3YFM90HLbzkeqBlAoX3sXVSfcft%2FUD410W2xEGGI1o0mqPNsFhNyl7PVCRwsbRICp9A1HUHyP%2FLvyBznq%2FGwDlxP%2BnNc%2FYoj5jsraKPj%2F6iSNYaKq4dao2oYLYkzP0YmE6FmkVSmyZ2JtnOJZtpE1Wv2nJQPeueN2gl%2F%2FsHmscFazGM%2FDYHAIH6gTaOaXgDy9gQEE130TXGFhcQUpyvzfgR9%2FRoWqxhjNd7M2pE%2FDd8ekyJx%2B5bjLzsk%2FNNFxVDg66M%2FQvfOWpZ06ayngekLR5kNLja482W%2F1mHUd7JR%2B7o%2F%2Bgpa6YnevwQu5Xgq1Y114tUlo8dyN4nq5SEbNKDUF1Ojm5LkmJuqLzgDYGStT8F0OPxlm3nWYXeoYzZd%2Bpr%2F1x3sQ4yOe4uTZAuqyeGHmD7gETq47Z9Nl52LVBmLKdUTUjo7OBsUkO%2BB4cUFQmr6REZsNQqjCrmVMZb0o4Tuu0pVlh%2FqPDMt47M3%2BUPY1%2FCi0HZyYVm7SCVidT0iKCN6bWU19y%2FCZ%2FDm17xKxgGER%2FXyS3ASOMI%2F1gMMGOqUBBA1WXawTbyOUd%2BkX8AXf5EBTvLW9gsIVBGfoedZeMNgDkI6EopgAuBvxt2WaCVx6TPJhioeN4%2BgYQgO8AyULq4ec1ugJsIhT%2BMty4Aj2Su82QSPIQWImX4Mal8vvhDiY%2BB0KCqe4cGgpXetSazWzzbp3eD5Df0ENP%2BduTx3iB2Aqd9LfFiKgHaSW1p8Y9WgD3idIYxLfGYmP31ci7S1PfFzy4pMP&X-Amz-Signature=4d2adc38e8ab3587560d8a617411fc4b8221495b418e73a91c3d1192d0ba6fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZVBXMRJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3YNwJH1uOmYHnKEE%2FELGyl0PxWOLSUCYaRUtNDK2eEAiEAry3ZZnWks2HP6zVrN%2BLMJaMmcVibK0zfWDJmTe4H9JIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBU7RrCr6Yaf4Au%2FRyrcA%2BTuUvYqzRGCK4LoDURcKyfXDJF5or37BGGHbr6dqaAy3M5c%2F7DND4q71IA1j4CTsLlTefm%2Bwm%2FB1%2BzzRfU584L5QeMAb3t3YFM90HLbzkeqBlAoX3sXVSfcft%2FUD410W2xEGGI1o0mqPNsFhNyl7PVCRwsbRICp9A1HUHyP%2FLvyBznq%2FGwDlxP%2BnNc%2FYoj5jsraKPj%2F6iSNYaKq4dao2oYLYkzP0YmE6FmkVSmyZ2JtnOJZtpE1Wv2nJQPeueN2gl%2F%2FsHmscFazGM%2FDYHAIH6gTaOaXgDy9gQEE130TXGFhcQUpyvzfgR9%2FRoWqxhjNd7M2pE%2FDd8ekyJx%2B5bjLzsk%2FNNFxVDg66M%2FQvfOWpZ06ayngekLR5kNLja482W%2F1mHUd7JR%2B7o%2F%2Bgpa6YnevwQu5Xgq1Y114tUlo8dyN4nq5SEbNKDUF1Ojm5LkmJuqLzgDYGStT8F0OPxlm3nWYXeoYzZd%2Bpr%2F1x3sQ4yOe4uTZAuqyeGHmD7gETq47Z9Nl52LVBmLKdUTUjo7OBsUkO%2BB4cUFQmr6REZsNQqjCrmVMZb0o4Tuu0pVlh%2FqPDMt47M3%2BUPY1%2FCi0HZyYVm7SCVidT0iKCN6bWU19y%2FCZ%2FDm17xKxgGER%2FXyS3ASOMI%2F1gMMGOqUBBA1WXawTbyOUd%2BkX8AXf5EBTvLW9gsIVBGfoedZeMNgDkI6EopgAuBvxt2WaCVx6TPJhioeN4%2BgYQgO8AyULq4ec1ugJsIhT%2BMty4Aj2Su82QSPIQWImX4Mal8vvhDiY%2BB0KCqe4cGgpXetSazWzzbp3eD5Df0ENP%2BduTx3iB2Aqd9LfFiKgHaSW1p8Y9WgD3idIYxLfGYmP31ci7S1PfFzy4pMP&X-Amz-Signature=9030aa243b54b0c86244885ab78ecc3c0e06bcf66321b4f56dc4f52b23cb103e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZVBXMRJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3YNwJH1uOmYHnKEE%2FELGyl0PxWOLSUCYaRUtNDK2eEAiEAry3ZZnWks2HP6zVrN%2BLMJaMmcVibK0zfWDJmTe4H9JIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBU7RrCr6Yaf4Au%2FRyrcA%2BTuUvYqzRGCK4LoDURcKyfXDJF5or37BGGHbr6dqaAy3M5c%2F7DND4q71IA1j4CTsLlTefm%2Bwm%2FB1%2BzzRfU584L5QeMAb3t3YFM90HLbzkeqBlAoX3sXVSfcft%2FUD410W2xEGGI1o0mqPNsFhNyl7PVCRwsbRICp9A1HUHyP%2FLvyBznq%2FGwDlxP%2BnNc%2FYoj5jsraKPj%2F6iSNYaKq4dao2oYLYkzP0YmE6FmkVSmyZ2JtnOJZtpE1Wv2nJQPeueN2gl%2F%2FsHmscFazGM%2FDYHAIH6gTaOaXgDy9gQEE130TXGFhcQUpyvzfgR9%2FRoWqxhjNd7M2pE%2FDd8ekyJx%2B5bjLzsk%2FNNFxVDg66M%2FQvfOWpZ06ayngekLR5kNLja482W%2F1mHUd7JR%2B7o%2F%2Bgpa6YnevwQu5Xgq1Y114tUlo8dyN4nq5SEbNKDUF1Ojm5LkmJuqLzgDYGStT8F0OPxlm3nWYXeoYzZd%2Bpr%2F1x3sQ4yOe4uTZAuqyeGHmD7gETq47Z9Nl52LVBmLKdUTUjo7OBsUkO%2BB4cUFQmr6REZsNQqjCrmVMZb0o4Tuu0pVlh%2FqPDMt47M3%2BUPY1%2FCi0HZyYVm7SCVidT0iKCN6bWU19y%2FCZ%2FDm17xKxgGER%2FXyS3ASOMI%2F1gMMGOqUBBA1WXawTbyOUd%2BkX8AXf5EBTvLW9gsIVBGfoedZeMNgDkI6EopgAuBvxt2WaCVx6TPJhioeN4%2BgYQgO8AyULq4ec1ugJsIhT%2BMty4Aj2Su82QSPIQWImX4Mal8vvhDiY%2BB0KCqe4cGgpXetSazWzzbp3eD5Df0ENP%2BduTx3iB2Aqd9LfFiKgHaSW1p8Y9WgD3idIYxLfGYmP31ci7S1PfFzy4pMP&X-Amz-Signature=53fb48c526baa1e6026890f17b863c42135447d36dfbaa6d58965bab3ec610c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZVBXMRJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3YNwJH1uOmYHnKEE%2FELGyl0PxWOLSUCYaRUtNDK2eEAiEAry3ZZnWks2HP6zVrN%2BLMJaMmcVibK0zfWDJmTe4H9JIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBU7RrCr6Yaf4Au%2FRyrcA%2BTuUvYqzRGCK4LoDURcKyfXDJF5or37BGGHbr6dqaAy3M5c%2F7DND4q71IA1j4CTsLlTefm%2Bwm%2FB1%2BzzRfU584L5QeMAb3t3YFM90HLbzkeqBlAoX3sXVSfcft%2FUD410W2xEGGI1o0mqPNsFhNyl7PVCRwsbRICp9A1HUHyP%2FLvyBznq%2FGwDlxP%2BnNc%2FYoj5jsraKPj%2F6iSNYaKq4dao2oYLYkzP0YmE6FmkVSmyZ2JtnOJZtpE1Wv2nJQPeueN2gl%2F%2FsHmscFazGM%2FDYHAIH6gTaOaXgDy9gQEE130TXGFhcQUpyvzfgR9%2FRoWqxhjNd7M2pE%2FDd8ekyJx%2B5bjLzsk%2FNNFxVDg66M%2FQvfOWpZ06ayngekLR5kNLja482W%2F1mHUd7JR%2B7o%2F%2Bgpa6YnevwQu5Xgq1Y114tUlo8dyN4nq5SEbNKDUF1Ojm5LkmJuqLzgDYGStT8F0OPxlm3nWYXeoYzZd%2Bpr%2F1x3sQ4yOe4uTZAuqyeGHmD7gETq47Z9Nl52LVBmLKdUTUjo7OBsUkO%2BB4cUFQmr6REZsNQqjCrmVMZb0o4Tuu0pVlh%2FqPDMt47M3%2BUPY1%2FCi0HZyYVm7SCVidT0iKCN6bWU19y%2FCZ%2FDm17xKxgGER%2FXyS3ASOMI%2F1gMMGOqUBBA1WXawTbyOUd%2BkX8AXf5EBTvLW9gsIVBGfoedZeMNgDkI6EopgAuBvxt2WaCVx6TPJhioeN4%2BgYQgO8AyULq4ec1ugJsIhT%2BMty4Aj2Su82QSPIQWImX4Mal8vvhDiY%2BB0KCqe4cGgpXetSazWzzbp3eD5Df0ENP%2BduTx3iB2Aqd9LfFiKgHaSW1p8Y9WgD3idIYxLfGYmP31ci7S1PfFzy4pMP&X-Amz-Signature=f9e2ffd9fa506712c0ecd3fc5c55b260a2922bbfe841b9a627ffc677053b19e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
