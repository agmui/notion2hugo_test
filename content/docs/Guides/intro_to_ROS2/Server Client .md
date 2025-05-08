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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ7CIWML%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCewgBOHZQbqs8zrcUtXPinvGaLI8Gm0mQlbl9I197mLAIhALhlZ8LOqPwiJNrSOSWJ2Ea4NW4Ar9BfC8qLTA68POzsKv8DCGwQABoMNjM3NDIzMTgzODA1IgxUP2UBLwD6F56NUHgq3ANZxxMdxXeLWh4jH1ZVyDzJfwTNXYgiZBp0xI7JGF7bkJxVx7kHXKFrUFU8UA8CIVMElfnSWFkL7iQJa6C%2F2TVIB0zLwYdqTB1MMlh6fwBcs1gzu4CuUIMogjmOgZFN8%2FO7HHWssCP%2B2a3ZnYs5ziJLoYDaas7iGpSZ48Y%2BnmYzqPP4SUoFRe7vVSyzRrUZTt%2F%2BzDTjIjIzUSl7iblrQeHpvEl5%2FYobswPVGbPlIhreffdPfzXcFhumFMHHMalF6O1EPg4YaLjrbhIzS4fkZOxVUqJGvacBmFoTqsqFe4tg%2Fu8KPrjN5WGiZ2f8MFMo9LsyAoLB2vk7QRxYhEJ1CY84COODKG%2BgQOmXDfxMv2xoy9dnKV6Yyg0IJpOM%2BIzP8MY7HSz3MqU0nrOM%2BrxkbpDC80E6kVyyYblpt77KQ9Yep9z6apfVWdyCYsH%2FV4BlxNd3VwFuX6MMOITC4RgECdH20NJ2qZTEyXr1OYJq%2FerDQN90XvebUU0LCn1dsqsMjVb%2B9bTluJOIeLHinHQUBwUP%2F47Tpglc44TpXSLWafWD9OE5AtFl05BqU6br1cNEpOgyK5ZSlKDiWnO8PjvLece76bXsqlcyJJ2tgVnUsq1I2uBzEamh7WrbKUdiLDCFwvDABjqkAQjAW4Iz29GE2BhvKN8HG6zUb42ZRM9J4XvcIpTff%2BMNNoAi1pvZ3vQxygxUc45biNHy%2Bffr%2F%2F0YPgNSybXqi1%2BS9XE%2BMs3ysNnHNO6mosE5hQBvgpdIlN28DzcZYF2kcq0iWN2%2BQzPd7w2Lami%2BjA%2Fb2zXXtjkvd%2BI7xmK1yYIpWz8x8dfCTH4xx5aYTccr2UOPeEBB29iehsORh9vXWVjUKdSL&X-Amz-Signature=b991c25a01043fcc1db86247620b7f0d93972cb6ae8c601a7e7cd7443ca103b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ7CIWML%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCewgBOHZQbqs8zrcUtXPinvGaLI8Gm0mQlbl9I197mLAIhALhlZ8LOqPwiJNrSOSWJ2Ea4NW4Ar9BfC8qLTA68POzsKv8DCGwQABoMNjM3NDIzMTgzODA1IgxUP2UBLwD6F56NUHgq3ANZxxMdxXeLWh4jH1ZVyDzJfwTNXYgiZBp0xI7JGF7bkJxVx7kHXKFrUFU8UA8CIVMElfnSWFkL7iQJa6C%2F2TVIB0zLwYdqTB1MMlh6fwBcs1gzu4CuUIMogjmOgZFN8%2FO7HHWssCP%2B2a3ZnYs5ziJLoYDaas7iGpSZ48Y%2BnmYzqPP4SUoFRe7vVSyzRrUZTt%2F%2BzDTjIjIzUSl7iblrQeHpvEl5%2FYobswPVGbPlIhreffdPfzXcFhumFMHHMalF6O1EPg4YaLjrbhIzS4fkZOxVUqJGvacBmFoTqsqFe4tg%2Fu8KPrjN5WGiZ2f8MFMo9LsyAoLB2vk7QRxYhEJ1CY84COODKG%2BgQOmXDfxMv2xoy9dnKV6Yyg0IJpOM%2BIzP8MY7HSz3MqU0nrOM%2BrxkbpDC80E6kVyyYblpt77KQ9Yep9z6apfVWdyCYsH%2FV4BlxNd3VwFuX6MMOITC4RgECdH20NJ2qZTEyXr1OYJq%2FerDQN90XvebUU0LCn1dsqsMjVb%2B9bTluJOIeLHinHQUBwUP%2F47Tpglc44TpXSLWafWD9OE5AtFl05BqU6br1cNEpOgyK5ZSlKDiWnO8PjvLece76bXsqlcyJJ2tgVnUsq1I2uBzEamh7WrbKUdiLDCFwvDABjqkAQjAW4Iz29GE2BhvKN8HG6zUb42ZRM9J4XvcIpTff%2BMNNoAi1pvZ3vQxygxUc45biNHy%2Bffr%2F%2F0YPgNSybXqi1%2BS9XE%2BMs3ysNnHNO6mosE5hQBvgpdIlN28DzcZYF2kcq0iWN2%2BQzPd7w2Lami%2BjA%2Fb2zXXtjkvd%2BI7xmK1yYIpWz8x8dfCTH4xx5aYTccr2UOPeEBB29iehsORh9vXWVjUKdSL&X-Amz-Signature=4edcc28c7d64379211fdacd2d59d3ac1027823df21720c79e68eb7579da87fed&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ7CIWML%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCewgBOHZQbqs8zrcUtXPinvGaLI8Gm0mQlbl9I197mLAIhALhlZ8LOqPwiJNrSOSWJ2Ea4NW4Ar9BfC8qLTA68POzsKv8DCGwQABoMNjM3NDIzMTgzODA1IgxUP2UBLwD6F56NUHgq3ANZxxMdxXeLWh4jH1ZVyDzJfwTNXYgiZBp0xI7JGF7bkJxVx7kHXKFrUFU8UA8CIVMElfnSWFkL7iQJa6C%2F2TVIB0zLwYdqTB1MMlh6fwBcs1gzu4CuUIMogjmOgZFN8%2FO7HHWssCP%2B2a3ZnYs5ziJLoYDaas7iGpSZ48Y%2BnmYzqPP4SUoFRe7vVSyzRrUZTt%2F%2BzDTjIjIzUSl7iblrQeHpvEl5%2FYobswPVGbPlIhreffdPfzXcFhumFMHHMalF6O1EPg4YaLjrbhIzS4fkZOxVUqJGvacBmFoTqsqFe4tg%2Fu8KPrjN5WGiZ2f8MFMo9LsyAoLB2vk7QRxYhEJ1CY84COODKG%2BgQOmXDfxMv2xoy9dnKV6Yyg0IJpOM%2BIzP8MY7HSz3MqU0nrOM%2BrxkbpDC80E6kVyyYblpt77KQ9Yep9z6apfVWdyCYsH%2FV4BlxNd3VwFuX6MMOITC4RgECdH20NJ2qZTEyXr1OYJq%2FerDQN90XvebUU0LCn1dsqsMjVb%2B9bTluJOIeLHinHQUBwUP%2F47Tpglc44TpXSLWafWD9OE5AtFl05BqU6br1cNEpOgyK5ZSlKDiWnO8PjvLece76bXsqlcyJJ2tgVnUsq1I2uBzEamh7WrbKUdiLDCFwvDABjqkAQjAW4Iz29GE2BhvKN8HG6zUb42ZRM9J4XvcIpTff%2BMNNoAi1pvZ3vQxygxUc45biNHy%2Bffr%2F%2F0YPgNSybXqi1%2BS9XE%2BMs3ysNnHNO6mosE5hQBvgpdIlN28DzcZYF2kcq0iWN2%2BQzPd7w2Lami%2BjA%2Fb2zXXtjkvd%2BI7xmK1yYIpWz8x8dfCTH4xx5aYTccr2UOPeEBB29iehsORh9vXWVjUKdSL&X-Amz-Signature=77c2c765a0cd00e9afc727523619f5ab05af42e606895d27cfd6ca5a696bc09a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ7CIWML%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCewgBOHZQbqs8zrcUtXPinvGaLI8Gm0mQlbl9I197mLAIhALhlZ8LOqPwiJNrSOSWJ2Ea4NW4Ar9BfC8qLTA68POzsKv8DCGwQABoMNjM3NDIzMTgzODA1IgxUP2UBLwD6F56NUHgq3ANZxxMdxXeLWh4jH1ZVyDzJfwTNXYgiZBp0xI7JGF7bkJxVx7kHXKFrUFU8UA8CIVMElfnSWFkL7iQJa6C%2F2TVIB0zLwYdqTB1MMlh6fwBcs1gzu4CuUIMogjmOgZFN8%2FO7HHWssCP%2B2a3ZnYs5ziJLoYDaas7iGpSZ48Y%2BnmYzqPP4SUoFRe7vVSyzRrUZTt%2F%2BzDTjIjIzUSl7iblrQeHpvEl5%2FYobswPVGbPlIhreffdPfzXcFhumFMHHMalF6O1EPg4YaLjrbhIzS4fkZOxVUqJGvacBmFoTqsqFe4tg%2Fu8KPrjN5WGiZ2f8MFMo9LsyAoLB2vk7QRxYhEJ1CY84COODKG%2BgQOmXDfxMv2xoy9dnKV6Yyg0IJpOM%2BIzP8MY7HSz3MqU0nrOM%2BrxkbpDC80E6kVyyYblpt77KQ9Yep9z6apfVWdyCYsH%2FV4BlxNd3VwFuX6MMOITC4RgECdH20NJ2qZTEyXr1OYJq%2FerDQN90XvebUU0LCn1dsqsMjVb%2B9bTluJOIeLHinHQUBwUP%2F47Tpglc44TpXSLWafWD9OE5AtFl05BqU6br1cNEpOgyK5ZSlKDiWnO8PjvLece76bXsqlcyJJ2tgVnUsq1I2uBzEamh7WrbKUdiLDCFwvDABjqkAQjAW4Iz29GE2BhvKN8HG6zUb42ZRM9J4XvcIpTff%2BMNNoAi1pvZ3vQxygxUc45biNHy%2Bffr%2F%2F0YPgNSybXqi1%2BS9XE%2BMs3ysNnHNO6mosE5hQBvgpdIlN28DzcZYF2kcq0iWN2%2BQzPd7w2Lami%2BjA%2Fb2zXXtjkvd%2BI7xmK1yYIpWz8x8dfCTH4xx5aYTccr2UOPeEBB29iehsORh9vXWVjUKdSL&X-Amz-Signature=8233189288927a1aa6c07f4dbc504e2fabf2173df82ab213c30742f657163053&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ7CIWML%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCewgBOHZQbqs8zrcUtXPinvGaLI8Gm0mQlbl9I197mLAIhALhlZ8LOqPwiJNrSOSWJ2Ea4NW4Ar9BfC8qLTA68POzsKv8DCGwQABoMNjM3NDIzMTgzODA1IgxUP2UBLwD6F56NUHgq3ANZxxMdxXeLWh4jH1ZVyDzJfwTNXYgiZBp0xI7JGF7bkJxVx7kHXKFrUFU8UA8CIVMElfnSWFkL7iQJa6C%2F2TVIB0zLwYdqTB1MMlh6fwBcs1gzu4CuUIMogjmOgZFN8%2FO7HHWssCP%2B2a3ZnYs5ziJLoYDaas7iGpSZ48Y%2BnmYzqPP4SUoFRe7vVSyzRrUZTt%2F%2BzDTjIjIzUSl7iblrQeHpvEl5%2FYobswPVGbPlIhreffdPfzXcFhumFMHHMalF6O1EPg4YaLjrbhIzS4fkZOxVUqJGvacBmFoTqsqFe4tg%2Fu8KPrjN5WGiZ2f8MFMo9LsyAoLB2vk7QRxYhEJ1CY84COODKG%2BgQOmXDfxMv2xoy9dnKV6Yyg0IJpOM%2BIzP8MY7HSz3MqU0nrOM%2BrxkbpDC80E6kVyyYblpt77KQ9Yep9z6apfVWdyCYsH%2FV4BlxNd3VwFuX6MMOITC4RgECdH20NJ2qZTEyXr1OYJq%2FerDQN90XvebUU0LCn1dsqsMjVb%2B9bTluJOIeLHinHQUBwUP%2F47Tpglc44TpXSLWafWD9OE5AtFl05BqU6br1cNEpOgyK5ZSlKDiWnO8PjvLece76bXsqlcyJJ2tgVnUsq1I2uBzEamh7WrbKUdiLDCFwvDABjqkAQjAW4Iz29GE2BhvKN8HG6zUb42ZRM9J4XvcIpTff%2BMNNoAi1pvZ3vQxygxUc45biNHy%2Bffr%2F%2F0YPgNSybXqi1%2BS9XE%2BMs3ysNnHNO6mosE5hQBvgpdIlN28DzcZYF2kcq0iWN2%2BQzPd7w2Lami%2BjA%2Fb2zXXtjkvd%2BI7xmK1yYIpWz8x8dfCTH4xx5aYTccr2UOPeEBB29iehsORh9vXWVjUKdSL&X-Amz-Signature=342e986df9faf52aed550c19c467485446e7ef5c9d2acc7bcc432c5fc1c184b4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
