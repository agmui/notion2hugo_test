---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WONOE3HC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB9munhwWpv1LzjQNzvAtjpj88%2BGf7IG062OiaCNRjVPAiAYi51ZoAFHQmN8JV3XRTCmrUXJXDfS1eR0%2F3eXsC1dXSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfh0IEiP6TObKkTsXKtwDnMVzroIt6fO2O9O54AN%2BOE93kajDhFcpipvuZG6Pu1EGZBsDyWdDX7XyTfx89qjBhpT3wU18cghn8RnuFvXJhMxqEhsI9bEGAQVdic2tgucF9n5VsuyW4DFrjEEoxvmlT867LSZHewAMFDNoio0rra1K1fGZcW3jLcOCyds%2B7f%2BNB5a42i9U4SDBCVy4bIkGRxMH1E3KrnSEWqOdhBbPCnBgFrREg1DhojoXImnGm4x%2B4uSYCTwacRkmfQh6%2Fgma1P53B0%2FDHshpNdUvmAO80E5HMx3UY6o%2F5eF5iy%2FVcgTaUMoi7NM8bqkfRvf1tNoIAb7g1bLrud%2BOdNkmulnY5lB5Og3cZYzRvxZ3%2B8zskjrv8FpIhX8lokoMxwuuaTjIrjtdXWNMK66yUs%2B92OlBAZ8Rr0KqNSgxJ3UDLwbCGnvJzgYL8PjCdEicpZ2m5gtTxqIV1Sq7zozfJsaBvzVN7RFnbvKuO5Qhs%2BAxC9PkEFxBjVIVnkhvUT4W%2BmCkfK5H2QWOP8tmss7dxAQiiviJXtm3VvfUFtuoHxF7z72qR1CkAh9CPRuX9Ee0%2FfabuG5nrFmR0bIHZmJPukawYsAQpsQanU2%2FxkTjrWdC3YfCtCfaxSFZ1h6Ac9vsjNow0d%2FZxAY6pgGfxzHBg7uGPf7yU7X5DDyl5T%2BFN9PUjg6SCWZNp8fsJoNcme3LThckEykUcWzkDYEzf0gU84R%2F43ObrGG6ys2erI2S5RFhQKh2m4auUWfHf2DdbwKqwmkHheqXOOb7FVa9ehG25Gmpf%2ByuiWVX5qc1VTld9c19CCc9N7m%2Bh5ChcafI8l5XkqSyF0wOd95GFnVg0lBP9Ty2mmTBtHtiq%2FTxxFvigDCz&X-Amz-Signature=4fdb77d998ae5373168b2d907a73df6360a6be413d6eb2882004405ba7261247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WONOE3HC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB9munhwWpv1LzjQNzvAtjpj88%2BGf7IG062OiaCNRjVPAiAYi51ZoAFHQmN8JV3XRTCmrUXJXDfS1eR0%2F3eXsC1dXSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfh0IEiP6TObKkTsXKtwDnMVzroIt6fO2O9O54AN%2BOE93kajDhFcpipvuZG6Pu1EGZBsDyWdDX7XyTfx89qjBhpT3wU18cghn8RnuFvXJhMxqEhsI9bEGAQVdic2tgucF9n5VsuyW4DFrjEEoxvmlT867LSZHewAMFDNoio0rra1K1fGZcW3jLcOCyds%2B7f%2BNB5a42i9U4SDBCVy4bIkGRxMH1E3KrnSEWqOdhBbPCnBgFrREg1DhojoXImnGm4x%2B4uSYCTwacRkmfQh6%2Fgma1P53B0%2FDHshpNdUvmAO80E5HMx3UY6o%2F5eF5iy%2FVcgTaUMoi7NM8bqkfRvf1tNoIAb7g1bLrud%2BOdNkmulnY5lB5Og3cZYzRvxZ3%2B8zskjrv8FpIhX8lokoMxwuuaTjIrjtdXWNMK66yUs%2B92OlBAZ8Rr0KqNSgxJ3UDLwbCGnvJzgYL8PjCdEicpZ2m5gtTxqIV1Sq7zozfJsaBvzVN7RFnbvKuO5Qhs%2BAxC9PkEFxBjVIVnkhvUT4W%2BmCkfK5H2QWOP8tmss7dxAQiiviJXtm3VvfUFtuoHxF7z72qR1CkAh9CPRuX9Ee0%2FfabuG5nrFmR0bIHZmJPukawYsAQpsQanU2%2FxkTjrWdC3YfCtCfaxSFZ1h6Ac9vsjNow0d%2FZxAY6pgGfxzHBg7uGPf7yU7X5DDyl5T%2BFN9PUjg6SCWZNp8fsJoNcme3LThckEykUcWzkDYEzf0gU84R%2F43ObrGG6ys2erI2S5RFhQKh2m4auUWfHf2DdbwKqwmkHheqXOOb7FVa9ehG25Gmpf%2ByuiWVX5qc1VTld9c19CCc9N7m%2Bh5ChcafI8l5XkqSyF0wOd95GFnVg0lBP9Ty2mmTBtHtiq%2FTxxFvigDCz&X-Amz-Signature=1dd01b86c9184fd7d9278c76d7fbe9a34270fa74d4b4a2d08d6c4ec0e9dfa719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WONOE3HC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB9munhwWpv1LzjQNzvAtjpj88%2BGf7IG062OiaCNRjVPAiAYi51ZoAFHQmN8JV3XRTCmrUXJXDfS1eR0%2F3eXsC1dXSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfh0IEiP6TObKkTsXKtwDnMVzroIt6fO2O9O54AN%2BOE93kajDhFcpipvuZG6Pu1EGZBsDyWdDX7XyTfx89qjBhpT3wU18cghn8RnuFvXJhMxqEhsI9bEGAQVdic2tgucF9n5VsuyW4DFrjEEoxvmlT867LSZHewAMFDNoio0rra1K1fGZcW3jLcOCyds%2B7f%2BNB5a42i9U4SDBCVy4bIkGRxMH1E3KrnSEWqOdhBbPCnBgFrREg1DhojoXImnGm4x%2B4uSYCTwacRkmfQh6%2Fgma1P53B0%2FDHshpNdUvmAO80E5HMx3UY6o%2F5eF5iy%2FVcgTaUMoi7NM8bqkfRvf1tNoIAb7g1bLrud%2BOdNkmulnY5lB5Og3cZYzRvxZ3%2B8zskjrv8FpIhX8lokoMxwuuaTjIrjtdXWNMK66yUs%2B92OlBAZ8Rr0KqNSgxJ3UDLwbCGnvJzgYL8PjCdEicpZ2m5gtTxqIV1Sq7zozfJsaBvzVN7RFnbvKuO5Qhs%2BAxC9PkEFxBjVIVnkhvUT4W%2BmCkfK5H2QWOP8tmss7dxAQiiviJXtm3VvfUFtuoHxF7z72qR1CkAh9CPRuX9Ee0%2FfabuG5nrFmR0bIHZmJPukawYsAQpsQanU2%2FxkTjrWdC3YfCtCfaxSFZ1h6Ac9vsjNow0d%2FZxAY6pgGfxzHBg7uGPf7yU7X5DDyl5T%2BFN9PUjg6SCWZNp8fsJoNcme3LThckEykUcWzkDYEzf0gU84R%2F43ObrGG6ys2erI2S5RFhQKh2m4auUWfHf2DdbwKqwmkHheqXOOb7FVa9ehG25Gmpf%2ByuiWVX5qc1VTld9c19CCc9N7m%2Bh5ChcafI8l5XkqSyF0wOd95GFnVg0lBP9Ty2mmTBtHtiq%2FTxxFvigDCz&X-Amz-Signature=3157ddfc883cfd41bacafe575e2088b4a64178fb6ce15c8bf2e40a7074115f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WONOE3HC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB9munhwWpv1LzjQNzvAtjpj88%2BGf7IG062OiaCNRjVPAiAYi51ZoAFHQmN8JV3XRTCmrUXJXDfS1eR0%2F3eXsC1dXSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfh0IEiP6TObKkTsXKtwDnMVzroIt6fO2O9O54AN%2BOE93kajDhFcpipvuZG6Pu1EGZBsDyWdDX7XyTfx89qjBhpT3wU18cghn8RnuFvXJhMxqEhsI9bEGAQVdic2tgucF9n5VsuyW4DFrjEEoxvmlT867LSZHewAMFDNoio0rra1K1fGZcW3jLcOCyds%2B7f%2BNB5a42i9U4SDBCVy4bIkGRxMH1E3KrnSEWqOdhBbPCnBgFrREg1DhojoXImnGm4x%2B4uSYCTwacRkmfQh6%2Fgma1P53B0%2FDHshpNdUvmAO80E5HMx3UY6o%2F5eF5iy%2FVcgTaUMoi7NM8bqkfRvf1tNoIAb7g1bLrud%2BOdNkmulnY5lB5Og3cZYzRvxZ3%2B8zskjrv8FpIhX8lokoMxwuuaTjIrjtdXWNMK66yUs%2B92OlBAZ8Rr0KqNSgxJ3UDLwbCGnvJzgYL8PjCdEicpZ2m5gtTxqIV1Sq7zozfJsaBvzVN7RFnbvKuO5Qhs%2BAxC9PkEFxBjVIVnkhvUT4W%2BmCkfK5H2QWOP8tmss7dxAQiiviJXtm3VvfUFtuoHxF7z72qR1CkAh9CPRuX9Ee0%2FfabuG5nrFmR0bIHZmJPukawYsAQpsQanU2%2FxkTjrWdC3YfCtCfaxSFZ1h6Ac9vsjNow0d%2FZxAY6pgGfxzHBg7uGPf7yU7X5DDyl5T%2BFN9PUjg6SCWZNp8fsJoNcme3LThckEykUcWzkDYEzf0gU84R%2F43ObrGG6ys2erI2S5RFhQKh2m4auUWfHf2DdbwKqwmkHheqXOOb7FVa9ehG25Gmpf%2ByuiWVX5qc1VTld9c19CCc9N7m%2Bh5ChcafI8l5XkqSyF0wOd95GFnVg0lBP9Ty2mmTBtHtiq%2FTxxFvigDCz&X-Amz-Signature=6732cf8b8a685832f2699e8e79aab1d6a5e39d5eae233d1bd9e1e43cc910271a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WONOE3HC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB9munhwWpv1LzjQNzvAtjpj88%2BGf7IG062OiaCNRjVPAiAYi51ZoAFHQmN8JV3XRTCmrUXJXDfS1eR0%2F3eXsC1dXSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfh0IEiP6TObKkTsXKtwDnMVzroIt6fO2O9O54AN%2BOE93kajDhFcpipvuZG6Pu1EGZBsDyWdDX7XyTfx89qjBhpT3wU18cghn8RnuFvXJhMxqEhsI9bEGAQVdic2tgucF9n5VsuyW4DFrjEEoxvmlT867LSZHewAMFDNoio0rra1K1fGZcW3jLcOCyds%2B7f%2BNB5a42i9U4SDBCVy4bIkGRxMH1E3KrnSEWqOdhBbPCnBgFrREg1DhojoXImnGm4x%2B4uSYCTwacRkmfQh6%2Fgma1P53B0%2FDHshpNdUvmAO80E5HMx3UY6o%2F5eF5iy%2FVcgTaUMoi7NM8bqkfRvf1tNoIAb7g1bLrud%2BOdNkmulnY5lB5Og3cZYzRvxZ3%2B8zskjrv8FpIhX8lokoMxwuuaTjIrjtdXWNMK66yUs%2B92OlBAZ8Rr0KqNSgxJ3UDLwbCGnvJzgYL8PjCdEicpZ2m5gtTxqIV1Sq7zozfJsaBvzVN7RFnbvKuO5Qhs%2BAxC9PkEFxBjVIVnkhvUT4W%2BmCkfK5H2QWOP8tmss7dxAQiiviJXtm3VvfUFtuoHxF7z72qR1CkAh9CPRuX9Ee0%2FfabuG5nrFmR0bIHZmJPukawYsAQpsQanU2%2FxkTjrWdC3YfCtCfaxSFZ1h6Ac9vsjNow0d%2FZxAY6pgGfxzHBg7uGPf7yU7X5DDyl5T%2BFN9PUjg6SCWZNp8fsJoNcme3LThckEykUcWzkDYEzf0gU84R%2F43ObrGG6ys2erI2S5RFhQKh2m4auUWfHf2DdbwKqwmkHheqXOOb7FVa9ehG25Gmpf%2ByuiWVX5qc1VTld9c19CCc9N7m%2Bh5ChcafI8l5XkqSyF0wOd95GFnVg0lBP9Ty2mmTBtHtiq%2FTxxFvigDCz&X-Amz-Signature=b5648b8a8f447f9ca14c9ae1d949c6bcae58cb0940c09bbc141f1f5a652fd955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
