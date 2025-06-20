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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPYQVGS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCnhOXiUC6dARHszQHVaw6MI2JnhGC9fFF76cCFAoybgAIfEhj8Mi4swL%2FZLBmM3xkkv3tdjsFdJgXGPbwJURH9%2FCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlL2fWvk855bYRhrrKtwD9Osr3ljjWAL%2FCzyBVJp2HJn%2B97IlZ1z6PwNnOWAgfQCOW1%2B4yRRhZDnMBXxGIoj9wYnDHQEZVCPth4hHMbiaAYqE0Vht%2BI%2BoCBvXwIroAwLVz6Zo3P7uT%2BGj2qKu4DguCsZ0nEE4%2BcHLq5Q8LJ3yIt4O3miz2QgMcqSWteELeAQEBTeZo1znMl%2FOxKJW48kOcucDyLXaDtxoBsRCUV9LhoPmIy7z6V%2Bs2Nr0SeCB4wmRJXbU%2BWxYVmTVGAct4ckoccBNzQYLJjkzSSw8FOylBlVxRdbjHxiB93Q2xVzaUFAvN25aqVfUOgi3XjunPGuoWd2D5zEDNWtFavQqhD0rhkx7FAns15fslj6aCm6SFJZtls4XJcSRMrY4ksYg5xapc7E3tX0j2d0SIGNqS32uTKaYE8ZznNGxCf%2BEG0hO1u%2BhsqOToH0isKS24bBx8S2Qzde7rg4trtIAi8YRNn4c%2FL5cF9E3rIGB1mrmqK%2BANtMHD7%2BdGYmMMM9M4%2FqPmJZLilAAxgESwP6heHFiYydQP5v1dnb8UyPnIisc2mmsoB5SrReLuLGptB9Pfk0DSQ1l%2BwSRBFMz1HLbV2CYpKoxS9IJuysjgw1RjzncRqxVL1ieayA0SYwROPn7CEQwvLLWwgY6pgGOg4E0FseFL%2FvJUB1MaJWV552jaigQMduL0WIZEgcWMyMRYKE6FVLXPq95VGN5S%2Bz0cN9IYsJZPByYW2n2q0yt3FNMFJFltegvoBj4vkw5tctGdpEbXIFm5Ykfhq8zaz0RzRl3BRFy5hAEEuMrZeGPNRvPLfbsjZo8Gjff79GzaA4V6T07I%2FyiDVFd2CEyHvmm%2Bfb8US2rKFp70czW%2BVoUuvq1IF5I&X-Amz-Signature=c7880524e9ad93569e7bbaedcb286d53cdf0f8686b71f3930507a97ce13fcb3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPYQVGS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCnhOXiUC6dARHszQHVaw6MI2JnhGC9fFF76cCFAoybgAIfEhj8Mi4swL%2FZLBmM3xkkv3tdjsFdJgXGPbwJURH9%2FCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlL2fWvk855bYRhrrKtwD9Osr3ljjWAL%2FCzyBVJp2HJn%2B97IlZ1z6PwNnOWAgfQCOW1%2B4yRRhZDnMBXxGIoj9wYnDHQEZVCPth4hHMbiaAYqE0Vht%2BI%2BoCBvXwIroAwLVz6Zo3P7uT%2BGj2qKu4DguCsZ0nEE4%2BcHLq5Q8LJ3yIt4O3miz2QgMcqSWteELeAQEBTeZo1znMl%2FOxKJW48kOcucDyLXaDtxoBsRCUV9LhoPmIy7z6V%2Bs2Nr0SeCB4wmRJXbU%2BWxYVmTVGAct4ckoccBNzQYLJjkzSSw8FOylBlVxRdbjHxiB93Q2xVzaUFAvN25aqVfUOgi3XjunPGuoWd2D5zEDNWtFavQqhD0rhkx7FAns15fslj6aCm6SFJZtls4XJcSRMrY4ksYg5xapc7E3tX0j2d0SIGNqS32uTKaYE8ZznNGxCf%2BEG0hO1u%2BhsqOToH0isKS24bBx8S2Qzde7rg4trtIAi8YRNn4c%2FL5cF9E3rIGB1mrmqK%2BANtMHD7%2BdGYmMMM9M4%2FqPmJZLilAAxgESwP6heHFiYydQP5v1dnb8UyPnIisc2mmsoB5SrReLuLGptB9Pfk0DSQ1l%2BwSRBFMz1HLbV2CYpKoxS9IJuysjgw1RjzncRqxVL1ieayA0SYwROPn7CEQwvLLWwgY6pgGOg4E0FseFL%2FvJUB1MaJWV552jaigQMduL0WIZEgcWMyMRYKE6FVLXPq95VGN5S%2Bz0cN9IYsJZPByYW2n2q0yt3FNMFJFltegvoBj4vkw5tctGdpEbXIFm5Ykfhq8zaz0RzRl3BRFy5hAEEuMrZeGPNRvPLfbsjZo8Gjff79GzaA4V6T07I%2FyiDVFd2CEyHvmm%2Bfb8US2rKFp70czW%2BVoUuvq1IF5I&X-Amz-Signature=9e8d965664b9ab78879d670e39d7ebe11b713311e95ce4a024b46b097dee02e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPYQVGS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCnhOXiUC6dARHszQHVaw6MI2JnhGC9fFF76cCFAoybgAIfEhj8Mi4swL%2FZLBmM3xkkv3tdjsFdJgXGPbwJURH9%2FCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlL2fWvk855bYRhrrKtwD9Osr3ljjWAL%2FCzyBVJp2HJn%2B97IlZ1z6PwNnOWAgfQCOW1%2B4yRRhZDnMBXxGIoj9wYnDHQEZVCPth4hHMbiaAYqE0Vht%2BI%2BoCBvXwIroAwLVz6Zo3P7uT%2BGj2qKu4DguCsZ0nEE4%2BcHLq5Q8LJ3yIt4O3miz2QgMcqSWteELeAQEBTeZo1znMl%2FOxKJW48kOcucDyLXaDtxoBsRCUV9LhoPmIy7z6V%2Bs2Nr0SeCB4wmRJXbU%2BWxYVmTVGAct4ckoccBNzQYLJjkzSSw8FOylBlVxRdbjHxiB93Q2xVzaUFAvN25aqVfUOgi3XjunPGuoWd2D5zEDNWtFavQqhD0rhkx7FAns15fslj6aCm6SFJZtls4XJcSRMrY4ksYg5xapc7E3tX0j2d0SIGNqS32uTKaYE8ZznNGxCf%2BEG0hO1u%2BhsqOToH0isKS24bBx8S2Qzde7rg4trtIAi8YRNn4c%2FL5cF9E3rIGB1mrmqK%2BANtMHD7%2BdGYmMMM9M4%2FqPmJZLilAAxgESwP6heHFiYydQP5v1dnb8UyPnIisc2mmsoB5SrReLuLGptB9Pfk0DSQ1l%2BwSRBFMz1HLbV2CYpKoxS9IJuysjgw1RjzncRqxVL1ieayA0SYwROPn7CEQwvLLWwgY6pgGOg4E0FseFL%2FvJUB1MaJWV552jaigQMduL0WIZEgcWMyMRYKE6FVLXPq95VGN5S%2Bz0cN9IYsJZPByYW2n2q0yt3FNMFJFltegvoBj4vkw5tctGdpEbXIFm5Ykfhq8zaz0RzRl3BRFy5hAEEuMrZeGPNRvPLfbsjZo8Gjff79GzaA4V6T07I%2FyiDVFd2CEyHvmm%2Bfb8US2rKFp70czW%2BVoUuvq1IF5I&X-Amz-Signature=06f5650bc5d63e71dcdf6a8712055d8a1443893ea3082286d53b1ca582f2940a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPYQVGS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCnhOXiUC6dARHszQHVaw6MI2JnhGC9fFF76cCFAoybgAIfEhj8Mi4swL%2FZLBmM3xkkv3tdjsFdJgXGPbwJURH9%2FCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlL2fWvk855bYRhrrKtwD9Osr3ljjWAL%2FCzyBVJp2HJn%2B97IlZ1z6PwNnOWAgfQCOW1%2B4yRRhZDnMBXxGIoj9wYnDHQEZVCPth4hHMbiaAYqE0Vht%2BI%2BoCBvXwIroAwLVz6Zo3P7uT%2BGj2qKu4DguCsZ0nEE4%2BcHLq5Q8LJ3yIt4O3miz2QgMcqSWteELeAQEBTeZo1znMl%2FOxKJW48kOcucDyLXaDtxoBsRCUV9LhoPmIy7z6V%2Bs2Nr0SeCB4wmRJXbU%2BWxYVmTVGAct4ckoccBNzQYLJjkzSSw8FOylBlVxRdbjHxiB93Q2xVzaUFAvN25aqVfUOgi3XjunPGuoWd2D5zEDNWtFavQqhD0rhkx7FAns15fslj6aCm6SFJZtls4XJcSRMrY4ksYg5xapc7E3tX0j2d0SIGNqS32uTKaYE8ZznNGxCf%2BEG0hO1u%2BhsqOToH0isKS24bBx8S2Qzde7rg4trtIAi8YRNn4c%2FL5cF9E3rIGB1mrmqK%2BANtMHD7%2BdGYmMMM9M4%2FqPmJZLilAAxgESwP6heHFiYydQP5v1dnb8UyPnIisc2mmsoB5SrReLuLGptB9Pfk0DSQ1l%2BwSRBFMz1HLbV2CYpKoxS9IJuysjgw1RjzncRqxVL1ieayA0SYwROPn7CEQwvLLWwgY6pgGOg4E0FseFL%2FvJUB1MaJWV552jaigQMduL0WIZEgcWMyMRYKE6FVLXPq95VGN5S%2Bz0cN9IYsJZPByYW2n2q0yt3FNMFJFltegvoBj4vkw5tctGdpEbXIFm5Ykfhq8zaz0RzRl3BRFy5hAEEuMrZeGPNRvPLfbsjZo8Gjff79GzaA4V6T07I%2FyiDVFd2CEyHvmm%2Bfb8US2rKFp70czW%2BVoUuvq1IF5I&X-Amz-Signature=e7e0c4052c6f5e0a64c1b413509ccd9ac21f138ac68cbff1b07452ec497827e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPYQVGS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCnhOXiUC6dARHszQHVaw6MI2JnhGC9fFF76cCFAoybgAIfEhj8Mi4swL%2FZLBmM3xkkv3tdjsFdJgXGPbwJURH9%2FCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlL2fWvk855bYRhrrKtwD9Osr3ljjWAL%2FCzyBVJp2HJn%2B97IlZ1z6PwNnOWAgfQCOW1%2B4yRRhZDnMBXxGIoj9wYnDHQEZVCPth4hHMbiaAYqE0Vht%2BI%2BoCBvXwIroAwLVz6Zo3P7uT%2BGj2qKu4DguCsZ0nEE4%2BcHLq5Q8LJ3yIt4O3miz2QgMcqSWteELeAQEBTeZo1znMl%2FOxKJW48kOcucDyLXaDtxoBsRCUV9LhoPmIy7z6V%2Bs2Nr0SeCB4wmRJXbU%2BWxYVmTVGAct4ckoccBNzQYLJjkzSSw8FOylBlVxRdbjHxiB93Q2xVzaUFAvN25aqVfUOgi3XjunPGuoWd2D5zEDNWtFavQqhD0rhkx7FAns15fslj6aCm6SFJZtls4XJcSRMrY4ksYg5xapc7E3tX0j2d0SIGNqS32uTKaYE8ZznNGxCf%2BEG0hO1u%2BhsqOToH0isKS24bBx8S2Qzde7rg4trtIAi8YRNn4c%2FL5cF9E3rIGB1mrmqK%2BANtMHD7%2BdGYmMMM9M4%2FqPmJZLilAAxgESwP6heHFiYydQP5v1dnb8UyPnIisc2mmsoB5SrReLuLGptB9Pfk0DSQ1l%2BwSRBFMz1HLbV2CYpKoxS9IJuysjgw1RjzncRqxVL1ieayA0SYwROPn7CEQwvLLWwgY6pgGOg4E0FseFL%2FvJUB1MaJWV552jaigQMduL0WIZEgcWMyMRYKE6FVLXPq95VGN5S%2Bz0cN9IYsJZPByYW2n2q0yt3FNMFJFltegvoBj4vkw5tctGdpEbXIFm5Ykfhq8zaz0RzRl3BRFy5hAEEuMrZeGPNRvPLfbsjZo8Gjff79GzaA4V6T07I%2FyiDVFd2CEyHvmm%2Bfb8US2rKFp70czW%2BVoUuvq1IF5I&X-Amz-Signature=0cc8a7a2dbf4414e28fcca1eb4ac70dda4e10a70cd5144f1afaa5d62a6c07c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
