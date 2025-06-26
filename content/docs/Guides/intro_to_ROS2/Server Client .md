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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQX4WKI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQD2sbRz0kHp%2BvrutSkzqxooj8oCC2HGpyLGhprU6vod%2BgIhAKy49rzP9HtKvwX1KWxryUO6U%2BRJ2kzi8FckHHWtJm1WKv8DCF8QABoMNjM3NDIzMTgzODA1IgxUAcFBsgaL2AnRrz4q3AP9bTgR0MtAXI4OL1K6Zrttdk09BxUq%2B89W18a9znfiavELFtPZOqM8clZix8Z%2FKfA1naIb8CiVsUV97CZX4P34qSwYzZQJM3o%2FvT78SEWh8mH%2B5LCAZEJGhycjRcqhihHrgVK28cO3RAnXnlIagkzjSVJVS6MwT2Qy1sqFDzYZzb%2BFApeLbZ%2B3MZHfMGuWZC1BQdAyeoiEQ%2FsxWNV84eGZY5jPkaOBA0Y6A0dlvmvzQ9VFKOzQgJuPU8PlSM3RVEQ0uwe695K1yuZOEwqexrNy%2B6Zkt1fekq3%2Ff1cZrvbeWWcKEAIm2zLJgEBNiae%2BN47cMGyL0RqOtkY3tGeC6zDycOTPEoxH7IwbzGYOAwwKuTT0aIABtsRxmHwM0A8HxBnbXeVwZEp00SI0JW4TxIW9hqDWR4w%2FjQUMbTxit6t%2FLfcXCShZBkIw64tNBj1AWmTSEDSJ3JXtH3b%2F5cL8dc4w7DezXQmuCt2GQUDdZaOqEZbEuzXyU8fHciZnsS5TCD%2Fqr7Rob%2F%2FGzAgGaA0jAQXSvYHqftnhYq1rNSpCExEz88nUQbqI6FLwi%2FCj7U2gIdPGttLW54H8Y8gF28aqjHfGC9xKcihPgXPbQJ4TaTyIDkbGSBH2X36uc5nBBDDSm%2FXCBjqkAY%2BeNMoyZ2ctKZImeR0drncRBnX3%2F3heBqL%2BbWXTGouFE74W4xrok8Wz78sqk57HdECrfTXgLrMugPQ20QLO0qPeMqfwsbD%2BP3AJriNKU7IF%2BUDZi55wgIFXA1DC9q6J5C0JBRXP1rzoVgDPzp5BSif%2BwDB4EQaj5mOIx1EbUm5uOWTzsM8JoYOw%2B0G0ioufTo5bBUE0FeNYVoDOYqDLjM3deBIX&X-Amz-Signature=5b33dd3f56ada2d666a3d62b60e8de3d0b32e2f53dfe3ecf44558446d2ae8aac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQX4WKI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQD2sbRz0kHp%2BvrutSkzqxooj8oCC2HGpyLGhprU6vod%2BgIhAKy49rzP9HtKvwX1KWxryUO6U%2BRJ2kzi8FckHHWtJm1WKv8DCF8QABoMNjM3NDIzMTgzODA1IgxUAcFBsgaL2AnRrz4q3AP9bTgR0MtAXI4OL1K6Zrttdk09BxUq%2B89W18a9znfiavELFtPZOqM8clZix8Z%2FKfA1naIb8CiVsUV97CZX4P34qSwYzZQJM3o%2FvT78SEWh8mH%2B5LCAZEJGhycjRcqhihHrgVK28cO3RAnXnlIagkzjSVJVS6MwT2Qy1sqFDzYZzb%2BFApeLbZ%2B3MZHfMGuWZC1BQdAyeoiEQ%2FsxWNV84eGZY5jPkaOBA0Y6A0dlvmvzQ9VFKOzQgJuPU8PlSM3RVEQ0uwe695K1yuZOEwqexrNy%2B6Zkt1fekq3%2Ff1cZrvbeWWcKEAIm2zLJgEBNiae%2BN47cMGyL0RqOtkY3tGeC6zDycOTPEoxH7IwbzGYOAwwKuTT0aIABtsRxmHwM0A8HxBnbXeVwZEp00SI0JW4TxIW9hqDWR4w%2FjQUMbTxit6t%2FLfcXCShZBkIw64tNBj1AWmTSEDSJ3JXtH3b%2F5cL8dc4w7DezXQmuCt2GQUDdZaOqEZbEuzXyU8fHciZnsS5TCD%2Fqr7Rob%2F%2FGzAgGaA0jAQXSvYHqftnhYq1rNSpCExEz88nUQbqI6FLwi%2FCj7U2gIdPGttLW54H8Y8gF28aqjHfGC9xKcihPgXPbQJ4TaTyIDkbGSBH2X36uc5nBBDDSm%2FXCBjqkAY%2BeNMoyZ2ctKZImeR0drncRBnX3%2F3heBqL%2BbWXTGouFE74W4xrok8Wz78sqk57HdECrfTXgLrMugPQ20QLO0qPeMqfwsbD%2BP3AJriNKU7IF%2BUDZi55wgIFXA1DC9q6J5C0JBRXP1rzoVgDPzp5BSif%2BwDB4EQaj5mOIx1EbUm5uOWTzsM8JoYOw%2B0G0ioufTo5bBUE0FeNYVoDOYqDLjM3deBIX&X-Amz-Signature=0c36b2d92a8b92c853f5953e7acde0ffb6d2e3a2c283bbf823f5cbb77a9ecf4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQX4WKI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQD2sbRz0kHp%2BvrutSkzqxooj8oCC2HGpyLGhprU6vod%2BgIhAKy49rzP9HtKvwX1KWxryUO6U%2BRJ2kzi8FckHHWtJm1WKv8DCF8QABoMNjM3NDIzMTgzODA1IgxUAcFBsgaL2AnRrz4q3AP9bTgR0MtAXI4OL1K6Zrttdk09BxUq%2B89W18a9znfiavELFtPZOqM8clZix8Z%2FKfA1naIb8CiVsUV97CZX4P34qSwYzZQJM3o%2FvT78SEWh8mH%2B5LCAZEJGhycjRcqhihHrgVK28cO3RAnXnlIagkzjSVJVS6MwT2Qy1sqFDzYZzb%2BFApeLbZ%2B3MZHfMGuWZC1BQdAyeoiEQ%2FsxWNV84eGZY5jPkaOBA0Y6A0dlvmvzQ9VFKOzQgJuPU8PlSM3RVEQ0uwe695K1yuZOEwqexrNy%2B6Zkt1fekq3%2Ff1cZrvbeWWcKEAIm2zLJgEBNiae%2BN47cMGyL0RqOtkY3tGeC6zDycOTPEoxH7IwbzGYOAwwKuTT0aIABtsRxmHwM0A8HxBnbXeVwZEp00SI0JW4TxIW9hqDWR4w%2FjQUMbTxit6t%2FLfcXCShZBkIw64tNBj1AWmTSEDSJ3JXtH3b%2F5cL8dc4w7DezXQmuCt2GQUDdZaOqEZbEuzXyU8fHciZnsS5TCD%2Fqr7Rob%2F%2FGzAgGaA0jAQXSvYHqftnhYq1rNSpCExEz88nUQbqI6FLwi%2FCj7U2gIdPGttLW54H8Y8gF28aqjHfGC9xKcihPgXPbQJ4TaTyIDkbGSBH2X36uc5nBBDDSm%2FXCBjqkAY%2BeNMoyZ2ctKZImeR0drncRBnX3%2F3heBqL%2BbWXTGouFE74W4xrok8Wz78sqk57HdECrfTXgLrMugPQ20QLO0qPeMqfwsbD%2BP3AJriNKU7IF%2BUDZi55wgIFXA1DC9q6J5C0JBRXP1rzoVgDPzp5BSif%2BwDB4EQaj5mOIx1EbUm5uOWTzsM8JoYOw%2B0G0ioufTo5bBUE0FeNYVoDOYqDLjM3deBIX&X-Amz-Signature=a1bbd25fa8dcc05eabe7f6040df1710abd3dd4660d38c5506330a8bb4cd13614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQX4WKI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQD2sbRz0kHp%2BvrutSkzqxooj8oCC2HGpyLGhprU6vod%2BgIhAKy49rzP9HtKvwX1KWxryUO6U%2BRJ2kzi8FckHHWtJm1WKv8DCF8QABoMNjM3NDIzMTgzODA1IgxUAcFBsgaL2AnRrz4q3AP9bTgR0MtAXI4OL1K6Zrttdk09BxUq%2B89W18a9znfiavELFtPZOqM8clZix8Z%2FKfA1naIb8CiVsUV97CZX4P34qSwYzZQJM3o%2FvT78SEWh8mH%2B5LCAZEJGhycjRcqhihHrgVK28cO3RAnXnlIagkzjSVJVS6MwT2Qy1sqFDzYZzb%2BFApeLbZ%2B3MZHfMGuWZC1BQdAyeoiEQ%2FsxWNV84eGZY5jPkaOBA0Y6A0dlvmvzQ9VFKOzQgJuPU8PlSM3RVEQ0uwe695K1yuZOEwqexrNy%2B6Zkt1fekq3%2Ff1cZrvbeWWcKEAIm2zLJgEBNiae%2BN47cMGyL0RqOtkY3tGeC6zDycOTPEoxH7IwbzGYOAwwKuTT0aIABtsRxmHwM0A8HxBnbXeVwZEp00SI0JW4TxIW9hqDWR4w%2FjQUMbTxit6t%2FLfcXCShZBkIw64tNBj1AWmTSEDSJ3JXtH3b%2F5cL8dc4w7DezXQmuCt2GQUDdZaOqEZbEuzXyU8fHciZnsS5TCD%2Fqr7Rob%2F%2FGzAgGaA0jAQXSvYHqftnhYq1rNSpCExEz88nUQbqI6FLwi%2FCj7U2gIdPGttLW54H8Y8gF28aqjHfGC9xKcihPgXPbQJ4TaTyIDkbGSBH2X36uc5nBBDDSm%2FXCBjqkAY%2BeNMoyZ2ctKZImeR0drncRBnX3%2F3heBqL%2BbWXTGouFE74W4xrok8Wz78sqk57HdECrfTXgLrMugPQ20QLO0qPeMqfwsbD%2BP3AJriNKU7IF%2BUDZi55wgIFXA1DC9q6J5C0JBRXP1rzoVgDPzp5BSif%2BwDB4EQaj5mOIx1EbUm5uOWTzsM8JoYOw%2B0G0ioufTo5bBUE0FeNYVoDOYqDLjM3deBIX&X-Amz-Signature=b9a336fc6acd233ed7be48efde52d5798bbd690f8e19c83b97b4088b6c7395fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQX4WKI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQD2sbRz0kHp%2BvrutSkzqxooj8oCC2HGpyLGhprU6vod%2BgIhAKy49rzP9HtKvwX1KWxryUO6U%2BRJ2kzi8FckHHWtJm1WKv8DCF8QABoMNjM3NDIzMTgzODA1IgxUAcFBsgaL2AnRrz4q3AP9bTgR0MtAXI4OL1K6Zrttdk09BxUq%2B89W18a9znfiavELFtPZOqM8clZix8Z%2FKfA1naIb8CiVsUV97CZX4P34qSwYzZQJM3o%2FvT78SEWh8mH%2B5LCAZEJGhycjRcqhihHrgVK28cO3RAnXnlIagkzjSVJVS6MwT2Qy1sqFDzYZzb%2BFApeLbZ%2B3MZHfMGuWZC1BQdAyeoiEQ%2FsxWNV84eGZY5jPkaOBA0Y6A0dlvmvzQ9VFKOzQgJuPU8PlSM3RVEQ0uwe695K1yuZOEwqexrNy%2B6Zkt1fekq3%2Ff1cZrvbeWWcKEAIm2zLJgEBNiae%2BN47cMGyL0RqOtkY3tGeC6zDycOTPEoxH7IwbzGYOAwwKuTT0aIABtsRxmHwM0A8HxBnbXeVwZEp00SI0JW4TxIW9hqDWR4w%2FjQUMbTxit6t%2FLfcXCShZBkIw64tNBj1AWmTSEDSJ3JXtH3b%2F5cL8dc4w7DezXQmuCt2GQUDdZaOqEZbEuzXyU8fHciZnsS5TCD%2Fqr7Rob%2F%2FGzAgGaA0jAQXSvYHqftnhYq1rNSpCExEz88nUQbqI6FLwi%2FCj7U2gIdPGttLW54H8Y8gF28aqjHfGC9xKcihPgXPbQJ4TaTyIDkbGSBH2X36uc5nBBDDSm%2FXCBjqkAY%2BeNMoyZ2ctKZImeR0drncRBnX3%2F3heBqL%2BbWXTGouFE74W4xrok8Wz78sqk57HdECrfTXgLrMugPQ20QLO0qPeMqfwsbD%2BP3AJriNKU7IF%2BUDZi55wgIFXA1DC9q6J5C0JBRXP1rzoVgDPzp5BSif%2BwDB4EQaj5mOIx1EbUm5uOWTzsM8JoYOw%2B0G0ioufTo5bBUE0FeNYVoDOYqDLjM3deBIX&X-Amz-Signature=f2d310b906f301fb89de55e274a6facc5992c3d6a8ea8c9b3391942361d125e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
