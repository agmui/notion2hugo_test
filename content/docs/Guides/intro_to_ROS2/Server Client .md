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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5OZISTV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChBAf%2BGKmCGDhlgDUQ6DsgyqEOWT4y%2Fc4GEBT4ztMwZAIgdJI8A4VUYA%2BML%2FDpG33KivTQCVAhKb4oKpwRxbMnen0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLCGFWR9Us3ILXc3UCrcA79Tn6WLXUlHqXYnso8bPupmR9L8DUq%2FWxHXz0JPSSzMeSnqKa9Z4fZncXjvqSVmNUe4cYpGnoaufHxgYyCcNdqei2mRyMnlNcFC64RZGPDLwGb%2FvuMpWf8BH9BYT3I8SEs1fJVqNIJ1G%2B7WTYzhE9axBCcCJB7%2Bix5yYdgyVYjxrTIn5zeroWQPkzuDF3NOdEOvAHToQYhZdpQ7AuHecjkCdRBxyD6MWXifVlnQknsYe7r0lrFn8pJL3CNPDkPW67%2FsCaYA14cGdCkefInZ7dQmWkJ0RVY%2F9RoRy59SQY32DZjxzUX0%2Bk%2FB2VZQT1JtGV5VPgwpF5BCsEpLs5eJErrQPE40BZJFPJYWMQwsrLfq1xPlyOLxoQLCGJFFBy6ch67TVjSDtUrosmTLHpbJ9eWh3OFHxf0G2%2FAv6FdbR7blXdKbJVsOPrgYxOw0NLzTEIbnMMy2gLVwON3rEfdx314ZMZ6cK4fnM6zfvGEUU46hr1jvTI7HI1N2yrcCXaNv7i7TzQr5Zi1MxOPk3Z78YlIhMRv1k5OtHqty7A1xEPjmChJeXOmONuzz6Ie%2BXvNEFnvyP9hfmrDqBgtJlEMeWng9kdhzrY%2BOQrH2hYEyUCihpzYLkFG%2FwXrp1YpuMPOIx8IGOqUBu2kVK4RGOEFvWQ3MSuGRRqACQET6dBZNzqNpwDt18nvk2fMBodP9EuD5aIU0z3a2Tkj3LwX2zcvArQa0yX23mMlsKKe7tIdrmuU%2BWlzVaJ032Rh3Kg%2F%2B3zEXp0YGQ5P7PD6xsWzGeDi8GUOQxqeR6M108GjhQNvmT4r%2B0GbsagG1s8tLMsqKyG7dImu1lky3rAY%2Bw4sfPBXKqgEVhtXXUlqxzNHI&X-Amz-Signature=9cb6b83ce84da5cfe025255ad0c3ce2811c67253ef69ca8fee4ac9034a811d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5OZISTV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChBAf%2BGKmCGDhlgDUQ6DsgyqEOWT4y%2Fc4GEBT4ztMwZAIgdJI8A4VUYA%2BML%2FDpG33KivTQCVAhKb4oKpwRxbMnen0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLCGFWR9Us3ILXc3UCrcA79Tn6WLXUlHqXYnso8bPupmR9L8DUq%2FWxHXz0JPSSzMeSnqKa9Z4fZncXjvqSVmNUe4cYpGnoaufHxgYyCcNdqei2mRyMnlNcFC64RZGPDLwGb%2FvuMpWf8BH9BYT3I8SEs1fJVqNIJ1G%2B7WTYzhE9axBCcCJB7%2Bix5yYdgyVYjxrTIn5zeroWQPkzuDF3NOdEOvAHToQYhZdpQ7AuHecjkCdRBxyD6MWXifVlnQknsYe7r0lrFn8pJL3CNPDkPW67%2FsCaYA14cGdCkefInZ7dQmWkJ0RVY%2F9RoRy59SQY32DZjxzUX0%2Bk%2FB2VZQT1JtGV5VPgwpF5BCsEpLs5eJErrQPE40BZJFPJYWMQwsrLfq1xPlyOLxoQLCGJFFBy6ch67TVjSDtUrosmTLHpbJ9eWh3OFHxf0G2%2FAv6FdbR7blXdKbJVsOPrgYxOw0NLzTEIbnMMy2gLVwON3rEfdx314ZMZ6cK4fnM6zfvGEUU46hr1jvTI7HI1N2yrcCXaNv7i7TzQr5Zi1MxOPk3Z78YlIhMRv1k5OtHqty7A1xEPjmChJeXOmONuzz6Ie%2BXvNEFnvyP9hfmrDqBgtJlEMeWng9kdhzrY%2BOQrH2hYEyUCihpzYLkFG%2FwXrp1YpuMPOIx8IGOqUBu2kVK4RGOEFvWQ3MSuGRRqACQET6dBZNzqNpwDt18nvk2fMBodP9EuD5aIU0z3a2Tkj3LwX2zcvArQa0yX23mMlsKKe7tIdrmuU%2BWlzVaJ032Rh3Kg%2F%2B3zEXp0YGQ5P7PD6xsWzGeDi8GUOQxqeR6M108GjhQNvmT4r%2B0GbsagG1s8tLMsqKyG7dImu1lky3rAY%2Bw4sfPBXKqgEVhtXXUlqxzNHI&X-Amz-Signature=2e6156a6cfe598acb463913944514d4e21c7d4762b891a6dfbbe950a5176f3bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5OZISTV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChBAf%2BGKmCGDhlgDUQ6DsgyqEOWT4y%2Fc4GEBT4ztMwZAIgdJI8A4VUYA%2BML%2FDpG33KivTQCVAhKb4oKpwRxbMnen0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLCGFWR9Us3ILXc3UCrcA79Tn6WLXUlHqXYnso8bPupmR9L8DUq%2FWxHXz0JPSSzMeSnqKa9Z4fZncXjvqSVmNUe4cYpGnoaufHxgYyCcNdqei2mRyMnlNcFC64RZGPDLwGb%2FvuMpWf8BH9BYT3I8SEs1fJVqNIJ1G%2B7WTYzhE9axBCcCJB7%2Bix5yYdgyVYjxrTIn5zeroWQPkzuDF3NOdEOvAHToQYhZdpQ7AuHecjkCdRBxyD6MWXifVlnQknsYe7r0lrFn8pJL3CNPDkPW67%2FsCaYA14cGdCkefInZ7dQmWkJ0RVY%2F9RoRy59SQY32DZjxzUX0%2Bk%2FB2VZQT1JtGV5VPgwpF5BCsEpLs5eJErrQPE40BZJFPJYWMQwsrLfq1xPlyOLxoQLCGJFFBy6ch67TVjSDtUrosmTLHpbJ9eWh3OFHxf0G2%2FAv6FdbR7blXdKbJVsOPrgYxOw0NLzTEIbnMMy2gLVwON3rEfdx314ZMZ6cK4fnM6zfvGEUU46hr1jvTI7HI1N2yrcCXaNv7i7TzQr5Zi1MxOPk3Z78YlIhMRv1k5OtHqty7A1xEPjmChJeXOmONuzz6Ie%2BXvNEFnvyP9hfmrDqBgtJlEMeWng9kdhzrY%2BOQrH2hYEyUCihpzYLkFG%2FwXrp1YpuMPOIx8IGOqUBu2kVK4RGOEFvWQ3MSuGRRqACQET6dBZNzqNpwDt18nvk2fMBodP9EuD5aIU0z3a2Tkj3LwX2zcvArQa0yX23mMlsKKe7tIdrmuU%2BWlzVaJ032Rh3Kg%2F%2B3zEXp0YGQ5P7PD6xsWzGeDi8GUOQxqeR6M108GjhQNvmT4r%2B0GbsagG1s8tLMsqKyG7dImu1lky3rAY%2Bw4sfPBXKqgEVhtXXUlqxzNHI&X-Amz-Signature=40136615e1bed72fb4fbc007280c2a3d53e8e4dc0427e35c38836c5f2324a486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5OZISTV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChBAf%2BGKmCGDhlgDUQ6DsgyqEOWT4y%2Fc4GEBT4ztMwZAIgdJI8A4VUYA%2BML%2FDpG33KivTQCVAhKb4oKpwRxbMnen0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLCGFWR9Us3ILXc3UCrcA79Tn6WLXUlHqXYnso8bPupmR9L8DUq%2FWxHXz0JPSSzMeSnqKa9Z4fZncXjvqSVmNUe4cYpGnoaufHxgYyCcNdqei2mRyMnlNcFC64RZGPDLwGb%2FvuMpWf8BH9BYT3I8SEs1fJVqNIJ1G%2B7WTYzhE9axBCcCJB7%2Bix5yYdgyVYjxrTIn5zeroWQPkzuDF3NOdEOvAHToQYhZdpQ7AuHecjkCdRBxyD6MWXifVlnQknsYe7r0lrFn8pJL3CNPDkPW67%2FsCaYA14cGdCkefInZ7dQmWkJ0RVY%2F9RoRy59SQY32DZjxzUX0%2Bk%2FB2VZQT1JtGV5VPgwpF5BCsEpLs5eJErrQPE40BZJFPJYWMQwsrLfq1xPlyOLxoQLCGJFFBy6ch67TVjSDtUrosmTLHpbJ9eWh3OFHxf0G2%2FAv6FdbR7blXdKbJVsOPrgYxOw0NLzTEIbnMMy2gLVwON3rEfdx314ZMZ6cK4fnM6zfvGEUU46hr1jvTI7HI1N2yrcCXaNv7i7TzQr5Zi1MxOPk3Z78YlIhMRv1k5OtHqty7A1xEPjmChJeXOmONuzz6Ie%2BXvNEFnvyP9hfmrDqBgtJlEMeWng9kdhzrY%2BOQrH2hYEyUCihpzYLkFG%2FwXrp1YpuMPOIx8IGOqUBu2kVK4RGOEFvWQ3MSuGRRqACQET6dBZNzqNpwDt18nvk2fMBodP9EuD5aIU0z3a2Tkj3LwX2zcvArQa0yX23mMlsKKe7tIdrmuU%2BWlzVaJ032Rh3Kg%2F%2B3zEXp0YGQ5P7PD6xsWzGeDi8GUOQxqeR6M108GjhQNvmT4r%2B0GbsagG1s8tLMsqKyG7dImu1lky3rAY%2Bw4sfPBXKqgEVhtXXUlqxzNHI&X-Amz-Signature=07dc20868227d4e0dec3a50557022dc3760ecae59cbd644aea7bee143bbbe3f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5OZISTV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChBAf%2BGKmCGDhlgDUQ6DsgyqEOWT4y%2Fc4GEBT4ztMwZAIgdJI8A4VUYA%2BML%2FDpG33KivTQCVAhKb4oKpwRxbMnen0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLCGFWR9Us3ILXc3UCrcA79Tn6WLXUlHqXYnso8bPupmR9L8DUq%2FWxHXz0JPSSzMeSnqKa9Z4fZncXjvqSVmNUe4cYpGnoaufHxgYyCcNdqei2mRyMnlNcFC64RZGPDLwGb%2FvuMpWf8BH9BYT3I8SEs1fJVqNIJ1G%2B7WTYzhE9axBCcCJB7%2Bix5yYdgyVYjxrTIn5zeroWQPkzuDF3NOdEOvAHToQYhZdpQ7AuHecjkCdRBxyD6MWXifVlnQknsYe7r0lrFn8pJL3CNPDkPW67%2FsCaYA14cGdCkefInZ7dQmWkJ0RVY%2F9RoRy59SQY32DZjxzUX0%2Bk%2FB2VZQT1JtGV5VPgwpF5BCsEpLs5eJErrQPE40BZJFPJYWMQwsrLfq1xPlyOLxoQLCGJFFBy6ch67TVjSDtUrosmTLHpbJ9eWh3OFHxf0G2%2FAv6FdbR7blXdKbJVsOPrgYxOw0NLzTEIbnMMy2gLVwON3rEfdx314ZMZ6cK4fnM6zfvGEUU46hr1jvTI7HI1N2yrcCXaNv7i7TzQr5Zi1MxOPk3Z78YlIhMRv1k5OtHqty7A1xEPjmChJeXOmONuzz6Ie%2BXvNEFnvyP9hfmrDqBgtJlEMeWng9kdhzrY%2BOQrH2hYEyUCihpzYLkFG%2FwXrp1YpuMPOIx8IGOqUBu2kVK4RGOEFvWQ3MSuGRRqACQET6dBZNzqNpwDt18nvk2fMBodP9EuD5aIU0z3a2Tkj3LwX2zcvArQa0yX23mMlsKKe7tIdrmuU%2BWlzVaJ032Rh3Kg%2F%2B3zEXp0YGQ5P7PD6xsWzGeDi8GUOQxqeR6M108GjhQNvmT4r%2B0GbsagG1s8tLMsqKyG7dImu1lky3rAY%2Bw4sfPBXKqgEVhtXXUlqxzNHI&X-Amz-Signature=cb06babdc1cab0b71dde7add5efbec72e650a0d17c3dea53486d1227fe872cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
