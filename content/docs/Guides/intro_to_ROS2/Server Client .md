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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLSDVATB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHXS6UY5pi10XZtOHvd%2FpjIbaf5rgFgOXIplEcCPEmwwIgb07LhPswpZZQORLqJ9fAzv4ciw7BT9%2BV1GX1AgRN2tMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDN%2BLTwjzveZvK8ebVCrcA39R%2Fs851e3yyMzF0OHEWsUV0ehyEDQ%2FRQPIFWl%2BRoTT7Wzp3t%2BreL6GrCMU29OGggnsXIeO9w56Lq9Sdcz%2BJQCPcHCPkWsZl7Mhe2Gn1UKQcqsFQWxVKCz6y6LWjJ3AEENcsxUgODrGW2aW5Q%2FBDiyrWtZzH%2Fz1wXKtOIJQLNOIg9K6EfT3VFFOl25tKay6tFopJp6QKJFnr591M39U%2Fppmcz7YH56v3t%2BDovJCJ1vNPwwrIfNKiNrtizQ9X9uHQZ%2FsGqV59Et4%2B0W3LWFpNRg7ar%2FJFFy2266Wfpi%2BbB%2F8ZdDujDnFwPa8UvVsRPhDVwCCZUzG%2FVlhVGvchket0mVGShPUsTsjdG9y9v15KBeH%2BoSGzegRd%2Bn9J57egszib8tPoS46kGCvV%2FQfH4LVm14iWqw0o4jKugU0wczDrm07qyEdviIWHcETvk3TR5X0j%2Bs1gbS8ttNz5PMvs3q32dpnYohKVQ2SIEsbr6Gm%2B16nrUmAr3lOFhLSabnWLa8NvJakVlhL11JeoD%2BHQs56UujbypWzDI0H6l59h%2F7542mPf9SeqK1cLJ%2F3rumSHEuJifza6Ui%2BIvzoZmqySMcHXdJ%2FAmINCTKmQodEPzeFtdGX2Y40BAXeviMSfTugMIaWz8MGOqUBW%2FCPGHNoQJaAIgYDtqE1Hh5d18KBwevOBw2y9yGNCEKRuPRPDalou0H2HPZ5Q0%2F%2FdHqNQpYyVkZVjD8Gfesbpdr39QCuaQOjwbkyZ%2Bksct3xEGHG%2Fz43RdJbszVrWLjbdm31M7mLV%2FJ26t2gb%2Fm4J8gPxDqZvFGA44Vy8Oy%2BFLMxBf%2BPnngEBnzSVhkLeyGdJ8J%2BoXHbX6oumwV4cROurlh8CgGs&X-Amz-Signature=92b07b527afde273e41848e4cab437695dff057f72a4c037241ae036325034fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLSDVATB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHXS6UY5pi10XZtOHvd%2FpjIbaf5rgFgOXIplEcCPEmwwIgb07LhPswpZZQORLqJ9fAzv4ciw7BT9%2BV1GX1AgRN2tMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDN%2BLTwjzveZvK8ebVCrcA39R%2Fs851e3yyMzF0OHEWsUV0ehyEDQ%2FRQPIFWl%2BRoTT7Wzp3t%2BreL6GrCMU29OGggnsXIeO9w56Lq9Sdcz%2BJQCPcHCPkWsZl7Mhe2Gn1UKQcqsFQWxVKCz6y6LWjJ3AEENcsxUgODrGW2aW5Q%2FBDiyrWtZzH%2Fz1wXKtOIJQLNOIg9K6EfT3VFFOl25tKay6tFopJp6QKJFnr591M39U%2Fppmcz7YH56v3t%2BDovJCJ1vNPwwrIfNKiNrtizQ9X9uHQZ%2FsGqV59Et4%2B0W3LWFpNRg7ar%2FJFFy2266Wfpi%2BbB%2F8ZdDujDnFwPa8UvVsRPhDVwCCZUzG%2FVlhVGvchket0mVGShPUsTsjdG9y9v15KBeH%2BoSGzegRd%2Bn9J57egszib8tPoS46kGCvV%2FQfH4LVm14iWqw0o4jKugU0wczDrm07qyEdviIWHcETvk3TR5X0j%2Bs1gbS8ttNz5PMvs3q32dpnYohKVQ2SIEsbr6Gm%2B16nrUmAr3lOFhLSabnWLa8NvJakVlhL11JeoD%2BHQs56UujbypWzDI0H6l59h%2F7542mPf9SeqK1cLJ%2F3rumSHEuJifza6Ui%2BIvzoZmqySMcHXdJ%2FAmINCTKmQodEPzeFtdGX2Y40BAXeviMSfTugMIaWz8MGOqUBW%2FCPGHNoQJaAIgYDtqE1Hh5d18KBwevOBw2y9yGNCEKRuPRPDalou0H2HPZ5Q0%2F%2FdHqNQpYyVkZVjD8Gfesbpdr39QCuaQOjwbkyZ%2Bksct3xEGHG%2Fz43RdJbszVrWLjbdm31M7mLV%2FJ26t2gb%2Fm4J8gPxDqZvFGA44Vy8Oy%2BFLMxBf%2BPnngEBnzSVhkLeyGdJ8J%2BoXHbX6oumwV4cROurlh8CgGs&X-Amz-Signature=2123d29db5db424eac3ff88b26e1976ea5ede8aca4e45a094c2bbf23fdb7e24e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLSDVATB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHXS6UY5pi10XZtOHvd%2FpjIbaf5rgFgOXIplEcCPEmwwIgb07LhPswpZZQORLqJ9fAzv4ciw7BT9%2BV1GX1AgRN2tMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDN%2BLTwjzveZvK8ebVCrcA39R%2Fs851e3yyMzF0OHEWsUV0ehyEDQ%2FRQPIFWl%2BRoTT7Wzp3t%2BreL6GrCMU29OGggnsXIeO9w56Lq9Sdcz%2BJQCPcHCPkWsZl7Mhe2Gn1UKQcqsFQWxVKCz6y6LWjJ3AEENcsxUgODrGW2aW5Q%2FBDiyrWtZzH%2Fz1wXKtOIJQLNOIg9K6EfT3VFFOl25tKay6tFopJp6QKJFnr591M39U%2Fppmcz7YH56v3t%2BDovJCJ1vNPwwrIfNKiNrtizQ9X9uHQZ%2FsGqV59Et4%2B0W3LWFpNRg7ar%2FJFFy2266Wfpi%2BbB%2F8ZdDujDnFwPa8UvVsRPhDVwCCZUzG%2FVlhVGvchket0mVGShPUsTsjdG9y9v15KBeH%2BoSGzegRd%2Bn9J57egszib8tPoS46kGCvV%2FQfH4LVm14iWqw0o4jKugU0wczDrm07qyEdviIWHcETvk3TR5X0j%2Bs1gbS8ttNz5PMvs3q32dpnYohKVQ2SIEsbr6Gm%2B16nrUmAr3lOFhLSabnWLa8NvJakVlhL11JeoD%2BHQs56UujbypWzDI0H6l59h%2F7542mPf9SeqK1cLJ%2F3rumSHEuJifza6Ui%2BIvzoZmqySMcHXdJ%2FAmINCTKmQodEPzeFtdGX2Y40BAXeviMSfTugMIaWz8MGOqUBW%2FCPGHNoQJaAIgYDtqE1Hh5d18KBwevOBw2y9yGNCEKRuPRPDalou0H2HPZ5Q0%2F%2FdHqNQpYyVkZVjD8Gfesbpdr39QCuaQOjwbkyZ%2Bksct3xEGHG%2Fz43RdJbszVrWLjbdm31M7mLV%2FJ26t2gb%2Fm4J8gPxDqZvFGA44Vy8Oy%2BFLMxBf%2BPnngEBnzSVhkLeyGdJ8J%2BoXHbX6oumwV4cROurlh8CgGs&X-Amz-Signature=a79c6bf4f92024fb7100d4085eb177354cdd1aebac88bd991d4f7f912e894ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLSDVATB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHXS6UY5pi10XZtOHvd%2FpjIbaf5rgFgOXIplEcCPEmwwIgb07LhPswpZZQORLqJ9fAzv4ciw7BT9%2BV1GX1AgRN2tMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDN%2BLTwjzveZvK8ebVCrcA39R%2Fs851e3yyMzF0OHEWsUV0ehyEDQ%2FRQPIFWl%2BRoTT7Wzp3t%2BreL6GrCMU29OGggnsXIeO9w56Lq9Sdcz%2BJQCPcHCPkWsZl7Mhe2Gn1UKQcqsFQWxVKCz6y6LWjJ3AEENcsxUgODrGW2aW5Q%2FBDiyrWtZzH%2Fz1wXKtOIJQLNOIg9K6EfT3VFFOl25tKay6tFopJp6QKJFnr591M39U%2Fppmcz7YH56v3t%2BDovJCJ1vNPwwrIfNKiNrtizQ9X9uHQZ%2FsGqV59Et4%2B0W3LWFpNRg7ar%2FJFFy2266Wfpi%2BbB%2F8ZdDujDnFwPa8UvVsRPhDVwCCZUzG%2FVlhVGvchket0mVGShPUsTsjdG9y9v15KBeH%2BoSGzegRd%2Bn9J57egszib8tPoS46kGCvV%2FQfH4LVm14iWqw0o4jKugU0wczDrm07qyEdviIWHcETvk3TR5X0j%2Bs1gbS8ttNz5PMvs3q32dpnYohKVQ2SIEsbr6Gm%2B16nrUmAr3lOFhLSabnWLa8NvJakVlhL11JeoD%2BHQs56UujbypWzDI0H6l59h%2F7542mPf9SeqK1cLJ%2F3rumSHEuJifza6Ui%2BIvzoZmqySMcHXdJ%2FAmINCTKmQodEPzeFtdGX2Y40BAXeviMSfTugMIaWz8MGOqUBW%2FCPGHNoQJaAIgYDtqE1Hh5d18KBwevOBw2y9yGNCEKRuPRPDalou0H2HPZ5Q0%2F%2FdHqNQpYyVkZVjD8Gfesbpdr39QCuaQOjwbkyZ%2Bksct3xEGHG%2Fz43RdJbszVrWLjbdm31M7mLV%2FJ26t2gb%2Fm4J8gPxDqZvFGA44Vy8Oy%2BFLMxBf%2BPnngEBnzSVhkLeyGdJ8J%2BoXHbX6oumwV4cROurlh8CgGs&X-Amz-Signature=f07989d43cd4e459c7db0bfb3df064268f06b2b3a705a39014dcda1497a77d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLSDVATB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHXS6UY5pi10XZtOHvd%2FpjIbaf5rgFgOXIplEcCPEmwwIgb07LhPswpZZQORLqJ9fAzv4ciw7BT9%2BV1GX1AgRN2tMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDN%2BLTwjzveZvK8ebVCrcA39R%2Fs851e3yyMzF0OHEWsUV0ehyEDQ%2FRQPIFWl%2BRoTT7Wzp3t%2BreL6GrCMU29OGggnsXIeO9w56Lq9Sdcz%2BJQCPcHCPkWsZl7Mhe2Gn1UKQcqsFQWxVKCz6y6LWjJ3AEENcsxUgODrGW2aW5Q%2FBDiyrWtZzH%2Fz1wXKtOIJQLNOIg9K6EfT3VFFOl25tKay6tFopJp6QKJFnr591M39U%2Fppmcz7YH56v3t%2BDovJCJ1vNPwwrIfNKiNrtizQ9X9uHQZ%2FsGqV59Et4%2B0W3LWFpNRg7ar%2FJFFy2266Wfpi%2BbB%2F8ZdDujDnFwPa8UvVsRPhDVwCCZUzG%2FVlhVGvchket0mVGShPUsTsjdG9y9v15KBeH%2BoSGzegRd%2Bn9J57egszib8tPoS46kGCvV%2FQfH4LVm14iWqw0o4jKugU0wczDrm07qyEdviIWHcETvk3TR5X0j%2Bs1gbS8ttNz5PMvs3q32dpnYohKVQ2SIEsbr6Gm%2B16nrUmAr3lOFhLSabnWLa8NvJakVlhL11JeoD%2BHQs56UujbypWzDI0H6l59h%2F7542mPf9SeqK1cLJ%2F3rumSHEuJifza6Ui%2BIvzoZmqySMcHXdJ%2FAmINCTKmQodEPzeFtdGX2Y40BAXeviMSfTugMIaWz8MGOqUBW%2FCPGHNoQJaAIgYDtqE1Hh5d18KBwevOBw2y9yGNCEKRuPRPDalou0H2HPZ5Q0%2F%2FdHqNQpYyVkZVjD8Gfesbpdr39QCuaQOjwbkyZ%2Bksct3xEGHG%2Fz43RdJbszVrWLjbdm31M7mLV%2FJ26t2gb%2Fm4J8gPxDqZvFGA44Vy8Oy%2BFLMxBf%2BPnngEBnzSVhkLeyGdJ8J%2BoXHbX6oumwV4cROurlh8CgGs&X-Amz-Signature=ec4bc2a4fc4a9bbdbb56343528e854f9eff23ade016f1bedb7e234d79231b7c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
