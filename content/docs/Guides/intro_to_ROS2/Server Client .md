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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSBWVUA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsLyqM5pW6fboCs%2F7mDxv8qYSkWnEt9Tf3Sn29DnN%2BAAiB%2FxITKnF%2Br9sSYu%2FXmtakJfsPhJvn9YvMB57yOa5i%2BUCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMMpm15YGXvku6%2FvukKtwDq2Qtc14Tn3%2F92MH5LTHPM8jH7HiDLCkSe%2FWiiy9hWUQE5YCHlUAdB3%2B7XVBbktG23gh4MOszK3K2Hw%2Fp02lGNXM%2F8K530ncM8joEx7GOP8oRe8MKDwmxGlJWpuhqo%2BmouE%2FaULpfe8D5%2FyThpM4553HM8P8l5S%2Bf70nsLKrvHx7BShh%2FYUqDPvAoN2F32xVxWswRkML0ZJfWSZNKYQ%2BNhHFh5gzndQqyKbxmPBeNwMcNCbwzTTHwDTjwbOm2XblPe%2FR324JNn69JLvuyyB%2FQFupvyw1b9if4h80%2FgHx7xaeYHCH1K9gaRha0lSXV5yFLjOVIDoeFT4KyMAC4NHQvcaDz9jspk1EPCMmQb013vGPeIRTBi99SsJpmte%2FXlcZXg%2FuCrn4z9aUazu8Z0QBb%2BSvccoDYfwVkErtLYk6n2xGcTFiwOLVWQwldYzBnmMgCFBrRjfxcrDwJL0AVMg95BNir6s1MvEbvUFTMN0aPfsKrCcK9tz4X4UXq%2Fv9CKqSZgd6lnaPBUScp7TnyoPppx7S0tWlKhSFx%2B%2BbGUlo%2FALVBfxs%2F%2Bf4ePl46wXugUy9%2BquIgIP7hjlNlIZ7udsgZmtnFI56xfhDlGBfF4SACzXP4tIXcYNI3rLYFrUIw5ZbUwQY6pgG6eXlYisGWQk7BJYUQdsn1U1WXu252wg4zuJO%2FPQuqWwtbC5hhks4qJjkXXhM5mayIEb%2Fc3KOCj%2BaFQXP59Wk5%2Bo%2BR1%2BbhN%2BymiGZypB8jmmx17MAezQn%2BnzNVBN0XxTVjiuDUNK8KpdU5ncy44PHqNRNwcwiyx8kYDsS6gJZ%2BU2s9UpZwWjvmePd9Ci2e0P4eD1P5MMYY9UwZteK%2BE6a5HP%2BMZ333&X-Amz-Signature=48abf2dde7cef8aecaa2c708f0e397a1188bb6ce2e32f94fd4201784a7c9ab63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSBWVUA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsLyqM5pW6fboCs%2F7mDxv8qYSkWnEt9Tf3Sn29DnN%2BAAiB%2FxITKnF%2Br9sSYu%2FXmtakJfsPhJvn9YvMB57yOa5i%2BUCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMMpm15YGXvku6%2FvukKtwDq2Qtc14Tn3%2F92MH5LTHPM8jH7HiDLCkSe%2FWiiy9hWUQE5YCHlUAdB3%2B7XVBbktG23gh4MOszK3K2Hw%2Fp02lGNXM%2F8K530ncM8joEx7GOP8oRe8MKDwmxGlJWpuhqo%2BmouE%2FaULpfe8D5%2FyThpM4553HM8P8l5S%2Bf70nsLKrvHx7BShh%2FYUqDPvAoN2F32xVxWswRkML0ZJfWSZNKYQ%2BNhHFh5gzndQqyKbxmPBeNwMcNCbwzTTHwDTjwbOm2XblPe%2FR324JNn69JLvuyyB%2FQFupvyw1b9if4h80%2FgHx7xaeYHCH1K9gaRha0lSXV5yFLjOVIDoeFT4KyMAC4NHQvcaDz9jspk1EPCMmQb013vGPeIRTBi99SsJpmte%2FXlcZXg%2FuCrn4z9aUazu8Z0QBb%2BSvccoDYfwVkErtLYk6n2xGcTFiwOLVWQwldYzBnmMgCFBrRjfxcrDwJL0AVMg95BNir6s1MvEbvUFTMN0aPfsKrCcK9tz4X4UXq%2Fv9CKqSZgd6lnaPBUScp7TnyoPppx7S0tWlKhSFx%2B%2BbGUlo%2FALVBfxs%2F%2Bf4ePl46wXugUy9%2BquIgIP7hjlNlIZ7udsgZmtnFI56xfhDlGBfF4SACzXP4tIXcYNI3rLYFrUIw5ZbUwQY6pgG6eXlYisGWQk7BJYUQdsn1U1WXu252wg4zuJO%2FPQuqWwtbC5hhks4qJjkXXhM5mayIEb%2Fc3KOCj%2BaFQXP59Wk5%2Bo%2BR1%2BbhN%2BymiGZypB8jmmx17MAezQn%2BnzNVBN0XxTVjiuDUNK8KpdU5ncy44PHqNRNwcwiyx8kYDsS6gJZ%2BU2s9UpZwWjvmePd9Ci2e0P4eD1P5MMYY9UwZteK%2BE6a5HP%2BMZ333&X-Amz-Signature=0a40bb25a47ab86a28fde565779429374b3dc429c7aa0b9bcf29bcf067906ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSBWVUA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsLyqM5pW6fboCs%2F7mDxv8qYSkWnEt9Tf3Sn29DnN%2BAAiB%2FxITKnF%2Br9sSYu%2FXmtakJfsPhJvn9YvMB57yOa5i%2BUCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMMpm15YGXvku6%2FvukKtwDq2Qtc14Tn3%2F92MH5LTHPM8jH7HiDLCkSe%2FWiiy9hWUQE5YCHlUAdB3%2B7XVBbktG23gh4MOszK3K2Hw%2Fp02lGNXM%2F8K530ncM8joEx7GOP8oRe8MKDwmxGlJWpuhqo%2BmouE%2FaULpfe8D5%2FyThpM4553HM8P8l5S%2Bf70nsLKrvHx7BShh%2FYUqDPvAoN2F32xVxWswRkML0ZJfWSZNKYQ%2BNhHFh5gzndQqyKbxmPBeNwMcNCbwzTTHwDTjwbOm2XblPe%2FR324JNn69JLvuyyB%2FQFupvyw1b9if4h80%2FgHx7xaeYHCH1K9gaRha0lSXV5yFLjOVIDoeFT4KyMAC4NHQvcaDz9jspk1EPCMmQb013vGPeIRTBi99SsJpmte%2FXlcZXg%2FuCrn4z9aUazu8Z0QBb%2BSvccoDYfwVkErtLYk6n2xGcTFiwOLVWQwldYzBnmMgCFBrRjfxcrDwJL0AVMg95BNir6s1MvEbvUFTMN0aPfsKrCcK9tz4X4UXq%2Fv9CKqSZgd6lnaPBUScp7TnyoPppx7S0tWlKhSFx%2B%2BbGUlo%2FALVBfxs%2F%2Bf4ePl46wXugUy9%2BquIgIP7hjlNlIZ7udsgZmtnFI56xfhDlGBfF4SACzXP4tIXcYNI3rLYFrUIw5ZbUwQY6pgG6eXlYisGWQk7BJYUQdsn1U1WXu252wg4zuJO%2FPQuqWwtbC5hhks4qJjkXXhM5mayIEb%2Fc3KOCj%2BaFQXP59Wk5%2Bo%2BR1%2BbhN%2BymiGZypB8jmmx17MAezQn%2BnzNVBN0XxTVjiuDUNK8KpdU5ncy44PHqNRNwcwiyx8kYDsS6gJZ%2BU2s9UpZwWjvmePd9Ci2e0P4eD1P5MMYY9UwZteK%2BE6a5HP%2BMZ333&X-Amz-Signature=ea2e4a564192ceced7ef17a5cde349f19b6d5bce4a403175a2ac299599f304ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSBWVUA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsLyqM5pW6fboCs%2F7mDxv8qYSkWnEt9Tf3Sn29DnN%2BAAiB%2FxITKnF%2Br9sSYu%2FXmtakJfsPhJvn9YvMB57yOa5i%2BUCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMMpm15YGXvku6%2FvukKtwDq2Qtc14Tn3%2F92MH5LTHPM8jH7HiDLCkSe%2FWiiy9hWUQE5YCHlUAdB3%2B7XVBbktG23gh4MOszK3K2Hw%2Fp02lGNXM%2F8K530ncM8joEx7GOP8oRe8MKDwmxGlJWpuhqo%2BmouE%2FaULpfe8D5%2FyThpM4553HM8P8l5S%2Bf70nsLKrvHx7BShh%2FYUqDPvAoN2F32xVxWswRkML0ZJfWSZNKYQ%2BNhHFh5gzndQqyKbxmPBeNwMcNCbwzTTHwDTjwbOm2XblPe%2FR324JNn69JLvuyyB%2FQFupvyw1b9if4h80%2FgHx7xaeYHCH1K9gaRha0lSXV5yFLjOVIDoeFT4KyMAC4NHQvcaDz9jspk1EPCMmQb013vGPeIRTBi99SsJpmte%2FXlcZXg%2FuCrn4z9aUazu8Z0QBb%2BSvccoDYfwVkErtLYk6n2xGcTFiwOLVWQwldYzBnmMgCFBrRjfxcrDwJL0AVMg95BNir6s1MvEbvUFTMN0aPfsKrCcK9tz4X4UXq%2Fv9CKqSZgd6lnaPBUScp7TnyoPppx7S0tWlKhSFx%2B%2BbGUlo%2FALVBfxs%2F%2Bf4ePl46wXugUy9%2BquIgIP7hjlNlIZ7udsgZmtnFI56xfhDlGBfF4SACzXP4tIXcYNI3rLYFrUIw5ZbUwQY6pgG6eXlYisGWQk7BJYUQdsn1U1WXu252wg4zuJO%2FPQuqWwtbC5hhks4qJjkXXhM5mayIEb%2Fc3KOCj%2BaFQXP59Wk5%2Bo%2BR1%2BbhN%2BymiGZypB8jmmx17MAezQn%2BnzNVBN0XxTVjiuDUNK8KpdU5ncy44PHqNRNwcwiyx8kYDsS6gJZ%2BU2s9UpZwWjvmePd9Ci2e0P4eD1P5MMYY9UwZteK%2BE6a5HP%2BMZ333&X-Amz-Signature=5ac73c15cbb2e3cdf7f753512546d5bebeeb7a6d148b2e3fe7201f492995a439&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSBWVUA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsLyqM5pW6fboCs%2F7mDxv8qYSkWnEt9Tf3Sn29DnN%2BAAiB%2FxITKnF%2Br9sSYu%2FXmtakJfsPhJvn9YvMB57yOa5i%2BUCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMMpm15YGXvku6%2FvukKtwDq2Qtc14Tn3%2F92MH5LTHPM8jH7HiDLCkSe%2FWiiy9hWUQE5YCHlUAdB3%2B7XVBbktG23gh4MOszK3K2Hw%2Fp02lGNXM%2F8K530ncM8joEx7GOP8oRe8MKDwmxGlJWpuhqo%2BmouE%2FaULpfe8D5%2FyThpM4553HM8P8l5S%2Bf70nsLKrvHx7BShh%2FYUqDPvAoN2F32xVxWswRkML0ZJfWSZNKYQ%2BNhHFh5gzndQqyKbxmPBeNwMcNCbwzTTHwDTjwbOm2XblPe%2FR324JNn69JLvuyyB%2FQFupvyw1b9if4h80%2FgHx7xaeYHCH1K9gaRha0lSXV5yFLjOVIDoeFT4KyMAC4NHQvcaDz9jspk1EPCMmQb013vGPeIRTBi99SsJpmte%2FXlcZXg%2FuCrn4z9aUazu8Z0QBb%2BSvccoDYfwVkErtLYk6n2xGcTFiwOLVWQwldYzBnmMgCFBrRjfxcrDwJL0AVMg95BNir6s1MvEbvUFTMN0aPfsKrCcK9tz4X4UXq%2Fv9CKqSZgd6lnaPBUScp7TnyoPppx7S0tWlKhSFx%2B%2BbGUlo%2FALVBfxs%2F%2Bf4ePl46wXugUy9%2BquIgIP7hjlNlIZ7udsgZmtnFI56xfhDlGBfF4SACzXP4tIXcYNI3rLYFrUIw5ZbUwQY6pgG6eXlYisGWQk7BJYUQdsn1U1WXu252wg4zuJO%2FPQuqWwtbC5hhks4qJjkXXhM5mayIEb%2Fc3KOCj%2BaFQXP59Wk5%2Bo%2BR1%2BbhN%2BymiGZypB8jmmx17MAezQn%2BnzNVBN0XxTVjiuDUNK8KpdU5ncy44PHqNRNwcwiyx8kYDsS6gJZ%2BU2s9UpZwWjvmePd9Ci2e0P4eD1P5MMYY9UwZteK%2BE6a5HP%2BMZ333&X-Amz-Signature=c5d5bbfc64dab8889d300823f8d42a38dc7adde0c74eb6667f99f5a65b38ae70&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
