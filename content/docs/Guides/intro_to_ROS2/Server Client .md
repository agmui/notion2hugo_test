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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGG5MIFG%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEKiRhXb3sxrN435dmjG4ZxAC9wuUBmWGuQrlAsIsjcAiEA6azLRx%2FwhkchmlGO9vFkotJeLykr7jmKLWB0V6%2FgYiQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FlY16a8ViRygoVUSrcAyr%2Fk3kAdK%2BpKx1v%2B6mqs%2FLifbSYU8c8TiqrF41h1qi0%2FehaVpcCTn5TzFf1JB%2B8SGMsbEXVO7PmC5AXo8emO5YkGVP5jOS62cN4BTEdiVykhvBjHoLs0fh7uvO82jLZZCfBCdr0y02dLPUyNdq%2FKTMlD2dPVLwPaYdhAFSoFUKew4B3KcYNyAcHh1gwvasoMLkYa4wUYDSvQXW0gGa6WOOAZuQekeLTdpq1nm6uKM3Bb5FPXjAyY%2B7LXCanjEhhLwXHQ7bvhpcvvh8sYIT7bVrnbFetCIYhEGSZOOFCgHKgHg%2FCiiIXnulZTxRcZQhhZp12y8zA8WdWjGCo%2FUx3p1gSay7GJutKEyn99%2FvhijVXV1X1IjKczPZuYUvgPAMqtAQ%2F4DxhAaIVI56kG8C5BN3eU4Ju1kbr9VdoLnDd27scJZhjsWQ8DQxafgvve0D5JJIFfVKhovpR6d1Grb1sZgf29erEVCZlvb9xQvmDH82wier2GiF42YJcS%2FErJPgcVlJg0pP5xDsx3j2vw3w8TPc0pAQX1K%2FUrcNp79AhGU40KfJ3jUP6sLlaUlh9TyJ7tB9eZyY%2FlW1uO3YqS8%2Fyc17YorRdQO7Vw0dWAeyiqf70cT5s%2FIcAFdPDecHYMKqWjMcGOqUBd%2FuI0UDY2DZ5LoXchhFfKrUTvWlDTCVrddW8E86IoiNMBZ9u%2B%2FQ1blxMvE5K8aynbKyCOoS2qcQLyJTllWVBNrFNpH56hbY2OxwPi1luuHtamoA4PC9De8kynjpzAwoYRGxNyTNq0xZjmoQtJnkDijfslmyo4ImhMFQjhU1s8AA7u7DLu5egTpywm75i2c0OvIinEFkXfFpk4u0ySjW9QeLGLPLy&X-Amz-Signature=53ba063f541f3bb8d42e4251ba81382d2b50a9e6790bfae3ca048fea96df0cef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGG5MIFG%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEKiRhXb3sxrN435dmjG4ZxAC9wuUBmWGuQrlAsIsjcAiEA6azLRx%2FwhkchmlGO9vFkotJeLykr7jmKLWB0V6%2FgYiQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FlY16a8ViRygoVUSrcAyr%2Fk3kAdK%2BpKx1v%2B6mqs%2FLifbSYU8c8TiqrF41h1qi0%2FehaVpcCTn5TzFf1JB%2B8SGMsbEXVO7PmC5AXo8emO5YkGVP5jOS62cN4BTEdiVykhvBjHoLs0fh7uvO82jLZZCfBCdr0y02dLPUyNdq%2FKTMlD2dPVLwPaYdhAFSoFUKew4B3KcYNyAcHh1gwvasoMLkYa4wUYDSvQXW0gGa6WOOAZuQekeLTdpq1nm6uKM3Bb5FPXjAyY%2B7LXCanjEhhLwXHQ7bvhpcvvh8sYIT7bVrnbFetCIYhEGSZOOFCgHKgHg%2FCiiIXnulZTxRcZQhhZp12y8zA8WdWjGCo%2FUx3p1gSay7GJutKEyn99%2FvhijVXV1X1IjKczPZuYUvgPAMqtAQ%2F4DxhAaIVI56kG8C5BN3eU4Ju1kbr9VdoLnDd27scJZhjsWQ8DQxafgvve0D5JJIFfVKhovpR6d1Grb1sZgf29erEVCZlvb9xQvmDH82wier2GiF42YJcS%2FErJPgcVlJg0pP5xDsx3j2vw3w8TPc0pAQX1K%2FUrcNp79AhGU40KfJ3jUP6sLlaUlh9TyJ7tB9eZyY%2FlW1uO3YqS8%2Fyc17YorRdQO7Vw0dWAeyiqf70cT5s%2FIcAFdPDecHYMKqWjMcGOqUBd%2FuI0UDY2DZ5LoXchhFfKrUTvWlDTCVrddW8E86IoiNMBZ9u%2B%2FQ1blxMvE5K8aynbKyCOoS2qcQLyJTllWVBNrFNpH56hbY2OxwPi1luuHtamoA4PC9De8kynjpzAwoYRGxNyTNq0xZjmoQtJnkDijfslmyo4ImhMFQjhU1s8AA7u7DLu5egTpywm75i2c0OvIinEFkXfFpk4u0ySjW9QeLGLPLy&X-Amz-Signature=b9880920819449bffc0faaa9246a4c63aad83dae0199763c98542ddf6eac9bd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGG5MIFG%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEKiRhXb3sxrN435dmjG4ZxAC9wuUBmWGuQrlAsIsjcAiEA6azLRx%2FwhkchmlGO9vFkotJeLykr7jmKLWB0V6%2FgYiQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FlY16a8ViRygoVUSrcAyr%2Fk3kAdK%2BpKx1v%2B6mqs%2FLifbSYU8c8TiqrF41h1qi0%2FehaVpcCTn5TzFf1JB%2B8SGMsbEXVO7PmC5AXo8emO5YkGVP5jOS62cN4BTEdiVykhvBjHoLs0fh7uvO82jLZZCfBCdr0y02dLPUyNdq%2FKTMlD2dPVLwPaYdhAFSoFUKew4B3KcYNyAcHh1gwvasoMLkYa4wUYDSvQXW0gGa6WOOAZuQekeLTdpq1nm6uKM3Bb5FPXjAyY%2B7LXCanjEhhLwXHQ7bvhpcvvh8sYIT7bVrnbFetCIYhEGSZOOFCgHKgHg%2FCiiIXnulZTxRcZQhhZp12y8zA8WdWjGCo%2FUx3p1gSay7GJutKEyn99%2FvhijVXV1X1IjKczPZuYUvgPAMqtAQ%2F4DxhAaIVI56kG8C5BN3eU4Ju1kbr9VdoLnDd27scJZhjsWQ8DQxafgvve0D5JJIFfVKhovpR6d1Grb1sZgf29erEVCZlvb9xQvmDH82wier2GiF42YJcS%2FErJPgcVlJg0pP5xDsx3j2vw3w8TPc0pAQX1K%2FUrcNp79AhGU40KfJ3jUP6sLlaUlh9TyJ7tB9eZyY%2FlW1uO3YqS8%2Fyc17YorRdQO7Vw0dWAeyiqf70cT5s%2FIcAFdPDecHYMKqWjMcGOqUBd%2FuI0UDY2DZ5LoXchhFfKrUTvWlDTCVrddW8E86IoiNMBZ9u%2B%2FQ1blxMvE5K8aynbKyCOoS2qcQLyJTllWVBNrFNpH56hbY2OxwPi1luuHtamoA4PC9De8kynjpzAwoYRGxNyTNq0xZjmoQtJnkDijfslmyo4ImhMFQjhU1s8AA7u7DLu5egTpywm75i2c0OvIinEFkXfFpk4u0ySjW9QeLGLPLy&X-Amz-Signature=34bbcac72051e7b7dd7b652725448a56f85d61453337008595b5a8f6981f1fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGG5MIFG%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEKiRhXb3sxrN435dmjG4ZxAC9wuUBmWGuQrlAsIsjcAiEA6azLRx%2FwhkchmlGO9vFkotJeLykr7jmKLWB0V6%2FgYiQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FlY16a8ViRygoVUSrcAyr%2Fk3kAdK%2BpKx1v%2B6mqs%2FLifbSYU8c8TiqrF41h1qi0%2FehaVpcCTn5TzFf1JB%2B8SGMsbEXVO7PmC5AXo8emO5YkGVP5jOS62cN4BTEdiVykhvBjHoLs0fh7uvO82jLZZCfBCdr0y02dLPUyNdq%2FKTMlD2dPVLwPaYdhAFSoFUKew4B3KcYNyAcHh1gwvasoMLkYa4wUYDSvQXW0gGa6WOOAZuQekeLTdpq1nm6uKM3Bb5FPXjAyY%2B7LXCanjEhhLwXHQ7bvhpcvvh8sYIT7bVrnbFetCIYhEGSZOOFCgHKgHg%2FCiiIXnulZTxRcZQhhZp12y8zA8WdWjGCo%2FUx3p1gSay7GJutKEyn99%2FvhijVXV1X1IjKczPZuYUvgPAMqtAQ%2F4DxhAaIVI56kG8C5BN3eU4Ju1kbr9VdoLnDd27scJZhjsWQ8DQxafgvve0D5JJIFfVKhovpR6d1Grb1sZgf29erEVCZlvb9xQvmDH82wier2GiF42YJcS%2FErJPgcVlJg0pP5xDsx3j2vw3w8TPc0pAQX1K%2FUrcNp79AhGU40KfJ3jUP6sLlaUlh9TyJ7tB9eZyY%2FlW1uO3YqS8%2Fyc17YorRdQO7Vw0dWAeyiqf70cT5s%2FIcAFdPDecHYMKqWjMcGOqUBd%2FuI0UDY2DZ5LoXchhFfKrUTvWlDTCVrddW8E86IoiNMBZ9u%2B%2FQ1blxMvE5K8aynbKyCOoS2qcQLyJTllWVBNrFNpH56hbY2OxwPi1luuHtamoA4PC9De8kynjpzAwoYRGxNyTNq0xZjmoQtJnkDijfslmyo4ImhMFQjhU1s8AA7u7DLu5egTpywm75i2c0OvIinEFkXfFpk4u0ySjW9QeLGLPLy&X-Amz-Signature=675f9034031855fd899ac6d649383d970271ac99db2d20dd8bb17902f3bf0c3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGG5MIFG%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEKiRhXb3sxrN435dmjG4ZxAC9wuUBmWGuQrlAsIsjcAiEA6azLRx%2FwhkchmlGO9vFkotJeLykr7jmKLWB0V6%2FgYiQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FlY16a8ViRygoVUSrcAyr%2Fk3kAdK%2BpKx1v%2B6mqs%2FLifbSYU8c8TiqrF41h1qi0%2FehaVpcCTn5TzFf1JB%2B8SGMsbEXVO7PmC5AXo8emO5YkGVP5jOS62cN4BTEdiVykhvBjHoLs0fh7uvO82jLZZCfBCdr0y02dLPUyNdq%2FKTMlD2dPVLwPaYdhAFSoFUKew4B3KcYNyAcHh1gwvasoMLkYa4wUYDSvQXW0gGa6WOOAZuQekeLTdpq1nm6uKM3Bb5FPXjAyY%2B7LXCanjEhhLwXHQ7bvhpcvvh8sYIT7bVrnbFetCIYhEGSZOOFCgHKgHg%2FCiiIXnulZTxRcZQhhZp12y8zA8WdWjGCo%2FUx3p1gSay7GJutKEyn99%2FvhijVXV1X1IjKczPZuYUvgPAMqtAQ%2F4DxhAaIVI56kG8C5BN3eU4Ju1kbr9VdoLnDd27scJZhjsWQ8DQxafgvve0D5JJIFfVKhovpR6d1Grb1sZgf29erEVCZlvb9xQvmDH82wier2GiF42YJcS%2FErJPgcVlJg0pP5xDsx3j2vw3w8TPc0pAQX1K%2FUrcNp79AhGU40KfJ3jUP6sLlaUlh9TyJ7tB9eZyY%2FlW1uO3YqS8%2Fyc17YorRdQO7Vw0dWAeyiqf70cT5s%2FIcAFdPDecHYMKqWjMcGOqUBd%2FuI0UDY2DZ5LoXchhFfKrUTvWlDTCVrddW8E86IoiNMBZ9u%2B%2FQ1blxMvE5K8aynbKyCOoS2qcQLyJTllWVBNrFNpH56hbY2OxwPi1luuHtamoA4PC9De8kynjpzAwoYRGxNyTNq0xZjmoQtJnkDijfslmyo4ImhMFQjhU1s8AA7u7DLu5egTpywm75i2c0OvIinEFkXfFpk4u0ySjW9QeLGLPLy&X-Amz-Signature=ec7edb0ac9c0041ac0790c649b4463664fa3f8a49b90ff954cbb28e877ac50dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
