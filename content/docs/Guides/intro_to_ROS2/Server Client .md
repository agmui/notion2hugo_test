---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFJ5ZAG%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrmZMRZ%2FbMnbC%2BHN9IWCzWfulG8fgkeerShecoU9BnXAiBjODnVU3%2F1UhtN0bX8WOKUmFmdaFDk5SzfleA%2FPSAr%2FCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMHxe%2B25fpXS6LBViJKtwD9T%2BfZ1ztj37IfigQSIZG%2FNlOjEmoXVHFmtHcIGUyg0XIgsLZog0diGtU9RgYM%2F0qP4QyJj3FIx19io2qQP1GGNUnB9NV%2FBnF3Lo3vlzqgJsBL9B4jd7lnCoVqjD93oQdSN0vHhx13ROUBTlJs5hU4TqP3yxWiDiJaFbI0sSYxFV9VFt0GCfmD5MqT5HehrHgNTfWG7018Q1b3CZf2y%2BcYRIFt%2BHkinipszE%2FOi1xFhIiFK9KwMVaDkrHqtYorKVgIYhK3eSA%2FO5o36UxkhuGrYGy0PhGzPBW2WspaR3tFMEYt%2B9qZznpqM0XzikTvkDE50a3%2B9yTj5bNbLgl7vkIQ2sYjmMNh%2BiWE3zH0if9gXbeTc9t4XoaxGZchM469NjtbB0Rg30fNpLdTXO4%2F%2FxYg57FRA8dpqGn5lWdN6ru%2Bvip0oYrglGOUtUglJW1uox9PcBrQxiotEGG1PiaDFH3ySzr9To9bxj6J%2FiGOaje4edn%2BibEd0vJy4XFPhPJL7EeXvlkC6I0%2BRmHgvSIO4Fy48puxf3yJrAnn492Ac5FfhlZRuf7UgtJs%2B%2F%2F%2FxK7LgNaJ%2BxYQ4zjL%2B9zJG8Yt7XhzH5u5Epu6LjdBfYtS8b%2Bm0vf6GOfVr95yRn59EAwu6m2xwY6pgET2zKv09QakcrEEPVa3i6d0F4Ykt3Gd%2FA1zcF5LMFaJV0cEEe3BBJ1mctAzxbBfUML%2FpmvlR1JUZ8nKr6hCJa2NYCmB6nH6ah%2Fnt8vvK7L5ekdiNsfvavYfUaDqjmvkXZs5fkL0jZ9TwYPUYBJ%2FUEk7fx3%2FNYW0IFS4Bd2FW5WMB1ZNYnBHhg1i%2BXXlxklx294h20uLTh73Uyx4LSD4t2zLlfeh4Jy&X-Amz-Signature=be38e73f9582e26407baf3e7c9ed6ee20ee6023f6fea47b10c4c6e4a93aabd9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFJ5ZAG%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrmZMRZ%2FbMnbC%2BHN9IWCzWfulG8fgkeerShecoU9BnXAiBjODnVU3%2F1UhtN0bX8WOKUmFmdaFDk5SzfleA%2FPSAr%2FCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMHxe%2B25fpXS6LBViJKtwD9T%2BfZ1ztj37IfigQSIZG%2FNlOjEmoXVHFmtHcIGUyg0XIgsLZog0diGtU9RgYM%2F0qP4QyJj3FIx19io2qQP1GGNUnB9NV%2FBnF3Lo3vlzqgJsBL9B4jd7lnCoVqjD93oQdSN0vHhx13ROUBTlJs5hU4TqP3yxWiDiJaFbI0sSYxFV9VFt0GCfmD5MqT5HehrHgNTfWG7018Q1b3CZf2y%2BcYRIFt%2BHkinipszE%2FOi1xFhIiFK9KwMVaDkrHqtYorKVgIYhK3eSA%2FO5o36UxkhuGrYGy0PhGzPBW2WspaR3tFMEYt%2B9qZznpqM0XzikTvkDE50a3%2B9yTj5bNbLgl7vkIQ2sYjmMNh%2BiWE3zH0if9gXbeTc9t4XoaxGZchM469NjtbB0Rg30fNpLdTXO4%2F%2FxYg57FRA8dpqGn5lWdN6ru%2Bvip0oYrglGOUtUglJW1uox9PcBrQxiotEGG1PiaDFH3ySzr9To9bxj6J%2FiGOaje4edn%2BibEd0vJy4XFPhPJL7EeXvlkC6I0%2BRmHgvSIO4Fy48puxf3yJrAnn492Ac5FfhlZRuf7UgtJs%2B%2F%2F%2FxK7LgNaJ%2BxYQ4zjL%2B9zJG8Yt7XhzH5u5Epu6LjdBfYtS8b%2Bm0vf6GOfVr95yRn59EAwu6m2xwY6pgET2zKv09QakcrEEPVa3i6d0F4Ykt3Gd%2FA1zcF5LMFaJV0cEEe3BBJ1mctAzxbBfUML%2FpmvlR1JUZ8nKr6hCJa2NYCmB6nH6ah%2Fnt8vvK7L5ekdiNsfvavYfUaDqjmvkXZs5fkL0jZ9TwYPUYBJ%2FUEk7fx3%2FNYW0IFS4Bd2FW5WMB1ZNYnBHhg1i%2BXXlxklx294h20uLTh73Uyx4LSD4t2zLlfeh4Jy&X-Amz-Signature=de136a4bd18259770f4506823300209a0c00951b9e1f8a10ed2e25a709f4c4f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFJ5ZAG%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrmZMRZ%2FbMnbC%2BHN9IWCzWfulG8fgkeerShecoU9BnXAiBjODnVU3%2F1UhtN0bX8WOKUmFmdaFDk5SzfleA%2FPSAr%2FCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMHxe%2B25fpXS6LBViJKtwD9T%2BfZ1ztj37IfigQSIZG%2FNlOjEmoXVHFmtHcIGUyg0XIgsLZog0diGtU9RgYM%2F0qP4QyJj3FIx19io2qQP1GGNUnB9NV%2FBnF3Lo3vlzqgJsBL9B4jd7lnCoVqjD93oQdSN0vHhx13ROUBTlJs5hU4TqP3yxWiDiJaFbI0sSYxFV9VFt0GCfmD5MqT5HehrHgNTfWG7018Q1b3CZf2y%2BcYRIFt%2BHkinipszE%2FOi1xFhIiFK9KwMVaDkrHqtYorKVgIYhK3eSA%2FO5o36UxkhuGrYGy0PhGzPBW2WspaR3tFMEYt%2B9qZznpqM0XzikTvkDE50a3%2B9yTj5bNbLgl7vkIQ2sYjmMNh%2BiWE3zH0if9gXbeTc9t4XoaxGZchM469NjtbB0Rg30fNpLdTXO4%2F%2FxYg57FRA8dpqGn5lWdN6ru%2Bvip0oYrglGOUtUglJW1uox9PcBrQxiotEGG1PiaDFH3ySzr9To9bxj6J%2FiGOaje4edn%2BibEd0vJy4XFPhPJL7EeXvlkC6I0%2BRmHgvSIO4Fy48puxf3yJrAnn492Ac5FfhlZRuf7UgtJs%2B%2F%2F%2FxK7LgNaJ%2BxYQ4zjL%2B9zJG8Yt7XhzH5u5Epu6LjdBfYtS8b%2Bm0vf6GOfVr95yRn59EAwu6m2xwY6pgET2zKv09QakcrEEPVa3i6d0F4Ykt3Gd%2FA1zcF5LMFaJV0cEEe3BBJ1mctAzxbBfUML%2FpmvlR1JUZ8nKr6hCJa2NYCmB6nH6ah%2Fnt8vvK7L5ekdiNsfvavYfUaDqjmvkXZs5fkL0jZ9TwYPUYBJ%2FUEk7fx3%2FNYW0IFS4Bd2FW5WMB1ZNYnBHhg1i%2BXXlxklx294h20uLTh73Uyx4LSD4t2zLlfeh4Jy&X-Amz-Signature=d327a7c58e4a0bb6f102c0fa0f2ba406bdd0b28a52e0c55a1aa6e3e4dc3384fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFJ5ZAG%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrmZMRZ%2FbMnbC%2BHN9IWCzWfulG8fgkeerShecoU9BnXAiBjODnVU3%2F1UhtN0bX8WOKUmFmdaFDk5SzfleA%2FPSAr%2FCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMHxe%2B25fpXS6LBViJKtwD9T%2BfZ1ztj37IfigQSIZG%2FNlOjEmoXVHFmtHcIGUyg0XIgsLZog0diGtU9RgYM%2F0qP4QyJj3FIx19io2qQP1GGNUnB9NV%2FBnF3Lo3vlzqgJsBL9B4jd7lnCoVqjD93oQdSN0vHhx13ROUBTlJs5hU4TqP3yxWiDiJaFbI0sSYxFV9VFt0GCfmD5MqT5HehrHgNTfWG7018Q1b3CZf2y%2BcYRIFt%2BHkinipszE%2FOi1xFhIiFK9KwMVaDkrHqtYorKVgIYhK3eSA%2FO5o36UxkhuGrYGy0PhGzPBW2WspaR3tFMEYt%2B9qZznpqM0XzikTvkDE50a3%2B9yTj5bNbLgl7vkIQ2sYjmMNh%2BiWE3zH0if9gXbeTc9t4XoaxGZchM469NjtbB0Rg30fNpLdTXO4%2F%2FxYg57FRA8dpqGn5lWdN6ru%2Bvip0oYrglGOUtUglJW1uox9PcBrQxiotEGG1PiaDFH3ySzr9To9bxj6J%2FiGOaje4edn%2BibEd0vJy4XFPhPJL7EeXvlkC6I0%2BRmHgvSIO4Fy48puxf3yJrAnn492Ac5FfhlZRuf7UgtJs%2B%2F%2F%2FxK7LgNaJ%2BxYQ4zjL%2B9zJG8Yt7XhzH5u5Epu6LjdBfYtS8b%2Bm0vf6GOfVr95yRn59EAwu6m2xwY6pgET2zKv09QakcrEEPVa3i6d0F4Ykt3Gd%2FA1zcF5LMFaJV0cEEe3BBJ1mctAzxbBfUML%2FpmvlR1JUZ8nKr6hCJa2NYCmB6nH6ah%2Fnt8vvK7L5ekdiNsfvavYfUaDqjmvkXZs5fkL0jZ9TwYPUYBJ%2FUEk7fx3%2FNYW0IFS4Bd2FW5WMB1ZNYnBHhg1i%2BXXlxklx294h20uLTh73Uyx4LSD4t2zLlfeh4Jy&X-Amz-Signature=25547dabc673cea3c9a4e68087ff72095da2385533ab28ea00e610444187ceef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFJ5ZAG%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrmZMRZ%2FbMnbC%2BHN9IWCzWfulG8fgkeerShecoU9BnXAiBjODnVU3%2F1UhtN0bX8WOKUmFmdaFDk5SzfleA%2FPSAr%2FCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMHxe%2B25fpXS6LBViJKtwD9T%2BfZ1ztj37IfigQSIZG%2FNlOjEmoXVHFmtHcIGUyg0XIgsLZog0diGtU9RgYM%2F0qP4QyJj3FIx19io2qQP1GGNUnB9NV%2FBnF3Lo3vlzqgJsBL9B4jd7lnCoVqjD93oQdSN0vHhx13ROUBTlJs5hU4TqP3yxWiDiJaFbI0sSYxFV9VFt0GCfmD5MqT5HehrHgNTfWG7018Q1b3CZf2y%2BcYRIFt%2BHkinipszE%2FOi1xFhIiFK9KwMVaDkrHqtYorKVgIYhK3eSA%2FO5o36UxkhuGrYGy0PhGzPBW2WspaR3tFMEYt%2B9qZznpqM0XzikTvkDE50a3%2B9yTj5bNbLgl7vkIQ2sYjmMNh%2BiWE3zH0if9gXbeTc9t4XoaxGZchM469NjtbB0Rg30fNpLdTXO4%2F%2FxYg57FRA8dpqGn5lWdN6ru%2Bvip0oYrglGOUtUglJW1uox9PcBrQxiotEGG1PiaDFH3ySzr9To9bxj6J%2FiGOaje4edn%2BibEd0vJy4XFPhPJL7EeXvlkC6I0%2BRmHgvSIO4Fy48puxf3yJrAnn492Ac5FfhlZRuf7UgtJs%2B%2F%2F%2FxK7LgNaJ%2BxYQ4zjL%2B9zJG8Yt7XhzH5u5Epu6LjdBfYtS8b%2Bm0vf6GOfVr95yRn59EAwu6m2xwY6pgET2zKv09QakcrEEPVa3i6d0F4Ykt3Gd%2FA1zcF5LMFaJV0cEEe3BBJ1mctAzxbBfUML%2FpmvlR1JUZ8nKr6hCJa2NYCmB6nH6ah%2Fnt8vvK7L5ekdiNsfvavYfUaDqjmvkXZs5fkL0jZ9TwYPUYBJ%2FUEk7fx3%2FNYW0IFS4Bd2FW5WMB1ZNYnBHhg1i%2BXXlxklx294h20uLTh73Uyx4LSD4t2zLlfeh4Jy&X-Amz-Signature=327b8b0d9be8ea4daf4c8d2004e090d73a3fca5c35fe9786019337b7b9c88dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
