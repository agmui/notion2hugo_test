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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FGSR2H%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCpCBBkpcJE4pmMTK4EzOQbEibL9p4c27PP7DGKSektOQIhAI0MHUs561bvMHOrPpdTZNlDERzUjyTQ0ECvOUNl3zt3KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwspUcDe7GhXa2%2Fg2cq3AO3p4wiU61y2KCbXx2i3TuhYpyu06NB1w6lY1wQqVHR3UIYB3pT4cj7d0zDbRriqjNAfaZznewl%2FdJ0nadMJ70P%2B6uvtZ6tbCwjQtIx8ca5PSYnVbOBt1fj4LUMfhwW%2F2H3N%2FvX4Nbf3moTaIczeBoQWfhWeuUDKnWYJyyiqKDmRxsaBb69Cc6pqJ1tL1yu5sw9QHtrz4W70yjthZYjeoX%2BJnbHybDCl18xY%2BL3JC8YAyjd0dwAzWtDEJRBbmIIXzUVt0sTHrafOm4rnwwRusHgmrH6D2z60vxB87BKrAn36E1RFr6IqABWjK6q2uEXPFyQBBx9cpTYJQE%2B5FQkXhF4X4RFjANeVFrhgeDx%2BAFaJJ%2BOvMXnJzgH7M8vIzlLSamrL3tlHQ%2F%2F%2BXtalsSN%2F2RLtjRNZczuaY76v%2BDG14EQf8Dp1beonkxDAOnIHaNNoBVeGfsVySFcmqX5yr4dX9se%2FVm4BZrMK8rXD2HLbsiTYQSlKamTh45BHov0EeKWdbsqR2kgX7WzJ%2F1FV3aBMK0M42F8DMafihofe30rKCKdIpFo2gFh48CiXuT6zt9XLwtGCrHOF%2Bhp2y20pcoT0ys4Zt4jYelVQ82aZFkTR%2Bjzdv%2BRN1lf4BE0UurzrTD0w4DTBjqkAW175%2BnENEc4n96PwB0y1ZhJQosFQc0gymh96PXr4Hj3SAPBhYN7yCcL1gd2%2FSNGOuIF20%2FKmwAMQnu07tD6QbI2wHDYweprm%2FR4p6C9aHvtrrZU57SkhV6tRAcL7vdPK%2FPb13vsHXPjKzFDxMeLQuoBlk8%2BmxNeVcl24i9qB5fxs%2F29LSi27wkB%2F1XPWj76m%2FvESxuWR63OEhyRHnDsm33eD2TP&X-Amz-Signature=9517fa20210b740143a37ddf00ebeef998c06f0f8fe49055e53a5f7aaa736001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FGSR2H%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCpCBBkpcJE4pmMTK4EzOQbEibL9p4c27PP7DGKSektOQIhAI0MHUs561bvMHOrPpdTZNlDERzUjyTQ0ECvOUNl3zt3KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwspUcDe7GhXa2%2Fg2cq3AO3p4wiU61y2KCbXx2i3TuhYpyu06NB1w6lY1wQqVHR3UIYB3pT4cj7d0zDbRriqjNAfaZznewl%2FdJ0nadMJ70P%2B6uvtZ6tbCwjQtIx8ca5PSYnVbOBt1fj4LUMfhwW%2F2H3N%2FvX4Nbf3moTaIczeBoQWfhWeuUDKnWYJyyiqKDmRxsaBb69Cc6pqJ1tL1yu5sw9QHtrz4W70yjthZYjeoX%2BJnbHybDCl18xY%2BL3JC8YAyjd0dwAzWtDEJRBbmIIXzUVt0sTHrafOm4rnwwRusHgmrH6D2z60vxB87BKrAn36E1RFr6IqABWjK6q2uEXPFyQBBx9cpTYJQE%2B5FQkXhF4X4RFjANeVFrhgeDx%2BAFaJJ%2BOvMXnJzgH7M8vIzlLSamrL3tlHQ%2F%2F%2BXtalsSN%2F2RLtjRNZczuaY76v%2BDG14EQf8Dp1beonkxDAOnIHaNNoBVeGfsVySFcmqX5yr4dX9se%2FVm4BZrMK8rXD2HLbsiTYQSlKamTh45BHov0EeKWdbsqR2kgX7WzJ%2F1FV3aBMK0M42F8DMafihofe30rKCKdIpFo2gFh48CiXuT6zt9XLwtGCrHOF%2Bhp2y20pcoT0ys4Zt4jYelVQ82aZFkTR%2Bjzdv%2BRN1lf4BE0UurzrTD0w4DTBjqkAW175%2BnENEc4n96PwB0y1ZhJQosFQc0gymh96PXr4Hj3SAPBhYN7yCcL1gd2%2FSNGOuIF20%2FKmwAMQnu07tD6QbI2wHDYweprm%2FR4p6C9aHvtrrZU57SkhV6tRAcL7vdPK%2FPb13vsHXPjKzFDxMeLQuoBlk8%2BmxNeVcl24i9qB5fxs%2F29LSi27wkB%2F1XPWj76m%2FvESxuWR63OEhyRHnDsm33eD2TP&X-Amz-Signature=2efdae072e0ffc1f910b0944355fa345a2d1c68f41ae3f46f0b3cd1cc58f63c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FGSR2H%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCpCBBkpcJE4pmMTK4EzOQbEibL9p4c27PP7DGKSektOQIhAI0MHUs561bvMHOrPpdTZNlDERzUjyTQ0ECvOUNl3zt3KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwspUcDe7GhXa2%2Fg2cq3AO3p4wiU61y2KCbXx2i3TuhYpyu06NB1w6lY1wQqVHR3UIYB3pT4cj7d0zDbRriqjNAfaZznewl%2FdJ0nadMJ70P%2B6uvtZ6tbCwjQtIx8ca5PSYnVbOBt1fj4LUMfhwW%2F2H3N%2FvX4Nbf3moTaIczeBoQWfhWeuUDKnWYJyyiqKDmRxsaBb69Cc6pqJ1tL1yu5sw9QHtrz4W70yjthZYjeoX%2BJnbHybDCl18xY%2BL3JC8YAyjd0dwAzWtDEJRBbmIIXzUVt0sTHrafOm4rnwwRusHgmrH6D2z60vxB87BKrAn36E1RFr6IqABWjK6q2uEXPFyQBBx9cpTYJQE%2B5FQkXhF4X4RFjANeVFrhgeDx%2BAFaJJ%2BOvMXnJzgH7M8vIzlLSamrL3tlHQ%2F%2F%2BXtalsSN%2F2RLtjRNZczuaY76v%2BDG14EQf8Dp1beonkxDAOnIHaNNoBVeGfsVySFcmqX5yr4dX9se%2FVm4BZrMK8rXD2HLbsiTYQSlKamTh45BHov0EeKWdbsqR2kgX7WzJ%2F1FV3aBMK0M42F8DMafihofe30rKCKdIpFo2gFh48CiXuT6zt9XLwtGCrHOF%2Bhp2y20pcoT0ys4Zt4jYelVQ82aZFkTR%2Bjzdv%2BRN1lf4BE0UurzrTD0w4DTBjqkAW175%2BnENEc4n96PwB0y1ZhJQosFQc0gymh96PXr4Hj3SAPBhYN7yCcL1gd2%2FSNGOuIF20%2FKmwAMQnu07tD6QbI2wHDYweprm%2FR4p6C9aHvtrrZU57SkhV6tRAcL7vdPK%2FPb13vsHXPjKzFDxMeLQuoBlk8%2BmxNeVcl24i9qB5fxs%2F29LSi27wkB%2F1XPWj76m%2FvESxuWR63OEhyRHnDsm33eD2TP&X-Amz-Signature=a43c4c3437f7e4fe489b112948735f50a45e9806c537b892498552c9e86e45c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FGSR2H%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCpCBBkpcJE4pmMTK4EzOQbEibL9p4c27PP7DGKSektOQIhAI0MHUs561bvMHOrPpdTZNlDERzUjyTQ0ECvOUNl3zt3KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwspUcDe7GhXa2%2Fg2cq3AO3p4wiU61y2KCbXx2i3TuhYpyu06NB1w6lY1wQqVHR3UIYB3pT4cj7d0zDbRriqjNAfaZznewl%2FdJ0nadMJ70P%2B6uvtZ6tbCwjQtIx8ca5PSYnVbOBt1fj4LUMfhwW%2F2H3N%2FvX4Nbf3moTaIczeBoQWfhWeuUDKnWYJyyiqKDmRxsaBb69Cc6pqJ1tL1yu5sw9QHtrz4W70yjthZYjeoX%2BJnbHybDCl18xY%2BL3JC8YAyjd0dwAzWtDEJRBbmIIXzUVt0sTHrafOm4rnwwRusHgmrH6D2z60vxB87BKrAn36E1RFr6IqABWjK6q2uEXPFyQBBx9cpTYJQE%2B5FQkXhF4X4RFjANeVFrhgeDx%2BAFaJJ%2BOvMXnJzgH7M8vIzlLSamrL3tlHQ%2F%2F%2BXtalsSN%2F2RLtjRNZczuaY76v%2BDG14EQf8Dp1beonkxDAOnIHaNNoBVeGfsVySFcmqX5yr4dX9se%2FVm4BZrMK8rXD2HLbsiTYQSlKamTh45BHov0EeKWdbsqR2kgX7WzJ%2F1FV3aBMK0M42F8DMafihofe30rKCKdIpFo2gFh48CiXuT6zt9XLwtGCrHOF%2Bhp2y20pcoT0ys4Zt4jYelVQ82aZFkTR%2Bjzdv%2BRN1lf4BE0UurzrTD0w4DTBjqkAW175%2BnENEc4n96PwB0y1ZhJQosFQc0gymh96PXr4Hj3SAPBhYN7yCcL1gd2%2FSNGOuIF20%2FKmwAMQnu07tD6QbI2wHDYweprm%2FR4p6C9aHvtrrZU57SkhV6tRAcL7vdPK%2FPb13vsHXPjKzFDxMeLQuoBlk8%2BmxNeVcl24i9qB5fxs%2F29LSi27wkB%2F1XPWj76m%2FvESxuWR63OEhyRHnDsm33eD2TP&X-Amz-Signature=b0213c4dea80b4cbde89c8f92aa26064e41ac2d4bbc62ed5ae6f7eee68fa5487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FGSR2H%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCpCBBkpcJE4pmMTK4EzOQbEibL9p4c27PP7DGKSektOQIhAI0MHUs561bvMHOrPpdTZNlDERzUjyTQ0ECvOUNl3zt3KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwspUcDe7GhXa2%2Fg2cq3AO3p4wiU61y2KCbXx2i3TuhYpyu06NB1w6lY1wQqVHR3UIYB3pT4cj7d0zDbRriqjNAfaZznewl%2FdJ0nadMJ70P%2B6uvtZ6tbCwjQtIx8ca5PSYnVbOBt1fj4LUMfhwW%2F2H3N%2FvX4Nbf3moTaIczeBoQWfhWeuUDKnWYJyyiqKDmRxsaBb69Cc6pqJ1tL1yu5sw9QHtrz4W70yjthZYjeoX%2BJnbHybDCl18xY%2BL3JC8YAyjd0dwAzWtDEJRBbmIIXzUVt0sTHrafOm4rnwwRusHgmrH6D2z60vxB87BKrAn36E1RFr6IqABWjK6q2uEXPFyQBBx9cpTYJQE%2B5FQkXhF4X4RFjANeVFrhgeDx%2BAFaJJ%2BOvMXnJzgH7M8vIzlLSamrL3tlHQ%2F%2F%2BXtalsSN%2F2RLtjRNZczuaY76v%2BDG14EQf8Dp1beonkxDAOnIHaNNoBVeGfsVySFcmqX5yr4dX9se%2FVm4BZrMK8rXD2HLbsiTYQSlKamTh45BHov0EeKWdbsqR2kgX7WzJ%2F1FV3aBMK0M42F8DMafihofe30rKCKdIpFo2gFh48CiXuT6zt9XLwtGCrHOF%2Bhp2y20pcoT0ys4Zt4jYelVQ82aZFkTR%2Bjzdv%2BRN1lf4BE0UurzrTD0w4DTBjqkAW175%2BnENEc4n96PwB0y1ZhJQosFQc0gymh96PXr4Hj3SAPBhYN7yCcL1gd2%2FSNGOuIF20%2FKmwAMQnu07tD6QbI2wHDYweprm%2FR4p6C9aHvtrrZU57SkhV6tRAcL7vdPK%2FPb13vsHXPjKzFDxMeLQuoBlk8%2BmxNeVcl24i9qB5fxs%2F29LSi27wkB%2F1XPWj76m%2FvESxuWR63OEhyRHnDsm33eD2TP&X-Amz-Signature=bfb700e8500010678f47976c6b57c31f0d5e921cda21f454db739136828785e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
