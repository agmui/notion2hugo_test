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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWMOE4VL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlS9qmkSOGMfVOl1zTu2PparJGGSZseBJqrhf62It3LAiEAyugH3NI7FG0VHOQREvl59J4YzCOoofFy9B8ngrzYF3wqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjRWAuGXGEW8tUWCCrcA%2FtNxtrNmcQe5IHD1HLaA03R7KrMDJ1cfEOmma1ZDPkhROHYy705nvUQ53sUqSJcmJewjEC%2BHMqDzFEX03LJwPY4f5SkVJUEetg8M7PH7Ve7DAAPB54pj%2BGVJwiHVXLCsmjADUDjizCi9EcLnn1wKRLeeUBVpNAvEdulWztsBQ9fHNXaPEd82TXb6L0vZKEGhHawwYhiqptu%2F8i3S4Q5tI5RarF1rWL3Z4z4oeRKe%2BCOWUeFyUXIfzjFSuQOcb3LD41Ho6IClfLFyoyXolEguCkN47drRcGaZWqzXxnwnHlGjzs%2BWSFXP1kYL2JPy44JDsgWSvOaPxPhhake1AinNaLfFTIZ8nhN3LWdcfwyx%2BpwO%2BeHQokUlciABWFXvl%2FMZ2p9XYeBosN4oF9MqyLQlt%2BNi%2BZ5GgLD8EPrKT8u7e2pFs9H%2BaPmH8tJ4u4DAkwj2Y2giEdzkNwJJGp1NOHg2YXjLfSdEQzoCDx9Asb%2FjoiXp0sM0HlNszoi4%2F69cAvfHtRuKXIkBVRnK3r7oysiFe9trJZmfk7xc%2BtRzCBIdnSkuEfWLBxI9VXZbCdRSR8RwYHvLSL%2B1oFSt3QCapivOKnwlfJ5I7J0UQvL10kH5mNeCydGHEz6CTkIc%2FnwMPT178MGOqUBd%2F9YJTaqlzWp8vrPad7iqS43%2BJ8SR62JUDPJXTs7%2BevLZRnG8Rkgnf%2BYp0WV5b0MzYahbc8%2FKFeSzgVBjc3lkOagU6wg5MnzcOcM7kYW52j9VHSFDQ74rGWJHTKYE3%2BQbrbBO%2FSoSFYmdceTZ7BkXaiX27W7RcGichZfpcInHys9LxpKEU6akmWhJPanLH%2FzYOg7AeJN2U%2Fn6FQtrJEvyWoNQ5A%2F&X-Amz-Signature=ba8769c5de156eecebf8c166a58229780002897ec199657e116b584b19598b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWMOE4VL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlS9qmkSOGMfVOl1zTu2PparJGGSZseBJqrhf62It3LAiEAyugH3NI7FG0VHOQREvl59J4YzCOoofFy9B8ngrzYF3wqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjRWAuGXGEW8tUWCCrcA%2FtNxtrNmcQe5IHD1HLaA03R7KrMDJ1cfEOmma1ZDPkhROHYy705nvUQ53sUqSJcmJewjEC%2BHMqDzFEX03LJwPY4f5SkVJUEetg8M7PH7Ve7DAAPB54pj%2BGVJwiHVXLCsmjADUDjizCi9EcLnn1wKRLeeUBVpNAvEdulWztsBQ9fHNXaPEd82TXb6L0vZKEGhHawwYhiqptu%2F8i3S4Q5tI5RarF1rWL3Z4z4oeRKe%2BCOWUeFyUXIfzjFSuQOcb3LD41Ho6IClfLFyoyXolEguCkN47drRcGaZWqzXxnwnHlGjzs%2BWSFXP1kYL2JPy44JDsgWSvOaPxPhhake1AinNaLfFTIZ8nhN3LWdcfwyx%2BpwO%2BeHQokUlciABWFXvl%2FMZ2p9XYeBosN4oF9MqyLQlt%2BNi%2BZ5GgLD8EPrKT8u7e2pFs9H%2BaPmH8tJ4u4DAkwj2Y2giEdzkNwJJGp1NOHg2YXjLfSdEQzoCDx9Asb%2FjoiXp0sM0HlNszoi4%2F69cAvfHtRuKXIkBVRnK3r7oysiFe9trJZmfk7xc%2BtRzCBIdnSkuEfWLBxI9VXZbCdRSR8RwYHvLSL%2B1oFSt3QCapivOKnwlfJ5I7J0UQvL10kH5mNeCydGHEz6CTkIc%2FnwMPT178MGOqUBd%2F9YJTaqlzWp8vrPad7iqS43%2BJ8SR62JUDPJXTs7%2BevLZRnG8Rkgnf%2BYp0WV5b0MzYahbc8%2FKFeSzgVBjc3lkOagU6wg5MnzcOcM7kYW52j9VHSFDQ74rGWJHTKYE3%2BQbrbBO%2FSoSFYmdceTZ7BkXaiX27W7RcGichZfpcInHys9LxpKEU6akmWhJPanLH%2FzYOg7AeJN2U%2Fn6FQtrJEvyWoNQ5A%2F&X-Amz-Signature=2112eedd83eafd184f7040a4eb5f39a5f8acfc016408c6dafae82eef0aded412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWMOE4VL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlS9qmkSOGMfVOl1zTu2PparJGGSZseBJqrhf62It3LAiEAyugH3NI7FG0VHOQREvl59J4YzCOoofFy9B8ngrzYF3wqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjRWAuGXGEW8tUWCCrcA%2FtNxtrNmcQe5IHD1HLaA03R7KrMDJ1cfEOmma1ZDPkhROHYy705nvUQ53sUqSJcmJewjEC%2BHMqDzFEX03LJwPY4f5SkVJUEetg8M7PH7Ve7DAAPB54pj%2BGVJwiHVXLCsmjADUDjizCi9EcLnn1wKRLeeUBVpNAvEdulWztsBQ9fHNXaPEd82TXb6L0vZKEGhHawwYhiqptu%2F8i3S4Q5tI5RarF1rWL3Z4z4oeRKe%2BCOWUeFyUXIfzjFSuQOcb3LD41Ho6IClfLFyoyXolEguCkN47drRcGaZWqzXxnwnHlGjzs%2BWSFXP1kYL2JPy44JDsgWSvOaPxPhhake1AinNaLfFTIZ8nhN3LWdcfwyx%2BpwO%2BeHQokUlciABWFXvl%2FMZ2p9XYeBosN4oF9MqyLQlt%2BNi%2BZ5GgLD8EPrKT8u7e2pFs9H%2BaPmH8tJ4u4DAkwj2Y2giEdzkNwJJGp1NOHg2YXjLfSdEQzoCDx9Asb%2FjoiXp0sM0HlNszoi4%2F69cAvfHtRuKXIkBVRnK3r7oysiFe9trJZmfk7xc%2BtRzCBIdnSkuEfWLBxI9VXZbCdRSR8RwYHvLSL%2B1oFSt3QCapivOKnwlfJ5I7J0UQvL10kH5mNeCydGHEz6CTkIc%2FnwMPT178MGOqUBd%2F9YJTaqlzWp8vrPad7iqS43%2BJ8SR62JUDPJXTs7%2BevLZRnG8Rkgnf%2BYp0WV5b0MzYahbc8%2FKFeSzgVBjc3lkOagU6wg5MnzcOcM7kYW52j9VHSFDQ74rGWJHTKYE3%2BQbrbBO%2FSoSFYmdceTZ7BkXaiX27W7RcGichZfpcInHys9LxpKEU6akmWhJPanLH%2FzYOg7AeJN2U%2Fn6FQtrJEvyWoNQ5A%2F&X-Amz-Signature=11a9a6aefb34fbd9dccace24b749c200489e9710e5ae7128df2756a1d1c4abda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWMOE4VL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlS9qmkSOGMfVOl1zTu2PparJGGSZseBJqrhf62It3LAiEAyugH3NI7FG0VHOQREvl59J4YzCOoofFy9B8ngrzYF3wqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjRWAuGXGEW8tUWCCrcA%2FtNxtrNmcQe5IHD1HLaA03R7KrMDJ1cfEOmma1ZDPkhROHYy705nvUQ53sUqSJcmJewjEC%2BHMqDzFEX03LJwPY4f5SkVJUEetg8M7PH7Ve7DAAPB54pj%2BGVJwiHVXLCsmjADUDjizCi9EcLnn1wKRLeeUBVpNAvEdulWztsBQ9fHNXaPEd82TXb6L0vZKEGhHawwYhiqptu%2F8i3S4Q5tI5RarF1rWL3Z4z4oeRKe%2BCOWUeFyUXIfzjFSuQOcb3LD41Ho6IClfLFyoyXolEguCkN47drRcGaZWqzXxnwnHlGjzs%2BWSFXP1kYL2JPy44JDsgWSvOaPxPhhake1AinNaLfFTIZ8nhN3LWdcfwyx%2BpwO%2BeHQokUlciABWFXvl%2FMZ2p9XYeBosN4oF9MqyLQlt%2BNi%2BZ5GgLD8EPrKT8u7e2pFs9H%2BaPmH8tJ4u4DAkwj2Y2giEdzkNwJJGp1NOHg2YXjLfSdEQzoCDx9Asb%2FjoiXp0sM0HlNszoi4%2F69cAvfHtRuKXIkBVRnK3r7oysiFe9trJZmfk7xc%2BtRzCBIdnSkuEfWLBxI9VXZbCdRSR8RwYHvLSL%2B1oFSt3QCapivOKnwlfJ5I7J0UQvL10kH5mNeCydGHEz6CTkIc%2FnwMPT178MGOqUBd%2F9YJTaqlzWp8vrPad7iqS43%2BJ8SR62JUDPJXTs7%2BevLZRnG8Rkgnf%2BYp0WV5b0MzYahbc8%2FKFeSzgVBjc3lkOagU6wg5MnzcOcM7kYW52j9VHSFDQ74rGWJHTKYE3%2BQbrbBO%2FSoSFYmdceTZ7BkXaiX27W7RcGichZfpcInHys9LxpKEU6akmWhJPanLH%2FzYOg7AeJN2U%2Fn6FQtrJEvyWoNQ5A%2F&X-Amz-Signature=31d1a4efb643652cea3aafea09c1c3a82bb7c5525cf83d15acfbea410d160d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWMOE4VL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlS9qmkSOGMfVOl1zTu2PparJGGSZseBJqrhf62It3LAiEAyugH3NI7FG0VHOQREvl59J4YzCOoofFy9B8ngrzYF3wqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjRWAuGXGEW8tUWCCrcA%2FtNxtrNmcQe5IHD1HLaA03R7KrMDJ1cfEOmma1ZDPkhROHYy705nvUQ53sUqSJcmJewjEC%2BHMqDzFEX03LJwPY4f5SkVJUEetg8M7PH7Ve7DAAPB54pj%2BGVJwiHVXLCsmjADUDjizCi9EcLnn1wKRLeeUBVpNAvEdulWztsBQ9fHNXaPEd82TXb6L0vZKEGhHawwYhiqptu%2F8i3S4Q5tI5RarF1rWL3Z4z4oeRKe%2BCOWUeFyUXIfzjFSuQOcb3LD41Ho6IClfLFyoyXolEguCkN47drRcGaZWqzXxnwnHlGjzs%2BWSFXP1kYL2JPy44JDsgWSvOaPxPhhake1AinNaLfFTIZ8nhN3LWdcfwyx%2BpwO%2BeHQokUlciABWFXvl%2FMZ2p9XYeBosN4oF9MqyLQlt%2BNi%2BZ5GgLD8EPrKT8u7e2pFs9H%2BaPmH8tJ4u4DAkwj2Y2giEdzkNwJJGp1NOHg2YXjLfSdEQzoCDx9Asb%2FjoiXp0sM0HlNszoi4%2F69cAvfHtRuKXIkBVRnK3r7oysiFe9trJZmfk7xc%2BtRzCBIdnSkuEfWLBxI9VXZbCdRSR8RwYHvLSL%2B1oFSt3QCapivOKnwlfJ5I7J0UQvL10kH5mNeCydGHEz6CTkIc%2FnwMPT178MGOqUBd%2F9YJTaqlzWp8vrPad7iqS43%2BJ8SR62JUDPJXTs7%2BevLZRnG8Rkgnf%2BYp0WV5b0MzYahbc8%2FKFeSzgVBjc3lkOagU6wg5MnzcOcM7kYW52j9VHSFDQ74rGWJHTKYE3%2BQbrbBO%2FSoSFYmdceTZ7BkXaiX27W7RcGichZfpcInHys9LxpKEU6akmWhJPanLH%2FzYOg7AeJN2U%2Fn6FQtrJEvyWoNQ5A%2F&X-Amz-Signature=060d54529d30e52c54e3dc47e27843a6cb0eadb3bcf5451304038816fab16fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
