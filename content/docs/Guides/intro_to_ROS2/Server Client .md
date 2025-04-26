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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YLUME5C%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSA3VfVQX8RdggyNBwQbqW%2FqPQXuHoQd1CtCXzJqdDOgIgU83QorAkmG28aJv9lS0PBOjdrFUyAtUPAKcHx0TWgIEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEUTlhurTedXn8qw0ircAyeEJBF0p5hN7NkmTgqURN5c5EDdOyirTitB3%2F0wBh3%2FNvpI5Zh7sYZK6k9KiKJMBwPmykyDWPIge%2BpRNWJhr4iksgDOrA8ki2nxV6RSSmZDegUA2V5X0ITQzh%2B58pmIr3R3kvQyRoSAFFNsy3NmnwXHl%2FpiKhdy%2BTrLNZYw9hzcDhL1Ldc1qX9V4CSbnAvufxe2X%2F7JTRWheMQgxyXur8dz%2BFIjpoAjSGNB3lM8qoqV7b5a0BlTe53IwiPcwABKZv%2BFjOpjVRXmBcFhxfYSB7EFfxobSQuvVJHodbtc2xvX2yr66aV9Epq0GaAqw8nOZtZ%2FC3JJoKRVsnJDlD5UfZ4nN4crFekrH4hhb670nkPlDkqx6Inm9EycAgS2a4l1EjQScPPBnZyHYfju8ZL7gj1FGCeIQx0PCJxIh3XTLFh%2BbHc3HjU3AErelAAjskJsKzyq2cRiydaLw65NkJT3xwyWCdkzkmS%2BtlM8tZSSINxH9%2Fu0MNyPWUIsYewoxYeIlfrSF5tKQOeF5oomi3dTP%2Bv3zAUrIj6hyUZwbP24VPSGLFN0kRDEQt3RcYw2xQPhX5ktY%2FGb9hTPALTLBftL0KpQK5VKpMhbg0Pl47HEHN8Y%2F%2FOwYQ%2BrJ8f8B1saML7dtMAGOqUBB%2Fc%2FLbqGJI62IK5G0V54Bfe6MU3nTVCptvc8bW0MLtBvLuMLGRlNs6OWJ509PnBZX8y6ZKUa5hedyoI9NPpB%2BoxjrpJvulWhX1RTIuOgT1cl%2FDXccN2CwWiTtiY298iDjgRlp4rSczD3LSWXn3hxANfLd9pCrXlsy0qonZHrzXky8sTU41p1Eg6o%2BdSWnG0VRap6IVuH5uY4uzWYfLH93FZO5C5z&X-Amz-Signature=3363dfb93817318f27415cd0beeec7c5c802b9cbcfe159a9c616f1996a0f6b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YLUME5C%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSA3VfVQX8RdggyNBwQbqW%2FqPQXuHoQd1CtCXzJqdDOgIgU83QorAkmG28aJv9lS0PBOjdrFUyAtUPAKcHx0TWgIEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEUTlhurTedXn8qw0ircAyeEJBF0p5hN7NkmTgqURN5c5EDdOyirTitB3%2F0wBh3%2FNvpI5Zh7sYZK6k9KiKJMBwPmykyDWPIge%2BpRNWJhr4iksgDOrA8ki2nxV6RSSmZDegUA2V5X0ITQzh%2B58pmIr3R3kvQyRoSAFFNsy3NmnwXHl%2FpiKhdy%2BTrLNZYw9hzcDhL1Ldc1qX9V4CSbnAvufxe2X%2F7JTRWheMQgxyXur8dz%2BFIjpoAjSGNB3lM8qoqV7b5a0BlTe53IwiPcwABKZv%2BFjOpjVRXmBcFhxfYSB7EFfxobSQuvVJHodbtc2xvX2yr66aV9Epq0GaAqw8nOZtZ%2FC3JJoKRVsnJDlD5UfZ4nN4crFekrH4hhb670nkPlDkqx6Inm9EycAgS2a4l1EjQScPPBnZyHYfju8ZL7gj1FGCeIQx0PCJxIh3XTLFh%2BbHc3HjU3AErelAAjskJsKzyq2cRiydaLw65NkJT3xwyWCdkzkmS%2BtlM8tZSSINxH9%2Fu0MNyPWUIsYewoxYeIlfrSF5tKQOeF5oomi3dTP%2Bv3zAUrIj6hyUZwbP24VPSGLFN0kRDEQt3RcYw2xQPhX5ktY%2FGb9hTPALTLBftL0KpQK5VKpMhbg0Pl47HEHN8Y%2F%2FOwYQ%2BrJ8f8B1saML7dtMAGOqUBB%2Fc%2FLbqGJI62IK5G0V54Bfe6MU3nTVCptvc8bW0MLtBvLuMLGRlNs6OWJ509PnBZX8y6ZKUa5hedyoI9NPpB%2BoxjrpJvulWhX1RTIuOgT1cl%2FDXccN2CwWiTtiY298iDjgRlp4rSczD3LSWXn3hxANfLd9pCrXlsy0qonZHrzXky8sTU41p1Eg6o%2BdSWnG0VRap6IVuH5uY4uzWYfLH93FZO5C5z&X-Amz-Signature=2c841e41df945ffc9984ea3b4ab2d9f67584e299c545924f83fa0e80ac5dd8b1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YLUME5C%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSA3VfVQX8RdggyNBwQbqW%2FqPQXuHoQd1CtCXzJqdDOgIgU83QorAkmG28aJv9lS0PBOjdrFUyAtUPAKcHx0TWgIEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEUTlhurTedXn8qw0ircAyeEJBF0p5hN7NkmTgqURN5c5EDdOyirTitB3%2F0wBh3%2FNvpI5Zh7sYZK6k9KiKJMBwPmykyDWPIge%2BpRNWJhr4iksgDOrA8ki2nxV6RSSmZDegUA2V5X0ITQzh%2B58pmIr3R3kvQyRoSAFFNsy3NmnwXHl%2FpiKhdy%2BTrLNZYw9hzcDhL1Ldc1qX9V4CSbnAvufxe2X%2F7JTRWheMQgxyXur8dz%2BFIjpoAjSGNB3lM8qoqV7b5a0BlTe53IwiPcwABKZv%2BFjOpjVRXmBcFhxfYSB7EFfxobSQuvVJHodbtc2xvX2yr66aV9Epq0GaAqw8nOZtZ%2FC3JJoKRVsnJDlD5UfZ4nN4crFekrH4hhb670nkPlDkqx6Inm9EycAgS2a4l1EjQScPPBnZyHYfju8ZL7gj1FGCeIQx0PCJxIh3XTLFh%2BbHc3HjU3AErelAAjskJsKzyq2cRiydaLw65NkJT3xwyWCdkzkmS%2BtlM8tZSSINxH9%2Fu0MNyPWUIsYewoxYeIlfrSF5tKQOeF5oomi3dTP%2Bv3zAUrIj6hyUZwbP24VPSGLFN0kRDEQt3RcYw2xQPhX5ktY%2FGb9hTPALTLBftL0KpQK5VKpMhbg0Pl47HEHN8Y%2F%2FOwYQ%2BrJ8f8B1saML7dtMAGOqUBB%2Fc%2FLbqGJI62IK5G0V54Bfe6MU3nTVCptvc8bW0MLtBvLuMLGRlNs6OWJ509PnBZX8y6ZKUa5hedyoI9NPpB%2BoxjrpJvulWhX1RTIuOgT1cl%2FDXccN2CwWiTtiY298iDjgRlp4rSczD3LSWXn3hxANfLd9pCrXlsy0qonZHrzXky8sTU41p1Eg6o%2BdSWnG0VRap6IVuH5uY4uzWYfLH93FZO5C5z&X-Amz-Signature=7b6cd72b5f653d51f5431ce3eac67e451188a26e2d2e3c8dc99f363a36c7fb37&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YLUME5C%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSA3VfVQX8RdggyNBwQbqW%2FqPQXuHoQd1CtCXzJqdDOgIgU83QorAkmG28aJv9lS0PBOjdrFUyAtUPAKcHx0TWgIEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEUTlhurTedXn8qw0ircAyeEJBF0p5hN7NkmTgqURN5c5EDdOyirTitB3%2F0wBh3%2FNvpI5Zh7sYZK6k9KiKJMBwPmykyDWPIge%2BpRNWJhr4iksgDOrA8ki2nxV6RSSmZDegUA2V5X0ITQzh%2B58pmIr3R3kvQyRoSAFFNsy3NmnwXHl%2FpiKhdy%2BTrLNZYw9hzcDhL1Ldc1qX9V4CSbnAvufxe2X%2F7JTRWheMQgxyXur8dz%2BFIjpoAjSGNB3lM8qoqV7b5a0BlTe53IwiPcwABKZv%2BFjOpjVRXmBcFhxfYSB7EFfxobSQuvVJHodbtc2xvX2yr66aV9Epq0GaAqw8nOZtZ%2FC3JJoKRVsnJDlD5UfZ4nN4crFekrH4hhb670nkPlDkqx6Inm9EycAgS2a4l1EjQScPPBnZyHYfju8ZL7gj1FGCeIQx0PCJxIh3XTLFh%2BbHc3HjU3AErelAAjskJsKzyq2cRiydaLw65NkJT3xwyWCdkzkmS%2BtlM8tZSSINxH9%2Fu0MNyPWUIsYewoxYeIlfrSF5tKQOeF5oomi3dTP%2Bv3zAUrIj6hyUZwbP24VPSGLFN0kRDEQt3RcYw2xQPhX5ktY%2FGb9hTPALTLBftL0KpQK5VKpMhbg0Pl47HEHN8Y%2F%2FOwYQ%2BrJ8f8B1saML7dtMAGOqUBB%2Fc%2FLbqGJI62IK5G0V54Bfe6MU3nTVCptvc8bW0MLtBvLuMLGRlNs6OWJ509PnBZX8y6ZKUa5hedyoI9NPpB%2BoxjrpJvulWhX1RTIuOgT1cl%2FDXccN2CwWiTtiY298iDjgRlp4rSczD3LSWXn3hxANfLd9pCrXlsy0qonZHrzXky8sTU41p1Eg6o%2BdSWnG0VRap6IVuH5uY4uzWYfLH93FZO5C5z&X-Amz-Signature=ad17248666925234216a4db9f0be15934e77202ce7907a6ffa97a40ae43c5481&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YLUME5C%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSA3VfVQX8RdggyNBwQbqW%2FqPQXuHoQd1CtCXzJqdDOgIgU83QorAkmG28aJv9lS0PBOjdrFUyAtUPAKcHx0TWgIEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEUTlhurTedXn8qw0ircAyeEJBF0p5hN7NkmTgqURN5c5EDdOyirTitB3%2F0wBh3%2FNvpI5Zh7sYZK6k9KiKJMBwPmykyDWPIge%2BpRNWJhr4iksgDOrA8ki2nxV6RSSmZDegUA2V5X0ITQzh%2B58pmIr3R3kvQyRoSAFFNsy3NmnwXHl%2FpiKhdy%2BTrLNZYw9hzcDhL1Ldc1qX9V4CSbnAvufxe2X%2F7JTRWheMQgxyXur8dz%2BFIjpoAjSGNB3lM8qoqV7b5a0BlTe53IwiPcwABKZv%2BFjOpjVRXmBcFhxfYSB7EFfxobSQuvVJHodbtc2xvX2yr66aV9Epq0GaAqw8nOZtZ%2FC3JJoKRVsnJDlD5UfZ4nN4crFekrH4hhb670nkPlDkqx6Inm9EycAgS2a4l1EjQScPPBnZyHYfju8ZL7gj1FGCeIQx0PCJxIh3XTLFh%2BbHc3HjU3AErelAAjskJsKzyq2cRiydaLw65NkJT3xwyWCdkzkmS%2BtlM8tZSSINxH9%2Fu0MNyPWUIsYewoxYeIlfrSF5tKQOeF5oomi3dTP%2Bv3zAUrIj6hyUZwbP24VPSGLFN0kRDEQt3RcYw2xQPhX5ktY%2FGb9hTPALTLBftL0KpQK5VKpMhbg0Pl47HEHN8Y%2F%2FOwYQ%2BrJ8f8B1saML7dtMAGOqUBB%2Fc%2FLbqGJI62IK5G0V54Bfe6MU3nTVCptvc8bW0MLtBvLuMLGRlNs6OWJ509PnBZX8y6ZKUa5hedyoI9NPpB%2BoxjrpJvulWhX1RTIuOgT1cl%2FDXccN2CwWiTtiY298iDjgRlp4rSczD3LSWXn3hxANfLd9pCrXlsy0qonZHrzXky8sTU41p1Eg6o%2BdSWnG0VRap6IVuH5uY4uzWYfLH93FZO5C5z&X-Amz-Signature=a0d46ed84a6e1ccf11c19259cc1290a441a9d6a905a207a5ad5aab79b00a06a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
