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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYQ5NM6%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCuXVxl7lM3hpc9F3MJD3X4tqAxifVKg0QFtb81H7HZdQIhAMJ2%2FTrN3gbXxXYtf5gE5vhB57rtRQDK3bdLLK0GUi%2FVKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmzRQ88FopfeJ1CxIq3AMD6%2Fe7%2FenoNSQVxLNNO3usYcpNC9C6h0%2FW3O4ojMr0jSNwf26mWU0LzVGy%2BOyKOGRGMxLwoludwu7qKx0BVRzlfAwIC33ut3256x%2BW9bH74cZdAOHIJ5MkKT4J5iiji2mycWcLN6yjtlwQYmzNzVUhd%2B2R4RF7nk28o99QFvbVi7RervTw%2FNNoQxv6xagtKYnhmUAGNAQhfN%2BgK7V2amG7XG8RhvkBp%2BEq3aDPVSxZg9t3qflCkmr1zl2x53MnC1C8QvKfAj5p3XrquH%2FFIZeh3e4PWSPMEXGqU4BR0jLLCxUgBI37z6rZksqslpBQ56ACc98rvkPxKm4gyoWZCDsL7g5sywlSjzW1owRgP%2FK7UJKxLLPYh7CGI%2FKUTk2%2F4wUTx3O53yWA4KAhNMkiM3U3B6OKQaOT61DO1XLp%2FPMQJrMXif0kcE5Tpz5ipcgbylItVg9gOqETLjmIRzbMdZQJrvz7nBWD9QwTglLHG9sY6MbOCc7yctK6%2BVD6wH0NRujLp%2B9KZk2ykwW3Ofuqw3sRXOZtQE9a8M0zdDKHtX1zEaidgGW9EcQpmJDvHcTL3jLkohk%2BNuJaqKTmBtVG%2FGPNw88Y9IrD8JEtpSxuKvQRymRYYPB%2FUn40VUcDdTD32OLRBjqkAQIjxrU%2Bj7vLAHhD%2BMoT5gRoCBOPkv6R0AGmEZJjNI%2FJON5BqtgxO2axpL0PbtwRgEvAptMOotWK%2BbVU7YGUNyHtnA1oAmD5lDq15DMX6PZtNqphoB2TyFPMPCVLcNJrikgWN5L378yNLn5hCDGHwN9eKzqQoOj9apryaEagNplRUAv0%2FjBHM3gVai3IA32%2BlNM9%2F1lVjeicTKq%2BlJpBHxd65LKK&X-Amz-Signature=3031970c7bebc8a5ea521a75ce34d93f1e98f85b160578381db0f1a42c66ba3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYQ5NM6%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCuXVxl7lM3hpc9F3MJD3X4tqAxifVKg0QFtb81H7HZdQIhAMJ2%2FTrN3gbXxXYtf5gE5vhB57rtRQDK3bdLLK0GUi%2FVKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmzRQ88FopfeJ1CxIq3AMD6%2Fe7%2FenoNSQVxLNNO3usYcpNC9C6h0%2FW3O4ojMr0jSNwf26mWU0LzVGy%2BOyKOGRGMxLwoludwu7qKx0BVRzlfAwIC33ut3256x%2BW9bH74cZdAOHIJ5MkKT4J5iiji2mycWcLN6yjtlwQYmzNzVUhd%2B2R4RF7nk28o99QFvbVi7RervTw%2FNNoQxv6xagtKYnhmUAGNAQhfN%2BgK7V2amG7XG8RhvkBp%2BEq3aDPVSxZg9t3qflCkmr1zl2x53MnC1C8QvKfAj5p3XrquH%2FFIZeh3e4PWSPMEXGqU4BR0jLLCxUgBI37z6rZksqslpBQ56ACc98rvkPxKm4gyoWZCDsL7g5sywlSjzW1owRgP%2FK7UJKxLLPYh7CGI%2FKUTk2%2F4wUTx3O53yWA4KAhNMkiM3U3B6OKQaOT61DO1XLp%2FPMQJrMXif0kcE5Tpz5ipcgbylItVg9gOqETLjmIRzbMdZQJrvz7nBWD9QwTglLHG9sY6MbOCc7yctK6%2BVD6wH0NRujLp%2B9KZk2ykwW3Ofuqw3sRXOZtQE9a8M0zdDKHtX1zEaidgGW9EcQpmJDvHcTL3jLkohk%2BNuJaqKTmBtVG%2FGPNw88Y9IrD8JEtpSxuKvQRymRYYPB%2FUn40VUcDdTD32OLRBjqkAQIjxrU%2Bj7vLAHhD%2BMoT5gRoCBOPkv6R0AGmEZJjNI%2FJON5BqtgxO2axpL0PbtwRgEvAptMOotWK%2BbVU7YGUNyHtnA1oAmD5lDq15DMX6PZtNqphoB2TyFPMPCVLcNJrikgWN5L378yNLn5hCDGHwN9eKzqQoOj9apryaEagNplRUAv0%2FjBHM3gVai3IA32%2BlNM9%2F1lVjeicTKq%2BlJpBHxd65LKK&X-Amz-Signature=4ee6d2c7ce7f5abd6083c38501a8e63f19e8d5c7ad7f4119778cf54096a49db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYQ5NM6%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCuXVxl7lM3hpc9F3MJD3X4tqAxifVKg0QFtb81H7HZdQIhAMJ2%2FTrN3gbXxXYtf5gE5vhB57rtRQDK3bdLLK0GUi%2FVKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmzRQ88FopfeJ1CxIq3AMD6%2Fe7%2FenoNSQVxLNNO3usYcpNC9C6h0%2FW3O4ojMr0jSNwf26mWU0LzVGy%2BOyKOGRGMxLwoludwu7qKx0BVRzlfAwIC33ut3256x%2BW9bH74cZdAOHIJ5MkKT4J5iiji2mycWcLN6yjtlwQYmzNzVUhd%2B2R4RF7nk28o99QFvbVi7RervTw%2FNNoQxv6xagtKYnhmUAGNAQhfN%2BgK7V2amG7XG8RhvkBp%2BEq3aDPVSxZg9t3qflCkmr1zl2x53MnC1C8QvKfAj5p3XrquH%2FFIZeh3e4PWSPMEXGqU4BR0jLLCxUgBI37z6rZksqslpBQ56ACc98rvkPxKm4gyoWZCDsL7g5sywlSjzW1owRgP%2FK7UJKxLLPYh7CGI%2FKUTk2%2F4wUTx3O53yWA4KAhNMkiM3U3B6OKQaOT61DO1XLp%2FPMQJrMXif0kcE5Tpz5ipcgbylItVg9gOqETLjmIRzbMdZQJrvz7nBWD9QwTglLHG9sY6MbOCc7yctK6%2BVD6wH0NRujLp%2B9KZk2ykwW3Ofuqw3sRXOZtQE9a8M0zdDKHtX1zEaidgGW9EcQpmJDvHcTL3jLkohk%2BNuJaqKTmBtVG%2FGPNw88Y9IrD8JEtpSxuKvQRymRYYPB%2FUn40VUcDdTD32OLRBjqkAQIjxrU%2Bj7vLAHhD%2BMoT5gRoCBOPkv6R0AGmEZJjNI%2FJON5BqtgxO2axpL0PbtwRgEvAptMOotWK%2BbVU7YGUNyHtnA1oAmD5lDq15DMX6PZtNqphoB2TyFPMPCVLcNJrikgWN5L378yNLn5hCDGHwN9eKzqQoOj9apryaEagNplRUAv0%2FjBHM3gVai3IA32%2BlNM9%2F1lVjeicTKq%2BlJpBHxd65LKK&X-Amz-Signature=205922e9976120ab9412f4c999719d59ce0dd1c30c4c6693f66cdc60d0bed2cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYQ5NM6%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCuXVxl7lM3hpc9F3MJD3X4tqAxifVKg0QFtb81H7HZdQIhAMJ2%2FTrN3gbXxXYtf5gE5vhB57rtRQDK3bdLLK0GUi%2FVKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmzRQ88FopfeJ1CxIq3AMD6%2Fe7%2FenoNSQVxLNNO3usYcpNC9C6h0%2FW3O4ojMr0jSNwf26mWU0LzVGy%2BOyKOGRGMxLwoludwu7qKx0BVRzlfAwIC33ut3256x%2BW9bH74cZdAOHIJ5MkKT4J5iiji2mycWcLN6yjtlwQYmzNzVUhd%2B2R4RF7nk28o99QFvbVi7RervTw%2FNNoQxv6xagtKYnhmUAGNAQhfN%2BgK7V2amG7XG8RhvkBp%2BEq3aDPVSxZg9t3qflCkmr1zl2x53MnC1C8QvKfAj5p3XrquH%2FFIZeh3e4PWSPMEXGqU4BR0jLLCxUgBI37z6rZksqslpBQ56ACc98rvkPxKm4gyoWZCDsL7g5sywlSjzW1owRgP%2FK7UJKxLLPYh7CGI%2FKUTk2%2F4wUTx3O53yWA4KAhNMkiM3U3B6OKQaOT61DO1XLp%2FPMQJrMXif0kcE5Tpz5ipcgbylItVg9gOqETLjmIRzbMdZQJrvz7nBWD9QwTglLHG9sY6MbOCc7yctK6%2BVD6wH0NRujLp%2B9KZk2ykwW3Ofuqw3sRXOZtQE9a8M0zdDKHtX1zEaidgGW9EcQpmJDvHcTL3jLkohk%2BNuJaqKTmBtVG%2FGPNw88Y9IrD8JEtpSxuKvQRymRYYPB%2FUn40VUcDdTD32OLRBjqkAQIjxrU%2Bj7vLAHhD%2BMoT5gRoCBOPkv6R0AGmEZJjNI%2FJON5BqtgxO2axpL0PbtwRgEvAptMOotWK%2BbVU7YGUNyHtnA1oAmD5lDq15DMX6PZtNqphoB2TyFPMPCVLcNJrikgWN5L378yNLn5hCDGHwN9eKzqQoOj9apryaEagNplRUAv0%2FjBHM3gVai3IA32%2BlNM9%2F1lVjeicTKq%2BlJpBHxd65LKK&X-Amz-Signature=f92b7a8025f15567765fd46e2a75160b976a96e8c93b1e5d0212810de81a436c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYQ5NM6%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCuXVxl7lM3hpc9F3MJD3X4tqAxifVKg0QFtb81H7HZdQIhAMJ2%2FTrN3gbXxXYtf5gE5vhB57rtRQDK3bdLLK0GUi%2FVKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmzRQ88FopfeJ1CxIq3AMD6%2Fe7%2FenoNSQVxLNNO3usYcpNC9C6h0%2FW3O4ojMr0jSNwf26mWU0LzVGy%2BOyKOGRGMxLwoludwu7qKx0BVRzlfAwIC33ut3256x%2BW9bH74cZdAOHIJ5MkKT4J5iiji2mycWcLN6yjtlwQYmzNzVUhd%2B2R4RF7nk28o99QFvbVi7RervTw%2FNNoQxv6xagtKYnhmUAGNAQhfN%2BgK7V2amG7XG8RhvkBp%2BEq3aDPVSxZg9t3qflCkmr1zl2x53MnC1C8QvKfAj5p3XrquH%2FFIZeh3e4PWSPMEXGqU4BR0jLLCxUgBI37z6rZksqslpBQ56ACc98rvkPxKm4gyoWZCDsL7g5sywlSjzW1owRgP%2FK7UJKxLLPYh7CGI%2FKUTk2%2F4wUTx3O53yWA4KAhNMkiM3U3B6OKQaOT61DO1XLp%2FPMQJrMXif0kcE5Tpz5ipcgbylItVg9gOqETLjmIRzbMdZQJrvz7nBWD9QwTglLHG9sY6MbOCc7yctK6%2BVD6wH0NRujLp%2B9KZk2ykwW3Ofuqw3sRXOZtQE9a8M0zdDKHtX1zEaidgGW9EcQpmJDvHcTL3jLkohk%2BNuJaqKTmBtVG%2FGPNw88Y9IrD8JEtpSxuKvQRymRYYPB%2FUn40VUcDdTD32OLRBjqkAQIjxrU%2Bj7vLAHhD%2BMoT5gRoCBOPkv6R0AGmEZJjNI%2FJON5BqtgxO2axpL0PbtwRgEvAptMOotWK%2BbVU7YGUNyHtnA1oAmD5lDq15DMX6PZtNqphoB2TyFPMPCVLcNJrikgWN5L378yNLn5hCDGHwN9eKzqQoOj9apryaEagNplRUAv0%2FjBHM3gVai3IA32%2BlNM9%2F1lVjeicTKq%2BlJpBHxd65LKK&X-Amz-Signature=2f4ee26b10e5592656c30b37ef73494256a39ed7291d61d51d6e92b8fc54ce28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
