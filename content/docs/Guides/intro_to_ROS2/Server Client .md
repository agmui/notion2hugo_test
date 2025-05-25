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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MEDBY2C%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIG6mEbL3%2Frzd153ULxDMk3OJGi%2Ftylee1C%2BExZUIRFW5AiBKU167CE9aQOOTXeLjh%2FsNQB6L82Re%2B4yxTy2VZc3ueir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMr0PTInv6c9H8B7iSKtwDutQRtU8PVQcVln13GePvJ8hibgfEo5HAzo1Q5GkjcjCmaRcutuCzskjRSPNtD7Oyw48WAYGzxt0u4GirEI1RD2Ho5wriQGQdWxCJtx1sdwi%2BBffZI%2BHCHP99KLB%2BROZfRfiIV7RB0xDYQYvpbn8258DZq3zHavOqyRZArOa5KZ%2BzLOCRB6TCdwmuTOvJuOBnBrKr7FL0eQ%2ByTcB6ggc9ssROQr8HKEGDWGgsPMjEOcpZhOpIs0dFrIsG801DfmLxumQFo8E2O%2FdEpxTMnu7TloTGUZmMFxb14UP6tCpEzwazGOGBp023fo9IksUMvRXUaydEoHyYCPo7%2BIbUnKn1WieDLV0k4iMzHMOuUdDFDu8XGXWlqrTKY%2BTdWDYV5tc8AbqeaCdv%2FyqItxwpkucZmTeKsi1Rx1t0%2BMV6zIzqkhlzyJ%2FeAz1MvHBo14bLW9bAUrntBbVCYfRlVaWqU%2FGLhFZRXowiQ6e0HPmbGPlRKlPzeZFhrPAUL8ZmdPM%2BuKGtgnpKVpEJS9qMhSOUQ%2F5S%2FDu3RBKLHgLYz0oJlyuO%2FJbob71nAi%2FSCOmWcxlJldcOu%2B4zZXGDgVqOqcWGKCggOqmhnEGKJSQCSRaTjmjUSeXihlH26MUx%2FUbfakYwybnKwQY6pgF2nGaWBRHhN6a7LRnGFAjUOq12%2B5GYl2RHT3JxYGUy500MLX%2FvXkVpAeNmniTOzkO3%2FeLu5YEmtIJ4B4fkbHvsDaNs6NHopsjy0K8dVjhdg8PszHGQQUnwOI0%2FH1Z4DsGEr3y4fJ0FHy0sPe9dwSq3Y158xaxSQ%2FHjl%2BfEMAjNV8xury9358CXNSFXXBr8pJz9q7XNJDSgKJZnrxQ0ul09pZa6jhRC&X-Amz-Signature=d7649fed3f942dd454fa596f7d85a9fb438313edc0a6bfec615b63be05c7587a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MEDBY2C%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIG6mEbL3%2Frzd153ULxDMk3OJGi%2Ftylee1C%2BExZUIRFW5AiBKU167CE9aQOOTXeLjh%2FsNQB6L82Re%2B4yxTy2VZc3ueir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMr0PTInv6c9H8B7iSKtwDutQRtU8PVQcVln13GePvJ8hibgfEo5HAzo1Q5GkjcjCmaRcutuCzskjRSPNtD7Oyw48WAYGzxt0u4GirEI1RD2Ho5wriQGQdWxCJtx1sdwi%2BBffZI%2BHCHP99KLB%2BROZfRfiIV7RB0xDYQYvpbn8258DZq3zHavOqyRZArOa5KZ%2BzLOCRB6TCdwmuTOvJuOBnBrKr7FL0eQ%2ByTcB6ggc9ssROQr8HKEGDWGgsPMjEOcpZhOpIs0dFrIsG801DfmLxumQFo8E2O%2FdEpxTMnu7TloTGUZmMFxb14UP6tCpEzwazGOGBp023fo9IksUMvRXUaydEoHyYCPo7%2BIbUnKn1WieDLV0k4iMzHMOuUdDFDu8XGXWlqrTKY%2BTdWDYV5tc8AbqeaCdv%2FyqItxwpkucZmTeKsi1Rx1t0%2BMV6zIzqkhlzyJ%2FeAz1MvHBo14bLW9bAUrntBbVCYfRlVaWqU%2FGLhFZRXowiQ6e0HPmbGPlRKlPzeZFhrPAUL8ZmdPM%2BuKGtgnpKVpEJS9qMhSOUQ%2F5S%2FDu3RBKLHgLYz0oJlyuO%2FJbob71nAi%2FSCOmWcxlJldcOu%2B4zZXGDgVqOqcWGKCggOqmhnEGKJSQCSRaTjmjUSeXihlH26MUx%2FUbfakYwybnKwQY6pgF2nGaWBRHhN6a7LRnGFAjUOq12%2B5GYl2RHT3JxYGUy500MLX%2FvXkVpAeNmniTOzkO3%2FeLu5YEmtIJ4B4fkbHvsDaNs6NHopsjy0K8dVjhdg8PszHGQQUnwOI0%2FH1Z4DsGEr3y4fJ0FHy0sPe9dwSq3Y158xaxSQ%2FHjl%2BfEMAjNV8xury9358CXNSFXXBr8pJz9q7XNJDSgKJZnrxQ0ul09pZa6jhRC&X-Amz-Signature=3465ea778f643a7a2e1de830eac527db5fb8a4d83d8352e89ab0038de560018e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MEDBY2C%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIG6mEbL3%2Frzd153ULxDMk3OJGi%2Ftylee1C%2BExZUIRFW5AiBKU167CE9aQOOTXeLjh%2FsNQB6L82Re%2B4yxTy2VZc3ueir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMr0PTInv6c9H8B7iSKtwDutQRtU8PVQcVln13GePvJ8hibgfEo5HAzo1Q5GkjcjCmaRcutuCzskjRSPNtD7Oyw48WAYGzxt0u4GirEI1RD2Ho5wriQGQdWxCJtx1sdwi%2BBffZI%2BHCHP99KLB%2BROZfRfiIV7RB0xDYQYvpbn8258DZq3zHavOqyRZArOa5KZ%2BzLOCRB6TCdwmuTOvJuOBnBrKr7FL0eQ%2ByTcB6ggc9ssROQr8HKEGDWGgsPMjEOcpZhOpIs0dFrIsG801DfmLxumQFo8E2O%2FdEpxTMnu7TloTGUZmMFxb14UP6tCpEzwazGOGBp023fo9IksUMvRXUaydEoHyYCPo7%2BIbUnKn1WieDLV0k4iMzHMOuUdDFDu8XGXWlqrTKY%2BTdWDYV5tc8AbqeaCdv%2FyqItxwpkucZmTeKsi1Rx1t0%2BMV6zIzqkhlzyJ%2FeAz1MvHBo14bLW9bAUrntBbVCYfRlVaWqU%2FGLhFZRXowiQ6e0HPmbGPlRKlPzeZFhrPAUL8ZmdPM%2BuKGtgnpKVpEJS9qMhSOUQ%2F5S%2FDu3RBKLHgLYz0oJlyuO%2FJbob71nAi%2FSCOmWcxlJldcOu%2B4zZXGDgVqOqcWGKCggOqmhnEGKJSQCSRaTjmjUSeXihlH26MUx%2FUbfakYwybnKwQY6pgF2nGaWBRHhN6a7LRnGFAjUOq12%2B5GYl2RHT3JxYGUy500MLX%2FvXkVpAeNmniTOzkO3%2FeLu5YEmtIJ4B4fkbHvsDaNs6NHopsjy0K8dVjhdg8PszHGQQUnwOI0%2FH1Z4DsGEr3y4fJ0FHy0sPe9dwSq3Y158xaxSQ%2FHjl%2BfEMAjNV8xury9358CXNSFXXBr8pJz9q7XNJDSgKJZnrxQ0ul09pZa6jhRC&X-Amz-Signature=0f8c41c47d490a804287968275be4d078238f0e0ad1cb2d30ab5d5afb3af7b08&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MEDBY2C%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIG6mEbL3%2Frzd153ULxDMk3OJGi%2Ftylee1C%2BExZUIRFW5AiBKU167CE9aQOOTXeLjh%2FsNQB6L82Re%2B4yxTy2VZc3ueir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMr0PTInv6c9H8B7iSKtwDutQRtU8PVQcVln13GePvJ8hibgfEo5HAzo1Q5GkjcjCmaRcutuCzskjRSPNtD7Oyw48WAYGzxt0u4GirEI1RD2Ho5wriQGQdWxCJtx1sdwi%2BBffZI%2BHCHP99KLB%2BROZfRfiIV7RB0xDYQYvpbn8258DZq3zHavOqyRZArOa5KZ%2BzLOCRB6TCdwmuTOvJuOBnBrKr7FL0eQ%2ByTcB6ggc9ssROQr8HKEGDWGgsPMjEOcpZhOpIs0dFrIsG801DfmLxumQFo8E2O%2FdEpxTMnu7TloTGUZmMFxb14UP6tCpEzwazGOGBp023fo9IksUMvRXUaydEoHyYCPo7%2BIbUnKn1WieDLV0k4iMzHMOuUdDFDu8XGXWlqrTKY%2BTdWDYV5tc8AbqeaCdv%2FyqItxwpkucZmTeKsi1Rx1t0%2BMV6zIzqkhlzyJ%2FeAz1MvHBo14bLW9bAUrntBbVCYfRlVaWqU%2FGLhFZRXowiQ6e0HPmbGPlRKlPzeZFhrPAUL8ZmdPM%2BuKGtgnpKVpEJS9qMhSOUQ%2F5S%2FDu3RBKLHgLYz0oJlyuO%2FJbob71nAi%2FSCOmWcxlJldcOu%2B4zZXGDgVqOqcWGKCggOqmhnEGKJSQCSRaTjmjUSeXihlH26MUx%2FUbfakYwybnKwQY6pgF2nGaWBRHhN6a7LRnGFAjUOq12%2B5GYl2RHT3JxYGUy500MLX%2FvXkVpAeNmniTOzkO3%2FeLu5YEmtIJ4B4fkbHvsDaNs6NHopsjy0K8dVjhdg8PszHGQQUnwOI0%2FH1Z4DsGEr3y4fJ0FHy0sPe9dwSq3Y158xaxSQ%2FHjl%2BfEMAjNV8xury9358CXNSFXXBr8pJz9q7XNJDSgKJZnrxQ0ul09pZa6jhRC&X-Amz-Signature=348f1480abf8dd216e28c8c6a48bf093fc435df93970c330c3bc655eb5ac3114&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MEDBY2C%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIG6mEbL3%2Frzd153ULxDMk3OJGi%2Ftylee1C%2BExZUIRFW5AiBKU167CE9aQOOTXeLjh%2FsNQB6L82Re%2B4yxTy2VZc3ueir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMr0PTInv6c9H8B7iSKtwDutQRtU8PVQcVln13GePvJ8hibgfEo5HAzo1Q5GkjcjCmaRcutuCzskjRSPNtD7Oyw48WAYGzxt0u4GirEI1RD2Ho5wriQGQdWxCJtx1sdwi%2BBffZI%2BHCHP99KLB%2BROZfRfiIV7RB0xDYQYvpbn8258DZq3zHavOqyRZArOa5KZ%2BzLOCRB6TCdwmuTOvJuOBnBrKr7FL0eQ%2ByTcB6ggc9ssROQr8HKEGDWGgsPMjEOcpZhOpIs0dFrIsG801DfmLxumQFo8E2O%2FdEpxTMnu7TloTGUZmMFxb14UP6tCpEzwazGOGBp023fo9IksUMvRXUaydEoHyYCPo7%2BIbUnKn1WieDLV0k4iMzHMOuUdDFDu8XGXWlqrTKY%2BTdWDYV5tc8AbqeaCdv%2FyqItxwpkucZmTeKsi1Rx1t0%2BMV6zIzqkhlzyJ%2FeAz1MvHBo14bLW9bAUrntBbVCYfRlVaWqU%2FGLhFZRXowiQ6e0HPmbGPlRKlPzeZFhrPAUL8ZmdPM%2BuKGtgnpKVpEJS9qMhSOUQ%2F5S%2FDu3RBKLHgLYz0oJlyuO%2FJbob71nAi%2FSCOmWcxlJldcOu%2B4zZXGDgVqOqcWGKCggOqmhnEGKJSQCSRaTjmjUSeXihlH26MUx%2FUbfakYwybnKwQY6pgF2nGaWBRHhN6a7LRnGFAjUOq12%2B5GYl2RHT3JxYGUy500MLX%2FvXkVpAeNmniTOzkO3%2FeLu5YEmtIJ4B4fkbHvsDaNs6NHopsjy0K8dVjhdg8PszHGQQUnwOI0%2FH1Z4DsGEr3y4fJ0FHy0sPe9dwSq3Y158xaxSQ%2FHjl%2BfEMAjNV8xury9358CXNSFXXBr8pJz9q7XNJDSgKJZnrxQ0ul09pZa6jhRC&X-Amz-Signature=b384ad6443329aabd4554bd2504198b45b3365eb586cd06a2cfe9d8ea468d629&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
