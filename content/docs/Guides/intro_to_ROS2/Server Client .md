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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655A2WY7O%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuyrBclQXsbj0w%2BE3DmDMEobRQxJBNkmb42BFAbAGZQAIgLkUoTTmMYl302DNvduWdrYwe8Z4IufG7lRKw5%2BVLjJ8qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOOia1lor4k6jhp9CrcA4YgY39xjyg4n6LfgFFt47n5Az3YUR5xgzO5zdc0d9K55IH0gzSuKOy2YbsguPkABEVOEIwClk152hqoAmVBj1tS1Ma%2FrKparbOBUM6Clzhial4Xgjqjq%2F1ozNimXTN59G7HWQpHzC3EqralltS5DVhlH94LqZeRN2F1FNsGQcBFWoHSWwnEi7XnWCQe59nwQ%2BZmrhv2%2BjH50TrOcuW5%2BO8rRPgvADzZdhsjI8888BYObHpuKvQTmuiiuuFiOAvR76tP07QNym%2F6%2BSGaZCzJPf3DfACnSLNB5qlzty%2BN%2FmDxTPCdItBYWrQYWt%2FOzA%2BpIsSw9deR9S9FUVNaHxrtXqQpZB7X6tkYopf86vLj6qZnIwo5qwZXi%2B4TWkvhDpBoUl4QzNF4cFwygzvsBU%2FkLTWCOMfkbehzNlIzSXZpCwLCJzXpAY0mdHjfyAm%2BXsN0OFzUMGUmTrlT76tNNJN%2F0lZkrgfzOzaNKdJrENPKjLgA%2Blt7HvhZcSwznw1d5aahIzAlZGS%2F89fYqSVgf6PEBVagJf8QSzgCKdBE24A%2FQIRrcXxIqKn0xB5XkACio16pPc%2BemxHS2yzYlF2xPkycP5J90fr0hLvBzhepCc1DhlR8lyzJVcYYd2YZjcmDMPKs5sQGOqUBtlxRVkjK5dwUYHlLsJSFg577yExxJAJULQbf61QtAhon%2FD6XMMx0CZaFfxM17NvovdwXZzS5uLo0H6KuDPc4N%2BjJ%2F0pSxybzcx97hrKxFfAvBhe%2Bp%2Fh1puJjW8vRO1njQMBMrYz4X642tulBJ6DBGBcozQeyEMSEC5xX81z8fAK6tAlAbsQbrnqDj4zWjG4qMdOE%2BdYQAgTgBGu5Stusc4IkeIHn&X-Amz-Signature=74f0a13eba78d4b38db61a2e84dc3cb85afcd7868f7631ad1be62d0c85a6f13a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655A2WY7O%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuyrBclQXsbj0w%2BE3DmDMEobRQxJBNkmb42BFAbAGZQAIgLkUoTTmMYl302DNvduWdrYwe8Z4IufG7lRKw5%2BVLjJ8qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOOia1lor4k6jhp9CrcA4YgY39xjyg4n6LfgFFt47n5Az3YUR5xgzO5zdc0d9K55IH0gzSuKOy2YbsguPkABEVOEIwClk152hqoAmVBj1tS1Ma%2FrKparbOBUM6Clzhial4Xgjqjq%2F1ozNimXTN59G7HWQpHzC3EqralltS5DVhlH94LqZeRN2F1FNsGQcBFWoHSWwnEi7XnWCQe59nwQ%2BZmrhv2%2BjH50TrOcuW5%2BO8rRPgvADzZdhsjI8888BYObHpuKvQTmuiiuuFiOAvR76tP07QNym%2F6%2BSGaZCzJPf3DfACnSLNB5qlzty%2BN%2FmDxTPCdItBYWrQYWt%2FOzA%2BpIsSw9deR9S9FUVNaHxrtXqQpZB7X6tkYopf86vLj6qZnIwo5qwZXi%2B4TWkvhDpBoUl4QzNF4cFwygzvsBU%2FkLTWCOMfkbehzNlIzSXZpCwLCJzXpAY0mdHjfyAm%2BXsN0OFzUMGUmTrlT76tNNJN%2F0lZkrgfzOzaNKdJrENPKjLgA%2Blt7HvhZcSwznw1d5aahIzAlZGS%2F89fYqSVgf6PEBVagJf8QSzgCKdBE24A%2FQIRrcXxIqKn0xB5XkACio16pPc%2BemxHS2yzYlF2xPkycP5J90fr0hLvBzhepCc1DhlR8lyzJVcYYd2YZjcmDMPKs5sQGOqUBtlxRVkjK5dwUYHlLsJSFg577yExxJAJULQbf61QtAhon%2FD6XMMx0CZaFfxM17NvovdwXZzS5uLo0H6KuDPc4N%2BjJ%2F0pSxybzcx97hrKxFfAvBhe%2Bp%2Fh1puJjW8vRO1njQMBMrYz4X642tulBJ6DBGBcozQeyEMSEC5xX81z8fAK6tAlAbsQbrnqDj4zWjG4qMdOE%2BdYQAgTgBGu5Stusc4IkeIHn&X-Amz-Signature=5896eb781e39626d900eff7dbebf71dc1d3a2f51d266de728290426fff88aa21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655A2WY7O%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuyrBclQXsbj0w%2BE3DmDMEobRQxJBNkmb42BFAbAGZQAIgLkUoTTmMYl302DNvduWdrYwe8Z4IufG7lRKw5%2BVLjJ8qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOOia1lor4k6jhp9CrcA4YgY39xjyg4n6LfgFFt47n5Az3YUR5xgzO5zdc0d9K55IH0gzSuKOy2YbsguPkABEVOEIwClk152hqoAmVBj1tS1Ma%2FrKparbOBUM6Clzhial4Xgjqjq%2F1ozNimXTN59G7HWQpHzC3EqralltS5DVhlH94LqZeRN2F1FNsGQcBFWoHSWwnEi7XnWCQe59nwQ%2BZmrhv2%2BjH50TrOcuW5%2BO8rRPgvADzZdhsjI8888BYObHpuKvQTmuiiuuFiOAvR76tP07QNym%2F6%2BSGaZCzJPf3DfACnSLNB5qlzty%2BN%2FmDxTPCdItBYWrQYWt%2FOzA%2BpIsSw9deR9S9FUVNaHxrtXqQpZB7X6tkYopf86vLj6qZnIwo5qwZXi%2B4TWkvhDpBoUl4QzNF4cFwygzvsBU%2FkLTWCOMfkbehzNlIzSXZpCwLCJzXpAY0mdHjfyAm%2BXsN0OFzUMGUmTrlT76tNNJN%2F0lZkrgfzOzaNKdJrENPKjLgA%2Blt7HvhZcSwznw1d5aahIzAlZGS%2F89fYqSVgf6PEBVagJf8QSzgCKdBE24A%2FQIRrcXxIqKn0xB5XkACio16pPc%2BemxHS2yzYlF2xPkycP5J90fr0hLvBzhepCc1DhlR8lyzJVcYYd2YZjcmDMPKs5sQGOqUBtlxRVkjK5dwUYHlLsJSFg577yExxJAJULQbf61QtAhon%2FD6XMMx0CZaFfxM17NvovdwXZzS5uLo0H6KuDPc4N%2BjJ%2F0pSxybzcx97hrKxFfAvBhe%2Bp%2Fh1puJjW8vRO1njQMBMrYz4X642tulBJ6DBGBcozQeyEMSEC5xX81z8fAK6tAlAbsQbrnqDj4zWjG4qMdOE%2BdYQAgTgBGu5Stusc4IkeIHn&X-Amz-Signature=58212cf1373e15de6f4df29224325570c527e85c0a140b220b72010b469c6838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655A2WY7O%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuyrBclQXsbj0w%2BE3DmDMEobRQxJBNkmb42BFAbAGZQAIgLkUoTTmMYl302DNvduWdrYwe8Z4IufG7lRKw5%2BVLjJ8qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOOia1lor4k6jhp9CrcA4YgY39xjyg4n6LfgFFt47n5Az3YUR5xgzO5zdc0d9K55IH0gzSuKOy2YbsguPkABEVOEIwClk152hqoAmVBj1tS1Ma%2FrKparbOBUM6Clzhial4Xgjqjq%2F1ozNimXTN59G7HWQpHzC3EqralltS5DVhlH94LqZeRN2F1FNsGQcBFWoHSWwnEi7XnWCQe59nwQ%2BZmrhv2%2BjH50TrOcuW5%2BO8rRPgvADzZdhsjI8888BYObHpuKvQTmuiiuuFiOAvR76tP07QNym%2F6%2BSGaZCzJPf3DfACnSLNB5qlzty%2BN%2FmDxTPCdItBYWrQYWt%2FOzA%2BpIsSw9deR9S9FUVNaHxrtXqQpZB7X6tkYopf86vLj6qZnIwo5qwZXi%2B4TWkvhDpBoUl4QzNF4cFwygzvsBU%2FkLTWCOMfkbehzNlIzSXZpCwLCJzXpAY0mdHjfyAm%2BXsN0OFzUMGUmTrlT76tNNJN%2F0lZkrgfzOzaNKdJrENPKjLgA%2Blt7HvhZcSwznw1d5aahIzAlZGS%2F89fYqSVgf6PEBVagJf8QSzgCKdBE24A%2FQIRrcXxIqKn0xB5XkACio16pPc%2BemxHS2yzYlF2xPkycP5J90fr0hLvBzhepCc1DhlR8lyzJVcYYd2YZjcmDMPKs5sQGOqUBtlxRVkjK5dwUYHlLsJSFg577yExxJAJULQbf61QtAhon%2FD6XMMx0CZaFfxM17NvovdwXZzS5uLo0H6KuDPc4N%2BjJ%2F0pSxybzcx97hrKxFfAvBhe%2Bp%2Fh1puJjW8vRO1njQMBMrYz4X642tulBJ6DBGBcozQeyEMSEC5xX81z8fAK6tAlAbsQbrnqDj4zWjG4qMdOE%2BdYQAgTgBGu5Stusc4IkeIHn&X-Amz-Signature=e0b71de38a164679081efae3bcaeb860ee7c2d00ad26bec7d4a63e1feaa924c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655A2WY7O%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuyrBclQXsbj0w%2BE3DmDMEobRQxJBNkmb42BFAbAGZQAIgLkUoTTmMYl302DNvduWdrYwe8Z4IufG7lRKw5%2BVLjJ8qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOOia1lor4k6jhp9CrcA4YgY39xjyg4n6LfgFFt47n5Az3YUR5xgzO5zdc0d9K55IH0gzSuKOy2YbsguPkABEVOEIwClk152hqoAmVBj1tS1Ma%2FrKparbOBUM6Clzhial4Xgjqjq%2F1ozNimXTN59G7HWQpHzC3EqralltS5DVhlH94LqZeRN2F1FNsGQcBFWoHSWwnEi7XnWCQe59nwQ%2BZmrhv2%2BjH50TrOcuW5%2BO8rRPgvADzZdhsjI8888BYObHpuKvQTmuiiuuFiOAvR76tP07QNym%2F6%2BSGaZCzJPf3DfACnSLNB5qlzty%2BN%2FmDxTPCdItBYWrQYWt%2FOzA%2BpIsSw9deR9S9FUVNaHxrtXqQpZB7X6tkYopf86vLj6qZnIwo5qwZXi%2B4TWkvhDpBoUl4QzNF4cFwygzvsBU%2FkLTWCOMfkbehzNlIzSXZpCwLCJzXpAY0mdHjfyAm%2BXsN0OFzUMGUmTrlT76tNNJN%2F0lZkrgfzOzaNKdJrENPKjLgA%2Blt7HvhZcSwznw1d5aahIzAlZGS%2F89fYqSVgf6PEBVagJf8QSzgCKdBE24A%2FQIRrcXxIqKn0xB5XkACio16pPc%2BemxHS2yzYlF2xPkycP5J90fr0hLvBzhepCc1DhlR8lyzJVcYYd2YZjcmDMPKs5sQGOqUBtlxRVkjK5dwUYHlLsJSFg577yExxJAJULQbf61QtAhon%2FD6XMMx0CZaFfxM17NvovdwXZzS5uLo0H6KuDPc4N%2BjJ%2F0pSxybzcx97hrKxFfAvBhe%2Bp%2Fh1puJjW8vRO1njQMBMrYz4X642tulBJ6DBGBcozQeyEMSEC5xX81z8fAK6tAlAbsQbrnqDj4zWjG4qMdOE%2BdYQAgTgBGu5Stusc4IkeIHn&X-Amz-Signature=cf6074e7ec1b58b3370d47500cda6b67f4cf71f95f548bc1f1d7ddba14dcfcf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
