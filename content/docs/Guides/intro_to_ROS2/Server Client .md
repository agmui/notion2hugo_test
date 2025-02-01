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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635AW6IE2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg7ttgssO72rxKrLvzNBEei9iuhiekZBmEgEZlkwbhkwIhAO4evGlwFSUvzvisp1x%2BvRJ9TFvrT68WUH%2BjmzvNqSwlKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxQXkX7s7CJfa6nkUq3ANGNomzfjpRMc0OlfO8PSOftuf%2F%2BJBjNKU717PSgUCO%2Belp%2Bo5k62M9x2zsnfixvyacFkd%2FRsGOpZhUdwDTQx3SPRPGJXnLJbYYPP7faaZv7IwAQRCMhel3xZjSJzfK2mMW2i%2Fkb5MizoAN97FxYZD5Hz0gmGF8Ul9pscfVJNB3t5cH9N23271CWyvRlq%2FWKmGjIE1TfkhCpJh01j7C4C0gfvNGn0zBbvOF1PIvEdBhsZ2k2N1Z2yCTs%2F1ztg%2BVoLeKBGd06d3ESuxgQPLTCJ9T4uxy%2BxXsxUuIOgAS2OyPlWTHDsQnvGJ7Ld%2FP%2BP%2FlRWsMRyydsgDSRbG8wcRPqOtC5u4RB6wJkL5Xu8z4%2F9CztctV%2BXsbfyzo1QPvSL6d643anMfRv7u0d%2Blu6L%2F6RS7zCevr8SvZktPEv6eftSPo4Ee6AkHfdg49KWLeK3F7sFrou72h715kX6NHobfpLx9ps%2BDlnPGakTzCf68484nk%2Ffag19EwcZtQlSoP%2BCqLSReXQLuGc0vTmms%2FP80BgzNMKII3oluIhI6MFx%2FpvvNvH59%2FZMFGlRsXCflxqA1nB5oAo0FORXXFEJVz5%2BWDq39m3NsHWpcOQLjNmcyAXOCGOjC7UHJQPrSU6SYlvzCUyvi8BjqkAcByXxVtO7FxB8iyTDbZ7%2Bgw0fB%2FFhnkIJgQJ2fy0h6NMlPgTd8DzRU%2FutOtTiIMKtMcHCWPkfHgIeMpD5XJzLktSlYRKhi7JuNnb3E%2BcCWpWkovmYQDJyuPO11UyoFECHG2hyTia3%2BNoy2E%2FHSk61XEI99CKqvwj5D9eyWvZcWxxEUCLbNrhuNdsjx%2BTAYDpinvSfBwBbnmHxf30Y%2Fhs3viveyZ&X-Amz-Signature=da8b4ca05a64e4d87159d1e83335867bde1202ab6342105ec7a2e845c6280f80&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635AW6IE2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg7ttgssO72rxKrLvzNBEei9iuhiekZBmEgEZlkwbhkwIhAO4evGlwFSUvzvisp1x%2BvRJ9TFvrT68WUH%2BjmzvNqSwlKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxQXkX7s7CJfa6nkUq3ANGNomzfjpRMc0OlfO8PSOftuf%2F%2BJBjNKU717PSgUCO%2Belp%2Bo5k62M9x2zsnfixvyacFkd%2FRsGOpZhUdwDTQx3SPRPGJXnLJbYYPP7faaZv7IwAQRCMhel3xZjSJzfK2mMW2i%2Fkb5MizoAN97FxYZD5Hz0gmGF8Ul9pscfVJNB3t5cH9N23271CWyvRlq%2FWKmGjIE1TfkhCpJh01j7C4C0gfvNGn0zBbvOF1PIvEdBhsZ2k2N1Z2yCTs%2F1ztg%2BVoLeKBGd06d3ESuxgQPLTCJ9T4uxy%2BxXsxUuIOgAS2OyPlWTHDsQnvGJ7Ld%2FP%2BP%2FlRWsMRyydsgDSRbG8wcRPqOtC5u4RB6wJkL5Xu8z4%2F9CztctV%2BXsbfyzo1QPvSL6d643anMfRv7u0d%2Blu6L%2F6RS7zCevr8SvZktPEv6eftSPo4Ee6AkHfdg49KWLeK3F7sFrou72h715kX6NHobfpLx9ps%2BDlnPGakTzCf68484nk%2Ffag19EwcZtQlSoP%2BCqLSReXQLuGc0vTmms%2FP80BgzNMKII3oluIhI6MFx%2FpvvNvH59%2FZMFGlRsXCflxqA1nB5oAo0FORXXFEJVz5%2BWDq39m3NsHWpcOQLjNmcyAXOCGOjC7UHJQPrSU6SYlvzCUyvi8BjqkAcByXxVtO7FxB8iyTDbZ7%2Bgw0fB%2FFhnkIJgQJ2fy0h6NMlPgTd8DzRU%2FutOtTiIMKtMcHCWPkfHgIeMpD5XJzLktSlYRKhi7JuNnb3E%2BcCWpWkovmYQDJyuPO11UyoFECHG2hyTia3%2BNoy2E%2FHSk61XEI99CKqvwj5D9eyWvZcWxxEUCLbNrhuNdsjx%2BTAYDpinvSfBwBbnmHxf30Y%2Fhs3viveyZ&X-Amz-Signature=8bbdb3854d206b09cd1081df0b0f4be97048623f698d56d01958b5660b0791f0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635AW6IE2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg7ttgssO72rxKrLvzNBEei9iuhiekZBmEgEZlkwbhkwIhAO4evGlwFSUvzvisp1x%2BvRJ9TFvrT68WUH%2BjmzvNqSwlKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxQXkX7s7CJfa6nkUq3ANGNomzfjpRMc0OlfO8PSOftuf%2F%2BJBjNKU717PSgUCO%2Belp%2Bo5k62M9x2zsnfixvyacFkd%2FRsGOpZhUdwDTQx3SPRPGJXnLJbYYPP7faaZv7IwAQRCMhel3xZjSJzfK2mMW2i%2Fkb5MizoAN97FxYZD5Hz0gmGF8Ul9pscfVJNB3t5cH9N23271CWyvRlq%2FWKmGjIE1TfkhCpJh01j7C4C0gfvNGn0zBbvOF1PIvEdBhsZ2k2N1Z2yCTs%2F1ztg%2BVoLeKBGd06d3ESuxgQPLTCJ9T4uxy%2BxXsxUuIOgAS2OyPlWTHDsQnvGJ7Ld%2FP%2BP%2FlRWsMRyydsgDSRbG8wcRPqOtC5u4RB6wJkL5Xu8z4%2F9CztctV%2BXsbfyzo1QPvSL6d643anMfRv7u0d%2Blu6L%2F6RS7zCevr8SvZktPEv6eftSPo4Ee6AkHfdg49KWLeK3F7sFrou72h715kX6NHobfpLx9ps%2BDlnPGakTzCf68484nk%2Ffag19EwcZtQlSoP%2BCqLSReXQLuGc0vTmms%2FP80BgzNMKII3oluIhI6MFx%2FpvvNvH59%2FZMFGlRsXCflxqA1nB5oAo0FORXXFEJVz5%2BWDq39m3NsHWpcOQLjNmcyAXOCGOjC7UHJQPrSU6SYlvzCUyvi8BjqkAcByXxVtO7FxB8iyTDbZ7%2Bgw0fB%2FFhnkIJgQJ2fy0h6NMlPgTd8DzRU%2FutOtTiIMKtMcHCWPkfHgIeMpD5XJzLktSlYRKhi7JuNnb3E%2BcCWpWkovmYQDJyuPO11UyoFECHG2hyTia3%2BNoy2E%2FHSk61XEI99CKqvwj5D9eyWvZcWxxEUCLbNrhuNdsjx%2BTAYDpinvSfBwBbnmHxf30Y%2Fhs3viveyZ&X-Amz-Signature=dbf777e09219c640ec86a3a30499a7972ef6a4a54178bc696af9358483f9a4de&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635AW6IE2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg7ttgssO72rxKrLvzNBEei9iuhiekZBmEgEZlkwbhkwIhAO4evGlwFSUvzvisp1x%2BvRJ9TFvrT68WUH%2BjmzvNqSwlKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxQXkX7s7CJfa6nkUq3ANGNomzfjpRMc0OlfO8PSOftuf%2F%2BJBjNKU717PSgUCO%2Belp%2Bo5k62M9x2zsnfixvyacFkd%2FRsGOpZhUdwDTQx3SPRPGJXnLJbYYPP7faaZv7IwAQRCMhel3xZjSJzfK2mMW2i%2Fkb5MizoAN97FxYZD5Hz0gmGF8Ul9pscfVJNB3t5cH9N23271CWyvRlq%2FWKmGjIE1TfkhCpJh01j7C4C0gfvNGn0zBbvOF1PIvEdBhsZ2k2N1Z2yCTs%2F1ztg%2BVoLeKBGd06d3ESuxgQPLTCJ9T4uxy%2BxXsxUuIOgAS2OyPlWTHDsQnvGJ7Ld%2FP%2BP%2FlRWsMRyydsgDSRbG8wcRPqOtC5u4RB6wJkL5Xu8z4%2F9CztctV%2BXsbfyzo1QPvSL6d643anMfRv7u0d%2Blu6L%2F6RS7zCevr8SvZktPEv6eftSPo4Ee6AkHfdg49KWLeK3F7sFrou72h715kX6NHobfpLx9ps%2BDlnPGakTzCf68484nk%2Ffag19EwcZtQlSoP%2BCqLSReXQLuGc0vTmms%2FP80BgzNMKII3oluIhI6MFx%2FpvvNvH59%2FZMFGlRsXCflxqA1nB5oAo0FORXXFEJVz5%2BWDq39m3NsHWpcOQLjNmcyAXOCGOjC7UHJQPrSU6SYlvzCUyvi8BjqkAcByXxVtO7FxB8iyTDbZ7%2Bgw0fB%2FFhnkIJgQJ2fy0h6NMlPgTd8DzRU%2FutOtTiIMKtMcHCWPkfHgIeMpD5XJzLktSlYRKhi7JuNnb3E%2BcCWpWkovmYQDJyuPO11UyoFECHG2hyTia3%2BNoy2E%2FHSk61XEI99CKqvwj5D9eyWvZcWxxEUCLbNrhuNdsjx%2BTAYDpinvSfBwBbnmHxf30Y%2Fhs3viveyZ&X-Amz-Signature=f90c6760809629cadc4037dccb80a3d1baa2ad55db24e71241d247885976afb2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635AW6IE2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg7ttgssO72rxKrLvzNBEei9iuhiekZBmEgEZlkwbhkwIhAO4evGlwFSUvzvisp1x%2BvRJ9TFvrT68WUH%2BjmzvNqSwlKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxQXkX7s7CJfa6nkUq3ANGNomzfjpRMc0OlfO8PSOftuf%2F%2BJBjNKU717PSgUCO%2Belp%2Bo5k62M9x2zsnfixvyacFkd%2FRsGOpZhUdwDTQx3SPRPGJXnLJbYYPP7faaZv7IwAQRCMhel3xZjSJzfK2mMW2i%2Fkb5MizoAN97FxYZD5Hz0gmGF8Ul9pscfVJNB3t5cH9N23271CWyvRlq%2FWKmGjIE1TfkhCpJh01j7C4C0gfvNGn0zBbvOF1PIvEdBhsZ2k2N1Z2yCTs%2F1ztg%2BVoLeKBGd06d3ESuxgQPLTCJ9T4uxy%2BxXsxUuIOgAS2OyPlWTHDsQnvGJ7Ld%2FP%2BP%2FlRWsMRyydsgDSRbG8wcRPqOtC5u4RB6wJkL5Xu8z4%2F9CztctV%2BXsbfyzo1QPvSL6d643anMfRv7u0d%2Blu6L%2F6RS7zCevr8SvZktPEv6eftSPo4Ee6AkHfdg49KWLeK3F7sFrou72h715kX6NHobfpLx9ps%2BDlnPGakTzCf68484nk%2Ffag19EwcZtQlSoP%2BCqLSReXQLuGc0vTmms%2FP80BgzNMKII3oluIhI6MFx%2FpvvNvH59%2FZMFGlRsXCflxqA1nB5oAo0FORXXFEJVz5%2BWDq39m3NsHWpcOQLjNmcyAXOCGOjC7UHJQPrSU6SYlvzCUyvi8BjqkAcByXxVtO7FxB8iyTDbZ7%2Bgw0fB%2FFhnkIJgQJ2fy0h6NMlPgTd8DzRU%2FutOtTiIMKtMcHCWPkfHgIeMpD5XJzLktSlYRKhi7JuNnb3E%2BcCWpWkovmYQDJyuPO11UyoFECHG2hyTia3%2BNoy2E%2FHSk61XEI99CKqvwj5D9eyWvZcWxxEUCLbNrhuNdsjx%2BTAYDpinvSfBwBbnmHxf30Y%2Fhs3viveyZ&X-Amz-Signature=b3121b2ba9828bf6074b834517c95561be0b193afc3fc3d256525e3b80cbb704&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
