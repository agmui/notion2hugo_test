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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYRLBRX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqKPo3vpnVmx0g6zfVxQSpUJFHo9Q8jzgROBBHmSkTrAiEAk4N5A98GyJ%2BPcX3oQrYhj0sO1BLqpmbZ9TRxOsD5kqcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDF0igX4m5ymRoulosSrcA6581vuS3I54nTdfrqHOOY%2BnJIf6AuewGspUQ%2B3nQELOIviBwAdSse6FsUjdRTYh05g1NPCeg71xP9gs6t1%2Feuf5Bub%2B%2B2w3cfdVLYizc5vvsjecVtyfgMK1NdVp0%2BEZ4k9V26TBMzEm03pMia%2FaRBB5TSoF%2FbG3LndsWzlBPFZRmk6y7TocGoPJHzZYwJEbTy%2F%2B5NnQZ5GpbJbdV52N32UdwK4Gkh3N0xDuuM6bUWnLZb96aHIUvVfkotbQDfs8keG4ABUd0AlFbIruUg1BpK4TdN7f1QuvhOt0wUyYorqidl9Xsut7Fxr6q5WYSpZYy8Zm%2FiH9%2Bcib9JI4NvPh89UXbBatBIBGCbYZbRzUXnF7X%2BhjmxScrJXMFonx4HLrZGZOTZp%2Bk8qGgyJbQCmGEPZ0Uwd%2BhJZCIQHWiIA056lN4tidh185lGcq1ZgddeqVDe13J1KZmRaRcb%2Fv2knWpI5mRlrm3O0AiZ%2BRv5giDxBkXChms%2B8SjfagEreXq%2FDZSqZPOzsbNotjv4YbwexNP6vVMlyeEsYc2C%2F37XXif8X9hXlcHgt663hC6RrEEyHSmZITdrphnr6lYtu%2B4QILSJl5NAL7RApP2uX7dvYb6KfIkG07dCdW37%2Buv9BOMPHstsAGOqUBItFQMG5fjNr1m%2BLC0vKvtJVsIFEfhqmM6evhFeeMdmkMNNDQ0DAALZA%2BjQB2NqkdwHOc%2FUw5%2BJ0H%2F0lKRSITLoxedpUglMxMoGvjYzip9m7DutceWgIyz%2BSKJl3lgIWnj0NKmrkh20FtRkWldgbP%2FBMeWHJ7qpAkdAo6gNEhiiH9GuBUZwLtW7Kcaa3OfQKenYC9JhHSCzDqkysGpmWmGygoIvbh&X-Amz-Signature=f62339a019624a2df79ec81934e6763a2e6eceabfd0e320d276cca90d27fe02b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYRLBRX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqKPo3vpnVmx0g6zfVxQSpUJFHo9Q8jzgROBBHmSkTrAiEAk4N5A98GyJ%2BPcX3oQrYhj0sO1BLqpmbZ9TRxOsD5kqcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDF0igX4m5ymRoulosSrcA6581vuS3I54nTdfrqHOOY%2BnJIf6AuewGspUQ%2B3nQELOIviBwAdSse6FsUjdRTYh05g1NPCeg71xP9gs6t1%2Feuf5Bub%2B%2B2w3cfdVLYizc5vvsjecVtyfgMK1NdVp0%2BEZ4k9V26TBMzEm03pMia%2FaRBB5TSoF%2FbG3LndsWzlBPFZRmk6y7TocGoPJHzZYwJEbTy%2F%2B5NnQZ5GpbJbdV52N32UdwK4Gkh3N0xDuuM6bUWnLZb96aHIUvVfkotbQDfs8keG4ABUd0AlFbIruUg1BpK4TdN7f1QuvhOt0wUyYorqidl9Xsut7Fxr6q5WYSpZYy8Zm%2FiH9%2Bcib9JI4NvPh89UXbBatBIBGCbYZbRzUXnF7X%2BhjmxScrJXMFonx4HLrZGZOTZp%2Bk8qGgyJbQCmGEPZ0Uwd%2BhJZCIQHWiIA056lN4tidh185lGcq1ZgddeqVDe13J1KZmRaRcb%2Fv2knWpI5mRlrm3O0AiZ%2BRv5giDxBkXChms%2B8SjfagEreXq%2FDZSqZPOzsbNotjv4YbwexNP6vVMlyeEsYc2C%2F37XXif8X9hXlcHgt663hC6RrEEyHSmZITdrphnr6lYtu%2B4QILSJl5NAL7RApP2uX7dvYb6KfIkG07dCdW37%2Buv9BOMPHstsAGOqUBItFQMG5fjNr1m%2BLC0vKvtJVsIFEfhqmM6evhFeeMdmkMNNDQ0DAALZA%2BjQB2NqkdwHOc%2FUw5%2BJ0H%2F0lKRSITLoxedpUglMxMoGvjYzip9m7DutceWgIyz%2BSKJl3lgIWnj0NKmrkh20FtRkWldgbP%2FBMeWHJ7qpAkdAo6gNEhiiH9GuBUZwLtW7Kcaa3OfQKenYC9JhHSCzDqkysGpmWmGygoIvbh&X-Amz-Signature=68aa3d0b9430bd3c5dd236504353c93879aa2f2e196b01c179d722f28cc762cf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYRLBRX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqKPo3vpnVmx0g6zfVxQSpUJFHo9Q8jzgROBBHmSkTrAiEAk4N5A98GyJ%2BPcX3oQrYhj0sO1BLqpmbZ9TRxOsD5kqcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDF0igX4m5ymRoulosSrcA6581vuS3I54nTdfrqHOOY%2BnJIf6AuewGspUQ%2B3nQELOIviBwAdSse6FsUjdRTYh05g1NPCeg71xP9gs6t1%2Feuf5Bub%2B%2B2w3cfdVLYizc5vvsjecVtyfgMK1NdVp0%2BEZ4k9V26TBMzEm03pMia%2FaRBB5TSoF%2FbG3LndsWzlBPFZRmk6y7TocGoPJHzZYwJEbTy%2F%2B5NnQZ5GpbJbdV52N32UdwK4Gkh3N0xDuuM6bUWnLZb96aHIUvVfkotbQDfs8keG4ABUd0AlFbIruUg1BpK4TdN7f1QuvhOt0wUyYorqidl9Xsut7Fxr6q5WYSpZYy8Zm%2FiH9%2Bcib9JI4NvPh89UXbBatBIBGCbYZbRzUXnF7X%2BhjmxScrJXMFonx4HLrZGZOTZp%2Bk8qGgyJbQCmGEPZ0Uwd%2BhJZCIQHWiIA056lN4tidh185lGcq1ZgddeqVDe13J1KZmRaRcb%2Fv2knWpI5mRlrm3O0AiZ%2BRv5giDxBkXChms%2B8SjfagEreXq%2FDZSqZPOzsbNotjv4YbwexNP6vVMlyeEsYc2C%2F37XXif8X9hXlcHgt663hC6RrEEyHSmZITdrphnr6lYtu%2B4QILSJl5NAL7RApP2uX7dvYb6KfIkG07dCdW37%2Buv9BOMPHstsAGOqUBItFQMG5fjNr1m%2BLC0vKvtJVsIFEfhqmM6evhFeeMdmkMNNDQ0DAALZA%2BjQB2NqkdwHOc%2FUw5%2BJ0H%2F0lKRSITLoxedpUglMxMoGvjYzip9m7DutceWgIyz%2BSKJl3lgIWnj0NKmrkh20FtRkWldgbP%2FBMeWHJ7qpAkdAo6gNEhiiH9GuBUZwLtW7Kcaa3OfQKenYC9JhHSCzDqkysGpmWmGygoIvbh&X-Amz-Signature=3aa30b1bde5880486115aa04b2a70b4a29ad6a53b2ce4de1cae182b3b9b863b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYRLBRX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqKPo3vpnVmx0g6zfVxQSpUJFHo9Q8jzgROBBHmSkTrAiEAk4N5A98GyJ%2BPcX3oQrYhj0sO1BLqpmbZ9TRxOsD5kqcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDF0igX4m5ymRoulosSrcA6581vuS3I54nTdfrqHOOY%2BnJIf6AuewGspUQ%2B3nQELOIviBwAdSse6FsUjdRTYh05g1NPCeg71xP9gs6t1%2Feuf5Bub%2B%2B2w3cfdVLYizc5vvsjecVtyfgMK1NdVp0%2BEZ4k9V26TBMzEm03pMia%2FaRBB5TSoF%2FbG3LndsWzlBPFZRmk6y7TocGoPJHzZYwJEbTy%2F%2B5NnQZ5GpbJbdV52N32UdwK4Gkh3N0xDuuM6bUWnLZb96aHIUvVfkotbQDfs8keG4ABUd0AlFbIruUg1BpK4TdN7f1QuvhOt0wUyYorqidl9Xsut7Fxr6q5WYSpZYy8Zm%2FiH9%2Bcib9JI4NvPh89UXbBatBIBGCbYZbRzUXnF7X%2BhjmxScrJXMFonx4HLrZGZOTZp%2Bk8qGgyJbQCmGEPZ0Uwd%2BhJZCIQHWiIA056lN4tidh185lGcq1ZgddeqVDe13J1KZmRaRcb%2Fv2knWpI5mRlrm3O0AiZ%2BRv5giDxBkXChms%2B8SjfagEreXq%2FDZSqZPOzsbNotjv4YbwexNP6vVMlyeEsYc2C%2F37XXif8X9hXlcHgt663hC6RrEEyHSmZITdrphnr6lYtu%2B4QILSJl5NAL7RApP2uX7dvYb6KfIkG07dCdW37%2Buv9BOMPHstsAGOqUBItFQMG5fjNr1m%2BLC0vKvtJVsIFEfhqmM6evhFeeMdmkMNNDQ0DAALZA%2BjQB2NqkdwHOc%2FUw5%2BJ0H%2F0lKRSITLoxedpUglMxMoGvjYzip9m7DutceWgIyz%2BSKJl3lgIWnj0NKmrkh20FtRkWldgbP%2FBMeWHJ7qpAkdAo6gNEhiiH9GuBUZwLtW7Kcaa3OfQKenYC9JhHSCzDqkysGpmWmGygoIvbh&X-Amz-Signature=696e73a380755705d5e6dfdc7fec9250d011142b98b3dc1308b17c15ce2889a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYRLBRX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqKPo3vpnVmx0g6zfVxQSpUJFHo9Q8jzgROBBHmSkTrAiEAk4N5A98GyJ%2BPcX3oQrYhj0sO1BLqpmbZ9TRxOsD5kqcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDF0igX4m5ymRoulosSrcA6581vuS3I54nTdfrqHOOY%2BnJIf6AuewGspUQ%2B3nQELOIviBwAdSse6FsUjdRTYh05g1NPCeg71xP9gs6t1%2Feuf5Bub%2B%2B2w3cfdVLYizc5vvsjecVtyfgMK1NdVp0%2BEZ4k9V26TBMzEm03pMia%2FaRBB5TSoF%2FbG3LndsWzlBPFZRmk6y7TocGoPJHzZYwJEbTy%2F%2B5NnQZ5GpbJbdV52N32UdwK4Gkh3N0xDuuM6bUWnLZb96aHIUvVfkotbQDfs8keG4ABUd0AlFbIruUg1BpK4TdN7f1QuvhOt0wUyYorqidl9Xsut7Fxr6q5WYSpZYy8Zm%2FiH9%2Bcib9JI4NvPh89UXbBatBIBGCbYZbRzUXnF7X%2BhjmxScrJXMFonx4HLrZGZOTZp%2Bk8qGgyJbQCmGEPZ0Uwd%2BhJZCIQHWiIA056lN4tidh185lGcq1ZgddeqVDe13J1KZmRaRcb%2Fv2knWpI5mRlrm3O0AiZ%2BRv5giDxBkXChms%2B8SjfagEreXq%2FDZSqZPOzsbNotjv4YbwexNP6vVMlyeEsYc2C%2F37XXif8X9hXlcHgt663hC6RrEEyHSmZITdrphnr6lYtu%2B4QILSJl5NAL7RApP2uX7dvYb6KfIkG07dCdW37%2Buv9BOMPHstsAGOqUBItFQMG5fjNr1m%2BLC0vKvtJVsIFEfhqmM6evhFeeMdmkMNNDQ0DAALZA%2BjQB2NqkdwHOc%2FUw5%2BJ0H%2F0lKRSITLoxedpUglMxMoGvjYzip9m7DutceWgIyz%2BSKJl3lgIWnj0NKmrkh20FtRkWldgbP%2FBMeWHJ7qpAkdAo6gNEhiiH9GuBUZwLtW7Kcaa3OfQKenYC9JhHSCzDqkysGpmWmGygoIvbh&X-Amz-Signature=9abd558240fbc3cc3f95e24fd7f7a0285ae6208642759a5e75900cdfc6e99993&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
