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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJN46FVU%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7sfoIL51fpmXrVAazi4H9emsDIqCL3qGmJoV5O%2BvEcAiEAuw0hBOIghGPTQ2a06ceOLwISkfIZkL7auvH8xmdlxg8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKOpLmmshGgtXK2kircA3Rh%2BieXviDYf4I%2FYTrzA08EYSBPpbMTY8foR6XCQFy08WN6S6O4TNx7t5EHv4GXMgyVHAPi%2B2C4E9%2BMoqC6FH4ypj5OEKP%2BtCcO6b5dA1XRCRXqxvbThBIDDnTbaINsm0Stai6TPROw70DN9mVphrzU1cWKmYNqcfNpkq93UXeOKWv9yHu8K2l2wKzZhBobhBZ%2BZFgpS34sCQAQXZLtTL66MFY1%2B44Oqv3JhIyOM%2BSB2sMflCADWUQAbltTC6PbMwE%2BLXwC%2BttoieBhCDDlPgMyFvGVCNBH2SRehbs8ChvKgG4o3iw9omsEogmm1Ks4a9K2KF%2ByYsdF5U3ovciwFe0NFKkj1LRRCakLuj4S7i54cnhneR1KKo0hglgrRnGDtInVXey2hv6VZJTQw1S1ZkXZqsnusJXXciZ8tDVTkU74nSTMhd%2FyJqZR0%2BcPoaHpxGd8Ad%2FP2X%2BiTT4eYxRkZWkccOVgLYEKPYLLaf09riGtJoISh2d9l93tCruZ083sy3h30VGrSy8Pm3G1A5k6ipO4I6nZkekhX3dzGPINABOolxPXMvjtDcgNh51VlVJGOT1RyrN7gLNXyjN1%2F5j8pVPxS%2FQ4V8h3MdrIvrC00CeA0%2FkUW3iu7YDbN8DhMIze09QGOqUB1TLkUDwZuC8XZmuYCvGtD8nU0IyR3bfZPzZQ1KJd9tdu4eaojG37hBgltcrvwigWvkgqKzn3BhaydOLQNVL22kO4L3gr3m%2FkTif6g9b1JlA7juC7dfViKXt0EwOZaHq0j4Q8%2BrMYe0Dyd7oIWN%2B270IXvwwXBoarMhqPr8QUsrtW97qJhA6ww4QHMo1yu1yhAnp1slCO7gPCsOcgrbyFlECcwOmP&X-Amz-Signature=6e32b3c5c6975eb64d88b50c7e3a86f68c6fa9e99e32e17065dca90659afcde6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJN46FVU%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7sfoIL51fpmXrVAazi4H9emsDIqCL3qGmJoV5O%2BvEcAiEAuw0hBOIghGPTQ2a06ceOLwISkfIZkL7auvH8xmdlxg8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKOpLmmshGgtXK2kircA3Rh%2BieXviDYf4I%2FYTrzA08EYSBPpbMTY8foR6XCQFy08WN6S6O4TNx7t5EHv4GXMgyVHAPi%2B2C4E9%2BMoqC6FH4ypj5OEKP%2BtCcO6b5dA1XRCRXqxvbThBIDDnTbaINsm0Stai6TPROw70DN9mVphrzU1cWKmYNqcfNpkq93UXeOKWv9yHu8K2l2wKzZhBobhBZ%2BZFgpS34sCQAQXZLtTL66MFY1%2B44Oqv3JhIyOM%2BSB2sMflCADWUQAbltTC6PbMwE%2BLXwC%2BttoieBhCDDlPgMyFvGVCNBH2SRehbs8ChvKgG4o3iw9omsEogmm1Ks4a9K2KF%2ByYsdF5U3ovciwFe0NFKkj1LRRCakLuj4S7i54cnhneR1KKo0hglgrRnGDtInVXey2hv6VZJTQw1S1ZkXZqsnusJXXciZ8tDVTkU74nSTMhd%2FyJqZR0%2BcPoaHpxGd8Ad%2FP2X%2BiTT4eYxRkZWkccOVgLYEKPYLLaf09riGtJoISh2d9l93tCruZ083sy3h30VGrSy8Pm3G1A5k6ipO4I6nZkekhX3dzGPINABOolxPXMvjtDcgNh51VlVJGOT1RyrN7gLNXyjN1%2F5j8pVPxS%2FQ4V8h3MdrIvrC00CeA0%2FkUW3iu7YDbN8DhMIze09QGOqUB1TLkUDwZuC8XZmuYCvGtD8nU0IyR3bfZPzZQ1KJd9tdu4eaojG37hBgltcrvwigWvkgqKzn3BhaydOLQNVL22kO4L3gr3m%2FkTif6g9b1JlA7juC7dfViKXt0EwOZaHq0j4Q8%2BrMYe0Dyd7oIWN%2B270IXvwwXBoarMhqPr8QUsrtW97qJhA6ww4QHMo1yu1yhAnp1slCO7gPCsOcgrbyFlECcwOmP&X-Amz-Signature=a8cec0feadad307a6e1f0314e810bb197a5866d8095ac390f991db8d52438faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJN46FVU%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7sfoIL51fpmXrVAazi4H9emsDIqCL3qGmJoV5O%2BvEcAiEAuw0hBOIghGPTQ2a06ceOLwISkfIZkL7auvH8xmdlxg8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKOpLmmshGgtXK2kircA3Rh%2BieXviDYf4I%2FYTrzA08EYSBPpbMTY8foR6XCQFy08WN6S6O4TNx7t5EHv4GXMgyVHAPi%2B2C4E9%2BMoqC6FH4ypj5OEKP%2BtCcO6b5dA1XRCRXqxvbThBIDDnTbaINsm0Stai6TPROw70DN9mVphrzU1cWKmYNqcfNpkq93UXeOKWv9yHu8K2l2wKzZhBobhBZ%2BZFgpS34sCQAQXZLtTL66MFY1%2B44Oqv3JhIyOM%2BSB2sMflCADWUQAbltTC6PbMwE%2BLXwC%2BttoieBhCDDlPgMyFvGVCNBH2SRehbs8ChvKgG4o3iw9omsEogmm1Ks4a9K2KF%2ByYsdF5U3ovciwFe0NFKkj1LRRCakLuj4S7i54cnhneR1KKo0hglgrRnGDtInVXey2hv6VZJTQw1S1ZkXZqsnusJXXciZ8tDVTkU74nSTMhd%2FyJqZR0%2BcPoaHpxGd8Ad%2FP2X%2BiTT4eYxRkZWkccOVgLYEKPYLLaf09riGtJoISh2d9l93tCruZ083sy3h30VGrSy8Pm3G1A5k6ipO4I6nZkekhX3dzGPINABOolxPXMvjtDcgNh51VlVJGOT1RyrN7gLNXyjN1%2F5j8pVPxS%2FQ4V8h3MdrIvrC00CeA0%2FkUW3iu7YDbN8DhMIze09QGOqUB1TLkUDwZuC8XZmuYCvGtD8nU0IyR3bfZPzZQ1KJd9tdu4eaojG37hBgltcrvwigWvkgqKzn3BhaydOLQNVL22kO4L3gr3m%2FkTif6g9b1JlA7juC7dfViKXt0EwOZaHq0j4Q8%2BrMYe0Dyd7oIWN%2B270IXvwwXBoarMhqPr8QUsrtW97qJhA6ww4QHMo1yu1yhAnp1slCO7gPCsOcgrbyFlECcwOmP&X-Amz-Signature=66f00b8e167cf736ef3a967cf80e1051fcfc4ab89cef72079d60a65c710e58e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJN46FVU%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7sfoIL51fpmXrVAazi4H9emsDIqCL3qGmJoV5O%2BvEcAiEAuw0hBOIghGPTQ2a06ceOLwISkfIZkL7auvH8xmdlxg8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKOpLmmshGgtXK2kircA3Rh%2BieXviDYf4I%2FYTrzA08EYSBPpbMTY8foR6XCQFy08WN6S6O4TNx7t5EHv4GXMgyVHAPi%2B2C4E9%2BMoqC6FH4ypj5OEKP%2BtCcO6b5dA1XRCRXqxvbThBIDDnTbaINsm0Stai6TPROw70DN9mVphrzU1cWKmYNqcfNpkq93UXeOKWv9yHu8K2l2wKzZhBobhBZ%2BZFgpS34sCQAQXZLtTL66MFY1%2B44Oqv3JhIyOM%2BSB2sMflCADWUQAbltTC6PbMwE%2BLXwC%2BttoieBhCDDlPgMyFvGVCNBH2SRehbs8ChvKgG4o3iw9omsEogmm1Ks4a9K2KF%2ByYsdF5U3ovciwFe0NFKkj1LRRCakLuj4S7i54cnhneR1KKo0hglgrRnGDtInVXey2hv6VZJTQw1S1ZkXZqsnusJXXciZ8tDVTkU74nSTMhd%2FyJqZR0%2BcPoaHpxGd8Ad%2FP2X%2BiTT4eYxRkZWkccOVgLYEKPYLLaf09riGtJoISh2d9l93tCruZ083sy3h30VGrSy8Pm3G1A5k6ipO4I6nZkekhX3dzGPINABOolxPXMvjtDcgNh51VlVJGOT1RyrN7gLNXyjN1%2F5j8pVPxS%2FQ4V8h3MdrIvrC00CeA0%2FkUW3iu7YDbN8DhMIze09QGOqUB1TLkUDwZuC8XZmuYCvGtD8nU0IyR3bfZPzZQ1KJd9tdu4eaojG37hBgltcrvwigWvkgqKzn3BhaydOLQNVL22kO4L3gr3m%2FkTif6g9b1JlA7juC7dfViKXt0EwOZaHq0j4Q8%2BrMYe0Dyd7oIWN%2B270IXvwwXBoarMhqPr8QUsrtW97qJhA6ww4QHMo1yu1yhAnp1slCO7gPCsOcgrbyFlECcwOmP&X-Amz-Signature=2f086c8ff5dde425d92501145af3e69728da74256adec9a348b2158ef786b1ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJN46FVU%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7sfoIL51fpmXrVAazi4H9emsDIqCL3qGmJoV5O%2BvEcAiEAuw0hBOIghGPTQ2a06ceOLwISkfIZkL7auvH8xmdlxg8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKOpLmmshGgtXK2kircA3Rh%2BieXviDYf4I%2FYTrzA08EYSBPpbMTY8foR6XCQFy08WN6S6O4TNx7t5EHv4GXMgyVHAPi%2B2C4E9%2BMoqC6FH4ypj5OEKP%2BtCcO6b5dA1XRCRXqxvbThBIDDnTbaINsm0Stai6TPROw70DN9mVphrzU1cWKmYNqcfNpkq93UXeOKWv9yHu8K2l2wKzZhBobhBZ%2BZFgpS34sCQAQXZLtTL66MFY1%2B44Oqv3JhIyOM%2BSB2sMflCADWUQAbltTC6PbMwE%2BLXwC%2BttoieBhCDDlPgMyFvGVCNBH2SRehbs8ChvKgG4o3iw9omsEogmm1Ks4a9K2KF%2ByYsdF5U3ovciwFe0NFKkj1LRRCakLuj4S7i54cnhneR1KKo0hglgrRnGDtInVXey2hv6VZJTQw1S1ZkXZqsnusJXXciZ8tDVTkU74nSTMhd%2FyJqZR0%2BcPoaHpxGd8Ad%2FP2X%2BiTT4eYxRkZWkccOVgLYEKPYLLaf09riGtJoISh2d9l93tCruZ083sy3h30VGrSy8Pm3G1A5k6ipO4I6nZkekhX3dzGPINABOolxPXMvjtDcgNh51VlVJGOT1RyrN7gLNXyjN1%2F5j8pVPxS%2FQ4V8h3MdrIvrC00CeA0%2FkUW3iu7YDbN8DhMIze09QGOqUB1TLkUDwZuC8XZmuYCvGtD8nU0IyR3bfZPzZQ1KJd9tdu4eaojG37hBgltcrvwigWvkgqKzn3BhaydOLQNVL22kO4L3gr3m%2FkTif6g9b1JlA7juC7dfViKXt0EwOZaHq0j4Q8%2BrMYe0Dyd7oIWN%2B270IXvwwXBoarMhqPr8QUsrtW97qJhA6ww4QHMo1yu1yhAnp1slCO7gPCsOcgrbyFlECcwOmP&X-Amz-Signature=eefdad3c6ff8194b78ef879270576fc994c06cfdf26196e3d3433958d1930dce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
