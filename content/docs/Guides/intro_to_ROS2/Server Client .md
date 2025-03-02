---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RDCXQX6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2yQ8%2Bh7RNTqhTG%2F%2BWuarXcxSZEZwS0gAlHw%2FfMeXOTAiEA%2FZV5AwdDovfKTV61Yoxy%2BPfjaj%2BZY%2FU0DkCBd92hUSYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFn%2B9f2JZfIhX3AAtSrcA8CVaoZe84ZSxPC8%2FDL3xH1lcDhEovAPloGkRX1Z2DctVRvTevQY1eMSQqTu8yRVU4uAUnbd4XGah%2FzdDtFUKRmSr04luXnm8HXSoJR9pDgZNn0M8PIiO6FIR7MyBB6q6QZ9PZBV%2B1GfaJQkEdmMEPzjo0kjeDYDq6graaTOAENDfDdxJFC2d%2FX%2BSxIoPLK8q5A%2BnodVWoIoOV%2ByxYOdRd5vMuVlZKfj9NkwnNl%2FbSENS9X6hB%2Bmh4wdqpvPz1CETYS%2FwJ6AK8QTRUtGeDnIeHFrbwH1w1UsUFfE%2FGzpwj2Q7e56h2DsrB859NYJG6h5hNNpMzmNA9Ku52WTr7hb6g5Xs1Fmzdy73COdPktM9tSf8y6M09HUdFDT0xSqBTcQU17Oj1hwJaWbeSxsAYO63fycqwOtjYegcxxoGuhjdQShct2H2NmgdBckCwJyhEg3mIZWFxG0vx33E%2FEHdQsQkjYS7glPSSLa6qgipRjuVrnGOgCFbSh8sJ7uz3vi2ffZMUPaujou3ERhsCmd77D04KMAoS9CFEMhDDEyK4agBFfR2JEo9fEx%2FKaTN0Bg36sQRqg9k1KoNYzUi0IfDNLzMg7yj8S1OJPjKAZmKLKKS96JRGoikqGFvD6MTqH4MPnzkL4GOqUBTRulcHWPCvz6vXoaxWJwWh%2Bq1arGAREbivKvuNlHqMlmJtYUlimtODaUL42ipzAfqxn1gE6scc0inRkj0JODFO%2FleXUEgmPemxVkeYZKa8i22RaySR7j%2B5bT%2BHu4%2F6ktFKYBLO6%2Fcy5rtgS65T3PDBIA3kLMisHP2AyGEnnffieQd2mJcL35Gp6gC7QJhybF4iwgZC9MkgiRjaC8BwnFFlYO8PKL&X-Amz-Signature=f6860e785fa9ad4534c10cb7f91d76f3466250d6d48b1e5fe672cbfac83df850&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RDCXQX6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2yQ8%2Bh7RNTqhTG%2F%2BWuarXcxSZEZwS0gAlHw%2FfMeXOTAiEA%2FZV5AwdDovfKTV61Yoxy%2BPfjaj%2BZY%2FU0DkCBd92hUSYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFn%2B9f2JZfIhX3AAtSrcA8CVaoZe84ZSxPC8%2FDL3xH1lcDhEovAPloGkRX1Z2DctVRvTevQY1eMSQqTu8yRVU4uAUnbd4XGah%2FzdDtFUKRmSr04luXnm8HXSoJR9pDgZNn0M8PIiO6FIR7MyBB6q6QZ9PZBV%2B1GfaJQkEdmMEPzjo0kjeDYDq6graaTOAENDfDdxJFC2d%2FX%2BSxIoPLK8q5A%2BnodVWoIoOV%2ByxYOdRd5vMuVlZKfj9NkwnNl%2FbSENS9X6hB%2Bmh4wdqpvPz1CETYS%2FwJ6AK8QTRUtGeDnIeHFrbwH1w1UsUFfE%2FGzpwj2Q7e56h2DsrB859NYJG6h5hNNpMzmNA9Ku52WTr7hb6g5Xs1Fmzdy73COdPktM9tSf8y6M09HUdFDT0xSqBTcQU17Oj1hwJaWbeSxsAYO63fycqwOtjYegcxxoGuhjdQShct2H2NmgdBckCwJyhEg3mIZWFxG0vx33E%2FEHdQsQkjYS7glPSSLa6qgipRjuVrnGOgCFbSh8sJ7uz3vi2ffZMUPaujou3ERhsCmd77D04KMAoS9CFEMhDDEyK4agBFfR2JEo9fEx%2FKaTN0Bg36sQRqg9k1KoNYzUi0IfDNLzMg7yj8S1OJPjKAZmKLKKS96JRGoikqGFvD6MTqH4MPnzkL4GOqUBTRulcHWPCvz6vXoaxWJwWh%2Bq1arGAREbivKvuNlHqMlmJtYUlimtODaUL42ipzAfqxn1gE6scc0inRkj0JODFO%2FleXUEgmPemxVkeYZKa8i22RaySR7j%2B5bT%2BHu4%2F6ktFKYBLO6%2Fcy5rtgS65T3PDBIA3kLMisHP2AyGEnnffieQd2mJcL35Gp6gC7QJhybF4iwgZC9MkgiRjaC8BwnFFlYO8PKL&X-Amz-Signature=83be37848005e4eb524ba690357faf074f031679345f11460a75b2ccc826a880&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RDCXQX6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2yQ8%2Bh7RNTqhTG%2F%2BWuarXcxSZEZwS0gAlHw%2FfMeXOTAiEA%2FZV5AwdDovfKTV61Yoxy%2BPfjaj%2BZY%2FU0DkCBd92hUSYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFn%2B9f2JZfIhX3AAtSrcA8CVaoZe84ZSxPC8%2FDL3xH1lcDhEovAPloGkRX1Z2DctVRvTevQY1eMSQqTu8yRVU4uAUnbd4XGah%2FzdDtFUKRmSr04luXnm8HXSoJR9pDgZNn0M8PIiO6FIR7MyBB6q6QZ9PZBV%2B1GfaJQkEdmMEPzjo0kjeDYDq6graaTOAENDfDdxJFC2d%2FX%2BSxIoPLK8q5A%2BnodVWoIoOV%2ByxYOdRd5vMuVlZKfj9NkwnNl%2FbSENS9X6hB%2Bmh4wdqpvPz1CETYS%2FwJ6AK8QTRUtGeDnIeHFrbwH1w1UsUFfE%2FGzpwj2Q7e56h2DsrB859NYJG6h5hNNpMzmNA9Ku52WTr7hb6g5Xs1Fmzdy73COdPktM9tSf8y6M09HUdFDT0xSqBTcQU17Oj1hwJaWbeSxsAYO63fycqwOtjYegcxxoGuhjdQShct2H2NmgdBckCwJyhEg3mIZWFxG0vx33E%2FEHdQsQkjYS7glPSSLa6qgipRjuVrnGOgCFbSh8sJ7uz3vi2ffZMUPaujou3ERhsCmd77D04KMAoS9CFEMhDDEyK4agBFfR2JEo9fEx%2FKaTN0Bg36sQRqg9k1KoNYzUi0IfDNLzMg7yj8S1OJPjKAZmKLKKS96JRGoikqGFvD6MTqH4MPnzkL4GOqUBTRulcHWPCvz6vXoaxWJwWh%2Bq1arGAREbivKvuNlHqMlmJtYUlimtODaUL42ipzAfqxn1gE6scc0inRkj0JODFO%2FleXUEgmPemxVkeYZKa8i22RaySR7j%2B5bT%2BHu4%2F6ktFKYBLO6%2Fcy5rtgS65T3PDBIA3kLMisHP2AyGEnnffieQd2mJcL35Gp6gC7QJhybF4iwgZC9MkgiRjaC8BwnFFlYO8PKL&X-Amz-Signature=aee02a10f8c5d33c1cb8921ee5df23f4c62e55e67421a07f2a19a4af865ec62e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RDCXQX6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2yQ8%2Bh7RNTqhTG%2F%2BWuarXcxSZEZwS0gAlHw%2FfMeXOTAiEA%2FZV5AwdDovfKTV61Yoxy%2BPfjaj%2BZY%2FU0DkCBd92hUSYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFn%2B9f2JZfIhX3AAtSrcA8CVaoZe84ZSxPC8%2FDL3xH1lcDhEovAPloGkRX1Z2DctVRvTevQY1eMSQqTu8yRVU4uAUnbd4XGah%2FzdDtFUKRmSr04luXnm8HXSoJR9pDgZNn0M8PIiO6FIR7MyBB6q6QZ9PZBV%2B1GfaJQkEdmMEPzjo0kjeDYDq6graaTOAENDfDdxJFC2d%2FX%2BSxIoPLK8q5A%2BnodVWoIoOV%2ByxYOdRd5vMuVlZKfj9NkwnNl%2FbSENS9X6hB%2Bmh4wdqpvPz1CETYS%2FwJ6AK8QTRUtGeDnIeHFrbwH1w1UsUFfE%2FGzpwj2Q7e56h2DsrB859NYJG6h5hNNpMzmNA9Ku52WTr7hb6g5Xs1Fmzdy73COdPktM9tSf8y6M09HUdFDT0xSqBTcQU17Oj1hwJaWbeSxsAYO63fycqwOtjYegcxxoGuhjdQShct2H2NmgdBckCwJyhEg3mIZWFxG0vx33E%2FEHdQsQkjYS7glPSSLa6qgipRjuVrnGOgCFbSh8sJ7uz3vi2ffZMUPaujou3ERhsCmd77D04KMAoS9CFEMhDDEyK4agBFfR2JEo9fEx%2FKaTN0Bg36sQRqg9k1KoNYzUi0IfDNLzMg7yj8S1OJPjKAZmKLKKS96JRGoikqGFvD6MTqH4MPnzkL4GOqUBTRulcHWPCvz6vXoaxWJwWh%2Bq1arGAREbivKvuNlHqMlmJtYUlimtODaUL42ipzAfqxn1gE6scc0inRkj0JODFO%2FleXUEgmPemxVkeYZKa8i22RaySR7j%2B5bT%2BHu4%2F6ktFKYBLO6%2Fcy5rtgS65T3PDBIA3kLMisHP2AyGEnnffieQd2mJcL35Gp6gC7QJhybF4iwgZC9MkgiRjaC8BwnFFlYO8PKL&X-Amz-Signature=4d755f27e3124fadcc658037fdda5f99c4798ead20a1942220c9f491b9ce341b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RDCXQX6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2yQ8%2Bh7RNTqhTG%2F%2BWuarXcxSZEZwS0gAlHw%2FfMeXOTAiEA%2FZV5AwdDovfKTV61Yoxy%2BPfjaj%2BZY%2FU0DkCBd92hUSYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFn%2B9f2JZfIhX3AAtSrcA8CVaoZe84ZSxPC8%2FDL3xH1lcDhEovAPloGkRX1Z2DctVRvTevQY1eMSQqTu8yRVU4uAUnbd4XGah%2FzdDtFUKRmSr04luXnm8HXSoJR9pDgZNn0M8PIiO6FIR7MyBB6q6QZ9PZBV%2B1GfaJQkEdmMEPzjo0kjeDYDq6graaTOAENDfDdxJFC2d%2FX%2BSxIoPLK8q5A%2BnodVWoIoOV%2ByxYOdRd5vMuVlZKfj9NkwnNl%2FbSENS9X6hB%2Bmh4wdqpvPz1CETYS%2FwJ6AK8QTRUtGeDnIeHFrbwH1w1UsUFfE%2FGzpwj2Q7e56h2DsrB859NYJG6h5hNNpMzmNA9Ku52WTr7hb6g5Xs1Fmzdy73COdPktM9tSf8y6M09HUdFDT0xSqBTcQU17Oj1hwJaWbeSxsAYO63fycqwOtjYegcxxoGuhjdQShct2H2NmgdBckCwJyhEg3mIZWFxG0vx33E%2FEHdQsQkjYS7glPSSLa6qgipRjuVrnGOgCFbSh8sJ7uz3vi2ffZMUPaujou3ERhsCmd77D04KMAoS9CFEMhDDEyK4agBFfR2JEo9fEx%2FKaTN0Bg36sQRqg9k1KoNYzUi0IfDNLzMg7yj8S1OJPjKAZmKLKKS96JRGoikqGFvD6MTqH4MPnzkL4GOqUBTRulcHWPCvz6vXoaxWJwWh%2Bq1arGAREbivKvuNlHqMlmJtYUlimtODaUL42ipzAfqxn1gE6scc0inRkj0JODFO%2FleXUEgmPemxVkeYZKa8i22RaySR7j%2B5bT%2BHu4%2F6ktFKYBLO6%2Fcy5rtgS65T3PDBIA3kLMisHP2AyGEnnffieQd2mJcL35Gp6gC7QJhybF4iwgZC9MkgiRjaC8BwnFFlYO8PKL&X-Amz-Signature=7e3e2df53610eed0a848047ae408233ce1119ca02f5c7867ed4bafa54a8af308&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
