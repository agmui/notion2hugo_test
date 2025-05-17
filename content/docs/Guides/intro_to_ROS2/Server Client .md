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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOOOZ5Z2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLOSh8A6W13ifaUn4bTf4rbZ5TwuApgQjPOLxQkJAWXwIgfeWdCymuaecu1jHDjGIoHYIgzrA6%2Fhm2Z0ab5zm6w60q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIC5%2BibpwRylfD6CRCrcAwpzWWNpMtExzX0%2BFBqOhMVEj2UKspPJnLrf277lpCIFEV47NBMjV96fEHBDZu4JvXA7UtfUPq2oygrKG6gJfJQrI9CnKu%2FVkmr2yxwiius4fgwD9d40GCL%2F5qXhj82A67reBV02VJlwqYl6WwdWYbxWtZry%2BU42IBB6ag1bLG0gMQPO%2BjWQ5b6fwUvIWT833188rXssiCutnVH3DV2XkGT3sjOuxOAr9NPnIdye2Pqkv0zC9Hmz%2Fneph6nbl4xYLtW4AuZ1hwnUjACNc2GIR%2Fckt266UacYxXEdeL2cgIf98QMeIal6LlstVCwiN%2FlK5JWctKUYSEhmCr%2FYnX61lzNQfMzbQ%2BYDZxdJQbRFRRDlw43VHt7RgXKqUU1H6rYkDsYi3LkfdqD9SWHTh%2BvXOVEPRrdvathRluJFjXM%2F8nl3q2ZYcSEWBVY8oJ8S7daxP28ZkLqKNtYGYKUFK8Iiy%2FnmHvogy1p4l0KECcKejL27mWdUT%2BYQ%2B49iC09X0ft4L8OEP2N3%2F9wpIDq%2FZQTf2Rd7G57iwNmFEhNIIkkjkooc8U0zLnH5iyFSGYIltyFNxw2xoEjnnUhxDNBmMQrbJxhwXeIsOwO%2FrGcAOgDZ4pgx3kYL5oCZIGtZqbMUMKD3o8EGOqUB0Pp8W6bQ5Rm5K%2BBc9sIiHj4JkKjyI5rgZoX0ceM7xWejZVqxomvigRLpc7Ho%2BhhQng9KyrbSe6ZL5dfvx5gU54K47Tl2ijSwWfK6lTfTp%2FBW%2FgNEjuOja8vDAF%2FmdZ7ArVe9YMzbUNu2LHu0B5bjao9GV16cB34Q33odW922svnhtFbfLa%2F5%2Fq%2F2oESNNNZJbz2zlMV9vff%2BoIXhMdPLHAyqxJCA&X-Amz-Signature=457fb20c6aa8b16ce56c40c67a4c7b9327280c81ee868ffa6e8b705232b67562&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOOOZ5Z2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLOSh8A6W13ifaUn4bTf4rbZ5TwuApgQjPOLxQkJAWXwIgfeWdCymuaecu1jHDjGIoHYIgzrA6%2Fhm2Z0ab5zm6w60q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIC5%2BibpwRylfD6CRCrcAwpzWWNpMtExzX0%2BFBqOhMVEj2UKspPJnLrf277lpCIFEV47NBMjV96fEHBDZu4JvXA7UtfUPq2oygrKG6gJfJQrI9CnKu%2FVkmr2yxwiius4fgwD9d40GCL%2F5qXhj82A67reBV02VJlwqYl6WwdWYbxWtZry%2BU42IBB6ag1bLG0gMQPO%2BjWQ5b6fwUvIWT833188rXssiCutnVH3DV2XkGT3sjOuxOAr9NPnIdye2Pqkv0zC9Hmz%2Fneph6nbl4xYLtW4AuZ1hwnUjACNc2GIR%2Fckt266UacYxXEdeL2cgIf98QMeIal6LlstVCwiN%2FlK5JWctKUYSEhmCr%2FYnX61lzNQfMzbQ%2BYDZxdJQbRFRRDlw43VHt7RgXKqUU1H6rYkDsYi3LkfdqD9SWHTh%2BvXOVEPRrdvathRluJFjXM%2F8nl3q2ZYcSEWBVY8oJ8S7daxP28ZkLqKNtYGYKUFK8Iiy%2FnmHvogy1p4l0KECcKejL27mWdUT%2BYQ%2B49iC09X0ft4L8OEP2N3%2F9wpIDq%2FZQTf2Rd7G57iwNmFEhNIIkkjkooc8U0zLnH5iyFSGYIltyFNxw2xoEjnnUhxDNBmMQrbJxhwXeIsOwO%2FrGcAOgDZ4pgx3kYL5oCZIGtZqbMUMKD3o8EGOqUB0Pp8W6bQ5Rm5K%2BBc9sIiHj4JkKjyI5rgZoX0ceM7xWejZVqxomvigRLpc7Ho%2BhhQng9KyrbSe6ZL5dfvx5gU54K47Tl2ijSwWfK6lTfTp%2FBW%2FgNEjuOja8vDAF%2FmdZ7ArVe9YMzbUNu2LHu0B5bjao9GV16cB34Q33odW922svnhtFbfLa%2F5%2Fq%2F2oESNNNZJbz2zlMV9vff%2BoIXhMdPLHAyqxJCA&X-Amz-Signature=42c2d70e2bc677325321a715e80815454496fe4917092abc29840d9d446c7aa9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOOOZ5Z2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLOSh8A6W13ifaUn4bTf4rbZ5TwuApgQjPOLxQkJAWXwIgfeWdCymuaecu1jHDjGIoHYIgzrA6%2Fhm2Z0ab5zm6w60q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIC5%2BibpwRylfD6CRCrcAwpzWWNpMtExzX0%2BFBqOhMVEj2UKspPJnLrf277lpCIFEV47NBMjV96fEHBDZu4JvXA7UtfUPq2oygrKG6gJfJQrI9CnKu%2FVkmr2yxwiius4fgwD9d40GCL%2F5qXhj82A67reBV02VJlwqYl6WwdWYbxWtZry%2BU42IBB6ag1bLG0gMQPO%2BjWQ5b6fwUvIWT833188rXssiCutnVH3DV2XkGT3sjOuxOAr9NPnIdye2Pqkv0zC9Hmz%2Fneph6nbl4xYLtW4AuZ1hwnUjACNc2GIR%2Fckt266UacYxXEdeL2cgIf98QMeIal6LlstVCwiN%2FlK5JWctKUYSEhmCr%2FYnX61lzNQfMzbQ%2BYDZxdJQbRFRRDlw43VHt7RgXKqUU1H6rYkDsYi3LkfdqD9SWHTh%2BvXOVEPRrdvathRluJFjXM%2F8nl3q2ZYcSEWBVY8oJ8S7daxP28ZkLqKNtYGYKUFK8Iiy%2FnmHvogy1p4l0KECcKejL27mWdUT%2BYQ%2B49iC09X0ft4L8OEP2N3%2F9wpIDq%2FZQTf2Rd7G57iwNmFEhNIIkkjkooc8U0zLnH5iyFSGYIltyFNxw2xoEjnnUhxDNBmMQrbJxhwXeIsOwO%2FrGcAOgDZ4pgx3kYL5oCZIGtZqbMUMKD3o8EGOqUB0Pp8W6bQ5Rm5K%2BBc9sIiHj4JkKjyI5rgZoX0ceM7xWejZVqxomvigRLpc7Ho%2BhhQng9KyrbSe6ZL5dfvx5gU54K47Tl2ijSwWfK6lTfTp%2FBW%2FgNEjuOja8vDAF%2FmdZ7ArVe9YMzbUNu2LHu0B5bjao9GV16cB34Q33odW922svnhtFbfLa%2F5%2Fq%2F2oESNNNZJbz2zlMV9vff%2BoIXhMdPLHAyqxJCA&X-Amz-Signature=5d6ce077413580daf8958584a56f75fce38356946da77f45df88299dba4ab2e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOOOZ5Z2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLOSh8A6W13ifaUn4bTf4rbZ5TwuApgQjPOLxQkJAWXwIgfeWdCymuaecu1jHDjGIoHYIgzrA6%2Fhm2Z0ab5zm6w60q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIC5%2BibpwRylfD6CRCrcAwpzWWNpMtExzX0%2BFBqOhMVEj2UKspPJnLrf277lpCIFEV47NBMjV96fEHBDZu4JvXA7UtfUPq2oygrKG6gJfJQrI9CnKu%2FVkmr2yxwiius4fgwD9d40GCL%2F5qXhj82A67reBV02VJlwqYl6WwdWYbxWtZry%2BU42IBB6ag1bLG0gMQPO%2BjWQ5b6fwUvIWT833188rXssiCutnVH3DV2XkGT3sjOuxOAr9NPnIdye2Pqkv0zC9Hmz%2Fneph6nbl4xYLtW4AuZ1hwnUjACNc2GIR%2Fckt266UacYxXEdeL2cgIf98QMeIal6LlstVCwiN%2FlK5JWctKUYSEhmCr%2FYnX61lzNQfMzbQ%2BYDZxdJQbRFRRDlw43VHt7RgXKqUU1H6rYkDsYi3LkfdqD9SWHTh%2BvXOVEPRrdvathRluJFjXM%2F8nl3q2ZYcSEWBVY8oJ8S7daxP28ZkLqKNtYGYKUFK8Iiy%2FnmHvogy1p4l0KECcKejL27mWdUT%2BYQ%2B49iC09X0ft4L8OEP2N3%2F9wpIDq%2FZQTf2Rd7G57iwNmFEhNIIkkjkooc8U0zLnH5iyFSGYIltyFNxw2xoEjnnUhxDNBmMQrbJxhwXeIsOwO%2FrGcAOgDZ4pgx3kYL5oCZIGtZqbMUMKD3o8EGOqUB0Pp8W6bQ5Rm5K%2BBc9sIiHj4JkKjyI5rgZoX0ceM7xWejZVqxomvigRLpc7Ho%2BhhQng9KyrbSe6ZL5dfvx5gU54K47Tl2ijSwWfK6lTfTp%2FBW%2FgNEjuOja8vDAF%2FmdZ7ArVe9YMzbUNu2LHu0B5bjao9GV16cB34Q33odW922svnhtFbfLa%2F5%2Fq%2F2oESNNNZJbz2zlMV9vff%2BoIXhMdPLHAyqxJCA&X-Amz-Signature=c7866979fc6675af0195224dfca38413f6327eb9bb0f2843ac94469c57e3df08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOOOZ5Z2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLOSh8A6W13ifaUn4bTf4rbZ5TwuApgQjPOLxQkJAWXwIgfeWdCymuaecu1jHDjGIoHYIgzrA6%2Fhm2Z0ab5zm6w60q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIC5%2BibpwRylfD6CRCrcAwpzWWNpMtExzX0%2BFBqOhMVEj2UKspPJnLrf277lpCIFEV47NBMjV96fEHBDZu4JvXA7UtfUPq2oygrKG6gJfJQrI9CnKu%2FVkmr2yxwiius4fgwD9d40GCL%2F5qXhj82A67reBV02VJlwqYl6WwdWYbxWtZry%2BU42IBB6ag1bLG0gMQPO%2BjWQ5b6fwUvIWT833188rXssiCutnVH3DV2XkGT3sjOuxOAr9NPnIdye2Pqkv0zC9Hmz%2Fneph6nbl4xYLtW4AuZ1hwnUjACNc2GIR%2Fckt266UacYxXEdeL2cgIf98QMeIal6LlstVCwiN%2FlK5JWctKUYSEhmCr%2FYnX61lzNQfMzbQ%2BYDZxdJQbRFRRDlw43VHt7RgXKqUU1H6rYkDsYi3LkfdqD9SWHTh%2BvXOVEPRrdvathRluJFjXM%2F8nl3q2ZYcSEWBVY8oJ8S7daxP28ZkLqKNtYGYKUFK8Iiy%2FnmHvogy1p4l0KECcKejL27mWdUT%2BYQ%2B49iC09X0ft4L8OEP2N3%2F9wpIDq%2FZQTf2Rd7G57iwNmFEhNIIkkjkooc8U0zLnH5iyFSGYIltyFNxw2xoEjnnUhxDNBmMQrbJxhwXeIsOwO%2FrGcAOgDZ4pgx3kYL5oCZIGtZqbMUMKD3o8EGOqUB0Pp8W6bQ5Rm5K%2BBc9sIiHj4JkKjyI5rgZoX0ceM7xWejZVqxomvigRLpc7Ho%2BhhQng9KyrbSe6ZL5dfvx5gU54K47Tl2ijSwWfK6lTfTp%2FBW%2FgNEjuOja8vDAF%2FmdZ7ArVe9YMzbUNu2LHu0B5bjao9GV16cB34Q33odW922svnhtFbfLa%2F5%2Fq%2F2oESNNNZJbz2zlMV9vff%2BoIXhMdPLHAyqxJCA&X-Amz-Signature=cfd1e5e2850242148775708475507c54668b05d13689587eef570efeccf28ea7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
