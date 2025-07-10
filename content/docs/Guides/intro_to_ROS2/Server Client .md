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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6ESJ4F%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW%2BfQDwRqWYnbsiZfR4h8DWDYDz2RU6PjO5JA%2FIVcgCQIgTr34uj6XV1Ww3h%2FKWa6KfySKmSt00I76q%2B3nG9BmNbkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVKL8046kl4WyIwAircA6rxqi4M4jZmLXxH5rnhYSrPD%2FpHUYst%2FhAdRXRE4gkw%2F5o%2B%2FeT9KIOAby4SS4XFHH9x%2FIMA1y6YGyfdmooYPo3MNcqCl6vxmyq6GlHiy%2BuM0FS1GQiOJvp0WujBXWuOP2XHZA2WRvq25SvUpq6wBYCKEIP%2FVcgWS%2F3%2B6raFzF7EKUVdd2SIm4Xc4PgZA0m3iSsotOh7VYAKqO949EpPc%2F514kU57HUMHl4OB6jiMKJJbmY6l4Iu68nFX79cmvIKlczakPZDyK%2FvDoWsG1O%2Fii9ET3K0Q2RBxjsL7OZYqotppM6T2oriLUgKSMyAppzonfWEmhWHdF3GfV5ppilyvV9vDAFUqq1Ci4O39wjpRzNA6uvBYPfS4pw9xxa%2BPszbXTxdKQdwkzez%2FTKUcKdXiYegKTK6Zup2Bzpk%2FG%2BgF7o%2BRzOd%2BoL%2Bw39gX3LXVcG1wgefGR52tiPwBDU493MiTDdIkDycO7DFFM%2F9xXUFRmDBh3BzPbafRnLbbK0A5YG0N9GANgmPUfI5jKeArTnP3xRBN3SFzjksJSSVgT0vR%2FZ%2FbDe%2FOq9OnqmDLfmLqV7QJAsqUtJVldLLvSPr1%2F%2BW%2FXx8fiw32A3IAMKQAZCugCfc2y5mQuiiRQLLrBiIMMbUvsMGOqUBT9mDwYQF2kfgSqKVOQL5iit0BPlMoZGcGygT4ZCBa%2BWfns1ADMK1OVTgz9QCqhpvVQjE0aq9mYzbswwFt%2FTuce838TvYo84rCMhWPl22h8EaSxx2%2B2x7wFD5fZ9mRsNk9aXkgzBxxsT0nilZjJ7wSOX3thxR2e5pMO1nkTGSvgpFEGeHH3gJFsbvWv5vPH0FmZBHBBK0sfZDL%2B8BV%2FkwUYRS%2BSG2&X-Amz-Signature=f561dab3307ae20cb7450e2746481f5e19cea1276eb4676b942831f3ace755e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6ESJ4F%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW%2BfQDwRqWYnbsiZfR4h8DWDYDz2RU6PjO5JA%2FIVcgCQIgTr34uj6XV1Ww3h%2FKWa6KfySKmSt00I76q%2B3nG9BmNbkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVKL8046kl4WyIwAircA6rxqi4M4jZmLXxH5rnhYSrPD%2FpHUYst%2FhAdRXRE4gkw%2F5o%2B%2FeT9KIOAby4SS4XFHH9x%2FIMA1y6YGyfdmooYPo3MNcqCl6vxmyq6GlHiy%2BuM0FS1GQiOJvp0WujBXWuOP2XHZA2WRvq25SvUpq6wBYCKEIP%2FVcgWS%2F3%2B6raFzF7EKUVdd2SIm4Xc4PgZA0m3iSsotOh7VYAKqO949EpPc%2F514kU57HUMHl4OB6jiMKJJbmY6l4Iu68nFX79cmvIKlczakPZDyK%2FvDoWsG1O%2Fii9ET3K0Q2RBxjsL7OZYqotppM6T2oriLUgKSMyAppzonfWEmhWHdF3GfV5ppilyvV9vDAFUqq1Ci4O39wjpRzNA6uvBYPfS4pw9xxa%2BPszbXTxdKQdwkzez%2FTKUcKdXiYegKTK6Zup2Bzpk%2FG%2BgF7o%2BRzOd%2BoL%2Bw39gX3LXVcG1wgefGR52tiPwBDU493MiTDdIkDycO7DFFM%2F9xXUFRmDBh3BzPbafRnLbbK0A5YG0N9GANgmPUfI5jKeArTnP3xRBN3SFzjksJSSVgT0vR%2FZ%2FbDe%2FOq9OnqmDLfmLqV7QJAsqUtJVldLLvSPr1%2F%2BW%2FXx8fiw32A3IAMKQAZCugCfc2y5mQuiiRQLLrBiIMMbUvsMGOqUBT9mDwYQF2kfgSqKVOQL5iit0BPlMoZGcGygT4ZCBa%2BWfns1ADMK1OVTgz9QCqhpvVQjE0aq9mYzbswwFt%2FTuce838TvYo84rCMhWPl22h8EaSxx2%2B2x7wFD5fZ9mRsNk9aXkgzBxxsT0nilZjJ7wSOX3thxR2e5pMO1nkTGSvgpFEGeHH3gJFsbvWv5vPH0FmZBHBBK0sfZDL%2B8BV%2FkwUYRS%2BSG2&X-Amz-Signature=10dbeae9a82cc5c97f7fe6aa735f110573170d51af5783e26b877254ddb35d6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6ESJ4F%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW%2BfQDwRqWYnbsiZfR4h8DWDYDz2RU6PjO5JA%2FIVcgCQIgTr34uj6XV1Ww3h%2FKWa6KfySKmSt00I76q%2B3nG9BmNbkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVKL8046kl4WyIwAircA6rxqi4M4jZmLXxH5rnhYSrPD%2FpHUYst%2FhAdRXRE4gkw%2F5o%2B%2FeT9KIOAby4SS4XFHH9x%2FIMA1y6YGyfdmooYPo3MNcqCl6vxmyq6GlHiy%2BuM0FS1GQiOJvp0WujBXWuOP2XHZA2WRvq25SvUpq6wBYCKEIP%2FVcgWS%2F3%2B6raFzF7EKUVdd2SIm4Xc4PgZA0m3iSsotOh7VYAKqO949EpPc%2F514kU57HUMHl4OB6jiMKJJbmY6l4Iu68nFX79cmvIKlczakPZDyK%2FvDoWsG1O%2Fii9ET3K0Q2RBxjsL7OZYqotppM6T2oriLUgKSMyAppzonfWEmhWHdF3GfV5ppilyvV9vDAFUqq1Ci4O39wjpRzNA6uvBYPfS4pw9xxa%2BPszbXTxdKQdwkzez%2FTKUcKdXiYegKTK6Zup2Bzpk%2FG%2BgF7o%2BRzOd%2BoL%2Bw39gX3LXVcG1wgefGR52tiPwBDU493MiTDdIkDycO7DFFM%2F9xXUFRmDBh3BzPbafRnLbbK0A5YG0N9GANgmPUfI5jKeArTnP3xRBN3SFzjksJSSVgT0vR%2FZ%2FbDe%2FOq9OnqmDLfmLqV7QJAsqUtJVldLLvSPr1%2F%2BW%2FXx8fiw32A3IAMKQAZCugCfc2y5mQuiiRQLLrBiIMMbUvsMGOqUBT9mDwYQF2kfgSqKVOQL5iit0BPlMoZGcGygT4ZCBa%2BWfns1ADMK1OVTgz9QCqhpvVQjE0aq9mYzbswwFt%2FTuce838TvYo84rCMhWPl22h8EaSxx2%2B2x7wFD5fZ9mRsNk9aXkgzBxxsT0nilZjJ7wSOX3thxR2e5pMO1nkTGSvgpFEGeHH3gJFsbvWv5vPH0FmZBHBBK0sfZDL%2B8BV%2FkwUYRS%2BSG2&X-Amz-Signature=932b599c7e92e7c7011072a836d95e41e35934fbaa844bc83de9ab44298faae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6ESJ4F%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW%2BfQDwRqWYnbsiZfR4h8DWDYDz2RU6PjO5JA%2FIVcgCQIgTr34uj6XV1Ww3h%2FKWa6KfySKmSt00I76q%2B3nG9BmNbkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVKL8046kl4WyIwAircA6rxqi4M4jZmLXxH5rnhYSrPD%2FpHUYst%2FhAdRXRE4gkw%2F5o%2B%2FeT9KIOAby4SS4XFHH9x%2FIMA1y6YGyfdmooYPo3MNcqCl6vxmyq6GlHiy%2BuM0FS1GQiOJvp0WujBXWuOP2XHZA2WRvq25SvUpq6wBYCKEIP%2FVcgWS%2F3%2B6raFzF7EKUVdd2SIm4Xc4PgZA0m3iSsotOh7VYAKqO949EpPc%2F514kU57HUMHl4OB6jiMKJJbmY6l4Iu68nFX79cmvIKlczakPZDyK%2FvDoWsG1O%2Fii9ET3K0Q2RBxjsL7OZYqotppM6T2oriLUgKSMyAppzonfWEmhWHdF3GfV5ppilyvV9vDAFUqq1Ci4O39wjpRzNA6uvBYPfS4pw9xxa%2BPszbXTxdKQdwkzez%2FTKUcKdXiYegKTK6Zup2Bzpk%2FG%2BgF7o%2BRzOd%2BoL%2Bw39gX3LXVcG1wgefGR52tiPwBDU493MiTDdIkDycO7DFFM%2F9xXUFRmDBh3BzPbafRnLbbK0A5YG0N9GANgmPUfI5jKeArTnP3xRBN3SFzjksJSSVgT0vR%2FZ%2FbDe%2FOq9OnqmDLfmLqV7QJAsqUtJVldLLvSPr1%2F%2BW%2FXx8fiw32A3IAMKQAZCugCfc2y5mQuiiRQLLrBiIMMbUvsMGOqUBT9mDwYQF2kfgSqKVOQL5iit0BPlMoZGcGygT4ZCBa%2BWfns1ADMK1OVTgz9QCqhpvVQjE0aq9mYzbswwFt%2FTuce838TvYo84rCMhWPl22h8EaSxx2%2B2x7wFD5fZ9mRsNk9aXkgzBxxsT0nilZjJ7wSOX3thxR2e5pMO1nkTGSvgpFEGeHH3gJFsbvWv5vPH0FmZBHBBK0sfZDL%2B8BV%2FkwUYRS%2BSG2&X-Amz-Signature=04b4d25f72fc6037f5b58695e32da5942ad517dc5b243e5aa23762a3742c0f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6ESJ4F%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW%2BfQDwRqWYnbsiZfR4h8DWDYDz2RU6PjO5JA%2FIVcgCQIgTr34uj6XV1Ww3h%2FKWa6KfySKmSt00I76q%2B3nG9BmNbkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVKL8046kl4WyIwAircA6rxqi4M4jZmLXxH5rnhYSrPD%2FpHUYst%2FhAdRXRE4gkw%2F5o%2B%2FeT9KIOAby4SS4XFHH9x%2FIMA1y6YGyfdmooYPo3MNcqCl6vxmyq6GlHiy%2BuM0FS1GQiOJvp0WujBXWuOP2XHZA2WRvq25SvUpq6wBYCKEIP%2FVcgWS%2F3%2B6raFzF7EKUVdd2SIm4Xc4PgZA0m3iSsotOh7VYAKqO949EpPc%2F514kU57HUMHl4OB6jiMKJJbmY6l4Iu68nFX79cmvIKlczakPZDyK%2FvDoWsG1O%2Fii9ET3K0Q2RBxjsL7OZYqotppM6T2oriLUgKSMyAppzonfWEmhWHdF3GfV5ppilyvV9vDAFUqq1Ci4O39wjpRzNA6uvBYPfS4pw9xxa%2BPszbXTxdKQdwkzez%2FTKUcKdXiYegKTK6Zup2Bzpk%2FG%2BgF7o%2BRzOd%2BoL%2Bw39gX3LXVcG1wgefGR52tiPwBDU493MiTDdIkDycO7DFFM%2F9xXUFRmDBh3BzPbafRnLbbK0A5YG0N9GANgmPUfI5jKeArTnP3xRBN3SFzjksJSSVgT0vR%2FZ%2FbDe%2FOq9OnqmDLfmLqV7QJAsqUtJVldLLvSPr1%2F%2BW%2FXx8fiw32A3IAMKQAZCugCfc2y5mQuiiRQLLrBiIMMbUvsMGOqUBT9mDwYQF2kfgSqKVOQL5iit0BPlMoZGcGygT4ZCBa%2BWfns1ADMK1OVTgz9QCqhpvVQjE0aq9mYzbswwFt%2FTuce838TvYo84rCMhWPl22h8EaSxx2%2B2x7wFD5fZ9mRsNk9aXkgzBxxsT0nilZjJ7wSOX3thxR2e5pMO1nkTGSvgpFEGeHH3gJFsbvWv5vPH0FmZBHBBK0sfZDL%2B8BV%2FkwUYRS%2BSG2&X-Amz-Signature=562e724ab60f1075d044af29ee8b7e23e7aac7701de0285c3a050935a4b5ed9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
