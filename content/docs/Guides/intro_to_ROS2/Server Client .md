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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WNIFFYB%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGT%2FAaZia1hY%2FRhMyPW1kn0zAd2pJ5cATg8YZcaD3HDoAiEApLhoh2o9Y7LYHnpaKSmb3qe%2FqYehxoE2pEPl0qNf6FwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9Kfiuv5LFq5PFB7CrcA6uOWLKaGRQOZo%2BXgUrod6nzuwVcLzsIOAbCgzaPogY2T6xf5Urv9X5nCMI6YRSNCwG2MGkqrg%2BTwAjX%2FDqATgT1%2BLs58qi0yvTkgrlVbNOPbLVySwSNdcMpxFNWTUhrRvuj6ZNZBE7OmPVa%2F2Mob22Avt%2F1a70RIZoyFwwyjsX9u2Hxxx6BeSzxV3fjRNl13JCPoPgGG9Ph%2F6dLhJQQz8EhFryR2%2F6dBZwh49Nq4tcFnnhvI%2FIVUr7NbZ2zQ1bOeVsrD2599F0IOE7r9cgr7XK5INWbegYDZyi%2BRI38g%2BYypgn%2BXpFcWMJUOw2VaoC07zyS7GLrEkbctyUR3vKV5lDcsyLtRLGllemxnJjWAU4%2Bvpu4HuaJvbRgkDUJChOLbiGWhuHAwkXXfgxrCs48PHIlgoOkgn89wt2MEJJrTvn5JD7JvRpJM05G7BLctEacOlSuOwwoowjcfKIs6zAFLHcxaO0OOir9thCcyxzdVWHmbgPm4yjTQodOdCOITLL3RfBQ%2Frf6gvCawLeU1%2FftGzcI5eOh0Fs%2BJeqLSOgQoVvH4hEFr6jfE9CLuNiPr9tPF1bgti31t1lWf%2BxcJrKyr0ogqRKna1REVVHzpuqUmlS3CQK3%2FATnU3stF1IHMOrUtMMGOqUBXGRSqNGr8EXLdU6aJS9DAwazDMd9xU8QYsGdhAjWc%2FD%2BiGYjqO143l%2BDsRtW2iLQ6CB4gqc6IfZBn2hes2L1sYIoq7sYVZsa9tzKjaic6BsDU1lO9qABERPfhzoJzmRDqxwAln165p9BKpgTiZIWfpSGtTFdmpWn1IL7KfF94wp0StAwST6Z2lCOMylan3VA%2BGUiahv3EVtSiBjvyxHZfH6BWdYX&X-Amz-Signature=06988aa6c1235588fb2fd88e26eeb979ae0759366eaa9f21fa7c15dfc6c18a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WNIFFYB%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGT%2FAaZia1hY%2FRhMyPW1kn0zAd2pJ5cATg8YZcaD3HDoAiEApLhoh2o9Y7LYHnpaKSmb3qe%2FqYehxoE2pEPl0qNf6FwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9Kfiuv5LFq5PFB7CrcA6uOWLKaGRQOZo%2BXgUrod6nzuwVcLzsIOAbCgzaPogY2T6xf5Urv9X5nCMI6YRSNCwG2MGkqrg%2BTwAjX%2FDqATgT1%2BLs58qi0yvTkgrlVbNOPbLVySwSNdcMpxFNWTUhrRvuj6ZNZBE7OmPVa%2F2Mob22Avt%2F1a70RIZoyFwwyjsX9u2Hxxx6BeSzxV3fjRNl13JCPoPgGG9Ph%2F6dLhJQQz8EhFryR2%2F6dBZwh49Nq4tcFnnhvI%2FIVUr7NbZ2zQ1bOeVsrD2599F0IOE7r9cgr7XK5INWbegYDZyi%2BRI38g%2BYypgn%2BXpFcWMJUOw2VaoC07zyS7GLrEkbctyUR3vKV5lDcsyLtRLGllemxnJjWAU4%2Bvpu4HuaJvbRgkDUJChOLbiGWhuHAwkXXfgxrCs48PHIlgoOkgn89wt2MEJJrTvn5JD7JvRpJM05G7BLctEacOlSuOwwoowjcfKIs6zAFLHcxaO0OOir9thCcyxzdVWHmbgPm4yjTQodOdCOITLL3RfBQ%2Frf6gvCawLeU1%2FftGzcI5eOh0Fs%2BJeqLSOgQoVvH4hEFr6jfE9CLuNiPr9tPF1bgti31t1lWf%2BxcJrKyr0ogqRKna1REVVHzpuqUmlS3CQK3%2FATnU3stF1IHMOrUtMMGOqUBXGRSqNGr8EXLdU6aJS9DAwazDMd9xU8QYsGdhAjWc%2FD%2BiGYjqO143l%2BDsRtW2iLQ6CB4gqc6IfZBn2hes2L1sYIoq7sYVZsa9tzKjaic6BsDU1lO9qABERPfhzoJzmRDqxwAln165p9BKpgTiZIWfpSGtTFdmpWn1IL7KfF94wp0StAwST6Z2lCOMylan3VA%2BGUiahv3EVtSiBjvyxHZfH6BWdYX&X-Amz-Signature=bb7f8f334f78b458e2bc3fe32baa0d281bb60f3d13acf4bba3de34c8372471fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WNIFFYB%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGT%2FAaZia1hY%2FRhMyPW1kn0zAd2pJ5cATg8YZcaD3HDoAiEApLhoh2o9Y7LYHnpaKSmb3qe%2FqYehxoE2pEPl0qNf6FwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9Kfiuv5LFq5PFB7CrcA6uOWLKaGRQOZo%2BXgUrod6nzuwVcLzsIOAbCgzaPogY2T6xf5Urv9X5nCMI6YRSNCwG2MGkqrg%2BTwAjX%2FDqATgT1%2BLs58qi0yvTkgrlVbNOPbLVySwSNdcMpxFNWTUhrRvuj6ZNZBE7OmPVa%2F2Mob22Avt%2F1a70RIZoyFwwyjsX9u2Hxxx6BeSzxV3fjRNl13JCPoPgGG9Ph%2F6dLhJQQz8EhFryR2%2F6dBZwh49Nq4tcFnnhvI%2FIVUr7NbZ2zQ1bOeVsrD2599F0IOE7r9cgr7XK5INWbegYDZyi%2BRI38g%2BYypgn%2BXpFcWMJUOw2VaoC07zyS7GLrEkbctyUR3vKV5lDcsyLtRLGllemxnJjWAU4%2Bvpu4HuaJvbRgkDUJChOLbiGWhuHAwkXXfgxrCs48PHIlgoOkgn89wt2MEJJrTvn5JD7JvRpJM05G7BLctEacOlSuOwwoowjcfKIs6zAFLHcxaO0OOir9thCcyxzdVWHmbgPm4yjTQodOdCOITLL3RfBQ%2Frf6gvCawLeU1%2FftGzcI5eOh0Fs%2BJeqLSOgQoVvH4hEFr6jfE9CLuNiPr9tPF1bgti31t1lWf%2BxcJrKyr0ogqRKna1REVVHzpuqUmlS3CQK3%2FATnU3stF1IHMOrUtMMGOqUBXGRSqNGr8EXLdU6aJS9DAwazDMd9xU8QYsGdhAjWc%2FD%2BiGYjqO143l%2BDsRtW2iLQ6CB4gqc6IfZBn2hes2L1sYIoq7sYVZsa9tzKjaic6BsDU1lO9qABERPfhzoJzmRDqxwAln165p9BKpgTiZIWfpSGtTFdmpWn1IL7KfF94wp0StAwST6Z2lCOMylan3VA%2BGUiahv3EVtSiBjvyxHZfH6BWdYX&X-Amz-Signature=146114211f98f3ec8149db2b47fb8e8ab87d400d702ecf628ec238e6349669c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WNIFFYB%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGT%2FAaZia1hY%2FRhMyPW1kn0zAd2pJ5cATg8YZcaD3HDoAiEApLhoh2o9Y7LYHnpaKSmb3qe%2FqYehxoE2pEPl0qNf6FwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9Kfiuv5LFq5PFB7CrcA6uOWLKaGRQOZo%2BXgUrod6nzuwVcLzsIOAbCgzaPogY2T6xf5Urv9X5nCMI6YRSNCwG2MGkqrg%2BTwAjX%2FDqATgT1%2BLs58qi0yvTkgrlVbNOPbLVySwSNdcMpxFNWTUhrRvuj6ZNZBE7OmPVa%2F2Mob22Avt%2F1a70RIZoyFwwyjsX9u2Hxxx6BeSzxV3fjRNl13JCPoPgGG9Ph%2F6dLhJQQz8EhFryR2%2F6dBZwh49Nq4tcFnnhvI%2FIVUr7NbZ2zQ1bOeVsrD2599F0IOE7r9cgr7XK5INWbegYDZyi%2BRI38g%2BYypgn%2BXpFcWMJUOw2VaoC07zyS7GLrEkbctyUR3vKV5lDcsyLtRLGllemxnJjWAU4%2Bvpu4HuaJvbRgkDUJChOLbiGWhuHAwkXXfgxrCs48PHIlgoOkgn89wt2MEJJrTvn5JD7JvRpJM05G7BLctEacOlSuOwwoowjcfKIs6zAFLHcxaO0OOir9thCcyxzdVWHmbgPm4yjTQodOdCOITLL3RfBQ%2Frf6gvCawLeU1%2FftGzcI5eOh0Fs%2BJeqLSOgQoVvH4hEFr6jfE9CLuNiPr9tPF1bgti31t1lWf%2BxcJrKyr0ogqRKna1REVVHzpuqUmlS3CQK3%2FATnU3stF1IHMOrUtMMGOqUBXGRSqNGr8EXLdU6aJS9DAwazDMd9xU8QYsGdhAjWc%2FD%2BiGYjqO143l%2BDsRtW2iLQ6CB4gqc6IfZBn2hes2L1sYIoq7sYVZsa9tzKjaic6BsDU1lO9qABERPfhzoJzmRDqxwAln165p9BKpgTiZIWfpSGtTFdmpWn1IL7KfF94wp0StAwST6Z2lCOMylan3VA%2BGUiahv3EVtSiBjvyxHZfH6BWdYX&X-Amz-Signature=9376e7a6d4f06734dc109c4d42aeb04323e05a56e36361e49ee36cfea6d98adc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WNIFFYB%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGT%2FAaZia1hY%2FRhMyPW1kn0zAd2pJ5cATg8YZcaD3HDoAiEApLhoh2o9Y7LYHnpaKSmb3qe%2FqYehxoE2pEPl0qNf6FwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9Kfiuv5LFq5PFB7CrcA6uOWLKaGRQOZo%2BXgUrod6nzuwVcLzsIOAbCgzaPogY2T6xf5Urv9X5nCMI6YRSNCwG2MGkqrg%2BTwAjX%2FDqATgT1%2BLs58qi0yvTkgrlVbNOPbLVySwSNdcMpxFNWTUhrRvuj6ZNZBE7OmPVa%2F2Mob22Avt%2F1a70RIZoyFwwyjsX9u2Hxxx6BeSzxV3fjRNl13JCPoPgGG9Ph%2F6dLhJQQz8EhFryR2%2F6dBZwh49Nq4tcFnnhvI%2FIVUr7NbZ2zQ1bOeVsrD2599F0IOE7r9cgr7XK5INWbegYDZyi%2BRI38g%2BYypgn%2BXpFcWMJUOw2VaoC07zyS7GLrEkbctyUR3vKV5lDcsyLtRLGllemxnJjWAU4%2Bvpu4HuaJvbRgkDUJChOLbiGWhuHAwkXXfgxrCs48PHIlgoOkgn89wt2MEJJrTvn5JD7JvRpJM05G7BLctEacOlSuOwwoowjcfKIs6zAFLHcxaO0OOir9thCcyxzdVWHmbgPm4yjTQodOdCOITLL3RfBQ%2Frf6gvCawLeU1%2FftGzcI5eOh0Fs%2BJeqLSOgQoVvH4hEFr6jfE9CLuNiPr9tPF1bgti31t1lWf%2BxcJrKyr0ogqRKna1REVVHzpuqUmlS3CQK3%2FATnU3stF1IHMOrUtMMGOqUBXGRSqNGr8EXLdU6aJS9DAwazDMd9xU8QYsGdhAjWc%2FD%2BiGYjqO143l%2BDsRtW2iLQ6CB4gqc6IfZBn2hes2L1sYIoq7sYVZsa9tzKjaic6BsDU1lO9qABERPfhzoJzmRDqxwAln165p9BKpgTiZIWfpSGtTFdmpWn1IL7KfF94wp0StAwST6Z2lCOMylan3VA%2BGUiahv3EVtSiBjvyxHZfH6BWdYX&X-Amz-Signature=3852279dc1c5711fd81741d4a6a38ca6a41cb4b962976c16956d2221f6ab7d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
