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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V6J5UQZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDrzmRqxS0%2FbPAPT%2FhHce0qyvRWrh7S72NdVxiK6bBO6AiAxEC17cjUz5Va9G7r8h1czi1JX9%2BvVOHs8OBivDkW9PSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM1pfIAEkwtqZl5ksTKtwDjXSfBJ7tWLnp7aitMa1QBHnWVME5aJou%2F9%2FlKUA4%2FiVl6iFjBCvdA722mieJEnfaH62uDdQhJjTirK9NbHniS4T7gZayEVcH64F6iR7NYPYzOvQ36WHksrEZgFFlvEGphFhGQhHhmoCy6XY%2BYt6mguW%2BUn6KZJbt4nuLJLPh4A%2BG0dfWjjeG3IsY60C%2F9NKCstM6s9paagZxjge50BEHh7iULcascXgtpVIjeKBYDAWDeGw42WbmtypxWtQAFIASwFHSxHG%2BrUgzarcTDlOX1JUsmAIrvkf%2FM8zsk36NqGAT4bMaQigxRstlrtQIVXDcoMepof66jPC%2Fqs3dMkM65rW8Ch1GrbTS7qNrsFHdnlFT32iyNLhzKM46v%2B7gXmwOW584gkhmk1Cre17Yl15P0qJaqGXXrrhGeWIqauIG3vfHymbvlmM5KfRzCyG0vrg%2BeyKyRj4LL%2F%2FNFKywjvPPVr6PoMz4Z00KqAD2nDfXg6ZPMmaRTFnJSXyFrsCmO4CfWo2CWk9cgn5UTy35h3fmXL0l%2FUEawKQpYXZ9sVsyqcdfGMivj%2BhHMSR4uxHBCOPZWGhgIBrxJc%2FZgKKvtrp3XnqZGPxeADtxPbfsAZx46nhTop59NvtpO5Hcey0w%2FfL0wgY6pgHNn2M%2BeIRtW3HX4xPOBndSzRnHBTqcQ4PA8m5AgqB9Wz%2B%2FqmYLHvU%2F6OJnRs6Movea5qmkor5yZjig2LnZKrNU7QgIq5pAvpAGElAl%2FIfnz0L0Q6XWWS3OIExmG4pxX%2FT2Fv7qcg%2FVzTGIrYsrenGRAw81ElbFHCVMGSx4H6dQkxFVtvhIiAClxXiT3lDGrfr0tYMj%2FlQxs0uWzB72FaCcqyl3zUAk&X-Amz-Signature=0eead700f07b65813fd3da8a7fd9142bc42d99b093b5de3a37588e0b0942de2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V6J5UQZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDrzmRqxS0%2FbPAPT%2FhHce0qyvRWrh7S72NdVxiK6bBO6AiAxEC17cjUz5Va9G7r8h1czi1JX9%2BvVOHs8OBivDkW9PSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM1pfIAEkwtqZl5ksTKtwDjXSfBJ7tWLnp7aitMa1QBHnWVME5aJou%2F9%2FlKUA4%2FiVl6iFjBCvdA722mieJEnfaH62uDdQhJjTirK9NbHniS4T7gZayEVcH64F6iR7NYPYzOvQ36WHksrEZgFFlvEGphFhGQhHhmoCy6XY%2BYt6mguW%2BUn6KZJbt4nuLJLPh4A%2BG0dfWjjeG3IsY60C%2F9NKCstM6s9paagZxjge50BEHh7iULcascXgtpVIjeKBYDAWDeGw42WbmtypxWtQAFIASwFHSxHG%2BrUgzarcTDlOX1JUsmAIrvkf%2FM8zsk36NqGAT4bMaQigxRstlrtQIVXDcoMepof66jPC%2Fqs3dMkM65rW8Ch1GrbTS7qNrsFHdnlFT32iyNLhzKM46v%2B7gXmwOW584gkhmk1Cre17Yl15P0qJaqGXXrrhGeWIqauIG3vfHymbvlmM5KfRzCyG0vrg%2BeyKyRj4LL%2F%2FNFKywjvPPVr6PoMz4Z00KqAD2nDfXg6ZPMmaRTFnJSXyFrsCmO4CfWo2CWk9cgn5UTy35h3fmXL0l%2FUEawKQpYXZ9sVsyqcdfGMivj%2BhHMSR4uxHBCOPZWGhgIBrxJc%2FZgKKvtrp3XnqZGPxeADtxPbfsAZx46nhTop59NvtpO5Hcey0w%2FfL0wgY6pgHNn2M%2BeIRtW3HX4xPOBndSzRnHBTqcQ4PA8m5AgqB9Wz%2B%2FqmYLHvU%2F6OJnRs6Movea5qmkor5yZjig2LnZKrNU7QgIq5pAvpAGElAl%2FIfnz0L0Q6XWWS3OIExmG4pxX%2FT2Fv7qcg%2FVzTGIrYsrenGRAw81ElbFHCVMGSx4H6dQkxFVtvhIiAClxXiT3lDGrfr0tYMj%2FlQxs0uWzB72FaCcqyl3zUAk&X-Amz-Signature=505126fd2b718cc3d3c2085140e24a83180711f28315aee1c5915ceb736a4802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V6J5UQZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDrzmRqxS0%2FbPAPT%2FhHce0qyvRWrh7S72NdVxiK6bBO6AiAxEC17cjUz5Va9G7r8h1czi1JX9%2BvVOHs8OBivDkW9PSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM1pfIAEkwtqZl5ksTKtwDjXSfBJ7tWLnp7aitMa1QBHnWVME5aJou%2F9%2FlKUA4%2FiVl6iFjBCvdA722mieJEnfaH62uDdQhJjTirK9NbHniS4T7gZayEVcH64F6iR7NYPYzOvQ36WHksrEZgFFlvEGphFhGQhHhmoCy6XY%2BYt6mguW%2BUn6KZJbt4nuLJLPh4A%2BG0dfWjjeG3IsY60C%2F9NKCstM6s9paagZxjge50BEHh7iULcascXgtpVIjeKBYDAWDeGw42WbmtypxWtQAFIASwFHSxHG%2BrUgzarcTDlOX1JUsmAIrvkf%2FM8zsk36NqGAT4bMaQigxRstlrtQIVXDcoMepof66jPC%2Fqs3dMkM65rW8Ch1GrbTS7qNrsFHdnlFT32iyNLhzKM46v%2B7gXmwOW584gkhmk1Cre17Yl15P0qJaqGXXrrhGeWIqauIG3vfHymbvlmM5KfRzCyG0vrg%2BeyKyRj4LL%2F%2FNFKywjvPPVr6PoMz4Z00KqAD2nDfXg6ZPMmaRTFnJSXyFrsCmO4CfWo2CWk9cgn5UTy35h3fmXL0l%2FUEawKQpYXZ9sVsyqcdfGMivj%2BhHMSR4uxHBCOPZWGhgIBrxJc%2FZgKKvtrp3XnqZGPxeADtxPbfsAZx46nhTop59NvtpO5Hcey0w%2FfL0wgY6pgHNn2M%2BeIRtW3HX4xPOBndSzRnHBTqcQ4PA8m5AgqB9Wz%2B%2FqmYLHvU%2F6OJnRs6Movea5qmkor5yZjig2LnZKrNU7QgIq5pAvpAGElAl%2FIfnz0L0Q6XWWS3OIExmG4pxX%2FT2Fv7qcg%2FVzTGIrYsrenGRAw81ElbFHCVMGSx4H6dQkxFVtvhIiAClxXiT3lDGrfr0tYMj%2FlQxs0uWzB72FaCcqyl3zUAk&X-Amz-Signature=fb713281d3fe4b71046bdf6952b0b9c03bea0e742792348948e646446b0c41bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V6J5UQZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDrzmRqxS0%2FbPAPT%2FhHce0qyvRWrh7S72NdVxiK6bBO6AiAxEC17cjUz5Va9G7r8h1czi1JX9%2BvVOHs8OBivDkW9PSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM1pfIAEkwtqZl5ksTKtwDjXSfBJ7tWLnp7aitMa1QBHnWVME5aJou%2F9%2FlKUA4%2FiVl6iFjBCvdA722mieJEnfaH62uDdQhJjTirK9NbHniS4T7gZayEVcH64F6iR7NYPYzOvQ36WHksrEZgFFlvEGphFhGQhHhmoCy6XY%2BYt6mguW%2BUn6KZJbt4nuLJLPh4A%2BG0dfWjjeG3IsY60C%2F9NKCstM6s9paagZxjge50BEHh7iULcascXgtpVIjeKBYDAWDeGw42WbmtypxWtQAFIASwFHSxHG%2BrUgzarcTDlOX1JUsmAIrvkf%2FM8zsk36NqGAT4bMaQigxRstlrtQIVXDcoMepof66jPC%2Fqs3dMkM65rW8Ch1GrbTS7qNrsFHdnlFT32iyNLhzKM46v%2B7gXmwOW584gkhmk1Cre17Yl15P0qJaqGXXrrhGeWIqauIG3vfHymbvlmM5KfRzCyG0vrg%2BeyKyRj4LL%2F%2FNFKywjvPPVr6PoMz4Z00KqAD2nDfXg6ZPMmaRTFnJSXyFrsCmO4CfWo2CWk9cgn5UTy35h3fmXL0l%2FUEawKQpYXZ9sVsyqcdfGMivj%2BhHMSR4uxHBCOPZWGhgIBrxJc%2FZgKKvtrp3XnqZGPxeADtxPbfsAZx46nhTop59NvtpO5Hcey0w%2FfL0wgY6pgHNn2M%2BeIRtW3HX4xPOBndSzRnHBTqcQ4PA8m5AgqB9Wz%2B%2FqmYLHvU%2F6OJnRs6Movea5qmkor5yZjig2LnZKrNU7QgIq5pAvpAGElAl%2FIfnz0L0Q6XWWS3OIExmG4pxX%2FT2Fv7qcg%2FVzTGIrYsrenGRAw81ElbFHCVMGSx4H6dQkxFVtvhIiAClxXiT3lDGrfr0tYMj%2FlQxs0uWzB72FaCcqyl3zUAk&X-Amz-Signature=b222a65fa35e12e6d3c16e4b7c627b4223f0fc4c8040e84eb2cc1ad9c24a6fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V6J5UQZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDrzmRqxS0%2FbPAPT%2FhHce0qyvRWrh7S72NdVxiK6bBO6AiAxEC17cjUz5Va9G7r8h1czi1JX9%2BvVOHs8OBivDkW9PSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM1pfIAEkwtqZl5ksTKtwDjXSfBJ7tWLnp7aitMa1QBHnWVME5aJou%2F9%2FlKUA4%2FiVl6iFjBCvdA722mieJEnfaH62uDdQhJjTirK9NbHniS4T7gZayEVcH64F6iR7NYPYzOvQ36WHksrEZgFFlvEGphFhGQhHhmoCy6XY%2BYt6mguW%2BUn6KZJbt4nuLJLPh4A%2BG0dfWjjeG3IsY60C%2F9NKCstM6s9paagZxjge50BEHh7iULcascXgtpVIjeKBYDAWDeGw42WbmtypxWtQAFIASwFHSxHG%2BrUgzarcTDlOX1JUsmAIrvkf%2FM8zsk36NqGAT4bMaQigxRstlrtQIVXDcoMepof66jPC%2Fqs3dMkM65rW8Ch1GrbTS7qNrsFHdnlFT32iyNLhzKM46v%2B7gXmwOW584gkhmk1Cre17Yl15P0qJaqGXXrrhGeWIqauIG3vfHymbvlmM5KfRzCyG0vrg%2BeyKyRj4LL%2F%2FNFKywjvPPVr6PoMz4Z00KqAD2nDfXg6ZPMmaRTFnJSXyFrsCmO4CfWo2CWk9cgn5UTy35h3fmXL0l%2FUEawKQpYXZ9sVsyqcdfGMivj%2BhHMSR4uxHBCOPZWGhgIBrxJc%2FZgKKvtrp3XnqZGPxeADtxPbfsAZx46nhTop59NvtpO5Hcey0w%2FfL0wgY6pgHNn2M%2BeIRtW3HX4xPOBndSzRnHBTqcQ4PA8m5AgqB9Wz%2B%2FqmYLHvU%2F6OJnRs6Movea5qmkor5yZjig2LnZKrNU7QgIq5pAvpAGElAl%2FIfnz0L0Q6XWWS3OIExmG4pxX%2FT2Fv7qcg%2FVzTGIrYsrenGRAw81ElbFHCVMGSx4H6dQkxFVtvhIiAClxXiT3lDGrfr0tYMj%2FlQxs0uWzB72FaCcqyl3zUAk&X-Amz-Signature=73f3b581b4888c797d0183ce5765f82b8ad5f2be624e789043f9514ab86d4ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
