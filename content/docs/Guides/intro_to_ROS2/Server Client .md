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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWQ6HIE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3M5zWlCIgBnmN5WkLC4D%2FeKSiSuWSZfA%2Fyorp%2BH13uAiA%2FRYVD4VODA%2Fnk6z4Lt0oi2yC%2FakEBDGzGN0ia%2F3aOoyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FtPs9zGWRt5McIn1KtwDvd7bXkuAw2NIRluQSNbyuGsNHaByl3sSzqOqc6WzkBAz0IdSqc%2FFVzpzrNuuldD%2Buy9zL%2F8itLll3nsU5uNBJPuHV%2B%2FdpF3ww6OeQYPMYLYapYMfbj5Da2myz9iR58xD6eDHGF%2BWKDIDF4meM%2BODBKRb2dvNY2dgqugIBzcFNU1MQMrpK3iCTeOc0enpQTgRmlVUN1R367HVretbF9laOEmRQdnrq9jooFEgUEwzyzVq4sh3pXiT%2B9g07U4V3rX5SD50XW8r2QEzSbBFg1daO22tdGDOmAyqyJREIg17XAprV1qmu3rKU93eabXq6sf0jvwq3YJ%2BCAl2dlLE8jUJSHgUJjQ028HboGsu3Fk7iqC7MFKpjBQIXKOuVJiuo%2BdKDc0XZ5HpHbMUeDnKW6GPmViFXXnyEpwj2icq9RVoYG5gmOY%2FNsK9iGvY6Ntdt1Y5Ko%2FFrUXMVnWCraxj2SoyQtKnt%2B7oCEKPG9dXB3JHg7bc1mjhR3p4MR7iPmYyG7MT207F333Yshmj8YBZzY9Fcg7ZyC8T8NIxXWEmINyIC649za7Ggi28E5FKf9Zl9t14n2K5Vyi6KnDMgxbPy%2Fkgn5%2BF84IyIBF6kJQhDmATSh0Wle%2BNIe3VbmD1CWgw2%2FKUwgY6pgHV9jVOxnJWQkmTvQqOiDiQlqOFoaROM%2Bf4%2Frzk30F2SLiRmfa3liVZue6IVgJSi%2BUd%2FkzszZfLrd5ja8ZBegdxCzaO2uIqbkERMJsVkM3e7eaDLIj9qRigvMA4tfe5L7rwjG%2FiikduDacwoGHdchqpHJfTAv%2BoJNtR2y7IPUPVjy4zjY8ujnmA7f09xL%2FP%2BeWuew%2BXZnLSoUwUNkPYIsWSxhJD1UVe&X-Amz-Signature=d4da38345beb5bc1981df7a24d3d0a773707480a267580c4e7e30c3fc4cdd9d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWQ6HIE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3M5zWlCIgBnmN5WkLC4D%2FeKSiSuWSZfA%2Fyorp%2BH13uAiA%2FRYVD4VODA%2Fnk6z4Lt0oi2yC%2FakEBDGzGN0ia%2F3aOoyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FtPs9zGWRt5McIn1KtwDvd7bXkuAw2NIRluQSNbyuGsNHaByl3sSzqOqc6WzkBAz0IdSqc%2FFVzpzrNuuldD%2Buy9zL%2F8itLll3nsU5uNBJPuHV%2B%2FdpF3ww6OeQYPMYLYapYMfbj5Da2myz9iR58xD6eDHGF%2BWKDIDF4meM%2BODBKRb2dvNY2dgqugIBzcFNU1MQMrpK3iCTeOc0enpQTgRmlVUN1R367HVretbF9laOEmRQdnrq9jooFEgUEwzyzVq4sh3pXiT%2B9g07U4V3rX5SD50XW8r2QEzSbBFg1daO22tdGDOmAyqyJREIg17XAprV1qmu3rKU93eabXq6sf0jvwq3YJ%2BCAl2dlLE8jUJSHgUJjQ028HboGsu3Fk7iqC7MFKpjBQIXKOuVJiuo%2BdKDc0XZ5HpHbMUeDnKW6GPmViFXXnyEpwj2icq9RVoYG5gmOY%2FNsK9iGvY6Ntdt1Y5Ko%2FFrUXMVnWCraxj2SoyQtKnt%2B7oCEKPG9dXB3JHg7bc1mjhR3p4MR7iPmYyG7MT207F333Yshmj8YBZzY9Fcg7ZyC8T8NIxXWEmINyIC649za7Ggi28E5FKf9Zl9t14n2K5Vyi6KnDMgxbPy%2Fkgn5%2BF84IyIBF6kJQhDmATSh0Wle%2BNIe3VbmD1CWgw2%2FKUwgY6pgHV9jVOxnJWQkmTvQqOiDiQlqOFoaROM%2Bf4%2Frzk30F2SLiRmfa3liVZue6IVgJSi%2BUd%2FkzszZfLrd5ja8ZBegdxCzaO2uIqbkERMJsVkM3e7eaDLIj9qRigvMA4tfe5L7rwjG%2FiikduDacwoGHdchqpHJfTAv%2BoJNtR2y7IPUPVjy4zjY8ujnmA7f09xL%2FP%2BeWuew%2BXZnLSoUwUNkPYIsWSxhJD1UVe&X-Amz-Signature=2d922426ce9bed96c83170888512398bd209fb101b3f8cd2b11457d93ca11547&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWQ6HIE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3M5zWlCIgBnmN5WkLC4D%2FeKSiSuWSZfA%2Fyorp%2BH13uAiA%2FRYVD4VODA%2Fnk6z4Lt0oi2yC%2FakEBDGzGN0ia%2F3aOoyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FtPs9zGWRt5McIn1KtwDvd7bXkuAw2NIRluQSNbyuGsNHaByl3sSzqOqc6WzkBAz0IdSqc%2FFVzpzrNuuldD%2Buy9zL%2F8itLll3nsU5uNBJPuHV%2B%2FdpF3ww6OeQYPMYLYapYMfbj5Da2myz9iR58xD6eDHGF%2BWKDIDF4meM%2BODBKRb2dvNY2dgqugIBzcFNU1MQMrpK3iCTeOc0enpQTgRmlVUN1R367HVretbF9laOEmRQdnrq9jooFEgUEwzyzVq4sh3pXiT%2B9g07U4V3rX5SD50XW8r2QEzSbBFg1daO22tdGDOmAyqyJREIg17XAprV1qmu3rKU93eabXq6sf0jvwq3YJ%2BCAl2dlLE8jUJSHgUJjQ028HboGsu3Fk7iqC7MFKpjBQIXKOuVJiuo%2BdKDc0XZ5HpHbMUeDnKW6GPmViFXXnyEpwj2icq9RVoYG5gmOY%2FNsK9iGvY6Ntdt1Y5Ko%2FFrUXMVnWCraxj2SoyQtKnt%2B7oCEKPG9dXB3JHg7bc1mjhR3p4MR7iPmYyG7MT207F333Yshmj8YBZzY9Fcg7ZyC8T8NIxXWEmINyIC649za7Ggi28E5FKf9Zl9t14n2K5Vyi6KnDMgxbPy%2Fkgn5%2BF84IyIBF6kJQhDmATSh0Wle%2BNIe3VbmD1CWgw2%2FKUwgY6pgHV9jVOxnJWQkmTvQqOiDiQlqOFoaROM%2Bf4%2Frzk30F2SLiRmfa3liVZue6IVgJSi%2BUd%2FkzszZfLrd5ja8ZBegdxCzaO2uIqbkERMJsVkM3e7eaDLIj9qRigvMA4tfe5L7rwjG%2FiikduDacwoGHdchqpHJfTAv%2BoJNtR2y7IPUPVjy4zjY8ujnmA7f09xL%2FP%2BeWuew%2BXZnLSoUwUNkPYIsWSxhJD1UVe&X-Amz-Signature=d1d5695f42131f45edb655670733c04433ea98f68678e3ccaed146739def3cb0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWQ6HIE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3M5zWlCIgBnmN5WkLC4D%2FeKSiSuWSZfA%2Fyorp%2BH13uAiA%2FRYVD4VODA%2Fnk6z4Lt0oi2yC%2FakEBDGzGN0ia%2F3aOoyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FtPs9zGWRt5McIn1KtwDvd7bXkuAw2NIRluQSNbyuGsNHaByl3sSzqOqc6WzkBAz0IdSqc%2FFVzpzrNuuldD%2Buy9zL%2F8itLll3nsU5uNBJPuHV%2B%2FdpF3ww6OeQYPMYLYapYMfbj5Da2myz9iR58xD6eDHGF%2BWKDIDF4meM%2BODBKRb2dvNY2dgqugIBzcFNU1MQMrpK3iCTeOc0enpQTgRmlVUN1R367HVretbF9laOEmRQdnrq9jooFEgUEwzyzVq4sh3pXiT%2B9g07U4V3rX5SD50XW8r2QEzSbBFg1daO22tdGDOmAyqyJREIg17XAprV1qmu3rKU93eabXq6sf0jvwq3YJ%2BCAl2dlLE8jUJSHgUJjQ028HboGsu3Fk7iqC7MFKpjBQIXKOuVJiuo%2BdKDc0XZ5HpHbMUeDnKW6GPmViFXXnyEpwj2icq9RVoYG5gmOY%2FNsK9iGvY6Ntdt1Y5Ko%2FFrUXMVnWCraxj2SoyQtKnt%2B7oCEKPG9dXB3JHg7bc1mjhR3p4MR7iPmYyG7MT207F333Yshmj8YBZzY9Fcg7ZyC8T8NIxXWEmINyIC649za7Ggi28E5FKf9Zl9t14n2K5Vyi6KnDMgxbPy%2Fkgn5%2BF84IyIBF6kJQhDmATSh0Wle%2BNIe3VbmD1CWgw2%2FKUwgY6pgHV9jVOxnJWQkmTvQqOiDiQlqOFoaROM%2Bf4%2Frzk30F2SLiRmfa3liVZue6IVgJSi%2BUd%2FkzszZfLrd5ja8ZBegdxCzaO2uIqbkERMJsVkM3e7eaDLIj9qRigvMA4tfe5L7rwjG%2FiikduDacwoGHdchqpHJfTAv%2BoJNtR2y7IPUPVjy4zjY8ujnmA7f09xL%2FP%2BeWuew%2BXZnLSoUwUNkPYIsWSxhJD1UVe&X-Amz-Signature=fe32164a54cf7282def70d4bda80dc83229f10daf6e650f49b082f76c55d7faf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWQ6HIE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3M5zWlCIgBnmN5WkLC4D%2FeKSiSuWSZfA%2Fyorp%2BH13uAiA%2FRYVD4VODA%2Fnk6z4Lt0oi2yC%2FakEBDGzGN0ia%2F3aOoyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FtPs9zGWRt5McIn1KtwDvd7bXkuAw2NIRluQSNbyuGsNHaByl3sSzqOqc6WzkBAz0IdSqc%2FFVzpzrNuuldD%2Buy9zL%2F8itLll3nsU5uNBJPuHV%2B%2FdpF3ww6OeQYPMYLYapYMfbj5Da2myz9iR58xD6eDHGF%2BWKDIDF4meM%2BODBKRb2dvNY2dgqugIBzcFNU1MQMrpK3iCTeOc0enpQTgRmlVUN1R367HVretbF9laOEmRQdnrq9jooFEgUEwzyzVq4sh3pXiT%2B9g07U4V3rX5SD50XW8r2QEzSbBFg1daO22tdGDOmAyqyJREIg17XAprV1qmu3rKU93eabXq6sf0jvwq3YJ%2BCAl2dlLE8jUJSHgUJjQ028HboGsu3Fk7iqC7MFKpjBQIXKOuVJiuo%2BdKDc0XZ5HpHbMUeDnKW6GPmViFXXnyEpwj2icq9RVoYG5gmOY%2FNsK9iGvY6Ntdt1Y5Ko%2FFrUXMVnWCraxj2SoyQtKnt%2B7oCEKPG9dXB3JHg7bc1mjhR3p4MR7iPmYyG7MT207F333Yshmj8YBZzY9Fcg7ZyC8T8NIxXWEmINyIC649za7Ggi28E5FKf9Zl9t14n2K5Vyi6KnDMgxbPy%2Fkgn5%2BF84IyIBF6kJQhDmATSh0Wle%2BNIe3VbmD1CWgw2%2FKUwgY6pgHV9jVOxnJWQkmTvQqOiDiQlqOFoaROM%2Bf4%2Frzk30F2SLiRmfa3liVZue6IVgJSi%2BUd%2FkzszZfLrd5ja8ZBegdxCzaO2uIqbkERMJsVkM3e7eaDLIj9qRigvMA4tfe5L7rwjG%2FiikduDacwoGHdchqpHJfTAv%2BoJNtR2y7IPUPVjy4zjY8ujnmA7f09xL%2FP%2BeWuew%2BXZnLSoUwUNkPYIsWSxhJD1UVe&X-Amz-Signature=94774cd788cdcfbd06b979c3a71048d29704cf82516a7e4811d648428de2eea1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
