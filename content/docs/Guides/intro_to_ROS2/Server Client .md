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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZ5HVUF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHmw4WSj%2BC6tYZcRNCMW3bQZc5%2BIveHdN7X5NKlFQwuCAiEAuCnB%2BwMC8aAsG8aH9C9QntbRC54SowwPasXRCeTO0aQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDL%2B%2B1qgOPJ8riZZ0iyrcA3UL7M6Kdq0x1PL9xSEKLCovkURY5dal%2F4%2FtrBfM7BIH5qn5prSh23mOHhBrCsZrTvmENjZHIt52PonOz6jhCQlnt%2F4huIJOkLgiP9U9Ed8K%2BrJhAwql0t0UC8mc3J%2BaQM%2FlhleqI5RP10dC3rYu6jQKttdf4AvN3dYpWL30sN4t33GjoruMS8JnQvJrMUhSQULw0rMKRGsFipZDz%2BPazq13QEvJhLt27tyX3A%2FS%2FsZrXRqxnP1eWgpzOVtjmYvsCbp25iyLr09U76D%2FDMxFW%2F8rxXI3S3D3QHnu%2BRFtUI5Lve7GF2ce3ALbntdX2hCom5qYFtvtTNR9oRsb%2BM6AlKeKXE%2BDnTBuQlfg6UKMOZ45iLlOHKQ3XZfA1j9ORfacsxfwBGF1Z6THaOZqji78fYBP%2FY57zsFf3B%2B7o6Z3o74psTe0LKBzXnbRi4Sc2zeOLo%2FSN%2FdVdv2nf80QpUnZ6oTP%2B1A7zuJKLqL9aW2urgPSRuWoOW7qTe0%2BRvpUshenNecW07yRAqGTI1TYnwlqCxo7XD766PpVLZB34DJSMCOnrdM7EiNC5CdamCrrfoIqgaKXl6prxr3GFS2A3u96VmSPHTIZFT8mKeE6EWKOOnsyWPziRdJ0ca4oevVDMN%2Bjx70GOqUBQI21Y9DbkhhwYJmnDvPw1%2FYedzPqg0%2Bnwknyd9zPyiqCzVdsntCBkOv7dibm2svH834OZR6G84LT5txnilROW5FsSdFwiFvuxGXH7SZBr4S%2FXi0%2BK8Xtourq4JdA%2BvSRYZoljZ7CByN%2F7kIxHRbnPBcQnzV1keQmCYwtDE1OqkBfvagDQpevPrGfBlp0iO4PKB%2BC3MVlk9Yp4P6F0DZcJXfHNzlT&X-Amz-Signature=61e43a03da5b717f268485c0a9d8f0871b5052fe19a229092f7046f134de1f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZ5HVUF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHmw4WSj%2BC6tYZcRNCMW3bQZc5%2BIveHdN7X5NKlFQwuCAiEAuCnB%2BwMC8aAsG8aH9C9QntbRC54SowwPasXRCeTO0aQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDL%2B%2B1qgOPJ8riZZ0iyrcA3UL7M6Kdq0x1PL9xSEKLCovkURY5dal%2F4%2FtrBfM7BIH5qn5prSh23mOHhBrCsZrTvmENjZHIt52PonOz6jhCQlnt%2F4huIJOkLgiP9U9Ed8K%2BrJhAwql0t0UC8mc3J%2BaQM%2FlhleqI5RP10dC3rYu6jQKttdf4AvN3dYpWL30sN4t33GjoruMS8JnQvJrMUhSQULw0rMKRGsFipZDz%2BPazq13QEvJhLt27tyX3A%2FS%2FsZrXRqxnP1eWgpzOVtjmYvsCbp25iyLr09U76D%2FDMxFW%2F8rxXI3S3D3QHnu%2BRFtUI5Lve7GF2ce3ALbntdX2hCom5qYFtvtTNR9oRsb%2BM6AlKeKXE%2BDnTBuQlfg6UKMOZ45iLlOHKQ3XZfA1j9ORfacsxfwBGF1Z6THaOZqji78fYBP%2FY57zsFf3B%2B7o6Z3o74psTe0LKBzXnbRi4Sc2zeOLo%2FSN%2FdVdv2nf80QpUnZ6oTP%2B1A7zuJKLqL9aW2urgPSRuWoOW7qTe0%2BRvpUshenNecW07yRAqGTI1TYnwlqCxo7XD766PpVLZB34DJSMCOnrdM7EiNC5CdamCrrfoIqgaKXl6prxr3GFS2A3u96VmSPHTIZFT8mKeE6EWKOOnsyWPziRdJ0ca4oevVDMN%2Bjx70GOqUBQI21Y9DbkhhwYJmnDvPw1%2FYedzPqg0%2Bnwknyd9zPyiqCzVdsntCBkOv7dibm2svH834OZR6G84LT5txnilROW5FsSdFwiFvuxGXH7SZBr4S%2FXi0%2BK8Xtourq4JdA%2BvSRYZoljZ7CByN%2F7kIxHRbnPBcQnzV1keQmCYwtDE1OqkBfvagDQpevPrGfBlp0iO4PKB%2BC3MVlk9Yp4P6F0DZcJXfHNzlT&X-Amz-Signature=7c1656079aaba2bb7b2a75e36a4891d3c3c48fe8ee287c2633c49f8ee6820283&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZ5HVUF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHmw4WSj%2BC6tYZcRNCMW3bQZc5%2BIveHdN7X5NKlFQwuCAiEAuCnB%2BwMC8aAsG8aH9C9QntbRC54SowwPasXRCeTO0aQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDL%2B%2B1qgOPJ8riZZ0iyrcA3UL7M6Kdq0x1PL9xSEKLCovkURY5dal%2F4%2FtrBfM7BIH5qn5prSh23mOHhBrCsZrTvmENjZHIt52PonOz6jhCQlnt%2F4huIJOkLgiP9U9Ed8K%2BrJhAwql0t0UC8mc3J%2BaQM%2FlhleqI5RP10dC3rYu6jQKttdf4AvN3dYpWL30sN4t33GjoruMS8JnQvJrMUhSQULw0rMKRGsFipZDz%2BPazq13QEvJhLt27tyX3A%2FS%2FsZrXRqxnP1eWgpzOVtjmYvsCbp25iyLr09U76D%2FDMxFW%2F8rxXI3S3D3QHnu%2BRFtUI5Lve7GF2ce3ALbntdX2hCom5qYFtvtTNR9oRsb%2BM6AlKeKXE%2BDnTBuQlfg6UKMOZ45iLlOHKQ3XZfA1j9ORfacsxfwBGF1Z6THaOZqji78fYBP%2FY57zsFf3B%2B7o6Z3o74psTe0LKBzXnbRi4Sc2zeOLo%2FSN%2FdVdv2nf80QpUnZ6oTP%2B1A7zuJKLqL9aW2urgPSRuWoOW7qTe0%2BRvpUshenNecW07yRAqGTI1TYnwlqCxo7XD766PpVLZB34DJSMCOnrdM7EiNC5CdamCrrfoIqgaKXl6prxr3GFS2A3u96VmSPHTIZFT8mKeE6EWKOOnsyWPziRdJ0ca4oevVDMN%2Bjx70GOqUBQI21Y9DbkhhwYJmnDvPw1%2FYedzPqg0%2Bnwknyd9zPyiqCzVdsntCBkOv7dibm2svH834OZR6G84LT5txnilROW5FsSdFwiFvuxGXH7SZBr4S%2FXi0%2BK8Xtourq4JdA%2BvSRYZoljZ7CByN%2F7kIxHRbnPBcQnzV1keQmCYwtDE1OqkBfvagDQpevPrGfBlp0iO4PKB%2BC3MVlk9Yp4P6F0DZcJXfHNzlT&X-Amz-Signature=6f8fb84d323fe871a189f9a1c7182b1c67bd0977cb14084ed4bf29c6f941a7bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZ5HVUF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHmw4WSj%2BC6tYZcRNCMW3bQZc5%2BIveHdN7X5NKlFQwuCAiEAuCnB%2BwMC8aAsG8aH9C9QntbRC54SowwPasXRCeTO0aQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDL%2B%2B1qgOPJ8riZZ0iyrcA3UL7M6Kdq0x1PL9xSEKLCovkURY5dal%2F4%2FtrBfM7BIH5qn5prSh23mOHhBrCsZrTvmENjZHIt52PonOz6jhCQlnt%2F4huIJOkLgiP9U9Ed8K%2BrJhAwql0t0UC8mc3J%2BaQM%2FlhleqI5RP10dC3rYu6jQKttdf4AvN3dYpWL30sN4t33GjoruMS8JnQvJrMUhSQULw0rMKRGsFipZDz%2BPazq13QEvJhLt27tyX3A%2FS%2FsZrXRqxnP1eWgpzOVtjmYvsCbp25iyLr09U76D%2FDMxFW%2F8rxXI3S3D3QHnu%2BRFtUI5Lve7GF2ce3ALbntdX2hCom5qYFtvtTNR9oRsb%2BM6AlKeKXE%2BDnTBuQlfg6UKMOZ45iLlOHKQ3XZfA1j9ORfacsxfwBGF1Z6THaOZqji78fYBP%2FY57zsFf3B%2B7o6Z3o74psTe0LKBzXnbRi4Sc2zeOLo%2FSN%2FdVdv2nf80QpUnZ6oTP%2B1A7zuJKLqL9aW2urgPSRuWoOW7qTe0%2BRvpUshenNecW07yRAqGTI1TYnwlqCxo7XD766PpVLZB34DJSMCOnrdM7EiNC5CdamCrrfoIqgaKXl6prxr3GFS2A3u96VmSPHTIZFT8mKeE6EWKOOnsyWPziRdJ0ca4oevVDMN%2Bjx70GOqUBQI21Y9DbkhhwYJmnDvPw1%2FYedzPqg0%2Bnwknyd9zPyiqCzVdsntCBkOv7dibm2svH834OZR6G84LT5txnilROW5FsSdFwiFvuxGXH7SZBr4S%2FXi0%2BK8Xtourq4JdA%2BvSRYZoljZ7CByN%2F7kIxHRbnPBcQnzV1keQmCYwtDE1OqkBfvagDQpevPrGfBlp0iO4PKB%2BC3MVlk9Yp4P6F0DZcJXfHNzlT&X-Amz-Signature=4d85edc7c5ca8cfe8e8f1e6ff3d11ae6ad8b3e20da04f9482b9d45bc0a156e6c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZ5HVUF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHmw4WSj%2BC6tYZcRNCMW3bQZc5%2BIveHdN7X5NKlFQwuCAiEAuCnB%2BwMC8aAsG8aH9C9QntbRC54SowwPasXRCeTO0aQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDL%2B%2B1qgOPJ8riZZ0iyrcA3UL7M6Kdq0x1PL9xSEKLCovkURY5dal%2F4%2FtrBfM7BIH5qn5prSh23mOHhBrCsZrTvmENjZHIt52PonOz6jhCQlnt%2F4huIJOkLgiP9U9Ed8K%2BrJhAwql0t0UC8mc3J%2BaQM%2FlhleqI5RP10dC3rYu6jQKttdf4AvN3dYpWL30sN4t33GjoruMS8JnQvJrMUhSQULw0rMKRGsFipZDz%2BPazq13QEvJhLt27tyX3A%2FS%2FsZrXRqxnP1eWgpzOVtjmYvsCbp25iyLr09U76D%2FDMxFW%2F8rxXI3S3D3QHnu%2BRFtUI5Lve7GF2ce3ALbntdX2hCom5qYFtvtTNR9oRsb%2BM6AlKeKXE%2BDnTBuQlfg6UKMOZ45iLlOHKQ3XZfA1j9ORfacsxfwBGF1Z6THaOZqji78fYBP%2FY57zsFf3B%2B7o6Z3o74psTe0LKBzXnbRi4Sc2zeOLo%2FSN%2FdVdv2nf80QpUnZ6oTP%2B1A7zuJKLqL9aW2urgPSRuWoOW7qTe0%2BRvpUshenNecW07yRAqGTI1TYnwlqCxo7XD766PpVLZB34DJSMCOnrdM7EiNC5CdamCrrfoIqgaKXl6prxr3GFS2A3u96VmSPHTIZFT8mKeE6EWKOOnsyWPziRdJ0ca4oevVDMN%2Bjx70GOqUBQI21Y9DbkhhwYJmnDvPw1%2FYedzPqg0%2Bnwknyd9zPyiqCzVdsntCBkOv7dibm2svH834OZR6G84LT5txnilROW5FsSdFwiFvuxGXH7SZBr4S%2FXi0%2BK8Xtourq4JdA%2BvSRYZoljZ7CByN%2F7kIxHRbnPBcQnzV1keQmCYwtDE1OqkBfvagDQpevPrGfBlp0iO4PKB%2BC3MVlk9Yp4P6F0DZcJXfHNzlT&X-Amz-Signature=baf9fb0ccf04dfb193488ef01dda3348eca09dccb62a443ce987401cdd380da1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
