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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZMZN3K%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEKAGSQVhGxe6X0jcltwtCnGzWYZkPrUeFePjISTnQIAiEAwe1hXohCIX5LYxBhoyxLzzIM0URkOO4m%2BgGhzk3e5N0qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLewnXBnpia%2F97%2B7CrcA8l7mrSwNdLjqBu1Gdt%2FhN0Gco%2FmcfigIFeTPpiSCKlbQLXq0i8BcnO8Z3urD8ule9PGK4t42bbZEkdbzsxD626USSM7OZqnX%2FBoP3DCAfxl50AcG%2BusvUMcILQnmo5AGujUMoOymQwJOcB%2Faz6E2h9aDnRMMb%2F7awYda8YTOrv1sJoBhV0sKIaQKJsGe1V6ykD2Q97deEVfwh6fiflRam4yJKIsg2v1Wd5I%2FNJv04ODG5t5UwDfwCPbkC%2Bt4s4csKrfc0P6alYCegm27Jd7Kt7DxQOrcGAiTsyZIM37IGE96e7Gztdw%2FNo%2FdI%2Bp9eHkEdmZ%2B2OwoTsL3dlHDNgQ3K2m9BEEelNUVitWLTPXDXyZ2YA21WTvc8ZNBJldmalASMmtkQvvSNJWnT3DvR4GG9FCbH8E7JS73FQXiJux2rc3b04byIQiE0tow7DR8soDTKeE3s7zNhPh%2BvD32SF2CxKqM%2FXfU1PF62ubCxWMhqA7Kd%2FeBMXjm6rqHV1%2FGdEYVPimK5tW%2BeT9oBXfdIoand%2FLxrcZBv2M7FZIcOPU9xyBcqhb0%2FhAII0di9C08NdlKzUdhDe32VLnFd2H7lbcToy8GwDvFfhNb9FQgHVnxEZaU3TOz0fEu7le6UEwMOGcmsIGOqUBqfh5dA9FIRFqD%2F9PRxYffLBntFJ4YkyBcSP5jAMV9S4zs4MMDDjEIKDt642%2FdXUnCwcgLcsiwlQUKUcoZOSOavElnostWcbyvZVueI%2FFHC0RZKAFW8bk%2BpTYfJNmpEyyF8Y7pIWxkQ7f2YpgPXRfGn9SvxPpEktiHvn4m%2BzZs%2FYiwcCLHnaJF56wQdYRb0xTi2tTe5BueiUv3oird9FfZhwCh75t&X-Amz-Signature=225037a501ca918ce4d37aca927516075b84e7984ecf54749173a02cf3dbf9b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZMZN3K%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEKAGSQVhGxe6X0jcltwtCnGzWYZkPrUeFePjISTnQIAiEAwe1hXohCIX5LYxBhoyxLzzIM0URkOO4m%2BgGhzk3e5N0qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLewnXBnpia%2F97%2B7CrcA8l7mrSwNdLjqBu1Gdt%2FhN0Gco%2FmcfigIFeTPpiSCKlbQLXq0i8BcnO8Z3urD8ule9PGK4t42bbZEkdbzsxD626USSM7OZqnX%2FBoP3DCAfxl50AcG%2BusvUMcILQnmo5AGujUMoOymQwJOcB%2Faz6E2h9aDnRMMb%2F7awYda8YTOrv1sJoBhV0sKIaQKJsGe1V6ykD2Q97deEVfwh6fiflRam4yJKIsg2v1Wd5I%2FNJv04ODG5t5UwDfwCPbkC%2Bt4s4csKrfc0P6alYCegm27Jd7Kt7DxQOrcGAiTsyZIM37IGE96e7Gztdw%2FNo%2FdI%2Bp9eHkEdmZ%2B2OwoTsL3dlHDNgQ3K2m9BEEelNUVitWLTPXDXyZ2YA21WTvc8ZNBJldmalASMmtkQvvSNJWnT3DvR4GG9FCbH8E7JS73FQXiJux2rc3b04byIQiE0tow7DR8soDTKeE3s7zNhPh%2BvD32SF2CxKqM%2FXfU1PF62ubCxWMhqA7Kd%2FeBMXjm6rqHV1%2FGdEYVPimK5tW%2BeT9oBXfdIoand%2FLxrcZBv2M7FZIcOPU9xyBcqhb0%2FhAII0di9C08NdlKzUdhDe32VLnFd2H7lbcToy8GwDvFfhNb9FQgHVnxEZaU3TOz0fEu7le6UEwMOGcmsIGOqUBqfh5dA9FIRFqD%2F9PRxYffLBntFJ4YkyBcSP5jAMV9S4zs4MMDDjEIKDt642%2FdXUnCwcgLcsiwlQUKUcoZOSOavElnostWcbyvZVueI%2FFHC0RZKAFW8bk%2BpTYfJNmpEyyF8Y7pIWxkQ7f2YpgPXRfGn9SvxPpEktiHvn4m%2BzZs%2FYiwcCLHnaJF56wQdYRb0xTi2tTe5BueiUv3oird9FfZhwCh75t&X-Amz-Signature=334ed980e74a95f64b24534907514497281d53660a1a77e3d614db48752369a1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZMZN3K%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEKAGSQVhGxe6X0jcltwtCnGzWYZkPrUeFePjISTnQIAiEAwe1hXohCIX5LYxBhoyxLzzIM0URkOO4m%2BgGhzk3e5N0qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLewnXBnpia%2F97%2B7CrcA8l7mrSwNdLjqBu1Gdt%2FhN0Gco%2FmcfigIFeTPpiSCKlbQLXq0i8BcnO8Z3urD8ule9PGK4t42bbZEkdbzsxD626USSM7OZqnX%2FBoP3DCAfxl50AcG%2BusvUMcILQnmo5AGujUMoOymQwJOcB%2Faz6E2h9aDnRMMb%2F7awYda8YTOrv1sJoBhV0sKIaQKJsGe1V6ykD2Q97deEVfwh6fiflRam4yJKIsg2v1Wd5I%2FNJv04ODG5t5UwDfwCPbkC%2Bt4s4csKrfc0P6alYCegm27Jd7Kt7DxQOrcGAiTsyZIM37IGE96e7Gztdw%2FNo%2FdI%2Bp9eHkEdmZ%2B2OwoTsL3dlHDNgQ3K2m9BEEelNUVitWLTPXDXyZ2YA21WTvc8ZNBJldmalASMmtkQvvSNJWnT3DvR4GG9FCbH8E7JS73FQXiJux2rc3b04byIQiE0tow7DR8soDTKeE3s7zNhPh%2BvD32SF2CxKqM%2FXfU1PF62ubCxWMhqA7Kd%2FeBMXjm6rqHV1%2FGdEYVPimK5tW%2BeT9oBXfdIoand%2FLxrcZBv2M7FZIcOPU9xyBcqhb0%2FhAII0di9C08NdlKzUdhDe32VLnFd2H7lbcToy8GwDvFfhNb9FQgHVnxEZaU3TOz0fEu7le6UEwMOGcmsIGOqUBqfh5dA9FIRFqD%2F9PRxYffLBntFJ4YkyBcSP5jAMV9S4zs4MMDDjEIKDt642%2FdXUnCwcgLcsiwlQUKUcoZOSOavElnostWcbyvZVueI%2FFHC0RZKAFW8bk%2BpTYfJNmpEyyF8Y7pIWxkQ7f2YpgPXRfGn9SvxPpEktiHvn4m%2BzZs%2FYiwcCLHnaJF56wQdYRb0xTi2tTe5BueiUv3oird9FfZhwCh75t&X-Amz-Signature=062dd6e7d30050df65aff12f5e583b1a6783cd427ca2e0dd103eedb441f27f6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZMZN3K%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEKAGSQVhGxe6X0jcltwtCnGzWYZkPrUeFePjISTnQIAiEAwe1hXohCIX5LYxBhoyxLzzIM0URkOO4m%2BgGhzk3e5N0qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLewnXBnpia%2F97%2B7CrcA8l7mrSwNdLjqBu1Gdt%2FhN0Gco%2FmcfigIFeTPpiSCKlbQLXq0i8BcnO8Z3urD8ule9PGK4t42bbZEkdbzsxD626USSM7OZqnX%2FBoP3DCAfxl50AcG%2BusvUMcILQnmo5AGujUMoOymQwJOcB%2Faz6E2h9aDnRMMb%2F7awYda8YTOrv1sJoBhV0sKIaQKJsGe1V6ykD2Q97deEVfwh6fiflRam4yJKIsg2v1Wd5I%2FNJv04ODG5t5UwDfwCPbkC%2Bt4s4csKrfc0P6alYCegm27Jd7Kt7DxQOrcGAiTsyZIM37IGE96e7Gztdw%2FNo%2FdI%2Bp9eHkEdmZ%2B2OwoTsL3dlHDNgQ3K2m9BEEelNUVitWLTPXDXyZ2YA21WTvc8ZNBJldmalASMmtkQvvSNJWnT3DvR4GG9FCbH8E7JS73FQXiJux2rc3b04byIQiE0tow7DR8soDTKeE3s7zNhPh%2BvD32SF2CxKqM%2FXfU1PF62ubCxWMhqA7Kd%2FeBMXjm6rqHV1%2FGdEYVPimK5tW%2BeT9oBXfdIoand%2FLxrcZBv2M7FZIcOPU9xyBcqhb0%2FhAII0di9C08NdlKzUdhDe32VLnFd2H7lbcToy8GwDvFfhNb9FQgHVnxEZaU3TOz0fEu7le6UEwMOGcmsIGOqUBqfh5dA9FIRFqD%2F9PRxYffLBntFJ4YkyBcSP5jAMV9S4zs4MMDDjEIKDt642%2FdXUnCwcgLcsiwlQUKUcoZOSOavElnostWcbyvZVueI%2FFHC0RZKAFW8bk%2BpTYfJNmpEyyF8Y7pIWxkQ7f2YpgPXRfGn9SvxPpEktiHvn4m%2BzZs%2FYiwcCLHnaJF56wQdYRb0xTi2tTe5BueiUv3oird9FfZhwCh75t&X-Amz-Signature=8a50741a75a22dd49e0e1f652499fa929f75e3e85979dd73e2bc37acb1570c10&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZMZN3K%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEKAGSQVhGxe6X0jcltwtCnGzWYZkPrUeFePjISTnQIAiEAwe1hXohCIX5LYxBhoyxLzzIM0URkOO4m%2BgGhzk3e5N0qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLewnXBnpia%2F97%2B7CrcA8l7mrSwNdLjqBu1Gdt%2FhN0Gco%2FmcfigIFeTPpiSCKlbQLXq0i8BcnO8Z3urD8ule9PGK4t42bbZEkdbzsxD626USSM7OZqnX%2FBoP3DCAfxl50AcG%2BusvUMcILQnmo5AGujUMoOymQwJOcB%2Faz6E2h9aDnRMMb%2F7awYda8YTOrv1sJoBhV0sKIaQKJsGe1V6ykD2Q97deEVfwh6fiflRam4yJKIsg2v1Wd5I%2FNJv04ODG5t5UwDfwCPbkC%2Bt4s4csKrfc0P6alYCegm27Jd7Kt7DxQOrcGAiTsyZIM37IGE96e7Gztdw%2FNo%2FdI%2Bp9eHkEdmZ%2B2OwoTsL3dlHDNgQ3K2m9BEEelNUVitWLTPXDXyZ2YA21WTvc8ZNBJldmalASMmtkQvvSNJWnT3DvR4GG9FCbH8E7JS73FQXiJux2rc3b04byIQiE0tow7DR8soDTKeE3s7zNhPh%2BvD32SF2CxKqM%2FXfU1PF62ubCxWMhqA7Kd%2FeBMXjm6rqHV1%2FGdEYVPimK5tW%2BeT9oBXfdIoand%2FLxrcZBv2M7FZIcOPU9xyBcqhb0%2FhAII0di9C08NdlKzUdhDe32VLnFd2H7lbcToy8GwDvFfhNb9FQgHVnxEZaU3TOz0fEu7le6UEwMOGcmsIGOqUBqfh5dA9FIRFqD%2F9PRxYffLBntFJ4YkyBcSP5jAMV9S4zs4MMDDjEIKDt642%2FdXUnCwcgLcsiwlQUKUcoZOSOavElnostWcbyvZVueI%2FFHC0RZKAFW8bk%2BpTYfJNmpEyyF8Y7pIWxkQ7f2YpgPXRfGn9SvxPpEktiHvn4m%2BzZs%2FYiwcCLHnaJF56wQdYRb0xTi2tTe5BueiUv3oird9FfZhwCh75t&X-Amz-Signature=389498b866e8c3e8bd0cb665849692ea85929edc84967b25b2e2791fc9b71a12&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
