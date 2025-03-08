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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKLEX2YB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD%2FSKXFUZOZtQAqcP6ao%2BH%2FMy0PtNEUCN0r6s6a%2FYwV6wIgOFH647LkT2qlI1VocN85nV2hzE2dLFEIRutZXPRVONsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDw2zn5ZBO27dIoMaCrcAx6nu1BT8iHCgvzSgd%2F404UOF2Lhjz65Jt3GNd8%2B7YHkFA9W%2BiByaoQLaJOfh8K%2Blrx4BgBZgMuxl%2Fq772yFO4N0%2BX1npGQdHwQFpfMT%2BaiQdNuzC28p0x2pnAONavrJN0TOgO14xtfpkz87s%2FfRV26PXF7ntU30h7TdUVNeNzyI4tiqiH9EL3f3rpcCL3h2acopQ0FMyGK0VX5SP7ER5dyQS9KbkNjLoZKJrLZ%2FJOsX28md3otoEyMb6iKAOiP7fsM3VYQW%2BiLp47OE2krTIH%2Fv6RsklZfY%2Bscjwl9Ex1%2FuWvsJT9EMtZQ8tdzbVG7OqC9b1r1f%2BtstIdkTBuaIDnqjTv3bPndFE9xUNP%2BqQ3rSYfz5mHqxmvtOunKheG4IPM0Dr72UjTAd%2BXaKfC%2B3x9PjNIfmAwLPL8ouUxpOq2PVmt2sWiMlFPehD5dIc6A4DDV%2BhsWw6S27KbPjEa95inYxU6t2so8l9CQ2w9pt4wuDQ%2Fpw4xWhS7KOMIWDuhNL24z9xyEph8tkFAIBBvA3LAWfTVOFTkAgY%2Bh9Lmu9g9zwWXbmPpFZxwkaFEa3Yvl18TAwEjUTgobEYLGJKVUEQa5UElY0JPhxa7mi47gTW0MVAxZJw9%2B%2BSu%2BvKybeMMHUsb4GOqUBDBZrmDqDjyIUOOSobm%2BXeEUf6IrnzBpXMF9lIbW7QP7A%2BnpjS8PTc4Iil3j2uqhB1Gr8mt4WvE%2Fm3isVYxQdB8DeviI1Jfpay6rVr7h%2FcSHvvfu7baS01LGdAamdlMtJk1xeJgDgeodhH%2FXRcZ3MXOnqXdK4bU71ksIel%2F3StRo72uGEHu%2B%2FrrQcLWT4j3MPryuPupA5BLi9nIIBU4Tv1h1F6VTs&X-Amz-Signature=243765fde592f776ba7d5cbb3d7a4895b06c394624e63631d1eaaf55f956d40d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKLEX2YB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD%2FSKXFUZOZtQAqcP6ao%2BH%2FMy0PtNEUCN0r6s6a%2FYwV6wIgOFH647LkT2qlI1VocN85nV2hzE2dLFEIRutZXPRVONsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDw2zn5ZBO27dIoMaCrcAx6nu1BT8iHCgvzSgd%2F404UOF2Lhjz65Jt3GNd8%2B7YHkFA9W%2BiByaoQLaJOfh8K%2Blrx4BgBZgMuxl%2Fq772yFO4N0%2BX1npGQdHwQFpfMT%2BaiQdNuzC28p0x2pnAONavrJN0TOgO14xtfpkz87s%2FfRV26PXF7ntU30h7TdUVNeNzyI4tiqiH9EL3f3rpcCL3h2acopQ0FMyGK0VX5SP7ER5dyQS9KbkNjLoZKJrLZ%2FJOsX28md3otoEyMb6iKAOiP7fsM3VYQW%2BiLp47OE2krTIH%2Fv6RsklZfY%2Bscjwl9Ex1%2FuWvsJT9EMtZQ8tdzbVG7OqC9b1r1f%2BtstIdkTBuaIDnqjTv3bPndFE9xUNP%2BqQ3rSYfz5mHqxmvtOunKheG4IPM0Dr72UjTAd%2BXaKfC%2B3x9PjNIfmAwLPL8ouUxpOq2PVmt2sWiMlFPehD5dIc6A4DDV%2BhsWw6S27KbPjEa95inYxU6t2so8l9CQ2w9pt4wuDQ%2Fpw4xWhS7KOMIWDuhNL24z9xyEph8tkFAIBBvA3LAWfTVOFTkAgY%2Bh9Lmu9g9zwWXbmPpFZxwkaFEa3Yvl18TAwEjUTgobEYLGJKVUEQa5UElY0JPhxa7mi47gTW0MVAxZJw9%2B%2BSu%2BvKybeMMHUsb4GOqUBDBZrmDqDjyIUOOSobm%2BXeEUf6IrnzBpXMF9lIbW7QP7A%2BnpjS8PTc4Iil3j2uqhB1Gr8mt4WvE%2Fm3isVYxQdB8DeviI1Jfpay6rVr7h%2FcSHvvfu7baS01LGdAamdlMtJk1xeJgDgeodhH%2FXRcZ3MXOnqXdK4bU71ksIel%2F3StRo72uGEHu%2B%2FrrQcLWT4j3MPryuPupA5BLi9nIIBU4Tv1h1F6VTs&X-Amz-Signature=443d7d4b8dde3624608e2d3a0bf6c24f87b541302be90e69de43b8cb1c5f501f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKLEX2YB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD%2FSKXFUZOZtQAqcP6ao%2BH%2FMy0PtNEUCN0r6s6a%2FYwV6wIgOFH647LkT2qlI1VocN85nV2hzE2dLFEIRutZXPRVONsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDw2zn5ZBO27dIoMaCrcAx6nu1BT8iHCgvzSgd%2F404UOF2Lhjz65Jt3GNd8%2B7YHkFA9W%2BiByaoQLaJOfh8K%2Blrx4BgBZgMuxl%2Fq772yFO4N0%2BX1npGQdHwQFpfMT%2BaiQdNuzC28p0x2pnAONavrJN0TOgO14xtfpkz87s%2FfRV26PXF7ntU30h7TdUVNeNzyI4tiqiH9EL3f3rpcCL3h2acopQ0FMyGK0VX5SP7ER5dyQS9KbkNjLoZKJrLZ%2FJOsX28md3otoEyMb6iKAOiP7fsM3VYQW%2BiLp47OE2krTIH%2Fv6RsklZfY%2Bscjwl9Ex1%2FuWvsJT9EMtZQ8tdzbVG7OqC9b1r1f%2BtstIdkTBuaIDnqjTv3bPndFE9xUNP%2BqQ3rSYfz5mHqxmvtOunKheG4IPM0Dr72UjTAd%2BXaKfC%2B3x9PjNIfmAwLPL8ouUxpOq2PVmt2sWiMlFPehD5dIc6A4DDV%2BhsWw6S27KbPjEa95inYxU6t2so8l9CQ2w9pt4wuDQ%2Fpw4xWhS7KOMIWDuhNL24z9xyEph8tkFAIBBvA3LAWfTVOFTkAgY%2Bh9Lmu9g9zwWXbmPpFZxwkaFEa3Yvl18TAwEjUTgobEYLGJKVUEQa5UElY0JPhxa7mi47gTW0MVAxZJw9%2B%2BSu%2BvKybeMMHUsb4GOqUBDBZrmDqDjyIUOOSobm%2BXeEUf6IrnzBpXMF9lIbW7QP7A%2BnpjS8PTc4Iil3j2uqhB1Gr8mt4WvE%2Fm3isVYxQdB8DeviI1Jfpay6rVr7h%2FcSHvvfu7baS01LGdAamdlMtJk1xeJgDgeodhH%2FXRcZ3MXOnqXdK4bU71ksIel%2F3StRo72uGEHu%2B%2FrrQcLWT4j3MPryuPupA5BLi9nIIBU4Tv1h1F6VTs&X-Amz-Signature=db54760ab7de040b4ca06d491a5966cadd30a9004c547d16bb70f8d2c7d39298&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKLEX2YB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD%2FSKXFUZOZtQAqcP6ao%2BH%2FMy0PtNEUCN0r6s6a%2FYwV6wIgOFH647LkT2qlI1VocN85nV2hzE2dLFEIRutZXPRVONsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDw2zn5ZBO27dIoMaCrcAx6nu1BT8iHCgvzSgd%2F404UOF2Lhjz65Jt3GNd8%2B7YHkFA9W%2BiByaoQLaJOfh8K%2Blrx4BgBZgMuxl%2Fq772yFO4N0%2BX1npGQdHwQFpfMT%2BaiQdNuzC28p0x2pnAONavrJN0TOgO14xtfpkz87s%2FfRV26PXF7ntU30h7TdUVNeNzyI4tiqiH9EL3f3rpcCL3h2acopQ0FMyGK0VX5SP7ER5dyQS9KbkNjLoZKJrLZ%2FJOsX28md3otoEyMb6iKAOiP7fsM3VYQW%2BiLp47OE2krTIH%2Fv6RsklZfY%2Bscjwl9Ex1%2FuWvsJT9EMtZQ8tdzbVG7OqC9b1r1f%2BtstIdkTBuaIDnqjTv3bPndFE9xUNP%2BqQ3rSYfz5mHqxmvtOunKheG4IPM0Dr72UjTAd%2BXaKfC%2B3x9PjNIfmAwLPL8ouUxpOq2PVmt2sWiMlFPehD5dIc6A4DDV%2BhsWw6S27KbPjEa95inYxU6t2so8l9CQ2w9pt4wuDQ%2Fpw4xWhS7KOMIWDuhNL24z9xyEph8tkFAIBBvA3LAWfTVOFTkAgY%2Bh9Lmu9g9zwWXbmPpFZxwkaFEa3Yvl18TAwEjUTgobEYLGJKVUEQa5UElY0JPhxa7mi47gTW0MVAxZJw9%2B%2BSu%2BvKybeMMHUsb4GOqUBDBZrmDqDjyIUOOSobm%2BXeEUf6IrnzBpXMF9lIbW7QP7A%2BnpjS8PTc4Iil3j2uqhB1Gr8mt4WvE%2Fm3isVYxQdB8DeviI1Jfpay6rVr7h%2FcSHvvfu7baS01LGdAamdlMtJk1xeJgDgeodhH%2FXRcZ3MXOnqXdK4bU71ksIel%2F3StRo72uGEHu%2B%2FrrQcLWT4j3MPryuPupA5BLi9nIIBU4Tv1h1F6VTs&X-Amz-Signature=758ba02cb99f3c4f522a48a843aefa1671b2ecc68f7aa59932fd935efdd67e68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKLEX2YB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD%2FSKXFUZOZtQAqcP6ao%2BH%2FMy0PtNEUCN0r6s6a%2FYwV6wIgOFH647LkT2qlI1VocN85nV2hzE2dLFEIRutZXPRVONsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDw2zn5ZBO27dIoMaCrcAx6nu1BT8iHCgvzSgd%2F404UOF2Lhjz65Jt3GNd8%2B7YHkFA9W%2BiByaoQLaJOfh8K%2Blrx4BgBZgMuxl%2Fq772yFO4N0%2BX1npGQdHwQFpfMT%2BaiQdNuzC28p0x2pnAONavrJN0TOgO14xtfpkz87s%2FfRV26PXF7ntU30h7TdUVNeNzyI4tiqiH9EL3f3rpcCL3h2acopQ0FMyGK0VX5SP7ER5dyQS9KbkNjLoZKJrLZ%2FJOsX28md3otoEyMb6iKAOiP7fsM3VYQW%2BiLp47OE2krTIH%2Fv6RsklZfY%2Bscjwl9Ex1%2FuWvsJT9EMtZQ8tdzbVG7OqC9b1r1f%2BtstIdkTBuaIDnqjTv3bPndFE9xUNP%2BqQ3rSYfz5mHqxmvtOunKheG4IPM0Dr72UjTAd%2BXaKfC%2B3x9PjNIfmAwLPL8ouUxpOq2PVmt2sWiMlFPehD5dIc6A4DDV%2BhsWw6S27KbPjEa95inYxU6t2so8l9CQ2w9pt4wuDQ%2Fpw4xWhS7KOMIWDuhNL24z9xyEph8tkFAIBBvA3LAWfTVOFTkAgY%2Bh9Lmu9g9zwWXbmPpFZxwkaFEa3Yvl18TAwEjUTgobEYLGJKVUEQa5UElY0JPhxa7mi47gTW0MVAxZJw9%2B%2BSu%2BvKybeMMHUsb4GOqUBDBZrmDqDjyIUOOSobm%2BXeEUf6IrnzBpXMF9lIbW7QP7A%2BnpjS8PTc4Iil3j2uqhB1Gr8mt4WvE%2Fm3isVYxQdB8DeviI1Jfpay6rVr7h%2FcSHvvfu7baS01LGdAamdlMtJk1xeJgDgeodhH%2FXRcZ3MXOnqXdK4bU71ksIel%2F3StRo72uGEHu%2B%2FrrQcLWT4j3MPryuPupA5BLi9nIIBU4Tv1h1F6VTs&X-Amz-Signature=05de0ec1e8b7a822412187163fab544c59bc78699fae032e941d6ea20ae8188e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
