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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BYO3IWZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGrLXOeNtWKVncD4cNlXHCfIFBMstc1M8prRjO0GP%2FDFAiEAj2%2BA8%2BD3gGEbPK8lLsHoDU47E5PglT4zeHvy07FInVYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDG81p9hYsV7iNZjpUCrcA29AseNSZWYnJwK9ZpTbHJynVlbW%2BBEEXH8z47VcNRqvqVF%2BNSYSc2kpU5x4Lh%2FcJ%2F3BXpCyBjcXs%2FVEbPosxnBkVO2A5j2Xr07gQXIi9JRFJ5cHxnc7%2F1ufXkW5y1QwTaIbZv2DYmvduseq0S54RZ9CApjA5Hk1RgJ6AXw2p%2B64gi3zkUuilly6nGzl8MWFKG1WsX7K1og0E55pcer8p%2B9FNar8Yl2wpgvQRtmQKiLM7%2BJilMGKKYnVQEvDOgvkdTw2FnxrB9LjcNxYXSXeFwPHdEkOkvFPCocR4NDRZvZfmZ9mZ89NIdI6HHQQ2VxdVFDlFYhj2voetVWszbphMmWSRnW%2FNQZQCHt200bdM9S7MJFub0mB1TajrNu8mxsxFvpTpL4WLsypeumKyvdHEDJaInp5pYuVwAE2pX8wAjtbkVpvSY9pgnl%2BWQGgUDr%2Bcl16DZRIx1t7i1cqDxHAbsgZ4un5bjPui6yTSZEaS%2Ff5aEe8ag6DXrM14Iu0HAZiXwgOQgi4VQap783KteKS49D5PcJNtpZEmGrhTaCmsIo2%2Fgx4ca1KAaXm3j9TW5b3oAoXZBTMIKiLbEjj2h3K30qIsIGrYaeKywp5ysQd5pggoCWLyDYBYB6Yg2tuMJ6k1cMGOqUBLsQtXPkGY3xkxB4XI7JDyTEQ2KaDVWMdbrWhGVOjbrqFk5DNxg0K6wX1ouG1ZPi6FgTZkGvW5H6R%2B7Z5r9v2xW2%2Bw%2B%2Bs6brpF2bZQzF0NoIn%2F7GCT%2Bq7G0tCXK1bfpKq%2Fl7bL3NYHxzFWiqvTyis0WJTl8AhupAWqOXljdPItInDjiN6HU5U9IFYR7zBFog3%2BXc%2FfWDIJsujBrAZEjAHZgyiIz78&X-Amz-Signature=6659a8079901fc031ed31fbbcc317652162f48c66f4b6b764697b679180e1f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BYO3IWZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGrLXOeNtWKVncD4cNlXHCfIFBMstc1M8prRjO0GP%2FDFAiEAj2%2BA8%2BD3gGEbPK8lLsHoDU47E5PglT4zeHvy07FInVYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDG81p9hYsV7iNZjpUCrcA29AseNSZWYnJwK9ZpTbHJynVlbW%2BBEEXH8z47VcNRqvqVF%2BNSYSc2kpU5x4Lh%2FcJ%2F3BXpCyBjcXs%2FVEbPosxnBkVO2A5j2Xr07gQXIi9JRFJ5cHxnc7%2F1ufXkW5y1QwTaIbZv2DYmvduseq0S54RZ9CApjA5Hk1RgJ6AXw2p%2B64gi3zkUuilly6nGzl8MWFKG1WsX7K1og0E55pcer8p%2B9FNar8Yl2wpgvQRtmQKiLM7%2BJilMGKKYnVQEvDOgvkdTw2FnxrB9LjcNxYXSXeFwPHdEkOkvFPCocR4NDRZvZfmZ9mZ89NIdI6HHQQ2VxdVFDlFYhj2voetVWszbphMmWSRnW%2FNQZQCHt200bdM9S7MJFub0mB1TajrNu8mxsxFvpTpL4WLsypeumKyvdHEDJaInp5pYuVwAE2pX8wAjtbkVpvSY9pgnl%2BWQGgUDr%2Bcl16DZRIx1t7i1cqDxHAbsgZ4un5bjPui6yTSZEaS%2Ff5aEe8ag6DXrM14Iu0HAZiXwgOQgi4VQap783KteKS49D5PcJNtpZEmGrhTaCmsIo2%2Fgx4ca1KAaXm3j9TW5b3oAoXZBTMIKiLbEjj2h3K30qIsIGrYaeKywp5ysQd5pggoCWLyDYBYB6Yg2tuMJ6k1cMGOqUBLsQtXPkGY3xkxB4XI7JDyTEQ2KaDVWMdbrWhGVOjbrqFk5DNxg0K6wX1ouG1ZPi6FgTZkGvW5H6R%2B7Z5r9v2xW2%2Bw%2B%2Bs6brpF2bZQzF0NoIn%2F7GCT%2Bq7G0tCXK1bfpKq%2Fl7bL3NYHxzFWiqvTyis0WJTl8AhupAWqOXljdPItInDjiN6HU5U9IFYR7zBFog3%2BXc%2FfWDIJsujBrAZEjAHZgyiIz78&X-Amz-Signature=ed98c7eb6be680203bd2308d91a89a900ed0c4850105b6150f3555c56cf1d965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BYO3IWZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGrLXOeNtWKVncD4cNlXHCfIFBMstc1M8prRjO0GP%2FDFAiEAj2%2BA8%2BD3gGEbPK8lLsHoDU47E5PglT4zeHvy07FInVYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDG81p9hYsV7iNZjpUCrcA29AseNSZWYnJwK9ZpTbHJynVlbW%2BBEEXH8z47VcNRqvqVF%2BNSYSc2kpU5x4Lh%2FcJ%2F3BXpCyBjcXs%2FVEbPosxnBkVO2A5j2Xr07gQXIi9JRFJ5cHxnc7%2F1ufXkW5y1QwTaIbZv2DYmvduseq0S54RZ9CApjA5Hk1RgJ6AXw2p%2B64gi3zkUuilly6nGzl8MWFKG1WsX7K1og0E55pcer8p%2B9FNar8Yl2wpgvQRtmQKiLM7%2BJilMGKKYnVQEvDOgvkdTw2FnxrB9LjcNxYXSXeFwPHdEkOkvFPCocR4NDRZvZfmZ9mZ89NIdI6HHQQ2VxdVFDlFYhj2voetVWszbphMmWSRnW%2FNQZQCHt200bdM9S7MJFub0mB1TajrNu8mxsxFvpTpL4WLsypeumKyvdHEDJaInp5pYuVwAE2pX8wAjtbkVpvSY9pgnl%2BWQGgUDr%2Bcl16DZRIx1t7i1cqDxHAbsgZ4un5bjPui6yTSZEaS%2Ff5aEe8ag6DXrM14Iu0HAZiXwgOQgi4VQap783KteKS49D5PcJNtpZEmGrhTaCmsIo2%2Fgx4ca1KAaXm3j9TW5b3oAoXZBTMIKiLbEjj2h3K30qIsIGrYaeKywp5ysQd5pggoCWLyDYBYB6Yg2tuMJ6k1cMGOqUBLsQtXPkGY3xkxB4XI7JDyTEQ2KaDVWMdbrWhGVOjbrqFk5DNxg0K6wX1ouG1ZPi6FgTZkGvW5H6R%2B7Z5r9v2xW2%2Bw%2B%2Bs6brpF2bZQzF0NoIn%2F7GCT%2Bq7G0tCXK1bfpKq%2Fl7bL3NYHxzFWiqvTyis0WJTl8AhupAWqOXljdPItInDjiN6HU5U9IFYR7zBFog3%2BXc%2FfWDIJsujBrAZEjAHZgyiIz78&X-Amz-Signature=4b8865fa292cbdb956d1fcfb1597359a273146dc42e2bbe89c9a51a7499eb1a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BYO3IWZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGrLXOeNtWKVncD4cNlXHCfIFBMstc1M8prRjO0GP%2FDFAiEAj2%2BA8%2BD3gGEbPK8lLsHoDU47E5PglT4zeHvy07FInVYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDG81p9hYsV7iNZjpUCrcA29AseNSZWYnJwK9ZpTbHJynVlbW%2BBEEXH8z47VcNRqvqVF%2BNSYSc2kpU5x4Lh%2FcJ%2F3BXpCyBjcXs%2FVEbPosxnBkVO2A5j2Xr07gQXIi9JRFJ5cHxnc7%2F1ufXkW5y1QwTaIbZv2DYmvduseq0S54RZ9CApjA5Hk1RgJ6AXw2p%2B64gi3zkUuilly6nGzl8MWFKG1WsX7K1og0E55pcer8p%2B9FNar8Yl2wpgvQRtmQKiLM7%2BJilMGKKYnVQEvDOgvkdTw2FnxrB9LjcNxYXSXeFwPHdEkOkvFPCocR4NDRZvZfmZ9mZ89NIdI6HHQQ2VxdVFDlFYhj2voetVWszbphMmWSRnW%2FNQZQCHt200bdM9S7MJFub0mB1TajrNu8mxsxFvpTpL4WLsypeumKyvdHEDJaInp5pYuVwAE2pX8wAjtbkVpvSY9pgnl%2BWQGgUDr%2Bcl16DZRIx1t7i1cqDxHAbsgZ4un5bjPui6yTSZEaS%2Ff5aEe8ag6DXrM14Iu0HAZiXwgOQgi4VQap783KteKS49D5PcJNtpZEmGrhTaCmsIo2%2Fgx4ca1KAaXm3j9TW5b3oAoXZBTMIKiLbEjj2h3K30qIsIGrYaeKywp5ysQd5pggoCWLyDYBYB6Yg2tuMJ6k1cMGOqUBLsQtXPkGY3xkxB4XI7JDyTEQ2KaDVWMdbrWhGVOjbrqFk5DNxg0K6wX1ouG1ZPi6FgTZkGvW5H6R%2B7Z5r9v2xW2%2Bw%2B%2Bs6brpF2bZQzF0NoIn%2F7GCT%2Bq7G0tCXK1bfpKq%2Fl7bL3NYHxzFWiqvTyis0WJTl8AhupAWqOXljdPItInDjiN6HU5U9IFYR7zBFog3%2BXc%2FfWDIJsujBrAZEjAHZgyiIz78&X-Amz-Signature=02e129be9653b3b134352f143ddee19c2d90a9267ce489fee9163456e80044b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BYO3IWZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGrLXOeNtWKVncD4cNlXHCfIFBMstc1M8prRjO0GP%2FDFAiEAj2%2BA8%2BD3gGEbPK8lLsHoDU47E5PglT4zeHvy07FInVYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDG81p9hYsV7iNZjpUCrcA29AseNSZWYnJwK9ZpTbHJynVlbW%2BBEEXH8z47VcNRqvqVF%2BNSYSc2kpU5x4Lh%2FcJ%2F3BXpCyBjcXs%2FVEbPosxnBkVO2A5j2Xr07gQXIi9JRFJ5cHxnc7%2F1ufXkW5y1QwTaIbZv2DYmvduseq0S54RZ9CApjA5Hk1RgJ6AXw2p%2B64gi3zkUuilly6nGzl8MWFKG1WsX7K1og0E55pcer8p%2B9FNar8Yl2wpgvQRtmQKiLM7%2BJilMGKKYnVQEvDOgvkdTw2FnxrB9LjcNxYXSXeFwPHdEkOkvFPCocR4NDRZvZfmZ9mZ89NIdI6HHQQ2VxdVFDlFYhj2voetVWszbphMmWSRnW%2FNQZQCHt200bdM9S7MJFub0mB1TajrNu8mxsxFvpTpL4WLsypeumKyvdHEDJaInp5pYuVwAE2pX8wAjtbkVpvSY9pgnl%2BWQGgUDr%2Bcl16DZRIx1t7i1cqDxHAbsgZ4un5bjPui6yTSZEaS%2Ff5aEe8ag6DXrM14Iu0HAZiXwgOQgi4VQap783KteKS49D5PcJNtpZEmGrhTaCmsIo2%2Fgx4ca1KAaXm3j9TW5b3oAoXZBTMIKiLbEjj2h3K30qIsIGrYaeKywp5ysQd5pggoCWLyDYBYB6Yg2tuMJ6k1cMGOqUBLsQtXPkGY3xkxB4XI7JDyTEQ2KaDVWMdbrWhGVOjbrqFk5DNxg0K6wX1ouG1ZPi6FgTZkGvW5H6R%2B7Z5r9v2xW2%2Bw%2B%2Bs6brpF2bZQzF0NoIn%2F7GCT%2Bq7G0tCXK1bfpKq%2Fl7bL3NYHxzFWiqvTyis0WJTl8AhupAWqOXljdPItInDjiN6HU5U9IFYR7zBFog3%2BXc%2FfWDIJsujBrAZEjAHZgyiIz78&X-Amz-Signature=b44028b33b78e656f28c1fd0288fbc0f0ad8e067a85d80728dc389cef2b8c80f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
