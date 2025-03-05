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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIENRCR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkMHsy8MmN7pATRcOCTzY8Jud6l2c9JclSrU7Upalx%2BQIhAOCHJIzVtAfuoRh94Tv%2Fg8JbfKbaWtPCa0rS1MZiWu%2BMKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb7nUIx9E0hJnmBygq3AOMRb8CAfRngve%2F%2FvO0FhA3atG93ahfUl28V6QXv2TZQtHZugHwYz8VBFdfb8sJyVyaNYM9qO0hVGRh9M0FI9hhLNr%2FCXGlI9trnx1IBpubNFe0tVNr8Ieno4LeSy0eunTdMj64QNablh94kH3Mr4u0nKSxu1T%2BfJF7pI6bFo7jAQAnPt5DJHcHY65Bmd01a0invLpnOAdGwbazsU88Pkk6emm1LEjpUp9Ly0dNGHpgFapwbdRmzFg6yx5eUXJ7nBpLSPmFAnhR21y6BhTrdfmfXrpErXeXZiAWCBUV3Gn%2BL6xvHGmCmh%2FH1bsbKV1JzGrphpjOuf5Oy4AUXPRNtPZd%2Bu%2B9T7gTvWcaz95Di6tw4XCohmSqOfNqZlFD%2B0lYkTEGRn%2B%2B%2BXdPKafOSo8gme0b2jrNIqevBkRPgK%2FKoNPJe7jkXgyZbeK8UzlnxjaT2i0PEcRycd4aEk%2F88GgXIyBy08p1AiNhDDqnAk98Nlu3f2LsuzDHExeP65uUTx2v9Rcx%2Fh9j%2BqyaJvtvGCo87aieeF2VXstxjr7PuhCnaY5ejwFPG8L3Jgt4h4TvWG4uGjq1mAMRxkvIW5MKfZYeYERnAItOZgC8vGXvfpp0g06hiIgdvmfTQB556k04qzDpiZ%2B%2BBjqkAbjmFJlJw5Oci%2F6vaXBdKaIT6%2BdytyQTrIfTna5xW8c9nJqZHsarvNTwYvEOtr%2BAr4pAGmck8OY84VK3%2FKCrqhfgoCwkCCOYFqS%2Bmkp0oC%2BsQ25YS5RF99XnViAXE3BwY7KDrjBOxYp3i2CAZEb5UR9OVZMJGD03wVGjk%2BzWsvAvLT91KgTllqC0ahVxc0FZFcY3YSxgVit8gpO0jAIWXkQ2vdSE&X-Amz-Signature=0cdbdd0a187e351285d5ecea5e012ef772fb2b69375698cd20c69e581e67fa29&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIENRCR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkMHsy8MmN7pATRcOCTzY8Jud6l2c9JclSrU7Upalx%2BQIhAOCHJIzVtAfuoRh94Tv%2Fg8JbfKbaWtPCa0rS1MZiWu%2BMKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb7nUIx9E0hJnmBygq3AOMRb8CAfRngve%2F%2FvO0FhA3atG93ahfUl28V6QXv2TZQtHZugHwYz8VBFdfb8sJyVyaNYM9qO0hVGRh9M0FI9hhLNr%2FCXGlI9trnx1IBpubNFe0tVNr8Ieno4LeSy0eunTdMj64QNablh94kH3Mr4u0nKSxu1T%2BfJF7pI6bFo7jAQAnPt5DJHcHY65Bmd01a0invLpnOAdGwbazsU88Pkk6emm1LEjpUp9Ly0dNGHpgFapwbdRmzFg6yx5eUXJ7nBpLSPmFAnhR21y6BhTrdfmfXrpErXeXZiAWCBUV3Gn%2BL6xvHGmCmh%2FH1bsbKV1JzGrphpjOuf5Oy4AUXPRNtPZd%2Bu%2B9T7gTvWcaz95Di6tw4XCohmSqOfNqZlFD%2B0lYkTEGRn%2B%2B%2BXdPKafOSo8gme0b2jrNIqevBkRPgK%2FKoNPJe7jkXgyZbeK8UzlnxjaT2i0PEcRycd4aEk%2F88GgXIyBy08p1AiNhDDqnAk98Nlu3f2LsuzDHExeP65uUTx2v9Rcx%2Fh9j%2BqyaJvtvGCo87aieeF2VXstxjr7PuhCnaY5ejwFPG8L3Jgt4h4TvWG4uGjq1mAMRxkvIW5MKfZYeYERnAItOZgC8vGXvfpp0g06hiIgdvmfTQB556k04qzDpiZ%2B%2BBjqkAbjmFJlJw5Oci%2F6vaXBdKaIT6%2BdytyQTrIfTna5xW8c9nJqZHsarvNTwYvEOtr%2BAr4pAGmck8OY84VK3%2FKCrqhfgoCwkCCOYFqS%2Bmkp0oC%2BsQ25YS5RF99XnViAXE3BwY7KDrjBOxYp3i2CAZEb5UR9OVZMJGD03wVGjk%2BzWsvAvLT91KgTllqC0ahVxc0FZFcY3YSxgVit8gpO0jAIWXkQ2vdSE&X-Amz-Signature=3d31f6fda1ec444d95e33ccdb36b55bc4b904b8de4d88c74d335479a36d463bf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIENRCR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkMHsy8MmN7pATRcOCTzY8Jud6l2c9JclSrU7Upalx%2BQIhAOCHJIzVtAfuoRh94Tv%2Fg8JbfKbaWtPCa0rS1MZiWu%2BMKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb7nUIx9E0hJnmBygq3AOMRb8CAfRngve%2F%2FvO0FhA3atG93ahfUl28V6QXv2TZQtHZugHwYz8VBFdfb8sJyVyaNYM9qO0hVGRh9M0FI9hhLNr%2FCXGlI9trnx1IBpubNFe0tVNr8Ieno4LeSy0eunTdMj64QNablh94kH3Mr4u0nKSxu1T%2BfJF7pI6bFo7jAQAnPt5DJHcHY65Bmd01a0invLpnOAdGwbazsU88Pkk6emm1LEjpUp9Ly0dNGHpgFapwbdRmzFg6yx5eUXJ7nBpLSPmFAnhR21y6BhTrdfmfXrpErXeXZiAWCBUV3Gn%2BL6xvHGmCmh%2FH1bsbKV1JzGrphpjOuf5Oy4AUXPRNtPZd%2Bu%2B9T7gTvWcaz95Di6tw4XCohmSqOfNqZlFD%2B0lYkTEGRn%2B%2B%2BXdPKafOSo8gme0b2jrNIqevBkRPgK%2FKoNPJe7jkXgyZbeK8UzlnxjaT2i0PEcRycd4aEk%2F88GgXIyBy08p1AiNhDDqnAk98Nlu3f2LsuzDHExeP65uUTx2v9Rcx%2Fh9j%2BqyaJvtvGCo87aieeF2VXstxjr7PuhCnaY5ejwFPG8L3Jgt4h4TvWG4uGjq1mAMRxkvIW5MKfZYeYERnAItOZgC8vGXvfpp0g06hiIgdvmfTQB556k04qzDpiZ%2B%2BBjqkAbjmFJlJw5Oci%2F6vaXBdKaIT6%2BdytyQTrIfTna5xW8c9nJqZHsarvNTwYvEOtr%2BAr4pAGmck8OY84VK3%2FKCrqhfgoCwkCCOYFqS%2Bmkp0oC%2BsQ25YS5RF99XnViAXE3BwY7KDrjBOxYp3i2CAZEb5UR9OVZMJGD03wVGjk%2BzWsvAvLT91KgTllqC0ahVxc0FZFcY3YSxgVit8gpO0jAIWXkQ2vdSE&X-Amz-Signature=a63d702221d1d0e56aaeed348adc2151688d5b61bac00afe44f62282ff5a0be6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIENRCR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkMHsy8MmN7pATRcOCTzY8Jud6l2c9JclSrU7Upalx%2BQIhAOCHJIzVtAfuoRh94Tv%2Fg8JbfKbaWtPCa0rS1MZiWu%2BMKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb7nUIx9E0hJnmBygq3AOMRb8CAfRngve%2F%2FvO0FhA3atG93ahfUl28V6QXv2TZQtHZugHwYz8VBFdfb8sJyVyaNYM9qO0hVGRh9M0FI9hhLNr%2FCXGlI9trnx1IBpubNFe0tVNr8Ieno4LeSy0eunTdMj64QNablh94kH3Mr4u0nKSxu1T%2BfJF7pI6bFo7jAQAnPt5DJHcHY65Bmd01a0invLpnOAdGwbazsU88Pkk6emm1LEjpUp9Ly0dNGHpgFapwbdRmzFg6yx5eUXJ7nBpLSPmFAnhR21y6BhTrdfmfXrpErXeXZiAWCBUV3Gn%2BL6xvHGmCmh%2FH1bsbKV1JzGrphpjOuf5Oy4AUXPRNtPZd%2Bu%2B9T7gTvWcaz95Di6tw4XCohmSqOfNqZlFD%2B0lYkTEGRn%2B%2B%2BXdPKafOSo8gme0b2jrNIqevBkRPgK%2FKoNPJe7jkXgyZbeK8UzlnxjaT2i0PEcRycd4aEk%2F88GgXIyBy08p1AiNhDDqnAk98Nlu3f2LsuzDHExeP65uUTx2v9Rcx%2Fh9j%2BqyaJvtvGCo87aieeF2VXstxjr7PuhCnaY5ejwFPG8L3Jgt4h4TvWG4uGjq1mAMRxkvIW5MKfZYeYERnAItOZgC8vGXvfpp0g06hiIgdvmfTQB556k04qzDpiZ%2B%2BBjqkAbjmFJlJw5Oci%2F6vaXBdKaIT6%2BdytyQTrIfTna5xW8c9nJqZHsarvNTwYvEOtr%2BAr4pAGmck8OY84VK3%2FKCrqhfgoCwkCCOYFqS%2Bmkp0oC%2BsQ25YS5RF99XnViAXE3BwY7KDrjBOxYp3i2CAZEb5UR9OVZMJGD03wVGjk%2BzWsvAvLT91KgTllqC0ahVxc0FZFcY3YSxgVit8gpO0jAIWXkQ2vdSE&X-Amz-Signature=4d6edc0b7a719f0a4b9aa7f9e39df558834ec44dbc109ab31762bb34a7099410&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIENRCR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkMHsy8MmN7pATRcOCTzY8Jud6l2c9JclSrU7Upalx%2BQIhAOCHJIzVtAfuoRh94Tv%2Fg8JbfKbaWtPCa0rS1MZiWu%2BMKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb7nUIx9E0hJnmBygq3AOMRb8CAfRngve%2F%2FvO0FhA3atG93ahfUl28V6QXv2TZQtHZugHwYz8VBFdfb8sJyVyaNYM9qO0hVGRh9M0FI9hhLNr%2FCXGlI9trnx1IBpubNFe0tVNr8Ieno4LeSy0eunTdMj64QNablh94kH3Mr4u0nKSxu1T%2BfJF7pI6bFo7jAQAnPt5DJHcHY65Bmd01a0invLpnOAdGwbazsU88Pkk6emm1LEjpUp9Ly0dNGHpgFapwbdRmzFg6yx5eUXJ7nBpLSPmFAnhR21y6BhTrdfmfXrpErXeXZiAWCBUV3Gn%2BL6xvHGmCmh%2FH1bsbKV1JzGrphpjOuf5Oy4AUXPRNtPZd%2Bu%2B9T7gTvWcaz95Di6tw4XCohmSqOfNqZlFD%2B0lYkTEGRn%2B%2B%2BXdPKafOSo8gme0b2jrNIqevBkRPgK%2FKoNPJe7jkXgyZbeK8UzlnxjaT2i0PEcRycd4aEk%2F88GgXIyBy08p1AiNhDDqnAk98Nlu3f2LsuzDHExeP65uUTx2v9Rcx%2Fh9j%2BqyaJvtvGCo87aieeF2VXstxjr7PuhCnaY5ejwFPG8L3Jgt4h4TvWG4uGjq1mAMRxkvIW5MKfZYeYERnAItOZgC8vGXvfpp0g06hiIgdvmfTQB556k04qzDpiZ%2B%2BBjqkAbjmFJlJw5Oci%2F6vaXBdKaIT6%2BdytyQTrIfTna5xW8c9nJqZHsarvNTwYvEOtr%2BAr4pAGmck8OY84VK3%2FKCrqhfgoCwkCCOYFqS%2Bmkp0oC%2BsQ25YS5RF99XnViAXE3BwY7KDrjBOxYp3i2CAZEb5UR9OVZMJGD03wVGjk%2BzWsvAvLT91KgTllqC0ahVxc0FZFcY3YSxgVit8gpO0jAIWXkQ2vdSE&X-Amz-Signature=b84b0098500af5229216c86cf6307fe96a8c29f45cbdbc647737a7966f5e5ae0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
