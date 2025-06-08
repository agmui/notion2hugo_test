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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKJ46VW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkBHKB%2B5qdipT8DnGUQGN1pPyMYa3cr09Ww4XLrgM%2FBAIgJril2qBn6PvjuWVNGZw1dU9xgtmdmlEynms6DsRqvIcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZFQv4hHtpFsmojgCrcA5FC%2FgRVMVFESzvCWobBa9zxCUlZRDVGzgW%2BSGmp30gkO0YRXeLDbErtMgTs4KcD%2BRmdatuLoxS0QweWzp0z4xLhOtP1V%2FygghMFfUrC%2FXm93Unhx8kFXGKZ7187PvkUGhsJYe3csSOr0A5Gdvac%2BjW4v4Xb%2BWtxTdIdJu9kO0rln9RvuefeJcXUdfPA%2BQK9k3YFUwBeriuX2fXVb4JeUyfrdqk3MJuF2Pahr2QZsJLj7vVWIQXvnGnPRlPhIn%2FbyIPqDQYyMIr7m8AcLsNo5BcbdTE3ePL8pzuhGV1A7NdsPqnXHf6wrCa5dxW5R6i5mFfOD8LTrNNy7KR0U3IZ8yHq%2FJb9JcS%2BfT0FOyPoiHiMMU%2FZBfnu7xMn2TpohdHBG05YBmu2rin8U6lUCr01GiTixrWL3GhSFJiCAohC2XYzHMaIwtG9%2F6wzQR7ysFRWBKXCZi1EulZfj0N7kAkiFSHpjc%2FXfa8WGeIWbs3rd%2FYVFtxYdzS1ytpFT3LeYvoldDmC4XDUShz1HIkUM0pe3%2B8dbgfQ2kHmW8vYp0UCPB2zE99V6INQBxdwgi%2B5b9Jx%2B9xzNCtLwmJg2%2BoUZ6MLfWYOKWgSwfx0NmOyN%2FVj2X3qMXmOXKBQfeIEZ9%2F9MO2ck8IGOqUB%2Bq21cnYVbpE2dFSYO5ZoM%2BVqz6%2F8MMwDDT2lxiGaCMFfLln%2FkfgSZOJ2GYRxv8iUJc7O8yhRHId84EpMHxdRm7aJXVgzaRQSDoEHv0v2WS5Sduw8ImON3WoF5%2FHGvh3uU3mYDpmQNZ4xQ1dSyJU0MBXOY2lMGDgZSxpHIxCLp88bk8eDhUnB4zO1ONr3v9gcYSkzNZoHdnxP0X1NTAwx3gPO%2FKPz&X-Amz-Signature=f9b46b4f2576b4d28ffc60d4c37bbabe3fefb4ece9eb1aa6a72af7d4102aea8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKJ46VW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkBHKB%2B5qdipT8DnGUQGN1pPyMYa3cr09Ww4XLrgM%2FBAIgJril2qBn6PvjuWVNGZw1dU9xgtmdmlEynms6DsRqvIcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZFQv4hHtpFsmojgCrcA5FC%2FgRVMVFESzvCWobBa9zxCUlZRDVGzgW%2BSGmp30gkO0YRXeLDbErtMgTs4KcD%2BRmdatuLoxS0QweWzp0z4xLhOtP1V%2FygghMFfUrC%2FXm93Unhx8kFXGKZ7187PvkUGhsJYe3csSOr0A5Gdvac%2BjW4v4Xb%2BWtxTdIdJu9kO0rln9RvuefeJcXUdfPA%2BQK9k3YFUwBeriuX2fXVb4JeUyfrdqk3MJuF2Pahr2QZsJLj7vVWIQXvnGnPRlPhIn%2FbyIPqDQYyMIr7m8AcLsNo5BcbdTE3ePL8pzuhGV1A7NdsPqnXHf6wrCa5dxW5R6i5mFfOD8LTrNNy7KR0U3IZ8yHq%2FJb9JcS%2BfT0FOyPoiHiMMU%2FZBfnu7xMn2TpohdHBG05YBmu2rin8U6lUCr01GiTixrWL3GhSFJiCAohC2XYzHMaIwtG9%2F6wzQR7ysFRWBKXCZi1EulZfj0N7kAkiFSHpjc%2FXfa8WGeIWbs3rd%2FYVFtxYdzS1ytpFT3LeYvoldDmC4XDUShz1HIkUM0pe3%2B8dbgfQ2kHmW8vYp0UCPB2zE99V6INQBxdwgi%2B5b9Jx%2B9xzNCtLwmJg2%2BoUZ6MLfWYOKWgSwfx0NmOyN%2FVj2X3qMXmOXKBQfeIEZ9%2F9MO2ck8IGOqUB%2Bq21cnYVbpE2dFSYO5ZoM%2BVqz6%2F8MMwDDT2lxiGaCMFfLln%2FkfgSZOJ2GYRxv8iUJc7O8yhRHId84EpMHxdRm7aJXVgzaRQSDoEHv0v2WS5Sduw8ImON3WoF5%2FHGvh3uU3mYDpmQNZ4xQ1dSyJU0MBXOY2lMGDgZSxpHIxCLp88bk8eDhUnB4zO1ONr3v9gcYSkzNZoHdnxP0X1NTAwx3gPO%2FKPz&X-Amz-Signature=0f607e799ed73ec5815fb4a6177396db2fac93ad8384e9ab830ed85cf8d11d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKJ46VW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkBHKB%2B5qdipT8DnGUQGN1pPyMYa3cr09Ww4XLrgM%2FBAIgJril2qBn6PvjuWVNGZw1dU9xgtmdmlEynms6DsRqvIcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZFQv4hHtpFsmojgCrcA5FC%2FgRVMVFESzvCWobBa9zxCUlZRDVGzgW%2BSGmp30gkO0YRXeLDbErtMgTs4KcD%2BRmdatuLoxS0QweWzp0z4xLhOtP1V%2FygghMFfUrC%2FXm93Unhx8kFXGKZ7187PvkUGhsJYe3csSOr0A5Gdvac%2BjW4v4Xb%2BWtxTdIdJu9kO0rln9RvuefeJcXUdfPA%2BQK9k3YFUwBeriuX2fXVb4JeUyfrdqk3MJuF2Pahr2QZsJLj7vVWIQXvnGnPRlPhIn%2FbyIPqDQYyMIr7m8AcLsNo5BcbdTE3ePL8pzuhGV1A7NdsPqnXHf6wrCa5dxW5R6i5mFfOD8LTrNNy7KR0U3IZ8yHq%2FJb9JcS%2BfT0FOyPoiHiMMU%2FZBfnu7xMn2TpohdHBG05YBmu2rin8U6lUCr01GiTixrWL3GhSFJiCAohC2XYzHMaIwtG9%2F6wzQR7ysFRWBKXCZi1EulZfj0N7kAkiFSHpjc%2FXfa8WGeIWbs3rd%2FYVFtxYdzS1ytpFT3LeYvoldDmC4XDUShz1HIkUM0pe3%2B8dbgfQ2kHmW8vYp0UCPB2zE99V6INQBxdwgi%2B5b9Jx%2B9xzNCtLwmJg2%2BoUZ6MLfWYOKWgSwfx0NmOyN%2FVj2X3qMXmOXKBQfeIEZ9%2F9MO2ck8IGOqUB%2Bq21cnYVbpE2dFSYO5ZoM%2BVqz6%2F8MMwDDT2lxiGaCMFfLln%2FkfgSZOJ2GYRxv8iUJc7O8yhRHId84EpMHxdRm7aJXVgzaRQSDoEHv0v2WS5Sduw8ImON3WoF5%2FHGvh3uU3mYDpmQNZ4xQ1dSyJU0MBXOY2lMGDgZSxpHIxCLp88bk8eDhUnB4zO1ONr3v9gcYSkzNZoHdnxP0X1NTAwx3gPO%2FKPz&X-Amz-Signature=d0f9ac6b0a4fe99876bbe508c1e568a679201b3a2c8a75eb4c7c6a055d29f529&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKJ46VW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkBHKB%2B5qdipT8DnGUQGN1pPyMYa3cr09Ww4XLrgM%2FBAIgJril2qBn6PvjuWVNGZw1dU9xgtmdmlEynms6DsRqvIcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZFQv4hHtpFsmojgCrcA5FC%2FgRVMVFESzvCWobBa9zxCUlZRDVGzgW%2BSGmp30gkO0YRXeLDbErtMgTs4KcD%2BRmdatuLoxS0QweWzp0z4xLhOtP1V%2FygghMFfUrC%2FXm93Unhx8kFXGKZ7187PvkUGhsJYe3csSOr0A5Gdvac%2BjW4v4Xb%2BWtxTdIdJu9kO0rln9RvuefeJcXUdfPA%2BQK9k3YFUwBeriuX2fXVb4JeUyfrdqk3MJuF2Pahr2QZsJLj7vVWIQXvnGnPRlPhIn%2FbyIPqDQYyMIr7m8AcLsNo5BcbdTE3ePL8pzuhGV1A7NdsPqnXHf6wrCa5dxW5R6i5mFfOD8LTrNNy7KR0U3IZ8yHq%2FJb9JcS%2BfT0FOyPoiHiMMU%2FZBfnu7xMn2TpohdHBG05YBmu2rin8U6lUCr01GiTixrWL3GhSFJiCAohC2XYzHMaIwtG9%2F6wzQR7ysFRWBKXCZi1EulZfj0N7kAkiFSHpjc%2FXfa8WGeIWbs3rd%2FYVFtxYdzS1ytpFT3LeYvoldDmC4XDUShz1HIkUM0pe3%2B8dbgfQ2kHmW8vYp0UCPB2zE99V6INQBxdwgi%2B5b9Jx%2B9xzNCtLwmJg2%2BoUZ6MLfWYOKWgSwfx0NmOyN%2FVj2X3qMXmOXKBQfeIEZ9%2F9MO2ck8IGOqUB%2Bq21cnYVbpE2dFSYO5ZoM%2BVqz6%2F8MMwDDT2lxiGaCMFfLln%2FkfgSZOJ2GYRxv8iUJc7O8yhRHId84EpMHxdRm7aJXVgzaRQSDoEHv0v2WS5Sduw8ImON3WoF5%2FHGvh3uU3mYDpmQNZ4xQ1dSyJU0MBXOY2lMGDgZSxpHIxCLp88bk8eDhUnB4zO1ONr3v9gcYSkzNZoHdnxP0X1NTAwx3gPO%2FKPz&X-Amz-Signature=f72f44e768af4d789d03c79af19225659cd40110ba098421cd3022676140f36b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKJ46VW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkBHKB%2B5qdipT8DnGUQGN1pPyMYa3cr09Ww4XLrgM%2FBAIgJril2qBn6PvjuWVNGZw1dU9xgtmdmlEynms6DsRqvIcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZFQv4hHtpFsmojgCrcA5FC%2FgRVMVFESzvCWobBa9zxCUlZRDVGzgW%2BSGmp30gkO0YRXeLDbErtMgTs4KcD%2BRmdatuLoxS0QweWzp0z4xLhOtP1V%2FygghMFfUrC%2FXm93Unhx8kFXGKZ7187PvkUGhsJYe3csSOr0A5Gdvac%2BjW4v4Xb%2BWtxTdIdJu9kO0rln9RvuefeJcXUdfPA%2BQK9k3YFUwBeriuX2fXVb4JeUyfrdqk3MJuF2Pahr2QZsJLj7vVWIQXvnGnPRlPhIn%2FbyIPqDQYyMIr7m8AcLsNo5BcbdTE3ePL8pzuhGV1A7NdsPqnXHf6wrCa5dxW5R6i5mFfOD8LTrNNy7KR0U3IZ8yHq%2FJb9JcS%2BfT0FOyPoiHiMMU%2FZBfnu7xMn2TpohdHBG05YBmu2rin8U6lUCr01GiTixrWL3GhSFJiCAohC2XYzHMaIwtG9%2F6wzQR7ysFRWBKXCZi1EulZfj0N7kAkiFSHpjc%2FXfa8WGeIWbs3rd%2FYVFtxYdzS1ytpFT3LeYvoldDmC4XDUShz1HIkUM0pe3%2B8dbgfQ2kHmW8vYp0UCPB2zE99V6INQBxdwgi%2B5b9Jx%2B9xzNCtLwmJg2%2BoUZ6MLfWYOKWgSwfx0NmOyN%2FVj2X3qMXmOXKBQfeIEZ9%2F9MO2ck8IGOqUB%2Bq21cnYVbpE2dFSYO5ZoM%2BVqz6%2F8MMwDDT2lxiGaCMFfLln%2FkfgSZOJ2GYRxv8iUJc7O8yhRHId84EpMHxdRm7aJXVgzaRQSDoEHv0v2WS5Sduw8ImON3WoF5%2FHGvh3uU3mYDpmQNZ4xQ1dSyJU0MBXOY2lMGDgZSxpHIxCLp88bk8eDhUnB4zO1ONr3v9gcYSkzNZoHdnxP0X1NTAwx3gPO%2FKPz&X-Amz-Signature=5067b2291a8e7f59fcebb2b9c2b98033bcf6ea241ede4ac17acf4ac62c3d43e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
