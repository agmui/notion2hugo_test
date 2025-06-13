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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VKCXLV4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFRS%2FCqdAA06R2%2BW8BwK91n9RZKLrIZgDyBR4c9ZD3R3AiA8y97yg6U5MFJ8DImE%2Bh4GvetvOerJ6yUXAr2HpLPzBCr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM5l5t%2BzZz995VKXZVKtwD7QGzas%2Bmi2K2QPnSjaMWhm4zsiQ%2F0TVHYtvaI67dKAqLNimylK9uHKLFA1JJOKwURzo8LWrGz%2FBTAArTP6Bl%2BE5fkrCT3o20sq0WotB85h9KV03%2FEYeehO7yLoKxBo8mHSPQrh5EnFX8Gi7d2XaEO6A9svX29BNBoJEipZnNpBwrpzZGtmDwx%2BdMpqqtZ2f8mtpDEZFd6TaFkbGyqci9FHtIsz4F4jb%2Bjl994PwO78tPxN8ircyyujw1J8mIMLbW7z0M1bAZRe%2FpTvfA0thVaYVRAym1slU9OOC3c0%2FCur448Ct1dVhJk%2FH%2F4I6MuT96awkvWihKe70bB4w%2BJJ1vsJw6pxhmssw8%2BRAKdss1qoUCjDbm0my3nGQye%2BhTuFCtE3YFMlcw6DDA26A5H3TaSMZzFK%2Bz2Z1uL8tI8XtyII2FlAQt9xd4MlLthAO%2F9k1Ta5AZSMymRPKUfPBCMUgZwunYP2ggtLf7qYxAp2UWquz%2BsK4yHL12RfP2JpX33cvSG%2BhKTWT2x%2FN4g%2BQNZWflPdwkUzARMhiZ8qowdnlBnAs7HQY28fPRXCU0kUzcWii6wjS0lm9FuaRKAjb%2FBaEFFhw6GulBCNIydL0K90dgWXYBzPFMYh9c543KN%2Bsw8JexwgY6pgHJedPqlVBvm5XYKPrCxk7y22vQvVSk58uadgEdAlF2%2FrYcPvSHptb8iwzNbR5R6Gjw4Wt47QovHCpyJu99%2B6scUlRwXX7iMncmFirkVYZxn%2Ff4zwtL0%2BKDDIdUeypT7DU9gSmJbAlXEs2xNx5svR6oBO6SlRJTXzodtceIzE57G6xVSwMwRvb7%2FZju13427%2FNmz9yEJx%2FMqqPuUgJ9h2DJDQ1HqLdw&X-Amz-Signature=fcf7b45814250617e8a371d24ee55f7c736cff06a4dcd5280d79d1d3797499c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VKCXLV4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFRS%2FCqdAA06R2%2BW8BwK91n9RZKLrIZgDyBR4c9ZD3R3AiA8y97yg6U5MFJ8DImE%2Bh4GvetvOerJ6yUXAr2HpLPzBCr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM5l5t%2BzZz995VKXZVKtwD7QGzas%2Bmi2K2QPnSjaMWhm4zsiQ%2F0TVHYtvaI67dKAqLNimylK9uHKLFA1JJOKwURzo8LWrGz%2FBTAArTP6Bl%2BE5fkrCT3o20sq0WotB85h9KV03%2FEYeehO7yLoKxBo8mHSPQrh5EnFX8Gi7d2XaEO6A9svX29BNBoJEipZnNpBwrpzZGtmDwx%2BdMpqqtZ2f8mtpDEZFd6TaFkbGyqci9FHtIsz4F4jb%2Bjl994PwO78tPxN8ircyyujw1J8mIMLbW7z0M1bAZRe%2FpTvfA0thVaYVRAym1slU9OOC3c0%2FCur448Ct1dVhJk%2FH%2F4I6MuT96awkvWihKe70bB4w%2BJJ1vsJw6pxhmssw8%2BRAKdss1qoUCjDbm0my3nGQye%2BhTuFCtE3YFMlcw6DDA26A5H3TaSMZzFK%2Bz2Z1uL8tI8XtyII2FlAQt9xd4MlLthAO%2F9k1Ta5AZSMymRPKUfPBCMUgZwunYP2ggtLf7qYxAp2UWquz%2BsK4yHL12RfP2JpX33cvSG%2BhKTWT2x%2FN4g%2BQNZWflPdwkUzARMhiZ8qowdnlBnAs7HQY28fPRXCU0kUzcWii6wjS0lm9FuaRKAjb%2FBaEFFhw6GulBCNIydL0K90dgWXYBzPFMYh9c543KN%2Bsw8JexwgY6pgHJedPqlVBvm5XYKPrCxk7y22vQvVSk58uadgEdAlF2%2FrYcPvSHptb8iwzNbR5R6Gjw4Wt47QovHCpyJu99%2B6scUlRwXX7iMncmFirkVYZxn%2Ff4zwtL0%2BKDDIdUeypT7DU9gSmJbAlXEs2xNx5svR6oBO6SlRJTXzodtceIzE57G6xVSwMwRvb7%2FZju13427%2FNmz9yEJx%2FMqqPuUgJ9h2DJDQ1HqLdw&X-Amz-Signature=9e457cb1da1b1d3bc511686559e762357e8abfa8374e50acbfc62e05bd76f6f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VKCXLV4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFRS%2FCqdAA06R2%2BW8BwK91n9RZKLrIZgDyBR4c9ZD3R3AiA8y97yg6U5MFJ8DImE%2Bh4GvetvOerJ6yUXAr2HpLPzBCr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM5l5t%2BzZz995VKXZVKtwD7QGzas%2Bmi2K2QPnSjaMWhm4zsiQ%2F0TVHYtvaI67dKAqLNimylK9uHKLFA1JJOKwURzo8LWrGz%2FBTAArTP6Bl%2BE5fkrCT3o20sq0WotB85h9KV03%2FEYeehO7yLoKxBo8mHSPQrh5EnFX8Gi7d2XaEO6A9svX29BNBoJEipZnNpBwrpzZGtmDwx%2BdMpqqtZ2f8mtpDEZFd6TaFkbGyqci9FHtIsz4F4jb%2Bjl994PwO78tPxN8ircyyujw1J8mIMLbW7z0M1bAZRe%2FpTvfA0thVaYVRAym1slU9OOC3c0%2FCur448Ct1dVhJk%2FH%2F4I6MuT96awkvWihKe70bB4w%2BJJ1vsJw6pxhmssw8%2BRAKdss1qoUCjDbm0my3nGQye%2BhTuFCtE3YFMlcw6DDA26A5H3TaSMZzFK%2Bz2Z1uL8tI8XtyII2FlAQt9xd4MlLthAO%2F9k1Ta5AZSMymRPKUfPBCMUgZwunYP2ggtLf7qYxAp2UWquz%2BsK4yHL12RfP2JpX33cvSG%2BhKTWT2x%2FN4g%2BQNZWflPdwkUzARMhiZ8qowdnlBnAs7HQY28fPRXCU0kUzcWii6wjS0lm9FuaRKAjb%2FBaEFFhw6GulBCNIydL0K90dgWXYBzPFMYh9c543KN%2Bsw8JexwgY6pgHJedPqlVBvm5XYKPrCxk7y22vQvVSk58uadgEdAlF2%2FrYcPvSHptb8iwzNbR5R6Gjw4Wt47QovHCpyJu99%2B6scUlRwXX7iMncmFirkVYZxn%2Ff4zwtL0%2BKDDIdUeypT7DU9gSmJbAlXEs2xNx5svR6oBO6SlRJTXzodtceIzE57G6xVSwMwRvb7%2FZju13427%2FNmz9yEJx%2FMqqPuUgJ9h2DJDQ1HqLdw&X-Amz-Signature=ba4cb9ce27750fcc4a9db2732a64a13ef1fc27b0896ab87ccb051f9a2a6c9068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VKCXLV4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFRS%2FCqdAA06R2%2BW8BwK91n9RZKLrIZgDyBR4c9ZD3R3AiA8y97yg6U5MFJ8DImE%2Bh4GvetvOerJ6yUXAr2HpLPzBCr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM5l5t%2BzZz995VKXZVKtwD7QGzas%2Bmi2K2QPnSjaMWhm4zsiQ%2F0TVHYtvaI67dKAqLNimylK9uHKLFA1JJOKwURzo8LWrGz%2FBTAArTP6Bl%2BE5fkrCT3o20sq0WotB85h9KV03%2FEYeehO7yLoKxBo8mHSPQrh5EnFX8Gi7d2XaEO6A9svX29BNBoJEipZnNpBwrpzZGtmDwx%2BdMpqqtZ2f8mtpDEZFd6TaFkbGyqci9FHtIsz4F4jb%2Bjl994PwO78tPxN8ircyyujw1J8mIMLbW7z0M1bAZRe%2FpTvfA0thVaYVRAym1slU9OOC3c0%2FCur448Ct1dVhJk%2FH%2F4I6MuT96awkvWihKe70bB4w%2BJJ1vsJw6pxhmssw8%2BRAKdss1qoUCjDbm0my3nGQye%2BhTuFCtE3YFMlcw6DDA26A5H3TaSMZzFK%2Bz2Z1uL8tI8XtyII2FlAQt9xd4MlLthAO%2F9k1Ta5AZSMymRPKUfPBCMUgZwunYP2ggtLf7qYxAp2UWquz%2BsK4yHL12RfP2JpX33cvSG%2BhKTWT2x%2FN4g%2BQNZWflPdwkUzARMhiZ8qowdnlBnAs7HQY28fPRXCU0kUzcWii6wjS0lm9FuaRKAjb%2FBaEFFhw6GulBCNIydL0K90dgWXYBzPFMYh9c543KN%2Bsw8JexwgY6pgHJedPqlVBvm5XYKPrCxk7y22vQvVSk58uadgEdAlF2%2FrYcPvSHptb8iwzNbR5R6Gjw4Wt47QovHCpyJu99%2B6scUlRwXX7iMncmFirkVYZxn%2Ff4zwtL0%2BKDDIdUeypT7DU9gSmJbAlXEs2xNx5svR6oBO6SlRJTXzodtceIzE57G6xVSwMwRvb7%2FZju13427%2FNmz9yEJx%2FMqqPuUgJ9h2DJDQ1HqLdw&X-Amz-Signature=b865553d988c95bcdd7b090af367dae2282e0afda6fcded1a1e1450606dc07a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VKCXLV4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFRS%2FCqdAA06R2%2BW8BwK91n9RZKLrIZgDyBR4c9ZD3R3AiA8y97yg6U5MFJ8DImE%2Bh4GvetvOerJ6yUXAr2HpLPzBCr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM5l5t%2BzZz995VKXZVKtwD7QGzas%2Bmi2K2QPnSjaMWhm4zsiQ%2F0TVHYtvaI67dKAqLNimylK9uHKLFA1JJOKwURzo8LWrGz%2FBTAArTP6Bl%2BE5fkrCT3o20sq0WotB85h9KV03%2FEYeehO7yLoKxBo8mHSPQrh5EnFX8Gi7d2XaEO6A9svX29BNBoJEipZnNpBwrpzZGtmDwx%2BdMpqqtZ2f8mtpDEZFd6TaFkbGyqci9FHtIsz4F4jb%2Bjl994PwO78tPxN8ircyyujw1J8mIMLbW7z0M1bAZRe%2FpTvfA0thVaYVRAym1slU9OOC3c0%2FCur448Ct1dVhJk%2FH%2F4I6MuT96awkvWihKe70bB4w%2BJJ1vsJw6pxhmssw8%2BRAKdss1qoUCjDbm0my3nGQye%2BhTuFCtE3YFMlcw6DDA26A5H3TaSMZzFK%2Bz2Z1uL8tI8XtyII2FlAQt9xd4MlLthAO%2F9k1Ta5AZSMymRPKUfPBCMUgZwunYP2ggtLf7qYxAp2UWquz%2BsK4yHL12RfP2JpX33cvSG%2BhKTWT2x%2FN4g%2BQNZWflPdwkUzARMhiZ8qowdnlBnAs7HQY28fPRXCU0kUzcWii6wjS0lm9FuaRKAjb%2FBaEFFhw6GulBCNIydL0K90dgWXYBzPFMYh9c543KN%2Bsw8JexwgY6pgHJedPqlVBvm5XYKPrCxk7y22vQvVSk58uadgEdAlF2%2FrYcPvSHptb8iwzNbR5R6Gjw4Wt47QovHCpyJu99%2B6scUlRwXX7iMncmFirkVYZxn%2Ff4zwtL0%2BKDDIdUeypT7DU9gSmJbAlXEs2xNx5svR6oBO6SlRJTXzodtceIzE57G6xVSwMwRvb7%2FZju13427%2FNmz9yEJx%2FMqqPuUgJ9h2DJDQ1HqLdw&X-Amz-Signature=50f0d9d134171424fafa8c9d3876931ffc03d6c35a964be9c006d74aadc50da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
