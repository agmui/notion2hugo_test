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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWXGHPWZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHgyrK2Lzl72t5Vp%2FIMoYp%2FPX6bV9u4ZRo24YU16lVcgAiBSiBXGNa2KvoTztInhe9r9JX9MtndAThUEaXzEB7gG9CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5ul9fKMN1B%2F5hfa1KtwDjq3XKl%2FF3qYmCk5aUP7AHI%2BhUid0pmrFwaX12auPLOycWgchAc0WZNrcDrZqfjqHHsLitfaBQFMmi%2BzpKZRXuFa83ZDu7qdzUsAwsOTYHYIH8dfXNRzAvYC9SIP5AVqSd4w86ENqEJdeUnHbwMPBzy0Eds1twD6odUur%2FcwNP%2FtSyirqVHq22VzXueHIMCM0U2JI9Vw1tLYHqo4zvTjgOUL8RyEwZwFCc0TUk3ALogSIgh1l9RgDF8uHWkUnV4BPgZmxipZ%2FH3OPVKAW1b07%2FfHWpizX54tzNia3szxBdxJQ04R9gCmL3OugZ9%2FmCFI3x5vV%2B%2BgjqtusdjFynkCb7gPUlZ2erIyd3xNoaNTcyViCtSPPUwiydDVJOvQj0qNZ69GBtmjQw9sQcpJhhmBmlKtEJ%2B7VtmmLPNuvh%2FwgyyzaDV%2BmZVMxf0MjXsnqjnOLg%2BgSYiLadwFZd5q50DE%2B5gHdytlFGdX18cDnh9Jp9LJhqucop2lZsLWgLwAt4jL%2Fbb9gqcen%2FGmOl2nhAugxgJmPnZGvATI8uKClJ2dE9r1JkpdG1POqi9nAASyv8brPdYg0HsTJEFCPtAI7i%2BBdBBLkVtelHRsQ0B%2FmWlfHl9wWlhWbM5HnW8xoBd4wyYSywwY6pgHQDqIGFDuBJ4T2apYI30eEoFndkjYUs9fr4RC4x7gdfsjLfxkFR0ZkczsXoLcvrWltyOWaqTVSXBzAF6xhCWAr3JmfT1EY%2BrTJyltAr4AzZ%2FKs3nBGPQxsXTJuJHONn%2FBJO5jLeQB3IEUjyR0IlqenW%2BrlJt2hqdUBYluzwk9m9qvYfLxkxbd%2F2mYQr8dtQLI91uPuBasn8TlLpBuqL7%2FC25bVW0IM&X-Amz-Signature=963edbd01e5761eb4bc23a8cd230bfb908512d3f3bb669ba072198560ddd3c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWXGHPWZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHgyrK2Lzl72t5Vp%2FIMoYp%2FPX6bV9u4ZRo24YU16lVcgAiBSiBXGNa2KvoTztInhe9r9JX9MtndAThUEaXzEB7gG9CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5ul9fKMN1B%2F5hfa1KtwDjq3XKl%2FF3qYmCk5aUP7AHI%2BhUid0pmrFwaX12auPLOycWgchAc0WZNrcDrZqfjqHHsLitfaBQFMmi%2BzpKZRXuFa83ZDu7qdzUsAwsOTYHYIH8dfXNRzAvYC9SIP5AVqSd4w86ENqEJdeUnHbwMPBzy0Eds1twD6odUur%2FcwNP%2FtSyirqVHq22VzXueHIMCM0U2JI9Vw1tLYHqo4zvTjgOUL8RyEwZwFCc0TUk3ALogSIgh1l9RgDF8uHWkUnV4BPgZmxipZ%2FH3OPVKAW1b07%2FfHWpizX54tzNia3szxBdxJQ04R9gCmL3OugZ9%2FmCFI3x5vV%2B%2BgjqtusdjFynkCb7gPUlZ2erIyd3xNoaNTcyViCtSPPUwiydDVJOvQj0qNZ69GBtmjQw9sQcpJhhmBmlKtEJ%2B7VtmmLPNuvh%2FwgyyzaDV%2BmZVMxf0MjXsnqjnOLg%2BgSYiLadwFZd5q50DE%2B5gHdytlFGdX18cDnh9Jp9LJhqucop2lZsLWgLwAt4jL%2Fbb9gqcen%2FGmOl2nhAugxgJmPnZGvATI8uKClJ2dE9r1JkpdG1POqi9nAASyv8brPdYg0HsTJEFCPtAI7i%2BBdBBLkVtelHRsQ0B%2FmWlfHl9wWlhWbM5HnW8xoBd4wyYSywwY6pgHQDqIGFDuBJ4T2apYI30eEoFndkjYUs9fr4RC4x7gdfsjLfxkFR0ZkczsXoLcvrWltyOWaqTVSXBzAF6xhCWAr3JmfT1EY%2BrTJyltAr4AzZ%2FKs3nBGPQxsXTJuJHONn%2FBJO5jLeQB3IEUjyR0IlqenW%2BrlJt2hqdUBYluzwk9m9qvYfLxkxbd%2F2mYQr8dtQLI91uPuBasn8TlLpBuqL7%2FC25bVW0IM&X-Amz-Signature=97115b20ccb1fc0ece54ca54414b320219aeadd5a7e82af7b13723c4f1c21590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWXGHPWZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHgyrK2Lzl72t5Vp%2FIMoYp%2FPX6bV9u4ZRo24YU16lVcgAiBSiBXGNa2KvoTztInhe9r9JX9MtndAThUEaXzEB7gG9CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5ul9fKMN1B%2F5hfa1KtwDjq3XKl%2FF3qYmCk5aUP7AHI%2BhUid0pmrFwaX12auPLOycWgchAc0WZNrcDrZqfjqHHsLitfaBQFMmi%2BzpKZRXuFa83ZDu7qdzUsAwsOTYHYIH8dfXNRzAvYC9SIP5AVqSd4w86ENqEJdeUnHbwMPBzy0Eds1twD6odUur%2FcwNP%2FtSyirqVHq22VzXueHIMCM0U2JI9Vw1tLYHqo4zvTjgOUL8RyEwZwFCc0TUk3ALogSIgh1l9RgDF8uHWkUnV4BPgZmxipZ%2FH3OPVKAW1b07%2FfHWpizX54tzNia3szxBdxJQ04R9gCmL3OugZ9%2FmCFI3x5vV%2B%2BgjqtusdjFynkCb7gPUlZ2erIyd3xNoaNTcyViCtSPPUwiydDVJOvQj0qNZ69GBtmjQw9sQcpJhhmBmlKtEJ%2B7VtmmLPNuvh%2FwgyyzaDV%2BmZVMxf0MjXsnqjnOLg%2BgSYiLadwFZd5q50DE%2B5gHdytlFGdX18cDnh9Jp9LJhqucop2lZsLWgLwAt4jL%2Fbb9gqcen%2FGmOl2nhAugxgJmPnZGvATI8uKClJ2dE9r1JkpdG1POqi9nAASyv8brPdYg0HsTJEFCPtAI7i%2BBdBBLkVtelHRsQ0B%2FmWlfHl9wWlhWbM5HnW8xoBd4wyYSywwY6pgHQDqIGFDuBJ4T2apYI30eEoFndkjYUs9fr4RC4x7gdfsjLfxkFR0ZkczsXoLcvrWltyOWaqTVSXBzAF6xhCWAr3JmfT1EY%2BrTJyltAr4AzZ%2FKs3nBGPQxsXTJuJHONn%2FBJO5jLeQB3IEUjyR0IlqenW%2BrlJt2hqdUBYluzwk9m9qvYfLxkxbd%2F2mYQr8dtQLI91uPuBasn8TlLpBuqL7%2FC25bVW0IM&X-Amz-Signature=30f419f273b4aad05bfa8312bb376e113c795befc33dda73021a091595ac7302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWXGHPWZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHgyrK2Lzl72t5Vp%2FIMoYp%2FPX6bV9u4ZRo24YU16lVcgAiBSiBXGNa2KvoTztInhe9r9JX9MtndAThUEaXzEB7gG9CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5ul9fKMN1B%2F5hfa1KtwDjq3XKl%2FF3qYmCk5aUP7AHI%2BhUid0pmrFwaX12auPLOycWgchAc0WZNrcDrZqfjqHHsLitfaBQFMmi%2BzpKZRXuFa83ZDu7qdzUsAwsOTYHYIH8dfXNRzAvYC9SIP5AVqSd4w86ENqEJdeUnHbwMPBzy0Eds1twD6odUur%2FcwNP%2FtSyirqVHq22VzXueHIMCM0U2JI9Vw1tLYHqo4zvTjgOUL8RyEwZwFCc0TUk3ALogSIgh1l9RgDF8uHWkUnV4BPgZmxipZ%2FH3OPVKAW1b07%2FfHWpizX54tzNia3szxBdxJQ04R9gCmL3OugZ9%2FmCFI3x5vV%2B%2BgjqtusdjFynkCb7gPUlZ2erIyd3xNoaNTcyViCtSPPUwiydDVJOvQj0qNZ69GBtmjQw9sQcpJhhmBmlKtEJ%2B7VtmmLPNuvh%2FwgyyzaDV%2BmZVMxf0MjXsnqjnOLg%2BgSYiLadwFZd5q50DE%2B5gHdytlFGdX18cDnh9Jp9LJhqucop2lZsLWgLwAt4jL%2Fbb9gqcen%2FGmOl2nhAugxgJmPnZGvATI8uKClJ2dE9r1JkpdG1POqi9nAASyv8brPdYg0HsTJEFCPtAI7i%2BBdBBLkVtelHRsQ0B%2FmWlfHl9wWlhWbM5HnW8xoBd4wyYSywwY6pgHQDqIGFDuBJ4T2apYI30eEoFndkjYUs9fr4RC4x7gdfsjLfxkFR0ZkczsXoLcvrWltyOWaqTVSXBzAF6xhCWAr3JmfT1EY%2BrTJyltAr4AzZ%2FKs3nBGPQxsXTJuJHONn%2FBJO5jLeQB3IEUjyR0IlqenW%2BrlJt2hqdUBYluzwk9m9qvYfLxkxbd%2F2mYQr8dtQLI91uPuBasn8TlLpBuqL7%2FC25bVW0IM&X-Amz-Signature=b900eed6817ac00f0a092c5fbe676cd721f28fcfbcc6648d1fdaecbdd58f4979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWXGHPWZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHgyrK2Lzl72t5Vp%2FIMoYp%2FPX6bV9u4ZRo24YU16lVcgAiBSiBXGNa2KvoTztInhe9r9JX9MtndAThUEaXzEB7gG9CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5ul9fKMN1B%2F5hfa1KtwDjq3XKl%2FF3qYmCk5aUP7AHI%2BhUid0pmrFwaX12auPLOycWgchAc0WZNrcDrZqfjqHHsLitfaBQFMmi%2BzpKZRXuFa83ZDu7qdzUsAwsOTYHYIH8dfXNRzAvYC9SIP5AVqSd4w86ENqEJdeUnHbwMPBzy0Eds1twD6odUur%2FcwNP%2FtSyirqVHq22VzXueHIMCM0U2JI9Vw1tLYHqo4zvTjgOUL8RyEwZwFCc0TUk3ALogSIgh1l9RgDF8uHWkUnV4BPgZmxipZ%2FH3OPVKAW1b07%2FfHWpizX54tzNia3szxBdxJQ04R9gCmL3OugZ9%2FmCFI3x5vV%2B%2BgjqtusdjFynkCb7gPUlZ2erIyd3xNoaNTcyViCtSPPUwiydDVJOvQj0qNZ69GBtmjQw9sQcpJhhmBmlKtEJ%2B7VtmmLPNuvh%2FwgyyzaDV%2BmZVMxf0MjXsnqjnOLg%2BgSYiLadwFZd5q50DE%2B5gHdytlFGdX18cDnh9Jp9LJhqucop2lZsLWgLwAt4jL%2Fbb9gqcen%2FGmOl2nhAugxgJmPnZGvATI8uKClJ2dE9r1JkpdG1POqi9nAASyv8brPdYg0HsTJEFCPtAI7i%2BBdBBLkVtelHRsQ0B%2FmWlfHl9wWlhWbM5HnW8xoBd4wyYSywwY6pgHQDqIGFDuBJ4T2apYI30eEoFndkjYUs9fr4RC4x7gdfsjLfxkFR0ZkczsXoLcvrWltyOWaqTVSXBzAF6xhCWAr3JmfT1EY%2BrTJyltAr4AzZ%2FKs3nBGPQxsXTJuJHONn%2FBJO5jLeQB3IEUjyR0IlqenW%2BrlJt2hqdUBYluzwk9m9qvYfLxkxbd%2F2mYQr8dtQLI91uPuBasn8TlLpBuqL7%2FC25bVW0IM&X-Amz-Signature=571643c640cd4cc7b4bd452736017cae14889566eedd79526e2cbe154390f552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
