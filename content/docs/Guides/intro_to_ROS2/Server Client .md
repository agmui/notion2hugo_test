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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGKOZCIW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqi%2FpLPzqDnkOgarmDNVzPVJeH8LmzqdlIItX81L55wAiBorpBOpNs2wwG44XynviB4vL7zHA7MWBYqXz0YkTXaZiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd2mn1XZWbuXmIzZHKtwDwa6VQEAJ%2FhrNHKPWAJOTWMdxtMRez49f9oJG39AeRnR%2BTn%2BGtEaFjnJVdpbnYicpAD8R7tEb2Su9qFcGBAmPj%2BqeXzkCh47afZjEoVIyNK1P3E0hSsLbBbXqrPowAhjXDBxpz7bQJhd64hCjst4L6%2FQuo236ply5UvjHut%2FAKiiDKLM9Qdaw80GcpvCZkDs9NsblsEx8bHOXtrKy7Kgi%2BOUsoFnZ7KJxuk8TDty4URJbw%2BRtw%2FLZoVZwA20TiNBEb4gl2RWKgi%2FdojGW19zjyaPGwzirHFGKpXNnZC%2BekQ6ZpHbmw7z1SXddCIey3kHtn3qTu%2FbS7ru%2B7npYTzyMblLsmw00ERAZtIG0IL3eGn%2BhN%2FQz0EA%2BIbOJC5gx08K2k30l6Xy%2FfphhwXb7MjPcERQ8eSBOel0Qiq2vv3X9z3zboI15%2F0aT9c39z%2FhiJzbZGrMqFF09GCbU7ZIpjBqBZrjAa042sYP4urs7mn2UlUAsl1Sa4bfPpizrHu6ymlwhkwA9njf77KAsrG2HYWniTbrcRrJIGcFUPUgE6mHyUirY9qXZW%2F2h%2FGB48oYh%2FhPKopr6e1KKf1vX5YghB8f4GklFgsP6zIP24Sc0A94ix0DqsSTJSttfkXVBWdUw6IHjvQY6pgGtj7BW18%2F8TtHHIQRs7JuRSpFo6UAHDVX0oyW2RhxTaFXs%2BfgWEo%2Fxr8z87AoIkRxOzsXGE%2Fu0eygGaZMUD8x%2BLzZhx0UywaqZW%2FtzRWU%2FKgxcA%2FyNI%2Bl2rh%2BT7fPsQjy2qhuHlFISsQfxOUcak2w6eFzwbhIp6%2FCmx%2Fg8QWXUNhXRPOQJFZLepyZjeypCl2TFTYNx9FFujoP3IgeSivTYW7%2BJzALQ&X-Amz-Signature=3543fbf4f3fd0c1f7e36f87d04f732ac839cb706f728eebf40fb7ba7c127164c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGKOZCIW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqi%2FpLPzqDnkOgarmDNVzPVJeH8LmzqdlIItX81L55wAiBorpBOpNs2wwG44XynviB4vL7zHA7MWBYqXz0YkTXaZiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd2mn1XZWbuXmIzZHKtwDwa6VQEAJ%2FhrNHKPWAJOTWMdxtMRez49f9oJG39AeRnR%2BTn%2BGtEaFjnJVdpbnYicpAD8R7tEb2Su9qFcGBAmPj%2BqeXzkCh47afZjEoVIyNK1P3E0hSsLbBbXqrPowAhjXDBxpz7bQJhd64hCjst4L6%2FQuo236ply5UvjHut%2FAKiiDKLM9Qdaw80GcpvCZkDs9NsblsEx8bHOXtrKy7Kgi%2BOUsoFnZ7KJxuk8TDty4URJbw%2BRtw%2FLZoVZwA20TiNBEb4gl2RWKgi%2FdojGW19zjyaPGwzirHFGKpXNnZC%2BekQ6ZpHbmw7z1SXddCIey3kHtn3qTu%2FbS7ru%2B7npYTzyMblLsmw00ERAZtIG0IL3eGn%2BhN%2FQz0EA%2BIbOJC5gx08K2k30l6Xy%2FfphhwXb7MjPcERQ8eSBOel0Qiq2vv3X9z3zboI15%2F0aT9c39z%2FhiJzbZGrMqFF09GCbU7ZIpjBqBZrjAa042sYP4urs7mn2UlUAsl1Sa4bfPpizrHu6ymlwhkwA9njf77KAsrG2HYWniTbrcRrJIGcFUPUgE6mHyUirY9qXZW%2F2h%2FGB48oYh%2FhPKopr6e1KKf1vX5YghB8f4GklFgsP6zIP24Sc0A94ix0DqsSTJSttfkXVBWdUw6IHjvQY6pgGtj7BW18%2F8TtHHIQRs7JuRSpFo6UAHDVX0oyW2RhxTaFXs%2BfgWEo%2Fxr8z87AoIkRxOzsXGE%2Fu0eygGaZMUD8x%2BLzZhx0UywaqZW%2FtzRWU%2FKgxcA%2FyNI%2Bl2rh%2BT7fPsQjy2qhuHlFISsQfxOUcak2w6eFzwbhIp6%2FCmx%2Fg8QWXUNhXRPOQJFZLepyZjeypCl2TFTYNx9FFujoP3IgeSivTYW7%2BJzALQ&X-Amz-Signature=ff7d77e196f8eb92db891175a86a44d34af42c8636c3b36d3da3171cd77d90ca&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGKOZCIW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqi%2FpLPzqDnkOgarmDNVzPVJeH8LmzqdlIItX81L55wAiBorpBOpNs2wwG44XynviB4vL7zHA7MWBYqXz0YkTXaZiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd2mn1XZWbuXmIzZHKtwDwa6VQEAJ%2FhrNHKPWAJOTWMdxtMRez49f9oJG39AeRnR%2BTn%2BGtEaFjnJVdpbnYicpAD8R7tEb2Su9qFcGBAmPj%2BqeXzkCh47afZjEoVIyNK1P3E0hSsLbBbXqrPowAhjXDBxpz7bQJhd64hCjst4L6%2FQuo236ply5UvjHut%2FAKiiDKLM9Qdaw80GcpvCZkDs9NsblsEx8bHOXtrKy7Kgi%2BOUsoFnZ7KJxuk8TDty4URJbw%2BRtw%2FLZoVZwA20TiNBEb4gl2RWKgi%2FdojGW19zjyaPGwzirHFGKpXNnZC%2BekQ6ZpHbmw7z1SXddCIey3kHtn3qTu%2FbS7ru%2B7npYTzyMblLsmw00ERAZtIG0IL3eGn%2BhN%2FQz0EA%2BIbOJC5gx08K2k30l6Xy%2FfphhwXb7MjPcERQ8eSBOel0Qiq2vv3X9z3zboI15%2F0aT9c39z%2FhiJzbZGrMqFF09GCbU7ZIpjBqBZrjAa042sYP4urs7mn2UlUAsl1Sa4bfPpizrHu6ymlwhkwA9njf77KAsrG2HYWniTbrcRrJIGcFUPUgE6mHyUirY9qXZW%2F2h%2FGB48oYh%2FhPKopr6e1KKf1vX5YghB8f4GklFgsP6zIP24Sc0A94ix0DqsSTJSttfkXVBWdUw6IHjvQY6pgGtj7BW18%2F8TtHHIQRs7JuRSpFo6UAHDVX0oyW2RhxTaFXs%2BfgWEo%2Fxr8z87AoIkRxOzsXGE%2Fu0eygGaZMUD8x%2BLzZhx0UywaqZW%2FtzRWU%2FKgxcA%2FyNI%2Bl2rh%2BT7fPsQjy2qhuHlFISsQfxOUcak2w6eFzwbhIp6%2FCmx%2Fg8QWXUNhXRPOQJFZLepyZjeypCl2TFTYNx9FFujoP3IgeSivTYW7%2BJzALQ&X-Amz-Signature=49cace3563ee81b262fcfc85e98c9ea93d72726a079efb5ed64664f834030ec7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGKOZCIW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqi%2FpLPzqDnkOgarmDNVzPVJeH8LmzqdlIItX81L55wAiBorpBOpNs2wwG44XynviB4vL7zHA7MWBYqXz0YkTXaZiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd2mn1XZWbuXmIzZHKtwDwa6VQEAJ%2FhrNHKPWAJOTWMdxtMRez49f9oJG39AeRnR%2BTn%2BGtEaFjnJVdpbnYicpAD8R7tEb2Su9qFcGBAmPj%2BqeXzkCh47afZjEoVIyNK1P3E0hSsLbBbXqrPowAhjXDBxpz7bQJhd64hCjst4L6%2FQuo236ply5UvjHut%2FAKiiDKLM9Qdaw80GcpvCZkDs9NsblsEx8bHOXtrKy7Kgi%2BOUsoFnZ7KJxuk8TDty4URJbw%2BRtw%2FLZoVZwA20TiNBEb4gl2RWKgi%2FdojGW19zjyaPGwzirHFGKpXNnZC%2BekQ6ZpHbmw7z1SXddCIey3kHtn3qTu%2FbS7ru%2B7npYTzyMblLsmw00ERAZtIG0IL3eGn%2BhN%2FQz0EA%2BIbOJC5gx08K2k30l6Xy%2FfphhwXb7MjPcERQ8eSBOel0Qiq2vv3X9z3zboI15%2F0aT9c39z%2FhiJzbZGrMqFF09GCbU7ZIpjBqBZrjAa042sYP4urs7mn2UlUAsl1Sa4bfPpizrHu6ymlwhkwA9njf77KAsrG2HYWniTbrcRrJIGcFUPUgE6mHyUirY9qXZW%2F2h%2FGB48oYh%2FhPKopr6e1KKf1vX5YghB8f4GklFgsP6zIP24Sc0A94ix0DqsSTJSttfkXVBWdUw6IHjvQY6pgGtj7BW18%2F8TtHHIQRs7JuRSpFo6UAHDVX0oyW2RhxTaFXs%2BfgWEo%2Fxr8z87AoIkRxOzsXGE%2Fu0eygGaZMUD8x%2BLzZhx0UywaqZW%2FtzRWU%2FKgxcA%2FyNI%2Bl2rh%2BT7fPsQjy2qhuHlFISsQfxOUcak2w6eFzwbhIp6%2FCmx%2Fg8QWXUNhXRPOQJFZLepyZjeypCl2TFTYNx9FFujoP3IgeSivTYW7%2BJzALQ&X-Amz-Signature=0bc19d6a1a961af4140a5420391d16507d923c66906230177ec4ebfe7681fd62&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGKOZCIW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqi%2FpLPzqDnkOgarmDNVzPVJeH8LmzqdlIItX81L55wAiBorpBOpNs2wwG44XynviB4vL7zHA7MWBYqXz0YkTXaZiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd2mn1XZWbuXmIzZHKtwDwa6VQEAJ%2FhrNHKPWAJOTWMdxtMRez49f9oJG39AeRnR%2BTn%2BGtEaFjnJVdpbnYicpAD8R7tEb2Su9qFcGBAmPj%2BqeXzkCh47afZjEoVIyNK1P3E0hSsLbBbXqrPowAhjXDBxpz7bQJhd64hCjst4L6%2FQuo236ply5UvjHut%2FAKiiDKLM9Qdaw80GcpvCZkDs9NsblsEx8bHOXtrKy7Kgi%2BOUsoFnZ7KJxuk8TDty4URJbw%2BRtw%2FLZoVZwA20TiNBEb4gl2RWKgi%2FdojGW19zjyaPGwzirHFGKpXNnZC%2BekQ6ZpHbmw7z1SXddCIey3kHtn3qTu%2FbS7ru%2B7npYTzyMblLsmw00ERAZtIG0IL3eGn%2BhN%2FQz0EA%2BIbOJC5gx08K2k30l6Xy%2FfphhwXb7MjPcERQ8eSBOel0Qiq2vv3X9z3zboI15%2F0aT9c39z%2FhiJzbZGrMqFF09GCbU7ZIpjBqBZrjAa042sYP4urs7mn2UlUAsl1Sa4bfPpizrHu6ymlwhkwA9njf77KAsrG2HYWniTbrcRrJIGcFUPUgE6mHyUirY9qXZW%2F2h%2FGB48oYh%2FhPKopr6e1KKf1vX5YghB8f4GklFgsP6zIP24Sc0A94ix0DqsSTJSttfkXVBWdUw6IHjvQY6pgGtj7BW18%2F8TtHHIQRs7JuRSpFo6UAHDVX0oyW2RhxTaFXs%2BfgWEo%2Fxr8z87AoIkRxOzsXGE%2Fu0eygGaZMUD8x%2BLzZhx0UywaqZW%2FtzRWU%2FKgxcA%2FyNI%2Bl2rh%2BT7fPsQjy2qhuHlFISsQfxOUcak2w6eFzwbhIp6%2FCmx%2Fg8QWXUNhXRPOQJFZLepyZjeypCl2TFTYNx9FFujoP3IgeSivTYW7%2BJzALQ&X-Amz-Signature=2b62f1463bbcbebff03635c49b8cc5c9edb0700d84d21361acf85fdc398c9cf1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
