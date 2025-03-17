---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS7ZMVPY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGSxUJlUDaVOerEzuzuyiE2jNBEDFoNc%2BLbrd%2FrbE2mAIgeJBO%2Fgd835Lk1aiMR9N46rfmgY4G4jQz7mZeID8E6SEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDK3V95VkBVA%2BvfeHEircAxskrIBswroMeE7Uz4b0J%2BI8e9CpR5ZqRCYgCBRU8diFSdGwVLbOv0DAvf9i2aqVuHlZBA2o0WLzG5QyDvitFBXdJbwQzgde1SV08NwEhfxI0bTSnEvAaOcIoSuA4BK9OzK%2Bv0Ibo4LuRNe1GWXdyELyQh1991Zn0VuRqjTI%2B7ZwxiPhCfohjLF9Zmgi171TnJJp3VM19UXjl2eYR1kf%2FpUhnWOuQTa6VL0xyITHyrW154rMaPRrEZAHK3ZGb1GerCeZuArb8M%2FDZQnL8IYDA98vA9%2BIpyGAe6rwdV7dmh4XqvyvU2WPLdAQiOXiSQeQ6Mwpb7xDQ0yrtCzTCh8OdPcTYb50ONiHHJpHfKTLeyF8m63oAVufmTS7YK%2BjTCu03Q0SXBEhpyX68RBIHZGoVOr5pbr80nPUzx%2BQvG5RRkKDgvTJBt6%2BTVNa1b1O0yZjiy4iAr6aiIRBj1RkskyDhKRKU2K4HgRlnmYd97U9XGR56UeWq6kvGmmdPBeiep1bWU5OVJmld8KLnEFzI6nmc5amHXpWzp%2F9mOxwiCHffyza8L83VFMlCY1cTyo6QcOfHksPqamVHO72BPam%2FQfkD%2BtdOIpwIeLg%2FBIX5Bb%2BqSqxJFjR0mi9GSMngsEGMOqM4L4GOqUBr%2BhiPMonhFAfOlx3emL8B7a0GhPxBS8joRB3s8Q%2Fi1IuJrJwVYSZb6tHEpwEyyRd%2FZ%2FtdQwNKz2fCDBJ8U5bjxwJ1ZuTWsvE%2F49917h3H91Rg8%2F8VcXRyDH81u9HB3bMVbx2JM4PvqOIfbh4XutqCU79LZLPgZD%2BqBk92ggwbDtHyvBaC3YrbmUGtj5Pt9XOowCiXhsun3lkFJr6c1hrJ4LV8j7U&X-Amz-Signature=318dfc726443d02740d6159cbc1a8b25744048aa6a4d78d835285f1632c1e349&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS7ZMVPY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGSxUJlUDaVOerEzuzuyiE2jNBEDFoNc%2BLbrd%2FrbE2mAIgeJBO%2Fgd835Lk1aiMR9N46rfmgY4G4jQz7mZeID8E6SEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDK3V95VkBVA%2BvfeHEircAxskrIBswroMeE7Uz4b0J%2BI8e9CpR5ZqRCYgCBRU8diFSdGwVLbOv0DAvf9i2aqVuHlZBA2o0WLzG5QyDvitFBXdJbwQzgde1SV08NwEhfxI0bTSnEvAaOcIoSuA4BK9OzK%2Bv0Ibo4LuRNe1GWXdyELyQh1991Zn0VuRqjTI%2B7ZwxiPhCfohjLF9Zmgi171TnJJp3VM19UXjl2eYR1kf%2FpUhnWOuQTa6VL0xyITHyrW154rMaPRrEZAHK3ZGb1GerCeZuArb8M%2FDZQnL8IYDA98vA9%2BIpyGAe6rwdV7dmh4XqvyvU2WPLdAQiOXiSQeQ6Mwpb7xDQ0yrtCzTCh8OdPcTYb50ONiHHJpHfKTLeyF8m63oAVufmTS7YK%2BjTCu03Q0SXBEhpyX68RBIHZGoVOr5pbr80nPUzx%2BQvG5RRkKDgvTJBt6%2BTVNa1b1O0yZjiy4iAr6aiIRBj1RkskyDhKRKU2K4HgRlnmYd97U9XGR56UeWq6kvGmmdPBeiep1bWU5OVJmld8KLnEFzI6nmc5amHXpWzp%2F9mOxwiCHffyza8L83VFMlCY1cTyo6QcOfHksPqamVHO72BPam%2FQfkD%2BtdOIpwIeLg%2FBIX5Bb%2BqSqxJFjR0mi9GSMngsEGMOqM4L4GOqUBr%2BhiPMonhFAfOlx3emL8B7a0GhPxBS8joRB3s8Q%2Fi1IuJrJwVYSZb6tHEpwEyyRd%2FZ%2FtdQwNKz2fCDBJ8U5bjxwJ1ZuTWsvE%2F49917h3H91Rg8%2F8VcXRyDH81u9HB3bMVbx2JM4PvqOIfbh4XutqCU79LZLPgZD%2BqBk92ggwbDtHyvBaC3YrbmUGtj5Pt9XOowCiXhsun3lkFJr6c1hrJ4LV8j7U&X-Amz-Signature=21b05c37c120525b3c34503e9b5e26c1631e7c3f4501ef13de938fa8263f3bd5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS7ZMVPY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGSxUJlUDaVOerEzuzuyiE2jNBEDFoNc%2BLbrd%2FrbE2mAIgeJBO%2Fgd835Lk1aiMR9N46rfmgY4G4jQz7mZeID8E6SEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDK3V95VkBVA%2BvfeHEircAxskrIBswroMeE7Uz4b0J%2BI8e9CpR5ZqRCYgCBRU8diFSdGwVLbOv0DAvf9i2aqVuHlZBA2o0WLzG5QyDvitFBXdJbwQzgde1SV08NwEhfxI0bTSnEvAaOcIoSuA4BK9OzK%2Bv0Ibo4LuRNe1GWXdyELyQh1991Zn0VuRqjTI%2B7ZwxiPhCfohjLF9Zmgi171TnJJp3VM19UXjl2eYR1kf%2FpUhnWOuQTa6VL0xyITHyrW154rMaPRrEZAHK3ZGb1GerCeZuArb8M%2FDZQnL8IYDA98vA9%2BIpyGAe6rwdV7dmh4XqvyvU2WPLdAQiOXiSQeQ6Mwpb7xDQ0yrtCzTCh8OdPcTYb50ONiHHJpHfKTLeyF8m63oAVufmTS7YK%2BjTCu03Q0SXBEhpyX68RBIHZGoVOr5pbr80nPUzx%2BQvG5RRkKDgvTJBt6%2BTVNa1b1O0yZjiy4iAr6aiIRBj1RkskyDhKRKU2K4HgRlnmYd97U9XGR56UeWq6kvGmmdPBeiep1bWU5OVJmld8KLnEFzI6nmc5amHXpWzp%2F9mOxwiCHffyza8L83VFMlCY1cTyo6QcOfHksPqamVHO72BPam%2FQfkD%2BtdOIpwIeLg%2FBIX5Bb%2BqSqxJFjR0mi9GSMngsEGMOqM4L4GOqUBr%2BhiPMonhFAfOlx3emL8B7a0GhPxBS8joRB3s8Q%2Fi1IuJrJwVYSZb6tHEpwEyyRd%2FZ%2FtdQwNKz2fCDBJ8U5bjxwJ1ZuTWsvE%2F49917h3H91Rg8%2F8VcXRyDH81u9HB3bMVbx2JM4PvqOIfbh4XutqCU79LZLPgZD%2BqBk92ggwbDtHyvBaC3YrbmUGtj5Pt9XOowCiXhsun3lkFJr6c1hrJ4LV8j7U&X-Amz-Signature=9e0e696dd00a8ae1651993f288e26bf144da3b704606be58a82dd80c9fe4c266&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS7ZMVPY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGSxUJlUDaVOerEzuzuyiE2jNBEDFoNc%2BLbrd%2FrbE2mAIgeJBO%2Fgd835Lk1aiMR9N46rfmgY4G4jQz7mZeID8E6SEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDK3V95VkBVA%2BvfeHEircAxskrIBswroMeE7Uz4b0J%2BI8e9CpR5ZqRCYgCBRU8diFSdGwVLbOv0DAvf9i2aqVuHlZBA2o0WLzG5QyDvitFBXdJbwQzgde1SV08NwEhfxI0bTSnEvAaOcIoSuA4BK9OzK%2Bv0Ibo4LuRNe1GWXdyELyQh1991Zn0VuRqjTI%2B7ZwxiPhCfohjLF9Zmgi171TnJJp3VM19UXjl2eYR1kf%2FpUhnWOuQTa6VL0xyITHyrW154rMaPRrEZAHK3ZGb1GerCeZuArb8M%2FDZQnL8IYDA98vA9%2BIpyGAe6rwdV7dmh4XqvyvU2WPLdAQiOXiSQeQ6Mwpb7xDQ0yrtCzTCh8OdPcTYb50ONiHHJpHfKTLeyF8m63oAVufmTS7YK%2BjTCu03Q0SXBEhpyX68RBIHZGoVOr5pbr80nPUzx%2BQvG5RRkKDgvTJBt6%2BTVNa1b1O0yZjiy4iAr6aiIRBj1RkskyDhKRKU2K4HgRlnmYd97U9XGR56UeWq6kvGmmdPBeiep1bWU5OVJmld8KLnEFzI6nmc5amHXpWzp%2F9mOxwiCHffyza8L83VFMlCY1cTyo6QcOfHksPqamVHO72BPam%2FQfkD%2BtdOIpwIeLg%2FBIX5Bb%2BqSqxJFjR0mi9GSMngsEGMOqM4L4GOqUBr%2BhiPMonhFAfOlx3emL8B7a0GhPxBS8joRB3s8Q%2Fi1IuJrJwVYSZb6tHEpwEyyRd%2FZ%2FtdQwNKz2fCDBJ8U5bjxwJ1ZuTWsvE%2F49917h3H91Rg8%2F8VcXRyDH81u9HB3bMVbx2JM4PvqOIfbh4XutqCU79LZLPgZD%2BqBk92ggwbDtHyvBaC3YrbmUGtj5Pt9XOowCiXhsun3lkFJr6c1hrJ4LV8j7U&X-Amz-Signature=08f8f8a9d75a7c118c6b7c065655666c5783a1dfa43a732065df65433882d6ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS7ZMVPY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGSxUJlUDaVOerEzuzuyiE2jNBEDFoNc%2BLbrd%2FrbE2mAIgeJBO%2Fgd835Lk1aiMR9N46rfmgY4G4jQz7mZeID8E6SEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDK3V95VkBVA%2BvfeHEircAxskrIBswroMeE7Uz4b0J%2BI8e9CpR5ZqRCYgCBRU8diFSdGwVLbOv0DAvf9i2aqVuHlZBA2o0WLzG5QyDvitFBXdJbwQzgde1SV08NwEhfxI0bTSnEvAaOcIoSuA4BK9OzK%2Bv0Ibo4LuRNe1GWXdyELyQh1991Zn0VuRqjTI%2B7ZwxiPhCfohjLF9Zmgi171TnJJp3VM19UXjl2eYR1kf%2FpUhnWOuQTa6VL0xyITHyrW154rMaPRrEZAHK3ZGb1GerCeZuArb8M%2FDZQnL8IYDA98vA9%2BIpyGAe6rwdV7dmh4XqvyvU2WPLdAQiOXiSQeQ6Mwpb7xDQ0yrtCzTCh8OdPcTYb50ONiHHJpHfKTLeyF8m63oAVufmTS7YK%2BjTCu03Q0SXBEhpyX68RBIHZGoVOr5pbr80nPUzx%2BQvG5RRkKDgvTJBt6%2BTVNa1b1O0yZjiy4iAr6aiIRBj1RkskyDhKRKU2K4HgRlnmYd97U9XGR56UeWq6kvGmmdPBeiep1bWU5OVJmld8KLnEFzI6nmc5amHXpWzp%2F9mOxwiCHffyza8L83VFMlCY1cTyo6QcOfHksPqamVHO72BPam%2FQfkD%2BtdOIpwIeLg%2FBIX5Bb%2BqSqxJFjR0mi9GSMngsEGMOqM4L4GOqUBr%2BhiPMonhFAfOlx3emL8B7a0GhPxBS8joRB3s8Q%2Fi1IuJrJwVYSZb6tHEpwEyyRd%2FZ%2FtdQwNKz2fCDBJ8U5bjxwJ1ZuTWsvE%2F49917h3H91Rg8%2F8VcXRyDH81u9HB3bMVbx2JM4PvqOIfbh4XutqCU79LZLPgZD%2BqBk92ggwbDtHyvBaC3YrbmUGtj5Pt9XOowCiXhsun3lkFJr6c1hrJ4LV8j7U&X-Amz-Signature=19c3ce7fb9d0b65498dff5bbb99ab1b448b189a8abd27a84648e389e599d272b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
