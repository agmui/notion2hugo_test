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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624UMG2HK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzn1pMiwCYlUtwD9B27jjC5H%2B8L5C9untuNsSRfYGm8AiB11iQEesJr%2FwYm986Xt5%2F6ROHLCXTnBaUpTJnfVxY7%2FCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaW8Fx9ldMWn6uOIfKtwDs70F6J7kHLroojy93hLAQYYsNENkqQcZ5s8WHLq8Ce558yFROCcDI1eXe16S3D7ss24lUYAHSR%2FKHMWN7oi16DHrpJpuvJEXI%2FE6AkOTmImveEwflQcROCBXDvcWOK4%2BQZXc216KkTM7uzHLp8WprYbWjzW%2BjFheX8W%2BksQa7IF73K7lvsL%2BuJ97GNUcu4srj5U8IcaOZfFWD6pIi7Pk2xL4VWaN%2BgU0mT72jOmjrjh1aTIARUx%2BVxmxUheW6PivZau2J4NcncyFUoLMuW3cpx611Nw54IW95dE7yJa%2FaOoHwjVHvfR%2BFNESoss98KD7z6wPL%2FspIEw2mWzwq777o2fONYw0FH42SA%2BUwwWPWQpPBXXoDDOrmzBhtSevmHf6YdoJbvDiL%2BhYT7sN%2Fb%2F7fRdPrcq4QdFH4AxTgLR59WHRqIs%2B9Y%2ByaMplgCPVLE42BVj6hzgvQNcnEXgKNYTCV7v5xBF%2BG4AZmgNW%2FgbjYK3jmo3ovwPrnEXFjvSymO%2BnNKsN5KlDxQWoCS%2B18YbkV%2FphHUrOic3SYxQcZebqDvuyPEO%2FHRHcJSQXDZ3YimkfTRpR4E%2Fpk%2BueYPYxJAwtrpabeTRoZTSw6WL%2FjBwabP6Mh6qlwmarjFCYh9YwmrDYwgY6pgH7KvVKj3CnRBqf6%2BcRdXBXE0MI%2BOiJs1hiXWBk3mQac5M65Fte0w0iVW5Px7Nay9aY7Wo3nGTrOMio6cKNaT7tJ0HCSxbBsFHqiJYIOoOxBE4Yvc6i0hF0z5CSsvg4NVxNXExAmNLMsdLw7yhXfKDFF58DsEusAGNhEUVZsfkGtNA%2FEQ9BXfeqA%2BSvj7d7KtUkzRfCl9cNe8TvOT%2FxjkzTbe63caiY&X-Amz-Signature=6c6f9ba478e0d407063069fe95936145f044869b619715af514e77298427423b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624UMG2HK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzn1pMiwCYlUtwD9B27jjC5H%2B8L5C9untuNsSRfYGm8AiB11iQEesJr%2FwYm986Xt5%2F6ROHLCXTnBaUpTJnfVxY7%2FCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaW8Fx9ldMWn6uOIfKtwDs70F6J7kHLroojy93hLAQYYsNENkqQcZ5s8WHLq8Ce558yFROCcDI1eXe16S3D7ss24lUYAHSR%2FKHMWN7oi16DHrpJpuvJEXI%2FE6AkOTmImveEwflQcROCBXDvcWOK4%2BQZXc216KkTM7uzHLp8WprYbWjzW%2BjFheX8W%2BksQa7IF73K7lvsL%2BuJ97GNUcu4srj5U8IcaOZfFWD6pIi7Pk2xL4VWaN%2BgU0mT72jOmjrjh1aTIARUx%2BVxmxUheW6PivZau2J4NcncyFUoLMuW3cpx611Nw54IW95dE7yJa%2FaOoHwjVHvfR%2BFNESoss98KD7z6wPL%2FspIEw2mWzwq777o2fONYw0FH42SA%2BUwwWPWQpPBXXoDDOrmzBhtSevmHf6YdoJbvDiL%2BhYT7sN%2Fb%2F7fRdPrcq4QdFH4AxTgLR59WHRqIs%2B9Y%2ByaMplgCPVLE42BVj6hzgvQNcnEXgKNYTCV7v5xBF%2BG4AZmgNW%2FgbjYK3jmo3ovwPrnEXFjvSymO%2BnNKsN5KlDxQWoCS%2B18YbkV%2FphHUrOic3SYxQcZebqDvuyPEO%2FHRHcJSQXDZ3YimkfTRpR4E%2Fpk%2BueYPYxJAwtrpabeTRoZTSw6WL%2FjBwabP6Mh6qlwmarjFCYh9YwmrDYwgY6pgH7KvVKj3CnRBqf6%2BcRdXBXE0MI%2BOiJs1hiXWBk3mQac5M65Fte0w0iVW5Px7Nay9aY7Wo3nGTrOMio6cKNaT7tJ0HCSxbBsFHqiJYIOoOxBE4Yvc6i0hF0z5CSsvg4NVxNXExAmNLMsdLw7yhXfKDFF58DsEusAGNhEUVZsfkGtNA%2FEQ9BXfeqA%2BSvj7d7KtUkzRfCl9cNe8TvOT%2FxjkzTbe63caiY&X-Amz-Signature=b4b30b15ea8ef50ac5a6796a78f7365da07c1a453bb1b39b608e4dd88028d472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624UMG2HK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzn1pMiwCYlUtwD9B27jjC5H%2B8L5C9untuNsSRfYGm8AiB11iQEesJr%2FwYm986Xt5%2F6ROHLCXTnBaUpTJnfVxY7%2FCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaW8Fx9ldMWn6uOIfKtwDs70F6J7kHLroojy93hLAQYYsNENkqQcZ5s8WHLq8Ce558yFROCcDI1eXe16S3D7ss24lUYAHSR%2FKHMWN7oi16DHrpJpuvJEXI%2FE6AkOTmImveEwflQcROCBXDvcWOK4%2BQZXc216KkTM7uzHLp8WprYbWjzW%2BjFheX8W%2BksQa7IF73K7lvsL%2BuJ97GNUcu4srj5U8IcaOZfFWD6pIi7Pk2xL4VWaN%2BgU0mT72jOmjrjh1aTIARUx%2BVxmxUheW6PivZau2J4NcncyFUoLMuW3cpx611Nw54IW95dE7yJa%2FaOoHwjVHvfR%2BFNESoss98KD7z6wPL%2FspIEw2mWzwq777o2fONYw0FH42SA%2BUwwWPWQpPBXXoDDOrmzBhtSevmHf6YdoJbvDiL%2BhYT7sN%2Fb%2F7fRdPrcq4QdFH4AxTgLR59WHRqIs%2B9Y%2ByaMplgCPVLE42BVj6hzgvQNcnEXgKNYTCV7v5xBF%2BG4AZmgNW%2FgbjYK3jmo3ovwPrnEXFjvSymO%2BnNKsN5KlDxQWoCS%2B18YbkV%2FphHUrOic3SYxQcZebqDvuyPEO%2FHRHcJSQXDZ3YimkfTRpR4E%2Fpk%2BueYPYxJAwtrpabeTRoZTSw6WL%2FjBwabP6Mh6qlwmarjFCYh9YwmrDYwgY6pgH7KvVKj3CnRBqf6%2BcRdXBXE0MI%2BOiJs1hiXWBk3mQac5M65Fte0w0iVW5Px7Nay9aY7Wo3nGTrOMio6cKNaT7tJ0HCSxbBsFHqiJYIOoOxBE4Yvc6i0hF0z5CSsvg4NVxNXExAmNLMsdLw7yhXfKDFF58DsEusAGNhEUVZsfkGtNA%2FEQ9BXfeqA%2BSvj7d7KtUkzRfCl9cNe8TvOT%2FxjkzTbe63caiY&X-Amz-Signature=965f162bb3e377505b2623fac80215c1fc1522bf83f0fbeae43aa17998f841df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624UMG2HK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzn1pMiwCYlUtwD9B27jjC5H%2B8L5C9untuNsSRfYGm8AiB11iQEesJr%2FwYm986Xt5%2F6ROHLCXTnBaUpTJnfVxY7%2FCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaW8Fx9ldMWn6uOIfKtwDs70F6J7kHLroojy93hLAQYYsNENkqQcZ5s8WHLq8Ce558yFROCcDI1eXe16S3D7ss24lUYAHSR%2FKHMWN7oi16DHrpJpuvJEXI%2FE6AkOTmImveEwflQcROCBXDvcWOK4%2BQZXc216KkTM7uzHLp8WprYbWjzW%2BjFheX8W%2BksQa7IF73K7lvsL%2BuJ97GNUcu4srj5U8IcaOZfFWD6pIi7Pk2xL4VWaN%2BgU0mT72jOmjrjh1aTIARUx%2BVxmxUheW6PivZau2J4NcncyFUoLMuW3cpx611Nw54IW95dE7yJa%2FaOoHwjVHvfR%2BFNESoss98KD7z6wPL%2FspIEw2mWzwq777o2fONYw0FH42SA%2BUwwWPWQpPBXXoDDOrmzBhtSevmHf6YdoJbvDiL%2BhYT7sN%2Fb%2F7fRdPrcq4QdFH4AxTgLR59WHRqIs%2B9Y%2ByaMplgCPVLE42BVj6hzgvQNcnEXgKNYTCV7v5xBF%2BG4AZmgNW%2FgbjYK3jmo3ovwPrnEXFjvSymO%2BnNKsN5KlDxQWoCS%2B18YbkV%2FphHUrOic3SYxQcZebqDvuyPEO%2FHRHcJSQXDZ3YimkfTRpR4E%2Fpk%2BueYPYxJAwtrpabeTRoZTSw6WL%2FjBwabP6Mh6qlwmarjFCYh9YwmrDYwgY6pgH7KvVKj3CnRBqf6%2BcRdXBXE0MI%2BOiJs1hiXWBk3mQac5M65Fte0w0iVW5Px7Nay9aY7Wo3nGTrOMio6cKNaT7tJ0HCSxbBsFHqiJYIOoOxBE4Yvc6i0hF0z5CSsvg4NVxNXExAmNLMsdLw7yhXfKDFF58DsEusAGNhEUVZsfkGtNA%2FEQ9BXfeqA%2BSvj7d7KtUkzRfCl9cNe8TvOT%2FxjkzTbe63caiY&X-Amz-Signature=c877f48d3c7fa8a5047fe27a41ffeb661007c17ca33e10c8cf711f48772a60bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624UMG2HK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzn1pMiwCYlUtwD9B27jjC5H%2B8L5C9untuNsSRfYGm8AiB11iQEesJr%2FwYm986Xt5%2F6ROHLCXTnBaUpTJnfVxY7%2FCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaW8Fx9ldMWn6uOIfKtwDs70F6J7kHLroojy93hLAQYYsNENkqQcZ5s8WHLq8Ce558yFROCcDI1eXe16S3D7ss24lUYAHSR%2FKHMWN7oi16DHrpJpuvJEXI%2FE6AkOTmImveEwflQcROCBXDvcWOK4%2BQZXc216KkTM7uzHLp8WprYbWjzW%2BjFheX8W%2BksQa7IF73K7lvsL%2BuJ97GNUcu4srj5U8IcaOZfFWD6pIi7Pk2xL4VWaN%2BgU0mT72jOmjrjh1aTIARUx%2BVxmxUheW6PivZau2J4NcncyFUoLMuW3cpx611Nw54IW95dE7yJa%2FaOoHwjVHvfR%2BFNESoss98KD7z6wPL%2FspIEw2mWzwq777o2fONYw0FH42SA%2BUwwWPWQpPBXXoDDOrmzBhtSevmHf6YdoJbvDiL%2BhYT7sN%2Fb%2F7fRdPrcq4QdFH4AxTgLR59WHRqIs%2B9Y%2ByaMplgCPVLE42BVj6hzgvQNcnEXgKNYTCV7v5xBF%2BG4AZmgNW%2FgbjYK3jmo3ovwPrnEXFjvSymO%2BnNKsN5KlDxQWoCS%2B18YbkV%2FphHUrOic3SYxQcZebqDvuyPEO%2FHRHcJSQXDZ3YimkfTRpR4E%2Fpk%2BueYPYxJAwtrpabeTRoZTSw6WL%2FjBwabP6Mh6qlwmarjFCYh9YwmrDYwgY6pgH7KvVKj3CnRBqf6%2BcRdXBXE0MI%2BOiJs1hiXWBk3mQac5M65Fte0w0iVW5Px7Nay9aY7Wo3nGTrOMio6cKNaT7tJ0HCSxbBsFHqiJYIOoOxBE4Yvc6i0hF0z5CSsvg4NVxNXExAmNLMsdLw7yhXfKDFF58DsEusAGNhEUVZsfkGtNA%2FEQ9BXfeqA%2BSvj7d7KtUkzRfCl9cNe8TvOT%2FxjkzTbe63caiY&X-Amz-Signature=3586389ef501e33c5e48aa233125b634f0761e3c2c12771b34d27c086c541488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
