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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXEPUJ6H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIBGH3g4%2F%2FlkvBEuCvXhrohVJFj6QFuuQHqsedEfofpQzAiEA5wDY4DVdRt1rkL%2Fm1Kynf4hjQyPAshm5RmUD4863VsoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvic6aIQfGNS5wtZircAxz6EdWB8BDIGJ3WVwOScVvOHaVQYk3YvXQlilsa1DKwQTrSD%2FzpUtS5I60V%2FqWd0zYKyCYXWu%2FrNr9w%2BQd0kNMG%2BzBpiea15WVm1iG%2BHX8NzAe6z6fthqI4ZYv9aJ7yfkkVZBiwirjYzlpVQtmHqmUgJOt71JStvPz7KTSlglaq354zO6XqAjQfQQfK%2FDoydOherj%2BHb0jWF67h1VGyxwkyXE38xlZ2FVzMPWzdEkjehYFiLU6qWn5JlsiQtE22XYLFq9zbSbAXHdBZdcYo5H%2BvC25kFDdYtP4%2BSSVhPLn86ITs%2BefG5fYosVaDWHqwWrJWQsD9%2BIU8YIn37dhhVKTu%2F%2BzZwPNVuMzLKk9f4VzgtPbiBtuS63HrHEeZT4F6rKAEfEpm3C5pRyKt%2BZgsO2zb%2B6%2FvnvEgFSmVg%2BJbsdoWCK8JjbiAx9Iq1BuqJuU7NZbnLNNW6Mu4g68%2FEpxNclD87B%2B0Vr9QO3wXtZS%2FTzDkAWZxpCx2dmOV3T3KNU3aC9A%2BQKnrorQcXedCe11W5A%2BCowFnUuFuuISsDAcrLpauwdqR%2FHHB6lfNwVPRXuThXlCnCKa4AOofCyw5P2loRA0CCTli9o%2Bo4aeXzXafJddhSMtegIV%2B8GuAEOg2ML7Th8EGOqUBSlXaD9r92Tydb7SLDWSITv8%2B%2BYDyd1OnLsXIFF7WsMAuJXsOenyoSEjlm9GDNAmo4kYbOz%2BAi4Y0WXC2%2BnJv7PGOECx0XnbM3Pdxz9z4NxRNF%2FjKAGa9BogZzFEALUWnGPWaxuE%2F5PJoplIvgHAGcTJfAzeIQAmszO9ZYI2Ng%2Bhw0oQihZAJgB%2Bl%2FL6MVGaHMXnW3oYpd4ghZUeHEofXduLXOYVd&X-Amz-Signature=f80ffd385f148a2d2d6b18221fbf456ad34da84cfa79377a670761a4fe8d78bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXEPUJ6H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIBGH3g4%2F%2FlkvBEuCvXhrohVJFj6QFuuQHqsedEfofpQzAiEA5wDY4DVdRt1rkL%2Fm1Kynf4hjQyPAshm5RmUD4863VsoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvic6aIQfGNS5wtZircAxz6EdWB8BDIGJ3WVwOScVvOHaVQYk3YvXQlilsa1DKwQTrSD%2FzpUtS5I60V%2FqWd0zYKyCYXWu%2FrNr9w%2BQd0kNMG%2BzBpiea15WVm1iG%2BHX8NzAe6z6fthqI4ZYv9aJ7yfkkVZBiwirjYzlpVQtmHqmUgJOt71JStvPz7KTSlglaq354zO6XqAjQfQQfK%2FDoydOherj%2BHb0jWF67h1VGyxwkyXE38xlZ2FVzMPWzdEkjehYFiLU6qWn5JlsiQtE22XYLFq9zbSbAXHdBZdcYo5H%2BvC25kFDdYtP4%2BSSVhPLn86ITs%2BefG5fYosVaDWHqwWrJWQsD9%2BIU8YIn37dhhVKTu%2F%2BzZwPNVuMzLKk9f4VzgtPbiBtuS63HrHEeZT4F6rKAEfEpm3C5pRyKt%2BZgsO2zb%2B6%2FvnvEgFSmVg%2BJbsdoWCK8JjbiAx9Iq1BuqJuU7NZbnLNNW6Mu4g68%2FEpxNclD87B%2B0Vr9QO3wXtZS%2FTzDkAWZxpCx2dmOV3T3KNU3aC9A%2BQKnrorQcXedCe11W5A%2BCowFnUuFuuISsDAcrLpauwdqR%2FHHB6lfNwVPRXuThXlCnCKa4AOofCyw5P2loRA0CCTli9o%2Bo4aeXzXafJddhSMtegIV%2B8GuAEOg2ML7Th8EGOqUBSlXaD9r92Tydb7SLDWSITv8%2B%2BYDyd1OnLsXIFF7WsMAuJXsOenyoSEjlm9GDNAmo4kYbOz%2BAi4Y0WXC2%2BnJv7PGOECx0XnbM3Pdxz9z4NxRNF%2FjKAGa9BogZzFEALUWnGPWaxuE%2F5PJoplIvgHAGcTJfAzeIQAmszO9ZYI2Ng%2Bhw0oQihZAJgB%2Bl%2FL6MVGaHMXnW3oYpd4ghZUeHEofXduLXOYVd&X-Amz-Signature=2b2d0761532eeb6326d596417efd2e5fe27432ac83de74705f75877d869f149b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXEPUJ6H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIBGH3g4%2F%2FlkvBEuCvXhrohVJFj6QFuuQHqsedEfofpQzAiEA5wDY4DVdRt1rkL%2Fm1Kynf4hjQyPAshm5RmUD4863VsoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvic6aIQfGNS5wtZircAxz6EdWB8BDIGJ3WVwOScVvOHaVQYk3YvXQlilsa1DKwQTrSD%2FzpUtS5I60V%2FqWd0zYKyCYXWu%2FrNr9w%2BQd0kNMG%2BzBpiea15WVm1iG%2BHX8NzAe6z6fthqI4ZYv9aJ7yfkkVZBiwirjYzlpVQtmHqmUgJOt71JStvPz7KTSlglaq354zO6XqAjQfQQfK%2FDoydOherj%2BHb0jWF67h1VGyxwkyXE38xlZ2FVzMPWzdEkjehYFiLU6qWn5JlsiQtE22XYLFq9zbSbAXHdBZdcYo5H%2BvC25kFDdYtP4%2BSSVhPLn86ITs%2BefG5fYosVaDWHqwWrJWQsD9%2BIU8YIn37dhhVKTu%2F%2BzZwPNVuMzLKk9f4VzgtPbiBtuS63HrHEeZT4F6rKAEfEpm3C5pRyKt%2BZgsO2zb%2B6%2FvnvEgFSmVg%2BJbsdoWCK8JjbiAx9Iq1BuqJuU7NZbnLNNW6Mu4g68%2FEpxNclD87B%2B0Vr9QO3wXtZS%2FTzDkAWZxpCx2dmOV3T3KNU3aC9A%2BQKnrorQcXedCe11W5A%2BCowFnUuFuuISsDAcrLpauwdqR%2FHHB6lfNwVPRXuThXlCnCKa4AOofCyw5P2loRA0CCTli9o%2Bo4aeXzXafJddhSMtegIV%2B8GuAEOg2ML7Th8EGOqUBSlXaD9r92Tydb7SLDWSITv8%2B%2BYDyd1OnLsXIFF7WsMAuJXsOenyoSEjlm9GDNAmo4kYbOz%2BAi4Y0WXC2%2BnJv7PGOECx0XnbM3Pdxz9z4NxRNF%2FjKAGa9BogZzFEALUWnGPWaxuE%2F5PJoplIvgHAGcTJfAzeIQAmszO9ZYI2Ng%2Bhw0oQihZAJgB%2Bl%2FL6MVGaHMXnW3oYpd4ghZUeHEofXduLXOYVd&X-Amz-Signature=be4bc129879064449fb8d7495abe20b2a256f049be5a1b1b60ba42410b722f51&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXEPUJ6H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIBGH3g4%2F%2FlkvBEuCvXhrohVJFj6QFuuQHqsedEfofpQzAiEA5wDY4DVdRt1rkL%2Fm1Kynf4hjQyPAshm5RmUD4863VsoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvic6aIQfGNS5wtZircAxz6EdWB8BDIGJ3WVwOScVvOHaVQYk3YvXQlilsa1DKwQTrSD%2FzpUtS5I60V%2FqWd0zYKyCYXWu%2FrNr9w%2BQd0kNMG%2BzBpiea15WVm1iG%2BHX8NzAe6z6fthqI4ZYv9aJ7yfkkVZBiwirjYzlpVQtmHqmUgJOt71JStvPz7KTSlglaq354zO6XqAjQfQQfK%2FDoydOherj%2BHb0jWF67h1VGyxwkyXE38xlZ2FVzMPWzdEkjehYFiLU6qWn5JlsiQtE22XYLFq9zbSbAXHdBZdcYo5H%2BvC25kFDdYtP4%2BSSVhPLn86ITs%2BefG5fYosVaDWHqwWrJWQsD9%2BIU8YIn37dhhVKTu%2F%2BzZwPNVuMzLKk9f4VzgtPbiBtuS63HrHEeZT4F6rKAEfEpm3C5pRyKt%2BZgsO2zb%2B6%2FvnvEgFSmVg%2BJbsdoWCK8JjbiAx9Iq1BuqJuU7NZbnLNNW6Mu4g68%2FEpxNclD87B%2B0Vr9QO3wXtZS%2FTzDkAWZxpCx2dmOV3T3KNU3aC9A%2BQKnrorQcXedCe11W5A%2BCowFnUuFuuISsDAcrLpauwdqR%2FHHB6lfNwVPRXuThXlCnCKa4AOofCyw5P2loRA0CCTli9o%2Bo4aeXzXafJddhSMtegIV%2B8GuAEOg2ML7Th8EGOqUBSlXaD9r92Tydb7SLDWSITv8%2B%2BYDyd1OnLsXIFF7WsMAuJXsOenyoSEjlm9GDNAmo4kYbOz%2BAi4Y0WXC2%2BnJv7PGOECx0XnbM3Pdxz9z4NxRNF%2FjKAGa9BogZzFEALUWnGPWaxuE%2F5PJoplIvgHAGcTJfAzeIQAmszO9ZYI2Ng%2Bhw0oQihZAJgB%2Bl%2FL6MVGaHMXnW3oYpd4ghZUeHEofXduLXOYVd&X-Amz-Signature=8336b6ca0066f5c25e8b04e671aebfe329fcc55046f78d64c9b0fcb92d4536c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXEPUJ6H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIBGH3g4%2F%2FlkvBEuCvXhrohVJFj6QFuuQHqsedEfofpQzAiEA5wDY4DVdRt1rkL%2Fm1Kynf4hjQyPAshm5RmUD4863VsoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvic6aIQfGNS5wtZircAxz6EdWB8BDIGJ3WVwOScVvOHaVQYk3YvXQlilsa1DKwQTrSD%2FzpUtS5I60V%2FqWd0zYKyCYXWu%2FrNr9w%2BQd0kNMG%2BzBpiea15WVm1iG%2BHX8NzAe6z6fthqI4ZYv9aJ7yfkkVZBiwirjYzlpVQtmHqmUgJOt71JStvPz7KTSlglaq354zO6XqAjQfQQfK%2FDoydOherj%2BHb0jWF67h1VGyxwkyXE38xlZ2FVzMPWzdEkjehYFiLU6qWn5JlsiQtE22XYLFq9zbSbAXHdBZdcYo5H%2BvC25kFDdYtP4%2BSSVhPLn86ITs%2BefG5fYosVaDWHqwWrJWQsD9%2BIU8YIn37dhhVKTu%2F%2BzZwPNVuMzLKk9f4VzgtPbiBtuS63HrHEeZT4F6rKAEfEpm3C5pRyKt%2BZgsO2zb%2B6%2FvnvEgFSmVg%2BJbsdoWCK8JjbiAx9Iq1BuqJuU7NZbnLNNW6Mu4g68%2FEpxNclD87B%2B0Vr9QO3wXtZS%2FTzDkAWZxpCx2dmOV3T3KNU3aC9A%2BQKnrorQcXedCe11W5A%2BCowFnUuFuuISsDAcrLpauwdqR%2FHHB6lfNwVPRXuThXlCnCKa4AOofCyw5P2loRA0CCTli9o%2Bo4aeXzXafJddhSMtegIV%2B8GuAEOg2ML7Th8EGOqUBSlXaD9r92Tydb7SLDWSITv8%2B%2BYDyd1OnLsXIFF7WsMAuJXsOenyoSEjlm9GDNAmo4kYbOz%2BAi4Y0WXC2%2BnJv7PGOECx0XnbM3Pdxz9z4NxRNF%2FjKAGa9BogZzFEALUWnGPWaxuE%2F5PJoplIvgHAGcTJfAzeIQAmszO9ZYI2Ng%2Bhw0oQihZAJgB%2Bl%2FL6MVGaHMXnW3oYpd4ghZUeHEofXduLXOYVd&X-Amz-Signature=f67684cea6e3c802cc2f8b22065d482a7987584295f3984e1bd1403a23d4564b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
