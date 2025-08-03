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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKOYBFX2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzoKUHK71rQ%2BpgCt3whh2%2BtcGrddcQRtPugSF62gau8gIhAJkbUbRF8DJvhfcTbeNnnfZWurtjL01P%2FxPKGwBWEepOKv8DCDIQABoMNjM3NDIzMTgzODA1IgxYx%2FBiRZRbvzy%2BNZcq3APfuOnaIh5voIb3KxML5hp1un06%2FEluKdBPmWPRrcsWKptrYusUuQP6JamTyqDoT8IbC7K7WlqKpnZjw%2FHCIfJeW202a5AiWMg0A1zy4efnh7d2RSdApSIqlUxOmRLgQbCO7n516hb5H%2BMipHJeJksaEg1mziYN3YjWHBm4%2B7%2BFRfDRMz0ItKogzU%2BVmKHIYAoLti5XlmBzadoGGi8BZ0MK526d86D7wGT0zyWxv9OgkhayS8IrMsDGhm63oATc6zeSmUGF64zQKbPMebXAhB79OGZwj8myTVSJuCrEuWxXX%2FR6T2lp8LS3FX3Fz3IdZst1K6YwTWdKBhhIkjjPTLdlCzbL3TmuuTK%2ByLj5LWKggX9%2FkCmw39nn%2BdIxCC1OCJDtz5ux7Kq1edoV%2FjI%2BTeeenOZbAOvBQLpfImbT%2F0n7bE3dESe6iv%2B0IDZ0fwLhvdJj1itok%2Bt9qOwJo6xmcuGKHFwmqFIA%2FBkieF4h4pLAYCbZnMlGck5S9D4DDFZojCpiv0rRTJHmtgtTq2CKQ393wmbzR1n5FlN9B6Vkg9p6F3PKWtGRq5AXlzAV9w6cUpuMA0QJ426kj6sl4lbE4VElgfsOYIAGYm9vywBeALFEFzNcTdlszRaAy%2BuCKDCSq77EBjqkAeBQ087OJcz5aXwA8Q%2BNZOzwg3Ew5oxI0FqFZfwNo2nI8WXBdncxd4UCOcKMDe%2BSf4zeGjiHHRCWxjjnUb8y7rKBOpYurP7s9EhCJXV5uoA%2FjzM7dQ38%2FHAsBpk5oup5GA7ZE%2B8jnSpjIjeVMGOBvIYRQ9XHiaHvWrJdJTZotZlWDQzOcg79kTjToPvrKs7VNJRuloVut%2Fpv0z2cqzGuEOxyNfBs&X-Amz-Signature=28a3314d06f53cf535b705ba87b381fd8b6f26e7f6fa99bb72419f37a0599ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKOYBFX2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzoKUHK71rQ%2BpgCt3whh2%2BtcGrddcQRtPugSF62gau8gIhAJkbUbRF8DJvhfcTbeNnnfZWurtjL01P%2FxPKGwBWEepOKv8DCDIQABoMNjM3NDIzMTgzODA1IgxYx%2FBiRZRbvzy%2BNZcq3APfuOnaIh5voIb3KxML5hp1un06%2FEluKdBPmWPRrcsWKptrYusUuQP6JamTyqDoT8IbC7K7WlqKpnZjw%2FHCIfJeW202a5AiWMg0A1zy4efnh7d2RSdApSIqlUxOmRLgQbCO7n516hb5H%2BMipHJeJksaEg1mziYN3YjWHBm4%2B7%2BFRfDRMz0ItKogzU%2BVmKHIYAoLti5XlmBzadoGGi8BZ0MK526d86D7wGT0zyWxv9OgkhayS8IrMsDGhm63oATc6zeSmUGF64zQKbPMebXAhB79OGZwj8myTVSJuCrEuWxXX%2FR6T2lp8LS3FX3Fz3IdZst1K6YwTWdKBhhIkjjPTLdlCzbL3TmuuTK%2ByLj5LWKggX9%2FkCmw39nn%2BdIxCC1OCJDtz5ux7Kq1edoV%2FjI%2BTeeenOZbAOvBQLpfImbT%2F0n7bE3dESe6iv%2B0IDZ0fwLhvdJj1itok%2Bt9qOwJo6xmcuGKHFwmqFIA%2FBkieF4h4pLAYCbZnMlGck5S9D4DDFZojCpiv0rRTJHmtgtTq2CKQ393wmbzR1n5FlN9B6Vkg9p6F3PKWtGRq5AXlzAV9w6cUpuMA0QJ426kj6sl4lbE4VElgfsOYIAGYm9vywBeALFEFzNcTdlszRaAy%2BuCKDCSq77EBjqkAeBQ087OJcz5aXwA8Q%2BNZOzwg3Ew5oxI0FqFZfwNo2nI8WXBdncxd4UCOcKMDe%2BSf4zeGjiHHRCWxjjnUb8y7rKBOpYurP7s9EhCJXV5uoA%2FjzM7dQ38%2FHAsBpk5oup5GA7ZE%2B8jnSpjIjeVMGOBvIYRQ9XHiaHvWrJdJTZotZlWDQzOcg79kTjToPvrKs7VNJRuloVut%2Fpv0z2cqzGuEOxyNfBs&X-Amz-Signature=f4e39c207c18af17b448691b706b0c236f018355d0cfef46b66d1f3792c35235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKOYBFX2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzoKUHK71rQ%2BpgCt3whh2%2BtcGrddcQRtPugSF62gau8gIhAJkbUbRF8DJvhfcTbeNnnfZWurtjL01P%2FxPKGwBWEepOKv8DCDIQABoMNjM3NDIzMTgzODA1IgxYx%2FBiRZRbvzy%2BNZcq3APfuOnaIh5voIb3KxML5hp1un06%2FEluKdBPmWPRrcsWKptrYusUuQP6JamTyqDoT8IbC7K7WlqKpnZjw%2FHCIfJeW202a5AiWMg0A1zy4efnh7d2RSdApSIqlUxOmRLgQbCO7n516hb5H%2BMipHJeJksaEg1mziYN3YjWHBm4%2B7%2BFRfDRMz0ItKogzU%2BVmKHIYAoLti5XlmBzadoGGi8BZ0MK526d86D7wGT0zyWxv9OgkhayS8IrMsDGhm63oATc6zeSmUGF64zQKbPMebXAhB79OGZwj8myTVSJuCrEuWxXX%2FR6T2lp8LS3FX3Fz3IdZst1K6YwTWdKBhhIkjjPTLdlCzbL3TmuuTK%2ByLj5LWKggX9%2FkCmw39nn%2BdIxCC1OCJDtz5ux7Kq1edoV%2FjI%2BTeeenOZbAOvBQLpfImbT%2F0n7bE3dESe6iv%2B0IDZ0fwLhvdJj1itok%2Bt9qOwJo6xmcuGKHFwmqFIA%2FBkieF4h4pLAYCbZnMlGck5S9D4DDFZojCpiv0rRTJHmtgtTq2CKQ393wmbzR1n5FlN9B6Vkg9p6F3PKWtGRq5AXlzAV9w6cUpuMA0QJ426kj6sl4lbE4VElgfsOYIAGYm9vywBeALFEFzNcTdlszRaAy%2BuCKDCSq77EBjqkAeBQ087OJcz5aXwA8Q%2BNZOzwg3Ew5oxI0FqFZfwNo2nI8WXBdncxd4UCOcKMDe%2BSf4zeGjiHHRCWxjjnUb8y7rKBOpYurP7s9EhCJXV5uoA%2FjzM7dQ38%2FHAsBpk5oup5GA7ZE%2B8jnSpjIjeVMGOBvIYRQ9XHiaHvWrJdJTZotZlWDQzOcg79kTjToPvrKs7VNJRuloVut%2Fpv0z2cqzGuEOxyNfBs&X-Amz-Signature=e185b870033f05561b40e712cc1c0eb03af5c443e94685fa56bbccae4e052003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKOYBFX2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzoKUHK71rQ%2BpgCt3whh2%2BtcGrddcQRtPugSF62gau8gIhAJkbUbRF8DJvhfcTbeNnnfZWurtjL01P%2FxPKGwBWEepOKv8DCDIQABoMNjM3NDIzMTgzODA1IgxYx%2FBiRZRbvzy%2BNZcq3APfuOnaIh5voIb3KxML5hp1un06%2FEluKdBPmWPRrcsWKptrYusUuQP6JamTyqDoT8IbC7K7WlqKpnZjw%2FHCIfJeW202a5AiWMg0A1zy4efnh7d2RSdApSIqlUxOmRLgQbCO7n516hb5H%2BMipHJeJksaEg1mziYN3YjWHBm4%2B7%2BFRfDRMz0ItKogzU%2BVmKHIYAoLti5XlmBzadoGGi8BZ0MK526d86D7wGT0zyWxv9OgkhayS8IrMsDGhm63oATc6zeSmUGF64zQKbPMebXAhB79OGZwj8myTVSJuCrEuWxXX%2FR6T2lp8LS3FX3Fz3IdZst1K6YwTWdKBhhIkjjPTLdlCzbL3TmuuTK%2ByLj5LWKggX9%2FkCmw39nn%2BdIxCC1OCJDtz5ux7Kq1edoV%2FjI%2BTeeenOZbAOvBQLpfImbT%2F0n7bE3dESe6iv%2B0IDZ0fwLhvdJj1itok%2Bt9qOwJo6xmcuGKHFwmqFIA%2FBkieF4h4pLAYCbZnMlGck5S9D4DDFZojCpiv0rRTJHmtgtTq2CKQ393wmbzR1n5FlN9B6Vkg9p6F3PKWtGRq5AXlzAV9w6cUpuMA0QJ426kj6sl4lbE4VElgfsOYIAGYm9vywBeALFEFzNcTdlszRaAy%2BuCKDCSq77EBjqkAeBQ087OJcz5aXwA8Q%2BNZOzwg3Ew5oxI0FqFZfwNo2nI8WXBdncxd4UCOcKMDe%2BSf4zeGjiHHRCWxjjnUb8y7rKBOpYurP7s9EhCJXV5uoA%2FjzM7dQ38%2FHAsBpk5oup5GA7ZE%2B8jnSpjIjeVMGOBvIYRQ9XHiaHvWrJdJTZotZlWDQzOcg79kTjToPvrKs7VNJRuloVut%2Fpv0z2cqzGuEOxyNfBs&X-Amz-Signature=822f84ee885ca02442a8d13ce195ec004652fd3e44744aad110ed711cdcada94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKOYBFX2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzoKUHK71rQ%2BpgCt3whh2%2BtcGrddcQRtPugSF62gau8gIhAJkbUbRF8DJvhfcTbeNnnfZWurtjL01P%2FxPKGwBWEepOKv8DCDIQABoMNjM3NDIzMTgzODA1IgxYx%2FBiRZRbvzy%2BNZcq3APfuOnaIh5voIb3KxML5hp1un06%2FEluKdBPmWPRrcsWKptrYusUuQP6JamTyqDoT8IbC7K7WlqKpnZjw%2FHCIfJeW202a5AiWMg0A1zy4efnh7d2RSdApSIqlUxOmRLgQbCO7n516hb5H%2BMipHJeJksaEg1mziYN3YjWHBm4%2B7%2BFRfDRMz0ItKogzU%2BVmKHIYAoLti5XlmBzadoGGi8BZ0MK526d86D7wGT0zyWxv9OgkhayS8IrMsDGhm63oATc6zeSmUGF64zQKbPMebXAhB79OGZwj8myTVSJuCrEuWxXX%2FR6T2lp8LS3FX3Fz3IdZst1K6YwTWdKBhhIkjjPTLdlCzbL3TmuuTK%2ByLj5LWKggX9%2FkCmw39nn%2BdIxCC1OCJDtz5ux7Kq1edoV%2FjI%2BTeeenOZbAOvBQLpfImbT%2F0n7bE3dESe6iv%2B0IDZ0fwLhvdJj1itok%2Bt9qOwJo6xmcuGKHFwmqFIA%2FBkieF4h4pLAYCbZnMlGck5S9D4DDFZojCpiv0rRTJHmtgtTq2CKQ393wmbzR1n5FlN9B6Vkg9p6F3PKWtGRq5AXlzAV9w6cUpuMA0QJ426kj6sl4lbE4VElgfsOYIAGYm9vywBeALFEFzNcTdlszRaAy%2BuCKDCSq77EBjqkAeBQ087OJcz5aXwA8Q%2BNZOzwg3Ew5oxI0FqFZfwNo2nI8WXBdncxd4UCOcKMDe%2BSf4zeGjiHHRCWxjjnUb8y7rKBOpYurP7s9EhCJXV5uoA%2FjzM7dQ38%2FHAsBpk5oup5GA7ZE%2B8jnSpjIjeVMGOBvIYRQ9XHiaHvWrJdJTZotZlWDQzOcg79kTjToPvrKs7VNJRuloVut%2Fpv0z2cqzGuEOxyNfBs&X-Amz-Signature=57595adc51badc37a96eff8cd9daf6ecf231593fbe795438b9580ab00f8ce1fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
