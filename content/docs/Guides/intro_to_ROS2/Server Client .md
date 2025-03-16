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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK253HV5%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTHTVA5oN0EUfuzipDHSimrrymLrT4Xa1irS3RPeEZWwIgb%2B928lnFPFGk33jcQp%2BN7W3dXDvjTvVcSSJjm2awhMEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHtSkuNUOnDDxK094CrcAwVtc7i2Yda%2F4M63ttT57%2FMi3vbahPkO8%2BXiTOrjXQtCDHuTwldwjHkkWHzuYoj%2FzSm%2FH7sj0OSZw1b9uSj%2B1l%2BAvDDETT%2FHXvoNZcMuJf2mCAYpXSiuZ57zPp146wcyrUP2h0jlBUMYLusZfYthNI6sIh%2Bhx%2Fs2y1OLBT7JXXNs43vDDB2kVPw2O91bRjaWrEzaRraAZ3XzHPYDqf0VshD1cnB%2F7SJb9haRoVr0yIE1ebrmGHi0YSiZkOmkNWAP5emK6J2WmF0fA0ac7kZymMyrnJrneLm1QeBsCsoM%2BqH2d6luK0WtzsrCjP3UfL915lUXXh471Yu6k2P6B2LWc7MFRI0v3QFyT9DkEImmPKSSasSr%2BcsU9MzqRfUD6bOymaBialeJK%2B45b%2FMRtwDXAUaHD38UYCwwJpAStfxp0BxMfX%2BGUsSYzuEM6GKmZgjZVnME%2BINvy4WckqkEPWo3fZEaWlsd%2BOjYHK6CTAOCzl3vKjKG7NZEnDYDtYEez5UaacyOIogjGO0qJ9vOZHQb5rTffwfYZDzpi50PBuCItilGW4EbiPoaGD6h%2FUydia9ALUmWz9gBLsHZFpmBtk8Vu8nLqo78h12%2BFB8ipvvobmt2M5vAmM3qUL3tJ%2BtBMKDc3L4GOqUB%2BcA71D87BSXDGY5Mlm15tukBAkGb5r%2B5t1A5n0lB2HB3B4UUGZ13YJCDbj7BNJ8FJiKqnunHgMamhpGULcAvF%2FPy%2F35e4KuocS0Rx7ziETNtS2pWbK1ZNNhC9t%2B1XCAyIWlZnWWGzeL7ucIyKfGXHc%2FmBDOhm7Yax3smW25WY1oWR%2BdzbzNKhNjhrP3SkbHZGoAviD0fSP1233X7qh3O3CtOkkjr&X-Amz-Signature=5dc608fff902f80ca871399442c810b8726570e35db82c976b25765a6153dea2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK253HV5%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTHTVA5oN0EUfuzipDHSimrrymLrT4Xa1irS3RPeEZWwIgb%2B928lnFPFGk33jcQp%2BN7W3dXDvjTvVcSSJjm2awhMEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHtSkuNUOnDDxK094CrcAwVtc7i2Yda%2F4M63ttT57%2FMi3vbahPkO8%2BXiTOrjXQtCDHuTwldwjHkkWHzuYoj%2FzSm%2FH7sj0OSZw1b9uSj%2B1l%2BAvDDETT%2FHXvoNZcMuJf2mCAYpXSiuZ57zPp146wcyrUP2h0jlBUMYLusZfYthNI6sIh%2Bhx%2Fs2y1OLBT7JXXNs43vDDB2kVPw2O91bRjaWrEzaRraAZ3XzHPYDqf0VshD1cnB%2F7SJb9haRoVr0yIE1ebrmGHi0YSiZkOmkNWAP5emK6J2WmF0fA0ac7kZymMyrnJrneLm1QeBsCsoM%2BqH2d6luK0WtzsrCjP3UfL915lUXXh471Yu6k2P6B2LWc7MFRI0v3QFyT9DkEImmPKSSasSr%2BcsU9MzqRfUD6bOymaBialeJK%2B45b%2FMRtwDXAUaHD38UYCwwJpAStfxp0BxMfX%2BGUsSYzuEM6GKmZgjZVnME%2BINvy4WckqkEPWo3fZEaWlsd%2BOjYHK6CTAOCzl3vKjKG7NZEnDYDtYEez5UaacyOIogjGO0qJ9vOZHQb5rTffwfYZDzpi50PBuCItilGW4EbiPoaGD6h%2FUydia9ALUmWz9gBLsHZFpmBtk8Vu8nLqo78h12%2BFB8ipvvobmt2M5vAmM3qUL3tJ%2BtBMKDc3L4GOqUB%2BcA71D87BSXDGY5Mlm15tukBAkGb5r%2B5t1A5n0lB2HB3B4UUGZ13YJCDbj7BNJ8FJiKqnunHgMamhpGULcAvF%2FPy%2F35e4KuocS0Rx7ziETNtS2pWbK1ZNNhC9t%2B1XCAyIWlZnWWGzeL7ucIyKfGXHc%2FmBDOhm7Yax3smW25WY1oWR%2BdzbzNKhNjhrP3SkbHZGoAviD0fSP1233X7qh3O3CtOkkjr&X-Amz-Signature=cdc79034c5b858aa8809a45cbe2e0d18a6eb1d7faefc94e93451a913b4adea33&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK253HV5%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTHTVA5oN0EUfuzipDHSimrrymLrT4Xa1irS3RPeEZWwIgb%2B928lnFPFGk33jcQp%2BN7W3dXDvjTvVcSSJjm2awhMEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHtSkuNUOnDDxK094CrcAwVtc7i2Yda%2F4M63ttT57%2FMi3vbahPkO8%2BXiTOrjXQtCDHuTwldwjHkkWHzuYoj%2FzSm%2FH7sj0OSZw1b9uSj%2B1l%2BAvDDETT%2FHXvoNZcMuJf2mCAYpXSiuZ57zPp146wcyrUP2h0jlBUMYLusZfYthNI6sIh%2Bhx%2Fs2y1OLBT7JXXNs43vDDB2kVPw2O91bRjaWrEzaRraAZ3XzHPYDqf0VshD1cnB%2F7SJb9haRoVr0yIE1ebrmGHi0YSiZkOmkNWAP5emK6J2WmF0fA0ac7kZymMyrnJrneLm1QeBsCsoM%2BqH2d6luK0WtzsrCjP3UfL915lUXXh471Yu6k2P6B2LWc7MFRI0v3QFyT9DkEImmPKSSasSr%2BcsU9MzqRfUD6bOymaBialeJK%2B45b%2FMRtwDXAUaHD38UYCwwJpAStfxp0BxMfX%2BGUsSYzuEM6GKmZgjZVnME%2BINvy4WckqkEPWo3fZEaWlsd%2BOjYHK6CTAOCzl3vKjKG7NZEnDYDtYEez5UaacyOIogjGO0qJ9vOZHQb5rTffwfYZDzpi50PBuCItilGW4EbiPoaGD6h%2FUydia9ALUmWz9gBLsHZFpmBtk8Vu8nLqo78h12%2BFB8ipvvobmt2M5vAmM3qUL3tJ%2BtBMKDc3L4GOqUB%2BcA71D87BSXDGY5Mlm15tukBAkGb5r%2B5t1A5n0lB2HB3B4UUGZ13YJCDbj7BNJ8FJiKqnunHgMamhpGULcAvF%2FPy%2F35e4KuocS0Rx7ziETNtS2pWbK1ZNNhC9t%2B1XCAyIWlZnWWGzeL7ucIyKfGXHc%2FmBDOhm7Yax3smW25WY1oWR%2BdzbzNKhNjhrP3SkbHZGoAviD0fSP1233X7qh3O3CtOkkjr&X-Amz-Signature=631e650d9eb54dfed83d0e757e1ee50b7051347984be6332ccc5143c8381b089&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK253HV5%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTHTVA5oN0EUfuzipDHSimrrymLrT4Xa1irS3RPeEZWwIgb%2B928lnFPFGk33jcQp%2BN7W3dXDvjTvVcSSJjm2awhMEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHtSkuNUOnDDxK094CrcAwVtc7i2Yda%2F4M63ttT57%2FMi3vbahPkO8%2BXiTOrjXQtCDHuTwldwjHkkWHzuYoj%2FzSm%2FH7sj0OSZw1b9uSj%2B1l%2BAvDDETT%2FHXvoNZcMuJf2mCAYpXSiuZ57zPp146wcyrUP2h0jlBUMYLusZfYthNI6sIh%2Bhx%2Fs2y1OLBT7JXXNs43vDDB2kVPw2O91bRjaWrEzaRraAZ3XzHPYDqf0VshD1cnB%2F7SJb9haRoVr0yIE1ebrmGHi0YSiZkOmkNWAP5emK6J2WmF0fA0ac7kZymMyrnJrneLm1QeBsCsoM%2BqH2d6luK0WtzsrCjP3UfL915lUXXh471Yu6k2P6B2LWc7MFRI0v3QFyT9DkEImmPKSSasSr%2BcsU9MzqRfUD6bOymaBialeJK%2B45b%2FMRtwDXAUaHD38UYCwwJpAStfxp0BxMfX%2BGUsSYzuEM6GKmZgjZVnME%2BINvy4WckqkEPWo3fZEaWlsd%2BOjYHK6CTAOCzl3vKjKG7NZEnDYDtYEez5UaacyOIogjGO0qJ9vOZHQb5rTffwfYZDzpi50PBuCItilGW4EbiPoaGD6h%2FUydia9ALUmWz9gBLsHZFpmBtk8Vu8nLqo78h12%2BFB8ipvvobmt2M5vAmM3qUL3tJ%2BtBMKDc3L4GOqUB%2BcA71D87BSXDGY5Mlm15tukBAkGb5r%2B5t1A5n0lB2HB3B4UUGZ13YJCDbj7BNJ8FJiKqnunHgMamhpGULcAvF%2FPy%2F35e4KuocS0Rx7ziETNtS2pWbK1ZNNhC9t%2B1XCAyIWlZnWWGzeL7ucIyKfGXHc%2FmBDOhm7Yax3smW25WY1oWR%2BdzbzNKhNjhrP3SkbHZGoAviD0fSP1233X7qh3O3CtOkkjr&X-Amz-Signature=b632ccfd24e4c5b1353e4f402966b1a053b2b32e60f56f604a4c8aa96205b9b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK253HV5%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTHTVA5oN0EUfuzipDHSimrrymLrT4Xa1irS3RPeEZWwIgb%2B928lnFPFGk33jcQp%2BN7W3dXDvjTvVcSSJjm2awhMEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHtSkuNUOnDDxK094CrcAwVtc7i2Yda%2F4M63ttT57%2FMi3vbahPkO8%2BXiTOrjXQtCDHuTwldwjHkkWHzuYoj%2FzSm%2FH7sj0OSZw1b9uSj%2B1l%2BAvDDETT%2FHXvoNZcMuJf2mCAYpXSiuZ57zPp146wcyrUP2h0jlBUMYLusZfYthNI6sIh%2Bhx%2Fs2y1OLBT7JXXNs43vDDB2kVPw2O91bRjaWrEzaRraAZ3XzHPYDqf0VshD1cnB%2F7SJb9haRoVr0yIE1ebrmGHi0YSiZkOmkNWAP5emK6J2WmF0fA0ac7kZymMyrnJrneLm1QeBsCsoM%2BqH2d6luK0WtzsrCjP3UfL915lUXXh471Yu6k2P6B2LWc7MFRI0v3QFyT9DkEImmPKSSasSr%2BcsU9MzqRfUD6bOymaBialeJK%2B45b%2FMRtwDXAUaHD38UYCwwJpAStfxp0BxMfX%2BGUsSYzuEM6GKmZgjZVnME%2BINvy4WckqkEPWo3fZEaWlsd%2BOjYHK6CTAOCzl3vKjKG7NZEnDYDtYEez5UaacyOIogjGO0qJ9vOZHQb5rTffwfYZDzpi50PBuCItilGW4EbiPoaGD6h%2FUydia9ALUmWz9gBLsHZFpmBtk8Vu8nLqo78h12%2BFB8ipvvobmt2M5vAmM3qUL3tJ%2BtBMKDc3L4GOqUB%2BcA71D87BSXDGY5Mlm15tukBAkGb5r%2B5t1A5n0lB2HB3B4UUGZ13YJCDbj7BNJ8FJiKqnunHgMamhpGULcAvF%2FPy%2F35e4KuocS0Rx7ziETNtS2pWbK1ZNNhC9t%2B1XCAyIWlZnWWGzeL7ucIyKfGXHc%2FmBDOhm7Yax3smW25WY1oWR%2BdzbzNKhNjhrP3SkbHZGoAviD0fSP1233X7qh3O3CtOkkjr&X-Amz-Signature=700a6336c7734d19615983077788623fe8fa2d0cc4de9d9bb3a00350352a652d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
