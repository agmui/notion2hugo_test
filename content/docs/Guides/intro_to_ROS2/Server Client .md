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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZHKBY4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDLf6BkW24w17qtpiHjdzAvInyFZLCRS%2B%2BYF%2FB71vonswIhAK8J%2FZwj3VGrinhJf2ql5HWhy80tgwI%2FvmeZsmoeRZgRKv8DCFUQABoMNjM3NDIzMTgzODA1Igzg1MUpGYGeP9ECIJUq3AN73JbIzhFbAtIeFQ1w0VFtHYN%2FV9LMqvQGll9Gd2hzALjFoeaB4lrIdWhyTbJ%2FBhvug3nFaySZme72yBBpYV43okcfoNQ%2FCSy8020NNmPur7tlGQlI3eoWqWfxF5tnlzHte0C5epYCKOz76bEX%2F0YKVwD3lsh%2FK9GAIUOgf4lb904FC6bCu%2BLPi9vz7kBSJr9yqwjlldQofsY9jiguwytKG5NyddDomZCr3%2Fv7mY3SKlfZtrM5aoycd252%2FaisYdKsvppSnXeYbPMZHbhi4o57DPuZiHYKXDaw6gJ2B9hYezyQ5demDPVPVp9uq%2B5W48oUhO9t4EDciZgpTCwkCYGhBvkxPCHNpQ9CQHuf1Tg%2B0mxLfh%2BiFS8hL%2FNC%2Fx6ZQyaHN1nuu44ZKI1DRK1%2BOjAZyrYZky4DXDzasvrZNp3X3sw4jAzN4a5L6g3L5J2g7MFqM2lc14lA7Ek367FyyAkf%2F%2BN%2BA4ttAJtsrIyEBc8oDYzTJEODWSHdmI%2BwL022C1FB2jXIIgH6mkUNdf%2BjOadQnOBQpjLNhfTkEmVRw439KqjLhA1FRaXfCxWh0YyO7sMu8qvqy7aOSupzfxnQDt3fYooCVfGBdE4oMov29WXrmzYckaZTSkfvEysuGjCSifPCBjqkARsRwa9vg3mMRr432w3oGDncKVff7NgmPcCjJgeKE0yRykq34sS%2BI9wcr5S5SjxA0cANbuC6qJIBhxDKktHjnYJ0lgOLd76MFfNWnZgaUCEmcN1KYDl7RQF4zom3b7oiSbwHhMeVnv9rUF8M7JKL34EqyCN%2FxcZmpPYqBuoqmHh6f7v2oLjzzvM%2BnQGxqQ4G5L8GNc3k9GHQ6bpH89IMFXv1%2FQZW&X-Amz-Signature=ee61737c7358592475cd2e9240ec20feb04bd6caa8f186fd24240280a6f0820c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZHKBY4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDLf6BkW24w17qtpiHjdzAvInyFZLCRS%2B%2BYF%2FB71vonswIhAK8J%2FZwj3VGrinhJf2ql5HWhy80tgwI%2FvmeZsmoeRZgRKv8DCFUQABoMNjM3NDIzMTgzODA1Igzg1MUpGYGeP9ECIJUq3AN73JbIzhFbAtIeFQ1w0VFtHYN%2FV9LMqvQGll9Gd2hzALjFoeaB4lrIdWhyTbJ%2FBhvug3nFaySZme72yBBpYV43okcfoNQ%2FCSy8020NNmPur7tlGQlI3eoWqWfxF5tnlzHte0C5epYCKOz76bEX%2F0YKVwD3lsh%2FK9GAIUOgf4lb904FC6bCu%2BLPi9vz7kBSJr9yqwjlldQofsY9jiguwytKG5NyddDomZCr3%2Fv7mY3SKlfZtrM5aoycd252%2FaisYdKsvppSnXeYbPMZHbhi4o57DPuZiHYKXDaw6gJ2B9hYezyQ5demDPVPVp9uq%2B5W48oUhO9t4EDciZgpTCwkCYGhBvkxPCHNpQ9CQHuf1Tg%2B0mxLfh%2BiFS8hL%2FNC%2Fx6ZQyaHN1nuu44ZKI1DRK1%2BOjAZyrYZky4DXDzasvrZNp3X3sw4jAzN4a5L6g3L5J2g7MFqM2lc14lA7Ek367FyyAkf%2F%2BN%2BA4ttAJtsrIyEBc8oDYzTJEODWSHdmI%2BwL022C1FB2jXIIgH6mkUNdf%2BjOadQnOBQpjLNhfTkEmVRw439KqjLhA1FRaXfCxWh0YyO7sMu8qvqy7aOSupzfxnQDt3fYooCVfGBdE4oMov29WXrmzYckaZTSkfvEysuGjCSifPCBjqkARsRwa9vg3mMRr432w3oGDncKVff7NgmPcCjJgeKE0yRykq34sS%2BI9wcr5S5SjxA0cANbuC6qJIBhxDKktHjnYJ0lgOLd76MFfNWnZgaUCEmcN1KYDl7RQF4zom3b7oiSbwHhMeVnv9rUF8M7JKL34EqyCN%2FxcZmpPYqBuoqmHh6f7v2oLjzzvM%2BnQGxqQ4G5L8GNc3k9GHQ6bpH89IMFXv1%2FQZW&X-Amz-Signature=8639cac6c8b7f17d884997c96c286f2ba250d28d64e0c3ee11412397a1022a05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZHKBY4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDLf6BkW24w17qtpiHjdzAvInyFZLCRS%2B%2BYF%2FB71vonswIhAK8J%2FZwj3VGrinhJf2ql5HWhy80tgwI%2FvmeZsmoeRZgRKv8DCFUQABoMNjM3NDIzMTgzODA1Igzg1MUpGYGeP9ECIJUq3AN73JbIzhFbAtIeFQ1w0VFtHYN%2FV9LMqvQGll9Gd2hzALjFoeaB4lrIdWhyTbJ%2FBhvug3nFaySZme72yBBpYV43okcfoNQ%2FCSy8020NNmPur7tlGQlI3eoWqWfxF5tnlzHte0C5epYCKOz76bEX%2F0YKVwD3lsh%2FK9GAIUOgf4lb904FC6bCu%2BLPi9vz7kBSJr9yqwjlldQofsY9jiguwytKG5NyddDomZCr3%2Fv7mY3SKlfZtrM5aoycd252%2FaisYdKsvppSnXeYbPMZHbhi4o57DPuZiHYKXDaw6gJ2B9hYezyQ5demDPVPVp9uq%2B5W48oUhO9t4EDciZgpTCwkCYGhBvkxPCHNpQ9CQHuf1Tg%2B0mxLfh%2BiFS8hL%2FNC%2Fx6ZQyaHN1nuu44ZKI1DRK1%2BOjAZyrYZky4DXDzasvrZNp3X3sw4jAzN4a5L6g3L5J2g7MFqM2lc14lA7Ek367FyyAkf%2F%2BN%2BA4ttAJtsrIyEBc8oDYzTJEODWSHdmI%2BwL022C1FB2jXIIgH6mkUNdf%2BjOadQnOBQpjLNhfTkEmVRw439KqjLhA1FRaXfCxWh0YyO7sMu8qvqy7aOSupzfxnQDt3fYooCVfGBdE4oMov29WXrmzYckaZTSkfvEysuGjCSifPCBjqkARsRwa9vg3mMRr432w3oGDncKVff7NgmPcCjJgeKE0yRykq34sS%2BI9wcr5S5SjxA0cANbuC6qJIBhxDKktHjnYJ0lgOLd76MFfNWnZgaUCEmcN1KYDl7RQF4zom3b7oiSbwHhMeVnv9rUF8M7JKL34EqyCN%2FxcZmpPYqBuoqmHh6f7v2oLjzzvM%2BnQGxqQ4G5L8GNc3k9GHQ6bpH89IMFXv1%2FQZW&X-Amz-Signature=8ccfb125af0ced8c6c255f34c847d1938b29b0ce61398efe04335f67c7ccf00f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZHKBY4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDLf6BkW24w17qtpiHjdzAvInyFZLCRS%2B%2BYF%2FB71vonswIhAK8J%2FZwj3VGrinhJf2ql5HWhy80tgwI%2FvmeZsmoeRZgRKv8DCFUQABoMNjM3NDIzMTgzODA1Igzg1MUpGYGeP9ECIJUq3AN73JbIzhFbAtIeFQ1w0VFtHYN%2FV9LMqvQGll9Gd2hzALjFoeaB4lrIdWhyTbJ%2FBhvug3nFaySZme72yBBpYV43okcfoNQ%2FCSy8020NNmPur7tlGQlI3eoWqWfxF5tnlzHte0C5epYCKOz76bEX%2F0YKVwD3lsh%2FK9GAIUOgf4lb904FC6bCu%2BLPi9vz7kBSJr9yqwjlldQofsY9jiguwytKG5NyddDomZCr3%2Fv7mY3SKlfZtrM5aoycd252%2FaisYdKsvppSnXeYbPMZHbhi4o57DPuZiHYKXDaw6gJ2B9hYezyQ5demDPVPVp9uq%2B5W48oUhO9t4EDciZgpTCwkCYGhBvkxPCHNpQ9CQHuf1Tg%2B0mxLfh%2BiFS8hL%2FNC%2Fx6ZQyaHN1nuu44ZKI1DRK1%2BOjAZyrYZky4DXDzasvrZNp3X3sw4jAzN4a5L6g3L5J2g7MFqM2lc14lA7Ek367FyyAkf%2F%2BN%2BA4ttAJtsrIyEBc8oDYzTJEODWSHdmI%2BwL022C1FB2jXIIgH6mkUNdf%2BjOadQnOBQpjLNhfTkEmVRw439KqjLhA1FRaXfCxWh0YyO7sMu8qvqy7aOSupzfxnQDt3fYooCVfGBdE4oMov29WXrmzYckaZTSkfvEysuGjCSifPCBjqkARsRwa9vg3mMRr432w3oGDncKVff7NgmPcCjJgeKE0yRykq34sS%2BI9wcr5S5SjxA0cANbuC6qJIBhxDKktHjnYJ0lgOLd76MFfNWnZgaUCEmcN1KYDl7RQF4zom3b7oiSbwHhMeVnv9rUF8M7JKL34EqyCN%2FxcZmpPYqBuoqmHh6f7v2oLjzzvM%2BnQGxqQ4G5L8GNc3k9GHQ6bpH89IMFXv1%2FQZW&X-Amz-Signature=2b4ffd789bafb9a3361b66a8a25fac757590d2fb522ae18327cca79c3a2e37d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZHKBY4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDLf6BkW24w17qtpiHjdzAvInyFZLCRS%2B%2BYF%2FB71vonswIhAK8J%2FZwj3VGrinhJf2ql5HWhy80tgwI%2FvmeZsmoeRZgRKv8DCFUQABoMNjM3NDIzMTgzODA1Igzg1MUpGYGeP9ECIJUq3AN73JbIzhFbAtIeFQ1w0VFtHYN%2FV9LMqvQGll9Gd2hzALjFoeaB4lrIdWhyTbJ%2FBhvug3nFaySZme72yBBpYV43okcfoNQ%2FCSy8020NNmPur7tlGQlI3eoWqWfxF5tnlzHte0C5epYCKOz76bEX%2F0YKVwD3lsh%2FK9GAIUOgf4lb904FC6bCu%2BLPi9vz7kBSJr9yqwjlldQofsY9jiguwytKG5NyddDomZCr3%2Fv7mY3SKlfZtrM5aoycd252%2FaisYdKsvppSnXeYbPMZHbhi4o57DPuZiHYKXDaw6gJ2B9hYezyQ5demDPVPVp9uq%2B5W48oUhO9t4EDciZgpTCwkCYGhBvkxPCHNpQ9CQHuf1Tg%2B0mxLfh%2BiFS8hL%2FNC%2Fx6ZQyaHN1nuu44ZKI1DRK1%2BOjAZyrYZky4DXDzasvrZNp3X3sw4jAzN4a5L6g3L5J2g7MFqM2lc14lA7Ek367FyyAkf%2F%2BN%2BA4ttAJtsrIyEBc8oDYzTJEODWSHdmI%2BwL022C1FB2jXIIgH6mkUNdf%2BjOadQnOBQpjLNhfTkEmVRw439KqjLhA1FRaXfCxWh0YyO7sMu8qvqy7aOSupzfxnQDt3fYooCVfGBdE4oMov29WXrmzYckaZTSkfvEysuGjCSifPCBjqkARsRwa9vg3mMRr432w3oGDncKVff7NgmPcCjJgeKE0yRykq34sS%2BI9wcr5S5SjxA0cANbuC6qJIBhxDKktHjnYJ0lgOLd76MFfNWnZgaUCEmcN1KYDl7RQF4zom3b7oiSbwHhMeVnv9rUF8M7JKL34EqyCN%2FxcZmpPYqBuoqmHh6f7v2oLjzzvM%2BnQGxqQ4G5L8GNc3k9GHQ6bpH89IMFXv1%2FQZW&X-Amz-Signature=83646670a5f59bad3320ae39ea3fafc3ab0952e5ad390384cc601e30ec9b4a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
