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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH37C2CE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHIlzwXXTVY8UkZ9bYilcrCynwuSDBc8swgrKbvZbNzuAiAxTSCiAGDmCNW2zXQo%2FSoRT6cE8QV3kgro6sGscrmxFSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM341aWI%2FCYOh0PzHIKtwDRVqnw9CJqcap6eg6N43uN2VvLZ80em1Txn2DzDjS%2FlZ%2Fx7EjV9x24HwQ3z6ndhSPCEDejTqcipo4DoLCv8VDWPG0KZWB9Q60gGLmokxYjk3UY2gl56mWcHGBxm0pLXPRwFyAu6cqEwOyk2TjvWz5Tiy6fDxEbGu6DvDOZ1yFdMHIOebO9YmxcOSLfBQ82U22FIZvxQjsfNVrQhs9OAaW5Ckm8QMpo6emIl1YQiZRcu1Zg21FZuUqHrOEe5epDD%2BNuDIYIXcQNgdBpBOYjWd9zbPqtE4DoIwEfHWxbdviczhR%2FiD%2FipNoIeXdtfMK8t55TIsReRoX0zAEHmCru%2BLEEv2nOTJgxK9DBF3iXPRzwI8WHEKZaFyoz1VkNP3Q6s5nzcMbbV3S%2B64eI93WzxFL7Q2gaUhPLc5ctdCoL9QtixYMTZfZkkDiaialZtcsqClMxsoYLM1HVgZY4bLlqHDe7dLWcK3xuTtyW2cUcqaNzkDytdZbFUyL3OCo4s9ubqe%2B5bUKDXuCEM%2Bu2CcTqluEcuOedyjBgs1X%2Fq%2FrKpXX9iaSMdCz45Xn2FbM9nI0JPe%2FEo1BAmn4OpcdUs83KdBu79ILOFzezUkFw7G9Sz6KDxX2f244%2Fpot3K1hmA4wsZaEwQY6pgG1ob59zfe1Crwi8gZU0ZzojHzlXum%2BVvwu87w601KsB%2B4kRbq%2F%2B33l8fUjxeJtSt7eIOHFNIYvdhs%2BBQwGrVp8bfvIS4bgr%2FNqoohMPZ8mlYvBjI3Cc%2BJxRAXVR1P9ATZByk6KJIWOuJzWJJOZrrDm%2B6BeGC33pSumwJoWOJObODBzF3R2kRBhaqrXGQ%2BBxx%2B9fQv5bMHPVZi5M31xtwgjbYc2fH9l&X-Amz-Signature=4360d3aa6297e14be0751a87b52d1e23b9fae482740d3a775c995de98b48fa0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH37C2CE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHIlzwXXTVY8UkZ9bYilcrCynwuSDBc8swgrKbvZbNzuAiAxTSCiAGDmCNW2zXQo%2FSoRT6cE8QV3kgro6sGscrmxFSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM341aWI%2FCYOh0PzHIKtwDRVqnw9CJqcap6eg6N43uN2VvLZ80em1Txn2DzDjS%2FlZ%2Fx7EjV9x24HwQ3z6ndhSPCEDejTqcipo4DoLCv8VDWPG0KZWB9Q60gGLmokxYjk3UY2gl56mWcHGBxm0pLXPRwFyAu6cqEwOyk2TjvWz5Tiy6fDxEbGu6DvDOZ1yFdMHIOebO9YmxcOSLfBQ82U22FIZvxQjsfNVrQhs9OAaW5Ckm8QMpo6emIl1YQiZRcu1Zg21FZuUqHrOEe5epDD%2BNuDIYIXcQNgdBpBOYjWd9zbPqtE4DoIwEfHWxbdviczhR%2FiD%2FipNoIeXdtfMK8t55TIsReRoX0zAEHmCru%2BLEEv2nOTJgxK9DBF3iXPRzwI8WHEKZaFyoz1VkNP3Q6s5nzcMbbV3S%2B64eI93WzxFL7Q2gaUhPLc5ctdCoL9QtixYMTZfZkkDiaialZtcsqClMxsoYLM1HVgZY4bLlqHDe7dLWcK3xuTtyW2cUcqaNzkDytdZbFUyL3OCo4s9ubqe%2B5bUKDXuCEM%2Bu2CcTqluEcuOedyjBgs1X%2Fq%2FrKpXX9iaSMdCz45Xn2FbM9nI0JPe%2FEo1BAmn4OpcdUs83KdBu79ILOFzezUkFw7G9Sz6KDxX2f244%2Fpot3K1hmA4wsZaEwQY6pgG1ob59zfe1Crwi8gZU0ZzojHzlXum%2BVvwu87w601KsB%2B4kRbq%2F%2B33l8fUjxeJtSt7eIOHFNIYvdhs%2BBQwGrVp8bfvIS4bgr%2FNqoohMPZ8mlYvBjI3Cc%2BJxRAXVR1P9ATZByk6KJIWOuJzWJJOZrrDm%2B6BeGC33pSumwJoWOJObODBzF3R2kRBhaqrXGQ%2BBxx%2B9fQv5bMHPVZi5M31xtwgjbYc2fH9l&X-Amz-Signature=930ef7bba12c1ac69619741ee04f3ab86c6746616dcb55fd81e6a0228ec2b161&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH37C2CE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHIlzwXXTVY8UkZ9bYilcrCynwuSDBc8swgrKbvZbNzuAiAxTSCiAGDmCNW2zXQo%2FSoRT6cE8QV3kgro6sGscrmxFSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM341aWI%2FCYOh0PzHIKtwDRVqnw9CJqcap6eg6N43uN2VvLZ80em1Txn2DzDjS%2FlZ%2Fx7EjV9x24HwQ3z6ndhSPCEDejTqcipo4DoLCv8VDWPG0KZWB9Q60gGLmokxYjk3UY2gl56mWcHGBxm0pLXPRwFyAu6cqEwOyk2TjvWz5Tiy6fDxEbGu6DvDOZ1yFdMHIOebO9YmxcOSLfBQ82U22FIZvxQjsfNVrQhs9OAaW5Ckm8QMpo6emIl1YQiZRcu1Zg21FZuUqHrOEe5epDD%2BNuDIYIXcQNgdBpBOYjWd9zbPqtE4DoIwEfHWxbdviczhR%2FiD%2FipNoIeXdtfMK8t55TIsReRoX0zAEHmCru%2BLEEv2nOTJgxK9DBF3iXPRzwI8WHEKZaFyoz1VkNP3Q6s5nzcMbbV3S%2B64eI93WzxFL7Q2gaUhPLc5ctdCoL9QtixYMTZfZkkDiaialZtcsqClMxsoYLM1HVgZY4bLlqHDe7dLWcK3xuTtyW2cUcqaNzkDytdZbFUyL3OCo4s9ubqe%2B5bUKDXuCEM%2Bu2CcTqluEcuOedyjBgs1X%2Fq%2FrKpXX9iaSMdCz45Xn2FbM9nI0JPe%2FEo1BAmn4OpcdUs83KdBu79ILOFzezUkFw7G9Sz6KDxX2f244%2Fpot3K1hmA4wsZaEwQY6pgG1ob59zfe1Crwi8gZU0ZzojHzlXum%2BVvwu87w601KsB%2B4kRbq%2F%2B33l8fUjxeJtSt7eIOHFNIYvdhs%2BBQwGrVp8bfvIS4bgr%2FNqoohMPZ8mlYvBjI3Cc%2BJxRAXVR1P9ATZByk6KJIWOuJzWJJOZrrDm%2B6BeGC33pSumwJoWOJObODBzF3R2kRBhaqrXGQ%2BBxx%2B9fQv5bMHPVZi5M31xtwgjbYc2fH9l&X-Amz-Signature=4a2b686d9effe72df863a7845427e1535b3885a65a2832819f8c62ad0a9d7db6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH37C2CE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHIlzwXXTVY8UkZ9bYilcrCynwuSDBc8swgrKbvZbNzuAiAxTSCiAGDmCNW2zXQo%2FSoRT6cE8QV3kgro6sGscrmxFSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM341aWI%2FCYOh0PzHIKtwDRVqnw9CJqcap6eg6N43uN2VvLZ80em1Txn2DzDjS%2FlZ%2Fx7EjV9x24HwQ3z6ndhSPCEDejTqcipo4DoLCv8VDWPG0KZWB9Q60gGLmokxYjk3UY2gl56mWcHGBxm0pLXPRwFyAu6cqEwOyk2TjvWz5Tiy6fDxEbGu6DvDOZ1yFdMHIOebO9YmxcOSLfBQ82U22FIZvxQjsfNVrQhs9OAaW5Ckm8QMpo6emIl1YQiZRcu1Zg21FZuUqHrOEe5epDD%2BNuDIYIXcQNgdBpBOYjWd9zbPqtE4DoIwEfHWxbdviczhR%2FiD%2FipNoIeXdtfMK8t55TIsReRoX0zAEHmCru%2BLEEv2nOTJgxK9DBF3iXPRzwI8WHEKZaFyoz1VkNP3Q6s5nzcMbbV3S%2B64eI93WzxFL7Q2gaUhPLc5ctdCoL9QtixYMTZfZkkDiaialZtcsqClMxsoYLM1HVgZY4bLlqHDe7dLWcK3xuTtyW2cUcqaNzkDytdZbFUyL3OCo4s9ubqe%2B5bUKDXuCEM%2Bu2CcTqluEcuOedyjBgs1X%2Fq%2FrKpXX9iaSMdCz45Xn2FbM9nI0JPe%2FEo1BAmn4OpcdUs83KdBu79ILOFzezUkFw7G9Sz6KDxX2f244%2Fpot3K1hmA4wsZaEwQY6pgG1ob59zfe1Crwi8gZU0ZzojHzlXum%2BVvwu87w601KsB%2B4kRbq%2F%2B33l8fUjxeJtSt7eIOHFNIYvdhs%2BBQwGrVp8bfvIS4bgr%2FNqoohMPZ8mlYvBjI3Cc%2BJxRAXVR1P9ATZByk6KJIWOuJzWJJOZrrDm%2B6BeGC33pSumwJoWOJObODBzF3R2kRBhaqrXGQ%2BBxx%2B9fQv5bMHPVZi5M31xtwgjbYc2fH9l&X-Amz-Signature=d6dfa8fd8d945eb90e0c131bd0eeabcee61fb4373c121f66410966986a1303d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH37C2CE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHIlzwXXTVY8UkZ9bYilcrCynwuSDBc8swgrKbvZbNzuAiAxTSCiAGDmCNW2zXQo%2FSoRT6cE8QV3kgro6sGscrmxFSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM341aWI%2FCYOh0PzHIKtwDRVqnw9CJqcap6eg6N43uN2VvLZ80em1Txn2DzDjS%2FlZ%2Fx7EjV9x24HwQ3z6ndhSPCEDejTqcipo4DoLCv8VDWPG0KZWB9Q60gGLmokxYjk3UY2gl56mWcHGBxm0pLXPRwFyAu6cqEwOyk2TjvWz5Tiy6fDxEbGu6DvDOZ1yFdMHIOebO9YmxcOSLfBQ82U22FIZvxQjsfNVrQhs9OAaW5Ckm8QMpo6emIl1YQiZRcu1Zg21FZuUqHrOEe5epDD%2BNuDIYIXcQNgdBpBOYjWd9zbPqtE4DoIwEfHWxbdviczhR%2FiD%2FipNoIeXdtfMK8t55TIsReRoX0zAEHmCru%2BLEEv2nOTJgxK9DBF3iXPRzwI8WHEKZaFyoz1VkNP3Q6s5nzcMbbV3S%2B64eI93WzxFL7Q2gaUhPLc5ctdCoL9QtixYMTZfZkkDiaialZtcsqClMxsoYLM1HVgZY4bLlqHDe7dLWcK3xuTtyW2cUcqaNzkDytdZbFUyL3OCo4s9ubqe%2B5bUKDXuCEM%2Bu2CcTqluEcuOedyjBgs1X%2Fq%2FrKpXX9iaSMdCz45Xn2FbM9nI0JPe%2FEo1BAmn4OpcdUs83KdBu79ILOFzezUkFw7G9Sz6KDxX2f244%2Fpot3K1hmA4wsZaEwQY6pgG1ob59zfe1Crwi8gZU0ZzojHzlXum%2BVvwu87w601KsB%2B4kRbq%2F%2B33l8fUjxeJtSt7eIOHFNIYvdhs%2BBQwGrVp8bfvIS4bgr%2FNqoohMPZ8mlYvBjI3Cc%2BJxRAXVR1P9ATZByk6KJIWOuJzWJJOZrrDm%2B6BeGC33pSumwJoWOJObODBzF3R2kRBhaqrXGQ%2BBxx%2B9fQv5bMHPVZi5M31xtwgjbYc2fH9l&X-Amz-Signature=b498dbbfa9e603e19a998bac82400ade894597da99a4432c614ecf38f45ef383&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
