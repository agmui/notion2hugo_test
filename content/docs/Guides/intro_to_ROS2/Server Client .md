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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7G6CO7F%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw149ec1JGS46jlODsNSL6VVzkiy%2BeHNSQL2b4VdSdRQIgSqt%2Bnt7wBMcW3fFD0wyR9vYQqQDZ55weq8lkbewyJ%2Fgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI%2F02evtovXKuiX8oircA5pDrIeDq0X9dHDicMuwne4iieunMH%2BWFj9tvnIA5UBFbTeQVB0y72o4l6Fzgz%2FE7mQPVVGjGlEOUrxjqlboTJzD9E9S%2BhQJOAC9BvD5LQISaisTs3Gk0Hi%2FPsrw4Pr1rqfu9X75PV9aN2zwCivIsk9c28Jt3E4cuZj0GmTVi1AijeFUJxeRumzLFGBKroXHP%2Fkq4kriWr3sljdgp96JVSbSORkULSGV%2BgXO92R%2B%2Foxdz3%2BIN0WQW3cWBdIJmr4fzPqfCdBkM9iwUsEGm81CzU83H1vlhJbdlkJ4CaFh9eKgT94HD1zdI4EYQzRdmfWav8XiMUClvHNki3xihtrWcMrQosalb3bH6fHuxbY%2BIbNaL8SRNRWtmhW9cXhCR0vtpSqQMYYvT5pbfDmAboyirJTJj0qZQhr9Y9r5VOoHNwUa%2Bo9YKU63pJ6M6Kykk7otLHxtvWwSrkOjcj%2BkfjL%2BYfIPiwuI2cTsTbdcHB1CE9PcSWcn6isI2IgyJJAiUZgq2%2FLitYtGZyxqQXMY69vyzuNtY3M3qSO5h9mAoN1CoZBHrjdc1PCfhIj8gAEPh%2F3gvhtyDHvi%2FkZ%2BoJam2bhc9esY%2BntSvhI8RPP2XdC78CaYXPUZzpa3rq%2FMaBvhMPSqscAGOqUBvbpfftAqvpHBkvohdOOcA1fm8UQpIC0u%2BGFSf75GbQQRHlbe67wUSF0ynsyqIHpl5tmwmw8dERbNszLJEd4O0tcjNdo1gKSfL0GaE9NDSyTSCi3Wc%2FRwi7L6Yiwbj8XcOIwTg7mLvPwDFiBb8uZChM0WzfZTaBjcInq2qOk0xO7NlAlwtYc6ShMsh3ucexi2DlGm8UnKgtZzb6Twn4kTsMeloAML&X-Amz-Signature=5dcf57cd568b0c975cddc996fa796a15a94f0fc55ad5b4ef8a9b687e718ac32b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7G6CO7F%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw149ec1JGS46jlODsNSL6VVzkiy%2BeHNSQL2b4VdSdRQIgSqt%2Bnt7wBMcW3fFD0wyR9vYQqQDZ55weq8lkbewyJ%2Fgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI%2F02evtovXKuiX8oircA5pDrIeDq0X9dHDicMuwne4iieunMH%2BWFj9tvnIA5UBFbTeQVB0y72o4l6Fzgz%2FE7mQPVVGjGlEOUrxjqlboTJzD9E9S%2BhQJOAC9BvD5LQISaisTs3Gk0Hi%2FPsrw4Pr1rqfu9X75PV9aN2zwCivIsk9c28Jt3E4cuZj0GmTVi1AijeFUJxeRumzLFGBKroXHP%2Fkq4kriWr3sljdgp96JVSbSORkULSGV%2BgXO92R%2B%2Foxdz3%2BIN0WQW3cWBdIJmr4fzPqfCdBkM9iwUsEGm81CzU83H1vlhJbdlkJ4CaFh9eKgT94HD1zdI4EYQzRdmfWav8XiMUClvHNki3xihtrWcMrQosalb3bH6fHuxbY%2BIbNaL8SRNRWtmhW9cXhCR0vtpSqQMYYvT5pbfDmAboyirJTJj0qZQhr9Y9r5VOoHNwUa%2Bo9YKU63pJ6M6Kykk7otLHxtvWwSrkOjcj%2BkfjL%2BYfIPiwuI2cTsTbdcHB1CE9PcSWcn6isI2IgyJJAiUZgq2%2FLitYtGZyxqQXMY69vyzuNtY3M3qSO5h9mAoN1CoZBHrjdc1PCfhIj8gAEPh%2F3gvhtyDHvi%2FkZ%2BoJam2bhc9esY%2BntSvhI8RPP2XdC78CaYXPUZzpa3rq%2FMaBvhMPSqscAGOqUBvbpfftAqvpHBkvohdOOcA1fm8UQpIC0u%2BGFSf75GbQQRHlbe67wUSF0ynsyqIHpl5tmwmw8dERbNszLJEd4O0tcjNdo1gKSfL0GaE9NDSyTSCi3Wc%2FRwi7L6Yiwbj8XcOIwTg7mLvPwDFiBb8uZChM0WzfZTaBjcInq2qOk0xO7NlAlwtYc6ShMsh3ucexi2DlGm8UnKgtZzb6Twn4kTsMeloAML&X-Amz-Signature=e5c720cc69d6221e45b6a0ccc2dca546eb4e61100648d83eaa8af7963bd238c2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7G6CO7F%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw149ec1JGS46jlODsNSL6VVzkiy%2BeHNSQL2b4VdSdRQIgSqt%2Bnt7wBMcW3fFD0wyR9vYQqQDZ55weq8lkbewyJ%2Fgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI%2F02evtovXKuiX8oircA5pDrIeDq0X9dHDicMuwne4iieunMH%2BWFj9tvnIA5UBFbTeQVB0y72o4l6Fzgz%2FE7mQPVVGjGlEOUrxjqlboTJzD9E9S%2BhQJOAC9BvD5LQISaisTs3Gk0Hi%2FPsrw4Pr1rqfu9X75PV9aN2zwCivIsk9c28Jt3E4cuZj0GmTVi1AijeFUJxeRumzLFGBKroXHP%2Fkq4kriWr3sljdgp96JVSbSORkULSGV%2BgXO92R%2B%2Foxdz3%2BIN0WQW3cWBdIJmr4fzPqfCdBkM9iwUsEGm81CzU83H1vlhJbdlkJ4CaFh9eKgT94HD1zdI4EYQzRdmfWav8XiMUClvHNki3xihtrWcMrQosalb3bH6fHuxbY%2BIbNaL8SRNRWtmhW9cXhCR0vtpSqQMYYvT5pbfDmAboyirJTJj0qZQhr9Y9r5VOoHNwUa%2Bo9YKU63pJ6M6Kykk7otLHxtvWwSrkOjcj%2BkfjL%2BYfIPiwuI2cTsTbdcHB1CE9PcSWcn6isI2IgyJJAiUZgq2%2FLitYtGZyxqQXMY69vyzuNtY3M3qSO5h9mAoN1CoZBHrjdc1PCfhIj8gAEPh%2F3gvhtyDHvi%2FkZ%2BoJam2bhc9esY%2BntSvhI8RPP2XdC78CaYXPUZzpa3rq%2FMaBvhMPSqscAGOqUBvbpfftAqvpHBkvohdOOcA1fm8UQpIC0u%2BGFSf75GbQQRHlbe67wUSF0ynsyqIHpl5tmwmw8dERbNszLJEd4O0tcjNdo1gKSfL0GaE9NDSyTSCi3Wc%2FRwi7L6Yiwbj8XcOIwTg7mLvPwDFiBb8uZChM0WzfZTaBjcInq2qOk0xO7NlAlwtYc6ShMsh3ucexi2DlGm8UnKgtZzb6Twn4kTsMeloAML&X-Amz-Signature=c6f2f453482d1a4f6243e81c0aea4b1cb91ae720e29e6f66ec8d208525bef33c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7G6CO7F%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw149ec1JGS46jlODsNSL6VVzkiy%2BeHNSQL2b4VdSdRQIgSqt%2Bnt7wBMcW3fFD0wyR9vYQqQDZ55weq8lkbewyJ%2Fgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI%2F02evtovXKuiX8oircA5pDrIeDq0X9dHDicMuwne4iieunMH%2BWFj9tvnIA5UBFbTeQVB0y72o4l6Fzgz%2FE7mQPVVGjGlEOUrxjqlboTJzD9E9S%2BhQJOAC9BvD5LQISaisTs3Gk0Hi%2FPsrw4Pr1rqfu9X75PV9aN2zwCivIsk9c28Jt3E4cuZj0GmTVi1AijeFUJxeRumzLFGBKroXHP%2Fkq4kriWr3sljdgp96JVSbSORkULSGV%2BgXO92R%2B%2Foxdz3%2BIN0WQW3cWBdIJmr4fzPqfCdBkM9iwUsEGm81CzU83H1vlhJbdlkJ4CaFh9eKgT94HD1zdI4EYQzRdmfWav8XiMUClvHNki3xihtrWcMrQosalb3bH6fHuxbY%2BIbNaL8SRNRWtmhW9cXhCR0vtpSqQMYYvT5pbfDmAboyirJTJj0qZQhr9Y9r5VOoHNwUa%2Bo9YKU63pJ6M6Kykk7otLHxtvWwSrkOjcj%2BkfjL%2BYfIPiwuI2cTsTbdcHB1CE9PcSWcn6isI2IgyJJAiUZgq2%2FLitYtGZyxqQXMY69vyzuNtY3M3qSO5h9mAoN1CoZBHrjdc1PCfhIj8gAEPh%2F3gvhtyDHvi%2FkZ%2BoJam2bhc9esY%2BntSvhI8RPP2XdC78CaYXPUZzpa3rq%2FMaBvhMPSqscAGOqUBvbpfftAqvpHBkvohdOOcA1fm8UQpIC0u%2BGFSf75GbQQRHlbe67wUSF0ynsyqIHpl5tmwmw8dERbNszLJEd4O0tcjNdo1gKSfL0GaE9NDSyTSCi3Wc%2FRwi7L6Yiwbj8XcOIwTg7mLvPwDFiBb8uZChM0WzfZTaBjcInq2qOk0xO7NlAlwtYc6ShMsh3ucexi2DlGm8UnKgtZzb6Twn4kTsMeloAML&X-Amz-Signature=04ec8135f27e56fb44657b7d6e5d333af1ca5f1e929e0ceba13aaf715b051adf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7G6CO7F%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw149ec1JGS46jlODsNSL6VVzkiy%2BeHNSQL2b4VdSdRQIgSqt%2Bnt7wBMcW3fFD0wyR9vYQqQDZ55weq8lkbewyJ%2Fgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI%2F02evtovXKuiX8oircA5pDrIeDq0X9dHDicMuwne4iieunMH%2BWFj9tvnIA5UBFbTeQVB0y72o4l6Fzgz%2FE7mQPVVGjGlEOUrxjqlboTJzD9E9S%2BhQJOAC9BvD5LQISaisTs3Gk0Hi%2FPsrw4Pr1rqfu9X75PV9aN2zwCivIsk9c28Jt3E4cuZj0GmTVi1AijeFUJxeRumzLFGBKroXHP%2Fkq4kriWr3sljdgp96JVSbSORkULSGV%2BgXO92R%2B%2Foxdz3%2BIN0WQW3cWBdIJmr4fzPqfCdBkM9iwUsEGm81CzU83H1vlhJbdlkJ4CaFh9eKgT94HD1zdI4EYQzRdmfWav8XiMUClvHNki3xihtrWcMrQosalb3bH6fHuxbY%2BIbNaL8SRNRWtmhW9cXhCR0vtpSqQMYYvT5pbfDmAboyirJTJj0qZQhr9Y9r5VOoHNwUa%2Bo9YKU63pJ6M6Kykk7otLHxtvWwSrkOjcj%2BkfjL%2BYfIPiwuI2cTsTbdcHB1CE9PcSWcn6isI2IgyJJAiUZgq2%2FLitYtGZyxqQXMY69vyzuNtY3M3qSO5h9mAoN1CoZBHrjdc1PCfhIj8gAEPh%2F3gvhtyDHvi%2FkZ%2BoJam2bhc9esY%2BntSvhI8RPP2XdC78CaYXPUZzpa3rq%2FMaBvhMPSqscAGOqUBvbpfftAqvpHBkvohdOOcA1fm8UQpIC0u%2BGFSf75GbQQRHlbe67wUSF0ynsyqIHpl5tmwmw8dERbNszLJEd4O0tcjNdo1gKSfL0GaE9NDSyTSCi3Wc%2FRwi7L6Yiwbj8XcOIwTg7mLvPwDFiBb8uZChM0WzfZTaBjcInq2qOk0xO7NlAlwtYc6ShMsh3ucexi2DlGm8UnKgtZzb6Twn4kTsMeloAML&X-Amz-Signature=1b24002bd3eb3fea557c71885566f190b298b6b190bfc22ec1c25b3522d9ad8b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
