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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622C6O2L2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNq9NKPrR86M%2Fv5GJKFBWZbCpMBmyRfrteyHiko8obRAIgKaq5lCAJltLoatYmYh4n0uJ2dywCzd%2FuU2fWsEcTpRoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt8G8h2hiEGqYxgDircA2qx4BfXICNyf6dsFXA069tEZl7mdu8Z5l3DUx5Yi29gUsmbBHOy2KspCF6h2DX7uqIjkBOFGolu3jgtoEC3OjkxicG6E08q0P9fhOzj%2BF4v3hZgqjvg%2Fw3hJKrqImXfo%2FML3y4Ypv96vSj0DFDLFoRyqFyz9g7LUAmputQXmoTca6H3VYLZ7PjSYNIXuATqBV3JdbzMnwUn6%2FTl%2BKWYnOvqr9Pl8cX84OWy%2FOq9bjaDasBltwk4ed%2BofdqkeT52ywVd1NtaRCYw7W1CvRJ%2Fw3%2Fpa2d%2FqoUGu5NXkvmAGD0b76fTkeDXGJNJLDPHtsDPDlr73Ockavg524v6q9QlSEd8PySbEp9S20Ag%2BGHkXQt8VV0ipItkB0%2Brx3EJzFEjnJFPjCSS2UlYosAFFX4UsgpuPRJlVBhl7NU2H0XKPBCceEcfNMoFQ%2BZYn5IhH1M2V89CytwwPBz%2FW%2BwkbvI8hUIIEXqYQAUG%2FM1nGkgo%2FqFhqpZSVY4avs1sBPFQTP%2FKuvjvMJgE%2FdEC1gbT3csJzevwhrsNVfDwDVeRowtDaNVjQS2M50oW8Bnzj7AvfREI9Ypb9dW2Ojw7geYGQ189hjODmvePQ7dhLsExnoL1Da1lBrveZf3U9iNm92RQMOeZwcAGOqUBzZSNcEZPbpy0xc9H6MLAb%2BOxBD6LN%2FcPneUF8XiwwOifNwmJuzNmN5AjcNzdSEDG282iUutvElRVjISUDTv5XHKE%2BoO%2FPXE1vRn2GroZt6JgfbJcTQHcUIiLSWD7yVl1JqON7tgDFMrojVbXa4HqVQfZFfXRqxuPXUjWSjWmVPIXY1oKVkmgFHrrBn2x%2FPN93b9rcDX%2BI%2FOQX5%2BCMRuEA079kfXa&X-Amz-Signature=81299816d8ba679d8bf60cf42fe1e7960d0d68b706d9bf65e13a901e7fa74b74&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622C6O2L2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNq9NKPrR86M%2Fv5GJKFBWZbCpMBmyRfrteyHiko8obRAIgKaq5lCAJltLoatYmYh4n0uJ2dywCzd%2FuU2fWsEcTpRoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt8G8h2hiEGqYxgDircA2qx4BfXICNyf6dsFXA069tEZl7mdu8Z5l3DUx5Yi29gUsmbBHOy2KspCF6h2DX7uqIjkBOFGolu3jgtoEC3OjkxicG6E08q0P9fhOzj%2BF4v3hZgqjvg%2Fw3hJKrqImXfo%2FML3y4Ypv96vSj0DFDLFoRyqFyz9g7LUAmputQXmoTca6H3VYLZ7PjSYNIXuATqBV3JdbzMnwUn6%2FTl%2BKWYnOvqr9Pl8cX84OWy%2FOq9bjaDasBltwk4ed%2BofdqkeT52ywVd1NtaRCYw7W1CvRJ%2Fw3%2Fpa2d%2FqoUGu5NXkvmAGD0b76fTkeDXGJNJLDPHtsDPDlr73Ockavg524v6q9QlSEd8PySbEp9S20Ag%2BGHkXQt8VV0ipItkB0%2Brx3EJzFEjnJFPjCSS2UlYosAFFX4UsgpuPRJlVBhl7NU2H0XKPBCceEcfNMoFQ%2BZYn5IhH1M2V89CytwwPBz%2FW%2BwkbvI8hUIIEXqYQAUG%2FM1nGkgo%2FqFhqpZSVY4avs1sBPFQTP%2FKuvjvMJgE%2FdEC1gbT3csJzevwhrsNVfDwDVeRowtDaNVjQS2M50oW8Bnzj7AvfREI9Ypb9dW2Ojw7geYGQ189hjODmvePQ7dhLsExnoL1Da1lBrveZf3U9iNm92RQMOeZwcAGOqUBzZSNcEZPbpy0xc9H6MLAb%2BOxBD6LN%2FcPneUF8XiwwOifNwmJuzNmN5AjcNzdSEDG282iUutvElRVjISUDTv5XHKE%2BoO%2FPXE1vRn2GroZt6JgfbJcTQHcUIiLSWD7yVl1JqON7tgDFMrojVbXa4HqVQfZFfXRqxuPXUjWSjWmVPIXY1oKVkmgFHrrBn2x%2FPN93b9rcDX%2BI%2FOQX5%2BCMRuEA079kfXa&X-Amz-Signature=d067adf0248df907772eada9295425cafe2e22ccd805386cad7bc7b2ad3a9dd7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622C6O2L2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNq9NKPrR86M%2Fv5GJKFBWZbCpMBmyRfrteyHiko8obRAIgKaq5lCAJltLoatYmYh4n0uJ2dywCzd%2FuU2fWsEcTpRoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt8G8h2hiEGqYxgDircA2qx4BfXICNyf6dsFXA069tEZl7mdu8Z5l3DUx5Yi29gUsmbBHOy2KspCF6h2DX7uqIjkBOFGolu3jgtoEC3OjkxicG6E08q0P9fhOzj%2BF4v3hZgqjvg%2Fw3hJKrqImXfo%2FML3y4Ypv96vSj0DFDLFoRyqFyz9g7LUAmputQXmoTca6H3VYLZ7PjSYNIXuATqBV3JdbzMnwUn6%2FTl%2BKWYnOvqr9Pl8cX84OWy%2FOq9bjaDasBltwk4ed%2BofdqkeT52ywVd1NtaRCYw7W1CvRJ%2Fw3%2Fpa2d%2FqoUGu5NXkvmAGD0b76fTkeDXGJNJLDPHtsDPDlr73Ockavg524v6q9QlSEd8PySbEp9S20Ag%2BGHkXQt8VV0ipItkB0%2Brx3EJzFEjnJFPjCSS2UlYosAFFX4UsgpuPRJlVBhl7NU2H0XKPBCceEcfNMoFQ%2BZYn5IhH1M2V89CytwwPBz%2FW%2BwkbvI8hUIIEXqYQAUG%2FM1nGkgo%2FqFhqpZSVY4avs1sBPFQTP%2FKuvjvMJgE%2FdEC1gbT3csJzevwhrsNVfDwDVeRowtDaNVjQS2M50oW8Bnzj7AvfREI9Ypb9dW2Ojw7geYGQ189hjODmvePQ7dhLsExnoL1Da1lBrveZf3U9iNm92RQMOeZwcAGOqUBzZSNcEZPbpy0xc9H6MLAb%2BOxBD6LN%2FcPneUF8XiwwOifNwmJuzNmN5AjcNzdSEDG282iUutvElRVjISUDTv5XHKE%2BoO%2FPXE1vRn2GroZt6JgfbJcTQHcUIiLSWD7yVl1JqON7tgDFMrojVbXa4HqVQfZFfXRqxuPXUjWSjWmVPIXY1oKVkmgFHrrBn2x%2FPN93b9rcDX%2BI%2FOQX5%2BCMRuEA079kfXa&X-Amz-Signature=0ca1c4ffaaa86c8ceaa69b24b92ee27ba39e8d09440187b303262577a8eea0be&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622C6O2L2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNq9NKPrR86M%2Fv5GJKFBWZbCpMBmyRfrteyHiko8obRAIgKaq5lCAJltLoatYmYh4n0uJ2dywCzd%2FuU2fWsEcTpRoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt8G8h2hiEGqYxgDircA2qx4BfXICNyf6dsFXA069tEZl7mdu8Z5l3DUx5Yi29gUsmbBHOy2KspCF6h2DX7uqIjkBOFGolu3jgtoEC3OjkxicG6E08q0P9fhOzj%2BF4v3hZgqjvg%2Fw3hJKrqImXfo%2FML3y4Ypv96vSj0DFDLFoRyqFyz9g7LUAmputQXmoTca6H3VYLZ7PjSYNIXuATqBV3JdbzMnwUn6%2FTl%2BKWYnOvqr9Pl8cX84OWy%2FOq9bjaDasBltwk4ed%2BofdqkeT52ywVd1NtaRCYw7W1CvRJ%2Fw3%2Fpa2d%2FqoUGu5NXkvmAGD0b76fTkeDXGJNJLDPHtsDPDlr73Ockavg524v6q9QlSEd8PySbEp9S20Ag%2BGHkXQt8VV0ipItkB0%2Brx3EJzFEjnJFPjCSS2UlYosAFFX4UsgpuPRJlVBhl7NU2H0XKPBCceEcfNMoFQ%2BZYn5IhH1M2V89CytwwPBz%2FW%2BwkbvI8hUIIEXqYQAUG%2FM1nGkgo%2FqFhqpZSVY4avs1sBPFQTP%2FKuvjvMJgE%2FdEC1gbT3csJzevwhrsNVfDwDVeRowtDaNVjQS2M50oW8Bnzj7AvfREI9Ypb9dW2Ojw7geYGQ189hjODmvePQ7dhLsExnoL1Da1lBrveZf3U9iNm92RQMOeZwcAGOqUBzZSNcEZPbpy0xc9H6MLAb%2BOxBD6LN%2FcPneUF8XiwwOifNwmJuzNmN5AjcNzdSEDG282iUutvElRVjISUDTv5XHKE%2BoO%2FPXE1vRn2GroZt6JgfbJcTQHcUIiLSWD7yVl1JqON7tgDFMrojVbXa4HqVQfZFfXRqxuPXUjWSjWmVPIXY1oKVkmgFHrrBn2x%2FPN93b9rcDX%2BI%2FOQX5%2BCMRuEA079kfXa&X-Amz-Signature=8133dfc41876df87504aee90b8a9f6405d63b4b9d09329496b1e020da1683c74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622C6O2L2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNq9NKPrR86M%2Fv5GJKFBWZbCpMBmyRfrteyHiko8obRAIgKaq5lCAJltLoatYmYh4n0uJ2dywCzd%2FuU2fWsEcTpRoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt8G8h2hiEGqYxgDircA2qx4BfXICNyf6dsFXA069tEZl7mdu8Z5l3DUx5Yi29gUsmbBHOy2KspCF6h2DX7uqIjkBOFGolu3jgtoEC3OjkxicG6E08q0P9fhOzj%2BF4v3hZgqjvg%2Fw3hJKrqImXfo%2FML3y4Ypv96vSj0DFDLFoRyqFyz9g7LUAmputQXmoTca6H3VYLZ7PjSYNIXuATqBV3JdbzMnwUn6%2FTl%2BKWYnOvqr9Pl8cX84OWy%2FOq9bjaDasBltwk4ed%2BofdqkeT52ywVd1NtaRCYw7W1CvRJ%2Fw3%2Fpa2d%2FqoUGu5NXkvmAGD0b76fTkeDXGJNJLDPHtsDPDlr73Ockavg524v6q9QlSEd8PySbEp9S20Ag%2BGHkXQt8VV0ipItkB0%2Brx3EJzFEjnJFPjCSS2UlYosAFFX4UsgpuPRJlVBhl7NU2H0XKPBCceEcfNMoFQ%2BZYn5IhH1M2V89CytwwPBz%2FW%2BwkbvI8hUIIEXqYQAUG%2FM1nGkgo%2FqFhqpZSVY4avs1sBPFQTP%2FKuvjvMJgE%2FdEC1gbT3csJzevwhrsNVfDwDVeRowtDaNVjQS2M50oW8Bnzj7AvfREI9Ypb9dW2Ojw7geYGQ189hjODmvePQ7dhLsExnoL1Da1lBrveZf3U9iNm92RQMOeZwcAGOqUBzZSNcEZPbpy0xc9H6MLAb%2BOxBD6LN%2FcPneUF8XiwwOifNwmJuzNmN5AjcNzdSEDG282iUutvElRVjISUDTv5XHKE%2BoO%2FPXE1vRn2GroZt6JgfbJcTQHcUIiLSWD7yVl1JqON7tgDFMrojVbXa4HqVQfZFfXRqxuPXUjWSjWmVPIXY1oKVkmgFHrrBn2x%2FPN93b9rcDX%2BI%2FOQX5%2BCMRuEA079kfXa&X-Amz-Signature=e869cc31f43ca876214d8b7909073d686f723393dcf6b58bab6975539b39e5ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
