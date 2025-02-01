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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOL7XDCI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEGl98Be9fQlN8r%2BKM1OH8iDqxcNaJh0B1%2BNKF1n53mQIgevcwDJzMA3bGFkhkCYD4EUmTndFTjIRn9VhVbd3MnZsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlPuymq8rYcJKdxZCrcA116WDK%2BZ1FqkiGSexxokPqcmaGhHBNknGT7vhOvYPBKakSXoE7ZLQ39MIoju%2BRdPQ%2FvpUC2CktsWdany0OMB0LS%2FrTfgVRhsZ%2FlHq7k4IVNPopb%2Fw9kZs%2BTBj0ieeXYniwcuQNtjnJHrhotB1LqLBFqFF1UeC2KXTiUVdP6s6od0ArnQH9DLKgDclhXDtgomfVCnZnp%2B6v4XLggE%2BQ4uX%2BgziIeH%2B%2FnvHUaNHqTFNzHZRZuNXc%2Fpa2V4l%2BqUhHVPTNznQldVwo0ajPI6BJd76Oa4PqJPI8ARZq%2F70Do3YYLnEeKetA%2FGSzP8BlSInf3Y%2BlZ%2BUfV18IbAJlNFmimveWigjp1TVa3UfzxJN0dMYukZ4BVTO7AzrNzcpLAxrrwsYSAA7FB7NTCBy2SN7klKWxTU7mnlNdaEBSGjK1K0SVCCFcshVpVjiDzHEXAkXDH3Gv5fCieb9byS7mKpqMaIGZHPEq0qeCFNTggV0qdAdm5jKVo8YzQaaUt3oXQSFTsEVlkw7CJMUIrv2Sqix7htvT253HolWyLmRhMKvqkM4G%2ByJRatcZuQ%2FD2MR2Bq5uqNk%2BpZF3bnqbon%2Bh4O7J0gKflad3XRkUfoEvj3l8s7yUyamtpm0J4JepB98QHMJOy%2BrwGOqUBlMRYtmCQnjkmI90GJ7vPXdnySbDO5QiT7EhtJBR0yGDxTDqEGSCcQhuRPAUf5Q7zFAhLUp8Tf%2FU8bBJL5FH7BPI3z2zcBCacIkfAZW%2BT6ygRpxawOgyX6GlKHPooR2JzuqseuOnsu70F5idbrUIU8e%2Bju4TDh5AaH7TKCBEVFYgjjE1EB3MFT7aP6sUjJzXqGNsL4hH6LQGvSACBw1rnYr66XibW&X-Amz-Signature=1ec4d92467afc4d67036c16aec1cd37d140ee4f5648baae827a2e3620184b7b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOL7XDCI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEGl98Be9fQlN8r%2BKM1OH8iDqxcNaJh0B1%2BNKF1n53mQIgevcwDJzMA3bGFkhkCYD4EUmTndFTjIRn9VhVbd3MnZsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlPuymq8rYcJKdxZCrcA116WDK%2BZ1FqkiGSexxokPqcmaGhHBNknGT7vhOvYPBKakSXoE7ZLQ39MIoju%2BRdPQ%2FvpUC2CktsWdany0OMB0LS%2FrTfgVRhsZ%2FlHq7k4IVNPopb%2Fw9kZs%2BTBj0ieeXYniwcuQNtjnJHrhotB1LqLBFqFF1UeC2KXTiUVdP6s6od0ArnQH9DLKgDclhXDtgomfVCnZnp%2B6v4XLggE%2BQ4uX%2BgziIeH%2B%2FnvHUaNHqTFNzHZRZuNXc%2Fpa2V4l%2BqUhHVPTNznQldVwo0ajPI6BJd76Oa4PqJPI8ARZq%2F70Do3YYLnEeKetA%2FGSzP8BlSInf3Y%2BlZ%2BUfV18IbAJlNFmimveWigjp1TVa3UfzxJN0dMYukZ4BVTO7AzrNzcpLAxrrwsYSAA7FB7NTCBy2SN7klKWxTU7mnlNdaEBSGjK1K0SVCCFcshVpVjiDzHEXAkXDH3Gv5fCieb9byS7mKpqMaIGZHPEq0qeCFNTggV0qdAdm5jKVo8YzQaaUt3oXQSFTsEVlkw7CJMUIrv2Sqix7htvT253HolWyLmRhMKvqkM4G%2ByJRatcZuQ%2FD2MR2Bq5uqNk%2BpZF3bnqbon%2Bh4O7J0gKflad3XRkUfoEvj3l8s7yUyamtpm0J4JepB98QHMJOy%2BrwGOqUBlMRYtmCQnjkmI90GJ7vPXdnySbDO5QiT7EhtJBR0yGDxTDqEGSCcQhuRPAUf5Q7zFAhLUp8Tf%2FU8bBJL5FH7BPI3z2zcBCacIkfAZW%2BT6ygRpxawOgyX6GlKHPooR2JzuqseuOnsu70F5idbrUIU8e%2Bju4TDh5AaH7TKCBEVFYgjjE1EB3MFT7aP6sUjJzXqGNsL4hH6LQGvSACBw1rnYr66XibW&X-Amz-Signature=897a567603e184c59eb58e9ab986b560218090c91630aeb3b2d8f97a2deedad1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOL7XDCI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEGl98Be9fQlN8r%2BKM1OH8iDqxcNaJh0B1%2BNKF1n53mQIgevcwDJzMA3bGFkhkCYD4EUmTndFTjIRn9VhVbd3MnZsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlPuymq8rYcJKdxZCrcA116WDK%2BZ1FqkiGSexxokPqcmaGhHBNknGT7vhOvYPBKakSXoE7ZLQ39MIoju%2BRdPQ%2FvpUC2CktsWdany0OMB0LS%2FrTfgVRhsZ%2FlHq7k4IVNPopb%2Fw9kZs%2BTBj0ieeXYniwcuQNtjnJHrhotB1LqLBFqFF1UeC2KXTiUVdP6s6od0ArnQH9DLKgDclhXDtgomfVCnZnp%2B6v4XLggE%2BQ4uX%2BgziIeH%2B%2FnvHUaNHqTFNzHZRZuNXc%2Fpa2V4l%2BqUhHVPTNznQldVwo0ajPI6BJd76Oa4PqJPI8ARZq%2F70Do3YYLnEeKetA%2FGSzP8BlSInf3Y%2BlZ%2BUfV18IbAJlNFmimveWigjp1TVa3UfzxJN0dMYukZ4BVTO7AzrNzcpLAxrrwsYSAA7FB7NTCBy2SN7klKWxTU7mnlNdaEBSGjK1K0SVCCFcshVpVjiDzHEXAkXDH3Gv5fCieb9byS7mKpqMaIGZHPEq0qeCFNTggV0qdAdm5jKVo8YzQaaUt3oXQSFTsEVlkw7CJMUIrv2Sqix7htvT253HolWyLmRhMKvqkM4G%2ByJRatcZuQ%2FD2MR2Bq5uqNk%2BpZF3bnqbon%2Bh4O7J0gKflad3XRkUfoEvj3l8s7yUyamtpm0J4JepB98QHMJOy%2BrwGOqUBlMRYtmCQnjkmI90GJ7vPXdnySbDO5QiT7EhtJBR0yGDxTDqEGSCcQhuRPAUf5Q7zFAhLUp8Tf%2FU8bBJL5FH7BPI3z2zcBCacIkfAZW%2BT6ygRpxawOgyX6GlKHPooR2JzuqseuOnsu70F5idbrUIU8e%2Bju4TDh5AaH7TKCBEVFYgjjE1EB3MFT7aP6sUjJzXqGNsL4hH6LQGvSACBw1rnYr66XibW&X-Amz-Signature=3c0651338e8776a8e919734083e18fe1690479f08f9d649b3ab0e4ec451af2eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOL7XDCI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEGl98Be9fQlN8r%2BKM1OH8iDqxcNaJh0B1%2BNKF1n53mQIgevcwDJzMA3bGFkhkCYD4EUmTndFTjIRn9VhVbd3MnZsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlPuymq8rYcJKdxZCrcA116WDK%2BZ1FqkiGSexxokPqcmaGhHBNknGT7vhOvYPBKakSXoE7ZLQ39MIoju%2BRdPQ%2FvpUC2CktsWdany0OMB0LS%2FrTfgVRhsZ%2FlHq7k4IVNPopb%2Fw9kZs%2BTBj0ieeXYniwcuQNtjnJHrhotB1LqLBFqFF1UeC2KXTiUVdP6s6od0ArnQH9DLKgDclhXDtgomfVCnZnp%2B6v4XLggE%2BQ4uX%2BgziIeH%2B%2FnvHUaNHqTFNzHZRZuNXc%2Fpa2V4l%2BqUhHVPTNznQldVwo0ajPI6BJd76Oa4PqJPI8ARZq%2F70Do3YYLnEeKetA%2FGSzP8BlSInf3Y%2BlZ%2BUfV18IbAJlNFmimveWigjp1TVa3UfzxJN0dMYukZ4BVTO7AzrNzcpLAxrrwsYSAA7FB7NTCBy2SN7klKWxTU7mnlNdaEBSGjK1K0SVCCFcshVpVjiDzHEXAkXDH3Gv5fCieb9byS7mKpqMaIGZHPEq0qeCFNTggV0qdAdm5jKVo8YzQaaUt3oXQSFTsEVlkw7CJMUIrv2Sqix7htvT253HolWyLmRhMKvqkM4G%2ByJRatcZuQ%2FD2MR2Bq5uqNk%2BpZF3bnqbon%2Bh4O7J0gKflad3XRkUfoEvj3l8s7yUyamtpm0J4JepB98QHMJOy%2BrwGOqUBlMRYtmCQnjkmI90GJ7vPXdnySbDO5QiT7EhtJBR0yGDxTDqEGSCcQhuRPAUf5Q7zFAhLUp8Tf%2FU8bBJL5FH7BPI3z2zcBCacIkfAZW%2BT6ygRpxawOgyX6GlKHPooR2JzuqseuOnsu70F5idbrUIU8e%2Bju4TDh5AaH7TKCBEVFYgjjE1EB3MFT7aP6sUjJzXqGNsL4hH6LQGvSACBw1rnYr66XibW&X-Amz-Signature=c801a2d1438c3f2881872fd1c78ce070c4810024f0e8585a1007d03e7a0c5538&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOL7XDCI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEGl98Be9fQlN8r%2BKM1OH8iDqxcNaJh0B1%2BNKF1n53mQIgevcwDJzMA3bGFkhkCYD4EUmTndFTjIRn9VhVbd3MnZsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlPuymq8rYcJKdxZCrcA116WDK%2BZ1FqkiGSexxokPqcmaGhHBNknGT7vhOvYPBKakSXoE7ZLQ39MIoju%2BRdPQ%2FvpUC2CktsWdany0OMB0LS%2FrTfgVRhsZ%2FlHq7k4IVNPopb%2Fw9kZs%2BTBj0ieeXYniwcuQNtjnJHrhotB1LqLBFqFF1UeC2KXTiUVdP6s6od0ArnQH9DLKgDclhXDtgomfVCnZnp%2B6v4XLggE%2BQ4uX%2BgziIeH%2B%2FnvHUaNHqTFNzHZRZuNXc%2Fpa2V4l%2BqUhHVPTNznQldVwo0ajPI6BJd76Oa4PqJPI8ARZq%2F70Do3YYLnEeKetA%2FGSzP8BlSInf3Y%2BlZ%2BUfV18IbAJlNFmimveWigjp1TVa3UfzxJN0dMYukZ4BVTO7AzrNzcpLAxrrwsYSAA7FB7NTCBy2SN7klKWxTU7mnlNdaEBSGjK1K0SVCCFcshVpVjiDzHEXAkXDH3Gv5fCieb9byS7mKpqMaIGZHPEq0qeCFNTggV0qdAdm5jKVo8YzQaaUt3oXQSFTsEVlkw7CJMUIrv2Sqix7htvT253HolWyLmRhMKvqkM4G%2ByJRatcZuQ%2FD2MR2Bq5uqNk%2BpZF3bnqbon%2Bh4O7J0gKflad3XRkUfoEvj3l8s7yUyamtpm0J4JepB98QHMJOy%2BrwGOqUBlMRYtmCQnjkmI90GJ7vPXdnySbDO5QiT7EhtJBR0yGDxTDqEGSCcQhuRPAUf5Q7zFAhLUp8Tf%2FU8bBJL5FH7BPI3z2zcBCacIkfAZW%2BT6ygRpxawOgyX6GlKHPooR2JzuqseuOnsu70F5idbrUIU8e%2Bju4TDh5AaH7TKCBEVFYgjjE1EB3MFT7aP6sUjJzXqGNsL4hH6LQGvSACBw1rnYr66XibW&X-Amz-Signature=da364af1c60e0832a6407b9b950dcc9128a9882ceab648c0f026353bf3bdadda&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
