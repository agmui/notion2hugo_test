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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYZSGL3K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIG%2F0XyN3DZL5jTtWQg3C8dJ%2FEnC2mPLZMrmc37fNJU1xAiEAhLwsyO56g9yYoKw9X3GINcG8rpAiDN7qC6cGgbhDWS0q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIElLknwgWJsuzjeCyrcA4bePWECWzVhuOeeXFi%2F%2FG3ELoZNrIRCMD5MFeGqQPcS%2BaPR0LTj15Ks7lV3zKJEYDc0NfujR2IYW26U09SgepgiPxn1iiG0GkrXOUBQt0QTSRCWpdOGvnhuD8QL2F%2FBvx8VITFtEjo97Lyk9VjixoPWN81JGd6CEAY6jd7jYM1flLkSV%2B903tYMtIBu1s%2FncJov9yxH48%2FOp%2BsHxADLe8u2Gpf7x6cEXoD%2Fgmh2Mm2qpKeHbDOYCaIoiU%2F2SUiEI0WT82pbnctqL4aC9xKvEBwUXo2NhFdUxB7HYZsd7poI1x1MGETw6BEwh7qyVtuBSBC%2FXAu23HjB5cpJ1%2BHcRqLVVhWgtZS2U6Pnik%2Byc09uiVdIukiu7EBrJ7xFEJjRIK%2BqkdlFZVM8joZfCeaB%2FuGu3YI7%2BI0oyi0O3p6LXPwQxc0CWsBhOkngF2WPYgjfsVEH7oeZQWFuqWEok2u8LGc0o9nZiEsxnLqtR7NRE5TOB6xCvh4dv8rGm37A9sI3JydfGeEycNML7PCZmWD6aMAh9rgreXXOr7GEtrJYRY6fsjxDGbMJvFLzUrbEbVMf%2Bg5IK%2BMgAa8jVeec4Hpw6LjasCOA6PtjbxpCwnA97%2BIyfGXUO0rJ%2FAAclLsvMN%2BfqcAGOqUBG76ti7iLCoQHB4bdp13aqLgKngyB2fslStb4NqiWhYwgpFbFQpUElQkOq9M7pROs6QUhIEoN1l%2FzJorSj7WlfHSqgS7YuLIlMFbKzFzm73Sn2%2FXvUNokM17HG3RixA94fGW5NRYC9yoXmHsD1F%2F5pNRs2M4D%2FXv8lNE7Iv1pH61Ii2TK7Zx2CUYiMKmwhK4QZOZQT9ni9PJh3kVpLNWExFjNhPTN&X-Amz-Signature=a26c25f1c5591472e787a9ef669091594f2bbac50bc154c6a2c97efd2cdd61d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYZSGL3K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIG%2F0XyN3DZL5jTtWQg3C8dJ%2FEnC2mPLZMrmc37fNJU1xAiEAhLwsyO56g9yYoKw9X3GINcG8rpAiDN7qC6cGgbhDWS0q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIElLknwgWJsuzjeCyrcA4bePWECWzVhuOeeXFi%2F%2FG3ELoZNrIRCMD5MFeGqQPcS%2BaPR0LTj15Ks7lV3zKJEYDc0NfujR2IYW26U09SgepgiPxn1iiG0GkrXOUBQt0QTSRCWpdOGvnhuD8QL2F%2FBvx8VITFtEjo97Lyk9VjixoPWN81JGd6CEAY6jd7jYM1flLkSV%2B903tYMtIBu1s%2FncJov9yxH48%2FOp%2BsHxADLe8u2Gpf7x6cEXoD%2Fgmh2Mm2qpKeHbDOYCaIoiU%2F2SUiEI0WT82pbnctqL4aC9xKvEBwUXo2NhFdUxB7HYZsd7poI1x1MGETw6BEwh7qyVtuBSBC%2FXAu23HjB5cpJ1%2BHcRqLVVhWgtZS2U6Pnik%2Byc09uiVdIukiu7EBrJ7xFEJjRIK%2BqkdlFZVM8joZfCeaB%2FuGu3YI7%2BI0oyi0O3p6LXPwQxc0CWsBhOkngF2WPYgjfsVEH7oeZQWFuqWEok2u8LGc0o9nZiEsxnLqtR7NRE5TOB6xCvh4dv8rGm37A9sI3JydfGeEycNML7PCZmWD6aMAh9rgreXXOr7GEtrJYRY6fsjxDGbMJvFLzUrbEbVMf%2Bg5IK%2BMgAa8jVeec4Hpw6LjasCOA6PtjbxpCwnA97%2BIyfGXUO0rJ%2FAAclLsvMN%2BfqcAGOqUBG76ti7iLCoQHB4bdp13aqLgKngyB2fslStb4NqiWhYwgpFbFQpUElQkOq9M7pROs6QUhIEoN1l%2FzJorSj7WlfHSqgS7YuLIlMFbKzFzm73Sn2%2FXvUNokM17HG3RixA94fGW5NRYC9yoXmHsD1F%2F5pNRs2M4D%2FXv8lNE7Iv1pH61Ii2TK7Zx2CUYiMKmwhK4QZOZQT9ni9PJh3kVpLNWExFjNhPTN&X-Amz-Signature=b2c9443f838b2bf9dd3551ae662fde7d2adc461bae33b58f734ddc163473addb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYZSGL3K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIG%2F0XyN3DZL5jTtWQg3C8dJ%2FEnC2mPLZMrmc37fNJU1xAiEAhLwsyO56g9yYoKw9X3GINcG8rpAiDN7qC6cGgbhDWS0q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIElLknwgWJsuzjeCyrcA4bePWECWzVhuOeeXFi%2F%2FG3ELoZNrIRCMD5MFeGqQPcS%2BaPR0LTj15Ks7lV3zKJEYDc0NfujR2IYW26U09SgepgiPxn1iiG0GkrXOUBQt0QTSRCWpdOGvnhuD8QL2F%2FBvx8VITFtEjo97Lyk9VjixoPWN81JGd6CEAY6jd7jYM1flLkSV%2B903tYMtIBu1s%2FncJov9yxH48%2FOp%2BsHxADLe8u2Gpf7x6cEXoD%2Fgmh2Mm2qpKeHbDOYCaIoiU%2F2SUiEI0WT82pbnctqL4aC9xKvEBwUXo2NhFdUxB7HYZsd7poI1x1MGETw6BEwh7qyVtuBSBC%2FXAu23HjB5cpJ1%2BHcRqLVVhWgtZS2U6Pnik%2Byc09uiVdIukiu7EBrJ7xFEJjRIK%2BqkdlFZVM8joZfCeaB%2FuGu3YI7%2BI0oyi0O3p6LXPwQxc0CWsBhOkngF2WPYgjfsVEH7oeZQWFuqWEok2u8LGc0o9nZiEsxnLqtR7NRE5TOB6xCvh4dv8rGm37A9sI3JydfGeEycNML7PCZmWD6aMAh9rgreXXOr7GEtrJYRY6fsjxDGbMJvFLzUrbEbVMf%2Bg5IK%2BMgAa8jVeec4Hpw6LjasCOA6PtjbxpCwnA97%2BIyfGXUO0rJ%2FAAclLsvMN%2BfqcAGOqUBG76ti7iLCoQHB4bdp13aqLgKngyB2fslStb4NqiWhYwgpFbFQpUElQkOq9M7pROs6QUhIEoN1l%2FzJorSj7WlfHSqgS7YuLIlMFbKzFzm73Sn2%2FXvUNokM17HG3RixA94fGW5NRYC9yoXmHsD1F%2F5pNRs2M4D%2FXv8lNE7Iv1pH61Ii2TK7Zx2CUYiMKmwhK4QZOZQT9ni9PJh3kVpLNWExFjNhPTN&X-Amz-Signature=7370a1a146308c3980af2316bdf4e0323fd302f2b11b9958fda214aab4f07928&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYZSGL3K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIG%2F0XyN3DZL5jTtWQg3C8dJ%2FEnC2mPLZMrmc37fNJU1xAiEAhLwsyO56g9yYoKw9X3GINcG8rpAiDN7qC6cGgbhDWS0q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIElLknwgWJsuzjeCyrcA4bePWECWzVhuOeeXFi%2F%2FG3ELoZNrIRCMD5MFeGqQPcS%2BaPR0LTj15Ks7lV3zKJEYDc0NfujR2IYW26U09SgepgiPxn1iiG0GkrXOUBQt0QTSRCWpdOGvnhuD8QL2F%2FBvx8VITFtEjo97Lyk9VjixoPWN81JGd6CEAY6jd7jYM1flLkSV%2B903tYMtIBu1s%2FncJov9yxH48%2FOp%2BsHxADLe8u2Gpf7x6cEXoD%2Fgmh2Mm2qpKeHbDOYCaIoiU%2F2SUiEI0WT82pbnctqL4aC9xKvEBwUXo2NhFdUxB7HYZsd7poI1x1MGETw6BEwh7qyVtuBSBC%2FXAu23HjB5cpJ1%2BHcRqLVVhWgtZS2U6Pnik%2Byc09uiVdIukiu7EBrJ7xFEJjRIK%2BqkdlFZVM8joZfCeaB%2FuGu3YI7%2BI0oyi0O3p6LXPwQxc0CWsBhOkngF2WPYgjfsVEH7oeZQWFuqWEok2u8LGc0o9nZiEsxnLqtR7NRE5TOB6xCvh4dv8rGm37A9sI3JydfGeEycNML7PCZmWD6aMAh9rgreXXOr7GEtrJYRY6fsjxDGbMJvFLzUrbEbVMf%2Bg5IK%2BMgAa8jVeec4Hpw6LjasCOA6PtjbxpCwnA97%2BIyfGXUO0rJ%2FAAclLsvMN%2BfqcAGOqUBG76ti7iLCoQHB4bdp13aqLgKngyB2fslStb4NqiWhYwgpFbFQpUElQkOq9M7pROs6QUhIEoN1l%2FzJorSj7WlfHSqgS7YuLIlMFbKzFzm73Sn2%2FXvUNokM17HG3RixA94fGW5NRYC9yoXmHsD1F%2F5pNRs2M4D%2FXv8lNE7Iv1pH61Ii2TK7Zx2CUYiMKmwhK4QZOZQT9ni9PJh3kVpLNWExFjNhPTN&X-Amz-Signature=0550f07c60a737f30c634f550d96056312cf8716dc820276c2557032a4a9d644&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYZSGL3K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIG%2F0XyN3DZL5jTtWQg3C8dJ%2FEnC2mPLZMrmc37fNJU1xAiEAhLwsyO56g9yYoKw9X3GINcG8rpAiDN7qC6cGgbhDWS0q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIElLknwgWJsuzjeCyrcA4bePWECWzVhuOeeXFi%2F%2FG3ELoZNrIRCMD5MFeGqQPcS%2BaPR0LTj15Ks7lV3zKJEYDc0NfujR2IYW26U09SgepgiPxn1iiG0GkrXOUBQt0QTSRCWpdOGvnhuD8QL2F%2FBvx8VITFtEjo97Lyk9VjixoPWN81JGd6CEAY6jd7jYM1flLkSV%2B903tYMtIBu1s%2FncJov9yxH48%2FOp%2BsHxADLe8u2Gpf7x6cEXoD%2Fgmh2Mm2qpKeHbDOYCaIoiU%2F2SUiEI0WT82pbnctqL4aC9xKvEBwUXo2NhFdUxB7HYZsd7poI1x1MGETw6BEwh7qyVtuBSBC%2FXAu23HjB5cpJ1%2BHcRqLVVhWgtZS2U6Pnik%2Byc09uiVdIukiu7EBrJ7xFEJjRIK%2BqkdlFZVM8joZfCeaB%2FuGu3YI7%2BI0oyi0O3p6LXPwQxc0CWsBhOkngF2WPYgjfsVEH7oeZQWFuqWEok2u8LGc0o9nZiEsxnLqtR7NRE5TOB6xCvh4dv8rGm37A9sI3JydfGeEycNML7PCZmWD6aMAh9rgreXXOr7GEtrJYRY6fsjxDGbMJvFLzUrbEbVMf%2Bg5IK%2BMgAa8jVeec4Hpw6LjasCOA6PtjbxpCwnA97%2BIyfGXUO0rJ%2FAAclLsvMN%2BfqcAGOqUBG76ti7iLCoQHB4bdp13aqLgKngyB2fslStb4NqiWhYwgpFbFQpUElQkOq9M7pROs6QUhIEoN1l%2FzJorSj7WlfHSqgS7YuLIlMFbKzFzm73Sn2%2FXvUNokM17HG3RixA94fGW5NRYC9yoXmHsD1F%2F5pNRs2M4D%2FXv8lNE7Iv1pH61Ii2TK7Zx2CUYiMKmwhK4QZOZQT9ni9PJh3kVpLNWExFjNhPTN&X-Amz-Signature=c7cc0945609f463acd424978000fa9c5a3ada14123b45aa062e7c115598f16e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
