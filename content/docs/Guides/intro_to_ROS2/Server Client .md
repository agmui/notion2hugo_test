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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY77ST7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaepHwTHxh%2BmGy31IrTJCzSr93DdUhTUnFQBa%2F1YMM8wIhALdoLbtKOtidZaETi4wyi6bfkZT9ylGSZTcmzmdTfgz1Kv8DCBUQABoMNjM3NDIzMTgzODA1Igxuw5EosEOzJBeiVXYq3APeUJQXVXMm4P06mj9XcFg8CR498Ojp%2BNz7SBdZyEfRzc1ac3RO1dI9wOc%2BxubMA3GvDh6bS6gU9i%2FKa2AdhZ7HtnnT95PrqduE08EXbdTKoSSLWFuJHtezfxxM3T05M02zu7dd7KFUx1zNdGJp8Mv1UeNCgr2WN4SIRq8%2BVQtNxqhFlT9jY7rLPrkNyWVxWsKNV225oLZ3dcCTOdDlcAxACBZ%2BDoevfkFAWQiA27cQLFacijL%2FdMi38KBrXIGQZnW3MYS4JCSyoywq05xSXf3cJ03jeOChjGF72Shfh8XVYzWeMquUmXZfCF7sQM08cSY0B7a5TjOEPpV9z7P3899uAm2yttCHycqnMjcMKOzUml1P%2BydcovUBU411x7th%2FKD4iFaC35xX7HvCXswI7tdWYNi7CLVWMFJWwdDpIcA0lWVMt3Ini6Y7UMXZqmdoF4SqyHAkSjVH0ykzS%2BNFys0QtD%2Bfi5K8RZEGXrRc%2B7jUGFGuqSdbQsJRE6S3QoxaLsVt0dz3XCTAcaY76YKkHMaLpzoPvt03xuaOybtRwPTYhTbjEXy32S864RXZy97ctsuso17kf%2FSTdoEzAeO23am83sLNqKavKjcCbunYTtofvtmdD3mhDnK5FyActzDD0NW%2BBjqkAX46OrGt37bGGYxCwuJn55b%2Br5AHfjPFgVo4ynLD8xIk23RvUn9z8rQ%2BwAJISfb2arbeNNO8UnCbtsr3WRwWWHm%2B0iUsrksgaNqArBLgrQuyhD9ojqqWhqltpOK1FpuEDwq3JVPfVFSi0oyY0jd%2FLI4hBNjTHGmWzTnULu7r%2BCN9sPGQy3Unzu1LxdC3LDTU7cuDs%2F6cPi32v7w%2BnOrrXnAa54ZO&X-Amz-Signature=7749208be10ca35b89880216793930e4fbb32179aa7e7a41b94c93628d481575&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY77ST7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaepHwTHxh%2BmGy31IrTJCzSr93DdUhTUnFQBa%2F1YMM8wIhALdoLbtKOtidZaETi4wyi6bfkZT9ylGSZTcmzmdTfgz1Kv8DCBUQABoMNjM3NDIzMTgzODA1Igxuw5EosEOzJBeiVXYq3APeUJQXVXMm4P06mj9XcFg8CR498Ojp%2BNz7SBdZyEfRzc1ac3RO1dI9wOc%2BxubMA3GvDh6bS6gU9i%2FKa2AdhZ7HtnnT95PrqduE08EXbdTKoSSLWFuJHtezfxxM3T05M02zu7dd7KFUx1zNdGJp8Mv1UeNCgr2WN4SIRq8%2BVQtNxqhFlT9jY7rLPrkNyWVxWsKNV225oLZ3dcCTOdDlcAxACBZ%2BDoevfkFAWQiA27cQLFacijL%2FdMi38KBrXIGQZnW3MYS4JCSyoywq05xSXf3cJ03jeOChjGF72Shfh8XVYzWeMquUmXZfCF7sQM08cSY0B7a5TjOEPpV9z7P3899uAm2yttCHycqnMjcMKOzUml1P%2BydcovUBU411x7th%2FKD4iFaC35xX7HvCXswI7tdWYNi7CLVWMFJWwdDpIcA0lWVMt3Ini6Y7UMXZqmdoF4SqyHAkSjVH0ykzS%2BNFys0QtD%2Bfi5K8RZEGXrRc%2B7jUGFGuqSdbQsJRE6S3QoxaLsVt0dz3XCTAcaY76YKkHMaLpzoPvt03xuaOybtRwPTYhTbjEXy32S864RXZy97ctsuso17kf%2FSTdoEzAeO23am83sLNqKavKjcCbunYTtofvtmdD3mhDnK5FyActzDD0NW%2BBjqkAX46OrGt37bGGYxCwuJn55b%2Br5AHfjPFgVo4ynLD8xIk23RvUn9z8rQ%2BwAJISfb2arbeNNO8UnCbtsr3WRwWWHm%2B0iUsrksgaNqArBLgrQuyhD9ojqqWhqltpOK1FpuEDwq3JVPfVFSi0oyY0jd%2FLI4hBNjTHGmWzTnULu7r%2BCN9sPGQy3Unzu1LxdC3LDTU7cuDs%2F6cPi32v7w%2BnOrrXnAa54ZO&X-Amz-Signature=1089bc6045013fe020a387d0f119cbac60353ccb865338c5d66bbc1b66ac97b5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY77ST7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaepHwTHxh%2BmGy31IrTJCzSr93DdUhTUnFQBa%2F1YMM8wIhALdoLbtKOtidZaETi4wyi6bfkZT9ylGSZTcmzmdTfgz1Kv8DCBUQABoMNjM3NDIzMTgzODA1Igxuw5EosEOzJBeiVXYq3APeUJQXVXMm4P06mj9XcFg8CR498Ojp%2BNz7SBdZyEfRzc1ac3RO1dI9wOc%2BxubMA3GvDh6bS6gU9i%2FKa2AdhZ7HtnnT95PrqduE08EXbdTKoSSLWFuJHtezfxxM3T05M02zu7dd7KFUx1zNdGJp8Mv1UeNCgr2WN4SIRq8%2BVQtNxqhFlT9jY7rLPrkNyWVxWsKNV225oLZ3dcCTOdDlcAxACBZ%2BDoevfkFAWQiA27cQLFacijL%2FdMi38KBrXIGQZnW3MYS4JCSyoywq05xSXf3cJ03jeOChjGF72Shfh8XVYzWeMquUmXZfCF7sQM08cSY0B7a5TjOEPpV9z7P3899uAm2yttCHycqnMjcMKOzUml1P%2BydcovUBU411x7th%2FKD4iFaC35xX7HvCXswI7tdWYNi7CLVWMFJWwdDpIcA0lWVMt3Ini6Y7UMXZqmdoF4SqyHAkSjVH0ykzS%2BNFys0QtD%2Bfi5K8RZEGXrRc%2B7jUGFGuqSdbQsJRE6S3QoxaLsVt0dz3XCTAcaY76YKkHMaLpzoPvt03xuaOybtRwPTYhTbjEXy32S864RXZy97ctsuso17kf%2FSTdoEzAeO23am83sLNqKavKjcCbunYTtofvtmdD3mhDnK5FyActzDD0NW%2BBjqkAX46OrGt37bGGYxCwuJn55b%2Br5AHfjPFgVo4ynLD8xIk23RvUn9z8rQ%2BwAJISfb2arbeNNO8UnCbtsr3WRwWWHm%2B0iUsrksgaNqArBLgrQuyhD9ojqqWhqltpOK1FpuEDwq3JVPfVFSi0oyY0jd%2FLI4hBNjTHGmWzTnULu7r%2BCN9sPGQy3Unzu1LxdC3LDTU7cuDs%2F6cPi32v7w%2BnOrrXnAa54ZO&X-Amz-Signature=5595519c346506228f6d58aaa140275255171518d2231ecb655298a79d9858fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY77ST7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaepHwTHxh%2BmGy31IrTJCzSr93DdUhTUnFQBa%2F1YMM8wIhALdoLbtKOtidZaETi4wyi6bfkZT9ylGSZTcmzmdTfgz1Kv8DCBUQABoMNjM3NDIzMTgzODA1Igxuw5EosEOzJBeiVXYq3APeUJQXVXMm4P06mj9XcFg8CR498Ojp%2BNz7SBdZyEfRzc1ac3RO1dI9wOc%2BxubMA3GvDh6bS6gU9i%2FKa2AdhZ7HtnnT95PrqduE08EXbdTKoSSLWFuJHtezfxxM3T05M02zu7dd7KFUx1zNdGJp8Mv1UeNCgr2WN4SIRq8%2BVQtNxqhFlT9jY7rLPrkNyWVxWsKNV225oLZ3dcCTOdDlcAxACBZ%2BDoevfkFAWQiA27cQLFacijL%2FdMi38KBrXIGQZnW3MYS4JCSyoywq05xSXf3cJ03jeOChjGF72Shfh8XVYzWeMquUmXZfCF7sQM08cSY0B7a5TjOEPpV9z7P3899uAm2yttCHycqnMjcMKOzUml1P%2BydcovUBU411x7th%2FKD4iFaC35xX7HvCXswI7tdWYNi7CLVWMFJWwdDpIcA0lWVMt3Ini6Y7UMXZqmdoF4SqyHAkSjVH0ykzS%2BNFys0QtD%2Bfi5K8RZEGXrRc%2B7jUGFGuqSdbQsJRE6S3QoxaLsVt0dz3XCTAcaY76YKkHMaLpzoPvt03xuaOybtRwPTYhTbjEXy32S864RXZy97ctsuso17kf%2FSTdoEzAeO23am83sLNqKavKjcCbunYTtofvtmdD3mhDnK5FyActzDD0NW%2BBjqkAX46OrGt37bGGYxCwuJn55b%2Br5AHfjPFgVo4ynLD8xIk23RvUn9z8rQ%2BwAJISfb2arbeNNO8UnCbtsr3WRwWWHm%2B0iUsrksgaNqArBLgrQuyhD9ojqqWhqltpOK1FpuEDwq3JVPfVFSi0oyY0jd%2FLI4hBNjTHGmWzTnULu7r%2BCN9sPGQy3Unzu1LxdC3LDTU7cuDs%2F6cPi32v7w%2BnOrrXnAa54ZO&X-Amz-Signature=4d5baa9a5f456068a2c9c70c7fa1b71ffeee6ff3fb66f02053e8812d3279edc0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRY77ST7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaepHwTHxh%2BmGy31IrTJCzSr93DdUhTUnFQBa%2F1YMM8wIhALdoLbtKOtidZaETi4wyi6bfkZT9ylGSZTcmzmdTfgz1Kv8DCBUQABoMNjM3NDIzMTgzODA1Igxuw5EosEOzJBeiVXYq3APeUJQXVXMm4P06mj9XcFg8CR498Ojp%2BNz7SBdZyEfRzc1ac3RO1dI9wOc%2BxubMA3GvDh6bS6gU9i%2FKa2AdhZ7HtnnT95PrqduE08EXbdTKoSSLWFuJHtezfxxM3T05M02zu7dd7KFUx1zNdGJp8Mv1UeNCgr2WN4SIRq8%2BVQtNxqhFlT9jY7rLPrkNyWVxWsKNV225oLZ3dcCTOdDlcAxACBZ%2BDoevfkFAWQiA27cQLFacijL%2FdMi38KBrXIGQZnW3MYS4JCSyoywq05xSXf3cJ03jeOChjGF72Shfh8XVYzWeMquUmXZfCF7sQM08cSY0B7a5TjOEPpV9z7P3899uAm2yttCHycqnMjcMKOzUml1P%2BydcovUBU411x7th%2FKD4iFaC35xX7HvCXswI7tdWYNi7CLVWMFJWwdDpIcA0lWVMt3Ini6Y7UMXZqmdoF4SqyHAkSjVH0ykzS%2BNFys0QtD%2Bfi5K8RZEGXrRc%2B7jUGFGuqSdbQsJRE6S3QoxaLsVt0dz3XCTAcaY76YKkHMaLpzoPvt03xuaOybtRwPTYhTbjEXy32S864RXZy97ctsuso17kf%2FSTdoEzAeO23am83sLNqKavKjcCbunYTtofvtmdD3mhDnK5FyActzDD0NW%2BBjqkAX46OrGt37bGGYxCwuJn55b%2Br5AHfjPFgVo4ynLD8xIk23RvUn9z8rQ%2BwAJISfb2arbeNNO8UnCbtsr3WRwWWHm%2B0iUsrksgaNqArBLgrQuyhD9ojqqWhqltpOK1FpuEDwq3JVPfVFSi0oyY0jd%2FLI4hBNjTHGmWzTnULu7r%2BCN9sPGQy3Unzu1LxdC3LDTU7cuDs%2F6cPi32v7w%2BnOrrXnAa54ZO&X-Amz-Signature=54e5622199a78b1f336033166edad6fe5850cc79f07bb86a0b4cef3e1e3369c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
