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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O272CX5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzaWQCwXBLILaGpOj9eGuZGyfYQYBjMtsGEUJ2ciN%2BaQIgRI6N%2Bo6ZTuf430O8M4bMLtAoVDE5kwoiYQ3xGDBy%2FyEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDE4s7RB6bt1Cswa2eyrcAw9q6%2FxwSMkGweN5ZWKTETdM%2Bq8rOPIBWUZQ8ihckiMUBaC94k3b2RwIOrOaSWYfn84GkWhmwmrC7o2Swm5NoXLYS362%2BdAwQWzuE3gbvATo3RUzsvvBn6ktiTBOKx3Axbpab%2BSVjGOHVb14aahwExE%2F%2FQcaptZ4KGkmb2ysJbGM9zSY%2FoNgOx9Zktz3aMvZnr8gCv6HAX6FkvriyPZxbOH3%2F5qQ7dD8eDcao3OoS1xzIVTKZsiP%2F3Bni1%2FRW%2BIZCRpz1i4yftZL1HSU0Y7WXPbaGEfwLX4i25r9Yxqyn%2BscSaiKF%2F%2Fifues2FoS8fjzTK9AZ1EFdXfsxhsozzUy8lkq6MqQZwzPx8VK%2BmIA3sM9EJjVJhnjCryPGXgqEvuc0pAL6G22yUhtb7NHYhHxMmw3mT9%2BDPb5XPTpAU9pNdfTDUw2wnhBH7zJm6%2F5p3H68H%2BSp5OFOrXtJDO%2FLqHI2WReH3HnvRT7%2FztBMS8DGvdc5ahxbLOuBZtxQTtuD2qwdI4l6rmkfmf2QEJFhfDpssMufyrYjJtcGg5p5%2FN1DymXOYefuav6dOIOPhpqoI8stlR9mcjmsQ3VDJKPs52sLsC6H1AwJy1h8l2uU7DqE4pTMcAD7WN0yg%2FyKLO9MJSo68AGOqUBgV9mDJAuTpSo2yeVlB8GgyNKK%2Bl1oHBA0V%2FAktsBylR1XkuYbotxGVoTQKeXDnXAbfd0VMzAmr7W6mb28PnhRDazcAmaEZVpRq25UlAasfEI3DcRrwmM37PlbQnTtuyLtDiGQYYOusPgKg2sGtESxTlAkQw7YLfd92OdLSkWoOLIg3qntyAh4lb0nAxrdfNYcS1IxnB0dT1avbRrUFlYbw3f6pqK&X-Amz-Signature=b7b1d3af9304a08d118c85a265e3d54d0e53b433a427649b63baa75384bcac1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O272CX5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzaWQCwXBLILaGpOj9eGuZGyfYQYBjMtsGEUJ2ciN%2BaQIgRI6N%2Bo6ZTuf430O8M4bMLtAoVDE5kwoiYQ3xGDBy%2FyEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDE4s7RB6bt1Cswa2eyrcAw9q6%2FxwSMkGweN5ZWKTETdM%2Bq8rOPIBWUZQ8ihckiMUBaC94k3b2RwIOrOaSWYfn84GkWhmwmrC7o2Swm5NoXLYS362%2BdAwQWzuE3gbvATo3RUzsvvBn6ktiTBOKx3Axbpab%2BSVjGOHVb14aahwExE%2F%2FQcaptZ4KGkmb2ysJbGM9zSY%2FoNgOx9Zktz3aMvZnr8gCv6HAX6FkvriyPZxbOH3%2F5qQ7dD8eDcao3OoS1xzIVTKZsiP%2F3Bni1%2FRW%2BIZCRpz1i4yftZL1HSU0Y7WXPbaGEfwLX4i25r9Yxqyn%2BscSaiKF%2F%2Fifues2FoS8fjzTK9AZ1EFdXfsxhsozzUy8lkq6MqQZwzPx8VK%2BmIA3sM9EJjVJhnjCryPGXgqEvuc0pAL6G22yUhtb7NHYhHxMmw3mT9%2BDPb5XPTpAU9pNdfTDUw2wnhBH7zJm6%2F5p3H68H%2BSp5OFOrXtJDO%2FLqHI2WReH3HnvRT7%2FztBMS8DGvdc5ahxbLOuBZtxQTtuD2qwdI4l6rmkfmf2QEJFhfDpssMufyrYjJtcGg5p5%2FN1DymXOYefuav6dOIOPhpqoI8stlR9mcjmsQ3VDJKPs52sLsC6H1AwJy1h8l2uU7DqE4pTMcAD7WN0yg%2FyKLO9MJSo68AGOqUBgV9mDJAuTpSo2yeVlB8GgyNKK%2Bl1oHBA0V%2FAktsBylR1XkuYbotxGVoTQKeXDnXAbfd0VMzAmr7W6mb28PnhRDazcAmaEZVpRq25UlAasfEI3DcRrwmM37PlbQnTtuyLtDiGQYYOusPgKg2sGtESxTlAkQw7YLfd92OdLSkWoOLIg3qntyAh4lb0nAxrdfNYcS1IxnB0dT1avbRrUFlYbw3f6pqK&X-Amz-Signature=91b341e7a27da15d6eead513f92524e3d7d4b1e529e38e9de22d1e90819f9176&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O272CX5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzaWQCwXBLILaGpOj9eGuZGyfYQYBjMtsGEUJ2ciN%2BaQIgRI6N%2Bo6ZTuf430O8M4bMLtAoVDE5kwoiYQ3xGDBy%2FyEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDE4s7RB6bt1Cswa2eyrcAw9q6%2FxwSMkGweN5ZWKTETdM%2Bq8rOPIBWUZQ8ihckiMUBaC94k3b2RwIOrOaSWYfn84GkWhmwmrC7o2Swm5NoXLYS362%2BdAwQWzuE3gbvATo3RUzsvvBn6ktiTBOKx3Axbpab%2BSVjGOHVb14aahwExE%2F%2FQcaptZ4KGkmb2ysJbGM9zSY%2FoNgOx9Zktz3aMvZnr8gCv6HAX6FkvriyPZxbOH3%2F5qQ7dD8eDcao3OoS1xzIVTKZsiP%2F3Bni1%2FRW%2BIZCRpz1i4yftZL1HSU0Y7WXPbaGEfwLX4i25r9Yxqyn%2BscSaiKF%2F%2Fifues2FoS8fjzTK9AZ1EFdXfsxhsozzUy8lkq6MqQZwzPx8VK%2BmIA3sM9EJjVJhnjCryPGXgqEvuc0pAL6G22yUhtb7NHYhHxMmw3mT9%2BDPb5XPTpAU9pNdfTDUw2wnhBH7zJm6%2F5p3H68H%2BSp5OFOrXtJDO%2FLqHI2WReH3HnvRT7%2FztBMS8DGvdc5ahxbLOuBZtxQTtuD2qwdI4l6rmkfmf2QEJFhfDpssMufyrYjJtcGg5p5%2FN1DymXOYefuav6dOIOPhpqoI8stlR9mcjmsQ3VDJKPs52sLsC6H1AwJy1h8l2uU7DqE4pTMcAD7WN0yg%2FyKLO9MJSo68AGOqUBgV9mDJAuTpSo2yeVlB8GgyNKK%2Bl1oHBA0V%2FAktsBylR1XkuYbotxGVoTQKeXDnXAbfd0VMzAmr7W6mb28PnhRDazcAmaEZVpRq25UlAasfEI3DcRrwmM37PlbQnTtuyLtDiGQYYOusPgKg2sGtESxTlAkQw7YLfd92OdLSkWoOLIg3qntyAh4lb0nAxrdfNYcS1IxnB0dT1avbRrUFlYbw3f6pqK&X-Amz-Signature=f6bcc1add0f6f149ef9835abfe2cdbcab38e77d8d0c462de862e8048821bf3ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O272CX5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzaWQCwXBLILaGpOj9eGuZGyfYQYBjMtsGEUJ2ciN%2BaQIgRI6N%2Bo6ZTuf430O8M4bMLtAoVDE5kwoiYQ3xGDBy%2FyEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDE4s7RB6bt1Cswa2eyrcAw9q6%2FxwSMkGweN5ZWKTETdM%2Bq8rOPIBWUZQ8ihckiMUBaC94k3b2RwIOrOaSWYfn84GkWhmwmrC7o2Swm5NoXLYS362%2BdAwQWzuE3gbvATo3RUzsvvBn6ktiTBOKx3Axbpab%2BSVjGOHVb14aahwExE%2F%2FQcaptZ4KGkmb2ysJbGM9zSY%2FoNgOx9Zktz3aMvZnr8gCv6HAX6FkvriyPZxbOH3%2F5qQ7dD8eDcao3OoS1xzIVTKZsiP%2F3Bni1%2FRW%2BIZCRpz1i4yftZL1HSU0Y7WXPbaGEfwLX4i25r9Yxqyn%2BscSaiKF%2F%2Fifues2FoS8fjzTK9AZ1EFdXfsxhsozzUy8lkq6MqQZwzPx8VK%2BmIA3sM9EJjVJhnjCryPGXgqEvuc0pAL6G22yUhtb7NHYhHxMmw3mT9%2BDPb5XPTpAU9pNdfTDUw2wnhBH7zJm6%2F5p3H68H%2BSp5OFOrXtJDO%2FLqHI2WReH3HnvRT7%2FztBMS8DGvdc5ahxbLOuBZtxQTtuD2qwdI4l6rmkfmf2QEJFhfDpssMufyrYjJtcGg5p5%2FN1DymXOYefuav6dOIOPhpqoI8stlR9mcjmsQ3VDJKPs52sLsC6H1AwJy1h8l2uU7DqE4pTMcAD7WN0yg%2FyKLO9MJSo68AGOqUBgV9mDJAuTpSo2yeVlB8GgyNKK%2Bl1oHBA0V%2FAktsBylR1XkuYbotxGVoTQKeXDnXAbfd0VMzAmr7W6mb28PnhRDazcAmaEZVpRq25UlAasfEI3DcRrwmM37PlbQnTtuyLtDiGQYYOusPgKg2sGtESxTlAkQw7YLfd92OdLSkWoOLIg3qntyAh4lb0nAxrdfNYcS1IxnB0dT1avbRrUFlYbw3f6pqK&X-Amz-Signature=873b797780a218de0c634ee0de18a97dcf02567c05fa6dd9536c5b54308ae56b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O272CX5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzaWQCwXBLILaGpOj9eGuZGyfYQYBjMtsGEUJ2ciN%2BaQIgRI6N%2Bo6ZTuf430O8M4bMLtAoVDE5kwoiYQ3xGDBy%2FyEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDE4s7RB6bt1Cswa2eyrcAw9q6%2FxwSMkGweN5ZWKTETdM%2Bq8rOPIBWUZQ8ihckiMUBaC94k3b2RwIOrOaSWYfn84GkWhmwmrC7o2Swm5NoXLYS362%2BdAwQWzuE3gbvATo3RUzsvvBn6ktiTBOKx3Axbpab%2BSVjGOHVb14aahwExE%2F%2FQcaptZ4KGkmb2ysJbGM9zSY%2FoNgOx9Zktz3aMvZnr8gCv6HAX6FkvriyPZxbOH3%2F5qQ7dD8eDcao3OoS1xzIVTKZsiP%2F3Bni1%2FRW%2BIZCRpz1i4yftZL1HSU0Y7WXPbaGEfwLX4i25r9Yxqyn%2BscSaiKF%2F%2Fifues2FoS8fjzTK9AZ1EFdXfsxhsozzUy8lkq6MqQZwzPx8VK%2BmIA3sM9EJjVJhnjCryPGXgqEvuc0pAL6G22yUhtb7NHYhHxMmw3mT9%2BDPb5XPTpAU9pNdfTDUw2wnhBH7zJm6%2F5p3H68H%2BSp5OFOrXtJDO%2FLqHI2WReH3HnvRT7%2FztBMS8DGvdc5ahxbLOuBZtxQTtuD2qwdI4l6rmkfmf2QEJFhfDpssMufyrYjJtcGg5p5%2FN1DymXOYefuav6dOIOPhpqoI8stlR9mcjmsQ3VDJKPs52sLsC6H1AwJy1h8l2uU7DqE4pTMcAD7WN0yg%2FyKLO9MJSo68AGOqUBgV9mDJAuTpSo2yeVlB8GgyNKK%2Bl1oHBA0V%2FAktsBylR1XkuYbotxGVoTQKeXDnXAbfd0VMzAmr7W6mb28PnhRDazcAmaEZVpRq25UlAasfEI3DcRrwmM37PlbQnTtuyLtDiGQYYOusPgKg2sGtESxTlAkQw7YLfd92OdLSkWoOLIg3qntyAh4lb0nAxrdfNYcS1IxnB0dT1avbRrUFlYbw3f6pqK&X-Amz-Signature=c6cac2bc49dac50a27456547001f70deee96f8ca72067cdae172fce830c64284&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
