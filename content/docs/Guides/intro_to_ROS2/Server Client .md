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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3BRMP5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC0w9%2B3Gd6FVgiqxUHaX%2FSRGCzLlr6yeucrd7IywHmWPAIgXwx8P3jN9U7YcQ2qMQpkBq2%2Bsct9%2FOlcfsXT7Nm7Tu4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM480%2FS3LjMCE529YyrcAw6ebxDAw3p2wGpgSumOe0RBPI0MZDkgM3JoJRrEExaDcwAlSaCF%2F6pWo4Ukb%2Fs3xvY6zBj7rUZ3HP%2BcPRzk5E8wsBBzFrqH3hNv%2BcnFBu8lyEsG6gHCZDd4GAmQtmBtazGnFY6vW84tkF9KbI%2BK2kA2AFaxmX8Yt6TW1zNT%2BT2wWmJgAxPFUWnunRaNw9hcgajy1x2g44LHfPWorvV5TVs%2BN9CWV6X%2FAS%2BWEIG8z6GZADEzQEKsB%2B7sl8Wtr74SuxIlEru8TGmXkJged%2BvkVRDTikgEWuyMpZaC6bT7B%2FjIs0dpKYN7NkQ0G0jBnEMlDNbZPYSe1UWwkYprpdvl8FkUdkEbb%2FFVwhevnbsFkANIAZoHIYDYvbOKkDDuVuTdH2OVdRrFiw1GVGyQsh9bXkso7H%2BftdHoCn9Vpt1K04e%2FBu%2BpPXRPiJBiIVYipM2X%2BkhMwVWxpxEyjfV1mz3MWBFRufMSwStrf%2F8PCub8vKkDdkPQrQZs9jrI8MAyoXDPy5TP2KFurf96JmTutdOnEqOcCI8M8Wo2ZfnUEWvhMNXlRxe1OdkC5Rw%2FixyWeu2MTMvnR6UoY07IEwwr%2Bhlnowy8ioiReuK1rd4vtDP4yZgeg%2FhqJV8liVexUoyQMLeOuMEGOqUBb5WppPbCw1lWZPSgx7qoOcFAlhSHQqZaClWkkxbsSwc6zFl58ROH2sPhcQ1eOm02sCAtMMjf%2BLrAmDjGFcD9wr%2B1JNPfR85HugLZS11k7H7Ptxy9NBY0cXJdstDJwyVhd1MoegXYVsAYerLBWZU7wv7fkLzvtbTJot954KuzmfgPX2rluiVY6W152y4NNswkfzpBUJHFFmMmUZX1BiiKS56%2B6tIm&X-Amz-Signature=4a3f24bed2884707dc23ad1ba5c1cd1d282e759ee68c7b106f3a9aceaaa3867a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3BRMP5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC0w9%2B3Gd6FVgiqxUHaX%2FSRGCzLlr6yeucrd7IywHmWPAIgXwx8P3jN9U7YcQ2qMQpkBq2%2Bsct9%2FOlcfsXT7Nm7Tu4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM480%2FS3LjMCE529YyrcAw6ebxDAw3p2wGpgSumOe0RBPI0MZDkgM3JoJRrEExaDcwAlSaCF%2F6pWo4Ukb%2Fs3xvY6zBj7rUZ3HP%2BcPRzk5E8wsBBzFrqH3hNv%2BcnFBu8lyEsG6gHCZDd4GAmQtmBtazGnFY6vW84tkF9KbI%2BK2kA2AFaxmX8Yt6TW1zNT%2BT2wWmJgAxPFUWnunRaNw9hcgajy1x2g44LHfPWorvV5TVs%2BN9CWV6X%2FAS%2BWEIG8z6GZADEzQEKsB%2B7sl8Wtr74SuxIlEru8TGmXkJged%2BvkVRDTikgEWuyMpZaC6bT7B%2FjIs0dpKYN7NkQ0G0jBnEMlDNbZPYSe1UWwkYprpdvl8FkUdkEbb%2FFVwhevnbsFkANIAZoHIYDYvbOKkDDuVuTdH2OVdRrFiw1GVGyQsh9bXkso7H%2BftdHoCn9Vpt1K04e%2FBu%2BpPXRPiJBiIVYipM2X%2BkhMwVWxpxEyjfV1mz3MWBFRufMSwStrf%2F8PCub8vKkDdkPQrQZs9jrI8MAyoXDPy5TP2KFurf96JmTutdOnEqOcCI8M8Wo2ZfnUEWvhMNXlRxe1OdkC5Rw%2FixyWeu2MTMvnR6UoY07IEwwr%2Bhlnowy8ioiReuK1rd4vtDP4yZgeg%2FhqJV8liVexUoyQMLeOuMEGOqUBb5WppPbCw1lWZPSgx7qoOcFAlhSHQqZaClWkkxbsSwc6zFl58ROH2sPhcQ1eOm02sCAtMMjf%2BLrAmDjGFcD9wr%2B1JNPfR85HugLZS11k7H7Ptxy9NBY0cXJdstDJwyVhd1MoegXYVsAYerLBWZU7wv7fkLzvtbTJot954KuzmfgPX2rluiVY6W152y4NNswkfzpBUJHFFmMmUZX1BiiKS56%2B6tIm&X-Amz-Signature=1a6e19fcb0dd5ea8730c04b8d8af46c7a357f9aa301c149bad41796088376d09&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3BRMP5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC0w9%2B3Gd6FVgiqxUHaX%2FSRGCzLlr6yeucrd7IywHmWPAIgXwx8P3jN9U7YcQ2qMQpkBq2%2Bsct9%2FOlcfsXT7Nm7Tu4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM480%2FS3LjMCE529YyrcAw6ebxDAw3p2wGpgSumOe0RBPI0MZDkgM3JoJRrEExaDcwAlSaCF%2F6pWo4Ukb%2Fs3xvY6zBj7rUZ3HP%2BcPRzk5E8wsBBzFrqH3hNv%2BcnFBu8lyEsG6gHCZDd4GAmQtmBtazGnFY6vW84tkF9KbI%2BK2kA2AFaxmX8Yt6TW1zNT%2BT2wWmJgAxPFUWnunRaNw9hcgajy1x2g44LHfPWorvV5TVs%2BN9CWV6X%2FAS%2BWEIG8z6GZADEzQEKsB%2B7sl8Wtr74SuxIlEru8TGmXkJged%2BvkVRDTikgEWuyMpZaC6bT7B%2FjIs0dpKYN7NkQ0G0jBnEMlDNbZPYSe1UWwkYprpdvl8FkUdkEbb%2FFVwhevnbsFkANIAZoHIYDYvbOKkDDuVuTdH2OVdRrFiw1GVGyQsh9bXkso7H%2BftdHoCn9Vpt1K04e%2FBu%2BpPXRPiJBiIVYipM2X%2BkhMwVWxpxEyjfV1mz3MWBFRufMSwStrf%2F8PCub8vKkDdkPQrQZs9jrI8MAyoXDPy5TP2KFurf96JmTutdOnEqOcCI8M8Wo2ZfnUEWvhMNXlRxe1OdkC5Rw%2FixyWeu2MTMvnR6UoY07IEwwr%2Bhlnowy8ioiReuK1rd4vtDP4yZgeg%2FhqJV8liVexUoyQMLeOuMEGOqUBb5WppPbCw1lWZPSgx7qoOcFAlhSHQqZaClWkkxbsSwc6zFl58ROH2sPhcQ1eOm02sCAtMMjf%2BLrAmDjGFcD9wr%2B1JNPfR85HugLZS11k7H7Ptxy9NBY0cXJdstDJwyVhd1MoegXYVsAYerLBWZU7wv7fkLzvtbTJot954KuzmfgPX2rluiVY6W152y4NNswkfzpBUJHFFmMmUZX1BiiKS56%2B6tIm&X-Amz-Signature=83d7357c50bafd49201cd1082cd0c745f2a1e4ff27e3d85fc0c0fb41d8c2b5bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3BRMP5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC0w9%2B3Gd6FVgiqxUHaX%2FSRGCzLlr6yeucrd7IywHmWPAIgXwx8P3jN9U7YcQ2qMQpkBq2%2Bsct9%2FOlcfsXT7Nm7Tu4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM480%2FS3LjMCE529YyrcAw6ebxDAw3p2wGpgSumOe0RBPI0MZDkgM3JoJRrEExaDcwAlSaCF%2F6pWo4Ukb%2Fs3xvY6zBj7rUZ3HP%2BcPRzk5E8wsBBzFrqH3hNv%2BcnFBu8lyEsG6gHCZDd4GAmQtmBtazGnFY6vW84tkF9KbI%2BK2kA2AFaxmX8Yt6TW1zNT%2BT2wWmJgAxPFUWnunRaNw9hcgajy1x2g44LHfPWorvV5TVs%2BN9CWV6X%2FAS%2BWEIG8z6GZADEzQEKsB%2B7sl8Wtr74SuxIlEru8TGmXkJged%2BvkVRDTikgEWuyMpZaC6bT7B%2FjIs0dpKYN7NkQ0G0jBnEMlDNbZPYSe1UWwkYprpdvl8FkUdkEbb%2FFVwhevnbsFkANIAZoHIYDYvbOKkDDuVuTdH2OVdRrFiw1GVGyQsh9bXkso7H%2BftdHoCn9Vpt1K04e%2FBu%2BpPXRPiJBiIVYipM2X%2BkhMwVWxpxEyjfV1mz3MWBFRufMSwStrf%2F8PCub8vKkDdkPQrQZs9jrI8MAyoXDPy5TP2KFurf96JmTutdOnEqOcCI8M8Wo2ZfnUEWvhMNXlRxe1OdkC5Rw%2FixyWeu2MTMvnR6UoY07IEwwr%2Bhlnowy8ioiReuK1rd4vtDP4yZgeg%2FhqJV8liVexUoyQMLeOuMEGOqUBb5WppPbCw1lWZPSgx7qoOcFAlhSHQqZaClWkkxbsSwc6zFl58ROH2sPhcQ1eOm02sCAtMMjf%2BLrAmDjGFcD9wr%2B1JNPfR85HugLZS11k7H7Ptxy9NBY0cXJdstDJwyVhd1MoegXYVsAYerLBWZU7wv7fkLzvtbTJot954KuzmfgPX2rluiVY6W152y4NNswkfzpBUJHFFmMmUZX1BiiKS56%2B6tIm&X-Amz-Signature=01ca9d5680d53986da076d6d54f0e63acd935acca465bd710eae4525c6f18c60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3BRMP5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC0w9%2B3Gd6FVgiqxUHaX%2FSRGCzLlr6yeucrd7IywHmWPAIgXwx8P3jN9U7YcQ2qMQpkBq2%2Bsct9%2FOlcfsXT7Nm7Tu4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM480%2FS3LjMCE529YyrcAw6ebxDAw3p2wGpgSumOe0RBPI0MZDkgM3JoJRrEExaDcwAlSaCF%2F6pWo4Ukb%2Fs3xvY6zBj7rUZ3HP%2BcPRzk5E8wsBBzFrqH3hNv%2BcnFBu8lyEsG6gHCZDd4GAmQtmBtazGnFY6vW84tkF9KbI%2BK2kA2AFaxmX8Yt6TW1zNT%2BT2wWmJgAxPFUWnunRaNw9hcgajy1x2g44LHfPWorvV5TVs%2BN9CWV6X%2FAS%2BWEIG8z6GZADEzQEKsB%2B7sl8Wtr74SuxIlEru8TGmXkJged%2BvkVRDTikgEWuyMpZaC6bT7B%2FjIs0dpKYN7NkQ0G0jBnEMlDNbZPYSe1UWwkYprpdvl8FkUdkEbb%2FFVwhevnbsFkANIAZoHIYDYvbOKkDDuVuTdH2OVdRrFiw1GVGyQsh9bXkso7H%2BftdHoCn9Vpt1K04e%2FBu%2BpPXRPiJBiIVYipM2X%2BkhMwVWxpxEyjfV1mz3MWBFRufMSwStrf%2F8PCub8vKkDdkPQrQZs9jrI8MAyoXDPy5TP2KFurf96JmTutdOnEqOcCI8M8Wo2ZfnUEWvhMNXlRxe1OdkC5Rw%2FixyWeu2MTMvnR6UoY07IEwwr%2Bhlnowy8ioiReuK1rd4vtDP4yZgeg%2FhqJV8liVexUoyQMLeOuMEGOqUBb5WppPbCw1lWZPSgx7qoOcFAlhSHQqZaClWkkxbsSwc6zFl58ROH2sPhcQ1eOm02sCAtMMjf%2BLrAmDjGFcD9wr%2B1JNPfR85HugLZS11k7H7Ptxy9NBY0cXJdstDJwyVhd1MoegXYVsAYerLBWZU7wv7fkLzvtbTJot954KuzmfgPX2rluiVY6W152y4NNswkfzpBUJHFFmMmUZX1BiiKS56%2B6tIm&X-Amz-Signature=f018f8a01369447adb5cb3d7867f443932a974128614073533a8e0bb2ce6d8d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
