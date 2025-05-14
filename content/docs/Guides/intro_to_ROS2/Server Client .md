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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R4WP63R%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCUULL4Kyvcs112%2F%2F4rsVasTdlsUxbik2Yw2oFbqzdlCQIhAO4wGLue72p%2BMaYCNgIaOQjwi7uCU%2BQVNjjWYKrXGu6aKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTcup7LEnrZmE1C24q3AMi788DW1I3nlJriTIMxhfC99pkvWExJwL%2Bxm%2B37WLvefk7eISnF68wsM8EzRVgzZ2bv14AoRUfbdHOX45X%2FTFJ%2BWW6ubcNtLZ0i4K9th4GRONVSETnnFMgLgc1hu%2FrMqtgirYx6gNEuYZCr5YZe9BbIXXcm2d5SxuYuaLRjpcU%2BdaId6xmDROuCkHs3XuEx30E3ubaS3MNaWH2Xju1w5gLhPDa15Rt0WWXlNtQvXHjorjs%2BgC6gGU6TBdtBNso0%2Fd3f7LKa0JJ5R1WPf4s%2FAgVo4QphgMi5QqozJkHwewMe6grSHNBhFBFWONPRjdDm6eSEyt4OLZCKJUQN%2F8zDSIsiOFuZQHDhrTxISeTkRhbsmLBFYZ%2FPNbetErcuLsUicUTX4y6bSbdFeQeb4u%2F%2Bagl15qnWxSzJzIswbW5TEyUGhJngP%2FIs87gV4Td89Yy8Uzp65yqkDzJRoIiQLenMx0c2y0mKiN4RYEfoP4tOICjUA9uBL0OTo5iVZ5NAXvpTnxJHtsuLrSJfxGf0LYEP7ORoh%2B50DyHJcZdF03cAY8s%2BCTHalH5m7QDNr0d3k1jkRIc5LIzeHaF8%2BCNr1N8uNX7LvrMHxcULM%2BaxutCrEQQ1Bdc0l%2Bxi%2FKEOwvqWjD4oJDBBjqkAUfyzFfCKWsVCeM%2BdzEeQk70QTufAvj5Rst3AxySD7GEMGg7O3%2FigRRNrQXxGtU37Jim4l5SrTTLDTI3Sk%2BXXMAsICs7NtJqRwJ%2FMCews%2BTc%2Bio5VGhS2YVQqqjj5TJGVhjr6b1J086TF7CFHt6uGymF1hkq8vXGg%2FlJpQZ7BNsZm%2FGcNJYHUs4RI9lPh7o0beX7BQYsEuZPWeeGufm1G6s%2F9Xn%2B&X-Amz-Signature=7a8ba63f130f7631910c58aa9390b61627cd4fb28a411a7de4f3dddcebeb6574&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R4WP63R%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCUULL4Kyvcs112%2F%2F4rsVasTdlsUxbik2Yw2oFbqzdlCQIhAO4wGLue72p%2BMaYCNgIaOQjwi7uCU%2BQVNjjWYKrXGu6aKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTcup7LEnrZmE1C24q3AMi788DW1I3nlJriTIMxhfC99pkvWExJwL%2Bxm%2B37WLvefk7eISnF68wsM8EzRVgzZ2bv14AoRUfbdHOX45X%2FTFJ%2BWW6ubcNtLZ0i4K9th4GRONVSETnnFMgLgc1hu%2FrMqtgirYx6gNEuYZCr5YZe9BbIXXcm2d5SxuYuaLRjpcU%2BdaId6xmDROuCkHs3XuEx30E3ubaS3MNaWH2Xju1w5gLhPDa15Rt0WWXlNtQvXHjorjs%2BgC6gGU6TBdtBNso0%2Fd3f7LKa0JJ5R1WPf4s%2FAgVo4QphgMi5QqozJkHwewMe6grSHNBhFBFWONPRjdDm6eSEyt4OLZCKJUQN%2F8zDSIsiOFuZQHDhrTxISeTkRhbsmLBFYZ%2FPNbetErcuLsUicUTX4y6bSbdFeQeb4u%2F%2Bagl15qnWxSzJzIswbW5TEyUGhJngP%2FIs87gV4Td89Yy8Uzp65yqkDzJRoIiQLenMx0c2y0mKiN4RYEfoP4tOICjUA9uBL0OTo5iVZ5NAXvpTnxJHtsuLrSJfxGf0LYEP7ORoh%2B50DyHJcZdF03cAY8s%2BCTHalH5m7QDNr0d3k1jkRIc5LIzeHaF8%2BCNr1N8uNX7LvrMHxcULM%2BaxutCrEQQ1Bdc0l%2Bxi%2FKEOwvqWjD4oJDBBjqkAUfyzFfCKWsVCeM%2BdzEeQk70QTufAvj5Rst3AxySD7GEMGg7O3%2FigRRNrQXxGtU37Jim4l5SrTTLDTI3Sk%2BXXMAsICs7NtJqRwJ%2FMCews%2BTc%2Bio5VGhS2YVQqqjj5TJGVhjr6b1J086TF7CFHt6uGymF1hkq8vXGg%2FlJpQZ7BNsZm%2FGcNJYHUs4RI9lPh7o0beX7BQYsEuZPWeeGufm1G6s%2F9Xn%2B&X-Amz-Signature=d787ccb77e9ec9b64aeacf9465157bf6c30746fd89f61b91b3d3c778b05edbad&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R4WP63R%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCUULL4Kyvcs112%2F%2F4rsVasTdlsUxbik2Yw2oFbqzdlCQIhAO4wGLue72p%2BMaYCNgIaOQjwi7uCU%2BQVNjjWYKrXGu6aKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTcup7LEnrZmE1C24q3AMi788DW1I3nlJriTIMxhfC99pkvWExJwL%2Bxm%2B37WLvefk7eISnF68wsM8EzRVgzZ2bv14AoRUfbdHOX45X%2FTFJ%2BWW6ubcNtLZ0i4K9th4GRONVSETnnFMgLgc1hu%2FrMqtgirYx6gNEuYZCr5YZe9BbIXXcm2d5SxuYuaLRjpcU%2BdaId6xmDROuCkHs3XuEx30E3ubaS3MNaWH2Xju1w5gLhPDa15Rt0WWXlNtQvXHjorjs%2BgC6gGU6TBdtBNso0%2Fd3f7LKa0JJ5R1WPf4s%2FAgVo4QphgMi5QqozJkHwewMe6grSHNBhFBFWONPRjdDm6eSEyt4OLZCKJUQN%2F8zDSIsiOFuZQHDhrTxISeTkRhbsmLBFYZ%2FPNbetErcuLsUicUTX4y6bSbdFeQeb4u%2F%2Bagl15qnWxSzJzIswbW5TEyUGhJngP%2FIs87gV4Td89Yy8Uzp65yqkDzJRoIiQLenMx0c2y0mKiN4RYEfoP4tOICjUA9uBL0OTo5iVZ5NAXvpTnxJHtsuLrSJfxGf0LYEP7ORoh%2B50DyHJcZdF03cAY8s%2BCTHalH5m7QDNr0d3k1jkRIc5LIzeHaF8%2BCNr1N8uNX7LvrMHxcULM%2BaxutCrEQQ1Bdc0l%2Bxi%2FKEOwvqWjD4oJDBBjqkAUfyzFfCKWsVCeM%2BdzEeQk70QTufAvj5Rst3AxySD7GEMGg7O3%2FigRRNrQXxGtU37Jim4l5SrTTLDTI3Sk%2BXXMAsICs7NtJqRwJ%2FMCews%2BTc%2Bio5VGhS2YVQqqjj5TJGVhjr6b1J086TF7CFHt6uGymF1hkq8vXGg%2FlJpQZ7BNsZm%2FGcNJYHUs4RI9lPh7o0beX7BQYsEuZPWeeGufm1G6s%2F9Xn%2B&X-Amz-Signature=9166cef54415757bd8d184abdd676f114f4e3edec53f40b7c59c5e64c1f01077&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R4WP63R%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCUULL4Kyvcs112%2F%2F4rsVasTdlsUxbik2Yw2oFbqzdlCQIhAO4wGLue72p%2BMaYCNgIaOQjwi7uCU%2BQVNjjWYKrXGu6aKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTcup7LEnrZmE1C24q3AMi788DW1I3nlJriTIMxhfC99pkvWExJwL%2Bxm%2B37WLvefk7eISnF68wsM8EzRVgzZ2bv14AoRUfbdHOX45X%2FTFJ%2BWW6ubcNtLZ0i4K9th4GRONVSETnnFMgLgc1hu%2FrMqtgirYx6gNEuYZCr5YZe9BbIXXcm2d5SxuYuaLRjpcU%2BdaId6xmDROuCkHs3XuEx30E3ubaS3MNaWH2Xju1w5gLhPDa15Rt0WWXlNtQvXHjorjs%2BgC6gGU6TBdtBNso0%2Fd3f7LKa0JJ5R1WPf4s%2FAgVo4QphgMi5QqozJkHwewMe6grSHNBhFBFWONPRjdDm6eSEyt4OLZCKJUQN%2F8zDSIsiOFuZQHDhrTxISeTkRhbsmLBFYZ%2FPNbetErcuLsUicUTX4y6bSbdFeQeb4u%2F%2Bagl15qnWxSzJzIswbW5TEyUGhJngP%2FIs87gV4Td89Yy8Uzp65yqkDzJRoIiQLenMx0c2y0mKiN4RYEfoP4tOICjUA9uBL0OTo5iVZ5NAXvpTnxJHtsuLrSJfxGf0LYEP7ORoh%2B50DyHJcZdF03cAY8s%2BCTHalH5m7QDNr0d3k1jkRIc5LIzeHaF8%2BCNr1N8uNX7LvrMHxcULM%2BaxutCrEQQ1Bdc0l%2Bxi%2FKEOwvqWjD4oJDBBjqkAUfyzFfCKWsVCeM%2BdzEeQk70QTufAvj5Rst3AxySD7GEMGg7O3%2FigRRNrQXxGtU37Jim4l5SrTTLDTI3Sk%2BXXMAsICs7NtJqRwJ%2FMCews%2BTc%2Bio5VGhS2YVQqqjj5TJGVhjr6b1J086TF7CFHt6uGymF1hkq8vXGg%2FlJpQZ7BNsZm%2FGcNJYHUs4RI9lPh7o0beX7BQYsEuZPWeeGufm1G6s%2F9Xn%2B&X-Amz-Signature=5d8fc1183add2723926287180b9fb65515e6a0e0decdf0db38244de6693bbe68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R4WP63R%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCUULL4Kyvcs112%2F%2F4rsVasTdlsUxbik2Yw2oFbqzdlCQIhAO4wGLue72p%2BMaYCNgIaOQjwi7uCU%2BQVNjjWYKrXGu6aKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTcup7LEnrZmE1C24q3AMi788DW1I3nlJriTIMxhfC99pkvWExJwL%2Bxm%2B37WLvefk7eISnF68wsM8EzRVgzZ2bv14AoRUfbdHOX45X%2FTFJ%2BWW6ubcNtLZ0i4K9th4GRONVSETnnFMgLgc1hu%2FrMqtgirYx6gNEuYZCr5YZe9BbIXXcm2d5SxuYuaLRjpcU%2BdaId6xmDROuCkHs3XuEx30E3ubaS3MNaWH2Xju1w5gLhPDa15Rt0WWXlNtQvXHjorjs%2BgC6gGU6TBdtBNso0%2Fd3f7LKa0JJ5R1WPf4s%2FAgVo4QphgMi5QqozJkHwewMe6grSHNBhFBFWONPRjdDm6eSEyt4OLZCKJUQN%2F8zDSIsiOFuZQHDhrTxISeTkRhbsmLBFYZ%2FPNbetErcuLsUicUTX4y6bSbdFeQeb4u%2F%2Bagl15qnWxSzJzIswbW5TEyUGhJngP%2FIs87gV4Td89Yy8Uzp65yqkDzJRoIiQLenMx0c2y0mKiN4RYEfoP4tOICjUA9uBL0OTo5iVZ5NAXvpTnxJHtsuLrSJfxGf0LYEP7ORoh%2B50DyHJcZdF03cAY8s%2BCTHalH5m7QDNr0d3k1jkRIc5LIzeHaF8%2BCNr1N8uNX7LvrMHxcULM%2BaxutCrEQQ1Bdc0l%2Bxi%2FKEOwvqWjD4oJDBBjqkAUfyzFfCKWsVCeM%2BdzEeQk70QTufAvj5Rst3AxySD7GEMGg7O3%2FigRRNrQXxGtU37Jim4l5SrTTLDTI3Sk%2BXXMAsICs7NtJqRwJ%2FMCews%2BTc%2Bio5VGhS2YVQqqjj5TJGVhjr6b1J086TF7CFHt6uGymF1hkq8vXGg%2FlJpQZ7BNsZm%2FGcNJYHUs4RI9lPh7o0beX7BQYsEuZPWeeGufm1G6s%2F9Xn%2B&X-Amz-Signature=829a4941b29d933a772332b0abde3634cbe088b55bfd946930be5cbddc60e7fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
