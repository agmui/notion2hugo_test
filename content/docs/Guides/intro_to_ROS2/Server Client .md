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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPHOVW6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeRhfIeSvIFx5jrACU3FRcvD0QPzKezdZIGKKZvl7a5QIhAIediW2mbgzk5R04I8sWgni%2BmaGghDYPARNXszPWxP3TKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx03A5bj8o%2Bg%2BTqXaQq3AODZyhtv%2BPg97okiEoxdhpMCfIbSpRYgVnlm4FGNhWwIW7QBWcxrQBQz9CmrDSvdPI%2BVUI5KUXiRkx4aBVzRZT8Wpw%2FXAOD6nwofpdBhRCJkzEKxUhFwHzBlCFXbL%2Fp0eT%2B2LOKd8sWPCPGoT34ZsDPOfikl4t%2FjCgQSsoR20%2BcCT%2FcLhZYRWL8LyaPeQfI99NAR2ORCKNXxmgcL9NVzTKyP6N20%2BFftycuZgpmQwqruFBqaJiG1FJ0qoOURNPyd2wd3OkCa5Q4d8evTEqHP35ZYeNDIHMmP3zjF8tVc9iuMzqJXPc9FNnnALUzY1N8afjxcJcykvT0wONtak3uOJuMazlL9K8OyXgFSkbTJpXc2B%2FhLWkqCTV1CJ8%2F3AA4Dz5RQNhZa19dr6Ex7aS3KCR24dn%2FgUcQBc%2FKHWEByjpBFqQgoir8y2JixWSnVY4q1J19iSnk5xt6Ybu1Iki4Ze7RnnrOCAj79OOuyNjwdak3I0nFSoK73JdggB3lpmjL56akRv4ClEV4jVWqpEV5trNKiCuiJFa%2FZ442TP5KB2OkuK5cVoxnCFmsVAe13AzZDy%2FyzKeTOQ%2FEOepb0P24R3jZh%2Bn92h4shKp%2Fq42qx18EjIVwxdUlp8pSIZfwHzDm1vzCBjqkAQAhRgsLjLCMZIMueGIeM6P37%2FrC9T%2FAZudur7tCJBhQhdnKdGLzTJw7Ej9NKQ3Dx%2F7aPQ%2FxntzJMrNTaHvWZnUIRNSTOf02GqGyHdC%2BQhTDNFHXl8eANR2EiwJO2s2ytkVJIGAz0WIu2XvFj08BDklil49JdzcNwDRG%2BQZ%2BcOVhJSE3e86mKu4RSiROU4NQFMKJEZqHpQCbry0yvBgovuAje4d9&X-Amz-Signature=f36eded5fd41f448c2efb11d4f4dd7847122a606cae47094adcd47557cee220d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPHOVW6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeRhfIeSvIFx5jrACU3FRcvD0QPzKezdZIGKKZvl7a5QIhAIediW2mbgzk5R04I8sWgni%2BmaGghDYPARNXszPWxP3TKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx03A5bj8o%2Bg%2BTqXaQq3AODZyhtv%2BPg97okiEoxdhpMCfIbSpRYgVnlm4FGNhWwIW7QBWcxrQBQz9CmrDSvdPI%2BVUI5KUXiRkx4aBVzRZT8Wpw%2FXAOD6nwofpdBhRCJkzEKxUhFwHzBlCFXbL%2Fp0eT%2B2LOKd8sWPCPGoT34ZsDPOfikl4t%2FjCgQSsoR20%2BcCT%2FcLhZYRWL8LyaPeQfI99NAR2ORCKNXxmgcL9NVzTKyP6N20%2BFftycuZgpmQwqruFBqaJiG1FJ0qoOURNPyd2wd3OkCa5Q4d8evTEqHP35ZYeNDIHMmP3zjF8tVc9iuMzqJXPc9FNnnALUzY1N8afjxcJcykvT0wONtak3uOJuMazlL9K8OyXgFSkbTJpXc2B%2FhLWkqCTV1CJ8%2F3AA4Dz5RQNhZa19dr6Ex7aS3KCR24dn%2FgUcQBc%2FKHWEByjpBFqQgoir8y2JixWSnVY4q1J19iSnk5xt6Ybu1Iki4Ze7RnnrOCAj79OOuyNjwdak3I0nFSoK73JdggB3lpmjL56akRv4ClEV4jVWqpEV5trNKiCuiJFa%2FZ442TP5KB2OkuK5cVoxnCFmsVAe13AzZDy%2FyzKeTOQ%2FEOepb0P24R3jZh%2Bn92h4shKp%2Fq42qx18EjIVwxdUlp8pSIZfwHzDm1vzCBjqkAQAhRgsLjLCMZIMueGIeM6P37%2FrC9T%2FAZudur7tCJBhQhdnKdGLzTJw7Ej9NKQ3Dx%2F7aPQ%2FxntzJMrNTaHvWZnUIRNSTOf02GqGyHdC%2BQhTDNFHXl8eANR2EiwJO2s2ytkVJIGAz0WIu2XvFj08BDklil49JdzcNwDRG%2BQZ%2BcOVhJSE3e86mKu4RSiROU4NQFMKJEZqHpQCbry0yvBgovuAje4d9&X-Amz-Signature=417fb96f38270df9b598f60c32fc978588e0b413a14068061a6636082efcb74b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPHOVW6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeRhfIeSvIFx5jrACU3FRcvD0QPzKezdZIGKKZvl7a5QIhAIediW2mbgzk5R04I8sWgni%2BmaGghDYPARNXszPWxP3TKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx03A5bj8o%2Bg%2BTqXaQq3AODZyhtv%2BPg97okiEoxdhpMCfIbSpRYgVnlm4FGNhWwIW7QBWcxrQBQz9CmrDSvdPI%2BVUI5KUXiRkx4aBVzRZT8Wpw%2FXAOD6nwofpdBhRCJkzEKxUhFwHzBlCFXbL%2Fp0eT%2B2LOKd8sWPCPGoT34ZsDPOfikl4t%2FjCgQSsoR20%2BcCT%2FcLhZYRWL8LyaPeQfI99NAR2ORCKNXxmgcL9NVzTKyP6N20%2BFftycuZgpmQwqruFBqaJiG1FJ0qoOURNPyd2wd3OkCa5Q4d8evTEqHP35ZYeNDIHMmP3zjF8tVc9iuMzqJXPc9FNnnALUzY1N8afjxcJcykvT0wONtak3uOJuMazlL9K8OyXgFSkbTJpXc2B%2FhLWkqCTV1CJ8%2F3AA4Dz5RQNhZa19dr6Ex7aS3KCR24dn%2FgUcQBc%2FKHWEByjpBFqQgoir8y2JixWSnVY4q1J19iSnk5xt6Ybu1Iki4Ze7RnnrOCAj79OOuyNjwdak3I0nFSoK73JdggB3lpmjL56akRv4ClEV4jVWqpEV5trNKiCuiJFa%2FZ442TP5KB2OkuK5cVoxnCFmsVAe13AzZDy%2FyzKeTOQ%2FEOepb0P24R3jZh%2Bn92h4shKp%2Fq42qx18EjIVwxdUlp8pSIZfwHzDm1vzCBjqkAQAhRgsLjLCMZIMueGIeM6P37%2FrC9T%2FAZudur7tCJBhQhdnKdGLzTJw7Ej9NKQ3Dx%2F7aPQ%2FxntzJMrNTaHvWZnUIRNSTOf02GqGyHdC%2BQhTDNFHXl8eANR2EiwJO2s2ytkVJIGAz0WIu2XvFj08BDklil49JdzcNwDRG%2BQZ%2BcOVhJSE3e86mKu4RSiROU4NQFMKJEZqHpQCbry0yvBgovuAje4d9&X-Amz-Signature=cee2ddc7ba99c30fba30228f10feda55dd586918f9d50be3678ee414e31e90ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPHOVW6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeRhfIeSvIFx5jrACU3FRcvD0QPzKezdZIGKKZvl7a5QIhAIediW2mbgzk5R04I8sWgni%2BmaGghDYPARNXszPWxP3TKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx03A5bj8o%2Bg%2BTqXaQq3AODZyhtv%2BPg97okiEoxdhpMCfIbSpRYgVnlm4FGNhWwIW7QBWcxrQBQz9CmrDSvdPI%2BVUI5KUXiRkx4aBVzRZT8Wpw%2FXAOD6nwofpdBhRCJkzEKxUhFwHzBlCFXbL%2Fp0eT%2B2LOKd8sWPCPGoT34ZsDPOfikl4t%2FjCgQSsoR20%2BcCT%2FcLhZYRWL8LyaPeQfI99NAR2ORCKNXxmgcL9NVzTKyP6N20%2BFftycuZgpmQwqruFBqaJiG1FJ0qoOURNPyd2wd3OkCa5Q4d8evTEqHP35ZYeNDIHMmP3zjF8tVc9iuMzqJXPc9FNnnALUzY1N8afjxcJcykvT0wONtak3uOJuMazlL9K8OyXgFSkbTJpXc2B%2FhLWkqCTV1CJ8%2F3AA4Dz5RQNhZa19dr6Ex7aS3KCR24dn%2FgUcQBc%2FKHWEByjpBFqQgoir8y2JixWSnVY4q1J19iSnk5xt6Ybu1Iki4Ze7RnnrOCAj79OOuyNjwdak3I0nFSoK73JdggB3lpmjL56akRv4ClEV4jVWqpEV5trNKiCuiJFa%2FZ442TP5KB2OkuK5cVoxnCFmsVAe13AzZDy%2FyzKeTOQ%2FEOepb0P24R3jZh%2Bn92h4shKp%2Fq42qx18EjIVwxdUlp8pSIZfwHzDm1vzCBjqkAQAhRgsLjLCMZIMueGIeM6P37%2FrC9T%2FAZudur7tCJBhQhdnKdGLzTJw7Ej9NKQ3Dx%2F7aPQ%2FxntzJMrNTaHvWZnUIRNSTOf02GqGyHdC%2BQhTDNFHXl8eANR2EiwJO2s2ytkVJIGAz0WIu2XvFj08BDklil49JdzcNwDRG%2BQZ%2BcOVhJSE3e86mKu4RSiROU4NQFMKJEZqHpQCbry0yvBgovuAje4d9&X-Amz-Signature=d08cd9dd8574b32d170f6764035005cbf2d76b3d606e02cac0634fc6b62a7cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPHOVW6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeRhfIeSvIFx5jrACU3FRcvD0QPzKezdZIGKKZvl7a5QIhAIediW2mbgzk5R04I8sWgni%2BmaGghDYPARNXszPWxP3TKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx03A5bj8o%2Bg%2BTqXaQq3AODZyhtv%2BPg97okiEoxdhpMCfIbSpRYgVnlm4FGNhWwIW7QBWcxrQBQz9CmrDSvdPI%2BVUI5KUXiRkx4aBVzRZT8Wpw%2FXAOD6nwofpdBhRCJkzEKxUhFwHzBlCFXbL%2Fp0eT%2B2LOKd8sWPCPGoT34ZsDPOfikl4t%2FjCgQSsoR20%2BcCT%2FcLhZYRWL8LyaPeQfI99NAR2ORCKNXxmgcL9NVzTKyP6N20%2BFftycuZgpmQwqruFBqaJiG1FJ0qoOURNPyd2wd3OkCa5Q4d8evTEqHP35ZYeNDIHMmP3zjF8tVc9iuMzqJXPc9FNnnALUzY1N8afjxcJcykvT0wONtak3uOJuMazlL9K8OyXgFSkbTJpXc2B%2FhLWkqCTV1CJ8%2F3AA4Dz5RQNhZa19dr6Ex7aS3KCR24dn%2FgUcQBc%2FKHWEByjpBFqQgoir8y2JixWSnVY4q1J19iSnk5xt6Ybu1Iki4Ze7RnnrOCAj79OOuyNjwdak3I0nFSoK73JdggB3lpmjL56akRv4ClEV4jVWqpEV5trNKiCuiJFa%2FZ442TP5KB2OkuK5cVoxnCFmsVAe13AzZDy%2FyzKeTOQ%2FEOepb0P24R3jZh%2Bn92h4shKp%2Fq42qx18EjIVwxdUlp8pSIZfwHzDm1vzCBjqkAQAhRgsLjLCMZIMueGIeM6P37%2FrC9T%2FAZudur7tCJBhQhdnKdGLzTJw7Ej9NKQ3Dx%2F7aPQ%2FxntzJMrNTaHvWZnUIRNSTOf02GqGyHdC%2BQhTDNFHXl8eANR2EiwJO2s2ytkVJIGAz0WIu2XvFj08BDklil49JdzcNwDRG%2BQZ%2BcOVhJSE3e86mKu4RSiROU4NQFMKJEZqHpQCbry0yvBgovuAje4d9&X-Amz-Signature=cee13779673521901f8c6fa2e4f423425eeaf7f4202e95df97d730df2b19ba42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
