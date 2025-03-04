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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEXUQQ5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvE8A%2Fhf3L%2FaxeV15tIGY5Vt7wbJ4TYogp07M1dnELbAiBiNxqL0kvdajD%2FmZoI5x%2FUricmgaDxjKEYJHkhs%2BjsbyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIR%2BYJJ3H47XKsSm8KtwDH%2Ff4a7WKpvA%2Fy%2Fw16TvAWKy3c4M6cCT23klEVOcRUBLYr1IUVia0ZVMhOfRcoagXsNC7dqsvAbhKNRioRyCCSeAqriSBLI8s5SCP5%2BAbKrz8DnItz5j1Rxvk6wCm%2BJbpWve832EGi72VjS3oSffAoX7Kxbjmuyx1qz6VSrsNt8t8nvHh3fpp5N%2BaCXJzfv2RCdUt6X6h%2BjBhgcqVktXVbk4DXhLX%2FGhvQiKrX4IHeVfUgWVBKdqp7CXzswY9yGTg%2FmvZX7LMkf1Q2%2FR2i29qMjrRWMXbEktlHR5VRRLO7aEg3FnlhCMAUlv0mF%2FEH2Z0EOhEgUTg5a29LwLoVDrvn4hRC49T02h%2FmZh07tSiaZbJsR4EA4KQYIa1OfoIPXSPnYv8V9xtRCvtfeTyge7k%2FDf%2BfAfdlIdxYjdFaGSBGy3Jmcjbs2T3%2BlolGzm3gvXG263ZGOyOtLR2eStlIaMtJDC7MC%2FvCGAW%2BvwA58hR2puvj0uoPPN%2B7t8LtzsSCWJXDwujdRWopo20YeNcpMn42XD0MZ1OTv2Slr8kORmGa5WRNNK0TCLyoz4bh4TiE2qYIV1mQXHdCEs0cBOlXt%2Bh34Z39i8I15sTw5NWFX870z8jO8b0gioIgrdYSjcw05mdvgY6pgFXSE7xpbWEUTd9q6Vp%2FdNU4GEtTQCbpY3pcS0IIplMvM9lRsUw9DPoZaWXLMoYGg8y58Cy2NM8W%2BYNzKV9E%2Bj4mFzFzjeoelJ4RAW%2Byy%2FbAcdxB0Nd4%2F6M7pzhQUGgQIGol2uJjbFoh7GOpTOzxUabXM904aBaNZU1ThzIen3qjUsVTFiQ4a0%2BllvWP93pnbwNqFLxYCZy7JcXwBIv%2BU3BE9uNFfN4&X-Amz-Signature=1ca4a5ab535ce164304a3edc794469782e7301dc24a071a76eee63bd3ce3ac66&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEXUQQ5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvE8A%2Fhf3L%2FaxeV15tIGY5Vt7wbJ4TYogp07M1dnELbAiBiNxqL0kvdajD%2FmZoI5x%2FUricmgaDxjKEYJHkhs%2BjsbyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIR%2BYJJ3H47XKsSm8KtwDH%2Ff4a7WKpvA%2Fy%2Fw16TvAWKy3c4M6cCT23klEVOcRUBLYr1IUVia0ZVMhOfRcoagXsNC7dqsvAbhKNRioRyCCSeAqriSBLI8s5SCP5%2BAbKrz8DnItz5j1Rxvk6wCm%2BJbpWve832EGi72VjS3oSffAoX7Kxbjmuyx1qz6VSrsNt8t8nvHh3fpp5N%2BaCXJzfv2RCdUt6X6h%2BjBhgcqVktXVbk4DXhLX%2FGhvQiKrX4IHeVfUgWVBKdqp7CXzswY9yGTg%2FmvZX7LMkf1Q2%2FR2i29qMjrRWMXbEktlHR5VRRLO7aEg3FnlhCMAUlv0mF%2FEH2Z0EOhEgUTg5a29LwLoVDrvn4hRC49T02h%2FmZh07tSiaZbJsR4EA4KQYIa1OfoIPXSPnYv8V9xtRCvtfeTyge7k%2FDf%2BfAfdlIdxYjdFaGSBGy3Jmcjbs2T3%2BlolGzm3gvXG263ZGOyOtLR2eStlIaMtJDC7MC%2FvCGAW%2BvwA58hR2puvj0uoPPN%2B7t8LtzsSCWJXDwujdRWopo20YeNcpMn42XD0MZ1OTv2Slr8kORmGa5WRNNK0TCLyoz4bh4TiE2qYIV1mQXHdCEs0cBOlXt%2Bh34Z39i8I15sTw5NWFX870z8jO8b0gioIgrdYSjcw05mdvgY6pgFXSE7xpbWEUTd9q6Vp%2FdNU4GEtTQCbpY3pcS0IIplMvM9lRsUw9DPoZaWXLMoYGg8y58Cy2NM8W%2BYNzKV9E%2Bj4mFzFzjeoelJ4RAW%2Byy%2FbAcdxB0Nd4%2F6M7pzhQUGgQIGol2uJjbFoh7GOpTOzxUabXM904aBaNZU1ThzIen3qjUsVTFiQ4a0%2BllvWP93pnbwNqFLxYCZy7JcXwBIv%2BU3BE9uNFfN4&X-Amz-Signature=2b187f6ac36ef05e8a06395b7316f09802c8d57e00a8c36220a3a16f202551a5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEXUQQ5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvE8A%2Fhf3L%2FaxeV15tIGY5Vt7wbJ4TYogp07M1dnELbAiBiNxqL0kvdajD%2FmZoI5x%2FUricmgaDxjKEYJHkhs%2BjsbyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIR%2BYJJ3H47XKsSm8KtwDH%2Ff4a7WKpvA%2Fy%2Fw16TvAWKy3c4M6cCT23klEVOcRUBLYr1IUVia0ZVMhOfRcoagXsNC7dqsvAbhKNRioRyCCSeAqriSBLI8s5SCP5%2BAbKrz8DnItz5j1Rxvk6wCm%2BJbpWve832EGi72VjS3oSffAoX7Kxbjmuyx1qz6VSrsNt8t8nvHh3fpp5N%2BaCXJzfv2RCdUt6X6h%2BjBhgcqVktXVbk4DXhLX%2FGhvQiKrX4IHeVfUgWVBKdqp7CXzswY9yGTg%2FmvZX7LMkf1Q2%2FR2i29qMjrRWMXbEktlHR5VRRLO7aEg3FnlhCMAUlv0mF%2FEH2Z0EOhEgUTg5a29LwLoVDrvn4hRC49T02h%2FmZh07tSiaZbJsR4EA4KQYIa1OfoIPXSPnYv8V9xtRCvtfeTyge7k%2FDf%2BfAfdlIdxYjdFaGSBGy3Jmcjbs2T3%2BlolGzm3gvXG263ZGOyOtLR2eStlIaMtJDC7MC%2FvCGAW%2BvwA58hR2puvj0uoPPN%2B7t8LtzsSCWJXDwujdRWopo20YeNcpMn42XD0MZ1OTv2Slr8kORmGa5WRNNK0TCLyoz4bh4TiE2qYIV1mQXHdCEs0cBOlXt%2Bh34Z39i8I15sTw5NWFX870z8jO8b0gioIgrdYSjcw05mdvgY6pgFXSE7xpbWEUTd9q6Vp%2FdNU4GEtTQCbpY3pcS0IIplMvM9lRsUw9DPoZaWXLMoYGg8y58Cy2NM8W%2BYNzKV9E%2Bj4mFzFzjeoelJ4RAW%2Byy%2FbAcdxB0Nd4%2F6M7pzhQUGgQIGol2uJjbFoh7GOpTOzxUabXM904aBaNZU1ThzIen3qjUsVTFiQ4a0%2BllvWP93pnbwNqFLxYCZy7JcXwBIv%2BU3BE9uNFfN4&X-Amz-Signature=38a6c78c8637ddda42d92e238a0f2f9b6fe91d792496a661fe8c723bb9f9a8a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEXUQQ5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvE8A%2Fhf3L%2FaxeV15tIGY5Vt7wbJ4TYogp07M1dnELbAiBiNxqL0kvdajD%2FmZoI5x%2FUricmgaDxjKEYJHkhs%2BjsbyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIR%2BYJJ3H47XKsSm8KtwDH%2Ff4a7WKpvA%2Fy%2Fw16TvAWKy3c4M6cCT23klEVOcRUBLYr1IUVia0ZVMhOfRcoagXsNC7dqsvAbhKNRioRyCCSeAqriSBLI8s5SCP5%2BAbKrz8DnItz5j1Rxvk6wCm%2BJbpWve832EGi72VjS3oSffAoX7Kxbjmuyx1qz6VSrsNt8t8nvHh3fpp5N%2BaCXJzfv2RCdUt6X6h%2BjBhgcqVktXVbk4DXhLX%2FGhvQiKrX4IHeVfUgWVBKdqp7CXzswY9yGTg%2FmvZX7LMkf1Q2%2FR2i29qMjrRWMXbEktlHR5VRRLO7aEg3FnlhCMAUlv0mF%2FEH2Z0EOhEgUTg5a29LwLoVDrvn4hRC49T02h%2FmZh07tSiaZbJsR4EA4KQYIa1OfoIPXSPnYv8V9xtRCvtfeTyge7k%2FDf%2BfAfdlIdxYjdFaGSBGy3Jmcjbs2T3%2BlolGzm3gvXG263ZGOyOtLR2eStlIaMtJDC7MC%2FvCGAW%2BvwA58hR2puvj0uoPPN%2B7t8LtzsSCWJXDwujdRWopo20YeNcpMn42XD0MZ1OTv2Slr8kORmGa5WRNNK0TCLyoz4bh4TiE2qYIV1mQXHdCEs0cBOlXt%2Bh34Z39i8I15sTw5NWFX870z8jO8b0gioIgrdYSjcw05mdvgY6pgFXSE7xpbWEUTd9q6Vp%2FdNU4GEtTQCbpY3pcS0IIplMvM9lRsUw9DPoZaWXLMoYGg8y58Cy2NM8W%2BYNzKV9E%2Bj4mFzFzjeoelJ4RAW%2Byy%2FbAcdxB0Nd4%2F6M7pzhQUGgQIGol2uJjbFoh7GOpTOzxUabXM904aBaNZU1ThzIen3qjUsVTFiQ4a0%2BllvWP93pnbwNqFLxYCZy7JcXwBIv%2BU3BE9uNFfN4&X-Amz-Signature=e72c81a1694fc2f8f51c9999502fcc27bf981c8104d54149eea9ca3a9c66a1c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEXUQQ5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvE8A%2Fhf3L%2FaxeV15tIGY5Vt7wbJ4TYogp07M1dnELbAiBiNxqL0kvdajD%2FmZoI5x%2FUricmgaDxjKEYJHkhs%2BjsbyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIR%2BYJJ3H47XKsSm8KtwDH%2Ff4a7WKpvA%2Fy%2Fw16TvAWKy3c4M6cCT23klEVOcRUBLYr1IUVia0ZVMhOfRcoagXsNC7dqsvAbhKNRioRyCCSeAqriSBLI8s5SCP5%2BAbKrz8DnItz5j1Rxvk6wCm%2BJbpWve832EGi72VjS3oSffAoX7Kxbjmuyx1qz6VSrsNt8t8nvHh3fpp5N%2BaCXJzfv2RCdUt6X6h%2BjBhgcqVktXVbk4DXhLX%2FGhvQiKrX4IHeVfUgWVBKdqp7CXzswY9yGTg%2FmvZX7LMkf1Q2%2FR2i29qMjrRWMXbEktlHR5VRRLO7aEg3FnlhCMAUlv0mF%2FEH2Z0EOhEgUTg5a29LwLoVDrvn4hRC49T02h%2FmZh07tSiaZbJsR4EA4KQYIa1OfoIPXSPnYv8V9xtRCvtfeTyge7k%2FDf%2BfAfdlIdxYjdFaGSBGy3Jmcjbs2T3%2BlolGzm3gvXG263ZGOyOtLR2eStlIaMtJDC7MC%2FvCGAW%2BvwA58hR2puvj0uoPPN%2B7t8LtzsSCWJXDwujdRWopo20YeNcpMn42XD0MZ1OTv2Slr8kORmGa5WRNNK0TCLyoz4bh4TiE2qYIV1mQXHdCEs0cBOlXt%2Bh34Z39i8I15sTw5NWFX870z8jO8b0gioIgrdYSjcw05mdvgY6pgFXSE7xpbWEUTd9q6Vp%2FdNU4GEtTQCbpY3pcS0IIplMvM9lRsUw9DPoZaWXLMoYGg8y58Cy2NM8W%2BYNzKV9E%2Bj4mFzFzjeoelJ4RAW%2Byy%2FbAcdxB0Nd4%2F6M7pzhQUGgQIGol2uJjbFoh7GOpTOzxUabXM904aBaNZU1ThzIen3qjUsVTFiQ4a0%2BllvWP93pnbwNqFLxYCZy7JcXwBIv%2BU3BE9uNFfN4&X-Amz-Signature=03881ff6bc734dc1afde19faa2bfbee9860585bf5e613ba54a7f1e33aa724f3b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
