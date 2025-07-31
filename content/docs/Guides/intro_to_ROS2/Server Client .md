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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J4FB7P6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYX%2FuQLc%2FYQpehd7YUByKRs%2BEhqLFMKxcTsRGa%2BLd4EAiEA%2BrNW95aaAVTKSywUBYDsdDq0153LqKdpz5q9YuGqUEoqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3jitwvbhDW7QLJLyrcA9guckMiipHimAz5GlVJcGHOVdTwVDTLHJLz%2FVZnU3vixZP3JWug86YfFQb%2FnEkzdd%2Fnl6LOH6mqR5UpyMt1WTgMebtSEvUeqLNa%2FQArwT5IGa4LqAYPyQ9OViG%2BtZtgS8DJfXILsVEU8MTb2QFg40QKU02b%2Fy5bR5On90IvsxrGHWka2QrSWuXNO6V%2FLBNUQJe4Y0hQF%2F8wzzPDZpduRHMghPMk8IB4RRTQ%2FOpxQbZRgaIA5IS6VsKxbCEKjyJDFAZMnG6qBw%2FjznILnkt%2FcMMF0hagrkR4S21w7SVVCSb1ZAJu%2BXlz7%2FYKi%2FwWxe8wi8KqSQoz%2Fgjsh4WR5f50q9K2YrhuACNv%2BXcGeZ8D13DHDCHjz6zTERHkLvimEo5SARuVFF9ig9WVkcFjDM%2BMLT0gUX4dNjke13N9UcBTCinsouHsRuzGcEP9b3XDyKJ7iErcTuLWgV6T5SQ6lbtL%2FWIQQ3pYm%2Fz2pVWdmuD9LfreWg6gKE3cK9nAo%2BHkTqwdKelCLKfK95eou8D2wqAK9IlNP1pxsjXrBAq9J4up8Y7bGm%2BsMlDbnNoqngom1ESRxTCNQT1IBmaYEJ7zHWxhPzLPFIKPLjBynIRdhRu%2FEufVtD39wzVOtkdMsX1MMKCZrMQGOqUBGQD79nKXsQb9XN34c6RvBp3PIdqjgmq%2FT%2B88BoK8dZCz%2F0LGdfAlqDWUpgAL%2FNUMq5vB2W3kY2kphwTCQVHpTjgsqMWOaz4fVR%2BXygoxek3qaWYAU4LAd3wAhpsKAPlH%2FPXSy23BXjgUMUv8xHt4HE3zmI7MYxFdEZAZ2ng9xJ3OlKGbq2X25tFYQhc2kUoDDzVojg5UhBDlNlS2qr0b8XyYwMXp&X-Amz-Signature=afd1967a3033a3c96e27512585d48367292d9d3afe19eaef582f4ca6cbaa6226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J4FB7P6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYX%2FuQLc%2FYQpehd7YUByKRs%2BEhqLFMKxcTsRGa%2BLd4EAiEA%2BrNW95aaAVTKSywUBYDsdDq0153LqKdpz5q9YuGqUEoqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3jitwvbhDW7QLJLyrcA9guckMiipHimAz5GlVJcGHOVdTwVDTLHJLz%2FVZnU3vixZP3JWug86YfFQb%2FnEkzdd%2Fnl6LOH6mqR5UpyMt1WTgMebtSEvUeqLNa%2FQArwT5IGa4LqAYPyQ9OViG%2BtZtgS8DJfXILsVEU8MTb2QFg40QKU02b%2Fy5bR5On90IvsxrGHWka2QrSWuXNO6V%2FLBNUQJe4Y0hQF%2F8wzzPDZpduRHMghPMk8IB4RRTQ%2FOpxQbZRgaIA5IS6VsKxbCEKjyJDFAZMnG6qBw%2FjznILnkt%2FcMMF0hagrkR4S21w7SVVCSb1ZAJu%2BXlz7%2FYKi%2FwWxe8wi8KqSQoz%2Fgjsh4WR5f50q9K2YrhuACNv%2BXcGeZ8D13DHDCHjz6zTERHkLvimEo5SARuVFF9ig9WVkcFjDM%2BMLT0gUX4dNjke13N9UcBTCinsouHsRuzGcEP9b3XDyKJ7iErcTuLWgV6T5SQ6lbtL%2FWIQQ3pYm%2Fz2pVWdmuD9LfreWg6gKE3cK9nAo%2BHkTqwdKelCLKfK95eou8D2wqAK9IlNP1pxsjXrBAq9J4up8Y7bGm%2BsMlDbnNoqngom1ESRxTCNQT1IBmaYEJ7zHWxhPzLPFIKPLjBynIRdhRu%2FEufVtD39wzVOtkdMsX1MMKCZrMQGOqUBGQD79nKXsQb9XN34c6RvBp3PIdqjgmq%2FT%2B88BoK8dZCz%2F0LGdfAlqDWUpgAL%2FNUMq5vB2W3kY2kphwTCQVHpTjgsqMWOaz4fVR%2BXygoxek3qaWYAU4LAd3wAhpsKAPlH%2FPXSy23BXjgUMUv8xHt4HE3zmI7MYxFdEZAZ2ng9xJ3OlKGbq2X25tFYQhc2kUoDDzVojg5UhBDlNlS2qr0b8XyYwMXp&X-Amz-Signature=10f0842d50285a0577613103b9df320e57c69c697b96d6e5a88c5f8dd634c34c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J4FB7P6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYX%2FuQLc%2FYQpehd7YUByKRs%2BEhqLFMKxcTsRGa%2BLd4EAiEA%2BrNW95aaAVTKSywUBYDsdDq0153LqKdpz5q9YuGqUEoqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3jitwvbhDW7QLJLyrcA9guckMiipHimAz5GlVJcGHOVdTwVDTLHJLz%2FVZnU3vixZP3JWug86YfFQb%2FnEkzdd%2Fnl6LOH6mqR5UpyMt1WTgMebtSEvUeqLNa%2FQArwT5IGa4LqAYPyQ9OViG%2BtZtgS8DJfXILsVEU8MTb2QFg40QKU02b%2Fy5bR5On90IvsxrGHWka2QrSWuXNO6V%2FLBNUQJe4Y0hQF%2F8wzzPDZpduRHMghPMk8IB4RRTQ%2FOpxQbZRgaIA5IS6VsKxbCEKjyJDFAZMnG6qBw%2FjznILnkt%2FcMMF0hagrkR4S21w7SVVCSb1ZAJu%2BXlz7%2FYKi%2FwWxe8wi8KqSQoz%2Fgjsh4WR5f50q9K2YrhuACNv%2BXcGeZ8D13DHDCHjz6zTERHkLvimEo5SARuVFF9ig9WVkcFjDM%2BMLT0gUX4dNjke13N9UcBTCinsouHsRuzGcEP9b3XDyKJ7iErcTuLWgV6T5SQ6lbtL%2FWIQQ3pYm%2Fz2pVWdmuD9LfreWg6gKE3cK9nAo%2BHkTqwdKelCLKfK95eou8D2wqAK9IlNP1pxsjXrBAq9J4up8Y7bGm%2BsMlDbnNoqngom1ESRxTCNQT1IBmaYEJ7zHWxhPzLPFIKPLjBynIRdhRu%2FEufVtD39wzVOtkdMsX1MMKCZrMQGOqUBGQD79nKXsQb9XN34c6RvBp3PIdqjgmq%2FT%2B88BoK8dZCz%2F0LGdfAlqDWUpgAL%2FNUMq5vB2W3kY2kphwTCQVHpTjgsqMWOaz4fVR%2BXygoxek3qaWYAU4LAd3wAhpsKAPlH%2FPXSy23BXjgUMUv8xHt4HE3zmI7MYxFdEZAZ2ng9xJ3OlKGbq2X25tFYQhc2kUoDDzVojg5UhBDlNlS2qr0b8XyYwMXp&X-Amz-Signature=0b953d4a9990a822b6ad9449f5d47d5c17a30b6066474d12e761fa73c49612af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J4FB7P6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYX%2FuQLc%2FYQpehd7YUByKRs%2BEhqLFMKxcTsRGa%2BLd4EAiEA%2BrNW95aaAVTKSywUBYDsdDq0153LqKdpz5q9YuGqUEoqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3jitwvbhDW7QLJLyrcA9guckMiipHimAz5GlVJcGHOVdTwVDTLHJLz%2FVZnU3vixZP3JWug86YfFQb%2FnEkzdd%2Fnl6LOH6mqR5UpyMt1WTgMebtSEvUeqLNa%2FQArwT5IGa4LqAYPyQ9OViG%2BtZtgS8DJfXILsVEU8MTb2QFg40QKU02b%2Fy5bR5On90IvsxrGHWka2QrSWuXNO6V%2FLBNUQJe4Y0hQF%2F8wzzPDZpduRHMghPMk8IB4RRTQ%2FOpxQbZRgaIA5IS6VsKxbCEKjyJDFAZMnG6qBw%2FjznILnkt%2FcMMF0hagrkR4S21w7SVVCSb1ZAJu%2BXlz7%2FYKi%2FwWxe8wi8KqSQoz%2Fgjsh4WR5f50q9K2YrhuACNv%2BXcGeZ8D13DHDCHjz6zTERHkLvimEo5SARuVFF9ig9WVkcFjDM%2BMLT0gUX4dNjke13N9UcBTCinsouHsRuzGcEP9b3XDyKJ7iErcTuLWgV6T5SQ6lbtL%2FWIQQ3pYm%2Fz2pVWdmuD9LfreWg6gKE3cK9nAo%2BHkTqwdKelCLKfK95eou8D2wqAK9IlNP1pxsjXrBAq9J4up8Y7bGm%2BsMlDbnNoqngom1ESRxTCNQT1IBmaYEJ7zHWxhPzLPFIKPLjBynIRdhRu%2FEufVtD39wzVOtkdMsX1MMKCZrMQGOqUBGQD79nKXsQb9XN34c6RvBp3PIdqjgmq%2FT%2B88BoK8dZCz%2F0LGdfAlqDWUpgAL%2FNUMq5vB2W3kY2kphwTCQVHpTjgsqMWOaz4fVR%2BXygoxek3qaWYAU4LAd3wAhpsKAPlH%2FPXSy23BXjgUMUv8xHt4HE3zmI7MYxFdEZAZ2ng9xJ3OlKGbq2X25tFYQhc2kUoDDzVojg5UhBDlNlS2qr0b8XyYwMXp&X-Amz-Signature=f9a0fa3968a799bdc2f3702a586aacaba22d7e093dbf908a74f87f99a26572c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J4FB7P6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYX%2FuQLc%2FYQpehd7YUByKRs%2BEhqLFMKxcTsRGa%2BLd4EAiEA%2BrNW95aaAVTKSywUBYDsdDq0153LqKdpz5q9YuGqUEoqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3jitwvbhDW7QLJLyrcA9guckMiipHimAz5GlVJcGHOVdTwVDTLHJLz%2FVZnU3vixZP3JWug86YfFQb%2FnEkzdd%2Fnl6LOH6mqR5UpyMt1WTgMebtSEvUeqLNa%2FQArwT5IGa4LqAYPyQ9OViG%2BtZtgS8DJfXILsVEU8MTb2QFg40QKU02b%2Fy5bR5On90IvsxrGHWka2QrSWuXNO6V%2FLBNUQJe4Y0hQF%2F8wzzPDZpduRHMghPMk8IB4RRTQ%2FOpxQbZRgaIA5IS6VsKxbCEKjyJDFAZMnG6qBw%2FjznILnkt%2FcMMF0hagrkR4S21w7SVVCSb1ZAJu%2BXlz7%2FYKi%2FwWxe8wi8KqSQoz%2Fgjsh4WR5f50q9K2YrhuACNv%2BXcGeZ8D13DHDCHjz6zTERHkLvimEo5SARuVFF9ig9WVkcFjDM%2BMLT0gUX4dNjke13N9UcBTCinsouHsRuzGcEP9b3XDyKJ7iErcTuLWgV6T5SQ6lbtL%2FWIQQ3pYm%2Fz2pVWdmuD9LfreWg6gKE3cK9nAo%2BHkTqwdKelCLKfK95eou8D2wqAK9IlNP1pxsjXrBAq9J4up8Y7bGm%2BsMlDbnNoqngom1ESRxTCNQT1IBmaYEJ7zHWxhPzLPFIKPLjBynIRdhRu%2FEufVtD39wzVOtkdMsX1MMKCZrMQGOqUBGQD79nKXsQb9XN34c6RvBp3PIdqjgmq%2FT%2B88BoK8dZCz%2F0LGdfAlqDWUpgAL%2FNUMq5vB2W3kY2kphwTCQVHpTjgsqMWOaz4fVR%2BXygoxek3qaWYAU4LAd3wAhpsKAPlH%2FPXSy23BXjgUMUv8xHt4HE3zmI7MYxFdEZAZ2ng9xJ3OlKGbq2X25tFYQhc2kUoDDzVojg5UhBDlNlS2qr0b8XyYwMXp&X-Amz-Signature=f3e0d5560c75a3563c8e5628cbf77a25b5305d8f2c2690909584cb4c057a8a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
