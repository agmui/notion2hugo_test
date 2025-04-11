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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CV2UTIP%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCID67YivFq4moEyi5au6mfmCqw%2BhevtKqRHgfUDkrY1ZiAiAA7b%2B7W8h42LawOaYt6ZNMPSIG1aNwrTmmWlI%2FgEoajyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxvwJf4FlkAcT3ciFKtwDaWtqqzVZJv01IybrC%2F%2BBQCswLEuEXBWIb8BNLn%2Bi5bHt77hwrduQdc%2Fr7XFc7PNhOnNe5pAAEq18If9uwkmPH2fQGXKcb1MXAg786beSI75r9yOcNeYYqM5WE7qyD%2FALqPuscoV%2BBqpjkO8TL1JTJZc2gQnLoAGO%2BTBv6brHSaM5mOaCJzTxpeIcJE1I9YIpVrqXiHeu23PZ03LpV550XfEmQ5pXhha2xl5iRiQpD3eAOQVIFBvnFFDJuZ4XN4qI7Pb8LT%2F7%2F3j2VZmS7kkv68UYu%2BPdHRa%2ByheKYPysTMfOSoygfCmF%2BajzU8dUhyW8g2vNdmyemW558bXGrI6RcW4NqZWN5GxliHYwZ9DMjarVl9qMDexW0O4g52qG%2F48Ut%2BRq3lJ56Ccbt1D2wp4oLPYdPviNf%2B3sDgsQ2zSR5jLeuiqjLrQ4I7DXTsO%2FvjmkitYjio23fQOhkuApzDI1qBPeXUvbIB62Hh%2BywAKabGs7o3PokQ%2Bid2RQ%2BzE9TmhwHkL38bY7vRBrod3N7KRRh8acvgbiVEp%2B8CiQy2GhRUYYiLdCRcotfgpnFbXO9mfteCqEbpKSjaaNrbAR8lu0Rj6hs01yQI8mW60X%2F00%2FEnlM8QPaaO7fH2NQ6Bown7XkvwY6pgERihtiINrNxz6jqdj9i2Xw%2Bu2SFjGGXukeUjnUt1XABrelsC1mPr2xFLPiZf%2F1YygP6ioxXsg6M%2Fr0nTP5g87a1xJ9%2FU9Dumyp4l6Dup9GpinjD0GP%2FJL6K5nUl8cbynzaxQMR7pw4csgfItOA3pTvL%2BhfGVkkL5hh5IOoNILYPygPxXI5fT6mohkXaP3QSEle0SmuOTYnID5M7%2FSU8qfFfE%2FKinyH&X-Amz-Signature=a20f4f81fb468bac757270deb2118fe42c02d213dda184f50b2e442290fd62c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CV2UTIP%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCID67YivFq4moEyi5au6mfmCqw%2BhevtKqRHgfUDkrY1ZiAiAA7b%2B7W8h42LawOaYt6ZNMPSIG1aNwrTmmWlI%2FgEoajyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxvwJf4FlkAcT3ciFKtwDaWtqqzVZJv01IybrC%2F%2BBQCswLEuEXBWIb8BNLn%2Bi5bHt77hwrduQdc%2Fr7XFc7PNhOnNe5pAAEq18If9uwkmPH2fQGXKcb1MXAg786beSI75r9yOcNeYYqM5WE7qyD%2FALqPuscoV%2BBqpjkO8TL1JTJZc2gQnLoAGO%2BTBv6brHSaM5mOaCJzTxpeIcJE1I9YIpVrqXiHeu23PZ03LpV550XfEmQ5pXhha2xl5iRiQpD3eAOQVIFBvnFFDJuZ4XN4qI7Pb8LT%2F7%2F3j2VZmS7kkv68UYu%2BPdHRa%2ByheKYPysTMfOSoygfCmF%2BajzU8dUhyW8g2vNdmyemW558bXGrI6RcW4NqZWN5GxliHYwZ9DMjarVl9qMDexW0O4g52qG%2F48Ut%2BRq3lJ56Ccbt1D2wp4oLPYdPviNf%2B3sDgsQ2zSR5jLeuiqjLrQ4I7DXTsO%2FvjmkitYjio23fQOhkuApzDI1qBPeXUvbIB62Hh%2BywAKabGs7o3PokQ%2Bid2RQ%2BzE9TmhwHkL38bY7vRBrod3N7KRRh8acvgbiVEp%2B8CiQy2GhRUYYiLdCRcotfgpnFbXO9mfteCqEbpKSjaaNrbAR8lu0Rj6hs01yQI8mW60X%2F00%2FEnlM8QPaaO7fH2NQ6Bown7XkvwY6pgERihtiINrNxz6jqdj9i2Xw%2Bu2SFjGGXukeUjnUt1XABrelsC1mPr2xFLPiZf%2F1YygP6ioxXsg6M%2Fr0nTP5g87a1xJ9%2FU9Dumyp4l6Dup9GpinjD0GP%2FJL6K5nUl8cbynzaxQMR7pw4csgfItOA3pTvL%2BhfGVkkL5hh5IOoNILYPygPxXI5fT6mohkXaP3QSEle0SmuOTYnID5M7%2FSU8qfFfE%2FKinyH&X-Amz-Signature=532894e7c5d9761a3dc7831e53438a286ea2cf0c7c7d54f43efa6251714690b3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CV2UTIP%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCID67YivFq4moEyi5au6mfmCqw%2BhevtKqRHgfUDkrY1ZiAiAA7b%2B7W8h42LawOaYt6ZNMPSIG1aNwrTmmWlI%2FgEoajyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxvwJf4FlkAcT3ciFKtwDaWtqqzVZJv01IybrC%2F%2BBQCswLEuEXBWIb8BNLn%2Bi5bHt77hwrduQdc%2Fr7XFc7PNhOnNe5pAAEq18If9uwkmPH2fQGXKcb1MXAg786beSI75r9yOcNeYYqM5WE7qyD%2FALqPuscoV%2BBqpjkO8TL1JTJZc2gQnLoAGO%2BTBv6brHSaM5mOaCJzTxpeIcJE1I9YIpVrqXiHeu23PZ03LpV550XfEmQ5pXhha2xl5iRiQpD3eAOQVIFBvnFFDJuZ4XN4qI7Pb8LT%2F7%2F3j2VZmS7kkv68UYu%2BPdHRa%2ByheKYPysTMfOSoygfCmF%2BajzU8dUhyW8g2vNdmyemW558bXGrI6RcW4NqZWN5GxliHYwZ9DMjarVl9qMDexW0O4g52qG%2F48Ut%2BRq3lJ56Ccbt1D2wp4oLPYdPviNf%2B3sDgsQ2zSR5jLeuiqjLrQ4I7DXTsO%2FvjmkitYjio23fQOhkuApzDI1qBPeXUvbIB62Hh%2BywAKabGs7o3PokQ%2Bid2RQ%2BzE9TmhwHkL38bY7vRBrod3N7KRRh8acvgbiVEp%2B8CiQy2GhRUYYiLdCRcotfgpnFbXO9mfteCqEbpKSjaaNrbAR8lu0Rj6hs01yQI8mW60X%2F00%2FEnlM8QPaaO7fH2NQ6Bown7XkvwY6pgERihtiINrNxz6jqdj9i2Xw%2Bu2SFjGGXukeUjnUt1XABrelsC1mPr2xFLPiZf%2F1YygP6ioxXsg6M%2Fr0nTP5g87a1xJ9%2FU9Dumyp4l6Dup9GpinjD0GP%2FJL6K5nUl8cbynzaxQMR7pw4csgfItOA3pTvL%2BhfGVkkL5hh5IOoNILYPygPxXI5fT6mohkXaP3QSEle0SmuOTYnID5M7%2FSU8qfFfE%2FKinyH&X-Amz-Signature=ea02db0edb41dbdf92a0d99595aaebb0a1537d36ce5cc3768954dcae1f1dc11e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CV2UTIP%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCID67YivFq4moEyi5au6mfmCqw%2BhevtKqRHgfUDkrY1ZiAiAA7b%2B7W8h42LawOaYt6ZNMPSIG1aNwrTmmWlI%2FgEoajyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxvwJf4FlkAcT3ciFKtwDaWtqqzVZJv01IybrC%2F%2BBQCswLEuEXBWIb8BNLn%2Bi5bHt77hwrduQdc%2Fr7XFc7PNhOnNe5pAAEq18If9uwkmPH2fQGXKcb1MXAg786beSI75r9yOcNeYYqM5WE7qyD%2FALqPuscoV%2BBqpjkO8TL1JTJZc2gQnLoAGO%2BTBv6brHSaM5mOaCJzTxpeIcJE1I9YIpVrqXiHeu23PZ03LpV550XfEmQ5pXhha2xl5iRiQpD3eAOQVIFBvnFFDJuZ4XN4qI7Pb8LT%2F7%2F3j2VZmS7kkv68UYu%2BPdHRa%2ByheKYPysTMfOSoygfCmF%2BajzU8dUhyW8g2vNdmyemW558bXGrI6RcW4NqZWN5GxliHYwZ9DMjarVl9qMDexW0O4g52qG%2F48Ut%2BRq3lJ56Ccbt1D2wp4oLPYdPviNf%2B3sDgsQ2zSR5jLeuiqjLrQ4I7DXTsO%2FvjmkitYjio23fQOhkuApzDI1qBPeXUvbIB62Hh%2BywAKabGs7o3PokQ%2Bid2RQ%2BzE9TmhwHkL38bY7vRBrod3N7KRRh8acvgbiVEp%2B8CiQy2GhRUYYiLdCRcotfgpnFbXO9mfteCqEbpKSjaaNrbAR8lu0Rj6hs01yQI8mW60X%2F00%2FEnlM8QPaaO7fH2NQ6Bown7XkvwY6pgERihtiINrNxz6jqdj9i2Xw%2Bu2SFjGGXukeUjnUt1XABrelsC1mPr2xFLPiZf%2F1YygP6ioxXsg6M%2Fr0nTP5g87a1xJ9%2FU9Dumyp4l6Dup9GpinjD0GP%2FJL6K5nUl8cbynzaxQMR7pw4csgfItOA3pTvL%2BhfGVkkL5hh5IOoNILYPygPxXI5fT6mohkXaP3QSEle0SmuOTYnID5M7%2FSU8qfFfE%2FKinyH&X-Amz-Signature=9824dac6b66592353066bb08b43aca96b6863cdfaeb21c7b516fb6b172f39bff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CV2UTIP%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCID67YivFq4moEyi5au6mfmCqw%2BhevtKqRHgfUDkrY1ZiAiAA7b%2B7W8h42LawOaYt6ZNMPSIG1aNwrTmmWlI%2FgEoajyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxvwJf4FlkAcT3ciFKtwDaWtqqzVZJv01IybrC%2F%2BBQCswLEuEXBWIb8BNLn%2Bi5bHt77hwrduQdc%2Fr7XFc7PNhOnNe5pAAEq18If9uwkmPH2fQGXKcb1MXAg786beSI75r9yOcNeYYqM5WE7qyD%2FALqPuscoV%2BBqpjkO8TL1JTJZc2gQnLoAGO%2BTBv6brHSaM5mOaCJzTxpeIcJE1I9YIpVrqXiHeu23PZ03LpV550XfEmQ5pXhha2xl5iRiQpD3eAOQVIFBvnFFDJuZ4XN4qI7Pb8LT%2F7%2F3j2VZmS7kkv68UYu%2BPdHRa%2ByheKYPysTMfOSoygfCmF%2BajzU8dUhyW8g2vNdmyemW558bXGrI6RcW4NqZWN5GxliHYwZ9DMjarVl9qMDexW0O4g52qG%2F48Ut%2BRq3lJ56Ccbt1D2wp4oLPYdPviNf%2B3sDgsQ2zSR5jLeuiqjLrQ4I7DXTsO%2FvjmkitYjio23fQOhkuApzDI1qBPeXUvbIB62Hh%2BywAKabGs7o3PokQ%2Bid2RQ%2BzE9TmhwHkL38bY7vRBrod3N7KRRh8acvgbiVEp%2B8CiQy2GhRUYYiLdCRcotfgpnFbXO9mfteCqEbpKSjaaNrbAR8lu0Rj6hs01yQI8mW60X%2F00%2FEnlM8QPaaO7fH2NQ6Bown7XkvwY6pgERihtiINrNxz6jqdj9i2Xw%2Bu2SFjGGXukeUjnUt1XABrelsC1mPr2xFLPiZf%2F1YygP6ioxXsg6M%2Fr0nTP5g87a1xJ9%2FU9Dumyp4l6Dup9GpinjD0GP%2FJL6K5nUl8cbynzaxQMR7pw4csgfItOA3pTvL%2BhfGVkkL5hh5IOoNILYPygPxXI5fT6mohkXaP3QSEle0SmuOTYnID5M7%2FSU8qfFfE%2FKinyH&X-Amz-Signature=7228b6c715ae4b585a7282d030f06caea6f18135984f5d6a7e3819f013da2da1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
