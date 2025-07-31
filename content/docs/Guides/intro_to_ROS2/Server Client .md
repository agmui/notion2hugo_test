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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3YFTAFF%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFG81D3YDuloSmKpRg8w7j2U%2BPkpn%2F9Pi0ChY19jl2DwAiAI4dSyCFc1s%2Br72aH2XrmHZ2YH1bPZNkL1IhaixzrVtiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKDnd%2Bq03Sq%2FWA7SEKtwDYL%2FV3jM0Bk5jPqFZVuQK%2B0AkTrAJhAT%2FHpz17SFKqmSPr1iaqo8EdmOU8oc1eP7DEmYHes6udzLYBbdNHdz%2FwsIfeaSocYucsPLcz34mYebVPfrKW9cd%2F%2B3R8qTtzXniG1CjX3XvgQiKIQxDDvSJ9FsEAbOpWpze0eTSpX4X9RQlgiyNJlc4NwsJJ5RzgEN0Qe%2FGpZl3XYyFx8I3pGrOb768tYo76%2BT8rcx9b4HnDnejjAmHx%2Bkb4L3StOB6QahW1gCL3Dzsy1ieah5ZoOK9LQq2wa0Vyx6QoV%2Fm9an%2BQsJyH7Xd6Pgvs8k92T%2BeXSzmOtj071pB4M%2FuIXforgRBSzUiNNXSjFtggDxtKOevpn0hafSLj8wOzVbCLr42ekM12qSonVlqtrsooXklR7IS0xbNW13iFuPng7Y1oCm5JlUjGIG6nz%2BlBxFr%2BJLvWHNa2zCvV%2F3O01MdILu%2Fq5l%2Fj7AsYeLgtvWzKsGMKWotCUcYP4HEVKxiwz9AFgwHTKjaLR0my%2Fy7GP4LYL398z7S%2FUN0E9Kw02AD%2BwHmvzq0aKuQnKAuaXe08hqIOgpAUxI2ugA8a5W%2BvR2FN1ZddKTFR5Vh6N%2BferjrwdxKK7uGi8fpQ9cdzK%2FusbSts78wtMqrxAY6pgFXCFYzgPw2zFkmWEUi1aCsCT0XYbtWJbhp6fB9iaPRt2biu%2BQ3r256tQsoP1hMaAx4QaromXLKNx9sYGymWYjLHVkEQhapr%2F%2BbnmbP3gYZA%2B2%2FlS4eA0a9x0SjMsxtM%2Fc6tXl84hQ986j1UZhvrsO7lz4l8%2BOYAHnp3n5QxhW6dCoPgAsNJEA%2FJz0vjjYubeQK6EKUhtb81d8Iijh4GBK1846Ugpef&X-Amz-Signature=b01fbec3a254c7cadb0c0feb33c55950c8917228f7143bf1b6d5d442915eb69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3YFTAFF%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFG81D3YDuloSmKpRg8w7j2U%2BPkpn%2F9Pi0ChY19jl2DwAiAI4dSyCFc1s%2Br72aH2XrmHZ2YH1bPZNkL1IhaixzrVtiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKDnd%2Bq03Sq%2FWA7SEKtwDYL%2FV3jM0Bk5jPqFZVuQK%2B0AkTrAJhAT%2FHpz17SFKqmSPr1iaqo8EdmOU8oc1eP7DEmYHes6udzLYBbdNHdz%2FwsIfeaSocYucsPLcz34mYebVPfrKW9cd%2F%2B3R8qTtzXniG1CjX3XvgQiKIQxDDvSJ9FsEAbOpWpze0eTSpX4X9RQlgiyNJlc4NwsJJ5RzgEN0Qe%2FGpZl3XYyFx8I3pGrOb768tYo76%2BT8rcx9b4HnDnejjAmHx%2Bkb4L3StOB6QahW1gCL3Dzsy1ieah5ZoOK9LQq2wa0Vyx6QoV%2Fm9an%2BQsJyH7Xd6Pgvs8k92T%2BeXSzmOtj071pB4M%2FuIXforgRBSzUiNNXSjFtggDxtKOevpn0hafSLj8wOzVbCLr42ekM12qSonVlqtrsooXklR7IS0xbNW13iFuPng7Y1oCm5JlUjGIG6nz%2BlBxFr%2BJLvWHNa2zCvV%2F3O01MdILu%2Fq5l%2Fj7AsYeLgtvWzKsGMKWotCUcYP4HEVKxiwz9AFgwHTKjaLR0my%2Fy7GP4LYL398z7S%2FUN0E9Kw02AD%2BwHmvzq0aKuQnKAuaXe08hqIOgpAUxI2ugA8a5W%2BvR2FN1ZddKTFR5Vh6N%2BferjrwdxKK7uGi8fpQ9cdzK%2FusbSts78wtMqrxAY6pgFXCFYzgPw2zFkmWEUi1aCsCT0XYbtWJbhp6fB9iaPRt2biu%2BQ3r256tQsoP1hMaAx4QaromXLKNx9sYGymWYjLHVkEQhapr%2F%2BbnmbP3gYZA%2B2%2FlS4eA0a9x0SjMsxtM%2Fc6tXl84hQ986j1UZhvrsO7lz4l8%2BOYAHnp3n5QxhW6dCoPgAsNJEA%2FJz0vjjYubeQK6EKUhtb81d8Iijh4GBK1846Ugpef&X-Amz-Signature=ca687685c62fb10284990c080bb21ca1566a4af7955cba502c94bd3ea56eb38d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3YFTAFF%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFG81D3YDuloSmKpRg8w7j2U%2BPkpn%2F9Pi0ChY19jl2DwAiAI4dSyCFc1s%2Br72aH2XrmHZ2YH1bPZNkL1IhaixzrVtiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKDnd%2Bq03Sq%2FWA7SEKtwDYL%2FV3jM0Bk5jPqFZVuQK%2B0AkTrAJhAT%2FHpz17SFKqmSPr1iaqo8EdmOU8oc1eP7DEmYHes6udzLYBbdNHdz%2FwsIfeaSocYucsPLcz34mYebVPfrKW9cd%2F%2B3R8qTtzXniG1CjX3XvgQiKIQxDDvSJ9FsEAbOpWpze0eTSpX4X9RQlgiyNJlc4NwsJJ5RzgEN0Qe%2FGpZl3XYyFx8I3pGrOb768tYo76%2BT8rcx9b4HnDnejjAmHx%2Bkb4L3StOB6QahW1gCL3Dzsy1ieah5ZoOK9LQq2wa0Vyx6QoV%2Fm9an%2BQsJyH7Xd6Pgvs8k92T%2BeXSzmOtj071pB4M%2FuIXforgRBSzUiNNXSjFtggDxtKOevpn0hafSLj8wOzVbCLr42ekM12qSonVlqtrsooXklR7IS0xbNW13iFuPng7Y1oCm5JlUjGIG6nz%2BlBxFr%2BJLvWHNa2zCvV%2F3O01MdILu%2Fq5l%2Fj7AsYeLgtvWzKsGMKWotCUcYP4HEVKxiwz9AFgwHTKjaLR0my%2Fy7GP4LYL398z7S%2FUN0E9Kw02AD%2BwHmvzq0aKuQnKAuaXe08hqIOgpAUxI2ugA8a5W%2BvR2FN1ZddKTFR5Vh6N%2BferjrwdxKK7uGi8fpQ9cdzK%2FusbSts78wtMqrxAY6pgFXCFYzgPw2zFkmWEUi1aCsCT0XYbtWJbhp6fB9iaPRt2biu%2BQ3r256tQsoP1hMaAx4QaromXLKNx9sYGymWYjLHVkEQhapr%2F%2BbnmbP3gYZA%2B2%2FlS4eA0a9x0SjMsxtM%2Fc6tXl84hQ986j1UZhvrsO7lz4l8%2BOYAHnp3n5QxhW6dCoPgAsNJEA%2FJz0vjjYubeQK6EKUhtb81d8Iijh4GBK1846Ugpef&X-Amz-Signature=c6ffa79626eb20a6cf655bdeda75b79103636b7f0389ec302be0dcfa9bb5730d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3YFTAFF%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFG81D3YDuloSmKpRg8w7j2U%2BPkpn%2F9Pi0ChY19jl2DwAiAI4dSyCFc1s%2Br72aH2XrmHZ2YH1bPZNkL1IhaixzrVtiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKDnd%2Bq03Sq%2FWA7SEKtwDYL%2FV3jM0Bk5jPqFZVuQK%2B0AkTrAJhAT%2FHpz17SFKqmSPr1iaqo8EdmOU8oc1eP7DEmYHes6udzLYBbdNHdz%2FwsIfeaSocYucsPLcz34mYebVPfrKW9cd%2F%2B3R8qTtzXniG1CjX3XvgQiKIQxDDvSJ9FsEAbOpWpze0eTSpX4X9RQlgiyNJlc4NwsJJ5RzgEN0Qe%2FGpZl3XYyFx8I3pGrOb768tYo76%2BT8rcx9b4HnDnejjAmHx%2Bkb4L3StOB6QahW1gCL3Dzsy1ieah5ZoOK9LQq2wa0Vyx6QoV%2Fm9an%2BQsJyH7Xd6Pgvs8k92T%2BeXSzmOtj071pB4M%2FuIXforgRBSzUiNNXSjFtggDxtKOevpn0hafSLj8wOzVbCLr42ekM12qSonVlqtrsooXklR7IS0xbNW13iFuPng7Y1oCm5JlUjGIG6nz%2BlBxFr%2BJLvWHNa2zCvV%2F3O01MdILu%2Fq5l%2Fj7AsYeLgtvWzKsGMKWotCUcYP4HEVKxiwz9AFgwHTKjaLR0my%2Fy7GP4LYL398z7S%2FUN0E9Kw02AD%2BwHmvzq0aKuQnKAuaXe08hqIOgpAUxI2ugA8a5W%2BvR2FN1ZddKTFR5Vh6N%2BferjrwdxKK7uGi8fpQ9cdzK%2FusbSts78wtMqrxAY6pgFXCFYzgPw2zFkmWEUi1aCsCT0XYbtWJbhp6fB9iaPRt2biu%2BQ3r256tQsoP1hMaAx4QaromXLKNx9sYGymWYjLHVkEQhapr%2F%2BbnmbP3gYZA%2B2%2FlS4eA0a9x0SjMsxtM%2Fc6tXl84hQ986j1UZhvrsO7lz4l8%2BOYAHnp3n5QxhW6dCoPgAsNJEA%2FJz0vjjYubeQK6EKUhtb81d8Iijh4GBK1846Ugpef&X-Amz-Signature=aa5b1c6fb8224133ecd8ec87c10d6fd55eac9674985073606b48e27f5b415364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3YFTAFF%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFG81D3YDuloSmKpRg8w7j2U%2BPkpn%2F9Pi0ChY19jl2DwAiAI4dSyCFc1s%2Br72aH2XrmHZ2YH1bPZNkL1IhaixzrVtiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKDnd%2Bq03Sq%2FWA7SEKtwDYL%2FV3jM0Bk5jPqFZVuQK%2B0AkTrAJhAT%2FHpz17SFKqmSPr1iaqo8EdmOU8oc1eP7DEmYHes6udzLYBbdNHdz%2FwsIfeaSocYucsPLcz34mYebVPfrKW9cd%2F%2B3R8qTtzXniG1CjX3XvgQiKIQxDDvSJ9FsEAbOpWpze0eTSpX4X9RQlgiyNJlc4NwsJJ5RzgEN0Qe%2FGpZl3XYyFx8I3pGrOb768tYo76%2BT8rcx9b4HnDnejjAmHx%2Bkb4L3StOB6QahW1gCL3Dzsy1ieah5ZoOK9LQq2wa0Vyx6QoV%2Fm9an%2BQsJyH7Xd6Pgvs8k92T%2BeXSzmOtj071pB4M%2FuIXforgRBSzUiNNXSjFtggDxtKOevpn0hafSLj8wOzVbCLr42ekM12qSonVlqtrsooXklR7IS0xbNW13iFuPng7Y1oCm5JlUjGIG6nz%2BlBxFr%2BJLvWHNa2zCvV%2F3O01MdILu%2Fq5l%2Fj7AsYeLgtvWzKsGMKWotCUcYP4HEVKxiwz9AFgwHTKjaLR0my%2Fy7GP4LYL398z7S%2FUN0E9Kw02AD%2BwHmvzq0aKuQnKAuaXe08hqIOgpAUxI2ugA8a5W%2BvR2FN1ZddKTFR5Vh6N%2BferjrwdxKK7uGi8fpQ9cdzK%2FusbSts78wtMqrxAY6pgFXCFYzgPw2zFkmWEUi1aCsCT0XYbtWJbhp6fB9iaPRt2biu%2BQ3r256tQsoP1hMaAx4QaromXLKNx9sYGymWYjLHVkEQhapr%2F%2BbnmbP3gYZA%2B2%2FlS4eA0a9x0SjMsxtM%2Fc6tXl84hQ986j1UZhvrsO7lz4l8%2BOYAHnp3n5QxhW6dCoPgAsNJEA%2FJz0vjjYubeQK6EKUhtb81d8Iijh4GBK1846Ugpef&X-Amz-Signature=90d82e3e5f9a9f813bf1030b7a706225c24be1740ed2acf73b33dde2d80859ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
