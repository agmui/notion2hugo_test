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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNWU32M%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3QskbdhzxPaQh5v5%2FAHTqVla4QyUNbMZQmFIbSizmRwIhAI9Jeki3bqcfWLmyL9BxtFkeZxxZ1E39vWR7PAL5WnufKv8DCFgQABoMNjM3NDIzMTgzODA1IgzxSNXU8w%2BzF4smieEq3APUmfyJhq7Ql%2Fz02Jh5klUgRUGRB7boEH2gi3ymAPWaB6pXkZqLDmxx8H%2BeJEDCrvgOGJNbReC1zK%2FjwCXqaakcZfsYsFjENXmQC7DgMsrtyqXN4rW9F8E4YerFriX68%2B8GkORSUHnO9ZfBLy2mqEoCr7UTehDEy4MzJlZDRGr%2BNCv%2Fh%2Bh2vDPMS46bzZ8SnTgcq6Mse9xM0XwZmQapqN6B4zn3NU3WSbpy0tiFOhv2ld1Prg9aqdSaQDFtb9P%2F4aCwIJ2QeIPV%2BWKmP8tVHTwdulwwZ%2BxqHqJeWR49gOt07UdMGGDPkTM2szI6qmoY%2F6%2F7ZKozwXWH7brfokHDI0IAVhcm0BgZ7iZcg5re44LQbYPZX2NgBUEmH8xjlsMBINNw2VmWy9MYBHUmyWTV%2Bq5ABa2Mz7IAoZYNplPWILouxaIf3%2B1dQdeirV9qE2ipRgV8W5YFaJFSv6kUR3clLyZ4BUk5Mzfz22q8JKwUJ8iIiB5XXMph1lbEeUSqx2I25iufP7LqP30d4aBq3u0xPYeEwILYK4fH4kWbOdVXZJ8AwiMjrMOGVQ2qt1ssw%2B4KIqSC7LtugN1C%2FZYuER9PcSDKb2TDZ8UxovY5ZkBb3bToATXktZZrthtMbfwjiDDV4KDBBjqkAVNtbxkPNOQqAVvaiPfVDKnN%2F5VWHs8ZwnM0FAiqz5pwCtL6flkYOPJfunsBkxd7m6ax6zBIMWeZ2A6m8kck8OZhBukzj3JhLN%2BHHdMYHi9O7J%2BNbnbruYKePaiO2hoj5jc8Ph1DNkkAKZoICYGy7RKdGcz1cageC9mILbucd2PMIaPTETsWxmPpixLrI3%2Fy9UciWaJO%2BAImP%2Bd8eYLp1RIEQ%2FBm&X-Amz-Signature=c1fe51fcbc1a6714e0ad35fd5e6fdd02007b762dd479edbde4f339bf84396b15&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNWU32M%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3QskbdhzxPaQh5v5%2FAHTqVla4QyUNbMZQmFIbSizmRwIhAI9Jeki3bqcfWLmyL9BxtFkeZxxZ1E39vWR7PAL5WnufKv8DCFgQABoMNjM3NDIzMTgzODA1IgzxSNXU8w%2BzF4smieEq3APUmfyJhq7Ql%2Fz02Jh5klUgRUGRB7boEH2gi3ymAPWaB6pXkZqLDmxx8H%2BeJEDCrvgOGJNbReC1zK%2FjwCXqaakcZfsYsFjENXmQC7DgMsrtyqXN4rW9F8E4YerFriX68%2B8GkORSUHnO9ZfBLy2mqEoCr7UTehDEy4MzJlZDRGr%2BNCv%2Fh%2Bh2vDPMS46bzZ8SnTgcq6Mse9xM0XwZmQapqN6B4zn3NU3WSbpy0tiFOhv2ld1Prg9aqdSaQDFtb9P%2F4aCwIJ2QeIPV%2BWKmP8tVHTwdulwwZ%2BxqHqJeWR49gOt07UdMGGDPkTM2szI6qmoY%2F6%2F7ZKozwXWH7brfokHDI0IAVhcm0BgZ7iZcg5re44LQbYPZX2NgBUEmH8xjlsMBINNw2VmWy9MYBHUmyWTV%2Bq5ABa2Mz7IAoZYNplPWILouxaIf3%2B1dQdeirV9qE2ipRgV8W5YFaJFSv6kUR3clLyZ4BUk5Mzfz22q8JKwUJ8iIiB5XXMph1lbEeUSqx2I25iufP7LqP30d4aBq3u0xPYeEwILYK4fH4kWbOdVXZJ8AwiMjrMOGVQ2qt1ssw%2B4KIqSC7LtugN1C%2FZYuER9PcSDKb2TDZ8UxovY5ZkBb3bToATXktZZrthtMbfwjiDDV4KDBBjqkAVNtbxkPNOQqAVvaiPfVDKnN%2F5VWHs8ZwnM0FAiqz5pwCtL6flkYOPJfunsBkxd7m6ax6zBIMWeZ2A6m8kck8OZhBukzj3JhLN%2BHHdMYHi9O7J%2BNbnbruYKePaiO2hoj5jc8Ph1DNkkAKZoICYGy7RKdGcz1cageC9mILbucd2PMIaPTETsWxmPpixLrI3%2Fy9UciWaJO%2BAImP%2Bd8eYLp1RIEQ%2FBm&X-Amz-Signature=ceff58b12bc9cc47560e8e0fe21fd0235cba4d326ffb5d4cc0b7bd1e8343a2b1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNWU32M%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3QskbdhzxPaQh5v5%2FAHTqVla4QyUNbMZQmFIbSizmRwIhAI9Jeki3bqcfWLmyL9BxtFkeZxxZ1E39vWR7PAL5WnufKv8DCFgQABoMNjM3NDIzMTgzODA1IgzxSNXU8w%2BzF4smieEq3APUmfyJhq7Ql%2Fz02Jh5klUgRUGRB7boEH2gi3ymAPWaB6pXkZqLDmxx8H%2BeJEDCrvgOGJNbReC1zK%2FjwCXqaakcZfsYsFjENXmQC7DgMsrtyqXN4rW9F8E4YerFriX68%2B8GkORSUHnO9ZfBLy2mqEoCr7UTehDEy4MzJlZDRGr%2BNCv%2Fh%2Bh2vDPMS46bzZ8SnTgcq6Mse9xM0XwZmQapqN6B4zn3NU3WSbpy0tiFOhv2ld1Prg9aqdSaQDFtb9P%2F4aCwIJ2QeIPV%2BWKmP8tVHTwdulwwZ%2BxqHqJeWR49gOt07UdMGGDPkTM2szI6qmoY%2F6%2F7ZKozwXWH7brfokHDI0IAVhcm0BgZ7iZcg5re44LQbYPZX2NgBUEmH8xjlsMBINNw2VmWy9MYBHUmyWTV%2Bq5ABa2Mz7IAoZYNplPWILouxaIf3%2B1dQdeirV9qE2ipRgV8W5YFaJFSv6kUR3clLyZ4BUk5Mzfz22q8JKwUJ8iIiB5XXMph1lbEeUSqx2I25iufP7LqP30d4aBq3u0xPYeEwILYK4fH4kWbOdVXZJ8AwiMjrMOGVQ2qt1ssw%2B4KIqSC7LtugN1C%2FZYuER9PcSDKb2TDZ8UxovY5ZkBb3bToATXktZZrthtMbfwjiDDV4KDBBjqkAVNtbxkPNOQqAVvaiPfVDKnN%2F5VWHs8ZwnM0FAiqz5pwCtL6flkYOPJfunsBkxd7m6ax6zBIMWeZ2A6m8kck8OZhBukzj3JhLN%2BHHdMYHi9O7J%2BNbnbruYKePaiO2hoj5jc8Ph1DNkkAKZoICYGy7RKdGcz1cageC9mILbucd2PMIaPTETsWxmPpixLrI3%2Fy9UciWaJO%2BAImP%2Bd8eYLp1RIEQ%2FBm&X-Amz-Signature=2ea663d253132ad9b6b977095ca59f01ac373c7c837d4254875b760aed5a6037&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNWU32M%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3QskbdhzxPaQh5v5%2FAHTqVla4QyUNbMZQmFIbSizmRwIhAI9Jeki3bqcfWLmyL9BxtFkeZxxZ1E39vWR7PAL5WnufKv8DCFgQABoMNjM3NDIzMTgzODA1IgzxSNXU8w%2BzF4smieEq3APUmfyJhq7Ql%2Fz02Jh5klUgRUGRB7boEH2gi3ymAPWaB6pXkZqLDmxx8H%2BeJEDCrvgOGJNbReC1zK%2FjwCXqaakcZfsYsFjENXmQC7DgMsrtyqXN4rW9F8E4YerFriX68%2B8GkORSUHnO9ZfBLy2mqEoCr7UTehDEy4MzJlZDRGr%2BNCv%2Fh%2Bh2vDPMS46bzZ8SnTgcq6Mse9xM0XwZmQapqN6B4zn3NU3WSbpy0tiFOhv2ld1Prg9aqdSaQDFtb9P%2F4aCwIJ2QeIPV%2BWKmP8tVHTwdulwwZ%2BxqHqJeWR49gOt07UdMGGDPkTM2szI6qmoY%2F6%2F7ZKozwXWH7brfokHDI0IAVhcm0BgZ7iZcg5re44LQbYPZX2NgBUEmH8xjlsMBINNw2VmWy9MYBHUmyWTV%2Bq5ABa2Mz7IAoZYNplPWILouxaIf3%2B1dQdeirV9qE2ipRgV8W5YFaJFSv6kUR3clLyZ4BUk5Mzfz22q8JKwUJ8iIiB5XXMph1lbEeUSqx2I25iufP7LqP30d4aBq3u0xPYeEwILYK4fH4kWbOdVXZJ8AwiMjrMOGVQ2qt1ssw%2B4KIqSC7LtugN1C%2FZYuER9PcSDKb2TDZ8UxovY5ZkBb3bToATXktZZrthtMbfwjiDDV4KDBBjqkAVNtbxkPNOQqAVvaiPfVDKnN%2F5VWHs8ZwnM0FAiqz5pwCtL6flkYOPJfunsBkxd7m6ax6zBIMWeZ2A6m8kck8OZhBukzj3JhLN%2BHHdMYHi9O7J%2BNbnbruYKePaiO2hoj5jc8Ph1DNkkAKZoICYGy7RKdGcz1cageC9mILbucd2PMIaPTETsWxmPpixLrI3%2Fy9UciWaJO%2BAImP%2Bd8eYLp1RIEQ%2FBm&X-Amz-Signature=af623c2b89c174ced661ddd141763a4e4c39f0966e57b24e580ff928264f508c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNWU32M%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3QskbdhzxPaQh5v5%2FAHTqVla4QyUNbMZQmFIbSizmRwIhAI9Jeki3bqcfWLmyL9BxtFkeZxxZ1E39vWR7PAL5WnufKv8DCFgQABoMNjM3NDIzMTgzODA1IgzxSNXU8w%2BzF4smieEq3APUmfyJhq7Ql%2Fz02Jh5klUgRUGRB7boEH2gi3ymAPWaB6pXkZqLDmxx8H%2BeJEDCrvgOGJNbReC1zK%2FjwCXqaakcZfsYsFjENXmQC7DgMsrtyqXN4rW9F8E4YerFriX68%2B8GkORSUHnO9ZfBLy2mqEoCr7UTehDEy4MzJlZDRGr%2BNCv%2Fh%2Bh2vDPMS46bzZ8SnTgcq6Mse9xM0XwZmQapqN6B4zn3NU3WSbpy0tiFOhv2ld1Prg9aqdSaQDFtb9P%2F4aCwIJ2QeIPV%2BWKmP8tVHTwdulwwZ%2BxqHqJeWR49gOt07UdMGGDPkTM2szI6qmoY%2F6%2F7ZKozwXWH7brfokHDI0IAVhcm0BgZ7iZcg5re44LQbYPZX2NgBUEmH8xjlsMBINNw2VmWy9MYBHUmyWTV%2Bq5ABa2Mz7IAoZYNplPWILouxaIf3%2B1dQdeirV9qE2ipRgV8W5YFaJFSv6kUR3clLyZ4BUk5Mzfz22q8JKwUJ8iIiB5XXMph1lbEeUSqx2I25iufP7LqP30d4aBq3u0xPYeEwILYK4fH4kWbOdVXZJ8AwiMjrMOGVQ2qt1ssw%2B4KIqSC7LtugN1C%2FZYuER9PcSDKb2TDZ8UxovY5ZkBb3bToATXktZZrthtMbfwjiDDV4KDBBjqkAVNtbxkPNOQqAVvaiPfVDKnN%2F5VWHs8ZwnM0FAiqz5pwCtL6flkYOPJfunsBkxd7m6ax6zBIMWeZ2A6m8kck8OZhBukzj3JhLN%2BHHdMYHi9O7J%2BNbnbruYKePaiO2hoj5jc8Ph1DNkkAKZoICYGy7RKdGcz1cageC9mILbucd2PMIaPTETsWxmPpixLrI3%2Fy9UciWaJO%2BAImP%2Bd8eYLp1RIEQ%2FBm&X-Amz-Signature=c3682bdaf2deccf135c4e9fd434723b4ca63795017ce5bc8eb94672d9bf16fe8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
