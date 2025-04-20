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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TUWDQMJ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFy48sRto6Rs2oTfDKPdzUkeDQPcd5YN2WcDMVz8RpZ6AiBz6QLSyXGeZhJ46bG7qZd4ZO2A9aWHglS%2FNFPSq2fsuSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdr0oZJzCgCjjdYKvKtwDxLXXe7hVQlr0JZ7UhGYza5tCaltVwOBtP4ILmLe1zNiYWlrbjPoDz2oj9lhUdDvyf1KLbB7gYLj0F27BOcaLZ4rcq1RKuN24U6%2BMOU22CfGc64RHcvxeKU6gwCk8mvnUxKurQNaQaMx%2Bgmz4CwU9upLp%2BlS3WmxYyECihTWHoG%2Fdwr65soFYTnwaFJtdVHwECEoIkhbXe5rDqBIo1th30ToclWJxMHG2r0WgTUvGUGRLNJrEvTSXV1NeO4W%2BwHr%2BFZ5MgYOVDn5qBNzFSfAw9sbYTnSeYZbLMyJOe06sA044zPZPnOIdZAp%2FpbIUy97eADnrgpRzc5Uotu8Ml3hU4QdO3icC7d9qbqXUgMCsetEavm6lfRFgx7pMaQDx7NnjzU1bTJueTePcH3TVjiNwyHVXBiXkxEBhb%2B1NzJDiziArxdseUd2PT%2Bs6vu7NZndS6OIBBQ9bQDelqFP19xm8kH4BjIKTPWFDCSAGLNQDmEap%2FHp016Bbhp7aiJFYvuuAbMsAsaoT4JRk40KZdRjeCW7GRlJqI%2FhPGIoZm4Vyts3ii3mjp2kzGItOSfxnlgQrrGyjAPEmcOMMRFYSpcVo8exj0GC9bd%2FJFPzKP7Z3Fhta2zndIo%2BkIwnLS78w%2BqOSwAY6pgGwqmwHa8LqmEXPvAxqsVq0NYguIp0RGBRP%2FeQb%2Fc%2FecWULvTlM4AP%2FaO2Lig8Pz8fdrjaaZFWi9oZbYI%2B0l0E8UzHT1Yjcs6I%2FD3j24judx5AVqohDcD%2F%2BIhRY%2FHL2ZpJgvv4xP8qyB4ov1OUj8RuXxu0nkjacafubLKZlcGIbyC%2FcNWf5MnDz4rTV7CRAVftIbd5deydjyUlM7A%2BFe3VRRIUXHfZ5&X-Amz-Signature=3170c89ed1527033575deed7747867a5089a1d17d8686512838da0421d61459e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TUWDQMJ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFy48sRto6Rs2oTfDKPdzUkeDQPcd5YN2WcDMVz8RpZ6AiBz6QLSyXGeZhJ46bG7qZd4ZO2A9aWHglS%2FNFPSq2fsuSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdr0oZJzCgCjjdYKvKtwDxLXXe7hVQlr0JZ7UhGYza5tCaltVwOBtP4ILmLe1zNiYWlrbjPoDz2oj9lhUdDvyf1KLbB7gYLj0F27BOcaLZ4rcq1RKuN24U6%2BMOU22CfGc64RHcvxeKU6gwCk8mvnUxKurQNaQaMx%2Bgmz4CwU9upLp%2BlS3WmxYyECihTWHoG%2Fdwr65soFYTnwaFJtdVHwECEoIkhbXe5rDqBIo1th30ToclWJxMHG2r0WgTUvGUGRLNJrEvTSXV1NeO4W%2BwHr%2BFZ5MgYOVDn5qBNzFSfAw9sbYTnSeYZbLMyJOe06sA044zPZPnOIdZAp%2FpbIUy97eADnrgpRzc5Uotu8Ml3hU4QdO3icC7d9qbqXUgMCsetEavm6lfRFgx7pMaQDx7NnjzU1bTJueTePcH3TVjiNwyHVXBiXkxEBhb%2B1NzJDiziArxdseUd2PT%2Bs6vu7NZndS6OIBBQ9bQDelqFP19xm8kH4BjIKTPWFDCSAGLNQDmEap%2FHp016Bbhp7aiJFYvuuAbMsAsaoT4JRk40KZdRjeCW7GRlJqI%2FhPGIoZm4Vyts3ii3mjp2kzGItOSfxnlgQrrGyjAPEmcOMMRFYSpcVo8exj0GC9bd%2FJFPzKP7Z3Fhta2zndIo%2BkIwnLS78w%2BqOSwAY6pgGwqmwHa8LqmEXPvAxqsVq0NYguIp0RGBRP%2FeQb%2Fc%2FecWULvTlM4AP%2FaO2Lig8Pz8fdrjaaZFWi9oZbYI%2B0l0E8UzHT1Yjcs6I%2FD3j24judx5AVqohDcD%2F%2BIhRY%2FHL2ZpJgvv4xP8qyB4ov1OUj8RuXxu0nkjacafubLKZlcGIbyC%2FcNWf5MnDz4rTV7CRAVftIbd5deydjyUlM7A%2BFe3VRRIUXHfZ5&X-Amz-Signature=c27f992a7564755ed6b49915aad434bb7af34bce42369e5b66b98418c46c1a17&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TUWDQMJ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFy48sRto6Rs2oTfDKPdzUkeDQPcd5YN2WcDMVz8RpZ6AiBz6QLSyXGeZhJ46bG7qZd4ZO2A9aWHglS%2FNFPSq2fsuSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdr0oZJzCgCjjdYKvKtwDxLXXe7hVQlr0JZ7UhGYza5tCaltVwOBtP4ILmLe1zNiYWlrbjPoDz2oj9lhUdDvyf1KLbB7gYLj0F27BOcaLZ4rcq1RKuN24U6%2BMOU22CfGc64RHcvxeKU6gwCk8mvnUxKurQNaQaMx%2Bgmz4CwU9upLp%2BlS3WmxYyECihTWHoG%2Fdwr65soFYTnwaFJtdVHwECEoIkhbXe5rDqBIo1th30ToclWJxMHG2r0WgTUvGUGRLNJrEvTSXV1NeO4W%2BwHr%2BFZ5MgYOVDn5qBNzFSfAw9sbYTnSeYZbLMyJOe06sA044zPZPnOIdZAp%2FpbIUy97eADnrgpRzc5Uotu8Ml3hU4QdO3icC7d9qbqXUgMCsetEavm6lfRFgx7pMaQDx7NnjzU1bTJueTePcH3TVjiNwyHVXBiXkxEBhb%2B1NzJDiziArxdseUd2PT%2Bs6vu7NZndS6OIBBQ9bQDelqFP19xm8kH4BjIKTPWFDCSAGLNQDmEap%2FHp016Bbhp7aiJFYvuuAbMsAsaoT4JRk40KZdRjeCW7GRlJqI%2FhPGIoZm4Vyts3ii3mjp2kzGItOSfxnlgQrrGyjAPEmcOMMRFYSpcVo8exj0GC9bd%2FJFPzKP7Z3Fhta2zndIo%2BkIwnLS78w%2BqOSwAY6pgGwqmwHa8LqmEXPvAxqsVq0NYguIp0RGBRP%2FeQb%2Fc%2FecWULvTlM4AP%2FaO2Lig8Pz8fdrjaaZFWi9oZbYI%2B0l0E8UzHT1Yjcs6I%2FD3j24judx5AVqohDcD%2F%2BIhRY%2FHL2ZpJgvv4xP8qyB4ov1OUj8RuXxu0nkjacafubLKZlcGIbyC%2FcNWf5MnDz4rTV7CRAVftIbd5deydjyUlM7A%2BFe3VRRIUXHfZ5&X-Amz-Signature=771b82a0945f9fe4e506f20e97fe4b93a29702501b5461c84e3c68eca5622fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TUWDQMJ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFy48sRto6Rs2oTfDKPdzUkeDQPcd5YN2WcDMVz8RpZ6AiBz6QLSyXGeZhJ46bG7qZd4ZO2A9aWHglS%2FNFPSq2fsuSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdr0oZJzCgCjjdYKvKtwDxLXXe7hVQlr0JZ7UhGYza5tCaltVwOBtP4ILmLe1zNiYWlrbjPoDz2oj9lhUdDvyf1KLbB7gYLj0F27BOcaLZ4rcq1RKuN24U6%2BMOU22CfGc64RHcvxeKU6gwCk8mvnUxKurQNaQaMx%2Bgmz4CwU9upLp%2BlS3WmxYyECihTWHoG%2Fdwr65soFYTnwaFJtdVHwECEoIkhbXe5rDqBIo1th30ToclWJxMHG2r0WgTUvGUGRLNJrEvTSXV1NeO4W%2BwHr%2BFZ5MgYOVDn5qBNzFSfAw9sbYTnSeYZbLMyJOe06sA044zPZPnOIdZAp%2FpbIUy97eADnrgpRzc5Uotu8Ml3hU4QdO3icC7d9qbqXUgMCsetEavm6lfRFgx7pMaQDx7NnjzU1bTJueTePcH3TVjiNwyHVXBiXkxEBhb%2B1NzJDiziArxdseUd2PT%2Bs6vu7NZndS6OIBBQ9bQDelqFP19xm8kH4BjIKTPWFDCSAGLNQDmEap%2FHp016Bbhp7aiJFYvuuAbMsAsaoT4JRk40KZdRjeCW7GRlJqI%2FhPGIoZm4Vyts3ii3mjp2kzGItOSfxnlgQrrGyjAPEmcOMMRFYSpcVo8exj0GC9bd%2FJFPzKP7Z3Fhta2zndIo%2BkIwnLS78w%2BqOSwAY6pgGwqmwHa8LqmEXPvAxqsVq0NYguIp0RGBRP%2FeQb%2Fc%2FecWULvTlM4AP%2FaO2Lig8Pz8fdrjaaZFWi9oZbYI%2B0l0E8UzHT1Yjcs6I%2FD3j24judx5AVqohDcD%2F%2BIhRY%2FHL2ZpJgvv4xP8qyB4ov1OUj8RuXxu0nkjacafubLKZlcGIbyC%2FcNWf5MnDz4rTV7CRAVftIbd5deydjyUlM7A%2BFe3VRRIUXHfZ5&X-Amz-Signature=2a9bb4e37214f2943c8536633cf4678090a23f5c481b8cd1ccb942fdbb477e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TUWDQMJ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFy48sRto6Rs2oTfDKPdzUkeDQPcd5YN2WcDMVz8RpZ6AiBz6QLSyXGeZhJ46bG7qZd4ZO2A9aWHglS%2FNFPSq2fsuSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdr0oZJzCgCjjdYKvKtwDxLXXe7hVQlr0JZ7UhGYza5tCaltVwOBtP4ILmLe1zNiYWlrbjPoDz2oj9lhUdDvyf1KLbB7gYLj0F27BOcaLZ4rcq1RKuN24U6%2BMOU22CfGc64RHcvxeKU6gwCk8mvnUxKurQNaQaMx%2Bgmz4CwU9upLp%2BlS3WmxYyECihTWHoG%2Fdwr65soFYTnwaFJtdVHwECEoIkhbXe5rDqBIo1th30ToclWJxMHG2r0WgTUvGUGRLNJrEvTSXV1NeO4W%2BwHr%2BFZ5MgYOVDn5qBNzFSfAw9sbYTnSeYZbLMyJOe06sA044zPZPnOIdZAp%2FpbIUy97eADnrgpRzc5Uotu8Ml3hU4QdO3icC7d9qbqXUgMCsetEavm6lfRFgx7pMaQDx7NnjzU1bTJueTePcH3TVjiNwyHVXBiXkxEBhb%2B1NzJDiziArxdseUd2PT%2Bs6vu7NZndS6OIBBQ9bQDelqFP19xm8kH4BjIKTPWFDCSAGLNQDmEap%2FHp016Bbhp7aiJFYvuuAbMsAsaoT4JRk40KZdRjeCW7GRlJqI%2FhPGIoZm4Vyts3ii3mjp2kzGItOSfxnlgQrrGyjAPEmcOMMRFYSpcVo8exj0GC9bd%2FJFPzKP7Z3Fhta2zndIo%2BkIwnLS78w%2BqOSwAY6pgGwqmwHa8LqmEXPvAxqsVq0NYguIp0RGBRP%2FeQb%2Fc%2FecWULvTlM4AP%2FaO2Lig8Pz8fdrjaaZFWi9oZbYI%2B0l0E8UzHT1Yjcs6I%2FD3j24judx5AVqohDcD%2F%2BIhRY%2FHL2ZpJgvv4xP8qyB4ov1OUj8RuXxu0nkjacafubLKZlcGIbyC%2FcNWf5MnDz4rTV7CRAVftIbd5deydjyUlM7A%2BFe3VRRIUXHfZ5&X-Amz-Signature=5171d8f159927b8ef0c21e5c3621d1012334f8536d5c7b2649a8e50f4366d0d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
