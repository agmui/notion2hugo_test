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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKT3JU55%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXYy5qQK86fMPcuIIM187yR73VjB2PeXZlYF3fQSomNAiBtwIcsSoQiWkKRtCBFs5rCTVufVVGKxAmzUCmL8POrmSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlEzlMnuuzofS3v45KtwDUU4oad80k81tEdi%2FVxWwYfg1fIjwsOEOM8H7O2e1mrNB3DdAv8yjwww8rw53GqqKR8h2TRNdlSXimDhfTtoUQ%2FcyA5XTki1NQG1j5LkI7zLELxONeTgNx38V8rBa0cRlMWdDzXh9E5xS5E2h%2FdFNwuCKo8WR4YPfm8Ys4Tbiq4CzVglvj0dhwvzbWKSv1SVByr5R1O%2BjIo7EBNuU9a1Q%2BhITtvZsaQiPZAm6zDqssivQ34LAuGW5fr%2BlacOSs%2Fvz4oEe2Yg9TmuE6gRnjvXdpieeH8LXLuzKAIfVPVv%2FVx1aP2Ufy%2BunLIPqSH3Ojl2UJiHZuw%2FUaC%2FZs63W297Yqc1EdOWBi%2FDBAytbM%2FFZigzsTtqB6H0U3SMZtR%2BRWoebrZwkntqMvyOUySfzFN1hTubUSgh3SGe4BnDSJcU6A3dAdnBfHbgBLbun%2FaZB7KeKT%2BYnv10BC2AaLFhbuXjbFi9XfK8dVpKT4%2F9Og33KhP6swCmb7gAPrsXsjeo64KpI5NCWB1m3cKJedmGYG2My6hKbZqIWLXiiDvEoFx2QgbYHguTnzIdZBO2%2FzMSprk%2F58qONmrdEKiBV6CMIWB9rIebE3Ol8vY0H41Y14tX7Rrxme6TQzd7LMBupm8YwmO%2FYvQY6pgEFGR%2Bocb%2FFDdedHS3%2FhK%2FZJdOeT6%2FaHnIBwlviG2ql%2FaWoduAftCq6NvX%2BjG0QzQz5lWVXtepnyrmT5Ls4NbVeDigE3KijGVmYrjPGsh1zOJ%2ByMy2pi7DAaUPElZTbQf1TxUAPSbdRVfq2N7s93e8X1XMM2U%2BFLoojVTFKTBoBHFJFmzGA%2F2go6X0bRryc%2Bc24kRuLnwtptuL%2FeGWQ6f0KPY%2FMv%2FcK&X-Amz-Signature=369dfbc1acacb9789f30cf4fcb97c32ec82a16b6e157fd0b6cf6480646ff5c44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKT3JU55%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXYy5qQK86fMPcuIIM187yR73VjB2PeXZlYF3fQSomNAiBtwIcsSoQiWkKRtCBFs5rCTVufVVGKxAmzUCmL8POrmSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlEzlMnuuzofS3v45KtwDUU4oad80k81tEdi%2FVxWwYfg1fIjwsOEOM8H7O2e1mrNB3DdAv8yjwww8rw53GqqKR8h2TRNdlSXimDhfTtoUQ%2FcyA5XTki1NQG1j5LkI7zLELxONeTgNx38V8rBa0cRlMWdDzXh9E5xS5E2h%2FdFNwuCKo8WR4YPfm8Ys4Tbiq4CzVglvj0dhwvzbWKSv1SVByr5R1O%2BjIo7EBNuU9a1Q%2BhITtvZsaQiPZAm6zDqssivQ34LAuGW5fr%2BlacOSs%2Fvz4oEe2Yg9TmuE6gRnjvXdpieeH8LXLuzKAIfVPVv%2FVx1aP2Ufy%2BunLIPqSH3Ojl2UJiHZuw%2FUaC%2FZs63W297Yqc1EdOWBi%2FDBAytbM%2FFZigzsTtqB6H0U3SMZtR%2BRWoebrZwkntqMvyOUySfzFN1hTubUSgh3SGe4BnDSJcU6A3dAdnBfHbgBLbun%2FaZB7KeKT%2BYnv10BC2AaLFhbuXjbFi9XfK8dVpKT4%2F9Og33KhP6swCmb7gAPrsXsjeo64KpI5NCWB1m3cKJedmGYG2My6hKbZqIWLXiiDvEoFx2QgbYHguTnzIdZBO2%2FzMSprk%2F58qONmrdEKiBV6CMIWB9rIebE3Ol8vY0H41Y14tX7Rrxme6TQzd7LMBupm8YwmO%2FYvQY6pgEFGR%2Bocb%2FFDdedHS3%2FhK%2FZJdOeT6%2FaHnIBwlviG2ql%2FaWoduAftCq6NvX%2BjG0QzQz5lWVXtepnyrmT5Ls4NbVeDigE3KijGVmYrjPGsh1zOJ%2ByMy2pi7DAaUPElZTbQf1TxUAPSbdRVfq2N7s93e8X1XMM2U%2BFLoojVTFKTBoBHFJFmzGA%2F2go6X0bRryc%2Bc24kRuLnwtptuL%2FeGWQ6f0KPY%2FMv%2FcK&X-Amz-Signature=968df20664375bbd40a70e4d083d2cbed679db6021913c59e94962ea1df1d16f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKT3JU55%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXYy5qQK86fMPcuIIM187yR73VjB2PeXZlYF3fQSomNAiBtwIcsSoQiWkKRtCBFs5rCTVufVVGKxAmzUCmL8POrmSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlEzlMnuuzofS3v45KtwDUU4oad80k81tEdi%2FVxWwYfg1fIjwsOEOM8H7O2e1mrNB3DdAv8yjwww8rw53GqqKR8h2TRNdlSXimDhfTtoUQ%2FcyA5XTki1NQG1j5LkI7zLELxONeTgNx38V8rBa0cRlMWdDzXh9E5xS5E2h%2FdFNwuCKo8WR4YPfm8Ys4Tbiq4CzVglvj0dhwvzbWKSv1SVByr5R1O%2BjIo7EBNuU9a1Q%2BhITtvZsaQiPZAm6zDqssivQ34LAuGW5fr%2BlacOSs%2Fvz4oEe2Yg9TmuE6gRnjvXdpieeH8LXLuzKAIfVPVv%2FVx1aP2Ufy%2BunLIPqSH3Ojl2UJiHZuw%2FUaC%2FZs63W297Yqc1EdOWBi%2FDBAytbM%2FFZigzsTtqB6H0U3SMZtR%2BRWoebrZwkntqMvyOUySfzFN1hTubUSgh3SGe4BnDSJcU6A3dAdnBfHbgBLbun%2FaZB7KeKT%2BYnv10BC2AaLFhbuXjbFi9XfK8dVpKT4%2F9Og33KhP6swCmb7gAPrsXsjeo64KpI5NCWB1m3cKJedmGYG2My6hKbZqIWLXiiDvEoFx2QgbYHguTnzIdZBO2%2FzMSprk%2F58qONmrdEKiBV6CMIWB9rIebE3Ol8vY0H41Y14tX7Rrxme6TQzd7LMBupm8YwmO%2FYvQY6pgEFGR%2Bocb%2FFDdedHS3%2FhK%2FZJdOeT6%2FaHnIBwlviG2ql%2FaWoduAftCq6NvX%2BjG0QzQz5lWVXtepnyrmT5Ls4NbVeDigE3KijGVmYrjPGsh1zOJ%2ByMy2pi7DAaUPElZTbQf1TxUAPSbdRVfq2N7s93e8X1XMM2U%2BFLoojVTFKTBoBHFJFmzGA%2F2go6X0bRryc%2Bc24kRuLnwtptuL%2FeGWQ6f0KPY%2FMv%2FcK&X-Amz-Signature=81c26fce0d9dfe6c9ec220d05f8d62db3667ee2f5c55a9a50e697f65917483b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKT3JU55%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXYy5qQK86fMPcuIIM187yR73VjB2PeXZlYF3fQSomNAiBtwIcsSoQiWkKRtCBFs5rCTVufVVGKxAmzUCmL8POrmSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlEzlMnuuzofS3v45KtwDUU4oad80k81tEdi%2FVxWwYfg1fIjwsOEOM8H7O2e1mrNB3DdAv8yjwww8rw53GqqKR8h2TRNdlSXimDhfTtoUQ%2FcyA5XTki1NQG1j5LkI7zLELxONeTgNx38V8rBa0cRlMWdDzXh9E5xS5E2h%2FdFNwuCKo8WR4YPfm8Ys4Tbiq4CzVglvj0dhwvzbWKSv1SVByr5R1O%2BjIo7EBNuU9a1Q%2BhITtvZsaQiPZAm6zDqssivQ34LAuGW5fr%2BlacOSs%2Fvz4oEe2Yg9TmuE6gRnjvXdpieeH8LXLuzKAIfVPVv%2FVx1aP2Ufy%2BunLIPqSH3Ojl2UJiHZuw%2FUaC%2FZs63W297Yqc1EdOWBi%2FDBAytbM%2FFZigzsTtqB6H0U3SMZtR%2BRWoebrZwkntqMvyOUySfzFN1hTubUSgh3SGe4BnDSJcU6A3dAdnBfHbgBLbun%2FaZB7KeKT%2BYnv10BC2AaLFhbuXjbFi9XfK8dVpKT4%2F9Og33KhP6swCmb7gAPrsXsjeo64KpI5NCWB1m3cKJedmGYG2My6hKbZqIWLXiiDvEoFx2QgbYHguTnzIdZBO2%2FzMSprk%2F58qONmrdEKiBV6CMIWB9rIebE3Ol8vY0H41Y14tX7Rrxme6TQzd7LMBupm8YwmO%2FYvQY6pgEFGR%2Bocb%2FFDdedHS3%2FhK%2FZJdOeT6%2FaHnIBwlviG2ql%2FaWoduAftCq6NvX%2BjG0QzQz5lWVXtepnyrmT5Ls4NbVeDigE3KijGVmYrjPGsh1zOJ%2ByMy2pi7DAaUPElZTbQf1TxUAPSbdRVfq2N7s93e8X1XMM2U%2BFLoojVTFKTBoBHFJFmzGA%2F2go6X0bRryc%2Bc24kRuLnwtptuL%2FeGWQ6f0KPY%2FMv%2FcK&X-Amz-Signature=6e6f6abf710b233b774fa6853f4cfdb7a8ec6e2cabd8459ff995fc5636826b36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKT3JU55%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXYy5qQK86fMPcuIIM187yR73VjB2PeXZlYF3fQSomNAiBtwIcsSoQiWkKRtCBFs5rCTVufVVGKxAmzUCmL8POrmSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlEzlMnuuzofS3v45KtwDUU4oad80k81tEdi%2FVxWwYfg1fIjwsOEOM8H7O2e1mrNB3DdAv8yjwww8rw53GqqKR8h2TRNdlSXimDhfTtoUQ%2FcyA5XTki1NQG1j5LkI7zLELxONeTgNx38V8rBa0cRlMWdDzXh9E5xS5E2h%2FdFNwuCKo8WR4YPfm8Ys4Tbiq4CzVglvj0dhwvzbWKSv1SVByr5R1O%2BjIo7EBNuU9a1Q%2BhITtvZsaQiPZAm6zDqssivQ34LAuGW5fr%2BlacOSs%2Fvz4oEe2Yg9TmuE6gRnjvXdpieeH8LXLuzKAIfVPVv%2FVx1aP2Ufy%2BunLIPqSH3Ojl2UJiHZuw%2FUaC%2FZs63W297Yqc1EdOWBi%2FDBAytbM%2FFZigzsTtqB6H0U3SMZtR%2BRWoebrZwkntqMvyOUySfzFN1hTubUSgh3SGe4BnDSJcU6A3dAdnBfHbgBLbun%2FaZB7KeKT%2BYnv10BC2AaLFhbuXjbFi9XfK8dVpKT4%2F9Og33KhP6swCmb7gAPrsXsjeo64KpI5NCWB1m3cKJedmGYG2My6hKbZqIWLXiiDvEoFx2QgbYHguTnzIdZBO2%2FzMSprk%2F58qONmrdEKiBV6CMIWB9rIebE3Ol8vY0H41Y14tX7Rrxme6TQzd7LMBupm8YwmO%2FYvQY6pgEFGR%2Bocb%2FFDdedHS3%2FhK%2FZJdOeT6%2FaHnIBwlviG2ql%2FaWoduAftCq6NvX%2BjG0QzQz5lWVXtepnyrmT5Ls4NbVeDigE3KijGVmYrjPGsh1zOJ%2ByMy2pi7DAaUPElZTbQf1TxUAPSbdRVfq2N7s93e8X1XMM2U%2BFLoojVTFKTBoBHFJFmzGA%2F2go6X0bRryc%2Bc24kRuLnwtptuL%2FeGWQ6f0KPY%2FMv%2FcK&X-Amz-Signature=f1f1644dade2b4ce85bd9b510c733370ac63562bd1d167d7440065a1d5cacd94&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
