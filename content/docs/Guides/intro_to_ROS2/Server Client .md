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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QVE4VBD%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCWU%2B1ha97W3%2FhxaxCcJdFGe5SO3IXXHMnM8rfjT0RdYwIhAMfIqb%2BPl9IGMxuIcbppE8cTSIE7SlK1ZdvyMZTRRv9jKv8DCB4QABoMNjM3NDIzMTgzODA1IgwYVLjv2%2FA7xFM1ohIq3AOcZ61kllNrtedrowHFMborUIV%2FCAc6%2Fu09pFV27gtmybhnD%2BxUCuEEHAEk7vl7iHZoa01p7uELGioihALZsKQm0wAj4EZt80djrNQoCPT7o%2FYCsDDMPA9I7rryuU2KSP9hYEaf97uP%2BkOrF73fhqd5RhAGbQnrjPwmzWRvGCDtt0elnrAc9h2s54WrKgvNzknP5kwfyjCtBTtvBffRBW%2BCqmAkeu3qQY2kQUqAM97g2bp%2FOUWlFQa9bZjKLN5SBlbNZI78uBwkr9xzMAVAlG6Zo6Qf6HaJtdT7%2FTILAOuCZ2zyQ3NvgvpJoXTiPTwqCl%2BKsFwsr1Tx1iH8segTO4fMIIS65oecTE04tuI%2FLGv6xQumuBT%2B%2FvjLGG8sUCrCFyaGyLxBeoXek4CR6KzRpSo1KIUfDwVDgZJSTHMOoN5hOaOZKAa8rVjAOwKlUKJTnYCK5JHO%2FTwBMiKlW%2BEGiR4MJr0DsAmFwpX05J%2FhBwLvoG7MPCv3EpdFBlRNpueFXRZ3%2Bn70GL%2B49Dg7NInFNIhWQNlnQkOQCxtpI2WKOj7wMXJPpzqPkRHIPpXzSz6MWRkOaDBMCclsJnv8bNYpoyhmEfAhIJX3MuchyP3FqWjMAtYp06KDU950gZE9nzDJ7cjBBjqkAZjNo6NJGhyO5heTE%2FbwvO1HjROR51CIrtdN2U5i0EpSAHrz6J6dFPr2GAMf9HM9VLmc9OfTXKn86B2aqF9EjRKtZacp48vfYgN6te5A18TehT5tSBdpemF13lXVMulrUQFsmmebogCOSCiT5EHnmtp%2BMbZpdBivA%2B4MeALSuDpudL9xciNfTDv5SwhLDO8GKOkv6SstNEehv2I9WMH%2BaXf28zEm&X-Amz-Signature=8b55d0a156cefd6a44568c62474922f849cd21bc8bcf2bcd309b54e6deca401f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QVE4VBD%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCWU%2B1ha97W3%2FhxaxCcJdFGe5SO3IXXHMnM8rfjT0RdYwIhAMfIqb%2BPl9IGMxuIcbppE8cTSIE7SlK1ZdvyMZTRRv9jKv8DCB4QABoMNjM3NDIzMTgzODA1IgwYVLjv2%2FA7xFM1ohIq3AOcZ61kllNrtedrowHFMborUIV%2FCAc6%2Fu09pFV27gtmybhnD%2BxUCuEEHAEk7vl7iHZoa01p7uELGioihALZsKQm0wAj4EZt80djrNQoCPT7o%2FYCsDDMPA9I7rryuU2KSP9hYEaf97uP%2BkOrF73fhqd5RhAGbQnrjPwmzWRvGCDtt0elnrAc9h2s54WrKgvNzknP5kwfyjCtBTtvBffRBW%2BCqmAkeu3qQY2kQUqAM97g2bp%2FOUWlFQa9bZjKLN5SBlbNZI78uBwkr9xzMAVAlG6Zo6Qf6HaJtdT7%2FTILAOuCZ2zyQ3NvgvpJoXTiPTwqCl%2BKsFwsr1Tx1iH8segTO4fMIIS65oecTE04tuI%2FLGv6xQumuBT%2B%2FvjLGG8sUCrCFyaGyLxBeoXek4CR6KzRpSo1KIUfDwVDgZJSTHMOoN5hOaOZKAa8rVjAOwKlUKJTnYCK5JHO%2FTwBMiKlW%2BEGiR4MJr0DsAmFwpX05J%2FhBwLvoG7MPCv3EpdFBlRNpueFXRZ3%2Bn70GL%2B49Dg7NInFNIhWQNlnQkOQCxtpI2WKOj7wMXJPpzqPkRHIPpXzSz6MWRkOaDBMCclsJnv8bNYpoyhmEfAhIJX3MuchyP3FqWjMAtYp06KDU950gZE9nzDJ7cjBBjqkAZjNo6NJGhyO5heTE%2FbwvO1HjROR51CIrtdN2U5i0EpSAHrz6J6dFPr2GAMf9HM9VLmc9OfTXKn86B2aqF9EjRKtZacp48vfYgN6te5A18TehT5tSBdpemF13lXVMulrUQFsmmebogCOSCiT5EHnmtp%2BMbZpdBivA%2B4MeALSuDpudL9xciNfTDv5SwhLDO8GKOkv6SstNEehv2I9WMH%2BaXf28zEm&X-Amz-Signature=3b4c0f312dcee782d8e12171ee9aec1537bed44f0307764b6d9c9618b6f1bafb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QVE4VBD%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCWU%2B1ha97W3%2FhxaxCcJdFGe5SO3IXXHMnM8rfjT0RdYwIhAMfIqb%2BPl9IGMxuIcbppE8cTSIE7SlK1ZdvyMZTRRv9jKv8DCB4QABoMNjM3NDIzMTgzODA1IgwYVLjv2%2FA7xFM1ohIq3AOcZ61kllNrtedrowHFMborUIV%2FCAc6%2Fu09pFV27gtmybhnD%2BxUCuEEHAEk7vl7iHZoa01p7uELGioihALZsKQm0wAj4EZt80djrNQoCPT7o%2FYCsDDMPA9I7rryuU2KSP9hYEaf97uP%2BkOrF73fhqd5RhAGbQnrjPwmzWRvGCDtt0elnrAc9h2s54WrKgvNzknP5kwfyjCtBTtvBffRBW%2BCqmAkeu3qQY2kQUqAM97g2bp%2FOUWlFQa9bZjKLN5SBlbNZI78uBwkr9xzMAVAlG6Zo6Qf6HaJtdT7%2FTILAOuCZ2zyQ3NvgvpJoXTiPTwqCl%2BKsFwsr1Tx1iH8segTO4fMIIS65oecTE04tuI%2FLGv6xQumuBT%2B%2FvjLGG8sUCrCFyaGyLxBeoXek4CR6KzRpSo1KIUfDwVDgZJSTHMOoN5hOaOZKAa8rVjAOwKlUKJTnYCK5JHO%2FTwBMiKlW%2BEGiR4MJr0DsAmFwpX05J%2FhBwLvoG7MPCv3EpdFBlRNpueFXRZ3%2Bn70GL%2B49Dg7NInFNIhWQNlnQkOQCxtpI2WKOj7wMXJPpzqPkRHIPpXzSz6MWRkOaDBMCclsJnv8bNYpoyhmEfAhIJX3MuchyP3FqWjMAtYp06KDU950gZE9nzDJ7cjBBjqkAZjNo6NJGhyO5heTE%2FbwvO1HjROR51CIrtdN2U5i0EpSAHrz6J6dFPr2GAMf9HM9VLmc9OfTXKn86B2aqF9EjRKtZacp48vfYgN6te5A18TehT5tSBdpemF13lXVMulrUQFsmmebogCOSCiT5EHnmtp%2BMbZpdBivA%2B4MeALSuDpudL9xciNfTDv5SwhLDO8GKOkv6SstNEehv2I9WMH%2BaXf28zEm&X-Amz-Signature=1e5f91b656e78583d9347eae773ef93aaacaa9b7cc121ca64877c1ec71f8609d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QVE4VBD%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCWU%2B1ha97W3%2FhxaxCcJdFGe5SO3IXXHMnM8rfjT0RdYwIhAMfIqb%2BPl9IGMxuIcbppE8cTSIE7SlK1ZdvyMZTRRv9jKv8DCB4QABoMNjM3NDIzMTgzODA1IgwYVLjv2%2FA7xFM1ohIq3AOcZ61kllNrtedrowHFMborUIV%2FCAc6%2Fu09pFV27gtmybhnD%2BxUCuEEHAEk7vl7iHZoa01p7uELGioihALZsKQm0wAj4EZt80djrNQoCPT7o%2FYCsDDMPA9I7rryuU2KSP9hYEaf97uP%2BkOrF73fhqd5RhAGbQnrjPwmzWRvGCDtt0elnrAc9h2s54WrKgvNzknP5kwfyjCtBTtvBffRBW%2BCqmAkeu3qQY2kQUqAM97g2bp%2FOUWlFQa9bZjKLN5SBlbNZI78uBwkr9xzMAVAlG6Zo6Qf6HaJtdT7%2FTILAOuCZ2zyQ3NvgvpJoXTiPTwqCl%2BKsFwsr1Tx1iH8segTO4fMIIS65oecTE04tuI%2FLGv6xQumuBT%2B%2FvjLGG8sUCrCFyaGyLxBeoXek4CR6KzRpSo1KIUfDwVDgZJSTHMOoN5hOaOZKAa8rVjAOwKlUKJTnYCK5JHO%2FTwBMiKlW%2BEGiR4MJr0DsAmFwpX05J%2FhBwLvoG7MPCv3EpdFBlRNpueFXRZ3%2Bn70GL%2B49Dg7NInFNIhWQNlnQkOQCxtpI2WKOj7wMXJPpzqPkRHIPpXzSz6MWRkOaDBMCclsJnv8bNYpoyhmEfAhIJX3MuchyP3FqWjMAtYp06KDU950gZE9nzDJ7cjBBjqkAZjNo6NJGhyO5heTE%2FbwvO1HjROR51CIrtdN2U5i0EpSAHrz6J6dFPr2GAMf9HM9VLmc9OfTXKn86B2aqF9EjRKtZacp48vfYgN6te5A18TehT5tSBdpemF13lXVMulrUQFsmmebogCOSCiT5EHnmtp%2BMbZpdBivA%2B4MeALSuDpudL9xciNfTDv5SwhLDO8GKOkv6SstNEehv2I9WMH%2BaXf28zEm&X-Amz-Signature=70f71ac9922d43ae9f0a25de448bd04cd36fc8ce9f0307a325302211202c0a43&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QVE4VBD%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCWU%2B1ha97W3%2FhxaxCcJdFGe5SO3IXXHMnM8rfjT0RdYwIhAMfIqb%2BPl9IGMxuIcbppE8cTSIE7SlK1ZdvyMZTRRv9jKv8DCB4QABoMNjM3NDIzMTgzODA1IgwYVLjv2%2FA7xFM1ohIq3AOcZ61kllNrtedrowHFMborUIV%2FCAc6%2Fu09pFV27gtmybhnD%2BxUCuEEHAEk7vl7iHZoa01p7uELGioihALZsKQm0wAj4EZt80djrNQoCPT7o%2FYCsDDMPA9I7rryuU2KSP9hYEaf97uP%2BkOrF73fhqd5RhAGbQnrjPwmzWRvGCDtt0elnrAc9h2s54WrKgvNzknP5kwfyjCtBTtvBffRBW%2BCqmAkeu3qQY2kQUqAM97g2bp%2FOUWlFQa9bZjKLN5SBlbNZI78uBwkr9xzMAVAlG6Zo6Qf6HaJtdT7%2FTILAOuCZ2zyQ3NvgvpJoXTiPTwqCl%2BKsFwsr1Tx1iH8segTO4fMIIS65oecTE04tuI%2FLGv6xQumuBT%2B%2FvjLGG8sUCrCFyaGyLxBeoXek4CR6KzRpSo1KIUfDwVDgZJSTHMOoN5hOaOZKAa8rVjAOwKlUKJTnYCK5JHO%2FTwBMiKlW%2BEGiR4MJr0DsAmFwpX05J%2FhBwLvoG7MPCv3EpdFBlRNpueFXRZ3%2Bn70GL%2B49Dg7NInFNIhWQNlnQkOQCxtpI2WKOj7wMXJPpzqPkRHIPpXzSz6MWRkOaDBMCclsJnv8bNYpoyhmEfAhIJX3MuchyP3FqWjMAtYp06KDU950gZE9nzDJ7cjBBjqkAZjNo6NJGhyO5heTE%2FbwvO1HjROR51CIrtdN2U5i0EpSAHrz6J6dFPr2GAMf9HM9VLmc9OfTXKn86B2aqF9EjRKtZacp48vfYgN6te5A18TehT5tSBdpemF13lXVMulrUQFsmmebogCOSCiT5EHnmtp%2BMbZpdBivA%2B4MeALSuDpudL9xciNfTDv5SwhLDO8GKOkv6SstNEehv2I9WMH%2BaXf28zEm&X-Amz-Signature=a719ca1a582b78e129f61e6d1f1045897cae238114bad7acd8c6a97cf62064fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
