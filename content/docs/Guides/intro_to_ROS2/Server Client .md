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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU2RDTOA%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDn69lMYKNxTpXb%2Fr5g7%2BCHhkKbbM1kuZX1dqN8pyCp3wIgYhjAxaALyYsJOQqq%2BcCDjEEpaB2Yxoyr0%2BC7rfcndrkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiDhkUEztyKTfgI2SrcAyBKmF%2FlWMEikRcPLYhdNlw91QHqDt8uHB8wJk0CK4MMR7HJmu7eEUW1molaHr6U0F1atA%2FH6d%2BU26V%2FXUGrdvwkijWdHl0xRWnvC900mwHNEHIuHqRARN5hQB3KCLrUx2t9gD%2Fwsvc3ekgN0Q%2Bo3pZnuHt%2B7pIhJbEZMoVHVUIMqs%2FX3EvekYGw6Inl8uazZCB1nJs3OTNeo%2BTqE6mxUAmddCtRbRkSxZUY%2Fk%2F%2F4vkE99oOaSfc1J5st6JOxDOtI2q0zRLEl8Zrc0IZNilfgDRPTUrtaHInjRanY61eNYkjfWtq6eUeN8NHJiminl7dc2ngRssGSunSr%2BOnmR1bmUqO7ZSUh6Yi9l%2FJo0ZNM3QjOxCUZsQhRKReHAeUJQWVMo7oSPqqwjC2EfWcIqmc4l96Qgj1xPa7iPvX%2F1e66SusA1NkYiONetUazH3lxn2MlWXlYjJ85oVhDa2lKGDd65Yg06GuRkf7wHIOVJsh3nZBy3N%2F35uWWS1v02DSQ%2Fnb0x4eBvrsjQnnvzrWDorun16COdIY69ivmk8l0OvM0sBIbRGTMmAJyzCM4TBi2PfVhSF56fq7KJz%2B7Mi03QorrSm3ahF8prusH%2BsVPtpNVVZ56MNqeoc0vxlaBRYOMMGN6L8GOqUBra1sxSRk5G98yJjaIr1g6ADkUi9wb5YpjZgQp84igoZZaatkUUGwt3DERH6PoF%2F9rYBXGGgkNSLBkA1AsU7MgNQSDRM3OA%2BmwGmsOjxGvHPSou3K3bLzxDzUKmDAeZ0ocy1w11mc07%2FDTbabyUaQ%2Fqs%2BMznns1kfEtsg8c1ClPbx74Xz2HjoUEjaOnAJpd2kKe4UAzomNVl7HCjH0hPQ8Bm0p9Qv&X-Amz-Signature=909314333e282fe699df625d6f05aa138830cc35871f5223811bb41a73e8f34c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU2RDTOA%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDn69lMYKNxTpXb%2Fr5g7%2BCHhkKbbM1kuZX1dqN8pyCp3wIgYhjAxaALyYsJOQqq%2BcCDjEEpaB2Yxoyr0%2BC7rfcndrkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiDhkUEztyKTfgI2SrcAyBKmF%2FlWMEikRcPLYhdNlw91QHqDt8uHB8wJk0CK4MMR7HJmu7eEUW1molaHr6U0F1atA%2FH6d%2BU26V%2FXUGrdvwkijWdHl0xRWnvC900mwHNEHIuHqRARN5hQB3KCLrUx2t9gD%2Fwsvc3ekgN0Q%2Bo3pZnuHt%2B7pIhJbEZMoVHVUIMqs%2FX3EvekYGw6Inl8uazZCB1nJs3OTNeo%2BTqE6mxUAmddCtRbRkSxZUY%2Fk%2F%2F4vkE99oOaSfc1J5st6JOxDOtI2q0zRLEl8Zrc0IZNilfgDRPTUrtaHInjRanY61eNYkjfWtq6eUeN8NHJiminl7dc2ngRssGSunSr%2BOnmR1bmUqO7ZSUh6Yi9l%2FJo0ZNM3QjOxCUZsQhRKReHAeUJQWVMo7oSPqqwjC2EfWcIqmc4l96Qgj1xPa7iPvX%2F1e66SusA1NkYiONetUazH3lxn2MlWXlYjJ85oVhDa2lKGDd65Yg06GuRkf7wHIOVJsh3nZBy3N%2F35uWWS1v02DSQ%2Fnb0x4eBvrsjQnnvzrWDorun16COdIY69ivmk8l0OvM0sBIbRGTMmAJyzCM4TBi2PfVhSF56fq7KJz%2B7Mi03QorrSm3ahF8prusH%2BsVPtpNVVZ56MNqeoc0vxlaBRYOMMGN6L8GOqUBra1sxSRk5G98yJjaIr1g6ADkUi9wb5YpjZgQp84igoZZaatkUUGwt3DERH6PoF%2F9rYBXGGgkNSLBkA1AsU7MgNQSDRM3OA%2BmwGmsOjxGvHPSou3K3bLzxDzUKmDAeZ0ocy1w11mc07%2FDTbabyUaQ%2Fqs%2BMznns1kfEtsg8c1ClPbx74Xz2HjoUEjaOnAJpd2kKe4UAzomNVl7HCjH0hPQ8Bm0p9Qv&X-Amz-Signature=f946bd2939a378330d45a80cabc8c9d13b749b5617b2f4fdf0b3db4c80e3ec98&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU2RDTOA%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDn69lMYKNxTpXb%2Fr5g7%2BCHhkKbbM1kuZX1dqN8pyCp3wIgYhjAxaALyYsJOQqq%2BcCDjEEpaB2Yxoyr0%2BC7rfcndrkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiDhkUEztyKTfgI2SrcAyBKmF%2FlWMEikRcPLYhdNlw91QHqDt8uHB8wJk0CK4MMR7HJmu7eEUW1molaHr6U0F1atA%2FH6d%2BU26V%2FXUGrdvwkijWdHl0xRWnvC900mwHNEHIuHqRARN5hQB3KCLrUx2t9gD%2Fwsvc3ekgN0Q%2Bo3pZnuHt%2B7pIhJbEZMoVHVUIMqs%2FX3EvekYGw6Inl8uazZCB1nJs3OTNeo%2BTqE6mxUAmddCtRbRkSxZUY%2Fk%2F%2F4vkE99oOaSfc1J5st6JOxDOtI2q0zRLEl8Zrc0IZNilfgDRPTUrtaHInjRanY61eNYkjfWtq6eUeN8NHJiminl7dc2ngRssGSunSr%2BOnmR1bmUqO7ZSUh6Yi9l%2FJo0ZNM3QjOxCUZsQhRKReHAeUJQWVMo7oSPqqwjC2EfWcIqmc4l96Qgj1xPa7iPvX%2F1e66SusA1NkYiONetUazH3lxn2MlWXlYjJ85oVhDa2lKGDd65Yg06GuRkf7wHIOVJsh3nZBy3N%2F35uWWS1v02DSQ%2Fnb0x4eBvrsjQnnvzrWDorun16COdIY69ivmk8l0OvM0sBIbRGTMmAJyzCM4TBi2PfVhSF56fq7KJz%2B7Mi03QorrSm3ahF8prusH%2BsVPtpNVVZ56MNqeoc0vxlaBRYOMMGN6L8GOqUBra1sxSRk5G98yJjaIr1g6ADkUi9wb5YpjZgQp84igoZZaatkUUGwt3DERH6PoF%2F9rYBXGGgkNSLBkA1AsU7MgNQSDRM3OA%2BmwGmsOjxGvHPSou3K3bLzxDzUKmDAeZ0ocy1w11mc07%2FDTbabyUaQ%2Fqs%2BMznns1kfEtsg8c1ClPbx74Xz2HjoUEjaOnAJpd2kKe4UAzomNVl7HCjH0hPQ8Bm0p9Qv&X-Amz-Signature=776feeb5f8679cda41374dc4e6a0d5a41f839a687fa4268ca1c66ced28978296&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU2RDTOA%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDn69lMYKNxTpXb%2Fr5g7%2BCHhkKbbM1kuZX1dqN8pyCp3wIgYhjAxaALyYsJOQqq%2BcCDjEEpaB2Yxoyr0%2BC7rfcndrkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiDhkUEztyKTfgI2SrcAyBKmF%2FlWMEikRcPLYhdNlw91QHqDt8uHB8wJk0CK4MMR7HJmu7eEUW1molaHr6U0F1atA%2FH6d%2BU26V%2FXUGrdvwkijWdHl0xRWnvC900mwHNEHIuHqRARN5hQB3KCLrUx2t9gD%2Fwsvc3ekgN0Q%2Bo3pZnuHt%2B7pIhJbEZMoVHVUIMqs%2FX3EvekYGw6Inl8uazZCB1nJs3OTNeo%2BTqE6mxUAmddCtRbRkSxZUY%2Fk%2F%2F4vkE99oOaSfc1J5st6JOxDOtI2q0zRLEl8Zrc0IZNilfgDRPTUrtaHInjRanY61eNYkjfWtq6eUeN8NHJiminl7dc2ngRssGSunSr%2BOnmR1bmUqO7ZSUh6Yi9l%2FJo0ZNM3QjOxCUZsQhRKReHAeUJQWVMo7oSPqqwjC2EfWcIqmc4l96Qgj1xPa7iPvX%2F1e66SusA1NkYiONetUazH3lxn2MlWXlYjJ85oVhDa2lKGDd65Yg06GuRkf7wHIOVJsh3nZBy3N%2F35uWWS1v02DSQ%2Fnb0x4eBvrsjQnnvzrWDorun16COdIY69ivmk8l0OvM0sBIbRGTMmAJyzCM4TBi2PfVhSF56fq7KJz%2B7Mi03QorrSm3ahF8prusH%2BsVPtpNVVZ56MNqeoc0vxlaBRYOMMGN6L8GOqUBra1sxSRk5G98yJjaIr1g6ADkUi9wb5YpjZgQp84igoZZaatkUUGwt3DERH6PoF%2F9rYBXGGgkNSLBkA1AsU7MgNQSDRM3OA%2BmwGmsOjxGvHPSou3K3bLzxDzUKmDAeZ0ocy1w11mc07%2FDTbabyUaQ%2Fqs%2BMznns1kfEtsg8c1ClPbx74Xz2HjoUEjaOnAJpd2kKe4UAzomNVl7HCjH0hPQ8Bm0p9Qv&X-Amz-Signature=04e678627a9938235b306c3ebd9e2faca8e6993995106793e7426789e3750547&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU2RDTOA%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDn69lMYKNxTpXb%2Fr5g7%2BCHhkKbbM1kuZX1dqN8pyCp3wIgYhjAxaALyYsJOQqq%2BcCDjEEpaB2Yxoyr0%2BC7rfcndrkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiDhkUEztyKTfgI2SrcAyBKmF%2FlWMEikRcPLYhdNlw91QHqDt8uHB8wJk0CK4MMR7HJmu7eEUW1molaHr6U0F1atA%2FH6d%2BU26V%2FXUGrdvwkijWdHl0xRWnvC900mwHNEHIuHqRARN5hQB3KCLrUx2t9gD%2Fwsvc3ekgN0Q%2Bo3pZnuHt%2B7pIhJbEZMoVHVUIMqs%2FX3EvekYGw6Inl8uazZCB1nJs3OTNeo%2BTqE6mxUAmddCtRbRkSxZUY%2Fk%2F%2F4vkE99oOaSfc1J5st6JOxDOtI2q0zRLEl8Zrc0IZNilfgDRPTUrtaHInjRanY61eNYkjfWtq6eUeN8NHJiminl7dc2ngRssGSunSr%2BOnmR1bmUqO7ZSUh6Yi9l%2FJo0ZNM3QjOxCUZsQhRKReHAeUJQWVMo7oSPqqwjC2EfWcIqmc4l96Qgj1xPa7iPvX%2F1e66SusA1NkYiONetUazH3lxn2MlWXlYjJ85oVhDa2lKGDd65Yg06GuRkf7wHIOVJsh3nZBy3N%2F35uWWS1v02DSQ%2Fnb0x4eBvrsjQnnvzrWDorun16COdIY69ivmk8l0OvM0sBIbRGTMmAJyzCM4TBi2PfVhSF56fq7KJz%2B7Mi03QorrSm3ahF8prusH%2BsVPtpNVVZ56MNqeoc0vxlaBRYOMMGN6L8GOqUBra1sxSRk5G98yJjaIr1g6ADkUi9wb5YpjZgQp84igoZZaatkUUGwt3DERH6PoF%2F9rYBXGGgkNSLBkA1AsU7MgNQSDRM3OA%2BmwGmsOjxGvHPSou3K3bLzxDzUKmDAeZ0ocy1w11mc07%2FDTbabyUaQ%2Fqs%2BMznns1kfEtsg8c1ClPbx74Xz2HjoUEjaOnAJpd2kKe4UAzomNVl7HCjH0hPQ8Bm0p9Qv&X-Amz-Signature=9ebe3f20cec7da05e1e4e61dbe668b9df2276c406663acdc5ada778356d0ebcd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
