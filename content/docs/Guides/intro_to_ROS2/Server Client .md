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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGPF3JEA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGygXxkExqhZtlwSmX7Nx1xzKRvWZ5gEKflMB5acyJt7AiEAv8AfFLv0S0zgdE04JZpNijYoV844TAe4YhV%2BbbTH2gQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNirwfZmMUNRkPX3CrcAz4QpyBmL98Ew0p%2BKFY%2B4a4ou6htkKa%2BwD19hH3cXDm55mVWa6FliPpuSmfeRigG6I41QDXn3Ggdxt%2FSLZ16Jx%2FhL%2FWtoSAfJGdX5mKvxwT00va7D0JxDgkWA4YpVEMtREf%2F7M%2BkYHNPY25to37m7%2FuvcQ2TZORs48hP0mNGP3qwmMY6XVY2%2B6y7fcksjtmX%2Bd%2BS8nXA4j22%2FkGolcHEuPYipY58oBEA%2BcXuyIjPimphHMC1ae7vmMnkvaZHFrWtu%2BYmZQN1SGDUk7tBakYL24nAHzbPwvuL8EEvvJw%2BN2LoQNvrgluDEOVVA1r45t8D6VIWWvmsmQ9I85cLtdZf3BQZTsDyhMAIzDelEr32LbvnbLJyvTJHqmBZdTsTe8Ni3nuqmSC0a6lxLQyp9yIzMdiBxRPjC2xSvJ%2B%2FXOWhOyPl0xbPJhjJf9QwtH5AyEoRctFnu%2FaUgfDCLzmMXIKjOxRGxIMXnl9%2FaFIujDntaPbY%2BovzkONICzH9tZtL8Qvsh7rHepCrUP%2FmB5W%2FW5dwEYXzheZ6s7%2FIOL0fyUTRgVH4Ff59054jlUBxS0UKe9TRYx%2B6OMEZH0Gpd45gKtgYiCkJr3yL8fj%2Bb9rH%2Bxf%2BVzBnIEaLuUcpNFr0k6DJMJaZ8cMGOqUBvjAnis%2Fe%2Bxr0BNVHQNVqKJjJ7NTZAV6MoOqVb5NzaG90fm5PDXgg45XQ0Ituyw0QYL8deWCDc%2BgLxnS9%2BZXioPPGoEghFB1Osh85XloFdO0slL5Uh7M6ZiqmMpFYjDIWOnPVW9Cz3wb5oIoyZvyqcEb%2BKVoODMqOKCQWzSMCLQVwbUOk5p%2BL%2BjtcPsLZAmzdgNK5mrv9GG0Kfqfs28CCNKCDC5rn&X-Amz-Signature=821a9990aec12d075ad4f4b6c106f6a378c46cccc64861714428e0b44c022771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGPF3JEA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGygXxkExqhZtlwSmX7Nx1xzKRvWZ5gEKflMB5acyJt7AiEAv8AfFLv0S0zgdE04JZpNijYoV844TAe4YhV%2BbbTH2gQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNirwfZmMUNRkPX3CrcAz4QpyBmL98Ew0p%2BKFY%2B4a4ou6htkKa%2BwD19hH3cXDm55mVWa6FliPpuSmfeRigG6I41QDXn3Ggdxt%2FSLZ16Jx%2FhL%2FWtoSAfJGdX5mKvxwT00va7D0JxDgkWA4YpVEMtREf%2F7M%2BkYHNPY25to37m7%2FuvcQ2TZORs48hP0mNGP3qwmMY6XVY2%2B6y7fcksjtmX%2Bd%2BS8nXA4j22%2FkGolcHEuPYipY58oBEA%2BcXuyIjPimphHMC1ae7vmMnkvaZHFrWtu%2BYmZQN1SGDUk7tBakYL24nAHzbPwvuL8EEvvJw%2BN2LoQNvrgluDEOVVA1r45t8D6VIWWvmsmQ9I85cLtdZf3BQZTsDyhMAIzDelEr32LbvnbLJyvTJHqmBZdTsTe8Ni3nuqmSC0a6lxLQyp9yIzMdiBxRPjC2xSvJ%2B%2FXOWhOyPl0xbPJhjJf9QwtH5AyEoRctFnu%2FaUgfDCLzmMXIKjOxRGxIMXnl9%2FaFIujDntaPbY%2BovzkONICzH9tZtL8Qvsh7rHepCrUP%2FmB5W%2FW5dwEYXzheZ6s7%2FIOL0fyUTRgVH4Ff59054jlUBxS0UKe9TRYx%2B6OMEZH0Gpd45gKtgYiCkJr3yL8fj%2Bb9rH%2Bxf%2BVzBnIEaLuUcpNFr0k6DJMJaZ8cMGOqUBvjAnis%2Fe%2Bxr0BNVHQNVqKJjJ7NTZAV6MoOqVb5NzaG90fm5PDXgg45XQ0Ituyw0QYL8deWCDc%2BgLxnS9%2BZXioPPGoEghFB1Osh85XloFdO0slL5Uh7M6ZiqmMpFYjDIWOnPVW9Cz3wb5oIoyZvyqcEb%2BKVoODMqOKCQWzSMCLQVwbUOk5p%2BL%2BjtcPsLZAmzdgNK5mrv9GG0Kfqfs28CCNKCDC5rn&X-Amz-Signature=9453d271de5d731a402656667981677f903cd9dd073f28c2f924a346849aa5ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGPF3JEA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGygXxkExqhZtlwSmX7Nx1xzKRvWZ5gEKflMB5acyJt7AiEAv8AfFLv0S0zgdE04JZpNijYoV844TAe4YhV%2BbbTH2gQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNirwfZmMUNRkPX3CrcAz4QpyBmL98Ew0p%2BKFY%2B4a4ou6htkKa%2BwD19hH3cXDm55mVWa6FliPpuSmfeRigG6I41QDXn3Ggdxt%2FSLZ16Jx%2FhL%2FWtoSAfJGdX5mKvxwT00va7D0JxDgkWA4YpVEMtREf%2F7M%2BkYHNPY25to37m7%2FuvcQ2TZORs48hP0mNGP3qwmMY6XVY2%2B6y7fcksjtmX%2Bd%2BS8nXA4j22%2FkGolcHEuPYipY58oBEA%2BcXuyIjPimphHMC1ae7vmMnkvaZHFrWtu%2BYmZQN1SGDUk7tBakYL24nAHzbPwvuL8EEvvJw%2BN2LoQNvrgluDEOVVA1r45t8D6VIWWvmsmQ9I85cLtdZf3BQZTsDyhMAIzDelEr32LbvnbLJyvTJHqmBZdTsTe8Ni3nuqmSC0a6lxLQyp9yIzMdiBxRPjC2xSvJ%2B%2FXOWhOyPl0xbPJhjJf9QwtH5AyEoRctFnu%2FaUgfDCLzmMXIKjOxRGxIMXnl9%2FaFIujDntaPbY%2BovzkONICzH9tZtL8Qvsh7rHepCrUP%2FmB5W%2FW5dwEYXzheZ6s7%2FIOL0fyUTRgVH4Ff59054jlUBxS0UKe9TRYx%2B6OMEZH0Gpd45gKtgYiCkJr3yL8fj%2Bb9rH%2Bxf%2BVzBnIEaLuUcpNFr0k6DJMJaZ8cMGOqUBvjAnis%2Fe%2Bxr0BNVHQNVqKJjJ7NTZAV6MoOqVb5NzaG90fm5PDXgg45XQ0Ituyw0QYL8deWCDc%2BgLxnS9%2BZXioPPGoEghFB1Osh85XloFdO0slL5Uh7M6ZiqmMpFYjDIWOnPVW9Cz3wb5oIoyZvyqcEb%2BKVoODMqOKCQWzSMCLQVwbUOk5p%2BL%2BjtcPsLZAmzdgNK5mrv9GG0Kfqfs28CCNKCDC5rn&X-Amz-Signature=e2b845ca9394f787313ce574ed3577b2b832a3371681c56e770d51225771525d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGPF3JEA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGygXxkExqhZtlwSmX7Nx1xzKRvWZ5gEKflMB5acyJt7AiEAv8AfFLv0S0zgdE04JZpNijYoV844TAe4YhV%2BbbTH2gQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNirwfZmMUNRkPX3CrcAz4QpyBmL98Ew0p%2BKFY%2B4a4ou6htkKa%2BwD19hH3cXDm55mVWa6FliPpuSmfeRigG6I41QDXn3Ggdxt%2FSLZ16Jx%2FhL%2FWtoSAfJGdX5mKvxwT00va7D0JxDgkWA4YpVEMtREf%2F7M%2BkYHNPY25to37m7%2FuvcQ2TZORs48hP0mNGP3qwmMY6XVY2%2B6y7fcksjtmX%2Bd%2BS8nXA4j22%2FkGolcHEuPYipY58oBEA%2BcXuyIjPimphHMC1ae7vmMnkvaZHFrWtu%2BYmZQN1SGDUk7tBakYL24nAHzbPwvuL8EEvvJw%2BN2LoQNvrgluDEOVVA1r45t8D6VIWWvmsmQ9I85cLtdZf3BQZTsDyhMAIzDelEr32LbvnbLJyvTJHqmBZdTsTe8Ni3nuqmSC0a6lxLQyp9yIzMdiBxRPjC2xSvJ%2B%2FXOWhOyPl0xbPJhjJf9QwtH5AyEoRctFnu%2FaUgfDCLzmMXIKjOxRGxIMXnl9%2FaFIujDntaPbY%2BovzkONICzH9tZtL8Qvsh7rHepCrUP%2FmB5W%2FW5dwEYXzheZ6s7%2FIOL0fyUTRgVH4Ff59054jlUBxS0UKe9TRYx%2B6OMEZH0Gpd45gKtgYiCkJr3yL8fj%2Bb9rH%2Bxf%2BVzBnIEaLuUcpNFr0k6DJMJaZ8cMGOqUBvjAnis%2Fe%2Bxr0BNVHQNVqKJjJ7NTZAV6MoOqVb5NzaG90fm5PDXgg45XQ0Ituyw0QYL8deWCDc%2BgLxnS9%2BZXioPPGoEghFB1Osh85XloFdO0slL5Uh7M6ZiqmMpFYjDIWOnPVW9Cz3wb5oIoyZvyqcEb%2BKVoODMqOKCQWzSMCLQVwbUOk5p%2BL%2BjtcPsLZAmzdgNK5mrv9GG0Kfqfs28CCNKCDC5rn&X-Amz-Signature=0428eb0f1f6f7af227ca802dcce772fcb42948cc9cfe484d353137e7d6731c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGPF3JEA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGygXxkExqhZtlwSmX7Nx1xzKRvWZ5gEKflMB5acyJt7AiEAv8AfFLv0S0zgdE04JZpNijYoV844TAe4YhV%2BbbTH2gQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNirwfZmMUNRkPX3CrcAz4QpyBmL98Ew0p%2BKFY%2B4a4ou6htkKa%2BwD19hH3cXDm55mVWa6FliPpuSmfeRigG6I41QDXn3Ggdxt%2FSLZ16Jx%2FhL%2FWtoSAfJGdX5mKvxwT00va7D0JxDgkWA4YpVEMtREf%2F7M%2BkYHNPY25to37m7%2FuvcQ2TZORs48hP0mNGP3qwmMY6XVY2%2B6y7fcksjtmX%2Bd%2BS8nXA4j22%2FkGolcHEuPYipY58oBEA%2BcXuyIjPimphHMC1ae7vmMnkvaZHFrWtu%2BYmZQN1SGDUk7tBakYL24nAHzbPwvuL8EEvvJw%2BN2LoQNvrgluDEOVVA1r45t8D6VIWWvmsmQ9I85cLtdZf3BQZTsDyhMAIzDelEr32LbvnbLJyvTJHqmBZdTsTe8Ni3nuqmSC0a6lxLQyp9yIzMdiBxRPjC2xSvJ%2B%2FXOWhOyPl0xbPJhjJf9QwtH5AyEoRctFnu%2FaUgfDCLzmMXIKjOxRGxIMXnl9%2FaFIujDntaPbY%2BovzkONICzH9tZtL8Qvsh7rHepCrUP%2FmB5W%2FW5dwEYXzheZ6s7%2FIOL0fyUTRgVH4Ff59054jlUBxS0UKe9TRYx%2B6OMEZH0Gpd45gKtgYiCkJr3yL8fj%2Bb9rH%2Bxf%2BVzBnIEaLuUcpNFr0k6DJMJaZ8cMGOqUBvjAnis%2Fe%2Bxr0BNVHQNVqKJjJ7NTZAV6MoOqVb5NzaG90fm5PDXgg45XQ0Ituyw0QYL8deWCDc%2BgLxnS9%2BZXioPPGoEghFB1Osh85XloFdO0slL5Uh7M6ZiqmMpFYjDIWOnPVW9Cz3wb5oIoyZvyqcEb%2BKVoODMqOKCQWzSMCLQVwbUOk5p%2BL%2BjtcPsLZAmzdgNK5mrv9GG0Kfqfs28CCNKCDC5rn&X-Amz-Signature=44d6fbc0524a31a1075380f45206ea5e91caa5258b40222f52b0d72f1946c08b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
