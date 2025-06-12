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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDZXEA5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE%2FIiDp674kD3UecKFjaDq2O5mrFMLuwc0%2FyjVYSOCWXAiANksRYPW1BpZ29D8mlSPkqYsOzAxg4sD7%2F%2BryA5KcrdyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FQK%2B9abUCn4xSFHLKtwDDrUFf6gVwKvl1t%2B2S4OfZiZ9rH5suZp%2Fo2HR%2B8sFHoSjWE5P7kM%2B1vTQElLc3c8unq%2B9kfrbn7LxXoRZG98TcPBbPw7ZloNRh8GhuRPw3n4Qf8uPiga7rO11SETfOg84TmoaeSxQ83rvEvAUbvozObfRUIaT9j4l5Is8xhgGHaLKSJO04BtqObmXbMFtDh1fmz11gx16cCmz0vTEl%2FG3gboZqG4BIcTg46hXTKuWKwOMZBCHsvWgoXggeUQijjnQlzEbpsdx3HRB9wikN5JcTlH64gieXrwIlNvjugwsa5Neu09YbD7zfVArU0aFO1KtPZeD3qpy0XiBI5yG%2FAy38VgnCvYJNP%2BxH9ZgjoyJTC6GErKYbjfPjthtoHaaxNFD2gnko2XvaTxieqDlBnRhW0Q8J5zO3G8h%2FgpHO2zYx7o6gUVa8oXQc%2BuTPpYXtGg5k89YAyBvHTrud4MYSV7hjNuSC5dUU93ZsXRs4Ycw4z5HO3iKvUQJ6LYtRZxnLct733%2Fqzl0eO6NaVn9YSa63dSuaH16PXYRbyptvXrvGDfVtjj0sgajPcv8pGbbKrzvx7yZVLmDFpaQyA1fBi9blgRuDC%2F2eosjPN8pwDKrBoCWpCJKEubJKSxsV7X0wmbmtwgY6pgGhAmqaz6ZdR0eHsaxtnApvQpNBGi4FPE%2Fr2owRpnvLhz0jswx6pRMvQFGPxQg4SkZoA%2BhIASPm2PAHixETelrH9PYGVoRfYrt8nbJ9rPvpXiJ5aKh8jgTBdmFbr4CSJW5KiIazwXGoup6fiO1b6xOxNdBFmUbuUm2en05f9bitjQ8ZK1q6KhY8vV%2BCiK3IJBhLZl2vnuB4FzWOoTQt7p4DpAjThRpY&X-Amz-Signature=2386b61f76e143f563487451ad12e240befeb31206957cdae4e4186c4cb969cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDZXEA5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE%2FIiDp674kD3UecKFjaDq2O5mrFMLuwc0%2FyjVYSOCWXAiANksRYPW1BpZ29D8mlSPkqYsOzAxg4sD7%2F%2BryA5KcrdyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FQK%2B9abUCn4xSFHLKtwDDrUFf6gVwKvl1t%2B2S4OfZiZ9rH5suZp%2Fo2HR%2B8sFHoSjWE5P7kM%2B1vTQElLc3c8unq%2B9kfrbn7LxXoRZG98TcPBbPw7ZloNRh8GhuRPw3n4Qf8uPiga7rO11SETfOg84TmoaeSxQ83rvEvAUbvozObfRUIaT9j4l5Is8xhgGHaLKSJO04BtqObmXbMFtDh1fmz11gx16cCmz0vTEl%2FG3gboZqG4BIcTg46hXTKuWKwOMZBCHsvWgoXggeUQijjnQlzEbpsdx3HRB9wikN5JcTlH64gieXrwIlNvjugwsa5Neu09YbD7zfVArU0aFO1KtPZeD3qpy0XiBI5yG%2FAy38VgnCvYJNP%2BxH9ZgjoyJTC6GErKYbjfPjthtoHaaxNFD2gnko2XvaTxieqDlBnRhW0Q8J5zO3G8h%2FgpHO2zYx7o6gUVa8oXQc%2BuTPpYXtGg5k89YAyBvHTrud4MYSV7hjNuSC5dUU93ZsXRs4Ycw4z5HO3iKvUQJ6LYtRZxnLct733%2Fqzl0eO6NaVn9YSa63dSuaH16PXYRbyptvXrvGDfVtjj0sgajPcv8pGbbKrzvx7yZVLmDFpaQyA1fBi9blgRuDC%2F2eosjPN8pwDKrBoCWpCJKEubJKSxsV7X0wmbmtwgY6pgGhAmqaz6ZdR0eHsaxtnApvQpNBGi4FPE%2Fr2owRpnvLhz0jswx6pRMvQFGPxQg4SkZoA%2BhIASPm2PAHixETelrH9PYGVoRfYrt8nbJ9rPvpXiJ5aKh8jgTBdmFbr4CSJW5KiIazwXGoup6fiO1b6xOxNdBFmUbuUm2en05f9bitjQ8ZK1q6KhY8vV%2BCiK3IJBhLZl2vnuB4FzWOoTQt7p4DpAjThRpY&X-Amz-Signature=e836041ec65a8f5d2d117584341301ce42dbb10d63b7f99e6570f0c2e73f5fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDZXEA5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE%2FIiDp674kD3UecKFjaDq2O5mrFMLuwc0%2FyjVYSOCWXAiANksRYPW1BpZ29D8mlSPkqYsOzAxg4sD7%2F%2BryA5KcrdyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FQK%2B9abUCn4xSFHLKtwDDrUFf6gVwKvl1t%2B2S4OfZiZ9rH5suZp%2Fo2HR%2B8sFHoSjWE5P7kM%2B1vTQElLc3c8unq%2B9kfrbn7LxXoRZG98TcPBbPw7ZloNRh8GhuRPw3n4Qf8uPiga7rO11SETfOg84TmoaeSxQ83rvEvAUbvozObfRUIaT9j4l5Is8xhgGHaLKSJO04BtqObmXbMFtDh1fmz11gx16cCmz0vTEl%2FG3gboZqG4BIcTg46hXTKuWKwOMZBCHsvWgoXggeUQijjnQlzEbpsdx3HRB9wikN5JcTlH64gieXrwIlNvjugwsa5Neu09YbD7zfVArU0aFO1KtPZeD3qpy0XiBI5yG%2FAy38VgnCvYJNP%2BxH9ZgjoyJTC6GErKYbjfPjthtoHaaxNFD2gnko2XvaTxieqDlBnRhW0Q8J5zO3G8h%2FgpHO2zYx7o6gUVa8oXQc%2BuTPpYXtGg5k89YAyBvHTrud4MYSV7hjNuSC5dUU93ZsXRs4Ycw4z5HO3iKvUQJ6LYtRZxnLct733%2Fqzl0eO6NaVn9YSa63dSuaH16PXYRbyptvXrvGDfVtjj0sgajPcv8pGbbKrzvx7yZVLmDFpaQyA1fBi9blgRuDC%2F2eosjPN8pwDKrBoCWpCJKEubJKSxsV7X0wmbmtwgY6pgGhAmqaz6ZdR0eHsaxtnApvQpNBGi4FPE%2Fr2owRpnvLhz0jswx6pRMvQFGPxQg4SkZoA%2BhIASPm2PAHixETelrH9PYGVoRfYrt8nbJ9rPvpXiJ5aKh8jgTBdmFbr4CSJW5KiIazwXGoup6fiO1b6xOxNdBFmUbuUm2en05f9bitjQ8ZK1q6KhY8vV%2BCiK3IJBhLZl2vnuB4FzWOoTQt7p4DpAjThRpY&X-Amz-Signature=ec03d49e17d78426a42a0dbae50fddd59677a93c6dd215221a3b87e41395f34a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDZXEA5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE%2FIiDp674kD3UecKFjaDq2O5mrFMLuwc0%2FyjVYSOCWXAiANksRYPW1BpZ29D8mlSPkqYsOzAxg4sD7%2F%2BryA5KcrdyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FQK%2B9abUCn4xSFHLKtwDDrUFf6gVwKvl1t%2B2S4OfZiZ9rH5suZp%2Fo2HR%2B8sFHoSjWE5P7kM%2B1vTQElLc3c8unq%2B9kfrbn7LxXoRZG98TcPBbPw7ZloNRh8GhuRPw3n4Qf8uPiga7rO11SETfOg84TmoaeSxQ83rvEvAUbvozObfRUIaT9j4l5Is8xhgGHaLKSJO04BtqObmXbMFtDh1fmz11gx16cCmz0vTEl%2FG3gboZqG4BIcTg46hXTKuWKwOMZBCHsvWgoXggeUQijjnQlzEbpsdx3HRB9wikN5JcTlH64gieXrwIlNvjugwsa5Neu09YbD7zfVArU0aFO1KtPZeD3qpy0XiBI5yG%2FAy38VgnCvYJNP%2BxH9ZgjoyJTC6GErKYbjfPjthtoHaaxNFD2gnko2XvaTxieqDlBnRhW0Q8J5zO3G8h%2FgpHO2zYx7o6gUVa8oXQc%2BuTPpYXtGg5k89YAyBvHTrud4MYSV7hjNuSC5dUU93ZsXRs4Ycw4z5HO3iKvUQJ6LYtRZxnLct733%2Fqzl0eO6NaVn9YSa63dSuaH16PXYRbyptvXrvGDfVtjj0sgajPcv8pGbbKrzvx7yZVLmDFpaQyA1fBi9blgRuDC%2F2eosjPN8pwDKrBoCWpCJKEubJKSxsV7X0wmbmtwgY6pgGhAmqaz6ZdR0eHsaxtnApvQpNBGi4FPE%2Fr2owRpnvLhz0jswx6pRMvQFGPxQg4SkZoA%2BhIASPm2PAHixETelrH9PYGVoRfYrt8nbJ9rPvpXiJ5aKh8jgTBdmFbr4CSJW5KiIazwXGoup6fiO1b6xOxNdBFmUbuUm2en05f9bitjQ8ZK1q6KhY8vV%2BCiK3IJBhLZl2vnuB4FzWOoTQt7p4DpAjThRpY&X-Amz-Signature=ceaaecbe508be1064c55e0939489680d1d8fbf7ff2aa11865ade8ee6e003c1ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDZXEA5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE%2FIiDp674kD3UecKFjaDq2O5mrFMLuwc0%2FyjVYSOCWXAiANksRYPW1BpZ29D8mlSPkqYsOzAxg4sD7%2F%2BryA5KcrdyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FQK%2B9abUCn4xSFHLKtwDDrUFf6gVwKvl1t%2B2S4OfZiZ9rH5suZp%2Fo2HR%2B8sFHoSjWE5P7kM%2B1vTQElLc3c8unq%2B9kfrbn7LxXoRZG98TcPBbPw7ZloNRh8GhuRPw3n4Qf8uPiga7rO11SETfOg84TmoaeSxQ83rvEvAUbvozObfRUIaT9j4l5Is8xhgGHaLKSJO04BtqObmXbMFtDh1fmz11gx16cCmz0vTEl%2FG3gboZqG4BIcTg46hXTKuWKwOMZBCHsvWgoXggeUQijjnQlzEbpsdx3HRB9wikN5JcTlH64gieXrwIlNvjugwsa5Neu09YbD7zfVArU0aFO1KtPZeD3qpy0XiBI5yG%2FAy38VgnCvYJNP%2BxH9ZgjoyJTC6GErKYbjfPjthtoHaaxNFD2gnko2XvaTxieqDlBnRhW0Q8J5zO3G8h%2FgpHO2zYx7o6gUVa8oXQc%2BuTPpYXtGg5k89YAyBvHTrud4MYSV7hjNuSC5dUU93ZsXRs4Ycw4z5HO3iKvUQJ6LYtRZxnLct733%2Fqzl0eO6NaVn9YSa63dSuaH16PXYRbyptvXrvGDfVtjj0sgajPcv8pGbbKrzvx7yZVLmDFpaQyA1fBi9blgRuDC%2F2eosjPN8pwDKrBoCWpCJKEubJKSxsV7X0wmbmtwgY6pgGhAmqaz6ZdR0eHsaxtnApvQpNBGi4FPE%2Fr2owRpnvLhz0jswx6pRMvQFGPxQg4SkZoA%2BhIASPm2PAHixETelrH9PYGVoRfYrt8nbJ9rPvpXiJ5aKh8jgTBdmFbr4CSJW5KiIazwXGoup6fiO1b6xOxNdBFmUbuUm2en05f9bitjQ8ZK1q6KhY8vV%2BCiK3IJBhLZl2vnuB4FzWOoTQt7p4DpAjThRpY&X-Amz-Signature=981d3e90223778e8b7bf8e782ff0edb43a9be734ce657e9cd67c53c3cb2ae7c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
