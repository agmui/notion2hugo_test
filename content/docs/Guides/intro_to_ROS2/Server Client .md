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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZEPJETK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHluiFj4oZWfT7wZZPLUDVkSZZyIYlHCkClFfWyZ8uQHAiAhXB2GFWrxNp03Z7%2FmSbG3N45dTEvUVMZDsVNNv0hZrCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2FhMZAgJ6w6oCIqTgKtwDPwXGd8Zjd7IOv%2BvLUfcoznn3Y4CBFjyshRcB%2FcCcIO13PfcE8C13T4XAh9fTsn4Ie%2FNy2aM1BMOBxbakIHSx1JT%2F0O7HUHnCHvRA54R4wCJsODFEQqI5JKZFYn3mRHrg2I47jhR4IXQBk8hjCYkxu18%2B18lMU83cJb4iEheZvQ0Yt%2BG8n1RvQc5kmRVx%2FnnhxkgE5wD2iL6lVicc5Odkf7m0lBB4qbiE93nvLY0ZbfvHj1cTh6qj%2FlynlN3Jv0EiVEhtMtiCSZMHGkEo8w%2Fq44qw5m2eVoHlyfBfXFNPRXykbE6%2F%2FNUZ3AErwXXfx5c5%2B7aKhH3S46n%2Fw4%2BmZ3Uxu5E5PQXe90qZZaF%2B2nXKrD%2FZWw7WrtSEQmDs4msAkvE6OBwv6Jb0fPNbT0gm%2Bb1tc7EXh3nfOKd0Nf4zzhJXq8awIZedZ9O2MK9l7MsCo9hTIUWSCRRPlo%2FY%2Fk9cJusLmagj0RTTI2UwCkJ7ef4%2Bg8%2FeTlXcSSH7fcQ3WTXImNVMQlEXBqwSnpBC9BBFQznciQxcUPQgx1Vt3Jl0YQZs3aiLwNu2e9FPQ0uATREX9RyGTBq5mzH7ZBadyTsshUF%2FI2fT2EhX1iZWnOWvbMCY3Qe5zBkeNsBT36nrhF8wiJb3vQY6pgHBspV0POfQBXCL3MDSpPD5Xo4GujQBqboJPS0HGH7gfOCzq1O3xrTbawSG3cRO1qj2cNzlGXgt6RPv5BF7oI63qfEDhSmDpp%2FBaECgO2ixSLACsRwRbsKqoJBnm51kBEtQPJviJag7AGQ2Czqf6NAMg8avcieoCY75%2BaWooPoQCyd%2FznwK%2BQ73WD%2F2bKk7xwItBDiR6WoRn57KSoC1DdPnzHiA7gnF&X-Amz-Signature=a659f4e95432ffca195410169abb9eced4d15f382f3868cc11c9998e82b2cff3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZEPJETK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHluiFj4oZWfT7wZZPLUDVkSZZyIYlHCkClFfWyZ8uQHAiAhXB2GFWrxNp03Z7%2FmSbG3N45dTEvUVMZDsVNNv0hZrCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2FhMZAgJ6w6oCIqTgKtwDPwXGd8Zjd7IOv%2BvLUfcoznn3Y4CBFjyshRcB%2FcCcIO13PfcE8C13T4XAh9fTsn4Ie%2FNy2aM1BMOBxbakIHSx1JT%2F0O7HUHnCHvRA54R4wCJsODFEQqI5JKZFYn3mRHrg2I47jhR4IXQBk8hjCYkxu18%2B18lMU83cJb4iEheZvQ0Yt%2BG8n1RvQc5kmRVx%2FnnhxkgE5wD2iL6lVicc5Odkf7m0lBB4qbiE93nvLY0ZbfvHj1cTh6qj%2FlynlN3Jv0EiVEhtMtiCSZMHGkEo8w%2Fq44qw5m2eVoHlyfBfXFNPRXykbE6%2F%2FNUZ3AErwXXfx5c5%2B7aKhH3S46n%2Fw4%2BmZ3Uxu5E5PQXe90qZZaF%2B2nXKrD%2FZWw7WrtSEQmDs4msAkvE6OBwv6Jb0fPNbT0gm%2Bb1tc7EXh3nfOKd0Nf4zzhJXq8awIZedZ9O2MK9l7MsCo9hTIUWSCRRPlo%2FY%2Fk9cJusLmagj0RTTI2UwCkJ7ef4%2Bg8%2FeTlXcSSH7fcQ3WTXImNVMQlEXBqwSnpBC9BBFQznciQxcUPQgx1Vt3Jl0YQZs3aiLwNu2e9FPQ0uATREX9RyGTBq5mzH7ZBadyTsshUF%2FI2fT2EhX1iZWnOWvbMCY3Qe5zBkeNsBT36nrhF8wiJb3vQY6pgHBspV0POfQBXCL3MDSpPD5Xo4GujQBqboJPS0HGH7gfOCzq1O3xrTbawSG3cRO1qj2cNzlGXgt6RPv5BF7oI63qfEDhSmDpp%2FBaECgO2ixSLACsRwRbsKqoJBnm51kBEtQPJviJag7AGQ2Czqf6NAMg8avcieoCY75%2BaWooPoQCyd%2FznwK%2BQ73WD%2F2bKk7xwItBDiR6WoRn57KSoC1DdPnzHiA7gnF&X-Amz-Signature=12d7af406ec580b33aecf12720eb7e5a8935b6c6bca125e27c4976b6c8ca0e02&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZEPJETK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHluiFj4oZWfT7wZZPLUDVkSZZyIYlHCkClFfWyZ8uQHAiAhXB2GFWrxNp03Z7%2FmSbG3N45dTEvUVMZDsVNNv0hZrCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2FhMZAgJ6w6oCIqTgKtwDPwXGd8Zjd7IOv%2BvLUfcoznn3Y4CBFjyshRcB%2FcCcIO13PfcE8C13T4XAh9fTsn4Ie%2FNy2aM1BMOBxbakIHSx1JT%2F0O7HUHnCHvRA54R4wCJsODFEQqI5JKZFYn3mRHrg2I47jhR4IXQBk8hjCYkxu18%2B18lMU83cJb4iEheZvQ0Yt%2BG8n1RvQc5kmRVx%2FnnhxkgE5wD2iL6lVicc5Odkf7m0lBB4qbiE93nvLY0ZbfvHj1cTh6qj%2FlynlN3Jv0EiVEhtMtiCSZMHGkEo8w%2Fq44qw5m2eVoHlyfBfXFNPRXykbE6%2F%2FNUZ3AErwXXfx5c5%2B7aKhH3S46n%2Fw4%2BmZ3Uxu5E5PQXe90qZZaF%2B2nXKrD%2FZWw7WrtSEQmDs4msAkvE6OBwv6Jb0fPNbT0gm%2Bb1tc7EXh3nfOKd0Nf4zzhJXq8awIZedZ9O2MK9l7MsCo9hTIUWSCRRPlo%2FY%2Fk9cJusLmagj0RTTI2UwCkJ7ef4%2Bg8%2FeTlXcSSH7fcQ3WTXImNVMQlEXBqwSnpBC9BBFQznciQxcUPQgx1Vt3Jl0YQZs3aiLwNu2e9FPQ0uATREX9RyGTBq5mzH7ZBadyTsshUF%2FI2fT2EhX1iZWnOWvbMCY3Qe5zBkeNsBT36nrhF8wiJb3vQY6pgHBspV0POfQBXCL3MDSpPD5Xo4GujQBqboJPS0HGH7gfOCzq1O3xrTbawSG3cRO1qj2cNzlGXgt6RPv5BF7oI63qfEDhSmDpp%2FBaECgO2ixSLACsRwRbsKqoJBnm51kBEtQPJviJag7AGQ2Czqf6NAMg8avcieoCY75%2BaWooPoQCyd%2FznwK%2BQ73WD%2F2bKk7xwItBDiR6WoRn57KSoC1DdPnzHiA7gnF&X-Amz-Signature=7fca77c48be0429877115834741f9a8c6f65ca8261758cfe4b11b70b81db9fda&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZEPJETK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHluiFj4oZWfT7wZZPLUDVkSZZyIYlHCkClFfWyZ8uQHAiAhXB2GFWrxNp03Z7%2FmSbG3N45dTEvUVMZDsVNNv0hZrCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2FhMZAgJ6w6oCIqTgKtwDPwXGd8Zjd7IOv%2BvLUfcoznn3Y4CBFjyshRcB%2FcCcIO13PfcE8C13T4XAh9fTsn4Ie%2FNy2aM1BMOBxbakIHSx1JT%2F0O7HUHnCHvRA54R4wCJsODFEQqI5JKZFYn3mRHrg2I47jhR4IXQBk8hjCYkxu18%2B18lMU83cJb4iEheZvQ0Yt%2BG8n1RvQc5kmRVx%2FnnhxkgE5wD2iL6lVicc5Odkf7m0lBB4qbiE93nvLY0ZbfvHj1cTh6qj%2FlynlN3Jv0EiVEhtMtiCSZMHGkEo8w%2Fq44qw5m2eVoHlyfBfXFNPRXykbE6%2F%2FNUZ3AErwXXfx5c5%2B7aKhH3S46n%2Fw4%2BmZ3Uxu5E5PQXe90qZZaF%2B2nXKrD%2FZWw7WrtSEQmDs4msAkvE6OBwv6Jb0fPNbT0gm%2Bb1tc7EXh3nfOKd0Nf4zzhJXq8awIZedZ9O2MK9l7MsCo9hTIUWSCRRPlo%2FY%2Fk9cJusLmagj0RTTI2UwCkJ7ef4%2Bg8%2FeTlXcSSH7fcQ3WTXImNVMQlEXBqwSnpBC9BBFQznciQxcUPQgx1Vt3Jl0YQZs3aiLwNu2e9FPQ0uATREX9RyGTBq5mzH7ZBadyTsshUF%2FI2fT2EhX1iZWnOWvbMCY3Qe5zBkeNsBT36nrhF8wiJb3vQY6pgHBspV0POfQBXCL3MDSpPD5Xo4GujQBqboJPS0HGH7gfOCzq1O3xrTbawSG3cRO1qj2cNzlGXgt6RPv5BF7oI63qfEDhSmDpp%2FBaECgO2ixSLACsRwRbsKqoJBnm51kBEtQPJviJag7AGQ2Czqf6NAMg8avcieoCY75%2BaWooPoQCyd%2FznwK%2BQ73WD%2F2bKk7xwItBDiR6WoRn57KSoC1DdPnzHiA7gnF&X-Amz-Signature=c8418cd044b6e66077566526762636af493ac0d563bed9bbe29633b2fe2332ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZEPJETK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHluiFj4oZWfT7wZZPLUDVkSZZyIYlHCkClFfWyZ8uQHAiAhXB2GFWrxNp03Z7%2FmSbG3N45dTEvUVMZDsVNNv0hZrCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2FhMZAgJ6w6oCIqTgKtwDPwXGd8Zjd7IOv%2BvLUfcoznn3Y4CBFjyshRcB%2FcCcIO13PfcE8C13T4XAh9fTsn4Ie%2FNy2aM1BMOBxbakIHSx1JT%2F0O7HUHnCHvRA54R4wCJsODFEQqI5JKZFYn3mRHrg2I47jhR4IXQBk8hjCYkxu18%2B18lMU83cJb4iEheZvQ0Yt%2BG8n1RvQc5kmRVx%2FnnhxkgE5wD2iL6lVicc5Odkf7m0lBB4qbiE93nvLY0ZbfvHj1cTh6qj%2FlynlN3Jv0EiVEhtMtiCSZMHGkEo8w%2Fq44qw5m2eVoHlyfBfXFNPRXykbE6%2F%2FNUZ3AErwXXfx5c5%2B7aKhH3S46n%2Fw4%2BmZ3Uxu5E5PQXe90qZZaF%2B2nXKrD%2FZWw7WrtSEQmDs4msAkvE6OBwv6Jb0fPNbT0gm%2Bb1tc7EXh3nfOKd0Nf4zzhJXq8awIZedZ9O2MK9l7MsCo9hTIUWSCRRPlo%2FY%2Fk9cJusLmagj0RTTI2UwCkJ7ef4%2Bg8%2FeTlXcSSH7fcQ3WTXImNVMQlEXBqwSnpBC9BBFQznciQxcUPQgx1Vt3Jl0YQZs3aiLwNu2e9FPQ0uATREX9RyGTBq5mzH7ZBadyTsshUF%2FI2fT2EhX1iZWnOWvbMCY3Qe5zBkeNsBT36nrhF8wiJb3vQY6pgHBspV0POfQBXCL3MDSpPD5Xo4GujQBqboJPS0HGH7gfOCzq1O3xrTbawSG3cRO1qj2cNzlGXgt6RPv5BF7oI63qfEDhSmDpp%2FBaECgO2ixSLACsRwRbsKqoJBnm51kBEtQPJviJag7AGQ2Czqf6NAMg8avcieoCY75%2BaWooPoQCyd%2FznwK%2BQ73WD%2F2bKk7xwItBDiR6WoRn57KSoC1DdPnzHiA7gnF&X-Amz-Signature=7918673fcb65edbc60b879dcc46adf32500dc0eae4fa9c976acb58e057825e23&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
