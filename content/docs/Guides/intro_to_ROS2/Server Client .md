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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYL4VILK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI4%2B8Hv9FkvSkRHns%2B9ln3nJREiqBUW%2BYyE5CZMNQkYQIgEsdFxZmJcBC9Rimy5X9sWBbkulmm6FnPe5JAb0tWww8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDA0q7Jf0nY1HniYXuSrcA9NeA0%2F5Anl2FKC5ZjTe24hZ43cSm0HZ%2BKYS8OHKl0fI6qNzv8gUhLl2RQBW3ZC2vu0o4AzBKQCkeVyRAXFLoCbFrphO7eST4Lbo2cANWwoweBXQELhTtoca4HU5TpHhBsM%2BeNRJlAFLIgkbAsu2wt9hhU7GAd0I3wdtqpUVqNk%2BgQqEbbxvy%2F3Jz30ozE7mSceXzA0S199qkXRUTmJqrgFJj0M3FBaalyG02NV6QHz%2FEu5SwNk28AdsLLnSM%2FtB0eccRNWDGset4I%2FPFmJJK14XXxcuVV6tfPDutmmlQlSahueHyFxYCUTP3Bad1o%2FjlGpLHJhAsS%2FX9YeOTYJIlbo5So0%2B5j9mdHrLE2FHWQMWCAEiwoeh%2BbHJ3DvHDxQKCnAkI9YBqoKm%2BVqfxgmvFIIngkUwhdKhOpChre%2FnN221zXtSFnkOoQ0Frxl%2Blq1W0wSnny%2Fkk0Igr362gdpQUoV0%2B3EA7UYzwgQnIC2KFGxQh2elD%2Ba5J5iBJO8%2B%2FLISoSaaHUbswqkwBE3ouiX2tq1t85MyH5Cm2QLTi%2FBRQVFm6Y8RDbB%2BxMbe%2BSp7QKZPToLUkD8d%2FKXTHl2easzGvR8gWNnu3%2BfUb%2Bc6L%2Fh8Y7WugWsdTP0TJ2kqfE0fMPmV4sAGOqUBkbwpjB52kKWVkEhNNvrFynnzezlktbmtENwvSMvyiykwlPDe2xGA53AE4%2Fsb%2B34F3z4AxdHXGMH2jtoa0SYZ4b%2BBjyBhk8W24LpRhVZd9KJX6lX4ncwT%2BHyCQJLRW85BAesKnSOgm%2BFwLo8vlexjfJ5qQu4AA9HPsed4iOjRDfZNKYrW0H36eYvDw2tER2SAtvplM8A3Qk9RhABUlRwjLs8P7Gpa&X-Amz-Signature=dd15ccbbac4a70592c786bd49cdf2cd6b86f7729e7f51bfd55a10f179c8bf482&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYL4VILK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI4%2B8Hv9FkvSkRHns%2B9ln3nJREiqBUW%2BYyE5CZMNQkYQIgEsdFxZmJcBC9Rimy5X9sWBbkulmm6FnPe5JAb0tWww8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDA0q7Jf0nY1HniYXuSrcA9NeA0%2F5Anl2FKC5ZjTe24hZ43cSm0HZ%2BKYS8OHKl0fI6qNzv8gUhLl2RQBW3ZC2vu0o4AzBKQCkeVyRAXFLoCbFrphO7eST4Lbo2cANWwoweBXQELhTtoca4HU5TpHhBsM%2BeNRJlAFLIgkbAsu2wt9hhU7GAd0I3wdtqpUVqNk%2BgQqEbbxvy%2F3Jz30ozE7mSceXzA0S199qkXRUTmJqrgFJj0M3FBaalyG02NV6QHz%2FEu5SwNk28AdsLLnSM%2FtB0eccRNWDGset4I%2FPFmJJK14XXxcuVV6tfPDutmmlQlSahueHyFxYCUTP3Bad1o%2FjlGpLHJhAsS%2FX9YeOTYJIlbo5So0%2B5j9mdHrLE2FHWQMWCAEiwoeh%2BbHJ3DvHDxQKCnAkI9YBqoKm%2BVqfxgmvFIIngkUwhdKhOpChre%2FnN221zXtSFnkOoQ0Frxl%2Blq1W0wSnny%2Fkk0Igr362gdpQUoV0%2B3EA7UYzwgQnIC2KFGxQh2elD%2Ba5J5iBJO8%2B%2FLISoSaaHUbswqkwBE3ouiX2tq1t85MyH5Cm2QLTi%2FBRQVFm6Y8RDbB%2BxMbe%2BSp7QKZPToLUkD8d%2FKXTHl2easzGvR8gWNnu3%2BfUb%2Bc6L%2Fh8Y7WugWsdTP0TJ2kqfE0fMPmV4sAGOqUBkbwpjB52kKWVkEhNNvrFynnzezlktbmtENwvSMvyiykwlPDe2xGA53AE4%2Fsb%2B34F3z4AxdHXGMH2jtoa0SYZ4b%2BBjyBhk8W24LpRhVZd9KJX6lX4ncwT%2BHyCQJLRW85BAesKnSOgm%2BFwLo8vlexjfJ5qQu4AA9HPsed4iOjRDfZNKYrW0H36eYvDw2tER2SAtvplM8A3Qk9RhABUlRwjLs8P7Gpa&X-Amz-Signature=8688b4a37f5523260aa3f793b47ba963017b33ae663066aedcf105bbe75e9f03&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYL4VILK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI4%2B8Hv9FkvSkRHns%2B9ln3nJREiqBUW%2BYyE5CZMNQkYQIgEsdFxZmJcBC9Rimy5X9sWBbkulmm6FnPe5JAb0tWww8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDA0q7Jf0nY1HniYXuSrcA9NeA0%2F5Anl2FKC5ZjTe24hZ43cSm0HZ%2BKYS8OHKl0fI6qNzv8gUhLl2RQBW3ZC2vu0o4AzBKQCkeVyRAXFLoCbFrphO7eST4Lbo2cANWwoweBXQELhTtoca4HU5TpHhBsM%2BeNRJlAFLIgkbAsu2wt9hhU7GAd0I3wdtqpUVqNk%2BgQqEbbxvy%2F3Jz30ozE7mSceXzA0S199qkXRUTmJqrgFJj0M3FBaalyG02NV6QHz%2FEu5SwNk28AdsLLnSM%2FtB0eccRNWDGset4I%2FPFmJJK14XXxcuVV6tfPDutmmlQlSahueHyFxYCUTP3Bad1o%2FjlGpLHJhAsS%2FX9YeOTYJIlbo5So0%2B5j9mdHrLE2FHWQMWCAEiwoeh%2BbHJ3DvHDxQKCnAkI9YBqoKm%2BVqfxgmvFIIngkUwhdKhOpChre%2FnN221zXtSFnkOoQ0Frxl%2Blq1W0wSnny%2Fkk0Igr362gdpQUoV0%2B3EA7UYzwgQnIC2KFGxQh2elD%2Ba5J5iBJO8%2B%2FLISoSaaHUbswqkwBE3ouiX2tq1t85MyH5Cm2QLTi%2FBRQVFm6Y8RDbB%2BxMbe%2BSp7QKZPToLUkD8d%2FKXTHl2easzGvR8gWNnu3%2BfUb%2Bc6L%2Fh8Y7WugWsdTP0TJ2kqfE0fMPmV4sAGOqUBkbwpjB52kKWVkEhNNvrFynnzezlktbmtENwvSMvyiykwlPDe2xGA53AE4%2Fsb%2B34F3z4AxdHXGMH2jtoa0SYZ4b%2BBjyBhk8W24LpRhVZd9KJX6lX4ncwT%2BHyCQJLRW85BAesKnSOgm%2BFwLo8vlexjfJ5qQu4AA9HPsed4iOjRDfZNKYrW0H36eYvDw2tER2SAtvplM8A3Qk9RhABUlRwjLs8P7Gpa&X-Amz-Signature=935bc712a03c4c6d0ece6ce1327e100df8b0e9a2a09bbec544785f3e6d40e252&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYL4VILK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI4%2B8Hv9FkvSkRHns%2B9ln3nJREiqBUW%2BYyE5CZMNQkYQIgEsdFxZmJcBC9Rimy5X9sWBbkulmm6FnPe5JAb0tWww8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDA0q7Jf0nY1HniYXuSrcA9NeA0%2F5Anl2FKC5ZjTe24hZ43cSm0HZ%2BKYS8OHKl0fI6qNzv8gUhLl2RQBW3ZC2vu0o4AzBKQCkeVyRAXFLoCbFrphO7eST4Lbo2cANWwoweBXQELhTtoca4HU5TpHhBsM%2BeNRJlAFLIgkbAsu2wt9hhU7GAd0I3wdtqpUVqNk%2BgQqEbbxvy%2F3Jz30ozE7mSceXzA0S199qkXRUTmJqrgFJj0M3FBaalyG02NV6QHz%2FEu5SwNk28AdsLLnSM%2FtB0eccRNWDGset4I%2FPFmJJK14XXxcuVV6tfPDutmmlQlSahueHyFxYCUTP3Bad1o%2FjlGpLHJhAsS%2FX9YeOTYJIlbo5So0%2B5j9mdHrLE2FHWQMWCAEiwoeh%2BbHJ3DvHDxQKCnAkI9YBqoKm%2BVqfxgmvFIIngkUwhdKhOpChre%2FnN221zXtSFnkOoQ0Frxl%2Blq1W0wSnny%2Fkk0Igr362gdpQUoV0%2B3EA7UYzwgQnIC2KFGxQh2elD%2Ba5J5iBJO8%2B%2FLISoSaaHUbswqkwBE3ouiX2tq1t85MyH5Cm2QLTi%2FBRQVFm6Y8RDbB%2BxMbe%2BSp7QKZPToLUkD8d%2FKXTHl2easzGvR8gWNnu3%2BfUb%2Bc6L%2Fh8Y7WugWsdTP0TJ2kqfE0fMPmV4sAGOqUBkbwpjB52kKWVkEhNNvrFynnzezlktbmtENwvSMvyiykwlPDe2xGA53AE4%2Fsb%2B34F3z4AxdHXGMH2jtoa0SYZ4b%2BBjyBhk8W24LpRhVZd9KJX6lX4ncwT%2BHyCQJLRW85BAesKnSOgm%2BFwLo8vlexjfJ5qQu4AA9HPsed4iOjRDfZNKYrW0H36eYvDw2tER2SAtvplM8A3Qk9RhABUlRwjLs8P7Gpa&X-Amz-Signature=20f90a9c114d0b05790575a77eb5b6cab249c06edbb59ee820a9f441ecac4a80&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYL4VILK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI4%2B8Hv9FkvSkRHns%2B9ln3nJREiqBUW%2BYyE5CZMNQkYQIgEsdFxZmJcBC9Rimy5X9sWBbkulmm6FnPe5JAb0tWww8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDA0q7Jf0nY1HniYXuSrcA9NeA0%2F5Anl2FKC5ZjTe24hZ43cSm0HZ%2BKYS8OHKl0fI6qNzv8gUhLl2RQBW3ZC2vu0o4AzBKQCkeVyRAXFLoCbFrphO7eST4Lbo2cANWwoweBXQELhTtoca4HU5TpHhBsM%2BeNRJlAFLIgkbAsu2wt9hhU7GAd0I3wdtqpUVqNk%2BgQqEbbxvy%2F3Jz30ozE7mSceXzA0S199qkXRUTmJqrgFJj0M3FBaalyG02NV6QHz%2FEu5SwNk28AdsLLnSM%2FtB0eccRNWDGset4I%2FPFmJJK14XXxcuVV6tfPDutmmlQlSahueHyFxYCUTP3Bad1o%2FjlGpLHJhAsS%2FX9YeOTYJIlbo5So0%2B5j9mdHrLE2FHWQMWCAEiwoeh%2BbHJ3DvHDxQKCnAkI9YBqoKm%2BVqfxgmvFIIngkUwhdKhOpChre%2FnN221zXtSFnkOoQ0Frxl%2Blq1W0wSnny%2Fkk0Igr362gdpQUoV0%2B3EA7UYzwgQnIC2KFGxQh2elD%2Ba5J5iBJO8%2B%2FLISoSaaHUbswqkwBE3ouiX2tq1t85MyH5Cm2QLTi%2FBRQVFm6Y8RDbB%2BxMbe%2BSp7QKZPToLUkD8d%2FKXTHl2easzGvR8gWNnu3%2BfUb%2Bc6L%2Fh8Y7WugWsdTP0TJ2kqfE0fMPmV4sAGOqUBkbwpjB52kKWVkEhNNvrFynnzezlktbmtENwvSMvyiykwlPDe2xGA53AE4%2Fsb%2B34F3z4AxdHXGMH2jtoa0SYZ4b%2BBjyBhk8W24LpRhVZd9KJX6lX4ncwT%2BHyCQJLRW85BAesKnSOgm%2BFwLo8vlexjfJ5qQu4AA9HPsed4iOjRDfZNKYrW0H36eYvDw2tER2SAtvplM8A3Qk9RhABUlRwjLs8P7Gpa&X-Amz-Signature=56de197a95820b1796ae5fe7ad0c4c1a70a30e14d6555747ba1def2f3fe5b415&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
