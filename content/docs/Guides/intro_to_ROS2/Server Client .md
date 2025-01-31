---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSLKZFW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFy%2FRzAgVlb2PuZHhBiccK6rq4k5CslPEfZe%2BrCJNBWFAiAcb0D5aml4YUrH7PK%2BWeumLoTFV6cshZNZ8VEZci0vUSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvl7TuUmT7DuZEQjeKtwD0euDxpgWPfXv5RbaIt3nHMCLeRa36lm3mDE4va0e3qh%2Bk247KPXdEhPLWGN4%2BcYnd6naH0Ha7WzAo%2Fs1hq6KQgTgG7naVQIqyTKLIe9v8WhitfDyapaMWxDPXDieo1tNT7%2F3jy2fVLwW7VD2ZoK2PreoM8BOUnQWRJjhEouJubCNJkTtHTiJe8dXGS8kaI%2BSF8f%2BOPr5qaAZKFfOayVIEcYfPfbL1hE8eVnMKm5IdCr0MQfkmHhkQDcCL6rium8R0%2BUQTsc5FBExSPWPK8fmPVbuHdFECH0PMIoyNuWZC0GdpZh0yFyITap%2FGqLg2kjQpuIEiQF%2BW2Fym56pshE0dBKFLoyhlWURgW8q19xaoliTbC614FAuk43vh5WpEpRoPTvA5SEDkQMrMIJDjdk%2BQ0Pri2560UU%2BjGvTNdmJwEavVORwg0N%2B7M80MgJufUim3RqN9wHgE7FVcgzdo7i7zcI8mihWVPp5U1SXdLdGWWoiC7TAU2BLdG%2FeBYLlSUV6aK%2BiLg%2BAdpF1JICoakm7uvlYbt3JOsq5oZAYAwFk%2F4gQ6rIerht%2BaCvp05CAdtIcMXZnPu%2FcBNiUteQTK5rmUEAUO3FwTFVRhMgibwBkn1YtKSl05IK3ov2hL9Iw7OzzvAY6pgEHw6LpRo4ADfH%2BHWeKN5c6JtjrssCUCDusPey9ZQVM3nlT2En7Jw3ChV8Xrbc3gwFxCtUsudZl6l0AXU945vDmYrKTSjO0%2FBd9ODgAdQ2SROzAywObM15tUe5qdSNdiyBLlnBCvyOT8rpB6Dtl126yAbBBsNxWdp013E7NPTQIF0oIGIJ%2Ft1NNFTx7UnRgCrMqZTzHI2LtmLoV2CBB%2FiSpbB%2BNTX5I&X-Amz-Signature=752cba6b0e19f8b9021969cf3670e53fa653e82ddb39302c4951d174bf7670de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSLKZFW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFy%2FRzAgVlb2PuZHhBiccK6rq4k5CslPEfZe%2BrCJNBWFAiAcb0D5aml4YUrH7PK%2BWeumLoTFV6cshZNZ8VEZci0vUSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvl7TuUmT7DuZEQjeKtwD0euDxpgWPfXv5RbaIt3nHMCLeRa36lm3mDE4va0e3qh%2Bk247KPXdEhPLWGN4%2BcYnd6naH0Ha7WzAo%2Fs1hq6KQgTgG7naVQIqyTKLIe9v8WhitfDyapaMWxDPXDieo1tNT7%2F3jy2fVLwW7VD2ZoK2PreoM8BOUnQWRJjhEouJubCNJkTtHTiJe8dXGS8kaI%2BSF8f%2BOPr5qaAZKFfOayVIEcYfPfbL1hE8eVnMKm5IdCr0MQfkmHhkQDcCL6rium8R0%2BUQTsc5FBExSPWPK8fmPVbuHdFECH0PMIoyNuWZC0GdpZh0yFyITap%2FGqLg2kjQpuIEiQF%2BW2Fym56pshE0dBKFLoyhlWURgW8q19xaoliTbC614FAuk43vh5WpEpRoPTvA5SEDkQMrMIJDjdk%2BQ0Pri2560UU%2BjGvTNdmJwEavVORwg0N%2B7M80MgJufUim3RqN9wHgE7FVcgzdo7i7zcI8mihWVPp5U1SXdLdGWWoiC7TAU2BLdG%2FeBYLlSUV6aK%2BiLg%2BAdpF1JICoakm7uvlYbt3JOsq5oZAYAwFk%2F4gQ6rIerht%2BaCvp05CAdtIcMXZnPu%2FcBNiUteQTK5rmUEAUO3FwTFVRhMgibwBkn1YtKSl05IK3ov2hL9Iw7OzzvAY6pgEHw6LpRo4ADfH%2BHWeKN5c6JtjrssCUCDusPey9ZQVM3nlT2En7Jw3ChV8Xrbc3gwFxCtUsudZl6l0AXU945vDmYrKTSjO0%2FBd9ODgAdQ2SROzAywObM15tUe5qdSNdiyBLlnBCvyOT8rpB6Dtl126yAbBBsNxWdp013E7NPTQIF0oIGIJ%2Ft1NNFTx7UnRgCrMqZTzHI2LtmLoV2CBB%2FiSpbB%2BNTX5I&X-Amz-Signature=343a692139823cce62c0f58b7fe12f544e5db910e189d2c614abf9b7e52b082b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSLKZFW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFy%2FRzAgVlb2PuZHhBiccK6rq4k5CslPEfZe%2BrCJNBWFAiAcb0D5aml4YUrH7PK%2BWeumLoTFV6cshZNZ8VEZci0vUSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvl7TuUmT7DuZEQjeKtwD0euDxpgWPfXv5RbaIt3nHMCLeRa36lm3mDE4va0e3qh%2Bk247KPXdEhPLWGN4%2BcYnd6naH0Ha7WzAo%2Fs1hq6KQgTgG7naVQIqyTKLIe9v8WhitfDyapaMWxDPXDieo1tNT7%2F3jy2fVLwW7VD2ZoK2PreoM8BOUnQWRJjhEouJubCNJkTtHTiJe8dXGS8kaI%2BSF8f%2BOPr5qaAZKFfOayVIEcYfPfbL1hE8eVnMKm5IdCr0MQfkmHhkQDcCL6rium8R0%2BUQTsc5FBExSPWPK8fmPVbuHdFECH0PMIoyNuWZC0GdpZh0yFyITap%2FGqLg2kjQpuIEiQF%2BW2Fym56pshE0dBKFLoyhlWURgW8q19xaoliTbC614FAuk43vh5WpEpRoPTvA5SEDkQMrMIJDjdk%2BQ0Pri2560UU%2BjGvTNdmJwEavVORwg0N%2B7M80MgJufUim3RqN9wHgE7FVcgzdo7i7zcI8mihWVPp5U1SXdLdGWWoiC7TAU2BLdG%2FeBYLlSUV6aK%2BiLg%2BAdpF1JICoakm7uvlYbt3JOsq5oZAYAwFk%2F4gQ6rIerht%2BaCvp05CAdtIcMXZnPu%2FcBNiUteQTK5rmUEAUO3FwTFVRhMgibwBkn1YtKSl05IK3ov2hL9Iw7OzzvAY6pgEHw6LpRo4ADfH%2BHWeKN5c6JtjrssCUCDusPey9ZQVM3nlT2En7Jw3ChV8Xrbc3gwFxCtUsudZl6l0AXU945vDmYrKTSjO0%2FBd9ODgAdQ2SROzAywObM15tUe5qdSNdiyBLlnBCvyOT8rpB6Dtl126yAbBBsNxWdp013E7NPTQIF0oIGIJ%2Ft1NNFTx7UnRgCrMqZTzHI2LtmLoV2CBB%2FiSpbB%2BNTX5I&X-Amz-Signature=6caa6611b031051f3907012b2a3e2be77da6fefcf015d13d335e2e0c7eb87faa&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSLKZFW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFy%2FRzAgVlb2PuZHhBiccK6rq4k5CslPEfZe%2BrCJNBWFAiAcb0D5aml4YUrH7PK%2BWeumLoTFV6cshZNZ8VEZci0vUSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvl7TuUmT7DuZEQjeKtwD0euDxpgWPfXv5RbaIt3nHMCLeRa36lm3mDE4va0e3qh%2Bk247KPXdEhPLWGN4%2BcYnd6naH0Ha7WzAo%2Fs1hq6KQgTgG7naVQIqyTKLIe9v8WhitfDyapaMWxDPXDieo1tNT7%2F3jy2fVLwW7VD2ZoK2PreoM8BOUnQWRJjhEouJubCNJkTtHTiJe8dXGS8kaI%2BSF8f%2BOPr5qaAZKFfOayVIEcYfPfbL1hE8eVnMKm5IdCr0MQfkmHhkQDcCL6rium8R0%2BUQTsc5FBExSPWPK8fmPVbuHdFECH0PMIoyNuWZC0GdpZh0yFyITap%2FGqLg2kjQpuIEiQF%2BW2Fym56pshE0dBKFLoyhlWURgW8q19xaoliTbC614FAuk43vh5WpEpRoPTvA5SEDkQMrMIJDjdk%2BQ0Pri2560UU%2BjGvTNdmJwEavVORwg0N%2B7M80MgJufUim3RqN9wHgE7FVcgzdo7i7zcI8mihWVPp5U1SXdLdGWWoiC7TAU2BLdG%2FeBYLlSUV6aK%2BiLg%2BAdpF1JICoakm7uvlYbt3JOsq5oZAYAwFk%2F4gQ6rIerht%2BaCvp05CAdtIcMXZnPu%2FcBNiUteQTK5rmUEAUO3FwTFVRhMgibwBkn1YtKSl05IK3ov2hL9Iw7OzzvAY6pgEHw6LpRo4ADfH%2BHWeKN5c6JtjrssCUCDusPey9ZQVM3nlT2En7Jw3ChV8Xrbc3gwFxCtUsudZl6l0AXU945vDmYrKTSjO0%2FBd9ODgAdQ2SROzAywObM15tUe5qdSNdiyBLlnBCvyOT8rpB6Dtl126yAbBBsNxWdp013E7NPTQIF0oIGIJ%2Ft1NNFTx7UnRgCrMqZTzHI2LtmLoV2CBB%2FiSpbB%2BNTX5I&X-Amz-Signature=cc31d016fc2118edcccd852118dea26dfb8272d6cb211c6f1b750ddea35b8d1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSLKZFW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFy%2FRzAgVlb2PuZHhBiccK6rq4k5CslPEfZe%2BrCJNBWFAiAcb0D5aml4YUrH7PK%2BWeumLoTFV6cshZNZ8VEZci0vUSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvl7TuUmT7DuZEQjeKtwD0euDxpgWPfXv5RbaIt3nHMCLeRa36lm3mDE4va0e3qh%2Bk247KPXdEhPLWGN4%2BcYnd6naH0Ha7WzAo%2Fs1hq6KQgTgG7naVQIqyTKLIe9v8WhitfDyapaMWxDPXDieo1tNT7%2F3jy2fVLwW7VD2ZoK2PreoM8BOUnQWRJjhEouJubCNJkTtHTiJe8dXGS8kaI%2BSF8f%2BOPr5qaAZKFfOayVIEcYfPfbL1hE8eVnMKm5IdCr0MQfkmHhkQDcCL6rium8R0%2BUQTsc5FBExSPWPK8fmPVbuHdFECH0PMIoyNuWZC0GdpZh0yFyITap%2FGqLg2kjQpuIEiQF%2BW2Fym56pshE0dBKFLoyhlWURgW8q19xaoliTbC614FAuk43vh5WpEpRoPTvA5SEDkQMrMIJDjdk%2BQ0Pri2560UU%2BjGvTNdmJwEavVORwg0N%2B7M80MgJufUim3RqN9wHgE7FVcgzdo7i7zcI8mihWVPp5U1SXdLdGWWoiC7TAU2BLdG%2FeBYLlSUV6aK%2BiLg%2BAdpF1JICoakm7uvlYbt3JOsq5oZAYAwFk%2F4gQ6rIerht%2BaCvp05CAdtIcMXZnPu%2FcBNiUteQTK5rmUEAUO3FwTFVRhMgibwBkn1YtKSl05IK3ov2hL9Iw7OzzvAY6pgEHw6LpRo4ADfH%2BHWeKN5c6JtjrssCUCDusPey9ZQVM3nlT2En7Jw3ChV8Xrbc3gwFxCtUsudZl6l0AXU945vDmYrKTSjO0%2FBd9ODgAdQ2SROzAywObM15tUe5qdSNdiyBLlnBCvyOT8rpB6Dtl126yAbBBsNxWdp013E7NPTQIF0oIGIJ%2Ft1NNFTx7UnRgCrMqZTzHI2LtmLoV2CBB%2FiSpbB%2BNTX5I&X-Amz-Signature=f74f71a76b1eb98ead5dfcd8d13f7199ae33e94b18a916d7a8d9c05ff812c55d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
