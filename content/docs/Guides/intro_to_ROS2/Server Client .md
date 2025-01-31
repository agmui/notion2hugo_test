---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XWVIQWJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZZJFK%2FwkeKABR4mT0qePmNydcjz3dZBa56XG6mrBHBAiASQJTRmddK626E3XbhV27Wz7PNJgF3pGMYg1cThH4qaCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9YvyNg95ty3wRSvtKtwDG%2FfTxhVeN9bANpMf%2B%2BAlhOCudTlIuDEGGx2P%2FkmcRBV48CcUCYBSDSNBRZq5eMMNmtqDOyrc9Wz7Bx3VZnhGGyyDub8eqT%2BTvi1ehvO4A9XfIQZ2IrEIFvgdRYOJqY6HEXeDwr5x1L0GEbvGu4Nx02NLxm4AQQNCh4aHK0yZ3yi0TNdOJ5ZnzE7UiXDTPDoFIE9uQZH4tm2GOQ1UHu34cIK45SXXoV%2FyAOu0uK3XpEOaKgAKa6wyCD19dn6yeTWqYOP%2FzQMxuwqLSIWRCb5nfGYBZhSer2ED7uxIiVvwrBhbN0%2Fy4BaYa6C86aA1aOxuUAiUgWmY7694QJJ5tioRy3xVY3SP6Nao8y7IPiaQUy6WUQK99FBCX5%2BQC6poLP4sEerqcDTN52RHI78%2B02%2BM2kIxApJemJyBdRKnJoSaFaXqBKm8scYWBu6m5NJ598ooEFzYcv6IpQQV2IGEV40%2FPNqtdQaJm2lzuMkLm9X%2F%2FGfdmj6%2FyrjdVzzRYgVWo5S%2BZUlPiHACY1%2FGiXlU%2FQBYa2aeq5HKZxcpRQJoCfUDITcOpxaVqgeS%2Frwl65InnJfT9E%2FkMLjmqn5kRyO0uqIU5CnV1TTGfneS0N9FxNRr1C9cTaW8tnuqLg0VNigw%2F8nzvAY6pgGv53kDyi2Nc6WWHdUWgYuwvydaASFJ%2BK5nWRnc8a9RtrFOVTuCYfZSf3YhmznfNk0DsMBnX%2FC0NId1WPVGm0n28XYuaV5S0fj9MSSFiukZPFpHus3b6S12CkHSclsSc8eAhiCt9VajfbI1RZO9AYJKFAs13jAp3GUzkp6oPgGMT%2Fsb3kP0lBK8Z4icOEdajCoYWTKrKgW8RNeEADPBErwbvV2PH3nb&X-Amz-Signature=b0602fecc0ce5df0fda82086fff66ae01c8fbbd961d65ddc2d6f78c60b275812&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XWVIQWJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZZJFK%2FwkeKABR4mT0qePmNydcjz3dZBa56XG6mrBHBAiASQJTRmddK626E3XbhV27Wz7PNJgF3pGMYg1cThH4qaCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9YvyNg95ty3wRSvtKtwDG%2FfTxhVeN9bANpMf%2B%2BAlhOCudTlIuDEGGx2P%2FkmcRBV48CcUCYBSDSNBRZq5eMMNmtqDOyrc9Wz7Bx3VZnhGGyyDub8eqT%2BTvi1ehvO4A9XfIQZ2IrEIFvgdRYOJqY6HEXeDwr5x1L0GEbvGu4Nx02NLxm4AQQNCh4aHK0yZ3yi0TNdOJ5ZnzE7UiXDTPDoFIE9uQZH4tm2GOQ1UHu34cIK45SXXoV%2FyAOu0uK3XpEOaKgAKa6wyCD19dn6yeTWqYOP%2FzQMxuwqLSIWRCb5nfGYBZhSer2ED7uxIiVvwrBhbN0%2Fy4BaYa6C86aA1aOxuUAiUgWmY7694QJJ5tioRy3xVY3SP6Nao8y7IPiaQUy6WUQK99FBCX5%2BQC6poLP4sEerqcDTN52RHI78%2B02%2BM2kIxApJemJyBdRKnJoSaFaXqBKm8scYWBu6m5NJ598ooEFzYcv6IpQQV2IGEV40%2FPNqtdQaJm2lzuMkLm9X%2F%2FGfdmj6%2FyrjdVzzRYgVWo5S%2BZUlPiHACY1%2FGiXlU%2FQBYa2aeq5HKZxcpRQJoCfUDITcOpxaVqgeS%2Frwl65InnJfT9E%2FkMLjmqn5kRyO0uqIU5CnV1TTGfneS0N9FxNRr1C9cTaW8tnuqLg0VNigw%2F8nzvAY6pgGv53kDyi2Nc6WWHdUWgYuwvydaASFJ%2BK5nWRnc8a9RtrFOVTuCYfZSf3YhmznfNk0DsMBnX%2FC0NId1WPVGm0n28XYuaV5S0fj9MSSFiukZPFpHus3b6S12CkHSclsSc8eAhiCt9VajfbI1RZO9AYJKFAs13jAp3GUzkp6oPgGMT%2Fsb3kP0lBK8Z4icOEdajCoYWTKrKgW8RNeEADPBErwbvV2PH3nb&X-Amz-Signature=7460a071ce3ae42af4cebd6a870a6d0b3b55738f9203b6b2226a6eb6f9fdc7ab&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XWVIQWJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZZJFK%2FwkeKABR4mT0qePmNydcjz3dZBa56XG6mrBHBAiASQJTRmddK626E3XbhV27Wz7PNJgF3pGMYg1cThH4qaCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9YvyNg95ty3wRSvtKtwDG%2FfTxhVeN9bANpMf%2B%2BAlhOCudTlIuDEGGx2P%2FkmcRBV48CcUCYBSDSNBRZq5eMMNmtqDOyrc9Wz7Bx3VZnhGGyyDub8eqT%2BTvi1ehvO4A9XfIQZ2IrEIFvgdRYOJqY6HEXeDwr5x1L0GEbvGu4Nx02NLxm4AQQNCh4aHK0yZ3yi0TNdOJ5ZnzE7UiXDTPDoFIE9uQZH4tm2GOQ1UHu34cIK45SXXoV%2FyAOu0uK3XpEOaKgAKa6wyCD19dn6yeTWqYOP%2FzQMxuwqLSIWRCb5nfGYBZhSer2ED7uxIiVvwrBhbN0%2Fy4BaYa6C86aA1aOxuUAiUgWmY7694QJJ5tioRy3xVY3SP6Nao8y7IPiaQUy6WUQK99FBCX5%2BQC6poLP4sEerqcDTN52RHI78%2B02%2BM2kIxApJemJyBdRKnJoSaFaXqBKm8scYWBu6m5NJ598ooEFzYcv6IpQQV2IGEV40%2FPNqtdQaJm2lzuMkLm9X%2F%2FGfdmj6%2FyrjdVzzRYgVWo5S%2BZUlPiHACY1%2FGiXlU%2FQBYa2aeq5HKZxcpRQJoCfUDITcOpxaVqgeS%2Frwl65InnJfT9E%2FkMLjmqn5kRyO0uqIU5CnV1TTGfneS0N9FxNRr1C9cTaW8tnuqLg0VNigw%2F8nzvAY6pgGv53kDyi2Nc6WWHdUWgYuwvydaASFJ%2BK5nWRnc8a9RtrFOVTuCYfZSf3YhmznfNk0DsMBnX%2FC0NId1WPVGm0n28XYuaV5S0fj9MSSFiukZPFpHus3b6S12CkHSclsSc8eAhiCt9VajfbI1RZO9AYJKFAs13jAp3GUzkp6oPgGMT%2Fsb3kP0lBK8Z4icOEdajCoYWTKrKgW8RNeEADPBErwbvV2PH3nb&X-Amz-Signature=a0ccc5b8fe8bf700ae10eb8c01c61bdf9c492791d27d7047308adff6d0b803a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XWVIQWJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZZJFK%2FwkeKABR4mT0qePmNydcjz3dZBa56XG6mrBHBAiASQJTRmddK626E3XbhV27Wz7PNJgF3pGMYg1cThH4qaCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9YvyNg95ty3wRSvtKtwDG%2FfTxhVeN9bANpMf%2B%2BAlhOCudTlIuDEGGx2P%2FkmcRBV48CcUCYBSDSNBRZq5eMMNmtqDOyrc9Wz7Bx3VZnhGGyyDub8eqT%2BTvi1ehvO4A9XfIQZ2IrEIFvgdRYOJqY6HEXeDwr5x1L0GEbvGu4Nx02NLxm4AQQNCh4aHK0yZ3yi0TNdOJ5ZnzE7UiXDTPDoFIE9uQZH4tm2GOQ1UHu34cIK45SXXoV%2FyAOu0uK3XpEOaKgAKa6wyCD19dn6yeTWqYOP%2FzQMxuwqLSIWRCb5nfGYBZhSer2ED7uxIiVvwrBhbN0%2Fy4BaYa6C86aA1aOxuUAiUgWmY7694QJJ5tioRy3xVY3SP6Nao8y7IPiaQUy6WUQK99FBCX5%2BQC6poLP4sEerqcDTN52RHI78%2B02%2BM2kIxApJemJyBdRKnJoSaFaXqBKm8scYWBu6m5NJ598ooEFzYcv6IpQQV2IGEV40%2FPNqtdQaJm2lzuMkLm9X%2F%2FGfdmj6%2FyrjdVzzRYgVWo5S%2BZUlPiHACY1%2FGiXlU%2FQBYa2aeq5HKZxcpRQJoCfUDITcOpxaVqgeS%2Frwl65InnJfT9E%2FkMLjmqn5kRyO0uqIU5CnV1TTGfneS0N9FxNRr1C9cTaW8tnuqLg0VNigw%2F8nzvAY6pgGv53kDyi2Nc6WWHdUWgYuwvydaASFJ%2BK5nWRnc8a9RtrFOVTuCYfZSf3YhmznfNk0DsMBnX%2FC0NId1WPVGm0n28XYuaV5S0fj9MSSFiukZPFpHus3b6S12CkHSclsSc8eAhiCt9VajfbI1RZO9AYJKFAs13jAp3GUzkp6oPgGMT%2Fsb3kP0lBK8Z4icOEdajCoYWTKrKgW8RNeEADPBErwbvV2PH3nb&X-Amz-Signature=edf4486e34d22d6366fc8b18be405efeb405316d4de9ba4fa2197a4323379d2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XWVIQWJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZZJFK%2FwkeKABR4mT0qePmNydcjz3dZBa56XG6mrBHBAiASQJTRmddK626E3XbhV27Wz7PNJgF3pGMYg1cThH4qaCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9YvyNg95ty3wRSvtKtwDG%2FfTxhVeN9bANpMf%2B%2BAlhOCudTlIuDEGGx2P%2FkmcRBV48CcUCYBSDSNBRZq5eMMNmtqDOyrc9Wz7Bx3VZnhGGyyDub8eqT%2BTvi1ehvO4A9XfIQZ2IrEIFvgdRYOJqY6HEXeDwr5x1L0GEbvGu4Nx02NLxm4AQQNCh4aHK0yZ3yi0TNdOJ5ZnzE7UiXDTPDoFIE9uQZH4tm2GOQ1UHu34cIK45SXXoV%2FyAOu0uK3XpEOaKgAKa6wyCD19dn6yeTWqYOP%2FzQMxuwqLSIWRCb5nfGYBZhSer2ED7uxIiVvwrBhbN0%2Fy4BaYa6C86aA1aOxuUAiUgWmY7694QJJ5tioRy3xVY3SP6Nao8y7IPiaQUy6WUQK99FBCX5%2BQC6poLP4sEerqcDTN52RHI78%2B02%2BM2kIxApJemJyBdRKnJoSaFaXqBKm8scYWBu6m5NJ598ooEFzYcv6IpQQV2IGEV40%2FPNqtdQaJm2lzuMkLm9X%2F%2FGfdmj6%2FyrjdVzzRYgVWo5S%2BZUlPiHACY1%2FGiXlU%2FQBYa2aeq5HKZxcpRQJoCfUDITcOpxaVqgeS%2Frwl65InnJfT9E%2FkMLjmqn5kRyO0uqIU5CnV1TTGfneS0N9FxNRr1C9cTaW8tnuqLg0VNigw%2F8nzvAY6pgGv53kDyi2Nc6WWHdUWgYuwvydaASFJ%2BK5nWRnc8a9RtrFOVTuCYfZSf3YhmznfNk0DsMBnX%2FC0NId1WPVGm0n28XYuaV5S0fj9MSSFiukZPFpHus3b6S12CkHSclsSc8eAhiCt9VajfbI1RZO9AYJKFAs13jAp3GUzkp6oPgGMT%2Fsb3kP0lBK8Z4icOEdajCoYWTKrKgW8RNeEADPBErwbvV2PH3nb&X-Amz-Signature=cd7e5d25ebf7bde92200a2402b04b3538d91fe633c59c73c5ec42072fa65538e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
