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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZAYTTS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAsZZIKlXHQMnzJnydM1yC%2Bx6CvXx1ZSNZkXwBbjJPGAiEA05rqsAGiTbEVby1Nj3oJhsd323fQcFinJltS9hdLq34q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAXgNx%2BeJ8e1X%2B3%2FRyrcA6sxhlc7YGpkTb1qx4FVJzUSw8KkgRloowNrl1sr8HLXa4TuyAnoF9sWW2wO5yeQUk0NyMzujF48hb1XbWG3L8yvK4kW5oOtmCeSgFkUFP777ELsUUHKKX5p6%2FUIgrCKqfV5%2FdEnjXAhUqnIk1IU6OF1kxI4y3h8zHR8%2B3vWXs%2FjrGVGbUNFHnR0MJ9oNOaHWbnBqjT8OLrY%2FWr8TMgGBWOtKgXZUcwPq5kTRhVmSdfBOVDb1oTTv970VFRrEuedru1AMITHTaYecM2NvJwj7pwFs4DIs61qEOavq9e%2FqvhnrSbln3bGU2cw5gstoxK9YMnIWAtYyxkAE3tXUrP2O0gmPw8ksethVy35LBCDsIbR2Li8%2Bbbeco44m9NqL2frEL%2BacyMmIrZbFhHQ2zwbHg73bRKXGc0WIo%2Fdnr7rZZtG7FpUdfRUIshT%2FtsweQM9jnxUJWdcLBVSgm8NtQIu0W%2Fu45GnRN8%2FIyztogzJ6zvJrhE6Ivb1sDHzG0Oby3QdjaHop0%2FsBSDaNm3qZ4kGDalSUtVLnBg7qtmGlT2sO5W20UHApm48dDHzNbMtT6aYRoNH4%2B7SxxbAGkWeJBVX9gypTF9Axq8lCmI%2FnP%2BFYW%2FTDAiCyBw%2BFb2MAiakMOTV870GOqUBK0fMt9XicgREqXddpqjdOBlftnYhprInbSTBbzpZT4tTojGz4sAbhem1eQKL%2Fcg6zLFFZoxChPQmHgso59Fturpi%2BgxRAhvHF99gnq8LNKdSM4ea9CECs%2B6OUZRerkqf%2FU85Ep1sTVKw3VT7EZuhM%2FUgQcY%2Bin13jaOnnr%2FsYHRdM5gl2XzANq%2FEqWGj7hHGqiuOJydPWdxpcyZG%2BPz26HTcmq0L&X-Amz-Signature=b2cbb5b0ddabfcd2fa039d6524e1d65e045cfe6b92588abf93bac46251ef7bdd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZAYTTS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAsZZIKlXHQMnzJnydM1yC%2Bx6CvXx1ZSNZkXwBbjJPGAiEA05rqsAGiTbEVby1Nj3oJhsd323fQcFinJltS9hdLq34q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAXgNx%2BeJ8e1X%2B3%2FRyrcA6sxhlc7YGpkTb1qx4FVJzUSw8KkgRloowNrl1sr8HLXa4TuyAnoF9sWW2wO5yeQUk0NyMzujF48hb1XbWG3L8yvK4kW5oOtmCeSgFkUFP777ELsUUHKKX5p6%2FUIgrCKqfV5%2FdEnjXAhUqnIk1IU6OF1kxI4y3h8zHR8%2B3vWXs%2FjrGVGbUNFHnR0MJ9oNOaHWbnBqjT8OLrY%2FWr8TMgGBWOtKgXZUcwPq5kTRhVmSdfBOVDb1oTTv970VFRrEuedru1AMITHTaYecM2NvJwj7pwFs4DIs61qEOavq9e%2FqvhnrSbln3bGU2cw5gstoxK9YMnIWAtYyxkAE3tXUrP2O0gmPw8ksethVy35LBCDsIbR2Li8%2Bbbeco44m9NqL2frEL%2BacyMmIrZbFhHQ2zwbHg73bRKXGc0WIo%2Fdnr7rZZtG7FpUdfRUIshT%2FtsweQM9jnxUJWdcLBVSgm8NtQIu0W%2Fu45GnRN8%2FIyztogzJ6zvJrhE6Ivb1sDHzG0Oby3QdjaHop0%2FsBSDaNm3qZ4kGDalSUtVLnBg7qtmGlT2sO5W20UHApm48dDHzNbMtT6aYRoNH4%2B7SxxbAGkWeJBVX9gypTF9Axq8lCmI%2FnP%2BFYW%2FTDAiCyBw%2BFb2MAiakMOTV870GOqUBK0fMt9XicgREqXddpqjdOBlftnYhprInbSTBbzpZT4tTojGz4sAbhem1eQKL%2Fcg6zLFFZoxChPQmHgso59Fturpi%2BgxRAhvHF99gnq8LNKdSM4ea9CECs%2B6OUZRerkqf%2FU85Ep1sTVKw3VT7EZuhM%2FUgQcY%2Bin13jaOnnr%2FsYHRdM5gl2XzANq%2FEqWGj7hHGqiuOJydPWdxpcyZG%2BPz26HTcmq0L&X-Amz-Signature=b0c238fe22ece7f4901cf546f4ad14910c17ca09f50c587003c0feddd9159d47&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZAYTTS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAsZZIKlXHQMnzJnydM1yC%2Bx6CvXx1ZSNZkXwBbjJPGAiEA05rqsAGiTbEVby1Nj3oJhsd323fQcFinJltS9hdLq34q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAXgNx%2BeJ8e1X%2B3%2FRyrcA6sxhlc7YGpkTb1qx4FVJzUSw8KkgRloowNrl1sr8HLXa4TuyAnoF9sWW2wO5yeQUk0NyMzujF48hb1XbWG3L8yvK4kW5oOtmCeSgFkUFP777ELsUUHKKX5p6%2FUIgrCKqfV5%2FdEnjXAhUqnIk1IU6OF1kxI4y3h8zHR8%2B3vWXs%2FjrGVGbUNFHnR0MJ9oNOaHWbnBqjT8OLrY%2FWr8TMgGBWOtKgXZUcwPq5kTRhVmSdfBOVDb1oTTv970VFRrEuedru1AMITHTaYecM2NvJwj7pwFs4DIs61qEOavq9e%2FqvhnrSbln3bGU2cw5gstoxK9YMnIWAtYyxkAE3tXUrP2O0gmPw8ksethVy35LBCDsIbR2Li8%2Bbbeco44m9NqL2frEL%2BacyMmIrZbFhHQ2zwbHg73bRKXGc0WIo%2Fdnr7rZZtG7FpUdfRUIshT%2FtsweQM9jnxUJWdcLBVSgm8NtQIu0W%2Fu45GnRN8%2FIyztogzJ6zvJrhE6Ivb1sDHzG0Oby3QdjaHop0%2FsBSDaNm3qZ4kGDalSUtVLnBg7qtmGlT2sO5W20UHApm48dDHzNbMtT6aYRoNH4%2B7SxxbAGkWeJBVX9gypTF9Axq8lCmI%2FnP%2BFYW%2FTDAiCyBw%2BFb2MAiakMOTV870GOqUBK0fMt9XicgREqXddpqjdOBlftnYhprInbSTBbzpZT4tTojGz4sAbhem1eQKL%2Fcg6zLFFZoxChPQmHgso59Fturpi%2BgxRAhvHF99gnq8LNKdSM4ea9CECs%2B6OUZRerkqf%2FU85Ep1sTVKw3VT7EZuhM%2FUgQcY%2Bin13jaOnnr%2FsYHRdM5gl2XzANq%2FEqWGj7hHGqiuOJydPWdxpcyZG%2BPz26HTcmq0L&X-Amz-Signature=4917421ccc10e00f1adc58765538af824824c2c04efe6de3d8bc497655652821&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZAYTTS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAsZZIKlXHQMnzJnydM1yC%2Bx6CvXx1ZSNZkXwBbjJPGAiEA05rqsAGiTbEVby1Nj3oJhsd323fQcFinJltS9hdLq34q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAXgNx%2BeJ8e1X%2B3%2FRyrcA6sxhlc7YGpkTb1qx4FVJzUSw8KkgRloowNrl1sr8HLXa4TuyAnoF9sWW2wO5yeQUk0NyMzujF48hb1XbWG3L8yvK4kW5oOtmCeSgFkUFP777ELsUUHKKX5p6%2FUIgrCKqfV5%2FdEnjXAhUqnIk1IU6OF1kxI4y3h8zHR8%2B3vWXs%2FjrGVGbUNFHnR0MJ9oNOaHWbnBqjT8OLrY%2FWr8TMgGBWOtKgXZUcwPq5kTRhVmSdfBOVDb1oTTv970VFRrEuedru1AMITHTaYecM2NvJwj7pwFs4DIs61qEOavq9e%2FqvhnrSbln3bGU2cw5gstoxK9YMnIWAtYyxkAE3tXUrP2O0gmPw8ksethVy35LBCDsIbR2Li8%2Bbbeco44m9NqL2frEL%2BacyMmIrZbFhHQ2zwbHg73bRKXGc0WIo%2Fdnr7rZZtG7FpUdfRUIshT%2FtsweQM9jnxUJWdcLBVSgm8NtQIu0W%2Fu45GnRN8%2FIyztogzJ6zvJrhE6Ivb1sDHzG0Oby3QdjaHop0%2FsBSDaNm3qZ4kGDalSUtVLnBg7qtmGlT2sO5W20UHApm48dDHzNbMtT6aYRoNH4%2B7SxxbAGkWeJBVX9gypTF9Axq8lCmI%2FnP%2BFYW%2FTDAiCyBw%2BFb2MAiakMOTV870GOqUBK0fMt9XicgREqXddpqjdOBlftnYhprInbSTBbzpZT4tTojGz4sAbhem1eQKL%2Fcg6zLFFZoxChPQmHgso59Fturpi%2BgxRAhvHF99gnq8LNKdSM4ea9CECs%2B6OUZRerkqf%2FU85Ep1sTVKw3VT7EZuhM%2FUgQcY%2Bin13jaOnnr%2FsYHRdM5gl2XzANq%2FEqWGj7hHGqiuOJydPWdxpcyZG%2BPz26HTcmq0L&X-Amz-Signature=92dd9c98a426e8383ff3a68d9c3af5d556c20daeb74303dbe2f2db2fa9e8cc27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZAYTTS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAsZZIKlXHQMnzJnydM1yC%2Bx6CvXx1ZSNZkXwBbjJPGAiEA05rqsAGiTbEVby1Nj3oJhsd323fQcFinJltS9hdLq34q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAXgNx%2BeJ8e1X%2B3%2FRyrcA6sxhlc7YGpkTb1qx4FVJzUSw8KkgRloowNrl1sr8HLXa4TuyAnoF9sWW2wO5yeQUk0NyMzujF48hb1XbWG3L8yvK4kW5oOtmCeSgFkUFP777ELsUUHKKX5p6%2FUIgrCKqfV5%2FdEnjXAhUqnIk1IU6OF1kxI4y3h8zHR8%2B3vWXs%2FjrGVGbUNFHnR0MJ9oNOaHWbnBqjT8OLrY%2FWr8TMgGBWOtKgXZUcwPq5kTRhVmSdfBOVDb1oTTv970VFRrEuedru1AMITHTaYecM2NvJwj7pwFs4DIs61qEOavq9e%2FqvhnrSbln3bGU2cw5gstoxK9YMnIWAtYyxkAE3tXUrP2O0gmPw8ksethVy35LBCDsIbR2Li8%2Bbbeco44m9NqL2frEL%2BacyMmIrZbFhHQ2zwbHg73bRKXGc0WIo%2Fdnr7rZZtG7FpUdfRUIshT%2FtsweQM9jnxUJWdcLBVSgm8NtQIu0W%2Fu45GnRN8%2FIyztogzJ6zvJrhE6Ivb1sDHzG0Oby3QdjaHop0%2FsBSDaNm3qZ4kGDalSUtVLnBg7qtmGlT2sO5W20UHApm48dDHzNbMtT6aYRoNH4%2B7SxxbAGkWeJBVX9gypTF9Axq8lCmI%2FnP%2BFYW%2FTDAiCyBw%2BFb2MAiakMOTV870GOqUBK0fMt9XicgREqXddpqjdOBlftnYhprInbSTBbzpZT4tTojGz4sAbhem1eQKL%2Fcg6zLFFZoxChPQmHgso59Fturpi%2BgxRAhvHF99gnq8LNKdSM4ea9CECs%2B6OUZRerkqf%2FU85Ep1sTVKw3VT7EZuhM%2FUgQcY%2Bin13jaOnnr%2FsYHRdM5gl2XzANq%2FEqWGj7hHGqiuOJydPWdxpcyZG%2BPz26HTcmq0L&X-Amz-Signature=b9ef27435667e99fdca7484fa03eb1f733cc4de1e9558c6a16e9f2548e57dc91&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
