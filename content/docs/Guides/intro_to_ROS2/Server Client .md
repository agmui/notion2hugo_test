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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AKDY22%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgmyucVNXy%2BzJ3IF1ox0wuWqVwXJ4lrUAlIKw5XecGRwIhAPmMGrSAbQn78TMJPaV9Rqv%2Fn5SEChf5Pcysx1C8L7qoKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhRoEEfHadtn8X0jgq3APcq83g6p59XxdTj3Eh%2BKayS%2F1DpE4R9d33sGkG8PBPT0Cmn7bqICQXLgxdDM2noxuyKXKPjFlbcrJ3cW%2Bi7aKMSMOmDOiLb5O53kcFwts65fKWwWvCZHxmJdjGBFSmOPipohqJSJP30nAmtr%2Fu6WqeJ3CaU6h9XRpmPWnNnTJMqXUsOJhsoLDABLrHtkb%2FsYsMruadUwxGAswst8Ep7CE31VxKSO6RXc13IvmgcpDisw%2FZpeXgtTVRCWk3XcyoRhuGvZt7FI90cOMuaU9vCmP22%2BrVSiMq4EmM0mTkVqn8ou%2BjIPQauSJZ3BfvgcsfHk%2BAmEIOSBp7pndsf530vtnCl3xvJML%2BFBXPSqjCTW1XgPIcT8v6ZDVCGrqilZaGLwp7fadO8ZLwIYVCfFdE3HVJqiSxWVLqkuhionG2TXUfGZCHDhffPTzvpTrbjn4NwkJ9EMckAFGcN5z6w%2BLdRvquzx8W0Z4IoFjRmRlpJl3YekKrve%2BXIOYBgMSn%2FY5gFr%2BiKJQwWDHNTOJcuiN7UfpMqeB14Ftfhk60w8aP5AdqP7b1mb3QJKb7vsGzG6BdKZoY5HgD1JPB%2BJwhckXEFHvirylPJ4rwtrea5nJYD8E3oaVzywWGs0wXOdD8cTD58qXEBjqkAevHNjt8NJqSHkdUMdvqv4Mnwpwx8PnX8UWHDLpPSnFmKM3J2dhPxVjUv7XSFDx8HDh%2F77VgRDKB1Rbwn3ghWHiahCH%2FAD%2Fg%2BrRBNEPw9n%2Bob%2FCwFiBFV1EzL0W%2FWCF1w42eK6%2BDr7LrAWYVOtfU7BnndhwP%2FXOUlZkmUSC2S145XV1izOFQbhNWYIsONlXMF2ZsV92rcQ6WxF5vqoc9wSLKCb1e&X-Amz-Signature=7573cf04ce753dbced0a0583ab871f9e33589469f3289e81d02840b156590b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AKDY22%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgmyucVNXy%2BzJ3IF1ox0wuWqVwXJ4lrUAlIKw5XecGRwIhAPmMGrSAbQn78TMJPaV9Rqv%2Fn5SEChf5Pcysx1C8L7qoKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhRoEEfHadtn8X0jgq3APcq83g6p59XxdTj3Eh%2BKayS%2F1DpE4R9d33sGkG8PBPT0Cmn7bqICQXLgxdDM2noxuyKXKPjFlbcrJ3cW%2Bi7aKMSMOmDOiLb5O53kcFwts65fKWwWvCZHxmJdjGBFSmOPipohqJSJP30nAmtr%2Fu6WqeJ3CaU6h9XRpmPWnNnTJMqXUsOJhsoLDABLrHtkb%2FsYsMruadUwxGAswst8Ep7CE31VxKSO6RXc13IvmgcpDisw%2FZpeXgtTVRCWk3XcyoRhuGvZt7FI90cOMuaU9vCmP22%2BrVSiMq4EmM0mTkVqn8ou%2BjIPQauSJZ3BfvgcsfHk%2BAmEIOSBp7pndsf530vtnCl3xvJML%2BFBXPSqjCTW1XgPIcT8v6ZDVCGrqilZaGLwp7fadO8ZLwIYVCfFdE3HVJqiSxWVLqkuhionG2TXUfGZCHDhffPTzvpTrbjn4NwkJ9EMckAFGcN5z6w%2BLdRvquzx8W0Z4IoFjRmRlpJl3YekKrve%2BXIOYBgMSn%2FY5gFr%2BiKJQwWDHNTOJcuiN7UfpMqeB14Ftfhk60w8aP5AdqP7b1mb3QJKb7vsGzG6BdKZoY5HgD1JPB%2BJwhckXEFHvirylPJ4rwtrea5nJYD8E3oaVzywWGs0wXOdD8cTD58qXEBjqkAevHNjt8NJqSHkdUMdvqv4Mnwpwx8PnX8UWHDLpPSnFmKM3J2dhPxVjUv7XSFDx8HDh%2F77VgRDKB1Rbwn3ghWHiahCH%2FAD%2Fg%2BrRBNEPw9n%2Bob%2FCwFiBFV1EzL0W%2FWCF1w42eK6%2BDr7LrAWYVOtfU7BnndhwP%2FXOUlZkmUSC2S145XV1izOFQbhNWYIsONlXMF2ZsV92rcQ6WxF5vqoc9wSLKCb1e&X-Amz-Signature=f89bcd33c72e245b504e711ab17d94b33f09637258aba5fc0cf2ad3f553f8187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AKDY22%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgmyucVNXy%2BzJ3IF1ox0wuWqVwXJ4lrUAlIKw5XecGRwIhAPmMGrSAbQn78TMJPaV9Rqv%2Fn5SEChf5Pcysx1C8L7qoKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhRoEEfHadtn8X0jgq3APcq83g6p59XxdTj3Eh%2BKayS%2F1DpE4R9d33sGkG8PBPT0Cmn7bqICQXLgxdDM2noxuyKXKPjFlbcrJ3cW%2Bi7aKMSMOmDOiLb5O53kcFwts65fKWwWvCZHxmJdjGBFSmOPipohqJSJP30nAmtr%2Fu6WqeJ3CaU6h9XRpmPWnNnTJMqXUsOJhsoLDABLrHtkb%2FsYsMruadUwxGAswst8Ep7CE31VxKSO6RXc13IvmgcpDisw%2FZpeXgtTVRCWk3XcyoRhuGvZt7FI90cOMuaU9vCmP22%2BrVSiMq4EmM0mTkVqn8ou%2BjIPQauSJZ3BfvgcsfHk%2BAmEIOSBp7pndsf530vtnCl3xvJML%2BFBXPSqjCTW1XgPIcT8v6ZDVCGrqilZaGLwp7fadO8ZLwIYVCfFdE3HVJqiSxWVLqkuhionG2TXUfGZCHDhffPTzvpTrbjn4NwkJ9EMckAFGcN5z6w%2BLdRvquzx8W0Z4IoFjRmRlpJl3YekKrve%2BXIOYBgMSn%2FY5gFr%2BiKJQwWDHNTOJcuiN7UfpMqeB14Ftfhk60w8aP5AdqP7b1mb3QJKb7vsGzG6BdKZoY5HgD1JPB%2BJwhckXEFHvirylPJ4rwtrea5nJYD8E3oaVzywWGs0wXOdD8cTD58qXEBjqkAevHNjt8NJqSHkdUMdvqv4Mnwpwx8PnX8UWHDLpPSnFmKM3J2dhPxVjUv7XSFDx8HDh%2F77VgRDKB1Rbwn3ghWHiahCH%2FAD%2Fg%2BrRBNEPw9n%2Bob%2FCwFiBFV1EzL0W%2FWCF1w42eK6%2BDr7LrAWYVOtfU7BnndhwP%2FXOUlZkmUSC2S145XV1izOFQbhNWYIsONlXMF2ZsV92rcQ6WxF5vqoc9wSLKCb1e&X-Amz-Signature=12277e499f75b44509b8a626b039744865bec3a24408119991072fd8c9d65610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AKDY22%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgmyucVNXy%2BzJ3IF1ox0wuWqVwXJ4lrUAlIKw5XecGRwIhAPmMGrSAbQn78TMJPaV9Rqv%2Fn5SEChf5Pcysx1C8L7qoKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhRoEEfHadtn8X0jgq3APcq83g6p59XxdTj3Eh%2BKayS%2F1DpE4R9d33sGkG8PBPT0Cmn7bqICQXLgxdDM2noxuyKXKPjFlbcrJ3cW%2Bi7aKMSMOmDOiLb5O53kcFwts65fKWwWvCZHxmJdjGBFSmOPipohqJSJP30nAmtr%2Fu6WqeJ3CaU6h9XRpmPWnNnTJMqXUsOJhsoLDABLrHtkb%2FsYsMruadUwxGAswst8Ep7CE31VxKSO6RXc13IvmgcpDisw%2FZpeXgtTVRCWk3XcyoRhuGvZt7FI90cOMuaU9vCmP22%2BrVSiMq4EmM0mTkVqn8ou%2BjIPQauSJZ3BfvgcsfHk%2BAmEIOSBp7pndsf530vtnCl3xvJML%2BFBXPSqjCTW1XgPIcT8v6ZDVCGrqilZaGLwp7fadO8ZLwIYVCfFdE3HVJqiSxWVLqkuhionG2TXUfGZCHDhffPTzvpTrbjn4NwkJ9EMckAFGcN5z6w%2BLdRvquzx8W0Z4IoFjRmRlpJl3YekKrve%2BXIOYBgMSn%2FY5gFr%2BiKJQwWDHNTOJcuiN7UfpMqeB14Ftfhk60w8aP5AdqP7b1mb3QJKb7vsGzG6BdKZoY5HgD1JPB%2BJwhckXEFHvirylPJ4rwtrea5nJYD8E3oaVzywWGs0wXOdD8cTD58qXEBjqkAevHNjt8NJqSHkdUMdvqv4Mnwpwx8PnX8UWHDLpPSnFmKM3J2dhPxVjUv7XSFDx8HDh%2F77VgRDKB1Rbwn3ghWHiahCH%2FAD%2Fg%2BrRBNEPw9n%2Bob%2FCwFiBFV1EzL0W%2FWCF1w42eK6%2BDr7LrAWYVOtfU7BnndhwP%2FXOUlZkmUSC2S145XV1izOFQbhNWYIsONlXMF2ZsV92rcQ6WxF5vqoc9wSLKCb1e&X-Amz-Signature=344cef6f87fff342bafacb28714acc9070eeee69ab9cec6fab71a8c6b1e9f97d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AKDY22%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgmyucVNXy%2BzJ3IF1ox0wuWqVwXJ4lrUAlIKw5XecGRwIhAPmMGrSAbQn78TMJPaV9Rqv%2Fn5SEChf5Pcysx1C8L7qoKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhRoEEfHadtn8X0jgq3APcq83g6p59XxdTj3Eh%2BKayS%2F1DpE4R9d33sGkG8PBPT0Cmn7bqICQXLgxdDM2noxuyKXKPjFlbcrJ3cW%2Bi7aKMSMOmDOiLb5O53kcFwts65fKWwWvCZHxmJdjGBFSmOPipohqJSJP30nAmtr%2Fu6WqeJ3CaU6h9XRpmPWnNnTJMqXUsOJhsoLDABLrHtkb%2FsYsMruadUwxGAswst8Ep7CE31VxKSO6RXc13IvmgcpDisw%2FZpeXgtTVRCWk3XcyoRhuGvZt7FI90cOMuaU9vCmP22%2BrVSiMq4EmM0mTkVqn8ou%2BjIPQauSJZ3BfvgcsfHk%2BAmEIOSBp7pndsf530vtnCl3xvJML%2BFBXPSqjCTW1XgPIcT8v6ZDVCGrqilZaGLwp7fadO8ZLwIYVCfFdE3HVJqiSxWVLqkuhionG2TXUfGZCHDhffPTzvpTrbjn4NwkJ9EMckAFGcN5z6w%2BLdRvquzx8W0Z4IoFjRmRlpJl3YekKrve%2BXIOYBgMSn%2FY5gFr%2BiKJQwWDHNTOJcuiN7UfpMqeB14Ftfhk60w8aP5AdqP7b1mb3QJKb7vsGzG6BdKZoY5HgD1JPB%2BJwhckXEFHvirylPJ4rwtrea5nJYD8E3oaVzywWGs0wXOdD8cTD58qXEBjqkAevHNjt8NJqSHkdUMdvqv4Mnwpwx8PnX8UWHDLpPSnFmKM3J2dhPxVjUv7XSFDx8HDh%2F77VgRDKB1Rbwn3ghWHiahCH%2FAD%2Fg%2BrRBNEPw9n%2Bob%2FCwFiBFV1EzL0W%2FWCF1w42eK6%2BDr7LrAWYVOtfU7BnndhwP%2FXOUlZkmUSC2S145XV1izOFQbhNWYIsONlXMF2ZsV92rcQ6WxF5vqoc9wSLKCb1e&X-Amz-Signature=26790361644fc11de9c01c3b9e9abc89f48632d4df88cdeb0d7393a048006321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
