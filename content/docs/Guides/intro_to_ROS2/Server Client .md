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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZX777H%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFCMYlWoH%2BNV0mcMIQS9wn93ANVnun9JlUpAeS61iZLhAiAKHIXQTCc%2BB8lotNkFNw3GzFJwJfrJcLh1FS7kF%2FbVEyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FtKAMZ1WhW1SzIaGKtwD3j36p5FE0KmRd9f6mC5YSOokliDJgonKf%2Fw1rDJ%2BLwTsCOOAt7%2B38YYt4P3O02M3rdgLYabFWezw5T9Ak1pgWOw%2BwSQrPDEzFHMY9gcWykJS7xKDNcperew%2BEYqkCzwhyTuA1Un5UHbpNt1%2FunmiQObMMAghe%2FKPdc9FoqZ257BKVm7xlZmLiS0XFOz7Nd76lqw9cCfoy8crYLLdQUe4dUcgc224r802wu77ZL%2FOmk%2Fd8YNw9lopO4ie%2Fwf%2FTsIk08nRELdWl%2BbxU4oJADktBHNq1mIyI5Q9Msz7pX8mQFW%2Be8no9yz3JwQfsC5DSfn3aL3S8WsjCL4fKStcu2P81JHiUJDCUbjqeeP4o8TJkBZ9abl989V5K2mOPnXtNuGwOIz%2BDR2gSpYM9QEKu5iFH9J9%2FGjaO2g9ZDLBV4bVmQMgYfdPfONpuaHFKyPcLaPpMDNJdRX5u2AnTPBB6nm%2BMp5TY77qAidurjj6khib6J0ziqDwJODE8Bs58Uycp3LLuTuR3Qm%2B59T70meq8Ms2JOzDcE7M6ebDOcpEde1kTvPBI1nwvDbgkQZceEy%2BtDBjzonFker8Y3Cn4CBfCn2a68tpdx2PILAuc%2F2gYikU92iMR0gN1w51Ec61qPEw9fCcwAY6pgH2INiwd2hzeKqfNx3iIfLSfxtGsLUrTcBqvxoc8UXeHAoHWOsOYBWoPJs%2B1jL0emgpo%2FXLCBNO3jEua80B9C8wSXlCz3L4uzagxBR%2BwIez%2FPXX7Q81y4Qe6YXJtXnzCA30J9Y8I5YOtS7j6DWvFPony1KSO3ApGp33gCVgvgC2kWD61HuuzixikmnK97y%2F1RRcwp6HdAMfl2jsCP%2BuLnWPMKYfoPx7&X-Amz-Signature=c97c319fd5efc39dc9add5a4de53f57eee3ab90eda031fdc0f929d35243072fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZX777H%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFCMYlWoH%2BNV0mcMIQS9wn93ANVnun9JlUpAeS61iZLhAiAKHIXQTCc%2BB8lotNkFNw3GzFJwJfrJcLh1FS7kF%2FbVEyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FtKAMZ1WhW1SzIaGKtwD3j36p5FE0KmRd9f6mC5YSOokliDJgonKf%2Fw1rDJ%2BLwTsCOOAt7%2B38YYt4P3O02M3rdgLYabFWezw5T9Ak1pgWOw%2BwSQrPDEzFHMY9gcWykJS7xKDNcperew%2BEYqkCzwhyTuA1Un5UHbpNt1%2FunmiQObMMAghe%2FKPdc9FoqZ257BKVm7xlZmLiS0XFOz7Nd76lqw9cCfoy8crYLLdQUe4dUcgc224r802wu77ZL%2FOmk%2Fd8YNw9lopO4ie%2Fwf%2FTsIk08nRELdWl%2BbxU4oJADktBHNq1mIyI5Q9Msz7pX8mQFW%2Be8no9yz3JwQfsC5DSfn3aL3S8WsjCL4fKStcu2P81JHiUJDCUbjqeeP4o8TJkBZ9abl989V5K2mOPnXtNuGwOIz%2BDR2gSpYM9QEKu5iFH9J9%2FGjaO2g9ZDLBV4bVmQMgYfdPfONpuaHFKyPcLaPpMDNJdRX5u2AnTPBB6nm%2BMp5TY77qAidurjj6khib6J0ziqDwJODE8Bs58Uycp3LLuTuR3Qm%2B59T70meq8Ms2JOzDcE7M6ebDOcpEde1kTvPBI1nwvDbgkQZceEy%2BtDBjzonFker8Y3Cn4CBfCn2a68tpdx2PILAuc%2F2gYikU92iMR0gN1w51Ec61qPEw9fCcwAY6pgH2INiwd2hzeKqfNx3iIfLSfxtGsLUrTcBqvxoc8UXeHAoHWOsOYBWoPJs%2B1jL0emgpo%2FXLCBNO3jEua80B9C8wSXlCz3L4uzagxBR%2BwIez%2FPXX7Q81y4Qe6YXJtXnzCA30J9Y8I5YOtS7j6DWvFPony1KSO3ApGp33gCVgvgC2kWD61HuuzixikmnK97y%2F1RRcwp6HdAMfl2jsCP%2BuLnWPMKYfoPx7&X-Amz-Signature=cea65ec7ec8835b1b0231f1c778ff2cdea07ca1650ca6f1dfb3617cc9b5cbdb3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZX777H%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFCMYlWoH%2BNV0mcMIQS9wn93ANVnun9JlUpAeS61iZLhAiAKHIXQTCc%2BB8lotNkFNw3GzFJwJfrJcLh1FS7kF%2FbVEyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FtKAMZ1WhW1SzIaGKtwD3j36p5FE0KmRd9f6mC5YSOokliDJgonKf%2Fw1rDJ%2BLwTsCOOAt7%2B38YYt4P3O02M3rdgLYabFWezw5T9Ak1pgWOw%2BwSQrPDEzFHMY9gcWykJS7xKDNcperew%2BEYqkCzwhyTuA1Un5UHbpNt1%2FunmiQObMMAghe%2FKPdc9FoqZ257BKVm7xlZmLiS0XFOz7Nd76lqw9cCfoy8crYLLdQUe4dUcgc224r802wu77ZL%2FOmk%2Fd8YNw9lopO4ie%2Fwf%2FTsIk08nRELdWl%2BbxU4oJADktBHNq1mIyI5Q9Msz7pX8mQFW%2Be8no9yz3JwQfsC5DSfn3aL3S8WsjCL4fKStcu2P81JHiUJDCUbjqeeP4o8TJkBZ9abl989V5K2mOPnXtNuGwOIz%2BDR2gSpYM9QEKu5iFH9J9%2FGjaO2g9ZDLBV4bVmQMgYfdPfONpuaHFKyPcLaPpMDNJdRX5u2AnTPBB6nm%2BMp5TY77qAidurjj6khib6J0ziqDwJODE8Bs58Uycp3LLuTuR3Qm%2B59T70meq8Ms2JOzDcE7M6ebDOcpEde1kTvPBI1nwvDbgkQZceEy%2BtDBjzonFker8Y3Cn4CBfCn2a68tpdx2PILAuc%2F2gYikU92iMR0gN1w51Ec61qPEw9fCcwAY6pgH2INiwd2hzeKqfNx3iIfLSfxtGsLUrTcBqvxoc8UXeHAoHWOsOYBWoPJs%2B1jL0emgpo%2FXLCBNO3jEua80B9C8wSXlCz3L4uzagxBR%2BwIez%2FPXX7Q81y4Qe6YXJtXnzCA30J9Y8I5YOtS7j6DWvFPony1KSO3ApGp33gCVgvgC2kWD61HuuzixikmnK97y%2F1RRcwp6HdAMfl2jsCP%2BuLnWPMKYfoPx7&X-Amz-Signature=6a8355b9b82151c24db55328c679df0cad3f4f9b245f1c7ccf6ca61aea13126c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZX777H%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFCMYlWoH%2BNV0mcMIQS9wn93ANVnun9JlUpAeS61iZLhAiAKHIXQTCc%2BB8lotNkFNw3GzFJwJfrJcLh1FS7kF%2FbVEyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FtKAMZ1WhW1SzIaGKtwD3j36p5FE0KmRd9f6mC5YSOokliDJgonKf%2Fw1rDJ%2BLwTsCOOAt7%2B38YYt4P3O02M3rdgLYabFWezw5T9Ak1pgWOw%2BwSQrPDEzFHMY9gcWykJS7xKDNcperew%2BEYqkCzwhyTuA1Un5UHbpNt1%2FunmiQObMMAghe%2FKPdc9FoqZ257BKVm7xlZmLiS0XFOz7Nd76lqw9cCfoy8crYLLdQUe4dUcgc224r802wu77ZL%2FOmk%2Fd8YNw9lopO4ie%2Fwf%2FTsIk08nRELdWl%2BbxU4oJADktBHNq1mIyI5Q9Msz7pX8mQFW%2Be8no9yz3JwQfsC5DSfn3aL3S8WsjCL4fKStcu2P81JHiUJDCUbjqeeP4o8TJkBZ9abl989V5K2mOPnXtNuGwOIz%2BDR2gSpYM9QEKu5iFH9J9%2FGjaO2g9ZDLBV4bVmQMgYfdPfONpuaHFKyPcLaPpMDNJdRX5u2AnTPBB6nm%2BMp5TY77qAidurjj6khib6J0ziqDwJODE8Bs58Uycp3LLuTuR3Qm%2B59T70meq8Ms2JOzDcE7M6ebDOcpEde1kTvPBI1nwvDbgkQZceEy%2BtDBjzonFker8Y3Cn4CBfCn2a68tpdx2PILAuc%2F2gYikU92iMR0gN1w51Ec61qPEw9fCcwAY6pgH2INiwd2hzeKqfNx3iIfLSfxtGsLUrTcBqvxoc8UXeHAoHWOsOYBWoPJs%2B1jL0emgpo%2FXLCBNO3jEua80B9C8wSXlCz3L4uzagxBR%2BwIez%2FPXX7Q81y4Qe6YXJtXnzCA30J9Y8I5YOtS7j6DWvFPony1KSO3ApGp33gCVgvgC2kWD61HuuzixikmnK97y%2F1RRcwp6HdAMfl2jsCP%2BuLnWPMKYfoPx7&X-Amz-Signature=2e6c97f19c8d0f5f8753081c69ab8a98e5ca3457392fc964531814fd896b227c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZX777H%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFCMYlWoH%2BNV0mcMIQS9wn93ANVnun9JlUpAeS61iZLhAiAKHIXQTCc%2BB8lotNkFNw3GzFJwJfrJcLh1FS7kF%2FbVEyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FtKAMZ1WhW1SzIaGKtwD3j36p5FE0KmRd9f6mC5YSOokliDJgonKf%2Fw1rDJ%2BLwTsCOOAt7%2B38YYt4P3O02M3rdgLYabFWezw5T9Ak1pgWOw%2BwSQrPDEzFHMY9gcWykJS7xKDNcperew%2BEYqkCzwhyTuA1Un5UHbpNt1%2FunmiQObMMAghe%2FKPdc9FoqZ257BKVm7xlZmLiS0XFOz7Nd76lqw9cCfoy8crYLLdQUe4dUcgc224r802wu77ZL%2FOmk%2Fd8YNw9lopO4ie%2Fwf%2FTsIk08nRELdWl%2BbxU4oJADktBHNq1mIyI5Q9Msz7pX8mQFW%2Be8no9yz3JwQfsC5DSfn3aL3S8WsjCL4fKStcu2P81JHiUJDCUbjqeeP4o8TJkBZ9abl989V5K2mOPnXtNuGwOIz%2BDR2gSpYM9QEKu5iFH9J9%2FGjaO2g9ZDLBV4bVmQMgYfdPfONpuaHFKyPcLaPpMDNJdRX5u2AnTPBB6nm%2BMp5TY77qAidurjj6khib6J0ziqDwJODE8Bs58Uycp3LLuTuR3Qm%2B59T70meq8Ms2JOzDcE7M6ebDOcpEde1kTvPBI1nwvDbgkQZceEy%2BtDBjzonFker8Y3Cn4CBfCn2a68tpdx2PILAuc%2F2gYikU92iMR0gN1w51Ec61qPEw9fCcwAY6pgH2INiwd2hzeKqfNx3iIfLSfxtGsLUrTcBqvxoc8UXeHAoHWOsOYBWoPJs%2B1jL0emgpo%2FXLCBNO3jEua80B9C8wSXlCz3L4uzagxBR%2BwIez%2FPXX7Q81y4Qe6YXJtXnzCA30J9Y8I5YOtS7j6DWvFPony1KSO3ApGp33gCVgvgC2kWD61HuuzixikmnK97y%2F1RRcwp6HdAMfl2jsCP%2BuLnWPMKYfoPx7&X-Amz-Signature=1b1b9c2cb9bc19b8ab30e7e270ce90ae2c585760c01e720c280bbb5dd0d6188c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
