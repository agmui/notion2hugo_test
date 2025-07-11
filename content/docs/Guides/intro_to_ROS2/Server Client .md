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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIWGB2L4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUo7JDFf98CmgKfz3pwwbvuOR5jZ5JGTT8%2F4SMRy9o1wIgDoRzNZ1HXMPSenW8tbi%2B3Nt5%2BevN3gQd6AQzoq1tVO8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3EPcYaHMHabndgUyrcA9CM%2BId5vt5mW8QC3iRDUilKIdjX6Oq16mS0oYDMVaal%2FQDbC8GCyZNxNFexmvvl5oklgO1XcuQYrxsUQOiz56OEUxGmhoydnZLZnw3xpSxTMjA3mSL600rlVUMu28%2BujLSNAcux2UZ5oNFIYt0iZ9tA%2BXaC3o5vhQyGtKct2X1BRPmdsGTcj6K3WsM3Ot2BXpS3wZicFvduf5B0RtsctYholvzOwy9oe%2B59uIqjOlDDq2avUTUPvZFP6R9gy5%2BhB4gdP%2Bb%2Bc3VCc66CZPltmaNkqBxtS3xR0ImVkSm12Y%2BORq9%2FlZNkwegXpy2lh%2FXf2mv%2BNjBpfZttmY9b081dv5u2QEBqXE0T13OkZjcOofHPUD8NeDinn2mUXThbUlpRr96VdGyRfKmvoXA%2FUQOcLwA6FfwSJZcYaN1iXxjJ4%2ByVcX%2F0vnDiH%2FItDYqlU0YqyBK6SuhSN78LWaAfhU7jtW9IEs4Jb6%2FGv3Yloz9uY2ercsVl7wcOL2ja%2FjfEfubWjLenPQCx4SMNB083BpoV%2FU6SO7BU3ByeeTgX8axDkaFg3fIYoxD6BwalLVdwUOLTt%2FHEKkrfFZcTmWfRosAfZ9klPUMXI%2FquSsoPaV2Dik4aPnQoa%2BYVacz3EOFbMLuow8MGOqUBmLUoRhtUANQ05E9tyTKvCWPnj3d0Ksy3HCrzYd9Vs%2BkqUehvrR7XivEJ6q43C17%2Fr93mR8WMqa3WgpDukWBzmhQxyHl%2FQzORdLyzZeERrj5czm4OssswdrwNWpI90QEA3iyeKfq6eC23KfOOYyDVcGLXhp6IY3ERuaSLB4pHEuS8RZWB5YnAEk8txBPnKACzQeB%2F4uyTTq%2FPgIAumRmui7u97okV&X-Amz-Signature=7b65eced712b2ecb1f9cef7b96a68a9b66cc81bb076ea727b05cfdf29b2c76df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIWGB2L4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUo7JDFf98CmgKfz3pwwbvuOR5jZ5JGTT8%2F4SMRy9o1wIgDoRzNZ1HXMPSenW8tbi%2B3Nt5%2BevN3gQd6AQzoq1tVO8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3EPcYaHMHabndgUyrcA9CM%2BId5vt5mW8QC3iRDUilKIdjX6Oq16mS0oYDMVaal%2FQDbC8GCyZNxNFexmvvl5oklgO1XcuQYrxsUQOiz56OEUxGmhoydnZLZnw3xpSxTMjA3mSL600rlVUMu28%2BujLSNAcux2UZ5oNFIYt0iZ9tA%2BXaC3o5vhQyGtKct2X1BRPmdsGTcj6K3WsM3Ot2BXpS3wZicFvduf5B0RtsctYholvzOwy9oe%2B59uIqjOlDDq2avUTUPvZFP6R9gy5%2BhB4gdP%2Bb%2Bc3VCc66CZPltmaNkqBxtS3xR0ImVkSm12Y%2BORq9%2FlZNkwegXpy2lh%2FXf2mv%2BNjBpfZttmY9b081dv5u2QEBqXE0T13OkZjcOofHPUD8NeDinn2mUXThbUlpRr96VdGyRfKmvoXA%2FUQOcLwA6FfwSJZcYaN1iXxjJ4%2ByVcX%2F0vnDiH%2FItDYqlU0YqyBK6SuhSN78LWaAfhU7jtW9IEs4Jb6%2FGv3Yloz9uY2ercsVl7wcOL2ja%2FjfEfubWjLenPQCx4SMNB083BpoV%2FU6SO7BU3ByeeTgX8axDkaFg3fIYoxD6BwalLVdwUOLTt%2FHEKkrfFZcTmWfRosAfZ9klPUMXI%2FquSsoPaV2Dik4aPnQoa%2BYVacz3EOFbMLuow8MGOqUBmLUoRhtUANQ05E9tyTKvCWPnj3d0Ksy3HCrzYd9Vs%2BkqUehvrR7XivEJ6q43C17%2Fr93mR8WMqa3WgpDukWBzmhQxyHl%2FQzORdLyzZeERrj5czm4OssswdrwNWpI90QEA3iyeKfq6eC23KfOOYyDVcGLXhp6IY3ERuaSLB4pHEuS8RZWB5YnAEk8txBPnKACzQeB%2F4uyTTq%2FPgIAumRmui7u97okV&X-Amz-Signature=6d4b2c0eb15615c739e52f57444b5742f82db97d8d8b91e2cb13185ac1e16fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIWGB2L4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUo7JDFf98CmgKfz3pwwbvuOR5jZ5JGTT8%2F4SMRy9o1wIgDoRzNZ1HXMPSenW8tbi%2B3Nt5%2BevN3gQd6AQzoq1tVO8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3EPcYaHMHabndgUyrcA9CM%2BId5vt5mW8QC3iRDUilKIdjX6Oq16mS0oYDMVaal%2FQDbC8GCyZNxNFexmvvl5oklgO1XcuQYrxsUQOiz56OEUxGmhoydnZLZnw3xpSxTMjA3mSL600rlVUMu28%2BujLSNAcux2UZ5oNFIYt0iZ9tA%2BXaC3o5vhQyGtKct2X1BRPmdsGTcj6K3WsM3Ot2BXpS3wZicFvduf5B0RtsctYholvzOwy9oe%2B59uIqjOlDDq2avUTUPvZFP6R9gy5%2BhB4gdP%2Bb%2Bc3VCc66CZPltmaNkqBxtS3xR0ImVkSm12Y%2BORq9%2FlZNkwegXpy2lh%2FXf2mv%2BNjBpfZttmY9b081dv5u2QEBqXE0T13OkZjcOofHPUD8NeDinn2mUXThbUlpRr96VdGyRfKmvoXA%2FUQOcLwA6FfwSJZcYaN1iXxjJ4%2ByVcX%2F0vnDiH%2FItDYqlU0YqyBK6SuhSN78LWaAfhU7jtW9IEs4Jb6%2FGv3Yloz9uY2ercsVl7wcOL2ja%2FjfEfubWjLenPQCx4SMNB083BpoV%2FU6SO7BU3ByeeTgX8axDkaFg3fIYoxD6BwalLVdwUOLTt%2FHEKkrfFZcTmWfRosAfZ9klPUMXI%2FquSsoPaV2Dik4aPnQoa%2BYVacz3EOFbMLuow8MGOqUBmLUoRhtUANQ05E9tyTKvCWPnj3d0Ksy3HCrzYd9Vs%2BkqUehvrR7XivEJ6q43C17%2Fr93mR8WMqa3WgpDukWBzmhQxyHl%2FQzORdLyzZeERrj5czm4OssswdrwNWpI90QEA3iyeKfq6eC23KfOOYyDVcGLXhp6IY3ERuaSLB4pHEuS8RZWB5YnAEk8txBPnKACzQeB%2F4uyTTq%2FPgIAumRmui7u97okV&X-Amz-Signature=07ed33612e52f771140eb77944c80f783c260e80e2e04cbf9c777e2e323fc4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIWGB2L4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUo7JDFf98CmgKfz3pwwbvuOR5jZ5JGTT8%2F4SMRy9o1wIgDoRzNZ1HXMPSenW8tbi%2B3Nt5%2BevN3gQd6AQzoq1tVO8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3EPcYaHMHabndgUyrcA9CM%2BId5vt5mW8QC3iRDUilKIdjX6Oq16mS0oYDMVaal%2FQDbC8GCyZNxNFexmvvl5oklgO1XcuQYrxsUQOiz56OEUxGmhoydnZLZnw3xpSxTMjA3mSL600rlVUMu28%2BujLSNAcux2UZ5oNFIYt0iZ9tA%2BXaC3o5vhQyGtKct2X1BRPmdsGTcj6K3WsM3Ot2BXpS3wZicFvduf5B0RtsctYholvzOwy9oe%2B59uIqjOlDDq2avUTUPvZFP6R9gy5%2BhB4gdP%2Bb%2Bc3VCc66CZPltmaNkqBxtS3xR0ImVkSm12Y%2BORq9%2FlZNkwegXpy2lh%2FXf2mv%2BNjBpfZttmY9b081dv5u2QEBqXE0T13OkZjcOofHPUD8NeDinn2mUXThbUlpRr96VdGyRfKmvoXA%2FUQOcLwA6FfwSJZcYaN1iXxjJ4%2ByVcX%2F0vnDiH%2FItDYqlU0YqyBK6SuhSN78LWaAfhU7jtW9IEs4Jb6%2FGv3Yloz9uY2ercsVl7wcOL2ja%2FjfEfubWjLenPQCx4SMNB083BpoV%2FU6SO7BU3ByeeTgX8axDkaFg3fIYoxD6BwalLVdwUOLTt%2FHEKkrfFZcTmWfRosAfZ9klPUMXI%2FquSsoPaV2Dik4aPnQoa%2BYVacz3EOFbMLuow8MGOqUBmLUoRhtUANQ05E9tyTKvCWPnj3d0Ksy3HCrzYd9Vs%2BkqUehvrR7XivEJ6q43C17%2Fr93mR8WMqa3WgpDukWBzmhQxyHl%2FQzORdLyzZeERrj5czm4OssswdrwNWpI90QEA3iyeKfq6eC23KfOOYyDVcGLXhp6IY3ERuaSLB4pHEuS8RZWB5YnAEk8txBPnKACzQeB%2F4uyTTq%2FPgIAumRmui7u97okV&X-Amz-Signature=82fc8416b0b596d9d1edbc218cddd7082b1b06a4142c793ee1073ea2cb9da082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIWGB2L4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUo7JDFf98CmgKfz3pwwbvuOR5jZ5JGTT8%2F4SMRy9o1wIgDoRzNZ1HXMPSenW8tbi%2B3Nt5%2BevN3gQd6AQzoq1tVO8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3EPcYaHMHabndgUyrcA9CM%2BId5vt5mW8QC3iRDUilKIdjX6Oq16mS0oYDMVaal%2FQDbC8GCyZNxNFexmvvl5oklgO1XcuQYrxsUQOiz56OEUxGmhoydnZLZnw3xpSxTMjA3mSL600rlVUMu28%2BujLSNAcux2UZ5oNFIYt0iZ9tA%2BXaC3o5vhQyGtKct2X1BRPmdsGTcj6K3WsM3Ot2BXpS3wZicFvduf5B0RtsctYholvzOwy9oe%2B59uIqjOlDDq2avUTUPvZFP6R9gy5%2BhB4gdP%2Bb%2Bc3VCc66CZPltmaNkqBxtS3xR0ImVkSm12Y%2BORq9%2FlZNkwegXpy2lh%2FXf2mv%2BNjBpfZttmY9b081dv5u2QEBqXE0T13OkZjcOofHPUD8NeDinn2mUXThbUlpRr96VdGyRfKmvoXA%2FUQOcLwA6FfwSJZcYaN1iXxjJ4%2ByVcX%2F0vnDiH%2FItDYqlU0YqyBK6SuhSN78LWaAfhU7jtW9IEs4Jb6%2FGv3Yloz9uY2ercsVl7wcOL2ja%2FjfEfubWjLenPQCx4SMNB083BpoV%2FU6SO7BU3ByeeTgX8axDkaFg3fIYoxD6BwalLVdwUOLTt%2FHEKkrfFZcTmWfRosAfZ9klPUMXI%2FquSsoPaV2Dik4aPnQoa%2BYVacz3EOFbMLuow8MGOqUBmLUoRhtUANQ05E9tyTKvCWPnj3d0Ksy3HCrzYd9Vs%2BkqUehvrR7XivEJ6q43C17%2Fr93mR8WMqa3WgpDukWBzmhQxyHl%2FQzORdLyzZeERrj5czm4OssswdrwNWpI90QEA3iyeKfq6eC23KfOOYyDVcGLXhp6IY3ERuaSLB4pHEuS8RZWB5YnAEk8txBPnKACzQeB%2F4uyTTq%2FPgIAumRmui7u97okV&X-Amz-Signature=6cf7f47039ae2498971d475ef8389c5bb328b3cf83e10907cb41d377fec6fbe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
