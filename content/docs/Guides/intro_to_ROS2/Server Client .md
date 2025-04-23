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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6LH2MS%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCgH5VRvSOsw%2F4lEt%2F%2FFfWYsa3TXJj2Sg6kD%2B%2FYMcgn3AIhANhyyhGYrGf%2B%2B6DDJY818dwy2i%2FQoUfuaRJHV8VGYSqtKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdvau9%2F%2FGl8GJzcfcq3AONl8tLFDZNGty%2BYKv%2FbtmwP6UfmPOMJF05F9RQEUYoymqdR8QKH5kXZHqQeQViGvVYuq%2F%2Bfj9EV3YJR7Aql1QBWEAH4M0rt30GVSBaD0G5pUD1gjHFr7kT66X%2BLsBjAHXTT7ww9byKFAJC60ijeQP909aKOI56eTtRI9SEo7zo%2B4qbLTLiUevhl35u5Eo%2FAcZ%2BbaTiUj8T6c7e%2BzvBwiWTbccYjAbuxZtKfoGAcPWBjzlicr1ncsA%2BKbS%2BxqLVJkzSiMrxHMglcGwEhWCoWopKXoYBICqjhB6SSylND8GUYRacFckuQTvcy8Ah3Ox52bt4yIguhK%2B8T7EJ3jOCUsrq6WYTVNzB1Ym%2FCfS6R1G3oyxpqtCVdFm7mZhtv1EM%2BB55ioplllISJDHr6Q6HrqjJVPUkyGN5UDO4FqQwmhNpAVkn0zf5gNe5KuV%2BBoVCo29tifyDXJeRqBW0sV4x53UlTbzXwYlEFB4MCyZeM7nXGtSQOjRxnVNARzO1Ga4RBenKrnk6CE2bjaojFIBvkE%2Fw4UcJtPV8W%2BsuFkfs5euzUnCPoYiivv6Dv3StQFl1%2Bt5kzn8gQ5%2BJWdqY5REtn85oSIhvH5RHpxkGSiyI%2FMO7MFCU4lZ2aeqfn6L0XzCE2KDABjqkAZQzBYayy3nYXwlnm%2BS%2Bk2a5WbCWFH05VzBvFL%2FRx0%2BTH%2BW92T5lHfC2iICqmkPIzgUC85W2g6uzub%2FhKu%2B76gkW4VFu1NULx%2B6SQOy%2BGYpk0Og%2FBwsurSxx18V6ggWYuSJF6hTxA4eYQyDytBPnGBj2TBjUEeeZqAsCNFKlM8NfPcw4NzrwQlQVaYjMu%2BTS0gwUCHwvALo17egd7KPU92pn%2B2cP&X-Amz-Signature=de142de42c37d90a98dc6e18ece4917658fb24d305f39e549984c273f6a52156&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6LH2MS%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCgH5VRvSOsw%2F4lEt%2F%2FFfWYsa3TXJj2Sg6kD%2B%2FYMcgn3AIhANhyyhGYrGf%2B%2B6DDJY818dwy2i%2FQoUfuaRJHV8VGYSqtKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdvau9%2F%2FGl8GJzcfcq3AONl8tLFDZNGty%2BYKv%2FbtmwP6UfmPOMJF05F9RQEUYoymqdR8QKH5kXZHqQeQViGvVYuq%2F%2Bfj9EV3YJR7Aql1QBWEAH4M0rt30GVSBaD0G5pUD1gjHFr7kT66X%2BLsBjAHXTT7ww9byKFAJC60ijeQP909aKOI56eTtRI9SEo7zo%2B4qbLTLiUevhl35u5Eo%2FAcZ%2BbaTiUj8T6c7e%2BzvBwiWTbccYjAbuxZtKfoGAcPWBjzlicr1ncsA%2BKbS%2BxqLVJkzSiMrxHMglcGwEhWCoWopKXoYBICqjhB6SSylND8GUYRacFckuQTvcy8Ah3Ox52bt4yIguhK%2B8T7EJ3jOCUsrq6WYTVNzB1Ym%2FCfS6R1G3oyxpqtCVdFm7mZhtv1EM%2BB55ioplllISJDHr6Q6HrqjJVPUkyGN5UDO4FqQwmhNpAVkn0zf5gNe5KuV%2BBoVCo29tifyDXJeRqBW0sV4x53UlTbzXwYlEFB4MCyZeM7nXGtSQOjRxnVNARzO1Ga4RBenKrnk6CE2bjaojFIBvkE%2Fw4UcJtPV8W%2BsuFkfs5euzUnCPoYiivv6Dv3StQFl1%2Bt5kzn8gQ5%2BJWdqY5REtn85oSIhvH5RHpxkGSiyI%2FMO7MFCU4lZ2aeqfn6L0XzCE2KDABjqkAZQzBYayy3nYXwlnm%2BS%2Bk2a5WbCWFH05VzBvFL%2FRx0%2BTH%2BW92T5lHfC2iICqmkPIzgUC85W2g6uzub%2FhKu%2B76gkW4VFu1NULx%2B6SQOy%2BGYpk0Og%2FBwsurSxx18V6ggWYuSJF6hTxA4eYQyDytBPnGBj2TBjUEeeZqAsCNFKlM8NfPcw4NzrwQlQVaYjMu%2BTS0gwUCHwvALo17egd7KPU92pn%2B2cP&X-Amz-Signature=845a602d4fd3bba438c9f98aac657463764623ad752aa7893f5047b1b41a62fc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6LH2MS%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCgH5VRvSOsw%2F4lEt%2F%2FFfWYsa3TXJj2Sg6kD%2B%2FYMcgn3AIhANhyyhGYrGf%2B%2B6DDJY818dwy2i%2FQoUfuaRJHV8VGYSqtKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdvau9%2F%2FGl8GJzcfcq3AONl8tLFDZNGty%2BYKv%2FbtmwP6UfmPOMJF05F9RQEUYoymqdR8QKH5kXZHqQeQViGvVYuq%2F%2Bfj9EV3YJR7Aql1QBWEAH4M0rt30GVSBaD0G5pUD1gjHFr7kT66X%2BLsBjAHXTT7ww9byKFAJC60ijeQP909aKOI56eTtRI9SEo7zo%2B4qbLTLiUevhl35u5Eo%2FAcZ%2BbaTiUj8T6c7e%2BzvBwiWTbccYjAbuxZtKfoGAcPWBjzlicr1ncsA%2BKbS%2BxqLVJkzSiMrxHMglcGwEhWCoWopKXoYBICqjhB6SSylND8GUYRacFckuQTvcy8Ah3Ox52bt4yIguhK%2B8T7EJ3jOCUsrq6WYTVNzB1Ym%2FCfS6R1G3oyxpqtCVdFm7mZhtv1EM%2BB55ioplllISJDHr6Q6HrqjJVPUkyGN5UDO4FqQwmhNpAVkn0zf5gNe5KuV%2BBoVCo29tifyDXJeRqBW0sV4x53UlTbzXwYlEFB4MCyZeM7nXGtSQOjRxnVNARzO1Ga4RBenKrnk6CE2bjaojFIBvkE%2Fw4UcJtPV8W%2BsuFkfs5euzUnCPoYiivv6Dv3StQFl1%2Bt5kzn8gQ5%2BJWdqY5REtn85oSIhvH5RHpxkGSiyI%2FMO7MFCU4lZ2aeqfn6L0XzCE2KDABjqkAZQzBYayy3nYXwlnm%2BS%2Bk2a5WbCWFH05VzBvFL%2FRx0%2BTH%2BW92T5lHfC2iICqmkPIzgUC85W2g6uzub%2FhKu%2B76gkW4VFu1NULx%2B6SQOy%2BGYpk0Og%2FBwsurSxx18V6ggWYuSJF6hTxA4eYQyDytBPnGBj2TBjUEeeZqAsCNFKlM8NfPcw4NzrwQlQVaYjMu%2BTS0gwUCHwvALo17egd7KPU92pn%2B2cP&X-Amz-Signature=b03d34458acd32097d01a31ec13e2524a549c8418d2dcfdc1ec804e41902d46e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6LH2MS%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCgH5VRvSOsw%2F4lEt%2F%2FFfWYsa3TXJj2Sg6kD%2B%2FYMcgn3AIhANhyyhGYrGf%2B%2B6DDJY818dwy2i%2FQoUfuaRJHV8VGYSqtKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdvau9%2F%2FGl8GJzcfcq3AONl8tLFDZNGty%2BYKv%2FbtmwP6UfmPOMJF05F9RQEUYoymqdR8QKH5kXZHqQeQViGvVYuq%2F%2Bfj9EV3YJR7Aql1QBWEAH4M0rt30GVSBaD0G5pUD1gjHFr7kT66X%2BLsBjAHXTT7ww9byKFAJC60ijeQP909aKOI56eTtRI9SEo7zo%2B4qbLTLiUevhl35u5Eo%2FAcZ%2BbaTiUj8T6c7e%2BzvBwiWTbccYjAbuxZtKfoGAcPWBjzlicr1ncsA%2BKbS%2BxqLVJkzSiMrxHMglcGwEhWCoWopKXoYBICqjhB6SSylND8GUYRacFckuQTvcy8Ah3Ox52bt4yIguhK%2B8T7EJ3jOCUsrq6WYTVNzB1Ym%2FCfS6R1G3oyxpqtCVdFm7mZhtv1EM%2BB55ioplllISJDHr6Q6HrqjJVPUkyGN5UDO4FqQwmhNpAVkn0zf5gNe5KuV%2BBoVCo29tifyDXJeRqBW0sV4x53UlTbzXwYlEFB4MCyZeM7nXGtSQOjRxnVNARzO1Ga4RBenKrnk6CE2bjaojFIBvkE%2Fw4UcJtPV8W%2BsuFkfs5euzUnCPoYiivv6Dv3StQFl1%2Bt5kzn8gQ5%2BJWdqY5REtn85oSIhvH5RHpxkGSiyI%2FMO7MFCU4lZ2aeqfn6L0XzCE2KDABjqkAZQzBYayy3nYXwlnm%2BS%2Bk2a5WbCWFH05VzBvFL%2FRx0%2BTH%2BW92T5lHfC2iICqmkPIzgUC85W2g6uzub%2FhKu%2B76gkW4VFu1NULx%2B6SQOy%2BGYpk0Og%2FBwsurSxx18V6ggWYuSJF6hTxA4eYQyDytBPnGBj2TBjUEeeZqAsCNFKlM8NfPcw4NzrwQlQVaYjMu%2BTS0gwUCHwvALo17egd7KPU92pn%2B2cP&X-Amz-Signature=541682a41de9d0564b056e5285c5c63d6e8d1b1941004028dd4b885469b9dcdd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6LH2MS%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCgH5VRvSOsw%2F4lEt%2F%2FFfWYsa3TXJj2Sg6kD%2B%2FYMcgn3AIhANhyyhGYrGf%2B%2B6DDJY818dwy2i%2FQoUfuaRJHV8VGYSqtKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdvau9%2F%2FGl8GJzcfcq3AONl8tLFDZNGty%2BYKv%2FbtmwP6UfmPOMJF05F9RQEUYoymqdR8QKH5kXZHqQeQViGvVYuq%2F%2Bfj9EV3YJR7Aql1QBWEAH4M0rt30GVSBaD0G5pUD1gjHFr7kT66X%2BLsBjAHXTT7ww9byKFAJC60ijeQP909aKOI56eTtRI9SEo7zo%2B4qbLTLiUevhl35u5Eo%2FAcZ%2BbaTiUj8T6c7e%2BzvBwiWTbccYjAbuxZtKfoGAcPWBjzlicr1ncsA%2BKbS%2BxqLVJkzSiMrxHMglcGwEhWCoWopKXoYBICqjhB6SSylND8GUYRacFckuQTvcy8Ah3Ox52bt4yIguhK%2B8T7EJ3jOCUsrq6WYTVNzB1Ym%2FCfS6R1G3oyxpqtCVdFm7mZhtv1EM%2BB55ioplllISJDHr6Q6HrqjJVPUkyGN5UDO4FqQwmhNpAVkn0zf5gNe5KuV%2BBoVCo29tifyDXJeRqBW0sV4x53UlTbzXwYlEFB4MCyZeM7nXGtSQOjRxnVNARzO1Ga4RBenKrnk6CE2bjaojFIBvkE%2Fw4UcJtPV8W%2BsuFkfs5euzUnCPoYiivv6Dv3StQFl1%2Bt5kzn8gQ5%2BJWdqY5REtn85oSIhvH5RHpxkGSiyI%2FMO7MFCU4lZ2aeqfn6L0XzCE2KDABjqkAZQzBYayy3nYXwlnm%2BS%2Bk2a5WbCWFH05VzBvFL%2FRx0%2BTH%2BW92T5lHfC2iICqmkPIzgUC85W2g6uzub%2FhKu%2B76gkW4VFu1NULx%2B6SQOy%2BGYpk0Og%2FBwsurSxx18V6ggWYuSJF6hTxA4eYQyDytBPnGBj2TBjUEeeZqAsCNFKlM8NfPcw4NzrwQlQVaYjMu%2BTS0gwUCHwvALo17egd7KPU92pn%2B2cP&X-Amz-Signature=61cf96efe13008b5053a2a437966b50e2a0f72bb2ede6193fa24919ca579816c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
