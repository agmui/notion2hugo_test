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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIRQPSEP%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNvspCnXNDHMc2iR9ZFm8ASsg1yv2H8cFZjlwDO5euxAIgWzZyO6W5BW%2BviyMXwNrGngnhS7HVwj%2FAqHZqwykmZ0oq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBubwF83fQ3AaltcEircAxFDkf8KMiDIyn5WLAxg%2F5z9lgQwLId82sRjdlN%2BSAQDf%2FyRqavz21xj8beHpHmlJtAU7iHfiMaV8BFC3WWEWm3m6AewPClrgwAbP4jvXV7izmKoyaevxApjgCW2DOE7j9Pj2H27%2FM1Tu02oUcRkb%2Bstc%2FcvQhGriQfLBeSoexFDOk0bVTs7Yl%2FqPlsytAeMElHkvFwU9kspKiL7ULEwClZSqhuh%2F5T1ZC%2F7VMYfcL68ynFzJaNIILvQ1%2Bpu8YrnpnrkyKfGAj9Vhtn2FY6%2Bq%2Bb%2F5bm0gz14vLiEyGHDDpnKQ%2FFMT0oM28yvaHS2N9%2B7EQqixybZSbyKgEawfRyMrhVmlZEBKec9DZ74XMoJ9i1e2edTyXzr5HNkEG7kQ8%2By0mytUMnrR3xFu3s5r%2FjusoE2vP%2BlF8DcV1dc9gal9YcuZNGRP7pxBEMruLYFsoEcA%2BGi83vmFFmpiIdVTVXCArv9LEcNI%2BxTMr%2FndvMQqLaYRB8CldFsrTtrLLL6TNkJgcoZR7yUoo6B90D4Dqh802jf%2BXH9o3ZGtlOax3SoPPVUnuCPFf%2FBLrwhXOZHWoOyWebsdOJQtwmnn%2B6ARXc5dHE0GLyGtk2Aminwfks2zoJ72WKYMWmaKcPegJxJMLavhMAGOqUB41fAJhEULGy8ZwXVJ28iQKSwhMcvnrOcyhONCYE2K5YtXBWyV06ekSAVKIg0Kw7ntOcv%2F43wCJo3EloD46CKimNrD3yPecpVXvQ60z%2FBnDc4SNOn7hhqXx6Eplu0qL9Ue1%2Br9TLTMYAW%2FIwUwshgU6%2BKcSJxFYxiQdcP5oCAjdaClA%2Bt%2BWEor%2BwURMOi7HPBuEXuEpbE5MP7dmougMl2M%2F%2BOVeL8&X-Amz-Signature=243b6db20bd26785659a70fbc82722177e5d32454c6057f37358cb21c6c46fc2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIRQPSEP%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNvspCnXNDHMc2iR9ZFm8ASsg1yv2H8cFZjlwDO5euxAIgWzZyO6W5BW%2BviyMXwNrGngnhS7HVwj%2FAqHZqwykmZ0oq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBubwF83fQ3AaltcEircAxFDkf8KMiDIyn5WLAxg%2F5z9lgQwLId82sRjdlN%2BSAQDf%2FyRqavz21xj8beHpHmlJtAU7iHfiMaV8BFC3WWEWm3m6AewPClrgwAbP4jvXV7izmKoyaevxApjgCW2DOE7j9Pj2H27%2FM1Tu02oUcRkb%2Bstc%2FcvQhGriQfLBeSoexFDOk0bVTs7Yl%2FqPlsytAeMElHkvFwU9kspKiL7ULEwClZSqhuh%2F5T1ZC%2F7VMYfcL68ynFzJaNIILvQ1%2Bpu8YrnpnrkyKfGAj9Vhtn2FY6%2Bq%2Bb%2F5bm0gz14vLiEyGHDDpnKQ%2FFMT0oM28yvaHS2N9%2B7EQqixybZSbyKgEawfRyMrhVmlZEBKec9DZ74XMoJ9i1e2edTyXzr5HNkEG7kQ8%2By0mytUMnrR3xFu3s5r%2FjusoE2vP%2BlF8DcV1dc9gal9YcuZNGRP7pxBEMruLYFsoEcA%2BGi83vmFFmpiIdVTVXCArv9LEcNI%2BxTMr%2FndvMQqLaYRB8CldFsrTtrLLL6TNkJgcoZR7yUoo6B90D4Dqh802jf%2BXH9o3ZGtlOax3SoPPVUnuCPFf%2FBLrwhXOZHWoOyWebsdOJQtwmnn%2B6ARXc5dHE0GLyGtk2Aminwfks2zoJ72WKYMWmaKcPegJxJMLavhMAGOqUB41fAJhEULGy8ZwXVJ28iQKSwhMcvnrOcyhONCYE2K5YtXBWyV06ekSAVKIg0Kw7ntOcv%2F43wCJo3EloD46CKimNrD3yPecpVXvQ60z%2FBnDc4SNOn7hhqXx6Eplu0qL9Ue1%2Br9TLTMYAW%2FIwUwshgU6%2BKcSJxFYxiQdcP5oCAjdaClA%2Bt%2BWEor%2BwURMOi7HPBuEXuEpbE5MP7dmougMl2M%2F%2BOVeL8&X-Amz-Signature=7514be7a8a6d257a0204e9b44f68f46eeef1b880ce8f3cea219976aa432588d3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIRQPSEP%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNvspCnXNDHMc2iR9ZFm8ASsg1yv2H8cFZjlwDO5euxAIgWzZyO6W5BW%2BviyMXwNrGngnhS7HVwj%2FAqHZqwykmZ0oq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBubwF83fQ3AaltcEircAxFDkf8KMiDIyn5WLAxg%2F5z9lgQwLId82sRjdlN%2BSAQDf%2FyRqavz21xj8beHpHmlJtAU7iHfiMaV8BFC3WWEWm3m6AewPClrgwAbP4jvXV7izmKoyaevxApjgCW2DOE7j9Pj2H27%2FM1Tu02oUcRkb%2Bstc%2FcvQhGriQfLBeSoexFDOk0bVTs7Yl%2FqPlsytAeMElHkvFwU9kspKiL7ULEwClZSqhuh%2F5T1ZC%2F7VMYfcL68ynFzJaNIILvQ1%2Bpu8YrnpnrkyKfGAj9Vhtn2FY6%2Bq%2Bb%2F5bm0gz14vLiEyGHDDpnKQ%2FFMT0oM28yvaHS2N9%2B7EQqixybZSbyKgEawfRyMrhVmlZEBKec9DZ74XMoJ9i1e2edTyXzr5HNkEG7kQ8%2By0mytUMnrR3xFu3s5r%2FjusoE2vP%2BlF8DcV1dc9gal9YcuZNGRP7pxBEMruLYFsoEcA%2BGi83vmFFmpiIdVTVXCArv9LEcNI%2BxTMr%2FndvMQqLaYRB8CldFsrTtrLLL6TNkJgcoZR7yUoo6B90D4Dqh802jf%2BXH9o3ZGtlOax3SoPPVUnuCPFf%2FBLrwhXOZHWoOyWebsdOJQtwmnn%2B6ARXc5dHE0GLyGtk2Aminwfks2zoJ72WKYMWmaKcPegJxJMLavhMAGOqUB41fAJhEULGy8ZwXVJ28iQKSwhMcvnrOcyhONCYE2K5YtXBWyV06ekSAVKIg0Kw7ntOcv%2F43wCJo3EloD46CKimNrD3yPecpVXvQ60z%2FBnDc4SNOn7hhqXx6Eplu0qL9Ue1%2Br9TLTMYAW%2FIwUwshgU6%2BKcSJxFYxiQdcP5oCAjdaClA%2Bt%2BWEor%2BwURMOi7HPBuEXuEpbE5MP7dmougMl2M%2F%2BOVeL8&X-Amz-Signature=ee382708f0d380f982688430dca29337515459c9f1d8dcfaf811d524037a7e16&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIRQPSEP%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNvspCnXNDHMc2iR9ZFm8ASsg1yv2H8cFZjlwDO5euxAIgWzZyO6W5BW%2BviyMXwNrGngnhS7HVwj%2FAqHZqwykmZ0oq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBubwF83fQ3AaltcEircAxFDkf8KMiDIyn5WLAxg%2F5z9lgQwLId82sRjdlN%2BSAQDf%2FyRqavz21xj8beHpHmlJtAU7iHfiMaV8BFC3WWEWm3m6AewPClrgwAbP4jvXV7izmKoyaevxApjgCW2DOE7j9Pj2H27%2FM1Tu02oUcRkb%2Bstc%2FcvQhGriQfLBeSoexFDOk0bVTs7Yl%2FqPlsytAeMElHkvFwU9kspKiL7ULEwClZSqhuh%2F5T1ZC%2F7VMYfcL68ynFzJaNIILvQ1%2Bpu8YrnpnrkyKfGAj9Vhtn2FY6%2Bq%2Bb%2F5bm0gz14vLiEyGHDDpnKQ%2FFMT0oM28yvaHS2N9%2B7EQqixybZSbyKgEawfRyMrhVmlZEBKec9DZ74XMoJ9i1e2edTyXzr5HNkEG7kQ8%2By0mytUMnrR3xFu3s5r%2FjusoE2vP%2BlF8DcV1dc9gal9YcuZNGRP7pxBEMruLYFsoEcA%2BGi83vmFFmpiIdVTVXCArv9LEcNI%2BxTMr%2FndvMQqLaYRB8CldFsrTtrLLL6TNkJgcoZR7yUoo6B90D4Dqh802jf%2BXH9o3ZGtlOax3SoPPVUnuCPFf%2FBLrwhXOZHWoOyWebsdOJQtwmnn%2B6ARXc5dHE0GLyGtk2Aminwfks2zoJ72WKYMWmaKcPegJxJMLavhMAGOqUB41fAJhEULGy8ZwXVJ28iQKSwhMcvnrOcyhONCYE2K5YtXBWyV06ekSAVKIg0Kw7ntOcv%2F43wCJo3EloD46CKimNrD3yPecpVXvQ60z%2FBnDc4SNOn7hhqXx6Eplu0qL9Ue1%2Br9TLTMYAW%2FIwUwshgU6%2BKcSJxFYxiQdcP5oCAjdaClA%2Bt%2BWEor%2BwURMOi7HPBuEXuEpbE5MP7dmougMl2M%2F%2BOVeL8&X-Amz-Signature=a7c0caf0d159a10131e5afbfa1bf0e8f7c78e981be0ac0ad38ef0cdffd0bb4b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIRQPSEP%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNvspCnXNDHMc2iR9ZFm8ASsg1yv2H8cFZjlwDO5euxAIgWzZyO6W5BW%2BviyMXwNrGngnhS7HVwj%2FAqHZqwykmZ0oq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBubwF83fQ3AaltcEircAxFDkf8KMiDIyn5WLAxg%2F5z9lgQwLId82sRjdlN%2BSAQDf%2FyRqavz21xj8beHpHmlJtAU7iHfiMaV8BFC3WWEWm3m6AewPClrgwAbP4jvXV7izmKoyaevxApjgCW2DOE7j9Pj2H27%2FM1Tu02oUcRkb%2Bstc%2FcvQhGriQfLBeSoexFDOk0bVTs7Yl%2FqPlsytAeMElHkvFwU9kspKiL7ULEwClZSqhuh%2F5T1ZC%2F7VMYfcL68ynFzJaNIILvQ1%2Bpu8YrnpnrkyKfGAj9Vhtn2FY6%2Bq%2Bb%2F5bm0gz14vLiEyGHDDpnKQ%2FFMT0oM28yvaHS2N9%2B7EQqixybZSbyKgEawfRyMrhVmlZEBKec9DZ74XMoJ9i1e2edTyXzr5HNkEG7kQ8%2By0mytUMnrR3xFu3s5r%2FjusoE2vP%2BlF8DcV1dc9gal9YcuZNGRP7pxBEMruLYFsoEcA%2BGi83vmFFmpiIdVTVXCArv9LEcNI%2BxTMr%2FndvMQqLaYRB8CldFsrTtrLLL6TNkJgcoZR7yUoo6B90D4Dqh802jf%2BXH9o3ZGtlOax3SoPPVUnuCPFf%2FBLrwhXOZHWoOyWebsdOJQtwmnn%2B6ARXc5dHE0GLyGtk2Aminwfks2zoJ72WKYMWmaKcPegJxJMLavhMAGOqUB41fAJhEULGy8ZwXVJ28iQKSwhMcvnrOcyhONCYE2K5YtXBWyV06ekSAVKIg0Kw7ntOcv%2F43wCJo3EloD46CKimNrD3yPecpVXvQ60z%2FBnDc4SNOn7hhqXx6Eplu0qL9Ue1%2Br9TLTMYAW%2FIwUwshgU6%2BKcSJxFYxiQdcP5oCAjdaClA%2Bt%2BWEor%2BwURMOi7HPBuEXuEpbE5MP7dmougMl2M%2F%2BOVeL8&X-Amz-Signature=710f6a0782bd0667e64622d19c11baaff63b323740663a283a415c5485c73c29&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
