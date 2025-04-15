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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS2LCSXW%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC34i%2Bot4len4MQlawbMUKR%2FH6A4toiFRItRuF706V7wQIhAL4rlV41oF09ngNGh%2FeooG0HVtBYJKpaFwkGHtNpcxK0Kv8DCCsQABoMNjM3NDIzMTgzODA1IgxV1nQ2hBTNhLn%2Fx4Qq3AMUF6aTQNIsTSX585EiS%2FlFxmLovGUdkOUZCRUlZrmIxd0sHiJzHWJyCBVFut%2FryhRrzF%2B%2FE739tDGP2%2BLZ6YItVLUztlI4B1t0fxkxJHOdCcMdILN7oKePXrDWJ0sFbfg4dUQgDii%2BLfa7M4No%2Fefh8dK5J9I2ASb6bi72bvUZXo5CwmPBepIRGfpaAI53N%2F275DQG4wir1oxo3xr9O%2BTBQKe%2BPhWaaujpTe1TvEtpA%2B2NQEa%2F4t%2BE0Wgc2Dkq2ZWeujU6fDtz%2B8Z34XylCh1c904enqWIo4%2BHcSeTpzW%2BGFXX4Y%2BKfq7%2BsHuzrAM7Dn2sQNMTniUcm0I8wNgPbIVa%2BrRY4qYw%2BdRuY%2FSAoiT21NSHZnLGoICA8cPCy83iS%2FFAixmqDCHd4QhcgZwpPyNOuHoZDtefL6v%2FIx%2BaQoaksbgsyJu%2FWbeqj5S8GVmXeoAuqh%2BDbVGK7OlrNZzlcqgCtLknSVK%2FAaLb3KQkYK85WAMCbB%2F2ThsZx%2FYcdECL951gPkvzyVpWrlWsceVWeq38FlSXDpy6JjV7FaWAL%2FCcYT6Kt4lbB25zXwD8jXoUWpf%2FK8CEHK8y%2F8WxPSwHXiqRWwnw5Bi5z%2BPN0tI7i%2BaotA%2BM1BuFBomeKHE57zDozvi%2FBjqkASfkNIP%2B%2BQStg884Nz%2BX5lJBsqtcP8cpaHUdAAoy8mtzsR9BwJvrQ2IjcMmUjaUxSh%2FIoRGkdvi9thDEtAw3DbttWSVu4KN%2F1NlZBSutYPxKaSm7N4DYud7sRLtOAkDcjG5Mhr0amPTRypCoPDmbc59oFhX6xjouFs%2Bb%2FAbq0IWwErR4kcRHDqSFsBpds08KkOu279vhrx0Ic9O3gRz%2FBQWfr15B&X-Amz-Signature=1949688b1ea4290f1c5d4e17f6d2f58ae62eab6587e1ef2be82e5384fb3ccb91&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS2LCSXW%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC34i%2Bot4len4MQlawbMUKR%2FH6A4toiFRItRuF706V7wQIhAL4rlV41oF09ngNGh%2FeooG0HVtBYJKpaFwkGHtNpcxK0Kv8DCCsQABoMNjM3NDIzMTgzODA1IgxV1nQ2hBTNhLn%2Fx4Qq3AMUF6aTQNIsTSX585EiS%2FlFxmLovGUdkOUZCRUlZrmIxd0sHiJzHWJyCBVFut%2FryhRrzF%2B%2FE739tDGP2%2BLZ6YItVLUztlI4B1t0fxkxJHOdCcMdILN7oKePXrDWJ0sFbfg4dUQgDii%2BLfa7M4No%2Fefh8dK5J9I2ASb6bi72bvUZXo5CwmPBepIRGfpaAI53N%2F275DQG4wir1oxo3xr9O%2BTBQKe%2BPhWaaujpTe1TvEtpA%2B2NQEa%2F4t%2BE0Wgc2Dkq2ZWeujU6fDtz%2B8Z34XylCh1c904enqWIo4%2BHcSeTpzW%2BGFXX4Y%2BKfq7%2BsHuzrAM7Dn2sQNMTniUcm0I8wNgPbIVa%2BrRY4qYw%2BdRuY%2FSAoiT21NSHZnLGoICA8cPCy83iS%2FFAixmqDCHd4QhcgZwpPyNOuHoZDtefL6v%2FIx%2BaQoaksbgsyJu%2FWbeqj5S8GVmXeoAuqh%2BDbVGK7OlrNZzlcqgCtLknSVK%2FAaLb3KQkYK85WAMCbB%2F2ThsZx%2FYcdECL951gPkvzyVpWrlWsceVWeq38FlSXDpy6JjV7FaWAL%2FCcYT6Kt4lbB25zXwD8jXoUWpf%2FK8CEHK8y%2F8WxPSwHXiqRWwnw5Bi5z%2BPN0tI7i%2BaotA%2BM1BuFBomeKHE57zDozvi%2FBjqkASfkNIP%2B%2BQStg884Nz%2BX5lJBsqtcP8cpaHUdAAoy8mtzsR9BwJvrQ2IjcMmUjaUxSh%2FIoRGkdvi9thDEtAw3DbttWSVu4KN%2F1NlZBSutYPxKaSm7N4DYud7sRLtOAkDcjG5Mhr0amPTRypCoPDmbc59oFhX6xjouFs%2Bb%2FAbq0IWwErR4kcRHDqSFsBpds08KkOu279vhrx0Ic9O3gRz%2FBQWfr15B&X-Amz-Signature=2078540ec7cf486439ed230137b285f6127981094ff8ef7b6121d032b12b76fd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS2LCSXW%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC34i%2Bot4len4MQlawbMUKR%2FH6A4toiFRItRuF706V7wQIhAL4rlV41oF09ngNGh%2FeooG0HVtBYJKpaFwkGHtNpcxK0Kv8DCCsQABoMNjM3NDIzMTgzODA1IgxV1nQ2hBTNhLn%2Fx4Qq3AMUF6aTQNIsTSX585EiS%2FlFxmLovGUdkOUZCRUlZrmIxd0sHiJzHWJyCBVFut%2FryhRrzF%2B%2FE739tDGP2%2BLZ6YItVLUztlI4B1t0fxkxJHOdCcMdILN7oKePXrDWJ0sFbfg4dUQgDii%2BLfa7M4No%2Fefh8dK5J9I2ASb6bi72bvUZXo5CwmPBepIRGfpaAI53N%2F275DQG4wir1oxo3xr9O%2BTBQKe%2BPhWaaujpTe1TvEtpA%2B2NQEa%2F4t%2BE0Wgc2Dkq2ZWeujU6fDtz%2B8Z34XylCh1c904enqWIo4%2BHcSeTpzW%2BGFXX4Y%2BKfq7%2BsHuzrAM7Dn2sQNMTniUcm0I8wNgPbIVa%2BrRY4qYw%2BdRuY%2FSAoiT21NSHZnLGoICA8cPCy83iS%2FFAixmqDCHd4QhcgZwpPyNOuHoZDtefL6v%2FIx%2BaQoaksbgsyJu%2FWbeqj5S8GVmXeoAuqh%2BDbVGK7OlrNZzlcqgCtLknSVK%2FAaLb3KQkYK85WAMCbB%2F2ThsZx%2FYcdECL951gPkvzyVpWrlWsceVWeq38FlSXDpy6JjV7FaWAL%2FCcYT6Kt4lbB25zXwD8jXoUWpf%2FK8CEHK8y%2F8WxPSwHXiqRWwnw5Bi5z%2BPN0tI7i%2BaotA%2BM1BuFBomeKHE57zDozvi%2FBjqkASfkNIP%2B%2BQStg884Nz%2BX5lJBsqtcP8cpaHUdAAoy8mtzsR9BwJvrQ2IjcMmUjaUxSh%2FIoRGkdvi9thDEtAw3DbttWSVu4KN%2F1NlZBSutYPxKaSm7N4DYud7sRLtOAkDcjG5Mhr0amPTRypCoPDmbc59oFhX6xjouFs%2Bb%2FAbq0IWwErR4kcRHDqSFsBpds08KkOu279vhrx0Ic9O3gRz%2FBQWfr15B&X-Amz-Signature=64b4c288c08ce0a9181574441180843f29cf3894cdc83bb4e776cf91bf1c6e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS2LCSXW%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC34i%2Bot4len4MQlawbMUKR%2FH6A4toiFRItRuF706V7wQIhAL4rlV41oF09ngNGh%2FeooG0HVtBYJKpaFwkGHtNpcxK0Kv8DCCsQABoMNjM3NDIzMTgzODA1IgxV1nQ2hBTNhLn%2Fx4Qq3AMUF6aTQNIsTSX585EiS%2FlFxmLovGUdkOUZCRUlZrmIxd0sHiJzHWJyCBVFut%2FryhRrzF%2B%2FE739tDGP2%2BLZ6YItVLUztlI4B1t0fxkxJHOdCcMdILN7oKePXrDWJ0sFbfg4dUQgDii%2BLfa7M4No%2Fefh8dK5J9I2ASb6bi72bvUZXo5CwmPBepIRGfpaAI53N%2F275DQG4wir1oxo3xr9O%2BTBQKe%2BPhWaaujpTe1TvEtpA%2B2NQEa%2F4t%2BE0Wgc2Dkq2ZWeujU6fDtz%2B8Z34XylCh1c904enqWIo4%2BHcSeTpzW%2BGFXX4Y%2BKfq7%2BsHuzrAM7Dn2sQNMTniUcm0I8wNgPbIVa%2BrRY4qYw%2BdRuY%2FSAoiT21NSHZnLGoICA8cPCy83iS%2FFAixmqDCHd4QhcgZwpPyNOuHoZDtefL6v%2FIx%2BaQoaksbgsyJu%2FWbeqj5S8GVmXeoAuqh%2BDbVGK7OlrNZzlcqgCtLknSVK%2FAaLb3KQkYK85WAMCbB%2F2ThsZx%2FYcdECL951gPkvzyVpWrlWsceVWeq38FlSXDpy6JjV7FaWAL%2FCcYT6Kt4lbB25zXwD8jXoUWpf%2FK8CEHK8y%2F8WxPSwHXiqRWwnw5Bi5z%2BPN0tI7i%2BaotA%2BM1BuFBomeKHE57zDozvi%2FBjqkASfkNIP%2B%2BQStg884Nz%2BX5lJBsqtcP8cpaHUdAAoy8mtzsR9BwJvrQ2IjcMmUjaUxSh%2FIoRGkdvi9thDEtAw3DbttWSVu4KN%2F1NlZBSutYPxKaSm7N4DYud7sRLtOAkDcjG5Mhr0amPTRypCoPDmbc59oFhX6xjouFs%2Bb%2FAbq0IWwErR4kcRHDqSFsBpds08KkOu279vhrx0Ic9O3gRz%2FBQWfr15B&X-Amz-Signature=f1feb8d65ba6c5e551354c1e37ef007c18fa595417cc65d673d7ea8b004e456e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS2LCSXW%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC34i%2Bot4len4MQlawbMUKR%2FH6A4toiFRItRuF706V7wQIhAL4rlV41oF09ngNGh%2FeooG0HVtBYJKpaFwkGHtNpcxK0Kv8DCCsQABoMNjM3NDIzMTgzODA1IgxV1nQ2hBTNhLn%2Fx4Qq3AMUF6aTQNIsTSX585EiS%2FlFxmLovGUdkOUZCRUlZrmIxd0sHiJzHWJyCBVFut%2FryhRrzF%2B%2FE739tDGP2%2BLZ6YItVLUztlI4B1t0fxkxJHOdCcMdILN7oKePXrDWJ0sFbfg4dUQgDii%2BLfa7M4No%2Fefh8dK5J9I2ASb6bi72bvUZXo5CwmPBepIRGfpaAI53N%2F275DQG4wir1oxo3xr9O%2BTBQKe%2BPhWaaujpTe1TvEtpA%2B2NQEa%2F4t%2BE0Wgc2Dkq2ZWeujU6fDtz%2B8Z34XylCh1c904enqWIo4%2BHcSeTpzW%2BGFXX4Y%2BKfq7%2BsHuzrAM7Dn2sQNMTniUcm0I8wNgPbIVa%2BrRY4qYw%2BdRuY%2FSAoiT21NSHZnLGoICA8cPCy83iS%2FFAixmqDCHd4QhcgZwpPyNOuHoZDtefL6v%2FIx%2BaQoaksbgsyJu%2FWbeqj5S8GVmXeoAuqh%2BDbVGK7OlrNZzlcqgCtLknSVK%2FAaLb3KQkYK85WAMCbB%2F2ThsZx%2FYcdECL951gPkvzyVpWrlWsceVWeq38FlSXDpy6JjV7FaWAL%2FCcYT6Kt4lbB25zXwD8jXoUWpf%2FK8CEHK8y%2F8WxPSwHXiqRWwnw5Bi5z%2BPN0tI7i%2BaotA%2BM1BuFBomeKHE57zDozvi%2FBjqkASfkNIP%2B%2BQStg884Nz%2BX5lJBsqtcP8cpaHUdAAoy8mtzsR9BwJvrQ2IjcMmUjaUxSh%2FIoRGkdvi9thDEtAw3DbttWSVu4KN%2F1NlZBSutYPxKaSm7N4DYud7sRLtOAkDcjG5Mhr0amPTRypCoPDmbc59oFhX6xjouFs%2Bb%2FAbq0IWwErR4kcRHDqSFsBpds08KkOu279vhrx0Ic9O3gRz%2FBQWfr15B&X-Amz-Signature=bd9e364a2d5f5d58dafbabbc7032cb6673ef350c5f55fd77db629bb5a1c843a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
