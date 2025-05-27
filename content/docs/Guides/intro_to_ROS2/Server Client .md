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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7D6JL7R%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDst9y%2F8s4wsSbvPQjI4GNCQY1iIex47InQ%2FDWfS8zb1wIgQQlPtQUznrri%2Bizo%2BO1fEQL%2BPgP93h6WJ4yUEJVIC%2Foq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDF%2FrBoYt9bc%2B5EXVMyrcAwnDH3aQkfuVZLb1R8TjRgVC0s0IokQLyfpnZijzzzjCAq8otZQZ%2FnOS1JUpXSyhE6oJc6YL%2BmSuMG5j9h8kzixPJQMT3bl5YtgfXI7IgMwugCBB913EejkT3pQU6vlJOjcya3IplPHv4YuiCDLOaYxRZQevPwoy9C32HBIwfKIHbnbLTLFSL3sRF7%2BJSxT8JxUzck2PoOUz2KJNm0VXAshELuQATJvfQzCrq706G30BjwamUPgaB9%2FH%2Bp5RlZLdVj0DWSgT7UM%2BR0tIlIr9UK8oyvU5yWnlo%2BFKWIzWXrLxBS2s7Lb3zO4SSVhvWj99r0Oe5XxEZawDKAVHVE3rx3w0YWxMW37URyiZQwCufXOYb7oHW0NkWxBayvpTBiA8TW0H%2Fq1ycptqoBKEXNJEgMYfVlO3TptO%2BlCOu4ue%2FWsaswk5iUVCtYl0I2b%2F2vYNijpPuWwZyGPNEKoIZoWVaMm0OOdHhxzcNnFklwUmzSzq0E3j1tm0Mf%2FFR3d7s1tVO5s%2Fref88uVj45SyuaaqFrXM6vGtrILJfOqTE5hB8k9cIXdWfDMV%2BkTs9clhY3dz3pAm3J14SyWL9L29LjP7FNVteEPUeJgs%2FVchLudE6bU9%2F98Imr9xDTiDjDKqMLb91sEGOqUBvow4iQIfjR0kcybaer4Spt%2B1TzPKOmIzqc5j%2FHND97RGWNkr3P0VA217YMxkYVmeGl4GD7LqloEefcf8huLBJrLLFEJCxglAcxQkvdVaRbPmmeIdJexILMWSD0LoVa9I8pkZnbITrV9oAgZyPFaEks41wZBBDKAt3q4GhyYrB1UJhhy2spSpYKN%2FTkBal%2FbuDkarTh8zTRKwF0t%2FvqeRnkEh%2Fy1C&X-Amz-Signature=e197b8e5162de0e0b15730b10e960e9004995299bb764ae4817a6d8e161017e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7D6JL7R%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDst9y%2F8s4wsSbvPQjI4GNCQY1iIex47InQ%2FDWfS8zb1wIgQQlPtQUznrri%2Bizo%2BO1fEQL%2BPgP93h6WJ4yUEJVIC%2Foq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDF%2FrBoYt9bc%2B5EXVMyrcAwnDH3aQkfuVZLb1R8TjRgVC0s0IokQLyfpnZijzzzjCAq8otZQZ%2FnOS1JUpXSyhE6oJc6YL%2BmSuMG5j9h8kzixPJQMT3bl5YtgfXI7IgMwugCBB913EejkT3pQU6vlJOjcya3IplPHv4YuiCDLOaYxRZQevPwoy9C32HBIwfKIHbnbLTLFSL3sRF7%2BJSxT8JxUzck2PoOUz2KJNm0VXAshELuQATJvfQzCrq706G30BjwamUPgaB9%2FH%2Bp5RlZLdVj0DWSgT7UM%2BR0tIlIr9UK8oyvU5yWnlo%2BFKWIzWXrLxBS2s7Lb3zO4SSVhvWj99r0Oe5XxEZawDKAVHVE3rx3w0YWxMW37URyiZQwCufXOYb7oHW0NkWxBayvpTBiA8TW0H%2Fq1ycptqoBKEXNJEgMYfVlO3TptO%2BlCOu4ue%2FWsaswk5iUVCtYl0I2b%2F2vYNijpPuWwZyGPNEKoIZoWVaMm0OOdHhxzcNnFklwUmzSzq0E3j1tm0Mf%2FFR3d7s1tVO5s%2Fref88uVj45SyuaaqFrXM6vGtrILJfOqTE5hB8k9cIXdWfDMV%2BkTs9clhY3dz3pAm3J14SyWL9L29LjP7FNVteEPUeJgs%2FVchLudE6bU9%2F98Imr9xDTiDjDKqMLb91sEGOqUBvow4iQIfjR0kcybaer4Spt%2B1TzPKOmIzqc5j%2FHND97RGWNkr3P0VA217YMxkYVmeGl4GD7LqloEefcf8huLBJrLLFEJCxglAcxQkvdVaRbPmmeIdJexILMWSD0LoVa9I8pkZnbITrV9oAgZyPFaEks41wZBBDKAt3q4GhyYrB1UJhhy2spSpYKN%2FTkBal%2FbuDkarTh8zTRKwF0t%2FvqeRnkEh%2Fy1C&X-Amz-Signature=143b43133106630e1f016d7a73cdbcb95a970071be5e4b15be15a623c4222006&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7D6JL7R%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDst9y%2F8s4wsSbvPQjI4GNCQY1iIex47InQ%2FDWfS8zb1wIgQQlPtQUznrri%2Bizo%2BO1fEQL%2BPgP93h6WJ4yUEJVIC%2Foq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDF%2FrBoYt9bc%2B5EXVMyrcAwnDH3aQkfuVZLb1R8TjRgVC0s0IokQLyfpnZijzzzjCAq8otZQZ%2FnOS1JUpXSyhE6oJc6YL%2BmSuMG5j9h8kzixPJQMT3bl5YtgfXI7IgMwugCBB913EejkT3pQU6vlJOjcya3IplPHv4YuiCDLOaYxRZQevPwoy9C32HBIwfKIHbnbLTLFSL3sRF7%2BJSxT8JxUzck2PoOUz2KJNm0VXAshELuQATJvfQzCrq706G30BjwamUPgaB9%2FH%2Bp5RlZLdVj0DWSgT7UM%2BR0tIlIr9UK8oyvU5yWnlo%2BFKWIzWXrLxBS2s7Lb3zO4SSVhvWj99r0Oe5XxEZawDKAVHVE3rx3w0YWxMW37URyiZQwCufXOYb7oHW0NkWxBayvpTBiA8TW0H%2Fq1ycptqoBKEXNJEgMYfVlO3TptO%2BlCOu4ue%2FWsaswk5iUVCtYl0I2b%2F2vYNijpPuWwZyGPNEKoIZoWVaMm0OOdHhxzcNnFklwUmzSzq0E3j1tm0Mf%2FFR3d7s1tVO5s%2Fref88uVj45SyuaaqFrXM6vGtrILJfOqTE5hB8k9cIXdWfDMV%2BkTs9clhY3dz3pAm3J14SyWL9L29LjP7FNVteEPUeJgs%2FVchLudE6bU9%2F98Imr9xDTiDjDKqMLb91sEGOqUBvow4iQIfjR0kcybaer4Spt%2B1TzPKOmIzqc5j%2FHND97RGWNkr3P0VA217YMxkYVmeGl4GD7LqloEefcf8huLBJrLLFEJCxglAcxQkvdVaRbPmmeIdJexILMWSD0LoVa9I8pkZnbITrV9oAgZyPFaEks41wZBBDKAt3q4GhyYrB1UJhhy2spSpYKN%2FTkBal%2FbuDkarTh8zTRKwF0t%2FvqeRnkEh%2Fy1C&X-Amz-Signature=7a2949051bed1ac83c2f8361ea7a754e2d90a67cda216b2c1974d34551353c1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7D6JL7R%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDst9y%2F8s4wsSbvPQjI4GNCQY1iIex47InQ%2FDWfS8zb1wIgQQlPtQUznrri%2Bizo%2BO1fEQL%2BPgP93h6WJ4yUEJVIC%2Foq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDF%2FrBoYt9bc%2B5EXVMyrcAwnDH3aQkfuVZLb1R8TjRgVC0s0IokQLyfpnZijzzzjCAq8otZQZ%2FnOS1JUpXSyhE6oJc6YL%2BmSuMG5j9h8kzixPJQMT3bl5YtgfXI7IgMwugCBB913EejkT3pQU6vlJOjcya3IplPHv4YuiCDLOaYxRZQevPwoy9C32HBIwfKIHbnbLTLFSL3sRF7%2BJSxT8JxUzck2PoOUz2KJNm0VXAshELuQATJvfQzCrq706G30BjwamUPgaB9%2FH%2Bp5RlZLdVj0DWSgT7UM%2BR0tIlIr9UK8oyvU5yWnlo%2BFKWIzWXrLxBS2s7Lb3zO4SSVhvWj99r0Oe5XxEZawDKAVHVE3rx3w0YWxMW37URyiZQwCufXOYb7oHW0NkWxBayvpTBiA8TW0H%2Fq1ycptqoBKEXNJEgMYfVlO3TptO%2BlCOu4ue%2FWsaswk5iUVCtYl0I2b%2F2vYNijpPuWwZyGPNEKoIZoWVaMm0OOdHhxzcNnFklwUmzSzq0E3j1tm0Mf%2FFR3d7s1tVO5s%2Fref88uVj45SyuaaqFrXM6vGtrILJfOqTE5hB8k9cIXdWfDMV%2BkTs9clhY3dz3pAm3J14SyWL9L29LjP7FNVteEPUeJgs%2FVchLudE6bU9%2F98Imr9xDTiDjDKqMLb91sEGOqUBvow4iQIfjR0kcybaer4Spt%2B1TzPKOmIzqc5j%2FHND97RGWNkr3P0VA217YMxkYVmeGl4GD7LqloEefcf8huLBJrLLFEJCxglAcxQkvdVaRbPmmeIdJexILMWSD0LoVa9I8pkZnbITrV9oAgZyPFaEks41wZBBDKAt3q4GhyYrB1UJhhy2spSpYKN%2FTkBal%2FbuDkarTh8zTRKwF0t%2FvqeRnkEh%2Fy1C&X-Amz-Signature=8e0a6e13456fe82756d24a96fa0679692dc8caf61e01d94b6802d138aa990a60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7D6JL7R%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDst9y%2F8s4wsSbvPQjI4GNCQY1iIex47InQ%2FDWfS8zb1wIgQQlPtQUznrri%2Bizo%2BO1fEQL%2BPgP93h6WJ4yUEJVIC%2Foq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDF%2FrBoYt9bc%2B5EXVMyrcAwnDH3aQkfuVZLb1R8TjRgVC0s0IokQLyfpnZijzzzjCAq8otZQZ%2FnOS1JUpXSyhE6oJc6YL%2BmSuMG5j9h8kzixPJQMT3bl5YtgfXI7IgMwugCBB913EejkT3pQU6vlJOjcya3IplPHv4YuiCDLOaYxRZQevPwoy9C32HBIwfKIHbnbLTLFSL3sRF7%2BJSxT8JxUzck2PoOUz2KJNm0VXAshELuQATJvfQzCrq706G30BjwamUPgaB9%2FH%2Bp5RlZLdVj0DWSgT7UM%2BR0tIlIr9UK8oyvU5yWnlo%2BFKWIzWXrLxBS2s7Lb3zO4SSVhvWj99r0Oe5XxEZawDKAVHVE3rx3w0YWxMW37URyiZQwCufXOYb7oHW0NkWxBayvpTBiA8TW0H%2Fq1ycptqoBKEXNJEgMYfVlO3TptO%2BlCOu4ue%2FWsaswk5iUVCtYl0I2b%2F2vYNijpPuWwZyGPNEKoIZoWVaMm0OOdHhxzcNnFklwUmzSzq0E3j1tm0Mf%2FFR3d7s1tVO5s%2Fref88uVj45SyuaaqFrXM6vGtrILJfOqTE5hB8k9cIXdWfDMV%2BkTs9clhY3dz3pAm3J14SyWL9L29LjP7FNVteEPUeJgs%2FVchLudE6bU9%2F98Imr9xDTiDjDKqMLb91sEGOqUBvow4iQIfjR0kcybaer4Spt%2B1TzPKOmIzqc5j%2FHND97RGWNkr3P0VA217YMxkYVmeGl4GD7LqloEefcf8huLBJrLLFEJCxglAcxQkvdVaRbPmmeIdJexILMWSD0LoVa9I8pkZnbITrV9oAgZyPFaEks41wZBBDKAt3q4GhyYrB1UJhhy2spSpYKN%2FTkBal%2FbuDkarTh8zTRKwF0t%2FvqeRnkEh%2Fy1C&X-Amz-Signature=b5dcca7116d56a0faf468543c1811fd3be9ab530fe0089db688921925df84441&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
