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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYSJLPB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFAz9DNJisDYyYctRTA%2FlFqPIIa1noH17d76rPqsObjwIhAMmsmudSo%2BB6twAtkqPiMtCYI4TZHZw2bPskbftog1M%2BKv8DCEIQABoMNjM3NDIzMTgzODA1Igz069vafXfBLQPKhJgq3APHfgqAU%2B564p7qglOWFdGAofVvR1Mjd1VE71slH6ylllbmvQConMuWUynQvMoVrkVxRPRyhEm%2FeI7SSn7QmDbBwbq2c0aCMSl9KVzOlE5DSokimn7UkuzF9XW6z9SnQdZElYO2Qq5Jc1pbAh083QxfGGy5PRwPXWceJNYYJAxs1ak0H8EGVrHEojLNQQ8XjKVdIIh7L9KayN9NsH%2Bjf6lk9UOgy6ajJ6EaDKBZ4ydfLMwMrorsiSyZIERPQz%2BPyQXu2pVIWUo4aK8%2FpwM78vKU4z6hQajktC17VTMT9gx5JHNeXtXCWlYN%2BCoTQve4OLzYgQm62quDXH%2FR3bM%2FKhvdUi7pGKpFC1ceIosuDzykZ%2FkG8%2B3vXAM7f9qzf4CZLMjnIGNXp7gik48k5UApCrS1xl0kUgh%2FjfGhgy97VJqxiMbGcTsB4vILtasfno7kwyoHmKDKjPsFpOQsg9yVCBriLVAnrG%2FfBFxdLLdz%2Fo8E6wB0Lys6elluJicOoqa8WtdWTRNmPCt2oeWj2LweDXHX4azcZdMqixb9ienZRIgsQRv2fqDU8%2Bfoc87tRwhNswNJ3mRV2%2BQS8FCxhPx1WZjkPV6gRLF1OX9IlG%2BTwyKSi%2F4Jb4GbQCHzN9EJxDDo2f2%2FBjqkAaFgqwN22jM7KE4Fn0%2F4dwPwV7PcqrzhHkWaHg7o50AdFxetbbjjEC2%2BCIW%2BjaMI%2FG8kImtBPux%2BbZ2FbN8SK5%2BYHFB6VVmf2HH75bWcpch7qWhcqyXG%2BV3Zs0DVSir1Kdv9PXMqyMs%2BcWmgq1KQK0B4NLrSWNVVTFMJlJPOR4eD4FRYPwZ0zbF1QW5vl1uUzOUxC%2BDTMrHu%2B1jz%2FE6uOEeACtbt&X-Amz-Signature=04a429efd95be41caaa26526f7942abef4e24832f28cad069d2f7d4cd190073f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYSJLPB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFAz9DNJisDYyYctRTA%2FlFqPIIa1noH17d76rPqsObjwIhAMmsmudSo%2BB6twAtkqPiMtCYI4TZHZw2bPskbftog1M%2BKv8DCEIQABoMNjM3NDIzMTgzODA1Igz069vafXfBLQPKhJgq3APHfgqAU%2B564p7qglOWFdGAofVvR1Mjd1VE71slH6ylllbmvQConMuWUynQvMoVrkVxRPRyhEm%2FeI7SSn7QmDbBwbq2c0aCMSl9KVzOlE5DSokimn7UkuzF9XW6z9SnQdZElYO2Qq5Jc1pbAh083QxfGGy5PRwPXWceJNYYJAxs1ak0H8EGVrHEojLNQQ8XjKVdIIh7L9KayN9NsH%2Bjf6lk9UOgy6ajJ6EaDKBZ4ydfLMwMrorsiSyZIERPQz%2BPyQXu2pVIWUo4aK8%2FpwM78vKU4z6hQajktC17VTMT9gx5JHNeXtXCWlYN%2BCoTQve4OLzYgQm62quDXH%2FR3bM%2FKhvdUi7pGKpFC1ceIosuDzykZ%2FkG8%2B3vXAM7f9qzf4CZLMjnIGNXp7gik48k5UApCrS1xl0kUgh%2FjfGhgy97VJqxiMbGcTsB4vILtasfno7kwyoHmKDKjPsFpOQsg9yVCBriLVAnrG%2FfBFxdLLdz%2Fo8E6wB0Lys6elluJicOoqa8WtdWTRNmPCt2oeWj2LweDXHX4azcZdMqixb9ienZRIgsQRv2fqDU8%2Bfoc87tRwhNswNJ3mRV2%2BQS8FCxhPx1WZjkPV6gRLF1OX9IlG%2BTwyKSi%2F4Jb4GbQCHzN9EJxDDo2f2%2FBjqkAaFgqwN22jM7KE4Fn0%2F4dwPwV7PcqrzhHkWaHg7o50AdFxetbbjjEC2%2BCIW%2BjaMI%2FG8kImtBPux%2BbZ2FbN8SK5%2BYHFB6VVmf2HH75bWcpch7qWhcqyXG%2BV3Zs0DVSir1Kdv9PXMqyMs%2BcWmgq1KQK0B4NLrSWNVVTFMJlJPOR4eD4FRYPwZ0zbF1QW5vl1uUzOUxC%2BDTMrHu%2B1jz%2FE6uOEeACtbt&X-Amz-Signature=9049dbd9bd23d8aaf134e6655376564eb5d980e0037054bd73405930b4bbc187&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYSJLPB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFAz9DNJisDYyYctRTA%2FlFqPIIa1noH17d76rPqsObjwIhAMmsmudSo%2BB6twAtkqPiMtCYI4TZHZw2bPskbftog1M%2BKv8DCEIQABoMNjM3NDIzMTgzODA1Igz069vafXfBLQPKhJgq3APHfgqAU%2B564p7qglOWFdGAofVvR1Mjd1VE71slH6ylllbmvQConMuWUynQvMoVrkVxRPRyhEm%2FeI7SSn7QmDbBwbq2c0aCMSl9KVzOlE5DSokimn7UkuzF9XW6z9SnQdZElYO2Qq5Jc1pbAh083QxfGGy5PRwPXWceJNYYJAxs1ak0H8EGVrHEojLNQQ8XjKVdIIh7L9KayN9NsH%2Bjf6lk9UOgy6ajJ6EaDKBZ4ydfLMwMrorsiSyZIERPQz%2BPyQXu2pVIWUo4aK8%2FpwM78vKU4z6hQajktC17VTMT9gx5JHNeXtXCWlYN%2BCoTQve4OLzYgQm62quDXH%2FR3bM%2FKhvdUi7pGKpFC1ceIosuDzykZ%2FkG8%2B3vXAM7f9qzf4CZLMjnIGNXp7gik48k5UApCrS1xl0kUgh%2FjfGhgy97VJqxiMbGcTsB4vILtasfno7kwyoHmKDKjPsFpOQsg9yVCBriLVAnrG%2FfBFxdLLdz%2Fo8E6wB0Lys6elluJicOoqa8WtdWTRNmPCt2oeWj2LweDXHX4azcZdMqixb9ienZRIgsQRv2fqDU8%2Bfoc87tRwhNswNJ3mRV2%2BQS8FCxhPx1WZjkPV6gRLF1OX9IlG%2BTwyKSi%2F4Jb4GbQCHzN9EJxDDo2f2%2FBjqkAaFgqwN22jM7KE4Fn0%2F4dwPwV7PcqrzhHkWaHg7o50AdFxetbbjjEC2%2BCIW%2BjaMI%2FG8kImtBPux%2BbZ2FbN8SK5%2BYHFB6VVmf2HH75bWcpch7qWhcqyXG%2BV3Zs0DVSir1Kdv9PXMqyMs%2BcWmgq1KQK0B4NLrSWNVVTFMJlJPOR4eD4FRYPwZ0zbF1QW5vl1uUzOUxC%2BDTMrHu%2B1jz%2FE6uOEeACtbt&X-Amz-Signature=1dc963bcba39222910829c6a138b6f8e31d7c45bb235dac9729140f2f5a622fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYSJLPB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFAz9DNJisDYyYctRTA%2FlFqPIIa1noH17d76rPqsObjwIhAMmsmudSo%2BB6twAtkqPiMtCYI4TZHZw2bPskbftog1M%2BKv8DCEIQABoMNjM3NDIzMTgzODA1Igz069vafXfBLQPKhJgq3APHfgqAU%2B564p7qglOWFdGAofVvR1Mjd1VE71slH6ylllbmvQConMuWUynQvMoVrkVxRPRyhEm%2FeI7SSn7QmDbBwbq2c0aCMSl9KVzOlE5DSokimn7UkuzF9XW6z9SnQdZElYO2Qq5Jc1pbAh083QxfGGy5PRwPXWceJNYYJAxs1ak0H8EGVrHEojLNQQ8XjKVdIIh7L9KayN9NsH%2Bjf6lk9UOgy6ajJ6EaDKBZ4ydfLMwMrorsiSyZIERPQz%2BPyQXu2pVIWUo4aK8%2FpwM78vKU4z6hQajktC17VTMT9gx5JHNeXtXCWlYN%2BCoTQve4OLzYgQm62quDXH%2FR3bM%2FKhvdUi7pGKpFC1ceIosuDzykZ%2FkG8%2B3vXAM7f9qzf4CZLMjnIGNXp7gik48k5UApCrS1xl0kUgh%2FjfGhgy97VJqxiMbGcTsB4vILtasfno7kwyoHmKDKjPsFpOQsg9yVCBriLVAnrG%2FfBFxdLLdz%2Fo8E6wB0Lys6elluJicOoqa8WtdWTRNmPCt2oeWj2LweDXHX4azcZdMqixb9ienZRIgsQRv2fqDU8%2Bfoc87tRwhNswNJ3mRV2%2BQS8FCxhPx1WZjkPV6gRLF1OX9IlG%2BTwyKSi%2F4Jb4GbQCHzN9EJxDDo2f2%2FBjqkAaFgqwN22jM7KE4Fn0%2F4dwPwV7PcqrzhHkWaHg7o50AdFxetbbjjEC2%2BCIW%2BjaMI%2FG8kImtBPux%2BbZ2FbN8SK5%2BYHFB6VVmf2HH75bWcpch7qWhcqyXG%2BV3Zs0DVSir1Kdv9PXMqyMs%2BcWmgq1KQK0B4NLrSWNVVTFMJlJPOR4eD4FRYPwZ0zbF1QW5vl1uUzOUxC%2BDTMrHu%2B1jz%2FE6uOEeACtbt&X-Amz-Signature=510e96c9179de6416991a6c556c4db3364d24a04d1f04d19a6808d874f1589f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYSJLPB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFAz9DNJisDYyYctRTA%2FlFqPIIa1noH17d76rPqsObjwIhAMmsmudSo%2BB6twAtkqPiMtCYI4TZHZw2bPskbftog1M%2BKv8DCEIQABoMNjM3NDIzMTgzODA1Igz069vafXfBLQPKhJgq3APHfgqAU%2B564p7qglOWFdGAofVvR1Mjd1VE71slH6ylllbmvQConMuWUynQvMoVrkVxRPRyhEm%2FeI7SSn7QmDbBwbq2c0aCMSl9KVzOlE5DSokimn7UkuzF9XW6z9SnQdZElYO2Qq5Jc1pbAh083QxfGGy5PRwPXWceJNYYJAxs1ak0H8EGVrHEojLNQQ8XjKVdIIh7L9KayN9NsH%2Bjf6lk9UOgy6ajJ6EaDKBZ4ydfLMwMrorsiSyZIERPQz%2BPyQXu2pVIWUo4aK8%2FpwM78vKU4z6hQajktC17VTMT9gx5JHNeXtXCWlYN%2BCoTQve4OLzYgQm62quDXH%2FR3bM%2FKhvdUi7pGKpFC1ceIosuDzykZ%2FkG8%2B3vXAM7f9qzf4CZLMjnIGNXp7gik48k5UApCrS1xl0kUgh%2FjfGhgy97VJqxiMbGcTsB4vILtasfno7kwyoHmKDKjPsFpOQsg9yVCBriLVAnrG%2FfBFxdLLdz%2Fo8E6wB0Lys6elluJicOoqa8WtdWTRNmPCt2oeWj2LweDXHX4azcZdMqixb9ienZRIgsQRv2fqDU8%2Bfoc87tRwhNswNJ3mRV2%2BQS8FCxhPx1WZjkPV6gRLF1OX9IlG%2BTwyKSi%2F4Jb4GbQCHzN9EJxDDo2f2%2FBjqkAaFgqwN22jM7KE4Fn0%2F4dwPwV7PcqrzhHkWaHg7o50AdFxetbbjjEC2%2BCIW%2BjaMI%2FG8kImtBPux%2BbZ2FbN8SK5%2BYHFB6VVmf2HH75bWcpch7qWhcqyXG%2BV3Zs0DVSir1Kdv9PXMqyMs%2BcWmgq1KQK0B4NLrSWNVVTFMJlJPOR4eD4FRYPwZ0zbF1QW5vl1uUzOUxC%2BDTMrHu%2B1jz%2FE6uOEeACtbt&X-Amz-Signature=d06bfd19351c2274e18d1c6b083712401914ce20406b791d7ef6938ff7dd19fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
