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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYEBJ2PU%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdcvRk6IV780LWjov5LTIeZ8BsCMSboxo4cTxL50JaNAiEAwEWla84CIxrtFt3Ja2ZZaWrfXg7Lr4shGRejBMf7BmQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FGvxX29Bgy1tFHGyrcA2lT%2BBNgNyAn6%2BtU227r2C08vUzGDHUdmzTsI7mYMs8EEwFtls%2FHocSHe%2Fx83wuAA942tQ9HaCtHLrpZsNjEDNSP7R4Z6weDDE6m3wKJKrQbQPJj%2BRsZgMroUJ8jkv0I%2FmbLd%2BoHnCDCBquLdhunhQtNj5d0hrAsH%2FVDOKGF6XpV3n7mPvVZR2gVGB0uJem%2BiVwbvlq70zpsm9I22yN%2Bad7xeaHk2ubLIrWW8KkXdgkvKySIwbPxFG3eG08%2BXxRislroE87thhIs27LSrZenGk8dd6lo2e40O8wTTwHMrQ3h40%2F%2Fn2Ea3OvBA3IUXm98wZ5Qgbyo3UNbICzOFF4BI%2Fo5hCEDz2Ii1VjoU%2BkbpHS3xTn2eDR7hqZGNkh%2BvPHyyJBM9zq2jYA8OUOnze1Z6ZFfzGlPOqscmQu9simgvH%2BwtYppK6XO5ywvfps6nLP%2Bu2PqyXF5x2Lp2YOq1WJgvnpqswlpkoDOy4b%2Bg0Xh4mfB%2BElcgQm%2BRCkaoMucZOkqUeyfwpNFtd9MQRs7C6zrCQr%2F%2F2UwEpG6RgyKpDwgPkvUDVnqHxABZqcDXeYSvXngw6Xa7KnvLS1b19RI2NIk6lLeDvKWdXq%2BVhThT%2B3XdRzYJNvp5OYf29Z9UkcZMM68%2B7wGOqUB9Ekujm0QOAvDvDMxrpsvTfwH07jVzXTs5nxKryjqy%2B4d5MrlcDpMHEgRk7siHIv8R7zxfCe8Q2iloENXMJ1pmPzwesWAXyU86xmeZhS3p%2FeYHK0E5GNmYEQElRlP%2FN0k0gYJDzuaH8teLetexydDd%2FtTNlBECSavpnp6xsMpiL0MD945DbwrMDNLzKEh1m6w1wpX27NIXKpWIa36uALsmjuhdRt6&X-Amz-Signature=46e40f6a07e27eb08ec170459c655257f72cc3c4ebd5812582e46fea7efd5dea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYEBJ2PU%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdcvRk6IV780LWjov5LTIeZ8BsCMSboxo4cTxL50JaNAiEAwEWla84CIxrtFt3Ja2ZZaWrfXg7Lr4shGRejBMf7BmQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FGvxX29Bgy1tFHGyrcA2lT%2BBNgNyAn6%2BtU227r2C08vUzGDHUdmzTsI7mYMs8EEwFtls%2FHocSHe%2Fx83wuAA942tQ9HaCtHLrpZsNjEDNSP7R4Z6weDDE6m3wKJKrQbQPJj%2BRsZgMroUJ8jkv0I%2FmbLd%2BoHnCDCBquLdhunhQtNj5d0hrAsH%2FVDOKGF6XpV3n7mPvVZR2gVGB0uJem%2BiVwbvlq70zpsm9I22yN%2Bad7xeaHk2ubLIrWW8KkXdgkvKySIwbPxFG3eG08%2BXxRislroE87thhIs27LSrZenGk8dd6lo2e40O8wTTwHMrQ3h40%2F%2Fn2Ea3OvBA3IUXm98wZ5Qgbyo3UNbICzOFF4BI%2Fo5hCEDz2Ii1VjoU%2BkbpHS3xTn2eDR7hqZGNkh%2BvPHyyJBM9zq2jYA8OUOnze1Z6ZFfzGlPOqscmQu9simgvH%2BwtYppK6XO5ywvfps6nLP%2Bu2PqyXF5x2Lp2YOq1WJgvnpqswlpkoDOy4b%2Bg0Xh4mfB%2BElcgQm%2BRCkaoMucZOkqUeyfwpNFtd9MQRs7C6zrCQr%2F%2F2UwEpG6RgyKpDwgPkvUDVnqHxABZqcDXeYSvXngw6Xa7KnvLS1b19RI2NIk6lLeDvKWdXq%2BVhThT%2B3XdRzYJNvp5OYf29Z9UkcZMM68%2B7wGOqUB9Ekujm0QOAvDvDMxrpsvTfwH07jVzXTs5nxKryjqy%2B4d5MrlcDpMHEgRk7siHIv8R7zxfCe8Q2iloENXMJ1pmPzwesWAXyU86xmeZhS3p%2FeYHK0E5GNmYEQElRlP%2FN0k0gYJDzuaH8teLetexydDd%2FtTNlBECSavpnp6xsMpiL0MD945DbwrMDNLzKEh1m6w1wpX27NIXKpWIa36uALsmjuhdRt6&X-Amz-Signature=a4fd44eaac0eb880e98c77da7780d51281f7d32cbbbbfe563018c04718c04ab0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYEBJ2PU%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdcvRk6IV780LWjov5LTIeZ8BsCMSboxo4cTxL50JaNAiEAwEWla84CIxrtFt3Ja2ZZaWrfXg7Lr4shGRejBMf7BmQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FGvxX29Bgy1tFHGyrcA2lT%2BBNgNyAn6%2BtU227r2C08vUzGDHUdmzTsI7mYMs8EEwFtls%2FHocSHe%2Fx83wuAA942tQ9HaCtHLrpZsNjEDNSP7R4Z6weDDE6m3wKJKrQbQPJj%2BRsZgMroUJ8jkv0I%2FmbLd%2BoHnCDCBquLdhunhQtNj5d0hrAsH%2FVDOKGF6XpV3n7mPvVZR2gVGB0uJem%2BiVwbvlq70zpsm9I22yN%2Bad7xeaHk2ubLIrWW8KkXdgkvKySIwbPxFG3eG08%2BXxRislroE87thhIs27LSrZenGk8dd6lo2e40O8wTTwHMrQ3h40%2F%2Fn2Ea3OvBA3IUXm98wZ5Qgbyo3UNbICzOFF4BI%2Fo5hCEDz2Ii1VjoU%2BkbpHS3xTn2eDR7hqZGNkh%2BvPHyyJBM9zq2jYA8OUOnze1Z6ZFfzGlPOqscmQu9simgvH%2BwtYppK6XO5ywvfps6nLP%2Bu2PqyXF5x2Lp2YOq1WJgvnpqswlpkoDOy4b%2Bg0Xh4mfB%2BElcgQm%2BRCkaoMucZOkqUeyfwpNFtd9MQRs7C6zrCQr%2F%2F2UwEpG6RgyKpDwgPkvUDVnqHxABZqcDXeYSvXngw6Xa7KnvLS1b19RI2NIk6lLeDvKWdXq%2BVhThT%2B3XdRzYJNvp5OYf29Z9UkcZMM68%2B7wGOqUB9Ekujm0QOAvDvDMxrpsvTfwH07jVzXTs5nxKryjqy%2B4d5MrlcDpMHEgRk7siHIv8R7zxfCe8Q2iloENXMJ1pmPzwesWAXyU86xmeZhS3p%2FeYHK0E5GNmYEQElRlP%2FN0k0gYJDzuaH8teLetexydDd%2FtTNlBECSavpnp6xsMpiL0MD945DbwrMDNLzKEh1m6w1wpX27NIXKpWIa36uALsmjuhdRt6&X-Amz-Signature=5094d18ad00c1aaa8cd2fb5ae2e4b5122bcb4763a7b60f6b028cf206fb5e3d5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYEBJ2PU%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdcvRk6IV780LWjov5LTIeZ8BsCMSboxo4cTxL50JaNAiEAwEWla84CIxrtFt3Ja2ZZaWrfXg7Lr4shGRejBMf7BmQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FGvxX29Bgy1tFHGyrcA2lT%2BBNgNyAn6%2BtU227r2C08vUzGDHUdmzTsI7mYMs8EEwFtls%2FHocSHe%2Fx83wuAA942tQ9HaCtHLrpZsNjEDNSP7R4Z6weDDE6m3wKJKrQbQPJj%2BRsZgMroUJ8jkv0I%2FmbLd%2BoHnCDCBquLdhunhQtNj5d0hrAsH%2FVDOKGF6XpV3n7mPvVZR2gVGB0uJem%2BiVwbvlq70zpsm9I22yN%2Bad7xeaHk2ubLIrWW8KkXdgkvKySIwbPxFG3eG08%2BXxRislroE87thhIs27LSrZenGk8dd6lo2e40O8wTTwHMrQ3h40%2F%2Fn2Ea3OvBA3IUXm98wZ5Qgbyo3UNbICzOFF4BI%2Fo5hCEDz2Ii1VjoU%2BkbpHS3xTn2eDR7hqZGNkh%2BvPHyyJBM9zq2jYA8OUOnze1Z6ZFfzGlPOqscmQu9simgvH%2BwtYppK6XO5ywvfps6nLP%2Bu2PqyXF5x2Lp2YOq1WJgvnpqswlpkoDOy4b%2Bg0Xh4mfB%2BElcgQm%2BRCkaoMucZOkqUeyfwpNFtd9MQRs7C6zrCQr%2F%2F2UwEpG6RgyKpDwgPkvUDVnqHxABZqcDXeYSvXngw6Xa7KnvLS1b19RI2NIk6lLeDvKWdXq%2BVhThT%2B3XdRzYJNvp5OYf29Z9UkcZMM68%2B7wGOqUB9Ekujm0QOAvDvDMxrpsvTfwH07jVzXTs5nxKryjqy%2B4d5MrlcDpMHEgRk7siHIv8R7zxfCe8Q2iloENXMJ1pmPzwesWAXyU86xmeZhS3p%2FeYHK0E5GNmYEQElRlP%2FN0k0gYJDzuaH8teLetexydDd%2FtTNlBECSavpnp6xsMpiL0MD945DbwrMDNLzKEh1m6w1wpX27NIXKpWIa36uALsmjuhdRt6&X-Amz-Signature=92a598297b0333dac8a4783a1940610372f87f7e2fd2d2815f608b2b79cdef72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYEBJ2PU%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdcvRk6IV780LWjov5LTIeZ8BsCMSboxo4cTxL50JaNAiEAwEWla84CIxrtFt3Ja2ZZaWrfXg7Lr4shGRejBMf7BmQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FGvxX29Bgy1tFHGyrcA2lT%2BBNgNyAn6%2BtU227r2C08vUzGDHUdmzTsI7mYMs8EEwFtls%2FHocSHe%2Fx83wuAA942tQ9HaCtHLrpZsNjEDNSP7R4Z6weDDE6m3wKJKrQbQPJj%2BRsZgMroUJ8jkv0I%2FmbLd%2BoHnCDCBquLdhunhQtNj5d0hrAsH%2FVDOKGF6XpV3n7mPvVZR2gVGB0uJem%2BiVwbvlq70zpsm9I22yN%2Bad7xeaHk2ubLIrWW8KkXdgkvKySIwbPxFG3eG08%2BXxRislroE87thhIs27LSrZenGk8dd6lo2e40O8wTTwHMrQ3h40%2F%2Fn2Ea3OvBA3IUXm98wZ5Qgbyo3UNbICzOFF4BI%2Fo5hCEDz2Ii1VjoU%2BkbpHS3xTn2eDR7hqZGNkh%2BvPHyyJBM9zq2jYA8OUOnze1Z6ZFfzGlPOqscmQu9simgvH%2BwtYppK6XO5ywvfps6nLP%2Bu2PqyXF5x2Lp2YOq1WJgvnpqswlpkoDOy4b%2Bg0Xh4mfB%2BElcgQm%2BRCkaoMucZOkqUeyfwpNFtd9MQRs7C6zrCQr%2F%2F2UwEpG6RgyKpDwgPkvUDVnqHxABZqcDXeYSvXngw6Xa7KnvLS1b19RI2NIk6lLeDvKWdXq%2BVhThT%2B3XdRzYJNvp5OYf29Z9UkcZMM68%2B7wGOqUB9Ekujm0QOAvDvDMxrpsvTfwH07jVzXTs5nxKryjqy%2B4d5MrlcDpMHEgRk7siHIv8R7zxfCe8Q2iloENXMJ1pmPzwesWAXyU86xmeZhS3p%2FeYHK0E5GNmYEQElRlP%2FN0k0gYJDzuaH8teLetexydDd%2FtTNlBECSavpnp6xsMpiL0MD945DbwrMDNLzKEh1m6w1wpX27NIXKpWIa36uALsmjuhdRt6&X-Amz-Signature=0a8446e514b1d4ca6caa644edbef6b45e51de161f8c75c431fa5fd29edb6143a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
