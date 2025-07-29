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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDMNDOQY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCA8HJLpsJAPN2FsiYiSmtdeKQWJq4AcZ8S3sQf3B7g3gIgNPxsvnopm0cHymzQ0pfu1eScG7ew2Vyu02qkVNdrH14qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIq5fKy6XjRGFhpPsyrcA6O%2FHR2BqlGUofoDpqdNeFHHl9hZPIF%2F8wkLStMhgPZG70%2F%2BtJBgEoQg8oIaCkzF4Zm8hL%2BBffWl3QR482a5e7qV54Xb6Nirv7tBz%2Fyzbwpvl4UGydpMn0mVa%2BAYVGOZu9U3bEguX0looZSYa1AQQZGbrcsIl1I%2FaatLrEsPcAblEC1MpBOTfi%2FjU8UNB82TmvffqfB%2FodqZQZ2mTP57yzr4xIk1iI0qkceYXJidJEgvCmROaHLSB8lv2bHJoM%2B5dvolNQqldepd%2BFHzELcDfalFaIjM%2FW10AiQBZvvPgcw5aY0yF9wW9xqfjKVrsMQk2UZtY3vKOm90uNPUiT26KZvGGK7ZyDlpSBSFxQeRWAfgQZGdeNALpBw%2B9764tajNb9whF8k5T1LixDybjBIDmwcIiTyQAzWV9ow5gkDUt4cd7Bd8h9RwDuOXr3oOE7cxIon9%2Bmme%2BjLI%2BfUCRyh8LRNF1uNLHFyl0eUjtOUydhmJ3CHK1TmMBGZHx0LiFRJ1uy%2BsrFAUsGCUl7plyOTnJNX2ozMKCk57%2Fs4c4oDxYeq4qJKu2GbiUgx9lXrCvpuojAzU3TRZHilTOWN5nIy6jdfemypodk5x17KYE%2BuISvyHj9Cni%2Ba7o%2BGYetw%2BMKvNoMQGOqUBf2gBwHChw4%2BhJQGYrBaRtH%2B5Pea%2FoB4qDE3uLRX8rfJhOJtYnzjxVVI2IcUQlp3OeHEgYZXSrgh%2FqTmJ5M0R%2FX61VnSN9xzvcWua3wZ0NAtIad9dJ3CUd5P0ohykzvrPJGSS4UuzByRCifClvPF3u313aid6tiRK1XL6D47jAYljZaFncZKJ6HajmMO%2BT%2FTVZtmKiS3nM2%2BFYtL0SPFq2vB48LRX&X-Amz-Signature=0eb97c1052d83119130d34806e986062a4b5d2a36b84715ac561c063d7b64bd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDMNDOQY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCA8HJLpsJAPN2FsiYiSmtdeKQWJq4AcZ8S3sQf3B7g3gIgNPxsvnopm0cHymzQ0pfu1eScG7ew2Vyu02qkVNdrH14qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIq5fKy6XjRGFhpPsyrcA6O%2FHR2BqlGUofoDpqdNeFHHl9hZPIF%2F8wkLStMhgPZG70%2F%2BtJBgEoQg8oIaCkzF4Zm8hL%2BBffWl3QR482a5e7qV54Xb6Nirv7tBz%2Fyzbwpvl4UGydpMn0mVa%2BAYVGOZu9U3bEguX0looZSYa1AQQZGbrcsIl1I%2FaatLrEsPcAblEC1MpBOTfi%2FjU8UNB82TmvffqfB%2FodqZQZ2mTP57yzr4xIk1iI0qkceYXJidJEgvCmROaHLSB8lv2bHJoM%2B5dvolNQqldepd%2BFHzELcDfalFaIjM%2FW10AiQBZvvPgcw5aY0yF9wW9xqfjKVrsMQk2UZtY3vKOm90uNPUiT26KZvGGK7ZyDlpSBSFxQeRWAfgQZGdeNALpBw%2B9764tajNb9whF8k5T1LixDybjBIDmwcIiTyQAzWV9ow5gkDUt4cd7Bd8h9RwDuOXr3oOE7cxIon9%2Bmme%2BjLI%2BfUCRyh8LRNF1uNLHFyl0eUjtOUydhmJ3CHK1TmMBGZHx0LiFRJ1uy%2BsrFAUsGCUl7plyOTnJNX2ozMKCk57%2Fs4c4oDxYeq4qJKu2GbiUgx9lXrCvpuojAzU3TRZHilTOWN5nIy6jdfemypodk5x17KYE%2BuISvyHj9Cni%2Ba7o%2BGYetw%2BMKvNoMQGOqUBf2gBwHChw4%2BhJQGYrBaRtH%2B5Pea%2FoB4qDE3uLRX8rfJhOJtYnzjxVVI2IcUQlp3OeHEgYZXSrgh%2FqTmJ5M0R%2FX61VnSN9xzvcWua3wZ0NAtIad9dJ3CUd5P0ohykzvrPJGSS4UuzByRCifClvPF3u313aid6tiRK1XL6D47jAYljZaFncZKJ6HajmMO%2BT%2FTVZtmKiS3nM2%2BFYtL0SPFq2vB48LRX&X-Amz-Signature=599687ae05e85dbe8f9565fca1d6466aaf361490a43206cad7ce4667902c2d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDMNDOQY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCA8HJLpsJAPN2FsiYiSmtdeKQWJq4AcZ8S3sQf3B7g3gIgNPxsvnopm0cHymzQ0pfu1eScG7ew2Vyu02qkVNdrH14qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIq5fKy6XjRGFhpPsyrcA6O%2FHR2BqlGUofoDpqdNeFHHl9hZPIF%2F8wkLStMhgPZG70%2F%2BtJBgEoQg8oIaCkzF4Zm8hL%2BBffWl3QR482a5e7qV54Xb6Nirv7tBz%2Fyzbwpvl4UGydpMn0mVa%2BAYVGOZu9U3bEguX0looZSYa1AQQZGbrcsIl1I%2FaatLrEsPcAblEC1MpBOTfi%2FjU8UNB82TmvffqfB%2FodqZQZ2mTP57yzr4xIk1iI0qkceYXJidJEgvCmROaHLSB8lv2bHJoM%2B5dvolNQqldepd%2BFHzELcDfalFaIjM%2FW10AiQBZvvPgcw5aY0yF9wW9xqfjKVrsMQk2UZtY3vKOm90uNPUiT26KZvGGK7ZyDlpSBSFxQeRWAfgQZGdeNALpBw%2B9764tajNb9whF8k5T1LixDybjBIDmwcIiTyQAzWV9ow5gkDUt4cd7Bd8h9RwDuOXr3oOE7cxIon9%2Bmme%2BjLI%2BfUCRyh8LRNF1uNLHFyl0eUjtOUydhmJ3CHK1TmMBGZHx0LiFRJ1uy%2BsrFAUsGCUl7plyOTnJNX2ozMKCk57%2Fs4c4oDxYeq4qJKu2GbiUgx9lXrCvpuojAzU3TRZHilTOWN5nIy6jdfemypodk5x17KYE%2BuISvyHj9Cni%2Ba7o%2BGYetw%2BMKvNoMQGOqUBf2gBwHChw4%2BhJQGYrBaRtH%2B5Pea%2FoB4qDE3uLRX8rfJhOJtYnzjxVVI2IcUQlp3OeHEgYZXSrgh%2FqTmJ5M0R%2FX61VnSN9xzvcWua3wZ0NAtIad9dJ3CUd5P0ohykzvrPJGSS4UuzByRCifClvPF3u313aid6tiRK1XL6D47jAYljZaFncZKJ6HajmMO%2BT%2FTVZtmKiS3nM2%2BFYtL0SPFq2vB48LRX&X-Amz-Signature=48c469901cb33e46899bc299ca51ce988c9c107a1fa3bd8a48e0b33c5ec80fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDMNDOQY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCA8HJLpsJAPN2FsiYiSmtdeKQWJq4AcZ8S3sQf3B7g3gIgNPxsvnopm0cHymzQ0pfu1eScG7ew2Vyu02qkVNdrH14qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIq5fKy6XjRGFhpPsyrcA6O%2FHR2BqlGUofoDpqdNeFHHl9hZPIF%2F8wkLStMhgPZG70%2F%2BtJBgEoQg8oIaCkzF4Zm8hL%2BBffWl3QR482a5e7qV54Xb6Nirv7tBz%2Fyzbwpvl4UGydpMn0mVa%2BAYVGOZu9U3bEguX0looZSYa1AQQZGbrcsIl1I%2FaatLrEsPcAblEC1MpBOTfi%2FjU8UNB82TmvffqfB%2FodqZQZ2mTP57yzr4xIk1iI0qkceYXJidJEgvCmROaHLSB8lv2bHJoM%2B5dvolNQqldepd%2BFHzELcDfalFaIjM%2FW10AiQBZvvPgcw5aY0yF9wW9xqfjKVrsMQk2UZtY3vKOm90uNPUiT26KZvGGK7ZyDlpSBSFxQeRWAfgQZGdeNALpBw%2B9764tajNb9whF8k5T1LixDybjBIDmwcIiTyQAzWV9ow5gkDUt4cd7Bd8h9RwDuOXr3oOE7cxIon9%2Bmme%2BjLI%2BfUCRyh8LRNF1uNLHFyl0eUjtOUydhmJ3CHK1TmMBGZHx0LiFRJ1uy%2BsrFAUsGCUl7plyOTnJNX2ozMKCk57%2Fs4c4oDxYeq4qJKu2GbiUgx9lXrCvpuojAzU3TRZHilTOWN5nIy6jdfemypodk5x17KYE%2BuISvyHj9Cni%2Ba7o%2BGYetw%2BMKvNoMQGOqUBf2gBwHChw4%2BhJQGYrBaRtH%2B5Pea%2FoB4qDE3uLRX8rfJhOJtYnzjxVVI2IcUQlp3OeHEgYZXSrgh%2FqTmJ5M0R%2FX61VnSN9xzvcWua3wZ0NAtIad9dJ3CUd5P0ohykzvrPJGSS4UuzByRCifClvPF3u313aid6tiRK1XL6D47jAYljZaFncZKJ6HajmMO%2BT%2FTVZtmKiS3nM2%2BFYtL0SPFq2vB48LRX&X-Amz-Signature=d1d9dfb8b51ebae8f3aeb962a128f20e895c38bcbe50ada3ac954fa2f48593d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDMNDOQY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCA8HJLpsJAPN2FsiYiSmtdeKQWJq4AcZ8S3sQf3B7g3gIgNPxsvnopm0cHymzQ0pfu1eScG7ew2Vyu02qkVNdrH14qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIq5fKy6XjRGFhpPsyrcA6O%2FHR2BqlGUofoDpqdNeFHHl9hZPIF%2F8wkLStMhgPZG70%2F%2BtJBgEoQg8oIaCkzF4Zm8hL%2BBffWl3QR482a5e7qV54Xb6Nirv7tBz%2Fyzbwpvl4UGydpMn0mVa%2BAYVGOZu9U3bEguX0looZSYa1AQQZGbrcsIl1I%2FaatLrEsPcAblEC1MpBOTfi%2FjU8UNB82TmvffqfB%2FodqZQZ2mTP57yzr4xIk1iI0qkceYXJidJEgvCmROaHLSB8lv2bHJoM%2B5dvolNQqldepd%2BFHzELcDfalFaIjM%2FW10AiQBZvvPgcw5aY0yF9wW9xqfjKVrsMQk2UZtY3vKOm90uNPUiT26KZvGGK7ZyDlpSBSFxQeRWAfgQZGdeNALpBw%2B9764tajNb9whF8k5T1LixDybjBIDmwcIiTyQAzWV9ow5gkDUt4cd7Bd8h9RwDuOXr3oOE7cxIon9%2Bmme%2BjLI%2BfUCRyh8LRNF1uNLHFyl0eUjtOUydhmJ3CHK1TmMBGZHx0LiFRJ1uy%2BsrFAUsGCUl7plyOTnJNX2ozMKCk57%2Fs4c4oDxYeq4qJKu2GbiUgx9lXrCvpuojAzU3TRZHilTOWN5nIy6jdfemypodk5x17KYE%2BuISvyHj9Cni%2Ba7o%2BGYetw%2BMKvNoMQGOqUBf2gBwHChw4%2BhJQGYrBaRtH%2B5Pea%2FoB4qDE3uLRX8rfJhOJtYnzjxVVI2IcUQlp3OeHEgYZXSrgh%2FqTmJ5M0R%2FX61VnSN9xzvcWua3wZ0NAtIad9dJ3CUd5P0ohykzvrPJGSS4UuzByRCifClvPF3u313aid6tiRK1XL6D47jAYljZaFncZKJ6HajmMO%2BT%2FTVZtmKiS3nM2%2BFYtL0SPFq2vB48LRX&X-Amz-Signature=acabd3cea5a5981988992331704059fe2726d1a63a713df00d620459028fab3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
