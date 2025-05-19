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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZYM4TD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHx2B2JhJIYmfCspyLRkNcy%2BplfDv2jD5%2B%2BCpyK9iqEAiEA0thPgIjdB%2B%2FxVx9p4N%2BgiX1NNM9EbnRqdhxygjTdXeoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjWueWAsmHuAnPr2ircA2O7ZXgGM5nlJMIpp9jnsG50LZAXW2kHj1es1QbsFuVTJK3EJt7nKCLlsOMFAhYdJKSqE%2F4vtaUiq8njN2CraS9NC0aZ%2BZ5G%2B56jKo%2FXrVowOc2E9GfKALEoux2nYX5Qr9JVGGwKu9LvL1i7%2FCQCB3wCDvrLcLUZg76RZ787FfNfblnXSPO1N8k842av1YI9dR7cP9POsjPoUwJyZiaV1HPIBwAe9i9cBegD6Me9uowztEGtsysMosvfChs5DSwR869j4eIo8d9Wo7MuiEP7itFQLO993N12FUK4LNBLmPXzYJUH9ZbL1IzRENf82aaT7u3Ech39IgsgOdtpLYhT6kQPRlSPCjv5B9q6s0656Fe6lr%2B707DiQezs0IK9Iw1ourheK2H7Z7pEnHSOqjCZdfwtFBUaqSfEslZzLoHWEyCFWHWbxre9zrcFl9iM49zatdY9k0tyLTWazSGqBqux6Tv91x4SctByqWLZhwB4kWpmkCTnQCtKz%2BVwmHIX6KypvLGUxh3lfKPDpF%2B20g9Z77jb7XEu8R%2FLD8L%2BDgCuQwEkQp5n20w8uhupgjNUw%2F2M4IeWcJYe8IsXWkZ%2FaqcX5%2BQhoC5mr83WQWwgOSyU7lhav4uqs2R4MywTkopTMIfkrMEGOqUBk6coPNnY0U5%2FEgPCHoTktQVVtTVdsLWOtbCY8wjc9AEwLaHWDy6YTaknt%2FmkwZboXRiwJ%2BGXJ5ZIjHmpj5%2FJN%2FvKYK7kwEdR29ze2hFmswznlOkTUva7gc9Enb0UVgDZv6OoiFxEQZAfLFYzxWJqUC10h2OwIKtY71x%2FfBV05%2B4szA8TmeZburfM4DYmbBBPe0BzU5uYcqAjDyw5AN48epyeE6j9&X-Amz-Signature=b8b2c8d8192d3d69448f7d6d1d5e60d34816ed388619d6b4c8bf8ec7a13a6ec0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZYM4TD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHx2B2JhJIYmfCspyLRkNcy%2BplfDv2jD5%2B%2BCpyK9iqEAiEA0thPgIjdB%2B%2FxVx9p4N%2BgiX1NNM9EbnRqdhxygjTdXeoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjWueWAsmHuAnPr2ircA2O7ZXgGM5nlJMIpp9jnsG50LZAXW2kHj1es1QbsFuVTJK3EJt7nKCLlsOMFAhYdJKSqE%2F4vtaUiq8njN2CraS9NC0aZ%2BZ5G%2B56jKo%2FXrVowOc2E9GfKALEoux2nYX5Qr9JVGGwKu9LvL1i7%2FCQCB3wCDvrLcLUZg76RZ787FfNfblnXSPO1N8k842av1YI9dR7cP9POsjPoUwJyZiaV1HPIBwAe9i9cBegD6Me9uowztEGtsysMosvfChs5DSwR869j4eIo8d9Wo7MuiEP7itFQLO993N12FUK4LNBLmPXzYJUH9ZbL1IzRENf82aaT7u3Ech39IgsgOdtpLYhT6kQPRlSPCjv5B9q6s0656Fe6lr%2B707DiQezs0IK9Iw1ourheK2H7Z7pEnHSOqjCZdfwtFBUaqSfEslZzLoHWEyCFWHWbxre9zrcFl9iM49zatdY9k0tyLTWazSGqBqux6Tv91x4SctByqWLZhwB4kWpmkCTnQCtKz%2BVwmHIX6KypvLGUxh3lfKPDpF%2B20g9Z77jb7XEu8R%2FLD8L%2BDgCuQwEkQp5n20w8uhupgjNUw%2F2M4IeWcJYe8IsXWkZ%2FaqcX5%2BQhoC5mr83WQWwgOSyU7lhav4uqs2R4MywTkopTMIfkrMEGOqUBk6coPNnY0U5%2FEgPCHoTktQVVtTVdsLWOtbCY8wjc9AEwLaHWDy6YTaknt%2FmkwZboXRiwJ%2BGXJ5ZIjHmpj5%2FJN%2FvKYK7kwEdR29ze2hFmswznlOkTUva7gc9Enb0UVgDZv6OoiFxEQZAfLFYzxWJqUC10h2OwIKtY71x%2FfBV05%2B4szA8TmeZburfM4DYmbBBPe0BzU5uYcqAjDyw5AN48epyeE6j9&X-Amz-Signature=30b6c2fcf58165cb6fa81d16460cf9db12d86cd20e053557489656d4411cc517&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZYM4TD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHx2B2JhJIYmfCspyLRkNcy%2BplfDv2jD5%2B%2BCpyK9iqEAiEA0thPgIjdB%2B%2FxVx9p4N%2BgiX1NNM9EbnRqdhxygjTdXeoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjWueWAsmHuAnPr2ircA2O7ZXgGM5nlJMIpp9jnsG50LZAXW2kHj1es1QbsFuVTJK3EJt7nKCLlsOMFAhYdJKSqE%2F4vtaUiq8njN2CraS9NC0aZ%2BZ5G%2B56jKo%2FXrVowOc2E9GfKALEoux2nYX5Qr9JVGGwKu9LvL1i7%2FCQCB3wCDvrLcLUZg76RZ787FfNfblnXSPO1N8k842av1YI9dR7cP9POsjPoUwJyZiaV1HPIBwAe9i9cBegD6Me9uowztEGtsysMosvfChs5DSwR869j4eIo8d9Wo7MuiEP7itFQLO993N12FUK4LNBLmPXzYJUH9ZbL1IzRENf82aaT7u3Ech39IgsgOdtpLYhT6kQPRlSPCjv5B9q6s0656Fe6lr%2B707DiQezs0IK9Iw1ourheK2H7Z7pEnHSOqjCZdfwtFBUaqSfEslZzLoHWEyCFWHWbxre9zrcFl9iM49zatdY9k0tyLTWazSGqBqux6Tv91x4SctByqWLZhwB4kWpmkCTnQCtKz%2BVwmHIX6KypvLGUxh3lfKPDpF%2B20g9Z77jb7XEu8R%2FLD8L%2BDgCuQwEkQp5n20w8uhupgjNUw%2F2M4IeWcJYe8IsXWkZ%2FaqcX5%2BQhoC5mr83WQWwgOSyU7lhav4uqs2R4MywTkopTMIfkrMEGOqUBk6coPNnY0U5%2FEgPCHoTktQVVtTVdsLWOtbCY8wjc9AEwLaHWDy6YTaknt%2FmkwZboXRiwJ%2BGXJ5ZIjHmpj5%2FJN%2FvKYK7kwEdR29ze2hFmswznlOkTUva7gc9Enb0UVgDZv6OoiFxEQZAfLFYzxWJqUC10h2OwIKtY71x%2FfBV05%2B4szA8TmeZburfM4DYmbBBPe0BzU5uYcqAjDyw5AN48epyeE6j9&X-Amz-Signature=6e8fc998ed6f68f48e8fa84c75c4f1a0748a3a5a516ff9a1ec1f456393f93747&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZYM4TD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHx2B2JhJIYmfCspyLRkNcy%2BplfDv2jD5%2B%2BCpyK9iqEAiEA0thPgIjdB%2B%2FxVx9p4N%2BgiX1NNM9EbnRqdhxygjTdXeoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjWueWAsmHuAnPr2ircA2O7ZXgGM5nlJMIpp9jnsG50LZAXW2kHj1es1QbsFuVTJK3EJt7nKCLlsOMFAhYdJKSqE%2F4vtaUiq8njN2CraS9NC0aZ%2BZ5G%2B56jKo%2FXrVowOc2E9GfKALEoux2nYX5Qr9JVGGwKu9LvL1i7%2FCQCB3wCDvrLcLUZg76RZ787FfNfblnXSPO1N8k842av1YI9dR7cP9POsjPoUwJyZiaV1HPIBwAe9i9cBegD6Me9uowztEGtsysMosvfChs5DSwR869j4eIo8d9Wo7MuiEP7itFQLO993N12FUK4LNBLmPXzYJUH9ZbL1IzRENf82aaT7u3Ech39IgsgOdtpLYhT6kQPRlSPCjv5B9q6s0656Fe6lr%2B707DiQezs0IK9Iw1ourheK2H7Z7pEnHSOqjCZdfwtFBUaqSfEslZzLoHWEyCFWHWbxre9zrcFl9iM49zatdY9k0tyLTWazSGqBqux6Tv91x4SctByqWLZhwB4kWpmkCTnQCtKz%2BVwmHIX6KypvLGUxh3lfKPDpF%2B20g9Z77jb7XEu8R%2FLD8L%2BDgCuQwEkQp5n20w8uhupgjNUw%2F2M4IeWcJYe8IsXWkZ%2FaqcX5%2BQhoC5mr83WQWwgOSyU7lhav4uqs2R4MywTkopTMIfkrMEGOqUBk6coPNnY0U5%2FEgPCHoTktQVVtTVdsLWOtbCY8wjc9AEwLaHWDy6YTaknt%2FmkwZboXRiwJ%2BGXJ5ZIjHmpj5%2FJN%2FvKYK7kwEdR29ze2hFmswznlOkTUva7gc9Enb0UVgDZv6OoiFxEQZAfLFYzxWJqUC10h2OwIKtY71x%2FfBV05%2B4szA8TmeZburfM4DYmbBBPe0BzU5uYcqAjDyw5AN48epyeE6j9&X-Amz-Signature=b06297cd74b4a33a15ad15a5284e3f7de4d0271f004f0a704210496c618120ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZYM4TD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHx2B2JhJIYmfCspyLRkNcy%2BplfDv2jD5%2B%2BCpyK9iqEAiEA0thPgIjdB%2B%2FxVx9p4N%2BgiX1NNM9EbnRqdhxygjTdXeoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjWueWAsmHuAnPr2ircA2O7ZXgGM5nlJMIpp9jnsG50LZAXW2kHj1es1QbsFuVTJK3EJt7nKCLlsOMFAhYdJKSqE%2F4vtaUiq8njN2CraS9NC0aZ%2BZ5G%2B56jKo%2FXrVowOc2E9GfKALEoux2nYX5Qr9JVGGwKu9LvL1i7%2FCQCB3wCDvrLcLUZg76RZ787FfNfblnXSPO1N8k842av1YI9dR7cP9POsjPoUwJyZiaV1HPIBwAe9i9cBegD6Me9uowztEGtsysMosvfChs5DSwR869j4eIo8d9Wo7MuiEP7itFQLO993N12FUK4LNBLmPXzYJUH9ZbL1IzRENf82aaT7u3Ech39IgsgOdtpLYhT6kQPRlSPCjv5B9q6s0656Fe6lr%2B707DiQezs0IK9Iw1ourheK2H7Z7pEnHSOqjCZdfwtFBUaqSfEslZzLoHWEyCFWHWbxre9zrcFl9iM49zatdY9k0tyLTWazSGqBqux6Tv91x4SctByqWLZhwB4kWpmkCTnQCtKz%2BVwmHIX6KypvLGUxh3lfKPDpF%2B20g9Z77jb7XEu8R%2FLD8L%2BDgCuQwEkQp5n20w8uhupgjNUw%2F2M4IeWcJYe8IsXWkZ%2FaqcX5%2BQhoC5mr83WQWwgOSyU7lhav4uqs2R4MywTkopTMIfkrMEGOqUBk6coPNnY0U5%2FEgPCHoTktQVVtTVdsLWOtbCY8wjc9AEwLaHWDy6YTaknt%2FmkwZboXRiwJ%2BGXJ5ZIjHmpj5%2FJN%2FvKYK7kwEdR29ze2hFmswznlOkTUva7gc9Enb0UVgDZv6OoiFxEQZAfLFYzxWJqUC10h2OwIKtY71x%2FfBV05%2B4szA8TmeZburfM4DYmbBBPe0BzU5uYcqAjDyw5AN48epyeE6j9&X-Amz-Signature=94cad982e1604f3ff0ae1b52a232bc43187b13895ba50c860f2f73f296ce9348&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
