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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5MEXVM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC6yoHIc%2FRjc3TJxC7U8cN9pd1hn3ZYXL74xpRsI2%2FsFgIgFo0Jg3T3FyElIBl3QM752hwM3D2Jt5aGxMcM0WRRbP4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDRWUI1XMuKfVtLUNyrcAzMcGHKUut3oxhzwhyVcgAzopUknoJDnotWUaK4kn1jeEUOhAMCRIjYNSOp9NcoNgu22%2FwOU9%2BstMI6bph0YkuMF5GmrxCyUbseckiCGU64KP5vpwofqsadELtTTkB97irbDBRrVnoedywOhpzJVk0SY5xoN1jSB5fWw7df40RiWroYlET3oCv7MjSbtVrHUxxVuTousWDN3wX3gQWmGiSsK%2BVhKgslTsgdRsSWfzc8wbaPMwHaLfxxTKxJ7AgASZ5MddLai%2FnSPEd341t0KyvIreCLOp7wY%2B7lB9NGhT1WQAOeNXTO9NLRv0efjjc3Y1ck%2FcwLdBzL%2FEZifoz3kul0rYaOU4nYWtJAbn%2Bfo9xQ1%2BlRvzTdgyi1zrdJX3RD97HCjDVLJkxw6f9s9NSRwOsd%2FYZRk%2FDk7QYVb4taLF9FUBTE28ykXegqqduFgmJ6lgBkdpq9UkUh3sfj6h2NymK869DxSakb3ZjnSrmmZjIIoqtJna8zLtevuwrwyWFJeMyzI1%2FvurTh3DDCfvVf8XeIZN%2FVWaWrL%2BwSdkZoVRpppgBWPxCiojP%2F99LB1QR18relLaZhryBY8l2%2BcGm14uREBHiWxL2afkdzzRloWn4qEEx62vnR0XaiErdAHMMef%2BMQGOqUB6OayUo%2FqbT%2FeFwN6AwAiTA3L3zqXHchXVPcUyCT6CA9bO9Dc0iRPN4xpWOb3tcVlvdYBY2VSnKoksVMy%2BcEybYUxbG%2FJ%2FlfvxN4v2lix5bUyh38%2B%2BbwGQVV14%2BXKdeO8TjCG5lDNJMwO3y%2BP3UtCyTJHI0jMwOmzjvMl6p3%2BGM1syXkNy91Nw%2FNN0k3SvnQFAfAhyb5kd%2BJA%2BO2U5d2o3gJ3L4pW&X-Amz-Signature=bdc6b1590a54dacf6801d57de03a4e050d9b47855fa9509ef4dd28ebd1d99659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5MEXVM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC6yoHIc%2FRjc3TJxC7U8cN9pd1hn3ZYXL74xpRsI2%2FsFgIgFo0Jg3T3FyElIBl3QM752hwM3D2Jt5aGxMcM0WRRbP4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDRWUI1XMuKfVtLUNyrcAzMcGHKUut3oxhzwhyVcgAzopUknoJDnotWUaK4kn1jeEUOhAMCRIjYNSOp9NcoNgu22%2FwOU9%2BstMI6bph0YkuMF5GmrxCyUbseckiCGU64KP5vpwofqsadELtTTkB97irbDBRrVnoedywOhpzJVk0SY5xoN1jSB5fWw7df40RiWroYlET3oCv7MjSbtVrHUxxVuTousWDN3wX3gQWmGiSsK%2BVhKgslTsgdRsSWfzc8wbaPMwHaLfxxTKxJ7AgASZ5MddLai%2FnSPEd341t0KyvIreCLOp7wY%2B7lB9NGhT1WQAOeNXTO9NLRv0efjjc3Y1ck%2FcwLdBzL%2FEZifoz3kul0rYaOU4nYWtJAbn%2Bfo9xQ1%2BlRvzTdgyi1zrdJX3RD97HCjDVLJkxw6f9s9NSRwOsd%2FYZRk%2FDk7QYVb4taLF9FUBTE28ykXegqqduFgmJ6lgBkdpq9UkUh3sfj6h2NymK869DxSakb3ZjnSrmmZjIIoqtJna8zLtevuwrwyWFJeMyzI1%2FvurTh3DDCfvVf8XeIZN%2FVWaWrL%2BwSdkZoVRpppgBWPxCiojP%2F99LB1QR18relLaZhryBY8l2%2BcGm14uREBHiWxL2afkdzzRloWn4qEEx62vnR0XaiErdAHMMef%2BMQGOqUB6OayUo%2FqbT%2FeFwN6AwAiTA3L3zqXHchXVPcUyCT6CA9bO9Dc0iRPN4xpWOb3tcVlvdYBY2VSnKoksVMy%2BcEybYUxbG%2FJ%2FlfvxN4v2lix5bUyh38%2B%2BbwGQVV14%2BXKdeO8TjCG5lDNJMwO3y%2BP3UtCyTJHI0jMwOmzjvMl6p3%2BGM1syXkNy91Nw%2FNN0k3SvnQFAfAhyb5kd%2BJA%2BO2U5d2o3gJ3L4pW&X-Amz-Signature=403b4de30f8548abd6865c003b6a22e3ac74cc37267f85fd9d6ec2e76b9fd541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5MEXVM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC6yoHIc%2FRjc3TJxC7U8cN9pd1hn3ZYXL74xpRsI2%2FsFgIgFo0Jg3T3FyElIBl3QM752hwM3D2Jt5aGxMcM0WRRbP4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDRWUI1XMuKfVtLUNyrcAzMcGHKUut3oxhzwhyVcgAzopUknoJDnotWUaK4kn1jeEUOhAMCRIjYNSOp9NcoNgu22%2FwOU9%2BstMI6bph0YkuMF5GmrxCyUbseckiCGU64KP5vpwofqsadELtTTkB97irbDBRrVnoedywOhpzJVk0SY5xoN1jSB5fWw7df40RiWroYlET3oCv7MjSbtVrHUxxVuTousWDN3wX3gQWmGiSsK%2BVhKgslTsgdRsSWfzc8wbaPMwHaLfxxTKxJ7AgASZ5MddLai%2FnSPEd341t0KyvIreCLOp7wY%2B7lB9NGhT1WQAOeNXTO9NLRv0efjjc3Y1ck%2FcwLdBzL%2FEZifoz3kul0rYaOU4nYWtJAbn%2Bfo9xQ1%2BlRvzTdgyi1zrdJX3RD97HCjDVLJkxw6f9s9NSRwOsd%2FYZRk%2FDk7QYVb4taLF9FUBTE28ykXegqqduFgmJ6lgBkdpq9UkUh3sfj6h2NymK869DxSakb3ZjnSrmmZjIIoqtJna8zLtevuwrwyWFJeMyzI1%2FvurTh3DDCfvVf8XeIZN%2FVWaWrL%2BwSdkZoVRpppgBWPxCiojP%2F99LB1QR18relLaZhryBY8l2%2BcGm14uREBHiWxL2afkdzzRloWn4qEEx62vnR0XaiErdAHMMef%2BMQGOqUB6OayUo%2FqbT%2FeFwN6AwAiTA3L3zqXHchXVPcUyCT6CA9bO9Dc0iRPN4xpWOb3tcVlvdYBY2VSnKoksVMy%2BcEybYUxbG%2FJ%2FlfvxN4v2lix5bUyh38%2B%2BbwGQVV14%2BXKdeO8TjCG5lDNJMwO3y%2BP3UtCyTJHI0jMwOmzjvMl6p3%2BGM1syXkNy91Nw%2FNN0k3SvnQFAfAhyb5kd%2BJA%2BO2U5d2o3gJ3L4pW&X-Amz-Signature=46ef352200ad7f493864e61c651ecfa3487bc5a9abb64630cd9c58c130316792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5MEXVM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC6yoHIc%2FRjc3TJxC7U8cN9pd1hn3ZYXL74xpRsI2%2FsFgIgFo0Jg3T3FyElIBl3QM752hwM3D2Jt5aGxMcM0WRRbP4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDRWUI1XMuKfVtLUNyrcAzMcGHKUut3oxhzwhyVcgAzopUknoJDnotWUaK4kn1jeEUOhAMCRIjYNSOp9NcoNgu22%2FwOU9%2BstMI6bph0YkuMF5GmrxCyUbseckiCGU64KP5vpwofqsadELtTTkB97irbDBRrVnoedywOhpzJVk0SY5xoN1jSB5fWw7df40RiWroYlET3oCv7MjSbtVrHUxxVuTousWDN3wX3gQWmGiSsK%2BVhKgslTsgdRsSWfzc8wbaPMwHaLfxxTKxJ7AgASZ5MddLai%2FnSPEd341t0KyvIreCLOp7wY%2B7lB9NGhT1WQAOeNXTO9NLRv0efjjc3Y1ck%2FcwLdBzL%2FEZifoz3kul0rYaOU4nYWtJAbn%2Bfo9xQ1%2BlRvzTdgyi1zrdJX3RD97HCjDVLJkxw6f9s9NSRwOsd%2FYZRk%2FDk7QYVb4taLF9FUBTE28ykXegqqduFgmJ6lgBkdpq9UkUh3sfj6h2NymK869DxSakb3ZjnSrmmZjIIoqtJna8zLtevuwrwyWFJeMyzI1%2FvurTh3DDCfvVf8XeIZN%2FVWaWrL%2BwSdkZoVRpppgBWPxCiojP%2F99LB1QR18relLaZhryBY8l2%2BcGm14uREBHiWxL2afkdzzRloWn4qEEx62vnR0XaiErdAHMMef%2BMQGOqUB6OayUo%2FqbT%2FeFwN6AwAiTA3L3zqXHchXVPcUyCT6CA9bO9Dc0iRPN4xpWOb3tcVlvdYBY2VSnKoksVMy%2BcEybYUxbG%2FJ%2FlfvxN4v2lix5bUyh38%2B%2BbwGQVV14%2BXKdeO8TjCG5lDNJMwO3y%2BP3UtCyTJHI0jMwOmzjvMl6p3%2BGM1syXkNy91Nw%2FNN0k3SvnQFAfAhyb5kd%2BJA%2BO2U5d2o3gJ3L4pW&X-Amz-Signature=df2ad7c72b4da206a91f0cc1bc43426f6af33476a797911998f498e8251f2741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5MEXVM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC6yoHIc%2FRjc3TJxC7U8cN9pd1hn3ZYXL74xpRsI2%2FsFgIgFo0Jg3T3FyElIBl3QM752hwM3D2Jt5aGxMcM0WRRbP4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDRWUI1XMuKfVtLUNyrcAzMcGHKUut3oxhzwhyVcgAzopUknoJDnotWUaK4kn1jeEUOhAMCRIjYNSOp9NcoNgu22%2FwOU9%2BstMI6bph0YkuMF5GmrxCyUbseckiCGU64KP5vpwofqsadELtTTkB97irbDBRrVnoedywOhpzJVk0SY5xoN1jSB5fWw7df40RiWroYlET3oCv7MjSbtVrHUxxVuTousWDN3wX3gQWmGiSsK%2BVhKgslTsgdRsSWfzc8wbaPMwHaLfxxTKxJ7AgASZ5MddLai%2FnSPEd341t0KyvIreCLOp7wY%2B7lB9NGhT1WQAOeNXTO9NLRv0efjjc3Y1ck%2FcwLdBzL%2FEZifoz3kul0rYaOU4nYWtJAbn%2Bfo9xQ1%2BlRvzTdgyi1zrdJX3RD97HCjDVLJkxw6f9s9NSRwOsd%2FYZRk%2FDk7QYVb4taLF9FUBTE28ykXegqqduFgmJ6lgBkdpq9UkUh3sfj6h2NymK869DxSakb3ZjnSrmmZjIIoqtJna8zLtevuwrwyWFJeMyzI1%2FvurTh3DDCfvVf8XeIZN%2FVWaWrL%2BwSdkZoVRpppgBWPxCiojP%2F99LB1QR18relLaZhryBY8l2%2BcGm14uREBHiWxL2afkdzzRloWn4qEEx62vnR0XaiErdAHMMef%2BMQGOqUB6OayUo%2FqbT%2FeFwN6AwAiTA3L3zqXHchXVPcUyCT6CA9bO9Dc0iRPN4xpWOb3tcVlvdYBY2VSnKoksVMy%2BcEybYUxbG%2FJ%2FlfvxN4v2lix5bUyh38%2B%2BbwGQVV14%2BXKdeO8TjCG5lDNJMwO3y%2BP3UtCyTJHI0jMwOmzjvMl6p3%2BGM1syXkNy91Nw%2FNN0k3SvnQFAfAhyb5kd%2BJA%2BO2U5d2o3gJ3L4pW&X-Amz-Signature=249d6eee0919bc2dbc73ed7ddb99f9cb473aac30d4cc460ea7045c6a15fc03cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
