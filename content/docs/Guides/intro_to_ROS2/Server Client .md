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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636SPVSIE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1IJ%2FJRzNxNXrADX9lQVn928lbapP00qeXOT1zgLi47wIgR4iyTbvBZ%2FOueXSz27nNZzTlG9qMGPZzdGMdVD9YRm0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuF6j2qF8qvYoiY1ircA6Pm3bS9x36fFy%2B1HLnHo6dy7%2FpAnUzxPiWR737vCjot%2FtBYCDZ%2Fd%2FTuPoUw%2F9IvEeH92Dt4yGTT9pGB8Jb%2FPllzGTZLCnDFcKD7QmZU3b%2BkHHaby1AM%2FvS5zDTskR1yVNKmFJ6KT95nWkNL97iyM68ZQIASaBEk5TYYSaqmtoLQCMvHUlnipg7ZV3EZhwbZRW3BFT8RkaQ3mX4m57YUBRtrtYVhtdg6wYL4Na3viFqQq5qusZQw4jcL%2FMTjYc30FH9MIOOlRslvtiruJ0VuUjrzPD8%2FAkFX%2FytuOaQ1MGL3HlKRL7%2BomWd3P4DGtDR%2F1GR6dgANv5oS7oljSAK0vRXqGkQqPV8Z99zCAK8pFNPEx4VQTUVs8i%2FlCbuxb32jGBh%2Fj0MObiWReb87%2F%2FkYEfIiU2Pgh%2BqVBuJwYduXldOWdXNTAe8olONtCGRZ8Hc6fTUEJTc5lJR%2Fotj1en2CreKCmaQGEVGmV1wo81Eskjad4qiHy%2BnF8k2ouxEBlwrvj5UWYIk75ESI9mfHk%2FhOxZzIACWdfmV2c6bijbsb%2BE3oW3zfKue1GtK6SuujFy27HG3Ddw4q1ZiWAkUIVDa8iN3wbubHbzXjwaYYCqwUkaGO3GE3FfZqFc8IuvQmMMmBrMEGOqUB2Uetlaa1ecA9YbxNg5J%2B99%2F%2FarwDXfFoovHjOkBt8qUX3M1kpI4UDe%2FPJ9VdMAJVqEqtkZWVtpOjiiAGqIbaOiFpK6VCNLdIQ0DTYK24UmSky7H%2FaYtaAsPPCfROvfVm%2BWuijpayQ4QZxy%2BhQInH5Uvz1MI%2FuYUxhxzB3J3hFJunaWML9c8YRKCKgb91PXrWAQe9TKfHqfJAruxTT2PZFYnTiBdA&X-Amz-Signature=d8a28993949b503e0799d3413855aa691e1ed78723f6aaa0c635b612f70c06d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636SPVSIE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1IJ%2FJRzNxNXrADX9lQVn928lbapP00qeXOT1zgLi47wIgR4iyTbvBZ%2FOueXSz27nNZzTlG9qMGPZzdGMdVD9YRm0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuF6j2qF8qvYoiY1ircA6Pm3bS9x36fFy%2B1HLnHo6dy7%2FpAnUzxPiWR737vCjot%2FtBYCDZ%2Fd%2FTuPoUw%2F9IvEeH92Dt4yGTT9pGB8Jb%2FPllzGTZLCnDFcKD7QmZU3b%2BkHHaby1AM%2FvS5zDTskR1yVNKmFJ6KT95nWkNL97iyM68ZQIASaBEk5TYYSaqmtoLQCMvHUlnipg7ZV3EZhwbZRW3BFT8RkaQ3mX4m57YUBRtrtYVhtdg6wYL4Na3viFqQq5qusZQw4jcL%2FMTjYc30FH9MIOOlRslvtiruJ0VuUjrzPD8%2FAkFX%2FytuOaQ1MGL3HlKRL7%2BomWd3P4DGtDR%2F1GR6dgANv5oS7oljSAK0vRXqGkQqPV8Z99zCAK8pFNPEx4VQTUVs8i%2FlCbuxb32jGBh%2Fj0MObiWReb87%2F%2FkYEfIiU2Pgh%2BqVBuJwYduXldOWdXNTAe8olONtCGRZ8Hc6fTUEJTc5lJR%2Fotj1en2CreKCmaQGEVGmV1wo81Eskjad4qiHy%2BnF8k2ouxEBlwrvj5UWYIk75ESI9mfHk%2FhOxZzIACWdfmV2c6bijbsb%2BE3oW3zfKue1GtK6SuujFy27HG3Ddw4q1ZiWAkUIVDa8iN3wbubHbzXjwaYYCqwUkaGO3GE3FfZqFc8IuvQmMMmBrMEGOqUB2Uetlaa1ecA9YbxNg5J%2B99%2F%2FarwDXfFoovHjOkBt8qUX3M1kpI4UDe%2FPJ9VdMAJVqEqtkZWVtpOjiiAGqIbaOiFpK6VCNLdIQ0DTYK24UmSky7H%2FaYtaAsPPCfROvfVm%2BWuijpayQ4QZxy%2BhQInH5Uvz1MI%2FuYUxhxzB3J3hFJunaWML9c8YRKCKgb91PXrWAQe9TKfHqfJAruxTT2PZFYnTiBdA&X-Amz-Signature=6ae3022a5d8fa7cc00c31d0fc243449bfad11cd15c6d35dc3b57f93c1f7f3f14&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636SPVSIE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1IJ%2FJRzNxNXrADX9lQVn928lbapP00qeXOT1zgLi47wIgR4iyTbvBZ%2FOueXSz27nNZzTlG9qMGPZzdGMdVD9YRm0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuF6j2qF8qvYoiY1ircA6Pm3bS9x36fFy%2B1HLnHo6dy7%2FpAnUzxPiWR737vCjot%2FtBYCDZ%2Fd%2FTuPoUw%2F9IvEeH92Dt4yGTT9pGB8Jb%2FPllzGTZLCnDFcKD7QmZU3b%2BkHHaby1AM%2FvS5zDTskR1yVNKmFJ6KT95nWkNL97iyM68ZQIASaBEk5TYYSaqmtoLQCMvHUlnipg7ZV3EZhwbZRW3BFT8RkaQ3mX4m57YUBRtrtYVhtdg6wYL4Na3viFqQq5qusZQw4jcL%2FMTjYc30FH9MIOOlRslvtiruJ0VuUjrzPD8%2FAkFX%2FytuOaQ1MGL3HlKRL7%2BomWd3P4DGtDR%2F1GR6dgANv5oS7oljSAK0vRXqGkQqPV8Z99zCAK8pFNPEx4VQTUVs8i%2FlCbuxb32jGBh%2Fj0MObiWReb87%2F%2FkYEfIiU2Pgh%2BqVBuJwYduXldOWdXNTAe8olONtCGRZ8Hc6fTUEJTc5lJR%2Fotj1en2CreKCmaQGEVGmV1wo81Eskjad4qiHy%2BnF8k2ouxEBlwrvj5UWYIk75ESI9mfHk%2FhOxZzIACWdfmV2c6bijbsb%2BE3oW3zfKue1GtK6SuujFy27HG3Ddw4q1ZiWAkUIVDa8iN3wbubHbzXjwaYYCqwUkaGO3GE3FfZqFc8IuvQmMMmBrMEGOqUB2Uetlaa1ecA9YbxNg5J%2B99%2F%2FarwDXfFoovHjOkBt8qUX3M1kpI4UDe%2FPJ9VdMAJVqEqtkZWVtpOjiiAGqIbaOiFpK6VCNLdIQ0DTYK24UmSky7H%2FaYtaAsPPCfROvfVm%2BWuijpayQ4QZxy%2BhQInH5Uvz1MI%2FuYUxhxzB3J3hFJunaWML9c8YRKCKgb91PXrWAQe9TKfHqfJAruxTT2PZFYnTiBdA&X-Amz-Signature=3820021b1a05cae47a4fcf06831738f03fdca1c9dd2167dd8d1d738c7dddca34&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636SPVSIE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1IJ%2FJRzNxNXrADX9lQVn928lbapP00qeXOT1zgLi47wIgR4iyTbvBZ%2FOueXSz27nNZzTlG9qMGPZzdGMdVD9YRm0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuF6j2qF8qvYoiY1ircA6Pm3bS9x36fFy%2B1HLnHo6dy7%2FpAnUzxPiWR737vCjot%2FtBYCDZ%2Fd%2FTuPoUw%2F9IvEeH92Dt4yGTT9pGB8Jb%2FPllzGTZLCnDFcKD7QmZU3b%2BkHHaby1AM%2FvS5zDTskR1yVNKmFJ6KT95nWkNL97iyM68ZQIASaBEk5TYYSaqmtoLQCMvHUlnipg7ZV3EZhwbZRW3BFT8RkaQ3mX4m57YUBRtrtYVhtdg6wYL4Na3viFqQq5qusZQw4jcL%2FMTjYc30FH9MIOOlRslvtiruJ0VuUjrzPD8%2FAkFX%2FytuOaQ1MGL3HlKRL7%2BomWd3P4DGtDR%2F1GR6dgANv5oS7oljSAK0vRXqGkQqPV8Z99zCAK8pFNPEx4VQTUVs8i%2FlCbuxb32jGBh%2Fj0MObiWReb87%2F%2FkYEfIiU2Pgh%2BqVBuJwYduXldOWdXNTAe8olONtCGRZ8Hc6fTUEJTc5lJR%2Fotj1en2CreKCmaQGEVGmV1wo81Eskjad4qiHy%2BnF8k2ouxEBlwrvj5UWYIk75ESI9mfHk%2FhOxZzIACWdfmV2c6bijbsb%2BE3oW3zfKue1GtK6SuujFy27HG3Ddw4q1ZiWAkUIVDa8iN3wbubHbzXjwaYYCqwUkaGO3GE3FfZqFc8IuvQmMMmBrMEGOqUB2Uetlaa1ecA9YbxNg5J%2B99%2F%2FarwDXfFoovHjOkBt8qUX3M1kpI4UDe%2FPJ9VdMAJVqEqtkZWVtpOjiiAGqIbaOiFpK6VCNLdIQ0DTYK24UmSky7H%2FaYtaAsPPCfROvfVm%2BWuijpayQ4QZxy%2BhQInH5Uvz1MI%2FuYUxhxzB3J3hFJunaWML9c8YRKCKgb91PXrWAQe9TKfHqfJAruxTT2PZFYnTiBdA&X-Amz-Signature=6ddf7225f128499024386ef4d659d61647f770542fa14f8e6377a9727af8a259&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636SPVSIE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1IJ%2FJRzNxNXrADX9lQVn928lbapP00qeXOT1zgLi47wIgR4iyTbvBZ%2FOueXSz27nNZzTlG9qMGPZzdGMdVD9YRm0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuF6j2qF8qvYoiY1ircA6Pm3bS9x36fFy%2B1HLnHo6dy7%2FpAnUzxPiWR737vCjot%2FtBYCDZ%2Fd%2FTuPoUw%2F9IvEeH92Dt4yGTT9pGB8Jb%2FPllzGTZLCnDFcKD7QmZU3b%2BkHHaby1AM%2FvS5zDTskR1yVNKmFJ6KT95nWkNL97iyM68ZQIASaBEk5TYYSaqmtoLQCMvHUlnipg7ZV3EZhwbZRW3BFT8RkaQ3mX4m57YUBRtrtYVhtdg6wYL4Na3viFqQq5qusZQw4jcL%2FMTjYc30FH9MIOOlRslvtiruJ0VuUjrzPD8%2FAkFX%2FytuOaQ1MGL3HlKRL7%2BomWd3P4DGtDR%2F1GR6dgANv5oS7oljSAK0vRXqGkQqPV8Z99zCAK8pFNPEx4VQTUVs8i%2FlCbuxb32jGBh%2Fj0MObiWReb87%2F%2FkYEfIiU2Pgh%2BqVBuJwYduXldOWdXNTAe8olONtCGRZ8Hc6fTUEJTc5lJR%2Fotj1en2CreKCmaQGEVGmV1wo81Eskjad4qiHy%2BnF8k2ouxEBlwrvj5UWYIk75ESI9mfHk%2FhOxZzIACWdfmV2c6bijbsb%2BE3oW3zfKue1GtK6SuujFy27HG3Ddw4q1ZiWAkUIVDa8iN3wbubHbzXjwaYYCqwUkaGO3GE3FfZqFc8IuvQmMMmBrMEGOqUB2Uetlaa1ecA9YbxNg5J%2B99%2F%2FarwDXfFoovHjOkBt8qUX3M1kpI4UDe%2FPJ9VdMAJVqEqtkZWVtpOjiiAGqIbaOiFpK6VCNLdIQ0DTYK24UmSky7H%2FaYtaAsPPCfROvfVm%2BWuijpayQ4QZxy%2BhQInH5Uvz1MI%2FuYUxhxzB3J3hFJunaWML9c8YRKCKgb91PXrWAQe9TKfHqfJAruxTT2PZFYnTiBdA&X-Amz-Signature=897d89b8e6b442ccb9aebe6263a62c6f56af3a4a59de055840ecb637ef15e0d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
