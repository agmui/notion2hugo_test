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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636AGOBTM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYLYCJwwqvj4xW%2FegaqlHJ0M4NkQbxHIaLfWVY9MpYvAiEAjZOq0NhHBoJaeYckV8QDeg7qNh218v1QxSJYXUbLfKYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDExGnUyBW1n1OCyheyrcAysiEfwBjdOvboYLmuMAKt%2Bmza5Ck67igVYOD4F%2FMUCjfnf2kRq5Y9BmwHzCXdQBafEphc%2B081TBIJ9y54cKLL86uuv4SQeiJkVm%2BMZGd7ZWxdE0klM45I0FEGFc6eWzVrCZ%2BBA3vJMDNOhv2boolt%2FTgizkLr5waUFqmlC53%2BbJy51uCEvPSlVkbHb2MfZ%2FRAwIqNkpb5A4IR6to1IFvLKvsSzLesVukMPpaQF0x6B5aHw44EQdUWamfRN22t5W%2B4yZ9H563LLCZO%2BrCO6kmafQ%2FrunCDJ56GW%2FDdcqN9gV2CGtW%2F9iLPRTHiP73WWQmI4Dm5%2BMoWw%2BZucmzU5if3s36FQTskY6PPX67x7TDTK33sK67BkIFQXjNAkucbdSX%2BuWMtKosVAQGxPwJW%2F%2Fqxs%2F2G7V1UsDR8PkR1k7tfR5MWb20RytKYJs2cL818PDAPsQ%2FC9RSXQfsB%2FSX5Gnoj1hvjbgr2eOSJd4VY4Cz6u0YzO2bYW5JRvAH4yxQKkmo%2BBNH0xZAOwWOnGLwdiJZhXS%2BrBXlbQtuI23xH3KxbG8Hq%2BhguehnYzrfdbKJ4o04wCo6YLZKN8EYacexeaQPDfC5i5bcuYInP5L89PalWK7lFSuLQYsSvpQ1aN7MKXG%2F78GOqUBwOLVtaZhtBYSE9JGtM0IVD7R6IZTUHlCOu6NFiEmYcAVb9s4bpRy9usrvpuRs4rkxGLJT1cDYPPEH%2FpBR%2F8A3d78QL%2B9r8N%2F8VNrfaizRI84msozacNpVfRw0AW1DkCtdMr%2FQnLprKLobTl63yAe7euJJ%2FcqaoA17nWNqNw%2FaU54ceV31jhmj6Dxq%2Bzx9dfmmQ%2FBxiZ0rfn4lvQBME2P%2BQoZ25DK&X-Amz-Signature=cb2a8a8d3b93cb087c0519c9dd1b6f56587d67eff85656c2414c4cd4dce14eaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636AGOBTM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYLYCJwwqvj4xW%2FegaqlHJ0M4NkQbxHIaLfWVY9MpYvAiEAjZOq0NhHBoJaeYckV8QDeg7qNh218v1QxSJYXUbLfKYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDExGnUyBW1n1OCyheyrcAysiEfwBjdOvboYLmuMAKt%2Bmza5Ck67igVYOD4F%2FMUCjfnf2kRq5Y9BmwHzCXdQBafEphc%2B081TBIJ9y54cKLL86uuv4SQeiJkVm%2BMZGd7ZWxdE0klM45I0FEGFc6eWzVrCZ%2BBA3vJMDNOhv2boolt%2FTgizkLr5waUFqmlC53%2BbJy51uCEvPSlVkbHb2MfZ%2FRAwIqNkpb5A4IR6to1IFvLKvsSzLesVukMPpaQF0x6B5aHw44EQdUWamfRN22t5W%2B4yZ9H563LLCZO%2BrCO6kmafQ%2FrunCDJ56GW%2FDdcqN9gV2CGtW%2F9iLPRTHiP73WWQmI4Dm5%2BMoWw%2BZucmzU5if3s36FQTskY6PPX67x7TDTK33sK67BkIFQXjNAkucbdSX%2BuWMtKosVAQGxPwJW%2F%2Fqxs%2F2G7V1UsDR8PkR1k7tfR5MWb20RytKYJs2cL818PDAPsQ%2FC9RSXQfsB%2FSX5Gnoj1hvjbgr2eOSJd4VY4Cz6u0YzO2bYW5JRvAH4yxQKkmo%2BBNH0xZAOwWOnGLwdiJZhXS%2BrBXlbQtuI23xH3KxbG8Hq%2BhguehnYzrfdbKJ4o04wCo6YLZKN8EYacexeaQPDfC5i5bcuYInP5L89PalWK7lFSuLQYsSvpQ1aN7MKXG%2F78GOqUBwOLVtaZhtBYSE9JGtM0IVD7R6IZTUHlCOu6NFiEmYcAVb9s4bpRy9usrvpuRs4rkxGLJT1cDYPPEH%2FpBR%2F8A3d78QL%2B9r8N%2F8VNrfaizRI84msozacNpVfRw0AW1DkCtdMr%2FQnLprKLobTl63yAe7euJJ%2FcqaoA17nWNqNw%2FaU54ceV31jhmj6Dxq%2Bzx9dfmmQ%2FBxiZ0rfn4lvQBME2P%2BQoZ25DK&X-Amz-Signature=f1e571b29c6ff0f3f58a7b7b94ebd6730f62b833b2c9f83c2b5e995e4f432ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636AGOBTM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYLYCJwwqvj4xW%2FegaqlHJ0M4NkQbxHIaLfWVY9MpYvAiEAjZOq0NhHBoJaeYckV8QDeg7qNh218v1QxSJYXUbLfKYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDExGnUyBW1n1OCyheyrcAysiEfwBjdOvboYLmuMAKt%2Bmza5Ck67igVYOD4F%2FMUCjfnf2kRq5Y9BmwHzCXdQBafEphc%2B081TBIJ9y54cKLL86uuv4SQeiJkVm%2BMZGd7ZWxdE0klM45I0FEGFc6eWzVrCZ%2BBA3vJMDNOhv2boolt%2FTgizkLr5waUFqmlC53%2BbJy51uCEvPSlVkbHb2MfZ%2FRAwIqNkpb5A4IR6to1IFvLKvsSzLesVukMPpaQF0x6B5aHw44EQdUWamfRN22t5W%2B4yZ9H563LLCZO%2BrCO6kmafQ%2FrunCDJ56GW%2FDdcqN9gV2CGtW%2F9iLPRTHiP73WWQmI4Dm5%2BMoWw%2BZucmzU5if3s36FQTskY6PPX67x7TDTK33sK67BkIFQXjNAkucbdSX%2BuWMtKosVAQGxPwJW%2F%2Fqxs%2F2G7V1UsDR8PkR1k7tfR5MWb20RytKYJs2cL818PDAPsQ%2FC9RSXQfsB%2FSX5Gnoj1hvjbgr2eOSJd4VY4Cz6u0YzO2bYW5JRvAH4yxQKkmo%2BBNH0xZAOwWOnGLwdiJZhXS%2BrBXlbQtuI23xH3KxbG8Hq%2BhguehnYzrfdbKJ4o04wCo6YLZKN8EYacexeaQPDfC5i5bcuYInP5L89PalWK7lFSuLQYsSvpQ1aN7MKXG%2F78GOqUBwOLVtaZhtBYSE9JGtM0IVD7R6IZTUHlCOu6NFiEmYcAVb9s4bpRy9usrvpuRs4rkxGLJT1cDYPPEH%2FpBR%2F8A3d78QL%2B9r8N%2F8VNrfaizRI84msozacNpVfRw0AW1DkCtdMr%2FQnLprKLobTl63yAe7euJJ%2FcqaoA17nWNqNw%2FaU54ceV31jhmj6Dxq%2Bzx9dfmmQ%2FBxiZ0rfn4lvQBME2P%2BQoZ25DK&X-Amz-Signature=25ba6c6a29aaf94b98815187a69594f5991dec43416b474fca9d1a67120b3d07&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636AGOBTM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYLYCJwwqvj4xW%2FegaqlHJ0M4NkQbxHIaLfWVY9MpYvAiEAjZOq0NhHBoJaeYckV8QDeg7qNh218v1QxSJYXUbLfKYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDExGnUyBW1n1OCyheyrcAysiEfwBjdOvboYLmuMAKt%2Bmza5Ck67igVYOD4F%2FMUCjfnf2kRq5Y9BmwHzCXdQBafEphc%2B081TBIJ9y54cKLL86uuv4SQeiJkVm%2BMZGd7ZWxdE0klM45I0FEGFc6eWzVrCZ%2BBA3vJMDNOhv2boolt%2FTgizkLr5waUFqmlC53%2BbJy51uCEvPSlVkbHb2MfZ%2FRAwIqNkpb5A4IR6to1IFvLKvsSzLesVukMPpaQF0x6B5aHw44EQdUWamfRN22t5W%2B4yZ9H563LLCZO%2BrCO6kmafQ%2FrunCDJ56GW%2FDdcqN9gV2CGtW%2F9iLPRTHiP73WWQmI4Dm5%2BMoWw%2BZucmzU5if3s36FQTskY6PPX67x7TDTK33sK67BkIFQXjNAkucbdSX%2BuWMtKosVAQGxPwJW%2F%2Fqxs%2F2G7V1UsDR8PkR1k7tfR5MWb20RytKYJs2cL818PDAPsQ%2FC9RSXQfsB%2FSX5Gnoj1hvjbgr2eOSJd4VY4Cz6u0YzO2bYW5JRvAH4yxQKkmo%2BBNH0xZAOwWOnGLwdiJZhXS%2BrBXlbQtuI23xH3KxbG8Hq%2BhguehnYzrfdbKJ4o04wCo6YLZKN8EYacexeaQPDfC5i5bcuYInP5L89PalWK7lFSuLQYsSvpQ1aN7MKXG%2F78GOqUBwOLVtaZhtBYSE9JGtM0IVD7R6IZTUHlCOu6NFiEmYcAVb9s4bpRy9usrvpuRs4rkxGLJT1cDYPPEH%2FpBR%2F8A3d78QL%2B9r8N%2F8VNrfaizRI84msozacNpVfRw0AW1DkCtdMr%2FQnLprKLobTl63yAe7euJJ%2FcqaoA17nWNqNw%2FaU54ceV31jhmj6Dxq%2Bzx9dfmmQ%2FBxiZ0rfn4lvQBME2P%2BQoZ25DK&X-Amz-Signature=26f3d83a41ab9d5185c25b6c089ad252f169fd72d2291e9f4c80b2a5314b98d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636AGOBTM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYLYCJwwqvj4xW%2FegaqlHJ0M4NkQbxHIaLfWVY9MpYvAiEAjZOq0NhHBoJaeYckV8QDeg7qNh218v1QxSJYXUbLfKYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDExGnUyBW1n1OCyheyrcAysiEfwBjdOvboYLmuMAKt%2Bmza5Ck67igVYOD4F%2FMUCjfnf2kRq5Y9BmwHzCXdQBafEphc%2B081TBIJ9y54cKLL86uuv4SQeiJkVm%2BMZGd7ZWxdE0klM45I0FEGFc6eWzVrCZ%2BBA3vJMDNOhv2boolt%2FTgizkLr5waUFqmlC53%2BbJy51uCEvPSlVkbHb2MfZ%2FRAwIqNkpb5A4IR6to1IFvLKvsSzLesVukMPpaQF0x6B5aHw44EQdUWamfRN22t5W%2B4yZ9H563LLCZO%2BrCO6kmafQ%2FrunCDJ56GW%2FDdcqN9gV2CGtW%2F9iLPRTHiP73WWQmI4Dm5%2BMoWw%2BZucmzU5if3s36FQTskY6PPX67x7TDTK33sK67BkIFQXjNAkucbdSX%2BuWMtKosVAQGxPwJW%2F%2Fqxs%2F2G7V1UsDR8PkR1k7tfR5MWb20RytKYJs2cL818PDAPsQ%2FC9RSXQfsB%2FSX5Gnoj1hvjbgr2eOSJd4VY4Cz6u0YzO2bYW5JRvAH4yxQKkmo%2BBNH0xZAOwWOnGLwdiJZhXS%2BrBXlbQtuI23xH3KxbG8Hq%2BhguehnYzrfdbKJ4o04wCo6YLZKN8EYacexeaQPDfC5i5bcuYInP5L89PalWK7lFSuLQYsSvpQ1aN7MKXG%2F78GOqUBwOLVtaZhtBYSE9JGtM0IVD7R6IZTUHlCOu6NFiEmYcAVb9s4bpRy9usrvpuRs4rkxGLJT1cDYPPEH%2FpBR%2F8A3d78QL%2B9r8N%2F8VNrfaizRI84msozacNpVfRw0AW1DkCtdMr%2FQnLprKLobTl63yAe7euJJ%2FcqaoA17nWNqNw%2FaU54ceV31jhmj6Dxq%2Bzx9dfmmQ%2FBxiZ0rfn4lvQBME2P%2BQoZ25DK&X-Amz-Signature=3c79046d40f76cc543e5639e0e53054ad67fa0f4b0ccf283445a6e44ca893ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
