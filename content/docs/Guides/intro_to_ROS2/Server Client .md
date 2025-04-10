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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5QZUWO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCUjiC6HfYl2jTGIRsAveXGfn%2Fb%2Fkm3kHd2eO6NRWatmAIgAfe7WikvLu8oLvidfELGk1HOzdYNGRjJla0h4EyVxJUqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1MpbUpTCQQuAA4nircA6iHh4fkS5bkEg4bK69UYJWYEZxxSOFHtFr%2ByCsjzJ9ZDjNlj1sufvY60Mmy0qficxUqFzVe7PRtMyYxU7YF9TjwC1x%2FWU%2Bv3qAo8a9s5Xk0MBSZ%2FWM8vvgoD8VRfsBZXD1Pan3giFZyjEYqqVIl13VpQJLSQs55e1TSBYXSiOqAljLa1YZO6hfv0OGZzwAqxCXSWhshuOCq8Ign%2B87iMX%2FuXwF0bCEzKllwzWbj2Ae9Sx35IbA%2BbY5M%2FxwO0GEQQr57EGT8ke1J2UYdEpYBHjaeGAraBur97S6fm2ft9vzuSrosrEADPJSFAa41s3NmSv2BBHTvfTrQS1rExTNpksfx31FAFNsyLQV0xoD8yluWJ0YUZ7zJype0VDzg%2FfIbzpukhMeDVX5IC1Ng0F00%2FPeunqga8RPJHM%2FlLPBmeTd7Aoh6qdZTk1Qgr5%2Bjhc6OCF2pHzpOqQTmaPYc7OavL43FESeL3CS95UBS4yCfO4Yv9RjBlSnM0nVFxHX5JAfa0yha1uD%2FOhNK3kekLDqNEQ4bwODyVMa5DHKWuLIffwScQOPzl5zXxrV5iKZqG7%2FzeR1iASyANFcA80S%2FEIMMt%2Bg3%2BJ6x3LfH05kqoJf0XQmbeakBX7qU8G0MCWRTMMyL3r8GOqUBujVf26XkKa9dEBg56LhsWFvZ1vakCbD0sz9Ps0R0qzmmEzyaYUzyEpnw7n9ZaqkW%2FkmMs0%2FH9IuMOGIes0jG0J0Yt5rBN2McZteLWBusMQFQDYk0%2FdlzYJxZ9nRybEiAj38kxZvuKA7mgh%2F009GKaW0mUOtAOxWU4EM7fTipbWDT1RZC650hKTDpBAkeV0ufoMq9CyVPh9jTXnh4X9cVR%2FxDTuAD&X-Amz-Signature=6eacb74ff0576e5340f5243eaee98a992b94be57173b74f815c783e34834a98e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5QZUWO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCUjiC6HfYl2jTGIRsAveXGfn%2Fb%2Fkm3kHd2eO6NRWatmAIgAfe7WikvLu8oLvidfELGk1HOzdYNGRjJla0h4EyVxJUqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1MpbUpTCQQuAA4nircA6iHh4fkS5bkEg4bK69UYJWYEZxxSOFHtFr%2ByCsjzJ9ZDjNlj1sufvY60Mmy0qficxUqFzVe7PRtMyYxU7YF9TjwC1x%2FWU%2Bv3qAo8a9s5Xk0MBSZ%2FWM8vvgoD8VRfsBZXD1Pan3giFZyjEYqqVIl13VpQJLSQs55e1TSBYXSiOqAljLa1YZO6hfv0OGZzwAqxCXSWhshuOCq8Ign%2B87iMX%2FuXwF0bCEzKllwzWbj2Ae9Sx35IbA%2BbY5M%2FxwO0GEQQr57EGT8ke1J2UYdEpYBHjaeGAraBur97S6fm2ft9vzuSrosrEADPJSFAa41s3NmSv2BBHTvfTrQS1rExTNpksfx31FAFNsyLQV0xoD8yluWJ0YUZ7zJype0VDzg%2FfIbzpukhMeDVX5IC1Ng0F00%2FPeunqga8RPJHM%2FlLPBmeTd7Aoh6qdZTk1Qgr5%2Bjhc6OCF2pHzpOqQTmaPYc7OavL43FESeL3CS95UBS4yCfO4Yv9RjBlSnM0nVFxHX5JAfa0yha1uD%2FOhNK3kekLDqNEQ4bwODyVMa5DHKWuLIffwScQOPzl5zXxrV5iKZqG7%2FzeR1iASyANFcA80S%2FEIMMt%2Bg3%2BJ6x3LfH05kqoJf0XQmbeakBX7qU8G0MCWRTMMyL3r8GOqUBujVf26XkKa9dEBg56LhsWFvZ1vakCbD0sz9Ps0R0qzmmEzyaYUzyEpnw7n9ZaqkW%2FkmMs0%2FH9IuMOGIes0jG0J0Yt5rBN2McZteLWBusMQFQDYk0%2FdlzYJxZ9nRybEiAj38kxZvuKA7mgh%2F009GKaW0mUOtAOxWU4EM7fTipbWDT1RZC650hKTDpBAkeV0ufoMq9CyVPh9jTXnh4X9cVR%2FxDTuAD&X-Amz-Signature=23b76a69a296bb0c95ed6594528c79b3cdfcbcf19139915fb5d8ff7e2471db93&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5QZUWO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCUjiC6HfYl2jTGIRsAveXGfn%2Fb%2Fkm3kHd2eO6NRWatmAIgAfe7WikvLu8oLvidfELGk1HOzdYNGRjJla0h4EyVxJUqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1MpbUpTCQQuAA4nircA6iHh4fkS5bkEg4bK69UYJWYEZxxSOFHtFr%2ByCsjzJ9ZDjNlj1sufvY60Mmy0qficxUqFzVe7PRtMyYxU7YF9TjwC1x%2FWU%2Bv3qAo8a9s5Xk0MBSZ%2FWM8vvgoD8VRfsBZXD1Pan3giFZyjEYqqVIl13VpQJLSQs55e1TSBYXSiOqAljLa1YZO6hfv0OGZzwAqxCXSWhshuOCq8Ign%2B87iMX%2FuXwF0bCEzKllwzWbj2Ae9Sx35IbA%2BbY5M%2FxwO0GEQQr57EGT8ke1J2UYdEpYBHjaeGAraBur97S6fm2ft9vzuSrosrEADPJSFAa41s3NmSv2BBHTvfTrQS1rExTNpksfx31FAFNsyLQV0xoD8yluWJ0YUZ7zJype0VDzg%2FfIbzpukhMeDVX5IC1Ng0F00%2FPeunqga8RPJHM%2FlLPBmeTd7Aoh6qdZTk1Qgr5%2Bjhc6OCF2pHzpOqQTmaPYc7OavL43FESeL3CS95UBS4yCfO4Yv9RjBlSnM0nVFxHX5JAfa0yha1uD%2FOhNK3kekLDqNEQ4bwODyVMa5DHKWuLIffwScQOPzl5zXxrV5iKZqG7%2FzeR1iASyANFcA80S%2FEIMMt%2Bg3%2BJ6x3LfH05kqoJf0XQmbeakBX7qU8G0MCWRTMMyL3r8GOqUBujVf26XkKa9dEBg56LhsWFvZ1vakCbD0sz9Ps0R0qzmmEzyaYUzyEpnw7n9ZaqkW%2FkmMs0%2FH9IuMOGIes0jG0J0Yt5rBN2McZteLWBusMQFQDYk0%2FdlzYJxZ9nRybEiAj38kxZvuKA7mgh%2F009GKaW0mUOtAOxWU4EM7fTipbWDT1RZC650hKTDpBAkeV0ufoMq9CyVPh9jTXnh4X9cVR%2FxDTuAD&X-Amz-Signature=0100f873c0a7cc28edc76b9c5b18f137350e41be50adf22a318c66c045a40288&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5QZUWO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCUjiC6HfYl2jTGIRsAveXGfn%2Fb%2Fkm3kHd2eO6NRWatmAIgAfe7WikvLu8oLvidfELGk1HOzdYNGRjJla0h4EyVxJUqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1MpbUpTCQQuAA4nircA6iHh4fkS5bkEg4bK69UYJWYEZxxSOFHtFr%2ByCsjzJ9ZDjNlj1sufvY60Mmy0qficxUqFzVe7PRtMyYxU7YF9TjwC1x%2FWU%2Bv3qAo8a9s5Xk0MBSZ%2FWM8vvgoD8VRfsBZXD1Pan3giFZyjEYqqVIl13VpQJLSQs55e1TSBYXSiOqAljLa1YZO6hfv0OGZzwAqxCXSWhshuOCq8Ign%2B87iMX%2FuXwF0bCEzKllwzWbj2Ae9Sx35IbA%2BbY5M%2FxwO0GEQQr57EGT8ke1J2UYdEpYBHjaeGAraBur97S6fm2ft9vzuSrosrEADPJSFAa41s3NmSv2BBHTvfTrQS1rExTNpksfx31FAFNsyLQV0xoD8yluWJ0YUZ7zJype0VDzg%2FfIbzpukhMeDVX5IC1Ng0F00%2FPeunqga8RPJHM%2FlLPBmeTd7Aoh6qdZTk1Qgr5%2Bjhc6OCF2pHzpOqQTmaPYc7OavL43FESeL3CS95UBS4yCfO4Yv9RjBlSnM0nVFxHX5JAfa0yha1uD%2FOhNK3kekLDqNEQ4bwODyVMa5DHKWuLIffwScQOPzl5zXxrV5iKZqG7%2FzeR1iASyANFcA80S%2FEIMMt%2Bg3%2BJ6x3LfH05kqoJf0XQmbeakBX7qU8G0MCWRTMMyL3r8GOqUBujVf26XkKa9dEBg56LhsWFvZ1vakCbD0sz9Ps0R0qzmmEzyaYUzyEpnw7n9ZaqkW%2FkmMs0%2FH9IuMOGIes0jG0J0Yt5rBN2McZteLWBusMQFQDYk0%2FdlzYJxZ9nRybEiAj38kxZvuKA7mgh%2F009GKaW0mUOtAOxWU4EM7fTipbWDT1RZC650hKTDpBAkeV0ufoMq9CyVPh9jTXnh4X9cVR%2FxDTuAD&X-Amz-Signature=157db07e8f07a608eb828a1c7c596be4793d1be7a22fd4109b04e4f42e4b0b29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5QZUWO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCUjiC6HfYl2jTGIRsAveXGfn%2Fb%2Fkm3kHd2eO6NRWatmAIgAfe7WikvLu8oLvidfELGk1HOzdYNGRjJla0h4EyVxJUqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1MpbUpTCQQuAA4nircA6iHh4fkS5bkEg4bK69UYJWYEZxxSOFHtFr%2ByCsjzJ9ZDjNlj1sufvY60Mmy0qficxUqFzVe7PRtMyYxU7YF9TjwC1x%2FWU%2Bv3qAo8a9s5Xk0MBSZ%2FWM8vvgoD8VRfsBZXD1Pan3giFZyjEYqqVIl13VpQJLSQs55e1TSBYXSiOqAljLa1YZO6hfv0OGZzwAqxCXSWhshuOCq8Ign%2B87iMX%2FuXwF0bCEzKllwzWbj2Ae9Sx35IbA%2BbY5M%2FxwO0GEQQr57EGT8ke1J2UYdEpYBHjaeGAraBur97S6fm2ft9vzuSrosrEADPJSFAa41s3NmSv2BBHTvfTrQS1rExTNpksfx31FAFNsyLQV0xoD8yluWJ0YUZ7zJype0VDzg%2FfIbzpukhMeDVX5IC1Ng0F00%2FPeunqga8RPJHM%2FlLPBmeTd7Aoh6qdZTk1Qgr5%2Bjhc6OCF2pHzpOqQTmaPYc7OavL43FESeL3CS95UBS4yCfO4Yv9RjBlSnM0nVFxHX5JAfa0yha1uD%2FOhNK3kekLDqNEQ4bwODyVMa5DHKWuLIffwScQOPzl5zXxrV5iKZqG7%2FzeR1iASyANFcA80S%2FEIMMt%2Bg3%2BJ6x3LfH05kqoJf0XQmbeakBX7qU8G0MCWRTMMyL3r8GOqUBujVf26XkKa9dEBg56LhsWFvZ1vakCbD0sz9Ps0R0qzmmEzyaYUzyEpnw7n9ZaqkW%2FkmMs0%2FH9IuMOGIes0jG0J0Yt5rBN2McZteLWBusMQFQDYk0%2FdlzYJxZ9nRybEiAj38kxZvuKA7mgh%2F009GKaW0mUOtAOxWU4EM7fTipbWDT1RZC650hKTDpBAkeV0ufoMq9CyVPh9jTXnh4X9cVR%2FxDTuAD&X-Amz-Signature=5995bbed538bfa390087b0b7759c0c1414ee35c997e2be3d1e6c6d65b84584ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
