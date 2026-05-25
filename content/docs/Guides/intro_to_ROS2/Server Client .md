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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJ2HIOW%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMGvcwXUtFjm18F79wonFha%2BryqhjN4an%2BJC7aXEfPEQIgOOn5zObjJS6VBpD4vaUi%2B8Xp5paSf%2BxgaYxhCW4B3fQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBEaYxgYQLK6HUwQmSrcA76MJstEMPjZIXEtetnCwxLz9p5yak2DdW%2BCU6YF5XyztlOd3m0uEoyCdiECVngDRpmrwv64X0pajq7hCbq6s7%2BRZobjAS3jdlvid7aDNQpqZ2ryzhLtoM8wqCVaH%2B1Om%2F7BN676kRGJrixuyWzNAFKhBHw0ezpIwtIVFM7QZ89PNt2PRzyuBOXPh90jETYGzOxD0GXExlX%2BZFYaMNiLmhrSfvmlV5l0qToN1hl7YtGH21JMBcfaEPGcKP6%2B%2FCT9bkxvz4ecYXBpWkURDOKeZPHhc%2Bzo2fAetpfgL9AjWe0EJkUkAOFqCwa75doOtHmZxtYS107lNDqZpmWK7ZuZNhtEuIgCA2ii8n%2By3sFHAJB%2B%2F4%2BsOsgyDEv7P0dwxO7W9eqQIZywjJLWz%2Bpl9APuE0uEOcRBCnn9TYcmdtOO3VpTkvrqGK5NlZIueaDRgjPIVBVKSlUqjzYd4p45Sdd36YZIy7UVVwe3Kl7QzkGrfNNo6pjaltezba0i6ekyHqy8YxlrNp8crKezWF7XmhDTWcjIbCIVkhTCiSzsLzPSIb4vyJPchV9eFSejE5kOzCYpsjqlJsLc%2Fss9rky5ZwhOkCbsQtpMynHBALMv7QmfwMQy0LiRfhy%2FVHZrrynzMI60ztAGOqUBjnuu8diJNIXu%2B6L9eb2A%2Be3Cuykku2%2BokfUkLWRWxmn7slBTijgSzAJMQEaxTlG7o5vKGY1kmWk0SDsmcQchsHCwZ3vONqZuhFCexAZQyg4TKuQl9DAL4UPfNch7djkHo7b49dRUeDWzyQsK7X%2BxU2lkqQIji4k5%2FbjWZJ0wCL9DPBqyPqUFNDxy4Kcvl17DPphRor89xm%2Fv2POwbEYKu4MV5yAU&X-Amz-Signature=f545545ef9d96e7e6680a179887d04fa10a8f37faf114eb62d48489b4c2753ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJ2HIOW%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMGvcwXUtFjm18F79wonFha%2BryqhjN4an%2BJC7aXEfPEQIgOOn5zObjJS6VBpD4vaUi%2B8Xp5paSf%2BxgaYxhCW4B3fQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBEaYxgYQLK6HUwQmSrcA76MJstEMPjZIXEtetnCwxLz9p5yak2DdW%2BCU6YF5XyztlOd3m0uEoyCdiECVngDRpmrwv64X0pajq7hCbq6s7%2BRZobjAS3jdlvid7aDNQpqZ2ryzhLtoM8wqCVaH%2B1Om%2F7BN676kRGJrixuyWzNAFKhBHw0ezpIwtIVFM7QZ89PNt2PRzyuBOXPh90jETYGzOxD0GXExlX%2BZFYaMNiLmhrSfvmlV5l0qToN1hl7YtGH21JMBcfaEPGcKP6%2B%2FCT9bkxvz4ecYXBpWkURDOKeZPHhc%2Bzo2fAetpfgL9AjWe0EJkUkAOFqCwa75doOtHmZxtYS107lNDqZpmWK7ZuZNhtEuIgCA2ii8n%2By3sFHAJB%2B%2F4%2BsOsgyDEv7P0dwxO7W9eqQIZywjJLWz%2Bpl9APuE0uEOcRBCnn9TYcmdtOO3VpTkvrqGK5NlZIueaDRgjPIVBVKSlUqjzYd4p45Sdd36YZIy7UVVwe3Kl7QzkGrfNNo6pjaltezba0i6ekyHqy8YxlrNp8crKezWF7XmhDTWcjIbCIVkhTCiSzsLzPSIb4vyJPchV9eFSejE5kOzCYpsjqlJsLc%2Fss9rky5ZwhOkCbsQtpMynHBALMv7QmfwMQy0LiRfhy%2FVHZrrynzMI60ztAGOqUBjnuu8diJNIXu%2B6L9eb2A%2Be3Cuykku2%2BokfUkLWRWxmn7slBTijgSzAJMQEaxTlG7o5vKGY1kmWk0SDsmcQchsHCwZ3vONqZuhFCexAZQyg4TKuQl9DAL4UPfNch7djkHo7b49dRUeDWzyQsK7X%2BxU2lkqQIji4k5%2FbjWZJ0wCL9DPBqyPqUFNDxy4Kcvl17DPphRor89xm%2Fv2POwbEYKu4MV5yAU&X-Amz-Signature=361e1c7aea0de8f0961e2eec1436ec445116863340f2b4e4898174307470f04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJ2HIOW%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMGvcwXUtFjm18F79wonFha%2BryqhjN4an%2BJC7aXEfPEQIgOOn5zObjJS6VBpD4vaUi%2B8Xp5paSf%2BxgaYxhCW4B3fQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBEaYxgYQLK6HUwQmSrcA76MJstEMPjZIXEtetnCwxLz9p5yak2DdW%2BCU6YF5XyztlOd3m0uEoyCdiECVngDRpmrwv64X0pajq7hCbq6s7%2BRZobjAS3jdlvid7aDNQpqZ2ryzhLtoM8wqCVaH%2B1Om%2F7BN676kRGJrixuyWzNAFKhBHw0ezpIwtIVFM7QZ89PNt2PRzyuBOXPh90jETYGzOxD0GXExlX%2BZFYaMNiLmhrSfvmlV5l0qToN1hl7YtGH21JMBcfaEPGcKP6%2B%2FCT9bkxvz4ecYXBpWkURDOKeZPHhc%2Bzo2fAetpfgL9AjWe0EJkUkAOFqCwa75doOtHmZxtYS107lNDqZpmWK7ZuZNhtEuIgCA2ii8n%2By3sFHAJB%2B%2F4%2BsOsgyDEv7P0dwxO7W9eqQIZywjJLWz%2Bpl9APuE0uEOcRBCnn9TYcmdtOO3VpTkvrqGK5NlZIueaDRgjPIVBVKSlUqjzYd4p45Sdd36YZIy7UVVwe3Kl7QzkGrfNNo6pjaltezba0i6ekyHqy8YxlrNp8crKezWF7XmhDTWcjIbCIVkhTCiSzsLzPSIb4vyJPchV9eFSejE5kOzCYpsjqlJsLc%2Fss9rky5ZwhOkCbsQtpMynHBALMv7QmfwMQy0LiRfhy%2FVHZrrynzMI60ztAGOqUBjnuu8diJNIXu%2B6L9eb2A%2Be3Cuykku2%2BokfUkLWRWxmn7slBTijgSzAJMQEaxTlG7o5vKGY1kmWk0SDsmcQchsHCwZ3vONqZuhFCexAZQyg4TKuQl9DAL4UPfNch7djkHo7b49dRUeDWzyQsK7X%2BxU2lkqQIji4k5%2FbjWZJ0wCL9DPBqyPqUFNDxy4Kcvl17DPphRor89xm%2Fv2POwbEYKu4MV5yAU&X-Amz-Signature=2b3e0f9ba52f4db13119cbd11bef0ee3b097bacb7c1c1871b5b41f58d450360b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJ2HIOW%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMGvcwXUtFjm18F79wonFha%2BryqhjN4an%2BJC7aXEfPEQIgOOn5zObjJS6VBpD4vaUi%2B8Xp5paSf%2BxgaYxhCW4B3fQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBEaYxgYQLK6HUwQmSrcA76MJstEMPjZIXEtetnCwxLz9p5yak2DdW%2BCU6YF5XyztlOd3m0uEoyCdiECVngDRpmrwv64X0pajq7hCbq6s7%2BRZobjAS3jdlvid7aDNQpqZ2ryzhLtoM8wqCVaH%2B1Om%2F7BN676kRGJrixuyWzNAFKhBHw0ezpIwtIVFM7QZ89PNt2PRzyuBOXPh90jETYGzOxD0GXExlX%2BZFYaMNiLmhrSfvmlV5l0qToN1hl7YtGH21JMBcfaEPGcKP6%2B%2FCT9bkxvz4ecYXBpWkURDOKeZPHhc%2Bzo2fAetpfgL9AjWe0EJkUkAOFqCwa75doOtHmZxtYS107lNDqZpmWK7ZuZNhtEuIgCA2ii8n%2By3sFHAJB%2B%2F4%2BsOsgyDEv7P0dwxO7W9eqQIZywjJLWz%2Bpl9APuE0uEOcRBCnn9TYcmdtOO3VpTkvrqGK5NlZIueaDRgjPIVBVKSlUqjzYd4p45Sdd36YZIy7UVVwe3Kl7QzkGrfNNo6pjaltezba0i6ekyHqy8YxlrNp8crKezWF7XmhDTWcjIbCIVkhTCiSzsLzPSIb4vyJPchV9eFSejE5kOzCYpsjqlJsLc%2Fss9rky5ZwhOkCbsQtpMynHBALMv7QmfwMQy0LiRfhy%2FVHZrrynzMI60ztAGOqUBjnuu8diJNIXu%2B6L9eb2A%2Be3Cuykku2%2BokfUkLWRWxmn7slBTijgSzAJMQEaxTlG7o5vKGY1kmWk0SDsmcQchsHCwZ3vONqZuhFCexAZQyg4TKuQl9DAL4UPfNch7djkHo7b49dRUeDWzyQsK7X%2BxU2lkqQIji4k5%2FbjWZJ0wCL9DPBqyPqUFNDxy4Kcvl17DPphRor89xm%2Fv2POwbEYKu4MV5yAU&X-Amz-Signature=f08affe2bad33d1693d90ce07538535c3e3eb9ead35032d5931db0861b194c10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJ2HIOW%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMGvcwXUtFjm18F79wonFha%2BryqhjN4an%2BJC7aXEfPEQIgOOn5zObjJS6VBpD4vaUi%2B8Xp5paSf%2BxgaYxhCW4B3fQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBEaYxgYQLK6HUwQmSrcA76MJstEMPjZIXEtetnCwxLz9p5yak2DdW%2BCU6YF5XyztlOd3m0uEoyCdiECVngDRpmrwv64X0pajq7hCbq6s7%2BRZobjAS3jdlvid7aDNQpqZ2ryzhLtoM8wqCVaH%2B1Om%2F7BN676kRGJrixuyWzNAFKhBHw0ezpIwtIVFM7QZ89PNt2PRzyuBOXPh90jETYGzOxD0GXExlX%2BZFYaMNiLmhrSfvmlV5l0qToN1hl7YtGH21JMBcfaEPGcKP6%2B%2FCT9bkxvz4ecYXBpWkURDOKeZPHhc%2Bzo2fAetpfgL9AjWe0EJkUkAOFqCwa75doOtHmZxtYS107lNDqZpmWK7ZuZNhtEuIgCA2ii8n%2By3sFHAJB%2B%2F4%2BsOsgyDEv7P0dwxO7W9eqQIZywjJLWz%2Bpl9APuE0uEOcRBCnn9TYcmdtOO3VpTkvrqGK5NlZIueaDRgjPIVBVKSlUqjzYd4p45Sdd36YZIy7UVVwe3Kl7QzkGrfNNo6pjaltezba0i6ekyHqy8YxlrNp8crKezWF7XmhDTWcjIbCIVkhTCiSzsLzPSIb4vyJPchV9eFSejE5kOzCYpsjqlJsLc%2Fss9rky5ZwhOkCbsQtpMynHBALMv7QmfwMQy0LiRfhy%2FVHZrrynzMI60ztAGOqUBjnuu8diJNIXu%2B6L9eb2A%2Be3Cuykku2%2BokfUkLWRWxmn7slBTijgSzAJMQEaxTlG7o5vKGY1kmWk0SDsmcQchsHCwZ3vONqZuhFCexAZQyg4TKuQl9DAL4UPfNch7djkHo7b49dRUeDWzyQsK7X%2BxU2lkqQIji4k5%2FbjWZJ0wCL9DPBqyPqUFNDxy4Kcvl17DPphRor89xm%2Fv2POwbEYKu4MV5yAU&X-Amz-Signature=5f8766acb4b3b3e2a51bfd7d727bbe9a3e37e94081c716a6150bd808706c4a1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
