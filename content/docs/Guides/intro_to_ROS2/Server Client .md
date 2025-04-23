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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X4V7FOH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIBKxIQE2pKQ3xT%2FDixdC1wjTCP4e%2BI6pr4lQNk%2FPjH%2FQAiA%2B1mX0465ZbvPK9NhBClKAdqu2P9AuAiZqWYlFjP3fkCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYQJTuiaBMLf91Hx2KtwDyKe7YOdz53qFSc1ZXGXVWXL%2Fu2vhuhFJ19GhikcYytUDwdKuylbdrQkwe8OCHGcia1UkAuGskOfXR0vZYnW9ugn%2BcVof6FB1tRE28yeMz%2F5OqqhRciCAYQ%2Ffb97TMo1cBErTrSt4lZVllQansuKx5DvHLQ8v7sdPfnTz051pegQWJdf2Qyt7uEQ9iDC4GTrOBkaY3c%2FZnZOojOQ%2F8T%2FCI01Cf3pVHz%2FkCz4vCSFVzBbvQOI8oWUeFo8RkATfT%2BgBSnZvx3PWokLPucz0PGR1vBjNCYuGe0eGHvkDbL9GIAN33zZQKCjguMMYoOKxU5EndrcpVTRS9cULTHxfJ%2FLQu6YVONIIRpm3nUyaaH8oNZt4DVHLZck%2FK1dOWwAE1FO0KL7uVy%2FfkdvsVF80DwhWYqK52PG4ymSAUw65q16DQNxXPisATJe4dQZ277QrKLHB%2B4fZIchAlkHztj3VEnav28O3ysUjIaIdMP12fgwrRWqEnr5s7UEquXdE301Ul8vXs13btahUjcrzD%2F8P%2BCk6x25FdHbE3Vcvoa6tds5ZVJRZPyd5GeYpSXhrH07f1Ys1Di%2B5uFgnKxTqnWrUw0T%2F6FH12St52HKwWi3uVMEhReb66OUH53fR3WVr4hUwlbSiwAY6pgHlP%2B%2FT2v6%2B0vlnLzIo5GbQtkaRtXwA0vdlBT7buENDPWASkIsaoZGpV7riSu6hUKH4K4ScMd21L%2FeDRECTeX%2Ft3r7H35vEWn4%2F96wfmTIy8NVjbJelpvHkw%2Bzd12jkvlBd0XIgL1Ot6%2FsE5kZhKOK58QtYPYbaYfWXgWOWMMvs8I%2FVHMhEe4t8VKH8sIozTRlLUMm8Mo1a6k9RZ%2BIV0bu4FleMdAio&X-Amz-Signature=514fd468dfbb7a9a9846d65aab9b84d847077e159b43ea7aba3be41805693133&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X4V7FOH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIBKxIQE2pKQ3xT%2FDixdC1wjTCP4e%2BI6pr4lQNk%2FPjH%2FQAiA%2B1mX0465ZbvPK9NhBClKAdqu2P9AuAiZqWYlFjP3fkCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYQJTuiaBMLf91Hx2KtwDyKe7YOdz53qFSc1ZXGXVWXL%2Fu2vhuhFJ19GhikcYytUDwdKuylbdrQkwe8OCHGcia1UkAuGskOfXR0vZYnW9ugn%2BcVof6FB1tRE28yeMz%2F5OqqhRciCAYQ%2Ffb97TMo1cBErTrSt4lZVllQansuKx5DvHLQ8v7sdPfnTz051pegQWJdf2Qyt7uEQ9iDC4GTrOBkaY3c%2FZnZOojOQ%2F8T%2FCI01Cf3pVHz%2FkCz4vCSFVzBbvQOI8oWUeFo8RkATfT%2BgBSnZvx3PWokLPucz0PGR1vBjNCYuGe0eGHvkDbL9GIAN33zZQKCjguMMYoOKxU5EndrcpVTRS9cULTHxfJ%2FLQu6YVONIIRpm3nUyaaH8oNZt4DVHLZck%2FK1dOWwAE1FO0KL7uVy%2FfkdvsVF80DwhWYqK52PG4ymSAUw65q16DQNxXPisATJe4dQZ277QrKLHB%2B4fZIchAlkHztj3VEnav28O3ysUjIaIdMP12fgwrRWqEnr5s7UEquXdE301Ul8vXs13btahUjcrzD%2F8P%2BCk6x25FdHbE3Vcvoa6tds5ZVJRZPyd5GeYpSXhrH07f1Ys1Di%2B5uFgnKxTqnWrUw0T%2F6FH12St52HKwWi3uVMEhReb66OUH53fR3WVr4hUwlbSiwAY6pgHlP%2B%2FT2v6%2B0vlnLzIo5GbQtkaRtXwA0vdlBT7buENDPWASkIsaoZGpV7riSu6hUKH4K4ScMd21L%2FeDRECTeX%2Ft3r7H35vEWn4%2F96wfmTIy8NVjbJelpvHkw%2Bzd12jkvlBd0XIgL1Ot6%2FsE5kZhKOK58QtYPYbaYfWXgWOWMMvs8I%2FVHMhEe4t8VKH8sIozTRlLUMm8Mo1a6k9RZ%2BIV0bu4FleMdAio&X-Amz-Signature=c575a154cfd3e9c3c6fb621ec8d2a0a9971b5552372ca94da461094be7acda83&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X4V7FOH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIBKxIQE2pKQ3xT%2FDixdC1wjTCP4e%2BI6pr4lQNk%2FPjH%2FQAiA%2B1mX0465ZbvPK9NhBClKAdqu2P9AuAiZqWYlFjP3fkCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYQJTuiaBMLf91Hx2KtwDyKe7YOdz53qFSc1ZXGXVWXL%2Fu2vhuhFJ19GhikcYytUDwdKuylbdrQkwe8OCHGcia1UkAuGskOfXR0vZYnW9ugn%2BcVof6FB1tRE28yeMz%2F5OqqhRciCAYQ%2Ffb97TMo1cBErTrSt4lZVllQansuKx5DvHLQ8v7sdPfnTz051pegQWJdf2Qyt7uEQ9iDC4GTrOBkaY3c%2FZnZOojOQ%2F8T%2FCI01Cf3pVHz%2FkCz4vCSFVzBbvQOI8oWUeFo8RkATfT%2BgBSnZvx3PWokLPucz0PGR1vBjNCYuGe0eGHvkDbL9GIAN33zZQKCjguMMYoOKxU5EndrcpVTRS9cULTHxfJ%2FLQu6YVONIIRpm3nUyaaH8oNZt4DVHLZck%2FK1dOWwAE1FO0KL7uVy%2FfkdvsVF80DwhWYqK52PG4ymSAUw65q16DQNxXPisATJe4dQZ277QrKLHB%2B4fZIchAlkHztj3VEnav28O3ysUjIaIdMP12fgwrRWqEnr5s7UEquXdE301Ul8vXs13btahUjcrzD%2F8P%2BCk6x25FdHbE3Vcvoa6tds5ZVJRZPyd5GeYpSXhrH07f1Ys1Di%2B5uFgnKxTqnWrUw0T%2F6FH12St52HKwWi3uVMEhReb66OUH53fR3WVr4hUwlbSiwAY6pgHlP%2B%2FT2v6%2B0vlnLzIo5GbQtkaRtXwA0vdlBT7buENDPWASkIsaoZGpV7riSu6hUKH4K4ScMd21L%2FeDRECTeX%2Ft3r7H35vEWn4%2F96wfmTIy8NVjbJelpvHkw%2Bzd12jkvlBd0XIgL1Ot6%2FsE5kZhKOK58QtYPYbaYfWXgWOWMMvs8I%2FVHMhEe4t8VKH8sIozTRlLUMm8Mo1a6k9RZ%2BIV0bu4FleMdAio&X-Amz-Signature=3a17adc76808cca549709c909a0074c0ae96efde0389c02935024dc915a7a823&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X4V7FOH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIBKxIQE2pKQ3xT%2FDixdC1wjTCP4e%2BI6pr4lQNk%2FPjH%2FQAiA%2B1mX0465ZbvPK9NhBClKAdqu2P9AuAiZqWYlFjP3fkCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYQJTuiaBMLf91Hx2KtwDyKe7YOdz53qFSc1ZXGXVWXL%2Fu2vhuhFJ19GhikcYytUDwdKuylbdrQkwe8OCHGcia1UkAuGskOfXR0vZYnW9ugn%2BcVof6FB1tRE28yeMz%2F5OqqhRciCAYQ%2Ffb97TMo1cBErTrSt4lZVllQansuKx5DvHLQ8v7sdPfnTz051pegQWJdf2Qyt7uEQ9iDC4GTrOBkaY3c%2FZnZOojOQ%2F8T%2FCI01Cf3pVHz%2FkCz4vCSFVzBbvQOI8oWUeFo8RkATfT%2BgBSnZvx3PWokLPucz0PGR1vBjNCYuGe0eGHvkDbL9GIAN33zZQKCjguMMYoOKxU5EndrcpVTRS9cULTHxfJ%2FLQu6YVONIIRpm3nUyaaH8oNZt4DVHLZck%2FK1dOWwAE1FO0KL7uVy%2FfkdvsVF80DwhWYqK52PG4ymSAUw65q16DQNxXPisATJe4dQZ277QrKLHB%2B4fZIchAlkHztj3VEnav28O3ysUjIaIdMP12fgwrRWqEnr5s7UEquXdE301Ul8vXs13btahUjcrzD%2F8P%2BCk6x25FdHbE3Vcvoa6tds5ZVJRZPyd5GeYpSXhrH07f1Ys1Di%2B5uFgnKxTqnWrUw0T%2F6FH12St52HKwWi3uVMEhReb66OUH53fR3WVr4hUwlbSiwAY6pgHlP%2B%2FT2v6%2B0vlnLzIo5GbQtkaRtXwA0vdlBT7buENDPWASkIsaoZGpV7riSu6hUKH4K4ScMd21L%2FeDRECTeX%2Ft3r7H35vEWn4%2F96wfmTIy8NVjbJelpvHkw%2Bzd12jkvlBd0XIgL1Ot6%2FsE5kZhKOK58QtYPYbaYfWXgWOWMMvs8I%2FVHMhEe4t8VKH8sIozTRlLUMm8Mo1a6k9RZ%2BIV0bu4FleMdAio&X-Amz-Signature=fdf25e09beb37f1efa7e4ad4602a927e80a3bbdf291c99b2cb81b2ccb94b0341&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X4V7FOH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIBKxIQE2pKQ3xT%2FDixdC1wjTCP4e%2BI6pr4lQNk%2FPjH%2FQAiA%2B1mX0465ZbvPK9NhBClKAdqu2P9AuAiZqWYlFjP3fkCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYQJTuiaBMLf91Hx2KtwDyKe7YOdz53qFSc1ZXGXVWXL%2Fu2vhuhFJ19GhikcYytUDwdKuylbdrQkwe8OCHGcia1UkAuGskOfXR0vZYnW9ugn%2BcVof6FB1tRE28yeMz%2F5OqqhRciCAYQ%2Ffb97TMo1cBErTrSt4lZVllQansuKx5DvHLQ8v7sdPfnTz051pegQWJdf2Qyt7uEQ9iDC4GTrOBkaY3c%2FZnZOojOQ%2F8T%2FCI01Cf3pVHz%2FkCz4vCSFVzBbvQOI8oWUeFo8RkATfT%2BgBSnZvx3PWokLPucz0PGR1vBjNCYuGe0eGHvkDbL9GIAN33zZQKCjguMMYoOKxU5EndrcpVTRS9cULTHxfJ%2FLQu6YVONIIRpm3nUyaaH8oNZt4DVHLZck%2FK1dOWwAE1FO0KL7uVy%2FfkdvsVF80DwhWYqK52PG4ymSAUw65q16DQNxXPisATJe4dQZ277QrKLHB%2B4fZIchAlkHztj3VEnav28O3ysUjIaIdMP12fgwrRWqEnr5s7UEquXdE301Ul8vXs13btahUjcrzD%2F8P%2BCk6x25FdHbE3Vcvoa6tds5ZVJRZPyd5GeYpSXhrH07f1Ys1Di%2B5uFgnKxTqnWrUw0T%2F6FH12St52HKwWi3uVMEhReb66OUH53fR3WVr4hUwlbSiwAY6pgHlP%2B%2FT2v6%2B0vlnLzIo5GbQtkaRtXwA0vdlBT7buENDPWASkIsaoZGpV7riSu6hUKH4K4ScMd21L%2FeDRECTeX%2Ft3r7H35vEWn4%2F96wfmTIy8NVjbJelpvHkw%2Bzd12jkvlBd0XIgL1Ot6%2FsE5kZhKOK58QtYPYbaYfWXgWOWMMvs8I%2FVHMhEe4t8VKH8sIozTRlLUMm8Mo1a6k9RZ%2BIV0bu4FleMdAio&X-Amz-Signature=efa7b157f59a463992985882ad3dd17f4e399187b3df8720b3d30d04d26e8a46&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
