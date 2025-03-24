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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHRVPG6I%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B%2FoW5Bpcr3UyNTd4rdcTFNUnZaaueRvPpz9nQH45XSgIhAIKJ9jfftwbdGsit7l453TwH3YlStyro6N5XJzLv2cG%2FKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmJ5dGxrqllNudLvoq3AOU9WTmCcuZPJETtKrKQXoGhOBg0RR%2B0yjIQsDRq74GmNDc%2BGCoUzGAO7k%2FKiy8Q7b7kIF1hMxBT%2FCp7GRC23xbbMMtad6TH5gPuT3ZthREmuFchT6lw6lWqirtKE%2BtvXveoRV2G7GN7%2FImFS9qeF1V7SKTThCa1ZB7udxMRobq5LPXU00um35dKascv3MKwuATg8GPWqiWGafV4z9UsL1rDmc7CnTlj4zYghoUWHTbIjkTLKt14n8OyUzPH2eE5UQRyZlspDK1v4bqLuCyoSacdhpRPFaUdpyUK%2FNw2vHM8W0F3x8D6Rf%2FucV5%2FcqlwPB2OPkteOD4msVQ3As%2BRSrhqLt%2B4DXMQO5DC95PHqjrD3yTg1HlbigIpN%2FXzeMOUZLmYGlamrmPK8iWfNGmN1%2B0xGqAfgUIYG%2BPoXRc%2BxSZA%2FXXi1h7EOjSmfEK7cvSy06nPK5iJWZwTFlwGIY4uMNqv6jgoOhbMrmeTtXQL6k5y4ylTWFl8c%2BHZCrTlFuCKodAsY%2BzeROaikIPmNG0qin6A0hY%2BomMzO%2B9%2BOqMMYm4gLincB36u0%2BqVL5bpin96wOU%2F%2BpY8CpBCCGIMb5AcXSrDU0%2F9tUXJJ%2FY6pKCmh%2BnZHqP%2BxdQkWFo3XnjZDCb8IS%2FBjqkAQOUlfPTmDgBsILRgu29flMP3GeawbIMrctemsHsQ9TCpOiZSqA38wOmYmIwgHPepTl6cVR4Ibc%2BazRwBmnY12WGUcFguBLTAJQyMLmjByoaCwSTMLqE1RSQUFfHtRJMmee9tVFu2uSViicRTDmeMGbLhan9jY5H2pGMMxGtt79uOXtuQoOtxdP8sjBiNfQHkqrAZDYjD2PFCuc%2FOJrL0JC4U3aM&X-Amz-Signature=34be88dfd5a359aed1331496cee64f25352f9a800649c2e95eb904836d5798da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHRVPG6I%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B%2FoW5Bpcr3UyNTd4rdcTFNUnZaaueRvPpz9nQH45XSgIhAIKJ9jfftwbdGsit7l453TwH3YlStyro6N5XJzLv2cG%2FKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmJ5dGxrqllNudLvoq3AOU9WTmCcuZPJETtKrKQXoGhOBg0RR%2B0yjIQsDRq74GmNDc%2BGCoUzGAO7k%2FKiy8Q7b7kIF1hMxBT%2FCp7GRC23xbbMMtad6TH5gPuT3ZthREmuFchT6lw6lWqirtKE%2BtvXveoRV2G7GN7%2FImFS9qeF1V7SKTThCa1ZB7udxMRobq5LPXU00um35dKascv3MKwuATg8GPWqiWGafV4z9UsL1rDmc7CnTlj4zYghoUWHTbIjkTLKt14n8OyUzPH2eE5UQRyZlspDK1v4bqLuCyoSacdhpRPFaUdpyUK%2FNw2vHM8W0F3x8D6Rf%2FucV5%2FcqlwPB2OPkteOD4msVQ3As%2BRSrhqLt%2B4DXMQO5DC95PHqjrD3yTg1HlbigIpN%2FXzeMOUZLmYGlamrmPK8iWfNGmN1%2B0xGqAfgUIYG%2BPoXRc%2BxSZA%2FXXi1h7EOjSmfEK7cvSy06nPK5iJWZwTFlwGIY4uMNqv6jgoOhbMrmeTtXQL6k5y4ylTWFl8c%2BHZCrTlFuCKodAsY%2BzeROaikIPmNG0qin6A0hY%2BomMzO%2B9%2BOqMMYm4gLincB36u0%2BqVL5bpin96wOU%2F%2BpY8CpBCCGIMb5AcXSrDU0%2F9tUXJJ%2FY6pKCmh%2BnZHqP%2BxdQkWFo3XnjZDCb8IS%2FBjqkAQOUlfPTmDgBsILRgu29flMP3GeawbIMrctemsHsQ9TCpOiZSqA38wOmYmIwgHPepTl6cVR4Ibc%2BazRwBmnY12WGUcFguBLTAJQyMLmjByoaCwSTMLqE1RSQUFfHtRJMmee9tVFu2uSViicRTDmeMGbLhan9jY5H2pGMMxGtt79uOXtuQoOtxdP8sjBiNfQHkqrAZDYjD2PFCuc%2FOJrL0JC4U3aM&X-Amz-Signature=abaa3c39a8563126b7fb2c7fb6232e46e42179fd8f7b91722bd747b1263423cb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHRVPG6I%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B%2FoW5Bpcr3UyNTd4rdcTFNUnZaaueRvPpz9nQH45XSgIhAIKJ9jfftwbdGsit7l453TwH3YlStyro6N5XJzLv2cG%2FKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmJ5dGxrqllNudLvoq3AOU9WTmCcuZPJETtKrKQXoGhOBg0RR%2B0yjIQsDRq74GmNDc%2BGCoUzGAO7k%2FKiy8Q7b7kIF1hMxBT%2FCp7GRC23xbbMMtad6TH5gPuT3ZthREmuFchT6lw6lWqirtKE%2BtvXveoRV2G7GN7%2FImFS9qeF1V7SKTThCa1ZB7udxMRobq5LPXU00um35dKascv3MKwuATg8GPWqiWGafV4z9UsL1rDmc7CnTlj4zYghoUWHTbIjkTLKt14n8OyUzPH2eE5UQRyZlspDK1v4bqLuCyoSacdhpRPFaUdpyUK%2FNw2vHM8W0F3x8D6Rf%2FucV5%2FcqlwPB2OPkteOD4msVQ3As%2BRSrhqLt%2B4DXMQO5DC95PHqjrD3yTg1HlbigIpN%2FXzeMOUZLmYGlamrmPK8iWfNGmN1%2B0xGqAfgUIYG%2BPoXRc%2BxSZA%2FXXi1h7EOjSmfEK7cvSy06nPK5iJWZwTFlwGIY4uMNqv6jgoOhbMrmeTtXQL6k5y4ylTWFl8c%2BHZCrTlFuCKodAsY%2BzeROaikIPmNG0qin6A0hY%2BomMzO%2B9%2BOqMMYm4gLincB36u0%2BqVL5bpin96wOU%2F%2BpY8CpBCCGIMb5AcXSrDU0%2F9tUXJJ%2FY6pKCmh%2BnZHqP%2BxdQkWFo3XnjZDCb8IS%2FBjqkAQOUlfPTmDgBsILRgu29flMP3GeawbIMrctemsHsQ9TCpOiZSqA38wOmYmIwgHPepTl6cVR4Ibc%2BazRwBmnY12WGUcFguBLTAJQyMLmjByoaCwSTMLqE1RSQUFfHtRJMmee9tVFu2uSViicRTDmeMGbLhan9jY5H2pGMMxGtt79uOXtuQoOtxdP8sjBiNfQHkqrAZDYjD2PFCuc%2FOJrL0JC4U3aM&X-Amz-Signature=018183bca31bc0ac45373ede537fc860a00971126e7fe91dcac749df7d597513&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHRVPG6I%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B%2FoW5Bpcr3UyNTd4rdcTFNUnZaaueRvPpz9nQH45XSgIhAIKJ9jfftwbdGsit7l453TwH3YlStyro6N5XJzLv2cG%2FKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmJ5dGxrqllNudLvoq3AOU9WTmCcuZPJETtKrKQXoGhOBg0RR%2B0yjIQsDRq74GmNDc%2BGCoUzGAO7k%2FKiy8Q7b7kIF1hMxBT%2FCp7GRC23xbbMMtad6TH5gPuT3ZthREmuFchT6lw6lWqirtKE%2BtvXveoRV2G7GN7%2FImFS9qeF1V7SKTThCa1ZB7udxMRobq5LPXU00um35dKascv3MKwuATg8GPWqiWGafV4z9UsL1rDmc7CnTlj4zYghoUWHTbIjkTLKt14n8OyUzPH2eE5UQRyZlspDK1v4bqLuCyoSacdhpRPFaUdpyUK%2FNw2vHM8W0F3x8D6Rf%2FucV5%2FcqlwPB2OPkteOD4msVQ3As%2BRSrhqLt%2B4DXMQO5DC95PHqjrD3yTg1HlbigIpN%2FXzeMOUZLmYGlamrmPK8iWfNGmN1%2B0xGqAfgUIYG%2BPoXRc%2BxSZA%2FXXi1h7EOjSmfEK7cvSy06nPK5iJWZwTFlwGIY4uMNqv6jgoOhbMrmeTtXQL6k5y4ylTWFl8c%2BHZCrTlFuCKodAsY%2BzeROaikIPmNG0qin6A0hY%2BomMzO%2B9%2BOqMMYm4gLincB36u0%2BqVL5bpin96wOU%2F%2BpY8CpBCCGIMb5AcXSrDU0%2F9tUXJJ%2FY6pKCmh%2BnZHqP%2BxdQkWFo3XnjZDCb8IS%2FBjqkAQOUlfPTmDgBsILRgu29flMP3GeawbIMrctemsHsQ9TCpOiZSqA38wOmYmIwgHPepTl6cVR4Ibc%2BazRwBmnY12WGUcFguBLTAJQyMLmjByoaCwSTMLqE1RSQUFfHtRJMmee9tVFu2uSViicRTDmeMGbLhan9jY5H2pGMMxGtt79uOXtuQoOtxdP8sjBiNfQHkqrAZDYjD2PFCuc%2FOJrL0JC4U3aM&X-Amz-Signature=03d483ffa5b45eb0f97521b7f41ef4f571d54752e548552ba13982d9fcfe1aa7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHRVPG6I%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B%2FoW5Bpcr3UyNTd4rdcTFNUnZaaueRvPpz9nQH45XSgIhAIKJ9jfftwbdGsit7l453TwH3YlStyro6N5XJzLv2cG%2FKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmJ5dGxrqllNudLvoq3AOU9WTmCcuZPJETtKrKQXoGhOBg0RR%2B0yjIQsDRq74GmNDc%2BGCoUzGAO7k%2FKiy8Q7b7kIF1hMxBT%2FCp7GRC23xbbMMtad6TH5gPuT3ZthREmuFchT6lw6lWqirtKE%2BtvXveoRV2G7GN7%2FImFS9qeF1V7SKTThCa1ZB7udxMRobq5LPXU00um35dKascv3MKwuATg8GPWqiWGafV4z9UsL1rDmc7CnTlj4zYghoUWHTbIjkTLKt14n8OyUzPH2eE5UQRyZlspDK1v4bqLuCyoSacdhpRPFaUdpyUK%2FNw2vHM8W0F3x8D6Rf%2FucV5%2FcqlwPB2OPkteOD4msVQ3As%2BRSrhqLt%2B4DXMQO5DC95PHqjrD3yTg1HlbigIpN%2FXzeMOUZLmYGlamrmPK8iWfNGmN1%2B0xGqAfgUIYG%2BPoXRc%2BxSZA%2FXXi1h7EOjSmfEK7cvSy06nPK5iJWZwTFlwGIY4uMNqv6jgoOhbMrmeTtXQL6k5y4ylTWFl8c%2BHZCrTlFuCKodAsY%2BzeROaikIPmNG0qin6A0hY%2BomMzO%2B9%2BOqMMYm4gLincB36u0%2BqVL5bpin96wOU%2F%2BpY8CpBCCGIMb5AcXSrDU0%2F9tUXJJ%2FY6pKCmh%2BnZHqP%2BxdQkWFo3XnjZDCb8IS%2FBjqkAQOUlfPTmDgBsILRgu29flMP3GeawbIMrctemsHsQ9TCpOiZSqA38wOmYmIwgHPepTl6cVR4Ibc%2BazRwBmnY12WGUcFguBLTAJQyMLmjByoaCwSTMLqE1RSQUFfHtRJMmee9tVFu2uSViicRTDmeMGbLhan9jY5H2pGMMxGtt79uOXtuQoOtxdP8sjBiNfQHkqrAZDYjD2PFCuc%2FOJrL0JC4U3aM&X-Amz-Signature=1ac72bf077787f58676af3064fa9752488e4fde9f3ad3522b91f4c54e6f1eebb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
