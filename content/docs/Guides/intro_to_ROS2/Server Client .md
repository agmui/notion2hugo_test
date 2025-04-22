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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV2HKVR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIBYhZ74HDB7WQMMZOVmbYQQO0szrzDbJ1HVPMIw%2BsaFOAiA%2Fs%2FZkI7jKWmsogoadsfQ70%2BPBRwoFh1%2BL1umjOG8cvyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw6O2Qb3uVU5HAvMdKtwDf88aZYAimtOt1irvd%2Be0ysYtPq1tew4tinPLJS%2FKaB0RN6dTYvwOzVWjPV7fHuJlt9%2FJ3m1ZV9Bag3txNfXtISAWLjHfKH3DqoC4eaUOLBlOdcjJFiP0f9IZNsKk%2FOfVFGv0G%2FZQbnPGj64ks5nXD6TxWknpBFU4o8J61EvYaqIA9X8x0chCCkG88kdwJdxt1AlMauyzIM%2FLQMakF4oLqeurkh8n90VS%2FpFxLW5pdcFnPP6Dd%2FwvWNV7JznwYUau9sLucIB8ZQxC%2FdMq8VJtB78r1AeqXJVeaJLLjbmNaVCa3Cl%2B9KFmXZ6KDJtSXHhslnMsFx3s6YIzpaiSJQpkKfZiDbcaJUm%2FioNya8SQZ8dX%2BG%2BS2Z0d3aFb8OdXDzbOMPAyYpicDxIEro6wgw3x0QtSxwiZSlIIDepDjsHX6PiHpcVSrbOxPsDSNIB62VH9n2v7fLZym49iCOS6MitqBJHKh9o%2FGvc%2FiKswiZS6EIsucnp7juO0lR7UzbAA7O6ANGHm7BQty0rRiZHQzdpfTjVKE6nXmEezMp7F6q%2BO1FlpdAldW0Ds4urQl76Nj5TTpu6kTVCJU19WbmKOGJBukgPdLFQCBf5%2Fd3EzbIQfIMez2vKhWJ%2B%2F93ZsZjkwq6uewAY6pgF4eXrUB3RJL%2BURflNHrM7YHGh8YDyd4umlsEFHdsSuCAZM26xC8b%2B9nTZFcqqymTJQZyugz%2BE8wcmyLkDT7693wo3bonLXZvVYGYznWzLWvmTTdXKtAp7I7VQAHsrCTz4Fkd3Gdx2QpRQeyin9Og5Pq4NwkfxO156FmJZJa5MKkhBosHQ0%2F2Ag6vhJ9NXKtw3DdAHyU1d4s7Z4MisOJjdTJ0f8NJMf&X-Amz-Signature=3e2085c16dbe6b5230888b48a62eb68db7cfca1bb2b4cd7aa323efc1c7336f3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV2HKVR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIBYhZ74HDB7WQMMZOVmbYQQO0szrzDbJ1HVPMIw%2BsaFOAiA%2Fs%2FZkI7jKWmsogoadsfQ70%2BPBRwoFh1%2BL1umjOG8cvyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw6O2Qb3uVU5HAvMdKtwDf88aZYAimtOt1irvd%2Be0ysYtPq1tew4tinPLJS%2FKaB0RN6dTYvwOzVWjPV7fHuJlt9%2FJ3m1ZV9Bag3txNfXtISAWLjHfKH3DqoC4eaUOLBlOdcjJFiP0f9IZNsKk%2FOfVFGv0G%2FZQbnPGj64ks5nXD6TxWknpBFU4o8J61EvYaqIA9X8x0chCCkG88kdwJdxt1AlMauyzIM%2FLQMakF4oLqeurkh8n90VS%2FpFxLW5pdcFnPP6Dd%2FwvWNV7JznwYUau9sLucIB8ZQxC%2FdMq8VJtB78r1AeqXJVeaJLLjbmNaVCa3Cl%2B9KFmXZ6KDJtSXHhslnMsFx3s6YIzpaiSJQpkKfZiDbcaJUm%2FioNya8SQZ8dX%2BG%2BS2Z0d3aFb8OdXDzbOMPAyYpicDxIEro6wgw3x0QtSxwiZSlIIDepDjsHX6PiHpcVSrbOxPsDSNIB62VH9n2v7fLZym49iCOS6MitqBJHKh9o%2FGvc%2FiKswiZS6EIsucnp7juO0lR7UzbAA7O6ANGHm7BQty0rRiZHQzdpfTjVKE6nXmEezMp7F6q%2BO1FlpdAldW0Ds4urQl76Nj5TTpu6kTVCJU19WbmKOGJBukgPdLFQCBf5%2Fd3EzbIQfIMez2vKhWJ%2B%2F93ZsZjkwq6uewAY6pgF4eXrUB3RJL%2BURflNHrM7YHGh8YDyd4umlsEFHdsSuCAZM26xC8b%2B9nTZFcqqymTJQZyugz%2BE8wcmyLkDT7693wo3bonLXZvVYGYznWzLWvmTTdXKtAp7I7VQAHsrCTz4Fkd3Gdx2QpRQeyin9Og5Pq4NwkfxO156FmJZJa5MKkhBosHQ0%2F2Ag6vhJ9NXKtw3DdAHyU1d4s7Z4MisOJjdTJ0f8NJMf&X-Amz-Signature=2b050e3d9d166c890efbe4679bd8fd315e036120dc7dff625b6b20ab9d943f93&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV2HKVR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIBYhZ74HDB7WQMMZOVmbYQQO0szrzDbJ1HVPMIw%2BsaFOAiA%2Fs%2FZkI7jKWmsogoadsfQ70%2BPBRwoFh1%2BL1umjOG8cvyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw6O2Qb3uVU5HAvMdKtwDf88aZYAimtOt1irvd%2Be0ysYtPq1tew4tinPLJS%2FKaB0RN6dTYvwOzVWjPV7fHuJlt9%2FJ3m1ZV9Bag3txNfXtISAWLjHfKH3DqoC4eaUOLBlOdcjJFiP0f9IZNsKk%2FOfVFGv0G%2FZQbnPGj64ks5nXD6TxWknpBFU4o8J61EvYaqIA9X8x0chCCkG88kdwJdxt1AlMauyzIM%2FLQMakF4oLqeurkh8n90VS%2FpFxLW5pdcFnPP6Dd%2FwvWNV7JznwYUau9sLucIB8ZQxC%2FdMq8VJtB78r1AeqXJVeaJLLjbmNaVCa3Cl%2B9KFmXZ6KDJtSXHhslnMsFx3s6YIzpaiSJQpkKfZiDbcaJUm%2FioNya8SQZ8dX%2BG%2BS2Z0d3aFb8OdXDzbOMPAyYpicDxIEro6wgw3x0QtSxwiZSlIIDepDjsHX6PiHpcVSrbOxPsDSNIB62VH9n2v7fLZym49iCOS6MitqBJHKh9o%2FGvc%2FiKswiZS6EIsucnp7juO0lR7UzbAA7O6ANGHm7BQty0rRiZHQzdpfTjVKE6nXmEezMp7F6q%2BO1FlpdAldW0Ds4urQl76Nj5TTpu6kTVCJU19WbmKOGJBukgPdLFQCBf5%2Fd3EzbIQfIMez2vKhWJ%2B%2F93ZsZjkwq6uewAY6pgF4eXrUB3RJL%2BURflNHrM7YHGh8YDyd4umlsEFHdsSuCAZM26xC8b%2B9nTZFcqqymTJQZyugz%2BE8wcmyLkDT7693wo3bonLXZvVYGYznWzLWvmTTdXKtAp7I7VQAHsrCTz4Fkd3Gdx2QpRQeyin9Og5Pq4NwkfxO156FmJZJa5MKkhBosHQ0%2F2Ag6vhJ9NXKtw3DdAHyU1d4s7Z4MisOJjdTJ0f8NJMf&X-Amz-Signature=cff3f3954040e90856378453026f8a1ef06c91b66dbae0292fdabb50e02ceaae&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV2HKVR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIBYhZ74HDB7WQMMZOVmbYQQO0szrzDbJ1HVPMIw%2BsaFOAiA%2Fs%2FZkI7jKWmsogoadsfQ70%2BPBRwoFh1%2BL1umjOG8cvyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw6O2Qb3uVU5HAvMdKtwDf88aZYAimtOt1irvd%2Be0ysYtPq1tew4tinPLJS%2FKaB0RN6dTYvwOzVWjPV7fHuJlt9%2FJ3m1ZV9Bag3txNfXtISAWLjHfKH3DqoC4eaUOLBlOdcjJFiP0f9IZNsKk%2FOfVFGv0G%2FZQbnPGj64ks5nXD6TxWknpBFU4o8J61EvYaqIA9X8x0chCCkG88kdwJdxt1AlMauyzIM%2FLQMakF4oLqeurkh8n90VS%2FpFxLW5pdcFnPP6Dd%2FwvWNV7JznwYUau9sLucIB8ZQxC%2FdMq8VJtB78r1AeqXJVeaJLLjbmNaVCa3Cl%2B9KFmXZ6KDJtSXHhslnMsFx3s6YIzpaiSJQpkKfZiDbcaJUm%2FioNya8SQZ8dX%2BG%2BS2Z0d3aFb8OdXDzbOMPAyYpicDxIEro6wgw3x0QtSxwiZSlIIDepDjsHX6PiHpcVSrbOxPsDSNIB62VH9n2v7fLZym49iCOS6MitqBJHKh9o%2FGvc%2FiKswiZS6EIsucnp7juO0lR7UzbAA7O6ANGHm7BQty0rRiZHQzdpfTjVKE6nXmEezMp7F6q%2BO1FlpdAldW0Ds4urQl76Nj5TTpu6kTVCJU19WbmKOGJBukgPdLFQCBf5%2Fd3EzbIQfIMez2vKhWJ%2B%2F93ZsZjkwq6uewAY6pgF4eXrUB3RJL%2BURflNHrM7YHGh8YDyd4umlsEFHdsSuCAZM26xC8b%2B9nTZFcqqymTJQZyugz%2BE8wcmyLkDT7693wo3bonLXZvVYGYznWzLWvmTTdXKtAp7I7VQAHsrCTz4Fkd3Gdx2QpRQeyin9Og5Pq4NwkfxO156FmJZJa5MKkhBosHQ0%2F2Ag6vhJ9NXKtw3DdAHyU1d4s7Z4MisOJjdTJ0f8NJMf&X-Amz-Signature=8fc8be9d0c526fcb7dde7752b231896d3d365088569add00a9fcc745ed29ed9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV2HKVR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIBYhZ74HDB7WQMMZOVmbYQQO0szrzDbJ1HVPMIw%2BsaFOAiA%2Fs%2FZkI7jKWmsogoadsfQ70%2BPBRwoFh1%2BL1umjOG8cvyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw6O2Qb3uVU5HAvMdKtwDf88aZYAimtOt1irvd%2Be0ysYtPq1tew4tinPLJS%2FKaB0RN6dTYvwOzVWjPV7fHuJlt9%2FJ3m1ZV9Bag3txNfXtISAWLjHfKH3DqoC4eaUOLBlOdcjJFiP0f9IZNsKk%2FOfVFGv0G%2FZQbnPGj64ks5nXD6TxWknpBFU4o8J61EvYaqIA9X8x0chCCkG88kdwJdxt1AlMauyzIM%2FLQMakF4oLqeurkh8n90VS%2FpFxLW5pdcFnPP6Dd%2FwvWNV7JznwYUau9sLucIB8ZQxC%2FdMq8VJtB78r1AeqXJVeaJLLjbmNaVCa3Cl%2B9KFmXZ6KDJtSXHhslnMsFx3s6YIzpaiSJQpkKfZiDbcaJUm%2FioNya8SQZ8dX%2BG%2BS2Z0d3aFb8OdXDzbOMPAyYpicDxIEro6wgw3x0QtSxwiZSlIIDepDjsHX6PiHpcVSrbOxPsDSNIB62VH9n2v7fLZym49iCOS6MitqBJHKh9o%2FGvc%2FiKswiZS6EIsucnp7juO0lR7UzbAA7O6ANGHm7BQty0rRiZHQzdpfTjVKE6nXmEezMp7F6q%2BO1FlpdAldW0Ds4urQl76Nj5TTpu6kTVCJU19WbmKOGJBukgPdLFQCBf5%2Fd3EzbIQfIMez2vKhWJ%2B%2F93ZsZjkwq6uewAY6pgF4eXrUB3RJL%2BURflNHrM7YHGh8YDyd4umlsEFHdsSuCAZM26xC8b%2B9nTZFcqqymTJQZyugz%2BE8wcmyLkDT7693wo3bonLXZvVYGYznWzLWvmTTdXKtAp7I7VQAHsrCTz4Fkd3Gdx2QpRQeyin9Og5Pq4NwkfxO156FmJZJa5MKkhBosHQ0%2F2Ag6vhJ9NXKtw3DdAHyU1d4s7Z4MisOJjdTJ0f8NJMf&X-Amz-Signature=eebf7a3e720255fc8fc6ebcf3794ea6e42404632d113623e0235aa0a39a0a309&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
