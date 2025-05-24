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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3U745PM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIBwa9wZF606HreMAYdeGd%2B5yQqTh281mKIu%2FzlrFCyYNAiEAv%2BCVuYkJalsHLPDCiTCstm%2FnzurdWG2b%2FIV1RJAwQvcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPROgPORf8gJl%2FpdDCrcA2F13QBcMapeW2yAQDr9VvBcxii1e8qVDFn2uySXvEGupYH87r%2BfHPelK5r0PQEp4zAI2007%2BgVt932P%2FXtbNBHzj8bJA8DbYn3EEkXZ5hnGaOxPPk7VRBThW7ikHQg39UP2C5LSzEYBC0%2Fma%2B2QWmbg8pilQtGwhYD6KDvbN3OlCHmkq63DacxMl2fVjkzyjc5Z5bpAbtpte0RGLifAjWtMRnjO6KLPaFMpATezfvpzqAe9PCap7p%2B1SsDmvxQwADzv2ISUN%2Fob0RZwQFJ5z5M%2FlgqX44de9SoXNRw8z7YeOrMgsz4lCmp6laLPIK2bfZPcSQsKOa8pS2sMQd%2BSYyqrIu6VyEg0NDtZJ6%2BRbCGyViOBT5kYeK%2BeYY4IkbN0zN4BhCvzSibdEusXqbOOS%2B5lqSdWj5m%2FfV3ulvBu0gDcFIQQ88bgvlH4RyinwdCgYGqIc5fshx%2FZRB07oCAt1fXSefGv0ojSv3X593ev%2BW9sxSTi4I8gFE1E9iBUV3wHxGy3NRHDDi1w5mg%2F69ZDQ1DE6rJxpuWM3ueteRiY6F5LuwMZjE1fczTtpNK3Y1MUCBU5jN1MsAGLOsgVH3zr9R9kCFvReX6yOKxaPnrZg3uLKZB60KLPE763YgvyMK6dxcEGOqUBaVvCJzvmBp6rsmWTaPcauYKiBoExRepNioZ%2F0qWzr625Ut%2FkQkpuQBltcSTWwOPLdbd7GG2iKp%2FanAiw5xW3Gr8QrPIO%2BXLrcZmV0A40t4YnqQpHy0uzba%2FPG6gAtA4AisJmxhWmu7S09a%2FMHgQohoGQZsU1yR%2FfcPNzxF%2B1NYuJevVjfC74El5zvYMkWkSltC5onAwH18449nH26Bk0pH1AJq4r&X-Amz-Signature=6786fc5ab2e8010e70c1ab18a4edfacfc7a6a47420527396a9a86f468ccef5e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3U745PM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIBwa9wZF606HreMAYdeGd%2B5yQqTh281mKIu%2FzlrFCyYNAiEAv%2BCVuYkJalsHLPDCiTCstm%2FnzurdWG2b%2FIV1RJAwQvcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPROgPORf8gJl%2FpdDCrcA2F13QBcMapeW2yAQDr9VvBcxii1e8qVDFn2uySXvEGupYH87r%2BfHPelK5r0PQEp4zAI2007%2BgVt932P%2FXtbNBHzj8bJA8DbYn3EEkXZ5hnGaOxPPk7VRBThW7ikHQg39UP2C5LSzEYBC0%2Fma%2B2QWmbg8pilQtGwhYD6KDvbN3OlCHmkq63DacxMl2fVjkzyjc5Z5bpAbtpte0RGLifAjWtMRnjO6KLPaFMpATezfvpzqAe9PCap7p%2B1SsDmvxQwADzv2ISUN%2Fob0RZwQFJ5z5M%2FlgqX44de9SoXNRw8z7YeOrMgsz4lCmp6laLPIK2bfZPcSQsKOa8pS2sMQd%2BSYyqrIu6VyEg0NDtZJ6%2BRbCGyViOBT5kYeK%2BeYY4IkbN0zN4BhCvzSibdEusXqbOOS%2B5lqSdWj5m%2FfV3ulvBu0gDcFIQQ88bgvlH4RyinwdCgYGqIc5fshx%2FZRB07oCAt1fXSefGv0ojSv3X593ev%2BW9sxSTi4I8gFE1E9iBUV3wHxGy3NRHDDi1w5mg%2F69ZDQ1DE6rJxpuWM3ueteRiY6F5LuwMZjE1fczTtpNK3Y1MUCBU5jN1MsAGLOsgVH3zr9R9kCFvReX6yOKxaPnrZg3uLKZB60KLPE763YgvyMK6dxcEGOqUBaVvCJzvmBp6rsmWTaPcauYKiBoExRepNioZ%2F0qWzr625Ut%2FkQkpuQBltcSTWwOPLdbd7GG2iKp%2FanAiw5xW3Gr8QrPIO%2BXLrcZmV0A40t4YnqQpHy0uzba%2FPG6gAtA4AisJmxhWmu7S09a%2FMHgQohoGQZsU1yR%2FfcPNzxF%2B1NYuJevVjfC74El5zvYMkWkSltC5onAwH18449nH26Bk0pH1AJq4r&X-Amz-Signature=6c00e49f4624fd20adcd3af98112d740df140bf4c333214366e4af5c2c67f159&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3U745PM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIBwa9wZF606HreMAYdeGd%2B5yQqTh281mKIu%2FzlrFCyYNAiEAv%2BCVuYkJalsHLPDCiTCstm%2FnzurdWG2b%2FIV1RJAwQvcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPROgPORf8gJl%2FpdDCrcA2F13QBcMapeW2yAQDr9VvBcxii1e8qVDFn2uySXvEGupYH87r%2BfHPelK5r0PQEp4zAI2007%2BgVt932P%2FXtbNBHzj8bJA8DbYn3EEkXZ5hnGaOxPPk7VRBThW7ikHQg39UP2C5LSzEYBC0%2Fma%2B2QWmbg8pilQtGwhYD6KDvbN3OlCHmkq63DacxMl2fVjkzyjc5Z5bpAbtpte0RGLifAjWtMRnjO6KLPaFMpATezfvpzqAe9PCap7p%2B1SsDmvxQwADzv2ISUN%2Fob0RZwQFJ5z5M%2FlgqX44de9SoXNRw8z7YeOrMgsz4lCmp6laLPIK2bfZPcSQsKOa8pS2sMQd%2BSYyqrIu6VyEg0NDtZJ6%2BRbCGyViOBT5kYeK%2BeYY4IkbN0zN4BhCvzSibdEusXqbOOS%2B5lqSdWj5m%2FfV3ulvBu0gDcFIQQ88bgvlH4RyinwdCgYGqIc5fshx%2FZRB07oCAt1fXSefGv0ojSv3X593ev%2BW9sxSTi4I8gFE1E9iBUV3wHxGy3NRHDDi1w5mg%2F69ZDQ1DE6rJxpuWM3ueteRiY6F5LuwMZjE1fczTtpNK3Y1MUCBU5jN1MsAGLOsgVH3zr9R9kCFvReX6yOKxaPnrZg3uLKZB60KLPE763YgvyMK6dxcEGOqUBaVvCJzvmBp6rsmWTaPcauYKiBoExRepNioZ%2F0qWzr625Ut%2FkQkpuQBltcSTWwOPLdbd7GG2iKp%2FanAiw5xW3Gr8QrPIO%2BXLrcZmV0A40t4YnqQpHy0uzba%2FPG6gAtA4AisJmxhWmu7S09a%2FMHgQohoGQZsU1yR%2FfcPNzxF%2B1NYuJevVjfC74El5zvYMkWkSltC5onAwH18449nH26Bk0pH1AJq4r&X-Amz-Signature=4c744e59add199ea3cde786db818ea674cfd3a75f080f7ba76dafb03071f2218&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3U745PM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIBwa9wZF606HreMAYdeGd%2B5yQqTh281mKIu%2FzlrFCyYNAiEAv%2BCVuYkJalsHLPDCiTCstm%2FnzurdWG2b%2FIV1RJAwQvcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPROgPORf8gJl%2FpdDCrcA2F13QBcMapeW2yAQDr9VvBcxii1e8qVDFn2uySXvEGupYH87r%2BfHPelK5r0PQEp4zAI2007%2BgVt932P%2FXtbNBHzj8bJA8DbYn3EEkXZ5hnGaOxPPk7VRBThW7ikHQg39UP2C5LSzEYBC0%2Fma%2B2QWmbg8pilQtGwhYD6KDvbN3OlCHmkq63DacxMl2fVjkzyjc5Z5bpAbtpte0RGLifAjWtMRnjO6KLPaFMpATezfvpzqAe9PCap7p%2B1SsDmvxQwADzv2ISUN%2Fob0RZwQFJ5z5M%2FlgqX44de9SoXNRw8z7YeOrMgsz4lCmp6laLPIK2bfZPcSQsKOa8pS2sMQd%2BSYyqrIu6VyEg0NDtZJ6%2BRbCGyViOBT5kYeK%2BeYY4IkbN0zN4BhCvzSibdEusXqbOOS%2B5lqSdWj5m%2FfV3ulvBu0gDcFIQQ88bgvlH4RyinwdCgYGqIc5fshx%2FZRB07oCAt1fXSefGv0ojSv3X593ev%2BW9sxSTi4I8gFE1E9iBUV3wHxGy3NRHDDi1w5mg%2F69ZDQ1DE6rJxpuWM3ueteRiY6F5LuwMZjE1fczTtpNK3Y1MUCBU5jN1MsAGLOsgVH3zr9R9kCFvReX6yOKxaPnrZg3uLKZB60KLPE763YgvyMK6dxcEGOqUBaVvCJzvmBp6rsmWTaPcauYKiBoExRepNioZ%2F0qWzr625Ut%2FkQkpuQBltcSTWwOPLdbd7GG2iKp%2FanAiw5xW3Gr8QrPIO%2BXLrcZmV0A40t4YnqQpHy0uzba%2FPG6gAtA4AisJmxhWmu7S09a%2FMHgQohoGQZsU1yR%2FfcPNzxF%2B1NYuJevVjfC74El5zvYMkWkSltC5onAwH18449nH26Bk0pH1AJq4r&X-Amz-Signature=5e57f80c464e316092fa40eca95d75e81c3a2fb023dd9d5e9bb7403944c163dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3U745PM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIBwa9wZF606HreMAYdeGd%2B5yQqTh281mKIu%2FzlrFCyYNAiEAv%2BCVuYkJalsHLPDCiTCstm%2FnzurdWG2b%2FIV1RJAwQvcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPROgPORf8gJl%2FpdDCrcA2F13QBcMapeW2yAQDr9VvBcxii1e8qVDFn2uySXvEGupYH87r%2BfHPelK5r0PQEp4zAI2007%2BgVt932P%2FXtbNBHzj8bJA8DbYn3EEkXZ5hnGaOxPPk7VRBThW7ikHQg39UP2C5LSzEYBC0%2Fma%2B2QWmbg8pilQtGwhYD6KDvbN3OlCHmkq63DacxMl2fVjkzyjc5Z5bpAbtpte0RGLifAjWtMRnjO6KLPaFMpATezfvpzqAe9PCap7p%2B1SsDmvxQwADzv2ISUN%2Fob0RZwQFJ5z5M%2FlgqX44de9SoXNRw8z7YeOrMgsz4lCmp6laLPIK2bfZPcSQsKOa8pS2sMQd%2BSYyqrIu6VyEg0NDtZJ6%2BRbCGyViOBT5kYeK%2BeYY4IkbN0zN4BhCvzSibdEusXqbOOS%2B5lqSdWj5m%2FfV3ulvBu0gDcFIQQ88bgvlH4RyinwdCgYGqIc5fshx%2FZRB07oCAt1fXSefGv0ojSv3X593ev%2BW9sxSTi4I8gFE1E9iBUV3wHxGy3NRHDDi1w5mg%2F69ZDQ1DE6rJxpuWM3ueteRiY6F5LuwMZjE1fczTtpNK3Y1MUCBU5jN1MsAGLOsgVH3zr9R9kCFvReX6yOKxaPnrZg3uLKZB60KLPE763YgvyMK6dxcEGOqUBaVvCJzvmBp6rsmWTaPcauYKiBoExRepNioZ%2F0qWzr625Ut%2FkQkpuQBltcSTWwOPLdbd7GG2iKp%2FanAiw5xW3Gr8QrPIO%2BXLrcZmV0A40t4YnqQpHy0uzba%2FPG6gAtA4AisJmxhWmu7S09a%2FMHgQohoGQZsU1yR%2FfcPNzxF%2B1NYuJevVjfC74El5zvYMkWkSltC5onAwH18449nH26Bk0pH1AJq4r&X-Amz-Signature=aa41bb1f449be6695c2d60e7cfcf9d72a2955324f1c772d28b8e384bd7a28fed&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
