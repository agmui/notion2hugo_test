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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC67MKNV%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICi2OkFD0nttXExzWJ0z%2B5D2zzYszVaXi%2BVZj6ZDLl5QAiAEoZlQx5UCZF98FqjAp8UfrvT45YYI72xSBaU1KhnVfir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM0hsmKiJyxtLSKGiFKtwDXa%2FtbjHajXQPP5OZSlhcn8tUbIUGxzduWBcz97TxLscdNN0KQL%2FisdMhYyGnChkSONUH%2FqlX%2F%2FGM4fydiidv89jmmvh%2B64h39vBzRJoAOIOLdJUv6fmuRXRzMBIbe25JN%2B1z7GelhMhK%2BIFmdZ0TPhiT0QjosmLKCq5bcEcgo0j4wZEafd2tdqDTmzDkBH2E4XLC7BKjBomXyHGcRONN5YgHDxcXc7kXtIrbnZwb%2BCfieSou4UfNEPmDvGvtn68X0LcPYXLJLyyuMgqSAfI%2F3ERFpfpQN7d8ZzwrobjhNdc4K1V03SW%2FUdZf%2FOA7RYdU00YTA44V%2BGqLfRHH0tP8TDtBOqTz3fwNOOzoVTSmWZMTEWo1KVp5gLSxKU1KTblQ9kMuwy5Ls%2FzhZ3foNUFchEgxAgztjM5Fj%2FEM6KIP%2FYaa7NBennBBHEajr9BuMaj52wssFQR5D1az%2B9BCfbS%2FVQtK4Can8o5%2FJcpYj52MiNZNZLFcn4YKpkJUy34gchL3pBbS5XhWHOVQTooFJM%2FYNLshfZYdeOE7RnZT2idTX7nu9kHPpfIoYDJ1cf%2F0LPPdPOw6ucp%2FBw7MyG2RS6efQqJjutug%2Fd5CcojUcLnSN4cgkpnYPJ8eQ7nGrf8wxpS8wAY6pgFSDAzdwHdqsVt9Hce8aV%2FCjYTMpRE2qaAFTN1KXQr151dXC71PkT%2F09FU2R3V5aJqtjiykmiHjElAKKBZ3v9nSG9DJz2CmfpGrgjol8iuQAfeh1jTFQvGnEoCu5oqBpG7YvLYtRNieuYe%2Bb6kDduOAB%2FG5z7%2BD2xzRS4EUecApAFWTgEzZYoo3azwzNtFR4AUu4hUEo5B1gX%2FyuO0j37De2sZk%2FVdi&X-Amz-Signature=2238f72d9bfa0119333a5ee55bb7e792929c01df9cd6f6c5f7ae3c8386b6fefa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC67MKNV%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICi2OkFD0nttXExzWJ0z%2B5D2zzYszVaXi%2BVZj6ZDLl5QAiAEoZlQx5UCZF98FqjAp8UfrvT45YYI72xSBaU1KhnVfir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM0hsmKiJyxtLSKGiFKtwDXa%2FtbjHajXQPP5OZSlhcn8tUbIUGxzduWBcz97TxLscdNN0KQL%2FisdMhYyGnChkSONUH%2FqlX%2F%2FGM4fydiidv89jmmvh%2B64h39vBzRJoAOIOLdJUv6fmuRXRzMBIbe25JN%2B1z7GelhMhK%2BIFmdZ0TPhiT0QjosmLKCq5bcEcgo0j4wZEafd2tdqDTmzDkBH2E4XLC7BKjBomXyHGcRONN5YgHDxcXc7kXtIrbnZwb%2BCfieSou4UfNEPmDvGvtn68X0LcPYXLJLyyuMgqSAfI%2F3ERFpfpQN7d8ZzwrobjhNdc4K1V03SW%2FUdZf%2FOA7RYdU00YTA44V%2BGqLfRHH0tP8TDtBOqTz3fwNOOzoVTSmWZMTEWo1KVp5gLSxKU1KTblQ9kMuwy5Ls%2FzhZ3foNUFchEgxAgztjM5Fj%2FEM6KIP%2FYaa7NBennBBHEajr9BuMaj52wssFQR5D1az%2B9BCfbS%2FVQtK4Can8o5%2FJcpYj52MiNZNZLFcn4YKpkJUy34gchL3pBbS5XhWHOVQTooFJM%2FYNLshfZYdeOE7RnZT2idTX7nu9kHPpfIoYDJ1cf%2F0LPPdPOw6ucp%2FBw7MyG2RS6efQqJjutug%2Fd5CcojUcLnSN4cgkpnYPJ8eQ7nGrf8wxpS8wAY6pgFSDAzdwHdqsVt9Hce8aV%2FCjYTMpRE2qaAFTN1KXQr151dXC71PkT%2F09FU2R3V5aJqtjiykmiHjElAKKBZ3v9nSG9DJz2CmfpGrgjol8iuQAfeh1jTFQvGnEoCu5oqBpG7YvLYtRNieuYe%2Bb6kDduOAB%2FG5z7%2BD2xzRS4EUecApAFWTgEzZYoo3azwzNtFR4AUu4hUEo5B1gX%2FyuO0j37De2sZk%2FVdi&X-Amz-Signature=fbc7d042c0913eb6a4925bd705d27828c4f3b1a90af1594233f6535d7548fce1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC67MKNV%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICi2OkFD0nttXExzWJ0z%2B5D2zzYszVaXi%2BVZj6ZDLl5QAiAEoZlQx5UCZF98FqjAp8UfrvT45YYI72xSBaU1KhnVfir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM0hsmKiJyxtLSKGiFKtwDXa%2FtbjHajXQPP5OZSlhcn8tUbIUGxzduWBcz97TxLscdNN0KQL%2FisdMhYyGnChkSONUH%2FqlX%2F%2FGM4fydiidv89jmmvh%2B64h39vBzRJoAOIOLdJUv6fmuRXRzMBIbe25JN%2B1z7GelhMhK%2BIFmdZ0TPhiT0QjosmLKCq5bcEcgo0j4wZEafd2tdqDTmzDkBH2E4XLC7BKjBomXyHGcRONN5YgHDxcXc7kXtIrbnZwb%2BCfieSou4UfNEPmDvGvtn68X0LcPYXLJLyyuMgqSAfI%2F3ERFpfpQN7d8ZzwrobjhNdc4K1V03SW%2FUdZf%2FOA7RYdU00YTA44V%2BGqLfRHH0tP8TDtBOqTz3fwNOOzoVTSmWZMTEWo1KVp5gLSxKU1KTblQ9kMuwy5Ls%2FzhZ3foNUFchEgxAgztjM5Fj%2FEM6KIP%2FYaa7NBennBBHEajr9BuMaj52wssFQR5D1az%2B9BCfbS%2FVQtK4Can8o5%2FJcpYj52MiNZNZLFcn4YKpkJUy34gchL3pBbS5XhWHOVQTooFJM%2FYNLshfZYdeOE7RnZT2idTX7nu9kHPpfIoYDJ1cf%2F0LPPdPOw6ucp%2FBw7MyG2RS6efQqJjutug%2Fd5CcojUcLnSN4cgkpnYPJ8eQ7nGrf8wxpS8wAY6pgFSDAzdwHdqsVt9Hce8aV%2FCjYTMpRE2qaAFTN1KXQr151dXC71PkT%2F09FU2R3V5aJqtjiykmiHjElAKKBZ3v9nSG9DJz2CmfpGrgjol8iuQAfeh1jTFQvGnEoCu5oqBpG7YvLYtRNieuYe%2Bb6kDduOAB%2FG5z7%2BD2xzRS4EUecApAFWTgEzZYoo3azwzNtFR4AUu4hUEo5B1gX%2FyuO0j37De2sZk%2FVdi&X-Amz-Signature=93dff40669a5a7d837035ff73ad48d053b6010da2637973695865a2781b98136&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC67MKNV%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICi2OkFD0nttXExzWJ0z%2B5D2zzYszVaXi%2BVZj6ZDLl5QAiAEoZlQx5UCZF98FqjAp8UfrvT45YYI72xSBaU1KhnVfir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM0hsmKiJyxtLSKGiFKtwDXa%2FtbjHajXQPP5OZSlhcn8tUbIUGxzduWBcz97TxLscdNN0KQL%2FisdMhYyGnChkSONUH%2FqlX%2F%2FGM4fydiidv89jmmvh%2B64h39vBzRJoAOIOLdJUv6fmuRXRzMBIbe25JN%2B1z7GelhMhK%2BIFmdZ0TPhiT0QjosmLKCq5bcEcgo0j4wZEafd2tdqDTmzDkBH2E4XLC7BKjBomXyHGcRONN5YgHDxcXc7kXtIrbnZwb%2BCfieSou4UfNEPmDvGvtn68X0LcPYXLJLyyuMgqSAfI%2F3ERFpfpQN7d8ZzwrobjhNdc4K1V03SW%2FUdZf%2FOA7RYdU00YTA44V%2BGqLfRHH0tP8TDtBOqTz3fwNOOzoVTSmWZMTEWo1KVp5gLSxKU1KTblQ9kMuwy5Ls%2FzhZ3foNUFchEgxAgztjM5Fj%2FEM6KIP%2FYaa7NBennBBHEajr9BuMaj52wssFQR5D1az%2B9BCfbS%2FVQtK4Can8o5%2FJcpYj52MiNZNZLFcn4YKpkJUy34gchL3pBbS5XhWHOVQTooFJM%2FYNLshfZYdeOE7RnZT2idTX7nu9kHPpfIoYDJ1cf%2F0LPPdPOw6ucp%2FBw7MyG2RS6efQqJjutug%2Fd5CcojUcLnSN4cgkpnYPJ8eQ7nGrf8wxpS8wAY6pgFSDAzdwHdqsVt9Hce8aV%2FCjYTMpRE2qaAFTN1KXQr151dXC71PkT%2F09FU2R3V5aJqtjiykmiHjElAKKBZ3v9nSG9DJz2CmfpGrgjol8iuQAfeh1jTFQvGnEoCu5oqBpG7YvLYtRNieuYe%2Bb6kDduOAB%2FG5z7%2BD2xzRS4EUecApAFWTgEzZYoo3azwzNtFR4AUu4hUEo5B1gX%2FyuO0j37De2sZk%2FVdi&X-Amz-Signature=e86bd4c0014d92ca312395ac9063573104ee7283574f9a326f928d70be1dcda3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC67MKNV%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICi2OkFD0nttXExzWJ0z%2B5D2zzYszVaXi%2BVZj6ZDLl5QAiAEoZlQx5UCZF98FqjAp8UfrvT45YYI72xSBaU1KhnVfir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM0hsmKiJyxtLSKGiFKtwDXa%2FtbjHajXQPP5OZSlhcn8tUbIUGxzduWBcz97TxLscdNN0KQL%2FisdMhYyGnChkSONUH%2FqlX%2F%2FGM4fydiidv89jmmvh%2B64h39vBzRJoAOIOLdJUv6fmuRXRzMBIbe25JN%2B1z7GelhMhK%2BIFmdZ0TPhiT0QjosmLKCq5bcEcgo0j4wZEafd2tdqDTmzDkBH2E4XLC7BKjBomXyHGcRONN5YgHDxcXc7kXtIrbnZwb%2BCfieSou4UfNEPmDvGvtn68X0LcPYXLJLyyuMgqSAfI%2F3ERFpfpQN7d8ZzwrobjhNdc4K1V03SW%2FUdZf%2FOA7RYdU00YTA44V%2BGqLfRHH0tP8TDtBOqTz3fwNOOzoVTSmWZMTEWo1KVp5gLSxKU1KTblQ9kMuwy5Ls%2FzhZ3foNUFchEgxAgztjM5Fj%2FEM6KIP%2FYaa7NBennBBHEajr9BuMaj52wssFQR5D1az%2B9BCfbS%2FVQtK4Can8o5%2FJcpYj52MiNZNZLFcn4YKpkJUy34gchL3pBbS5XhWHOVQTooFJM%2FYNLshfZYdeOE7RnZT2idTX7nu9kHPpfIoYDJ1cf%2F0LPPdPOw6ucp%2FBw7MyG2RS6efQqJjutug%2Fd5CcojUcLnSN4cgkpnYPJ8eQ7nGrf8wxpS8wAY6pgFSDAzdwHdqsVt9Hce8aV%2FCjYTMpRE2qaAFTN1KXQr151dXC71PkT%2F09FU2R3V5aJqtjiykmiHjElAKKBZ3v9nSG9DJz2CmfpGrgjol8iuQAfeh1jTFQvGnEoCu5oqBpG7YvLYtRNieuYe%2Bb6kDduOAB%2FG5z7%2BD2xzRS4EUecApAFWTgEzZYoo3azwzNtFR4AUu4hUEo5B1gX%2FyuO0j37De2sZk%2FVdi&X-Amz-Signature=69cf2bab39513addeba15b43c829bf345bcab07599f3fcb6ccc4afc1e943825a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
