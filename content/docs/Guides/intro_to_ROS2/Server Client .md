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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JCHCHEH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDrgZmwpnkaehZIO%2BWzpYIrKj6yzi5fdpCD8oHBc2vzHAiEAsRhCuimC40NWqnI%2FUj6OSdWqD1RJvLZ7QSr1CaSb7dsqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwR1X14pza7DGTyvCrcA4eFQzVWO443ds68nHw6OSllQuIflRlmdfto8B%2BzBlijt0KtZFeR%2B6kOO5gyHxGX8lRaNwghKonp1qEW7SMjgMEsLryMQJbvmE8r2Z7tty7b3ILJZ4QAcMmhUd2fAQKQW%2BDbRlAJU8AAGtpwP0Ks1MJ11dfyQftbiNiH1j8nKiYSbfotktLnzESv%2BLGkkWEWSkQHlIlU2xTnTDVwuZAOKUOerKsT%2F3k5DJgeVJcah7Ge2FnmZ%2Fr3X1L7lwRt0NXLKRew%2BjpapF7XkmvO4GM3A%2FgdBbnYB1hGfYDMHD1ehblcJC4dQDPrZ6RDnrAR3y6z3%2FaX5hKJ55ckseszUsMaOSUnoief8F6CmjkqH8yL2UNzMNevgDDEMYpXjZFPN4pr5DTT3txhXu0cW%2FZ4nk2ByHbSb1a6HFk9OBJl85O4iMGz2tLAfsqWySmaLenTM3k%2FGjY4SdPPio%2F%2B1RNtE2tjL4OE5wtcsG7LB6NWELDRBvu5bpTNHctHTOHTAOz9V1uEm4z18iTWJXya%2F8UbflyOcMa0Aj5y4b0%2FYgmTfYloOL7WBx2kROe5cBIAeCQqiz91b%2BbDLzb3tnznpYaWQUO5YZW0I9BdINwR2bmtXkAHRTWYVMJQ%2FlE5pnuRCa5KMMrb18QGOqUBkPG%2FjtpUxi9SBiYPZbNlzN%2FO3o3Ls9w%2FjutUrAEFwV5QqLWA%2FDWkw3jqB1BunRQAWm%2F8B4FpuUchk4GB4izojU%2B1515FOiJOAOr3QNYQOOJBa0Q0okTNQJwou9zhnH73BeqXVss5Z3JmOeCG7ebqItz3QcOLDrL6IsVw3KApXXIJIjLwgs2eTgRpTqt0ZscjAMEjCAfTaxNWciClDJqNHE2J5QGu&X-Amz-Signature=2d6712804ba967662a6f81ec6c764df68273fc9b09371718e926f78ff0686324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JCHCHEH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDrgZmwpnkaehZIO%2BWzpYIrKj6yzi5fdpCD8oHBc2vzHAiEAsRhCuimC40NWqnI%2FUj6OSdWqD1RJvLZ7QSr1CaSb7dsqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwR1X14pza7DGTyvCrcA4eFQzVWO443ds68nHw6OSllQuIflRlmdfto8B%2BzBlijt0KtZFeR%2B6kOO5gyHxGX8lRaNwghKonp1qEW7SMjgMEsLryMQJbvmE8r2Z7tty7b3ILJZ4QAcMmhUd2fAQKQW%2BDbRlAJU8AAGtpwP0Ks1MJ11dfyQftbiNiH1j8nKiYSbfotktLnzESv%2BLGkkWEWSkQHlIlU2xTnTDVwuZAOKUOerKsT%2F3k5DJgeVJcah7Ge2FnmZ%2Fr3X1L7lwRt0NXLKRew%2BjpapF7XkmvO4GM3A%2FgdBbnYB1hGfYDMHD1ehblcJC4dQDPrZ6RDnrAR3y6z3%2FaX5hKJ55ckseszUsMaOSUnoief8F6CmjkqH8yL2UNzMNevgDDEMYpXjZFPN4pr5DTT3txhXu0cW%2FZ4nk2ByHbSb1a6HFk9OBJl85O4iMGz2tLAfsqWySmaLenTM3k%2FGjY4SdPPio%2F%2B1RNtE2tjL4OE5wtcsG7LB6NWELDRBvu5bpTNHctHTOHTAOz9V1uEm4z18iTWJXya%2F8UbflyOcMa0Aj5y4b0%2FYgmTfYloOL7WBx2kROe5cBIAeCQqiz91b%2BbDLzb3tnznpYaWQUO5YZW0I9BdINwR2bmtXkAHRTWYVMJQ%2FlE5pnuRCa5KMMrb18QGOqUBkPG%2FjtpUxi9SBiYPZbNlzN%2FO3o3Ls9w%2FjutUrAEFwV5QqLWA%2FDWkw3jqB1BunRQAWm%2F8B4FpuUchk4GB4izojU%2B1515FOiJOAOr3QNYQOOJBa0Q0okTNQJwou9zhnH73BeqXVss5Z3JmOeCG7ebqItz3QcOLDrL6IsVw3KApXXIJIjLwgs2eTgRpTqt0ZscjAMEjCAfTaxNWciClDJqNHE2J5QGu&X-Amz-Signature=635c2d45873854bb82e3f907371a583cb42e50af02592debe7b7e8e35682c1db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JCHCHEH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDrgZmwpnkaehZIO%2BWzpYIrKj6yzi5fdpCD8oHBc2vzHAiEAsRhCuimC40NWqnI%2FUj6OSdWqD1RJvLZ7QSr1CaSb7dsqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwR1X14pza7DGTyvCrcA4eFQzVWO443ds68nHw6OSllQuIflRlmdfto8B%2BzBlijt0KtZFeR%2B6kOO5gyHxGX8lRaNwghKonp1qEW7SMjgMEsLryMQJbvmE8r2Z7tty7b3ILJZ4QAcMmhUd2fAQKQW%2BDbRlAJU8AAGtpwP0Ks1MJ11dfyQftbiNiH1j8nKiYSbfotktLnzESv%2BLGkkWEWSkQHlIlU2xTnTDVwuZAOKUOerKsT%2F3k5DJgeVJcah7Ge2FnmZ%2Fr3X1L7lwRt0NXLKRew%2BjpapF7XkmvO4GM3A%2FgdBbnYB1hGfYDMHD1ehblcJC4dQDPrZ6RDnrAR3y6z3%2FaX5hKJ55ckseszUsMaOSUnoief8F6CmjkqH8yL2UNzMNevgDDEMYpXjZFPN4pr5DTT3txhXu0cW%2FZ4nk2ByHbSb1a6HFk9OBJl85O4iMGz2tLAfsqWySmaLenTM3k%2FGjY4SdPPio%2F%2B1RNtE2tjL4OE5wtcsG7LB6NWELDRBvu5bpTNHctHTOHTAOz9V1uEm4z18iTWJXya%2F8UbflyOcMa0Aj5y4b0%2FYgmTfYloOL7WBx2kROe5cBIAeCQqiz91b%2BbDLzb3tnznpYaWQUO5YZW0I9BdINwR2bmtXkAHRTWYVMJQ%2FlE5pnuRCa5KMMrb18QGOqUBkPG%2FjtpUxi9SBiYPZbNlzN%2FO3o3Ls9w%2FjutUrAEFwV5QqLWA%2FDWkw3jqB1BunRQAWm%2F8B4FpuUchk4GB4izojU%2B1515FOiJOAOr3QNYQOOJBa0Q0okTNQJwou9zhnH73BeqXVss5Z3JmOeCG7ebqItz3QcOLDrL6IsVw3KApXXIJIjLwgs2eTgRpTqt0ZscjAMEjCAfTaxNWciClDJqNHE2J5QGu&X-Amz-Signature=d75982d2ac66f28113471909007e363ee66f99b4f3f3d27950e587c4f39fcb74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JCHCHEH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDrgZmwpnkaehZIO%2BWzpYIrKj6yzi5fdpCD8oHBc2vzHAiEAsRhCuimC40NWqnI%2FUj6OSdWqD1RJvLZ7QSr1CaSb7dsqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwR1X14pza7DGTyvCrcA4eFQzVWO443ds68nHw6OSllQuIflRlmdfto8B%2BzBlijt0KtZFeR%2B6kOO5gyHxGX8lRaNwghKonp1qEW7SMjgMEsLryMQJbvmE8r2Z7tty7b3ILJZ4QAcMmhUd2fAQKQW%2BDbRlAJU8AAGtpwP0Ks1MJ11dfyQftbiNiH1j8nKiYSbfotktLnzESv%2BLGkkWEWSkQHlIlU2xTnTDVwuZAOKUOerKsT%2F3k5DJgeVJcah7Ge2FnmZ%2Fr3X1L7lwRt0NXLKRew%2BjpapF7XkmvO4GM3A%2FgdBbnYB1hGfYDMHD1ehblcJC4dQDPrZ6RDnrAR3y6z3%2FaX5hKJ55ckseszUsMaOSUnoief8F6CmjkqH8yL2UNzMNevgDDEMYpXjZFPN4pr5DTT3txhXu0cW%2FZ4nk2ByHbSb1a6HFk9OBJl85O4iMGz2tLAfsqWySmaLenTM3k%2FGjY4SdPPio%2F%2B1RNtE2tjL4OE5wtcsG7LB6NWELDRBvu5bpTNHctHTOHTAOz9V1uEm4z18iTWJXya%2F8UbflyOcMa0Aj5y4b0%2FYgmTfYloOL7WBx2kROe5cBIAeCQqiz91b%2BbDLzb3tnznpYaWQUO5YZW0I9BdINwR2bmtXkAHRTWYVMJQ%2FlE5pnuRCa5KMMrb18QGOqUBkPG%2FjtpUxi9SBiYPZbNlzN%2FO3o3Ls9w%2FjutUrAEFwV5QqLWA%2FDWkw3jqB1BunRQAWm%2F8B4FpuUchk4GB4izojU%2B1515FOiJOAOr3QNYQOOJBa0Q0okTNQJwou9zhnH73BeqXVss5Z3JmOeCG7ebqItz3QcOLDrL6IsVw3KApXXIJIjLwgs2eTgRpTqt0ZscjAMEjCAfTaxNWciClDJqNHE2J5QGu&X-Amz-Signature=d6a0420998aef0c34e435d2a925f87919f93b6db20a8cc809e880fc7bf982c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JCHCHEH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDrgZmwpnkaehZIO%2BWzpYIrKj6yzi5fdpCD8oHBc2vzHAiEAsRhCuimC40NWqnI%2FUj6OSdWqD1RJvLZ7QSr1CaSb7dsqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwR1X14pza7DGTyvCrcA4eFQzVWO443ds68nHw6OSllQuIflRlmdfto8B%2BzBlijt0KtZFeR%2B6kOO5gyHxGX8lRaNwghKonp1qEW7SMjgMEsLryMQJbvmE8r2Z7tty7b3ILJZ4QAcMmhUd2fAQKQW%2BDbRlAJU8AAGtpwP0Ks1MJ11dfyQftbiNiH1j8nKiYSbfotktLnzESv%2BLGkkWEWSkQHlIlU2xTnTDVwuZAOKUOerKsT%2F3k5DJgeVJcah7Ge2FnmZ%2Fr3X1L7lwRt0NXLKRew%2BjpapF7XkmvO4GM3A%2FgdBbnYB1hGfYDMHD1ehblcJC4dQDPrZ6RDnrAR3y6z3%2FaX5hKJ55ckseszUsMaOSUnoief8F6CmjkqH8yL2UNzMNevgDDEMYpXjZFPN4pr5DTT3txhXu0cW%2FZ4nk2ByHbSb1a6HFk9OBJl85O4iMGz2tLAfsqWySmaLenTM3k%2FGjY4SdPPio%2F%2B1RNtE2tjL4OE5wtcsG7LB6NWELDRBvu5bpTNHctHTOHTAOz9V1uEm4z18iTWJXya%2F8UbflyOcMa0Aj5y4b0%2FYgmTfYloOL7WBx2kROe5cBIAeCQqiz91b%2BbDLzb3tnznpYaWQUO5YZW0I9BdINwR2bmtXkAHRTWYVMJQ%2FlE5pnuRCa5KMMrb18QGOqUBkPG%2FjtpUxi9SBiYPZbNlzN%2FO3o3Ls9w%2FjutUrAEFwV5QqLWA%2FDWkw3jqB1BunRQAWm%2F8B4FpuUchk4GB4izojU%2B1515FOiJOAOr3QNYQOOJBa0Q0okTNQJwou9zhnH73BeqXVss5Z3JmOeCG7ebqItz3QcOLDrL6IsVw3KApXXIJIjLwgs2eTgRpTqt0ZscjAMEjCAfTaxNWciClDJqNHE2J5QGu&X-Amz-Signature=b6d8c9a3825d3db35b80ab7783759157b418ac44a8aa84cea390e71db6860e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
