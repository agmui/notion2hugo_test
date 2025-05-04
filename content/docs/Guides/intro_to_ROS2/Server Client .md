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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZLKCHBD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAUaJPvjp1THN%2BlX8YnjJ9XUKXPPowwHYoIAcOjSaYRfAiBCfRNuOdPnYlPUyqG%2BsYANDwRqhrN1OOu%2BpWbnyPYvFir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMCWNzlqTlx%2F7EWjmYKtwDv5ylFhdAZWLFCYhmrzeL5qC0EisyGTMer3i%2Bk3%2Bmr0gm2AeaVH2dM8QiU7qhtCSJ1jnSs9G8mpVeZ%2Bxc38V7oplZgrUcqCkrBAsxlPzzJ6kq%2FtTg07JdO5no2VL3WD5lbtRJMaQSEHMZ%2B6dyzZBPXFfK4kS5csDMiTHMna9z6QwWeV%2BBAQK512c9MgiHQ8HOisBxKOpv6gZjE8FNb5kcEeIK5jZIJSOyk1vsrkA80UXdUFn9gOgSD91FXgymLOpSCL9MdKYtyqZz0SrnjXd6TyGRY7ZxptmoULWmIavIh2wekD6DONN0%2F%2BQvBpOJW%2BPav42%2FHRJ52sIKU2JiUBw9lanwNdSEcHQrrvPg%2F1i8sHaqG6EdZk3yMNlqNubJD4EqLB4Z3W6JzkySuzMrvUY%2FxymK1a9GNndjqZZwkG05MeXhbXrM82PQQaP4rE7Y1UOfTq993hEmhj%2FUVrT63ht%2B6hNdK8Xa%2BUZJf74CB2OBNtlEWz8Hw113X5%2Bl9sIzPOc93W2m0Qv4d%2FWfMB4xQtf%2FY8oG7qu%2Fm9c6TM6tv%2BzwzFzZ6vva411H6wGReSX7MsTjJLadGgU5crlqIKQORJ5E2VnX1OkFZxhw2pU%2FPkxIM67pr6EEMHactykE7eAw64jdwAY6pgHtEJS4EEsqjKGxuqJclzO7HC%2BXuIy7nZqPejLyeKNk6%2BZMs3ypyF3GmDnrH1D5f5%2FAKD%2BemQHrVEe%2BlDJ6%2BMPVQqdCkwUbz%2B6yL1fmC89i%2BrXYfmIfQvwY04mjJ%2Buh8qK2alDQrzWpLzCAJfzu6CQDSh0XyaEl0ax7ISgm9BFoWmGsDcdQE7RtATVbx%2FbyEVP6ZMQfYalxtU5nhYEl7hdNj3hLLMUC&X-Amz-Signature=c577b3c11d31c00ed63fe6aa4bac29f4aa5dced81f7c687fbfd3d01734cc1d96&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZLKCHBD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAUaJPvjp1THN%2BlX8YnjJ9XUKXPPowwHYoIAcOjSaYRfAiBCfRNuOdPnYlPUyqG%2BsYANDwRqhrN1OOu%2BpWbnyPYvFir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMCWNzlqTlx%2F7EWjmYKtwDv5ylFhdAZWLFCYhmrzeL5qC0EisyGTMer3i%2Bk3%2Bmr0gm2AeaVH2dM8QiU7qhtCSJ1jnSs9G8mpVeZ%2Bxc38V7oplZgrUcqCkrBAsxlPzzJ6kq%2FtTg07JdO5no2VL3WD5lbtRJMaQSEHMZ%2B6dyzZBPXFfK4kS5csDMiTHMna9z6QwWeV%2BBAQK512c9MgiHQ8HOisBxKOpv6gZjE8FNb5kcEeIK5jZIJSOyk1vsrkA80UXdUFn9gOgSD91FXgymLOpSCL9MdKYtyqZz0SrnjXd6TyGRY7ZxptmoULWmIavIh2wekD6DONN0%2F%2BQvBpOJW%2BPav42%2FHRJ52sIKU2JiUBw9lanwNdSEcHQrrvPg%2F1i8sHaqG6EdZk3yMNlqNubJD4EqLB4Z3W6JzkySuzMrvUY%2FxymK1a9GNndjqZZwkG05MeXhbXrM82PQQaP4rE7Y1UOfTq993hEmhj%2FUVrT63ht%2B6hNdK8Xa%2BUZJf74CB2OBNtlEWz8Hw113X5%2Bl9sIzPOc93W2m0Qv4d%2FWfMB4xQtf%2FY8oG7qu%2Fm9c6TM6tv%2BzwzFzZ6vva411H6wGReSX7MsTjJLadGgU5crlqIKQORJ5E2VnX1OkFZxhw2pU%2FPkxIM67pr6EEMHactykE7eAw64jdwAY6pgHtEJS4EEsqjKGxuqJclzO7HC%2BXuIy7nZqPejLyeKNk6%2BZMs3ypyF3GmDnrH1D5f5%2FAKD%2BemQHrVEe%2BlDJ6%2BMPVQqdCkwUbz%2B6yL1fmC89i%2BrXYfmIfQvwY04mjJ%2Buh8qK2alDQrzWpLzCAJfzu6CQDSh0XyaEl0ax7ISgm9BFoWmGsDcdQE7RtATVbx%2FbyEVP6ZMQfYalxtU5nhYEl7hdNj3hLLMUC&X-Amz-Signature=8b5ead0774fa7584e31ebf55379e5a46a7e7c9cbf688fa1a29f3e5a4e86f797b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZLKCHBD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAUaJPvjp1THN%2BlX8YnjJ9XUKXPPowwHYoIAcOjSaYRfAiBCfRNuOdPnYlPUyqG%2BsYANDwRqhrN1OOu%2BpWbnyPYvFir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMCWNzlqTlx%2F7EWjmYKtwDv5ylFhdAZWLFCYhmrzeL5qC0EisyGTMer3i%2Bk3%2Bmr0gm2AeaVH2dM8QiU7qhtCSJ1jnSs9G8mpVeZ%2Bxc38V7oplZgrUcqCkrBAsxlPzzJ6kq%2FtTg07JdO5no2VL3WD5lbtRJMaQSEHMZ%2B6dyzZBPXFfK4kS5csDMiTHMna9z6QwWeV%2BBAQK512c9MgiHQ8HOisBxKOpv6gZjE8FNb5kcEeIK5jZIJSOyk1vsrkA80UXdUFn9gOgSD91FXgymLOpSCL9MdKYtyqZz0SrnjXd6TyGRY7ZxptmoULWmIavIh2wekD6DONN0%2F%2BQvBpOJW%2BPav42%2FHRJ52sIKU2JiUBw9lanwNdSEcHQrrvPg%2F1i8sHaqG6EdZk3yMNlqNubJD4EqLB4Z3W6JzkySuzMrvUY%2FxymK1a9GNndjqZZwkG05MeXhbXrM82PQQaP4rE7Y1UOfTq993hEmhj%2FUVrT63ht%2B6hNdK8Xa%2BUZJf74CB2OBNtlEWz8Hw113X5%2Bl9sIzPOc93W2m0Qv4d%2FWfMB4xQtf%2FY8oG7qu%2Fm9c6TM6tv%2BzwzFzZ6vva411H6wGReSX7MsTjJLadGgU5crlqIKQORJ5E2VnX1OkFZxhw2pU%2FPkxIM67pr6EEMHactykE7eAw64jdwAY6pgHtEJS4EEsqjKGxuqJclzO7HC%2BXuIy7nZqPejLyeKNk6%2BZMs3ypyF3GmDnrH1D5f5%2FAKD%2BemQHrVEe%2BlDJ6%2BMPVQqdCkwUbz%2B6yL1fmC89i%2BrXYfmIfQvwY04mjJ%2Buh8qK2alDQrzWpLzCAJfzu6CQDSh0XyaEl0ax7ISgm9BFoWmGsDcdQE7RtATVbx%2FbyEVP6ZMQfYalxtU5nhYEl7hdNj3hLLMUC&X-Amz-Signature=4599872cc99b490dab2483d8e01865c0bea23b4df00944c0d166fffab89c26a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZLKCHBD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAUaJPvjp1THN%2BlX8YnjJ9XUKXPPowwHYoIAcOjSaYRfAiBCfRNuOdPnYlPUyqG%2BsYANDwRqhrN1OOu%2BpWbnyPYvFir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMCWNzlqTlx%2F7EWjmYKtwDv5ylFhdAZWLFCYhmrzeL5qC0EisyGTMer3i%2Bk3%2Bmr0gm2AeaVH2dM8QiU7qhtCSJ1jnSs9G8mpVeZ%2Bxc38V7oplZgrUcqCkrBAsxlPzzJ6kq%2FtTg07JdO5no2VL3WD5lbtRJMaQSEHMZ%2B6dyzZBPXFfK4kS5csDMiTHMna9z6QwWeV%2BBAQK512c9MgiHQ8HOisBxKOpv6gZjE8FNb5kcEeIK5jZIJSOyk1vsrkA80UXdUFn9gOgSD91FXgymLOpSCL9MdKYtyqZz0SrnjXd6TyGRY7ZxptmoULWmIavIh2wekD6DONN0%2F%2BQvBpOJW%2BPav42%2FHRJ52sIKU2JiUBw9lanwNdSEcHQrrvPg%2F1i8sHaqG6EdZk3yMNlqNubJD4EqLB4Z3W6JzkySuzMrvUY%2FxymK1a9GNndjqZZwkG05MeXhbXrM82PQQaP4rE7Y1UOfTq993hEmhj%2FUVrT63ht%2B6hNdK8Xa%2BUZJf74CB2OBNtlEWz8Hw113X5%2Bl9sIzPOc93W2m0Qv4d%2FWfMB4xQtf%2FY8oG7qu%2Fm9c6TM6tv%2BzwzFzZ6vva411H6wGReSX7MsTjJLadGgU5crlqIKQORJ5E2VnX1OkFZxhw2pU%2FPkxIM67pr6EEMHactykE7eAw64jdwAY6pgHtEJS4EEsqjKGxuqJclzO7HC%2BXuIy7nZqPejLyeKNk6%2BZMs3ypyF3GmDnrH1D5f5%2FAKD%2BemQHrVEe%2BlDJ6%2BMPVQqdCkwUbz%2B6yL1fmC89i%2BrXYfmIfQvwY04mjJ%2Buh8qK2alDQrzWpLzCAJfzu6CQDSh0XyaEl0ax7ISgm9BFoWmGsDcdQE7RtATVbx%2FbyEVP6ZMQfYalxtU5nhYEl7hdNj3hLLMUC&X-Amz-Signature=43b8774f18b3a32d7e9975a0f0c981b145c00bb4608299af0b5d8e33b9e76a61&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZLKCHBD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAUaJPvjp1THN%2BlX8YnjJ9XUKXPPowwHYoIAcOjSaYRfAiBCfRNuOdPnYlPUyqG%2BsYANDwRqhrN1OOu%2BpWbnyPYvFir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMCWNzlqTlx%2F7EWjmYKtwDv5ylFhdAZWLFCYhmrzeL5qC0EisyGTMer3i%2Bk3%2Bmr0gm2AeaVH2dM8QiU7qhtCSJ1jnSs9G8mpVeZ%2Bxc38V7oplZgrUcqCkrBAsxlPzzJ6kq%2FtTg07JdO5no2VL3WD5lbtRJMaQSEHMZ%2B6dyzZBPXFfK4kS5csDMiTHMna9z6QwWeV%2BBAQK512c9MgiHQ8HOisBxKOpv6gZjE8FNb5kcEeIK5jZIJSOyk1vsrkA80UXdUFn9gOgSD91FXgymLOpSCL9MdKYtyqZz0SrnjXd6TyGRY7ZxptmoULWmIavIh2wekD6DONN0%2F%2BQvBpOJW%2BPav42%2FHRJ52sIKU2JiUBw9lanwNdSEcHQrrvPg%2F1i8sHaqG6EdZk3yMNlqNubJD4EqLB4Z3W6JzkySuzMrvUY%2FxymK1a9GNndjqZZwkG05MeXhbXrM82PQQaP4rE7Y1UOfTq993hEmhj%2FUVrT63ht%2B6hNdK8Xa%2BUZJf74CB2OBNtlEWz8Hw113X5%2Bl9sIzPOc93W2m0Qv4d%2FWfMB4xQtf%2FY8oG7qu%2Fm9c6TM6tv%2BzwzFzZ6vva411H6wGReSX7MsTjJLadGgU5crlqIKQORJ5E2VnX1OkFZxhw2pU%2FPkxIM67pr6EEMHactykE7eAw64jdwAY6pgHtEJS4EEsqjKGxuqJclzO7HC%2BXuIy7nZqPejLyeKNk6%2BZMs3ypyF3GmDnrH1D5f5%2FAKD%2BemQHrVEe%2BlDJ6%2BMPVQqdCkwUbz%2B6yL1fmC89i%2BrXYfmIfQvwY04mjJ%2Buh8qK2alDQrzWpLzCAJfzu6CQDSh0XyaEl0ax7ISgm9BFoWmGsDcdQE7RtATVbx%2FbyEVP6ZMQfYalxtU5nhYEl7hdNj3hLLMUC&X-Amz-Signature=95f1f47afd08ee625a8fda832547f40f938ba5c3360d450d7d8a8525bd501a6a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
