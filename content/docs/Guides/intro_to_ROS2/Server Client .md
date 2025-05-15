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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624QMX62U%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIF4tHlYW%2F9B7REhlvuFk8jlUmncm5cAQNGtVFiJvqzDVAiEA809PSapO%2Fhu73pVcy%2FNAM4GD2TamMGOK3p%2F4go%2FnQRYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPk%2F0H7bn3PUuw3iyyrcA0DM8fSt9a4xk0yhpYdjTurWjrBOQk2GlZ0ZpgcDk1Gz%2FTR1WnRHBz1v%2FTqEiF6pBXrjEatTH0ysYBt5z%2Fk4R2D5MayW3u%2F%2B4A%2F24Lx779mLZ5Gks7j1WnqaJUZf%2FCZl%2F7EGCbz8W%2Fevgv%2B62IvA9Vka%2BWEb6LUN1anM3gLKOaJUsgr%2BusrwRhm5WPamGT3e6BODWdqQlVg2zQq33foPvQS7RdzDIMtpnk%2BY%2BQRu4dqpzShkYcGE9YPqgHY7LgTgkFHDz8%2BWUfLDeU3QAyaEaXkthIXHNXnnhPiJl6OwG5EKVvS5SB2OAKnUc27EBpnOicBQO%2B7Xyxf383aKbeQl%2B%2ByZ2pNzw%2FgP%2BYKzHMwE9f7F7VIEYF1lIeZ06BCnUKBT%2Ba%2BJgVQfuWJMBosJWfpG6q8iln3lH0XkmIOfIxLNwDdkCc6psy7WROCNQutsaeeXsUv0p7EzsIxXPhdnxsgWnlwxDJV0HT6%2BDNCpfDTmCOXkNWHTiQEFUlOCRdyc0H4Xwjajxg1MDUceoHT122r7nqrgoX%2F89veSMbwCCHqzAoe2k19lJnhcR31U%2BTFf%2BgCQA2ihuU8DFnUWmFD0AO0Arr724KK9J%2FTGhLwb0f6xY%2BaYKLuTzWHNe2gdkXFuMLnEmMEGOqUBcw8nif5sznsm2iJA%2F1GNFFnh676HY%2FTHQ5pC0cDTerk%2FdLuCl9NRXY1tejh9WZIXCP7HJc%2FfHeskUtq7IN%2BsNyFVoyex5oRFsdZJVztcWjdQcC2warSbj%2BibSoK9E1KVXpUihtMYrzDJk3eVSvrQ3a%2FzL%2BcYDbMf8GAPSUp3YisIIzAH5uYrY1Iust9ooG8WNSOWOgAPjPaDPBHydx3Mwxe8uQsy&X-Amz-Signature=f573fa4eb3f8900333c4c63809e3030f77717df6a1122a2de54b37f5bcebe621&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624QMX62U%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIF4tHlYW%2F9B7REhlvuFk8jlUmncm5cAQNGtVFiJvqzDVAiEA809PSapO%2Fhu73pVcy%2FNAM4GD2TamMGOK3p%2F4go%2FnQRYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPk%2F0H7bn3PUuw3iyyrcA0DM8fSt9a4xk0yhpYdjTurWjrBOQk2GlZ0ZpgcDk1Gz%2FTR1WnRHBz1v%2FTqEiF6pBXrjEatTH0ysYBt5z%2Fk4R2D5MayW3u%2F%2B4A%2F24Lx779mLZ5Gks7j1WnqaJUZf%2FCZl%2F7EGCbz8W%2Fevgv%2B62IvA9Vka%2BWEb6LUN1anM3gLKOaJUsgr%2BusrwRhm5WPamGT3e6BODWdqQlVg2zQq33foPvQS7RdzDIMtpnk%2BY%2BQRu4dqpzShkYcGE9YPqgHY7LgTgkFHDz8%2BWUfLDeU3QAyaEaXkthIXHNXnnhPiJl6OwG5EKVvS5SB2OAKnUc27EBpnOicBQO%2B7Xyxf383aKbeQl%2B%2ByZ2pNzw%2FgP%2BYKzHMwE9f7F7VIEYF1lIeZ06BCnUKBT%2Ba%2BJgVQfuWJMBosJWfpG6q8iln3lH0XkmIOfIxLNwDdkCc6psy7WROCNQutsaeeXsUv0p7EzsIxXPhdnxsgWnlwxDJV0HT6%2BDNCpfDTmCOXkNWHTiQEFUlOCRdyc0H4Xwjajxg1MDUceoHT122r7nqrgoX%2F89veSMbwCCHqzAoe2k19lJnhcR31U%2BTFf%2BgCQA2ihuU8DFnUWmFD0AO0Arr724KK9J%2FTGhLwb0f6xY%2BaYKLuTzWHNe2gdkXFuMLnEmMEGOqUBcw8nif5sznsm2iJA%2F1GNFFnh676HY%2FTHQ5pC0cDTerk%2FdLuCl9NRXY1tejh9WZIXCP7HJc%2FfHeskUtq7IN%2BsNyFVoyex5oRFsdZJVztcWjdQcC2warSbj%2BibSoK9E1KVXpUihtMYrzDJk3eVSvrQ3a%2FzL%2BcYDbMf8GAPSUp3YisIIzAH5uYrY1Iust9ooG8WNSOWOgAPjPaDPBHydx3Mwxe8uQsy&X-Amz-Signature=d6ae6106afc355d4b617cb897e79428b6981271949958607b9398f4340517c8a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624QMX62U%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIF4tHlYW%2F9B7REhlvuFk8jlUmncm5cAQNGtVFiJvqzDVAiEA809PSapO%2Fhu73pVcy%2FNAM4GD2TamMGOK3p%2F4go%2FnQRYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPk%2F0H7bn3PUuw3iyyrcA0DM8fSt9a4xk0yhpYdjTurWjrBOQk2GlZ0ZpgcDk1Gz%2FTR1WnRHBz1v%2FTqEiF6pBXrjEatTH0ysYBt5z%2Fk4R2D5MayW3u%2F%2B4A%2F24Lx779mLZ5Gks7j1WnqaJUZf%2FCZl%2F7EGCbz8W%2Fevgv%2B62IvA9Vka%2BWEb6LUN1anM3gLKOaJUsgr%2BusrwRhm5WPamGT3e6BODWdqQlVg2zQq33foPvQS7RdzDIMtpnk%2BY%2BQRu4dqpzShkYcGE9YPqgHY7LgTgkFHDz8%2BWUfLDeU3QAyaEaXkthIXHNXnnhPiJl6OwG5EKVvS5SB2OAKnUc27EBpnOicBQO%2B7Xyxf383aKbeQl%2B%2ByZ2pNzw%2FgP%2BYKzHMwE9f7F7VIEYF1lIeZ06BCnUKBT%2Ba%2BJgVQfuWJMBosJWfpG6q8iln3lH0XkmIOfIxLNwDdkCc6psy7WROCNQutsaeeXsUv0p7EzsIxXPhdnxsgWnlwxDJV0HT6%2BDNCpfDTmCOXkNWHTiQEFUlOCRdyc0H4Xwjajxg1MDUceoHT122r7nqrgoX%2F89veSMbwCCHqzAoe2k19lJnhcR31U%2BTFf%2BgCQA2ihuU8DFnUWmFD0AO0Arr724KK9J%2FTGhLwb0f6xY%2BaYKLuTzWHNe2gdkXFuMLnEmMEGOqUBcw8nif5sznsm2iJA%2F1GNFFnh676HY%2FTHQ5pC0cDTerk%2FdLuCl9NRXY1tejh9WZIXCP7HJc%2FfHeskUtq7IN%2BsNyFVoyex5oRFsdZJVztcWjdQcC2warSbj%2BibSoK9E1KVXpUihtMYrzDJk3eVSvrQ3a%2FzL%2BcYDbMf8GAPSUp3YisIIzAH5uYrY1Iust9ooG8WNSOWOgAPjPaDPBHydx3Mwxe8uQsy&X-Amz-Signature=28c3cb51a229f25c841c26ac5b300727ed007133a83c11cca5a91bb8f2a846c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624QMX62U%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIF4tHlYW%2F9B7REhlvuFk8jlUmncm5cAQNGtVFiJvqzDVAiEA809PSapO%2Fhu73pVcy%2FNAM4GD2TamMGOK3p%2F4go%2FnQRYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPk%2F0H7bn3PUuw3iyyrcA0DM8fSt9a4xk0yhpYdjTurWjrBOQk2GlZ0ZpgcDk1Gz%2FTR1WnRHBz1v%2FTqEiF6pBXrjEatTH0ysYBt5z%2Fk4R2D5MayW3u%2F%2B4A%2F24Lx779mLZ5Gks7j1WnqaJUZf%2FCZl%2F7EGCbz8W%2Fevgv%2B62IvA9Vka%2BWEb6LUN1anM3gLKOaJUsgr%2BusrwRhm5WPamGT3e6BODWdqQlVg2zQq33foPvQS7RdzDIMtpnk%2BY%2BQRu4dqpzShkYcGE9YPqgHY7LgTgkFHDz8%2BWUfLDeU3QAyaEaXkthIXHNXnnhPiJl6OwG5EKVvS5SB2OAKnUc27EBpnOicBQO%2B7Xyxf383aKbeQl%2B%2ByZ2pNzw%2FgP%2BYKzHMwE9f7F7VIEYF1lIeZ06BCnUKBT%2Ba%2BJgVQfuWJMBosJWfpG6q8iln3lH0XkmIOfIxLNwDdkCc6psy7WROCNQutsaeeXsUv0p7EzsIxXPhdnxsgWnlwxDJV0HT6%2BDNCpfDTmCOXkNWHTiQEFUlOCRdyc0H4Xwjajxg1MDUceoHT122r7nqrgoX%2F89veSMbwCCHqzAoe2k19lJnhcR31U%2BTFf%2BgCQA2ihuU8DFnUWmFD0AO0Arr724KK9J%2FTGhLwb0f6xY%2BaYKLuTzWHNe2gdkXFuMLnEmMEGOqUBcw8nif5sznsm2iJA%2F1GNFFnh676HY%2FTHQ5pC0cDTerk%2FdLuCl9NRXY1tejh9WZIXCP7HJc%2FfHeskUtq7IN%2BsNyFVoyex5oRFsdZJVztcWjdQcC2warSbj%2BibSoK9E1KVXpUihtMYrzDJk3eVSvrQ3a%2FzL%2BcYDbMf8GAPSUp3YisIIzAH5uYrY1Iust9ooG8WNSOWOgAPjPaDPBHydx3Mwxe8uQsy&X-Amz-Signature=eef12607242a7470f03e847d26c406e861575c7a447430e687f8f6058896b50b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624QMX62U%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIF4tHlYW%2F9B7REhlvuFk8jlUmncm5cAQNGtVFiJvqzDVAiEA809PSapO%2Fhu73pVcy%2FNAM4GD2TamMGOK3p%2F4go%2FnQRYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPk%2F0H7bn3PUuw3iyyrcA0DM8fSt9a4xk0yhpYdjTurWjrBOQk2GlZ0ZpgcDk1Gz%2FTR1WnRHBz1v%2FTqEiF6pBXrjEatTH0ysYBt5z%2Fk4R2D5MayW3u%2F%2B4A%2F24Lx779mLZ5Gks7j1WnqaJUZf%2FCZl%2F7EGCbz8W%2Fevgv%2B62IvA9Vka%2BWEb6LUN1anM3gLKOaJUsgr%2BusrwRhm5WPamGT3e6BODWdqQlVg2zQq33foPvQS7RdzDIMtpnk%2BY%2BQRu4dqpzShkYcGE9YPqgHY7LgTgkFHDz8%2BWUfLDeU3QAyaEaXkthIXHNXnnhPiJl6OwG5EKVvS5SB2OAKnUc27EBpnOicBQO%2B7Xyxf383aKbeQl%2B%2ByZ2pNzw%2FgP%2BYKzHMwE9f7F7VIEYF1lIeZ06BCnUKBT%2Ba%2BJgVQfuWJMBosJWfpG6q8iln3lH0XkmIOfIxLNwDdkCc6psy7WROCNQutsaeeXsUv0p7EzsIxXPhdnxsgWnlwxDJV0HT6%2BDNCpfDTmCOXkNWHTiQEFUlOCRdyc0H4Xwjajxg1MDUceoHT122r7nqrgoX%2F89veSMbwCCHqzAoe2k19lJnhcR31U%2BTFf%2BgCQA2ihuU8DFnUWmFD0AO0Arr724KK9J%2FTGhLwb0f6xY%2BaYKLuTzWHNe2gdkXFuMLnEmMEGOqUBcw8nif5sznsm2iJA%2F1GNFFnh676HY%2FTHQ5pC0cDTerk%2FdLuCl9NRXY1tejh9WZIXCP7HJc%2FfHeskUtq7IN%2BsNyFVoyex5oRFsdZJVztcWjdQcC2warSbj%2BibSoK9E1KVXpUihtMYrzDJk3eVSvrQ3a%2FzL%2BcYDbMf8GAPSUp3YisIIzAH5uYrY1Iust9ooG8WNSOWOgAPjPaDPBHydx3Mwxe8uQsy&X-Amz-Signature=a76e2683d198d98889a65226e5752ec9200f321a5d8f9232db244cbc03b280f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
