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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRX7A55%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD270oFjiSzPSyetVska5FQgtxvPWKwUgSVogyrP5y2VAIhAIkygzBmPOpFQA9TUv%2Bfz6MwGRBi029WIjZeKY3apoEzKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOwD9DTNcZsk53vYsq3AOxz1Xf3IkC84KN1w70lDRJ3BQOAqvmQ55F1tllqWkPm%2Ft8Uok0cdm0xAvlyMJRAwtYRquttaDFAQqzNqf1draO2MPwaLUGf7L8PU1EYvP5EbZoEWrBc7o1nTtmVDhnqS7tvcA6ycFBbdXNeNAXOTWsyACx1%2FiN4LeSl7KemitC7J36yIIyVqLkRZiV7aop8NqfYWBGHCAu8AXx%2FjAoGI51fke%2B67MKDr0Xn3JXD3w8fFIYL58dsk30%2F5qQ4rRZ70gdL%2FGYi9d80LsauWSf6Hdk4c95koM%2FOTN9lAJJctfQAljDIovEUCThQSWuqWiE%2F8%2BgAmdvRuGVvkM%2F7WSd320teB6kj6TblEHYygi989f6kIalgtN3k06L9RFNgXtCUHjBDNSX%2BHI6U4%2BzvCt9y0i3mJFhrHiXMaFeUNFPg0fy8MqMyPrHBGhI99vjABb0UFklrql238isXfnxVQMzCKVOfT4sTyGrTwn73MKl6k2%2F%2FTj8h8Ldgg%2FfeCkPGWhHZfiJXB6eYRUcy%2F2lL9fufgMXRCYPDfU0AAxn4HyMcf8EffX7d7YaqcpE%2FC9YnIgnacCwwZSXiLG0rgBJt8EAKXoBGO6MrAM%2BfABnhsPd5f8PGx6jQvRmb7Nycuw%2FMDCnv6DCBjqkAaCWz6Y4%2Bskcm4zoSBotb%2FIr%2Bo9%2Fg0KQk4az3TR3HbOkaTbb5%2Fn8g%2Fp3Y7o50jgsz35ecv1kdERzilMzEiSjOQs8LKENH2V6CdY7px8lHVU7QTTb%2BLOA%2BFR3edzfUHGLe2nEc48%2FMRcS3vSPhq%2B%2FHc2VX8EuTQYIUnNpJ5gucpcmFDCaArKgTQzf2EaanxDANRsafjofkRxGCJH4gkC7ndflsrmE&X-Amz-Signature=08455acd71a0161c9297ed8eb1494c1ef0b4d7616040a043edfa56b804440553&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRX7A55%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD270oFjiSzPSyetVska5FQgtxvPWKwUgSVogyrP5y2VAIhAIkygzBmPOpFQA9TUv%2Bfz6MwGRBi029WIjZeKY3apoEzKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOwD9DTNcZsk53vYsq3AOxz1Xf3IkC84KN1w70lDRJ3BQOAqvmQ55F1tllqWkPm%2Ft8Uok0cdm0xAvlyMJRAwtYRquttaDFAQqzNqf1draO2MPwaLUGf7L8PU1EYvP5EbZoEWrBc7o1nTtmVDhnqS7tvcA6ycFBbdXNeNAXOTWsyACx1%2FiN4LeSl7KemitC7J36yIIyVqLkRZiV7aop8NqfYWBGHCAu8AXx%2FjAoGI51fke%2B67MKDr0Xn3JXD3w8fFIYL58dsk30%2F5qQ4rRZ70gdL%2FGYi9d80LsauWSf6Hdk4c95koM%2FOTN9lAJJctfQAljDIovEUCThQSWuqWiE%2F8%2BgAmdvRuGVvkM%2F7WSd320teB6kj6TblEHYygi989f6kIalgtN3k06L9RFNgXtCUHjBDNSX%2BHI6U4%2BzvCt9y0i3mJFhrHiXMaFeUNFPg0fy8MqMyPrHBGhI99vjABb0UFklrql238isXfnxVQMzCKVOfT4sTyGrTwn73MKl6k2%2F%2FTj8h8Ldgg%2FfeCkPGWhHZfiJXB6eYRUcy%2F2lL9fufgMXRCYPDfU0AAxn4HyMcf8EffX7d7YaqcpE%2FC9YnIgnacCwwZSXiLG0rgBJt8EAKXoBGO6MrAM%2BfABnhsPd5f8PGx6jQvRmb7Nycuw%2FMDCnv6DCBjqkAaCWz6Y4%2Bskcm4zoSBotb%2FIr%2Bo9%2Fg0KQk4az3TR3HbOkaTbb5%2Fn8g%2Fp3Y7o50jgsz35ecv1kdERzilMzEiSjOQs8LKENH2V6CdY7px8lHVU7QTTb%2BLOA%2BFR3edzfUHGLe2nEc48%2FMRcS3vSPhq%2B%2FHc2VX8EuTQYIUnNpJ5gucpcmFDCaArKgTQzf2EaanxDANRsafjofkRxGCJH4gkC7ndflsrmE&X-Amz-Signature=6d207dce729fab2411f83c6326abcb3f7a497d75ab0dcc893838798b168b9b05&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRX7A55%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD270oFjiSzPSyetVska5FQgtxvPWKwUgSVogyrP5y2VAIhAIkygzBmPOpFQA9TUv%2Bfz6MwGRBi029WIjZeKY3apoEzKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOwD9DTNcZsk53vYsq3AOxz1Xf3IkC84KN1w70lDRJ3BQOAqvmQ55F1tllqWkPm%2Ft8Uok0cdm0xAvlyMJRAwtYRquttaDFAQqzNqf1draO2MPwaLUGf7L8PU1EYvP5EbZoEWrBc7o1nTtmVDhnqS7tvcA6ycFBbdXNeNAXOTWsyACx1%2FiN4LeSl7KemitC7J36yIIyVqLkRZiV7aop8NqfYWBGHCAu8AXx%2FjAoGI51fke%2B67MKDr0Xn3JXD3w8fFIYL58dsk30%2F5qQ4rRZ70gdL%2FGYi9d80LsauWSf6Hdk4c95koM%2FOTN9lAJJctfQAljDIovEUCThQSWuqWiE%2F8%2BgAmdvRuGVvkM%2F7WSd320teB6kj6TblEHYygi989f6kIalgtN3k06L9RFNgXtCUHjBDNSX%2BHI6U4%2BzvCt9y0i3mJFhrHiXMaFeUNFPg0fy8MqMyPrHBGhI99vjABb0UFklrql238isXfnxVQMzCKVOfT4sTyGrTwn73MKl6k2%2F%2FTj8h8Ldgg%2FfeCkPGWhHZfiJXB6eYRUcy%2F2lL9fufgMXRCYPDfU0AAxn4HyMcf8EffX7d7YaqcpE%2FC9YnIgnacCwwZSXiLG0rgBJt8EAKXoBGO6MrAM%2BfABnhsPd5f8PGx6jQvRmb7Nycuw%2FMDCnv6DCBjqkAaCWz6Y4%2Bskcm4zoSBotb%2FIr%2Bo9%2Fg0KQk4az3TR3HbOkaTbb5%2Fn8g%2Fp3Y7o50jgsz35ecv1kdERzilMzEiSjOQs8LKENH2V6CdY7px8lHVU7QTTb%2BLOA%2BFR3edzfUHGLe2nEc48%2FMRcS3vSPhq%2B%2FHc2VX8EuTQYIUnNpJ5gucpcmFDCaArKgTQzf2EaanxDANRsafjofkRxGCJH4gkC7ndflsrmE&X-Amz-Signature=ca1602dd99d369ed43b70b194a7fc319b4c2939abd7c646fb99c6b51705fa5b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRX7A55%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD270oFjiSzPSyetVska5FQgtxvPWKwUgSVogyrP5y2VAIhAIkygzBmPOpFQA9TUv%2Bfz6MwGRBi029WIjZeKY3apoEzKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOwD9DTNcZsk53vYsq3AOxz1Xf3IkC84KN1w70lDRJ3BQOAqvmQ55F1tllqWkPm%2Ft8Uok0cdm0xAvlyMJRAwtYRquttaDFAQqzNqf1draO2MPwaLUGf7L8PU1EYvP5EbZoEWrBc7o1nTtmVDhnqS7tvcA6ycFBbdXNeNAXOTWsyACx1%2FiN4LeSl7KemitC7J36yIIyVqLkRZiV7aop8NqfYWBGHCAu8AXx%2FjAoGI51fke%2B67MKDr0Xn3JXD3w8fFIYL58dsk30%2F5qQ4rRZ70gdL%2FGYi9d80LsauWSf6Hdk4c95koM%2FOTN9lAJJctfQAljDIovEUCThQSWuqWiE%2F8%2BgAmdvRuGVvkM%2F7WSd320teB6kj6TblEHYygi989f6kIalgtN3k06L9RFNgXtCUHjBDNSX%2BHI6U4%2BzvCt9y0i3mJFhrHiXMaFeUNFPg0fy8MqMyPrHBGhI99vjABb0UFklrql238isXfnxVQMzCKVOfT4sTyGrTwn73MKl6k2%2F%2FTj8h8Ldgg%2FfeCkPGWhHZfiJXB6eYRUcy%2F2lL9fufgMXRCYPDfU0AAxn4HyMcf8EffX7d7YaqcpE%2FC9YnIgnacCwwZSXiLG0rgBJt8EAKXoBGO6MrAM%2BfABnhsPd5f8PGx6jQvRmb7Nycuw%2FMDCnv6DCBjqkAaCWz6Y4%2Bskcm4zoSBotb%2FIr%2Bo9%2Fg0KQk4az3TR3HbOkaTbb5%2Fn8g%2Fp3Y7o50jgsz35ecv1kdERzilMzEiSjOQs8LKENH2V6CdY7px8lHVU7QTTb%2BLOA%2BFR3edzfUHGLe2nEc48%2FMRcS3vSPhq%2B%2FHc2VX8EuTQYIUnNpJ5gucpcmFDCaArKgTQzf2EaanxDANRsafjofkRxGCJH4gkC7ndflsrmE&X-Amz-Signature=de2c88e994ab838404f963f28212c8560372e5382f7434425856da2fe4442bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRX7A55%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD270oFjiSzPSyetVska5FQgtxvPWKwUgSVogyrP5y2VAIhAIkygzBmPOpFQA9TUv%2Bfz6MwGRBi029WIjZeKY3apoEzKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOwD9DTNcZsk53vYsq3AOxz1Xf3IkC84KN1w70lDRJ3BQOAqvmQ55F1tllqWkPm%2Ft8Uok0cdm0xAvlyMJRAwtYRquttaDFAQqzNqf1draO2MPwaLUGf7L8PU1EYvP5EbZoEWrBc7o1nTtmVDhnqS7tvcA6ycFBbdXNeNAXOTWsyACx1%2FiN4LeSl7KemitC7J36yIIyVqLkRZiV7aop8NqfYWBGHCAu8AXx%2FjAoGI51fke%2B67MKDr0Xn3JXD3w8fFIYL58dsk30%2F5qQ4rRZ70gdL%2FGYi9d80LsauWSf6Hdk4c95koM%2FOTN9lAJJctfQAljDIovEUCThQSWuqWiE%2F8%2BgAmdvRuGVvkM%2F7WSd320teB6kj6TblEHYygi989f6kIalgtN3k06L9RFNgXtCUHjBDNSX%2BHI6U4%2BzvCt9y0i3mJFhrHiXMaFeUNFPg0fy8MqMyPrHBGhI99vjABb0UFklrql238isXfnxVQMzCKVOfT4sTyGrTwn73MKl6k2%2F%2FTj8h8Ldgg%2FfeCkPGWhHZfiJXB6eYRUcy%2F2lL9fufgMXRCYPDfU0AAxn4HyMcf8EffX7d7YaqcpE%2FC9YnIgnacCwwZSXiLG0rgBJt8EAKXoBGO6MrAM%2BfABnhsPd5f8PGx6jQvRmb7Nycuw%2FMDCnv6DCBjqkAaCWz6Y4%2Bskcm4zoSBotb%2FIr%2Bo9%2Fg0KQk4az3TR3HbOkaTbb5%2Fn8g%2Fp3Y7o50jgsz35ecv1kdERzilMzEiSjOQs8LKENH2V6CdY7px8lHVU7QTTb%2BLOA%2BFR3edzfUHGLe2nEc48%2FMRcS3vSPhq%2B%2FHc2VX8EuTQYIUnNpJ5gucpcmFDCaArKgTQzf2EaanxDANRsafjofkRxGCJH4gkC7ndflsrmE&X-Amz-Signature=61ec89b1dcb95fdbf5befd5c176b05dac0bb20c33dd3aeffdfcc71335faae3cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
