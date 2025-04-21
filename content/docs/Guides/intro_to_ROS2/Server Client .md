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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAV5LP2B%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC8IO5%2B7KpnhzRL3C5HRwbUZmR42KHlu8%2Fk4WTDVNnaDwIhAKKE4p26gYyIetWkRW%2BTXEFrnOp1a04CrUVi669yHe8BKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWm1u%2FKUZkLewyghsq3APaoPE1ajJfqu5lySTWz4raynZcZ7C56hKgA%2BtlPbB1qHyC9i%2Fwj76N7Uix3g1Y4FPX2mnXh841W0mWYugvMrMOrX%2BVnvSkg9JYfbWRBrkvmDWbeRSN5inM%2BImaqRUs9dON%2FhTXoQwwI2rS%2B%2B9OOzvwa%2FYrIOTJrIZ2FiLhUQYAtjRFSFrZ01yZMdz5Ja%2BEiPPKmUoqGW%2BK%2FsssbUO97WUMpuF6%2Fm0YSPW0%2F6sIk9tqVPopi4N%2BjXZLDeGgzB%2BMEjnuBYg2yt58l7mVqkYtHe2ncmwsxku7dQSzgKfknwOw6AW1UUeCw8SH3brALeI931cGGU6%2FMMCivl3QKmPHBUjdn1bWpFNtENGSsT%2BQ8boCW4o08U4RVsH%2FPoAAmvUctLwsAgZ9qEFcq7%2FlQVEHrS9uvsWYwwmk2GcCImCGTK8cfRPYdTGs0lwyvUu92k%2B8wyaNClNIRlKxXchocRlhJSCUmZEnQ8ZdeVDjtKKn49rD0oY5HfJVA2vYgJyuOskDtJ4OC1GhqdA88Zkhv2T2oIGFwKWEK6BeHUHSO40U2Z9cBggxlt74x1qh5T8vE%2FqzKP3VI601g5jXET5j1ynqGQtSQCsjBZSv421wQb6REaoOJeXv3Qov6Jj2eLlHWDCY%2BpbABjqkAW4gGy8ENmHPhcE7pD6isYHk0Un%2FocIczz2rFAbFny%2FEFjlmYntu3CGvfQ%2FjonGuFLKTvsAzElnCPXJgCckwd0RKgG67mGsreFZpnK21QTLnhtUd2QR01hOyeG0XRII5e1NPIdcvinTwVMB7AILhxYah3PKyR44c5ExXtcI93Q5KkWqHLcuAILRQdCClB8ulofJGKLwKwlPXkLQvxa8%2FkuRVswq%2B&X-Amz-Signature=d631c1edeb9932195d894b061f08908fac396d61bddd3735c023b9645bcaeda3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAV5LP2B%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC8IO5%2B7KpnhzRL3C5HRwbUZmR42KHlu8%2Fk4WTDVNnaDwIhAKKE4p26gYyIetWkRW%2BTXEFrnOp1a04CrUVi669yHe8BKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWm1u%2FKUZkLewyghsq3APaoPE1ajJfqu5lySTWz4raynZcZ7C56hKgA%2BtlPbB1qHyC9i%2Fwj76N7Uix3g1Y4FPX2mnXh841W0mWYugvMrMOrX%2BVnvSkg9JYfbWRBrkvmDWbeRSN5inM%2BImaqRUs9dON%2FhTXoQwwI2rS%2B%2B9OOzvwa%2FYrIOTJrIZ2FiLhUQYAtjRFSFrZ01yZMdz5Ja%2BEiPPKmUoqGW%2BK%2FsssbUO97WUMpuF6%2Fm0YSPW0%2F6sIk9tqVPopi4N%2BjXZLDeGgzB%2BMEjnuBYg2yt58l7mVqkYtHe2ncmwsxku7dQSzgKfknwOw6AW1UUeCw8SH3brALeI931cGGU6%2FMMCivl3QKmPHBUjdn1bWpFNtENGSsT%2BQ8boCW4o08U4RVsH%2FPoAAmvUctLwsAgZ9qEFcq7%2FlQVEHrS9uvsWYwwmk2GcCImCGTK8cfRPYdTGs0lwyvUu92k%2B8wyaNClNIRlKxXchocRlhJSCUmZEnQ8ZdeVDjtKKn49rD0oY5HfJVA2vYgJyuOskDtJ4OC1GhqdA88Zkhv2T2oIGFwKWEK6BeHUHSO40U2Z9cBggxlt74x1qh5T8vE%2FqzKP3VI601g5jXET5j1ynqGQtSQCsjBZSv421wQb6REaoOJeXv3Qov6Jj2eLlHWDCY%2BpbABjqkAW4gGy8ENmHPhcE7pD6isYHk0Un%2FocIczz2rFAbFny%2FEFjlmYntu3CGvfQ%2FjonGuFLKTvsAzElnCPXJgCckwd0RKgG67mGsreFZpnK21QTLnhtUd2QR01hOyeG0XRII5e1NPIdcvinTwVMB7AILhxYah3PKyR44c5ExXtcI93Q5KkWqHLcuAILRQdCClB8ulofJGKLwKwlPXkLQvxa8%2FkuRVswq%2B&X-Amz-Signature=4ec9a71385b4df272c0eabdc32526128eab8559edd23aa8c8a9cb0c5835c9083&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAV5LP2B%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC8IO5%2B7KpnhzRL3C5HRwbUZmR42KHlu8%2Fk4WTDVNnaDwIhAKKE4p26gYyIetWkRW%2BTXEFrnOp1a04CrUVi669yHe8BKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWm1u%2FKUZkLewyghsq3APaoPE1ajJfqu5lySTWz4raynZcZ7C56hKgA%2BtlPbB1qHyC9i%2Fwj76N7Uix3g1Y4FPX2mnXh841W0mWYugvMrMOrX%2BVnvSkg9JYfbWRBrkvmDWbeRSN5inM%2BImaqRUs9dON%2FhTXoQwwI2rS%2B%2B9OOzvwa%2FYrIOTJrIZ2FiLhUQYAtjRFSFrZ01yZMdz5Ja%2BEiPPKmUoqGW%2BK%2FsssbUO97WUMpuF6%2Fm0YSPW0%2F6sIk9tqVPopi4N%2BjXZLDeGgzB%2BMEjnuBYg2yt58l7mVqkYtHe2ncmwsxku7dQSzgKfknwOw6AW1UUeCw8SH3brALeI931cGGU6%2FMMCivl3QKmPHBUjdn1bWpFNtENGSsT%2BQ8boCW4o08U4RVsH%2FPoAAmvUctLwsAgZ9qEFcq7%2FlQVEHrS9uvsWYwwmk2GcCImCGTK8cfRPYdTGs0lwyvUu92k%2B8wyaNClNIRlKxXchocRlhJSCUmZEnQ8ZdeVDjtKKn49rD0oY5HfJVA2vYgJyuOskDtJ4OC1GhqdA88Zkhv2T2oIGFwKWEK6BeHUHSO40U2Z9cBggxlt74x1qh5T8vE%2FqzKP3VI601g5jXET5j1ynqGQtSQCsjBZSv421wQb6REaoOJeXv3Qov6Jj2eLlHWDCY%2BpbABjqkAW4gGy8ENmHPhcE7pD6isYHk0Un%2FocIczz2rFAbFny%2FEFjlmYntu3CGvfQ%2FjonGuFLKTvsAzElnCPXJgCckwd0RKgG67mGsreFZpnK21QTLnhtUd2QR01hOyeG0XRII5e1NPIdcvinTwVMB7AILhxYah3PKyR44c5ExXtcI93Q5KkWqHLcuAILRQdCClB8ulofJGKLwKwlPXkLQvxa8%2FkuRVswq%2B&X-Amz-Signature=c5c97db856dc9d5b82af98e05a78263896855ddbe065281edde7e575ea4079bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAV5LP2B%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC8IO5%2B7KpnhzRL3C5HRwbUZmR42KHlu8%2Fk4WTDVNnaDwIhAKKE4p26gYyIetWkRW%2BTXEFrnOp1a04CrUVi669yHe8BKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWm1u%2FKUZkLewyghsq3APaoPE1ajJfqu5lySTWz4raynZcZ7C56hKgA%2BtlPbB1qHyC9i%2Fwj76N7Uix3g1Y4FPX2mnXh841W0mWYugvMrMOrX%2BVnvSkg9JYfbWRBrkvmDWbeRSN5inM%2BImaqRUs9dON%2FhTXoQwwI2rS%2B%2B9OOzvwa%2FYrIOTJrIZ2FiLhUQYAtjRFSFrZ01yZMdz5Ja%2BEiPPKmUoqGW%2BK%2FsssbUO97WUMpuF6%2Fm0YSPW0%2F6sIk9tqVPopi4N%2BjXZLDeGgzB%2BMEjnuBYg2yt58l7mVqkYtHe2ncmwsxku7dQSzgKfknwOw6AW1UUeCw8SH3brALeI931cGGU6%2FMMCivl3QKmPHBUjdn1bWpFNtENGSsT%2BQ8boCW4o08U4RVsH%2FPoAAmvUctLwsAgZ9qEFcq7%2FlQVEHrS9uvsWYwwmk2GcCImCGTK8cfRPYdTGs0lwyvUu92k%2B8wyaNClNIRlKxXchocRlhJSCUmZEnQ8ZdeVDjtKKn49rD0oY5HfJVA2vYgJyuOskDtJ4OC1GhqdA88Zkhv2T2oIGFwKWEK6BeHUHSO40U2Z9cBggxlt74x1qh5T8vE%2FqzKP3VI601g5jXET5j1ynqGQtSQCsjBZSv421wQb6REaoOJeXv3Qov6Jj2eLlHWDCY%2BpbABjqkAW4gGy8ENmHPhcE7pD6isYHk0Un%2FocIczz2rFAbFny%2FEFjlmYntu3CGvfQ%2FjonGuFLKTvsAzElnCPXJgCckwd0RKgG67mGsreFZpnK21QTLnhtUd2QR01hOyeG0XRII5e1NPIdcvinTwVMB7AILhxYah3PKyR44c5ExXtcI93Q5KkWqHLcuAILRQdCClB8ulofJGKLwKwlPXkLQvxa8%2FkuRVswq%2B&X-Amz-Signature=2b4f69d844793777a6a33d1b50f9f70f5d6a29e66b751a812628d30fbaf6584e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAV5LP2B%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC8IO5%2B7KpnhzRL3C5HRwbUZmR42KHlu8%2Fk4WTDVNnaDwIhAKKE4p26gYyIetWkRW%2BTXEFrnOp1a04CrUVi669yHe8BKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWm1u%2FKUZkLewyghsq3APaoPE1ajJfqu5lySTWz4raynZcZ7C56hKgA%2BtlPbB1qHyC9i%2Fwj76N7Uix3g1Y4FPX2mnXh841W0mWYugvMrMOrX%2BVnvSkg9JYfbWRBrkvmDWbeRSN5inM%2BImaqRUs9dON%2FhTXoQwwI2rS%2B%2B9OOzvwa%2FYrIOTJrIZ2FiLhUQYAtjRFSFrZ01yZMdz5Ja%2BEiPPKmUoqGW%2BK%2FsssbUO97WUMpuF6%2Fm0YSPW0%2F6sIk9tqVPopi4N%2BjXZLDeGgzB%2BMEjnuBYg2yt58l7mVqkYtHe2ncmwsxku7dQSzgKfknwOw6AW1UUeCw8SH3brALeI931cGGU6%2FMMCivl3QKmPHBUjdn1bWpFNtENGSsT%2BQ8boCW4o08U4RVsH%2FPoAAmvUctLwsAgZ9qEFcq7%2FlQVEHrS9uvsWYwwmk2GcCImCGTK8cfRPYdTGs0lwyvUu92k%2B8wyaNClNIRlKxXchocRlhJSCUmZEnQ8ZdeVDjtKKn49rD0oY5HfJVA2vYgJyuOskDtJ4OC1GhqdA88Zkhv2T2oIGFwKWEK6BeHUHSO40U2Z9cBggxlt74x1qh5T8vE%2FqzKP3VI601g5jXET5j1ynqGQtSQCsjBZSv421wQb6REaoOJeXv3Qov6Jj2eLlHWDCY%2BpbABjqkAW4gGy8ENmHPhcE7pD6isYHk0Un%2FocIczz2rFAbFny%2FEFjlmYntu3CGvfQ%2FjonGuFLKTvsAzElnCPXJgCckwd0RKgG67mGsreFZpnK21QTLnhtUd2QR01hOyeG0XRII5e1NPIdcvinTwVMB7AILhxYah3PKyR44c5ExXtcI93Q5KkWqHLcuAILRQdCClB8ulofJGKLwKwlPXkLQvxa8%2FkuRVswq%2B&X-Amz-Signature=b3ca694305f1e95734ac93d4a49be099c00f3e876f55c84688ed2a003f51bc26&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
