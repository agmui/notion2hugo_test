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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6B7WRCZ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCaEmE7Ow2ZybPnfkyA4xYwqAcYZudtHusPzr5mJ3CMlwIhAIBw2SiDbGgxJHJuhYeTaSKtf5ZJ1dOJTYN8ZOXiD69GKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNXbwX33F%2Fl6uN87Qq3AMPkoMj%2FvKexSoVwr48xMgbFYAQaA2EetOfp1GSy8rkHVdGmidD0epILO2I4rkrg7yyYfx9R%2FqyrAPwLpuUUZFIjWRQIzVbgGIxrWdvN0XxGCj4pWfkpEkmTOLMy4g43Q9qd73v%2FHryo%2FEJwqwxpcxcst6BRXPmjYMNxZJXMrdCgPLqTp7LmyKKeBVPA4YH%2BRAcXDpcIMGC4Vzu6s1yr%2FqXGV0FxRTOyhmaOX4JZiDap4VFBuQnlhEfOx89v1zTfRAbeGF99nWA%2B002A3MHVMd4KHO4FhBFFVwan76CIMHjYJsclk0WlPL2K4wg3FjcBrB54r4zWVt%2FIZy9wyx3BRupZqouLhsGzeJMrgmTCu%2F8olHi%2BdQqDw0siSQgVP5oNN7wyTv0D5DyPDUzsAV13XSG5OLxSC6BcCnlSFUqu9j3l1xlfH0SqqDZE3LDEo%2FncwuHlDiYSIdIz9gkmcHeLKZDrtWfmvoU4YAhEF2e73xJAJoeJz1gBtOpU%2FRvSgENAO%2FuGPIZq9Y5SLrGx4yAJylMQbTg0PMrUDi78R2WRwPIEHhH8IL4LDLr4wO0hOjh11MSqw%2FEk%2BF5txUMwEpOxhZRlHJ9xtoQnJpMUegnnZSfm2UHL1P7Mwpod3zNqTCFtvy%2BBjqkASxfjEXHkgWrGYJIxk3TaPZwGNSedJTs5DMynNEznCMds7%2B6%2B%2FfiNLNf9i09Jw5iCu98KwJiJS0Ygh2e476nkhmEs8DmV1Xg6e0OVJSyeVJrAgeNR8QQuXz3nNpIr6%2F5ty3F0EIUIH%2BpTNVJzs7i2%2BwVcSBgbQxYiSyokCYSUPNTLRQ8y2BzAWXIIVLTN7bX8U6D%2BI8lzc0g13ZoUx1COyNRqGT8&X-Amz-Signature=557ab71dff3839ff5d4e76904b7bba34d2ea4d803593123326c25d8e64745284&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6B7WRCZ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCaEmE7Ow2ZybPnfkyA4xYwqAcYZudtHusPzr5mJ3CMlwIhAIBw2SiDbGgxJHJuhYeTaSKtf5ZJ1dOJTYN8ZOXiD69GKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNXbwX33F%2Fl6uN87Qq3AMPkoMj%2FvKexSoVwr48xMgbFYAQaA2EetOfp1GSy8rkHVdGmidD0epILO2I4rkrg7yyYfx9R%2FqyrAPwLpuUUZFIjWRQIzVbgGIxrWdvN0XxGCj4pWfkpEkmTOLMy4g43Q9qd73v%2FHryo%2FEJwqwxpcxcst6BRXPmjYMNxZJXMrdCgPLqTp7LmyKKeBVPA4YH%2BRAcXDpcIMGC4Vzu6s1yr%2FqXGV0FxRTOyhmaOX4JZiDap4VFBuQnlhEfOx89v1zTfRAbeGF99nWA%2B002A3MHVMd4KHO4FhBFFVwan76CIMHjYJsclk0WlPL2K4wg3FjcBrB54r4zWVt%2FIZy9wyx3BRupZqouLhsGzeJMrgmTCu%2F8olHi%2BdQqDw0siSQgVP5oNN7wyTv0D5DyPDUzsAV13XSG5OLxSC6BcCnlSFUqu9j3l1xlfH0SqqDZE3LDEo%2FncwuHlDiYSIdIz9gkmcHeLKZDrtWfmvoU4YAhEF2e73xJAJoeJz1gBtOpU%2FRvSgENAO%2FuGPIZq9Y5SLrGx4yAJylMQbTg0PMrUDi78R2WRwPIEHhH8IL4LDLr4wO0hOjh11MSqw%2FEk%2BF5txUMwEpOxhZRlHJ9xtoQnJpMUegnnZSfm2UHL1P7Mwpod3zNqTCFtvy%2BBjqkASxfjEXHkgWrGYJIxk3TaPZwGNSedJTs5DMynNEznCMds7%2B6%2B%2FfiNLNf9i09Jw5iCu98KwJiJS0Ygh2e476nkhmEs8DmV1Xg6e0OVJSyeVJrAgeNR8QQuXz3nNpIr6%2F5ty3F0EIUIH%2BpTNVJzs7i2%2BwVcSBgbQxYiSyokCYSUPNTLRQ8y2BzAWXIIVLTN7bX8U6D%2BI8lzc0g13ZoUx1COyNRqGT8&X-Amz-Signature=30ae8fc7116652b97baab04099f19e1626ca6fe36e2d6a824c999f5c238ea38a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6B7WRCZ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCaEmE7Ow2ZybPnfkyA4xYwqAcYZudtHusPzr5mJ3CMlwIhAIBw2SiDbGgxJHJuhYeTaSKtf5ZJ1dOJTYN8ZOXiD69GKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNXbwX33F%2Fl6uN87Qq3AMPkoMj%2FvKexSoVwr48xMgbFYAQaA2EetOfp1GSy8rkHVdGmidD0epILO2I4rkrg7yyYfx9R%2FqyrAPwLpuUUZFIjWRQIzVbgGIxrWdvN0XxGCj4pWfkpEkmTOLMy4g43Q9qd73v%2FHryo%2FEJwqwxpcxcst6BRXPmjYMNxZJXMrdCgPLqTp7LmyKKeBVPA4YH%2BRAcXDpcIMGC4Vzu6s1yr%2FqXGV0FxRTOyhmaOX4JZiDap4VFBuQnlhEfOx89v1zTfRAbeGF99nWA%2B002A3MHVMd4KHO4FhBFFVwan76CIMHjYJsclk0WlPL2K4wg3FjcBrB54r4zWVt%2FIZy9wyx3BRupZqouLhsGzeJMrgmTCu%2F8olHi%2BdQqDw0siSQgVP5oNN7wyTv0D5DyPDUzsAV13XSG5OLxSC6BcCnlSFUqu9j3l1xlfH0SqqDZE3LDEo%2FncwuHlDiYSIdIz9gkmcHeLKZDrtWfmvoU4YAhEF2e73xJAJoeJz1gBtOpU%2FRvSgENAO%2FuGPIZq9Y5SLrGx4yAJylMQbTg0PMrUDi78R2WRwPIEHhH8IL4LDLr4wO0hOjh11MSqw%2FEk%2BF5txUMwEpOxhZRlHJ9xtoQnJpMUegnnZSfm2UHL1P7Mwpod3zNqTCFtvy%2BBjqkASxfjEXHkgWrGYJIxk3TaPZwGNSedJTs5DMynNEznCMds7%2B6%2B%2FfiNLNf9i09Jw5iCu98KwJiJS0Ygh2e476nkhmEs8DmV1Xg6e0OVJSyeVJrAgeNR8QQuXz3nNpIr6%2F5ty3F0EIUIH%2BpTNVJzs7i2%2BwVcSBgbQxYiSyokCYSUPNTLRQ8y2BzAWXIIVLTN7bX8U6D%2BI8lzc0g13ZoUx1COyNRqGT8&X-Amz-Signature=eff443482dae67fbdd1246f34e0ce9d54065f33e1017325b1f2a39ccee63ec5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6B7WRCZ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCaEmE7Ow2ZybPnfkyA4xYwqAcYZudtHusPzr5mJ3CMlwIhAIBw2SiDbGgxJHJuhYeTaSKtf5ZJ1dOJTYN8ZOXiD69GKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNXbwX33F%2Fl6uN87Qq3AMPkoMj%2FvKexSoVwr48xMgbFYAQaA2EetOfp1GSy8rkHVdGmidD0epILO2I4rkrg7yyYfx9R%2FqyrAPwLpuUUZFIjWRQIzVbgGIxrWdvN0XxGCj4pWfkpEkmTOLMy4g43Q9qd73v%2FHryo%2FEJwqwxpcxcst6BRXPmjYMNxZJXMrdCgPLqTp7LmyKKeBVPA4YH%2BRAcXDpcIMGC4Vzu6s1yr%2FqXGV0FxRTOyhmaOX4JZiDap4VFBuQnlhEfOx89v1zTfRAbeGF99nWA%2B002A3MHVMd4KHO4FhBFFVwan76CIMHjYJsclk0WlPL2K4wg3FjcBrB54r4zWVt%2FIZy9wyx3BRupZqouLhsGzeJMrgmTCu%2F8olHi%2BdQqDw0siSQgVP5oNN7wyTv0D5DyPDUzsAV13XSG5OLxSC6BcCnlSFUqu9j3l1xlfH0SqqDZE3LDEo%2FncwuHlDiYSIdIz9gkmcHeLKZDrtWfmvoU4YAhEF2e73xJAJoeJz1gBtOpU%2FRvSgENAO%2FuGPIZq9Y5SLrGx4yAJylMQbTg0PMrUDi78R2WRwPIEHhH8IL4LDLr4wO0hOjh11MSqw%2FEk%2BF5txUMwEpOxhZRlHJ9xtoQnJpMUegnnZSfm2UHL1P7Mwpod3zNqTCFtvy%2BBjqkASxfjEXHkgWrGYJIxk3TaPZwGNSedJTs5DMynNEznCMds7%2B6%2B%2FfiNLNf9i09Jw5iCu98KwJiJS0Ygh2e476nkhmEs8DmV1Xg6e0OVJSyeVJrAgeNR8QQuXz3nNpIr6%2F5ty3F0EIUIH%2BpTNVJzs7i2%2BwVcSBgbQxYiSyokCYSUPNTLRQ8y2BzAWXIIVLTN7bX8U6D%2BI8lzc0g13ZoUx1COyNRqGT8&X-Amz-Signature=227dddccac5e521e13104096ce2579115edc7c725854cf678ef7524f8600b6e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6B7WRCZ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCaEmE7Ow2ZybPnfkyA4xYwqAcYZudtHusPzr5mJ3CMlwIhAIBw2SiDbGgxJHJuhYeTaSKtf5ZJ1dOJTYN8ZOXiD69GKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNXbwX33F%2Fl6uN87Qq3AMPkoMj%2FvKexSoVwr48xMgbFYAQaA2EetOfp1GSy8rkHVdGmidD0epILO2I4rkrg7yyYfx9R%2FqyrAPwLpuUUZFIjWRQIzVbgGIxrWdvN0XxGCj4pWfkpEkmTOLMy4g43Q9qd73v%2FHryo%2FEJwqwxpcxcst6BRXPmjYMNxZJXMrdCgPLqTp7LmyKKeBVPA4YH%2BRAcXDpcIMGC4Vzu6s1yr%2FqXGV0FxRTOyhmaOX4JZiDap4VFBuQnlhEfOx89v1zTfRAbeGF99nWA%2B002A3MHVMd4KHO4FhBFFVwan76CIMHjYJsclk0WlPL2K4wg3FjcBrB54r4zWVt%2FIZy9wyx3BRupZqouLhsGzeJMrgmTCu%2F8olHi%2BdQqDw0siSQgVP5oNN7wyTv0D5DyPDUzsAV13XSG5OLxSC6BcCnlSFUqu9j3l1xlfH0SqqDZE3LDEo%2FncwuHlDiYSIdIz9gkmcHeLKZDrtWfmvoU4YAhEF2e73xJAJoeJz1gBtOpU%2FRvSgENAO%2FuGPIZq9Y5SLrGx4yAJylMQbTg0PMrUDi78R2WRwPIEHhH8IL4LDLr4wO0hOjh11MSqw%2FEk%2BF5txUMwEpOxhZRlHJ9xtoQnJpMUegnnZSfm2UHL1P7Mwpod3zNqTCFtvy%2BBjqkASxfjEXHkgWrGYJIxk3TaPZwGNSedJTs5DMynNEznCMds7%2B6%2B%2FfiNLNf9i09Jw5iCu98KwJiJS0Ygh2e476nkhmEs8DmV1Xg6e0OVJSyeVJrAgeNR8QQuXz3nNpIr6%2F5ty3F0EIUIH%2BpTNVJzs7i2%2BwVcSBgbQxYiSyokCYSUPNTLRQ8y2BzAWXIIVLTN7bX8U6D%2BI8lzc0g13ZoUx1COyNRqGT8&X-Amz-Signature=7f371bd45789c535aa1de1e7c95c6048a7db70fab0844bc3b038bad1bed17aab&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
