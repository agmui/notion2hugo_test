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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T46JXVXP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLtigFKtPn1qSh1zmMXdpKdbZJRL98jLaBlQxj1mtqRAiEA%2Fqc%2BPYu4hhcZ8uJ7prsG3GbnCyIdCGUG9LZ8jyyHOr0qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoOydpEto93ybBRfircA1hL%2FSIuOS7rRwrocfDigvv1q81au3dATQh%2FZv3nT%2F4320JRkL2QjIYzSpmFzmJQ6HSxveUOfCi0KNW1cAy%2BKpyiPu3auEvu9kZIGq%2Ftxosioj5DFRmHmPwaMbNVwozIl2KwKx6iIuDOGkK%2BpPqdojy4ioUpkLDB7ukBdA4tMvvKrAmysUNr3RbrZ3%2Bue8qHXOlSOSN%2Fobn0WeBQzM58R9GyhYyT%2BExe%2BA5NCu4evtwOi6iTHDQwR0LTPVFEvds4p2fdBfZNXbqrsX1vsRZOo3Q5EvSUdqYEj%2F5RQvxCrbvSKYfYz%2Fw0JrQQCJjKoRjaKhLE7P2GCPl%2BYVNVFeFMh%2Fegw96%2FhtV64cFNd0d8mIlFGnQCy38fdlzLUIV7JBh1xxwHGsvQHdgD2l5upXbsBXmox3zOhHpOPEb0E%2BpdZNGIaGtaQ6nv%2BK1GYIL4gPrJ3l7lJtiW7iwOGI2c%2F4z%2FgRo%2B9KJnRagmIILYridOIFIzJ8wAGAE2VsEXwcPKtHdXgyFeSqolbFEidYJED8uhGTF3iNzXAE%2BNYhLzFDU%2Bc1vn28dtq3aW7L4EhS4dpI2eW3HYLrM6WujiDx9kijAB6zjbMkiWN%2Bc9XAWYbpNG2Y6yB%2BV5SExvT%2F3%2B5491MJ6F370GOqUBsDY4tfw%2FVUSJxtZFRV1sTG52Vw6FoLueF%2BdNIJZMJx5JKS%2BRWFablQYl1nmhQfdiE8Ik4e4hgkwFnzXdHq82Yl3EiYmsfj2UxTkwGV%2BeSugvxgs3NCwd0SzHon%2FWhstYPBnVsy%2Fmqkd85VDssKHsNzIH4xchOyWDpHxZUyYMh%2FSdcibSxMLp0NyPBKbDnYiikMv8S%2BW3vNRAV6Y31EAwIUVmPuiG&X-Amz-Signature=a81a27ab8ae2f75da7f23d0139a98146e241ca770b7c5c48a8146557b7de7283&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T46JXVXP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLtigFKtPn1qSh1zmMXdpKdbZJRL98jLaBlQxj1mtqRAiEA%2Fqc%2BPYu4hhcZ8uJ7prsG3GbnCyIdCGUG9LZ8jyyHOr0qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoOydpEto93ybBRfircA1hL%2FSIuOS7rRwrocfDigvv1q81au3dATQh%2FZv3nT%2F4320JRkL2QjIYzSpmFzmJQ6HSxveUOfCi0KNW1cAy%2BKpyiPu3auEvu9kZIGq%2Ftxosioj5DFRmHmPwaMbNVwozIl2KwKx6iIuDOGkK%2BpPqdojy4ioUpkLDB7ukBdA4tMvvKrAmysUNr3RbrZ3%2Bue8qHXOlSOSN%2Fobn0WeBQzM58R9GyhYyT%2BExe%2BA5NCu4evtwOi6iTHDQwR0LTPVFEvds4p2fdBfZNXbqrsX1vsRZOo3Q5EvSUdqYEj%2F5RQvxCrbvSKYfYz%2Fw0JrQQCJjKoRjaKhLE7P2GCPl%2BYVNVFeFMh%2Fegw96%2FhtV64cFNd0d8mIlFGnQCy38fdlzLUIV7JBh1xxwHGsvQHdgD2l5upXbsBXmox3zOhHpOPEb0E%2BpdZNGIaGtaQ6nv%2BK1GYIL4gPrJ3l7lJtiW7iwOGI2c%2F4z%2FgRo%2B9KJnRagmIILYridOIFIzJ8wAGAE2VsEXwcPKtHdXgyFeSqolbFEidYJED8uhGTF3iNzXAE%2BNYhLzFDU%2Bc1vn28dtq3aW7L4EhS4dpI2eW3HYLrM6WujiDx9kijAB6zjbMkiWN%2Bc9XAWYbpNG2Y6yB%2BV5SExvT%2F3%2B5491MJ6F370GOqUBsDY4tfw%2FVUSJxtZFRV1sTG52Vw6FoLueF%2BdNIJZMJx5JKS%2BRWFablQYl1nmhQfdiE8Ik4e4hgkwFnzXdHq82Yl3EiYmsfj2UxTkwGV%2BeSugvxgs3NCwd0SzHon%2FWhstYPBnVsy%2Fmqkd85VDssKHsNzIH4xchOyWDpHxZUyYMh%2FSdcibSxMLp0NyPBKbDnYiikMv8S%2BW3vNRAV6Y31EAwIUVmPuiG&X-Amz-Signature=f2fec40f9cfde2a833aeb33daaeb06abf479a79d07c099d807073b43fa72b54c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T46JXVXP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLtigFKtPn1qSh1zmMXdpKdbZJRL98jLaBlQxj1mtqRAiEA%2Fqc%2BPYu4hhcZ8uJ7prsG3GbnCyIdCGUG9LZ8jyyHOr0qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoOydpEto93ybBRfircA1hL%2FSIuOS7rRwrocfDigvv1q81au3dATQh%2FZv3nT%2F4320JRkL2QjIYzSpmFzmJQ6HSxveUOfCi0KNW1cAy%2BKpyiPu3auEvu9kZIGq%2Ftxosioj5DFRmHmPwaMbNVwozIl2KwKx6iIuDOGkK%2BpPqdojy4ioUpkLDB7ukBdA4tMvvKrAmysUNr3RbrZ3%2Bue8qHXOlSOSN%2Fobn0WeBQzM58R9GyhYyT%2BExe%2BA5NCu4evtwOi6iTHDQwR0LTPVFEvds4p2fdBfZNXbqrsX1vsRZOo3Q5EvSUdqYEj%2F5RQvxCrbvSKYfYz%2Fw0JrQQCJjKoRjaKhLE7P2GCPl%2BYVNVFeFMh%2Fegw96%2FhtV64cFNd0d8mIlFGnQCy38fdlzLUIV7JBh1xxwHGsvQHdgD2l5upXbsBXmox3zOhHpOPEb0E%2BpdZNGIaGtaQ6nv%2BK1GYIL4gPrJ3l7lJtiW7iwOGI2c%2F4z%2FgRo%2B9KJnRagmIILYridOIFIzJ8wAGAE2VsEXwcPKtHdXgyFeSqolbFEidYJED8uhGTF3iNzXAE%2BNYhLzFDU%2Bc1vn28dtq3aW7L4EhS4dpI2eW3HYLrM6WujiDx9kijAB6zjbMkiWN%2Bc9XAWYbpNG2Y6yB%2BV5SExvT%2F3%2B5491MJ6F370GOqUBsDY4tfw%2FVUSJxtZFRV1sTG52Vw6FoLueF%2BdNIJZMJx5JKS%2BRWFablQYl1nmhQfdiE8Ik4e4hgkwFnzXdHq82Yl3EiYmsfj2UxTkwGV%2BeSugvxgs3NCwd0SzHon%2FWhstYPBnVsy%2Fmqkd85VDssKHsNzIH4xchOyWDpHxZUyYMh%2FSdcibSxMLp0NyPBKbDnYiikMv8S%2BW3vNRAV6Y31EAwIUVmPuiG&X-Amz-Signature=17bc03b8cc8735274b75261bed58c98e251311b13ed6862ae78e39ac4d3136e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T46JXVXP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLtigFKtPn1qSh1zmMXdpKdbZJRL98jLaBlQxj1mtqRAiEA%2Fqc%2BPYu4hhcZ8uJ7prsG3GbnCyIdCGUG9LZ8jyyHOr0qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoOydpEto93ybBRfircA1hL%2FSIuOS7rRwrocfDigvv1q81au3dATQh%2FZv3nT%2F4320JRkL2QjIYzSpmFzmJQ6HSxveUOfCi0KNW1cAy%2BKpyiPu3auEvu9kZIGq%2Ftxosioj5DFRmHmPwaMbNVwozIl2KwKx6iIuDOGkK%2BpPqdojy4ioUpkLDB7ukBdA4tMvvKrAmysUNr3RbrZ3%2Bue8qHXOlSOSN%2Fobn0WeBQzM58R9GyhYyT%2BExe%2BA5NCu4evtwOi6iTHDQwR0LTPVFEvds4p2fdBfZNXbqrsX1vsRZOo3Q5EvSUdqYEj%2F5RQvxCrbvSKYfYz%2Fw0JrQQCJjKoRjaKhLE7P2GCPl%2BYVNVFeFMh%2Fegw96%2FhtV64cFNd0d8mIlFGnQCy38fdlzLUIV7JBh1xxwHGsvQHdgD2l5upXbsBXmox3zOhHpOPEb0E%2BpdZNGIaGtaQ6nv%2BK1GYIL4gPrJ3l7lJtiW7iwOGI2c%2F4z%2FgRo%2B9KJnRagmIILYridOIFIzJ8wAGAE2VsEXwcPKtHdXgyFeSqolbFEidYJED8uhGTF3iNzXAE%2BNYhLzFDU%2Bc1vn28dtq3aW7L4EhS4dpI2eW3HYLrM6WujiDx9kijAB6zjbMkiWN%2Bc9XAWYbpNG2Y6yB%2BV5SExvT%2F3%2B5491MJ6F370GOqUBsDY4tfw%2FVUSJxtZFRV1sTG52Vw6FoLueF%2BdNIJZMJx5JKS%2BRWFablQYl1nmhQfdiE8Ik4e4hgkwFnzXdHq82Yl3EiYmsfj2UxTkwGV%2BeSugvxgs3NCwd0SzHon%2FWhstYPBnVsy%2Fmqkd85VDssKHsNzIH4xchOyWDpHxZUyYMh%2FSdcibSxMLp0NyPBKbDnYiikMv8S%2BW3vNRAV6Y31EAwIUVmPuiG&X-Amz-Signature=9df5404cf1dd2f10af4786710874c2205be30bef0d8a3c54c9117b5363f85984&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T46JXVXP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLtigFKtPn1qSh1zmMXdpKdbZJRL98jLaBlQxj1mtqRAiEA%2Fqc%2BPYu4hhcZ8uJ7prsG3GbnCyIdCGUG9LZ8jyyHOr0qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoOydpEto93ybBRfircA1hL%2FSIuOS7rRwrocfDigvv1q81au3dATQh%2FZv3nT%2F4320JRkL2QjIYzSpmFzmJQ6HSxveUOfCi0KNW1cAy%2BKpyiPu3auEvu9kZIGq%2Ftxosioj5DFRmHmPwaMbNVwozIl2KwKx6iIuDOGkK%2BpPqdojy4ioUpkLDB7ukBdA4tMvvKrAmysUNr3RbrZ3%2Bue8qHXOlSOSN%2Fobn0WeBQzM58R9GyhYyT%2BExe%2BA5NCu4evtwOi6iTHDQwR0LTPVFEvds4p2fdBfZNXbqrsX1vsRZOo3Q5EvSUdqYEj%2F5RQvxCrbvSKYfYz%2Fw0JrQQCJjKoRjaKhLE7P2GCPl%2BYVNVFeFMh%2Fegw96%2FhtV64cFNd0d8mIlFGnQCy38fdlzLUIV7JBh1xxwHGsvQHdgD2l5upXbsBXmox3zOhHpOPEb0E%2BpdZNGIaGtaQ6nv%2BK1GYIL4gPrJ3l7lJtiW7iwOGI2c%2F4z%2FgRo%2B9KJnRagmIILYridOIFIzJ8wAGAE2VsEXwcPKtHdXgyFeSqolbFEidYJED8uhGTF3iNzXAE%2BNYhLzFDU%2Bc1vn28dtq3aW7L4EhS4dpI2eW3HYLrM6WujiDx9kijAB6zjbMkiWN%2Bc9XAWYbpNG2Y6yB%2BV5SExvT%2F3%2B5491MJ6F370GOqUBsDY4tfw%2FVUSJxtZFRV1sTG52Vw6FoLueF%2BdNIJZMJx5JKS%2BRWFablQYl1nmhQfdiE8Ik4e4hgkwFnzXdHq82Yl3EiYmsfj2UxTkwGV%2BeSugvxgs3NCwd0SzHon%2FWhstYPBnVsy%2Fmqkd85VDssKHsNzIH4xchOyWDpHxZUyYMh%2FSdcibSxMLp0NyPBKbDnYiikMv8S%2BW3vNRAV6Y31EAwIUVmPuiG&X-Amz-Signature=6a512e6766ae5f160ec2ef6593898b13f99007999acefac0e70be04e1cdcea66&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
