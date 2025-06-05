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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JMNHXA6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICIUDlgsnMrr0CdfLtSID9IzWp5u384VjaIzGYFuD3pyAiBCUYjl%2FoJQIb4pDo4Lh%2Bf%2B0NQTcXS%2BNnpLupAWLNYVwyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMNdxi8xbAos8pjeCfKtwD4zwfQVYwym4lEFUB%2FLg%2Bc%2FutF8U0XqkXOqNFG1%2Bli9iPqZR6BiiMH4f2UWW9Qedj1wWmuusNb0v%2FP7caAX6hXjEop7pUyUZEh4v9lUOZ0YKn0Tt8anC1YeJCITTLtwxS80KGKUhy0Yo7N%2B0vWtEs4mNXNSfxPIDqsLj3J4mjdWEL9j833P66%2Brf7Gg2jO7nkb5yZboEuJVVroQ5hOP9owZP3rqTXK5BjYVQQpBa5iM1DUXqUWbuBbGjhYJfmy6WVhnoIxHkhzBIcmlv%2FdBW4Lzeq5xqt7jJTw%2BaDREQTyMmc4Y9hW9lyRk0vnettmcRsqoNJqTq2Q0vxVNw5WTW%2BBxCOCAxK7MLYdUc9QIfAbvadbGUOwpbZhUu5DHOt6e2m7IVoWJJHZnbkCBheebJBAuLLdfaspc4HrSmPr9XHRTjDUQJ975l1Sf7D9qrWTlihGu0yadqVSEwcE9n5dHN1QZYsL9o2gR%2FX6gZiHW8KxeIoXDf46WlGAjmj5HAu6ETkEc255HqDYJTEbzQSM3GztHRhMetDStNwnVVFiQVMDZQjzZJTd0lNbEvkCPfna6QReV2aMdUiGehLgXL%2Bwpqqy9PbNLBvtfuyK4Ci6dK7%2B5256ZFwUxbZwbB0bTswjuqDwgY6pgE61Nxt3x4xo0bH%2FbE%2FQYle5PYRvq1DpvWaHp3Y1JYxt78LA%2Bfwxu72JKaCvDATpcjb3tK9HnzJLcYTqIaGltZWurtt73tNGT7bp%2FvBGCKnaZe6BfmUBBVU%2FeV%2BiAPHWFFAyTtn579%2BfVzrS2X%2F45xKDxil1N%2BKHGCFXoe32JDv7o3PkJoroJL4CMhpEUWezcbBixzIDHa2hC2dL3B4Q5ZUoCNFjaYQ&X-Amz-Signature=4d91a6e619e41ba599bebeb80b4d489ceb50a5c5210cd3402a387c544c5dc28b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JMNHXA6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICIUDlgsnMrr0CdfLtSID9IzWp5u384VjaIzGYFuD3pyAiBCUYjl%2FoJQIb4pDo4Lh%2Bf%2B0NQTcXS%2BNnpLupAWLNYVwyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMNdxi8xbAos8pjeCfKtwD4zwfQVYwym4lEFUB%2FLg%2Bc%2FutF8U0XqkXOqNFG1%2Bli9iPqZR6BiiMH4f2UWW9Qedj1wWmuusNb0v%2FP7caAX6hXjEop7pUyUZEh4v9lUOZ0YKn0Tt8anC1YeJCITTLtwxS80KGKUhy0Yo7N%2B0vWtEs4mNXNSfxPIDqsLj3J4mjdWEL9j833P66%2Brf7Gg2jO7nkb5yZboEuJVVroQ5hOP9owZP3rqTXK5BjYVQQpBa5iM1DUXqUWbuBbGjhYJfmy6WVhnoIxHkhzBIcmlv%2FdBW4Lzeq5xqt7jJTw%2BaDREQTyMmc4Y9hW9lyRk0vnettmcRsqoNJqTq2Q0vxVNw5WTW%2BBxCOCAxK7MLYdUc9QIfAbvadbGUOwpbZhUu5DHOt6e2m7IVoWJJHZnbkCBheebJBAuLLdfaspc4HrSmPr9XHRTjDUQJ975l1Sf7D9qrWTlihGu0yadqVSEwcE9n5dHN1QZYsL9o2gR%2FX6gZiHW8KxeIoXDf46WlGAjmj5HAu6ETkEc255HqDYJTEbzQSM3GztHRhMetDStNwnVVFiQVMDZQjzZJTd0lNbEvkCPfna6QReV2aMdUiGehLgXL%2Bwpqqy9PbNLBvtfuyK4Ci6dK7%2B5256ZFwUxbZwbB0bTswjuqDwgY6pgE61Nxt3x4xo0bH%2FbE%2FQYle5PYRvq1DpvWaHp3Y1JYxt78LA%2Bfwxu72JKaCvDATpcjb3tK9HnzJLcYTqIaGltZWurtt73tNGT7bp%2FvBGCKnaZe6BfmUBBVU%2FeV%2BiAPHWFFAyTtn579%2BfVzrS2X%2F45xKDxil1N%2BKHGCFXoe32JDv7o3PkJoroJL4CMhpEUWezcbBixzIDHa2hC2dL3B4Q5ZUoCNFjaYQ&X-Amz-Signature=51ed3652c6b907041dd19689599cdb1bbc8c6be37c9a6ff9b5f7942d41815e3c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JMNHXA6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICIUDlgsnMrr0CdfLtSID9IzWp5u384VjaIzGYFuD3pyAiBCUYjl%2FoJQIb4pDo4Lh%2Bf%2B0NQTcXS%2BNnpLupAWLNYVwyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMNdxi8xbAos8pjeCfKtwD4zwfQVYwym4lEFUB%2FLg%2Bc%2FutF8U0XqkXOqNFG1%2Bli9iPqZR6BiiMH4f2UWW9Qedj1wWmuusNb0v%2FP7caAX6hXjEop7pUyUZEh4v9lUOZ0YKn0Tt8anC1YeJCITTLtwxS80KGKUhy0Yo7N%2B0vWtEs4mNXNSfxPIDqsLj3J4mjdWEL9j833P66%2Brf7Gg2jO7nkb5yZboEuJVVroQ5hOP9owZP3rqTXK5BjYVQQpBa5iM1DUXqUWbuBbGjhYJfmy6WVhnoIxHkhzBIcmlv%2FdBW4Lzeq5xqt7jJTw%2BaDREQTyMmc4Y9hW9lyRk0vnettmcRsqoNJqTq2Q0vxVNw5WTW%2BBxCOCAxK7MLYdUc9QIfAbvadbGUOwpbZhUu5DHOt6e2m7IVoWJJHZnbkCBheebJBAuLLdfaspc4HrSmPr9XHRTjDUQJ975l1Sf7D9qrWTlihGu0yadqVSEwcE9n5dHN1QZYsL9o2gR%2FX6gZiHW8KxeIoXDf46WlGAjmj5HAu6ETkEc255HqDYJTEbzQSM3GztHRhMetDStNwnVVFiQVMDZQjzZJTd0lNbEvkCPfna6QReV2aMdUiGehLgXL%2Bwpqqy9PbNLBvtfuyK4Ci6dK7%2B5256ZFwUxbZwbB0bTswjuqDwgY6pgE61Nxt3x4xo0bH%2FbE%2FQYle5PYRvq1DpvWaHp3Y1JYxt78LA%2Bfwxu72JKaCvDATpcjb3tK9HnzJLcYTqIaGltZWurtt73tNGT7bp%2FvBGCKnaZe6BfmUBBVU%2FeV%2BiAPHWFFAyTtn579%2BfVzrS2X%2F45xKDxil1N%2BKHGCFXoe32JDv7o3PkJoroJL4CMhpEUWezcbBixzIDHa2hC2dL3B4Q5ZUoCNFjaYQ&X-Amz-Signature=41888b54d803eb43b140d1e0980bcea84b13d57f9d195c1c7ccb791fac96f049&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JMNHXA6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICIUDlgsnMrr0CdfLtSID9IzWp5u384VjaIzGYFuD3pyAiBCUYjl%2FoJQIb4pDo4Lh%2Bf%2B0NQTcXS%2BNnpLupAWLNYVwyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMNdxi8xbAos8pjeCfKtwD4zwfQVYwym4lEFUB%2FLg%2Bc%2FutF8U0XqkXOqNFG1%2Bli9iPqZR6BiiMH4f2UWW9Qedj1wWmuusNb0v%2FP7caAX6hXjEop7pUyUZEh4v9lUOZ0YKn0Tt8anC1YeJCITTLtwxS80KGKUhy0Yo7N%2B0vWtEs4mNXNSfxPIDqsLj3J4mjdWEL9j833P66%2Brf7Gg2jO7nkb5yZboEuJVVroQ5hOP9owZP3rqTXK5BjYVQQpBa5iM1DUXqUWbuBbGjhYJfmy6WVhnoIxHkhzBIcmlv%2FdBW4Lzeq5xqt7jJTw%2BaDREQTyMmc4Y9hW9lyRk0vnettmcRsqoNJqTq2Q0vxVNw5WTW%2BBxCOCAxK7MLYdUc9QIfAbvadbGUOwpbZhUu5DHOt6e2m7IVoWJJHZnbkCBheebJBAuLLdfaspc4HrSmPr9XHRTjDUQJ975l1Sf7D9qrWTlihGu0yadqVSEwcE9n5dHN1QZYsL9o2gR%2FX6gZiHW8KxeIoXDf46WlGAjmj5HAu6ETkEc255HqDYJTEbzQSM3GztHRhMetDStNwnVVFiQVMDZQjzZJTd0lNbEvkCPfna6QReV2aMdUiGehLgXL%2Bwpqqy9PbNLBvtfuyK4Ci6dK7%2B5256ZFwUxbZwbB0bTswjuqDwgY6pgE61Nxt3x4xo0bH%2FbE%2FQYle5PYRvq1DpvWaHp3Y1JYxt78LA%2Bfwxu72JKaCvDATpcjb3tK9HnzJLcYTqIaGltZWurtt73tNGT7bp%2FvBGCKnaZe6BfmUBBVU%2FeV%2BiAPHWFFAyTtn579%2BfVzrS2X%2F45xKDxil1N%2BKHGCFXoe32JDv7o3PkJoroJL4CMhpEUWezcbBixzIDHa2hC2dL3B4Q5ZUoCNFjaYQ&X-Amz-Signature=1fed3c859bb27e8a3ffb71ee8293a6fc0c0ecba21969ac9063e40ab5268ac675&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JMNHXA6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICIUDlgsnMrr0CdfLtSID9IzWp5u384VjaIzGYFuD3pyAiBCUYjl%2FoJQIb4pDo4Lh%2Bf%2B0NQTcXS%2BNnpLupAWLNYVwyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMNdxi8xbAos8pjeCfKtwD4zwfQVYwym4lEFUB%2FLg%2Bc%2FutF8U0XqkXOqNFG1%2Bli9iPqZR6BiiMH4f2UWW9Qedj1wWmuusNb0v%2FP7caAX6hXjEop7pUyUZEh4v9lUOZ0YKn0Tt8anC1YeJCITTLtwxS80KGKUhy0Yo7N%2B0vWtEs4mNXNSfxPIDqsLj3J4mjdWEL9j833P66%2Brf7Gg2jO7nkb5yZboEuJVVroQ5hOP9owZP3rqTXK5BjYVQQpBa5iM1DUXqUWbuBbGjhYJfmy6WVhnoIxHkhzBIcmlv%2FdBW4Lzeq5xqt7jJTw%2BaDREQTyMmc4Y9hW9lyRk0vnettmcRsqoNJqTq2Q0vxVNw5WTW%2BBxCOCAxK7MLYdUc9QIfAbvadbGUOwpbZhUu5DHOt6e2m7IVoWJJHZnbkCBheebJBAuLLdfaspc4HrSmPr9XHRTjDUQJ975l1Sf7D9qrWTlihGu0yadqVSEwcE9n5dHN1QZYsL9o2gR%2FX6gZiHW8KxeIoXDf46WlGAjmj5HAu6ETkEc255HqDYJTEbzQSM3GztHRhMetDStNwnVVFiQVMDZQjzZJTd0lNbEvkCPfna6QReV2aMdUiGehLgXL%2Bwpqqy9PbNLBvtfuyK4Ci6dK7%2B5256ZFwUxbZwbB0bTswjuqDwgY6pgE61Nxt3x4xo0bH%2FbE%2FQYle5PYRvq1DpvWaHp3Y1JYxt78LA%2Bfwxu72JKaCvDATpcjb3tK9HnzJLcYTqIaGltZWurtt73tNGT7bp%2FvBGCKnaZe6BfmUBBVU%2FeV%2BiAPHWFFAyTtn579%2BfVzrS2X%2F45xKDxil1N%2BKHGCFXoe32JDv7o3PkJoroJL4CMhpEUWezcbBixzIDHa2hC2dL3B4Q5ZUoCNFjaYQ&X-Amz-Signature=de9778e9c6650fbaaac38cc8d3db1c422a3d9e37ad8a4998840d0a5bd7721c8f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
