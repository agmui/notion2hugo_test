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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AUWTVVC%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FAmQ9eM0mDsQ5YC7FYFniwyyUX3kIW8i2Gpd6S9ELRwIgfNf%2FXT4mt4MMPMCT0s8jULXTpPWaDVlepwub8LWK6hcqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNwykNGhoKcT055KCrcA3M46GziMpFtnnjzUFLC3e9sPpoeN0NN3x0VgQuV4lOrXYFTJ2W4BJvaBI%2FpKLpzL2Sx473BDbksFBbkjluS2GhP5pRyCASCw8sfKsOp4j%2Bvn1uaT3AG%2FuWJ7NhgabPgL1xNKQM%2FqGnLptBZjk7KdXbj6b%2Fx92uE5LHWXQz5FdZ9aa2Y6p4XJBdBnDp3GB8E%2FDWMh9zEdQ68CpSpzHyqOr8IcgZ%2Fe7fvYR0ghgDP91xTSvHRVOH3LNSaHI%2BY6vYu4IBWGJjNWedMofFOELw1MZHJawZJaUXfy1OdAva8IGeWQN5M8HHN6CGr6kfIJyLhDBfxo4BnbAVa9yw7p2ijtrB2sbyhPTe3fjPEDaviX4Fh%2B17LNNW7wJUBmK7nw0dYGL%2BXGUt%2BjvrLpHtN%2BOJhRnloFMog68Gvp7NJVdXJQ8QcWkogd8acHbW7EMVka3puNM2lV2dfiIj6ljjjKuvhBwBe5rYxzl9eMvvV2j0870t2NNMZBjFy9dfJK6ROCXTaC9kkqHBeQyFHaQQae8bVD%2FCjJTdatuCdBcTNjVjn4thx%2FL1EYNFYZOVqsMkQOyVjnSHQ9o%2FkOG5DxOdR972fn%2BkLd09%2BjoWVp1gpqIVben4Ke1JDy%2FzQMimEzqTmMPf8yMMGOqUB1mI%2Ba%2F3sdZpHInC3sA75g8f1kjDnTdLWQA3wiNI8hA7mx6kFBZFR8qwa4v%2BeM3x1JzkC5AfmFCvRsA11wRBYn%2FpX06paIJ67p6gdM7NdZWuxAzrFoy%2FZhT%2FEOkoJiJF8Znj7U%2FDREDU6vBBPxEA7dkFbl5XPDAtLQVqUFdy%2BWmMf9q60NbWLJQi78pgLAmqLQwBN2JsFsBr%2BPK1%2BHya57amG2KPq&X-Amz-Signature=74a28e87ecda52a26265f8241e242c9f27f331f1ed72b79478d70ff44012c7e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AUWTVVC%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FAmQ9eM0mDsQ5YC7FYFniwyyUX3kIW8i2Gpd6S9ELRwIgfNf%2FXT4mt4MMPMCT0s8jULXTpPWaDVlepwub8LWK6hcqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNwykNGhoKcT055KCrcA3M46GziMpFtnnjzUFLC3e9sPpoeN0NN3x0VgQuV4lOrXYFTJ2W4BJvaBI%2FpKLpzL2Sx473BDbksFBbkjluS2GhP5pRyCASCw8sfKsOp4j%2Bvn1uaT3AG%2FuWJ7NhgabPgL1xNKQM%2FqGnLptBZjk7KdXbj6b%2Fx92uE5LHWXQz5FdZ9aa2Y6p4XJBdBnDp3GB8E%2FDWMh9zEdQ68CpSpzHyqOr8IcgZ%2Fe7fvYR0ghgDP91xTSvHRVOH3LNSaHI%2BY6vYu4IBWGJjNWedMofFOELw1MZHJawZJaUXfy1OdAva8IGeWQN5M8HHN6CGr6kfIJyLhDBfxo4BnbAVa9yw7p2ijtrB2sbyhPTe3fjPEDaviX4Fh%2B17LNNW7wJUBmK7nw0dYGL%2BXGUt%2BjvrLpHtN%2BOJhRnloFMog68Gvp7NJVdXJQ8QcWkogd8acHbW7EMVka3puNM2lV2dfiIj6ljjjKuvhBwBe5rYxzl9eMvvV2j0870t2NNMZBjFy9dfJK6ROCXTaC9kkqHBeQyFHaQQae8bVD%2FCjJTdatuCdBcTNjVjn4thx%2FL1EYNFYZOVqsMkQOyVjnSHQ9o%2FkOG5DxOdR972fn%2BkLd09%2BjoWVp1gpqIVben4Ke1JDy%2FzQMimEzqTmMPf8yMMGOqUB1mI%2Ba%2F3sdZpHInC3sA75g8f1kjDnTdLWQA3wiNI8hA7mx6kFBZFR8qwa4v%2BeM3x1JzkC5AfmFCvRsA11wRBYn%2FpX06paIJ67p6gdM7NdZWuxAzrFoy%2FZhT%2FEOkoJiJF8Znj7U%2FDREDU6vBBPxEA7dkFbl5XPDAtLQVqUFdy%2BWmMf9q60NbWLJQi78pgLAmqLQwBN2JsFsBr%2BPK1%2BHya57amG2KPq&X-Amz-Signature=ff2a95fd03085f107412caf2d2da641be6af8f1080b734ee6dc73b3a5427b6cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AUWTVVC%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FAmQ9eM0mDsQ5YC7FYFniwyyUX3kIW8i2Gpd6S9ELRwIgfNf%2FXT4mt4MMPMCT0s8jULXTpPWaDVlepwub8LWK6hcqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNwykNGhoKcT055KCrcA3M46GziMpFtnnjzUFLC3e9sPpoeN0NN3x0VgQuV4lOrXYFTJ2W4BJvaBI%2FpKLpzL2Sx473BDbksFBbkjluS2GhP5pRyCASCw8sfKsOp4j%2Bvn1uaT3AG%2FuWJ7NhgabPgL1xNKQM%2FqGnLptBZjk7KdXbj6b%2Fx92uE5LHWXQz5FdZ9aa2Y6p4XJBdBnDp3GB8E%2FDWMh9zEdQ68CpSpzHyqOr8IcgZ%2Fe7fvYR0ghgDP91xTSvHRVOH3LNSaHI%2BY6vYu4IBWGJjNWedMofFOELw1MZHJawZJaUXfy1OdAva8IGeWQN5M8HHN6CGr6kfIJyLhDBfxo4BnbAVa9yw7p2ijtrB2sbyhPTe3fjPEDaviX4Fh%2B17LNNW7wJUBmK7nw0dYGL%2BXGUt%2BjvrLpHtN%2BOJhRnloFMog68Gvp7NJVdXJQ8QcWkogd8acHbW7EMVka3puNM2lV2dfiIj6ljjjKuvhBwBe5rYxzl9eMvvV2j0870t2NNMZBjFy9dfJK6ROCXTaC9kkqHBeQyFHaQQae8bVD%2FCjJTdatuCdBcTNjVjn4thx%2FL1EYNFYZOVqsMkQOyVjnSHQ9o%2FkOG5DxOdR972fn%2BkLd09%2BjoWVp1gpqIVben4Ke1JDy%2FzQMimEzqTmMPf8yMMGOqUB1mI%2Ba%2F3sdZpHInC3sA75g8f1kjDnTdLWQA3wiNI8hA7mx6kFBZFR8qwa4v%2BeM3x1JzkC5AfmFCvRsA11wRBYn%2FpX06paIJ67p6gdM7NdZWuxAzrFoy%2FZhT%2FEOkoJiJF8Znj7U%2FDREDU6vBBPxEA7dkFbl5XPDAtLQVqUFdy%2BWmMf9q60NbWLJQi78pgLAmqLQwBN2JsFsBr%2BPK1%2BHya57amG2KPq&X-Amz-Signature=5d3e5ffd46b054ea0322acb89057fa3066309e6035dbd4516f4167a28b67b0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AUWTVVC%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FAmQ9eM0mDsQ5YC7FYFniwyyUX3kIW8i2Gpd6S9ELRwIgfNf%2FXT4mt4MMPMCT0s8jULXTpPWaDVlepwub8LWK6hcqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNwykNGhoKcT055KCrcA3M46GziMpFtnnjzUFLC3e9sPpoeN0NN3x0VgQuV4lOrXYFTJ2W4BJvaBI%2FpKLpzL2Sx473BDbksFBbkjluS2GhP5pRyCASCw8sfKsOp4j%2Bvn1uaT3AG%2FuWJ7NhgabPgL1xNKQM%2FqGnLptBZjk7KdXbj6b%2Fx92uE5LHWXQz5FdZ9aa2Y6p4XJBdBnDp3GB8E%2FDWMh9zEdQ68CpSpzHyqOr8IcgZ%2Fe7fvYR0ghgDP91xTSvHRVOH3LNSaHI%2BY6vYu4IBWGJjNWedMofFOELw1MZHJawZJaUXfy1OdAva8IGeWQN5M8HHN6CGr6kfIJyLhDBfxo4BnbAVa9yw7p2ijtrB2sbyhPTe3fjPEDaviX4Fh%2B17LNNW7wJUBmK7nw0dYGL%2BXGUt%2BjvrLpHtN%2BOJhRnloFMog68Gvp7NJVdXJQ8QcWkogd8acHbW7EMVka3puNM2lV2dfiIj6ljjjKuvhBwBe5rYxzl9eMvvV2j0870t2NNMZBjFy9dfJK6ROCXTaC9kkqHBeQyFHaQQae8bVD%2FCjJTdatuCdBcTNjVjn4thx%2FL1EYNFYZOVqsMkQOyVjnSHQ9o%2FkOG5DxOdR972fn%2BkLd09%2BjoWVp1gpqIVben4Ke1JDy%2FzQMimEzqTmMPf8yMMGOqUB1mI%2Ba%2F3sdZpHInC3sA75g8f1kjDnTdLWQA3wiNI8hA7mx6kFBZFR8qwa4v%2BeM3x1JzkC5AfmFCvRsA11wRBYn%2FpX06paIJ67p6gdM7NdZWuxAzrFoy%2FZhT%2FEOkoJiJF8Znj7U%2FDREDU6vBBPxEA7dkFbl5XPDAtLQVqUFdy%2BWmMf9q60NbWLJQi78pgLAmqLQwBN2JsFsBr%2BPK1%2BHya57amG2KPq&X-Amz-Signature=2496053c773eaf54e59378807825860f2c6a2949a640241d5ec7098173354772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AUWTVVC%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FAmQ9eM0mDsQ5YC7FYFniwyyUX3kIW8i2Gpd6S9ELRwIgfNf%2FXT4mt4MMPMCT0s8jULXTpPWaDVlepwub8LWK6hcqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNwykNGhoKcT055KCrcA3M46GziMpFtnnjzUFLC3e9sPpoeN0NN3x0VgQuV4lOrXYFTJ2W4BJvaBI%2FpKLpzL2Sx473BDbksFBbkjluS2GhP5pRyCASCw8sfKsOp4j%2Bvn1uaT3AG%2FuWJ7NhgabPgL1xNKQM%2FqGnLptBZjk7KdXbj6b%2Fx92uE5LHWXQz5FdZ9aa2Y6p4XJBdBnDp3GB8E%2FDWMh9zEdQ68CpSpzHyqOr8IcgZ%2Fe7fvYR0ghgDP91xTSvHRVOH3LNSaHI%2BY6vYu4IBWGJjNWedMofFOELw1MZHJawZJaUXfy1OdAva8IGeWQN5M8HHN6CGr6kfIJyLhDBfxo4BnbAVa9yw7p2ijtrB2sbyhPTe3fjPEDaviX4Fh%2B17LNNW7wJUBmK7nw0dYGL%2BXGUt%2BjvrLpHtN%2BOJhRnloFMog68Gvp7NJVdXJQ8QcWkogd8acHbW7EMVka3puNM2lV2dfiIj6ljjjKuvhBwBe5rYxzl9eMvvV2j0870t2NNMZBjFy9dfJK6ROCXTaC9kkqHBeQyFHaQQae8bVD%2FCjJTdatuCdBcTNjVjn4thx%2FL1EYNFYZOVqsMkQOyVjnSHQ9o%2FkOG5DxOdR972fn%2BkLd09%2BjoWVp1gpqIVben4Ke1JDy%2FzQMimEzqTmMPf8yMMGOqUB1mI%2Ba%2F3sdZpHInC3sA75g8f1kjDnTdLWQA3wiNI8hA7mx6kFBZFR8qwa4v%2BeM3x1JzkC5AfmFCvRsA11wRBYn%2FpX06paIJ67p6gdM7NdZWuxAzrFoy%2FZhT%2FEOkoJiJF8Znj7U%2FDREDU6vBBPxEA7dkFbl5XPDAtLQVqUFdy%2BWmMf9q60NbWLJQi78pgLAmqLQwBN2JsFsBr%2BPK1%2BHya57amG2KPq&X-Amz-Signature=607e8d7ef4a123718cf5f3008a6d0c7011d94aebd3e7a8458eaae497802579b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
