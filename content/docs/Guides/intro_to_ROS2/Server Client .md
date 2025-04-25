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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGDFX4U%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsmgRjj7CVKo%2BsO4NJWOMhtvn%2FXJMXBVd43phtKJ6NNAiEAysYW1Rn7RtM1eJhbJU%2B69%2FVgWRdMXf8iS9wsr1TqpZEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDKWbES4TiGoddmihkircA94A62OjL4R8VMTV1u4WGEbNHcfPuUDhPsQ1uiqnUN1erwprjUIZ87qsIExGHeQbhXvbFmFhBntnLkb7516utUgo6ol5Rp4oJflgHVCMLLCxQdeagErELn933tfDHzMOBsQs3YAS20D0k6%2F5yaO6ygY3p6gZYNEsvztjGAkaPbvJ%2B9Y5nUsThJxco1lK74e4dbILsFmjLXl5Q%2BOypGEGVdqZf%2FMv46M0Sr7ZyLUCHjgDftb%2FFbEx6FidVcMClH4WkwqlpWsnSSrkXIi%2BbrISYzudzzi88xWcs263zvFfWUd0Xy5bjBfol3dkU9oIyIqE7DDDrNYMcPP4DavApx1kaL1rs81qpiZmsOjWQQpz4upW0fvJUt60rHxbEUiOvdsQWVVsS5eKf9%2BC7hUlzsLHYLEDX8PP8EC%2BzQ16yto9QGHd9I6M19ru7tDvRgC1pElw%2BumFcbgv%2F8V7L0xXg9fkSb8nMoYRseuVrC2H7qNr8V24edw3X4VjPxGoyag5UFLqMWZbRxOePc4Jrx04%2BvX5Ej%2FJdrnlUbp7nS5NEwkj2SBEHGjrUrf%2F5nm3cNjfMHGPJDTqRMfLxX4c5BZIv3XyiKYgFUIqHIKynvLCAnaHka1Z79wIhkDau050pel2MLfgq8AGOqUBDlswlNjk9qQ%2FVNpi1nsBzsLM5v0i3HlKG6BAqe641xOLifpgWPQwyjjwums%2Fw6EVmuhrpPPeh40ST0iURJtHCxjEfqM%2B4ccJYZ8On9UPJv%2Fpq6aZe1wpx0lgEe8dJrHhS4Z4%2FdBkCygGSV5F0sM9i0%2BOUteUSarsgUaUuPnG50M%2FlmYJf4kDDRpE9Mc3yBbi1rwOQ0Z1IwQ%2BwN03pwHq%2FhTtkSYw&X-Amz-Signature=7dd781d177104167821ad5c403dc929fe27d39180d7cd9138ef6eca16c3456db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGDFX4U%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsmgRjj7CVKo%2BsO4NJWOMhtvn%2FXJMXBVd43phtKJ6NNAiEAysYW1Rn7RtM1eJhbJU%2B69%2FVgWRdMXf8iS9wsr1TqpZEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDKWbES4TiGoddmihkircA94A62OjL4R8VMTV1u4WGEbNHcfPuUDhPsQ1uiqnUN1erwprjUIZ87qsIExGHeQbhXvbFmFhBntnLkb7516utUgo6ol5Rp4oJflgHVCMLLCxQdeagErELn933tfDHzMOBsQs3YAS20D0k6%2F5yaO6ygY3p6gZYNEsvztjGAkaPbvJ%2B9Y5nUsThJxco1lK74e4dbILsFmjLXl5Q%2BOypGEGVdqZf%2FMv46M0Sr7ZyLUCHjgDftb%2FFbEx6FidVcMClH4WkwqlpWsnSSrkXIi%2BbrISYzudzzi88xWcs263zvFfWUd0Xy5bjBfol3dkU9oIyIqE7DDDrNYMcPP4DavApx1kaL1rs81qpiZmsOjWQQpz4upW0fvJUt60rHxbEUiOvdsQWVVsS5eKf9%2BC7hUlzsLHYLEDX8PP8EC%2BzQ16yto9QGHd9I6M19ru7tDvRgC1pElw%2BumFcbgv%2F8V7L0xXg9fkSb8nMoYRseuVrC2H7qNr8V24edw3X4VjPxGoyag5UFLqMWZbRxOePc4Jrx04%2BvX5Ej%2FJdrnlUbp7nS5NEwkj2SBEHGjrUrf%2F5nm3cNjfMHGPJDTqRMfLxX4c5BZIv3XyiKYgFUIqHIKynvLCAnaHka1Z79wIhkDau050pel2MLfgq8AGOqUBDlswlNjk9qQ%2FVNpi1nsBzsLM5v0i3HlKG6BAqe641xOLifpgWPQwyjjwums%2Fw6EVmuhrpPPeh40ST0iURJtHCxjEfqM%2B4ccJYZ8On9UPJv%2Fpq6aZe1wpx0lgEe8dJrHhS4Z4%2FdBkCygGSV5F0sM9i0%2BOUteUSarsgUaUuPnG50M%2FlmYJf4kDDRpE9Mc3yBbi1rwOQ0Z1IwQ%2BwN03pwHq%2FhTtkSYw&X-Amz-Signature=a49c1665599d71e0da3e83bf190854691f506a7d17658c9e48040b4cf86cc988&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGDFX4U%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsmgRjj7CVKo%2BsO4NJWOMhtvn%2FXJMXBVd43phtKJ6NNAiEAysYW1Rn7RtM1eJhbJU%2B69%2FVgWRdMXf8iS9wsr1TqpZEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDKWbES4TiGoddmihkircA94A62OjL4R8VMTV1u4WGEbNHcfPuUDhPsQ1uiqnUN1erwprjUIZ87qsIExGHeQbhXvbFmFhBntnLkb7516utUgo6ol5Rp4oJflgHVCMLLCxQdeagErELn933tfDHzMOBsQs3YAS20D0k6%2F5yaO6ygY3p6gZYNEsvztjGAkaPbvJ%2B9Y5nUsThJxco1lK74e4dbILsFmjLXl5Q%2BOypGEGVdqZf%2FMv46M0Sr7ZyLUCHjgDftb%2FFbEx6FidVcMClH4WkwqlpWsnSSrkXIi%2BbrISYzudzzi88xWcs263zvFfWUd0Xy5bjBfol3dkU9oIyIqE7DDDrNYMcPP4DavApx1kaL1rs81qpiZmsOjWQQpz4upW0fvJUt60rHxbEUiOvdsQWVVsS5eKf9%2BC7hUlzsLHYLEDX8PP8EC%2BzQ16yto9QGHd9I6M19ru7tDvRgC1pElw%2BumFcbgv%2F8V7L0xXg9fkSb8nMoYRseuVrC2H7qNr8V24edw3X4VjPxGoyag5UFLqMWZbRxOePc4Jrx04%2BvX5Ej%2FJdrnlUbp7nS5NEwkj2SBEHGjrUrf%2F5nm3cNjfMHGPJDTqRMfLxX4c5BZIv3XyiKYgFUIqHIKynvLCAnaHka1Z79wIhkDau050pel2MLfgq8AGOqUBDlswlNjk9qQ%2FVNpi1nsBzsLM5v0i3HlKG6BAqe641xOLifpgWPQwyjjwums%2Fw6EVmuhrpPPeh40ST0iURJtHCxjEfqM%2B4ccJYZ8On9UPJv%2Fpq6aZe1wpx0lgEe8dJrHhS4Z4%2FdBkCygGSV5F0sM9i0%2BOUteUSarsgUaUuPnG50M%2FlmYJf4kDDRpE9Mc3yBbi1rwOQ0Z1IwQ%2BwN03pwHq%2FhTtkSYw&X-Amz-Signature=dad2eab2b3d648f98fa635a1c3799f86a051e05a2a517343f19d4afe36b1f4d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGDFX4U%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsmgRjj7CVKo%2BsO4NJWOMhtvn%2FXJMXBVd43phtKJ6NNAiEAysYW1Rn7RtM1eJhbJU%2B69%2FVgWRdMXf8iS9wsr1TqpZEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDKWbES4TiGoddmihkircA94A62OjL4R8VMTV1u4WGEbNHcfPuUDhPsQ1uiqnUN1erwprjUIZ87qsIExGHeQbhXvbFmFhBntnLkb7516utUgo6ol5Rp4oJflgHVCMLLCxQdeagErELn933tfDHzMOBsQs3YAS20D0k6%2F5yaO6ygY3p6gZYNEsvztjGAkaPbvJ%2B9Y5nUsThJxco1lK74e4dbILsFmjLXl5Q%2BOypGEGVdqZf%2FMv46M0Sr7ZyLUCHjgDftb%2FFbEx6FidVcMClH4WkwqlpWsnSSrkXIi%2BbrISYzudzzi88xWcs263zvFfWUd0Xy5bjBfol3dkU9oIyIqE7DDDrNYMcPP4DavApx1kaL1rs81qpiZmsOjWQQpz4upW0fvJUt60rHxbEUiOvdsQWVVsS5eKf9%2BC7hUlzsLHYLEDX8PP8EC%2BzQ16yto9QGHd9I6M19ru7tDvRgC1pElw%2BumFcbgv%2F8V7L0xXg9fkSb8nMoYRseuVrC2H7qNr8V24edw3X4VjPxGoyag5UFLqMWZbRxOePc4Jrx04%2BvX5Ej%2FJdrnlUbp7nS5NEwkj2SBEHGjrUrf%2F5nm3cNjfMHGPJDTqRMfLxX4c5BZIv3XyiKYgFUIqHIKynvLCAnaHka1Z79wIhkDau050pel2MLfgq8AGOqUBDlswlNjk9qQ%2FVNpi1nsBzsLM5v0i3HlKG6BAqe641xOLifpgWPQwyjjwums%2Fw6EVmuhrpPPeh40ST0iURJtHCxjEfqM%2B4ccJYZ8On9UPJv%2Fpq6aZe1wpx0lgEe8dJrHhS4Z4%2FdBkCygGSV5F0sM9i0%2BOUteUSarsgUaUuPnG50M%2FlmYJf4kDDRpE9Mc3yBbi1rwOQ0Z1IwQ%2BwN03pwHq%2FhTtkSYw&X-Amz-Signature=2f7ecf35a2e699a571016897d2db0ca0ffa9401c4352936b38eec8e169b910d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGDFX4U%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsmgRjj7CVKo%2BsO4NJWOMhtvn%2FXJMXBVd43phtKJ6NNAiEAysYW1Rn7RtM1eJhbJU%2B69%2FVgWRdMXf8iS9wsr1TqpZEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDKWbES4TiGoddmihkircA94A62OjL4R8VMTV1u4WGEbNHcfPuUDhPsQ1uiqnUN1erwprjUIZ87qsIExGHeQbhXvbFmFhBntnLkb7516utUgo6ol5Rp4oJflgHVCMLLCxQdeagErELn933tfDHzMOBsQs3YAS20D0k6%2F5yaO6ygY3p6gZYNEsvztjGAkaPbvJ%2B9Y5nUsThJxco1lK74e4dbILsFmjLXl5Q%2BOypGEGVdqZf%2FMv46M0Sr7ZyLUCHjgDftb%2FFbEx6FidVcMClH4WkwqlpWsnSSrkXIi%2BbrISYzudzzi88xWcs263zvFfWUd0Xy5bjBfol3dkU9oIyIqE7DDDrNYMcPP4DavApx1kaL1rs81qpiZmsOjWQQpz4upW0fvJUt60rHxbEUiOvdsQWVVsS5eKf9%2BC7hUlzsLHYLEDX8PP8EC%2BzQ16yto9QGHd9I6M19ru7tDvRgC1pElw%2BumFcbgv%2F8V7L0xXg9fkSb8nMoYRseuVrC2H7qNr8V24edw3X4VjPxGoyag5UFLqMWZbRxOePc4Jrx04%2BvX5Ej%2FJdrnlUbp7nS5NEwkj2SBEHGjrUrf%2F5nm3cNjfMHGPJDTqRMfLxX4c5BZIv3XyiKYgFUIqHIKynvLCAnaHka1Z79wIhkDau050pel2MLfgq8AGOqUBDlswlNjk9qQ%2FVNpi1nsBzsLM5v0i3HlKG6BAqe641xOLifpgWPQwyjjwums%2Fw6EVmuhrpPPeh40ST0iURJtHCxjEfqM%2B4ccJYZ8On9UPJv%2Fpq6aZe1wpx0lgEe8dJrHhS4Z4%2FdBkCygGSV5F0sM9i0%2BOUteUSarsgUaUuPnG50M%2FlmYJf4kDDRpE9Mc3yBbi1rwOQ0Z1IwQ%2BwN03pwHq%2FhTtkSYw&X-Amz-Signature=7fe008c52d7dfbd03731c1e21bfe7c8b709858fbe12ee1d2bdc3977e2e4decea&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
