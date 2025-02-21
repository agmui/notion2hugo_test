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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQU4ZK2%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlO8uL%2Fp10t0jwo1CDPfL5jRJ32LkakJXu2fXDZykHrAiEAwKRg3R4SJX9YGJF5seMJtuR%2B5sFHh4N9EFOIu4orcFoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIR5Q3UnlBr5FfAjCrcA%2B9ChFabjm8VVRE69Pa%2BL58y49FgtkBOS5LXxYvjL5HMnuDTufO0QPWPnzFGDkbPaYUReI2zsrxp4q11LjuWYEnqWC3iJxJWwlbx5IVOaa5FcKIBnF6gv8x1XJWrj1SuORKmB3YImzbnviA6IGxNb50VQfbCR8A54RbqYqaw31Ywxfdnh4lRXUeF2fYUTdY%2BH2Ryn1YEEfig33Rw2WpJz0Ai9a0fflZ0vnSOGBZU0tXFJlOo%2FYleXXOcQV%2FQ6o4iVF%2Bob1Fm36xueslcsrUm5acb9ZzS8kmnTcgKm8N5n9pVayGtM%2B5wgedFfO1kai0X9li9UJYpXJYB6xjgRq6U4w9eayZ8xLmeUAD4XI3dJHJPZG8MfHS%2FJXK%2FAJEy8Zn2zMjx2%2FiV2bJbGO5A0kh%2FDAuLQ147BYEYEhpaJ7yI%2FUB%2F4toBXA1HyBKwhhMv2qd1p%2B5AKeDJq7OgA%2BriL3M1UbGKZm8JNmJ7BoeYwqauhc0shIEyPfIXyVoazpsYfwcrpyDuQa3UtX3wVY97pzrmpCCcn1DsDcn41L9GNBvY8oZj4KznsceELP0cY%2B6xqNhzjPIbzhptPDJqXy2X3xbu8KWrK8Lc%2BimmEtYs0wj91QVy9NuKP02oLA25KBjhMOSC4r0GOqUBXnXO9D0eoq1FeOqfLPmwXsKtrICIdQVteZ5Mcykm3%2BXdjHTAjFc6MhdQYcr7kI8YHWXQ849y3015Ca%2BU%2Fk6hkKue%2Fps6Tzslhxo1l434o6H8w1q2nFo8t%2FN0VErBNTig2duq0Kvnn6wU3JtdEAs5T7WoSxqWvkwFoIpG19sNQ5cR%2FaobVNH1B7dLAs6ypziM8pr8Rswl3Hn%2BarAWOjmdewzWxGjO&X-Amz-Signature=3146e5b5dbe970fa693c0ae86dc803f8c65f39f7e430be8352ba6a4801785e56&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQU4ZK2%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlO8uL%2Fp10t0jwo1CDPfL5jRJ32LkakJXu2fXDZykHrAiEAwKRg3R4SJX9YGJF5seMJtuR%2B5sFHh4N9EFOIu4orcFoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIR5Q3UnlBr5FfAjCrcA%2B9ChFabjm8VVRE69Pa%2BL58y49FgtkBOS5LXxYvjL5HMnuDTufO0QPWPnzFGDkbPaYUReI2zsrxp4q11LjuWYEnqWC3iJxJWwlbx5IVOaa5FcKIBnF6gv8x1XJWrj1SuORKmB3YImzbnviA6IGxNb50VQfbCR8A54RbqYqaw31Ywxfdnh4lRXUeF2fYUTdY%2BH2Ryn1YEEfig33Rw2WpJz0Ai9a0fflZ0vnSOGBZU0tXFJlOo%2FYleXXOcQV%2FQ6o4iVF%2Bob1Fm36xueslcsrUm5acb9ZzS8kmnTcgKm8N5n9pVayGtM%2B5wgedFfO1kai0X9li9UJYpXJYB6xjgRq6U4w9eayZ8xLmeUAD4XI3dJHJPZG8MfHS%2FJXK%2FAJEy8Zn2zMjx2%2FiV2bJbGO5A0kh%2FDAuLQ147BYEYEhpaJ7yI%2FUB%2F4toBXA1HyBKwhhMv2qd1p%2B5AKeDJq7OgA%2BriL3M1UbGKZm8JNmJ7BoeYwqauhc0shIEyPfIXyVoazpsYfwcrpyDuQa3UtX3wVY97pzrmpCCcn1DsDcn41L9GNBvY8oZj4KznsceELP0cY%2B6xqNhzjPIbzhptPDJqXy2X3xbu8KWrK8Lc%2BimmEtYs0wj91QVy9NuKP02oLA25KBjhMOSC4r0GOqUBXnXO9D0eoq1FeOqfLPmwXsKtrICIdQVteZ5Mcykm3%2BXdjHTAjFc6MhdQYcr7kI8YHWXQ849y3015Ca%2BU%2Fk6hkKue%2Fps6Tzslhxo1l434o6H8w1q2nFo8t%2FN0VErBNTig2duq0Kvnn6wU3JtdEAs5T7WoSxqWvkwFoIpG19sNQ5cR%2FaobVNH1B7dLAs6ypziM8pr8Rswl3Hn%2BarAWOjmdewzWxGjO&X-Amz-Signature=d84965542bea69062eeecc0a0fead5e90b8ad0134f4b1cd9abf4a8c1e8589fa2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQU4ZK2%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlO8uL%2Fp10t0jwo1CDPfL5jRJ32LkakJXu2fXDZykHrAiEAwKRg3R4SJX9YGJF5seMJtuR%2B5sFHh4N9EFOIu4orcFoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIR5Q3UnlBr5FfAjCrcA%2B9ChFabjm8VVRE69Pa%2BL58y49FgtkBOS5LXxYvjL5HMnuDTufO0QPWPnzFGDkbPaYUReI2zsrxp4q11LjuWYEnqWC3iJxJWwlbx5IVOaa5FcKIBnF6gv8x1XJWrj1SuORKmB3YImzbnviA6IGxNb50VQfbCR8A54RbqYqaw31Ywxfdnh4lRXUeF2fYUTdY%2BH2Ryn1YEEfig33Rw2WpJz0Ai9a0fflZ0vnSOGBZU0tXFJlOo%2FYleXXOcQV%2FQ6o4iVF%2Bob1Fm36xueslcsrUm5acb9ZzS8kmnTcgKm8N5n9pVayGtM%2B5wgedFfO1kai0X9li9UJYpXJYB6xjgRq6U4w9eayZ8xLmeUAD4XI3dJHJPZG8MfHS%2FJXK%2FAJEy8Zn2zMjx2%2FiV2bJbGO5A0kh%2FDAuLQ147BYEYEhpaJ7yI%2FUB%2F4toBXA1HyBKwhhMv2qd1p%2B5AKeDJq7OgA%2BriL3M1UbGKZm8JNmJ7BoeYwqauhc0shIEyPfIXyVoazpsYfwcrpyDuQa3UtX3wVY97pzrmpCCcn1DsDcn41L9GNBvY8oZj4KznsceELP0cY%2B6xqNhzjPIbzhptPDJqXy2X3xbu8KWrK8Lc%2BimmEtYs0wj91QVy9NuKP02oLA25KBjhMOSC4r0GOqUBXnXO9D0eoq1FeOqfLPmwXsKtrICIdQVteZ5Mcykm3%2BXdjHTAjFc6MhdQYcr7kI8YHWXQ849y3015Ca%2BU%2Fk6hkKue%2Fps6Tzslhxo1l434o6H8w1q2nFo8t%2FN0VErBNTig2duq0Kvnn6wU3JtdEAs5T7WoSxqWvkwFoIpG19sNQ5cR%2FaobVNH1B7dLAs6ypziM8pr8Rswl3Hn%2BarAWOjmdewzWxGjO&X-Amz-Signature=91f1e74e24ae1374b4f4aecdb53a5d6fd9867ce5bce9f2a8114fd1ac8115994f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQU4ZK2%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlO8uL%2Fp10t0jwo1CDPfL5jRJ32LkakJXu2fXDZykHrAiEAwKRg3R4SJX9YGJF5seMJtuR%2B5sFHh4N9EFOIu4orcFoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIR5Q3UnlBr5FfAjCrcA%2B9ChFabjm8VVRE69Pa%2BL58y49FgtkBOS5LXxYvjL5HMnuDTufO0QPWPnzFGDkbPaYUReI2zsrxp4q11LjuWYEnqWC3iJxJWwlbx5IVOaa5FcKIBnF6gv8x1XJWrj1SuORKmB3YImzbnviA6IGxNb50VQfbCR8A54RbqYqaw31Ywxfdnh4lRXUeF2fYUTdY%2BH2Ryn1YEEfig33Rw2WpJz0Ai9a0fflZ0vnSOGBZU0tXFJlOo%2FYleXXOcQV%2FQ6o4iVF%2Bob1Fm36xueslcsrUm5acb9ZzS8kmnTcgKm8N5n9pVayGtM%2B5wgedFfO1kai0X9li9UJYpXJYB6xjgRq6U4w9eayZ8xLmeUAD4XI3dJHJPZG8MfHS%2FJXK%2FAJEy8Zn2zMjx2%2FiV2bJbGO5A0kh%2FDAuLQ147BYEYEhpaJ7yI%2FUB%2F4toBXA1HyBKwhhMv2qd1p%2B5AKeDJq7OgA%2BriL3M1UbGKZm8JNmJ7BoeYwqauhc0shIEyPfIXyVoazpsYfwcrpyDuQa3UtX3wVY97pzrmpCCcn1DsDcn41L9GNBvY8oZj4KznsceELP0cY%2B6xqNhzjPIbzhptPDJqXy2X3xbu8KWrK8Lc%2BimmEtYs0wj91QVy9NuKP02oLA25KBjhMOSC4r0GOqUBXnXO9D0eoq1FeOqfLPmwXsKtrICIdQVteZ5Mcykm3%2BXdjHTAjFc6MhdQYcr7kI8YHWXQ849y3015Ca%2BU%2Fk6hkKue%2Fps6Tzslhxo1l434o6H8w1q2nFo8t%2FN0VErBNTig2duq0Kvnn6wU3JtdEAs5T7WoSxqWvkwFoIpG19sNQ5cR%2FaobVNH1B7dLAs6ypziM8pr8Rswl3Hn%2BarAWOjmdewzWxGjO&X-Amz-Signature=de045f5165eb857125a65b045835524e8e06f89a11dfee69b44beb1ea62c0735&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQU4ZK2%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlO8uL%2Fp10t0jwo1CDPfL5jRJ32LkakJXu2fXDZykHrAiEAwKRg3R4SJX9YGJF5seMJtuR%2B5sFHh4N9EFOIu4orcFoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIR5Q3UnlBr5FfAjCrcA%2B9ChFabjm8VVRE69Pa%2BL58y49FgtkBOS5LXxYvjL5HMnuDTufO0QPWPnzFGDkbPaYUReI2zsrxp4q11LjuWYEnqWC3iJxJWwlbx5IVOaa5FcKIBnF6gv8x1XJWrj1SuORKmB3YImzbnviA6IGxNb50VQfbCR8A54RbqYqaw31Ywxfdnh4lRXUeF2fYUTdY%2BH2Ryn1YEEfig33Rw2WpJz0Ai9a0fflZ0vnSOGBZU0tXFJlOo%2FYleXXOcQV%2FQ6o4iVF%2Bob1Fm36xueslcsrUm5acb9ZzS8kmnTcgKm8N5n9pVayGtM%2B5wgedFfO1kai0X9li9UJYpXJYB6xjgRq6U4w9eayZ8xLmeUAD4XI3dJHJPZG8MfHS%2FJXK%2FAJEy8Zn2zMjx2%2FiV2bJbGO5A0kh%2FDAuLQ147BYEYEhpaJ7yI%2FUB%2F4toBXA1HyBKwhhMv2qd1p%2B5AKeDJq7OgA%2BriL3M1UbGKZm8JNmJ7BoeYwqauhc0shIEyPfIXyVoazpsYfwcrpyDuQa3UtX3wVY97pzrmpCCcn1DsDcn41L9GNBvY8oZj4KznsceELP0cY%2B6xqNhzjPIbzhptPDJqXy2X3xbu8KWrK8Lc%2BimmEtYs0wj91QVy9NuKP02oLA25KBjhMOSC4r0GOqUBXnXO9D0eoq1FeOqfLPmwXsKtrICIdQVteZ5Mcykm3%2BXdjHTAjFc6MhdQYcr7kI8YHWXQ849y3015Ca%2BU%2Fk6hkKue%2Fps6Tzslhxo1l434o6H8w1q2nFo8t%2FN0VErBNTig2duq0Kvnn6wU3JtdEAs5T7WoSxqWvkwFoIpG19sNQ5cR%2FaobVNH1B7dLAs6ypziM8pr8Rswl3Hn%2BarAWOjmdewzWxGjO&X-Amz-Signature=2dc9a1af2a5979b93f40de78b2b8ffb2db49fa505aca433e212c6f4a050a5743&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
