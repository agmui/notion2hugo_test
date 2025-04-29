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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AWF2HZ4%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2BOqnumYjWCzbhyx94huoatlWrpjWjkHzKjyJQku6ywIgUI%2FUjYoyhzeQLriF8zeDZz4VVHxi5B80eN368AimbsYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnoixiWoaQl2iZdRyrcA%2FAuL6X9ZtuInC0AwXwfrvm3JAnBQbqmZzetw4LkpP3KnJvTBB2cBJMxgpixTfIviRDgvas54FJKjO6j9h4y3gR6Bo4zp%2FH0LXNGbtm6Zc5%2BuQhaoKuFZjNGRJfAUYdDuf%2Fs6JG3SMCKirfejvPI6w63h0d5cAqYR8EsDHVl2U%2BSiQUa%2B6WbQ8WjYz1RXzBaclY0Ljd74AvW9SdpT%2B%2FRygj4eNmrhYZNLWKHjgXnukJGF%2FNmdyYnMUYlAIs6pkf19p5%2BbQpWvmAInPT%2FpG9di043aPqbhyZiTcKui9j0zv3PMuU%2BdCgSFgoQ0fFeeBwvH7WbiWjByPPiq%2BbW0qks%2FWe9nOGtampn%2FZIv0bHXwK2X4TObvXhOLHHMcjPNPDoI7ZDfXAQO%2BH2iRtFd%2BS9WtaoB5Us74pe98MHcvXLDx6m1xYIdAuT%2BcR%2B%2FF%2F0aLBuue7hzW%2BSnDAZUBCiR3sNm55wB3QQWi4mG4NgqMU2OUxwv4NgktUfyuycVIqhIjNFArfGGLr7ZQQYzk595K9kgUcV0%2F9dPZdHg15oobDA0Lzn4VUJ%2BRZPsUtaTdFVHLJ%2BxxRVk%2FEDJtZX%2FY7xmGI9zsDxGjdWqpgej0RQ53atTppya8qcD6Gh%2Bq%2Bg56vCDMP7RwcAGOqUBrm4skHDM4nfEx%2FoCfmyOGnvZx5DLFUqdfloHKIRVDMSHM5izXP%2FHga2kZYFQPhIR2mfAk9Fm9YjTizs5WKKVnBlYGHh2Yejqu81MB4IO9FQP%2FmPdEJOYCqLD77Ikgno8V4KKA2FaQdsQbl7MazhqxcycVcezSxnpr3u1ci%2FDGglO%2Bf3qZ7IcQilDc7u%2F3QJMrtDXmAhGOP3lh0tc%2BzuAQ%2FPo%2BjDM&X-Amz-Signature=bd1084d950fd4453c738b5c73b1b50c8752b6db155e489cf8035efa94e2b3f73&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AWF2HZ4%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2BOqnumYjWCzbhyx94huoatlWrpjWjkHzKjyJQku6ywIgUI%2FUjYoyhzeQLriF8zeDZz4VVHxi5B80eN368AimbsYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnoixiWoaQl2iZdRyrcA%2FAuL6X9ZtuInC0AwXwfrvm3JAnBQbqmZzetw4LkpP3KnJvTBB2cBJMxgpixTfIviRDgvas54FJKjO6j9h4y3gR6Bo4zp%2FH0LXNGbtm6Zc5%2BuQhaoKuFZjNGRJfAUYdDuf%2Fs6JG3SMCKirfejvPI6w63h0d5cAqYR8EsDHVl2U%2BSiQUa%2B6WbQ8WjYz1RXzBaclY0Ljd74AvW9SdpT%2B%2FRygj4eNmrhYZNLWKHjgXnukJGF%2FNmdyYnMUYlAIs6pkf19p5%2BbQpWvmAInPT%2FpG9di043aPqbhyZiTcKui9j0zv3PMuU%2BdCgSFgoQ0fFeeBwvH7WbiWjByPPiq%2BbW0qks%2FWe9nOGtampn%2FZIv0bHXwK2X4TObvXhOLHHMcjPNPDoI7ZDfXAQO%2BH2iRtFd%2BS9WtaoB5Us74pe98MHcvXLDx6m1xYIdAuT%2BcR%2B%2FF%2F0aLBuue7hzW%2BSnDAZUBCiR3sNm55wB3QQWi4mG4NgqMU2OUxwv4NgktUfyuycVIqhIjNFArfGGLr7ZQQYzk595K9kgUcV0%2F9dPZdHg15oobDA0Lzn4VUJ%2BRZPsUtaTdFVHLJ%2BxxRVk%2FEDJtZX%2FY7xmGI9zsDxGjdWqpgej0RQ53atTppya8qcD6Gh%2Bq%2Bg56vCDMP7RwcAGOqUBrm4skHDM4nfEx%2FoCfmyOGnvZx5DLFUqdfloHKIRVDMSHM5izXP%2FHga2kZYFQPhIR2mfAk9Fm9YjTizs5WKKVnBlYGHh2Yejqu81MB4IO9FQP%2FmPdEJOYCqLD77Ikgno8V4KKA2FaQdsQbl7MazhqxcycVcezSxnpr3u1ci%2FDGglO%2Bf3qZ7IcQilDc7u%2F3QJMrtDXmAhGOP3lh0tc%2BzuAQ%2FPo%2BjDM&X-Amz-Signature=ff0c65f4c65bff59ebea06bdf58ba5a705d6126ee443a5ae6e73577e6488fd58&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AWF2HZ4%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2BOqnumYjWCzbhyx94huoatlWrpjWjkHzKjyJQku6ywIgUI%2FUjYoyhzeQLriF8zeDZz4VVHxi5B80eN368AimbsYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnoixiWoaQl2iZdRyrcA%2FAuL6X9ZtuInC0AwXwfrvm3JAnBQbqmZzetw4LkpP3KnJvTBB2cBJMxgpixTfIviRDgvas54FJKjO6j9h4y3gR6Bo4zp%2FH0LXNGbtm6Zc5%2BuQhaoKuFZjNGRJfAUYdDuf%2Fs6JG3SMCKirfejvPI6w63h0d5cAqYR8EsDHVl2U%2BSiQUa%2B6WbQ8WjYz1RXzBaclY0Ljd74AvW9SdpT%2B%2FRygj4eNmrhYZNLWKHjgXnukJGF%2FNmdyYnMUYlAIs6pkf19p5%2BbQpWvmAInPT%2FpG9di043aPqbhyZiTcKui9j0zv3PMuU%2BdCgSFgoQ0fFeeBwvH7WbiWjByPPiq%2BbW0qks%2FWe9nOGtampn%2FZIv0bHXwK2X4TObvXhOLHHMcjPNPDoI7ZDfXAQO%2BH2iRtFd%2BS9WtaoB5Us74pe98MHcvXLDx6m1xYIdAuT%2BcR%2B%2FF%2F0aLBuue7hzW%2BSnDAZUBCiR3sNm55wB3QQWi4mG4NgqMU2OUxwv4NgktUfyuycVIqhIjNFArfGGLr7ZQQYzk595K9kgUcV0%2F9dPZdHg15oobDA0Lzn4VUJ%2BRZPsUtaTdFVHLJ%2BxxRVk%2FEDJtZX%2FY7xmGI9zsDxGjdWqpgej0RQ53atTppya8qcD6Gh%2Bq%2Bg56vCDMP7RwcAGOqUBrm4skHDM4nfEx%2FoCfmyOGnvZx5DLFUqdfloHKIRVDMSHM5izXP%2FHga2kZYFQPhIR2mfAk9Fm9YjTizs5WKKVnBlYGHh2Yejqu81MB4IO9FQP%2FmPdEJOYCqLD77Ikgno8V4KKA2FaQdsQbl7MazhqxcycVcezSxnpr3u1ci%2FDGglO%2Bf3qZ7IcQilDc7u%2F3QJMrtDXmAhGOP3lh0tc%2BzuAQ%2FPo%2BjDM&X-Amz-Signature=c3ebdced98bbd8f11ad4cb824d35a02b194da05b5829194db58438dbc999fcd4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AWF2HZ4%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2BOqnumYjWCzbhyx94huoatlWrpjWjkHzKjyJQku6ywIgUI%2FUjYoyhzeQLriF8zeDZz4VVHxi5B80eN368AimbsYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnoixiWoaQl2iZdRyrcA%2FAuL6X9ZtuInC0AwXwfrvm3JAnBQbqmZzetw4LkpP3KnJvTBB2cBJMxgpixTfIviRDgvas54FJKjO6j9h4y3gR6Bo4zp%2FH0LXNGbtm6Zc5%2BuQhaoKuFZjNGRJfAUYdDuf%2Fs6JG3SMCKirfejvPI6w63h0d5cAqYR8EsDHVl2U%2BSiQUa%2B6WbQ8WjYz1RXzBaclY0Ljd74AvW9SdpT%2B%2FRygj4eNmrhYZNLWKHjgXnukJGF%2FNmdyYnMUYlAIs6pkf19p5%2BbQpWvmAInPT%2FpG9di043aPqbhyZiTcKui9j0zv3PMuU%2BdCgSFgoQ0fFeeBwvH7WbiWjByPPiq%2BbW0qks%2FWe9nOGtampn%2FZIv0bHXwK2X4TObvXhOLHHMcjPNPDoI7ZDfXAQO%2BH2iRtFd%2BS9WtaoB5Us74pe98MHcvXLDx6m1xYIdAuT%2BcR%2B%2FF%2F0aLBuue7hzW%2BSnDAZUBCiR3sNm55wB3QQWi4mG4NgqMU2OUxwv4NgktUfyuycVIqhIjNFArfGGLr7ZQQYzk595K9kgUcV0%2F9dPZdHg15oobDA0Lzn4VUJ%2BRZPsUtaTdFVHLJ%2BxxRVk%2FEDJtZX%2FY7xmGI9zsDxGjdWqpgej0RQ53atTppya8qcD6Gh%2Bq%2Bg56vCDMP7RwcAGOqUBrm4skHDM4nfEx%2FoCfmyOGnvZx5DLFUqdfloHKIRVDMSHM5izXP%2FHga2kZYFQPhIR2mfAk9Fm9YjTizs5WKKVnBlYGHh2Yejqu81MB4IO9FQP%2FmPdEJOYCqLD77Ikgno8V4KKA2FaQdsQbl7MazhqxcycVcezSxnpr3u1ci%2FDGglO%2Bf3qZ7IcQilDc7u%2F3QJMrtDXmAhGOP3lh0tc%2BzuAQ%2FPo%2BjDM&X-Amz-Signature=9101268a5d5191715701d797a0822a8bf50df8cb821aac0657b6945162729d50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AWF2HZ4%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2BOqnumYjWCzbhyx94huoatlWrpjWjkHzKjyJQku6ywIgUI%2FUjYoyhzeQLriF8zeDZz4VVHxi5B80eN368AimbsYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnoixiWoaQl2iZdRyrcA%2FAuL6X9ZtuInC0AwXwfrvm3JAnBQbqmZzetw4LkpP3KnJvTBB2cBJMxgpixTfIviRDgvas54FJKjO6j9h4y3gR6Bo4zp%2FH0LXNGbtm6Zc5%2BuQhaoKuFZjNGRJfAUYdDuf%2Fs6JG3SMCKirfejvPI6w63h0d5cAqYR8EsDHVl2U%2BSiQUa%2B6WbQ8WjYz1RXzBaclY0Ljd74AvW9SdpT%2B%2FRygj4eNmrhYZNLWKHjgXnukJGF%2FNmdyYnMUYlAIs6pkf19p5%2BbQpWvmAInPT%2FpG9di043aPqbhyZiTcKui9j0zv3PMuU%2BdCgSFgoQ0fFeeBwvH7WbiWjByPPiq%2BbW0qks%2FWe9nOGtampn%2FZIv0bHXwK2X4TObvXhOLHHMcjPNPDoI7ZDfXAQO%2BH2iRtFd%2BS9WtaoB5Us74pe98MHcvXLDx6m1xYIdAuT%2BcR%2B%2FF%2F0aLBuue7hzW%2BSnDAZUBCiR3sNm55wB3QQWi4mG4NgqMU2OUxwv4NgktUfyuycVIqhIjNFArfGGLr7ZQQYzk595K9kgUcV0%2F9dPZdHg15oobDA0Lzn4VUJ%2BRZPsUtaTdFVHLJ%2BxxRVk%2FEDJtZX%2FY7xmGI9zsDxGjdWqpgej0RQ53atTppya8qcD6Gh%2Bq%2Bg56vCDMP7RwcAGOqUBrm4skHDM4nfEx%2FoCfmyOGnvZx5DLFUqdfloHKIRVDMSHM5izXP%2FHga2kZYFQPhIR2mfAk9Fm9YjTizs5WKKVnBlYGHh2Yejqu81MB4IO9FQP%2FmPdEJOYCqLD77Ikgno8V4KKA2FaQdsQbl7MazhqxcycVcezSxnpr3u1ci%2FDGglO%2Bf3qZ7IcQilDc7u%2F3QJMrtDXmAhGOP3lh0tc%2BzuAQ%2FPo%2BjDM&X-Amz-Signature=311a0ddff2967a535f54ab352dc41db416055efba7a0afce4bf684bedc8184bc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
