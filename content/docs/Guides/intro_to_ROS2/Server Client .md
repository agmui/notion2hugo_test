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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3KGV2MY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhE3I3%2BQbBp0Jw9JUEhervcO2clmBstgVdXc0GhoY7rAiEAlMqpTWPr25GYjFLvcEEorLwBiAfNlZDi07VypaAlXJYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFejf8b0hMZRM8WQUyrcAx%2BjDAhfQAyh4SRPideM76H%2BOQbxk8QS2%2Bg805VYtOFEy2TSp6j0ebAIsAIGOX9yymN4iz8by3YD84ts1VbHsbMcS113a09xzSRkR51AAozWfXz95Vt6PPIk48uJHpuLYhHBs5sDrRXCXGtll6cYqUhRh6Ly80W8cXsT31v2hkVgjBwx6P9ABNNzIsSIZP%2BgXGn1W%2Bs40ziNM4K7SHqe%2Bz3%2B%2B1uaF5mpRZx5GkWpfZVmXGaY48f3gRe9GkSY%2FA14dSBu26WjXR9fm18iy6YrQKBwq%2BC8Xql7qtXmPlxzPZjZ%2FwL80ZHgXobQc53lTcUcgeEFE3RLRzfumP%2FY9x4FvjK3huvb9nqbnA%2FlfUGpL3ecZ%2BrE4bonaMk9WOjflqFK5hwRYQlcjJAiCB3JB4C5prZac8tyW%2BwMeNxNhkkZ%2B1YSyud6p8dq%2BcAAzZ595li3eaYRjroT7aQmwaQAyAG9dCR64BHO9%2F0RDyukPe0LmdSV22nvQG9HB0eQ9WZm4qApjaECYCdtnyFzzHY8ZnKicgvBHMBL6%2FUceoGK8ilrs%2B2q7sN7JHbpGL69Iepw5sU8tbDti%2FfL6ozOPovE8eQbVQBQbHWN6b%2FEOg%2FayJ3fBFrjsmiMLngwEAVojMEPMMbZzMMGOqUBU9D3F7cDww%2FIDb6DyQgA4CA41WADjokQJYKtsATASq1P1pGKI8iWnSbD6I4szsTc4B2d2gHPh4Pz%2FCklh075KDRJ5gXUFspWu1FQgEfhEkLmtGrMLQaW30UoOhKA3OslJfzKBaZ%2Bkvwg8Rm7qIHIVsz5bgFlLHdtst33uZvbvv4V%2Fb9ioy3YwPGgooAsCQ%2BfK5TBBQdsa0B6v4Jq2km%2FnJqGz5as&X-Amz-Signature=400a7b6dc40ba06032b9c7150e9f874d43dc7f01c051108b214cb6b22bdd2b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3KGV2MY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhE3I3%2BQbBp0Jw9JUEhervcO2clmBstgVdXc0GhoY7rAiEAlMqpTWPr25GYjFLvcEEorLwBiAfNlZDi07VypaAlXJYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFejf8b0hMZRM8WQUyrcAx%2BjDAhfQAyh4SRPideM76H%2BOQbxk8QS2%2Bg805VYtOFEy2TSp6j0ebAIsAIGOX9yymN4iz8by3YD84ts1VbHsbMcS113a09xzSRkR51AAozWfXz95Vt6PPIk48uJHpuLYhHBs5sDrRXCXGtll6cYqUhRh6Ly80W8cXsT31v2hkVgjBwx6P9ABNNzIsSIZP%2BgXGn1W%2Bs40ziNM4K7SHqe%2Bz3%2B%2B1uaF5mpRZx5GkWpfZVmXGaY48f3gRe9GkSY%2FA14dSBu26WjXR9fm18iy6YrQKBwq%2BC8Xql7qtXmPlxzPZjZ%2FwL80ZHgXobQc53lTcUcgeEFE3RLRzfumP%2FY9x4FvjK3huvb9nqbnA%2FlfUGpL3ecZ%2BrE4bonaMk9WOjflqFK5hwRYQlcjJAiCB3JB4C5prZac8tyW%2BwMeNxNhkkZ%2B1YSyud6p8dq%2BcAAzZ595li3eaYRjroT7aQmwaQAyAG9dCR64BHO9%2F0RDyukPe0LmdSV22nvQG9HB0eQ9WZm4qApjaECYCdtnyFzzHY8ZnKicgvBHMBL6%2FUceoGK8ilrs%2B2q7sN7JHbpGL69Iepw5sU8tbDti%2FfL6ozOPovE8eQbVQBQbHWN6b%2FEOg%2FayJ3fBFrjsmiMLngwEAVojMEPMMbZzMMGOqUBU9D3F7cDww%2FIDb6DyQgA4CA41WADjokQJYKtsATASq1P1pGKI8iWnSbD6I4szsTc4B2d2gHPh4Pz%2FCklh075KDRJ5gXUFspWu1FQgEfhEkLmtGrMLQaW30UoOhKA3OslJfzKBaZ%2Bkvwg8Rm7qIHIVsz5bgFlLHdtst33uZvbvv4V%2Fb9ioy3YwPGgooAsCQ%2BfK5TBBQdsa0B6v4Jq2km%2FnJqGz5as&X-Amz-Signature=554ef18ffb36629a4c995b9ed30122c4d8f9a525085740033babda80da24f436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3KGV2MY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhE3I3%2BQbBp0Jw9JUEhervcO2clmBstgVdXc0GhoY7rAiEAlMqpTWPr25GYjFLvcEEorLwBiAfNlZDi07VypaAlXJYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFejf8b0hMZRM8WQUyrcAx%2BjDAhfQAyh4SRPideM76H%2BOQbxk8QS2%2Bg805VYtOFEy2TSp6j0ebAIsAIGOX9yymN4iz8by3YD84ts1VbHsbMcS113a09xzSRkR51AAozWfXz95Vt6PPIk48uJHpuLYhHBs5sDrRXCXGtll6cYqUhRh6Ly80W8cXsT31v2hkVgjBwx6P9ABNNzIsSIZP%2BgXGn1W%2Bs40ziNM4K7SHqe%2Bz3%2B%2B1uaF5mpRZx5GkWpfZVmXGaY48f3gRe9GkSY%2FA14dSBu26WjXR9fm18iy6YrQKBwq%2BC8Xql7qtXmPlxzPZjZ%2FwL80ZHgXobQc53lTcUcgeEFE3RLRzfumP%2FY9x4FvjK3huvb9nqbnA%2FlfUGpL3ecZ%2BrE4bonaMk9WOjflqFK5hwRYQlcjJAiCB3JB4C5prZac8tyW%2BwMeNxNhkkZ%2B1YSyud6p8dq%2BcAAzZ595li3eaYRjroT7aQmwaQAyAG9dCR64BHO9%2F0RDyukPe0LmdSV22nvQG9HB0eQ9WZm4qApjaECYCdtnyFzzHY8ZnKicgvBHMBL6%2FUceoGK8ilrs%2B2q7sN7JHbpGL69Iepw5sU8tbDti%2FfL6ozOPovE8eQbVQBQbHWN6b%2FEOg%2FayJ3fBFrjsmiMLngwEAVojMEPMMbZzMMGOqUBU9D3F7cDww%2FIDb6DyQgA4CA41WADjokQJYKtsATASq1P1pGKI8iWnSbD6I4szsTc4B2d2gHPh4Pz%2FCklh075KDRJ5gXUFspWu1FQgEfhEkLmtGrMLQaW30UoOhKA3OslJfzKBaZ%2Bkvwg8Rm7qIHIVsz5bgFlLHdtst33uZvbvv4V%2Fb9ioy3YwPGgooAsCQ%2BfK5TBBQdsa0B6v4Jq2km%2FnJqGz5as&X-Amz-Signature=6bceaffb99b96566d6bb2dec28ee265ad4e27a9d8e8f7eab4eae04646422b70f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3KGV2MY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhE3I3%2BQbBp0Jw9JUEhervcO2clmBstgVdXc0GhoY7rAiEAlMqpTWPr25GYjFLvcEEorLwBiAfNlZDi07VypaAlXJYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFejf8b0hMZRM8WQUyrcAx%2BjDAhfQAyh4SRPideM76H%2BOQbxk8QS2%2Bg805VYtOFEy2TSp6j0ebAIsAIGOX9yymN4iz8by3YD84ts1VbHsbMcS113a09xzSRkR51AAozWfXz95Vt6PPIk48uJHpuLYhHBs5sDrRXCXGtll6cYqUhRh6Ly80W8cXsT31v2hkVgjBwx6P9ABNNzIsSIZP%2BgXGn1W%2Bs40ziNM4K7SHqe%2Bz3%2B%2B1uaF5mpRZx5GkWpfZVmXGaY48f3gRe9GkSY%2FA14dSBu26WjXR9fm18iy6YrQKBwq%2BC8Xql7qtXmPlxzPZjZ%2FwL80ZHgXobQc53lTcUcgeEFE3RLRzfumP%2FY9x4FvjK3huvb9nqbnA%2FlfUGpL3ecZ%2BrE4bonaMk9WOjflqFK5hwRYQlcjJAiCB3JB4C5prZac8tyW%2BwMeNxNhkkZ%2B1YSyud6p8dq%2BcAAzZ595li3eaYRjroT7aQmwaQAyAG9dCR64BHO9%2F0RDyukPe0LmdSV22nvQG9HB0eQ9WZm4qApjaECYCdtnyFzzHY8ZnKicgvBHMBL6%2FUceoGK8ilrs%2B2q7sN7JHbpGL69Iepw5sU8tbDti%2FfL6ozOPovE8eQbVQBQbHWN6b%2FEOg%2FayJ3fBFrjsmiMLngwEAVojMEPMMbZzMMGOqUBU9D3F7cDww%2FIDb6DyQgA4CA41WADjokQJYKtsATASq1P1pGKI8iWnSbD6I4szsTc4B2d2gHPh4Pz%2FCklh075KDRJ5gXUFspWu1FQgEfhEkLmtGrMLQaW30UoOhKA3OslJfzKBaZ%2Bkvwg8Rm7qIHIVsz5bgFlLHdtst33uZvbvv4V%2Fb9ioy3YwPGgooAsCQ%2BfK5TBBQdsa0B6v4Jq2km%2FnJqGz5as&X-Amz-Signature=e2d641c5c31c2600641f9777eed30eca894bad2e01ab7e2a204a966ebb3dae7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3KGV2MY%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhE3I3%2BQbBp0Jw9JUEhervcO2clmBstgVdXc0GhoY7rAiEAlMqpTWPr25GYjFLvcEEorLwBiAfNlZDi07VypaAlXJYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFejf8b0hMZRM8WQUyrcAx%2BjDAhfQAyh4SRPideM76H%2BOQbxk8QS2%2Bg805VYtOFEy2TSp6j0ebAIsAIGOX9yymN4iz8by3YD84ts1VbHsbMcS113a09xzSRkR51AAozWfXz95Vt6PPIk48uJHpuLYhHBs5sDrRXCXGtll6cYqUhRh6Ly80W8cXsT31v2hkVgjBwx6P9ABNNzIsSIZP%2BgXGn1W%2Bs40ziNM4K7SHqe%2Bz3%2B%2B1uaF5mpRZx5GkWpfZVmXGaY48f3gRe9GkSY%2FA14dSBu26WjXR9fm18iy6YrQKBwq%2BC8Xql7qtXmPlxzPZjZ%2FwL80ZHgXobQc53lTcUcgeEFE3RLRzfumP%2FY9x4FvjK3huvb9nqbnA%2FlfUGpL3ecZ%2BrE4bonaMk9WOjflqFK5hwRYQlcjJAiCB3JB4C5prZac8tyW%2BwMeNxNhkkZ%2B1YSyud6p8dq%2BcAAzZ595li3eaYRjroT7aQmwaQAyAG9dCR64BHO9%2F0RDyukPe0LmdSV22nvQG9HB0eQ9WZm4qApjaECYCdtnyFzzHY8ZnKicgvBHMBL6%2FUceoGK8ilrs%2B2q7sN7JHbpGL69Iepw5sU8tbDti%2FfL6ozOPovE8eQbVQBQbHWN6b%2FEOg%2FayJ3fBFrjsmiMLngwEAVojMEPMMbZzMMGOqUBU9D3F7cDww%2FIDb6DyQgA4CA41WADjokQJYKtsATASq1P1pGKI8iWnSbD6I4szsTc4B2d2gHPh4Pz%2FCklh075KDRJ5gXUFspWu1FQgEfhEkLmtGrMLQaW30UoOhKA3OslJfzKBaZ%2Bkvwg8Rm7qIHIVsz5bgFlLHdtst33uZvbvv4V%2Fb9ioy3YwPGgooAsCQ%2BfK5TBBQdsa0B6v4Jq2km%2FnJqGz5as&X-Amz-Signature=837f3f49bc25ad9be6e9b1d822af34bf7f2b44b794dfe7873500e1a11f26ed54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
