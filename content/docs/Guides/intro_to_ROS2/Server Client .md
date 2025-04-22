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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX2LDNCR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIC9tzsZeJAOqdqJhvfFewx8piOOdkr3lA3gOtANOzUY1AiEArg0JAgRsanecQw4I68vSNUA4wb9nIMRcS823y%2BtFlVAqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUCHajjm6usOTur6CrcA3Y1XznmFPxRtMO1bwRG1U9d969jk2D%2BKvzjymquagReGto%2BKxVEVXqO5MonQk44YbMrBcaaQYp3Bzv6bHf9W0nMmQhjQiLysl6WNba1hQPKRUTtrbjnts%2BQ6UQfvpDw6KWbt5MYRN9Xi9nr6%2BtziklXMW9sJqxdAQYY%2FJlsHZ15jzBhR%2FfrgPTO9fINyN%2BNseUHxbBaJYR%2FRgyumTX7FMJQ7Uqs4BwBNG48gpBIPsf54%2BEdMod%2B%2B1P0CNHJ3jZqy76J1l9WDQivX6%2FgdkPOn7%2Bt1TD5Z6SO8sBChgO%2BnmoNuqT0IoVbL9tX44hVQNQ0BFfbznFWiju1nVLXJwhvftpK50PjRAG9N0QxhTRBhtL5JY43bRbYKpNlKBj9n3rpGP7JXIXqTn3uly0LLAABg4GcPDOF1vX5%2FAVxegxpMct%2FoRBZnzKMgcUxkNOwqMBrC%2Bj11Ap6aE7yuR8durGYFlKAPQ6zHsMdMAw6IscMGxazj6SRsgg1Vjm7Tn9QVqw6strYLrG2jFA%2BTUw2xwpZwxI2nXjCt%2FAOrSIOZmIM1L6RGKDVFSJHlhAGD58WQ2FcL77zcEmW4%2BcJtt1xAyT3gCna13Es50BBr4U19j6nmp0DO0BNLyMoS5Gsdy5oMJG8nMAGOqUBI7W4QpWwfXuaiVFGp7d6AVQRlNJ0rOJurY0Pt4MNT%2BvbVWgQmvpUjNBSFj5zOdBRmfIpDejtJ%2F3xMCsxHDjXh%2FR8QBZ%2FatPa3iC0a2eMSSmx1NZMNs5U0%2FJFZiEPnQnPrwDI91XPwjef2OmzZv7j1KrlqEJ6rgwriE75zvNYkeIUaGQVbQSt1BuvrRvoVoTMAuvaugcEqHZQPS3ZI%2BI1siPUbUXh&X-Amz-Signature=7973b1dead58907b082ce94fa0ea136cd6ec1d3524538f35dfe99bc1d54371b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX2LDNCR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIC9tzsZeJAOqdqJhvfFewx8piOOdkr3lA3gOtANOzUY1AiEArg0JAgRsanecQw4I68vSNUA4wb9nIMRcS823y%2BtFlVAqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUCHajjm6usOTur6CrcA3Y1XznmFPxRtMO1bwRG1U9d969jk2D%2BKvzjymquagReGto%2BKxVEVXqO5MonQk44YbMrBcaaQYp3Bzv6bHf9W0nMmQhjQiLysl6WNba1hQPKRUTtrbjnts%2BQ6UQfvpDw6KWbt5MYRN9Xi9nr6%2BtziklXMW9sJqxdAQYY%2FJlsHZ15jzBhR%2FfrgPTO9fINyN%2BNseUHxbBaJYR%2FRgyumTX7FMJQ7Uqs4BwBNG48gpBIPsf54%2BEdMod%2B%2B1P0CNHJ3jZqy76J1l9WDQivX6%2FgdkPOn7%2Bt1TD5Z6SO8sBChgO%2BnmoNuqT0IoVbL9tX44hVQNQ0BFfbznFWiju1nVLXJwhvftpK50PjRAG9N0QxhTRBhtL5JY43bRbYKpNlKBj9n3rpGP7JXIXqTn3uly0LLAABg4GcPDOF1vX5%2FAVxegxpMct%2FoRBZnzKMgcUxkNOwqMBrC%2Bj11Ap6aE7yuR8durGYFlKAPQ6zHsMdMAw6IscMGxazj6SRsgg1Vjm7Tn9QVqw6strYLrG2jFA%2BTUw2xwpZwxI2nXjCt%2FAOrSIOZmIM1L6RGKDVFSJHlhAGD58WQ2FcL77zcEmW4%2BcJtt1xAyT3gCna13Es50BBr4U19j6nmp0DO0BNLyMoS5Gsdy5oMJG8nMAGOqUBI7W4QpWwfXuaiVFGp7d6AVQRlNJ0rOJurY0Pt4MNT%2BvbVWgQmvpUjNBSFj5zOdBRmfIpDejtJ%2F3xMCsxHDjXh%2FR8QBZ%2FatPa3iC0a2eMSSmx1NZMNs5U0%2FJFZiEPnQnPrwDI91XPwjef2OmzZv7j1KrlqEJ6rgwriE75zvNYkeIUaGQVbQSt1BuvrRvoVoTMAuvaugcEqHZQPS3ZI%2BI1siPUbUXh&X-Amz-Signature=2aa184e1a63d76fc8f70ffca9ba359e236db6298643f935f4f5e98dab3dd081a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX2LDNCR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIC9tzsZeJAOqdqJhvfFewx8piOOdkr3lA3gOtANOzUY1AiEArg0JAgRsanecQw4I68vSNUA4wb9nIMRcS823y%2BtFlVAqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUCHajjm6usOTur6CrcA3Y1XznmFPxRtMO1bwRG1U9d969jk2D%2BKvzjymquagReGto%2BKxVEVXqO5MonQk44YbMrBcaaQYp3Bzv6bHf9W0nMmQhjQiLysl6WNba1hQPKRUTtrbjnts%2BQ6UQfvpDw6KWbt5MYRN9Xi9nr6%2BtziklXMW9sJqxdAQYY%2FJlsHZ15jzBhR%2FfrgPTO9fINyN%2BNseUHxbBaJYR%2FRgyumTX7FMJQ7Uqs4BwBNG48gpBIPsf54%2BEdMod%2B%2B1P0CNHJ3jZqy76J1l9WDQivX6%2FgdkPOn7%2Bt1TD5Z6SO8sBChgO%2BnmoNuqT0IoVbL9tX44hVQNQ0BFfbznFWiju1nVLXJwhvftpK50PjRAG9N0QxhTRBhtL5JY43bRbYKpNlKBj9n3rpGP7JXIXqTn3uly0LLAABg4GcPDOF1vX5%2FAVxegxpMct%2FoRBZnzKMgcUxkNOwqMBrC%2Bj11Ap6aE7yuR8durGYFlKAPQ6zHsMdMAw6IscMGxazj6SRsgg1Vjm7Tn9QVqw6strYLrG2jFA%2BTUw2xwpZwxI2nXjCt%2FAOrSIOZmIM1L6RGKDVFSJHlhAGD58WQ2FcL77zcEmW4%2BcJtt1xAyT3gCna13Es50BBr4U19j6nmp0DO0BNLyMoS5Gsdy5oMJG8nMAGOqUBI7W4QpWwfXuaiVFGp7d6AVQRlNJ0rOJurY0Pt4MNT%2BvbVWgQmvpUjNBSFj5zOdBRmfIpDejtJ%2F3xMCsxHDjXh%2FR8QBZ%2FatPa3iC0a2eMSSmx1NZMNs5U0%2FJFZiEPnQnPrwDI91XPwjef2OmzZv7j1KrlqEJ6rgwriE75zvNYkeIUaGQVbQSt1BuvrRvoVoTMAuvaugcEqHZQPS3ZI%2BI1siPUbUXh&X-Amz-Signature=0e41a6f8fbc2ae9c33f6151b954eb8d563965a037951b604a4538265e45b9709&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX2LDNCR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIC9tzsZeJAOqdqJhvfFewx8piOOdkr3lA3gOtANOzUY1AiEArg0JAgRsanecQw4I68vSNUA4wb9nIMRcS823y%2BtFlVAqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUCHajjm6usOTur6CrcA3Y1XznmFPxRtMO1bwRG1U9d969jk2D%2BKvzjymquagReGto%2BKxVEVXqO5MonQk44YbMrBcaaQYp3Bzv6bHf9W0nMmQhjQiLysl6WNba1hQPKRUTtrbjnts%2BQ6UQfvpDw6KWbt5MYRN9Xi9nr6%2BtziklXMW9sJqxdAQYY%2FJlsHZ15jzBhR%2FfrgPTO9fINyN%2BNseUHxbBaJYR%2FRgyumTX7FMJQ7Uqs4BwBNG48gpBIPsf54%2BEdMod%2B%2B1P0CNHJ3jZqy76J1l9WDQivX6%2FgdkPOn7%2Bt1TD5Z6SO8sBChgO%2BnmoNuqT0IoVbL9tX44hVQNQ0BFfbznFWiju1nVLXJwhvftpK50PjRAG9N0QxhTRBhtL5JY43bRbYKpNlKBj9n3rpGP7JXIXqTn3uly0LLAABg4GcPDOF1vX5%2FAVxegxpMct%2FoRBZnzKMgcUxkNOwqMBrC%2Bj11Ap6aE7yuR8durGYFlKAPQ6zHsMdMAw6IscMGxazj6SRsgg1Vjm7Tn9QVqw6strYLrG2jFA%2BTUw2xwpZwxI2nXjCt%2FAOrSIOZmIM1L6RGKDVFSJHlhAGD58WQ2FcL77zcEmW4%2BcJtt1xAyT3gCna13Es50BBr4U19j6nmp0DO0BNLyMoS5Gsdy5oMJG8nMAGOqUBI7W4QpWwfXuaiVFGp7d6AVQRlNJ0rOJurY0Pt4MNT%2BvbVWgQmvpUjNBSFj5zOdBRmfIpDejtJ%2F3xMCsxHDjXh%2FR8QBZ%2FatPa3iC0a2eMSSmx1NZMNs5U0%2FJFZiEPnQnPrwDI91XPwjef2OmzZv7j1KrlqEJ6rgwriE75zvNYkeIUaGQVbQSt1BuvrRvoVoTMAuvaugcEqHZQPS3ZI%2BI1siPUbUXh&X-Amz-Signature=1e97aa6a7417a1dfa6c5e63529a0c840f8849ee155440169f0a2fac2ca99d23f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX2LDNCR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIC9tzsZeJAOqdqJhvfFewx8piOOdkr3lA3gOtANOzUY1AiEArg0JAgRsanecQw4I68vSNUA4wb9nIMRcS823y%2BtFlVAqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUCHajjm6usOTur6CrcA3Y1XznmFPxRtMO1bwRG1U9d969jk2D%2BKvzjymquagReGto%2BKxVEVXqO5MonQk44YbMrBcaaQYp3Bzv6bHf9W0nMmQhjQiLysl6WNba1hQPKRUTtrbjnts%2BQ6UQfvpDw6KWbt5MYRN9Xi9nr6%2BtziklXMW9sJqxdAQYY%2FJlsHZ15jzBhR%2FfrgPTO9fINyN%2BNseUHxbBaJYR%2FRgyumTX7FMJQ7Uqs4BwBNG48gpBIPsf54%2BEdMod%2B%2B1P0CNHJ3jZqy76J1l9WDQivX6%2FgdkPOn7%2Bt1TD5Z6SO8sBChgO%2BnmoNuqT0IoVbL9tX44hVQNQ0BFfbznFWiju1nVLXJwhvftpK50PjRAG9N0QxhTRBhtL5JY43bRbYKpNlKBj9n3rpGP7JXIXqTn3uly0LLAABg4GcPDOF1vX5%2FAVxegxpMct%2FoRBZnzKMgcUxkNOwqMBrC%2Bj11Ap6aE7yuR8durGYFlKAPQ6zHsMdMAw6IscMGxazj6SRsgg1Vjm7Tn9QVqw6strYLrG2jFA%2BTUw2xwpZwxI2nXjCt%2FAOrSIOZmIM1L6RGKDVFSJHlhAGD58WQ2FcL77zcEmW4%2BcJtt1xAyT3gCna13Es50BBr4U19j6nmp0DO0BNLyMoS5Gsdy5oMJG8nMAGOqUBI7W4QpWwfXuaiVFGp7d6AVQRlNJ0rOJurY0Pt4MNT%2BvbVWgQmvpUjNBSFj5zOdBRmfIpDejtJ%2F3xMCsxHDjXh%2FR8QBZ%2FatPa3iC0a2eMSSmx1NZMNs5U0%2FJFZiEPnQnPrwDI91XPwjef2OmzZv7j1KrlqEJ6rgwriE75zvNYkeIUaGQVbQSt1BuvrRvoVoTMAuvaugcEqHZQPS3ZI%2BI1siPUbUXh&X-Amz-Signature=8f8c184b8516db227acc4e16caa9a4f283459c84b16ee00b14f8ef2cd985a3df&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
