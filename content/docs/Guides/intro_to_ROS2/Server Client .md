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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466276325IP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7oRWs5EnocjINKVUT6P%2B%2BJmjz5iRuBvtpfQ99Ic5zbAiEAi4wU16mgiDwN5eJ34RwwFZ%2FWKGhu%2BIfce9JPPAFKiRoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVE9logl6NGjBJS0yrcA16%2FLaWhGzHoLLCxLE0txc4KKEFq8BzL7%2BV6Qb8VKUYkxqGyHLuQK3pY0SSSlZFSGLhOQiO3V55iWbEFCaudH1uQ%2FxtzIYaQjLqHFIe8tNyjuBBaD9s2mxdR%2FoDOm6jSimooMBPSV%2FZDqXn8zYRD4tbyEJWZJ5TC2B47iCoV7opb8IfFFRl2yC1NFR7H5WI%2Fd5aa0F9hBMcE0cmk7F%2Ft6XdweIKz7%2B8156XgTgt3rbPhODM3kux3wv4u5HhGM3Gd9Op0ZordpeKuVEPO8GZepTVqM4MOkdVKLXmWPyesNps0MxXOHjQ8YhP%2BTVGFJvHLTB24jNNBT9G7EXvVlErkgJKh3UtdL%2BqUVLfljbkOPLlAG81DecaR2Ku8Nsa1zYjywR%2FbByavF6k5Z73zDECvvgTPQ%2BBH6HCW9RICQRumy04p8UDrw1axqICP2wZWESlZv36FRjGpDdywWwEc8KYlT9b%2BqLKEYJ%2Fx6E2tK0n%2FZq0lyI%2FdnYtGDOHqJVCXi91VLEYALwuBKS%2Fn99spRjXZFz9cAFvdcpi0iuKixhMAHg2PEuTBAlbHupFcmK3ePnP7Z4abu%2FD7JwXfD5l8riOyOZfIEb0MRbWQabzqIzuZljlBDls%2FRaPLZnxODzRmMPzgn8IGOqUBczhsqHrsVkEj%2B35F7xxCXgn2mSLLQOoZlCAUEqsrM7MlVYMdz%2Ba1F12PekhG%2FOxHRnxywBEh9GE%2Fc7MKc2g9B%2F1vOyxpJbSfqoBrg%2BmoP7eeV%2BbyEs1bI5VMJTJPBhJvcdiEOdcxIIEr1oGiUulz8FtZ1447IBXRz4Yty0Jta%2FJPWIKnhw2FKl4Nvcl1hTbljRT4E6lQR%2BUM2E%2BWrzdZ2hlKBwNr&X-Amz-Signature=d410c1d1e126c5eb798c498cf545a072a2b9e50ef5133620f1f8fce67faae17f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466276325IP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7oRWs5EnocjINKVUT6P%2B%2BJmjz5iRuBvtpfQ99Ic5zbAiEAi4wU16mgiDwN5eJ34RwwFZ%2FWKGhu%2BIfce9JPPAFKiRoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVE9logl6NGjBJS0yrcA16%2FLaWhGzHoLLCxLE0txc4KKEFq8BzL7%2BV6Qb8VKUYkxqGyHLuQK3pY0SSSlZFSGLhOQiO3V55iWbEFCaudH1uQ%2FxtzIYaQjLqHFIe8tNyjuBBaD9s2mxdR%2FoDOm6jSimooMBPSV%2FZDqXn8zYRD4tbyEJWZJ5TC2B47iCoV7opb8IfFFRl2yC1NFR7H5WI%2Fd5aa0F9hBMcE0cmk7F%2Ft6XdweIKz7%2B8156XgTgt3rbPhODM3kux3wv4u5HhGM3Gd9Op0ZordpeKuVEPO8GZepTVqM4MOkdVKLXmWPyesNps0MxXOHjQ8YhP%2BTVGFJvHLTB24jNNBT9G7EXvVlErkgJKh3UtdL%2BqUVLfljbkOPLlAG81DecaR2Ku8Nsa1zYjywR%2FbByavF6k5Z73zDECvvgTPQ%2BBH6HCW9RICQRumy04p8UDrw1axqICP2wZWESlZv36FRjGpDdywWwEc8KYlT9b%2BqLKEYJ%2Fx6E2tK0n%2FZq0lyI%2FdnYtGDOHqJVCXi91VLEYALwuBKS%2Fn99spRjXZFz9cAFvdcpi0iuKixhMAHg2PEuTBAlbHupFcmK3ePnP7Z4abu%2FD7JwXfD5l8riOyOZfIEb0MRbWQabzqIzuZljlBDls%2FRaPLZnxODzRmMPzgn8IGOqUBczhsqHrsVkEj%2B35F7xxCXgn2mSLLQOoZlCAUEqsrM7MlVYMdz%2Ba1F12PekhG%2FOxHRnxywBEh9GE%2Fc7MKc2g9B%2F1vOyxpJbSfqoBrg%2BmoP7eeV%2BbyEs1bI5VMJTJPBhJvcdiEOdcxIIEr1oGiUulz8FtZ1447IBXRz4Yty0Jta%2FJPWIKnhw2FKl4Nvcl1hTbljRT4E6lQR%2BUM2E%2BWrzdZ2hlKBwNr&X-Amz-Signature=d734789e6372c9c170475a3f27b06ae40c927234125ef5ad7db42b9c146ad7b8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466276325IP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7oRWs5EnocjINKVUT6P%2B%2BJmjz5iRuBvtpfQ99Ic5zbAiEAi4wU16mgiDwN5eJ34RwwFZ%2FWKGhu%2BIfce9JPPAFKiRoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVE9logl6NGjBJS0yrcA16%2FLaWhGzHoLLCxLE0txc4KKEFq8BzL7%2BV6Qb8VKUYkxqGyHLuQK3pY0SSSlZFSGLhOQiO3V55iWbEFCaudH1uQ%2FxtzIYaQjLqHFIe8tNyjuBBaD9s2mxdR%2FoDOm6jSimooMBPSV%2FZDqXn8zYRD4tbyEJWZJ5TC2B47iCoV7opb8IfFFRl2yC1NFR7H5WI%2Fd5aa0F9hBMcE0cmk7F%2Ft6XdweIKz7%2B8156XgTgt3rbPhODM3kux3wv4u5HhGM3Gd9Op0ZordpeKuVEPO8GZepTVqM4MOkdVKLXmWPyesNps0MxXOHjQ8YhP%2BTVGFJvHLTB24jNNBT9G7EXvVlErkgJKh3UtdL%2BqUVLfljbkOPLlAG81DecaR2Ku8Nsa1zYjywR%2FbByavF6k5Z73zDECvvgTPQ%2BBH6HCW9RICQRumy04p8UDrw1axqICP2wZWESlZv36FRjGpDdywWwEc8KYlT9b%2BqLKEYJ%2Fx6E2tK0n%2FZq0lyI%2FdnYtGDOHqJVCXi91VLEYALwuBKS%2Fn99spRjXZFz9cAFvdcpi0iuKixhMAHg2PEuTBAlbHupFcmK3ePnP7Z4abu%2FD7JwXfD5l8riOyOZfIEb0MRbWQabzqIzuZljlBDls%2FRaPLZnxODzRmMPzgn8IGOqUBczhsqHrsVkEj%2B35F7xxCXgn2mSLLQOoZlCAUEqsrM7MlVYMdz%2Ba1F12PekhG%2FOxHRnxywBEh9GE%2Fc7MKc2g9B%2F1vOyxpJbSfqoBrg%2BmoP7eeV%2BbyEs1bI5VMJTJPBhJvcdiEOdcxIIEr1oGiUulz8FtZ1447IBXRz4Yty0Jta%2FJPWIKnhw2FKl4Nvcl1hTbljRT4E6lQR%2BUM2E%2BWrzdZ2hlKBwNr&X-Amz-Signature=6b6125e34ad9a32412fea02ebf63233786ef7c099b273c1a02303905e7a11c3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466276325IP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7oRWs5EnocjINKVUT6P%2B%2BJmjz5iRuBvtpfQ99Ic5zbAiEAi4wU16mgiDwN5eJ34RwwFZ%2FWKGhu%2BIfce9JPPAFKiRoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVE9logl6NGjBJS0yrcA16%2FLaWhGzHoLLCxLE0txc4KKEFq8BzL7%2BV6Qb8VKUYkxqGyHLuQK3pY0SSSlZFSGLhOQiO3V55iWbEFCaudH1uQ%2FxtzIYaQjLqHFIe8tNyjuBBaD9s2mxdR%2FoDOm6jSimooMBPSV%2FZDqXn8zYRD4tbyEJWZJ5TC2B47iCoV7opb8IfFFRl2yC1NFR7H5WI%2Fd5aa0F9hBMcE0cmk7F%2Ft6XdweIKz7%2B8156XgTgt3rbPhODM3kux3wv4u5HhGM3Gd9Op0ZordpeKuVEPO8GZepTVqM4MOkdVKLXmWPyesNps0MxXOHjQ8YhP%2BTVGFJvHLTB24jNNBT9G7EXvVlErkgJKh3UtdL%2BqUVLfljbkOPLlAG81DecaR2Ku8Nsa1zYjywR%2FbByavF6k5Z73zDECvvgTPQ%2BBH6HCW9RICQRumy04p8UDrw1axqICP2wZWESlZv36FRjGpDdywWwEc8KYlT9b%2BqLKEYJ%2Fx6E2tK0n%2FZq0lyI%2FdnYtGDOHqJVCXi91VLEYALwuBKS%2Fn99spRjXZFz9cAFvdcpi0iuKixhMAHg2PEuTBAlbHupFcmK3ePnP7Z4abu%2FD7JwXfD5l8riOyOZfIEb0MRbWQabzqIzuZljlBDls%2FRaPLZnxODzRmMPzgn8IGOqUBczhsqHrsVkEj%2B35F7xxCXgn2mSLLQOoZlCAUEqsrM7MlVYMdz%2Ba1F12PekhG%2FOxHRnxywBEh9GE%2Fc7MKc2g9B%2F1vOyxpJbSfqoBrg%2BmoP7eeV%2BbyEs1bI5VMJTJPBhJvcdiEOdcxIIEr1oGiUulz8FtZ1447IBXRz4Yty0Jta%2FJPWIKnhw2FKl4Nvcl1hTbljRT4E6lQR%2BUM2E%2BWrzdZ2hlKBwNr&X-Amz-Signature=50f0303146d4bcb71de88062375849a9904e641a38e4f32af8599a2aaa67ffdd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466276325IP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7oRWs5EnocjINKVUT6P%2B%2BJmjz5iRuBvtpfQ99Ic5zbAiEAi4wU16mgiDwN5eJ34RwwFZ%2FWKGhu%2BIfce9JPPAFKiRoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVE9logl6NGjBJS0yrcA16%2FLaWhGzHoLLCxLE0txc4KKEFq8BzL7%2BV6Qb8VKUYkxqGyHLuQK3pY0SSSlZFSGLhOQiO3V55iWbEFCaudH1uQ%2FxtzIYaQjLqHFIe8tNyjuBBaD9s2mxdR%2FoDOm6jSimooMBPSV%2FZDqXn8zYRD4tbyEJWZJ5TC2B47iCoV7opb8IfFFRl2yC1NFR7H5WI%2Fd5aa0F9hBMcE0cmk7F%2Ft6XdweIKz7%2B8156XgTgt3rbPhODM3kux3wv4u5HhGM3Gd9Op0ZordpeKuVEPO8GZepTVqM4MOkdVKLXmWPyesNps0MxXOHjQ8YhP%2BTVGFJvHLTB24jNNBT9G7EXvVlErkgJKh3UtdL%2BqUVLfljbkOPLlAG81DecaR2Ku8Nsa1zYjywR%2FbByavF6k5Z73zDECvvgTPQ%2BBH6HCW9RICQRumy04p8UDrw1axqICP2wZWESlZv36FRjGpDdywWwEc8KYlT9b%2BqLKEYJ%2Fx6E2tK0n%2FZq0lyI%2FdnYtGDOHqJVCXi91VLEYALwuBKS%2Fn99spRjXZFz9cAFvdcpi0iuKixhMAHg2PEuTBAlbHupFcmK3ePnP7Z4abu%2FD7JwXfD5l8riOyOZfIEb0MRbWQabzqIzuZljlBDls%2FRaPLZnxODzRmMPzgn8IGOqUBczhsqHrsVkEj%2B35F7xxCXgn2mSLLQOoZlCAUEqsrM7MlVYMdz%2Ba1F12PekhG%2FOxHRnxywBEh9GE%2Fc7MKc2g9B%2F1vOyxpJbSfqoBrg%2BmoP7eeV%2BbyEs1bI5VMJTJPBhJvcdiEOdcxIIEr1oGiUulz8FtZ1447IBXRz4Yty0Jta%2FJPWIKnhw2FKl4Nvcl1hTbljRT4E6lQR%2BUM2E%2BWrzdZ2hlKBwNr&X-Amz-Signature=0b41d317ea10c63e025b780c3676b5883d7a06f86b02ad973b0125476b12c900&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
