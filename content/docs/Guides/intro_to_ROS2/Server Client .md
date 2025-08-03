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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHEZ3LC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2F4%2Fp1TnHZXAVfvdguCERg35LqqmgyaWmflxKGagsdRAiAzoHGHLasISZt6Dl7JOhAmVBCxaLkvUyci8DlgGJBhfyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMFHn9uzjpnWK80QuCKtwDSiEzTgf%2Bf5%2BK3B3XMhAzsIrltfNJ1t7Fkw1KY2%2FWtQoIwnvGtbk4lNAJMpCI1TkA%2FS9V4SCN%2FHpL1cMM3iF0ppchje8qtsBaMo%2BNMqVW5aBHATo1VzLY%2F%2F6HaxvtO7LWP5o5sdx4BSNiKSadXYSsC4DeRZPvtYm3hm7q1iwCgnZFTGctGkMqO67bRf0G35mNL%2FiXInl8mKgo8FUiDGxroUeOehTDn0roR3xVh39KdxfGDaQ2oKPkT1VFmXqw0X1cOsjm9cqWKuwC4zr3ZDmyeDRaDP2sn9m6kymRv7kQrwi62sKMU5PFd8cu2%2Fb59YekDiruVbZkmD8Fmrj%2F5bClmi4QRKNDVs8%2F1RGTVo%2F2XR0STALEk3ndiKK2oqmFBEX%2FuIZHvjcdCiE82q7%2B6AoikSU8OQ7BYZ%2BTIfVvU6bvP1sL5V%2BM270bF%2Fs2wwrhfMupgl%2BydF0ZH81kGlDRhInpRwgGt8Z0eGHAQSqmUkf%2BtuQq8nVhbQFv1GkOzW8I1p%2BOIq1aBjBbq5XwSRndilSv9oNo474s44o9O5ZIKTwJoc3U%2FyqSjoSqAwKFbqKdqqCiU5EqnXsVgJelil12ZWKtJPLtFM8z5ooBSNQGwnLIld5NBTGBc%2B5yFSo%2BhmAw%2Btm%2BxAY6pgGsZha6OXRTNV8N%2F%2F4HY0aSOWkmAWjH%2BOETSO2P3gncargsJnu4VsldRww1UB6HyCzZeF6MhIZH1oYKcWFr2JdukM%2FWBzb8QZl1BK%2FYQ3hCcVcAV7%2BZfBYhp6yV9K0dMAM0S9O6ZfVBu7k0boGxIqB1N%2FTHfwOaOQe%2FDy8Y8QnjsAaB9xk02%2FVkFL2sK5D2aWFzfLQV9muAZRlmaEbwINFUGQV3jSX2&X-Amz-Signature=666697a8b0ea9610e7680e7cd64c0f204336adf3470c209d41ed0b5c91c10273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHEZ3LC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2F4%2Fp1TnHZXAVfvdguCERg35LqqmgyaWmflxKGagsdRAiAzoHGHLasISZt6Dl7JOhAmVBCxaLkvUyci8DlgGJBhfyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMFHn9uzjpnWK80QuCKtwDSiEzTgf%2Bf5%2BK3B3XMhAzsIrltfNJ1t7Fkw1KY2%2FWtQoIwnvGtbk4lNAJMpCI1TkA%2FS9V4SCN%2FHpL1cMM3iF0ppchje8qtsBaMo%2BNMqVW5aBHATo1VzLY%2F%2F6HaxvtO7LWP5o5sdx4BSNiKSadXYSsC4DeRZPvtYm3hm7q1iwCgnZFTGctGkMqO67bRf0G35mNL%2FiXInl8mKgo8FUiDGxroUeOehTDn0roR3xVh39KdxfGDaQ2oKPkT1VFmXqw0X1cOsjm9cqWKuwC4zr3ZDmyeDRaDP2sn9m6kymRv7kQrwi62sKMU5PFd8cu2%2Fb59YekDiruVbZkmD8Fmrj%2F5bClmi4QRKNDVs8%2F1RGTVo%2F2XR0STALEk3ndiKK2oqmFBEX%2FuIZHvjcdCiE82q7%2B6AoikSU8OQ7BYZ%2BTIfVvU6bvP1sL5V%2BM270bF%2Fs2wwrhfMupgl%2BydF0ZH81kGlDRhInpRwgGt8Z0eGHAQSqmUkf%2BtuQq8nVhbQFv1GkOzW8I1p%2BOIq1aBjBbq5XwSRndilSv9oNo474s44o9O5ZIKTwJoc3U%2FyqSjoSqAwKFbqKdqqCiU5EqnXsVgJelil12ZWKtJPLtFM8z5ooBSNQGwnLIld5NBTGBc%2B5yFSo%2BhmAw%2Btm%2BxAY6pgGsZha6OXRTNV8N%2F%2F4HY0aSOWkmAWjH%2BOETSO2P3gncargsJnu4VsldRww1UB6HyCzZeF6MhIZH1oYKcWFr2JdukM%2FWBzb8QZl1BK%2FYQ3hCcVcAV7%2BZfBYhp6yV9K0dMAM0S9O6ZfVBu7k0boGxIqB1N%2FTHfwOaOQe%2FDy8Y8QnjsAaB9xk02%2FVkFL2sK5D2aWFzfLQV9muAZRlmaEbwINFUGQV3jSX2&X-Amz-Signature=d7fdbac0404e9b7e6003c310529d734a437a6a67a78eb35f15a3729a74660512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHEZ3LC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2F4%2Fp1TnHZXAVfvdguCERg35LqqmgyaWmflxKGagsdRAiAzoHGHLasISZt6Dl7JOhAmVBCxaLkvUyci8DlgGJBhfyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMFHn9uzjpnWK80QuCKtwDSiEzTgf%2Bf5%2BK3B3XMhAzsIrltfNJ1t7Fkw1KY2%2FWtQoIwnvGtbk4lNAJMpCI1TkA%2FS9V4SCN%2FHpL1cMM3iF0ppchje8qtsBaMo%2BNMqVW5aBHATo1VzLY%2F%2F6HaxvtO7LWP5o5sdx4BSNiKSadXYSsC4DeRZPvtYm3hm7q1iwCgnZFTGctGkMqO67bRf0G35mNL%2FiXInl8mKgo8FUiDGxroUeOehTDn0roR3xVh39KdxfGDaQ2oKPkT1VFmXqw0X1cOsjm9cqWKuwC4zr3ZDmyeDRaDP2sn9m6kymRv7kQrwi62sKMU5PFd8cu2%2Fb59YekDiruVbZkmD8Fmrj%2F5bClmi4QRKNDVs8%2F1RGTVo%2F2XR0STALEk3ndiKK2oqmFBEX%2FuIZHvjcdCiE82q7%2B6AoikSU8OQ7BYZ%2BTIfVvU6bvP1sL5V%2BM270bF%2Fs2wwrhfMupgl%2BydF0ZH81kGlDRhInpRwgGt8Z0eGHAQSqmUkf%2BtuQq8nVhbQFv1GkOzW8I1p%2BOIq1aBjBbq5XwSRndilSv9oNo474s44o9O5ZIKTwJoc3U%2FyqSjoSqAwKFbqKdqqCiU5EqnXsVgJelil12ZWKtJPLtFM8z5ooBSNQGwnLIld5NBTGBc%2B5yFSo%2BhmAw%2Btm%2BxAY6pgGsZha6OXRTNV8N%2F%2F4HY0aSOWkmAWjH%2BOETSO2P3gncargsJnu4VsldRww1UB6HyCzZeF6MhIZH1oYKcWFr2JdukM%2FWBzb8QZl1BK%2FYQ3hCcVcAV7%2BZfBYhp6yV9K0dMAM0S9O6ZfVBu7k0boGxIqB1N%2FTHfwOaOQe%2FDy8Y8QnjsAaB9xk02%2FVkFL2sK5D2aWFzfLQV9muAZRlmaEbwINFUGQV3jSX2&X-Amz-Signature=1a5eba8720f85def5393c96bef2dfe03cadc37d7f6e58856c35837c94b6a4e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHEZ3LC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2F4%2Fp1TnHZXAVfvdguCERg35LqqmgyaWmflxKGagsdRAiAzoHGHLasISZt6Dl7JOhAmVBCxaLkvUyci8DlgGJBhfyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMFHn9uzjpnWK80QuCKtwDSiEzTgf%2Bf5%2BK3B3XMhAzsIrltfNJ1t7Fkw1KY2%2FWtQoIwnvGtbk4lNAJMpCI1TkA%2FS9V4SCN%2FHpL1cMM3iF0ppchje8qtsBaMo%2BNMqVW5aBHATo1VzLY%2F%2F6HaxvtO7LWP5o5sdx4BSNiKSadXYSsC4DeRZPvtYm3hm7q1iwCgnZFTGctGkMqO67bRf0G35mNL%2FiXInl8mKgo8FUiDGxroUeOehTDn0roR3xVh39KdxfGDaQ2oKPkT1VFmXqw0X1cOsjm9cqWKuwC4zr3ZDmyeDRaDP2sn9m6kymRv7kQrwi62sKMU5PFd8cu2%2Fb59YekDiruVbZkmD8Fmrj%2F5bClmi4QRKNDVs8%2F1RGTVo%2F2XR0STALEk3ndiKK2oqmFBEX%2FuIZHvjcdCiE82q7%2B6AoikSU8OQ7BYZ%2BTIfVvU6bvP1sL5V%2BM270bF%2Fs2wwrhfMupgl%2BydF0ZH81kGlDRhInpRwgGt8Z0eGHAQSqmUkf%2BtuQq8nVhbQFv1GkOzW8I1p%2BOIq1aBjBbq5XwSRndilSv9oNo474s44o9O5ZIKTwJoc3U%2FyqSjoSqAwKFbqKdqqCiU5EqnXsVgJelil12ZWKtJPLtFM8z5ooBSNQGwnLIld5NBTGBc%2B5yFSo%2BhmAw%2Btm%2BxAY6pgGsZha6OXRTNV8N%2F%2F4HY0aSOWkmAWjH%2BOETSO2P3gncargsJnu4VsldRww1UB6HyCzZeF6MhIZH1oYKcWFr2JdukM%2FWBzb8QZl1BK%2FYQ3hCcVcAV7%2BZfBYhp6yV9K0dMAM0S9O6ZfVBu7k0boGxIqB1N%2FTHfwOaOQe%2FDy8Y8QnjsAaB9xk02%2FVkFL2sK5D2aWFzfLQV9muAZRlmaEbwINFUGQV3jSX2&X-Amz-Signature=ef73055ded2eb755cc76d401e7407fa95d2ab7bee62eacee15d5d028280ed8a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHEZ3LC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2F4%2Fp1TnHZXAVfvdguCERg35LqqmgyaWmflxKGagsdRAiAzoHGHLasISZt6Dl7JOhAmVBCxaLkvUyci8DlgGJBhfyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMFHn9uzjpnWK80QuCKtwDSiEzTgf%2Bf5%2BK3B3XMhAzsIrltfNJ1t7Fkw1KY2%2FWtQoIwnvGtbk4lNAJMpCI1TkA%2FS9V4SCN%2FHpL1cMM3iF0ppchje8qtsBaMo%2BNMqVW5aBHATo1VzLY%2F%2F6HaxvtO7LWP5o5sdx4BSNiKSadXYSsC4DeRZPvtYm3hm7q1iwCgnZFTGctGkMqO67bRf0G35mNL%2FiXInl8mKgo8FUiDGxroUeOehTDn0roR3xVh39KdxfGDaQ2oKPkT1VFmXqw0X1cOsjm9cqWKuwC4zr3ZDmyeDRaDP2sn9m6kymRv7kQrwi62sKMU5PFd8cu2%2Fb59YekDiruVbZkmD8Fmrj%2F5bClmi4QRKNDVs8%2F1RGTVo%2F2XR0STALEk3ndiKK2oqmFBEX%2FuIZHvjcdCiE82q7%2B6AoikSU8OQ7BYZ%2BTIfVvU6bvP1sL5V%2BM270bF%2Fs2wwrhfMupgl%2BydF0ZH81kGlDRhInpRwgGt8Z0eGHAQSqmUkf%2BtuQq8nVhbQFv1GkOzW8I1p%2BOIq1aBjBbq5XwSRndilSv9oNo474s44o9O5ZIKTwJoc3U%2FyqSjoSqAwKFbqKdqqCiU5EqnXsVgJelil12ZWKtJPLtFM8z5ooBSNQGwnLIld5NBTGBc%2B5yFSo%2BhmAw%2Btm%2BxAY6pgGsZha6OXRTNV8N%2F%2F4HY0aSOWkmAWjH%2BOETSO2P3gncargsJnu4VsldRww1UB6HyCzZeF6MhIZH1oYKcWFr2JdukM%2FWBzb8QZl1BK%2FYQ3hCcVcAV7%2BZfBYhp6yV9K0dMAM0S9O6ZfVBu7k0boGxIqB1N%2FTHfwOaOQe%2FDy8Y8QnjsAaB9xk02%2FVkFL2sK5D2aWFzfLQV9muAZRlmaEbwINFUGQV3jSX2&X-Amz-Signature=3df2b55ea2535ad3d36c7fc76818fd834b6d20e55b6c07fce38250166ade55a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
