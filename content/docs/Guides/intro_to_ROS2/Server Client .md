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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPKTHWC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD87s7th7WaFa4XYuFEMvJTT3IGWk%2BBaaqn6m99bj205AIgIHjpuNKMdhlr7JNDsDdZDkCeEyQHvJYFW8FXkYrdhgEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKBSy161cZy%2BUwfJmircA6GdT9mm8zOelzDWLsnTscZShirNVx5UruKEwywue%2Fx79jXrFDxW%2Fa5u0FJpco10DO6Ud0IBc%2FxZZum1Bj313AzhMR01f5mWAzJMGioSC5iQkuwhUxG7%2F48WFUcOr8t9CXn2Wvo4gD%2FfdOa4Ekj3VqxVxl5egTLoFMFtpK%2FX09L4zg0fCEgaTBHhsQxlsv6x43Asl%2B9G0%2F2PzSFtL3IptDHyxZx%2BDwUMPSW7XJIvrAFhxwIySEYK8lBKsuuyWxOxMTujbz75bQRnGmXvsPig184kA%2B%2FcYp5fcJtnE5458YRsPD7H5%2BakvY6cYXe1NfgTRjTQtzDTdw%2FlYPRhbdIu9S04vrrswFg6ox2QqCXtdYe%2FZ5Cb%2BB%2B4dqxL6G0NExuRV61CFRfxRk6f%2B3L%2BZo7IbUR6Mu0t2bqcHRCg9Rme4OtJOJRoDssK1Gtdyk9Esch7dSuC20Xruf%2BRGYKTA9kxHQxkXz7RpZmv8Nz8P9XgLxUPzeVmpFpTP1FcVs%2BISCAh4N1Cjyp%2BRw3kvtDIa4oAJpXyF8Cl%2BezPDaWoejD2eI9YUPSrbOD9yUlNrrcnvUioskuz8KPG8IRPlgA6sjbHMUXpu1cLPLXkgFl4j5ryOVHlDdaDuIw35nYT3jWAMJPByL0GOqUBIFeWPDtjkdavxJKqSvPj5P%2FGOlOgD366jn3hcE%2BgABn3ORh5D91nZO3ODrxhDrBLYA8%2FHEgHsR3BbbTqSgepZzBNiy2id7bsWZnqp99InvbejJzkSdpVr1mmNPXsobl6DjA5B4MLjv2LCvRRb8YBoiUi10ptWhnwzqWO4YK70VD4%2BJg5OO9BI8%2FLvAPSeA4JJfg%2BehvL5pH%2FFXEOi9pj2cO1oRqi&X-Amz-Signature=ba64b0ddc2013c79598fb5813ff3f2828d37f108f37e6198d555d55ffc0f48a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPKTHWC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD87s7th7WaFa4XYuFEMvJTT3IGWk%2BBaaqn6m99bj205AIgIHjpuNKMdhlr7JNDsDdZDkCeEyQHvJYFW8FXkYrdhgEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKBSy161cZy%2BUwfJmircA6GdT9mm8zOelzDWLsnTscZShirNVx5UruKEwywue%2Fx79jXrFDxW%2Fa5u0FJpco10DO6Ud0IBc%2FxZZum1Bj313AzhMR01f5mWAzJMGioSC5iQkuwhUxG7%2F48WFUcOr8t9CXn2Wvo4gD%2FfdOa4Ekj3VqxVxl5egTLoFMFtpK%2FX09L4zg0fCEgaTBHhsQxlsv6x43Asl%2B9G0%2F2PzSFtL3IptDHyxZx%2BDwUMPSW7XJIvrAFhxwIySEYK8lBKsuuyWxOxMTujbz75bQRnGmXvsPig184kA%2B%2FcYp5fcJtnE5458YRsPD7H5%2BakvY6cYXe1NfgTRjTQtzDTdw%2FlYPRhbdIu9S04vrrswFg6ox2QqCXtdYe%2FZ5Cb%2BB%2B4dqxL6G0NExuRV61CFRfxRk6f%2B3L%2BZo7IbUR6Mu0t2bqcHRCg9Rme4OtJOJRoDssK1Gtdyk9Esch7dSuC20Xruf%2BRGYKTA9kxHQxkXz7RpZmv8Nz8P9XgLxUPzeVmpFpTP1FcVs%2BISCAh4N1Cjyp%2BRw3kvtDIa4oAJpXyF8Cl%2BezPDaWoejD2eI9YUPSrbOD9yUlNrrcnvUioskuz8KPG8IRPlgA6sjbHMUXpu1cLPLXkgFl4j5ryOVHlDdaDuIw35nYT3jWAMJPByL0GOqUBIFeWPDtjkdavxJKqSvPj5P%2FGOlOgD366jn3hcE%2BgABn3ORh5D91nZO3ODrxhDrBLYA8%2FHEgHsR3BbbTqSgepZzBNiy2id7bsWZnqp99InvbejJzkSdpVr1mmNPXsobl6DjA5B4MLjv2LCvRRb8YBoiUi10ptWhnwzqWO4YK70VD4%2BJg5OO9BI8%2FLvAPSeA4JJfg%2BehvL5pH%2FFXEOi9pj2cO1oRqi&X-Amz-Signature=9d616c3fa13a43c4dc8235bdbb158c5ee717527cf234941ddc7f633d589a0356&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPKTHWC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD87s7th7WaFa4XYuFEMvJTT3IGWk%2BBaaqn6m99bj205AIgIHjpuNKMdhlr7JNDsDdZDkCeEyQHvJYFW8FXkYrdhgEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKBSy161cZy%2BUwfJmircA6GdT9mm8zOelzDWLsnTscZShirNVx5UruKEwywue%2Fx79jXrFDxW%2Fa5u0FJpco10DO6Ud0IBc%2FxZZum1Bj313AzhMR01f5mWAzJMGioSC5iQkuwhUxG7%2F48WFUcOr8t9CXn2Wvo4gD%2FfdOa4Ekj3VqxVxl5egTLoFMFtpK%2FX09L4zg0fCEgaTBHhsQxlsv6x43Asl%2B9G0%2F2PzSFtL3IptDHyxZx%2BDwUMPSW7XJIvrAFhxwIySEYK8lBKsuuyWxOxMTujbz75bQRnGmXvsPig184kA%2B%2FcYp5fcJtnE5458YRsPD7H5%2BakvY6cYXe1NfgTRjTQtzDTdw%2FlYPRhbdIu9S04vrrswFg6ox2QqCXtdYe%2FZ5Cb%2BB%2B4dqxL6G0NExuRV61CFRfxRk6f%2B3L%2BZo7IbUR6Mu0t2bqcHRCg9Rme4OtJOJRoDssK1Gtdyk9Esch7dSuC20Xruf%2BRGYKTA9kxHQxkXz7RpZmv8Nz8P9XgLxUPzeVmpFpTP1FcVs%2BISCAh4N1Cjyp%2BRw3kvtDIa4oAJpXyF8Cl%2BezPDaWoejD2eI9YUPSrbOD9yUlNrrcnvUioskuz8KPG8IRPlgA6sjbHMUXpu1cLPLXkgFl4j5ryOVHlDdaDuIw35nYT3jWAMJPByL0GOqUBIFeWPDtjkdavxJKqSvPj5P%2FGOlOgD366jn3hcE%2BgABn3ORh5D91nZO3ODrxhDrBLYA8%2FHEgHsR3BbbTqSgepZzBNiy2id7bsWZnqp99InvbejJzkSdpVr1mmNPXsobl6DjA5B4MLjv2LCvRRb8YBoiUi10ptWhnwzqWO4YK70VD4%2BJg5OO9BI8%2FLvAPSeA4JJfg%2BehvL5pH%2FFXEOi9pj2cO1oRqi&X-Amz-Signature=414a91ba1a4b9a4671c8a86bff492c41a26cf5258726ede6390f803c15eb3e40&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPKTHWC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD87s7th7WaFa4XYuFEMvJTT3IGWk%2BBaaqn6m99bj205AIgIHjpuNKMdhlr7JNDsDdZDkCeEyQHvJYFW8FXkYrdhgEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKBSy161cZy%2BUwfJmircA6GdT9mm8zOelzDWLsnTscZShirNVx5UruKEwywue%2Fx79jXrFDxW%2Fa5u0FJpco10DO6Ud0IBc%2FxZZum1Bj313AzhMR01f5mWAzJMGioSC5iQkuwhUxG7%2F48WFUcOr8t9CXn2Wvo4gD%2FfdOa4Ekj3VqxVxl5egTLoFMFtpK%2FX09L4zg0fCEgaTBHhsQxlsv6x43Asl%2B9G0%2F2PzSFtL3IptDHyxZx%2BDwUMPSW7XJIvrAFhxwIySEYK8lBKsuuyWxOxMTujbz75bQRnGmXvsPig184kA%2B%2FcYp5fcJtnE5458YRsPD7H5%2BakvY6cYXe1NfgTRjTQtzDTdw%2FlYPRhbdIu9S04vrrswFg6ox2QqCXtdYe%2FZ5Cb%2BB%2B4dqxL6G0NExuRV61CFRfxRk6f%2B3L%2BZo7IbUR6Mu0t2bqcHRCg9Rme4OtJOJRoDssK1Gtdyk9Esch7dSuC20Xruf%2BRGYKTA9kxHQxkXz7RpZmv8Nz8P9XgLxUPzeVmpFpTP1FcVs%2BISCAh4N1Cjyp%2BRw3kvtDIa4oAJpXyF8Cl%2BezPDaWoejD2eI9YUPSrbOD9yUlNrrcnvUioskuz8KPG8IRPlgA6sjbHMUXpu1cLPLXkgFl4j5ryOVHlDdaDuIw35nYT3jWAMJPByL0GOqUBIFeWPDtjkdavxJKqSvPj5P%2FGOlOgD366jn3hcE%2BgABn3ORh5D91nZO3ODrxhDrBLYA8%2FHEgHsR3BbbTqSgepZzBNiy2id7bsWZnqp99InvbejJzkSdpVr1mmNPXsobl6DjA5B4MLjv2LCvRRb8YBoiUi10ptWhnwzqWO4YK70VD4%2BJg5OO9BI8%2FLvAPSeA4JJfg%2BehvL5pH%2FFXEOi9pj2cO1oRqi&X-Amz-Signature=97c44d83612dc35a1eaa61ef6eba2147fb9627669f52deca44d61e50fbce7081&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPKTHWC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD87s7th7WaFa4XYuFEMvJTT3IGWk%2BBaaqn6m99bj205AIgIHjpuNKMdhlr7JNDsDdZDkCeEyQHvJYFW8FXkYrdhgEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKBSy161cZy%2BUwfJmircA6GdT9mm8zOelzDWLsnTscZShirNVx5UruKEwywue%2Fx79jXrFDxW%2Fa5u0FJpco10DO6Ud0IBc%2FxZZum1Bj313AzhMR01f5mWAzJMGioSC5iQkuwhUxG7%2F48WFUcOr8t9CXn2Wvo4gD%2FfdOa4Ekj3VqxVxl5egTLoFMFtpK%2FX09L4zg0fCEgaTBHhsQxlsv6x43Asl%2B9G0%2F2PzSFtL3IptDHyxZx%2BDwUMPSW7XJIvrAFhxwIySEYK8lBKsuuyWxOxMTujbz75bQRnGmXvsPig184kA%2B%2FcYp5fcJtnE5458YRsPD7H5%2BakvY6cYXe1NfgTRjTQtzDTdw%2FlYPRhbdIu9S04vrrswFg6ox2QqCXtdYe%2FZ5Cb%2BB%2B4dqxL6G0NExuRV61CFRfxRk6f%2B3L%2BZo7IbUR6Mu0t2bqcHRCg9Rme4OtJOJRoDssK1Gtdyk9Esch7dSuC20Xruf%2BRGYKTA9kxHQxkXz7RpZmv8Nz8P9XgLxUPzeVmpFpTP1FcVs%2BISCAh4N1Cjyp%2BRw3kvtDIa4oAJpXyF8Cl%2BezPDaWoejD2eI9YUPSrbOD9yUlNrrcnvUioskuz8KPG8IRPlgA6sjbHMUXpu1cLPLXkgFl4j5ryOVHlDdaDuIw35nYT3jWAMJPByL0GOqUBIFeWPDtjkdavxJKqSvPj5P%2FGOlOgD366jn3hcE%2BgABn3ORh5D91nZO3ODrxhDrBLYA8%2FHEgHsR3BbbTqSgepZzBNiy2id7bsWZnqp99InvbejJzkSdpVr1mmNPXsobl6DjA5B4MLjv2LCvRRb8YBoiUi10ptWhnwzqWO4YK70VD4%2BJg5OO9BI8%2FLvAPSeA4JJfg%2BehvL5pH%2FFXEOi9pj2cO1oRqi&X-Amz-Signature=08e6fd3e4b726dd4473fc2e81bde706e73fb2b66a36dbe4a53986fb430f8905f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
