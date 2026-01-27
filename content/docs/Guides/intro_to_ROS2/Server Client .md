---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TJYWXHN%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC30meSt%2B9%2BkcvgFwUr%2B%2BwenJfUtwJMEWiq9s2i4Rw%2BDwIgAl3I3t9eRQnB8k41KeSZNpxRH9iLIWB6HJWEd0f07Vgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMOGOtJLB64FRqzvIyrcAxEgYvijuT7tKaYuLaTnLS4ZRkanHHknKy3fSnnOYF8Cpd5fR0CgF9kv356ea7IVbz4k3BvoxZKl5AJZnN6HDvR1s2RrXDiMI1rOkAMYXrw4YSsDl%2Bzby6p%2B8gFfdBmI9lNP9wnTRCwJYFopT3hMMQb8tVty4RPYgvxFAR0M2lRN71lI%2FsP3IsRbnqwEefobDlm359LYlk3OX4ZtYPjx6hZXtnOm8LFTXh%2BJ40uOLi3vdiEVIDkT4lXl3KeYN6w0bHkCHrPNDzAmK%2B4LfSfk4mpIaSE9vciqE23OLTdWYhiIeflhSbGK8OIE5FnqZ1dyKIngyjXgUPs16Dp6rAJDEvhT3qGrOyQV6PuKCRirWy%2F2hq6tVDHVmzUYImSTSUSYsJixFa8KIR68R6aQLYuGD5ALn7PY3wu4UIjHQD8%2B4faj46mDzFDyhWMBrSf%2F4ZlsGXEW9Hq3LFEgbGLuD2t7Bqk8134T1JqguuNZTYXCbNSukPkHQy1pOuL82PJaofig96BbOLRegdyLexkcBd2METhzBmroT79AUf6G4Zc1MVTn%2BrWCKfl%2FQvkh41l8Kdjwgs8awfE7L1XNpnxw6dfShjA%2FgAECikXijE9DCdtkvwoiPppb7DfkeeEefh2OMLiz4MsGOqUByncWc2zgotKO9hnK6CqgkKJEBlBkj8wu4ueyp5IRpIaWwsGcezD2H%2BBvuTSxjPwqVG7CI6bd0bakExx7rCdrB%2FPsXA5pJ54ImJx7lBf4XqAc0vZGYVAN2NHQGCTysXF1lSbtyPx%2FS3Fvs%2B9Re8l9n%2FJBzkBwgWUifcHB75IoaSOsP6Z4PfFkxaL3cHo5gcmA0MMm3UW%2Bl8RHutDTaoNNcXygjSIG&X-Amz-Signature=edb3dab4e1eb1ec25e9d680d81dff8e36f891644c969740835d375177b7e2404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TJYWXHN%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC30meSt%2B9%2BkcvgFwUr%2B%2BwenJfUtwJMEWiq9s2i4Rw%2BDwIgAl3I3t9eRQnB8k41KeSZNpxRH9iLIWB6HJWEd0f07Vgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMOGOtJLB64FRqzvIyrcAxEgYvijuT7tKaYuLaTnLS4ZRkanHHknKy3fSnnOYF8Cpd5fR0CgF9kv356ea7IVbz4k3BvoxZKl5AJZnN6HDvR1s2RrXDiMI1rOkAMYXrw4YSsDl%2Bzby6p%2B8gFfdBmI9lNP9wnTRCwJYFopT3hMMQb8tVty4RPYgvxFAR0M2lRN71lI%2FsP3IsRbnqwEefobDlm359LYlk3OX4ZtYPjx6hZXtnOm8LFTXh%2BJ40uOLi3vdiEVIDkT4lXl3KeYN6w0bHkCHrPNDzAmK%2B4LfSfk4mpIaSE9vciqE23OLTdWYhiIeflhSbGK8OIE5FnqZ1dyKIngyjXgUPs16Dp6rAJDEvhT3qGrOyQV6PuKCRirWy%2F2hq6tVDHVmzUYImSTSUSYsJixFa8KIR68R6aQLYuGD5ALn7PY3wu4UIjHQD8%2B4faj46mDzFDyhWMBrSf%2F4ZlsGXEW9Hq3LFEgbGLuD2t7Bqk8134T1JqguuNZTYXCbNSukPkHQy1pOuL82PJaofig96BbOLRegdyLexkcBd2METhzBmroT79AUf6G4Zc1MVTn%2BrWCKfl%2FQvkh41l8Kdjwgs8awfE7L1XNpnxw6dfShjA%2FgAECikXijE9DCdtkvwoiPppb7DfkeeEefh2OMLiz4MsGOqUByncWc2zgotKO9hnK6CqgkKJEBlBkj8wu4ueyp5IRpIaWwsGcezD2H%2BBvuTSxjPwqVG7CI6bd0bakExx7rCdrB%2FPsXA5pJ54ImJx7lBf4XqAc0vZGYVAN2NHQGCTysXF1lSbtyPx%2FS3Fvs%2B9Re8l9n%2FJBzkBwgWUifcHB75IoaSOsP6Z4PfFkxaL3cHo5gcmA0MMm3UW%2Bl8RHutDTaoNNcXygjSIG&X-Amz-Signature=1657ddb0628dfab4062605fb5da0b9ce239b1b31d1973267408d6e9f73e53b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TJYWXHN%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC30meSt%2B9%2BkcvgFwUr%2B%2BwenJfUtwJMEWiq9s2i4Rw%2BDwIgAl3I3t9eRQnB8k41KeSZNpxRH9iLIWB6HJWEd0f07Vgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMOGOtJLB64FRqzvIyrcAxEgYvijuT7tKaYuLaTnLS4ZRkanHHknKy3fSnnOYF8Cpd5fR0CgF9kv356ea7IVbz4k3BvoxZKl5AJZnN6HDvR1s2RrXDiMI1rOkAMYXrw4YSsDl%2Bzby6p%2B8gFfdBmI9lNP9wnTRCwJYFopT3hMMQb8tVty4RPYgvxFAR0M2lRN71lI%2FsP3IsRbnqwEefobDlm359LYlk3OX4ZtYPjx6hZXtnOm8LFTXh%2BJ40uOLi3vdiEVIDkT4lXl3KeYN6w0bHkCHrPNDzAmK%2B4LfSfk4mpIaSE9vciqE23OLTdWYhiIeflhSbGK8OIE5FnqZ1dyKIngyjXgUPs16Dp6rAJDEvhT3qGrOyQV6PuKCRirWy%2F2hq6tVDHVmzUYImSTSUSYsJixFa8KIR68R6aQLYuGD5ALn7PY3wu4UIjHQD8%2B4faj46mDzFDyhWMBrSf%2F4ZlsGXEW9Hq3LFEgbGLuD2t7Bqk8134T1JqguuNZTYXCbNSukPkHQy1pOuL82PJaofig96BbOLRegdyLexkcBd2METhzBmroT79AUf6G4Zc1MVTn%2BrWCKfl%2FQvkh41l8Kdjwgs8awfE7L1XNpnxw6dfShjA%2FgAECikXijE9DCdtkvwoiPppb7DfkeeEefh2OMLiz4MsGOqUByncWc2zgotKO9hnK6CqgkKJEBlBkj8wu4ueyp5IRpIaWwsGcezD2H%2BBvuTSxjPwqVG7CI6bd0bakExx7rCdrB%2FPsXA5pJ54ImJx7lBf4XqAc0vZGYVAN2NHQGCTysXF1lSbtyPx%2FS3Fvs%2B9Re8l9n%2FJBzkBwgWUifcHB75IoaSOsP6Z4PfFkxaL3cHo5gcmA0MMm3UW%2Bl8RHutDTaoNNcXygjSIG&X-Amz-Signature=17dd4f07344ebb4b92c2246d53b7a39e77c50cdf9b21b3b2d2658a9f9da63b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TJYWXHN%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC30meSt%2B9%2BkcvgFwUr%2B%2BwenJfUtwJMEWiq9s2i4Rw%2BDwIgAl3I3t9eRQnB8k41KeSZNpxRH9iLIWB6HJWEd0f07Vgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMOGOtJLB64FRqzvIyrcAxEgYvijuT7tKaYuLaTnLS4ZRkanHHknKy3fSnnOYF8Cpd5fR0CgF9kv356ea7IVbz4k3BvoxZKl5AJZnN6HDvR1s2RrXDiMI1rOkAMYXrw4YSsDl%2Bzby6p%2B8gFfdBmI9lNP9wnTRCwJYFopT3hMMQb8tVty4RPYgvxFAR0M2lRN71lI%2FsP3IsRbnqwEefobDlm359LYlk3OX4ZtYPjx6hZXtnOm8LFTXh%2BJ40uOLi3vdiEVIDkT4lXl3KeYN6w0bHkCHrPNDzAmK%2B4LfSfk4mpIaSE9vciqE23OLTdWYhiIeflhSbGK8OIE5FnqZ1dyKIngyjXgUPs16Dp6rAJDEvhT3qGrOyQV6PuKCRirWy%2F2hq6tVDHVmzUYImSTSUSYsJixFa8KIR68R6aQLYuGD5ALn7PY3wu4UIjHQD8%2B4faj46mDzFDyhWMBrSf%2F4ZlsGXEW9Hq3LFEgbGLuD2t7Bqk8134T1JqguuNZTYXCbNSukPkHQy1pOuL82PJaofig96BbOLRegdyLexkcBd2METhzBmroT79AUf6G4Zc1MVTn%2BrWCKfl%2FQvkh41l8Kdjwgs8awfE7L1XNpnxw6dfShjA%2FgAECikXijE9DCdtkvwoiPppb7DfkeeEefh2OMLiz4MsGOqUByncWc2zgotKO9hnK6CqgkKJEBlBkj8wu4ueyp5IRpIaWwsGcezD2H%2BBvuTSxjPwqVG7CI6bd0bakExx7rCdrB%2FPsXA5pJ54ImJx7lBf4XqAc0vZGYVAN2NHQGCTysXF1lSbtyPx%2FS3Fvs%2B9Re8l9n%2FJBzkBwgWUifcHB75IoaSOsP6Z4PfFkxaL3cHo5gcmA0MMm3UW%2Bl8RHutDTaoNNcXygjSIG&X-Amz-Signature=1ff390b4871ff467f5eedee1a85cd9ae21d2954aab7d83db9e2bbf7d79fe50be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TJYWXHN%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC30meSt%2B9%2BkcvgFwUr%2B%2BwenJfUtwJMEWiq9s2i4Rw%2BDwIgAl3I3t9eRQnB8k41KeSZNpxRH9iLIWB6HJWEd0f07Vgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMOGOtJLB64FRqzvIyrcAxEgYvijuT7tKaYuLaTnLS4ZRkanHHknKy3fSnnOYF8Cpd5fR0CgF9kv356ea7IVbz4k3BvoxZKl5AJZnN6HDvR1s2RrXDiMI1rOkAMYXrw4YSsDl%2Bzby6p%2B8gFfdBmI9lNP9wnTRCwJYFopT3hMMQb8tVty4RPYgvxFAR0M2lRN71lI%2FsP3IsRbnqwEefobDlm359LYlk3OX4ZtYPjx6hZXtnOm8LFTXh%2BJ40uOLi3vdiEVIDkT4lXl3KeYN6w0bHkCHrPNDzAmK%2B4LfSfk4mpIaSE9vciqE23OLTdWYhiIeflhSbGK8OIE5FnqZ1dyKIngyjXgUPs16Dp6rAJDEvhT3qGrOyQV6PuKCRirWy%2F2hq6tVDHVmzUYImSTSUSYsJixFa8KIR68R6aQLYuGD5ALn7PY3wu4UIjHQD8%2B4faj46mDzFDyhWMBrSf%2F4ZlsGXEW9Hq3LFEgbGLuD2t7Bqk8134T1JqguuNZTYXCbNSukPkHQy1pOuL82PJaofig96BbOLRegdyLexkcBd2METhzBmroT79AUf6G4Zc1MVTn%2BrWCKfl%2FQvkh41l8Kdjwgs8awfE7L1XNpnxw6dfShjA%2FgAECikXijE9DCdtkvwoiPppb7DfkeeEefh2OMLiz4MsGOqUByncWc2zgotKO9hnK6CqgkKJEBlBkj8wu4ueyp5IRpIaWwsGcezD2H%2BBvuTSxjPwqVG7CI6bd0bakExx7rCdrB%2FPsXA5pJ54ImJx7lBf4XqAc0vZGYVAN2NHQGCTysXF1lSbtyPx%2FS3Fvs%2B9Re8l9n%2FJBzkBwgWUifcHB75IoaSOsP6Z4PfFkxaL3cHo5gcmA0MMm3UW%2Bl8RHutDTaoNNcXygjSIG&X-Amz-Signature=790e69ec657ce5bdbe53f7033d97f22a43300cb4117cde28b416895fa21c5b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
