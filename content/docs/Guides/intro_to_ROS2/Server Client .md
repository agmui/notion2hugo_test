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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHJ6E7HH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDXdEOr4TbpXfcM%2B4GGoahEwW8uaZ8sbzk9r3P%2BVAwu5QIgH71%2BCQC32dlt4sJ1roZextw%2BOPkHljCXsH8fXjQnMjoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkaiFP%2B9Ed5cZ3s9CrcAwvQlewyj9EsiUKHQfdjZ13qm18M7q6SDoQueYRQS9JaXvOodbgm%2FMq8QhlFTW54rkwkEpFaw0hGFuTaOKiyV0KHLs7l83SZXVFd5FTpREemj0e4mBwWAm%2BxDkLiXK%2Fton1xQjNEKyAWRAUKl4lUGXBz5%2BpTu%2FfItcsmuyM51tyUeDXZi0xZb%2Bb6wu7%2B%2BiM0ag96cjxvuO8x0wY94CwhN090E6t6x9HekRt4ozFVomHglRETEcbl2XrRLDiXHYUesDyTg0J0fl2KoTmN5mkMK%2BE4ljXoDWVKIeMrXEAI0FkAhDc0Y5HtzqExb7nUPTaJ%2B6%2FeFDzul2%2FYXPXHWsUS%2BDrlLgZMFrgd48j8pfxm%2Fnr%2BgQOJPj2A6Y%2BIqRWDqpcSSqzEa%2FC2EqGoWyctxxamjDqYp4BkQESay2f%2BC8BhRf2RW2sWuVpLfQQ4X8jQTugBY1ptl34jUnTzBiJ%2FliueGWVjT2tSm%2FmeZAElTrRfRLDmOVdlosjCDMIPi4r9sRj9iczfmHWXUtqd6xH57fGsjp1thYJyOi9%2Bo9NaxO8RhA3giobzBGZTrSEeZ2hbOSKhAsYjV6brHDs%2B9Wu2aGlq%2FAD%2BC1GhooBFZhIojQQGoJY99ld4blplmH0xPTuJMOy5n8QGOqUB6ijWaR11LCUvMKxZnIHpfBBb%2BU9u6aHBgppP%2BZT1hEeBfmXIcEcpMvSlImUo6WHvqAIX46P9NpO7g505%2FsKRljmLHvAULkgo65mZc77fvcz%2FK067s1Vo7lVT%2BjqRDWsaX8TWuyw4wHpOK3X%2B4FZG7mVbhzm8DF4eeuGm1KALO%2FhnHXqyzfvUlkZYv%2FTLn0akBdvKCp9k2psiXRXIe0%2BDsWcOR9wv&X-Amz-Signature=a5ea600f09b2b257655856f9a9aedcbed845b02055f6c39ff21a5a895e21cfba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHJ6E7HH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDXdEOr4TbpXfcM%2B4GGoahEwW8uaZ8sbzk9r3P%2BVAwu5QIgH71%2BCQC32dlt4sJ1roZextw%2BOPkHljCXsH8fXjQnMjoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkaiFP%2B9Ed5cZ3s9CrcAwvQlewyj9EsiUKHQfdjZ13qm18M7q6SDoQueYRQS9JaXvOodbgm%2FMq8QhlFTW54rkwkEpFaw0hGFuTaOKiyV0KHLs7l83SZXVFd5FTpREemj0e4mBwWAm%2BxDkLiXK%2Fton1xQjNEKyAWRAUKl4lUGXBz5%2BpTu%2FfItcsmuyM51tyUeDXZi0xZb%2Bb6wu7%2B%2BiM0ag96cjxvuO8x0wY94CwhN090E6t6x9HekRt4ozFVomHglRETEcbl2XrRLDiXHYUesDyTg0J0fl2KoTmN5mkMK%2BE4ljXoDWVKIeMrXEAI0FkAhDc0Y5HtzqExb7nUPTaJ%2B6%2FeFDzul2%2FYXPXHWsUS%2BDrlLgZMFrgd48j8pfxm%2Fnr%2BgQOJPj2A6Y%2BIqRWDqpcSSqzEa%2FC2EqGoWyctxxamjDqYp4BkQESay2f%2BC8BhRf2RW2sWuVpLfQQ4X8jQTugBY1ptl34jUnTzBiJ%2FliueGWVjT2tSm%2FmeZAElTrRfRLDmOVdlosjCDMIPi4r9sRj9iczfmHWXUtqd6xH57fGsjp1thYJyOi9%2Bo9NaxO8RhA3giobzBGZTrSEeZ2hbOSKhAsYjV6brHDs%2B9Wu2aGlq%2FAD%2BC1GhooBFZhIojQQGoJY99ld4blplmH0xPTuJMOy5n8QGOqUB6ijWaR11LCUvMKxZnIHpfBBb%2BU9u6aHBgppP%2BZT1hEeBfmXIcEcpMvSlImUo6WHvqAIX46P9NpO7g505%2FsKRljmLHvAULkgo65mZc77fvcz%2FK067s1Vo7lVT%2BjqRDWsaX8TWuyw4wHpOK3X%2B4FZG7mVbhzm8DF4eeuGm1KALO%2FhnHXqyzfvUlkZYv%2FTLn0akBdvKCp9k2psiXRXIe0%2BDsWcOR9wv&X-Amz-Signature=3176ed0231fde7c2f1603f6e013964b1c1ba52df58d33a33dd7da63ae21f6e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHJ6E7HH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDXdEOr4TbpXfcM%2B4GGoahEwW8uaZ8sbzk9r3P%2BVAwu5QIgH71%2BCQC32dlt4sJ1roZextw%2BOPkHljCXsH8fXjQnMjoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkaiFP%2B9Ed5cZ3s9CrcAwvQlewyj9EsiUKHQfdjZ13qm18M7q6SDoQueYRQS9JaXvOodbgm%2FMq8QhlFTW54rkwkEpFaw0hGFuTaOKiyV0KHLs7l83SZXVFd5FTpREemj0e4mBwWAm%2BxDkLiXK%2Fton1xQjNEKyAWRAUKl4lUGXBz5%2BpTu%2FfItcsmuyM51tyUeDXZi0xZb%2Bb6wu7%2B%2BiM0ag96cjxvuO8x0wY94CwhN090E6t6x9HekRt4ozFVomHglRETEcbl2XrRLDiXHYUesDyTg0J0fl2KoTmN5mkMK%2BE4ljXoDWVKIeMrXEAI0FkAhDc0Y5HtzqExb7nUPTaJ%2B6%2FeFDzul2%2FYXPXHWsUS%2BDrlLgZMFrgd48j8pfxm%2Fnr%2BgQOJPj2A6Y%2BIqRWDqpcSSqzEa%2FC2EqGoWyctxxamjDqYp4BkQESay2f%2BC8BhRf2RW2sWuVpLfQQ4X8jQTugBY1ptl34jUnTzBiJ%2FliueGWVjT2tSm%2FmeZAElTrRfRLDmOVdlosjCDMIPi4r9sRj9iczfmHWXUtqd6xH57fGsjp1thYJyOi9%2Bo9NaxO8RhA3giobzBGZTrSEeZ2hbOSKhAsYjV6brHDs%2B9Wu2aGlq%2FAD%2BC1GhooBFZhIojQQGoJY99ld4blplmH0xPTuJMOy5n8QGOqUB6ijWaR11LCUvMKxZnIHpfBBb%2BU9u6aHBgppP%2BZT1hEeBfmXIcEcpMvSlImUo6WHvqAIX46P9NpO7g505%2FsKRljmLHvAULkgo65mZc77fvcz%2FK067s1Vo7lVT%2BjqRDWsaX8TWuyw4wHpOK3X%2B4FZG7mVbhzm8DF4eeuGm1KALO%2FhnHXqyzfvUlkZYv%2FTLn0akBdvKCp9k2psiXRXIe0%2BDsWcOR9wv&X-Amz-Signature=9031725f554d61ab8902e6913b11342e6df5eb189bc1977e96e0de3464593303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHJ6E7HH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDXdEOr4TbpXfcM%2B4GGoahEwW8uaZ8sbzk9r3P%2BVAwu5QIgH71%2BCQC32dlt4sJ1roZextw%2BOPkHljCXsH8fXjQnMjoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkaiFP%2B9Ed5cZ3s9CrcAwvQlewyj9EsiUKHQfdjZ13qm18M7q6SDoQueYRQS9JaXvOodbgm%2FMq8QhlFTW54rkwkEpFaw0hGFuTaOKiyV0KHLs7l83SZXVFd5FTpREemj0e4mBwWAm%2BxDkLiXK%2Fton1xQjNEKyAWRAUKl4lUGXBz5%2BpTu%2FfItcsmuyM51tyUeDXZi0xZb%2Bb6wu7%2B%2BiM0ag96cjxvuO8x0wY94CwhN090E6t6x9HekRt4ozFVomHglRETEcbl2XrRLDiXHYUesDyTg0J0fl2KoTmN5mkMK%2BE4ljXoDWVKIeMrXEAI0FkAhDc0Y5HtzqExb7nUPTaJ%2B6%2FeFDzul2%2FYXPXHWsUS%2BDrlLgZMFrgd48j8pfxm%2Fnr%2BgQOJPj2A6Y%2BIqRWDqpcSSqzEa%2FC2EqGoWyctxxamjDqYp4BkQESay2f%2BC8BhRf2RW2sWuVpLfQQ4X8jQTugBY1ptl34jUnTzBiJ%2FliueGWVjT2tSm%2FmeZAElTrRfRLDmOVdlosjCDMIPi4r9sRj9iczfmHWXUtqd6xH57fGsjp1thYJyOi9%2Bo9NaxO8RhA3giobzBGZTrSEeZ2hbOSKhAsYjV6brHDs%2B9Wu2aGlq%2FAD%2BC1GhooBFZhIojQQGoJY99ld4blplmH0xPTuJMOy5n8QGOqUB6ijWaR11LCUvMKxZnIHpfBBb%2BU9u6aHBgppP%2BZT1hEeBfmXIcEcpMvSlImUo6WHvqAIX46P9NpO7g505%2FsKRljmLHvAULkgo65mZc77fvcz%2FK067s1Vo7lVT%2BjqRDWsaX8TWuyw4wHpOK3X%2B4FZG7mVbhzm8DF4eeuGm1KALO%2FhnHXqyzfvUlkZYv%2FTLn0akBdvKCp9k2psiXRXIe0%2BDsWcOR9wv&X-Amz-Signature=d9fd5bd074e4f5f0856206a9dcd99dc4e1dc0ac5f0f3de0ed8a71cd9f3dba43d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHJ6E7HH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDXdEOr4TbpXfcM%2B4GGoahEwW8uaZ8sbzk9r3P%2BVAwu5QIgH71%2BCQC32dlt4sJ1roZextw%2BOPkHljCXsH8fXjQnMjoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkaiFP%2B9Ed5cZ3s9CrcAwvQlewyj9EsiUKHQfdjZ13qm18M7q6SDoQueYRQS9JaXvOodbgm%2FMq8QhlFTW54rkwkEpFaw0hGFuTaOKiyV0KHLs7l83SZXVFd5FTpREemj0e4mBwWAm%2BxDkLiXK%2Fton1xQjNEKyAWRAUKl4lUGXBz5%2BpTu%2FfItcsmuyM51tyUeDXZi0xZb%2Bb6wu7%2B%2BiM0ag96cjxvuO8x0wY94CwhN090E6t6x9HekRt4ozFVomHglRETEcbl2XrRLDiXHYUesDyTg0J0fl2KoTmN5mkMK%2BE4ljXoDWVKIeMrXEAI0FkAhDc0Y5HtzqExb7nUPTaJ%2B6%2FeFDzul2%2FYXPXHWsUS%2BDrlLgZMFrgd48j8pfxm%2Fnr%2BgQOJPj2A6Y%2BIqRWDqpcSSqzEa%2FC2EqGoWyctxxamjDqYp4BkQESay2f%2BC8BhRf2RW2sWuVpLfQQ4X8jQTugBY1ptl34jUnTzBiJ%2FliueGWVjT2tSm%2FmeZAElTrRfRLDmOVdlosjCDMIPi4r9sRj9iczfmHWXUtqd6xH57fGsjp1thYJyOi9%2Bo9NaxO8RhA3giobzBGZTrSEeZ2hbOSKhAsYjV6brHDs%2B9Wu2aGlq%2FAD%2BC1GhooBFZhIojQQGoJY99ld4blplmH0xPTuJMOy5n8QGOqUB6ijWaR11LCUvMKxZnIHpfBBb%2BU9u6aHBgppP%2BZT1hEeBfmXIcEcpMvSlImUo6WHvqAIX46P9NpO7g505%2FsKRljmLHvAULkgo65mZc77fvcz%2FK067s1Vo7lVT%2BjqRDWsaX8TWuyw4wHpOK3X%2B4FZG7mVbhzm8DF4eeuGm1KALO%2FhnHXqyzfvUlkZYv%2FTLn0akBdvKCp9k2psiXRXIe0%2BDsWcOR9wv&X-Amz-Signature=0c17ddeae72c5bbcfb347c5f91b22df2d3ce12635aa9af6a9a8e9010b01cc39a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
