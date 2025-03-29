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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KOANDBB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHbVRjehURfr63h%2Bp%2Bc1kPTF4hipF4aTGtJQb8Z4uB%2B5AiEAnsLwB4jfRJXNIYLzFsspADFj%2Fw715VrEUIEa5jz5OJAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJleIvInRvBnXJH8ICrcAwZfqEH9XjfcQLz%2BEN0i1%2FbW0ejHpWtmJJ50o8ZGhhmq75MhjCd2Emu%2FbifHDbgd1FgknHyQybu2qL8UvZXF%2FicNCn7RmAjpL84OtKK52SS6awEoNWZ6X5o%2BGsUGJIGu8LyumVj2Lutov4JEY1DZl09T4v7V%2Brs5Jt2QYM4cgFfsdXMVKL7MPlivO8T4ost3c4OcWoQrAvqd6V3pyB3qxITg5wnxfol4bI9A1JAsfBYRkVGnes0sxsIsiBGpI3F9wtBtMAo245mjBL8rE3sMOypMYlH3U3lXIIUO22RYEp5RgNWsn%2BEeD31vv3SLcBDJ2TXfEqfE0mCwvHI%2FrFwYf%2FGbxXz5JfJNQoIe2NoyWxDXIOa%2FiGDZJn2FlkdNX7IynKPOQskH8mSnCV%2BqtwnkBJfMB1mNFAoSBZSxdb0QOwFj9HOpGlH%2Fz2JEbdkaP95HHfvdKKOLr%2BJeX0QPwGB28sYWfXm5i1YmcRrF2UhBzL9s0d2eiUk2lm7qIimldVuIKu5ddaAFWUxMTZ59ujdszXD0M0ga%2BvwSbPiUeX0y3mDlZQKahRSWR5zNMbKBfTxl8rkNcp%2BHBw5ppui5Z6kpzCvPehHHMQ4GUdxdaEOPVsyPTlI9qbII7i3l53ByML6foL8GOqUBYeYzO3iC75OCzVs7%2B7Sui57ZPZR5%2BuEMEkeePGWt%2BA9fF7lUIo9rj6k1UyomfJ655zJ0fOKlUUk4dBOWtbaOBZATRrg57%2FWqHcl4sxMa67MfhU83Bf4aJoP7wHqpuGtV3HZ%2FkthfprKtp7iIvL%2BkUwQwmg4MFrWy6ro%2BwuHg8fOp%2Bqs%2BA83p9Xarq%2FNNGu1ovK3b8MeSl33d8b%2FtDXz4SB%2BkO7W2&X-Amz-Signature=42282301ed3a43d3c1c1b50d759961c0688539fd82d5c56abcd53cf053c53739&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KOANDBB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHbVRjehURfr63h%2Bp%2Bc1kPTF4hipF4aTGtJQb8Z4uB%2B5AiEAnsLwB4jfRJXNIYLzFsspADFj%2Fw715VrEUIEa5jz5OJAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJleIvInRvBnXJH8ICrcAwZfqEH9XjfcQLz%2BEN0i1%2FbW0ejHpWtmJJ50o8ZGhhmq75MhjCd2Emu%2FbifHDbgd1FgknHyQybu2qL8UvZXF%2FicNCn7RmAjpL84OtKK52SS6awEoNWZ6X5o%2BGsUGJIGu8LyumVj2Lutov4JEY1DZl09T4v7V%2Brs5Jt2QYM4cgFfsdXMVKL7MPlivO8T4ost3c4OcWoQrAvqd6V3pyB3qxITg5wnxfol4bI9A1JAsfBYRkVGnes0sxsIsiBGpI3F9wtBtMAo245mjBL8rE3sMOypMYlH3U3lXIIUO22RYEp5RgNWsn%2BEeD31vv3SLcBDJ2TXfEqfE0mCwvHI%2FrFwYf%2FGbxXz5JfJNQoIe2NoyWxDXIOa%2FiGDZJn2FlkdNX7IynKPOQskH8mSnCV%2BqtwnkBJfMB1mNFAoSBZSxdb0QOwFj9HOpGlH%2Fz2JEbdkaP95HHfvdKKOLr%2BJeX0QPwGB28sYWfXm5i1YmcRrF2UhBzL9s0d2eiUk2lm7qIimldVuIKu5ddaAFWUxMTZ59ujdszXD0M0ga%2BvwSbPiUeX0y3mDlZQKahRSWR5zNMbKBfTxl8rkNcp%2BHBw5ppui5Z6kpzCvPehHHMQ4GUdxdaEOPVsyPTlI9qbII7i3l53ByML6foL8GOqUBYeYzO3iC75OCzVs7%2B7Sui57ZPZR5%2BuEMEkeePGWt%2BA9fF7lUIo9rj6k1UyomfJ655zJ0fOKlUUk4dBOWtbaOBZATRrg57%2FWqHcl4sxMa67MfhU83Bf4aJoP7wHqpuGtV3HZ%2FkthfprKtp7iIvL%2BkUwQwmg4MFrWy6ro%2BwuHg8fOp%2Bqs%2BA83p9Xarq%2FNNGu1ovK3b8MeSl33d8b%2FtDXz4SB%2BkO7W2&X-Amz-Signature=a76e05f1e04a653c35a482202ec29bec6d6c392cab3266930100ef9e63641746&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KOANDBB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHbVRjehURfr63h%2Bp%2Bc1kPTF4hipF4aTGtJQb8Z4uB%2B5AiEAnsLwB4jfRJXNIYLzFsspADFj%2Fw715VrEUIEa5jz5OJAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJleIvInRvBnXJH8ICrcAwZfqEH9XjfcQLz%2BEN0i1%2FbW0ejHpWtmJJ50o8ZGhhmq75MhjCd2Emu%2FbifHDbgd1FgknHyQybu2qL8UvZXF%2FicNCn7RmAjpL84OtKK52SS6awEoNWZ6X5o%2BGsUGJIGu8LyumVj2Lutov4JEY1DZl09T4v7V%2Brs5Jt2QYM4cgFfsdXMVKL7MPlivO8T4ost3c4OcWoQrAvqd6V3pyB3qxITg5wnxfol4bI9A1JAsfBYRkVGnes0sxsIsiBGpI3F9wtBtMAo245mjBL8rE3sMOypMYlH3U3lXIIUO22RYEp5RgNWsn%2BEeD31vv3SLcBDJ2TXfEqfE0mCwvHI%2FrFwYf%2FGbxXz5JfJNQoIe2NoyWxDXIOa%2FiGDZJn2FlkdNX7IynKPOQskH8mSnCV%2BqtwnkBJfMB1mNFAoSBZSxdb0QOwFj9HOpGlH%2Fz2JEbdkaP95HHfvdKKOLr%2BJeX0QPwGB28sYWfXm5i1YmcRrF2UhBzL9s0d2eiUk2lm7qIimldVuIKu5ddaAFWUxMTZ59ujdszXD0M0ga%2BvwSbPiUeX0y3mDlZQKahRSWR5zNMbKBfTxl8rkNcp%2BHBw5ppui5Z6kpzCvPehHHMQ4GUdxdaEOPVsyPTlI9qbII7i3l53ByML6foL8GOqUBYeYzO3iC75OCzVs7%2B7Sui57ZPZR5%2BuEMEkeePGWt%2BA9fF7lUIo9rj6k1UyomfJ655zJ0fOKlUUk4dBOWtbaOBZATRrg57%2FWqHcl4sxMa67MfhU83Bf4aJoP7wHqpuGtV3HZ%2FkthfprKtp7iIvL%2BkUwQwmg4MFrWy6ro%2BwuHg8fOp%2Bqs%2BA83p9Xarq%2FNNGu1ovK3b8MeSl33d8b%2FtDXz4SB%2BkO7W2&X-Amz-Signature=25df5db87fee7eacbd24a60ce77ea3adf1b177b952d4a8bd422a2cebc297dfd8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KOANDBB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHbVRjehURfr63h%2Bp%2Bc1kPTF4hipF4aTGtJQb8Z4uB%2B5AiEAnsLwB4jfRJXNIYLzFsspADFj%2Fw715VrEUIEa5jz5OJAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJleIvInRvBnXJH8ICrcAwZfqEH9XjfcQLz%2BEN0i1%2FbW0ejHpWtmJJ50o8ZGhhmq75MhjCd2Emu%2FbifHDbgd1FgknHyQybu2qL8UvZXF%2FicNCn7RmAjpL84OtKK52SS6awEoNWZ6X5o%2BGsUGJIGu8LyumVj2Lutov4JEY1DZl09T4v7V%2Brs5Jt2QYM4cgFfsdXMVKL7MPlivO8T4ost3c4OcWoQrAvqd6V3pyB3qxITg5wnxfol4bI9A1JAsfBYRkVGnes0sxsIsiBGpI3F9wtBtMAo245mjBL8rE3sMOypMYlH3U3lXIIUO22RYEp5RgNWsn%2BEeD31vv3SLcBDJ2TXfEqfE0mCwvHI%2FrFwYf%2FGbxXz5JfJNQoIe2NoyWxDXIOa%2FiGDZJn2FlkdNX7IynKPOQskH8mSnCV%2BqtwnkBJfMB1mNFAoSBZSxdb0QOwFj9HOpGlH%2Fz2JEbdkaP95HHfvdKKOLr%2BJeX0QPwGB28sYWfXm5i1YmcRrF2UhBzL9s0d2eiUk2lm7qIimldVuIKu5ddaAFWUxMTZ59ujdszXD0M0ga%2BvwSbPiUeX0y3mDlZQKahRSWR5zNMbKBfTxl8rkNcp%2BHBw5ppui5Z6kpzCvPehHHMQ4GUdxdaEOPVsyPTlI9qbII7i3l53ByML6foL8GOqUBYeYzO3iC75OCzVs7%2B7Sui57ZPZR5%2BuEMEkeePGWt%2BA9fF7lUIo9rj6k1UyomfJ655zJ0fOKlUUk4dBOWtbaOBZATRrg57%2FWqHcl4sxMa67MfhU83Bf4aJoP7wHqpuGtV3HZ%2FkthfprKtp7iIvL%2BkUwQwmg4MFrWy6ro%2BwuHg8fOp%2Bqs%2BA83p9Xarq%2FNNGu1ovK3b8MeSl33d8b%2FtDXz4SB%2BkO7W2&X-Amz-Signature=471e9dfe552e8f69264c78b2267cc745b439b42c7fde618b8f1f76ce7d5a0454&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KOANDBB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHbVRjehURfr63h%2Bp%2Bc1kPTF4hipF4aTGtJQb8Z4uB%2B5AiEAnsLwB4jfRJXNIYLzFsspADFj%2Fw715VrEUIEa5jz5OJAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJleIvInRvBnXJH8ICrcAwZfqEH9XjfcQLz%2BEN0i1%2FbW0ejHpWtmJJ50o8ZGhhmq75MhjCd2Emu%2FbifHDbgd1FgknHyQybu2qL8UvZXF%2FicNCn7RmAjpL84OtKK52SS6awEoNWZ6X5o%2BGsUGJIGu8LyumVj2Lutov4JEY1DZl09T4v7V%2Brs5Jt2QYM4cgFfsdXMVKL7MPlivO8T4ost3c4OcWoQrAvqd6V3pyB3qxITg5wnxfol4bI9A1JAsfBYRkVGnes0sxsIsiBGpI3F9wtBtMAo245mjBL8rE3sMOypMYlH3U3lXIIUO22RYEp5RgNWsn%2BEeD31vv3SLcBDJ2TXfEqfE0mCwvHI%2FrFwYf%2FGbxXz5JfJNQoIe2NoyWxDXIOa%2FiGDZJn2FlkdNX7IynKPOQskH8mSnCV%2BqtwnkBJfMB1mNFAoSBZSxdb0QOwFj9HOpGlH%2Fz2JEbdkaP95HHfvdKKOLr%2BJeX0QPwGB28sYWfXm5i1YmcRrF2UhBzL9s0d2eiUk2lm7qIimldVuIKu5ddaAFWUxMTZ59ujdszXD0M0ga%2BvwSbPiUeX0y3mDlZQKahRSWR5zNMbKBfTxl8rkNcp%2BHBw5ppui5Z6kpzCvPehHHMQ4GUdxdaEOPVsyPTlI9qbII7i3l53ByML6foL8GOqUBYeYzO3iC75OCzVs7%2B7Sui57ZPZR5%2BuEMEkeePGWt%2BA9fF7lUIo9rj6k1UyomfJ655zJ0fOKlUUk4dBOWtbaOBZATRrg57%2FWqHcl4sxMa67MfhU83Bf4aJoP7wHqpuGtV3HZ%2FkthfprKtp7iIvL%2BkUwQwmg4MFrWy6ro%2BwuHg8fOp%2Bqs%2BA83p9Xarq%2FNNGu1ovK3b8MeSl33d8b%2FtDXz4SB%2BkO7W2&X-Amz-Signature=9e61ec8a67cc597f43ec38a25bf0fddbe4e4a3f508b0eefdcdf8f1680da48888&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
