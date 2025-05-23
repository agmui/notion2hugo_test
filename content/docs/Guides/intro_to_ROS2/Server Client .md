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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRPVFSB4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIAOMzoGPqtS%2FYq4lb2wtLprusIp9BBETh10Aa%2BdmAJFfAiBoUqKXXpmphZaRUku08HMD2z43YDIojBDQQIjBqq%2FWvyqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWwzBW%2FS%2BoH11SMa%2FKtwDmdCQ2KAqM%2F4UvSSaIxfGrMkjShG2pxQwl13IJLQXOydrfAAw7RKzyTB%2FViwWTeEJr09R8Ce%2FuBrZhORIxaCeL6TYfy2jizQuzQem%2BAl8%2FeLPJG3vrfdUUl7u4jjtUeQJx9F%2FeqAbhcTML%2FNJegfY4h7%2FwXCSOYzRWUoliFV678a3XAhTAkh0kfSy2yAG9Onbjd7I6BVbDyg3XF7vRf1hK%2BHQHGSIQze%2FieZ6BkSrAH6t3fbzXIhW9NLyx1SBJDF78scEWJAXqcW%2FtPYUUwVJeGejhLNqnaUc58Y88DSB9hqPSSr9%2B%2FqgiElM1v3uhf2BdRQoMghVyD4CFvDwR4j7cWQbDscx8PCNJ5YeGDn5yW95U0a%2B5UtVkJqtQQi9Li%2BYWTH%2BmzTP5qi0rT183rYoBNcNkgbIF8%2BfKWh%2BeLhUs4IMq%2FeLJ2QIhwlC1KXafOPumTyLZGuR6yo08hlBMlOBK1DvoPVRpLEX5XMym3MkrcxCeRlISt%2FSzKr2AcnUlehiewqzw9YI4V%2BuiLaecVDlqQ9SOKL96Ru8V8qneX0ruqbZ59IxZ7DEqbwIkst9eP45%2BYCPWioUvcy5%2Bxz2w0FMlmkpBK7gf3XuMxdA6PeCrQzDIQxG3o5v1WH9z0Uw5cK%2FwQY6pgFQ57pJOEHLGCUxeWZBnZJEFgIdlLhGBMqfyQjifjD25uoQoasZKFm8qP3mCKVcgHxROaINwW%2FJQOrmfOEQZ2WRjadkrSTSTAMldT4XeA0vQtQC9bZGPUFdnUJIZYGH%2F%2FjQtihytZ%2FCXyXu6nUbFzW9bHhQzAEjPmXLsGCb0XYQ8nJaJrLACgYzY3Yp46k31fFir52Je%2Fd%2BLqRRObAyCewFSwNvrYDl&X-Amz-Signature=02c3d5366372ac450ef8d3908b770aa3974f205c5ccfa27d663a630effde534e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRPVFSB4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIAOMzoGPqtS%2FYq4lb2wtLprusIp9BBETh10Aa%2BdmAJFfAiBoUqKXXpmphZaRUku08HMD2z43YDIojBDQQIjBqq%2FWvyqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWwzBW%2FS%2BoH11SMa%2FKtwDmdCQ2KAqM%2F4UvSSaIxfGrMkjShG2pxQwl13IJLQXOydrfAAw7RKzyTB%2FViwWTeEJr09R8Ce%2FuBrZhORIxaCeL6TYfy2jizQuzQem%2BAl8%2FeLPJG3vrfdUUl7u4jjtUeQJx9F%2FeqAbhcTML%2FNJegfY4h7%2FwXCSOYzRWUoliFV678a3XAhTAkh0kfSy2yAG9Onbjd7I6BVbDyg3XF7vRf1hK%2BHQHGSIQze%2FieZ6BkSrAH6t3fbzXIhW9NLyx1SBJDF78scEWJAXqcW%2FtPYUUwVJeGejhLNqnaUc58Y88DSB9hqPSSr9%2B%2FqgiElM1v3uhf2BdRQoMghVyD4CFvDwR4j7cWQbDscx8PCNJ5YeGDn5yW95U0a%2B5UtVkJqtQQi9Li%2BYWTH%2BmzTP5qi0rT183rYoBNcNkgbIF8%2BfKWh%2BeLhUs4IMq%2FeLJ2QIhwlC1KXafOPumTyLZGuR6yo08hlBMlOBK1DvoPVRpLEX5XMym3MkrcxCeRlISt%2FSzKr2AcnUlehiewqzw9YI4V%2BuiLaecVDlqQ9SOKL96Ru8V8qneX0ruqbZ59IxZ7DEqbwIkst9eP45%2BYCPWioUvcy5%2Bxz2w0FMlmkpBK7gf3XuMxdA6PeCrQzDIQxG3o5v1WH9z0Uw5cK%2FwQY6pgFQ57pJOEHLGCUxeWZBnZJEFgIdlLhGBMqfyQjifjD25uoQoasZKFm8qP3mCKVcgHxROaINwW%2FJQOrmfOEQZ2WRjadkrSTSTAMldT4XeA0vQtQC9bZGPUFdnUJIZYGH%2F%2FjQtihytZ%2FCXyXu6nUbFzW9bHhQzAEjPmXLsGCb0XYQ8nJaJrLACgYzY3Yp46k31fFir52Je%2Fd%2BLqRRObAyCewFSwNvrYDl&X-Amz-Signature=0a78aff4ea2b75c85a02d8a2ae5ecc96e8afcee37a5755bfea203ba0d1e5585f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRPVFSB4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIAOMzoGPqtS%2FYq4lb2wtLprusIp9BBETh10Aa%2BdmAJFfAiBoUqKXXpmphZaRUku08HMD2z43YDIojBDQQIjBqq%2FWvyqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWwzBW%2FS%2BoH11SMa%2FKtwDmdCQ2KAqM%2F4UvSSaIxfGrMkjShG2pxQwl13IJLQXOydrfAAw7RKzyTB%2FViwWTeEJr09R8Ce%2FuBrZhORIxaCeL6TYfy2jizQuzQem%2BAl8%2FeLPJG3vrfdUUl7u4jjtUeQJx9F%2FeqAbhcTML%2FNJegfY4h7%2FwXCSOYzRWUoliFV678a3XAhTAkh0kfSy2yAG9Onbjd7I6BVbDyg3XF7vRf1hK%2BHQHGSIQze%2FieZ6BkSrAH6t3fbzXIhW9NLyx1SBJDF78scEWJAXqcW%2FtPYUUwVJeGejhLNqnaUc58Y88DSB9hqPSSr9%2B%2FqgiElM1v3uhf2BdRQoMghVyD4CFvDwR4j7cWQbDscx8PCNJ5YeGDn5yW95U0a%2B5UtVkJqtQQi9Li%2BYWTH%2BmzTP5qi0rT183rYoBNcNkgbIF8%2BfKWh%2BeLhUs4IMq%2FeLJ2QIhwlC1KXafOPumTyLZGuR6yo08hlBMlOBK1DvoPVRpLEX5XMym3MkrcxCeRlISt%2FSzKr2AcnUlehiewqzw9YI4V%2BuiLaecVDlqQ9SOKL96Ru8V8qneX0ruqbZ59IxZ7DEqbwIkst9eP45%2BYCPWioUvcy5%2Bxz2w0FMlmkpBK7gf3XuMxdA6PeCrQzDIQxG3o5v1WH9z0Uw5cK%2FwQY6pgFQ57pJOEHLGCUxeWZBnZJEFgIdlLhGBMqfyQjifjD25uoQoasZKFm8qP3mCKVcgHxROaINwW%2FJQOrmfOEQZ2WRjadkrSTSTAMldT4XeA0vQtQC9bZGPUFdnUJIZYGH%2F%2FjQtihytZ%2FCXyXu6nUbFzW9bHhQzAEjPmXLsGCb0XYQ8nJaJrLACgYzY3Yp46k31fFir52Je%2Fd%2BLqRRObAyCewFSwNvrYDl&X-Amz-Signature=b2a7ab916aa82b019bf1f85eb70bae65c3860f8f2e25b321d801e2fc4bd61905&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRPVFSB4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIAOMzoGPqtS%2FYq4lb2wtLprusIp9BBETh10Aa%2BdmAJFfAiBoUqKXXpmphZaRUku08HMD2z43YDIojBDQQIjBqq%2FWvyqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWwzBW%2FS%2BoH11SMa%2FKtwDmdCQ2KAqM%2F4UvSSaIxfGrMkjShG2pxQwl13IJLQXOydrfAAw7RKzyTB%2FViwWTeEJr09R8Ce%2FuBrZhORIxaCeL6TYfy2jizQuzQem%2BAl8%2FeLPJG3vrfdUUl7u4jjtUeQJx9F%2FeqAbhcTML%2FNJegfY4h7%2FwXCSOYzRWUoliFV678a3XAhTAkh0kfSy2yAG9Onbjd7I6BVbDyg3XF7vRf1hK%2BHQHGSIQze%2FieZ6BkSrAH6t3fbzXIhW9NLyx1SBJDF78scEWJAXqcW%2FtPYUUwVJeGejhLNqnaUc58Y88DSB9hqPSSr9%2B%2FqgiElM1v3uhf2BdRQoMghVyD4CFvDwR4j7cWQbDscx8PCNJ5YeGDn5yW95U0a%2B5UtVkJqtQQi9Li%2BYWTH%2BmzTP5qi0rT183rYoBNcNkgbIF8%2BfKWh%2BeLhUs4IMq%2FeLJ2QIhwlC1KXafOPumTyLZGuR6yo08hlBMlOBK1DvoPVRpLEX5XMym3MkrcxCeRlISt%2FSzKr2AcnUlehiewqzw9YI4V%2BuiLaecVDlqQ9SOKL96Ru8V8qneX0ruqbZ59IxZ7DEqbwIkst9eP45%2BYCPWioUvcy5%2Bxz2w0FMlmkpBK7gf3XuMxdA6PeCrQzDIQxG3o5v1WH9z0Uw5cK%2FwQY6pgFQ57pJOEHLGCUxeWZBnZJEFgIdlLhGBMqfyQjifjD25uoQoasZKFm8qP3mCKVcgHxROaINwW%2FJQOrmfOEQZ2WRjadkrSTSTAMldT4XeA0vQtQC9bZGPUFdnUJIZYGH%2F%2FjQtihytZ%2FCXyXu6nUbFzW9bHhQzAEjPmXLsGCb0XYQ8nJaJrLACgYzY3Yp46k31fFir52Je%2Fd%2BLqRRObAyCewFSwNvrYDl&X-Amz-Signature=f83069062dad4dbf80f8d8fe6c90663e666e1cafa56d40de7ee7d3af43e3ca50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRPVFSB4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIAOMzoGPqtS%2FYq4lb2wtLprusIp9BBETh10Aa%2BdmAJFfAiBoUqKXXpmphZaRUku08HMD2z43YDIojBDQQIjBqq%2FWvyqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWwzBW%2FS%2BoH11SMa%2FKtwDmdCQ2KAqM%2F4UvSSaIxfGrMkjShG2pxQwl13IJLQXOydrfAAw7RKzyTB%2FViwWTeEJr09R8Ce%2FuBrZhORIxaCeL6TYfy2jizQuzQem%2BAl8%2FeLPJG3vrfdUUl7u4jjtUeQJx9F%2FeqAbhcTML%2FNJegfY4h7%2FwXCSOYzRWUoliFV678a3XAhTAkh0kfSy2yAG9Onbjd7I6BVbDyg3XF7vRf1hK%2BHQHGSIQze%2FieZ6BkSrAH6t3fbzXIhW9NLyx1SBJDF78scEWJAXqcW%2FtPYUUwVJeGejhLNqnaUc58Y88DSB9hqPSSr9%2B%2FqgiElM1v3uhf2BdRQoMghVyD4CFvDwR4j7cWQbDscx8PCNJ5YeGDn5yW95U0a%2B5UtVkJqtQQi9Li%2BYWTH%2BmzTP5qi0rT183rYoBNcNkgbIF8%2BfKWh%2BeLhUs4IMq%2FeLJ2QIhwlC1KXafOPumTyLZGuR6yo08hlBMlOBK1DvoPVRpLEX5XMym3MkrcxCeRlISt%2FSzKr2AcnUlehiewqzw9YI4V%2BuiLaecVDlqQ9SOKL96Ru8V8qneX0ruqbZ59IxZ7DEqbwIkst9eP45%2BYCPWioUvcy5%2Bxz2w0FMlmkpBK7gf3XuMxdA6PeCrQzDIQxG3o5v1WH9z0Uw5cK%2FwQY6pgFQ57pJOEHLGCUxeWZBnZJEFgIdlLhGBMqfyQjifjD25uoQoasZKFm8qP3mCKVcgHxROaINwW%2FJQOrmfOEQZ2WRjadkrSTSTAMldT4XeA0vQtQC9bZGPUFdnUJIZYGH%2F%2FjQtihytZ%2FCXyXu6nUbFzW9bHhQzAEjPmXLsGCb0XYQ8nJaJrLACgYzY3Yp46k31fFir52Je%2Fd%2BLqRRObAyCewFSwNvrYDl&X-Amz-Signature=1b450e0f7b34e18e32982f099e7dfdd65fb3419845f4fd4f331326172908b992&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
