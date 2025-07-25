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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NC6NXMV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBK6kFtf%2BEAm5BxcBp%2F7M6eyGXKpp9fm4y6RI8u8aGR0AiEA86lLO7hGWviadxDzF5JKv2w29fbHCU%2FuBd9iAxdM35kq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDN6IYktMxn4ptjjdQircA%2Bb6LXNfVwS9A7%2BSRzjfnxk5Ae1P1dDEDWC032I1MwPY3ekV1PB3UlZCr23kih%2B6CAJQtSFIPthhX%2BAey9caGTaZLG4%2B5VJNsI2ZRDMgTmSvCorvaZlQpWHmg5Dyn0YRqaokUvXMCmElx3265WGVB%2F5KleBZ7OHwgbV7ruYeQ8jZjyozPjW%2BZGoaEeFTpzNZ41%2BgzGpGHdpJMPrzOTpzpD2LYoHk%2BOb8cgE3GMsfrx3Nn6zV%2BT7Vavoa0UQav%2F6cR3d%2Fh47t3VzNh6E8PTgZ0%2FgfdwXv1Ok%2BP3iMBbDodG51Dig1oMyAKBRNmXDqTOQcUv6sFmzENiqgDxArrjnBY0uvUOK%2FRkn4yB5hUfGAcs7%2BqgfFC1n9MpYQit1JbAbCPlRanyMoxsqPp8j%2Fgoz2XQF7O0VEKcm6I2FEe3fm79CayFucmhUvyuh6BrPX%2FU2QK9RO6lO4H67yAUHMxcchyuQinRcHmEn66kWH90UQYZEc1yK1p1PeOseVFcHttuDnNtHsE46mKZYxeR%2By9Y3WCl3V1CPmVNjhYGHky3qHDT68%2FqVbl5G7GpGoDxQ2%2FmSvco2es1tumqmugyy0UcE%2FTsvRLHAmkWxlMEMggzUmdJPZBoJ3oO1OLtJlknwbMPjQj8QGOqUBaio0rJJ3GVDXqpmCuMJFuT4P6TbBnD8h0xR564TeJ%2F4PDM19QYV4hO8cDFLb%2F%2BeAm0DiIc8y7rfYukAzIt0ZxEiN%2BVToswHusAAZEYIApLaBDolNR8aTrE0PgshdO%2FBt7MyRSGqkVZXUStQiFMe9p5ouID%2FmD%2F%2FpH143U2AL9W2xV2UqsBpBNIYKPDiH7z33gGUKexEaFDOvANNuyjQOxURTg88S&X-Amz-Signature=80448ad198b8d5d0ed344db3904ea521411139b028469bfe14469c76a159808f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NC6NXMV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBK6kFtf%2BEAm5BxcBp%2F7M6eyGXKpp9fm4y6RI8u8aGR0AiEA86lLO7hGWviadxDzF5JKv2w29fbHCU%2FuBd9iAxdM35kq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDN6IYktMxn4ptjjdQircA%2Bb6LXNfVwS9A7%2BSRzjfnxk5Ae1P1dDEDWC032I1MwPY3ekV1PB3UlZCr23kih%2B6CAJQtSFIPthhX%2BAey9caGTaZLG4%2B5VJNsI2ZRDMgTmSvCorvaZlQpWHmg5Dyn0YRqaokUvXMCmElx3265WGVB%2F5KleBZ7OHwgbV7ruYeQ8jZjyozPjW%2BZGoaEeFTpzNZ41%2BgzGpGHdpJMPrzOTpzpD2LYoHk%2BOb8cgE3GMsfrx3Nn6zV%2BT7Vavoa0UQav%2F6cR3d%2Fh47t3VzNh6E8PTgZ0%2FgfdwXv1Ok%2BP3iMBbDodG51Dig1oMyAKBRNmXDqTOQcUv6sFmzENiqgDxArrjnBY0uvUOK%2FRkn4yB5hUfGAcs7%2BqgfFC1n9MpYQit1JbAbCPlRanyMoxsqPp8j%2Fgoz2XQF7O0VEKcm6I2FEe3fm79CayFucmhUvyuh6BrPX%2FU2QK9RO6lO4H67yAUHMxcchyuQinRcHmEn66kWH90UQYZEc1yK1p1PeOseVFcHttuDnNtHsE46mKZYxeR%2By9Y3WCl3V1CPmVNjhYGHky3qHDT68%2FqVbl5G7GpGoDxQ2%2FmSvco2es1tumqmugyy0UcE%2FTsvRLHAmkWxlMEMggzUmdJPZBoJ3oO1OLtJlknwbMPjQj8QGOqUBaio0rJJ3GVDXqpmCuMJFuT4P6TbBnD8h0xR564TeJ%2F4PDM19QYV4hO8cDFLb%2F%2BeAm0DiIc8y7rfYukAzIt0ZxEiN%2BVToswHusAAZEYIApLaBDolNR8aTrE0PgshdO%2FBt7MyRSGqkVZXUStQiFMe9p5ouID%2FmD%2F%2FpH143U2AL9W2xV2UqsBpBNIYKPDiH7z33gGUKexEaFDOvANNuyjQOxURTg88S&X-Amz-Signature=129c38c45cf41d4f27a8618a67462e381fe3f75b68230e775a67da650782f7cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NC6NXMV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBK6kFtf%2BEAm5BxcBp%2F7M6eyGXKpp9fm4y6RI8u8aGR0AiEA86lLO7hGWviadxDzF5JKv2w29fbHCU%2FuBd9iAxdM35kq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDN6IYktMxn4ptjjdQircA%2Bb6LXNfVwS9A7%2BSRzjfnxk5Ae1P1dDEDWC032I1MwPY3ekV1PB3UlZCr23kih%2B6CAJQtSFIPthhX%2BAey9caGTaZLG4%2B5VJNsI2ZRDMgTmSvCorvaZlQpWHmg5Dyn0YRqaokUvXMCmElx3265WGVB%2F5KleBZ7OHwgbV7ruYeQ8jZjyozPjW%2BZGoaEeFTpzNZ41%2BgzGpGHdpJMPrzOTpzpD2LYoHk%2BOb8cgE3GMsfrx3Nn6zV%2BT7Vavoa0UQav%2F6cR3d%2Fh47t3VzNh6E8PTgZ0%2FgfdwXv1Ok%2BP3iMBbDodG51Dig1oMyAKBRNmXDqTOQcUv6sFmzENiqgDxArrjnBY0uvUOK%2FRkn4yB5hUfGAcs7%2BqgfFC1n9MpYQit1JbAbCPlRanyMoxsqPp8j%2Fgoz2XQF7O0VEKcm6I2FEe3fm79CayFucmhUvyuh6BrPX%2FU2QK9RO6lO4H67yAUHMxcchyuQinRcHmEn66kWH90UQYZEc1yK1p1PeOseVFcHttuDnNtHsE46mKZYxeR%2By9Y3WCl3V1CPmVNjhYGHky3qHDT68%2FqVbl5G7GpGoDxQ2%2FmSvco2es1tumqmugyy0UcE%2FTsvRLHAmkWxlMEMggzUmdJPZBoJ3oO1OLtJlknwbMPjQj8QGOqUBaio0rJJ3GVDXqpmCuMJFuT4P6TbBnD8h0xR564TeJ%2F4PDM19QYV4hO8cDFLb%2F%2BeAm0DiIc8y7rfYukAzIt0ZxEiN%2BVToswHusAAZEYIApLaBDolNR8aTrE0PgshdO%2FBt7MyRSGqkVZXUStQiFMe9p5ouID%2FmD%2F%2FpH143U2AL9W2xV2UqsBpBNIYKPDiH7z33gGUKexEaFDOvANNuyjQOxURTg88S&X-Amz-Signature=70ecd5ea9a4115ff86fd4ed3f6ef53e949dc35bd6f3a3e2c9be0637c96e53585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NC6NXMV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBK6kFtf%2BEAm5BxcBp%2F7M6eyGXKpp9fm4y6RI8u8aGR0AiEA86lLO7hGWviadxDzF5JKv2w29fbHCU%2FuBd9iAxdM35kq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDN6IYktMxn4ptjjdQircA%2Bb6LXNfVwS9A7%2BSRzjfnxk5Ae1P1dDEDWC032I1MwPY3ekV1PB3UlZCr23kih%2B6CAJQtSFIPthhX%2BAey9caGTaZLG4%2B5VJNsI2ZRDMgTmSvCorvaZlQpWHmg5Dyn0YRqaokUvXMCmElx3265WGVB%2F5KleBZ7OHwgbV7ruYeQ8jZjyozPjW%2BZGoaEeFTpzNZ41%2BgzGpGHdpJMPrzOTpzpD2LYoHk%2BOb8cgE3GMsfrx3Nn6zV%2BT7Vavoa0UQav%2F6cR3d%2Fh47t3VzNh6E8PTgZ0%2FgfdwXv1Ok%2BP3iMBbDodG51Dig1oMyAKBRNmXDqTOQcUv6sFmzENiqgDxArrjnBY0uvUOK%2FRkn4yB5hUfGAcs7%2BqgfFC1n9MpYQit1JbAbCPlRanyMoxsqPp8j%2Fgoz2XQF7O0VEKcm6I2FEe3fm79CayFucmhUvyuh6BrPX%2FU2QK9RO6lO4H67yAUHMxcchyuQinRcHmEn66kWH90UQYZEc1yK1p1PeOseVFcHttuDnNtHsE46mKZYxeR%2By9Y3WCl3V1CPmVNjhYGHky3qHDT68%2FqVbl5G7GpGoDxQ2%2FmSvco2es1tumqmugyy0UcE%2FTsvRLHAmkWxlMEMggzUmdJPZBoJ3oO1OLtJlknwbMPjQj8QGOqUBaio0rJJ3GVDXqpmCuMJFuT4P6TbBnD8h0xR564TeJ%2F4PDM19QYV4hO8cDFLb%2F%2BeAm0DiIc8y7rfYukAzIt0ZxEiN%2BVToswHusAAZEYIApLaBDolNR8aTrE0PgshdO%2FBt7MyRSGqkVZXUStQiFMe9p5ouID%2FmD%2F%2FpH143U2AL9W2xV2UqsBpBNIYKPDiH7z33gGUKexEaFDOvANNuyjQOxURTg88S&X-Amz-Signature=263dc6525afb82c8e122a7d8f42ad99aeb47b1a10094c1863c8c3dc71e57212c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NC6NXMV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBK6kFtf%2BEAm5BxcBp%2F7M6eyGXKpp9fm4y6RI8u8aGR0AiEA86lLO7hGWviadxDzF5JKv2w29fbHCU%2FuBd9iAxdM35kq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDN6IYktMxn4ptjjdQircA%2Bb6LXNfVwS9A7%2BSRzjfnxk5Ae1P1dDEDWC032I1MwPY3ekV1PB3UlZCr23kih%2B6CAJQtSFIPthhX%2BAey9caGTaZLG4%2B5VJNsI2ZRDMgTmSvCorvaZlQpWHmg5Dyn0YRqaokUvXMCmElx3265WGVB%2F5KleBZ7OHwgbV7ruYeQ8jZjyozPjW%2BZGoaEeFTpzNZ41%2BgzGpGHdpJMPrzOTpzpD2LYoHk%2BOb8cgE3GMsfrx3Nn6zV%2BT7Vavoa0UQav%2F6cR3d%2Fh47t3VzNh6E8PTgZ0%2FgfdwXv1Ok%2BP3iMBbDodG51Dig1oMyAKBRNmXDqTOQcUv6sFmzENiqgDxArrjnBY0uvUOK%2FRkn4yB5hUfGAcs7%2BqgfFC1n9MpYQit1JbAbCPlRanyMoxsqPp8j%2Fgoz2XQF7O0VEKcm6I2FEe3fm79CayFucmhUvyuh6BrPX%2FU2QK9RO6lO4H67yAUHMxcchyuQinRcHmEn66kWH90UQYZEc1yK1p1PeOseVFcHttuDnNtHsE46mKZYxeR%2By9Y3WCl3V1CPmVNjhYGHky3qHDT68%2FqVbl5G7GpGoDxQ2%2FmSvco2es1tumqmugyy0UcE%2FTsvRLHAmkWxlMEMggzUmdJPZBoJ3oO1OLtJlknwbMPjQj8QGOqUBaio0rJJ3GVDXqpmCuMJFuT4P6TbBnD8h0xR564TeJ%2F4PDM19QYV4hO8cDFLb%2F%2BeAm0DiIc8y7rfYukAzIt0ZxEiN%2BVToswHusAAZEYIApLaBDolNR8aTrE0PgshdO%2FBt7MyRSGqkVZXUStQiFMe9p5ouID%2FmD%2F%2FpH143U2AL9W2xV2UqsBpBNIYKPDiH7z33gGUKexEaFDOvANNuyjQOxURTg88S&X-Amz-Signature=c9fd158b6bee25c7d89cdfcaf32446a15e215637cc911908f8e19f92b066b49d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
