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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEMWSCWP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw6GN2d7Rabp1zvVzREELYdAHDhvUaAkO2j%2FxN2K7FlAiEAzVOgmFNRh3b7lBgOzApaP82gtBmdgIZSD6Z0S8zmc4gqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBllyemqlZhaGfekircA4F7edAwHeH3s3uPvJNM2n%2Fp1ccsmDv8GRiGlzBcpzoxfZFLbVVnVoP9FCUGU44TKmPr8id%2FC%2FiYLj0%2FQ%2BazFlpwrU8Ws%2BdIiEj7GH7QLuMi9as8umIO2Px%2BkCed9YJ8xY5%2BTxOfwcuxcDaizvDiK%2F%2Bp%2BZ2MHh6GQarxSLjRCvXp9RcRYZwtrpzkIGRaCUx1%2Blx0krbXuXkRiEBpXZGg7ndXioFFloG%2FXnPtCzfk4341Je6uwxRwBmwtzimO1Piv74KL8sp%2BFBWoNYCJg4lMA1%2BKHPD%2FUzlXt%2B7Zj7r5h2BMcIQ%2FSd7hIGwLD%2BDnndYkruDjvrjJOTJfKuEH4QdK%2FDWCKi54vdOOoqRd%2FP16Ht%2BdbJ%2BvankUTbaL1Cim8WX9Cxx7bcQ1e%2BrStljnMoaij00GZemkjskSnp3%2Fdze1IfBG5AdtLnj4OxSHSBDFqH0at5Ny0zNRnRkQQlFYBs61u4RFs3I89zky%2BvBrMtJA1I0hWjmdrG8RIFqu%2FbmC52R55JHOdD5JStLUCLyYSV8LEzb2Db002xDGnP0kdR%2F2%2Frj%2FTDPi5Iiin5%2BR16TUkG%2BMXIB8DEXgT24hBXYdYYCMM6J5eKStE63JcxmRSovcJz3I3LzBOCOngu6N%2BJ2xMOrqisMGOqUB9bN94wYRj4d3zbDA3Fz0%2FrsHBgg%2FHZjCki7DXSJExUyOCSF7CyfrJAHlfcYK8CLlRfXd7qnuumwsWboLWiFILVBZT2GYAIsn3ytc3y%2FO9ppA6BUK%2F0ueqX3ly2vQmjeiaFQpHXNquUN2ihz6wqN5Cp%2FUEvkLSV0db9bj3gj8sHs0iComRtuQJMq4CFIGj046NaONbk8DBWbb5XZDAacYCmxtzCTs&X-Amz-Signature=8591f629252790814edef7d39a56fee032859ad7cf40384f9aa920516c6afaa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEMWSCWP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw6GN2d7Rabp1zvVzREELYdAHDhvUaAkO2j%2FxN2K7FlAiEAzVOgmFNRh3b7lBgOzApaP82gtBmdgIZSD6Z0S8zmc4gqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBllyemqlZhaGfekircA4F7edAwHeH3s3uPvJNM2n%2Fp1ccsmDv8GRiGlzBcpzoxfZFLbVVnVoP9FCUGU44TKmPr8id%2FC%2FiYLj0%2FQ%2BazFlpwrU8Ws%2BdIiEj7GH7QLuMi9as8umIO2Px%2BkCed9YJ8xY5%2BTxOfwcuxcDaizvDiK%2F%2Bp%2BZ2MHh6GQarxSLjRCvXp9RcRYZwtrpzkIGRaCUx1%2Blx0krbXuXkRiEBpXZGg7ndXioFFloG%2FXnPtCzfk4341Je6uwxRwBmwtzimO1Piv74KL8sp%2BFBWoNYCJg4lMA1%2BKHPD%2FUzlXt%2B7Zj7r5h2BMcIQ%2FSd7hIGwLD%2BDnndYkruDjvrjJOTJfKuEH4QdK%2FDWCKi54vdOOoqRd%2FP16Ht%2BdbJ%2BvankUTbaL1Cim8WX9Cxx7bcQ1e%2BrStljnMoaij00GZemkjskSnp3%2Fdze1IfBG5AdtLnj4OxSHSBDFqH0at5Ny0zNRnRkQQlFYBs61u4RFs3I89zky%2BvBrMtJA1I0hWjmdrG8RIFqu%2FbmC52R55JHOdD5JStLUCLyYSV8LEzb2Db002xDGnP0kdR%2F2%2Frj%2FTDPi5Iiin5%2BR16TUkG%2BMXIB8DEXgT24hBXYdYYCMM6J5eKStE63JcxmRSovcJz3I3LzBOCOngu6N%2BJ2xMOrqisMGOqUB9bN94wYRj4d3zbDA3Fz0%2FrsHBgg%2FHZjCki7DXSJExUyOCSF7CyfrJAHlfcYK8CLlRfXd7qnuumwsWboLWiFILVBZT2GYAIsn3ytc3y%2FO9ppA6BUK%2F0ueqX3ly2vQmjeiaFQpHXNquUN2ihz6wqN5Cp%2FUEvkLSV0db9bj3gj8sHs0iComRtuQJMq4CFIGj046NaONbk8DBWbb5XZDAacYCmxtzCTs&X-Amz-Signature=3a93ec11a89076d6bd4a2951ac437d8108babe8d966bf469775a25ba8b2a9ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEMWSCWP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw6GN2d7Rabp1zvVzREELYdAHDhvUaAkO2j%2FxN2K7FlAiEAzVOgmFNRh3b7lBgOzApaP82gtBmdgIZSD6Z0S8zmc4gqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBllyemqlZhaGfekircA4F7edAwHeH3s3uPvJNM2n%2Fp1ccsmDv8GRiGlzBcpzoxfZFLbVVnVoP9FCUGU44TKmPr8id%2FC%2FiYLj0%2FQ%2BazFlpwrU8Ws%2BdIiEj7GH7QLuMi9as8umIO2Px%2BkCed9YJ8xY5%2BTxOfwcuxcDaizvDiK%2F%2Bp%2BZ2MHh6GQarxSLjRCvXp9RcRYZwtrpzkIGRaCUx1%2Blx0krbXuXkRiEBpXZGg7ndXioFFloG%2FXnPtCzfk4341Je6uwxRwBmwtzimO1Piv74KL8sp%2BFBWoNYCJg4lMA1%2BKHPD%2FUzlXt%2B7Zj7r5h2BMcIQ%2FSd7hIGwLD%2BDnndYkruDjvrjJOTJfKuEH4QdK%2FDWCKi54vdOOoqRd%2FP16Ht%2BdbJ%2BvankUTbaL1Cim8WX9Cxx7bcQ1e%2BrStljnMoaij00GZemkjskSnp3%2Fdze1IfBG5AdtLnj4OxSHSBDFqH0at5Ny0zNRnRkQQlFYBs61u4RFs3I89zky%2BvBrMtJA1I0hWjmdrG8RIFqu%2FbmC52R55JHOdD5JStLUCLyYSV8LEzb2Db002xDGnP0kdR%2F2%2Frj%2FTDPi5Iiin5%2BR16TUkG%2BMXIB8DEXgT24hBXYdYYCMM6J5eKStE63JcxmRSovcJz3I3LzBOCOngu6N%2BJ2xMOrqisMGOqUB9bN94wYRj4d3zbDA3Fz0%2FrsHBgg%2FHZjCki7DXSJExUyOCSF7CyfrJAHlfcYK8CLlRfXd7qnuumwsWboLWiFILVBZT2GYAIsn3ytc3y%2FO9ppA6BUK%2F0ueqX3ly2vQmjeiaFQpHXNquUN2ihz6wqN5Cp%2FUEvkLSV0db9bj3gj8sHs0iComRtuQJMq4CFIGj046NaONbk8DBWbb5XZDAacYCmxtzCTs&X-Amz-Signature=90071ed114f0b16454991a89e6ebcb61343e92dd57f69118916fcbc7d81b1a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEMWSCWP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw6GN2d7Rabp1zvVzREELYdAHDhvUaAkO2j%2FxN2K7FlAiEAzVOgmFNRh3b7lBgOzApaP82gtBmdgIZSD6Z0S8zmc4gqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBllyemqlZhaGfekircA4F7edAwHeH3s3uPvJNM2n%2Fp1ccsmDv8GRiGlzBcpzoxfZFLbVVnVoP9FCUGU44TKmPr8id%2FC%2FiYLj0%2FQ%2BazFlpwrU8Ws%2BdIiEj7GH7QLuMi9as8umIO2Px%2BkCed9YJ8xY5%2BTxOfwcuxcDaizvDiK%2F%2Bp%2BZ2MHh6GQarxSLjRCvXp9RcRYZwtrpzkIGRaCUx1%2Blx0krbXuXkRiEBpXZGg7ndXioFFloG%2FXnPtCzfk4341Je6uwxRwBmwtzimO1Piv74KL8sp%2BFBWoNYCJg4lMA1%2BKHPD%2FUzlXt%2B7Zj7r5h2BMcIQ%2FSd7hIGwLD%2BDnndYkruDjvrjJOTJfKuEH4QdK%2FDWCKi54vdOOoqRd%2FP16Ht%2BdbJ%2BvankUTbaL1Cim8WX9Cxx7bcQ1e%2BrStljnMoaij00GZemkjskSnp3%2Fdze1IfBG5AdtLnj4OxSHSBDFqH0at5Ny0zNRnRkQQlFYBs61u4RFs3I89zky%2BvBrMtJA1I0hWjmdrG8RIFqu%2FbmC52R55JHOdD5JStLUCLyYSV8LEzb2Db002xDGnP0kdR%2F2%2Frj%2FTDPi5Iiin5%2BR16TUkG%2BMXIB8DEXgT24hBXYdYYCMM6J5eKStE63JcxmRSovcJz3I3LzBOCOngu6N%2BJ2xMOrqisMGOqUB9bN94wYRj4d3zbDA3Fz0%2FrsHBgg%2FHZjCki7DXSJExUyOCSF7CyfrJAHlfcYK8CLlRfXd7qnuumwsWboLWiFILVBZT2GYAIsn3ytc3y%2FO9ppA6BUK%2F0ueqX3ly2vQmjeiaFQpHXNquUN2ihz6wqN5Cp%2FUEvkLSV0db9bj3gj8sHs0iComRtuQJMq4CFIGj046NaONbk8DBWbb5XZDAacYCmxtzCTs&X-Amz-Signature=5ee1b48f52f5b7e5245cfd4a2f2d66e4ffa6e01185fa3fa456b6028d3c08edda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEMWSCWP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw6GN2d7Rabp1zvVzREELYdAHDhvUaAkO2j%2FxN2K7FlAiEAzVOgmFNRh3b7lBgOzApaP82gtBmdgIZSD6Z0S8zmc4gqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBllyemqlZhaGfekircA4F7edAwHeH3s3uPvJNM2n%2Fp1ccsmDv8GRiGlzBcpzoxfZFLbVVnVoP9FCUGU44TKmPr8id%2FC%2FiYLj0%2FQ%2BazFlpwrU8Ws%2BdIiEj7GH7QLuMi9as8umIO2Px%2BkCed9YJ8xY5%2BTxOfwcuxcDaizvDiK%2F%2Bp%2BZ2MHh6GQarxSLjRCvXp9RcRYZwtrpzkIGRaCUx1%2Blx0krbXuXkRiEBpXZGg7ndXioFFloG%2FXnPtCzfk4341Je6uwxRwBmwtzimO1Piv74KL8sp%2BFBWoNYCJg4lMA1%2BKHPD%2FUzlXt%2B7Zj7r5h2BMcIQ%2FSd7hIGwLD%2BDnndYkruDjvrjJOTJfKuEH4QdK%2FDWCKi54vdOOoqRd%2FP16Ht%2BdbJ%2BvankUTbaL1Cim8WX9Cxx7bcQ1e%2BrStljnMoaij00GZemkjskSnp3%2Fdze1IfBG5AdtLnj4OxSHSBDFqH0at5Ny0zNRnRkQQlFYBs61u4RFs3I89zky%2BvBrMtJA1I0hWjmdrG8RIFqu%2FbmC52R55JHOdD5JStLUCLyYSV8LEzb2Db002xDGnP0kdR%2F2%2Frj%2FTDPi5Iiin5%2BR16TUkG%2BMXIB8DEXgT24hBXYdYYCMM6J5eKStE63JcxmRSovcJz3I3LzBOCOngu6N%2BJ2xMOrqisMGOqUB9bN94wYRj4d3zbDA3Fz0%2FrsHBgg%2FHZjCki7DXSJExUyOCSF7CyfrJAHlfcYK8CLlRfXd7qnuumwsWboLWiFILVBZT2GYAIsn3ytc3y%2FO9ppA6BUK%2F0ueqX3ly2vQmjeiaFQpHXNquUN2ihz6wqN5Cp%2FUEvkLSV0db9bj3gj8sHs0iComRtuQJMq4CFIGj046NaONbk8DBWbb5XZDAacYCmxtzCTs&X-Amz-Signature=b7e73a4e5a8cd8767e07090f16d0e4edb9a50dc067c9010b9d6f1ac30cde6da5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
