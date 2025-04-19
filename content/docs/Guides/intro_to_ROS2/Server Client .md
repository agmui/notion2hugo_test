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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR6HMOVK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID979cmOQvMXmzIF39xj8exROpDaYN7GiTkrCHGem7SpAiEAnfmYzGGMzNsHvdaMgdLJzrwtzi0%2BCRbvOHBPIgmXZyYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvNel6KAHEXk3UTRSrcA%2BR7w3N0y4d1AAdYk1IzxeEpAqZcED91ioUy8tFL%2FzJPuWK5oU4wSI9ydcyfH4Ls5VvbPKTFfpH3FLu4m5m6i0Mh%2BGKgiYvdEom%2FTscLnw%2BhDezrOYCiX64Q3M%2B7RWfPCPSsSjt1hkUmV68Poe3RKp3PrgyKXjcHmFWfFUMUu9siQcLxaimzfKFRbg3kzMz6uBAp4ko%2FMnxlY3CpIDO%2BUO6jTDYtx9GLVtIYYD%2BPOqy0bYRD3VzV%2BwQt5YNfehRcK3E3QtlanZ%2BV20qdToit7RDPvK2U0xGZtQlCU3xO8FrT7nF3Yhu7fG3oJ1GMCATQlwV0BfoFBd9I%2Bb44UXA%2BvaRMKfgbBuRdVF%2FKh109WSOfsGHxF7kj3j%2BKioZo5pwmx5u%2FoPggSVLrqwmczrR%2BQTbb1CYY79ovcUCed3pjyHaN%2FydhKvuEvuHmFw1wDlvGDUS7D20xdckrvkya%2B6vCEnUfCl%2BPET%2FvoGL6qDPfHimvC%2BOw9qVve1XyVzWzWfYom2%2BFgllVDZXnPSrO9eEv4M3itU8Hqipwuicfi1UuOSaoLWpf6PBeycn1PkZ3%2FUBScTTm%2Fx8r34wbGDAx2ypQNxX0epEY0H6ZtcbFYyU3x7vArsJikhKBBkdjkzFEMPH7jMAGOqUBd1E8lCawoH7X3Y2r1%2Fn2%2BJYoNTbjNl1sRffjtKz0BQLrBuJKLNoHnvmUvnZW33BMR4kjgIUoJY56o00GP4Z%2FpcZmmncMYqBH%2F8VcOLdEjGgpX%2FlWsBBLXjcop1LjOtIm8COJ8dEcM9uSp54CZqi6mymrVfsqtGmwqEIa058K3CXZaxL6ZR53XrgVtP38rg0ZsXHsEJ93RoSlSoQYQckvxY6TDK3l&X-Amz-Signature=f5f77453e06fa6adc130ca396fe15a5ceaa9a62a1df4d74363cc4875788d2a27&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR6HMOVK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID979cmOQvMXmzIF39xj8exROpDaYN7GiTkrCHGem7SpAiEAnfmYzGGMzNsHvdaMgdLJzrwtzi0%2BCRbvOHBPIgmXZyYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvNel6KAHEXk3UTRSrcA%2BR7w3N0y4d1AAdYk1IzxeEpAqZcED91ioUy8tFL%2FzJPuWK5oU4wSI9ydcyfH4Ls5VvbPKTFfpH3FLu4m5m6i0Mh%2BGKgiYvdEom%2FTscLnw%2BhDezrOYCiX64Q3M%2B7RWfPCPSsSjt1hkUmV68Poe3RKp3PrgyKXjcHmFWfFUMUu9siQcLxaimzfKFRbg3kzMz6uBAp4ko%2FMnxlY3CpIDO%2BUO6jTDYtx9GLVtIYYD%2BPOqy0bYRD3VzV%2BwQt5YNfehRcK3E3QtlanZ%2BV20qdToit7RDPvK2U0xGZtQlCU3xO8FrT7nF3Yhu7fG3oJ1GMCATQlwV0BfoFBd9I%2Bb44UXA%2BvaRMKfgbBuRdVF%2FKh109WSOfsGHxF7kj3j%2BKioZo5pwmx5u%2FoPggSVLrqwmczrR%2BQTbb1CYY79ovcUCed3pjyHaN%2FydhKvuEvuHmFw1wDlvGDUS7D20xdckrvkya%2B6vCEnUfCl%2BPET%2FvoGL6qDPfHimvC%2BOw9qVve1XyVzWzWfYom2%2BFgllVDZXnPSrO9eEv4M3itU8Hqipwuicfi1UuOSaoLWpf6PBeycn1PkZ3%2FUBScTTm%2Fx8r34wbGDAx2ypQNxX0epEY0H6ZtcbFYyU3x7vArsJikhKBBkdjkzFEMPH7jMAGOqUBd1E8lCawoH7X3Y2r1%2Fn2%2BJYoNTbjNl1sRffjtKz0BQLrBuJKLNoHnvmUvnZW33BMR4kjgIUoJY56o00GP4Z%2FpcZmmncMYqBH%2F8VcOLdEjGgpX%2FlWsBBLXjcop1LjOtIm8COJ8dEcM9uSp54CZqi6mymrVfsqtGmwqEIa058K3CXZaxL6ZR53XrgVtP38rg0ZsXHsEJ93RoSlSoQYQckvxY6TDK3l&X-Amz-Signature=23ab45ec8d3fb654e857506cdc424a7ddd79beadb2848f5fdf74d34a559e0b5b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR6HMOVK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID979cmOQvMXmzIF39xj8exROpDaYN7GiTkrCHGem7SpAiEAnfmYzGGMzNsHvdaMgdLJzrwtzi0%2BCRbvOHBPIgmXZyYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvNel6KAHEXk3UTRSrcA%2BR7w3N0y4d1AAdYk1IzxeEpAqZcED91ioUy8tFL%2FzJPuWK5oU4wSI9ydcyfH4Ls5VvbPKTFfpH3FLu4m5m6i0Mh%2BGKgiYvdEom%2FTscLnw%2BhDezrOYCiX64Q3M%2B7RWfPCPSsSjt1hkUmV68Poe3RKp3PrgyKXjcHmFWfFUMUu9siQcLxaimzfKFRbg3kzMz6uBAp4ko%2FMnxlY3CpIDO%2BUO6jTDYtx9GLVtIYYD%2BPOqy0bYRD3VzV%2BwQt5YNfehRcK3E3QtlanZ%2BV20qdToit7RDPvK2U0xGZtQlCU3xO8FrT7nF3Yhu7fG3oJ1GMCATQlwV0BfoFBd9I%2Bb44UXA%2BvaRMKfgbBuRdVF%2FKh109WSOfsGHxF7kj3j%2BKioZo5pwmx5u%2FoPggSVLrqwmczrR%2BQTbb1CYY79ovcUCed3pjyHaN%2FydhKvuEvuHmFw1wDlvGDUS7D20xdckrvkya%2B6vCEnUfCl%2BPET%2FvoGL6qDPfHimvC%2BOw9qVve1XyVzWzWfYom2%2BFgllVDZXnPSrO9eEv4M3itU8Hqipwuicfi1UuOSaoLWpf6PBeycn1PkZ3%2FUBScTTm%2Fx8r34wbGDAx2ypQNxX0epEY0H6ZtcbFYyU3x7vArsJikhKBBkdjkzFEMPH7jMAGOqUBd1E8lCawoH7X3Y2r1%2Fn2%2BJYoNTbjNl1sRffjtKz0BQLrBuJKLNoHnvmUvnZW33BMR4kjgIUoJY56o00GP4Z%2FpcZmmncMYqBH%2F8VcOLdEjGgpX%2FlWsBBLXjcop1LjOtIm8COJ8dEcM9uSp54CZqi6mymrVfsqtGmwqEIa058K3CXZaxL6ZR53XrgVtP38rg0ZsXHsEJ93RoSlSoQYQckvxY6TDK3l&X-Amz-Signature=201b6d3f67ca841d6d7a58e464fec9faa5c3f88e5a385099a71cf8af5266ede4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR6HMOVK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID979cmOQvMXmzIF39xj8exROpDaYN7GiTkrCHGem7SpAiEAnfmYzGGMzNsHvdaMgdLJzrwtzi0%2BCRbvOHBPIgmXZyYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvNel6KAHEXk3UTRSrcA%2BR7w3N0y4d1AAdYk1IzxeEpAqZcED91ioUy8tFL%2FzJPuWK5oU4wSI9ydcyfH4Ls5VvbPKTFfpH3FLu4m5m6i0Mh%2BGKgiYvdEom%2FTscLnw%2BhDezrOYCiX64Q3M%2B7RWfPCPSsSjt1hkUmV68Poe3RKp3PrgyKXjcHmFWfFUMUu9siQcLxaimzfKFRbg3kzMz6uBAp4ko%2FMnxlY3CpIDO%2BUO6jTDYtx9GLVtIYYD%2BPOqy0bYRD3VzV%2BwQt5YNfehRcK3E3QtlanZ%2BV20qdToit7RDPvK2U0xGZtQlCU3xO8FrT7nF3Yhu7fG3oJ1GMCATQlwV0BfoFBd9I%2Bb44UXA%2BvaRMKfgbBuRdVF%2FKh109WSOfsGHxF7kj3j%2BKioZo5pwmx5u%2FoPggSVLrqwmczrR%2BQTbb1CYY79ovcUCed3pjyHaN%2FydhKvuEvuHmFw1wDlvGDUS7D20xdckrvkya%2B6vCEnUfCl%2BPET%2FvoGL6qDPfHimvC%2BOw9qVve1XyVzWzWfYom2%2BFgllVDZXnPSrO9eEv4M3itU8Hqipwuicfi1UuOSaoLWpf6PBeycn1PkZ3%2FUBScTTm%2Fx8r34wbGDAx2ypQNxX0epEY0H6ZtcbFYyU3x7vArsJikhKBBkdjkzFEMPH7jMAGOqUBd1E8lCawoH7X3Y2r1%2Fn2%2BJYoNTbjNl1sRffjtKz0BQLrBuJKLNoHnvmUvnZW33BMR4kjgIUoJY56o00GP4Z%2FpcZmmncMYqBH%2F8VcOLdEjGgpX%2FlWsBBLXjcop1LjOtIm8COJ8dEcM9uSp54CZqi6mymrVfsqtGmwqEIa058K3CXZaxL6ZR53XrgVtP38rg0ZsXHsEJ93RoSlSoQYQckvxY6TDK3l&X-Amz-Signature=8780f767a1ae4aeb89bfdd8eccf110fd8b703f0fae93a178b3dfcb3ace4ce5c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR6HMOVK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID979cmOQvMXmzIF39xj8exROpDaYN7GiTkrCHGem7SpAiEAnfmYzGGMzNsHvdaMgdLJzrwtzi0%2BCRbvOHBPIgmXZyYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvNel6KAHEXk3UTRSrcA%2BR7w3N0y4d1AAdYk1IzxeEpAqZcED91ioUy8tFL%2FzJPuWK5oU4wSI9ydcyfH4Ls5VvbPKTFfpH3FLu4m5m6i0Mh%2BGKgiYvdEom%2FTscLnw%2BhDezrOYCiX64Q3M%2B7RWfPCPSsSjt1hkUmV68Poe3RKp3PrgyKXjcHmFWfFUMUu9siQcLxaimzfKFRbg3kzMz6uBAp4ko%2FMnxlY3CpIDO%2BUO6jTDYtx9GLVtIYYD%2BPOqy0bYRD3VzV%2BwQt5YNfehRcK3E3QtlanZ%2BV20qdToit7RDPvK2U0xGZtQlCU3xO8FrT7nF3Yhu7fG3oJ1GMCATQlwV0BfoFBd9I%2Bb44UXA%2BvaRMKfgbBuRdVF%2FKh109WSOfsGHxF7kj3j%2BKioZo5pwmx5u%2FoPggSVLrqwmczrR%2BQTbb1CYY79ovcUCed3pjyHaN%2FydhKvuEvuHmFw1wDlvGDUS7D20xdckrvkya%2B6vCEnUfCl%2BPET%2FvoGL6qDPfHimvC%2BOw9qVve1XyVzWzWfYom2%2BFgllVDZXnPSrO9eEv4M3itU8Hqipwuicfi1UuOSaoLWpf6PBeycn1PkZ3%2FUBScTTm%2Fx8r34wbGDAx2ypQNxX0epEY0H6ZtcbFYyU3x7vArsJikhKBBkdjkzFEMPH7jMAGOqUBd1E8lCawoH7X3Y2r1%2Fn2%2BJYoNTbjNl1sRffjtKz0BQLrBuJKLNoHnvmUvnZW33BMR4kjgIUoJY56o00GP4Z%2FpcZmmncMYqBH%2F8VcOLdEjGgpX%2FlWsBBLXjcop1LjOtIm8COJ8dEcM9uSp54CZqi6mymrVfsqtGmwqEIa058K3CXZaxL6ZR53XrgVtP38rg0ZsXHsEJ93RoSlSoQYQckvxY6TDK3l&X-Amz-Signature=bd9dd9997075b3bc175c9f1c5f11aca21399b6bfdb2d6f9a5487770c5465dc51&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
