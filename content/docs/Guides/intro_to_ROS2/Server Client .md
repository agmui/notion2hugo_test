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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFTVU7A6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAtUeWaDeue3zbAaL8aBYI3YqX1MBbcI4p2aSFfTrTNVAiBSXztCCpaaSpdcJrhNcFbtQEmSRXEDuZs5KQuJ8QvwhSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMBcWO5iHdhO5n7yyJKtwDkj0ar5C57uWQF6bJbo1awDTuFpm8WCGtbtlfP9aYJW7KLim6OXUiRCHZZEo2uMGNpYTGVvrqe06iTkyKZAF1v5gmWahgtNWsraydBuLMdQpmJQB7bX3u6otxQjzuBec7ARLyrsxBVEXm3xrNChgnoI%2BOrpmYh38i0Vj6dyi7RxTLl4YVMvQf2CGc%2BV8z15wyigKm1Exs7mQgq9ElibiAE%2FHahjZsuhf8WPMr8IV%2BcLnqu0t8bhVi%2F7m4HQ96G6xq2Hkq6C6exU9wCIwqgkgCjph97gSUi2jsr57E1C7Lxw5gdDwcJLGaLOHYI7EPnr5uktLvWWO0T4I3wSFiXuO9SjCpeMC10RClH7GTiNv7wB2AY188CHLtnYZp43f0lGF4mGaxFXVrKrtqBNYNq6gpVV0kKM5OcfwV%2FyF6NLLEiJL%2FTNmCb3s%2BvWP3mWUXK%2BG%2FTljn5EPgw6B1UKJ0B4OVl5YNlLrQyltMlyF6GnMM5NphWNp%2FVyIXrNFZPwtsFVySsPqlqKKogzl%2BloLFzdnrKnH0H80sxHfqD7BDXiek%2BabdGAKl0l8OoJYy6xDsh1ImsPzkXdn9QRqetao%2Fs1zQNn1U4P9C22zt1cXn4pbnpMIX9U%2FK%2ByJiLWD2bh4w7oXawwY6pgFzvjzCKoMGAd52%2BOBWutr9YqnY2f5CCwOJK2s0C2Ua9geKpq0NxkvF%2F9Il%2BDaF2nudBSUBNfZQozYlIX7lGU%2F6SAdyDdvXKNeUevksrjKNHRWdhsCnXx%2FihPqmRSeWlRFMBCHfonbQ6IKbWhthQ6iUpck85R6VOqgoHGduQv9Um7xBuHgvxNQ0Nsn3K%2B4C6U7HAbY48C1KUvXDLj6pNxJI7k61Ua2F&X-Amz-Signature=ddf3d67142bffb5a25d90769e7e9db590eaa26a58867ade527637f6cc2b6954b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFTVU7A6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAtUeWaDeue3zbAaL8aBYI3YqX1MBbcI4p2aSFfTrTNVAiBSXztCCpaaSpdcJrhNcFbtQEmSRXEDuZs5KQuJ8QvwhSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMBcWO5iHdhO5n7yyJKtwDkj0ar5C57uWQF6bJbo1awDTuFpm8WCGtbtlfP9aYJW7KLim6OXUiRCHZZEo2uMGNpYTGVvrqe06iTkyKZAF1v5gmWahgtNWsraydBuLMdQpmJQB7bX3u6otxQjzuBec7ARLyrsxBVEXm3xrNChgnoI%2BOrpmYh38i0Vj6dyi7RxTLl4YVMvQf2CGc%2BV8z15wyigKm1Exs7mQgq9ElibiAE%2FHahjZsuhf8WPMr8IV%2BcLnqu0t8bhVi%2F7m4HQ96G6xq2Hkq6C6exU9wCIwqgkgCjph97gSUi2jsr57E1C7Lxw5gdDwcJLGaLOHYI7EPnr5uktLvWWO0T4I3wSFiXuO9SjCpeMC10RClH7GTiNv7wB2AY188CHLtnYZp43f0lGF4mGaxFXVrKrtqBNYNq6gpVV0kKM5OcfwV%2FyF6NLLEiJL%2FTNmCb3s%2BvWP3mWUXK%2BG%2FTljn5EPgw6B1UKJ0B4OVl5YNlLrQyltMlyF6GnMM5NphWNp%2FVyIXrNFZPwtsFVySsPqlqKKogzl%2BloLFzdnrKnH0H80sxHfqD7BDXiek%2BabdGAKl0l8OoJYy6xDsh1ImsPzkXdn9QRqetao%2Fs1zQNn1U4P9C22zt1cXn4pbnpMIX9U%2FK%2ByJiLWD2bh4w7oXawwY6pgFzvjzCKoMGAd52%2BOBWutr9YqnY2f5CCwOJK2s0C2Ua9geKpq0NxkvF%2F9Il%2BDaF2nudBSUBNfZQozYlIX7lGU%2F6SAdyDdvXKNeUevksrjKNHRWdhsCnXx%2FihPqmRSeWlRFMBCHfonbQ6IKbWhthQ6iUpck85R6VOqgoHGduQv9Um7xBuHgvxNQ0Nsn3K%2B4C6U7HAbY48C1KUvXDLj6pNxJI7k61Ua2F&X-Amz-Signature=aaa25347cd8e82578b77a2dbfbe6dbbe1027f79647db77c5d6e9a196d810a958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFTVU7A6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAtUeWaDeue3zbAaL8aBYI3YqX1MBbcI4p2aSFfTrTNVAiBSXztCCpaaSpdcJrhNcFbtQEmSRXEDuZs5KQuJ8QvwhSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMBcWO5iHdhO5n7yyJKtwDkj0ar5C57uWQF6bJbo1awDTuFpm8WCGtbtlfP9aYJW7KLim6OXUiRCHZZEo2uMGNpYTGVvrqe06iTkyKZAF1v5gmWahgtNWsraydBuLMdQpmJQB7bX3u6otxQjzuBec7ARLyrsxBVEXm3xrNChgnoI%2BOrpmYh38i0Vj6dyi7RxTLl4YVMvQf2CGc%2BV8z15wyigKm1Exs7mQgq9ElibiAE%2FHahjZsuhf8WPMr8IV%2BcLnqu0t8bhVi%2F7m4HQ96G6xq2Hkq6C6exU9wCIwqgkgCjph97gSUi2jsr57E1C7Lxw5gdDwcJLGaLOHYI7EPnr5uktLvWWO0T4I3wSFiXuO9SjCpeMC10RClH7GTiNv7wB2AY188CHLtnYZp43f0lGF4mGaxFXVrKrtqBNYNq6gpVV0kKM5OcfwV%2FyF6NLLEiJL%2FTNmCb3s%2BvWP3mWUXK%2BG%2FTljn5EPgw6B1UKJ0B4OVl5YNlLrQyltMlyF6GnMM5NphWNp%2FVyIXrNFZPwtsFVySsPqlqKKogzl%2BloLFzdnrKnH0H80sxHfqD7BDXiek%2BabdGAKl0l8OoJYy6xDsh1ImsPzkXdn9QRqetao%2Fs1zQNn1U4P9C22zt1cXn4pbnpMIX9U%2FK%2ByJiLWD2bh4w7oXawwY6pgFzvjzCKoMGAd52%2BOBWutr9YqnY2f5CCwOJK2s0C2Ua9geKpq0NxkvF%2F9Il%2BDaF2nudBSUBNfZQozYlIX7lGU%2F6SAdyDdvXKNeUevksrjKNHRWdhsCnXx%2FihPqmRSeWlRFMBCHfonbQ6IKbWhthQ6iUpck85R6VOqgoHGduQv9Um7xBuHgvxNQ0Nsn3K%2B4C6U7HAbY48C1KUvXDLj6pNxJI7k61Ua2F&X-Amz-Signature=01acd00c5c50d39a7fa35c7c50aa9ef8fc4ce7184495d3e7432df37d824aa745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFTVU7A6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAtUeWaDeue3zbAaL8aBYI3YqX1MBbcI4p2aSFfTrTNVAiBSXztCCpaaSpdcJrhNcFbtQEmSRXEDuZs5KQuJ8QvwhSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMBcWO5iHdhO5n7yyJKtwDkj0ar5C57uWQF6bJbo1awDTuFpm8WCGtbtlfP9aYJW7KLim6OXUiRCHZZEo2uMGNpYTGVvrqe06iTkyKZAF1v5gmWahgtNWsraydBuLMdQpmJQB7bX3u6otxQjzuBec7ARLyrsxBVEXm3xrNChgnoI%2BOrpmYh38i0Vj6dyi7RxTLl4YVMvQf2CGc%2BV8z15wyigKm1Exs7mQgq9ElibiAE%2FHahjZsuhf8WPMr8IV%2BcLnqu0t8bhVi%2F7m4HQ96G6xq2Hkq6C6exU9wCIwqgkgCjph97gSUi2jsr57E1C7Lxw5gdDwcJLGaLOHYI7EPnr5uktLvWWO0T4I3wSFiXuO9SjCpeMC10RClH7GTiNv7wB2AY188CHLtnYZp43f0lGF4mGaxFXVrKrtqBNYNq6gpVV0kKM5OcfwV%2FyF6NLLEiJL%2FTNmCb3s%2BvWP3mWUXK%2BG%2FTljn5EPgw6B1UKJ0B4OVl5YNlLrQyltMlyF6GnMM5NphWNp%2FVyIXrNFZPwtsFVySsPqlqKKogzl%2BloLFzdnrKnH0H80sxHfqD7BDXiek%2BabdGAKl0l8OoJYy6xDsh1ImsPzkXdn9QRqetao%2Fs1zQNn1U4P9C22zt1cXn4pbnpMIX9U%2FK%2ByJiLWD2bh4w7oXawwY6pgFzvjzCKoMGAd52%2BOBWutr9YqnY2f5CCwOJK2s0C2Ua9geKpq0NxkvF%2F9Il%2BDaF2nudBSUBNfZQozYlIX7lGU%2F6SAdyDdvXKNeUevksrjKNHRWdhsCnXx%2FihPqmRSeWlRFMBCHfonbQ6IKbWhthQ6iUpck85R6VOqgoHGduQv9Um7xBuHgvxNQ0Nsn3K%2B4C6U7HAbY48C1KUvXDLj6pNxJI7k61Ua2F&X-Amz-Signature=ccd69cbd0e7266a0769ec3717573ca122c7cc02886cad3d22df9836d326699b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFTVU7A6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAtUeWaDeue3zbAaL8aBYI3YqX1MBbcI4p2aSFfTrTNVAiBSXztCCpaaSpdcJrhNcFbtQEmSRXEDuZs5KQuJ8QvwhSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMBcWO5iHdhO5n7yyJKtwDkj0ar5C57uWQF6bJbo1awDTuFpm8WCGtbtlfP9aYJW7KLim6OXUiRCHZZEo2uMGNpYTGVvrqe06iTkyKZAF1v5gmWahgtNWsraydBuLMdQpmJQB7bX3u6otxQjzuBec7ARLyrsxBVEXm3xrNChgnoI%2BOrpmYh38i0Vj6dyi7RxTLl4YVMvQf2CGc%2BV8z15wyigKm1Exs7mQgq9ElibiAE%2FHahjZsuhf8WPMr8IV%2BcLnqu0t8bhVi%2F7m4HQ96G6xq2Hkq6C6exU9wCIwqgkgCjph97gSUi2jsr57E1C7Lxw5gdDwcJLGaLOHYI7EPnr5uktLvWWO0T4I3wSFiXuO9SjCpeMC10RClH7GTiNv7wB2AY188CHLtnYZp43f0lGF4mGaxFXVrKrtqBNYNq6gpVV0kKM5OcfwV%2FyF6NLLEiJL%2FTNmCb3s%2BvWP3mWUXK%2BG%2FTljn5EPgw6B1UKJ0B4OVl5YNlLrQyltMlyF6GnMM5NphWNp%2FVyIXrNFZPwtsFVySsPqlqKKogzl%2BloLFzdnrKnH0H80sxHfqD7BDXiek%2BabdGAKl0l8OoJYy6xDsh1ImsPzkXdn9QRqetao%2Fs1zQNn1U4P9C22zt1cXn4pbnpMIX9U%2FK%2ByJiLWD2bh4w7oXawwY6pgFzvjzCKoMGAd52%2BOBWutr9YqnY2f5CCwOJK2s0C2Ua9geKpq0NxkvF%2F9Il%2BDaF2nudBSUBNfZQozYlIX7lGU%2F6SAdyDdvXKNeUevksrjKNHRWdhsCnXx%2FihPqmRSeWlRFMBCHfonbQ6IKbWhthQ6iUpck85R6VOqgoHGduQv9Um7xBuHgvxNQ0Nsn3K%2B4C6U7HAbY48C1KUvXDLj6pNxJI7k61Ua2F&X-Amz-Signature=284123c0c1faec3d07397acc8265f2375b40bf91343091509abef8b77d6472d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
