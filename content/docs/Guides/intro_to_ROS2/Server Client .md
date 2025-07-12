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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWTZ5NZU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLog7SqlF0M82xoAQtjWCU3ksal6t5gvFLRVhZ8zdJ2AIgeovVccmRvGHUYzqNnBwAVtD%2FArZbGaWTJAKf2OvOjMwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpztXswIxxfrhCmLircAwE0XoWROSteeyzWDf0kE%2FsBB%2FQwnAmOtzpfQjn1B6MTH4EXfYrhKyvP8wpE7rj0e3dh5Y5BW9K7EjJWH8ziVYWrESNBcWIt407RCuRUi9fieI2htfvujHl7glL4BJYyeIcSOgdejHagu6yGwCm1%2BUgROsSnR7jPZzDNgFlKs%2F0xq3GjKv4ubnUgnMydMhvV%2BfL1%2FtkjZrfNTW0hjYfEYJ%2BuBA0B50tyqMD8805KkKEb1wDklNebbUza7eKkuCZw0om5d%2BMK1xRcWgczQdOaYXOoch0Snjvi6eaXQNRGKtxO%2FUczJx7%2F63VpZQk2q2EwMvoJTilzw93d%2FaWCm%2Bv25Toxe1O2y6%2F8PXu27lMApldEDqPO0KtZVcNv32lqUwqRSr9FKR0x%2Bp0H1wukNuxuIdXGAoRKnFkgXxOEM0h0GVwDdO3gCtsRsecT97jPU2xdWwWCAaqlFsPKdg8CKN67idVaLSIn1x8AmD6gNZ%2Fw%2FSPQ6Iaft8jIp%2FXUcZlzsY%2FZ23Xe%2BZlRx97xoCPlWCf7dIjfRzN12SASmV7IdLfrjl8Isu3nLfImZAnAPphltUpjJD2IVjKZQYJY2xTRMKlUeT%2B5SnN9yoMbL4WedQ5b00UzloYOMcr6cEzcpaPzMOKhyMMGOqUBNDzJ60mNwBOjBjmSa1LtDWNxZpu67CTMOUfK420CCW9O%2BAIG%2FM4oR7mshlkIqAM79SIuo4VMU6dD0FLd2SsUuGJU2btdiD0SaWwo8uhIRYKTeRInLWr7bHR4HtGtiOR1gRC2LzXDzikYI9puCggUgYU60gxo4nWOx4rL1QNNA0wdQceTVupqMdi0K1nVkCBnbJW4s6VoqISRspbW%2BZGBFdcaOGOU&X-Amz-Signature=6956966312f57344a1ef6681c963925e6ae7d4fbab8ff6fb07292d709e19636c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWTZ5NZU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLog7SqlF0M82xoAQtjWCU3ksal6t5gvFLRVhZ8zdJ2AIgeovVccmRvGHUYzqNnBwAVtD%2FArZbGaWTJAKf2OvOjMwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpztXswIxxfrhCmLircAwE0XoWROSteeyzWDf0kE%2FsBB%2FQwnAmOtzpfQjn1B6MTH4EXfYrhKyvP8wpE7rj0e3dh5Y5BW9K7EjJWH8ziVYWrESNBcWIt407RCuRUi9fieI2htfvujHl7glL4BJYyeIcSOgdejHagu6yGwCm1%2BUgROsSnR7jPZzDNgFlKs%2F0xq3GjKv4ubnUgnMydMhvV%2BfL1%2FtkjZrfNTW0hjYfEYJ%2BuBA0B50tyqMD8805KkKEb1wDklNebbUza7eKkuCZw0om5d%2BMK1xRcWgczQdOaYXOoch0Snjvi6eaXQNRGKtxO%2FUczJx7%2F63VpZQk2q2EwMvoJTilzw93d%2FaWCm%2Bv25Toxe1O2y6%2F8PXu27lMApldEDqPO0KtZVcNv32lqUwqRSr9FKR0x%2Bp0H1wukNuxuIdXGAoRKnFkgXxOEM0h0GVwDdO3gCtsRsecT97jPU2xdWwWCAaqlFsPKdg8CKN67idVaLSIn1x8AmD6gNZ%2Fw%2FSPQ6Iaft8jIp%2FXUcZlzsY%2FZ23Xe%2BZlRx97xoCPlWCf7dIjfRzN12SASmV7IdLfrjl8Isu3nLfImZAnAPphltUpjJD2IVjKZQYJY2xTRMKlUeT%2B5SnN9yoMbL4WedQ5b00UzloYOMcr6cEzcpaPzMOKhyMMGOqUBNDzJ60mNwBOjBjmSa1LtDWNxZpu67CTMOUfK420CCW9O%2BAIG%2FM4oR7mshlkIqAM79SIuo4VMU6dD0FLd2SsUuGJU2btdiD0SaWwo8uhIRYKTeRInLWr7bHR4HtGtiOR1gRC2LzXDzikYI9puCggUgYU60gxo4nWOx4rL1QNNA0wdQceTVupqMdi0K1nVkCBnbJW4s6VoqISRspbW%2BZGBFdcaOGOU&X-Amz-Signature=e4803a867498f445bc3c7cad087a7c60460651ed9124ff2f0581d254019fa064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWTZ5NZU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLog7SqlF0M82xoAQtjWCU3ksal6t5gvFLRVhZ8zdJ2AIgeovVccmRvGHUYzqNnBwAVtD%2FArZbGaWTJAKf2OvOjMwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpztXswIxxfrhCmLircAwE0XoWROSteeyzWDf0kE%2FsBB%2FQwnAmOtzpfQjn1B6MTH4EXfYrhKyvP8wpE7rj0e3dh5Y5BW9K7EjJWH8ziVYWrESNBcWIt407RCuRUi9fieI2htfvujHl7glL4BJYyeIcSOgdejHagu6yGwCm1%2BUgROsSnR7jPZzDNgFlKs%2F0xq3GjKv4ubnUgnMydMhvV%2BfL1%2FtkjZrfNTW0hjYfEYJ%2BuBA0B50tyqMD8805KkKEb1wDklNebbUza7eKkuCZw0om5d%2BMK1xRcWgczQdOaYXOoch0Snjvi6eaXQNRGKtxO%2FUczJx7%2F63VpZQk2q2EwMvoJTilzw93d%2FaWCm%2Bv25Toxe1O2y6%2F8PXu27lMApldEDqPO0KtZVcNv32lqUwqRSr9FKR0x%2Bp0H1wukNuxuIdXGAoRKnFkgXxOEM0h0GVwDdO3gCtsRsecT97jPU2xdWwWCAaqlFsPKdg8CKN67idVaLSIn1x8AmD6gNZ%2Fw%2FSPQ6Iaft8jIp%2FXUcZlzsY%2FZ23Xe%2BZlRx97xoCPlWCf7dIjfRzN12SASmV7IdLfrjl8Isu3nLfImZAnAPphltUpjJD2IVjKZQYJY2xTRMKlUeT%2B5SnN9yoMbL4WedQ5b00UzloYOMcr6cEzcpaPzMOKhyMMGOqUBNDzJ60mNwBOjBjmSa1LtDWNxZpu67CTMOUfK420CCW9O%2BAIG%2FM4oR7mshlkIqAM79SIuo4VMU6dD0FLd2SsUuGJU2btdiD0SaWwo8uhIRYKTeRInLWr7bHR4HtGtiOR1gRC2LzXDzikYI9puCggUgYU60gxo4nWOx4rL1QNNA0wdQceTVupqMdi0K1nVkCBnbJW4s6VoqISRspbW%2BZGBFdcaOGOU&X-Amz-Signature=1ab1cca3ba2957c9af61847f54062e3ef3f9a2f4feabaf488de640cc10e8c0fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWTZ5NZU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLog7SqlF0M82xoAQtjWCU3ksal6t5gvFLRVhZ8zdJ2AIgeovVccmRvGHUYzqNnBwAVtD%2FArZbGaWTJAKf2OvOjMwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpztXswIxxfrhCmLircAwE0XoWROSteeyzWDf0kE%2FsBB%2FQwnAmOtzpfQjn1B6MTH4EXfYrhKyvP8wpE7rj0e3dh5Y5BW9K7EjJWH8ziVYWrESNBcWIt407RCuRUi9fieI2htfvujHl7glL4BJYyeIcSOgdejHagu6yGwCm1%2BUgROsSnR7jPZzDNgFlKs%2F0xq3GjKv4ubnUgnMydMhvV%2BfL1%2FtkjZrfNTW0hjYfEYJ%2BuBA0B50tyqMD8805KkKEb1wDklNebbUza7eKkuCZw0om5d%2BMK1xRcWgczQdOaYXOoch0Snjvi6eaXQNRGKtxO%2FUczJx7%2F63VpZQk2q2EwMvoJTilzw93d%2FaWCm%2Bv25Toxe1O2y6%2F8PXu27lMApldEDqPO0KtZVcNv32lqUwqRSr9FKR0x%2Bp0H1wukNuxuIdXGAoRKnFkgXxOEM0h0GVwDdO3gCtsRsecT97jPU2xdWwWCAaqlFsPKdg8CKN67idVaLSIn1x8AmD6gNZ%2Fw%2FSPQ6Iaft8jIp%2FXUcZlzsY%2FZ23Xe%2BZlRx97xoCPlWCf7dIjfRzN12SASmV7IdLfrjl8Isu3nLfImZAnAPphltUpjJD2IVjKZQYJY2xTRMKlUeT%2B5SnN9yoMbL4WedQ5b00UzloYOMcr6cEzcpaPzMOKhyMMGOqUBNDzJ60mNwBOjBjmSa1LtDWNxZpu67CTMOUfK420CCW9O%2BAIG%2FM4oR7mshlkIqAM79SIuo4VMU6dD0FLd2SsUuGJU2btdiD0SaWwo8uhIRYKTeRInLWr7bHR4HtGtiOR1gRC2LzXDzikYI9puCggUgYU60gxo4nWOx4rL1QNNA0wdQceTVupqMdi0K1nVkCBnbJW4s6VoqISRspbW%2BZGBFdcaOGOU&X-Amz-Signature=50b4f69f04c3eecf41f409f46575ad35573253917e084b6798a7df8e8581cbe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWTZ5NZU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLog7SqlF0M82xoAQtjWCU3ksal6t5gvFLRVhZ8zdJ2AIgeovVccmRvGHUYzqNnBwAVtD%2FArZbGaWTJAKf2OvOjMwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpztXswIxxfrhCmLircAwE0XoWROSteeyzWDf0kE%2FsBB%2FQwnAmOtzpfQjn1B6MTH4EXfYrhKyvP8wpE7rj0e3dh5Y5BW9K7EjJWH8ziVYWrESNBcWIt407RCuRUi9fieI2htfvujHl7glL4BJYyeIcSOgdejHagu6yGwCm1%2BUgROsSnR7jPZzDNgFlKs%2F0xq3GjKv4ubnUgnMydMhvV%2BfL1%2FtkjZrfNTW0hjYfEYJ%2BuBA0B50tyqMD8805KkKEb1wDklNebbUza7eKkuCZw0om5d%2BMK1xRcWgczQdOaYXOoch0Snjvi6eaXQNRGKtxO%2FUczJx7%2F63VpZQk2q2EwMvoJTilzw93d%2FaWCm%2Bv25Toxe1O2y6%2F8PXu27lMApldEDqPO0KtZVcNv32lqUwqRSr9FKR0x%2Bp0H1wukNuxuIdXGAoRKnFkgXxOEM0h0GVwDdO3gCtsRsecT97jPU2xdWwWCAaqlFsPKdg8CKN67idVaLSIn1x8AmD6gNZ%2Fw%2FSPQ6Iaft8jIp%2FXUcZlzsY%2FZ23Xe%2BZlRx97xoCPlWCf7dIjfRzN12SASmV7IdLfrjl8Isu3nLfImZAnAPphltUpjJD2IVjKZQYJY2xTRMKlUeT%2B5SnN9yoMbL4WedQ5b00UzloYOMcr6cEzcpaPzMOKhyMMGOqUBNDzJ60mNwBOjBjmSa1LtDWNxZpu67CTMOUfK420CCW9O%2BAIG%2FM4oR7mshlkIqAM79SIuo4VMU6dD0FLd2SsUuGJU2btdiD0SaWwo8uhIRYKTeRInLWr7bHR4HtGtiOR1gRC2LzXDzikYI9puCggUgYU60gxo4nWOx4rL1QNNA0wdQceTVupqMdi0K1nVkCBnbJW4s6VoqISRspbW%2BZGBFdcaOGOU&X-Amz-Signature=f42545fb58fbcaad6f93d8ea27de3958b55f4d01b0c6050f72f13693925016a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
