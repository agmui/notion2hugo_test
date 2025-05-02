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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY66AJIK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDsl4hT%2FCen4CVHp8FS0yfWQ7193TCOx9IZnJVeMxOeTAIhAL5uUsaMpG6IYWjR8H9l2mYUaBKA6%2BO3lJwRik9%2F9BUAKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3vsmkpd1Wq94W1Acq3AOh7mOXrHcJbKK0eGRqQtf0babSJ5Z2Z8sXRF0hwgpjFazHQxeN6TQj0qjEVPAlOPIqCr4Sr6HP3pyLA8uo9jfONqOa4U%2Bac1eq6iw%2FdEw7dXQ4I4KWYNimxG5xbfbNYSHUuZhOKF8etwyPQtCS%2B2fvZr5Rn3MecQwmuZWLTDTHzZoC%2B2hWBi49KKACtKqwanAMJiQWos7B%2BLfak%2B8CWd%2FtiR9a9n7TDKMnPLUdZx3%2Fc269PvwNlR%2BjPXH8vvPxJhI9KQPCCEjoFir2qIa%2BQbf0zdVkVLJbjPW4%2FE4%2FKft69i9O7B4fl3FpHsd3ov5coDH%2FWpI%2BKo9azwQqePj1tvNSPz98ZA9uMy7A6aQHmN6LP7MpiPUctvrm2yEtIkKTVq0pUQyf62LkoxwK7N97RrCD%2BrylG%2B6CygyKYckSe4HitTblRqUeiycvho%2FyAykcaFg9IqXFbYMtSGLu0bEFzyx6dAtBs65SeyM4D0boXkH8cdsAbqND8CI9uBhmvfRioFyH7gSQEwLMVxZLhXpKBDsdptlY%2FXxPyb0lu0eNOwCSUezRHqs6j2HyvxHcLGvSWaDK3UGoV8eE98%2B2aXbIvsXYPEtuZAxvTvzufVeyIPGERFNFxmKSv0ONzQp3kTCUqdLABjqkAcJjDOJTY31avYC6VdH%2BW8qbT7bSdqRQhKI5m9lcoVNPmMiN4myR%2BB%2FL2MxjsXXHV6ChFI5%2FRjkQ%2FovrO5tJ79Kzb1T2Bs4OWIKpZO3jDNNuO1E5EyPeytICPDi8WNrzRfeKVouOhFS09WSytRWf85FED%2BrP5gC0%2Fdl%2Bc3Z07MMWzlnYZsYDSnyVmpf96ThnGSormE%2BlcfydNojqyVwIrkpV5x46&X-Amz-Signature=be0e9dd9f0dc8f4289bb659d731fdee263492e9c2923bb718f7ca7300fae0ac0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY66AJIK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDsl4hT%2FCen4CVHp8FS0yfWQ7193TCOx9IZnJVeMxOeTAIhAL5uUsaMpG6IYWjR8H9l2mYUaBKA6%2BO3lJwRik9%2F9BUAKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3vsmkpd1Wq94W1Acq3AOh7mOXrHcJbKK0eGRqQtf0babSJ5Z2Z8sXRF0hwgpjFazHQxeN6TQj0qjEVPAlOPIqCr4Sr6HP3pyLA8uo9jfONqOa4U%2Bac1eq6iw%2FdEw7dXQ4I4KWYNimxG5xbfbNYSHUuZhOKF8etwyPQtCS%2B2fvZr5Rn3MecQwmuZWLTDTHzZoC%2B2hWBi49KKACtKqwanAMJiQWos7B%2BLfak%2B8CWd%2FtiR9a9n7TDKMnPLUdZx3%2Fc269PvwNlR%2BjPXH8vvPxJhI9KQPCCEjoFir2qIa%2BQbf0zdVkVLJbjPW4%2FE4%2FKft69i9O7B4fl3FpHsd3ov5coDH%2FWpI%2BKo9azwQqePj1tvNSPz98ZA9uMy7A6aQHmN6LP7MpiPUctvrm2yEtIkKTVq0pUQyf62LkoxwK7N97RrCD%2BrylG%2B6CygyKYckSe4HitTblRqUeiycvho%2FyAykcaFg9IqXFbYMtSGLu0bEFzyx6dAtBs65SeyM4D0boXkH8cdsAbqND8CI9uBhmvfRioFyH7gSQEwLMVxZLhXpKBDsdptlY%2FXxPyb0lu0eNOwCSUezRHqs6j2HyvxHcLGvSWaDK3UGoV8eE98%2B2aXbIvsXYPEtuZAxvTvzufVeyIPGERFNFxmKSv0ONzQp3kTCUqdLABjqkAcJjDOJTY31avYC6VdH%2BW8qbT7bSdqRQhKI5m9lcoVNPmMiN4myR%2BB%2FL2MxjsXXHV6ChFI5%2FRjkQ%2FovrO5tJ79Kzb1T2Bs4OWIKpZO3jDNNuO1E5EyPeytICPDi8WNrzRfeKVouOhFS09WSytRWf85FED%2BrP5gC0%2Fdl%2Bc3Z07MMWzlnYZsYDSnyVmpf96ThnGSormE%2BlcfydNojqyVwIrkpV5x46&X-Amz-Signature=176ccf8ff30ac8dc7057dc3fa40778abd2fec2894665ac0482d6a85daaa028bb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY66AJIK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDsl4hT%2FCen4CVHp8FS0yfWQ7193TCOx9IZnJVeMxOeTAIhAL5uUsaMpG6IYWjR8H9l2mYUaBKA6%2BO3lJwRik9%2F9BUAKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3vsmkpd1Wq94W1Acq3AOh7mOXrHcJbKK0eGRqQtf0babSJ5Z2Z8sXRF0hwgpjFazHQxeN6TQj0qjEVPAlOPIqCr4Sr6HP3pyLA8uo9jfONqOa4U%2Bac1eq6iw%2FdEw7dXQ4I4KWYNimxG5xbfbNYSHUuZhOKF8etwyPQtCS%2B2fvZr5Rn3MecQwmuZWLTDTHzZoC%2B2hWBi49KKACtKqwanAMJiQWos7B%2BLfak%2B8CWd%2FtiR9a9n7TDKMnPLUdZx3%2Fc269PvwNlR%2BjPXH8vvPxJhI9KQPCCEjoFir2qIa%2BQbf0zdVkVLJbjPW4%2FE4%2FKft69i9O7B4fl3FpHsd3ov5coDH%2FWpI%2BKo9azwQqePj1tvNSPz98ZA9uMy7A6aQHmN6LP7MpiPUctvrm2yEtIkKTVq0pUQyf62LkoxwK7N97RrCD%2BrylG%2B6CygyKYckSe4HitTblRqUeiycvho%2FyAykcaFg9IqXFbYMtSGLu0bEFzyx6dAtBs65SeyM4D0boXkH8cdsAbqND8CI9uBhmvfRioFyH7gSQEwLMVxZLhXpKBDsdptlY%2FXxPyb0lu0eNOwCSUezRHqs6j2HyvxHcLGvSWaDK3UGoV8eE98%2B2aXbIvsXYPEtuZAxvTvzufVeyIPGERFNFxmKSv0ONzQp3kTCUqdLABjqkAcJjDOJTY31avYC6VdH%2BW8qbT7bSdqRQhKI5m9lcoVNPmMiN4myR%2BB%2FL2MxjsXXHV6ChFI5%2FRjkQ%2FovrO5tJ79Kzb1T2Bs4OWIKpZO3jDNNuO1E5EyPeytICPDi8WNrzRfeKVouOhFS09WSytRWf85FED%2BrP5gC0%2Fdl%2Bc3Z07MMWzlnYZsYDSnyVmpf96ThnGSormE%2BlcfydNojqyVwIrkpV5x46&X-Amz-Signature=8f3706577605890cbbc6edbff3605bb79e3eb545e99a776ce80fd3f1f9a7d278&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY66AJIK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDsl4hT%2FCen4CVHp8FS0yfWQ7193TCOx9IZnJVeMxOeTAIhAL5uUsaMpG6IYWjR8H9l2mYUaBKA6%2BO3lJwRik9%2F9BUAKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3vsmkpd1Wq94W1Acq3AOh7mOXrHcJbKK0eGRqQtf0babSJ5Z2Z8sXRF0hwgpjFazHQxeN6TQj0qjEVPAlOPIqCr4Sr6HP3pyLA8uo9jfONqOa4U%2Bac1eq6iw%2FdEw7dXQ4I4KWYNimxG5xbfbNYSHUuZhOKF8etwyPQtCS%2B2fvZr5Rn3MecQwmuZWLTDTHzZoC%2B2hWBi49KKACtKqwanAMJiQWos7B%2BLfak%2B8CWd%2FtiR9a9n7TDKMnPLUdZx3%2Fc269PvwNlR%2BjPXH8vvPxJhI9KQPCCEjoFir2qIa%2BQbf0zdVkVLJbjPW4%2FE4%2FKft69i9O7B4fl3FpHsd3ov5coDH%2FWpI%2BKo9azwQqePj1tvNSPz98ZA9uMy7A6aQHmN6LP7MpiPUctvrm2yEtIkKTVq0pUQyf62LkoxwK7N97RrCD%2BrylG%2B6CygyKYckSe4HitTblRqUeiycvho%2FyAykcaFg9IqXFbYMtSGLu0bEFzyx6dAtBs65SeyM4D0boXkH8cdsAbqND8CI9uBhmvfRioFyH7gSQEwLMVxZLhXpKBDsdptlY%2FXxPyb0lu0eNOwCSUezRHqs6j2HyvxHcLGvSWaDK3UGoV8eE98%2B2aXbIvsXYPEtuZAxvTvzufVeyIPGERFNFxmKSv0ONzQp3kTCUqdLABjqkAcJjDOJTY31avYC6VdH%2BW8qbT7bSdqRQhKI5m9lcoVNPmMiN4myR%2BB%2FL2MxjsXXHV6ChFI5%2FRjkQ%2FovrO5tJ79Kzb1T2Bs4OWIKpZO3jDNNuO1E5EyPeytICPDi8WNrzRfeKVouOhFS09WSytRWf85FED%2BrP5gC0%2Fdl%2Bc3Z07MMWzlnYZsYDSnyVmpf96ThnGSormE%2BlcfydNojqyVwIrkpV5x46&X-Amz-Signature=214efbdd0c64677eee736eb923b6885ebac1debe07b70a9bca0ce8be5523005e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY66AJIK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDsl4hT%2FCen4CVHp8FS0yfWQ7193TCOx9IZnJVeMxOeTAIhAL5uUsaMpG6IYWjR8H9l2mYUaBKA6%2BO3lJwRik9%2F9BUAKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3vsmkpd1Wq94W1Acq3AOh7mOXrHcJbKK0eGRqQtf0babSJ5Z2Z8sXRF0hwgpjFazHQxeN6TQj0qjEVPAlOPIqCr4Sr6HP3pyLA8uo9jfONqOa4U%2Bac1eq6iw%2FdEw7dXQ4I4KWYNimxG5xbfbNYSHUuZhOKF8etwyPQtCS%2B2fvZr5Rn3MecQwmuZWLTDTHzZoC%2B2hWBi49KKACtKqwanAMJiQWos7B%2BLfak%2B8CWd%2FtiR9a9n7TDKMnPLUdZx3%2Fc269PvwNlR%2BjPXH8vvPxJhI9KQPCCEjoFir2qIa%2BQbf0zdVkVLJbjPW4%2FE4%2FKft69i9O7B4fl3FpHsd3ov5coDH%2FWpI%2BKo9azwQqePj1tvNSPz98ZA9uMy7A6aQHmN6LP7MpiPUctvrm2yEtIkKTVq0pUQyf62LkoxwK7N97RrCD%2BrylG%2B6CygyKYckSe4HitTblRqUeiycvho%2FyAykcaFg9IqXFbYMtSGLu0bEFzyx6dAtBs65SeyM4D0boXkH8cdsAbqND8CI9uBhmvfRioFyH7gSQEwLMVxZLhXpKBDsdptlY%2FXxPyb0lu0eNOwCSUezRHqs6j2HyvxHcLGvSWaDK3UGoV8eE98%2B2aXbIvsXYPEtuZAxvTvzufVeyIPGERFNFxmKSv0ONzQp3kTCUqdLABjqkAcJjDOJTY31avYC6VdH%2BW8qbT7bSdqRQhKI5m9lcoVNPmMiN4myR%2BB%2FL2MxjsXXHV6ChFI5%2FRjkQ%2FovrO5tJ79Kzb1T2Bs4OWIKpZO3jDNNuO1E5EyPeytICPDi8WNrzRfeKVouOhFS09WSytRWf85FED%2BrP5gC0%2Fdl%2Bc3Z07MMWzlnYZsYDSnyVmpf96ThnGSormE%2BlcfydNojqyVwIrkpV5x46&X-Amz-Signature=d9783af7e954ffe108c0861752c08f7288fa2dba92d8a5b7415b7f49d7aa915a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
