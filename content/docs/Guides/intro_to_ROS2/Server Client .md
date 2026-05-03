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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZW6FJTX%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnhnnJbvdTs0SD%2BK4Pcc9UDyto%2Bx%2Btdg0zLNn62kHxDAiEAgJa27W6JTlVHQcJyzeYDOj8QqUMHSkN5%2FFh6yIm4Sqwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPZ42RhCdXpKGN%2BrjircA3xGARUI6UHDxHcsZq4sIFGEUY6oXq5lJSWQqL0QMb1LzFojkqZOg%2F5gcK%2F2l5ZshnmMnA0A0Rs4o4%2BVilTxz9CPTDtbMoOOXKgoMAA7ujyW6sdJhT7hQigbP0%2F6dkMEyLnkydzl7AuEAdK8kTK4oVpntXc0v117EhinlxQV7rIr8AezscVMJWrFTEEX0g1Yasg0ZQQq%2BRw%2BGE51EcOyc9HwncsWNxoepYKoS4L8dbTH6AK%2FlkG0pcTnAqaaX4O2WKnpy0sefLnujP2gFGx70MleMviWpZmqjrfG8wPVnkKhFeERJHYJcKhpCK4NYLJj1xGsY0FkcUcQ4yf169Zw9AtvbWaPt352cJYbZGY%2FhS0uP1KOAIN0ahx4siTsG7k%2BpBig1%2F8yREU%2FS2EFBQY1cpPfeWGAIxt6AgpBDoUeRKoNiawYvbvX8hD5vzr%2FAE97udCwb3GwWpv4G%2BI10R%2FfT2kpT%2BOn9FPGpjW3nT4PjlUV2qUuHMUdYHUq0Iaynzjz6nFR1Se52Yggbxo8TjAjAVtCV79BronE6kf1QXZlHdnFKcNqN%2BFw1Xy%2FY5KttgNFKzBNBvyXvkQB4C6FMReVKDs3bTjg03QEPArHGGFvIbXSJhvcnshsuE1ObEorMMjY2s8GOqUB55qIA5XSyze9Y0whuA9NkRVa5NQXLo%2F0Ac4NdJ4xmaxog1yEq4yzXBP9Ysv3FgaXemaB6JBL2vRBsOan3mVr3TX0H6VS%2BUJKzKzsnugdTxUz8ir5QFKKWY9i0I6RXF5XtlDVeMarrjNsdpSMZZ4WsaZofL47QCEHnbBOXUd6GNpSwXXGRSWS2EZeRZC%2F3uOVPQKRYFBNeUxOI6C%2FHQtGaJNQVamw&X-Amz-Signature=498b6bf87282059f7385b00931f3ea51e0167f7164934f8220cd28ccf6f442fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZW6FJTX%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnhnnJbvdTs0SD%2BK4Pcc9UDyto%2Bx%2Btdg0zLNn62kHxDAiEAgJa27W6JTlVHQcJyzeYDOj8QqUMHSkN5%2FFh6yIm4Sqwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPZ42RhCdXpKGN%2BrjircA3xGARUI6UHDxHcsZq4sIFGEUY6oXq5lJSWQqL0QMb1LzFojkqZOg%2F5gcK%2F2l5ZshnmMnA0A0Rs4o4%2BVilTxz9CPTDtbMoOOXKgoMAA7ujyW6sdJhT7hQigbP0%2F6dkMEyLnkydzl7AuEAdK8kTK4oVpntXc0v117EhinlxQV7rIr8AezscVMJWrFTEEX0g1Yasg0ZQQq%2BRw%2BGE51EcOyc9HwncsWNxoepYKoS4L8dbTH6AK%2FlkG0pcTnAqaaX4O2WKnpy0sefLnujP2gFGx70MleMviWpZmqjrfG8wPVnkKhFeERJHYJcKhpCK4NYLJj1xGsY0FkcUcQ4yf169Zw9AtvbWaPt352cJYbZGY%2FhS0uP1KOAIN0ahx4siTsG7k%2BpBig1%2F8yREU%2FS2EFBQY1cpPfeWGAIxt6AgpBDoUeRKoNiawYvbvX8hD5vzr%2FAE97udCwb3GwWpv4G%2BI10R%2FfT2kpT%2BOn9FPGpjW3nT4PjlUV2qUuHMUdYHUq0Iaynzjz6nFR1Se52Yggbxo8TjAjAVtCV79BronE6kf1QXZlHdnFKcNqN%2BFw1Xy%2FY5KttgNFKzBNBvyXvkQB4C6FMReVKDs3bTjg03QEPArHGGFvIbXSJhvcnshsuE1ObEorMMjY2s8GOqUB55qIA5XSyze9Y0whuA9NkRVa5NQXLo%2F0Ac4NdJ4xmaxog1yEq4yzXBP9Ysv3FgaXemaB6JBL2vRBsOan3mVr3TX0H6VS%2BUJKzKzsnugdTxUz8ir5QFKKWY9i0I6RXF5XtlDVeMarrjNsdpSMZZ4WsaZofL47QCEHnbBOXUd6GNpSwXXGRSWS2EZeRZC%2F3uOVPQKRYFBNeUxOI6C%2FHQtGaJNQVamw&X-Amz-Signature=86747cb928077733034eea7f298cebddf579b5a092d85d8c12693866d6943214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZW6FJTX%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnhnnJbvdTs0SD%2BK4Pcc9UDyto%2Bx%2Btdg0zLNn62kHxDAiEAgJa27W6JTlVHQcJyzeYDOj8QqUMHSkN5%2FFh6yIm4Sqwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPZ42RhCdXpKGN%2BrjircA3xGARUI6UHDxHcsZq4sIFGEUY6oXq5lJSWQqL0QMb1LzFojkqZOg%2F5gcK%2F2l5ZshnmMnA0A0Rs4o4%2BVilTxz9CPTDtbMoOOXKgoMAA7ujyW6sdJhT7hQigbP0%2F6dkMEyLnkydzl7AuEAdK8kTK4oVpntXc0v117EhinlxQV7rIr8AezscVMJWrFTEEX0g1Yasg0ZQQq%2BRw%2BGE51EcOyc9HwncsWNxoepYKoS4L8dbTH6AK%2FlkG0pcTnAqaaX4O2WKnpy0sefLnujP2gFGx70MleMviWpZmqjrfG8wPVnkKhFeERJHYJcKhpCK4NYLJj1xGsY0FkcUcQ4yf169Zw9AtvbWaPt352cJYbZGY%2FhS0uP1KOAIN0ahx4siTsG7k%2BpBig1%2F8yREU%2FS2EFBQY1cpPfeWGAIxt6AgpBDoUeRKoNiawYvbvX8hD5vzr%2FAE97udCwb3GwWpv4G%2BI10R%2FfT2kpT%2BOn9FPGpjW3nT4PjlUV2qUuHMUdYHUq0Iaynzjz6nFR1Se52Yggbxo8TjAjAVtCV79BronE6kf1QXZlHdnFKcNqN%2BFw1Xy%2FY5KttgNFKzBNBvyXvkQB4C6FMReVKDs3bTjg03QEPArHGGFvIbXSJhvcnshsuE1ObEorMMjY2s8GOqUB55qIA5XSyze9Y0whuA9NkRVa5NQXLo%2F0Ac4NdJ4xmaxog1yEq4yzXBP9Ysv3FgaXemaB6JBL2vRBsOan3mVr3TX0H6VS%2BUJKzKzsnugdTxUz8ir5QFKKWY9i0I6RXF5XtlDVeMarrjNsdpSMZZ4WsaZofL47QCEHnbBOXUd6GNpSwXXGRSWS2EZeRZC%2F3uOVPQKRYFBNeUxOI6C%2FHQtGaJNQVamw&X-Amz-Signature=a563bca677db201a628517ca0d8d70f934b849beeb58e890bee3b87e406809fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZW6FJTX%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnhnnJbvdTs0SD%2BK4Pcc9UDyto%2Bx%2Btdg0zLNn62kHxDAiEAgJa27W6JTlVHQcJyzeYDOj8QqUMHSkN5%2FFh6yIm4Sqwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPZ42RhCdXpKGN%2BrjircA3xGARUI6UHDxHcsZq4sIFGEUY6oXq5lJSWQqL0QMb1LzFojkqZOg%2F5gcK%2F2l5ZshnmMnA0A0Rs4o4%2BVilTxz9CPTDtbMoOOXKgoMAA7ujyW6sdJhT7hQigbP0%2F6dkMEyLnkydzl7AuEAdK8kTK4oVpntXc0v117EhinlxQV7rIr8AezscVMJWrFTEEX0g1Yasg0ZQQq%2BRw%2BGE51EcOyc9HwncsWNxoepYKoS4L8dbTH6AK%2FlkG0pcTnAqaaX4O2WKnpy0sefLnujP2gFGx70MleMviWpZmqjrfG8wPVnkKhFeERJHYJcKhpCK4NYLJj1xGsY0FkcUcQ4yf169Zw9AtvbWaPt352cJYbZGY%2FhS0uP1KOAIN0ahx4siTsG7k%2BpBig1%2F8yREU%2FS2EFBQY1cpPfeWGAIxt6AgpBDoUeRKoNiawYvbvX8hD5vzr%2FAE97udCwb3GwWpv4G%2BI10R%2FfT2kpT%2BOn9FPGpjW3nT4PjlUV2qUuHMUdYHUq0Iaynzjz6nFR1Se52Yggbxo8TjAjAVtCV79BronE6kf1QXZlHdnFKcNqN%2BFw1Xy%2FY5KttgNFKzBNBvyXvkQB4C6FMReVKDs3bTjg03QEPArHGGFvIbXSJhvcnshsuE1ObEorMMjY2s8GOqUB55qIA5XSyze9Y0whuA9NkRVa5NQXLo%2F0Ac4NdJ4xmaxog1yEq4yzXBP9Ysv3FgaXemaB6JBL2vRBsOan3mVr3TX0H6VS%2BUJKzKzsnugdTxUz8ir5QFKKWY9i0I6RXF5XtlDVeMarrjNsdpSMZZ4WsaZofL47QCEHnbBOXUd6GNpSwXXGRSWS2EZeRZC%2F3uOVPQKRYFBNeUxOI6C%2FHQtGaJNQVamw&X-Amz-Signature=8bc69d33ca6fdbf4adadcea02baae7a84e71a7fdf5cd0ab803ab20afb6317fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZW6FJTX%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnhnnJbvdTs0SD%2BK4Pcc9UDyto%2Bx%2Btdg0zLNn62kHxDAiEAgJa27W6JTlVHQcJyzeYDOj8QqUMHSkN5%2FFh6yIm4Sqwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPZ42RhCdXpKGN%2BrjircA3xGARUI6UHDxHcsZq4sIFGEUY6oXq5lJSWQqL0QMb1LzFojkqZOg%2F5gcK%2F2l5ZshnmMnA0A0Rs4o4%2BVilTxz9CPTDtbMoOOXKgoMAA7ujyW6sdJhT7hQigbP0%2F6dkMEyLnkydzl7AuEAdK8kTK4oVpntXc0v117EhinlxQV7rIr8AezscVMJWrFTEEX0g1Yasg0ZQQq%2BRw%2BGE51EcOyc9HwncsWNxoepYKoS4L8dbTH6AK%2FlkG0pcTnAqaaX4O2WKnpy0sefLnujP2gFGx70MleMviWpZmqjrfG8wPVnkKhFeERJHYJcKhpCK4NYLJj1xGsY0FkcUcQ4yf169Zw9AtvbWaPt352cJYbZGY%2FhS0uP1KOAIN0ahx4siTsG7k%2BpBig1%2F8yREU%2FS2EFBQY1cpPfeWGAIxt6AgpBDoUeRKoNiawYvbvX8hD5vzr%2FAE97udCwb3GwWpv4G%2BI10R%2FfT2kpT%2BOn9FPGpjW3nT4PjlUV2qUuHMUdYHUq0Iaynzjz6nFR1Se52Yggbxo8TjAjAVtCV79BronE6kf1QXZlHdnFKcNqN%2BFw1Xy%2FY5KttgNFKzBNBvyXvkQB4C6FMReVKDs3bTjg03QEPArHGGFvIbXSJhvcnshsuE1ObEorMMjY2s8GOqUB55qIA5XSyze9Y0whuA9NkRVa5NQXLo%2F0Ac4NdJ4xmaxog1yEq4yzXBP9Ysv3FgaXemaB6JBL2vRBsOan3mVr3TX0H6VS%2BUJKzKzsnugdTxUz8ir5QFKKWY9i0I6RXF5XtlDVeMarrjNsdpSMZZ4WsaZofL47QCEHnbBOXUd6GNpSwXXGRSWS2EZeRZC%2F3uOVPQKRYFBNeUxOI6C%2FHQtGaJNQVamw&X-Amz-Signature=ea480bb64cb27f2985708c8cd2de2841e6637621c502c651b30d7dece3f66fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
