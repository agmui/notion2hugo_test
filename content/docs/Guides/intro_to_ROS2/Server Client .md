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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623P5L4MQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMB%2BfN7ejPhvEBy4uTFuxU45MjocVIUITWIvcMw64hhAIhAKFO%2FZL3M9ON6gv5tUIB7xNzTreRwgEMtH3Hx%2FtXh9dxKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLyoWLM2BNDxAlPIEq3AOxxhrfKSHRKrVJP8X4VhzomHVGW8AfjUCFF6OVi33wvHqMI%2BPWCiI6i8v74eJicWhP3hq7Hy3DESibQryfGyPDX1JQcT0cO8Nzblb0ABcSQgi9pbanX2Jx0XUNhN4Rog55ospEU23yc0GSDSee6JxGYAPbLyG9mfHH3T2Ef0OKDVnN3%2FtSoYB%2F%2BhFlEy8BHqkmmh1HLq%2BjwSTkfLMJ5TquHM5v7PTKGk5BuTLn7vq7VoqvdZUnODDdLLmBxu0ElzgcD7mgdXiRGPUjCLwMedYkmLXFREBMZbrgqk22IHZC9%2FLlpW0%2BnIAlTcup%2FJH5mmcMQS%2Bgq6AzqTlP68wSEpNJzrI6oKxCTxlYZSFxFmDF%2BPHuAvql7O7aMz3nzTxNRE1eS%2Fuoj6Z21UNbZ3aDA3x%2FdwKuSo28IYyzBF3pAxjJTpVZPEgyqFKUVEoZfkNgrEKzr0wvy1p3I86Vl0J3%2B91QZxZ8%2FXTRjNL2ZKmNJc08L%2BkVd5CNYLbmM5OZisj2T6evYAYFkhiTg0MV%2F1fvfCQrIOfrCN2Te8HVjWTojZyv6LI0HZye5mahgM8xp8qJe9kwnm7vCRtFhFd0z76WUT81IM%2F0a7uxCdgF3dg6LhCl5jZqPruTcQf7GdSHsDDNyoG%2FBjqkASHyshYrKeVrdYMUVSM7rx7aAQ3F5OD0Azf7vQtF5hCnbBsBh%2BrRr7FIEiBZcvwUk9vIrljaOJJzhZq0wzyvJkP8wXk0TnqIGP%2BbbxCJaeKUWNAx4QGtLYfXc%2BoIqEPVehgZ23Q3FBwQauNCt3Jkt4jMQmmStjfbOteL6wt%2FAsCkNU9Il53syAwRftDXG62w%2B4l1cOs6cM0Db5HHRd6pjV1Dk9IN&X-Amz-Signature=956413460eefca15dc1cbe3dbbae9b771f6b1a8acf2e40138bc9a8da22eb52f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623P5L4MQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMB%2BfN7ejPhvEBy4uTFuxU45MjocVIUITWIvcMw64hhAIhAKFO%2FZL3M9ON6gv5tUIB7xNzTreRwgEMtH3Hx%2FtXh9dxKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLyoWLM2BNDxAlPIEq3AOxxhrfKSHRKrVJP8X4VhzomHVGW8AfjUCFF6OVi33wvHqMI%2BPWCiI6i8v74eJicWhP3hq7Hy3DESibQryfGyPDX1JQcT0cO8Nzblb0ABcSQgi9pbanX2Jx0XUNhN4Rog55ospEU23yc0GSDSee6JxGYAPbLyG9mfHH3T2Ef0OKDVnN3%2FtSoYB%2F%2BhFlEy8BHqkmmh1HLq%2BjwSTkfLMJ5TquHM5v7PTKGk5BuTLn7vq7VoqvdZUnODDdLLmBxu0ElzgcD7mgdXiRGPUjCLwMedYkmLXFREBMZbrgqk22IHZC9%2FLlpW0%2BnIAlTcup%2FJH5mmcMQS%2Bgq6AzqTlP68wSEpNJzrI6oKxCTxlYZSFxFmDF%2BPHuAvql7O7aMz3nzTxNRE1eS%2Fuoj6Z21UNbZ3aDA3x%2FdwKuSo28IYyzBF3pAxjJTpVZPEgyqFKUVEoZfkNgrEKzr0wvy1p3I86Vl0J3%2B91QZxZ8%2FXTRjNL2ZKmNJc08L%2BkVd5CNYLbmM5OZisj2T6evYAYFkhiTg0MV%2F1fvfCQrIOfrCN2Te8HVjWTojZyv6LI0HZye5mahgM8xp8qJe9kwnm7vCRtFhFd0z76WUT81IM%2F0a7uxCdgF3dg6LhCl5jZqPruTcQf7GdSHsDDNyoG%2FBjqkASHyshYrKeVrdYMUVSM7rx7aAQ3F5OD0Azf7vQtF5hCnbBsBh%2BrRr7FIEiBZcvwUk9vIrljaOJJzhZq0wzyvJkP8wXk0TnqIGP%2BbbxCJaeKUWNAx4QGtLYfXc%2BoIqEPVehgZ23Q3FBwQauNCt3Jkt4jMQmmStjfbOteL6wt%2FAsCkNU9Il53syAwRftDXG62w%2B4l1cOs6cM0Db5HHRd6pjV1Dk9IN&X-Amz-Signature=27771ec558865530d24f31d78fb189bcae8b53c07fa5189d253a0b938a68ad0b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623P5L4MQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMB%2BfN7ejPhvEBy4uTFuxU45MjocVIUITWIvcMw64hhAIhAKFO%2FZL3M9ON6gv5tUIB7xNzTreRwgEMtH3Hx%2FtXh9dxKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLyoWLM2BNDxAlPIEq3AOxxhrfKSHRKrVJP8X4VhzomHVGW8AfjUCFF6OVi33wvHqMI%2BPWCiI6i8v74eJicWhP3hq7Hy3DESibQryfGyPDX1JQcT0cO8Nzblb0ABcSQgi9pbanX2Jx0XUNhN4Rog55ospEU23yc0GSDSee6JxGYAPbLyG9mfHH3T2Ef0OKDVnN3%2FtSoYB%2F%2BhFlEy8BHqkmmh1HLq%2BjwSTkfLMJ5TquHM5v7PTKGk5BuTLn7vq7VoqvdZUnODDdLLmBxu0ElzgcD7mgdXiRGPUjCLwMedYkmLXFREBMZbrgqk22IHZC9%2FLlpW0%2BnIAlTcup%2FJH5mmcMQS%2Bgq6AzqTlP68wSEpNJzrI6oKxCTxlYZSFxFmDF%2BPHuAvql7O7aMz3nzTxNRE1eS%2Fuoj6Z21UNbZ3aDA3x%2FdwKuSo28IYyzBF3pAxjJTpVZPEgyqFKUVEoZfkNgrEKzr0wvy1p3I86Vl0J3%2B91QZxZ8%2FXTRjNL2ZKmNJc08L%2BkVd5CNYLbmM5OZisj2T6evYAYFkhiTg0MV%2F1fvfCQrIOfrCN2Te8HVjWTojZyv6LI0HZye5mahgM8xp8qJe9kwnm7vCRtFhFd0z76WUT81IM%2F0a7uxCdgF3dg6LhCl5jZqPruTcQf7GdSHsDDNyoG%2FBjqkASHyshYrKeVrdYMUVSM7rx7aAQ3F5OD0Azf7vQtF5hCnbBsBh%2BrRr7FIEiBZcvwUk9vIrljaOJJzhZq0wzyvJkP8wXk0TnqIGP%2BbbxCJaeKUWNAx4QGtLYfXc%2BoIqEPVehgZ23Q3FBwQauNCt3Jkt4jMQmmStjfbOteL6wt%2FAsCkNU9Il53syAwRftDXG62w%2B4l1cOs6cM0Db5HHRd6pjV1Dk9IN&X-Amz-Signature=65bd882e361fbb8cba88d463c69d6c9c872a3d67e35b41c773e7ae8c909b8638&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623P5L4MQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMB%2BfN7ejPhvEBy4uTFuxU45MjocVIUITWIvcMw64hhAIhAKFO%2FZL3M9ON6gv5tUIB7xNzTreRwgEMtH3Hx%2FtXh9dxKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLyoWLM2BNDxAlPIEq3AOxxhrfKSHRKrVJP8X4VhzomHVGW8AfjUCFF6OVi33wvHqMI%2BPWCiI6i8v74eJicWhP3hq7Hy3DESibQryfGyPDX1JQcT0cO8Nzblb0ABcSQgi9pbanX2Jx0XUNhN4Rog55ospEU23yc0GSDSee6JxGYAPbLyG9mfHH3T2Ef0OKDVnN3%2FtSoYB%2F%2BhFlEy8BHqkmmh1HLq%2BjwSTkfLMJ5TquHM5v7PTKGk5BuTLn7vq7VoqvdZUnODDdLLmBxu0ElzgcD7mgdXiRGPUjCLwMedYkmLXFREBMZbrgqk22IHZC9%2FLlpW0%2BnIAlTcup%2FJH5mmcMQS%2Bgq6AzqTlP68wSEpNJzrI6oKxCTxlYZSFxFmDF%2BPHuAvql7O7aMz3nzTxNRE1eS%2Fuoj6Z21UNbZ3aDA3x%2FdwKuSo28IYyzBF3pAxjJTpVZPEgyqFKUVEoZfkNgrEKzr0wvy1p3I86Vl0J3%2B91QZxZ8%2FXTRjNL2ZKmNJc08L%2BkVd5CNYLbmM5OZisj2T6evYAYFkhiTg0MV%2F1fvfCQrIOfrCN2Te8HVjWTojZyv6LI0HZye5mahgM8xp8qJe9kwnm7vCRtFhFd0z76WUT81IM%2F0a7uxCdgF3dg6LhCl5jZqPruTcQf7GdSHsDDNyoG%2FBjqkASHyshYrKeVrdYMUVSM7rx7aAQ3F5OD0Azf7vQtF5hCnbBsBh%2BrRr7FIEiBZcvwUk9vIrljaOJJzhZq0wzyvJkP8wXk0TnqIGP%2BbbxCJaeKUWNAx4QGtLYfXc%2BoIqEPVehgZ23Q3FBwQauNCt3Jkt4jMQmmStjfbOteL6wt%2FAsCkNU9Il53syAwRftDXG62w%2B4l1cOs6cM0Db5HHRd6pjV1Dk9IN&X-Amz-Signature=d11c52d75e2f57d475b55ad6d09914a2466746cbbc43717b434832ccbd171587&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623P5L4MQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMB%2BfN7ejPhvEBy4uTFuxU45MjocVIUITWIvcMw64hhAIhAKFO%2FZL3M9ON6gv5tUIB7xNzTreRwgEMtH3Hx%2FtXh9dxKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLyoWLM2BNDxAlPIEq3AOxxhrfKSHRKrVJP8X4VhzomHVGW8AfjUCFF6OVi33wvHqMI%2BPWCiI6i8v74eJicWhP3hq7Hy3DESibQryfGyPDX1JQcT0cO8Nzblb0ABcSQgi9pbanX2Jx0XUNhN4Rog55ospEU23yc0GSDSee6JxGYAPbLyG9mfHH3T2Ef0OKDVnN3%2FtSoYB%2F%2BhFlEy8BHqkmmh1HLq%2BjwSTkfLMJ5TquHM5v7PTKGk5BuTLn7vq7VoqvdZUnODDdLLmBxu0ElzgcD7mgdXiRGPUjCLwMedYkmLXFREBMZbrgqk22IHZC9%2FLlpW0%2BnIAlTcup%2FJH5mmcMQS%2Bgq6AzqTlP68wSEpNJzrI6oKxCTxlYZSFxFmDF%2BPHuAvql7O7aMz3nzTxNRE1eS%2Fuoj6Z21UNbZ3aDA3x%2FdwKuSo28IYyzBF3pAxjJTpVZPEgyqFKUVEoZfkNgrEKzr0wvy1p3I86Vl0J3%2B91QZxZ8%2FXTRjNL2ZKmNJc08L%2BkVd5CNYLbmM5OZisj2T6evYAYFkhiTg0MV%2F1fvfCQrIOfrCN2Te8HVjWTojZyv6LI0HZye5mahgM8xp8qJe9kwnm7vCRtFhFd0z76WUT81IM%2F0a7uxCdgF3dg6LhCl5jZqPruTcQf7GdSHsDDNyoG%2FBjqkASHyshYrKeVrdYMUVSM7rx7aAQ3F5OD0Azf7vQtF5hCnbBsBh%2BrRr7FIEiBZcvwUk9vIrljaOJJzhZq0wzyvJkP8wXk0TnqIGP%2BbbxCJaeKUWNAx4QGtLYfXc%2BoIqEPVehgZ23Q3FBwQauNCt3Jkt4jMQmmStjfbOteL6wt%2FAsCkNU9Il53syAwRftDXG62w%2B4l1cOs6cM0Db5HHRd6pjV1Dk9IN&X-Amz-Signature=af4d5558cea4cef632cae9ef226a3bb3c5844c9e54f549a24b8f138bdf8b07a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
