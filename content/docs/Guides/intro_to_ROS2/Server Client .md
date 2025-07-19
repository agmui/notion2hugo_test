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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWAMVDUV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2XaCegSD8yHDtgJcUk8tNCHbPvGLWL77PGv30foEFmwIhAIL0jSpZ4BTdNr7QgUOb5MqOuhi6NXxTgwQ6IQkwGJAUKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu6fGd5h6syND7JnIq3ANjrQZJRSWc7QhgKBcoPT2n3J%2FKx4yFRxpOCOMuHWJ5RDLSolbkKD7uzwzN22oMpROZ5hGK5svaGun%2Br%2BKVX6118DkFCrSObf4XuPK8JDBtVvqjorEaiIJAmE0BQGfLbKo0CgEDXLmQZvfsqGotPnDrIm5gBw8V7Dfvpod77KBn41QW%2BHrX4me68aurGdgY7z6tuMlJjqegZksQIt3kcEblUCIAgFvYhIRpod6G3Cz7nmLQJwDFz1sprxfpw2o9BPyX9MAQL8xQBX0%2BBSLWNkOKGOFjVoqixEt8wM7afZz2eSpf8EoSffRNPGJtj%2Bg7rTj5LS52kly45HeAS2ts4Z2rtVa16sow51MwfFyvWF1UN%2BEFbln6TpfQU7Jgw6UFgMsl2dbjLkKZ59VCnqx1JWv0%2BDi5m59DaEINqv0qY37ppCO8NsHoKJu1jXPp4nc1381XqXg6KhotkwXBRig04NtIUkeQrSdBSI9OT4YkRGmlB8BAdP%2FhtYzppJwiFndGwycGgV3hXxMLTnxUHpiujx8BAN0wfmhQTXxL0sGgpHaQ1%2FWqDQeKnLEO6bwjWNCvZIhNokiztHWDRti6bQAHawdBB4RbysQmZKLw2eoD5ThhiS12YJJyQmzHEfPm4zCO9u%2FDBjqkAapeC0XPm8%2BBjIgDK%2BwuLaTzL9jUGhG8jhJtrADjQ1CG%2FBlm%2F%2FxAeILFl%2F%2F9N0%2F1yKBrEWjIxAAbWGIANYq%2FE5uHh31S2oOuAapI%2FakXlXTMJUbTZih078%2FJpYe8EEyzxscmixqUnTkjhnkPVXrxKT%2BsQw%2F5C8LvdC0xoVnUiuLRQt9SplIHAwiqJWHk0QIdxg7vqVZ%2BLhmhfJpcraYEhoH79ZFu&X-Amz-Signature=e051662d803a6b5dfad7b53d658e2ed9b4dc69b1cbe9af973edeef6fa19fdcc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWAMVDUV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2XaCegSD8yHDtgJcUk8tNCHbPvGLWL77PGv30foEFmwIhAIL0jSpZ4BTdNr7QgUOb5MqOuhi6NXxTgwQ6IQkwGJAUKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu6fGd5h6syND7JnIq3ANjrQZJRSWc7QhgKBcoPT2n3J%2FKx4yFRxpOCOMuHWJ5RDLSolbkKD7uzwzN22oMpROZ5hGK5svaGun%2Br%2BKVX6118DkFCrSObf4XuPK8JDBtVvqjorEaiIJAmE0BQGfLbKo0CgEDXLmQZvfsqGotPnDrIm5gBw8V7Dfvpod77KBn41QW%2BHrX4me68aurGdgY7z6tuMlJjqegZksQIt3kcEblUCIAgFvYhIRpod6G3Cz7nmLQJwDFz1sprxfpw2o9BPyX9MAQL8xQBX0%2BBSLWNkOKGOFjVoqixEt8wM7afZz2eSpf8EoSffRNPGJtj%2Bg7rTj5LS52kly45HeAS2ts4Z2rtVa16sow51MwfFyvWF1UN%2BEFbln6TpfQU7Jgw6UFgMsl2dbjLkKZ59VCnqx1JWv0%2BDi5m59DaEINqv0qY37ppCO8NsHoKJu1jXPp4nc1381XqXg6KhotkwXBRig04NtIUkeQrSdBSI9OT4YkRGmlB8BAdP%2FhtYzppJwiFndGwycGgV3hXxMLTnxUHpiujx8BAN0wfmhQTXxL0sGgpHaQ1%2FWqDQeKnLEO6bwjWNCvZIhNokiztHWDRti6bQAHawdBB4RbysQmZKLw2eoD5ThhiS12YJJyQmzHEfPm4zCO9u%2FDBjqkAapeC0XPm8%2BBjIgDK%2BwuLaTzL9jUGhG8jhJtrADjQ1CG%2FBlm%2F%2FxAeILFl%2F%2F9N0%2F1yKBrEWjIxAAbWGIANYq%2FE5uHh31S2oOuAapI%2FakXlXTMJUbTZih078%2FJpYe8EEyzxscmixqUnTkjhnkPVXrxKT%2BsQw%2F5C8LvdC0xoVnUiuLRQt9SplIHAwiqJWHk0QIdxg7vqVZ%2BLhmhfJpcraYEhoH79ZFu&X-Amz-Signature=676d44a91ba9ebe52be066b10abb4466b3a5acb15c22aa87609c00c50f49abd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWAMVDUV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2XaCegSD8yHDtgJcUk8tNCHbPvGLWL77PGv30foEFmwIhAIL0jSpZ4BTdNr7QgUOb5MqOuhi6NXxTgwQ6IQkwGJAUKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu6fGd5h6syND7JnIq3ANjrQZJRSWc7QhgKBcoPT2n3J%2FKx4yFRxpOCOMuHWJ5RDLSolbkKD7uzwzN22oMpROZ5hGK5svaGun%2Br%2BKVX6118DkFCrSObf4XuPK8JDBtVvqjorEaiIJAmE0BQGfLbKo0CgEDXLmQZvfsqGotPnDrIm5gBw8V7Dfvpod77KBn41QW%2BHrX4me68aurGdgY7z6tuMlJjqegZksQIt3kcEblUCIAgFvYhIRpod6G3Cz7nmLQJwDFz1sprxfpw2o9BPyX9MAQL8xQBX0%2BBSLWNkOKGOFjVoqixEt8wM7afZz2eSpf8EoSffRNPGJtj%2Bg7rTj5LS52kly45HeAS2ts4Z2rtVa16sow51MwfFyvWF1UN%2BEFbln6TpfQU7Jgw6UFgMsl2dbjLkKZ59VCnqx1JWv0%2BDi5m59DaEINqv0qY37ppCO8NsHoKJu1jXPp4nc1381XqXg6KhotkwXBRig04NtIUkeQrSdBSI9OT4YkRGmlB8BAdP%2FhtYzppJwiFndGwycGgV3hXxMLTnxUHpiujx8BAN0wfmhQTXxL0sGgpHaQ1%2FWqDQeKnLEO6bwjWNCvZIhNokiztHWDRti6bQAHawdBB4RbysQmZKLw2eoD5ThhiS12YJJyQmzHEfPm4zCO9u%2FDBjqkAapeC0XPm8%2BBjIgDK%2BwuLaTzL9jUGhG8jhJtrADjQ1CG%2FBlm%2F%2FxAeILFl%2F%2F9N0%2F1yKBrEWjIxAAbWGIANYq%2FE5uHh31S2oOuAapI%2FakXlXTMJUbTZih078%2FJpYe8EEyzxscmixqUnTkjhnkPVXrxKT%2BsQw%2F5C8LvdC0xoVnUiuLRQt9SplIHAwiqJWHk0QIdxg7vqVZ%2BLhmhfJpcraYEhoH79ZFu&X-Amz-Signature=19b36eb9a4b4f8bd1d56b327065af1e71061051a6077650ab0f59c8eeadeca98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWAMVDUV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2XaCegSD8yHDtgJcUk8tNCHbPvGLWL77PGv30foEFmwIhAIL0jSpZ4BTdNr7QgUOb5MqOuhi6NXxTgwQ6IQkwGJAUKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu6fGd5h6syND7JnIq3ANjrQZJRSWc7QhgKBcoPT2n3J%2FKx4yFRxpOCOMuHWJ5RDLSolbkKD7uzwzN22oMpROZ5hGK5svaGun%2Br%2BKVX6118DkFCrSObf4XuPK8JDBtVvqjorEaiIJAmE0BQGfLbKo0CgEDXLmQZvfsqGotPnDrIm5gBw8V7Dfvpod77KBn41QW%2BHrX4me68aurGdgY7z6tuMlJjqegZksQIt3kcEblUCIAgFvYhIRpod6G3Cz7nmLQJwDFz1sprxfpw2o9BPyX9MAQL8xQBX0%2BBSLWNkOKGOFjVoqixEt8wM7afZz2eSpf8EoSffRNPGJtj%2Bg7rTj5LS52kly45HeAS2ts4Z2rtVa16sow51MwfFyvWF1UN%2BEFbln6TpfQU7Jgw6UFgMsl2dbjLkKZ59VCnqx1JWv0%2BDi5m59DaEINqv0qY37ppCO8NsHoKJu1jXPp4nc1381XqXg6KhotkwXBRig04NtIUkeQrSdBSI9OT4YkRGmlB8BAdP%2FhtYzppJwiFndGwycGgV3hXxMLTnxUHpiujx8BAN0wfmhQTXxL0sGgpHaQ1%2FWqDQeKnLEO6bwjWNCvZIhNokiztHWDRti6bQAHawdBB4RbysQmZKLw2eoD5ThhiS12YJJyQmzHEfPm4zCO9u%2FDBjqkAapeC0XPm8%2BBjIgDK%2BwuLaTzL9jUGhG8jhJtrADjQ1CG%2FBlm%2F%2FxAeILFl%2F%2F9N0%2F1yKBrEWjIxAAbWGIANYq%2FE5uHh31S2oOuAapI%2FakXlXTMJUbTZih078%2FJpYe8EEyzxscmixqUnTkjhnkPVXrxKT%2BsQw%2F5C8LvdC0xoVnUiuLRQt9SplIHAwiqJWHk0QIdxg7vqVZ%2BLhmhfJpcraYEhoH79ZFu&X-Amz-Signature=bf9543777076e9c444c7cbea655496de0984fa080b8f5d2a841a7b233c4d2665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWAMVDUV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2XaCegSD8yHDtgJcUk8tNCHbPvGLWL77PGv30foEFmwIhAIL0jSpZ4BTdNr7QgUOb5MqOuhi6NXxTgwQ6IQkwGJAUKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu6fGd5h6syND7JnIq3ANjrQZJRSWc7QhgKBcoPT2n3J%2FKx4yFRxpOCOMuHWJ5RDLSolbkKD7uzwzN22oMpROZ5hGK5svaGun%2Br%2BKVX6118DkFCrSObf4XuPK8JDBtVvqjorEaiIJAmE0BQGfLbKo0CgEDXLmQZvfsqGotPnDrIm5gBw8V7Dfvpod77KBn41QW%2BHrX4me68aurGdgY7z6tuMlJjqegZksQIt3kcEblUCIAgFvYhIRpod6G3Cz7nmLQJwDFz1sprxfpw2o9BPyX9MAQL8xQBX0%2BBSLWNkOKGOFjVoqixEt8wM7afZz2eSpf8EoSffRNPGJtj%2Bg7rTj5LS52kly45HeAS2ts4Z2rtVa16sow51MwfFyvWF1UN%2BEFbln6TpfQU7Jgw6UFgMsl2dbjLkKZ59VCnqx1JWv0%2BDi5m59DaEINqv0qY37ppCO8NsHoKJu1jXPp4nc1381XqXg6KhotkwXBRig04NtIUkeQrSdBSI9OT4YkRGmlB8BAdP%2FhtYzppJwiFndGwycGgV3hXxMLTnxUHpiujx8BAN0wfmhQTXxL0sGgpHaQ1%2FWqDQeKnLEO6bwjWNCvZIhNokiztHWDRti6bQAHawdBB4RbysQmZKLw2eoD5ThhiS12YJJyQmzHEfPm4zCO9u%2FDBjqkAapeC0XPm8%2BBjIgDK%2BwuLaTzL9jUGhG8jhJtrADjQ1CG%2FBlm%2F%2FxAeILFl%2F%2F9N0%2F1yKBrEWjIxAAbWGIANYq%2FE5uHh31S2oOuAapI%2FakXlXTMJUbTZih078%2FJpYe8EEyzxscmixqUnTkjhnkPVXrxKT%2BsQw%2F5C8LvdC0xoVnUiuLRQt9SplIHAwiqJWHk0QIdxg7vqVZ%2BLhmhfJpcraYEhoH79ZFu&X-Amz-Signature=d88b6b5c40e5ae37154b9c5afa1e8078974d6b4bf34eb485f47cf4122e3eebde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
