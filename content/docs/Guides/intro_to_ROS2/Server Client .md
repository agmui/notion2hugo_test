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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT6YBLFW%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBTI31yNQ4wFbJAUI%2Bl%2Bu6ur5xxmPIp76y4MzVpLaMRgIgDDwXdBVCcBzxyjbNbYxAxXYuY2g6KywLx8t0U%2BlX0gsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfrUb42d444%2FyW6eyrcA9ZTpyzqmGwI%2FTaXBekO4b%2Fbkg4XSplfoaFt0DDmHn%2BRAhYLeOgthXb5IIRBlck%2FO2cSgNTDre99cAGPW9BHXcd165k5gvVapVJKeuQbXj7UPLiZsLmMyGRyZQfloRqncIK8bD%2BPy4OuEyWYfEXrrMYiAIfXqGLcDZEcHthyEDzI9kN6UmZfkAZXikpa7RIJ8Iu%2FTWnDbVG18jrDAR7M4JpUdBKojc85mN0Tv%2FitC%2FYSVOTMEhE6Q%2BloJWaSW7LvoWpLWHGym93FnCCrmFAlxZwNRYRJINrlPzu%2FZ2fumVmhnxkAeOzOk9f%2BKdupmrgTPXvZs5esJRmo4R8cTsl97dFw55LTMRdplph8xw0M448X3STr0C0m2h8NR9SWwDQ%2FLNJ4oY8l3Us3PsPaljuZYjWxxoj0syWEHoUSnZomrciu6vEL4fRPlcTRUwe30PNpfPFoQ79MTkuznSvbJZCKSoNWUSY%2FYcFQNTvmuIjpfYDFuStzz%2FyZcP2f7ZfZyGRB4B12c2BUtS33jSm9O3fMqKmt4W56rtbbGgRdiT8RDLubBmFdWilylKDKRB4dtsv5V8bkh5xxetoIpOCGW8w7D3YIawJjzCXnos%2FKMPoSfJ31a89H5VurpDoFnsVyMOX468MGOqUBGhPVe9jqKLVb6MyVVWwkVTi7taBFKwmLJzpEsSJqnu1ZtsL0wHkS%2F2C6jFvnx7GipQ9SGCp45dHaCaa55Zk3hF3bkrqQlxOg%2FNwBWeTXVpCy4nWrxN1R1A9F2pPZr32N4aAFD4hCbgYh8EDm0Nf3KNt1de4kS63CSZtyPLIF5X3%2FhMH88jRdxMHhUs7Jjn%2BW5IWzIHP1MldK%2Bd2zkH0lMc%2FzQ46w&X-Amz-Signature=f9fed2c4e8c57f058c0f4678891ab5b8321cdfd30b8f1cf69e1fb1f66dd256bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT6YBLFW%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBTI31yNQ4wFbJAUI%2Bl%2Bu6ur5xxmPIp76y4MzVpLaMRgIgDDwXdBVCcBzxyjbNbYxAxXYuY2g6KywLx8t0U%2BlX0gsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfrUb42d444%2FyW6eyrcA9ZTpyzqmGwI%2FTaXBekO4b%2Fbkg4XSplfoaFt0DDmHn%2BRAhYLeOgthXb5IIRBlck%2FO2cSgNTDre99cAGPW9BHXcd165k5gvVapVJKeuQbXj7UPLiZsLmMyGRyZQfloRqncIK8bD%2BPy4OuEyWYfEXrrMYiAIfXqGLcDZEcHthyEDzI9kN6UmZfkAZXikpa7RIJ8Iu%2FTWnDbVG18jrDAR7M4JpUdBKojc85mN0Tv%2FitC%2FYSVOTMEhE6Q%2BloJWaSW7LvoWpLWHGym93FnCCrmFAlxZwNRYRJINrlPzu%2FZ2fumVmhnxkAeOzOk9f%2BKdupmrgTPXvZs5esJRmo4R8cTsl97dFw55LTMRdplph8xw0M448X3STr0C0m2h8NR9SWwDQ%2FLNJ4oY8l3Us3PsPaljuZYjWxxoj0syWEHoUSnZomrciu6vEL4fRPlcTRUwe30PNpfPFoQ79MTkuznSvbJZCKSoNWUSY%2FYcFQNTvmuIjpfYDFuStzz%2FyZcP2f7ZfZyGRB4B12c2BUtS33jSm9O3fMqKmt4W56rtbbGgRdiT8RDLubBmFdWilylKDKRB4dtsv5V8bkh5xxetoIpOCGW8w7D3YIawJjzCXnos%2FKMPoSfJ31a89H5VurpDoFnsVyMOX468MGOqUBGhPVe9jqKLVb6MyVVWwkVTi7taBFKwmLJzpEsSJqnu1ZtsL0wHkS%2F2C6jFvnx7GipQ9SGCp45dHaCaa55Zk3hF3bkrqQlxOg%2FNwBWeTXVpCy4nWrxN1R1A9F2pPZr32N4aAFD4hCbgYh8EDm0Nf3KNt1de4kS63CSZtyPLIF5X3%2FhMH88jRdxMHhUs7Jjn%2BW5IWzIHP1MldK%2Bd2zkH0lMc%2FzQ46w&X-Amz-Signature=16ec7f83398d0627206e7653ea76cb7b864bc815a84006d591f2a104e39de219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT6YBLFW%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBTI31yNQ4wFbJAUI%2Bl%2Bu6ur5xxmPIp76y4MzVpLaMRgIgDDwXdBVCcBzxyjbNbYxAxXYuY2g6KywLx8t0U%2BlX0gsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfrUb42d444%2FyW6eyrcA9ZTpyzqmGwI%2FTaXBekO4b%2Fbkg4XSplfoaFt0DDmHn%2BRAhYLeOgthXb5IIRBlck%2FO2cSgNTDre99cAGPW9BHXcd165k5gvVapVJKeuQbXj7UPLiZsLmMyGRyZQfloRqncIK8bD%2BPy4OuEyWYfEXrrMYiAIfXqGLcDZEcHthyEDzI9kN6UmZfkAZXikpa7RIJ8Iu%2FTWnDbVG18jrDAR7M4JpUdBKojc85mN0Tv%2FitC%2FYSVOTMEhE6Q%2BloJWaSW7LvoWpLWHGym93FnCCrmFAlxZwNRYRJINrlPzu%2FZ2fumVmhnxkAeOzOk9f%2BKdupmrgTPXvZs5esJRmo4R8cTsl97dFw55LTMRdplph8xw0M448X3STr0C0m2h8NR9SWwDQ%2FLNJ4oY8l3Us3PsPaljuZYjWxxoj0syWEHoUSnZomrciu6vEL4fRPlcTRUwe30PNpfPFoQ79MTkuznSvbJZCKSoNWUSY%2FYcFQNTvmuIjpfYDFuStzz%2FyZcP2f7ZfZyGRB4B12c2BUtS33jSm9O3fMqKmt4W56rtbbGgRdiT8RDLubBmFdWilylKDKRB4dtsv5V8bkh5xxetoIpOCGW8w7D3YIawJjzCXnos%2FKMPoSfJ31a89H5VurpDoFnsVyMOX468MGOqUBGhPVe9jqKLVb6MyVVWwkVTi7taBFKwmLJzpEsSJqnu1ZtsL0wHkS%2F2C6jFvnx7GipQ9SGCp45dHaCaa55Zk3hF3bkrqQlxOg%2FNwBWeTXVpCy4nWrxN1R1A9F2pPZr32N4aAFD4hCbgYh8EDm0Nf3KNt1de4kS63CSZtyPLIF5X3%2FhMH88jRdxMHhUs7Jjn%2BW5IWzIHP1MldK%2Bd2zkH0lMc%2FzQ46w&X-Amz-Signature=58f6fea5cdc32468e2deeaeb25166b41945c6316048359a0a32aca3cadc50686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT6YBLFW%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBTI31yNQ4wFbJAUI%2Bl%2Bu6ur5xxmPIp76y4MzVpLaMRgIgDDwXdBVCcBzxyjbNbYxAxXYuY2g6KywLx8t0U%2BlX0gsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfrUb42d444%2FyW6eyrcA9ZTpyzqmGwI%2FTaXBekO4b%2Fbkg4XSplfoaFt0DDmHn%2BRAhYLeOgthXb5IIRBlck%2FO2cSgNTDre99cAGPW9BHXcd165k5gvVapVJKeuQbXj7UPLiZsLmMyGRyZQfloRqncIK8bD%2BPy4OuEyWYfEXrrMYiAIfXqGLcDZEcHthyEDzI9kN6UmZfkAZXikpa7RIJ8Iu%2FTWnDbVG18jrDAR7M4JpUdBKojc85mN0Tv%2FitC%2FYSVOTMEhE6Q%2BloJWaSW7LvoWpLWHGym93FnCCrmFAlxZwNRYRJINrlPzu%2FZ2fumVmhnxkAeOzOk9f%2BKdupmrgTPXvZs5esJRmo4R8cTsl97dFw55LTMRdplph8xw0M448X3STr0C0m2h8NR9SWwDQ%2FLNJ4oY8l3Us3PsPaljuZYjWxxoj0syWEHoUSnZomrciu6vEL4fRPlcTRUwe30PNpfPFoQ79MTkuznSvbJZCKSoNWUSY%2FYcFQNTvmuIjpfYDFuStzz%2FyZcP2f7ZfZyGRB4B12c2BUtS33jSm9O3fMqKmt4W56rtbbGgRdiT8RDLubBmFdWilylKDKRB4dtsv5V8bkh5xxetoIpOCGW8w7D3YIawJjzCXnos%2FKMPoSfJ31a89H5VurpDoFnsVyMOX468MGOqUBGhPVe9jqKLVb6MyVVWwkVTi7taBFKwmLJzpEsSJqnu1ZtsL0wHkS%2F2C6jFvnx7GipQ9SGCp45dHaCaa55Zk3hF3bkrqQlxOg%2FNwBWeTXVpCy4nWrxN1R1A9F2pPZr32N4aAFD4hCbgYh8EDm0Nf3KNt1de4kS63CSZtyPLIF5X3%2FhMH88jRdxMHhUs7Jjn%2BW5IWzIHP1MldK%2Bd2zkH0lMc%2FzQ46w&X-Amz-Signature=1ab38b8039d1b372d45f4c2f6ca6d03f77f074b91d9fffe6e90b9f301c664c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT6YBLFW%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBTI31yNQ4wFbJAUI%2Bl%2Bu6ur5xxmPIp76y4MzVpLaMRgIgDDwXdBVCcBzxyjbNbYxAxXYuY2g6KywLx8t0U%2BlX0gsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfrUb42d444%2FyW6eyrcA9ZTpyzqmGwI%2FTaXBekO4b%2Fbkg4XSplfoaFt0DDmHn%2BRAhYLeOgthXb5IIRBlck%2FO2cSgNTDre99cAGPW9BHXcd165k5gvVapVJKeuQbXj7UPLiZsLmMyGRyZQfloRqncIK8bD%2BPy4OuEyWYfEXrrMYiAIfXqGLcDZEcHthyEDzI9kN6UmZfkAZXikpa7RIJ8Iu%2FTWnDbVG18jrDAR7M4JpUdBKojc85mN0Tv%2FitC%2FYSVOTMEhE6Q%2BloJWaSW7LvoWpLWHGym93FnCCrmFAlxZwNRYRJINrlPzu%2FZ2fumVmhnxkAeOzOk9f%2BKdupmrgTPXvZs5esJRmo4R8cTsl97dFw55LTMRdplph8xw0M448X3STr0C0m2h8NR9SWwDQ%2FLNJ4oY8l3Us3PsPaljuZYjWxxoj0syWEHoUSnZomrciu6vEL4fRPlcTRUwe30PNpfPFoQ79MTkuznSvbJZCKSoNWUSY%2FYcFQNTvmuIjpfYDFuStzz%2FyZcP2f7ZfZyGRB4B12c2BUtS33jSm9O3fMqKmt4W56rtbbGgRdiT8RDLubBmFdWilylKDKRB4dtsv5V8bkh5xxetoIpOCGW8w7D3YIawJjzCXnos%2FKMPoSfJ31a89H5VurpDoFnsVyMOX468MGOqUBGhPVe9jqKLVb6MyVVWwkVTi7taBFKwmLJzpEsSJqnu1ZtsL0wHkS%2F2C6jFvnx7GipQ9SGCp45dHaCaa55Zk3hF3bkrqQlxOg%2FNwBWeTXVpCy4nWrxN1R1A9F2pPZr32N4aAFD4hCbgYh8EDm0Nf3KNt1de4kS63CSZtyPLIF5X3%2FhMH88jRdxMHhUs7Jjn%2BW5IWzIHP1MldK%2Bd2zkH0lMc%2FzQ46w&X-Amz-Signature=cf3105f653fc49e5054d4bf2a5f622bbfee74473d99888a820fd740c7a6e5105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
