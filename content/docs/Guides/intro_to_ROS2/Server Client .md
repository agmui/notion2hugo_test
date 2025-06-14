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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKXWQUJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIBTUTLn5Qqyr%2FBXef%2BPY3XVuP5uJOPvn12Z0vKhm0K5mAiATPt6As24Z7Fmm40C2MYQy5%2B6Kp7dhFRFgexDU7DqY8Cr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMvqM2VNC5ZmUEY%2BE0KtwD01nt4NCRxOFjJNgvcHwpDmqvELqYTuioVl18phWdWh%2BbUWxEuQ65hjdLq9TvqKwKlEYL0z4JGoIlRasynRBOiWE6EDxXhaih97XR4REjw%2BGsAXUC4FC8E081IR1iBc%2B8tn6OfUk%2FAu4aH1laO4TSEeGsGjxgVYCn0Ek5jEKsqxH3s%2BaAqrCH3EHeikxWPoPqnuWQnlBLuzx1y6b%2Fd1vy4ggW4kXA4NB69Z1A3dXbnlB8OHUOjIaR639miDWlLTrn%2F1IHc6Rsrd%2BKnI7FAVn%2F%2Bg%2FOfuabK%2BDs8FL3sVlmb3cXnL5DhW0xrWGYbcnijFQ4UYK43OPvXtV%2BhiIo%2Ff2ciy3prmWm%2B6QT8L9GO3zkjgGCv2y7cxGffp9Qm0QUkGsGk2C6BwdDqLD2ElrAG06%2FhaqKZBDW7U2SIRGX3T1Mj1nuVBxwiOGBgXPi19ToEpi%2FAmRASg0OZTfwI%2FLbgFUMMV9bZeXAxwgMlXcdn3fCVOeMJab9%2BSFdYspB3WEotm3wjk8JHvc2s6ZiOUnEEJIWwJmDH2QS4gwBD12GlcnqVP%2Fuwmqg9sz3WURLP82YKzhmVvdRI3e5%2BD9iR6MtCsCFbH6BjppCzAgOBizW%2BhoIg1wT%2B4YNhgFy9WD6Ceow0fa0wgY6pgHylp8G5UCYy2yFc7pf2EfDQwMAtBfqGLpLGG5FvL32eRerRRSWIQsc1ZoentakF%2BJuTgevu%2F5DUT00CuD%2BdflWGnAbiRjJuSEWmfoVwDcWL%2FaWaJJAoLhYPHVRJAvih47M96OyaKQ7ibI9kV8RbjHh5i4g3HegdVyHTNvDYdIDplVdH4giYAOFKkWTQG4dElTK0TQcr%2B9Xw3iL%2Bg4Z556NO95Z00nO&X-Amz-Signature=96c0a6aef496797375c843e2780d0b2397458d4c4b4996ea8bda274f184c0435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKXWQUJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIBTUTLn5Qqyr%2FBXef%2BPY3XVuP5uJOPvn12Z0vKhm0K5mAiATPt6As24Z7Fmm40C2MYQy5%2B6Kp7dhFRFgexDU7DqY8Cr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMvqM2VNC5ZmUEY%2BE0KtwD01nt4NCRxOFjJNgvcHwpDmqvELqYTuioVl18phWdWh%2BbUWxEuQ65hjdLq9TvqKwKlEYL0z4JGoIlRasynRBOiWE6EDxXhaih97XR4REjw%2BGsAXUC4FC8E081IR1iBc%2B8tn6OfUk%2FAu4aH1laO4TSEeGsGjxgVYCn0Ek5jEKsqxH3s%2BaAqrCH3EHeikxWPoPqnuWQnlBLuzx1y6b%2Fd1vy4ggW4kXA4NB69Z1A3dXbnlB8OHUOjIaR639miDWlLTrn%2F1IHc6Rsrd%2BKnI7FAVn%2F%2Bg%2FOfuabK%2BDs8FL3sVlmb3cXnL5DhW0xrWGYbcnijFQ4UYK43OPvXtV%2BhiIo%2Ff2ciy3prmWm%2B6QT8L9GO3zkjgGCv2y7cxGffp9Qm0QUkGsGk2C6BwdDqLD2ElrAG06%2FhaqKZBDW7U2SIRGX3T1Mj1nuVBxwiOGBgXPi19ToEpi%2FAmRASg0OZTfwI%2FLbgFUMMV9bZeXAxwgMlXcdn3fCVOeMJab9%2BSFdYspB3WEotm3wjk8JHvc2s6ZiOUnEEJIWwJmDH2QS4gwBD12GlcnqVP%2Fuwmqg9sz3WURLP82YKzhmVvdRI3e5%2BD9iR6MtCsCFbH6BjppCzAgOBizW%2BhoIg1wT%2B4YNhgFy9WD6Ceow0fa0wgY6pgHylp8G5UCYy2yFc7pf2EfDQwMAtBfqGLpLGG5FvL32eRerRRSWIQsc1ZoentakF%2BJuTgevu%2F5DUT00CuD%2BdflWGnAbiRjJuSEWmfoVwDcWL%2FaWaJJAoLhYPHVRJAvih47M96OyaKQ7ibI9kV8RbjHh5i4g3HegdVyHTNvDYdIDplVdH4giYAOFKkWTQG4dElTK0TQcr%2B9Xw3iL%2Bg4Z556NO95Z00nO&X-Amz-Signature=5452a712f4fb4c8cb5bb28669f5b0cdd3b98f9e355bde66a35c9b658cb2edb55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKXWQUJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIBTUTLn5Qqyr%2FBXef%2BPY3XVuP5uJOPvn12Z0vKhm0K5mAiATPt6As24Z7Fmm40C2MYQy5%2B6Kp7dhFRFgexDU7DqY8Cr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMvqM2VNC5ZmUEY%2BE0KtwD01nt4NCRxOFjJNgvcHwpDmqvELqYTuioVl18phWdWh%2BbUWxEuQ65hjdLq9TvqKwKlEYL0z4JGoIlRasynRBOiWE6EDxXhaih97XR4REjw%2BGsAXUC4FC8E081IR1iBc%2B8tn6OfUk%2FAu4aH1laO4TSEeGsGjxgVYCn0Ek5jEKsqxH3s%2BaAqrCH3EHeikxWPoPqnuWQnlBLuzx1y6b%2Fd1vy4ggW4kXA4NB69Z1A3dXbnlB8OHUOjIaR639miDWlLTrn%2F1IHc6Rsrd%2BKnI7FAVn%2F%2Bg%2FOfuabK%2BDs8FL3sVlmb3cXnL5DhW0xrWGYbcnijFQ4UYK43OPvXtV%2BhiIo%2Ff2ciy3prmWm%2B6QT8L9GO3zkjgGCv2y7cxGffp9Qm0QUkGsGk2C6BwdDqLD2ElrAG06%2FhaqKZBDW7U2SIRGX3T1Mj1nuVBxwiOGBgXPi19ToEpi%2FAmRASg0OZTfwI%2FLbgFUMMV9bZeXAxwgMlXcdn3fCVOeMJab9%2BSFdYspB3WEotm3wjk8JHvc2s6ZiOUnEEJIWwJmDH2QS4gwBD12GlcnqVP%2Fuwmqg9sz3WURLP82YKzhmVvdRI3e5%2BD9iR6MtCsCFbH6BjppCzAgOBizW%2BhoIg1wT%2B4YNhgFy9WD6Ceow0fa0wgY6pgHylp8G5UCYy2yFc7pf2EfDQwMAtBfqGLpLGG5FvL32eRerRRSWIQsc1ZoentakF%2BJuTgevu%2F5DUT00CuD%2BdflWGnAbiRjJuSEWmfoVwDcWL%2FaWaJJAoLhYPHVRJAvih47M96OyaKQ7ibI9kV8RbjHh5i4g3HegdVyHTNvDYdIDplVdH4giYAOFKkWTQG4dElTK0TQcr%2B9Xw3iL%2Bg4Z556NO95Z00nO&X-Amz-Signature=2daf21e014533aacdebe7d0e993e054b148e10d157439d0403b587d3533394ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKXWQUJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIBTUTLn5Qqyr%2FBXef%2BPY3XVuP5uJOPvn12Z0vKhm0K5mAiATPt6As24Z7Fmm40C2MYQy5%2B6Kp7dhFRFgexDU7DqY8Cr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMvqM2VNC5ZmUEY%2BE0KtwD01nt4NCRxOFjJNgvcHwpDmqvELqYTuioVl18phWdWh%2BbUWxEuQ65hjdLq9TvqKwKlEYL0z4JGoIlRasynRBOiWE6EDxXhaih97XR4REjw%2BGsAXUC4FC8E081IR1iBc%2B8tn6OfUk%2FAu4aH1laO4TSEeGsGjxgVYCn0Ek5jEKsqxH3s%2BaAqrCH3EHeikxWPoPqnuWQnlBLuzx1y6b%2Fd1vy4ggW4kXA4NB69Z1A3dXbnlB8OHUOjIaR639miDWlLTrn%2F1IHc6Rsrd%2BKnI7FAVn%2F%2Bg%2FOfuabK%2BDs8FL3sVlmb3cXnL5DhW0xrWGYbcnijFQ4UYK43OPvXtV%2BhiIo%2Ff2ciy3prmWm%2B6QT8L9GO3zkjgGCv2y7cxGffp9Qm0QUkGsGk2C6BwdDqLD2ElrAG06%2FhaqKZBDW7U2SIRGX3T1Mj1nuVBxwiOGBgXPi19ToEpi%2FAmRASg0OZTfwI%2FLbgFUMMV9bZeXAxwgMlXcdn3fCVOeMJab9%2BSFdYspB3WEotm3wjk8JHvc2s6ZiOUnEEJIWwJmDH2QS4gwBD12GlcnqVP%2Fuwmqg9sz3WURLP82YKzhmVvdRI3e5%2BD9iR6MtCsCFbH6BjppCzAgOBizW%2BhoIg1wT%2B4YNhgFy9WD6Ceow0fa0wgY6pgHylp8G5UCYy2yFc7pf2EfDQwMAtBfqGLpLGG5FvL32eRerRRSWIQsc1ZoentakF%2BJuTgevu%2F5DUT00CuD%2BdflWGnAbiRjJuSEWmfoVwDcWL%2FaWaJJAoLhYPHVRJAvih47M96OyaKQ7ibI9kV8RbjHh5i4g3HegdVyHTNvDYdIDplVdH4giYAOFKkWTQG4dElTK0TQcr%2B9Xw3iL%2Bg4Z556NO95Z00nO&X-Amz-Signature=1ecb31461ba0d9a062ace770297920ea92c309821d3050374aada1ebb6095388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKXWQUJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIBTUTLn5Qqyr%2FBXef%2BPY3XVuP5uJOPvn12Z0vKhm0K5mAiATPt6As24Z7Fmm40C2MYQy5%2B6Kp7dhFRFgexDU7DqY8Cr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMvqM2VNC5ZmUEY%2BE0KtwD01nt4NCRxOFjJNgvcHwpDmqvELqYTuioVl18phWdWh%2BbUWxEuQ65hjdLq9TvqKwKlEYL0z4JGoIlRasynRBOiWE6EDxXhaih97XR4REjw%2BGsAXUC4FC8E081IR1iBc%2B8tn6OfUk%2FAu4aH1laO4TSEeGsGjxgVYCn0Ek5jEKsqxH3s%2BaAqrCH3EHeikxWPoPqnuWQnlBLuzx1y6b%2Fd1vy4ggW4kXA4NB69Z1A3dXbnlB8OHUOjIaR639miDWlLTrn%2F1IHc6Rsrd%2BKnI7FAVn%2F%2Bg%2FOfuabK%2BDs8FL3sVlmb3cXnL5DhW0xrWGYbcnijFQ4UYK43OPvXtV%2BhiIo%2Ff2ciy3prmWm%2B6QT8L9GO3zkjgGCv2y7cxGffp9Qm0QUkGsGk2C6BwdDqLD2ElrAG06%2FhaqKZBDW7U2SIRGX3T1Mj1nuVBxwiOGBgXPi19ToEpi%2FAmRASg0OZTfwI%2FLbgFUMMV9bZeXAxwgMlXcdn3fCVOeMJab9%2BSFdYspB3WEotm3wjk8JHvc2s6ZiOUnEEJIWwJmDH2QS4gwBD12GlcnqVP%2Fuwmqg9sz3WURLP82YKzhmVvdRI3e5%2BD9iR6MtCsCFbH6BjppCzAgOBizW%2BhoIg1wT%2B4YNhgFy9WD6Ceow0fa0wgY6pgHylp8G5UCYy2yFc7pf2EfDQwMAtBfqGLpLGG5FvL32eRerRRSWIQsc1ZoentakF%2BJuTgevu%2F5DUT00CuD%2BdflWGnAbiRjJuSEWmfoVwDcWL%2FaWaJJAoLhYPHVRJAvih47M96OyaKQ7ibI9kV8RbjHh5i4g3HegdVyHTNvDYdIDplVdH4giYAOFKkWTQG4dElTK0TQcr%2B9Xw3iL%2Bg4Z556NO95Z00nO&X-Amz-Signature=52afcfff8e30d0d770a7bcaaebb25f00e0a14a3685d08662ee17894096185ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
