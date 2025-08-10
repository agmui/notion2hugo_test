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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMX3HJH5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo69%2BF8Ys8OCqMbUKr%2BT9j9Khn%2FilY2OejmUhsx3ZvogIhAIA%2B13TEZyeNshGP7irWc04Og6oGPkyS%2FmIwijQohWk7KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwViioDDzH9fhO3%2F%2Fgq3ANkLd3DmhSreM3MmqFNnLbpAkertI%2BaNHTzw5UT7vvBs%2BzPMO9p4aZbWAvOHIhzRnFc2tbEfsHaUC8Ny%2F%2BYqci%2F2FItjJItqJb9ISNTcvGibAof128zMtjhgEUv6c%2FHNM0UR0emgPP%2FvnZ2pIULOGbDwplD0jAUBtWo8GrM8Qij97eV7Ks%2BOlm0uqXnjLoihwPpoJ%2BPaVVFOt8cZ0WMpdWmxTXhFgNqeH%2FxZduhBjg12KAVrNhfnfEwWl6v3JHr1YGDn2wEuqgteMHnrOVsRcoCDS8OSNGuQHxMUYoRTKZbXw%2BrObO%2BlukFgsc3U0nsJM2tnIh18rWz%2F19UieHuuUbQB2dD3X%2B80E619AncVTSk5M85JaAU0HE68wfD1H6LipPHJMq3VRTvXJ1PXgOM872My4IV9spqmxXhLCLBewE1KaN29NMj1iSjVGHRt1MitflAINyZxfPQEwBKSpmmHhvRM%2FRtw3xkDTo3g%2BBW3UL%2FSM5KjiJC7wRX7fV%2BwOnT%2BWPuEqaVh1Jy3vjWZhhybZn1bVLld4VGKf6DA3LX3eqYHZEj1RC1uaftu7EHIg73NBj%2FJOyQShlnKjA5T6OyEkLnslQdOxipTVPS52kUU18wt1dRG0sts%2F%2BapBa55jDjuuPEBjqkAZQM3x0BZazM1bCbZUi51vLHQUJeU0cfQVfLjdFXWr7aWUYWrmNUWQ0IpBCKG5Hfpn5lDRBonJ0qo82E%2BrLDSnv9VrAqzitSt6%2B5pThJdeyj%2Bw7aqkOiJOOtKhNLLxAlXVGIjVv4BIIskl9SXlKZVQjsAHv%2BCeckdI9J2tTNE%2Bo1S3trtpbTgvr5ysziPSjtRMpw5ZgaEFV2w3kHIhYz60lYBfZv&X-Amz-Signature=250c2e149d5a0e6ef583c5ac8e0285c8ee64d9e9824a8f3d948974ce07497a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMX3HJH5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo69%2BF8Ys8OCqMbUKr%2BT9j9Khn%2FilY2OejmUhsx3ZvogIhAIA%2B13TEZyeNshGP7irWc04Og6oGPkyS%2FmIwijQohWk7KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwViioDDzH9fhO3%2F%2Fgq3ANkLd3DmhSreM3MmqFNnLbpAkertI%2BaNHTzw5UT7vvBs%2BzPMO9p4aZbWAvOHIhzRnFc2tbEfsHaUC8Ny%2F%2BYqci%2F2FItjJItqJb9ISNTcvGibAof128zMtjhgEUv6c%2FHNM0UR0emgPP%2FvnZ2pIULOGbDwplD0jAUBtWo8GrM8Qij97eV7Ks%2BOlm0uqXnjLoihwPpoJ%2BPaVVFOt8cZ0WMpdWmxTXhFgNqeH%2FxZduhBjg12KAVrNhfnfEwWl6v3JHr1YGDn2wEuqgteMHnrOVsRcoCDS8OSNGuQHxMUYoRTKZbXw%2BrObO%2BlukFgsc3U0nsJM2tnIh18rWz%2F19UieHuuUbQB2dD3X%2B80E619AncVTSk5M85JaAU0HE68wfD1H6LipPHJMq3VRTvXJ1PXgOM872My4IV9spqmxXhLCLBewE1KaN29NMj1iSjVGHRt1MitflAINyZxfPQEwBKSpmmHhvRM%2FRtw3xkDTo3g%2BBW3UL%2FSM5KjiJC7wRX7fV%2BwOnT%2BWPuEqaVh1Jy3vjWZhhybZn1bVLld4VGKf6DA3LX3eqYHZEj1RC1uaftu7EHIg73NBj%2FJOyQShlnKjA5T6OyEkLnslQdOxipTVPS52kUU18wt1dRG0sts%2F%2BapBa55jDjuuPEBjqkAZQM3x0BZazM1bCbZUi51vLHQUJeU0cfQVfLjdFXWr7aWUYWrmNUWQ0IpBCKG5Hfpn5lDRBonJ0qo82E%2BrLDSnv9VrAqzitSt6%2B5pThJdeyj%2Bw7aqkOiJOOtKhNLLxAlXVGIjVv4BIIskl9SXlKZVQjsAHv%2BCeckdI9J2tTNE%2Bo1S3trtpbTgvr5ysziPSjtRMpw5ZgaEFV2w3kHIhYz60lYBfZv&X-Amz-Signature=5ba07c567d975443e44da9ba359bab439d68c165e4ec7f12bf76cd76ed765063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMX3HJH5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo69%2BF8Ys8OCqMbUKr%2BT9j9Khn%2FilY2OejmUhsx3ZvogIhAIA%2B13TEZyeNshGP7irWc04Og6oGPkyS%2FmIwijQohWk7KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwViioDDzH9fhO3%2F%2Fgq3ANkLd3DmhSreM3MmqFNnLbpAkertI%2BaNHTzw5UT7vvBs%2BzPMO9p4aZbWAvOHIhzRnFc2tbEfsHaUC8Ny%2F%2BYqci%2F2FItjJItqJb9ISNTcvGibAof128zMtjhgEUv6c%2FHNM0UR0emgPP%2FvnZ2pIULOGbDwplD0jAUBtWo8GrM8Qij97eV7Ks%2BOlm0uqXnjLoihwPpoJ%2BPaVVFOt8cZ0WMpdWmxTXhFgNqeH%2FxZduhBjg12KAVrNhfnfEwWl6v3JHr1YGDn2wEuqgteMHnrOVsRcoCDS8OSNGuQHxMUYoRTKZbXw%2BrObO%2BlukFgsc3U0nsJM2tnIh18rWz%2F19UieHuuUbQB2dD3X%2B80E619AncVTSk5M85JaAU0HE68wfD1H6LipPHJMq3VRTvXJ1PXgOM872My4IV9spqmxXhLCLBewE1KaN29NMj1iSjVGHRt1MitflAINyZxfPQEwBKSpmmHhvRM%2FRtw3xkDTo3g%2BBW3UL%2FSM5KjiJC7wRX7fV%2BwOnT%2BWPuEqaVh1Jy3vjWZhhybZn1bVLld4VGKf6DA3LX3eqYHZEj1RC1uaftu7EHIg73NBj%2FJOyQShlnKjA5T6OyEkLnslQdOxipTVPS52kUU18wt1dRG0sts%2F%2BapBa55jDjuuPEBjqkAZQM3x0BZazM1bCbZUi51vLHQUJeU0cfQVfLjdFXWr7aWUYWrmNUWQ0IpBCKG5Hfpn5lDRBonJ0qo82E%2BrLDSnv9VrAqzitSt6%2B5pThJdeyj%2Bw7aqkOiJOOtKhNLLxAlXVGIjVv4BIIskl9SXlKZVQjsAHv%2BCeckdI9J2tTNE%2Bo1S3trtpbTgvr5ysziPSjtRMpw5ZgaEFV2w3kHIhYz60lYBfZv&X-Amz-Signature=096e6ff3643c56e4b382d26bda74f64c7c44d857727acdf969b5b87a6a82d84a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMX3HJH5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo69%2BF8Ys8OCqMbUKr%2BT9j9Khn%2FilY2OejmUhsx3ZvogIhAIA%2B13TEZyeNshGP7irWc04Og6oGPkyS%2FmIwijQohWk7KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwViioDDzH9fhO3%2F%2Fgq3ANkLd3DmhSreM3MmqFNnLbpAkertI%2BaNHTzw5UT7vvBs%2BzPMO9p4aZbWAvOHIhzRnFc2tbEfsHaUC8Ny%2F%2BYqci%2F2FItjJItqJb9ISNTcvGibAof128zMtjhgEUv6c%2FHNM0UR0emgPP%2FvnZ2pIULOGbDwplD0jAUBtWo8GrM8Qij97eV7Ks%2BOlm0uqXnjLoihwPpoJ%2BPaVVFOt8cZ0WMpdWmxTXhFgNqeH%2FxZduhBjg12KAVrNhfnfEwWl6v3JHr1YGDn2wEuqgteMHnrOVsRcoCDS8OSNGuQHxMUYoRTKZbXw%2BrObO%2BlukFgsc3U0nsJM2tnIh18rWz%2F19UieHuuUbQB2dD3X%2B80E619AncVTSk5M85JaAU0HE68wfD1H6LipPHJMq3VRTvXJ1PXgOM872My4IV9spqmxXhLCLBewE1KaN29NMj1iSjVGHRt1MitflAINyZxfPQEwBKSpmmHhvRM%2FRtw3xkDTo3g%2BBW3UL%2FSM5KjiJC7wRX7fV%2BwOnT%2BWPuEqaVh1Jy3vjWZhhybZn1bVLld4VGKf6DA3LX3eqYHZEj1RC1uaftu7EHIg73NBj%2FJOyQShlnKjA5T6OyEkLnslQdOxipTVPS52kUU18wt1dRG0sts%2F%2BapBa55jDjuuPEBjqkAZQM3x0BZazM1bCbZUi51vLHQUJeU0cfQVfLjdFXWr7aWUYWrmNUWQ0IpBCKG5Hfpn5lDRBonJ0qo82E%2BrLDSnv9VrAqzitSt6%2B5pThJdeyj%2Bw7aqkOiJOOtKhNLLxAlXVGIjVv4BIIskl9SXlKZVQjsAHv%2BCeckdI9J2tTNE%2Bo1S3trtpbTgvr5ysziPSjtRMpw5ZgaEFV2w3kHIhYz60lYBfZv&X-Amz-Signature=d26beb4c498f432fd7a5350f00e1e8fb62af92662005c79d080d5fa04f4a7c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMX3HJH5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo69%2BF8Ys8OCqMbUKr%2BT9j9Khn%2FilY2OejmUhsx3ZvogIhAIA%2B13TEZyeNshGP7irWc04Og6oGPkyS%2FmIwijQohWk7KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwViioDDzH9fhO3%2F%2Fgq3ANkLd3DmhSreM3MmqFNnLbpAkertI%2BaNHTzw5UT7vvBs%2BzPMO9p4aZbWAvOHIhzRnFc2tbEfsHaUC8Ny%2F%2BYqci%2F2FItjJItqJb9ISNTcvGibAof128zMtjhgEUv6c%2FHNM0UR0emgPP%2FvnZ2pIULOGbDwplD0jAUBtWo8GrM8Qij97eV7Ks%2BOlm0uqXnjLoihwPpoJ%2BPaVVFOt8cZ0WMpdWmxTXhFgNqeH%2FxZduhBjg12KAVrNhfnfEwWl6v3JHr1YGDn2wEuqgteMHnrOVsRcoCDS8OSNGuQHxMUYoRTKZbXw%2BrObO%2BlukFgsc3U0nsJM2tnIh18rWz%2F19UieHuuUbQB2dD3X%2B80E619AncVTSk5M85JaAU0HE68wfD1H6LipPHJMq3VRTvXJ1PXgOM872My4IV9spqmxXhLCLBewE1KaN29NMj1iSjVGHRt1MitflAINyZxfPQEwBKSpmmHhvRM%2FRtw3xkDTo3g%2BBW3UL%2FSM5KjiJC7wRX7fV%2BwOnT%2BWPuEqaVh1Jy3vjWZhhybZn1bVLld4VGKf6DA3LX3eqYHZEj1RC1uaftu7EHIg73NBj%2FJOyQShlnKjA5T6OyEkLnslQdOxipTVPS52kUU18wt1dRG0sts%2F%2BapBa55jDjuuPEBjqkAZQM3x0BZazM1bCbZUi51vLHQUJeU0cfQVfLjdFXWr7aWUYWrmNUWQ0IpBCKG5Hfpn5lDRBonJ0qo82E%2BrLDSnv9VrAqzitSt6%2B5pThJdeyj%2Bw7aqkOiJOOtKhNLLxAlXVGIjVv4BIIskl9SXlKZVQjsAHv%2BCeckdI9J2tTNE%2Bo1S3trtpbTgvr5ysziPSjtRMpw5ZgaEFV2w3kHIhYz60lYBfZv&X-Amz-Signature=3a179c07297b93bcddf4dba491272bb7eb44797f4ac7c730645cfac1e496b0cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
