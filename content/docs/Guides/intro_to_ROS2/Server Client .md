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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVMSMIB5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdUMMPs4XnBeWe3%2FBvHrdEVVdWBVAG%2FtkfFfFKPppN2QIgCAlUKMQH34kw3%2Bzn3xIFQjBUf6rbgPDAvG%2BI1qwLsO4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyG9K2%2FAF1vKViEdircA963umpXjWOC8xUDFNuLhk2ma%2FfXm30R3%2BpwBIHzQe6UND5VX6TFJgK%2F2eK8H75idTIA%2F9YNoR2ee2HhRj%2FJtZI6tCwXDK%2FuxzFDnJhiSNhOj%2FpBV6DNPtir63Y8ElZjf9pMHa1y2%2B9rYGjUOB0pnJdXYjt3GHUkvGlKMO10DHjdU2NTKemLr%2FqiVR5E1PSBT%2FPrS8zB2pkwxMJax7A0%2BmSVSxhKtzyfglqB4PazKz1L6%2Fc1CflXeRZd%2BrSlGY%2F0EuromUe3SSxi29ufgC6afHbjXe1s1Y9bYMck3yviadwi%2FFv%2BfI7F69DjRsJe6PFjrHxhgDjSRK78%2BnqnTUZDZ%2FECJroOWKL2QBXr9LDrruHJtqi2a3OgWVX%2FbCawvFmtOQPMEjuMnNHJFxokVIMVZEjyp0O5wcOnBTc7tq%2Fkfx8Xc51XLt50D7T9pQWFJJQIQDP2g6CxX25j3Th2nGH53dvMD0%2FKsc4bLsIg687pf%2BioFbud5lsaYkjmiiq3hkG5n0LrXuOf6yvFQK1IoHWJcyTkj0GMeOmJ406hJrlJ7%2F7NB7A6LjnebJ6Vxo6FY6jnA%2FdntGN56rhKkIJVCwvLvHL61tEeQIBnV%2FfEFkvuJRVzYV5pq3z%2FJsxGE3iJMLGQ3L0GOqUB21RPOxXIxkngXu9hoAmzubB%2FSLS1DG2GIpOrQjI9Tv785s8k6i7wdfjHeCuDqScWKm1isx6ArqwsE3Sb%2Ff5t5aOEOzTVzdSy32aBMMlGhXC5TBG2D8dVOPWkv1lJKZFf4SNrX0CcBI%2BGyxaa7Hz8KNaMWj%2FQgQGDZjg2IK7ruFI8ghPFtigs0E8ExieVUXXzVM8v2Oed3pSpvzI%2Fp2FfMsQvPbvP&X-Amz-Signature=d5d1151879b4431e940accbdb3ff9aa9312f199593fd3051b4b5b3d7ea7e466b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVMSMIB5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdUMMPs4XnBeWe3%2FBvHrdEVVdWBVAG%2FtkfFfFKPppN2QIgCAlUKMQH34kw3%2Bzn3xIFQjBUf6rbgPDAvG%2BI1qwLsO4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyG9K2%2FAF1vKViEdircA963umpXjWOC8xUDFNuLhk2ma%2FfXm30R3%2BpwBIHzQe6UND5VX6TFJgK%2F2eK8H75idTIA%2F9YNoR2ee2HhRj%2FJtZI6tCwXDK%2FuxzFDnJhiSNhOj%2FpBV6DNPtir63Y8ElZjf9pMHa1y2%2B9rYGjUOB0pnJdXYjt3GHUkvGlKMO10DHjdU2NTKemLr%2FqiVR5E1PSBT%2FPrS8zB2pkwxMJax7A0%2BmSVSxhKtzyfglqB4PazKz1L6%2Fc1CflXeRZd%2BrSlGY%2F0EuromUe3SSxi29ufgC6afHbjXe1s1Y9bYMck3yviadwi%2FFv%2BfI7F69DjRsJe6PFjrHxhgDjSRK78%2BnqnTUZDZ%2FECJroOWKL2QBXr9LDrruHJtqi2a3OgWVX%2FbCawvFmtOQPMEjuMnNHJFxokVIMVZEjyp0O5wcOnBTc7tq%2Fkfx8Xc51XLt50D7T9pQWFJJQIQDP2g6CxX25j3Th2nGH53dvMD0%2FKsc4bLsIg687pf%2BioFbud5lsaYkjmiiq3hkG5n0LrXuOf6yvFQK1IoHWJcyTkj0GMeOmJ406hJrlJ7%2F7NB7A6LjnebJ6Vxo6FY6jnA%2FdntGN56rhKkIJVCwvLvHL61tEeQIBnV%2FfEFkvuJRVzYV5pq3z%2FJsxGE3iJMLGQ3L0GOqUB21RPOxXIxkngXu9hoAmzubB%2FSLS1DG2GIpOrQjI9Tv785s8k6i7wdfjHeCuDqScWKm1isx6ArqwsE3Sb%2Ff5t5aOEOzTVzdSy32aBMMlGhXC5TBG2D8dVOPWkv1lJKZFf4SNrX0CcBI%2BGyxaa7Hz8KNaMWj%2FQgQGDZjg2IK7ruFI8ghPFtigs0E8ExieVUXXzVM8v2Oed3pSpvzI%2Fp2FfMsQvPbvP&X-Amz-Signature=7adb0b0edb04c72d1dcfcad07680679ae45da85d681fc22712738809b83c7a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVMSMIB5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdUMMPs4XnBeWe3%2FBvHrdEVVdWBVAG%2FtkfFfFKPppN2QIgCAlUKMQH34kw3%2Bzn3xIFQjBUf6rbgPDAvG%2BI1qwLsO4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyG9K2%2FAF1vKViEdircA963umpXjWOC8xUDFNuLhk2ma%2FfXm30R3%2BpwBIHzQe6UND5VX6TFJgK%2F2eK8H75idTIA%2F9YNoR2ee2HhRj%2FJtZI6tCwXDK%2FuxzFDnJhiSNhOj%2FpBV6DNPtir63Y8ElZjf9pMHa1y2%2B9rYGjUOB0pnJdXYjt3GHUkvGlKMO10DHjdU2NTKemLr%2FqiVR5E1PSBT%2FPrS8zB2pkwxMJax7A0%2BmSVSxhKtzyfglqB4PazKz1L6%2Fc1CflXeRZd%2BrSlGY%2F0EuromUe3SSxi29ufgC6afHbjXe1s1Y9bYMck3yviadwi%2FFv%2BfI7F69DjRsJe6PFjrHxhgDjSRK78%2BnqnTUZDZ%2FECJroOWKL2QBXr9LDrruHJtqi2a3OgWVX%2FbCawvFmtOQPMEjuMnNHJFxokVIMVZEjyp0O5wcOnBTc7tq%2Fkfx8Xc51XLt50D7T9pQWFJJQIQDP2g6CxX25j3Th2nGH53dvMD0%2FKsc4bLsIg687pf%2BioFbud5lsaYkjmiiq3hkG5n0LrXuOf6yvFQK1IoHWJcyTkj0GMeOmJ406hJrlJ7%2F7NB7A6LjnebJ6Vxo6FY6jnA%2FdntGN56rhKkIJVCwvLvHL61tEeQIBnV%2FfEFkvuJRVzYV5pq3z%2FJsxGE3iJMLGQ3L0GOqUB21RPOxXIxkngXu9hoAmzubB%2FSLS1DG2GIpOrQjI9Tv785s8k6i7wdfjHeCuDqScWKm1isx6ArqwsE3Sb%2Ff5t5aOEOzTVzdSy32aBMMlGhXC5TBG2D8dVOPWkv1lJKZFf4SNrX0CcBI%2BGyxaa7Hz8KNaMWj%2FQgQGDZjg2IK7ruFI8ghPFtigs0E8ExieVUXXzVM8v2Oed3pSpvzI%2Fp2FfMsQvPbvP&X-Amz-Signature=95a22ab3eeaf4871e2582773a7f3540cca1cb09940e69212faa3d3135948c178&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVMSMIB5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdUMMPs4XnBeWe3%2FBvHrdEVVdWBVAG%2FtkfFfFKPppN2QIgCAlUKMQH34kw3%2Bzn3xIFQjBUf6rbgPDAvG%2BI1qwLsO4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyG9K2%2FAF1vKViEdircA963umpXjWOC8xUDFNuLhk2ma%2FfXm30R3%2BpwBIHzQe6UND5VX6TFJgK%2F2eK8H75idTIA%2F9YNoR2ee2HhRj%2FJtZI6tCwXDK%2FuxzFDnJhiSNhOj%2FpBV6DNPtir63Y8ElZjf9pMHa1y2%2B9rYGjUOB0pnJdXYjt3GHUkvGlKMO10DHjdU2NTKemLr%2FqiVR5E1PSBT%2FPrS8zB2pkwxMJax7A0%2BmSVSxhKtzyfglqB4PazKz1L6%2Fc1CflXeRZd%2BrSlGY%2F0EuromUe3SSxi29ufgC6afHbjXe1s1Y9bYMck3yviadwi%2FFv%2BfI7F69DjRsJe6PFjrHxhgDjSRK78%2BnqnTUZDZ%2FECJroOWKL2QBXr9LDrruHJtqi2a3OgWVX%2FbCawvFmtOQPMEjuMnNHJFxokVIMVZEjyp0O5wcOnBTc7tq%2Fkfx8Xc51XLt50D7T9pQWFJJQIQDP2g6CxX25j3Th2nGH53dvMD0%2FKsc4bLsIg687pf%2BioFbud5lsaYkjmiiq3hkG5n0LrXuOf6yvFQK1IoHWJcyTkj0GMeOmJ406hJrlJ7%2F7NB7A6LjnebJ6Vxo6FY6jnA%2FdntGN56rhKkIJVCwvLvHL61tEeQIBnV%2FfEFkvuJRVzYV5pq3z%2FJsxGE3iJMLGQ3L0GOqUB21RPOxXIxkngXu9hoAmzubB%2FSLS1DG2GIpOrQjI9Tv785s8k6i7wdfjHeCuDqScWKm1isx6ArqwsE3Sb%2Ff5t5aOEOzTVzdSy32aBMMlGhXC5TBG2D8dVOPWkv1lJKZFf4SNrX0CcBI%2BGyxaa7Hz8KNaMWj%2FQgQGDZjg2IK7ruFI8ghPFtigs0E8ExieVUXXzVM8v2Oed3pSpvzI%2Fp2FfMsQvPbvP&X-Amz-Signature=63e64d232fd279684e771bd566a8589e64a87fbf77afab5e6662b593a5659870&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVMSMIB5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdUMMPs4XnBeWe3%2FBvHrdEVVdWBVAG%2FtkfFfFKPppN2QIgCAlUKMQH34kw3%2Bzn3xIFQjBUf6rbgPDAvG%2BI1qwLsO4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyG9K2%2FAF1vKViEdircA963umpXjWOC8xUDFNuLhk2ma%2FfXm30R3%2BpwBIHzQe6UND5VX6TFJgK%2F2eK8H75idTIA%2F9YNoR2ee2HhRj%2FJtZI6tCwXDK%2FuxzFDnJhiSNhOj%2FpBV6DNPtir63Y8ElZjf9pMHa1y2%2B9rYGjUOB0pnJdXYjt3GHUkvGlKMO10DHjdU2NTKemLr%2FqiVR5E1PSBT%2FPrS8zB2pkwxMJax7A0%2BmSVSxhKtzyfglqB4PazKz1L6%2Fc1CflXeRZd%2BrSlGY%2F0EuromUe3SSxi29ufgC6afHbjXe1s1Y9bYMck3yviadwi%2FFv%2BfI7F69DjRsJe6PFjrHxhgDjSRK78%2BnqnTUZDZ%2FECJroOWKL2QBXr9LDrruHJtqi2a3OgWVX%2FbCawvFmtOQPMEjuMnNHJFxokVIMVZEjyp0O5wcOnBTc7tq%2Fkfx8Xc51XLt50D7T9pQWFJJQIQDP2g6CxX25j3Th2nGH53dvMD0%2FKsc4bLsIg687pf%2BioFbud5lsaYkjmiiq3hkG5n0LrXuOf6yvFQK1IoHWJcyTkj0GMeOmJ406hJrlJ7%2F7NB7A6LjnebJ6Vxo6FY6jnA%2FdntGN56rhKkIJVCwvLvHL61tEeQIBnV%2FfEFkvuJRVzYV5pq3z%2FJsxGE3iJMLGQ3L0GOqUB21RPOxXIxkngXu9hoAmzubB%2FSLS1DG2GIpOrQjI9Tv785s8k6i7wdfjHeCuDqScWKm1isx6ArqwsE3Sb%2Ff5t5aOEOzTVzdSy32aBMMlGhXC5TBG2D8dVOPWkv1lJKZFf4SNrX0CcBI%2BGyxaa7Hz8KNaMWj%2FQgQGDZjg2IK7ruFI8ghPFtigs0E8ExieVUXXzVM8v2Oed3pSpvzI%2Fp2FfMsQvPbvP&X-Amz-Signature=ff0e1fba8386d478617a0c4cf6ef63fa5bbd3809b2ae2491f1c5a526813fb053&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
