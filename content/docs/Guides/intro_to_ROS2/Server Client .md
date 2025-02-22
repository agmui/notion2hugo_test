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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIJ4P5F%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FgJW95fMVqFSe4YxnPG3AuX%2BKIU24nHA%2FiB0BNzb04AiAeH59Up0jn3eUqEPc1vXsQt1f6AwM7JQwHCs%2F9N6m1eiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsR1dQKL9zE8lEpv6KtwDPnRTMpuwbiQk6DksOcLLigxKRyDV3Pm6KcnZhKvFYYZ5Wxtc88spt8wQN9I%2FQG3qQ2ZHb8%2FYQQ68W2gbKBWGhjUF7M6PLWQ1Ku64JKawYu6HMplBS2ZtUAhrSntTWEp9Zrb9WESfJbcWuf6PetTYTsEEKEYfQJX0YrZ5eiOiRe4CSAsW%2BCAXrblT1pddy4%2B%2Fte1e58tQ5VitQp8JwHXi%2B5Wo2g4GTUWDuz1OH8ehk4wA%2B6DgU51P1nPw3UmxbYHQ1Y9gLUSWZNd3v22zWeEWoa42xgOTF21KwIXusJ7SBclungy4zU0CBDbJdGOz0hmuv8%2BnPsp6kCtmHe4TrrPhasAaBGPDq4IgAlaodLo6suxuzfu7DzZDOZcvgHVZkSttrwdKBdgDhx4FDzvraXbxmB2x2Vektcy6eVbQcZsLeTQcSZ0XLIukZR5IAxsPK9%2FDKOjk15Oi6U4v03TYsNSedoHzkJ%2FRCXFq0pN%2F2PAD1VNqUobwFkQdKGPXx9ZKxxdjOMfvOBUa05y8uG7DvVvz4VfDra3Tpppzyb1hp%2B0DeWUsaIML1FS8JKJDdftfUOZt5C0JLw85bza07h40CYCQfgtWhysNy8gHdll%2B7FrxBiZqZ00Zkl2a35vmcPMwsMflvQY6pgFTu32qUiNACyCXqQNqGqXuVOnN4ebU7GoKIU9Z4VteK3L357373dShivqv7WykCxCtG6%2Bema%2B0M6PNB6nCJ4ibje5NWgPoI0cBsc4d0DMvriQWrNvhSr7FfGrIyr5eK8o2vF4%2BU%2BeyVQ6tbrVJmEWUswKckUUNEEKqS%2FddNgra9uKp4szIkYab42O9tMk6WVY90JyPz4uayGvbV8kGinHLMQbVXZ20&X-Amz-Signature=8a32b80e36c8c7c8a314001f1ede5d37fc69d7e87f6add15c1aca030b43924c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIJ4P5F%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FgJW95fMVqFSe4YxnPG3AuX%2BKIU24nHA%2FiB0BNzb04AiAeH59Up0jn3eUqEPc1vXsQt1f6AwM7JQwHCs%2F9N6m1eiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsR1dQKL9zE8lEpv6KtwDPnRTMpuwbiQk6DksOcLLigxKRyDV3Pm6KcnZhKvFYYZ5Wxtc88spt8wQN9I%2FQG3qQ2ZHb8%2FYQQ68W2gbKBWGhjUF7M6PLWQ1Ku64JKawYu6HMplBS2ZtUAhrSntTWEp9Zrb9WESfJbcWuf6PetTYTsEEKEYfQJX0YrZ5eiOiRe4CSAsW%2BCAXrblT1pddy4%2B%2Fte1e58tQ5VitQp8JwHXi%2B5Wo2g4GTUWDuz1OH8ehk4wA%2B6DgU51P1nPw3UmxbYHQ1Y9gLUSWZNd3v22zWeEWoa42xgOTF21KwIXusJ7SBclungy4zU0CBDbJdGOz0hmuv8%2BnPsp6kCtmHe4TrrPhasAaBGPDq4IgAlaodLo6suxuzfu7DzZDOZcvgHVZkSttrwdKBdgDhx4FDzvraXbxmB2x2Vektcy6eVbQcZsLeTQcSZ0XLIukZR5IAxsPK9%2FDKOjk15Oi6U4v03TYsNSedoHzkJ%2FRCXFq0pN%2F2PAD1VNqUobwFkQdKGPXx9ZKxxdjOMfvOBUa05y8uG7DvVvz4VfDra3Tpppzyb1hp%2B0DeWUsaIML1FS8JKJDdftfUOZt5C0JLw85bza07h40CYCQfgtWhysNy8gHdll%2B7FrxBiZqZ00Zkl2a35vmcPMwsMflvQY6pgFTu32qUiNACyCXqQNqGqXuVOnN4ebU7GoKIU9Z4VteK3L357373dShivqv7WykCxCtG6%2Bema%2B0M6PNB6nCJ4ibje5NWgPoI0cBsc4d0DMvriQWrNvhSr7FfGrIyr5eK8o2vF4%2BU%2BeyVQ6tbrVJmEWUswKckUUNEEKqS%2FddNgra9uKp4szIkYab42O9tMk6WVY90JyPz4uayGvbV8kGinHLMQbVXZ20&X-Amz-Signature=e75648ade25a2e3bf3a8ae904854d15a4c5a4da3ff7c821cfc6bc1b3f6acc86b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIJ4P5F%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FgJW95fMVqFSe4YxnPG3AuX%2BKIU24nHA%2FiB0BNzb04AiAeH59Up0jn3eUqEPc1vXsQt1f6AwM7JQwHCs%2F9N6m1eiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsR1dQKL9zE8lEpv6KtwDPnRTMpuwbiQk6DksOcLLigxKRyDV3Pm6KcnZhKvFYYZ5Wxtc88spt8wQN9I%2FQG3qQ2ZHb8%2FYQQ68W2gbKBWGhjUF7M6PLWQ1Ku64JKawYu6HMplBS2ZtUAhrSntTWEp9Zrb9WESfJbcWuf6PetTYTsEEKEYfQJX0YrZ5eiOiRe4CSAsW%2BCAXrblT1pddy4%2B%2Fte1e58tQ5VitQp8JwHXi%2B5Wo2g4GTUWDuz1OH8ehk4wA%2B6DgU51P1nPw3UmxbYHQ1Y9gLUSWZNd3v22zWeEWoa42xgOTF21KwIXusJ7SBclungy4zU0CBDbJdGOz0hmuv8%2BnPsp6kCtmHe4TrrPhasAaBGPDq4IgAlaodLo6suxuzfu7DzZDOZcvgHVZkSttrwdKBdgDhx4FDzvraXbxmB2x2Vektcy6eVbQcZsLeTQcSZ0XLIukZR5IAxsPK9%2FDKOjk15Oi6U4v03TYsNSedoHzkJ%2FRCXFq0pN%2F2PAD1VNqUobwFkQdKGPXx9ZKxxdjOMfvOBUa05y8uG7DvVvz4VfDra3Tpppzyb1hp%2B0DeWUsaIML1FS8JKJDdftfUOZt5C0JLw85bza07h40CYCQfgtWhysNy8gHdll%2B7FrxBiZqZ00Zkl2a35vmcPMwsMflvQY6pgFTu32qUiNACyCXqQNqGqXuVOnN4ebU7GoKIU9Z4VteK3L357373dShivqv7WykCxCtG6%2Bema%2B0M6PNB6nCJ4ibje5NWgPoI0cBsc4d0DMvriQWrNvhSr7FfGrIyr5eK8o2vF4%2BU%2BeyVQ6tbrVJmEWUswKckUUNEEKqS%2FddNgra9uKp4szIkYab42O9tMk6WVY90JyPz4uayGvbV8kGinHLMQbVXZ20&X-Amz-Signature=140ae7f516fd0268d3ef2918a74595373ec27bb610d0fb1c86b2c747308f2fda&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIJ4P5F%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FgJW95fMVqFSe4YxnPG3AuX%2BKIU24nHA%2FiB0BNzb04AiAeH59Up0jn3eUqEPc1vXsQt1f6AwM7JQwHCs%2F9N6m1eiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsR1dQKL9zE8lEpv6KtwDPnRTMpuwbiQk6DksOcLLigxKRyDV3Pm6KcnZhKvFYYZ5Wxtc88spt8wQN9I%2FQG3qQ2ZHb8%2FYQQ68W2gbKBWGhjUF7M6PLWQ1Ku64JKawYu6HMplBS2ZtUAhrSntTWEp9Zrb9WESfJbcWuf6PetTYTsEEKEYfQJX0YrZ5eiOiRe4CSAsW%2BCAXrblT1pddy4%2B%2Fte1e58tQ5VitQp8JwHXi%2B5Wo2g4GTUWDuz1OH8ehk4wA%2B6DgU51P1nPw3UmxbYHQ1Y9gLUSWZNd3v22zWeEWoa42xgOTF21KwIXusJ7SBclungy4zU0CBDbJdGOz0hmuv8%2BnPsp6kCtmHe4TrrPhasAaBGPDq4IgAlaodLo6suxuzfu7DzZDOZcvgHVZkSttrwdKBdgDhx4FDzvraXbxmB2x2Vektcy6eVbQcZsLeTQcSZ0XLIukZR5IAxsPK9%2FDKOjk15Oi6U4v03TYsNSedoHzkJ%2FRCXFq0pN%2F2PAD1VNqUobwFkQdKGPXx9ZKxxdjOMfvOBUa05y8uG7DvVvz4VfDra3Tpppzyb1hp%2B0DeWUsaIML1FS8JKJDdftfUOZt5C0JLw85bza07h40CYCQfgtWhysNy8gHdll%2B7FrxBiZqZ00Zkl2a35vmcPMwsMflvQY6pgFTu32qUiNACyCXqQNqGqXuVOnN4ebU7GoKIU9Z4VteK3L357373dShivqv7WykCxCtG6%2Bema%2B0M6PNB6nCJ4ibje5NWgPoI0cBsc4d0DMvriQWrNvhSr7FfGrIyr5eK8o2vF4%2BU%2BeyVQ6tbrVJmEWUswKckUUNEEKqS%2FddNgra9uKp4szIkYab42O9tMk6WVY90JyPz4uayGvbV8kGinHLMQbVXZ20&X-Amz-Signature=db756a74bd6f15df2dda57464ce7994aa5875a15247555940ccf99e770b5a333&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIJ4P5F%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FgJW95fMVqFSe4YxnPG3AuX%2BKIU24nHA%2FiB0BNzb04AiAeH59Up0jn3eUqEPc1vXsQt1f6AwM7JQwHCs%2F9N6m1eiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsR1dQKL9zE8lEpv6KtwDPnRTMpuwbiQk6DksOcLLigxKRyDV3Pm6KcnZhKvFYYZ5Wxtc88spt8wQN9I%2FQG3qQ2ZHb8%2FYQQ68W2gbKBWGhjUF7M6PLWQ1Ku64JKawYu6HMplBS2ZtUAhrSntTWEp9Zrb9WESfJbcWuf6PetTYTsEEKEYfQJX0YrZ5eiOiRe4CSAsW%2BCAXrblT1pddy4%2B%2Fte1e58tQ5VitQp8JwHXi%2B5Wo2g4GTUWDuz1OH8ehk4wA%2B6DgU51P1nPw3UmxbYHQ1Y9gLUSWZNd3v22zWeEWoa42xgOTF21KwIXusJ7SBclungy4zU0CBDbJdGOz0hmuv8%2BnPsp6kCtmHe4TrrPhasAaBGPDq4IgAlaodLo6suxuzfu7DzZDOZcvgHVZkSttrwdKBdgDhx4FDzvraXbxmB2x2Vektcy6eVbQcZsLeTQcSZ0XLIukZR5IAxsPK9%2FDKOjk15Oi6U4v03TYsNSedoHzkJ%2FRCXFq0pN%2F2PAD1VNqUobwFkQdKGPXx9ZKxxdjOMfvOBUa05y8uG7DvVvz4VfDra3Tpppzyb1hp%2B0DeWUsaIML1FS8JKJDdftfUOZt5C0JLw85bza07h40CYCQfgtWhysNy8gHdll%2B7FrxBiZqZ00Zkl2a35vmcPMwsMflvQY6pgFTu32qUiNACyCXqQNqGqXuVOnN4ebU7GoKIU9Z4VteK3L357373dShivqv7WykCxCtG6%2Bema%2B0M6PNB6nCJ4ibje5NWgPoI0cBsc4d0DMvriQWrNvhSr7FfGrIyr5eK8o2vF4%2BU%2BeyVQ6tbrVJmEWUswKckUUNEEKqS%2FddNgra9uKp4szIkYab42O9tMk6WVY90JyPz4uayGvbV8kGinHLMQbVXZ20&X-Amz-Signature=33ce8dd59e61b24b4f3a9463d04f59f82a614467ff1fa2cf2dc125cb5e9a4984&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
