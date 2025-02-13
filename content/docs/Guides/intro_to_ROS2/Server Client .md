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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVX5ARA%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc6ObFuD%2BmVrQqIwVs%2FVT6lLSxZtkKkqAEZtrdwsjhiAIhAKquY8uUhaQlwvmGd7bWAU6IOBLhbQHWcAbnMTQ2dzDNKv8DCBUQABoMNjM3NDIzMTgzODA1IgzUOnGdN6EElZDarDoq3AMXvO6zLAOaJHVzqOsJMh0IARxsGdlQkw9T7PEslBLoQX0FfROrXthMHymQnd28GmaNL%2BhtplULJQsXPvV9sUcyIxB%2F%2FSM%2F1h%2FzTaNxe5ukoDPOqal66yAgTW3aE9PTv7BNdag4JI5fPHrv4wG21MlvLy6HpC%2BRtMX35Xr4DOflFMsUAZzbn9H5NHhke2Mxa%2FtpKKLKnWioQPYQC3b1MBykSiYyWumlFaca29Xxsjc%2BJpGs4moxpLp6PxtKCyXv63g80UZH8V9PGFGfRt2fqIHYb3BnRdS9Vk5dhYsQ273qPRMIRdgB5vbGSg%2BY6FJpFCleGrU5DB%2B4jqYO5iYxBbgUK8GOR2nW4iz3GIOuLB%2BMVC7GnbB0UvgdPvLBmLzBOIq6qdeuowhwdAcTUb26IxtwbM1aH7PL04DlAOSndD%2FBXxnG%2FtxNCWvWkAaFU9h%2BdgaCKdTww%2FsEXVLt%2FRlW1ibfW5580WwS9Qk9FF7wkivBRfW5tEp8pRF4scyktcYO19uh0TcMzfb1m0YM8uQFw5lYeojQjYjNk%2BnmfVRStkiKvwunhNafcKhuNVpF34xQv2cXpFd35lGAg1OeFTokcqyExhoUPs0vOElksMpiBWvSM2hDbNMxuE9uWxmJNDCIwre9BjqkAQYkdZl2rBAvZaDo1J230HVfcEJQUmfAHUUdLl7b9M5Ry41P6sxV5ohUJKvUccV6y9Z5e%2FjfArIs6qhCrP90XKTizQ91sU%2FipxrvLnkrZ5bCGp1fx0SbzmHDb7TxSNBNP%2FAJqAXEi0NtM9wOtA%2BbRUeDRoKty0%2Bilgz%2FnUanLdQuL8b898dhJMa5do85qWi%2B94BZ40MYZrQ0H2Ys4Tm5RTYLfFAS&X-Amz-Signature=c2df816c07ec3e410b8c81e716f8f36c7a7eb61ba67c3b5a4ea4e6892069bacf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVX5ARA%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc6ObFuD%2BmVrQqIwVs%2FVT6lLSxZtkKkqAEZtrdwsjhiAIhAKquY8uUhaQlwvmGd7bWAU6IOBLhbQHWcAbnMTQ2dzDNKv8DCBUQABoMNjM3NDIzMTgzODA1IgzUOnGdN6EElZDarDoq3AMXvO6zLAOaJHVzqOsJMh0IARxsGdlQkw9T7PEslBLoQX0FfROrXthMHymQnd28GmaNL%2BhtplULJQsXPvV9sUcyIxB%2F%2FSM%2F1h%2FzTaNxe5ukoDPOqal66yAgTW3aE9PTv7BNdag4JI5fPHrv4wG21MlvLy6HpC%2BRtMX35Xr4DOflFMsUAZzbn9H5NHhke2Mxa%2FtpKKLKnWioQPYQC3b1MBykSiYyWumlFaca29Xxsjc%2BJpGs4moxpLp6PxtKCyXv63g80UZH8V9PGFGfRt2fqIHYb3BnRdS9Vk5dhYsQ273qPRMIRdgB5vbGSg%2BY6FJpFCleGrU5DB%2B4jqYO5iYxBbgUK8GOR2nW4iz3GIOuLB%2BMVC7GnbB0UvgdPvLBmLzBOIq6qdeuowhwdAcTUb26IxtwbM1aH7PL04DlAOSndD%2FBXxnG%2FtxNCWvWkAaFU9h%2BdgaCKdTww%2FsEXVLt%2FRlW1ibfW5580WwS9Qk9FF7wkivBRfW5tEp8pRF4scyktcYO19uh0TcMzfb1m0YM8uQFw5lYeojQjYjNk%2BnmfVRStkiKvwunhNafcKhuNVpF34xQv2cXpFd35lGAg1OeFTokcqyExhoUPs0vOElksMpiBWvSM2hDbNMxuE9uWxmJNDCIwre9BjqkAQYkdZl2rBAvZaDo1J230HVfcEJQUmfAHUUdLl7b9M5Ry41P6sxV5ohUJKvUccV6y9Z5e%2FjfArIs6qhCrP90XKTizQ91sU%2FipxrvLnkrZ5bCGp1fx0SbzmHDb7TxSNBNP%2FAJqAXEi0NtM9wOtA%2BbRUeDRoKty0%2Bilgz%2FnUanLdQuL8b898dhJMa5do85qWi%2B94BZ40MYZrQ0H2Ys4Tm5RTYLfFAS&X-Amz-Signature=f24ce52a06a31d674146fbd70872f080763d2ae64642cf35b1c1a1e650d6df00&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVX5ARA%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc6ObFuD%2BmVrQqIwVs%2FVT6lLSxZtkKkqAEZtrdwsjhiAIhAKquY8uUhaQlwvmGd7bWAU6IOBLhbQHWcAbnMTQ2dzDNKv8DCBUQABoMNjM3NDIzMTgzODA1IgzUOnGdN6EElZDarDoq3AMXvO6zLAOaJHVzqOsJMh0IARxsGdlQkw9T7PEslBLoQX0FfROrXthMHymQnd28GmaNL%2BhtplULJQsXPvV9sUcyIxB%2F%2FSM%2F1h%2FzTaNxe5ukoDPOqal66yAgTW3aE9PTv7BNdag4JI5fPHrv4wG21MlvLy6HpC%2BRtMX35Xr4DOflFMsUAZzbn9H5NHhke2Mxa%2FtpKKLKnWioQPYQC3b1MBykSiYyWumlFaca29Xxsjc%2BJpGs4moxpLp6PxtKCyXv63g80UZH8V9PGFGfRt2fqIHYb3BnRdS9Vk5dhYsQ273qPRMIRdgB5vbGSg%2BY6FJpFCleGrU5DB%2B4jqYO5iYxBbgUK8GOR2nW4iz3GIOuLB%2BMVC7GnbB0UvgdPvLBmLzBOIq6qdeuowhwdAcTUb26IxtwbM1aH7PL04DlAOSndD%2FBXxnG%2FtxNCWvWkAaFU9h%2BdgaCKdTww%2FsEXVLt%2FRlW1ibfW5580WwS9Qk9FF7wkivBRfW5tEp8pRF4scyktcYO19uh0TcMzfb1m0YM8uQFw5lYeojQjYjNk%2BnmfVRStkiKvwunhNafcKhuNVpF34xQv2cXpFd35lGAg1OeFTokcqyExhoUPs0vOElksMpiBWvSM2hDbNMxuE9uWxmJNDCIwre9BjqkAQYkdZl2rBAvZaDo1J230HVfcEJQUmfAHUUdLl7b9M5Ry41P6sxV5ohUJKvUccV6y9Z5e%2FjfArIs6qhCrP90XKTizQ91sU%2FipxrvLnkrZ5bCGp1fx0SbzmHDb7TxSNBNP%2FAJqAXEi0NtM9wOtA%2BbRUeDRoKty0%2Bilgz%2FnUanLdQuL8b898dhJMa5do85qWi%2B94BZ40MYZrQ0H2Ys4Tm5RTYLfFAS&X-Amz-Signature=e2c7e8131cb50e9bf8550a398ca863f28817e9fff87e14624f14495c3b1ed4b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVX5ARA%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc6ObFuD%2BmVrQqIwVs%2FVT6lLSxZtkKkqAEZtrdwsjhiAIhAKquY8uUhaQlwvmGd7bWAU6IOBLhbQHWcAbnMTQ2dzDNKv8DCBUQABoMNjM3NDIzMTgzODA1IgzUOnGdN6EElZDarDoq3AMXvO6zLAOaJHVzqOsJMh0IARxsGdlQkw9T7PEslBLoQX0FfROrXthMHymQnd28GmaNL%2BhtplULJQsXPvV9sUcyIxB%2F%2FSM%2F1h%2FzTaNxe5ukoDPOqal66yAgTW3aE9PTv7BNdag4JI5fPHrv4wG21MlvLy6HpC%2BRtMX35Xr4DOflFMsUAZzbn9H5NHhke2Mxa%2FtpKKLKnWioQPYQC3b1MBykSiYyWumlFaca29Xxsjc%2BJpGs4moxpLp6PxtKCyXv63g80UZH8V9PGFGfRt2fqIHYb3BnRdS9Vk5dhYsQ273qPRMIRdgB5vbGSg%2BY6FJpFCleGrU5DB%2B4jqYO5iYxBbgUK8GOR2nW4iz3GIOuLB%2BMVC7GnbB0UvgdPvLBmLzBOIq6qdeuowhwdAcTUb26IxtwbM1aH7PL04DlAOSndD%2FBXxnG%2FtxNCWvWkAaFU9h%2BdgaCKdTww%2FsEXVLt%2FRlW1ibfW5580WwS9Qk9FF7wkivBRfW5tEp8pRF4scyktcYO19uh0TcMzfb1m0YM8uQFw5lYeojQjYjNk%2BnmfVRStkiKvwunhNafcKhuNVpF34xQv2cXpFd35lGAg1OeFTokcqyExhoUPs0vOElksMpiBWvSM2hDbNMxuE9uWxmJNDCIwre9BjqkAQYkdZl2rBAvZaDo1J230HVfcEJQUmfAHUUdLl7b9M5Ry41P6sxV5ohUJKvUccV6y9Z5e%2FjfArIs6qhCrP90XKTizQ91sU%2FipxrvLnkrZ5bCGp1fx0SbzmHDb7TxSNBNP%2FAJqAXEi0NtM9wOtA%2BbRUeDRoKty0%2Bilgz%2FnUanLdQuL8b898dhJMa5do85qWi%2B94BZ40MYZrQ0H2Ys4Tm5RTYLfFAS&X-Amz-Signature=7c5b3e7c8437e9c7f85a1060e2e07251ea685c33964db07166aa66bbf3fe098f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTVX5ARA%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc6ObFuD%2BmVrQqIwVs%2FVT6lLSxZtkKkqAEZtrdwsjhiAIhAKquY8uUhaQlwvmGd7bWAU6IOBLhbQHWcAbnMTQ2dzDNKv8DCBUQABoMNjM3NDIzMTgzODA1IgzUOnGdN6EElZDarDoq3AMXvO6zLAOaJHVzqOsJMh0IARxsGdlQkw9T7PEslBLoQX0FfROrXthMHymQnd28GmaNL%2BhtplULJQsXPvV9sUcyIxB%2F%2FSM%2F1h%2FzTaNxe5ukoDPOqal66yAgTW3aE9PTv7BNdag4JI5fPHrv4wG21MlvLy6HpC%2BRtMX35Xr4DOflFMsUAZzbn9H5NHhke2Mxa%2FtpKKLKnWioQPYQC3b1MBykSiYyWumlFaca29Xxsjc%2BJpGs4moxpLp6PxtKCyXv63g80UZH8V9PGFGfRt2fqIHYb3BnRdS9Vk5dhYsQ273qPRMIRdgB5vbGSg%2BY6FJpFCleGrU5DB%2B4jqYO5iYxBbgUK8GOR2nW4iz3GIOuLB%2BMVC7GnbB0UvgdPvLBmLzBOIq6qdeuowhwdAcTUb26IxtwbM1aH7PL04DlAOSndD%2FBXxnG%2FtxNCWvWkAaFU9h%2BdgaCKdTww%2FsEXVLt%2FRlW1ibfW5580WwS9Qk9FF7wkivBRfW5tEp8pRF4scyktcYO19uh0TcMzfb1m0YM8uQFw5lYeojQjYjNk%2BnmfVRStkiKvwunhNafcKhuNVpF34xQv2cXpFd35lGAg1OeFTokcqyExhoUPs0vOElksMpiBWvSM2hDbNMxuE9uWxmJNDCIwre9BjqkAQYkdZl2rBAvZaDo1J230HVfcEJQUmfAHUUdLl7b9M5Ry41P6sxV5ohUJKvUccV6y9Z5e%2FjfArIs6qhCrP90XKTizQ91sU%2FipxrvLnkrZ5bCGp1fx0SbzmHDb7TxSNBNP%2FAJqAXEi0NtM9wOtA%2BbRUeDRoKty0%2Bilgz%2FnUanLdQuL8b898dhJMa5do85qWi%2B94BZ40MYZrQ0H2Ys4Tm5RTYLfFAS&X-Amz-Signature=da6a5f5b27224265d910cb95c10ec43cb54b01a88fce5f280f9d3b31c68ca35a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
