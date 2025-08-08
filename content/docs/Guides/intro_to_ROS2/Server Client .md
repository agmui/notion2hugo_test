---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVNU5FG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIARlrG4yGN2c3geCkMzf%2FwX0461tdy6%2FtJCVb%2BKA4ZbZAiEAtQGhqnFdKzfU1l2moaeJ433C%2BKD7JkalNEi0Cs7wn5MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtdDVUZkE1NklknBircAw7QywRvVxwY7%2Bf30KlWxaamg435AVP9%2BQCcgZrGJjsH08srbvFrdy0LhDaJ2S7hHq2qiMw2xIZcQgtjJXBfD3HMXi9fT97Ohq7xnDioRmJ9goOqr20APWmpOjMIXl0LhCiQ9xTMiPGsuLp4kaYS2R%2F%2BKVLPNMA5dGlmMAN1DP67ney%2B%2FNoAccxIL8EJSeSYzV6mYeO7Hjz%2BuqUO4JCZRPeDeuw9E6r0vtQSM1Bi%2FlUUH0n5yITT5JowApIEB%2Bhcr09wXvhS0hIlZYVhmreed9kr8EJLc0N2LOXGmo5bgp7kVCnjpVLvYYq%2B7aV%2F01BN6tqONIHA0LV370zazh%2FYkw%2BXPNaCVFVbu9JUK3YWK%2FUxLDdNEGiwAPTLCyontJrpEyn8x%2BHAL8Y2FrgwOdwSCRQH%2FQhjBOTCP6w4vV%2F%2BCgwOVFopY8%2Fum0%2FNVXCKQede5XO50gtsXSPhepgKZEvYlQF%2BjrWjO9BsS25d3tsqct2ZxUASAHLG3vZ30YoU0LoRgcX54mT%2FyVIm8Ex4ypc7tw59ywUYhBzp3TSi0yjzqyLJ6tMgx8%2BXSrwalD3QNEKISIgSYI5JAYsD7x7Dlncpk4aQPMhlhAHGoENQuA%2FXJ70PqRX4h3dG6IWt4NeqMM7H1sQGOqUBJnK3sFQrMS%2FjNB78eYLMZB3VBJuSepU72NzWpfv6WN1JlPwBY0S0uW1BOtO%2B6P5iyI0PPX2KmJqUS1bYqJMw1Vt66%2FDG6PB5Z5mLi6WQGJ5lmijz%2FQ8QQi60NZJaRbHqGvNto9Y6uB95vS6nHPRJvoVR%2F7%2B3Y7IYk3czMSMYrL5TiohEFRK6FZq%2FcZ59XhH3NcfOBkQGrrR%2B4CD53y02BZqVEnAh&X-Amz-Signature=1f6e5b08c1c3db4dd10f337e466d9424b97a9149b30d5490d7bb60daf90225b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVNU5FG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIARlrG4yGN2c3geCkMzf%2FwX0461tdy6%2FtJCVb%2BKA4ZbZAiEAtQGhqnFdKzfU1l2moaeJ433C%2BKD7JkalNEi0Cs7wn5MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtdDVUZkE1NklknBircAw7QywRvVxwY7%2Bf30KlWxaamg435AVP9%2BQCcgZrGJjsH08srbvFrdy0LhDaJ2S7hHq2qiMw2xIZcQgtjJXBfD3HMXi9fT97Ohq7xnDioRmJ9goOqr20APWmpOjMIXl0LhCiQ9xTMiPGsuLp4kaYS2R%2F%2BKVLPNMA5dGlmMAN1DP67ney%2B%2FNoAccxIL8EJSeSYzV6mYeO7Hjz%2BuqUO4JCZRPeDeuw9E6r0vtQSM1Bi%2FlUUH0n5yITT5JowApIEB%2Bhcr09wXvhS0hIlZYVhmreed9kr8EJLc0N2LOXGmo5bgp7kVCnjpVLvYYq%2B7aV%2F01BN6tqONIHA0LV370zazh%2FYkw%2BXPNaCVFVbu9JUK3YWK%2FUxLDdNEGiwAPTLCyontJrpEyn8x%2BHAL8Y2FrgwOdwSCRQH%2FQhjBOTCP6w4vV%2F%2BCgwOVFopY8%2Fum0%2FNVXCKQede5XO50gtsXSPhepgKZEvYlQF%2BjrWjO9BsS25d3tsqct2ZxUASAHLG3vZ30YoU0LoRgcX54mT%2FyVIm8Ex4ypc7tw59ywUYhBzp3TSi0yjzqyLJ6tMgx8%2BXSrwalD3QNEKISIgSYI5JAYsD7x7Dlncpk4aQPMhlhAHGoENQuA%2FXJ70PqRX4h3dG6IWt4NeqMM7H1sQGOqUBJnK3sFQrMS%2FjNB78eYLMZB3VBJuSepU72NzWpfv6WN1JlPwBY0S0uW1BOtO%2B6P5iyI0PPX2KmJqUS1bYqJMw1Vt66%2FDG6PB5Z5mLi6WQGJ5lmijz%2FQ8QQi60NZJaRbHqGvNto9Y6uB95vS6nHPRJvoVR%2F7%2B3Y7IYk3czMSMYrL5TiohEFRK6FZq%2FcZ59XhH3NcfOBkQGrrR%2B4CD53y02BZqVEnAh&X-Amz-Signature=84ebbf9a366772b9225a7e61d3a78f2bce5881705789fe46aa2ca53b96e51c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVNU5FG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIARlrG4yGN2c3geCkMzf%2FwX0461tdy6%2FtJCVb%2BKA4ZbZAiEAtQGhqnFdKzfU1l2moaeJ433C%2BKD7JkalNEi0Cs7wn5MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtdDVUZkE1NklknBircAw7QywRvVxwY7%2Bf30KlWxaamg435AVP9%2BQCcgZrGJjsH08srbvFrdy0LhDaJ2S7hHq2qiMw2xIZcQgtjJXBfD3HMXi9fT97Ohq7xnDioRmJ9goOqr20APWmpOjMIXl0LhCiQ9xTMiPGsuLp4kaYS2R%2F%2BKVLPNMA5dGlmMAN1DP67ney%2B%2FNoAccxIL8EJSeSYzV6mYeO7Hjz%2BuqUO4JCZRPeDeuw9E6r0vtQSM1Bi%2FlUUH0n5yITT5JowApIEB%2Bhcr09wXvhS0hIlZYVhmreed9kr8EJLc0N2LOXGmo5bgp7kVCnjpVLvYYq%2B7aV%2F01BN6tqONIHA0LV370zazh%2FYkw%2BXPNaCVFVbu9JUK3YWK%2FUxLDdNEGiwAPTLCyontJrpEyn8x%2BHAL8Y2FrgwOdwSCRQH%2FQhjBOTCP6w4vV%2F%2BCgwOVFopY8%2Fum0%2FNVXCKQede5XO50gtsXSPhepgKZEvYlQF%2BjrWjO9BsS25d3tsqct2ZxUASAHLG3vZ30YoU0LoRgcX54mT%2FyVIm8Ex4ypc7tw59ywUYhBzp3TSi0yjzqyLJ6tMgx8%2BXSrwalD3QNEKISIgSYI5JAYsD7x7Dlncpk4aQPMhlhAHGoENQuA%2FXJ70PqRX4h3dG6IWt4NeqMM7H1sQGOqUBJnK3sFQrMS%2FjNB78eYLMZB3VBJuSepU72NzWpfv6WN1JlPwBY0S0uW1BOtO%2B6P5iyI0PPX2KmJqUS1bYqJMw1Vt66%2FDG6PB5Z5mLi6WQGJ5lmijz%2FQ8QQi60NZJaRbHqGvNto9Y6uB95vS6nHPRJvoVR%2F7%2B3Y7IYk3czMSMYrL5TiohEFRK6FZq%2FcZ59XhH3NcfOBkQGrrR%2B4CD53y02BZqVEnAh&X-Amz-Signature=3a8bf675f128db12dc9b4945c135c0a78c1bb020448b15826b49ecd87c506883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVNU5FG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIARlrG4yGN2c3geCkMzf%2FwX0461tdy6%2FtJCVb%2BKA4ZbZAiEAtQGhqnFdKzfU1l2moaeJ433C%2BKD7JkalNEi0Cs7wn5MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtdDVUZkE1NklknBircAw7QywRvVxwY7%2Bf30KlWxaamg435AVP9%2BQCcgZrGJjsH08srbvFrdy0LhDaJ2S7hHq2qiMw2xIZcQgtjJXBfD3HMXi9fT97Ohq7xnDioRmJ9goOqr20APWmpOjMIXl0LhCiQ9xTMiPGsuLp4kaYS2R%2F%2BKVLPNMA5dGlmMAN1DP67ney%2B%2FNoAccxIL8EJSeSYzV6mYeO7Hjz%2BuqUO4JCZRPeDeuw9E6r0vtQSM1Bi%2FlUUH0n5yITT5JowApIEB%2Bhcr09wXvhS0hIlZYVhmreed9kr8EJLc0N2LOXGmo5bgp7kVCnjpVLvYYq%2B7aV%2F01BN6tqONIHA0LV370zazh%2FYkw%2BXPNaCVFVbu9JUK3YWK%2FUxLDdNEGiwAPTLCyontJrpEyn8x%2BHAL8Y2FrgwOdwSCRQH%2FQhjBOTCP6w4vV%2F%2BCgwOVFopY8%2Fum0%2FNVXCKQede5XO50gtsXSPhepgKZEvYlQF%2BjrWjO9BsS25d3tsqct2ZxUASAHLG3vZ30YoU0LoRgcX54mT%2FyVIm8Ex4ypc7tw59ywUYhBzp3TSi0yjzqyLJ6tMgx8%2BXSrwalD3QNEKISIgSYI5JAYsD7x7Dlncpk4aQPMhlhAHGoENQuA%2FXJ70PqRX4h3dG6IWt4NeqMM7H1sQGOqUBJnK3sFQrMS%2FjNB78eYLMZB3VBJuSepU72NzWpfv6WN1JlPwBY0S0uW1BOtO%2B6P5iyI0PPX2KmJqUS1bYqJMw1Vt66%2FDG6PB5Z5mLi6WQGJ5lmijz%2FQ8QQi60NZJaRbHqGvNto9Y6uB95vS6nHPRJvoVR%2F7%2B3Y7IYk3czMSMYrL5TiohEFRK6FZq%2FcZ59XhH3NcfOBkQGrrR%2B4CD53y02BZqVEnAh&X-Amz-Signature=3d6203c8a29e518bdf7b11152230e2191e62c7e38c3d13d88944c9c792f76039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVNU5FG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIARlrG4yGN2c3geCkMzf%2FwX0461tdy6%2FtJCVb%2BKA4ZbZAiEAtQGhqnFdKzfU1l2moaeJ433C%2BKD7JkalNEi0Cs7wn5MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtdDVUZkE1NklknBircAw7QywRvVxwY7%2Bf30KlWxaamg435AVP9%2BQCcgZrGJjsH08srbvFrdy0LhDaJ2S7hHq2qiMw2xIZcQgtjJXBfD3HMXi9fT97Ohq7xnDioRmJ9goOqr20APWmpOjMIXl0LhCiQ9xTMiPGsuLp4kaYS2R%2F%2BKVLPNMA5dGlmMAN1DP67ney%2B%2FNoAccxIL8EJSeSYzV6mYeO7Hjz%2BuqUO4JCZRPeDeuw9E6r0vtQSM1Bi%2FlUUH0n5yITT5JowApIEB%2Bhcr09wXvhS0hIlZYVhmreed9kr8EJLc0N2LOXGmo5bgp7kVCnjpVLvYYq%2B7aV%2F01BN6tqONIHA0LV370zazh%2FYkw%2BXPNaCVFVbu9JUK3YWK%2FUxLDdNEGiwAPTLCyontJrpEyn8x%2BHAL8Y2FrgwOdwSCRQH%2FQhjBOTCP6w4vV%2F%2BCgwOVFopY8%2Fum0%2FNVXCKQede5XO50gtsXSPhepgKZEvYlQF%2BjrWjO9BsS25d3tsqct2ZxUASAHLG3vZ30YoU0LoRgcX54mT%2FyVIm8Ex4ypc7tw59ywUYhBzp3TSi0yjzqyLJ6tMgx8%2BXSrwalD3QNEKISIgSYI5JAYsD7x7Dlncpk4aQPMhlhAHGoENQuA%2FXJ70PqRX4h3dG6IWt4NeqMM7H1sQGOqUBJnK3sFQrMS%2FjNB78eYLMZB3VBJuSepU72NzWpfv6WN1JlPwBY0S0uW1BOtO%2B6P5iyI0PPX2KmJqUS1bYqJMw1Vt66%2FDG6PB5Z5mLi6WQGJ5lmijz%2FQ8QQi60NZJaRbHqGvNto9Y6uB95vS6nHPRJvoVR%2F7%2B3Y7IYk3czMSMYrL5TiohEFRK6FZq%2FcZ59XhH3NcfOBkQGrrR%2B4CD53y02BZqVEnAh&X-Amz-Signature=c1bb6ea29506ff6dad35771cdadcfbd343378ff84db5a489d5979f18ebcac40a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
