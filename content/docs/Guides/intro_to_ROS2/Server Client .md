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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JNKYV76%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAChk5QQ16yKeNNq%2BVdu%2FDG0XFfBYAT8q8CGTst0y3WAIgWMSiLaL%2Fy9%2BCU1O7T7gTSz2vfCssqwwFl8Ve3MngdlQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBtlrU249dqFJbkf9CrcA4LdWIzlhCZwUH%2FTnMMH6iU1bkUtKLQiAW%2FArR2D%2BTDRwtA5K6Hk2XPcHI5d5Ay%2BOiR0t%2B1HOGb9ZtxTKynHRx3oX2bo0XXFvUblQThAhPspOyOvYUMNgUlEx1DVYUKgvrJs%2F0cwx8eUBz9iTQCGZ9KEJ8t73f96KYshO8caCHlvzOXOdO7b0Lg17hPeRfICiJMcqT3wftVd4uB%2BjbdSyu7n4GyEBZ8sYExeBlxJnYBoSPQevPkwMw1gMEGlSVojNoAIYUyqxtgwHlsiBiyQSc4ozRFknkN5i%2FenHzMGZornx6GcRP3L4SclPPLgSY8thBFIX5otuRWcz1zkmlzhd9pEr6zWU3aJVht0ctPrUjKi%2FYLm2MW9hclYZNb5%2FV8x8ynKO0DBq3mudOrnpYz%2FhLLJgt3z8C4ovjqx0ZdyINpQOolaUcDBCVcfaYx9Eot6yTV07ZzbVjLvdZYQHDIiRspRvkBjAHQYLqJyBlYnSCHHNNIEvO21q3j8%2Fr4x4DCNHVfHOWqIIaCPxAqluZebXvO0pe3AKRwHj5%2Bjlzh02FHuV0PjoSIQZlC5ekNiNIKs2GGWtwcDtUURXqHjVhGmcXWWQHo2RSz8hUMuUueGzysBi9LyAxqKyEl3DMwxMPXTksIGOqUBq6Fg5vE%2Bvcawrb0wGgLBBALbyB%2B9VKb%2FSGY0t%2B%2FaUY7oT4CVLkHWLOENHRV8c%2B4PwvSj2A2Jys8axhtHCqz1RH5c4qy4eTH9Yf05S2w5h01c6kYv6xccQQyKua1VsGWcclibcd2zsXOlx14Gg6cJWfHiPUxhHd%2B4qma2T1L2KNpdwtgrmlCHBODbuyz7gpqNxZAXMQZjYY4FiS9C3uEKQq1unCAn&X-Amz-Signature=c1f3f01983473b502304ed0724692d2faa238b507a166928800b8bd3cb8ae1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JNKYV76%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAChk5QQ16yKeNNq%2BVdu%2FDG0XFfBYAT8q8CGTst0y3WAIgWMSiLaL%2Fy9%2BCU1O7T7gTSz2vfCssqwwFl8Ve3MngdlQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBtlrU249dqFJbkf9CrcA4LdWIzlhCZwUH%2FTnMMH6iU1bkUtKLQiAW%2FArR2D%2BTDRwtA5K6Hk2XPcHI5d5Ay%2BOiR0t%2B1HOGb9ZtxTKynHRx3oX2bo0XXFvUblQThAhPspOyOvYUMNgUlEx1DVYUKgvrJs%2F0cwx8eUBz9iTQCGZ9KEJ8t73f96KYshO8caCHlvzOXOdO7b0Lg17hPeRfICiJMcqT3wftVd4uB%2BjbdSyu7n4GyEBZ8sYExeBlxJnYBoSPQevPkwMw1gMEGlSVojNoAIYUyqxtgwHlsiBiyQSc4ozRFknkN5i%2FenHzMGZornx6GcRP3L4SclPPLgSY8thBFIX5otuRWcz1zkmlzhd9pEr6zWU3aJVht0ctPrUjKi%2FYLm2MW9hclYZNb5%2FV8x8ynKO0DBq3mudOrnpYz%2FhLLJgt3z8C4ovjqx0ZdyINpQOolaUcDBCVcfaYx9Eot6yTV07ZzbVjLvdZYQHDIiRspRvkBjAHQYLqJyBlYnSCHHNNIEvO21q3j8%2Fr4x4DCNHVfHOWqIIaCPxAqluZebXvO0pe3AKRwHj5%2Bjlzh02FHuV0PjoSIQZlC5ekNiNIKs2GGWtwcDtUURXqHjVhGmcXWWQHo2RSz8hUMuUueGzysBi9LyAxqKyEl3DMwxMPXTksIGOqUBq6Fg5vE%2Bvcawrb0wGgLBBALbyB%2B9VKb%2FSGY0t%2B%2FaUY7oT4CVLkHWLOENHRV8c%2B4PwvSj2A2Jys8axhtHCqz1RH5c4qy4eTH9Yf05S2w5h01c6kYv6xccQQyKua1VsGWcclibcd2zsXOlx14Gg6cJWfHiPUxhHd%2B4qma2T1L2KNpdwtgrmlCHBODbuyz7gpqNxZAXMQZjYY4FiS9C3uEKQq1unCAn&X-Amz-Signature=cd18712e03c521647f57c27c000afc33f7e1bf74d21b89f15f15caf7ca5091c5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JNKYV76%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAChk5QQ16yKeNNq%2BVdu%2FDG0XFfBYAT8q8CGTst0y3WAIgWMSiLaL%2Fy9%2BCU1O7T7gTSz2vfCssqwwFl8Ve3MngdlQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBtlrU249dqFJbkf9CrcA4LdWIzlhCZwUH%2FTnMMH6iU1bkUtKLQiAW%2FArR2D%2BTDRwtA5K6Hk2XPcHI5d5Ay%2BOiR0t%2B1HOGb9ZtxTKynHRx3oX2bo0XXFvUblQThAhPspOyOvYUMNgUlEx1DVYUKgvrJs%2F0cwx8eUBz9iTQCGZ9KEJ8t73f96KYshO8caCHlvzOXOdO7b0Lg17hPeRfICiJMcqT3wftVd4uB%2BjbdSyu7n4GyEBZ8sYExeBlxJnYBoSPQevPkwMw1gMEGlSVojNoAIYUyqxtgwHlsiBiyQSc4ozRFknkN5i%2FenHzMGZornx6GcRP3L4SclPPLgSY8thBFIX5otuRWcz1zkmlzhd9pEr6zWU3aJVht0ctPrUjKi%2FYLm2MW9hclYZNb5%2FV8x8ynKO0DBq3mudOrnpYz%2FhLLJgt3z8C4ovjqx0ZdyINpQOolaUcDBCVcfaYx9Eot6yTV07ZzbVjLvdZYQHDIiRspRvkBjAHQYLqJyBlYnSCHHNNIEvO21q3j8%2Fr4x4DCNHVfHOWqIIaCPxAqluZebXvO0pe3AKRwHj5%2Bjlzh02FHuV0PjoSIQZlC5ekNiNIKs2GGWtwcDtUURXqHjVhGmcXWWQHo2RSz8hUMuUueGzysBi9LyAxqKyEl3DMwxMPXTksIGOqUBq6Fg5vE%2Bvcawrb0wGgLBBALbyB%2B9VKb%2FSGY0t%2B%2FaUY7oT4CVLkHWLOENHRV8c%2B4PwvSj2A2Jys8axhtHCqz1RH5c4qy4eTH9Yf05S2w5h01c6kYv6xccQQyKua1VsGWcclibcd2zsXOlx14Gg6cJWfHiPUxhHd%2B4qma2T1L2KNpdwtgrmlCHBODbuyz7gpqNxZAXMQZjYY4FiS9C3uEKQq1unCAn&X-Amz-Signature=f66ff5f9826f0731fcf9cb9888cc140d8a4fd44f953825f6006e0c8285837c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JNKYV76%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAChk5QQ16yKeNNq%2BVdu%2FDG0XFfBYAT8q8CGTst0y3WAIgWMSiLaL%2Fy9%2BCU1O7T7gTSz2vfCssqwwFl8Ve3MngdlQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBtlrU249dqFJbkf9CrcA4LdWIzlhCZwUH%2FTnMMH6iU1bkUtKLQiAW%2FArR2D%2BTDRwtA5K6Hk2XPcHI5d5Ay%2BOiR0t%2B1HOGb9ZtxTKynHRx3oX2bo0XXFvUblQThAhPspOyOvYUMNgUlEx1DVYUKgvrJs%2F0cwx8eUBz9iTQCGZ9KEJ8t73f96KYshO8caCHlvzOXOdO7b0Lg17hPeRfICiJMcqT3wftVd4uB%2BjbdSyu7n4GyEBZ8sYExeBlxJnYBoSPQevPkwMw1gMEGlSVojNoAIYUyqxtgwHlsiBiyQSc4ozRFknkN5i%2FenHzMGZornx6GcRP3L4SclPPLgSY8thBFIX5otuRWcz1zkmlzhd9pEr6zWU3aJVht0ctPrUjKi%2FYLm2MW9hclYZNb5%2FV8x8ynKO0DBq3mudOrnpYz%2FhLLJgt3z8C4ovjqx0ZdyINpQOolaUcDBCVcfaYx9Eot6yTV07ZzbVjLvdZYQHDIiRspRvkBjAHQYLqJyBlYnSCHHNNIEvO21q3j8%2Fr4x4DCNHVfHOWqIIaCPxAqluZebXvO0pe3AKRwHj5%2Bjlzh02FHuV0PjoSIQZlC5ekNiNIKs2GGWtwcDtUURXqHjVhGmcXWWQHo2RSz8hUMuUueGzysBi9LyAxqKyEl3DMwxMPXTksIGOqUBq6Fg5vE%2Bvcawrb0wGgLBBALbyB%2B9VKb%2FSGY0t%2B%2FaUY7oT4CVLkHWLOENHRV8c%2B4PwvSj2A2Jys8axhtHCqz1RH5c4qy4eTH9Yf05S2w5h01c6kYv6xccQQyKua1VsGWcclibcd2zsXOlx14Gg6cJWfHiPUxhHd%2B4qma2T1L2KNpdwtgrmlCHBODbuyz7gpqNxZAXMQZjYY4FiS9C3uEKQq1unCAn&X-Amz-Signature=3d29a6d06d86d2d3dc0a033976dfc78f4d5df073d27388b6452f5efd6e821671&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JNKYV76%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAChk5QQ16yKeNNq%2BVdu%2FDG0XFfBYAT8q8CGTst0y3WAIgWMSiLaL%2Fy9%2BCU1O7T7gTSz2vfCssqwwFl8Ve3MngdlQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBtlrU249dqFJbkf9CrcA4LdWIzlhCZwUH%2FTnMMH6iU1bkUtKLQiAW%2FArR2D%2BTDRwtA5K6Hk2XPcHI5d5Ay%2BOiR0t%2B1HOGb9ZtxTKynHRx3oX2bo0XXFvUblQThAhPspOyOvYUMNgUlEx1DVYUKgvrJs%2F0cwx8eUBz9iTQCGZ9KEJ8t73f96KYshO8caCHlvzOXOdO7b0Lg17hPeRfICiJMcqT3wftVd4uB%2BjbdSyu7n4GyEBZ8sYExeBlxJnYBoSPQevPkwMw1gMEGlSVojNoAIYUyqxtgwHlsiBiyQSc4ozRFknkN5i%2FenHzMGZornx6GcRP3L4SclPPLgSY8thBFIX5otuRWcz1zkmlzhd9pEr6zWU3aJVht0ctPrUjKi%2FYLm2MW9hclYZNb5%2FV8x8ynKO0DBq3mudOrnpYz%2FhLLJgt3z8C4ovjqx0ZdyINpQOolaUcDBCVcfaYx9Eot6yTV07ZzbVjLvdZYQHDIiRspRvkBjAHQYLqJyBlYnSCHHNNIEvO21q3j8%2Fr4x4DCNHVfHOWqIIaCPxAqluZebXvO0pe3AKRwHj5%2Bjlzh02FHuV0PjoSIQZlC5ekNiNIKs2GGWtwcDtUURXqHjVhGmcXWWQHo2RSz8hUMuUueGzysBi9LyAxqKyEl3DMwxMPXTksIGOqUBq6Fg5vE%2Bvcawrb0wGgLBBALbyB%2B9VKb%2FSGY0t%2B%2FaUY7oT4CVLkHWLOENHRV8c%2B4PwvSj2A2Jys8axhtHCqz1RH5c4qy4eTH9Yf05S2w5h01c6kYv6xccQQyKua1VsGWcclibcd2zsXOlx14Gg6cJWfHiPUxhHd%2B4qma2T1L2KNpdwtgrmlCHBODbuyz7gpqNxZAXMQZjYY4FiS9C3uEKQq1unCAn&X-Amz-Signature=b757dea573a30f2bd4d04bd44ca20b489a412f60fda1f408519d1ef0d09c3f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
