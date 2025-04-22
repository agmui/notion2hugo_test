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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNJPY4EY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCeO%2F9iSCmZjZ9OWije1phxNNRrAW25JvAthfC98TzkZQIhALwUQ6OZWfFX8sI1%2FmxoCpTyQXYPhe8CLfyhWgjlPoY4KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX4h8zNoMXqTcwYKQq3AOiSto8dlOosXE8I0XEvxszbDBQxkejN%2B0%2By3F7PsbLBkht%2B1Gs7Kt3bBAP2vZOp7KIWe7GYv9T04FnuR0ZuEg8pDKjCTe0XhcyTulWAENc6tVuyLbZkrKQnEcSiOw3dhlB71Mdc4Y3ZLZCEljoyMDnVsnGt0vtYAOUbN9n7%2BjJkRr92pwdSMSN%2Fzo9X5w5FIUHqLlMDH39Ro9u5lOCM8hjT5CIh5er7kCPkvvcPddQ9vX05KWKWde58q8HjphhnydXOhvLkANlyDkpJILO%2FRJ3DG%2F9F9ERyAOBj8nmOYMpVu1tjf%2BE3fQWvRCbLxrZbd6WKYQdfW20DPz%2FlZXNfizLO1J5Gbdr%2BpVJBiGiQQf2txI7Ct5W2a53pfwZ9Hz1XntgpEYT%2Bgj%2BaoJy1c2054IiyHGD3P%2FspXEZLPESuo1VaPjOsM2%2B9qdcqm6ARZIyR4QnU65jVaQEfbD7Mwcr94rTi%2F9PhB15Jn9QSzFWC1Lo0COQgkC%2F21JLTXDpXulcQPOYEQ7qIoS0dQfTBG6HDYIL%2FTVKGm2LnZqQQOOVkQTns7U1vu5QCPy3QENRK2Lw40UrdNmWC0p7PhFvXmNH%2BLgGDEPrh%2BejghyEEjDGjkLhQHQPJIezMKgfzfpQiTCZ9p3ABjqkAduMuJZ0%2BAAOD1uTOXNOFf3bEiZZJedWfat9Of92N5Lt88%2BMOIdzLxJpiaW2FiJgW8NMExL5qpLb9XwKyMmMPB9WzxN4ByfBzjJfId8JXwMHL1WJ832F4nJy7JCaekPkhVZOBohjcgNuIptft66p1chy%2F%2B4SS5UraeybrZtEWK0NGqiUJPlFwmDVWWhv2FcG36PvdFS5sZQblVFi6FsFCKPj8wwR&X-Amz-Signature=18ae7a0cebcfd7ab935334c17463a8ee228038658256f0086acd4829449a0249&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNJPY4EY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCeO%2F9iSCmZjZ9OWije1phxNNRrAW25JvAthfC98TzkZQIhALwUQ6OZWfFX8sI1%2FmxoCpTyQXYPhe8CLfyhWgjlPoY4KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX4h8zNoMXqTcwYKQq3AOiSto8dlOosXE8I0XEvxszbDBQxkejN%2B0%2By3F7PsbLBkht%2B1Gs7Kt3bBAP2vZOp7KIWe7GYv9T04FnuR0ZuEg8pDKjCTe0XhcyTulWAENc6tVuyLbZkrKQnEcSiOw3dhlB71Mdc4Y3ZLZCEljoyMDnVsnGt0vtYAOUbN9n7%2BjJkRr92pwdSMSN%2Fzo9X5w5FIUHqLlMDH39Ro9u5lOCM8hjT5CIh5er7kCPkvvcPddQ9vX05KWKWde58q8HjphhnydXOhvLkANlyDkpJILO%2FRJ3DG%2F9F9ERyAOBj8nmOYMpVu1tjf%2BE3fQWvRCbLxrZbd6WKYQdfW20DPz%2FlZXNfizLO1J5Gbdr%2BpVJBiGiQQf2txI7Ct5W2a53pfwZ9Hz1XntgpEYT%2Bgj%2BaoJy1c2054IiyHGD3P%2FspXEZLPESuo1VaPjOsM2%2B9qdcqm6ARZIyR4QnU65jVaQEfbD7Mwcr94rTi%2F9PhB15Jn9QSzFWC1Lo0COQgkC%2F21JLTXDpXulcQPOYEQ7qIoS0dQfTBG6HDYIL%2FTVKGm2LnZqQQOOVkQTns7U1vu5QCPy3QENRK2Lw40UrdNmWC0p7PhFvXmNH%2BLgGDEPrh%2BejghyEEjDGjkLhQHQPJIezMKgfzfpQiTCZ9p3ABjqkAduMuJZ0%2BAAOD1uTOXNOFf3bEiZZJedWfat9Of92N5Lt88%2BMOIdzLxJpiaW2FiJgW8NMExL5qpLb9XwKyMmMPB9WzxN4ByfBzjJfId8JXwMHL1WJ832F4nJy7JCaekPkhVZOBohjcgNuIptft66p1chy%2F%2B4SS5UraeybrZtEWK0NGqiUJPlFwmDVWWhv2FcG36PvdFS5sZQblVFi6FsFCKPj8wwR&X-Amz-Signature=52ae5824695f1a93a9ca2836b8dba9c210748489c253e615ba577ab40a93a52e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNJPY4EY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCeO%2F9iSCmZjZ9OWije1phxNNRrAW25JvAthfC98TzkZQIhALwUQ6OZWfFX8sI1%2FmxoCpTyQXYPhe8CLfyhWgjlPoY4KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX4h8zNoMXqTcwYKQq3AOiSto8dlOosXE8I0XEvxszbDBQxkejN%2B0%2By3F7PsbLBkht%2B1Gs7Kt3bBAP2vZOp7KIWe7GYv9T04FnuR0ZuEg8pDKjCTe0XhcyTulWAENc6tVuyLbZkrKQnEcSiOw3dhlB71Mdc4Y3ZLZCEljoyMDnVsnGt0vtYAOUbN9n7%2BjJkRr92pwdSMSN%2Fzo9X5w5FIUHqLlMDH39Ro9u5lOCM8hjT5CIh5er7kCPkvvcPddQ9vX05KWKWde58q8HjphhnydXOhvLkANlyDkpJILO%2FRJ3DG%2F9F9ERyAOBj8nmOYMpVu1tjf%2BE3fQWvRCbLxrZbd6WKYQdfW20DPz%2FlZXNfizLO1J5Gbdr%2BpVJBiGiQQf2txI7Ct5W2a53pfwZ9Hz1XntgpEYT%2Bgj%2BaoJy1c2054IiyHGD3P%2FspXEZLPESuo1VaPjOsM2%2B9qdcqm6ARZIyR4QnU65jVaQEfbD7Mwcr94rTi%2F9PhB15Jn9QSzFWC1Lo0COQgkC%2F21JLTXDpXulcQPOYEQ7qIoS0dQfTBG6HDYIL%2FTVKGm2LnZqQQOOVkQTns7U1vu5QCPy3QENRK2Lw40UrdNmWC0p7PhFvXmNH%2BLgGDEPrh%2BejghyEEjDGjkLhQHQPJIezMKgfzfpQiTCZ9p3ABjqkAduMuJZ0%2BAAOD1uTOXNOFf3bEiZZJedWfat9Of92N5Lt88%2BMOIdzLxJpiaW2FiJgW8NMExL5qpLb9XwKyMmMPB9WzxN4ByfBzjJfId8JXwMHL1WJ832F4nJy7JCaekPkhVZOBohjcgNuIptft66p1chy%2F%2B4SS5UraeybrZtEWK0NGqiUJPlFwmDVWWhv2FcG36PvdFS5sZQblVFi6FsFCKPj8wwR&X-Amz-Signature=ef79b8716ea921446851cc44876f6803d87fd9d6b7f101e3a5a91a6966010771&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNJPY4EY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCeO%2F9iSCmZjZ9OWije1phxNNRrAW25JvAthfC98TzkZQIhALwUQ6OZWfFX8sI1%2FmxoCpTyQXYPhe8CLfyhWgjlPoY4KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX4h8zNoMXqTcwYKQq3AOiSto8dlOosXE8I0XEvxszbDBQxkejN%2B0%2By3F7PsbLBkht%2B1Gs7Kt3bBAP2vZOp7KIWe7GYv9T04FnuR0ZuEg8pDKjCTe0XhcyTulWAENc6tVuyLbZkrKQnEcSiOw3dhlB71Mdc4Y3ZLZCEljoyMDnVsnGt0vtYAOUbN9n7%2BjJkRr92pwdSMSN%2Fzo9X5w5FIUHqLlMDH39Ro9u5lOCM8hjT5CIh5er7kCPkvvcPddQ9vX05KWKWde58q8HjphhnydXOhvLkANlyDkpJILO%2FRJ3DG%2F9F9ERyAOBj8nmOYMpVu1tjf%2BE3fQWvRCbLxrZbd6WKYQdfW20DPz%2FlZXNfizLO1J5Gbdr%2BpVJBiGiQQf2txI7Ct5W2a53pfwZ9Hz1XntgpEYT%2Bgj%2BaoJy1c2054IiyHGD3P%2FspXEZLPESuo1VaPjOsM2%2B9qdcqm6ARZIyR4QnU65jVaQEfbD7Mwcr94rTi%2F9PhB15Jn9QSzFWC1Lo0COQgkC%2F21JLTXDpXulcQPOYEQ7qIoS0dQfTBG6HDYIL%2FTVKGm2LnZqQQOOVkQTns7U1vu5QCPy3QENRK2Lw40UrdNmWC0p7PhFvXmNH%2BLgGDEPrh%2BejghyEEjDGjkLhQHQPJIezMKgfzfpQiTCZ9p3ABjqkAduMuJZ0%2BAAOD1uTOXNOFf3bEiZZJedWfat9Of92N5Lt88%2BMOIdzLxJpiaW2FiJgW8NMExL5qpLb9XwKyMmMPB9WzxN4ByfBzjJfId8JXwMHL1WJ832F4nJy7JCaekPkhVZOBohjcgNuIptft66p1chy%2F%2B4SS5UraeybrZtEWK0NGqiUJPlFwmDVWWhv2FcG36PvdFS5sZQblVFi6FsFCKPj8wwR&X-Amz-Signature=19f9de3ef754057d086c30c611afe88776ac254a1eb1454262ee640373659904&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNJPY4EY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCeO%2F9iSCmZjZ9OWije1phxNNRrAW25JvAthfC98TzkZQIhALwUQ6OZWfFX8sI1%2FmxoCpTyQXYPhe8CLfyhWgjlPoY4KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX4h8zNoMXqTcwYKQq3AOiSto8dlOosXE8I0XEvxszbDBQxkejN%2B0%2By3F7PsbLBkht%2B1Gs7Kt3bBAP2vZOp7KIWe7GYv9T04FnuR0ZuEg8pDKjCTe0XhcyTulWAENc6tVuyLbZkrKQnEcSiOw3dhlB71Mdc4Y3ZLZCEljoyMDnVsnGt0vtYAOUbN9n7%2BjJkRr92pwdSMSN%2Fzo9X5w5FIUHqLlMDH39Ro9u5lOCM8hjT5CIh5er7kCPkvvcPddQ9vX05KWKWde58q8HjphhnydXOhvLkANlyDkpJILO%2FRJ3DG%2F9F9ERyAOBj8nmOYMpVu1tjf%2BE3fQWvRCbLxrZbd6WKYQdfW20DPz%2FlZXNfizLO1J5Gbdr%2BpVJBiGiQQf2txI7Ct5W2a53pfwZ9Hz1XntgpEYT%2Bgj%2BaoJy1c2054IiyHGD3P%2FspXEZLPESuo1VaPjOsM2%2B9qdcqm6ARZIyR4QnU65jVaQEfbD7Mwcr94rTi%2F9PhB15Jn9QSzFWC1Lo0COQgkC%2F21JLTXDpXulcQPOYEQ7qIoS0dQfTBG6HDYIL%2FTVKGm2LnZqQQOOVkQTns7U1vu5QCPy3QENRK2Lw40UrdNmWC0p7PhFvXmNH%2BLgGDEPrh%2BejghyEEjDGjkLhQHQPJIezMKgfzfpQiTCZ9p3ABjqkAduMuJZ0%2BAAOD1uTOXNOFf3bEiZZJedWfat9Of92N5Lt88%2BMOIdzLxJpiaW2FiJgW8NMExL5qpLb9XwKyMmMPB9WzxN4ByfBzjJfId8JXwMHL1WJ832F4nJy7JCaekPkhVZOBohjcgNuIptft66p1chy%2F%2B4SS5UraeybrZtEWK0NGqiUJPlFwmDVWWhv2FcG36PvdFS5sZQblVFi6FsFCKPj8wwR&X-Amz-Signature=fa982f75c5cb3c2c6c6e23dd20dcba9025a459b626c3ce19881b245bcc11475d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
