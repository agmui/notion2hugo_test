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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3I4HRJ6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTe0pttPZsHooIodvZVNFXELvdzfDu%2FdP6f%2FluhrG4cAIgW8AYvUBnpts1pMz4L1tCKMO3t8QGvnxj%2FYioDKA1CsIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2si1I2DD8wdfrtlircAwvA8gDFTvtzzzWPCbcOFxVLIkDlGx4idna%2BMl4Yoz7v7ysSDHcqngP1h0AcGQqdiq893zWCDcHUPcoL7bvet3yaqZFAuffsKLK%2FlXKn8PEOd5ibQcVIfO8JOCr5tuiMomDRfxpvP%2Brgi69nApud9Ne3h%2FXfF72efQDfp3DR6XssdEwcT8C2XM2NyeQ2D8O3bEBQENkTvA6uPWz0QeH7OVHbr32iqxn7loDQDH9eY6%2BX4wU1YHjgjsdFMLOIljxXEsJWqbMNJSICU%2BovZm5icWKYHn95R7wjyRgucwInnASO4PBGs2aiwpUkfbgk72J8NoNjCPaTSY7GnVOj8%2BX%2FKbah6HwC6e2exevlXnhRg%2FEySRbUuBH8oVJthyxM1pOHWT12FiKA%2FB503wJ0HDdIOhESTXM3DmGLcO5HJeGng4T1DS33zoNlxgRy2PwteL7ZpAqR62IlLHfpg9%2FUI9ad%2Bb8%2BL%2Br3P8vaOpFKY32xGsUqzYrny%2F33wSWG1lay9aZIpMFiAUsC5uII60EXeZ31nY9kiSz%2FAaXAsZHa%2FewwIoycqrMRJ%2FKBrY2c0qSdAV%2BP0nRmNW3WN1re6sIYDh2VQEDd2LfZ0YWY4Z437PJvpNbn0jERdl3xelcnAiR6MJD9yMMGOqUBpym7qbzyPMvhq158ry2CiSgALuM5XJRZOHKDni3N%2FGcK80iVo8w0q1HwyjiHo0wf0bLToNphJTWKatQpvbfYxufzMQrjMFsvciZmOk%2FggsRIzkKeh2fsd4ZBLNSZbXo%2Be0gs5VzEp7F6yFNcbbLNufBmJqs85c1kzrVjLVxb5F0ScqU2esxjGmCZL0zg9KpExcvgLryEd%2F7AWM6Cn1dhuPESFPqt&X-Amz-Signature=5d5804aa3adc4f4c09ffa090987cbc1671c090a88da8168ba70732c1fc3a7589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3I4HRJ6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTe0pttPZsHooIodvZVNFXELvdzfDu%2FdP6f%2FluhrG4cAIgW8AYvUBnpts1pMz4L1tCKMO3t8QGvnxj%2FYioDKA1CsIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2si1I2DD8wdfrtlircAwvA8gDFTvtzzzWPCbcOFxVLIkDlGx4idna%2BMl4Yoz7v7ysSDHcqngP1h0AcGQqdiq893zWCDcHUPcoL7bvet3yaqZFAuffsKLK%2FlXKn8PEOd5ibQcVIfO8JOCr5tuiMomDRfxpvP%2Brgi69nApud9Ne3h%2FXfF72efQDfp3DR6XssdEwcT8C2XM2NyeQ2D8O3bEBQENkTvA6uPWz0QeH7OVHbr32iqxn7loDQDH9eY6%2BX4wU1YHjgjsdFMLOIljxXEsJWqbMNJSICU%2BovZm5icWKYHn95R7wjyRgucwInnASO4PBGs2aiwpUkfbgk72J8NoNjCPaTSY7GnVOj8%2BX%2FKbah6HwC6e2exevlXnhRg%2FEySRbUuBH8oVJthyxM1pOHWT12FiKA%2FB503wJ0HDdIOhESTXM3DmGLcO5HJeGng4T1DS33zoNlxgRy2PwteL7ZpAqR62IlLHfpg9%2FUI9ad%2Bb8%2BL%2Br3P8vaOpFKY32xGsUqzYrny%2F33wSWG1lay9aZIpMFiAUsC5uII60EXeZ31nY9kiSz%2FAaXAsZHa%2FewwIoycqrMRJ%2FKBrY2c0qSdAV%2BP0nRmNW3WN1re6sIYDh2VQEDd2LfZ0YWY4Z437PJvpNbn0jERdl3xelcnAiR6MJD9yMMGOqUBpym7qbzyPMvhq158ry2CiSgALuM5XJRZOHKDni3N%2FGcK80iVo8w0q1HwyjiHo0wf0bLToNphJTWKatQpvbfYxufzMQrjMFsvciZmOk%2FggsRIzkKeh2fsd4ZBLNSZbXo%2Be0gs5VzEp7F6yFNcbbLNufBmJqs85c1kzrVjLVxb5F0ScqU2esxjGmCZL0zg9KpExcvgLryEd%2F7AWM6Cn1dhuPESFPqt&X-Amz-Signature=061453cf9586705fe8a235f888dafca8cf401081cb4caa3b1ea2d9a750c0a612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3I4HRJ6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTe0pttPZsHooIodvZVNFXELvdzfDu%2FdP6f%2FluhrG4cAIgW8AYvUBnpts1pMz4L1tCKMO3t8QGvnxj%2FYioDKA1CsIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2si1I2DD8wdfrtlircAwvA8gDFTvtzzzWPCbcOFxVLIkDlGx4idna%2BMl4Yoz7v7ysSDHcqngP1h0AcGQqdiq893zWCDcHUPcoL7bvet3yaqZFAuffsKLK%2FlXKn8PEOd5ibQcVIfO8JOCr5tuiMomDRfxpvP%2Brgi69nApud9Ne3h%2FXfF72efQDfp3DR6XssdEwcT8C2XM2NyeQ2D8O3bEBQENkTvA6uPWz0QeH7OVHbr32iqxn7loDQDH9eY6%2BX4wU1YHjgjsdFMLOIljxXEsJWqbMNJSICU%2BovZm5icWKYHn95R7wjyRgucwInnASO4PBGs2aiwpUkfbgk72J8NoNjCPaTSY7GnVOj8%2BX%2FKbah6HwC6e2exevlXnhRg%2FEySRbUuBH8oVJthyxM1pOHWT12FiKA%2FB503wJ0HDdIOhESTXM3DmGLcO5HJeGng4T1DS33zoNlxgRy2PwteL7ZpAqR62IlLHfpg9%2FUI9ad%2Bb8%2BL%2Br3P8vaOpFKY32xGsUqzYrny%2F33wSWG1lay9aZIpMFiAUsC5uII60EXeZ31nY9kiSz%2FAaXAsZHa%2FewwIoycqrMRJ%2FKBrY2c0qSdAV%2BP0nRmNW3WN1re6sIYDh2VQEDd2LfZ0YWY4Z437PJvpNbn0jERdl3xelcnAiR6MJD9yMMGOqUBpym7qbzyPMvhq158ry2CiSgALuM5XJRZOHKDni3N%2FGcK80iVo8w0q1HwyjiHo0wf0bLToNphJTWKatQpvbfYxufzMQrjMFsvciZmOk%2FggsRIzkKeh2fsd4ZBLNSZbXo%2Be0gs5VzEp7F6yFNcbbLNufBmJqs85c1kzrVjLVxb5F0ScqU2esxjGmCZL0zg9KpExcvgLryEd%2F7AWM6Cn1dhuPESFPqt&X-Amz-Signature=ba73d7c003c7da3d11bbecc1cd47fbc1f588f449a3bc914d94c57b8b0a7846e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3I4HRJ6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTe0pttPZsHooIodvZVNFXELvdzfDu%2FdP6f%2FluhrG4cAIgW8AYvUBnpts1pMz4L1tCKMO3t8QGvnxj%2FYioDKA1CsIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2si1I2DD8wdfrtlircAwvA8gDFTvtzzzWPCbcOFxVLIkDlGx4idna%2BMl4Yoz7v7ysSDHcqngP1h0AcGQqdiq893zWCDcHUPcoL7bvet3yaqZFAuffsKLK%2FlXKn8PEOd5ibQcVIfO8JOCr5tuiMomDRfxpvP%2Brgi69nApud9Ne3h%2FXfF72efQDfp3DR6XssdEwcT8C2XM2NyeQ2D8O3bEBQENkTvA6uPWz0QeH7OVHbr32iqxn7loDQDH9eY6%2BX4wU1YHjgjsdFMLOIljxXEsJWqbMNJSICU%2BovZm5icWKYHn95R7wjyRgucwInnASO4PBGs2aiwpUkfbgk72J8NoNjCPaTSY7GnVOj8%2BX%2FKbah6HwC6e2exevlXnhRg%2FEySRbUuBH8oVJthyxM1pOHWT12FiKA%2FB503wJ0HDdIOhESTXM3DmGLcO5HJeGng4T1DS33zoNlxgRy2PwteL7ZpAqR62IlLHfpg9%2FUI9ad%2Bb8%2BL%2Br3P8vaOpFKY32xGsUqzYrny%2F33wSWG1lay9aZIpMFiAUsC5uII60EXeZ31nY9kiSz%2FAaXAsZHa%2FewwIoycqrMRJ%2FKBrY2c0qSdAV%2BP0nRmNW3WN1re6sIYDh2VQEDd2LfZ0YWY4Z437PJvpNbn0jERdl3xelcnAiR6MJD9yMMGOqUBpym7qbzyPMvhq158ry2CiSgALuM5XJRZOHKDni3N%2FGcK80iVo8w0q1HwyjiHo0wf0bLToNphJTWKatQpvbfYxufzMQrjMFsvciZmOk%2FggsRIzkKeh2fsd4ZBLNSZbXo%2Be0gs5VzEp7F6yFNcbbLNufBmJqs85c1kzrVjLVxb5F0ScqU2esxjGmCZL0zg9KpExcvgLryEd%2F7AWM6Cn1dhuPESFPqt&X-Amz-Signature=29de5ba3f0cee26e0344dbb8d3675a33a8cf3d88664eebd8f5154bebd82d8ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3I4HRJ6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTe0pttPZsHooIodvZVNFXELvdzfDu%2FdP6f%2FluhrG4cAIgW8AYvUBnpts1pMz4L1tCKMO3t8QGvnxj%2FYioDKA1CsIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2si1I2DD8wdfrtlircAwvA8gDFTvtzzzWPCbcOFxVLIkDlGx4idna%2BMl4Yoz7v7ysSDHcqngP1h0AcGQqdiq893zWCDcHUPcoL7bvet3yaqZFAuffsKLK%2FlXKn8PEOd5ibQcVIfO8JOCr5tuiMomDRfxpvP%2Brgi69nApud9Ne3h%2FXfF72efQDfp3DR6XssdEwcT8C2XM2NyeQ2D8O3bEBQENkTvA6uPWz0QeH7OVHbr32iqxn7loDQDH9eY6%2BX4wU1YHjgjsdFMLOIljxXEsJWqbMNJSICU%2BovZm5icWKYHn95R7wjyRgucwInnASO4PBGs2aiwpUkfbgk72J8NoNjCPaTSY7GnVOj8%2BX%2FKbah6HwC6e2exevlXnhRg%2FEySRbUuBH8oVJthyxM1pOHWT12FiKA%2FB503wJ0HDdIOhESTXM3DmGLcO5HJeGng4T1DS33zoNlxgRy2PwteL7ZpAqR62IlLHfpg9%2FUI9ad%2Bb8%2BL%2Br3P8vaOpFKY32xGsUqzYrny%2F33wSWG1lay9aZIpMFiAUsC5uII60EXeZ31nY9kiSz%2FAaXAsZHa%2FewwIoycqrMRJ%2FKBrY2c0qSdAV%2BP0nRmNW3WN1re6sIYDh2VQEDd2LfZ0YWY4Z437PJvpNbn0jERdl3xelcnAiR6MJD9yMMGOqUBpym7qbzyPMvhq158ry2CiSgALuM5XJRZOHKDni3N%2FGcK80iVo8w0q1HwyjiHo0wf0bLToNphJTWKatQpvbfYxufzMQrjMFsvciZmOk%2FggsRIzkKeh2fsd4ZBLNSZbXo%2Be0gs5VzEp7F6yFNcbbLNufBmJqs85c1kzrVjLVxb5F0ScqU2esxjGmCZL0zg9KpExcvgLryEd%2F7AWM6Cn1dhuPESFPqt&X-Amz-Signature=bc1044755034e79b06a80b6d85290909815c8a9bf0d6e0279b42e7215657ebbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
