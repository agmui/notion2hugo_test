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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JS2ITTN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbwtYYBcjr6K1qposh8eGjG0qyp1clpYb32UHKT4UhRQIgWo5Sl9vaTcjmF7EDjwFyJ%2FYkl%2BQK%2B%2BuRsieagCYG3B8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBTJdCIy1i8nTXk8XyrcA%2Fo2rX1eFkCQxcnBzPAp%2BJRR%2F2SenCey%2FPkCTRZ3hbiBxnjSuXn7Y4r%2Bqpb9FS9h0%2BpTfnuPsp669R5IiWOs2Zq62uEx8nwh9aiuE1OcuVi4vEX7Qzo5Z7xAcfwhOxvNV3q1SYZanGGpiW%2BHRrWDML6toRi%2BaJCEEOt2MHhhM5v7P5dc79ExrOdTxCFi6pu%2FnTRk66huf%2B1XfensfKn%2FxILbf2o3Kl5V2MJ%2BI%2F6xNt1ms4sY%2BgCqSTiY3Cx6O9yNJApTeG8uDRw3Ewu8YNCRFdVKLTAQVamUzegby4hKK6YRFO%2Fp8spAykgi9SISOe7uz0ue%2FD2O31dy8MCxQ8KRzmG2JqSmbnq5bXrQN9EyPuCmj3KsSVCI6fuLTLjTaFhfi44xXXc%2B9%2B4Rf5i3WYGOtsPe%2Fe70T9TZfV7nEFEie%2BvFdiwKYEa4EDeTQ8Cg7HJo%2FEZKurtJRuIrl9%2Bv%2FOiBWvh1sjQ%2FN7ts0tcH3alO89K%2FiTpbn1ljkQMJgl2zRyB2SLImb%2Bo9l4Bi%2BMofePALmdWHEM4pSwQLCu0hK1hDHd%2FZEsOmkO3rElKXJ9yopIEDKTXmUxsJKFKUKnCIkovxBIi7%2FXYGAtR2ZpVSu5RlnmH%2BXQDeBdJFYZgvrJ0fMNPg8cAGOqUBSWDLkM49IZhE1SlJESA3se6jfKgUfjKxClSkFJ4Wax%2FrWprL8Agjpjh457Ui5ocT5dCNcnfcci50YDf6E7US41A91Rg4tDqwWzs%2BgiJ0B1QtdTWIJEdNsBEhM%2BBba84HuhzJYxPkWO2ddBPQ0l0uIZGx1OPEr3oUC%2BNmlWslKbqzSVq7yXnHT2njyVtO998Ga0ApkjX%2F4%2B6WkuSvQXpbNTJJ6VcF&X-Amz-Signature=ae51c65bf62e0f564b7eeb067dfc2aef93e00e45ca6871e939cc18785d91198c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JS2ITTN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbwtYYBcjr6K1qposh8eGjG0qyp1clpYb32UHKT4UhRQIgWo5Sl9vaTcjmF7EDjwFyJ%2FYkl%2BQK%2B%2BuRsieagCYG3B8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBTJdCIy1i8nTXk8XyrcA%2Fo2rX1eFkCQxcnBzPAp%2BJRR%2F2SenCey%2FPkCTRZ3hbiBxnjSuXn7Y4r%2Bqpb9FS9h0%2BpTfnuPsp669R5IiWOs2Zq62uEx8nwh9aiuE1OcuVi4vEX7Qzo5Z7xAcfwhOxvNV3q1SYZanGGpiW%2BHRrWDML6toRi%2BaJCEEOt2MHhhM5v7P5dc79ExrOdTxCFi6pu%2FnTRk66huf%2B1XfensfKn%2FxILbf2o3Kl5V2MJ%2BI%2F6xNt1ms4sY%2BgCqSTiY3Cx6O9yNJApTeG8uDRw3Ewu8YNCRFdVKLTAQVamUzegby4hKK6YRFO%2Fp8spAykgi9SISOe7uz0ue%2FD2O31dy8MCxQ8KRzmG2JqSmbnq5bXrQN9EyPuCmj3KsSVCI6fuLTLjTaFhfi44xXXc%2B9%2B4Rf5i3WYGOtsPe%2Fe70T9TZfV7nEFEie%2BvFdiwKYEa4EDeTQ8Cg7HJo%2FEZKurtJRuIrl9%2Bv%2FOiBWvh1sjQ%2FN7ts0tcH3alO89K%2FiTpbn1ljkQMJgl2zRyB2SLImb%2Bo9l4Bi%2BMofePALmdWHEM4pSwQLCu0hK1hDHd%2FZEsOmkO3rElKXJ9yopIEDKTXmUxsJKFKUKnCIkovxBIi7%2FXYGAtR2ZpVSu5RlnmH%2BXQDeBdJFYZgvrJ0fMNPg8cAGOqUBSWDLkM49IZhE1SlJESA3se6jfKgUfjKxClSkFJ4Wax%2FrWprL8Agjpjh457Ui5ocT5dCNcnfcci50YDf6E7US41A91Rg4tDqwWzs%2BgiJ0B1QtdTWIJEdNsBEhM%2BBba84HuhzJYxPkWO2ddBPQ0l0uIZGx1OPEr3oUC%2BNmlWslKbqzSVq7yXnHT2njyVtO998Ga0ApkjX%2F4%2B6WkuSvQXpbNTJJ6VcF&X-Amz-Signature=47e15c9960003e07c03dee3ed909646772f400de4f4d5648250166fb8904e385&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JS2ITTN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbwtYYBcjr6K1qposh8eGjG0qyp1clpYb32UHKT4UhRQIgWo5Sl9vaTcjmF7EDjwFyJ%2FYkl%2BQK%2B%2BuRsieagCYG3B8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBTJdCIy1i8nTXk8XyrcA%2Fo2rX1eFkCQxcnBzPAp%2BJRR%2F2SenCey%2FPkCTRZ3hbiBxnjSuXn7Y4r%2Bqpb9FS9h0%2BpTfnuPsp669R5IiWOs2Zq62uEx8nwh9aiuE1OcuVi4vEX7Qzo5Z7xAcfwhOxvNV3q1SYZanGGpiW%2BHRrWDML6toRi%2BaJCEEOt2MHhhM5v7P5dc79ExrOdTxCFi6pu%2FnTRk66huf%2B1XfensfKn%2FxILbf2o3Kl5V2MJ%2BI%2F6xNt1ms4sY%2BgCqSTiY3Cx6O9yNJApTeG8uDRw3Ewu8YNCRFdVKLTAQVamUzegby4hKK6YRFO%2Fp8spAykgi9SISOe7uz0ue%2FD2O31dy8MCxQ8KRzmG2JqSmbnq5bXrQN9EyPuCmj3KsSVCI6fuLTLjTaFhfi44xXXc%2B9%2B4Rf5i3WYGOtsPe%2Fe70T9TZfV7nEFEie%2BvFdiwKYEa4EDeTQ8Cg7HJo%2FEZKurtJRuIrl9%2Bv%2FOiBWvh1sjQ%2FN7ts0tcH3alO89K%2FiTpbn1ljkQMJgl2zRyB2SLImb%2Bo9l4Bi%2BMofePALmdWHEM4pSwQLCu0hK1hDHd%2FZEsOmkO3rElKXJ9yopIEDKTXmUxsJKFKUKnCIkovxBIi7%2FXYGAtR2ZpVSu5RlnmH%2BXQDeBdJFYZgvrJ0fMNPg8cAGOqUBSWDLkM49IZhE1SlJESA3se6jfKgUfjKxClSkFJ4Wax%2FrWprL8Agjpjh457Ui5ocT5dCNcnfcci50YDf6E7US41A91Rg4tDqwWzs%2BgiJ0B1QtdTWIJEdNsBEhM%2BBba84HuhzJYxPkWO2ddBPQ0l0uIZGx1OPEr3oUC%2BNmlWslKbqzSVq7yXnHT2njyVtO998Ga0ApkjX%2F4%2B6WkuSvQXpbNTJJ6VcF&X-Amz-Signature=32d47af2586903aa07e92032f2f52324e97f9798ab0ce6e6b760d058a1a1dcae&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JS2ITTN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbwtYYBcjr6K1qposh8eGjG0qyp1clpYb32UHKT4UhRQIgWo5Sl9vaTcjmF7EDjwFyJ%2FYkl%2BQK%2B%2BuRsieagCYG3B8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBTJdCIy1i8nTXk8XyrcA%2Fo2rX1eFkCQxcnBzPAp%2BJRR%2F2SenCey%2FPkCTRZ3hbiBxnjSuXn7Y4r%2Bqpb9FS9h0%2BpTfnuPsp669R5IiWOs2Zq62uEx8nwh9aiuE1OcuVi4vEX7Qzo5Z7xAcfwhOxvNV3q1SYZanGGpiW%2BHRrWDML6toRi%2BaJCEEOt2MHhhM5v7P5dc79ExrOdTxCFi6pu%2FnTRk66huf%2B1XfensfKn%2FxILbf2o3Kl5V2MJ%2BI%2F6xNt1ms4sY%2BgCqSTiY3Cx6O9yNJApTeG8uDRw3Ewu8YNCRFdVKLTAQVamUzegby4hKK6YRFO%2Fp8spAykgi9SISOe7uz0ue%2FD2O31dy8MCxQ8KRzmG2JqSmbnq5bXrQN9EyPuCmj3KsSVCI6fuLTLjTaFhfi44xXXc%2B9%2B4Rf5i3WYGOtsPe%2Fe70T9TZfV7nEFEie%2BvFdiwKYEa4EDeTQ8Cg7HJo%2FEZKurtJRuIrl9%2Bv%2FOiBWvh1sjQ%2FN7ts0tcH3alO89K%2FiTpbn1ljkQMJgl2zRyB2SLImb%2Bo9l4Bi%2BMofePALmdWHEM4pSwQLCu0hK1hDHd%2FZEsOmkO3rElKXJ9yopIEDKTXmUxsJKFKUKnCIkovxBIi7%2FXYGAtR2ZpVSu5RlnmH%2BXQDeBdJFYZgvrJ0fMNPg8cAGOqUBSWDLkM49IZhE1SlJESA3se6jfKgUfjKxClSkFJ4Wax%2FrWprL8Agjpjh457Ui5ocT5dCNcnfcci50YDf6E7US41A91Rg4tDqwWzs%2BgiJ0B1QtdTWIJEdNsBEhM%2BBba84HuhzJYxPkWO2ddBPQ0l0uIZGx1OPEr3oUC%2BNmlWslKbqzSVq7yXnHT2njyVtO998Ga0ApkjX%2F4%2B6WkuSvQXpbNTJJ6VcF&X-Amz-Signature=a7452785e6e600794381bbe4da70ab8d1834af4ff513bf263aa81877ad17036d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JS2ITTN%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbwtYYBcjr6K1qposh8eGjG0qyp1clpYb32UHKT4UhRQIgWo5Sl9vaTcjmF7EDjwFyJ%2FYkl%2BQK%2B%2BuRsieagCYG3B8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBTJdCIy1i8nTXk8XyrcA%2Fo2rX1eFkCQxcnBzPAp%2BJRR%2F2SenCey%2FPkCTRZ3hbiBxnjSuXn7Y4r%2Bqpb9FS9h0%2BpTfnuPsp669R5IiWOs2Zq62uEx8nwh9aiuE1OcuVi4vEX7Qzo5Z7xAcfwhOxvNV3q1SYZanGGpiW%2BHRrWDML6toRi%2BaJCEEOt2MHhhM5v7P5dc79ExrOdTxCFi6pu%2FnTRk66huf%2B1XfensfKn%2FxILbf2o3Kl5V2MJ%2BI%2F6xNt1ms4sY%2BgCqSTiY3Cx6O9yNJApTeG8uDRw3Ewu8YNCRFdVKLTAQVamUzegby4hKK6YRFO%2Fp8spAykgi9SISOe7uz0ue%2FD2O31dy8MCxQ8KRzmG2JqSmbnq5bXrQN9EyPuCmj3KsSVCI6fuLTLjTaFhfi44xXXc%2B9%2B4Rf5i3WYGOtsPe%2Fe70T9TZfV7nEFEie%2BvFdiwKYEa4EDeTQ8Cg7HJo%2FEZKurtJRuIrl9%2Bv%2FOiBWvh1sjQ%2FN7ts0tcH3alO89K%2FiTpbn1ljkQMJgl2zRyB2SLImb%2Bo9l4Bi%2BMofePALmdWHEM4pSwQLCu0hK1hDHd%2FZEsOmkO3rElKXJ9yopIEDKTXmUxsJKFKUKnCIkovxBIi7%2FXYGAtR2ZpVSu5RlnmH%2BXQDeBdJFYZgvrJ0fMNPg8cAGOqUBSWDLkM49IZhE1SlJESA3se6jfKgUfjKxClSkFJ4Wax%2FrWprL8Agjpjh457Ui5ocT5dCNcnfcci50YDf6E7US41A91Rg4tDqwWzs%2BgiJ0B1QtdTWIJEdNsBEhM%2BBba84HuhzJYxPkWO2ddBPQ0l0uIZGx1OPEr3oUC%2BNmlWslKbqzSVq7yXnHT2njyVtO998Ga0ApkjX%2F4%2B6WkuSvQXpbNTJJ6VcF&X-Amz-Signature=15bf840782dc80a821394cf3fd1af1921fd317cfc2f14582567999ffc58bfc6c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
