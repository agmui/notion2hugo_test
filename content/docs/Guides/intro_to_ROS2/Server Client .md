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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EKGBDXR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDj1un7HCJXShSHu6LjB6YQy0uRbWtkF3GXEuKdY%2F%2BNwIgZLs%2Fu7pQxEjEPkb7%2BS17ehfBXzUTQ3V8X7NFUnfK398q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDIzI85jL%2FnWpTbK10yrcAyC9uihz1H3WvohMjuTn7IRa6NEGmiSDiSudZfyaFAw7xfP35Vqk4DyUXU%2FMdHwZpkl9GGCILfOPLc2UUgozfdaNsA4TtoHeD40c2S%2BK02hWp4LJb%2BBOJTkA8cbww1MYzLD8p01eQbiOb7P3vofi%2B6rqtyXVv2dRWxwfOhewOjApHPjohQilvbwDEucy02Rz%2BCbd0hTDaqPQMnPVNz38%2BqiMvEkAASg%2B8DbDaUPFW%2BH6fCKdDqdaTNwOQmn1kVjCJCXyXQ9XZnQwE4OFEm1TwUpUFERJVF1d5OyZUl0ubIK9%2F%2BnYYW059iqyX26wY7rc1Ws1sc3Jm5J7GPsmi2KJwqpahUYwaBdw4e1a2%2BAavquEh6qKLF8Roo%2FH14UgYRjrSDveqEHyBBK%2BcRPznQShOmNGroHuILIHNhMOflmNIec6enNsVwo7%2B0fN9Vv%2FRQ03xHAmLXIAYK7azvjDAfl6G%2B1YtOppipoHe65nxuK9CjcIapDqUOlhXh3fg6YO6ZVAFm7vjfa9IlhWCgOcl3EhcMnsgU6airGxrjYuCtsSSIVPFiSetNIRkZv0jokX17HYJG2pI9cYProcDSuSxRIO2vSA%2FDRq7cBZGQ7t5LgXu4u85vKloTIVeRuopBX0MOWX6MAGOqUBtVb1MOISehzE%2Bb8pc%2BzZo0lWBMkrGOvx0vY9S14JI2471e6wb9FqeHK0JOOm%2BOtfuF%2Fqs1%2BfQxwf7g6Ytve0ojf4JjMLk0MfjlJqSngpzp2HD9L3KPiV0%2BC%2B%2BnbER3Pi2On2BHhH5QWO0l2j%2Faa5%2Be7hk1O3Z1Rf1DvSU63zIHXr%2FRRaBu54nWAZfvxS8i15CtRuaYJemVedUJAs0I8NioomIf0X&X-Amz-Signature=d5bfe4a27311979b175e945091b951a9781cdd01d5685dbeac526598b0e112f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EKGBDXR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDj1un7HCJXShSHu6LjB6YQy0uRbWtkF3GXEuKdY%2F%2BNwIgZLs%2Fu7pQxEjEPkb7%2BS17ehfBXzUTQ3V8X7NFUnfK398q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDIzI85jL%2FnWpTbK10yrcAyC9uihz1H3WvohMjuTn7IRa6NEGmiSDiSudZfyaFAw7xfP35Vqk4DyUXU%2FMdHwZpkl9GGCILfOPLc2UUgozfdaNsA4TtoHeD40c2S%2BK02hWp4LJb%2BBOJTkA8cbww1MYzLD8p01eQbiOb7P3vofi%2B6rqtyXVv2dRWxwfOhewOjApHPjohQilvbwDEucy02Rz%2BCbd0hTDaqPQMnPVNz38%2BqiMvEkAASg%2B8DbDaUPFW%2BH6fCKdDqdaTNwOQmn1kVjCJCXyXQ9XZnQwE4OFEm1TwUpUFERJVF1d5OyZUl0ubIK9%2F%2BnYYW059iqyX26wY7rc1Ws1sc3Jm5J7GPsmi2KJwqpahUYwaBdw4e1a2%2BAavquEh6qKLF8Roo%2FH14UgYRjrSDveqEHyBBK%2BcRPznQShOmNGroHuILIHNhMOflmNIec6enNsVwo7%2B0fN9Vv%2FRQ03xHAmLXIAYK7azvjDAfl6G%2B1YtOppipoHe65nxuK9CjcIapDqUOlhXh3fg6YO6ZVAFm7vjfa9IlhWCgOcl3EhcMnsgU6airGxrjYuCtsSSIVPFiSetNIRkZv0jokX17HYJG2pI9cYProcDSuSxRIO2vSA%2FDRq7cBZGQ7t5LgXu4u85vKloTIVeRuopBX0MOWX6MAGOqUBtVb1MOISehzE%2Bb8pc%2BzZo0lWBMkrGOvx0vY9S14JI2471e6wb9FqeHK0JOOm%2BOtfuF%2Fqs1%2BfQxwf7g6Ytve0ojf4JjMLk0MfjlJqSngpzp2HD9L3KPiV0%2BC%2B%2BnbER3Pi2On2BHhH5QWO0l2j%2Faa5%2Be7hk1O3Z1Rf1DvSU63zIHXr%2FRRaBu54nWAZfvxS8i15CtRuaYJemVedUJAs0I8NioomIf0X&X-Amz-Signature=b34f7efa4ef927af29b590aa4713c8f0031472bb560b2d5e2e3af88753f6bf6a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EKGBDXR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDj1un7HCJXShSHu6LjB6YQy0uRbWtkF3GXEuKdY%2F%2BNwIgZLs%2Fu7pQxEjEPkb7%2BS17ehfBXzUTQ3V8X7NFUnfK398q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDIzI85jL%2FnWpTbK10yrcAyC9uihz1H3WvohMjuTn7IRa6NEGmiSDiSudZfyaFAw7xfP35Vqk4DyUXU%2FMdHwZpkl9GGCILfOPLc2UUgozfdaNsA4TtoHeD40c2S%2BK02hWp4LJb%2BBOJTkA8cbww1MYzLD8p01eQbiOb7P3vofi%2B6rqtyXVv2dRWxwfOhewOjApHPjohQilvbwDEucy02Rz%2BCbd0hTDaqPQMnPVNz38%2BqiMvEkAASg%2B8DbDaUPFW%2BH6fCKdDqdaTNwOQmn1kVjCJCXyXQ9XZnQwE4OFEm1TwUpUFERJVF1d5OyZUl0ubIK9%2F%2BnYYW059iqyX26wY7rc1Ws1sc3Jm5J7GPsmi2KJwqpahUYwaBdw4e1a2%2BAavquEh6qKLF8Roo%2FH14UgYRjrSDveqEHyBBK%2BcRPznQShOmNGroHuILIHNhMOflmNIec6enNsVwo7%2B0fN9Vv%2FRQ03xHAmLXIAYK7azvjDAfl6G%2B1YtOppipoHe65nxuK9CjcIapDqUOlhXh3fg6YO6ZVAFm7vjfa9IlhWCgOcl3EhcMnsgU6airGxrjYuCtsSSIVPFiSetNIRkZv0jokX17HYJG2pI9cYProcDSuSxRIO2vSA%2FDRq7cBZGQ7t5LgXu4u85vKloTIVeRuopBX0MOWX6MAGOqUBtVb1MOISehzE%2Bb8pc%2BzZo0lWBMkrGOvx0vY9S14JI2471e6wb9FqeHK0JOOm%2BOtfuF%2Fqs1%2BfQxwf7g6Ytve0ojf4JjMLk0MfjlJqSngpzp2HD9L3KPiV0%2BC%2B%2BnbER3Pi2On2BHhH5QWO0l2j%2Faa5%2Be7hk1O3Z1Rf1DvSU63zIHXr%2FRRaBu54nWAZfvxS8i15CtRuaYJemVedUJAs0I8NioomIf0X&X-Amz-Signature=75088eb4fdb5799908a174b220661c602852df910e4711d41b488393e2e1db83&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EKGBDXR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDj1un7HCJXShSHu6LjB6YQy0uRbWtkF3GXEuKdY%2F%2BNwIgZLs%2Fu7pQxEjEPkb7%2BS17ehfBXzUTQ3V8X7NFUnfK398q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDIzI85jL%2FnWpTbK10yrcAyC9uihz1H3WvohMjuTn7IRa6NEGmiSDiSudZfyaFAw7xfP35Vqk4DyUXU%2FMdHwZpkl9GGCILfOPLc2UUgozfdaNsA4TtoHeD40c2S%2BK02hWp4LJb%2BBOJTkA8cbww1MYzLD8p01eQbiOb7P3vofi%2B6rqtyXVv2dRWxwfOhewOjApHPjohQilvbwDEucy02Rz%2BCbd0hTDaqPQMnPVNz38%2BqiMvEkAASg%2B8DbDaUPFW%2BH6fCKdDqdaTNwOQmn1kVjCJCXyXQ9XZnQwE4OFEm1TwUpUFERJVF1d5OyZUl0ubIK9%2F%2BnYYW059iqyX26wY7rc1Ws1sc3Jm5J7GPsmi2KJwqpahUYwaBdw4e1a2%2BAavquEh6qKLF8Roo%2FH14UgYRjrSDveqEHyBBK%2BcRPznQShOmNGroHuILIHNhMOflmNIec6enNsVwo7%2B0fN9Vv%2FRQ03xHAmLXIAYK7azvjDAfl6G%2B1YtOppipoHe65nxuK9CjcIapDqUOlhXh3fg6YO6ZVAFm7vjfa9IlhWCgOcl3EhcMnsgU6airGxrjYuCtsSSIVPFiSetNIRkZv0jokX17HYJG2pI9cYProcDSuSxRIO2vSA%2FDRq7cBZGQ7t5LgXu4u85vKloTIVeRuopBX0MOWX6MAGOqUBtVb1MOISehzE%2Bb8pc%2BzZo0lWBMkrGOvx0vY9S14JI2471e6wb9FqeHK0JOOm%2BOtfuF%2Fqs1%2BfQxwf7g6Ytve0ojf4JjMLk0MfjlJqSngpzp2HD9L3KPiV0%2BC%2B%2BnbER3Pi2On2BHhH5QWO0l2j%2Faa5%2Be7hk1O3Z1Rf1DvSU63zIHXr%2FRRaBu54nWAZfvxS8i15CtRuaYJemVedUJAs0I8NioomIf0X&X-Amz-Signature=884e782f111bea69756e7f1acd2bb9f41c446d78cac4715a8574c2c21ed57a38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EKGBDXR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDj1un7HCJXShSHu6LjB6YQy0uRbWtkF3GXEuKdY%2F%2BNwIgZLs%2Fu7pQxEjEPkb7%2BS17ehfBXzUTQ3V8X7NFUnfK398q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDIzI85jL%2FnWpTbK10yrcAyC9uihz1H3WvohMjuTn7IRa6NEGmiSDiSudZfyaFAw7xfP35Vqk4DyUXU%2FMdHwZpkl9GGCILfOPLc2UUgozfdaNsA4TtoHeD40c2S%2BK02hWp4LJb%2BBOJTkA8cbww1MYzLD8p01eQbiOb7P3vofi%2B6rqtyXVv2dRWxwfOhewOjApHPjohQilvbwDEucy02Rz%2BCbd0hTDaqPQMnPVNz38%2BqiMvEkAASg%2B8DbDaUPFW%2BH6fCKdDqdaTNwOQmn1kVjCJCXyXQ9XZnQwE4OFEm1TwUpUFERJVF1d5OyZUl0ubIK9%2F%2BnYYW059iqyX26wY7rc1Ws1sc3Jm5J7GPsmi2KJwqpahUYwaBdw4e1a2%2BAavquEh6qKLF8Roo%2FH14UgYRjrSDveqEHyBBK%2BcRPznQShOmNGroHuILIHNhMOflmNIec6enNsVwo7%2B0fN9Vv%2FRQ03xHAmLXIAYK7azvjDAfl6G%2B1YtOppipoHe65nxuK9CjcIapDqUOlhXh3fg6YO6ZVAFm7vjfa9IlhWCgOcl3EhcMnsgU6airGxrjYuCtsSSIVPFiSetNIRkZv0jokX17HYJG2pI9cYProcDSuSxRIO2vSA%2FDRq7cBZGQ7t5LgXu4u85vKloTIVeRuopBX0MOWX6MAGOqUBtVb1MOISehzE%2Bb8pc%2BzZo0lWBMkrGOvx0vY9S14JI2471e6wb9FqeHK0JOOm%2BOtfuF%2Fqs1%2BfQxwf7g6Ytve0ojf4JjMLk0MfjlJqSngpzp2HD9L3KPiV0%2BC%2B%2BnbER3Pi2On2BHhH5QWO0l2j%2Faa5%2Be7hk1O3Z1Rf1DvSU63zIHXr%2FRRaBu54nWAZfvxS8i15CtRuaYJemVedUJAs0I8NioomIf0X&X-Amz-Signature=26f9d3657c231c7f3e1b4c8a68397633acbda8c82d9e70293053b76a7768ece2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
