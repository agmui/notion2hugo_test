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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WD45YC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6jzDo1ZFLCHK38Nd9WzHyesJpga6kDuqnq%2B3p6SiNKAiB%2FjMN92Q%2BVMWVMugap0rx54Lai2DiLe0TvuVQbWA2%2FFir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMjZ9Ibjlne99am8TaKtwDjzgkjiXt%2FSUvsy1TQYExZ4qhOUclMKCnSHes4st2RHq%2F1OVyuNj8f0kjveTEaZkdm8HnkxqBUCecE5YzOHU1U8mPQFcg2qX5xahsFEJdc8JS%2BmzmMzzaxWq57n1Bwo3j2ndJTRJQmvM2wH5CIiYlClAjxSzPfDKfbAEYHpMtQRfY2jskJxR88f5e%2B3XNFzHVSCuYGm1%2BL0QtKcbZ6CkYEe%2F0rKlS1hO5no2FIzZ4s8Opk47SVmoxkByHxs%2BLoaFVMNY9%2FM6%2F5SLhY1TQLGhfzPumSvVdXUI7rcMmhamO1TkIwBJzQhr1bhA5FzGwSJgyGbs87gCtwq4XZCqQ1rzAnxQK%2Fxn4DOmmmS4EQhNjUXOxCzynXR1T%2ByT3VeFG5lK6S0wwK%2BqjkijQnT7rMLUvwr7WBG6qdDCxJVWY3oksOA8tbG5rMxfQ4Rbrc%2FsIxfVMYRmxeu7cZwEzxT7cDo1FWIatL7s68Aeox4PtO%2Fdyojd8PLaEA4NmvOyNwgf17%2FhsaMqf3Jo7XGsRb4EjN21aUi%2FnDcA7GmfOCqh64uaPDfdxUFb8v2oZQzRZBkDdvqBRffnI6N7oPcWye8lipRIxaItPGs70zEa%2BX9wP1Z7V1XCrhXbKJlNEOob%2BX78wrO7EwgY6pgHqaf2ohgBStmQF8byAFEWQoZDkijBNzQqLYfMfIN4RMKpEXmCXjhw3L%2FbYV0xK4HhzTHnCHPDthcRxUMRuvqSql3BafDPbM2CVnGwqjFI58TXYAAEgNRcu8N1H%2BQypBqAdYAje6DEgt2KuJy7f0K%2FlIQSFaMOUGx2F%2B4Fte1N2gwZkFYubGwucJDw7CKLD9L5lQkpGiJMSR2NkvJ6FB1qyfj7h9MIh&X-Amz-Signature=eb401df585f11be671d2b87a9e4635cc0a650e9cc7827ab4e0129f342af04047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WD45YC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6jzDo1ZFLCHK38Nd9WzHyesJpga6kDuqnq%2B3p6SiNKAiB%2FjMN92Q%2BVMWVMugap0rx54Lai2DiLe0TvuVQbWA2%2FFir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMjZ9Ibjlne99am8TaKtwDjzgkjiXt%2FSUvsy1TQYExZ4qhOUclMKCnSHes4st2RHq%2F1OVyuNj8f0kjveTEaZkdm8HnkxqBUCecE5YzOHU1U8mPQFcg2qX5xahsFEJdc8JS%2BmzmMzzaxWq57n1Bwo3j2ndJTRJQmvM2wH5CIiYlClAjxSzPfDKfbAEYHpMtQRfY2jskJxR88f5e%2B3XNFzHVSCuYGm1%2BL0QtKcbZ6CkYEe%2F0rKlS1hO5no2FIzZ4s8Opk47SVmoxkByHxs%2BLoaFVMNY9%2FM6%2F5SLhY1TQLGhfzPumSvVdXUI7rcMmhamO1TkIwBJzQhr1bhA5FzGwSJgyGbs87gCtwq4XZCqQ1rzAnxQK%2Fxn4DOmmmS4EQhNjUXOxCzynXR1T%2ByT3VeFG5lK6S0wwK%2BqjkijQnT7rMLUvwr7WBG6qdDCxJVWY3oksOA8tbG5rMxfQ4Rbrc%2FsIxfVMYRmxeu7cZwEzxT7cDo1FWIatL7s68Aeox4PtO%2Fdyojd8PLaEA4NmvOyNwgf17%2FhsaMqf3Jo7XGsRb4EjN21aUi%2FnDcA7GmfOCqh64uaPDfdxUFb8v2oZQzRZBkDdvqBRffnI6N7oPcWye8lipRIxaItPGs70zEa%2BX9wP1Z7V1XCrhXbKJlNEOob%2BX78wrO7EwgY6pgHqaf2ohgBStmQF8byAFEWQoZDkijBNzQqLYfMfIN4RMKpEXmCXjhw3L%2FbYV0xK4HhzTHnCHPDthcRxUMRuvqSql3BafDPbM2CVnGwqjFI58TXYAAEgNRcu8N1H%2BQypBqAdYAje6DEgt2KuJy7f0K%2FlIQSFaMOUGx2F%2B4Fte1N2gwZkFYubGwucJDw7CKLD9L5lQkpGiJMSR2NkvJ6FB1qyfj7h9MIh&X-Amz-Signature=7f24e9a6c777b8bd94faa65c2d068a272e6cf399c6b3867d3fe655847aed238f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WD45YC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6jzDo1ZFLCHK38Nd9WzHyesJpga6kDuqnq%2B3p6SiNKAiB%2FjMN92Q%2BVMWVMugap0rx54Lai2DiLe0TvuVQbWA2%2FFir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMjZ9Ibjlne99am8TaKtwDjzgkjiXt%2FSUvsy1TQYExZ4qhOUclMKCnSHes4st2RHq%2F1OVyuNj8f0kjveTEaZkdm8HnkxqBUCecE5YzOHU1U8mPQFcg2qX5xahsFEJdc8JS%2BmzmMzzaxWq57n1Bwo3j2ndJTRJQmvM2wH5CIiYlClAjxSzPfDKfbAEYHpMtQRfY2jskJxR88f5e%2B3XNFzHVSCuYGm1%2BL0QtKcbZ6CkYEe%2F0rKlS1hO5no2FIzZ4s8Opk47SVmoxkByHxs%2BLoaFVMNY9%2FM6%2F5SLhY1TQLGhfzPumSvVdXUI7rcMmhamO1TkIwBJzQhr1bhA5FzGwSJgyGbs87gCtwq4XZCqQ1rzAnxQK%2Fxn4DOmmmS4EQhNjUXOxCzynXR1T%2ByT3VeFG5lK6S0wwK%2BqjkijQnT7rMLUvwr7WBG6qdDCxJVWY3oksOA8tbG5rMxfQ4Rbrc%2FsIxfVMYRmxeu7cZwEzxT7cDo1FWIatL7s68Aeox4PtO%2Fdyojd8PLaEA4NmvOyNwgf17%2FhsaMqf3Jo7XGsRb4EjN21aUi%2FnDcA7GmfOCqh64uaPDfdxUFb8v2oZQzRZBkDdvqBRffnI6N7oPcWye8lipRIxaItPGs70zEa%2BX9wP1Z7V1XCrhXbKJlNEOob%2BX78wrO7EwgY6pgHqaf2ohgBStmQF8byAFEWQoZDkijBNzQqLYfMfIN4RMKpEXmCXjhw3L%2FbYV0xK4HhzTHnCHPDthcRxUMRuvqSql3BafDPbM2CVnGwqjFI58TXYAAEgNRcu8N1H%2BQypBqAdYAje6DEgt2KuJy7f0K%2FlIQSFaMOUGx2F%2B4Fte1N2gwZkFYubGwucJDw7CKLD9L5lQkpGiJMSR2NkvJ6FB1qyfj7h9MIh&X-Amz-Signature=e5a763bc68b3566f4ef4ac97e3cba300a7a3f888f30694d481a065fe0a34bfa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WD45YC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6jzDo1ZFLCHK38Nd9WzHyesJpga6kDuqnq%2B3p6SiNKAiB%2FjMN92Q%2BVMWVMugap0rx54Lai2DiLe0TvuVQbWA2%2FFir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMjZ9Ibjlne99am8TaKtwDjzgkjiXt%2FSUvsy1TQYExZ4qhOUclMKCnSHes4st2RHq%2F1OVyuNj8f0kjveTEaZkdm8HnkxqBUCecE5YzOHU1U8mPQFcg2qX5xahsFEJdc8JS%2BmzmMzzaxWq57n1Bwo3j2ndJTRJQmvM2wH5CIiYlClAjxSzPfDKfbAEYHpMtQRfY2jskJxR88f5e%2B3XNFzHVSCuYGm1%2BL0QtKcbZ6CkYEe%2F0rKlS1hO5no2FIzZ4s8Opk47SVmoxkByHxs%2BLoaFVMNY9%2FM6%2F5SLhY1TQLGhfzPumSvVdXUI7rcMmhamO1TkIwBJzQhr1bhA5FzGwSJgyGbs87gCtwq4XZCqQ1rzAnxQK%2Fxn4DOmmmS4EQhNjUXOxCzynXR1T%2ByT3VeFG5lK6S0wwK%2BqjkijQnT7rMLUvwr7WBG6qdDCxJVWY3oksOA8tbG5rMxfQ4Rbrc%2FsIxfVMYRmxeu7cZwEzxT7cDo1FWIatL7s68Aeox4PtO%2Fdyojd8PLaEA4NmvOyNwgf17%2FhsaMqf3Jo7XGsRb4EjN21aUi%2FnDcA7GmfOCqh64uaPDfdxUFb8v2oZQzRZBkDdvqBRffnI6N7oPcWye8lipRIxaItPGs70zEa%2BX9wP1Z7V1XCrhXbKJlNEOob%2BX78wrO7EwgY6pgHqaf2ohgBStmQF8byAFEWQoZDkijBNzQqLYfMfIN4RMKpEXmCXjhw3L%2FbYV0xK4HhzTHnCHPDthcRxUMRuvqSql3BafDPbM2CVnGwqjFI58TXYAAEgNRcu8N1H%2BQypBqAdYAje6DEgt2KuJy7f0K%2FlIQSFaMOUGx2F%2B4Fte1N2gwZkFYubGwucJDw7CKLD9L5lQkpGiJMSR2NkvJ6FB1qyfj7h9MIh&X-Amz-Signature=fb6a042233611a3976f13f361acaea9758dacfa6f0b4a1d5320eb593d1e811ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WD45YC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6jzDo1ZFLCHK38Nd9WzHyesJpga6kDuqnq%2B3p6SiNKAiB%2FjMN92Q%2BVMWVMugap0rx54Lai2DiLe0TvuVQbWA2%2FFir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMjZ9Ibjlne99am8TaKtwDjzgkjiXt%2FSUvsy1TQYExZ4qhOUclMKCnSHes4st2RHq%2F1OVyuNj8f0kjveTEaZkdm8HnkxqBUCecE5YzOHU1U8mPQFcg2qX5xahsFEJdc8JS%2BmzmMzzaxWq57n1Bwo3j2ndJTRJQmvM2wH5CIiYlClAjxSzPfDKfbAEYHpMtQRfY2jskJxR88f5e%2B3XNFzHVSCuYGm1%2BL0QtKcbZ6CkYEe%2F0rKlS1hO5no2FIzZ4s8Opk47SVmoxkByHxs%2BLoaFVMNY9%2FM6%2F5SLhY1TQLGhfzPumSvVdXUI7rcMmhamO1TkIwBJzQhr1bhA5FzGwSJgyGbs87gCtwq4XZCqQ1rzAnxQK%2Fxn4DOmmmS4EQhNjUXOxCzynXR1T%2ByT3VeFG5lK6S0wwK%2BqjkijQnT7rMLUvwr7WBG6qdDCxJVWY3oksOA8tbG5rMxfQ4Rbrc%2FsIxfVMYRmxeu7cZwEzxT7cDo1FWIatL7s68Aeox4PtO%2Fdyojd8PLaEA4NmvOyNwgf17%2FhsaMqf3Jo7XGsRb4EjN21aUi%2FnDcA7GmfOCqh64uaPDfdxUFb8v2oZQzRZBkDdvqBRffnI6N7oPcWye8lipRIxaItPGs70zEa%2BX9wP1Z7V1XCrhXbKJlNEOob%2BX78wrO7EwgY6pgHqaf2ohgBStmQF8byAFEWQoZDkijBNzQqLYfMfIN4RMKpEXmCXjhw3L%2FbYV0xK4HhzTHnCHPDthcRxUMRuvqSql3BafDPbM2CVnGwqjFI58TXYAAEgNRcu8N1H%2BQypBqAdYAje6DEgt2KuJy7f0K%2FlIQSFaMOUGx2F%2B4Fte1N2gwZkFYubGwucJDw7CKLD9L5lQkpGiJMSR2NkvJ6FB1qyfj7h9MIh&X-Amz-Signature=90d938b70cb52f460c8a2bbe90b7e97073c45b31d76df70a535395e15a1c1e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
