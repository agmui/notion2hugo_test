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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLGUDTJP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCyu8KfqpNF4xm7%2FObhdLj55KbXAADJmTM%2BAVAqlYlfQgIgadlD0O%2B6xXMuds%2FKs1rfTlOrNYs9t79lF0FKyLNoEu0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDP8cWsM%2Bl0%2BRbK2yrcAz2P5xmubX5xhBQ7JwMF6TFPBvXScVY4AevADOfx8y%2FVeCdcA9Gjtx%2BZCAq%2BLuhxNYDw2t1uxv3mkkePrhh1LLtBTMo77Pm0CqJvsq7pOrXk%2BVTTu6uX4Bn4MqLtefJ0jXwFK%2Fv7J7H%2BVMNN1Dk2s2j736J9Z2X4FupqmTjddKKTs9kaFf81hAzYcLqhuwDMjsKShj4nqfUCM6o%2FOBEkaFzsV8v%2BCkltj9Vfvr51%2BhLUgqev8xT7UTHjsdW8xC1ZJNIrBNXBFUm%2B%2BldwGh6Cg9a8vg28gvBrmtNEzSXl6tG0JQaeBbNdjD9oxM9qYRG6z4Z9%2BdY3RSIT8DjOQRr7NrVLF53IRRa5BfbGFfKQTCWQ%2BYdy%2FvPOiSSei2fwn0TswSKWBRTjT3VNp8mieRoKF7qjsAvFW%2BuziAOEWEEm%2BorgTZ63J%2FvS7WJ2sFgYoENwrs3piY6ekY4fxdbrSz%2Fzhqznp%2Fgvcx4i5aZC%2BrIMk5RM3mBnQts8vimVZ6L8kBdBcMdM8Pd732J%2F4f%2F792V6wtyFmbegyKHXLW3joSRfi7jOULwiD1N00XEccTzt6w3f%2F61Hih%2BLHDwtz7JEqFdY8jKwX25ABZPwmOanMWT3cMqgk6KaVyU2Za7HmqUFMN65874GOqUBbBBQ2SZ%2B3xMVvgEBKOSbc%2F2IDXHEj%2B%2FO9XNgrOstuUhkXKOUJG3sbGnA36109dQv1kyZ%2F6xthljuMKbgkSgj%2B3hXCLFa5%2FlERYBc0J%2BJeFb4SoiypMdUEYDYcIdj2oCFavUOx9yelalYqazTc9MpycGPRnwbNBsQXPiNF2tYd2HvFsCtfZ8cuHaGhquyJKBm5B11DescL5souiKpgbCrU7FG9mFZ&X-Amz-Signature=5dd2abb4d5ce9b724d5c8e5f745b7cb0b60ea2b300aefb277d10b5362a104aad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLGUDTJP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCyu8KfqpNF4xm7%2FObhdLj55KbXAADJmTM%2BAVAqlYlfQgIgadlD0O%2B6xXMuds%2FKs1rfTlOrNYs9t79lF0FKyLNoEu0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDP8cWsM%2Bl0%2BRbK2yrcAz2P5xmubX5xhBQ7JwMF6TFPBvXScVY4AevADOfx8y%2FVeCdcA9Gjtx%2BZCAq%2BLuhxNYDw2t1uxv3mkkePrhh1LLtBTMo77Pm0CqJvsq7pOrXk%2BVTTu6uX4Bn4MqLtefJ0jXwFK%2Fv7J7H%2BVMNN1Dk2s2j736J9Z2X4FupqmTjddKKTs9kaFf81hAzYcLqhuwDMjsKShj4nqfUCM6o%2FOBEkaFzsV8v%2BCkltj9Vfvr51%2BhLUgqev8xT7UTHjsdW8xC1ZJNIrBNXBFUm%2B%2BldwGh6Cg9a8vg28gvBrmtNEzSXl6tG0JQaeBbNdjD9oxM9qYRG6z4Z9%2BdY3RSIT8DjOQRr7NrVLF53IRRa5BfbGFfKQTCWQ%2BYdy%2FvPOiSSei2fwn0TswSKWBRTjT3VNp8mieRoKF7qjsAvFW%2BuziAOEWEEm%2BorgTZ63J%2FvS7WJ2sFgYoENwrs3piY6ekY4fxdbrSz%2Fzhqznp%2Fgvcx4i5aZC%2BrIMk5RM3mBnQts8vimVZ6L8kBdBcMdM8Pd732J%2F4f%2F792V6wtyFmbegyKHXLW3joSRfi7jOULwiD1N00XEccTzt6w3f%2F61Hih%2BLHDwtz7JEqFdY8jKwX25ABZPwmOanMWT3cMqgk6KaVyU2Za7HmqUFMN65874GOqUBbBBQ2SZ%2B3xMVvgEBKOSbc%2F2IDXHEj%2B%2FO9XNgrOstuUhkXKOUJG3sbGnA36109dQv1kyZ%2F6xthljuMKbgkSgj%2B3hXCLFa5%2FlERYBc0J%2BJeFb4SoiypMdUEYDYcIdj2oCFavUOx9yelalYqazTc9MpycGPRnwbNBsQXPiNF2tYd2HvFsCtfZ8cuHaGhquyJKBm5B11DescL5souiKpgbCrU7FG9mFZ&X-Amz-Signature=8d55a04c6e9b29eb9f1040d7dc91537122e120618ce9ec9c12f77adea2a15479&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLGUDTJP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCyu8KfqpNF4xm7%2FObhdLj55KbXAADJmTM%2BAVAqlYlfQgIgadlD0O%2B6xXMuds%2FKs1rfTlOrNYs9t79lF0FKyLNoEu0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDP8cWsM%2Bl0%2BRbK2yrcAz2P5xmubX5xhBQ7JwMF6TFPBvXScVY4AevADOfx8y%2FVeCdcA9Gjtx%2BZCAq%2BLuhxNYDw2t1uxv3mkkePrhh1LLtBTMo77Pm0CqJvsq7pOrXk%2BVTTu6uX4Bn4MqLtefJ0jXwFK%2Fv7J7H%2BVMNN1Dk2s2j736J9Z2X4FupqmTjddKKTs9kaFf81hAzYcLqhuwDMjsKShj4nqfUCM6o%2FOBEkaFzsV8v%2BCkltj9Vfvr51%2BhLUgqev8xT7UTHjsdW8xC1ZJNIrBNXBFUm%2B%2BldwGh6Cg9a8vg28gvBrmtNEzSXl6tG0JQaeBbNdjD9oxM9qYRG6z4Z9%2BdY3RSIT8DjOQRr7NrVLF53IRRa5BfbGFfKQTCWQ%2BYdy%2FvPOiSSei2fwn0TswSKWBRTjT3VNp8mieRoKF7qjsAvFW%2BuziAOEWEEm%2BorgTZ63J%2FvS7WJ2sFgYoENwrs3piY6ekY4fxdbrSz%2Fzhqznp%2Fgvcx4i5aZC%2BrIMk5RM3mBnQts8vimVZ6L8kBdBcMdM8Pd732J%2F4f%2F792V6wtyFmbegyKHXLW3joSRfi7jOULwiD1N00XEccTzt6w3f%2F61Hih%2BLHDwtz7JEqFdY8jKwX25ABZPwmOanMWT3cMqgk6KaVyU2Za7HmqUFMN65874GOqUBbBBQ2SZ%2B3xMVvgEBKOSbc%2F2IDXHEj%2B%2FO9XNgrOstuUhkXKOUJG3sbGnA36109dQv1kyZ%2F6xthljuMKbgkSgj%2B3hXCLFa5%2FlERYBc0J%2BJeFb4SoiypMdUEYDYcIdj2oCFavUOx9yelalYqazTc9MpycGPRnwbNBsQXPiNF2tYd2HvFsCtfZ8cuHaGhquyJKBm5B11DescL5souiKpgbCrU7FG9mFZ&X-Amz-Signature=516641ac0919737ca813f726862a1a10766f4ef25fd70870c9c47d0b6ee0dc92&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLGUDTJP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCyu8KfqpNF4xm7%2FObhdLj55KbXAADJmTM%2BAVAqlYlfQgIgadlD0O%2B6xXMuds%2FKs1rfTlOrNYs9t79lF0FKyLNoEu0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDP8cWsM%2Bl0%2BRbK2yrcAz2P5xmubX5xhBQ7JwMF6TFPBvXScVY4AevADOfx8y%2FVeCdcA9Gjtx%2BZCAq%2BLuhxNYDw2t1uxv3mkkePrhh1LLtBTMo77Pm0CqJvsq7pOrXk%2BVTTu6uX4Bn4MqLtefJ0jXwFK%2Fv7J7H%2BVMNN1Dk2s2j736J9Z2X4FupqmTjddKKTs9kaFf81hAzYcLqhuwDMjsKShj4nqfUCM6o%2FOBEkaFzsV8v%2BCkltj9Vfvr51%2BhLUgqev8xT7UTHjsdW8xC1ZJNIrBNXBFUm%2B%2BldwGh6Cg9a8vg28gvBrmtNEzSXl6tG0JQaeBbNdjD9oxM9qYRG6z4Z9%2BdY3RSIT8DjOQRr7NrVLF53IRRa5BfbGFfKQTCWQ%2BYdy%2FvPOiSSei2fwn0TswSKWBRTjT3VNp8mieRoKF7qjsAvFW%2BuziAOEWEEm%2BorgTZ63J%2FvS7WJ2sFgYoENwrs3piY6ekY4fxdbrSz%2Fzhqznp%2Fgvcx4i5aZC%2BrIMk5RM3mBnQts8vimVZ6L8kBdBcMdM8Pd732J%2F4f%2F792V6wtyFmbegyKHXLW3joSRfi7jOULwiD1N00XEccTzt6w3f%2F61Hih%2BLHDwtz7JEqFdY8jKwX25ABZPwmOanMWT3cMqgk6KaVyU2Za7HmqUFMN65874GOqUBbBBQ2SZ%2B3xMVvgEBKOSbc%2F2IDXHEj%2B%2FO9XNgrOstuUhkXKOUJG3sbGnA36109dQv1kyZ%2F6xthljuMKbgkSgj%2B3hXCLFa5%2FlERYBc0J%2BJeFb4SoiypMdUEYDYcIdj2oCFavUOx9yelalYqazTc9MpycGPRnwbNBsQXPiNF2tYd2HvFsCtfZ8cuHaGhquyJKBm5B11DescL5souiKpgbCrU7FG9mFZ&X-Amz-Signature=040b4ea70981f5c9c6ccfb019be64910d451a6f974958a7481ba153f317c111c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLGUDTJP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCyu8KfqpNF4xm7%2FObhdLj55KbXAADJmTM%2BAVAqlYlfQgIgadlD0O%2B6xXMuds%2FKs1rfTlOrNYs9t79lF0FKyLNoEu0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDP8cWsM%2Bl0%2BRbK2yrcAz2P5xmubX5xhBQ7JwMF6TFPBvXScVY4AevADOfx8y%2FVeCdcA9Gjtx%2BZCAq%2BLuhxNYDw2t1uxv3mkkePrhh1LLtBTMo77Pm0CqJvsq7pOrXk%2BVTTu6uX4Bn4MqLtefJ0jXwFK%2Fv7J7H%2BVMNN1Dk2s2j736J9Z2X4FupqmTjddKKTs9kaFf81hAzYcLqhuwDMjsKShj4nqfUCM6o%2FOBEkaFzsV8v%2BCkltj9Vfvr51%2BhLUgqev8xT7UTHjsdW8xC1ZJNIrBNXBFUm%2B%2BldwGh6Cg9a8vg28gvBrmtNEzSXl6tG0JQaeBbNdjD9oxM9qYRG6z4Z9%2BdY3RSIT8DjOQRr7NrVLF53IRRa5BfbGFfKQTCWQ%2BYdy%2FvPOiSSei2fwn0TswSKWBRTjT3VNp8mieRoKF7qjsAvFW%2BuziAOEWEEm%2BorgTZ63J%2FvS7WJ2sFgYoENwrs3piY6ekY4fxdbrSz%2Fzhqznp%2Fgvcx4i5aZC%2BrIMk5RM3mBnQts8vimVZ6L8kBdBcMdM8Pd732J%2F4f%2F792V6wtyFmbegyKHXLW3joSRfi7jOULwiD1N00XEccTzt6w3f%2F61Hih%2BLHDwtz7JEqFdY8jKwX25ABZPwmOanMWT3cMqgk6KaVyU2Za7HmqUFMN65874GOqUBbBBQ2SZ%2B3xMVvgEBKOSbc%2F2IDXHEj%2B%2FO9XNgrOstuUhkXKOUJG3sbGnA36109dQv1kyZ%2F6xthljuMKbgkSgj%2B3hXCLFa5%2FlERYBc0J%2BJeFb4SoiypMdUEYDYcIdj2oCFavUOx9yelalYqazTc9MpycGPRnwbNBsQXPiNF2tYd2HvFsCtfZ8cuHaGhquyJKBm5B11DescL5souiKpgbCrU7FG9mFZ&X-Amz-Signature=5a09f4063ebd5c5130cd00d99057810ab298e789c60d86e2b8cfe1315c361f7e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
