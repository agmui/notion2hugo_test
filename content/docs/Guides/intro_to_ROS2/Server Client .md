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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJNUWMNR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDwSjmwAIR1zXfA64cmzVIZ%2Fj0x1c%2BFvUcvfli3Ul1VDgIhALlds5aV%2FSgKzkr%2BtKiwxhgtz1EBTNyfeocUmyKD0WqeKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7%2F5iMFIOPX3ob9qYq3AM%2B6NiOaI5cwx%2BRjiiOv%2BGzJM29%2BUZiwVjXPmdVCoDEcebAlG%2Bm7%2FAsUJfMlGiOo2YySfdkz%2BM7EvZr2oAcRy9ltAV42P%2Bq%2BJ5dyCqLqQk3Gx805KXiRfk%2Fd7YA9ruCjYh4CHnuNAdXCUeRSXQQc1AWK1M8CZ3Jq1N%2FecYJCEPRjosTIN%2BL3K16D7rkiM0Q2LasIJc%2BX%2FPDGS7Mv1dOuT7Mmzvz7QXi%2FetytkK6YrRQcUSJdcO0LUt02AZyAOCQvFfr3dtbdhGxGg%2FKGo1V4UXjFRca1wr3iF7ZYwt78tZs3r2GsbL0vv9bKa1yWlMlJ21eYh%2FK7dhq3CmLQqPVEJz7TFRZVQ6CxG%2Fw5mgfY7DLXOT3yfkzO0nNknl%2Fm8bu0g9weJUcuw%2BrYe3l7iuuz4Udq9IHN2qDXYmXp3FTBDde%2F691LVn4fE1p52HG3f2Cjmg%2BvZKySPAdZHgb5zg7U0nIiyR%2FagZz5E9bXjBf9z53EvkjORN97yhxLmvIO0njJNr6O0kpl0yb1sRsJQJiVFhYekF2xsnX%2FSCUCknH9cnRRTJ2EkpFXY9oLTsfSQ1R%2FnIDstd9oh%2BSkdO0SS%2BB2JCAaW7pNj7bIhJ4A25WA2xXCyL0QDeu7d3ULmanzjCWnta9BjqkASsawE%2Fd%2BGqE%2BOZSaO7idMeJpHx6EqC7tSYEu%2BcrwU%2FTxFn5fcyFqnzETHAplOQG6piujcmq2IVfwatkb6yrQyGD1SIAxOYBo6I3HP7SexWv2QFNivPu%2B4GJIhsYzNU4K7Qc191L5Gv%2B57ftH%2Ftpl1FyysGf%2BW%2FuZd3JPJdzuUNeFIkHyHVBkb7NpMrazGfztqoKMUHRONNtOW%2B5JAyw4ZWotlAs&X-Amz-Signature=1803a095a510a793e74793a697451000da10b59ed184b9b4fe19b83307d0c9e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJNUWMNR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDwSjmwAIR1zXfA64cmzVIZ%2Fj0x1c%2BFvUcvfli3Ul1VDgIhALlds5aV%2FSgKzkr%2BtKiwxhgtz1EBTNyfeocUmyKD0WqeKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7%2F5iMFIOPX3ob9qYq3AM%2B6NiOaI5cwx%2BRjiiOv%2BGzJM29%2BUZiwVjXPmdVCoDEcebAlG%2Bm7%2FAsUJfMlGiOo2YySfdkz%2BM7EvZr2oAcRy9ltAV42P%2Bq%2BJ5dyCqLqQk3Gx805KXiRfk%2Fd7YA9ruCjYh4CHnuNAdXCUeRSXQQc1AWK1M8CZ3Jq1N%2FecYJCEPRjosTIN%2BL3K16D7rkiM0Q2LasIJc%2BX%2FPDGS7Mv1dOuT7Mmzvz7QXi%2FetytkK6YrRQcUSJdcO0LUt02AZyAOCQvFfr3dtbdhGxGg%2FKGo1V4UXjFRca1wr3iF7ZYwt78tZs3r2GsbL0vv9bKa1yWlMlJ21eYh%2FK7dhq3CmLQqPVEJz7TFRZVQ6CxG%2Fw5mgfY7DLXOT3yfkzO0nNknl%2Fm8bu0g9weJUcuw%2BrYe3l7iuuz4Udq9IHN2qDXYmXp3FTBDde%2F691LVn4fE1p52HG3f2Cjmg%2BvZKySPAdZHgb5zg7U0nIiyR%2FagZz5E9bXjBf9z53EvkjORN97yhxLmvIO0njJNr6O0kpl0yb1sRsJQJiVFhYekF2xsnX%2FSCUCknH9cnRRTJ2EkpFXY9oLTsfSQ1R%2FnIDstd9oh%2BSkdO0SS%2BB2JCAaW7pNj7bIhJ4A25WA2xXCyL0QDeu7d3ULmanzjCWnta9BjqkASsawE%2Fd%2BGqE%2BOZSaO7idMeJpHx6EqC7tSYEu%2BcrwU%2FTxFn5fcyFqnzETHAplOQG6piujcmq2IVfwatkb6yrQyGD1SIAxOYBo6I3HP7SexWv2QFNivPu%2B4GJIhsYzNU4K7Qc191L5Gv%2B57ftH%2Ftpl1FyysGf%2BW%2FuZd3JPJdzuUNeFIkHyHVBkb7NpMrazGfztqoKMUHRONNtOW%2B5JAyw4ZWotlAs&X-Amz-Signature=ec6f570e0e983a76ae1cd2333670fb83d649cf3f9cc491df1b27d1a5773a8c28&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJNUWMNR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDwSjmwAIR1zXfA64cmzVIZ%2Fj0x1c%2BFvUcvfli3Ul1VDgIhALlds5aV%2FSgKzkr%2BtKiwxhgtz1EBTNyfeocUmyKD0WqeKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7%2F5iMFIOPX3ob9qYq3AM%2B6NiOaI5cwx%2BRjiiOv%2BGzJM29%2BUZiwVjXPmdVCoDEcebAlG%2Bm7%2FAsUJfMlGiOo2YySfdkz%2BM7EvZr2oAcRy9ltAV42P%2Bq%2BJ5dyCqLqQk3Gx805KXiRfk%2Fd7YA9ruCjYh4CHnuNAdXCUeRSXQQc1AWK1M8CZ3Jq1N%2FecYJCEPRjosTIN%2BL3K16D7rkiM0Q2LasIJc%2BX%2FPDGS7Mv1dOuT7Mmzvz7QXi%2FetytkK6YrRQcUSJdcO0LUt02AZyAOCQvFfr3dtbdhGxGg%2FKGo1V4UXjFRca1wr3iF7ZYwt78tZs3r2GsbL0vv9bKa1yWlMlJ21eYh%2FK7dhq3CmLQqPVEJz7TFRZVQ6CxG%2Fw5mgfY7DLXOT3yfkzO0nNknl%2Fm8bu0g9weJUcuw%2BrYe3l7iuuz4Udq9IHN2qDXYmXp3FTBDde%2F691LVn4fE1p52HG3f2Cjmg%2BvZKySPAdZHgb5zg7U0nIiyR%2FagZz5E9bXjBf9z53EvkjORN97yhxLmvIO0njJNr6O0kpl0yb1sRsJQJiVFhYekF2xsnX%2FSCUCknH9cnRRTJ2EkpFXY9oLTsfSQ1R%2FnIDstd9oh%2BSkdO0SS%2BB2JCAaW7pNj7bIhJ4A25WA2xXCyL0QDeu7d3ULmanzjCWnta9BjqkASsawE%2Fd%2BGqE%2BOZSaO7idMeJpHx6EqC7tSYEu%2BcrwU%2FTxFn5fcyFqnzETHAplOQG6piujcmq2IVfwatkb6yrQyGD1SIAxOYBo6I3HP7SexWv2QFNivPu%2B4GJIhsYzNU4K7Qc191L5Gv%2B57ftH%2Ftpl1FyysGf%2BW%2FuZd3JPJdzuUNeFIkHyHVBkb7NpMrazGfztqoKMUHRONNtOW%2B5JAyw4ZWotlAs&X-Amz-Signature=57bfdea64a9b9ab1e6f6fc6642b81118c62f8fbc06c9a8be9ff5c789a4ea0f4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJNUWMNR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDwSjmwAIR1zXfA64cmzVIZ%2Fj0x1c%2BFvUcvfli3Ul1VDgIhALlds5aV%2FSgKzkr%2BtKiwxhgtz1EBTNyfeocUmyKD0WqeKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7%2F5iMFIOPX3ob9qYq3AM%2B6NiOaI5cwx%2BRjiiOv%2BGzJM29%2BUZiwVjXPmdVCoDEcebAlG%2Bm7%2FAsUJfMlGiOo2YySfdkz%2BM7EvZr2oAcRy9ltAV42P%2Bq%2BJ5dyCqLqQk3Gx805KXiRfk%2Fd7YA9ruCjYh4CHnuNAdXCUeRSXQQc1AWK1M8CZ3Jq1N%2FecYJCEPRjosTIN%2BL3K16D7rkiM0Q2LasIJc%2BX%2FPDGS7Mv1dOuT7Mmzvz7QXi%2FetytkK6YrRQcUSJdcO0LUt02AZyAOCQvFfr3dtbdhGxGg%2FKGo1V4UXjFRca1wr3iF7ZYwt78tZs3r2GsbL0vv9bKa1yWlMlJ21eYh%2FK7dhq3CmLQqPVEJz7TFRZVQ6CxG%2Fw5mgfY7DLXOT3yfkzO0nNknl%2Fm8bu0g9weJUcuw%2BrYe3l7iuuz4Udq9IHN2qDXYmXp3FTBDde%2F691LVn4fE1p52HG3f2Cjmg%2BvZKySPAdZHgb5zg7U0nIiyR%2FagZz5E9bXjBf9z53EvkjORN97yhxLmvIO0njJNr6O0kpl0yb1sRsJQJiVFhYekF2xsnX%2FSCUCknH9cnRRTJ2EkpFXY9oLTsfSQ1R%2FnIDstd9oh%2BSkdO0SS%2BB2JCAaW7pNj7bIhJ4A25WA2xXCyL0QDeu7d3ULmanzjCWnta9BjqkASsawE%2Fd%2BGqE%2BOZSaO7idMeJpHx6EqC7tSYEu%2BcrwU%2FTxFn5fcyFqnzETHAplOQG6piujcmq2IVfwatkb6yrQyGD1SIAxOYBo6I3HP7SexWv2QFNivPu%2B4GJIhsYzNU4K7Qc191L5Gv%2B57ftH%2Ftpl1FyysGf%2BW%2FuZd3JPJdzuUNeFIkHyHVBkb7NpMrazGfztqoKMUHRONNtOW%2B5JAyw4ZWotlAs&X-Amz-Signature=7df00bf839fafc7612eff6d88ddffb5e8d9b69e0835bd9d311449fa3741f55b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJNUWMNR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDwSjmwAIR1zXfA64cmzVIZ%2Fj0x1c%2BFvUcvfli3Ul1VDgIhALlds5aV%2FSgKzkr%2BtKiwxhgtz1EBTNyfeocUmyKD0WqeKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7%2F5iMFIOPX3ob9qYq3AM%2B6NiOaI5cwx%2BRjiiOv%2BGzJM29%2BUZiwVjXPmdVCoDEcebAlG%2Bm7%2FAsUJfMlGiOo2YySfdkz%2BM7EvZr2oAcRy9ltAV42P%2Bq%2BJ5dyCqLqQk3Gx805KXiRfk%2Fd7YA9ruCjYh4CHnuNAdXCUeRSXQQc1AWK1M8CZ3Jq1N%2FecYJCEPRjosTIN%2BL3K16D7rkiM0Q2LasIJc%2BX%2FPDGS7Mv1dOuT7Mmzvz7QXi%2FetytkK6YrRQcUSJdcO0LUt02AZyAOCQvFfr3dtbdhGxGg%2FKGo1V4UXjFRca1wr3iF7ZYwt78tZs3r2GsbL0vv9bKa1yWlMlJ21eYh%2FK7dhq3CmLQqPVEJz7TFRZVQ6CxG%2Fw5mgfY7DLXOT3yfkzO0nNknl%2Fm8bu0g9weJUcuw%2BrYe3l7iuuz4Udq9IHN2qDXYmXp3FTBDde%2F691LVn4fE1p52HG3f2Cjmg%2BvZKySPAdZHgb5zg7U0nIiyR%2FagZz5E9bXjBf9z53EvkjORN97yhxLmvIO0njJNr6O0kpl0yb1sRsJQJiVFhYekF2xsnX%2FSCUCknH9cnRRTJ2EkpFXY9oLTsfSQ1R%2FnIDstd9oh%2BSkdO0SS%2BB2JCAaW7pNj7bIhJ4A25WA2xXCyL0QDeu7d3ULmanzjCWnta9BjqkASsawE%2Fd%2BGqE%2BOZSaO7idMeJpHx6EqC7tSYEu%2BcrwU%2FTxFn5fcyFqnzETHAplOQG6piujcmq2IVfwatkb6yrQyGD1SIAxOYBo6I3HP7SexWv2QFNivPu%2B4GJIhsYzNU4K7Qc191L5Gv%2B57ftH%2Ftpl1FyysGf%2BW%2FuZd3JPJdzuUNeFIkHyHVBkb7NpMrazGfztqoKMUHRONNtOW%2B5JAyw4ZWotlAs&X-Amz-Signature=38b3d601990387cacbb8974e7b7342e2889a348003a51d4db6159a25c8e2be1c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
