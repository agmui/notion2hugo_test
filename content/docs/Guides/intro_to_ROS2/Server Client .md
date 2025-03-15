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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KQXU77B%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwkNK%2BZksnNyoolY8acrTiaHKmvEKoV%2F0uwltXN9U0NAiAy8NwcSu3ItpkrhbSu0XjdR1NZVLSRuU4Jy1zvcf%2BNOCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMjbFQ9z8HAEJ%2By%2ByfKtwDEvv7t7Izwe4NTE3ti9y2IB4l42q0uU4KrTOTaxKkTG58ISYLocKTezdzXzTmhj7GT5rQ%2FgMYdHclb3hZfBC%2FN7Sc5CB1edyct%2BrBBywRiezpYRNb2DxAD3yushlKj2U9c9LLQxrxj1n2vkeOWL60PiCtWaqfw7Fz7ZBERFLyH5G5D2g5AQslJXc0uwAtB%2FnoaRRfhttEPJ8NLk3e2SGNt8hEsryiqj3rdWQ7fTxERSnlyt5o5FSxB6RRfWQqguORu1H1icpu4v%2F0gi3L1wo0mXpO%2F1m0yu78dQaGpGsLSPEBdedP2LuZZzI%2F8lJ5sIW2lpIhAAXWhj9r5QjOXHClg9jEPa%2BBUT%2BVjk%2BeUdTXyuFu7ruwd%2FsugbkI5h2HGvdrySxAaTikRo216VN0VT2TdDgHZEgNrnU1HecFMVuzqXGVb4ViHwZBwrKLtE0%2Fnr6vzaXzGVpNkodTu3uAArm%2BIO2gU7zmMmFdmfmmmjdXF52LLd8j2hf18jMc9DU9hqoGQnaiIMoZ41QLlfycERiaBNNMmS7zsUu%2F8OFiREA8l8B7JMD7Q15BsnYPKsyW5qkDhXa%2FRwrnFXr5RK9jq0YPGx3rn6xgdUSfJj2uTGTZOptaU1rVj6QFVsDSR%2B8wyo3XvgY6pgFO64u5%2F%2FZgdNBZEfAUkzuL00eUOr9o89%2F9H7xLU%2FwXXbcIR0nl4xRE4hlrjwpuRxiYgpFHrMP1Hzx%2BXc8mrMKW%2FYoGs9TIBieYcDKNKq4vYEd4a3ubZOqUAmyixnMfLlYRXwtgTyrIFFVWqXQFdD1byebMDzevk7k6o8jRpTdzCRXaf3x%2F9GPGlju8tu8HhhEWgFGS2W7ZdTIh42exlJoI5MRqKsrT&X-Amz-Signature=54422f7df9732f2f034387d3b87b302305954dd6bfd043b34b9be78e5deda22b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KQXU77B%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwkNK%2BZksnNyoolY8acrTiaHKmvEKoV%2F0uwltXN9U0NAiAy8NwcSu3ItpkrhbSu0XjdR1NZVLSRuU4Jy1zvcf%2BNOCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMjbFQ9z8HAEJ%2By%2ByfKtwDEvv7t7Izwe4NTE3ti9y2IB4l42q0uU4KrTOTaxKkTG58ISYLocKTezdzXzTmhj7GT5rQ%2FgMYdHclb3hZfBC%2FN7Sc5CB1edyct%2BrBBywRiezpYRNb2DxAD3yushlKj2U9c9LLQxrxj1n2vkeOWL60PiCtWaqfw7Fz7ZBERFLyH5G5D2g5AQslJXc0uwAtB%2FnoaRRfhttEPJ8NLk3e2SGNt8hEsryiqj3rdWQ7fTxERSnlyt5o5FSxB6RRfWQqguORu1H1icpu4v%2F0gi3L1wo0mXpO%2F1m0yu78dQaGpGsLSPEBdedP2LuZZzI%2F8lJ5sIW2lpIhAAXWhj9r5QjOXHClg9jEPa%2BBUT%2BVjk%2BeUdTXyuFu7ruwd%2FsugbkI5h2HGvdrySxAaTikRo216VN0VT2TdDgHZEgNrnU1HecFMVuzqXGVb4ViHwZBwrKLtE0%2Fnr6vzaXzGVpNkodTu3uAArm%2BIO2gU7zmMmFdmfmmmjdXF52LLd8j2hf18jMc9DU9hqoGQnaiIMoZ41QLlfycERiaBNNMmS7zsUu%2F8OFiREA8l8B7JMD7Q15BsnYPKsyW5qkDhXa%2FRwrnFXr5RK9jq0YPGx3rn6xgdUSfJj2uTGTZOptaU1rVj6QFVsDSR%2B8wyo3XvgY6pgFO64u5%2F%2FZgdNBZEfAUkzuL00eUOr9o89%2F9H7xLU%2FwXXbcIR0nl4xRE4hlrjwpuRxiYgpFHrMP1Hzx%2BXc8mrMKW%2FYoGs9TIBieYcDKNKq4vYEd4a3ubZOqUAmyixnMfLlYRXwtgTyrIFFVWqXQFdD1byebMDzevk7k6o8jRpTdzCRXaf3x%2F9GPGlju8tu8HhhEWgFGS2W7ZdTIh42exlJoI5MRqKsrT&X-Amz-Signature=fd131f1c5b56451c94360308f1ca9352548a800a3e1ba50acce34c701f5ed0c2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KQXU77B%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwkNK%2BZksnNyoolY8acrTiaHKmvEKoV%2F0uwltXN9U0NAiAy8NwcSu3ItpkrhbSu0XjdR1NZVLSRuU4Jy1zvcf%2BNOCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMjbFQ9z8HAEJ%2By%2ByfKtwDEvv7t7Izwe4NTE3ti9y2IB4l42q0uU4KrTOTaxKkTG58ISYLocKTezdzXzTmhj7GT5rQ%2FgMYdHclb3hZfBC%2FN7Sc5CB1edyct%2BrBBywRiezpYRNb2DxAD3yushlKj2U9c9LLQxrxj1n2vkeOWL60PiCtWaqfw7Fz7ZBERFLyH5G5D2g5AQslJXc0uwAtB%2FnoaRRfhttEPJ8NLk3e2SGNt8hEsryiqj3rdWQ7fTxERSnlyt5o5FSxB6RRfWQqguORu1H1icpu4v%2F0gi3L1wo0mXpO%2F1m0yu78dQaGpGsLSPEBdedP2LuZZzI%2F8lJ5sIW2lpIhAAXWhj9r5QjOXHClg9jEPa%2BBUT%2BVjk%2BeUdTXyuFu7ruwd%2FsugbkI5h2HGvdrySxAaTikRo216VN0VT2TdDgHZEgNrnU1HecFMVuzqXGVb4ViHwZBwrKLtE0%2Fnr6vzaXzGVpNkodTu3uAArm%2BIO2gU7zmMmFdmfmmmjdXF52LLd8j2hf18jMc9DU9hqoGQnaiIMoZ41QLlfycERiaBNNMmS7zsUu%2F8OFiREA8l8B7JMD7Q15BsnYPKsyW5qkDhXa%2FRwrnFXr5RK9jq0YPGx3rn6xgdUSfJj2uTGTZOptaU1rVj6QFVsDSR%2B8wyo3XvgY6pgFO64u5%2F%2FZgdNBZEfAUkzuL00eUOr9o89%2F9H7xLU%2FwXXbcIR0nl4xRE4hlrjwpuRxiYgpFHrMP1Hzx%2BXc8mrMKW%2FYoGs9TIBieYcDKNKq4vYEd4a3ubZOqUAmyixnMfLlYRXwtgTyrIFFVWqXQFdD1byebMDzevk7k6o8jRpTdzCRXaf3x%2F9GPGlju8tu8HhhEWgFGS2W7ZdTIh42exlJoI5MRqKsrT&X-Amz-Signature=bd8fd3d514711b7091ace8cc24098d668f3539bcab7f1d1b3b5fc180e8e777fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KQXU77B%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwkNK%2BZksnNyoolY8acrTiaHKmvEKoV%2F0uwltXN9U0NAiAy8NwcSu3ItpkrhbSu0XjdR1NZVLSRuU4Jy1zvcf%2BNOCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMjbFQ9z8HAEJ%2By%2ByfKtwDEvv7t7Izwe4NTE3ti9y2IB4l42q0uU4KrTOTaxKkTG58ISYLocKTezdzXzTmhj7GT5rQ%2FgMYdHclb3hZfBC%2FN7Sc5CB1edyct%2BrBBywRiezpYRNb2DxAD3yushlKj2U9c9LLQxrxj1n2vkeOWL60PiCtWaqfw7Fz7ZBERFLyH5G5D2g5AQslJXc0uwAtB%2FnoaRRfhttEPJ8NLk3e2SGNt8hEsryiqj3rdWQ7fTxERSnlyt5o5FSxB6RRfWQqguORu1H1icpu4v%2F0gi3L1wo0mXpO%2F1m0yu78dQaGpGsLSPEBdedP2LuZZzI%2F8lJ5sIW2lpIhAAXWhj9r5QjOXHClg9jEPa%2BBUT%2BVjk%2BeUdTXyuFu7ruwd%2FsugbkI5h2HGvdrySxAaTikRo216VN0VT2TdDgHZEgNrnU1HecFMVuzqXGVb4ViHwZBwrKLtE0%2Fnr6vzaXzGVpNkodTu3uAArm%2BIO2gU7zmMmFdmfmmmjdXF52LLd8j2hf18jMc9DU9hqoGQnaiIMoZ41QLlfycERiaBNNMmS7zsUu%2F8OFiREA8l8B7JMD7Q15BsnYPKsyW5qkDhXa%2FRwrnFXr5RK9jq0YPGx3rn6xgdUSfJj2uTGTZOptaU1rVj6QFVsDSR%2B8wyo3XvgY6pgFO64u5%2F%2FZgdNBZEfAUkzuL00eUOr9o89%2F9H7xLU%2FwXXbcIR0nl4xRE4hlrjwpuRxiYgpFHrMP1Hzx%2BXc8mrMKW%2FYoGs9TIBieYcDKNKq4vYEd4a3ubZOqUAmyixnMfLlYRXwtgTyrIFFVWqXQFdD1byebMDzevk7k6o8jRpTdzCRXaf3x%2F9GPGlju8tu8HhhEWgFGS2W7ZdTIh42exlJoI5MRqKsrT&X-Amz-Signature=5c25840bef6c302320a0e16ad35861397d35c7b07656180ed1b70f9862abbe91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KQXU77B%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwkNK%2BZksnNyoolY8acrTiaHKmvEKoV%2F0uwltXN9U0NAiAy8NwcSu3ItpkrhbSu0XjdR1NZVLSRuU4Jy1zvcf%2BNOCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMjbFQ9z8HAEJ%2By%2ByfKtwDEvv7t7Izwe4NTE3ti9y2IB4l42q0uU4KrTOTaxKkTG58ISYLocKTezdzXzTmhj7GT5rQ%2FgMYdHclb3hZfBC%2FN7Sc5CB1edyct%2BrBBywRiezpYRNb2DxAD3yushlKj2U9c9LLQxrxj1n2vkeOWL60PiCtWaqfw7Fz7ZBERFLyH5G5D2g5AQslJXc0uwAtB%2FnoaRRfhttEPJ8NLk3e2SGNt8hEsryiqj3rdWQ7fTxERSnlyt5o5FSxB6RRfWQqguORu1H1icpu4v%2F0gi3L1wo0mXpO%2F1m0yu78dQaGpGsLSPEBdedP2LuZZzI%2F8lJ5sIW2lpIhAAXWhj9r5QjOXHClg9jEPa%2BBUT%2BVjk%2BeUdTXyuFu7ruwd%2FsugbkI5h2HGvdrySxAaTikRo216VN0VT2TdDgHZEgNrnU1HecFMVuzqXGVb4ViHwZBwrKLtE0%2Fnr6vzaXzGVpNkodTu3uAArm%2BIO2gU7zmMmFdmfmmmjdXF52LLd8j2hf18jMc9DU9hqoGQnaiIMoZ41QLlfycERiaBNNMmS7zsUu%2F8OFiREA8l8B7JMD7Q15BsnYPKsyW5qkDhXa%2FRwrnFXr5RK9jq0YPGx3rn6xgdUSfJj2uTGTZOptaU1rVj6QFVsDSR%2B8wyo3XvgY6pgFO64u5%2F%2FZgdNBZEfAUkzuL00eUOr9o89%2F9H7xLU%2FwXXbcIR0nl4xRE4hlrjwpuRxiYgpFHrMP1Hzx%2BXc8mrMKW%2FYoGs9TIBieYcDKNKq4vYEd4a3ubZOqUAmyixnMfLlYRXwtgTyrIFFVWqXQFdD1byebMDzevk7k6o8jRpTdzCRXaf3x%2F9GPGlju8tu8HhhEWgFGS2W7ZdTIh42exlJoI5MRqKsrT&X-Amz-Signature=c947849a5f64c6c9b4e5be480216d66bebf515ca93f316ab6cff55feddbc3d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
