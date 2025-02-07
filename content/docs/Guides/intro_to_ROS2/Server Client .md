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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FI3JQN7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD2E7ECAkQVz3CDo%2FouCSsv8cPYhYH1x%2BIRTtU5lvzB0QIhAMSpreQomUudnpdC81HSZa2Yy4dP92vfdMGcOc7HHNe9Kv8DCHEQABoMNjM3NDIzMTgzODA1IgzGTZjjq%2BkJn2ZznEEq3APqHsMmCNxijU%2BRF0%2BmQm2uhLXTZ4EGlVB4Pj%2B62%2FUgkWkjeyqVWwtgxjlRUQrjaEWhwPGQ%2F%2BAWwYgjNuucoLfkwzRHhivcES5mRgdmmoEaQ3axN7eNekbLXoDHEdmhEVprF47Uav%2FGBfqz6Hhv2xVbiIM73tLoWozOHABD3L1w26P7OHjsxC0Hg8BP5icOHMY1fvgbm%2BBI%2BcRxl6WhFIyYAoM70Q2BuMuISN6FupcYrkEt7LNEQE1%2BWUdDmXZMYkPD2o%2BDiFiiAb7%2BLXHTu%2FzCoow6qXBTAgugoelJa%2FMZeHusj74vRPoJK7FXfZtQiISrsbpp07hFtlDqDbIG7AuKurndnteTECvrTQ9NQ9fvfa12bDFyQeUbXC2AovJ45YQi4H3HxkKXB3S%2FwH4ibEuYOX3PyUY18a2w9hfSMOmCPRf3b2YjVyOdljnEp6WdDZdf3DCjV6%2FMwK%2FlNzfaWT7qi587KmIZPxtjb6HYBiQg3UUSZz%2BjXmpcGEVoCzcx4Xtbz6dNJPT9PI5YbutqXVRmuvvOfjkzNVLGYRmvnBJQVdKa%2Fu1f4d3aFC4PoLHtfr8ZENvIq76EtHP5nVf7GIJat8RUXMst1%2FkbPoqNOIrKRtw0kDsZxrZGseC%2BQjCd%2B5a9BjqkAZSA7jH%2FeaNLTGgXKs%2FTYC96BFXi30AnVWhbd%2FOJEUS%2FKiMo%2BCM2ZcO2oZI4Z5eZvFckbE5ccZBPfxm2r%2F4%2BGkIWvdVjYowAzx5NT6i4UN0Y%2BHn%2BsNDdHhP%2BPVfhuuFrBUt5L4%2BjEd7FTIfTIuQsPv8jDt5dHcw2hVZl%2B3Kzke8CMRjD873ne94prUIA0qKjMmUIjUwiqbD%2F9a5GayXTQOPQhJ3e&X-Amz-Signature=1b91e3d9554084fcad2cb44d40c8e46e1fb3ec205a91ef5e351afb994ab2d17b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FI3JQN7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD2E7ECAkQVz3CDo%2FouCSsv8cPYhYH1x%2BIRTtU5lvzB0QIhAMSpreQomUudnpdC81HSZa2Yy4dP92vfdMGcOc7HHNe9Kv8DCHEQABoMNjM3NDIzMTgzODA1IgzGTZjjq%2BkJn2ZznEEq3APqHsMmCNxijU%2BRF0%2BmQm2uhLXTZ4EGlVB4Pj%2B62%2FUgkWkjeyqVWwtgxjlRUQrjaEWhwPGQ%2F%2BAWwYgjNuucoLfkwzRHhivcES5mRgdmmoEaQ3axN7eNekbLXoDHEdmhEVprF47Uav%2FGBfqz6Hhv2xVbiIM73tLoWozOHABD3L1w26P7OHjsxC0Hg8BP5icOHMY1fvgbm%2BBI%2BcRxl6WhFIyYAoM70Q2BuMuISN6FupcYrkEt7LNEQE1%2BWUdDmXZMYkPD2o%2BDiFiiAb7%2BLXHTu%2FzCoow6qXBTAgugoelJa%2FMZeHusj74vRPoJK7FXfZtQiISrsbpp07hFtlDqDbIG7AuKurndnteTECvrTQ9NQ9fvfa12bDFyQeUbXC2AovJ45YQi4H3HxkKXB3S%2FwH4ibEuYOX3PyUY18a2w9hfSMOmCPRf3b2YjVyOdljnEp6WdDZdf3DCjV6%2FMwK%2FlNzfaWT7qi587KmIZPxtjb6HYBiQg3UUSZz%2BjXmpcGEVoCzcx4Xtbz6dNJPT9PI5YbutqXVRmuvvOfjkzNVLGYRmvnBJQVdKa%2Fu1f4d3aFC4PoLHtfr8ZENvIq76EtHP5nVf7GIJat8RUXMst1%2FkbPoqNOIrKRtw0kDsZxrZGseC%2BQjCd%2B5a9BjqkAZSA7jH%2FeaNLTGgXKs%2FTYC96BFXi30AnVWhbd%2FOJEUS%2FKiMo%2BCM2ZcO2oZI4Z5eZvFckbE5ccZBPfxm2r%2F4%2BGkIWvdVjYowAzx5NT6i4UN0Y%2BHn%2BsNDdHhP%2BPVfhuuFrBUt5L4%2BjEd7FTIfTIuQsPv8jDt5dHcw2hVZl%2B3Kzke8CMRjD873ne94prUIA0qKjMmUIjUwiqbD%2F9a5GayXTQOPQhJ3e&X-Amz-Signature=cf816b586664d96d8c219ac3001ca0c69309522a48673afab3224e554e32ef70&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FI3JQN7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD2E7ECAkQVz3CDo%2FouCSsv8cPYhYH1x%2BIRTtU5lvzB0QIhAMSpreQomUudnpdC81HSZa2Yy4dP92vfdMGcOc7HHNe9Kv8DCHEQABoMNjM3NDIzMTgzODA1IgzGTZjjq%2BkJn2ZznEEq3APqHsMmCNxijU%2BRF0%2BmQm2uhLXTZ4EGlVB4Pj%2B62%2FUgkWkjeyqVWwtgxjlRUQrjaEWhwPGQ%2F%2BAWwYgjNuucoLfkwzRHhivcES5mRgdmmoEaQ3axN7eNekbLXoDHEdmhEVprF47Uav%2FGBfqz6Hhv2xVbiIM73tLoWozOHABD3L1w26P7OHjsxC0Hg8BP5icOHMY1fvgbm%2BBI%2BcRxl6WhFIyYAoM70Q2BuMuISN6FupcYrkEt7LNEQE1%2BWUdDmXZMYkPD2o%2BDiFiiAb7%2BLXHTu%2FzCoow6qXBTAgugoelJa%2FMZeHusj74vRPoJK7FXfZtQiISrsbpp07hFtlDqDbIG7AuKurndnteTECvrTQ9NQ9fvfa12bDFyQeUbXC2AovJ45YQi4H3HxkKXB3S%2FwH4ibEuYOX3PyUY18a2w9hfSMOmCPRf3b2YjVyOdljnEp6WdDZdf3DCjV6%2FMwK%2FlNzfaWT7qi587KmIZPxtjb6HYBiQg3UUSZz%2BjXmpcGEVoCzcx4Xtbz6dNJPT9PI5YbutqXVRmuvvOfjkzNVLGYRmvnBJQVdKa%2Fu1f4d3aFC4PoLHtfr8ZENvIq76EtHP5nVf7GIJat8RUXMst1%2FkbPoqNOIrKRtw0kDsZxrZGseC%2BQjCd%2B5a9BjqkAZSA7jH%2FeaNLTGgXKs%2FTYC96BFXi30AnVWhbd%2FOJEUS%2FKiMo%2BCM2ZcO2oZI4Z5eZvFckbE5ccZBPfxm2r%2F4%2BGkIWvdVjYowAzx5NT6i4UN0Y%2BHn%2BsNDdHhP%2BPVfhuuFrBUt5L4%2BjEd7FTIfTIuQsPv8jDt5dHcw2hVZl%2B3Kzke8CMRjD873ne94prUIA0qKjMmUIjUwiqbD%2F9a5GayXTQOPQhJ3e&X-Amz-Signature=ac8e0dd3d6de40450eeb6920fbfa591983ce10c59394f041205c401fd63c7a01&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FI3JQN7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD2E7ECAkQVz3CDo%2FouCSsv8cPYhYH1x%2BIRTtU5lvzB0QIhAMSpreQomUudnpdC81HSZa2Yy4dP92vfdMGcOc7HHNe9Kv8DCHEQABoMNjM3NDIzMTgzODA1IgzGTZjjq%2BkJn2ZznEEq3APqHsMmCNxijU%2BRF0%2BmQm2uhLXTZ4EGlVB4Pj%2B62%2FUgkWkjeyqVWwtgxjlRUQrjaEWhwPGQ%2F%2BAWwYgjNuucoLfkwzRHhivcES5mRgdmmoEaQ3axN7eNekbLXoDHEdmhEVprF47Uav%2FGBfqz6Hhv2xVbiIM73tLoWozOHABD3L1w26P7OHjsxC0Hg8BP5icOHMY1fvgbm%2BBI%2BcRxl6WhFIyYAoM70Q2BuMuISN6FupcYrkEt7LNEQE1%2BWUdDmXZMYkPD2o%2BDiFiiAb7%2BLXHTu%2FzCoow6qXBTAgugoelJa%2FMZeHusj74vRPoJK7FXfZtQiISrsbpp07hFtlDqDbIG7AuKurndnteTECvrTQ9NQ9fvfa12bDFyQeUbXC2AovJ45YQi4H3HxkKXB3S%2FwH4ibEuYOX3PyUY18a2w9hfSMOmCPRf3b2YjVyOdljnEp6WdDZdf3DCjV6%2FMwK%2FlNzfaWT7qi587KmIZPxtjb6HYBiQg3UUSZz%2BjXmpcGEVoCzcx4Xtbz6dNJPT9PI5YbutqXVRmuvvOfjkzNVLGYRmvnBJQVdKa%2Fu1f4d3aFC4PoLHtfr8ZENvIq76EtHP5nVf7GIJat8RUXMst1%2FkbPoqNOIrKRtw0kDsZxrZGseC%2BQjCd%2B5a9BjqkAZSA7jH%2FeaNLTGgXKs%2FTYC96BFXi30AnVWhbd%2FOJEUS%2FKiMo%2BCM2ZcO2oZI4Z5eZvFckbE5ccZBPfxm2r%2F4%2BGkIWvdVjYowAzx5NT6i4UN0Y%2BHn%2BsNDdHhP%2BPVfhuuFrBUt5L4%2BjEd7FTIfTIuQsPv8jDt5dHcw2hVZl%2B3Kzke8CMRjD873ne94prUIA0qKjMmUIjUwiqbD%2F9a5GayXTQOPQhJ3e&X-Amz-Signature=343036a06cd6471b867456e540a0695ce06350caa280590abf0f13929cfbc858&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FI3JQN7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD2E7ECAkQVz3CDo%2FouCSsv8cPYhYH1x%2BIRTtU5lvzB0QIhAMSpreQomUudnpdC81HSZa2Yy4dP92vfdMGcOc7HHNe9Kv8DCHEQABoMNjM3NDIzMTgzODA1IgzGTZjjq%2BkJn2ZznEEq3APqHsMmCNxijU%2BRF0%2BmQm2uhLXTZ4EGlVB4Pj%2B62%2FUgkWkjeyqVWwtgxjlRUQrjaEWhwPGQ%2F%2BAWwYgjNuucoLfkwzRHhivcES5mRgdmmoEaQ3axN7eNekbLXoDHEdmhEVprF47Uav%2FGBfqz6Hhv2xVbiIM73tLoWozOHABD3L1w26P7OHjsxC0Hg8BP5icOHMY1fvgbm%2BBI%2BcRxl6WhFIyYAoM70Q2BuMuISN6FupcYrkEt7LNEQE1%2BWUdDmXZMYkPD2o%2BDiFiiAb7%2BLXHTu%2FzCoow6qXBTAgugoelJa%2FMZeHusj74vRPoJK7FXfZtQiISrsbpp07hFtlDqDbIG7AuKurndnteTECvrTQ9NQ9fvfa12bDFyQeUbXC2AovJ45YQi4H3HxkKXB3S%2FwH4ibEuYOX3PyUY18a2w9hfSMOmCPRf3b2YjVyOdljnEp6WdDZdf3DCjV6%2FMwK%2FlNzfaWT7qi587KmIZPxtjb6HYBiQg3UUSZz%2BjXmpcGEVoCzcx4Xtbz6dNJPT9PI5YbutqXVRmuvvOfjkzNVLGYRmvnBJQVdKa%2Fu1f4d3aFC4PoLHtfr8ZENvIq76EtHP5nVf7GIJat8RUXMst1%2FkbPoqNOIrKRtw0kDsZxrZGseC%2BQjCd%2B5a9BjqkAZSA7jH%2FeaNLTGgXKs%2FTYC96BFXi30AnVWhbd%2FOJEUS%2FKiMo%2BCM2ZcO2oZI4Z5eZvFckbE5ccZBPfxm2r%2F4%2BGkIWvdVjYowAzx5NT6i4UN0Y%2BHn%2BsNDdHhP%2BPVfhuuFrBUt5L4%2BjEd7FTIfTIuQsPv8jDt5dHcw2hVZl%2B3Kzke8CMRjD873ne94prUIA0qKjMmUIjUwiqbD%2F9a5GayXTQOPQhJ3e&X-Amz-Signature=3761f208f1cf637e5a0d67a2760b0a82e7be3e0e02cba4bbc2b1d4b8909eda07&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
