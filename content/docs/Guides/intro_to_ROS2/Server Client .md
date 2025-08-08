---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJ5DKWH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFWkfYb%2FDBturJKNCnlWTqYLpcMDd%2BdkDrSIXFwt1ev0AiEA0PBkQUMnApOFSEGXTgpU9EWd%2FJchS17kP5Jz0zljWdIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1UzAfOQNhxK6xk7ircA7n%2FQmXo1HZtiunePvtwrDP0VDX6gkgGhpAbzdnFbF2C%2FFw%2Bm57yNQ0CfxaJoUZi2kbaeNyhh2qFLqxeW9dcBjy6eKvvREL4c%2B%2BVLiYwdcnW9eClW519lLlfHuJhUKOr%2BPhdNGsY7I9ZpuL23bz4N9WdsnNY7DgzSENQjmyQHu0aqz2sR64NYAydjYi2HL0uc%2FO3%2FXjSd48N%2FxreG%2BehZqmg%2FEvJm4jME5CUggly50S93Rukh3STn5P4FcIJrsuw2xKrRHTDVdp3K09RbR90JIiHWCtvL0wcRTrDsFe36Bye6FQHKHjLJrjdim4xnDxa7TyWCHPGBAIFuQv5iPT0qc4cq4nIblOvX8659LQUuScgCrgi2NWMhZqsRY6rLiNNh98ixh%2BVImXfyTN9CWudmSoTkmbhOrn4FKAhf%2Bq0CZM0rfF2WaiWWW9peR2Is0U0ntnEdqEmy8B9Mge9aZJxNDt6%2BZk9mgrD6G%2BITpm6y1krpYR74MbvZRJJWey2a%2FlL39lJkEuJ0WBjTYt4zI7ybS%2B55e4J%2FwEvOJujlCfKxWinhSmwOIRz3VDe9Wy7gR2tZQXpkFnC%2FiHsxudubtD0yM5Ode%2FZd5juZJZ4BU6qG3%2FrsWhIGftBmwy9wIitMI2T18QGOqUBfL3ePSKPUTvOSQ%2B3UDUySTGpKKAfybrySYZij3U0S3vFQgCsMh9wJHjRl0rQC3oEoiF4YIWgopvnILKpjBpC4tSrEnhr5Z8uen8Touyt6JEpCA5934Wr3P8z1ibWTfGkSiuF8ZsLdQvNQYdEQj6cgnilbkqP2d3TRu6BuGSQ1U%2FXoDOl3ul0Ld0fpAW4o69c%2Fc2BLNvlDtCrduMtOyZmZHivPN5d&X-Amz-Signature=66c20853e7a1decc00b6ca20326cc27ba140422d442746a04dd84c1ef0733279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJ5DKWH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFWkfYb%2FDBturJKNCnlWTqYLpcMDd%2BdkDrSIXFwt1ev0AiEA0PBkQUMnApOFSEGXTgpU9EWd%2FJchS17kP5Jz0zljWdIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1UzAfOQNhxK6xk7ircA7n%2FQmXo1HZtiunePvtwrDP0VDX6gkgGhpAbzdnFbF2C%2FFw%2Bm57yNQ0CfxaJoUZi2kbaeNyhh2qFLqxeW9dcBjy6eKvvREL4c%2B%2BVLiYwdcnW9eClW519lLlfHuJhUKOr%2BPhdNGsY7I9ZpuL23bz4N9WdsnNY7DgzSENQjmyQHu0aqz2sR64NYAydjYi2HL0uc%2FO3%2FXjSd48N%2FxreG%2BehZqmg%2FEvJm4jME5CUggly50S93Rukh3STn5P4FcIJrsuw2xKrRHTDVdp3K09RbR90JIiHWCtvL0wcRTrDsFe36Bye6FQHKHjLJrjdim4xnDxa7TyWCHPGBAIFuQv5iPT0qc4cq4nIblOvX8659LQUuScgCrgi2NWMhZqsRY6rLiNNh98ixh%2BVImXfyTN9CWudmSoTkmbhOrn4FKAhf%2Bq0CZM0rfF2WaiWWW9peR2Is0U0ntnEdqEmy8B9Mge9aZJxNDt6%2BZk9mgrD6G%2BITpm6y1krpYR74MbvZRJJWey2a%2FlL39lJkEuJ0WBjTYt4zI7ybS%2B55e4J%2FwEvOJujlCfKxWinhSmwOIRz3VDe9Wy7gR2tZQXpkFnC%2FiHsxudubtD0yM5Ode%2FZd5juZJZ4BU6qG3%2FrsWhIGftBmwy9wIitMI2T18QGOqUBfL3ePSKPUTvOSQ%2B3UDUySTGpKKAfybrySYZij3U0S3vFQgCsMh9wJHjRl0rQC3oEoiF4YIWgopvnILKpjBpC4tSrEnhr5Z8uen8Touyt6JEpCA5934Wr3P8z1ibWTfGkSiuF8ZsLdQvNQYdEQj6cgnilbkqP2d3TRu6BuGSQ1U%2FXoDOl3ul0Ld0fpAW4o69c%2Fc2BLNvlDtCrduMtOyZmZHivPN5d&X-Amz-Signature=42480fd03ed099f2987859ebc77bb99d3e62634ad3de7fba73d60e1e64d52143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJ5DKWH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFWkfYb%2FDBturJKNCnlWTqYLpcMDd%2BdkDrSIXFwt1ev0AiEA0PBkQUMnApOFSEGXTgpU9EWd%2FJchS17kP5Jz0zljWdIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1UzAfOQNhxK6xk7ircA7n%2FQmXo1HZtiunePvtwrDP0VDX6gkgGhpAbzdnFbF2C%2FFw%2Bm57yNQ0CfxaJoUZi2kbaeNyhh2qFLqxeW9dcBjy6eKvvREL4c%2B%2BVLiYwdcnW9eClW519lLlfHuJhUKOr%2BPhdNGsY7I9ZpuL23bz4N9WdsnNY7DgzSENQjmyQHu0aqz2sR64NYAydjYi2HL0uc%2FO3%2FXjSd48N%2FxreG%2BehZqmg%2FEvJm4jME5CUggly50S93Rukh3STn5P4FcIJrsuw2xKrRHTDVdp3K09RbR90JIiHWCtvL0wcRTrDsFe36Bye6FQHKHjLJrjdim4xnDxa7TyWCHPGBAIFuQv5iPT0qc4cq4nIblOvX8659LQUuScgCrgi2NWMhZqsRY6rLiNNh98ixh%2BVImXfyTN9CWudmSoTkmbhOrn4FKAhf%2Bq0CZM0rfF2WaiWWW9peR2Is0U0ntnEdqEmy8B9Mge9aZJxNDt6%2BZk9mgrD6G%2BITpm6y1krpYR74MbvZRJJWey2a%2FlL39lJkEuJ0WBjTYt4zI7ybS%2B55e4J%2FwEvOJujlCfKxWinhSmwOIRz3VDe9Wy7gR2tZQXpkFnC%2FiHsxudubtD0yM5Ode%2FZd5juZJZ4BU6qG3%2FrsWhIGftBmwy9wIitMI2T18QGOqUBfL3ePSKPUTvOSQ%2B3UDUySTGpKKAfybrySYZij3U0S3vFQgCsMh9wJHjRl0rQC3oEoiF4YIWgopvnILKpjBpC4tSrEnhr5Z8uen8Touyt6JEpCA5934Wr3P8z1ibWTfGkSiuF8ZsLdQvNQYdEQj6cgnilbkqP2d3TRu6BuGSQ1U%2FXoDOl3ul0Ld0fpAW4o69c%2Fc2BLNvlDtCrduMtOyZmZHivPN5d&X-Amz-Signature=c78ceb763279c9f30d68c28f1df3aeee609d3c929c4f0715c5ff2bcdc54d3b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJ5DKWH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFWkfYb%2FDBturJKNCnlWTqYLpcMDd%2BdkDrSIXFwt1ev0AiEA0PBkQUMnApOFSEGXTgpU9EWd%2FJchS17kP5Jz0zljWdIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1UzAfOQNhxK6xk7ircA7n%2FQmXo1HZtiunePvtwrDP0VDX6gkgGhpAbzdnFbF2C%2FFw%2Bm57yNQ0CfxaJoUZi2kbaeNyhh2qFLqxeW9dcBjy6eKvvREL4c%2B%2BVLiYwdcnW9eClW519lLlfHuJhUKOr%2BPhdNGsY7I9ZpuL23bz4N9WdsnNY7DgzSENQjmyQHu0aqz2sR64NYAydjYi2HL0uc%2FO3%2FXjSd48N%2FxreG%2BehZqmg%2FEvJm4jME5CUggly50S93Rukh3STn5P4FcIJrsuw2xKrRHTDVdp3K09RbR90JIiHWCtvL0wcRTrDsFe36Bye6FQHKHjLJrjdim4xnDxa7TyWCHPGBAIFuQv5iPT0qc4cq4nIblOvX8659LQUuScgCrgi2NWMhZqsRY6rLiNNh98ixh%2BVImXfyTN9CWudmSoTkmbhOrn4FKAhf%2Bq0CZM0rfF2WaiWWW9peR2Is0U0ntnEdqEmy8B9Mge9aZJxNDt6%2BZk9mgrD6G%2BITpm6y1krpYR74MbvZRJJWey2a%2FlL39lJkEuJ0WBjTYt4zI7ybS%2B55e4J%2FwEvOJujlCfKxWinhSmwOIRz3VDe9Wy7gR2tZQXpkFnC%2FiHsxudubtD0yM5Ode%2FZd5juZJZ4BU6qG3%2FrsWhIGftBmwy9wIitMI2T18QGOqUBfL3ePSKPUTvOSQ%2B3UDUySTGpKKAfybrySYZij3U0S3vFQgCsMh9wJHjRl0rQC3oEoiF4YIWgopvnILKpjBpC4tSrEnhr5Z8uen8Touyt6JEpCA5934Wr3P8z1ibWTfGkSiuF8ZsLdQvNQYdEQj6cgnilbkqP2d3TRu6BuGSQ1U%2FXoDOl3ul0Ld0fpAW4o69c%2Fc2BLNvlDtCrduMtOyZmZHivPN5d&X-Amz-Signature=23bcddcb554ea22ca999f878e470268e347746a6ee330e46ad503860584e21c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJ5DKWH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFWkfYb%2FDBturJKNCnlWTqYLpcMDd%2BdkDrSIXFwt1ev0AiEA0PBkQUMnApOFSEGXTgpU9EWd%2FJchS17kP5Jz0zljWdIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1UzAfOQNhxK6xk7ircA7n%2FQmXo1HZtiunePvtwrDP0VDX6gkgGhpAbzdnFbF2C%2FFw%2Bm57yNQ0CfxaJoUZi2kbaeNyhh2qFLqxeW9dcBjy6eKvvREL4c%2B%2BVLiYwdcnW9eClW519lLlfHuJhUKOr%2BPhdNGsY7I9ZpuL23bz4N9WdsnNY7DgzSENQjmyQHu0aqz2sR64NYAydjYi2HL0uc%2FO3%2FXjSd48N%2FxreG%2BehZqmg%2FEvJm4jME5CUggly50S93Rukh3STn5P4FcIJrsuw2xKrRHTDVdp3K09RbR90JIiHWCtvL0wcRTrDsFe36Bye6FQHKHjLJrjdim4xnDxa7TyWCHPGBAIFuQv5iPT0qc4cq4nIblOvX8659LQUuScgCrgi2NWMhZqsRY6rLiNNh98ixh%2BVImXfyTN9CWudmSoTkmbhOrn4FKAhf%2Bq0CZM0rfF2WaiWWW9peR2Is0U0ntnEdqEmy8B9Mge9aZJxNDt6%2BZk9mgrD6G%2BITpm6y1krpYR74MbvZRJJWey2a%2FlL39lJkEuJ0WBjTYt4zI7ybS%2B55e4J%2FwEvOJujlCfKxWinhSmwOIRz3VDe9Wy7gR2tZQXpkFnC%2FiHsxudubtD0yM5Ode%2FZd5juZJZ4BU6qG3%2FrsWhIGftBmwy9wIitMI2T18QGOqUBfL3ePSKPUTvOSQ%2B3UDUySTGpKKAfybrySYZij3U0S3vFQgCsMh9wJHjRl0rQC3oEoiF4YIWgopvnILKpjBpC4tSrEnhr5Z8uen8Touyt6JEpCA5934Wr3P8z1ibWTfGkSiuF8ZsLdQvNQYdEQj6cgnilbkqP2d3TRu6BuGSQ1U%2FXoDOl3ul0Ld0fpAW4o69c%2Fc2BLNvlDtCrduMtOyZmZHivPN5d&X-Amz-Signature=7898f2b926e400999b977a4c8f9eb9b24dbf1a5e095f307b174d11aecad9c730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
