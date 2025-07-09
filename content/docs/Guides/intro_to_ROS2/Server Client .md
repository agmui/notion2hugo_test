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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KV2GOON%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLWqvYrEhyKJ4GJwakFEzhwZLGmmHQzlSvRyQcmB0WtAIgcG%2FMbh6UpV6vI%2FMm6PILaPRfOFh23CFNnbnNMcXwTl4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpyz5vVnZ9qNVGmxircA3V4Tmk9jyCxG%2F%2FKH1ntvnFIF8N3cfDxVRrtlgAnbFbZGedHLBhcSHZCv6tit2wEBfnRAkSqKQOyFFDC2XrJukX%2FYGTghIQO7%2FpUUFftlIeR9Ey7kG4pHVdoMl5R%2FuNfOyHCBENQw4AZ61goOnDYGjPqVOK6oUvcVjSs1ehY%2FWImKYX3GatSFrxgAK7n9xRRbS%2FJHaGaWMcjfosyOJdpDncf5mSWQ2K3LLd29DOGzIb4%2FE%2Bbz2sSLzcZtQyKEFQiv1OZSDEYYAXifxrUFQ8wT2CJCtIexW0tdVdm13xrOEVmJRD2MbnhqxxLh9qUCDc%2FzSK3t%2FXF1Fq3UfCpInCn88Z0N91PN4mHilEma4r7m1qJx6bC62%2FYFfXd1w07goxOjfYsjAJQYAeTaCKvJgHMDG0A8rHW6p6j%2Bzucprn7cOcDksYrObmmT5GaYwrNSIwwFwSaBiEVRXYcLTcoHBIr%2FbibHDtACTgf4AHStr5TSRoncjDMZqAPrRlr4XvdCbmU54q9b%2BTskAKo3%2FpV5CDq6HM0iHeO8anAiXFhcus74gCCGBrAszVfReTBZct3thVEdCAKGpgAaotPNNCVz3y%2FRHCIBRbuS1VttcZrMAEYLVWoyN%2BLYMPr0yc63Y9FMLiLucMGOqUB3TkZehrOp5oSGvii0PEiw4l2HN%2FnFTUJpa2Gxgn0AzY5W66YvMNAUCHd73wAeu%2F%2FSN3pB0WkxRLVkYkesim%2Bi5FtZmOhJXU3rUjG2Iiquj1seOQXvrgCttydHpUST0g5q9i2U3A9x3YOKfe7ED69u7AqcqYgaEq%2F5KTHCMuDQZvfcCEtJy9%2F26Qnu%2F7%2BpDmeLsT5Tu6y3VyEPoI8%2BfQkBPMYbtCW&X-Amz-Signature=720dbe03605dd5e1126e86f626290273f91c5f11e833ed567d4dca92f33ae9b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KV2GOON%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLWqvYrEhyKJ4GJwakFEzhwZLGmmHQzlSvRyQcmB0WtAIgcG%2FMbh6UpV6vI%2FMm6PILaPRfOFh23CFNnbnNMcXwTl4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpyz5vVnZ9qNVGmxircA3V4Tmk9jyCxG%2F%2FKH1ntvnFIF8N3cfDxVRrtlgAnbFbZGedHLBhcSHZCv6tit2wEBfnRAkSqKQOyFFDC2XrJukX%2FYGTghIQO7%2FpUUFftlIeR9Ey7kG4pHVdoMl5R%2FuNfOyHCBENQw4AZ61goOnDYGjPqVOK6oUvcVjSs1ehY%2FWImKYX3GatSFrxgAK7n9xRRbS%2FJHaGaWMcjfosyOJdpDncf5mSWQ2K3LLd29DOGzIb4%2FE%2Bbz2sSLzcZtQyKEFQiv1OZSDEYYAXifxrUFQ8wT2CJCtIexW0tdVdm13xrOEVmJRD2MbnhqxxLh9qUCDc%2FzSK3t%2FXF1Fq3UfCpInCn88Z0N91PN4mHilEma4r7m1qJx6bC62%2FYFfXd1w07goxOjfYsjAJQYAeTaCKvJgHMDG0A8rHW6p6j%2Bzucprn7cOcDksYrObmmT5GaYwrNSIwwFwSaBiEVRXYcLTcoHBIr%2FbibHDtACTgf4AHStr5TSRoncjDMZqAPrRlr4XvdCbmU54q9b%2BTskAKo3%2FpV5CDq6HM0iHeO8anAiXFhcus74gCCGBrAszVfReTBZct3thVEdCAKGpgAaotPNNCVz3y%2FRHCIBRbuS1VttcZrMAEYLVWoyN%2BLYMPr0yc63Y9FMLiLucMGOqUB3TkZehrOp5oSGvii0PEiw4l2HN%2FnFTUJpa2Gxgn0AzY5W66YvMNAUCHd73wAeu%2F%2FSN3pB0WkxRLVkYkesim%2Bi5FtZmOhJXU3rUjG2Iiquj1seOQXvrgCttydHpUST0g5q9i2U3A9x3YOKfe7ED69u7AqcqYgaEq%2F5KTHCMuDQZvfcCEtJy9%2F26Qnu%2F7%2BpDmeLsT5Tu6y3VyEPoI8%2BfQkBPMYbtCW&X-Amz-Signature=8af5828e16f601b77d205a0e41e9fa1e1e707a164574d5fa5e4caf77f2e7ae4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KV2GOON%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLWqvYrEhyKJ4GJwakFEzhwZLGmmHQzlSvRyQcmB0WtAIgcG%2FMbh6UpV6vI%2FMm6PILaPRfOFh23CFNnbnNMcXwTl4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpyz5vVnZ9qNVGmxircA3V4Tmk9jyCxG%2F%2FKH1ntvnFIF8N3cfDxVRrtlgAnbFbZGedHLBhcSHZCv6tit2wEBfnRAkSqKQOyFFDC2XrJukX%2FYGTghIQO7%2FpUUFftlIeR9Ey7kG4pHVdoMl5R%2FuNfOyHCBENQw4AZ61goOnDYGjPqVOK6oUvcVjSs1ehY%2FWImKYX3GatSFrxgAK7n9xRRbS%2FJHaGaWMcjfosyOJdpDncf5mSWQ2K3LLd29DOGzIb4%2FE%2Bbz2sSLzcZtQyKEFQiv1OZSDEYYAXifxrUFQ8wT2CJCtIexW0tdVdm13xrOEVmJRD2MbnhqxxLh9qUCDc%2FzSK3t%2FXF1Fq3UfCpInCn88Z0N91PN4mHilEma4r7m1qJx6bC62%2FYFfXd1w07goxOjfYsjAJQYAeTaCKvJgHMDG0A8rHW6p6j%2Bzucprn7cOcDksYrObmmT5GaYwrNSIwwFwSaBiEVRXYcLTcoHBIr%2FbibHDtACTgf4AHStr5TSRoncjDMZqAPrRlr4XvdCbmU54q9b%2BTskAKo3%2FpV5CDq6HM0iHeO8anAiXFhcus74gCCGBrAszVfReTBZct3thVEdCAKGpgAaotPNNCVz3y%2FRHCIBRbuS1VttcZrMAEYLVWoyN%2BLYMPr0yc63Y9FMLiLucMGOqUB3TkZehrOp5oSGvii0PEiw4l2HN%2FnFTUJpa2Gxgn0AzY5W66YvMNAUCHd73wAeu%2F%2FSN3pB0WkxRLVkYkesim%2Bi5FtZmOhJXU3rUjG2Iiquj1seOQXvrgCttydHpUST0g5q9i2U3A9x3YOKfe7ED69u7AqcqYgaEq%2F5KTHCMuDQZvfcCEtJy9%2F26Qnu%2F7%2BpDmeLsT5Tu6y3VyEPoI8%2BfQkBPMYbtCW&X-Amz-Signature=fa89088cd0a77fae2d81039f3a367e28f80109a0631aed0a2be8d649b847abb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KV2GOON%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLWqvYrEhyKJ4GJwakFEzhwZLGmmHQzlSvRyQcmB0WtAIgcG%2FMbh6UpV6vI%2FMm6PILaPRfOFh23CFNnbnNMcXwTl4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpyz5vVnZ9qNVGmxircA3V4Tmk9jyCxG%2F%2FKH1ntvnFIF8N3cfDxVRrtlgAnbFbZGedHLBhcSHZCv6tit2wEBfnRAkSqKQOyFFDC2XrJukX%2FYGTghIQO7%2FpUUFftlIeR9Ey7kG4pHVdoMl5R%2FuNfOyHCBENQw4AZ61goOnDYGjPqVOK6oUvcVjSs1ehY%2FWImKYX3GatSFrxgAK7n9xRRbS%2FJHaGaWMcjfosyOJdpDncf5mSWQ2K3LLd29DOGzIb4%2FE%2Bbz2sSLzcZtQyKEFQiv1OZSDEYYAXifxrUFQ8wT2CJCtIexW0tdVdm13xrOEVmJRD2MbnhqxxLh9qUCDc%2FzSK3t%2FXF1Fq3UfCpInCn88Z0N91PN4mHilEma4r7m1qJx6bC62%2FYFfXd1w07goxOjfYsjAJQYAeTaCKvJgHMDG0A8rHW6p6j%2Bzucprn7cOcDksYrObmmT5GaYwrNSIwwFwSaBiEVRXYcLTcoHBIr%2FbibHDtACTgf4AHStr5TSRoncjDMZqAPrRlr4XvdCbmU54q9b%2BTskAKo3%2FpV5CDq6HM0iHeO8anAiXFhcus74gCCGBrAszVfReTBZct3thVEdCAKGpgAaotPNNCVz3y%2FRHCIBRbuS1VttcZrMAEYLVWoyN%2BLYMPr0yc63Y9FMLiLucMGOqUB3TkZehrOp5oSGvii0PEiw4l2HN%2FnFTUJpa2Gxgn0AzY5W66YvMNAUCHd73wAeu%2F%2FSN3pB0WkxRLVkYkesim%2Bi5FtZmOhJXU3rUjG2Iiquj1seOQXvrgCttydHpUST0g5q9i2U3A9x3YOKfe7ED69u7AqcqYgaEq%2F5KTHCMuDQZvfcCEtJy9%2F26Qnu%2F7%2BpDmeLsT5Tu6y3VyEPoI8%2BfQkBPMYbtCW&X-Amz-Signature=4097a355e5532518a8031262071246617ee69ba5190a66e3e1c1052f2dc0cff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KV2GOON%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLWqvYrEhyKJ4GJwakFEzhwZLGmmHQzlSvRyQcmB0WtAIgcG%2FMbh6UpV6vI%2FMm6PILaPRfOFh23CFNnbnNMcXwTl4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpyz5vVnZ9qNVGmxircA3V4Tmk9jyCxG%2F%2FKH1ntvnFIF8N3cfDxVRrtlgAnbFbZGedHLBhcSHZCv6tit2wEBfnRAkSqKQOyFFDC2XrJukX%2FYGTghIQO7%2FpUUFftlIeR9Ey7kG4pHVdoMl5R%2FuNfOyHCBENQw4AZ61goOnDYGjPqVOK6oUvcVjSs1ehY%2FWImKYX3GatSFrxgAK7n9xRRbS%2FJHaGaWMcjfosyOJdpDncf5mSWQ2K3LLd29DOGzIb4%2FE%2Bbz2sSLzcZtQyKEFQiv1OZSDEYYAXifxrUFQ8wT2CJCtIexW0tdVdm13xrOEVmJRD2MbnhqxxLh9qUCDc%2FzSK3t%2FXF1Fq3UfCpInCn88Z0N91PN4mHilEma4r7m1qJx6bC62%2FYFfXd1w07goxOjfYsjAJQYAeTaCKvJgHMDG0A8rHW6p6j%2Bzucprn7cOcDksYrObmmT5GaYwrNSIwwFwSaBiEVRXYcLTcoHBIr%2FbibHDtACTgf4AHStr5TSRoncjDMZqAPrRlr4XvdCbmU54q9b%2BTskAKo3%2FpV5CDq6HM0iHeO8anAiXFhcus74gCCGBrAszVfReTBZct3thVEdCAKGpgAaotPNNCVz3y%2FRHCIBRbuS1VttcZrMAEYLVWoyN%2BLYMPr0yc63Y9FMLiLucMGOqUB3TkZehrOp5oSGvii0PEiw4l2HN%2FnFTUJpa2Gxgn0AzY5W66YvMNAUCHd73wAeu%2F%2FSN3pB0WkxRLVkYkesim%2Bi5FtZmOhJXU3rUjG2Iiquj1seOQXvrgCttydHpUST0g5q9i2U3A9x3YOKfe7ED69u7AqcqYgaEq%2F5KTHCMuDQZvfcCEtJy9%2F26Qnu%2F7%2BpDmeLsT5Tu6y3VyEPoI8%2BfQkBPMYbtCW&X-Amz-Signature=b11a218752d86355e8f3d35fa69449da2e3642959dd493d8b8d4de67311602d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
