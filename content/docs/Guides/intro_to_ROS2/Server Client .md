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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7QWCYB3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCozGWTy4w2CN%2F07wj3m5mEQV0uiQPCEoNuGYLQC3KVkAIgGIaUEemLslFfTVsC0zxLFv%2F4YXShrULIcbNQjnycnU8q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDLF8yMaUD1HQ8FNM1SrcAzXHyunocbsKhFIAInItG%2B%2B8dwDR1yTXtzxFwPvIwRUsQwzar4i4yfg7fLf6SNPhQXLtOAH7rvVuNnmK%2BlGZk4aY5EcUqJRPg0ZFq7VVKM8rIxW5H7R553J6tKFbAsDtxktt3y32wpuwfRoK5aZv4IB050dWlqN0G%2FULZpJmki%2BDguKPzEx7sB9q0JMhn6CeGYdFT0S9FVsr6ukUJtAjYDiIKu38Aj9%2FEPz9MC0pnmlavNR8mxN%2F6G4NV5H3Stg1%2F32ZEL4UNlkkCLgiJttZYYcKhQa%2BvruoI%2B56j1zV5%2B94u9c9HnPAT%2BezXZUTBuIfU4w3CneTxUyfvuUqzafBaW9wVbCqQIt9Hq6sr93lqG9Y5i%2FwQhlMwmL67PnJT8uL07GIgZmA6f6Z5wCngPth9xoR10B1JBVWfHiRoSJ2GwRcwPZRxDL7%2BoUpKtdqClHV5L%2FwxFVweK4ZSJq0n%2FYZOrqFnZqD4PoKI6bC1LqpxtSVxAjW2SO1AKtmdV6DcwGshZkSeM8QEnqCI6okCsz%2Fyu6fnVfFJYieBijqeQUJWpjLo%2FuiMNtKFm8duRyHRWt3CMJkJokgHqJ21ip0wBurHIEOYJjDFAwsvtIFYxt9usHgHhKlSkKLsEQp9s79MOWC9r8GOqUBMxzcKOHUHIB03Xr%2BjlGscepbCJc0oiQ6bED4qIBAGLBWueP50PWInFRWZiWCiAUv5TbyFp6wwiUMcXvalBAy83eowHckZPHKfhyH8XYqpAzFg3tzZ1bxAy0hTDoOkoVqQSfAe1DYeQM4CoUzTfpMeffzVkkvL%2Fq7TfoTs3QTIGRakUOYQ6LMiK8B1Vc8wp1Teed%2FjT0Z7jA5T8RHyPrD6lZ3IvFS&X-Amz-Signature=a285b35be5c394f993151954c19c8a2769996558375df7428481af9204a3c494&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7QWCYB3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCozGWTy4w2CN%2F07wj3m5mEQV0uiQPCEoNuGYLQC3KVkAIgGIaUEemLslFfTVsC0zxLFv%2F4YXShrULIcbNQjnycnU8q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDLF8yMaUD1HQ8FNM1SrcAzXHyunocbsKhFIAInItG%2B%2B8dwDR1yTXtzxFwPvIwRUsQwzar4i4yfg7fLf6SNPhQXLtOAH7rvVuNnmK%2BlGZk4aY5EcUqJRPg0ZFq7VVKM8rIxW5H7R553J6tKFbAsDtxktt3y32wpuwfRoK5aZv4IB050dWlqN0G%2FULZpJmki%2BDguKPzEx7sB9q0JMhn6CeGYdFT0S9FVsr6ukUJtAjYDiIKu38Aj9%2FEPz9MC0pnmlavNR8mxN%2F6G4NV5H3Stg1%2F32ZEL4UNlkkCLgiJttZYYcKhQa%2BvruoI%2B56j1zV5%2B94u9c9HnPAT%2BezXZUTBuIfU4w3CneTxUyfvuUqzafBaW9wVbCqQIt9Hq6sr93lqG9Y5i%2FwQhlMwmL67PnJT8uL07GIgZmA6f6Z5wCngPth9xoR10B1JBVWfHiRoSJ2GwRcwPZRxDL7%2BoUpKtdqClHV5L%2FwxFVweK4ZSJq0n%2FYZOrqFnZqD4PoKI6bC1LqpxtSVxAjW2SO1AKtmdV6DcwGshZkSeM8QEnqCI6okCsz%2Fyu6fnVfFJYieBijqeQUJWpjLo%2FuiMNtKFm8duRyHRWt3CMJkJokgHqJ21ip0wBurHIEOYJjDFAwsvtIFYxt9usHgHhKlSkKLsEQp9s79MOWC9r8GOqUBMxzcKOHUHIB03Xr%2BjlGscepbCJc0oiQ6bED4qIBAGLBWueP50PWInFRWZiWCiAUv5TbyFp6wwiUMcXvalBAy83eowHckZPHKfhyH8XYqpAzFg3tzZ1bxAy0hTDoOkoVqQSfAe1DYeQM4CoUzTfpMeffzVkkvL%2Fq7TfoTs3QTIGRakUOYQ6LMiK8B1Vc8wp1Teed%2FjT0Z7jA5T8RHyPrD6lZ3IvFS&X-Amz-Signature=5ae2fc0b5d03de46fd4e8d7f73aa7c480d232b1f3906c55f515069830ecf5833&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7QWCYB3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCozGWTy4w2CN%2F07wj3m5mEQV0uiQPCEoNuGYLQC3KVkAIgGIaUEemLslFfTVsC0zxLFv%2F4YXShrULIcbNQjnycnU8q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDLF8yMaUD1HQ8FNM1SrcAzXHyunocbsKhFIAInItG%2B%2B8dwDR1yTXtzxFwPvIwRUsQwzar4i4yfg7fLf6SNPhQXLtOAH7rvVuNnmK%2BlGZk4aY5EcUqJRPg0ZFq7VVKM8rIxW5H7R553J6tKFbAsDtxktt3y32wpuwfRoK5aZv4IB050dWlqN0G%2FULZpJmki%2BDguKPzEx7sB9q0JMhn6CeGYdFT0S9FVsr6ukUJtAjYDiIKu38Aj9%2FEPz9MC0pnmlavNR8mxN%2F6G4NV5H3Stg1%2F32ZEL4UNlkkCLgiJttZYYcKhQa%2BvruoI%2B56j1zV5%2B94u9c9HnPAT%2BezXZUTBuIfU4w3CneTxUyfvuUqzafBaW9wVbCqQIt9Hq6sr93lqG9Y5i%2FwQhlMwmL67PnJT8uL07GIgZmA6f6Z5wCngPth9xoR10B1JBVWfHiRoSJ2GwRcwPZRxDL7%2BoUpKtdqClHV5L%2FwxFVweK4ZSJq0n%2FYZOrqFnZqD4PoKI6bC1LqpxtSVxAjW2SO1AKtmdV6DcwGshZkSeM8QEnqCI6okCsz%2Fyu6fnVfFJYieBijqeQUJWpjLo%2FuiMNtKFm8duRyHRWt3CMJkJokgHqJ21ip0wBurHIEOYJjDFAwsvtIFYxt9usHgHhKlSkKLsEQp9s79MOWC9r8GOqUBMxzcKOHUHIB03Xr%2BjlGscepbCJc0oiQ6bED4qIBAGLBWueP50PWInFRWZiWCiAUv5TbyFp6wwiUMcXvalBAy83eowHckZPHKfhyH8XYqpAzFg3tzZ1bxAy0hTDoOkoVqQSfAe1DYeQM4CoUzTfpMeffzVkkvL%2Fq7TfoTs3QTIGRakUOYQ6LMiK8B1Vc8wp1Teed%2FjT0Z7jA5T8RHyPrD6lZ3IvFS&X-Amz-Signature=3135232b3fef9354af05c6f62fbc90dc8ddaddbcfd7fd9003acf10389be6b42f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7QWCYB3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCozGWTy4w2CN%2F07wj3m5mEQV0uiQPCEoNuGYLQC3KVkAIgGIaUEemLslFfTVsC0zxLFv%2F4YXShrULIcbNQjnycnU8q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDLF8yMaUD1HQ8FNM1SrcAzXHyunocbsKhFIAInItG%2B%2B8dwDR1yTXtzxFwPvIwRUsQwzar4i4yfg7fLf6SNPhQXLtOAH7rvVuNnmK%2BlGZk4aY5EcUqJRPg0ZFq7VVKM8rIxW5H7R553J6tKFbAsDtxktt3y32wpuwfRoK5aZv4IB050dWlqN0G%2FULZpJmki%2BDguKPzEx7sB9q0JMhn6CeGYdFT0S9FVsr6ukUJtAjYDiIKu38Aj9%2FEPz9MC0pnmlavNR8mxN%2F6G4NV5H3Stg1%2F32ZEL4UNlkkCLgiJttZYYcKhQa%2BvruoI%2B56j1zV5%2B94u9c9HnPAT%2BezXZUTBuIfU4w3CneTxUyfvuUqzafBaW9wVbCqQIt9Hq6sr93lqG9Y5i%2FwQhlMwmL67PnJT8uL07GIgZmA6f6Z5wCngPth9xoR10B1JBVWfHiRoSJ2GwRcwPZRxDL7%2BoUpKtdqClHV5L%2FwxFVweK4ZSJq0n%2FYZOrqFnZqD4PoKI6bC1LqpxtSVxAjW2SO1AKtmdV6DcwGshZkSeM8QEnqCI6okCsz%2Fyu6fnVfFJYieBijqeQUJWpjLo%2FuiMNtKFm8duRyHRWt3CMJkJokgHqJ21ip0wBurHIEOYJjDFAwsvtIFYxt9usHgHhKlSkKLsEQp9s79MOWC9r8GOqUBMxzcKOHUHIB03Xr%2BjlGscepbCJc0oiQ6bED4qIBAGLBWueP50PWInFRWZiWCiAUv5TbyFp6wwiUMcXvalBAy83eowHckZPHKfhyH8XYqpAzFg3tzZ1bxAy0hTDoOkoVqQSfAe1DYeQM4CoUzTfpMeffzVkkvL%2Fq7TfoTs3QTIGRakUOYQ6LMiK8B1Vc8wp1Teed%2FjT0Z7jA5T8RHyPrD6lZ3IvFS&X-Amz-Signature=d5d3d01663cdacb777ecf9a9a17c081829d450f2cd0ce9655491dd4390c2f811&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7QWCYB3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCozGWTy4w2CN%2F07wj3m5mEQV0uiQPCEoNuGYLQC3KVkAIgGIaUEemLslFfTVsC0zxLFv%2F4YXShrULIcbNQjnycnU8q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDLF8yMaUD1HQ8FNM1SrcAzXHyunocbsKhFIAInItG%2B%2B8dwDR1yTXtzxFwPvIwRUsQwzar4i4yfg7fLf6SNPhQXLtOAH7rvVuNnmK%2BlGZk4aY5EcUqJRPg0ZFq7VVKM8rIxW5H7R553J6tKFbAsDtxktt3y32wpuwfRoK5aZv4IB050dWlqN0G%2FULZpJmki%2BDguKPzEx7sB9q0JMhn6CeGYdFT0S9FVsr6ukUJtAjYDiIKu38Aj9%2FEPz9MC0pnmlavNR8mxN%2F6G4NV5H3Stg1%2F32ZEL4UNlkkCLgiJttZYYcKhQa%2BvruoI%2B56j1zV5%2B94u9c9HnPAT%2BezXZUTBuIfU4w3CneTxUyfvuUqzafBaW9wVbCqQIt9Hq6sr93lqG9Y5i%2FwQhlMwmL67PnJT8uL07GIgZmA6f6Z5wCngPth9xoR10B1JBVWfHiRoSJ2GwRcwPZRxDL7%2BoUpKtdqClHV5L%2FwxFVweK4ZSJq0n%2FYZOrqFnZqD4PoKI6bC1LqpxtSVxAjW2SO1AKtmdV6DcwGshZkSeM8QEnqCI6okCsz%2Fyu6fnVfFJYieBijqeQUJWpjLo%2FuiMNtKFm8duRyHRWt3CMJkJokgHqJ21ip0wBurHIEOYJjDFAwsvtIFYxt9usHgHhKlSkKLsEQp9s79MOWC9r8GOqUBMxzcKOHUHIB03Xr%2BjlGscepbCJc0oiQ6bED4qIBAGLBWueP50PWInFRWZiWCiAUv5TbyFp6wwiUMcXvalBAy83eowHckZPHKfhyH8XYqpAzFg3tzZ1bxAy0hTDoOkoVqQSfAe1DYeQM4CoUzTfpMeffzVkkvL%2Fq7TfoTs3QTIGRakUOYQ6LMiK8B1Vc8wp1Teed%2FjT0Z7jA5T8RHyPrD6lZ3IvFS&X-Amz-Signature=44bf8e0cfb81e637b3acee3e83c9e4d74eb9c3fa7adafc9034d66acc465752bf&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
