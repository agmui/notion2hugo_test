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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LJ3DZIU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDo35SK6ZPBFuN6xmpzgrZawmrJ4PDdZk96E8utY6CBDwIgBU6jQm%2Fzvyhyv5zXM%2BfpO%2Bdi9xQZJ1bWQ95LOYLZP%2FEqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCB%2FeYIsuZZLM1CkjircA4Dmd7io2LJLPKqWw3DwPID%2FvxuFajfDX4Xc81Q%2FXZIyvTzbb3wvre94ijDK3bW%2FYzYOw7SEL6vbWdpX3mNpxmF3e7cGILs%2FHX7XkHN4ODuN0MStFK3M8spJwTYX81jbE4VQKX5ICGA%2BeAMBa9VmqpOVlp%2BR03Y2GKMDUH1eVRYWswzOAbP6hBVGxYWJ7aBzqKUJ%2F6%2FJu55ljk4SipREzXAMxVsEfGPOGDu3u%2BcFMsTbCRlJJdMqb6fqqdhh0X2ll0R7VG6WdfUse26yoeMFOKdKDWBPAmR4qQnjTcxwNK8cZGZ8jmUsoFSrZ1fCgPmr0TkFQVRQDOZ4iBwf8%2Fucfl3VwoDOS0K4NFJdAVVvoxU0u4BDcKcnEmBMqm4nSqIg1e9vmmceulU5YR6zAERZbL1xCOV54ojJzTrBat%2BQ6V3im32yzNkL%2BygrkmDLFPH6onTVXJY7ZlejBs5a0nL1O4Ldk%2FaIUf017n%2BwSkC98WiAzGobxn4AwACL7sXo3QUdxhO3UDIOgolkDqv3GX51QDL4z5iN0k9J4YDsfKSY1zQCxyNVKiQ%2F3SkFjMOZxDixNJUgPoLUTiiYfgWjMO90e7teX%2BMwuUNUiRwmPyQhCbHhBrVFG86KtkYZOWQAMJXqnMQGOqUBCiz5p61YCWi7X9GwGLtArX9dBEBsEAmMbg8A20ywCLCRlMDjVqpw%2FgWlXaGu%2F%2BGqFzyxEw%2BVVRKFvaG1nZZ0SXf4pJ6b%2Fb%2BIn8hyBGS2EPg7%2F2LY5aTJz6%2FlzRDBEwHGy6Zr%2Fetp%2FKMwrAI1eK%2BRAcEsg9BVdHHT%2BkxkbdKBABIg%2BGav0XunJGnn8dTdiX8MboE0em2%2FyPklmm2PdrSMYyh87%2Fq5&X-Amz-Signature=295ef1472fe310b3bda51a4292edc6e60a2dc7e5ff4a64df956728309b5e1ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LJ3DZIU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDo35SK6ZPBFuN6xmpzgrZawmrJ4PDdZk96E8utY6CBDwIgBU6jQm%2Fzvyhyv5zXM%2BfpO%2Bdi9xQZJ1bWQ95LOYLZP%2FEqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCB%2FeYIsuZZLM1CkjircA4Dmd7io2LJLPKqWw3DwPID%2FvxuFajfDX4Xc81Q%2FXZIyvTzbb3wvre94ijDK3bW%2FYzYOw7SEL6vbWdpX3mNpxmF3e7cGILs%2FHX7XkHN4ODuN0MStFK3M8spJwTYX81jbE4VQKX5ICGA%2BeAMBa9VmqpOVlp%2BR03Y2GKMDUH1eVRYWswzOAbP6hBVGxYWJ7aBzqKUJ%2F6%2FJu55ljk4SipREzXAMxVsEfGPOGDu3u%2BcFMsTbCRlJJdMqb6fqqdhh0X2ll0R7VG6WdfUse26yoeMFOKdKDWBPAmR4qQnjTcxwNK8cZGZ8jmUsoFSrZ1fCgPmr0TkFQVRQDOZ4iBwf8%2Fucfl3VwoDOS0K4NFJdAVVvoxU0u4BDcKcnEmBMqm4nSqIg1e9vmmceulU5YR6zAERZbL1xCOV54ojJzTrBat%2BQ6V3im32yzNkL%2BygrkmDLFPH6onTVXJY7ZlejBs5a0nL1O4Ldk%2FaIUf017n%2BwSkC98WiAzGobxn4AwACL7sXo3QUdxhO3UDIOgolkDqv3GX51QDL4z5iN0k9J4YDsfKSY1zQCxyNVKiQ%2F3SkFjMOZxDixNJUgPoLUTiiYfgWjMO90e7teX%2BMwuUNUiRwmPyQhCbHhBrVFG86KtkYZOWQAMJXqnMQGOqUBCiz5p61YCWi7X9GwGLtArX9dBEBsEAmMbg8A20ywCLCRlMDjVqpw%2FgWlXaGu%2F%2BGqFzyxEw%2BVVRKFvaG1nZZ0SXf4pJ6b%2Fb%2BIn8hyBGS2EPg7%2F2LY5aTJz6%2FlzRDBEwHGy6Zr%2Fetp%2FKMwrAI1eK%2BRAcEsg9BVdHHT%2BkxkbdKBABIg%2BGav0XunJGnn8dTdiX8MboE0em2%2FyPklmm2PdrSMYyh87%2Fq5&X-Amz-Signature=fc5a81bb5e5fbdecd89d01723146a9adc611f0fd51d9055ca8ad140a688b3358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LJ3DZIU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDo35SK6ZPBFuN6xmpzgrZawmrJ4PDdZk96E8utY6CBDwIgBU6jQm%2Fzvyhyv5zXM%2BfpO%2Bdi9xQZJ1bWQ95LOYLZP%2FEqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCB%2FeYIsuZZLM1CkjircA4Dmd7io2LJLPKqWw3DwPID%2FvxuFajfDX4Xc81Q%2FXZIyvTzbb3wvre94ijDK3bW%2FYzYOw7SEL6vbWdpX3mNpxmF3e7cGILs%2FHX7XkHN4ODuN0MStFK3M8spJwTYX81jbE4VQKX5ICGA%2BeAMBa9VmqpOVlp%2BR03Y2GKMDUH1eVRYWswzOAbP6hBVGxYWJ7aBzqKUJ%2F6%2FJu55ljk4SipREzXAMxVsEfGPOGDu3u%2BcFMsTbCRlJJdMqb6fqqdhh0X2ll0R7VG6WdfUse26yoeMFOKdKDWBPAmR4qQnjTcxwNK8cZGZ8jmUsoFSrZ1fCgPmr0TkFQVRQDOZ4iBwf8%2Fucfl3VwoDOS0K4NFJdAVVvoxU0u4BDcKcnEmBMqm4nSqIg1e9vmmceulU5YR6zAERZbL1xCOV54ojJzTrBat%2BQ6V3im32yzNkL%2BygrkmDLFPH6onTVXJY7ZlejBs5a0nL1O4Ldk%2FaIUf017n%2BwSkC98WiAzGobxn4AwACL7sXo3QUdxhO3UDIOgolkDqv3GX51QDL4z5iN0k9J4YDsfKSY1zQCxyNVKiQ%2F3SkFjMOZxDixNJUgPoLUTiiYfgWjMO90e7teX%2BMwuUNUiRwmPyQhCbHhBrVFG86KtkYZOWQAMJXqnMQGOqUBCiz5p61YCWi7X9GwGLtArX9dBEBsEAmMbg8A20ywCLCRlMDjVqpw%2FgWlXaGu%2F%2BGqFzyxEw%2BVVRKFvaG1nZZ0SXf4pJ6b%2Fb%2BIn8hyBGS2EPg7%2F2LY5aTJz6%2FlzRDBEwHGy6Zr%2Fetp%2FKMwrAI1eK%2BRAcEsg9BVdHHT%2BkxkbdKBABIg%2BGav0XunJGnn8dTdiX8MboE0em2%2FyPklmm2PdrSMYyh87%2Fq5&X-Amz-Signature=6a40428a2b63ef69a2f67bcbbd88f3e5ce22f6968c84ae359e91d92ea2c15da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LJ3DZIU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDo35SK6ZPBFuN6xmpzgrZawmrJ4PDdZk96E8utY6CBDwIgBU6jQm%2Fzvyhyv5zXM%2BfpO%2Bdi9xQZJ1bWQ95LOYLZP%2FEqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCB%2FeYIsuZZLM1CkjircA4Dmd7io2LJLPKqWw3DwPID%2FvxuFajfDX4Xc81Q%2FXZIyvTzbb3wvre94ijDK3bW%2FYzYOw7SEL6vbWdpX3mNpxmF3e7cGILs%2FHX7XkHN4ODuN0MStFK3M8spJwTYX81jbE4VQKX5ICGA%2BeAMBa9VmqpOVlp%2BR03Y2GKMDUH1eVRYWswzOAbP6hBVGxYWJ7aBzqKUJ%2F6%2FJu55ljk4SipREzXAMxVsEfGPOGDu3u%2BcFMsTbCRlJJdMqb6fqqdhh0X2ll0R7VG6WdfUse26yoeMFOKdKDWBPAmR4qQnjTcxwNK8cZGZ8jmUsoFSrZ1fCgPmr0TkFQVRQDOZ4iBwf8%2Fucfl3VwoDOS0K4NFJdAVVvoxU0u4BDcKcnEmBMqm4nSqIg1e9vmmceulU5YR6zAERZbL1xCOV54ojJzTrBat%2BQ6V3im32yzNkL%2BygrkmDLFPH6onTVXJY7ZlejBs5a0nL1O4Ldk%2FaIUf017n%2BwSkC98WiAzGobxn4AwACL7sXo3QUdxhO3UDIOgolkDqv3GX51QDL4z5iN0k9J4YDsfKSY1zQCxyNVKiQ%2F3SkFjMOZxDixNJUgPoLUTiiYfgWjMO90e7teX%2BMwuUNUiRwmPyQhCbHhBrVFG86KtkYZOWQAMJXqnMQGOqUBCiz5p61YCWi7X9GwGLtArX9dBEBsEAmMbg8A20ywCLCRlMDjVqpw%2FgWlXaGu%2F%2BGqFzyxEw%2BVVRKFvaG1nZZ0SXf4pJ6b%2Fb%2BIn8hyBGS2EPg7%2F2LY5aTJz6%2FlzRDBEwHGy6Zr%2Fetp%2FKMwrAI1eK%2BRAcEsg9BVdHHT%2BkxkbdKBABIg%2BGav0XunJGnn8dTdiX8MboE0em2%2FyPklmm2PdrSMYyh87%2Fq5&X-Amz-Signature=0cf901e1e0add822a8a863e5ba6ed1972dfb105cd5d6abf633dc373f30efe7c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LJ3DZIU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDo35SK6ZPBFuN6xmpzgrZawmrJ4PDdZk96E8utY6CBDwIgBU6jQm%2Fzvyhyv5zXM%2BfpO%2Bdi9xQZJ1bWQ95LOYLZP%2FEqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCB%2FeYIsuZZLM1CkjircA4Dmd7io2LJLPKqWw3DwPID%2FvxuFajfDX4Xc81Q%2FXZIyvTzbb3wvre94ijDK3bW%2FYzYOw7SEL6vbWdpX3mNpxmF3e7cGILs%2FHX7XkHN4ODuN0MStFK3M8spJwTYX81jbE4VQKX5ICGA%2BeAMBa9VmqpOVlp%2BR03Y2GKMDUH1eVRYWswzOAbP6hBVGxYWJ7aBzqKUJ%2F6%2FJu55ljk4SipREzXAMxVsEfGPOGDu3u%2BcFMsTbCRlJJdMqb6fqqdhh0X2ll0R7VG6WdfUse26yoeMFOKdKDWBPAmR4qQnjTcxwNK8cZGZ8jmUsoFSrZ1fCgPmr0TkFQVRQDOZ4iBwf8%2Fucfl3VwoDOS0K4NFJdAVVvoxU0u4BDcKcnEmBMqm4nSqIg1e9vmmceulU5YR6zAERZbL1xCOV54ojJzTrBat%2BQ6V3im32yzNkL%2BygrkmDLFPH6onTVXJY7ZlejBs5a0nL1O4Ldk%2FaIUf017n%2BwSkC98WiAzGobxn4AwACL7sXo3QUdxhO3UDIOgolkDqv3GX51QDL4z5iN0k9J4YDsfKSY1zQCxyNVKiQ%2F3SkFjMOZxDixNJUgPoLUTiiYfgWjMO90e7teX%2BMwuUNUiRwmPyQhCbHhBrVFG86KtkYZOWQAMJXqnMQGOqUBCiz5p61YCWi7X9GwGLtArX9dBEBsEAmMbg8A20ywCLCRlMDjVqpw%2FgWlXaGu%2F%2BGqFzyxEw%2BVVRKFvaG1nZZ0SXf4pJ6b%2Fb%2BIn8hyBGS2EPg7%2F2LY5aTJz6%2FlzRDBEwHGy6Zr%2Fetp%2FKMwrAI1eK%2BRAcEsg9BVdHHT%2BkxkbdKBABIg%2BGav0XunJGnn8dTdiX8MboE0em2%2FyPklmm2PdrSMYyh87%2Fq5&X-Amz-Signature=55a582eb97e547e49584bc8e3d50dde9f074acd8988716b386c7ceaf798c72b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
