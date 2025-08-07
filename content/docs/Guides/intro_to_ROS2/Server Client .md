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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVHLC4CZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDurg%2FYCs9k8YhlIdbfjJ0gJ7OVz%2BHCAG6i4%2F2A2vWFhAiEA0hfuAVvSNxJ4KpbPQfhy1pp4EIyPYzt1etamBWfG0zYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRR8MSn9kseOXM9yircA766ugg3UtMZlqZx8F3PNkvGKhVozLvosGjMxhBA0KgGj4IxapRtxumta8jVVg94QdH4%2FFOGCQiLw73C%2Bbee%2BiJk%2F%2BKOQ4LXAbUOtGeyzOZY4x2e2DgJ%2Boh8aXBF1OL6gsW%2Bq9NX3rEmu6CEVDqW3cP6WnF%2FFxS9076dtLPpPhoEc5ovFneX0zHwfD7cXObmP0fG25XVR%2BwP%2B4rDIgYUZc9cd3hMhLiToeiO%2Ftz7az8N6UHgKe8hcY2V01LarIfLsVd1lQydKqsQxpnPRaloldUHKBCUQmuxz2fqPpKdAyk65CLBriCiU%2FPYEAq8LdMDtJE9aFrLC3oRck1RDlplcb89whJXl6n9qW1Us%2BcwDSvCm90C8rufowkwXMRpRsahu8y5ODIM%2Fz10ftiEmByxFqlWDceyOptJy%2BCRSwMYxWQkLoCWrdjfAPsCMglsSA%2BRI4AsUr4lHOkQY9Z9yujWWdRW8EStu5T4Xy9mKCFfUlfbCDa57P%2BpA7pmv%2BRXVa4UAX2%2BhWTy0%2FlYRbPPx9aQoq7s%2B1W4PxPib4jGpqLR0vT4njupLeltcZuHz0x4jIZmu22F3npvfSyZeqPTFMadzQDKCBdcae0J0%2BzVxoKWsfxh7YMm3dKbagyooNYkMNvj0cQGOqUB5jvh7i0lz8H53mIg%2B8x9XyQwuGiuvk3WFnowK158BkJdHGF3nxDTippgVH3ts9vRZ9v9oexv%2FeBEu3LeWWPTy3lJ9Nv6py48QRciQ7tkbaN5BsZoKteGiV%2FpPPdnrehKhyKA035tGweV%2BJ1a%2BVjkzouI1PEQWPCImX%2BweIawecPLlBgfQg0optQu5Lztj9YHLW2Z19D6M4VVWREqVUo6I3%2B2qdaS&X-Amz-Signature=9ce4555e24c81a5eee2e8320ccc7886be355aa41e86a55226369967a92104ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVHLC4CZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDurg%2FYCs9k8YhlIdbfjJ0gJ7OVz%2BHCAG6i4%2F2A2vWFhAiEA0hfuAVvSNxJ4KpbPQfhy1pp4EIyPYzt1etamBWfG0zYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRR8MSn9kseOXM9yircA766ugg3UtMZlqZx8F3PNkvGKhVozLvosGjMxhBA0KgGj4IxapRtxumta8jVVg94QdH4%2FFOGCQiLw73C%2Bbee%2BiJk%2F%2BKOQ4LXAbUOtGeyzOZY4x2e2DgJ%2Boh8aXBF1OL6gsW%2Bq9NX3rEmu6CEVDqW3cP6WnF%2FFxS9076dtLPpPhoEc5ovFneX0zHwfD7cXObmP0fG25XVR%2BwP%2B4rDIgYUZc9cd3hMhLiToeiO%2Ftz7az8N6UHgKe8hcY2V01LarIfLsVd1lQydKqsQxpnPRaloldUHKBCUQmuxz2fqPpKdAyk65CLBriCiU%2FPYEAq8LdMDtJE9aFrLC3oRck1RDlplcb89whJXl6n9qW1Us%2BcwDSvCm90C8rufowkwXMRpRsahu8y5ODIM%2Fz10ftiEmByxFqlWDceyOptJy%2BCRSwMYxWQkLoCWrdjfAPsCMglsSA%2BRI4AsUr4lHOkQY9Z9yujWWdRW8EStu5T4Xy9mKCFfUlfbCDa57P%2BpA7pmv%2BRXVa4UAX2%2BhWTy0%2FlYRbPPx9aQoq7s%2B1W4PxPib4jGpqLR0vT4njupLeltcZuHz0x4jIZmu22F3npvfSyZeqPTFMadzQDKCBdcae0J0%2BzVxoKWsfxh7YMm3dKbagyooNYkMNvj0cQGOqUB5jvh7i0lz8H53mIg%2B8x9XyQwuGiuvk3WFnowK158BkJdHGF3nxDTippgVH3ts9vRZ9v9oexv%2FeBEu3LeWWPTy3lJ9Nv6py48QRciQ7tkbaN5BsZoKteGiV%2FpPPdnrehKhyKA035tGweV%2BJ1a%2BVjkzouI1PEQWPCImX%2BweIawecPLlBgfQg0optQu5Lztj9YHLW2Z19D6M4VVWREqVUo6I3%2B2qdaS&X-Amz-Signature=67e5727ed33a0ba6c2c359e8e60c82095ff3200fe1c897e51651b32dcd69b002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVHLC4CZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDurg%2FYCs9k8YhlIdbfjJ0gJ7OVz%2BHCAG6i4%2F2A2vWFhAiEA0hfuAVvSNxJ4KpbPQfhy1pp4EIyPYzt1etamBWfG0zYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRR8MSn9kseOXM9yircA766ugg3UtMZlqZx8F3PNkvGKhVozLvosGjMxhBA0KgGj4IxapRtxumta8jVVg94QdH4%2FFOGCQiLw73C%2Bbee%2BiJk%2F%2BKOQ4LXAbUOtGeyzOZY4x2e2DgJ%2Boh8aXBF1OL6gsW%2Bq9NX3rEmu6CEVDqW3cP6WnF%2FFxS9076dtLPpPhoEc5ovFneX0zHwfD7cXObmP0fG25XVR%2BwP%2B4rDIgYUZc9cd3hMhLiToeiO%2Ftz7az8N6UHgKe8hcY2V01LarIfLsVd1lQydKqsQxpnPRaloldUHKBCUQmuxz2fqPpKdAyk65CLBriCiU%2FPYEAq8LdMDtJE9aFrLC3oRck1RDlplcb89whJXl6n9qW1Us%2BcwDSvCm90C8rufowkwXMRpRsahu8y5ODIM%2Fz10ftiEmByxFqlWDceyOptJy%2BCRSwMYxWQkLoCWrdjfAPsCMglsSA%2BRI4AsUr4lHOkQY9Z9yujWWdRW8EStu5T4Xy9mKCFfUlfbCDa57P%2BpA7pmv%2BRXVa4UAX2%2BhWTy0%2FlYRbPPx9aQoq7s%2B1W4PxPib4jGpqLR0vT4njupLeltcZuHz0x4jIZmu22F3npvfSyZeqPTFMadzQDKCBdcae0J0%2BzVxoKWsfxh7YMm3dKbagyooNYkMNvj0cQGOqUB5jvh7i0lz8H53mIg%2B8x9XyQwuGiuvk3WFnowK158BkJdHGF3nxDTippgVH3ts9vRZ9v9oexv%2FeBEu3LeWWPTy3lJ9Nv6py48QRciQ7tkbaN5BsZoKteGiV%2FpPPdnrehKhyKA035tGweV%2BJ1a%2BVjkzouI1PEQWPCImX%2BweIawecPLlBgfQg0optQu5Lztj9YHLW2Z19D6M4VVWREqVUo6I3%2B2qdaS&X-Amz-Signature=7ff2b505b31d7def3b278ff44d0d3d0c96cd83447a34d4f7e0a98f03afb3d769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVHLC4CZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDurg%2FYCs9k8YhlIdbfjJ0gJ7OVz%2BHCAG6i4%2F2A2vWFhAiEA0hfuAVvSNxJ4KpbPQfhy1pp4EIyPYzt1etamBWfG0zYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRR8MSn9kseOXM9yircA766ugg3UtMZlqZx8F3PNkvGKhVozLvosGjMxhBA0KgGj4IxapRtxumta8jVVg94QdH4%2FFOGCQiLw73C%2Bbee%2BiJk%2F%2BKOQ4LXAbUOtGeyzOZY4x2e2DgJ%2Boh8aXBF1OL6gsW%2Bq9NX3rEmu6CEVDqW3cP6WnF%2FFxS9076dtLPpPhoEc5ovFneX0zHwfD7cXObmP0fG25XVR%2BwP%2B4rDIgYUZc9cd3hMhLiToeiO%2Ftz7az8N6UHgKe8hcY2V01LarIfLsVd1lQydKqsQxpnPRaloldUHKBCUQmuxz2fqPpKdAyk65CLBriCiU%2FPYEAq8LdMDtJE9aFrLC3oRck1RDlplcb89whJXl6n9qW1Us%2BcwDSvCm90C8rufowkwXMRpRsahu8y5ODIM%2Fz10ftiEmByxFqlWDceyOptJy%2BCRSwMYxWQkLoCWrdjfAPsCMglsSA%2BRI4AsUr4lHOkQY9Z9yujWWdRW8EStu5T4Xy9mKCFfUlfbCDa57P%2BpA7pmv%2BRXVa4UAX2%2BhWTy0%2FlYRbPPx9aQoq7s%2B1W4PxPib4jGpqLR0vT4njupLeltcZuHz0x4jIZmu22F3npvfSyZeqPTFMadzQDKCBdcae0J0%2BzVxoKWsfxh7YMm3dKbagyooNYkMNvj0cQGOqUB5jvh7i0lz8H53mIg%2B8x9XyQwuGiuvk3WFnowK158BkJdHGF3nxDTippgVH3ts9vRZ9v9oexv%2FeBEu3LeWWPTy3lJ9Nv6py48QRciQ7tkbaN5BsZoKteGiV%2FpPPdnrehKhyKA035tGweV%2BJ1a%2BVjkzouI1PEQWPCImX%2BweIawecPLlBgfQg0optQu5Lztj9YHLW2Z19D6M4VVWREqVUo6I3%2B2qdaS&X-Amz-Signature=b326c1a2a4d83c806a5386fc32a0f617dc6fb44ccd28ba3a92fdcd39e633a42f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVHLC4CZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDurg%2FYCs9k8YhlIdbfjJ0gJ7OVz%2BHCAG6i4%2F2A2vWFhAiEA0hfuAVvSNxJ4KpbPQfhy1pp4EIyPYzt1etamBWfG0zYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRR8MSn9kseOXM9yircA766ugg3UtMZlqZx8F3PNkvGKhVozLvosGjMxhBA0KgGj4IxapRtxumta8jVVg94QdH4%2FFOGCQiLw73C%2Bbee%2BiJk%2F%2BKOQ4LXAbUOtGeyzOZY4x2e2DgJ%2Boh8aXBF1OL6gsW%2Bq9NX3rEmu6CEVDqW3cP6WnF%2FFxS9076dtLPpPhoEc5ovFneX0zHwfD7cXObmP0fG25XVR%2BwP%2B4rDIgYUZc9cd3hMhLiToeiO%2Ftz7az8N6UHgKe8hcY2V01LarIfLsVd1lQydKqsQxpnPRaloldUHKBCUQmuxz2fqPpKdAyk65CLBriCiU%2FPYEAq8LdMDtJE9aFrLC3oRck1RDlplcb89whJXl6n9qW1Us%2BcwDSvCm90C8rufowkwXMRpRsahu8y5ODIM%2Fz10ftiEmByxFqlWDceyOptJy%2BCRSwMYxWQkLoCWrdjfAPsCMglsSA%2BRI4AsUr4lHOkQY9Z9yujWWdRW8EStu5T4Xy9mKCFfUlfbCDa57P%2BpA7pmv%2BRXVa4UAX2%2BhWTy0%2FlYRbPPx9aQoq7s%2B1W4PxPib4jGpqLR0vT4njupLeltcZuHz0x4jIZmu22F3npvfSyZeqPTFMadzQDKCBdcae0J0%2BzVxoKWsfxh7YMm3dKbagyooNYkMNvj0cQGOqUB5jvh7i0lz8H53mIg%2B8x9XyQwuGiuvk3WFnowK158BkJdHGF3nxDTippgVH3ts9vRZ9v9oexv%2FeBEu3LeWWPTy3lJ9Nv6py48QRciQ7tkbaN5BsZoKteGiV%2FpPPdnrehKhyKA035tGweV%2BJ1a%2BVjkzouI1PEQWPCImX%2BweIawecPLlBgfQg0optQu5Lztj9YHLW2Z19D6M4VVWREqVUo6I3%2B2qdaS&X-Amz-Signature=a32d291ac2932cd6a5e57a7e121e6fc52052f9f68c35d455d604aa765be8d974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
