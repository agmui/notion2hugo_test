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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IMSXW77%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSFryYrOAUMpdfjVsH79Umez5qh%2F5k78MiuaXDq4rDIAIgd%2BcdUiC4DLIglbE6tnwOzL0lihfWM5DLOl4i%2F5lr9TIq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGDfXttj95QXSbKS9CrcAy4RNN7uTjKAr9bF6z0CgQpqkm79g3Kq%2B18K6eIWE8PfGUtdX74zkWY1Sl8meLViIHG1CYa0c1GvzdGbJQ0Cfz6BeP1NVKyJGnZUuPpMXwrqTzWhxeNnWg%2BH5rGQLDwdb7fPb8O7tJVVHFvyVKOsg2i7vSB%2Bz5i6U8U%2BxYruONB%2BdMzBuuJni3ZyQNoIy4oCufeM5o76zi4IwOF9g7kZDANlB5iyk%2F%2BXnZ2Qefks5TJdEQkpeZ9QyHhMaL3Y9AIEriYEYnW2vJQP7UJRbXQAMkmFVNS9ggOGCREOsJghk%2BOq%2BbRixJpLF7WYnpMwsnNX87tCXp8sTNUF4ZYpXnq5lu1ceHaaUebKo8aH0BvLLOE9TMHnDHcVUuny8Ww62UvoDn0AsDrVjfCuvY%2BBXlhhkDTuL8hp6TtDa77JL9FkwNmwtVORjJ66XU34SiP0uBI7DNjPOuBv%2B5Ripiegkg%2B2ZYCeowid1Iv1i79k%2FBUWpyF08px%2FKnmTZyJLIf4dlt5cRUavZDCrunvuRNK5gMMoO4tgk7ctcQvC5RpOMr5JMmTzBp1lY8XGiIeYibDHIk%2FbtYWnBmCilNzC2rpKrnH5Jb6%2F7jv%2BZ6RHUvXempMNFjsANe%2FqBiKGcKxCHeYdMLLD174GOqUBf0OErx46b7Tuy5F7p%2BR4U%2FcloONcFGdyhFsXXAlZI7FJ%2B2oHqOViQTgElvGLgnI7cLI4JuzAEpySXhCT2l5yqJMbN0uXnsvlet9SBzDtlYMI1AKagOPaYhSTPpn6Up8t1XM962XhthBYqLEw3rOfnxvMFTMEPWBY%2FUalIP3CjTuWuxiWwLuVNrFeFQM9RdX98Nf5WWZUCoU1PRKoJmxzVcxACJGC&X-Amz-Signature=9187000cc89e993b30586f82fa72148ff8340d4132a86119384abb9d6640556d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IMSXW77%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSFryYrOAUMpdfjVsH79Umez5qh%2F5k78MiuaXDq4rDIAIgd%2BcdUiC4DLIglbE6tnwOzL0lihfWM5DLOl4i%2F5lr9TIq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGDfXttj95QXSbKS9CrcAy4RNN7uTjKAr9bF6z0CgQpqkm79g3Kq%2B18K6eIWE8PfGUtdX74zkWY1Sl8meLViIHG1CYa0c1GvzdGbJQ0Cfz6BeP1NVKyJGnZUuPpMXwrqTzWhxeNnWg%2BH5rGQLDwdb7fPb8O7tJVVHFvyVKOsg2i7vSB%2Bz5i6U8U%2BxYruONB%2BdMzBuuJni3ZyQNoIy4oCufeM5o76zi4IwOF9g7kZDANlB5iyk%2F%2BXnZ2Qefks5TJdEQkpeZ9QyHhMaL3Y9AIEriYEYnW2vJQP7UJRbXQAMkmFVNS9ggOGCREOsJghk%2BOq%2BbRixJpLF7WYnpMwsnNX87tCXp8sTNUF4ZYpXnq5lu1ceHaaUebKo8aH0BvLLOE9TMHnDHcVUuny8Ww62UvoDn0AsDrVjfCuvY%2BBXlhhkDTuL8hp6TtDa77JL9FkwNmwtVORjJ66XU34SiP0uBI7DNjPOuBv%2B5Ripiegkg%2B2ZYCeowid1Iv1i79k%2FBUWpyF08px%2FKnmTZyJLIf4dlt5cRUavZDCrunvuRNK5gMMoO4tgk7ctcQvC5RpOMr5JMmTzBp1lY8XGiIeYibDHIk%2FbtYWnBmCilNzC2rpKrnH5Jb6%2F7jv%2BZ6RHUvXempMNFjsANe%2FqBiKGcKxCHeYdMLLD174GOqUBf0OErx46b7Tuy5F7p%2BR4U%2FcloONcFGdyhFsXXAlZI7FJ%2B2oHqOViQTgElvGLgnI7cLI4JuzAEpySXhCT2l5yqJMbN0uXnsvlet9SBzDtlYMI1AKagOPaYhSTPpn6Up8t1XM962XhthBYqLEw3rOfnxvMFTMEPWBY%2FUalIP3CjTuWuxiWwLuVNrFeFQM9RdX98Nf5WWZUCoU1PRKoJmxzVcxACJGC&X-Amz-Signature=4edc9c6faaa79daaee74cf8fb94955ed96c2bda79da3ec764ce8e5cfa73b57e8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IMSXW77%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSFryYrOAUMpdfjVsH79Umez5qh%2F5k78MiuaXDq4rDIAIgd%2BcdUiC4DLIglbE6tnwOzL0lihfWM5DLOl4i%2F5lr9TIq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGDfXttj95QXSbKS9CrcAy4RNN7uTjKAr9bF6z0CgQpqkm79g3Kq%2B18K6eIWE8PfGUtdX74zkWY1Sl8meLViIHG1CYa0c1GvzdGbJQ0Cfz6BeP1NVKyJGnZUuPpMXwrqTzWhxeNnWg%2BH5rGQLDwdb7fPb8O7tJVVHFvyVKOsg2i7vSB%2Bz5i6U8U%2BxYruONB%2BdMzBuuJni3ZyQNoIy4oCufeM5o76zi4IwOF9g7kZDANlB5iyk%2F%2BXnZ2Qefks5TJdEQkpeZ9QyHhMaL3Y9AIEriYEYnW2vJQP7UJRbXQAMkmFVNS9ggOGCREOsJghk%2BOq%2BbRixJpLF7WYnpMwsnNX87tCXp8sTNUF4ZYpXnq5lu1ceHaaUebKo8aH0BvLLOE9TMHnDHcVUuny8Ww62UvoDn0AsDrVjfCuvY%2BBXlhhkDTuL8hp6TtDa77JL9FkwNmwtVORjJ66XU34SiP0uBI7DNjPOuBv%2B5Ripiegkg%2B2ZYCeowid1Iv1i79k%2FBUWpyF08px%2FKnmTZyJLIf4dlt5cRUavZDCrunvuRNK5gMMoO4tgk7ctcQvC5RpOMr5JMmTzBp1lY8XGiIeYibDHIk%2FbtYWnBmCilNzC2rpKrnH5Jb6%2F7jv%2BZ6RHUvXempMNFjsANe%2FqBiKGcKxCHeYdMLLD174GOqUBf0OErx46b7Tuy5F7p%2BR4U%2FcloONcFGdyhFsXXAlZI7FJ%2B2oHqOViQTgElvGLgnI7cLI4JuzAEpySXhCT2l5yqJMbN0uXnsvlet9SBzDtlYMI1AKagOPaYhSTPpn6Up8t1XM962XhthBYqLEw3rOfnxvMFTMEPWBY%2FUalIP3CjTuWuxiWwLuVNrFeFQM9RdX98Nf5WWZUCoU1PRKoJmxzVcxACJGC&X-Amz-Signature=987ff95c7e277d376d6009ee0dea4a1a01a9cbb0d07d08f060e3fde44e0cfbe7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IMSXW77%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSFryYrOAUMpdfjVsH79Umez5qh%2F5k78MiuaXDq4rDIAIgd%2BcdUiC4DLIglbE6tnwOzL0lihfWM5DLOl4i%2F5lr9TIq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGDfXttj95QXSbKS9CrcAy4RNN7uTjKAr9bF6z0CgQpqkm79g3Kq%2B18K6eIWE8PfGUtdX74zkWY1Sl8meLViIHG1CYa0c1GvzdGbJQ0Cfz6BeP1NVKyJGnZUuPpMXwrqTzWhxeNnWg%2BH5rGQLDwdb7fPb8O7tJVVHFvyVKOsg2i7vSB%2Bz5i6U8U%2BxYruONB%2BdMzBuuJni3ZyQNoIy4oCufeM5o76zi4IwOF9g7kZDANlB5iyk%2F%2BXnZ2Qefks5TJdEQkpeZ9QyHhMaL3Y9AIEriYEYnW2vJQP7UJRbXQAMkmFVNS9ggOGCREOsJghk%2BOq%2BbRixJpLF7WYnpMwsnNX87tCXp8sTNUF4ZYpXnq5lu1ceHaaUebKo8aH0BvLLOE9TMHnDHcVUuny8Ww62UvoDn0AsDrVjfCuvY%2BBXlhhkDTuL8hp6TtDa77JL9FkwNmwtVORjJ66XU34SiP0uBI7DNjPOuBv%2B5Ripiegkg%2B2ZYCeowid1Iv1i79k%2FBUWpyF08px%2FKnmTZyJLIf4dlt5cRUavZDCrunvuRNK5gMMoO4tgk7ctcQvC5RpOMr5JMmTzBp1lY8XGiIeYibDHIk%2FbtYWnBmCilNzC2rpKrnH5Jb6%2F7jv%2BZ6RHUvXempMNFjsANe%2FqBiKGcKxCHeYdMLLD174GOqUBf0OErx46b7Tuy5F7p%2BR4U%2FcloONcFGdyhFsXXAlZI7FJ%2B2oHqOViQTgElvGLgnI7cLI4JuzAEpySXhCT2l5yqJMbN0uXnsvlet9SBzDtlYMI1AKagOPaYhSTPpn6Up8t1XM962XhthBYqLEw3rOfnxvMFTMEPWBY%2FUalIP3CjTuWuxiWwLuVNrFeFQM9RdX98Nf5WWZUCoU1PRKoJmxzVcxACJGC&X-Amz-Signature=2b75f8a7269f33bf0ba48e81b17b8686883c7bdfda25c1039d0e789464e5cfda&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IMSXW77%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSFryYrOAUMpdfjVsH79Umez5qh%2F5k78MiuaXDq4rDIAIgd%2BcdUiC4DLIglbE6tnwOzL0lihfWM5DLOl4i%2F5lr9TIq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGDfXttj95QXSbKS9CrcAy4RNN7uTjKAr9bF6z0CgQpqkm79g3Kq%2B18K6eIWE8PfGUtdX74zkWY1Sl8meLViIHG1CYa0c1GvzdGbJQ0Cfz6BeP1NVKyJGnZUuPpMXwrqTzWhxeNnWg%2BH5rGQLDwdb7fPb8O7tJVVHFvyVKOsg2i7vSB%2Bz5i6U8U%2BxYruONB%2BdMzBuuJni3ZyQNoIy4oCufeM5o76zi4IwOF9g7kZDANlB5iyk%2F%2BXnZ2Qefks5TJdEQkpeZ9QyHhMaL3Y9AIEriYEYnW2vJQP7UJRbXQAMkmFVNS9ggOGCREOsJghk%2BOq%2BbRixJpLF7WYnpMwsnNX87tCXp8sTNUF4ZYpXnq5lu1ceHaaUebKo8aH0BvLLOE9TMHnDHcVUuny8Ww62UvoDn0AsDrVjfCuvY%2BBXlhhkDTuL8hp6TtDa77JL9FkwNmwtVORjJ66XU34SiP0uBI7DNjPOuBv%2B5Ripiegkg%2B2ZYCeowid1Iv1i79k%2FBUWpyF08px%2FKnmTZyJLIf4dlt5cRUavZDCrunvuRNK5gMMoO4tgk7ctcQvC5RpOMr5JMmTzBp1lY8XGiIeYibDHIk%2FbtYWnBmCilNzC2rpKrnH5Jb6%2F7jv%2BZ6RHUvXempMNFjsANe%2FqBiKGcKxCHeYdMLLD174GOqUBf0OErx46b7Tuy5F7p%2BR4U%2FcloONcFGdyhFsXXAlZI7FJ%2B2oHqOViQTgElvGLgnI7cLI4JuzAEpySXhCT2l5yqJMbN0uXnsvlet9SBzDtlYMI1AKagOPaYhSTPpn6Up8t1XM962XhthBYqLEw3rOfnxvMFTMEPWBY%2FUalIP3CjTuWuxiWwLuVNrFeFQM9RdX98Nf5WWZUCoU1PRKoJmxzVcxACJGC&X-Amz-Signature=5854ddda5cbd931256660b67744cc2ac213c8fb07a83ed176d91fa701c524da7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
