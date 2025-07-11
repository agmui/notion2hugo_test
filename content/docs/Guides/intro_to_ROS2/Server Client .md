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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZF4HQN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBujoT%2B9fEsOJo0XM%2FynvBp%2BlM06wKlMtKWbQivWW0bqAiBqk2tiHKcRYEB%2BJgQuCFcVtuYvzl5rrydkPBhIJIY9%2BSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7Hy0MqmlXCDC0u%2BKtwDeHbrHBnv9xDYrITFgjcZ1zKSW1n4uMJjiji5%2FJ4CkH6psFx2ZkAP8QHqMSs9MMc%2FdovF0Og0iNw8zBMNzOCKl76cjTJunSPX%2Bf2%2BYhUPuSPVwccf5kf8CXNbNK548Umh6m58Q2TT%2FIqysAw9ILiDnGB48M%2FmFO8yCvRJqUwyhlJZ87tGXDppxufkII%2F9E0F0DDY3d9XGTY3Ij0KpImENEaodjo%2Fd07nNfxJFCmwI41cyZTX5rsouj6%2Fl2KcYn%2FMuxDUAucf2LpWoQpQonYGjrXmTxJ09t4tmgir1J4QpzTQn78ysAumiUxpmW7fcEri095xeE9fqILbPakDvoTigYy2vxxc%2FHT0PAub9yuvuI5j2QqIXrnLUMti7q62pCfZfDYrVSL78VdRx2D4I00SzWFOIkQx%2F4gt7pq3eBaue13P5VDhDUiAVbjcRCUyCFMunwMR331ToOu%2FRMmR%2FitJjEkUlP3F8k2vPWfNha71HLCtTGlD%2BO6VfntG9giz4uLromTh1rcXpLJdPfALNtY7m7dL4y2%2FNGRvpVCMM3rQlDYNaX6BsrLTNS4p4qHys7QQf315DvzFgaVLVWGrxL6I1SI5hEyqfF2UtpdPan%2BjwKIJStvyH7OizFss8iwcw2KbCwwY6pgHaE5vCK3Ry4OW7e7gL4UiHJxykFbHyGaVXFQuWUb4t51dFRC44oNx%2BH3%2Bla5yuFqMb8gdsmDS29vPV8fy1cRAwl1MnZr3bNZ1yAOjcJo0IkG0uhc9IzygwB86KQNz6VazgNRkY4nb%2BLwXfGqTEUzahrRkRcQthDZdYVg9qjQr2R8VPtIUX1EgFbe1j5LX%2B6wJnVFR6QPfGCsBr5zktKTGxHM5mFnEB&X-Amz-Signature=b7a1323382ec280172cc73efa27a03aca4d6761de18d9dae1684c46a710b2b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZF4HQN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBujoT%2B9fEsOJo0XM%2FynvBp%2BlM06wKlMtKWbQivWW0bqAiBqk2tiHKcRYEB%2BJgQuCFcVtuYvzl5rrydkPBhIJIY9%2BSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7Hy0MqmlXCDC0u%2BKtwDeHbrHBnv9xDYrITFgjcZ1zKSW1n4uMJjiji5%2FJ4CkH6psFx2ZkAP8QHqMSs9MMc%2FdovF0Og0iNw8zBMNzOCKl76cjTJunSPX%2Bf2%2BYhUPuSPVwccf5kf8CXNbNK548Umh6m58Q2TT%2FIqysAw9ILiDnGB48M%2FmFO8yCvRJqUwyhlJZ87tGXDppxufkII%2F9E0F0DDY3d9XGTY3Ij0KpImENEaodjo%2Fd07nNfxJFCmwI41cyZTX5rsouj6%2Fl2KcYn%2FMuxDUAucf2LpWoQpQonYGjrXmTxJ09t4tmgir1J4QpzTQn78ysAumiUxpmW7fcEri095xeE9fqILbPakDvoTigYy2vxxc%2FHT0PAub9yuvuI5j2QqIXrnLUMti7q62pCfZfDYrVSL78VdRx2D4I00SzWFOIkQx%2F4gt7pq3eBaue13P5VDhDUiAVbjcRCUyCFMunwMR331ToOu%2FRMmR%2FitJjEkUlP3F8k2vPWfNha71HLCtTGlD%2BO6VfntG9giz4uLromTh1rcXpLJdPfALNtY7m7dL4y2%2FNGRvpVCMM3rQlDYNaX6BsrLTNS4p4qHys7QQf315DvzFgaVLVWGrxL6I1SI5hEyqfF2UtpdPan%2BjwKIJStvyH7OizFss8iwcw2KbCwwY6pgHaE5vCK3Ry4OW7e7gL4UiHJxykFbHyGaVXFQuWUb4t51dFRC44oNx%2BH3%2Bla5yuFqMb8gdsmDS29vPV8fy1cRAwl1MnZr3bNZ1yAOjcJo0IkG0uhc9IzygwB86KQNz6VazgNRkY4nb%2BLwXfGqTEUzahrRkRcQthDZdYVg9qjQr2R8VPtIUX1EgFbe1j5LX%2B6wJnVFR6QPfGCsBr5zktKTGxHM5mFnEB&X-Amz-Signature=45f5bb5fb677772e356de0baa86f4b5047109c8d191104b1d047466dd87fe137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZF4HQN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBujoT%2B9fEsOJo0XM%2FynvBp%2BlM06wKlMtKWbQivWW0bqAiBqk2tiHKcRYEB%2BJgQuCFcVtuYvzl5rrydkPBhIJIY9%2BSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7Hy0MqmlXCDC0u%2BKtwDeHbrHBnv9xDYrITFgjcZ1zKSW1n4uMJjiji5%2FJ4CkH6psFx2ZkAP8QHqMSs9MMc%2FdovF0Og0iNw8zBMNzOCKl76cjTJunSPX%2Bf2%2BYhUPuSPVwccf5kf8CXNbNK548Umh6m58Q2TT%2FIqysAw9ILiDnGB48M%2FmFO8yCvRJqUwyhlJZ87tGXDppxufkII%2F9E0F0DDY3d9XGTY3Ij0KpImENEaodjo%2Fd07nNfxJFCmwI41cyZTX5rsouj6%2Fl2KcYn%2FMuxDUAucf2LpWoQpQonYGjrXmTxJ09t4tmgir1J4QpzTQn78ysAumiUxpmW7fcEri095xeE9fqILbPakDvoTigYy2vxxc%2FHT0PAub9yuvuI5j2QqIXrnLUMti7q62pCfZfDYrVSL78VdRx2D4I00SzWFOIkQx%2F4gt7pq3eBaue13P5VDhDUiAVbjcRCUyCFMunwMR331ToOu%2FRMmR%2FitJjEkUlP3F8k2vPWfNha71HLCtTGlD%2BO6VfntG9giz4uLromTh1rcXpLJdPfALNtY7m7dL4y2%2FNGRvpVCMM3rQlDYNaX6BsrLTNS4p4qHys7QQf315DvzFgaVLVWGrxL6I1SI5hEyqfF2UtpdPan%2BjwKIJStvyH7OizFss8iwcw2KbCwwY6pgHaE5vCK3Ry4OW7e7gL4UiHJxykFbHyGaVXFQuWUb4t51dFRC44oNx%2BH3%2Bla5yuFqMb8gdsmDS29vPV8fy1cRAwl1MnZr3bNZ1yAOjcJo0IkG0uhc9IzygwB86KQNz6VazgNRkY4nb%2BLwXfGqTEUzahrRkRcQthDZdYVg9qjQr2R8VPtIUX1EgFbe1j5LX%2B6wJnVFR6QPfGCsBr5zktKTGxHM5mFnEB&X-Amz-Signature=b2739aa28428dd0c241f9227e0e5b4e8d3b7fd2ac16a5689c662a311ae7e8dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZF4HQN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBujoT%2B9fEsOJo0XM%2FynvBp%2BlM06wKlMtKWbQivWW0bqAiBqk2tiHKcRYEB%2BJgQuCFcVtuYvzl5rrydkPBhIJIY9%2BSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7Hy0MqmlXCDC0u%2BKtwDeHbrHBnv9xDYrITFgjcZ1zKSW1n4uMJjiji5%2FJ4CkH6psFx2ZkAP8QHqMSs9MMc%2FdovF0Og0iNw8zBMNzOCKl76cjTJunSPX%2Bf2%2BYhUPuSPVwccf5kf8CXNbNK548Umh6m58Q2TT%2FIqysAw9ILiDnGB48M%2FmFO8yCvRJqUwyhlJZ87tGXDppxufkII%2F9E0F0DDY3d9XGTY3Ij0KpImENEaodjo%2Fd07nNfxJFCmwI41cyZTX5rsouj6%2Fl2KcYn%2FMuxDUAucf2LpWoQpQonYGjrXmTxJ09t4tmgir1J4QpzTQn78ysAumiUxpmW7fcEri095xeE9fqILbPakDvoTigYy2vxxc%2FHT0PAub9yuvuI5j2QqIXrnLUMti7q62pCfZfDYrVSL78VdRx2D4I00SzWFOIkQx%2F4gt7pq3eBaue13P5VDhDUiAVbjcRCUyCFMunwMR331ToOu%2FRMmR%2FitJjEkUlP3F8k2vPWfNha71HLCtTGlD%2BO6VfntG9giz4uLromTh1rcXpLJdPfALNtY7m7dL4y2%2FNGRvpVCMM3rQlDYNaX6BsrLTNS4p4qHys7QQf315DvzFgaVLVWGrxL6I1SI5hEyqfF2UtpdPan%2BjwKIJStvyH7OizFss8iwcw2KbCwwY6pgHaE5vCK3Ry4OW7e7gL4UiHJxykFbHyGaVXFQuWUb4t51dFRC44oNx%2BH3%2Bla5yuFqMb8gdsmDS29vPV8fy1cRAwl1MnZr3bNZ1yAOjcJo0IkG0uhc9IzygwB86KQNz6VazgNRkY4nb%2BLwXfGqTEUzahrRkRcQthDZdYVg9qjQr2R8VPtIUX1EgFbe1j5LX%2B6wJnVFR6QPfGCsBr5zktKTGxHM5mFnEB&X-Amz-Signature=d351ef7ea4a2069a46575f5304ad93eab42b1c6a9a24b27d41039aa308f557b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZF4HQN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBujoT%2B9fEsOJo0XM%2FynvBp%2BlM06wKlMtKWbQivWW0bqAiBqk2tiHKcRYEB%2BJgQuCFcVtuYvzl5rrydkPBhIJIY9%2BSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7Hy0MqmlXCDC0u%2BKtwDeHbrHBnv9xDYrITFgjcZ1zKSW1n4uMJjiji5%2FJ4CkH6psFx2ZkAP8QHqMSs9MMc%2FdovF0Og0iNw8zBMNzOCKl76cjTJunSPX%2Bf2%2BYhUPuSPVwccf5kf8CXNbNK548Umh6m58Q2TT%2FIqysAw9ILiDnGB48M%2FmFO8yCvRJqUwyhlJZ87tGXDppxufkII%2F9E0F0DDY3d9XGTY3Ij0KpImENEaodjo%2Fd07nNfxJFCmwI41cyZTX5rsouj6%2Fl2KcYn%2FMuxDUAucf2LpWoQpQonYGjrXmTxJ09t4tmgir1J4QpzTQn78ysAumiUxpmW7fcEri095xeE9fqILbPakDvoTigYy2vxxc%2FHT0PAub9yuvuI5j2QqIXrnLUMti7q62pCfZfDYrVSL78VdRx2D4I00SzWFOIkQx%2F4gt7pq3eBaue13P5VDhDUiAVbjcRCUyCFMunwMR331ToOu%2FRMmR%2FitJjEkUlP3F8k2vPWfNha71HLCtTGlD%2BO6VfntG9giz4uLromTh1rcXpLJdPfALNtY7m7dL4y2%2FNGRvpVCMM3rQlDYNaX6BsrLTNS4p4qHys7QQf315DvzFgaVLVWGrxL6I1SI5hEyqfF2UtpdPan%2BjwKIJStvyH7OizFss8iwcw2KbCwwY6pgHaE5vCK3Ry4OW7e7gL4UiHJxykFbHyGaVXFQuWUb4t51dFRC44oNx%2BH3%2Bla5yuFqMb8gdsmDS29vPV8fy1cRAwl1MnZr3bNZ1yAOjcJo0IkG0uhc9IzygwB86KQNz6VazgNRkY4nb%2BLwXfGqTEUzahrRkRcQthDZdYVg9qjQr2R8VPtIUX1EgFbe1j5LX%2B6wJnVFR6QPfGCsBr5zktKTGxHM5mFnEB&X-Amz-Signature=30998b0dfc1283c14d01a57bd1425f6962a9e53310932f079b13d4b653fe209c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
