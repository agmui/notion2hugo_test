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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATRGGLF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICv89N2Qjity5HHOwqTWo8kottb6bLkL55FvTjZj1TLIAiEA4SLPTMb4oO09g6SBsTqv0yZ2mg4XkcebIFT4UXLEcjwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjetR8xgMtk9qWQLircA2zhA%2FEtgisLWIYnCEzskrqyTjd1NUN4NjZwU7ok%2FqGEqUuOrddL5iUmzW%2FjLWzI2c407cuJRvfyZoVoO6LM0TimN%2B%2FtNtX5wnFoOPksNW6RlzvEY49oAWgPrnZqBWtTp37%2FVhDOIeaJr2E2H03TPOoCq1rvJa7fomFl5wooEPyriMSP0%2Fj8zNEc%2BpSf5vh2Odhm4XhA5AGTc6ayT5QKGHq6Ohy%2B5bGXEF1PxwvoA6CJ0ccRf9wHEuKZJNRgUYRhuhasB0%2BhgQH418SG6I45vy%2F7y8DQ5wHdN3zVSN8UPDiCvVI46ingZgbY5ANL9BCQS2%2BPQ5hQ8QW1I6Qn9rp9QGLYceN7EvuhkDcuC4P53CVh1Yal%2FPpaLlSG2m%2FAKLKQ9b%2BLCOvDFmKgC0uUJW%2F1%2Bj5CWXoZYMKWQDkyuVLEtyYsYbHiycBQ2gWzNMzXJ7K6avUXpmY85%2FncBDKjHDGZc7bfVx14TZekj5pjnymn97mmzW77vqblmsT%2BD%2BdB3Jg1OfWmwA6MWawX%2F5uhuy234Gk4yfRDlr2%2FLr1CSuiloBsBMXQ25zz2ifdMngTosCmtAl04aPIpA%2BbFuWEZM60Xet1g4kDiwel6V5yIgsZWzB2YPTL77RtP5MxpR2CZMO%2FdqsEGOqUBOB5xTaWgHHZ%2Fbhe3nd9bn2V1vVHdzLAOo3k6rSzkgNasfSE%2BW%2F%2FTDNCwr%2BV%2FS3h%2Fu8bCimNvJZsWy4bLrO2%2BJIr1fSsKRwWMoE79CTMEB13UUWfzuy0ntZBAANXIb0uEYkIwmppU99dCUrjTj%2BG3sQyKZnQBP0%2FDWizPXDtYzV5kzswRSDpvqkZNdVhGJQygjEyMNMaaE0s6lFX7a19djDO%2BcKoj&X-Amz-Signature=e7b36633d7c8f1f03635b3517132ee1c3586a699f0e8facb696144702bd5b1a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATRGGLF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICv89N2Qjity5HHOwqTWo8kottb6bLkL55FvTjZj1TLIAiEA4SLPTMb4oO09g6SBsTqv0yZ2mg4XkcebIFT4UXLEcjwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjetR8xgMtk9qWQLircA2zhA%2FEtgisLWIYnCEzskrqyTjd1NUN4NjZwU7ok%2FqGEqUuOrddL5iUmzW%2FjLWzI2c407cuJRvfyZoVoO6LM0TimN%2B%2FtNtX5wnFoOPksNW6RlzvEY49oAWgPrnZqBWtTp37%2FVhDOIeaJr2E2H03TPOoCq1rvJa7fomFl5wooEPyriMSP0%2Fj8zNEc%2BpSf5vh2Odhm4XhA5AGTc6ayT5QKGHq6Ohy%2B5bGXEF1PxwvoA6CJ0ccRf9wHEuKZJNRgUYRhuhasB0%2BhgQH418SG6I45vy%2F7y8DQ5wHdN3zVSN8UPDiCvVI46ingZgbY5ANL9BCQS2%2BPQ5hQ8QW1I6Qn9rp9QGLYceN7EvuhkDcuC4P53CVh1Yal%2FPpaLlSG2m%2FAKLKQ9b%2BLCOvDFmKgC0uUJW%2F1%2Bj5CWXoZYMKWQDkyuVLEtyYsYbHiycBQ2gWzNMzXJ7K6avUXpmY85%2FncBDKjHDGZc7bfVx14TZekj5pjnymn97mmzW77vqblmsT%2BD%2BdB3Jg1OfWmwA6MWawX%2F5uhuy234Gk4yfRDlr2%2FLr1CSuiloBsBMXQ25zz2ifdMngTosCmtAl04aPIpA%2BbFuWEZM60Xet1g4kDiwel6V5yIgsZWzB2YPTL77RtP5MxpR2CZMO%2FdqsEGOqUBOB5xTaWgHHZ%2Fbhe3nd9bn2V1vVHdzLAOo3k6rSzkgNasfSE%2BW%2F%2FTDNCwr%2BV%2FS3h%2Fu8bCimNvJZsWy4bLrO2%2BJIr1fSsKRwWMoE79CTMEB13UUWfzuy0ntZBAANXIb0uEYkIwmppU99dCUrjTj%2BG3sQyKZnQBP0%2FDWizPXDtYzV5kzswRSDpvqkZNdVhGJQygjEyMNMaaE0s6lFX7a19djDO%2BcKoj&X-Amz-Signature=c18afae9fe77700ca6fae58220e2d10fdd9aba6cb4e554f6fed64bc6c561f6b5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATRGGLF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICv89N2Qjity5HHOwqTWo8kottb6bLkL55FvTjZj1TLIAiEA4SLPTMb4oO09g6SBsTqv0yZ2mg4XkcebIFT4UXLEcjwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjetR8xgMtk9qWQLircA2zhA%2FEtgisLWIYnCEzskrqyTjd1NUN4NjZwU7ok%2FqGEqUuOrddL5iUmzW%2FjLWzI2c407cuJRvfyZoVoO6LM0TimN%2B%2FtNtX5wnFoOPksNW6RlzvEY49oAWgPrnZqBWtTp37%2FVhDOIeaJr2E2H03TPOoCq1rvJa7fomFl5wooEPyriMSP0%2Fj8zNEc%2BpSf5vh2Odhm4XhA5AGTc6ayT5QKGHq6Ohy%2B5bGXEF1PxwvoA6CJ0ccRf9wHEuKZJNRgUYRhuhasB0%2BhgQH418SG6I45vy%2F7y8DQ5wHdN3zVSN8UPDiCvVI46ingZgbY5ANL9BCQS2%2BPQ5hQ8QW1I6Qn9rp9QGLYceN7EvuhkDcuC4P53CVh1Yal%2FPpaLlSG2m%2FAKLKQ9b%2BLCOvDFmKgC0uUJW%2F1%2Bj5CWXoZYMKWQDkyuVLEtyYsYbHiycBQ2gWzNMzXJ7K6avUXpmY85%2FncBDKjHDGZc7bfVx14TZekj5pjnymn97mmzW77vqblmsT%2BD%2BdB3Jg1OfWmwA6MWawX%2F5uhuy234Gk4yfRDlr2%2FLr1CSuiloBsBMXQ25zz2ifdMngTosCmtAl04aPIpA%2BbFuWEZM60Xet1g4kDiwel6V5yIgsZWzB2YPTL77RtP5MxpR2CZMO%2FdqsEGOqUBOB5xTaWgHHZ%2Fbhe3nd9bn2V1vVHdzLAOo3k6rSzkgNasfSE%2BW%2F%2FTDNCwr%2BV%2FS3h%2Fu8bCimNvJZsWy4bLrO2%2BJIr1fSsKRwWMoE79CTMEB13UUWfzuy0ntZBAANXIb0uEYkIwmppU99dCUrjTj%2BG3sQyKZnQBP0%2FDWizPXDtYzV5kzswRSDpvqkZNdVhGJQygjEyMNMaaE0s6lFX7a19djDO%2BcKoj&X-Amz-Signature=72daeda73f69d7797d612c50d3073e148dffa9b2d3a6487f76e1dd2d39a6f351&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATRGGLF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICv89N2Qjity5HHOwqTWo8kottb6bLkL55FvTjZj1TLIAiEA4SLPTMb4oO09g6SBsTqv0yZ2mg4XkcebIFT4UXLEcjwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjetR8xgMtk9qWQLircA2zhA%2FEtgisLWIYnCEzskrqyTjd1NUN4NjZwU7ok%2FqGEqUuOrddL5iUmzW%2FjLWzI2c407cuJRvfyZoVoO6LM0TimN%2B%2FtNtX5wnFoOPksNW6RlzvEY49oAWgPrnZqBWtTp37%2FVhDOIeaJr2E2H03TPOoCq1rvJa7fomFl5wooEPyriMSP0%2Fj8zNEc%2BpSf5vh2Odhm4XhA5AGTc6ayT5QKGHq6Ohy%2B5bGXEF1PxwvoA6CJ0ccRf9wHEuKZJNRgUYRhuhasB0%2BhgQH418SG6I45vy%2F7y8DQ5wHdN3zVSN8UPDiCvVI46ingZgbY5ANL9BCQS2%2BPQ5hQ8QW1I6Qn9rp9QGLYceN7EvuhkDcuC4P53CVh1Yal%2FPpaLlSG2m%2FAKLKQ9b%2BLCOvDFmKgC0uUJW%2F1%2Bj5CWXoZYMKWQDkyuVLEtyYsYbHiycBQ2gWzNMzXJ7K6avUXpmY85%2FncBDKjHDGZc7bfVx14TZekj5pjnymn97mmzW77vqblmsT%2BD%2BdB3Jg1OfWmwA6MWawX%2F5uhuy234Gk4yfRDlr2%2FLr1CSuiloBsBMXQ25zz2ifdMngTosCmtAl04aPIpA%2BbFuWEZM60Xet1g4kDiwel6V5yIgsZWzB2YPTL77RtP5MxpR2CZMO%2FdqsEGOqUBOB5xTaWgHHZ%2Fbhe3nd9bn2V1vVHdzLAOo3k6rSzkgNasfSE%2BW%2F%2FTDNCwr%2BV%2FS3h%2Fu8bCimNvJZsWy4bLrO2%2BJIr1fSsKRwWMoE79CTMEB13UUWfzuy0ntZBAANXIb0uEYkIwmppU99dCUrjTj%2BG3sQyKZnQBP0%2FDWizPXDtYzV5kzswRSDpvqkZNdVhGJQygjEyMNMaaE0s6lFX7a19djDO%2BcKoj&X-Amz-Signature=2e7e266bd2d69b2518cb7f724851273a07ad5e3752cbb850da6fa433a537833a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATRGGLF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICv89N2Qjity5HHOwqTWo8kottb6bLkL55FvTjZj1TLIAiEA4SLPTMb4oO09g6SBsTqv0yZ2mg4XkcebIFT4UXLEcjwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjetR8xgMtk9qWQLircA2zhA%2FEtgisLWIYnCEzskrqyTjd1NUN4NjZwU7ok%2FqGEqUuOrddL5iUmzW%2FjLWzI2c407cuJRvfyZoVoO6LM0TimN%2B%2FtNtX5wnFoOPksNW6RlzvEY49oAWgPrnZqBWtTp37%2FVhDOIeaJr2E2H03TPOoCq1rvJa7fomFl5wooEPyriMSP0%2Fj8zNEc%2BpSf5vh2Odhm4XhA5AGTc6ayT5QKGHq6Ohy%2B5bGXEF1PxwvoA6CJ0ccRf9wHEuKZJNRgUYRhuhasB0%2BhgQH418SG6I45vy%2F7y8DQ5wHdN3zVSN8UPDiCvVI46ingZgbY5ANL9BCQS2%2BPQ5hQ8QW1I6Qn9rp9QGLYceN7EvuhkDcuC4P53CVh1Yal%2FPpaLlSG2m%2FAKLKQ9b%2BLCOvDFmKgC0uUJW%2F1%2Bj5CWXoZYMKWQDkyuVLEtyYsYbHiycBQ2gWzNMzXJ7K6avUXpmY85%2FncBDKjHDGZc7bfVx14TZekj5pjnymn97mmzW77vqblmsT%2BD%2BdB3Jg1OfWmwA6MWawX%2F5uhuy234Gk4yfRDlr2%2FLr1CSuiloBsBMXQ25zz2ifdMngTosCmtAl04aPIpA%2BbFuWEZM60Xet1g4kDiwel6V5yIgsZWzB2YPTL77RtP5MxpR2CZMO%2FdqsEGOqUBOB5xTaWgHHZ%2Fbhe3nd9bn2V1vVHdzLAOo3k6rSzkgNasfSE%2BW%2F%2FTDNCwr%2BV%2FS3h%2Fu8bCimNvJZsWy4bLrO2%2BJIr1fSsKRwWMoE79CTMEB13UUWfzuy0ntZBAANXIb0uEYkIwmppU99dCUrjTj%2BG3sQyKZnQBP0%2FDWizPXDtYzV5kzswRSDpvqkZNdVhGJQygjEyMNMaaE0s6lFX7a19djDO%2BcKoj&X-Amz-Signature=5b8a668c7d74ba31144a35fdab655eaf6c01a4ae4dea6d6fb6255e0525dbda58&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
