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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIFGWZNT%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA00oZzDj01AFdCKaHFvlbNgUmnn1vO0P1t%2FLRBzulxGAiEAtcirDwe0f8VclrGX705dfDw5rH41Bv2Nkhp8a%2BrD064q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDHKGsXcnPUJ9d5bFBSrcAxwksMpaO2CybFB1qWyOtpCyWUsRFAlxnSs9iXmy39AravU23wwDN%2Fi0ZPgP%2Bh6QiT38fFqRACDf0%2By8NTR1%2FBM25mAxhoX%2FqB%2BBpc2u%2BeZOjS%2FoJYiwrb5QzDRAxmaZACDlCivDCeL2aHCiURBeRD0c7nM1DotRHlM3hZeFEDbV9SQ1imMpMufAsFbF1mWg3szGP9IuXdyZY6EgeD8q410hJgHA5dRsyRko1qb%2BSpyw9QKsAYQyOTukmCE7atv3kpy08ofznObUbnpK2O1gD5s42lR6mm25ig87oH%2F9rsnkB5O9gRJAuXQ1wJ2qYLDhxfwlJxp66Blp8XJwzLFRrTQpaB7kMTG1%2By7g9IbhzsYK9ETh%2BkITu4DT3A8txDgK6QiEW9FfjsSKqE88ld6EBH17%2BJV%2FmJsi3JtUUTvaTlzkQ4ZSw0p2SRt24PTDkCONt4xTGfLoKr1Sazi4lUlnQZllgzNAd0ygdn36tD0BpKUnBtUcDBs5oL8ygr5DtNvUn6IQcDPTfWM7mXrUBNEgaDhgExOvHM9csVnQL1xUbhAqMDicSVKO%2F%2F26zuX%2BDlhJFFG3iPQ4jrCq1%2BD%2FWcYEReJeirnkvnzdsu4YnsVE30l1TdeAMbodphFBkMuAMPSk2b4GOqUBX%2FlGXqzAH7GtKk01yNmPqHop93UHc7UAhAsf77a8s9LaMp%2BXyOinhDckpIK%2FcsTM0mYQXQQCPo8Dly5eUu%2FCuyfUpBIcao1nnXMPr9jRMy6ZfumumaSCH1brl3XNDp54zZnRCx%2BNqg4%2Fd8E85MQup2Ar5e6U1xhqM0VzA2r8nxwG%2BRC%2F1mPVsCK3EuFNbVdWs7dcUghbqR9bsZx0eUOqFUo4J%2Fly&X-Amz-Signature=f1755712fc7dfc1e3e57e2156412706a171562bf8538034df3038f9d30658f94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIFGWZNT%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA00oZzDj01AFdCKaHFvlbNgUmnn1vO0P1t%2FLRBzulxGAiEAtcirDwe0f8VclrGX705dfDw5rH41Bv2Nkhp8a%2BrD064q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDHKGsXcnPUJ9d5bFBSrcAxwksMpaO2CybFB1qWyOtpCyWUsRFAlxnSs9iXmy39AravU23wwDN%2Fi0ZPgP%2Bh6QiT38fFqRACDf0%2By8NTR1%2FBM25mAxhoX%2FqB%2BBpc2u%2BeZOjS%2FoJYiwrb5QzDRAxmaZACDlCivDCeL2aHCiURBeRD0c7nM1DotRHlM3hZeFEDbV9SQ1imMpMufAsFbF1mWg3szGP9IuXdyZY6EgeD8q410hJgHA5dRsyRko1qb%2BSpyw9QKsAYQyOTukmCE7atv3kpy08ofznObUbnpK2O1gD5s42lR6mm25ig87oH%2F9rsnkB5O9gRJAuXQ1wJ2qYLDhxfwlJxp66Blp8XJwzLFRrTQpaB7kMTG1%2By7g9IbhzsYK9ETh%2BkITu4DT3A8txDgK6QiEW9FfjsSKqE88ld6EBH17%2BJV%2FmJsi3JtUUTvaTlzkQ4ZSw0p2SRt24PTDkCONt4xTGfLoKr1Sazi4lUlnQZllgzNAd0ygdn36tD0BpKUnBtUcDBs5oL8ygr5DtNvUn6IQcDPTfWM7mXrUBNEgaDhgExOvHM9csVnQL1xUbhAqMDicSVKO%2F%2F26zuX%2BDlhJFFG3iPQ4jrCq1%2BD%2FWcYEReJeirnkvnzdsu4YnsVE30l1TdeAMbodphFBkMuAMPSk2b4GOqUBX%2FlGXqzAH7GtKk01yNmPqHop93UHc7UAhAsf77a8s9LaMp%2BXyOinhDckpIK%2FcsTM0mYQXQQCPo8Dly5eUu%2FCuyfUpBIcao1nnXMPr9jRMy6ZfumumaSCH1brl3XNDp54zZnRCx%2BNqg4%2Fd8E85MQup2Ar5e6U1xhqM0VzA2r8nxwG%2BRC%2F1mPVsCK3EuFNbVdWs7dcUghbqR9bsZx0eUOqFUo4J%2Fly&X-Amz-Signature=c4c69c6c4912aa99be7301c564713f0df46550df42086d81e0ee963e7d64710b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIFGWZNT%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA00oZzDj01AFdCKaHFvlbNgUmnn1vO0P1t%2FLRBzulxGAiEAtcirDwe0f8VclrGX705dfDw5rH41Bv2Nkhp8a%2BrD064q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDHKGsXcnPUJ9d5bFBSrcAxwksMpaO2CybFB1qWyOtpCyWUsRFAlxnSs9iXmy39AravU23wwDN%2Fi0ZPgP%2Bh6QiT38fFqRACDf0%2By8NTR1%2FBM25mAxhoX%2FqB%2BBpc2u%2BeZOjS%2FoJYiwrb5QzDRAxmaZACDlCivDCeL2aHCiURBeRD0c7nM1DotRHlM3hZeFEDbV9SQ1imMpMufAsFbF1mWg3szGP9IuXdyZY6EgeD8q410hJgHA5dRsyRko1qb%2BSpyw9QKsAYQyOTukmCE7atv3kpy08ofznObUbnpK2O1gD5s42lR6mm25ig87oH%2F9rsnkB5O9gRJAuXQ1wJ2qYLDhxfwlJxp66Blp8XJwzLFRrTQpaB7kMTG1%2By7g9IbhzsYK9ETh%2BkITu4DT3A8txDgK6QiEW9FfjsSKqE88ld6EBH17%2BJV%2FmJsi3JtUUTvaTlzkQ4ZSw0p2SRt24PTDkCONt4xTGfLoKr1Sazi4lUlnQZllgzNAd0ygdn36tD0BpKUnBtUcDBs5oL8ygr5DtNvUn6IQcDPTfWM7mXrUBNEgaDhgExOvHM9csVnQL1xUbhAqMDicSVKO%2F%2F26zuX%2BDlhJFFG3iPQ4jrCq1%2BD%2FWcYEReJeirnkvnzdsu4YnsVE30l1TdeAMbodphFBkMuAMPSk2b4GOqUBX%2FlGXqzAH7GtKk01yNmPqHop93UHc7UAhAsf77a8s9LaMp%2BXyOinhDckpIK%2FcsTM0mYQXQQCPo8Dly5eUu%2FCuyfUpBIcao1nnXMPr9jRMy6ZfumumaSCH1brl3XNDp54zZnRCx%2BNqg4%2Fd8E85MQup2Ar5e6U1xhqM0VzA2r8nxwG%2BRC%2F1mPVsCK3EuFNbVdWs7dcUghbqR9bsZx0eUOqFUo4J%2Fly&X-Amz-Signature=afd8bb5b4479d0323ae59aa076b004c5135a2e02627884723e268941204c51b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIFGWZNT%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA00oZzDj01AFdCKaHFvlbNgUmnn1vO0P1t%2FLRBzulxGAiEAtcirDwe0f8VclrGX705dfDw5rH41Bv2Nkhp8a%2BrD064q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDHKGsXcnPUJ9d5bFBSrcAxwksMpaO2CybFB1qWyOtpCyWUsRFAlxnSs9iXmy39AravU23wwDN%2Fi0ZPgP%2Bh6QiT38fFqRACDf0%2By8NTR1%2FBM25mAxhoX%2FqB%2BBpc2u%2BeZOjS%2FoJYiwrb5QzDRAxmaZACDlCivDCeL2aHCiURBeRD0c7nM1DotRHlM3hZeFEDbV9SQ1imMpMufAsFbF1mWg3szGP9IuXdyZY6EgeD8q410hJgHA5dRsyRko1qb%2BSpyw9QKsAYQyOTukmCE7atv3kpy08ofznObUbnpK2O1gD5s42lR6mm25ig87oH%2F9rsnkB5O9gRJAuXQ1wJ2qYLDhxfwlJxp66Blp8XJwzLFRrTQpaB7kMTG1%2By7g9IbhzsYK9ETh%2BkITu4DT3A8txDgK6QiEW9FfjsSKqE88ld6EBH17%2BJV%2FmJsi3JtUUTvaTlzkQ4ZSw0p2SRt24PTDkCONt4xTGfLoKr1Sazi4lUlnQZllgzNAd0ygdn36tD0BpKUnBtUcDBs5oL8ygr5DtNvUn6IQcDPTfWM7mXrUBNEgaDhgExOvHM9csVnQL1xUbhAqMDicSVKO%2F%2F26zuX%2BDlhJFFG3iPQ4jrCq1%2BD%2FWcYEReJeirnkvnzdsu4YnsVE30l1TdeAMbodphFBkMuAMPSk2b4GOqUBX%2FlGXqzAH7GtKk01yNmPqHop93UHc7UAhAsf77a8s9LaMp%2BXyOinhDckpIK%2FcsTM0mYQXQQCPo8Dly5eUu%2FCuyfUpBIcao1nnXMPr9jRMy6ZfumumaSCH1brl3XNDp54zZnRCx%2BNqg4%2Fd8E85MQup2Ar5e6U1xhqM0VzA2r8nxwG%2BRC%2F1mPVsCK3EuFNbVdWs7dcUghbqR9bsZx0eUOqFUo4J%2Fly&X-Amz-Signature=6927f5fa1c05c2b81f4acf58cefccc65e3cae52962f9c4d35861cfabf285c72e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIFGWZNT%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA00oZzDj01AFdCKaHFvlbNgUmnn1vO0P1t%2FLRBzulxGAiEAtcirDwe0f8VclrGX705dfDw5rH41Bv2Nkhp8a%2BrD064q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDHKGsXcnPUJ9d5bFBSrcAxwksMpaO2CybFB1qWyOtpCyWUsRFAlxnSs9iXmy39AravU23wwDN%2Fi0ZPgP%2Bh6QiT38fFqRACDf0%2By8NTR1%2FBM25mAxhoX%2FqB%2BBpc2u%2BeZOjS%2FoJYiwrb5QzDRAxmaZACDlCivDCeL2aHCiURBeRD0c7nM1DotRHlM3hZeFEDbV9SQ1imMpMufAsFbF1mWg3szGP9IuXdyZY6EgeD8q410hJgHA5dRsyRko1qb%2BSpyw9QKsAYQyOTukmCE7atv3kpy08ofznObUbnpK2O1gD5s42lR6mm25ig87oH%2F9rsnkB5O9gRJAuXQ1wJ2qYLDhxfwlJxp66Blp8XJwzLFRrTQpaB7kMTG1%2By7g9IbhzsYK9ETh%2BkITu4DT3A8txDgK6QiEW9FfjsSKqE88ld6EBH17%2BJV%2FmJsi3JtUUTvaTlzkQ4ZSw0p2SRt24PTDkCONt4xTGfLoKr1Sazi4lUlnQZllgzNAd0ygdn36tD0BpKUnBtUcDBs5oL8ygr5DtNvUn6IQcDPTfWM7mXrUBNEgaDhgExOvHM9csVnQL1xUbhAqMDicSVKO%2F%2F26zuX%2BDlhJFFG3iPQ4jrCq1%2BD%2FWcYEReJeirnkvnzdsu4YnsVE30l1TdeAMbodphFBkMuAMPSk2b4GOqUBX%2FlGXqzAH7GtKk01yNmPqHop93UHc7UAhAsf77a8s9LaMp%2BXyOinhDckpIK%2FcsTM0mYQXQQCPo8Dly5eUu%2FCuyfUpBIcao1nnXMPr9jRMy6ZfumumaSCH1brl3XNDp54zZnRCx%2BNqg4%2Fd8E85MQup2Ar5e6U1xhqM0VzA2r8nxwG%2BRC%2F1mPVsCK3EuFNbVdWs7dcUghbqR9bsZx0eUOqFUo4J%2Fly&X-Amz-Signature=a42eaeca5b04d20f85676548c26fd58133bb5434b5f59a03b924f7a795bbe4d0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
