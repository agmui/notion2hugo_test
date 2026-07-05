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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYETABB3%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIENddi7c4HegX3V13NHOVRmQL4Pin0CPTzmcCwuOnuR9AiAb0w149C5Q9O%2BoTmbBC%2FF7wQ460wLLkZKmBJ8o%2BdeG3Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMMmRcprHmq%2BCH7Jq8KtwDlY64xwnMArakuGyt%2Fk7dP4l0eMRcVnv7xuqbmx3gN1vdSzQVJXUQkiJb8hqJ%2FAE4sgf0cGL7WXs73mUQAOSsOoYnGYqgayWxq5D%2BKsE73gEA9hhxGkQvCSKuHRh3k3AkQwSjb%2FclRUkMtZssbQFt3mfSwGnG%2BjmQU0LdQ8t2Uc51eM2OP%2FaYgZ%2FwOWrmmb3awyYubTq4XdptSfY4xefMjWfrONa%2BiMsvTQg5zFyYTyYKQh8dp9eQ022KJiSziGCdeLL1aZzw61DW5VUM8etlB252cfyXPPqhnbIv481niWjmG27nLpRP7GY8F5zAO9cwwSnHbKLSdZAm0BwSIv6K5C89a6MqWord3G07syAU5GoSOJVSXw14wHjY0ewxforxh6nDa0%2B0jmTk23DYr8SQ1iDtBVZaO7RNGZ1bEdunbCR%2FPxrWlmoRyqGEfJrhldoHntMZKaPEJ%2FXzP%2F3ukuMJD%2BwQ9Lq%2BZjapbi81gC8vHXmUZPkhIDS0wTyDkkk56Dzao0i0eWWeGa37vGl2fxwQTgugSuC%2FDtE60BfC39lJ2s7vs6RRtK9tXC3l6R0WLuIDFfHpI6k1LPKnBTE6lkBBcmFHZoPXc4q751jlLFS9dZxF26wrrQvrmHRST1Uw5oan0gY6pgG8PsNbgBb37Gv5UpdzzC2ScObONUWzlWE1hQvj6oykAliXTuYoQR2y%2B6pR2RtTthSh5xfCs3cX5F5bJOKDWSFdWI69WsxZuvgnV7ktJDx91xlIBvWjSBpOXid0q%2BKALZtI7SR2AklqmwKg8CJ4GjmUGChnbvktIAOhmlxMkplSPOJyunDagi8NrBlgk8Zcstbor3gIxb6Txtz6GD5W3idI9LsP7BOZ&X-Amz-Signature=ec20e80fece1d9aebfb53017290b3730de470509e2d7de1e181d95dc50a18db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYETABB3%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIENddi7c4HegX3V13NHOVRmQL4Pin0CPTzmcCwuOnuR9AiAb0w149C5Q9O%2BoTmbBC%2FF7wQ460wLLkZKmBJ8o%2BdeG3Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMMmRcprHmq%2BCH7Jq8KtwDlY64xwnMArakuGyt%2Fk7dP4l0eMRcVnv7xuqbmx3gN1vdSzQVJXUQkiJb8hqJ%2FAE4sgf0cGL7WXs73mUQAOSsOoYnGYqgayWxq5D%2BKsE73gEA9hhxGkQvCSKuHRh3k3AkQwSjb%2FclRUkMtZssbQFt3mfSwGnG%2BjmQU0LdQ8t2Uc51eM2OP%2FaYgZ%2FwOWrmmb3awyYubTq4XdptSfY4xefMjWfrONa%2BiMsvTQg5zFyYTyYKQh8dp9eQ022KJiSziGCdeLL1aZzw61DW5VUM8etlB252cfyXPPqhnbIv481niWjmG27nLpRP7GY8F5zAO9cwwSnHbKLSdZAm0BwSIv6K5C89a6MqWord3G07syAU5GoSOJVSXw14wHjY0ewxforxh6nDa0%2B0jmTk23DYr8SQ1iDtBVZaO7RNGZ1bEdunbCR%2FPxrWlmoRyqGEfJrhldoHntMZKaPEJ%2FXzP%2F3ukuMJD%2BwQ9Lq%2BZjapbi81gC8vHXmUZPkhIDS0wTyDkkk56Dzao0i0eWWeGa37vGl2fxwQTgugSuC%2FDtE60BfC39lJ2s7vs6RRtK9tXC3l6R0WLuIDFfHpI6k1LPKnBTE6lkBBcmFHZoPXc4q751jlLFS9dZxF26wrrQvrmHRST1Uw5oan0gY6pgG8PsNbgBb37Gv5UpdzzC2ScObONUWzlWE1hQvj6oykAliXTuYoQR2y%2B6pR2RtTthSh5xfCs3cX5F5bJOKDWSFdWI69WsxZuvgnV7ktJDx91xlIBvWjSBpOXid0q%2BKALZtI7SR2AklqmwKg8CJ4GjmUGChnbvktIAOhmlxMkplSPOJyunDagi8NrBlgk8Zcstbor3gIxb6Txtz6GD5W3idI9LsP7BOZ&X-Amz-Signature=b9fc92d6451e4cf4c832f144574ac1319692b1201cc38e7f8a10175a07e5f3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYETABB3%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIENddi7c4HegX3V13NHOVRmQL4Pin0CPTzmcCwuOnuR9AiAb0w149C5Q9O%2BoTmbBC%2FF7wQ460wLLkZKmBJ8o%2BdeG3Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMMmRcprHmq%2BCH7Jq8KtwDlY64xwnMArakuGyt%2Fk7dP4l0eMRcVnv7xuqbmx3gN1vdSzQVJXUQkiJb8hqJ%2FAE4sgf0cGL7WXs73mUQAOSsOoYnGYqgayWxq5D%2BKsE73gEA9hhxGkQvCSKuHRh3k3AkQwSjb%2FclRUkMtZssbQFt3mfSwGnG%2BjmQU0LdQ8t2Uc51eM2OP%2FaYgZ%2FwOWrmmb3awyYubTq4XdptSfY4xefMjWfrONa%2BiMsvTQg5zFyYTyYKQh8dp9eQ022KJiSziGCdeLL1aZzw61DW5VUM8etlB252cfyXPPqhnbIv481niWjmG27nLpRP7GY8F5zAO9cwwSnHbKLSdZAm0BwSIv6K5C89a6MqWord3G07syAU5GoSOJVSXw14wHjY0ewxforxh6nDa0%2B0jmTk23DYr8SQ1iDtBVZaO7RNGZ1bEdunbCR%2FPxrWlmoRyqGEfJrhldoHntMZKaPEJ%2FXzP%2F3ukuMJD%2BwQ9Lq%2BZjapbi81gC8vHXmUZPkhIDS0wTyDkkk56Dzao0i0eWWeGa37vGl2fxwQTgugSuC%2FDtE60BfC39lJ2s7vs6RRtK9tXC3l6R0WLuIDFfHpI6k1LPKnBTE6lkBBcmFHZoPXc4q751jlLFS9dZxF26wrrQvrmHRST1Uw5oan0gY6pgG8PsNbgBb37Gv5UpdzzC2ScObONUWzlWE1hQvj6oykAliXTuYoQR2y%2B6pR2RtTthSh5xfCs3cX5F5bJOKDWSFdWI69WsxZuvgnV7ktJDx91xlIBvWjSBpOXid0q%2BKALZtI7SR2AklqmwKg8CJ4GjmUGChnbvktIAOhmlxMkplSPOJyunDagi8NrBlgk8Zcstbor3gIxb6Txtz6GD5W3idI9LsP7BOZ&X-Amz-Signature=5a766a6004cd390867a6b61a6b74e696a5a6ae7cd65897985a97401c627c8b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYETABB3%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIENddi7c4HegX3V13NHOVRmQL4Pin0CPTzmcCwuOnuR9AiAb0w149C5Q9O%2BoTmbBC%2FF7wQ460wLLkZKmBJ8o%2BdeG3Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMMmRcprHmq%2BCH7Jq8KtwDlY64xwnMArakuGyt%2Fk7dP4l0eMRcVnv7xuqbmx3gN1vdSzQVJXUQkiJb8hqJ%2FAE4sgf0cGL7WXs73mUQAOSsOoYnGYqgayWxq5D%2BKsE73gEA9hhxGkQvCSKuHRh3k3AkQwSjb%2FclRUkMtZssbQFt3mfSwGnG%2BjmQU0LdQ8t2Uc51eM2OP%2FaYgZ%2FwOWrmmb3awyYubTq4XdptSfY4xefMjWfrONa%2BiMsvTQg5zFyYTyYKQh8dp9eQ022KJiSziGCdeLL1aZzw61DW5VUM8etlB252cfyXPPqhnbIv481niWjmG27nLpRP7GY8F5zAO9cwwSnHbKLSdZAm0BwSIv6K5C89a6MqWord3G07syAU5GoSOJVSXw14wHjY0ewxforxh6nDa0%2B0jmTk23DYr8SQ1iDtBVZaO7RNGZ1bEdunbCR%2FPxrWlmoRyqGEfJrhldoHntMZKaPEJ%2FXzP%2F3ukuMJD%2BwQ9Lq%2BZjapbi81gC8vHXmUZPkhIDS0wTyDkkk56Dzao0i0eWWeGa37vGl2fxwQTgugSuC%2FDtE60BfC39lJ2s7vs6RRtK9tXC3l6R0WLuIDFfHpI6k1LPKnBTE6lkBBcmFHZoPXc4q751jlLFS9dZxF26wrrQvrmHRST1Uw5oan0gY6pgG8PsNbgBb37Gv5UpdzzC2ScObONUWzlWE1hQvj6oykAliXTuYoQR2y%2B6pR2RtTthSh5xfCs3cX5F5bJOKDWSFdWI69WsxZuvgnV7ktJDx91xlIBvWjSBpOXid0q%2BKALZtI7SR2AklqmwKg8CJ4GjmUGChnbvktIAOhmlxMkplSPOJyunDagi8NrBlgk8Zcstbor3gIxb6Txtz6GD5W3idI9LsP7BOZ&X-Amz-Signature=ae8f81ba4fdc08fe8f4a902e2e82432f9c1ae6a5060c6808f2492b27054cee29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYETABB3%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIENddi7c4HegX3V13NHOVRmQL4Pin0CPTzmcCwuOnuR9AiAb0w149C5Q9O%2BoTmbBC%2FF7wQ460wLLkZKmBJ8o%2BdeG3Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMMmRcprHmq%2BCH7Jq8KtwDlY64xwnMArakuGyt%2Fk7dP4l0eMRcVnv7xuqbmx3gN1vdSzQVJXUQkiJb8hqJ%2FAE4sgf0cGL7WXs73mUQAOSsOoYnGYqgayWxq5D%2BKsE73gEA9hhxGkQvCSKuHRh3k3AkQwSjb%2FclRUkMtZssbQFt3mfSwGnG%2BjmQU0LdQ8t2Uc51eM2OP%2FaYgZ%2FwOWrmmb3awyYubTq4XdptSfY4xefMjWfrONa%2BiMsvTQg5zFyYTyYKQh8dp9eQ022KJiSziGCdeLL1aZzw61DW5VUM8etlB252cfyXPPqhnbIv481niWjmG27nLpRP7GY8F5zAO9cwwSnHbKLSdZAm0BwSIv6K5C89a6MqWord3G07syAU5GoSOJVSXw14wHjY0ewxforxh6nDa0%2B0jmTk23DYr8SQ1iDtBVZaO7RNGZ1bEdunbCR%2FPxrWlmoRyqGEfJrhldoHntMZKaPEJ%2FXzP%2F3ukuMJD%2BwQ9Lq%2BZjapbi81gC8vHXmUZPkhIDS0wTyDkkk56Dzao0i0eWWeGa37vGl2fxwQTgugSuC%2FDtE60BfC39lJ2s7vs6RRtK9tXC3l6R0WLuIDFfHpI6k1LPKnBTE6lkBBcmFHZoPXc4q751jlLFS9dZxF26wrrQvrmHRST1Uw5oan0gY6pgG8PsNbgBb37Gv5UpdzzC2ScObONUWzlWE1hQvj6oykAliXTuYoQR2y%2B6pR2RtTthSh5xfCs3cX5F5bJOKDWSFdWI69WsxZuvgnV7ktJDx91xlIBvWjSBpOXid0q%2BKALZtI7SR2AklqmwKg8CJ4GjmUGChnbvktIAOhmlxMkplSPOJyunDagi8NrBlgk8Zcstbor3gIxb6Txtz6GD5W3idI9LsP7BOZ&X-Amz-Signature=2abc1d4ed42a06056456c064fe5a34ef16059bb621690bdbfec325209adb8ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
