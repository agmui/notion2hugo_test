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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBER4TLO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVxFmIuZsYoX7Rf4ONZ%2B08r2jCedvTrubuf12LbhajLwIgP%2FRwQJg8aJiNPR1Efn8ehy1mFSqC5lFcJIImUn3H2HIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOjNBL5fpJOG4SsSQyrcA83lPmtgXlpo8w9%2F60xn%2FMnDbLA8BbxnXQfS%2BgkIhfX5bi%2BB7eyzYfZEuiuUlbLwbX0H6hS7IxkrCkxce1lrFOXYu6n%2FlIXq3GDk2GX%2B35ZlP%2Bf8hmT%2BP2BmnXHBw4qkp9LftSGZ7FoElh4wt%2B7CFUyDWnpaRuUSOwb1gYNfJLg%2B9Ey0eZr5GimaeIYYjyWr251w%2Fy487qqcJKpRieDWVtd13DPbq0n2Kmf40w2pMIIYijjipuZ8nenaNw%2FC%2Ft4YWBw1EX98o8tFisnrb3WWIpyR%2BHyVHY0MwFORc10atGPFC5IO0SyovK%2BF6YV9w9xJZxsJU64Iinq1hWQ5TzSpmCtun1z9dWxpIiLb1OholgM1pamlePpdf3j7JVG5L0yaAcmo5j1ee5LiyGXfPZA4ctk5NFOEDJhVm2z0yjF5srn%2FrPv7NIaymwLvTv6uCnLTdHxioKRYk%2Bw%2Fjypc7DGYwf5BnpOAzU7qlnnRmisPJSOnj3WCoobHjWv2peDPQpR9yl8qwKcDMIPyKU0xuzuaZc4OYOszL6m5Qpe1QvEQNjX9fbKTt%2FW9SrP6mcJmrCkDX3SjDTyt9fu4VyUzXeF5SGsMIfs0UZncj9lNtaD6i48wjalX%2FzsdLMSdo1AYMIXnqMEGOqUB9CgVa1oCDfAvYuw5ejPbUOnYM%2BFS3igKqnR6hbWk8c5ZzgqUnGloJBI8RpK7R%2FVhLAYCZ2gFCLiIEZrS8jYOwEFldy3cDfFrsjNsNAg0N5lAAbI%2FDcnaMrJ0Z68AvgRO3Dixjl7p4Kkpq%2Fo4u2vc8OfPq7PjnVlXmwQH3%2FbvFUXMlV6NKlRvP4K82GcyI5YLDeBVPxEUzMC8zGizNEz7AU0esXCQ&X-Amz-Signature=b5d273fac43bfc5953714a1b14e50238f00bd330cc0d7e093563645937b251d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBER4TLO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVxFmIuZsYoX7Rf4ONZ%2B08r2jCedvTrubuf12LbhajLwIgP%2FRwQJg8aJiNPR1Efn8ehy1mFSqC5lFcJIImUn3H2HIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOjNBL5fpJOG4SsSQyrcA83lPmtgXlpo8w9%2F60xn%2FMnDbLA8BbxnXQfS%2BgkIhfX5bi%2BB7eyzYfZEuiuUlbLwbX0H6hS7IxkrCkxce1lrFOXYu6n%2FlIXq3GDk2GX%2B35ZlP%2Bf8hmT%2BP2BmnXHBw4qkp9LftSGZ7FoElh4wt%2B7CFUyDWnpaRuUSOwb1gYNfJLg%2B9Ey0eZr5GimaeIYYjyWr251w%2Fy487qqcJKpRieDWVtd13DPbq0n2Kmf40w2pMIIYijjipuZ8nenaNw%2FC%2Ft4YWBw1EX98o8tFisnrb3WWIpyR%2BHyVHY0MwFORc10atGPFC5IO0SyovK%2BF6YV9w9xJZxsJU64Iinq1hWQ5TzSpmCtun1z9dWxpIiLb1OholgM1pamlePpdf3j7JVG5L0yaAcmo5j1ee5LiyGXfPZA4ctk5NFOEDJhVm2z0yjF5srn%2FrPv7NIaymwLvTv6uCnLTdHxioKRYk%2Bw%2Fjypc7DGYwf5BnpOAzU7qlnnRmisPJSOnj3WCoobHjWv2peDPQpR9yl8qwKcDMIPyKU0xuzuaZc4OYOszL6m5Qpe1QvEQNjX9fbKTt%2FW9SrP6mcJmrCkDX3SjDTyt9fu4VyUzXeF5SGsMIfs0UZncj9lNtaD6i48wjalX%2FzsdLMSdo1AYMIXnqMEGOqUB9CgVa1oCDfAvYuw5ejPbUOnYM%2BFS3igKqnR6hbWk8c5ZzgqUnGloJBI8RpK7R%2FVhLAYCZ2gFCLiIEZrS8jYOwEFldy3cDfFrsjNsNAg0N5lAAbI%2FDcnaMrJ0Z68AvgRO3Dixjl7p4Kkpq%2Fo4u2vc8OfPq7PjnVlXmwQH3%2FbvFUXMlV6NKlRvP4K82GcyI5YLDeBVPxEUzMC8zGizNEz7AU0esXCQ&X-Amz-Signature=876dd3cda99feec520dc10c1a45acf3482e21adec02e1e2e9ff1ef113f819856&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBER4TLO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVxFmIuZsYoX7Rf4ONZ%2B08r2jCedvTrubuf12LbhajLwIgP%2FRwQJg8aJiNPR1Efn8ehy1mFSqC5lFcJIImUn3H2HIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOjNBL5fpJOG4SsSQyrcA83lPmtgXlpo8w9%2F60xn%2FMnDbLA8BbxnXQfS%2BgkIhfX5bi%2BB7eyzYfZEuiuUlbLwbX0H6hS7IxkrCkxce1lrFOXYu6n%2FlIXq3GDk2GX%2B35ZlP%2Bf8hmT%2BP2BmnXHBw4qkp9LftSGZ7FoElh4wt%2B7CFUyDWnpaRuUSOwb1gYNfJLg%2B9Ey0eZr5GimaeIYYjyWr251w%2Fy487qqcJKpRieDWVtd13DPbq0n2Kmf40w2pMIIYijjipuZ8nenaNw%2FC%2Ft4YWBw1EX98o8tFisnrb3WWIpyR%2BHyVHY0MwFORc10atGPFC5IO0SyovK%2BF6YV9w9xJZxsJU64Iinq1hWQ5TzSpmCtun1z9dWxpIiLb1OholgM1pamlePpdf3j7JVG5L0yaAcmo5j1ee5LiyGXfPZA4ctk5NFOEDJhVm2z0yjF5srn%2FrPv7NIaymwLvTv6uCnLTdHxioKRYk%2Bw%2Fjypc7DGYwf5BnpOAzU7qlnnRmisPJSOnj3WCoobHjWv2peDPQpR9yl8qwKcDMIPyKU0xuzuaZc4OYOszL6m5Qpe1QvEQNjX9fbKTt%2FW9SrP6mcJmrCkDX3SjDTyt9fu4VyUzXeF5SGsMIfs0UZncj9lNtaD6i48wjalX%2FzsdLMSdo1AYMIXnqMEGOqUB9CgVa1oCDfAvYuw5ejPbUOnYM%2BFS3igKqnR6hbWk8c5ZzgqUnGloJBI8RpK7R%2FVhLAYCZ2gFCLiIEZrS8jYOwEFldy3cDfFrsjNsNAg0N5lAAbI%2FDcnaMrJ0Z68AvgRO3Dixjl7p4Kkpq%2Fo4u2vc8OfPq7PjnVlXmwQH3%2FbvFUXMlV6NKlRvP4K82GcyI5YLDeBVPxEUzMC8zGizNEz7AU0esXCQ&X-Amz-Signature=791b25ac44191b4c479e608ebd0923492cb5bab4a4c82994ab38e302dd0d8886&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBER4TLO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVxFmIuZsYoX7Rf4ONZ%2B08r2jCedvTrubuf12LbhajLwIgP%2FRwQJg8aJiNPR1Efn8ehy1mFSqC5lFcJIImUn3H2HIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOjNBL5fpJOG4SsSQyrcA83lPmtgXlpo8w9%2F60xn%2FMnDbLA8BbxnXQfS%2BgkIhfX5bi%2BB7eyzYfZEuiuUlbLwbX0H6hS7IxkrCkxce1lrFOXYu6n%2FlIXq3GDk2GX%2B35ZlP%2Bf8hmT%2BP2BmnXHBw4qkp9LftSGZ7FoElh4wt%2B7CFUyDWnpaRuUSOwb1gYNfJLg%2B9Ey0eZr5GimaeIYYjyWr251w%2Fy487qqcJKpRieDWVtd13DPbq0n2Kmf40w2pMIIYijjipuZ8nenaNw%2FC%2Ft4YWBw1EX98o8tFisnrb3WWIpyR%2BHyVHY0MwFORc10atGPFC5IO0SyovK%2BF6YV9w9xJZxsJU64Iinq1hWQ5TzSpmCtun1z9dWxpIiLb1OholgM1pamlePpdf3j7JVG5L0yaAcmo5j1ee5LiyGXfPZA4ctk5NFOEDJhVm2z0yjF5srn%2FrPv7NIaymwLvTv6uCnLTdHxioKRYk%2Bw%2Fjypc7DGYwf5BnpOAzU7qlnnRmisPJSOnj3WCoobHjWv2peDPQpR9yl8qwKcDMIPyKU0xuzuaZc4OYOszL6m5Qpe1QvEQNjX9fbKTt%2FW9SrP6mcJmrCkDX3SjDTyt9fu4VyUzXeF5SGsMIfs0UZncj9lNtaD6i48wjalX%2FzsdLMSdo1AYMIXnqMEGOqUB9CgVa1oCDfAvYuw5ejPbUOnYM%2BFS3igKqnR6hbWk8c5ZzgqUnGloJBI8RpK7R%2FVhLAYCZ2gFCLiIEZrS8jYOwEFldy3cDfFrsjNsNAg0N5lAAbI%2FDcnaMrJ0Z68AvgRO3Dixjl7p4Kkpq%2Fo4u2vc8OfPq7PjnVlXmwQH3%2FbvFUXMlV6NKlRvP4K82GcyI5YLDeBVPxEUzMC8zGizNEz7AU0esXCQ&X-Amz-Signature=2708cba39156abd65c24e7275fb4a854157c4fae59ed0601fc7dc63bb3413523&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBER4TLO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVxFmIuZsYoX7Rf4ONZ%2B08r2jCedvTrubuf12LbhajLwIgP%2FRwQJg8aJiNPR1Efn8ehy1mFSqC5lFcJIImUn3H2HIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOjNBL5fpJOG4SsSQyrcA83lPmtgXlpo8w9%2F60xn%2FMnDbLA8BbxnXQfS%2BgkIhfX5bi%2BB7eyzYfZEuiuUlbLwbX0H6hS7IxkrCkxce1lrFOXYu6n%2FlIXq3GDk2GX%2B35ZlP%2Bf8hmT%2BP2BmnXHBw4qkp9LftSGZ7FoElh4wt%2B7CFUyDWnpaRuUSOwb1gYNfJLg%2B9Ey0eZr5GimaeIYYjyWr251w%2Fy487qqcJKpRieDWVtd13DPbq0n2Kmf40w2pMIIYijjipuZ8nenaNw%2FC%2Ft4YWBw1EX98o8tFisnrb3WWIpyR%2BHyVHY0MwFORc10atGPFC5IO0SyovK%2BF6YV9w9xJZxsJU64Iinq1hWQ5TzSpmCtun1z9dWxpIiLb1OholgM1pamlePpdf3j7JVG5L0yaAcmo5j1ee5LiyGXfPZA4ctk5NFOEDJhVm2z0yjF5srn%2FrPv7NIaymwLvTv6uCnLTdHxioKRYk%2Bw%2Fjypc7DGYwf5BnpOAzU7qlnnRmisPJSOnj3WCoobHjWv2peDPQpR9yl8qwKcDMIPyKU0xuzuaZc4OYOszL6m5Qpe1QvEQNjX9fbKTt%2FW9SrP6mcJmrCkDX3SjDTyt9fu4VyUzXeF5SGsMIfs0UZncj9lNtaD6i48wjalX%2FzsdLMSdo1AYMIXnqMEGOqUB9CgVa1oCDfAvYuw5ejPbUOnYM%2BFS3igKqnR6hbWk8c5ZzgqUnGloJBI8RpK7R%2FVhLAYCZ2gFCLiIEZrS8jYOwEFldy3cDfFrsjNsNAg0N5lAAbI%2FDcnaMrJ0Z68AvgRO3Dixjl7p4Kkpq%2Fo4u2vc8OfPq7PjnVlXmwQH3%2FbvFUXMlV6NKlRvP4K82GcyI5YLDeBVPxEUzMC8zGizNEz7AU0esXCQ&X-Amz-Signature=8b9c2ea2e3b9023669ff783da91952e2aacf7e732a22ddb8182126e0ed2362b1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
