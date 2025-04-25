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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NL2L532%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNdxFrX8K6mcMA0xPuAaRO6I57%2FxunigbVrd03AP%2BtlwIhALB7UmWxuooIkyZHRcugrKnyhGBMaGASToZLBmXKrjbXKv8DCCoQABoMNjM3NDIzMTgzODA1IgyJgAOuDlcMUUPgfEgq3AP%2BKfHHqKFnH0chVIo5eN5hnXSGdarfL%2F%2FmCvV%2BhsBs9vBg8VtxNcF5axuDTBn88a%2FynF3B2urQgjLJOz6l3%2BQ1FgrCGyr%2FkMDlaj3KxQED%2FfONlXyKv0dKJoIDNElbZqoqYhM3g5JzOgJFRP4EuZdsWYrKUy5QPXnsYlT7E68vLWD7d8fdKq3Tn3Q52qXBNI8yqvZM1ofgTk6q%2B9hu0RHqYxyrrCbEMF3f7TgaXiEMQ86uqVH7EzH7JASbMU7isjB6nR4pGQZs882uir%2BBW5LaCtGaNfp6Bt5EF4X5jAKCEnCrhVUNP%2B1fejJvD%2BFeWZFw5LRQXLNJBa1%2BWmr3Fr6%2BWnyAVQvPNUlw%2FUW55KVp0yuhkn27%2F23hG98KENpwrVysuHa0PGnyM60gVdgfUnKj%2BQDxqTM9fMkPxXA1EGJ2UpZkHJe0u%2B41gI69IitzD06g%2BzoUnYpN6g1Hd9egNR%2BJrD45X8FRKvsq%2Byn91n0A1kQIOJ1gTYm7TxkCW3ShhYly8irPEqY4kp4TptyFBkmCeV1mJMXskJZvLPEOAWqkYfnTAiSEcpql2vcAz3vpNv3exzBJHd2Jd55v233lsklKH5W6gMfqbA71sYSnRVuFPgG24lCGHZ0PIj30mTC4m63ABjqkAQuXTh%2FMrrPYp6D99amzYMvOcFQ4MfpjQIDeh3AqOf9lhzFhVWmY99%2BR9iPCiLP%2BzZvCRZV4uZvo%2F20b%2BU8T6L4Ey0Ruj4ExKfF5xIJID1R8K9FJEAfmBCLQqTQKXbIt3JBpRoUu7q5pieXd%2FyA7lS3rV%2BEkK3O7VVnI909deZTuNBLeBdL6vWagsYLW3Dd8D7oQWNzalYybDP2d4WX5Wc726Cfl&X-Amz-Signature=c76a9660c544b5a23d3b4144e4b0e785ddd38dab76ba1ac7ef553158c38483cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NL2L532%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNdxFrX8K6mcMA0xPuAaRO6I57%2FxunigbVrd03AP%2BtlwIhALB7UmWxuooIkyZHRcugrKnyhGBMaGASToZLBmXKrjbXKv8DCCoQABoMNjM3NDIzMTgzODA1IgyJgAOuDlcMUUPgfEgq3AP%2BKfHHqKFnH0chVIo5eN5hnXSGdarfL%2F%2FmCvV%2BhsBs9vBg8VtxNcF5axuDTBn88a%2FynF3B2urQgjLJOz6l3%2BQ1FgrCGyr%2FkMDlaj3KxQED%2FfONlXyKv0dKJoIDNElbZqoqYhM3g5JzOgJFRP4EuZdsWYrKUy5QPXnsYlT7E68vLWD7d8fdKq3Tn3Q52qXBNI8yqvZM1ofgTk6q%2B9hu0RHqYxyrrCbEMF3f7TgaXiEMQ86uqVH7EzH7JASbMU7isjB6nR4pGQZs882uir%2BBW5LaCtGaNfp6Bt5EF4X5jAKCEnCrhVUNP%2B1fejJvD%2BFeWZFw5LRQXLNJBa1%2BWmr3Fr6%2BWnyAVQvPNUlw%2FUW55KVp0yuhkn27%2F23hG98KENpwrVysuHa0PGnyM60gVdgfUnKj%2BQDxqTM9fMkPxXA1EGJ2UpZkHJe0u%2B41gI69IitzD06g%2BzoUnYpN6g1Hd9egNR%2BJrD45X8FRKvsq%2Byn91n0A1kQIOJ1gTYm7TxkCW3ShhYly8irPEqY4kp4TptyFBkmCeV1mJMXskJZvLPEOAWqkYfnTAiSEcpql2vcAz3vpNv3exzBJHd2Jd55v233lsklKH5W6gMfqbA71sYSnRVuFPgG24lCGHZ0PIj30mTC4m63ABjqkAQuXTh%2FMrrPYp6D99amzYMvOcFQ4MfpjQIDeh3AqOf9lhzFhVWmY99%2BR9iPCiLP%2BzZvCRZV4uZvo%2F20b%2BU8T6L4Ey0Ruj4ExKfF5xIJID1R8K9FJEAfmBCLQqTQKXbIt3JBpRoUu7q5pieXd%2FyA7lS3rV%2BEkK3O7VVnI909deZTuNBLeBdL6vWagsYLW3Dd8D7oQWNzalYybDP2d4WX5Wc726Cfl&X-Amz-Signature=5af5a8e98a6e38aa5724f18cbc5f81b4e7ebb988d7372688cdc5fe05e7b13486&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NL2L532%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNdxFrX8K6mcMA0xPuAaRO6I57%2FxunigbVrd03AP%2BtlwIhALB7UmWxuooIkyZHRcugrKnyhGBMaGASToZLBmXKrjbXKv8DCCoQABoMNjM3NDIzMTgzODA1IgyJgAOuDlcMUUPgfEgq3AP%2BKfHHqKFnH0chVIo5eN5hnXSGdarfL%2F%2FmCvV%2BhsBs9vBg8VtxNcF5axuDTBn88a%2FynF3B2urQgjLJOz6l3%2BQ1FgrCGyr%2FkMDlaj3KxQED%2FfONlXyKv0dKJoIDNElbZqoqYhM3g5JzOgJFRP4EuZdsWYrKUy5QPXnsYlT7E68vLWD7d8fdKq3Tn3Q52qXBNI8yqvZM1ofgTk6q%2B9hu0RHqYxyrrCbEMF3f7TgaXiEMQ86uqVH7EzH7JASbMU7isjB6nR4pGQZs882uir%2BBW5LaCtGaNfp6Bt5EF4X5jAKCEnCrhVUNP%2B1fejJvD%2BFeWZFw5LRQXLNJBa1%2BWmr3Fr6%2BWnyAVQvPNUlw%2FUW55KVp0yuhkn27%2F23hG98KENpwrVysuHa0PGnyM60gVdgfUnKj%2BQDxqTM9fMkPxXA1EGJ2UpZkHJe0u%2B41gI69IitzD06g%2BzoUnYpN6g1Hd9egNR%2BJrD45X8FRKvsq%2Byn91n0A1kQIOJ1gTYm7TxkCW3ShhYly8irPEqY4kp4TptyFBkmCeV1mJMXskJZvLPEOAWqkYfnTAiSEcpql2vcAz3vpNv3exzBJHd2Jd55v233lsklKH5W6gMfqbA71sYSnRVuFPgG24lCGHZ0PIj30mTC4m63ABjqkAQuXTh%2FMrrPYp6D99amzYMvOcFQ4MfpjQIDeh3AqOf9lhzFhVWmY99%2BR9iPCiLP%2BzZvCRZV4uZvo%2F20b%2BU8T6L4Ey0Ruj4ExKfF5xIJID1R8K9FJEAfmBCLQqTQKXbIt3JBpRoUu7q5pieXd%2FyA7lS3rV%2BEkK3O7VVnI909deZTuNBLeBdL6vWagsYLW3Dd8D7oQWNzalYybDP2d4WX5Wc726Cfl&X-Amz-Signature=f500e4c43da06bef48f694454c10b73f50d95fbc7b555276f2f3745d4494d7ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NL2L532%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNdxFrX8K6mcMA0xPuAaRO6I57%2FxunigbVrd03AP%2BtlwIhALB7UmWxuooIkyZHRcugrKnyhGBMaGASToZLBmXKrjbXKv8DCCoQABoMNjM3NDIzMTgzODA1IgyJgAOuDlcMUUPgfEgq3AP%2BKfHHqKFnH0chVIo5eN5hnXSGdarfL%2F%2FmCvV%2BhsBs9vBg8VtxNcF5axuDTBn88a%2FynF3B2urQgjLJOz6l3%2BQ1FgrCGyr%2FkMDlaj3KxQED%2FfONlXyKv0dKJoIDNElbZqoqYhM3g5JzOgJFRP4EuZdsWYrKUy5QPXnsYlT7E68vLWD7d8fdKq3Tn3Q52qXBNI8yqvZM1ofgTk6q%2B9hu0RHqYxyrrCbEMF3f7TgaXiEMQ86uqVH7EzH7JASbMU7isjB6nR4pGQZs882uir%2BBW5LaCtGaNfp6Bt5EF4X5jAKCEnCrhVUNP%2B1fejJvD%2BFeWZFw5LRQXLNJBa1%2BWmr3Fr6%2BWnyAVQvPNUlw%2FUW55KVp0yuhkn27%2F23hG98KENpwrVysuHa0PGnyM60gVdgfUnKj%2BQDxqTM9fMkPxXA1EGJ2UpZkHJe0u%2B41gI69IitzD06g%2BzoUnYpN6g1Hd9egNR%2BJrD45X8FRKvsq%2Byn91n0A1kQIOJ1gTYm7TxkCW3ShhYly8irPEqY4kp4TptyFBkmCeV1mJMXskJZvLPEOAWqkYfnTAiSEcpql2vcAz3vpNv3exzBJHd2Jd55v233lsklKH5W6gMfqbA71sYSnRVuFPgG24lCGHZ0PIj30mTC4m63ABjqkAQuXTh%2FMrrPYp6D99amzYMvOcFQ4MfpjQIDeh3AqOf9lhzFhVWmY99%2BR9iPCiLP%2BzZvCRZV4uZvo%2F20b%2BU8T6L4Ey0Ruj4ExKfF5xIJID1R8K9FJEAfmBCLQqTQKXbIt3JBpRoUu7q5pieXd%2FyA7lS3rV%2BEkK3O7VVnI909deZTuNBLeBdL6vWagsYLW3Dd8D7oQWNzalYybDP2d4WX5Wc726Cfl&X-Amz-Signature=65364381b4ca1af98b0ede2f057b3d0db6c69fa94cd47de9e014b7e7ea908422&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NL2L532%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNdxFrX8K6mcMA0xPuAaRO6I57%2FxunigbVrd03AP%2BtlwIhALB7UmWxuooIkyZHRcugrKnyhGBMaGASToZLBmXKrjbXKv8DCCoQABoMNjM3NDIzMTgzODA1IgyJgAOuDlcMUUPgfEgq3AP%2BKfHHqKFnH0chVIo5eN5hnXSGdarfL%2F%2FmCvV%2BhsBs9vBg8VtxNcF5axuDTBn88a%2FynF3B2urQgjLJOz6l3%2BQ1FgrCGyr%2FkMDlaj3KxQED%2FfONlXyKv0dKJoIDNElbZqoqYhM3g5JzOgJFRP4EuZdsWYrKUy5QPXnsYlT7E68vLWD7d8fdKq3Tn3Q52qXBNI8yqvZM1ofgTk6q%2B9hu0RHqYxyrrCbEMF3f7TgaXiEMQ86uqVH7EzH7JASbMU7isjB6nR4pGQZs882uir%2BBW5LaCtGaNfp6Bt5EF4X5jAKCEnCrhVUNP%2B1fejJvD%2BFeWZFw5LRQXLNJBa1%2BWmr3Fr6%2BWnyAVQvPNUlw%2FUW55KVp0yuhkn27%2F23hG98KENpwrVysuHa0PGnyM60gVdgfUnKj%2BQDxqTM9fMkPxXA1EGJ2UpZkHJe0u%2B41gI69IitzD06g%2BzoUnYpN6g1Hd9egNR%2BJrD45X8FRKvsq%2Byn91n0A1kQIOJ1gTYm7TxkCW3ShhYly8irPEqY4kp4TptyFBkmCeV1mJMXskJZvLPEOAWqkYfnTAiSEcpql2vcAz3vpNv3exzBJHd2Jd55v233lsklKH5W6gMfqbA71sYSnRVuFPgG24lCGHZ0PIj30mTC4m63ABjqkAQuXTh%2FMrrPYp6D99amzYMvOcFQ4MfpjQIDeh3AqOf9lhzFhVWmY99%2BR9iPCiLP%2BzZvCRZV4uZvo%2F20b%2BU8T6L4Ey0Ruj4ExKfF5xIJID1R8K9FJEAfmBCLQqTQKXbIt3JBpRoUu7q5pieXd%2FyA7lS3rV%2BEkK3O7VVnI909deZTuNBLeBdL6vWagsYLW3Dd8D7oQWNzalYybDP2d4WX5Wc726Cfl&X-Amz-Signature=ab066a419a153a88384b13e9b1fe65f00d61079fa88f5827ac63bd49094af8fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
