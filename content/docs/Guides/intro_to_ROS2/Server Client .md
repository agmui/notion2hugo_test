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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6RCHTI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCq4Vz1Yu12dmhTSijSU%2Bwwgfmu8FE5GZVDQyzftFOrbgIhALiiNb35u0YJT%2BynNgg3hSATtgKHnIeMf67iCKM9JLkZKv8DCDkQABoMNjM3NDIzMTgzODA1IgzJVI6tlli2rzhod0Iq3AO7KLEu9liFaezhb7l5w%2FKDlNEQ2nqvu5GfZpMj4QGvp%2FKFbhOg7AWOn2A94MfRIYsQRydltY7NlfU9PgXbfmXfhR6UgW0kVWW6axCPX1jBrCZ3oucSCMhLRZBqeF2P3jI87mPlXrLUiSTop9WFV3niVHf55hcMdzTQ0pbidnzQsfBPktLLgyCnWgjReK%2FmSmKjvGOvn%2BPKB7PFI%2FJDUmHEstCfAX0yazeXhfc1ACZVWQNtM9Jwq5iH00IVjCJQfsRqHS%2B7lw6A81uxeSjlgCqxR5%2BOfPi1n59jtCo%2F%2FNjzNfNSe23jUhqwt8K4r%2FacaMZnuJUwZm%2BB5HOe7P7y3RqbhTkvV33JtarM67A7v0SW9URnCmJyiJe%2FJSe1Y4GET5i5nDRgy6c1LPV5tnudSSe2LwOoOsgSHD9lWH2tRj1krenIWDY%2FPRvOaBKja8Yu1QrZMkxmomi3UIcN%2FdZ%2FU3iNoFtHAy89reX2PjTppEC8QfTrYTt4UPOEFmQt1BUtEU0MZt%2FjhBzG9hcrd9VwoXUYuJgSl9RzvKuKwrLjhZUQKfcmK27WU4zYY%2BV9aY1kr7yGfB6hceosA9wDiXjRfCYBxH0TP5%2Bw1%2BgfZ6LpPq2hyaPqYwQUiOck39OiNzD37uzCBjqkAe%2FzoCraD7Vzze1IUWrHsvEmg2IUgzPyqJUIwus5HW%2FrkwGD7MTkmkF0K0Ky8j59oktOs4vSjNz3%2F7H%2FdQGDMnnGkMCajVBwCELCagzXLVv4%2BX4Z30Lc39b1yghSoTFk1KI4XdV7FIfJo7p6NcjqiVaa6aZcO%2Fwu7XNxVE7Fi1FCH8zlVPppa9I%2FVodKJJWDLBzLNKceoCkQkzlUklrDmpNqhdGy&X-Amz-Signature=f1a55947b52a013d0c44b19ce723cb96971a6873cdf6e504df2a8ce7eb16c2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6RCHTI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCq4Vz1Yu12dmhTSijSU%2Bwwgfmu8FE5GZVDQyzftFOrbgIhALiiNb35u0YJT%2BynNgg3hSATtgKHnIeMf67iCKM9JLkZKv8DCDkQABoMNjM3NDIzMTgzODA1IgzJVI6tlli2rzhod0Iq3AO7KLEu9liFaezhb7l5w%2FKDlNEQ2nqvu5GfZpMj4QGvp%2FKFbhOg7AWOn2A94MfRIYsQRydltY7NlfU9PgXbfmXfhR6UgW0kVWW6axCPX1jBrCZ3oucSCMhLRZBqeF2P3jI87mPlXrLUiSTop9WFV3niVHf55hcMdzTQ0pbidnzQsfBPktLLgyCnWgjReK%2FmSmKjvGOvn%2BPKB7PFI%2FJDUmHEstCfAX0yazeXhfc1ACZVWQNtM9Jwq5iH00IVjCJQfsRqHS%2B7lw6A81uxeSjlgCqxR5%2BOfPi1n59jtCo%2F%2FNjzNfNSe23jUhqwt8K4r%2FacaMZnuJUwZm%2BB5HOe7P7y3RqbhTkvV33JtarM67A7v0SW9URnCmJyiJe%2FJSe1Y4GET5i5nDRgy6c1LPV5tnudSSe2LwOoOsgSHD9lWH2tRj1krenIWDY%2FPRvOaBKja8Yu1QrZMkxmomi3UIcN%2FdZ%2FU3iNoFtHAy89reX2PjTppEC8QfTrYTt4UPOEFmQt1BUtEU0MZt%2FjhBzG9hcrd9VwoXUYuJgSl9RzvKuKwrLjhZUQKfcmK27WU4zYY%2BV9aY1kr7yGfB6hceosA9wDiXjRfCYBxH0TP5%2Bw1%2BgfZ6LpPq2hyaPqYwQUiOck39OiNzD37uzCBjqkAe%2FzoCraD7Vzze1IUWrHsvEmg2IUgzPyqJUIwus5HW%2FrkwGD7MTkmkF0K0Ky8j59oktOs4vSjNz3%2F7H%2FdQGDMnnGkMCajVBwCELCagzXLVv4%2BX4Z30Lc39b1yghSoTFk1KI4XdV7FIfJo7p6NcjqiVaa6aZcO%2Fwu7XNxVE7Fi1FCH8zlVPppa9I%2FVodKJJWDLBzLNKceoCkQkzlUklrDmpNqhdGy&X-Amz-Signature=930c6bc50b800fa673eb7081acb026d51a325e5bd2d8185672ccbbaf9703aa1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6RCHTI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCq4Vz1Yu12dmhTSijSU%2Bwwgfmu8FE5GZVDQyzftFOrbgIhALiiNb35u0YJT%2BynNgg3hSATtgKHnIeMf67iCKM9JLkZKv8DCDkQABoMNjM3NDIzMTgzODA1IgzJVI6tlli2rzhod0Iq3AO7KLEu9liFaezhb7l5w%2FKDlNEQ2nqvu5GfZpMj4QGvp%2FKFbhOg7AWOn2A94MfRIYsQRydltY7NlfU9PgXbfmXfhR6UgW0kVWW6axCPX1jBrCZ3oucSCMhLRZBqeF2P3jI87mPlXrLUiSTop9WFV3niVHf55hcMdzTQ0pbidnzQsfBPktLLgyCnWgjReK%2FmSmKjvGOvn%2BPKB7PFI%2FJDUmHEstCfAX0yazeXhfc1ACZVWQNtM9Jwq5iH00IVjCJQfsRqHS%2B7lw6A81uxeSjlgCqxR5%2BOfPi1n59jtCo%2F%2FNjzNfNSe23jUhqwt8K4r%2FacaMZnuJUwZm%2BB5HOe7P7y3RqbhTkvV33JtarM67A7v0SW9URnCmJyiJe%2FJSe1Y4GET5i5nDRgy6c1LPV5tnudSSe2LwOoOsgSHD9lWH2tRj1krenIWDY%2FPRvOaBKja8Yu1QrZMkxmomi3UIcN%2FdZ%2FU3iNoFtHAy89reX2PjTppEC8QfTrYTt4UPOEFmQt1BUtEU0MZt%2FjhBzG9hcrd9VwoXUYuJgSl9RzvKuKwrLjhZUQKfcmK27WU4zYY%2BV9aY1kr7yGfB6hceosA9wDiXjRfCYBxH0TP5%2Bw1%2BgfZ6LpPq2hyaPqYwQUiOck39OiNzD37uzCBjqkAe%2FzoCraD7Vzze1IUWrHsvEmg2IUgzPyqJUIwus5HW%2FrkwGD7MTkmkF0K0Ky8j59oktOs4vSjNz3%2F7H%2FdQGDMnnGkMCajVBwCELCagzXLVv4%2BX4Z30Lc39b1yghSoTFk1KI4XdV7FIfJo7p6NcjqiVaa6aZcO%2Fwu7XNxVE7Fi1FCH8zlVPppa9I%2FVodKJJWDLBzLNKceoCkQkzlUklrDmpNqhdGy&X-Amz-Signature=3d1ba1d7da98eacf322af578be17d9bad649e5cc8f3c022e7a9fadfb5375b7ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6RCHTI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCq4Vz1Yu12dmhTSijSU%2Bwwgfmu8FE5GZVDQyzftFOrbgIhALiiNb35u0YJT%2BynNgg3hSATtgKHnIeMf67iCKM9JLkZKv8DCDkQABoMNjM3NDIzMTgzODA1IgzJVI6tlli2rzhod0Iq3AO7KLEu9liFaezhb7l5w%2FKDlNEQ2nqvu5GfZpMj4QGvp%2FKFbhOg7AWOn2A94MfRIYsQRydltY7NlfU9PgXbfmXfhR6UgW0kVWW6axCPX1jBrCZ3oucSCMhLRZBqeF2P3jI87mPlXrLUiSTop9WFV3niVHf55hcMdzTQ0pbidnzQsfBPktLLgyCnWgjReK%2FmSmKjvGOvn%2BPKB7PFI%2FJDUmHEstCfAX0yazeXhfc1ACZVWQNtM9Jwq5iH00IVjCJQfsRqHS%2B7lw6A81uxeSjlgCqxR5%2BOfPi1n59jtCo%2F%2FNjzNfNSe23jUhqwt8K4r%2FacaMZnuJUwZm%2BB5HOe7P7y3RqbhTkvV33JtarM67A7v0SW9URnCmJyiJe%2FJSe1Y4GET5i5nDRgy6c1LPV5tnudSSe2LwOoOsgSHD9lWH2tRj1krenIWDY%2FPRvOaBKja8Yu1QrZMkxmomi3UIcN%2FdZ%2FU3iNoFtHAy89reX2PjTppEC8QfTrYTt4UPOEFmQt1BUtEU0MZt%2FjhBzG9hcrd9VwoXUYuJgSl9RzvKuKwrLjhZUQKfcmK27WU4zYY%2BV9aY1kr7yGfB6hceosA9wDiXjRfCYBxH0TP5%2Bw1%2BgfZ6LpPq2hyaPqYwQUiOck39OiNzD37uzCBjqkAe%2FzoCraD7Vzze1IUWrHsvEmg2IUgzPyqJUIwus5HW%2FrkwGD7MTkmkF0K0Ky8j59oktOs4vSjNz3%2F7H%2FdQGDMnnGkMCajVBwCELCagzXLVv4%2BX4Z30Lc39b1yghSoTFk1KI4XdV7FIfJo7p6NcjqiVaa6aZcO%2Fwu7XNxVE7Fi1FCH8zlVPppa9I%2FVodKJJWDLBzLNKceoCkQkzlUklrDmpNqhdGy&X-Amz-Signature=d5d22daf472cc9190ac694ee2007ef53d47130c1e910166c958609d8b5b3f153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6RCHTI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCq4Vz1Yu12dmhTSijSU%2Bwwgfmu8FE5GZVDQyzftFOrbgIhALiiNb35u0YJT%2BynNgg3hSATtgKHnIeMf67iCKM9JLkZKv8DCDkQABoMNjM3NDIzMTgzODA1IgzJVI6tlli2rzhod0Iq3AO7KLEu9liFaezhb7l5w%2FKDlNEQ2nqvu5GfZpMj4QGvp%2FKFbhOg7AWOn2A94MfRIYsQRydltY7NlfU9PgXbfmXfhR6UgW0kVWW6axCPX1jBrCZ3oucSCMhLRZBqeF2P3jI87mPlXrLUiSTop9WFV3niVHf55hcMdzTQ0pbidnzQsfBPktLLgyCnWgjReK%2FmSmKjvGOvn%2BPKB7PFI%2FJDUmHEstCfAX0yazeXhfc1ACZVWQNtM9Jwq5iH00IVjCJQfsRqHS%2B7lw6A81uxeSjlgCqxR5%2BOfPi1n59jtCo%2F%2FNjzNfNSe23jUhqwt8K4r%2FacaMZnuJUwZm%2BB5HOe7P7y3RqbhTkvV33JtarM67A7v0SW9URnCmJyiJe%2FJSe1Y4GET5i5nDRgy6c1LPV5tnudSSe2LwOoOsgSHD9lWH2tRj1krenIWDY%2FPRvOaBKja8Yu1QrZMkxmomi3UIcN%2FdZ%2FU3iNoFtHAy89reX2PjTppEC8QfTrYTt4UPOEFmQt1BUtEU0MZt%2FjhBzG9hcrd9VwoXUYuJgSl9RzvKuKwrLjhZUQKfcmK27WU4zYY%2BV9aY1kr7yGfB6hceosA9wDiXjRfCYBxH0TP5%2Bw1%2BgfZ6LpPq2hyaPqYwQUiOck39OiNzD37uzCBjqkAe%2FzoCraD7Vzze1IUWrHsvEmg2IUgzPyqJUIwus5HW%2FrkwGD7MTkmkF0K0Ky8j59oktOs4vSjNz3%2F7H%2FdQGDMnnGkMCajVBwCELCagzXLVv4%2BX4Z30Lc39b1yghSoTFk1KI4XdV7FIfJo7p6NcjqiVaa6aZcO%2Fwu7XNxVE7Fi1FCH8zlVPppa9I%2FVodKJJWDLBzLNKceoCkQkzlUklrDmpNqhdGy&X-Amz-Signature=0dd54bb41ce4fd5383c4b468fc21f5b5d26f4c131f612c5b28b9c67cce8d343e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
