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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SGXD7LT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIG8Zuqw92ZdoIULSy9YqjAi5D5eGfUOSa2aqZmQHCQx3AiBS%2FJFB1hw7w5DNKoUh7yAWU%2FjNFB6x4d%2Bfx56ug9%2BYqir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMvDDWE8V7%2F4uVZbj3KtwDDwoC1KqbiImXKzQuKvvxcFedfc70dqaNgd3PtNzKiitG8bp25n7zJfDaOhIlfnOZTfZmx4x%2FMoMJnra6Xec20Q2egqyagovoxTdzDtAAb2z%2F6apaJlRsopTB7bqhAMuG3sqIMph1f3M5paI0%2F%2FN8B%2FNAwpH2NBXEDwnw8v%2FZWDYdjICgmZabjb5aJNs7ARpB9ScHUxjb2cX49G8s%2BJW5Etbl15zN9MRKlC9zziq%2F9v43sMKc80Nbr8nvIgBIfz0WvKKrQShjOjUOqDRPWswJcOrnQ1PxMfHfXtaALYTqvweoc1c0RGz1zBZE7z2tCMnJKwh%2Fsh%2FDnldSH8Ki7boLa3zE5XYzLi88Xjp%2BSAdES1Tk5IfFfRraqbG0T3fLy4z9Ki6NRxvBmDkMbmDXlxLHhRqSKUiBs56JjC5HvjNut8G2sJiejSNuAM9M0H%2BL6EwilulCUMbAzvQDje6IsFfQjafm7vypYiOpcrUKaejQGvxA8Njf3HAwrGQdKuDZmgnhOn7y76p9GgLyRrDPXC6e6B7rH7LMeyglaDlSOJH1NN%2FvR%2F3ywfvrppkpNAQlPOkCofiEJQ9U5NTkKmlgE30ALiQCb8%2BQRW6JYz3Avj3Z%2BltJ7yrC5d0SQCD0iUMwzsKVxAY6pgFOu%2BdZoo1JqXCEwbMSCyPgOW6XwGzCNkEwSmS0NenitDQ%2FZyO7tnfeWZ%2F5Bd6Sy6fjT14HnwKHKzTP9QiBjSEOin8PgnPzHI8qXyLAzYGMJMGndDYxEW69PflLWuNiA%2BpHJU7S5IffewgNrrbWMWgZFUqFI7WAd8sQr1fwlVcTRUQOvBTWWPJLg2xG8Tg62nkNdmYAhzqIP3OiLelkvzuQ6rxXyTRk&X-Amz-Signature=5ae09b7b5d5aac08a1049012a2017ebfc1ac37ffb18bdc44bbd55f9ed88a8390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SGXD7LT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIG8Zuqw92ZdoIULSy9YqjAi5D5eGfUOSa2aqZmQHCQx3AiBS%2FJFB1hw7w5DNKoUh7yAWU%2FjNFB6x4d%2Bfx56ug9%2BYqir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMvDDWE8V7%2F4uVZbj3KtwDDwoC1KqbiImXKzQuKvvxcFedfc70dqaNgd3PtNzKiitG8bp25n7zJfDaOhIlfnOZTfZmx4x%2FMoMJnra6Xec20Q2egqyagovoxTdzDtAAb2z%2F6apaJlRsopTB7bqhAMuG3sqIMph1f3M5paI0%2F%2FN8B%2FNAwpH2NBXEDwnw8v%2FZWDYdjICgmZabjb5aJNs7ARpB9ScHUxjb2cX49G8s%2BJW5Etbl15zN9MRKlC9zziq%2F9v43sMKc80Nbr8nvIgBIfz0WvKKrQShjOjUOqDRPWswJcOrnQ1PxMfHfXtaALYTqvweoc1c0RGz1zBZE7z2tCMnJKwh%2Fsh%2FDnldSH8Ki7boLa3zE5XYzLi88Xjp%2BSAdES1Tk5IfFfRraqbG0T3fLy4z9Ki6NRxvBmDkMbmDXlxLHhRqSKUiBs56JjC5HvjNut8G2sJiejSNuAM9M0H%2BL6EwilulCUMbAzvQDje6IsFfQjafm7vypYiOpcrUKaejQGvxA8Njf3HAwrGQdKuDZmgnhOn7y76p9GgLyRrDPXC6e6B7rH7LMeyglaDlSOJH1NN%2FvR%2F3ywfvrppkpNAQlPOkCofiEJQ9U5NTkKmlgE30ALiQCb8%2BQRW6JYz3Avj3Z%2BltJ7yrC5d0SQCD0iUMwzsKVxAY6pgFOu%2BdZoo1JqXCEwbMSCyPgOW6XwGzCNkEwSmS0NenitDQ%2FZyO7tnfeWZ%2F5Bd6Sy6fjT14HnwKHKzTP9QiBjSEOin8PgnPzHI8qXyLAzYGMJMGndDYxEW69PflLWuNiA%2BpHJU7S5IffewgNrrbWMWgZFUqFI7WAd8sQr1fwlVcTRUQOvBTWWPJLg2xG8Tg62nkNdmYAhzqIP3OiLelkvzuQ6rxXyTRk&X-Amz-Signature=1a134b91eaa2af6acb4b3f3255c48c0134388a81491bb25051d2189ba9337470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SGXD7LT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIG8Zuqw92ZdoIULSy9YqjAi5D5eGfUOSa2aqZmQHCQx3AiBS%2FJFB1hw7w5DNKoUh7yAWU%2FjNFB6x4d%2Bfx56ug9%2BYqir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMvDDWE8V7%2F4uVZbj3KtwDDwoC1KqbiImXKzQuKvvxcFedfc70dqaNgd3PtNzKiitG8bp25n7zJfDaOhIlfnOZTfZmx4x%2FMoMJnra6Xec20Q2egqyagovoxTdzDtAAb2z%2F6apaJlRsopTB7bqhAMuG3sqIMph1f3M5paI0%2F%2FN8B%2FNAwpH2NBXEDwnw8v%2FZWDYdjICgmZabjb5aJNs7ARpB9ScHUxjb2cX49G8s%2BJW5Etbl15zN9MRKlC9zziq%2F9v43sMKc80Nbr8nvIgBIfz0WvKKrQShjOjUOqDRPWswJcOrnQ1PxMfHfXtaALYTqvweoc1c0RGz1zBZE7z2tCMnJKwh%2Fsh%2FDnldSH8Ki7boLa3zE5XYzLi88Xjp%2BSAdES1Tk5IfFfRraqbG0T3fLy4z9Ki6NRxvBmDkMbmDXlxLHhRqSKUiBs56JjC5HvjNut8G2sJiejSNuAM9M0H%2BL6EwilulCUMbAzvQDje6IsFfQjafm7vypYiOpcrUKaejQGvxA8Njf3HAwrGQdKuDZmgnhOn7y76p9GgLyRrDPXC6e6B7rH7LMeyglaDlSOJH1NN%2FvR%2F3ywfvrppkpNAQlPOkCofiEJQ9U5NTkKmlgE30ALiQCb8%2BQRW6JYz3Avj3Z%2BltJ7yrC5d0SQCD0iUMwzsKVxAY6pgFOu%2BdZoo1JqXCEwbMSCyPgOW6XwGzCNkEwSmS0NenitDQ%2FZyO7tnfeWZ%2F5Bd6Sy6fjT14HnwKHKzTP9QiBjSEOin8PgnPzHI8qXyLAzYGMJMGndDYxEW69PflLWuNiA%2BpHJU7S5IffewgNrrbWMWgZFUqFI7WAd8sQr1fwlVcTRUQOvBTWWPJLg2xG8Tg62nkNdmYAhzqIP3OiLelkvzuQ6rxXyTRk&X-Amz-Signature=53b16fabf1cbbce0d3683f1c95124795279a0355fb269cc549cd18d132bff2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SGXD7LT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIG8Zuqw92ZdoIULSy9YqjAi5D5eGfUOSa2aqZmQHCQx3AiBS%2FJFB1hw7w5DNKoUh7yAWU%2FjNFB6x4d%2Bfx56ug9%2BYqir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMvDDWE8V7%2F4uVZbj3KtwDDwoC1KqbiImXKzQuKvvxcFedfc70dqaNgd3PtNzKiitG8bp25n7zJfDaOhIlfnOZTfZmx4x%2FMoMJnra6Xec20Q2egqyagovoxTdzDtAAb2z%2F6apaJlRsopTB7bqhAMuG3sqIMph1f3M5paI0%2F%2FN8B%2FNAwpH2NBXEDwnw8v%2FZWDYdjICgmZabjb5aJNs7ARpB9ScHUxjb2cX49G8s%2BJW5Etbl15zN9MRKlC9zziq%2F9v43sMKc80Nbr8nvIgBIfz0WvKKrQShjOjUOqDRPWswJcOrnQ1PxMfHfXtaALYTqvweoc1c0RGz1zBZE7z2tCMnJKwh%2Fsh%2FDnldSH8Ki7boLa3zE5XYzLi88Xjp%2BSAdES1Tk5IfFfRraqbG0T3fLy4z9Ki6NRxvBmDkMbmDXlxLHhRqSKUiBs56JjC5HvjNut8G2sJiejSNuAM9M0H%2BL6EwilulCUMbAzvQDje6IsFfQjafm7vypYiOpcrUKaejQGvxA8Njf3HAwrGQdKuDZmgnhOn7y76p9GgLyRrDPXC6e6B7rH7LMeyglaDlSOJH1NN%2FvR%2F3ywfvrppkpNAQlPOkCofiEJQ9U5NTkKmlgE30ALiQCb8%2BQRW6JYz3Avj3Z%2BltJ7yrC5d0SQCD0iUMwzsKVxAY6pgFOu%2BdZoo1JqXCEwbMSCyPgOW6XwGzCNkEwSmS0NenitDQ%2FZyO7tnfeWZ%2F5Bd6Sy6fjT14HnwKHKzTP9QiBjSEOin8PgnPzHI8qXyLAzYGMJMGndDYxEW69PflLWuNiA%2BpHJU7S5IffewgNrrbWMWgZFUqFI7WAd8sQr1fwlVcTRUQOvBTWWPJLg2xG8Tg62nkNdmYAhzqIP3OiLelkvzuQ6rxXyTRk&X-Amz-Signature=773f41f47b406edbf8e13a8674f13f2c24b7a3811a70d17515bb7c961cb7cd68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SGXD7LT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIG8Zuqw92ZdoIULSy9YqjAi5D5eGfUOSa2aqZmQHCQx3AiBS%2FJFB1hw7w5DNKoUh7yAWU%2FjNFB6x4d%2Bfx56ug9%2BYqir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMvDDWE8V7%2F4uVZbj3KtwDDwoC1KqbiImXKzQuKvvxcFedfc70dqaNgd3PtNzKiitG8bp25n7zJfDaOhIlfnOZTfZmx4x%2FMoMJnra6Xec20Q2egqyagovoxTdzDtAAb2z%2F6apaJlRsopTB7bqhAMuG3sqIMph1f3M5paI0%2F%2FN8B%2FNAwpH2NBXEDwnw8v%2FZWDYdjICgmZabjb5aJNs7ARpB9ScHUxjb2cX49G8s%2BJW5Etbl15zN9MRKlC9zziq%2F9v43sMKc80Nbr8nvIgBIfz0WvKKrQShjOjUOqDRPWswJcOrnQ1PxMfHfXtaALYTqvweoc1c0RGz1zBZE7z2tCMnJKwh%2Fsh%2FDnldSH8Ki7boLa3zE5XYzLi88Xjp%2BSAdES1Tk5IfFfRraqbG0T3fLy4z9Ki6NRxvBmDkMbmDXlxLHhRqSKUiBs56JjC5HvjNut8G2sJiejSNuAM9M0H%2BL6EwilulCUMbAzvQDje6IsFfQjafm7vypYiOpcrUKaejQGvxA8Njf3HAwrGQdKuDZmgnhOn7y76p9GgLyRrDPXC6e6B7rH7LMeyglaDlSOJH1NN%2FvR%2F3ywfvrppkpNAQlPOkCofiEJQ9U5NTkKmlgE30ALiQCb8%2BQRW6JYz3Avj3Z%2BltJ7yrC5d0SQCD0iUMwzsKVxAY6pgFOu%2BdZoo1JqXCEwbMSCyPgOW6XwGzCNkEwSmS0NenitDQ%2FZyO7tnfeWZ%2F5Bd6Sy6fjT14HnwKHKzTP9QiBjSEOin8PgnPzHI8qXyLAzYGMJMGndDYxEW69PflLWuNiA%2BpHJU7S5IffewgNrrbWMWgZFUqFI7WAd8sQr1fwlVcTRUQOvBTWWPJLg2xG8Tg62nkNdmYAhzqIP3OiLelkvzuQ6rxXyTRk&X-Amz-Signature=3d36a9b88b53746e222e7569214d217ec4036d0c9771cbd26773e04b7918d6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
