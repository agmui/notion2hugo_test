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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3H3TJTC%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbxdBGLY8pgzVlzcdw%2BwdNWOJCbGX%2FQ3M6oHAMttjVigIhAKHPr%2F5xr2TreoS3z3cQVcm6Tx1znuy6Dzkk0YKZroCgKv8DCEYQABoMNjM3NDIzMTgzODA1IgxS%2FTMGs8Uf%2BXEbAJ4q3ANLkS%2Fia4%2FLm%2FHPt3OKvOABJyQEwm%2FrmhX2X4Df2mLYLjcFreQqmRKlbSHTNm2ysDHbbVt3YqQAq8VcKCg%2FxQDa37tbreg8edhvpZgGaS7dqptoXyeDK%2Bi%2BxWtp4CAnj%2FCV0kpRAzBSHX%2F7JIWwqPrVVB3KGKKQ0a1mPGQZbwkwc2%2FF%2FcceJf%2Bq3ONr%2BaF8M%2BLSGBb2CbMIoOqZEZUxgFhaM8si%2BwNHaHEhUA%2BaXeqRbkcYqJmBZiCM1LF1jZyl9%2FImIQH1oyp5XTQL%2BkzVLsxVkFkBgCTgbFLdWdPn3jKKbLWXkSn8SpMqz2XQASVDfkhmwNT%2FTuKy3RTiG6oz4ixyppkTd6AGXH4j5TkztJSbLzljwQkXETMX%2FDwohezsVOjik6JM9kCditwAiu21njHghfpjWhz4uYpznFCofp0dcEiIP%2FO%2F%2FDscezBG3rFaA6uyPzr5LqQsyVqYgWXuzpF%2B2Gxj5jY%2FGwMaW%2BpKN%2F03er9M7lgJlFvvZOfH4cbvjLbrfKhlyR19LMPH9%2Fqd7F7X6Xot94W78FIbEe3dvgITSqLFA5T0qeB8kRtYWhJe5jpWuMUehZ1oGqI6RhvJqssryJy7i94eMnuG%2Be5mJo%2BOJ9td2UQKHxct3u%2B7ZTDiquC%2BBjqkAb2gPK31chta4ImbYA5%2FeH%2BAnw2w3l8nNwxyvYsQ2W%2BoM1dQjyN0K0FkLtfSGGqXkhvmegSNu72o2ag4QnXyHjpUPN7S35N%2BXXckSFhMYTxhxASw5%2BeHycmJKdsSthMQKbtAK6EWbMWAGz%2F8lGAfVCnKqxvzpXTRcXgSa3aEwUj3rUhIaxnbJ6RG9PPP%2BMKTIJX1DC5X7bQ2Kiq%2F8ln6sh7ogwtz&X-Amz-Signature=3fa4867d8887e2caaa2f77c8096493b0eb543f33437115e23d1c3188a41b2512&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3H3TJTC%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbxdBGLY8pgzVlzcdw%2BwdNWOJCbGX%2FQ3M6oHAMttjVigIhAKHPr%2F5xr2TreoS3z3cQVcm6Tx1znuy6Dzkk0YKZroCgKv8DCEYQABoMNjM3NDIzMTgzODA1IgxS%2FTMGs8Uf%2BXEbAJ4q3ANLkS%2Fia4%2FLm%2FHPt3OKvOABJyQEwm%2FrmhX2X4Df2mLYLjcFreQqmRKlbSHTNm2ysDHbbVt3YqQAq8VcKCg%2FxQDa37tbreg8edhvpZgGaS7dqptoXyeDK%2Bi%2BxWtp4CAnj%2FCV0kpRAzBSHX%2F7JIWwqPrVVB3KGKKQ0a1mPGQZbwkwc2%2FF%2FcceJf%2Bq3ONr%2BaF8M%2BLSGBb2CbMIoOqZEZUxgFhaM8si%2BwNHaHEhUA%2BaXeqRbkcYqJmBZiCM1LF1jZyl9%2FImIQH1oyp5XTQL%2BkzVLsxVkFkBgCTgbFLdWdPn3jKKbLWXkSn8SpMqz2XQASVDfkhmwNT%2FTuKy3RTiG6oz4ixyppkTd6AGXH4j5TkztJSbLzljwQkXETMX%2FDwohezsVOjik6JM9kCditwAiu21njHghfpjWhz4uYpznFCofp0dcEiIP%2FO%2F%2FDscezBG3rFaA6uyPzr5LqQsyVqYgWXuzpF%2B2Gxj5jY%2FGwMaW%2BpKN%2F03er9M7lgJlFvvZOfH4cbvjLbrfKhlyR19LMPH9%2Fqd7F7X6Xot94W78FIbEe3dvgITSqLFA5T0qeB8kRtYWhJe5jpWuMUehZ1oGqI6RhvJqssryJy7i94eMnuG%2Be5mJo%2BOJ9td2UQKHxct3u%2B7ZTDiquC%2BBjqkAb2gPK31chta4ImbYA5%2FeH%2BAnw2w3l8nNwxyvYsQ2W%2BoM1dQjyN0K0FkLtfSGGqXkhvmegSNu72o2ag4QnXyHjpUPN7S35N%2BXXckSFhMYTxhxASw5%2BeHycmJKdsSthMQKbtAK6EWbMWAGz%2F8lGAfVCnKqxvzpXTRcXgSa3aEwUj3rUhIaxnbJ6RG9PPP%2BMKTIJX1DC5X7bQ2Kiq%2F8ln6sh7ogwtz&X-Amz-Signature=9f720fcca5ae114f794507464e2c58b89e26a962ec0f982973b39c0100f71a75&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3H3TJTC%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbxdBGLY8pgzVlzcdw%2BwdNWOJCbGX%2FQ3M6oHAMttjVigIhAKHPr%2F5xr2TreoS3z3cQVcm6Tx1znuy6Dzkk0YKZroCgKv8DCEYQABoMNjM3NDIzMTgzODA1IgxS%2FTMGs8Uf%2BXEbAJ4q3ANLkS%2Fia4%2FLm%2FHPt3OKvOABJyQEwm%2FrmhX2X4Df2mLYLjcFreQqmRKlbSHTNm2ysDHbbVt3YqQAq8VcKCg%2FxQDa37tbreg8edhvpZgGaS7dqptoXyeDK%2Bi%2BxWtp4CAnj%2FCV0kpRAzBSHX%2F7JIWwqPrVVB3KGKKQ0a1mPGQZbwkwc2%2FF%2FcceJf%2Bq3ONr%2BaF8M%2BLSGBb2CbMIoOqZEZUxgFhaM8si%2BwNHaHEhUA%2BaXeqRbkcYqJmBZiCM1LF1jZyl9%2FImIQH1oyp5XTQL%2BkzVLsxVkFkBgCTgbFLdWdPn3jKKbLWXkSn8SpMqz2XQASVDfkhmwNT%2FTuKy3RTiG6oz4ixyppkTd6AGXH4j5TkztJSbLzljwQkXETMX%2FDwohezsVOjik6JM9kCditwAiu21njHghfpjWhz4uYpznFCofp0dcEiIP%2FO%2F%2FDscezBG3rFaA6uyPzr5LqQsyVqYgWXuzpF%2B2Gxj5jY%2FGwMaW%2BpKN%2F03er9M7lgJlFvvZOfH4cbvjLbrfKhlyR19LMPH9%2Fqd7F7X6Xot94W78FIbEe3dvgITSqLFA5T0qeB8kRtYWhJe5jpWuMUehZ1oGqI6RhvJqssryJy7i94eMnuG%2Be5mJo%2BOJ9td2UQKHxct3u%2B7ZTDiquC%2BBjqkAb2gPK31chta4ImbYA5%2FeH%2BAnw2w3l8nNwxyvYsQ2W%2BoM1dQjyN0K0FkLtfSGGqXkhvmegSNu72o2ag4QnXyHjpUPN7S35N%2BXXckSFhMYTxhxASw5%2BeHycmJKdsSthMQKbtAK6EWbMWAGz%2F8lGAfVCnKqxvzpXTRcXgSa3aEwUj3rUhIaxnbJ6RG9PPP%2BMKTIJX1DC5X7bQ2Kiq%2F8ln6sh7ogwtz&X-Amz-Signature=8cf9f6d0493a72be5c34bbb520a221beafd60c1fd6ac16a48a43261fc7c1a387&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3H3TJTC%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbxdBGLY8pgzVlzcdw%2BwdNWOJCbGX%2FQ3M6oHAMttjVigIhAKHPr%2F5xr2TreoS3z3cQVcm6Tx1znuy6Dzkk0YKZroCgKv8DCEYQABoMNjM3NDIzMTgzODA1IgxS%2FTMGs8Uf%2BXEbAJ4q3ANLkS%2Fia4%2FLm%2FHPt3OKvOABJyQEwm%2FrmhX2X4Df2mLYLjcFreQqmRKlbSHTNm2ysDHbbVt3YqQAq8VcKCg%2FxQDa37tbreg8edhvpZgGaS7dqptoXyeDK%2Bi%2BxWtp4CAnj%2FCV0kpRAzBSHX%2F7JIWwqPrVVB3KGKKQ0a1mPGQZbwkwc2%2FF%2FcceJf%2Bq3ONr%2BaF8M%2BLSGBb2CbMIoOqZEZUxgFhaM8si%2BwNHaHEhUA%2BaXeqRbkcYqJmBZiCM1LF1jZyl9%2FImIQH1oyp5XTQL%2BkzVLsxVkFkBgCTgbFLdWdPn3jKKbLWXkSn8SpMqz2XQASVDfkhmwNT%2FTuKy3RTiG6oz4ixyppkTd6AGXH4j5TkztJSbLzljwQkXETMX%2FDwohezsVOjik6JM9kCditwAiu21njHghfpjWhz4uYpznFCofp0dcEiIP%2FO%2F%2FDscezBG3rFaA6uyPzr5LqQsyVqYgWXuzpF%2B2Gxj5jY%2FGwMaW%2BpKN%2F03er9M7lgJlFvvZOfH4cbvjLbrfKhlyR19LMPH9%2Fqd7F7X6Xot94W78FIbEe3dvgITSqLFA5T0qeB8kRtYWhJe5jpWuMUehZ1oGqI6RhvJqssryJy7i94eMnuG%2Be5mJo%2BOJ9td2UQKHxct3u%2B7ZTDiquC%2BBjqkAb2gPK31chta4ImbYA5%2FeH%2BAnw2w3l8nNwxyvYsQ2W%2BoM1dQjyN0K0FkLtfSGGqXkhvmegSNu72o2ag4QnXyHjpUPN7S35N%2BXXckSFhMYTxhxASw5%2BeHycmJKdsSthMQKbtAK6EWbMWAGz%2F8lGAfVCnKqxvzpXTRcXgSa3aEwUj3rUhIaxnbJ6RG9PPP%2BMKTIJX1DC5X7bQ2Kiq%2F8ln6sh7ogwtz&X-Amz-Signature=009cdd7508b6c3f50ef13186ec1d67e0a85eaab2eece72d29b7974d102b3e3dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3H3TJTC%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbxdBGLY8pgzVlzcdw%2BwdNWOJCbGX%2FQ3M6oHAMttjVigIhAKHPr%2F5xr2TreoS3z3cQVcm6Tx1znuy6Dzkk0YKZroCgKv8DCEYQABoMNjM3NDIzMTgzODA1IgxS%2FTMGs8Uf%2BXEbAJ4q3ANLkS%2Fia4%2FLm%2FHPt3OKvOABJyQEwm%2FrmhX2X4Df2mLYLjcFreQqmRKlbSHTNm2ysDHbbVt3YqQAq8VcKCg%2FxQDa37tbreg8edhvpZgGaS7dqptoXyeDK%2Bi%2BxWtp4CAnj%2FCV0kpRAzBSHX%2F7JIWwqPrVVB3KGKKQ0a1mPGQZbwkwc2%2FF%2FcceJf%2Bq3ONr%2BaF8M%2BLSGBb2CbMIoOqZEZUxgFhaM8si%2BwNHaHEhUA%2BaXeqRbkcYqJmBZiCM1LF1jZyl9%2FImIQH1oyp5XTQL%2BkzVLsxVkFkBgCTgbFLdWdPn3jKKbLWXkSn8SpMqz2XQASVDfkhmwNT%2FTuKy3RTiG6oz4ixyppkTd6AGXH4j5TkztJSbLzljwQkXETMX%2FDwohezsVOjik6JM9kCditwAiu21njHghfpjWhz4uYpznFCofp0dcEiIP%2FO%2F%2FDscezBG3rFaA6uyPzr5LqQsyVqYgWXuzpF%2B2Gxj5jY%2FGwMaW%2BpKN%2F03er9M7lgJlFvvZOfH4cbvjLbrfKhlyR19LMPH9%2Fqd7F7X6Xot94W78FIbEe3dvgITSqLFA5T0qeB8kRtYWhJe5jpWuMUehZ1oGqI6RhvJqssryJy7i94eMnuG%2Be5mJo%2BOJ9td2UQKHxct3u%2B7ZTDiquC%2BBjqkAb2gPK31chta4ImbYA5%2FeH%2BAnw2w3l8nNwxyvYsQ2W%2BoM1dQjyN0K0FkLtfSGGqXkhvmegSNu72o2ag4QnXyHjpUPN7S35N%2BXXckSFhMYTxhxASw5%2BeHycmJKdsSthMQKbtAK6EWbMWAGz%2F8lGAfVCnKqxvzpXTRcXgSa3aEwUj3rUhIaxnbJ6RG9PPP%2BMKTIJX1DC5X7bQ2Kiq%2F8ln6sh7ogwtz&X-Amz-Signature=48bd17fd7019ebf48c7442fc21eea731fc837c9b6d55ea0489f402562c474777&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
