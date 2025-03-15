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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLBHYRZ2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCESuYF1%2BR1S88bIsYcEZbhazpt0shhwvIxwYiHLjjKXgIgfO6bYGF1jZPJL9Bji%2BzKskn6cNYXLhbKbfgTqjmTc3Eq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEkGmWPEnZQiFuEeTyrcA9YMhe%2BRfPFeGCG%2B9v21KdJL5dlDCh7OUfk%2FUsxPvC9x%2B%2BslOSB8DejIt0MdA9%2FpYOTzUEbzUi3SZ6WtT3u3ZDztT%2BslRk%2FesA4rEVtxAMY08ySTPtGgXGnNk4R3%2BT3Hjd3WN8JBfAi4LEgxbp50C7XP15rMlHeC%2BCgQA8LFhlLEX89hWzKxLj%2FsSDvCOxbifL8eVaK%2FfZmlnZ0nfsEs8APzZ6F1%2Bfcr%2FSnJQL8yBUx8u6OAt9fx3nku0%2B0PTFM%2Fdhdqo7oTDhcbAyfZoki7C6PwLY2gauNvLAp7vIhemTKcGOKyrLTS060bPMm2y7v9HwZr1oE7mdcP517LDKw9D4o4MAc6EegXc2CmS7aDuifli%2FFi18sGLyZDn1mucxRgSY%2FTtiQaMvuvcIHCi2jIP9kwvL%2FygAr3kwVgWpoCNP5lY%2FUjIzlH%2BmdmgKafEpN0vPt97KyM2c8mzVaKRFFi3efSmgPsDWoOZ0xGFAo6qF%2FAaiTyv4rlTI11tL0DcsApYF15FkUtKfQa7YGiIzKDkJJ7mHeBAlFxWtG%2B1LAjO2JO9kDKs7FT8s3EumceE1QmTd%2BHCIFMrKAFOiglrWfwqHfIfhqztU4CDkrNTyOwKTZK6foVHDYcPsVFi4IxML%2BL1r4GOqUB94WMo%2F0snT3j9U%2B28VvmN7Jvo6nsQTi7Y%2F3AoGf4ie1w9wjS182vR%2BEYg%2FdlZLhtJzxXmi0MB0Xtd%2BMksWJJeDvfBlW3nghigwvKq9a3RrdqdWLVAvXqaNNqPSums8oSpJ5uTTcwH83zJAMzq7cbBfgx2QH5sldftlceMH87klbe6pTHdcPSIHDup52YaZ9MHuTlhRnsRkIaoWipPyQYRXfa08TC&X-Amz-Signature=c16410edad48a8804d555be641b22d44a90776e03f8989803236009be1dab155&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLBHYRZ2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCESuYF1%2BR1S88bIsYcEZbhazpt0shhwvIxwYiHLjjKXgIgfO6bYGF1jZPJL9Bji%2BzKskn6cNYXLhbKbfgTqjmTc3Eq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEkGmWPEnZQiFuEeTyrcA9YMhe%2BRfPFeGCG%2B9v21KdJL5dlDCh7OUfk%2FUsxPvC9x%2B%2BslOSB8DejIt0MdA9%2FpYOTzUEbzUi3SZ6WtT3u3ZDztT%2BslRk%2FesA4rEVtxAMY08ySTPtGgXGnNk4R3%2BT3Hjd3WN8JBfAi4LEgxbp50C7XP15rMlHeC%2BCgQA8LFhlLEX89hWzKxLj%2FsSDvCOxbifL8eVaK%2FfZmlnZ0nfsEs8APzZ6F1%2Bfcr%2FSnJQL8yBUx8u6OAt9fx3nku0%2B0PTFM%2Fdhdqo7oTDhcbAyfZoki7C6PwLY2gauNvLAp7vIhemTKcGOKyrLTS060bPMm2y7v9HwZr1oE7mdcP517LDKw9D4o4MAc6EegXc2CmS7aDuifli%2FFi18sGLyZDn1mucxRgSY%2FTtiQaMvuvcIHCi2jIP9kwvL%2FygAr3kwVgWpoCNP5lY%2FUjIzlH%2BmdmgKafEpN0vPt97KyM2c8mzVaKRFFi3efSmgPsDWoOZ0xGFAo6qF%2FAaiTyv4rlTI11tL0DcsApYF15FkUtKfQa7YGiIzKDkJJ7mHeBAlFxWtG%2B1LAjO2JO9kDKs7FT8s3EumceE1QmTd%2BHCIFMrKAFOiglrWfwqHfIfhqztU4CDkrNTyOwKTZK6foVHDYcPsVFi4IxML%2BL1r4GOqUB94WMo%2F0snT3j9U%2B28VvmN7Jvo6nsQTi7Y%2F3AoGf4ie1w9wjS182vR%2BEYg%2FdlZLhtJzxXmi0MB0Xtd%2BMksWJJeDvfBlW3nghigwvKq9a3RrdqdWLVAvXqaNNqPSums8oSpJ5uTTcwH83zJAMzq7cbBfgx2QH5sldftlceMH87klbe6pTHdcPSIHDup52YaZ9MHuTlhRnsRkIaoWipPyQYRXfa08TC&X-Amz-Signature=493e35417798d1c12bf012e963905f9182928d0c763e992c4be8846fbef5240b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLBHYRZ2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCESuYF1%2BR1S88bIsYcEZbhazpt0shhwvIxwYiHLjjKXgIgfO6bYGF1jZPJL9Bji%2BzKskn6cNYXLhbKbfgTqjmTc3Eq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEkGmWPEnZQiFuEeTyrcA9YMhe%2BRfPFeGCG%2B9v21KdJL5dlDCh7OUfk%2FUsxPvC9x%2B%2BslOSB8DejIt0MdA9%2FpYOTzUEbzUi3SZ6WtT3u3ZDztT%2BslRk%2FesA4rEVtxAMY08ySTPtGgXGnNk4R3%2BT3Hjd3WN8JBfAi4LEgxbp50C7XP15rMlHeC%2BCgQA8LFhlLEX89hWzKxLj%2FsSDvCOxbifL8eVaK%2FfZmlnZ0nfsEs8APzZ6F1%2Bfcr%2FSnJQL8yBUx8u6OAt9fx3nku0%2B0PTFM%2Fdhdqo7oTDhcbAyfZoki7C6PwLY2gauNvLAp7vIhemTKcGOKyrLTS060bPMm2y7v9HwZr1oE7mdcP517LDKw9D4o4MAc6EegXc2CmS7aDuifli%2FFi18sGLyZDn1mucxRgSY%2FTtiQaMvuvcIHCi2jIP9kwvL%2FygAr3kwVgWpoCNP5lY%2FUjIzlH%2BmdmgKafEpN0vPt97KyM2c8mzVaKRFFi3efSmgPsDWoOZ0xGFAo6qF%2FAaiTyv4rlTI11tL0DcsApYF15FkUtKfQa7YGiIzKDkJJ7mHeBAlFxWtG%2B1LAjO2JO9kDKs7FT8s3EumceE1QmTd%2BHCIFMrKAFOiglrWfwqHfIfhqztU4CDkrNTyOwKTZK6foVHDYcPsVFi4IxML%2BL1r4GOqUB94WMo%2F0snT3j9U%2B28VvmN7Jvo6nsQTi7Y%2F3AoGf4ie1w9wjS182vR%2BEYg%2FdlZLhtJzxXmi0MB0Xtd%2BMksWJJeDvfBlW3nghigwvKq9a3RrdqdWLVAvXqaNNqPSums8oSpJ5uTTcwH83zJAMzq7cbBfgx2QH5sldftlceMH87klbe6pTHdcPSIHDup52YaZ9MHuTlhRnsRkIaoWipPyQYRXfa08TC&X-Amz-Signature=0477f53344ba9ff14d5c3eb51c10095b5b177737518d483b7b25949dc1ec127c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLBHYRZ2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCESuYF1%2BR1S88bIsYcEZbhazpt0shhwvIxwYiHLjjKXgIgfO6bYGF1jZPJL9Bji%2BzKskn6cNYXLhbKbfgTqjmTc3Eq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEkGmWPEnZQiFuEeTyrcA9YMhe%2BRfPFeGCG%2B9v21KdJL5dlDCh7OUfk%2FUsxPvC9x%2B%2BslOSB8DejIt0MdA9%2FpYOTzUEbzUi3SZ6WtT3u3ZDztT%2BslRk%2FesA4rEVtxAMY08ySTPtGgXGnNk4R3%2BT3Hjd3WN8JBfAi4LEgxbp50C7XP15rMlHeC%2BCgQA8LFhlLEX89hWzKxLj%2FsSDvCOxbifL8eVaK%2FfZmlnZ0nfsEs8APzZ6F1%2Bfcr%2FSnJQL8yBUx8u6OAt9fx3nku0%2B0PTFM%2Fdhdqo7oTDhcbAyfZoki7C6PwLY2gauNvLAp7vIhemTKcGOKyrLTS060bPMm2y7v9HwZr1oE7mdcP517LDKw9D4o4MAc6EegXc2CmS7aDuifli%2FFi18sGLyZDn1mucxRgSY%2FTtiQaMvuvcIHCi2jIP9kwvL%2FygAr3kwVgWpoCNP5lY%2FUjIzlH%2BmdmgKafEpN0vPt97KyM2c8mzVaKRFFi3efSmgPsDWoOZ0xGFAo6qF%2FAaiTyv4rlTI11tL0DcsApYF15FkUtKfQa7YGiIzKDkJJ7mHeBAlFxWtG%2B1LAjO2JO9kDKs7FT8s3EumceE1QmTd%2BHCIFMrKAFOiglrWfwqHfIfhqztU4CDkrNTyOwKTZK6foVHDYcPsVFi4IxML%2BL1r4GOqUB94WMo%2F0snT3j9U%2B28VvmN7Jvo6nsQTi7Y%2F3AoGf4ie1w9wjS182vR%2BEYg%2FdlZLhtJzxXmi0MB0Xtd%2BMksWJJeDvfBlW3nghigwvKq9a3RrdqdWLVAvXqaNNqPSums8oSpJ5uTTcwH83zJAMzq7cbBfgx2QH5sldftlceMH87klbe6pTHdcPSIHDup52YaZ9MHuTlhRnsRkIaoWipPyQYRXfa08TC&X-Amz-Signature=040c51f55ad9a74bc96f16295fe1e200f21438b67aab8f58d7b50e6d71248bd2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLBHYRZ2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCESuYF1%2BR1S88bIsYcEZbhazpt0shhwvIxwYiHLjjKXgIgfO6bYGF1jZPJL9Bji%2BzKskn6cNYXLhbKbfgTqjmTc3Eq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEkGmWPEnZQiFuEeTyrcA9YMhe%2BRfPFeGCG%2B9v21KdJL5dlDCh7OUfk%2FUsxPvC9x%2B%2BslOSB8DejIt0MdA9%2FpYOTzUEbzUi3SZ6WtT3u3ZDztT%2BslRk%2FesA4rEVtxAMY08ySTPtGgXGnNk4R3%2BT3Hjd3WN8JBfAi4LEgxbp50C7XP15rMlHeC%2BCgQA8LFhlLEX89hWzKxLj%2FsSDvCOxbifL8eVaK%2FfZmlnZ0nfsEs8APzZ6F1%2Bfcr%2FSnJQL8yBUx8u6OAt9fx3nku0%2B0PTFM%2Fdhdqo7oTDhcbAyfZoki7C6PwLY2gauNvLAp7vIhemTKcGOKyrLTS060bPMm2y7v9HwZr1oE7mdcP517LDKw9D4o4MAc6EegXc2CmS7aDuifli%2FFi18sGLyZDn1mucxRgSY%2FTtiQaMvuvcIHCi2jIP9kwvL%2FygAr3kwVgWpoCNP5lY%2FUjIzlH%2BmdmgKafEpN0vPt97KyM2c8mzVaKRFFi3efSmgPsDWoOZ0xGFAo6qF%2FAaiTyv4rlTI11tL0DcsApYF15FkUtKfQa7YGiIzKDkJJ7mHeBAlFxWtG%2B1LAjO2JO9kDKs7FT8s3EumceE1QmTd%2BHCIFMrKAFOiglrWfwqHfIfhqztU4CDkrNTyOwKTZK6foVHDYcPsVFi4IxML%2BL1r4GOqUB94WMo%2F0snT3j9U%2B28VvmN7Jvo6nsQTi7Y%2F3AoGf4ie1w9wjS182vR%2BEYg%2FdlZLhtJzxXmi0MB0Xtd%2BMksWJJeDvfBlW3nghigwvKq9a3RrdqdWLVAvXqaNNqPSums8oSpJ5uTTcwH83zJAMzq7cbBfgx2QH5sldftlceMH87klbe6pTHdcPSIHDup52YaZ9MHuTlhRnsRkIaoWipPyQYRXfa08TC&X-Amz-Signature=22a55f1a916c9890952b46bd4e8812fbb96de5e4913eb5c562c7554be35724ef&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
