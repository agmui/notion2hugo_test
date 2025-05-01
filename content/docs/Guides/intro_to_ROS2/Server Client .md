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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYXXRWIY%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICsN6rHAWQ5rg2U3OuE%2FLzMbCSJuo19wCTx%2FGfy7ocR8AiAfb5UBxXR8tzwb11vL5XXV%2BPsL%2FALOGF5Yweol9VH4SiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2SzwI5%2BfRSbSHeY4KtwD8f%2Byg7OiPmMwZKntYJ4%2BugFA0hHTj7PT%2FoK1IyDD%2FHCEWn%2BOHUUg2Kj8xim1kCpGEHFi2KaaugKUvk8DtZ%2B0D%2Fz2f6YsmBBxCA6JNdUy6LyRAyGxyUEQM56kVuXfj%2BLUru7zfYnCrKjEzuHuC50DToBQvrNmosWX1P7zq%2FEko0FQgAyA9eg6rX9mCmbX%2F000brjTD6%2FbtiP2u2ZS4FyZ73x3j9LOJcb7dE6nbQaEpB54qj%2BXweitXI1tThXXBwzlF7XTMoRiczpm%2BTZd24XYVdKNmtyBJhUZG2FEj6ckrSz3RENsZ%2FdXAe6HOLLLqBXRuyLDruu9OhsPMs69zYo0DAvfeUhcEfpm2E7RevSwvZsV9uFBsu10piXhHQ4Y26Ee4IZWr5bi0anSycTm3hYapD1WOidbijA%2FvRD52qgZFjLNAX8AVy0gH4IdpYmqQfaYPhin6BWX%2BkDYLvB1vTDIyHh7B3lWbeDVyGcTjF4%2BWg4zZthjbNeJzkoYUfKUClW3K%2Fga4vO3MCY6eXeGP9fw%2F9O2iSTNx9mRIeo1qRNwb%2Bk70KuyYCexmtex5BeU9dEUM00s0gMZBeEsg6BzrxXlE7E%2FeMuNHmE3vFZueylpT74OfItDH4XOrWCYFSMwuZTMwAY6pgFo6DL6D7Gw8pT7%2Fc2TeY%2FmelhQMVjKfLnjk0%2F54ytFhW26FAlVrV6m%2FRDW%2FSsfd76N9B%2F95BbYCJQC6VeKwXp8ADHVVIZXQBAxnv2y290THsGlS2GhcL9ir46nZk0hQ%2FJMBGXngPt43L9tIpMq608NzM%2BntZdI7oXdVBa70hkWclkpU2%2BgT7IiNNgozUBkyYzUQ%2BFdVHaQK5KWxpbvW%2BBtyHQ%2F2Kg8&X-Amz-Signature=68d9c62c09d7bf15378acf1bf67fd2c9ac26bb05c5614477217cb98613f2355d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYXXRWIY%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICsN6rHAWQ5rg2U3OuE%2FLzMbCSJuo19wCTx%2FGfy7ocR8AiAfb5UBxXR8tzwb11vL5XXV%2BPsL%2FALOGF5Yweol9VH4SiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2SzwI5%2BfRSbSHeY4KtwD8f%2Byg7OiPmMwZKntYJ4%2BugFA0hHTj7PT%2FoK1IyDD%2FHCEWn%2BOHUUg2Kj8xim1kCpGEHFi2KaaugKUvk8DtZ%2B0D%2Fz2f6YsmBBxCA6JNdUy6LyRAyGxyUEQM56kVuXfj%2BLUru7zfYnCrKjEzuHuC50DToBQvrNmosWX1P7zq%2FEko0FQgAyA9eg6rX9mCmbX%2F000brjTD6%2FbtiP2u2ZS4FyZ73x3j9LOJcb7dE6nbQaEpB54qj%2BXweitXI1tThXXBwzlF7XTMoRiczpm%2BTZd24XYVdKNmtyBJhUZG2FEj6ckrSz3RENsZ%2FdXAe6HOLLLqBXRuyLDruu9OhsPMs69zYo0DAvfeUhcEfpm2E7RevSwvZsV9uFBsu10piXhHQ4Y26Ee4IZWr5bi0anSycTm3hYapD1WOidbijA%2FvRD52qgZFjLNAX8AVy0gH4IdpYmqQfaYPhin6BWX%2BkDYLvB1vTDIyHh7B3lWbeDVyGcTjF4%2BWg4zZthjbNeJzkoYUfKUClW3K%2Fga4vO3MCY6eXeGP9fw%2F9O2iSTNx9mRIeo1qRNwb%2Bk70KuyYCexmtex5BeU9dEUM00s0gMZBeEsg6BzrxXlE7E%2FeMuNHmE3vFZueylpT74OfItDH4XOrWCYFSMwuZTMwAY6pgFo6DL6D7Gw8pT7%2Fc2TeY%2FmelhQMVjKfLnjk0%2F54ytFhW26FAlVrV6m%2FRDW%2FSsfd76N9B%2F95BbYCJQC6VeKwXp8ADHVVIZXQBAxnv2y290THsGlS2GhcL9ir46nZk0hQ%2FJMBGXngPt43L9tIpMq608NzM%2BntZdI7oXdVBa70hkWclkpU2%2BgT7IiNNgozUBkyYzUQ%2BFdVHaQK5KWxpbvW%2BBtyHQ%2F2Kg8&X-Amz-Signature=213b648110b4f8c061696d9153735ba0489fc0b53a1ede268ce28fa5c11ee754&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYXXRWIY%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICsN6rHAWQ5rg2U3OuE%2FLzMbCSJuo19wCTx%2FGfy7ocR8AiAfb5UBxXR8tzwb11vL5XXV%2BPsL%2FALOGF5Yweol9VH4SiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2SzwI5%2BfRSbSHeY4KtwD8f%2Byg7OiPmMwZKntYJ4%2BugFA0hHTj7PT%2FoK1IyDD%2FHCEWn%2BOHUUg2Kj8xim1kCpGEHFi2KaaugKUvk8DtZ%2B0D%2Fz2f6YsmBBxCA6JNdUy6LyRAyGxyUEQM56kVuXfj%2BLUru7zfYnCrKjEzuHuC50DToBQvrNmosWX1P7zq%2FEko0FQgAyA9eg6rX9mCmbX%2F000brjTD6%2FbtiP2u2ZS4FyZ73x3j9LOJcb7dE6nbQaEpB54qj%2BXweitXI1tThXXBwzlF7XTMoRiczpm%2BTZd24XYVdKNmtyBJhUZG2FEj6ckrSz3RENsZ%2FdXAe6HOLLLqBXRuyLDruu9OhsPMs69zYo0DAvfeUhcEfpm2E7RevSwvZsV9uFBsu10piXhHQ4Y26Ee4IZWr5bi0anSycTm3hYapD1WOidbijA%2FvRD52qgZFjLNAX8AVy0gH4IdpYmqQfaYPhin6BWX%2BkDYLvB1vTDIyHh7B3lWbeDVyGcTjF4%2BWg4zZthjbNeJzkoYUfKUClW3K%2Fga4vO3MCY6eXeGP9fw%2F9O2iSTNx9mRIeo1qRNwb%2Bk70KuyYCexmtex5BeU9dEUM00s0gMZBeEsg6BzrxXlE7E%2FeMuNHmE3vFZueylpT74OfItDH4XOrWCYFSMwuZTMwAY6pgFo6DL6D7Gw8pT7%2Fc2TeY%2FmelhQMVjKfLnjk0%2F54ytFhW26FAlVrV6m%2FRDW%2FSsfd76N9B%2F95BbYCJQC6VeKwXp8ADHVVIZXQBAxnv2y290THsGlS2GhcL9ir46nZk0hQ%2FJMBGXngPt43L9tIpMq608NzM%2BntZdI7oXdVBa70hkWclkpU2%2BgT7IiNNgozUBkyYzUQ%2BFdVHaQK5KWxpbvW%2BBtyHQ%2F2Kg8&X-Amz-Signature=4f19e12ae8aa7cdd2210b8f5e9f4e3de8737c05602214c3103636a57acbe8085&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYXXRWIY%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICsN6rHAWQ5rg2U3OuE%2FLzMbCSJuo19wCTx%2FGfy7ocR8AiAfb5UBxXR8tzwb11vL5XXV%2BPsL%2FALOGF5Yweol9VH4SiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2SzwI5%2BfRSbSHeY4KtwD8f%2Byg7OiPmMwZKntYJ4%2BugFA0hHTj7PT%2FoK1IyDD%2FHCEWn%2BOHUUg2Kj8xim1kCpGEHFi2KaaugKUvk8DtZ%2B0D%2Fz2f6YsmBBxCA6JNdUy6LyRAyGxyUEQM56kVuXfj%2BLUru7zfYnCrKjEzuHuC50DToBQvrNmosWX1P7zq%2FEko0FQgAyA9eg6rX9mCmbX%2F000brjTD6%2FbtiP2u2ZS4FyZ73x3j9LOJcb7dE6nbQaEpB54qj%2BXweitXI1tThXXBwzlF7XTMoRiczpm%2BTZd24XYVdKNmtyBJhUZG2FEj6ckrSz3RENsZ%2FdXAe6HOLLLqBXRuyLDruu9OhsPMs69zYo0DAvfeUhcEfpm2E7RevSwvZsV9uFBsu10piXhHQ4Y26Ee4IZWr5bi0anSycTm3hYapD1WOidbijA%2FvRD52qgZFjLNAX8AVy0gH4IdpYmqQfaYPhin6BWX%2BkDYLvB1vTDIyHh7B3lWbeDVyGcTjF4%2BWg4zZthjbNeJzkoYUfKUClW3K%2Fga4vO3MCY6eXeGP9fw%2F9O2iSTNx9mRIeo1qRNwb%2Bk70KuyYCexmtex5BeU9dEUM00s0gMZBeEsg6BzrxXlE7E%2FeMuNHmE3vFZueylpT74OfItDH4XOrWCYFSMwuZTMwAY6pgFo6DL6D7Gw8pT7%2Fc2TeY%2FmelhQMVjKfLnjk0%2F54ytFhW26FAlVrV6m%2FRDW%2FSsfd76N9B%2F95BbYCJQC6VeKwXp8ADHVVIZXQBAxnv2y290THsGlS2GhcL9ir46nZk0hQ%2FJMBGXngPt43L9tIpMq608NzM%2BntZdI7oXdVBa70hkWclkpU2%2BgT7IiNNgozUBkyYzUQ%2BFdVHaQK5KWxpbvW%2BBtyHQ%2F2Kg8&X-Amz-Signature=a40bc7ff9e4e6186962f75f9ffd7f8ca3c5a2629f63b9807f079c13e2be94b44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYXXRWIY%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICsN6rHAWQ5rg2U3OuE%2FLzMbCSJuo19wCTx%2FGfy7ocR8AiAfb5UBxXR8tzwb11vL5XXV%2BPsL%2FALOGF5Yweol9VH4SiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2SzwI5%2BfRSbSHeY4KtwD8f%2Byg7OiPmMwZKntYJ4%2BugFA0hHTj7PT%2FoK1IyDD%2FHCEWn%2BOHUUg2Kj8xim1kCpGEHFi2KaaugKUvk8DtZ%2B0D%2Fz2f6YsmBBxCA6JNdUy6LyRAyGxyUEQM56kVuXfj%2BLUru7zfYnCrKjEzuHuC50DToBQvrNmosWX1P7zq%2FEko0FQgAyA9eg6rX9mCmbX%2F000brjTD6%2FbtiP2u2ZS4FyZ73x3j9LOJcb7dE6nbQaEpB54qj%2BXweitXI1tThXXBwzlF7XTMoRiczpm%2BTZd24XYVdKNmtyBJhUZG2FEj6ckrSz3RENsZ%2FdXAe6HOLLLqBXRuyLDruu9OhsPMs69zYo0DAvfeUhcEfpm2E7RevSwvZsV9uFBsu10piXhHQ4Y26Ee4IZWr5bi0anSycTm3hYapD1WOidbijA%2FvRD52qgZFjLNAX8AVy0gH4IdpYmqQfaYPhin6BWX%2BkDYLvB1vTDIyHh7B3lWbeDVyGcTjF4%2BWg4zZthjbNeJzkoYUfKUClW3K%2Fga4vO3MCY6eXeGP9fw%2F9O2iSTNx9mRIeo1qRNwb%2Bk70KuyYCexmtex5BeU9dEUM00s0gMZBeEsg6BzrxXlE7E%2FeMuNHmE3vFZueylpT74OfItDH4XOrWCYFSMwuZTMwAY6pgFo6DL6D7Gw8pT7%2Fc2TeY%2FmelhQMVjKfLnjk0%2F54ytFhW26FAlVrV6m%2FRDW%2FSsfd76N9B%2F95BbYCJQC6VeKwXp8ADHVVIZXQBAxnv2y290THsGlS2GhcL9ir46nZk0hQ%2FJMBGXngPt43L9tIpMq608NzM%2BntZdI7oXdVBa70hkWclkpU2%2BgT7IiNNgozUBkyYzUQ%2BFdVHaQK5KWxpbvW%2BBtyHQ%2F2Kg8&X-Amz-Signature=1764d1042c7107731728b8c04a17f48434eca2544386b997a409e5c523d9bacd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
