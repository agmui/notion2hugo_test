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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MATVAW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDDh2f7EBNkVAt%2Bp6J8GQFcHSXhWFwDJstOogZRaQBGpgIgdAII72wv3WwR7t%2F9B5%2Fdl6mtZEMsxMHgW51aIgFlkscqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPF6fclBiEQGhq0YoircA2FPawiPpEDxh68tAJGttWPGB7nW80aqHNap7jb7mKi007gnY47Kv2U7qSjIgttd58ujuCnK1tGRMxTohkxi%2BjK3Xe3LqTgdkcU9B8eV08G8nhRNyNlD0dQDPobawotPDJFOrQ7jH9fDMgndZHFOR3hG6F87VFiqjl651th3sadrGcq0uiJzpYJcOhqqk4Kel16SrHjkFQfRm26KMIWXrDOHjA6IIqfh4iUD8eG3ugkKn2Bf5co0nYAGtY3W0agK6V2XhQBMzMBsRL2hbbh9uxHoNqtQ8EQO8vW7RFAcFwPTkAwQqeUpKc%2BIiL%2Fl16cHiHGDijwJnJuL4VS96pHgXMrPRPekMBIcTUUbWk5nAE8Stp6GvL1QlsIe0puTQL5IUmXJN3Wrdy19%2FR9vrI7y2AL%2B70v1GXR0Fuipaqn9TxPtBXx6U6Drl8x8vgOD6zkuZI8P0Tupn9wvRMx4AK32h1OrCXFis4Z0RBcdqB%2BdsF4lHPwn9IHJGjtewQiPID0sTZbCzyZIHjHMMsz%2Bwk4IS5xpbBIxKDbroSLtC%2BaNATzoVprBvcDRPm%2FL2QBx3iphuY4o8yyPnzKD0lc0TYCemJyHRfmrDyF2IGvmycpuQW07oKRoShQG2Z5pJj3EMJmA88EGOqUBrpPmbc754oU7Aqgh%2FKiHvIY0H6ow662zMh1O0KbbCmtFTuXSGK9SRkieXtcWt7kSxYjweYGQK8MtV5QAyPEznA%2FDWgTq%2BznvjYlN8TjOdYdkxo%2F4UhSGEbTWAPsO7H6GvnHMzf%2BHN0M22RP8ZQusUvF1EmlHamaBrpbDHQTo9obT93DhvWfBWaY5sqyB8LOZ9LmD%2Fr5MtSDG5%2BTmEZf%2BAoYWo5v1&X-Amz-Signature=4747297368f0e82e1609456330180d1d4dad1ba7bda38563453e17f0c2cf972c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MATVAW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDDh2f7EBNkVAt%2Bp6J8GQFcHSXhWFwDJstOogZRaQBGpgIgdAII72wv3WwR7t%2F9B5%2Fdl6mtZEMsxMHgW51aIgFlkscqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPF6fclBiEQGhq0YoircA2FPawiPpEDxh68tAJGttWPGB7nW80aqHNap7jb7mKi007gnY47Kv2U7qSjIgttd58ujuCnK1tGRMxTohkxi%2BjK3Xe3LqTgdkcU9B8eV08G8nhRNyNlD0dQDPobawotPDJFOrQ7jH9fDMgndZHFOR3hG6F87VFiqjl651th3sadrGcq0uiJzpYJcOhqqk4Kel16SrHjkFQfRm26KMIWXrDOHjA6IIqfh4iUD8eG3ugkKn2Bf5co0nYAGtY3W0agK6V2XhQBMzMBsRL2hbbh9uxHoNqtQ8EQO8vW7RFAcFwPTkAwQqeUpKc%2BIiL%2Fl16cHiHGDijwJnJuL4VS96pHgXMrPRPekMBIcTUUbWk5nAE8Stp6GvL1QlsIe0puTQL5IUmXJN3Wrdy19%2FR9vrI7y2AL%2B70v1GXR0Fuipaqn9TxPtBXx6U6Drl8x8vgOD6zkuZI8P0Tupn9wvRMx4AK32h1OrCXFis4Z0RBcdqB%2BdsF4lHPwn9IHJGjtewQiPID0sTZbCzyZIHjHMMsz%2Bwk4IS5xpbBIxKDbroSLtC%2BaNATzoVprBvcDRPm%2FL2QBx3iphuY4o8yyPnzKD0lc0TYCemJyHRfmrDyF2IGvmycpuQW07oKRoShQG2Z5pJj3EMJmA88EGOqUBrpPmbc754oU7Aqgh%2FKiHvIY0H6ow662zMh1O0KbbCmtFTuXSGK9SRkieXtcWt7kSxYjweYGQK8MtV5QAyPEznA%2FDWgTq%2BznvjYlN8TjOdYdkxo%2F4UhSGEbTWAPsO7H6GvnHMzf%2BHN0M22RP8ZQusUvF1EmlHamaBrpbDHQTo9obT93DhvWfBWaY5sqyB8LOZ9LmD%2Fr5MtSDG5%2BTmEZf%2BAoYWo5v1&X-Amz-Signature=1ccd9cb30d0ac8c54902b27e81ffbb905ea236d11ec8ac6417aa60b8dc77181d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MATVAW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDDh2f7EBNkVAt%2Bp6J8GQFcHSXhWFwDJstOogZRaQBGpgIgdAII72wv3WwR7t%2F9B5%2Fdl6mtZEMsxMHgW51aIgFlkscqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPF6fclBiEQGhq0YoircA2FPawiPpEDxh68tAJGttWPGB7nW80aqHNap7jb7mKi007gnY47Kv2U7qSjIgttd58ujuCnK1tGRMxTohkxi%2BjK3Xe3LqTgdkcU9B8eV08G8nhRNyNlD0dQDPobawotPDJFOrQ7jH9fDMgndZHFOR3hG6F87VFiqjl651th3sadrGcq0uiJzpYJcOhqqk4Kel16SrHjkFQfRm26KMIWXrDOHjA6IIqfh4iUD8eG3ugkKn2Bf5co0nYAGtY3W0agK6V2XhQBMzMBsRL2hbbh9uxHoNqtQ8EQO8vW7RFAcFwPTkAwQqeUpKc%2BIiL%2Fl16cHiHGDijwJnJuL4VS96pHgXMrPRPekMBIcTUUbWk5nAE8Stp6GvL1QlsIe0puTQL5IUmXJN3Wrdy19%2FR9vrI7y2AL%2B70v1GXR0Fuipaqn9TxPtBXx6U6Drl8x8vgOD6zkuZI8P0Tupn9wvRMx4AK32h1OrCXFis4Z0RBcdqB%2BdsF4lHPwn9IHJGjtewQiPID0sTZbCzyZIHjHMMsz%2Bwk4IS5xpbBIxKDbroSLtC%2BaNATzoVprBvcDRPm%2FL2QBx3iphuY4o8yyPnzKD0lc0TYCemJyHRfmrDyF2IGvmycpuQW07oKRoShQG2Z5pJj3EMJmA88EGOqUBrpPmbc754oU7Aqgh%2FKiHvIY0H6ow662zMh1O0KbbCmtFTuXSGK9SRkieXtcWt7kSxYjweYGQK8MtV5QAyPEznA%2FDWgTq%2BznvjYlN8TjOdYdkxo%2F4UhSGEbTWAPsO7H6GvnHMzf%2BHN0M22RP8ZQusUvF1EmlHamaBrpbDHQTo9obT93DhvWfBWaY5sqyB8LOZ9LmD%2Fr5MtSDG5%2BTmEZf%2BAoYWo5v1&X-Amz-Signature=0f8c90fe3b622a0cd9264ca3088b1b536157ac5256896335d6df20c225ec43d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MATVAW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDDh2f7EBNkVAt%2Bp6J8GQFcHSXhWFwDJstOogZRaQBGpgIgdAII72wv3WwR7t%2F9B5%2Fdl6mtZEMsxMHgW51aIgFlkscqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPF6fclBiEQGhq0YoircA2FPawiPpEDxh68tAJGttWPGB7nW80aqHNap7jb7mKi007gnY47Kv2U7qSjIgttd58ujuCnK1tGRMxTohkxi%2BjK3Xe3LqTgdkcU9B8eV08G8nhRNyNlD0dQDPobawotPDJFOrQ7jH9fDMgndZHFOR3hG6F87VFiqjl651th3sadrGcq0uiJzpYJcOhqqk4Kel16SrHjkFQfRm26KMIWXrDOHjA6IIqfh4iUD8eG3ugkKn2Bf5co0nYAGtY3W0agK6V2XhQBMzMBsRL2hbbh9uxHoNqtQ8EQO8vW7RFAcFwPTkAwQqeUpKc%2BIiL%2Fl16cHiHGDijwJnJuL4VS96pHgXMrPRPekMBIcTUUbWk5nAE8Stp6GvL1QlsIe0puTQL5IUmXJN3Wrdy19%2FR9vrI7y2AL%2B70v1GXR0Fuipaqn9TxPtBXx6U6Drl8x8vgOD6zkuZI8P0Tupn9wvRMx4AK32h1OrCXFis4Z0RBcdqB%2BdsF4lHPwn9IHJGjtewQiPID0sTZbCzyZIHjHMMsz%2Bwk4IS5xpbBIxKDbroSLtC%2BaNATzoVprBvcDRPm%2FL2QBx3iphuY4o8yyPnzKD0lc0TYCemJyHRfmrDyF2IGvmycpuQW07oKRoShQG2Z5pJj3EMJmA88EGOqUBrpPmbc754oU7Aqgh%2FKiHvIY0H6ow662zMh1O0KbbCmtFTuXSGK9SRkieXtcWt7kSxYjweYGQK8MtV5QAyPEznA%2FDWgTq%2BznvjYlN8TjOdYdkxo%2F4UhSGEbTWAPsO7H6GvnHMzf%2BHN0M22RP8ZQusUvF1EmlHamaBrpbDHQTo9obT93DhvWfBWaY5sqyB8LOZ9LmD%2Fr5MtSDG5%2BTmEZf%2BAoYWo5v1&X-Amz-Signature=81f90ac8c658abe94db8ff12bd341cb9329358fe9556f1746b6ad7dc43df1ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MATVAW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDDh2f7EBNkVAt%2Bp6J8GQFcHSXhWFwDJstOogZRaQBGpgIgdAII72wv3WwR7t%2F9B5%2Fdl6mtZEMsxMHgW51aIgFlkscqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPF6fclBiEQGhq0YoircA2FPawiPpEDxh68tAJGttWPGB7nW80aqHNap7jb7mKi007gnY47Kv2U7qSjIgttd58ujuCnK1tGRMxTohkxi%2BjK3Xe3LqTgdkcU9B8eV08G8nhRNyNlD0dQDPobawotPDJFOrQ7jH9fDMgndZHFOR3hG6F87VFiqjl651th3sadrGcq0uiJzpYJcOhqqk4Kel16SrHjkFQfRm26KMIWXrDOHjA6IIqfh4iUD8eG3ugkKn2Bf5co0nYAGtY3W0agK6V2XhQBMzMBsRL2hbbh9uxHoNqtQ8EQO8vW7RFAcFwPTkAwQqeUpKc%2BIiL%2Fl16cHiHGDijwJnJuL4VS96pHgXMrPRPekMBIcTUUbWk5nAE8Stp6GvL1QlsIe0puTQL5IUmXJN3Wrdy19%2FR9vrI7y2AL%2B70v1GXR0Fuipaqn9TxPtBXx6U6Drl8x8vgOD6zkuZI8P0Tupn9wvRMx4AK32h1OrCXFis4Z0RBcdqB%2BdsF4lHPwn9IHJGjtewQiPID0sTZbCzyZIHjHMMsz%2Bwk4IS5xpbBIxKDbroSLtC%2BaNATzoVprBvcDRPm%2FL2QBx3iphuY4o8yyPnzKD0lc0TYCemJyHRfmrDyF2IGvmycpuQW07oKRoShQG2Z5pJj3EMJmA88EGOqUBrpPmbc754oU7Aqgh%2FKiHvIY0H6ow662zMh1O0KbbCmtFTuXSGK9SRkieXtcWt7kSxYjweYGQK8MtV5QAyPEznA%2FDWgTq%2BznvjYlN8TjOdYdkxo%2F4UhSGEbTWAPsO7H6GvnHMzf%2BHN0M22RP8ZQusUvF1EmlHamaBrpbDHQTo9obT93DhvWfBWaY5sqyB8LOZ9LmD%2Fr5MtSDG5%2BTmEZf%2BAoYWo5v1&X-Amz-Signature=e6bd889d66aea615c84cd366edf877a957231c430b392fa6dd94a264d16e1751&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
