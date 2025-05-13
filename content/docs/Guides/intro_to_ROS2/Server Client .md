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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IXZKUM5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC%2FkDGSTdBQwstoUppK52cN8xn87nKJM6OjnoJ3%2FQtM0QIhAIi%2F249Kl4GWyNRGMBmFcx5hdcTRJVqAlPZ8m%2Bja6%2FhMKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUtR4TZbTPj5kpcsQq3APJCr5zfqZxPaLPBYU6dqP3nfoZyKy4K%2Fd1rHJYvkK98%2FVcFrxz85kQxs4X9glSs0E2kL%2FnWIYGiCbZM75Nd4zxmsTipwdWoZ9ttx7C%2FyQDYWLm7eZrlfb4rFkU9ePsw%2FZNffYWuHdxoivcEJ0mnwrW61Z4h9aSOLB6hz8N%2BgYIz0ty%2BxmBvajerWoGGlNxjFPInSEuAIhjL6B0nKqvqn3PXHAXHHD27Cw1IIqDOix9%2BnazZrDuKp41quBQ3CtPkVoJ8MahMskpBtBAN4kqzfsf21tsqmYrX%2FUZOIlpIrK0JNkd4zVkJoNo%2B3QQTdcIDIrcuv4HiXf9YoGNANVUQafJ2et6%2BjdVnfeNBzjAhUhObSvW9LvQfMXWAOT8GTGCiyVFZ7BHwlRtznkINyWjhP%2F%2BmKGksS%2B6kbv8HsqmwFf9%2FzKSFLkypgo40oquosfn9tk7ovJJxZvplO4azTD7j0kLmCP3wy7gEPP58o%2Fs%2Bkh5uZWRvRJUOSLbftdh32dz7kXdKS0vaYf2cSuWVgfpLUN9073ADncguuSuB91lKADvOL5DLdOm1PuC%2BwmzLVYvnjqcpUX4RNcrSs0%2BtWNp7Q7MQIMsNTRklrZ8TsRrlW6avDO%2FxU8hh9LStJwP%2FDCZjY7BBjqkAaX2mvW2uDvC638ekppwD%2Bnq42HigIYGARmvP8wNvZ1D6rkscjAJ5sEWy2j5tatCCNV2WHdJckpZzDByo%2FkLwmeH0m5xITrBI7HVyK2vrr%2FO3ge1jVd5ikl9jAwJvcSKA9Y8PeFeuB%2FJskzoCgdzN8058f4oUfY7DvJK%2BUu6IHKU5U5fjBjvKjg2nabS6WVav7XysxpYtrjcwQSXSIDWTeUWapOz&X-Amz-Signature=0c35d0b29eeb8f6ed875bb5ff9cb85ce8d17f614eebcff011d896a363a3e737d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IXZKUM5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC%2FkDGSTdBQwstoUppK52cN8xn87nKJM6OjnoJ3%2FQtM0QIhAIi%2F249Kl4GWyNRGMBmFcx5hdcTRJVqAlPZ8m%2Bja6%2FhMKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUtR4TZbTPj5kpcsQq3APJCr5zfqZxPaLPBYU6dqP3nfoZyKy4K%2Fd1rHJYvkK98%2FVcFrxz85kQxs4X9glSs0E2kL%2FnWIYGiCbZM75Nd4zxmsTipwdWoZ9ttx7C%2FyQDYWLm7eZrlfb4rFkU9ePsw%2FZNffYWuHdxoivcEJ0mnwrW61Z4h9aSOLB6hz8N%2BgYIz0ty%2BxmBvajerWoGGlNxjFPInSEuAIhjL6B0nKqvqn3PXHAXHHD27Cw1IIqDOix9%2BnazZrDuKp41quBQ3CtPkVoJ8MahMskpBtBAN4kqzfsf21tsqmYrX%2FUZOIlpIrK0JNkd4zVkJoNo%2B3QQTdcIDIrcuv4HiXf9YoGNANVUQafJ2et6%2BjdVnfeNBzjAhUhObSvW9LvQfMXWAOT8GTGCiyVFZ7BHwlRtznkINyWjhP%2F%2BmKGksS%2B6kbv8HsqmwFf9%2FzKSFLkypgo40oquosfn9tk7ovJJxZvplO4azTD7j0kLmCP3wy7gEPP58o%2Fs%2Bkh5uZWRvRJUOSLbftdh32dz7kXdKS0vaYf2cSuWVgfpLUN9073ADncguuSuB91lKADvOL5DLdOm1PuC%2BwmzLVYvnjqcpUX4RNcrSs0%2BtWNp7Q7MQIMsNTRklrZ8TsRrlW6avDO%2FxU8hh9LStJwP%2FDCZjY7BBjqkAaX2mvW2uDvC638ekppwD%2Bnq42HigIYGARmvP8wNvZ1D6rkscjAJ5sEWy2j5tatCCNV2WHdJckpZzDByo%2FkLwmeH0m5xITrBI7HVyK2vrr%2FO3ge1jVd5ikl9jAwJvcSKA9Y8PeFeuB%2FJskzoCgdzN8058f4oUfY7DvJK%2BUu6IHKU5U5fjBjvKjg2nabS6WVav7XysxpYtrjcwQSXSIDWTeUWapOz&X-Amz-Signature=4998dc9c9481ba775289c21b48d89484d8818eabace534937a422503dfb62abf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IXZKUM5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC%2FkDGSTdBQwstoUppK52cN8xn87nKJM6OjnoJ3%2FQtM0QIhAIi%2F249Kl4GWyNRGMBmFcx5hdcTRJVqAlPZ8m%2Bja6%2FhMKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUtR4TZbTPj5kpcsQq3APJCr5zfqZxPaLPBYU6dqP3nfoZyKy4K%2Fd1rHJYvkK98%2FVcFrxz85kQxs4X9glSs0E2kL%2FnWIYGiCbZM75Nd4zxmsTipwdWoZ9ttx7C%2FyQDYWLm7eZrlfb4rFkU9ePsw%2FZNffYWuHdxoivcEJ0mnwrW61Z4h9aSOLB6hz8N%2BgYIz0ty%2BxmBvajerWoGGlNxjFPInSEuAIhjL6B0nKqvqn3PXHAXHHD27Cw1IIqDOix9%2BnazZrDuKp41quBQ3CtPkVoJ8MahMskpBtBAN4kqzfsf21tsqmYrX%2FUZOIlpIrK0JNkd4zVkJoNo%2B3QQTdcIDIrcuv4HiXf9YoGNANVUQafJ2et6%2BjdVnfeNBzjAhUhObSvW9LvQfMXWAOT8GTGCiyVFZ7BHwlRtznkINyWjhP%2F%2BmKGksS%2B6kbv8HsqmwFf9%2FzKSFLkypgo40oquosfn9tk7ovJJxZvplO4azTD7j0kLmCP3wy7gEPP58o%2Fs%2Bkh5uZWRvRJUOSLbftdh32dz7kXdKS0vaYf2cSuWVgfpLUN9073ADncguuSuB91lKADvOL5DLdOm1PuC%2BwmzLVYvnjqcpUX4RNcrSs0%2BtWNp7Q7MQIMsNTRklrZ8TsRrlW6avDO%2FxU8hh9LStJwP%2FDCZjY7BBjqkAaX2mvW2uDvC638ekppwD%2Bnq42HigIYGARmvP8wNvZ1D6rkscjAJ5sEWy2j5tatCCNV2WHdJckpZzDByo%2FkLwmeH0m5xITrBI7HVyK2vrr%2FO3ge1jVd5ikl9jAwJvcSKA9Y8PeFeuB%2FJskzoCgdzN8058f4oUfY7DvJK%2BUu6IHKU5U5fjBjvKjg2nabS6WVav7XysxpYtrjcwQSXSIDWTeUWapOz&X-Amz-Signature=11a51efe8b8f01a148d815fd19d9f638d746af4f6f9b0ac29d35d03fb7859549&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IXZKUM5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC%2FkDGSTdBQwstoUppK52cN8xn87nKJM6OjnoJ3%2FQtM0QIhAIi%2F249Kl4GWyNRGMBmFcx5hdcTRJVqAlPZ8m%2Bja6%2FhMKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUtR4TZbTPj5kpcsQq3APJCr5zfqZxPaLPBYU6dqP3nfoZyKy4K%2Fd1rHJYvkK98%2FVcFrxz85kQxs4X9glSs0E2kL%2FnWIYGiCbZM75Nd4zxmsTipwdWoZ9ttx7C%2FyQDYWLm7eZrlfb4rFkU9ePsw%2FZNffYWuHdxoivcEJ0mnwrW61Z4h9aSOLB6hz8N%2BgYIz0ty%2BxmBvajerWoGGlNxjFPInSEuAIhjL6B0nKqvqn3PXHAXHHD27Cw1IIqDOix9%2BnazZrDuKp41quBQ3CtPkVoJ8MahMskpBtBAN4kqzfsf21tsqmYrX%2FUZOIlpIrK0JNkd4zVkJoNo%2B3QQTdcIDIrcuv4HiXf9YoGNANVUQafJ2et6%2BjdVnfeNBzjAhUhObSvW9LvQfMXWAOT8GTGCiyVFZ7BHwlRtznkINyWjhP%2F%2BmKGksS%2B6kbv8HsqmwFf9%2FzKSFLkypgo40oquosfn9tk7ovJJxZvplO4azTD7j0kLmCP3wy7gEPP58o%2Fs%2Bkh5uZWRvRJUOSLbftdh32dz7kXdKS0vaYf2cSuWVgfpLUN9073ADncguuSuB91lKADvOL5DLdOm1PuC%2BwmzLVYvnjqcpUX4RNcrSs0%2BtWNp7Q7MQIMsNTRklrZ8TsRrlW6avDO%2FxU8hh9LStJwP%2FDCZjY7BBjqkAaX2mvW2uDvC638ekppwD%2Bnq42HigIYGARmvP8wNvZ1D6rkscjAJ5sEWy2j5tatCCNV2WHdJckpZzDByo%2FkLwmeH0m5xITrBI7HVyK2vrr%2FO3ge1jVd5ikl9jAwJvcSKA9Y8PeFeuB%2FJskzoCgdzN8058f4oUfY7DvJK%2BUu6IHKU5U5fjBjvKjg2nabS6WVav7XysxpYtrjcwQSXSIDWTeUWapOz&X-Amz-Signature=ee231345ff245c6b561e385f8241d69c8f504fad9ec216f1e619415e3e712ab9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IXZKUM5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC%2FkDGSTdBQwstoUppK52cN8xn87nKJM6OjnoJ3%2FQtM0QIhAIi%2F249Kl4GWyNRGMBmFcx5hdcTRJVqAlPZ8m%2Bja6%2FhMKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUtR4TZbTPj5kpcsQq3APJCr5zfqZxPaLPBYU6dqP3nfoZyKy4K%2Fd1rHJYvkK98%2FVcFrxz85kQxs4X9glSs0E2kL%2FnWIYGiCbZM75Nd4zxmsTipwdWoZ9ttx7C%2FyQDYWLm7eZrlfb4rFkU9ePsw%2FZNffYWuHdxoivcEJ0mnwrW61Z4h9aSOLB6hz8N%2BgYIz0ty%2BxmBvajerWoGGlNxjFPInSEuAIhjL6B0nKqvqn3PXHAXHHD27Cw1IIqDOix9%2BnazZrDuKp41quBQ3CtPkVoJ8MahMskpBtBAN4kqzfsf21tsqmYrX%2FUZOIlpIrK0JNkd4zVkJoNo%2B3QQTdcIDIrcuv4HiXf9YoGNANVUQafJ2et6%2BjdVnfeNBzjAhUhObSvW9LvQfMXWAOT8GTGCiyVFZ7BHwlRtznkINyWjhP%2F%2BmKGksS%2B6kbv8HsqmwFf9%2FzKSFLkypgo40oquosfn9tk7ovJJxZvplO4azTD7j0kLmCP3wy7gEPP58o%2Fs%2Bkh5uZWRvRJUOSLbftdh32dz7kXdKS0vaYf2cSuWVgfpLUN9073ADncguuSuB91lKADvOL5DLdOm1PuC%2BwmzLVYvnjqcpUX4RNcrSs0%2BtWNp7Q7MQIMsNTRklrZ8TsRrlW6avDO%2FxU8hh9LStJwP%2FDCZjY7BBjqkAaX2mvW2uDvC638ekppwD%2Bnq42HigIYGARmvP8wNvZ1D6rkscjAJ5sEWy2j5tatCCNV2WHdJckpZzDByo%2FkLwmeH0m5xITrBI7HVyK2vrr%2FO3ge1jVd5ikl9jAwJvcSKA9Y8PeFeuB%2FJskzoCgdzN8058f4oUfY7DvJK%2BUu6IHKU5U5fjBjvKjg2nabS6WVav7XysxpYtrjcwQSXSIDWTeUWapOz&X-Amz-Signature=ddac64ebbb7caca7854b5658e6850d527d74d20b5dd2242f93b8010fa1b46688&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
