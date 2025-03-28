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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3HF5R7U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtp9H72ir9QlyZZdQKSjKUnRw969pqK2LbOR0URJvRuAiAc48C9RZRbijLDQ2sIfSEajF6Bq51%2BWdGIDCqKeGrbDyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMTp25X5YE%2Fx7cUtMHKtwDClNWBdjHP0eeHwLSSKbCX9RnBtnsVYUqjun%2F%2BCqyeTWTNZAfHc5KSvUXKOXo67VmqnTmgDGCh4KXK3ceVX0p5mFdvU8urJooWqO0x5t%2FTxDns3iqaObSyiQE5CUG8WipwJBlooFHzY7XSASn%2B9gKThJA1UFHMueHztay9v6dSMQLF5ZdEfKUCr%2FEfi5udF0ryYjN2uOKbpE8z%2FFMw41OC0jHK0KJMx%2FEHGchmCuAjjvy9PATnU4RX0V8U7LXPNgz2Y6pBX70U9rOhqggtOHm70%2BV6KgTx2TiZECmOHs8wc0HWwruchpRoeA45bsvTR11zJaW5%2F6IhlZkyf9bGatCriEmjb7OlkCoM%2F5UJQsJ5bcyuX6roS%2BSI6qlBXDxU7yM9pRLhZ0u8SIUG0oabemXVQuijhWJQmU4oX0l6KHNKGuqOm3Qru1Rsw57mxbzCqbhPhnmgsZwpfilf0QjGrOtfUbA8S8atBk%2BfYyLCFravlDrrwn8yFeUhNZgUvX%2BUj99UiUk47pFJ6mBjFkl0OtLIzjl1PBmFYf%2FGNPV2%2BtJPpd5eQA084CJFmTlvHarPOXJ02xFnYyzXwlRIZ8ekWvvyIBXiWqt1aVeMiksZojR5Bcf64b9XH73nXqzWcQwoLGavwY6pgGS%2B0OE9G8wRVRewVHHoUOJLHBWAYm7%2FgnGAVJZrMFOJ9EihuEyap2Ez%2BxEf1Oqn5oBhH5UU49m%2BGC9Ne5KxjpQf34cTtod5ZiP%2BbSO7t0m9b3kfrwyR7LHAbMvNW1OiT%2FOKl27UD0CngVONct8MUrKLja0O7Y4doGQW0EiGODgolFvhZcRowXCt%2F8SzbDAoZq3O7cj%2FIVjDLubcGMAZnAcF0FfEPPY&X-Amz-Signature=92fc1dbed3b88674d557fdd6b651b2075522301ee9aa113c07e9819ddb9439a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3HF5R7U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtp9H72ir9QlyZZdQKSjKUnRw969pqK2LbOR0URJvRuAiAc48C9RZRbijLDQ2sIfSEajF6Bq51%2BWdGIDCqKeGrbDyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMTp25X5YE%2Fx7cUtMHKtwDClNWBdjHP0eeHwLSSKbCX9RnBtnsVYUqjun%2F%2BCqyeTWTNZAfHc5KSvUXKOXo67VmqnTmgDGCh4KXK3ceVX0p5mFdvU8urJooWqO0x5t%2FTxDns3iqaObSyiQE5CUG8WipwJBlooFHzY7XSASn%2B9gKThJA1UFHMueHztay9v6dSMQLF5ZdEfKUCr%2FEfi5udF0ryYjN2uOKbpE8z%2FFMw41OC0jHK0KJMx%2FEHGchmCuAjjvy9PATnU4RX0V8U7LXPNgz2Y6pBX70U9rOhqggtOHm70%2BV6KgTx2TiZECmOHs8wc0HWwruchpRoeA45bsvTR11zJaW5%2F6IhlZkyf9bGatCriEmjb7OlkCoM%2F5UJQsJ5bcyuX6roS%2BSI6qlBXDxU7yM9pRLhZ0u8SIUG0oabemXVQuijhWJQmU4oX0l6KHNKGuqOm3Qru1Rsw57mxbzCqbhPhnmgsZwpfilf0QjGrOtfUbA8S8atBk%2BfYyLCFravlDrrwn8yFeUhNZgUvX%2BUj99UiUk47pFJ6mBjFkl0OtLIzjl1PBmFYf%2FGNPV2%2BtJPpd5eQA084CJFmTlvHarPOXJ02xFnYyzXwlRIZ8ekWvvyIBXiWqt1aVeMiksZojR5Bcf64b9XH73nXqzWcQwoLGavwY6pgGS%2B0OE9G8wRVRewVHHoUOJLHBWAYm7%2FgnGAVJZrMFOJ9EihuEyap2Ez%2BxEf1Oqn5oBhH5UU49m%2BGC9Ne5KxjpQf34cTtod5ZiP%2BbSO7t0m9b3kfrwyR7LHAbMvNW1OiT%2FOKl27UD0CngVONct8MUrKLja0O7Y4doGQW0EiGODgolFvhZcRowXCt%2F8SzbDAoZq3O7cj%2FIVjDLubcGMAZnAcF0FfEPPY&X-Amz-Signature=6b5369955ef9c5fb51f6be02ae7ad57f83273c05c50405183bcdd02271f81097&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3HF5R7U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtp9H72ir9QlyZZdQKSjKUnRw969pqK2LbOR0URJvRuAiAc48C9RZRbijLDQ2sIfSEajF6Bq51%2BWdGIDCqKeGrbDyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMTp25X5YE%2Fx7cUtMHKtwDClNWBdjHP0eeHwLSSKbCX9RnBtnsVYUqjun%2F%2BCqyeTWTNZAfHc5KSvUXKOXo67VmqnTmgDGCh4KXK3ceVX0p5mFdvU8urJooWqO0x5t%2FTxDns3iqaObSyiQE5CUG8WipwJBlooFHzY7XSASn%2B9gKThJA1UFHMueHztay9v6dSMQLF5ZdEfKUCr%2FEfi5udF0ryYjN2uOKbpE8z%2FFMw41OC0jHK0KJMx%2FEHGchmCuAjjvy9PATnU4RX0V8U7LXPNgz2Y6pBX70U9rOhqggtOHm70%2BV6KgTx2TiZECmOHs8wc0HWwruchpRoeA45bsvTR11zJaW5%2F6IhlZkyf9bGatCriEmjb7OlkCoM%2F5UJQsJ5bcyuX6roS%2BSI6qlBXDxU7yM9pRLhZ0u8SIUG0oabemXVQuijhWJQmU4oX0l6KHNKGuqOm3Qru1Rsw57mxbzCqbhPhnmgsZwpfilf0QjGrOtfUbA8S8atBk%2BfYyLCFravlDrrwn8yFeUhNZgUvX%2BUj99UiUk47pFJ6mBjFkl0OtLIzjl1PBmFYf%2FGNPV2%2BtJPpd5eQA084CJFmTlvHarPOXJ02xFnYyzXwlRIZ8ekWvvyIBXiWqt1aVeMiksZojR5Bcf64b9XH73nXqzWcQwoLGavwY6pgGS%2B0OE9G8wRVRewVHHoUOJLHBWAYm7%2FgnGAVJZrMFOJ9EihuEyap2Ez%2BxEf1Oqn5oBhH5UU49m%2BGC9Ne5KxjpQf34cTtod5ZiP%2BbSO7t0m9b3kfrwyR7LHAbMvNW1OiT%2FOKl27UD0CngVONct8MUrKLja0O7Y4doGQW0EiGODgolFvhZcRowXCt%2F8SzbDAoZq3O7cj%2FIVjDLubcGMAZnAcF0FfEPPY&X-Amz-Signature=e74a0e10352a691ce58e705f1fee61327d5422d4a142e4ca8dd2c925dc00c30e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3HF5R7U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtp9H72ir9QlyZZdQKSjKUnRw969pqK2LbOR0URJvRuAiAc48C9RZRbijLDQ2sIfSEajF6Bq51%2BWdGIDCqKeGrbDyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMTp25X5YE%2Fx7cUtMHKtwDClNWBdjHP0eeHwLSSKbCX9RnBtnsVYUqjun%2F%2BCqyeTWTNZAfHc5KSvUXKOXo67VmqnTmgDGCh4KXK3ceVX0p5mFdvU8urJooWqO0x5t%2FTxDns3iqaObSyiQE5CUG8WipwJBlooFHzY7XSASn%2B9gKThJA1UFHMueHztay9v6dSMQLF5ZdEfKUCr%2FEfi5udF0ryYjN2uOKbpE8z%2FFMw41OC0jHK0KJMx%2FEHGchmCuAjjvy9PATnU4RX0V8U7LXPNgz2Y6pBX70U9rOhqggtOHm70%2BV6KgTx2TiZECmOHs8wc0HWwruchpRoeA45bsvTR11zJaW5%2F6IhlZkyf9bGatCriEmjb7OlkCoM%2F5UJQsJ5bcyuX6roS%2BSI6qlBXDxU7yM9pRLhZ0u8SIUG0oabemXVQuijhWJQmU4oX0l6KHNKGuqOm3Qru1Rsw57mxbzCqbhPhnmgsZwpfilf0QjGrOtfUbA8S8atBk%2BfYyLCFravlDrrwn8yFeUhNZgUvX%2BUj99UiUk47pFJ6mBjFkl0OtLIzjl1PBmFYf%2FGNPV2%2BtJPpd5eQA084CJFmTlvHarPOXJ02xFnYyzXwlRIZ8ekWvvyIBXiWqt1aVeMiksZojR5Bcf64b9XH73nXqzWcQwoLGavwY6pgGS%2B0OE9G8wRVRewVHHoUOJLHBWAYm7%2FgnGAVJZrMFOJ9EihuEyap2Ez%2BxEf1Oqn5oBhH5UU49m%2BGC9Ne5KxjpQf34cTtod5ZiP%2BbSO7t0m9b3kfrwyR7LHAbMvNW1OiT%2FOKl27UD0CngVONct8MUrKLja0O7Y4doGQW0EiGODgolFvhZcRowXCt%2F8SzbDAoZq3O7cj%2FIVjDLubcGMAZnAcF0FfEPPY&X-Amz-Signature=59dbdd5e25b1a238f800bb653ada1979e1f65036f41446153332e8a245df31f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3HF5R7U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtp9H72ir9QlyZZdQKSjKUnRw969pqK2LbOR0URJvRuAiAc48C9RZRbijLDQ2sIfSEajF6Bq51%2BWdGIDCqKeGrbDyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMTp25X5YE%2Fx7cUtMHKtwDClNWBdjHP0eeHwLSSKbCX9RnBtnsVYUqjun%2F%2BCqyeTWTNZAfHc5KSvUXKOXo67VmqnTmgDGCh4KXK3ceVX0p5mFdvU8urJooWqO0x5t%2FTxDns3iqaObSyiQE5CUG8WipwJBlooFHzY7XSASn%2B9gKThJA1UFHMueHztay9v6dSMQLF5ZdEfKUCr%2FEfi5udF0ryYjN2uOKbpE8z%2FFMw41OC0jHK0KJMx%2FEHGchmCuAjjvy9PATnU4RX0V8U7LXPNgz2Y6pBX70U9rOhqggtOHm70%2BV6KgTx2TiZECmOHs8wc0HWwruchpRoeA45bsvTR11zJaW5%2F6IhlZkyf9bGatCriEmjb7OlkCoM%2F5UJQsJ5bcyuX6roS%2BSI6qlBXDxU7yM9pRLhZ0u8SIUG0oabemXVQuijhWJQmU4oX0l6KHNKGuqOm3Qru1Rsw57mxbzCqbhPhnmgsZwpfilf0QjGrOtfUbA8S8atBk%2BfYyLCFravlDrrwn8yFeUhNZgUvX%2BUj99UiUk47pFJ6mBjFkl0OtLIzjl1PBmFYf%2FGNPV2%2BtJPpd5eQA084CJFmTlvHarPOXJ02xFnYyzXwlRIZ8ekWvvyIBXiWqt1aVeMiksZojR5Bcf64b9XH73nXqzWcQwoLGavwY6pgGS%2B0OE9G8wRVRewVHHoUOJLHBWAYm7%2FgnGAVJZrMFOJ9EihuEyap2Ez%2BxEf1Oqn5oBhH5UU49m%2BGC9Ne5KxjpQf34cTtod5ZiP%2BbSO7t0m9b3kfrwyR7LHAbMvNW1OiT%2FOKl27UD0CngVONct8MUrKLja0O7Y4doGQW0EiGODgolFvhZcRowXCt%2F8SzbDAoZq3O7cj%2FIVjDLubcGMAZnAcF0FfEPPY&X-Amz-Signature=760f09f97ff7554fa2bd2890324480f09b61321baa60b8bd97e8c9937a969ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
