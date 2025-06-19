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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663STPZ4AW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWkMZf77Um0ZOxskiQgtNfwOY2KtIYXV8%2BYoqg%2Bk%2B%2BuAIgM1BPYFCNjeWacs8%2FN9LmwOOIEJlhfLiJ2ivnOBRpxJYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyJFK2cL28WgdOJ0CrcA4bqUUKyJKWyydYr9zttJY4q7qZYT0xlw7ZmSxwBq6j3YAna%2Bs15ZKKtUlYqKPOhKEzyRUP0x6Wegy0bnuj6m46U4tNKWN7K2lSt2vpPrSJxAPCxv9hy7HyVfXb6kWQb0vb7G2OEFzfKj2yeLZGbbVbwAIi2pTgEctnihB1HIB21nGw2TGa5TxmXNNbfxTmG2N%2F4eTioYozY8npn%2F82fSfZisDjxMLm3BajjfHyNaq1XPlE59bF%2BEyI66jI7ehRESrL5MgZnoyvLhRZCcU%2BqJN%2FjI6DP7JgTiOX3hh917igPtQcw9we%2Bi%2BkIJhVF2Zhu2kBTZY261VoNDxihawDsUxlpi9jTUKiugo%2Ft1b7KvHmpU%2F23U8wZmud17Oi62xc02Bjq9cVe7DL5WdiR2lMjSBW8l7Tfor83H5UL5y9QuR6uOQqocY7ee1uMx07XZsfKJE3AE3jdsCWuQyirhoKdg7AsTh6k5vwDAqwUkTYW4FUtPdAqem5v8EWHgGgqJC9yAHwK2dAluYlOuq5l%2Bw%2FqkIXsGVfPv9gsdVyOuH07rz3oDJyjO3dKktYm6Vv5pAaE2s1K%2FfISwp8HrigEwaW6b%2FdjCwowLC8ujEVDKq4OA3k6ASZkKEiaQxmHTbWUMNu10cIGOqUBAsXgPIetPOVqqbBnRDZ0AGq4c4zFcSCpNOuJSQre9OydEzfdAcZSPFTS8bicKKbbMat4JCwjkhhOiUAmT26pfzS3luK90FttL%2Bf%2BwNGRD3Iz15MrGVgDGogsFeJvqB539fVIizW%2F%2Fjov7bZGRkWxI7GuPxURSJg8UZdwC8Chr1lUNC4aocDp%2Bo3w4kTn%2BjVKsxrxFEudTc2d8LQDmDx8aIN4zqyZ&X-Amz-Signature=ea4c3b6e13eee3d8d114f209db0cd5c1b26285497557a52dfecd27c38ca422b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663STPZ4AW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWkMZf77Um0ZOxskiQgtNfwOY2KtIYXV8%2BYoqg%2Bk%2B%2BuAIgM1BPYFCNjeWacs8%2FN9LmwOOIEJlhfLiJ2ivnOBRpxJYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyJFK2cL28WgdOJ0CrcA4bqUUKyJKWyydYr9zttJY4q7qZYT0xlw7ZmSxwBq6j3YAna%2Bs15ZKKtUlYqKPOhKEzyRUP0x6Wegy0bnuj6m46U4tNKWN7K2lSt2vpPrSJxAPCxv9hy7HyVfXb6kWQb0vb7G2OEFzfKj2yeLZGbbVbwAIi2pTgEctnihB1HIB21nGw2TGa5TxmXNNbfxTmG2N%2F4eTioYozY8npn%2F82fSfZisDjxMLm3BajjfHyNaq1XPlE59bF%2BEyI66jI7ehRESrL5MgZnoyvLhRZCcU%2BqJN%2FjI6DP7JgTiOX3hh917igPtQcw9we%2Bi%2BkIJhVF2Zhu2kBTZY261VoNDxihawDsUxlpi9jTUKiugo%2Ft1b7KvHmpU%2F23U8wZmud17Oi62xc02Bjq9cVe7DL5WdiR2lMjSBW8l7Tfor83H5UL5y9QuR6uOQqocY7ee1uMx07XZsfKJE3AE3jdsCWuQyirhoKdg7AsTh6k5vwDAqwUkTYW4FUtPdAqem5v8EWHgGgqJC9yAHwK2dAluYlOuq5l%2Bw%2FqkIXsGVfPv9gsdVyOuH07rz3oDJyjO3dKktYm6Vv5pAaE2s1K%2FfISwp8HrigEwaW6b%2FdjCwowLC8ujEVDKq4OA3k6ASZkKEiaQxmHTbWUMNu10cIGOqUBAsXgPIetPOVqqbBnRDZ0AGq4c4zFcSCpNOuJSQre9OydEzfdAcZSPFTS8bicKKbbMat4JCwjkhhOiUAmT26pfzS3luK90FttL%2Bf%2BwNGRD3Iz15MrGVgDGogsFeJvqB539fVIizW%2F%2Fjov7bZGRkWxI7GuPxURSJg8UZdwC8Chr1lUNC4aocDp%2Bo3w4kTn%2BjVKsxrxFEudTc2d8LQDmDx8aIN4zqyZ&X-Amz-Signature=2cf36d4f363370c7db3571ef7a8029b2316ce40e70431d614ce72dbbeb7e22e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663STPZ4AW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWkMZf77Um0ZOxskiQgtNfwOY2KtIYXV8%2BYoqg%2Bk%2B%2BuAIgM1BPYFCNjeWacs8%2FN9LmwOOIEJlhfLiJ2ivnOBRpxJYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyJFK2cL28WgdOJ0CrcA4bqUUKyJKWyydYr9zttJY4q7qZYT0xlw7ZmSxwBq6j3YAna%2Bs15ZKKtUlYqKPOhKEzyRUP0x6Wegy0bnuj6m46U4tNKWN7K2lSt2vpPrSJxAPCxv9hy7HyVfXb6kWQb0vb7G2OEFzfKj2yeLZGbbVbwAIi2pTgEctnihB1HIB21nGw2TGa5TxmXNNbfxTmG2N%2F4eTioYozY8npn%2F82fSfZisDjxMLm3BajjfHyNaq1XPlE59bF%2BEyI66jI7ehRESrL5MgZnoyvLhRZCcU%2BqJN%2FjI6DP7JgTiOX3hh917igPtQcw9we%2Bi%2BkIJhVF2Zhu2kBTZY261VoNDxihawDsUxlpi9jTUKiugo%2Ft1b7KvHmpU%2F23U8wZmud17Oi62xc02Bjq9cVe7DL5WdiR2lMjSBW8l7Tfor83H5UL5y9QuR6uOQqocY7ee1uMx07XZsfKJE3AE3jdsCWuQyirhoKdg7AsTh6k5vwDAqwUkTYW4FUtPdAqem5v8EWHgGgqJC9yAHwK2dAluYlOuq5l%2Bw%2FqkIXsGVfPv9gsdVyOuH07rz3oDJyjO3dKktYm6Vv5pAaE2s1K%2FfISwp8HrigEwaW6b%2FdjCwowLC8ujEVDKq4OA3k6ASZkKEiaQxmHTbWUMNu10cIGOqUBAsXgPIetPOVqqbBnRDZ0AGq4c4zFcSCpNOuJSQre9OydEzfdAcZSPFTS8bicKKbbMat4JCwjkhhOiUAmT26pfzS3luK90FttL%2Bf%2BwNGRD3Iz15MrGVgDGogsFeJvqB539fVIizW%2F%2Fjov7bZGRkWxI7GuPxURSJg8UZdwC8Chr1lUNC4aocDp%2Bo3w4kTn%2BjVKsxrxFEudTc2d8LQDmDx8aIN4zqyZ&X-Amz-Signature=25be23fd4af99f42efc1af837dac498164e1aa61c4691c15fd1ff681bbc452d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663STPZ4AW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWkMZf77Um0ZOxskiQgtNfwOY2KtIYXV8%2BYoqg%2Bk%2B%2BuAIgM1BPYFCNjeWacs8%2FN9LmwOOIEJlhfLiJ2ivnOBRpxJYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyJFK2cL28WgdOJ0CrcA4bqUUKyJKWyydYr9zttJY4q7qZYT0xlw7ZmSxwBq6j3YAna%2Bs15ZKKtUlYqKPOhKEzyRUP0x6Wegy0bnuj6m46U4tNKWN7K2lSt2vpPrSJxAPCxv9hy7HyVfXb6kWQb0vb7G2OEFzfKj2yeLZGbbVbwAIi2pTgEctnihB1HIB21nGw2TGa5TxmXNNbfxTmG2N%2F4eTioYozY8npn%2F82fSfZisDjxMLm3BajjfHyNaq1XPlE59bF%2BEyI66jI7ehRESrL5MgZnoyvLhRZCcU%2BqJN%2FjI6DP7JgTiOX3hh917igPtQcw9we%2Bi%2BkIJhVF2Zhu2kBTZY261VoNDxihawDsUxlpi9jTUKiugo%2Ft1b7KvHmpU%2F23U8wZmud17Oi62xc02Bjq9cVe7DL5WdiR2lMjSBW8l7Tfor83H5UL5y9QuR6uOQqocY7ee1uMx07XZsfKJE3AE3jdsCWuQyirhoKdg7AsTh6k5vwDAqwUkTYW4FUtPdAqem5v8EWHgGgqJC9yAHwK2dAluYlOuq5l%2Bw%2FqkIXsGVfPv9gsdVyOuH07rz3oDJyjO3dKktYm6Vv5pAaE2s1K%2FfISwp8HrigEwaW6b%2FdjCwowLC8ujEVDKq4OA3k6ASZkKEiaQxmHTbWUMNu10cIGOqUBAsXgPIetPOVqqbBnRDZ0AGq4c4zFcSCpNOuJSQre9OydEzfdAcZSPFTS8bicKKbbMat4JCwjkhhOiUAmT26pfzS3luK90FttL%2Bf%2BwNGRD3Iz15MrGVgDGogsFeJvqB539fVIizW%2F%2Fjov7bZGRkWxI7GuPxURSJg8UZdwC8Chr1lUNC4aocDp%2Bo3w4kTn%2BjVKsxrxFEudTc2d8LQDmDx8aIN4zqyZ&X-Amz-Signature=16ded92e24947a0a131187475b63b7b00526077fc22554f5664cee6f33701efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663STPZ4AW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWkMZf77Um0ZOxskiQgtNfwOY2KtIYXV8%2BYoqg%2Bk%2B%2BuAIgM1BPYFCNjeWacs8%2FN9LmwOOIEJlhfLiJ2ivnOBRpxJYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyJFK2cL28WgdOJ0CrcA4bqUUKyJKWyydYr9zttJY4q7qZYT0xlw7ZmSxwBq6j3YAna%2Bs15ZKKtUlYqKPOhKEzyRUP0x6Wegy0bnuj6m46U4tNKWN7K2lSt2vpPrSJxAPCxv9hy7HyVfXb6kWQb0vb7G2OEFzfKj2yeLZGbbVbwAIi2pTgEctnihB1HIB21nGw2TGa5TxmXNNbfxTmG2N%2F4eTioYozY8npn%2F82fSfZisDjxMLm3BajjfHyNaq1XPlE59bF%2BEyI66jI7ehRESrL5MgZnoyvLhRZCcU%2BqJN%2FjI6DP7JgTiOX3hh917igPtQcw9we%2Bi%2BkIJhVF2Zhu2kBTZY261VoNDxihawDsUxlpi9jTUKiugo%2Ft1b7KvHmpU%2F23U8wZmud17Oi62xc02Bjq9cVe7DL5WdiR2lMjSBW8l7Tfor83H5UL5y9QuR6uOQqocY7ee1uMx07XZsfKJE3AE3jdsCWuQyirhoKdg7AsTh6k5vwDAqwUkTYW4FUtPdAqem5v8EWHgGgqJC9yAHwK2dAluYlOuq5l%2Bw%2FqkIXsGVfPv9gsdVyOuH07rz3oDJyjO3dKktYm6Vv5pAaE2s1K%2FfISwp8HrigEwaW6b%2FdjCwowLC8ujEVDKq4OA3k6ASZkKEiaQxmHTbWUMNu10cIGOqUBAsXgPIetPOVqqbBnRDZ0AGq4c4zFcSCpNOuJSQre9OydEzfdAcZSPFTS8bicKKbbMat4JCwjkhhOiUAmT26pfzS3luK90FttL%2Bf%2BwNGRD3Iz15MrGVgDGogsFeJvqB539fVIizW%2F%2Fjov7bZGRkWxI7GuPxURSJg8UZdwC8Chr1lUNC4aocDp%2Bo3w4kTn%2BjVKsxrxFEudTc2d8LQDmDx8aIN4zqyZ&X-Amz-Signature=9978a7b55e2c9c7933681bb9e78d14e949b375dacba0a5189fb455b9fc709ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
