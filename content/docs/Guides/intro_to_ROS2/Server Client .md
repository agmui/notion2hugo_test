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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3FAWJKX%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDTjo%2FbshE3cQAx6SrRsaAxa%2BuryiVQBl%2B2Xe%2FykZ4fugIhALZafV6yjmAbZ9Uu%2FR0e9n3ksf7qrbbNWfG6TLzS84htKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtiL4zHGvmU1E4UhMq3AOt4N9XUnwUS8hsm8a3L5Wfkm0YNy%2BZr%2BRfdc%2FC%2BgkDYTttjd758xNFeKXkTDV1y6cbbZWGsNdLWQs%2F1Ojq3mcPYf6jewcSvOlFNzuRYvMeFAvwwxBUShP7F%2B5loSlURrpa540engdr1PZIn20v2%2B0xUhPMmbs1fiz%2FgiEWoiCMSlnW5yK2CBVCRGh7dMsqAjvwLIjHpv1%2FEcQgP0VWYM2FmZzHZxtM3Z5Fqo%2BXMggBJP8wfhgG6U9PDtlW25tRnUUC87AnlJB7A6ANxzhh%2Fg%2BPIEZeLB1tz7e1P6uDGVG1B%2FW4iuwtK3FlxbOaoHMAauWransMAYQcfPpWjTPwTkpcMtOr7xX7ZM3NDy5KaF%2FxIzhGrvqM6tbAFt0lwGHPw9M1nXqCibt6LPqP6aR3es1zzuC5vl6sCu2Blb8BUJ9G2nTGFljkdLMO8UveGEhZCwfUlksHoliI4hj0f1mj79wjnUBJSAwebP%2BiyBXQ7J%2F7rOTswY1R3zL1o0G%2BH8bLeuI2p3wBdpIlRWpNuqAluthZF17Vs%2BJ1nIAMP6GFyKqFYEv7JQtB1RXywLyAJ%2FRZdNptVFyOlLOdoQ2oO3Miae1pMFzoOlrD4dlEpKXVYlU3T5IK4HdPgaofTCwnVTDG1Z%2FABjqkAV5PeFB%2BIyLd1KT1oLWjJTyBhqmEOehjJfSzHmK%2FAq8h1UN9z8LavPSViuYtVHAVYCOjIeNwAlan3wKqXPoYvSM4GEnH9eXJM72BX63O7%2Bs%2Fb%2B%2B6rekMamlWMcLgdd1%2BkLuoTZEwEZsx0GNqVLwroIV211W0vM0TQx7SVAfSxX7rG6OMoVUOaXvX0kcyyIrdItmEOMwvp4TRgGuldFwuahZtGIHb&X-Amz-Signature=d50d44394d1396f7d5df8a5fbca4e78354b96cf86f12840d5dd471dea235183f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3FAWJKX%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDTjo%2FbshE3cQAx6SrRsaAxa%2BuryiVQBl%2B2Xe%2FykZ4fugIhALZafV6yjmAbZ9Uu%2FR0e9n3ksf7qrbbNWfG6TLzS84htKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtiL4zHGvmU1E4UhMq3AOt4N9XUnwUS8hsm8a3L5Wfkm0YNy%2BZr%2BRfdc%2FC%2BgkDYTttjd758xNFeKXkTDV1y6cbbZWGsNdLWQs%2F1Ojq3mcPYf6jewcSvOlFNzuRYvMeFAvwwxBUShP7F%2B5loSlURrpa540engdr1PZIn20v2%2B0xUhPMmbs1fiz%2FgiEWoiCMSlnW5yK2CBVCRGh7dMsqAjvwLIjHpv1%2FEcQgP0VWYM2FmZzHZxtM3Z5Fqo%2BXMggBJP8wfhgG6U9PDtlW25tRnUUC87AnlJB7A6ANxzhh%2Fg%2BPIEZeLB1tz7e1P6uDGVG1B%2FW4iuwtK3FlxbOaoHMAauWransMAYQcfPpWjTPwTkpcMtOr7xX7ZM3NDy5KaF%2FxIzhGrvqM6tbAFt0lwGHPw9M1nXqCibt6LPqP6aR3es1zzuC5vl6sCu2Blb8BUJ9G2nTGFljkdLMO8UveGEhZCwfUlksHoliI4hj0f1mj79wjnUBJSAwebP%2BiyBXQ7J%2F7rOTswY1R3zL1o0G%2BH8bLeuI2p3wBdpIlRWpNuqAluthZF17Vs%2BJ1nIAMP6GFyKqFYEv7JQtB1RXywLyAJ%2FRZdNptVFyOlLOdoQ2oO3Miae1pMFzoOlrD4dlEpKXVYlU3T5IK4HdPgaofTCwnVTDG1Z%2FABjqkAV5PeFB%2BIyLd1KT1oLWjJTyBhqmEOehjJfSzHmK%2FAq8h1UN9z8LavPSViuYtVHAVYCOjIeNwAlan3wKqXPoYvSM4GEnH9eXJM72BX63O7%2Bs%2Fb%2B%2B6rekMamlWMcLgdd1%2BkLuoTZEwEZsx0GNqVLwroIV211W0vM0TQx7SVAfSxX7rG6OMoVUOaXvX0kcyyIrdItmEOMwvp4TRgGuldFwuahZtGIHb&X-Amz-Signature=339226362a063a96338e4098a86676e4149ba01d3348d68259086eafc949297e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3FAWJKX%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDTjo%2FbshE3cQAx6SrRsaAxa%2BuryiVQBl%2B2Xe%2FykZ4fugIhALZafV6yjmAbZ9Uu%2FR0e9n3ksf7qrbbNWfG6TLzS84htKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtiL4zHGvmU1E4UhMq3AOt4N9XUnwUS8hsm8a3L5Wfkm0YNy%2BZr%2BRfdc%2FC%2BgkDYTttjd758xNFeKXkTDV1y6cbbZWGsNdLWQs%2F1Ojq3mcPYf6jewcSvOlFNzuRYvMeFAvwwxBUShP7F%2B5loSlURrpa540engdr1PZIn20v2%2B0xUhPMmbs1fiz%2FgiEWoiCMSlnW5yK2CBVCRGh7dMsqAjvwLIjHpv1%2FEcQgP0VWYM2FmZzHZxtM3Z5Fqo%2BXMggBJP8wfhgG6U9PDtlW25tRnUUC87AnlJB7A6ANxzhh%2Fg%2BPIEZeLB1tz7e1P6uDGVG1B%2FW4iuwtK3FlxbOaoHMAauWransMAYQcfPpWjTPwTkpcMtOr7xX7ZM3NDy5KaF%2FxIzhGrvqM6tbAFt0lwGHPw9M1nXqCibt6LPqP6aR3es1zzuC5vl6sCu2Blb8BUJ9G2nTGFljkdLMO8UveGEhZCwfUlksHoliI4hj0f1mj79wjnUBJSAwebP%2BiyBXQ7J%2F7rOTswY1R3zL1o0G%2BH8bLeuI2p3wBdpIlRWpNuqAluthZF17Vs%2BJ1nIAMP6GFyKqFYEv7JQtB1RXywLyAJ%2FRZdNptVFyOlLOdoQ2oO3Miae1pMFzoOlrD4dlEpKXVYlU3T5IK4HdPgaofTCwnVTDG1Z%2FABjqkAV5PeFB%2BIyLd1KT1oLWjJTyBhqmEOehjJfSzHmK%2FAq8h1UN9z8LavPSViuYtVHAVYCOjIeNwAlan3wKqXPoYvSM4GEnH9eXJM72BX63O7%2Bs%2Fb%2B%2B6rekMamlWMcLgdd1%2BkLuoTZEwEZsx0GNqVLwroIV211W0vM0TQx7SVAfSxX7rG6OMoVUOaXvX0kcyyIrdItmEOMwvp4TRgGuldFwuahZtGIHb&X-Amz-Signature=aff71af2caa1bfdc059e77aeae474143110f002f5d0c74d085e9112b532e3092&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3FAWJKX%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDTjo%2FbshE3cQAx6SrRsaAxa%2BuryiVQBl%2B2Xe%2FykZ4fugIhALZafV6yjmAbZ9Uu%2FR0e9n3ksf7qrbbNWfG6TLzS84htKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtiL4zHGvmU1E4UhMq3AOt4N9XUnwUS8hsm8a3L5Wfkm0YNy%2BZr%2BRfdc%2FC%2BgkDYTttjd758xNFeKXkTDV1y6cbbZWGsNdLWQs%2F1Ojq3mcPYf6jewcSvOlFNzuRYvMeFAvwwxBUShP7F%2B5loSlURrpa540engdr1PZIn20v2%2B0xUhPMmbs1fiz%2FgiEWoiCMSlnW5yK2CBVCRGh7dMsqAjvwLIjHpv1%2FEcQgP0VWYM2FmZzHZxtM3Z5Fqo%2BXMggBJP8wfhgG6U9PDtlW25tRnUUC87AnlJB7A6ANxzhh%2Fg%2BPIEZeLB1tz7e1P6uDGVG1B%2FW4iuwtK3FlxbOaoHMAauWransMAYQcfPpWjTPwTkpcMtOr7xX7ZM3NDy5KaF%2FxIzhGrvqM6tbAFt0lwGHPw9M1nXqCibt6LPqP6aR3es1zzuC5vl6sCu2Blb8BUJ9G2nTGFljkdLMO8UveGEhZCwfUlksHoliI4hj0f1mj79wjnUBJSAwebP%2BiyBXQ7J%2F7rOTswY1R3zL1o0G%2BH8bLeuI2p3wBdpIlRWpNuqAluthZF17Vs%2BJ1nIAMP6GFyKqFYEv7JQtB1RXywLyAJ%2FRZdNptVFyOlLOdoQ2oO3Miae1pMFzoOlrD4dlEpKXVYlU3T5IK4HdPgaofTCwnVTDG1Z%2FABjqkAV5PeFB%2BIyLd1KT1oLWjJTyBhqmEOehjJfSzHmK%2FAq8h1UN9z8LavPSViuYtVHAVYCOjIeNwAlan3wKqXPoYvSM4GEnH9eXJM72BX63O7%2Bs%2Fb%2B%2B6rekMamlWMcLgdd1%2BkLuoTZEwEZsx0GNqVLwroIV211W0vM0TQx7SVAfSxX7rG6OMoVUOaXvX0kcyyIrdItmEOMwvp4TRgGuldFwuahZtGIHb&X-Amz-Signature=53869d7b7a5a4f1b2e4b38a2c705ffa8aa2aff3f290f773d9e2fe29c61670002&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3FAWJKX%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDTjo%2FbshE3cQAx6SrRsaAxa%2BuryiVQBl%2B2Xe%2FykZ4fugIhALZafV6yjmAbZ9Uu%2FR0e9n3ksf7qrbbNWfG6TLzS84htKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtiL4zHGvmU1E4UhMq3AOt4N9XUnwUS8hsm8a3L5Wfkm0YNy%2BZr%2BRfdc%2FC%2BgkDYTttjd758xNFeKXkTDV1y6cbbZWGsNdLWQs%2F1Ojq3mcPYf6jewcSvOlFNzuRYvMeFAvwwxBUShP7F%2B5loSlURrpa540engdr1PZIn20v2%2B0xUhPMmbs1fiz%2FgiEWoiCMSlnW5yK2CBVCRGh7dMsqAjvwLIjHpv1%2FEcQgP0VWYM2FmZzHZxtM3Z5Fqo%2BXMggBJP8wfhgG6U9PDtlW25tRnUUC87AnlJB7A6ANxzhh%2Fg%2BPIEZeLB1tz7e1P6uDGVG1B%2FW4iuwtK3FlxbOaoHMAauWransMAYQcfPpWjTPwTkpcMtOr7xX7ZM3NDy5KaF%2FxIzhGrvqM6tbAFt0lwGHPw9M1nXqCibt6LPqP6aR3es1zzuC5vl6sCu2Blb8BUJ9G2nTGFljkdLMO8UveGEhZCwfUlksHoliI4hj0f1mj79wjnUBJSAwebP%2BiyBXQ7J%2F7rOTswY1R3zL1o0G%2BH8bLeuI2p3wBdpIlRWpNuqAluthZF17Vs%2BJ1nIAMP6GFyKqFYEv7JQtB1RXywLyAJ%2FRZdNptVFyOlLOdoQ2oO3Miae1pMFzoOlrD4dlEpKXVYlU3T5IK4HdPgaofTCwnVTDG1Z%2FABjqkAV5PeFB%2BIyLd1KT1oLWjJTyBhqmEOehjJfSzHmK%2FAq8h1UN9z8LavPSViuYtVHAVYCOjIeNwAlan3wKqXPoYvSM4GEnH9eXJM72BX63O7%2Bs%2Fb%2B%2B6rekMamlWMcLgdd1%2BkLuoTZEwEZsx0GNqVLwroIV211W0vM0TQx7SVAfSxX7rG6OMoVUOaXvX0kcyyIrdItmEOMwvp4TRgGuldFwuahZtGIHb&X-Amz-Signature=ed1f38a9d280a5963b75441da0758a910452ab193a33ed078e302fba8f5cf796&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
