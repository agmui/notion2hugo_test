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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KDR65Y%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7NkofvNoL7lpBsBy5qFbeChoOKGTzRFGa3kYgKqaDxwIhAPhH59Ay3MWQrn7MU1Ex1xslf3PK9x7Ybz8HRI87hKI2KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3jhHJztFkrOwxbTIq3AMXzPWKroJAHz4vCCWRfVEHRwdE0QQVNSn%2Bxy3Qid7fpmn%2F34Mp%2FsekG%2BWC%2BNkRC6mKEoMt5rXKOfQZ4gkOC7%2B0uTQB4UAT43doAv7b9JLLZrGihwoXus5T4%2FpEHfFg2hpgJnf%2FvNjuU6JeLlC1EYbLO53UetHmMPdGEFZlFi1EMmOWCzRPpaH0G%2FV4fg4pH%2BltXogQuE%2BHDdoK4XwDFxcYhRRNZdmNWq6F%2Fe5F%2Fjf1YFlCgPd41vwmQDKyNWQxf5CQ%2BXyOtE%2F5CwFJqvH%2FGlJVAl5El4Z3hx1bF%2Ft22muM5LSVSOFRhE3KNY8Td9V4vWGda3TR19OR%2Bipx3ihR27HYWGCwuoQFvxe%2FYDP1UwBBUBmDSk12NhRgY0fq5aCAhMk1V9Am0LNHPj6%2BGkJjgrhMQGfowTGsudpmNlj4KA2Ha06LzqkM%2Bk4vvb8doaWdaCNepoeSgr%2BQwv7e1foYi2FM0IBfTi078QWBlGqzSWVEw43msbGEYB5zGpkVkYgNGfJgMLhyLkKtdMPeSJCa9u6ZS7KHrW5PfTEqi%2BER%2F0Ve59AgrCHwWKQBIJyGiFOWLR4NPmmuqkXtxnY6l963ME3adh%2BXjhFKs4sEXnU4BLwe0CeTvjBL%2BbJytvOw4zCU4%2FTABjqkAXUtDy4euA6fZ14OSjKu6X77oABeWMHcP6SuXKSnlzjQO3twASj8dD5Y%2BjM3cj45XPWqxzq8ZEL4EF4kNLCcLINF4mM1jlh04cA11YznEaO1uxoGRgB7COkoAbNmlI9pudfhAfoAvjaXZ5F9x%2FVCXZLVY7jxFmHUFCAqN05SHagsxiMqHmkWOXCWJ0h7VyL%2BtH6NEwfvyLZXMYN8YW5JXywOAy3Q&X-Amz-Signature=1e8c442855594a9a67a99df53a35e3ae604a4d2fe831d91a8e9c4faa35ea0ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KDR65Y%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7NkofvNoL7lpBsBy5qFbeChoOKGTzRFGa3kYgKqaDxwIhAPhH59Ay3MWQrn7MU1Ex1xslf3PK9x7Ybz8HRI87hKI2KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3jhHJztFkrOwxbTIq3AMXzPWKroJAHz4vCCWRfVEHRwdE0QQVNSn%2Bxy3Qid7fpmn%2F34Mp%2FsekG%2BWC%2BNkRC6mKEoMt5rXKOfQZ4gkOC7%2B0uTQB4UAT43doAv7b9JLLZrGihwoXus5T4%2FpEHfFg2hpgJnf%2FvNjuU6JeLlC1EYbLO53UetHmMPdGEFZlFi1EMmOWCzRPpaH0G%2FV4fg4pH%2BltXogQuE%2BHDdoK4XwDFxcYhRRNZdmNWq6F%2Fe5F%2Fjf1YFlCgPd41vwmQDKyNWQxf5CQ%2BXyOtE%2F5CwFJqvH%2FGlJVAl5El4Z3hx1bF%2Ft22muM5LSVSOFRhE3KNY8Td9V4vWGda3TR19OR%2Bipx3ihR27HYWGCwuoQFvxe%2FYDP1UwBBUBmDSk12NhRgY0fq5aCAhMk1V9Am0LNHPj6%2BGkJjgrhMQGfowTGsudpmNlj4KA2Ha06LzqkM%2Bk4vvb8doaWdaCNepoeSgr%2BQwv7e1foYi2FM0IBfTi078QWBlGqzSWVEw43msbGEYB5zGpkVkYgNGfJgMLhyLkKtdMPeSJCa9u6ZS7KHrW5PfTEqi%2BER%2F0Ve59AgrCHwWKQBIJyGiFOWLR4NPmmuqkXtxnY6l963ME3adh%2BXjhFKs4sEXnU4BLwe0CeTvjBL%2BbJytvOw4zCU4%2FTABjqkAXUtDy4euA6fZ14OSjKu6X77oABeWMHcP6SuXKSnlzjQO3twASj8dD5Y%2BjM3cj45XPWqxzq8ZEL4EF4kNLCcLINF4mM1jlh04cA11YznEaO1uxoGRgB7COkoAbNmlI9pudfhAfoAvjaXZ5F9x%2FVCXZLVY7jxFmHUFCAqN05SHagsxiMqHmkWOXCWJ0h7VyL%2BtH6NEwfvyLZXMYN8YW5JXywOAy3Q&X-Amz-Signature=4835fd39c4ca072191568cb32234233b900762b7a904c7a404778402a0f959ea&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KDR65Y%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7NkofvNoL7lpBsBy5qFbeChoOKGTzRFGa3kYgKqaDxwIhAPhH59Ay3MWQrn7MU1Ex1xslf3PK9x7Ybz8HRI87hKI2KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3jhHJztFkrOwxbTIq3AMXzPWKroJAHz4vCCWRfVEHRwdE0QQVNSn%2Bxy3Qid7fpmn%2F34Mp%2FsekG%2BWC%2BNkRC6mKEoMt5rXKOfQZ4gkOC7%2B0uTQB4UAT43doAv7b9JLLZrGihwoXus5T4%2FpEHfFg2hpgJnf%2FvNjuU6JeLlC1EYbLO53UetHmMPdGEFZlFi1EMmOWCzRPpaH0G%2FV4fg4pH%2BltXogQuE%2BHDdoK4XwDFxcYhRRNZdmNWq6F%2Fe5F%2Fjf1YFlCgPd41vwmQDKyNWQxf5CQ%2BXyOtE%2F5CwFJqvH%2FGlJVAl5El4Z3hx1bF%2Ft22muM5LSVSOFRhE3KNY8Td9V4vWGda3TR19OR%2Bipx3ihR27HYWGCwuoQFvxe%2FYDP1UwBBUBmDSk12NhRgY0fq5aCAhMk1V9Am0LNHPj6%2BGkJjgrhMQGfowTGsudpmNlj4KA2Ha06LzqkM%2Bk4vvb8doaWdaCNepoeSgr%2BQwv7e1foYi2FM0IBfTi078QWBlGqzSWVEw43msbGEYB5zGpkVkYgNGfJgMLhyLkKtdMPeSJCa9u6ZS7KHrW5PfTEqi%2BER%2F0Ve59AgrCHwWKQBIJyGiFOWLR4NPmmuqkXtxnY6l963ME3adh%2BXjhFKs4sEXnU4BLwe0CeTvjBL%2BbJytvOw4zCU4%2FTABjqkAXUtDy4euA6fZ14OSjKu6X77oABeWMHcP6SuXKSnlzjQO3twASj8dD5Y%2BjM3cj45XPWqxzq8ZEL4EF4kNLCcLINF4mM1jlh04cA11YznEaO1uxoGRgB7COkoAbNmlI9pudfhAfoAvjaXZ5F9x%2FVCXZLVY7jxFmHUFCAqN05SHagsxiMqHmkWOXCWJ0h7VyL%2BtH6NEwfvyLZXMYN8YW5JXywOAy3Q&X-Amz-Signature=c38dff641891d274009c3715085b5f70d3d75bce4c432efa2fcfdaed04c13b60&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KDR65Y%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7NkofvNoL7lpBsBy5qFbeChoOKGTzRFGa3kYgKqaDxwIhAPhH59Ay3MWQrn7MU1Ex1xslf3PK9x7Ybz8HRI87hKI2KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3jhHJztFkrOwxbTIq3AMXzPWKroJAHz4vCCWRfVEHRwdE0QQVNSn%2Bxy3Qid7fpmn%2F34Mp%2FsekG%2BWC%2BNkRC6mKEoMt5rXKOfQZ4gkOC7%2B0uTQB4UAT43doAv7b9JLLZrGihwoXus5T4%2FpEHfFg2hpgJnf%2FvNjuU6JeLlC1EYbLO53UetHmMPdGEFZlFi1EMmOWCzRPpaH0G%2FV4fg4pH%2BltXogQuE%2BHDdoK4XwDFxcYhRRNZdmNWq6F%2Fe5F%2Fjf1YFlCgPd41vwmQDKyNWQxf5CQ%2BXyOtE%2F5CwFJqvH%2FGlJVAl5El4Z3hx1bF%2Ft22muM5LSVSOFRhE3KNY8Td9V4vWGda3TR19OR%2Bipx3ihR27HYWGCwuoQFvxe%2FYDP1UwBBUBmDSk12NhRgY0fq5aCAhMk1V9Am0LNHPj6%2BGkJjgrhMQGfowTGsudpmNlj4KA2Ha06LzqkM%2Bk4vvb8doaWdaCNepoeSgr%2BQwv7e1foYi2FM0IBfTi078QWBlGqzSWVEw43msbGEYB5zGpkVkYgNGfJgMLhyLkKtdMPeSJCa9u6ZS7KHrW5PfTEqi%2BER%2F0Ve59AgrCHwWKQBIJyGiFOWLR4NPmmuqkXtxnY6l963ME3adh%2BXjhFKs4sEXnU4BLwe0CeTvjBL%2BbJytvOw4zCU4%2FTABjqkAXUtDy4euA6fZ14OSjKu6X77oABeWMHcP6SuXKSnlzjQO3twASj8dD5Y%2BjM3cj45XPWqxzq8ZEL4EF4kNLCcLINF4mM1jlh04cA11YznEaO1uxoGRgB7COkoAbNmlI9pudfhAfoAvjaXZ5F9x%2FVCXZLVY7jxFmHUFCAqN05SHagsxiMqHmkWOXCWJ0h7VyL%2BtH6NEwfvyLZXMYN8YW5JXywOAy3Q&X-Amz-Signature=d07cb2a00f9e0d70e6beea6289d91e9e28133b1019bae9583d1b57daa8441ae7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KDR65Y%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7NkofvNoL7lpBsBy5qFbeChoOKGTzRFGa3kYgKqaDxwIhAPhH59Ay3MWQrn7MU1Ex1xslf3PK9x7Ybz8HRI87hKI2KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3jhHJztFkrOwxbTIq3AMXzPWKroJAHz4vCCWRfVEHRwdE0QQVNSn%2Bxy3Qid7fpmn%2F34Mp%2FsekG%2BWC%2BNkRC6mKEoMt5rXKOfQZ4gkOC7%2B0uTQB4UAT43doAv7b9JLLZrGihwoXus5T4%2FpEHfFg2hpgJnf%2FvNjuU6JeLlC1EYbLO53UetHmMPdGEFZlFi1EMmOWCzRPpaH0G%2FV4fg4pH%2BltXogQuE%2BHDdoK4XwDFxcYhRRNZdmNWq6F%2Fe5F%2Fjf1YFlCgPd41vwmQDKyNWQxf5CQ%2BXyOtE%2F5CwFJqvH%2FGlJVAl5El4Z3hx1bF%2Ft22muM5LSVSOFRhE3KNY8Td9V4vWGda3TR19OR%2Bipx3ihR27HYWGCwuoQFvxe%2FYDP1UwBBUBmDSk12NhRgY0fq5aCAhMk1V9Am0LNHPj6%2BGkJjgrhMQGfowTGsudpmNlj4KA2Ha06LzqkM%2Bk4vvb8doaWdaCNepoeSgr%2BQwv7e1foYi2FM0IBfTi078QWBlGqzSWVEw43msbGEYB5zGpkVkYgNGfJgMLhyLkKtdMPeSJCa9u6ZS7KHrW5PfTEqi%2BER%2F0Ve59AgrCHwWKQBIJyGiFOWLR4NPmmuqkXtxnY6l963ME3adh%2BXjhFKs4sEXnU4BLwe0CeTvjBL%2BbJytvOw4zCU4%2FTABjqkAXUtDy4euA6fZ14OSjKu6X77oABeWMHcP6SuXKSnlzjQO3twASj8dD5Y%2BjM3cj45XPWqxzq8ZEL4EF4kNLCcLINF4mM1jlh04cA11YznEaO1uxoGRgB7COkoAbNmlI9pudfhAfoAvjaXZ5F9x%2FVCXZLVY7jxFmHUFCAqN05SHagsxiMqHmkWOXCWJ0h7VyL%2BtH6NEwfvyLZXMYN8YW5JXywOAy3Q&X-Amz-Signature=2e762ccae01f3283b86885b080d6e1624a163cd331f66185002fdaf9aef092c8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
