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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YK7V4X2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6T2UINjgt%2FDFQiqYwMqRV3j2Rxt51uOh0hX0jwxJJVAiAtu33Fd6WEYTY1%2BXNDH2eDoBO9jxv6%2BKSpMBzi8PBmcyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMGg0zETCUBQCuxX4hKtwDrIU%2F6AZop6j8XDMGfFDDgH6O0SZlNDAxRrHVfi9bNamKsDxzGOMtrJwMT3DPcM4rqUTsYpOh2nQEoykp2%2BMq4qZeaUSRD6GiN17kzuePQJ1Z127Rq77K3%2BRcOFKuQpfujK2vkDtTpmg0jNLd5Xwbo79W7uEFEfFLwqrgrFxiYo%2Bizi%2BwiWYI5iHGSOSDrX5he57Z1zF0OsLgaeJ5j9v4j%2BoNxQLB8kZmdHlbbFCValUz%2BoP58NrmNlaCwVpYDSeaFJVpBD14FtaJv9DpzDcF9LPMnDhhippnm5p%2BF2eAZsAsE%2FRIheLG6%2BOoirzQGza0zZIiIwOsyoOQH1Oh2x6fV3GZ4WtIzijrkHkdRFmFmRl96xb4sq6wLaETb3f53WoXw5OnJZVL3bk6c%2B2XMUD0xf31AV4H7JZMh9%2FJL5CZyl%2FCUxjpvpepxnXoVdqZPKGDdBnHoZaBAhFnlQkDi%2FIy8hHPNLSxVmE2QItImjgM7YxF6SuiBkBlugY4evHAip4prB0YywUUw1DgGkqnhu%2BgCZtfbZCNIwhGEITZRo15GyYaHo66hrjqayq%2BLEYiKjLKEMhzmB%2BWJ7wZXWHNk56%2BP265SDEe5tG4%2BkIbJiA6BU8xb65PveKffr3TQB4wlbTVwQY6pgGf%2F%2BCw2fdT6hQyFATdNcVjnSsWkyFKCaDuqjr3tAi%2FmYBESzgyqtNRnPLFn1aFHKpY3zwQa%2BOPjPXhP1fAETksodlJIFnntv%2BXpqgjQNZvBZglpN0kLK7221qoyKvpwhXoSYQTZWVjs5IMEg220UFwctgViI4ly0T4tFZntGk7br7GRX4lzdlNJLMXmZqsDBCeUa83UeRgmeVZDjZH9KeQpPvJxVpx&X-Amz-Signature=56850005bb3e697287c28bb07c2487ef11e60a1a3cd6f2d85a70e065d3c430a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YK7V4X2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6T2UINjgt%2FDFQiqYwMqRV3j2Rxt51uOh0hX0jwxJJVAiAtu33Fd6WEYTY1%2BXNDH2eDoBO9jxv6%2BKSpMBzi8PBmcyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMGg0zETCUBQCuxX4hKtwDrIU%2F6AZop6j8XDMGfFDDgH6O0SZlNDAxRrHVfi9bNamKsDxzGOMtrJwMT3DPcM4rqUTsYpOh2nQEoykp2%2BMq4qZeaUSRD6GiN17kzuePQJ1Z127Rq77K3%2BRcOFKuQpfujK2vkDtTpmg0jNLd5Xwbo79W7uEFEfFLwqrgrFxiYo%2Bizi%2BwiWYI5iHGSOSDrX5he57Z1zF0OsLgaeJ5j9v4j%2BoNxQLB8kZmdHlbbFCValUz%2BoP58NrmNlaCwVpYDSeaFJVpBD14FtaJv9DpzDcF9LPMnDhhippnm5p%2BF2eAZsAsE%2FRIheLG6%2BOoirzQGza0zZIiIwOsyoOQH1Oh2x6fV3GZ4WtIzijrkHkdRFmFmRl96xb4sq6wLaETb3f53WoXw5OnJZVL3bk6c%2B2XMUD0xf31AV4H7JZMh9%2FJL5CZyl%2FCUxjpvpepxnXoVdqZPKGDdBnHoZaBAhFnlQkDi%2FIy8hHPNLSxVmE2QItImjgM7YxF6SuiBkBlugY4evHAip4prB0YywUUw1DgGkqnhu%2BgCZtfbZCNIwhGEITZRo15GyYaHo66hrjqayq%2BLEYiKjLKEMhzmB%2BWJ7wZXWHNk56%2BP265SDEe5tG4%2BkIbJiA6BU8xb65PveKffr3TQB4wlbTVwQY6pgGf%2F%2BCw2fdT6hQyFATdNcVjnSsWkyFKCaDuqjr3tAi%2FmYBESzgyqtNRnPLFn1aFHKpY3zwQa%2BOPjPXhP1fAETksodlJIFnntv%2BXpqgjQNZvBZglpN0kLK7221qoyKvpwhXoSYQTZWVjs5IMEg220UFwctgViI4ly0T4tFZntGk7br7GRX4lzdlNJLMXmZqsDBCeUa83UeRgmeVZDjZH9KeQpPvJxVpx&X-Amz-Signature=e3f639939bed8db3b31a70331fa18a6e045f1035b5a5592f80c23e4d178ad782&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YK7V4X2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6T2UINjgt%2FDFQiqYwMqRV3j2Rxt51uOh0hX0jwxJJVAiAtu33Fd6WEYTY1%2BXNDH2eDoBO9jxv6%2BKSpMBzi8PBmcyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMGg0zETCUBQCuxX4hKtwDrIU%2F6AZop6j8XDMGfFDDgH6O0SZlNDAxRrHVfi9bNamKsDxzGOMtrJwMT3DPcM4rqUTsYpOh2nQEoykp2%2BMq4qZeaUSRD6GiN17kzuePQJ1Z127Rq77K3%2BRcOFKuQpfujK2vkDtTpmg0jNLd5Xwbo79W7uEFEfFLwqrgrFxiYo%2Bizi%2BwiWYI5iHGSOSDrX5he57Z1zF0OsLgaeJ5j9v4j%2BoNxQLB8kZmdHlbbFCValUz%2BoP58NrmNlaCwVpYDSeaFJVpBD14FtaJv9DpzDcF9LPMnDhhippnm5p%2BF2eAZsAsE%2FRIheLG6%2BOoirzQGza0zZIiIwOsyoOQH1Oh2x6fV3GZ4WtIzijrkHkdRFmFmRl96xb4sq6wLaETb3f53WoXw5OnJZVL3bk6c%2B2XMUD0xf31AV4H7JZMh9%2FJL5CZyl%2FCUxjpvpepxnXoVdqZPKGDdBnHoZaBAhFnlQkDi%2FIy8hHPNLSxVmE2QItImjgM7YxF6SuiBkBlugY4evHAip4prB0YywUUw1DgGkqnhu%2BgCZtfbZCNIwhGEITZRo15GyYaHo66hrjqayq%2BLEYiKjLKEMhzmB%2BWJ7wZXWHNk56%2BP265SDEe5tG4%2BkIbJiA6BU8xb65PveKffr3TQB4wlbTVwQY6pgGf%2F%2BCw2fdT6hQyFATdNcVjnSsWkyFKCaDuqjr3tAi%2FmYBESzgyqtNRnPLFn1aFHKpY3zwQa%2BOPjPXhP1fAETksodlJIFnntv%2BXpqgjQNZvBZglpN0kLK7221qoyKvpwhXoSYQTZWVjs5IMEg220UFwctgViI4ly0T4tFZntGk7br7GRX4lzdlNJLMXmZqsDBCeUa83UeRgmeVZDjZH9KeQpPvJxVpx&X-Amz-Signature=ede342aba8ce1127d2b4479939540956f88e17ec99c33c54ed9e8dfd16e67a55&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YK7V4X2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6T2UINjgt%2FDFQiqYwMqRV3j2Rxt51uOh0hX0jwxJJVAiAtu33Fd6WEYTY1%2BXNDH2eDoBO9jxv6%2BKSpMBzi8PBmcyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMGg0zETCUBQCuxX4hKtwDrIU%2F6AZop6j8XDMGfFDDgH6O0SZlNDAxRrHVfi9bNamKsDxzGOMtrJwMT3DPcM4rqUTsYpOh2nQEoykp2%2BMq4qZeaUSRD6GiN17kzuePQJ1Z127Rq77K3%2BRcOFKuQpfujK2vkDtTpmg0jNLd5Xwbo79W7uEFEfFLwqrgrFxiYo%2Bizi%2BwiWYI5iHGSOSDrX5he57Z1zF0OsLgaeJ5j9v4j%2BoNxQLB8kZmdHlbbFCValUz%2BoP58NrmNlaCwVpYDSeaFJVpBD14FtaJv9DpzDcF9LPMnDhhippnm5p%2BF2eAZsAsE%2FRIheLG6%2BOoirzQGza0zZIiIwOsyoOQH1Oh2x6fV3GZ4WtIzijrkHkdRFmFmRl96xb4sq6wLaETb3f53WoXw5OnJZVL3bk6c%2B2XMUD0xf31AV4H7JZMh9%2FJL5CZyl%2FCUxjpvpepxnXoVdqZPKGDdBnHoZaBAhFnlQkDi%2FIy8hHPNLSxVmE2QItImjgM7YxF6SuiBkBlugY4evHAip4prB0YywUUw1DgGkqnhu%2BgCZtfbZCNIwhGEITZRo15GyYaHo66hrjqayq%2BLEYiKjLKEMhzmB%2BWJ7wZXWHNk56%2BP265SDEe5tG4%2BkIbJiA6BU8xb65PveKffr3TQB4wlbTVwQY6pgGf%2F%2BCw2fdT6hQyFATdNcVjnSsWkyFKCaDuqjr3tAi%2FmYBESzgyqtNRnPLFn1aFHKpY3zwQa%2BOPjPXhP1fAETksodlJIFnntv%2BXpqgjQNZvBZglpN0kLK7221qoyKvpwhXoSYQTZWVjs5IMEg220UFwctgViI4ly0T4tFZntGk7br7GRX4lzdlNJLMXmZqsDBCeUa83UeRgmeVZDjZH9KeQpPvJxVpx&X-Amz-Signature=f488558e09bfde136e91b9c3debd57ff43605fbef63fc7eea2f4d9bedcfe6a02&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YK7V4X2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6T2UINjgt%2FDFQiqYwMqRV3j2Rxt51uOh0hX0jwxJJVAiAtu33Fd6WEYTY1%2BXNDH2eDoBO9jxv6%2BKSpMBzi8PBmcyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMGg0zETCUBQCuxX4hKtwDrIU%2F6AZop6j8XDMGfFDDgH6O0SZlNDAxRrHVfi9bNamKsDxzGOMtrJwMT3DPcM4rqUTsYpOh2nQEoykp2%2BMq4qZeaUSRD6GiN17kzuePQJ1Z127Rq77K3%2BRcOFKuQpfujK2vkDtTpmg0jNLd5Xwbo79W7uEFEfFLwqrgrFxiYo%2Bizi%2BwiWYI5iHGSOSDrX5he57Z1zF0OsLgaeJ5j9v4j%2BoNxQLB8kZmdHlbbFCValUz%2BoP58NrmNlaCwVpYDSeaFJVpBD14FtaJv9DpzDcF9LPMnDhhippnm5p%2BF2eAZsAsE%2FRIheLG6%2BOoirzQGza0zZIiIwOsyoOQH1Oh2x6fV3GZ4WtIzijrkHkdRFmFmRl96xb4sq6wLaETb3f53WoXw5OnJZVL3bk6c%2B2XMUD0xf31AV4H7JZMh9%2FJL5CZyl%2FCUxjpvpepxnXoVdqZPKGDdBnHoZaBAhFnlQkDi%2FIy8hHPNLSxVmE2QItImjgM7YxF6SuiBkBlugY4evHAip4prB0YywUUw1DgGkqnhu%2BgCZtfbZCNIwhGEITZRo15GyYaHo66hrjqayq%2BLEYiKjLKEMhzmB%2BWJ7wZXWHNk56%2BP265SDEe5tG4%2BkIbJiA6BU8xb65PveKffr3TQB4wlbTVwQY6pgGf%2F%2BCw2fdT6hQyFATdNcVjnSsWkyFKCaDuqjr3tAi%2FmYBESzgyqtNRnPLFn1aFHKpY3zwQa%2BOPjPXhP1fAETksodlJIFnntv%2BXpqgjQNZvBZglpN0kLK7221qoyKvpwhXoSYQTZWVjs5IMEg220UFwctgViI4ly0T4tFZntGk7br7GRX4lzdlNJLMXmZqsDBCeUa83UeRgmeVZDjZH9KeQpPvJxVpx&X-Amz-Signature=ed04409fad20fa757a2b5194e1d02424db5a2663b8f4a2c7a04548a5e5a9d93e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
