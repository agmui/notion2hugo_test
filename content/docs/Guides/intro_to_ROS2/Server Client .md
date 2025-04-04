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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623AYI56Y%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7gLLbY1fLq9DEQKZIJHsM3pDHIzSmikdDjoJTCsBtiwIgJbevldESRn0KKXZi6Zr68ynbetRaE%2BhdPFgWuRj%2FJMoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDM30au8zmwFYjO5HwyrcA1uCgqfQFMu2WYittpgj9GQBl9smy7RIOQ8Ea98M2DyVrgLVih5TEteq5XOi%2BvIPLn%2F0Dr4580CfxHJFkY%2BCd87TNH1DhtuaDO3n7zW9EJ04%2F7OwcsDGa5ugel4uKsNDXLnD4NAwpN7Yhqdy7uatBz5GmsIGGekGhZwWUIGDAQ3pplG%2F4lZE%2BPdcrb4zp0ASxXqFmvT0khLFQad%2BetnGLlBNUOLoM%2FL5TyaHKzlki2YGlRbD3fl2ffk5BYmQAWy60zoqdPBrDuiz9OnMyRbU54NknFe1rFHaIfdqt6S8nM8zjs1RdS2CpITUN%2F8JSx83i1L13zzupb58JVVpfSSTnKT7P4OLZVnFIMJRMxxMoDLUwjj%2FT7VL0N%2F5kg%2FS1o4Y5%2BYW%2FIk2r%2BQpzJvwXmj8uCBM1Sec3vxaxP2aswSKl9AFJs9wOaRsDjhtv0l7GXOnj%2BG7R%2FMgsT%2BYO2XT5Q%2BPDHT9EQ1PTjgk9oI1Z9Nz89LB3WEpab2YY5k1KAAHTBrvLYFre1ijYxC8pY%2FlWZW6oZQrgnJJtzrq5wDobWHGvlboE0j958rnjzGJiJ%2B0%2BiRwwx5eEYpYI6xlpO6tltroRlN7qWaXtKsmcRMMAAAFXuGjDjo8m6r97GzF9BBrMPTMv78GOqUB5oVDt%2FkixNGPhEhakorYIbwu06Fugk71FK7csEB6RzyFrBTudIBKYkq%2F2HG8d3r52Kw13ZY52Jh3SLdzZqvAL%2FZ%2FJqWRwiFMz6c%2BBfb8EC3XZ1LskWPmcyIrAvwxfGzs5231MdPAogiWNX5AHE%2BQsjEoaJNtSRJFeiT1f3O1%2BgfkcmiQMAogyk7MKS%2B2UQ6NCEVmLDVA2ywlKHsFJ9WibX5F6QH4&X-Amz-Signature=21bea68a47c57de24a610feb3b8d05dbc0b235b631b9df852e73f06b883b43c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623AYI56Y%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7gLLbY1fLq9DEQKZIJHsM3pDHIzSmikdDjoJTCsBtiwIgJbevldESRn0KKXZi6Zr68ynbetRaE%2BhdPFgWuRj%2FJMoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDM30au8zmwFYjO5HwyrcA1uCgqfQFMu2WYittpgj9GQBl9smy7RIOQ8Ea98M2DyVrgLVih5TEteq5XOi%2BvIPLn%2F0Dr4580CfxHJFkY%2BCd87TNH1DhtuaDO3n7zW9EJ04%2F7OwcsDGa5ugel4uKsNDXLnD4NAwpN7Yhqdy7uatBz5GmsIGGekGhZwWUIGDAQ3pplG%2F4lZE%2BPdcrb4zp0ASxXqFmvT0khLFQad%2BetnGLlBNUOLoM%2FL5TyaHKzlki2YGlRbD3fl2ffk5BYmQAWy60zoqdPBrDuiz9OnMyRbU54NknFe1rFHaIfdqt6S8nM8zjs1RdS2CpITUN%2F8JSx83i1L13zzupb58JVVpfSSTnKT7P4OLZVnFIMJRMxxMoDLUwjj%2FT7VL0N%2F5kg%2FS1o4Y5%2BYW%2FIk2r%2BQpzJvwXmj8uCBM1Sec3vxaxP2aswSKl9AFJs9wOaRsDjhtv0l7GXOnj%2BG7R%2FMgsT%2BYO2XT5Q%2BPDHT9EQ1PTjgk9oI1Z9Nz89LB3WEpab2YY5k1KAAHTBrvLYFre1ijYxC8pY%2FlWZW6oZQrgnJJtzrq5wDobWHGvlboE0j958rnjzGJiJ%2B0%2BiRwwx5eEYpYI6xlpO6tltroRlN7qWaXtKsmcRMMAAAFXuGjDjo8m6r97GzF9BBrMPTMv78GOqUB5oVDt%2FkixNGPhEhakorYIbwu06Fugk71FK7csEB6RzyFrBTudIBKYkq%2F2HG8d3r52Kw13ZY52Jh3SLdzZqvAL%2FZ%2FJqWRwiFMz6c%2BBfb8EC3XZ1LskWPmcyIrAvwxfGzs5231MdPAogiWNX5AHE%2BQsjEoaJNtSRJFeiT1f3O1%2BgfkcmiQMAogyk7MKS%2B2UQ6NCEVmLDVA2ywlKHsFJ9WibX5F6QH4&X-Amz-Signature=a607554ba2c5d7adf058af72cd8c3a8804916e74565053f2f238615d339c5e8d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623AYI56Y%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7gLLbY1fLq9DEQKZIJHsM3pDHIzSmikdDjoJTCsBtiwIgJbevldESRn0KKXZi6Zr68ynbetRaE%2BhdPFgWuRj%2FJMoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDM30au8zmwFYjO5HwyrcA1uCgqfQFMu2WYittpgj9GQBl9smy7RIOQ8Ea98M2DyVrgLVih5TEteq5XOi%2BvIPLn%2F0Dr4580CfxHJFkY%2BCd87TNH1DhtuaDO3n7zW9EJ04%2F7OwcsDGa5ugel4uKsNDXLnD4NAwpN7Yhqdy7uatBz5GmsIGGekGhZwWUIGDAQ3pplG%2F4lZE%2BPdcrb4zp0ASxXqFmvT0khLFQad%2BetnGLlBNUOLoM%2FL5TyaHKzlki2YGlRbD3fl2ffk5BYmQAWy60zoqdPBrDuiz9OnMyRbU54NknFe1rFHaIfdqt6S8nM8zjs1RdS2CpITUN%2F8JSx83i1L13zzupb58JVVpfSSTnKT7P4OLZVnFIMJRMxxMoDLUwjj%2FT7VL0N%2F5kg%2FS1o4Y5%2BYW%2FIk2r%2BQpzJvwXmj8uCBM1Sec3vxaxP2aswSKl9AFJs9wOaRsDjhtv0l7GXOnj%2BG7R%2FMgsT%2BYO2XT5Q%2BPDHT9EQ1PTjgk9oI1Z9Nz89LB3WEpab2YY5k1KAAHTBrvLYFre1ijYxC8pY%2FlWZW6oZQrgnJJtzrq5wDobWHGvlboE0j958rnjzGJiJ%2B0%2BiRwwx5eEYpYI6xlpO6tltroRlN7qWaXtKsmcRMMAAAFXuGjDjo8m6r97GzF9BBrMPTMv78GOqUB5oVDt%2FkixNGPhEhakorYIbwu06Fugk71FK7csEB6RzyFrBTudIBKYkq%2F2HG8d3r52Kw13ZY52Jh3SLdzZqvAL%2FZ%2FJqWRwiFMz6c%2BBfb8EC3XZ1LskWPmcyIrAvwxfGzs5231MdPAogiWNX5AHE%2BQsjEoaJNtSRJFeiT1f3O1%2BgfkcmiQMAogyk7MKS%2B2UQ6NCEVmLDVA2ywlKHsFJ9WibX5F6QH4&X-Amz-Signature=4ed92783da17ececd80a40c8680dcd277dc539cf047d655e5d131fe6984f2650&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623AYI56Y%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7gLLbY1fLq9DEQKZIJHsM3pDHIzSmikdDjoJTCsBtiwIgJbevldESRn0KKXZi6Zr68ynbetRaE%2BhdPFgWuRj%2FJMoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDM30au8zmwFYjO5HwyrcA1uCgqfQFMu2WYittpgj9GQBl9smy7RIOQ8Ea98M2DyVrgLVih5TEteq5XOi%2BvIPLn%2F0Dr4580CfxHJFkY%2BCd87TNH1DhtuaDO3n7zW9EJ04%2F7OwcsDGa5ugel4uKsNDXLnD4NAwpN7Yhqdy7uatBz5GmsIGGekGhZwWUIGDAQ3pplG%2F4lZE%2BPdcrb4zp0ASxXqFmvT0khLFQad%2BetnGLlBNUOLoM%2FL5TyaHKzlki2YGlRbD3fl2ffk5BYmQAWy60zoqdPBrDuiz9OnMyRbU54NknFe1rFHaIfdqt6S8nM8zjs1RdS2CpITUN%2F8JSx83i1L13zzupb58JVVpfSSTnKT7P4OLZVnFIMJRMxxMoDLUwjj%2FT7VL0N%2F5kg%2FS1o4Y5%2BYW%2FIk2r%2BQpzJvwXmj8uCBM1Sec3vxaxP2aswSKl9AFJs9wOaRsDjhtv0l7GXOnj%2BG7R%2FMgsT%2BYO2XT5Q%2BPDHT9EQ1PTjgk9oI1Z9Nz89LB3WEpab2YY5k1KAAHTBrvLYFre1ijYxC8pY%2FlWZW6oZQrgnJJtzrq5wDobWHGvlboE0j958rnjzGJiJ%2B0%2BiRwwx5eEYpYI6xlpO6tltroRlN7qWaXtKsmcRMMAAAFXuGjDjo8m6r97GzF9BBrMPTMv78GOqUB5oVDt%2FkixNGPhEhakorYIbwu06Fugk71FK7csEB6RzyFrBTudIBKYkq%2F2HG8d3r52Kw13ZY52Jh3SLdzZqvAL%2FZ%2FJqWRwiFMz6c%2BBfb8EC3XZ1LskWPmcyIrAvwxfGzs5231MdPAogiWNX5AHE%2BQsjEoaJNtSRJFeiT1f3O1%2BgfkcmiQMAogyk7MKS%2B2UQ6NCEVmLDVA2ywlKHsFJ9WibX5F6QH4&X-Amz-Signature=872dc50a102a2010b24a0774deb32cf1a45646c42b3d3fab178184f58050b560&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623AYI56Y%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7gLLbY1fLq9DEQKZIJHsM3pDHIzSmikdDjoJTCsBtiwIgJbevldESRn0KKXZi6Zr68ynbetRaE%2BhdPFgWuRj%2FJMoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDM30au8zmwFYjO5HwyrcA1uCgqfQFMu2WYittpgj9GQBl9smy7RIOQ8Ea98M2DyVrgLVih5TEteq5XOi%2BvIPLn%2F0Dr4580CfxHJFkY%2BCd87TNH1DhtuaDO3n7zW9EJ04%2F7OwcsDGa5ugel4uKsNDXLnD4NAwpN7Yhqdy7uatBz5GmsIGGekGhZwWUIGDAQ3pplG%2F4lZE%2BPdcrb4zp0ASxXqFmvT0khLFQad%2BetnGLlBNUOLoM%2FL5TyaHKzlki2YGlRbD3fl2ffk5BYmQAWy60zoqdPBrDuiz9OnMyRbU54NknFe1rFHaIfdqt6S8nM8zjs1RdS2CpITUN%2F8JSx83i1L13zzupb58JVVpfSSTnKT7P4OLZVnFIMJRMxxMoDLUwjj%2FT7VL0N%2F5kg%2FS1o4Y5%2BYW%2FIk2r%2BQpzJvwXmj8uCBM1Sec3vxaxP2aswSKl9AFJs9wOaRsDjhtv0l7GXOnj%2BG7R%2FMgsT%2BYO2XT5Q%2BPDHT9EQ1PTjgk9oI1Z9Nz89LB3WEpab2YY5k1KAAHTBrvLYFre1ijYxC8pY%2FlWZW6oZQrgnJJtzrq5wDobWHGvlboE0j958rnjzGJiJ%2B0%2BiRwwx5eEYpYI6xlpO6tltroRlN7qWaXtKsmcRMMAAAFXuGjDjo8m6r97GzF9BBrMPTMv78GOqUB5oVDt%2FkixNGPhEhakorYIbwu06Fugk71FK7csEB6RzyFrBTudIBKYkq%2F2HG8d3r52Kw13ZY52Jh3SLdzZqvAL%2FZ%2FJqWRwiFMz6c%2BBfb8EC3XZ1LskWPmcyIrAvwxfGzs5231MdPAogiWNX5AHE%2BQsjEoaJNtSRJFeiT1f3O1%2BgfkcmiQMAogyk7MKS%2B2UQ6NCEVmLDVA2ywlKHsFJ9WibX5F6QH4&X-Amz-Signature=b490836b28ba8040dbcf2f2b46f32ea3411d8f17c5b9054f77df7f09cc65485d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
