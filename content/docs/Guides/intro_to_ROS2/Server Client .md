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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBU2TO4B%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBVjKen83zBjb%2FKMX7ZSUpIn0vVAIQ8oAT9tfOra5Qf%2FAiEAtc3Ex3ymNKJE2Rb2zV5SwqFK4dwVQvjvfsHenZnRZLEq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDLrQ7PvTJVDt1uJWNSrcAxfJeHLsuLQm4wgqqjbKNyg%2BcE6pSnF3LaQftuKe5Qip4HpFK0YS8uC3jebYaZdO9weuJGr%2F%2F9j99wcUO5uAqqxbdZwIzcydCJZtuY%2BX2FVeYo4wDHg3R3UtZunhuz%2F0%2F5lPgfyN4%2Ft8AvFwYOLG0PFYVpq%2FZP%2F2jZ0Wcj6%2F%2BrEbDhx9vBCBaBJAIvlCWsn0qRBq%2BLbgYK2sLSLLMpsf7yY4uzkcs2NqufqfGDWNRdTkSq%2BJ8P9H6YjAQjVIYXnF1ZeFzN5I%2BDbdy4YvAUu8sE9afqdHONUDydqKcJqbQAFqc75Y2X5pLfxifd0WLzWGAgCKlS5nerV5pHcEw04RvZe13TTYBgwHkSq74gzOk%2BBy4rv2%2B0Y0q3jhpdYdI73naxFPny98hC%2B0Fjrju%2F2qD4WPuIENYpqEiao%2FWeGJKjFmqfpSZJXNR6af5nG4n%2FQsSKVF6XPb0CBXYeuf1MaKfo7rrzbiE56uCV6Mtctb5uWIowZI9f8RFQl6NxRpU%2Fhd%2BvZ4ju3NAfDfL%2FG6xVBtm%2BFTU4zTuUOPyskOAcunjRrYg7Y7zCjfF03uJL%2BWrI3JrHsLSH1hrk5pDigkLLaZz%2FhlpuDl3MGC6AJk%2B1SWsUabFAHqotGCd%2B20SogKMMeblb0GOqUBB6dh5IJnnxbYTleecDXAVW2X531spxaD9Zt%2BZXH9FY%2B7eUb5ZzZ1A7y%2BohM8foI%2FVO0Wx1e5tAu8XiB5x3YMUI5XA1Og89FPe03svf8rvd076sjkIqYKq9NEkA4Tj3ovcSRPg29c5OmLb3MoVsKoiZAjZjwPbjJedWz7Wq5vIYiR%2FFAYx%2FFDph%2Bj%2FaADeTSsLsiJiDqZRgKsdJSe%2FSSnTGuZQtP1&X-Amz-Signature=4448106ac7e330ba072283501a3d8f6a04c648894674deb6d861f3edf8c696c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBU2TO4B%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBVjKen83zBjb%2FKMX7ZSUpIn0vVAIQ8oAT9tfOra5Qf%2FAiEAtc3Ex3ymNKJE2Rb2zV5SwqFK4dwVQvjvfsHenZnRZLEq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDLrQ7PvTJVDt1uJWNSrcAxfJeHLsuLQm4wgqqjbKNyg%2BcE6pSnF3LaQftuKe5Qip4HpFK0YS8uC3jebYaZdO9weuJGr%2F%2F9j99wcUO5uAqqxbdZwIzcydCJZtuY%2BX2FVeYo4wDHg3R3UtZunhuz%2F0%2F5lPgfyN4%2Ft8AvFwYOLG0PFYVpq%2FZP%2F2jZ0Wcj6%2F%2BrEbDhx9vBCBaBJAIvlCWsn0qRBq%2BLbgYK2sLSLLMpsf7yY4uzkcs2NqufqfGDWNRdTkSq%2BJ8P9H6YjAQjVIYXnF1ZeFzN5I%2BDbdy4YvAUu8sE9afqdHONUDydqKcJqbQAFqc75Y2X5pLfxifd0WLzWGAgCKlS5nerV5pHcEw04RvZe13TTYBgwHkSq74gzOk%2BBy4rv2%2B0Y0q3jhpdYdI73naxFPny98hC%2B0Fjrju%2F2qD4WPuIENYpqEiao%2FWeGJKjFmqfpSZJXNR6af5nG4n%2FQsSKVF6XPb0CBXYeuf1MaKfo7rrzbiE56uCV6Mtctb5uWIowZI9f8RFQl6NxRpU%2Fhd%2BvZ4ju3NAfDfL%2FG6xVBtm%2BFTU4zTuUOPyskOAcunjRrYg7Y7zCjfF03uJL%2BWrI3JrHsLSH1hrk5pDigkLLaZz%2FhlpuDl3MGC6AJk%2B1SWsUabFAHqotGCd%2B20SogKMMeblb0GOqUBB6dh5IJnnxbYTleecDXAVW2X531spxaD9Zt%2BZXH9FY%2B7eUb5ZzZ1A7y%2BohM8foI%2FVO0Wx1e5tAu8XiB5x3YMUI5XA1Og89FPe03svf8rvd076sjkIqYKq9NEkA4Tj3ovcSRPg29c5OmLb3MoVsKoiZAjZjwPbjJedWz7Wq5vIYiR%2FFAYx%2FFDph%2Bj%2FaADeTSsLsiJiDqZRgKsdJSe%2FSSnTGuZQtP1&X-Amz-Signature=489736ef80179da0827ea7569ae273278bac5797fa3eda53475e9915e4012747&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBU2TO4B%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBVjKen83zBjb%2FKMX7ZSUpIn0vVAIQ8oAT9tfOra5Qf%2FAiEAtc3Ex3ymNKJE2Rb2zV5SwqFK4dwVQvjvfsHenZnRZLEq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDLrQ7PvTJVDt1uJWNSrcAxfJeHLsuLQm4wgqqjbKNyg%2BcE6pSnF3LaQftuKe5Qip4HpFK0YS8uC3jebYaZdO9weuJGr%2F%2F9j99wcUO5uAqqxbdZwIzcydCJZtuY%2BX2FVeYo4wDHg3R3UtZunhuz%2F0%2F5lPgfyN4%2Ft8AvFwYOLG0PFYVpq%2FZP%2F2jZ0Wcj6%2F%2BrEbDhx9vBCBaBJAIvlCWsn0qRBq%2BLbgYK2sLSLLMpsf7yY4uzkcs2NqufqfGDWNRdTkSq%2BJ8P9H6YjAQjVIYXnF1ZeFzN5I%2BDbdy4YvAUu8sE9afqdHONUDydqKcJqbQAFqc75Y2X5pLfxifd0WLzWGAgCKlS5nerV5pHcEw04RvZe13TTYBgwHkSq74gzOk%2BBy4rv2%2B0Y0q3jhpdYdI73naxFPny98hC%2B0Fjrju%2F2qD4WPuIENYpqEiao%2FWeGJKjFmqfpSZJXNR6af5nG4n%2FQsSKVF6XPb0CBXYeuf1MaKfo7rrzbiE56uCV6Mtctb5uWIowZI9f8RFQl6NxRpU%2Fhd%2BvZ4ju3NAfDfL%2FG6xVBtm%2BFTU4zTuUOPyskOAcunjRrYg7Y7zCjfF03uJL%2BWrI3JrHsLSH1hrk5pDigkLLaZz%2FhlpuDl3MGC6AJk%2B1SWsUabFAHqotGCd%2B20SogKMMeblb0GOqUBB6dh5IJnnxbYTleecDXAVW2X531spxaD9Zt%2BZXH9FY%2B7eUb5ZzZ1A7y%2BohM8foI%2FVO0Wx1e5tAu8XiB5x3YMUI5XA1Og89FPe03svf8rvd076sjkIqYKq9NEkA4Tj3ovcSRPg29c5OmLb3MoVsKoiZAjZjwPbjJedWz7Wq5vIYiR%2FFAYx%2FFDph%2Bj%2FaADeTSsLsiJiDqZRgKsdJSe%2FSSnTGuZQtP1&X-Amz-Signature=22f4825ba9168b8cb4d83e4fa1b3a4a5f07def1a37d2280c4e24a106db98e155&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBU2TO4B%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBVjKen83zBjb%2FKMX7ZSUpIn0vVAIQ8oAT9tfOra5Qf%2FAiEAtc3Ex3ymNKJE2Rb2zV5SwqFK4dwVQvjvfsHenZnRZLEq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDLrQ7PvTJVDt1uJWNSrcAxfJeHLsuLQm4wgqqjbKNyg%2BcE6pSnF3LaQftuKe5Qip4HpFK0YS8uC3jebYaZdO9weuJGr%2F%2F9j99wcUO5uAqqxbdZwIzcydCJZtuY%2BX2FVeYo4wDHg3R3UtZunhuz%2F0%2F5lPgfyN4%2Ft8AvFwYOLG0PFYVpq%2FZP%2F2jZ0Wcj6%2F%2BrEbDhx9vBCBaBJAIvlCWsn0qRBq%2BLbgYK2sLSLLMpsf7yY4uzkcs2NqufqfGDWNRdTkSq%2BJ8P9H6YjAQjVIYXnF1ZeFzN5I%2BDbdy4YvAUu8sE9afqdHONUDydqKcJqbQAFqc75Y2X5pLfxifd0WLzWGAgCKlS5nerV5pHcEw04RvZe13TTYBgwHkSq74gzOk%2BBy4rv2%2B0Y0q3jhpdYdI73naxFPny98hC%2B0Fjrju%2F2qD4WPuIENYpqEiao%2FWeGJKjFmqfpSZJXNR6af5nG4n%2FQsSKVF6XPb0CBXYeuf1MaKfo7rrzbiE56uCV6Mtctb5uWIowZI9f8RFQl6NxRpU%2Fhd%2BvZ4ju3NAfDfL%2FG6xVBtm%2BFTU4zTuUOPyskOAcunjRrYg7Y7zCjfF03uJL%2BWrI3JrHsLSH1hrk5pDigkLLaZz%2FhlpuDl3MGC6AJk%2B1SWsUabFAHqotGCd%2B20SogKMMeblb0GOqUBB6dh5IJnnxbYTleecDXAVW2X531spxaD9Zt%2BZXH9FY%2B7eUb5ZzZ1A7y%2BohM8foI%2FVO0Wx1e5tAu8XiB5x3YMUI5XA1Og89FPe03svf8rvd076sjkIqYKq9NEkA4Tj3ovcSRPg29c5OmLb3MoVsKoiZAjZjwPbjJedWz7Wq5vIYiR%2FFAYx%2FFDph%2Bj%2FaADeTSsLsiJiDqZRgKsdJSe%2FSSnTGuZQtP1&X-Amz-Signature=3cf8e4ef0fe9dc88fb4a9b8104f3d6cc4e8ccb61348ca125138f68d0b4c85cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBU2TO4B%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBVjKen83zBjb%2FKMX7ZSUpIn0vVAIQ8oAT9tfOra5Qf%2FAiEAtc3Ex3ymNKJE2Rb2zV5SwqFK4dwVQvjvfsHenZnRZLEq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDLrQ7PvTJVDt1uJWNSrcAxfJeHLsuLQm4wgqqjbKNyg%2BcE6pSnF3LaQftuKe5Qip4HpFK0YS8uC3jebYaZdO9weuJGr%2F%2F9j99wcUO5uAqqxbdZwIzcydCJZtuY%2BX2FVeYo4wDHg3R3UtZunhuz%2F0%2F5lPgfyN4%2Ft8AvFwYOLG0PFYVpq%2FZP%2F2jZ0Wcj6%2F%2BrEbDhx9vBCBaBJAIvlCWsn0qRBq%2BLbgYK2sLSLLMpsf7yY4uzkcs2NqufqfGDWNRdTkSq%2BJ8P9H6YjAQjVIYXnF1ZeFzN5I%2BDbdy4YvAUu8sE9afqdHONUDydqKcJqbQAFqc75Y2X5pLfxifd0WLzWGAgCKlS5nerV5pHcEw04RvZe13TTYBgwHkSq74gzOk%2BBy4rv2%2B0Y0q3jhpdYdI73naxFPny98hC%2B0Fjrju%2F2qD4WPuIENYpqEiao%2FWeGJKjFmqfpSZJXNR6af5nG4n%2FQsSKVF6XPb0CBXYeuf1MaKfo7rrzbiE56uCV6Mtctb5uWIowZI9f8RFQl6NxRpU%2Fhd%2BvZ4ju3NAfDfL%2FG6xVBtm%2BFTU4zTuUOPyskOAcunjRrYg7Y7zCjfF03uJL%2BWrI3JrHsLSH1hrk5pDigkLLaZz%2FhlpuDl3MGC6AJk%2B1SWsUabFAHqotGCd%2B20SogKMMeblb0GOqUBB6dh5IJnnxbYTleecDXAVW2X531spxaD9Zt%2BZXH9FY%2B7eUb5ZzZ1A7y%2BohM8foI%2FVO0Wx1e5tAu8XiB5x3YMUI5XA1Og89FPe03svf8rvd076sjkIqYKq9NEkA4Tj3ovcSRPg29c5OmLb3MoVsKoiZAjZjwPbjJedWz7Wq5vIYiR%2FFAYx%2FFDph%2Bj%2FaADeTSsLsiJiDqZRgKsdJSe%2FSSnTGuZQtP1&X-Amz-Signature=450faddff72875c62bf1e9ac5e947f844d531eec4b79d77c1632a1bc63adc61e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
