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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVUWXGE5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhdMDq8%2F5GSKJeA%2Bi25lZMcgjusnX%2BSlfBlBnl1SplcwIgOxcRlNM%2FlQeuPdZV1EeO1nRUJThmAjFoaVbuAL8V7Dsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMkFh6JLTNLaKvGLFCrcA47IpBW6CYz%2FkvSmAY4MXJhW3qb2rzO89yM5zUuqTaJObwbqzvYMwOCV0n7mBkk9tJV7XEvfM6mrGEDdhadJ6Z1N9SBbpL0vYQjgbfnLwD58WN%2FRuo4tSDoeiE8ykhgrhW8W7DupMbAxNkycNvyUH4pHen7FS%2FecaDwLjiUHS5Ic%2BUVq3Cd9jSXckXol24MAUPGcVYo%2FcpY30Ki5igDVOBCXPV9W3qcs4SE2EQq5um0A5tp8pCtKBOjZKSwlyyj%2BJABOEQ0gEhCjneTwtBPsgTphZTF2Tj7mAJec0nlKIZQpFd25IlV8BO5wq%2FQbN6B4NJxQzcvQy4QsXsmjbLhzeNOQSbouQf57CopxF4akaDBnoE468EwIw0wcv1uXS%2BZtiGLdFimOgHXXnzPqkvCoorfjS2MMKkRLSsCHYygxsVEnhrtS9x4Bye4SCzbmoOjk0%2Fqm4u0CoaqlQHyI7eSf57IHpCkxKW9rYg%2FOZn83FyclNFLDswuB%2BwjnIcR3zAOrawflUxpyW7eWZtHr60kN1oZmKuBApk4DMA5%2F0XnVk70EBXnPz6taGAVn5T7We4EpI1J4rikspwga6Ba1oz%2BUMCk0MoBPUvDcwN4MIMaFgJwCvO5koaEptMpp6FneMPbY1L8GOqUBieNRhmWDYh7zSXwVkkMHuJjC4W155stHMeA8mtlyl7xKTzBck%2FMLdfGHq2hehi6CX72X7InarCwyWOR551OSGG0NV9VTstwFpnr81IZx8zgjYDmejNuZpjiZkJvccj5rb6MZu63jHI0evomjVwuRMwCr5pZ9DGscpJJBFl8D2GJ%2FWH4ChoBBnzBOvh4QU0XqpCzVRdWOlTiyIlAHymnz4Hk%2FoLMJ&X-Amz-Signature=aad8c4b7a7ffbcd2ee8e549f3b65fd982d7f184c4538d33d82ec57df1ed64428&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVUWXGE5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhdMDq8%2F5GSKJeA%2Bi25lZMcgjusnX%2BSlfBlBnl1SplcwIgOxcRlNM%2FlQeuPdZV1EeO1nRUJThmAjFoaVbuAL8V7Dsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMkFh6JLTNLaKvGLFCrcA47IpBW6CYz%2FkvSmAY4MXJhW3qb2rzO89yM5zUuqTaJObwbqzvYMwOCV0n7mBkk9tJV7XEvfM6mrGEDdhadJ6Z1N9SBbpL0vYQjgbfnLwD58WN%2FRuo4tSDoeiE8ykhgrhW8W7DupMbAxNkycNvyUH4pHen7FS%2FecaDwLjiUHS5Ic%2BUVq3Cd9jSXckXol24MAUPGcVYo%2FcpY30Ki5igDVOBCXPV9W3qcs4SE2EQq5um0A5tp8pCtKBOjZKSwlyyj%2BJABOEQ0gEhCjneTwtBPsgTphZTF2Tj7mAJec0nlKIZQpFd25IlV8BO5wq%2FQbN6B4NJxQzcvQy4QsXsmjbLhzeNOQSbouQf57CopxF4akaDBnoE468EwIw0wcv1uXS%2BZtiGLdFimOgHXXnzPqkvCoorfjS2MMKkRLSsCHYygxsVEnhrtS9x4Bye4SCzbmoOjk0%2Fqm4u0CoaqlQHyI7eSf57IHpCkxKW9rYg%2FOZn83FyclNFLDswuB%2BwjnIcR3zAOrawflUxpyW7eWZtHr60kN1oZmKuBApk4DMA5%2F0XnVk70EBXnPz6taGAVn5T7We4EpI1J4rikspwga6Ba1oz%2BUMCk0MoBPUvDcwN4MIMaFgJwCvO5koaEptMpp6FneMPbY1L8GOqUBieNRhmWDYh7zSXwVkkMHuJjC4W155stHMeA8mtlyl7xKTzBck%2FMLdfGHq2hehi6CX72X7InarCwyWOR551OSGG0NV9VTstwFpnr81IZx8zgjYDmejNuZpjiZkJvccj5rb6MZu63jHI0evomjVwuRMwCr5pZ9DGscpJJBFl8D2GJ%2FWH4ChoBBnzBOvh4QU0XqpCzVRdWOlTiyIlAHymnz4Hk%2FoLMJ&X-Amz-Signature=96a9c8d81b906e1fb43cf2ef7b318fb284d74d6482af198be35cffa7aafa1d2e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVUWXGE5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhdMDq8%2F5GSKJeA%2Bi25lZMcgjusnX%2BSlfBlBnl1SplcwIgOxcRlNM%2FlQeuPdZV1EeO1nRUJThmAjFoaVbuAL8V7Dsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMkFh6JLTNLaKvGLFCrcA47IpBW6CYz%2FkvSmAY4MXJhW3qb2rzO89yM5zUuqTaJObwbqzvYMwOCV0n7mBkk9tJV7XEvfM6mrGEDdhadJ6Z1N9SBbpL0vYQjgbfnLwD58WN%2FRuo4tSDoeiE8ykhgrhW8W7DupMbAxNkycNvyUH4pHen7FS%2FecaDwLjiUHS5Ic%2BUVq3Cd9jSXckXol24MAUPGcVYo%2FcpY30Ki5igDVOBCXPV9W3qcs4SE2EQq5um0A5tp8pCtKBOjZKSwlyyj%2BJABOEQ0gEhCjneTwtBPsgTphZTF2Tj7mAJec0nlKIZQpFd25IlV8BO5wq%2FQbN6B4NJxQzcvQy4QsXsmjbLhzeNOQSbouQf57CopxF4akaDBnoE468EwIw0wcv1uXS%2BZtiGLdFimOgHXXnzPqkvCoorfjS2MMKkRLSsCHYygxsVEnhrtS9x4Bye4SCzbmoOjk0%2Fqm4u0CoaqlQHyI7eSf57IHpCkxKW9rYg%2FOZn83FyclNFLDswuB%2BwjnIcR3zAOrawflUxpyW7eWZtHr60kN1oZmKuBApk4DMA5%2F0XnVk70EBXnPz6taGAVn5T7We4EpI1J4rikspwga6Ba1oz%2BUMCk0MoBPUvDcwN4MIMaFgJwCvO5koaEptMpp6FneMPbY1L8GOqUBieNRhmWDYh7zSXwVkkMHuJjC4W155stHMeA8mtlyl7xKTzBck%2FMLdfGHq2hehi6CX72X7InarCwyWOR551OSGG0NV9VTstwFpnr81IZx8zgjYDmejNuZpjiZkJvccj5rb6MZu63jHI0evomjVwuRMwCr5pZ9DGscpJJBFl8D2GJ%2FWH4ChoBBnzBOvh4QU0XqpCzVRdWOlTiyIlAHymnz4Hk%2FoLMJ&X-Amz-Signature=a1768b4f74be38149921dd2a24cdd9ce5a05f793881a4f06056d0ef8bb766b6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVUWXGE5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhdMDq8%2F5GSKJeA%2Bi25lZMcgjusnX%2BSlfBlBnl1SplcwIgOxcRlNM%2FlQeuPdZV1EeO1nRUJThmAjFoaVbuAL8V7Dsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMkFh6JLTNLaKvGLFCrcA47IpBW6CYz%2FkvSmAY4MXJhW3qb2rzO89yM5zUuqTaJObwbqzvYMwOCV0n7mBkk9tJV7XEvfM6mrGEDdhadJ6Z1N9SBbpL0vYQjgbfnLwD58WN%2FRuo4tSDoeiE8ykhgrhW8W7DupMbAxNkycNvyUH4pHen7FS%2FecaDwLjiUHS5Ic%2BUVq3Cd9jSXckXol24MAUPGcVYo%2FcpY30Ki5igDVOBCXPV9W3qcs4SE2EQq5um0A5tp8pCtKBOjZKSwlyyj%2BJABOEQ0gEhCjneTwtBPsgTphZTF2Tj7mAJec0nlKIZQpFd25IlV8BO5wq%2FQbN6B4NJxQzcvQy4QsXsmjbLhzeNOQSbouQf57CopxF4akaDBnoE468EwIw0wcv1uXS%2BZtiGLdFimOgHXXnzPqkvCoorfjS2MMKkRLSsCHYygxsVEnhrtS9x4Bye4SCzbmoOjk0%2Fqm4u0CoaqlQHyI7eSf57IHpCkxKW9rYg%2FOZn83FyclNFLDswuB%2BwjnIcR3zAOrawflUxpyW7eWZtHr60kN1oZmKuBApk4DMA5%2F0XnVk70EBXnPz6taGAVn5T7We4EpI1J4rikspwga6Ba1oz%2BUMCk0MoBPUvDcwN4MIMaFgJwCvO5koaEptMpp6FneMPbY1L8GOqUBieNRhmWDYh7zSXwVkkMHuJjC4W155stHMeA8mtlyl7xKTzBck%2FMLdfGHq2hehi6CX72X7InarCwyWOR551OSGG0NV9VTstwFpnr81IZx8zgjYDmejNuZpjiZkJvccj5rb6MZu63jHI0evomjVwuRMwCr5pZ9DGscpJJBFl8D2GJ%2FWH4ChoBBnzBOvh4QU0XqpCzVRdWOlTiyIlAHymnz4Hk%2FoLMJ&X-Amz-Signature=f2f0780c972fd751b467d55f37887a4c2efe992fe088c9571f55ed17e5d14425&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVUWXGE5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhdMDq8%2F5GSKJeA%2Bi25lZMcgjusnX%2BSlfBlBnl1SplcwIgOxcRlNM%2FlQeuPdZV1EeO1nRUJThmAjFoaVbuAL8V7Dsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMkFh6JLTNLaKvGLFCrcA47IpBW6CYz%2FkvSmAY4MXJhW3qb2rzO89yM5zUuqTaJObwbqzvYMwOCV0n7mBkk9tJV7XEvfM6mrGEDdhadJ6Z1N9SBbpL0vYQjgbfnLwD58WN%2FRuo4tSDoeiE8ykhgrhW8W7DupMbAxNkycNvyUH4pHen7FS%2FecaDwLjiUHS5Ic%2BUVq3Cd9jSXckXol24MAUPGcVYo%2FcpY30Ki5igDVOBCXPV9W3qcs4SE2EQq5um0A5tp8pCtKBOjZKSwlyyj%2BJABOEQ0gEhCjneTwtBPsgTphZTF2Tj7mAJec0nlKIZQpFd25IlV8BO5wq%2FQbN6B4NJxQzcvQy4QsXsmjbLhzeNOQSbouQf57CopxF4akaDBnoE468EwIw0wcv1uXS%2BZtiGLdFimOgHXXnzPqkvCoorfjS2MMKkRLSsCHYygxsVEnhrtS9x4Bye4SCzbmoOjk0%2Fqm4u0CoaqlQHyI7eSf57IHpCkxKW9rYg%2FOZn83FyclNFLDswuB%2BwjnIcR3zAOrawflUxpyW7eWZtHr60kN1oZmKuBApk4DMA5%2F0XnVk70EBXnPz6taGAVn5T7We4EpI1J4rikspwga6Ba1oz%2BUMCk0MoBPUvDcwN4MIMaFgJwCvO5koaEptMpp6FneMPbY1L8GOqUBieNRhmWDYh7zSXwVkkMHuJjC4W155stHMeA8mtlyl7xKTzBck%2FMLdfGHq2hehi6CX72X7InarCwyWOR551OSGG0NV9VTstwFpnr81IZx8zgjYDmejNuZpjiZkJvccj5rb6MZu63jHI0evomjVwuRMwCr5pZ9DGscpJJBFl8D2GJ%2FWH4ChoBBnzBOvh4QU0XqpCzVRdWOlTiyIlAHymnz4Hk%2FoLMJ&X-Amz-Signature=a327c9c55f0641a8c7fa2584ab38813093fda9fb8331772ce6db67f3db6a366c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
