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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FQGLYGS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEbgoBNOs2XLrCLySdkGsY4rjCkJM9NEZX6bA4eKBcl9AiBDLpB6dddF%2BPOJRJ65esrPTRKzPLfrb3i4jbZL4NKscSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0n7Jr0z8kBYWWNiWKtwDmDaPGwJNhseL3bDL6dWLG40Fz6eMc%2F2PyA0z%2BHgQpC1Du4EoAA6fl2rSP9k1Z06QgWc%2BENTGVnlbajDvjSwaEAS1KXd%2Bc7YZmbIwxkQ1wZiFtdQexI7WKZhzlAziBX%2FOOWzV3R34uMVXP3Yyj5KLQMRwArKNJTk%2FJeWH50HaQZa%2BJ%2BCScI4kxiUH19GuWUGCo4s7ieehHl1zwPOfWXG%2FT0GuXWklyetTef93ENu11hWGFN09eMPKPiyRThRWxfKaamHAZtEP8Df4p7cxSKOcHkDgQ8ITAW%2F6Rr6fmvSd%2Bsw0rESgj7Wqgex57z1Q35KqwCmL%2BB%2Bf%2BEbac%2FCkBt50k2ygz8xYcwtnOO5mClJbABmGZiTmgP3rWm7DS1w05rKyV2LNlivXdFRnqXYAI%2FfJKbH3Y4U0sWOLGcN1cULHjtfNQoaNCi1qeZ%2BwoSzkhRK9dSZcrjKzoIYyDV1GYTJkmetGy197jVdVN5Sg4ZYRFnjoNauH6WqUmVegyejne%2Bp14lsmiuFoWtSWLqxRT8FHnQv6l1vtAMbI7GkpeZlTPTe2BqKv7Nqv2T9yhZcR1CqCh4M6Z1efN5kLP0k5o7PoWyI%2BUf06PDmS09qlq4W3V%2FstBmpDQmTMC6V47JAw9qu0vwY6pgFZmBD7bjQyJ5HmfErH8BZvbCvPaVptsHiHHciaGfC3DD3J5cmsAAgG7nNmdJL1MCzjMqExFOWbN3aRbS7Ngko5NvL28lP2GlXcErTKeVEB1CTePr9KVzoEUzSLJii930czXWrBxfprrTIG%2BrgQKiIT7HN3tKsBOGh2WIUxH%2F3iSDZjVslD7M%2FOp0Qf65qiUwgVet7QkHE6IATvdQ%2FKmjOSgjDyP%2BgB&X-Amz-Signature=3d9b86b11b4bcac5e88d610c850ce9bb5a47d115a8ddbf518b76b3127d58aad4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FQGLYGS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEbgoBNOs2XLrCLySdkGsY4rjCkJM9NEZX6bA4eKBcl9AiBDLpB6dddF%2BPOJRJ65esrPTRKzPLfrb3i4jbZL4NKscSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0n7Jr0z8kBYWWNiWKtwDmDaPGwJNhseL3bDL6dWLG40Fz6eMc%2F2PyA0z%2BHgQpC1Du4EoAA6fl2rSP9k1Z06QgWc%2BENTGVnlbajDvjSwaEAS1KXd%2Bc7YZmbIwxkQ1wZiFtdQexI7WKZhzlAziBX%2FOOWzV3R34uMVXP3Yyj5KLQMRwArKNJTk%2FJeWH50HaQZa%2BJ%2BCScI4kxiUH19GuWUGCo4s7ieehHl1zwPOfWXG%2FT0GuXWklyetTef93ENu11hWGFN09eMPKPiyRThRWxfKaamHAZtEP8Df4p7cxSKOcHkDgQ8ITAW%2F6Rr6fmvSd%2Bsw0rESgj7Wqgex57z1Q35KqwCmL%2BB%2Bf%2BEbac%2FCkBt50k2ygz8xYcwtnOO5mClJbABmGZiTmgP3rWm7DS1w05rKyV2LNlivXdFRnqXYAI%2FfJKbH3Y4U0sWOLGcN1cULHjtfNQoaNCi1qeZ%2BwoSzkhRK9dSZcrjKzoIYyDV1GYTJkmetGy197jVdVN5Sg4ZYRFnjoNauH6WqUmVegyejne%2Bp14lsmiuFoWtSWLqxRT8FHnQv6l1vtAMbI7GkpeZlTPTe2BqKv7Nqv2T9yhZcR1CqCh4M6Z1efN5kLP0k5o7PoWyI%2BUf06PDmS09qlq4W3V%2FstBmpDQmTMC6V47JAw9qu0vwY6pgFZmBD7bjQyJ5HmfErH8BZvbCvPaVptsHiHHciaGfC3DD3J5cmsAAgG7nNmdJL1MCzjMqExFOWbN3aRbS7Ngko5NvL28lP2GlXcErTKeVEB1CTePr9KVzoEUzSLJii930czXWrBxfprrTIG%2BrgQKiIT7HN3tKsBOGh2WIUxH%2F3iSDZjVslD7M%2FOp0Qf65qiUwgVet7QkHE6IATvdQ%2FKmjOSgjDyP%2BgB&X-Amz-Signature=4bf8c59d48c15d02781f27f9253450954669a3ca0bafc6d519b48eb1a14ca242&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FQGLYGS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEbgoBNOs2XLrCLySdkGsY4rjCkJM9NEZX6bA4eKBcl9AiBDLpB6dddF%2BPOJRJ65esrPTRKzPLfrb3i4jbZL4NKscSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0n7Jr0z8kBYWWNiWKtwDmDaPGwJNhseL3bDL6dWLG40Fz6eMc%2F2PyA0z%2BHgQpC1Du4EoAA6fl2rSP9k1Z06QgWc%2BENTGVnlbajDvjSwaEAS1KXd%2Bc7YZmbIwxkQ1wZiFtdQexI7WKZhzlAziBX%2FOOWzV3R34uMVXP3Yyj5KLQMRwArKNJTk%2FJeWH50HaQZa%2BJ%2BCScI4kxiUH19GuWUGCo4s7ieehHl1zwPOfWXG%2FT0GuXWklyetTef93ENu11hWGFN09eMPKPiyRThRWxfKaamHAZtEP8Df4p7cxSKOcHkDgQ8ITAW%2F6Rr6fmvSd%2Bsw0rESgj7Wqgex57z1Q35KqwCmL%2BB%2Bf%2BEbac%2FCkBt50k2ygz8xYcwtnOO5mClJbABmGZiTmgP3rWm7DS1w05rKyV2LNlivXdFRnqXYAI%2FfJKbH3Y4U0sWOLGcN1cULHjtfNQoaNCi1qeZ%2BwoSzkhRK9dSZcrjKzoIYyDV1GYTJkmetGy197jVdVN5Sg4ZYRFnjoNauH6WqUmVegyejne%2Bp14lsmiuFoWtSWLqxRT8FHnQv6l1vtAMbI7GkpeZlTPTe2BqKv7Nqv2T9yhZcR1CqCh4M6Z1efN5kLP0k5o7PoWyI%2BUf06PDmS09qlq4W3V%2FstBmpDQmTMC6V47JAw9qu0vwY6pgFZmBD7bjQyJ5HmfErH8BZvbCvPaVptsHiHHciaGfC3DD3J5cmsAAgG7nNmdJL1MCzjMqExFOWbN3aRbS7Ngko5NvL28lP2GlXcErTKeVEB1CTePr9KVzoEUzSLJii930czXWrBxfprrTIG%2BrgQKiIT7HN3tKsBOGh2WIUxH%2F3iSDZjVslD7M%2FOp0Qf65qiUwgVet7QkHE6IATvdQ%2FKmjOSgjDyP%2BgB&X-Amz-Signature=4ce781544740bd13b670dc5fc9ab8dcc9715008a5a379612cc21995f538fb4b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FQGLYGS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEbgoBNOs2XLrCLySdkGsY4rjCkJM9NEZX6bA4eKBcl9AiBDLpB6dddF%2BPOJRJ65esrPTRKzPLfrb3i4jbZL4NKscSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0n7Jr0z8kBYWWNiWKtwDmDaPGwJNhseL3bDL6dWLG40Fz6eMc%2F2PyA0z%2BHgQpC1Du4EoAA6fl2rSP9k1Z06QgWc%2BENTGVnlbajDvjSwaEAS1KXd%2Bc7YZmbIwxkQ1wZiFtdQexI7WKZhzlAziBX%2FOOWzV3R34uMVXP3Yyj5KLQMRwArKNJTk%2FJeWH50HaQZa%2BJ%2BCScI4kxiUH19GuWUGCo4s7ieehHl1zwPOfWXG%2FT0GuXWklyetTef93ENu11hWGFN09eMPKPiyRThRWxfKaamHAZtEP8Df4p7cxSKOcHkDgQ8ITAW%2F6Rr6fmvSd%2Bsw0rESgj7Wqgex57z1Q35KqwCmL%2BB%2Bf%2BEbac%2FCkBt50k2ygz8xYcwtnOO5mClJbABmGZiTmgP3rWm7DS1w05rKyV2LNlivXdFRnqXYAI%2FfJKbH3Y4U0sWOLGcN1cULHjtfNQoaNCi1qeZ%2BwoSzkhRK9dSZcrjKzoIYyDV1GYTJkmetGy197jVdVN5Sg4ZYRFnjoNauH6WqUmVegyejne%2Bp14lsmiuFoWtSWLqxRT8FHnQv6l1vtAMbI7GkpeZlTPTe2BqKv7Nqv2T9yhZcR1CqCh4M6Z1efN5kLP0k5o7PoWyI%2BUf06PDmS09qlq4W3V%2FstBmpDQmTMC6V47JAw9qu0vwY6pgFZmBD7bjQyJ5HmfErH8BZvbCvPaVptsHiHHciaGfC3DD3J5cmsAAgG7nNmdJL1MCzjMqExFOWbN3aRbS7Ngko5NvL28lP2GlXcErTKeVEB1CTePr9KVzoEUzSLJii930czXWrBxfprrTIG%2BrgQKiIT7HN3tKsBOGh2WIUxH%2F3iSDZjVslD7M%2FOp0Qf65qiUwgVet7QkHE6IATvdQ%2FKmjOSgjDyP%2BgB&X-Amz-Signature=7f01db937d7ddebf8a04c68b4d97527ec5fce477c49c0f6c08fd265f334269cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FQGLYGS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEbgoBNOs2XLrCLySdkGsY4rjCkJM9NEZX6bA4eKBcl9AiBDLpB6dddF%2BPOJRJ65esrPTRKzPLfrb3i4jbZL4NKscSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0n7Jr0z8kBYWWNiWKtwDmDaPGwJNhseL3bDL6dWLG40Fz6eMc%2F2PyA0z%2BHgQpC1Du4EoAA6fl2rSP9k1Z06QgWc%2BENTGVnlbajDvjSwaEAS1KXd%2Bc7YZmbIwxkQ1wZiFtdQexI7WKZhzlAziBX%2FOOWzV3R34uMVXP3Yyj5KLQMRwArKNJTk%2FJeWH50HaQZa%2BJ%2BCScI4kxiUH19GuWUGCo4s7ieehHl1zwPOfWXG%2FT0GuXWklyetTef93ENu11hWGFN09eMPKPiyRThRWxfKaamHAZtEP8Df4p7cxSKOcHkDgQ8ITAW%2F6Rr6fmvSd%2Bsw0rESgj7Wqgex57z1Q35KqwCmL%2BB%2Bf%2BEbac%2FCkBt50k2ygz8xYcwtnOO5mClJbABmGZiTmgP3rWm7DS1w05rKyV2LNlivXdFRnqXYAI%2FfJKbH3Y4U0sWOLGcN1cULHjtfNQoaNCi1qeZ%2BwoSzkhRK9dSZcrjKzoIYyDV1GYTJkmetGy197jVdVN5Sg4ZYRFnjoNauH6WqUmVegyejne%2Bp14lsmiuFoWtSWLqxRT8FHnQv6l1vtAMbI7GkpeZlTPTe2BqKv7Nqv2T9yhZcR1CqCh4M6Z1efN5kLP0k5o7PoWyI%2BUf06PDmS09qlq4W3V%2FstBmpDQmTMC6V47JAw9qu0vwY6pgFZmBD7bjQyJ5HmfErH8BZvbCvPaVptsHiHHciaGfC3DD3J5cmsAAgG7nNmdJL1MCzjMqExFOWbN3aRbS7Ngko5NvL28lP2GlXcErTKeVEB1CTePr9KVzoEUzSLJii930czXWrBxfprrTIG%2BrgQKiIT7HN3tKsBOGh2WIUxH%2F3iSDZjVslD7M%2FOp0Qf65qiUwgVet7QkHE6IATvdQ%2FKmjOSgjDyP%2BgB&X-Amz-Signature=7ecfafbf2da1efc746f91f4b97cd6299ec7428bee299e8ba80f458e1d6146139&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
