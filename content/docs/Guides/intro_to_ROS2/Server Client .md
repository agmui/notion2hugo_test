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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646IFDWSP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq71KOF04IGpuPp1MuTq5seU8mG8u2BJKhH4oAM%2FNQ3gIgbbLUk4J%2FF16rTofQthzOLoYqrR6K4wW11thS%2B7oXGV8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQHLbiNKThNFSqkOCrcAzxAotR%2Bljh6jCQ%2FZvoFuLAio4P0bZQ3YTqRT%2BwD4KFqi4aAOe1iGkZpeOQF6THvv57IOQM0OnGoJtDmdMPpFqoorTEXFvaqwiY5I%2BbQVzDt7auwizSe2%2FQcR0L%2Bhrhs1199z3l7bj25kgBz9koLmWZwAZAorvXSFDT9qOgu5oru0kaXSB2MkLNgKtj7rHUPm9U4RBjeowkQNRuiqYwBwsewtPWgnfkLoTXoEykwMq3mZp6UeqZjzWhLEVyEZQJxUilxjf1yV%2BC1FYJqt84h7eZewdDJApgR3inOtYZ8WRSgTNiZxGbBnsRl8pcOAdneCvm34sQJtdC4Tts6PMQS1UwF2KyKhrrSWzMWZF44wUC%2BFHuGgyr1R%2BRO2rgHV91IUm%2FMKUdY5JUbUnk0AT4sZ%2BNkPThUueM5bJWnTFCJTCXfGmIap84avzWVgHbLiKSkM0Z1E0PpGQVL2nNjBEfag6Ro5Qvvv39G%2FBlOr83JTyQn9xMkyBXz9eMC%2BFCC9x3BZ03NKJ1UQnIr0mmTCAatkZ8qNVAZeAfpIdg%2FnA32wOgUOxvjVrYlRHkcNJTSIqTlqbDnnM7KILavEz1ckBHOFEEHbCbwk%2BFKuxyDjzzPn4k%2FNZfoGGULKmyomtCbMILLt8MGOqUBFK%2BMkXvwkLrcrS86zxpkXobzBthtXpZct83tOHvG0i3CcA2EE6FXpRcILShmcsrBGOEFKm5RnEC7tdPUl2JX0PZvJ02mclzW4zIzwImSL0%2B0zx555V5V5jHu5oOFEJacYOxqxYFsTH3G95fuaiCWHXKWtXy5g40Lyby0H0axxlYTvELU3lqSAclZBjgZAO0pIBtnqS3H2qmqIJjDaLtvPSaa%2FQMg&X-Amz-Signature=e259b430e30effbc38f008f51228a20685d27fb21a86d6dfad5428664653b883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646IFDWSP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq71KOF04IGpuPp1MuTq5seU8mG8u2BJKhH4oAM%2FNQ3gIgbbLUk4J%2FF16rTofQthzOLoYqrR6K4wW11thS%2B7oXGV8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQHLbiNKThNFSqkOCrcAzxAotR%2Bljh6jCQ%2FZvoFuLAio4P0bZQ3YTqRT%2BwD4KFqi4aAOe1iGkZpeOQF6THvv57IOQM0OnGoJtDmdMPpFqoorTEXFvaqwiY5I%2BbQVzDt7auwizSe2%2FQcR0L%2Bhrhs1199z3l7bj25kgBz9koLmWZwAZAorvXSFDT9qOgu5oru0kaXSB2MkLNgKtj7rHUPm9U4RBjeowkQNRuiqYwBwsewtPWgnfkLoTXoEykwMq3mZp6UeqZjzWhLEVyEZQJxUilxjf1yV%2BC1FYJqt84h7eZewdDJApgR3inOtYZ8WRSgTNiZxGbBnsRl8pcOAdneCvm34sQJtdC4Tts6PMQS1UwF2KyKhrrSWzMWZF44wUC%2BFHuGgyr1R%2BRO2rgHV91IUm%2FMKUdY5JUbUnk0AT4sZ%2BNkPThUueM5bJWnTFCJTCXfGmIap84avzWVgHbLiKSkM0Z1E0PpGQVL2nNjBEfag6Ro5Qvvv39G%2FBlOr83JTyQn9xMkyBXz9eMC%2BFCC9x3BZ03NKJ1UQnIr0mmTCAatkZ8qNVAZeAfpIdg%2FnA32wOgUOxvjVrYlRHkcNJTSIqTlqbDnnM7KILavEz1ckBHOFEEHbCbwk%2BFKuxyDjzzPn4k%2FNZfoGGULKmyomtCbMILLt8MGOqUBFK%2BMkXvwkLrcrS86zxpkXobzBthtXpZct83tOHvG0i3CcA2EE6FXpRcILShmcsrBGOEFKm5RnEC7tdPUl2JX0PZvJ02mclzW4zIzwImSL0%2B0zx555V5V5jHu5oOFEJacYOxqxYFsTH3G95fuaiCWHXKWtXy5g40Lyby0H0axxlYTvELU3lqSAclZBjgZAO0pIBtnqS3H2qmqIJjDaLtvPSaa%2FQMg&X-Amz-Signature=1f63f18c1343cb4935d0b45450a27de4c5fcb7cc28c2cee1eaf3231fc4fbb2d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646IFDWSP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq71KOF04IGpuPp1MuTq5seU8mG8u2BJKhH4oAM%2FNQ3gIgbbLUk4J%2FF16rTofQthzOLoYqrR6K4wW11thS%2B7oXGV8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQHLbiNKThNFSqkOCrcAzxAotR%2Bljh6jCQ%2FZvoFuLAio4P0bZQ3YTqRT%2BwD4KFqi4aAOe1iGkZpeOQF6THvv57IOQM0OnGoJtDmdMPpFqoorTEXFvaqwiY5I%2BbQVzDt7auwizSe2%2FQcR0L%2Bhrhs1199z3l7bj25kgBz9koLmWZwAZAorvXSFDT9qOgu5oru0kaXSB2MkLNgKtj7rHUPm9U4RBjeowkQNRuiqYwBwsewtPWgnfkLoTXoEykwMq3mZp6UeqZjzWhLEVyEZQJxUilxjf1yV%2BC1FYJqt84h7eZewdDJApgR3inOtYZ8WRSgTNiZxGbBnsRl8pcOAdneCvm34sQJtdC4Tts6PMQS1UwF2KyKhrrSWzMWZF44wUC%2BFHuGgyr1R%2BRO2rgHV91IUm%2FMKUdY5JUbUnk0AT4sZ%2BNkPThUueM5bJWnTFCJTCXfGmIap84avzWVgHbLiKSkM0Z1E0PpGQVL2nNjBEfag6Ro5Qvvv39G%2FBlOr83JTyQn9xMkyBXz9eMC%2BFCC9x3BZ03NKJ1UQnIr0mmTCAatkZ8qNVAZeAfpIdg%2FnA32wOgUOxvjVrYlRHkcNJTSIqTlqbDnnM7KILavEz1ckBHOFEEHbCbwk%2BFKuxyDjzzPn4k%2FNZfoGGULKmyomtCbMILLt8MGOqUBFK%2BMkXvwkLrcrS86zxpkXobzBthtXpZct83tOHvG0i3CcA2EE6FXpRcILShmcsrBGOEFKm5RnEC7tdPUl2JX0PZvJ02mclzW4zIzwImSL0%2B0zx555V5V5jHu5oOFEJacYOxqxYFsTH3G95fuaiCWHXKWtXy5g40Lyby0H0axxlYTvELU3lqSAclZBjgZAO0pIBtnqS3H2qmqIJjDaLtvPSaa%2FQMg&X-Amz-Signature=4c8a9c0b3b0efe9e0765bed5e0dd90b1d598e84566ce4b6ec0f8cec666ad1b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646IFDWSP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq71KOF04IGpuPp1MuTq5seU8mG8u2BJKhH4oAM%2FNQ3gIgbbLUk4J%2FF16rTofQthzOLoYqrR6K4wW11thS%2B7oXGV8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQHLbiNKThNFSqkOCrcAzxAotR%2Bljh6jCQ%2FZvoFuLAio4P0bZQ3YTqRT%2BwD4KFqi4aAOe1iGkZpeOQF6THvv57IOQM0OnGoJtDmdMPpFqoorTEXFvaqwiY5I%2BbQVzDt7auwizSe2%2FQcR0L%2Bhrhs1199z3l7bj25kgBz9koLmWZwAZAorvXSFDT9qOgu5oru0kaXSB2MkLNgKtj7rHUPm9U4RBjeowkQNRuiqYwBwsewtPWgnfkLoTXoEykwMq3mZp6UeqZjzWhLEVyEZQJxUilxjf1yV%2BC1FYJqt84h7eZewdDJApgR3inOtYZ8WRSgTNiZxGbBnsRl8pcOAdneCvm34sQJtdC4Tts6PMQS1UwF2KyKhrrSWzMWZF44wUC%2BFHuGgyr1R%2BRO2rgHV91IUm%2FMKUdY5JUbUnk0AT4sZ%2BNkPThUueM5bJWnTFCJTCXfGmIap84avzWVgHbLiKSkM0Z1E0PpGQVL2nNjBEfag6Ro5Qvvv39G%2FBlOr83JTyQn9xMkyBXz9eMC%2BFCC9x3BZ03NKJ1UQnIr0mmTCAatkZ8qNVAZeAfpIdg%2FnA32wOgUOxvjVrYlRHkcNJTSIqTlqbDnnM7KILavEz1ckBHOFEEHbCbwk%2BFKuxyDjzzPn4k%2FNZfoGGULKmyomtCbMILLt8MGOqUBFK%2BMkXvwkLrcrS86zxpkXobzBthtXpZct83tOHvG0i3CcA2EE6FXpRcILShmcsrBGOEFKm5RnEC7tdPUl2JX0PZvJ02mclzW4zIzwImSL0%2B0zx555V5V5jHu5oOFEJacYOxqxYFsTH3G95fuaiCWHXKWtXy5g40Lyby0H0axxlYTvELU3lqSAclZBjgZAO0pIBtnqS3H2qmqIJjDaLtvPSaa%2FQMg&X-Amz-Signature=6a5dd54f599effc6a4a4f647c133825be08db9011390511b012a4460ef04b452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646IFDWSP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq71KOF04IGpuPp1MuTq5seU8mG8u2BJKhH4oAM%2FNQ3gIgbbLUk4J%2FF16rTofQthzOLoYqrR6K4wW11thS%2B7oXGV8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQHLbiNKThNFSqkOCrcAzxAotR%2Bljh6jCQ%2FZvoFuLAio4P0bZQ3YTqRT%2BwD4KFqi4aAOe1iGkZpeOQF6THvv57IOQM0OnGoJtDmdMPpFqoorTEXFvaqwiY5I%2BbQVzDt7auwizSe2%2FQcR0L%2Bhrhs1199z3l7bj25kgBz9koLmWZwAZAorvXSFDT9qOgu5oru0kaXSB2MkLNgKtj7rHUPm9U4RBjeowkQNRuiqYwBwsewtPWgnfkLoTXoEykwMq3mZp6UeqZjzWhLEVyEZQJxUilxjf1yV%2BC1FYJqt84h7eZewdDJApgR3inOtYZ8WRSgTNiZxGbBnsRl8pcOAdneCvm34sQJtdC4Tts6PMQS1UwF2KyKhrrSWzMWZF44wUC%2BFHuGgyr1R%2BRO2rgHV91IUm%2FMKUdY5JUbUnk0AT4sZ%2BNkPThUueM5bJWnTFCJTCXfGmIap84avzWVgHbLiKSkM0Z1E0PpGQVL2nNjBEfag6Ro5Qvvv39G%2FBlOr83JTyQn9xMkyBXz9eMC%2BFCC9x3BZ03NKJ1UQnIr0mmTCAatkZ8qNVAZeAfpIdg%2FnA32wOgUOxvjVrYlRHkcNJTSIqTlqbDnnM7KILavEz1ckBHOFEEHbCbwk%2BFKuxyDjzzPn4k%2FNZfoGGULKmyomtCbMILLt8MGOqUBFK%2BMkXvwkLrcrS86zxpkXobzBthtXpZct83tOHvG0i3CcA2EE6FXpRcILShmcsrBGOEFKm5RnEC7tdPUl2JX0PZvJ02mclzW4zIzwImSL0%2B0zx555V5V5jHu5oOFEJacYOxqxYFsTH3G95fuaiCWHXKWtXy5g40Lyby0H0axxlYTvELU3lqSAclZBjgZAO0pIBtnqS3H2qmqIJjDaLtvPSaa%2FQMg&X-Amz-Signature=d74b5734c5581c53d320ba8d7eeaac235ed3df80bb83353f126de88591658d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
