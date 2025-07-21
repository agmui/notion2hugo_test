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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SVYDBKT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpQT%2Bzk3o0sSFF64ep7%2BfALBpzA77wyW1LE7xUN8O0bAIhAIhF%2FodtxLC6GOFfq1zM3x2U1fLpHsF39sv55dWvJnEtKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCZetUomh1%2Bm9XDPcq3APFJY2h8Ig6QoJdLJQ6AJ4ArOcNZgzpMlXp6Jf9l7YNYwfiGzOybFaBG7QT%2BVH0bzCRNs4KiYy8LWAqdrpa0JhAJJ2EKfxbD7slMr3k4vHiLWOALLJb24yHxhV%2FPDq2g1XW6svAHaHOtMXCyCVxb6hrphfaGruke2gX83DJVbvtng1qzrVoKbUkXEkQc70WQPDh%2BBDLaq%2BlllRJthVNjo1jxAjl%2FAML4ktA59qsA0PsjFMm1pREFEAPCQ%2BDOVjim2i4EQo0B63ykCB80WLylo1Lxb2V%2F02wxNErkLwrW7g93uS2RmtpweLVQwwu108ZUMEVwRFQRMgcR9aZJ3xlkADxWY4vDwZUnipu%2B2NwbwicY%2FC5L42WjManDl%2F74QiBBxstX4j8F2fGZn83bEHrw9tmOfPWqHF5yXKSP4LDwLmpR6gahIWRWbLNV%2BGOrBBI%2Fn1JEY8KttxNKRUEHDG824E6muhO93COEz0t8CELQTzQf%2BvKYwsuxCpsLHcSfHQuCH40n0%2FpXMFfjCHpV5ZlukxqPov76GR72gP%2BNLf5qvQ6oMUI8of10x7FheHULxhDuW2aU2mO9iKENt7ZWZrc0hzmLpViRlQaxLwPOfKyiMgorlBIaDkYfWFDTcvVajDNk%2FfDBjqkAbXn9hCH2V%2BMzzog%2FpfALQXiHazBKU2i%2BCok9%2B01aNnPomQvGL3cg5WtdwphEFK4rmxXb8hJerouYkTacMj3nvN8kMf8sZSs3FrfIFuZ7MeHXvXsVOy97kYPyEn3oODvhi9X%2FHTSPUWMjK7a2dlx5KhjW%2BIPvz%2BxM0484cx7qicznnNSkH2JOrkAe5eeG0zDjBsTU8Gp5Fb1ZjgqSlQ7Gp%2B0d8R7&X-Amz-Signature=d2435d1cb9f133d7cd2273bb93fbf6c2a913318f998ea43a613ea364c8aee70d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SVYDBKT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpQT%2Bzk3o0sSFF64ep7%2BfALBpzA77wyW1LE7xUN8O0bAIhAIhF%2FodtxLC6GOFfq1zM3x2U1fLpHsF39sv55dWvJnEtKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCZetUomh1%2Bm9XDPcq3APFJY2h8Ig6QoJdLJQ6AJ4ArOcNZgzpMlXp6Jf9l7YNYwfiGzOybFaBG7QT%2BVH0bzCRNs4KiYy8LWAqdrpa0JhAJJ2EKfxbD7slMr3k4vHiLWOALLJb24yHxhV%2FPDq2g1XW6svAHaHOtMXCyCVxb6hrphfaGruke2gX83DJVbvtng1qzrVoKbUkXEkQc70WQPDh%2BBDLaq%2BlllRJthVNjo1jxAjl%2FAML4ktA59qsA0PsjFMm1pREFEAPCQ%2BDOVjim2i4EQo0B63ykCB80WLylo1Lxb2V%2F02wxNErkLwrW7g93uS2RmtpweLVQwwu108ZUMEVwRFQRMgcR9aZJ3xlkADxWY4vDwZUnipu%2B2NwbwicY%2FC5L42WjManDl%2F74QiBBxstX4j8F2fGZn83bEHrw9tmOfPWqHF5yXKSP4LDwLmpR6gahIWRWbLNV%2BGOrBBI%2Fn1JEY8KttxNKRUEHDG824E6muhO93COEz0t8CELQTzQf%2BvKYwsuxCpsLHcSfHQuCH40n0%2FpXMFfjCHpV5ZlukxqPov76GR72gP%2BNLf5qvQ6oMUI8of10x7FheHULxhDuW2aU2mO9iKENt7ZWZrc0hzmLpViRlQaxLwPOfKyiMgorlBIaDkYfWFDTcvVajDNk%2FfDBjqkAbXn9hCH2V%2BMzzog%2FpfALQXiHazBKU2i%2BCok9%2B01aNnPomQvGL3cg5WtdwphEFK4rmxXb8hJerouYkTacMj3nvN8kMf8sZSs3FrfIFuZ7MeHXvXsVOy97kYPyEn3oODvhi9X%2FHTSPUWMjK7a2dlx5KhjW%2BIPvz%2BxM0484cx7qicznnNSkH2JOrkAe5eeG0zDjBsTU8Gp5Fb1ZjgqSlQ7Gp%2B0d8R7&X-Amz-Signature=500c06a9806b41b83b5b402ce13edb5c50c4ddb8c523c779b339466664be315f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SVYDBKT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpQT%2Bzk3o0sSFF64ep7%2BfALBpzA77wyW1LE7xUN8O0bAIhAIhF%2FodtxLC6GOFfq1zM3x2U1fLpHsF39sv55dWvJnEtKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCZetUomh1%2Bm9XDPcq3APFJY2h8Ig6QoJdLJQ6AJ4ArOcNZgzpMlXp6Jf9l7YNYwfiGzOybFaBG7QT%2BVH0bzCRNs4KiYy8LWAqdrpa0JhAJJ2EKfxbD7slMr3k4vHiLWOALLJb24yHxhV%2FPDq2g1XW6svAHaHOtMXCyCVxb6hrphfaGruke2gX83DJVbvtng1qzrVoKbUkXEkQc70WQPDh%2BBDLaq%2BlllRJthVNjo1jxAjl%2FAML4ktA59qsA0PsjFMm1pREFEAPCQ%2BDOVjim2i4EQo0B63ykCB80WLylo1Lxb2V%2F02wxNErkLwrW7g93uS2RmtpweLVQwwu108ZUMEVwRFQRMgcR9aZJ3xlkADxWY4vDwZUnipu%2B2NwbwicY%2FC5L42WjManDl%2F74QiBBxstX4j8F2fGZn83bEHrw9tmOfPWqHF5yXKSP4LDwLmpR6gahIWRWbLNV%2BGOrBBI%2Fn1JEY8KttxNKRUEHDG824E6muhO93COEz0t8CELQTzQf%2BvKYwsuxCpsLHcSfHQuCH40n0%2FpXMFfjCHpV5ZlukxqPov76GR72gP%2BNLf5qvQ6oMUI8of10x7FheHULxhDuW2aU2mO9iKENt7ZWZrc0hzmLpViRlQaxLwPOfKyiMgorlBIaDkYfWFDTcvVajDNk%2FfDBjqkAbXn9hCH2V%2BMzzog%2FpfALQXiHazBKU2i%2BCok9%2B01aNnPomQvGL3cg5WtdwphEFK4rmxXb8hJerouYkTacMj3nvN8kMf8sZSs3FrfIFuZ7MeHXvXsVOy97kYPyEn3oODvhi9X%2FHTSPUWMjK7a2dlx5KhjW%2BIPvz%2BxM0484cx7qicznnNSkH2JOrkAe5eeG0zDjBsTU8Gp5Fb1ZjgqSlQ7Gp%2B0d8R7&X-Amz-Signature=2dbddbf69e0097f89a5ed7b96c367f141d401b67b6afeb21797664fa2e459034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SVYDBKT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpQT%2Bzk3o0sSFF64ep7%2BfALBpzA77wyW1LE7xUN8O0bAIhAIhF%2FodtxLC6GOFfq1zM3x2U1fLpHsF39sv55dWvJnEtKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCZetUomh1%2Bm9XDPcq3APFJY2h8Ig6QoJdLJQ6AJ4ArOcNZgzpMlXp6Jf9l7YNYwfiGzOybFaBG7QT%2BVH0bzCRNs4KiYy8LWAqdrpa0JhAJJ2EKfxbD7slMr3k4vHiLWOALLJb24yHxhV%2FPDq2g1XW6svAHaHOtMXCyCVxb6hrphfaGruke2gX83DJVbvtng1qzrVoKbUkXEkQc70WQPDh%2BBDLaq%2BlllRJthVNjo1jxAjl%2FAML4ktA59qsA0PsjFMm1pREFEAPCQ%2BDOVjim2i4EQo0B63ykCB80WLylo1Lxb2V%2F02wxNErkLwrW7g93uS2RmtpweLVQwwu108ZUMEVwRFQRMgcR9aZJ3xlkADxWY4vDwZUnipu%2B2NwbwicY%2FC5L42WjManDl%2F74QiBBxstX4j8F2fGZn83bEHrw9tmOfPWqHF5yXKSP4LDwLmpR6gahIWRWbLNV%2BGOrBBI%2Fn1JEY8KttxNKRUEHDG824E6muhO93COEz0t8CELQTzQf%2BvKYwsuxCpsLHcSfHQuCH40n0%2FpXMFfjCHpV5ZlukxqPov76GR72gP%2BNLf5qvQ6oMUI8of10x7FheHULxhDuW2aU2mO9iKENt7ZWZrc0hzmLpViRlQaxLwPOfKyiMgorlBIaDkYfWFDTcvVajDNk%2FfDBjqkAbXn9hCH2V%2BMzzog%2FpfALQXiHazBKU2i%2BCok9%2B01aNnPomQvGL3cg5WtdwphEFK4rmxXb8hJerouYkTacMj3nvN8kMf8sZSs3FrfIFuZ7MeHXvXsVOy97kYPyEn3oODvhi9X%2FHTSPUWMjK7a2dlx5KhjW%2BIPvz%2BxM0484cx7qicznnNSkH2JOrkAe5eeG0zDjBsTU8Gp5Fb1ZjgqSlQ7Gp%2B0d8R7&X-Amz-Signature=06882bcd186c55688f7b9b17afdebb1a8ca6b3a3963463ede1b713186e2b30c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SVYDBKT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpQT%2Bzk3o0sSFF64ep7%2BfALBpzA77wyW1LE7xUN8O0bAIhAIhF%2FodtxLC6GOFfq1zM3x2U1fLpHsF39sv55dWvJnEtKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCZetUomh1%2Bm9XDPcq3APFJY2h8Ig6QoJdLJQ6AJ4ArOcNZgzpMlXp6Jf9l7YNYwfiGzOybFaBG7QT%2BVH0bzCRNs4KiYy8LWAqdrpa0JhAJJ2EKfxbD7slMr3k4vHiLWOALLJb24yHxhV%2FPDq2g1XW6svAHaHOtMXCyCVxb6hrphfaGruke2gX83DJVbvtng1qzrVoKbUkXEkQc70WQPDh%2BBDLaq%2BlllRJthVNjo1jxAjl%2FAML4ktA59qsA0PsjFMm1pREFEAPCQ%2BDOVjim2i4EQo0B63ykCB80WLylo1Lxb2V%2F02wxNErkLwrW7g93uS2RmtpweLVQwwu108ZUMEVwRFQRMgcR9aZJ3xlkADxWY4vDwZUnipu%2B2NwbwicY%2FC5L42WjManDl%2F74QiBBxstX4j8F2fGZn83bEHrw9tmOfPWqHF5yXKSP4LDwLmpR6gahIWRWbLNV%2BGOrBBI%2Fn1JEY8KttxNKRUEHDG824E6muhO93COEz0t8CELQTzQf%2BvKYwsuxCpsLHcSfHQuCH40n0%2FpXMFfjCHpV5ZlukxqPov76GR72gP%2BNLf5qvQ6oMUI8of10x7FheHULxhDuW2aU2mO9iKENt7ZWZrc0hzmLpViRlQaxLwPOfKyiMgorlBIaDkYfWFDTcvVajDNk%2FfDBjqkAbXn9hCH2V%2BMzzog%2FpfALQXiHazBKU2i%2BCok9%2B01aNnPomQvGL3cg5WtdwphEFK4rmxXb8hJerouYkTacMj3nvN8kMf8sZSs3FrfIFuZ7MeHXvXsVOy97kYPyEn3oODvhi9X%2FHTSPUWMjK7a2dlx5KhjW%2BIPvz%2BxM0484cx7qicznnNSkH2JOrkAe5eeG0zDjBsTU8Gp5Fb1ZjgqSlQ7Gp%2B0d8R7&X-Amz-Signature=82caf1a478c6020121caab80d3ee2e425c6797b8ee41f1bca41d41039bbdb07b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
