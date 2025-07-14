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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RQJO5S%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDbKqKL3htdEGrZsPBW%2BlHBtAi%2Fmm%2B43B92joemhz7uRAiEA2UkuffPNg4Jcs5eWJZ%2BFSXmecRGj%2FehiQ1l81KvzNDoq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDBGF0jm8%2FUIe8PKsAircA1GN24zKI1wHc1EOspQpoKhA0uLTf7%2BiCZd2A2t6TqzZnT3BHcAWB7CLlXm0Fz0R3ZIPqoUXyKpHpCxmfyRXiG7st%2BTJq03M4dz%2BbHybyPSpFir%2FRPDCSXJb8njcHUAeR%2FELFB%2FtG9XpdfayKJBskJaErRdvLY%2B9m3ts7CiMEKweG2MWzUwaATTx%2F6l%2FB0eOQo6S2zB2ZAYyd80Rq09W9tc%2Bff6juWpmvutYKT42sgPwEeb53Xiw%2Be10jQg83%2F0ZXGMgMtTcG4dD6v4CiBsuB5VcvzV1mNnEULmaFVvor6VfNOp%2FhjhV0vsBOL98s1meF1HuITD93NPpi%2FmAhz5OzNAURyxCPpTKMYrG6gC9ewcPLf8QyHePLieHixQaVMp4mdKT%2FrQNsuKLnKR1qAyn3Q82CUTi2WymnCZt%2BLWQtqN24472UmEYnREiYwBan3zbwhhWf241f2FZupCdWXNg1NhrWe0na5%2FnGgtjSqzUYB1T8H99d4kfUWduoyXwAol%2FC2ezlH2KrTE31i4sqD2wITsr5s7KGg%2BWewMfvUrhuvNwowM3C6pB0Nf7fE%2Fnl%2Bcz0QSySO1ZVmZ2GjO5tBzirTKq9WC%2F9%2B7mlIupaKREPA7T%2BqY%2BopEbLSu%2FbWtFMJyF1MMGOqUBS5vxlpzUq0SukFq3gydNGlUpRAqQbnvt6k3IeU81wrNzgxwAyVB8lkDQzxxTI%2FOaF9BZzRCNnj7XON2AoDRydJioxwgzbp3aLpWznjK1GpAJPQ5YBMEVFTYUJCyab975jVrE3LI9GwVKiOFRR7gCPXr8z7MkM7M164902eSaxtU4Gn%2F5Gbh9wgScB3Mf%2F30UNnwP5fLlgpbqKZMQ5nrJAFLITpeY&X-Amz-Signature=bb0a800ac7b1fc57dbe98ec4257e59eb1b1e0e9db53dd4c65dc8d9c7b8c6860c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RQJO5S%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDbKqKL3htdEGrZsPBW%2BlHBtAi%2Fmm%2B43B92joemhz7uRAiEA2UkuffPNg4Jcs5eWJZ%2BFSXmecRGj%2FehiQ1l81KvzNDoq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDBGF0jm8%2FUIe8PKsAircA1GN24zKI1wHc1EOspQpoKhA0uLTf7%2BiCZd2A2t6TqzZnT3BHcAWB7CLlXm0Fz0R3ZIPqoUXyKpHpCxmfyRXiG7st%2BTJq03M4dz%2BbHybyPSpFir%2FRPDCSXJb8njcHUAeR%2FELFB%2FtG9XpdfayKJBskJaErRdvLY%2B9m3ts7CiMEKweG2MWzUwaATTx%2F6l%2FB0eOQo6S2zB2ZAYyd80Rq09W9tc%2Bff6juWpmvutYKT42sgPwEeb53Xiw%2Be10jQg83%2F0ZXGMgMtTcG4dD6v4CiBsuB5VcvzV1mNnEULmaFVvor6VfNOp%2FhjhV0vsBOL98s1meF1HuITD93NPpi%2FmAhz5OzNAURyxCPpTKMYrG6gC9ewcPLf8QyHePLieHixQaVMp4mdKT%2FrQNsuKLnKR1qAyn3Q82CUTi2WymnCZt%2BLWQtqN24472UmEYnREiYwBan3zbwhhWf241f2FZupCdWXNg1NhrWe0na5%2FnGgtjSqzUYB1T8H99d4kfUWduoyXwAol%2FC2ezlH2KrTE31i4sqD2wITsr5s7KGg%2BWewMfvUrhuvNwowM3C6pB0Nf7fE%2Fnl%2Bcz0QSySO1ZVmZ2GjO5tBzirTKq9WC%2F9%2B7mlIupaKREPA7T%2BqY%2BopEbLSu%2FbWtFMJyF1MMGOqUBS5vxlpzUq0SukFq3gydNGlUpRAqQbnvt6k3IeU81wrNzgxwAyVB8lkDQzxxTI%2FOaF9BZzRCNnj7XON2AoDRydJioxwgzbp3aLpWznjK1GpAJPQ5YBMEVFTYUJCyab975jVrE3LI9GwVKiOFRR7gCPXr8z7MkM7M164902eSaxtU4Gn%2F5Gbh9wgScB3Mf%2F30UNnwP5fLlgpbqKZMQ5nrJAFLITpeY&X-Amz-Signature=00423e9d974c5d49467c4ebfc9d1024a1c26c16d0ad828224ce2b4dfc5098fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RQJO5S%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDbKqKL3htdEGrZsPBW%2BlHBtAi%2Fmm%2B43B92joemhz7uRAiEA2UkuffPNg4Jcs5eWJZ%2BFSXmecRGj%2FehiQ1l81KvzNDoq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDBGF0jm8%2FUIe8PKsAircA1GN24zKI1wHc1EOspQpoKhA0uLTf7%2BiCZd2A2t6TqzZnT3BHcAWB7CLlXm0Fz0R3ZIPqoUXyKpHpCxmfyRXiG7st%2BTJq03M4dz%2BbHybyPSpFir%2FRPDCSXJb8njcHUAeR%2FELFB%2FtG9XpdfayKJBskJaErRdvLY%2B9m3ts7CiMEKweG2MWzUwaATTx%2F6l%2FB0eOQo6S2zB2ZAYyd80Rq09W9tc%2Bff6juWpmvutYKT42sgPwEeb53Xiw%2Be10jQg83%2F0ZXGMgMtTcG4dD6v4CiBsuB5VcvzV1mNnEULmaFVvor6VfNOp%2FhjhV0vsBOL98s1meF1HuITD93NPpi%2FmAhz5OzNAURyxCPpTKMYrG6gC9ewcPLf8QyHePLieHixQaVMp4mdKT%2FrQNsuKLnKR1qAyn3Q82CUTi2WymnCZt%2BLWQtqN24472UmEYnREiYwBan3zbwhhWf241f2FZupCdWXNg1NhrWe0na5%2FnGgtjSqzUYB1T8H99d4kfUWduoyXwAol%2FC2ezlH2KrTE31i4sqD2wITsr5s7KGg%2BWewMfvUrhuvNwowM3C6pB0Nf7fE%2Fnl%2Bcz0QSySO1ZVmZ2GjO5tBzirTKq9WC%2F9%2B7mlIupaKREPA7T%2BqY%2BopEbLSu%2FbWtFMJyF1MMGOqUBS5vxlpzUq0SukFq3gydNGlUpRAqQbnvt6k3IeU81wrNzgxwAyVB8lkDQzxxTI%2FOaF9BZzRCNnj7XON2AoDRydJioxwgzbp3aLpWznjK1GpAJPQ5YBMEVFTYUJCyab975jVrE3LI9GwVKiOFRR7gCPXr8z7MkM7M164902eSaxtU4Gn%2F5Gbh9wgScB3Mf%2F30UNnwP5fLlgpbqKZMQ5nrJAFLITpeY&X-Amz-Signature=058e89e6c4f7397fc2e826d55e362048c500b62f24a5bf281adbc22f5aa3c11b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RQJO5S%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDbKqKL3htdEGrZsPBW%2BlHBtAi%2Fmm%2B43B92joemhz7uRAiEA2UkuffPNg4Jcs5eWJZ%2BFSXmecRGj%2FehiQ1l81KvzNDoq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDBGF0jm8%2FUIe8PKsAircA1GN24zKI1wHc1EOspQpoKhA0uLTf7%2BiCZd2A2t6TqzZnT3BHcAWB7CLlXm0Fz0R3ZIPqoUXyKpHpCxmfyRXiG7st%2BTJq03M4dz%2BbHybyPSpFir%2FRPDCSXJb8njcHUAeR%2FELFB%2FtG9XpdfayKJBskJaErRdvLY%2B9m3ts7CiMEKweG2MWzUwaATTx%2F6l%2FB0eOQo6S2zB2ZAYyd80Rq09W9tc%2Bff6juWpmvutYKT42sgPwEeb53Xiw%2Be10jQg83%2F0ZXGMgMtTcG4dD6v4CiBsuB5VcvzV1mNnEULmaFVvor6VfNOp%2FhjhV0vsBOL98s1meF1HuITD93NPpi%2FmAhz5OzNAURyxCPpTKMYrG6gC9ewcPLf8QyHePLieHixQaVMp4mdKT%2FrQNsuKLnKR1qAyn3Q82CUTi2WymnCZt%2BLWQtqN24472UmEYnREiYwBan3zbwhhWf241f2FZupCdWXNg1NhrWe0na5%2FnGgtjSqzUYB1T8H99d4kfUWduoyXwAol%2FC2ezlH2KrTE31i4sqD2wITsr5s7KGg%2BWewMfvUrhuvNwowM3C6pB0Nf7fE%2Fnl%2Bcz0QSySO1ZVmZ2GjO5tBzirTKq9WC%2F9%2B7mlIupaKREPA7T%2BqY%2BopEbLSu%2FbWtFMJyF1MMGOqUBS5vxlpzUq0SukFq3gydNGlUpRAqQbnvt6k3IeU81wrNzgxwAyVB8lkDQzxxTI%2FOaF9BZzRCNnj7XON2AoDRydJioxwgzbp3aLpWznjK1GpAJPQ5YBMEVFTYUJCyab975jVrE3LI9GwVKiOFRR7gCPXr8z7MkM7M164902eSaxtU4Gn%2F5Gbh9wgScB3Mf%2F30UNnwP5fLlgpbqKZMQ5nrJAFLITpeY&X-Amz-Signature=b497954035e2068105a4a6294de187e929ed7f70120ca6883010ec718ec10b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RQJO5S%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDbKqKL3htdEGrZsPBW%2BlHBtAi%2Fmm%2B43B92joemhz7uRAiEA2UkuffPNg4Jcs5eWJZ%2BFSXmecRGj%2FehiQ1l81KvzNDoq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDBGF0jm8%2FUIe8PKsAircA1GN24zKI1wHc1EOspQpoKhA0uLTf7%2BiCZd2A2t6TqzZnT3BHcAWB7CLlXm0Fz0R3ZIPqoUXyKpHpCxmfyRXiG7st%2BTJq03M4dz%2BbHybyPSpFir%2FRPDCSXJb8njcHUAeR%2FELFB%2FtG9XpdfayKJBskJaErRdvLY%2B9m3ts7CiMEKweG2MWzUwaATTx%2F6l%2FB0eOQo6S2zB2ZAYyd80Rq09W9tc%2Bff6juWpmvutYKT42sgPwEeb53Xiw%2Be10jQg83%2F0ZXGMgMtTcG4dD6v4CiBsuB5VcvzV1mNnEULmaFVvor6VfNOp%2FhjhV0vsBOL98s1meF1HuITD93NPpi%2FmAhz5OzNAURyxCPpTKMYrG6gC9ewcPLf8QyHePLieHixQaVMp4mdKT%2FrQNsuKLnKR1qAyn3Q82CUTi2WymnCZt%2BLWQtqN24472UmEYnREiYwBan3zbwhhWf241f2FZupCdWXNg1NhrWe0na5%2FnGgtjSqzUYB1T8H99d4kfUWduoyXwAol%2FC2ezlH2KrTE31i4sqD2wITsr5s7KGg%2BWewMfvUrhuvNwowM3C6pB0Nf7fE%2Fnl%2Bcz0QSySO1ZVmZ2GjO5tBzirTKq9WC%2F9%2B7mlIupaKREPA7T%2BqY%2BopEbLSu%2FbWtFMJyF1MMGOqUBS5vxlpzUq0SukFq3gydNGlUpRAqQbnvt6k3IeU81wrNzgxwAyVB8lkDQzxxTI%2FOaF9BZzRCNnj7XON2AoDRydJioxwgzbp3aLpWznjK1GpAJPQ5YBMEVFTYUJCyab975jVrE3LI9GwVKiOFRR7gCPXr8z7MkM7M164902eSaxtU4Gn%2F5Gbh9wgScB3Mf%2F30UNnwP5fLlgpbqKZMQ5nrJAFLITpeY&X-Amz-Signature=cd8ae734d673db385e558e763c421acf48421eb7d548fb44e6ec87127b8b3baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
