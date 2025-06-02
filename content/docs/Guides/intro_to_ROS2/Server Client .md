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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ2WTPL5%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDuNWWl4OihVqEEK%2B1bHiSsNGS8jjR90s%2BBOOYCBOuPNwIgCbHM2Azp%2BDgLvJURB0sVjr2bLhCzFl1s6Y0Xlvcdo8gqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZxA2L%2Bt0hPP994pyrcA7%2FotnhQcXaJTt%2BDCLSYlGzSXkUTLGPtA8om6uEuucLWiHxk6s89mOizQBdKNJXgYmusPgPTZisPMRcNoijctjN2G8LYdM5RFxGKf4upfkJ0lo8ZSqBkVttXc5SsUyq3wDlXkc07kLyyAVXEjxGyZvUggV7QO%2F4rjE9i2zsBWQwj6k3NMtPVgdz31Kjw9uL0W1vBs4S3J%2Fn9Ys4%2FPdJit2pkvEUForXuS6bi10acTE5mYJi059ZB9%2BiPc52hfg98FhioJTkzxmJ7wFF2IvUT8lM3SZcIShg1nPXLYKnkVdpHpk%2BX0FoxB3l%2FhbvCEJ1oGQPo5EUvHK0UOd9f2rTxAqul1gQN9Cz%2FAfRIDDtn2iC3lEflKvXEseExlKbpLS9knW3vSqF6tI1mGZQowAE0G8sJbg6E74N4Y3Nj7Anhq7PZbxan675rmZ51TvEODfr2G27xYvmqaDPg8x0EiMA%2BFY9pyPcQ%2FTdastVFktRhOhfcqbVrt4YpHPT7pyWa%2FSbIdndWFGHLFe0Cs78QTmzOkQdSoLNpI2k9cFzimSqJqRIiLD8psFa0HThqcDg7eNavyvwvvmN%2FZvuQkLxpUnXW6%2BoBTyWHUnmUvzqo2SIq1EiLDMg%2FJL%2Bp1WqIOMngMIP99sEGOqUBz3%2FWwROBj89kCgqx1f%2B6omiX3rQ%2BanhcMlLZmvGXvpGm1f0mF9e8kmaXSmqhKmhX5mZGGih1q6Wu5Y3vfXMnk0Nr6eZLbBdkxTRrNXN%2Bai1gRX7RGSddnf0XeknVxjZBgW3X0iM77uGBVFIXIbFNk%2FmNE42RqNZhkoRzXrLgvsl1FjOTdTkK1bpAGNVQpd2bI3gRsTFqOSB2LIXu8g3w%2BDhhEwLC&X-Amz-Signature=34b2eff25f795b80a0fd6eb77cd17822a5735f7b22ff1717e65270a87a17f20d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ2WTPL5%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDuNWWl4OihVqEEK%2B1bHiSsNGS8jjR90s%2BBOOYCBOuPNwIgCbHM2Azp%2BDgLvJURB0sVjr2bLhCzFl1s6Y0Xlvcdo8gqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZxA2L%2Bt0hPP994pyrcA7%2FotnhQcXaJTt%2BDCLSYlGzSXkUTLGPtA8om6uEuucLWiHxk6s89mOizQBdKNJXgYmusPgPTZisPMRcNoijctjN2G8LYdM5RFxGKf4upfkJ0lo8ZSqBkVttXc5SsUyq3wDlXkc07kLyyAVXEjxGyZvUggV7QO%2F4rjE9i2zsBWQwj6k3NMtPVgdz31Kjw9uL0W1vBs4S3J%2Fn9Ys4%2FPdJit2pkvEUForXuS6bi10acTE5mYJi059ZB9%2BiPc52hfg98FhioJTkzxmJ7wFF2IvUT8lM3SZcIShg1nPXLYKnkVdpHpk%2BX0FoxB3l%2FhbvCEJ1oGQPo5EUvHK0UOd9f2rTxAqul1gQN9Cz%2FAfRIDDtn2iC3lEflKvXEseExlKbpLS9knW3vSqF6tI1mGZQowAE0G8sJbg6E74N4Y3Nj7Anhq7PZbxan675rmZ51TvEODfr2G27xYvmqaDPg8x0EiMA%2BFY9pyPcQ%2FTdastVFktRhOhfcqbVrt4YpHPT7pyWa%2FSbIdndWFGHLFe0Cs78QTmzOkQdSoLNpI2k9cFzimSqJqRIiLD8psFa0HThqcDg7eNavyvwvvmN%2FZvuQkLxpUnXW6%2BoBTyWHUnmUvzqo2SIq1EiLDMg%2FJL%2Bp1WqIOMngMIP99sEGOqUBz3%2FWwROBj89kCgqx1f%2B6omiX3rQ%2BanhcMlLZmvGXvpGm1f0mF9e8kmaXSmqhKmhX5mZGGih1q6Wu5Y3vfXMnk0Nr6eZLbBdkxTRrNXN%2Bai1gRX7RGSddnf0XeknVxjZBgW3X0iM77uGBVFIXIbFNk%2FmNE42RqNZhkoRzXrLgvsl1FjOTdTkK1bpAGNVQpd2bI3gRsTFqOSB2LIXu8g3w%2BDhhEwLC&X-Amz-Signature=31f7bc8b5bd63a50dfba1b9a3ddc3bb2d7863e69160ee5008dcbb789fddd49ea&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ2WTPL5%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDuNWWl4OihVqEEK%2B1bHiSsNGS8jjR90s%2BBOOYCBOuPNwIgCbHM2Azp%2BDgLvJURB0sVjr2bLhCzFl1s6Y0Xlvcdo8gqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZxA2L%2Bt0hPP994pyrcA7%2FotnhQcXaJTt%2BDCLSYlGzSXkUTLGPtA8om6uEuucLWiHxk6s89mOizQBdKNJXgYmusPgPTZisPMRcNoijctjN2G8LYdM5RFxGKf4upfkJ0lo8ZSqBkVttXc5SsUyq3wDlXkc07kLyyAVXEjxGyZvUggV7QO%2F4rjE9i2zsBWQwj6k3NMtPVgdz31Kjw9uL0W1vBs4S3J%2Fn9Ys4%2FPdJit2pkvEUForXuS6bi10acTE5mYJi059ZB9%2BiPc52hfg98FhioJTkzxmJ7wFF2IvUT8lM3SZcIShg1nPXLYKnkVdpHpk%2BX0FoxB3l%2FhbvCEJ1oGQPo5EUvHK0UOd9f2rTxAqul1gQN9Cz%2FAfRIDDtn2iC3lEflKvXEseExlKbpLS9knW3vSqF6tI1mGZQowAE0G8sJbg6E74N4Y3Nj7Anhq7PZbxan675rmZ51TvEODfr2G27xYvmqaDPg8x0EiMA%2BFY9pyPcQ%2FTdastVFktRhOhfcqbVrt4YpHPT7pyWa%2FSbIdndWFGHLFe0Cs78QTmzOkQdSoLNpI2k9cFzimSqJqRIiLD8psFa0HThqcDg7eNavyvwvvmN%2FZvuQkLxpUnXW6%2BoBTyWHUnmUvzqo2SIq1EiLDMg%2FJL%2Bp1WqIOMngMIP99sEGOqUBz3%2FWwROBj89kCgqx1f%2B6omiX3rQ%2BanhcMlLZmvGXvpGm1f0mF9e8kmaXSmqhKmhX5mZGGih1q6Wu5Y3vfXMnk0Nr6eZLbBdkxTRrNXN%2Bai1gRX7RGSddnf0XeknVxjZBgW3X0iM77uGBVFIXIbFNk%2FmNE42RqNZhkoRzXrLgvsl1FjOTdTkK1bpAGNVQpd2bI3gRsTFqOSB2LIXu8g3w%2BDhhEwLC&X-Amz-Signature=324246420db99bc1d35aec4a108fb5eecffcb32f394bc600a3123677bbc19df8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ2WTPL5%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDuNWWl4OihVqEEK%2B1bHiSsNGS8jjR90s%2BBOOYCBOuPNwIgCbHM2Azp%2BDgLvJURB0sVjr2bLhCzFl1s6Y0Xlvcdo8gqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZxA2L%2Bt0hPP994pyrcA7%2FotnhQcXaJTt%2BDCLSYlGzSXkUTLGPtA8om6uEuucLWiHxk6s89mOizQBdKNJXgYmusPgPTZisPMRcNoijctjN2G8LYdM5RFxGKf4upfkJ0lo8ZSqBkVttXc5SsUyq3wDlXkc07kLyyAVXEjxGyZvUggV7QO%2F4rjE9i2zsBWQwj6k3NMtPVgdz31Kjw9uL0W1vBs4S3J%2Fn9Ys4%2FPdJit2pkvEUForXuS6bi10acTE5mYJi059ZB9%2BiPc52hfg98FhioJTkzxmJ7wFF2IvUT8lM3SZcIShg1nPXLYKnkVdpHpk%2BX0FoxB3l%2FhbvCEJ1oGQPo5EUvHK0UOd9f2rTxAqul1gQN9Cz%2FAfRIDDtn2iC3lEflKvXEseExlKbpLS9knW3vSqF6tI1mGZQowAE0G8sJbg6E74N4Y3Nj7Anhq7PZbxan675rmZ51TvEODfr2G27xYvmqaDPg8x0EiMA%2BFY9pyPcQ%2FTdastVFktRhOhfcqbVrt4YpHPT7pyWa%2FSbIdndWFGHLFe0Cs78QTmzOkQdSoLNpI2k9cFzimSqJqRIiLD8psFa0HThqcDg7eNavyvwvvmN%2FZvuQkLxpUnXW6%2BoBTyWHUnmUvzqo2SIq1EiLDMg%2FJL%2Bp1WqIOMngMIP99sEGOqUBz3%2FWwROBj89kCgqx1f%2B6omiX3rQ%2BanhcMlLZmvGXvpGm1f0mF9e8kmaXSmqhKmhX5mZGGih1q6Wu5Y3vfXMnk0Nr6eZLbBdkxTRrNXN%2Bai1gRX7RGSddnf0XeknVxjZBgW3X0iM77uGBVFIXIbFNk%2FmNE42RqNZhkoRzXrLgvsl1FjOTdTkK1bpAGNVQpd2bI3gRsTFqOSB2LIXu8g3w%2BDhhEwLC&X-Amz-Signature=9f705e2caf51cc0e859d3493d67a8fd63f6da0e0ab5143a732e63990cd42a15d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ2WTPL5%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDuNWWl4OihVqEEK%2B1bHiSsNGS8jjR90s%2BBOOYCBOuPNwIgCbHM2Azp%2BDgLvJURB0sVjr2bLhCzFl1s6Y0Xlvcdo8gqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZxA2L%2Bt0hPP994pyrcA7%2FotnhQcXaJTt%2BDCLSYlGzSXkUTLGPtA8om6uEuucLWiHxk6s89mOizQBdKNJXgYmusPgPTZisPMRcNoijctjN2G8LYdM5RFxGKf4upfkJ0lo8ZSqBkVttXc5SsUyq3wDlXkc07kLyyAVXEjxGyZvUggV7QO%2F4rjE9i2zsBWQwj6k3NMtPVgdz31Kjw9uL0W1vBs4S3J%2Fn9Ys4%2FPdJit2pkvEUForXuS6bi10acTE5mYJi059ZB9%2BiPc52hfg98FhioJTkzxmJ7wFF2IvUT8lM3SZcIShg1nPXLYKnkVdpHpk%2BX0FoxB3l%2FhbvCEJ1oGQPo5EUvHK0UOd9f2rTxAqul1gQN9Cz%2FAfRIDDtn2iC3lEflKvXEseExlKbpLS9knW3vSqF6tI1mGZQowAE0G8sJbg6E74N4Y3Nj7Anhq7PZbxan675rmZ51TvEODfr2G27xYvmqaDPg8x0EiMA%2BFY9pyPcQ%2FTdastVFktRhOhfcqbVrt4YpHPT7pyWa%2FSbIdndWFGHLFe0Cs78QTmzOkQdSoLNpI2k9cFzimSqJqRIiLD8psFa0HThqcDg7eNavyvwvvmN%2FZvuQkLxpUnXW6%2BoBTyWHUnmUvzqo2SIq1EiLDMg%2FJL%2Bp1WqIOMngMIP99sEGOqUBz3%2FWwROBj89kCgqx1f%2B6omiX3rQ%2BanhcMlLZmvGXvpGm1f0mF9e8kmaXSmqhKmhX5mZGGih1q6Wu5Y3vfXMnk0Nr6eZLbBdkxTRrNXN%2Bai1gRX7RGSddnf0XeknVxjZBgW3X0iM77uGBVFIXIbFNk%2FmNE42RqNZhkoRzXrLgvsl1FjOTdTkK1bpAGNVQpd2bI3gRsTFqOSB2LIXu8g3w%2BDhhEwLC&X-Amz-Signature=af14fd1ce4e298a32fb9e51689c330e9d61a698ad0b92d0e699ef35d17cb1ee2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
