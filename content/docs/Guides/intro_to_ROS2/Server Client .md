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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNYI7TWH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMDFtN4Csfq0A6FWjhCH08wfPt4xj8qw1cpvv70g4BOQIhAJb3IgJwX0jDITnMyz8uDX87da8oIpzcQOfMdSwxmThzKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMIJfbUZEJjApz5e0q3AP%2FtoDZaT6hJ81aHeSdnDS%2B3N98nLURMfarHgb89VjtFJDpN6F6skYcqlwkwEwKWAe%2FWX2YRxqrqkSxd%2BXQnSSlARtVV5sLoqDTOGB4iQrZk094wu%2FT77J%2BOSAlKGhRDE9xXSwYN9Gxx6Nqyl%2FzRcBPs9fmnm4KwsP%2Fmsm%2FAj2iYtlyoPtovl0czwB%2FjqDlpGWmOBx60dNe4KR64mtM%2BXkTsfD%2F%2FgRfjkYLJDMWxgDVRoIApb7nDHf4ZzgTe8wIqIT%2BvCg2OZAJz8hrCRxQ5qXylDM9F5FmYHqGlZUy9%2BX7l0SPETJdI5sgs1GB90RquhNyKN5rK5lDTIO%2FE4MNePjkz6I3G3LkvVZatoEAUzAxakn9%2FnVuwBzEAG5NA3H9%2BklMDRwM%2FD2QaxwcudNVaQupC4%2FHMsa0PL2KbmGLiasbItjUR2s4GxiYD4gQq%2B7ZW%2BOCNa3C7oh3eNDms4raGKuFvFqAL187Cx138V8qHxGYylRj8sCNzgoRjaHExXeB5GRCJE4L6cXMKRQ2rBh%2BqAZExW%2FNvgSTOnUfDQRqR4RtPBGaPpdks93yo0Wfwq8wVj0z%2B718v7M13HfJqzqvH64cTwNZhH1WA65zQbTS7kqOmGdT%2F2cYUq02ZefOYDDquK7EBjqkAfIAhk8I1w5wUyuNIqrDfv%2BNASM3tdAP%2BdnhC0H0afUSiOqq9%2BbhPYB7mhPZwMdxoitYtL4uSF5IJ1811D1P6zpXuzqgR%2BzFxZ%2Fz6IXQICj8z09rV%2FLz7oLuq4mREFo86c8g4wuu%2BpWnIiiV3jfvyE1SW%2BijKQrYL2QY4r%2FldS8Cbor1yURjiiVPxI5OjCXqRa2YU8Z%2BtuxTYE4CEF2rSyxYOENu&X-Amz-Signature=f273f56c4c501d7cebfabaf9eb2f052924812541b87abc7d08e4bf912b6a90ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNYI7TWH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMDFtN4Csfq0A6FWjhCH08wfPt4xj8qw1cpvv70g4BOQIhAJb3IgJwX0jDITnMyz8uDX87da8oIpzcQOfMdSwxmThzKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMIJfbUZEJjApz5e0q3AP%2FtoDZaT6hJ81aHeSdnDS%2B3N98nLURMfarHgb89VjtFJDpN6F6skYcqlwkwEwKWAe%2FWX2YRxqrqkSxd%2BXQnSSlARtVV5sLoqDTOGB4iQrZk094wu%2FT77J%2BOSAlKGhRDE9xXSwYN9Gxx6Nqyl%2FzRcBPs9fmnm4KwsP%2Fmsm%2FAj2iYtlyoPtovl0czwB%2FjqDlpGWmOBx60dNe4KR64mtM%2BXkTsfD%2F%2FgRfjkYLJDMWxgDVRoIApb7nDHf4ZzgTe8wIqIT%2BvCg2OZAJz8hrCRxQ5qXylDM9F5FmYHqGlZUy9%2BX7l0SPETJdI5sgs1GB90RquhNyKN5rK5lDTIO%2FE4MNePjkz6I3G3LkvVZatoEAUzAxakn9%2FnVuwBzEAG5NA3H9%2BklMDRwM%2FD2QaxwcudNVaQupC4%2FHMsa0PL2KbmGLiasbItjUR2s4GxiYD4gQq%2B7ZW%2BOCNa3C7oh3eNDms4raGKuFvFqAL187Cx138V8qHxGYylRj8sCNzgoRjaHExXeB5GRCJE4L6cXMKRQ2rBh%2BqAZExW%2FNvgSTOnUfDQRqR4RtPBGaPpdks93yo0Wfwq8wVj0z%2B718v7M13HfJqzqvH64cTwNZhH1WA65zQbTS7kqOmGdT%2F2cYUq02ZefOYDDquK7EBjqkAfIAhk8I1w5wUyuNIqrDfv%2BNASM3tdAP%2BdnhC0H0afUSiOqq9%2BbhPYB7mhPZwMdxoitYtL4uSF5IJ1811D1P6zpXuzqgR%2BzFxZ%2Fz6IXQICj8z09rV%2FLz7oLuq4mREFo86c8g4wuu%2BpWnIiiV3jfvyE1SW%2BijKQrYL2QY4r%2FldS8Cbor1yURjiiVPxI5OjCXqRa2YU8Z%2BtuxTYE4CEF2rSyxYOENu&X-Amz-Signature=f5938de76a4fd44c7cbc7f396c3937114c3c709d7042185da0879bfa6d88392b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNYI7TWH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMDFtN4Csfq0A6FWjhCH08wfPt4xj8qw1cpvv70g4BOQIhAJb3IgJwX0jDITnMyz8uDX87da8oIpzcQOfMdSwxmThzKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMIJfbUZEJjApz5e0q3AP%2FtoDZaT6hJ81aHeSdnDS%2B3N98nLURMfarHgb89VjtFJDpN6F6skYcqlwkwEwKWAe%2FWX2YRxqrqkSxd%2BXQnSSlARtVV5sLoqDTOGB4iQrZk094wu%2FT77J%2BOSAlKGhRDE9xXSwYN9Gxx6Nqyl%2FzRcBPs9fmnm4KwsP%2Fmsm%2FAj2iYtlyoPtovl0czwB%2FjqDlpGWmOBx60dNe4KR64mtM%2BXkTsfD%2F%2FgRfjkYLJDMWxgDVRoIApb7nDHf4ZzgTe8wIqIT%2BvCg2OZAJz8hrCRxQ5qXylDM9F5FmYHqGlZUy9%2BX7l0SPETJdI5sgs1GB90RquhNyKN5rK5lDTIO%2FE4MNePjkz6I3G3LkvVZatoEAUzAxakn9%2FnVuwBzEAG5NA3H9%2BklMDRwM%2FD2QaxwcudNVaQupC4%2FHMsa0PL2KbmGLiasbItjUR2s4GxiYD4gQq%2B7ZW%2BOCNa3C7oh3eNDms4raGKuFvFqAL187Cx138V8qHxGYylRj8sCNzgoRjaHExXeB5GRCJE4L6cXMKRQ2rBh%2BqAZExW%2FNvgSTOnUfDQRqR4RtPBGaPpdks93yo0Wfwq8wVj0z%2B718v7M13HfJqzqvH64cTwNZhH1WA65zQbTS7kqOmGdT%2F2cYUq02ZefOYDDquK7EBjqkAfIAhk8I1w5wUyuNIqrDfv%2BNASM3tdAP%2BdnhC0H0afUSiOqq9%2BbhPYB7mhPZwMdxoitYtL4uSF5IJ1811D1P6zpXuzqgR%2BzFxZ%2Fz6IXQICj8z09rV%2FLz7oLuq4mREFo86c8g4wuu%2BpWnIiiV3jfvyE1SW%2BijKQrYL2QY4r%2FldS8Cbor1yURjiiVPxI5OjCXqRa2YU8Z%2BtuxTYE4CEF2rSyxYOENu&X-Amz-Signature=ed984e6b0f66693957df4fa7b4e1bba0669b50ee459c8cb5425b49208b1b4a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNYI7TWH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMDFtN4Csfq0A6FWjhCH08wfPt4xj8qw1cpvv70g4BOQIhAJb3IgJwX0jDITnMyz8uDX87da8oIpzcQOfMdSwxmThzKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMIJfbUZEJjApz5e0q3AP%2FtoDZaT6hJ81aHeSdnDS%2B3N98nLURMfarHgb89VjtFJDpN6F6skYcqlwkwEwKWAe%2FWX2YRxqrqkSxd%2BXQnSSlARtVV5sLoqDTOGB4iQrZk094wu%2FT77J%2BOSAlKGhRDE9xXSwYN9Gxx6Nqyl%2FzRcBPs9fmnm4KwsP%2Fmsm%2FAj2iYtlyoPtovl0czwB%2FjqDlpGWmOBx60dNe4KR64mtM%2BXkTsfD%2F%2FgRfjkYLJDMWxgDVRoIApb7nDHf4ZzgTe8wIqIT%2BvCg2OZAJz8hrCRxQ5qXylDM9F5FmYHqGlZUy9%2BX7l0SPETJdI5sgs1GB90RquhNyKN5rK5lDTIO%2FE4MNePjkz6I3G3LkvVZatoEAUzAxakn9%2FnVuwBzEAG5NA3H9%2BklMDRwM%2FD2QaxwcudNVaQupC4%2FHMsa0PL2KbmGLiasbItjUR2s4GxiYD4gQq%2B7ZW%2BOCNa3C7oh3eNDms4raGKuFvFqAL187Cx138V8qHxGYylRj8sCNzgoRjaHExXeB5GRCJE4L6cXMKRQ2rBh%2BqAZExW%2FNvgSTOnUfDQRqR4RtPBGaPpdks93yo0Wfwq8wVj0z%2B718v7M13HfJqzqvH64cTwNZhH1WA65zQbTS7kqOmGdT%2F2cYUq02ZefOYDDquK7EBjqkAfIAhk8I1w5wUyuNIqrDfv%2BNASM3tdAP%2BdnhC0H0afUSiOqq9%2BbhPYB7mhPZwMdxoitYtL4uSF5IJ1811D1P6zpXuzqgR%2BzFxZ%2Fz6IXQICj8z09rV%2FLz7oLuq4mREFo86c8g4wuu%2BpWnIiiV3jfvyE1SW%2BijKQrYL2QY4r%2FldS8Cbor1yURjiiVPxI5OjCXqRa2YU8Z%2BtuxTYE4CEF2rSyxYOENu&X-Amz-Signature=973b4174bc5018d70f03cc3ae59891e114bd80819709959ab80802d37f2134da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNYI7TWH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMDFtN4Csfq0A6FWjhCH08wfPt4xj8qw1cpvv70g4BOQIhAJb3IgJwX0jDITnMyz8uDX87da8oIpzcQOfMdSwxmThzKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMIJfbUZEJjApz5e0q3AP%2FtoDZaT6hJ81aHeSdnDS%2B3N98nLURMfarHgb89VjtFJDpN6F6skYcqlwkwEwKWAe%2FWX2YRxqrqkSxd%2BXQnSSlARtVV5sLoqDTOGB4iQrZk094wu%2FT77J%2BOSAlKGhRDE9xXSwYN9Gxx6Nqyl%2FzRcBPs9fmnm4KwsP%2Fmsm%2FAj2iYtlyoPtovl0czwB%2FjqDlpGWmOBx60dNe4KR64mtM%2BXkTsfD%2F%2FgRfjkYLJDMWxgDVRoIApb7nDHf4ZzgTe8wIqIT%2BvCg2OZAJz8hrCRxQ5qXylDM9F5FmYHqGlZUy9%2BX7l0SPETJdI5sgs1GB90RquhNyKN5rK5lDTIO%2FE4MNePjkz6I3G3LkvVZatoEAUzAxakn9%2FnVuwBzEAG5NA3H9%2BklMDRwM%2FD2QaxwcudNVaQupC4%2FHMsa0PL2KbmGLiasbItjUR2s4GxiYD4gQq%2B7ZW%2BOCNa3C7oh3eNDms4raGKuFvFqAL187Cx138V8qHxGYylRj8sCNzgoRjaHExXeB5GRCJE4L6cXMKRQ2rBh%2BqAZExW%2FNvgSTOnUfDQRqR4RtPBGaPpdks93yo0Wfwq8wVj0z%2B718v7M13HfJqzqvH64cTwNZhH1WA65zQbTS7kqOmGdT%2F2cYUq02ZefOYDDquK7EBjqkAfIAhk8I1w5wUyuNIqrDfv%2BNASM3tdAP%2BdnhC0H0afUSiOqq9%2BbhPYB7mhPZwMdxoitYtL4uSF5IJ1811D1P6zpXuzqgR%2BzFxZ%2Fz6IXQICj8z09rV%2FLz7oLuq4mREFo86c8g4wuu%2BpWnIiiV3jfvyE1SW%2BijKQrYL2QY4r%2FldS8Cbor1yURjiiVPxI5OjCXqRa2YU8Z%2BtuxTYE4CEF2rSyxYOENu&X-Amz-Signature=24189aaab8664f2e9ee830faa23b20e2eb9cc2ca33155112517ae67e082c9ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
