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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWGUVDM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRvRjAnN93fnDs08RY9LTRuaAvLDNBKV9OovGKtjIYsgIgOMit4fFIo5QJrMz8UZRtWG%2Be%2F%2B7wQqkImS9hTnARBBIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHnjS87KWLvTW3qzZircA3C7w58InHSDRUce5gTLRSQ%2BqZxxnGJyAtqadciWigqVyiHkGpSL8xcRncDZ4mvZ1Ju7WFBFsjxxzVpogpY4PVXU2UjtCgki2%2BUiIfjMZa7MkpwgnmcODXTZzPJqjT00g2ley2Q1iiXbSKHndDemfJ3UAC19MznhWufs31Lh8gzFUacf%2FYhj%2BPJOUrKjDrc8OsOfD0PNM9rWnIomQS5NiKoC1YlMJxezFvH03caMUd9wFpIj7fLuC51EMp%2BxBAEbeHrbmLTO%2B3cqGTXn5OfdtXGbxYBZWK38GivBMw4w55UkCOzJeBayPcCcKYUkXxAeXYbnsjRDPir8FQYVFPqPx26hPUMApGjAa0PNpdQIdxQ6%2FAHb4OAcNuzTCKa1MK%2F3qH9r3NPRK6T%2BCMVhFdtT1rApsYOYgohYsJ77HrfLBkyroXvDChaJkBQJFuc36CVvnkVvEmOa%2BbnWsgBjy2F9KLO3TkQgigJU%2BfIsWIx5lu2mbY1eM0MkNi5JaXjIYzerzZsWAKHzyLS%2Fyy64UGdTo%2B0Nj0M7yOSu1fVz3rWwwaPtnKcV8FYSPXE3w0QwPy9Ipy1FKMEbJ32dxRU2d91u%2F%2FVWINQmteOux0u%2Bfp69%2B2g416YBrPIeJ9iVWR2%2FMLaGp8EGOqUBRATd6FWlh%2BOHPNqns8JafYFsHx6fxWfxjpD4MjHrpW%2BDjCbeuJ41bSFYE%2BvPOfErhkAQTGiAYSJx1sxYk%2FIL920X0NvnI9rF2z0j7G%2B14fpch6tdGGBuUuuNqfxxUhRFjmEpwrATLBW7lmX%2BK%2BABCi5v5tpz5OwH7v1BYeUUXlhxHPyIZXvdfTvE4mTlJU%2B%2BHX0QZtF%2FIp0jlsUYm88ara8UhTWK&X-Amz-Signature=199575428a99db846e2e1280a167a0dc178c83660a22d67120781ed0e2564979&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWGUVDM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRvRjAnN93fnDs08RY9LTRuaAvLDNBKV9OovGKtjIYsgIgOMit4fFIo5QJrMz8UZRtWG%2Be%2F%2B7wQqkImS9hTnARBBIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHnjS87KWLvTW3qzZircA3C7w58InHSDRUce5gTLRSQ%2BqZxxnGJyAtqadciWigqVyiHkGpSL8xcRncDZ4mvZ1Ju7WFBFsjxxzVpogpY4PVXU2UjtCgki2%2BUiIfjMZa7MkpwgnmcODXTZzPJqjT00g2ley2Q1iiXbSKHndDemfJ3UAC19MznhWufs31Lh8gzFUacf%2FYhj%2BPJOUrKjDrc8OsOfD0PNM9rWnIomQS5NiKoC1YlMJxezFvH03caMUd9wFpIj7fLuC51EMp%2BxBAEbeHrbmLTO%2B3cqGTXn5OfdtXGbxYBZWK38GivBMw4w55UkCOzJeBayPcCcKYUkXxAeXYbnsjRDPir8FQYVFPqPx26hPUMApGjAa0PNpdQIdxQ6%2FAHb4OAcNuzTCKa1MK%2F3qH9r3NPRK6T%2BCMVhFdtT1rApsYOYgohYsJ77HrfLBkyroXvDChaJkBQJFuc36CVvnkVvEmOa%2BbnWsgBjy2F9KLO3TkQgigJU%2BfIsWIx5lu2mbY1eM0MkNi5JaXjIYzerzZsWAKHzyLS%2Fyy64UGdTo%2B0Nj0M7yOSu1fVz3rWwwaPtnKcV8FYSPXE3w0QwPy9Ipy1FKMEbJ32dxRU2d91u%2F%2FVWINQmteOux0u%2Bfp69%2B2g416YBrPIeJ9iVWR2%2FMLaGp8EGOqUBRATd6FWlh%2BOHPNqns8JafYFsHx6fxWfxjpD4MjHrpW%2BDjCbeuJ41bSFYE%2BvPOfErhkAQTGiAYSJx1sxYk%2FIL920X0NvnI9rF2z0j7G%2B14fpch6tdGGBuUuuNqfxxUhRFjmEpwrATLBW7lmX%2BK%2BABCi5v5tpz5OwH7v1BYeUUXlhxHPyIZXvdfTvE4mTlJU%2B%2BHX0QZtF%2FIp0jlsUYm88ara8UhTWK&X-Amz-Signature=29f76ab6f291d7a2a382d231de6b950a559c5e2501377e36f44e3036c548d734&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWGUVDM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRvRjAnN93fnDs08RY9LTRuaAvLDNBKV9OovGKtjIYsgIgOMit4fFIo5QJrMz8UZRtWG%2Be%2F%2B7wQqkImS9hTnARBBIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHnjS87KWLvTW3qzZircA3C7w58InHSDRUce5gTLRSQ%2BqZxxnGJyAtqadciWigqVyiHkGpSL8xcRncDZ4mvZ1Ju7WFBFsjxxzVpogpY4PVXU2UjtCgki2%2BUiIfjMZa7MkpwgnmcODXTZzPJqjT00g2ley2Q1iiXbSKHndDemfJ3UAC19MznhWufs31Lh8gzFUacf%2FYhj%2BPJOUrKjDrc8OsOfD0PNM9rWnIomQS5NiKoC1YlMJxezFvH03caMUd9wFpIj7fLuC51EMp%2BxBAEbeHrbmLTO%2B3cqGTXn5OfdtXGbxYBZWK38GivBMw4w55UkCOzJeBayPcCcKYUkXxAeXYbnsjRDPir8FQYVFPqPx26hPUMApGjAa0PNpdQIdxQ6%2FAHb4OAcNuzTCKa1MK%2F3qH9r3NPRK6T%2BCMVhFdtT1rApsYOYgohYsJ77HrfLBkyroXvDChaJkBQJFuc36CVvnkVvEmOa%2BbnWsgBjy2F9KLO3TkQgigJU%2BfIsWIx5lu2mbY1eM0MkNi5JaXjIYzerzZsWAKHzyLS%2Fyy64UGdTo%2B0Nj0M7yOSu1fVz3rWwwaPtnKcV8FYSPXE3w0QwPy9Ipy1FKMEbJ32dxRU2d91u%2F%2FVWINQmteOux0u%2Bfp69%2B2g416YBrPIeJ9iVWR2%2FMLaGp8EGOqUBRATd6FWlh%2BOHPNqns8JafYFsHx6fxWfxjpD4MjHrpW%2BDjCbeuJ41bSFYE%2BvPOfErhkAQTGiAYSJx1sxYk%2FIL920X0NvnI9rF2z0j7G%2B14fpch6tdGGBuUuuNqfxxUhRFjmEpwrATLBW7lmX%2BK%2BABCi5v5tpz5OwH7v1BYeUUXlhxHPyIZXvdfTvE4mTlJU%2B%2BHX0QZtF%2FIp0jlsUYm88ara8UhTWK&X-Amz-Signature=21f86be5cebb83bc95468c63b49070f6f6bb5d9b4496e60462fe1bba78a7dbe8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWGUVDM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRvRjAnN93fnDs08RY9LTRuaAvLDNBKV9OovGKtjIYsgIgOMit4fFIo5QJrMz8UZRtWG%2Be%2F%2B7wQqkImS9hTnARBBIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHnjS87KWLvTW3qzZircA3C7w58InHSDRUce5gTLRSQ%2BqZxxnGJyAtqadciWigqVyiHkGpSL8xcRncDZ4mvZ1Ju7WFBFsjxxzVpogpY4PVXU2UjtCgki2%2BUiIfjMZa7MkpwgnmcODXTZzPJqjT00g2ley2Q1iiXbSKHndDemfJ3UAC19MznhWufs31Lh8gzFUacf%2FYhj%2BPJOUrKjDrc8OsOfD0PNM9rWnIomQS5NiKoC1YlMJxezFvH03caMUd9wFpIj7fLuC51EMp%2BxBAEbeHrbmLTO%2B3cqGTXn5OfdtXGbxYBZWK38GivBMw4w55UkCOzJeBayPcCcKYUkXxAeXYbnsjRDPir8FQYVFPqPx26hPUMApGjAa0PNpdQIdxQ6%2FAHb4OAcNuzTCKa1MK%2F3qH9r3NPRK6T%2BCMVhFdtT1rApsYOYgohYsJ77HrfLBkyroXvDChaJkBQJFuc36CVvnkVvEmOa%2BbnWsgBjy2F9KLO3TkQgigJU%2BfIsWIx5lu2mbY1eM0MkNi5JaXjIYzerzZsWAKHzyLS%2Fyy64UGdTo%2B0Nj0M7yOSu1fVz3rWwwaPtnKcV8FYSPXE3w0QwPy9Ipy1FKMEbJ32dxRU2d91u%2F%2FVWINQmteOux0u%2Bfp69%2B2g416YBrPIeJ9iVWR2%2FMLaGp8EGOqUBRATd6FWlh%2BOHPNqns8JafYFsHx6fxWfxjpD4MjHrpW%2BDjCbeuJ41bSFYE%2BvPOfErhkAQTGiAYSJx1sxYk%2FIL920X0NvnI9rF2z0j7G%2B14fpch6tdGGBuUuuNqfxxUhRFjmEpwrATLBW7lmX%2BK%2BABCi5v5tpz5OwH7v1BYeUUXlhxHPyIZXvdfTvE4mTlJU%2B%2BHX0QZtF%2FIp0jlsUYm88ara8UhTWK&X-Amz-Signature=64526d048d1ffd17f4490dfe90a908908cbd6dec4bb714a03fe5e8d29c4dcac1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWGUVDM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRvRjAnN93fnDs08RY9LTRuaAvLDNBKV9OovGKtjIYsgIgOMit4fFIo5QJrMz8UZRtWG%2Be%2F%2B7wQqkImS9hTnARBBIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHnjS87KWLvTW3qzZircA3C7w58InHSDRUce5gTLRSQ%2BqZxxnGJyAtqadciWigqVyiHkGpSL8xcRncDZ4mvZ1Ju7WFBFsjxxzVpogpY4PVXU2UjtCgki2%2BUiIfjMZa7MkpwgnmcODXTZzPJqjT00g2ley2Q1iiXbSKHndDemfJ3UAC19MznhWufs31Lh8gzFUacf%2FYhj%2BPJOUrKjDrc8OsOfD0PNM9rWnIomQS5NiKoC1YlMJxezFvH03caMUd9wFpIj7fLuC51EMp%2BxBAEbeHrbmLTO%2B3cqGTXn5OfdtXGbxYBZWK38GivBMw4w55UkCOzJeBayPcCcKYUkXxAeXYbnsjRDPir8FQYVFPqPx26hPUMApGjAa0PNpdQIdxQ6%2FAHb4OAcNuzTCKa1MK%2F3qH9r3NPRK6T%2BCMVhFdtT1rApsYOYgohYsJ77HrfLBkyroXvDChaJkBQJFuc36CVvnkVvEmOa%2BbnWsgBjy2F9KLO3TkQgigJU%2BfIsWIx5lu2mbY1eM0MkNi5JaXjIYzerzZsWAKHzyLS%2Fyy64UGdTo%2B0Nj0M7yOSu1fVz3rWwwaPtnKcV8FYSPXE3w0QwPy9Ipy1FKMEbJ32dxRU2d91u%2F%2FVWINQmteOux0u%2Bfp69%2B2g416YBrPIeJ9iVWR2%2FMLaGp8EGOqUBRATd6FWlh%2BOHPNqns8JafYFsHx6fxWfxjpD4MjHrpW%2BDjCbeuJ41bSFYE%2BvPOfErhkAQTGiAYSJx1sxYk%2FIL920X0NvnI9rF2z0j7G%2B14fpch6tdGGBuUuuNqfxxUhRFjmEpwrATLBW7lmX%2BK%2BABCi5v5tpz5OwH7v1BYeUUXlhxHPyIZXvdfTvE4mTlJU%2B%2BHX0QZtF%2FIp0jlsUYm88ara8UhTWK&X-Amz-Signature=bcd3f72f67c9446f1f105e57e7589f6a58e13c44d4066881ba30dd39e8e8e7ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
