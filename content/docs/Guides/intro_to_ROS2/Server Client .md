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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KIEFC36%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYPyoFR1rTT4Lo6qKyw%2Fmwc3E7UDbXmJuubk9%2BjWWo7gIhAP5w2QJi0%2F0WTg9QxVzR5vELHuvOZzFsb1EWvoHmdItWKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz61DW0QSGpqGVc6GUq3AN0s5JW0rO7A7AKsRkhlPmhm7PjFPl3I%2FspsohFF%2FtNxe4WZqYZTjlA4U0mu%2FCzPW%2F0bxOadBjKLC4xFYJ5AiJcqA%2B%2ByokusSia2gWdysxLid6GtCltV9UNc3268fsbs%2FOuYdwUIDj6YqRs6TF8aJStP%2FqzlVl%2B7owiPSrubS8EtdmPzYRImHjlvHGpBUBEzI2peS0bXtm6IN7VSpaur1%2BDGWIN%2F5uCEk36JgRwT92goBx6NmWnI5egV0SPYiW8a1AXGmxqwU4n06XSRo7pt8qoNRgWa6qcM0oLjXFFFt2uH74U2QYjK%2BTbjGC6O05rNDFk5hUDFWU8Dh2MFsNNviSel3M7lVmRABW5OiPQ17ooUfsAjVQ6JDecocBmmzDzcexDgsC%2FmsmoTCaZMtUIacNRRb3P4f7Ke4CFbMD8ZrNcMKdGf9lWBm8kDT%2BT5TOVhuDAtHA6nubR%2F5c0d0c%2F1bDX3fioLb18RDEplsgbmycLM5qGeLzLWfpKvTD6pmoWrm%2B5i2rkigLc83NNsKPJfXtQJGKf%2F8ctuEPbTILiv1hHpg6ZyJUtpKDZaWvNjtEwADIqzmymdQ%2FvBl5qMCdyBIWPJe5crvyPYQavKpASN809qebakh06V6sOct7dVzDhkOPBBjqkAYT5ggGYKJfyrKidwx81G8iRNx%2FK2DyCA6%2FZHM4cgyaK3IH0bAiBPpWhbjwG%2BFSi2%2BnZFizKymKauZDA3k14rZc1e%2B3dt5doqxDHUanBg%2Fx1PNLnNsuQ0XIGBydMUPu2WXI8eWV7IpO461SESSx8N3vXVKoERDNRJJjuGkqk5K6CyZu08NBcAbbdTNGLQ7TAbFsQhNntmZmdleFJp3ufMm5OCC61&X-Amz-Signature=9a841ab378ffb6cec2a47bb9fbba7c2b89bb439d5e0c090bbd8fad57b3d92456&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KIEFC36%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYPyoFR1rTT4Lo6qKyw%2Fmwc3E7UDbXmJuubk9%2BjWWo7gIhAP5w2QJi0%2F0WTg9QxVzR5vELHuvOZzFsb1EWvoHmdItWKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz61DW0QSGpqGVc6GUq3AN0s5JW0rO7A7AKsRkhlPmhm7PjFPl3I%2FspsohFF%2FtNxe4WZqYZTjlA4U0mu%2FCzPW%2F0bxOadBjKLC4xFYJ5AiJcqA%2B%2ByokusSia2gWdysxLid6GtCltV9UNc3268fsbs%2FOuYdwUIDj6YqRs6TF8aJStP%2FqzlVl%2B7owiPSrubS8EtdmPzYRImHjlvHGpBUBEzI2peS0bXtm6IN7VSpaur1%2BDGWIN%2F5uCEk36JgRwT92goBx6NmWnI5egV0SPYiW8a1AXGmxqwU4n06XSRo7pt8qoNRgWa6qcM0oLjXFFFt2uH74U2QYjK%2BTbjGC6O05rNDFk5hUDFWU8Dh2MFsNNviSel3M7lVmRABW5OiPQ17ooUfsAjVQ6JDecocBmmzDzcexDgsC%2FmsmoTCaZMtUIacNRRb3P4f7Ke4CFbMD8ZrNcMKdGf9lWBm8kDT%2BT5TOVhuDAtHA6nubR%2F5c0d0c%2F1bDX3fioLb18RDEplsgbmycLM5qGeLzLWfpKvTD6pmoWrm%2B5i2rkigLc83NNsKPJfXtQJGKf%2F8ctuEPbTILiv1hHpg6ZyJUtpKDZaWvNjtEwADIqzmymdQ%2FvBl5qMCdyBIWPJe5crvyPYQavKpASN809qebakh06V6sOct7dVzDhkOPBBjqkAYT5ggGYKJfyrKidwx81G8iRNx%2FK2DyCA6%2FZHM4cgyaK3IH0bAiBPpWhbjwG%2BFSi2%2BnZFizKymKauZDA3k14rZc1e%2B3dt5doqxDHUanBg%2Fx1PNLnNsuQ0XIGBydMUPu2WXI8eWV7IpO461SESSx8N3vXVKoERDNRJJjuGkqk5K6CyZu08NBcAbbdTNGLQ7TAbFsQhNntmZmdleFJp3ufMm5OCC61&X-Amz-Signature=238d9c6fbbb883163aa2a55073fc587d47ad9e0c5bb2190090f39b2ff849694d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KIEFC36%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYPyoFR1rTT4Lo6qKyw%2Fmwc3E7UDbXmJuubk9%2BjWWo7gIhAP5w2QJi0%2F0WTg9QxVzR5vELHuvOZzFsb1EWvoHmdItWKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz61DW0QSGpqGVc6GUq3AN0s5JW0rO7A7AKsRkhlPmhm7PjFPl3I%2FspsohFF%2FtNxe4WZqYZTjlA4U0mu%2FCzPW%2F0bxOadBjKLC4xFYJ5AiJcqA%2B%2ByokusSia2gWdysxLid6GtCltV9UNc3268fsbs%2FOuYdwUIDj6YqRs6TF8aJStP%2FqzlVl%2B7owiPSrubS8EtdmPzYRImHjlvHGpBUBEzI2peS0bXtm6IN7VSpaur1%2BDGWIN%2F5uCEk36JgRwT92goBx6NmWnI5egV0SPYiW8a1AXGmxqwU4n06XSRo7pt8qoNRgWa6qcM0oLjXFFFt2uH74U2QYjK%2BTbjGC6O05rNDFk5hUDFWU8Dh2MFsNNviSel3M7lVmRABW5OiPQ17ooUfsAjVQ6JDecocBmmzDzcexDgsC%2FmsmoTCaZMtUIacNRRb3P4f7Ke4CFbMD8ZrNcMKdGf9lWBm8kDT%2BT5TOVhuDAtHA6nubR%2F5c0d0c%2F1bDX3fioLb18RDEplsgbmycLM5qGeLzLWfpKvTD6pmoWrm%2B5i2rkigLc83NNsKPJfXtQJGKf%2F8ctuEPbTILiv1hHpg6ZyJUtpKDZaWvNjtEwADIqzmymdQ%2FvBl5qMCdyBIWPJe5crvyPYQavKpASN809qebakh06V6sOct7dVzDhkOPBBjqkAYT5ggGYKJfyrKidwx81G8iRNx%2FK2DyCA6%2FZHM4cgyaK3IH0bAiBPpWhbjwG%2BFSi2%2BnZFizKymKauZDA3k14rZc1e%2B3dt5doqxDHUanBg%2Fx1PNLnNsuQ0XIGBydMUPu2WXI8eWV7IpO461SESSx8N3vXVKoERDNRJJjuGkqk5K6CyZu08NBcAbbdTNGLQ7TAbFsQhNntmZmdleFJp3ufMm5OCC61&X-Amz-Signature=ae19806972ef7ea9a1e98a3a2dd8d74793b8c404e970d3533db937d32ad96d1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KIEFC36%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYPyoFR1rTT4Lo6qKyw%2Fmwc3E7UDbXmJuubk9%2BjWWo7gIhAP5w2QJi0%2F0WTg9QxVzR5vELHuvOZzFsb1EWvoHmdItWKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz61DW0QSGpqGVc6GUq3AN0s5JW0rO7A7AKsRkhlPmhm7PjFPl3I%2FspsohFF%2FtNxe4WZqYZTjlA4U0mu%2FCzPW%2F0bxOadBjKLC4xFYJ5AiJcqA%2B%2ByokusSia2gWdysxLid6GtCltV9UNc3268fsbs%2FOuYdwUIDj6YqRs6TF8aJStP%2FqzlVl%2B7owiPSrubS8EtdmPzYRImHjlvHGpBUBEzI2peS0bXtm6IN7VSpaur1%2BDGWIN%2F5uCEk36JgRwT92goBx6NmWnI5egV0SPYiW8a1AXGmxqwU4n06XSRo7pt8qoNRgWa6qcM0oLjXFFFt2uH74U2QYjK%2BTbjGC6O05rNDFk5hUDFWU8Dh2MFsNNviSel3M7lVmRABW5OiPQ17ooUfsAjVQ6JDecocBmmzDzcexDgsC%2FmsmoTCaZMtUIacNRRb3P4f7Ke4CFbMD8ZrNcMKdGf9lWBm8kDT%2BT5TOVhuDAtHA6nubR%2F5c0d0c%2F1bDX3fioLb18RDEplsgbmycLM5qGeLzLWfpKvTD6pmoWrm%2B5i2rkigLc83NNsKPJfXtQJGKf%2F8ctuEPbTILiv1hHpg6ZyJUtpKDZaWvNjtEwADIqzmymdQ%2FvBl5qMCdyBIWPJe5crvyPYQavKpASN809qebakh06V6sOct7dVzDhkOPBBjqkAYT5ggGYKJfyrKidwx81G8iRNx%2FK2DyCA6%2FZHM4cgyaK3IH0bAiBPpWhbjwG%2BFSi2%2BnZFizKymKauZDA3k14rZc1e%2B3dt5doqxDHUanBg%2Fx1PNLnNsuQ0XIGBydMUPu2WXI8eWV7IpO461SESSx8N3vXVKoERDNRJJjuGkqk5K6CyZu08NBcAbbdTNGLQ7TAbFsQhNntmZmdleFJp3ufMm5OCC61&X-Amz-Signature=7f0b1a0061711c4c75b6070cd30b659ba7dcaeb96ed48ed8bcac2a4320308bbd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KIEFC36%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYPyoFR1rTT4Lo6qKyw%2Fmwc3E7UDbXmJuubk9%2BjWWo7gIhAP5w2QJi0%2F0WTg9QxVzR5vELHuvOZzFsb1EWvoHmdItWKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz61DW0QSGpqGVc6GUq3AN0s5JW0rO7A7AKsRkhlPmhm7PjFPl3I%2FspsohFF%2FtNxe4WZqYZTjlA4U0mu%2FCzPW%2F0bxOadBjKLC4xFYJ5AiJcqA%2B%2ByokusSia2gWdysxLid6GtCltV9UNc3268fsbs%2FOuYdwUIDj6YqRs6TF8aJStP%2FqzlVl%2B7owiPSrubS8EtdmPzYRImHjlvHGpBUBEzI2peS0bXtm6IN7VSpaur1%2BDGWIN%2F5uCEk36JgRwT92goBx6NmWnI5egV0SPYiW8a1AXGmxqwU4n06XSRo7pt8qoNRgWa6qcM0oLjXFFFt2uH74U2QYjK%2BTbjGC6O05rNDFk5hUDFWU8Dh2MFsNNviSel3M7lVmRABW5OiPQ17ooUfsAjVQ6JDecocBmmzDzcexDgsC%2FmsmoTCaZMtUIacNRRb3P4f7Ke4CFbMD8ZrNcMKdGf9lWBm8kDT%2BT5TOVhuDAtHA6nubR%2F5c0d0c%2F1bDX3fioLb18RDEplsgbmycLM5qGeLzLWfpKvTD6pmoWrm%2B5i2rkigLc83NNsKPJfXtQJGKf%2F8ctuEPbTILiv1hHpg6ZyJUtpKDZaWvNjtEwADIqzmymdQ%2FvBl5qMCdyBIWPJe5crvyPYQavKpASN809qebakh06V6sOct7dVzDhkOPBBjqkAYT5ggGYKJfyrKidwx81G8iRNx%2FK2DyCA6%2FZHM4cgyaK3IH0bAiBPpWhbjwG%2BFSi2%2BnZFizKymKauZDA3k14rZc1e%2B3dt5doqxDHUanBg%2Fx1PNLnNsuQ0XIGBydMUPu2WXI8eWV7IpO461SESSx8N3vXVKoERDNRJJjuGkqk5K6CyZu08NBcAbbdTNGLQ7TAbFsQhNntmZmdleFJp3ufMm5OCC61&X-Amz-Signature=b7d8f404ca3fee619060ca85eb6c0e73a49e5ed16d1801c6e72ff42c1cdbe54e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
