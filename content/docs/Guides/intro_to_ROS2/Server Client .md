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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDZD2ND%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIX1oVtaRdChwDdwNI4%2F17IxX25nZyVJZIxEgM4ywk2AiAEeTcE%2F4iWNqhr4plTI9xDPqbF%2BZzbB320SMXzNC5%2FJir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMmLCsGitLME6c4rYcKtwDhF8a0HQYpbbFnw9AnF%2F3n89ZS7Bi87a1Af4PV%2FqE1EGkB4FyFxk4QAykowu6rthfqQKhFQzSHngufXRFYSpBfTBKFVtra43v3mN7auuZzLkusbrApMlrxK3i8HbaFN1RLYRf1jRIz7wvK%2FBH538PZy3y98suqUjUcC4cJvv4%2FK%2F7VFR%2BwDF%2BPCGmXRZkNzHegqpWbizoO65yYO1zkuHnXvyiRMKoLGqHyLCu6YgcPQHErvmQzU1uL5yYJOX%2B2pmw1o%2BunpPVSZ4gXLf6CtGuTgsrM3OlwTztAa7ZNORoXyf0dxifj72TRX4sj1S4dEEyIn9uWFR4VBTJybgb%2B3pM41h9NFGcB1Hs8uyFFLh5dmIBKfFuzKgvZHr3vWOsAyAE753lLPjW3a%2FQRhLr%2Fr6BVdTkuF7iKWq%2FLtgpLdIEXwyk1%2Fk%2BKr2J3asS1OzMr2JOfnw8A5zIcL0s%2FWVgV3%2BQaI%2FPx9GhWBdaRAqtscqFnqL6vB5w5OYcjPMpBVFXtfPY4DbDOVjLx1BfJor9zAQ3hE4P4aw1NhscSjHyEUyDo59EqvYnAViehbej4QyZta8mrd7XWb4gzqR%2Fp9YsufM10dJINBf2qmvNTG%2F4uVhAMLKwWzCc1019SbvjZzAw0JzAvwY6pgEB7WsIIxGrFMSYF%2BgPJ6HdVOKybfBkxcLjUnsex7HjRSHWRqcVs1jatOJths8dD10USC1TQEuedB84I8crnmd3OySFJIonoE9yFDY23nqdPB29NuChRW716IOGq3pQiBgf1lJYLHgU1s%2BvJCGgcDyJjrtbZWLzBKH0go8TpGttfAMKWOq4bN8l5TJUP%2FConyOHTlWH7O3rjkHXdntWhu5v%2FMBdnqY3&X-Amz-Signature=dd2371118ce5b87f7d153fe42e4159dca2763ea9e980cfe1c68662c959f3d2d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDZD2ND%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIX1oVtaRdChwDdwNI4%2F17IxX25nZyVJZIxEgM4ywk2AiAEeTcE%2F4iWNqhr4plTI9xDPqbF%2BZzbB320SMXzNC5%2FJir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMmLCsGitLME6c4rYcKtwDhF8a0HQYpbbFnw9AnF%2F3n89ZS7Bi87a1Af4PV%2FqE1EGkB4FyFxk4QAykowu6rthfqQKhFQzSHngufXRFYSpBfTBKFVtra43v3mN7auuZzLkusbrApMlrxK3i8HbaFN1RLYRf1jRIz7wvK%2FBH538PZy3y98suqUjUcC4cJvv4%2FK%2F7VFR%2BwDF%2BPCGmXRZkNzHegqpWbizoO65yYO1zkuHnXvyiRMKoLGqHyLCu6YgcPQHErvmQzU1uL5yYJOX%2B2pmw1o%2BunpPVSZ4gXLf6CtGuTgsrM3OlwTztAa7ZNORoXyf0dxifj72TRX4sj1S4dEEyIn9uWFR4VBTJybgb%2B3pM41h9NFGcB1Hs8uyFFLh5dmIBKfFuzKgvZHr3vWOsAyAE753lLPjW3a%2FQRhLr%2Fr6BVdTkuF7iKWq%2FLtgpLdIEXwyk1%2Fk%2BKr2J3asS1OzMr2JOfnw8A5zIcL0s%2FWVgV3%2BQaI%2FPx9GhWBdaRAqtscqFnqL6vB5w5OYcjPMpBVFXtfPY4DbDOVjLx1BfJor9zAQ3hE4P4aw1NhscSjHyEUyDo59EqvYnAViehbej4QyZta8mrd7XWb4gzqR%2Fp9YsufM10dJINBf2qmvNTG%2F4uVhAMLKwWzCc1019SbvjZzAw0JzAvwY6pgEB7WsIIxGrFMSYF%2BgPJ6HdVOKybfBkxcLjUnsex7HjRSHWRqcVs1jatOJths8dD10USC1TQEuedB84I8crnmd3OySFJIonoE9yFDY23nqdPB29NuChRW716IOGq3pQiBgf1lJYLHgU1s%2BvJCGgcDyJjrtbZWLzBKH0go8TpGttfAMKWOq4bN8l5TJUP%2FConyOHTlWH7O3rjkHXdntWhu5v%2FMBdnqY3&X-Amz-Signature=2788562185edcd912dd8dc4f76ead58a3784dee93ea4815fb6d0b9c1bb43b191&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDZD2ND%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIX1oVtaRdChwDdwNI4%2F17IxX25nZyVJZIxEgM4ywk2AiAEeTcE%2F4iWNqhr4plTI9xDPqbF%2BZzbB320SMXzNC5%2FJir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMmLCsGitLME6c4rYcKtwDhF8a0HQYpbbFnw9AnF%2F3n89ZS7Bi87a1Af4PV%2FqE1EGkB4FyFxk4QAykowu6rthfqQKhFQzSHngufXRFYSpBfTBKFVtra43v3mN7auuZzLkusbrApMlrxK3i8HbaFN1RLYRf1jRIz7wvK%2FBH538PZy3y98suqUjUcC4cJvv4%2FK%2F7VFR%2BwDF%2BPCGmXRZkNzHegqpWbizoO65yYO1zkuHnXvyiRMKoLGqHyLCu6YgcPQHErvmQzU1uL5yYJOX%2B2pmw1o%2BunpPVSZ4gXLf6CtGuTgsrM3OlwTztAa7ZNORoXyf0dxifj72TRX4sj1S4dEEyIn9uWFR4VBTJybgb%2B3pM41h9NFGcB1Hs8uyFFLh5dmIBKfFuzKgvZHr3vWOsAyAE753lLPjW3a%2FQRhLr%2Fr6BVdTkuF7iKWq%2FLtgpLdIEXwyk1%2Fk%2BKr2J3asS1OzMr2JOfnw8A5zIcL0s%2FWVgV3%2BQaI%2FPx9GhWBdaRAqtscqFnqL6vB5w5OYcjPMpBVFXtfPY4DbDOVjLx1BfJor9zAQ3hE4P4aw1NhscSjHyEUyDo59EqvYnAViehbej4QyZta8mrd7XWb4gzqR%2Fp9YsufM10dJINBf2qmvNTG%2F4uVhAMLKwWzCc1019SbvjZzAw0JzAvwY6pgEB7WsIIxGrFMSYF%2BgPJ6HdVOKybfBkxcLjUnsex7HjRSHWRqcVs1jatOJths8dD10USC1TQEuedB84I8crnmd3OySFJIonoE9yFDY23nqdPB29NuChRW716IOGq3pQiBgf1lJYLHgU1s%2BvJCGgcDyJjrtbZWLzBKH0go8TpGttfAMKWOq4bN8l5TJUP%2FConyOHTlWH7O3rjkHXdntWhu5v%2FMBdnqY3&X-Amz-Signature=031510b6cacb9097e2e8a2f6e4751b4c899392d00bd13771f2d6817a5c03737c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDZD2ND%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIX1oVtaRdChwDdwNI4%2F17IxX25nZyVJZIxEgM4ywk2AiAEeTcE%2F4iWNqhr4plTI9xDPqbF%2BZzbB320SMXzNC5%2FJir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMmLCsGitLME6c4rYcKtwDhF8a0HQYpbbFnw9AnF%2F3n89ZS7Bi87a1Af4PV%2FqE1EGkB4FyFxk4QAykowu6rthfqQKhFQzSHngufXRFYSpBfTBKFVtra43v3mN7auuZzLkusbrApMlrxK3i8HbaFN1RLYRf1jRIz7wvK%2FBH538PZy3y98suqUjUcC4cJvv4%2FK%2F7VFR%2BwDF%2BPCGmXRZkNzHegqpWbizoO65yYO1zkuHnXvyiRMKoLGqHyLCu6YgcPQHErvmQzU1uL5yYJOX%2B2pmw1o%2BunpPVSZ4gXLf6CtGuTgsrM3OlwTztAa7ZNORoXyf0dxifj72TRX4sj1S4dEEyIn9uWFR4VBTJybgb%2B3pM41h9NFGcB1Hs8uyFFLh5dmIBKfFuzKgvZHr3vWOsAyAE753lLPjW3a%2FQRhLr%2Fr6BVdTkuF7iKWq%2FLtgpLdIEXwyk1%2Fk%2BKr2J3asS1OzMr2JOfnw8A5zIcL0s%2FWVgV3%2BQaI%2FPx9GhWBdaRAqtscqFnqL6vB5w5OYcjPMpBVFXtfPY4DbDOVjLx1BfJor9zAQ3hE4P4aw1NhscSjHyEUyDo59EqvYnAViehbej4QyZta8mrd7XWb4gzqR%2Fp9YsufM10dJINBf2qmvNTG%2F4uVhAMLKwWzCc1019SbvjZzAw0JzAvwY6pgEB7WsIIxGrFMSYF%2BgPJ6HdVOKybfBkxcLjUnsex7HjRSHWRqcVs1jatOJths8dD10USC1TQEuedB84I8crnmd3OySFJIonoE9yFDY23nqdPB29NuChRW716IOGq3pQiBgf1lJYLHgU1s%2BvJCGgcDyJjrtbZWLzBKH0go8TpGttfAMKWOq4bN8l5TJUP%2FConyOHTlWH7O3rjkHXdntWhu5v%2FMBdnqY3&X-Amz-Signature=e25cacda745091b150da1c937893c4624133e8504df7fdd82c24d35e1fcdff85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDZD2ND%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIX1oVtaRdChwDdwNI4%2F17IxX25nZyVJZIxEgM4ywk2AiAEeTcE%2F4iWNqhr4plTI9xDPqbF%2BZzbB320SMXzNC5%2FJir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMmLCsGitLME6c4rYcKtwDhF8a0HQYpbbFnw9AnF%2F3n89ZS7Bi87a1Af4PV%2FqE1EGkB4FyFxk4QAykowu6rthfqQKhFQzSHngufXRFYSpBfTBKFVtra43v3mN7auuZzLkusbrApMlrxK3i8HbaFN1RLYRf1jRIz7wvK%2FBH538PZy3y98suqUjUcC4cJvv4%2FK%2F7VFR%2BwDF%2BPCGmXRZkNzHegqpWbizoO65yYO1zkuHnXvyiRMKoLGqHyLCu6YgcPQHErvmQzU1uL5yYJOX%2B2pmw1o%2BunpPVSZ4gXLf6CtGuTgsrM3OlwTztAa7ZNORoXyf0dxifj72TRX4sj1S4dEEyIn9uWFR4VBTJybgb%2B3pM41h9NFGcB1Hs8uyFFLh5dmIBKfFuzKgvZHr3vWOsAyAE753lLPjW3a%2FQRhLr%2Fr6BVdTkuF7iKWq%2FLtgpLdIEXwyk1%2Fk%2BKr2J3asS1OzMr2JOfnw8A5zIcL0s%2FWVgV3%2BQaI%2FPx9GhWBdaRAqtscqFnqL6vB5w5OYcjPMpBVFXtfPY4DbDOVjLx1BfJor9zAQ3hE4P4aw1NhscSjHyEUyDo59EqvYnAViehbej4QyZta8mrd7XWb4gzqR%2Fp9YsufM10dJINBf2qmvNTG%2F4uVhAMLKwWzCc1019SbvjZzAw0JzAvwY6pgEB7WsIIxGrFMSYF%2BgPJ6HdVOKybfBkxcLjUnsex7HjRSHWRqcVs1jatOJths8dD10USC1TQEuedB84I8crnmd3OySFJIonoE9yFDY23nqdPB29NuChRW716IOGq3pQiBgf1lJYLHgU1s%2BvJCGgcDyJjrtbZWLzBKH0go8TpGttfAMKWOq4bN8l5TJUP%2FConyOHTlWH7O3rjkHXdntWhu5v%2FMBdnqY3&X-Amz-Signature=780784ee993fa4ffef91aed7d226eb98b8988659cb4c39684dcc06febbbdb4f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
