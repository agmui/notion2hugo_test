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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K3UPZGV%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHYohZqKXerwemGidP1aqUrKcLZK2R2NRwnxtn97oaWMAiEAhGreyeq2%2BssJwnWZe9m5R15kUbkjosy4JmS%2B%2BKehe74q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNXfVVebwwhp6DJsXyrcA7YAa7cRmDovc2wv7g7%2FZ0vav4HrF6ErdfUAbn0qOF37dKYEutYXBDirNYvhE6XKbS6hIsGSY4OcHoGjaI6auPYzRMHoYAoaKM3wJtnXYgLra5jUOsbHNgVX%2B8kR1tt2Ox%2BT52KY0p4KJr5bTHW9yE5KLKIcoc8tG0yqEFtVxcrmtOQDMFHorc8YGgjIseWmEgE1MqIWuxFeeOC4TJ0iqIdIcc9jNoVk1d1D25Xj5T4G%2Bt6WaZYjatrQIiwHyKLXoefp%2B4iYFqlP0GmAIM%2BV0F5uvT4dXzZ6eOtIYRXyV%2BlXwUqZOsxZAoVbXQRZG%2F%2BChxDGvSm0k34GDzbLyJHeaZhsqVBFY%2FRi3JlciU0V8mowNZiz6f%2Fx%2Bv6lquxV6ujv%2FHPNn%2Fg79ILTWySYszJAvghIkDe8Hvwzr86TivYsFw5cXQg9v%2FceVFdQtO5Q%2Fzo5MjFfFhHTzRfgr7wWfpQkbuUlwu9kwv%2BFYmTlm6Us2hLSP1fkAJIZxCOZgBoCMh91CIDDFrsRvvGqwTdMdw28%2B8MHsbce7jGrL%2FQwjbUhsQ9kF4V5NcpJG5BXtOv003mrDxf2dVbXJ%2FusjHAp9oouwy5HaslVcNLyhACa6Yru0TqzC%2BJigCown%2BFftXIKMPipu8IGOqUBowAoRME3o3IOXhNFWH9VTGjL7mY3lodBaN4CXzeklEmNegIRgFwGozyZmGV48B7ITNqgpaldtmkaxjqCNael0ACe2eGXkjo6hK4%2F9YYNCZlOcIkjug5CceNo6ABeTF64rLCcuZLNzTEHPv3LX579wG%2BQQIIcv%2FQCDHdU2ZNk8EpRFRfdF1R89QEaSJZ31UZdLWtUh%2FudjRJHZ6DZXSBN0lsNTdKC&X-Amz-Signature=6a9b4b8e06655bf65d690f64b6110304233ce00ac6f33cebf010efc7c77ec27a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K3UPZGV%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHYohZqKXerwemGidP1aqUrKcLZK2R2NRwnxtn97oaWMAiEAhGreyeq2%2BssJwnWZe9m5R15kUbkjosy4JmS%2B%2BKehe74q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNXfVVebwwhp6DJsXyrcA7YAa7cRmDovc2wv7g7%2FZ0vav4HrF6ErdfUAbn0qOF37dKYEutYXBDirNYvhE6XKbS6hIsGSY4OcHoGjaI6auPYzRMHoYAoaKM3wJtnXYgLra5jUOsbHNgVX%2B8kR1tt2Ox%2BT52KY0p4KJr5bTHW9yE5KLKIcoc8tG0yqEFtVxcrmtOQDMFHorc8YGgjIseWmEgE1MqIWuxFeeOC4TJ0iqIdIcc9jNoVk1d1D25Xj5T4G%2Bt6WaZYjatrQIiwHyKLXoefp%2B4iYFqlP0GmAIM%2BV0F5uvT4dXzZ6eOtIYRXyV%2BlXwUqZOsxZAoVbXQRZG%2F%2BChxDGvSm0k34GDzbLyJHeaZhsqVBFY%2FRi3JlciU0V8mowNZiz6f%2Fx%2Bv6lquxV6ujv%2FHPNn%2Fg79ILTWySYszJAvghIkDe8Hvwzr86TivYsFw5cXQg9v%2FceVFdQtO5Q%2Fzo5MjFfFhHTzRfgr7wWfpQkbuUlwu9kwv%2BFYmTlm6Us2hLSP1fkAJIZxCOZgBoCMh91CIDDFrsRvvGqwTdMdw28%2B8MHsbce7jGrL%2FQwjbUhsQ9kF4V5NcpJG5BXtOv003mrDxf2dVbXJ%2FusjHAp9oouwy5HaslVcNLyhACa6Yru0TqzC%2BJigCown%2BFftXIKMPipu8IGOqUBowAoRME3o3IOXhNFWH9VTGjL7mY3lodBaN4CXzeklEmNegIRgFwGozyZmGV48B7ITNqgpaldtmkaxjqCNael0ACe2eGXkjo6hK4%2F9YYNCZlOcIkjug5CceNo6ABeTF64rLCcuZLNzTEHPv3LX579wG%2BQQIIcv%2FQCDHdU2ZNk8EpRFRfdF1R89QEaSJZ31UZdLWtUh%2FudjRJHZ6DZXSBN0lsNTdKC&X-Amz-Signature=e227c4dcea0c43d61cc7fbbb7f92aed789ea2f202f9ee4ae4544d57cb2d5948e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K3UPZGV%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHYohZqKXerwemGidP1aqUrKcLZK2R2NRwnxtn97oaWMAiEAhGreyeq2%2BssJwnWZe9m5R15kUbkjosy4JmS%2B%2BKehe74q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNXfVVebwwhp6DJsXyrcA7YAa7cRmDovc2wv7g7%2FZ0vav4HrF6ErdfUAbn0qOF37dKYEutYXBDirNYvhE6XKbS6hIsGSY4OcHoGjaI6auPYzRMHoYAoaKM3wJtnXYgLra5jUOsbHNgVX%2B8kR1tt2Ox%2BT52KY0p4KJr5bTHW9yE5KLKIcoc8tG0yqEFtVxcrmtOQDMFHorc8YGgjIseWmEgE1MqIWuxFeeOC4TJ0iqIdIcc9jNoVk1d1D25Xj5T4G%2Bt6WaZYjatrQIiwHyKLXoefp%2B4iYFqlP0GmAIM%2BV0F5uvT4dXzZ6eOtIYRXyV%2BlXwUqZOsxZAoVbXQRZG%2F%2BChxDGvSm0k34GDzbLyJHeaZhsqVBFY%2FRi3JlciU0V8mowNZiz6f%2Fx%2Bv6lquxV6ujv%2FHPNn%2Fg79ILTWySYszJAvghIkDe8Hvwzr86TivYsFw5cXQg9v%2FceVFdQtO5Q%2Fzo5MjFfFhHTzRfgr7wWfpQkbuUlwu9kwv%2BFYmTlm6Us2hLSP1fkAJIZxCOZgBoCMh91CIDDFrsRvvGqwTdMdw28%2B8MHsbce7jGrL%2FQwjbUhsQ9kF4V5NcpJG5BXtOv003mrDxf2dVbXJ%2FusjHAp9oouwy5HaslVcNLyhACa6Yru0TqzC%2BJigCown%2BFftXIKMPipu8IGOqUBowAoRME3o3IOXhNFWH9VTGjL7mY3lodBaN4CXzeklEmNegIRgFwGozyZmGV48B7ITNqgpaldtmkaxjqCNael0ACe2eGXkjo6hK4%2F9YYNCZlOcIkjug5CceNo6ABeTF64rLCcuZLNzTEHPv3LX579wG%2BQQIIcv%2FQCDHdU2ZNk8EpRFRfdF1R89QEaSJZ31UZdLWtUh%2FudjRJHZ6DZXSBN0lsNTdKC&X-Amz-Signature=32547379783066fb4cf89f4b38f59a2ec1775163469763877e646933636c2fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K3UPZGV%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHYohZqKXerwemGidP1aqUrKcLZK2R2NRwnxtn97oaWMAiEAhGreyeq2%2BssJwnWZe9m5R15kUbkjosy4JmS%2B%2BKehe74q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNXfVVebwwhp6DJsXyrcA7YAa7cRmDovc2wv7g7%2FZ0vav4HrF6ErdfUAbn0qOF37dKYEutYXBDirNYvhE6XKbS6hIsGSY4OcHoGjaI6auPYzRMHoYAoaKM3wJtnXYgLra5jUOsbHNgVX%2B8kR1tt2Ox%2BT52KY0p4KJr5bTHW9yE5KLKIcoc8tG0yqEFtVxcrmtOQDMFHorc8YGgjIseWmEgE1MqIWuxFeeOC4TJ0iqIdIcc9jNoVk1d1D25Xj5T4G%2Bt6WaZYjatrQIiwHyKLXoefp%2B4iYFqlP0GmAIM%2BV0F5uvT4dXzZ6eOtIYRXyV%2BlXwUqZOsxZAoVbXQRZG%2F%2BChxDGvSm0k34GDzbLyJHeaZhsqVBFY%2FRi3JlciU0V8mowNZiz6f%2Fx%2Bv6lquxV6ujv%2FHPNn%2Fg79ILTWySYszJAvghIkDe8Hvwzr86TivYsFw5cXQg9v%2FceVFdQtO5Q%2Fzo5MjFfFhHTzRfgr7wWfpQkbuUlwu9kwv%2BFYmTlm6Us2hLSP1fkAJIZxCOZgBoCMh91CIDDFrsRvvGqwTdMdw28%2B8MHsbce7jGrL%2FQwjbUhsQ9kF4V5NcpJG5BXtOv003mrDxf2dVbXJ%2FusjHAp9oouwy5HaslVcNLyhACa6Yru0TqzC%2BJigCown%2BFftXIKMPipu8IGOqUBowAoRME3o3IOXhNFWH9VTGjL7mY3lodBaN4CXzeklEmNegIRgFwGozyZmGV48B7ITNqgpaldtmkaxjqCNael0ACe2eGXkjo6hK4%2F9YYNCZlOcIkjug5CceNo6ABeTF64rLCcuZLNzTEHPv3LX579wG%2BQQIIcv%2FQCDHdU2ZNk8EpRFRfdF1R89QEaSJZ31UZdLWtUh%2FudjRJHZ6DZXSBN0lsNTdKC&X-Amz-Signature=387a320dd295452986f7feeabba73125393586eed53b577d25d7b1b6c797c7b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K3UPZGV%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHYohZqKXerwemGidP1aqUrKcLZK2R2NRwnxtn97oaWMAiEAhGreyeq2%2BssJwnWZe9m5R15kUbkjosy4JmS%2B%2BKehe74q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNXfVVebwwhp6DJsXyrcA7YAa7cRmDovc2wv7g7%2FZ0vav4HrF6ErdfUAbn0qOF37dKYEutYXBDirNYvhE6XKbS6hIsGSY4OcHoGjaI6auPYzRMHoYAoaKM3wJtnXYgLra5jUOsbHNgVX%2B8kR1tt2Ox%2BT52KY0p4KJr5bTHW9yE5KLKIcoc8tG0yqEFtVxcrmtOQDMFHorc8YGgjIseWmEgE1MqIWuxFeeOC4TJ0iqIdIcc9jNoVk1d1D25Xj5T4G%2Bt6WaZYjatrQIiwHyKLXoefp%2B4iYFqlP0GmAIM%2BV0F5uvT4dXzZ6eOtIYRXyV%2BlXwUqZOsxZAoVbXQRZG%2F%2BChxDGvSm0k34GDzbLyJHeaZhsqVBFY%2FRi3JlciU0V8mowNZiz6f%2Fx%2Bv6lquxV6ujv%2FHPNn%2Fg79ILTWySYszJAvghIkDe8Hvwzr86TivYsFw5cXQg9v%2FceVFdQtO5Q%2Fzo5MjFfFhHTzRfgr7wWfpQkbuUlwu9kwv%2BFYmTlm6Us2hLSP1fkAJIZxCOZgBoCMh91CIDDFrsRvvGqwTdMdw28%2B8MHsbce7jGrL%2FQwjbUhsQ9kF4V5NcpJG5BXtOv003mrDxf2dVbXJ%2FusjHAp9oouwy5HaslVcNLyhACa6Yru0TqzC%2BJigCown%2BFftXIKMPipu8IGOqUBowAoRME3o3IOXhNFWH9VTGjL7mY3lodBaN4CXzeklEmNegIRgFwGozyZmGV48B7ITNqgpaldtmkaxjqCNael0ACe2eGXkjo6hK4%2F9YYNCZlOcIkjug5CceNo6ABeTF64rLCcuZLNzTEHPv3LX579wG%2BQQIIcv%2FQCDHdU2ZNk8EpRFRfdF1R89QEaSJZ31UZdLWtUh%2FudjRJHZ6DZXSBN0lsNTdKC&X-Amz-Signature=febc28d5e390a4e22d0e0b56d9bbee64e55174391cdc6e5092b0c2a073fe89c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
