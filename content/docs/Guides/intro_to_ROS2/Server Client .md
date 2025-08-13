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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXN43SWR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDghd4cEl7lyzwz3%2BI%2FRjCsACBOat0XuGwq4nypdiXcgAIhAIY6wSolNssmB0g5SQUlvKCofO7HQ3SvR%2B%2B09DoyTrhtKv8DCCsQABoMNjM3NDIzMTgzODA1IgzRYXLEbfQdt2%2FlHNMq3ANFE6%2FaAYNx0YIp1eBHoi8sLMPcJDciZOIeDRtT7TK148gweyBiexxu8tkNDo4K8Ts0dZmxNMjCbgI%2BFznqRjaX2TLPhfdq4ypDSsW9IpnTk8Gx0WTzavJ3VWTzbWF%2BB7A6RLVKKv8sc18CNl055sZaNloG2qIAWbZGZ7aYM9GSRCk4%2FZlnWcERuOa%2Bs33ea9o2zOLNcLCw5EbJtoI0SAqFtuniC%2F6RDme5SsRnik6V2RWHdJ9E8PntEmCfSD33WaP2oElPxtkwfA1XCnzrOpcPwChSSsNfqc6FGXF3dEq1mTQscYSPvYPWBToxG9jN4zodDEu95kkuK1jvtiPBfTHZ4Md3L6wJ1xGgw0Fhpqi%2FAniwr6O0%2FwTQxhxCZci1J4Qso89VK8kPg%2FVlhxOe%2B3iugzVx9GGCMc%2F8OEAKcsan%2BShCJZ2UZFq0kJyY%2Be129c8XWDaXhXy3YhyOlkNXRxaB%2Fo09Hehr3sg0Xq9dqdZMQPtg%2FgK5ypvVvMSfn4R5JrwBmFXoNM%2BqHJqJNTpa78P8QbxKk1gWJfzTNBlvRxmICvV2jt8880QQQgWZHwPeO4c1IOhtXXG0lLZHJd258H6PKQO2hLP2sxDHP0hkiaDEv9sX7rOJmIB64MsA7DCyxvHEBjqkAYEIQn3adYv3zC5gFjYGZvcQzPeNCqz1moKC0Wjcg8H5PvE4ptkmdZB0wHvXJKsN3SuciRm%2BdYGGFJVqGUPLB3pUfvJNPN7G8yOrA4WDKnNxQG1wJbZnmSn6b4Y110uxUcuCY75psJ5PLHv4OWp9GQbMhpqIzvfetQtNLINwuCsKd0Dj1bgdhsX7%2BrG6L5QaR%2FVmt7I0h2NKgZxCHT6hBHFdSIrp&X-Amz-Signature=0e2d939657579472a7267930e00e1d49d122eed601dee83fe6e4b26e587b0ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXN43SWR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDghd4cEl7lyzwz3%2BI%2FRjCsACBOat0XuGwq4nypdiXcgAIhAIY6wSolNssmB0g5SQUlvKCofO7HQ3SvR%2B%2B09DoyTrhtKv8DCCsQABoMNjM3NDIzMTgzODA1IgzRYXLEbfQdt2%2FlHNMq3ANFE6%2FaAYNx0YIp1eBHoi8sLMPcJDciZOIeDRtT7TK148gweyBiexxu8tkNDo4K8Ts0dZmxNMjCbgI%2BFznqRjaX2TLPhfdq4ypDSsW9IpnTk8Gx0WTzavJ3VWTzbWF%2BB7A6RLVKKv8sc18CNl055sZaNloG2qIAWbZGZ7aYM9GSRCk4%2FZlnWcERuOa%2Bs33ea9o2zOLNcLCw5EbJtoI0SAqFtuniC%2F6RDme5SsRnik6V2RWHdJ9E8PntEmCfSD33WaP2oElPxtkwfA1XCnzrOpcPwChSSsNfqc6FGXF3dEq1mTQscYSPvYPWBToxG9jN4zodDEu95kkuK1jvtiPBfTHZ4Md3L6wJ1xGgw0Fhpqi%2FAniwr6O0%2FwTQxhxCZci1J4Qso89VK8kPg%2FVlhxOe%2B3iugzVx9GGCMc%2F8OEAKcsan%2BShCJZ2UZFq0kJyY%2Be129c8XWDaXhXy3YhyOlkNXRxaB%2Fo09Hehr3sg0Xq9dqdZMQPtg%2FgK5ypvVvMSfn4R5JrwBmFXoNM%2BqHJqJNTpa78P8QbxKk1gWJfzTNBlvRxmICvV2jt8880QQQgWZHwPeO4c1IOhtXXG0lLZHJd258H6PKQO2hLP2sxDHP0hkiaDEv9sX7rOJmIB64MsA7DCyxvHEBjqkAYEIQn3adYv3zC5gFjYGZvcQzPeNCqz1moKC0Wjcg8H5PvE4ptkmdZB0wHvXJKsN3SuciRm%2BdYGGFJVqGUPLB3pUfvJNPN7G8yOrA4WDKnNxQG1wJbZnmSn6b4Y110uxUcuCY75psJ5PLHv4OWp9GQbMhpqIzvfetQtNLINwuCsKd0Dj1bgdhsX7%2BrG6L5QaR%2FVmt7I0h2NKgZxCHT6hBHFdSIrp&X-Amz-Signature=ccc7ed6021a9a0ad2bec99fc8c6a92b4d0033b9bc48fb5cc4b352d2f37713be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXN43SWR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDghd4cEl7lyzwz3%2BI%2FRjCsACBOat0XuGwq4nypdiXcgAIhAIY6wSolNssmB0g5SQUlvKCofO7HQ3SvR%2B%2B09DoyTrhtKv8DCCsQABoMNjM3NDIzMTgzODA1IgzRYXLEbfQdt2%2FlHNMq3ANFE6%2FaAYNx0YIp1eBHoi8sLMPcJDciZOIeDRtT7TK148gweyBiexxu8tkNDo4K8Ts0dZmxNMjCbgI%2BFznqRjaX2TLPhfdq4ypDSsW9IpnTk8Gx0WTzavJ3VWTzbWF%2BB7A6RLVKKv8sc18CNl055sZaNloG2qIAWbZGZ7aYM9GSRCk4%2FZlnWcERuOa%2Bs33ea9o2zOLNcLCw5EbJtoI0SAqFtuniC%2F6RDme5SsRnik6V2RWHdJ9E8PntEmCfSD33WaP2oElPxtkwfA1XCnzrOpcPwChSSsNfqc6FGXF3dEq1mTQscYSPvYPWBToxG9jN4zodDEu95kkuK1jvtiPBfTHZ4Md3L6wJ1xGgw0Fhpqi%2FAniwr6O0%2FwTQxhxCZci1J4Qso89VK8kPg%2FVlhxOe%2B3iugzVx9GGCMc%2F8OEAKcsan%2BShCJZ2UZFq0kJyY%2Be129c8XWDaXhXy3YhyOlkNXRxaB%2Fo09Hehr3sg0Xq9dqdZMQPtg%2FgK5ypvVvMSfn4R5JrwBmFXoNM%2BqHJqJNTpa78P8QbxKk1gWJfzTNBlvRxmICvV2jt8880QQQgWZHwPeO4c1IOhtXXG0lLZHJd258H6PKQO2hLP2sxDHP0hkiaDEv9sX7rOJmIB64MsA7DCyxvHEBjqkAYEIQn3adYv3zC5gFjYGZvcQzPeNCqz1moKC0Wjcg8H5PvE4ptkmdZB0wHvXJKsN3SuciRm%2BdYGGFJVqGUPLB3pUfvJNPN7G8yOrA4WDKnNxQG1wJbZnmSn6b4Y110uxUcuCY75psJ5PLHv4OWp9GQbMhpqIzvfetQtNLINwuCsKd0Dj1bgdhsX7%2BrG6L5QaR%2FVmt7I0h2NKgZxCHT6hBHFdSIrp&X-Amz-Signature=517460ad737e37c9a129ef6222c95d32f4420c134decc0b71be08bad8980445a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXN43SWR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDghd4cEl7lyzwz3%2BI%2FRjCsACBOat0XuGwq4nypdiXcgAIhAIY6wSolNssmB0g5SQUlvKCofO7HQ3SvR%2B%2B09DoyTrhtKv8DCCsQABoMNjM3NDIzMTgzODA1IgzRYXLEbfQdt2%2FlHNMq3ANFE6%2FaAYNx0YIp1eBHoi8sLMPcJDciZOIeDRtT7TK148gweyBiexxu8tkNDo4K8Ts0dZmxNMjCbgI%2BFznqRjaX2TLPhfdq4ypDSsW9IpnTk8Gx0WTzavJ3VWTzbWF%2BB7A6RLVKKv8sc18CNl055sZaNloG2qIAWbZGZ7aYM9GSRCk4%2FZlnWcERuOa%2Bs33ea9o2zOLNcLCw5EbJtoI0SAqFtuniC%2F6RDme5SsRnik6V2RWHdJ9E8PntEmCfSD33WaP2oElPxtkwfA1XCnzrOpcPwChSSsNfqc6FGXF3dEq1mTQscYSPvYPWBToxG9jN4zodDEu95kkuK1jvtiPBfTHZ4Md3L6wJ1xGgw0Fhpqi%2FAniwr6O0%2FwTQxhxCZci1J4Qso89VK8kPg%2FVlhxOe%2B3iugzVx9GGCMc%2F8OEAKcsan%2BShCJZ2UZFq0kJyY%2Be129c8XWDaXhXy3YhyOlkNXRxaB%2Fo09Hehr3sg0Xq9dqdZMQPtg%2FgK5ypvVvMSfn4R5JrwBmFXoNM%2BqHJqJNTpa78P8QbxKk1gWJfzTNBlvRxmICvV2jt8880QQQgWZHwPeO4c1IOhtXXG0lLZHJd258H6PKQO2hLP2sxDHP0hkiaDEv9sX7rOJmIB64MsA7DCyxvHEBjqkAYEIQn3adYv3zC5gFjYGZvcQzPeNCqz1moKC0Wjcg8H5PvE4ptkmdZB0wHvXJKsN3SuciRm%2BdYGGFJVqGUPLB3pUfvJNPN7G8yOrA4WDKnNxQG1wJbZnmSn6b4Y110uxUcuCY75psJ5PLHv4OWp9GQbMhpqIzvfetQtNLINwuCsKd0Dj1bgdhsX7%2BrG6L5QaR%2FVmt7I0h2NKgZxCHT6hBHFdSIrp&X-Amz-Signature=ea09ec026795391bbae26d0816fe76204bd604519c0da18c2247af5bb6f65b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXN43SWR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDghd4cEl7lyzwz3%2BI%2FRjCsACBOat0XuGwq4nypdiXcgAIhAIY6wSolNssmB0g5SQUlvKCofO7HQ3SvR%2B%2B09DoyTrhtKv8DCCsQABoMNjM3NDIzMTgzODA1IgzRYXLEbfQdt2%2FlHNMq3ANFE6%2FaAYNx0YIp1eBHoi8sLMPcJDciZOIeDRtT7TK148gweyBiexxu8tkNDo4K8Ts0dZmxNMjCbgI%2BFznqRjaX2TLPhfdq4ypDSsW9IpnTk8Gx0WTzavJ3VWTzbWF%2BB7A6RLVKKv8sc18CNl055sZaNloG2qIAWbZGZ7aYM9GSRCk4%2FZlnWcERuOa%2Bs33ea9o2zOLNcLCw5EbJtoI0SAqFtuniC%2F6RDme5SsRnik6V2RWHdJ9E8PntEmCfSD33WaP2oElPxtkwfA1XCnzrOpcPwChSSsNfqc6FGXF3dEq1mTQscYSPvYPWBToxG9jN4zodDEu95kkuK1jvtiPBfTHZ4Md3L6wJ1xGgw0Fhpqi%2FAniwr6O0%2FwTQxhxCZci1J4Qso89VK8kPg%2FVlhxOe%2B3iugzVx9GGCMc%2F8OEAKcsan%2BShCJZ2UZFq0kJyY%2Be129c8XWDaXhXy3YhyOlkNXRxaB%2Fo09Hehr3sg0Xq9dqdZMQPtg%2FgK5ypvVvMSfn4R5JrwBmFXoNM%2BqHJqJNTpa78P8QbxKk1gWJfzTNBlvRxmICvV2jt8880QQQgWZHwPeO4c1IOhtXXG0lLZHJd258H6PKQO2hLP2sxDHP0hkiaDEv9sX7rOJmIB64MsA7DCyxvHEBjqkAYEIQn3adYv3zC5gFjYGZvcQzPeNCqz1moKC0Wjcg8H5PvE4ptkmdZB0wHvXJKsN3SuciRm%2BdYGGFJVqGUPLB3pUfvJNPN7G8yOrA4WDKnNxQG1wJbZnmSn6b4Y110uxUcuCY75psJ5PLHv4OWp9GQbMhpqIzvfetQtNLINwuCsKd0Dj1bgdhsX7%2BrG6L5QaR%2FVmt7I0h2NKgZxCHT6hBHFdSIrp&X-Amz-Signature=38f3a5eadc27b1a9fb42a262ff097d2513611cf992c82451ebbdbeff734c539e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
