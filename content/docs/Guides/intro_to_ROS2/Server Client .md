---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZ5J7CW%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWW7D1QA4%2ByB%2BaLi9ZYJNL%2FeFXiUKLyDyRc8KDtgcy8gIhAIAPTvdVuyJyPTT4Fd1jqLDTygwaXCy2%2BEiU1YX57PRfKv8DCH4QABoMNjM3NDIzMTgzODA1IgxlclfTlc1yQbVRib8q3AOUO%2BfO0dV8qWYxefrHsHpmPMvMgg8AXCWVmcAIDMwYZWu8ohr%2BFKwzLy1gwRuTTF8hS4vsO3uR%2FV6NuNNZw8piqwFOu9JetbR1bhqOw%2B3jWO%2FCotEa8SiugWhrrmA2heK41kpIpSCYRFSun54LDQQBzNVQDFbV9IxPN8ARdBbLg8FNXD2WZ%2BJNwiax3FZWhsh6g5LBFYsEkF8V00YLrXW%2BIWslbhehWYHKroGNWSFFWcXfXEH7P0RprHtjGIfDkuPBJfIZybesHcHMN645SCCey2MdRbQu0SMkXsPvvppfx8MS9kpG8H9LbdyGvo6GeVxgTuoBN9VOyVYHYtQ9bKjeHX4grxJVgOFeCxd0w2mzhkef6jBnQBLp1Pw%2B3ZmGSGp5CO452yg467PBOZQnYZIrdrXRnoLWiEWdm7t%2FPS61Htu%2B0kK111USMsbTH7XFgPMFOTHGx58H4MIKo8I%2FgK1AvZNhxJ6ytT2hGiAqMuSOQajoB4GD2bX7o5eq2RYhIJOT6xLiwLN3qJRWlDW7DX%2F0YOyxtDS7eQ2vYCOFo9%2BLObHHk3pBsX6I0yJ2oGgAL18Amy6gNR85%2FlSp7pYRwaA9hv2m3BeyJ6ACsFq2Pe8j2NDNQAR6rgHdyzmlDDDi3anIBjqkAb51Q7zHny4gcasvHHdarlNduSrbNW0D4Iluak%2Fuu5sIcn4OggO%2BZRQ8jVwTcNQ4D5TAyOfnNlA7HxrcqokxRkv%2FA0se0AjoBhM4gsazOJeUYCcY08wSdqmlgNWzuXvy2yZev7Jwphdhf4oZyaCc%2BfsIj4uWBz6c5mm9MVbsjDchRLLDaZ3hadkRkWrNc%2BGUHSWf6frOzNnlssqSAti32bF1Qe6P&X-Amz-Signature=2a5004946711aef5a646471f92061d97a522f3a708ce05685be8833f2fe4d787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZ5J7CW%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWW7D1QA4%2ByB%2BaLi9ZYJNL%2FeFXiUKLyDyRc8KDtgcy8gIhAIAPTvdVuyJyPTT4Fd1jqLDTygwaXCy2%2BEiU1YX57PRfKv8DCH4QABoMNjM3NDIzMTgzODA1IgxlclfTlc1yQbVRib8q3AOUO%2BfO0dV8qWYxefrHsHpmPMvMgg8AXCWVmcAIDMwYZWu8ohr%2BFKwzLy1gwRuTTF8hS4vsO3uR%2FV6NuNNZw8piqwFOu9JetbR1bhqOw%2B3jWO%2FCotEa8SiugWhrrmA2heK41kpIpSCYRFSun54LDQQBzNVQDFbV9IxPN8ARdBbLg8FNXD2WZ%2BJNwiax3FZWhsh6g5LBFYsEkF8V00YLrXW%2BIWslbhehWYHKroGNWSFFWcXfXEH7P0RprHtjGIfDkuPBJfIZybesHcHMN645SCCey2MdRbQu0SMkXsPvvppfx8MS9kpG8H9LbdyGvo6GeVxgTuoBN9VOyVYHYtQ9bKjeHX4grxJVgOFeCxd0w2mzhkef6jBnQBLp1Pw%2B3ZmGSGp5CO452yg467PBOZQnYZIrdrXRnoLWiEWdm7t%2FPS61Htu%2B0kK111USMsbTH7XFgPMFOTHGx58H4MIKo8I%2FgK1AvZNhxJ6ytT2hGiAqMuSOQajoB4GD2bX7o5eq2RYhIJOT6xLiwLN3qJRWlDW7DX%2F0YOyxtDS7eQ2vYCOFo9%2BLObHHk3pBsX6I0yJ2oGgAL18Amy6gNR85%2FlSp7pYRwaA9hv2m3BeyJ6ACsFq2Pe8j2NDNQAR6rgHdyzmlDDDi3anIBjqkAb51Q7zHny4gcasvHHdarlNduSrbNW0D4Iluak%2Fuu5sIcn4OggO%2BZRQ8jVwTcNQ4D5TAyOfnNlA7HxrcqokxRkv%2FA0se0AjoBhM4gsazOJeUYCcY08wSdqmlgNWzuXvy2yZev7Jwphdhf4oZyaCc%2BfsIj4uWBz6c5mm9MVbsjDchRLLDaZ3hadkRkWrNc%2BGUHSWf6frOzNnlssqSAti32bF1Qe6P&X-Amz-Signature=ace87d62efa9f6ce13a2c7a12524d7c7a6550857f3482aed02a8454f71ae987a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZ5J7CW%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWW7D1QA4%2ByB%2BaLi9ZYJNL%2FeFXiUKLyDyRc8KDtgcy8gIhAIAPTvdVuyJyPTT4Fd1jqLDTygwaXCy2%2BEiU1YX57PRfKv8DCH4QABoMNjM3NDIzMTgzODA1IgxlclfTlc1yQbVRib8q3AOUO%2BfO0dV8qWYxefrHsHpmPMvMgg8AXCWVmcAIDMwYZWu8ohr%2BFKwzLy1gwRuTTF8hS4vsO3uR%2FV6NuNNZw8piqwFOu9JetbR1bhqOw%2B3jWO%2FCotEa8SiugWhrrmA2heK41kpIpSCYRFSun54LDQQBzNVQDFbV9IxPN8ARdBbLg8FNXD2WZ%2BJNwiax3FZWhsh6g5LBFYsEkF8V00YLrXW%2BIWslbhehWYHKroGNWSFFWcXfXEH7P0RprHtjGIfDkuPBJfIZybesHcHMN645SCCey2MdRbQu0SMkXsPvvppfx8MS9kpG8H9LbdyGvo6GeVxgTuoBN9VOyVYHYtQ9bKjeHX4grxJVgOFeCxd0w2mzhkef6jBnQBLp1Pw%2B3ZmGSGp5CO452yg467PBOZQnYZIrdrXRnoLWiEWdm7t%2FPS61Htu%2B0kK111USMsbTH7XFgPMFOTHGx58H4MIKo8I%2FgK1AvZNhxJ6ytT2hGiAqMuSOQajoB4GD2bX7o5eq2RYhIJOT6xLiwLN3qJRWlDW7DX%2F0YOyxtDS7eQ2vYCOFo9%2BLObHHk3pBsX6I0yJ2oGgAL18Amy6gNR85%2FlSp7pYRwaA9hv2m3BeyJ6ACsFq2Pe8j2NDNQAR6rgHdyzmlDDDi3anIBjqkAb51Q7zHny4gcasvHHdarlNduSrbNW0D4Iluak%2Fuu5sIcn4OggO%2BZRQ8jVwTcNQ4D5TAyOfnNlA7HxrcqokxRkv%2FA0se0AjoBhM4gsazOJeUYCcY08wSdqmlgNWzuXvy2yZev7Jwphdhf4oZyaCc%2BfsIj4uWBz6c5mm9MVbsjDchRLLDaZ3hadkRkWrNc%2BGUHSWf6frOzNnlssqSAti32bF1Qe6P&X-Amz-Signature=3790e56c973ed387b29610622f062e69631812e15b77fa6b68cecad48ccb1a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZ5J7CW%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWW7D1QA4%2ByB%2BaLi9ZYJNL%2FeFXiUKLyDyRc8KDtgcy8gIhAIAPTvdVuyJyPTT4Fd1jqLDTygwaXCy2%2BEiU1YX57PRfKv8DCH4QABoMNjM3NDIzMTgzODA1IgxlclfTlc1yQbVRib8q3AOUO%2BfO0dV8qWYxefrHsHpmPMvMgg8AXCWVmcAIDMwYZWu8ohr%2BFKwzLy1gwRuTTF8hS4vsO3uR%2FV6NuNNZw8piqwFOu9JetbR1bhqOw%2B3jWO%2FCotEa8SiugWhrrmA2heK41kpIpSCYRFSun54LDQQBzNVQDFbV9IxPN8ARdBbLg8FNXD2WZ%2BJNwiax3FZWhsh6g5LBFYsEkF8V00YLrXW%2BIWslbhehWYHKroGNWSFFWcXfXEH7P0RprHtjGIfDkuPBJfIZybesHcHMN645SCCey2MdRbQu0SMkXsPvvppfx8MS9kpG8H9LbdyGvo6GeVxgTuoBN9VOyVYHYtQ9bKjeHX4grxJVgOFeCxd0w2mzhkef6jBnQBLp1Pw%2B3ZmGSGp5CO452yg467PBOZQnYZIrdrXRnoLWiEWdm7t%2FPS61Htu%2B0kK111USMsbTH7XFgPMFOTHGx58H4MIKo8I%2FgK1AvZNhxJ6ytT2hGiAqMuSOQajoB4GD2bX7o5eq2RYhIJOT6xLiwLN3qJRWlDW7DX%2F0YOyxtDS7eQ2vYCOFo9%2BLObHHk3pBsX6I0yJ2oGgAL18Amy6gNR85%2FlSp7pYRwaA9hv2m3BeyJ6ACsFq2Pe8j2NDNQAR6rgHdyzmlDDDi3anIBjqkAb51Q7zHny4gcasvHHdarlNduSrbNW0D4Iluak%2Fuu5sIcn4OggO%2BZRQ8jVwTcNQ4D5TAyOfnNlA7HxrcqokxRkv%2FA0se0AjoBhM4gsazOJeUYCcY08wSdqmlgNWzuXvy2yZev7Jwphdhf4oZyaCc%2BfsIj4uWBz6c5mm9MVbsjDchRLLDaZ3hadkRkWrNc%2BGUHSWf6frOzNnlssqSAti32bF1Qe6P&X-Amz-Signature=1dcf0125de3c47ed73838e537077c86132df0338b89b6d0a3fc08680de9f38ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZ5J7CW%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWW7D1QA4%2ByB%2BaLi9ZYJNL%2FeFXiUKLyDyRc8KDtgcy8gIhAIAPTvdVuyJyPTT4Fd1jqLDTygwaXCy2%2BEiU1YX57PRfKv8DCH4QABoMNjM3NDIzMTgzODA1IgxlclfTlc1yQbVRib8q3AOUO%2BfO0dV8qWYxefrHsHpmPMvMgg8AXCWVmcAIDMwYZWu8ohr%2BFKwzLy1gwRuTTF8hS4vsO3uR%2FV6NuNNZw8piqwFOu9JetbR1bhqOw%2B3jWO%2FCotEa8SiugWhrrmA2heK41kpIpSCYRFSun54LDQQBzNVQDFbV9IxPN8ARdBbLg8FNXD2WZ%2BJNwiax3FZWhsh6g5LBFYsEkF8V00YLrXW%2BIWslbhehWYHKroGNWSFFWcXfXEH7P0RprHtjGIfDkuPBJfIZybesHcHMN645SCCey2MdRbQu0SMkXsPvvppfx8MS9kpG8H9LbdyGvo6GeVxgTuoBN9VOyVYHYtQ9bKjeHX4grxJVgOFeCxd0w2mzhkef6jBnQBLp1Pw%2B3ZmGSGp5CO452yg467PBOZQnYZIrdrXRnoLWiEWdm7t%2FPS61Htu%2B0kK111USMsbTH7XFgPMFOTHGx58H4MIKo8I%2FgK1AvZNhxJ6ytT2hGiAqMuSOQajoB4GD2bX7o5eq2RYhIJOT6xLiwLN3qJRWlDW7DX%2F0YOyxtDS7eQ2vYCOFo9%2BLObHHk3pBsX6I0yJ2oGgAL18Amy6gNR85%2FlSp7pYRwaA9hv2m3BeyJ6ACsFq2Pe8j2NDNQAR6rgHdyzmlDDDi3anIBjqkAb51Q7zHny4gcasvHHdarlNduSrbNW0D4Iluak%2Fuu5sIcn4OggO%2BZRQ8jVwTcNQ4D5TAyOfnNlA7HxrcqokxRkv%2FA0se0AjoBhM4gsazOJeUYCcY08wSdqmlgNWzuXvy2yZev7Jwphdhf4oZyaCc%2BfsIj4uWBz6c5mm9MVbsjDchRLLDaZ3hadkRkWrNc%2BGUHSWf6frOzNnlssqSAti32bF1Qe6P&X-Amz-Signature=69a7c18ce04a4aac55474f30c10480e583966eb2d30850e365b78b9d667eecb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
