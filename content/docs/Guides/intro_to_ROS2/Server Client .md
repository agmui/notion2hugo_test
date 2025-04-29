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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFWPC23%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD2QQ6WMv6IjsqkdPqe0Oy0%2BVkWir6H2%2FDiW3%2BKWVA7AiEAv%2BWXue%2BlZ2XpSTYSyoCFkGQIGQXdhNqW0T6KfgnowCgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaBSW4uRk1DFs%2B8iyrcAxGUK6WDmMHAHancogxGtq3Km81XKbKYZt6%2FvRSNnFGQATc5yHe14VBSwpba0OL94OLszWnrnrPOTCZH%2F72uOkYhRyVPsShM5U6QObogBe9nRdzRqCIsG1TD1c2Jyn3Ykk%2FAYvnk%2BKb7JntfQrWbFUtg5e1YTRvD1D2ljzEbxvh7nYQY1Q8ukkPtborFV1tBTwxYxpJAwxtQMtHhkiQ1D0UXb32jDEJbFnjQG1trA%2FoOw9jaXy7HL8wqg6qPQLc1I6H5fLG6jThLRDo2xU13it0xIXDYthRm5NQNa16zrDeIsVKdsg8HtoSGaTyRg1n3Bb2MM%2FUL2l5yqqZrvBX1CuLti0uRJy5E4tFWyGnAuqHRwSlVY1ccEJHDPohadYgEraOWJcLCSh%2BdC5rKTdd76sSsnmmaSPzDUurPccR6lvtVQZpX5ZfkGXyxs0NaGhOlX5DjoiC6nBDgmTGmpDkS7yBr6%2FQHxa%2B19FUK%2FO5ZUm8dGDXELda7RwYxDEhzbFrvvSioSAT40PNXA3Yz%2FpTE0L9JiZ5Abt50bmupKTIl31cWsLNM1fMyuqtQj%2FDOk2Zpu%2BP3dfzgoAF06dEsrcAsUj6c9Z1p87uJjRT9IwID5DKUt5%2BVCApLxQpRg1WUMLuUxMAGOqUBJWkoUfDLDkiPxe10chQFOaB%2FP5ekC%2BBT46SJtgoADxKopXWUfsDHTD08Yb8TpLz67EezkZbpWE6ghpBIwSQt0QqmHq%2BgZNAYT2PpREf4Be44QrznhQDYJIHSfWZqIBDnVO4UiQG88dYPEdCCGCmJNy7a%2FGDvbZXmDmAdkDY57a7mG4Xyh18F8Ag5mmkUCICfGu2lJGM0kb3Q5WOwklCzEkBTWnAg&X-Amz-Signature=2fdcee7d60c377a7f0050e7856cddbe720815e35f2e465f28b8d69c9d15582d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFWPC23%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD2QQ6WMv6IjsqkdPqe0Oy0%2BVkWir6H2%2FDiW3%2BKWVA7AiEAv%2BWXue%2BlZ2XpSTYSyoCFkGQIGQXdhNqW0T6KfgnowCgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaBSW4uRk1DFs%2B8iyrcAxGUK6WDmMHAHancogxGtq3Km81XKbKYZt6%2FvRSNnFGQATc5yHe14VBSwpba0OL94OLszWnrnrPOTCZH%2F72uOkYhRyVPsShM5U6QObogBe9nRdzRqCIsG1TD1c2Jyn3Ykk%2FAYvnk%2BKb7JntfQrWbFUtg5e1YTRvD1D2ljzEbxvh7nYQY1Q8ukkPtborFV1tBTwxYxpJAwxtQMtHhkiQ1D0UXb32jDEJbFnjQG1trA%2FoOw9jaXy7HL8wqg6qPQLc1I6H5fLG6jThLRDo2xU13it0xIXDYthRm5NQNa16zrDeIsVKdsg8HtoSGaTyRg1n3Bb2MM%2FUL2l5yqqZrvBX1CuLti0uRJy5E4tFWyGnAuqHRwSlVY1ccEJHDPohadYgEraOWJcLCSh%2BdC5rKTdd76sSsnmmaSPzDUurPccR6lvtVQZpX5ZfkGXyxs0NaGhOlX5DjoiC6nBDgmTGmpDkS7yBr6%2FQHxa%2B19FUK%2FO5ZUm8dGDXELda7RwYxDEhzbFrvvSioSAT40PNXA3Yz%2FpTE0L9JiZ5Abt50bmupKTIl31cWsLNM1fMyuqtQj%2FDOk2Zpu%2BP3dfzgoAF06dEsrcAsUj6c9Z1p87uJjRT9IwID5DKUt5%2BVCApLxQpRg1WUMLuUxMAGOqUBJWkoUfDLDkiPxe10chQFOaB%2FP5ekC%2BBT46SJtgoADxKopXWUfsDHTD08Yb8TpLz67EezkZbpWE6ghpBIwSQt0QqmHq%2BgZNAYT2PpREf4Be44QrznhQDYJIHSfWZqIBDnVO4UiQG88dYPEdCCGCmJNy7a%2FGDvbZXmDmAdkDY57a7mG4Xyh18F8Ag5mmkUCICfGu2lJGM0kb3Q5WOwklCzEkBTWnAg&X-Amz-Signature=ab840f6ede6a35e7fa2acf19b3492b7617d2558dd3cba58cbb67d3bc5b84e7bf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFWPC23%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD2QQ6WMv6IjsqkdPqe0Oy0%2BVkWir6H2%2FDiW3%2BKWVA7AiEAv%2BWXue%2BlZ2XpSTYSyoCFkGQIGQXdhNqW0T6KfgnowCgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaBSW4uRk1DFs%2B8iyrcAxGUK6WDmMHAHancogxGtq3Km81XKbKYZt6%2FvRSNnFGQATc5yHe14VBSwpba0OL94OLszWnrnrPOTCZH%2F72uOkYhRyVPsShM5U6QObogBe9nRdzRqCIsG1TD1c2Jyn3Ykk%2FAYvnk%2BKb7JntfQrWbFUtg5e1YTRvD1D2ljzEbxvh7nYQY1Q8ukkPtborFV1tBTwxYxpJAwxtQMtHhkiQ1D0UXb32jDEJbFnjQG1trA%2FoOw9jaXy7HL8wqg6qPQLc1I6H5fLG6jThLRDo2xU13it0xIXDYthRm5NQNa16zrDeIsVKdsg8HtoSGaTyRg1n3Bb2MM%2FUL2l5yqqZrvBX1CuLti0uRJy5E4tFWyGnAuqHRwSlVY1ccEJHDPohadYgEraOWJcLCSh%2BdC5rKTdd76sSsnmmaSPzDUurPccR6lvtVQZpX5ZfkGXyxs0NaGhOlX5DjoiC6nBDgmTGmpDkS7yBr6%2FQHxa%2B19FUK%2FO5ZUm8dGDXELda7RwYxDEhzbFrvvSioSAT40PNXA3Yz%2FpTE0L9JiZ5Abt50bmupKTIl31cWsLNM1fMyuqtQj%2FDOk2Zpu%2BP3dfzgoAF06dEsrcAsUj6c9Z1p87uJjRT9IwID5DKUt5%2BVCApLxQpRg1WUMLuUxMAGOqUBJWkoUfDLDkiPxe10chQFOaB%2FP5ekC%2BBT46SJtgoADxKopXWUfsDHTD08Yb8TpLz67EezkZbpWE6ghpBIwSQt0QqmHq%2BgZNAYT2PpREf4Be44QrznhQDYJIHSfWZqIBDnVO4UiQG88dYPEdCCGCmJNy7a%2FGDvbZXmDmAdkDY57a7mG4Xyh18F8Ag5mmkUCICfGu2lJGM0kb3Q5WOwklCzEkBTWnAg&X-Amz-Signature=1337f8434e603cfcb066340620e30d78a802af465fa6a68d1880198b70d9a56c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFWPC23%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD2QQ6WMv6IjsqkdPqe0Oy0%2BVkWir6H2%2FDiW3%2BKWVA7AiEAv%2BWXue%2BlZ2XpSTYSyoCFkGQIGQXdhNqW0T6KfgnowCgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaBSW4uRk1DFs%2B8iyrcAxGUK6WDmMHAHancogxGtq3Km81XKbKYZt6%2FvRSNnFGQATc5yHe14VBSwpba0OL94OLszWnrnrPOTCZH%2F72uOkYhRyVPsShM5U6QObogBe9nRdzRqCIsG1TD1c2Jyn3Ykk%2FAYvnk%2BKb7JntfQrWbFUtg5e1YTRvD1D2ljzEbxvh7nYQY1Q8ukkPtborFV1tBTwxYxpJAwxtQMtHhkiQ1D0UXb32jDEJbFnjQG1trA%2FoOw9jaXy7HL8wqg6qPQLc1I6H5fLG6jThLRDo2xU13it0xIXDYthRm5NQNa16zrDeIsVKdsg8HtoSGaTyRg1n3Bb2MM%2FUL2l5yqqZrvBX1CuLti0uRJy5E4tFWyGnAuqHRwSlVY1ccEJHDPohadYgEraOWJcLCSh%2BdC5rKTdd76sSsnmmaSPzDUurPccR6lvtVQZpX5ZfkGXyxs0NaGhOlX5DjoiC6nBDgmTGmpDkS7yBr6%2FQHxa%2B19FUK%2FO5ZUm8dGDXELda7RwYxDEhzbFrvvSioSAT40PNXA3Yz%2FpTE0L9JiZ5Abt50bmupKTIl31cWsLNM1fMyuqtQj%2FDOk2Zpu%2BP3dfzgoAF06dEsrcAsUj6c9Z1p87uJjRT9IwID5DKUt5%2BVCApLxQpRg1WUMLuUxMAGOqUBJWkoUfDLDkiPxe10chQFOaB%2FP5ekC%2BBT46SJtgoADxKopXWUfsDHTD08Yb8TpLz67EezkZbpWE6ghpBIwSQt0QqmHq%2BgZNAYT2PpREf4Be44QrznhQDYJIHSfWZqIBDnVO4UiQG88dYPEdCCGCmJNy7a%2FGDvbZXmDmAdkDY57a7mG4Xyh18F8Ag5mmkUCICfGu2lJGM0kb3Q5WOwklCzEkBTWnAg&X-Amz-Signature=590f8f8d5925b2316e78ee0a5ca022d13f21407fce6549c40821d8ae67c0dfef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFWPC23%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD2QQ6WMv6IjsqkdPqe0Oy0%2BVkWir6H2%2FDiW3%2BKWVA7AiEAv%2BWXue%2BlZ2XpSTYSyoCFkGQIGQXdhNqW0T6KfgnowCgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaBSW4uRk1DFs%2B8iyrcAxGUK6WDmMHAHancogxGtq3Km81XKbKYZt6%2FvRSNnFGQATc5yHe14VBSwpba0OL94OLszWnrnrPOTCZH%2F72uOkYhRyVPsShM5U6QObogBe9nRdzRqCIsG1TD1c2Jyn3Ykk%2FAYvnk%2BKb7JntfQrWbFUtg5e1YTRvD1D2ljzEbxvh7nYQY1Q8ukkPtborFV1tBTwxYxpJAwxtQMtHhkiQ1D0UXb32jDEJbFnjQG1trA%2FoOw9jaXy7HL8wqg6qPQLc1I6H5fLG6jThLRDo2xU13it0xIXDYthRm5NQNa16zrDeIsVKdsg8HtoSGaTyRg1n3Bb2MM%2FUL2l5yqqZrvBX1CuLti0uRJy5E4tFWyGnAuqHRwSlVY1ccEJHDPohadYgEraOWJcLCSh%2BdC5rKTdd76sSsnmmaSPzDUurPccR6lvtVQZpX5ZfkGXyxs0NaGhOlX5DjoiC6nBDgmTGmpDkS7yBr6%2FQHxa%2B19FUK%2FO5ZUm8dGDXELda7RwYxDEhzbFrvvSioSAT40PNXA3Yz%2FpTE0L9JiZ5Abt50bmupKTIl31cWsLNM1fMyuqtQj%2FDOk2Zpu%2BP3dfzgoAF06dEsrcAsUj6c9Z1p87uJjRT9IwID5DKUt5%2BVCApLxQpRg1WUMLuUxMAGOqUBJWkoUfDLDkiPxe10chQFOaB%2FP5ekC%2BBT46SJtgoADxKopXWUfsDHTD08Yb8TpLz67EezkZbpWE6ghpBIwSQt0QqmHq%2BgZNAYT2PpREf4Be44QrznhQDYJIHSfWZqIBDnVO4UiQG88dYPEdCCGCmJNy7a%2FGDvbZXmDmAdkDY57a7mG4Xyh18F8Ag5mmkUCICfGu2lJGM0kb3Q5WOwklCzEkBTWnAg&X-Amz-Signature=3eb9fab908b0cdb7bf21d2c20539baaad117516a4053e83e62c70830180b3736&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
