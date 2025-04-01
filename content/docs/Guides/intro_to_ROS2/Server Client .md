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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CITR2GK%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCFPHM2E7Zb9FnZ0Zd6U%2BE0dr3kZjMBiG4nb%2FxMCjvS%2FQIgVUg78Qwr0jYstVyi279%2BWsTUGwlHK0iN3TWTyMzsckgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9yl4cCrkNwi7v8byrcA3YblMf2kG4Wsu2EtxjWctSVtEgEc5m9C35AfhbnaGEd%2F33g53MoHBYTx00OAp6ssH03aMq9EpmhJmYaZs7%2BGjxXtaGD51L6j3lc8ExKzPT5IuPv1YUx1wMIpJSHZUh4QFl1LfcQ6CN%2FwjjAuvDMVPLxS6jawS1Rvr5dPjCaoWL%2Bt3UvniLxqWckpBHbcC1u3%2BuV5Hwd6enUZmD7O%2F6nMxtZqDab2bQEz6jh57XUG5Azx6cW7RgodE5Xty4D3Q0vglV3kdl2gpoUFgFRCte6rO6h4m%2FXlEQg3zy%2BG2x4BDCIgDr7PCGW6fKhhj1ulRa%2BjigTeYzzAIGokzJ%2Flo8kEVYrZztAqoIB%2BtLHYfg%2FAPu4k5yDB5%2BEBV949sDWUS%2FSOvDRFUfdxvhjG%2FhWq69%2FDDuei%2FO6ebvV1jkSbFGt4c8V%2BfHpsv2p54EGo4zLDP17bQRyDRXYiIJTlKCtxM770FFVBeCLZ9W2lT1HQyfhsoSsAtINZP%2BzjBRgT5jDBPBoW1UenHHgundiisY2zhHIrW7BFiTkanW%2F8So9pKey8LD58XvyWxmIf3jDpFGb1r1clQ%2BmWnQPDkVqd5uvUw2LCN7uLtl1qJ7NacQ5DxNwK0NDfOoZlqhDWabIsVe%2FMKOpsb8GOqUBmyfCwrKbS1EKB%2FxD7PGOG7d8%2BDAtQD4gxWxt2Q2qeUVkN8GYQUyy3N0XWJLU8W3meeceszNYqkYDbno7HVcBziRZlydBAAS8y5QKmqnX5ds%2Bxgr1Xv56Z4nmXlG7Zr2qY9VpGuXiyhkXLK6wmdNcrn3iqPsWA8PzOxmaRX%2FbFgwfiedsQAYyNQ8s756TLoEk8Ed%2FnEnFrzUzYZQWDkqPNiKd8pm%2B&X-Amz-Signature=723520a3449725c138e605fa8e407c6571385c33d36688dad932e0c589b5b144&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CITR2GK%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCFPHM2E7Zb9FnZ0Zd6U%2BE0dr3kZjMBiG4nb%2FxMCjvS%2FQIgVUg78Qwr0jYstVyi279%2BWsTUGwlHK0iN3TWTyMzsckgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9yl4cCrkNwi7v8byrcA3YblMf2kG4Wsu2EtxjWctSVtEgEc5m9C35AfhbnaGEd%2F33g53MoHBYTx00OAp6ssH03aMq9EpmhJmYaZs7%2BGjxXtaGD51L6j3lc8ExKzPT5IuPv1YUx1wMIpJSHZUh4QFl1LfcQ6CN%2FwjjAuvDMVPLxS6jawS1Rvr5dPjCaoWL%2Bt3UvniLxqWckpBHbcC1u3%2BuV5Hwd6enUZmD7O%2F6nMxtZqDab2bQEz6jh57XUG5Azx6cW7RgodE5Xty4D3Q0vglV3kdl2gpoUFgFRCte6rO6h4m%2FXlEQg3zy%2BG2x4BDCIgDr7PCGW6fKhhj1ulRa%2BjigTeYzzAIGokzJ%2Flo8kEVYrZztAqoIB%2BtLHYfg%2FAPu4k5yDB5%2BEBV949sDWUS%2FSOvDRFUfdxvhjG%2FhWq69%2FDDuei%2FO6ebvV1jkSbFGt4c8V%2BfHpsv2p54EGo4zLDP17bQRyDRXYiIJTlKCtxM770FFVBeCLZ9W2lT1HQyfhsoSsAtINZP%2BzjBRgT5jDBPBoW1UenHHgundiisY2zhHIrW7BFiTkanW%2F8So9pKey8LD58XvyWxmIf3jDpFGb1r1clQ%2BmWnQPDkVqd5uvUw2LCN7uLtl1qJ7NacQ5DxNwK0NDfOoZlqhDWabIsVe%2FMKOpsb8GOqUBmyfCwrKbS1EKB%2FxD7PGOG7d8%2BDAtQD4gxWxt2Q2qeUVkN8GYQUyy3N0XWJLU8W3meeceszNYqkYDbno7HVcBziRZlydBAAS8y5QKmqnX5ds%2Bxgr1Xv56Z4nmXlG7Zr2qY9VpGuXiyhkXLK6wmdNcrn3iqPsWA8PzOxmaRX%2FbFgwfiedsQAYyNQ8s756TLoEk8Ed%2FnEnFrzUzYZQWDkqPNiKd8pm%2B&X-Amz-Signature=69d462a4c4a7e15427dfad888c4a7ef660f951b92cd061ec2a41488f1b1464fd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CITR2GK%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCFPHM2E7Zb9FnZ0Zd6U%2BE0dr3kZjMBiG4nb%2FxMCjvS%2FQIgVUg78Qwr0jYstVyi279%2BWsTUGwlHK0iN3TWTyMzsckgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9yl4cCrkNwi7v8byrcA3YblMf2kG4Wsu2EtxjWctSVtEgEc5m9C35AfhbnaGEd%2F33g53MoHBYTx00OAp6ssH03aMq9EpmhJmYaZs7%2BGjxXtaGD51L6j3lc8ExKzPT5IuPv1YUx1wMIpJSHZUh4QFl1LfcQ6CN%2FwjjAuvDMVPLxS6jawS1Rvr5dPjCaoWL%2Bt3UvniLxqWckpBHbcC1u3%2BuV5Hwd6enUZmD7O%2F6nMxtZqDab2bQEz6jh57XUG5Azx6cW7RgodE5Xty4D3Q0vglV3kdl2gpoUFgFRCte6rO6h4m%2FXlEQg3zy%2BG2x4BDCIgDr7PCGW6fKhhj1ulRa%2BjigTeYzzAIGokzJ%2Flo8kEVYrZztAqoIB%2BtLHYfg%2FAPu4k5yDB5%2BEBV949sDWUS%2FSOvDRFUfdxvhjG%2FhWq69%2FDDuei%2FO6ebvV1jkSbFGt4c8V%2BfHpsv2p54EGo4zLDP17bQRyDRXYiIJTlKCtxM770FFVBeCLZ9W2lT1HQyfhsoSsAtINZP%2BzjBRgT5jDBPBoW1UenHHgundiisY2zhHIrW7BFiTkanW%2F8So9pKey8LD58XvyWxmIf3jDpFGb1r1clQ%2BmWnQPDkVqd5uvUw2LCN7uLtl1qJ7NacQ5DxNwK0NDfOoZlqhDWabIsVe%2FMKOpsb8GOqUBmyfCwrKbS1EKB%2FxD7PGOG7d8%2BDAtQD4gxWxt2Q2qeUVkN8GYQUyy3N0XWJLU8W3meeceszNYqkYDbno7HVcBziRZlydBAAS8y5QKmqnX5ds%2Bxgr1Xv56Z4nmXlG7Zr2qY9VpGuXiyhkXLK6wmdNcrn3iqPsWA8PzOxmaRX%2FbFgwfiedsQAYyNQ8s756TLoEk8Ed%2FnEnFrzUzYZQWDkqPNiKd8pm%2B&X-Amz-Signature=333536748ba8df5108e448297be9c2da9e6ccff8c7868ba5d0810ad70abc40ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CITR2GK%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCFPHM2E7Zb9FnZ0Zd6U%2BE0dr3kZjMBiG4nb%2FxMCjvS%2FQIgVUg78Qwr0jYstVyi279%2BWsTUGwlHK0iN3TWTyMzsckgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9yl4cCrkNwi7v8byrcA3YblMf2kG4Wsu2EtxjWctSVtEgEc5m9C35AfhbnaGEd%2F33g53MoHBYTx00OAp6ssH03aMq9EpmhJmYaZs7%2BGjxXtaGD51L6j3lc8ExKzPT5IuPv1YUx1wMIpJSHZUh4QFl1LfcQ6CN%2FwjjAuvDMVPLxS6jawS1Rvr5dPjCaoWL%2Bt3UvniLxqWckpBHbcC1u3%2BuV5Hwd6enUZmD7O%2F6nMxtZqDab2bQEz6jh57XUG5Azx6cW7RgodE5Xty4D3Q0vglV3kdl2gpoUFgFRCte6rO6h4m%2FXlEQg3zy%2BG2x4BDCIgDr7PCGW6fKhhj1ulRa%2BjigTeYzzAIGokzJ%2Flo8kEVYrZztAqoIB%2BtLHYfg%2FAPu4k5yDB5%2BEBV949sDWUS%2FSOvDRFUfdxvhjG%2FhWq69%2FDDuei%2FO6ebvV1jkSbFGt4c8V%2BfHpsv2p54EGo4zLDP17bQRyDRXYiIJTlKCtxM770FFVBeCLZ9W2lT1HQyfhsoSsAtINZP%2BzjBRgT5jDBPBoW1UenHHgundiisY2zhHIrW7BFiTkanW%2F8So9pKey8LD58XvyWxmIf3jDpFGb1r1clQ%2BmWnQPDkVqd5uvUw2LCN7uLtl1qJ7NacQ5DxNwK0NDfOoZlqhDWabIsVe%2FMKOpsb8GOqUBmyfCwrKbS1EKB%2FxD7PGOG7d8%2BDAtQD4gxWxt2Q2qeUVkN8GYQUyy3N0XWJLU8W3meeceszNYqkYDbno7HVcBziRZlydBAAS8y5QKmqnX5ds%2Bxgr1Xv56Z4nmXlG7Zr2qY9VpGuXiyhkXLK6wmdNcrn3iqPsWA8PzOxmaRX%2FbFgwfiedsQAYyNQ8s756TLoEk8Ed%2FnEnFrzUzYZQWDkqPNiKd8pm%2B&X-Amz-Signature=744fd0223513aad6c2e145421304a89cc8a05c3e99dc31f0a10f9c63c2338f08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CITR2GK%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCFPHM2E7Zb9FnZ0Zd6U%2BE0dr3kZjMBiG4nb%2FxMCjvS%2FQIgVUg78Qwr0jYstVyi279%2BWsTUGwlHK0iN3TWTyMzsckgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9yl4cCrkNwi7v8byrcA3YblMf2kG4Wsu2EtxjWctSVtEgEc5m9C35AfhbnaGEd%2F33g53MoHBYTx00OAp6ssH03aMq9EpmhJmYaZs7%2BGjxXtaGD51L6j3lc8ExKzPT5IuPv1YUx1wMIpJSHZUh4QFl1LfcQ6CN%2FwjjAuvDMVPLxS6jawS1Rvr5dPjCaoWL%2Bt3UvniLxqWckpBHbcC1u3%2BuV5Hwd6enUZmD7O%2F6nMxtZqDab2bQEz6jh57XUG5Azx6cW7RgodE5Xty4D3Q0vglV3kdl2gpoUFgFRCte6rO6h4m%2FXlEQg3zy%2BG2x4BDCIgDr7PCGW6fKhhj1ulRa%2BjigTeYzzAIGokzJ%2Flo8kEVYrZztAqoIB%2BtLHYfg%2FAPu4k5yDB5%2BEBV949sDWUS%2FSOvDRFUfdxvhjG%2FhWq69%2FDDuei%2FO6ebvV1jkSbFGt4c8V%2BfHpsv2p54EGo4zLDP17bQRyDRXYiIJTlKCtxM770FFVBeCLZ9W2lT1HQyfhsoSsAtINZP%2BzjBRgT5jDBPBoW1UenHHgundiisY2zhHIrW7BFiTkanW%2F8So9pKey8LD58XvyWxmIf3jDpFGb1r1clQ%2BmWnQPDkVqd5uvUw2LCN7uLtl1qJ7NacQ5DxNwK0NDfOoZlqhDWabIsVe%2FMKOpsb8GOqUBmyfCwrKbS1EKB%2FxD7PGOG7d8%2BDAtQD4gxWxt2Q2qeUVkN8GYQUyy3N0XWJLU8W3meeceszNYqkYDbno7HVcBziRZlydBAAS8y5QKmqnX5ds%2Bxgr1Xv56Z4nmXlG7Zr2qY9VpGuXiyhkXLK6wmdNcrn3iqPsWA8PzOxmaRX%2FbFgwfiedsQAYyNQ8s756TLoEk8Ed%2FnEnFrzUzYZQWDkqPNiKd8pm%2B&X-Amz-Signature=453ab4e24602aa5907d5ba83f7644b38e776061cae4737114fef2d2f71424242&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
