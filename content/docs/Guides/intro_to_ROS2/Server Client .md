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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHUAS36%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCmeXTCJ2V1zQidQK4fYR9MafOw2q8Ix6EHLj%2FQdxenVwIgC%2BMyzotduDpSo5UgjAOLu0g0jKIhfZ4zvmRyc54kWcIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMVGTOUvujcYrX5IOyrcA3mzVV5KwB%2BbzFgjeTjJn7bfVf6RsfJm7%2FUxpURMAfbaEm%2B2nYESdmMaZkMrTSq1I3O8BYqjXwu2eJQaNeRTMKFyFn4olVZ4%2Bw9kqQuJ2ziarQ53C%2Bjteg3X7tBcDYJf6FJon72U1nOCrH5mOnZEK0u%2Fuzt8QjqIRRi4ZU5i53fq8MfDJgPfNSBD3ZSeMGR7OvISM0F5t76LPPNyUlmbI%2BkHzEfzGADYmmaMMzQx5mnyceOv2U0dfeBs534CP%2FuOA%2Bbyiy19hftebrrX%2Ba6TM0HXw5Ttmqr4VKK3NIWUruN8RNYs98ynX8f%2FKBVXhJCQxaWgEnWdlmKMyr5TqLLBi08jqILFGRDBqqqeVNVHE2cRQ7A0Wqrn9JteZAgvlwgIbsaXMeI49Yr5%2F5E8JHKOCQtZQ3kniPr7xIb4iIBuUz%2Fhjm%2F98A7yIv6Rl9It1P38%2BsBLEMzmxGh%2Fe6sjzO4nYTuNAySXzVDeZTebirrzg26TWlWCeSStJYUQ4pisoX0HhEFgDw3NXtbCEIjlWQYyiuug5jvyXtYPoDzVRFV%2Bh%2B6z1%2Fhler3NGOUwlNaurN9wnSCLMmSf1nPaOF09IHun9UhFZqG2Ze%2FL4QVwkdEEuXC1%2Bex5y4VeLYzofNatMJjXhcIGOqUBwayRwbX3Yadh5ratCisbx4IonOjL0fvPCdDbN32vFcDx8vlECwxeI1775OBkgWXqP9QW7qgyhBNrIqMBvYbwDkp6Or%2F7QAkRzQ5dVFCeprTJQ2jX1KUkf48lLIIKcJ%2BNdPNZqnafV2TNvO7us9PtIC%2BMO6BZr%2F%2FgAZAvKLaF8ItXbpHZwM5YrN99lUpOwotpoauCI7DtLGNJfh6lkMdTR16ft2IT&X-Amz-Signature=0d440d00c23482b95211b26d6c34483bce35f0f70961e6ed0f12ba2a450523e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHUAS36%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCmeXTCJ2V1zQidQK4fYR9MafOw2q8Ix6EHLj%2FQdxenVwIgC%2BMyzotduDpSo5UgjAOLu0g0jKIhfZ4zvmRyc54kWcIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMVGTOUvujcYrX5IOyrcA3mzVV5KwB%2BbzFgjeTjJn7bfVf6RsfJm7%2FUxpURMAfbaEm%2B2nYESdmMaZkMrTSq1I3O8BYqjXwu2eJQaNeRTMKFyFn4olVZ4%2Bw9kqQuJ2ziarQ53C%2Bjteg3X7tBcDYJf6FJon72U1nOCrH5mOnZEK0u%2Fuzt8QjqIRRi4ZU5i53fq8MfDJgPfNSBD3ZSeMGR7OvISM0F5t76LPPNyUlmbI%2BkHzEfzGADYmmaMMzQx5mnyceOv2U0dfeBs534CP%2FuOA%2Bbyiy19hftebrrX%2Ba6TM0HXw5Ttmqr4VKK3NIWUruN8RNYs98ynX8f%2FKBVXhJCQxaWgEnWdlmKMyr5TqLLBi08jqILFGRDBqqqeVNVHE2cRQ7A0Wqrn9JteZAgvlwgIbsaXMeI49Yr5%2F5E8JHKOCQtZQ3kniPr7xIb4iIBuUz%2Fhjm%2F98A7yIv6Rl9It1P38%2BsBLEMzmxGh%2Fe6sjzO4nYTuNAySXzVDeZTebirrzg26TWlWCeSStJYUQ4pisoX0HhEFgDw3NXtbCEIjlWQYyiuug5jvyXtYPoDzVRFV%2Bh%2B6z1%2Fhler3NGOUwlNaurN9wnSCLMmSf1nPaOF09IHun9UhFZqG2Ze%2FL4QVwkdEEuXC1%2Bex5y4VeLYzofNatMJjXhcIGOqUBwayRwbX3Yadh5ratCisbx4IonOjL0fvPCdDbN32vFcDx8vlECwxeI1775OBkgWXqP9QW7qgyhBNrIqMBvYbwDkp6Or%2F7QAkRzQ5dVFCeprTJQ2jX1KUkf48lLIIKcJ%2BNdPNZqnafV2TNvO7us9PtIC%2BMO6BZr%2F%2FgAZAvKLaF8ItXbpHZwM5YrN99lUpOwotpoauCI7DtLGNJfh6lkMdTR16ft2IT&X-Amz-Signature=4898d35b9d8a7468365d8ec5101c23f0de1b997de5129c27fe0ac0bd5913c730&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHUAS36%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCmeXTCJ2V1zQidQK4fYR9MafOw2q8Ix6EHLj%2FQdxenVwIgC%2BMyzotduDpSo5UgjAOLu0g0jKIhfZ4zvmRyc54kWcIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMVGTOUvujcYrX5IOyrcA3mzVV5KwB%2BbzFgjeTjJn7bfVf6RsfJm7%2FUxpURMAfbaEm%2B2nYESdmMaZkMrTSq1I3O8BYqjXwu2eJQaNeRTMKFyFn4olVZ4%2Bw9kqQuJ2ziarQ53C%2Bjteg3X7tBcDYJf6FJon72U1nOCrH5mOnZEK0u%2Fuzt8QjqIRRi4ZU5i53fq8MfDJgPfNSBD3ZSeMGR7OvISM0F5t76LPPNyUlmbI%2BkHzEfzGADYmmaMMzQx5mnyceOv2U0dfeBs534CP%2FuOA%2Bbyiy19hftebrrX%2Ba6TM0HXw5Ttmqr4VKK3NIWUruN8RNYs98ynX8f%2FKBVXhJCQxaWgEnWdlmKMyr5TqLLBi08jqILFGRDBqqqeVNVHE2cRQ7A0Wqrn9JteZAgvlwgIbsaXMeI49Yr5%2F5E8JHKOCQtZQ3kniPr7xIb4iIBuUz%2Fhjm%2F98A7yIv6Rl9It1P38%2BsBLEMzmxGh%2Fe6sjzO4nYTuNAySXzVDeZTebirrzg26TWlWCeSStJYUQ4pisoX0HhEFgDw3NXtbCEIjlWQYyiuug5jvyXtYPoDzVRFV%2Bh%2B6z1%2Fhler3NGOUwlNaurN9wnSCLMmSf1nPaOF09IHun9UhFZqG2Ze%2FL4QVwkdEEuXC1%2Bex5y4VeLYzofNatMJjXhcIGOqUBwayRwbX3Yadh5ratCisbx4IonOjL0fvPCdDbN32vFcDx8vlECwxeI1775OBkgWXqP9QW7qgyhBNrIqMBvYbwDkp6Or%2F7QAkRzQ5dVFCeprTJQ2jX1KUkf48lLIIKcJ%2BNdPNZqnafV2TNvO7us9PtIC%2BMO6BZr%2F%2FgAZAvKLaF8ItXbpHZwM5YrN99lUpOwotpoauCI7DtLGNJfh6lkMdTR16ft2IT&X-Amz-Signature=8a3a8e4dfd914ecfea1c05acd178989f3ba06a18236b9057262d3610a7c40470&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHUAS36%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCmeXTCJ2V1zQidQK4fYR9MafOw2q8Ix6EHLj%2FQdxenVwIgC%2BMyzotduDpSo5UgjAOLu0g0jKIhfZ4zvmRyc54kWcIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMVGTOUvujcYrX5IOyrcA3mzVV5KwB%2BbzFgjeTjJn7bfVf6RsfJm7%2FUxpURMAfbaEm%2B2nYESdmMaZkMrTSq1I3O8BYqjXwu2eJQaNeRTMKFyFn4olVZ4%2Bw9kqQuJ2ziarQ53C%2Bjteg3X7tBcDYJf6FJon72U1nOCrH5mOnZEK0u%2Fuzt8QjqIRRi4ZU5i53fq8MfDJgPfNSBD3ZSeMGR7OvISM0F5t76LPPNyUlmbI%2BkHzEfzGADYmmaMMzQx5mnyceOv2U0dfeBs534CP%2FuOA%2Bbyiy19hftebrrX%2Ba6TM0HXw5Ttmqr4VKK3NIWUruN8RNYs98ynX8f%2FKBVXhJCQxaWgEnWdlmKMyr5TqLLBi08jqILFGRDBqqqeVNVHE2cRQ7A0Wqrn9JteZAgvlwgIbsaXMeI49Yr5%2F5E8JHKOCQtZQ3kniPr7xIb4iIBuUz%2Fhjm%2F98A7yIv6Rl9It1P38%2BsBLEMzmxGh%2Fe6sjzO4nYTuNAySXzVDeZTebirrzg26TWlWCeSStJYUQ4pisoX0HhEFgDw3NXtbCEIjlWQYyiuug5jvyXtYPoDzVRFV%2Bh%2B6z1%2Fhler3NGOUwlNaurN9wnSCLMmSf1nPaOF09IHun9UhFZqG2Ze%2FL4QVwkdEEuXC1%2Bex5y4VeLYzofNatMJjXhcIGOqUBwayRwbX3Yadh5ratCisbx4IonOjL0fvPCdDbN32vFcDx8vlECwxeI1775OBkgWXqP9QW7qgyhBNrIqMBvYbwDkp6Or%2F7QAkRzQ5dVFCeprTJQ2jX1KUkf48lLIIKcJ%2BNdPNZqnafV2TNvO7us9PtIC%2BMO6BZr%2F%2FgAZAvKLaF8ItXbpHZwM5YrN99lUpOwotpoauCI7DtLGNJfh6lkMdTR16ft2IT&X-Amz-Signature=c15fc4039cf7a482fdc802a109e37339ba29fb4be5ee3544264c02409c874bef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHUAS36%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCmeXTCJ2V1zQidQK4fYR9MafOw2q8Ix6EHLj%2FQdxenVwIgC%2BMyzotduDpSo5UgjAOLu0g0jKIhfZ4zvmRyc54kWcIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMVGTOUvujcYrX5IOyrcA3mzVV5KwB%2BbzFgjeTjJn7bfVf6RsfJm7%2FUxpURMAfbaEm%2B2nYESdmMaZkMrTSq1I3O8BYqjXwu2eJQaNeRTMKFyFn4olVZ4%2Bw9kqQuJ2ziarQ53C%2Bjteg3X7tBcDYJf6FJon72U1nOCrH5mOnZEK0u%2Fuzt8QjqIRRi4ZU5i53fq8MfDJgPfNSBD3ZSeMGR7OvISM0F5t76LPPNyUlmbI%2BkHzEfzGADYmmaMMzQx5mnyceOv2U0dfeBs534CP%2FuOA%2Bbyiy19hftebrrX%2Ba6TM0HXw5Ttmqr4VKK3NIWUruN8RNYs98ynX8f%2FKBVXhJCQxaWgEnWdlmKMyr5TqLLBi08jqILFGRDBqqqeVNVHE2cRQ7A0Wqrn9JteZAgvlwgIbsaXMeI49Yr5%2F5E8JHKOCQtZQ3kniPr7xIb4iIBuUz%2Fhjm%2F98A7yIv6Rl9It1P38%2BsBLEMzmxGh%2Fe6sjzO4nYTuNAySXzVDeZTebirrzg26TWlWCeSStJYUQ4pisoX0HhEFgDw3NXtbCEIjlWQYyiuug5jvyXtYPoDzVRFV%2Bh%2B6z1%2Fhler3NGOUwlNaurN9wnSCLMmSf1nPaOF09IHun9UhFZqG2Ze%2FL4QVwkdEEuXC1%2Bex5y4VeLYzofNatMJjXhcIGOqUBwayRwbX3Yadh5ratCisbx4IonOjL0fvPCdDbN32vFcDx8vlECwxeI1775OBkgWXqP9QW7qgyhBNrIqMBvYbwDkp6Or%2F7QAkRzQ5dVFCeprTJQ2jX1KUkf48lLIIKcJ%2BNdPNZqnafV2TNvO7us9PtIC%2BMO6BZr%2F%2FgAZAvKLaF8ItXbpHZwM5YrN99lUpOwotpoauCI7DtLGNJfh6lkMdTR16ft2IT&X-Amz-Signature=30e52b07ae4fb1ae13af897c8a3e24d1b683a6287453e79ed165ee5d6255841f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
