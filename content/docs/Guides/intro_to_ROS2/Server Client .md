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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V52EC3KO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPr%2F6Ft%2BGzxJsca1wXlnAW0WqbH%2BzQRbz5ZwOZSZETLgIgBYncjAsj%2BbAsTF0rnfs8ZMYi1eiJwlAbCJp4%2BxJSQNMqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7aZG9PPAurBVYsgircAzEMiHviOycZmhIvlCXN%2F%2FYW5Wvt4nFdqiGEjE2nOcF2HxbpPQeaL9tIf0lpRqMzfxR8p5IPMwL%2B3%2F5S6kqx%2Bs2hCOWP%2FjGYb9R9TW5wIsGA07NpO9bxpGoKuWVYBgXRFAe38Vtf92MbAgiCaM89a5E9UmQEsvgSIMPwddQXGhURqM53rpkOXkOsX0RtABm0oe41dp9W%2FH0IYwlBMow%2FAme8unsTyG0khc%2BmAcSyEeRrA%2Fdl3dmHV4NFC6dPqf4hSCDjgCd82fSvlJoPw5%2BW7idrSEpPanMC5u1Obl0RWLmkSnk0F0bdI5vQJ%2FszXh%2Fq5N%2BWw7KawHqs4glOfSmvvzDA9jwfIkKgZp8R7BrS7in9FxdUWuHekdKn%2B2IkVjuqa06JcqIFoo5vch5m4175amNYbImb34nzPBqM4g2ATvu3etjFhdjpZFWGp%2F56DH5m5syQlprPlZzyovjo3DvXP7B0vDarYcHYw%2Bt6jv8cWckJ3wqyDo3zXiObNOzd%2BqliLxE%2FTbSXw2sv46Jlt%2F%2BE%2BJj7VAtBH2fqECG1UkAhgcdRuh%2BRsU4Ib0P5mEwWyw9neuK4WSg6y1o0EOM9gByy3p8WCKg3cB2jOudnYNKwbQ5kEgyyODtHU4Z1kcXuMKXGrcQGOqUBC9LR3ZTv67v7R%2BaP4SZX0BJtUOfZVryzopdWD2OA6nVCoB%2BCCdOjQat%2BDDitpoQojJ%2FCStLy%2BYBe10TOYynp5l8Pyn6pscvMfCiI2sPSpAZAmCBBVQ%2BvGRHbWbEM5WqufCp7qUX71zBVNE7KcMZr2C7GaIwLnDhGmCG%2Fhg4JkduY6PO9CY%2FUXE3WA7cU9Gh99dYb2L0lw%2Fql7UHYKboI0I%2BfM7Xu&X-Amz-Signature=5f2236d8107cea64b216addbabc60289f2e492ef72f01e37bdd5821b8342326a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V52EC3KO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPr%2F6Ft%2BGzxJsca1wXlnAW0WqbH%2BzQRbz5ZwOZSZETLgIgBYncjAsj%2BbAsTF0rnfs8ZMYi1eiJwlAbCJp4%2BxJSQNMqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7aZG9PPAurBVYsgircAzEMiHviOycZmhIvlCXN%2F%2FYW5Wvt4nFdqiGEjE2nOcF2HxbpPQeaL9tIf0lpRqMzfxR8p5IPMwL%2B3%2F5S6kqx%2Bs2hCOWP%2FjGYb9R9TW5wIsGA07NpO9bxpGoKuWVYBgXRFAe38Vtf92MbAgiCaM89a5E9UmQEsvgSIMPwddQXGhURqM53rpkOXkOsX0RtABm0oe41dp9W%2FH0IYwlBMow%2FAme8unsTyG0khc%2BmAcSyEeRrA%2Fdl3dmHV4NFC6dPqf4hSCDjgCd82fSvlJoPw5%2BW7idrSEpPanMC5u1Obl0RWLmkSnk0F0bdI5vQJ%2FszXh%2Fq5N%2BWw7KawHqs4glOfSmvvzDA9jwfIkKgZp8R7BrS7in9FxdUWuHekdKn%2B2IkVjuqa06JcqIFoo5vch5m4175amNYbImb34nzPBqM4g2ATvu3etjFhdjpZFWGp%2F56DH5m5syQlprPlZzyovjo3DvXP7B0vDarYcHYw%2Bt6jv8cWckJ3wqyDo3zXiObNOzd%2BqliLxE%2FTbSXw2sv46Jlt%2F%2BE%2BJj7VAtBH2fqECG1UkAhgcdRuh%2BRsU4Ib0P5mEwWyw9neuK4WSg6y1o0EOM9gByy3p8WCKg3cB2jOudnYNKwbQ5kEgyyODtHU4Z1kcXuMKXGrcQGOqUBC9LR3ZTv67v7R%2BaP4SZX0BJtUOfZVryzopdWD2OA6nVCoB%2BCCdOjQat%2BDDitpoQojJ%2FCStLy%2BYBe10TOYynp5l8Pyn6pscvMfCiI2sPSpAZAmCBBVQ%2BvGRHbWbEM5WqufCp7qUX71zBVNE7KcMZr2C7GaIwLnDhGmCG%2Fhg4JkduY6PO9CY%2FUXE3WA7cU9Gh99dYb2L0lw%2Fql7UHYKboI0I%2BfM7Xu&X-Amz-Signature=f452e41885bcb7114a63cea7889208068669e6c2f4c83b521f40059a6a0c8771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V52EC3KO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPr%2F6Ft%2BGzxJsca1wXlnAW0WqbH%2BzQRbz5ZwOZSZETLgIgBYncjAsj%2BbAsTF0rnfs8ZMYi1eiJwlAbCJp4%2BxJSQNMqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7aZG9PPAurBVYsgircAzEMiHviOycZmhIvlCXN%2F%2FYW5Wvt4nFdqiGEjE2nOcF2HxbpPQeaL9tIf0lpRqMzfxR8p5IPMwL%2B3%2F5S6kqx%2Bs2hCOWP%2FjGYb9R9TW5wIsGA07NpO9bxpGoKuWVYBgXRFAe38Vtf92MbAgiCaM89a5E9UmQEsvgSIMPwddQXGhURqM53rpkOXkOsX0RtABm0oe41dp9W%2FH0IYwlBMow%2FAme8unsTyG0khc%2BmAcSyEeRrA%2Fdl3dmHV4NFC6dPqf4hSCDjgCd82fSvlJoPw5%2BW7idrSEpPanMC5u1Obl0RWLmkSnk0F0bdI5vQJ%2FszXh%2Fq5N%2BWw7KawHqs4glOfSmvvzDA9jwfIkKgZp8R7BrS7in9FxdUWuHekdKn%2B2IkVjuqa06JcqIFoo5vch5m4175amNYbImb34nzPBqM4g2ATvu3etjFhdjpZFWGp%2F56DH5m5syQlprPlZzyovjo3DvXP7B0vDarYcHYw%2Bt6jv8cWckJ3wqyDo3zXiObNOzd%2BqliLxE%2FTbSXw2sv46Jlt%2F%2BE%2BJj7VAtBH2fqECG1UkAhgcdRuh%2BRsU4Ib0P5mEwWyw9neuK4WSg6y1o0EOM9gByy3p8WCKg3cB2jOudnYNKwbQ5kEgyyODtHU4Z1kcXuMKXGrcQGOqUBC9LR3ZTv67v7R%2BaP4SZX0BJtUOfZVryzopdWD2OA6nVCoB%2BCCdOjQat%2BDDitpoQojJ%2FCStLy%2BYBe10TOYynp5l8Pyn6pscvMfCiI2sPSpAZAmCBBVQ%2BvGRHbWbEM5WqufCp7qUX71zBVNE7KcMZr2C7GaIwLnDhGmCG%2Fhg4JkduY6PO9CY%2FUXE3WA7cU9Gh99dYb2L0lw%2Fql7UHYKboI0I%2BfM7Xu&X-Amz-Signature=09277aff6d6eb78792a3f7b7b5629b731c80ee847e920bd172c02e50ba27a6fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V52EC3KO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPr%2F6Ft%2BGzxJsca1wXlnAW0WqbH%2BzQRbz5ZwOZSZETLgIgBYncjAsj%2BbAsTF0rnfs8ZMYi1eiJwlAbCJp4%2BxJSQNMqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7aZG9PPAurBVYsgircAzEMiHviOycZmhIvlCXN%2F%2FYW5Wvt4nFdqiGEjE2nOcF2HxbpPQeaL9tIf0lpRqMzfxR8p5IPMwL%2B3%2F5S6kqx%2Bs2hCOWP%2FjGYb9R9TW5wIsGA07NpO9bxpGoKuWVYBgXRFAe38Vtf92MbAgiCaM89a5E9UmQEsvgSIMPwddQXGhURqM53rpkOXkOsX0RtABm0oe41dp9W%2FH0IYwlBMow%2FAme8unsTyG0khc%2BmAcSyEeRrA%2Fdl3dmHV4NFC6dPqf4hSCDjgCd82fSvlJoPw5%2BW7idrSEpPanMC5u1Obl0RWLmkSnk0F0bdI5vQJ%2FszXh%2Fq5N%2BWw7KawHqs4glOfSmvvzDA9jwfIkKgZp8R7BrS7in9FxdUWuHekdKn%2B2IkVjuqa06JcqIFoo5vch5m4175amNYbImb34nzPBqM4g2ATvu3etjFhdjpZFWGp%2F56DH5m5syQlprPlZzyovjo3DvXP7B0vDarYcHYw%2Bt6jv8cWckJ3wqyDo3zXiObNOzd%2BqliLxE%2FTbSXw2sv46Jlt%2F%2BE%2BJj7VAtBH2fqECG1UkAhgcdRuh%2BRsU4Ib0P5mEwWyw9neuK4WSg6y1o0EOM9gByy3p8WCKg3cB2jOudnYNKwbQ5kEgyyODtHU4Z1kcXuMKXGrcQGOqUBC9LR3ZTv67v7R%2BaP4SZX0BJtUOfZVryzopdWD2OA6nVCoB%2BCCdOjQat%2BDDitpoQojJ%2FCStLy%2BYBe10TOYynp5l8Pyn6pscvMfCiI2sPSpAZAmCBBVQ%2BvGRHbWbEM5WqufCp7qUX71zBVNE7KcMZr2C7GaIwLnDhGmCG%2Fhg4JkduY6PO9CY%2FUXE3WA7cU9Gh99dYb2L0lw%2Fql7UHYKboI0I%2BfM7Xu&X-Amz-Signature=49cfe97e636d9c0fe9e9469476e6369922553d64c147f184459e905fafe4d3ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V52EC3KO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPr%2F6Ft%2BGzxJsca1wXlnAW0WqbH%2BzQRbz5ZwOZSZETLgIgBYncjAsj%2BbAsTF0rnfs8ZMYi1eiJwlAbCJp4%2BxJSQNMqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7aZG9PPAurBVYsgircAzEMiHviOycZmhIvlCXN%2F%2FYW5Wvt4nFdqiGEjE2nOcF2HxbpPQeaL9tIf0lpRqMzfxR8p5IPMwL%2B3%2F5S6kqx%2Bs2hCOWP%2FjGYb9R9TW5wIsGA07NpO9bxpGoKuWVYBgXRFAe38Vtf92MbAgiCaM89a5E9UmQEsvgSIMPwddQXGhURqM53rpkOXkOsX0RtABm0oe41dp9W%2FH0IYwlBMow%2FAme8unsTyG0khc%2BmAcSyEeRrA%2Fdl3dmHV4NFC6dPqf4hSCDjgCd82fSvlJoPw5%2BW7idrSEpPanMC5u1Obl0RWLmkSnk0F0bdI5vQJ%2FszXh%2Fq5N%2BWw7KawHqs4glOfSmvvzDA9jwfIkKgZp8R7BrS7in9FxdUWuHekdKn%2B2IkVjuqa06JcqIFoo5vch5m4175amNYbImb34nzPBqM4g2ATvu3etjFhdjpZFWGp%2F56DH5m5syQlprPlZzyovjo3DvXP7B0vDarYcHYw%2Bt6jv8cWckJ3wqyDo3zXiObNOzd%2BqliLxE%2FTbSXw2sv46Jlt%2F%2BE%2BJj7VAtBH2fqECG1UkAhgcdRuh%2BRsU4Ib0P5mEwWyw9neuK4WSg6y1o0EOM9gByy3p8WCKg3cB2jOudnYNKwbQ5kEgyyODtHU4Z1kcXuMKXGrcQGOqUBC9LR3ZTv67v7R%2BaP4SZX0BJtUOfZVryzopdWD2OA6nVCoB%2BCCdOjQat%2BDDitpoQojJ%2FCStLy%2BYBe10TOYynp5l8Pyn6pscvMfCiI2sPSpAZAmCBBVQ%2BvGRHbWbEM5WqufCp7qUX71zBVNE7KcMZr2C7GaIwLnDhGmCG%2Fhg4JkduY6PO9CY%2FUXE3WA7cU9Gh99dYb2L0lw%2Fql7UHYKboI0I%2BfM7Xu&X-Amz-Signature=03e35f075dcd3581a04e6c3ac09fe36554d0380d9aee7351d499c25bfb946d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
