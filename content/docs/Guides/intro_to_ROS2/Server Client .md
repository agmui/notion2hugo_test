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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WNWEJK%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCV7Witd%2F6eaohUo81LbRoSIfNDa4Y9Yx38hQADpgKHjgIhANkB16o0rt7LurclKvcZY6q1DvKe%2BAq6tNrWTBT7ixYWKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNpoDaH5SzAF0DygEq3ANu%2BAUJSxOGuZ%2BJpRu35qh7i6o%2BPGuKzbPRtWTe7dy4ocaPjg0ZbdU3O%2FqDT%2B4LDf%2FbAVLHt9oB%2F9zo4dKZEI462Z29%2BCOWrjcnc631X6in4BwAUF31rdTEdxwmIAKCZFT1onWfOJ6oNi53TJykvUnKKao1uVgi8V0zMRBBqh3S2lUUq64DK0u3lQezVScbzf%2BfjtqD60OgRrla4IzQvzBR2BHr0%2Fndkw6fYeY7OdFflXptQCHcdTpJE%2Bf%2Fh5vs360QIfT5%2F8C8xVZsj17nbWo%2F7t%2F4VTCdYp11vu5w0WZrgxWcMu7ehhhOT1fi%2FcBC1jReyvfws%2FbqaJzeRZ7gUjY5tRw1DoIUABdn1bhRLjk8nODvVJ5xv49WqdKNfXkK09H0ngIZdQ8TXiyVUif%2F9EVzJCtXpivsRoTrF2meMNrngZdeHM4Q8%2BwDa5iOjvnfaWVwV6ZYhFp%2Fzu8VwevFNu%2BwuukfiRcE%2Fysn3zxRYvHEhyiq4RC9R%2FJryHQcvSUaRqhHYN9TkqXTomleM%2BTHQGe2ErzOgiGw7Hb0AG6t6yXwmnbhpgq8kAxTHJWurSIVZ3K6KRHAXoYyvKSOIvkckqQxvMjd4OqXtrchiUS1rBagpcDU%2F0ihc0xG6EBhuzCiuZrABjqkAc%2BdYxzO6Rj686EI%2FPnhNZgaRAIHbISKbjQLQdgEdvHlNinBw9Yq68Z0Y2AkvJmqW90se1MYuqNHgqfzJNLajFsq0q78JEw4ZQhsLsuW%2BbHNqjOYzjjmzg2W6eFecVRCxqar5mZEnH5QznSXJWxwmrp1%2F3Q1oFTdZwnFPF4Z4MUJY1nRGnFnPQYl4XUOxVi7GUzpuct3kS88MHOr1gVxTyFId4Qb&X-Amz-Signature=498b9cc7753c1e47606a6e4b68c75ec53ac84111a270fc36f9f7f1a5b888bfba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WNWEJK%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCV7Witd%2F6eaohUo81LbRoSIfNDa4Y9Yx38hQADpgKHjgIhANkB16o0rt7LurclKvcZY6q1DvKe%2BAq6tNrWTBT7ixYWKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNpoDaH5SzAF0DygEq3ANu%2BAUJSxOGuZ%2BJpRu35qh7i6o%2BPGuKzbPRtWTe7dy4ocaPjg0ZbdU3O%2FqDT%2B4LDf%2FbAVLHt9oB%2F9zo4dKZEI462Z29%2BCOWrjcnc631X6in4BwAUF31rdTEdxwmIAKCZFT1onWfOJ6oNi53TJykvUnKKao1uVgi8V0zMRBBqh3S2lUUq64DK0u3lQezVScbzf%2BfjtqD60OgRrla4IzQvzBR2BHr0%2Fndkw6fYeY7OdFflXptQCHcdTpJE%2Bf%2Fh5vs360QIfT5%2F8C8xVZsj17nbWo%2F7t%2F4VTCdYp11vu5w0WZrgxWcMu7ehhhOT1fi%2FcBC1jReyvfws%2FbqaJzeRZ7gUjY5tRw1DoIUABdn1bhRLjk8nODvVJ5xv49WqdKNfXkK09H0ngIZdQ8TXiyVUif%2F9EVzJCtXpivsRoTrF2meMNrngZdeHM4Q8%2BwDa5iOjvnfaWVwV6ZYhFp%2Fzu8VwevFNu%2BwuukfiRcE%2Fysn3zxRYvHEhyiq4RC9R%2FJryHQcvSUaRqhHYN9TkqXTomleM%2BTHQGe2ErzOgiGw7Hb0AG6t6yXwmnbhpgq8kAxTHJWurSIVZ3K6KRHAXoYyvKSOIvkckqQxvMjd4OqXtrchiUS1rBagpcDU%2F0ihc0xG6EBhuzCiuZrABjqkAc%2BdYxzO6Rj686EI%2FPnhNZgaRAIHbISKbjQLQdgEdvHlNinBw9Yq68Z0Y2AkvJmqW90se1MYuqNHgqfzJNLajFsq0q78JEw4ZQhsLsuW%2BbHNqjOYzjjmzg2W6eFecVRCxqar5mZEnH5QznSXJWxwmrp1%2F3Q1oFTdZwnFPF4Z4MUJY1nRGnFnPQYl4XUOxVi7GUzpuct3kS88MHOr1gVxTyFId4Qb&X-Amz-Signature=f4e1a1efd83d48c695c835f3c0af6c50c2bf961f0b2c6e7a0649ac48032ae5e6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WNWEJK%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCV7Witd%2F6eaohUo81LbRoSIfNDa4Y9Yx38hQADpgKHjgIhANkB16o0rt7LurclKvcZY6q1DvKe%2BAq6tNrWTBT7ixYWKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNpoDaH5SzAF0DygEq3ANu%2BAUJSxOGuZ%2BJpRu35qh7i6o%2BPGuKzbPRtWTe7dy4ocaPjg0ZbdU3O%2FqDT%2B4LDf%2FbAVLHt9oB%2F9zo4dKZEI462Z29%2BCOWrjcnc631X6in4BwAUF31rdTEdxwmIAKCZFT1onWfOJ6oNi53TJykvUnKKao1uVgi8V0zMRBBqh3S2lUUq64DK0u3lQezVScbzf%2BfjtqD60OgRrla4IzQvzBR2BHr0%2Fndkw6fYeY7OdFflXptQCHcdTpJE%2Bf%2Fh5vs360QIfT5%2F8C8xVZsj17nbWo%2F7t%2F4VTCdYp11vu5w0WZrgxWcMu7ehhhOT1fi%2FcBC1jReyvfws%2FbqaJzeRZ7gUjY5tRw1DoIUABdn1bhRLjk8nODvVJ5xv49WqdKNfXkK09H0ngIZdQ8TXiyVUif%2F9EVzJCtXpivsRoTrF2meMNrngZdeHM4Q8%2BwDa5iOjvnfaWVwV6ZYhFp%2Fzu8VwevFNu%2BwuukfiRcE%2Fysn3zxRYvHEhyiq4RC9R%2FJryHQcvSUaRqhHYN9TkqXTomleM%2BTHQGe2ErzOgiGw7Hb0AG6t6yXwmnbhpgq8kAxTHJWurSIVZ3K6KRHAXoYyvKSOIvkckqQxvMjd4OqXtrchiUS1rBagpcDU%2F0ihc0xG6EBhuzCiuZrABjqkAc%2BdYxzO6Rj686EI%2FPnhNZgaRAIHbISKbjQLQdgEdvHlNinBw9Yq68Z0Y2AkvJmqW90se1MYuqNHgqfzJNLajFsq0q78JEw4ZQhsLsuW%2BbHNqjOYzjjmzg2W6eFecVRCxqar5mZEnH5QznSXJWxwmrp1%2F3Q1oFTdZwnFPF4Z4MUJY1nRGnFnPQYl4XUOxVi7GUzpuct3kS88MHOr1gVxTyFId4Qb&X-Amz-Signature=0fa5a4742a343c3f5b5fb9b5177a77240a9afa66b3eb6c9efe0997b638a74591&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WNWEJK%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCV7Witd%2F6eaohUo81LbRoSIfNDa4Y9Yx38hQADpgKHjgIhANkB16o0rt7LurclKvcZY6q1DvKe%2BAq6tNrWTBT7ixYWKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNpoDaH5SzAF0DygEq3ANu%2BAUJSxOGuZ%2BJpRu35qh7i6o%2BPGuKzbPRtWTe7dy4ocaPjg0ZbdU3O%2FqDT%2B4LDf%2FbAVLHt9oB%2F9zo4dKZEI462Z29%2BCOWrjcnc631X6in4BwAUF31rdTEdxwmIAKCZFT1onWfOJ6oNi53TJykvUnKKao1uVgi8V0zMRBBqh3S2lUUq64DK0u3lQezVScbzf%2BfjtqD60OgRrla4IzQvzBR2BHr0%2Fndkw6fYeY7OdFflXptQCHcdTpJE%2Bf%2Fh5vs360QIfT5%2F8C8xVZsj17nbWo%2F7t%2F4VTCdYp11vu5w0WZrgxWcMu7ehhhOT1fi%2FcBC1jReyvfws%2FbqaJzeRZ7gUjY5tRw1DoIUABdn1bhRLjk8nODvVJ5xv49WqdKNfXkK09H0ngIZdQ8TXiyVUif%2F9EVzJCtXpivsRoTrF2meMNrngZdeHM4Q8%2BwDa5iOjvnfaWVwV6ZYhFp%2Fzu8VwevFNu%2BwuukfiRcE%2Fysn3zxRYvHEhyiq4RC9R%2FJryHQcvSUaRqhHYN9TkqXTomleM%2BTHQGe2ErzOgiGw7Hb0AG6t6yXwmnbhpgq8kAxTHJWurSIVZ3K6KRHAXoYyvKSOIvkckqQxvMjd4OqXtrchiUS1rBagpcDU%2F0ihc0xG6EBhuzCiuZrABjqkAc%2BdYxzO6Rj686EI%2FPnhNZgaRAIHbISKbjQLQdgEdvHlNinBw9Yq68Z0Y2AkvJmqW90se1MYuqNHgqfzJNLajFsq0q78JEw4ZQhsLsuW%2BbHNqjOYzjjmzg2W6eFecVRCxqar5mZEnH5QznSXJWxwmrp1%2F3Q1oFTdZwnFPF4Z4MUJY1nRGnFnPQYl4XUOxVi7GUzpuct3kS88MHOr1gVxTyFId4Qb&X-Amz-Signature=8cd72475fcf89ebd090691fcc282d26d534aee90d88debdabc3992e9ea1a99cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WNWEJK%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCV7Witd%2F6eaohUo81LbRoSIfNDa4Y9Yx38hQADpgKHjgIhANkB16o0rt7LurclKvcZY6q1DvKe%2BAq6tNrWTBT7ixYWKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNpoDaH5SzAF0DygEq3ANu%2BAUJSxOGuZ%2BJpRu35qh7i6o%2BPGuKzbPRtWTe7dy4ocaPjg0ZbdU3O%2FqDT%2B4LDf%2FbAVLHt9oB%2F9zo4dKZEI462Z29%2BCOWrjcnc631X6in4BwAUF31rdTEdxwmIAKCZFT1onWfOJ6oNi53TJykvUnKKao1uVgi8V0zMRBBqh3S2lUUq64DK0u3lQezVScbzf%2BfjtqD60OgRrla4IzQvzBR2BHr0%2Fndkw6fYeY7OdFflXptQCHcdTpJE%2Bf%2Fh5vs360QIfT5%2F8C8xVZsj17nbWo%2F7t%2F4VTCdYp11vu5w0WZrgxWcMu7ehhhOT1fi%2FcBC1jReyvfws%2FbqaJzeRZ7gUjY5tRw1DoIUABdn1bhRLjk8nODvVJ5xv49WqdKNfXkK09H0ngIZdQ8TXiyVUif%2F9EVzJCtXpivsRoTrF2meMNrngZdeHM4Q8%2BwDa5iOjvnfaWVwV6ZYhFp%2Fzu8VwevFNu%2BwuukfiRcE%2Fysn3zxRYvHEhyiq4RC9R%2FJryHQcvSUaRqhHYN9TkqXTomleM%2BTHQGe2ErzOgiGw7Hb0AG6t6yXwmnbhpgq8kAxTHJWurSIVZ3K6KRHAXoYyvKSOIvkckqQxvMjd4OqXtrchiUS1rBagpcDU%2F0ihc0xG6EBhuzCiuZrABjqkAc%2BdYxzO6Rj686EI%2FPnhNZgaRAIHbISKbjQLQdgEdvHlNinBw9Yq68Z0Y2AkvJmqW90se1MYuqNHgqfzJNLajFsq0q78JEw4ZQhsLsuW%2BbHNqjOYzjjmzg2W6eFecVRCxqar5mZEnH5QznSXJWxwmrp1%2F3Q1oFTdZwnFPF4Z4MUJY1nRGnFnPQYl4XUOxVi7GUzpuct3kS88MHOr1gVxTyFId4Qb&X-Amz-Signature=cd373ba4a64ec57f10d9878326ba6fb65cf4d376b24bc5280fa49b7196970fdc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
