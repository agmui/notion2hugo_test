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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXU2MO3K%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDb0%2BBfgMIPwAnWWzsE%2BsdSHgdNnQk63vaKK3qOA0MglAiEAsj%2FuQsGOnYcjsJGDeMkAm%2BwJGvQIufz4ruLy7T25x6kq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIiUM2nfmBi4cm40UyrcA04akZjb9GcRcA2XZvSdKicMI2d6feipyha1J2wxH4g%2Fzgb9fhNvKLV9lJPTlsy%2BB2V8UBHW6K%2BYD%2BtawofPaZ7w9eYqX70S6fDeX62aEL%2Bd17vo24Z%2FTGG8N9G9FJK4scm33VdfWRI7WegDk44mkTRzfg97xx0mWvtt8q6DiXt4h7kfWZyNOGwMTn%2BRtylKa6tTqmttSQvEcNW2dYKdw2frjNXRz54f%2F2GtRICSW%2B3K%2FqteQhY907J2%2FvfXt91UsUuytiiKUJkzEsCt4ww8wBe6fy4AjZrWRWRCFGb9tg%2FKk0KQ%2F%2Fx3VtOCvG%2F4Cwwz3L%2B08AkDd3jaHECrtrcyX8Ki4psUg7RduEh02cHd480tNa8o2msDOHLQDKuqLyNum%2F2HhZ8hcSl3CONEn2RxwwTwRt%2BsVyKPszyHc2aOJS8IdsjoI4gNk%2BFO4yX%2FWbnHsHVot86RI3OjnRPHcCymVe%2F%2BCtweUnGKfgbUcuBODzit4rDAILyXyeCoEY5kMTXs3CFpdaS%2Bs0tYatWb0c%2B2BNkfW6XbEWVsY9%2F4pL%2BY6wngvCxrpNwhtxtQcVjOlSvmN060kLuHdi9%2FFFtvK%2FI5zI93XDc%2FRoR28chhxZkqpYj2h9XYdiFGJXxyBj4nMPqPisQGOqUBnU%2F1yMgJHZ4Bhycp0YQBxoSc2GeO1xRp1K27yvuhUuvcI7ErLHiDbYRLfZAmCokxhj8UAwaSTp108yIyGIfU%2BHfSYvgBE15B0sdY3M2nvjDqVk%2FEjmyU%2F1DPybpSXBcwP6LvtlekkYocBmGDlQwt4NvdcY4VeGe92r0f7TEivQfqddZovcvkw%2BoUElT6U%2F1uJ1LyDc999ubnP%2FefFwCQfzVjUmqc&X-Amz-Signature=bc4eebc88fb1d36c2fd4c043eb41f59229cbd4ee03272da933bb59b4d43056d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXU2MO3K%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDb0%2BBfgMIPwAnWWzsE%2BsdSHgdNnQk63vaKK3qOA0MglAiEAsj%2FuQsGOnYcjsJGDeMkAm%2BwJGvQIufz4ruLy7T25x6kq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIiUM2nfmBi4cm40UyrcA04akZjb9GcRcA2XZvSdKicMI2d6feipyha1J2wxH4g%2Fzgb9fhNvKLV9lJPTlsy%2BB2V8UBHW6K%2BYD%2BtawofPaZ7w9eYqX70S6fDeX62aEL%2Bd17vo24Z%2FTGG8N9G9FJK4scm33VdfWRI7WegDk44mkTRzfg97xx0mWvtt8q6DiXt4h7kfWZyNOGwMTn%2BRtylKa6tTqmttSQvEcNW2dYKdw2frjNXRz54f%2F2GtRICSW%2B3K%2FqteQhY907J2%2FvfXt91UsUuytiiKUJkzEsCt4ww8wBe6fy4AjZrWRWRCFGb9tg%2FKk0KQ%2F%2Fx3VtOCvG%2F4Cwwz3L%2B08AkDd3jaHECrtrcyX8Ki4psUg7RduEh02cHd480tNa8o2msDOHLQDKuqLyNum%2F2HhZ8hcSl3CONEn2RxwwTwRt%2BsVyKPszyHc2aOJS8IdsjoI4gNk%2BFO4yX%2FWbnHsHVot86RI3OjnRPHcCymVe%2F%2BCtweUnGKfgbUcuBODzit4rDAILyXyeCoEY5kMTXs3CFpdaS%2Bs0tYatWb0c%2B2BNkfW6XbEWVsY9%2F4pL%2BY6wngvCxrpNwhtxtQcVjOlSvmN060kLuHdi9%2FFFtvK%2FI5zI93XDc%2FRoR28chhxZkqpYj2h9XYdiFGJXxyBj4nMPqPisQGOqUBnU%2F1yMgJHZ4Bhycp0YQBxoSc2GeO1xRp1K27yvuhUuvcI7ErLHiDbYRLfZAmCokxhj8UAwaSTp108yIyGIfU%2BHfSYvgBE15B0sdY3M2nvjDqVk%2FEjmyU%2F1DPybpSXBcwP6LvtlekkYocBmGDlQwt4NvdcY4VeGe92r0f7TEivQfqddZovcvkw%2BoUElT6U%2F1uJ1LyDc999ubnP%2FefFwCQfzVjUmqc&X-Amz-Signature=68305454e79664c8cbf718be6d606f082d80353fab9f4f54b9fbf5ce5441db05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXU2MO3K%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDb0%2BBfgMIPwAnWWzsE%2BsdSHgdNnQk63vaKK3qOA0MglAiEAsj%2FuQsGOnYcjsJGDeMkAm%2BwJGvQIufz4ruLy7T25x6kq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIiUM2nfmBi4cm40UyrcA04akZjb9GcRcA2XZvSdKicMI2d6feipyha1J2wxH4g%2Fzgb9fhNvKLV9lJPTlsy%2BB2V8UBHW6K%2BYD%2BtawofPaZ7w9eYqX70S6fDeX62aEL%2Bd17vo24Z%2FTGG8N9G9FJK4scm33VdfWRI7WegDk44mkTRzfg97xx0mWvtt8q6DiXt4h7kfWZyNOGwMTn%2BRtylKa6tTqmttSQvEcNW2dYKdw2frjNXRz54f%2F2GtRICSW%2B3K%2FqteQhY907J2%2FvfXt91UsUuytiiKUJkzEsCt4ww8wBe6fy4AjZrWRWRCFGb9tg%2FKk0KQ%2F%2Fx3VtOCvG%2F4Cwwz3L%2B08AkDd3jaHECrtrcyX8Ki4psUg7RduEh02cHd480tNa8o2msDOHLQDKuqLyNum%2F2HhZ8hcSl3CONEn2RxwwTwRt%2BsVyKPszyHc2aOJS8IdsjoI4gNk%2BFO4yX%2FWbnHsHVot86RI3OjnRPHcCymVe%2F%2BCtweUnGKfgbUcuBODzit4rDAILyXyeCoEY5kMTXs3CFpdaS%2Bs0tYatWb0c%2B2BNkfW6XbEWVsY9%2F4pL%2BY6wngvCxrpNwhtxtQcVjOlSvmN060kLuHdi9%2FFFtvK%2FI5zI93XDc%2FRoR28chhxZkqpYj2h9XYdiFGJXxyBj4nMPqPisQGOqUBnU%2F1yMgJHZ4Bhycp0YQBxoSc2GeO1xRp1K27yvuhUuvcI7ErLHiDbYRLfZAmCokxhj8UAwaSTp108yIyGIfU%2BHfSYvgBE15B0sdY3M2nvjDqVk%2FEjmyU%2F1DPybpSXBcwP6LvtlekkYocBmGDlQwt4NvdcY4VeGe92r0f7TEivQfqddZovcvkw%2BoUElT6U%2F1uJ1LyDc999ubnP%2FefFwCQfzVjUmqc&X-Amz-Signature=b02ab4d6d305422aeaf86640ae58956b7b5b5e41c09ab032611c3ffe8db0abd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXU2MO3K%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDb0%2BBfgMIPwAnWWzsE%2BsdSHgdNnQk63vaKK3qOA0MglAiEAsj%2FuQsGOnYcjsJGDeMkAm%2BwJGvQIufz4ruLy7T25x6kq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIiUM2nfmBi4cm40UyrcA04akZjb9GcRcA2XZvSdKicMI2d6feipyha1J2wxH4g%2Fzgb9fhNvKLV9lJPTlsy%2BB2V8UBHW6K%2BYD%2BtawofPaZ7w9eYqX70S6fDeX62aEL%2Bd17vo24Z%2FTGG8N9G9FJK4scm33VdfWRI7WegDk44mkTRzfg97xx0mWvtt8q6DiXt4h7kfWZyNOGwMTn%2BRtylKa6tTqmttSQvEcNW2dYKdw2frjNXRz54f%2F2GtRICSW%2B3K%2FqteQhY907J2%2FvfXt91UsUuytiiKUJkzEsCt4ww8wBe6fy4AjZrWRWRCFGb9tg%2FKk0KQ%2F%2Fx3VtOCvG%2F4Cwwz3L%2B08AkDd3jaHECrtrcyX8Ki4psUg7RduEh02cHd480tNa8o2msDOHLQDKuqLyNum%2F2HhZ8hcSl3CONEn2RxwwTwRt%2BsVyKPszyHc2aOJS8IdsjoI4gNk%2BFO4yX%2FWbnHsHVot86RI3OjnRPHcCymVe%2F%2BCtweUnGKfgbUcuBODzit4rDAILyXyeCoEY5kMTXs3CFpdaS%2Bs0tYatWb0c%2B2BNkfW6XbEWVsY9%2F4pL%2BY6wngvCxrpNwhtxtQcVjOlSvmN060kLuHdi9%2FFFtvK%2FI5zI93XDc%2FRoR28chhxZkqpYj2h9XYdiFGJXxyBj4nMPqPisQGOqUBnU%2F1yMgJHZ4Bhycp0YQBxoSc2GeO1xRp1K27yvuhUuvcI7ErLHiDbYRLfZAmCokxhj8UAwaSTp108yIyGIfU%2BHfSYvgBE15B0sdY3M2nvjDqVk%2FEjmyU%2F1DPybpSXBcwP6LvtlekkYocBmGDlQwt4NvdcY4VeGe92r0f7TEivQfqddZovcvkw%2BoUElT6U%2F1uJ1LyDc999ubnP%2FefFwCQfzVjUmqc&X-Amz-Signature=15d7e0420b5b23cc70355b0ed8b68a8b38d172c362dcb3a18225895d1bf9b011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXU2MO3K%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDb0%2BBfgMIPwAnWWzsE%2BsdSHgdNnQk63vaKK3qOA0MglAiEAsj%2FuQsGOnYcjsJGDeMkAm%2BwJGvQIufz4ruLy7T25x6kq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIiUM2nfmBi4cm40UyrcA04akZjb9GcRcA2XZvSdKicMI2d6feipyha1J2wxH4g%2Fzgb9fhNvKLV9lJPTlsy%2BB2V8UBHW6K%2BYD%2BtawofPaZ7w9eYqX70S6fDeX62aEL%2Bd17vo24Z%2FTGG8N9G9FJK4scm33VdfWRI7WegDk44mkTRzfg97xx0mWvtt8q6DiXt4h7kfWZyNOGwMTn%2BRtylKa6tTqmttSQvEcNW2dYKdw2frjNXRz54f%2F2GtRICSW%2B3K%2FqteQhY907J2%2FvfXt91UsUuytiiKUJkzEsCt4ww8wBe6fy4AjZrWRWRCFGb9tg%2FKk0KQ%2F%2Fx3VtOCvG%2F4Cwwz3L%2B08AkDd3jaHECrtrcyX8Ki4psUg7RduEh02cHd480tNa8o2msDOHLQDKuqLyNum%2F2HhZ8hcSl3CONEn2RxwwTwRt%2BsVyKPszyHc2aOJS8IdsjoI4gNk%2BFO4yX%2FWbnHsHVot86RI3OjnRPHcCymVe%2F%2BCtweUnGKfgbUcuBODzit4rDAILyXyeCoEY5kMTXs3CFpdaS%2Bs0tYatWb0c%2B2BNkfW6XbEWVsY9%2F4pL%2BY6wngvCxrpNwhtxtQcVjOlSvmN060kLuHdi9%2FFFtvK%2FI5zI93XDc%2FRoR28chhxZkqpYj2h9XYdiFGJXxyBj4nMPqPisQGOqUBnU%2F1yMgJHZ4Bhycp0YQBxoSc2GeO1xRp1K27yvuhUuvcI7ErLHiDbYRLfZAmCokxhj8UAwaSTp108yIyGIfU%2BHfSYvgBE15B0sdY3M2nvjDqVk%2FEjmyU%2F1DPybpSXBcwP6LvtlekkYocBmGDlQwt4NvdcY4VeGe92r0f7TEivQfqddZovcvkw%2BoUElT6U%2F1uJ1LyDc999ubnP%2FefFwCQfzVjUmqc&X-Amz-Signature=bb37ba89986a8760044ac6b4c4fabbf28eaf082dd45b611c40657113b9e8c9ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
