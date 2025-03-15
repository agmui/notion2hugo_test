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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOCKQVSO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEU69cyntFO66ZLjpFyMOS07W9UkgdigDVzPUrUIjhkRAiA5ZwhxLLQxvNIhjrsfj1%2FFN%2BxkiUctTyt2F8gBbMmS9Cr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMeFUZDoklWxqt1xhjKtwDNoef8b00QyNlt2NHVN1F8zcartLNNCiAnNx6Ys58seS8Zd%2BaXFOT3AqzzeJWAz0iuqxgUV0qxp75LLGIEhxs%2Bqyth48Aut10pdCVLFJ2MBxbfMF7EXKPAlUg%2Ban5duWzp0EptN8oNUh6uBwNa7jFxooAx553k8a7NLAxFJCJMVPxrqFQI8i2IRvv%2FpnH7txwOZIVR0Vp5Ineio4M5yy0hYlPkcHJNyUuX05VOW3ucTcY49OuHWS6PoSqIDw%2F7L8H9tfwnYJWMzmuhce0WN461lfpvCv9Yn1wkBkvpgZ%2Ff3mqWFF%2BzyfJnEA0q87H7uUJ9vji2LF3QBbbYogY11eoyeOyY6U4o4PGQ9KiIcahPusmkvNGb7SExj8SEwDhhmYKBWZFbwwwd%2BdS%2F9SCmI7ua3JTjKBJdn48unx2Z8BqSlcX48xXPbEeFD20%2F3UVv2S%2Bs58HIJiGHWJcl2PQKTmrhbMX7%2Bc4kU2hq8V3V0i38bCTWvPEhoXF5OkM4sIsdLkSwFYqqbU54JRaMFdRXQrzN2a3RjNDs9ScB04FUbkospx8WfnpMqIYRzdzsKHYvxoA2NDP1S2TUCJU%2Bj2CPT5hpkz8DUGlJCoOhJMA1yLdiff256Z3b8cPPjrmtN0wgeLUvgY6pgGJnv6%2FL0EsZDJHATDuhTzFC%2FftRbqxfB%2BNQauU8vsmivuPl77L%2BBmQ%2BOz9WOkk5ci95KRn3sYt2Md2ZT1I%2BEzMSswfZ8C2QqY%2B5n9kIZ6I03BNOk95xll5ndoFyd%2Fa4nKbkiZbJVbzn%2FLPNHx77%2BDRXGY1SWgyXt6YzH0P1BLHzgoShQmCJf4W70OSQOcLs5YtO7I6UmI10PWqi2T4YpDWwmVUTLas&X-Amz-Signature=693e469c7b378d98692902553f5ef9a395c04f2f32688376fe3b5530ca95dae1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOCKQVSO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEU69cyntFO66ZLjpFyMOS07W9UkgdigDVzPUrUIjhkRAiA5ZwhxLLQxvNIhjrsfj1%2FFN%2BxkiUctTyt2F8gBbMmS9Cr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMeFUZDoklWxqt1xhjKtwDNoef8b00QyNlt2NHVN1F8zcartLNNCiAnNx6Ys58seS8Zd%2BaXFOT3AqzzeJWAz0iuqxgUV0qxp75LLGIEhxs%2Bqyth48Aut10pdCVLFJ2MBxbfMF7EXKPAlUg%2Ban5duWzp0EptN8oNUh6uBwNa7jFxooAx553k8a7NLAxFJCJMVPxrqFQI8i2IRvv%2FpnH7txwOZIVR0Vp5Ineio4M5yy0hYlPkcHJNyUuX05VOW3ucTcY49OuHWS6PoSqIDw%2F7L8H9tfwnYJWMzmuhce0WN461lfpvCv9Yn1wkBkvpgZ%2Ff3mqWFF%2BzyfJnEA0q87H7uUJ9vji2LF3QBbbYogY11eoyeOyY6U4o4PGQ9KiIcahPusmkvNGb7SExj8SEwDhhmYKBWZFbwwwd%2BdS%2F9SCmI7ua3JTjKBJdn48unx2Z8BqSlcX48xXPbEeFD20%2F3UVv2S%2Bs58HIJiGHWJcl2PQKTmrhbMX7%2Bc4kU2hq8V3V0i38bCTWvPEhoXF5OkM4sIsdLkSwFYqqbU54JRaMFdRXQrzN2a3RjNDs9ScB04FUbkospx8WfnpMqIYRzdzsKHYvxoA2NDP1S2TUCJU%2Bj2CPT5hpkz8DUGlJCoOhJMA1yLdiff256Z3b8cPPjrmtN0wgeLUvgY6pgGJnv6%2FL0EsZDJHATDuhTzFC%2FftRbqxfB%2BNQauU8vsmivuPl77L%2BBmQ%2BOz9WOkk5ci95KRn3sYt2Md2ZT1I%2BEzMSswfZ8C2QqY%2B5n9kIZ6I03BNOk95xll5ndoFyd%2Fa4nKbkiZbJVbzn%2FLPNHx77%2BDRXGY1SWgyXt6YzH0P1BLHzgoShQmCJf4W70OSQOcLs5YtO7I6UmI10PWqi2T4YpDWwmVUTLas&X-Amz-Signature=3cacb9cbc588ec1288ac6d054cc4ddad53d5d7596131da2b23287f0bf8d4c2f1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOCKQVSO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEU69cyntFO66ZLjpFyMOS07W9UkgdigDVzPUrUIjhkRAiA5ZwhxLLQxvNIhjrsfj1%2FFN%2BxkiUctTyt2F8gBbMmS9Cr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMeFUZDoklWxqt1xhjKtwDNoef8b00QyNlt2NHVN1F8zcartLNNCiAnNx6Ys58seS8Zd%2BaXFOT3AqzzeJWAz0iuqxgUV0qxp75LLGIEhxs%2Bqyth48Aut10pdCVLFJ2MBxbfMF7EXKPAlUg%2Ban5duWzp0EptN8oNUh6uBwNa7jFxooAx553k8a7NLAxFJCJMVPxrqFQI8i2IRvv%2FpnH7txwOZIVR0Vp5Ineio4M5yy0hYlPkcHJNyUuX05VOW3ucTcY49OuHWS6PoSqIDw%2F7L8H9tfwnYJWMzmuhce0WN461lfpvCv9Yn1wkBkvpgZ%2Ff3mqWFF%2BzyfJnEA0q87H7uUJ9vji2LF3QBbbYogY11eoyeOyY6U4o4PGQ9KiIcahPusmkvNGb7SExj8SEwDhhmYKBWZFbwwwd%2BdS%2F9SCmI7ua3JTjKBJdn48unx2Z8BqSlcX48xXPbEeFD20%2F3UVv2S%2Bs58HIJiGHWJcl2PQKTmrhbMX7%2Bc4kU2hq8V3V0i38bCTWvPEhoXF5OkM4sIsdLkSwFYqqbU54JRaMFdRXQrzN2a3RjNDs9ScB04FUbkospx8WfnpMqIYRzdzsKHYvxoA2NDP1S2TUCJU%2Bj2CPT5hpkz8DUGlJCoOhJMA1yLdiff256Z3b8cPPjrmtN0wgeLUvgY6pgGJnv6%2FL0EsZDJHATDuhTzFC%2FftRbqxfB%2BNQauU8vsmivuPl77L%2BBmQ%2BOz9WOkk5ci95KRn3sYt2Md2ZT1I%2BEzMSswfZ8C2QqY%2B5n9kIZ6I03BNOk95xll5ndoFyd%2Fa4nKbkiZbJVbzn%2FLPNHx77%2BDRXGY1SWgyXt6YzH0P1BLHzgoShQmCJf4W70OSQOcLs5YtO7I6UmI10PWqi2T4YpDWwmVUTLas&X-Amz-Signature=99468215c06abd51f832606a176916a2508eaaa93969ec93c738da2826ed7c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOCKQVSO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEU69cyntFO66ZLjpFyMOS07W9UkgdigDVzPUrUIjhkRAiA5ZwhxLLQxvNIhjrsfj1%2FFN%2BxkiUctTyt2F8gBbMmS9Cr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMeFUZDoklWxqt1xhjKtwDNoef8b00QyNlt2NHVN1F8zcartLNNCiAnNx6Ys58seS8Zd%2BaXFOT3AqzzeJWAz0iuqxgUV0qxp75LLGIEhxs%2Bqyth48Aut10pdCVLFJ2MBxbfMF7EXKPAlUg%2Ban5duWzp0EptN8oNUh6uBwNa7jFxooAx553k8a7NLAxFJCJMVPxrqFQI8i2IRvv%2FpnH7txwOZIVR0Vp5Ineio4M5yy0hYlPkcHJNyUuX05VOW3ucTcY49OuHWS6PoSqIDw%2F7L8H9tfwnYJWMzmuhce0WN461lfpvCv9Yn1wkBkvpgZ%2Ff3mqWFF%2BzyfJnEA0q87H7uUJ9vji2LF3QBbbYogY11eoyeOyY6U4o4PGQ9KiIcahPusmkvNGb7SExj8SEwDhhmYKBWZFbwwwd%2BdS%2F9SCmI7ua3JTjKBJdn48unx2Z8BqSlcX48xXPbEeFD20%2F3UVv2S%2Bs58HIJiGHWJcl2PQKTmrhbMX7%2Bc4kU2hq8V3V0i38bCTWvPEhoXF5OkM4sIsdLkSwFYqqbU54JRaMFdRXQrzN2a3RjNDs9ScB04FUbkospx8WfnpMqIYRzdzsKHYvxoA2NDP1S2TUCJU%2Bj2CPT5hpkz8DUGlJCoOhJMA1yLdiff256Z3b8cPPjrmtN0wgeLUvgY6pgGJnv6%2FL0EsZDJHATDuhTzFC%2FftRbqxfB%2BNQauU8vsmivuPl77L%2BBmQ%2BOz9WOkk5ci95KRn3sYt2Md2ZT1I%2BEzMSswfZ8C2QqY%2B5n9kIZ6I03BNOk95xll5ndoFyd%2Fa4nKbkiZbJVbzn%2FLPNHx77%2BDRXGY1SWgyXt6YzH0P1BLHzgoShQmCJf4W70OSQOcLs5YtO7I6UmI10PWqi2T4YpDWwmVUTLas&X-Amz-Signature=08425111363d1b34b2d94b2adfa039aba9dca7db8d87a41d5b64014bf01c00ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOCKQVSO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEU69cyntFO66ZLjpFyMOS07W9UkgdigDVzPUrUIjhkRAiA5ZwhxLLQxvNIhjrsfj1%2FFN%2BxkiUctTyt2F8gBbMmS9Cr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMeFUZDoklWxqt1xhjKtwDNoef8b00QyNlt2NHVN1F8zcartLNNCiAnNx6Ys58seS8Zd%2BaXFOT3AqzzeJWAz0iuqxgUV0qxp75LLGIEhxs%2Bqyth48Aut10pdCVLFJ2MBxbfMF7EXKPAlUg%2Ban5duWzp0EptN8oNUh6uBwNa7jFxooAx553k8a7NLAxFJCJMVPxrqFQI8i2IRvv%2FpnH7txwOZIVR0Vp5Ineio4M5yy0hYlPkcHJNyUuX05VOW3ucTcY49OuHWS6PoSqIDw%2F7L8H9tfwnYJWMzmuhce0WN461lfpvCv9Yn1wkBkvpgZ%2Ff3mqWFF%2BzyfJnEA0q87H7uUJ9vji2LF3QBbbYogY11eoyeOyY6U4o4PGQ9KiIcahPusmkvNGb7SExj8SEwDhhmYKBWZFbwwwd%2BdS%2F9SCmI7ua3JTjKBJdn48unx2Z8BqSlcX48xXPbEeFD20%2F3UVv2S%2Bs58HIJiGHWJcl2PQKTmrhbMX7%2Bc4kU2hq8V3V0i38bCTWvPEhoXF5OkM4sIsdLkSwFYqqbU54JRaMFdRXQrzN2a3RjNDs9ScB04FUbkospx8WfnpMqIYRzdzsKHYvxoA2NDP1S2TUCJU%2Bj2CPT5hpkz8DUGlJCoOhJMA1yLdiff256Z3b8cPPjrmtN0wgeLUvgY6pgGJnv6%2FL0EsZDJHATDuhTzFC%2FftRbqxfB%2BNQauU8vsmivuPl77L%2BBmQ%2BOz9WOkk5ci95KRn3sYt2Md2ZT1I%2BEzMSswfZ8C2QqY%2B5n9kIZ6I03BNOk95xll5ndoFyd%2Fa4nKbkiZbJVbzn%2FLPNHx77%2BDRXGY1SWgyXt6YzH0P1BLHzgoShQmCJf4W70OSQOcLs5YtO7I6UmI10PWqi2T4YpDWwmVUTLas&X-Amz-Signature=c1dae3f9822ba976b3921627cba3eff5b6402269f8738ab49265c51913270557&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
