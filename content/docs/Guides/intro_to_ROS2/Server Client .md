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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CETT53M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIB%2FWndJ1yuGo3hu7dsjmis%2FJyVHO%2B0ATVPg9%2FiuOvZ%2FJAiBRv5LSL4bl4RuUDgPOcBrSbJwm%2Btsk0RxAyqTzRg66zCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1VgQv08ZabdiKkSIKtwDzW32IQ3%2BNJiqbiICqcPDQlDZNZ6FhX0BY9QwkeYGiM5xEZdnd4Q86aThUPEXTatZb9Ie9aEC4poawTz5OKvLFUmsZlFc%2Bb06SLk%2Br%2BvIa0Gf29M1PDV4fHcMyVjXHpJEnNR4KUOf68cEZMZ%2FfNDYyVy0KAXU%2FdMwBzFpL%2BqN1Ugd5bI5sOhI9TmlEH6s4j9DTBjTSARrEgU9YBDEXk6m2jebqCIKX1a9u6mYmfmkpwTI6XlwY3%2Bre5Q2iIiHJ8tzdHMYqLxHSOdhYEdT4ZXgWuxpoWh%2FWG3WV%2FgYwfHa49MgzGcz0RdQoNNOzZFYc6VlNFx46%2Bpjvo%2BgFSR8nj%2Fj89VqR3aS36U15nsfOndmX1ctatm4BIElvyr3muPWMLzuyo3O%2F9wI1QiCl4ISDykwlCou9B3WCR2U0un%2BIDZoj%2BiBeMgVKkQHsjLuGrenvK3naaR%2BzXA7lSv6hal90BsL%2BE8QujEvTYdENxzgN2%2B4BaTBwMAeliND8OZdKNChhSS3xnJ6PxeXcYSronpYGehz7GEexEDuBROiFyxkJVXgtbnfDoHGjEWrWEpGI26z61dUdaAg%2FBd5tInyBb4bNUh9YPrwHkE6uy9h7CCLuNFA%2FCOq3ZPrm8rBcrBzdsQw5fHkvwY6pgFHNcToRhdS%2F1GGcGt85NmeGNQgDCtvho5ZLv7BqAfGPcCV3js5OiGtEeImBmMRllT2gCYt3kLUZ5ziSm3SY5ZkZ9J00gGwHzKjMm0xCe3x5mK3DeOpL5EQ69Qr8e5KMtojta0NOMO5Z3pcrvX0UJ6afS5vVHOPJ5qgtR%2FMglBHs%2FPf5WgGbc%2BIzN%2Buf8ZxhGRCgxjIE4C3zgygj%2BpzQuNIZ5jfXyE0&X-Amz-Signature=9212c2c558ae2f6cf3766ad8cc69e9c78acdf0767a9fd7bc1da322126bc2eee6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CETT53M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIB%2FWndJ1yuGo3hu7dsjmis%2FJyVHO%2B0ATVPg9%2FiuOvZ%2FJAiBRv5LSL4bl4RuUDgPOcBrSbJwm%2Btsk0RxAyqTzRg66zCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1VgQv08ZabdiKkSIKtwDzW32IQ3%2BNJiqbiICqcPDQlDZNZ6FhX0BY9QwkeYGiM5xEZdnd4Q86aThUPEXTatZb9Ie9aEC4poawTz5OKvLFUmsZlFc%2Bb06SLk%2Br%2BvIa0Gf29M1PDV4fHcMyVjXHpJEnNR4KUOf68cEZMZ%2FfNDYyVy0KAXU%2FdMwBzFpL%2BqN1Ugd5bI5sOhI9TmlEH6s4j9DTBjTSARrEgU9YBDEXk6m2jebqCIKX1a9u6mYmfmkpwTI6XlwY3%2Bre5Q2iIiHJ8tzdHMYqLxHSOdhYEdT4ZXgWuxpoWh%2FWG3WV%2FgYwfHa49MgzGcz0RdQoNNOzZFYc6VlNFx46%2Bpjvo%2BgFSR8nj%2Fj89VqR3aS36U15nsfOndmX1ctatm4BIElvyr3muPWMLzuyo3O%2F9wI1QiCl4ISDykwlCou9B3WCR2U0un%2BIDZoj%2BiBeMgVKkQHsjLuGrenvK3naaR%2BzXA7lSv6hal90BsL%2BE8QujEvTYdENxzgN2%2B4BaTBwMAeliND8OZdKNChhSS3xnJ6PxeXcYSronpYGehz7GEexEDuBROiFyxkJVXgtbnfDoHGjEWrWEpGI26z61dUdaAg%2FBd5tInyBb4bNUh9YPrwHkE6uy9h7CCLuNFA%2FCOq3ZPrm8rBcrBzdsQw5fHkvwY6pgFHNcToRhdS%2F1GGcGt85NmeGNQgDCtvho5ZLv7BqAfGPcCV3js5OiGtEeImBmMRllT2gCYt3kLUZ5ziSm3SY5ZkZ9J00gGwHzKjMm0xCe3x5mK3DeOpL5EQ69Qr8e5KMtojta0NOMO5Z3pcrvX0UJ6afS5vVHOPJ5qgtR%2FMglBHs%2FPf5WgGbc%2BIzN%2Buf8ZxhGRCgxjIE4C3zgygj%2BpzQuNIZ5jfXyE0&X-Amz-Signature=972d6281b32eb647d30aae083d09027675f541491fb0350116d799b34f131fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CETT53M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIB%2FWndJ1yuGo3hu7dsjmis%2FJyVHO%2B0ATVPg9%2FiuOvZ%2FJAiBRv5LSL4bl4RuUDgPOcBrSbJwm%2Btsk0RxAyqTzRg66zCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1VgQv08ZabdiKkSIKtwDzW32IQ3%2BNJiqbiICqcPDQlDZNZ6FhX0BY9QwkeYGiM5xEZdnd4Q86aThUPEXTatZb9Ie9aEC4poawTz5OKvLFUmsZlFc%2Bb06SLk%2Br%2BvIa0Gf29M1PDV4fHcMyVjXHpJEnNR4KUOf68cEZMZ%2FfNDYyVy0KAXU%2FdMwBzFpL%2BqN1Ugd5bI5sOhI9TmlEH6s4j9DTBjTSARrEgU9YBDEXk6m2jebqCIKX1a9u6mYmfmkpwTI6XlwY3%2Bre5Q2iIiHJ8tzdHMYqLxHSOdhYEdT4ZXgWuxpoWh%2FWG3WV%2FgYwfHa49MgzGcz0RdQoNNOzZFYc6VlNFx46%2Bpjvo%2BgFSR8nj%2Fj89VqR3aS36U15nsfOndmX1ctatm4BIElvyr3muPWMLzuyo3O%2F9wI1QiCl4ISDykwlCou9B3WCR2U0un%2BIDZoj%2BiBeMgVKkQHsjLuGrenvK3naaR%2BzXA7lSv6hal90BsL%2BE8QujEvTYdENxzgN2%2B4BaTBwMAeliND8OZdKNChhSS3xnJ6PxeXcYSronpYGehz7GEexEDuBROiFyxkJVXgtbnfDoHGjEWrWEpGI26z61dUdaAg%2FBd5tInyBb4bNUh9YPrwHkE6uy9h7CCLuNFA%2FCOq3ZPrm8rBcrBzdsQw5fHkvwY6pgFHNcToRhdS%2F1GGcGt85NmeGNQgDCtvho5ZLv7BqAfGPcCV3js5OiGtEeImBmMRllT2gCYt3kLUZ5ziSm3SY5ZkZ9J00gGwHzKjMm0xCe3x5mK3DeOpL5EQ69Qr8e5KMtojta0NOMO5Z3pcrvX0UJ6afS5vVHOPJ5qgtR%2FMglBHs%2FPf5WgGbc%2BIzN%2Buf8ZxhGRCgxjIE4C3zgygj%2BpzQuNIZ5jfXyE0&X-Amz-Signature=bc6ded4c15e620991c928c0167d79f178670dc4a38cdc5cb88352e8cdd7e123a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CETT53M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIB%2FWndJ1yuGo3hu7dsjmis%2FJyVHO%2B0ATVPg9%2FiuOvZ%2FJAiBRv5LSL4bl4RuUDgPOcBrSbJwm%2Btsk0RxAyqTzRg66zCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1VgQv08ZabdiKkSIKtwDzW32IQ3%2BNJiqbiICqcPDQlDZNZ6FhX0BY9QwkeYGiM5xEZdnd4Q86aThUPEXTatZb9Ie9aEC4poawTz5OKvLFUmsZlFc%2Bb06SLk%2Br%2BvIa0Gf29M1PDV4fHcMyVjXHpJEnNR4KUOf68cEZMZ%2FfNDYyVy0KAXU%2FdMwBzFpL%2BqN1Ugd5bI5sOhI9TmlEH6s4j9DTBjTSARrEgU9YBDEXk6m2jebqCIKX1a9u6mYmfmkpwTI6XlwY3%2Bre5Q2iIiHJ8tzdHMYqLxHSOdhYEdT4ZXgWuxpoWh%2FWG3WV%2FgYwfHa49MgzGcz0RdQoNNOzZFYc6VlNFx46%2Bpjvo%2BgFSR8nj%2Fj89VqR3aS36U15nsfOndmX1ctatm4BIElvyr3muPWMLzuyo3O%2F9wI1QiCl4ISDykwlCou9B3WCR2U0un%2BIDZoj%2BiBeMgVKkQHsjLuGrenvK3naaR%2BzXA7lSv6hal90BsL%2BE8QujEvTYdENxzgN2%2B4BaTBwMAeliND8OZdKNChhSS3xnJ6PxeXcYSronpYGehz7GEexEDuBROiFyxkJVXgtbnfDoHGjEWrWEpGI26z61dUdaAg%2FBd5tInyBb4bNUh9YPrwHkE6uy9h7CCLuNFA%2FCOq3ZPrm8rBcrBzdsQw5fHkvwY6pgFHNcToRhdS%2F1GGcGt85NmeGNQgDCtvho5ZLv7BqAfGPcCV3js5OiGtEeImBmMRllT2gCYt3kLUZ5ziSm3SY5ZkZ9J00gGwHzKjMm0xCe3x5mK3DeOpL5EQ69Qr8e5KMtojta0NOMO5Z3pcrvX0UJ6afS5vVHOPJ5qgtR%2FMglBHs%2FPf5WgGbc%2BIzN%2Buf8ZxhGRCgxjIE4C3zgygj%2BpzQuNIZ5jfXyE0&X-Amz-Signature=54cfcfbcada6cedbd891582cf5b6e40a228ff7dc9548472944ba4edc50485bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CETT53M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIB%2FWndJ1yuGo3hu7dsjmis%2FJyVHO%2B0ATVPg9%2FiuOvZ%2FJAiBRv5LSL4bl4RuUDgPOcBrSbJwm%2Btsk0RxAyqTzRg66zCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1VgQv08ZabdiKkSIKtwDzW32IQ3%2BNJiqbiICqcPDQlDZNZ6FhX0BY9QwkeYGiM5xEZdnd4Q86aThUPEXTatZb9Ie9aEC4poawTz5OKvLFUmsZlFc%2Bb06SLk%2Br%2BvIa0Gf29M1PDV4fHcMyVjXHpJEnNR4KUOf68cEZMZ%2FfNDYyVy0KAXU%2FdMwBzFpL%2BqN1Ugd5bI5sOhI9TmlEH6s4j9DTBjTSARrEgU9YBDEXk6m2jebqCIKX1a9u6mYmfmkpwTI6XlwY3%2Bre5Q2iIiHJ8tzdHMYqLxHSOdhYEdT4ZXgWuxpoWh%2FWG3WV%2FgYwfHa49MgzGcz0RdQoNNOzZFYc6VlNFx46%2Bpjvo%2BgFSR8nj%2Fj89VqR3aS36U15nsfOndmX1ctatm4BIElvyr3muPWMLzuyo3O%2F9wI1QiCl4ISDykwlCou9B3WCR2U0un%2BIDZoj%2BiBeMgVKkQHsjLuGrenvK3naaR%2BzXA7lSv6hal90BsL%2BE8QujEvTYdENxzgN2%2B4BaTBwMAeliND8OZdKNChhSS3xnJ6PxeXcYSronpYGehz7GEexEDuBROiFyxkJVXgtbnfDoHGjEWrWEpGI26z61dUdaAg%2FBd5tInyBb4bNUh9YPrwHkE6uy9h7CCLuNFA%2FCOq3ZPrm8rBcrBzdsQw5fHkvwY6pgFHNcToRhdS%2F1GGcGt85NmeGNQgDCtvho5ZLv7BqAfGPcCV3js5OiGtEeImBmMRllT2gCYt3kLUZ5ziSm3SY5ZkZ9J00gGwHzKjMm0xCe3x5mK3DeOpL5EQ69Qr8e5KMtojta0NOMO5Z3pcrvX0UJ6afS5vVHOPJ5qgtR%2FMglBHs%2FPf5WgGbc%2BIzN%2Buf8ZxhGRCgxjIE4C3zgygj%2BpzQuNIZ5jfXyE0&X-Amz-Signature=73e904ebeb667b4799f6fe27262554048f79e416113b3d0e2c107ee858d706b1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
