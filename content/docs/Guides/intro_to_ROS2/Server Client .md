---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK35UCYH%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDHBmyetVAeVJldtYTTot3R774Wco8NgR%2BrwfBWEDVkHQIhAMyzSUXBaj5z8LGVgaxDCccioFKcIUNaK2UIgAz%2FuahJKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B33eUm2u0fO84gNEq3APZgOpQN6CIw4%2BeDg8wxBNym%2Fw54PZQypTfJmZ%2Fs9gL%2BZ6VbW9q0FQaFAMzGWxfYsnjZD5ARMYgz0FeCWLF5onP11srqZVPQaeVGrjZVkmwzw%2FZd4vbKbxV431u2aEQYjJP83AWc09leHwPvEqwGajxZRVqBe4XZm5CYqokfJK6BHqYDRdVwionZa2Bcao2G%2BtZU8txeAlVMspksBCoUL%2B%2BO3AXs%2Fn4xf3AVAA20kLkyPlqaeF%2BT%2F3u0swxUng2SheQHzABtWhdoQByJ0k0Dehl%2FTF1zl45%2FVcvdJl2WreggGf2AJW4uxVUULTfzD4cMzYY%2FJy3UhTWz6rmUacktROawmUs%2FUK3LuiALbVwZknmQHERsML8tirRStagvj2CUlNkjuRmmm4WUHxtFAocxsKFWqu4I9NKGGIUh3LoHH%2B9XDiAj1YYwJro90PqWV%2BYzbql5%2Bmz%2FAvt%2FMVRyPoHJcOaUoRKv3AVj49RJR%2BNG2ynQHH9w%2BAN3%2Bk%2FWmG6QSIdRbtSJkyYEzVjrdAFuXHFwOblXOu%2Fc3G1O4OTq78kC%2BQMTEmgWoK0KCISby2Pp%2FLest91slaCqqYLKHqyQ0gYEgcXE8r%2BJFaaKlZV3TncjFli2Ka47nJtsXaJtvVLtTDR8KLGBjqkAWgzi1CpgCUaELuBA0Zi6xkBkJkQKW7rCr4ZYvmib%2BdczprVm%2FXrka%2Fz05xO%2FnBb8USaz23DW0xj5yonGSt5huFTYSj3dkVGWN71NasAoKtkxNQdPEjU2FV%2B3WAUzgImJFbe4jUyHRAJLFvQlxif0Vx94k2%2BMRilAkFWaMxCLdqbmcfqjsFq%2FvMVBE9AmDDhwGs%2FxIyda1IA4DfgJihez1G946JG&X-Amz-Signature=51ecfd886e3d1d7af4ee8bba63ded0054b3d5f06bac66b8cb849895ffd5d21d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK35UCYH%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDHBmyetVAeVJldtYTTot3R774Wco8NgR%2BrwfBWEDVkHQIhAMyzSUXBaj5z8LGVgaxDCccioFKcIUNaK2UIgAz%2FuahJKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B33eUm2u0fO84gNEq3APZgOpQN6CIw4%2BeDg8wxBNym%2Fw54PZQypTfJmZ%2Fs9gL%2BZ6VbW9q0FQaFAMzGWxfYsnjZD5ARMYgz0FeCWLF5onP11srqZVPQaeVGrjZVkmwzw%2FZd4vbKbxV431u2aEQYjJP83AWc09leHwPvEqwGajxZRVqBe4XZm5CYqokfJK6BHqYDRdVwionZa2Bcao2G%2BtZU8txeAlVMspksBCoUL%2B%2BO3AXs%2Fn4xf3AVAA20kLkyPlqaeF%2BT%2F3u0swxUng2SheQHzABtWhdoQByJ0k0Dehl%2FTF1zl45%2FVcvdJl2WreggGf2AJW4uxVUULTfzD4cMzYY%2FJy3UhTWz6rmUacktROawmUs%2FUK3LuiALbVwZknmQHERsML8tirRStagvj2CUlNkjuRmmm4WUHxtFAocxsKFWqu4I9NKGGIUh3LoHH%2B9XDiAj1YYwJro90PqWV%2BYzbql5%2Bmz%2FAvt%2FMVRyPoHJcOaUoRKv3AVj49RJR%2BNG2ynQHH9w%2BAN3%2Bk%2FWmG6QSIdRbtSJkyYEzVjrdAFuXHFwOblXOu%2Fc3G1O4OTq78kC%2BQMTEmgWoK0KCISby2Pp%2FLest91slaCqqYLKHqyQ0gYEgcXE8r%2BJFaaKlZV3TncjFli2Ka47nJtsXaJtvVLtTDR8KLGBjqkAWgzi1CpgCUaELuBA0Zi6xkBkJkQKW7rCr4ZYvmib%2BdczprVm%2FXrka%2Fz05xO%2FnBb8USaz23DW0xj5yonGSt5huFTYSj3dkVGWN71NasAoKtkxNQdPEjU2FV%2B3WAUzgImJFbe4jUyHRAJLFvQlxif0Vx94k2%2BMRilAkFWaMxCLdqbmcfqjsFq%2FvMVBE9AmDDhwGs%2FxIyda1IA4DfgJihez1G946JG&X-Amz-Signature=bac4804d58cee5f145d92c1138e8dca14bb5763c8ba617ec3659bf1a751a4255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK35UCYH%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDHBmyetVAeVJldtYTTot3R774Wco8NgR%2BrwfBWEDVkHQIhAMyzSUXBaj5z8LGVgaxDCccioFKcIUNaK2UIgAz%2FuahJKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B33eUm2u0fO84gNEq3APZgOpQN6CIw4%2BeDg8wxBNym%2Fw54PZQypTfJmZ%2Fs9gL%2BZ6VbW9q0FQaFAMzGWxfYsnjZD5ARMYgz0FeCWLF5onP11srqZVPQaeVGrjZVkmwzw%2FZd4vbKbxV431u2aEQYjJP83AWc09leHwPvEqwGajxZRVqBe4XZm5CYqokfJK6BHqYDRdVwionZa2Bcao2G%2BtZU8txeAlVMspksBCoUL%2B%2BO3AXs%2Fn4xf3AVAA20kLkyPlqaeF%2BT%2F3u0swxUng2SheQHzABtWhdoQByJ0k0Dehl%2FTF1zl45%2FVcvdJl2WreggGf2AJW4uxVUULTfzD4cMzYY%2FJy3UhTWz6rmUacktROawmUs%2FUK3LuiALbVwZknmQHERsML8tirRStagvj2CUlNkjuRmmm4WUHxtFAocxsKFWqu4I9NKGGIUh3LoHH%2B9XDiAj1YYwJro90PqWV%2BYzbql5%2Bmz%2FAvt%2FMVRyPoHJcOaUoRKv3AVj49RJR%2BNG2ynQHH9w%2BAN3%2Bk%2FWmG6QSIdRbtSJkyYEzVjrdAFuXHFwOblXOu%2Fc3G1O4OTq78kC%2BQMTEmgWoK0KCISby2Pp%2FLest91slaCqqYLKHqyQ0gYEgcXE8r%2BJFaaKlZV3TncjFli2Ka47nJtsXaJtvVLtTDR8KLGBjqkAWgzi1CpgCUaELuBA0Zi6xkBkJkQKW7rCr4ZYvmib%2BdczprVm%2FXrka%2Fz05xO%2FnBb8USaz23DW0xj5yonGSt5huFTYSj3dkVGWN71NasAoKtkxNQdPEjU2FV%2B3WAUzgImJFbe4jUyHRAJLFvQlxif0Vx94k2%2BMRilAkFWaMxCLdqbmcfqjsFq%2FvMVBE9AmDDhwGs%2FxIyda1IA4DfgJihez1G946JG&X-Amz-Signature=56ecf1a742e083fef520688ca7241bded8c5b63438ef867dde95abc5111af4c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK35UCYH%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDHBmyetVAeVJldtYTTot3R774Wco8NgR%2BrwfBWEDVkHQIhAMyzSUXBaj5z8LGVgaxDCccioFKcIUNaK2UIgAz%2FuahJKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B33eUm2u0fO84gNEq3APZgOpQN6CIw4%2BeDg8wxBNym%2Fw54PZQypTfJmZ%2Fs9gL%2BZ6VbW9q0FQaFAMzGWxfYsnjZD5ARMYgz0FeCWLF5onP11srqZVPQaeVGrjZVkmwzw%2FZd4vbKbxV431u2aEQYjJP83AWc09leHwPvEqwGajxZRVqBe4XZm5CYqokfJK6BHqYDRdVwionZa2Bcao2G%2BtZU8txeAlVMspksBCoUL%2B%2BO3AXs%2Fn4xf3AVAA20kLkyPlqaeF%2BT%2F3u0swxUng2SheQHzABtWhdoQByJ0k0Dehl%2FTF1zl45%2FVcvdJl2WreggGf2AJW4uxVUULTfzD4cMzYY%2FJy3UhTWz6rmUacktROawmUs%2FUK3LuiALbVwZknmQHERsML8tirRStagvj2CUlNkjuRmmm4WUHxtFAocxsKFWqu4I9NKGGIUh3LoHH%2B9XDiAj1YYwJro90PqWV%2BYzbql5%2Bmz%2FAvt%2FMVRyPoHJcOaUoRKv3AVj49RJR%2BNG2ynQHH9w%2BAN3%2Bk%2FWmG6QSIdRbtSJkyYEzVjrdAFuXHFwOblXOu%2Fc3G1O4OTq78kC%2BQMTEmgWoK0KCISby2Pp%2FLest91slaCqqYLKHqyQ0gYEgcXE8r%2BJFaaKlZV3TncjFli2Ka47nJtsXaJtvVLtTDR8KLGBjqkAWgzi1CpgCUaELuBA0Zi6xkBkJkQKW7rCr4ZYvmib%2BdczprVm%2FXrka%2Fz05xO%2FnBb8USaz23DW0xj5yonGSt5huFTYSj3dkVGWN71NasAoKtkxNQdPEjU2FV%2B3WAUzgImJFbe4jUyHRAJLFvQlxif0Vx94k2%2BMRilAkFWaMxCLdqbmcfqjsFq%2FvMVBE9AmDDhwGs%2FxIyda1IA4DfgJihez1G946JG&X-Amz-Signature=a331322f7622bfe9be8e5403d3055222afabc0ce203bd399e659eb45d1465379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK35UCYH%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDHBmyetVAeVJldtYTTot3R774Wco8NgR%2BrwfBWEDVkHQIhAMyzSUXBaj5z8LGVgaxDCccioFKcIUNaK2UIgAz%2FuahJKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B33eUm2u0fO84gNEq3APZgOpQN6CIw4%2BeDg8wxBNym%2Fw54PZQypTfJmZ%2Fs9gL%2BZ6VbW9q0FQaFAMzGWxfYsnjZD5ARMYgz0FeCWLF5onP11srqZVPQaeVGrjZVkmwzw%2FZd4vbKbxV431u2aEQYjJP83AWc09leHwPvEqwGajxZRVqBe4XZm5CYqokfJK6BHqYDRdVwionZa2Bcao2G%2BtZU8txeAlVMspksBCoUL%2B%2BO3AXs%2Fn4xf3AVAA20kLkyPlqaeF%2BT%2F3u0swxUng2SheQHzABtWhdoQByJ0k0Dehl%2FTF1zl45%2FVcvdJl2WreggGf2AJW4uxVUULTfzD4cMzYY%2FJy3UhTWz6rmUacktROawmUs%2FUK3LuiALbVwZknmQHERsML8tirRStagvj2CUlNkjuRmmm4WUHxtFAocxsKFWqu4I9NKGGIUh3LoHH%2B9XDiAj1YYwJro90PqWV%2BYzbql5%2Bmz%2FAvt%2FMVRyPoHJcOaUoRKv3AVj49RJR%2BNG2ynQHH9w%2BAN3%2Bk%2FWmG6QSIdRbtSJkyYEzVjrdAFuXHFwOblXOu%2Fc3G1O4OTq78kC%2BQMTEmgWoK0KCISby2Pp%2FLest91slaCqqYLKHqyQ0gYEgcXE8r%2BJFaaKlZV3TncjFli2Ka47nJtsXaJtvVLtTDR8KLGBjqkAWgzi1CpgCUaELuBA0Zi6xkBkJkQKW7rCr4ZYvmib%2BdczprVm%2FXrka%2Fz05xO%2FnBb8USaz23DW0xj5yonGSt5huFTYSj3dkVGWN71NasAoKtkxNQdPEjU2FV%2B3WAUzgImJFbe4jUyHRAJLFvQlxif0Vx94k2%2BMRilAkFWaMxCLdqbmcfqjsFq%2FvMVBE9AmDDhwGs%2FxIyda1IA4DfgJihez1G946JG&X-Amz-Signature=0d8d7424a5742f20b4c27e8caaf693d4d9a66b822af7ba0ca64127c0810810c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
