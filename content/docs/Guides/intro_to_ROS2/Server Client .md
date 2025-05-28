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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TONJ2MIY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbBltna3ILVoCxbBHAFpJj9vTrSSLH89jCarRpkOICpAiB6OfbjhtfNCyB%2BJxB3pVdaLq7t31csxyr2l28N3yNFcCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMfPdpmqK0qI7bh5vJKtwDl3PznLDerrzgVs7kS%2BqYg7jJBIXsCqe515%2F6e%2BLO0utndaxhoUU4gLTIjxh5JD4x39AvAqIGSAjBNE%2BwOpyUjDGBqM7spVKn5apYIbsl7jkA1%2Bu2jSn9VhKhGvE7aYBDaBC6JOVVch%2FP0hKVNbzwdfTmNjxsKWa62qZfBId9LYOZJlaaXdGjOLM2vDdDyOEn4W9TLpyRQ2rb76m5feHhhJnxm0g3UDof8FjGkLKAi9q7ocdNRcAbNo%2FQ4ue9sSK2roQEEoOJiKZLH37wdFKGrgn4fA4fU8RaxMh4xzAWb1lQiqSET7pqazgQfaqpRrWnpbBqiR4YqvNKtB6qgC%2BI8LXaID5%2ByZgQVKYfKbj%2BgfqW9Vetirc7M2LOxVQt%2FNAFgVOqaPiKNAi4lvk%2FN0syrHzidD%2FyOFLNeUUF6kXQzWHZIUUpp%2F7WPbp497vFNtjcFKaagw4lpL4QRE6Jj8SpBtpOhKKFyc7JIEt2NJXsTFiC2s6xXpEw%2F3IfY4Eb9CfPmQ8adWdZVegeMaQFphL8vnGWkVUPVxkpGwRzCFmU%2FoMk3yjc9GwQH1JISDU3x3sZxS2ueYQ5JfYj%2BqCAa00SQQIufQL1oZPDrAdX6BZQK3o%2FYEGWydB9QSxt9qUw%2BPTawQY6pgHnZBfRmxt%2Fx8h1zMlSype6rAXY8TCVh8HqTQX6HOLrn4goWfv5AJyLfDXy4RaEYpwp3w%2FAKYGhL6vJI%2F4XlUwWxZ3V5ZW3cwc8NJnajxO4HOtZvj3U9tccNKM%2BIdEgCS5OGyLjm0x%2BFYqYEbViXnoQfnL4ZIwLz0%2BYVvu7X6m21%2FBAiSZgx3HEU9swhSotwkdVeruamQTt8hVYLMhCpQrWwVUXmYFG&X-Amz-Signature=1d4ca5eb3b820f63e72b185936c8bd545ba30fca9cd37e08962ceaf1b380c300&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TONJ2MIY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbBltna3ILVoCxbBHAFpJj9vTrSSLH89jCarRpkOICpAiB6OfbjhtfNCyB%2BJxB3pVdaLq7t31csxyr2l28N3yNFcCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMfPdpmqK0qI7bh5vJKtwDl3PznLDerrzgVs7kS%2BqYg7jJBIXsCqe515%2F6e%2BLO0utndaxhoUU4gLTIjxh5JD4x39AvAqIGSAjBNE%2BwOpyUjDGBqM7spVKn5apYIbsl7jkA1%2Bu2jSn9VhKhGvE7aYBDaBC6JOVVch%2FP0hKVNbzwdfTmNjxsKWa62qZfBId9LYOZJlaaXdGjOLM2vDdDyOEn4W9TLpyRQ2rb76m5feHhhJnxm0g3UDof8FjGkLKAi9q7ocdNRcAbNo%2FQ4ue9sSK2roQEEoOJiKZLH37wdFKGrgn4fA4fU8RaxMh4xzAWb1lQiqSET7pqazgQfaqpRrWnpbBqiR4YqvNKtB6qgC%2BI8LXaID5%2ByZgQVKYfKbj%2BgfqW9Vetirc7M2LOxVQt%2FNAFgVOqaPiKNAi4lvk%2FN0syrHzidD%2FyOFLNeUUF6kXQzWHZIUUpp%2F7WPbp497vFNtjcFKaagw4lpL4QRE6Jj8SpBtpOhKKFyc7JIEt2NJXsTFiC2s6xXpEw%2F3IfY4Eb9CfPmQ8adWdZVegeMaQFphL8vnGWkVUPVxkpGwRzCFmU%2FoMk3yjc9GwQH1JISDU3x3sZxS2ueYQ5JfYj%2BqCAa00SQQIufQL1oZPDrAdX6BZQK3o%2FYEGWydB9QSxt9qUw%2BPTawQY6pgHnZBfRmxt%2Fx8h1zMlSype6rAXY8TCVh8HqTQX6HOLrn4goWfv5AJyLfDXy4RaEYpwp3w%2FAKYGhL6vJI%2F4XlUwWxZ3V5ZW3cwc8NJnajxO4HOtZvj3U9tccNKM%2BIdEgCS5OGyLjm0x%2BFYqYEbViXnoQfnL4ZIwLz0%2BYVvu7X6m21%2FBAiSZgx3HEU9swhSotwkdVeruamQTt8hVYLMhCpQrWwVUXmYFG&X-Amz-Signature=0c1cf443395a0200f2414420c9c5edbd27c9e26df38f21b40c4a0fb093801ff5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TONJ2MIY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbBltna3ILVoCxbBHAFpJj9vTrSSLH89jCarRpkOICpAiB6OfbjhtfNCyB%2BJxB3pVdaLq7t31csxyr2l28N3yNFcCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMfPdpmqK0qI7bh5vJKtwDl3PznLDerrzgVs7kS%2BqYg7jJBIXsCqe515%2F6e%2BLO0utndaxhoUU4gLTIjxh5JD4x39AvAqIGSAjBNE%2BwOpyUjDGBqM7spVKn5apYIbsl7jkA1%2Bu2jSn9VhKhGvE7aYBDaBC6JOVVch%2FP0hKVNbzwdfTmNjxsKWa62qZfBId9LYOZJlaaXdGjOLM2vDdDyOEn4W9TLpyRQ2rb76m5feHhhJnxm0g3UDof8FjGkLKAi9q7ocdNRcAbNo%2FQ4ue9sSK2roQEEoOJiKZLH37wdFKGrgn4fA4fU8RaxMh4xzAWb1lQiqSET7pqazgQfaqpRrWnpbBqiR4YqvNKtB6qgC%2BI8LXaID5%2ByZgQVKYfKbj%2BgfqW9Vetirc7M2LOxVQt%2FNAFgVOqaPiKNAi4lvk%2FN0syrHzidD%2FyOFLNeUUF6kXQzWHZIUUpp%2F7WPbp497vFNtjcFKaagw4lpL4QRE6Jj8SpBtpOhKKFyc7JIEt2NJXsTFiC2s6xXpEw%2F3IfY4Eb9CfPmQ8adWdZVegeMaQFphL8vnGWkVUPVxkpGwRzCFmU%2FoMk3yjc9GwQH1JISDU3x3sZxS2ueYQ5JfYj%2BqCAa00SQQIufQL1oZPDrAdX6BZQK3o%2FYEGWydB9QSxt9qUw%2BPTawQY6pgHnZBfRmxt%2Fx8h1zMlSype6rAXY8TCVh8HqTQX6HOLrn4goWfv5AJyLfDXy4RaEYpwp3w%2FAKYGhL6vJI%2F4XlUwWxZ3V5ZW3cwc8NJnajxO4HOtZvj3U9tccNKM%2BIdEgCS5OGyLjm0x%2BFYqYEbViXnoQfnL4ZIwLz0%2BYVvu7X6m21%2FBAiSZgx3HEU9swhSotwkdVeruamQTt8hVYLMhCpQrWwVUXmYFG&X-Amz-Signature=af7aaeda56d8f067deb0ed3b6d1c0a204816848a6f2f9ccd40d3fa377a2216b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TONJ2MIY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbBltna3ILVoCxbBHAFpJj9vTrSSLH89jCarRpkOICpAiB6OfbjhtfNCyB%2BJxB3pVdaLq7t31csxyr2l28N3yNFcCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMfPdpmqK0qI7bh5vJKtwDl3PznLDerrzgVs7kS%2BqYg7jJBIXsCqe515%2F6e%2BLO0utndaxhoUU4gLTIjxh5JD4x39AvAqIGSAjBNE%2BwOpyUjDGBqM7spVKn5apYIbsl7jkA1%2Bu2jSn9VhKhGvE7aYBDaBC6JOVVch%2FP0hKVNbzwdfTmNjxsKWa62qZfBId9LYOZJlaaXdGjOLM2vDdDyOEn4W9TLpyRQ2rb76m5feHhhJnxm0g3UDof8FjGkLKAi9q7ocdNRcAbNo%2FQ4ue9sSK2roQEEoOJiKZLH37wdFKGrgn4fA4fU8RaxMh4xzAWb1lQiqSET7pqazgQfaqpRrWnpbBqiR4YqvNKtB6qgC%2BI8LXaID5%2ByZgQVKYfKbj%2BgfqW9Vetirc7M2LOxVQt%2FNAFgVOqaPiKNAi4lvk%2FN0syrHzidD%2FyOFLNeUUF6kXQzWHZIUUpp%2F7WPbp497vFNtjcFKaagw4lpL4QRE6Jj8SpBtpOhKKFyc7JIEt2NJXsTFiC2s6xXpEw%2F3IfY4Eb9CfPmQ8adWdZVegeMaQFphL8vnGWkVUPVxkpGwRzCFmU%2FoMk3yjc9GwQH1JISDU3x3sZxS2ueYQ5JfYj%2BqCAa00SQQIufQL1oZPDrAdX6BZQK3o%2FYEGWydB9QSxt9qUw%2BPTawQY6pgHnZBfRmxt%2Fx8h1zMlSype6rAXY8TCVh8HqTQX6HOLrn4goWfv5AJyLfDXy4RaEYpwp3w%2FAKYGhL6vJI%2F4XlUwWxZ3V5ZW3cwc8NJnajxO4HOtZvj3U9tccNKM%2BIdEgCS5OGyLjm0x%2BFYqYEbViXnoQfnL4ZIwLz0%2BYVvu7X6m21%2FBAiSZgx3HEU9swhSotwkdVeruamQTt8hVYLMhCpQrWwVUXmYFG&X-Amz-Signature=77fd61e4d9d830d1d13eac180ccce08a013f3a606bc9885802e433356169ce09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TONJ2MIY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbBltna3ILVoCxbBHAFpJj9vTrSSLH89jCarRpkOICpAiB6OfbjhtfNCyB%2BJxB3pVdaLq7t31csxyr2l28N3yNFcCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMfPdpmqK0qI7bh5vJKtwDl3PznLDerrzgVs7kS%2BqYg7jJBIXsCqe515%2F6e%2BLO0utndaxhoUU4gLTIjxh5JD4x39AvAqIGSAjBNE%2BwOpyUjDGBqM7spVKn5apYIbsl7jkA1%2Bu2jSn9VhKhGvE7aYBDaBC6JOVVch%2FP0hKVNbzwdfTmNjxsKWa62qZfBId9LYOZJlaaXdGjOLM2vDdDyOEn4W9TLpyRQ2rb76m5feHhhJnxm0g3UDof8FjGkLKAi9q7ocdNRcAbNo%2FQ4ue9sSK2roQEEoOJiKZLH37wdFKGrgn4fA4fU8RaxMh4xzAWb1lQiqSET7pqazgQfaqpRrWnpbBqiR4YqvNKtB6qgC%2BI8LXaID5%2ByZgQVKYfKbj%2BgfqW9Vetirc7M2LOxVQt%2FNAFgVOqaPiKNAi4lvk%2FN0syrHzidD%2FyOFLNeUUF6kXQzWHZIUUpp%2F7WPbp497vFNtjcFKaagw4lpL4QRE6Jj8SpBtpOhKKFyc7JIEt2NJXsTFiC2s6xXpEw%2F3IfY4Eb9CfPmQ8adWdZVegeMaQFphL8vnGWkVUPVxkpGwRzCFmU%2FoMk3yjc9GwQH1JISDU3x3sZxS2ueYQ5JfYj%2BqCAa00SQQIufQL1oZPDrAdX6BZQK3o%2FYEGWydB9QSxt9qUw%2BPTawQY6pgHnZBfRmxt%2Fx8h1zMlSype6rAXY8TCVh8HqTQX6HOLrn4goWfv5AJyLfDXy4RaEYpwp3w%2FAKYGhL6vJI%2F4XlUwWxZ3V5ZW3cwc8NJnajxO4HOtZvj3U9tccNKM%2BIdEgCS5OGyLjm0x%2BFYqYEbViXnoQfnL4ZIwLz0%2BYVvu7X6m21%2FBAiSZgx3HEU9swhSotwkdVeruamQTt8hVYLMhCpQrWwVUXmYFG&X-Amz-Signature=5cae81a63db0c0c53ecdf4ef90e8569978247fae9aa861b0dd75e2d858adbab5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
