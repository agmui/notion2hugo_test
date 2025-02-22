---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSEDZN7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjABQ9Qh4gVxY%2FE3pBuDmbKhF%2FINXo%2BetG%2Bkim6M%2FiqAiEA70kyuTgN8Jum2MU31oQwW9XxR5ptKTovTIfBxSX7tkEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGOoSj9lEQUyVOb%2FCrcAwPMNCX%2B08Hflg9zBqpABSkWVzFd9wzapRvKvb44SIV5f%2FL7%2BbIiEaE9mrbkni3yuy8rrz%2BATX6A2zM%2FKinA4soyKyfkIoeuLE2Mr%2FjHLzVLYCQmDgByojoMyVcD66tQ%2BfsT3WOzqt9OwyDxJM1TqP%2FI4uF2CmZFoxSbHWc6cXDleM0ReEW6omBIAsWLT7NXfODl5bswd%2FsdOtVgScj7B5oYdyNaFevLo8Vzu7zd8bYKpAGT0ycDnzqjmN30DusxRqPvMZfeJpt3Glc0IbTTPlp9xp6JGLU3pAzMWrs4LROGCksG8V3PGZcpdlMCJaZd8Uru0gLoIIbCBGfG9C6oFXgpnW4qpK%2Fztu0IKJHeduUi6%2FDIU0sBCyZkDZhaiqe%2BjuPNWQ3uwZgPoJ022L0kafh0EVu9yohbGRtJMbpRqwyuYKIVyOKwZYXtMmtThBc9sT9CyAsMdG%2BrGdsN33D5G8NWIIKeAR2ELj6SbY7BnmtQ2Uhq8hvdh4J6opVI20y8rimr5Ffy9vfmZx6AO4WqSPwtMA%2B1jVx6Ej6AMSyea4HgKd8XQk6ke%2F9HWPf6NzVHdCPKc%2BprKtGvzqNB1Jnz6V%2BU6BG0kCEnPUQfMSDiWq%2BtjqGNMoYFI2c3lGcmMJDI5b0GOqUBn4qKscgplDfGHyFBk0sA48X74Op%2BBphEzt8dComvNSOhtLMdVP3a1xpjbpSEPBQj6m0MwhntPSOglQ0DzEO6x0zchrXV5aDXiC6BqC9rUHEtOKxU5HNcJLE%2F2k%2Fze5Zu5S4sL6ITtf0HSuRTc4wOfMV9CyGgEp00mSfWytO7dAHZf2HMWS16bjoDHIUv0HAq2yeGP9UZSNY3kHpYng6nrXv%2Bz5Pq&X-Amz-Signature=b28a1ca0e71716121b9fb68950c994a02ca083c1a75dbabbcb2a6650c16ca663&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSEDZN7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjABQ9Qh4gVxY%2FE3pBuDmbKhF%2FINXo%2BetG%2Bkim6M%2FiqAiEA70kyuTgN8Jum2MU31oQwW9XxR5ptKTovTIfBxSX7tkEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGOoSj9lEQUyVOb%2FCrcAwPMNCX%2B08Hflg9zBqpABSkWVzFd9wzapRvKvb44SIV5f%2FL7%2BbIiEaE9mrbkni3yuy8rrz%2BATX6A2zM%2FKinA4soyKyfkIoeuLE2Mr%2FjHLzVLYCQmDgByojoMyVcD66tQ%2BfsT3WOzqt9OwyDxJM1TqP%2FI4uF2CmZFoxSbHWc6cXDleM0ReEW6omBIAsWLT7NXfODl5bswd%2FsdOtVgScj7B5oYdyNaFevLo8Vzu7zd8bYKpAGT0ycDnzqjmN30DusxRqPvMZfeJpt3Glc0IbTTPlp9xp6JGLU3pAzMWrs4LROGCksG8V3PGZcpdlMCJaZd8Uru0gLoIIbCBGfG9C6oFXgpnW4qpK%2Fztu0IKJHeduUi6%2FDIU0sBCyZkDZhaiqe%2BjuPNWQ3uwZgPoJ022L0kafh0EVu9yohbGRtJMbpRqwyuYKIVyOKwZYXtMmtThBc9sT9CyAsMdG%2BrGdsN33D5G8NWIIKeAR2ELj6SbY7BnmtQ2Uhq8hvdh4J6opVI20y8rimr5Ffy9vfmZx6AO4WqSPwtMA%2B1jVx6Ej6AMSyea4HgKd8XQk6ke%2F9HWPf6NzVHdCPKc%2BprKtGvzqNB1Jnz6V%2BU6BG0kCEnPUQfMSDiWq%2BtjqGNMoYFI2c3lGcmMJDI5b0GOqUBn4qKscgplDfGHyFBk0sA48X74Op%2BBphEzt8dComvNSOhtLMdVP3a1xpjbpSEPBQj6m0MwhntPSOglQ0DzEO6x0zchrXV5aDXiC6BqC9rUHEtOKxU5HNcJLE%2F2k%2Fze5Zu5S4sL6ITtf0HSuRTc4wOfMV9CyGgEp00mSfWytO7dAHZf2HMWS16bjoDHIUv0HAq2yeGP9UZSNY3kHpYng6nrXv%2Bz5Pq&X-Amz-Signature=99f10061bbbf263d335bbe018425455c4ad6ea6819ecc17d4ae08b3c549739d9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSEDZN7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjABQ9Qh4gVxY%2FE3pBuDmbKhF%2FINXo%2BetG%2Bkim6M%2FiqAiEA70kyuTgN8Jum2MU31oQwW9XxR5ptKTovTIfBxSX7tkEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGOoSj9lEQUyVOb%2FCrcAwPMNCX%2B08Hflg9zBqpABSkWVzFd9wzapRvKvb44SIV5f%2FL7%2BbIiEaE9mrbkni3yuy8rrz%2BATX6A2zM%2FKinA4soyKyfkIoeuLE2Mr%2FjHLzVLYCQmDgByojoMyVcD66tQ%2BfsT3WOzqt9OwyDxJM1TqP%2FI4uF2CmZFoxSbHWc6cXDleM0ReEW6omBIAsWLT7NXfODl5bswd%2FsdOtVgScj7B5oYdyNaFevLo8Vzu7zd8bYKpAGT0ycDnzqjmN30DusxRqPvMZfeJpt3Glc0IbTTPlp9xp6JGLU3pAzMWrs4LROGCksG8V3PGZcpdlMCJaZd8Uru0gLoIIbCBGfG9C6oFXgpnW4qpK%2Fztu0IKJHeduUi6%2FDIU0sBCyZkDZhaiqe%2BjuPNWQ3uwZgPoJ022L0kafh0EVu9yohbGRtJMbpRqwyuYKIVyOKwZYXtMmtThBc9sT9CyAsMdG%2BrGdsN33D5G8NWIIKeAR2ELj6SbY7BnmtQ2Uhq8hvdh4J6opVI20y8rimr5Ffy9vfmZx6AO4WqSPwtMA%2B1jVx6Ej6AMSyea4HgKd8XQk6ke%2F9HWPf6NzVHdCPKc%2BprKtGvzqNB1Jnz6V%2BU6BG0kCEnPUQfMSDiWq%2BtjqGNMoYFI2c3lGcmMJDI5b0GOqUBn4qKscgplDfGHyFBk0sA48X74Op%2BBphEzt8dComvNSOhtLMdVP3a1xpjbpSEPBQj6m0MwhntPSOglQ0DzEO6x0zchrXV5aDXiC6BqC9rUHEtOKxU5HNcJLE%2F2k%2Fze5Zu5S4sL6ITtf0HSuRTc4wOfMV9CyGgEp00mSfWytO7dAHZf2HMWS16bjoDHIUv0HAq2yeGP9UZSNY3kHpYng6nrXv%2Bz5Pq&X-Amz-Signature=0f537acc85e55ef0e7498e3ee71fc90739f301f37cd5a3f74279dc0c3d19cc9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSEDZN7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjABQ9Qh4gVxY%2FE3pBuDmbKhF%2FINXo%2BetG%2Bkim6M%2FiqAiEA70kyuTgN8Jum2MU31oQwW9XxR5ptKTovTIfBxSX7tkEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGOoSj9lEQUyVOb%2FCrcAwPMNCX%2B08Hflg9zBqpABSkWVzFd9wzapRvKvb44SIV5f%2FL7%2BbIiEaE9mrbkni3yuy8rrz%2BATX6A2zM%2FKinA4soyKyfkIoeuLE2Mr%2FjHLzVLYCQmDgByojoMyVcD66tQ%2BfsT3WOzqt9OwyDxJM1TqP%2FI4uF2CmZFoxSbHWc6cXDleM0ReEW6omBIAsWLT7NXfODl5bswd%2FsdOtVgScj7B5oYdyNaFevLo8Vzu7zd8bYKpAGT0ycDnzqjmN30DusxRqPvMZfeJpt3Glc0IbTTPlp9xp6JGLU3pAzMWrs4LROGCksG8V3PGZcpdlMCJaZd8Uru0gLoIIbCBGfG9C6oFXgpnW4qpK%2Fztu0IKJHeduUi6%2FDIU0sBCyZkDZhaiqe%2BjuPNWQ3uwZgPoJ022L0kafh0EVu9yohbGRtJMbpRqwyuYKIVyOKwZYXtMmtThBc9sT9CyAsMdG%2BrGdsN33D5G8NWIIKeAR2ELj6SbY7BnmtQ2Uhq8hvdh4J6opVI20y8rimr5Ffy9vfmZx6AO4WqSPwtMA%2B1jVx6Ej6AMSyea4HgKd8XQk6ke%2F9HWPf6NzVHdCPKc%2BprKtGvzqNB1Jnz6V%2BU6BG0kCEnPUQfMSDiWq%2BtjqGNMoYFI2c3lGcmMJDI5b0GOqUBn4qKscgplDfGHyFBk0sA48X74Op%2BBphEzt8dComvNSOhtLMdVP3a1xpjbpSEPBQj6m0MwhntPSOglQ0DzEO6x0zchrXV5aDXiC6BqC9rUHEtOKxU5HNcJLE%2F2k%2Fze5Zu5S4sL6ITtf0HSuRTc4wOfMV9CyGgEp00mSfWytO7dAHZf2HMWS16bjoDHIUv0HAq2yeGP9UZSNY3kHpYng6nrXv%2Bz5Pq&X-Amz-Signature=c7dbe7acd413f0f8202b8759b26eb79307236429dd1145180d24abfb9abb19a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSEDZN7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjABQ9Qh4gVxY%2FE3pBuDmbKhF%2FINXo%2BetG%2Bkim6M%2FiqAiEA70kyuTgN8Jum2MU31oQwW9XxR5ptKTovTIfBxSX7tkEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGOoSj9lEQUyVOb%2FCrcAwPMNCX%2B08Hflg9zBqpABSkWVzFd9wzapRvKvb44SIV5f%2FL7%2BbIiEaE9mrbkni3yuy8rrz%2BATX6A2zM%2FKinA4soyKyfkIoeuLE2Mr%2FjHLzVLYCQmDgByojoMyVcD66tQ%2BfsT3WOzqt9OwyDxJM1TqP%2FI4uF2CmZFoxSbHWc6cXDleM0ReEW6omBIAsWLT7NXfODl5bswd%2FsdOtVgScj7B5oYdyNaFevLo8Vzu7zd8bYKpAGT0ycDnzqjmN30DusxRqPvMZfeJpt3Glc0IbTTPlp9xp6JGLU3pAzMWrs4LROGCksG8V3PGZcpdlMCJaZd8Uru0gLoIIbCBGfG9C6oFXgpnW4qpK%2Fztu0IKJHeduUi6%2FDIU0sBCyZkDZhaiqe%2BjuPNWQ3uwZgPoJ022L0kafh0EVu9yohbGRtJMbpRqwyuYKIVyOKwZYXtMmtThBc9sT9CyAsMdG%2BrGdsN33D5G8NWIIKeAR2ELj6SbY7BnmtQ2Uhq8hvdh4J6opVI20y8rimr5Ffy9vfmZx6AO4WqSPwtMA%2B1jVx6Ej6AMSyea4HgKd8XQk6ke%2F9HWPf6NzVHdCPKc%2BprKtGvzqNB1Jnz6V%2BU6BG0kCEnPUQfMSDiWq%2BtjqGNMoYFI2c3lGcmMJDI5b0GOqUBn4qKscgplDfGHyFBk0sA48X74Op%2BBphEzt8dComvNSOhtLMdVP3a1xpjbpSEPBQj6m0MwhntPSOglQ0DzEO6x0zchrXV5aDXiC6BqC9rUHEtOKxU5HNcJLE%2F2k%2Fze5Zu5S4sL6ITtf0HSuRTc4wOfMV9CyGgEp00mSfWytO7dAHZf2HMWS16bjoDHIUv0HAq2yeGP9UZSNY3kHpYng6nrXv%2Bz5Pq&X-Amz-Signature=9e73278cf7c7ce192590611e218d73f610ce69a599b654119d16675f6b8c9868&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
