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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FA5OSKN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAcXpVNKhjQF8IeZf9JR2dVryQDLbdo5KOOBjlJhFDlgIgK79lFCnwlGHR5gHtVCBetjtqHTu6XGGccpye1yvc%2BOgqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlWL904EuE4womQNircAzU8fwDviFZDpz1B3JIKQXw3P3eiy2uO71bc8R5IxNG9A5WRMAIpEjYk%2F%2F%2FreCKEyKiNW95e0IiNTW9o3wwOxgRLxccUBpAavvACTCcZC0ZWgVmYS2%2FT39VCwOtVm7%2FGacMF6s9lAzB4VNHIoxx7XTteFueRmJ9zg2JmHEoHFcV2U%2B8N51XAnAwWIRmLPYjEYnxqgACj72q8aVENq8PcVbxVuM4n07qHRoP48ffxemnwuWL5rfYvp9rzcINq7MYDWWto4WX0LhqnEokrPrm9RATz4tdPSnk0HOYg78S75uYCGwkQMY3pPTZQcCDKwLo4jtQ2KmIzzx6DPtWBCZKUa2O2Ri68LZBz14tfsCu98RCjz%2FEyr2u0U7tK%2BoIkVSt2vgjOy0Z0a3Gbxo1cHFToK43CsvmyxFOAo7%2B1dduaz%2F58T2l0cVLFebR8Pwsdd8TMFWRE5%2FKQKHsqWKzyJpS1knen85utvCK%2Fdv2oFKEc4k3Xx1pE1BtXwYuAJV2KyeZp5tWHRi99n5%2BvBsT%2BOTzJahXpDB0pb4iCmQgRth9iYb1K5IIsGQ4ILIuUq9ntX%2F%2FQ45OGZRe2HVow1%2BBM4g5cpBam9VTbkpP0xcOljcM4ur70pwsVLBMPbRYj49HuMJaV3b0GOqUB4ufjuJI4F1E5Zv3jT6Vrxn95nM9MhwH%2F%2BIxsgfKPJA4PsZlgf1lXmZAgIY%2BupAcWlLdGhW3pykc3VFs440pgPeD35kqzI%2FYMrm93ykyIeDGg%2BRAteNlSKxBzTuOFdlsV%2BfwLtm87UPfAKKyES%2BA3HM1yu2HnfGqkDjuVjgW2W1A5A4A8QPhWmg%2B%2Ftt1jPYUr3kadnh3ZmKjkFid%2BSdo6tsGYfmFY&X-Amz-Signature=399e19bcaa62148e68dd9a80b72febd145da5aa07760341da6b96bf552180b56&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FA5OSKN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAcXpVNKhjQF8IeZf9JR2dVryQDLbdo5KOOBjlJhFDlgIgK79lFCnwlGHR5gHtVCBetjtqHTu6XGGccpye1yvc%2BOgqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlWL904EuE4womQNircAzU8fwDviFZDpz1B3JIKQXw3P3eiy2uO71bc8R5IxNG9A5WRMAIpEjYk%2F%2F%2FreCKEyKiNW95e0IiNTW9o3wwOxgRLxccUBpAavvACTCcZC0ZWgVmYS2%2FT39VCwOtVm7%2FGacMF6s9lAzB4VNHIoxx7XTteFueRmJ9zg2JmHEoHFcV2U%2B8N51XAnAwWIRmLPYjEYnxqgACj72q8aVENq8PcVbxVuM4n07qHRoP48ffxemnwuWL5rfYvp9rzcINq7MYDWWto4WX0LhqnEokrPrm9RATz4tdPSnk0HOYg78S75uYCGwkQMY3pPTZQcCDKwLo4jtQ2KmIzzx6DPtWBCZKUa2O2Ri68LZBz14tfsCu98RCjz%2FEyr2u0U7tK%2BoIkVSt2vgjOy0Z0a3Gbxo1cHFToK43CsvmyxFOAo7%2B1dduaz%2F58T2l0cVLFebR8Pwsdd8TMFWRE5%2FKQKHsqWKzyJpS1knen85utvCK%2Fdv2oFKEc4k3Xx1pE1BtXwYuAJV2KyeZp5tWHRi99n5%2BvBsT%2BOTzJahXpDB0pb4iCmQgRth9iYb1K5IIsGQ4ILIuUq9ntX%2F%2FQ45OGZRe2HVow1%2BBM4g5cpBam9VTbkpP0xcOljcM4ur70pwsVLBMPbRYj49HuMJaV3b0GOqUB4ufjuJI4F1E5Zv3jT6Vrxn95nM9MhwH%2F%2BIxsgfKPJA4PsZlgf1lXmZAgIY%2BupAcWlLdGhW3pykc3VFs440pgPeD35kqzI%2FYMrm93ykyIeDGg%2BRAteNlSKxBzTuOFdlsV%2BfwLtm87UPfAKKyES%2BA3HM1yu2HnfGqkDjuVjgW2W1A5A4A8QPhWmg%2B%2Ftt1jPYUr3kadnh3ZmKjkFid%2BSdo6tsGYfmFY&X-Amz-Signature=a48b6c0df4e8ee6c60611c46c57714b777e0a64b9b01ae21076ce36b44914604&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FA5OSKN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAcXpVNKhjQF8IeZf9JR2dVryQDLbdo5KOOBjlJhFDlgIgK79lFCnwlGHR5gHtVCBetjtqHTu6XGGccpye1yvc%2BOgqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlWL904EuE4womQNircAzU8fwDviFZDpz1B3JIKQXw3P3eiy2uO71bc8R5IxNG9A5WRMAIpEjYk%2F%2F%2FreCKEyKiNW95e0IiNTW9o3wwOxgRLxccUBpAavvACTCcZC0ZWgVmYS2%2FT39VCwOtVm7%2FGacMF6s9lAzB4VNHIoxx7XTteFueRmJ9zg2JmHEoHFcV2U%2B8N51XAnAwWIRmLPYjEYnxqgACj72q8aVENq8PcVbxVuM4n07qHRoP48ffxemnwuWL5rfYvp9rzcINq7MYDWWto4WX0LhqnEokrPrm9RATz4tdPSnk0HOYg78S75uYCGwkQMY3pPTZQcCDKwLo4jtQ2KmIzzx6DPtWBCZKUa2O2Ri68LZBz14tfsCu98RCjz%2FEyr2u0U7tK%2BoIkVSt2vgjOy0Z0a3Gbxo1cHFToK43CsvmyxFOAo7%2B1dduaz%2F58T2l0cVLFebR8Pwsdd8TMFWRE5%2FKQKHsqWKzyJpS1knen85utvCK%2Fdv2oFKEc4k3Xx1pE1BtXwYuAJV2KyeZp5tWHRi99n5%2BvBsT%2BOTzJahXpDB0pb4iCmQgRth9iYb1K5IIsGQ4ILIuUq9ntX%2F%2FQ45OGZRe2HVow1%2BBM4g5cpBam9VTbkpP0xcOljcM4ur70pwsVLBMPbRYj49HuMJaV3b0GOqUB4ufjuJI4F1E5Zv3jT6Vrxn95nM9MhwH%2F%2BIxsgfKPJA4PsZlgf1lXmZAgIY%2BupAcWlLdGhW3pykc3VFs440pgPeD35kqzI%2FYMrm93ykyIeDGg%2BRAteNlSKxBzTuOFdlsV%2BfwLtm87UPfAKKyES%2BA3HM1yu2HnfGqkDjuVjgW2W1A5A4A8QPhWmg%2B%2Ftt1jPYUr3kadnh3ZmKjkFid%2BSdo6tsGYfmFY&X-Amz-Signature=dcd1373564086ca4fe3eca31eb87e5f5f7ea6bbb81776302b41a6b0362a5c135&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FA5OSKN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAcXpVNKhjQF8IeZf9JR2dVryQDLbdo5KOOBjlJhFDlgIgK79lFCnwlGHR5gHtVCBetjtqHTu6XGGccpye1yvc%2BOgqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlWL904EuE4womQNircAzU8fwDviFZDpz1B3JIKQXw3P3eiy2uO71bc8R5IxNG9A5WRMAIpEjYk%2F%2F%2FreCKEyKiNW95e0IiNTW9o3wwOxgRLxccUBpAavvACTCcZC0ZWgVmYS2%2FT39VCwOtVm7%2FGacMF6s9lAzB4VNHIoxx7XTteFueRmJ9zg2JmHEoHFcV2U%2B8N51XAnAwWIRmLPYjEYnxqgACj72q8aVENq8PcVbxVuM4n07qHRoP48ffxemnwuWL5rfYvp9rzcINq7MYDWWto4WX0LhqnEokrPrm9RATz4tdPSnk0HOYg78S75uYCGwkQMY3pPTZQcCDKwLo4jtQ2KmIzzx6DPtWBCZKUa2O2Ri68LZBz14tfsCu98RCjz%2FEyr2u0U7tK%2BoIkVSt2vgjOy0Z0a3Gbxo1cHFToK43CsvmyxFOAo7%2B1dduaz%2F58T2l0cVLFebR8Pwsdd8TMFWRE5%2FKQKHsqWKzyJpS1knen85utvCK%2Fdv2oFKEc4k3Xx1pE1BtXwYuAJV2KyeZp5tWHRi99n5%2BvBsT%2BOTzJahXpDB0pb4iCmQgRth9iYb1K5IIsGQ4ILIuUq9ntX%2F%2FQ45OGZRe2HVow1%2BBM4g5cpBam9VTbkpP0xcOljcM4ur70pwsVLBMPbRYj49HuMJaV3b0GOqUB4ufjuJI4F1E5Zv3jT6Vrxn95nM9MhwH%2F%2BIxsgfKPJA4PsZlgf1lXmZAgIY%2BupAcWlLdGhW3pykc3VFs440pgPeD35kqzI%2FYMrm93ykyIeDGg%2BRAteNlSKxBzTuOFdlsV%2BfwLtm87UPfAKKyES%2BA3HM1yu2HnfGqkDjuVjgW2W1A5A4A8QPhWmg%2B%2Ftt1jPYUr3kadnh3ZmKjkFid%2BSdo6tsGYfmFY&X-Amz-Signature=17bf833bf1451bd49c306d448bbda525772202254887ed00201374de1e46b186&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FA5OSKN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAcXpVNKhjQF8IeZf9JR2dVryQDLbdo5KOOBjlJhFDlgIgK79lFCnwlGHR5gHtVCBetjtqHTu6XGGccpye1yvc%2BOgqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlWL904EuE4womQNircAzU8fwDviFZDpz1B3JIKQXw3P3eiy2uO71bc8R5IxNG9A5WRMAIpEjYk%2F%2F%2FreCKEyKiNW95e0IiNTW9o3wwOxgRLxccUBpAavvACTCcZC0ZWgVmYS2%2FT39VCwOtVm7%2FGacMF6s9lAzB4VNHIoxx7XTteFueRmJ9zg2JmHEoHFcV2U%2B8N51XAnAwWIRmLPYjEYnxqgACj72q8aVENq8PcVbxVuM4n07qHRoP48ffxemnwuWL5rfYvp9rzcINq7MYDWWto4WX0LhqnEokrPrm9RATz4tdPSnk0HOYg78S75uYCGwkQMY3pPTZQcCDKwLo4jtQ2KmIzzx6DPtWBCZKUa2O2Ri68LZBz14tfsCu98RCjz%2FEyr2u0U7tK%2BoIkVSt2vgjOy0Z0a3Gbxo1cHFToK43CsvmyxFOAo7%2B1dduaz%2F58T2l0cVLFebR8Pwsdd8TMFWRE5%2FKQKHsqWKzyJpS1knen85utvCK%2Fdv2oFKEc4k3Xx1pE1BtXwYuAJV2KyeZp5tWHRi99n5%2BvBsT%2BOTzJahXpDB0pb4iCmQgRth9iYb1K5IIsGQ4ILIuUq9ntX%2F%2FQ45OGZRe2HVow1%2BBM4g5cpBam9VTbkpP0xcOljcM4ur70pwsVLBMPbRYj49HuMJaV3b0GOqUB4ufjuJI4F1E5Zv3jT6Vrxn95nM9MhwH%2F%2BIxsgfKPJA4PsZlgf1lXmZAgIY%2BupAcWlLdGhW3pykc3VFs440pgPeD35kqzI%2FYMrm93ykyIeDGg%2BRAteNlSKxBzTuOFdlsV%2BfwLtm87UPfAKKyES%2BA3HM1yu2HnfGqkDjuVjgW2W1A5A4A8QPhWmg%2B%2Ftt1jPYUr3kadnh3ZmKjkFid%2BSdo6tsGYfmFY&X-Amz-Signature=3250bc6b95323d96a214be4c0982f4ea315b990ed04d9fc62bc37429065f43f3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
