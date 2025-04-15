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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFASO4M%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIsvo1OIMBwsdIV12FSby5zkiKsJFQ6dkOR1iTDezw6QIhAOKmha2KMp5U%2BiTwydDddBinRQxWreH0CgZcnrjx6Bd6Kv8DCDQQABoMNjM3NDIzMTgzODA1IgyFOJBEwPmNVxPS3fcq3APrpvZqJUTy2ih0gA3e2%2BjYKziaSirZ2IEl1gabvLABXZ5JbTAamkyD7Vn%2FRs%2BQIl8bp%2FgI35vNwwfh4pA2jxt%2BAScxAvCBd1MfdL0OrwkhCy%2FQR0E50eiEgeSPnwYjcvca2kHQKpFGF7BpkCJtAQwlSI6gNCvOrCtxSseYoRiLbcpUZJjNYWoNxpRMi77mM2hRfEM2GY6%2BK3vx4AN0yXb%2Fuhe117zH%2BrRojOqTtuot8Lj0OhoZzsyw%2FKwoE%2FDmPF5nxJcmauFcX2eg9e4%2FKdVVMIZzbJAX%2FUGFDXQPZm8PeiE0GUrX7yKIGiyuOBqy1rfY8XE9Kc0UQ4ADaKHlAR2H6ghq%2FL9Vf7VXBRA75H2ROij3f3zhd1MUgpV4aj5MQbErCAD8U6moAS%2Fuav8fLHz7l04kKXvJqN%2BpNSef3B%2FXe78iDLnWkY2%2BSNGW%2Fxo86QBYU5xWPpIVLPmK7O3kknJy0AxFzhmTA2Kr%2FmYg2CtId3TmewU6l36fOJIJr7RxCSxMkF5E1cO9CSIsOvspgWeYLoXuPu80tH9K4vFOjUkCiNDVeBkocU4oBKCY3aUZXuzYCATd3JwOutnfKPpEvG3gEAeR%2F98qW9g71pIICoNS30c947YoJU%2Bj6L%2FzWTCG1vq%2FBjqkAWrTZwk1zcZ9lC9aXiAsntz%2BJYE6rXUEmkmzMdgUmhmhWsahz4zUPeSmWXHClbZwh3Umr2duDKgmRZCHRaT40VD7hdhRdY3w8estZky3Fgq175YqkLyNvb9%2BgRB5yr1QCfMW7BGLaoCHSZ2iSQKhUgCXyKQt%2Ff%2F85w%2FlvOH37L8wj7d52JTy%2BQ0CYLWmTS67EYS7A%2BoC87DoHtjfaRgZyf7640%2FG&X-Amz-Signature=9e0c8baf28430c040cf01e0da6fc799afab1ab21d9a2d45ceed94f9da6362e0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFASO4M%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIsvo1OIMBwsdIV12FSby5zkiKsJFQ6dkOR1iTDezw6QIhAOKmha2KMp5U%2BiTwydDddBinRQxWreH0CgZcnrjx6Bd6Kv8DCDQQABoMNjM3NDIzMTgzODA1IgyFOJBEwPmNVxPS3fcq3APrpvZqJUTy2ih0gA3e2%2BjYKziaSirZ2IEl1gabvLABXZ5JbTAamkyD7Vn%2FRs%2BQIl8bp%2FgI35vNwwfh4pA2jxt%2BAScxAvCBd1MfdL0OrwkhCy%2FQR0E50eiEgeSPnwYjcvca2kHQKpFGF7BpkCJtAQwlSI6gNCvOrCtxSseYoRiLbcpUZJjNYWoNxpRMi77mM2hRfEM2GY6%2BK3vx4AN0yXb%2Fuhe117zH%2BrRojOqTtuot8Lj0OhoZzsyw%2FKwoE%2FDmPF5nxJcmauFcX2eg9e4%2FKdVVMIZzbJAX%2FUGFDXQPZm8PeiE0GUrX7yKIGiyuOBqy1rfY8XE9Kc0UQ4ADaKHlAR2H6ghq%2FL9Vf7VXBRA75H2ROij3f3zhd1MUgpV4aj5MQbErCAD8U6moAS%2Fuav8fLHz7l04kKXvJqN%2BpNSef3B%2FXe78iDLnWkY2%2BSNGW%2Fxo86QBYU5xWPpIVLPmK7O3kknJy0AxFzhmTA2Kr%2FmYg2CtId3TmewU6l36fOJIJr7RxCSxMkF5E1cO9CSIsOvspgWeYLoXuPu80tH9K4vFOjUkCiNDVeBkocU4oBKCY3aUZXuzYCATd3JwOutnfKPpEvG3gEAeR%2F98qW9g71pIICoNS30c947YoJU%2Bj6L%2FzWTCG1vq%2FBjqkAWrTZwk1zcZ9lC9aXiAsntz%2BJYE6rXUEmkmzMdgUmhmhWsahz4zUPeSmWXHClbZwh3Umr2duDKgmRZCHRaT40VD7hdhRdY3w8estZky3Fgq175YqkLyNvb9%2BgRB5yr1QCfMW7BGLaoCHSZ2iSQKhUgCXyKQt%2Ff%2F85w%2FlvOH37L8wj7d52JTy%2BQ0CYLWmTS67EYS7A%2BoC87DoHtjfaRgZyf7640%2FG&X-Amz-Signature=81966c444f90181f16fb90e97a2423bf85d75b048ce475b0ce4008df94d75797&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFASO4M%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIsvo1OIMBwsdIV12FSby5zkiKsJFQ6dkOR1iTDezw6QIhAOKmha2KMp5U%2BiTwydDddBinRQxWreH0CgZcnrjx6Bd6Kv8DCDQQABoMNjM3NDIzMTgzODA1IgyFOJBEwPmNVxPS3fcq3APrpvZqJUTy2ih0gA3e2%2BjYKziaSirZ2IEl1gabvLABXZ5JbTAamkyD7Vn%2FRs%2BQIl8bp%2FgI35vNwwfh4pA2jxt%2BAScxAvCBd1MfdL0OrwkhCy%2FQR0E50eiEgeSPnwYjcvca2kHQKpFGF7BpkCJtAQwlSI6gNCvOrCtxSseYoRiLbcpUZJjNYWoNxpRMi77mM2hRfEM2GY6%2BK3vx4AN0yXb%2Fuhe117zH%2BrRojOqTtuot8Lj0OhoZzsyw%2FKwoE%2FDmPF5nxJcmauFcX2eg9e4%2FKdVVMIZzbJAX%2FUGFDXQPZm8PeiE0GUrX7yKIGiyuOBqy1rfY8XE9Kc0UQ4ADaKHlAR2H6ghq%2FL9Vf7VXBRA75H2ROij3f3zhd1MUgpV4aj5MQbErCAD8U6moAS%2Fuav8fLHz7l04kKXvJqN%2BpNSef3B%2FXe78iDLnWkY2%2BSNGW%2Fxo86QBYU5xWPpIVLPmK7O3kknJy0AxFzhmTA2Kr%2FmYg2CtId3TmewU6l36fOJIJr7RxCSxMkF5E1cO9CSIsOvspgWeYLoXuPu80tH9K4vFOjUkCiNDVeBkocU4oBKCY3aUZXuzYCATd3JwOutnfKPpEvG3gEAeR%2F98qW9g71pIICoNS30c947YoJU%2Bj6L%2FzWTCG1vq%2FBjqkAWrTZwk1zcZ9lC9aXiAsntz%2BJYE6rXUEmkmzMdgUmhmhWsahz4zUPeSmWXHClbZwh3Umr2duDKgmRZCHRaT40VD7hdhRdY3w8estZky3Fgq175YqkLyNvb9%2BgRB5yr1QCfMW7BGLaoCHSZ2iSQKhUgCXyKQt%2Ff%2F85w%2FlvOH37L8wj7d52JTy%2BQ0CYLWmTS67EYS7A%2BoC87DoHtjfaRgZyf7640%2FG&X-Amz-Signature=ded217c5d068435e47fffcaf53f405ed48ee705ac4faf5cfd2e9844bd8fa7c71&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFASO4M%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIsvo1OIMBwsdIV12FSby5zkiKsJFQ6dkOR1iTDezw6QIhAOKmha2KMp5U%2BiTwydDddBinRQxWreH0CgZcnrjx6Bd6Kv8DCDQQABoMNjM3NDIzMTgzODA1IgyFOJBEwPmNVxPS3fcq3APrpvZqJUTy2ih0gA3e2%2BjYKziaSirZ2IEl1gabvLABXZ5JbTAamkyD7Vn%2FRs%2BQIl8bp%2FgI35vNwwfh4pA2jxt%2BAScxAvCBd1MfdL0OrwkhCy%2FQR0E50eiEgeSPnwYjcvca2kHQKpFGF7BpkCJtAQwlSI6gNCvOrCtxSseYoRiLbcpUZJjNYWoNxpRMi77mM2hRfEM2GY6%2BK3vx4AN0yXb%2Fuhe117zH%2BrRojOqTtuot8Lj0OhoZzsyw%2FKwoE%2FDmPF5nxJcmauFcX2eg9e4%2FKdVVMIZzbJAX%2FUGFDXQPZm8PeiE0GUrX7yKIGiyuOBqy1rfY8XE9Kc0UQ4ADaKHlAR2H6ghq%2FL9Vf7VXBRA75H2ROij3f3zhd1MUgpV4aj5MQbErCAD8U6moAS%2Fuav8fLHz7l04kKXvJqN%2BpNSef3B%2FXe78iDLnWkY2%2BSNGW%2Fxo86QBYU5xWPpIVLPmK7O3kknJy0AxFzhmTA2Kr%2FmYg2CtId3TmewU6l36fOJIJr7RxCSxMkF5E1cO9CSIsOvspgWeYLoXuPu80tH9K4vFOjUkCiNDVeBkocU4oBKCY3aUZXuzYCATd3JwOutnfKPpEvG3gEAeR%2F98qW9g71pIICoNS30c947YoJU%2Bj6L%2FzWTCG1vq%2FBjqkAWrTZwk1zcZ9lC9aXiAsntz%2BJYE6rXUEmkmzMdgUmhmhWsahz4zUPeSmWXHClbZwh3Umr2duDKgmRZCHRaT40VD7hdhRdY3w8estZky3Fgq175YqkLyNvb9%2BgRB5yr1QCfMW7BGLaoCHSZ2iSQKhUgCXyKQt%2Ff%2F85w%2FlvOH37L8wj7d52JTy%2BQ0CYLWmTS67EYS7A%2BoC87DoHtjfaRgZyf7640%2FG&X-Amz-Signature=b46f3d4d12a845fc826aaf3d295cd1800766210b957b9f5dcb0418d925f6ae22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFASO4M%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIsvo1OIMBwsdIV12FSby5zkiKsJFQ6dkOR1iTDezw6QIhAOKmha2KMp5U%2BiTwydDddBinRQxWreH0CgZcnrjx6Bd6Kv8DCDQQABoMNjM3NDIzMTgzODA1IgyFOJBEwPmNVxPS3fcq3APrpvZqJUTy2ih0gA3e2%2BjYKziaSirZ2IEl1gabvLABXZ5JbTAamkyD7Vn%2FRs%2BQIl8bp%2FgI35vNwwfh4pA2jxt%2BAScxAvCBd1MfdL0OrwkhCy%2FQR0E50eiEgeSPnwYjcvca2kHQKpFGF7BpkCJtAQwlSI6gNCvOrCtxSseYoRiLbcpUZJjNYWoNxpRMi77mM2hRfEM2GY6%2BK3vx4AN0yXb%2Fuhe117zH%2BrRojOqTtuot8Lj0OhoZzsyw%2FKwoE%2FDmPF5nxJcmauFcX2eg9e4%2FKdVVMIZzbJAX%2FUGFDXQPZm8PeiE0GUrX7yKIGiyuOBqy1rfY8XE9Kc0UQ4ADaKHlAR2H6ghq%2FL9Vf7VXBRA75H2ROij3f3zhd1MUgpV4aj5MQbErCAD8U6moAS%2Fuav8fLHz7l04kKXvJqN%2BpNSef3B%2FXe78iDLnWkY2%2BSNGW%2Fxo86QBYU5xWPpIVLPmK7O3kknJy0AxFzhmTA2Kr%2FmYg2CtId3TmewU6l36fOJIJr7RxCSxMkF5E1cO9CSIsOvspgWeYLoXuPu80tH9K4vFOjUkCiNDVeBkocU4oBKCY3aUZXuzYCATd3JwOutnfKPpEvG3gEAeR%2F98qW9g71pIICoNS30c947YoJU%2Bj6L%2FzWTCG1vq%2FBjqkAWrTZwk1zcZ9lC9aXiAsntz%2BJYE6rXUEmkmzMdgUmhmhWsahz4zUPeSmWXHClbZwh3Umr2duDKgmRZCHRaT40VD7hdhRdY3w8estZky3Fgq175YqkLyNvb9%2BgRB5yr1QCfMW7BGLaoCHSZ2iSQKhUgCXyKQt%2Ff%2F85w%2FlvOH37L8wj7d52JTy%2BQ0CYLWmTS67EYS7A%2BoC87DoHtjfaRgZyf7640%2FG&X-Amz-Signature=98a5c67ce615cdc219f0fb12df329450febabc36b30e1f994d92d262841b8098&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
