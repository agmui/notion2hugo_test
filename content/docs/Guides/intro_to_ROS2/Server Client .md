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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RQLC6N%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAHb06jGzy5%2FkPECo4EAwEFQNDjP7zVBf1fMbi5U3c5AIgXIeqI0PnkdP%2F%2BVgmfJ2zYLQF3a1yupcMwJWboLOQovYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATmK%2FLlYLkPLh1HQCrcA63aKljd14X6khODkCNgwli0U1kR%2BiI%2BIsewYCFiYpGrIDL1cOGgLljv%2FdoQ0pAEpgR4IAA8RL7iT65R0N%2BO6sUNnK0brIdooMlMkIU3mt%2FOgExv%2F0kz1k3lYiBkMz5msJLXzvO0LVPgJFJFDOIowQAJkfkpyT0yi5GynJLUHEymeiutesiCoB5J49b0jQhvx16SF754mGaILCpT33jkJIIK4ffZsWQE2v%2Fsrly9CfbXZh9AakIZ%2BZEBp%2BXroSU6wNihd6uY120ni%2B74rQdcUJSEeQdCbF5CBUU8Qa0dclMVF63stDujPXHrOmm%2BzAIIcutdpP7le6ELC1VPR%2Bd24NlqMoL0F2ayANc2vB0HMlu%2FIDQKkILPYNcOhOmuq%2BP%2BP9jh91RJhY2DjuIPiHy4kNkbW%2FWDrC%2F7woU%2B4Op18ynDF5vOYSRxBceNbaamcae%2FNpF1i6EAoJjlunbC3J%2FvoPRuCFCuf6teNZ1YfPtSE9hqj9svmMd5jduXeXFCyGcp9yDOScoOCCOVXuzS1T1M2MDjsjSjlS0m0u4fzWcVToGgO0YyVeTY7clQWCe4r5GcaeH%2FnDFVKc%2FXMVyRdMSL%2BLv6QMIByAkKRVhiqXTpf3%2FWhdh8puZ%2F8xgmi8ESMI%2BMp8QGOqUBLzOO0145EbuU8TS66q2EUytKGPTkRQJ2vH1Qj3tdnlynodG6stuRGSKFKZNuZyx4lJIUsD1OadDlNaKXfCc4RXI9kBWPjMmpxyH6EC72pmKX4byauzbEZWMkZ16au3bkZjUm%2F0%2Fq5gkKdu7vkgo7EI19TkIgdb9hufil2McI%2Flbq4qmzE5Ybj8Sb%2Bl2aB0ip%2FOhnSIwLR5mOW1eSez50jRZsL14P&X-Amz-Signature=26b3bfd4efe2364cc322494cd8ba297e3a40c1b28d89e96f22e7d500db90b1a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RQLC6N%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAHb06jGzy5%2FkPECo4EAwEFQNDjP7zVBf1fMbi5U3c5AIgXIeqI0PnkdP%2F%2BVgmfJ2zYLQF3a1yupcMwJWboLOQovYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATmK%2FLlYLkPLh1HQCrcA63aKljd14X6khODkCNgwli0U1kR%2BiI%2BIsewYCFiYpGrIDL1cOGgLljv%2FdoQ0pAEpgR4IAA8RL7iT65R0N%2BO6sUNnK0brIdooMlMkIU3mt%2FOgExv%2F0kz1k3lYiBkMz5msJLXzvO0LVPgJFJFDOIowQAJkfkpyT0yi5GynJLUHEymeiutesiCoB5J49b0jQhvx16SF754mGaILCpT33jkJIIK4ffZsWQE2v%2Fsrly9CfbXZh9AakIZ%2BZEBp%2BXroSU6wNihd6uY120ni%2B74rQdcUJSEeQdCbF5CBUU8Qa0dclMVF63stDujPXHrOmm%2BzAIIcutdpP7le6ELC1VPR%2Bd24NlqMoL0F2ayANc2vB0HMlu%2FIDQKkILPYNcOhOmuq%2BP%2BP9jh91RJhY2DjuIPiHy4kNkbW%2FWDrC%2F7woU%2B4Op18ynDF5vOYSRxBceNbaamcae%2FNpF1i6EAoJjlunbC3J%2FvoPRuCFCuf6teNZ1YfPtSE9hqj9svmMd5jduXeXFCyGcp9yDOScoOCCOVXuzS1T1M2MDjsjSjlS0m0u4fzWcVToGgO0YyVeTY7clQWCe4r5GcaeH%2FnDFVKc%2FXMVyRdMSL%2BLv6QMIByAkKRVhiqXTpf3%2FWhdh8puZ%2F8xgmi8ESMI%2BMp8QGOqUBLzOO0145EbuU8TS66q2EUytKGPTkRQJ2vH1Qj3tdnlynodG6stuRGSKFKZNuZyx4lJIUsD1OadDlNaKXfCc4RXI9kBWPjMmpxyH6EC72pmKX4byauzbEZWMkZ16au3bkZjUm%2F0%2Fq5gkKdu7vkgo7EI19TkIgdb9hufil2McI%2Flbq4qmzE5Ybj8Sb%2Bl2aB0ip%2FOhnSIwLR5mOW1eSez50jRZsL14P&X-Amz-Signature=f71cddb0e490320ccbce1543156b47a30dfc822d5adf09340974aadb6e9fb768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RQLC6N%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAHb06jGzy5%2FkPECo4EAwEFQNDjP7zVBf1fMbi5U3c5AIgXIeqI0PnkdP%2F%2BVgmfJ2zYLQF3a1yupcMwJWboLOQovYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATmK%2FLlYLkPLh1HQCrcA63aKljd14X6khODkCNgwli0U1kR%2BiI%2BIsewYCFiYpGrIDL1cOGgLljv%2FdoQ0pAEpgR4IAA8RL7iT65R0N%2BO6sUNnK0brIdooMlMkIU3mt%2FOgExv%2F0kz1k3lYiBkMz5msJLXzvO0LVPgJFJFDOIowQAJkfkpyT0yi5GynJLUHEymeiutesiCoB5J49b0jQhvx16SF754mGaILCpT33jkJIIK4ffZsWQE2v%2Fsrly9CfbXZh9AakIZ%2BZEBp%2BXroSU6wNihd6uY120ni%2B74rQdcUJSEeQdCbF5CBUU8Qa0dclMVF63stDujPXHrOmm%2BzAIIcutdpP7le6ELC1VPR%2Bd24NlqMoL0F2ayANc2vB0HMlu%2FIDQKkILPYNcOhOmuq%2BP%2BP9jh91RJhY2DjuIPiHy4kNkbW%2FWDrC%2F7woU%2B4Op18ynDF5vOYSRxBceNbaamcae%2FNpF1i6EAoJjlunbC3J%2FvoPRuCFCuf6teNZ1YfPtSE9hqj9svmMd5jduXeXFCyGcp9yDOScoOCCOVXuzS1T1M2MDjsjSjlS0m0u4fzWcVToGgO0YyVeTY7clQWCe4r5GcaeH%2FnDFVKc%2FXMVyRdMSL%2BLv6QMIByAkKRVhiqXTpf3%2FWhdh8puZ%2F8xgmi8ESMI%2BMp8QGOqUBLzOO0145EbuU8TS66q2EUytKGPTkRQJ2vH1Qj3tdnlynodG6stuRGSKFKZNuZyx4lJIUsD1OadDlNaKXfCc4RXI9kBWPjMmpxyH6EC72pmKX4byauzbEZWMkZ16au3bkZjUm%2F0%2Fq5gkKdu7vkgo7EI19TkIgdb9hufil2McI%2Flbq4qmzE5Ybj8Sb%2Bl2aB0ip%2FOhnSIwLR5mOW1eSez50jRZsL14P&X-Amz-Signature=e47d9963a01b52ccedb8f38cb5c26a04edd763841403f803c496a2625d48618b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RQLC6N%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAHb06jGzy5%2FkPECo4EAwEFQNDjP7zVBf1fMbi5U3c5AIgXIeqI0PnkdP%2F%2BVgmfJ2zYLQF3a1yupcMwJWboLOQovYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATmK%2FLlYLkPLh1HQCrcA63aKljd14X6khODkCNgwli0U1kR%2BiI%2BIsewYCFiYpGrIDL1cOGgLljv%2FdoQ0pAEpgR4IAA8RL7iT65R0N%2BO6sUNnK0brIdooMlMkIU3mt%2FOgExv%2F0kz1k3lYiBkMz5msJLXzvO0LVPgJFJFDOIowQAJkfkpyT0yi5GynJLUHEymeiutesiCoB5J49b0jQhvx16SF754mGaILCpT33jkJIIK4ffZsWQE2v%2Fsrly9CfbXZh9AakIZ%2BZEBp%2BXroSU6wNihd6uY120ni%2B74rQdcUJSEeQdCbF5CBUU8Qa0dclMVF63stDujPXHrOmm%2BzAIIcutdpP7le6ELC1VPR%2Bd24NlqMoL0F2ayANc2vB0HMlu%2FIDQKkILPYNcOhOmuq%2BP%2BP9jh91RJhY2DjuIPiHy4kNkbW%2FWDrC%2F7woU%2B4Op18ynDF5vOYSRxBceNbaamcae%2FNpF1i6EAoJjlunbC3J%2FvoPRuCFCuf6teNZ1YfPtSE9hqj9svmMd5jduXeXFCyGcp9yDOScoOCCOVXuzS1T1M2MDjsjSjlS0m0u4fzWcVToGgO0YyVeTY7clQWCe4r5GcaeH%2FnDFVKc%2FXMVyRdMSL%2BLv6QMIByAkKRVhiqXTpf3%2FWhdh8puZ%2F8xgmi8ESMI%2BMp8QGOqUBLzOO0145EbuU8TS66q2EUytKGPTkRQJ2vH1Qj3tdnlynodG6stuRGSKFKZNuZyx4lJIUsD1OadDlNaKXfCc4RXI9kBWPjMmpxyH6EC72pmKX4byauzbEZWMkZ16au3bkZjUm%2F0%2Fq5gkKdu7vkgo7EI19TkIgdb9hufil2McI%2Flbq4qmzE5Ybj8Sb%2Bl2aB0ip%2FOhnSIwLR5mOW1eSez50jRZsL14P&X-Amz-Signature=ec8937cc1b045c09cdb81050bc6550ae9a17fdd56377bf7129fb09f036b92d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RQLC6N%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAHb06jGzy5%2FkPECo4EAwEFQNDjP7zVBf1fMbi5U3c5AIgXIeqI0PnkdP%2F%2BVgmfJ2zYLQF3a1yupcMwJWboLOQovYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATmK%2FLlYLkPLh1HQCrcA63aKljd14X6khODkCNgwli0U1kR%2BiI%2BIsewYCFiYpGrIDL1cOGgLljv%2FdoQ0pAEpgR4IAA8RL7iT65R0N%2BO6sUNnK0brIdooMlMkIU3mt%2FOgExv%2F0kz1k3lYiBkMz5msJLXzvO0LVPgJFJFDOIowQAJkfkpyT0yi5GynJLUHEymeiutesiCoB5J49b0jQhvx16SF754mGaILCpT33jkJIIK4ffZsWQE2v%2Fsrly9CfbXZh9AakIZ%2BZEBp%2BXroSU6wNihd6uY120ni%2B74rQdcUJSEeQdCbF5CBUU8Qa0dclMVF63stDujPXHrOmm%2BzAIIcutdpP7le6ELC1VPR%2Bd24NlqMoL0F2ayANc2vB0HMlu%2FIDQKkILPYNcOhOmuq%2BP%2BP9jh91RJhY2DjuIPiHy4kNkbW%2FWDrC%2F7woU%2B4Op18ynDF5vOYSRxBceNbaamcae%2FNpF1i6EAoJjlunbC3J%2FvoPRuCFCuf6teNZ1YfPtSE9hqj9svmMd5jduXeXFCyGcp9yDOScoOCCOVXuzS1T1M2MDjsjSjlS0m0u4fzWcVToGgO0YyVeTY7clQWCe4r5GcaeH%2FnDFVKc%2FXMVyRdMSL%2BLv6QMIByAkKRVhiqXTpf3%2FWhdh8puZ%2F8xgmi8ESMI%2BMp8QGOqUBLzOO0145EbuU8TS66q2EUytKGPTkRQJ2vH1Qj3tdnlynodG6stuRGSKFKZNuZyx4lJIUsD1OadDlNaKXfCc4RXI9kBWPjMmpxyH6EC72pmKX4byauzbEZWMkZ16au3bkZjUm%2F0%2Fq5gkKdu7vkgo7EI19TkIgdb9hufil2McI%2Flbq4qmzE5Ybj8Sb%2Bl2aB0ip%2FOhnSIwLR5mOW1eSez50jRZsL14P&X-Amz-Signature=82b06cc4ab01282c03e1068ac8574db7fda23fce43e96ad55a18a18fa171726e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
