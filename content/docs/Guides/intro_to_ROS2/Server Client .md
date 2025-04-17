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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJPDVER%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGB3e0T9p8CrHJpJ5NniiF9Iy7KztLIHyJjaKCoboJg2AiEAvHHpKlJGxAM6KBP1tGV5JcOiXkORE%2Bfzq%2Bk75bPIaOYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDI4OfqS%2BmBCokasJ5SrcAwEuAyfnSIPkMwC3BUF%2Bf3Z5rkJX%2FmWfwFgrJDROmiWf6Vc8WcMzPPRjFSPBIUaSfdQ9snyoi8lB6c3m2ZctdoF3FNjsi4U27zcX2L0ONwOF9UQK%2FhQeFng0%2BuoC%2B%2Ff6v1ThNaGGBxatSTSpnU%2BkFJ6s5BvIO%2FH%2BWEAbqFcmIq2TgYb%2BQHNeoy32Yl34%2Bbg0eLIJQknbEa4jqXOv9mEkiZGWDrKSfdAKY6WUuHYQieQ%2BS5%2FW%2FLsCJ0LmJIsD7N0ytnwdKzfe6J12020qWjLio1ulh8yq%2B53Uy3vZWS4OILbH%2FeksckFxXUFkveaTKoZ0LIgfZn8Er4AQGhkelmPMNZW%2BuTTLZan7%2FuU%2Fc%2FuAcuswnVZw%2BjeaIVle%2BNY%2F%2F7RnEi0r0epiAiEs%2FC%2FoKpnnBZJ84FZyNPCyjPoxDBAMDyCRNKWp95WGWnmU2qNns0B8J1YbylYXSdL1fKLRXZlwXTIiGzDpzopPZrQtr%2FLx6HUYU0KyoT%2BCRzQiuh%2BJGUDomjRaM4yX4%2BUHxOHxX%2FwTKidAiusgJvUXkdoYqkJlkzFfbMZqcTOrra%2BFBohmCDnjHost93hKK1b6LQOpj7PsJkJU%2BldLBFrYgt6e4ol%2Fh8s3NRtUUyA9IobXZ1bXMLjLhMAGOqUB2SRFWripVw%2FlZBbkV7SLQI62vn1dQUbpSSh%2B2TOhWbse1X7%2BfS%2BipMh4U%2FASGFBqU8KP9lDgRPf%2F8PXmnELaqsUZq5YfxPPTzf4HiyjO2YWpL%2FQlSpA16wQqyFJKlrUUel3%2BweFQUDc1Qi0sUK14p%2BVp9RcT6%2BhDnuB%2FH00byWEv1Wz6LJy16Jo%2FZwI3Gj8rT1lplLRlw5af5JKyirEEYb6q8r4%2F&X-Amz-Signature=21924c156b0cb61e44e12e67749e9d7fbcfbc6ed72afb3cc05bc075866c9fce5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJPDVER%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGB3e0T9p8CrHJpJ5NniiF9Iy7KztLIHyJjaKCoboJg2AiEAvHHpKlJGxAM6KBP1tGV5JcOiXkORE%2Bfzq%2Bk75bPIaOYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDI4OfqS%2BmBCokasJ5SrcAwEuAyfnSIPkMwC3BUF%2Bf3Z5rkJX%2FmWfwFgrJDROmiWf6Vc8WcMzPPRjFSPBIUaSfdQ9snyoi8lB6c3m2ZctdoF3FNjsi4U27zcX2L0ONwOF9UQK%2FhQeFng0%2BuoC%2B%2Ff6v1ThNaGGBxatSTSpnU%2BkFJ6s5BvIO%2FH%2BWEAbqFcmIq2TgYb%2BQHNeoy32Yl34%2Bbg0eLIJQknbEa4jqXOv9mEkiZGWDrKSfdAKY6WUuHYQieQ%2BS5%2FW%2FLsCJ0LmJIsD7N0ytnwdKzfe6J12020qWjLio1ulh8yq%2B53Uy3vZWS4OILbH%2FeksckFxXUFkveaTKoZ0LIgfZn8Er4AQGhkelmPMNZW%2BuTTLZan7%2FuU%2Fc%2FuAcuswnVZw%2BjeaIVle%2BNY%2F%2F7RnEi0r0epiAiEs%2FC%2FoKpnnBZJ84FZyNPCyjPoxDBAMDyCRNKWp95WGWnmU2qNns0B8J1YbylYXSdL1fKLRXZlwXTIiGzDpzopPZrQtr%2FLx6HUYU0KyoT%2BCRzQiuh%2BJGUDomjRaM4yX4%2BUHxOHxX%2FwTKidAiusgJvUXkdoYqkJlkzFfbMZqcTOrra%2BFBohmCDnjHost93hKK1b6LQOpj7PsJkJU%2BldLBFrYgt6e4ol%2Fh8s3NRtUUyA9IobXZ1bXMLjLhMAGOqUB2SRFWripVw%2FlZBbkV7SLQI62vn1dQUbpSSh%2B2TOhWbse1X7%2BfS%2BipMh4U%2FASGFBqU8KP9lDgRPf%2F8PXmnELaqsUZq5YfxPPTzf4HiyjO2YWpL%2FQlSpA16wQqyFJKlrUUel3%2BweFQUDc1Qi0sUK14p%2BVp9RcT6%2BhDnuB%2FH00byWEv1Wz6LJy16Jo%2FZwI3Gj8rT1lplLRlw5af5JKyirEEYb6q8r4%2F&X-Amz-Signature=49058928bca6af0c22b4cfd21ce8ff94c4e4910233a07f1af1cdefd344b83f35&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJPDVER%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGB3e0T9p8CrHJpJ5NniiF9Iy7KztLIHyJjaKCoboJg2AiEAvHHpKlJGxAM6KBP1tGV5JcOiXkORE%2Bfzq%2Bk75bPIaOYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDI4OfqS%2BmBCokasJ5SrcAwEuAyfnSIPkMwC3BUF%2Bf3Z5rkJX%2FmWfwFgrJDROmiWf6Vc8WcMzPPRjFSPBIUaSfdQ9snyoi8lB6c3m2ZctdoF3FNjsi4U27zcX2L0ONwOF9UQK%2FhQeFng0%2BuoC%2B%2Ff6v1ThNaGGBxatSTSpnU%2BkFJ6s5BvIO%2FH%2BWEAbqFcmIq2TgYb%2BQHNeoy32Yl34%2Bbg0eLIJQknbEa4jqXOv9mEkiZGWDrKSfdAKY6WUuHYQieQ%2BS5%2FW%2FLsCJ0LmJIsD7N0ytnwdKzfe6J12020qWjLio1ulh8yq%2B53Uy3vZWS4OILbH%2FeksckFxXUFkveaTKoZ0LIgfZn8Er4AQGhkelmPMNZW%2BuTTLZan7%2FuU%2Fc%2FuAcuswnVZw%2BjeaIVle%2BNY%2F%2F7RnEi0r0epiAiEs%2FC%2FoKpnnBZJ84FZyNPCyjPoxDBAMDyCRNKWp95WGWnmU2qNns0B8J1YbylYXSdL1fKLRXZlwXTIiGzDpzopPZrQtr%2FLx6HUYU0KyoT%2BCRzQiuh%2BJGUDomjRaM4yX4%2BUHxOHxX%2FwTKidAiusgJvUXkdoYqkJlkzFfbMZqcTOrra%2BFBohmCDnjHost93hKK1b6LQOpj7PsJkJU%2BldLBFrYgt6e4ol%2Fh8s3NRtUUyA9IobXZ1bXMLjLhMAGOqUB2SRFWripVw%2FlZBbkV7SLQI62vn1dQUbpSSh%2B2TOhWbse1X7%2BfS%2BipMh4U%2FASGFBqU8KP9lDgRPf%2F8PXmnELaqsUZq5YfxPPTzf4HiyjO2YWpL%2FQlSpA16wQqyFJKlrUUel3%2BweFQUDc1Qi0sUK14p%2BVp9RcT6%2BhDnuB%2FH00byWEv1Wz6LJy16Jo%2FZwI3Gj8rT1lplLRlw5af5JKyirEEYb6q8r4%2F&X-Amz-Signature=4beefadf14948aae2456424f1f1b6187b2eee0f5702a7a77fc49b94e52a09fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJPDVER%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGB3e0T9p8CrHJpJ5NniiF9Iy7KztLIHyJjaKCoboJg2AiEAvHHpKlJGxAM6KBP1tGV5JcOiXkORE%2Bfzq%2Bk75bPIaOYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDI4OfqS%2BmBCokasJ5SrcAwEuAyfnSIPkMwC3BUF%2Bf3Z5rkJX%2FmWfwFgrJDROmiWf6Vc8WcMzPPRjFSPBIUaSfdQ9snyoi8lB6c3m2ZctdoF3FNjsi4U27zcX2L0ONwOF9UQK%2FhQeFng0%2BuoC%2B%2Ff6v1ThNaGGBxatSTSpnU%2BkFJ6s5BvIO%2FH%2BWEAbqFcmIq2TgYb%2BQHNeoy32Yl34%2Bbg0eLIJQknbEa4jqXOv9mEkiZGWDrKSfdAKY6WUuHYQieQ%2BS5%2FW%2FLsCJ0LmJIsD7N0ytnwdKzfe6J12020qWjLio1ulh8yq%2B53Uy3vZWS4OILbH%2FeksckFxXUFkveaTKoZ0LIgfZn8Er4AQGhkelmPMNZW%2BuTTLZan7%2FuU%2Fc%2FuAcuswnVZw%2BjeaIVle%2BNY%2F%2F7RnEi0r0epiAiEs%2FC%2FoKpnnBZJ84FZyNPCyjPoxDBAMDyCRNKWp95WGWnmU2qNns0B8J1YbylYXSdL1fKLRXZlwXTIiGzDpzopPZrQtr%2FLx6HUYU0KyoT%2BCRzQiuh%2BJGUDomjRaM4yX4%2BUHxOHxX%2FwTKidAiusgJvUXkdoYqkJlkzFfbMZqcTOrra%2BFBohmCDnjHost93hKK1b6LQOpj7PsJkJU%2BldLBFrYgt6e4ol%2Fh8s3NRtUUyA9IobXZ1bXMLjLhMAGOqUB2SRFWripVw%2FlZBbkV7SLQI62vn1dQUbpSSh%2B2TOhWbse1X7%2BfS%2BipMh4U%2FASGFBqU8KP9lDgRPf%2F8PXmnELaqsUZq5YfxPPTzf4HiyjO2YWpL%2FQlSpA16wQqyFJKlrUUel3%2BweFQUDc1Qi0sUK14p%2BVp9RcT6%2BhDnuB%2FH00byWEv1Wz6LJy16Jo%2FZwI3Gj8rT1lplLRlw5af5JKyirEEYb6q8r4%2F&X-Amz-Signature=0891e33150230628477b561f29edce5b8f4935f972a2868c281d4760678d97e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJPDVER%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGB3e0T9p8CrHJpJ5NniiF9Iy7KztLIHyJjaKCoboJg2AiEAvHHpKlJGxAM6KBP1tGV5JcOiXkORE%2Bfzq%2Bk75bPIaOYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDI4OfqS%2BmBCokasJ5SrcAwEuAyfnSIPkMwC3BUF%2Bf3Z5rkJX%2FmWfwFgrJDROmiWf6Vc8WcMzPPRjFSPBIUaSfdQ9snyoi8lB6c3m2ZctdoF3FNjsi4U27zcX2L0ONwOF9UQK%2FhQeFng0%2BuoC%2B%2Ff6v1ThNaGGBxatSTSpnU%2BkFJ6s5BvIO%2FH%2BWEAbqFcmIq2TgYb%2BQHNeoy32Yl34%2Bbg0eLIJQknbEa4jqXOv9mEkiZGWDrKSfdAKY6WUuHYQieQ%2BS5%2FW%2FLsCJ0LmJIsD7N0ytnwdKzfe6J12020qWjLio1ulh8yq%2B53Uy3vZWS4OILbH%2FeksckFxXUFkveaTKoZ0LIgfZn8Er4AQGhkelmPMNZW%2BuTTLZan7%2FuU%2Fc%2FuAcuswnVZw%2BjeaIVle%2BNY%2F%2F7RnEi0r0epiAiEs%2FC%2FoKpnnBZJ84FZyNPCyjPoxDBAMDyCRNKWp95WGWnmU2qNns0B8J1YbylYXSdL1fKLRXZlwXTIiGzDpzopPZrQtr%2FLx6HUYU0KyoT%2BCRzQiuh%2BJGUDomjRaM4yX4%2BUHxOHxX%2FwTKidAiusgJvUXkdoYqkJlkzFfbMZqcTOrra%2BFBohmCDnjHost93hKK1b6LQOpj7PsJkJU%2BldLBFrYgt6e4ol%2Fh8s3NRtUUyA9IobXZ1bXMLjLhMAGOqUB2SRFWripVw%2FlZBbkV7SLQI62vn1dQUbpSSh%2B2TOhWbse1X7%2BfS%2BipMh4U%2FASGFBqU8KP9lDgRPf%2F8PXmnELaqsUZq5YfxPPTzf4HiyjO2YWpL%2FQlSpA16wQqyFJKlrUUel3%2BweFQUDc1Qi0sUK14p%2BVp9RcT6%2BhDnuB%2FH00byWEv1Wz6LJy16Jo%2FZwI3Gj8rT1lplLRlw5af5JKyirEEYb6q8r4%2F&X-Amz-Signature=5662e4bcca313b4f74d8305c076510b41965d4b95a3e98089b6e4413f707288e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
