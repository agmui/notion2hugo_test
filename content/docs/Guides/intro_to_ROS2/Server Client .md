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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DMYLBJ6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCL2VXqwmjMgGp1PAIte1F%2FS%2BQI5ef9PC9Sf5%2BXYrb00QIgOrSsZns4e%2FUjcOYzhDIUNO%2FQ9idWwzq03KDtpesrIm4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIs0u%2F%2Fi6HDJII7YQircA2mXmHaZhJpiy5MKDTctMizrBRRBOJp8P7Sd1dQCiun7d6Z635%2FDaM7UUUblPJfe9QGF%2BShyg5qXPPuM8q0thRlpqowu5q3USYx5Xk11EDyOEaZKEay09HjotyY3s%2B7yEyqqH3qQZkCiMEgCHpynrstQlBTgjUHwa%2F4OBgvRgoOexZgSvjHSF20mwWfPXHwis8ULkeFnNvJrSglM6Wp1iLlu0%2BcS1QKeHO9YURRIg1hBF3kAzTmIGCihNHyOL2as43kbbh9ArPKz2nls5rXj1eAqtFA5hy%2FlC%2FvApZzY9w%2ByCXhCLrh8EdWenPTC5zLWwXu%2F2vtiO7%2BQxNdRnKUzIYgt6za5y2GzUurbt01H9Z%2FXAawFuN1vKF8VOcHLXabQsfm8d%2B88gVW8qMO01pA3h7j8daF0ARxSndI4JMM88scMk73GvWWIKgMvs7pi9aQmETQCJWV89whhFIZvmdhhf9In7TOHrnn2aKKL87SbLcYr8mYQKqGzE192i483e4W68oXRe9jYTpEdXaK7pYUuUV2WMfg%2BnY0E1tiXAS9j943lFNLu3rDXNBdkmLCQypH5B0n3%2FYCeUyI0cQJhw9FmUXQIXfdTWSlRzq%2Biy%2FQU76BBzyAJQf08Q4oHbWt%2FMMbpp8AGOqUBC0GOtT0HBctAMCmt%2FP4FJGbqg8TOXLCBrWRbdBsLFtEmVfXFempVcPNE7eihD9WWtqEHYDKKHgn2eI%2F9hDxaR9gOctcNFYQDli5i84%2FdP6pcAw31dYU0iJHQ2s71KMyRrhkte45ff2y9ISs8xDGL%2FFzqZ1v6Jc8uBjOVl%2BtrYPKgKCwWrDwA2BFaN95FQdmBL3e0hfxwFv7y5UCRO2O2lw2w%2FZkW&X-Amz-Signature=40895031a9cf3c98451f2804253521ef6db6940d482376828d3fb142871a83c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DMYLBJ6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCL2VXqwmjMgGp1PAIte1F%2FS%2BQI5ef9PC9Sf5%2BXYrb00QIgOrSsZns4e%2FUjcOYzhDIUNO%2FQ9idWwzq03KDtpesrIm4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIs0u%2F%2Fi6HDJII7YQircA2mXmHaZhJpiy5MKDTctMizrBRRBOJp8P7Sd1dQCiun7d6Z635%2FDaM7UUUblPJfe9QGF%2BShyg5qXPPuM8q0thRlpqowu5q3USYx5Xk11EDyOEaZKEay09HjotyY3s%2B7yEyqqH3qQZkCiMEgCHpynrstQlBTgjUHwa%2F4OBgvRgoOexZgSvjHSF20mwWfPXHwis8ULkeFnNvJrSglM6Wp1iLlu0%2BcS1QKeHO9YURRIg1hBF3kAzTmIGCihNHyOL2as43kbbh9ArPKz2nls5rXj1eAqtFA5hy%2FlC%2FvApZzY9w%2ByCXhCLrh8EdWenPTC5zLWwXu%2F2vtiO7%2BQxNdRnKUzIYgt6za5y2GzUurbt01H9Z%2FXAawFuN1vKF8VOcHLXabQsfm8d%2B88gVW8qMO01pA3h7j8daF0ARxSndI4JMM88scMk73GvWWIKgMvs7pi9aQmETQCJWV89whhFIZvmdhhf9In7TOHrnn2aKKL87SbLcYr8mYQKqGzE192i483e4W68oXRe9jYTpEdXaK7pYUuUV2WMfg%2BnY0E1tiXAS9j943lFNLu3rDXNBdkmLCQypH5B0n3%2FYCeUyI0cQJhw9FmUXQIXfdTWSlRzq%2Biy%2FQU76BBzyAJQf08Q4oHbWt%2FMMbpp8AGOqUBC0GOtT0HBctAMCmt%2FP4FJGbqg8TOXLCBrWRbdBsLFtEmVfXFempVcPNE7eihD9WWtqEHYDKKHgn2eI%2F9hDxaR9gOctcNFYQDli5i84%2FdP6pcAw31dYU0iJHQ2s71KMyRrhkte45ff2y9ISs8xDGL%2FFzqZ1v6Jc8uBjOVl%2BtrYPKgKCwWrDwA2BFaN95FQdmBL3e0hfxwFv7y5UCRO2O2lw2w%2FZkW&X-Amz-Signature=bd5cd86a756181e31ff4aa4a2159e426232e294b873eddf4165112828456f418&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DMYLBJ6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCL2VXqwmjMgGp1PAIte1F%2FS%2BQI5ef9PC9Sf5%2BXYrb00QIgOrSsZns4e%2FUjcOYzhDIUNO%2FQ9idWwzq03KDtpesrIm4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIs0u%2F%2Fi6HDJII7YQircA2mXmHaZhJpiy5MKDTctMizrBRRBOJp8P7Sd1dQCiun7d6Z635%2FDaM7UUUblPJfe9QGF%2BShyg5qXPPuM8q0thRlpqowu5q3USYx5Xk11EDyOEaZKEay09HjotyY3s%2B7yEyqqH3qQZkCiMEgCHpynrstQlBTgjUHwa%2F4OBgvRgoOexZgSvjHSF20mwWfPXHwis8ULkeFnNvJrSglM6Wp1iLlu0%2BcS1QKeHO9YURRIg1hBF3kAzTmIGCihNHyOL2as43kbbh9ArPKz2nls5rXj1eAqtFA5hy%2FlC%2FvApZzY9w%2ByCXhCLrh8EdWenPTC5zLWwXu%2F2vtiO7%2BQxNdRnKUzIYgt6za5y2GzUurbt01H9Z%2FXAawFuN1vKF8VOcHLXabQsfm8d%2B88gVW8qMO01pA3h7j8daF0ARxSndI4JMM88scMk73GvWWIKgMvs7pi9aQmETQCJWV89whhFIZvmdhhf9In7TOHrnn2aKKL87SbLcYr8mYQKqGzE192i483e4W68oXRe9jYTpEdXaK7pYUuUV2WMfg%2BnY0E1tiXAS9j943lFNLu3rDXNBdkmLCQypH5B0n3%2FYCeUyI0cQJhw9FmUXQIXfdTWSlRzq%2Biy%2FQU76BBzyAJQf08Q4oHbWt%2FMMbpp8AGOqUBC0GOtT0HBctAMCmt%2FP4FJGbqg8TOXLCBrWRbdBsLFtEmVfXFempVcPNE7eihD9WWtqEHYDKKHgn2eI%2F9hDxaR9gOctcNFYQDli5i84%2FdP6pcAw31dYU0iJHQ2s71KMyRrhkte45ff2y9ISs8xDGL%2FFzqZ1v6Jc8uBjOVl%2BtrYPKgKCwWrDwA2BFaN95FQdmBL3e0hfxwFv7y5UCRO2O2lw2w%2FZkW&X-Amz-Signature=79a8fef19e375f6c705c3a00fe80d7178b74888e7914e54df58674ae1fc05a94&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DMYLBJ6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCL2VXqwmjMgGp1PAIte1F%2FS%2BQI5ef9PC9Sf5%2BXYrb00QIgOrSsZns4e%2FUjcOYzhDIUNO%2FQ9idWwzq03KDtpesrIm4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIs0u%2F%2Fi6HDJII7YQircA2mXmHaZhJpiy5MKDTctMizrBRRBOJp8P7Sd1dQCiun7d6Z635%2FDaM7UUUblPJfe9QGF%2BShyg5qXPPuM8q0thRlpqowu5q3USYx5Xk11EDyOEaZKEay09HjotyY3s%2B7yEyqqH3qQZkCiMEgCHpynrstQlBTgjUHwa%2F4OBgvRgoOexZgSvjHSF20mwWfPXHwis8ULkeFnNvJrSglM6Wp1iLlu0%2BcS1QKeHO9YURRIg1hBF3kAzTmIGCihNHyOL2as43kbbh9ArPKz2nls5rXj1eAqtFA5hy%2FlC%2FvApZzY9w%2ByCXhCLrh8EdWenPTC5zLWwXu%2F2vtiO7%2BQxNdRnKUzIYgt6za5y2GzUurbt01H9Z%2FXAawFuN1vKF8VOcHLXabQsfm8d%2B88gVW8qMO01pA3h7j8daF0ARxSndI4JMM88scMk73GvWWIKgMvs7pi9aQmETQCJWV89whhFIZvmdhhf9In7TOHrnn2aKKL87SbLcYr8mYQKqGzE192i483e4W68oXRe9jYTpEdXaK7pYUuUV2WMfg%2BnY0E1tiXAS9j943lFNLu3rDXNBdkmLCQypH5B0n3%2FYCeUyI0cQJhw9FmUXQIXfdTWSlRzq%2Biy%2FQU76BBzyAJQf08Q4oHbWt%2FMMbpp8AGOqUBC0GOtT0HBctAMCmt%2FP4FJGbqg8TOXLCBrWRbdBsLFtEmVfXFempVcPNE7eihD9WWtqEHYDKKHgn2eI%2F9hDxaR9gOctcNFYQDli5i84%2FdP6pcAw31dYU0iJHQ2s71KMyRrhkte45ff2y9ISs8xDGL%2FFzqZ1v6Jc8uBjOVl%2BtrYPKgKCwWrDwA2BFaN95FQdmBL3e0hfxwFv7y5UCRO2O2lw2w%2FZkW&X-Amz-Signature=6fed0652c7e3c7c2f898f445bdce867ad7537b5b2662c90eedc17e1ad7dc0c18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DMYLBJ6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCL2VXqwmjMgGp1PAIte1F%2FS%2BQI5ef9PC9Sf5%2BXYrb00QIgOrSsZns4e%2FUjcOYzhDIUNO%2FQ9idWwzq03KDtpesrIm4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIs0u%2F%2Fi6HDJII7YQircA2mXmHaZhJpiy5MKDTctMizrBRRBOJp8P7Sd1dQCiun7d6Z635%2FDaM7UUUblPJfe9QGF%2BShyg5qXPPuM8q0thRlpqowu5q3USYx5Xk11EDyOEaZKEay09HjotyY3s%2B7yEyqqH3qQZkCiMEgCHpynrstQlBTgjUHwa%2F4OBgvRgoOexZgSvjHSF20mwWfPXHwis8ULkeFnNvJrSglM6Wp1iLlu0%2BcS1QKeHO9YURRIg1hBF3kAzTmIGCihNHyOL2as43kbbh9ArPKz2nls5rXj1eAqtFA5hy%2FlC%2FvApZzY9w%2ByCXhCLrh8EdWenPTC5zLWwXu%2F2vtiO7%2BQxNdRnKUzIYgt6za5y2GzUurbt01H9Z%2FXAawFuN1vKF8VOcHLXabQsfm8d%2B88gVW8qMO01pA3h7j8daF0ARxSndI4JMM88scMk73GvWWIKgMvs7pi9aQmETQCJWV89whhFIZvmdhhf9In7TOHrnn2aKKL87SbLcYr8mYQKqGzE192i483e4W68oXRe9jYTpEdXaK7pYUuUV2WMfg%2BnY0E1tiXAS9j943lFNLu3rDXNBdkmLCQypH5B0n3%2FYCeUyI0cQJhw9FmUXQIXfdTWSlRzq%2Biy%2FQU76BBzyAJQf08Q4oHbWt%2FMMbpp8AGOqUBC0GOtT0HBctAMCmt%2FP4FJGbqg8TOXLCBrWRbdBsLFtEmVfXFempVcPNE7eihD9WWtqEHYDKKHgn2eI%2F9hDxaR9gOctcNFYQDli5i84%2FdP6pcAw31dYU0iJHQ2s71KMyRrhkte45ff2y9ISs8xDGL%2FFzqZ1v6Jc8uBjOVl%2BtrYPKgKCwWrDwA2BFaN95FQdmBL3e0hfxwFv7y5UCRO2O2lw2w%2FZkW&X-Amz-Signature=8457a4e2d93c6757c83a482c73aafefdbe389c5f2a5c3f66666d20fde9ae7af7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
