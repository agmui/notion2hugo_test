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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVOXX2VT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDICn2nH7YMIZQTJjL%2F9bh%2BfxqK3Z%2FN%2BwQJ7vyRSQz3EwIhAMcl14sHOpXDmS3Atws9kiHhMqxEcX1hVZ08gWwvopOzKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvcJXjs6tlhicTGkAq3APRebPBW6JvNdEzveNdWuAKWFUSzqO%2BdMaos%2BeaPXXLItcA1AVH5U%2BQ%2F0pF2K5Ig01ktgdb0Cug71cyl3kU2jArsFZPaBc9XBLkbDoN3H1E9oENRnwpuUq0c1SdX3qmaBTejc38RuaxjVMwdKDwjyXu5etJFJcEauCixk6%2FK0FTg4K0R8Go8GMZaWkYyG1P129h1sIHfaKQ8Krqe7FhGLyFCBcFXR5y4Le8c%2Bl10WQtvaZAORQZw6SX3bJ1qSaDNVXD0dq78sDoIFFb4%2BX3oHJIC6mqh9Hf9nhK847OfCrReXQi5jMjCxnXoKDSLlkNeo5GOrAUNILShdRDrkgXNVk0KfUijiNJ49qn1dUwHOcn6shr2JLtjR9QG4DA3AiWPx2lDLt9RQPPgJZ%2FJDp6pn2elHjcE0iUYmkID5ShiAxGIts0G3JqDyExNRhY0EKAYEuE8VOBRwP8Ve7x1JsC71vwp6qUKxKSwsZKHMcSE3ezpIOje%2FiAvVgjqCjpy9IRA%2F8EG4yL7U0rILzDp45%2FL3Gt1qNet5Ztwy94gUCEAqDxWQSBV9Cy9PZ5iDWL3quE3aorYfJl%2FgCqoagvxd2UXJolPTVkw2KXbMEnjAB%2FHdnr1K5UKMMgTGP8B6%2FgSDCKk%2FfDBjqkAU12fcasWrC0bWPp9PDQNvsRuFN%2F6ivswphwMF4b%2Fqce7CQkW3RW5gOca655TsO%2BCNN01f6OmRmf8z4bgGnnp2%2BJE0mcKVM3KB%2F8HqYmsuXbIX7AUTJ65vX1taFTh%2BOgERPeG53WIh90B0%2BoK6nKHk90oc76l1jZHeE7d%2BTxOqPR8yKyuhjpYICf%2BJSY%2FUBEuPcPhfZl%2Fa7Z7dXbtRmeyLCllt9M&X-Amz-Signature=8fffb44c365eeadec88d3e86714396775fddcfd2545d08467acbdd94d9c5779f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVOXX2VT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDICn2nH7YMIZQTJjL%2F9bh%2BfxqK3Z%2FN%2BwQJ7vyRSQz3EwIhAMcl14sHOpXDmS3Atws9kiHhMqxEcX1hVZ08gWwvopOzKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvcJXjs6tlhicTGkAq3APRebPBW6JvNdEzveNdWuAKWFUSzqO%2BdMaos%2BeaPXXLItcA1AVH5U%2BQ%2F0pF2K5Ig01ktgdb0Cug71cyl3kU2jArsFZPaBc9XBLkbDoN3H1E9oENRnwpuUq0c1SdX3qmaBTejc38RuaxjVMwdKDwjyXu5etJFJcEauCixk6%2FK0FTg4K0R8Go8GMZaWkYyG1P129h1sIHfaKQ8Krqe7FhGLyFCBcFXR5y4Le8c%2Bl10WQtvaZAORQZw6SX3bJ1qSaDNVXD0dq78sDoIFFb4%2BX3oHJIC6mqh9Hf9nhK847OfCrReXQi5jMjCxnXoKDSLlkNeo5GOrAUNILShdRDrkgXNVk0KfUijiNJ49qn1dUwHOcn6shr2JLtjR9QG4DA3AiWPx2lDLt9RQPPgJZ%2FJDp6pn2elHjcE0iUYmkID5ShiAxGIts0G3JqDyExNRhY0EKAYEuE8VOBRwP8Ve7x1JsC71vwp6qUKxKSwsZKHMcSE3ezpIOje%2FiAvVgjqCjpy9IRA%2F8EG4yL7U0rILzDp45%2FL3Gt1qNet5Ztwy94gUCEAqDxWQSBV9Cy9PZ5iDWL3quE3aorYfJl%2FgCqoagvxd2UXJolPTVkw2KXbMEnjAB%2FHdnr1K5UKMMgTGP8B6%2FgSDCKk%2FfDBjqkAU12fcasWrC0bWPp9PDQNvsRuFN%2F6ivswphwMF4b%2Fqce7CQkW3RW5gOca655TsO%2BCNN01f6OmRmf8z4bgGnnp2%2BJE0mcKVM3KB%2F8HqYmsuXbIX7AUTJ65vX1taFTh%2BOgERPeG53WIh90B0%2BoK6nKHk90oc76l1jZHeE7d%2BTxOqPR8yKyuhjpYICf%2BJSY%2FUBEuPcPhfZl%2Fa7Z7dXbtRmeyLCllt9M&X-Amz-Signature=4a5022e2c348d02030a472e744809a2701d82bc98f84fa09d53592fddfe1fb1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVOXX2VT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDICn2nH7YMIZQTJjL%2F9bh%2BfxqK3Z%2FN%2BwQJ7vyRSQz3EwIhAMcl14sHOpXDmS3Atws9kiHhMqxEcX1hVZ08gWwvopOzKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvcJXjs6tlhicTGkAq3APRebPBW6JvNdEzveNdWuAKWFUSzqO%2BdMaos%2BeaPXXLItcA1AVH5U%2BQ%2F0pF2K5Ig01ktgdb0Cug71cyl3kU2jArsFZPaBc9XBLkbDoN3H1E9oENRnwpuUq0c1SdX3qmaBTejc38RuaxjVMwdKDwjyXu5etJFJcEauCixk6%2FK0FTg4K0R8Go8GMZaWkYyG1P129h1sIHfaKQ8Krqe7FhGLyFCBcFXR5y4Le8c%2Bl10WQtvaZAORQZw6SX3bJ1qSaDNVXD0dq78sDoIFFb4%2BX3oHJIC6mqh9Hf9nhK847OfCrReXQi5jMjCxnXoKDSLlkNeo5GOrAUNILShdRDrkgXNVk0KfUijiNJ49qn1dUwHOcn6shr2JLtjR9QG4DA3AiWPx2lDLt9RQPPgJZ%2FJDp6pn2elHjcE0iUYmkID5ShiAxGIts0G3JqDyExNRhY0EKAYEuE8VOBRwP8Ve7x1JsC71vwp6qUKxKSwsZKHMcSE3ezpIOje%2FiAvVgjqCjpy9IRA%2F8EG4yL7U0rILzDp45%2FL3Gt1qNet5Ztwy94gUCEAqDxWQSBV9Cy9PZ5iDWL3quE3aorYfJl%2FgCqoagvxd2UXJolPTVkw2KXbMEnjAB%2FHdnr1K5UKMMgTGP8B6%2FgSDCKk%2FfDBjqkAU12fcasWrC0bWPp9PDQNvsRuFN%2F6ivswphwMF4b%2Fqce7CQkW3RW5gOca655TsO%2BCNN01f6OmRmf8z4bgGnnp2%2BJE0mcKVM3KB%2F8HqYmsuXbIX7AUTJ65vX1taFTh%2BOgERPeG53WIh90B0%2BoK6nKHk90oc76l1jZHeE7d%2BTxOqPR8yKyuhjpYICf%2BJSY%2FUBEuPcPhfZl%2Fa7Z7dXbtRmeyLCllt9M&X-Amz-Signature=f5d9a778ef1862fad8893a401f73a08ed1a8e632f4f1dad9af7cca5b7df2463d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVOXX2VT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDICn2nH7YMIZQTJjL%2F9bh%2BfxqK3Z%2FN%2BwQJ7vyRSQz3EwIhAMcl14sHOpXDmS3Atws9kiHhMqxEcX1hVZ08gWwvopOzKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvcJXjs6tlhicTGkAq3APRebPBW6JvNdEzveNdWuAKWFUSzqO%2BdMaos%2BeaPXXLItcA1AVH5U%2BQ%2F0pF2K5Ig01ktgdb0Cug71cyl3kU2jArsFZPaBc9XBLkbDoN3H1E9oENRnwpuUq0c1SdX3qmaBTejc38RuaxjVMwdKDwjyXu5etJFJcEauCixk6%2FK0FTg4K0R8Go8GMZaWkYyG1P129h1sIHfaKQ8Krqe7FhGLyFCBcFXR5y4Le8c%2Bl10WQtvaZAORQZw6SX3bJ1qSaDNVXD0dq78sDoIFFb4%2BX3oHJIC6mqh9Hf9nhK847OfCrReXQi5jMjCxnXoKDSLlkNeo5GOrAUNILShdRDrkgXNVk0KfUijiNJ49qn1dUwHOcn6shr2JLtjR9QG4DA3AiWPx2lDLt9RQPPgJZ%2FJDp6pn2elHjcE0iUYmkID5ShiAxGIts0G3JqDyExNRhY0EKAYEuE8VOBRwP8Ve7x1JsC71vwp6qUKxKSwsZKHMcSE3ezpIOje%2FiAvVgjqCjpy9IRA%2F8EG4yL7U0rILzDp45%2FL3Gt1qNet5Ztwy94gUCEAqDxWQSBV9Cy9PZ5iDWL3quE3aorYfJl%2FgCqoagvxd2UXJolPTVkw2KXbMEnjAB%2FHdnr1K5UKMMgTGP8B6%2FgSDCKk%2FfDBjqkAU12fcasWrC0bWPp9PDQNvsRuFN%2F6ivswphwMF4b%2Fqce7CQkW3RW5gOca655TsO%2BCNN01f6OmRmf8z4bgGnnp2%2BJE0mcKVM3KB%2F8HqYmsuXbIX7AUTJ65vX1taFTh%2BOgERPeG53WIh90B0%2BoK6nKHk90oc76l1jZHeE7d%2BTxOqPR8yKyuhjpYICf%2BJSY%2FUBEuPcPhfZl%2Fa7Z7dXbtRmeyLCllt9M&X-Amz-Signature=7b2795f7a3f4ecc45e408788600a2262b01b7ef56bd1a52b18114f1483978504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVOXX2VT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDICn2nH7YMIZQTJjL%2F9bh%2BfxqK3Z%2FN%2BwQJ7vyRSQz3EwIhAMcl14sHOpXDmS3Atws9kiHhMqxEcX1hVZ08gWwvopOzKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvcJXjs6tlhicTGkAq3APRebPBW6JvNdEzveNdWuAKWFUSzqO%2BdMaos%2BeaPXXLItcA1AVH5U%2BQ%2F0pF2K5Ig01ktgdb0Cug71cyl3kU2jArsFZPaBc9XBLkbDoN3H1E9oENRnwpuUq0c1SdX3qmaBTejc38RuaxjVMwdKDwjyXu5etJFJcEauCixk6%2FK0FTg4K0R8Go8GMZaWkYyG1P129h1sIHfaKQ8Krqe7FhGLyFCBcFXR5y4Le8c%2Bl10WQtvaZAORQZw6SX3bJ1qSaDNVXD0dq78sDoIFFb4%2BX3oHJIC6mqh9Hf9nhK847OfCrReXQi5jMjCxnXoKDSLlkNeo5GOrAUNILShdRDrkgXNVk0KfUijiNJ49qn1dUwHOcn6shr2JLtjR9QG4DA3AiWPx2lDLt9RQPPgJZ%2FJDp6pn2elHjcE0iUYmkID5ShiAxGIts0G3JqDyExNRhY0EKAYEuE8VOBRwP8Ve7x1JsC71vwp6qUKxKSwsZKHMcSE3ezpIOje%2FiAvVgjqCjpy9IRA%2F8EG4yL7U0rILzDp45%2FL3Gt1qNet5Ztwy94gUCEAqDxWQSBV9Cy9PZ5iDWL3quE3aorYfJl%2FgCqoagvxd2UXJolPTVkw2KXbMEnjAB%2FHdnr1K5UKMMgTGP8B6%2FgSDCKk%2FfDBjqkAU12fcasWrC0bWPp9PDQNvsRuFN%2F6ivswphwMF4b%2Fqce7CQkW3RW5gOca655TsO%2BCNN01f6OmRmf8z4bgGnnp2%2BJE0mcKVM3KB%2F8HqYmsuXbIX7AUTJ65vX1taFTh%2BOgERPeG53WIh90B0%2BoK6nKHk90oc76l1jZHeE7d%2BTxOqPR8yKyuhjpYICf%2BJSY%2FUBEuPcPhfZl%2Fa7Z7dXbtRmeyLCllt9M&X-Amz-Signature=d25395bdacddbedc5bc0838db0392c6addf2ce6f9d18bf3187fc9cdd389366d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
