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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3D5EHWI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFH6i3XcDl15ZLLw82qKTbX4QH6Pk6hrW5HRlA9Qz4h7AiEAmCPLZFHo8jhY8M3QhwpP4%2B01Csk2NebBApvGWpcB5eIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNAakTbVCPznzpR2LSrcA4eclXpHaAlrGbM%2FdIaKkqQXrlBovxBJ6BbBn8WYjtrVxD8RX4nuW5WJVmg7se%2BPz9dR26xJ2jnjORsHUWnr0dOacbGbK4WapVrx54uFOjb%2FdhstRraiOvgjpoVytmgkkUh3IQmbpvfSrPSlDtJ1BkFi%2B43Qu7AcWtYI6KepAMFEncvHTiZGBO9F3m92HhyHFgp7n%2F%2FfJfsGSHPpEsXs53LtU5u82IppFlf03h0o6CnsHo4kIY2Wy0QzoE3xSmuNMrRXaHeDIJohdRn9VrHEGtmK%2BiH3yGR4NOBN12al9zvsF0Gq3sprW1TC3s6hLHCDCRrEwuu1UDZtJ7ahAVJw%2B8Yywl7pZBaXZ%2FQhD9%2BXYr1vsx1Xj1%2BYrroV15iLuy80lwU4Ivjm5eQxRvkNZtrEvGKlw6sXTv0gP9lgjeIwmoB9OdcndLctF%2Fnct4nZ7ITyE4PjarXW10gxwwxALt7HYtGqfz9HZZ41dB3iwn0gwhbvgOqeR5HXJW68EiPU%2B1Sm3%2FpRt0f7q3dtbQ8%2Fw83HwCozQcru3sdD6CnTMg7Q4GC90b07q%2Fnb%2FOvQCXZJpSxUbA4vFgaPbqfkTPhxO5gig%2BZs71GCLe%2F4CuIjDhEPsRkgwNlZyvQIMjbwglwHMNrvmsEGOqUB2%2FRAlwnaXSJAg18OVvWXvbgWObPea7OHzszC3ZcjYKb8vL2Ko7179N9JTpuhU3AdRAGy1MMQ%2F%2F9prgtoq4msYUvQg9IGq94tmpj8gJ%2Fxj%2FyuUjI6KCuAVnS8XetSTGttGFUMf%2FZwiaEnNFl1wPFX3Zq%2F46O1y%2F6Kn6TKRltDpbFsEcEo%2Fqe56l3o2tTq%2F8Zan0bCf8DSEFaxX1%2F8AYdqpvEb6rQ9&X-Amz-Signature=3b145a4dada5e3f0ef91ac173a965590ff3c9730ef695ea7f0b758d292e17eae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3D5EHWI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFH6i3XcDl15ZLLw82qKTbX4QH6Pk6hrW5HRlA9Qz4h7AiEAmCPLZFHo8jhY8M3QhwpP4%2B01Csk2NebBApvGWpcB5eIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNAakTbVCPznzpR2LSrcA4eclXpHaAlrGbM%2FdIaKkqQXrlBovxBJ6BbBn8WYjtrVxD8RX4nuW5WJVmg7se%2BPz9dR26xJ2jnjORsHUWnr0dOacbGbK4WapVrx54uFOjb%2FdhstRraiOvgjpoVytmgkkUh3IQmbpvfSrPSlDtJ1BkFi%2B43Qu7AcWtYI6KepAMFEncvHTiZGBO9F3m92HhyHFgp7n%2F%2FfJfsGSHPpEsXs53LtU5u82IppFlf03h0o6CnsHo4kIY2Wy0QzoE3xSmuNMrRXaHeDIJohdRn9VrHEGtmK%2BiH3yGR4NOBN12al9zvsF0Gq3sprW1TC3s6hLHCDCRrEwuu1UDZtJ7ahAVJw%2B8Yywl7pZBaXZ%2FQhD9%2BXYr1vsx1Xj1%2BYrroV15iLuy80lwU4Ivjm5eQxRvkNZtrEvGKlw6sXTv0gP9lgjeIwmoB9OdcndLctF%2Fnct4nZ7ITyE4PjarXW10gxwwxALt7HYtGqfz9HZZ41dB3iwn0gwhbvgOqeR5HXJW68EiPU%2B1Sm3%2FpRt0f7q3dtbQ8%2Fw83HwCozQcru3sdD6CnTMg7Q4GC90b07q%2Fnb%2FOvQCXZJpSxUbA4vFgaPbqfkTPhxO5gig%2BZs71GCLe%2F4CuIjDhEPsRkgwNlZyvQIMjbwglwHMNrvmsEGOqUB2%2FRAlwnaXSJAg18OVvWXvbgWObPea7OHzszC3ZcjYKb8vL2Ko7179N9JTpuhU3AdRAGy1MMQ%2F%2F9prgtoq4msYUvQg9IGq94tmpj8gJ%2Fxj%2FyuUjI6KCuAVnS8XetSTGttGFUMf%2FZwiaEnNFl1wPFX3Zq%2F46O1y%2F6Kn6TKRltDpbFsEcEo%2Fqe56l3o2tTq%2F8Zan0bCf8DSEFaxX1%2F8AYdqpvEb6rQ9&X-Amz-Signature=c6db1631d9152f6039ec28906b4f638c41428eddb0f201be23af4257a375d2e4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3D5EHWI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFH6i3XcDl15ZLLw82qKTbX4QH6Pk6hrW5HRlA9Qz4h7AiEAmCPLZFHo8jhY8M3QhwpP4%2B01Csk2NebBApvGWpcB5eIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNAakTbVCPznzpR2LSrcA4eclXpHaAlrGbM%2FdIaKkqQXrlBovxBJ6BbBn8WYjtrVxD8RX4nuW5WJVmg7se%2BPz9dR26xJ2jnjORsHUWnr0dOacbGbK4WapVrx54uFOjb%2FdhstRraiOvgjpoVytmgkkUh3IQmbpvfSrPSlDtJ1BkFi%2B43Qu7AcWtYI6KepAMFEncvHTiZGBO9F3m92HhyHFgp7n%2F%2FfJfsGSHPpEsXs53LtU5u82IppFlf03h0o6CnsHo4kIY2Wy0QzoE3xSmuNMrRXaHeDIJohdRn9VrHEGtmK%2BiH3yGR4NOBN12al9zvsF0Gq3sprW1TC3s6hLHCDCRrEwuu1UDZtJ7ahAVJw%2B8Yywl7pZBaXZ%2FQhD9%2BXYr1vsx1Xj1%2BYrroV15iLuy80lwU4Ivjm5eQxRvkNZtrEvGKlw6sXTv0gP9lgjeIwmoB9OdcndLctF%2Fnct4nZ7ITyE4PjarXW10gxwwxALt7HYtGqfz9HZZ41dB3iwn0gwhbvgOqeR5HXJW68EiPU%2B1Sm3%2FpRt0f7q3dtbQ8%2Fw83HwCozQcru3sdD6CnTMg7Q4GC90b07q%2Fnb%2FOvQCXZJpSxUbA4vFgaPbqfkTPhxO5gig%2BZs71GCLe%2F4CuIjDhEPsRkgwNlZyvQIMjbwglwHMNrvmsEGOqUB2%2FRAlwnaXSJAg18OVvWXvbgWObPea7OHzszC3ZcjYKb8vL2Ko7179N9JTpuhU3AdRAGy1MMQ%2F%2F9prgtoq4msYUvQg9IGq94tmpj8gJ%2Fxj%2FyuUjI6KCuAVnS8XetSTGttGFUMf%2FZwiaEnNFl1wPFX3Zq%2F46O1y%2F6Kn6TKRltDpbFsEcEo%2Fqe56l3o2tTq%2F8Zan0bCf8DSEFaxX1%2F8AYdqpvEb6rQ9&X-Amz-Signature=bc197fff70e8680147845a27154c3e6ddeadc9ad0107a002d3cff3bce8f6bbd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3D5EHWI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFH6i3XcDl15ZLLw82qKTbX4QH6Pk6hrW5HRlA9Qz4h7AiEAmCPLZFHo8jhY8M3QhwpP4%2B01Csk2NebBApvGWpcB5eIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNAakTbVCPznzpR2LSrcA4eclXpHaAlrGbM%2FdIaKkqQXrlBovxBJ6BbBn8WYjtrVxD8RX4nuW5WJVmg7se%2BPz9dR26xJ2jnjORsHUWnr0dOacbGbK4WapVrx54uFOjb%2FdhstRraiOvgjpoVytmgkkUh3IQmbpvfSrPSlDtJ1BkFi%2B43Qu7AcWtYI6KepAMFEncvHTiZGBO9F3m92HhyHFgp7n%2F%2FfJfsGSHPpEsXs53LtU5u82IppFlf03h0o6CnsHo4kIY2Wy0QzoE3xSmuNMrRXaHeDIJohdRn9VrHEGtmK%2BiH3yGR4NOBN12al9zvsF0Gq3sprW1TC3s6hLHCDCRrEwuu1UDZtJ7ahAVJw%2B8Yywl7pZBaXZ%2FQhD9%2BXYr1vsx1Xj1%2BYrroV15iLuy80lwU4Ivjm5eQxRvkNZtrEvGKlw6sXTv0gP9lgjeIwmoB9OdcndLctF%2Fnct4nZ7ITyE4PjarXW10gxwwxALt7HYtGqfz9HZZ41dB3iwn0gwhbvgOqeR5HXJW68EiPU%2B1Sm3%2FpRt0f7q3dtbQ8%2Fw83HwCozQcru3sdD6CnTMg7Q4GC90b07q%2Fnb%2FOvQCXZJpSxUbA4vFgaPbqfkTPhxO5gig%2BZs71GCLe%2F4CuIjDhEPsRkgwNlZyvQIMjbwglwHMNrvmsEGOqUB2%2FRAlwnaXSJAg18OVvWXvbgWObPea7OHzszC3ZcjYKb8vL2Ko7179N9JTpuhU3AdRAGy1MMQ%2F%2F9prgtoq4msYUvQg9IGq94tmpj8gJ%2Fxj%2FyuUjI6KCuAVnS8XetSTGttGFUMf%2FZwiaEnNFl1wPFX3Zq%2F46O1y%2F6Kn6TKRltDpbFsEcEo%2Fqe56l3o2tTq%2F8Zan0bCf8DSEFaxX1%2F8AYdqpvEb6rQ9&X-Amz-Signature=c8ec30d03e4ea1d57f69f34ab7d94adb3b5699c58507d351066eeb55543f3f66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3D5EHWI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFH6i3XcDl15ZLLw82qKTbX4QH6Pk6hrW5HRlA9Qz4h7AiEAmCPLZFHo8jhY8M3QhwpP4%2B01Csk2NebBApvGWpcB5eIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNAakTbVCPznzpR2LSrcA4eclXpHaAlrGbM%2FdIaKkqQXrlBovxBJ6BbBn8WYjtrVxD8RX4nuW5WJVmg7se%2BPz9dR26xJ2jnjORsHUWnr0dOacbGbK4WapVrx54uFOjb%2FdhstRraiOvgjpoVytmgkkUh3IQmbpvfSrPSlDtJ1BkFi%2B43Qu7AcWtYI6KepAMFEncvHTiZGBO9F3m92HhyHFgp7n%2F%2FfJfsGSHPpEsXs53LtU5u82IppFlf03h0o6CnsHo4kIY2Wy0QzoE3xSmuNMrRXaHeDIJohdRn9VrHEGtmK%2BiH3yGR4NOBN12al9zvsF0Gq3sprW1TC3s6hLHCDCRrEwuu1UDZtJ7ahAVJw%2B8Yywl7pZBaXZ%2FQhD9%2BXYr1vsx1Xj1%2BYrroV15iLuy80lwU4Ivjm5eQxRvkNZtrEvGKlw6sXTv0gP9lgjeIwmoB9OdcndLctF%2Fnct4nZ7ITyE4PjarXW10gxwwxALt7HYtGqfz9HZZ41dB3iwn0gwhbvgOqeR5HXJW68EiPU%2B1Sm3%2FpRt0f7q3dtbQ8%2Fw83HwCozQcru3sdD6CnTMg7Q4GC90b07q%2Fnb%2FOvQCXZJpSxUbA4vFgaPbqfkTPhxO5gig%2BZs71GCLe%2F4CuIjDhEPsRkgwNlZyvQIMjbwglwHMNrvmsEGOqUB2%2FRAlwnaXSJAg18OVvWXvbgWObPea7OHzszC3ZcjYKb8vL2Ko7179N9JTpuhU3AdRAGy1MMQ%2F%2F9prgtoq4msYUvQg9IGq94tmpj8gJ%2Fxj%2FyuUjI6KCuAVnS8XetSTGttGFUMf%2FZwiaEnNFl1wPFX3Zq%2F46O1y%2F6Kn6TKRltDpbFsEcEo%2Fqe56l3o2tTq%2F8Zan0bCf8DSEFaxX1%2F8AYdqpvEb6rQ9&X-Amz-Signature=015635e00e8fd6b31912bb5d837776f27e9ff229af2678fb2689f8ae1e5cdb76&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
