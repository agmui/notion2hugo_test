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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQT6H55G%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDO42Ii54LG1JUx3xS%2FE582GfDhgehbbxq40DEqUShLUAiABR8E4H%2FJL4VX9pFJ4eufB0pH7ZD0VEsQUq7K%2B1KN%2FZSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwolmoa2oQ3PxPRmsKtwDgyqinRjVV90mVpSKvNXxP7M3N77TiJAltymy5B0YaBAJIcL3eQtW0u7FcVAQjtPTaoHfmxlghIr%2BU%2FgS1zkBbfWHYQa7%2FAVJKx6%2BwcZn0aDpBxdbMg%2FA9RLQTaVxsZIZzPsfIzi9KClKc%2FrZ8SpA6eN%2B3PTkIA6VRS10%2FcAzAgnQGO3pfkdKBF4ToWLyAsCbJE0FLad3VfrxoNEO%2F4d6HKtU%2BbILUtT2OW1gtEM0MlgL95cik6UF5ha2UpdJgXOJDXYoxGf%2FEpuQHIAJ4kVvF75S1XFS3pfPxubKxtnaGL297YU8MKLijBcQvwWCtxHaQ%2BgYhhmpPM4xz9TZ5sTgCMD%2BAlAQNczuK1DWRuTb6tRXntRhOBs6ELqDnjlYluF4CKXe4%2FstFggfNcJHIrkKTEBYEtdzb3zCsKViX63Mt9LP%2BSl9AOV6FiTAYj4HNGcBEa4JEHsZ8PuloFV28AQ5gpkxXZM4cmsV3SIV92sdSyo9IY2Htwq8ks2rf%2FBqN%2Fh6feJjYCBnaXWcnRkQuV%2Fjq3sCOIFKk5bUWTqXRodceWHl69ZFs9BTZ3noWL9rrW3s55Xl61tKPs0PLCUu1TIPDPAziZRemXJYyMNK7QUGihNsLixAemQ6i04uS9kw%2BamOwQY6pgFZLgBSuNFeex9tiBTysrpnECEvx3jh5Y9jxTnUz5%2FNSV7ungAC76mpZogHkC9GwO6UfR9zJi%2FeG2qO7Q8lWKH4ppE3UO%2FtiTUeFky2rdMIfmrwFNkiDODdbCdmmmcZKpN5mrfjOICHSDNCA2hkM7Xecd1s%2F2hPcb5K3SkP0EikKRqsJKqmO3JamTBrEpQbBPUrNIH7go8tpcT6DgemtNedB54C23BG&X-Amz-Signature=c0ee9cdbc93f2da3df7f28d442f2e16035b93a01dafd40c5984d02c07c85e616&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQT6H55G%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDO42Ii54LG1JUx3xS%2FE582GfDhgehbbxq40DEqUShLUAiABR8E4H%2FJL4VX9pFJ4eufB0pH7ZD0VEsQUq7K%2B1KN%2FZSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwolmoa2oQ3PxPRmsKtwDgyqinRjVV90mVpSKvNXxP7M3N77TiJAltymy5B0YaBAJIcL3eQtW0u7FcVAQjtPTaoHfmxlghIr%2BU%2FgS1zkBbfWHYQa7%2FAVJKx6%2BwcZn0aDpBxdbMg%2FA9RLQTaVxsZIZzPsfIzi9KClKc%2FrZ8SpA6eN%2B3PTkIA6VRS10%2FcAzAgnQGO3pfkdKBF4ToWLyAsCbJE0FLad3VfrxoNEO%2F4d6HKtU%2BbILUtT2OW1gtEM0MlgL95cik6UF5ha2UpdJgXOJDXYoxGf%2FEpuQHIAJ4kVvF75S1XFS3pfPxubKxtnaGL297YU8MKLijBcQvwWCtxHaQ%2BgYhhmpPM4xz9TZ5sTgCMD%2BAlAQNczuK1DWRuTb6tRXntRhOBs6ELqDnjlYluF4CKXe4%2FstFggfNcJHIrkKTEBYEtdzb3zCsKViX63Mt9LP%2BSl9AOV6FiTAYj4HNGcBEa4JEHsZ8PuloFV28AQ5gpkxXZM4cmsV3SIV92sdSyo9IY2Htwq8ks2rf%2FBqN%2Fh6feJjYCBnaXWcnRkQuV%2Fjq3sCOIFKk5bUWTqXRodceWHl69ZFs9BTZ3noWL9rrW3s55Xl61tKPs0PLCUu1TIPDPAziZRemXJYyMNK7QUGihNsLixAemQ6i04uS9kw%2BamOwQY6pgFZLgBSuNFeex9tiBTysrpnECEvx3jh5Y9jxTnUz5%2FNSV7ungAC76mpZogHkC9GwO6UfR9zJi%2FeG2qO7Q8lWKH4ppE3UO%2FtiTUeFky2rdMIfmrwFNkiDODdbCdmmmcZKpN5mrfjOICHSDNCA2hkM7Xecd1s%2F2hPcb5K3SkP0EikKRqsJKqmO3JamTBrEpQbBPUrNIH7go8tpcT6DgemtNedB54C23BG&X-Amz-Signature=dd466dd0d747f507e82fcbfed6f332fe58f4f654b683638ecf16da51cc5ab079&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQT6H55G%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDO42Ii54LG1JUx3xS%2FE582GfDhgehbbxq40DEqUShLUAiABR8E4H%2FJL4VX9pFJ4eufB0pH7ZD0VEsQUq7K%2B1KN%2FZSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwolmoa2oQ3PxPRmsKtwDgyqinRjVV90mVpSKvNXxP7M3N77TiJAltymy5B0YaBAJIcL3eQtW0u7FcVAQjtPTaoHfmxlghIr%2BU%2FgS1zkBbfWHYQa7%2FAVJKx6%2BwcZn0aDpBxdbMg%2FA9RLQTaVxsZIZzPsfIzi9KClKc%2FrZ8SpA6eN%2B3PTkIA6VRS10%2FcAzAgnQGO3pfkdKBF4ToWLyAsCbJE0FLad3VfrxoNEO%2F4d6HKtU%2BbILUtT2OW1gtEM0MlgL95cik6UF5ha2UpdJgXOJDXYoxGf%2FEpuQHIAJ4kVvF75S1XFS3pfPxubKxtnaGL297YU8MKLijBcQvwWCtxHaQ%2BgYhhmpPM4xz9TZ5sTgCMD%2BAlAQNczuK1DWRuTb6tRXntRhOBs6ELqDnjlYluF4CKXe4%2FstFggfNcJHIrkKTEBYEtdzb3zCsKViX63Mt9LP%2BSl9AOV6FiTAYj4HNGcBEa4JEHsZ8PuloFV28AQ5gpkxXZM4cmsV3SIV92sdSyo9IY2Htwq8ks2rf%2FBqN%2Fh6feJjYCBnaXWcnRkQuV%2Fjq3sCOIFKk5bUWTqXRodceWHl69ZFs9BTZ3noWL9rrW3s55Xl61tKPs0PLCUu1TIPDPAziZRemXJYyMNK7QUGihNsLixAemQ6i04uS9kw%2BamOwQY6pgFZLgBSuNFeex9tiBTysrpnECEvx3jh5Y9jxTnUz5%2FNSV7ungAC76mpZogHkC9GwO6UfR9zJi%2FeG2qO7Q8lWKH4ppE3UO%2FtiTUeFky2rdMIfmrwFNkiDODdbCdmmmcZKpN5mrfjOICHSDNCA2hkM7Xecd1s%2F2hPcb5K3SkP0EikKRqsJKqmO3JamTBrEpQbBPUrNIH7go8tpcT6DgemtNedB54C23BG&X-Amz-Signature=de6ebb315faf7197aee3a365c263783aa1ca75f74f40f6135ec7be982ab15f5a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQT6H55G%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDO42Ii54LG1JUx3xS%2FE582GfDhgehbbxq40DEqUShLUAiABR8E4H%2FJL4VX9pFJ4eufB0pH7ZD0VEsQUq7K%2B1KN%2FZSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwolmoa2oQ3PxPRmsKtwDgyqinRjVV90mVpSKvNXxP7M3N77TiJAltymy5B0YaBAJIcL3eQtW0u7FcVAQjtPTaoHfmxlghIr%2BU%2FgS1zkBbfWHYQa7%2FAVJKx6%2BwcZn0aDpBxdbMg%2FA9RLQTaVxsZIZzPsfIzi9KClKc%2FrZ8SpA6eN%2B3PTkIA6VRS10%2FcAzAgnQGO3pfkdKBF4ToWLyAsCbJE0FLad3VfrxoNEO%2F4d6HKtU%2BbILUtT2OW1gtEM0MlgL95cik6UF5ha2UpdJgXOJDXYoxGf%2FEpuQHIAJ4kVvF75S1XFS3pfPxubKxtnaGL297YU8MKLijBcQvwWCtxHaQ%2BgYhhmpPM4xz9TZ5sTgCMD%2BAlAQNczuK1DWRuTb6tRXntRhOBs6ELqDnjlYluF4CKXe4%2FstFggfNcJHIrkKTEBYEtdzb3zCsKViX63Mt9LP%2BSl9AOV6FiTAYj4HNGcBEa4JEHsZ8PuloFV28AQ5gpkxXZM4cmsV3SIV92sdSyo9IY2Htwq8ks2rf%2FBqN%2Fh6feJjYCBnaXWcnRkQuV%2Fjq3sCOIFKk5bUWTqXRodceWHl69ZFs9BTZ3noWL9rrW3s55Xl61tKPs0PLCUu1TIPDPAziZRemXJYyMNK7QUGihNsLixAemQ6i04uS9kw%2BamOwQY6pgFZLgBSuNFeex9tiBTysrpnECEvx3jh5Y9jxTnUz5%2FNSV7ungAC76mpZogHkC9GwO6UfR9zJi%2FeG2qO7Q8lWKH4ppE3UO%2FtiTUeFky2rdMIfmrwFNkiDODdbCdmmmcZKpN5mrfjOICHSDNCA2hkM7Xecd1s%2F2hPcb5K3SkP0EikKRqsJKqmO3JamTBrEpQbBPUrNIH7go8tpcT6DgemtNedB54C23BG&X-Amz-Signature=66816cec5a7c8219ddfe6f4673fe980a815b87510c15d040087cb4c1c0dfe9c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQT6H55G%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDO42Ii54LG1JUx3xS%2FE582GfDhgehbbxq40DEqUShLUAiABR8E4H%2FJL4VX9pFJ4eufB0pH7ZD0VEsQUq7K%2B1KN%2FZSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwolmoa2oQ3PxPRmsKtwDgyqinRjVV90mVpSKvNXxP7M3N77TiJAltymy5B0YaBAJIcL3eQtW0u7FcVAQjtPTaoHfmxlghIr%2BU%2FgS1zkBbfWHYQa7%2FAVJKx6%2BwcZn0aDpBxdbMg%2FA9RLQTaVxsZIZzPsfIzi9KClKc%2FrZ8SpA6eN%2B3PTkIA6VRS10%2FcAzAgnQGO3pfkdKBF4ToWLyAsCbJE0FLad3VfrxoNEO%2F4d6HKtU%2BbILUtT2OW1gtEM0MlgL95cik6UF5ha2UpdJgXOJDXYoxGf%2FEpuQHIAJ4kVvF75S1XFS3pfPxubKxtnaGL297YU8MKLijBcQvwWCtxHaQ%2BgYhhmpPM4xz9TZ5sTgCMD%2BAlAQNczuK1DWRuTb6tRXntRhOBs6ELqDnjlYluF4CKXe4%2FstFggfNcJHIrkKTEBYEtdzb3zCsKViX63Mt9LP%2BSl9AOV6FiTAYj4HNGcBEa4JEHsZ8PuloFV28AQ5gpkxXZM4cmsV3SIV92sdSyo9IY2Htwq8ks2rf%2FBqN%2Fh6feJjYCBnaXWcnRkQuV%2Fjq3sCOIFKk5bUWTqXRodceWHl69ZFs9BTZ3noWL9rrW3s55Xl61tKPs0PLCUu1TIPDPAziZRemXJYyMNK7QUGihNsLixAemQ6i04uS9kw%2BamOwQY6pgFZLgBSuNFeex9tiBTysrpnECEvx3jh5Y9jxTnUz5%2FNSV7ungAC76mpZogHkC9GwO6UfR9zJi%2FeG2qO7Q8lWKH4ppE3UO%2FtiTUeFky2rdMIfmrwFNkiDODdbCdmmmcZKpN5mrfjOICHSDNCA2hkM7Xecd1s%2F2hPcb5K3SkP0EikKRqsJKqmO3JamTBrEpQbBPUrNIH7go8tpcT6DgemtNedB54C23BG&X-Amz-Signature=a1cca3ae90c176f799af5f3dceb4c87cb1527cbcb1ab9a985cb22b9d5c2a4254&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
