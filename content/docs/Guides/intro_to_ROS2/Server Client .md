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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PHNGXL5%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP9Nv2XVFvSOKGPb1T%2Bsuh%2Bnk5u8kCa8wOcd78RL%2Fy0gIgWN8PXxL9sdvjzUkRpDfpBDiTKsiUFbjK3ikWKxv9AwkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJICihiAoKUndX3EXircA6v3br1dQ%2F1KfyeokuUGSnGg2j7lfTspoQ6l33bE3RBv%2BigCk9XxIMEjRXduSatpTDgU%2BjktpTPlDj2TXW5bAb9dKILyONEMbJh65ww3Z8Fu%2FSccKZMeCrGKARGmgJ2DoA51IB4vi6U9joroammYaBLHK89xIMG96N338U0yvi%2BpqQoAo%2FhghShantkDZ9Ol2j%2BcpGzDfWPQsognll62WBifnlseJV%2BEoWJdlvJU3v5nzj8UUIO2mgQrYbSNM17I7X2fgcD6x5Wu36CgywiSeZvLGw0Bw8JjmxfDLORCSIs6WOGRKTJAa4jEOEXDPHmNpqxPvIpsvQ9pbx6AUd7yu5NjlwchC4uOM81sxEYI6Xm3YbuzL83F5Y9Sc3UVUq0RY%2Fkcp6rSdgMblEVfDQqxAWWXTiKrTv2%2BeRFwToC7mWjeDyMD35WMEylJAW0E%2F5NUJ5WonI%2Fw0obXPPEqIMsqrmnbgesutLVrcUxVLL0S%2BlmcbMobd7sBaRoX4f9YdHqtB3pv%2FM8814J4j4f%2BlOA41teIvKofGSlaCm8OS0JkYkSWXbYF7IlyYSUlfNaD%2F3cNWrLkQsf%2Fy8VwyPeZ8Rh3ak8T%2Fs%2BjJ9VrqFhn1zna33%2FXklakRoS%2BMjxELwcJMPyF4L0GOqUBOGupH%2F%2BGpcrr28gW2v0vkMBtHwkp4v%2B1Xi7%2FZEmUPChplRKfir%2Fp2KVFOZotfXWKl4tUvh6HdvMqaT6I7T16cK5PoDnz5VGdPJx3mXRoSwVATY7Aln2Y49Y%2FV7kwDBCk5gp%2Fjvh0%2BIBwYAm4dkKHxE4h4IxbXNrzmDVHzpYRFy5Zciz85mMQLyLMd9wOETs3OMgJBLBFViTAgb9jgCH30ncVIJbI&X-Amz-Signature=89c44a2555d3da520caef3d03f8081ae46fe36b54e67b1f528218b42411d4daa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PHNGXL5%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP9Nv2XVFvSOKGPb1T%2Bsuh%2Bnk5u8kCa8wOcd78RL%2Fy0gIgWN8PXxL9sdvjzUkRpDfpBDiTKsiUFbjK3ikWKxv9AwkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJICihiAoKUndX3EXircA6v3br1dQ%2F1KfyeokuUGSnGg2j7lfTspoQ6l33bE3RBv%2BigCk9XxIMEjRXduSatpTDgU%2BjktpTPlDj2TXW5bAb9dKILyONEMbJh65ww3Z8Fu%2FSccKZMeCrGKARGmgJ2DoA51IB4vi6U9joroammYaBLHK89xIMG96N338U0yvi%2BpqQoAo%2FhghShantkDZ9Ol2j%2BcpGzDfWPQsognll62WBifnlseJV%2BEoWJdlvJU3v5nzj8UUIO2mgQrYbSNM17I7X2fgcD6x5Wu36CgywiSeZvLGw0Bw8JjmxfDLORCSIs6WOGRKTJAa4jEOEXDPHmNpqxPvIpsvQ9pbx6AUd7yu5NjlwchC4uOM81sxEYI6Xm3YbuzL83F5Y9Sc3UVUq0RY%2Fkcp6rSdgMblEVfDQqxAWWXTiKrTv2%2BeRFwToC7mWjeDyMD35WMEylJAW0E%2F5NUJ5WonI%2Fw0obXPPEqIMsqrmnbgesutLVrcUxVLL0S%2BlmcbMobd7sBaRoX4f9YdHqtB3pv%2FM8814J4j4f%2BlOA41teIvKofGSlaCm8OS0JkYkSWXbYF7IlyYSUlfNaD%2F3cNWrLkQsf%2Fy8VwyPeZ8Rh3ak8T%2Fs%2BjJ9VrqFhn1zna33%2FXklakRoS%2BMjxELwcJMPyF4L0GOqUBOGupH%2F%2BGpcrr28gW2v0vkMBtHwkp4v%2B1Xi7%2FZEmUPChplRKfir%2Fp2KVFOZotfXWKl4tUvh6HdvMqaT6I7T16cK5PoDnz5VGdPJx3mXRoSwVATY7Aln2Y49Y%2FV7kwDBCk5gp%2Fjvh0%2BIBwYAm4dkKHxE4h4IxbXNrzmDVHzpYRFy5Zciz85mMQLyLMd9wOETs3OMgJBLBFViTAgb9jgCH30ncVIJbI&X-Amz-Signature=9633a62b8a39be93635a188809acf5110c152b2db549ecfdde9ddb72073dfa3f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PHNGXL5%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP9Nv2XVFvSOKGPb1T%2Bsuh%2Bnk5u8kCa8wOcd78RL%2Fy0gIgWN8PXxL9sdvjzUkRpDfpBDiTKsiUFbjK3ikWKxv9AwkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJICihiAoKUndX3EXircA6v3br1dQ%2F1KfyeokuUGSnGg2j7lfTspoQ6l33bE3RBv%2BigCk9XxIMEjRXduSatpTDgU%2BjktpTPlDj2TXW5bAb9dKILyONEMbJh65ww3Z8Fu%2FSccKZMeCrGKARGmgJ2DoA51IB4vi6U9joroammYaBLHK89xIMG96N338U0yvi%2BpqQoAo%2FhghShantkDZ9Ol2j%2BcpGzDfWPQsognll62WBifnlseJV%2BEoWJdlvJU3v5nzj8UUIO2mgQrYbSNM17I7X2fgcD6x5Wu36CgywiSeZvLGw0Bw8JjmxfDLORCSIs6WOGRKTJAa4jEOEXDPHmNpqxPvIpsvQ9pbx6AUd7yu5NjlwchC4uOM81sxEYI6Xm3YbuzL83F5Y9Sc3UVUq0RY%2Fkcp6rSdgMblEVfDQqxAWWXTiKrTv2%2BeRFwToC7mWjeDyMD35WMEylJAW0E%2F5NUJ5WonI%2Fw0obXPPEqIMsqrmnbgesutLVrcUxVLL0S%2BlmcbMobd7sBaRoX4f9YdHqtB3pv%2FM8814J4j4f%2BlOA41teIvKofGSlaCm8OS0JkYkSWXbYF7IlyYSUlfNaD%2F3cNWrLkQsf%2Fy8VwyPeZ8Rh3ak8T%2Fs%2BjJ9VrqFhn1zna33%2FXklakRoS%2BMjxELwcJMPyF4L0GOqUBOGupH%2F%2BGpcrr28gW2v0vkMBtHwkp4v%2B1Xi7%2FZEmUPChplRKfir%2Fp2KVFOZotfXWKl4tUvh6HdvMqaT6I7T16cK5PoDnz5VGdPJx3mXRoSwVATY7Aln2Y49Y%2FV7kwDBCk5gp%2Fjvh0%2BIBwYAm4dkKHxE4h4IxbXNrzmDVHzpYRFy5Zciz85mMQLyLMd9wOETs3OMgJBLBFViTAgb9jgCH30ncVIJbI&X-Amz-Signature=cc1e8db5c975c3b60123a10bbc447a620aa0fbb944da158d1a073392084dc7ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PHNGXL5%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP9Nv2XVFvSOKGPb1T%2Bsuh%2Bnk5u8kCa8wOcd78RL%2Fy0gIgWN8PXxL9sdvjzUkRpDfpBDiTKsiUFbjK3ikWKxv9AwkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJICihiAoKUndX3EXircA6v3br1dQ%2F1KfyeokuUGSnGg2j7lfTspoQ6l33bE3RBv%2BigCk9XxIMEjRXduSatpTDgU%2BjktpTPlDj2TXW5bAb9dKILyONEMbJh65ww3Z8Fu%2FSccKZMeCrGKARGmgJ2DoA51IB4vi6U9joroammYaBLHK89xIMG96N338U0yvi%2BpqQoAo%2FhghShantkDZ9Ol2j%2BcpGzDfWPQsognll62WBifnlseJV%2BEoWJdlvJU3v5nzj8UUIO2mgQrYbSNM17I7X2fgcD6x5Wu36CgywiSeZvLGw0Bw8JjmxfDLORCSIs6WOGRKTJAa4jEOEXDPHmNpqxPvIpsvQ9pbx6AUd7yu5NjlwchC4uOM81sxEYI6Xm3YbuzL83F5Y9Sc3UVUq0RY%2Fkcp6rSdgMblEVfDQqxAWWXTiKrTv2%2BeRFwToC7mWjeDyMD35WMEylJAW0E%2F5NUJ5WonI%2Fw0obXPPEqIMsqrmnbgesutLVrcUxVLL0S%2BlmcbMobd7sBaRoX4f9YdHqtB3pv%2FM8814J4j4f%2BlOA41teIvKofGSlaCm8OS0JkYkSWXbYF7IlyYSUlfNaD%2F3cNWrLkQsf%2Fy8VwyPeZ8Rh3ak8T%2Fs%2BjJ9VrqFhn1zna33%2FXklakRoS%2BMjxELwcJMPyF4L0GOqUBOGupH%2F%2BGpcrr28gW2v0vkMBtHwkp4v%2B1Xi7%2FZEmUPChplRKfir%2Fp2KVFOZotfXWKl4tUvh6HdvMqaT6I7T16cK5PoDnz5VGdPJx3mXRoSwVATY7Aln2Y49Y%2FV7kwDBCk5gp%2Fjvh0%2BIBwYAm4dkKHxE4h4IxbXNrzmDVHzpYRFy5Zciz85mMQLyLMd9wOETs3OMgJBLBFViTAgb9jgCH30ncVIJbI&X-Amz-Signature=c0c0ffac9eda0f65b41c50c0012c8aa7fed336625a9d4c770c5c7602e94bc62c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PHNGXL5%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP9Nv2XVFvSOKGPb1T%2Bsuh%2Bnk5u8kCa8wOcd78RL%2Fy0gIgWN8PXxL9sdvjzUkRpDfpBDiTKsiUFbjK3ikWKxv9AwkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJICihiAoKUndX3EXircA6v3br1dQ%2F1KfyeokuUGSnGg2j7lfTspoQ6l33bE3RBv%2BigCk9XxIMEjRXduSatpTDgU%2BjktpTPlDj2TXW5bAb9dKILyONEMbJh65ww3Z8Fu%2FSccKZMeCrGKARGmgJ2DoA51IB4vi6U9joroammYaBLHK89xIMG96N338U0yvi%2BpqQoAo%2FhghShantkDZ9Ol2j%2BcpGzDfWPQsognll62WBifnlseJV%2BEoWJdlvJU3v5nzj8UUIO2mgQrYbSNM17I7X2fgcD6x5Wu36CgywiSeZvLGw0Bw8JjmxfDLORCSIs6WOGRKTJAa4jEOEXDPHmNpqxPvIpsvQ9pbx6AUd7yu5NjlwchC4uOM81sxEYI6Xm3YbuzL83F5Y9Sc3UVUq0RY%2Fkcp6rSdgMblEVfDQqxAWWXTiKrTv2%2BeRFwToC7mWjeDyMD35WMEylJAW0E%2F5NUJ5WonI%2Fw0obXPPEqIMsqrmnbgesutLVrcUxVLL0S%2BlmcbMobd7sBaRoX4f9YdHqtB3pv%2FM8814J4j4f%2BlOA41teIvKofGSlaCm8OS0JkYkSWXbYF7IlyYSUlfNaD%2F3cNWrLkQsf%2Fy8VwyPeZ8Rh3ak8T%2Fs%2BjJ9VrqFhn1zna33%2FXklakRoS%2BMjxELwcJMPyF4L0GOqUBOGupH%2F%2BGpcrr28gW2v0vkMBtHwkp4v%2B1Xi7%2FZEmUPChplRKfir%2Fp2KVFOZotfXWKl4tUvh6HdvMqaT6I7T16cK5PoDnz5VGdPJx3mXRoSwVATY7Aln2Y49Y%2FV7kwDBCk5gp%2Fjvh0%2BIBwYAm4dkKHxE4h4IxbXNrzmDVHzpYRFy5Zciz85mMQLyLMd9wOETs3OMgJBLBFViTAgb9jgCH30ncVIJbI&X-Amz-Signature=0d9cb76f28e8e8bde224b1c121566ae9e1ea2189fd41b76fff1ffc3c9a3082ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
