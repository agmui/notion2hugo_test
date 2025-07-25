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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7QJLBMO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGk9eJHeaHowgozybRRTN3%2FgYIZrV3K3jZkWsb2zdCt%2BAiBkqTcs4QPzcS0RD1mLDcJSI9QbVze3uKzTRD8RrI%2BRxCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMFV9BwHidNweIk3jUKtwDGRCEiTK0E9FNEMJKN4yPJu%2Bb5bc8%2FdZaA6VPHzU5hptJXLaFqfKxbxwvNxbnOJF%2BzEwsqZ7rZ%2Bq03rp%2FTHkVi55t220hwoFECxAVncjtsh0yLVG9%2BAgHHOgmZtRPgHNHGdx1NMzlvVc%2F4IYDbzrNGQd0CPe4wtgU0u4HJ9UWZXrxaI6iNomvyFPTx7l0Q6kNxckOYwg%2FVpVKMpIFl9T7gobYIMwFvq6gLcDqU54c5hRqO4dxg8v3KSwhWx4X687gE05XPLTd4afhi%2B2gmLRneUcf97%2BcBZk1lLDza9wDkAg%2BxUaWlJJuAY0vqyR%2F9dxkt%2BPgyDhRMfZvfUmkpDzvcbx5Bbm8o5Yjbex%2F0TTCuHqoHoHshd1kwMfmV%2BrgDvTDjFlkm9v2RRsi7LFnGjSOCpJM4mDWaVBfXjFXJ8Ef4kc5eYVljVb8bc9uS26vcAkutxu0QC%2BuDccGYDw%2FeE2nXa5paKVO%2FEbzd84xpGpXjwdmDbpjPJw1S4pEotTyixzhECXaEdhIOtyg1I4qMgQOUuu3gFp8iZJ2m5pwJctoEW2IyH214tvxwarX9h2vV63zs3y3nNJU733UCfq9xFZB4dpxcqfW5A9DrVQLYxjyPP991j6l7xDyTeIyWWcwvbyOxAY6pgE9b8fEgg6obnw3I1wwPIXswUhhNLaHlkbRwhSKBlbIYQncgWOXArMc%2BjGDI%2Fw0B0jGftI93Xk1VBKjyHZa36ivKGZtgdpwbU7SsLAQJtW3vSkhSNntLcs5xrkyXC26LUGAzHjH25CTdSOSMpEN%2BCd2bS5%2BsNDUKgwBHpcEFBoSsA46KkhdZ3vAwJnUVcp0iAR58s7T6%2Firg6kRbHpeqwm%2Bty3zLQdr&X-Amz-Signature=3ee723265fdc3dc81583cb3231fc3832ae4786d5b19fc5f7c770726e460ed718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7QJLBMO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGk9eJHeaHowgozybRRTN3%2FgYIZrV3K3jZkWsb2zdCt%2BAiBkqTcs4QPzcS0RD1mLDcJSI9QbVze3uKzTRD8RrI%2BRxCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMFV9BwHidNweIk3jUKtwDGRCEiTK0E9FNEMJKN4yPJu%2Bb5bc8%2FdZaA6VPHzU5hptJXLaFqfKxbxwvNxbnOJF%2BzEwsqZ7rZ%2Bq03rp%2FTHkVi55t220hwoFECxAVncjtsh0yLVG9%2BAgHHOgmZtRPgHNHGdx1NMzlvVc%2F4IYDbzrNGQd0CPe4wtgU0u4HJ9UWZXrxaI6iNomvyFPTx7l0Q6kNxckOYwg%2FVpVKMpIFl9T7gobYIMwFvq6gLcDqU54c5hRqO4dxg8v3KSwhWx4X687gE05XPLTd4afhi%2B2gmLRneUcf97%2BcBZk1lLDza9wDkAg%2BxUaWlJJuAY0vqyR%2F9dxkt%2BPgyDhRMfZvfUmkpDzvcbx5Bbm8o5Yjbex%2F0TTCuHqoHoHshd1kwMfmV%2BrgDvTDjFlkm9v2RRsi7LFnGjSOCpJM4mDWaVBfXjFXJ8Ef4kc5eYVljVb8bc9uS26vcAkutxu0QC%2BuDccGYDw%2FeE2nXa5paKVO%2FEbzd84xpGpXjwdmDbpjPJw1S4pEotTyixzhECXaEdhIOtyg1I4qMgQOUuu3gFp8iZJ2m5pwJctoEW2IyH214tvxwarX9h2vV63zs3y3nNJU733UCfq9xFZB4dpxcqfW5A9DrVQLYxjyPP991j6l7xDyTeIyWWcwvbyOxAY6pgE9b8fEgg6obnw3I1wwPIXswUhhNLaHlkbRwhSKBlbIYQncgWOXArMc%2BjGDI%2Fw0B0jGftI93Xk1VBKjyHZa36ivKGZtgdpwbU7SsLAQJtW3vSkhSNntLcs5xrkyXC26LUGAzHjH25CTdSOSMpEN%2BCd2bS5%2BsNDUKgwBHpcEFBoSsA46KkhdZ3vAwJnUVcp0iAR58s7T6%2Firg6kRbHpeqwm%2Bty3zLQdr&X-Amz-Signature=de821c68ca5f8ca5c38ed600749d4fd7c31128574d2c437ccb977c776dd86e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7QJLBMO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGk9eJHeaHowgozybRRTN3%2FgYIZrV3K3jZkWsb2zdCt%2BAiBkqTcs4QPzcS0RD1mLDcJSI9QbVze3uKzTRD8RrI%2BRxCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMFV9BwHidNweIk3jUKtwDGRCEiTK0E9FNEMJKN4yPJu%2Bb5bc8%2FdZaA6VPHzU5hptJXLaFqfKxbxwvNxbnOJF%2BzEwsqZ7rZ%2Bq03rp%2FTHkVi55t220hwoFECxAVncjtsh0yLVG9%2BAgHHOgmZtRPgHNHGdx1NMzlvVc%2F4IYDbzrNGQd0CPe4wtgU0u4HJ9UWZXrxaI6iNomvyFPTx7l0Q6kNxckOYwg%2FVpVKMpIFl9T7gobYIMwFvq6gLcDqU54c5hRqO4dxg8v3KSwhWx4X687gE05XPLTd4afhi%2B2gmLRneUcf97%2BcBZk1lLDza9wDkAg%2BxUaWlJJuAY0vqyR%2F9dxkt%2BPgyDhRMfZvfUmkpDzvcbx5Bbm8o5Yjbex%2F0TTCuHqoHoHshd1kwMfmV%2BrgDvTDjFlkm9v2RRsi7LFnGjSOCpJM4mDWaVBfXjFXJ8Ef4kc5eYVljVb8bc9uS26vcAkutxu0QC%2BuDccGYDw%2FeE2nXa5paKVO%2FEbzd84xpGpXjwdmDbpjPJw1S4pEotTyixzhECXaEdhIOtyg1I4qMgQOUuu3gFp8iZJ2m5pwJctoEW2IyH214tvxwarX9h2vV63zs3y3nNJU733UCfq9xFZB4dpxcqfW5A9DrVQLYxjyPP991j6l7xDyTeIyWWcwvbyOxAY6pgE9b8fEgg6obnw3I1wwPIXswUhhNLaHlkbRwhSKBlbIYQncgWOXArMc%2BjGDI%2Fw0B0jGftI93Xk1VBKjyHZa36ivKGZtgdpwbU7SsLAQJtW3vSkhSNntLcs5xrkyXC26LUGAzHjH25CTdSOSMpEN%2BCd2bS5%2BsNDUKgwBHpcEFBoSsA46KkhdZ3vAwJnUVcp0iAR58s7T6%2Firg6kRbHpeqwm%2Bty3zLQdr&X-Amz-Signature=606ef846ad3f156e3a4f96e532eb6f47acc0013ff62401cf4ba30bef3b3ed87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7QJLBMO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGk9eJHeaHowgozybRRTN3%2FgYIZrV3K3jZkWsb2zdCt%2BAiBkqTcs4QPzcS0RD1mLDcJSI9QbVze3uKzTRD8RrI%2BRxCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMFV9BwHidNweIk3jUKtwDGRCEiTK0E9FNEMJKN4yPJu%2Bb5bc8%2FdZaA6VPHzU5hptJXLaFqfKxbxwvNxbnOJF%2BzEwsqZ7rZ%2Bq03rp%2FTHkVi55t220hwoFECxAVncjtsh0yLVG9%2BAgHHOgmZtRPgHNHGdx1NMzlvVc%2F4IYDbzrNGQd0CPe4wtgU0u4HJ9UWZXrxaI6iNomvyFPTx7l0Q6kNxckOYwg%2FVpVKMpIFl9T7gobYIMwFvq6gLcDqU54c5hRqO4dxg8v3KSwhWx4X687gE05XPLTd4afhi%2B2gmLRneUcf97%2BcBZk1lLDza9wDkAg%2BxUaWlJJuAY0vqyR%2F9dxkt%2BPgyDhRMfZvfUmkpDzvcbx5Bbm8o5Yjbex%2F0TTCuHqoHoHshd1kwMfmV%2BrgDvTDjFlkm9v2RRsi7LFnGjSOCpJM4mDWaVBfXjFXJ8Ef4kc5eYVljVb8bc9uS26vcAkutxu0QC%2BuDccGYDw%2FeE2nXa5paKVO%2FEbzd84xpGpXjwdmDbpjPJw1S4pEotTyixzhECXaEdhIOtyg1I4qMgQOUuu3gFp8iZJ2m5pwJctoEW2IyH214tvxwarX9h2vV63zs3y3nNJU733UCfq9xFZB4dpxcqfW5A9DrVQLYxjyPP991j6l7xDyTeIyWWcwvbyOxAY6pgE9b8fEgg6obnw3I1wwPIXswUhhNLaHlkbRwhSKBlbIYQncgWOXArMc%2BjGDI%2Fw0B0jGftI93Xk1VBKjyHZa36ivKGZtgdpwbU7SsLAQJtW3vSkhSNntLcs5xrkyXC26LUGAzHjH25CTdSOSMpEN%2BCd2bS5%2BsNDUKgwBHpcEFBoSsA46KkhdZ3vAwJnUVcp0iAR58s7T6%2Firg6kRbHpeqwm%2Bty3zLQdr&X-Amz-Signature=25d4921b7b38bd90373cc03ba0c2d6e5caa06e483f6c43aba5301e88cd358a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7QJLBMO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGk9eJHeaHowgozybRRTN3%2FgYIZrV3K3jZkWsb2zdCt%2BAiBkqTcs4QPzcS0RD1mLDcJSI9QbVze3uKzTRD8RrI%2BRxCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMFV9BwHidNweIk3jUKtwDGRCEiTK0E9FNEMJKN4yPJu%2Bb5bc8%2FdZaA6VPHzU5hptJXLaFqfKxbxwvNxbnOJF%2BzEwsqZ7rZ%2Bq03rp%2FTHkVi55t220hwoFECxAVncjtsh0yLVG9%2BAgHHOgmZtRPgHNHGdx1NMzlvVc%2F4IYDbzrNGQd0CPe4wtgU0u4HJ9UWZXrxaI6iNomvyFPTx7l0Q6kNxckOYwg%2FVpVKMpIFl9T7gobYIMwFvq6gLcDqU54c5hRqO4dxg8v3KSwhWx4X687gE05XPLTd4afhi%2B2gmLRneUcf97%2BcBZk1lLDza9wDkAg%2BxUaWlJJuAY0vqyR%2F9dxkt%2BPgyDhRMfZvfUmkpDzvcbx5Bbm8o5Yjbex%2F0TTCuHqoHoHshd1kwMfmV%2BrgDvTDjFlkm9v2RRsi7LFnGjSOCpJM4mDWaVBfXjFXJ8Ef4kc5eYVljVb8bc9uS26vcAkutxu0QC%2BuDccGYDw%2FeE2nXa5paKVO%2FEbzd84xpGpXjwdmDbpjPJw1S4pEotTyixzhECXaEdhIOtyg1I4qMgQOUuu3gFp8iZJ2m5pwJctoEW2IyH214tvxwarX9h2vV63zs3y3nNJU733UCfq9xFZB4dpxcqfW5A9DrVQLYxjyPP991j6l7xDyTeIyWWcwvbyOxAY6pgE9b8fEgg6obnw3I1wwPIXswUhhNLaHlkbRwhSKBlbIYQncgWOXArMc%2BjGDI%2Fw0B0jGftI93Xk1VBKjyHZa36ivKGZtgdpwbU7SsLAQJtW3vSkhSNntLcs5xrkyXC26LUGAzHjH25CTdSOSMpEN%2BCd2bS5%2BsNDUKgwBHpcEFBoSsA46KkhdZ3vAwJnUVcp0iAR58s7T6%2Firg6kRbHpeqwm%2Bty3zLQdr&X-Amz-Signature=dda559ac40497974dcc723d9d4f6bfadb8c0dde503b85aae70ffa06e327657d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
