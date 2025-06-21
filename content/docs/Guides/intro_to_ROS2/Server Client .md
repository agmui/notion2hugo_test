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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE7YZA37%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3ROaxSpjLoKYtmLyy%2BxtM9gjMosQ0Iz9Sgxi5zd07SAiBx59L4e0R6pO%2FadxbbqAXlCU0mRONSFghCtSipDOL0%2FyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVv%2FVii3Jbom%2BtVY0KtwDV4wxPaHDBo6EftX2cj402u3XcutDllgVRy0Aw0W2opM9ukXyq1QVd9OkJXuqVRHmnxqNX5Nf1WZSUrI4HmUUftqNVJlOEo5ooR8C5ZEQX88VhAwDO%2B7uH4WfIyuf7bsIII9bTEjc3Zsip%2FAUHS9yfdyo9lk21WZIwwHZ8HI7RwvV0jRhVE1Oj%2BSZ9zGEkR4Kzn9I7ao2wOgqxGioE1GKeGUue%2BIJ%2FffUnRbVK4wTw1pwfZBXQVyUej88kzsS6S06ugmRB02OZqn2PjhY%2BDTuWGhWzf6MGqeaBW012F4EcypXE%2FBujsZAJSx1EMYDOXbK6WDbJbeKlB88A7KT59kWhD9xikM9cOy44aiO3hpGOEq5h2L5RSwAsAvGsBRuhzuOMqOcmGeCHIAP1UrzXnvuR2%2FHsRsGOHJJpd%2BBoAXeRPMN6CSdGspr%2F%2FqpHclf%2BqzikLwUC6SzrYXUQ1SBkUnjee7nUEY8rLodsrvRDGYYCt0%2BHJPmBpCjarFi0wx01%2BrP6lnAWGbJv0G9IYy1hzWGpnURhqhTyASFTGczm5w7GICTgqSZpHX4uaAZZfpo62xICVFd4eZYjmGzJjcQNut9A1Zoc1%2Bb0sQDah8xu7Snd3hWAzxKe16d8DDcAMowg5rZwgY6pgG7htd8JetPBvUzbyU4Ut5cPooYg2HxCmSaY%2Fa0UgNTV2gj0QJv37TOFp8v%2FA%2FXkEfSBzJ6WHh3uckURcgRTJwYvyRi6qJPaYFiXxfWQrA20%2F%2BGG0trD%2F9DTu1yRfdHcDup1qpz6%2BnEbRK1CDWR%2BMQySlC5wZODXiv5Lstox8O8kmLUOX5acgmeOelO2lLIHDjImnAJKRLPBJRDbIC73egdzAGWMCp3&X-Amz-Signature=126c0564cda8429ce96a0326ec3d4e33860c46fe9dbca3a14ff25281e347dddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE7YZA37%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3ROaxSpjLoKYtmLyy%2BxtM9gjMosQ0Iz9Sgxi5zd07SAiBx59L4e0R6pO%2FadxbbqAXlCU0mRONSFghCtSipDOL0%2FyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVv%2FVii3Jbom%2BtVY0KtwDV4wxPaHDBo6EftX2cj402u3XcutDllgVRy0Aw0W2opM9ukXyq1QVd9OkJXuqVRHmnxqNX5Nf1WZSUrI4HmUUftqNVJlOEo5ooR8C5ZEQX88VhAwDO%2B7uH4WfIyuf7bsIII9bTEjc3Zsip%2FAUHS9yfdyo9lk21WZIwwHZ8HI7RwvV0jRhVE1Oj%2BSZ9zGEkR4Kzn9I7ao2wOgqxGioE1GKeGUue%2BIJ%2FffUnRbVK4wTw1pwfZBXQVyUej88kzsS6S06ugmRB02OZqn2PjhY%2BDTuWGhWzf6MGqeaBW012F4EcypXE%2FBujsZAJSx1EMYDOXbK6WDbJbeKlB88A7KT59kWhD9xikM9cOy44aiO3hpGOEq5h2L5RSwAsAvGsBRuhzuOMqOcmGeCHIAP1UrzXnvuR2%2FHsRsGOHJJpd%2BBoAXeRPMN6CSdGspr%2F%2FqpHclf%2BqzikLwUC6SzrYXUQ1SBkUnjee7nUEY8rLodsrvRDGYYCt0%2BHJPmBpCjarFi0wx01%2BrP6lnAWGbJv0G9IYy1hzWGpnURhqhTyASFTGczm5w7GICTgqSZpHX4uaAZZfpo62xICVFd4eZYjmGzJjcQNut9A1Zoc1%2Bb0sQDah8xu7Snd3hWAzxKe16d8DDcAMowg5rZwgY6pgG7htd8JetPBvUzbyU4Ut5cPooYg2HxCmSaY%2Fa0UgNTV2gj0QJv37TOFp8v%2FA%2FXkEfSBzJ6WHh3uckURcgRTJwYvyRi6qJPaYFiXxfWQrA20%2F%2BGG0trD%2F9DTu1yRfdHcDup1qpz6%2BnEbRK1CDWR%2BMQySlC5wZODXiv5Lstox8O8kmLUOX5acgmeOelO2lLIHDjImnAJKRLPBJRDbIC73egdzAGWMCp3&X-Amz-Signature=be90a6564cc64ef01e89852233f70b575bf3c299f7f6fcdcf2f575323671a6c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE7YZA37%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3ROaxSpjLoKYtmLyy%2BxtM9gjMosQ0Iz9Sgxi5zd07SAiBx59L4e0R6pO%2FadxbbqAXlCU0mRONSFghCtSipDOL0%2FyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVv%2FVii3Jbom%2BtVY0KtwDV4wxPaHDBo6EftX2cj402u3XcutDllgVRy0Aw0W2opM9ukXyq1QVd9OkJXuqVRHmnxqNX5Nf1WZSUrI4HmUUftqNVJlOEo5ooR8C5ZEQX88VhAwDO%2B7uH4WfIyuf7bsIII9bTEjc3Zsip%2FAUHS9yfdyo9lk21WZIwwHZ8HI7RwvV0jRhVE1Oj%2BSZ9zGEkR4Kzn9I7ao2wOgqxGioE1GKeGUue%2BIJ%2FffUnRbVK4wTw1pwfZBXQVyUej88kzsS6S06ugmRB02OZqn2PjhY%2BDTuWGhWzf6MGqeaBW012F4EcypXE%2FBujsZAJSx1EMYDOXbK6WDbJbeKlB88A7KT59kWhD9xikM9cOy44aiO3hpGOEq5h2L5RSwAsAvGsBRuhzuOMqOcmGeCHIAP1UrzXnvuR2%2FHsRsGOHJJpd%2BBoAXeRPMN6CSdGspr%2F%2FqpHclf%2BqzikLwUC6SzrYXUQ1SBkUnjee7nUEY8rLodsrvRDGYYCt0%2BHJPmBpCjarFi0wx01%2BrP6lnAWGbJv0G9IYy1hzWGpnURhqhTyASFTGczm5w7GICTgqSZpHX4uaAZZfpo62xICVFd4eZYjmGzJjcQNut9A1Zoc1%2Bb0sQDah8xu7Snd3hWAzxKe16d8DDcAMowg5rZwgY6pgG7htd8JetPBvUzbyU4Ut5cPooYg2HxCmSaY%2Fa0UgNTV2gj0QJv37TOFp8v%2FA%2FXkEfSBzJ6WHh3uckURcgRTJwYvyRi6qJPaYFiXxfWQrA20%2F%2BGG0trD%2F9DTu1yRfdHcDup1qpz6%2BnEbRK1CDWR%2BMQySlC5wZODXiv5Lstox8O8kmLUOX5acgmeOelO2lLIHDjImnAJKRLPBJRDbIC73egdzAGWMCp3&X-Amz-Signature=57976fb94b9c7faa40489130108af9d96aa7aae61c3ceb522ed93df8567f6002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE7YZA37%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3ROaxSpjLoKYtmLyy%2BxtM9gjMosQ0Iz9Sgxi5zd07SAiBx59L4e0R6pO%2FadxbbqAXlCU0mRONSFghCtSipDOL0%2FyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVv%2FVii3Jbom%2BtVY0KtwDV4wxPaHDBo6EftX2cj402u3XcutDllgVRy0Aw0W2opM9ukXyq1QVd9OkJXuqVRHmnxqNX5Nf1WZSUrI4HmUUftqNVJlOEo5ooR8C5ZEQX88VhAwDO%2B7uH4WfIyuf7bsIII9bTEjc3Zsip%2FAUHS9yfdyo9lk21WZIwwHZ8HI7RwvV0jRhVE1Oj%2BSZ9zGEkR4Kzn9I7ao2wOgqxGioE1GKeGUue%2BIJ%2FffUnRbVK4wTw1pwfZBXQVyUej88kzsS6S06ugmRB02OZqn2PjhY%2BDTuWGhWzf6MGqeaBW012F4EcypXE%2FBujsZAJSx1EMYDOXbK6WDbJbeKlB88A7KT59kWhD9xikM9cOy44aiO3hpGOEq5h2L5RSwAsAvGsBRuhzuOMqOcmGeCHIAP1UrzXnvuR2%2FHsRsGOHJJpd%2BBoAXeRPMN6CSdGspr%2F%2FqpHclf%2BqzikLwUC6SzrYXUQ1SBkUnjee7nUEY8rLodsrvRDGYYCt0%2BHJPmBpCjarFi0wx01%2BrP6lnAWGbJv0G9IYy1hzWGpnURhqhTyASFTGczm5w7GICTgqSZpHX4uaAZZfpo62xICVFd4eZYjmGzJjcQNut9A1Zoc1%2Bb0sQDah8xu7Snd3hWAzxKe16d8DDcAMowg5rZwgY6pgG7htd8JetPBvUzbyU4Ut5cPooYg2HxCmSaY%2Fa0UgNTV2gj0QJv37TOFp8v%2FA%2FXkEfSBzJ6WHh3uckURcgRTJwYvyRi6qJPaYFiXxfWQrA20%2F%2BGG0trD%2F9DTu1yRfdHcDup1qpz6%2BnEbRK1CDWR%2BMQySlC5wZODXiv5Lstox8O8kmLUOX5acgmeOelO2lLIHDjImnAJKRLPBJRDbIC73egdzAGWMCp3&X-Amz-Signature=6435443e88422de7af1aa67d5a2108c61b1843409d2928929c82a8c4eebd0d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE7YZA37%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3ROaxSpjLoKYtmLyy%2BxtM9gjMosQ0Iz9Sgxi5zd07SAiBx59L4e0R6pO%2FadxbbqAXlCU0mRONSFghCtSipDOL0%2FyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVv%2FVii3Jbom%2BtVY0KtwDV4wxPaHDBo6EftX2cj402u3XcutDllgVRy0Aw0W2opM9ukXyq1QVd9OkJXuqVRHmnxqNX5Nf1WZSUrI4HmUUftqNVJlOEo5ooR8C5ZEQX88VhAwDO%2B7uH4WfIyuf7bsIII9bTEjc3Zsip%2FAUHS9yfdyo9lk21WZIwwHZ8HI7RwvV0jRhVE1Oj%2BSZ9zGEkR4Kzn9I7ao2wOgqxGioE1GKeGUue%2BIJ%2FffUnRbVK4wTw1pwfZBXQVyUej88kzsS6S06ugmRB02OZqn2PjhY%2BDTuWGhWzf6MGqeaBW012F4EcypXE%2FBujsZAJSx1EMYDOXbK6WDbJbeKlB88A7KT59kWhD9xikM9cOy44aiO3hpGOEq5h2L5RSwAsAvGsBRuhzuOMqOcmGeCHIAP1UrzXnvuR2%2FHsRsGOHJJpd%2BBoAXeRPMN6CSdGspr%2F%2FqpHclf%2BqzikLwUC6SzrYXUQ1SBkUnjee7nUEY8rLodsrvRDGYYCt0%2BHJPmBpCjarFi0wx01%2BrP6lnAWGbJv0G9IYy1hzWGpnURhqhTyASFTGczm5w7GICTgqSZpHX4uaAZZfpo62xICVFd4eZYjmGzJjcQNut9A1Zoc1%2Bb0sQDah8xu7Snd3hWAzxKe16d8DDcAMowg5rZwgY6pgG7htd8JetPBvUzbyU4Ut5cPooYg2HxCmSaY%2Fa0UgNTV2gj0QJv37TOFp8v%2FA%2FXkEfSBzJ6WHh3uckURcgRTJwYvyRi6qJPaYFiXxfWQrA20%2F%2BGG0trD%2F9DTu1yRfdHcDup1qpz6%2BnEbRK1CDWR%2BMQySlC5wZODXiv5Lstox8O8kmLUOX5acgmeOelO2lLIHDjImnAJKRLPBJRDbIC73egdzAGWMCp3&X-Amz-Signature=250b8282b701b9727df832356e20bdb06b3dff9329a81675cb9a2de8c28ad1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
