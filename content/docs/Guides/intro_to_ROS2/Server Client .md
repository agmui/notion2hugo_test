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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCUIHG7%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPKsN361KukicaL7si9Q7u5qEu3iIwhTEwH6v1Ks0gUwIgHBNWgo50Mdy%2B%2F1jXL%2FdUQ%2B8tHNjf6aYuUM7%2BjqYFttYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDL51U0xKbcqBTY20WCrcAxt817eMbP8wUOWF9Rw5ykokXfpFewfyZMGL0UmOJUIPB9E%2B%2BiWDi1v%2BcAuDHJT4fmo0H5qfgtvOkRMZhJimqLtna8Zv9VWI7qopVAc7yzsCVgDdIFZEshmrwDunQQrF3caYcfZwGZA10Y%2BA5nBUB0fP36dW4etW%2FJ%2FJ9cbub222zW%2FAR%2B7BfjWIUvg3TrIFLsGoHka44MnKpyZbk9PjJ4hm4FKJR5ycAaWJEGZkKgNZ74CY5qrZxYW1pyPNgX7jaWU1kQv93nygfNNfg2AF9cfyO7J083JSrNaWejmZY4ggBSlfSSbR7wuuid3VHDs7I33Rm0EPy28CHRto1X7POSsgnAGZ%2Bi%2FnfBmze6V16CoR10moY1J400a0e3gIBH8pI0y87evpMICGjvUMQJipFmD2gzDll0%2Fx0SOeUSlun0lTgjB52aMBedXcLZtWdzoYAN2OrvLJsstnTBLNjyBISvwd2d33kTCykRjGWJYqO0ArOgEYJbrskBSRU3DerQflM%2BbKArViNQl2lTcNhtm6HQChiuBcphQEG0HM6l2FcDXLgEO91eLSwC3Fem9sA6uEeEyPWetBmBKJdmFz1VJYuLY5aNBVyoVmA8iUEJ9%2BwYtRpZtrvDcdHek6ao3qMMHT3tMGOqUBEz%2FHZAQgw%2FIAoPsAhd59Yws%2F3btEpjYRLGjB5531onJi5tpeXooCygc2c3smNANmE2UAU8fNDZ83Lrsfdr15rghCHBjYtuedWhmlquozBIVQbczyHpp4BJ6tocMRyH7xRRIEuOUkMvC%2FqxUlKH14%2F7rrBvp%2FHCydbWFc5NWmG7ozR8YOBUueyzeAP0At6ets7W7ZiJeqOeYYr0uVTvOJu9HG5Ljm&X-Amz-Signature=51bd12316cdd81ca53168b40d2ce508f61f85313cfe0ff7cc4befd4abcc0b903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCUIHG7%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPKsN361KukicaL7si9Q7u5qEu3iIwhTEwH6v1Ks0gUwIgHBNWgo50Mdy%2B%2F1jXL%2FdUQ%2B8tHNjf6aYuUM7%2BjqYFttYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDL51U0xKbcqBTY20WCrcAxt817eMbP8wUOWF9Rw5ykokXfpFewfyZMGL0UmOJUIPB9E%2B%2BiWDi1v%2BcAuDHJT4fmo0H5qfgtvOkRMZhJimqLtna8Zv9VWI7qopVAc7yzsCVgDdIFZEshmrwDunQQrF3caYcfZwGZA10Y%2BA5nBUB0fP36dW4etW%2FJ%2FJ9cbub222zW%2FAR%2B7BfjWIUvg3TrIFLsGoHka44MnKpyZbk9PjJ4hm4FKJR5ycAaWJEGZkKgNZ74CY5qrZxYW1pyPNgX7jaWU1kQv93nygfNNfg2AF9cfyO7J083JSrNaWejmZY4ggBSlfSSbR7wuuid3VHDs7I33Rm0EPy28CHRto1X7POSsgnAGZ%2Bi%2FnfBmze6V16CoR10moY1J400a0e3gIBH8pI0y87evpMICGjvUMQJipFmD2gzDll0%2Fx0SOeUSlun0lTgjB52aMBedXcLZtWdzoYAN2OrvLJsstnTBLNjyBISvwd2d33kTCykRjGWJYqO0ArOgEYJbrskBSRU3DerQflM%2BbKArViNQl2lTcNhtm6HQChiuBcphQEG0HM6l2FcDXLgEO91eLSwC3Fem9sA6uEeEyPWetBmBKJdmFz1VJYuLY5aNBVyoVmA8iUEJ9%2BwYtRpZtrvDcdHek6ao3qMMHT3tMGOqUBEz%2FHZAQgw%2FIAoPsAhd59Yws%2F3btEpjYRLGjB5531onJi5tpeXooCygc2c3smNANmE2UAU8fNDZ83Lrsfdr15rghCHBjYtuedWhmlquozBIVQbczyHpp4BJ6tocMRyH7xRRIEuOUkMvC%2FqxUlKH14%2F7rrBvp%2FHCydbWFc5NWmG7ozR8YOBUueyzeAP0At6ets7W7ZiJeqOeYYr0uVTvOJu9HG5Ljm&X-Amz-Signature=a5d8e75449e36d35ade2dac6d3c34501934f5052146e8bc46ca9544af31cfb15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCUIHG7%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPKsN361KukicaL7si9Q7u5qEu3iIwhTEwH6v1Ks0gUwIgHBNWgo50Mdy%2B%2F1jXL%2FdUQ%2B8tHNjf6aYuUM7%2BjqYFttYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDL51U0xKbcqBTY20WCrcAxt817eMbP8wUOWF9Rw5ykokXfpFewfyZMGL0UmOJUIPB9E%2B%2BiWDi1v%2BcAuDHJT4fmo0H5qfgtvOkRMZhJimqLtna8Zv9VWI7qopVAc7yzsCVgDdIFZEshmrwDunQQrF3caYcfZwGZA10Y%2BA5nBUB0fP36dW4etW%2FJ%2FJ9cbub222zW%2FAR%2B7BfjWIUvg3TrIFLsGoHka44MnKpyZbk9PjJ4hm4FKJR5ycAaWJEGZkKgNZ74CY5qrZxYW1pyPNgX7jaWU1kQv93nygfNNfg2AF9cfyO7J083JSrNaWejmZY4ggBSlfSSbR7wuuid3VHDs7I33Rm0EPy28CHRto1X7POSsgnAGZ%2Bi%2FnfBmze6V16CoR10moY1J400a0e3gIBH8pI0y87evpMICGjvUMQJipFmD2gzDll0%2Fx0SOeUSlun0lTgjB52aMBedXcLZtWdzoYAN2OrvLJsstnTBLNjyBISvwd2d33kTCykRjGWJYqO0ArOgEYJbrskBSRU3DerQflM%2BbKArViNQl2lTcNhtm6HQChiuBcphQEG0HM6l2FcDXLgEO91eLSwC3Fem9sA6uEeEyPWetBmBKJdmFz1VJYuLY5aNBVyoVmA8iUEJ9%2BwYtRpZtrvDcdHek6ao3qMMHT3tMGOqUBEz%2FHZAQgw%2FIAoPsAhd59Yws%2F3btEpjYRLGjB5531onJi5tpeXooCygc2c3smNANmE2UAU8fNDZ83Lrsfdr15rghCHBjYtuedWhmlquozBIVQbczyHpp4BJ6tocMRyH7xRRIEuOUkMvC%2FqxUlKH14%2F7rrBvp%2FHCydbWFc5NWmG7ozR8YOBUueyzeAP0At6ets7W7ZiJeqOeYYr0uVTvOJu9HG5Ljm&X-Amz-Signature=9cc9424e158cf5fbcb5d03f719a861f5d37a7cd2452917cd0a970c1cef996c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCUIHG7%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPKsN361KukicaL7si9Q7u5qEu3iIwhTEwH6v1Ks0gUwIgHBNWgo50Mdy%2B%2F1jXL%2FdUQ%2B8tHNjf6aYuUM7%2BjqYFttYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDL51U0xKbcqBTY20WCrcAxt817eMbP8wUOWF9Rw5ykokXfpFewfyZMGL0UmOJUIPB9E%2B%2BiWDi1v%2BcAuDHJT4fmo0H5qfgtvOkRMZhJimqLtna8Zv9VWI7qopVAc7yzsCVgDdIFZEshmrwDunQQrF3caYcfZwGZA10Y%2BA5nBUB0fP36dW4etW%2FJ%2FJ9cbub222zW%2FAR%2B7BfjWIUvg3TrIFLsGoHka44MnKpyZbk9PjJ4hm4FKJR5ycAaWJEGZkKgNZ74CY5qrZxYW1pyPNgX7jaWU1kQv93nygfNNfg2AF9cfyO7J083JSrNaWejmZY4ggBSlfSSbR7wuuid3VHDs7I33Rm0EPy28CHRto1X7POSsgnAGZ%2Bi%2FnfBmze6V16CoR10moY1J400a0e3gIBH8pI0y87evpMICGjvUMQJipFmD2gzDll0%2Fx0SOeUSlun0lTgjB52aMBedXcLZtWdzoYAN2OrvLJsstnTBLNjyBISvwd2d33kTCykRjGWJYqO0ArOgEYJbrskBSRU3DerQflM%2BbKArViNQl2lTcNhtm6HQChiuBcphQEG0HM6l2FcDXLgEO91eLSwC3Fem9sA6uEeEyPWetBmBKJdmFz1VJYuLY5aNBVyoVmA8iUEJ9%2BwYtRpZtrvDcdHek6ao3qMMHT3tMGOqUBEz%2FHZAQgw%2FIAoPsAhd59Yws%2F3btEpjYRLGjB5531onJi5tpeXooCygc2c3smNANmE2UAU8fNDZ83Lrsfdr15rghCHBjYtuedWhmlquozBIVQbczyHpp4BJ6tocMRyH7xRRIEuOUkMvC%2FqxUlKH14%2F7rrBvp%2FHCydbWFc5NWmG7ozR8YOBUueyzeAP0At6ets7W7ZiJeqOeYYr0uVTvOJu9HG5Ljm&X-Amz-Signature=1a72b00f9e706f1197eff15f153022c948eb9c4dd61b46b0af678b09a6f293fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCUIHG7%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPKsN361KukicaL7si9Q7u5qEu3iIwhTEwH6v1Ks0gUwIgHBNWgo50Mdy%2B%2F1jXL%2FdUQ%2B8tHNjf6aYuUM7%2BjqYFttYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDL51U0xKbcqBTY20WCrcAxt817eMbP8wUOWF9Rw5ykokXfpFewfyZMGL0UmOJUIPB9E%2B%2BiWDi1v%2BcAuDHJT4fmo0H5qfgtvOkRMZhJimqLtna8Zv9VWI7qopVAc7yzsCVgDdIFZEshmrwDunQQrF3caYcfZwGZA10Y%2BA5nBUB0fP36dW4etW%2FJ%2FJ9cbub222zW%2FAR%2B7BfjWIUvg3TrIFLsGoHka44MnKpyZbk9PjJ4hm4FKJR5ycAaWJEGZkKgNZ74CY5qrZxYW1pyPNgX7jaWU1kQv93nygfNNfg2AF9cfyO7J083JSrNaWejmZY4ggBSlfSSbR7wuuid3VHDs7I33Rm0EPy28CHRto1X7POSsgnAGZ%2Bi%2FnfBmze6V16CoR10moY1J400a0e3gIBH8pI0y87evpMICGjvUMQJipFmD2gzDll0%2Fx0SOeUSlun0lTgjB52aMBedXcLZtWdzoYAN2OrvLJsstnTBLNjyBISvwd2d33kTCykRjGWJYqO0ArOgEYJbrskBSRU3DerQflM%2BbKArViNQl2lTcNhtm6HQChiuBcphQEG0HM6l2FcDXLgEO91eLSwC3Fem9sA6uEeEyPWetBmBKJdmFz1VJYuLY5aNBVyoVmA8iUEJ9%2BwYtRpZtrvDcdHek6ao3qMMHT3tMGOqUBEz%2FHZAQgw%2FIAoPsAhd59Yws%2F3btEpjYRLGjB5531onJi5tpeXooCygc2c3smNANmE2UAU8fNDZ83Lrsfdr15rghCHBjYtuedWhmlquozBIVQbczyHpp4BJ6tocMRyH7xRRIEuOUkMvC%2FqxUlKH14%2F7rrBvp%2FHCydbWFc5NWmG7ozR8YOBUueyzeAP0At6ets7W7ZiJeqOeYYr0uVTvOJu9HG5Ljm&X-Amz-Signature=5d46151a5f23f7b32158ac3453d1ecf1d2ec4388d9d7578f819f281e73f976af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
