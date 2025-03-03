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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVVALLYE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnxaqzB%2BwCaPpuVSjlDF4YpfEjv3A41uwV24Wj8EqWMwIgEW9%2FePSldwhV97RwT8txR%2BBbtxLvzwCYzhqo7XnBG4sqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCunZBpHPHEZQYzB9SrcA4WyZuA4HqTbJbve1Bk7kiqGPlPtt3QBLAeN%2BXmQydpRZGiU3Y0Q0nRz2yyUJBvtA8A6vLPvSKXRFh0zS%2FyJGRZ5ayEl83aZa9hBaAfW81RL8t%2Fkmd%2Bxh7N3Rx9B1O4DmMSWavQD9d26yjCpsAKFLSYZtsWviMPRLfhoR%2BIsVP061GSJFonbFWGVSkwAJY5cdXJhsIdjyS4g2Z%2FzGi4wkHYHihVD%2B2FCDZ7BUeMn86kffMCLZ9c8Kh%2FP4cdWnXmFQ%2B7GB0CfGAY7wJHSr8Vk6HgiDTlenOFT%2F5%2BjdQBfwky0tX1a9qQVPJc%2BK%2BhN5OmTgX26xZavT6xK2c5D69nN%2F3VhYVkL25Qo%2FvfhCDtxzN0WREs8QtvQquGvMImhppBtiiw5%2BxnpN82NKl%2FRJYl%2Bw4wTe8526xYRwnVIEXojuE3mk90tPd2lzYL5c7en1aNWBnDUSwzGxquHyt9n8K1llVd7m1QPEPio7cUcpQHTzE5h93hLvpoaZuR1JN2gd3UBB6dD8nj3lP3hGc4fhGohb8ato6kk8SNLFu69Ky5OyPWOQZ%2BMAgYw3x34UT2rj2GRu0kS6WZs2cej7eXOqdW01OT2EyKl7n%2F5ARPqMETUlv9tlAcB9QrL4QYQJey5MNTJk74GOqUBtyXifAPZmPAyEt%2BWJO4B8FTiw02JnkjqRpaBZFvBRs6si5Kw9rq4gVJ4vtOOV41EnapP1T91nZfMZeafO4oNRtUL4QSoAwZwx%2FhCmCRsX%2B5ec%2FeGoLoZgjpUuj6oIHqbHaonJDC0CAWxNvQtYuYBD3gYopEC%2FANHh6EVXfBkzDpqXhJMED9tdjY%2BK8nOkcZlp9m13g9wDJhuMjwummQjSzxSRpdH&X-Amz-Signature=5efdd6992559afc815d50c01ec270e539c6ecd45e4638d0762a6b0d1f56313ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVVALLYE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnxaqzB%2BwCaPpuVSjlDF4YpfEjv3A41uwV24Wj8EqWMwIgEW9%2FePSldwhV97RwT8txR%2BBbtxLvzwCYzhqo7XnBG4sqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCunZBpHPHEZQYzB9SrcA4WyZuA4HqTbJbve1Bk7kiqGPlPtt3QBLAeN%2BXmQydpRZGiU3Y0Q0nRz2yyUJBvtA8A6vLPvSKXRFh0zS%2FyJGRZ5ayEl83aZa9hBaAfW81RL8t%2Fkmd%2Bxh7N3Rx9B1O4DmMSWavQD9d26yjCpsAKFLSYZtsWviMPRLfhoR%2BIsVP061GSJFonbFWGVSkwAJY5cdXJhsIdjyS4g2Z%2FzGi4wkHYHihVD%2B2FCDZ7BUeMn86kffMCLZ9c8Kh%2FP4cdWnXmFQ%2B7GB0CfGAY7wJHSr8Vk6HgiDTlenOFT%2F5%2BjdQBfwky0tX1a9qQVPJc%2BK%2BhN5OmTgX26xZavT6xK2c5D69nN%2F3VhYVkL25Qo%2FvfhCDtxzN0WREs8QtvQquGvMImhppBtiiw5%2BxnpN82NKl%2FRJYl%2Bw4wTe8526xYRwnVIEXojuE3mk90tPd2lzYL5c7en1aNWBnDUSwzGxquHyt9n8K1llVd7m1QPEPio7cUcpQHTzE5h93hLvpoaZuR1JN2gd3UBB6dD8nj3lP3hGc4fhGohb8ato6kk8SNLFu69Ky5OyPWOQZ%2BMAgYw3x34UT2rj2GRu0kS6WZs2cej7eXOqdW01OT2EyKl7n%2F5ARPqMETUlv9tlAcB9QrL4QYQJey5MNTJk74GOqUBtyXifAPZmPAyEt%2BWJO4B8FTiw02JnkjqRpaBZFvBRs6si5Kw9rq4gVJ4vtOOV41EnapP1T91nZfMZeafO4oNRtUL4QSoAwZwx%2FhCmCRsX%2B5ec%2FeGoLoZgjpUuj6oIHqbHaonJDC0CAWxNvQtYuYBD3gYopEC%2FANHh6EVXfBkzDpqXhJMED9tdjY%2BK8nOkcZlp9m13g9wDJhuMjwummQjSzxSRpdH&X-Amz-Signature=fa1fe355b903ae1bb5701828c5e9257dfb7cbedc89ed8cea9735567942199269&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVVALLYE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnxaqzB%2BwCaPpuVSjlDF4YpfEjv3A41uwV24Wj8EqWMwIgEW9%2FePSldwhV97RwT8txR%2BBbtxLvzwCYzhqo7XnBG4sqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCunZBpHPHEZQYzB9SrcA4WyZuA4HqTbJbve1Bk7kiqGPlPtt3QBLAeN%2BXmQydpRZGiU3Y0Q0nRz2yyUJBvtA8A6vLPvSKXRFh0zS%2FyJGRZ5ayEl83aZa9hBaAfW81RL8t%2Fkmd%2Bxh7N3Rx9B1O4DmMSWavQD9d26yjCpsAKFLSYZtsWviMPRLfhoR%2BIsVP061GSJFonbFWGVSkwAJY5cdXJhsIdjyS4g2Z%2FzGi4wkHYHihVD%2B2FCDZ7BUeMn86kffMCLZ9c8Kh%2FP4cdWnXmFQ%2B7GB0CfGAY7wJHSr8Vk6HgiDTlenOFT%2F5%2BjdQBfwky0tX1a9qQVPJc%2BK%2BhN5OmTgX26xZavT6xK2c5D69nN%2F3VhYVkL25Qo%2FvfhCDtxzN0WREs8QtvQquGvMImhppBtiiw5%2BxnpN82NKl%2FRJYl%2Bw4wTe8526xYRwnVIEXojuE3mk90tPd2lzYL5c7en1aNWBnDUSwzGxquHyt9n8K1llVd7m1QPEPio7cUcpQHTzE5h93hLvpoaZuR1JN2gd3UBB6dD8nj3lP3hGc4fhGohb8ato6kk8SNLFu69Ky5OyPWOQZ%2BMAgYw3x34UT2rj2GRu0kS6WZs2cej7eXOqdW01OT2EyKl7n%2F5ARPqMETUlv9tlAcB9QrL4QYQJey5MNTJk74GOqUBtyXifAPZmPAyEt%2BWJO4B8FTiw02JnkjqRpaBZFvBRs6si5Kw9rq4gVJ4vtOOV41EnapP1T91nZfMZeafO4oNRtUL4QSoAwZwx%2FhCmCRsX%2B5ec%2FeGoLoZgjpUuj6oIHqbHaonJDC0CAWxNvQtYuYBD3gYopEC%2FANHh6EVXfBkzDpqXhJMED9tdjY%2BK8nOkcZlp9m13g9wDJhuMjwummQjSzxSRpdH&X-Amz-Signature=be5266100cb41aab0cfb01be1a8b578402327ae58ebecc2843be3d794174efce&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVVALLYE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnxaqzB%2BwCaPpuVSjlDF4YpfEjv3A41uwV24Wj8EqWMwIgEW9%2FePSldwhV97RwT8txR%2BBbtxLvzwCYzhqo7XnBG4sqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCunZBpHPHEZQYzB9SrcA4WyZuA4HqTbJbve1Bk7kiqGPlPtt3QBLAeN%2BXmQydpRZGiU3Y0Q0nRz2yyUJBvtA8A6vLPvSKXRFh0zS%2FyJGRZ5ayEl83aZa9hBaAfW81RL8t%2Fkmd%2Bxh7N3Rx9B1O4DmMSWavQD9d26yjCpsAKFLSYZtsWviMPRLfhoR%2BIsVP061GSJFonbFWGVSkwAJY5cdXJhsIdjyS4g2Z%2FzGi4wkHYHihVD%2B2FCDZ7BUeMn86kffMCLZ9c8Kh%2FP4cdWnXmFQ%2B7GB0CfGAY7wJHSr8Vk6HgiDTlenOFT%2F5%2BjdQBfwky0tX1a9qQVPJc%2BK%2BhN5OmTgX26xZavT6xK2c5D69nN%2F3VhYVkL25Qo%2FvfhCDtxzN0WREs8QtvQquGvMImhppBtiiw5%2BxnpN82NKl%2FRJYl%2Bw4wTe8526xYRwnVIEXojuE3mk90tPd2lzYL5c7en1aNWBnDUSwzGxquHyt9n8K1llVd7m1QPEPio7cUcpQHTzE5h93hLvpoaZuR1JN2gd3UBB6dD8nj3lP3hGc4fhGohb8ato6kk8SNLFu69Ky5OyPWOQZ%2BMAgYw3x34UT2rj2GRu0kS6WZs2cej7eXOqdW01OT2EyKl7n%2F5ARPqMETUlv9tlAcB9QrL4QYQJey5MNTJk74GOqUBtyXifAPZmPAyEt%2BWJO4B8FTiw02JnkjqRpaBZFvBRs6si5Kw9rq4gVJ4vtOOV41EnapP1T91nZfMZeafO4oNRtUL4QSoAwZwx%2FhCmCRsX%2B5ec%2FeGoLoZgjpUuj6oIHqbHaonJDC0CAWxNvQtYuYBD3gYopEC%2FANHh6EVXfBkzDpqXhJMED9tdjY%2BK8nOkcZlp9m13g9wDJhuMjwummQjSzxSRpdH&X-Amz-Signature=b55eceec82863ca2859f7c79926ba52f5ed73fe03c3673a433dfd4216ed0192c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVVALLYE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnxaqzB%2BwCaPpuVSjlDF4YpfEjv3A41uwV24Wj8EqWMwIgEW9%2FePSldwhV97RwT8txR%2BBbtxLvzwCYzhqo7XnBG4sqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCunZBpHPHEZQYzB9SrcA4WyZuA4HqTbJbve1Bk7kiqGPlPtt3QBLAeN%2BXmQydpRZGiU3Y0Q0nRz2yyUJBvtA8A6vLPvSKXRFh0zS%2FyJGRZ5ayEl83aZa9hBaAfW81RL8t%2Fkmd%2Bxh7N3Rx9B1O4DmMSWavQD9d26yjCpsAKFLSYZtsWviMPRLfhoR%2BIsVP061GSJFonbFWGVSkwAJY5cdXJhsIdjyS4g2Z%2FzGi4wkHYHihVD%2B2FCDZ7BUeMn86kffMCLZ9c8Kh%2FP4cdWnXmFQ%2B7GB0CfGAY7wJHSr8Vk6HgiDTlenOFT%2F5%2BjdQBfwky0tX1a9qQVPJc%2BK%2BhN5OmTgX26xZavT6xK2c5D69nN%2F3VhYVkL25Qo%2FvfhCDtxzN0WREs8QtvQquGvMImhppBtiiw5%2BxnpN82NKl%2FRJYl%2Bw4wTe8526xYRwnVIEXojuE3mk90tPd2lzYL5c7en1aNWBnDUSwzGxquHyt9n8K1llVd7m1QPEPio7cUcpQHTzE5h93hLvpoaZuR1JN2gd3UBB6dD8nj3lP3hGc4fhGohb8ato6kk8SNLFu69Ky5OyPWOQZ%2BMAgYw3x34UT2rj2GRu0kS6WZs2cej7eXOqdW01OT2EyKl7n%2F5ARPqMETUlv9tlAcB9QrL4QYQJey5MNTJk74GOqUBtyXifAPZmPAyEt%2BWJO4B8FTiw02JnkjqRpaBZFvBRs6si5Kw9rq4gVJ4vtOOV41EnapP1T91nZfMZeafO4oNRtUL4QSoAwZwx%2FhCmCRsX%2B5ec%2FeGoLoZgjpUuj6oIHqbHaonJDC0CAWxNvQtYuYBD3gYopEC%2FANHh6EVXfBkzDpqXhJMED9tdjY%2BK8nOkcZlp9m13g9wDJhuMjwummQjSzxSRpdH&X-Amz-Signature=adf41b6514bd4fa56123850f9bd4aad97ff5a93b9764df84d390b81e9242eab4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
