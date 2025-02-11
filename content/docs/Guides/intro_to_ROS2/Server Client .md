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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHE5AOQ6%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOxivGnkvwNr1l%2BSy7ylHkuo0JU%2ByC7kWJEUlAM4HCZAiEAms22MvErzYbuIK4Gna1EXkQzN3gmGFa0SzeKaWM2jBQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFinLCOFZvWHBn4QnCrcA040be69rZPgIqVA1R3Gktr%2FsrIKf5l4bX4XFG6kUnbQ6PZFwWA705%2Fw2dQg%2FBFiM5OZT%2BHae7MpT4pj5nSqeSjKT9Zu58sDdvq0K%2BqQnTFn2QUtPgFVzRbKuIDYlLeg1IZzLF2Qf7R2OUyI7OpnLVOooRRbFg4jzV%2BXNxpJPxQuzZGk9f8veT5h8kGC9wqyQK0BV9npnpRZLzufKD12ODJvCLh557VzkzC3nX54airrjMbAxnXH0Q4%2BV2%2FKeEVDBhrl3omY3vsgv5HGG8zUbqja4%2Fm%2B6D7CYAVXoAWoXaGYHanKjwAHeCGv4AGFfxqfT%2BItcKl2tDmmIzCmVz1ix17DCa8KH%2Fx0niGnSUbodKx61k435l4rnLGhPUqCbcTNRZJ9roEUJzep7tupYSjl3bjc%2BtipscpeLjVIHRxDPTpBKpygpQXjUdW52lU5Pkbd05bNXJDJXFMZEqHYL2rB9ZUMVMOo8rDY8GbRd7E52jX%2BxZUdz3FRgnz9zWxOPEfM8YvwRinT%2FZJurJeDgm1Kcon3AovKt8dFH0lKkxJNc1a3PJqt1VI96yWk27IgNmlo4OSV04QZmauuTzzr4PX%2F2K7XsoAQPcCDu3ScWteV%2FiFNpK2B5UJlVeQaoikSMOalrb0GOqUBICdJp%2BIjtEU78fg0pZCVZgEiDJQFXYDz0vvWCKhCCGt6w1I5OhWUf9v0nSs5qO3%2Br%2FZ6qnr49ZjYXc0jw9rvxMAkfJNvTi4hiwQXAT1Xm9LNm0nPH3%2BuuxhiszCjcH3Fp5mjgUg7iWjlVvJatJT6Wcix2aKNGNpLZO29ib04S0%2FJLm8CrXbkERmOK0rdg8%2F%2B2kazz4h0N9ugLj21ZFTYq03JMWfo&X-Amz-Signature=8bc0ec4052664e5e0fc6672ff1e2dcc6536ed3bc80328ce80401df231389dbbe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHE5AOQ6%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOxivGnkvwNr1l%2BSy7ylHkuo0JU%2ByC7kWJEUlAM4HCZAiEAms22MvErzYbuIK4Gna1EXkQzN3gmGFa0SzeKaWM2jBQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFinLCOFZvWHBn4QnCrcA040be69rZPgIqVA1R3Gktr%2FsrIKf5l4bX4XFG6kUnbQ6PZFwWA705%2Fw2dQg%2FBFiM5OZT%2BHae7MpT4pj5nSqeSjKT9Zu58sDdvq0K%2BqQnTFn2QUtPgFVzRbKuIDYlLeg1IZzLF2Qf7R2OUyI7OpnLVOooRRbFg4jzV%2BXNxpJPxQuzZGk9f8veT5h8kGC9wqyQK0BV9npnpRZLzufKD12ODJvCLh557VzkzC3nX54airrjMbAxnXH0Q4%2BV2%2FKeEVDBhrl3omY3vsgv5HGG8zUbqja4%2Fm%2B6D7CYAVXoAWoXaGYHanKjwAHeCGv4AGFfxqfT%2BItcKl2tDmmIzCmVz1ix17DCa8KH%2Fx0niGnSUbodKx61k435l4rnLGhPUqCbcTNRZJ9roEUJzep7tupYSjl3bjc%2BtipscpeLjVIHRxDPTpBKpygpQXjUdW52lU5Pkbd05bNXJDJXFMZEqHYL2rB9ZUMVMOo8rDY8GbRd7E52jX%2BxZUdz3FRgnz9zWxOPEfM8YvwRinT%2FZJurJeDgm1Kcon3AovKt8dFH0lKkxJNc1a3PJqt1VI96yWk27IgNmlo4OSV04QZmauuTzzr4PX%2F2K7XsoAQPcCDu3ScWteV%2FiFNpK2B5UJlVeQaoikSMOalrb0GOqUBICdJp%2BIjtEU78fg0pZCVZgEiDJQFXYDz0vvWCKhCCGt6w1I5OhWUf9v0nSs5qO3%2Br%2FZ6qnr49ZjYXc0jw9rvxMAkfJNvTi4hiwQXAT1Xm9LNm0nPH3%2BuuxhiszCjcH3Fp5mjgUg7iWjlVvJatJT6Wcix2aKNGNpLZO29ib04S0%2FJLm8CrXbkERmOK0rdg8%2F%2B2kazz4h0N9ugLj21ZFTYq03JMWfo&X-Amz-Signature=a18195f094c3fb68aa98482a9c80e87cd84686f6a351efd722a59e2b9988e120&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHE5AOQ6%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOxivGnkvwNr1l%2BSy7ylHkuo0JU%2ByC7kWJEUlAM4HCZAiEAms22MvErzYbuIK4Gna1EXkQzN3gmGFa0SzeKaWM2jBQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFinLCOFZvWHBn4QnCrcA040be69rZPgIqVA1R3Gktr%2FsrIKf5l4bX4XFG6kUnbQ6PZFwWA705%2Fw2dQg%2FBFiM5OZT%2BHae7MpT4pj5nSqeSjKT9Zu58sDdvq0K%2BqQnTFn2QUtPgFVzRbKuIDYlLeg1IZzLF2Qf7R2OUyI7OpnLVOooRRbFg4jzV%2BXNxpJPxQuzZGk9f8veT5h8kGC9wqyQK0BV9npnpRZLzufKD12ODJvCLh557VzkzC3nX54airrjMbAxnXH0Q4%2BV2%2FKeEVDBhrl3omY3vsgv5HGG8zUbqja4%2Fm%2B6D7CYAVXoAWoXaGYHanKjwAHeCGv4AGFfxqfT%2BItcKl2tDmmIzCmVz1ix17DCa8KH%2Fx0niGnSUbodKx61k435l4rnLGhPUqCbcTNRZJ9roEUJzep7tupYSjl3bjc%2BtipscpeLjVIHRxDPTpBKpygpQXjUdW52lU5Pkbd05bNXJDJXFMZEqHYL2rB9ZUMVMOo8rDY8GbRd7E52jX%2BxZUdz3FRgnz9zWxOPEfM8YvwRinT%2FZJurJeDgm1Kcon3AovKt8dFH0lKkxJNc1a3PJqt1VI96yWk27IgNmlo4OSV04QZmauuTzzr4PX%2F2K7XsoAQPcCDu3ScWteV%2FiFNpK2B5UJlVeQaoikSMOalrb0GOqUBICdJp%2BIjtEU78fg0pZCVZgEiDJQFXYDz0vvWCKhCCGt6w1I5OhWUf9v0nSs5qO3%2Br%2FZ6qnr49ZjYXc0jw9rvxMAkfJNvTi4hiwQXAT1Xm9LNm0nPH3%2BuuxhiszCjcH3Fp5mjgUg7iWjlVvJatJT6Wcix2aKNGNpLZO29ib04S0%2FJLm8CrXbkERmOK0rdg8%2F%2B2kazz4h0N9ugLj21ZFTYq03JMWfo&X-Amz-Signature=cf5ba2f1c370dff4e349f45671ef5e598abaf484498c3f5bdf84484d6ccb28bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHE5AOQ6%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOxivGnkvwNr1l%2BSy7ylHkuo0JU%2ByC7kWJEUlAM4HCZAiEAms22MvErzYbuIK4Gna1EXkQzN3gmGFa0SzeKaWM2jBQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFinLCOFZvWHBn4QnCrcA040be69rZPgIqVA1R3Gktr%2FsrIKf5l4bX4XFG6kUnbQ6PZFwWA705%2Fw2dQg%2FBFiM5OZT%2BHae7MpT4pj5nSqeSjKT9Zu58sDdvq0K%2BqQnTFn2QUtPgFVzRbKuIDYlLeg1IZzLF2Qf7R2OUyI7OpnLVOooRRbFg4jzV%2BXNxpJPxQuzZGk9f8veT5h8kGC9wqyQK0BV9npnpRZLzufKD12ODJvCLh557VzkzC3nX54airrjMbAxnXH0Q4%2BV2%2FKeEVDBhrl3omY3vsgv5HGG8zUbqja4%2Fm%2B6D7CYAVXoAWoXaGYHanKjwAHeCGv4AGFfxqfT%2BItcKl2tDmmIzCmVz1ix17DCa8KH%2Fx0niGnSUbodKx61k435l4rnLGhPUqCbcTNRZJ9roEUJzep7tupYSjl3bjc%2BtipscpeLjVIHRxDPTpBKpygpQXjUdW52lU5Pkbd05bNXJDJXFMZEqHYL2rB9ZUMVMOo8rDY8GbRd7E52jX%2BxZUdz3FRgnz9zWxOPEfM8YvwRinT%2FZJurJeDgm1Kcon3AovKt8dFH0lKkxJNc1a3PJqt1VI96yWk27IgNmlo4OSV04QZmauuTzzr4PX%2F2K7XsoAQPcCDu3ScWteV%2FiFNpK2B5UJlVeQaoikSMOalrb0GOqUBICdJp%2BIjtEU78fg0pZCVZgEiDJQFXYDz0vvWCKhCCGt6w1I5OhWUf9v0nSs5qO3%2Br%2FZ6qnr49ZjYXc0jw9rvxMAkfJNvTi4hiwQXAT1Xm9LNm0nPH3%2BuuxhiszCjcH3Fp5mjgUg7iWjlVvJatJT6Wcix2aKNGNpLZO29ib04S0%2FJLm8CrXbkERmOK0rdg8%2F%2B2kazz4h0N9ugLj21ZFTYq03JMWfo&X-Amz-Signature=f54287bb66f91b88af461fc3c0d77b566d82f7bd78ca73a875a73ceddea41e71&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHE5AOQ6%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOxivGnkvwNr1l%2BSy7ylHkuo0JU%2ByC7kWJEUlAM4HCZAiEAms22MvErzYbuIK4Gna1EXkQzN3gmGFa0SzeKaWM2jBQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFinLCOFZvWHBn4QnCrcA040be69rZPgIqVA1R3Gktr%2FsrIKf5l4bX4XFG6kUnbQ6PZFwWA705%2Fw2dQg%2FBFiM5OZT%2BHae7MpT4pj5nSqeSjKT9Zu58sDdvq0K%2BqQnTFn2QUtPgFVzRbKuIDYlLeg1IZzLF2Qf7R2OUyI7OpnLVOooRRbFg4jzV%2BXNxpJPxQuzZGk9f8veT5h8kGC9wqyQK0BV9npnpRZLzufKD12ODJvCLh557VzkzC3nX54airrjMbAxnXH0Q4%2BV2%2FKeEVDBhrl3omY3vsgv5HGG8zUbqja4%2Fm%2B6D7CYAVXoAWoXaGYHanKjwAHeCGv4AGFfxqfT%2BItcKl2tDmmIzCmVz1ix17DCa8KH%2Fx0niGnSUbodKx61k435l4rnLGhPUqCbcTNRZJ9roEUJzep7tupYSjl3bjc%2BtipscpeLjVIHRxDPTpBKpygpQXjUdW52lU5Pkbd05bNXJDJXFMZEqHYL2rB9ZUMVMOo8rDY8GbRd7E52jX%2BxZUdz3FRgnz9zWxOPEfM8YvwRinT%2FZJurJeDgm1Kcon3AovKt8dFH0lKkxJNc1a3PJqt1VI96yWk27IgNmlo4OSV04QZmauuTzzr4PX%2F2K7XsoAQPcCDu3ScWteV%2FiFNpK2B5UJlVeQaoikSMOalrb0GOqUBICdJp%2BIjtEU78fg0pZCVZgEiDJQFXYDz0vvWCKhCCGt6w1I5OhWUf9v0nSs5qO3%2Br%2FZ6qnr49ZjYXc0jw9rvxMAkfJNvTi4hiwQXAT1Xm9LNm0nPH3%2BuuxhiszCjcH3Fp5mjgUg7iWjlVvJatJT6Wcix2aKNGNpLZO29ib04S0%2FJLm8CrXbkERmOK0rdg8%2F%2B2kazz4h0N9ugLj21ZFTYq03JMWfo&X-Amz-Signature=af1037f183dfc06e29b569a9496fe6ce6a48efa2bafd22f30bbe6820c5b2dee8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
