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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6YBSJ2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIE7yzIEL63IU5KBxMJLxzBiM5Mzy0xBrFBMDgyJAQB6cAiEA9xIxatNrcXxBLu87lwtJXDkvILIZ1kViFLoKBEWqOQQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGu8ilUgGW86iLW%2BBCrcA9RD3kpBTbB3I20uh5uhrjA67zQCVeehdWhEhUG26MyDW%2FEufad9H%2BKBe%2FVtYVJIg0vXmf0yUnZv12WnPkQCb8WwKOs7LW0TZAM07klRtizyaPdU9fTgDS18eZoTKeU7qFauQAgKSJDnPA8sLXeh4sfG1LPvbVdoirXN%2F0lEGtp2xgKXoDrvDKIoh%2FCvjn9kxPr3T6jM3wCkJ3uMYCk%2F90j0uSfKqu9im1U92q1qwt1E85wr2BN6PP6qQQLZAxYXA722jqf7%2FL8ABQpeaSTqt5Rur5OqyA4T99KkkZ2edmH4OcxSci%2B1nr6LZtljQd217IbNe2qijJoCWGcs7RxrJJlZzVDTpG9EE0XMvgG6oHqpluNDopjcgdQAYtx5FT8ePOGx3C%2FiTnq81htkSDRVRDrkTWCCcmtCbtigKD4%2BqHcblSEOusfnOwzxp9XvQOEOCut0Bnq3SOyMZK1ke2xMqrruIoMm2Nb6Gd%2FCjfYJhnE4IjhfuYRSw3SoM5bgBE8lTi%2FBSeEuqnSI72AWehCkrmUWGdB3mSMyOONYlJce4F9nePOhfY8aofVfSTGYvqPoKtDu2ltujGV2d2qtBP6yYEu6jjiaVpY4rup3I4CMs1fmb8FFbO6YHUSm4p4FMLeEgMEGOqUBNg%2BC15goK9wGeF8hp4ENQfjlnhlWkzebFHuKV8P9OSLRoEMiRH9ewTcgF%2B62WN77YFVbr%2BN5OyQuYVHWqYVFwDxrcQIGWDyNEzyvZrryADkTBVYKZDN975jhvFudgBuTnt64Wngv0ZWT4LYj2AqkU3hFcNJ56mwLtDQm6rWhMK5ZXvePx6CEErTUtVZ%2FxS3345L0jHQXhBDCT8%2F3MgD6Eg5UUcs3&X-Amz-Signature=c25d3dd7ae9486038f989e57eb0ce91bc739ed383cb447498d7672767898655c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6YBSJ2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIE7yzIEL63IU5KBxMJLxzBiM5Mzy0xBrFBMDgyJAQB6cAiEA9xIxatNrcXxBLu87lwtJXDkvILIZ1kViFLoKBEWqOQQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGu8ilUgGW86iLW%2BBCrcA9RD3kpBTbB3I20uh5uhrjA67zQCVeehdWhEhUG26MyDW%2FEufad9H%2BKBe%2FVtYVJIg0vXmf0yUnZv12WnPkQCb8WwKOs7LW0TZAM07klRtizyaPdU9fTgDS18eZoTKeU7qFauQAgKSJDnPA8sLXeh4sfG1LPvbVdoirXN%2F0lEGtp2xgKXoDrvDKIoh%2FCvjn9kxPr3T6jM3wCkJ3uMYCk%2F90j0uSfKqu9im1U92q1qwt1E85wr2BN6PP6qQQLZAxYXA722jqf7%2FL8ABQpeaSTqt5Rur5OqyA4T99KkkZ2edmH4OcxSci%2B1nr6LZtljQd217IbNe2qijJoCWGcs7RxrJJlZzVDTpG9EE0XMvgG6oHqpluNDopjcgdQAYtx5FT8ePOGx3C%2FiTnq81htkSDRVRDrkTWCCcmtCbtigKD4%2BqHcblSEOusfnOwzxp9XvQOEOCut0Bnq3SOyMZK1ke2xMqrruIoMm2Nb6Gd%2FCjfYJhnE4IjhfuYRSw3SoM5bgBE8lTi%2FBSeEuqnSI72AWehCkrmUWGdB3mSMyOONYlJce4F9nePOhfY8aofVfSTGYvqPoKtDu2ltujGV2d2qtBP6yYEu6jjiaVpY4rup3I4CMs1fmb8FFbO6YHUSm4p4FMLeEgMEGOqUBNg%2BC15goK9wGeF8hp4ENQfjlnhlWkzebFHuKV8P9OSLRoEMiRH9ewTcgF%2B62WN77YFVbr%2BN5OyQuYVHWqYVFwDxrcQIGWDyNEzyvZrryADkTBVYKZDN975jhvFudgBuTnt64Wngv0ZWT4LYj2AqkU3hFcNJ56mwLtDQm6rWhMK5ZXvePx6CEErTUtVZ%2FxS3345L0jHQXhBDCT8%2F3MgD6Eg5UUcs3&X-Amz-Signature=e5176f02b847890dec2e077bf0b6b089f1fcbaacad9883e55c9105cbae6ac4ff&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6YBSJ2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIE7yzIEL63IU5KBxMJLxzBiM5Mzy0xBrFBMDgyJAQB6cAiEA9xIxatNrcXxBLu87lwtJXDkvILIZ1kViFLoKBEWqOQQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGu8ilUgGW86iLW%2BBCrcA9RD3kpBTbB3I20uh5uhrjA67zQCVeehdWhEhUG26MyDW%2FEufad9H%2BKBe%2FVtYVJIg0vXmf0yUnZv12WnPkQCb8WwKOs7LW0TZAM07klRtizyaPdU9fTgDS18eZoTKeU7qFauQAgKSJDnPA8sLXeh4sfG1LPvbVdoirXN%2F0lEGtp2xgKXoDrvDKIoh%2FCvjn9kxPr3T6jM3wCkJ3uMYCk%2F90j0uSfKqu9im1U92q1qwt1E85wr2BN6PP6qQQLZAxYXA722jqf7%2FL8ABQpeaSTqt5Rur5OqyA4T99KkkZ2edmH4OcxSci%2B1nr6LZtljQd217IbNe2qijJoCWGcs7RxrJJlZzVDTpG9EE0XMvgG6oHqpluNDopjcgdQAYtx5FT8ePOGx3C%2FiTnq81htkSDRVRDrkTWCCcmtCbtigKD4%2BqHcblSEOusfnOwzxp9XvQOEOCut0Bnq3SOyMZK1ke2xMqrruIoMm2Nb6Gd%2FCjfYJhnE4IjhfuYRSw3SoM5bgBE8lTi%2FBSeEuqnSI72AWehCkrmUWGdB3mSMyOONYlJce4F9nePOhfY8aofVfSTGYvqPoKtDu2ltujGV2d2qtBP6yYEu6jjiaVpY4rup3I4CMs1fmb8FFbO6YHUSm4p4FMLeEgMEGOqUBNg%2BC15goK9wGeF8hp4ENQfjlnhlWkzebFHuKV8P9OSLRoEMiRH9ewTcgF%2B62WN77YFVbr%2BN5OyQuYVHWqYVFwDxrcQIGWDyNEzyvZrryADkTBVYKZDN975jhvFudgBuTnt64Wngv0ZWT4LYj2AqkU3hFcNJ56mwLtDQm6rWhMK5ZXvePx6CEErTUtVZ%2FxS3345L0jHQXhBDCT8%2F3MgD6Eg5UUcs3&X-Amz-Signature=a74d18b2b7fad6e78948cf019fc59932ef2caf8d5b584044b2088bb59febfee1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6YBSJ2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIE7yzIEL63IU5KBxMJLxzBiM5Mzy0xBrFBMDgyJAQB6cAiEA9xIxatNrcXxBLu87lwtJXDkvILIZ1kViFLoKBEWqOQQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGu8ilUgGW86iLW%2BBCrcA9RD3kpBTbB3I20uh5uhrjA67zQCVeehdWhEhUG26MyDW%2FEufad9H%2BKBe%2FVtYVJIg0vXmf0yUnZv12WnPkQCb8WwKOs7LW0TZAM07klRtizyaPdU9fTgDS18eZoTKeU7qFauQAgKSJDnPA8sLXeh4sfG1LPvbVdoirXN%2F0lEGtp2xgKXoDrvDKIoh%2FCvjn9kxPr3T6jM3wCkJ3uMYCk%2F90j0uSfKqu9im1U92q1qwt1E85wr2BN6PP6qQQLZAxYXA722jqf7%2FL8ABQpeaSTqt5Rur5OqyA4T99KkkZ2edmH4OcxSci%2B1nr6LZtljQd217IbNe2qijJoCWGcs7RxrJJlZzVDTpG9EE0XMvgG6oHqpluNDopjcgdQAYtx5FT8ePOGx3C%2FiTnq81htkSDRVRDrkTWCCcmtCbtigKD4%2BqHcblSEOusfnOwzxp9XvQOEOCut0Bnq3SOyMZK1ke2xMqrruIoMm2Nb6Gd%2FCjfYJhnE4IjhfuYRSw3SoM5bgBE8lTi%2FBSeEuqnSI72AWehCkrmUWGdB3mSMyOONYlJce4F9nePOhfY8aofVfSTGYvqPoKtDu2ltujGV2d2qtBP6yYEu6jjiaVpY4rup3I4CMs1fmb8FFbO6YHUSm4p4FMLeEgMEGOqUBNg%2BC15goK9wGeF8hp4ENQfjlnhlWkzebFHuKV8P9OSLRoEMiRH9ewTcgF%2B62WN77YFVbr%2BN5OyQuYVHWqYVFwDxrcQIGWDyNEzyvZrryADkTBVYKZDN975jhvFudgBuTnt64Wngv0ZWT4LYj2AqkU3hFcNJ56mwLtDQm6rWhMK5ZXvePx6CEErTUtVZ%2FxS3345L0jHQXhBDCT8%2F3MgD6Eg5UUcs3&X-Amz-Signature=03d1a250b49d6a9a87ba677be3db433d3279f8a9233b2c7b7a1553a1918a1933&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6YBSJ2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIE7yzIEL63IU5KBxMJLxzBiM5Mzy0xBrFBMDgyJAQB6cAiEA9xIxatNrcXxBLu87lwtJXDkvILIZ1kViFLoKBEWqOQQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGu8ilUgGW86iLW%2BBCrcA9RD3kpBTbB3I20uh5uhrjA67zQCVeehdWhEhUG26MyDW%2FEufad9H%2BKBe%2FVtYVJIg0vXmf0yUnZv12WnPkQCb8WwKOs7LW0TZAM07klRtizyaPdU9fTgDS18eZoTKeU7qFauQAgKSJDnPA8sLXeh4sfG1LPvbVdoirXN%2F0lEGtp2xgKXoDrvDKIoh%2FCvjn9kxPr3T6jM3wCkJ3uMYCk%2F90j0uSfKqu9im1U92q1qwt1E85wr2BN6PP6qQQLZAxYXA722jqf7%2FL8ABQpeaSTqt5Rur5OqyA4T99KkkZ2edmH4OcxSci%2B1nr6LZtljQd217IbNe2qijJoCWGcs7RxrJJlZzVDTpG9EE0XMvgG6oHqpluNDopjcgdQAYtx5FT8ePOGx3C%2FiTnq81htkSDRVRDrkTWCCcmtCbtigKD4%2BqHcblSEOusfnOwzxp9XvQOEOCut0Bnq3SOyMZK1ke2xMqrruIoMm2Nb6Gd%2FCjfYJhnE4IjhfuYRSw3SoM5bgBE8lTi%2FBSeEuqnSI72AWehCkrmUWGdB3mSMyOONYlJce4F9nePOhfY8aofVfSTGYvqPoKtDu2ltujGV2d2qtBP6yYEu6jjiaVpY4rup3I4CMs1fmb8FFbO6YHUSm4p4FMLeEgMEGOqUBNg%2BC15goK9wGeF8hp4ENQfjlnhlWkzebFHuKV8P9OSLRoEMiRH9ewTcgF%2B62WN77YFVbr%2BN5OyQuYVHWqYVFwDxrcQIGWDyNEzyvZrryADkTBVYKZDN975jhvFudgBuTnt64Wngv0ZWT4LYj2AqkU3hFcNJ56mwLtDQm6rWhMK5ZXvePx6CEErTUtVZ%2FxS3345L0jHQXhBDCT8%2F3MgD6Eg5UUcs3&X-Amz-Signature=e9d58c1ed67212472fba1c3901e55b770f6164b83622c4d2b51280cefce3e373&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
