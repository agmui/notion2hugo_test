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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STCMWPM3%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtLFV4MiZ1HtdLbZ2tXdJPmEhE%2Fbp7%2FXlihdr0q7kg0wIhAPxpHq3ATCEx%2FF2rufFr8FBT%2FHG91F9%2FE4mIxoxs0MG4KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylLPtviUSscziKP9sq3AM3kB3hcCevjJxAlr8RdYCEKDaxKPvxo9vdqE7h%2BjCnBguV60TN6sUXw0Cjwt6L7xfnbBL1raOsWlfFd7FuUBSHC4drQbwvytq3rmTpkjc6UehDDqj%2B8PMCNLFp1t9gWGoZ2z7MSGQ5sHsvsp%2BiaVj6MstNtBcKir8gujmmztZgFdbWqicQicT1bnaYp3p6OtsHu8PT9uoCJ51L3Fo69z1IVZZk4mt%2BJX9qnyYMBOEfqISypnsQgEl99ladHW%2F77AGnqT7WzIrXwm%2FckFherFFMO2d7AF%2FvNQqIolKmVG4EhGKL3mDeutWkQdN3gDYfmMGdYmONoYqrJFTPG1mN8w0osczn2VFVI%2Fu%2FpjTTm6Lw5lzP8mdnsIwCcfejN4Joh2lIRuc3lCxyS7Od7sTdmxuiH%2BhJrJeWVzVN1aCW8R8ARw2bKRFfDx1ICk1KzghvfuYLnY%2BXTXz0nyc4UnVgkv4j9se91FWCMGtxK7gaUf6iPKjyU0B6fnqqECZm%2FnTKqFMUO4QOGWlAXu7xunDGoHy%2BNIrP4Kp5SEcP8K3189KnOE7MkiVYTRJT0oAAzxixRQRfrwoKv%2BGLWk8XsV%2B4FMYfcNo5ZnbAAQXNS8pEYx8UPnDfCd9eNA%2FLQfp5PzC13qPCBjqkAVGtTELkPCcCv3x4ssLz3%2Bb08LTE8cXXT%2FBz2KBLYfxwjMxrHSIIuHQTFu1dRS04Of6pdqerx9DqhePUPw4oFUdCO1zeM5jDHZJbOAII7xFTz7H2zjo7oroM9szUjSdvvSk8%2FVWCMgUjkEU8I1UTTlUu7sRIGpqqKd5tIZ11FMX7csap8HPIaEdFBZrUjhRF6HWZ%2B9gNB7HpwjOQzufheiz0dd9U&X-Amz-Signature=6802a5acf051533dd0b4b76124e23fd93f3b00ad82b8a778d5e71e41f9502d6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STCMWPM3%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtLFV4MiZ1HtdLbZ2tXdJPmEhE%2Fbp7%2FXlihdr0q7kg0wIhAPxpHq3ATCEx%2FF2rufFr8FBT%2FHG91F9%2FE4mIxoxs0MG4KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylLPtviUSscziKP9sq3AM3kB3hcCevjJxAlr8RdYCEKDaxKPvxo9vdqE7h%2BjCnBguV60TN6sUXw0Cjwt6L7xfnbBL1raOsWlfFd7FuUBSHC4drQbwvytq3rmTpkjc6UehDDqj%2B8PMCNLFp1t9gWGoZ2z7MSGQ5sHsvsp%2BiaVj6MstNtBcKir8gujmmztZgFdbWqicQicT1bnaYp3p6OtsHu8PT9uoCJ51L3Fo69z1IVZZk4mt%2BJX9qnyYMBOEfqISypnsQgEl99ladHW%2F77AGnqT7WzIrXwm%2FckFherFFMO2d7AF%2FvNQqIolKmVG4EhGKL3mDeutWkQdN3gDYfmMGdYmONoYqrJFTPG1mN8w0osczn2VFVI%2Fu%2FpjTTm6Lw5lzP8mdnsIwCcfejN4Joh2lIRuc3lCxyS7Od7sTdmxuiH%2BhJrJeWVzVN1aCW8R8ARw2bKRFfDx1ICk1KzghvfuYLnY%2BXTXz0nyc4UnVgkv4j9se91FWCMGtxK7gaUf6iPKjyU0B6fnqqECZm%2FnTKqFMUO4QOGWlAXu7xunDGoHy%2BNIrP4Kp5SEcP8K3189KnOE7MkiVYTRJT0oAAzxixRQRfrwoKv%2BGLWk8XsV%2B4FMYfcNo5ZnbAAQXNS8pEYx8UPnDfCd9eNA%2FLQfp5PzC13qPCBjqkAVGtTELkPCcCv3x4ssLz3%2Bb08LTE8cXXT%2FBz2KBLYfxwjMxrHSIIuHQTFu1dRS04Of6pdqerx9DqhePUPw4oFUdCO1zeM5jDHZJbOAII7xFTz7H2zjo7oroM9szUjSdvvSk8%2FVWCMgUjkEU8I1UTTlUu7sRIGpqqKd5tIZ11FMX7csap8HPIaEdFBZrUjhRF6HWZ%2B9gNB7HpwjOQzufheiz0dd9U&X-Amz-Signature=5b2906b33a45888df8605a783f3853ff1eb3bc538fc70bcd7b3769a6078c1437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STCMWPM3%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtLFV4MiZ1HtdLbZ2tXdJPmEhE%2Fbp7%2FXlihdr0q7kg0wIhAPxpHq3ATCEx%2FF2rufFr8FBT%2FHG91F9%2FE4mIxoxs0MG4KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylLPtviUSscziKP9sq3AM3kB3hcCevjJxAlr8RdYCEKDaxKPvxo9vdqE7h%2BjCnBguV60TN6sUXw0Cjwt6L7xfnbBL1raOsWlfFd7FuUBSHC4drQbwvytq3rmTpkjc6UehDDqj%2B8PMCNLFp1t9gWGoZ2z7MSGQ5sHsvsp%2BiaVj6MstNtBcKir8gujmmztZgFdbWqicQicT1bnaYp3p6OtsHu8PT9uoCJ51L3Fo69z1IVZZk4mt%2BJX9qnyYMBOEfqISypnsQgEl99ladHW%2F77AGnqT7WzIrXwm%2FckFherFFMO2d7AF%2FvNQqIolKmVG4EhGKL3mDeutWkQdN3gDYfmMGdYmONoYqrJFTPG1mN8w0osczn2VFVI%2Fu%2FpjTTm6Lw5lzP8mdnsIwCcfejN4Joh2lIRuc3lCxyS7Od7sTdmxuiH%2BhJrJeWVzVN1aCW8R8ARw2bKRFfDx1ICk1KzghvfuYLnY%2BXTXz0nyc4UnVgkv4j9se91FWCMGtxK7gaUf6iPKjyU0B6fnqqECZm%2FnTKqFMUO4QOGWlAXu7xunDGoHy%2BNIrP4Kp5SEcP8K3189KnOE7MkiVYTRJT0oAAzxixRQRfrwoKv%2BGLWk8XsV%2B4FMYfcNo5ZnbAAQXNS8pEYx8UPnDfCd9eNA%2FLQfp5PzC13qPCBjqkAVGtTELkPCcCv3x4ssLz3%2Bb08LTE8cXXT%2FBz2KBLYfxwjMxrHSIIuHQTFu1dRS04Of6pdqerx9DqhePUPw4oFUdCO1zeM5jDHZJbOAII7xFTz7H2zjo7oroM9szUjSdvvSk8%2FVWCMgUjkEU8I1UTTlUu7sRIGpqqKd5tIZ11FMX7csap8HPIaEdFBZrUjhRF6HWZ%2B9gNB7HpwjOQzufheiz0dd9U&X-Amz-Signature=5481b77fb41bd47a043a237eeed243af7ae2435c7387d290cc0e94a6eea1e7c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STCMWPM3%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtLFV4MiZ1HtdLbZ2tXdJPmEhE%2Fbp7%2FXlihdr0q7kg0wIhAPxpHq3ATCEx%2FF2rufFr8FBT%2FHG91F9%2FE4mIxoxs0MG4KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylLPtviUSscziKP9sq3AM3kB3hcCevjJxAlr8RdYCEKDaxKPvxo9vdqE7h%2BjCnBguV60TN6sUXw0Cjwt6L7xfnbBL1raOsWlfFd7FuUBSHC4drQbwvytq3rmTpkjc6UehDDqj%2B8PMCNLFp1t9gWGoZ2z7MSGQ5sHsvsp%2BiaVj6MstNtBcKir8gujmmztZgFdbWqicQicT1bnaYp3p6OtsHu8PT9uoCJ51L3Fo69z1IVZZk4mt%2BJX9qnyYMBOEfqISypnsQgEl99ladHW%2F77AGnqT7WzIrXwm%2FckFherFFMO2d7AF%2FvNQqIolKmVG4EhGKL3mDeutWkQdN3gDYfmMGdYmONoYqrJFTPG1mN8w0osczn2VFVI%2Fu%2FpjTTm6Lw5lzP8mdnsIwCcfejN4Joh2lIRuc3lCxyS7Od7sTdmxuiH%2BhJrJeWVzVN1aCW8R8ARw2bKRFfDx1ICk1KzghvfuYLnY%2BXTXz0nyc4UnVgkv4j9se91FWCMGtxK7gaUf6iPKjyU0B6fnqqECZm%2FnTKqFMUO4QOGWlAXu7xunDGoHy%2BNIrP4Kp5SEcP8K3189KnOE7MkiVYTRJT0oAAzxixRQRfrwoKv%2BGLWk8XsV%2B4FMYfcNo5ZnbAAQXNS8pEYx8UPnDfCd9eNA%2FLQfp5PzC13qPCBjqkAVGtTELkPCcCv3x4ssLz3%2Bb08LTE8cXXT%2FBz2KBLYfxwjMxrHSIIuHQTFu1dRS04Of6pdqerx9DqhePUPw4oFUdCO1zeM5jDHZJbOAII7xFTz7H2zjo7oroM9szUjSdvvSk8%2FVWCMgUjkEU8I1UTTlUu7sRIGpqqKd5tIZ11FMX7csap8HPIaEdFBZrUjhRF6HWZ%2B9gNB7HpwjOQzufheiz0dd9U&X-Amz-Signature=b18d31e096f1d9c39d17f2b5e1c37a155539061a9f83165b500f7f4d7f30c1c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STCMWPM3%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtLFV4MiZ1HtdLbZ2tXdJPmEhE%2Fbp7%2FXlihdr0q7kg0wIhAPxpHq3ATCEx%2FF2rufFr8FBT%2FHG91F9%2FE4mIxoxs0MG4KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylLPtviUSscziKP9sq3AM3kB3hcCevjJxAlr8RdYCEKDaxKPvxo9vdqE7h%2BjCnBguV60TN6sUXw0Cjwt6L7xfnbBL1raOsWlfFd7FuUBSHC4drQbwvytq3rmTpkjc6UehDDqj%2B8PMCNLFp1t9gWGoZ2z7MSGQ5sHsvsp%2BiaVj6MstNtBcKir8gujmmztZgFdbWqicQicT1bnaYp3p6OtsHu8PT9uoCJ51L3Fo69z1IVZZk4mt%2BJX9qnyYMBOEfqISypnsQgEl99ladHW%2F77AGnqT7WzIrXwm%2FckFherFFMO2d7AF%2FvNQqIolKmVG4EhGKL3mDeutWkQdN3gDYfmMGdYmONoYqrJFTPG1mN8w0osczn2VFVI%2Fu%2FpjTTm6Lw5lzP8mdnsIwCcfejN4Joh2lIRuc3lCxyS7Od7sTdmxuiH%2BhJrJeWVzVN1aCW8R8ARw2bKRFfDx1ICk1KzghvfuYLnY%2BXTXz0nyc4UnVgkv4j9se91FWCMGtxK7gaUf6iPKjyU0B6fnqqECZm%2FnTKqFMUO4QOGWlAXu7xunDGoHy%2BNIrP4Kp5SEcP8K3189KnOE7MkiVYTRJT0oAAzxixRQRfrwoKv%2BGLWk8XsV%2B4FMYfcNo5ZnbAAQXNS8pEYx8UPnDfCd9eNA%2FLQfp5PzC13qPCBjqkAVGtTELkPCcCv3x4ssLz3%2Bb08LTE8cXXT%2FBz2KBLYfxwjMxrHSIIuHQTFu1dRS04Of6pdqerx9DqhePUPw4oFUdCO1zeM5jDHZJbOAII7xFTz7H2zjo7oroM9szUjSdvvSk8%2FVWCMgUjkEU8I1UTTlUu7sRIGpqqKd5tIZ11FMX7csap8HPIaEdFBZrUjhRF6HWZ%2B9gNB7HpwjOQzufheiz0dd9U&X-Amz-Signature=b2ae2e3fffc91e2753d00b93a90b6b19d9bdb96b3b9f2b67b10bbf67150b35f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
