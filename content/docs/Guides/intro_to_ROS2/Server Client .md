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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXEHDMUL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2RH0AFnXPQuA64V0LW8au8FFFYxNj8IgVSSDho3KSSgIgRhBLORU6%2Bvuhf7l7xvZtCkD1ZiLwZa6W2CFCxmr%2Bkl0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOOvYmf%2BS4Yu9IY5PCrcA7sju6HqwMFwHs8rFyfolCPCS2AkJup7be%2FGue%2F5ZArUWz3kV8As0xcEVn2D6rIF%2Fvltq1AOHxaCk8DuBUBpgOW7DhGTYOyngR8zgR4NJ8XQBjgv0AdRzjnIWlAk4o0EkjcjwXoAFu84QnsWYP%2BFTceKbIuOPj12FHMWWu4Cy9z%2B70xZUKqoiOOXzaKj3vidKFhdQYPySA%2Bp7VFN9SKHO6FgnI451Ex7Iw7Q0upevGgzVFl8TZOAMtlgOj9l6ch8qwwo4YO1GhkuS7I8rIuapDcdbQIu4Xrhw8mYd2le0a1elYlGQKQpRR3euSeS5d8whSM%2Bb37L9Hr%2BtbNuroeApI5LYh9mJAq%2FPBZAEiy3CItcmquckx5BJCC6J%2FqHk0oLRwKYOUMKY%2FfJXTJ1Dqgx4%2BuE4h811Xg8SBY%2BDO6Wx2QJamgbmHNmwnBcMwR9R1N8EmIduUXvymZ0BNc58C2BmxVZ8%2BRrn9l2O2dUEI3o618uYilhxyuZDiCpFlkJHut2A8cNJ6kKQcBfPCSPac2iCs6CGCzWh%2FnEMwQqp1PFIP2ywS7xcpRvm7AwxckaO%2BP8lYBGBCtzDvQyijo%2F7zMDvPol5l1wsHuTR1T9mABd%2BTlV9s7GY8fvC0VkJ6c6MIuBkcIGOqUBf3N71LTiBbaCjL4RX8C85R2ijHPjv5nx77zr1KXdc%2BtE8HH2lkYz915ki%2FPf52ssRrj%2FjO8pgVSC8%2B8qw9XaNs979niRBYL%2Fp0RUyfQQaxz9Fz33qHRicmRfhmJggJggF5vKk8oMuFMRnFKC%2BQ8ocOEObntXZtQqa4mDYSJazFXbAhxsUsFOIuHi6WD0GhU3jPxOCMdBrms78X1IAmJhUZa8V2pv&X-Amz-Signature=10e4ca664ec300aa78997b4ce67631507b6d5fd1270b5a4a086c71ad3248f5be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXEHDMUL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2RH0AFnXPQuA64V0LW8au8FFFYxNj8IgVSSDho3KSSgIgRhBLORU6%2Bvuhf7l7xvZtCkD1ZiLwZa6W2CFCxmr%2Bkl0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOOvYmf%2BS4Yu9IY5PCrcA7sju6HqwMFwHs8rFyfolCPCS2AkJup7be%2FGue%2F5ZArUWz3kV8As0xcEVn2D6rIF%2Fvltq1AOHxaCk8DuBUBpgOW7DhGTYOyngR8zgR4NJ8XQBjgv0AdRzjnIWlAk4o0EkjcjwXoAFu84QnsWYP%2BFTceKbIuOPj12FHMWWu4Cy9z%2B70xZUKqoiOOXzaKj3vidKFhdQYPySA%2Bp7VFN9SKHO6FgnI451Ex7Iw7Q0upevGgzVFl8TZOAMtlgOj9l6ch8qwwo4YO1GhkuS7I8rIuapDcdbQIu4Xrhw8mYd2le0a1elYlGQKQpRR3euSeS5d8whSM%2Bb37L9Hr%2BtbNuroeApI5LYh9mJAq%2FPBZAEiy3CItcmquckx5BJCC6J%2FqHk0oLRwKYOUMKY%2FfJXTJ1Dqgx4%2BuE4h811Xg8SBY%2BDO6Wx2QJamgbmHNmwnBcMwR9R1N8EmIduUXvymZ0BNc58C2BmxVZ8%2BRrn9l2O2dUEI3o618uYilhxyuZDiCpFlkJHut2A8cNJ6kKQcBfPCSPac2iCs6CGCzWh%2FnEMwQqp1PFIP2ywS7xcpRvm7AwxckaO%2BP8lYBGBCtzDvQyijo%2F7zMDvPol5l1wsHuTR1T9mABd%2BTlV9s7GY8fvC0VkJ6c6MIuBkcIGOqUBf3N71LTiBbaCjL4RX8C85R2ijHPjv5nx77zr1KXdc%2BtE8HH2lkYz915ki%2FPf52ssRrj%2FjO8pgVSC8%2B8qw9XaNs979niRBYL%2Fp0RUyfQQaxz9Fz33qHRicmRfhmJggJggF5vKk8oMuFMRnFKC%2BQ8ocOEObntXZtQqa4mDYSJazFXbAhxsUsFOIuHi6WD0GhU3jPxOCMdBrms78X1IAmJhUZa8V2pv&X-Amz-Signature=376b4327954317ed3e77e2979280f43b4d4f1641c95d78a55fa056424b018221&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXEHDMUL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2RH0AFnXPQuA64V0LW8au8FFFYxNj8IgVSSDho3KSSgIgRhBLORU6%2Bvuhf7l7xvZtCkD1ZiLwZa6W2CFCxmr%2Bkl0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOOvYmf%2BS4Yu9IY5PCrcA7sju6HqwMFwHs8rFyfolCPCS2AkJup7be%2FGue%2F5ZArUWz3kV8As0xcEVn2D6rIF%2Fvltq1AOHxaCk8DuBUBpgOW7DhGTYOyngR8zgR4NJ8XQBjgv0AdRzjnIWlAk4o0EkjcjwXoAFu84QnsWYP%2BFTceKbIuOPj12FHMWWu4Cy9z%2B70xZUKqoiOOXzaKj3vidKFhdQYPySA%2Bp7VFN9SKHO6FgnI451Ex7Iw7Q0upevGgzVFl8TZOAMtlgOj9l6ch8qwwo4YO1GhkuS7I8rIuapDcdbQIu4Xrhw8mYd2le0a1elYlGQKQpRR3euSeS5d8whSM%2Bb37L9Hr%2BtbNuroeApI5LYh9mJAq%2FPBZAEiy3CItcmquckx5BJCC6J%2FqHk0oLRwKYOUMKY%2FfJXTJ1Dqgx4%2BuE4h811Xg8SBY%2BDO6Wx2QJamgbmHNmwnBcMwR9R1N8EmIduUXvymZ0BNc58C2BmxVZ8%2BRrn9l2O2dUEI3o618uYilhxyuZDiCpFlkJHut2A8cNJ6kKQcBfPCSPac2iCs6CGCzWh%2FnEMwQqp1PFIP2ywS7xcpRvm7AwxckaO%2BP8lYBGBCtzDvQyijo%2F7zMDvPol5l1wsHuTR1T9mABd%2BTlV9s7GY8fvC0VkJ6c6MIuBkcIGOqUBf3N71LTiBbaCjL4RX8C85R2ijHPjv5nx77zr1KXdc%2BtE8HH2lkYz915ki%2FPf52ssRrj%2FjO8pgVSC8%2B8qw9XaNs979niRBYL%2Fp0RUyfQQaxz9Fz33qHRicmRfhmJggJggF5vKk8oMuFMRnFKC%2BQ8ocOEObntXZtQqa4mDYSJazFXbAhxsUsFOIuHi6WD0GhU3jPxOCMdBrms78X1IAmJhUZa8V2pv&X-Amz-Signature=272cf74f0c746bc250af6642c67dcf8249ebc88c734b8b7fffaf7f53d1b762ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXEHDMUL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2RH0AFnXPQuA64V0LW8au8FFFYxNj8IgVSSDho3KSSgIgRhBLORU6%2Bvuhf7l7xvZtCkD1ZiLwZa6W2CFCxmr%2Bkl0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOOvYmf%2BS4Yu9IY5PCrcA7sju6HqwMFwHs8rFyfolCPCS2AkJup7be%2FGue%2F5ZArUWz3kV8As0xcEVn2D6rIF%2Fvltq1AOHxaCk8DuBUBpgOW7DhGTYOyngR8zgR4NJ8XQBjgv0AdRzjnIWlAk4o0EkjcjwXoAFu84QnsWYP%2BFTceKbIuOPj12FHMWWu4Cy9z%2B70xZUKqoiOOXzaKj3vidKFhdQYPySA%2Bp7VFN9SKHO6FgnI451Ex7Iw7Q0upevGgzVFl8TZOAMtlgOj9l6ch8qwwo4YO1GhkuS7I8rIuapDcdbQIu4Xrhw8mYd2le0a1elYlGQKQpRR3euSeS5d8whSM%2Bb37L9Hr%2BtbNuroeApI5LYh9mJAq%2FPBZAEiy3CItcmquckx5BJCC6J%2FqHk0oLRwKYOUMKY%2FfJXTJ1Dqgx4%2BuE4h811Xg8SBY%2BDO6Wx2QJamgbmHNmwnBcMwR9R1N8EmIduUXvymZ0BNc58C2BmxVZ8%2BRrn9l2O2dUEI3o618uYilhxyuZDiCpFlkJHut2A8cNJ6kKQcBfPCSPac2iCs6CGCzWh%2FnEMwQqp1PFIP2ywS7xcpRvm7AwxckaO%2BP8lYBGBCtzDvQyijo%2F7zMDvPol5l1wsHuTR1T9mABd%2BTlV9s7GY8fvC0VkJ6c6MIuBkcIGOqUBf3N71LTiBbaCjL4RX8C85R2ijHPjv5nx77zr1KXdc%2BtE8HH2lkYz915ki%2FPf52ssRrj%2FjO8pgVSC8%2B8qw9XaNs979niRBYL%2Fp0RUyfQQaxz9Fz33qHRicmRfhmJggJggF5vKk8oMuFMRnFKC%2BQ8ocOEObntXZtQqa4mDYSJazFXbAhxsUsFOIuHi6WD0GhU3jPxOCMdBrms78X1IAmJhUZa8V2pv&X-Amz-Signature=95e2225a26e1ced9635de3abe1185b2dd93a99cf53252dcc852fca40b5529eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXEHDMUL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2RH0AFnXPQuA64V0LW8au8FFFYxNj8IgVSSDho3KSSgIgRhBLORU6%2Bvuhf7l7xvZtCkD1ZiLwZa6W2CFCxmr%2Bkl0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOOvYmf%2BS4Yu9IY5PCrcA7sju6HqwMFwHs8rFyfolCPCS2AkJup7be%2FGue%2F5ZArUWz3kV8As0xcEVn2D6rIF%2Fvltq1AOHxaCk8DuBUBpgOW7DhGTYOyngR8zgR4NJ8XQBjgv0AdRzjnIWlAk4o0EkjcjwXoAFu84QnsWYP%2BFTceKbIuOPj12FHMWWu4Cy9z%2B70xZUKqoiOOXzaKj3vidKFhdQYPySA%2Bp7VFN9SKHO6FgnI451Ex7Iw7Q0upevGgzVFl8TZOAMtlgOj9l6ch8qwwo4YO1GhkuS7I8rIuapDcdbQIu4Xrhw8mYd2le0a1elYlGQKQpRR3euSeS5d8whSM%2Bb37L9Hr%2BtbNuroeApI5LYh9mJAq%2FPBZAEiy3CItcmquckx5BJCC6J%2FqHk0oLRwKYOUMKY%2FfJXTJ1Dqgx4%2BuE4h811Xg8SBY%2BDO6Wx2QJamgbmHNmwnBcMwR9R1N8EmIduUXvymZ0BNc58C2BmxVZ8%2BRrn9l2O2dUEI3o618uYilhxyuZDiCpFlkJHut2A8cNJ6kKQcBfPCSPac2iCs6CGCzWh%2FnEMwQqp1PFIP2ywS7xcpRvm7AwxckaO%2BP8lYBGBCtzDvQyijo%2F7zMDvPol5l1wsHuTR1T9mABd%2BTlV9s7GY8fvC0VkJ6c6MIuBkcIGOqUBf3N71LTiBbaCjL4RX8C85R2ijHPjv5nx77zr1KXdc%2BtE8HH2lkYz915ki%2FPf52ssRrj%2FjO8pgVSC8%2B8qw9XaNs979niRBYL%2Fp0RUyfQQaxz9Fz33qHRicmRfhmJggJggF5vKk8oMuFMRnFKC%2BQ8ocOEObntXZtQqa4mDYSJazFXbAhxsUsFOIuHi6WD0GhU3jPxOCMdBrms78X1IAmJhUZa8V2pv&X-Amz-Signature=0941479fa458be3f350fdc2e432d2d23956f59de03066d40c8620da5762dbe43&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
