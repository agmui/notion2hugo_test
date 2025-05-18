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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBCN5XT2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAkUlFeKPoxdx89i90jbJ2gdpzUXkgFVwCheJUDG2bwQIgMF72cYNIh%2FbsNIBfT4hvKfIDSCSzh9ZELpejqfjdsS8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDCEcvgwgQQNnL1j0fCrcA8cvfGS7JHEICBZ4OLAe%2FxWncYEG8YSvcFJ%2BjSi67WQ1alUANTgAOs%2FXn9aaXjnYy30LAdoIRhCPAB5FcKWL25St9%2Bwb3sRAGOqaMgCiXx6p6T06YCAPZ95g8EpIxac95qk%2BKsl4XQXBpCtZbSwYWZISQKXvll0jDmVO9vAvegrWsFu7JbVM7kAgL5JRKF69YdmrkE91nuRCyOcvHqH3z4On5WLuAPyKOpEUdRHhLW00q9orzl8ktbX%2BhZjC3DMj%2F3UQ9%2BJ3E71X4HnmYvMyRiC2tHD%2FD9wFdL%2BQL%2F2dsszU3W8iS%2B0Rncjm3EFkPgjwgAy%2Fg0KfD4GuMoh559LccjVEqmA8Ssw%2B8XukgC3ld5ACsDFiFluu4DWpBGeG%2FmyAizqyWjC6hZB80JAEQEsZjN63IPRrKf35aL6q7Vukd22ADHAa2ASpUYGL%2F5DKKS66URbZBK99AqMP6HWAw0kJGnchwyUJ7tOnyWJ8kJ1mhK4XWuM9wQKrCLbGDmi7Xe0U1HqNGu3X9jWsqMhMu8FuR7eN6oy69p48gFWsqWTPSAX7rzE4weByz6e00WyJMuAhE7eOKvlicGY%2FC2phT634ACsN7qeHbojhMI4PL2cJFZSo5v0EBP80W%2BmDq3wBMMTXpMEGOqUBcPGxnC3Rf3Lqn2wov8GKX7RNXvtSR3sz58j4n6cAwYKz1RLtkRtS4uo8yXzr0iBAYpeKxed4c5l19wE6LOMbkBtQVTYMrjb596O%2BO0vPXeD9fq%2F9NDkPCxTWZQ0SqqGvdVu%2ByLk2QJWaiBPnV0ljB8U%2Fv9%2FmHlHfY6xlqM6Ah5xz1EGWi5zRuDJ1wMjzQkloCXlv2ludpc9j0oy7ldrWr3m1iL8k&X-Amz-Signature=b5a5cb0f0e99f01c2d413d5c12e3a9d83d3bb184ff2f809fa4edb491e4675a75&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBCN5XT2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAkUlFeKPoxdx89i90jbJ2gdpzUXkgFVwCheJUDG2bwQIgMF72cYNIh%2FbsNIBfT4hvKfIDSCSzh9ZELpejqfjdsS8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDCEcvgwgQQNnL1j0fCrcA8cvfGS7JHEICBZ4OLAe%2FxWncYEG8YSvcFJ%2BjSi67WQ1alUANTgAOs%2FXn9aaXjnYy30LAdoIRhCPAB5FcKWL25St9%2Bwb3sRAGOqaMgCiXx6p6T06YCAPZ95g8EpIxac95qk%2BKsl4XQXBpCtZbSwYWZISQKXvll0jDmVO9vAvegrWsFu7JbVM7kAgL5JRKF69YdmrkE91nuRCyOcvHqH3z4On5WLuAPyKOpEUdRHhLW00q9orzl8ktbX%2BhZjC3DMj%2F3UQ9%2BJ3E71X4HnmYvMyRiC2tHD%2FD9wFdL%2BQL%2F2dsszU3W8iS%2B0Rncjm3EFkPgjwgAy%2Fg0KfD4GuMoh559LccjVEqmA8Ssw%2B8XukgC3ld5ACsDFiFluu4DWpBGeG%2FmyAizqyWjC6hZB80JAEQEsZjN63IPRrKf35aL6q7Vukd22ADHAa2ASpUYGL%2F5DKKS66URbZBK99AqMP6HWAw0kJGnchwyUJ7tOnyWJ8kJ1mhK4XWuM9wQKrCLbGDmi7Xe0U1HqNGu3X9jWsqMhMu8FuR7eN6oy69p48gFWsqWTPSAX7rzE4weByz6e00WyJMuAhE7eOKvlicGY%2FC2phT634ACsN7qeHbojhMI4PL2cJFZSo5v0EBP80W%2BmDq3wBMMTXpMEGOqUBcPGxnC3Rf3Lqn2wov8GKX7RNXvtSR3sz58j4n6cAwYKz1RLtkRtS4uo8yXzr0iBAYpeKxed4c5l19wE6LOMbkBtQVTYMrjb596O%2BO0vPXeD9fq%2F9NDkPCxTWZQ0SqqGvdVu%2ByLk2QJWaiBPnV0ljB8U%2Fv9%2FmHlHfY6xlqM6Ah5xz1EGWi5zRuDJ1wMjzQkloCXlv2ludpc9j0oy7ldrWr3m1iL8k&X-Amz-Signature=fe5dc70f32594a8f7e7d9e8d3afc4e6f0e538c9b9d7649c2b72c22211512a090&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBCN5XT2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAkUlFeKPoxdx89i90jbJ2gdpzUXkgFVwCheJUDG2bwQIgMF72cYNIh%2FbsNIBfT4hvKfIDSCSzh9ZELpejqfjdsS8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDCEcvgwgQQNnL1j0fCrcA8cvfGS7JHEICBZ4OLAe%2FxWncYEG8YSvcFJ%2BjSi67WQ1alUANTgAOs%2FXn9aaXjnYy30LAdoIRhCPAB5FcKWL25St9%2Bwb3sRAGOqaMgCiXx6p6T06YCAPZ95g8EpIxac95qk%2BKsl4XQXBpCtZbSwYWZISQKXvll0jDmVO9vAvegrWsFu7JbVM7kAgL5JRKF69YdmrkE91nuRCyOcvHqH3z4On5WLuAPyKOpEUdRHhLW00q9orzl8ktbX%2BhZjC3DMj%2F3UQ9%2BJ3E71X4HnmYvMyRiC2tHD%2FD9wFdL%2BQL%2F2dsszU3W8iS%2B0Rncjm3EFkPgjwgAy%2Fg0KfD4GuMoh559LccjVEqmA8Ssw%2B8XukgC3ld5ACsDFiFluu4DWpBGeG%2FmyAizqyWjC6hZB80JAEQEsZjN63IPRrKf35aL6q7Vukd22ADHAa2ASpUYGL%2F5DKKS66URbZBK99AqMP6HWAw0kJGnchwyUJ7tOnyWJ8kJ1mhK4XWuM9wQKrCLbGDmi7Xe0U1HqNGu3X9jWsqMhMu8FuR7eN6oy69p48gFWsqWTPSAX7rzE4weByz6e00WyJMuAhE7eOKvlicGY%2FC2phT634ACsN7qeHbojhMI4PL2cJFZSo5v0EBP80W%2BmDq3wBMMTXpMEGOqUBcPGxnC3Rf3Lqn2wov8GKX7RNXvtSR3sz58j4n6cAwYKz1RLtkRtS4uo8yXzr0iBAYpeKxed4c5l19wE6LOMbkBtQVTYMrjb596O%2BO0vPXeD9fq%2F9NDkPCxTWZQ0SqqGvdVu%2ByLk2QJWaiBPnV0ljB8U%2Fv9%2FmHlHfY6xlqM6Ah5xz1EGWi5zRuDJ1wMjzQkloCXlv2ludpc9j0oy7ldrWr3m1iL8k&X-Amz-Signature=9ee8569871447840387f2aeb7dc495eab8e39a4c7d39555a1fea0001becebaf9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBCN5XT2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAkUlFeKPoxdx89i90jbJ2gdpzUXkgFVwCheJUDG2bwQIgMF72cYNIh%2FbsNIBfT4hvKfIDSCSzh9ZELpejqfjdsS8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDCEcvgwgQQNnL1j0fCrcA8cvfGS7JHEICBZ4OLAe%2FxWncYEG8YSvcFJ%2BjSi67WQ1alUANTgAOs%2FXn9aaXjnYy30LAdoIRhCPAB5FcKWL25St9%2Bwb3sRAGOqaMgCiXx6p6T06YCAPZ95g8EpIxac95qk%2BKsl4XQXBpCtZbSwYWZISQKXvll0jDmVO9vAvegrWsFu7JbVM7kAgL5JRKF69YdmrkE91nuRCyOcvHqH3z4On5WLuAPyKOpEUdRHhLW00q9orzl8ktbX%2BhZjC3DMj%2F3UQ9%2BJ3E71X4HnmYvMyRiC2tHD%2FD9wFdL%2BQL%2F2dsszU3W8iS%2B0Rncjm3EFkPgjwgAy%2Fg0KfD4GuMoh559LccjVEqmA8Ssw%2B8XukgC3ld5ACsDFiFluu4DWpBGeG%2FmyAizqyWjC6hZB80JAEQEsZjN63IPRrKf35aL6q7Vukd22ADHAa2ASpUYGL%2F5DKKS66URbZBK99AqMP6HWAw0kJGnchwyUJ7tOnyWJ8kJ1mhK4XWuM9wQKrCLbGDmi7Xe0U1HqNGu3X9jWsqMhMu8FuR7eN6oy69p48gFWsqWTPSAX7rzE4weByz6e00WyJMuAhE7eOKvlicGY%2FC2phT634ACsN7qeHbojhMI4PL2cJFZSo5v0EBP80W%2BmDq3wBMMTXpMEGOqUBcPGxnC3Rf3Lqn2wov8GKX7RNXvtSR3sz58j4n6cAwYKz1RLtkRtS4uo8yXzr0iBAYpeKxed4c5l19wE6LOMbkBtQVTYMrjb596O%2BO0vPXeD9fq%2F9NDkPCxTWZQ0SqqGvdVu%2ByLk2QJWaiBPnV0ljB8U%2Fv9%2FmHlHfY6xlqM6Ah5xz1EGWi5zRuDJ1wMjzQkloCXlv2ludpc9j0oy7ldrWr3m1iL8k&X-Amz-Signature=16dcd5a66b82cdfe9a42c4617ec596712944e2bda8620ee464694cc5d1cecba4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBCN5XT2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAkUlFeKPoxdx89i90jbJ2gdpzUXkgFVwCheJUDG2bwQIgMF72cYNIh%2FbsNIBfT4hvKfIDSCSzh9ZELpejqfjdsS8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDCEcvgwgQQNnL1j0fCrcA8cvfGS7JHEICBZ4OLAe%2FxWncYEG8YSvcFJ%2BjSi67WQ1alUANTgAOs%2FXn9aaXjnYy30LAdoIRhCPAB5FcKWL25St9%2Bwb3sRAGOqaMgCiXx6p6T06YCAPZ95g8EpIxac95qk%2BKsl4XQXBpCtZbSwYWZISQKXvll0jDmVO9vAvegrWsFu7JbVM7kAgL5JRKF69YdmrkE91nuRCyOcvHqH3z4On5WLuAPyKOpEUdRHhLW00q9orzl8ktbX%2BhZjC3DMj%2F3UQ9%2BJ3E71X4HnmYvMyRiC2tHD%2FD9wFdL%2BQL%2F2dsszU3W8iS%2B0Rncjm3EFkPgjwgAy%2Fg0KfD4GuMoh559LccjVEqmA8Ssw%2B8XukgC3ld5ACsDFiFluu4DWpBGeG%2FmyAizqyWjC6hZB80JAEQEsZjN63IPRrKf35aL6q7Vukd22ADHAa2ASpUYGL%2F5DKKS66URbZBK99AqMP6HWAw0kJGnchwyUJ7tOnyWJ8kJ1mhK4XWuM9wQKrCLbGDmi7Xe0U1HqNGu3X9jWsqMhMu8FuR7eN6oy69p48gFWsqWTPSAX7rzE4weByz6e00WyJMuAhE7eOKvlicGY%2FC2phT634ACsN7qeHbojhMI4PL2cJFZSo5v0EBP80W%2BmDq3wBMMTXpMEGOqUBcPGxnC3Rf3Lqn2wov8GKX7RNXvtSR3sz58j4n6cAwYKz1RLtkRtS4uo8yXzr0iBAYpeKxed4c5l19wE6LOMbkBtQVTYMrjb596O%2BO0vPXeD9fq%2F9NDkPCxTWZQ0SqqGvdVu%2ByLk2QJWaiBPnV0ljB8U%2Fv9%2FmHlHfY6xlqM6Ah5xz1EGWi5zRuDJ1wMjzQkloCXlv2ludpc9j0oy7ldrWr3m1iL8k&X-Amz-Signature=172fc45196eb03d90adce02a436f50999f863431f5d9061a3d6b67058a58f4f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
