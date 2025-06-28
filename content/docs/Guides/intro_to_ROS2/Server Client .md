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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP7CQ62U%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgP%2FUL8RQyfmdXV3CT7xizJcvYvhVqxRDeUHA1kQotzAiEAvRcL5ABnN412SxnLHP7DsxhMXZNBwq4cosHXYeodQKcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYXOVhJkpaiHb3z2SrcA8vJmczK%2BEyJ3tDDn2Dn7DFGy9bCtRfrM79H4jx%2FhifyjzzAaSfzmecpmxYjXH2EwE15f54WzgmVwwCMpN%2Bopz3vKuhTcCkODt0b0VUK9Ice4CpWzcqIXlEFIbg611CDEg9LyKlGxEKMO0GUZ7PLeXXxn%2FR21%2FQUlOUI45AqFvEylnJ%2BXJTCTi%2F1VZ5jiRNBYjgYbK8Bpy7umx8xok%2BDM2Y0ku5L4dAQeYwwDllLKOaXmLxw0LGz7%2BaGnA7zQnjcoTwknjC4zgnJYdCYRoVGLpDEF7lEA9JYjWaSLYG0kOlksx2cZ9VC9IlpxZ7id8fbmZ0XPcxUb1nMxxdEu3Wv3qc2t9YU8BRPjpyUXZbauI%2BmiUISNRD7wFPwTkQ3%2FEYAXU1e4JccS2NFbNkx8iK%2FfuRNxyOB%2FZcba15wXH6kxEOwohT9GhBizVU6ogJak6fENak72OT1o%2F%2B8Zsw4xULp5mQXCpdOXpc2aiLNYpxLgkGfevUr%2BCrFhk%2BmLshdsEgXyLweLDX9a2WB1Dyl%2BgiGKuMZTGkp6Hsy%2BxJcDOjwgCf0MDhwQIFrWCTMHQDp1XCNAKLwfocjm162%2B4GQeP4iT0b9jjDqOYH0msy1zXbmK4xKjXkvkZpulWtvtyHyMPPMgMMGOqUBpjYhN309hBLKGgyjbRDhY00A2gzvI8mj2DAgpoR%2B8v%2FCMXKP8s3JYWpbQxtECKAApz%2BUvXRdAR82hlczRs4lgLebDx735I%2FkEkkpNETBiXw9tKoEo1xGQlSPTBUcdE1FStH7c%2F4luHtMdo1RgswstswxiiprYSrMQaxsVYmyxFzLAeoHnJiOvBLkfmci%2FDwXA2%2BHZzXKQjNCse0mOLF0Ys8SPlCB&X-Amz-Signature=574bc68c4ab10471f57b2faca517fbc51bbe282461c0a10937c20eb876e07c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP7CQ62U%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgP%2FUL8RQyfmdXV3CT7xizJcvYvhVqxRDeUHA1kQotzAiEAvRcL5ABnN412SxnLHP7DsxhMXZNBwq4cosHXYeodQKcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYXOVhJkpaiHb3z2SrcA8vJmczK%2BEyJ3tDDn2Dn7DFGy9bCtRfrM79H4jx%2FhifyjzzAaSfzmecpmxYjXH2EwE15f54WzgmVwwCMpN%2Bopz3vKuhTcCkODt0b0VUK9Ice4CpWzcqIXlEFIbg611CDEg9LyKlGxEKMO0GUZ7PLeXXxn%2FR21%2FQUlOUI45AqFvEylnJ%2BXJTCTi%2F1VZ5jiRNBYjgYbK8Bpy7umx8xok%2BDM2Y0ku5L4dAQeYwwDllLKOaXmLxw0LGz7%2BaGnA7zQnjcoTwknjC4zgnJYdCYRoVGLpDEF7lEA9JYjWaSLYG0kOlksx2cZ9VC9IlpxZ7id8fbmZ0XPcxUb1nMxxdEu3Wv3qc2t9YU8BRPjpyUXZbauI%2BmiUISNRD7wFPwTkQ3%2FEYAXU1e4JccS2NFbNkx8iK%2FfuRNxyOB%2FZcba15wXH6kxEOwohT9GhBizVU6ogJak6fENak72OT1o%2F%2B8Zsw4xULp5mQXCpdOXpc2aiLNYpxLgkGfevUr%2BCrFhk%2BmLshdsEgXyLweLDX9a2WB1Dyl%2BgiGKuMZTGkp6Hsy%2BxJcDOjwgCf0MDhwQIFrWCTMHQDp1XCNAKLwfocjm162%2B4GQeP4iT0b9jjDqOYH0msy1zXbmK4xKjXkvkZpulWtvtyHyMPPMgMMGOqUBpjYhN309hBLKGgyjbRDhY00A2gzvI8mj2DAgpoR%2B8v%2FCMXKP8s3JYWpbQxtECKAApz%2BUvXRdAR82hlczRs4lgLebDx735I%2FkEkkpNETBiXw9tKoEo1xGQlSPTBUcdE1FStH7c%2F4luHtMdo1RgswstswxiiprYSrMQaxsVYmyxFzLAeoHnJiOvBLkfmci%2FDwXA2%2BHZzXKQjNCse0mOLF0Ys8SPlCB&X-Amz-Signature=bbd3ef68c389f8965dc2db79685a65f76f3e169d2786547c2469334b5935d8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP7CQ62U%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgP%2FUL8RQyfmdXV3CT7xizJcvYvhVqxRDeUHA1kQotzAiEAvRcL5ABnN412SxnLHP7DsxhMXZNBwq4cosHXYeodQKcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYXOVhJkpaiHb3z2SrcA8vJmczK%2BEyJ3tDDn2Dn7DFGy9bCtRfrM79H4jx%2FhifyjzzAaSfzmecpmxYjXH2EwE15f54WzgmVwwCMpN%2Bopz3vKuhTcCkODt0b0VUK9Ice4CpWzcqIXlEFIbg611CDEg9LyKlGxEKMO0GUZ7PLeXXxn%2FR21%2FQUlOUI45AqFvEylnJ%2BXJTCTi%2F1VZ5jiRNBYjgYbK8Bpy7umx8xok%2BDM2Y0ku5L4dAQeYwwDllLKOaXmLxw0LGz7%2BaGnA7zQnjcoTwknjC4zgnJYdCYRoVGLpDEF7lEA9JYjWaSLYG0kOlksx2cZ9VC9IlpxZ7id8fbmZ0XPcxUb1nMxxdEu3Wv3qc2t9YU8BRPjpyUXZbauI%2BmiUISNRD7wFPwTkQ3%2FEYAXU1e4JccS2NFbNkx8iK%2FfuRNxyOB%2FZcba15wXH6kxEOwohT9GhBizVU6ogJak6fENak72OT1o%2F%2B8Zsw4xULp5mQXCpdOXpc2aiLNYpxLgkGfevUr%2BCrFhk%2BmLshdsEgXyLweLDX9a2WB1Dyl%2BgiGKuMZTGkp6Hsy%2BxJcDOjwgCf0MDhwQIFrWCTMHQDp1XCNAKLwfocjm162%2B4GQeP4iT0b9jjDqOYH0msy1zXbmK4xKjXkvkZpulWtvtyHyMPPMgMMGOqUBpjYhN309hBLKGgyjbRDhY00A2gzvI8mj2DAgpoR%2B8v%2FCMXKP8s3JYWpbQxtECKAApz%2BUvXRdAR82hlczRs4lgLebDx735I%2FkEkkpNETBiXw9tKoEo1xGQlSPTBUcdE1FStH7c%2F4luHtMdo1RgswstswxiiprYSrMQaxsVYmyxFzLAeoHnJiOvBLkfmci%2FDwXA2%2BHZzXKQjNCse0mOLF0Ys8SPlCB&X-Amz-Signature=d3c89936aed8d4e7b5ec1f3346369f7b4eaf2979c7b043c14f89e401b5004f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP7CQ62U%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgP%2FUL8RQyfmdXV3CT7xizJcvYvhVqxRDeUHA1kQotzAiEAvRcL5ABnN412SxnLHP7DsxhMXZNBwq4cosHXYeodQKcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYXOVhJkpaiHb3z2SrcA8vJmczK%2BEyJ3tDDn2Dn7DFGy9bCtRfrM79H4jx%2FhifyjzzAaSfzmecpmxYjXH2EwE15f54WzgmVwwCMpN%2Bopz3vKuhTcCkODt0b0VUK9Ice4CpWzcqIXlEFIbg611CDEg9LyKlGxEKMO0GUZ7PLeXXxn%2FR21%2FQUlOUI45AqFvEylnJ%2BXJTCTi%2F1VZ5jiRNBYjgYbK8Bpy7umx8xok%2BDM2Y0ku5L4dAQeYwwDllLKOaXmLxw0LGz7%2BaGnA7zQnjcoTwknjC4zgnJYdCYRoVGLpDEF7lEA9JYjWaSLYG0kOlksx2cZ9VC9IlpxZ7id8fbmZ0XPcxUb1nMxxdEu3Wv3qc2t9YU8BRPjpyUXZbauI%2BmiUISNRD7wFPwTkQ3%2FEYAXU1e4JccS2NFbNkx8iK%2FfuRNxyOB%2FZcba15wXH6kxEOwohT9GhBizVU6ogJak6fENak72OT1o%2F%2B8Zsw4xULp5mQXCpdOXpc2aiLNYpxLgkGfevUr%2BCrFhk%2BmLshdsEgXyLweLDX9a2WB1Dyl%2BgiGKuMZTGkp6Hsy%2BxJcDOjwgCf0MDhwQIFrWCTMHQDp1XCNAKLwfocjm162%2B4GQeP4iT0b9jjDqOYH0msy1zXbmK4xKjXkvkZpulWtvtyHyMPPMgMMGOqUBpjYhN309hBLKGgyjbRDhY00A2gzvI8mj2DAgpoR%2B8v%2FCMXKP8s3JYWpbQxtECKAApz%2BUvXRdAR82hlczRs4lgLebDx735I%2FkEkkpNETBiXw9tKoEo1xGQlSPTBUcdE1FStH7c%2F4luHtMdo1RgswstswxiiprYSrMQaxsVYmyxFzLAeoHnJiOvBLkfmci%2FDwXA2%2BHZzXKQjNCse0mOLF0Ys8SPlCB&X-Amz-Signature=2d08783430264766413bf745cbcd0690bc6ac2cc2b3bbabc933615864ef431ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP7CQ62U%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgP%2FUL8RQyfmdXV3CT7xizJcvYvhVqxRDeUHA1kQotzAiEAvRcL5ABnN412SxnLHP7DsxhMXZNBwq4cosHXYeodQKcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYXOVhJkpaiHb3z2SrcA8vJmczK%2BEyJ3tDDn2Dn7DFGy9bCtRfrM79H4jx%2FhifyjzzAaSfzmecpmxYjXH2EwE15f54WzgmVwwCMpN%2Bopz3vKuhTcCkODt0b0VUK9Ice4CpWzcqIXlEFIbg611CDEg9LyKlGxEKMO0GUZ7PLeXXxn%2FR21%2FQUlOUI45AqFvEylnJ%2BXJTCTi%2F1VZ5jiRNBYjgYbK8Bpy7umx8xok%2BDM2Y0ku5L4dAQeYwwDllLKOaXmLxw0LGz7%2BaGnA7zQnjcoTwknjC4zgnJYdCYRoVGLpDEF7lEA9JYjWaSLYG0kOlksx2cZ9VC9IlpxZ7id8fbmZ0XPcxUb1nMxxdEu3Wv3qc2t9YU8BRPjpyUXZbauI%2BmiUISNRD7wFPwTkQ3%2FEYAXU1e4JccS2NFbNkx8iK%2FfuRNxyOB%2FZcba15wXH6kxEOwohT9GhBizVU6ogJak6fENak72OT1o%2F%2B8Zsw4xULp5mQXCpdOXpc2aiLNYpxLgkGfevUr%2BCrFhk%2BmLshdsEgXyLweLDX9a2WB1Dyl%2BgiGKuMZTGkp6Hsy%2BxJcDOjwgCf0MDhwQIFrWCTMHQDp1XCNAKLwfocjm162%2B4GQeP4iT0b9jjDqOYH0msy1zXbmK4xKjXkvkZpulWtvtyHyMPPMgMMGOqUBpjYhN309hBLKGgyjbRDhY00A2gzvI8mj2DAgpoR%2B8v%2FCMXKP8s3JYWpbQxtECKAApz%2BUvXRdAR82hlczRs4lgLebDx735I%2FkEkkpNETBiXw9tKoEo1xGQlSPTBUcdE1FStH7c%2F4luHtMdo1RgswstswxiiprYSrMQaxsVYmyxFzLAeoHnJiOvBLkfmci%2FDwXA2%2BHZzXKQjNCse0mOLF0Ys8SPlCB&X-Amz-Signature=3706c794b0a8335a6160d5620bbfa4e3e7feb20ce39423fc58bf644b054b8809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
