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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGMYGTM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIBGC3wb2Mp8sULOJUxLjbfaxh7He2GgfIWPA7%2FxuXVMoAiBqrkBFWfbDI7rQyM4dsTv6cHmT%2B00Qw2tFtjeNDoV%2FWCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvEwPueAvRVvcCyWSKtwDoAT5c5gUdgYBeoWwbkhK3VzkwJAWXUF1u39r58lFPRwH3B%2BeVUDlHxgi7KIgLzWC%2BVkMccrBOKnmFFA5lazZJRQMPhuQjgvTyVo2Fb5vvuCn514MDV0jTmaGJ9McExVvEFEMvFhcBHU6MXmry7Jn9MReITcFLsIiE3ZYskecPCxhYiPKU3yk3SDgax3RYSb70BYYsngveGk01l2HgnTqvLj8fP9cbPUuwt6JblP5wz8P6zchS%2Bfs2kLL35i9a4%2FKBhzysn9%2FyqQrwcDAfLDXf54E9sz20KjMXUrHx1ZR41W2HNRbkNl3PkVfb5IwWSXX%2BC3R%2BHWcPqn8ZptueZWQZs2kHiOk1XcdLNzF0%2FKqu242AMFdA7jO1pMHGy5ujlEmfGmDdi5BgQUIK3H713CDepUssn3Ma3VspIsmYiVmOgEHU8qRC1VZZr6EcVK8VHQfOtaRoanGQe0MQKQnhy%2FUDXk7h9rv0SoFlw6aaopVW26ahVZ5jYBs1WJZPGbX44Db8KFdBTFbTDF5xyH%2BPFECdMifm8fnjxbL2T%2BXMHlGwisjEze0w7kyAVlNa6%2B%2BIY7fEBIkQL2CBWnysTYL2rvdz1GjQbQ6v0eblOzKc%2FKeIFdFkuJjHUl0lZ%2FO%2FKMwoo%2BcxAY6pgHgWdcJGUzdW65Jp7z08815wl34YoA44OtVASN%2FUcVXYrj120cy0wtqqyRHTS25D80bb4SvoZeuHLbXP3wz8zxKg%2FowLBuv3eU79bSGGtyx6TZbI77o2GLTLuW%2Bb8Gb5pu9bbr3bQbqkIuVlzQXY5Tb9v%2Bfn5mincJEAuakIcPK4O%2Bubp9q10ch8I5MkL%2BevZp74G%2BoV2h2XHXZukOKFyUzrGCzd%2FFG&X-Amz-Signature=ac6bf9b75456f2e88411fe09e0942be1acd6e9f08ef5850545f73ac42ca2dd98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGMYGTM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIBGC3wb2Mp8sULOJUxLjbfaxh7He2GgfIWPA7%2FxuXVMoAiBqrkBFWfbDI7rQyM4dsTv6cHmT%2B00Qw2tFtjeNDoV%2FWCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvEwPueAvRVvcCyWSKtwDoAT5c5gUdgYBeoWwbkhK3VzkwJAWXUF1u39r58lFPRwH3B%2BeVUDlHxgi7KIgLzWC%2BVkMccrBOKnmFFA5lazZJRQMPhuQjgvTyVo2Fb5vvuCn514MDV0jTmaGJ9McExVvEFEMvFhcBHU6MXmry7Jn9MReITcFLsIiE3ZYskecPCxhYiPKU3yk3SDgax3RYSb70BYYsngveGk01l2HgnTqvLj8fP9cbPUuwt6JblP5wz8P6zchS%2Bfs2kLL35i9a4%2FKBhzysn9%2FyqQrwcDAfLDXf54E9sz20KjMXUrHx1ZR41W2HNRbkNl3PkVfb5IwWSXX%2BC3R%2BHWcPqn8ZptueZWQZs2kHiOk1XcdLNzF0%2FKqu242AMFdA7jO1pMHGy5ujlEmfGmDdi5BgQUIK3H713CDepUssn3Ma3VspIsmYiVmOgEHU8qRC1VZZr6EcVK8VHQfOtaRoanGQe0MQKQnhy%2FUDXk7h9rv0SoFlw6aaopVW26ahVZ5jYBs1WJZPGbX44Db8KFdBTFbTDF5xyH%2BPFECdMifm8fnjxbL2T%2BXMHlGwisjEze0w7kyAVlNa6%2B%2BIY7fEBIkQL2CBWnysTYL2rvdz1GjQbQ6v0eblOzKc%2FKeIFdFkuJjHUl0lZ%2FO%2FKMwoo%2BcxAY6pgHgWdcJGUzdW65Jp7z08815wl34YoA44OtVASN%2FUcVXYrj120cy0wtqqyRHTS25D80bb4SvoZeuHLbXP3wz8zxKg%2FowLBuv3eU79bSGGtyx6TZbI77o2GLTLuW%2Bb8Gb5pu9bbr3bQbqkIuVlzQXY5Tb9v%2Bfn5mincJEAuakIcPK4O%2Bubp9q10ch8I5MkL%2BevZp74G%2BoV2h2XHXZukOKFyUzrGCzd%2FFG&X-Amz-Signature=2aa40b39caa579e56466049c9241afd8db1000630790d498e2956c7a4c0138d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGMYGTM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIBGC3wb2Mp8sULOJUxLjbfaxh7He2GgfIWPA7%2FxuXVMoAiBqrkBFWfbDI7rQyM4dsTv6cHmT%2B00Qw2tFtjeNDoV%2FWCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvEwPueAvRVvcCyWSKtwDoAT5c5gUdgYBeoWwbkhK3VzkwJAWXUF1u39r58lFPRwH3B%2BeVUDlHxgi7KIgLzWC%2BVkMccrBOKnmFFA5lazZJRQMPhuQjgvTyVo2Fb5vvuCn514MDV0jTmaGJ9McExVvEFEMvFhcBHU6MXmry7Jn9MReITcFLsIiE3ZYskecPCxhYiPKU3yk3SDgax3RYSb70BYYsngveGk01l2HgnTqvLj8fP9cbPUuwt6JblP5wz8P6zchS%2Bfs2kLL35i9a4%2FKBhzysn9%2FyqQrwcDAfLDXf54E9sz20KjMXUrHx1ZR41W2HNRbkNl3PkVfb5IwWSXX%2BC3R%2BHWcPqn8ZptueZWQZs2kHiOk1XcdLNzF0%2FKqu242AMFdA7jO1pMHGy5ujlEmfGmDdi5BgQUIK3H713CDepUssn3Ma3VspIsmYiVmOgEHU8qRC1VZZr6EcVK8VHQfOtaRoanGQe0MQKQnhy%2FUDXk7h9rv0SoFlw6aaopVW26ahVZ5jYBs1WJZPGbX44Db8KFdBTFbTDF5xyH%2BPFECdMifm8fnjxbL2T%2BXMHlGwisjEze0w7kyAVlNa6%2B%2BIY7fEBIkQL2CBWnysTYL2rvdz1GjQbQ6v0eblOzKc%2FKeIFdFkuJjHUl0lZ%2FO%2FKMwoo%2BcxAY6pgHgWdcJGUzdW65Jp7z08815wl34YoA44OtVASN%2FUcVXYrj120cy0wtqqyRHTS25D80bb4SvoZeuHLbXP3wz8zxKg%2FowLBuv3eU79bSGGtyx6TZbI77o2GLTLuW%2Bb8Gb5pu9bbr3bQbqkIuVlzQXY5Tb9v%2Bfn5mincJEAuakIcPK4O%2Bubp9q10ch8I5MkL%2BevZp74G%2BoV2h2XHXZukOKFyUzrGCzd%2FFG&X-Amz-Signature=86372eff662a69a394a17500ed74fb8bd0d0c5c33247eb53bb0c5de3e9f895ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGMYGTM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIBGC3wb2Mp8sULOJUxLjbfaxh7He2GgfIWPA7%2FxuXVMoAiBqrkBFWfbDI7rQyM4dsTv6cHmT%2B00Qw2tFtjeNDoV%2FWCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvEwPueAvRVvcCyWSKtwDoAT5c5gUdgYBeoWwbkhK3VzkwJAWXUF1u39r58lFPRwH3B%2BeVUDlHxgi7KIgLzWC%2BVkMccrBOKnmFFA5lazZJRQMPhuQjgvTyVo2Fb5vvuCn514MDV0jTmaGJ9McExVvEFEMvFhcBHU6MXmry7Jn9MReITcFLsIiE3ZYskecPCxhYiPKU3yk3SDgax3RYSb70BYYsngveGk01l2HgnTqvLj8fP9cbPUuwt6JblP5wz8P6zchS%2Bfs2kLL35i9a4%2FKBhzysn9%2FyqQrwcDAfLDXf54E9sz20KjMXUrHx1ZR41W2HNRbkNl3PkVfb5IwWSXX%2BC3R%2BHWcPqn8ZptueZWQZs2kHiOk1XcdLNzF0%2FKqu242AMFdA7jO1pMHGy5ujlEmfGmDdi5BgQUIK3H713CDepUssn3Ma3VspIsmYiVmOgEHU8qRC1VZZr6EcVK8VHQfOtaRoanGQe0MQKQnhy%2FUDXk7h9rv0SoFlw6aaopVW26ahVZ5jYBs1WJZPGbX44Db8KFdBTFbTDF5xyH%2BPFECdMifm8fnjxbL2T%2BXMHlGwisjEze0w7kyAVlNa6%2B%2BIY7fEBIkQL2CBWnysTYL2rvdz1GjQbQ6v0eblOzKc%2FKeIFdFkuJjHUl0lZ%2FO%2FKMwoo%2BcxAY6pgHgWdcJGUzdW65Jp7z08815wl34YoA44OtVASN%2FUcVXYrj120cy0wtqqyRHTS25D80bb4SvoZeuHLbXP3wz8zxKg%2FowLBuv3eU79bSGGtyx6TZbI77o2GLTLuW%2Bb8Gb5pu9bbr3bQbqkIuVlzQXY5Tb9v%2Bfn5mincJEAuakIcPK4O%2Bubp9q10ch8I5MkL%2BevZp74G%2BoV2h2XHXZukOKFyUzrGCzd%2FFG&X-Amz-Signature=2a9f22305852a2e664a2d4b7311c8d016136d81a69f4e8c1b6d5d15db19fdc04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGMYGTM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIBGC3wb2Mp8sULOJUxLjbfaxh7He2GgfIWPA7%2FxuXVMoAiBqrkBFWfbDI7rQyM4dsTv6cHmT%2B00Qw2tFtjeNDoV%2FWCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvEwPueAvRVvcCyWSKtwDoAT5c5gUdgYBeoWwbkhK3VzkwJAWXUF1u39r58lFPRwH3B%2BeVUDlHxgi7KIgLzWC%2BVkMccrBOKnmFFA5lazZJRQMPhuQjgvTyVo2Fb5vvuCn514MDV0jTmaGJ9McExVvEFEMvFhcBHU6MXmry7Jn9MReITcFLsIiE3ZYskecPCxhYiPKU3yk3SDgax3RYSb70BYYsngveGk01l2HgnTqvLj8fP9cbPUuwt6JblP5wz8P6zchS%2Bfs2kLL35i9a4%2FKBhzysn9%2FyqQrwcDAfLDXf54E9sz20KjMXUrHx1ZR41W2HNRbkNl3PkVfb5IwWSXX%2BC3R%2BHWcPqn8ZptueZWQZs2kHiOk1XcdLNzF0%2FKqu242AMFdA7jO1pMHGy5ujlEmfGmDdi5BgQUIK3H713CDepUssn3Ma3VspIsmYiVmOgEHU8qRC1VZZr6EcVK8VHQfOtaRoanGQe0MQKQnhy%2FUDXk7h9rv0SoFlw6aaopVW26ahVZ5jYBs1WJZPGbX44Db8KFdBTFbTDF5xyH%2BPFECdMifm8fnjxbL2T%2BXMHlGwisjEze0w7kyAVlNa6%2B%2BIY7fEBIkQL2CBWnysTYL2rvdz1GjQbQ6v0eblOzKc%2FKeIFdFkuJjHUl0lZ%2FO%2FKMwoo%2BcxAY6pgHgWdcJGUzdW65Jp7z08815wl34YoA44OtVASN%2FUcVXYrj120cy0wtqqyRHTS25D80bb4SvoZeuHLbXP3wz8zxKg%2FowLBuv3eU79bSGGtyx6TZbI77o2GLTLuW%2Bb8Gb5pu9bbr3bQbqkIuVlzQXY5Tb9v%2Bfn5mincJEAuakIcPK4O%2Bubp9q10ch8I5MkL%2BevZp74G%2BoV2h2XHXZukOKFyUzrGCzd%2FFG&X-Amz-Signature=10f1192c6ec994282164976ba260d317216be888e0e15907467289654fd9c448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
