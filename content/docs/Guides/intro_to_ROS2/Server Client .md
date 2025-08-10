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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQC25JNU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK8pMfZMXDoOx7TbrOr3T2XkJVXoU6kk1%2FjcktOVNsHwIhAIsUceU7Fkef049sBvJwu5YeZG8tpe3cxgKMYKa3D7zJKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa%2FOCjqf4j9rMO0pEq3ANdcntLUNO8IWL1yUJ3dxxTl1fxWgj4xC0oeKAkWMw%2FxzmkEk1uD1%2F6qfdnz4ahWzQlN2L%2FiZFRNPQmaCl5aS1uRMz1uSbgYM10LJZ8FBtvgY28YWr10RAKafMSGVPLVckR6v0UbDz%2Fjpaxi4vJ4JTGzL37sPTi9CDk%2BhXAxlKH0Xk9QGyLOkfTHKhfZNaeDb1ioxZWRaIDNIssyIhdvhJlEbh1bPWCCUQQ%2BWxSKV6IR6cVucWAGf8tEsKo5DnlKPH%2Fp8jp7dbEOLXZ4pD57vPq5%2FvX%2B97LhqvkuBCjuJI1FMwJd2EOC5ZMWZBNWNYURWHCLtMNWEossgmBTTLPrAWDXF3UmVsWmgxsAvKu0J64OG%2Byy2FWC%2Fhzt2yiGVAnWpEgnc6yi%2Bm5SYewpN6e06omtQS%2BmJq6W8Tgj8B%2F0S3XWcHSYOw8RAjO1GtsHL1g1zlQ0zq4Qb5Sk%2Bp%2FB%2B4PwTIL4IjaYYS2t2jukVHY2q2Fjv6NlRGvvyu4YD1KWc2B8Vn5FsW2Vj3i5O70m7OBXO88VLL8bpRy%2F4R7q4LsCfiuLL2OuyJ8fxQQ4CdoylVgYQ%2B3DI6CvRX6AaUhHWnQvdmOl9iLqks4kbdFDBhLSjyiK3hvUdDdE5cx1tDQIjCost%2FEBjqkAfRp3sneqS9qOPtXkzuJJ5KWkA7uJQWBofLGdQoGDGUnpblk2ZD8yiQAYrI0X4qCST1Kqp5EzkVhl4JweDDcIe4e1nxBslPnYL6TR7KBPfM59IUK5NFlVEPMyUsjkzLm2pEy1ndJOMHveBGrUJVaeHiM4Xc8Jd%2FC6b3%2FTp5jT5Xrjo7NTkMuZ97y0EkC5OiipFp34KGY6gG2YBQFRw8UfBDcdFTm&X-Amz-Signature=0e17248e462370b5285ea5b569fbd83e7de0a933e81bba197140c4a9f90281ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQC25JNU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK8pMfZMXDoOx7TbrOr3T2XkJVXoU6kk1%2FjcktOVNsHwIhAIsUceU7Fkef049sBvJwu5YeZG8tpe3cxgKMYKa3D7zJKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa%2FOCjqf4j9rMO0pEq3ANdcntLUNO8IWL1yUJ3dxxTl1fxWgj4xC0oeKAkWMw%2FxzmkEk1uD1%2F6qfdnz4ahWzQlN2L%2FiZFRNPQmaCl5aS1uRMz1uSbgYM10LJZ8FBtvgY28YWr10RAKafMSGVPLVckR6v0UbDz%2Fjpaxi4vJ4JTGzL37sPTi9CDk%2BhXAxlKH0Xk9QGyLOkfTHKhfZNaeDb1ioxZWRaIDNIssyIhdvhJlEbh1bPWCCUQQ%2BWxSKV6IR6cVucWAGf8tEsKo5DnlKPH%2Fp8jp7dbEOLXZ4pD57vPq5%2FvX%2B97LhqvkuBCjuJI1FMwJd2EOC5ZMWZBNWNYURWHCLtMNWEossgmBTTLPrAWDXF3UmVsWmgxsAvKu0J64OG%2Byy2FWC%2Fhzt2yiGVAnWpEgnc6yi%2Bm5SYewpN6e06omtQS%2BmJq6W8Tgj8B%2F0S3XWcHSYOw8RAjO1GtsHL1g1zlQ0zq4Qb5Sk%2Bp%2FB%2B4PwTIL4IjaYYS2t2jukVHY2q2Fjv6NlRGvvyu4YD1KWc2B8Vn5FsW2Vj3i5O70m7OBXO88VLL8bpRy%2F4R7q4LsCfiuLL2OuyJ8fxQQ4CdoylVgYQ%2B3DI6CvRX6AaUhHWnQvdmOl9iLqks4kbdFDBhLSjyiK3hvUdDdE5cx1tDQIjCost%2FEBjqkAfRp3sneqS9qOPtXkzuJJ5KWkA7uJQWBofLGdQoGDGUnpblk2ZD8yiQAYrI0X4qCST1Kqp5EzkVhl4JweDDcIe4e1nxBslPnYL6TR7KBPfM59IUK5NFlVEPMyUsjkzLm2pEy1ndJOMHveBGrUJVaeHiM4Xc8Jd%2FC6b3%2FTp5jT5Xrjo7NTkMuZ97y0EkC5OiipFp34KGY6gG2YBQFRw8UfBDcdFTm&X-Amz-Signature=3097dedcb55defb5f471415cd52b6aec6de097a6c1c7f505bdbbb23d5f927b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQC25JNU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK8pMfZMXDoOx7TbrOr3T2XkJVXoU6kk1%2FjcktOVNsHwIhAIsUceU7Fkef049sBvJwu5YeZG8tpe3cxgKMYKa3D7zJKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa%2FOCjqf4j9rMO0pEq3ANdcntLUNO8IWL1yUJ3dxxTl1fxWgj4xC0oeKAkWMw%2FxzmkEk1uD1%2F6qfdnz4ahWzQlN2L%2FiZFRNPQmaCl5aS1uRMz1uSbgYM10LJZ8FBtvgY28YWr10RAKafMSGVPLVckR6v0UbDz%2Fjpaxi4vJ4JTGzL37sPTi9CDk%2BhXAxlKH0Xk9QGyLOkfTHKhfZNaeDb1ioxZWRaIDNIssyIhdvhJlEbh1bPWCCUQQ%2BWxSKV6IR6cVucWAGf8tEsKo5DnlKPH%2Fp8jp7dbEOLXZ4pD57vPq5%2FvX%2B97LhqvkuBCjuJI1FMwJd2EOC5ZMWZBNWNYURWHCLtMNWEossgmBTTLPrAWDXF3UmVsWmgxsAvKu0J64OG%2Byy2FWC%2Fhzt2yiGVAnWpEgnc6yi%2Bm5SYewpN6e06omtQS%2BmJq6W8Tgj8B%2F0S3XWcHSYOw8RAjO1GtsHL1g1zlQ0zq4Qb5Sk%2Bp%2FB%2B4PwTIL4IjaYYS2t2jukVHY2q2Fjv6NlRGvvyu4YD1KWc2B8Vn5FsW2Vj3i5O70m7OBXO88VLL8bpRy%2F4R7q4LsCfiuLL2OuyJ8fxQQ4CdoylVgYQ%2B3DI6CvRX6AaUhHWnQvdmOl9iLqks4kbdFDBhLSjyiK3hvUdDdE5cx1tDQIjCost%2FEBjqkAfRp3sneqS9qOPtXkzuJJ5KWkA7uJQWBofLGdQoGDGUnpblk2ZD8yiQAYrI0X4qCST1Kqp5EzkVhl4JweDDcIe4e1nxBslPnYL6TR7KBPfM59IUK5NFlVEPMyUsjkzLm2pEy1ndJOMHveBGrUJVaeHiM4Xc8Jd%2FC6b3%2FTp5jT5Xrjo7NTkMuZ97y0EkC5OiipFp34KGY6gG2YBQFRw8UfBDcdFTm&X-Amz-Signature=f6e4d4b033193b6f554e1f6d50cc1cddd20835dfb98c501282ee89cb3d56eec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQC25JNU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK8pMfZMXDoOx7TbrOr3T2XkJVXoU6kk1%2FjcktOVNsHwIhAIsUceU7Fkef049sBvJwu5YeZG8tpe3cxgKMYKa3D7zJKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa%2FOCjqf4j9rMO0pEq3ANdcntLUNO8IWL1yUJ3dxxTl1fxWgj4xC0oeKAkWMw%2FxzmkEk1uD1%2F6qfdnz4ahWzQlN2L%2FiZFRNPQmaCl5aS1uRMz1uSbgYM10LJZ8FBtvgY28YWr10RAKafMSGVPLVckR6v0UbDz%2Fjpaxi4vJ4JTGzL37sPTi9CDk%2BhXAxlKH0Xk9QGyLOkfTHKhfZNaeDb1ioxZWRaIDNIssyIhdvhJlEbh1bPWCCUQQ%2BWxSKV6IR6cVucWAGf8tEsKo5DnlKPH%2Fp8jp7dbEOLXZ4pD57vPq5%2FvX%2B97LhqvkuBCjuJI1FMwJd2EOC5ZMWZBNWNYURWHCLtMNWEossgmBTTLPrAWDXF3UmVsWmgxsAvKu0J64OG%2Byy2FWC%2Fhzt2yiGVAnWpEgnc6yi%2Bm5SYewpN6e06omtQS%2BmJq6W8Tgj8B%2F0S3XWcHSYOw8RAjO1GtsHL1g1zlQ0zq4Qb5Sk%2Bp%2FB%2B4PwTIL4IjaYYS2t2jukVHY2q2Fjv6NlRGvvyu4YD1KWc2B8Vn5FsW2Vj3i5O70m7OBXO88VLL8bpRy%2F4R7q4LsCfiuLL2OuyJ8fxQQ4CdoylVgYQ%2B3DI6CvRX6AaUhHWnQvdmOl9iLqks4kbdFDBhLSjyiK3hvUdDdE5cx1tDQIjCost%2FEBjqkAfRp3sneqS9qOPtXkzuJJ5KWkA7uJQWBofLGdQoGDGUnpblk2ZD8yiQAYrI0X4qCST1Kqp5EzkVhl4JweDDcIe4e1nxBslPnYL6TR7KBPfM59IUK5NFlVEPMyUsjkzLm2pEy1ndJOMHveBGrUJVaeHiM4Xc8Jd%2FC6b3%2FTp5jT5Xrjo7NTkMuZ97y0EkC5OiipFp34KGY6gG2YBQFRw8UfBDcdFTm&X-Amz-Signature=a9359758bfb800f8deab7a4319897f59fd97b9510cb4037ad947b69c0cffdd79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQC25JNU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK8pMfZMXDoOx7TbrOr3T2XkJVXoU6kk1%2FjcktOVNsHwIhAIsUceU7Fkef049sBvJwu5YeZG8tpe3cxgKMYKa3D7zJKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa%2FOCjqf4j9rMO0pEq3ANdcntLUNO8IWL1yUJ3dxxTl1fxWgj4xC0oeKAkWMw%2FxzmkEk1uD1%2F6qfdnz4ahWzQlN2L%2FiZFRNPQmaCl5aS1uRMz1uSbgYM10LJZ8FBtvgY28YWr10RAKafMSGVPLVckR6v0UbDz%2Fjpaxi4vJ4JTGzL37sPTi9CDk%2BhXAxlKH0Xk9QGyLOkfTHKhfZNaeDb1ioxZWRaIDNIssyIhdvhJlEbh1bPWCCUQQ%2BWxSKV6IR6cVucWAGf8tEsKo5DnlKPH%2Fp8jp7dbEOLXZ4pD57vPq5%2FvX%2B97LhqvkuBCjuJI1FMwJd2EOC5ZMWZBNWNYURWHCLtMNWEossgmBTTLPrAWDXF3UmVsWmgxsAvKu0J64OG%2Byy2FWC%2Fhzt2yiGVAnWpEgnc6yi%2Bm5SYewpN6e06omtQS%2BmJq6W8Tgj8B%2F0S3XWcHSYOw8RAjO1GtsHL1g1zlQ0zq4Qb5Sk%2Bp%2FB%2B4PwTIL4IjaYYS2t2jukVHY2q2Fjv6NlRGvvyu4YD1KWc2B8Vn5FsW2Vj3i5O70m7OBXO88VLL8bpRy%2F4R7q4LsCfiuLL2OuyJ8fxQQ4CdoylVgYQ%2B3DI6CvRX6AaUhHWnQvdmOl9iLqks4kbdFDBhLSjyiK3hvUdDdE5cx1tDQIjCost%2FEBjqkAfRp3sneqS9qOPtXkzuJJ5KWkA7uJQWBofLGdQoGDGUnpblk2ZD8yiQAYrI0X4qCST1Kqp5EzkVhl4JweDDcIe4e1nxBslPnYL6TR7KBPfM59IUK5NFlVEPMyUsjkzLm2pEy1ndJOMHveBGrUJVaeHiM4Xc8Jd%2FC6b3%2FTp5jT5Xrjo7NTkMuZ97y0EkC5OiipFp34KGY6gG2YBQFRw8UfBDcdFTm&X-Amz-Signature=0332b58fd927dc199fea07b89c91dae92ec3887033502d02b007f3eebb6ddee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
