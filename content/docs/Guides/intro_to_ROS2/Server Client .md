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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGKWU7R%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjMUeKNLy2ubMQ7F5rierAX%2FUlxznha1koUryJH19TdAiA0dY5OP4vA49WuRns%2Frm7twjSSBxdx3rkImGEPj%2BDX9SqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEMpnEPZQb4u0N2BSKtwDuwTY6QcvhM%2FjjPTdQzmgasvSVvG%2BRUhDPB523%2FB69QRKMWkYDm2KEP4VykrxoDX%2BVs%2B5%2FM412s9LG1PtE2PGEMVhOxpDwpssKVCDLzg1rzGc0iKap38u38OwuzbAv3lrcYQgqJvF1yyp2F9hhfxRx8ZJKV5roSjcZBNGCFFEiExDHpyeo3zX1Rnfso5cz5dLW6P2MIDOf8Cn79jGgTW%2B37yUSp4RLEA%2BtkGoCACyYeg8dSE8oqbn%2Bg8g8%2Bj0avtR2r5FYa6gL%2FiuVPBaXmqC0RF91G%2BjiolYkn2qm7TMHxsIyiuw4lyXPLGBdLxe1303uCnRnHBx2qyUlRVf1K1seo0N8OZTgVU%2BcsZCPaWIgYl9J5ddMydpi39TN2DbImW6PSETVqmvWBlpYKWAZZ8iYObZMbW8gsvag6dqPBR2P2cFz0gyfddk6iiSulxObeXUOspYNlrL6WbSq2kgY1xcX4Fk4fQpghvtxlnjh4n2rmFHg1hIMVpqxdXPrdjQWB7GpWdAF9b1FrFcFlSBGEZ%2BXtRsbZmylzs9Eyupaeb%2F18zTSeentiNAMvpvvBq1YiR2vVEu2vWq%2BQl72Sw2nxCNCq%2FKtSmXJ8BN8Cc175dmr6ynFlQ4erJqMG%2FYa0cwmJ38vAY6pgG3SOqNH07yb71LNnkWuHJTbWXwywcSOFNdvxXFbX%2F36ddSeZCSRsppFxusqqTfdt%2BMgZ0fDN%2FMtpBn4f5eAwHvyWAOgmMcxJ6rzEqjuo2Bgbl%2FCelaRKvENc47KSouV8E41WNDHFcFe5nRDHOp49a3vppNdI1qDYFSIRlhH6qVrGNY3iwQvEezCa6%2BxbWWdjpsqB2OFk3QY1J30qXig%2B%2FS3EHOKEmX&X-Amz-Signature=c8d1043e28e332beb195b6ef8cad950d95f14d7a4969a404b67c94a974b41079&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGKWU7R%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjMUeKNLy2ubMQ7F5rierAX%2FUlxznha1koUryJH19TdAiA0dY5OP4vA49WuRns%2Frm7twjSSBxdx3rkImGEPj%2BDX9SqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEMpnEPZQb4u0N2BSKtwDuwTY6QcvhM%2FjjPTdQzmgasvSVvG%2BRUhDPB523%2FB69QRKMWkYDm2KEP4VykrxoDX%2BVs%2B5%2FM412s9LG1PtE2PGEMVhOxpDwpssKVCDLzg1rzGc0iKap38u38OwuzbAv3lrcYQgqJvF1yyp2F9hhfxRx8ZJKV5roSjcZBNGCFFEiExDHpyeo3zX1Rnfso5cz5dLW6P2MIDOf8Cn79jGgTW%2B37yUSp4RLEA%2BtkGoCACyYeg8dSE8oqbn%2Bg8g8%2Bj0avtR2r5FYa6gL%2FiuVPBaXmqC0RF91G%2BjiolYkn2qm7TMHxsIyiuw4lyXPLGBdLxe1303uCnRnHBx2qyUlRVf1K1seo0N8OZTgVU%2BcsZCPaWIgYl9J5ddMydpi39TN2DbImW6PSETVqmvWBlpYKWAZZ8iYObZMbW8gsvag6dqPBR2P2cFz0gyfddk6iiSulxObeXUOspYNlrL6WbSq2kgY1xcX4Fk4fQpghvtxlnjh4n2rmFHg1hIMVpqxdXPrdjQWB7GpWdAF9b1FrFcFlSBGEZ%2BXtRsbZmylzs9Eyupaeb%2F18zTSeentiNAMvpvvBq1YiR2vVEu2vWq%2BQl72Sw2nxCNCq%2FKtSmXJ8BN8Cc175dmr6ynFlQ4erJqMG%2FYa0cwmJ38vAY6pgG3SOqNH07yb71LNnkWuHJTbWXwywcSOFNdvxXFbX%2F36ddSeZCSRsppFxusqqTfdt%2BMgZ0fDN%2FMtpBn4f5eAwHvyWAOgmMcxJ6rzEqjuo2Bgbl%2FCelaRKvENc47KSouV8E41WNDHFcFe5nRDHOp49a3vppNdI1qDYFSIRlhH6qVrGNY3iwQvEezCa6%2BxbWWdjpsqB2OFk3QY1J30qXig%2B%2FS3EHOKEmX&X-Amz-Signature=f08eaba9e9f1ec9a4caeab7d30cd301dd6ea1600dbe6c1a4c1e52c4192114f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGKWU7R%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjMUeKNLy2ubMQ7F5rierAX%2FUlxznha1koUryJH19TdAiA0dY5OP4vA49WuRns%2Frm7twjSSBxdx3rkImGEPj%2BDX9SqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEMpnEPZQb4u0N2BSKtwDuwTY6QcvhM%2FjjPTdQzmgasvSVvG%2BRUhDPB523%2FB69QRKMWkYDm2KEP4VykrxoDX%2BVs%2B5%2FM412s9LG1PtE2PGEMVhOxpDwpssKVCDLzg1rzGc0iKap38u38OwuzbAv3lrcYQgqJvF1yyp2F9hhfxRx8ZJKV5roSjcZBNGCFFEiExDHpyeo3zX1Rnfso5cz5dLW6P2MIDOf8Cn79jGgTW%2B37yUSp4RLEA%2BtkGoCACyYeg8dSE8oqbn%2Bg8g8%2Bj0avtR2r5FYa6gL%2FiuVPBaXmqC0RF91G%2BjiolYkn2qm7TMHxsIyiuw4lyXPLGBdLxe1303uCnRnHBx2qyUlRVf1K1seo0N8OZTgVU%2BcsZCPaWIgYl9J5ddMydpi39TN2DbImW6PSETVqmvWBlpYKWAZZ8iYObZMbW8gsvag6dqPBR2P2cFz0gyfddk6iiSulxObeXUOspYNlrL6WbSq2kgY1xcX4Fk4fQpghvtxlnjh4n2rmFHg1hIMVpqxdXPrdjQWB7GpWdAF9b1FrFcFlSBGEZ%2BXtRsbZmylzs9Eyupaeb%2F18zTSeentiNAMvpvvBq1YiR2vVEu2vWq%2BQl72Sw2nxCNCq%2FKtSmXJ8BN8Cc175dmr6ynFlQ4erJqMG%2FYa0cwmJ38vAY6pgG3SOqNH07yb71LNnkWuHJTbWXwywcSOFNdvxXFbX%2F36ddSeZCSRsppFxusqqTfdt%2BMgZ0fDN%2FMtpBn4f5eAwHvyWAOgmMcxJ6rzEqjuo2Bgbl%2FCelaRKvENc47KSouV8E41WNDHFcFe5nRDHOp49a3vppNdI1qDYFSIRlhH6qVrGNY3iwQvEezCa6%2BxbWWdjpsqB2OFk3QY1J30qXig%2B%2FS3EHOKEmX&X-Amz-Signature=538c5c0cfc1f4e8b08011d1b8270228a1525f538658cfdb5fb85226d03a57c39&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGKWU7R%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjMUeKNLy2ubMQ7F5rierAX%2FUlxznha1koUryJH19TdAiA0dY5OP4vA49WuRns%2Frm7twjSSBxdx3rkImGEPj%2BDX9SqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEMpnEPZQb4u0N2BSKtwDuwTY6QcvhM%2FjjPTdQzmgasvSVvG%2BRUhDPB523%2FB69QRKMWkYDm2KEP4VykrxoDX%2BVs%2B5%2FM412s9LG1PtE2PGEMVhOxpDwpssKVCDLzg1rzGc0iKap38u38OwuzbAv3lrcYQgqJvF1yyp2F9hhfxRx8ZJKV5roSjcZBNGCFFEiExDHpyeo3zX1Rnfso5cz5dLW6P2MIDOf8Cn79jGgTW%2B37yUSp4RLEA%2BtkGoCACyYeg8dSE8oqbn%2Bg8g8%2Bj0avtR2r5FYa6gL%2FiuVPBaXmqC0RF91G%2BjiolYkn2qm7TMHxsIyiuw4lyXPLGBdLxe1303uCnRnHBx2qyUlRVf1K1seo0N8OZTgVU%2BcsZCPaWIgYl9J5ddMydpi39TN2DbImW6PSETVqmvWBlpYKWAZZ8iYObZMbW8gsvag6dqPBR2P2cFz0gyfddk6iiSulxObeXUOspYNlrL6WbSq2kgY1xcX4Fk4fQpghvtxlnjh4n2rmFHg1hIMVpqxdXPrdjQWB7GpWdAF9b1FrFcFlSBGEZ%2BXtRsbZmylzs9Eyupaeb%2F18zTSeentiNAMvpvvBq1YiR2vVEu2vWq%2BQl72Sw2nxCNCq%2FKtSmXJ8BN8Cc175dmr6ynFlQ4erJqMG%2FYa0cwmJ38vAY6pgG3SOqNH07yb71LNnkWuHJTbWXwywcSOFNdvxXFbX%2F36ddSeZCSRsppFxusqqTfdt%2BMgZ0fDN%2FMtpBn4f5eAwHvyWAOgmMcxJ6rzEqjuo2Bgbl%2FCelaRKvENc47KSouV8E41WNDHFcFe5nRDHOp49a3vppNdI1qDYFSIRlhH6qVrGNY3iwQvEezCa6%2BxbWWdjpsqB2OFk3QY1J30qXig%2B%2FS3EHOKEmX&X-Amz-Signature=e69b909df4d3fd9fa11992a75d30b771a8b7f45899b24995ef47c53350d3e9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGKWU7R%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjMUeKNLy2ubMQ7F5rierAX%2FUlxznha1koUryJH19TdAiA0dY5OP4vA49WuRns%2Frm7twjSSBxdx3rkImGEPj%2BDX9SqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEMpnEPZQb4u0N2BSKtwDuwTY6QcvhM%2FjjPTdQzmgasvSVvG%2BRUhDPB523%2FB69QRKMWkYDm2KEP4VykrxoDX%2BVs%2B5%2FM412s9LG1PtE2PGEMVhOxpDwpssKVCDLzg1rzGc0iKap38u38OwuzbAv3lrcYQgqJvF1yyp2F9hhfxRx8ZJKV5roSjcZBNGCFFEiExDHpyeo3zX1Rnfso5cz5dLW6P2MIDOf8Cn79jGgTW%2B37yUSp4RLEA%2BtkGoCACyYeg8dSE8oqbn%2Bg8g8%2Bj0avtR2r5FYa6gL%2FiuVPBaXmqC0RF91G%2BjiolYkn2qm7TMHxsIyiuw4lyXPLGBdLxe1303uCnRnHBx2qyUlRVf1K1seo0N8OZTgVU%2BcsZCPaWIgYl9J5ddMydpi39TN2DbImW6PSETVqmvWBlpYKWAZZ8iYObZMbW8gsvag6dqPBR2P2cFz0gyfddk6iiSulxObeXUOspYNlrL6WbSq2kgY1xcX4Fk4fQpghvtxlnjh4n2rmFHg1hIMVpqxdXPrdjQWB7GpWdAF9b1FrFcFlSBGEZ%2BXtRsbZmylzs9Eyupaeb%2F18zTSeentiNAMvpvvBq1YiR2vVEu2vWq%2BQl72Sw2nxCNCq%2FKtSmXJ8BN8Cc175dmr6ynFlQ4erJqMG%2FYa0cwmJ38vAY6pgG3SOqNH07yb71LNnkWuHJTbWXwywcSOFNdvxXFbX%2F36ddSeZCSRsppFxusqqTfdt%2BMgZ0fDN%2FMtpBn4f5eAwHvyWAOgmMcxJ6rzEqjuo2Bgbl%2FCelaRKvENc47KSouV8E41WNDHFcFe5nRDHOp49a3vppNdI1qDYFSIRlhH6qVrGNY3iwQvEezCa6%2BxbWWdjpsqB2OFk3QY1J30qXig%2B%2FS3EHOKEmX&X-Amz-Signature=bb0441d664d33c3e6e1d414b5d032073640a61bcb893c7e3351e036070f75055&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
