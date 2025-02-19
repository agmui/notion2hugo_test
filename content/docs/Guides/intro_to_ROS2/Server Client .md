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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666GXPDAT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbsqKefqJyHkre%2BRZ39gcv8hcf%2BGC24m3hgqP8bmumsAiB2eGs8ArehpBzDEPCJjkSOmdDv6aCBmFwIFDVHdu1EfCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQYdCqzW81cIP45ciKtwDQJpbOwXrGmngqDjXb4pff1HNukUdJDM%2BiFDoV82idiQKtye%2Fh9HSVTHStzcmTPCFwU99CbBo5LecudcsDAb3EXkg%2FqjlIFxxxzQSXfV%2Fxtko5vAZTzYGARk4SoYhUG6O8KVnHUvMdla7agNMudLaX8QGi%2BJ2iZweTiQI2Ihuid6RPYqN7rwSkSdLOMMZLSYfbRHhqEF%2B%2B0xmfct9HHPK0slRTFbiij4uoGq9oyVNRfQnVelBtyo3SSkuj%2BhS%2FX%2FgG13c8Jr7uBtCdLGOV9otClhnTgB0vS%2F6NMli2nDlffdarIfGXf9cFs5%2BZrEE1mlchvIZhgnGgeRY91tsQZMFdd%2Bt80%2BRRvzkPbJT%2BL%2FiKwO6L%2BumUj16QkX69D0wS1%2FZ3dwJ42QjJxonzw3Hi8oGkAYRYOzKaz%2Fm1ZzWfnDezn%2BnV0C55prJndIBNwAFp9OOuZBHbO28%2FbZygwpKMFtDQjmjM1XMXjBxxV6fvTAbWtsRBcXsX6%2Fm0jaNYW%2Fp9mP%2Br8JqCqca0cJf9UnHlNxiA1flrJWF%2Bd1jjxmCNCtIZegTQioheLUvu%2BECo9wlws8itmbNTf4esdguM8RhlkBG2k%2B7urcRyhKPHb9yYv%2B8TATkdPPWJ0APd4nkTR8wme%2FYvQY6pgHNhrRe0%2Fm7O99p9OZkU4iUJOrCMUfLMFsasLsS7t4vlh0ev90A7m%2F%2FlRbyqCYm3Juh8ZjmuLyefo8qlrfVwTnEwt2mc%2Feg%2Be%2F8MY%2BXL0aBXa0n8PW4dpXt2ieJ3dzqTPp%2FthHc7TQyjaXSVUOfiMyuPKGrsMhE2hAxMEmFjfU%2FEvwiTPQYtfD5YG8bbwbFvWQ7yN7nfe3uVynvxLkKyBjjvG1is1iF&X-Amz-Signature=198db376c9b2fb024ae7fe60e61fec0636777e27ffb2262fc247bcce50e16344&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666GXPDAT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbsqKefqJyHkre%2BRZ39gcv8hcf%2BGC24m3hgqP8bmumsAiB2eGs8ArehpBzDEPCJjkSOmdDv6aCBmFwIFDVHdu1EfCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQYdCqzW81cIP45ciKtwDQJpbOwXrGmngqDjXb4pff1HNukUdJDM%2BiFDoV82idiQKtye%2Fh9HSVTHStzcmTPCFwU99CbBo5LecudcsDAb3EXkg%2FqjlIFxxxzQSXfV%2Fxtko5vAZTzYGARk4SoYhUG6O8KVnHUvMdla7agNMudLaX8QGi%2BJ2iZweTiQI2Ihuid6RPYqN7rwSkSdLOMMZLSYfbRHhqEF%2B%2B0xmfct9HHPK0slRTFbiij4uoGq9oyVNRfQnVelBtyo3SSkuj%2BhS%2FX%2FgG13c8Jr7uBtCdLGOV9otClhnTgB0vS%2F6NMli2nDlffdarIfGXf9cFs5%2BZrEE1mlchvIZhgnGgeRY91tsQZMFdd%2Bt80%2BRRvzkPbJT%2BL%2FiKwO6L%2BumUj16QkX69D0wS1%2FZ3dwJ42QjJxonzw3Hi8oGkAYRYOzKaz%2Fm1ZzWfnDezn%2BnV0C55prJndIBNwAFp9OOuZBHbO28%2FbZygwpKMFtDQjmjM1XMXjBxxV6fvTAbWtsRBcXsX6%2Fm0jaNYW%2Fp9mP%2Br8JqCqca0cJf9UnHlNxiA1flrJWF%2Bd1jjxmCNCtIZegTQioheLUvu%2BECo9wlws8itmbNTf4esdguM8RhlkBG2k%2B7urcRyhKPHb9yYv%2B8TATkdPPWJ0APd4nkTR8wme%2FYvQY6pgHNhrRe0%2Fm7O99p9OZkU4iUJOrCMUfLMFsasLsS7t4vlh0ev90A7m%2F%2FlRbyqCYm3Juh8ZjmuLyefo8qlrfVwTnEwt2mc%2Feg%2Be%2F8MY%2BXL0aBXa0n8PW4dpXt2ieJ3dzqTPp%2FthHc7TQyjaXSVUOfiMyuPKGrsMhE2hAxMEmFjfU%2FEvwiTPQYtfD5YG8bbwbFvWQ7yN7nfe3uVynvxLkKyBjjvG1is1iF&X-Amz-Signature=4e53e6e20015a1de1c04f4f35c647b9a803da212a9962753f091c9d58b5c537c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666GXPDAT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbsqKefqJyHkre%2BRZ39gcv8hcf%2BGC24m3hgqP8bmumsAiB2eGs8ArehpBzDEPCJjkSOmdDv6aCBmFwIFDVHdu1EfCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQYdCqzW81cIP45ciKtwDQJpbOwXrGmngqDjXb4pff1HNukUdJDM%2BiFDoV82idiQKtye%2Fh9HSVTHStzcmTPCFwU99CbBo5LecudcsDAb3EXkg%2FqjlIFxxxzQSXfV%2Fxtko5vAZTzYGARk4SoYhUG6O8KVnHUvMdla7agNMudLaX8QGi%2BJ2iZweTiQI2Ihuid6RPYqN7rwSkSdLOMMZLSYfbRHhqEF%2B%2B0xmfct9HHPK0slRTFbiij4uoGq9oyVNRfQnVelBtyo3SSkuj%2BhS%2FX%2FgG13c8Jr7uBtCdLGOV9otClhnTgB0vS%2F6NMli2nDlffdarIfGXf9cFs5%2BZrEE1mlchvIZhgnGgeRY91tsQZMFdd%2Bt80%2BRRvzkPbJT%2BL%2FiKwO6L%2BumUj16QkX69D0wS1%2FZ3dwJ42QjJxonzw3Hi8oGkAYRYOzKaz%2Fm1ZzWfnDezn%2BnV0C55prJndIBNwAFp9OOuZBHbO28%2FbZygwpKMFtDQjmjM1XMXjBxxV6fvTAbWtsRBcXsX6%2Fm0jaNYW%2Fp9mP%2Br8JqCqca0cJf9UnHlNxiA1flrJWF%2Bd1jjxmCNCtIZegTQioheLUvu%2BECo9wlws8itmbNTf4esdguM8RhlkBG2k%2B7urcRyhKPHb9yYv%2B8TATkdPPWJ0APd4nkTR8wme%2FYvQY6pgHNhrRe0%2Fm7O99p9OZkU4iUJOrCMUfLMFsasLsS7t4vlh0ev90A7m%2F%2FlRbyqCYm3Juh8ZjmuLyefo8qlrfVwTnEwt2mc%2Feg%2Be%2F8MY%2BXL0aBXa0n8PW4dpXt2ieJ3dzqTPp%2FthHc7TQyjaXSVUOfiMyuPKGrsMhE2hAxMEmFjfU%2FEvwiTPQYtfD5YG8bbwbFvWQ7yN7nfe3uVynvxLkKyBjjvG1is1iF&X-Amz-Signature=f96cf85710bc2973228225d706d5f1a23341542467b41c5483fbae6c3d740c5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666GXPDAT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbsqKefqJyHkre%2BRZ39gcv8hcf%2BGC24m3hgqP8bmumsAiB2eGs8ArehpBzDEPCJjkSOmdDv6aCBmFwIFDVHdu1EfCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQYdCqzW81cIP45ciKtwDQJpbOwXrGmngqDjXb4pff1HNukUdJDM%2BiFDoV82idiQKtye%2Fh9HSVTHStzcmTPCFwU99CbBo5LecudcsDAb3EXkg%2FqjlIFxxxzQSXfV%2Fxtko5vAZTzYGARk4SoYhUG6O8KVnHUvMdla7agNMudLaX8QGi%2BJ2iZweTiQI2Ihuid6RPYqN7rwSkSdLOMMZLSYfbRHhqEF%2B%2B0xmfct9HHPK0slRTFbiij4uoGq9oyVNRfQnVelBtyo3SSkuj%2BhS%2FX%2FgG13c8Jr7uBtCdLGOV9otClhnTgB0vS%2F6NMli2nDlffdarIfGXf9cFs5%2BZrEE1mlchvIZhgnGgeRY91tsQZMFdd%2Bt80%2BRRvzkPbJT%2BL%2FiKwO6L%2BumUj16QkX69D0wS1%2FZ3dwJ42QjJxonzw3Hi8oGkAYRYOzKaz%2Fm1ZzWfnDezn%2BnV0C55prJndIBNwAFp9OOuZBHbO28%2FbZygwpKMFtDQjmjM1XMXjBxxV6fvTAbWtsRBcXsX6%2Fm0jaNYW%2Fp9mP%2Br8JqCqca0cJf9UnHlNxiA1flrJWF%2Bd1jjxmCNCtIZegTQioheLUvu%2BECo9wlws8itmbNTf4esdguM8RhlkBG2k%2B7urcRyhKPHb9yYv%2B8TATkdPPWJ0APd4nkTR8wme%2FYvQY6pgHNhrRe0%2Fm7O99p9OZkU4iUJOrCMUfLMFsasLsS7t4vlh0ev90A7m%2F%2FlRbyqCYm3Juh8ZjmuLyefo8qlrfVwTnEwt2mc%2Feg%2Be%2F8MY%2BXL0aBXa0n8PW4dpXt2ieJ3dzqTPp%2FthHc7TQyjaXSVUOfiMyuPKGrsMhE2hAxMEmFjfU%2FEvwiTPQYtfD5YG8bbwbFvWQ7yN7nfe3uVynvxLkKyBjjvG1is1iF&X-Amz-Signature=f762467eee3f416ba28547cb2188abbdffe401cadce6faa587e93d7b8fb7ce11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666GXPDAT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbsqKefqJyHkre%2BRZ39gcv8hcf%2BGC24m3hgqP8bmumsAiB2eGs8ArehpBzDEPCJjkSOmdDv6aCBmFwIFDVHdu1EfCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQYdCqzW81cIP45ciKtwDQJpbOwXrGmngqDjXb4pff1HNukUdJDM%2BiFDoV82idiQKtye%2Fh9HSVTHStzcmTPCFwU99CbBo5LecudcsDAb3EXkg%2FqjlIFxxxzQSXfV%2Fxtko5vAZTzYGARk4SoYhUG6O8KVnHUvMdla7agNMudLaX8QGi%2BJ2iZweTiQI2Ihuid6RPYqN7rwSkSdLOMMZLSYfbRHhqEF%2B%2B0xmfct9HHPK0slRTFbiij4uoGq9oyVNRfQnVelBtyo3SSkuj%2BhS%2FX%2FgG13c8Jr7uBtCdLGOV9otClhnTgB0vS%2F6NMli2nDlffdarIfGXf9cFs5%2BZrEE1mlchvIZhgnGgeRY91tsQZMFdd%2Bt80%2BRRvzkPbJT%2BL%2FiKwO6L%2BumUj16QkX69D0wS1%2FZ3dwJ42QjJxonzw3Hi8oGkAYRYOzKaz%2Fm1ZzWfnDezn%2BnV0C55prJndIBNwAFp9OOuZBHbO28%2FbZygwpKMFtDQjmjM1XMXjBxxV6fvTAbWtsRBcXsX6%2Fm0jaNYW%2Fp9mP%2Br8JqCqca0cJf9UnHlNxiA1flrJWF%2Bd1jjxmCNCtIZegTQioheLUvu%2BECo9wlws8itmbNTf4esdguM8RhlkBG2k%2B7urcRyhKPHb9yYv%2B8TATkdPPWJ0APd4nkTR8wme%2FYvQY6pgHNhrRe0%2Fm7O99p9OZkU4iUJOrCMUfLMFsasLsS7t4vlh0ev90A7m%2F%2FlRbyqCYm3Juh8ZjmuLyefo8qlrfVwTnEwt2mc%2Feg%2Be%2F8MY%2BXL0aBXa0n8PW4dpXt2ieJ3dzqTPp%2FthHc7TQyjaXSVUOfiMyuPKGrsMhE2hAxMEmFjfU%2FEvwiTPQYtfD5YG8bbwbFvWQ7yN7nfe3uVynvxLkKyBjjvG1is1iF&X-Amz-Signature=dc31157393738678c21046cc86f5674fce3b0d6f504183ab5331790fbd8a9ef3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
