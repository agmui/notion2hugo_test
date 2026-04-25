---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFHQJUMB%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbc7FUluij8fpx%2BQKYtNCQR7uxVEczowD%2BrjGN6Jrc0AIgUZ8CTB2YC8ekVlJPi53WJkVygVBig0s4Li%2FsmfmDhugqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfzBWMULTh3XVzpTyrcA8TtTd%2Fzz63ERWINcYNHQKDdQAMjKHcUp%2BtGR6Q3KpoF5KCIKZdOscfRTrpdT4xjxazrri1jCtFAmg78uOOnWkEyMPIMIxSaE9aIZlSl%2FROQtmpb9nfcEf07jQHkPVTOlPouwXTTwAiZ0175EOwP2BGC5OQdA%2FkQc4Zlsrova3citEt2SH8mdrEqEDww64q8GpfHizMHgTSsbuy5JPRU8I%2FSQNVgzsik%2F3WDhy1zdJXD3DVs4R4DCGGC0MI5o51Kh%2BXvxvFvAXV9KdQWUCJl8ZiJR2UAq4WzMoFWnipPOJ%2BALsni%2Fk2I8P5M7JygXIaqDe6YM1tOqOpGok2WulO2vfuvwrZDfcnEDCxxbMFIzZQSUdRAUq55VSCaNXBeP7YkD5SLhWvfJd9AMGy06r5ck5C01i2ekVpGpos44Vo9I2Tjy3r4ccUy78wGavxJq5zM8osFQf%2FYUtYEYw08kZLmtL9j24jDHHSX3Dr3WlSq7pxUAZtCPQMTLdKt1YHeHjDSkI2AppA1mebbIwOzKdmBD4PIvHFsyfrRZ11Woz9xSjlKqLcEhTKxdiJga5TukGaYk7mrfurGTlMFQgzkG9%2Fyxpj2jxM4wYfO0Xrs8Zq4ki%2F7jPA9AvCtrJLfVOr7MOK5sM8GOqUBp2UXNuVnAn%2FAojNyq%2Fn8%2Fq0HY4nn9klbtiosJLtCrWWgZUjyW7gM4kgFsVnybn5TsZMf%2Bz%2FyfiZSPDC5UNRbzHN4yrbdDH39XWq2p5dfrsQ4URGUIs8gncPZWc7m5%2BJ7XEpaDyN%2BkSXh%2BOns4YKT7y5SbNjT8edJq6uG68JkEMr%2BN2acT%2BsCvBpBzL66%2F%2BLs7YFKsyw%2BWGbyJKy7sqGR%2BTN0AxBf&X-Amz-Signature=2e98d171adf01e22c28a61125655c8f341595b5e3caa2190ba69b92b1369852e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFHQJUMB%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbc7FUluij8fpx%2BQKYtNCQR7uxVEczowD%2BrjGN6Jrc0AIgUZ8CTB2YC8ekVlJPi53WJkVygVBig0s4Li%2FsmfmDhugqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfzBWMULTh3XVzpTyrcA8TtTd%2Fzz63ERWINcYNHQKDdQAMjKHcUp%2BtGR6Q3KpoF5KCIKZdOscfRTrpdT4xjxazrri1jCtFAmg78uOOnWkEyMPIMIxSaE9aIZlSl%2FROQtmpb9nfcEf07jQHkPVTOlPouwXTTwAiZ0175EOwP2BGC5OQdA%2FkQc4Zlsrova3citEt2SH8mdrEqEDww64q8GpfHizMHgTSsbuy5JPRU8I%2FSQNVgzsik%2F3WDhy1zdJXD3DVs4R4DCGGC0MI5o51Kh%2BXvxvFvAXV9KdQWUCJl8ZiJR2UAq4WzMoFWnipPOJ%2BALsni%2Fk2I8P5M7JygXIaqDe6YM1tOqOpGok2WulO2vfuvwrZDfcnEDCxxbMFIzZQSUdRAUq55VSCaNXBeP7YkD5SLhWvfJd9AMGy06r5ck5C01i2ekVpGpos44Vo9I2Tjy3r4ccUy78wGavxJq5zM8osFQf%2FYUtYEYw08kZLmtL9j24jDHHSX3Dr3WlSq7pxUAZtCPQMTLdKt1YHeHjDSkI2AppA1mebbIwOzKdmBD4PIvHFsyfrRZ11Woz9xSjlKqLcEhTKxdiJga5TukGaYk7mrfurGTlMFQgzkG9%2Fyxpj2jxM4wYfO0Xrs8Zq4ki%2F7jPA9AvCtrJLfVOr7MOK5sM8GOqUBp2UXNuVnAn%2FAojNyq%2Fn8%2Fq0HY4nn9klbtiosJLtCrWWgZUjyW7gM4kgFsVnybn5TsZMf%2Bz%2FyfiZSPDC5UNRbzHN4yrbdDH39XWq2p5dfrsQ4URGUIs8gncPZWc7m5%2BJ7XEpaDyN%2BkSXh%2BOns4YKT7y5SbNjT8edJq6uG68JkEMr%2BN2acT%2BsCvBpBzL66%2F%2BLs7YFKsyw%2BWGbyJKy7sqGR%2BTN0AxBf&X-Amz-Signature=82a88293fd83b53e4e2af15089d112002b6f419f054b93707377ebe59c902d1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFHQJUMB%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbc7FUluij8fpx%2BQKYtNCQR7uxVEczowD%2BrjGN6Jrc0AIgUZ8CTB2YC8ekVlJPi53WJkVygVBig0s4Li%2FsmfmDhugqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfzBWMULTh3XVzpTyrcA8TtTd%2Fzz63ERWINcYNHQKDdQAMjKHcUp%2BtGR6Q3KpoF5KCIKZdOscfRTrpdT4xjxazrri1jCtFAmg78uOOnWkEyMPIMIxSaE9aIZlSl%2FROQtmpb9nfcEf07jQHkPVTOlPouwXTTwAiZ0175EOwP2BGC5OQdA%2FkQc4Zlsrova3citEt2SH8mdrEqEDww64q8GpfHizMHgTSsbuy5JPRU8I%2FSQNVgzsik%2F3WDhy1zdJXD3DVs4R4DCGGC0MI5o51Kh%2BXvxvFvAXV9KdQWUCJl8ZiJR2UAq4WzMoFWnipPOJ%2BALsni%2Fk2I8P5M7JygXIaqDe6YM1tOqOpGok2WulO2vfuvwrZDfcnEDCxxbMFIzZQSUdRAUq55VSCaNXBeP7YkD5SLhWvfJd9AMGy06r5ck5C01i2ekVpGpos44Vo9I2Tjy3r4ccUy78wGavxJq5zM8osFQf%2FYUtYEYw08kZLmtL9j24jDHHSX3Dr3WlSq7pxUAZtCPQMTLdKt1YHeHjDSkI2AppA1mebbIwOzKdmBD4PIvHFsyfrRZ11Woz9xSjlKqLcEhTKxdiJga5TukGaYk7mrfurGTlMFQgzkG9%2Fyxpj2jxM4wYfO0Xrs8Zq4ki%2F7jPA9AvCtrJLfVOr7MOK5sM8GOqUBp2UXNuVnAn%2FAojNyq%2Fn8%2Fq0HY4nn9klbtiosJLtCrWWgZUjyW7gM4kgFsVnybn5TsZMf%2Bz%2FyfiZSPDC5UNRbzHN4yrbdDH39XWq2p5dfrsQ4URGUIs8gncPZWc7m5%2BJ7XEpaDyN%2BkSXh%2BOns4YKT7y5SbNjT8edJq6uG68JkEMr%2BN2acT%2BsCvBpBzL66%2F%2BLs7YFKsyw%2BWGbyJKy7sqGR%2BTN0AxBf&X-Amz-Signature=11059b281603a0aea156e4fe0ba50e50beb4483165c65c3015234ea66e804a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFHQJUMB%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbc7FUluij8fpx%2BQKYtNCQR7uxVEczowD%2BrjGN6Jrc0AIgUZ8CTB2YC8ekVlJPi53WJkVygVBig0s4Li%2FsmfmDhugqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfzBWMULTh3XVzpTyrcA8TtTd%2Fzz63ERWINcYNHQKDdQAMjKHcUp%2BtGR6Q3KpoF5KCIKZdOscfRTrpdT4xjxazrri1jCtFAmg78uOOnWkEyMPIMIxSaE9aIZlSl%2FROQtmpb9nfcEf07jQHkPVTOlPouwXTTwAiZ0175EOwP2BGC5OQdA%2FkQc4Zlsrova3citEt2SH8mdrEqEDww64q8GpfHizMHgTSsbuy5JPRU8I%2FSQNVgzsik%2F3WDhy1zdJXD3DVs4R4DCGGC0MI5o51Kh%2BXvxvFvAXV9KdQWUCJl8ZiJR2UAq4WzMoFWnipPOJ%2BALsni%2Fk2I8P5M7JygXIaqDe6YM1tOqOpGok2WulO2vfuvwrZDfcnEDCxxbMFIzZQSUdRAUq55VSCaNXBeP7YkD5SLhWvfJd9AMGy06r5ck5C01i2ekVpGpos44Vo9I2Tjy3r4ccUy78wGavxJq5zM8osFQf%2FYUtYEYw08kZLmtL9j24jDHHSX3Dr3WlSq7pxUAZtCPQMTLdKt1YHeHjDSkI2AppA1mebbIwOzKdmBD4PIvHFsyfrRZ11Woz9xSjlKqLcEhTKxdiJga5TukGaYk7mrfurGTlMFQgzkG9%2Fyxpj2jxM4wYfO0Xrs8Zq4ki%2F7jPA9AvCtrJLfVOr7MOK5sM8GOqUBp2UXNuVnAn%2FAojNyq%2Fn8%2Fq0HY4nn9klbtiosJLtCrWWgZUjyW7gM4kgFsVnybn5TsZMf%2Bz%2FyfiZSPDC5UNRbzHN4yrbdDH39XWq2p5dfrsQ4URGUIs8gncPZWc7m5%2BJ7XEpaDyN%2BkSXh%2BOns4YKT7y5SbNjT8edJq6uG68JkEMr%2BN2acT%2BsCvBpBzL66%2F%2BLs7YFKsyw%2BWGbyJKy7sqGR%2BTN0AxBf&X-Amz-Signature=c3a77283f0206e37409ad06eaa534d2e46080fa8193708ead1635289881e3d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFHQJUMB%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbc7FUluij8fpx%2BQKYtNCQR7uxVEczowD%2BrjGN6Jrc0AIgUZ8CTB2YC8ekVlJPi53WJkVygVBig0s4Li%2FsmfmDhugqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfzBWMULTh3XVzpTyrcA8TtTd%2Fzz63ERWINcYNHQKDdQAMjKHcUp%2BtGR6Q3KpoF5KCIKZdOscfRTrpdT4xjxazrri1jCtFAmg78uOOnWkEyMPIMIxSaE9aIZlSl%2FROQtmpb9nfcEf07jQHkPVTOlPouwXTTwAiZ0175EOwP2BGC5OQdA%2FkQc4Zlsrova3citEt2SH8mdrEqEDww64q8GpfHizMHgTSsbuy5JPRU8I%2FSQNVgzsik%2F3WDhy1zdJXD3DVs4R4DCGGC0MI5o51Kh%2BXvxvFvAXV9KdQWUCJl8ZiJR2UAq4WzMoFWnipPOJ%2BALsni%2Fk2I8P5M7JygXIaqDe6YM1tOqOpGok2WulO2vfuvwrZDfcnEDCxxbMFIzZQSUdRAUq55VSCaNXBeP7YkD5SLhWvfJd9AMGy06r5ck5C01i2ekVpGpos44Vo9I2Tjy3r4ccUy78wGavxJq5zM8osFQf%2FYUtYEYw08kZLmtL9j24jDHHSX3Dr3WlSq7pxUAZtCPQMTLdKt1YHeHjDSkI2AppA1mebbIwOzKdmBD4PIvHFsyfrRZ11Woz9xSjlKqLcEhTKxdiJga5TukGaYk7mrfurGTlMFQgzkG9%2Fyxpj2jxM4wYfO0Xrs8Zq4ki%2F7jPA9AvCtrJLfVOr7MOK5sM8GOqUBp2UXNuVnAn%2FAojNyq%2Fn8%2Fq0HY4nn9klbtiosJLtCrWWgZUjyW7gM4kgFsVnybn5TsZMf%2Bz%2FyfiZSPDC5UNRbzHN4yrbdDH39XWq2p5dfrsQ4URGUIs8gncPZWc7m5%2BJ7XEpaDyN%2BkSXh%2BOns4YKT7y5SbNjT8edJq6uG68JkEMr%2BN2acT%2BsCvBpBzL66%2F%2BLs7YFKsyw%2BWGbyJKy7sqGR%2BTN0AxBf&X-Amz-Signature=32d40680245e2995594ee5cc4e54417f8a57f4c8cad312c31bbfadbe0980d269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
