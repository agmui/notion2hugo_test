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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU3AP5IH%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICJPbpncxKwrsld0l4Ikpj1iTp2n07wFYCPiXDdQqChTAiEAkLBZ2nEjAAR77dKk4Cg1dml8k5Zgj6HVkvgbpzrXDcEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEE4WhOtcJZXhBhlEircA8XOkvi1MK0rPiAcRwwmEOzqErbmP4dv5eiAHG1Nui4fS6F9rDNEmrwqZoR7XArlrjrRPpWrRZUOoFhzqb5D69WlmE%2FWBt%2B5%2BKhkHhldBIvJnZSTTzc1zOSLyxODsmzwr20As8lxNTzzX3iF3JVcOYrvgRUUMCBBpKggmgZdQpxLlqXxMBg7n26azZ1LeT4rDc80Mwh3ZAaASYQkBMOI5fHlQ5RQRPHf6NRiss%2B%2FxwTvui%2BLzQlB9Xiy4Ai43lJud%2B%2F6yRHHWeWeZ9krog%2BfJSKeLntat64GDZd0gXhRIvFPWTISeXdlGM5MkfGYuI%2FB7i5q7NWjCCKiuCnq1Q3L5i%2BMp4S8T%2FAKnFEBUS9wxOuUt1YEQqwKmd36Gz7ODuLcXIvpkyX7caRKjkA8oMuM4EFm4JXMAJYf8ziWAjU8KYMZifBUIMAzA%2BFTabaitQTZFCfYM942xwtYrOkaR%2B5AyLwt1teL5Q5sRjwCAcBpT4QAZVRe0dhjBMQuZXJLuehxzm9kr6%2FNOPkBjJEiU7EMx%2Fpfk8oV6CYCsGZWwF06eARl6qhOQXVtYECR39tjhJWVIGepU1Ju9IFiNqWJ%2F%2B11pkf3ZvLhAKvFt6Kw7lG5F2DTRZTaNEHttcRzo0p%2FMIy%2BnsMGOqUBve4x4%2F%2B11%2F5QzzaO8X0Jy7PSWZzCxxrUFPmBopNUdg4uVPwwvHX2cJo5zvbSP3%2BXTYtgTM0LJ9oNct2%2B7L2tlQxHaEFZ15mJyHA58TMXaSbxWJCB%2FnNhGtEwqfnnVPpDzokHnAZ7BlKedWQ7Ngpci45l5XWWZaOzdBHLyuab2INEAegBRJygIMp3ErtTa2BI4mnDhynfEH0GNQ0p9AugmHW4NqYA&X-Amz-Signature=decb269223a4bb7d32b2f246299c9dbdd45a489d7a040d5b68f6b675e3909454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU3AP5IH%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICJPbpncxKwrsld0l4Ikpj1iTp2n07wFYCPiXDdQqChTAiEAkLBZ2nEjAAR77dKk4Cg1dml8k5Zgj6HVkvgbpzrXDcEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEE4WhOtcJZXhBhlEircA8XOkvi1MK0rPiAcRwwmEOzqErbmP4dv5eiAHG1Nui4fS6F9rDNEmrwqZoR7XArlrjrRPpWrRZUOoFhzqb5D69WlmE%2FWBt%2B5%2BKhkHhldBIvJnZSTTzc1zOSLyxODsmzwr20As8lxNTzzX3iF3JVcOYrvgRUUMCBBpKggmgZdQpxLlqXxMBg7n26azZ1LeT4rDc80Mwh3ZAaASYQkBMOI5fHlQ5RQRPHf6NRiss%2B%2FxwTvui%2BLzQlB9Xiy4Ai43lJud%2B%2F6yRHHWeWeZ9krog%2BfJSKeLntat64GDZd0gXhRIvFPWTISeXdlGM5MkfGYuI%2FB7i5q7NWjCCKiuCnq1Q3L5i%2BMp4S8T%2FAKnFEBUS9wxOuUt1YEQqwKmd36Gz7ODuLcXIvpkyX7caRKjkA8oMuM4EFm4JXMAJYf8ziWAjU8KYMZifBUIMAzA%2BFTabaitQTZFCfYM942xwtYrOkaR%2B5AyLwt1teL5Q5sRjwCAcBpT4QAZVRe0dhjBMQuZXJLuehxzm9kr6%2FNOPkBjJEiU7EMx%2Fpfk8oV6CYCsGZWwF06eARl6qhOQXVtYECR39tjhJWVIGepU1Ju9IFiNqWJ%2F%2B11pkf3ZvLhAKvFt6Kw7lG5F2DTRZTaNEHttcRzo0p%2FMIy%2BnsMGOqUBve4x4%2F%2B11%2F5QzzaO8X0Jy7PSWZzCxxrUFPmBopNUdg4uVPwwvHX2cJo5zvbSP3%2BXTYtgTM0LJ9oNct2%2B7L2tlQxHaEFZ15mJyHA58TMXaSbxWJCB%2FnNhGtEwqfnnVPpDzokHnAZ7BlKedWQ7Ngpci45l5XWWZaOzdBHLyuab2INEAegBRJygIMp3ErtTa2BI4mnDhynfEH0GNQ0p9AugmHW4NqYA&X-Amz-Signature=c11751f2c04dc1cd1a68083aa0bd5682e436df325f021f9794f146b39c42f56a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU3AP5IH%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICJPbpncxKwrsld0l4Ikpj1iTp2n07wFYCPiXDdQqChTAiEAkLBZ2nEjAAR77dKk4Cg1dml8k5Zgj6HVkvgbpzrXDcEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEE4WhOtcJZXhBhlEircA8XOkvi1MK0rPiAcRwwmEOzqErbmP4dv5eiAHG1Nui4fS6F9rDNEmrwqZoR7XArlrjrRPpWrRZUOoFhzqb5D69WlmE%2FWBt%2B5%2BKhkHhldBIvJnZSTTzc1zOSLyxODsmzwr20As8lxNTzzX3iF3JVcOYrvgRUUMCBBpKggmgZdQpxLlqXxMBg7n26azZ1LeT4rDc80Mwh3ZAaASYQkBMOI5fHlQ5RQRPHf6NRiss%2B%2FxwTvui%2BLzQlB9Xiy4Ai43lJud%2B%2F6yRHHWeWeZ9krog%2BfJSKeLntat64GDZd0gXhRIvFPWTISeXdlGM5MkfGYuI%2FB7i5q7NWjCCKiuCnq1Q3L5i%2BMp4S8T%2FAKnFEBUS9wxOuUt1YEQqwKmd36Gz7ODuLcXIvpkyX7caRKjkA8oMuM4EFm4JXMAJYf8ziWAjU8KYMZifBUIMAzA%2BFTabaitQTZFCfYM942xwtYrOkaR%2B5AyLwt1teL5Q5sRjwCAcBpT4QAZVRe0dhjBMQuZXJLuehxzm9kr6%2FNOPkBjJEiU7EMx%2Fpfk8oV6CYCsGZWwF06eARl6qhOQXVtYECR39tjhJWVIGepU1Ju9IFiNqWJ%2F%2B11pkf3ZvLhAKvFt6Kw7lG5F2DTRZTaNEHttcRzo0p%2FMIy%2BnsMGOqUBve4x4%2F%2B11%2F5QzzaO8X0Jy7PSWZzCxxrUFPmBopNUdg4uVPwwvHX2cJo5zvbSP3%2BXTYtgTM0LJ9oNct2%2B7L2tlQxHaEFZ15mJyHA58TMXaSbxWJCB%2FnNhGtEwqfnnVPpDzokHnAZ7BlKedWQ7Ngpci45l5XWWZaOzdBHLyuab2INEAegBRJygIMp3ErtTa2BI4mnDhynfEH0GNQ0p9AugmHW4NqYA&X-Amz-Signature=3987d2b323a306b60e045067c2a27fb7f212ebfa4f58a611822b9532dc0e1a1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU3AP5IH%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICJPbpncxKwrsld0l4Ikpj1iTp2n07wFYCPiXDdQqChTAiEAkLBZ2nEjAAR77dKk4Cg1dml8k5Zgj6HVkvgbpzrXDcEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEE4WhOtcJZXhBhlEircA8XOkvi1MK0rPiAcRwwmEOzqErbmP4dv5eiAHG1Nui4fS6F9rDNEmrwqZoR7XArlrjrRPpWrRZUOoFhzqb5D69WlmE%2FWBt%2B5%2BKhkHhldBIvJnZSTTzc1zOSLyxODsmzwr20As8lxNTzzX3iF3JVcOYrvgRUUMCBBpKggmgZdQpxLlqXxMBg7n26azZ1LeT4rDc80Mwh3ZAaASYQkBMOI5fHlQ5RQRPHf6NRiss%2B%2FxwTvui%2BLzQlB9Xiy4Ai43lJud%2B%2F6yRHHWeWeZ9krog%2BfJSKeLntat64GDZd0gXhRIvFPWTISeXdlGM5MkfGYuI%2FB7i5q7NWjCCKiuCnq1Q3L5i%2BMp4S8T%2FAKnFEBUS9wxOuUt1YEQqwKmd36Gz7ODuLcXIvpkyX7caRKjkA8oMuM4EFm4JXMAJYf8ziWAjU8KYMZifBUIMAzA%2BFTabaitQTZFCfYM942xwtYrOkaR%2B5AyLwt1teL5Q5sRjwCAcBpT4QAZVRe0dhjBMQuZXJLuehxzm9kr6%2FNOPkBjJEiU7EMx%2Fpfk8oV6CYCsGZWwF06eARl6qhOQXVtYECR39tjhJWVIGepU1Ju9IFiNqWJ%2F%2B11pkf3ZvLhAKvFt6Kw7lG5F2DTRZTaNEHttcRzo0p%2FMIy%2BnsMGOqUBve4x4%2F%2B11%2F5QzzaO8X0Jy7PSWZzCxxrUFPmBopNUdg4uVPwwvHX2cJo5zvbSP3%2BXTYtgTM0LJ9oNct2%2B7L2tlQxHaEFZ15mJyHA58TMXaSbxWJCB%2FnNhGtEwqfnnVPpDzokHnAZ7BlKedWQ7Ngpci45l5XWWZaOzdBHLyuab2INEAegBRJygIMp3ErtTa2BI4mnDhynfEH0GNQ0p9AugmHW4NqYA&X-Amz-Signature=22c1880de18a2a1a3f5fdf7dd974200a15fa11e152fb3d7f6f779f7f44680b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU3AP5IH%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICJPbpncxKwrsld0l4Ikpj1iTp2n07wFYCPiXDdQqChTAiEAkLBZ2nEjAAR77dKk4Cg1dml8k5Zgj6HVkvgbpzrXDcEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEE4WhOtcJZXhBhlEircA8XOkvi1MK0rPiAcRwwmEOzqErbmP4dv5eiAHG1Nui4fS6F9rDNEmrwqZoR7XArlrjrRPpWrRZUOoFhzqb5D69WlmE%2FWBt%2B5%2BKhkHhldBIvJnZSTTzc1zOSLyxODsmzwr20As8lxNTzzX3iF3JVcOYrvgRUUMCBBpKggmgZdQpxLlqXxMBg7n26azZ1LeT4rDc80Mwh3ZAaASYQkBMOI5fHlQ5RQRPHf6NRiss%2B%2FxwTvui%2BLzQlB9Xiy4Ai43lJud%2B%2F6yRHHWeWeZ9krog%2BfJSKeLntat64GDZd0gXhRIvFPWTISeXdlGM5MkfGYuI%2FB7i5q7NWjCCKiuCnq1Q3L5i%2BMp4S8T%2FAKnFEBUS9wxOuUt1YEQqwKmd36Gz7ODuLcXIvpkyX7caRKjkA8oMuM4EFm4JXMAJYf8ziWAjU8KYMZifBUIMAzA%2BFTabaitQTZFCfYM942xwtYrOkaR%2B5AyLwt1teL5Q5sRjwCAcBpT4QAZVRe0dhjBMQuZXJLuehxzm9kr6%2FNOPkBjJEiU7EMx%2Fpfk8oV6CYCsGZWwF06eARl6qhOQXVtYECR39tjhJWVIGepU1Ju9IFiNqWJ%2F%2B11pkf3ZvLhAKvFt6Kw7lG5F2DTRZTaNEHttcRzo0p%2FMIy%2BnsMGOqUBve4x4%2F%2B11%2F5QzzaO8X0Jy7PSWZzCxxrUFPmBopNUdg4uVPwwvHX2cJo5zvbSP3%2BXTYtgTM0LJ9oNct2%2B7L2tlQxHaEFZ15mJyHA58TMXaSbxWJCB%2FnNhGtEwqfnnVPpDzokHnAZ7BlKedWQ7Ngpci45l5XWWZaOzdBHLyuab2INEAegBRJygIMp3ErtTa2BI4mnDhynfEH0GNQ0p9AugmHW4NqYA&X-Amz-Signature=1b703c11cd7aa5e1f7bb717d889efcf7a2f96c05738479009b9533652eb4e5f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
