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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GF7BAEO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCe9pP3d7DF0XvfziTFCxx5ymjnyj3D%2FeD1EpsLUPqL0QIhAOsLaWw9Q7w%2FBvZRpOhEyJFOQ0UTT0gLC%2FKBCqJD4qo4Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxPIWPuzlMJFqTRtY4q3AMDh6OD5ybiFX8pu9T2Z5UIXU4BIhDOg0JdBbqWiWIjk0xcDS7iWJZ4FMzCtrlFyZfprG0UkH%2FXyba8MCWEg%2Bb7sZNeFXNdprHp015IKBYh1huQ%2BPj5%2FzF2xHy%2F1zMqg68MJrldi5QWEuLA6mRwhPLVLQvRSgeUhStNhX15SXHBYToNkmgZ%2FUhL0v5I1Mjl48eqFWgyTxLZwZhqhyw%2B7LdQvT8%2FmfcQeLwruB1auHbvUmrM%2Fcaw6Z37vKYMxyChDrvNQuWC2YslckrGcvcFXV6iZSEWI8hunHT%2BWFYMD%2BpJ7EZNSi%2F2EUjaaZEyzpeUMVq0LBLVS7aFnqWQsuEuGoxB0PnXLd7G9xvA%2B9a4qnX4Yx3P8N%2F0hwdTMEkSeRafgjuGlH9m8HA6gN8hQuD13RFG1umoPJxXZxRv2Pz3DMgPFhTfvZ%2FQ2bhf%2BFUxpJ6QJmv4g%2BCeZe8zKggKsJhsaOvsWJ5%2F6QHyBpeM70rFhqKrTB1UvH5jdeOHrSurO5I6%2F8Q%2Bf1TTUSGwXnRhh6Vs8qLmlAZtuIkCwC4gWUt49Osry4kkkN2j6MRB%2F%2F%2FKHKFmFmtK8tinYH93TDvIfKBpNf7c%2BltbQ03axBGROECdRnyHWbfi4spLc0x00eYqzzCEtpG9BjqkAZTBdOIExW9LDG7GFq%2BqZYtoBhGmeOi02C3DJtuDMc6ryrllnwpCJqeGPeX%2F3NJyATanGGZ0x43Y0%2F%2FStdJeLWlIUhCvM8CRwj8QjGxAN2LG5sJDARnE2vW%2FHiwZEQFU8Sgm5v63CsuHNbgEE7rRyNEzeE1kw7c%2BZS9OS%2F4%2BORKvsPGQ6TA97spJqnZDUKXFYpyGoy6tmsRDGjRrOZXacy9CAWnl&X-Amz-Signature=a8edd8f1bdeb2eeaf28282843a4ca9792f43c0934db80d259805a99c05491154&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GF7BAEO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCe9pP3d7DF0XvfziTFCxx5ymjnyj3D%2FeD1EpsLUPqL0QIhAOsLaWw9Q7w%2FBvZRpOhEyJFOQ0UTT0gLC%2FKBCqJD4qo4Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxPIWPuzlMJFqTRtY4q3AMDh6OD5ybiFX8pu9T2Z5UIXU4BIhDOg0JdBbqWiWIjk0xcDS7iWJZ4FMzCtrlFyZfprG0UkH%2FXyba8MCWEg%2Bb7sZNeFXNdprHp015IKBYh1huQ%2BPj5%2FzF2xHy%2F1zMqg68MJrldi5QWEuLA6mRwhPLVLQvRSgeUhStNhX15SXHBYToNkmgZ%2FUhL0v5I1Mjl48eqFWgyTxLZwZhqhyw%2B7LdQvT8%2FmfcQeLwruB1auHbvUmrM%2Fcaw6Z37vKYMxyChDrvNQuWC2YslckrGcvcFXV6iZSEWI8hunHT%2BWFYMD%2BpJ7EZNSi%2F2EUjaaZEyzpeUMVq0LBLVS7aFnqWQsuEuGoxB0PnXLd7G9xvA%2B9a4qnX4Yx3P8N%2F0hwdTMEkSeRafgjuGlH9m8HA6gN8hQuD13RFG1umoPJxXZxRv2Pz3DMgPFhTfvZ%2FQ2bhf%2BFUxpJ6QJmv4g%2BCeZe8zKggKsJhsaOvsWJ5%2F6QHyBpeM70rFhqKrTB1UvH5jdeOHrSurO5I6%2F8Q%2Bf1TTUSGwXnRhh6Vs8qLmlAZtuIkCwC4gWUt49Osry4kkkN2j6MRB%2F%2F%2FKHKFmFmtK8tinYH93TDvIfKBpNf7c%2BltbQ03axBGROECdRnyHWbfi4spLc0x00eYqzzCEtpG9BjqkAZTBdOIExW9LDG7GFq%2BqZYtoBhGmeOi02C3DJtuDMc6ryrllnwpCJqeGPeX%2F3NJyATanGGZ0x43Y0%2F%2FStdJeLWlIUhCvM8CRwj8QjGxAN2LG5sJDARnE2vW%2FHiwZEQFU8Sgm5v63CsuHNbgEE7rRyNEzeE1kw7c%2BZS9OS%2F4%2BORKvsPGQ6TA97spJqnZDUKXFYpyGoy6tmsRDGjRrOZXacy9CAWnl&X-Amz-Signature=724554851ae4d797e42680b85ce42d3337a3132719411ac4ab7a9a43ace54e71&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GF7BAEO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCe9pP3d7DF0XvfziTFCxx5ymjnyj3D%2FeD1EpsLUPqL0QIhAOsLaWw9Q7w%2FBvZRpOhEyJFOQ0UTT0gLC%2FKBCqJD4qo4Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxPIWPuzlMJFqTRtY4q3AMDh6OD5ybiFX8pu9T2Z5UIXU4BIhDOg0JdBbqWiWIjk0xcDS7iWJZ4FMzCtrlFyZfprG0UkH%2FXyba8MCWEg%2Bb7sZNeFXNdprHp015IKBYh1huQ%2BPj5%2FzF2xHy%2F1zMqg68MJrldi5QWEuLA6mRwhPLVLQvRSgeUhStNhX15SXHBYToNkmgZ%2FUhL0v5I1Mjl48eqFWgyTxLZwZhqhyw%2B7LdQvT8%2FmfcQeLwruB1auHbvUmrM%2Fcaw6Z37vKYMxyChDrvNQuWC2YslckrGcvcFXV6iZSEWI8hunHT%2BWFYMD%2BpJ7EZNSi%2F2EUjaaZEyzpeUMVq0LBLVS7aFnqWQsuEuGoxB0PnXLd7G9xvA%2B9a4qnX4Yx3P8N%2F0hwdTMEkSeRafgjuGlH9m8HA6gN8hQuD13RFG1umoPJxXZxRv2Pz3DMgPFhTfvZ%2FQ2bhf%2BFUxpJ6QJmv4g%2BCeZe8zKggKsJhsaOvsWJ5%2F6QHyBpeM70rFhqKrTB1UvH5jdeOHrSurO5I6%2F8Q%2Bf1TTUSGwXnRhh6Vs8qLmlAZtuIkCwC4gWUt49Osry4kkkN2j6MRB%2F%2F%2FKHKFmFmtK8tinYH93TDvIfKBpNf7c%2BltbQ03axBGROECdRnyHWbfi4spLc0x00eYqzzCEtpG9BjqkAZTBdOIExW9LDG7GFq%2BqZYtoBhGmeOi02C3DJtuDMc6ryrllnwpCJqeGPeX%2F3NJyATanGGZ0x43Y0%2F%2FStdJeLWlIUhCvM8CRwj8QjGxAN2LG5sJDARnE2vW%2FHiwZEQFU8Sgm5v63CsuHNbgEE7rRyNEzeE1kw7c%2BZS9OS%2F4%2BORKvsPGQ6TA97spJqnZDUKXFYpyGoy6tmsRDGjRrOZXacy9CAWnl&X-Amz-Signature=66b3208e550b1e6255561dd12fbf949e92545e7ceea262a856e35017cd417e34&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GF7BAEO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCe9pP3d7DF0XvfziTFCxx5ymjnyj3D%2FeD1EpsLUPqL0QIhAOsLaWw9Q7w%2FBvZRpOhEyJFOQ0UTT0gLC%2FKBCqJD4qo4Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxPIWPuzlMJFqTRtY4q3AMDh6OD5ybiFX8pu9T2Z5UIXU4BIhDOg0JdBbqWiWIjk0xcDS7iWJZ4FMzCtrlFyZfprG0UkH%2FXyba8MCWEg%2Bb7sZNeFXNdprHp015IKBYh1huQ%2BPj5%2FzF2xHy%2F1zMqg68MJrldi5QWEuLA6mRwhPLVLQvRSgeUhStNhX15SXHBYToNkmgZ%2FUhL0v5I1Mjl48eqFWgyTxLZwZhqhyw%2B7LdQvT8%2FmfcQeLwruB1auHbvUmrM%2Fcaw6Z37vKYMxyChDrvNQuWC2YslckrGcvcFXV6iZSEWI8hunHT%2BWFYMD%2BpJ7EZNSi%2F2EUjaaZEyzpeUMVq0LBLVS7aFnqWQsuEuGoxB0PnXLd7G9xvA%2B9a4qnX4Yx3P8N%2F0hwdTMEkSeRafgjuGlH9m8HA6gN8hQuD13RFG1umoPJxXZxRv2Pz3DMgPFhTfvZ%2FQ2bhf%2BFUxpJ6QJmv4g%2BCeZe8zKggKsJhsaOvsWJ5%2F6QHyBpeM70rFhqKrTB1UvH5jdeOHrSurO5I6%2F8Q%2Bf1TTUSGwXnRhh6Vs8qLmlAZtuIkCwC4gWUt49Osry4kkkN2j6MRB%2F%2F%2FKHKFmFmtK8tinYH93TDvIfKBpNf7c%2BltbQ03axBGROECdRnyHWbfi4spLc0x00eYqzzCEtpG9BjqkAZTBdOIExW9LDG7GFq%2BqZYtoBhGmeOi02C3DJtuDMc6ryrllnwpCJqeGPeX%2F3NJyATanGGZ0x43Y0%2F%2FStdJeLWlIUhCvM8CRwj8QjGxAN2LG5sJDARnE2vW%2FHiwZEQFU8Sgm5v63CsuHNbgEE7rRyNEzeE1kw7c%2BZS9OS%2F4%2BORKvsPGQ6TA97spJqnZDUKXFYpyGoy6tmsRDGjRrOZXacy9CAWnl&X-Amz-Signature=0e4c6ca47775a4cda905f9e9a172b54572d443d611da9895feefd937709d1072&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GF7BAEO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCe9pP3d7DF0XvfziTFCxx5ymjnyj3D%2FeD1EpsLUPqL0QIhAOsLaWw9Q7w%2FBvZRpOhEyJFOQ0UTT0gLC%2FKBCqJD4qo4Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxPIWPuzlMJFqTRtY4q3AMDh6OD5ybiFX8pu9T2Z5UIXU4BIhDOg0JdBbqWiWIjk0xcDS7iWJZ4FMzCtrlFyZfprG0UkH%2FXyba8MCWEg%2Bb7sZNeFXNdprHp015IKBYh1huQ%2BPj5%2FzF2xHy%2F1zMqg68MJrldi5QWEuLA6mRwhPLVLQvRSgeUhStNhX15SXHBYToNkmgZ%2FUhL0v5I1Mjl48eqFWgyTxLZwZhqhyw%2B7LdQvT8%2FmfcQeLwruB1auHbvUmrM%2Fcaw6Z37vKYMxyChDrvNQuWC2YslckrGcvcFXV6iZSEWI8hunHT%2BWFYMD%2BpJ7EZNSi%2F2EUjaaZEyzpeUMVq0LBLVS7aFnqWQsuEuGoxB0PnXLd7G9xvA%2B9a4qnX4Yx3P8N%2F0hwdTMEkSeRafgjuGlH9m8HA6gN8hQuD13RFG1umoPJxXZxRv2Pz3DMgPFhTfvZ%2FQ2bhf%2BFUxpJ6QJmv4g%2BCeZe8zKggKsJhsaOvsWJ5%2F6QHyBpeM70rFhqKrTB1UvH5jdeOHrSurO5I6%2F8Q%2Bf1TTUSGwXnRhh6Vs8qLmlAZtuIkCwC4gWUt49Osry4kkkN2j6MRB%2F%2F%2FKHKFmFmtK8tinYH93TDvIfKBpNf7c%2BltbQ03axBGROECdRnyHWbfi4spLc0x00eYqzzCEtpG9BjqkAZTBdOIExW9LDG7GFq%2BqZYtoBhGmeOi02C3DJtuDMc6ryrllnwpCJqeGPeX%2F3NJyATanGGZ0x43Y0%2F%2FStdJeLWlIUhCvM8CRwj8QjGxAN2LG5sJDARnE2vW%2FHiwZEQFU8Sgm5v63CsuHNbgEE7rRyNEzeE1kw7c%2BZS9OS%2F4%2BORKvsPGQ6TA97spJqnZDUKXFYpyGoy6tmsRDGjRrOZXacy9CAWnl&X-Amz-Signature=27f102b492e7fcc761fc8c156ed924ed20e1f1776e2c8ecb6cda6612e73d5a3d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
