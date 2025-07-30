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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGUARHS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCujRsC91D5jnpLN%2F7UYZWB6cdIzNIpwGTOimyT9kNI5QIhALrFqR0vUI%2FnuX5kBm0y9nP%2FJZqHJdLMofTbDCiU16vFKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxgw%2BWD6B3vfYkZ5wwq3ANUURn6cidc1ADYGDAbPiPtFlp3GbforMduEA9fwGcoVDexJxZmUBnEKGZonASSAhPp8FNL8ciBSM2OG75Pe29wpGnLjctSSt2gA%2Fz%2FdO4aRpR%2BmtxyISEmdZDXOF7XaDmLJeXXl9POnvVhHLb%2F95A9quGtUn8SYGf8jtoKmXXqr%2FoyZG6CtqwyBXJayYJd4nlsoZ8PfTV7UBl57ERHY%2FSCI5sjZ3FBLr6djEQHuoxjvbMkPBC8R349u51YLypeJf3QkfoJwr%2FP%2FyxKUcUVVR%2FC9yMpVdEHLdaBdo5QkJlqDKzeM1C6Xvzq6YGtS8woQmt8V8dapvOA7tHNDClRAwYOWXv5j215emHhlya4TaNIaosC8IulseaHeeE7NaZLlVy9Euk0l0WrS6qHIpOQUJlwxozCt6Ri1wraLylqT296RX5say7fz%2BLIYxfYuiu2T7UMExR92Dzw6iUN%2FhkbddCvgL4xFZZOAA8LCYhi6BCehoXrmuzFXV8SrXFzYR8E6cikatSTlgEHSfO%2BRrtZ8uVfkvA5UWBeMCiAEgeCzqoG7C9g9dRfr9pqJdM8ows1CHgtlPLuQAWBWXUAan5HevuCZIeiSCC%2FK30xXD555elCHMN6IW4N9xQ3uzQPjDDy8qXEBjqkASHm%2FXczJbdu398rCPnS2HDAuQh8E8mWk0bLsfGGjr3FIvOghxhnZxjiigeBeh96WJb%2BAFX52u3%2FzN8bdE0FFq3P5Wv97oJWXrl43YYJI%2BxWwjunGLFIHOQHi%2BcldY%2FjWprlIOaVmHuQqrlJgTdz5qrK2kPy2hHXPvPmNdycNe7WclYlukDVTULiQ0N2c0HboWU3aXoZfjty7hDspyScLmaq6fIk&X-Amz-Signature=ea2a2ba6467c2165e631d15a1caee75826414666282aaa03d2251894251dfd5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGUARHS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCujRsC91D5jnpLN%2F7UYZWB6cdIzNIpwGTOimyT9kNI5QIhALrFqR0vUI%2FnuX5kBm0y9nP%2FJZqHJdLMofTbDCiU16vFKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxgw%2BWD6B3vfYkZ5wwq3ANUURn6cidc1ADYGDAbPiPtFlp3GbforMduEA9fwGcoVDexJxZmUBnEKGZonASSAhPp8FNL8ciBSM2OG75Pe29wpGnLjctSSt2gA%2Fz%2FdO4aRpR%2BmtxyISEmdZDXOF7XaDmLJeXXl9POnvVhHLb%2F95A9quGtUn8SYGf8jtoKmXXqr%2FoyZG6CtqwyBXJayYJd4nlsoZ8PfTV7UBl57ERHY%2FSCI5sjZ3FBLr6djEQHuoxjvbMkPBC8R349u51YLypeJf3QkfoJwr%2FP%2FyxKUcUVVR%2FC9yMpVdEHLdaBdo5QkJlqDKzeM1C6Xvzq6YGtS8woQmt8V8dapvOA7tHNDClRAwYOWXv5j215emHhlya4TaNIaosC8IulseaHeeE7NaZLlVy9Euk0l0WrS6qHIpOQUJlwxozCt6Ri1wraLylqT296RX5say7fz%2BLIYxfYuiu2T7UMExR92Dzw6iUN%2FhkbddCvgL4xFZZOAA8LCYhi6BCehoXrmuzFXV8SrXFzYR8E6cikatSTlgEHSfO%2BRrtZ8uVfkvA5UWBeMCiAEgeCzqoG7C9g9dRfr9pqJdM8ows1CHgtlPLuQAWBWXUAan5HevuCZIeiSCC%2FK30xXD555elCHMN6IW4N9xQ3uzQPjDDy8qXEBjqkASHm%2FXczJbdu398rCPnS2HDAuQh8E8mWk0bLsfGGjr3FIvOghxhnZxjiigeBeh96WJb%2BAFX52u3%2FzN8bdE0FFq3P5Wv97oJWXrl43YYJI%2BxWwjunGLFIHOQHi%2BcldY%2FjWprlIOaVmHuQqrlJgTdz5qrK2kPy2hHXPvPmNdycNe7WclYlukDVTULiQ0N2c0HboWU3aXoZfjty7hDspyScLmaq6fIk&X-Amz-Signature=86c0a5271e1b0c2b81128afbfa621123a9f92935ff10a4bc4fd1e8a7a41e3429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGUARHS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCujRsC91D5jnpLN%2F7UYZWB6cdIzNIpwGTOimyT9kNI5QIhALrFqR0vUI%2FnuX5kBm0y9nP%2FJZqHJdLMofTbDCiU16vFKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxgw%2BWD6B3vfYkZ5wwq3ANUURn6cidc1ADYGDAbPiPtFlp3GbforMduEA9fwGcoVDexJxZmUBnEKGZonASSAhPp8FNL8ciBSM2OG75Pe29wpGnLjctSSt2gA%2Fz%2FdO4aRpR%2BmtxyISEmdZDXOF7XaDmLJeXXl9POnvVhHLb%2F95A9quGtUn8SYGf8jtoKmXXqr%2FoyZG6CtqwyBXJayYJd4nlsoZ8PfTV7UBl57ERHY%2FSCI5sjZ3FBLr6djEQHuoxjvbMkPBC8R349u51YLypeJf3QkfoJwr%2FP%2FyxKUcUVVR%2FC9yMpVdEHLdaBdo5QkJlqDKzeM1C6Xvzq6YGtS8woQmt8V8dapvOA7tHNDClRAwYOWXv5j215emHhlya4TaNIaosC8IulseaHeeE7NaZLlVy9Euk0l0WrS6qHIpOQUJlwxozCt6Ri1wraLylqT296RX5say7fz%2BLIYxfYuiu2T7UMExR92Dzw6iUN%2FhkbddCvgL4xFZZOAA8LCYhi6BCehoXrmuzFXV8SrXFzYR8E6cikatSTlgEHSfO%2BRrtZ8uVfkvA5UWBeMCiAEgeCzqoG7C9g9dRfr9pqJdM8ows1CHgtlPLuQAWBWXUAan5HevuCZIeiSCC%2FK30xXD555elCHMN6IW4N9xQ3uzQPjDDy8qXEBjqkASHm%2FXczJbdu398rCPnS2HDAuQh8E8mWk0bLsfGGjr3FIvOghxhnZxjiigeBeh96WJb%2BAFX52u3%2FzN8bdE0FFq3P5Wv97oJWXrl43YYJI%2BxWwjunGLFIHOQHi%2BcldY%2FjWprlIOaVmHuQqrlJgTdz5qrK2kPy2hHXPvPmNdycNe7WclYlukDVTULiQ0N2c0HboWU3aXoZfjty7hDspyScLmaq6fIk&X-Amz-Signature=4e02356ebbbce584ecdbb1e6b33282e2fa818a9f6cf465117230b2bd93799f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGUARHS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCujRsC91D5jnpLN%2F7UYZWB6cdIzNIpwGTOimyT9kNI5QIhALrFqR0vUI%2FnuX5kBm0y9nP%2FJZqHJdLMofTbDCiU16vFKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxgw%2BWD6B3vfYkZ5wwq3ANUURn6cidc1ADYGDAbPiPtFlp3GbforMduEA9fwGcoVDexJxZmUBnEKGZonASSAhPp8FNL8ciBSM2OG75Pe29wpGnLjctSSt2gA%2Fz%2FdO4aRpR%2BmtxyISEmdZDXOF7XaDmLJeXXl9POnvVhHLb%2F95A9quGtUn8SYGf8jtoKmXXqr%2FoyZG6CtqwyBXJayYJd4nlsoZ8PfTV7UBl57ERHY%2FSCI5sjZ3FBLr6djEQHuoxjvbMkPBC8R349u51YLypeJf3QkfoJwr%2FP%2FyxKUcUVVR%2FC9yMpVdEHLdaBdo5QkJlqDKzeM1C6Xvzq6YGtS8woQmt8V8dapvOA7tHNDClRAwYOWXv5j215emHhlya4TaNIaosC8IulseaHeeE7NaZLlVy9Euk0l0WrS6qHIpOQUJlwxozCt6Ri1wraLylqT296RX5say7fz%2BLIYxfYuiu2T7UMExR92Dzw6iUN%2FhkbddCvgL4xFZZOAA8LCYhi6BCehoXrmuzFXV8SrXFzYR8E6cikatSTlgEHSfO%2BRrtZ8uVfkvA5UWBeMCiAEgeCzqoG7C9g9dRfr9pqJdM8ows1CHgtlPLuQAWBWXUAan5HevuCZIeiSCC%2FK30xXD555elCHMN6IW4N9xQ3uzQPjDDy8qXEBjqkASHm%2FXczJbdu398rCPnS2HDAuQh8E8mWk0bLsfGGjr3FIvOghxhnZxjiigeBeh96WJb%2BAFX52u3%2FzN8bdE0FFq3P5Wv97oJWXrl43YYJI%2BxWwjunGLFIHOQHi%2BcldY%2FjWprlIOaVmHuQqrlJgTdz5qrK2kPy2hHXPvPmNdycNe7WclYlukDVTULiQ0N2c0HboWU3aXoZfjty7hDspyScLmaq6fIk&X-Amz-Signature=ad61577120d3561559e615658b6a9ade461bd0b77e13ce0a3c8fa99a94cbd825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGUARHS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCujRsC91D5jnpLN%2F7UYZWB6cdIzNIpwGTOimyT9kNI5QIhALrFqR0vUI%2FnuX5kBm0y9nP%2FJZqHJdLMofTbDCiU16vFKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxgw%2BWD6B3vfYkZ5wwq3ANUURn6cidc1ADYGDAbPiPtFlp3GbforMduEA9fwGcoVDexJxZmUBnEKGZonASSAhPp8FNL8ciBSM2OG75Pe29wpGnLjctSSt2gA%2Fz%2FdO4aRpR%2BmtxyISEmdZDXOF7XaDmLJeXXl9POnvVhHLb%2F95A9quGtUn8SYGf8jtoKmXXqr%2FoyZG6CtqwyBXJayYJd4nlsoZ8PfTV7UBl57ERHY%2FSCI5sjZ3FBLr6djEQHuoxjvbMkPBC8R349u51YLypeJf3QkfoJwr%2FP%2FyxKUcUVVR%2FC9yMpVdEHLdaBdo5QkJlqDKzeM1C6Xvzq6YGtS8woQmt8V8dapvOA7tHNDClRAwYOWXv5j215emHhlya4TaNIaosC8IulseaHeeE7NaZLlVy9Euk0l0WrS6qHIpOQUJlwxozCt6Ri1wraLylqT296RX5say7fz%2BLIYxfYuiu2T7UMExR92Dzw6iUN%2FhkbddCvgL4xFZZOAA8LCYhi6BCehoXrmuzFXV8SrXFzYR8E6cikatSTlgEHSfO%2BRrtZ8uVfkvA5UWBeMCiAEgeCzqoG7C9g9dRfr9pqJdM8ows1CHgtlPLuQAWBWXUAan5HevuCZIeiSCC%2FK30xXD555elCHMN6IW4N9xQ3uzQPjDDy8qXEBjqkASHm%2FXczJbdu398rCPnS2HDAuQh8E8mWk0bLsfGGjr3FIvOghxhnZxjiigeBeh96WJb%2BAFX52u3%2FzN8bdE0FFq3P5Wv97oJWXrl43YYJI%2BxWwjunGLFIHOQHi%2BcldY%2FjWprlIOaVmHuQqrlJgTdz5qrK2kPy2hHXPvPmNdycNe7WclYlukDVTULiQ0N2c0HboWU3aXoZfjty7hDspyScLmaq6fIk&X-Amz-Signature=a55aa0c6bc1526922bb8433f7934724e0db5ae12bcde4f59dc09adb3b612489a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
