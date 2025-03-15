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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657T537P7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAo4Q7lHZJ8o2CU0geDjcOhlhA7giJouwPhnancxVwLAAiAPVrYX%2BCwCTPHNGE2bqn7UsjWpCLCqnLoKOJkwykSGFCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMInUEJR0DpedQQJOxKtwDZcCaEymPu3Dj01peO6zOzj8iK3hNerDg40cHIzgOJvCGWs8DeVZjvQhrgqjMG8cCWJXLlwH2g%2BlL3fSJjhND05ejMmpibL%2FuF2hKmFygPHkZBfjnxxyG7nzoh0dEijX4xOu9hT%2BWartWIdSzITOhH7rEgUOxCAhgBoC1kQX0Su0xmcdU72GaYOAyKaV3MN6v72%2BC71n4jBe26HoIPxH2dhYbbk4eQHUhtxw986Y5RZI4Su6rAhY439VFZPXHsH0CPw1GaACfNwql0wBpH1ZP766gqEEA4SgXP316P2aRg%2B6g%2BhjYZeXBl62ztEsSTeYMctoWWsvGlYCPNQb4QqAK8XzjeQbojeA3edwlfD1Hlww%2F2NChoEatT8yBPUDdpv4gF4y%2BnfCkOKv1j%2FkOz6bKO%2FIrPJ5wtNpR45TKwm4CJnVvVH%2BXhbohMHB%2BM6UMNk8eWP07w6O42GZ8zdKjsYxH69j724BKrONPPzJJJ6NkYDYesivAx0YD%2FzKI2au336NYn9zuZUEMEMC3eCgADZoCUJUqrEU39wGdwM1W2dlipsPZlny2iBrR%2BnrMd0JktI4e6l4GIQ0eKq1XUv4nwC9tGHippK7XhBI%2BwY901mrjNfsHoq0sI5%2BHsq4vbKwwrsTUvgY6pgHmmcUv2h%2BOjwQwhgk%2FHZizQyjHUJLj2yVWr%2BC%2B%2FtfiTNkISV7ZBZoAhCe4n4fnaOIk2qfUP9MoOtfuv6wtx1NssQGnhzaAFSJoC%2Bg5ydzXfMSDuncYaUgdAvmUVC%2BqNMU8neNwHeDKehfoWPADQcVoupNroYnr67lC0tGvnCASyG6BwIRWBg5NnUmZHu2rImojc3Q0YtWAjuidv9ai6wSejsCEEywc&X-Amz-Signature=ce04d263c35fc86c2accb886a232b3d0f625e0d51184f2628b32441faa42ae8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657T537P7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAo4Q7lHZJ8o2CU0geDjcOhlhA7giJouwPhnancxVwLAAiAPVrYX%2BCwCTPHNGE2bqn7UsjWpCLCqnLoKOJkwykSGFCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMInUEJR0DpedQQJOxKtwDZcCaEymPu3Dj01peO6zOzj8iK3hNerDg40cHIzgOJvCGWs8DeVZjvQhrgqjMG8cCWJXLlwH2g%2BlL3fSJjhND05ejMmpibL%2FuF2hKmFygPHkZBfjnxxyG7nzoh0dEijX4xOu9hT%2BWartWIdSzITOhH7rEgUOxCAhgBoC1kQX0Su0xmcdU72GaYOAyKaV3MN6v72%2BC71n4jBe26HoIPxH2dhYbbk4eQHUhtxw986Y5RZI4Su6rAhY439VFZPXHsH0CPw1GaACfNwql0wBpH1ZP766gqEEA4SgXP316P2aRg%2B6g%2BhjYZeXBl62ztEsSTeYMctoWWsvGlYCPNQb4QqAK8XzjeQbojeA3edwlfD1Hlww%2F2NChoEatT8yBPUDdpv4gF4y%2BnfCkOKv1j%2FkOz6bKO%2FIrPJ5wtNpR45TKwm4CJnVvVH%2BXhbohMHB%2BM6UMNk8eWP07w6O42GZ8zdKjsYxH69j724BKrONPPzJJJ6NkYDYesivAx0YD%2FzKI2au336NYn9zuZUEMEMC3eCgADZoCUJUqrEU39wGdwM1W2dlipsPZlny2iBrR%2BnrMd0JktI4e6l4GIQ0eKq1XUv4nwC9tGHippK7XhBI%2BwY901mrjNfsHoq0sI5%2BHsq4vbKwwrsTUvgY6pgHmmcUv2h%2BOjwQwhgk%2FHZizQyjHUJLj2yVWr%2BC%2B%2FtfiTNkISV7ZBZoAhCe4n4fnaOIk2qfUP9MoOtfuv6wtx1NssQGnhzaAFSJoC%2Bg5ydzXfMSDuncYaUgdAvmUVC%2BqNMU8neNwHeDKehfoWPADQcVoupNroYnr67lC0tGvnCASyG6BwIRWBg5NnUmZHu2rImojc3Q0YtWAjuidv9ai6wSejsCEEywc&X-Amz-Signature=562b1c14196c603faffe5b85dc4e49eafb8545e8315f1263a9b20702ff3e7058&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657T537P7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAo4Q7lHZJ8o2CU0geDjcOhlhA7giJouwPhnancxVwLAAiAPVrYX%2BCwCTPHNGE2bqn7UsjWpCLCqnLoKOJkwykSGFCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMInUEJR0DpedQQJOxKtwDZcCaEymPu3Dj01peO6zOzj8iK3hNerDg40cHIzgOJvCGWs8DeVZjvQhrgqjMG8cCWJXLlwH2g%2BlL3fSJjhND05ejMmpibL%2FuF2hKmFygPHkZBfjnxxyG7nzoh0dEijX4xOu9hT%2BWartWIdSzITOhH7rEgUOxCAhgBoC1kQX0Su0xmcdU72GaYOAyKaV3MN6v72%2BC71n4jBe26HoIPxH2dhYbbk4eQHUhtxw986Y5RZI4Su6rAhY439VFZPXHsH0CPw1GaACfNwql0wBpH1ZP766gqEEA4SgXP316P2aRg%2B6g%2BhjYZeXBl62ztEsSTeYMctoWWsvGlYCPNQb4QqAK8XzjeQbojeA3edwlfD1Hlww%2F2NChoEatT8yBPUDdpv4gF4y%2BnfCkOKv1j%2FkOz6bKO%2FIrPJ5wtNpR45TKwm4CJnVvVH%2BXhbohMHB%2BM6UMNk8eWP07w6O42GZ8zdKjsYxH69j724BKrONPPzJJJ6NkYDYesivAx0YD%2FzKI2au336NYn9zuZUEMEMC3eCgADZoCUJUqrEU39wGdwM1W2dlipsPZlny2iBrR%2BnrMd0JktI4e6l4GIQ0eKq1XUv4nwC9tGHippK7XhBI%2BwY901mrjNfsHoq0sI5%2BHsq4vbKwwrsTUvgY6pgHmmcUv2h%2BOjwQwhgk%2FHZizQyjHUJLj2yVWr%2BC%2B%2FtfiTNkISV7ZBZoAhCe4n4fnaOIk2qfUP9MoOtfuv6wtx1NssQGnhzaAFSJoC%2Bg5ydzXfMSDuncYaUgdAvmUVC%2BqNMU8neNwHeDKehfoWPADQcVoupNroYnr67lC0tGvnCASyG6BwIRWBg5NnUmZHu2rImojc3Q0YtWAjuidv9ai6wSejsCEEywc&X-Amz-Signature=c8ec17ad64a16e22f586271d22ab778ee712ea51cd2cfe80cc1895f4ee77f5e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657T537P7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAo4Q7lHZJ8o2CU0geDjcOhlhA7giJouwPhnancxVwLAAiAPVrYX%2BCwCTPHNGE2bqn7UsjWpCLCqnLoKOJkwykSGFCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMInUEJR0DpedQQJOxKtwDZcCaEymPu3Dj01peO6zOzj8iK3hNerDg40cHIzgOJvCGWs8DeVZjvQhrgqjMG8cCWJXLlwH2g%2BlL3fSJjhND05ejMmpibL%2FuF2hKmFygPHkZBfjnxxyG7nzoh0dEijX4xOu9hT%2BWartWIdSzITOhH7rEgUOxCAhgBoC1kQX0Su0xmcdU72GaYOAyKaV3MN6v72%2BC71n4jBe26HoIPxH2dhYbbk4eQHUhtxw986Y5RZI4Su6rAhY439VFZPXHsH0CPw1GaACfNwql0wBpH1ZP766gqEEA4SgXP316P2aRg%2B6g%2BhjYZeXBl62ztEsSTeYMctoWWsvGlYCPNQb4QqAK8XzjeQbojeA3edwlfD1Hlww%2F2NChoEatT8yBPUDdpv4gF4y%2BnfCkOKv1j%2FkOz6bKO%2FIrPJ5wtNpR45TKwm4CJnVvVH%2BXhbohMHB%2BM6UMNk8eWP07w6O42GZ8zdKjsYxH69j724BKrONPPzJJJ6NkYDYesivAx0YD%2FzKI2au336NYn9zuZUEMEMC3eCgADZoCUJUqrEU39wGdwM1W2dlipsPZlny2iBrR%2BnrMd0JktI4e6l4GIQ0eKq1XUv4nwC9tGHippK7XhBI%2BwY901mrjNfsHoq0sI5%2BHsq4vbKwwrsTUvgY6pgHmmcUv2h%2BOjwQwhgk%2FHZizQyjHUJLj2yVWr%2BC%2B%2FtfiTNkISV7ZBZoAhCe4n4fnaOIk2qfUP9MoOtfuv6wtx1NssQGnhzaAFSJoC%2Bg5ydzXfMSDuncYaUgdAvmUVC%2BqNMU8neNwHeDKehfoWPADQcVoupNroYnr67lC0tGvnCASyG6BwIRWBg5NnUmZHu2rImojc3Q0YtWAjuidv9ai6wSejsCEEywc&X-Amz-Signature=ba83f0377cae2e2a4a1e6cf833e911a5fac7403801f40814a404be3f31d21db8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657T537P7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAo4Q7lHZJ8o2CU0geDjcOhlhA7giJouwPhnancxVwLAAiAPVrYX%2BCwCTPHNGE2bqn7UsjWpCLCqnLoKOJkwykSGFCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMInUEJR0DpedQQJOxKtwDZcCaEymPu3Dj01peO6zOzj8iK3hNerDg40cHIzgOJvCGWs8DeVZjvQhrgqjMG8cCWJXLlwH2g%2BlL3fSJjhND05ejMmpibL%2FuF2hKmFygPHkZBfjnxxyG7nzoh0dEijX4xOu9hT%2BWartWIdSzITOhH7rEgUOxCAhgBoC1kQX0Su0xmcdU72GaYOAyKaV3MN6v72%2BC71n4jBe26HoIPxH2dhYbbk4eQHUhtxw986Y5RZI4Su6rAhY439VFZPXHsH0CPw1GaACfNwql0wBpH1ZP766gqEEA4SgXP316P2aRg%2B6g%2BhjYZeXBl62ztEsSTeYMctoWWsvGlYCPNQb4QqAK8XzjeQbojeA3edwlfD1Hlww%2F2NChoEatT8yBPUDdpv4gF4y%2BnfCkOKv1j%2FkOz6bKO%2FIrPJ5wtNpR45TKwm4CJnVvVH%2BXhbohMHB%2BM6UMNk8eWP07w6O42GZ8zdKjsYxH69j724BKrONPPzJJJ6NkYDYesivAx0YD%2FzKI2au336NYn9zuZUEMEMC3eCgADZoCUJUqrEU39wGdwM1W2dlipsPZlny2iBrR%2BnrMd0JktI4e6l4GIQ0eKq1XUv4nwC9tGHippK7XhBI%2BwY901mrjNfsHoq0sI5%2BHsq4vbKwwrsTUvgY6pgHmmcUv2h%2BOjwQwhgk%2FHZizQyjHUJLj2yVWr%2BC%2B%2FtfiTNkISV7ZBZoAhCe4n4fnaOIk2qfUP9MoOtfuv6wtx1NssQGnhzaAFSJoC%2Bg5ydzXfMSDuncYaUgdAvmUVC%2BqNMU8neNwHeDKehfoWPADQcVoupNroYnr67lC0tGvnCASyG6BwIRWBg5NnUmZHu2rImojc3Q0YtWAjuidv9ai6wSejsCEEywc&X-Amz-Signature=6fd7173ccf6f911a5ebb85662cd11fb75f72ceb049a82a2627ff1b394fb4e629&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
