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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJFVACD%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCID1TH7syIx%2Ffk4UNlhPAArlXMUkdpL2OOzK3XDT0IsUvAiASlf2BbMmB846K4VMeRsejIr%2FP5TKXXWB6kAKHiUagMCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8FVaioaw3UJz95piKtwDdkaMv9aRlR0vius4NSy4DwFTzzJQrOd8VZnBoRClIiwwVI9yDqukarT%2BSoizLPRTiic005MvB0diWakjdo9h%2BiqxOvV4UWCx%2BQ9Xy8%2F%2BaSWJgqePO3O9T1MZgmwM8aZVIE83KcO%2Fz4G%2BEl%2B7NNHbwlh%2F0VtyZYmjz00CfEP4Y9wgCDbXY7u8knrBIaTkq9loZG9nQSD6b5FcX0XcHLioUw200Y4yjR2jT2suCatUQ%2BEktLQx%2FUjlHglG01YQjeDYIKLAww7rFyeF0L94O30VxX4OUjpEKw5L%2BN9PoeJ8jqjXZEZxnXGPCtJjpG8DnxMMQp1LQ9Uq0jdDREvA72RIZMVAclTLBAk6jVxY5%2BCSkUDxSapM5fdu3XXtMjXTqP8ml%2BAGe4kiOobOb1ErlAlcBa3%2BC8UQh0J4z7R9Z48amtLDShzySm0HWffFOqMqz8%2B1L9vd2MskJn7kIEaNiVXh1sVHH7vFBO41WfR%2FlVgfbIL%2Fdr7acobVymhO7ER1FnY9TsaRyVYQNn6voYF6N0aMqbMkAscf0HP%2FRPMZF7N4pDpjS%2BPpOx9hXs%2FCGbaNm60CjHrh24%2B8mlRSEYVPJViLryRvAhE8kRk%2FkrLGMxVMGznWZZV6qOb%2FP6gQpZswr4uIvgY6pgFlJPDWY%2FLwJIyBBr%2FCN4PiIpmr6AsGTdpSbRC%2FJvdwv6uJqhTXBwMd5zZknjsa7pX6MsF5LLRQUVx99eAKNFDg%2BZvHZT9lv4Kvwctc9us0PkDO%2FwoDhqXCF0yMmvqQ2w3VzGNAskdFYak%2BiFg0H0G%2BfhM2xzsYLEGnXn%2B6m4FlhBxvzzWQKoBgJy5sA1MGBorY0El4CbT39uN3pthJIJbA4CTIg%2FsH&X-Amz-Signature=a29e2eac7a6fd14b26fc3e8890a91f4a734c07f646616589595a07400d6ddf69&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJFVACD%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCID1TH7syIx%2Ffk4UNlhPAArlXMUkdpL2OOzK3XDT0IsUvAiASlf2BbMmB846K4VMeRsejIr%2FP5TKXXWB6kAKHiUagMCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8FVaioaw3UJz95piKtwDdkaMv9aRlR0vius4NSy4DwFTzzJQrOd8VZnBoRClIiwwVI9yDqukarT%2BSoizLPRTiic005MvB0diWakjdo9h%2BiqxOvV4UWCx%2BQ9Xy8%2F%2BaSWJgqePO3O9T1MZgmwM8aZVIE83KcO%2Fz4G%2BEl%2B7NNHbwlh%2F0VtyZYmjz00CfEP4Y9wgCDbXY7u8knrBIaTkq9loZG9nQSD6b5FcX0XcHLioUw200Y4yjR2jT2suCatUQ%2BEktLQx%2FUjlHglG01YQjeDYIKLAww7rFyeF0L94O30VxX4OUjpEKw5L%2BN9PoeJ8jqjXZEZxnXGPCtJjpG8DnxMMQp1LQ9Uq0jdDREvA72RIZMVAclTLBAk6jVxY5%2BCSkUDxSapM5fdu3XXtMjXTqP8ml%2BAGe4kiOobOb1ErlAlcBa3%2BC8UQh0J4z7R9Z48amtLDShzySm0HWffFOqMqz8%2B1L9vd2MskJn7kIEaNiVXh1sVHH7vFBO41WfR%2FlVgfbIL%2Fdr7acobVymhO7ER1FnY9TsaRyVYQNn6voYF6N0aMqbMkAscf0HP%2FRPMZF7N4pDpjS%2BPpOx9hXs%2FCGbaNm60CjHrh24%2B8mlRSEYVPJViLryRvAhE8kRk%2FkrLGMxVMGznWZZV6qOb%2FP6gQpZswr4uIvgY6pgFlJPDWY%2FLwJIyBBr%2FCN4PiIpmr6AsGTdpSbRC%2FJvdwv6uJqhTXBwMd5zZknjsa7pX6MsF5LLRQUVx99eAKNFDg%2BZvHZT9lv4Kvwctc9us0PkDO%2FwoDhqXCF0yMmvqQ2w3VzGNAskdFYak%2BiFg0H0G%2BfhM2xzsYLEGnXn%2B6m4FlhBxvzzWQKoBgJy5sA1MGBorY0El4CbT39uN3pthJIJbA4CTIg%2FsH&X-Amz-Signature=71e6d6b7e0f2d77360a9ba5303d97c8212c949f51efef25f091152ce0119053f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJFVACD%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCID1TH7syIx%2Ffk4UNlhPAArlXMUkdpL2OOzK3XDT0IsUvAiASlf2BbMmB846K4VMeRsejIr%2FP5TKXXWB6kAKHiUagMCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8FVaioaw3UJz95piKtwDdkaMv9aRlR0vius4NSy4DwFTzzJQrOd8VZnBoRClIiwwVI9yDqukarT%2BSoizLPRTiic005MvB0diWakjdo9h%2BiqxOvV4UWCx%2BQ9Xy8%2F%2BaSWJgqePO3O9T1MZgmwM8aZVIE83KcO%2Fz4G%2BEl%2B7NNHbwlh%2F0VtyZYmjz00CfEP4Y9wgCDbXY7u8knrBIaTkq9loZG9nQSD6b5FcX0XcHLioUw200Y4yjR2jT2suCatUQ%2BEktLQx%2FUjlHglG01YQjeDYIKLAww7rFyeF0L94O30VxX4OUjpEKw5L%2BN9PoeJ8jqjXZEZxnXGPCtJjpG8DnxMMQp1LQ9Uq0jdDREvA72RIZMVAclTLBAk6jVxY5%2BCSkUDxSapM5fdu3XXtMjXTqP8ml%2BAGe4kiOobOb1ErlAlcBa3%2BC8UQh0J4z7R9Z48amtLDShzySm0HWffFOqMqz8%2B1L9vd2MskJn7kIEaNiVXh1sVHH7vFBO41WfR%2FlVgfbIL%2Fdr7acobVymhO7ER1FnY9TsaRyVYQNn6voYF6N0aMqbMkAscf0HP%2FRPMZF7N4pDpjS%2BPpOx9hXs%2FCGbaNm60CjHrh24%2B8mlRSEYVPJViLryRvAhE8kRk%2FkrLGMxVMGznWZZV6qOb%2FP6gQpZswr4uIvgY6pgFlJPDWY%2FLwJIyBBr%2FCN4PiIpmr6AsGTdpSbRC%2FJvdwv6uJqhTXBwMd5zZknjsa7pX6MsF5LLRQUVx99eAKNFDg%2BZvHZT9lv4Kvwctc9us0PkDO%2FwoDhqXCF0yMmvqQ2w3VzGNAskdFYak%2BiFg0H0G%2BfhM2xzsYLEGnXn%2B6m4FlhBxvzzWQKoBgJy5sA1MGBorY0El4CbT39uN3pthJIJbA4CTIg%2FsH&X-Amz-Signature=1c3e00d1f48ca19170841bbab2947b98279aafc332d206d005497c8d80578dec&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJFVACD%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCID1TH7syIx%2Ffk4UNlhPAArlXMUkdpL2OOzK3XDT0IsUvAiASlf2BbMmB846K4VMeRsejIr%2FP5TKXXWB6kAKHiUagMCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8FVaioaw3UJz95piKtwDdkaMv9aRlR0vius4NSy4DwFTzzJQrOd8VZnBoRClIiwwVI9yDqukarT%2BSoizLPRTiic005MvB0diWakjdo9h%2BiqxOvV4UWCx%2BQ9Xy8%2F%2BaSWJgqePO3O9T1MZgmwM8aZVIE83KcO%2Fz4G%2BEl%2B7NNHbwlh%2F0VtyZYmjz00CfEP4Y9wgCDbXY7u8knrBIaTkq9loZG9nQSD6b5FcX0XcHLioUw200Y4yjR2jT2suCatUQ%2BEktLQx%2FUjlHglG01YQjeDYIKLAww7rFyeF0L94O30VxX4OUjpEKw5L%2BN9PoeJ8jqjXZEZxnXGPCtJjpG8DnxMMQp1LQ9Uq0jdDREvA72RIZMVAclTLBAk6jVxY5%2BCSkUDxSapM5fdu3XXtMjXTqP8ml%2BAGe4kiOobOb1ErlAlcBa3%2BC8UQh0J4z7R9Z48amtLDShzySm0HWffFOqMqz8%2B1L9vd2MskJn7kIEaNiVXh1sVHH7vFBO41WfR%2FlVgfbIL%2Fdr7acobVymhO7ER1FnY9TsaRyVYQNn6voYF6N0aMqbMkAscf0HP%2FRPMZF7N4pDpjS%2BPpOx9hXs%2FCGbaNm60CjHrh24%2B8mlRSEYVPJViLryRvAhE8kRk%2FkrLGMxVMGznWZZV6qOb%2FP6gQpZswr4uIvgY6pgFlJPDWY%2FLwJIyBBr%2FCN4PiIpmr6AsGTdpSbRC%2FJvdwv6uJqhTXBwMd5zZknjsa7pX6MsF5LLRQUVx99eAKNFDg%2BZvHZT9lv4Kvwctc9us0PkDO%2FwoDhqXCF0yMmvqQ2w3VzGNAskdFYak%2BiFg0H0G%2BfhM2xzsYLEGnXn%2B6m4FlhBxvzzWQKoBgJy5sA1MGBorY0El4CbT39uN3pthJIJbA4CTIg%2FsH&X-Amz-Signature=df66d56a79c34024092bb1958f7421f07ee0251ed1913d8a7ef945104cc98630&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJFVACD%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCID1TH7syIx%2Ffk4UNlhPAArlXMUkdpL2OOzK3XDT0IsUvAiASlf2BbMmB846K4VMeRsejIr%2FP5TKXXWB6kAKHiUagMCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8FVaioaw3UJz95piKtwDdkaMv9aRlR0vius4NSy4DwFTzzJQrOd8VZnBoRClIiwwVI9yDqukarT%2BSoizLPRTiic005MvB0diWakjdo9h%2BiqxOvV4UWCx%2BQ9Xy8%2F%2BaSWJgqePO3O9T1MZgmwM8aZVIE83KcO%2Fz4G%2BEl%2B7NNHbwlh%2F0VtyZYmjz00CfEP4Y9wgCDbXY7u8knrBIaTkq9loZG9nQSD6b5FcX0XcHLioUw200Y4yjR2jT2suCatUQ%2BEktLQx%2FUjlHglG01YQjeDYIKLAww7rFyeF0L94O30VxX4OUjpEKw5L%2BN9PoeJ8jqjXZEZxnXGPCtJjpG8DnxMMQp1LQ9Uq0jdDREvA72RIZMVAclTLBAk6jVxY5%2BCSkUDxSapM5fdu3XXtMjXTqP8ml%2BAGe4kiOobOb1ErlAlcBa3%2BC8UQh0J4z7R9Z48amtLDShzySm0HWffFOqMqz8%2B1L9vd2MskJn7kIEaNiVXh1sVHH7vFBO41WfR%2FlVgfbIL%2Fdr7acobVymhO7ER1FnY9TsaRyVYQNn6voYF6N0aMqbMkAscf0HP%2FRPMZF7N4pDpjS%2BPpOx9hXs%2FCGbaNm60CjHrh24%2B8mlRSEYVPJViLryRvAhE8kRk%2FkrLGMxVMGznWZZV6qOb%2FP6gQpZswr4uIvgY6pgFlJPDWY%2FLwJIyBBr%2FCN4PiIpmr6AsGTdpSbRC%2FJvdwv6uJqhTXBwMd5zZknjsa7pX6MsF5LLRQUVx99eAKNFDg%2BZvHZT9lv4Kvwctc9us0PkDO%2FwoDhqXCF0yMmvqQ2w3VzGNAskdFYak%2BiFg0H0G%2BfhM2xzsYLEGnXn%2B6m4FlhBxvzzWQKoBgJy5sA1MGBorY0El4CbT39uN3pthJIJbA4CTIg%2FsH&X-Amz-Signature=2af820742ac9d1cbad88a2af634922b08c6d49d9e4df00cc5b7d27f716116c79&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
