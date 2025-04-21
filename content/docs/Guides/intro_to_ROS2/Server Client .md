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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDPAMYQU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGlzlSBmcAP22PuFOjtpw2kMuiyGDoHXPgOkcRovY%2BC0AiEA5o5isdzok9KWWw2LvN5IGHLHfFGA4u%2FUn9QkdSykDYEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCyWjGconXTXNk64SrcA6wVcXpwP7%2BlRyRFCdZXgWPqpNr5rHEffyyjsBT%2BWAfcZPJEpNgpU3%2FHHlQellw45bo2UMkUa7W%2FSuj9y4y1hZ168PMRNo9haLrOC96w8mdNaDXu5OfKGKsflD3TaZ5nS6b0d8aJ2slyVsK2pPCVeRNmQNpgiTuJAIXKUbdvW%2Bh5mwjuuLAxPdl8%2BssBmqUMR%2Be06zbP%2BsmIndTLGHXHdmaOrRnGhMatcrWjykhlcXeDQuVZbq%2BJXFlsg5P7akFYWwfuvvnrVIeXdM37fvsmLZuj92rIEX3ZgD6TosFZfR%2B3pcogwA5BDqqkhAhoQMQjXSFRaXSBMZrTnl7%2F7og6rwddZ6thVugwDr6rc6vQxscPZnSYPNLKSOeUCnt0GXg1U9tfmBW13hTkOoPWB8ddz8vYGxXGHFGf8t3T2p99PXCoCF9XdvYwaHF3DSoAIuZHVw%2BPvPszJLGSpP%2BS0JI6EcflBlE%2BfZw61BZ2N065SSaChbqvi4o1H2ODHAOAKcB0zRsK0%2Fn%2BX%2BctsA6q%2FHeV1JrHIKlJaR1V3wWZKSC6rRpv9qDmPbN%2FbMUf4wDlVTqiP6PmkQ5nm9jhuONtN75m3aPvXfyg%2FkbuOrF8x59GdJ27PiKpx912r4aUHNPQMLjalcAGOqUBNWaeM8m%2FpuF2y5781nQN0hFlSXAotW84olIIt5%2BfEm9AvQiuM1mkbroK1LRSkg5BpNRIILr2dWdV%2BRAVk8%2FXWaAbIOEL1w86D7eZzZX5l2CfIfmp4eGMseNpeh7qZAp61zQL1sormGlzrsd%2BlB9tA%2BRhR1P2WGtOzhR68MWgXTVfaDehZJNYzMEwA8mMynJ9h6EXVtW5lR2qQ5OksZlmC%2FRdSOXt&X-Amz-Signature=85cf5ae59be2f059bb83e09e38098c7abe0e7b677454e6496bb46a6e78912617&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDPAMYQU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGlzlSBmcAP22PuFOjtpw2kMuiyGDoHXPgOkcRovY%2BC0AiEA5o5isdzok9KWWw2LvN5IGHLHfFGA4u%2FUn9QkdSykDYEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCyWjGconXTXNk64SrcA6wVcXpwP7%2BlRyRFCdZXgWPqpNr5rHEffyyjsBT%2BWAfcZPJEpNgpU3%2FHHlQellw45bo2UMkUa7W%2FSuj9y4y1hZ168PMRNo9haLrOC96w8mdNaDXu5OfKGKsflD3TaZ5nS6b0d8aJ2slyVsK2pPCVeRNmQNpgiTuJAIXKUbdvW%2Bh5mwjuuLAxPdl8%2BssBmqUMR%2Be06zbP%2BsmIndTLGHXHdmaOrRnGhMatcrWjykhlcXeDQuVZbq%2BJXFlsg5P7akFYWwfuvvnrVIeXdM37fvsmLZuj92rIEX3ZgD6TosFZfR%2B3pcogwA5BDqqkhAhoQMQjXSFRaXSBMZrTnl7%2F7og6rwddZ6thVugwDr6rc6vQxscPZnSYPNLKSOeUCnt0GXg1U9tfmBW13hTkOoPWB8ddz8vYGxXGHFGf8t3T2p99PXCoCF9XdvYwaHF3DSoAIuZHVw%2BPvPszJLGSpP%2BS0JI6EcflBlE%2BfZw61BZ2N065SSaChbqvi4o1H2ODHAOAKcB0zRsK0%2Fn%2BX%2BctsA6q%2FHeV1JrHIKlJaR1V3wWZKSC6rRpv9qDmPbN%2FbMUf4wDlVTqiP6PmkQ5nm9jhuONtN75m3aPvXfyg%2FkbuOrF8x59GdJ27PiKpx912r4aUHNPQMLjalcAGOqUBNWaeM8m%2FpuF2y5781nQN0hFlSXAotW84olIIt5%2BfEm9AvQiuM1mkbroK1LRSkg5BpNRIILr2dWdV%2BRAVk8%2FXWaAbIOEL1w86D7eZzZX5l2CfIfmp4eGMseNpeh7qZAp61zQL1sormGlzrsd%2BlB9tA%2BRhR1P2WGtOzhR68MWgXTVfaDehZJNYzMEwA8mMynJ9h6EXVtW5lR2qQ5OksZlmC%2FRdSOXt&X-Amz-Signature=b08e7593c11ffcf7d13e08cfece5b9e3471ed7b30373b79b0e06b41ef5e31163&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDPAMYQU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGlzlSBmcAP22PuFOjtpw2kMuiyGDoHXPgOkcRovY%2BC0AiEA5o5isdzok9KWWw2LvN5IGHLHfFGA4u%2FUn9QkdSykDYEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCyWjGconXTXNk64SrcA6wVcXpwP7%2BlRyRFCdZXgWPqpNr5rHEffyyjsBT%2BWAfcZPJEpNgpU3%2FHHlQellw45bo2UMkUa7W%2FSuj9y4y1hZ168PMRNo9haLrOC96w8mdNaDXu5OfKGKsflD3TaZ5nS6b0d8aJ2slyVsK2pPCVeRNmQNpgiTuJAIXKUbdvW%2Bh5mwjuuLAxPdl8%2BssBmqUMR%2Be06zbP%2BsmIndTLGHXHdmaOrRnGhMatcrWjykhlcXeDQuVZbq%2BJXFlsg5P7akFYWwfuvvnrVIeXdM37fvsmLZuj92rIEX3ZgD6TosFZfR%2B3pcogwA5BDqqkhAhoQMQjXSFRaXSBMZrTnl7%2F7og6rwddZ6thVugwDr6rc6vQxscPZnSYPNLKSOeUCnt0GXg1U9tfmBW13hTkOoPWB8ddz8vYGxXGHFGf8t3T2p99PXCoCF9XdvYwaHF3DSoAIuZHVw%2BPvPszJLGSpP%2BS0JI6EcflBlE%2BfZw61BZ2N065SSaChbqvi4o1H2ODHAOAKcB0zRsK0%2Fn%2BX%2BctsA6q%2FHeV1JrHIKlJaR1V3wWZKSC6rRpv9qDmPbN%2FbMUf4wDlVTqiP6PmkQ5nm9jhuONtN75m3aPvXfyg%2FkbuOrF8x59GdJ27PiKpx912r4aUHNPQMLjalcAGOqUBNWaeM8m%2FpuF2y5781nQN0hFlSXAotW84olIIt5%2BfEm9AvQiuM1mkbroK1LRSkg5BpNRIILr2dWdV%2BRAVk8%2FXWaAbIOEL1w86D7eZzZX5l2CfIfmp4eGMseNpeh7qZAp61zQL1sormGlzrsd%2BlB9tA%2BRhR1P2WGtOzhR68MWgXTVfaDehZJNYzMEwA8mMynJ9h6EXVtW5lR2qQ5OksZlmC%2FRdSOXt&X-Amz-Signature=7335093246e1bbe64579624ddde0e06f42e877b6ff0d1621968a2a0e56a20b22&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDPAMYQU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGlzlSBmcAP22PuFOjtpw2kMuiyGDoHXPgOkcRovY%2BC0AiEA5o5isdzok9KWWw2LvN5IGHLHfFGA4u%2FUn9QkdSykDYEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCyWjGconXTXNk64SrcA6wVcXpwP7%2BlRyRFCdZXgWPqpNr5rHEffyyjsBT%2BWAfcZPJEpNgpU3%2FHHlQellw45bo2UMkUa7W%2FSuj9y4y1hZ168PMRNo9haLrOC96w8mdNaDXu5OfKGKsflD3TaZ5nS6b0d8aJ2slyVsK2pPCVeRNmQNpgiTuJAIXKUbdvW%2Bh5mwjuuLAxPdl8%2BssBmqUMR%2Be06zbP%2BsmIndTLGHXHdmaOrRnGhMatcrWjykhlcXeDQuVZbq%2BJXFlsg5P7akFYWwfuvvnrVIeXdM37fvsmLZuj92rIEX3ZgD6TosFZfR%2B3pcogwA5BDqqkhAhoQMQjXSFRaXSBMZrTnl7%2F7og6rwddZ6thVugwDr6rc6vQxscPZnSYPNLKSOeUCnt0GXg1U9tfmBW13hTkOoPWB8ddz8vYGxXGHFGf8t3T2p99PXCoCF9XdvYwaHF3DSoAIuZHVw%2BPvPszJLGSpP%2BS0JI6EcflBlE%2BfZw61BZ2N065SSaChbqvi4o1H2ODHAOAKcB0zRsK0%2Fn%2BX%2BctsA6q%2FHeV1JrHIKlJaR1V3wWZKSC6rRpv9qDmPbN%2FbMUf4wDlVTqiP6PmkQ5nm9jhuONtN75m3aPvXfyg%2FkbuOrF8x59GdJ27PiKpx912r4aUHNPQMLjalcAGOqUBNWaeM8m%2FpuF2y5781nQN0hFlSXAotW84olIIt5%2BfEm9AvQiuM1mkbroK1LRSkg5BpNRIILr2dWdV%2BRAVk8%2FXWaAbIOEL1w86D7eZzZX5l2CfIfmp4eGMseNpeh7qZAp61zQL1sormGlzrsd%2BlB9tA%2BRhR1P2WGtOzhR68MWgXTVfaDehZJNYzMEwA8mMynJ9h6EXVtW5lR2qQ5OksZlmC%2FRdSOXt&X-Amz-Signature=2acb00e0a4a1a9dd6c91e1388ce444607e0c29fb2f4fb993c4c8bb91bc0d3cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDPAMYQU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGlzlSBmcAP22PuFOjtpw2kMuiyGDoHXPgOkcRovY%2BC0AiEA5o5isdzok9KWWw2LvN5IGHLHfFGA4u%2FUn9QkdSykDYEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCyWjGconXTXNk64SrcA6wVcXpwP7%2BlRyRFCdZXgWPqpNr5rHEffyyjsBT%2BWAfcZPJEpNgpU3%2FHHlQellw45bo2UMkUa7W%2FSuj9y4y1hZ168PMRNo9haLrOC96w8mdNaDXu5OfKGKsflD3TaZ5nS6b0d8aJ2slyVsK2pPCVeRNmQNpgiTuJAIXKUbdvW%2Bh5mwjuuLAxPdl8%2BssBmqUMR%2Be06zbP%2BsmIndTLGHXHdmaOrRnGhMatcrWjykhlcXeDQuVZbq%2BJXFlsg5P7akFYWwfuvvnrVIeXdM37fvsmLZuj92rIEX3ZgD6TosFZfR%2B3pcogwA5BDqqkhAhoQMQjXSFRaXSBMZrTnl7%2F7og6rwddZ6thVugwDr6rc6vQxscPZnSYPNLKSOeUCnt0GXg1U9tfmBW13hTkOoPWB8ddz8vYGxXGHFGf8t3T2p99PXCoCF9XdvYwaHF3DSoAIuZHVw%2BPvPszJLGSpP%2BS0JI6EcflBlE%2BfZw61BZ2N065SSaChbqvi4o1H2ODHAOAKcB0zRsK0%2Fn%2BX%2BctsA6q%2FHeV1JrHIKlJaR1V3wWZKSC6rRpv9qDmPbN%2FbMUf4wDlVTqiP6PmkQ5nm9jhuONtN75m3aPvXfyg%2FkbuOrF8x59GdJ27PiKpx912r4aUHNPQMLjalcAGOqUBNWaeM8m%2FpuF2y5781nQN0hFlSXAotW84olIIt5%2BfEm9AvQiuM1mkbroK1LRSkg5BpNRIILr2dWdV%2BRAVk8%2FXWaAbIOEL1w86D7eZzZX5l2CfIfmp4eGMseNpeh7qZAp61zQL1sormGlzrsd%2BlB9tA%2BRhR1P2WGtOzhR68MWgXTVfaDehZJNYzMEwA8mMynJ9h6EXVtW5lR2qQ5OksZlmC%2FRdSOXt&X-Amz-Signature=646bad165e9980b732d09742f5d4408c442e9ef28bc60ddf9daa4a922eeb0cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
