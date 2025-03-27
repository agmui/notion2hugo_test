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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466334IWL6W%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtLE5YpdUlPAu99cswSREgaYakEq4bDPBKHaD%2B1fFN2AiAe5JqAcdCf5nHhKvPXp9VUgJmwRCUQBFybEedVpeSGDSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMjmyf5nxYSrcAdYpAKtwD8ib1dmAjoQQOakqIhDg8Cr7%2BXV5z9CaUj%2FJ1fIMyGk3FH9Oi8XRjWvowYTdshnionG2OJCsmQ8rTNwU%2BZu6AM4KDQ68e3Jvku%2Ba%2BckjcvdxU81bBWryM3amPNJsVlTlcXQXVRuOt33x22tORXkwh63BdolWAga7yVAknXgV1egJx6mgFgcwDKQliwY8TnzY3QbY2CxLGUM69oCG2OlDh4mk3nJQaYLvFE0JrUiEvTiLJNew%2BmIUeTkBSlnYJz4nPdnBUo56cFqSM%2BsFiULhdFfcHnlzvG7hel7GRh0r0mrBEHmrVF%2FqK8dDbDdo9IWS1%2BMkb8d0iJil1ELdp7bcMWhJW1ttg%2B%2FvHksVPqPTqOhjNV3z9pz14%2BYHy3GmanIhPvoY3WKEx6aqROMam7tzxGbkskqOP1bPgVBK6kpPpvI%2F4gnrh0mUYQc%2Bp939dqpPjvhRekastsoom3cuj2TQiJawVrJ6Oe3Ss36PYVvoT4EdpKz%2FWJ4SPG1kDnFM71SoXolUQNUSVNw85oe1Vymfp%2F8PM9mDm71ULpzRJtcQeO5m%2Fvw7zq3nUolOqds0FLutuilvNywWK82xTXAr%2For63rixJqAT5MDHKVrLdcHXP0my2jYS5lzUwXOTxUBQwpuySvwY6pgGbKcgbbBE%2FCLpWt8lRUf92QV1dpftGwP4FOcN0Dj9NnQPViDlWzSvFp5vp6bUbrLYPKDRsVJEHMa33fV05C0YJHHhPdnPZzgCAChniBY1KJntsj6e%2FEGKFlIYnkC9nDWBDov0xNklnxYfsNy5z9B6%2BDyhU2Q6hIQpG1sW9NfUvsSTszPO%2BzM4NVMCNMBGBbKA6LcRdxkVyTpofYgB844dc%2BzeMCdqm&X-Amz-Signature=5be13440f1adf849a502a845769b0273ccbc60f1b5c3f0c4b2f8cc259a067d81&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466334IWL6W%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtLE5YpdUlPAu99cswSREgaYakEq4bDPBKHaD%2B1fFN2AiAe5JqAcdCf5nHhKvPXp9VUgJmwRCUQBFybEedVpeSGDSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMjmyf5nxYSrcAdYpAKtwD8ib1dmAjoQQOakqIhDg8Cr7%2BXV5z9CaUj%2FJ1fIMyGk3FH9Oi8XRjWvowYTdshnionG2OJCsmQ8rTNwU%2BZu6AM4KDQ68e3Jvku%2Ba%2BckjcvdxU81bBWryM3amPNJsVlTlcXQXVRuOt33x22tORXkwh63BdolWAga7yVAknXgV1egJx6mgFgcwDKQliwY8TnzY3QbY2CxLGUM69oCG2OlDh4mk3nJQaYLvFE0JrUiEvTiLJNew%2BmIUeTkBSlnYJz4nPdnBUo56cFqSM%2BsFiULhdFfcHnlzvG7hel7GRh0r0mrBEHmrVF%2FqK8dDbDdo9IWS1%2BMkb8d0iJil1ELdp7bcMWhJW1ttg%2B%2FvHksVPqPTqOhjNV3z9pz14%2BYHy3GmanIhPvoY3WKEx6aqROMam7tzxGbkskqOP1bPgVBK6kpPpvI%2F4gnrh0mUYQc%2Bp939dqpPjvhRekastsoom3cuj2TQiJawVrJ6Oe3Ss36PYVvoT4EdpKz%2FWJ4SPG1kDnFM71SoXolUQNUSVNw85oe1Vymfp%2F8PM9mDm71ULpzRJtcQeO5m%2Fvw7zq3nUolOqds0FLutuilvNywWK82xTXAr%2For63rixJqAT5MDHKVrLdcHXP0my2jYS5lzUwXOTxUBQwpuySvwY6pgGbKcgbbBE%2FCLpWt8lRUf92QV1dpftGwP4FOcN0Dj9NnQPViDlWzSvFp5vp6bUbrLYPKDRsVJEHMa33fV05C0YJHHhPdnPZzgCAChniBY1KJntsj6e%2FEGKFlIYnkC9nDWBDov0xNklnxYfsNy5z9B6%2BDyhU2Q6hIQpG1sW9NfUvsSTszPO%2BzM4NVMCNMBGBbKA6LcRdxkVyTpofYgB844dc%2BzeMCdqm&X-Amz-Signature=903898e820f2ac914797b32f59b58ff8a0a71f534370840a09a40e7affd594b3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466334IWL6W%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtLE5YpdUlPAu99cswSREgaYakEq4bDPBKHaD%2B1fFN2AiAe5JqAcdCf5nHhKvPXp9VUgJmwRCUQBFybEedVpeSGDSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMjmyf5nxYSrcAdYpAKtwD8ib1dmAjoQQOakqIhDg8Cr7%2BXV5z9CaUj%2FJ1fIMyGk3FH9Oi8XRjWvowYTdshnionG2OJCsmQ8rTNwU%2BZu6AM4KDQ68e3Jvku%2Ba%2BckjcvdxU81bBWryM3amPNJsVlTlcXQXVRuOt33x22tORXkwh63BdolWAga7yVAknXgV1egJx6mgFgcwDKQliwY8TnzY3QbY2CxLGUM69oCG2OlDh4mk3nJQaYLvFE0JrUiEvTiLJNew%2BmIUeTkBSlnYJz4nPdnBUo56cFqSM%2BsFiULhdFfcHnlzvG7hel7GRh0r0mrBEHmrVF%2FqK8dDbDdo9IWS1%2BMkb8d0iJil1ELdp7bcMWhJW1ttg%2B%2FvHksVPqPTqOhjNV3z9pz14%2BYHy3GmanIhPvoY3WKEx6aqROMam7tzxGbkskqOP1bPgVBK6kpPpvI%2F4gnrh0mUYQc%2Bp939dqpPjvhRekastsoom3cuj2TQiJawVrJ6Oe3Ss36PYVvoT4EdpKz%2FWJ4SPG1kDnFM71SoXolUQNUSVNw85oe1Vymfp%2F8PM9mDm71ULpzRJtcQeO5m%2Fvw7zq3nUolOqds0FLutuilvNywWK82xTXAr%2For63rixJqAT5MDHKVrLdcHXP0my2jYS5lzUwXOTxUBQwpuySvwY6pgGbKcgbbBE%2FCLpWt8lRUf92QV1dpftGwP4FOcN0Dj9NnQPViDlWzSvFp5vp6bUbrLYPKDRsVJEHMa33fV05C0YJHHhPdnPZzgCAChniBY1KJntsj6e%2FEGKFlIYnkC9nDWBDov0xNklnxYfsNy5z9B6%2BDyhU2Q6hIQpG1sW9NfUvsSTszPO%2BzM4NVMCNMBGBbKA6LcRdxkVyTpofYgB844dc%2BzeMCdqm&X-Amz-Signature=f05accd386508fc430ab79f212dd2f3e2169dc53d36bb0ce257c377255b27a86&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466334IWL6W%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtLE5YpdUlPAu99cswSREgaYakEq4bDPBKHaD%2B1fFN2AiAe5JqAcdCf5nHhKvPXp9VUgJmwRCUQBFybEedVpeSGDSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMjmyf5nxYSrcAdYpAKtwD8ib1dmAjoQQOakqIhDg8Cr7%2BXV5z9CaUj%2FJ1fIMyGk3FH9Oi8XRjWvowYTdshnionG2OJCsmQ8rTNwU%2BZu6AM4KDQ68e3Jvku%2Ba%2BckjcvdxU81bBWryM3amPNJsVlTlcXQXVRuOt33x22tORXkwh63BdolWAga7yVAknXgV1egJx6mgFgcwDKQliwY8TnzY3QbY2CxLGUM69oCG2OlDh4mk3nJQaYLvFE0JrUiEvTiLJNew%2BmIUeTkBSlnYJz4nPdnBUo56cFqSM%2BsFiULhdFfcHnlzvG7hel7GRh0r0mrBEHmrVF%2FqK8dDbDdo9IWS1%2BMkb8d0iJil1ELdp7bcMWhJW1ttg%2B%2FvHksVPqPTqOhjNV3z9pz14%2BYHy3GmanIhPvoY3WKEx6aqROMam7tzxGbkskqOP1bPgVBK6kpPpvI%2F4gnrh0mUYQc%2Bp939dqpPjvhRekastsoom3cuj2TQiJawVrJ6Oe3Ss36PYVvoT4EdpKz%2FWJ4SPG1kDnFM71SoXolUQNUSVNw85oe1Vymfp%2F8PM9mDm71ULpzRJtcQeO5m%2Fvw7zq3nUolOqds0FLutuilvNywWK82xTXAr%2For63rixJqAT5MDHKVrLdcHXP0my2jYS5lzUwXOTxUBQwpuySvwY6pgGbKcgbbBE%2FCLpWt8lRUf92QV1dpftGwP4FOcN0Dj9NnQPViDlWzSvFp5vp6bUbrLYPKDRsVJEHMa33fV05C0YJHHhPdnPZzgCAChniBY1KJntsj6e%2FEGKFlIYnkC9nDWBDov0xNklnxYfsNy5z9B6%2BDyhU2Q6hIQpG1sW9NfUvsSTszPO%2BzM4NVMCNMBGBbKA6LcRdxkVyTpofYgB844dc%2BzeMCdqm&X-Amz-Signature=1b875cd3591442c1a3f1cadea63dce88f3ec56b1b69ba520a27ea948ab69e75c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466334IWL6W%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtLE5YpdUlPAu99cswSREgaYakEq4bDPBKHaD%2B1fFN2AiAe5JqAcdCf5nHhKvPXp9VUgJmwRCUQBFybEedVpeSGDSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMjmyf5nxYSrcAdYpAKtwD8ib1dmAjoQQOakqIhDg8Cr7%2BXV5z9CaUj%2FJ1fIMyGk3FH9Oi8XRjWvowYTdshnionG2OJCsmQ8rTNwU%2BZu6AM4KDQ68e3Jvku%2Ba%2BckjcvdxU81bBWryM3amPNJsVlTlcXQXVRuOt33x22tORXkwh63BdolWAga7yVAknXgV1egJx6mgFgcwDKQliwY8TnzY3QbY2CxLGUM69oCG2OlDh4mk3nJQaYLvFE0JrUiEvTiLJNew%2BmIUeTkBSlnYJz4nPdnBUo56cFqSM%2BsFiULhdFfcHnlzvG7hel7GRh0r0mrBEHmrVF%2FqK8dDbDdo9IWS1%2BMkb8d0iJil1ELdp7bcMWhJW1ttg%2B%2FvHksVPqPTqOhjNV3z9pz14%2BYHy3GmanIhPvoY3WKEx6aqROMam7tzxGbkskqOP1bPgVBK6kpPpvI%2F4gnrh0mUYQc%2Bp939dqpPjvhRekastsoom3cuj2TQiJawVrJ6Oe3Ss36PYVvoT4EdpKz%2FWJ4SPG1kDnFM71SoXolUQNUSVNw85oe1Vymfp%2F8PM9mDm71ULpzRJtcQeO5m%2Fvw7zq3nUolOqds0FLutuilvNywWK82xTXAr%2For63rixJqAT5MDHKVrLdcHXP0my2jYS5lzUwXOTxUBQwpuySvwY6pgGbKcgbbBE%2FCLpWt8lRUf92QV1dpftGwP4FOcN0Dj9NnQPViDlWzSvFp5vp6bUbrLYPKDRsVJEHMa33fV05C0YJHHhPdnPZzgCAChniBY1KJntsj6e%2FEGKFlIYnkC9nDWBDov0xNklnxYfsNy5z9B6%2BDyhU2Q6hIQpG1sW9NfUvsSTszPO%2BzM4NVMCNMBGBbKA6LcRdxkVyTpofYgB844dc%2BzeMCdqm&X-Amz-Signature=0b6bc575431f4a28717447070c1bfa5d22c8b1daea7c9332f6b8e4f62aeb2d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
