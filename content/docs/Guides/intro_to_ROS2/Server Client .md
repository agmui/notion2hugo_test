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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XHE5F7E%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCFUXoaIMJ1nXSMN07hlZoaI3TrSBL16jZyVn6L%2B1KT3AIgJE9iysf%2BWsCcrKwLG6d%2BtL4A9fRwn6Bt8gdGw%2B1nY7oqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHBxEs61xr36W7V1SrcA3xlbhubDbNxQGUv0yIlocNkMiOieyR14%2Fvsj0j2rF2bT0kFc4T%2F6m2I%2F5ofkXOVW%2B%2BbN03S9ltjfeiEkIviXuTn5Tpk3BO8zNorh5lPxXzXAK3eCyliHmf%2BuU9GEPthFJaPB%2FOLmxfBFsTuCnFEZPn%2BksnDyhUmLTSxEEBqtzArw148ktl2i1WYR0VnBmLt7inqulou3Y7GnMfQLdNEL8F9eIdnnesWg7Pz6iQrW%2BJDjqldgqil47IXDORMARnshUiUpbAWC7l0fPOshU7YRoRptzM%2Bdxuj780civp9apP8UK5utNuIupyCRhAnTp3QJxsUvIy5P3AGyLl2N%2BdgSbB3miBvWaiJFnTxMs8LhmVLOq0ASvSuVT3vb%2Ftewas%2FWPj6PJSpg8Gbzl6gP%2BXjG4i0dzDeP4C%2FlVKcveWkGs%2FKgzflf%2FQKYAQz0icBufaEcAALriK%2FLcOxvkEzXjG7OAlckhKvPsNwP0Gg6KADiBBLYlbTfhjzby0sJGyqZArHExJ0HaMmiiQUUGkUDG9Vm3YiNiJVAhMkKWk%2B4dRL%2F1ZpAAnJ2AGC7cZgnA30C%2B4KTvxNqURuf01dpq7ve2ZrAJ20QJVrm2Q8Gf8nOQ2j4cD%2FcSv9dHWkPhlkSajkMLHxm8AGOqUB5qlej611bZRGg7t3cmfS0o%2Bl1tZEh1QNmswsckFcYNY0FF7FYr30SX1B0tz6dlst7pDoYUsWMCm8QO8Njr9wcSLiH1BaI2WRTQ9vEFHED36kUtA76BxUB5vzkIwk03AZrkRIpizONcMqyh3iyskpW3Wkbxyj72y00DJxuvBscvPnQjROSkwwTD9GyF50XsYb5yOfHhuWkSO6%2BoXh98DBA0BSatFs&X-Amz-Signature=e4b882f25ea3945705829dca4a8a036f173f212d9dbe45e5e0cb950eba6be8af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XHE5F7E%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCFUXoaIMJ1nXSMN07hlZoaI3TrSBL16jZyVn6L%2B1KT3AIgJE9iysf%2BWsCcrKwLG6d%2BtL4A9fRwn6Bt8gdGw%2B1nY7oqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHBxEs61xr36W7V1SrcA3xlbhubDbNxQGUv0yIlocNkMiOieyR14%2Fvsj0j2rF2bT0kFc4T%2F6m2I%2F5ofkXOVW%2B%2BbN03S9ltjfeiEkIviXuTn5Tpk3BO8zNorh5lPxXzXAK3eCyliHmf%2BuU9GEPthFJaPB%2FOLmxfBFsTuCnFEZPn%2BksnDyhUmLTSxEEBqtzArw148ktl2i1WYR0VnBmLt7inqulou3Y7GnMfQLdNEL8F9eIdnnesWg7Pz6iQrW%2BJDjqldgqil47IXDORMARnshUiUpbAWC7l0fPOshU7YRoRptzM%2Bdxuj780civp9apP8UK5utNuIupyCRhAnTp3QJxsUvIy5P3AGyLl2N%2BdgSbB3miBvWaiJFnTxMs8LhmVLOq0ASvSuVT3vb%2Ftewas%2FWPj6PJSpg8Gbzl6gP%2BXjG4i0dzDeP4C%2FlVKcveWkGs%2FKgzflf%2FQKYAQz0icBufaEcAALriK%2FLcOxvkEzXjG7OAlckhKvPsNwP0Gg6KADiBBLYlbTfhjzby0sJGyqZArHExJ0HaMmiiQUUGkUDG9Vm3YiNiJVAhMkKWk%2B4dRL%2F1ZpAAnJ2AGC7cZgnA30C%2B4KTvxNqURuf01dpq7ve2ZrAJ20QJVrm2Q8Gf8nOQ2j4cD%2FcSv9dHWkPhlkSajkMLHxm8AGOqUB5qlej611bZRGg7t3cmfS0o%2Bl1tZEh1QNmswsckFcYNY0FF7FYr30SX1B0tz6dlst7pDoYUsWMCm8QO8Njr9wcSLiH1BaI2WRTQ9vEFHED36kUtA76BxUB5vzkIwk03AZrkRIpizONcMqyh3iyskpW3Wkbxyj72y00DJxuvBscvPnQjROSkwwTD9GyF50XsYb5yOfHhuWkSO6%2BoXh98DBA0BSatFs&X-Amz-Signature=1ee16988d7071b8e5b8f16a4a8e1cc29156e3a861dfcbc982f3324f85066d5a5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XHE5F7E%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCFUXoaIMJ1nXSMN07hlZoaI3TrSBL16jZyVn6L%2B1KT3AIgJE9iysf%2BWsCcrKwLG6d%2BtL4A9fRwn6Bt8gdGw%2B1nY7oqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHBxEs61xr36W7V1SrcA3xlbhubDbNxQGUv0yIlocNkMiOieyR14%2Fvsj0j2rF2bT0kFc4T%2F6m2I%2F5ofkXOVW%2B%2BbN03S9ltjfeiEkIviXuTn5Tpk3BO8zNorh5lPxXzXAK3eCyliHmf%2BuU9GEPthFJaPB%2FOLmxfBFsTuCnFEZPn%2BksnDyhUmLTSxEEBqtzArw148ktl2i1WYR0VnBmLt7inqulou3Y7GnMfQLdNEL8F9eIdnnesWg7Pz6iQrW%2BJDjqldgqil47IXDORMARnshUiUpbAWC7l0fPOshU7YRoRptzM%2Bdxuj780civp9apP8UK5utNuIupyCRhAnTp3QJxsUvIy5P3AGyLl2N%2BdgSbB3miBvWaiJFnTxMs8LhmVLOq0ASvSuVT3vb%2Ftewas%2FWPj6PJSpg8Gbzl6gP%2BXjG4i0dzDeP4C%2FlVKcveWkGs%2FKgzflf%2FQKYAQz0icBufaEcAALriK%2FLcOxvkEzXjG7OAlckhKvPsNwP0Gg6KADiBBLYlbTfhjzby0sJGyqZArHExJ0HaMmiiQUUGkUDG9Vm3YiNiJVAhMkKWk%2B4dRL%2F1ZpAAnJ2AGC7cZgnA30C%2B4KTvxNqURuf01dpq7ve2ZrAJ20QJVrm2Q8Gf8nOQ2j4cD%2FcSv9dHWkPhlkSajkMLHxm8AGOqUB5qlej611bZRGg7t3cmfS0o%2Bl1tZEh1QNmswsckFcYNY0FF7FYr30SX1B0tz6dlst7pDoYUsWMCm8QO8Njr9wcSLiH1BaI2WRTQ9vEFHED36kUtA76BxUB5vzkIwk03AZrkRIpizONcMqyh3iyskpW3Wkbxyj72y00DJxuvBscvPnQjROSkwwTD9GyF50XsYb5yOfHhuWkSO6%2BoXh98DBA0BSatFs&X-Amz-Signature=7b58c56c02a45a628218cf8856bd19cd144d8daff5868bdc71eee352258a6a5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XHE5F7E%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCFUXoaIMJ1nXSMN07hlZoaI3TrSBL16jZyVn6L%2B1KT3AIgJE9iysf%2BWsCcrKwLG6d%2BtL4A9fRwn6Bt8gdGw%2B1nY7oqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHBxEs61xr36W7V1SrcA3xlbhubDbNxQGUv0yIlocNkMiOieyR14%2Fvsj0j2rF2bT0kFc4T%2F6m2I%2F5ofkXOVW%2B%2BbN03S9ltjfeiEkIviXuTn5Tpk3BO8zNorh5lPxXzXAK3eCyliHmf%2BuU9GEPthFJaPB%2FOLmxfBFsTuCnFEZPn%2BksnDyhUmLTSxEEBqtzArw148ktl2i1WYR0VnBmLt7inqulou3Y7GnMfQLdNEL8F9eIdnnesWg7Pz6iQrW%2BJDjqldgqil47IXDORMARnshUiUpbAWC7l0fPOshU7YRoRptzM%2Bdxuj780civp9apP8UK5utNuIupyCRhAnTp3QJxsUvIy5P3AGyLl2N%2BdgSbB3miBvWaiJFnTxMs8LhmVLOq0ASvSuVT3vb%2Ftewas%2FWPj6PJSpg8Gbzl6gP%2BXjG4i0dzDeP4C%2FlVKcveWkGs%2FKgzflf%2FQKYAQz0icBufaEcAALriK%2FLcOxvkEzXjG7OAlckhKvPsNwP0Gg6KADiBBLYlbTfhjzby0sJGyqZArHExJ0HaMmiiQUUGkUDG9Vm3YiNiJVAhMkKWk%2B4dRL%2F1ZpAAnJ2AGC7cZgnA30C%2B4KTvxNqURuf01dpq7ve2ZrAJ20QJVrm2Q8Gf8nOQ2j4cD%2FcSv9dHWkPhlkSajkMLHxm8AGOqUB5qlej611bZRGg7t3cmfS0o%2Bl1tZEh1QNmswsckFcYNY0FF7FYr30SX1B0tz6dlst7pDoYUsWMCm8QO8Njr9wcSLiH1BaI2WRTQ9vEFHED36kUtA76BxUB5vzkIwk03AZrkRIpizONcMqyh3iyskpW3Wkbxyj72y00DJxuvBscvPnQjROSkwwTD9GyF50XsYb5yOfHhuWkSO6%2BoXh98DBA0BSatFs&X-Amz-Signature=63cfb9e1095bbd6663c6fa99b4fba469330b957e327ca639c3a1b38360bfdeb6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XHE5F7E%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCFUXoaIMJ1nXSMN07hlZoaI3TrSBL16jZyVn6L%2B1KT3AIgJE9iysf%2BWsCcrKwLG6d%2BtL4A9fRwn6Bt8gdGw%2B1nY7oqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHBxEs61xr36W7V1SrcA3xlbhubDbNxQGUv0yIlocNkMiOieyR14%2Fvsj0j2rF2bT0kFc4T%2F6m2I%2F5ofkXOVW%2B%2BbN03S9ltjfeiEkIviXuTn5Tpk3BO8zNorh5lPxXzXAK3eCyliHmf%2BuU9GEPthFJaPB%2FOLmxfBFsTuCnFEZPn%2BksnDyhUmLTSxEEBqtzArw148ktl2i1WYR0VnBmLt7inqulou3Y7GnMfQLdNEL8F9eIdnnesWg7Pz6iQrW%2BJDjqldgqil47IXDORMARnshUiUpbAWC7l0fPOshU7YRoRptzM%2Bdxuj780civp9apP8UK5utNuIupyCRhAnTp3QJxsUvIy5P3AGyLl2N%2BdgSbB3miBvWaiJFnTxMs8LhmVLOq0ASvSuVT3vb%2Ftewas%2FWPj6PJSpg8Gbzl6gP%2BXjG4i0dzDeP4C%2FlVKcveWkGs%2FKgzflf%2FQKYAQz0icBufaEcAALriK%2FLcOxvkEzXjG7OAlckhKvPsNwP0Gg6KADiBBLYlbTfhjzby0sJGyqZArHExJ0HaMmiiQUUGkUDG9Vm3YiNiJVAhMkKWk%2B4dRL%2F1ZpAAnJ2AGC7cZgnA30C%2B4KTvxNqURuf01dpq7ve2ZrAJ20QJVrm2Q8Gf8nOQ2j4cD%2FcSv9dHWkPhlkSajkMLHxm8AGOqUB5qlej611bZRGg7t3cmfS0o%2Bl1tZEh1QNmswsckFcYNY0FF7FYr30SX1B0tz6dlst7pDoYUsWMCm8QO8Njr9wcSLiH1BaI2WRTQ9vEFHED36kUtA76BxUB5vzkIwk03AZrkRIpizONcMqyh3iyskpW3Wkbxyj72y00DJxuvBscvPnQjROSkwwTD9GyF50XsYb5yOfHhuWkSO6%2BoXh98DBA0BSatFs&X-Amz-Signature=87f24ef27feacfd22a0190fb49d1fa9dcaca5890662188449549af125e2bad2b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
