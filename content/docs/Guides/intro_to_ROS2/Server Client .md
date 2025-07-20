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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PIGHZW3%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGMUFlqsMHisN6jMOxiGl77%2Bij60EWisoyZwL%2BB1LtQAIgDhJHNMU%2Bfxg6I9MxAVu1%2FGHUCrijKj6dVtXDNfjEYfAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLYAn9PG4za3Ngc4CrcA2Y0dVw3cSDVeUEjJOhaF3DficRTL26lGcpDdyc8aksJkldt37zO2nboz%2BYs%2FhTTFhFNRwavlwxFPPp1VtHsTSkrf16siVytlihe2PZoXAbOKxw0ouzj7nEMwAmUaGfrM6grLz48keZe8%2F5n3xLV%2B1HNszztCzQQO2ud8bP2zwL9qtMeo5M1nPfwlrffUWHNd7RHDkk8dxrerlFsFIpq9VvOkEio%2F8EXZ%2Fxd12SOcXx6RdS6byl%2Bap6PNLnhAtU460Bscv%2BsDhEb4EduplFNATtM1NBLw%2FRzHC11xZ2%2BsP7eqiE2E0jCGWbhEp7BW%2FP%2FoOhX6tavJHmTJwBI6yNuzn%2BvyThm5UUXuhpEd6vSs6mwlpLF0LUEy7qc5pTCZ%2F6ubwX4AXlCpqA8R%2F6Df%2BJ9slFfw8Dp4Q413OVxhhSxY7NDQS22%2BUcfEaDbO3pba3k44k3WS9G0kOWGQtLxEyNJHeCousYQQgUOOdHzL%2BEgvvb323Q%2F3jQvIUz5Juz6RlroiQNJLvBUm1sktHPAryHD2t5MLEUwYCkk5q7OQA96a%2FQGIdozYm5Pvma%2F1RKinGWGjPwhkUmCuw0LhOvYzOXMZpxD3GmCb%2FqfavmUz4PmQcxHER7eDp0y%2BUdEzM5TMLTU88MGOqUBoWsvOhqmQfzXunMRkhobyPKSjvxld7UhcuOfzChLERE4C%2FDDShYHaDDphNbr1drr7%2BRM0HFxWE%2FrtF87hSMIMM8SYXOiYtJGAuOVTfi7qSiadKSclmyhoBbIfoF7TNrGFD3HCJmoPoZsiCBc0IZDbbQaM0H3bFdYbno6q7NmM918B65BGPjsGNySfS9fRK%2BxJbexfD44t8jrvvNw1%2F0SryFWDhdc&X-Amz-Signature=e02415d0fc07f62976364e3ea98164a797c00cc53f40dea900b7a8fb36a5b0d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PIGHZW3%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGMUFlqsMHisN6jMOxiGl77%2Bij60EWisoyZwL%2BB1LtQAIgDhJHNMU%2Bfxg6I9MxAVu1%2FGHUCrijKj6dVtXDNfjEYfAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLYAn9PG4za3Ngc4CrcA2Y0dVw3cSDVeUEjJOhaF3DficRTL26lGcpDdyc8aksJkldt37zO2nboz%2BYs%2FhTTFhFNRwavlwxFPPp1VtHsTSkrf16siVytlihe2PZoXAbOKxw0ouzj7nEMwAmUaGfrM6grLz48keZe8%2F5n3xLV%2B1HNszztCzQQO2ud8bP2zwL9qtMeo5M1nPfwlrffUWHNd7RHDkk8dxrerlFsFIpq9VvOkEio%2F8EXZ%2Fxd12SOcXx6RdS6byl%2Bap6PNLnhAtU460Bscv%2BsDhEb4EduplFNATtM1NBLw%2FRzHC11xZ2%2BsP7eqiE2E0jCGWbhEp7BW%2FP%2FoOhX6tavJHmTJwBI6yNuzn%2BvyThm5UUXuhpEd6vSs6mwlpLF0LUEy7qc5pTCZ%2F6ubwX4AXlCpqA8R%2F6Df%2BJ9slFfw8Dp4Q413OVxhhSxY7NDQS22%2BUcfEaDbO3pba3k44k3WS9G0kOWGQtLxEyNJHeCousYQQgUOOdHzL%2BEgvvb323Q%2F3jQvIUz5Juz6RlroiQNJLvBUm1sktHPAryHD2t5MLEUwYCkk5q7OQA96a%2FQGIdozYm5Pvma%2F1RKinGWGjPwhkUmCuw0LhOvYzOXMZpxD3GmCb%2FqfavmUz4PmQcxHER7eDp0y%2BUdEzM5TMLTU88MGOqUBoWsvOhqmQfzXunMRkhobyPKSjvxld7UhcuOfzChLERE4C%2FDDShYHaDDphNbr1drr7%2BRM0HFxWE%2FrtF87hSMIMM8SYXOiYtJGAuOVTfi7qSiadKSclmyhoBbIfoF7TNrGFD3HCJmoPoZsiCBc0IZDbbQaM0H3bFdYbno6q7NmM918B65BGPjsGNySfS9fRK%2BxJbexfD44t8jrvvNw1%2F0SryFWDhdc&X-Amz-Signature=474dcb88d7565077c0ef7938b4d5c549a25825c93111c085a9f1f5e68e086064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PIGHZW3%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGMUFlqsMHisN6jMOxiGl77%2Bij60EWisoyZwL%2BB1LtQAIgDhJHNMU%2Bfxg6I9MxAVu1%2FGHUCrijKj6dVtXDNfjEYfAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLYAn9PG4za3Ngc4CrcA2Y0dVw3cSDVeUEjJOhaF3DficRTL26lGcpDdyc8aksJkldt37zO2nboz%2BYs%2FhTTFhFNRwavlwxFPPp1VtHsTSkrf16siVytlihe2PZoXAbOKxw0ouzj7nEMwAmUaGfrM6grLz48keZe8%2F5n3xLV%2B1HNszztCzQQO2ud8bP2zwL9qtMeo5M1nPfwlrffUWHNd7RHDkk8dxrerlFsFIpq9VvOkEio%2F8EXZ%2Fxd12SOcXx6RdS6byl%2Bap6PNLnhAtU460Bscv%2BsDhEb4EduplFNATtM1NBLw%2FRzHC11xZ2%2BsP7eqiE2E0jCGWbhEp7BW%2FP%2FoOhX6tavJHmTJwBI6yNuzn%2BvyThm5UUXuhpEd6vSs6mwlpLF0LUEy7qc5pTCZ%2F6ubwX4AXlCpqA8R%2F6Df%2BJ9slFfw8Dp4Q413OVxhhSxY7NDQS22%2BUcfEaDbO3pba3k44k3WS9G0kOWGQtLxEyNJHeCousYQQgUOOdHzL%2BEgvvb323Q%2F3jQvIUz5Juz6RlroiQNJLvBUm1sktHPAryHD2t5MLEUwYCkk5q7OQA96a%2FQGIdozYm5Pvma%2F1RKinGWGjPwhkUmCuw0LhOvYzOXMZpxD3GmCb%2FqfavmUz4PmQcxHER7eDp0y%2BUdEzM5TMLTU88MGOqUBoWsvOhqmQfzXunMRkhobyPKSjvxld7UhcuOfzChLERE4C%2FDDShYHaDDphNbr1drr7%2BRM0HFxWE%2FrtF87hSMIMM8SYXOiYtJGAuOVTfi7qSiadKSclmyhoBbIfoF7TNrGFD3HCJmoPoZsiCBc0IZDbbQaM0H3bFdYbno6q7NmM918B65BGPjsGNySfS9fRK%2BxJbexfD44t8jrvvNw1%2F0SryFWDhdc&X-Amz-Signature=6d71dc0b1d61f3dab305cad8b37a5c74e02610698b5abf76c5b6acfb18901da2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PIGHZW3%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGMUFlqsMHisN6jMOxiGl77%2Bij60EWisoyZwL%2BB1LtQAIgDhJHNMU%2Bfxg6I9MxAVu1%2FGHUCrijKj6dVtXDNfjEYfAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLYAn9PG4za3Ngc4CrcA2Y0dVw3cSDVeUEjJOhaF3DficRTL26lGcpDdyc8aksJkldt37zO2nboz%2BYs%2FhTTFhFNRwavlwxFPPp1VtHsTSkrf16siVytlihe2PZoXAbOKxw0ouzj7nEMwAmUaGfrM6grLz48keZe8%2F5n3xLV%2B1HNszztCzQQO2ud8bP2zwL9qtMeo5M1nPfwlrffUWHNd7RHDkk8dxrerlFsFIpq9VvOkEio%2F8EXZ%2Fxd12SOcXx6RdS6byl%2Bap6PNLnhAtU460Bscv%2BsDhEb4EduplFNATtM1NBLw%2FRzHC11xZ2%2BsP7eqiE2E0jCGWbhEp7BW%2FP%2FoOhX6tavJHmTJwBI6yNuzn%2BvyThm5UUXuhpEd6vSs6mwlpLF0LUEy7qc5pTCZ%2F6ubwX4AXlCpqA8R%2F6Df%2BJ9slFfw8Dp4Q413OVxhhSxY7NDQS22%2BUcfEaDbO3pba3k44k3WS9G0kOWGQtLxEyNJHeCousYQQgUOOdHzL%2BEgvvb323Q%2F3jQvIUz5Juz6RlroiQNJLvBUm1sktHPAryHD2t5MLEUwYCkk5q7OQA96a%2FQGIdozYm5Pvma%2F1RKinGWGjPwhkUmCuw0LhOvYzOXMZpxD3GmCb%2FqfavmUz4PmQcxHER7eDp0y%2BUdEzM5TMLTU88MGOqUBoWsvOhqmQfzXunMRkhobyPKSjvxld7UhcuOfzChLERE4C%2FDDShYHaDDphNbr1drr7%2BRM0HFxWE%2FrtF87hSMIMM8SYXOiYtJGAuOVTfi7qSiadKSclmyhoBbIfoF7TNrGFD3HCJmoPoZsiCBc0IZDbbQaM0H3bFdYbno6q7NmM918B65BGPjsGNySfS9fRK%2BxJbexfD44t8jrvvNw1%2F0SryFWDhdc&X-Amz-Signature=2f7d1f64cbb776cec97b2ee9dbbf27d9e0dfcf83c0ac5e6a895f8623d40c83c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PIGHZW3%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGMUFlqsMHisN6jMOxiGl77%2Bij60EWisoyZwL%2BB1LtQAIgDhJHNMU%2Bfxg6I9MxAVu1%2FGHUCrijKj6dVtXDNfjEYfAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLYAn9PG4za3Ngc4CrcA2Y0dVw3cSDVeUEjJOhaF3DficRTL26lGcpDdyc8aksJkldt37zO2nboz%2BYs%2FhTTFhFNRwavlwxFPPp1VtHsTSkrf16siVytlihe2PZoXAbOKxw0ouzj7nEMwAmUaGfrM6grLz48keZe8%2F5n3xLV%2B1HNszztCzQQO2ud8bP2zwL9qtMeo5M1nPfwlrffUWHNd7RHDkk8dxrerlFsFIpq9VvOkEio%2F8EXZ%2Fxd12SOcXx6RdS6byl%2Bap6PNLnhAtU460Bscv%2BsDhEb4EduplFNATtM1NBLw%2FRzHC11xZ2%2BsP7eqiE2E0jCGWbhEp7BW%2FP%2FoOhX6tavJHmTJwBI6yNuzn%2BvyThm5UUXuhpEd6vSs6mwlpLF0LUEy7qc5pTCZ%2F6ubwX4AXlCpqA8R%2F6Df%2BJ9slFfw8Dp4Q413OVxhhSxY7NDQS22%2BUcfEaDbO3pba3k44k3WS9G0kOWGQtLxEyNJHeCousYQQgUOOdHzL%2BEgvvb323Q%2F3jQvIUz5Juz6RlroiQNJLvBUm1sktHPAryHD2t5MLEUwYCkk5q7OQA96a%2FQGIdozYm5Pvma%2F1RKinGWGjPwhkUmCuw0LhOvYzOXMZpxD3GmCb%2FqfavmUz4PmQcxHER7eDp0y%2BUdEzM5TMLTU88MGOqUBoWsvOhqmQfzXunMRkhobyPKSjvxld7UhcuOfzChLERE4C%2FDDShYHaDDphNbr1drr7%2BRM0HFxWE%2FrtF87hSMIMM8SYXOiYtJGAuOVTfi7qSiadKSclmyhoBbIfoF7TNrGFD3HCJmoPoZsiCBc0IZDbbQaM0H3bFdYbno6q7NmM918B65BGPjsGNySfS9fRK%2BxJbexfD44t8jrvvNw1%2F0SryFWDhdc&X-Amz-Signature=9f8e558e44dde07a76e4965ef48b3ac95769cbb2d62e0109a8b497deb218d717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
