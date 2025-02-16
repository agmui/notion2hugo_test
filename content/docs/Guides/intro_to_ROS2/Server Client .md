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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGF66II%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCWe1aahm94FBfaioDvLgsjDt0XV7mbH9LiZWTyq1BSiQIgLgXSa2MaX5ekc913mjQBQNcHgGf6krMKEluOYjF9HGEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJ69%2FBPYtvrNDYHnvircA4aB%2FFhuwl4ORZS2kPhp5%2FFuwK%2FWlzz0qxNfDWzVKRot6ZIlr7yD9BQlrDQ%2B1%2Fa7PxslIwZPlc5w6514ybwKsylI0BMHQm6fZ75QMgq8OjYd6xfjLdyf%2FdohnH%2BQY2%2BMgwNMY2fJt1ug3yrdworDrKoZVr9P0SgiPt8M3QYCiS4SOU8zyJX4UonotpAzJj3YFuezF3ox6dHd9ERul6k9iw0V9%2F4CkF9%2Bi2bQ5BK1BHnJIo7IjY7YfJrZUOFgqnIhtY6fTgUIIbyFg8pTWFrqxl%2FarZhPo9DT%2Bot8TpCsn7ZUuQGG%2B7b1j7F8GJDbymxKOWVTeTC1Ju4%2BstqlZ3CMyuIegc4VSHb3q4BHEUFum0XJvE49g73nxt9dj0hvXDiyt0lONncgBW2fXtLUo6ZPfNkCIGz08QofPiULkLWZ%2B0t3GJJGPDX6%2Fa6GvsgvDG8Zb%2BDrO5ywqEP9salvYMKIhLeD14B5NL7dj08CWn%2B9Opu4Rjwy0nJU0x%2FIdg3BRhKzOLPihJch6HgxbpKOpCeEXk0fPLbS4vAH7dc56Z4D5B2GDoXRgLjRbEwpPrfistpWPhHp9lzYVn4hRxcEw4eoQeOKAlV6Qn40jqkhvbaFtGDkz07A2NXNUOmoyFmCMJyix70GOqUB4VUbUVGnG8UVYQv4TCmr1cTHtcO2NC%2BkuqgjInPZUMiAgkMJDCi1zQY7Mwh17tCsPOHVBA%2B7MWeeaeR5mFJs1qdhvCfzsijPy6FP0KqoBc%2FPDaz9AilfX3z6oD89uKnlR%2Fj5Ko5W%2F9PP0%2BIBAqm8%2F%2FeakRA5eYbitVAuk3o7CbF8pG9DAvTUY09SBWnO1spJfAp3qipyLJLzas%2BsaERP1QLAL7O6&X-Amz-Signature=c74e1a370fd8b8e1fcfa47e247830b1fca1c703249133c29c2154042bbf175f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGF66II%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCWe1aahm94FBfaioDvLgsjDt0XV7mbH9LiZWTyq1BSiQIgLgXSa2MaX5ekc913mjQBQNcHgGf6krMKEluOYjF9HGEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJ69%2FBPYtvrNDYHnvircA4aB%2FFhuwl4ORZS2kPhp5%2FFuwK%2FWlzz0qxNfDWzVKRot6ZIlr7yD9BQlrDQ%2B1%2Fa7PxslIwZPlc5w6514ybwKsylI0BMHQm6fZ75QMgq8OjYd6xfjLdyf%2FdohnH%2BQY2%2BMgwNMY2fJt1ug3yrdworDrKoZVr9P0SgiPt8M3QYCiS4SOU8zyJX4UonotpAzJj3YFuezF3ox6dHd9ERul6k9iw0V9%2F4CkF9%2Bi2bQ5BK1BHnJIo7IjY7YfJrZUOFgqnIhtY6fTgUIIbyFg8pTWFrqxl%2FarZhPo9DT%2Bot8TpCsn7ZUuQGG%2B7b1j7F8GJDbymxKOWVTeTC1Ju4%2BstqlZ3CMyuIegc4VSHb3q4BHEUFum0XJvE49g73nxt9dj0hvXDiyt0lONncgBW2fXtLUo6ZPfNkCIGz08QofPiULkLWZ%2B0t3GJJGPDX6%2Fa6GvsgvDG8Zb%2BDrO5ywqEP9salvYMKIhLeD14B5NL7dj08CWn%2B9Opu4Rjwy0nJU0x%2FIdg3BRhKzOLPihJch6HgxbpKOpCeEXk0fPLbS4vAH7dc56Z4D5B2GDoXRgLjRbEwpPrfistpWPhHp9lzYVn4hRxcEw4eoQeOKAlV6Qn40jqkhvbaFtGDkz07A2NXNUOmoyFmCMJyix70GOqUB4VUbUVGnG8UVYQv4TCmr1cTHtcO2NC%2BkuqgjInPZUMiAgkMJDCi1zQY7Mwh17tCsPOHVBA%2B7MWeeaeR5mFJs1qdhvCfzsijPy6FP0KqoBc%2FPDaz9AilfX3z6oD89uKnlR%2Fj5Ko5W%2F9PP0%2BIBAqm8%2F%2FeakRA5eYbitVAuk3o7CbF8pG9DAvTUY09SBWnO1spJfAp3qipyLJLzas%2BsaERP1QLAL7O6&X-Amz-Signature=1e7ec4ef883f7108487b66b24894e1d1204d58a95ddd0e01db66177b6c1f0ce9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGF66II%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCWe1aahm94FBfaioDvLgsjDt0XV7mbH9LiZWTyq1BSiQIgLgXSa2MaX5ekc913mjQBQNcHgGf6krMKEluOYjF9HGEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJ69%2FBPYtvrNDYHnvircA4aB%2FFhuwl4ORZS2kPhp5%2FFuwK%2FWlzz0qxNfDWzVKRot6ZIlr7yD9BQlrDQ%2B1%2Fa7PxslIwZPlc5w6514ybwKsylI0BMHQm6fZ75QMgq8OjYd6xfjLdyf%2FdohnH%2BQY2%2BMgwNMY2fJt1ug3yrdworDrKoZVr9P0SgiPt8M3QYCiS4SOU8zyJX4UonotpAzJj3YFuezF3ox6dHd9ERul6k9iw0V9%2F4CkF9%2Bi2bQ5BK1BHnJIo7IjY7YfJrZUOFgqnIhtY6fTgUIIbyFg8pTWFrqxl%2FarZhPo9DT%2Bot8TpCsn7ZUuQGG%2B7b1j7F8GJDbymxKOWVTeTC1Ju4%2BstqlZ3CMyuIegc4VSHb3q4BHEUFum0XJvE49g73nxt9dj0hvXDiyt0lONncgBW2fXtLUo6ZPfNkCIGz08QofPiULkLWZ%2B0t3GJJGPDX6%2Fa6GvsgvDG8Zb%2BDrO5ywqEP9salvYMKIhLeD14B5NL7dj08CWn%2B9Opu4Rjwy0nJU0x%2FIdg3BRhKzOLPihJch6HgxbpKOpCeEXk0fPLbS4vAH7dc56Z4D5B2GDoXRgLjRbEwpPrfistpWPhHp9lzYVn4hRxcEw4eoQeOKAlV6Qn40jqkhvbaFtGDkz07A2NXNUOmoyFmCMJyix70GOqUB4VUbUVGnG8UVYQv4TCmr1cTHtcO2NC%2BkuqgjInPZUMiAgkMJDCi1zQY7Mwh17tCsPOHVBA%2B7MWeeaeR5mFJs1qdhvCfzsijPy6FP0KqoBc%2FPDaz9AilfX3z6oD89uKnlR%2Fj5Ko5W%2F9PP0%2BIBAqm8%2F%2FeakRA5eYbitVAuk3o7CbF8pG9DAvTUY09SBWnO1spJfAp3qipyLJLzas%2BsaERP1QLAL7O6&X-Amz-Signature=f90c2ab746970dbaec7f308ff780cd09be75573a9235c5169a07c36c8549f327&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGF66II%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCWe1aahm94FBfaioDvLgsjDt0XV7mbH9LiZWTyq1BSiQIgLgXSa2MaX5ekc913mjQBQNcHgGf6krMKEluOYjF9HGEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJ69%2FBPYtvrNDYHnvircA4aB%2FFhuwl4ORZS2kPhp5%2FFuwK%2FWlzz0qxNfDWzVKRot6ZIlr7yD9BQlrDQ%2B1%2Fa7PxslIwZPlc5w6514ybwKsylI0BMHQm6fZ75QMgq8OjYd6xfjLdyf%2FdohnH%2BQY2%2BMgwNMY2fJt1ug3yrdworDrKoZVr9P0SgiPt8M3QYCiS4SOU8zyJX4UonotpAzJj3YFuezF3ox6dHd9ERul6k9iw0V9%2F4CkF9%2Bi2bQ5BK1BHnJIo7IjY7YfJrZUOFgqnIhtY6fTgUIIbyFg8pTWFrqxl%2FarZhPo9DT%2Bot8TpCsn7ZUuQGG%2B7b1j7F8GJDbymxKOWVTeTC1Ju4%2BstqlZ3CMyuIegc4VSHb3q4BHEUFum0XJvE49g73nxt9dj0hvXDiyt0lONncgBW2fXtLUo6ZPfNkCIGz08QofPiULkLWZ%2B0t3GJJGPDX6%2Fa6GvsgvDG8Zb%2BDrO5ywqEP9salvYMKIhLeD14B5NL7dj08CWn%2B9Opu4Rjwy0nJU0x%2FIdg3BRhKzOLPihJch6HgxbpKOpCeEXk0fPLbS4vAH7dc56Z4D5B2GDoXRgLjRbEwpPrfistpWPhHp9lzYVn4hRxcEw4eoQeOKAlV6Qn40jqkhvbaFtGDkz07A2NXNUOmoyFmCMJyix70GOqUB4VUbUVGnG8UVYQv4TCmr1cTHtcO2NC%2BkuqgjInPZUMiAgkMJDCi1zQY7Mwh17tCsPOHVBA%2B7MWeeaeR5mFJs1qdhvCfzsijPy6FP0KqoBc%2FPDaz9AilfX3z6oD89uKnlR%2Fj5Ko5W%2F9PP0%2BIBAqm8%2F%2FeakRA5eYbitVAuk3o7CbF8pG9DAvTUY09SBWnO1spJfAp3qipyLJLzas%2BsaERP1QLAL7O6&X-Amz-Signature=fba7ca5caa56fef6ab197981d6520db37541565358ad6e295d35466a62449343&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGF66II%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCWe1aahm94FBfaioDvLgsjDt0XV7mbH9LiZWTyq1BSiQIgLgXSa2MaX5ekc913mjQBQNcHgGf6krMKEluOYjF9HGEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJ69%2FBPYtvrNDYHnvircA4aB%2FFhuwl4ORZS2kPhp5%2FFuwK%2FWlzz0qxNfDWzVKRot6ZIlr7yD9BQlrDQ%2B1%2Fa7PxslIwZPlc5w6514ybwKsylI0BMHQm6fZ75QMgq8OjYd6xfjLdyf%2FdohnH%2BQY2%2BMgwNMY2fJt1ug3yrdworDrKoZVr9P0SgiPt8M3QYCiS4SOU8zyJX4UonotpAzJj3YFuezF3ox6dHd9ERul6k9iw0V9%2F4CkF9%2Bi2bQ5BK1BHnJIo7IjY7YfJrZUOFgqnIhtY6fTgUIIbyFg8pTWFrqxl%2FarZhPo9DT%2Bot8TpCsn7ZUuQGG%2B7b1j7F8GJDbymxKOWVTeTC1Ju4%2BstqlZ3CMyuIegc4VSHb3q4BHEUFum0XJvE49g73nxt9dj0hvXDiyt0lONncgBW2fXtLUo6ZPfNkCIGz08QofPiULkLWZ%2B0t3GJJGPDX6%2Fa6GvsgvDG8Zb%2BDrO5ywqEP9salvYMKIhLeD14B5NL7dj08CWn%2B9Opu4Rjwy0nJU0x%2FIdg3BRhKzOLPihJch6HgxbpKOpCeEXk0fPLbS4vAH7dc56Z4D5B2GDoXRgLjRbEwpPrfistpWPhHp9lzYVn4hRxcEw4eoQeOKAlV6Qn40jqkhvbaFtGDkz07A2NXNUOmoyFmCMJyix70GOqUB4VUbUVGnG8UVYQv4TCmr1cTHtcO2NC%2BkuqgjInPZUMiAgkMJDCi1zQY7Mwh17tCsPOHVBA%2B7MWeeaeR5mFJs1qdhvCfzsijPy6FP0KqoBc%2FPDaz9AilfX3z6oD89uKnlR%2Fj5Ko5W%2F9PP0%2BIBAqm8%2F%2FeakRA5eYbitVAuk3o7CbF8pG9DAvTUY09SBWnO1spJfAp3qipyLJLzas%2BsaERP1QLAL7O6&X-Amz-Signature=13c359cd320ddd2759c1f9595977db40353cbfb99f438ff6bbad5fa0e9bd2c1f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
