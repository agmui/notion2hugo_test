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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46ACPY3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPxVHe3wlxKi9qyFXljfaBe8CVRfqauqFG15OUOiXKdAiEA%2BG679qw0vF24XCWi105c12CPKa6twRPXpshnYfoti3wqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bl%2BOeQiZ%2Bw9sUIDircAxtxRNOAklELEYsk3kM6zl2lQfvBxH08Pyb5eQQSGcbgOQ9RmejBLZPJNPNzJ1uhT49GeGnb5xR8tlcfRXHMBG7Lnb7Bp7MSBzrTukwtf89cNK8QmehTWikpMhTedPqc3m5%2F1Pb2lD8P2vtOTq1rX8s6siDoaKj9lFFuwWb%2BN3VM1qtu7yqDtPhQWJHWh063NmULAVdZWb3ePB%2B2Kni2m4wwtN1MpUy4yWbPxg9sIt7UEYfgbUZOLSrNkTYgUB6bxZoazFgLRMhVDxhQHGX2sTFL4nREe8r0ZWbqf4A11UT76dh7R6nWzo%2Bq%2F%2F%2F1B0N%2FsqGfGe3HjV4QNnf5%2Bh0D%2BPhYDUacNpUU9WFpPS%2BnBTrAREdAZvpnWqEgHOD2khM9yshmyzUya4fqXEopcU0zL4hc%2BjXZ7dQCd0NfJjXGNrjNo2iHOnDE9M3Z8haaZwnzHsLSJy9dnjsI8xP0o209Us%2FGacjEGy3W4vrAao3thHI6sW4nC7cmh1XI9By0S4D1Q4HI3CPCCXXVrejNsLo0XwQVwmQlGauDE%2BbA4mp893HgVizt9Knn1%2FLDP89Kb%2BomAio6nc0dSPN3KUCDJ1aDFSneGqVE0cvjR3cxPyRr7a1C%2FhNenzmxacoPgzRbMMfK87wGOqUBppbX%2F76e4cInr%2Bym%2BKpUJOIRRw9g0mpuFYi1Lo40ejwwsGqLfVQe3mSdnQLDpJdmsCkZHWT%2BszqyHg1FPa4drJYtYvhD%2BaTGzSFlXrI%2BKbnA5ly1lDXb%2FVwB3hdNZ8UEGdr52IkAaAeKTjie1Q2Qx0lug5Bgmjox98WGnmQBCGlJkggiHHoUSIFq%2Fi9sRKKeeYwH7%2BZFrYFRXycxEjHh3wTZTdom&X-Amz-Signature=492adcaf20aa16ceb819ed7bda38c15c2d53803631a06514d04f96f3146021de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46ACPY3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPxVHe3wlxKi9qyFXljfaBe8CVRfqauqFG15OUOiXKdAiEA%2BG679qw0vF24XCWi105c12CPKa6twRPXpshnYfoti3wqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bl%2BOeQiZ%2Bw9sUIDircAxtxRNOAklELEYsk3kM6zl2lQfvBxH08Pyb5eQQSGcbgOQ9RmejBLZPJNPNzJ1uhT49GeGnb5xR8tlcfRXHMBG7Lnb7Bp7MSBzrTukwtf89cNK8QmehTWikpMhTedPqc3m5%2F1Pb2lD8P2vtOTq1rX8s6siDoaKj9lFFuwWb%2BN3VM1qtu7yqDtPhQWJHWh063NmULAVdZWb3ePB%2B2Kni2m4wwtN1MpUy4yWbPxg9sIt7UEYfgbUZOLSrNkTYgUB6bxZoazFgLRMhVDxhQHGX2sTFL4nREe8r0ZWbqf4A11UT76dh7R6nWzo%2Bq%2F%2F%2F1B0N%2FsqGfGe3HjV4QNnf5%2Bh0D%2BPhYDUacNpUU9WFpPS%2BnBTrAREdAZvpnWqEgHOD2khM9yshmyzUya4fqXEopcU0zL4hc%2BjXZ7dQCd0NfJjXGNrjNo2iHOnDE9M3Z8haaZwnzHsLSJy9dnjsI8xP0o209Us%2FGacjEGy3W4vrAao3thHI6sW4nC7cmh1XI9By0S4D1Q4HI3CPCCXXVrejNsLo0XwQVwmQlGauDE%2BbA4mp893HgVizt9Knn1%2FLDP89Kb%2BomAio6nc0dSPN3KUCDJ1aDFSneGqVE0cvjR3cxPyRr7a1C%2FhNenzmxacoPgzRbMMfK87wGOqUBppbX%2F76e4cInr%2Bym%2BKpUJOIRRw9g0mpuFYi1Lo40ejwwsGqLfVQe3mSdnQLDpJdmsCkZHWT%2BszqyHg1FPa4drJYtYvhD%2BaTGzSFlXrI%2BKbnA5ly1lDXb%2FVwB3hdNZ8UEGdr52IkAaAeKTjie1Q2Qx0lug5Bgmjox98WGnmQBCGlJkggiHHoUSIFq%2Fi9sRKKeeYwH7%2BZFrYFRXycxEjHh3wTZTdom&X-Amz-Signature=b83b48c8839af4780406ada28ab34f1e4c1d0cab53e311f557fdc9ecfd731ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46ACPY3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPxVHe3wlxKi9qyFXljfaBe8CVRfqauqFG15OUOiXKdAiEA%2BG679qw0vF24XCWi105c12CPKa6twRPXpshnYfoti3wqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bl%2BOeQiZ%2Bw9sUIDircAxtxRNOAklELEYsk3kM6zl2lQfvBxH08Pyb5eQQSGcbgOQ9RmejBLZPJNPNzJ1uhT49GeGnb5xR8tlcfRXHMBG7Lnb7Bp7MSBzrTukwtf89cNK8QmehTWikpMhTedPqc3m5%2F1Pb2lD8P2vtOTq1rX8s6siDoaKj9lFFuwWb%2BN3VM1qtu7yqDtPhQWJHWh063NmULAVdZWb3ePB%2B2Kni2m4wwtN1MpUy4yWbPxg9sIt7UEYfgbUZOLSrNkTYgUB6bxZoazFgLRMhVDxhQHGX2sTFL4nREe8r0ZWbqf4A11UT76dh7R6nWzo%2Bq%2F%2F%2F1B0N%2FsqGfGe3HjV4QNnf5%2Bh0D%2BPhYDUacNpUU9WFpPS%2BnBTrAREdAZvpnWqEgHOD2khM9yshmyzUya4fqXEopcU0zL4hc%2BjXZ7dQCd0NfJjXGNrjNo2iHOnDE9M3Z8haaZwnzHsLSJy9dnjsI8xP0o209Us%2FGacjEGy3W4vrAao3thHI6sW4nC7cmh1XI9By0S4D1Q4HI3CPCCXXVrejNsLo0XwQVwmQlGauDE%2BbA4mp893HgVizt9Knn1%2FLDP89Kb%2BomAio6nc0dSPN3KUCDJ1aDFSneGqVE0cvjR3cxPyRr7a1C%2FhNenzmxacoPgzRbMMfK87wGOqUBppbX%2F76e4cInr%2Bym%2BKpUJOIRRw9g0mpuFYi1Lo40ejwwsGqLfVQe3mSdnQLDpJdmsCkZHWT%2BszqyHg1FPa4drJYtYvhD%2BaTGzSFlXrI%2BKbnA5ly1lDXb%2FVwB3hdNZ8UEGdr52IkAaAeKTjie1Q2Qx0lug5Bgmjox98WGnmQBCGlJkggiHHoUSIFq%2Fi9sRKKeeYwH7%2BZFrYFRXycxEjHh3wTZTdom&X-Amz-Signature=6dbe0055e053d0f88e62a208eacc6d76054cd3fbef30119035c531a148bd0fda&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46ACPY3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPxVHe3wlxKi9qyFXljfaBe8CVRfqauqFG15OUOiXKdAiEA%2BG679qw0vF24XCWi105c12CPKa6twRPXpshnYfoti3wqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bl%2BOeQiZ%2Bw9sUIDircAxtxRNOAklELEYsk3kM6zl2lQfvBxH08Pyb5eQQSGcbgOQ9RmejBLZPJNPNzJ1uhT49GeGnb5xR8tlcfRXHMBG7Lnb7Bp7MSBzrTukwtf89cNK8QmehTWikpMhTedPqc3m5%2F1Pb2lD8P2vtOTq1rX8s6siDoaKj9lFFuwWb%2BN3VM1qtu7yqDtPhQWJHWh063NmULAVdZWb3ePB%2B2Kni2m4wwtN1MpUy4yWbPxg9sIt7UEYfgbUZOLSrNkTYgUB6bxZoazFgLRMhVDxhQHGX2sTFL4nREe8r0ZWbqf4A11UT76dh7R6nWzo%2Bq%2F%2F%2F1B0N%2FsqGfGe3HjV4QNnf5%2Bh0D%2BPhYDUacNpUU9WFpPS%2BnBTrAREdAZvpnWqEgHOD2khM9yshmyzUya4fqXEopcU0zL4hc%2BjXZ7dQCd0NfJjXGNrjNo2iHOnDE9M3Z8haaZwnzHsLSJy9dnjsI8xP0o209Us%2FGacjEGy3W4vrAao3thHI6sW4nC7cmh1XI9By0S4D1Q4HI3CPCCXXVrejNsLo0XwQVwmQlGauDE%2BbA4mp893HgVizt9Knn1%2FLDP89Kb%2BomAio6nc0dSPN3KUCDJ1aDFSneGqVE0cvjR3cxPyRr7a1C%2FhNenzmxacoPgzRbMMfK87wGOqUBppbX%2F76e4cInr%2Bym%2BKpUJOIRRw9g0mpuFYi1Lo40ejwwsGqLfVQe3mSdnQLDpJdmsCkZHWT%2BszqyHg1FPa4drJYtYvhD%2BaTGzSFlXrI%2BKbnA5ly1lDXb%2FVwB3hdNZ8UEGdr52IkAaAeKTjie1Q2Qx0lug5Bgmjox98WGnmQBCGlJkggiHHoUSIFq%2Fi9sRKKeeYwH7%2BZFrYFRXycxEjHh3wTZTdom&X-Amz-Signature=b7b8cd14ee6f1a238cc0242928e3b43fa2b989f89458a8d8e1983dddabb88c87&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46ACPY3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPxVHe3wlxKi9qyFXljfaBe8CVRfqauqFG15OUOiXKdAiEA%2BG679qw0vF24XCWi105c12CPKa6twRPXpshnYfoti3wqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2Bl%2BOeQiZ%2Bw9sUIDircAxtxRNOAklELEYsk3kM6zl2lQfvBxH08Pyb5eQQSGcbgOQ9RmejBLZPJNPNzJ1uhT49GeGnb5xR8tlcfRXHMBG7Lnb7Bp7MSBzrTukwtf89cNK8QmehTWikpMhTedPqc3m5%2F1Pb2lD8P2vtOTq1rX8s6siDoaKj9lFFuwWb%2BN3VM1qtu7yqDtPhQWJHWh063NmULAVdZWb3ePB%2B2Kni2m4wwtN1MpUy4yWbPxg9sIt7UEYfgbUZOLSrNkTYgUB6bxZoazFgLRMhVDxhQHGX2sTFL4nREe8r0ZWbqf4A11UT76dh7R6nWzo%2Bq%2F%2F%2F1B0N%2FsqGfGe3HjV4QNnf5%2Bh0D%2BPhYDUacNpUU9WFpPS%2BnBTrAREdAZvpnWqEgHOD2khM9yshmyzUya4fqXEopcU0zL4hc%2BjXZ7dQCd0NfJjXGNrjNo2iHOnDE9M3Z8haaZwnzHsLSJy9dnjsI8xP0o209Us%2FGacjEGy3W4vrAao3thHI6sW4nC7cmh1XI9By0S4D1Q4HI3CPCCXXVrejNsLo0XwQVwmQlGauDE%2BbA4mp893HgVizt9Knn1%2FLDP89Kb%2BomAio6nc0dSPN3KUCDJ1aDFSneGqVE0cvjR3cxPyRr7a1C%2FhNenzmxacoPgzRbMMfK87wGOqUBppbX%2F76e4cInr%2Bym%2BKpUJOIRRw9g0mpuFYi1Lo40ejwwsGqLfVQe3mSdnQLDpJdmsCkZHWT%2BszqyHg1FPa4drJYtYvhD%2BaTGzSFlXrI%2BKbnA5ly1lDXb%2FVwB3hdNZ8UEGdr52IkAaAeKTjie1Q2Qx0lug5Bgmjox98WGnmQBCGlJkggiHHoUSIFq%2Fi9sRKKeeYwH7%2BZFrYFRXycxEjHh3wTZTdom&X-Amz-Signature=c73814c3a766f7ed37058068ff626bcbdb67f0f4cbb4f64b3c7e748b5862af5e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
