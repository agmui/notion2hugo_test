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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWSVY4V3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqZWOpbHE2m%2BPl8Thmsb5ov%2BjsowWsLjiKl8sNUPTRNQIhAMBWrWf6ZwZfbbP9gn84G7wT8iXm3kKLvZj1PLoYk9QOKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQsHht8VRE837vsvoq3AOzolVqm4dKSK1wXKt14Edix8LzRgKcufq3TxaZ79Ug0xGNxmswsAFE3au3pW1jpAzNWc%2BcWt%2BqrVqrx6Sb8AaqYDckqc4w3n8YUtLehwDmescVOOyLx5tuHDiZkxrVbpb689MRlaj2s%2FAyLMKuS4Bir7iaYA2G5O8rO1DmdThTl6TRVboRM73zzJkuCRRe2kNHhUWWegb94D%2BIQYLLSgOi3DrfUjhc7aomR94HfaT6p1Fg%2F2WLPIKxlti7ghDRqDXwRDNtTd9tnDAvv8PVXkOd2nAd4jgfA983dvtuCDQec6mde1bMjheh0t9GN%2BRqeFCfPjY76lq%2BIRkXwlnnGPDeJd1c1PoHL%2BPd0gTYPLUajhZ6L8LRctq%2B%2BCGPoMJ35JOx%2BGbdeGUaTLmo9y%2FyXv5n7j%2BVKtjdEIbgCsjFaxwOH4ldzUfSh%2BZotrT95ZDv%2B%2BofqYCfZeVQU6KmTOgcXRvxVCFWz1RAD2zZi%2B5gKdslRAS5QaWnpZUZlCCDFN7hDZsdepeOKHR9b6flHEz%2Fyev8cgUdMb%2F8X%2FiAlbTqqLC6E0mga82%2FvnxIJ9dxaEWU06Q7M8BOqMZASN8eeRuq%2FeNfbSP6HwcrRkebaoWsQKGmt0CpAzOSa5cIGbENVTDDyOG9BjqkAZE9FZADrnv0JELruTu%2BGNbYXigZ3d%2BfzT8%2BXuLIrgSEItm8d2T3qIaX5F0%2BBby2HBsqJBviRlG5UKY1sMMhWxKnPrauBGESEiS8wSjZbuZBcTZIO4ZcUM3R35MQZCbmnU1JLIrO8SLhFPfV%2BbYy3KYxQ8jXP2CidTmt%2Bni%2BeYHyR9ngTeHLr6goM8dRaiuEmRHRMc7lk7KrxglTXCt5cF8I4%2BJP&X-Amz-Signature=9ea0e0dd5b0273b760f344d3cf24d0b5d671956ba76bdca2f268a5518528e102&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWSVY4V3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqZWOpbHE2m%2BPl8Thmsb5ov%2BjsowWsLjiKl8sNUPTRNQIhAMBWrWf6ZwZfbbP9gn84G7wT8iXm3kKLvZj1PLoYk9QOKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQsHht8VRE837vsvoq3AOzolVqm4dKSK1wXKt14Edix8LzRgKcufq3TxaZ79Ug0xGNxmswsAFE3au3pW1jpAzNWc%2BcWt%2BqrVqrx6Sb8AaqYDckqc4w3n8YUtLehwDmescVOOyLx5tuHDiZkxrVbpb689MRlaj2s%2FAyLMKuS4Bir7iaYA2G5O8rO1DmdThTl6TRVboRM73zzJkuCRRe2kNHhUWWegb94D%2BIQYLLSgOi3DrfUjhc7aomR94HfaT6p1Fg%2F2WLPIKxlti7ghDRqDXwRDNtTd9tnDAvv8PVXkOd2nAd4jgfA983dvtuCDQec6mde1bMjheh0t9GN%2BRqeFCfPjY76lq%2BIRkXwlnnGPDeJd1c1PoHL%2BPd0gTYPLUajhZ6L8LRctq%2B%2BCGPoMJ35JOx%2BGbdeGUaTLmo9y%2FyXv5n7j%2BVKtjdEIbgCsjFaxwOH4ldzUfSh%2BZotrT95ZDv%2B%2BofqYCfZeVQU6KmTOgcXRvxVCFWz1RAD2zZi%2B5gKdslRAS5QaWnpZUZlCCDFN7hDZsdepeOKHR9b6flHEz%2Fyev8cgUdMb%2F8X%2FiAlbTqqLC6E0mga82%2FvnxIJ9dxaEWU06Q7M8BOqMZASN8eeRuq%2FeNfbSP6HwcrRkebaoWsQKGmt0CpAzOSa5cIGbENVTDDyOG9BjqkAZE9FZADrnv0JELruTu%2BGNbYXigZ3d%2BfzT8%2BXuLIrgSEItm8d2T3qIaX5F0%2BBby2HBsqJBviRlG5UKY1sMMhWxKnPrauBGESEiS8wSjZbuZBcTZIO4ZcUM3R35MQZCbmnU1JLIrO8SLhFPfV%2BbYy3KYxQ8jXP2CidTmt%2Bni%2BeYHyR9ngTeHLr6goM8dRaiuEmRHRMc7lk7KrxglTXCt5cF8I4%2BJP&X-Amz-Signature=39450e7a54caa952341f8b3646b8dff01c17f7796a46a4be1e8a4a0f97591dcf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWSVY4V3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqZWOpbHE2m%2BPl8Thmsb5ov%2BjsowWsLjiKl8sNUPTRNQIhAMBWrWf6ZwZfbbP9gn84G7wT8iXm3kKLvZj1PLoYk9QOKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQsHht8VRE837vsvoq3AOzolVqm4dKSK1wXKt14Edix8LzRgKcufq3TxaZ79Ug0xGNxmswsAFE3au3pW1jpAzNWc%2BcWt%2BqrVqrx6Sb8AaqYDckqc4w3n8YUtLehwDmescVOOyLx5tuHDiZkxrVbpb689MRlaj2s%2FAyLMKuS4Bir7iaYA2G5O8rO1DmdThTl6TRVboRM73zzJkuCRRe2kNHhUWWegb94D%2BIQYLLSgOi3DrfUjhc7aomR94HfaT6p1Fg%2F2WLPIKxlti7ghDRqDXwRDNtTd9tnDAvv8PVXkOd2nAd4jgfA983dvtuCDQec6mde1bMjheh0t9GN%2BRqeFCfPjY76lq%2BIRkXwlnnGPDeJd1c1PoHL%2BPd0gTYPLUajhZ6L8LRctq%2B%2BCGPoMJ35JOx%2BGbdeGUaTLmo9y%2FyXv5n7j%2BVKtjdEIbgCsjFaxwOH4ldzUfSh%2BZotrT95ZDv%2B%2BofqYCfZeVQU6KmTOgcXRvxVCFWz1RAD2zZi%2B5gKdslRAS5QaWnpZUZlCCDFN7hDZsdepeOKHR9b6flHEz%2Fyev8cgUdMb%2F8X%2FiAlbTqqLC6E0mga82%2FvnxIJ9dxaEWU06Q7M8BOqMZASN8eeRuq%2FeNfbSP6HwcrRkebaoWsQKGmt0CpAzOSa5cIGbENVTDDyOG9BjqkAZE9FZADrnv0JELruTu%2BGNbYXigZ3d%2BfzT8%2BXuLIrgSEItm8d2T3qIaX5F0%2BBby2HBsqJBviRlG5UKY1sMMhWxKnPrauBGESEiS8wSjZbuZBcTZIO4ZcUM3R35MQZCbmnU1JLIrO8SLhFPfV%2BbYy3KYxQ8jXP2CidTmt%2Bni%2BeYHyR9ngTeHLr6goM8dRaiuEmRHRMc7lk7KrxglTXCt5cF8I4%2BJP&X-Amz-Signature=8038acc993b95adb57d91d96d9ae3539e298990f5b490d84e40de2439ff6288e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWSVY4V3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqZWOpbHE2m%2BPl8Thmsb5ov%2BjsowWsLjiKl8sNUPTRNQIhAMBWrWf6ZwZfbbP9gn84G7wT8iXm3kKLvZj1PLoYk9QOKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQsHht8VRE837vsvoq3AOzolVqm4dKSK1wXKt14Edix8LzRgKcufq3TxaZ79Ug0xGNxmswsAFE3au3pW1jpAzNWc%2BcWt%2BqrVqrx6Sb8AaqYDckqc4w3n8YUtLehwDmescVOOyLx5tuHDiZkxrVbpb689MRlaj2s%2FAyLMKuS4Bir7iaYA2G5O8rO1DmdThTl6TRVboRM73zzJkuCRRe2kNHhUWWegb94D%2BIQYLLSgOi3DrfUjhc7aomR94HfaT6p1Fg%2F2WLPIKxlti7ghDRqDXwRDNtTd9tnDAvv8PVXkOd2nAd4jgfA983dvtuCDQec6mde1bMjheh0t9GN%2BRqeFCfPjY76lq%2BIRkXwlnnGPDeJd1c1PoHL%2BPd0gTYPLUajhZ6L8LRctq%2B%2BCGPoMJ35JOx%2BGbdeGUaTLmo9y%2FyXv5n7j%2BVKtjdEIbgCsjFaxwOH4ldzUfSh%2BZotrT95ZDv%2B%2BofqYCfZeVQU6KmTOgcXRvxVCFWz1RAD2zZi%2B5gKdslRAS5QaWnpZUZlCCDFN7hDZsdepeOKHR9b6flHEz%2Fyev8cgUdMb%2F8X%2FiAlbTqqLC6E0mga82%2FvnxIJ9dxaEWU06Q7M8BOqMZASN8eeRuq%2FeNfbSP6HwcrRkebaoWsQKGmt0CpAzOSa5cIGbENVTDDyOG9BjqkAZE9FZADrnv0JELruTu%2BGNbYXigZ3d%2BfzT8%2BXuLIrgSEItm8d2T3qIaX5F0%2BBby2HBsqJBviRlG5UKY1sMMhWxKnPrauBGESEiS8wSjZbuZBcTZIO4ZcUM3R35MQZCbmnU1JLIrO8SLhFPfV%2BbYy3KYxQ8jXP2CidTmt%2Bni%2BeYHyR9ngTeHLr6goM8dRaiuEmRHRMc7lk7KrxglTXCt5cF8I4%2BJP&X-Amz-Signature=82f02f8a1666f02ee37de8daa303f1847a716233b61e33068772a2e10d85088e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWSVY4V3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqZWOpbHE2m%2BPl8Thmsb5ov%2BjsowWsLjiKl8sNUPTRNQIhAMBWrWf6ZwZfbbP9gn84G7wT8iXm3kKLvZj1PLoYk9QOKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQsHht8VRE837vsvoq3AOzolVqm4dKSK1wXKt14Edix8LzRgKcufq3TxaZ79Ug0xGNxmswsAFE3au3pW1jpAzNWc%2BcWt%2BqrVqrx6Sb8AaqYDckqc4w3n8YUtLehwDmescVOOyLx5tuHDiZkxrVbpb689MRlaj2s%2FAyLMKuS4Bir7iaYA2G5O8rO1DmdThTl6TRVboRM73zzJkuCRRe2kNHhUWWegb94D%2BIQYLLSgOi3DrfUjhc7aomR94HfaT6p1Fg%2F2WLPIKxlti7ghDRqDXwRDNtTd9tnDAvv8PVXkOd2nAd4jgfA983dvtuCDQec6mde1bMjheh0t9GN%2BRqeFCfPjY76lq%2BIRkXwlnnGPDeJd1c1PoHL%2BPd0gTYPLUajhZ6L8LRctq%2B%2BCGPoMJ35JOx%2BGbdeGUaTLmo9y%2FyXv5n7j%2BVKtjdEIbgCsjFaxwOH4ldzUfSh%2BZotrT95ZDv%2B%2BofqYCfZeVQU6KmTOgcXRvxVCFWz1RAD2zZi%2B5gKdslRAS5QaWnpZUZlCCDFN7hDZsdepeOKHR9b6flHEz%2Fyev8cgUdMb%2F8X%2FiAlbTqqLC6E0mga82%2FvnxIJ9dxaEWU06Q7M8BOqMZASN8eeRuq%2FeNfbSP6HwcrRkebaoWsQKGmt0CpAzOSa5cIGbENVTDDyOG9BjqkAZE9FZADrnv0JELruTu%2BGNbYXigZ3d%2BfzT8%2BXuLIrgSEItm8d2T3qIaX5F0%2BBby2HBsqJBviRlG5UKY1sMMhWxKnPrauBGESEiS8wSjZbuZBcTZIO4ZcUM3R35MQZCbmnU1JLIrO8SLhFPfV%2BbYy3KYxQ8jXP2CidTmt%2Bni%2BeYHyR9ngTeHLr6goM8dRaiuEmRHRMc7lk7KrxglTXCt5cF8I4%2BJP&X-Amz-Signature=94270fd4fd4974e7ffa17550ff2da5edc2954d9278a5b5fb280a9acc001d018b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
