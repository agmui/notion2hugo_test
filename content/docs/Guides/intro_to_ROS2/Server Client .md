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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VT3E5CZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr2N%2F2yTZtcu0G%2BEy7EqOdeMFvRf67%2B0hE6fRJJXzAiwIhAN0zeLhslSlKw43rtklbdL%2F9lmK6%2Fns5qmSfs5IkyXqXKv8DCBAQABoMNjM3NDIzMTgzODA1IgxV8VCqt%2BPD5K9I8XQq3AMn9aEf2UjplnitaZE82WoqtWVGj2jq4KVu3pKBfAqDuEkxAIxt9nOCrxBKXrIVvHL2pvYa%2FwNvPwPlXpKdzl15utuG2ZNO70nsOcoEPbGm9RQnP2OQAwYmLak6v28hMZmbTucrpvqPofFYHwXybmDVywKKLHLJzArol5iFxNUjRXGTt%2BkxLQGIBvdkrOp9KH%2BEazG6G87juzJMcUjatQ%2BIRpC2BFTv3738dUFl1J6b0LUWd%2F0SptkkUdZGK7KVZLps%2BrOomLPVjwja63I6A7l4d2b6y1RmBOUwhKoLo1d%2FvDuiddUB8zAy3hO%2F4zknaXyttUbG9bG82DAR1X1LPtYQH756Z7KY8%2BNP7bSMFJ%2BMg3b9P0Pd3FPl4wbovu6UUU9%2Fz3sQS9Anm5sALvxZDMr11fyrGRJ5hiZKAzH32sVh8GhcUwgy7uunYdLi%2Fo5%2BIkvBxQtm%2Fjg8tj0Ax%2F7%2Fo2Cl3dPfl4NH1%2FKdSPp%2FuNpv0u79o9bLZp%2BaBpI31NEuW6jKi6i2fDOy9l0jUgJPWsoeZyxb8UvaibAOID704s8GPR1zJqeCULygiPSgtq95Nd4%2BsxK1hcWDBDVSe4YjaRmaaSgRbBtwrCrd7DesB%2Bsa43PTh250D5oTMzQZDDDb77bEBjqkAUQbrRY8kHlg2%2FBwMuYhblLLTxfqxTdy2G4%2B7E5muAkliNZiZ5YKTlw4OwI0idI64aYlxGR0WLpOllz4peq8JqKsIf9HGk8a%2FoVA%2B5H8kGxalLbYuusm0nipkm6Ig2R%2BUujvwzCSaD1qbD7feisKrysc1bOMW1bBJiYrlsGVq4rq9a5X6pQUVf7SoJkhhzKIpemLuEjcBmjkq1YRXaqMVzBJXrJn&X-Amz-Signature=e161d63d399593030041b2a771d6b112763a2325e957c53ee3154289518386b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VT3E5CZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr2N%2F2yTZtcu0G%2BEy7EqOdeMFvRf67%2B0hE6fRJJXzAiwIhAN0zeLhslSlKw43rtklbdL%2F9lmK6%2Fns5qmSfs5IkyXqXKv8DCBAQABoMNjM3NDIzMTgzODA1IgxV8VCqt%2BPD5K9I8XQq3AMn9aEf2UjplnitaZE82WoqtWVGj2jq4KVu3pKBfAqDuEkxAIxt9nOCrxBKXrIVvHL2pvYa%2FwNvPwPlXpKdzl15utuG2ZNO70nsOcoEPbGm9RQnP2OQAwYmLak6v28hMZmbTucrpvqPofFYHwXybmDVywKKLHLJzArol5iFxNUjRXGTt%2BkxLQGIBvdkrOp9KH%2BEazG6G87juzJMcUjatQ%2BIRpC2BFTv3738dUFl1J6b0LUWd%2F0SptkkUdZGK7KVZLps%2BrOomLPVjwja63I6A7l4d2b6y1RmBOUwhKoLo1d%2FvDuiddUB8zAy3hO%2F4zknaXyttUbG9bG82DAR1X1LPtYQH756Z7KY8%2BNP7bSMFJ%2BMg3b9P0Pd3FPl4wbovu6UUU9%2Fz3sQS9Anm5sALvxZDMr11fyrGRJ5hiZKAzH32sVh8GhcUwgy7uunYdLi%2Fo5%2BIkvBxQtm%2Fjg8tj0Ax%2F7%2Fo2Cl3dPfl4NH1%2FKdSPp%2FuNpv0u79o9bLZp%2BaBpI31NEuW6jKi6i2fDOy9l0jUgJPWsoeZyxb8UvaibAOID704s8GPR1zJqeCULygiPSgtq95Nd4%2BsxK1hcWDBDVSe4YjaRmaaSgRbBtwrCrd7DesB%2Bsa43PTh250D5oTMzQZDDDb77bEBjqkAUQbrRY8kHlg2%2FBwMuYhblLLTxfqxTdy2G4%2B7E5muAkliNZiZ5YKTlw4OwI0idI64aYlxGR0WLpOllz4peq8JqKsIf9HGk8a%2FoVA%2B5H8kGxalLbYuusm0nipkm6Ig2R%2BUujvwzCSaD1qbD7feisKrysc1bOMW1bBJiYrlsGVq4rq9a5X6pQUVf7SoJkhhzKIpemLuEjcBmjkq1YRXaqMVzBJXrJn&X-Amz-Signature=cc67a623dadf1b70310760617575d88aebd3b51da8df977d2e790d629b4fa9fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VT3E5CZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr2N%2F2yTZtcu0G%2BEy7EqOdeMFvRf67%2B0hE6fRJJXzAiwIhAN0zeLhslSlKw43rtklbdL%2F9lmK6%2Fns5qmSfs5IkyXqXKv8DCBAQABoMNjM3NDIzMTgzODA1IgxV8VCqt%2BPD5K9I8XQq3AMn9aEf2UjplnitaZE82WoqtWVGj2jq4KVu3pKBfAqDuEkxAIxt9nOCrxBKXrIVvHL2pvYa%2FwNvPwPlXpKdzl15utuG2ZNO70nsOcoEPbGm9RQnP2OQAwYmLak6v28hMZmbTucrpvqPofFYHwXybmDVywKKLHLJzArol5iFxNUjRXGTt%2BkxLQGIBvdkrOp9KH%2BEazG6G87juzJMcUjatQ%2BIRpC2BFTv3738dUFl1J6b0LUWd%2F0SptkkUdZGK7KVZLps%2BrOomLPVjwja63I6A7l4d2b6y1RmBOUwhKoLo1d%2FvDuiddUB8zAy3hO%2F4zknaXyttUbG9bG82DAR1X1LPtYQH756Z7KY8%2BNP7bSMFJ%2BMg3b9P0Pd3FPl4wbovu6UUU9%2Fz3sQS9Anm5sALvxZDMr11fyrGRJ5hiZKAzH32sVh8GhcUwgy7uunYdLi%2Fo5%2BIkvBxQtm%2Fjg8tj0Ax%2F7%2Fo2Cl3dPfl4NH1%2FKdSPp%2FuNpv0u79o9bLZp%2BaBpI31NEuW6jKi6i2fDOy9l0jUgJPWsoeZyxb8UvaibAOID704s8GPR1zJqeCULygiPSgtq95Nd4%2BsxK1hcWDBDVSe4YjaRmaaSgRbBtwrCrd7DesB%2Bsa43PTh250D5oTMzQZDDDb77bEBjqkAUQbrRY8kHlg2%2FBwMuYhblLLTxfqxTdy2G4%2B7E5muAkliNZiZ5YKTlw4OwI0idI64aYlxGR0WLpOllz4peq8JqKsIf9HGk8a%2FoVA%2B5H8kGxalLbYuusm0nipkm6Ig2R%2BUujvwzCSaD1qbD7feisKrysc1bOMW1bBJiYrlsGVq4rq9a5X6pQUVf7SoJkhhzKIpemLuEjcBmjkq1YRXaqMVzBJXrJn&X-Amz-Signature=9fb489d7fe3a12c5598e78ed07935ae46ea2de0f982ea4735299fe6d0daa66e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VT3E5CZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr2N%2F2yTZtcu0G%2BEy7EqOdeMFvRf67%2B0hE6fRJJXzAiwIhAN0zeLhslSlKw43rtklbdL%2F9lmK6%2Fns5qmSfs5IkyXqXKv8DCBAQABoMNjM3NDIzMTgzODA1IgxV8VCqt%2BPD5K9I8XQq3AMn9aEf2UjplnitaZE82WoqtWVGj2jq4KVu3pKBfAqDuEkxAIxt9nOCrxBKXrIVvHL2pvYa%2FwNvPwPlXpKdzl15utuG2ZNO70nsOcoEPbGm9RQnP2OQAwYmLak6v28hMZmbTucrpvqPofFYHwXybmDVywKKLHLJzArol5iFxNUjRXGTt%2BkxLQGIBvdkrOp9KH%2BEazG6G87juzJMcUjatQ%2BIRpC2BFTv3738dUFl1J6b0LUWd%2F0SptkkUdZGK7KVZLps%2BrOomLPVjwja63I6A7l4d2b6y1RmBOUwhKoLo1d%2FvDuiddUB8zAy3hO%2F4zknaXyttUbG9bG82DAR1X1LPtYQH756Z7KY8%2BNP7bSMFJ%2BMg3b9P0Pd3FPl4wbovu6UUU9%2Fz3sQS9Anm5sALvxZDMr11fyrGRJ5hiZKAzH32sVh8GhcUwgy7uunYdLi%2Fo5%2BIkvBxQtm%2Fjg8tj0Ax%2F7%2Fo2Cl3dPfl4NH1%2FKdSPp%2FuNpv0u79o9bLZp%2BaBpI31NEuW6jKi6i2fDOy9l0jUgJPWsoeZyxb8UvaibAOID704s8GPR1zJqeCULygiPSgtq95Nd4%2BsxK1hcWDBDVSe4YjaRmaaSgRbBtwrCrd7DesB%2Bsa43PTh250D5oTMzQZDDDb77bEBjqkAUQbrRY8kHlg2%2FBwMuYhblLLTxfqxTdy2G4%2B7E5muAkliNZiZ5YKTlw4OwI0idI64aYlxGR0WLpOllz4peq8JqKsIf9HGk8a%2FoVA%2B5H8kGxalLbYuusm0nipkm6Ig2R%2BUujvwzCSaD1qbD7feisKrysc1bOMW1bBJiYrlsGVq4rq9a5X6pQUVf7SoJkhhzKIpemLuEjcBmjkq1YRXaqMVzBJXrJn&X-Amz-Signature=25c838ac0d5adf5121d7ead40d58a08b1bba1e27d66d83053aca2f61093b8ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VT3E5CZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr2N%2F2yTZtcu0G%2BEy7EqOdeMFvRf67%2B0hE6fRJJXzAiwIhAN0zeLhslSlKw43rtklbdL%2F9lmK6%2Fns5qmSfs5IkyXqXKv8DCBAQABoMNjM3NDIzMTgzODA1IgxV8VCqt%2BPD5K9I8XQq3AMn9aEf2UjplnitaZE82WoqtWVGj2jq4KVu3pKBfAqDuEkxAIxt9nOCrxBKXrIVvHL2pvYa%2FwNvPwPlXpKdzl15utuG2ZNO70nsOcoEPbGm9RQnP2OQAwYmLak6v28hMZmbTucrpvqPofFYHwXybmDVywKKLHLJzArol5iFxNUjRXGTt%2BkxLQGIBvdkrOp9KH%2BEazG6G87juzJMcUjatQ%2BIRpC2BFTv3738dUFl1J6b0LUWd%2F0SptkkUdZGK7KVZLps%2BrOomLPVjwja63I6A7l4d2b6y1RmBOUwhKoLo1d%2FvDuiddUB8zAy3hO%2F4zknaXyttUbG9bG82DAR1X1LPtYQH756Z7KY8%2BNP7bSMFJ%2BMg3b9P0Pd3FPl4wbovu6UUU9%2Fz3sQS9Anm5sALvxZDMr11fyrGRJ5hiZKAzH32sVh8GhcUwgy7uunYdLi%2Fo5%2BIkvBxQtm%2Fjg8tj0Ax%2F7%2Fo2Cl3dPfl4NH1%2FKdSPp%2FuNpv0u79o9bLZp%2BaBpI31NEuW6jKi6i2fDOy9l0jUgJPWsoeZyxb8UvaibAOID704s8GPR1zJqeCULygiPSgtq95Nd4%2BsxK1hcWDBDVSe4YjaRmaaSgRbBtwrCrd7DesB%2Bsa43PTh250D5oTMzQZDDDb77bEBjqkAUQbrRY8kHlg2%2FBwMuYhblLLTxfqxTdy2G4%2B7E5muAkliNZiZ5YKTlw4OwI0idI64aYlxGR0WLpOllz4peq8JqKsIf9HGk8a%2FoVA%2B5H8kGxalLbYuusm0nipkm6Ig2R%2BUujvwzCSaD1qbD7feisKrysc1bOMW1bBJiYrlsGVq4rq9a5X6pQUVf7SoJkhhzKIpemLuEjcBmjkq1YRXaqMVzBJXrJn&X-Amz-Signature=8c2f248ae598afb6e010fd086824616d756da471e002111fbf7981b355d01425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
