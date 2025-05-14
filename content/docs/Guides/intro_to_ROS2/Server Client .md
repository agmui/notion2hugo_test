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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI5XM6FU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIAj0saMtpjojoMWqR7Y9S0ifgVIOEqws457%2BxlZtUzRjAiEAlbW%2BzZf5WbsYJtcduJ26F%2BmI3Hy7Z7tJWh80EFcctHMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtFVNwOfjuclyBeHircA3598zOzax6Gab9sosXeB%2FLAhJx2M60UEjCPelJMOGKd5s1W43%2B654lIR0rJqXDju1vxaksFNNt0dCzaJxZsLuSaTGom4KiFl1s4kuP2xYKE8Ozv%2BVLmFApyT%2BPAO1cZEI6ahzkAGilBjVQGsBMBlexkjt0hquztDu7GbL1Raf%2FmmwsMUWaarKA7fzrUyWwUAgib2ANtl8GyUm7lc13rIWNQ2LFsosU1U2DzE5RG6GLsT780iX3wMld3lqM8%2BxvMB%2F2HqeVVpRddymekzlWJQffq80U9u4DUXKc2hlRdrhaYkbrqN5Dkt0DiNJlD7goUzcWyC7fLxhUoxfW6bk1AuqOuxL0UYQIHRcNtbi5awY86j9PFnVMRyKTwT4gVUTLmjbDKU1s9pKdutyQVJcduOs4%2B32daQXTX9vdOY7EFVPp6d8k2ggwYDA0GTfVCOmYO%2FO0cqHhp%2FjB6DStWLlI5%2BuGP1zn2BjUEKu%2F16EZPG58yg%2Fn5%2FhWcpB7eW9AA8HfpSUbOp2Jct2Q7TDhDgf41ljvFOiu%2Bew%2FkZJr0S91kD1GXyvgJ6jjIvxLqoMi2S819UMgWTxwnz6coTEm8iPJPKxkbEax3LVKgL8QXgT56V61Cr5wZarjEmY5K9efBMMK%2Bj8EGOqUBc7ajSS1c2LHzbFdHMUWhWcVWfsPpD3qHnvEXFTEjrPk%2F6nw9eFTuT8FpjlElhtEKW2OV1i1c0SAUUYAlUIIhEGDWQmxc33H7GvEmuvvrHMAjh06dH7s0xIvwaVEwxT43e2IEqgtPC%2Bc4q%2FyWLNcZo52k9BJ6YfCCyoS9vHGD8UTqabLPEIRjdx1OH708xOpU5RDhTEjnGLe77wytopKZyuqnc1hX&X-Amz-Signature=cd2653a440fd001180bac688c0101754994ebe2b428a3fcbfae2fee5ea74c7d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI5XM6FU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIAj0saMtpjojoMWqR7Y9S0ifgVIOEqws457%2BxlZtUzRjAiEAlbW%2BzZf5WbsYJtcduJ26F%2BmI3Hy7Z7tJWh80EFcctHMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtFVNwOfjuclyBeHircA3598zOzax6Gab9sosXeB%2FLAhJx2M60UEjCPelJMOGKd5s1W43%2B654lIR0rJqXDju1vxaksFNNt0dCzaJxZsLuSaTGom4KiFl1s4kuP2xYKE8Ozv%2BVLmFApyT%2BPAO1cZEI6ahzkAGilBjVQGsBMBlexkjt0hquztDu7GbL1Raf%2FmmwsMUWaarKA7fzrUyWwUAgib2ANtl8GyUm7lc13rIWNQ2LFsosU1U2DzE5RG6GLsT780iX3wMld3lqM8%2BxvMB%2F2HqeVVpRddymekzlWJQffq80U9u4DUXKc2hlRdrhaYkbrqN5Dkt0DiNJlD7goUzcWyC7fLxhUoxfW6bk1AuqOuxL0UYQIHRcNtbi5awY86j9PFnVMRyKTwT4gVUTLmjbDKU1s9pKdutyQVJcduOs4%2B32daQXTX9vdOY7EFVPp6d8k2ggwYDA0GTfVCOmYO%2FO0cqHhp%2FjB6DStWLlI5%2BuGP1zn2BjUEKu%2F16EZPG58yg%2Fn5%2FhWcpB7eW9AA8HfpSUbOp2Jct2Q7TDhDgf41ljvFOiu%2Bew%2FkZJr0S91kD1GXyvgJ6jjIvxLqoMi2S819UMgWTxwnz6coTEm8iPJPKxkbEax3LVKgL8QXgT56V61Cr5wZarjEmY5K9efBMMK%2Bj8EGOqUBc7ajSS1c2LHzbFdHMUWhWcVWfsPpD3qHnvEXFTEjrPk%2F6nw9eFTuT8FpjlElhtEKW2OV1i1c0SAUUYAlUIIhEGDWQmxc33H7GvEmuvvrHMAjh06dH7s0xIvwaVEwxT43e2IEqgtPC%2Bc4q%2FyWLNcZo52k9BJ6YfCCyoS9vHGD8UTqabLPEIRjdx1OH708xOpU5RDhTEjnGLe77wytopKZyuqnc1hX&X-Amz-Signature=cf725e8c46dacaa008d58b2e71223a63543ad5a6a6bd94375f33b72c64bd8072&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI5XM6FU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIAj0saMtpjojoMWqR7Y9S0ifgVIOEqws457%2BxlZtUzRjAiEAlbW%2BzZf5WbsYJtcduJ26F%2BmI3Hy7Z7tJWh80EFcctHMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtFVNwOfjuclyBeHircA3598zOzax6Gab9sosXeB%2FLAhJx2M60UEjCPelJMOGKd5s1W43%2B654lIR0rJqXDju1vxaksFNNt0dCzaJxZsLuSaTGom4KiFl1s4kuP2xYKE8Ozv%2BVLmFApyT%2BPAO1cZEI6ahzkAGilBjVQGsBMBlexkjt0hquztDu7GbL1Raf%2FmmwsMUWaarKA7fzrUyWwUAgib2ANtl8GyUm7lc13rIWNQ2LFsosU1U2DzE5RG6GLsT780iX3wMld3lqM8%2BxvMB%2F2HqeVVpRddymekzlWJQffq80U9u4DUXKc2hlRdrhaYkbrqN5Dkt0DiNJlD7goUzcWyC7fLxhUoxfW6bk1AuqOuxL0UYQIHRcNtbi5awY86j9PFnVMRyKTwT4gVUTLmjbDKU1s9pKdutyQVJcduOs4%2B32daQXTX9vdOY7EFVPp6d8k2ggwYDA0GTfVCOmYO%2FO0cqHhp%2FjB6DStWLlI5%2BuGP1zn2BjUEKu%2F16EZPG58yg%2Fn5%2FhWcpB7eW9AA8HfpSUbOp2Jct2Q7TDhDgf41ljvFOiu%2Bew%2FkZJr0S91kD1GXyvgJ6jjIvxLqoMi2S819UMgWTxwnz6coTEm8iPJPKxkbEax3LVKgL8QXgT56V61Cr5wZarjEmY5K9efBMMK%2Bj8EGOqUBc7ajSS1c2LHzbFdHMUWhWcVWfsPpD3qHnvEXFTEjrPk%2F6nw9eFTuT8FpjlElhtEKW2OV1i1c0SAUUYAlUIIhEGDWQmxc33H7GvEmuvvrHMAjh06dH7s0xIvwaVEwxT43e2IEqgtPC%2Bc4q%2FyWLNcZo52k9BJ6YfCCyoS9vHGD8UTqabLPEIRjdx1OH708xOpU5RDhTEjnGLe77wytopKZyuqnc1hX&X-Amz-Signature=adbad85a0d22a88c86e10983298b29632c4ef82b4de889e7930fb99ee39c6427&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI5XM6FU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIAj0saMtpjojoMWqR7Y9S0ifgVIOEqws457%2BxlZtUzRjAiEAlbW%2BzZf5WbsYJtcduJ26F%2BmI3Hy7Z7tJWh80EFcctHMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtFVNwOfjuclyBeHircA3598zOzax6Gab9sosXeB%2FLAhJx2M60UEjCPelJMOGKd5s1W43%2B654lIR0rJqXDju1vxaksFNNt0dCzaJxZsLuSaTGom4KiFl1s4kuP2xYKE8Ozv%2BVLmFApyT%2BPAO1cZEI6ahzkAGilBjVQGsBMBlexkjt0hquztDu7GbL1Raf%2FmmwsMUWaarKA7fzrUyWwUAgib2ANtl8GyUm7lc13rIWNQ2LFsosU1U2DzE5RG6GLsT780iX3wMld3lqM8%2BxvMB%2F2HqeVVpRddymekzlWJQffq80U9u4DUXKc2hlRdrhaYkbrqN5Dkt0DiNJlD7goUzcWyC7fLxhUoxfW6bk1AuqOuxL0UYQIHRcNtbi5awY86j9PFnVMRyKTwT4gVUTLmjbDKU1s9pKdutyQVJcduOs4%2B32daQXTX9vdOY7EFVPp6d8k2ggwYDA0GTfVCOmYO%2FO0cqHhp%2FjB6DStWLlI5%2BuGP1zn2BjUEKu%2F16EZPG58yg%2Fn5%2FhWcpB7eW9AA8HfpSUbOp2Jct2Q7TDhDgf41ljvFOiu%2Bew%2FkZJr0S91kD1GXyvgJ6jjIvxLqoMi2S819UMgWTxwnz6coTEm8iPJPKxkbEax3LVKgL8QXgT56V61Cr5wZarjEmY5K9efBMMK%2Bj8EGOqUBc7ajSS1c2LHzbFdHMUWhWcVWfsPpD3qHnvEXFTEjrPk%2F6nw9eFTuT8FpjlElhtEKW2OV1i1c0SAUUYAlUIIhEGDWQmxc33H7GvEmuvvrHMAjh06dH7s0xIvwaVEwxT43e2IEqgtPC%2Bc4q%2FyWLNcZo52k9BJ6YfCCyoS9vHGD8UTqabLPEIRjdx1OH708xOpU5RDhTEjnGLe77wytopKZyuqnc1hX&X-Amz-Signature=61b8dee966ed018176ec9b589cdc150139e3cb9a0c5cee3f462c669a0e203656&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI5XM6FU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIAj0saMtpjojoMWqR7Y9S0ifgVIOEqws457%2BxlZtUzRjAiEAlbW%2BzZf5WbsYJtcduJ26F%2BmI3Hy7Z7tJWh80EFcctHMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtFVNwOfjuclyBeHircA3598zOzax6Gab9sosXeB%2FLAhJx2M60UEjCPelJMOGKd5s1W43%2B654lIR0rJqXDju1vxaksFNNt0dCzaJxZsLuSaTGom4KiFl1s4kuP2xYKE8Ozv%2BVLmFApyT%2BPAO1cZEI6ahzkAGilBjVQGsBMBlexkjt0hquztDu7GbL1Raf%2FmmwsMUWaarKA7fzrUyWwUAgib2ANtl8GyUm7lc13rIWNQ2LFsosU1U2DzE5RG6GLsT780iX3wMld3lqM8%2BxvMB%2F2HqeVVpRddymekzlWJQffq80U9u4DUXKc2hlRdrhaYkbrqN5Dkt0DiNJlD7goUzcWyC7fLxhUoxfW6bk1AuqOuxL0UYQIHRcNtbi5awY86j9PFnVMRyKTwT4gVUTLmjbDKU1s9pKdutyQVJcduOs4%2B32daQXTX9vdOY7EFVPp6d8k2ggwYDA0GTfVCOmYO%2FO0cqHhp%2FjB6DStWLlI5%2BuGP1zn2BjUEKu%2F16EZPG58yg%2Fn5%2FhWcpB7eW9AA8HfpSUbOp2Jct2Q7TDhDgf41ljvFOiu%2Bew%2FkZJr0S91kD1GXyvgJ6jjIvxLqoMi2S819UMgWTxwnz6coTEm8iPJPKxkbEax3LVKgL8QXgT56V61Cr5wZarjEmY5K9efBMMK%2Bj8EGOqUBc7ajSS1c2LHzbFdHMUWhWcVWfsPpD3qHnvEXFTEjrPk%2F6nw9eFTuT8FpjlElhtEKW2OV1i1c0SAUUYAlUIIhEGDWQmxc33H7GvEmuvvrHMAjh06dH7s0xIvwaVEwxT43e2IEqgtPC%2Bc4q%2FyWLNcZo52k9BJ6YfCCyoS9vHGD8UTqabLPEIRjdx1OH708xOpU5RDhTEjnGLe77wytopKZyuqnc1hX&X-Amz-Signature=f81997a12993bf3fa966058b5157de946ce88734e26d60b1f155ade8ad99d688&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
