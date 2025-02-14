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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666STGWMLS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDXz3aRkEIWO9VAxZqD6lASXBCmsu8B3u9Si5%2Ftp3Z9GAIgUSc0e95Lbn%2FErtAQlfHIX5QToCcuy6a7GKbz5jsthR0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDD1hv2DdxWX1D7dNcyrcA1kFh9MaM%2BP8j%2B%2F3%2FSQe4dK1qZ5V6cvaBanQ530KeFSAdh3R6pVskg2xNJJ9z0ZoAnwumA8FQkvD59TT8yN4tNFfFjFBuvb9H%2FmMEXq5A10kf1qIL6SFBnSFFqcS40q1fueJzd%2Fujj4uBeIZPLkgC45AKBCRg9%2FJ2VrseLhvvHr7MRBPFQ5jmmSt0bieW5ckIRbiKLJK6BUTr7T1AjdsSCXvZMiSqC7kUET1AAgDofgvQEHGLwfUalpaAnASuBmFBBNGjTo0n%2B5G3meQeBqs7wjpOwujEx4z67c3U%2Fi8Pevw2HbxdcWQrnMZyQnMkaUDRiALVODJK6ezJ74d2oY5bIqEt4%2FBbDPMCEozdZUENb1NXN%2BxqZuyhqUGnKxzUzLSYvAHEeZ8tXtzC3bhqibxpnJHdcIrI50uY4%2BkKM8ozBzFTRzN6O2j4yA8c4RP%2BJ5A68o7MDWI1k1obYsOa0RqapYHBaW%2BL75ujYPI7MMATtkUj77AeueISW0d1o9y9%2BlhsJxLqWnM1rx6p6WEhgiOGqrXx%2BMid8cnbYVsGTx%2Bw31%2FZPoYJ48FW%2B6U3yDlPNGuI3GoedVELRAkFxLlvONk0DpRS9ZC8t%2FIIh7bu%2FYoAaEI3Nv5EM01HNZkliIMMP7qvL0GOqUBvy%2FzmqLPtN4J9xOTmoyK5rveO7%2Fs%2Bib%2FPrrP%2BaS7ZGjs1QLZon4qAYyRgIKYvVLpqEREV86MjF5KkVFqHW9wQa%2ByveiKD2fTY0w1WAzXG0chwTbQESJWmWMSTFJWq%2BMaGJSMCSUNZ%2FMsWMNF8jqfrBcG%2BKkYDhvJnMOk63%2F0%2Bbpt64iB5iz29FskKGkapJYrjW7l9zvNaj2JKiFCd8PQtQ5SozWP&X-Amz-Signature=9accb056bb21b9ee75dcc222a30ddfc2fabd88fc563d21d15ce9848dd2ccd3d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666STGWMLS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDXz3aRkEIWO9VAxZqD6lASXBCmsu8B3u9Si5%2Ftp3Z9GAIgUSc0e95Lbn%2FErtAQlfHIX5QToCcuy6a7GKbz5jsthR0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDD1hv2DdxWX1D7dNcyrcA1kFh9MaM%2BP8j%2B%2F3%2FSQe4dK1qZ5V6cvaBanQ530KeFSAdh3R6pVskg2xNJJ9z0ZoAnwumA8FQkvD59TT8yN4tNFfFjFBuvb9H%2FmMEXq5A10kf1qIL6SFBnSFFqcS40q1fueJzd%2Fujj4uBeIZPLkgC45AKBCRg9%2FJ2VrseLhvvHr7MRBPFQ5jmmSt0bieW5ckIRbiKLJK6BUTr7T1AjdsSCXvZMiSqC7kUET1AAgDofgvQEHGLwfUalpaAnASuBmFBBNGjTo0n%2B5G3meQeBqs7wjpOwujEx4z67c3U%2Fi8Pevw2HbxdcWQrnMZyQnMkaUDRiALVODJK6ezJ74d2oY5bIqEt4%2FBbDPMCEozdZUENb1NXN%2BxqZuyhqUGnKxzUzLSYvAHEeZ8tXtzC3bhqibxpnJHdcIrI50uY4%2BkKM8ozBzFTRzN6O2j4yA8c4RP%2BJ5A68o7MDWI1k1obYsOa0RqapYHBaW%2BL75ujYPI7MMATtkUj77AeueISW0d1o9y9%2BlhsJxLqWnM1rx6p6WEhgiOGqrXx%2BMid8cnbYVsGTx%2Bw31%2FZPoYJ48FW%2B6U3yDlPNGuI3GoedVELRAkFxLlvONk0DpRS9ZC8t%2FIIh7bu%2FYoAaEI3Nv5EM01HNZkliIMMP7qvL0GOqUBvy%2FzmqLPtN4J9xOTmoyK5rveO7%2Fs%2Bib%2FPrrP%2BaS7ZGjs1QLZon4qAYyRgIKYvVLpqEREV86MjF5KkVFqHW9wQa%2ByveiKD2fTY0w1WAzXG0chwTbQESJWmWMSTFJWq%2BMaGJSMCSUNZ%2FMsWMNF8jqfrBcG%2BKkYDhvJnMOk63%2F0%2Bbpt64iB5iz29FskKGkapJYrjW7l9zvNaj2JKiFCd8PQtQ5SozWP&X-Amz-Signature=703bdb9ef1441c9ae01857c1a92dfa9cbf2f8a2ce10a2206aac60e6016d8edcd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666STGWMLS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDXz3aRkEIWO9VAxZqD6lASXBCmsu8B3u9Si5%2Ftp3Z9GAIgUSc0e95Lbn%2FErtAQlfHIX5QToCcuy6a7GKbz5jsthR0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDD1hv2DdxWX1D7dNcyrcA1kFh9MaM%2BP8j%2B%2F3%2FSQe4dK1qZ5V6cvaBanQ530KeFSAdh3R6pVskg2xNJJ9z0ZoAnwumA8FQkvD59TT8yN4tNFfFjFBuvb9H%2FmMEXq5A10kf1qIL6SFBnSFFqcS40q1fueJzd%2Fujj4uBeIZPLkgC45AKBCRg9%2FJ2VrseLhvvHr7MRBPFQ5jmmSt0bieW5ckIRbiKLJK6BUTr7T1AjdsSCXvZMiSqC7kUET1AAgDofgvQEHGLwfUalpaAnASuBmFBBNGjTo0n%2B5G3meQeBqs7wjpOwujEx4z67c3U%2Fi8Pevw2HbxdcWQrnMZyQnMkaUDRiALVODJK6ezJ74d2oY5bIqEt4%2FBbDPMCEozdZUENb1NXN%2BxqZuyhqUGnKxzUzLSYvAHEeZ8tXtzC3bhqibxpnJHdcIrI50uY4%2BkKM8ozBzFTRzN6O2j4yA8c4RP%2BJ5A68o7MDWI1k1obYsOa0RqapYHBaW%2BL75ujYPI7MMATtkUj77AeueISW0d1o9y9%2BlhsJxLqWnM1rx6p6WEhgiOGqrXx%2BMid8cnbYVsGTx%2Bw31%2FZPoYJ48FW%2B6U3yDlPNGuI3GoedVELRAkFxLlvONk0DpRS9ZC8t%2FIIh7bu%2FYoAaEI3Nv5EM01HNZkliIMMP7qvL0GOqUBvy%2FzmqLPtN4J9xOTmoyK5rveO7%2Fs%2Bib%2FPrrP%2BaS7ZGjs1QLZon4qAYyRgIKYvVLpqEREV86MjF5KkVFqHW9wQa%2ByveiKD2fTY0w1WAzXG0chwTbQESJWmWMSTFJWq%2BMaGJSMCSUNZ%2FMsWMNF8jqfrBcG%2BKkYDhvJnMOk63%2F0%2Bbpt64iB5iz29FskKGkapJYrjW7l9zvNaj2JKiFCd8PQtQ5SozWP&X-Amz-Signature=92fee660b9f77f8494a78502ab1d6542fb08c98975038f15f009edc695b6e2cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666STGWMLS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDXz3aRkEIWO9VAxZqD6lASXBCmsu8B3u9Si5%2Ftp3Z9GAIgUSc0e95Lbn%2FErtAQlfHIX5QToCcuy6a7GKbz5jsthR0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDD1hv2DdxWX1D7dNcyrcA1kFh9MaM%2BP8j%2B%2F3%2FSQe4dK1qZ5V6cvaBanQ530KeFSAdh3R6pVskg2xNJJ9z0ZoAnwumA8FQkvD59TT8yN4tNFfFjFBuvb9H%2FmMEXq5A10kf1qIL6SFBnSFFqcS40q1fueJzd%2Fujj4uBeIZPLkgC45AKBCRg9%2FJ2VrseLhvvHr7MRBPFQ5jmmSt0bieW5ckIRbiKLJK6BUTr7T1AjdsSCXvZMiSqC7kUET1AAgDofgvQEHGLwfUalpaAnASuBmFBBNGjTo0n%2B5G3meQeBqs7wjpOwujEx4z67c3U%2Fi8Pevw2HbxdcWQrnMZyQnMkaUDRiALVODJK6ezJ74d2oY5bIqEt4%2FBbDPMCEozdZUENb1NXN%2BxqZuyhqUGnKxzUzLSYvAHEeZ8tXtzC3bhqibxpnJHdcIrI50uY4%2BkKM8ozBzFTRzN6O2j4yA8c4RP%2BJ5A68o7MDWI1k1obYsOa0RqapYHBaW%2BL75ujYPI7MMATtkUj77AeueISW0d1o9y9%2BlhsJxLqWnM1rx6p6WEhgiOGqrXx%2BMid8cnbYVsGTx%2Bw31%2FZPoYJ48FW%2B6U3yDlPNGuI3GoedVELRAkFxLlvONk0DpRS9ZC8t%2FIIh7bu%2FYoAaEI3Nv5EM01HNZkliIMMP7qvL0GOqUBvy%2FzmqLPtN4J9xOTmoyK5rveO7%2Fs%2Bib%2FPrrP%2BaS7ZGjs1QLZon4qAYyRgIKYvVLpqEREV86MjF5KkVFqHW9wQa%2ByveiKD2fTY0w1WAzXG0chwTbQESJWmWMSTFJWq%2BMaGJSMCSUNZ%2FMsWMNF8jqfrBcG%2BKkYDhvJnMOk63%2F0%2Bbpt64iB5iz29FskKGkapJYrjW7l9zvNaj2JKiFCd8PQtQ5SozWP&X-Amz-Signature=25d690cfd364de999090343675d2bd0e4ea402608e12a0ddd76885436bd7b972&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666STGWMLS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDXz3aRkEIWO9VAxZqD6lASXBCmsu8B3u9Si5%2Ftp3Z9GAIgUSc0e95Lbn%2FErtAQlfHIX5QToCcuy6a7GKbz5jsthR0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDD1hv2DdxWX1D7dNcyrcA1kFh9MaM%2BP8j%2B%2F3%2FSQe4dK1qZ5V6cvaBanQ530KeFSAdh3R6pVskg2xNJJ9z0ZoAnwumA8FQkvD59TT8yN4tNFfFjFBuvb9H%2FmMEXq5A10kf1qIL6SFBnSFFqcS40q1fueJzd%2Fujj4uBeIZPLkgC45AKBCRg9%2FJ2VrseLhvvHr7MRBPFQ5jmmSt0bieW5ckIRbiKLJK6BUTr7T1AjdsSCXvZMiSqC7kUET1AAgDofgvQEHGLwfUalpaAnASuBmFBBNGjTo0n%2B5G3meQeBqs7wjpOwujEx4z67c3U%2Fi8Pevw2HbxdcWQrnMZyQnMkaUDRiALVODJK6ezJ74d2oY5bIqEt4%2FBbDPMCEozdZUENb1NXN%2BxqZuyhqUGnKxzUzLSYvAHEeZ8tXtzC3bhqibxpnJHdcIrI50uY4%2BkKM8ozBzFTRzN6O2j4yA8c4RP%2BJ5A68o7MDWI1k1obYsOa0RqapYHBaW%2BL75ujYPI7MMATtkUj77AeueISW0d1o9y9%2BlhsJxLqWnM1rx6p6WEhgiOGqrXx%2BMid8cnbYVsGTx%2Bw31%2FZPoYJ48FW%2B6U3yDlPNGuI3GoedVELRAkFxLlvONk0DpRS9ZC8t%2FIIh7bu%2FYoAaEI3Nv5EM01HNZkliIMMP7qvL0GOqUBvy%2FzmqLPtN4J9xOTmoyK5rveO7%2Fs%2Bib%2FPrrP%2BaS7ZGjs1QLZon4qAYyRgIKYvVLpqEREV86MjF5KkVFqHW9wQa%2ByveiKD2fTY0w1WAzXG0chwTbQESJWmWMSTFJWq%2BMaGJSMCSUNZ%2FMsWMNF8jqfrBcG%2BKkYDhvJnMOk63%2F0%2Bbpt64iB5iz29FskKGkapJYrjW7l9zvNaj2JKiFCd8PQtQ5SozWP&X-Amz-Signature=bc1d5806cff47104170d8c07d09adbf705c12d56d5b5fb714411dc1b55511b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
