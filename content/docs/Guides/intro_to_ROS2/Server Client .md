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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466346AQ7BT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCgBKo%2BhUhpqPl0LxlFZjjFYYwGrpnXxkvaUrUUY1dVYQIgL3p85X89RpwI%2Fwp9%2Bif%2BnZgiFycZS7sFltIgrHTx0uoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDD0XBnU6%2Fbq2n%2FgBYyrcAwrFFkRSsmwpaX7iq%2BuMoUqKm0LqqF1qAB9FVWfH4BM81yTSkUZ2cxxWmOvE%2BdTGjt1376BCLGpUFv6hSA%2FfLkbWrMLPQTaIFEcY2PQtkPoyEBNaBez9DBOz%2BUDDEt6NTbBejzgBt0UJ3%2FBjQOBMlhu4%2FFZ3%2F1G2cX27A7g3tRe2oP8LhO9%2BWetK8E9wF6mvpRaE8%2F7PYUbq2YgZoVKC9EbpuZ2msnsOJqesV8Wp3MzMKieYAaf%2Bg%2FQBcAdWfvguM9mWj2XuJdlnnStEOTp86IuwlWCmw6Ktp2Nr%2F%2FEwPUJQ6LHR43ExU8E8RSZCFMBTvtaczK37qVZO5%2FRnjUEuLKrEVTaUE9EgfxaG7mzJ%2FBJQvgIsie2msRgI5W8%2BV%2FhLkycgEsILTi0F3FqTRibmNoS8NX%2FNZQtFdpQjCjh%2B8Pyd2iCmcTGEHyJZVDZGVLDk%2BD5dFJlHojWv5dh7DKYkihwpaGDZtEg%2B8TKfWZshvCJxfOgMUvpy3XQcfYIuF9czslA4hNpO%2BN7IJNJ9qn8E1FpZ1SVw%2BMqKESVqBhkaPNEJYkIY0VPPQoGxsGXoykGr8pExw%2BclkMWI0IIzTUhckOEet%2FTuz%2B5F4luQbc2JYG8plpDCoYdQqU6PFz51MOnnoMMGOqUBv4nTJB16Gr8l9NeLy4MZyerc9n5YjZ%2F7Izp6vUaUlrAyEa%2BNdZKFZ9nWVkI1xxYU%2Fn4tMMC8Uk%2BgzqekgAVOl9CXzcuXNuPI9HBacPRzt0nqOGIWFWqv7WgHK1TrizfNakl%2FgUlLqscVgjci08AhBZImnPUmDY2M4F%2F5%2Bm0SplipjZRxSQXhgUsLoJdx5V9qi%2BXU2o15NDn7y6vPrIJZIGsTnJBE&X-Amz-Signature=6421a90277262c3fb798748ae09d063a0411fbcad00cfed9a894401e7b2d5aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466346AQ7BT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCgBKo%2BhUhpqPl0LxlFZjjFYYwGrpnXxkvaUrUUY1dVYQIgL3p85X89RpwI%2Fwp9%2Bif%2BnZgiFycZS7sFltIgrHTx0uoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDD0XBnU6%2Fbq2n%2FgBYyrcAwrFFkRSsmwpaX7iq%2BuMoUqKm0LqqF1qAB9FVWfH4BM81yTSkUZ2cxxWmOvE%2BdTGjt1376BCLGpUFv6hSA%2FfLkbWrMLPQTaIFEcY2PQtkPoyEBNaBez9DBOz%2BUDDEt6NTbBejzgBt0UJ3%2FBjQOBMlhu4%2FFZ3%2F1G2cX27A7g3tRe2oP8LhO9%2BWetK8E9wF6mvpRaE8%2F7PYUbq2YgZoVKC9EbpuZ2msnsOJqesV8Wp3MzMKieYAaf%2Bg%2FQBcAdWfvguM9mWj2XuJdlnnStEOTp86IuwlWCmw6Ktp2Nr%2F%2FEwPUJQ6LHR43ExU8E8RSZCFMBTvtaczK37qVZO5%2FRnjUEuLKrEVTaUE9EgfxaG7mzJ%2FBJQvgIsie2msRgI5W8%2BV%2FhLkycgEsILTi0F3FqTRibmNoS8NX%2FNZQtFdpQjCjh%2B8Pyd2iCmcTGEHyJZVDZGVLDk%2BD5dFJlHojWv5dh7DKYkihwpaGDZtEg%2B8TKfWZshvCJxfOgMUvpy3XQcfYIuF9czslA4hNpO%2BN7IJNJ9qn8E1FpZ1SVw%2BMqKESVqBhkaPNEJYkIY0VPPQoGxsGXoykGr8pExw%2BclkMWI0IIzTUhckOEet%2FTuz%2B5F4luQbc2JYG8plpDCoYdQqU6PFz51MOnnoMMGOqUBv4nTJB16Gr8l9NeLy4MZyerc9n5YjZ%2F7Izp6vUaUlrAyEa%2BNdZKFZ9nWVkI1xxYU%2Fn4tMMC8Uk%2BgzqekgAVOl9CXzcuXNuPI9HBacPRzt0nqOGIWFWqv7WgHK1TrizfNakl%2FgUlLqscVgjci08AhBZImnPUmDY2M4F%2F5%2Bm0SplipjZRxSQXhgUsLoJdx5V9qi%2BXU2o15NDn7y6vPrIJZIGsTnJBE&X-Amz-Signature=7c8ab6769c908e858edf8bec43f6ea848e84b0f12bee6d8a84721800940b23bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466346AQ7BT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCgBKo%2BhUhpqPl0LxlFZjjFYYwGrpnXxkvaUrUUY1dVYQIgL3p85X89RpwI%2Fwp9%2Bif%2BnZgiFycZS7sFltIgrHTx0uoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDD0XBnU6%2Fbq2n%2FgBYyrcAwrFFkRSsmwpaX7iq%2BuMoUqKm0LqqF1qAB9FVWfH4BM81yTSkUZ2cxxWmOvE%2BdTGjt1376BCLGpUFv6hSA%2FfLkbWrMLPQTaIFEcY2PQtkPoyEBNaBez9DBOz%2BUDDEt6NTbBejzgBt0UJ3%2FBjQOBMlhu4%2FFZ3%2F1G2cX27A7g3tRe2oP8LhO9%2BWetK8E9wF6mvpRaE8%2F7PYUbq2YgZoVKC9EbpuZ2msnsOJqesV8Wp3MzMKieYAaf%2Bg%2FQBcAdWfvguM9mWj2XuJdlnnStEOTp86IuwlWCmw6Ktp2Nr%2F%2FEwPUJQ6LHR43ExU8E8RSZCFMBTvtaczK37qVZO5%2FRnjUEuLKrEVTaUE9EgfxaG7mzJ%2FBJQvgIsie2msRgI5W8%2BV%2FhLkycgEsILTi0F3FqTRibmNoS8NX%2FNZQtFdpQjCjh%2B8Pyd2iCmcTGEHyJZVDZGVLDk%2BD5dFJlHojWv5dh7DKYkihwpaGDZtEg%2B8TKfWZshvCJxfOgMUvpy3XQcfYIuF9czslA4hNpO%2BN7IJNJ9qn8E1FpZ1SVw%2BMqKESVqBhkaPNEJYkIY0VPPQoGxsGXoykGr8pExw%2BclkMWI0IIzTUhckOEet%2FTuz%2B5F4luQbc2JYG8plpDCoYdQqU6PFz51MOnnoMMGOqUBv4nTJB16Gr8l9NeLy4MZyerc9n5YjZ%2F7Izp6vUaUlrAyEa%2BNdZKFZ9nWVkI1xxYU%2Fn4tMMC8Uk%2BgzqekgAVOl9CXzcuXNuPI9HBacPRzt0nqOGIWFWqv7WgHK1TrizfNakl%2FgUlLqscVgjci08AhBZImnPUmDY2M4F%2F5%2Bm0SplipjZRxSQXhgUsLoJdx5V9qi%2BXU2o15NDn7y6vPrIJZIGsTnJBE&X-Amz-Signature=957b84d21ecbfddd97da0058e5778923a0c0b2d6e2c66c611259dce5d8492f15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466346AQ7BT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCgBKo%2BhUhpqPl0LxlFZjjFYYwGrpnXxkvaUrUUY1dVYQIgL3p85X89RpwI%2Fwp9%2Bif%2BnZgiFycZS7sFltIgrHTx0uoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDD0XBnU6%2Fbq2n%2FgBYyrcAwrFFkRSsmwpaX7iq%2BuMoUqKm0LqqF1qAB9FVWfH4BM81yTSkUZ2cxxWmOvE%2BdTGjt1376BCLGpUFv6hSA%2FfLkbWrMLPQTaIFEcY2PQtkPoyEBNaBez9DBOz%2BUDDEt6NTbBejzgBt0UJ3%2FBjQOBMlhu4%2FFZ3%2F1G2cX27A7g3tRe2oP8LhO9%2BWetK8E9wF6mvpRaE8%2F7PYUbq2YgZoVKC9EbpuZ2msnsOJqesV8Wp3MzMKieYAaf%2Bg%2FQBcAdWfvguM9mWj2XuJdlnnStEOTp86IuwlWCmw6Ktp2Nr%2F%2FEwPUJQ6LHR43ExU8E8RSZCFMBTvtaczK37qVZO5%2FRnjUEuLKrEVTaUE9EgfxaG7mzJ%2FBJQvgIsie2msRgI5W8%2BV%2FhLkycgEsILTi0F3FqTRibmNoS8NX%2FNZQtFdpQjCjh%2B8Pyd2iCmcTGEHyJZVDZGVLDk%2BD5dFJlHojWv5dh7DKYkihwpaGDZtEg%2B8TKfWZshvCJxfOgMUvpy3XQcfYIuF9czslA4hNpO%2BN7IJNJ9qn8E1FpZ1SVw%2BMqKESVqBhkaPNEJYkIY0VPPQoGxsGXoykGr8pExw%2BclkMWI0IIzTUhckOEet%2FTuz%2B5F4luQbc2JYG8plpDCoYdQqU6PFz51MOnnoMMGOqUBv4nTJB16Gr8l9NeLy4MZyerc9n5YjZ%2F7Izp6vUaUlrAyEa%2BNdZKFZ9nWVkI1xxYU%2Fn4tMMC8Uk%2BgzqekgAVOl9CXzcuXNuPI9HBacPRzt0nqOGIWFWqv7WgHK1TrizfNakl%2FgUlLqscVgjci08AhBZImnPUmDY2M4F%2F5%2Bm0SplipjZRxSQXhgUsLoJdx5V9qi%2BXU2o15NDn7y6vPrIJZIGsTnJBE&X-Amz-Signature=a932ad800d9a5615afb1e55b1579c2a330d4e2afea206f12629ad82d09f9ec7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466346AQ7BT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCgBKo%2BhUhpqPl0LxlFZjjFYYwGrpnXxkvaUrUUY1dVYQIgL3p85X89RpwI%2Fwp9%2Bif%2BnZgiFycZS7sFltIgrHTx0uoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDD0XBnU6%2Fbq2n%2FgBYyrcAwrFFkRSsmwpaX7iq%2BuMoUqKm0LqqF1qAB9FVWfH4BM81yTSkUZ2cxxWmOvE%2BdTGjt1376BCLGpUFv6hSA%2FfLkbWrMLPQTaIFEcY2PQtkPoyEBNaBez9DBOz%2BUDDEt6NTbBejzgBt0UJ3%2FBjQOBMlhu4%2FFZ3%2F1G2cX27A7g3tRe2oP8LhO9%2BWetK8E9wF6mvpRaE8%2F7PYUbq2YgZoVKC9EbpuZ2msnsOJqesV8Wp3MzMKieYAaf%2Bg%2FQBcAdWfvguM9mWj2XuJdlnnStEOTp86IuwlWCmw6Ktp2Nr%2F%2FEwPUJQ6LHR43ExU8E8RSZCFMBTvtaczK37qVZO5%2FRnjUEuLKrEVTaUE9EgfxaG7mzJ%2FBJQvgIsie2msRgI5W8%2BV%2FhLkycgEsILTi0F3FqTRibmNoS8NX%2FNZQtFdpQjCjh%2B8Pyd2iCmcTGEHyJZVDZGVLDk%2BD5dFJlHojWv5dh7DKYkihwpaGDZtEg%2B8TKfWZshvCJxfOgMUvpy3XQcfYIuF9czslA4hNpO%2BN7IJNJ9qn8E1FpZ1SVw%2BMqKESVqBhkaPNEJYkIY0VPPQoGxsGXoykGr8pExw%2BclkMWI0IIzTUhckOEet%2FTuz%2B5F4luQbc2JYG8plpDCoYdQqU6PFz51MOnnoMMGOqUBv4nTJB16Gr8l9NeLy4MZyerc9n5YjZ%2F7Izp6vUaUlrAyEa%2BNdZKFZ9nWVkI1xxYU%2Fn4tMMC8Uk%2BgzqekgAVOl9CXzcuXNuPI9HBacPRzt0nqOGIWFWqv7WgHK1TrizfNakl%2FgUlLqscVgjci08AhBZImnPUmDY2M4F%2F5%2Bm0SplipjZRxSQXhgUsLoJdx5V9qi%2BXU2o15NDn7y6vPrIJZIGsTnJBE&X-Amz-Signature=cf198e687522287eebfb82f96f3fb8056752cad2941d3dc69d3c7294df8fb461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
