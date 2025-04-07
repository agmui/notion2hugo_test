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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFSGMPLU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMNtqctVxSJDxr4lnosylA1mXDTounpg6QQBHAJ8xbOAiEAkd%2BX%2F%2FZZZ5cslgwtsT9lNA7sWBVJiYEE0vXX766S0WUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJV1dlJDcjCD%2Bvp80ircA5KyRIncTqEURZ82deVEPtWleqLRbLnbcM9kG2iofG8NcdmE%2FJpqTq6uGILVgirvCyRRuardnq%2FxXP%2B4eZjqkyi0WUXRGeKRTEoY%2B5gPWY89MTDX4l1lZXGGwEsK4B9ZbTLW3TiwYH9J%2BYUd56E2rUsGwwxyoIebsO6%2FnC%2BzR%2B%2BBud835giOfHzhSA9KQ0F5Zrznl0HCeyrl4dg7zsLTZ5W9XL35dpSqWr1vB3fhgAzqPtKQ%2BEA3gNshfukEt1Sr2D27xQM%2FZwz845LvKHxUmNjKaZYWOjmRLBtar95PiQWU84dzLawd7f5EZ1jlkQVGwbwXpqTNVosgjjh9X4i6lrCKIBv2V72Vr1kTJaNAJuDomtZ%2FYzOgdI%2BwvSVCQAVdsIIz2Sf4VVkYhpc3Xr7UeumYcdw1vo4nY4j%2B9T3zzyAHRBbsLRTvCZU9chfWsRj72VEY5PC0jKd3XMKNsMNUKc4xjnBNOctuD3%2Fh2dTAD4t%2BZQsyoqx3S42r%2BD%2BS93mVoeEsGsfhluDD6XyBNVaUfAgorP0wQ4W%2FM5atrhCdfX9MwlQ8JnFi701ZjBdO257NepznWL4JK0h%2FSfCF7mYXRGbTOn2mnHOnB9C7IJOzfD6lATrwUcSjGOT0YlE%2BMKek0L8GOqUB1VF20v4BmNztuCsibXkB%2Fobj9pk%2BO6OW4D%2BW4G%2Bg9Z8ZdIVJrVl%2FcgpHhBjECSYAnMOwLDYQ6yQvnfQjUf4aJcBsp4p9KnGc6CS1SFjTDc4eJ7KtWLadOOh5drbQMKXv%2FHkWBmkbhqCEA8w9I8tr%2Fk2qLevPx8cPWuFyoaOtZ41Ka7EDX6DKdJ55dVkxzIdr%2FuxxcL86BmAwinDQt%2B5tNgXzTdP7&X-Amz-Signature=975a50720ad9340637f6b51e0699d0321ec62148d0a6ca0f1ea009c20a6b211f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFSGMPLU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMNtqctVxSJDxr4lnosylA1mXDTounpg6QQBHAJ8xbOAiEAkd%2BX%2F%2FZZZ5cslgwtsT9lNA7sWBVJiYEE0vXX766S0WUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJV1dlJDcjCD%2Bvp80ircA5KyRIncTqEURZ82deVEPtWleqLRbLnbcM9kG2iofG8NcdmE%2FJpqTq6uGILVgirvCyRRuardnq%2FxXP%2B4eZjqkyi0WUXRGeKRTEoY%2B5gPWY89MTDX4l1lZXGGwEsK4B9ZbTLW3TiwYH9J%2BYUd56E2rUsGwwxyoIebsO6%2FnC%2BzR%2B%2BBud835giOfHzhSA9KQ0F5Zrznl0HCeyrl4dg7zsLTZ5W9XL35dpSqWr1vB3fhgAzqPtKQ%2BEA3gNshfukEt1Sr2D27xQM%2FZwz845LvKHxUmNjKaZYWOjmRLBtar95PiQWU84dzLawd7f5EZ1jlkQVGwbwXpqTNVosgjjh9X4i6lrCKIBv2V72Vr1kTJaNAJuDomtZ%2FYzOgdI%2BwvSVCQAVdsIIz2Sf4VVkYhpc3Xr7UeumYcdw1vo4nY4j%2B9T3zzyAHRBbsLRTvCZU9chfWsRj72VEY5PC0jKd3XMKNsMNUKc4xjnBNOctuD3%2Fh2dTAD4t%2BZQsyoqx3S42r%2BD%2BS93mVoeEsGsfhluDD6XyBNVaUfAgorP0wQ4W%2FM5atrhCdfX9MwlQ8JnFi701ZjBdO257NepznWL4JK0h%2FSfCF7mYXRGbTOn2mnHOnB9C7IJOzfD6lATrwUcSjGOT0YlE%2BMKek0L8GOqUB1VF20v4BmNztuCsibXkB%2Fobj9pk%2BO6OW4D%2BW4G%2Bg9Z8ZdIVJrVl%2FcgpHhBjECSYAnMOwLDYQ6yQvnfQjUf4aJcBsp4p9KnGc6CS1SFjTDc4eJ7KtWLadOOh5drbQMKXv%2FHkWBmkbhqCEA8w9I8tr%2Fk2qLevPx8cPWuFyoaOtZ41Ka7EDX6DKdJ55dVkxzIdr%2FuxxcL86BmAwinDQt%2B5tNgXzTdP7&X-Amz-Signature=4a75254ef8032fb6decde9e1dc2863e22b60419aca0d1b6eb86025a7b0ad858d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFSGMPLU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMNtqctVxSJDxr4lnosylA1mXDTounpg6QQBHAJ8xbOAiEAkd%2BX%2F%2FZZZ5cslgwtsT9lNA7sWBVJiYEE0vXX766S0WUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJV1dlJDcjCD%2Bvp80ircA5KyRIncTqEURZ82deVEPtWleqLRbLnbcM9kG2iofG8NcdmE%2FJpqTq6uGILVgirvCyRRuardnq%2FxXP%2B4eZjqkyi0WUXRGeKRTEoY%2B5gPWY89MTDX4l1lZXGGwEsK4B9ZbTLW3TiwYH9J%2BYUd56E2rUsGwwxyoIebsO6%2FnC%2BzR%2B%2BBud835giOfHzhSA9KQ0F5Zrznl0HCeyrl4dg7zsLTZ5W9XL35dpSqWr1vB3fhgAzqPtKQ%2BEA3gNshfukEt1Sr2D27xQM%2FZwz845LvKHxUmNjKaZYWOjmRLBtar95PiQWU84dzLawd7f5EZ1jlkQVGwbwXpqTNVosgjjh9X4i6lrCKIBv2V72Vr1kTJaNAJuDomtZ%2FYzOgdI%2BwvSVCQAVdsIIz2Sf4VVkYhpc3Xr7UeumYcdw1vo4nY4j%2B9T3zzyAHRBbsLRTvCZU9chfWsRj72VEY5PC0jKd3XMKNsMNUKc4xjnBNOctuD3%2Fh2dTAD4t%2BZQsyoqx3S42r%2BD%2BS93mVoeEsGsfhluDD6XyBNVaUfAgorP0wQ4W%2FM5atrhCdfX9MwlQ8JnFi701ZjBdO257NepznWL4JK0h%2FSfCF7mYXRGbTOn2mnHOnB9C7IJOzfD6lATrwUcSjGOT0YlE%2BMKek0L8GOqUB1VF20v4BmNztuCsibXkB%2Fobj9pk%2BO6OW4D%2BW4G%2Bg9Z8ZdIVJrVl%2FcgpHhBjECSYAnMOwLDYQ6yQvnfQjUf4aJcBsp4p9KnGc6CS1SFjTDc4eJ7KtWLadOOh5drbQMKXv%2FHkWBmkbhqCEA8w9I8tr%2Fk2qLevPx8cPWuFyoaOtZ41Ka7EDX6DKdJ55dVkxzIdr%2FuxxcL86BmAwinDQt%2B5tNgXzTdP7&X-Amz-Signature=93c78595c01240988f3350ef7fe7a7ccc4908e080242facc4becdf0685f71462&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFSGMPLU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMNtqctVxSJDxr4lnosylA1mXDTounpg6QQBHAJ8xbOAiEAkd%2BX%2F%2FZZZ5cslgwtsT9lNA7sWBVJiYEE0vXX766S0WUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJV1dlJDcjCD%2Bvp80ircA5KyRIncTqEURZ82deVEPtWleqLRbLnbcM9kG2iofG8NcdmE%2FJpqTq6uGILVgirvCyRRuardnq%2FxXP%2B4eZjqkyi0WUXRGeKRTEoY%2B5gPWY89MTDX4l1lZXGGwEsK4B9ZbTLW3TiwYH9J%2BYUd56E2rUsGwwxyoIebsO6%2FnC%2BzR%2B%2BBud835giOfHzhSA9KQ0F5Zrznl0HCeyrl4dg7zsLTZ5W9XL35dpSqWr1vB3fhgAzqPtKQ%2BEA3gNshfukEt1Sr2D27xQM%2FZwz845LvKHxUmNjKaZYWOjmRLBtar95PiQWU84dzLawd7f5EZ1jlkQVGwbwXpqTNVosgjjh9X4i6lrCKIBv2V72Vr1kTJaNAJuDomtZ%2FYzOgdI%2BwvSVCQAVdsIIz2Sf4VVkYhpc3Xr7UeumYcdw1vo4nY4j%2B9T3zzyAHRBbsLRTvCZU9chfWsRj72VEY5PC0jKd3XMKNsMNUKc4xjnBNOctuD3%2Fh2dTAD4t%2BZQsyoqx3S42r%2BD%2BS93mVoeEsGsfhluDD6XyBNVaUfAgorP0wQ4W%2FM5atrhCdfX9MwlQ8JnFi701ZjBdO257NepznWL4JK0h%2FSfCF7mYXRGbTOn2mnHOnB9C7IJOzfD6lATrwUcSjGOT0YlE%2BMKek0L8GOqUB1VF20v4BmNztuCsibXkB%2Fobj9pk%2BO6OW4D%2BW4G%2Bg9Z8ZdIVJrVl%2FcgpHhBjECSYAnMOwLDYQ6yQvnfQjUf4aJcBsp4p9KnGc6CS1SFjTDc4eJ7KtWLadOOh5drbQMKXv%2FHkWBmkbhqCEA8w9I8tr%2Fk2qLevPx8cPWuFyoaOtZ41Ka7EDX6DKdJ55dVkxzIdr%2FuxxcL86BmAwinDQt%2B5tNgXzTdP7&X-Amz-Signature=1fb273a3e7c5cdcd92ba3ee73f40a7860419cab953de6bc4f8bc7d9fdd0bfa2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFSGMPLU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMNtqctVxSJDxr4lnosylA1mXDTounpg6QQBHAJ8xbOAiEAkd%2BX%2F%2FZZZ5cslgwtsT9lNA7sWBVJiYEE0vXX766S0WUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJV1dlJDcjCD%2Bvp80ircA5KyRIncTqEURZ82deVEPtWleqLRbLnbcM9kG2iofG8NcdmE%2FJpqTq6uGILVgirvCyRRuardnq%2FxXP%2B4eZjqkyi0WUXRGeKRTEoY%2B5gPWY89MTDX4l1lZXGGwEsK4B9ZbTLW3TiwYH9J%2BYUd56E2rUsGwwxyoIebsO6%2FnC%2BzR%2B%2BBud835giOfHzhSA9KQ0F5Zrznl0HCeyrl4dg7zsLTZ5W9XL35dpSqWr1vB3fhgAzqPtKQ%2BEA3gNshfukEt1Sr2D27xQM%2FZwz845LvKHxUmNjKaZYWOjmRLBtar95PiQWU84dzLawd7f5EZ1jlkQVGwbwXpqTNVosgjjh9X4i6lrCKIBv2V72Vr1kTJaNAJuDomtZ%2FYzOgdI%2BwvSVCQAVdsIIz2Sf4VVkYhpc3Xr7UeumYcdw1vo4nY4j%2B9T3zzyAHRBbsLRTvCZU9chfWsRj72VEY5PC0jKd3XMKNsMNUKc4xjnBNOctuD3%2Fh2dTAD4t%2BZQsyoqx3S42r%2BD%2BS93mVoeEsGsfhluDD6XyBNVaUfAgorP0wQ4W%2FM5atrhCdfX9MwlQ8JnFi701ZjBdO257NepznWL4JK0h%2FSfCF7mYXRGbTOn2mnHOnB9C7IJOzfD6lATrwUcSjGOT0YlE%2BMKek0L8GOqUB1VF20v4BmNztuCsibXkB%2Fobj9pk%2BO6OW4D%2BW4G%2Bg9Z8ZdIVJrVl%2FcgpHhBjECSYAnMOwLDYQ6yQvnfQjUf4aJcBsp4p9KnGc6CS1SFjTDc4eJ7KtWLadOOh5drbQMKXv%2FHkWBmkbhqCEA8w9I8tr%2Fk2qLevPx8cPWuFyoaOtZ41Ka7EDX6DKdJ55dVkxzIdr%2FuxxcL86BmAwinDQt%2B5tNgXzTdP7&X-Amz-Signature=1b03d99391a8a77aba77f9a234b08a8ce1ed104f229c546616f080d98fcdc25b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
