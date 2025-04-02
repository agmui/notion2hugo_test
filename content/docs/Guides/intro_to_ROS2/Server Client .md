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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVE7GZOA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGeHwdN4naHVrnBrqiEm8cTbE81NrkweU5Tv3A8B3It8AiBNQ9RBRQ4%2FYB%2BPY%2BwXMXlI3XCBmk0VhO8kTh8Oc%2B847iqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcGeLoxf67uVgBelFKtwDRaEIK7bHJKFbJZh8U9A9o9DGJ9ficFaIg27AJf2yRuDa3UDY2nqZoXMrjFtWTqdrWEZ1arNK8p77j%2FZcZiIjXs0mflX4AXqLYQESwdfMrZBJyymT4G3ja8FAcfMibhVgW1EX5Xfj%2FxOBe932ZB1WRKiY6akMymty23Yz4PUtAV7lS6qwZRxDhz0paL5ZZDod5TAi7w8AFrAvfMJ%2F%2BiGGfnS56zpkr2Re5OLMhhMPvjYwZDlQRDVE67aS1Ad%2FpQhU3slOCXc8d7stEM3RntYwWg3lZ5LoAL%2BJq%2Buuz%2FbMf%2FNS61n674jiyHeQgmBmfQKxpKFRifJ2fxXEuMF%2Bnx3EasBIjvqqJkGFHWJ4StnRHZoAemGcbnbGBFU4c6OGSuG14UxNw4DIoxP1BESEnW0fsbcPZGlayR5Yarpsb%2FUU%2FtLePXXhaJpZd%2FXU62McVhz%2F5te7pfxXH37XF7rF65vlbUxsj70dlux7BsX4WIlHPvLrqY%2B0f394ErYMDLWchhUB%2BUxp2eKLdJZ5MeeA6z%2BvUyToGk3tKy4Uk5eOaQT4xSuliCJYAgdQt8S%2BXu47hgZc%2FtieTFxOrauH9N5ZflrFBsXUl9%2FNkYX0Q9Jl6C5L7%2BKy%2Bx4abiK1cWRC0TMwou%2ByvwY6pgGXaKK1N7ZErENbUOYzmMkiV1nLE9T47Xz38Mp4TfQqAxtIefRZlzHm%2BlASIDV5qAoHhVNC6tLxKZcoXIx1%2BujcadHUC8lRNK5QkVhEKhjlU4id%2FX0eXDMsvVzbrAuaFdfsCyJODs8sPcJSs%2Fb90Cx%2BYSRZL5EVkiMPVpGjEiuj3xXa6vnhyR0iNU1eZHZIruEPd%2Bi5fJnPnLPiYaf%2Ba9EzFE0oSu0a&X-Amz-Signature=fc88d1a010242e6174a513fd7af35e60a3b392bb5b1ba7d53538fa89e5edc9c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVE7GZOA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGeHwdN4naHVrnBrqiEm8cTbE81NrkweU5Tv3A8B3It8AiBNQ9RBRQ4%2FYB%2BPY%2BwXMXlI3XCBmk0VhO8kTh8Oc%2B847iqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcGeLoxf67uVgBelFKtwDRaEIK7bHJKFbJZh8U9A9o9DGJ9ficFaIg27AJf2yRuDa3UDY2nqZoXMrjFtWTqdrWEZ1arNK8p77j%2FZcZiIjXs0mflX4AXqLYQESwdfMrZBJyymT4G3ja8FAcfMibhVgW1EX5Xfj%2FxOBe932ZB1WRKiY6akMymty23Yz4PUtAV7lS6qwZRxDhz0paL5ZZDod5TAi7w8AFrAvfMJ%2F%2BiGGfnS56zpkr2Re5OLMhhMPvjYwZDlQRDVE67aS1Ad%2FpQhU3slOCXc8d7stEM3RntYwWg3lZ5LoAL%2BJq%2Buuz%2FbMf%2FNS61n674jiyHeQgmBmfQKxpKFRifJ2fxXEuMF%2Bnx3EasBIjvqqJkGFHWJ4StnRHZoAemGcbnbGBFU4c6OGSuG14UxNw4DIoxP1BESEnW0fsbcPZGlayR5Yarpsb%2FUU%2FtLePXXhaJpZd%2FXU62McVhz%2F5te7pfxXH37XF7rF65vlbUxsj70dlux7BsX4WIlHPvLrqY%2B0f394ErYMDLWchhUB%2BUxp2eKLdJZ5MeeA6z%2BvUyToGk3tKy4Uk5eOaQT4xSuliCJYAgdQt8S%2BXu47hgZc%2FtieTFxOrauH9N5ZflrFBsXUl9%2FNkYX0Q9Jl6C5L7%2BKy%2Bx4abiK1cWRC0TMwou%2ByvwY6pgGXaKK1N7ZErENbUOYzmMkiV1nLE9T47Xz38Mp4TfQqAxtIefRZlzHm%2BlASIDV5qAoHhVNC6tLxKZcoXIx1%2BujcadHUC8lRNK5QkVhEKhjlU4id%2FX0eXDMsvVzbrAuaFdfsCyJODs8sPcJSs%2Fb90Cx%2BYSRZL5EVkiMPVpGjEiuj3xXa6vnhyR0iNU1eZHZIruEPd%2Bi5fJnPnLPiYaf%2Ba9EzFE0oSu0a&X-Amz-Signature=2779971ea3f535831e61cbf0f9cfd5ad61f4b20931650f54d51b530ae3b6cf13&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVE7GZOA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGeHwdN4naHVrnBrqiEm8cTbE81NrkweU5Tv3A8B3It8AiBNQ9RBRQ4%2FYB%2BPY%2BwXMXlI3XCBmk0VhO8kTh8Oc%2B847iqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcGeLoxf67uVgBelFKtwDRaEIK7bHJKFbJZh8U9A9o9DGJ9ficFaIg27AJf2yRuDa3UDY2nqZoXMrjFtWTqdrWEZ1arNK8p77j%2FZcZiIjXs0mflX4AXqLYQESwdfMrZBJyymT4G3ja8FAcfMibhVgW1EX5Xfj%2FxOBe932ZB1WRKiY6akMymty23Yz4PUtAV7lS6qwZRxDhz0paL5ZZDod5TAi7w8AFrAvfMJ%2F%2BiGGfnS56zpkr2Re5OLMhhMPvjYwZDlQRDVE67aS1Ad%2FpQhU3slOCXc8d7stEM3RntYwWg3lZ5LoAL%2BJq%2Buuz%2FbMf%2FNS61n674jiyHeQgmBmfQKxpKFRifJ2fxXEuMF%2Bnx3EasBIjvqqJkGFHWJ4StnRHZoAemGcbnbGBFU4c6OGSuG14UxNw4DIoxP1BESEnW0fsbcPZGlayR5Yarpsb%2FUU%2FtLePXXhaJpZd%2FXU62McVhz%2F5te7pfxXH37XF7rF65vlbUxsj70dlux7BsX4WIlHPvLrqY%2B0f394ErYMDLWchhUB%2BUxp2eKLdJZ5MeeA6z%2BvUyToGk3tKy4Uk5eOaQT4xSuliCJYAgdQt8S%2BXu47hgZc%2FtieTFxOrauH9N5ZflrFBsXUl9%2FNkYX0Q9Jl6C5L7%2BKy%2Bx4abiK1cWRC0TMwou%2ByvwY6pgGXaKK1N7ZErENbUOYzmMkiV1nLE9T47Xz38Mp4TfQqAxtIefRZlzHm%2BlASIDV5qAoHhVNC6tLxKZcoXIx1%2BujcadHUC8lRNK5QkVhEKhjlU4id%2FX0eXDMsvVzbrAuaFdfsCyJODs8sPcJSs%2Fb90Cx%2BYSRZL5EVkiMPVpGjEiuj3xXa6vnhyR0iNU1eZHZIruEPd%2Bi5fJnPnLPiYaf%2Ba9EzFE0oSu0a&X-Amz-Signature=b482c8f48bb7bc96aabf0b7f7ef0807e07596cad2a98e61135c59cbcd513b899&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVE7GZOA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGeHwdN4naHVrnBrqiEm8cTbE81NrkweU5Tv3A8B3It8AiBNQ9RBRQ4%2FYB%2BPY%2BwXMXlI3XCBmk0VhO8kTh8Oc%2B847iqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcGeLoxf67uVgBelFKtwDRaEIK7bHJKFbJZh8U9A9o9DGJ9ficFaIg27AJf2yRuDa3UDY2nqZoXMrjFtWTqdrWEZ1arNK8p77j%2FZcZiIjXs0mflX4AXqLYQESwdfMrZBJyymT4G3ja8FAcfMibhVgW1EX5Xfj%2FxOBe932ZB1WRKiY6akMymty23Yz4PUtAV7lS6qwZRxDhz0paL5ZZDod5TAi7w8AFrAvfMJ%2F%2BiGGfnS56zpkr2Re5OLMhhMPvjYwZDlQRDVE67aS1Ad%2FpQhU3slOCXc8d7stEM3RntYwWg3lZ5LoAL%2BJq%2Buuz%2FbMf%2FNS61n674jiyHeQgmBmfQKxpKFRifJ2fxXEuMF%2Bnx3EasBIjvqqJkGFHWJ4StnRHZoAemGcbnbGBFU4c6OGSuG14UxNw4DIoxP1BESEnW0fsbcPZGlayR5Yarpsb%2FUU%2FtLePXXhaJpZd%2FXU62McVhz%2F5te7pfxXH37XF7rF65vlbUxsj70dlux7BsX4WIlHPvLrqY%2B0f394ErYMDLWchhUB%2BUxp2eKLdJZ5MeeA6z%2BvUyToGk3tKy4Uk5eOaQT4xSuliCJYAgdQt8S%2BXu47hgZc%2FtieTFxOrauH9N5ZflrFBsXUl9%2FNkYX0Q9Jl6C5L7%2BKy%2Bx4abiK1cWRC0TMwou%2ByvwY6pgGXaKK1N7ZErENbUOYzmMkiV1nLE9T47Xz38Mp4TfQqAxtIefRZlzHm%2BlASIDV5qAoHhVNC6tLxKZcoXIx1%2BujcadHUC8lRNK5QkVhEKhjlU4id%2FX0eXDMsvVzbrAuaFdfsCyJODs8sPcJSs%2Fb90Cx%2BYSRZL5EVkiMPVpGjEiuj3xXa6vnhyR0iNU1eZHZIruEPd%2Bi5fJnPnLPiYaf%2Ba9EzFE0oSu0a&X-Amz-Signature=0f1d9dad3364b5a25e0a705bdfe0b233ad22002af92f1cb65706e926f14eaf69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVE7GZOA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGeHwdN4naHVrnBrqiEm8cTbE81NrkweU5Tv3A8B3It8AiBNQ9RBRQ4%2FYB%2BPY%2BwXMXlI3XCBmk0VhO8kTh8Oc%2B847iqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcGeLoxf67uVgBelFKtwDRaEIK7bHJKFbJZh8U9A9o9DGJ9ficFaIg27AJf2yRuDa3UDY2nqZoXMrjFtWTqdrWEZ1arNK8p77j%2FZcZiIjXs0mflX4AXqLYQESwdfMrZBJyymT4G3ja8FAcfMibhVgW1EX5Xfj%2FxOBe932ZB1WRKiY6akMymty23Yz4PUtAV7lS6qwZRxDhz0paL5ZZDod5TAi7w8AFrAvfMJ%2F%2BiGGfnS56zpkr2Re5OLMhhMPvjYwZDlQRDVE67aS1Ad%2FpQhU3slOCXc8d7stEM3RntYwWg3lZ5LoAL%2BJq%2Buuz%2FbMf%2FNS61n674jiyHeQgmBmfQKxpKFRifJ2fxXEuMF%2Bnx3EasBIjvqqJkGFHWJ4StnRHZoAemGcbnbGBFU4c6OGSuG14UxNw4DIoxP1BESEnW0fsbcPZGlayR5Yarpsb%2FUU%2FtLePXXhaJpZd%2FXU62McVhz%2F5te7pfxXH37XF7rF65vlbUxsj70dlux7BsX4WIlHPvLrqY%2B0f394ErYMDLWchhUB%2BUxp2eKLdJZ5MeeA6z%2BvUyToGk3tKy4Uk5eOaQT4xSuliCJYAgdQt8S%2BXu47hgZc%2FtieTFxOrauH9N5ZflrFBsXUl9%2FNkYX0Q9Jl6C5L7%2BKy%2Bx4abiK1cWRC0TMwou%2ByvwY6pgGXaKK1N7ZErENbUOYzmMkiV1nLE9T47Xz38Mp4TfQqAxtIefRZlzHm%2BlASIDV5qAoHhVNC6tLxKZcoXIx1%2BujcadHUC8lRNK5QkVhEKhjlU4id%2FX0eXDMsvVzbrAuaFdfsCyJODs8sPcJSs%2Fb90Cx%2BYSRZL5EVkiMPVpGjEiuj3xXa6vnhyR0iNU1eZHZIruEPd%2Bi5fJnPnLPiYaf%2Ba9EzFE0oSu0a&X-Amz-Signature=d5a89965888a54f3b6109c0600ebf7845315ad2407ffde71f8c0a7c18905c315&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
