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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QUJQW2Z%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICllPFIX2Z0Q3VhheKTob%2FXkU%2BRyjVydVM1ynA9poPHpAiEAq5T78Vph48Kaoectcbb9ZwuNrdRsn1fHY1D2IKbUXsgqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgSPnxZQ9TTzUSLUircA5IqQjxbQownLm79Onfw6gBh8yYxXh7NYIQhPJsiO93LCATKJs%2F6oqr2waG7cnWlYnuk73giZ5CIjgY5holItlxCUJSLZiSes0H%2FpLQ8wUU64dbVoxYzfQgG6E4l0Osg%2Fr49AwAbI3UDTeWQ%2B9fuls37w3tfT8wGFIkLEfdvewVOjGZqSg3dNEnxlCk3oNH5ZifI0j3IAeD%2B7riKGqarxjUpVg4Z%2BbdOg%2BI%2FyfbE33kfxT2TXt4sklPFSe3EUlcoXMFW9igfWYXu55e2FyLa2jGVPLbqyftFUSu87NdQg5TEqLBDWHdIX39eTBJR3QXx2gojCmsq%2BHBbjkKN7OVEr4d2mmkNqhAYn9FnGXByjY3JlyXIX2PMNi%2BBiWCj2xwEoiDrENUGszvjkgELTe%2BNZkjxZyDtsZAAaVBOzbYQDdzym2P1f%2B4Z0rvoWNIf%2By%2BNw%2F1siMyaxqkLiTlUxU3pIW5XsUrG4%2By6Bu%2FPJY2ZCIdmXiRn8lU6QKChXKoJsJ8GdOTG43KpgVnCVI%2B0EhVa3UiIDbrEmwW4a8hi7tmJbDSe5vZx30AqeYTqkqTQtSmese0u84O%2F7uiSY6npmcWiV4%2B24S9vHl77rgPIrTIQgFfgjGd9NytVMY9NcOnQMPL5hcMGOqUB70NmCYVH9uf9c5pDLQ6nk1zGcGpOCCDo2IqFa35YVYWEKIFr5h7iQ7i7qw1qGuWUcFZLXvEnTfqY6c8Uowi6DXSSuIW%2BJQc7hFVIKXHhoS%2FV65OfF9NtsFSv8ojowkB0iU8gGCxPJFRv6yapGeGtU6SNv647vlepr3KL5WR9FGbwir%2BdDEZ6XrWGnSFONLEbjumak8V1GEWc9HuaKnwM2I1aeqz6&X-Amz-Signature=2ca5b4d0542bb3885d6ec0404291b40b89eedc71232b9db121fd68cbdd8aecb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QUJQW2Z%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICllPFIX2Z0Q3VhheKTob%2FXkU%2BRyjVydVM1ynA9poPHpAiEAq5T78Vph48Kaoectcbb9ZwuNrdRsn1fHY1D2IKbUXsgqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgSPnxZQ9TTzUSLUircA5IqQjxbQownLm79Onfw6gBh8yYxXh7NYIQhPJsiO93LCATKJs%2F6oqr2waG7cnWlYnuk73giZ5CIjgY5holItlxCUJSLZiSes0H%2FpLQ8wUU64dbVoxYzfQgG6E4l0Osg%2Fr49AwAbI3UDTeWQ%2B9fuls37w3tfT8wGFIkLEfdvewVOjGZqSg3dNEnxlCk3oNH5ZifI0j3IAeD%2B7riKGqarxjUpVg4Z%2BbdOg%2BI%2FyfbE33kfxT2TXt4sklPFSe3EUlcoXMFW9igfWYXu55e2FyLa2jGVPLbqyftFUSu87NdQg5TEqLBDWHdIX39eTBJR3QXx2gojCmsq%2BHBbjkKN7OVEr4d2mmkNqhAYn9FnGXByjY3JlyXIX2PMNi%2BBiWCj2xwEoiDrENUGszvjkgELTe%2BNZkjxZyDtsZAAaVBOzbYQDdzym2P1f%2B4Z0rvoWNIf%2By%2BNw%2F1siMyaxqkLiTlUxU3pIW5XsUrG4%2By6Bu%2FPJY2ZCIdmXiRn8lU6QKChXKoJsJ8GdOTG43KpgVnCVI%2B0EhVa3UiIDbrEmwW4a8hi7tmJbDSe5vZx30AqeYTqkqTQtSmese0u84O%2F7uiSY6npmcWiV4%2B24S9vHl77rgPIrTIQgFfgjGd9NytVMY9NcOnQMPL5hcMGOqUB70NmCYVH9uf9c5pDLQ6nk1zGcGpOCCDo2IqFa35YVYWEKIFr5h7iQ7i7qw1qGuWUcFZLXvEnTfqY6c8Uowi6DXSSuIW%2BJQc7hFVIKXHhoS%2FV65OfF9NtsFSv8ojowkB0iU8gGCxPJFRv6yapGeGtU6SNv647vlepr3KL5WR9FGbwir%2BdDEZ6XrWGnSFONLEbjumak8V1GEWc9HuaKnwM2I1aeqz6&X-Amz-Signature=d533cb7c9e3ed3014f539f23869c81af3572568dac6318fbec9283d59360ad7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QUJQW2Z%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICllPFIX2Z0Q3VhheKTob%2FXkU%2BRyjVydVM1ynA9poPHpAiEAq5T78Vph48Kaoectcbb9ZwuNrdRsn1fHY1D2IKbUXsgqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgSPnxZQ9TTzUSLUircA5IqQjxbQownLm79Onfw6gBh8yYxXh7NYIQhPJsiO93LCATKJs%2F6oqr2waG7cnWlYnuk73giZ5CIjgY5holItlxCUJSLZiSes0H%2FpLQ8wUU64dbVoxYzfQgG6E4l0Osg%2Fr49AwAbI3UDTeWQ%2B9fuls37w3tfT8wGFIkLEfdvewVOjGZqSg3dNEnxlCk3oNH5ZifI0j3IAeD%2B7riKGqarxjUpVg4Z%2BbdOg%2BI%2FyfbE33kfxT2TXt4sklPFSe3EUlcoXMFW9igfWYXu55e2FyLa2jGVPLbqyftFUSu87NdQg5TEqLBDWHdIX39eTBJR3QXx2gojCmsq%2BHBbjkKN7OVEr4d2mmkNqhAYn9FnGXByjY3JlyXIX2PMNi%2BBiWCj2xwEoiDrENUGszvjkgELTe%2BNZkjxZyDtsZAAaVBOzbYQDdzym2P1f%2B4Z0rvoWNIf%2By%2BNw%2F1siMyaxqkLiTlUxU3pIW5XsUrG4%2By6Bu%2FPJY2ZCIdmXiRn8lU6QKChXKoJsJ8GdOTG43KpgVnCVI%2B0EhVa3UiIDbrEmwW4a8hi7tmJbDSe5vZx30AqeYTqkqTQtSmese0u84O%2F7uiSY6npmcWiV4%2B24S9vHl77rgPIrTIQgFfgjGd9NytVMY9NcOnQMPL5hcMGOqUB70NmCYVH9uf9c5pDLQ6nk1zGcGpOCCDo2IqFa35YVYWEKIFr5h7iQ7i7qw1qGuWUcFZLXvEnTfqY6c8Uowi6DXSSuIW%2BJQc7hFVIKXHhoS%2FV65OfF9NtsFSv8ojowkB0iU8gGCxPJFRv6yapGeGtU6SNv647vlepr3KL5WR9FGbwir%2BdDEZ6XrWGnSFONLEbjumak8V1GEWc9HuaKnwM2I1aeqz6&X-Amz-Signature=bd13e7b81d5a2476bfd5fe3c2750a4dfd19a3de460f502db1ac67aa591de04b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QUJQW2Z%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICllPFIX2Z0Q3VhheKTob%2FXkU%2BRyjVydVM1ynA9poPHpAiEAq5T78Vph48Kaoectcbb9ZwuNrdRsn1fHY1D2IKbUXsgqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgSPnxZQ9TTzUSLUircA5IqQjxbQownLm79Onfw6gBh8yYxXh7NYIQhPJsiO93LCATKJs%2F6oqr2waG7cnWlYnuk73giZ5CIjgY5holItlxCUJSLZiSes0H%2FpLQ8wUU64dbVoxYzfQgG6E4l0Osg%2Fr49AwAbI3UDTeWQ%2B9fuls37w3tfT8wGFIkLEfdvewVOjGZqSg3dNEnxlCk3oNH5ZifI0j3IAeD%2B7riKGqarxjUpVg4Z%2BbdOg%2BI%2FyfbE33kfxT2TXt4sklPFSe3EUlcoXMFW9igfWYXu55e2FyLa2jGVPLbqyftFUSu87NdQg5TEqLBDWHdIX39eTBJR3QXx2gojCmsq%2BHBbjkKN7OVEr4d2mmkNqhAYn9FnGXByjY3JlyXIX2PMNi%2BBiWCj2xwEoiDrENUGszvjkgELTe%2BNZkjxZyDtsZAAaVBOzbYQDdzym2P1f%2B4Z0rvoWNIf%2By%2BNw%2F1siMyaxqkLiTlUxU3pIW5XsUrG4%2By6Bu%2FPJY2ZCIdmXiRn8lU6QKChXKoJsJ8GdOTG43KpgVnCVI%2B0EhVa3UiIDbrEmwW4a8hi7tmJbDSe5vZx30AqeYTqkqTQtSmese0u84O%2F7uiSY6npmcWiV4%2B24S9vHl77rgPIrTIQgFfgjGd9NytVMY9NcOnQMPL5hcMGOqUB70NmCYVH9uf9c5pDLQ6nk1zGcGpOCCDo2IqFa35YVYWEKIFr5h7iQ7i7qw1qGuWUcFZLXvEnTfqY6c8Uowi6DXSSuIW%2BJQc7hFVIKXHhoS%2FV65OfF9NtsFSv8ojowkB0iU8gGCxPJFRv6yapGeGtU6SNv647vlepr3KL5WR9FGbwir%2BdDEZ6XrWGnSFONLEbjumak8V1GEWc9HuaKnwM2I1aeqz6&X-Amz-Signature=b9eb3f6b45da5d533e82453b94cb878905a5389f25f88f5f30a77a57da101dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QUJQW2Z%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICllPFIX2Z0Q3VhheKTob%2FXkU%2BRyjVydVM1ynA9poPHpAiEAq5T78Vph48Kaoectcbb9ZwuNrdRsn1fHY1D2IKbUXsgqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgSPnxZQ9TTzUSLUircA5IqQjxbQownLm79Onfw6gBh8yYxXh7NYIQhPJsiO93LCATKJs%2F6oqr2waG7cnWlYnuk73giZ5CIjgY5holItlxCUJSLZiSes0H%2FpLQ8wUU64dbVoxYzfQgG6E4l0Osg%2Fr49AwAbI3UDTeWQ%2B9fuls37w3tfT8wGFIkLEfdvewVOjGZqSg3dNEnxlCk3oNH5ZifI0j3IAeD%2B7riKGqarxjUpVg4Z%2BbdOg%2BI%2FyfbE33kfxT2TXt4sklPFSe3EUlcoXMFW9igfWYXu55e2FyLa2jGVPLbqyftFUSu87NdQg5TEqLBDWHdIX39eTBJR3QXx2gojCmsq%2BHBbjkKN7OVEr4d2mmkNqhAYn9FnGXByjY3JlyXIX2PMNi%2BBiWCj2xwEoiDrENUGszvjkgELTe%2BNZkjxZyDtsZAAaVBOzbYQDdzym2P1f%2B4Z0rvoWNIf%2By%2BNw%2F1siMyaxqkLiTlUxU3pIW5XsUrG4%2By6Bu%2FPJY2ZCIdmXiRn8lU6QKChXKoJsJ8GdOTG43KpgVnCVI%2B0EhVa3UiIDbrEmwW4a8hi7tmJbDSe5vZx30AqeYTqkqTQtSmese0u84O%2F7uiSY6npmcWiV4%2B24S9vHl77rgPIrTIQgFfgjGd9NytVMY9NcOnQMPL5hcMGOqUB70NmCYVH9uf9c5pDLQ6nk1zGcGpOCCDo2IqFa35YVYWEKIFr5h7iQ7i7qw1qGuWUcFZLXvEnTfqY6c8Uowi6DXSSuIW%2BJQc7hFVIKXHhoS%2FV65OfF9NtsFSv8ojowkB0iU8gGCxPJFRv6yapGeGtU6SNv647vlepr3KL5WR9FGbwir%2BdDEZ6XrWGnSFONLEbjumak8V1GEWc9HuaKnwM2I1aeqz6&X-Amz-Signature=cd089b2d920fcde50ebae0df6eb9429b758a8a79663619f4d1906cddd6ad9d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
