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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5EGQQQW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQD4t4xUq9rBSEokseRL33gzzn3f1QJxprSjSPRJ3iUyrwIgFKxCDFXQS6rArOqD6qjp1j3G3O6exbHSqH9y3CzAvc8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHj4yF%2BBFkArvv%2BP0ircA5j9pqVpy9U8LPM1k0cewrHe0WIgtGcydca3RygIIiBCKUL%2Bi1t%2BMbQFZ9OGMhYNofIfwP5Ni9cYbAm9NmrvowC78tKTZz4TZZz7isM%2B3ODQ1YjEbJuBdvrw8M3dk%2BG9%2BsOmTp2vIOW4Z19SZ%2BCcCu1ti2NLr07%2FXD7SbPhpOVIKLOihy7%2Fd%2FzVl4HevJHY35%2Fxc0STZ7QkA2ZgQRHTn0OtPmpI6%2FWcH8itxu9m5Ua5EZrxcopzpWVP1kHJawf6uGSHCGNtdyIcZZrpJnqWYs9kXH8kBvaUZ83QwX3w3S3ELRIUUgpZGxnGG9KusGk31VIeahA%2BM8qygc6KdE1sUszusMVexHGxIaRYN2WdPs5%2F9uMrYhdasW1F81znJphYDFXkK4Sn%2BLA%2BM6bHdTdFppVt0IxCratpBPEaVXUpiYlu53EgqNuLGZiOwpESKTMXSshwd0%2BcjaVeIiN6StRjRSVVmc6aSEM6FUJv0cGTDIpgSHbzepkQfbdzriPCbQ4JqldHlSARDrhEf%2BZyjm7x45Z%2BAxuC7NNG6%2F%2FkBiCr7VlvBWYSudNwuzv8hWi8yQjGo2RIRMZrd1aR6qW4mYELvfXShUkXsuts36fITML1D%2BG7hLxxxxFjt3RqZ8cUzMOD65cMGOqUBTEFMNCGUjtl7crbXc5DbDOC5WaEhZwtdje%2BpIEWYi1eYApYhgn3gAfTBDTcb1uqbW%2FvY1nh%2B0yFjVSwqshMWIiCb2nDlO4F1HRQ1oYi00kit9CGFph%2FY41DVS5qkfcViv1IAT95IiP6sgHl4vcTNGMKCngrqSqoD06o76JH%2FlWoXm7%2FW0nZXu7r%2BZ6vrji%2F5vrL8mADZrdhyJMK0wq7pJ7CsMSL1&X-Amz-Signature=3e4da4eb7ed12c76fccddcc256bc165ef186aa38121455d6e6fffaebcf55967a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5EGQQQW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQD4t4xUq9rBSEokseRL33gzzn3f1QJxprSjSPRJ3iUyrwIgFKxCDFXQS6rArOqD6qjp1j3G3O6exbHSqH9y3CzAvc8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHj4yF%2BBFkArvv%2BP0ircA5j9pqVpy9U8LPM1k0cewrHe0WIgtGcydca3RygIIiBCKUL%2Bi1t%2BMbQFZ9OGMhYNofIfwP5Ni9cYbAm9NmrvowC78tKTZz4TZZz7isM%2B3ODQ1YjEbJuBdvrw8M3dk%2BG9%2BsOmTp2vIOW4Z19SZ%2BCcCu1ti2NLr07%2FXD7SbPhpOVIKLOihy7%2Fd%2FzVl4HevJHY35%2Fxc0STZ7QkA2ZgQRHTn0OtPmpI6%2FWcH8itxu9m5Ua5EZrxcopzpWVP1kHJawf6uGSHCGNtdyIcZZrpJnqWYs9kXH8kBvaUZ83QwX3w3S3ELRIUUgpZGxnGG9KusGk31VIeahA%2BM8qygc6KdE1sUszusMVexHGxIaRYN2WdPs5%2F9uMrYhdasW1F81znJphYDFXkK4Sn%2BLA%2BM6bHdTdFppVt0IxCratpBPEaVXUpiYlu53EgqNuLGZiOwpESKTMXSshwd0%2BcjaVeIiN6StRjRSVVmc6aSEM6FUJv0cGTDIpgSHbzepkQfbdzriPCbQ4JqldHlSARDrhEf%2BZyjm7x45Z%2BAxuC7NNG6%2F%2FkBiCr7VlvBWYSudNwuzv8hWi8yQjGo2RIRMZrd1aR6qW4mYELvfXShUkXsuts36fITML1D%2BG7hLxxxxFjt3RqZ8cUzMOD65cMGOqUBTEFMNCGUjtl7crbXc5DbDOC5WaEhZwtdje%2BpIEWYi1eYApYhgn3gAfTBDTcb1uqbW%2FvY1nh%2B0yFjVSwqshMWIiCb2nDlO4F1HRQ1oYi00kit9CGFph%2FY41DVS5qkfcViv1IAT95IiP6sgHl4vcTNGMKCngrqSqoD06o76JH%2FlWoXm7%2FW0nZXu7r%2BZ6vrji%2F5vrL8mADZrdhyJMK0wq7pJ7CsMSL1&X-Amz-Signature=18bbf4e24d922123ddf4292ef28d50fde648b9cc7f19531f47a9e987971b988d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5EGQQQW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQD4t4xUq9rBSEokseRL33gzzn3f1QJxprSjSPRJ3iUyrwIgFKxCDFXQS6rArOqD6qjp1j3G3O6exbHSqH9y3CzAvc8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHj4yF%2BBFkArvv%2BP0ircA5j9pqVpy9U8LPM1k0cewrHe0WIgtGcydca3RygIIiBCKUL%2Bi1t%2BMbQFZ9OGMhYNofIfwP5Ni9cYbAm9NmrvowC78tKTZz4TZZz7isM%2B3ODQ1YjEbJuBdvrw8M3dk%2BG9%2BsOmTp2vIOW4Z19SZ%2BCcCu1ti2NLr07%2FXD7SbPhpOVIKLOihy7%2Fd%2FzVl4HevJHY35%2Fxc0STZ7QkA2ZgQRHTn0OtPmpI6%2FWcH8itxu9m5Ua5EZrxcopzpWVP1kHJawf6uGSHCGNtdyIcZZrpJnqWYs9kXH8kBvaUZ83QwX3w3S3ELRIUUgpZGxnGG9KusGk31VIeahA%2BM8qygc6KdE1sUszusMVexHGxIaRYN2WdPs5%2F9uMrYhdasW1F81znJphYDFXkK4Sn%2BLA%2BM6bHdTdFppVt0IxCratpBPEaVXUpiYlu53EgqNuLGZiOwpESKTMXSshwd0%2BcjaVeIiN6StRjRSVVmc6aSEM6FUJv0cGTDIpgSHbzepkQfbdzriPCbQ4JqldHlSARDrhEf%2BZyjm7x45Z%2BAxuC7NNG6%2F%2FkBiCr7VlvBWYSudNwuzv8hWi8yQjGo2RIRMZrd1aR6qW4mYELvfXShUkXsuts36fITML1D%2BG7hLxxxxFjt3RqZ8cUzMOD65cMGOqUBTEFMNCGUjtl7crbXc5DbDOC5WaEhZwtdje%2BpIEWYi1eYApYhgn3gAfTBDTcb1uqbW%2FvY1nh%2B0yFjVSwqshMWIiCb2nDlO4F1HRQ1oYi00kit9CGFph%2FY41DVS5qkfcViv1IAT95IiP6sgHl4vcTNGMKCngrqSqoD06o76JH%2FlWoXm7%2FW0nZXu7r%2BZ6vrji%2F5vrL8mADZrdhyJMK0wq7pJ7CsMSL1&X-Amz-Signature=52ee7ac22c7638cd2b7644145aaa6a4f34be88da16b046d204051ce22168a1fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5EGQQQW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQD4t4xUq9rBSEokseRL33gzzn3f1QJxprSjSPRJ3iUyrwIgFKxCDFXQS6rArOqD6qjp1j3G3O6exbHSqH9y3CzAvc8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHj4yF%2BBFkArvv%2BP0ircA5j9pqVpy9U8LPM1k0cewrHe0WIgtGcydca3RygIIiBCKUL%2Bi1t%2BMbQFZ9OGMhYNofIfwP5Ni9cYbAm9NmrvowC78tKTZz4TZZz7isM%2B3ODQ1YjEbJuBdvrw8M3dk%2BG9%2BsOmTp2vIOW4Z19SZ%2BCcCu1ti2NLr07%2FXD7SbPhpOVIKLOihy7%2Fd%2FzVl4HevJHY35%2Fxc0STZ7QkA2ZgQRHTn0OtPmpI6%2FWcH8itxu9m5Ua5EZrxcopzpWVP1kHJawf6uGSHCGNtdyIcZZrpJnqWYs9kXH8kBvaUZ83QwX3w3S3ELRIUUgpZGxnGG9KusGk31VIeahA%2BM8qygc6KdE1sUszusMVexHGxIaRYN2WdPs5%2F9uMrYhdasW1F81znJphYDFXkK4Sn%2BLA%2BM6bHdTdFppVt0IxCratpBPEaVXUpiYlu53EgqNuLGZiOwpESKTMXSshwd0%2BcjaVeIiN6StRjRSVVmc6aSEM6FUJv0cGTDIpgSHbzepkQfbdzriPCbQ4JqldHlSARDrhEf%2BZyjm7x45Z%2BAxuC7NNG6%2F%2FkBiCr7VlvBWYSudNwuzv8hWi8yQjGo2RIRMZrd1aR6qW4mYELvfXShUkXsuts36fITML1D%2BG7hLxxxxFjt3RqZ8cUzMOD65cMGOqUBTEFMNCGUjtl7crbXc5DbDOC5WaEhZwtdje%2BpIEWYi1eYApYhgn3gAfTBDTcb1uqbW%2FvY1nh%2B0yFjVSwqshMWIiCb2nDlO4F1HRQ1oYi00kit9CGFph%2FY41DVS5qkfcViv1IAT95IiP6sgHl4vcTNGMKCngrqSqoD06o76JH%2FlWoXm7%2FW0nZXu7r%2BZ6vrji%2F5vrL8mADZrdhyJMK0wq7pJ7CsMSL1&X-Amz-Signature=e4b53e12320fd3e38c697306fb3ab8c413c22d45568ad752c2563687b8a412c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5EGQQQW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQD4t4xUq9rBSEokseRL33gzzn3f1QJxprSjSPRJ3iUyrwIgFKxCDFXQS6rArOqD6qjp1j3G3O6exbHSqH9y3CzAvc8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHj4yF%2BBFkArvv%2BP0ircA5j9pqVpy9U8LPM1k0cewrHe0WIgtGcydca3RygIIiBCKUL%2Bi1t%2BMbQFZ9OGMhYNofIfwP5Ni9cYbAm9NmrvowC78tKTZz4TZZz7isM%2B3ODQ1YjEbJuBdvrw8M3dk%2BG9%2BsOmTp2vIOW4Z19SZ%2BCcCu1ti2NLr07%2FXD7SbPhpOVIKLOihy7%2Fd%2FzVl4HevJHY35%2Fxc0STZ7QkA2ZgQRHTn0OtPmpI6%2FWcH8itxu9m5Ua5EZrxcopzpWVP1kHJawf6uGSHCGNtdyIcZZrpJnqWYs9kXH8kBvaUZ83QwX3w3S3ELRIUUgpZGxnGG9KusGk31VIeahA%2BM8qygc6KdE1sUszusMVexHGxIaRYN2WdPs5%2F9uMrYhdasW1F81znJphYDFXkK4Sn%2BLA%2BM6bHdTdFppVt0IxCratpBPEaVXUpiYlu53EgqNuLGZiOwpESKTMXSshwd0%2BcjaVeIiN6StRjRSVVmc6aSEM6FUJv0cGTDIpgSHbzepkQfbdzriPCbQ4JqldHlSARDrhEf%2BZyjm7x45Z%2BAxuC7NNG6%2F%2FkBiCr7VlvBWYSudNwuzv8hWi8yQjGo2RIRMZrd1aR6qW4mYELvfXShUkXsuts36fITML1D%2BG7hLxxxxFjt3RqZ8cUzMOD65cMGOqUBTEFMNCGUjtl7crbXc5DbDOC5WaEhZwtdje%2BpIEWYi1eYApYhgn3gAfTBDTcb1uqbW%2FvY1nh%2B0yFjVSwqshMWIiCb2nDlO4F1HRQ1oYi00kit9CGFph%2FY41DVS5qkfcViv1IAT95IiP6sgHl4vcTNGMKCngrqSqoD06o76JH%2FlWoXm7%2FW0nZXu7r%2BZ6vrji%2F5vrL8mADZrdhyJMK0wq7pJ7CsMSL1&X-Amz-Signature=ccc8b360acec6478e87b990f874427553d92f841b1e1b0c81dfd20acfa8e883f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
