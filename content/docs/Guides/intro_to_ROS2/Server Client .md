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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVF54CHD%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHSKz8R%2F2Vrgg5CCHFYEojB2MZplI5sfmFj8BTRKm93QIhAOm4xUcnOpW6OpNKVbVGBdwlbEh4B76oZqKG%2FEv%2FB9TsKv8DCHkQABoMNjM3NDIzMTgzODA1Igwukjoa053vCiwv%2Br4q3APOs%2BnuilZ%2BfRMPadDiNMA8v0nrWlyRBRUFfgBCe%2Bw2wBgoarnmMM8YD8nM27Mpp6HwRgn0LhLAh9QbY8E53t43faZXN16EpiygtB2dv7JoqNJMr%2FsJ1uT2kf5jLjvARz7u%2Fmmk%2BbhlyV7rCr%2Fbxi2ouBispTByiv5Es7KP7415N%2B46NEZlUvXNBX2k5PtdOcKO6Ni8CaHXwm6sreth4rx1ylvqlUplLi79Oiyd311bYZT4dGCM93k2%2BcweJ9ynML2MmN058fv9Waw3XywQ0Sh0miQ5hcZ8pcz2bXAltXoNt1tof6uBivaSKaaqMe8FJdTcPM7JKsFGuxhoHWPoa0dEdf34KpVlj3DPxzuQ%2Fl0s%2Fvm1UoEE31deFGmb6by0S5U867j3rQQ6FcPCeCU4KRVo1ckI%2FBL04Jyn4r3tFGIfd5dPxW%2BI3XmH2QgCFfj%2Bbp8VN3cGWqHaAPIPDGHLa8O37gzC07w2Nn8WLd9kgY%2FNBaY9WsaeH%2Fzwbrya8%2FxjWtYWONxdA3FcuIAAhErchU%2BQM0x78v6Rdp31XIJeB3Vy3%2B4qr5XNeexNNnG8HCMeOXRAytsBMqxp6RjNnNmODYtuqWunwmX90sZb%2FsbSLF8y4S794tfEMdIt7ZC66TDiu77ABjqkAfO39hP6T%2FlybG%2Fkz3VslkUPyGItpBMWZhT0wKRV9fq%2FlkCNORPRnL%2FsdVEVIB%2FlxMiDhw9jPIMWPlE%2FkO%2Bc%2FC62AK7TKCiYaTjbo6r%2BxBGARP5Ktf%2Bj711Sr0QEyeSNLFdskO8BUBbf030Df8pqbIHBlVrjeT9yvyn6L1SF%2FE8Tttb%2Fl3XXk0Wk5j6KLJ9Pl872yB7BY5FmlCQkZRm9TB5DAj6b&X-Amz-Signature=1418d160509eb9899b4db134869d0542534c1ced2eb78bd479145459b81f5edf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVF54CHD%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHSKz8R%2F2Vrgg5CCHFYEojB2MZplI5sfmFj8BTRKm93QIhAOm4xUcnOpW6OpNKVbVGBdwlbEh4B76oZqKG%2FEv%2FB9TsKv8DCHkQABoMNjM3NDIzMTgzODA1Igwukjoa053vCiwv%2Br4q3APOs%2BnuilZ%2BfRMPadDiNMA8v0nrWlyRBRUFfgBCe%2Bw2wBgoarnmMM8YD8nM27Mpp6HwRgn0LhLAh9QbY8E53t43faZXN16EpiygtB2dv7JoqNJMr%2FsJ1uT2kf5jLjvARz7u%2Fmmk%2BbhlyV7rCr%2Fbxi2ouBispTByiv5Es7KP7415N%2B46NEZlUvXNBX2k5PtdOcKO6Ni8CaHXwm6sreth4rx1ylvqlUplLi79Oiyd311bYZT4dGCM93k2%2BcweJ9ynML2MmN058fv9Waw3XywQ0Sh0miQ5hcZ8pcz2bXAltXoNt1tof6uBivaSKaaqMe8FJdTcPM7JKsFGuxhoHWPoa0dEdf34KpVlj3DPxzuQ%2Fl0s%2Fvm1UoEE31deFGmb6by0S5U867j3rQQ6FcPCeCU4KRVo1ckI%2FBL04Jyn4r3tFGIfd5dPxW%2BI3XmH2QgCFfj%2Bbp8VN3cGWqHaAPIPDGHLa8O37gzC07w2Nn8WLd9kgY%2FNBaY9WsaeH%2Fzwbrya8%2FxjWtYWONxdA3FcuIAAhErchU%2BQM0x78v6Rdp31XIJeB3Vy3%2B4qr5XNeexNNnG8HCMeOXRAytsBMqxp6RjNnNmODYtuqWunwmX90sZb%2FsbSLF8y4S794tfEMdIt7ZC66TDiu77ABjqkAfO39hP6T%2FlybG%2Fkz3VslkUPyGItpBMWZhT0wKRV9fq%2FlkCNORPRnL%2FsdVEVIB%2FlxMiDhw9jPIMWPlE%2FkO%2Bc%2FC62AK7TKCiYaTjbo6r%2BxBGARP5Ktf%2Bj711Sr0QEyeSNLFdskO8BUBbf030Df8pqbIHBlVrjeT9yvyn6L1SF%2FE8Tttb%2Fl3XXk0Wk5j6KLJ9Pl872yB7BY5FmlCQkZRm9TB5DAj6b&X-Amz-Signature=007e4a1e88f9a74a0d3f6047d394a4b31c9063fe306612c1f933e5865b0d2db8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVF54CHD%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHSKz8R%2F2Vrgg5CCHFYEojB2MZplI5sfmFj8BTRKm93QIhAOm4xUcnOpW6OpNKVbVGBdwlbEh4B76oZqKG%2FEv%2FB9TsKv8DCHkQABoMNjM3NDIzMTgzODA1Igwukjoa053vCiwv%2Br4q3APOs%2BnuilZ%2BfRMPadDiNMA8v0nrWlyRBRUFfgBCe%2Bw2wBgoarnmMM8YD8nM27Mpp6HwRgn0LhLAh9QbY8E53t43faZXN16EpiygtB2dv7JoqNJMr%2FsJ1uT2kf5jLjvARz7u%2Fmmk%2BbhlyV7rCr%2Fbxi2ouBispTByiv5Es7KP7415N%2B46NEZlUvXNBX2k5PtdOcKO6Ni8CaHXwm6sreth4rx1ylvqlUplLi79Oiyd311bYZT4dGCM93k2%2BcweJ9ynML2MmN058fv9Waw3XywQ0Sh0miQ5hcZ8pcz2bXAltXoNt1tof6uBivaSKaaqMe8FJdTcPM7JKsFGuxhoHWPoa0dEdf34KpVlj3DPxzuQ%2Fl0s%2Fvm1UoEE31deFGmb6by0S5U867j3rQQ6FcPCeCU4KRVo1ckI%2FBL04Jyn4r3tFGIfd5dPxW%2BI3XmH2QgCFfj%2Bbp8VN3cGWqHaAPIPDGHLa8O37gzC07w2Nn8WLd9kgY%2FNBaY9WsaeH%2Fzwbrya8%2FxjWtYWONxdA3FcuIAAhErchU%2BQM0x78v6Rdp31XIJeB3Vy3%2B4qr5XNeexNNnG8HCMeOXRAytsBMqxp6RjNnNmODYtuqWunwmX90sZb%2FsbSLF8y4S794tfEMdIt7ZC66TDiu77ABjqkAfO39hP6T%2FlybG%2Fkz3VslkUPyGItpBMWZhT0wKRV9fq%2FlkCNORPRnL%2FsdVEVIB%2FlxMiDhw9jPIMWPlE%2FkO%2Bc%2FC62AK7TKCiYaTjbo6r%2BxBGARP5Ktf%2Bj711Sr0QEyeSNLFdskO8BUBbf030Df8pqbIHBlVrjeT9yvyn6L1SF%2FE8Tttb%2Fl3XXk0Wk5j6KLJ9Pl872yB7BY5FmlCQkZRm9TB5DAj6b&X-Amz-Signature=af585b2150a5019aad79e2869daf8b0798831e620ab1e24efca1830a411e5c15&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVF54CHD%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHSKz8R%2F2Vrgg5CCHFYEojB2MZplI5sfmFj8BTRKm93QIhAOm4xUcnOpW6OpNKVbVGBdwlbEh4B76oZqKG%2FEv%2FB9TsKv8DCHkQABoMNjM3NDIzMTgzODA1Igwukjoa053vCiwv%2Br4q3APOs%2BnuilZ%2BfRMPadDiNMA8v0nrWlyRBRUFfgBCe%2Bw2wBgoarnmMM8YD8nM27Mpp6HwRgn0LhLAh9QbY8E53t43faZXN16EpiygtB2dv7JoqNJMr%2FsJ1uT2kf5jLjvARz7u%2Fmmk%2BbhlyV7rCr%2Fbxi2ouBispTByiv5Es7KP7415N%2B46NEZlUvXNBX2k5PtdOcKO6Ni8CaHXwm6sreth4rx1ylvqlUplLi79Oiyd311bYZT4dGCM93k2%2BcweJ9ynML2MmN058fv9Waw3XywQ0Sh0miQ5hcZ8pcz2bXAltXoNt1tof6uBivaSKaaqMe8FJdTcPM7JKsFGuxhoHWPoa0dEdf34KpVlj3DPxzuQ%2Fl0s%2Fvm1UoEE31deFGmb6by0S5U867j3rQQ6FcPCeCU4KRVo1ckI%2FBL04Jyn4r3tFGIfd5dPxW%2BI3XmH2QgCFfj%2Bbp8VN3cGWqHaAPIPDGHLa8O37gzC07w2Nn8WLd9kgY%2FNBaY9WsaeH%2Fzwbrya8%2FxjWtYWONxdA3FcuIAAhErchU%2BQM0x78v6Rdp31XIJeB3Vy3%2B4qr5XNeexNNnG8HCMeOXRAytsBMqxp6RjNnNmODYtuqWunwmX90sZb%2FsbSLF8y4S794tfEMdIt7ZC66TDiu77ABjqkAfO39hP6T%2FlybG%2Fkz3VslkUPyGItpBMWZhT0wKRV9fq%2FlkCNORPRnL%2FsdVEVIB%2FlxMiDhw9jPIMWPlE%2FkO%2Bc%2FC62AK7TKCiYaTjbo6r%2BxBGARP5Ktf%2Bj711Sr0QEyeSNLFdskO8BUBbf030Df8pqbIHBlVrjeT9yvyn6L1SF%2FE8Tttb%2Fl3XXk0Wk5j6KLJ9Pl872yB7BY5FmlCQkZRm9TB5DAj6b&X-Amz-Signature=ae6a04a24973ba1a5d8c050a02fe65e9f462c8788c3a9d49213c96dde4b8e27f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVF54CHD%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHSKz8R%2F2Vrgg5CCHFYEojB2MZplI5sfmFj8BTRKm93QIhAOm4xUcnOpW6OpNKVbVGBdwlbEh4B76oZqKG%2FEv%2FB9TsKv8DCHkQABoMNjM3NDIzMTgzODA1Igwukjoa053vCiwv%2Br4q3APOs%2BnuilZ%2BfRMPadDiNMA8v0nrWlyRBRUFfgBCe%2Bw2wBgoarnmMM8YD8nM27Mpp6HwRgn0LhLAh9QbY8E53t43faZXN16EpiygtB2dv7JoqNJMr%2FsJ1uT2kf5jLjvARz7u%2Fmmk%2BbhlyV7rCr%2Fbxi2ouBispTByiv5Es7KP7415N%2B46NEZlUvXNBX2k5PtdOcKO6Ni8CaHXwm6sreth4rx1ylvqlUplLi79Oiyd311bYZT4dGCM93k2%2BcweJ9ynML2MmN058fv9Waw3XywQ0Sh0miQ5hcZ8pcz2bXAltXoNt1tof6uBivaSKaaqMe8FJdTcPM7JKsFGuxhoHWPoa0dEdf34KpVlj3DPxzuQ%2Fl0s%2Fvm1UoEE31deFGmb6by0S5U867j3rQQ6FcPCeCU4KRVo1ckI%2FBL04Jyn4r3tFGIfd5dPxW%2BI3XmH2QgCFfj%2Bbp8VN3cGWqHaAPIPDGHLa8O37gzC07w2Nn8WLd9kgY%2FNBaY9WsaeH%2Fzwbrya8%2FxjWtYWONxdA3FcuIAAhErchU%2BQM0x78v6Rdp31XIJeB3Vy3%2B4qr5XNeexNNnG8HCMeOXRAytsBMqxp6RjNnNmODYtuqWunwmX90sZb%2FsbSLF8y4S794tfEMdIt7ZC66TDiu77ABjqkAfO39hP6T%2FlybG%2Fkz3VslkUPyGItpBMWZhT0wKRV9fq%2FlkCNORPRnL%2FsdVEVIB%2FlxMiDhw9jPIMWPlE%2FkO%2Bc%2FC62AK7TKCiYaTjbo6r%2BxBGARP5Ktf%2Bj711Sr0QEyeSNLFdskO8BUBbf030Df8pqbIHBlVrjeT9yvyn6L1SF%2FE8Tttb%2Fl3XXk0Wk5j6KLJ9Pl872yB7BY5FmlCQkZRm9TB5DAj6b&X-Amz-Signature=419ed1600c6b13f449b00c3e91f71813c6a780340f85deef43c5677302c781d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
