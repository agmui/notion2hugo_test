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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7HLSH7H%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCszMIbTob2GrxtgEM773i2yigZGZ01wKbV4t1aS82XKQIgLGvmcfjauSvYA7hwRrruSLf%2FBuL2p0PKseWKUdNKsA0qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpp0bvx7W3LHZ2s0ircA%2FTJ1x5%2F6INx%2FjziJqhjf2UdbePp90CqCLxEUXdSXKldMk3idCncwWWbfgg1Gm8AyALbjr4dVwrH%2BGcpDjU%2BZq8zTaF%2BHLYUQaG6uO9fbSJPXcajLeJw1b%2FPPdtQUAv%2Ffh5ixMLMoaq9fm7reIGpCOH64XDqv5Et2EbjeaFweIxKTbPt0mL6kGSMWvPkv1zaA4t6%2FnxFk9vxz3vF4cR3E%2B4VUZPmP9h0W5b3UhogwU9vyhHjO5WAYtKZXwfcELJ102g6A%2FEgBFu0JDdIeYVoPcRn7e93WPHy%2Fk6YdyBToRIsWSV3DfTt6362js43g3eAf%2FmveHsRKwiOiqEBWO%2BWUEF08LED%2FTaO%2BMRsaYYMUDVU4RnjJenDLEtWirkJhvk6qcrA6Mr%2BVr524Yg0NMZUqmuKfbmQNZsGJcJXF7KVvxnhacaK31LfkTDQINj2tuJ1H6XHCIQ3zp4y%2FLtGXmyDY%2FMI95E7tlkYJK5Lb96q%2FRmfTbABP2klpkqTaMc%2FRAB4CBIEc3yhPxg7s8NP%2Fj3m3TlCDV%2FJhHj0z%2F%2BmAFcNJSYcKsCNlU2tV9fpn8uz7OowMplNod6xzdyRO8CDcrNWdI9K%2Bb%2Fmr3j%2BR%2BqjcQJZ3MlRU%2FmCHaikc3TiM8pxMMj2jr4GOqUBWY9NtW4ECT1WNVyWy%2Bb1Td5Fi3KhaEvI5h0GeR6xCSIAs%2FebBix6Q8HNVtb42%2F7%2BZ503QIiS3UZOVUPTUWLNurIJ3wYC5C%2FM95BxbhHn3D%2FmT5eQNBBW2fQPKOdvYpNy5jTVqJ001%2FdNUdmGjSPw3KHc9fXgdXT%2FuV6DxQSc6hQ4%2FB7Qrvb7hacns0GT%2BRSSU859vrYV4Y2CmY%2F%2FVq%2FUgViyt%2Bh4&X-Amz-Signature=e7087cd4f722a028ced9b4c553a79e9eb35972344a5167a8434199b5e07b2a75&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7HLSH7H%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCszMIbTob2GrxtgEM773i2yigZGZ01wKbV4t1aS82XKQIgLGvmcfjauSvYA7hwRrruSLf%2FBuL2p0PKseWKUdNKsA0qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpp0bvx7W3LHZ2s0ircA%2FTJ1x5%2F6INx%2FjziJqhjf2UdbePp90CqCLxEUXdSXKldMk3idCncwWWbfgg1Gm8AyALbjr4dVwrH%2BGcpDjU%2BZq8zTaF%2BHLYUQaG6uO9fbSJPXcajLeJw1b%2FPPdtQUAv%2Ffh5ixMLMoaq9fm7reIGpCOH64XDqv5Et2EbjeaFweIxKTbPt0mL6kGSMWvPkv1zaA4t6%2FnxFk9vxz3vF4cR3E%2B4VUZPmP9h0W5b3UhogwU9vyhHjO5WAYtKZXwfcELJ102g6A%2FEgBFu0JDdIeYVoPcRn7e93WPHy%2Fk6YdyBToRIsWSV3DfTt6362js43g3eAf%2FmveHsRKwiOiqEBWO%2BWUEF08LED%2FTaO%2BMRsaYYMUDVU4RnjJenDLEtWirkJhvk6qcrA6Mr%2BVr524Yg0NMZUqmuKfbmQNZsGJcJXF7KVvxnhacaK31LfkTDQINj2tuJ1H6XHCIQ3zp4y%2FLtGXmyDY%2FMI95E7tlkYJK5Lb96q%2FRmfTbABP2klpkqTaMc%2FRAB4CBIEc3yhPxg7s8NP%2Fj3m3TlCDV%2FJhHj0z%2F%2BmAFcNJSYcKsCNlU2tV9fpn8uz7OowMplNod6xzdyRO8CDcrNWdI9K%2Bb%2Fmr3j%2BR%2BqjcQJZ3MlRU%2FmCHaikc3TiM8pxMMj2jr4GOqUBWY9NtW4ECT1WNVyWy%2Bb1Td5Fi3KhaEvI5h0GeR6xCSIAs%2FebBix6Q8HNVtb42%2F7%2BZ503QIiS3UZOVUPTUWLNurIJ3wYC5C%2FM95BxbhHn3D%2FmT5eQNBBW2fQPKOdvYpNy5jTVqJ001%2FdNUdmGjSPw3KHc9fXgdXT%2FuV6DxQSc6hQ4%2FB7Qrvb7hacns0GT%2BRSSU859vrYV4Y2CmY%2F%2FVq%2FUgViyt%2Bh4&X-Amz-Signature=63b7e4f90fa6ba2ccae48b6323e273ef2b6329d2a78758f4975ef9a4b428d29b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7HLSH7H%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCszMIbTob2GrxtgEM773i2yigZGZ01wKbV4t1aS82XKQIgLGvmcfjauSvYA7hwRrruSLf%2FBuL2p0PKseWKUdNKsA0qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpp0bvx7W3LHZ2s0ircA%2FTJ1x5%2F6INx%2FjziJqhjf2UdbePp90CqCLxEUXdSXKldMk3idCncwWWbfgg1Gm8AyALbjr4dVwrH%2BGcpDjU%2BZq8zTaF%2BHLYUQaG6uO9fbSJPXcajLeJw1b%2FPPdtQUAv%2Ffh5ixMLMoaq9fm7reIGpCOH64XDqv5Et2EbjeaFweIxKTbPt0mL6kGSMWvPkv1zaA4t6%2FnxFk9vxz3vF4cR3E%2B4VUZPmP9h0W5b3UhogwU9vyhHjO5WAYtKZXwfcELJ102g6A%2FEgBFu0JDdIeYVoPcRn7e93WPHy%2Fk6YdyBToRIsWSV3DfTt6362js43g3eAf%2FmveHsRKwiOiqEBWO%2BWUEF08LED%2FTaO%2BMRsaYYMUDVU4RnjJenDLEtWirkJhvk6qcrA6Mr%2BVr524Yg0NMZUqmuKfbmQNZsGJcJXF7KVvxnhacaK31LfkTDQINj2tuJ1H6XHCIQ3zp4y%2FLtGXmyDY%2FMI95E7tlkYJK5Lb96q%2FRmfTbABP2klpkqTaMc%2FRAB4CBIEc3yhPxg7s8NP%2Fj3m3TlCDV%2FJhHj0z%2F%2BmAFcNJSYcKsCNlU2tV9fpn8uz7OowMplNod6xzdyRO8CDcrNWdI9K%2Bb%2Fmr3j%2BR%2BqjcQJZ3MlRU%2FmCHaikc3TiM8pxMMj2jr4GOqUBWY9NtW4ECT1WNVyWy%2Bb1Td5Fi3KhaEvI5h0GeR6xCSIAs%2FebBix6Q8HNVtb42%2F7%2BZ503QIiS3UZOVUPTUWLNurIJ3wYC5C%2FM95BxbhHn3D%2FmT5eQNBBW2fQPKOdvYpNy5jTVqJ001%2FdNUdmGjSPw3KHc9fXgdXT%2FuV6DxQSc6hQ4%2FB7Qrvb7hacns0GT%2BRSSU859vrYV4Y2CmY%2F%2FVq%2FUgViyt%2Bh4&X-Amz-Signature=265a8359a3353d778318a01b4d66a8f60e79132321796b28da390a58480e1e96&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7HLSH7H%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCszMIbTob2GrxtgEM773i2yigZGZ01wKbV4t1aS82XKQIgLGvmcfjauSvYA7hwRrruSLf%2FBuL2p0PKseWKUdNKsA0qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpp0bvx7W3LHZ2s0ircA%2FTJ1x5%2F6INx%2FjziJqhjf2UdbePp90CqCLxEUXdSXKldMk3idCncwWWbfgg1Gm8AyALbjr4dVwrH%2BGcpDjU%2BZq8zTaF%2BHLYUQaG6uO9fbSJPXcajLeJw1b%2FPPdtQUAv%2Ffh5ixMLMoaq9fm7reIGpCOH64XDqv5Et2EbjeaFweIxKTbPt0mL6kGSMWvPkv1zaA4t6%2FnxFk9vxz3vF4cR3E%2B4VUZPmP9h0W5b3UhogwU9vyhHjO5WAYtKZXwfcELJ102g6A%2FEgBFu0JDdIeYVoPcRn7e93WPHy%2Fk6YdyBToRIsWSV3DfTt6362js43g3eAf%2FmveHsRKwiOiqEBWO%2BWUEF08LED%2FTaO%2BMRsaYYMUDVU4RnjJenDLEtWirkJhvk6qcrA6Mr%2BVr524Yg0NMZUqmuKfbmQNZsGJcJXF7KVvxnhacaK31LfkTDQINj2tuJ1H6XHCIQ3zp4y%2FLtGXmyDY%2FMI95E7tlkYJK5Lb96q%2FRmfTbABP2klpkqTaMc%2FRAB4CBIEc3yhPxg7s8NP%2Fj3m3TlCDV%2FJhHj0z%2F%2BmAFcNJSYcKsCNlU2tV9fpn8uz7OowMplNod6xzdyRO8CDcrNWdI9K%2Bb%2Fmr3j%2BR%2BqjcQJZ3MlRU%2FmCHaikc3TiM8pxMMj2jr4GOqUBWY9NtW4ECT1WNVyWy%2Bb1Td5Fi3KhaEvI5h0GeR6xCSIAs%2FebBix6Q8HNVtb42%2F7%2BZ503QIiS3UZOVUPTUWLNurIJ3wYC5C%2FM95BxbhHn3D%2FmT5eQNBBW2fQPKOdvYpNy5jTVqJ001%2FdNUdmGjSPw3KHc9fXgdXT%2FuV6DxQSc6hQ4%2FB7Qrvb7hacns0GT%2BRSSU859vrYV4Y2CmY%2F%2FVq%2FUgViyt%2Bh4&X-Amz-Signature=7bb74786508979479ecd31d3b4329a7a84b81762a8b9f1b438acdf89f06b7ffd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7HLSH7H%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCszMIbTob2GrxtgEM773i2yigZGZ01wKbV4t1aS82XKQIgLGvmcfjauSvYA7hwRrruSLf%2FBuL2p0PKseWKUdNKsA0qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpp0bvx7W3LHZ2s0ircA%2FTJ1x5%2F6INx%2FjziJqhjf2UdbePp90CqCLxEUXdSXKldMk3idCncwWWbfgg1Gm8AyALbjr4dVwrH%2BGcpDjU%2BZq8zTaF%2BHLYUQaG6uO9fbSJPXcajLeJw1b%2FPPdtQUAv%2Ffh5ixMLMoaq9fm7reIGpCOH64XDqv5Et2EbjeaFweIxKTbPt0mL6kGSMWvPkv1zaA4t6%2FnxFk9vxz3vF4cR3E%2B4VUZPmP9h0W5b3UhogwU9vyhHjO5WAYtKZXwfcELJ102g6A%2FEgBFu0JDdIeYVoPcRn7e93WPHy%2Fk6YdyBToRIsWSV3DfTt6362js43g3eAf%2FmveHsRKwiOiqEBWO%2BWUEF08LED%2FTaO%2BMRsaYYMUDVU4RnjJenDLEtWirkJhvk6qcrA6Mr%2BVr524Yg0NMZUqmuKfbmQNZsGJcJXF7KVvxnhacaK31LfkTDQINj2tuJ1H6XHCIQ3zp4y%2FLtGXmyDY%2FMI95E7tlkYJK5Lb96q%2FRmfTbABP2klpkqTaMc%2FRAB4CBIEc3yhPxg7s8NP%2Fj3m3TlCDV%2FJhHj0z%2F%2BmAFcNJSYcKsCNlU2tV9fpn8uz7OowMplNod6xzdyRO8CDcrNWdI9K%2Bb%2Fmr3j%2BR%2BqjcQJZ3MlRU%2FmCHaikc3TiM8pxMMj2jr4GOqUBWY9NtW4ECT1WNVyWy%2Bb1Td5Fi3KhaEvI5h0GeR6xCSIAs%2FebBix6Q8HNVtb42%2F7%2BZ503QIiS3UZOVUPTUWLNurIJ3wYC5C%2FM95BxbhHn3D%2FmT5eQNBBW2fQPKOdvYpNy5jTVqJ001%2FdNUdmGjSPw3KHc9fXgdXT%2FuV6DxQSc6hQ4%2FB7Qrvb7hacns0GT%2BRSSU859vrYV4Y2CmY%2F%2FVq%2FUgViyt%2Bh4&X-Amz-Signature=f04f3bb731942ac45c206ea0cc8563160f38fe1c808d9e5e1f6a7b2ae703bad7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
