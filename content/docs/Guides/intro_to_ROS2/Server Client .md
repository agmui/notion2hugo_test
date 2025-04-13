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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAFKYDP3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD5NWlOZI6ksvuU%2B6nsGc9zZ3IeiVA6dZgBnN94yKa%2BkwIgE%2FPlhqpEaOQ9Wn0vaIR5U3BFx1LM%2BTRXhBmVzzIBljwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYm5gRw%2Fp040JTDrCrcA%2Bbbgb5DLwMYSe1dSqRkeKLwluBxGQNjEYz5hSAjhLSd3dMNV%2FTzApSfNY6dclP9GwEAHLAla8dnmkyqcMz2z%2FKZv7%2BErZJycnk3LH30%2B1YDYvrt3wrju0vlvtXoI9luE5Epa1kbSxuHHV9vGrxhD3uyEHWl6nlcie9ezqsfV%2FDB5lQOBzMGCWgwxmBFbjZCKFdHexjI3URShOkHuXvoB%2BK2JrV%2Fy%2BdHntlNu%2FCIzOdYzDH8Gvk0TPBpKe1jmNSp5sDE4vUDei6ILvYTJgbvIpN8AovlLYBfK39cTGLE3GDFepo8jpK75jzLNgq7vZaN96%2B%2F%2Bj4MtCLVwMHMbB%2FLkoNUwFbOp7P5qe5ZpPiPEYEzNol2xdFWzGLfTv4Puyws0%2FtaaN7EgKy14%2F%2FcSj0lI9Bl3VoCQr%2FaX58S2Tjrhw4slIW6v2%2BALAJ4F%2FL674rKQ%2B9V3mkTeiJZ92GJ%2FD4OQ1hjvCsFffNj%2BGePNxNhBgQxqGbAKvlR6KFNI2chg3DFmk4YOu4LKqKBuCbqgGZoZwl2rYEawo3hf94a8ouWRCTnZxDgl2cajquOeLNX2J%2B07IstUPrQhvjgLVbDfbtSZKXdqCyTqkE70O3SqHYZMHPfZe85MOSnip9bDo2jMIra778GOqUBP0wNfVUcUaxPgC%2FooOyZFi0xQ%2BzjGhGQaQ3xfI0mAVcBh6GkV4j%2FMotpykAtjRjpnVSeoofX4R0OMpriOeDOhq7%2BjK63tSUSh5lUggsEM4SY%2BCpfFcozTTsXknoYW%2FWh7YFRBsw5SlyTwtidwObz79FHejj1tz%2BjK87vkspo1W%2FkEONLIlsFHfO7wptu1cT6rPrj7VAxrMVTwdajI3tNhoH6TVWw&X-Amz-Signature=d3a87871ec0345031b7765a294b0d59b162fe6a069765cc6083801c47842230f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAFKYDP3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD5NWlOZI6ksvuU%2B6nsGc9zZ3IeiVA6dZgBnN94yKa%2BkwIgE%2FPlhqpEaOQ9Wn0vaIR5U3BFx1LM%2BTRXhBmVzzIBljwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYm5gRw%2Fp040JTDrCrcA%2Bbbgb5DLwMYSe1dSqRkeKLwluBxGQNjEYz5hSAjhLSd3dMNV%2FTzApSfNY6dclP9GwEAHLAla8dnmkyqcMz2z%2FKZv7%2BErZJycnk3LH30%2B1YDYvrt3wrju0vlvtXoI9luE5Epa1kbSxuHHV9vGrxhD3uyEHWl6nlcie9ezqsfV%2FDB5lQOBzMGCWgwxmBFbjZCKFdHexjI3URShOkHuXvoB%2BK2JrV%2Fy%2BdHntlNu%2FCIzOdYzDH8Gvk0TPBpKe1jmNSp5sDE4vUDei6ILvYTJgbvIpN8AovlLYBfK39cTGLE3GDFepo8jpK75jzLNgq7vZaN96%2B%2F%2Bj4MtCLVwMHMbB%2FLkoNUwFbOp7P5qe5ZpPiPEYEzNol2xdFWzGLfTv4Puyws0%2FtaaN7EgKy14%2F%2FcSj0lI9Bl3VoCQr%2FaX58S2Tjrhw4slIW6v2%2BALAJ4F%2FL674rKQ%2B9V3mkTeiJZ92GJ%2FD4OQ1hjvCsFffNj%2BGePNxNhBgQxqGbAKvlR6KFNI2chg3DFmk4YOu4LKqKBuCbqgGZoZwl2rYEawo3hf94a8ouWRCTnZxDgl2cajquOeLNX2J%2B07IstUPrQhvjgLVbDfbtSZKXdqCyTqkE70O3SqHYZMHPfZe85MOSnip9bDo2jMIra778GOqUBP0wNfVUcUaxPgC%2FooOyZFi0xQ%2BzjGhGQaQ3xfI0mAVcBh6GkV4j%2FMotpykAtjRjpnVSeoofX4R0OMpriOeDOhq7%2BjK63tSUSh5lUggsEM4SY%2BCpfFcozTTsXknoYW%2FWh7YFRBsw5SlyTwtidwObz79FHejj1tz%2BjK87vkspo1W%2FkEONLIlsFHfO7wptu1cT6rPrj7VAxrMVTwdajI3tNhoH6TVWw&X-Amz-Signature=1c346482c19aab57de38009366ec871c1317b1b78caaa0535352d7dd99081980&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAFKYDP3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD5NWlOZI6ksvuU%2B6nsGc9zZ3IeiVA6dZgBnN94yKa%2BkwIgE%2FPlhqpEaOQ9Wn0vaIR5U3BFx1LM%2BTRXhBmVzzIBljwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYm5gRw%2Fp040JTDrCrcA%2Bbbgb5DLwMYSe1dSqRkeKLwluBxGQNjEYz5hSAjhLSd3dMNV%2FTzApSfNY6dclP9GwEAHLAla8dnmkyqcMz2z%2FKZv7%2BErZJycnk3LH30%2B1YDYvrt3wrju0vlvtXoI9luE5Epa1kbSxuHHV9vGrxhD3uyEHWl6nlcie9ezqsfV%2FDB5lQOBzMGCWgwxmBFbjZCKFdHexjI3URShOkHuXvoB%2BK2JrV%2Fy%2BdHntlNu%2FCIzOdYzDH8Gvk0TPBpKe1jmNSp5sDE4vUDei6ILvYTJgbvIpN8AovlLYBfK39cTGLE3GDFepo8jpK75jzLNgq7vZaN96%2B%2F%2Bj4MtCLVwMHMbB%2FLkoNUwFbOp7P5qe5ZpPiPEYEzNol2xdFWzGLfTv4Puyws0%2FtaaN7EgKy14%2F%2FcSj0lI9Bl3VoCQr%2FaX58S2Tjrhw4slIW6v2%2BALAJ4F%2FL674rKQ%2B9V3mkTeiJZ92GJ%2FD4OQ1hjvCsFffNj%2BGePNxNhBgQxqGbAKvlR6KFNI2chg3DFmk4YOu4LKqKBuCbqgGZoZwl2rYEawo3hf94a8ouWRCTnZxDgl2cajquOeLNX2J%2B07IstUPrQhvjgLVbDfbtSZKXdqCyTqkE70O3SqHYZMHPfZe85MOSnip9bDo2jMIra778GOqUBP0wNfVUcUaxPgC%2FooOyZFi0xQ%2BzjGhGQaQ3xfI0mAVcBh6GkV4j%2FMotpykAtjRjpnVSeoofX4R0OMpriOeDOhq7%2BjK63tSUSh5lUggsEM4SY%2BCpfFcozTTsXknoYW%2FWh7YFRBsw5SlyTwtidwObz79FHejj1tz%2BjK87vkspo1W%2FkEONLIlsFHfO7wptu1cT6rPrj7VAxrMVTwdajI3tNhoH6TVWw&X-Amz-Signature=e60a0e70d237914e40951bed4cdef6b97acdfd7fa58201edd1217a723c6c8833&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAFKYDP3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD5NWlOZI6ksvuU%2B6nsGc9zZ3IeiVA6dZgBnN94yKa%2BkwIgE%2FPlhqpEaOQ9Wn0vaIR5U3BFx1LM%2BTRXhBmVzzIBljwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYm5gRw%2Fp040JTDrCrcA%2Bbbgb5DLwMYSe1dSqRkeKLwluBxGQNjEYz5hSAjhLSd3dMNV%2FTzApSfNY6dclP9GwEAHLAla8dnmkyqcMz2z%2FKZv7%2BErZJycnk3LH30%2B1YDYvrt3wrju0vlvtXoI9luE5Epa1kbSxuHHV9vGrxhD3uyEHWl6nlcie9ezqsfV%2FDB5lQOBzMGCWgwxmBFbjZCKFdHexjI3URShOkHuXvoB%2BK2JrV%2Fy%2BdHntlNu%2FCIzOdYzDH8Gvk0TPBpKe1jmNSp5sDE4vUDei6ILvYTJgbvIpN8AovlLYBfK39cTGLE3GDFepo8jpK75jzLNgq7vZaN96%2B%2F%2Bj4MtCLVwMHMbB%2FLkoNUwFbOp7P5qe5ZpPiPEYEzNol2xdFWzGLfTv4Puyws0%2FtaaN7EgKy14%2F%2FcSj0lI9Bl3VoCQr%2FaX58S2Tjrhw4slIW6v2%2BALAJ4F%2FL674rKQ%2B9V3mkTeiJZ92GJ%2FD4OQ1hjvCsFffNj%2BGePNxNhBgQxqGbAKvlR6KFNI2chg3DFmk4YOu4LKqKBuCbqgGZoZwl2rYEawo3hf94a8ouWRCTnZxDgl2cajquOeLNX2J%2B07IstUPrQhvjgLVbDfbtSZKXdqCyTqkE70O3SqHYZMHPfZe85MOSnip9bDo2jMIra778GOqUBP0wNfVUcUaxPgC%2FooOyZFi0xQ%2BzjGhGQaQ3xfI0mAVcBh6GkV4j%2FMotpykAtjRjpnVSeoofX4R0OMpriOeDOhq7%2BjK63tSUSh5lUggsEM4SY%2BCpfFcozTTsXknoYW%2FWh7YFRBsw5SlyTwtidwObz79FHejj1tz%2BjK87vkspo1W%2FkEONLIlsFHfO7wptu1cT6rPrj7VAxrMVTwdajI3tNhoH6TVWw&X-Amz-Signature=6eeb2d96681bb18be1ca4e3cc537da9abcb81ad09320cbe8a88f47cd0d6affec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAFKYDP3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD5NWlOZI6ksvuU%2B6nsGc9zZ3IeiVA6dZgBnN94yKa%2BkwIgE%2FPlhqpEaOQ9Wn0vaIR5U3BFx1LM%2BTRXhBmVzzIBljwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYm5gRw%2Fp040JTDrCrcA%2Bbbgb5DLwMYSe1dSqRkeKLwluBxGQNjEYz5hSAjhLSd3dMNV%2FTzApSfNY6dclP9GwEAHLAla8dnmkyqcMz2z%2FKZv7%2BErZJycnk3LH30%2B1YDYvrt3wrju0vlvtXoI9luE5Epa1kbSxuHHV9vGrxhD3uyEHWl6nlcie9ezqsfV%2FDB5lQOBzMGCWgwxmBFbjZCKFdHexjI3URShOkHuXvoB%2BK2JrV%2Fy%2BdHntlNu%2FCIzOdYzDH8Gvk0TPBpKe1jmNSp5sDE4vUDei6ILvYTJgbvIpN8AovlLYBfK39cTGLE3GDFepo8jpK75jzLNgq7vZaN96%2B%2F%2Bj4MtCLVwMHMbB%2FLkoNUwFbOp7P5qe5ZpPiPEYEzNol2xdFWzGLfTv4Puyws0%2FtaaN7EgKy14%2F%2FcSj0lI9Bl3VoCQr%2FaX58S2Tjrhw4slIW6v2%2BALAJ4F%2FL674rKQ%2B9V3mkTeiJZ92GJ%2FD4OQ1hjvCsFffNj%2BGePNxNhBgQxqGbAKvlR6KFNI2chg3DFmk4YOu4LKqKBuCbqgGZoZwl2rYEawo3hf94a8ouWRCTnZxDgl2cajquOeLNX2J%2B07IstUPrQhvjgLVbDfbtSZKXdqCyTqkE70O3SqHYZMHPfZe85MOSnip9bDo2jMIra778GOqUBP0wNfVUcUaxPgC%2FooOyZFi0xQ%2BzjGhGQaQ3xfI0mAVcBh6GkV4j%2FMotpykAtjRjpnVSeoofX4R0OMpriOeDOhq7%2BjK63tSUSh5lUggsEM4SY%2BCpfFcozTTsXknoYW%2FWh7YFRBsw5SlyTwtidwObz79FHejj1tz%2BjK87vkspo1W%2FkEONLIlsFHfO7wptu1cT6rPrj7VAxrMVTwdajI3tNhoH6TVWw&X-Amz-Signature=ed269d8b9ebac32194f64e99aba32cf39c2c0e6954574b45d3f95a636dec9950&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
