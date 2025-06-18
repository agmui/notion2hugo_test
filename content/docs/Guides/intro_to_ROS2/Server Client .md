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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4PNOEX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpVFxqCt7pCwZE768XijVC4%2F9H9aNyjI8THVsdHuSO4wIgdchdii6reC%2Fr8IlJOcHI6%2BfiFV3Q7ik3NaSQjR1phksqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVvqSZJyOPWCrDIeircAxjyJNtKAjGDvr9M%2FIbllCWyuTHUD8nJljPrn85%2Bydb7iKBXWkEomfA1Bqcw5a726R8bqUWWcOBFEOx2O2TVRwMiaQnk4%2F1kskpFgJJDm6izdn1BfLldBsOHKDjZTcH7Sd4W79kj89AnwXhB1a6bLs6%2BXPu0OL7Yb8ZDFpu%2Be3US8JtSXyfdJR0SkGAUEU5sDHoHXfAvJ6rKgVvF8z1%2BRU5lsmWRHCtcYa9FG%2F7HdLD%2FDXkezWtIgezrzqwnhbFq3JJ5vPJHqB5wR2YJm5It1FM9YmCLBpjG6Crf3e2z9lScUinzCzSC%2BgoopNYbSm%2FvJk6m5%2FVhaSK2zbpjr1PaFdaDz%2FmjBq55uHa0xu2wgdYvkvWfE6toIUlJC1FexzeS5CpbJ5nTcaIUp9ZkSMaW%2BbyVddBKComT%2FqjMveBxEc0oMPvCYcrhb3nkVJHroi0ZSZe4R13VrA1lrAlyWhE1Yt%2F7kz5vFG7VX2rcBzSPfSfPirIvd1%2BXG849m89l4bNb%2B3hQk2bGxNvyKKuvX38htCxTk9Js%2FOZrkqfq6V9VPuFwtRf9D7A0J4p%2FBLoKt9HFjtZCIKfINgtd0QAT1PjNfCNPpzpgza0alueRQ16pLLip%2Fo%2BrTE6cemHoi%2FzUMPPzysIGOqUB7nD36eQHHi9fqdAiXiIc%2Fb6PtsEwX9WuJ0EDla2QYyvkEmS508zCQLTLSdvyVxF5IWj4CLM86zk2p%2BMRoZGH4zkMaFyN7LccxF80EdO64cBT0RMZu1LA%2F2oAm5UzWnVc3IVjURlW%2FAD3psA77uxoVGzhiydQwYoSETIqYPXwwgkZwdAqeTBtIEg8i6KAqeR8COk8dEvS1rRFSkZP0xLvZRYCHmyd&X-Amz-Signature=2465e288b1d10cdeb5ac4c824f5d90509eecc194194b2e24cae6bf1213588b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4PNOEX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpVFxqCt7pCwZE768XijVC4%2F9H9aNyjI8THVsdHuSO4wIgdchdii6reC%2Fr8IlJOcHI6%2BfiFV3Q7ik3NaSQjR1phksqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVvqSZJyOPWCrDIeircAxjyJNtKAjGDvr9M%2FIbllCWyuTHUD8nJljPrn85%2Bydb7iKBXWkEomfA1Bqcw5a726R8bqUWWcOBFEOx2O2TVRwMiaQnk4%2F1kskpFgJJDm6izdn1BfLldBsOHKDjZTcH7Sd4W79kj89AnwXhB1a6bLs6%2BXPu0OL7Yb8ZDFpu%2Be3US8JtSXyfdJR0SkGAUEU5sDHoHXfAvJ6rKgVvF8z1%2BRU5lsmWRHCtcYa9FG%2F7HdLD%2FDXkezWtIgezrzqwnhbFq3JJ5vPJHqB5wR2YJm5It1FM9YmCLBpjG6Crf3e2z9lScUinzCzSC%2BgoopNYbSm%2FvJk6m5%2FVhaSK2zbpjr1PaFdaDz%2FmjBq55uHa0xu2wgdYvkvWfE6toIUlJC1FexzeS5CpbJ5nTcaIUp9ZkSMaW%2BbyVddBKComT%2FqjMveBxEc0oMPvCYcrhb3nkVJHroi0ZSZe4R13VrA1lrAlyWhE1Yt%2F7kz5vFG7VX2rcBzSPfSfPirIvd1%2BXG849m89l4bNb%2B3hQk2bGxNvyKKuvX38htCxTk9Js%2FOZrkqfq6V9VPuFwtRf9D7A0J4p%2FBLoKt9HFjtZCIKfINgtd0QAT1PjNfCNPpzpgza0alueRQ16pLLip%2Fo%2BrTE6cemHoi%2FzUMPPzysIGOqUB7nD36eQHHi9fqdAiXiIc%2Fb6PtsEwX9WuJ0EDla2QYyvkEmS508zCQLTLSdvyVxF5IWj4CLM86zk2p%2BMRoZGH4zkMaFyN7LccxF80EdO64cBT0RMZu1LA%2F2oAm5UzWnVc3IVjURlW%2FAD3psA77uxoVGzhiydQwYoSETIqYPXwwgkZwdAqeTBtIEg8i6KAqeR8COk8dEvS1rRFSkZP0xLvZRYCHmyd&X-Amz-Signature=70a48989a1f5e0ddeea3b1db0cff6b30b9c21fd321e1424ac58d6c06f910619d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4PNOEX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpVFxqCt7pCwZE768XijVC4%2F9H9aNyjI8THVsdHuSO4wIgdchdii6reC%2Fr8IlJOcHI6%2BfiFV3Q7ik3NaSQjR1phksqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVvqSZJyOPWCrDIeircAxjyJNtKAjGDvr9M%2FIbllCWyuTHUD8nJljPrn85%2Bydb7iKBXWkEomfA1Bqcw5a726R8bqUWWcOBFEOx2O2TVRwMiaQnk4%2F1kskpFgJJDm6izdn1BfLldBsOHKDjZTcH7Sd4W79kj89AnwXhB1a6bLs6%2BXPu0OL7Yb8ZDFpu%2Be3US8JtSXyfdJR0SkGAUEU5sDHoHXfAvJ6rKgVvF8z1%2BRU5lsmWRHCtcYa9FG%2F7HdLD%2FDXkezWtIgezrzqwnhbFq3JJ5vPJHqB5wR2YJm5It1FM9YmCLBpjG6Crf3e2z9lScUinzCzSC%2BgoopNYbSm%2FvJk6m5%2FVhaSK2zbpjr1PaFdaDz%2FmjBq55uHa0xu2wgdYvkvWfE6toIUlJC1FexzeS5CpbJ5nTcaIUp9ZkSMaW%2BbyVddBKComT%2FqjMveBxEc0oMPvCYcrhb3nkVJHroi0ZSZe4R13VrA1lrAlyWhE1Yt%2F7kz5vFG7VX2rcBzSPfSfPirIvd1%2BXG849m89l4bNb%2B3hQk2bGxNvyKKuvX38htCxTk9Js%2FOZrkqfq6V9VPuFwtRf9D7A0J4p%2FBLoKt9HFjtZCIKfINgtd0QAT1PjNfCNPpzpgza0alueRQ16pLLip%2Fo%2BrTE6cemHoi%2FzUMPPzysIGOqUB7nD36eQHHi9fqdAiXiIc%2Fb6PtsEwX9WuJ0EDla2QYyvkEmS508zCQLTLSdvyVxF5IWj4CLM86zk2p%2BMRoZGH4zkMaFyN7LccxF80EdO64cBT0RMZu1LA%2F2oAm5UzWnVc3IVjURlW%2FAD3psA77uxoVGzhiydQwYoSETIqYPXwwgkZwdAqeTBtIEg8i6KAqeR8COk8dEvS1rRFSkZP0xLvZRYCHmyd&X-Amz-Signature=728381334685ada8ee6342ab9567b340f86240592f2fe162be07f2b9920b3537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4PNOEX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpVFxqCt7pCwZE768XijVC4%2F9H9aNyjI8THVsdHuSO4wIgdchdii6reC%2Fr8IlJOcHI6%2BfiFV3Q7ik3NaSQjR1phksqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVvqSZJyOPWCrDIeircAxjyJNtKAjGDvr9M%2FIbllCWyuTHUD8nJljPrn85%2Bydb7iKBXWkEomfA1Bqcw5a726R8bqUWWcOBFEOx2O2TVRwMiaQnk4%2F1kskpFgJJDm6izdn1BfLldBsOHKDjZTcH7Sd4W79kj89AnwXhB1a6bLs6%2BXPu0OL7Yb8ZDFpu%2Be3US8JtSXyfdJR0SkGAUEU5sDHoHXfAvJ6rKgVvF8z1%2BRU5lsmWRHCtcYa9FG%2F7HdLD%2FDXkezWtIgezrzqwnhbFq3JJ5vPJHqB5wR2YJm5It1FM9YmCLBpjG6Crf3e2z9lScUinzCzSC%2BgoopNYbSm%2FvJk6m5%2FVhaSK2zbpjr1PaFdaDz%2FmjBq55uHa0xu2wgdYvkvWfE6toIUlJC1FexzeS5CpbJ5nTcaIUp9ZkSMaW%2BbyVddBKComT%2FqjMveBxEc0oMPvCYcrhb3nkVJHroi0ZSZe4R13VrA1lrAlyWhE1Yt%2F7kz5vFG7VX2rcBzSPfSfPirIvd1%2BXG849m89l4bNb%2B3hQk2bGxNvyKKuvX38htCxTk9Js%2FOZrkqfq6V9VPuFwtRf9D7A0J4p%2FBLoKt9HFjtZCIKfINgtd0QAT1PjNfCNPpzpgza0alueRQ16pLLip%2Fo%2BrTE6cemHoi%2FzUMPPzysIGOqUB7nD36eQHHi9fqdAiXiIc%2Fb6PtsEwX9WuJ0EDla2QYyvkEmS508zCQLTLSdvyVxF5IWj4CLM86zk2p%2BMRoZGH4zkMaFyN7LccxF80EdO64cBT0RMZu1LA%2F2oAm5UzWnVc3IVjURlW%2FAD3psA77uxoVGzhiydQwYoSETIqYPXwwgkZwdAqeTBtIEg8i6KAqeR8COk8dEvS1rRFSkZP0xLvZRYCHmyd&X-Amz-Signature=3af81125d5bd77702f3a0750fd4ac743695abc4396544431209d5d13a2757d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4PNOEX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpVFxqCt7pCwZE768XijVC4%2F9H9aNyjI8THVsdHuSO4wIgdchdii6reC%2Fr8IlJOcHI6%2BfiFV3Q7ik3NaSQjR1phksqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVvqSZJyOPWCrDIeircAxjyJNtKAjGDvr9M%2FIbllCWyuTHUD8nJljPrn85%2Bydb7iKBXWkEomfA1Bqcw5a726R8bqUWWcOBFEOx2O2TVRwMiaQnk4%2F1kskpFgJJDm6izdn1BfLldBsOHKDjZTcH7Sd4W79kj89AnwXhB1a6bLs6%2BXPu0OL7Yb8ZDFpu%2Be3US8JtSXyfdJR0SkGAUEU5sDHoHXfAvJ6rKgVvF8z1%2BRU5lsmWRHCtcYa9FG%2F7HdLD%2FDXkezWtIgezrzqwnhbFq3JJ5vPJHqB5wR2YJm5It1FM9YmCLBpjG6Crf3e2z9lScUinzCzSC%2BgoopNYbSm%2FvJk6m5%2FVhaSK2zbpjr1PaFdaDz%2FmjBq55uHa0xu2wgdYvkvWfE6toIUlJC1FexzeS5CpbJ5nTcaIUp9ZkSMaW%2BbyVddBKComT%2FqjMveBxEc0oMPvCYcrhb3nkVJHroi0ZSZe4R13VrA1lrAlyWhE1Yt%2F7kz5vFG7VX2rcBzSPfSfPirIvd1%2BXG849m89l4bNb%2B3hQk2bGxNvyKKuvX38htCxTk9Js%2FOZrkqfq6V9VPuFwtRf9D7A0J4p%2FBLoKt9HFjtZCIKfINgtd0QAT1PjNfCNPpzpgza0alueRQ16pLLip%2Fo%2BrTE6cemHoi%2FzUMPPzysIGOqUB7nD36eQHHi9fqdAiXiIc%2Fb6PtsEwX9WuJ0EDla2QYyvkEmS508zCQLTLSdvyVxF5IWj4CLM86zk2p%2BMRoZGH4zkMaFyN7LccxF80EdO64cBT0RMZu1LA%2F2oAm5UzWnVc3IVjURlW%2FAD3psA77uxoVGzhiydQwYoSETIqYPXwwgkZwdAqeTBtIEg8i6KAqeR8COk8dEvS1rRFSkZP0xLvZRYCHmyd&X-Amz-Signature=d1beb33b677c381bdcd9287fd67aadd2deb8100f344fee924670267a2f0cce7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
