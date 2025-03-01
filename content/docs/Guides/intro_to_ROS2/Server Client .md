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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO666G3E%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEsNcZeq1cJehcy5PmKKiAQMnBSJnmDf0hSx9lPLw4z3AiEAvRZUv3k%2FLJFhMGIi%2FVC6pXwWX3aZji23E6FpSGyevSMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUiCQj4ysQ9FE0MHyrcAzbTbl5FkOmMy8CDlBz4vm6ZXrhev9bkw3dFtgfLhSuqEIws1%2FS7TzPG339357%2BDAam2QMf0QDUjSWmnwTeOhMY4375sv87YOyS996%2FYhaMkoTaayK74SFjEXpJW142P3r6Rlg0o2iwcKBHSeEag%2FXVO097JEDdHMKmWnB42xCmgNBKFYI%2Fh5%2BT%2FmuvQTIvEXkz8aEY11QdJPOAvJ9X1VAnkQTnjpOnPQrYhBZutKOperu46Xu6rG2ErCYIsda0UmK%2FmaI7tvKnObgkOVJWXKjAEOn%2BalLQkjWvHjWZFg8oUV6q2joHwJVg1PN6YREcMQgkRRpU%2FfnGQZN8Ammvr9lyYP2Vp1lg%2FnnF24mF3WeOj%2FooBQrn6IoLtOmFCXNHtLb%2B%2FI3dBMsfB7ZufXhyTcV28kSOdJ9HDw9ZDxPOzlbZlRReX%2FssCx5XyFjHEGsdtOSqSh6UN91U6Vqzb6YL673SM8OTRF0PJXi9dDq1dEhorVIeAHYQmnniDLNPXQyaLVqnwxOyq7%2F4N1gwtS%2B1%2BbCJ6JmPFt2Rfn8zm9%2F%2FsKRvNmBb4RGrVBj055S9d1%2BQm4iZCf02sje5Uk%2F0szaFzWkwoGC%2FFl3GSMRcOLsCzbk2CF9ALbIBYb0ejT1Q%2BMLSVjL4GOqUB5jfsxJWGPhU%2Bz785VhPVTROh0mbBc6oevsv4BLzCfVWFzhQun7nER8W8kXVR6EXd%2FZs4WV49dXTv399%2FPv6aoJx3tmeuoM8P0ApwB4MyKwRvAIJ18YyqoxFg6DiykfiC0Zl5JldnWWHFr5doh2WAfi8CdzUM4jpFfOB98OHsNTyYBc8jqUrh84%2F8R4qMq%2F57%2FaWiDHNIBkJjuJijVWlIKuqgHtdI&X-Amz-Signature=1b2f39fdc2f1dce1745aecef1e2a6d4d157181d95409194403dcf555bae5e32f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO666G3E%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEsNcZeq1cJehcy5PmKKiAQMnBSJnmDf0hSx9lPLw4z3AiEAvRZUv3k%2FLJFhMGIi%2FVC6pXwWX3aZji23E6FpSGyevSMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUiCQj4ysQ9FE0MHyrcAzbTbl5FkOmMy8CDlBz4vm6ZXrhev9bkw3dFtgfLhSuqEIws1%2FS7TzPG339357%2BDAam2QMf0QDUjSWmnwTeOhMY4375sv87YOyS996%2FYhaMkoTaayK74SFjEXpJW142P3r6Rlg0o2iwcKBHSeEag%2FXVO097JEDdHMKmWnB42xCmgNBKFYI%2Fh5%2BT%2FmuvQTIvEXkz8aEY11QdJPOAvJ9X1VAnkQTnjpOnPQrYhBZutKOperu46Xu6rG2ErCYIsda0UmK%2FmaI7tvKnObgkOVJWXKjAEOn%2BalLQkjWvHjWZFg8oUV6q2joHwJVg1PN6YREcMQgkRRpU%2FfnGQZN8Ammvr9lyYP2Vp1lg%2FnnF24mF3WeOj%2FooBQrn6IoLtOmFCXNHtLb%2B%2FI3dBMsfB7ZufXhyTcV28kSOdJ9HDw9ZDxPOzlbZlRReX%2FssCx5XyFjHEGsdtOSqSh6UN91U6Vqzb6YL673SM8OTRF0PJXi9dDq1dEhorVIeAHYQmnniDLNPXQyaLVqnwxOyq7%2F4N1gwtS%2B1%2BbCJ6JmPFt2Rfn8zm9%2F%2FsKRvNmBb4RGrVBj055S9d1%2BQm4iZCf02sje5Uk%2F0szaFzWkwoGC%2FFl3GSMRcOLsCzbk2CF9ALbIBYb0ejT1Q%2BMLSVjL4GOqUB5jfsxJWGPhU%2Bz785VhPVTROh0mbBc6oevsv4BLzCfVWFzhQun7nER8W8kXVR6EXd%2FZs4WV49dXTv399%2FPv6aoJx3tmeuoM8P0ApwB4MyKwRvAIJ18YyqoxFg6DiykfiC0Zl5JldnWWHFr5doh2WAfi8CdzUM4jpFfOB98OHsNTyYBc8jqUrh84%2F8R4qMq%2F57%2FaWiDHNIBkJjuJijVWlIKuqgHtdI&X-Amz-Signature=2c44d64776cf1a6cce77992a23a333acb08ad32db3efbc0cbc1d7b71547880e4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO666G3E%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEsNcZeq1cJehcy5PmKKiAQMnBSJnmDf0hSx9lPLw4z3AiEAvRZUv3k%2FLJFhMGIi%2FVC6pXwWX3aZji23E6FpSGyevSMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUiCQj4ysQ9FE0MHyrcAzbTbl5FkOmMy8CDlBz4vm6ZXrhev9bkw3dFtgfLhSuqEIws1%2FS7TzPG339357%2BDAam2QMf0QDUjSWmnwTeOhMY4375sv87YOyS996%2FYhaMkoTaayK74SFjEXpJW142P3r6Rlg0o2iwcKBHSeEag%2FXVO097JEDdHMKmWnB42xCmgNBKFYI%2Fh5%2BT%2FmuvQTIvEXkz8aEY11QdJPOAvJ9X1VAnkQTnjpOnPQrYhBZutKOperu46Xu6rG2ErCYIsda0UmK%2FmaI7tvKnObgkOVJWXKjAEOn%2BalLQkjWvHjWZFg8oUV6q2joHwJVg1PN6YREcMQgkRRpU%2FfnGQZN8Ammvr9lyYP2Vp1lg%2FnnF24mF3WeOj%2FooBQrn6IoLtOmFCXNHtLb%2B%2FI3dBMsfB7ZufXhyTcV28kSOdJ9HDw9ZDxPOzlbZlRReX%2FssCx5XyFjHEGsdtOSqSh6UN91U6Vqzb6YL673SM8OTRF0PJXi9dDq1dEhorVIeAHYQmnniDLNPXQyaLVqnwxOyq7%2F4N1gwtS%2B1%2BbCJ6JmPFt2Rfn8zm9%2F%2FsKRvNmBb4RGrVBj055S9d1%2BQm4iZCf02sje5Uk%2F0szaFzWkwoGC%2FFl3GSMRcOLsCzbk2CF9ALbIBYb0ejT1Q%2BMLSVjL4GOqUB5jfsxJWGPhU%2Bz785VhPVTROh0mbBc6oevsv4BLzCfVWFzhQun7nER8W8kXVR6EXd%2FZs4WV49dXTv399%2FPv6aoJx3tmeuoM8P0ApwB4MyKwRvAIJ18YyqoxFg6DiykfiC0Zl5JldnWWHFr5doh2WAfi8CdzUM4jpFfOB98OHsNTyYBc8jqUrh84%2F8R4qMq%2F57%2FaWiDHNIBkJjuJijVWlIKuqgHtdI&X-Amz-Signature=0d83c4ced9c3ad78c72479ee891bf0f2b6f192b7c29cd130e9435b4aaf8ff53e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO666G3E%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEsNcZeq1cJehcy5PmKKiAQMnBSJnmDf0hSx9lPLw4z3AiEAvRZUv3k%2FLJFhMGIi%2FVC6pXwWX3aZji23E6FpSGyevSMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUiCQj4ysQ9FE0MHyrcAzbTbl5FkOmMy8CDlBz4vm6ZXrhev9bkw3dFtgfLhSuqEIws1%2FS7TzPG339357%2BDAam2QMf0QDUjSWmnwTeOhMY4375sv87YOyS996%2FYhaMkoTaayK74SFjEXpJW142P3r6Rlg0o2iwcKBHSeEag%2FXVO097JEDdHMKmWnB42xCmgNBKFYI%2Fh5%2BT%2FmuvQTIvEXkz8aEY11QdJPOAvJ9X1VAnkQTnjpOnPQrYhBZutKOperu46Xu6rG2ErCYIsda0UmK%2FmaI7tvKnObgkOVJWXKjAEOn%2BalLQkjWvHjWZFg8oUV6q2joHwJVg1PN6YREcMQgkRRpU%2FfnGQZN8Ammvr9lyYP2Vp1lg%2FnnF24mF3WeOj%2FooBQrn6IoLtOmFCXNHtLb%2B%2FI3dBMsfB7ZufXhyTcV28kSOdJ9HDw9ZDxPOzlbZlRReX%2FssCx5XyFjHEGsdtOSqSh6UN91U6Vqzb6YL673SM8OTRF0PJXi9dDq1dEhorVIeAHYQmnniDLNPXQyaLVqnwxOyq7%2F4N1gwtS%2B1%2BbCJ6JmPFt2Rfn8zm9%2F%2FsKRvNmBb4RGrVBj055S9d1%2BQm4iZCf02sje5Uk%2F0szaFzWkwoGC%2FFl3GSMRcOLsCzbk2CF9ALbIBYb0ejT1Q%2BMLSVjL4GOqUB5jfsxJWGPhU%2Bz785VhPVTROh0mbBc6oevsv4BLzCfVWFzhQun7nER8W8kXVR6EXd%2FZs4WV49dXTv399%2FPv6aoJx3tmeuoM8P0ApwB4MyKwRvAIJ18YyqoxFg6DiykfiC0Zl5JldnWWHFr5doh2WAfi8CdzUM4jpFfOB98OHsNTyYBc8jqUrh84%2F8R4qMq%2F57%2FaWiDHNIBkJjuJijVWlIKuqgHtdI&X-Amz-Signature=0daf6f5f2737fcb25daf86d9c67d6726daae61d0c08539e46760442a1b3eed25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO666G3E%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEsNcZeq1cJehcy5PmKKiAQMnBSJnmDf0hSx9lPLw4z3AiEAvRZUv3k%2FLJFhMGIi%2FVC6pXwWX3aZji23E6FpSGyevSMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUiCQj4ysQ9FE0MHyrcAzbTbl5FkOmMy8CDlBz4vm6ZXrhev9bkw3dFtgfLhSuqEIws1%2FS7TzPG339357%2BDAam2QMf0QDUjSWmnwTeOhMY4375sv87YOyS996%2FYhaMkoTaayK74SFjEXpJW142P3r6Rlg0o2iwcKBHSeEag%2FXVO097JEDdHMKmWnB42xCmgNBKFYI%2Fh5%2BT%2FmuvQTIvEXkz8aEY11QdJPOAvJ9X1VAnkQTnjpOnPQrYhBZutKOperu46Xu6rG2ErCYIsda0UmK%2FmaI7tvKnObgkOVJWXKjAEOn%2BalLQkjWvHjWZFg8oUV6q2joHwJVg1PN6YREcMQgkRRpU%2FfnGQZN8Ammvr9lyYP2Vp1lg%2FnnF24mF3WeOj%2FooBQrn6IoLtOmFCXNHtLb%2B%2FI3dBMsfB7ZufXhyTcV28kSOdJ9HDw9ZDxPOzlbZlRReX%2FssCx5XyFjHEGsdtOSqSh6UN91U6Vqzb6YL673SM8OTRF0PJXi9dDq1dEhorVIeAHYQmnniDLNPXQyaLVqnwxOyq7%2F4N1gwtS%2B1%2BbCJ6JmPFt2Rfn8zm9%2F%2FsKRvNmBb4RGrVBj055S9d1%2BQm4iZCf02sje5Uk%2F0szaFzWkwoGC%2FFl3GSMRcOLsCzbk2CF9ALbIBYb0ejT1Q%2BMLSVjL4GOqUB5jfsxJWGPhU%2Bz785VhPVTROh0mbBc6oevsv4BLzCfVWFzhQun7nER8W8kXVR6EXd%2FZs4WV49dXTv399%2FPv6aoJx3tmeuoM8P0ApwB4MyKwRvAIJ18YyqoxFg6DiykfiC0Zl5JldnWWHFr5doh2WAfi8CdzUM4jpFfOB98OHsNTyYBc8jqUrh84%2F8R4qMq%2F57%2FaWiDHNIBkJjuJijVWlIKuqgHtdI&X-Amz-Signature=3c781810131ca00ccd1af680b7459ba2ae5be43fcb7a8b3686d4d1a881d056e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
