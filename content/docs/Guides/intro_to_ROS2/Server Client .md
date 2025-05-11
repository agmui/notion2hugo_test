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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655D4U2HY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCbSsvRFZirF5ceRYy0%2FdzJ%2FC9HiI7ytZR2rK9ktZkuigIhALI8qYvYF7BpYxoHM7gzf49Kl5a3TdQ04MSmHwrtHZ1MKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXkfIAyD8AU3pkBcAq3AOCp%2BRj4X9ppao%2BonF4t2aDcDOxcO5GUO79RFn1mQUvBW2MwyNemBCCioiprMt%2F8MM%2FwzJafii5PVfjLed8LIxVj19iqjmq6awis2yQuwHQElPyjcH0lfPkcNU93PkBkuCOnZv%2F5XR9iG4KWxufvOceaU%2F%2Bu7YZLGG%2Fhs3F0rNa0BGQMHsSo7T0h531SNLdfrKIAb17lV1AYFfXFSVQ54QbrkRyRpsSf3KRYQFAQNFchs11y5akdyr2seqDmJQUWNjxfFPrs%2Bg%2FxZyBD33gwhvKioicJd2I5rGYJJ2uF6HD9oQ6OnJOvtoBmrZ75WW%2B67WHGoIuwsu7cY7skMNtT12HwAWLg8KvazI4yl%2FDPAA24tb%2BjfgECREnGSLa%2BiN%2FcV83jtFKOeOIpmxl1w1w0uYZ7meVZcRccS5fHvAFCWtYqv%2BH2VK5i1fF7Q14wLCipjA5mi1nTl%2F%2Fp76csLukJlvhjbUgo5Sjd%2BIMwTWE3E6chLfLuiX5LWyNnEtrOePfnjqHTYczGcYV0gAhJLbRPWzQAkNc3x7x2is3H8L2AvLDATfQWG2LWMxS%2BP1xN%2Fjo2yIApDkp3yd5P87Gpd4WQlLZUY91KlZRUbrzWbBxwqVelpWRbmx2J4j4LfJDiDDs3ILBBjqkAZr7chgXuDnsIXnLqz6CB%2B184MOacYBFOCfZVMw2rdioLF%2BxsUrt1zDkIUBFgPeDVDFj%2B1NAbhA0Znk99p8Snsisw3zt7JR7SvJDOoLvgeetDbuniAVjrRRBjOyS%2BCAoEWxZUC16Cyy78VbVKM%2BqtrPqFo%2BtNECAgTXU%2BX%2BhMguhMZt6BmKH0%2BDXOCn0OfCQpksQLgHn1pGTekHpXMNB6AfVDn3I&X-Amz-Signature=813108740b16688a8a3f090db01fb0cb3dcc9456cebe30fc0e78c3254e375844&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655D4U2HY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCbSsvRFZirF5ceRYy0%2FdzJ%2FC9HiI7ytZR2rK9ktZkuigIhALI8qYvYF7BpYxoHM7gzf49Kl5a3TdQ04MSmHwrtHZ1MKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXkfIAyD8AU3pkBcAq3AOCp%2BRj4X9ppao%2BonF4t2aDcDOxcO5GUO79RFn1mQUvBW2MwyNemBCCioiprMt%2F8MM%2FwzJafii5PVfjLed8LIxVj19iqjmq6awis2yQuwHQElPyjcH0lfPkcNU93PkBkuCOnZv%2F5XR9iG4KWxufvOceaU%2F%2Bu7YZLGG%2Fhs3F0rNa0BGQMHsSo7T0h531SNLdfrKIAb17lV1AYFfXFSVQ54QbrkRyRpsSf3KRYQFAQNFchs11y5akdyr2seqDmJQUWNjxfFPrs%2Bg%2FxZyBD33gwhvKioicJd2I5rGYJJ2uF6HD9oQ6OnJOvtoBmrZ75WW%2B67WHGoIuwsu7cY7skMNtT12HwAWLg8KvazI4yl%2FDPAA24tb%2BjfgECREnGSLa%2BiN%2FcV83jtFKOeOIpmxl1w1w0uYZ7meVZcRccS5fHvAFCWtYqv%2BH2VK5i1fF7Q14wLCipjA5mi1nTl%2F%2Fp76csLukJlvhjbUgo5Sjd%2BIMwTWE3E6chLfLuiX5LWyNnEtrOePfnjqHTYczGcYV0gAhJLbRPWzQAkNc3x7x2is3H8L2AvLDATfQWG2LWMxS%2BP1xN%2Fjo2yIApDkp3yd5P87Gpd4WQlLZUY91KlZRUbrzWbBxwqVelpWRbmx2J4j4LfJDiDDs3ILBBjqkAZr7chgXuDnsIXnLqz6CB%2B184MOacYBFOCfZVMw2rdioLF%2BxsUrt1zDkIUBFgPeDVDFj%2B1NAbhA0Znk99p8Snsisw3zt7JR7SvJDOoLvgeetDbuniAVjrRRBjOyS%2BCAoEWxZUC16Cyy78VbVKM%2BqtrPqFo%2BtNECAgTXU%2BX%2BhMguhMZt6BmKH0%2BDXOCn0OfCQpksQLgHn1pGTekHpXMNB6AfVDn3I&X-Amz-Signature=1582770a3f0ebea2ef182184e2cb810fd4171e9aa8b41359a30b8d8a4601d629&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655D4U2HY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCbSsvRFZirF5ceRYy0%2FdzJ%2FC9HiI7ytZR2rK9ktZkuigIhALI8qYvYF7BpYxoHM7gzf49Kl5a3TdQ04MSmHwrtHZ1MKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXkfIAyD8AU3pkBcAq3AOCp%2BRj4X9ppao%2BonF4t2aDcDOxcO5GUO79RFn1mQUvBW2MwyNemBCCioiprMt%2F8MM%2FwzJafii5PVfjLed8LIxVj19iqjmq6awis2yQuwHQElPyjcH0lfPkcNU93PkBkuCOnZv%2F5XR9iG4KWxufvOceaU%2F%2Bu7YZLGG%2Fhs3F0rNa0BGQMHsSo7T0h531SNLdfrKIAb17lV1AYFfXFSVQ54QbrkRyRpsSf3KRYQFAQNFchs11y5akdyr2seqDmJQUWNjxfFPrs%2Bg%2FxZyBD33gwhvKioicJd2I5rGYJJ2uF6HD9oQ6OnJOvtoBmrZ75WW%2B67WHGoIuwsu7cY7skMNtT12HwAWLg8KvazI4yl%2FDPAA24tb%2BjfgECREnGSLa%2BiN%2FcV83jtFKOeOIpmxl1w1w0uYZ7meVZcRccS5fHvAFCWtYqv%2BH2VK5i1fF7Q14wLCipjA5mi1nTl%2F%2Fp76csLukJlvhjbUgo5Sjd%2BIMwTWE3E6chLfLuiX5LWyNnEtrOePfnjqHTYczGcYV0gAhJLbRPWzQAkNc3x7x2is3H8L2AvLDATfQWG2LWMxS%2BP1xN%2Fjo2yIApDkp3yd5P87Gpd4WQlLZUY91KlZRUbrzWbBxwqVelpWRbmx2J4j4LfJDiDDs3ILBBjqkAZr7chgXuDnsIXnLqz6CB%2B184MOacYBFOCfZVMw2rdioLF%2BxsUrt1zDkIUBFgPeDVDFj%2B1NAbhA0Znk99p8Snsisw3zt7JR7SvJDOoLvgeetDbuniAVjrRRBjOyS%2BCAoEWxZUC16Cyy78VbVKM%2BqtrPqFo%2BtNECAgTXU%2BX%2BhMguhMZt6BmKH0%2BDXOCn0OfCQpksQLgHn1pGTekHpXMNB6AfVDn3I&X-Amz-Signature=0ab1d32929e7e115509fc5c69b4e918d2e0f94fc92f360025aea01f877d70d2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655D4U2HY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCbSsvRFZirF5ceRYy0%2FdzJ%2FC9HiI7ytZR2rK9ktZkuigIhALI8qYvYF7BpYxoHM7gzf49Kl5a3TdQ04MSmHwrtHZ1MKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXkfIAyD8AU3pkBcAq3AOCp%2BRj4X9ppao%2BonF4t2aDcDOxcO5GUO79RFn1mQUvBW2MwyNemBCCioiprMt%2F8MM%2FwzJafii5PVfjLed8LIxVj19iqjmq6awis2yQuwHQElPyjcH0lfPkcNU93PkBkuCOnZv%2F5XR9iG4KWxufvOceaU%2F%2Bu7YZLGG%2Fhs3F0rNa0BGQMHsSo7T0h531SNLdfrKIAb17lV1AYFfXFSVQ54QbrkRyRpsSf3KRYQFAQNFchs11y5akdyr2seqDmJQUWNjxfFPrs%2Bg%2FxZyBD33gwhvKioicJd2I5rGYJJ2uF6HD9oQ6OnJOvtoBmrZ75WW%2B67WHGoIuwsu7cY7skMNtT12HwAWLg8KvazI4yl%2FDPAA24tb%2BjfgECREnGSLa%2BiN%2FcV83jtFKOeOIpmxl1w1w0uYZ7meVZcRccS5fHvAFCWtYqv%2BH2VK5i1fF7Q14wLCipjA5mi1nTl%2F%2Fp76csLukJlvhjbUgo5Sjd%2BIMwTWE3E6chLfLuiX5LWyNnEtrOePfnjqHTYczGcYV0gAhJLbRPWzQAkNc3x7x2is3H8L2AvLDATfQWG2LWMxS%2BP1xN%2Fjo2yIApDkp3yd5P87Gpd4WQlLZUY91KlZRUbrzWbBxwqVelpWRbmx2J4j4LfJDiDDs3ILBBjqkAZr7chgXuDnsIXnLqz6CB%2B184MOacYBFOCfZVMw2rdioLF%2BxsUrt1zDkIUBFgPeDVDFj%2B1NAbhA0Znk99p8Snsisw3zt7JR7SvJDOoLvgeetDbuniAVjrRRBjOyS%2BCAoEWxZUC16Cyy78VbVKM%2BqtrPqFo%2BtNECAgTXU%2BX%2BhMguhMZt6BmKH0%2BDXOCn0OfCQpksQLgHn1pGTekHpXMNB6AfVDn3I&X-Amz-Signature=e13e88f9a32d4a17abb3d33f403f5f7a372d6161aa6ac7b318375af1b23f4ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655D4U2HY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCbSsvRFZirF5ceRYy0%2FdzJ%2FC9HiI7ytZR2rK9ktZkuigIhALI8qYvYF7BpYxoHM7gzf49Kl5a3TdQ04MSmHwrtHZ1MKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXkfIAyD8AU3pkBcAq3AOCp%2BRj4X9ppao%2BonF4t2aDcDOxcO5GUO79RFn1mQUvBW2MwyNemBCCioiprMt%2F8MM%2FwzJafii5PVfjLed8LIxVj19iqjmq6awis2yQuwHQElPyjcH0lfPkcNU93PkBkuCOnZv%2F5XR9iG4KWxufvOceaU%2F%2Bu7YZLGG%2Fhs3F0rNa0BGQMHsSo7T0h531SNLdfrKIAb17lV1AYFfXFSVQ54QbrkRyRpsSf3KRYQFAQNFchs11y5akdyr2seqDmJQUWNjxfFPrs%2Bg%2FxZyBD33gwhvKioicJd2I5rGYJJ2uF6HD9oQ6OnJOvtoBmrZ75WW%2B67WHGoIuwsu7cY7skMNtT12HwAWLg8KvazI4yl%2FDPAA24tb%2BjfgECREnGSLa%2BiN%2FcV83jtFKOeOIpmxl1w1w0uYZ7meVZcRccS5fHvAFCWtYqv%2BH2VK5i1fF7Q14wLCipjA5mi1nTl%2F%2Fp76csLukJlvhjbUgo5Sjd%2BIMwTWE3E6chLfLuiX5LWyNnEtrOePfnjqHTYczGcYV0gAhJLbRPWzQAkNc3x7x2is3H8L2AvLDATfQWG2LWMxS%2BP1xN%2Fjo2yIApDkp3yd5P87Gpd4WQlLZUY91KlZRUbrzWbBxwqVelpWRbmx2J4j4LfJDiDDs3ILBBjqkAZr7chgXuDnsIXnLqz6CB%2B184MOacYBFOCfZVMw2rdioLF%2BxsUrt1zDkIUBFgPeDVDFj%2B1NAbhA0Znk99p8Snsisw3zt7JR7SvJDOoLvgeetDbuniAVjrRRBjOyS%2BCAoEWxZUC16Cyy78VbVKM%2BqtrPqFo%2BtNECAgTXU%2BX%2BhMguhMZt6BmKH0%2BDXOCn0OfCQpksQLgHn1pGTekHpXMNB6AfVDn3I&X-Amz-Signature=384ad52e892eaa2971ba741b5f7f808ebd6919d3efd3713ec3bd4f94915e754e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
