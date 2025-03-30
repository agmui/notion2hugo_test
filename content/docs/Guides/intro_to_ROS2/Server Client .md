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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625OFQEEW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCNYZItqH%2FlOxussopKF9tGkwwIKw%2B%2BgnEmU%2F924gFoOwIgdeZAtoeJlah%2FnW7Ex%2BOfEGVh%2Faz%2BuVe%2FGelZ0gLNMEoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMpAe8JfaE2w6HQfSrcAwPnL2lCUaFKcYJk63zVZhYTlmtEqzKRLEXSHXYlzkW9JV4d59DIBri0%2BHcUlapy%2FQjlp1VToFSHzrl79j93DWnBkRXk1%2BfXespkU3RDAV1zIzIpkGwneyKpXDEMTv%2BjX9W7bPNbJort1gBwcWF8NCsOpIKFTA0ZIFBElF7s9F715yMQ0EEW3T4pgOl5mFpk%2Fj8XqVGSs%2Fi3U4%2FOXB5M0VZ5cf5kJIMtVFrj8O6%2BLI5qjnBSPZiGka0lk7w5UM%2BZqTaJsWjTHBIkBkhOi%2Fx0GpVyAvRHMzKYwKg%2BpOjtTdYt1kYVl2t%2BLcLuKh70xEss1l5cUDkom7kMYeWCgpSduIXtlrhkBox78GlkxbKafmLNjt0FqZ%2B31WoRrMusUQCydwQrUEPlTUZ%2BAhR80FcDRLGhfxHSNHg6cITXdIoa2lJHUWITvxtfpoPsn1itY3iKo44ldkTFQn1rXOdqdEYvTH8CP4UfxBDf2H47VpqFHPFctfoRgPTOHT9Lq1MdRGEAMMCVqURcRQunx8jp%2FqwhU2%2B%2BITQe%2B%2BXDyAr1DqMaV9UMVZRK75fzqhg%2BzCgfmMAQoY7I0LZyzGC4LjKLzj36%2FBuHU5GhRJzN8T5%2B7Iz8PHi%2BDSFBM2nP7EUOYJ37MIrupb8GOqUBJxtdrO8JcxFdXnv%2Bslxh%2FE2iyXdzda2vzsxbc0aSaVbxPrPy%2Bf5W8iWWrx5q%2BPmDmwJKCwdWxFWqgJHu2vGNsOhiwoNAT04%2B251TgTansKbh4rY1FMhm3c3uLf0Fzw%2Bw9lgknia1OSnhpJNlXJ%2FO7nsmSlSQtSvUW%2BVLMqLEkmKs%2FyFV1g4AxcjYlUoIh0xoqAzb8uWw1nVyekkaDD2QJSB%2BuNQi&X-Amz-Signature=bca4ae02bdec1e85cc7064d3be0cdc883d4dfd39192824bee6da73231bb49b2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625OFQEEW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCNYZItqH%2FlOxussopKF9tGkwwIKw%2B%2BgnEmU%2F924gFoOwIgdeZAtoeJlah%2FnW7Ex%2BOfEGVh%2Faz%2BuVe%2FGelZ0gLNMEoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMpAe8JfaE2w6HQfSrcAwPnL2lCUaFKcYJk63zVZhYTlmtEqzKRLEXSHXYlzkW9JV4d59DIBri0%2BHcUlapy%2FQjlp1VToFSHzrl79j93DWnBkRXk1%2BfXespkU3RDAV1zIzIpkGwneyKpXDEMTv%2BjX9W7bPNbJort1gBwcWF8NCsOpIKFTA0ZIFBElF7s9F715yMQ0EEW3T4pgOl5mFpk%2Fj8XqVGSs%2Fi3U4%2FOXB5M0VZ5cf5kJIMtVFrj8O6%2BLI5qjnBSPZiGka0lk7w5UM%2BZqTaJsWjTHBIkBkhOi%2Fx0GpVyAvRHMzKYwKg%2BpOjtTdYt1kYVl2t%2BLcLuKh70xEss1l5cUDkom7kMYeWCgpSduIXtlrhkBox78GlkxbKafmLNjt0FqZ%2B31WoRrMusUQCydwQrUEPlTUZ%2BAhR80FcDRLGhfxHSNHg6cITXdIoa2lJHUWITvxtfpoPsn1itY3iKo44ldkTFQn1rXOdqdEYvTH8CP4UfxBDf2H47VpqFHPFctfoRgPTOHT9Lq1MdRGEAMMCVqURcRQunx8jp%2FqwhU2%2B%2BITQe%2B%2BXDyAr1DqMaV9UMVZRK75fzqhg%2BzCgfmMAQoY7I0LZyzGC4LjKLzj36%2FBuHU5GhRJzN8T5%2B7Iz8PHi%2BDSFBM2nP7EUOYJ37MIrupb8GOqUBJxtdrO8JcxFdXnv%2Bslxh%2FE2iyXdzda2vzsxbc0aSaVbxPrPy%2Bf5W8iWWrx5q%2BPmDmwJKCwdWxFWqgJHu2vGNsOhiwoNAT04%2B251TgTansKbh4rY1FMhm3c3uLf0Fzw%2Bw9lgknia1OSnhpJNlXJ%2FO7nsmSlSQtSvUW%2BVLMqLEkmKs%2FyFV1g4AxcjYlUoIh0xoqAzb8uWw1nVyekkaDD2QJSB%2BuNQi&X-Amz-Signature=045d3bf0a7492eee0f4d8d445b2cfddceb95d8d5ec7bd5e98781f30d05a9cd3c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625OFQEEW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCNYZItqH%2FlOxussopKF9tGkwwIKw%2B%2BgnEmU%2F924gFoOwIgdeZAtoeJlah%2FnW7Ex%2BOfEGVh%2Faz%2BuVe%2FGelZ0gLNMEoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMpAe8JfaE2w6HQfSrcAwPnL2lCUaFKcYJk63zVZhYTlmtEqzKRLEXSHXYlzkW9JV4d59DIBri0%2BHcUlapy%2FQjlp1VToFSHzrl79j93DWnBkRXk1%2BfXespkU3RDAV1zIzIpkGwneyKpXDEMTv%2BjX9W7bPNbJort1gBwcWF8NCsOpIKFTA0ZIFBElF7s9F715yMQ0EEW3T4pgOl5mFpk%2Fj8XqVGSs%2Fi3U4%2FOXB5M0VZ5cf5kJIMtVFrj8O6%2BLI5qjnBSPZiGka0lk7w5UM%2BZqTaJsWjTHBIkBkhOi%2Fx0GpVyAvRHMzKYwKg%2BpOjtTdYt1kYVl2t%2BLcLuKh70xEss1l5cUDkom7kMYeWCgpSduIXtlrhkBox78GlkxbKafmLNjt0FqZ%2B31WoRrMusUQCydwQrUEPlTUZ%2BAhR80FcDRLGhfxHSNHg6cITXdIoa2lJHUWITvxtfpoPsn1itY3iKo44ldkTFQn1rXOdqdEYvTH8CP4UfxBDf2H47VpqFHPFctfoRgPTOHT9Lq1MdRGEAMMCVqURcRQunx8jp%2FqwhU2%2B%2BITQe%2B%2BXDyAr1DqMaV9UMVZRK75fzqhg%2BzCgfmMAQoY7I0LZyzGC4LjKLzj36%2FBuHU5GhRJzN8T5%2B7Iz8PHi%2BDSFBM2nP7EUOYJ37MIrupb8GOqUBJxtdrO8JcxFdXnv%2Bslxh%2FE2iyXdzda2vzsxbc0aSaVbxPrPy%2Bf5W8iWWrx5q%2BPmDmwJKCwdWxFWqgJHu2vGNsOhiwoNAT04%2B251TgTansKbh4rY1FMhm3c3uLf0Fzw%2Bw9lgknia1OSnhpJNlXJ%2FO7nsmSlSQtSvUW%2BVLMqLEkmKs%2FyFV1g4AxcjYlUoIh0xoqAzb8uWw1nVyekkaDD2QJSB%2BuNQi&X-Amz-Signature=3283be800313579477c9681f49e88d33d6cae7b3f8c608b5a6346d3873c5fa47&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625OFQEEW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCNYZItqH%2FlOxussopKF9tGkwwIKw%2B%2BgnEmU%2F924gFoOwIgdeZAtoeJlah%2FnW7Ex%2BOfEGVh%2Faz%2BuVe%2FGelZ0gLNMEoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMpAe8JfaE2w6HQfSrcAwPnL2lCUaFKcYJk63zVZhYTlmtEqzKRLEXSHXYlzkW9JV4d59DIBri0%2BHcUlapy%2FQjlp1VToFSHzrl79j93DWnBkRXk1%2BfXespkU3RDAV1zIzIpkGwneyKpXDEMTv%2BjX9W7bPNbJort1gBwcWF8NCsOpIKFTA0ZIFBElF7s9F715yMQ0EEW3T4pgOl5mFpk%2Fj8XqVGSs%2Fi3U4%2FOXB5M0VZ5cf5kJIMtVFrj8O6%2BLI5qjnBSPZiGka0lk7w5UM%2BZqTaJsWjTHBIkBkhOi%2Fx0GpVyAvRHMzKYwKg%2BpOjtTdYt1kYVl2t%2BLcLuKh70xEss1l5cUDkom7kMYeWCgpSduIXtlrhkBox78GlkxbKafmLNjt0FqZ%2B31WoRrMusUQCydwQrUEPlTUZ%2BAhR80FcDRLGhfxHSNHg6cITXdIoa2lJHUWITvxtfpoPsn1itY3iKo44ldkTFQn1rXOdqdEYvTH8CP4UfxBDf2H47VpqFHPFctfoRgPTOHT9Lq1MdRGEAMMCVqURcRQunx8jp%2FqwhU2%2B%2BITQe%2B%2BXDyAr1DqMaV9UMVZRK75fzqhg%2BzCgfmMAQoY7I0LZyzGC4LjKLzj36%2FBuHU5GhRJzN8T5%2B7Iz8PHi%2BDSFBM2nP7EUOYJ37MIrupb8GOqUBJxtdrO8JcxFdXnv%2Bslxh%2FE2iyXdzda2vzsxbc0aSaVbxPrPy%2Bf5W8iWWrx5q%2BPmDmwJKCwdWxFWqgJHu2vGNsOhiwoNAT04%2B251TgTansKbh4rY1FMhm3c3uLf0Fzw%2Bw9lgknia1OSnhpJNlXJ%2FO7nsmSlSQtSvUW%2BVLMqLEkmKs%2FyFV1g4AxcjYlUoIh0xoqAzb8uWw1nVyekkaDD2QJSB%2BuNQi&X-Amz-Signature=dd8116d13dfccfd68c9763267903a53e0ec8991f82aaddf5c4c18a6f683b52a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625OFQEEW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCNYZItqH%2FlOxussopKF9tGkwwIKw%2B%2BgnEmU%2F924gFoOwIgdeZAtoeJlah%2FnW7Ex%2BOfEGVh%2Faz%2BuVe%2FGelZ0gLNMEoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMpAe8JfaE2w6HQfSrcAwPnL2lCUaFKcYJk63zVZhYTlmtEqzKRLEXSHXYlzkW9JV4d59DIBri0%2BHcUlapy%2FQjlp1VToFSHzrl79j93DWnBkRXk1%2BfXespkU3RDAV1zIzIpkGwneyKpXDEMTv%2BjX9W7bPNbJort1gBwcWF8NCsOpIKFTA0ZIFBElF7s9F715yMQ0EEW3T4pgOl5mFpk%2Fj8XqVGSs%2Fi3U4%2FOXB5M0VZ5cf5kJIMtVFrj8O6%2BLI5qjnBSPZiGka0lk7w5UM%2BZqTaJsWjTHBIkBkhOi%2Fx0GpVyAvRHMzKYwKg%2BpOjtTdYt1kYVl2t%2BLcLuKh70xEss1l5cUDkom7kMYeWCgpSduIXtlrhkBox78GlkxbKafmLNjt0FqZ%2B31WoRrMusUQCydwQrUEPlTUZ%2BAhR80FcDRLGhfxHSNHg6cITXdIoa2lJHUWITvxtfpoPsn1itY3iKo44ldkTFQn1rXOdqdEYvTH8CP4UfxBDf2H47VpqFHPFctfoRgPTOHT9Lq1MdRGEAMMCVqURcRQunx8jp%2FqwhU2%2B%2BITQe%2B%2BXDyAr1DqMaV9UMVZRK75fzqhg%2BzCgfmMAQoY7I0LZyzGC4LjKLzj36%2FBuHU5GhRJzN8T5%2B7Iz8PHi%2BDSFBM2nP7EUOYJ37MIrupb8GOqUBJxtdrO8JcxFdXnv%2Bslxh%2FE2iyXdzda2vzsxbc0aSaVbxPrPy%2Bf5W8iWWrx5q%2BPmDmwJKCwdWxFWqgJHu2vGNsOhiwoNAT04%2B251TgTansKbh4rY1FMhm3c3uLf0Fzw%2Bw9lgknia1OSnhpJNlXJ%2FO7nsmSlSQtSvUW%2BVLMqLEkmKs%2FyFV1g4AxcjYlUoIh0xoqAzb8uWw1nVyekkaDD2QJSB%2BuNQi&X-Amz-Signature=5bc9f8eae28e75d7087e0976fce7ee5257c9a389d625d732b0b1210b8a4007ce&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
