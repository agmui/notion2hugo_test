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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIAKLEST%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICe3bLweMEibKWfUpFH%2FCGO9evW8WQnT3FjdUTYMxNA3AiAk1jVbf1HavKFSXVy2KSCVLUKIKKRQz6m717DEfoWrZyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMUZNWCkBsEVxr%2BgoJKtwD62BRl0uPDOqULIpC2E%2BtXNp1xsjIjdz%2FX9AHApYGI9BNkgwq%2FzhagRPx8xYWLnRTgEKchdtWyijg269DTTD2UtchDHSOwWKg%2Blo5WRLbqCXBvKh6VsgCz8IGwSZ7lBK51KjUO9sRenoXj8oYyfm8eSdZMXUm5Qr9q01LpqF8I%2FeGA49i2jbAtB36CRbe6QJ1OG1vdkmpolbA0prKUPFAd5kyWgKKJldnHRr57eU06IpZqY6Hzq0ALbpSy4iJleEH1DFQ2wNwuM3hH52zXuD6Cf3b26NndT1vg45tLN9mhHmBsSJpKwaFFKLTLxGDyhhaT%2FB8KPdhdlKx3rlLCvdt0f1%2FPNDesBERiHnM4v5%2F4eRTVub3nC2hDvug070Ct4fbd9YrpkqxtF9EItApm0yfLHctvVSQ6%2BzJe4yI2vs11zPC2bv%2FczBGqpWgqqAIkW1khBoneW3jVvaoZ6aHm6xaQ%2FUjdSR9dVf3gW1tS60BL10ClM0xFy53ZZ3AGHMSRb%2FbSfU6MVNSahbfXDH3hsNcDnbQEliGt3TCFNaRM8dNhkdtrrysTvF6xdcB7WISjdvw3PIn1qO8wgCOZTnZXWK%2BM1hWkFYJ5ipOtnOyziB%2FcXkoMw4ACsJ88gTs96owq5z1wgY6pgFo0AwO1%2BG7uRdfHKGpTJFHoui4oWT4gMLdqWL%2Bvm9qaREH2dW3zEirz3HjRcfNZTJ7d2lLxghyf5itbhwEBQqA3aDN8i4aPQxgaJ2op6S3h7iOvRv5vln%2FCkgGGErzCsn%2FnPUI1HiW1KehR30XjBPha35c4Shro43g8KmZ3ltoTcUkS55gv1gmMkK6o9W9CHZvWO5UfPqggDKLOctUrYYCxBRL1R3I&X-Amz-Signature=7271094c77be5bc4f6b9dd3370a2dec8197ef43078617055a3cfe117f28a9fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIAKLEST%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICe3bLweMEibKWfUpFH%2FCGO9evW8WQnT3FjdUTYMxNA3AiAk1jVbf1HavKFSXVy2KSCVLUKIKKRQz6m717DEfoWrZyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMUZNWCkBsEVxr%2BgoJKtwD62BRl0uPDOqULIpC2E%2BtXNp1xsjIjdz%2FX9AHApYGI9BNkgwq%2FzhagRPx8xYWLnRTgEKchdtWyijg269DTTD2UtchDHSOwWKg%2Blo5WRLbqCXBvKh6VsgCz8IGwSZ7lBK51KjUO9sRenoXj8oYyfm8eSdZMXUm5Qr9q01LpqF8I%2FeGA49i2jbAtB36CRbe6QJ1OG1vdkmpolbA0prKUPFAd5kyWgKKJldnHRr57eU06IpZqY6Hzq0ALbpSy4iJleEH1DFQ2wNwuM3hH52zXuD6Cf3b26NndT1vg45tLN9mhHmBsSJpKwaFFKLTLxGDyhhaT%2FB8KPdhdlKx3rlLCvdt0f1%2FPNDesBERiHnM4v5%2F4eRTVub3nC2hDvug070Ct4fbd9YrpkqxtF9EItApm0yfLHctvVSQ6%2BzJe4yI2vs11zPC2bv%2FczBGqpWgqqAIkW1khBoneW3jVvaoZ6aHm6xaQ%2FUjdSR9dVf3gW1tS60BL10ClM0xFy53ZZ3AGHMSRb%2FbSfU6MVNSahbfXDH3hsNcDnbQEliGt3TCFNaRM8dNhkdtrrysTvF6xdcB7WISjdvw3PIn1qO8wgCOZTnZXWK%2BM1hWkFYJ5ipOtnOyziB%2FcXkoMw4ACsJ88gTs96owq5z1wgY6pgFo0AwO1%2BG7uRdfHKGpTJFHoui4oWT4gMLdqWL%2Bvm9qaREH2dW3zEirz3HjRcfNZTJ7d2lLxghyf5itbhwEBQqA3aDN8i4aPQxgaJ2op6S3h7iOvRv5vln%2FCkgGGErzCsn%2FnPUI1HiW1KehR30XjBPha35c4Shro43g8KmZ3ltoTcUkS55gv1gmMkK6o9W9CHZvWO5UfPqggDKLOctUrYYCxBRL1R3I&X-Amz-Signature=94fc146b1f5797461c992692580afc43d1bd3b1aac4716a8dc98cd9e3a6a7d78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIAKLEST%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICe3bLweMEibKWfUpFH%2FCGO9evW8WQnT3FjdUTYMxNA3AiAk1jVbf1HavKFSXVy2KSCVLUKIKKRQz6m717DEfoWrZyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMUZNWCkBsEVxr%2BgoJKtwD62BRl0uPDOqULIpC2E%2BtXNp1xsjIjdz%2FX9AHApYGI9BNkgwq%2FzhagRPx8xYWLnRTgEKchdtWyijg269DTTD2UtchDHSOwWKg%2Blo5WRLbqCXBvKh6VsgCz8IGwSZ7lBK51KjUO9sRenoXj8oYyfm8eSdZMXUm5Qr9q01LpqF8I%2FeGA49i2jbAtB36CRbe6QJ1OG1vdkmpolbA0prKUPFAd5kyWgKKJldnHRr57eU06IpZqY6Hzq0ALbpSy4iJleEH1DFQ2wNwuM3hH52zXuD6Cf3b26NndT1vg45tLN9mhHmBsSJpKwaFFKLTLxGDyhhaT%2FB8KPdhdlKx3rlLCvdt0f1%2FPNDesBERiHnM4v5%2F4eRTVub3nC2hDvug070Ct4fbd9YrpkqxtF9EItApm0yfLHctvVSQ6%2BzJe4yI2vs11zPC2bv%2FczBGqpWgqqAIkW1khBoneW3jVvaoZ6aHm6xaQ%2FUjdSR9dVf3gW1tS60BL10ClM0xFy53ZZ3AGHMSRb%2FbSfU6MVNSahbfXDH3hsNcDnbQEliGt3TCFNaRM8dNhkdtrrysTvF6xdcB7WISjdvw3PIn1qO8wgCOZTnZXWK%2BM1hWkFYJ5ipOtnOyziB%2FcXkoMw4ACsJ88gTs96owq5z1wgY6pgFo0AwO1%2BG7uRdfHKGpTJFHoui4oWT4gMLdqWL%2Bvm9qaREH2dW3zEirz3HjRcfNZTJ7d2lLxghyf5itbhwEBQqA3aDN8i4aPQxgaJ2op6S3h7iOvRv5vln%2FCkgGGErzCsn%2FnPUI1HiW1KehR30XjBPha35c4Shro43g8KmZ3ltoTcUkS55gv1gmMkK6o9W9CHZvWO5UfPqggDKLOctUrYYCxBRL1R3I&X-Amz-Signature=6cbad33c27b9f97b45509e1acee86e1d3a105d19c82310aacad0964a47c00670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIAKLEST%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICe3bLweMEibKWfUpFH%2FCGO9evW8WQnT3FjdUTYMxNA3AiAk1jVbf1HavKFSXVy2KSCVLUKIKKRQz6m717DEfoWrZyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMUZNWCkBsEVxr%2BgoJKtwD62BRl0uPDOqULIpC2E%2BtXNp1xsjIjdz%2FX9AHApYGI9BNkgwq%2FzhagRPx8xYWLnRTgEKchdtWyijg269DTTD2UtchDHSOwWKg%2Blo5WRLbqCXBvKh6VsgCz8IGwSZ7lBK51KjUO9sRenoXj8oYyfm8eSdZMXUm5Qr9q01LpqF8I%2FeGA49i2jbAtB36CRbe6QJ1OG1vdkmpolbA0prKUPFAd5kyWgKKJldnHRr57eU06IpZqY6Hzq0ALbpSy4iJleEH1DFQ2wNwuM3hH52zXuD6Cf3b26NndT1vg45tLN9mhHmBsSJpKwaFFKLTLxGDyhhaT%2FB8KPdhdlKx3rlLCvdt0f1%2FPNDesBERiHnM4v5%2F4eRTVub3nC2hDvug070Ct4fbd9YrpkqxtF9EItApm0yfLHctvVSQ6%2BzJe4yI2vs11zPC2bv%2FczBGqpWgqqAIkW1khBoneW3jVvaoZ6aHm6xaQ%2FUjdSR9dVf3gW1tS60BL10ClM0xFy53ZZ3AGHMSRb%2FbSfU6MVNSahbfXDH3hsNcDnbQEliGt3TCFNaRM8dNhkdtrrysTvF6xdcB7WISjdvw3PIn1qO8wgCOZTnZXWK%2BM1hWkFYJ5ipOtnOyziB%2FcXkoMw4ACsJ88gTs96owq5z1wgY6pgFo0AwO1%2BG7uRdfHKGpTJFHoui4oWT4gMLdqWL%2Bvm9qaREH2dW3zEirz3HjRcfNZTJ7d2lLxghyf5itbhwEBQqA3aDN8i4aPQxgaJ2op6S3h7iOvRv5vln%2FCkgGGErzCsn%2FnPUI1HiW1KehR30XjBPha35c4Shro43g8KmZ3ltoTcUkS55gv1gmMkK6o9W9CHZvWO5UfPqggDKLOctUrYYCxBRL1R3I&X-Amz-Signature=5a678a355ef5337cd20c33e787e0fa8ae340c3bc5538cfd30cb4672b8d39860e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIAKLEST%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICe3bLweMEibKWfUpFH%2FCGO9evW8WQnT3FjdUTYMxNA3AiAk1jVbf1HavKFSXVy2KSCVLUKIKKRQz6m717DEfoWrZyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMUZNWCkBsEVxr%2BgoJKtwD62BRl0uPDOqULIpC2E%2BtXNp1xsjIjdz%2FX9AHApYGI9BNkgwq%2FzhagRPx8xYWLnRTgEKchdtWyijg269DTTD2UtchDHSOwWKg%2Blo5WRLbqCXBvKh6VsgCz8IGwSZ7lBK51KjUO9sRenoXj8oYyfm8eSdZMXUm5Qr9q01LpqF8I%2FeGA49i2jbAtB36CRbe6QJ1OG1vdkmpolbA0prKUPFAd5kyWgKKJldnHRr57eU06IpZqY6Hzq0ALbpSy4iJleEH1DFQ2wNwuM3hH52zXuD6Cf3b26NndT1vg45tLN9mhHmBsSJpKwaFFKLTLxGDyhhaT%2FB8KPdhdlKx3rlLCvdt0f1%2FPNDesBERiHnM4v5%2F4eRTVub3nC2hDvug070Ct4fbd9YrpkqxtF9EItApm0yfLHctvVSQ6%2BzJe4yI2vs11zPC2bv%2FczBGqpWgqqAIkW1khBoneW3jVvaoZ6aHm6xaQ%2FUjdSR9dVf3gW1tS60BL10ClM0xFy53ZZ3AGHMSRb%2FbSfU6MVNSahbfXDH3hsNcDnbQEliGt3TCFNaRM8dNhkdtrrysTvF6xdcB7WISjdvw3PIn1qO8wgCOZTnZXWK%2BM1hWkFYJ5ipOtnOyziB%2FcXkoMw4ACsJ88gTs96owq5z1wgY6pgFo0AwO1%2BG7uRdfHKGpTJFHoui4oWT4gMLdqWL%2Bvm9qaREH2dW3zEirz3HjRcfNZTJ7d2lLxghyf5itbhwEBQqA3aDN8i4aPQxgaJ2op6S3h7iOvRv5vln%2FCkgGGErzCsn%2FnPUI1HiW1KehR30XjBPha35c4Shro43g8KmZ3ltoTcUkS55gv1gmMkK6o9W9CHZvWO5UfPqggDKLOctUrYYCxBRL1R3I&X-Amz-Signature=3e77ca0545c12f0c05855786cdd7900ce441f3840f8297549c810b8c4296be0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
