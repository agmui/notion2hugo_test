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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR57Z6RJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBV4vNBhDf1uvpWAZ9imUGdmnejouAb2hUI4MaQMzY2yAiEAnXBiLbkY4ElKKLLe27eZHa%2FEyrACZ2emZVhLIproMi0qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BVhsrKtGSjdIMjfyrcAwKJb%2Bd5G9xQmb%2FIzbe3WMb7oJ4lC15eesMD%2BNEfAIwlIKrtAvpbNBHl0%2Fn9b1VMKi2aWxeIAZr5%2BK%2Fg1UJZDS0ejTPzUJG2kujFRROoHlp7RXU6aZAQHnNVXZIwI8ekZjBYjKZ%2BS%2FHN5D8F4j5OGuf8hI%2Bnaf3h5DgTjWY9YoumQt7R6jYVpnOpxhB34lenPIY7%2FsIdmTK2HUCUXms8dd0F64fxfEPI98HXUCQFGE6ASHyWvz4sJtltkN1BKmcCnaTNgU2p7ETAAb6SnoJc90%2FCCYCGOntni405Tqb5FH5%2FATrAry0DR%2BwZQcxpbCliSqfO1qukByRbz2cTDCLQS8QtgP%2Fg29GwJr15wTg7VtYaUkuG4tbqgsB5rO5%2F5eNNmm%2FZwDXB%2BiWyg7WITudN0gd90FIz9ExO2BCtniuq1nELAXk483s0C%2FdHuko%2BbEz9iwLWqVfCTW%2BY%2BGR4b9Jr854Lom6VOQjZxfJ1oftktiXRJqCbUQvq0o%2Bd%2Fp3WwlQLDX4LFmda9rANRbsWzJcqCBiS7VS6wA1mw3zUfnpbaomAw1flmtkW0P0fo2NeOTCXOzmO3MzIl3wxqPw62Nz8iF8heEjeVsZgLSqhz4F%2FhPa7R2OjGFhXOobr%2FoM%2FMMn2y74GOqUBdGlGzfUNMUPows9XmHQSmzv3jBn%2B%2Fp95YNRIxoz%2BuKzHVVEb02nq1JFTUkbRB2W9xIgnUfK%2BEO%2Fl5PwWVrJ6J%2F4Gd05lUnAj73WxXAFO5IipJK1lFJgLRAZiZF60Q46oBZE8AoYr9z5OIwUrD%2BuL%2FLYk308XL4m89jorR26bDSsUnbnA2N5qOUgy%2FwZ7A4TNpaDI4dIZuOG66hMEm3MkM6J%2Fgn%2Fl&X-Amz-Signature=79103e70c8ad25ed11dfbc10540773644fb8c08f741bb2e7bf0b093c9733a298&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR57Z6RJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBV4vNBhDf1uvpWAZ9imUGdmnejouAb2hUI4MaQMzY2yAiEAnXBiLbkY4ElKKLLe27eZHa%2FEyrACZ2emZVhLIproMi0qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BVhsrKtGSjdIMjfyrcAwKJb%2Bd5G9xQmb%2FIzbe3WMb7oJ4lC15eesMD%2BNEfAIwlIKrtAvpbNBHl0%2Fn9b1VMKi2aWxeIAZr5%2BK%2Fg1UJZDS0ejTPzUJG2kujFRROoHlp7RXU6aZAQHnNVXZIwI8ekZjBYjKZ%2BS%2FHN5D8F4j5OGuf8hI%2Bnaf3h5DgTjWY9YoumQt7R6jYVpnOpxhB34lenPIY7%2FsIdmTK2HUCUXms8dd0F64fxfEPI98HXUCQFGE6ASHyWvz4sJtltkN1BKmcCnaTNgU2p7ETAAb6SnoJc90%2FCCYCGOntni405Tqb5FH5%2FATrAry0DR%2BwZQcxpbCliSqfO1qukByRbz2cTDCLQS8QtgP%2Fg29GwJr15wTg7VtYaUkuG4tbqgsB5rO5%2F5eNNmm%2FZwDXB%2BiWyg7WITudN0gd90FIz9ExO2BCtniuq1nELAXk483s0C%2FdHuko%2BbEz9iwLWqVfCTW%2BY%2BGR4b9Jr854Lom6VOQjZxfJ1oftktiXRJqCbUQvq0o%2Bd%2Fp3WwlQLDX4LFmda9rANRbsWzJcqCBiS7VS6wA1mw3zUfnpbaomAw1flmtkW0P0fo2NeOTCXOzmO3MzIl3wxqPw62Nz8iF8heEjeVsZgLSqhz4F%2FhPa7R2OjGFhXOobr%2FoM%2FMMn2y74GOqUBdGlGzfUNMUPows9XmHQSmzv3jBn%2B%2Fp95YNRIxoz%2BuKzHVVEb02nq1JFTUkbRB2W9xIgnUfK%2BEO%2Fl5PwWVrJ6J%2F4Gd05lUnAj73WxXAFO5IipJK1lFJgLRAZiZF60Q46oBZE8AoYr9z5OIwUrD%2BuL%2FLYk308XL4m89jorR26bDSsUnbnA2N5qOUgy%2FwZ7A4TNpaDI4dIZuOG66hMEm3MkM6J%2Fgn%2Fl&X-Amz-Signature=600f4e875d4b9bf1ae1977cf34fac221601c7836a51a89147410bcf10d65c3fb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR57Z6RJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBV4vNBhDf1uvpWAZ9imUGdmnejouAb2hUI4MaQMzY2yAiEAnXBiLbkY4ElKKLLe27eZHa%2FEyrACZ2emZVhLIproMi0qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BVhsrKtGSjdIMjfyrcAwKJb%2Bd5G9xQmb%2FIzbe3WMb7oJ4lC15eesMD%2BNEfAIwlIKrtAvpbNBHl0%2Fn9b1VMKi2aWxeIAZr5%2BK%2Fg1UJZDS0ejTPzUJG2kujFRROoHlp7RXU6aZAQHnNVXZIwI8ekZjBYjKZ%2BS%2FHN5D8F4j5OGuf8hI%2Bnaf3h5DgTjWY9YoumQt7R6jYVpnOpxhB34lenPIY7%2FsIdmTK2HUCUXms8dd0F64fxfEPI98HXUCQFGE6ASHyWvz4sJtltkN1BKmcCnaTNgU2p7ETAAb6SnoJc90%2FCCYCGOntni405Tqb5FH5%2FATrAry0DR%2BwZQcxpbCliSqfO1qukByRbz2cTDCLQS8QtgP%2Fg29GwJr15wTg7VtYaUkuG4tbqgsB5rO5%2F5eNNmm%2FZwDXB%2BiWyg7WITudN0gd90FIz9ExO2BCtniuq1nELAXk483s0C%2FdHuko%2BbEz9iwLWqVfCTW%2BY%2BGR4b9Jr854Lom6VOQjZxfJ1oftktiXRJqCbUQvq0o%2Bd%2Fp3WwlQLDX4LFmda9rANRbsWzJcqCBiS7VS6wA1mw3zUfnpbaomAw1flmtkW0P0fo2NeOTCXOzmO3MzIl3wxqPw62Nz8iF8heEjeVsZgLSqhz4F%2FhPa7R2OjGFhXOobr%2FoM%2FMMn2y74GOqUBdGlGzfUNMUPows9XmHQSmzv3jBn%2B%2Fp95YNRIxoz%2BuKzHVVEb02nq1JFTUkbRB2W9xIgnUfK%2BEO%2Fl5PwWVrJ6J%2F4Gd05lUnAj73WxXAFO5IipJK1lFJgLRAZiZF60Q46oBZE8AoYr9z5OIwUrD%2BuL%2FLYk308XL4m89jorR26bDSsUnbnA2N5qOUgy%2FwZ7A4TNpaDI4dIZuOG66hMEm3MkM6J%2Fgn%2Fl&X-Amz-Signature=5ca1fc78e4d459279168343d2a49083dfaed169226b0d4e3edf1650a18e4833a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR57Z6RJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBV4vNBhDf1uvpWAZ9imUGdmnejouAb2hUI4MaQMzY2yAiEAnXBiLbkY4ElKKLLe27eZHa%2FEyrACZ2emZVhLIproMi0qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BVhsrKtGSjdIMjfyrcAwKJb%2Bd5G9xQmb%2FIzbe3WMb7oJ4lC15eesMD%2BNEfAIwlIKrtAvpbNBHl0%2Fn9b1VMKi2aWxeIAZr5%2BK%2Fg1UJZDS0ejTPzUJG2kujFRROoHlp7RXU6aZAQHnNVXZIwI8ekZjBYjKZ%2BS%2FHN5D8F4j5OGuf8hI%2Bnaf3h5DgTjWY9YoumQt7R6jYVpnOpxhB34lenPIY7%2FsIdmTK2HUCUXms8dd0F64fxfEPI98HXUCQFGE6ASHyWvz4sJtltkN1BKmcCnaTNgU2p7ETAAb6SnoJc90%2FCCYCGOntni405Tqb5FH5%2FATrAry0DR%2BwZQcxpbCliSqfO1qukByRbz2cTDCLQS8QtgP%2Fg29GwJr15wTg7VtYaUkuG4tbqgsB5rO5%2F5eNNmm%2FZwDXB%2BiWyg7WITudN0gd90FIz9ExO2BCtniuq1nELAXk483s0C%2FdHuko%2BbEz9iwLWqVfCTW%2BY%2BGR4b9Jr854Lom6VOQjZxfJ1oftktiXRJqCbUQvq0o%2Bd%2Fp3WwlQLDX4LFmda9rANRbsWzJcqCBiS7VS6wA1mw3zUfnpbaomAw1flmtkW0P0fo2NeOTCXOzmO3MzIl3wxqPw62Nz8iF8heEjeVsZgLSqhz4F%2FhPa7R2OjGFhXOobr%2FoM%2FMMn2y74GOqUBdGlGzfUNMUPows9XmHQSmzv3jBn%2B%2Fp95YNRIxoz%2BuKzHVVEb02nq1JFTUkbRB2W9xIgnUfK%2BEO%2Fl5PwWVrJ6J%2F4Gd05lUnAj73WxXAFO5IipJK1lFJgLRAZiZF60Q46oBZE8AoYr9z5OIwUrD%2BuL%2FLYk308XL4m89jorR26bDSsUnbnA2N5qOUgy%2FwZ7A4TNpaDI4dIZuOG66hMEm3MkM6J%2Fgn%2Fl&X-Amz-Signature=f26f77e51c8361dcef617338a8c421907676739e171e7d234049892f8f64b4c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR57Z6RJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBV4vNBhDf1uvpWAZ9imUGdmnejouAb2hUI4MaQMzY2yAiEAnXBiLbkY4ElKKLLe27eZHa%2FEyrACZ2emZVhLIproMi0qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BVhsrKtGSjdIMjfyrcAwKJb%2Bd5G9xQmb%2FIzbe3WMb7oJ4lC15eesMD%2BNEfAIwlIKrtAvpbNBHl0%2Fn9b1VMKi2aWxeIAZr5%2BK%2Fg1UJZDS0ejTPzUJG2kujFRROoHlp7RXU6aZAQHnNVXZIwI8ekZjBYjKZ%2BS%2FHN5D8F4j5OGuf8hI%2Bnaf3h5DgTjWY9YoumQt7R6jYVpnOpxhB34lenPIY7%2FsIdmTK2HUCUXms8dd0F64fxfEPI98HXUCQFGE6ASHyWvz4sJtltkN1BKmcCnaTNgU2p7ETAAb6SnoJc90%2FCCYCGOntni405Tqb5FH5%2FATrAry0DR%2BwZQcxpbCliSqfO1qukByRbz2cTDCLQS8QtgP%2Fg29GwJr15wTg7VtYaUkuG4tbqgsB5rO5%2F5eNNmm%2FZwDXB%2BiWyg7WITudN0gd90FIz9ExO2BCtniuq1nELAXk483s0C%2FdHuko%2BbEz9iwLWqVfCTW%2BY%2BGR4b9Jr854Lom6VOQjZxfJ1oftktiXRJqCbUQvq0o%2Bd%2Fp3WwlQLDX4LFmda9rANRbsWzJcqCBiS7VS6wA1mw3zUfnpbaomAw1flmtkW0P0fo2NeOTCXOzmO3MzIl3wxqPw62Nz8iF8heEjeVsZgLSqhz4F%2FhPa7R2OjGFhXOobr%2FoM%2FMMn2y74GOqUBdGlGzfUNMUPows9XmHQSmzv3jBn%2B%2Fp95YNRIxoz%2BuKzHVVEb02nq1JFTUkbRB2W9xIgnUfK%2BEO%2Fl5PwWVrJ6J%2F4Gd05lUnAj73WxXAFO5IipJK1lFJgLRAZiZF60Q46oBZE8AoYr9z5OIwUrD%2BuL%2FLYk308XL4m89jorR26bDSsUnbnA2N5qOUgy%2FwZ7A4TNpaDI4dIZuOG66hMEm3MkM6J%2Fgn%2Fl&X-Amz-Signature=80aae73b95f069738c9e759ea5957680cdcb12344848da5938baad556d467953&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
