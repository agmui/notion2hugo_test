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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABSAD4D%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDmvaQhUsCNFy9IUlr%2FsUu2MvRy4%2FcJozTr2H97ooCcUgIgNCJL47P2q699wPfmay8cKFkrDnOZQgH2sSrODlff2yoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIjrfZ8G6w8B%2F4IrircA9ZyQLbdrjluzlO4xWztBOVHt6EICAQzzAjnje9EgHnJT0uTmHkWnKFf1KlJwRF4LAradOFyuHlsLtLcd6TQforFj2RcRYPYN5A1iQ3kAvWhNp7jqxK5H9j39NiBi46YYKte53RBuv%2FwxZCwEr%2BTkpPl74S3ilqsu8wYXZQ9mTlhhFkWBWFuM4rd5MoV7syctXlR6gX%2FZFaMHV2xLIKX6FywWDpBRLZdmZaj3D28UmYkcczfv5iQygQSNiEZ5FOU%2BoSoRYsp1jXE%2B0rmsTdRjRNV1zM2oe6i3NPedZODItxnbATkScvFvSU4aa93%2BDjFmvCeyygWcHWHfi0F%2F8tO%2BBISAs%2FQSqgKFcrxKaOX0k5EF%2BQCD5Ek4HxNAcThidoqVB7%2F6TCgAxf%2Fx5eshBWsqLcR7zaPISS8V8k9abGfTVSReYZW0gY5TSXw3Htjg0OIx0MnNt%2Fdq2P3XH5ui4viEESlOgIM%2BLzSNm42HmID9ZtbeZNOeAtav0YEeQ6qCVchNL%2FmS6nh8HrVFP2DdeeoeEuVhrnBv1jf%2Fodu1vmoEGfhTeccBl2ZqIbCxVGPxCQDIxvi7MyBmkfow3LO9A0536TxAnjs4e0CZEqsNCTz%2FEmpvbJrUD4girBw0qMPMP3y178GOqUBFNOVM3ylnNm2JGQMj7MCDYr1afauUrm%2FoGX%2FSpQs4pqtzRw1w7ihp6DHYiPi%2B4kVViPKm5U4kHeVJHu5BYsmLJiV0zNE08HI%2Fja4nn1QN0sf996DoTDPfT%2BI%2B1Jgh9AcZIJLhKEBopDwAPdp08bh734t%2F0KzHT8nngYMjODlh6s%2FZovLvDBRXbOQuw4PcNUrZLdsTuPmrbDY2tlNplIYQNoermt7&X-Amz-Signature=b964c0a3dc651c749718d108a64ca2f190eef580d0a5faa1c2b7e9e4032073ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABSAD4D%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDmvaQhUsCNFy9IUlr%2FsUu2MvRy4%2FcJozTr2H97ooCcUgIgNCJL47P2q699wPfmay8cKFkrDnOZQgH2sSrODlff2yoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIjrfZ8G6w8B%2F4IrircA9ZyQLbdrjluzlO4xWztBOVHt6EICAQzzAjnje9EgHnJT0uTmHkWnKFf1KlJwRF4LAradOFyuHlsLtLcd6TQforFj2RcRYPYN5A1iQ3kAvWhNp7jqxK5H9j39NiBi46YYKte53RBuv%2FwxZCwEr%2BTkpPl74S3ilqsu8wYXZQ9mTlhhFkWBWFuM4rd5MoV7syctXlR6gX%2FZFaMHV2xLIKX6FywWDpBRLZdmZaj3D28UmYkcczfv5iQygQSNiEZ5FOU%2BoSoRYsp1jXE%2B0rmsTdRjRNV1zM2oe6i3NPedZODItxnbATkScvFvSU4aa93%2BDjFmvCeyygWcHWHfi0F%2F8tO%2BBISAs%2FQSqgKFcrxKaOX0k5EF%2BQCD5Ek4HxNAcThidoqVB7%2F6TCgAxf%2Fx5eshBWsqLcR7zaPISS8V8k9abGfTVSReYZW0gY5TSXw3Htjg0OIx0MnNt%2Fdq2P3XH5ui4viEESlOgIM%2BLzSNm42HmID9ZtbeZNOeAtav0YEeQ6qCVchNL%2FmS6nh8HrVFP2DdeeoeEuVhrnBv1jf%2Fodu1vmoEGfhTeccBl2ZqIbCxVGPxCQDIxvi7MyBmkfow3LO9A0536TxAnjs4e0CZEqsNCTz%2FEmpvbJrUD4girBw0qMPMP3y178GOqUBFNOVM3ylnNm2JGQMj7MCDYr1afauUrm%2FoGX%2FSpQs4pqtzRw1w7ihp6DHYiPi%2B4kVViPKm5U4kHeVJHu5BYsmLJiV0zNE08HI%2Fja4nn1QN0sf996DoTDPfT%2BI%2B1Jgh9AcZIJLhKEBopDwAPdp08bh734t%2F0KzHT8nngYMjODlh6s%2FZovLvDBRXbOQuw4PcNUrZLdsTuPmrbDY2tlNplIYQNoermt7&X-Amz-Signature=db5aef013f170ee65a80244df6a257d15a1697c976995fe02297dbd9376756ab&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABSAD4D%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDmvaQhUsCNFy9IUlr%2FsUu2MvRy4%2FcJozTr2H97ooCcUgIgNCJL47P2q699wPfmay8cKFkrDnOZQgH2sSrODlff2yoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIjrfZ8G6w8B%2F4IrircA9ZyQLbdrjluzlO4xWztBOVHt6EICAQzzAjnje9EgHnJT0uTmHkWnKFf1KlJwRF4LAradOFyuHlsLtLcd6TQforFj2RcRYPYN5A1iQ3kAvWhNp7jqxK5H9j39NiBi46YYKte53RBuv%2FwxZCwEr%2BTkpPl74S3ilqsu8wYXZQ9mTlhhFkWBWFuM4rd5MoV7syctXlR6gX%2FZFaMHV2xLIKX6FywWDpBRLZdmZaj3D28UmYkcczfv5iQygQSNiEZ5FOU%2BoSoRYsp1jXE%2B0rmsTdRjRNV1zM2oe6i3NPedZODItxnbATkScvFvSU4aa93%2BDjFmvCeyygWcHWHfi0F%2F8tO%2BBISAs%2FQSqgKFcrxKaOX0k5EF%2BQCD5Ek4HxNAcThidoqVB7%2F6TCgAxf%2Fx5eshBWsqLcR7zaPISS8V8k9abGfTVSReYZW0gY5TSXw3Htjg0OIx0MnNt%2Fdq2P3XH5ui4viEESlOgIM%2BLzSNm42HmID9ZtbeZNOeAtav0YEeQ6qCVchNL%2FmS6nh8HrVFP2DdeeoeEuVhrnBv1jf%2Fodu1vmoEGfhTeccBl2ZqIbCxVGPxCQDIxvi7MyBmkfow3LO9A0536TxAnjs4e0CZEqsNCTz%2FEmpvbJrUD4girBw0qMPMP3y178GOqUBFNOVM3ylnNm2JGQMj7MCDYr1afauUrm%2FoGX%2FSpQs4pqtzRw1w7ihp6DHYiPi%2B4kVViPKm5U4kHeVJHu5BYsmLJiV0zNE08HI%2Fja4nn1QN0sf996DoTDPfT%2BI%2B1Jgh9AcZIJLhKEBopDwAPdp08bh734t%2F0KzHT8nngYMjODlh6s%2FZovLvDBRXbOQuw4PcNUrZLdsTuPmrbDY2tlNplIYQNoermt7&X-Amz-Signature=1f44057aca1b7885cafbc800f89f16c338d77ccd9c5ae7e4cd8ca56a500049db&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABSAD4D%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDmvaQhUsCNFy9IUlr%2FsUu2MvRy4%2FcJozTr2H97ooCcUgIgNCJL47P2q699wPfmay8cKFkrDnOZQgH2sSrODlff2yoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIjrfZ8G6w8B%2F4IrircA9ZyQLbdrjluzlO4xWztBOVHt6EICAQzzAjnje9EgHnJT0uTmHkWnKFf1KlJwRF4LAradOFyuHlsLtLcd6TQforFj2RcRYPYN5A1iQ3kAvWhNp7jqxK5H9j39NiBi46YYKte53RBuv%2FwxZCwEr%2BTkpPl74S3ilqsu8wYXZQ9mTlhhFkWBWFuM4rd5MoV7syctXlR6gX%2FZFaMHV2xLIKX6FywWDpBRLZdmZaj3D28UmYkcczfv5iQygQSNiEZ5FOU%2BoSoRYsp1jXE%2B0rmsTdRjRNV1zM2oe6i3NPedZODItxnbATkScvFvSU4aa93%2BDjFmvCeyygWcHWHfi0F%2F8tO%2BBISAs%2FQSqgKFcrxKaOX0k5EF%2BQCD5Ek4HxNAcThidoqVB7%2F6TCgAxf%2Fx5eshBWsqLcR7zaPISS8V8k9abGfTVSReYZW0gY5TSXw3Htjg0OIx0MnNt%2Fdq2P3XH5ui4viEESlOgIM%2BLzSNm42HmID9ZtbeZNOeAtav0YEeQ6qCVchNL%2FmS6nh8HrVFP2DdeeoeEuVhrnBv1jf%2Fodu1vmoEGfhTeccBl2ZqIbCxVGPxCQDIxvi7MyBmkfow3LO9A0536TxAnjs4e0CZEqsNCTz%2FEmpvbJrUD4girBw0qMPMP3y178GOqUBFNOVM3ylnNm2JGQMj7MCDYr1afauUrm%2FoGX%2FSpQs4pqtzRw1w7ihp6DHYiPi%2B4kVViPKm5U4kHeVJHu5BYsmLJiV0zNE08HI%2Fja4nn1QN0sf996DoTDPfT%2BI%2B1Jgh9AcZIJLhKEBopDwAPdp08bh734t%2F0KzHT8nngYMjODlh6s%2FZovLvDBRXbOQuw4PcNUrZLdsTuPmrbDY2tlNplIYQNoermt7&X-Amz-Signature=f00e795c8a0f2c53ce813f7da5b2d4095e5297ead9e3a5b4a386b2608620e24b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABSAD4D%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDmvaQhUsCNFy9IUlr%2FsUu2MvRy4%2FcJozTr2H97ooCcUgIgNCJL47P2q699wPfmay8cKFkrDnOZQgH2sSrODlff2yoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIjrfZ8G6w8B%2F4IrircA9ZyQLbdrjluzlO4xWztBOVHt6EICAQzzAjnje9EgHnJT0uTmHkWnKFf1KlJwRF4LAradOFyuHlsLtLcd6TQforFj2RcRYPYN5A1iQ3kAvWhNp7jqxK5H9j39NiBi46YYKte53RBuv%2FwxZCwEr%2BTkpPl74S3ilqsu8wYXZQ9mTlhhFkWBWFuM4rd5MoV7syctXlR6gX%2FZFaMHV2xLIKX6FywWDpBRLZdmZaj3D28UmYkcczfv5iQygQSNiEZ5FOU%2BoSoRYsp1jXE%2B0rmsTdRjRNV1zM2oe6i3NPedZODItxnbATkScvFvSU4aa93%2BDjFmvCeyygWcHWHfi0F%2F8tO%2BBISAs%2FQSqgKFcrxKaOX0k5EF%2BQCD5Ek4HxNAcThidoqVB7%2F6TCgAxf%2Fx5eshBWsqLcR7zaPISS8V8k9abGfTVSReYZW0gY5TSXw3Htjg0OIx0MnNt%2Fdq2P3XH5ui4viEESlOgIM%2BLzSNm42HmID9ZtbeZNOeAtav0YEeQ6qCVchNL%2FmS6nh8HrVFP2DdeeoeEuVhrnBv1jf%2Fodu1vmoEGfhTeccBl2ZqIbCxVGPxCQDIxvi7MyBmkfow3LO9A0536TxAnjs4e0CZEqsNCTz%2FEmpvbJrUD4girBw0qMPMP3y178GOqUBFNOVM3ylnNm2JGQMj7MCDYr1afauUrm%2FoGX%2FSpQs4pqtzRw1w7ihp6DHYiPi%2B4kVViPKm5U4kHeVJHu5BYsmLJiV0zNE08HI%2Fja4nn1QN0sf996DoTDPfT%2BI%2B1Jgh9AcZIJLhKEBopDwAPdp08bh734t%2F0KzHT8nngYMjODlh6s%2FZovLvDBRXbOQuw4PcNUrZLdsTuPmrbDY2tlNplIYQNoermt7&X-Amz-Signature=07f1ae9b5748d62b4a0e59d7c53ceb8a7f2096fc4dedd3ec15d3c740b452ed8b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
