---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOHXSW4G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEN0SI3dOpsEUlOaMeT9y6fprfY283YhPd3edYcFgvzAiB0wK%2F6A4WkRkvvbVSHtvaVYqjpRRCjZ4Xy%2FynddXfEoir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMiwkBRpIHhDHks3R%2FKtwDLuUEC9onk61u1rcwlaskh%2BWNknyPlSQni27%2FPGLWyiW0nZZa1io068TN1ddngZu%2BAyJAf0RS5BB%2FRqL2%2F12GiYtxJC3NF2Vp6xU0%2Fm9fzHklymNwnN7aP8Fdux9sWGAFIM8zSRb4FUk%2FJXQ0PAdRggeJLb4BPSde5BhxKLoYcOteFg1kBzCECj7p0bzi7QB6x4zaSgMQ9GYsdEIq4MV1l49TDlbru%2Br%2FNf5cnSgHYwgmt%2BN%2FhUzU2e1%2FGdFIRQE6gNwKCn5XjLZga6RJcbSaTYo7ZX49H%2F08U5OhD7F3D1Rm48YecehBRKkDRQukKus6Gsj6PFL%2Bx9en5Er3Sd5b3OuEczRn7gpSzqYU7h6oyBAuBzjnugW2wJjIUAGNIwkZEfXtAnh8A0Eh7Ja57wlipetWX2MQPLuqUdzabFwydVM8EjRfB5nCK0Nk7p7BewEzQlpw1aurwAT4YBhAoWQJut6bIgKszxBTqT3%2F3Zmew7oKzPuEkMZQZ5eDj0ZG6x%2BWAJNCb9aHr44Q22RgcKA61VajSfipUTHp5Ayu7yK%2BcY15VMk6ncIbwLcnDvtq91uYVE%2F2TA22ODIunAHXdGIxcymAbrhaZHNwlj%2BZ3NG0IM8CE%2BJ9%2BEY%2FtFUmMgIw3fnwxAY6pgGa3Krx50UwXvVwpa3ZzWbLoKxFptEbbm%2BFehk7PAot0PnKiFuMukm9XtKBpYHKvwReZyp54JS9G0dg10h1owvnvve8UsdyFtfsOzmL5uja6VWI7FATF%2FCHhPrFwoHjx3IRom%2B1nsoXmXKpul5MzD3Rs9QNUkCS7Tvd%2FuyT%2F6PExcikVZMmeQBoP3uq6Z9pxtZZV37Yv3T8J%2FInCYGlJ3SzEydDcc1I&X-Amz-Signature=e99e07df6cc468093bae424a58191e36f20829d8021f3dc94a39b6ff94d3769b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOHXSW4G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEN0SI3dOpsEUlOaMeT9y6fprfY283YhPd3edYcFgvzAiB0wK%2F6A4WkRkvvbVSHtvaVYqjpRRCjZ4Xy%2FynddXfEoir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMiwkBRpIHhDHks3R%2FKtwDLuUEC9onk61u1rcwlaskh%2BWNknyPlSQni27%2FPGLWyiW0nZZa1io068TN1ddngZu%2BAyJAf0RS5BB%2FRqL2%2F12GiYtxJC3NF2Vp6xU0%2Fm9fzHklymNwnN7aP8Fdux9sWGAFIM8zSRb4FUk%2FJXQ0PAdRggeJLb4BPSde5BhxKLoYcOteFg1kBzCECj7p0bzi7QB6x4zaSgMQ9GYsdEIq4MV1l49TDlbru%2Br%2FNf5cnSgHYwgmt%2BN%2FhUzU2e1%2FGdFIRQE6gNwKCn5XjLZga6RJcbSaTYo7ZX49H%2F08U5OhD7F3D1Rm48YecehBRKkDRQukKus6Gsj6PFL%2Bx9en5Er3Sd5b3OuEczRn7gpSzqYU7h6oyBAuBzjnugW2wJjIUAGNIwkZEfXtAnh8A0Eh7Ja57wlipetWX2MQPLuqUdzabFwydVM8EjRfB5nCK0Nk7p7BewEzQlpw1aurwAT4YBhAoWQJut6bIgKszxBTqT3%2F3Zmew7oKzPuEkMZQZ5eDj0ZG6x%2BWAJNCb9aHr44Q22RgcKA61VajSfipUTHp5Ayu7yK%2BcY15VMk6ncIbwLcnDvtq91uYVE%2F2TA22ODIunAHXdGIxcymAbrhaZHNwlj%2BZ3NG0IM8CE%2BJ9%2BEY%2FtFUmMgIw3fnwxAY6pgGa3Krx50UwXvVwpa3ZzWbLoKxFptEbbm%2BFehk7PAot0PnKiFuMukm9XtKBpYHKvwReZyp54JS9G0dg10h1owvnvve8UsdyFtfsOzmL5uja6VWI7FATF%2FCHhPrFwoHjx3IRom%2B1nsoXmXKpul5MzD3Rs9QNUkCS7Tvd%2FuyT%2F6PExcikVZMmeQBoP3uq6Z9pxtZZV37Yv3T8J%2FInCYGlJ3SzEydDcc1I&X-Amz-Signature=60f3b04e46068b6c71fa3cdcf5f9396ef7f41efbad7147f9eaa10f0dbe68d7b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOHXSW4G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEN0SI3dOpsEUlOaMeT9y6fprfY283YhPd3edYcFgvzAiB0wK%2F6A4WkRkvvbVSHtvaVYqjpRRCjZ4Xy%2FynddXfEoir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMiwkBRpIHhDHks3R%2FKtwDLuUEC9onk61u1rcwlaskh%2BWNknyPlSQni27%2FPGLWyiW0nZZa1io068TN1ddngZu%2BAyJAf0RS5BB%2FRqL2%2F12GiYtxJC3NF2Vp6xU0%2Fm9fzHklymNwnN7aP8Fdux9sWGAFIM8zSRb4FUk%2FJXQ0PAdRggeJLb4BPSde5BhxKLoYcOteFg1kBzCECj7p0bzi7QB6x4zaSgMQ9GYsdEIq4MV1l49TDlbru%2Br%2FNf5cnSgHYwgmt%2BN%2FhUzU2e1%2FGdFIRQE6gNwKCn5XjLZga6RJcbSaTYo7ZX49H%2F08U5OhD7F3D1Rm48YecehBRKkDRQukKus6Gsj6PFL%2Bx9en5Er3Sd5b3OuEczRn7gpSzqYU7h6oyBAuBzjnugW2wJjIUAGNIwkZEfXtAnh8A0Eh7Ja57wlipetWX2MQPLuqUdzabFwydVM8EjRfB5nCK0Nk7p7BewEzQlpw1aurwAT4YBhAoWQJut6bIgKszxBTqT3%2F3Zmew7oKzPuEkMZQZ5eDj0ZG6x%2BWAJNCb9aHr44Q22RgcKA61VajSfipUTHp5Ayu7yK%2BcY15VMk6ncIbwLcnDvtq91uYVE%2F2TA22ODIunAHXdGIxcymAbrhaZHNwlj%2BZ3NG0IM8CE%2BJ9%2BEY%2FtFUmMgIw3fnwxAY6pgGa3Krx50UwXvVwpa3ZzWbLoKxFptEbbm%2BFehk7PAot0PnKiFuMukm9XtKBpYHKvwReZyp54JS9G0dg10h1owvnvve8UsdyFtfsOzmL5uja6VWI7FATF%2FCHhPrFwoHjx3IRom%2B1nsoXmXKpul5MzD3Rs9QNUkCS7Tvd%2FuyT%2F6PExcikVZMmeQBoP3uq6Z9pxtZZV37Yv3T8J%2FInCYGlJ3SzEydDcc1I&X-Amz-Signature=36740722a2337a1947bfe9b10c469047993fdebefa6c87e4fc5f1ebfd375de3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOHXSW4G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEN0SI3dOpsEUlOaMeT9y6fprfY283YhPd3edYcFgvzAiB0wK%2F6A4WkRkvvbVSHtvaVYqjpRRCjZ4Xy%2FynddXfEoir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMiwkBRpIHhDHks3R%2FKtwDLuUEC9onk61u1rcwlaskh%2BWNknyPlSQni27%2FPGLWyiW0nZZa1io068TN1ddngZu%2BAyJAf0RS5BB%2FRqL2%2F12GiYtxJC3NF2Vp6xU0%2Fm9fzHklymNwnN7aP8Fdux9sWGAFIM8zSRb4FUk%2FJXQ0PAdRggeJLb4BPSde5BhxKLoYcOteFg1kBzCECj7p0bzi7QB6x4zaSgMQ9GYsdEIq4MV1l49TDlbru%2Br%2FNf5cnSgHYwgmt%2BN%2FhUzU2e1%2FGdFIRQE6gNwKCn5XjLZga6RJcbSaTYo7ZX49H%2F08U5OhD7F3D1Rm48YecehBRKkDRQukKus6Gsj6PFL%2Bx9en5Er3Sd5b3OuEczRn7gpSzqYU7h6oyBAuBzjnugW2wJjIUAGNIwkZEfXtAnh8A0Eh7Ja57wlipetWX2MQPLuqUdzabFwydVM8EjRfB5nCK0Nk7p7BewEzQlpw1aurwAT4YBhAoWQJut6bIgKszxBTqT3%2F3Zmew7oKzPuEkMZQZ5eDj0ZG6x%2BWAJNCb9aHr44Q22RgcKA61VajSfipUTHp5Ayu7yK%2BcY15VMk6ncIbwLcnDvtq91uYVE%2F2TA22ODIunAHXdGIxcymAbrhaZHNwlj%2BZ3NG0IM8CE%2BJ9%2BEY%2FtFUmMgIw3fnwxAY6pgGa3Krx50UwXvVwpa3ZzWbLoKxFptEbbm%2BFehk7PAot0PnKiFuMukm9XtKBpYHKvwReZyp54JS9G0dg10h1owvnvve8UsdyFtfsOzmL5uja6VWI7FATF%2FCHhPrFwoHjx3IRom%2B1nsoXmXKpul5MzD3Rs9QNUkCS7Tvd%2FuyT%2F6PExcikVZMmeQBoP3uq6Z9pxtZZV37Yv3T8J%2FInCYGlJ3SzEydDcc1I&X-Amz-Signature=9752463a03bbd11a52f81a0efd8ed190b24c098869b31e5e8ec3bbe5c0e55ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOHXSW4G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEN0SI3dOpsEUlOaMeT9y6fprfY283YhPd3edYcFgvzAiB0wK%2F6A4WkRkvvbVSHtvaVYqjpRRCjZ4Xy%2FynddXfEoir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMiwkBRpIHhDHks3R%2FKtwDLuUEC9onk61u1rcwlaskh%2BWNknyPlSQni27%2FPGLWyiW0nZZa1io068TN1ddngZu%2BAyJAf0RS5BB%2FRqL2%2F12GiYtxJC3NF2Vp6xU0%2Fm9fzHklymNwnN7aP8Fdux9sWGAFIM8zSRb4FUk%2FJXQ0PAdRggeJLb4BPSde5BhxKLoYcOteFg1kBzCECj7p0bzi7QB6x4zaSgMQ9GYsdEIq4MV1l49TDlbru%2Br%2FNf5cnSgHYwgmt%2BN%2FhUzU2e1%2FGdFIRQE6gNwKCn5XjLZga6RJcbSaTYo7ZX49H%2F08U5OhD7F3D1Rm48YecehBRKkDRQukKus6Gsj6PFL%2Bx9en5Er3Sd5b3OuEczRn7gpSzqYU7h6oyBAuBzjnugW2wJjIUAGNIwkZEfXtAnh8A0Eh7Ja57wlipetWX2MQPLuqUdzabFwydVM8EjRfB5nCK0Nk7p7BewEzQlpw1aurwAT4YBhAoWQJut6bIgKszxBTqT3%2F3Zmew7oKzPuEkMZQZ5eDj0ZG6x%2BWAJNCb9aHr44Q22RgcKA61VajSfipUTHp5Ayu7yK%2BcY15VMk6ncIbwLcnDvtq91uYVE%2F2TA22ODIunAHXdGIxcymAbrhaZHNwlj%2BZ3NG0IM8CE%2BJ9%2BEY%2FtFUmMgIw3fnwxAY6pgGa3Krx50UwXvVwpa3ZzWbLoKxFptEbbm%2BFehk7PAot0PnKiFuMukm9XtKBpYHKvwReZyp54JS9G0dg10h1owvnvve8UsdyFtfsOzmL5uja6VWI7FATF%2FCHhPrFwoHjx3IRom%2B1nsoXmXKpul5MzD3Rs9QNUkCS7Tvd%2FuyT%2F6PExcikVZMmeQBoP3uq6Z9pxtZZV37Yv3T8J%2FInCYGlJ3SzEydDcc1I&X-Amz-Signature=7a514155d5b4bfeeb77c5df2f877e240d17f0d5d84b8923b43831897ba26bc4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
