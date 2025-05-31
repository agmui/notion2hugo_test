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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7FG7SOA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FnSxCtpnlv36vnMGpFuSyYqtGXFECsRsh4b0RzSgtngIhALkslaT461SqrCJ9OxxA9Q4XTyTaa%2FNtsturdDD0vD0QKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEvXuRSvxTtYhFs8Iq3APO%2BxIMM%2BRAcM7WwXC1DBFIjHe9Db8gxvugYqLqjZHEx0Y5GatPScrTIfneG0irWczKRWAUFio7z%2BvNT7Nkhrs9gGA%2FvZZ6UHrmnwV86Y7bkrlSvMlAZJRroEou5sGGEX6HBL03FEg%2B4Y2MVi9RDOEN2P208TYJZHPyOhaaGBWKdO05u%2FDvaUVaP8S9m%2FToZPNoNWCkvQ8J%2BID3KG3%2ByYVByk6OsOJf%2B8CDAvblLoAFkwErHO4P%2Ft5atC5CjJ8kALSOFCQj6G271BR1bl88disc0GFr9ZYi6EiK7eAnieoq9N%2F0AdAc2tZNgGLXLri05a%2FBOcQHIBmFEuI1EABcvoKWHFA7ByxrFyKQibtwJ8%2FW8QR4s9NdGLd4nN1ph3ZfzDm1CYzX6v%2B3hhp3306OrVnwd79OeytcTFD1wEPX9RjBUmXsPR4xaNCLMB2uOJFl%2FRDEPTYv5p6IlETTCT6u9oIf1kIt06pJemKdo5xYQPofaY%2BNFmBc2Suf7pvzBkNwVgzK%2Bpx6jTY9ZnFmzI3VVFKdt%2FgscLkrvqQNKQSJOu69N%2BrPCe6iKDMoAvaGToxYCtDEHOktOK3Dge6fcOfxI%2FwhnxZI1cNBbZurI8Hl1nryZvbmJpk9vxxq3J0q7TCtjerBBjqkARqZVpy%2FvXbfqgAlc%2BMh4ccOB7U5Rel910JIe3uJll2xQ5CY%2FMxh%2FiPsIA2PjBJekBBd40E0PkoyAeu%2Fz4%2FGl9rWZKZZx6m4avNHaIVhnR%2FGfANE5yO3pZlGHMVEw7FdgQdz0jtjp%2FqZLwC63av%2Bswlk8TnQYuSCv5CKPPkuG%2FA4wBnUqXOc%2BVOzLAoN%2FdUQcu9lKE5IfilRwxsAmd%2FGHKnck74P&X-Amz-Signature=cb7db9c90ab62ca562c0f704964dba1839076a9c9e74179288c34444ebd1d21f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7FG7SOA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FnSxCtpnlv36vnMGpFuSyYqtGXFECsRsh4b0RzSgtngIhALkslaT461SqrCJ9OxxA9Q4XTyTaa%2FNtsturdDD0vD0QKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEvXuRSvxTtYhFs8Iq3APO%2BxIMM%2BRAcM7WwXC1DBFIjHe9Db8gxvugYqLqjZHEx0Y5GatPScrTIfneG0irWczKRWAUFio7z%2BvNT7Nkhrs9gGA%2FvZZ6UHrmnwV86Y7bkrlSvMlAZJRroEou5sGGEX6HBL03FEg%2B4Y2MVi9RDOEN2P208TYJZHPyOhaaGBWKdO05u%2FDvaUVaP8S9m%2FToZPNoNWCkvQ8J%2BID3KG3%2ByYVByk6OsOJf%2B8CDAvblLoAFkwErHO4P%2Ft5atC5CjJ8kALSOFCQj6G271BR1bl88disc0GFr9ZYi6EiK7eAnieoq9N%2F0AdAc2tZNgGLXLri05a%2FBOcQHIBmFEuI1EABcvoKWHFA7ByxrFyKQibtwJ8%2FW8QR4s9NdGLd4nN1ph3ZfzDm1CYzX6v%2B3hhp3306OrVnwd79OeytcTFD1wEPX9RjBUmXsPR4xaNCLMB2uOJFl%2FRDEPTYv5p6IlETTCT6u9oIf1kIt06pJemKdo5xYQPofaY%2BNFmBc2Suf7pvzBkNwVgzK%2Bpx6jTY9ZnFmzI3VVFKdt%2FgscLkrvqQNKQSJOu69N%2BrPCe6iKDMoAvaGToxYCtDEHOktOK3Dge6fcOfxI%2FwhnxZI1cNBbZurI8Hl1nryZvbmJpk9vxxq3J0q7TCtjerBBjqkARqZVpy%2FvXbfqgAlc%2BMh4ccOB7U5Rel910JIe3uJll2xQ5CY%2FMxh%2FiPsIA2PjBJekBBd40E0PkoyAeu%2Fz4%2FGl9rWZKZZx6m4avNHaIVhnR%2FGfANE5yO3pZlGHMVEw7FdgQdz0jtjp%2FqZLwC63av%2Bswlk8TnQYuSCv5CKPPkuG%2FA4wBnUqXOc%2BVOzLAoN%2FdUQcu9lKE5IfilRwxsAmd%2FGHKnck74P&X-Amz-Signature=29d8cd39c35437b0ffd0f74b637f4ee30ed89a177aa961c08e88bbdcd12ba6b6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7FG7SOA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FnSxCtpnlv36vnMGpFuSyYqtGXFECsRsh4b0RzSgtngIhALkslaT461SqrCJ9OxxA9Q4XTyTaa%2FNtsturdDD0vD0QKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEvXuRSvxTtYhFs8Iq3APO%2BxIMM%2BRAcM7WwXC1DBFIjHe9Db8gxvugYqLqjZHEx0Y5GatPScrTIfneG0irWczKRWAUFio7z%2BvNT7Nkhrs9gGA%2FvZZ6UHrmnwV86Y7bkrlSvMlAZJRroEou5sGGEX6HBL03FEg%2B4Y2MVi9RDOEN2P208TYJZHPyOhaaGBWKdO05u%2FDvaUVaP8S9m%2FToZPNoNWCkvQ8J%2BID3KG3%2ByYVByk6OsOJf%2B8CDAvblLoAFkwErHO4P%2Ft5atC5CjJ8kALSOFCQj6G271BR1bl88disc0GFr9ZYi6EiK7eAnieoq9N%2F0AdAc2tZNgGLXLri05a%2FBOcQHIBmFEuI1EABcvoKWHFA7ByxrFyKQibtwJ8%2FW8QR4s9NdGLd4nN1ph3ZfzDm1CYzX6v%2B3hhp3306OrVnwd79OeytcTFD1wEPX9RjBUmXsPR4xaNCLMB2uOJFl%2FRDEPTYv5p6IlETTCT6u9oIf1kIt06pJemKdo5xYQPofaY%2BNFmBc2Suf7pvzBkNwVgzK%2Bpx6jTY9ZnFmzI3VVFKdt%2FgscLkrvqQNKQSJOu69N%2BrPCe6iKDMoAvaGToxYCtDEHOktOK3Dge6fcOfxI%2FwhnxZI1cNBbZurI8Hl1nryZvbmJpk9vxxq3J0q7TCtjerBBjqkARqZVpy%2FvXbfqgAlc%2BMh4ccOB7U5Rel910JIe3uJll2xQ5CY%2FMxh%2FiPsIA2PjBJekBBd40E0PkoyAeu%2Fz4%2FGl9rWZKZZx6m4avNHaIVhnR%2FGfANE5yO3pZlGHMVEw7FdgQdz0jtjp%2FqZLwC63av%2Bswlk8TnQYuSCv5CKPPkuG%2FA4wBnUqXOc%2BVOzLAoN%2FdUQcu9lKE5IfilRwxsAmd%2FGHKnck74P&X-Amz-Signature=5a866448f8eb9bea2aca02ca24ff4a5f26ca930e39dda98812b39b3df971f279&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7FG7SOA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FnSxCtpnlv36vnMGpFuSyYqtGXFECsRsh4b0RzSgtngIhALkslaT461SqrCJ9OxxA9Q4XTyTaa%2FNtsturdDD0vD0QKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEvXuRSvxTtYhFs8Iq3APO%2BxIMM%2BRAcM7WwXC1DBFIjHe9Db8gxvugYqLqjZHEx0Y5GatPScrTIfneG0irWczKRWAUFio7z%2BvNT7Nkhrs9gGA%2FvZZ6UHrmnwV86Y7bkrlSvMlAZJRroEou5sGGEX6HBL03FEg%2B4Y2MVi9RDOEN2P208TYJZHPyOhaaGBWKdO05u%2FDvaUVaP8S9m%2FToZPNoNWCkvQ8J%2BID3KG3%2ByYVByk6OsOJf%2B8CDAvblLoAFkwErHO4P%2Ft5atC5CjJ8kALSOFCQj6G271BR1bl88disc0GFr9ZYi6EiK7eAnieoq9N%2F0AdAc2tZNgGLXLri05a%2FBOcQHIBmFEuI1EABcvoKWHFA7ByxrFyKQibtwJ8%2FW8QR4s9NdGLd4nN1ph3ZfzDm1CYzX6v%2B3hhp3306OrVnwd79OeytcTFD1wEPX9RjBUmXsPR4xaNCLMB2uOJFl%2FRDEPTYv5p6IlETTCT6u9oIf1kIt06pJemKdo5xYQPofaY%2BNFmBc2Suf7pvzBkNwVgzK%2Bpx6jTY9ZnFmzI3VVFKdt%2FgscLkrvqQNKQSJOu69N%2BrPCe6iKDMoAvaGToxYCtDEHOktOK3Dge6fcOfxI%2FwhnxZI1cNBbZurI8Hl1nryZvbmJpk9vxxq3J0q7TCtjerBBjqkARqZVpy%2FvXbfqgAlc%2BMh4ccOB7U5Rel910JIe3uJll2xQ5CY%2FMxh%2FiPsIA2PjBJekBBd40E0PkoyAeu%2Fz4%2FGl9rWZKZZx6m4avNHaIVhnR%2FGfANE5yO3pZlGHMVEw7FdgQdz0jtjp%2FqZLwC63av%2Bswlk8TnQYuSCv5CKPPkuG%2FA4wBnUqXOc%2BVOzLAoN%2FdUQcu9lKE5IfilRwxsAmd%2FGHKnck74P&X-Amz-Signature=089837de37ef37e8a38cc814037abe02f6a3bdf59773971ca105e76e31a54a76&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7FG7SOA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FnSxCtpnlv36vnMGpFuSyYqtGXFECsRsh4b0RzSgtngIhALkslaT461SqrCJ9OxxA9Q4XTyTaa%2FNtsturdDD0vD0QKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEvXuRSvxTtYhFs8Iq3APO%2BxIMM%2BRAcM7WwXC1DBFIjHe9Db8gxvugYqLqjZHEx0Y5GatPScrTIfneG0irWczKRWAUFio7z%2BvNT7Nkhrs9gGA%2FvZZ6UHrmnwV86Y7bkrlSvMlAZJRroEou5sGGEX6HBL03FEg%2B4Y2MVi9RDOEN2P208TYJZHPyOhaaGBWKdO05u%2FDvaUVaP8S9m%2FToZPNoNWCkvQ8J%2BID3KG3%2ByYVByk6OsOJf%2B8CDAvblLoAFkwErHO4P%2Ft5atC5CjJ8kALSOFCQj6G271BR1bl88disc0GFr9ZYi6EiK7eAnieoq9N%2F0AdAc2tZNgGLXLri05a%2FBOcQHIBmFEuI1EABcvoKWHFA7ByxrFyKQibtwJ8%2FW8QR4s9NdGLd4nN1ph3ZfzDm1CYzX6v%2B3hhp3306OrVnwd79OeytcTFD1wEPX9RjBUmXsPR4xaNCLMB2uOJFl%2FRDEPTYv5p6IlETTCT6u9oIf1kIt06pJemKdo5xYQPofaY%2BNFmBc2Suf7pvzBkNwVgzK%2Bpx6jTY9ZnFmzI3VVFKdt%2FgscLkrvqQNKQSJOu69N%2BrPCe6iKDMoAvaGToxYCtDEHOktOK3Dge6fcOfxI%2FwhnxZI1cNBbZurI8Hl1nryZvbmJpk9vxxq3J0q7TCtjerBBjqkARqZVpy%2FvXbfqgAlc%2BMh4ccOB7U5Rel910JIe3uJll2xQ5CY%2FMxh%2FiPsIA2PjBJekBBd40E0PkoyAeu%2Fz4%2FGl9rWZKZZx6m4avNHaIVhnR%2FGfANE5yO3pZlGHMVEw7FdgQdz0jtjp%2FqZLwC63av%2Bswlk8TnQYuSCv5CKPPkuG%2FA4wBnUqXOc%2BVOzLAoN%2FdUQcu9lKE5IfilRwxsAmd%2FGHKnck74P&X-Amz-Signature=95fd4760e003967609ca95dd67e4b0ad01f36af1f7bbbd4f8779cdb5771d7a61&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
