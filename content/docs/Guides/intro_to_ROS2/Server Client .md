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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LWSIBC3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDYaeSqocL1NKDq7U29CH4J8iZD%2BjW%2BLHOtPNWZufj7MwIhAMgA2y7iDs0t93iQ6ljVsH8aOu20f%2FhfbDw6%2FTZ2%2FvBtKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxU%2Fgmwh0auIMNHpb0q3APXHAUkdpUJUSRx8KGDVlRCPCh0Y5n0e34b34ujxO%2BTRJm4O7hHQfhPkFATeYlSPTO3OxC30Qm0PEgCtiRtYwuJjsYvp9C4YH5NC%2Bk9WBk%2FnIylr2atJAN%2BpfsGstLm6TWwgg8ErvrF8zjQGpC8PjDgRHV5gOakfrB5OkqqbtpxhMGCQ1bz1dcGeBA5F5o65vRVtS8oKsRLzGAQaR98VbZWhL9Z85thdyvYBj0DJHwA%2BXXXwuEW6jO6kaXSQverB8mJITe1Ba4NTqbnJa%2FGLBhfpzUH7SxNIFXanaqkvZXz3xHqB1HacLDDB7NGyPnjmcEbTlvA8iJNpo1ZcCJKIkmbxEOhX40ZlRxX2DzjWBCH24DI5zTrdqGIwdJiOxP1WxNIqWtfDBsfeL3%2F1ffwNE7%2BXn1c1AQTwdJnPBNjbAbUiE8rCK04xEDxyEaFPjrZ1SkfT2M%2BE3bSiwi03xOeu9NdNOYdyzEjWfxXGMslySgnilFCjZgjft%2BDeqE95sXulHm6mJVop7GfS9jO2wpwAFmrZlF%2F4wO%2FxLXyfeBPwuH2ffynyMaYwGNJ27GS8erlJLyaIerkZNjQ4ZybwBMMDe4Fcr1OX0I9%2F85kukK%2BFZw3KNdrdN6bvMhvXwVXZjCM3Pa%2BBjqkAe7gs18frdHHEmuvjaLKK0fZrB1p%2BP751GN86FYdqwjL7XHZMm1mHnCukpu%2BPcIkeTrpdCFBdtUKPxuJ2NYk7LZ54RRpGkNL1EFy0gCoVfrIthac7j%2Bdqx9LfLJFbbRqqXrG8kjaqkU2DNW1HQSEZ3RNduk%2Bu5eTQ1cX0LyV%2FrrtB7EiJjDPqJchKBKF%2BOLaa%2FGGS%2FeLoN6Zn9iIRPt7isB5E%2BF8&X-Amz-Signature=489e735385a8dd44078dc4c023aac35f39b409c04d70a1daeb910c42242102ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LWSIBC3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDYaeSqocL1NKDq7U29CH4J8iZD%2BjW%2BLHOtPNWZufj7MwIhAMgA2y7iDs0t93iQ6ljVsH8aOu20f%2FhfbDw6%2FTZ2%2FvBtKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxU%2Fgmwh0auIMNHpb0q3APXHAUkdpUJUSRx8KGDVlRCPCh0Y5n0e34b34ujxO%2BTRJm4O7hHQfhPkFATeYlSPTO3OxC30Qm0PEgCtiRtYwuJjsYvp9C4YH5NC%2Bk9WBk%2FnIylr2atJAN%2BpfsGstLm6TWwgg8ErvrF8zjQGpC8PjDgRHV5gOakfrB5OkqqbtpxhMGCQ1bz1dcGeBA5F5o65vRVtS8oKsRLzGAQaR98VbZWhL9Z85thdyvYBj0DJHwA%2BXXXwuEW6jO6kaXSQverB8mJITe1Ba4NTqbnJa%2FGLBhfpzUH7SxNIFXanaqkvZXz3xHqB1HacLDDB7NGyPnjmcEbTlvA8iJNpo1ZcCJKIkmbxEOhX40ZlRxX2DzjWBCH24DI5zTrdqGIwdJiOxP1WxNIqWtfDBsfeL3%2F1ffwNE7%2BXn1c1AQTwdJnPBNjbAbUiE8rCK04xEDxyEaFPjrZ1SkfT2M%2BE3bSiwi03xOeu9NdNOYdyzEjWfxXGMslySgnilFCjZgjft%2BDeqE95sXulHm6mJVop7GfS9jO2wpwAFmrZlF%2F4wO%2FxLXyfeBPwuH2ffynyMaYwGNJ27GS8erlJLyaIerkZNjQ4ZybwBMMDe4Fcr1OX0I9%2F85kukK%2BFZw3KNdrdN6bvMhvXwVXZjCM3Pa%2BBjqkAe7gs18frdHHEmuvjaLKK0fZrB1p%2BP751GN86FYdqwjL7XHZMm1mHnCukpu%2BPcIkeTrpdCFBdtUKPxuJ2NYk7LZ54RRpGkNL1EFy0gCoVfrIthac7j%2Bdqx9LfLJFbbRqqXrG8kjaqkU2DNW1HQSEZ3RNduk%2Bu5eTQ1cX0LyV%2FrrtB7EiJjDPqJchKBKF%2BOLaa%2FGGS%2FeLoN6Zn9iIRPt7isB5E%2BF8&X-Amz-Signature=a64aaa45d4322cde3f54c64896a46ec7dbe80b172320fae1c983b57c85a41f16&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LWSIBC3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDYaeSqocL1NKDq7U29CH4J8iZD%2BjW%2BLHOtPNWZufj7MwIhAMgA2y7iDs0t93iQ6ljVsH8aOu20f%2FhfbDw6%2FTZ2%2FvBtKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxU%2Fgmwh0auIMNHpb0q3APXHAUkdpUJUSRx8KGDVlRCPCh0Y5n0e34b34ujxO%2BTRJm4O7hHQfhPkFATeYlSPTO3OxC30Qm0PEgCtiRtYwuJjsYvp9C4YH5NC%2Bk9WBk%2FnIylr2atJAN%2BpfsGstLm6TWwgg8ErvrF8zjQGpC8PjDgRHV5gOakfrB5OkqqbtpxhMGCQ1bz1dcGeBA5F5o65vRVtS8oKsRLzGAQaR98VbZWhL9Z85thdyvYBj0DJHwA%2BXXXwuEW6jO6kaXSQverB8mJITe1Ba4NTqbnJa%2FGLBhfpzUH7SxNIFXanaqkvZXz3xHqB1HacLDDB7NGyPnjmcEbTlvA8iJNpo1ZcCJKIkmbxEOhX40ZlRxX2DzjWBCH24DI5zTrdqGIwdJiOxP1WxNIqWtfDBsfeL3%2F1ffwNE7%2BXn1c1AQTwdJnPBNjbAbUiE8rCK04xEDxyEaFPjrZ1SkfT2M%2BE3bSiwi03xOeu9NdNOYdyzEjWfxXGMslySgnilFCjZgjft%2BDeqE95sXulHm6mJVop7GfS9jO2wpwAFmrZlF%2F4wO%2FxLXyfeBPwuH2ffynyMaYwGNJ27GS8erlJLyaIerkZNjQ4ZybwBMMDe4Fcr1OX0I9%2F85kukK%2BFZw3KNdrdN6bvMhvXwVXZjCM3Pa%2BBjqkAe7gs18frdHHEmuvjaLKK0fZrB1p%2BP751GN86FYdqwjL7XHZMm1mHnCukpu%2BPcIkeTrpdCFBdtUKPxuJ2NYk7LZ54RRpGkNL1EFy0gCoVfrIthac7j%2Bdqx9LfLJFbbRqqXrG8kjaqkU2DNW1HQSEZ3RNduk%2Bu5eTQ1cX0LyV%2FrrtB7EiJjDPqJchKBKF%2BOLaa%2FGGS%2FeLoN6Zn9iIRPt7isB5E%2BF8&X-Amz-Signature=7e35f037405d2d8a491800f8c318c1b94b183c68fde70c6a190700e738560b49&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LWSIBC3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDYaeSqocL1NKDq7U29CH4J8iZD%2BjW%2BLHOtPNWZufj7MwIhAMgA2y7iDs0t93iQ6ljVsH8aOu20f%2FhfbDw6%2FTZ2%2FvBtKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxU%2Fgmwh0auIMNHpb0q3APXHAUkdpUJUSRx8KGDVlRCPCh0Y5n0e34b34ujxO%2BTRJm4O7hHQfhPkFATeYlSPTO3OxC30Qm0PEgCtiRtYwuJjsYvp9C4YH5NC%2Bk9WBk%2FnIylr2atJAN%2BpfsGstLm6TWwgg8ErvrF8zjQGpC8PjDgRHV5gOakfrB5OkqqbtpxhMGCQ1bz1dcGeBA5F5o65vRVtS8oKsRLzGAQaR98VbZWhL9Z85thdyvYBj0DJHwA%2BXXXwuEW6jO6kaXSQverB8mJITe1Ba4NTqbnJa%2FGLBhfpzUH7SxNIFXanaqkvZXz3xHqB1HacLDDB7NGyPnjmcEbTlvA8iJNpo1ZcCJKIkmbxEOhX40ZlRxX2DzjWBCH24DI5zTrdqGIwdJiOxP1WxNIqWtfDBsfeL3%2F1ffwNE7%2BXn1c1AQTwdJnPBNjbAbUiE8rCK04xEDxyEaFPjrZ1SkfT2M%2BE3bSiwi03xOeu9NdNOYdyzEjWfxXGMslySgnilFCjZgjft%2BDeqE95sXulHm6mJVop7GfS9jO2wpwAFmrZlF%2F4wO%2FxLXyfeBPwuH2ffynyMaYwGNJ27GS8erlJLyaIerkZNjQ4ZybwBMMDe4Fcr1OX0I9%2F85kukK%2BFZw3KNdrdN6bvMhvXwVXZjCM3Pa%2BBjqkAe7gs18frdHHEmuvjaLKK0fZrB1p%2BP751GN86FYdqwjL7XHZMm1mHnCukpu%2BPcIkeTrpdCFBdtUKPxuJ2NYk7LZ54RRpGkNL1EFy0gCoVfrIthac7j%2Bdqx9LfLJFbbRqqXrG8kjaqkU2DNW1HQSEZ3RNduk%2Bu5eTQ1cX0LyV%2FrrtB7EiJjDPqJchKBKF%2BOLaa%2FGGS%2FeLoN6Zn9iIRPt7isB5E%2BF8&X-Amz-Signature=0f65542bbb93a531f61c419f4bf82ebfdad8c2ad9e531a0fe9c7234e097a08dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LWSIBC3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDYaeSqocL1NKDq7U29CH4J8iZD%2BjW%2BLHOtPNWZufj7MwIhAMgA2y7iDs0t93iQ6ljVsH8aOu20f%2FhfbDw6%2FTZ2%2FvBtKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxU%2Fgmwh0auIMNHpb0q3APXHAUkdpUJUSRx8KGDVlRCPCh0Y5n0e34b34ujxO%2BTRJm4O7hHQfhPkFATeYlSPTO3OxC30Qm0PEgCtiRtYwuJjsYvp9C4YH5NC%2Bk9WBk%2FnIylr2atJAN%2BpfsGstLm6TWwgg8ErvrF8zjQGpC8PjDgRHV5gOakfrB5OkqqbtpxhMGCQ1bz1dcGeBA5F5o65vRVtS8oKsRLzGAQaR98VbZWhL9Z85thdyvYBj0DJHwA%2BXXXwuEW6jO6kaXSQverB8mJITe1Ba4NTqbnJa%2FGLBhfpzUH7SxNIFXanaqkvZXz3xHqB1HacLDDB7NGyPnjmcEbTlvA8iJNpo1ZcCJKIkmbxEOhX40ZlRxX2DzjWBCH24DI5zTrdqGIwdJiOxP1WxNIqWtfDBsfeL3%2F1ffwNE7%2BXn1c1AQTwdJnPBNjbAbUiE8rCK04xEDxyEaFPjrZ1SkfT2M%2BE3bSiwi03xOeu9NdNOYdyzEjWfxXGMslySgnilFCjZgjft%2BDeqE95sXulHm6mJVop7GfS9jO2wpwAFmrZlF%2F4wO%2FxLXyfeBPwuH2ffynyMaYwGNJ27GS8erlJLyaIerkZNjQ4ZybwBMMDe4Fcr1OX0I9%2F85kukK%2BFZw3KNdrdN6bvMhvXwVXZjCM3Pa%2BBjqkAe7gs18frdHHEmuvjaLKK0fZrB1p%2BP751GN86FYdqwjL7XHZMm1mHnCukpu%2BPcIkeTrpdCFBdtUKPxuJ2NYk7LZ54RRpGkNL1EFy0gCoVfrIthac7j%2Bdqx9LfLJFbbRqqXrG8kjaqkU2DNW1HQSEZ3RNduk%2Bu5eTQ1cX0LyV%2FrrtB7EiJjDPqJchKBKF%2BOLaa%2FGGS%2FeLoN6Zn9iIRPt7isB5E%2BF8&X-Amz-Signature=df9af8dbff52b22cb30ff397bff1445738b4762abb2d6f33b87f743324fe6e91&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
