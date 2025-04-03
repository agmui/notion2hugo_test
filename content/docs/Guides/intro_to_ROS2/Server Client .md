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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJFMHHP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1YRAhxuBcnHprz1aHpWO%2BW94AJLu0LRmBDpZWbmbwwAIgN%2F5ufARXAvlaz%2BIN8A%2BNIPbcoyUvE1LQJkdwL6xSc%2BcqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYEgbeZdWVzWyMMcircA5xN243RzLxWtF0w1NPBI2gDELIKKGY8HdCLsi%2B14XLUWDoobQNirG4QbRSxcol32IZDGxjW47g8FcaD9nGnxbnWiHeG%2Ft8sWaRg2kRqJbwO5pk66%2BxwMxLXoLiWjNrE4vO1EYeZiHXzp5cNaGy%2BYxzcciRULvCmcIOUN8IYzMT39cDwlH33NGdBnmvZOKy5zHxIcdkFawIGnQpenI%2BHPd3EB4XOknYWCivMw2HvOQ6tiB%2FCGUF8AJsFY5Bl3z5VLWYd2HQZCDNGYbKfLKIWjJRBTbECTsql9p2ZQkVzVMsK0s5yaFL7tL0iHNsAddeWGmcLAt5my4z2NZT%2B1agU9S9nZbId1%2FtC2667V%2FSIsdldPUDm%2FNKysC0vebRX94PjSE98DP0Cjtm6cvsyRo6RlyI19v6tM%2F356Mxpe3TiQFRnDfZPbWcnOCSl%2BD20X%2FaQExY76HzmMx9%2FFmTsDq5bmcasjHNXqZgMvcbJ%2BYWnjkPvmCFEhe20FYe2NAdllU%2BH%2FcZaTO%2FQu3Hm%2Bc6%2F2I6LccVI3Erjcut%2FDzDQsn7t%2FENEhi3rW6YCQRittx%2Fuy5y8iEUGa5zscWnVv%2FR9z41kK9glNalkH9bCfJncVK%2B8ei%2B3cBAMYs1nqsa3KcfEMLCEvL8GOqUBc%2FHWBMjx6L8lpvCg%2FBBiImFz%2F7aQ1cP001EiVcB8QSxANvIf5f3sbnOJsA%2FH7TgTEKtwVLPDUpnLIbLfVjF5A9zpe50nMPuSJsDrTop7%2BbW%2FU5IFBmIqNVH6ZopQ80CRBaV8vCDFCAfC5ZeJgxxMKmTwFoGYD7kER%2FPkoVZXjXOKs9ql5YXATiczaSpKqmmexlaxUmPP%2FCPpw2lWFXyxRLT6%2FvBo&X-Amz-Signature=4552984e16151e5d106d7287fccfd5c10619deb7718fae13a1ad83d611257b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJFMHHP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1YRAhxuBcnHprz1aHpWO%2BW94AJLu0LRmBDpZWbmbwwAIgN%2F5ufARXAvlaz%2BIN8A%2BNIPbcoyUvE1LQJkdwL6xSc%2BcqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYEgbeZdWVzWyMMcircA5xN243RzLxWtF0w1NPBI2gDELIKKGY8HdCLsi%2B14XLUWDoobQNirG4QbRSxcol32IZDGxjW47g8FcaD9nGnxbnWiHeG%2Ft8sWaRg2kRqJbwO5pk66%2BxwMxLXoLiWjNrE4vO1EYeZiHXzp5cNaGy%2BYxzcciRULvCmcIOUN8IYzMT39cDwlH33NGdBnmvZOKy5zHxIcdkFawIGnQpenI%2BHPd3EB4XOknYWCivMw2HvOQ6tiB%2FCGUF8AJsFY5Bl3z5VLWYd2HQZCDNGYbKfLKIWjJRBTbECTsql9p2ZQkVzVMsK0s5yaFL7tL0iHNsAddeWGmcLAt5my4z2NZT%2B1agU9S9nZbId1%2FtC2667V%2FSIsdldPUDm%2FNKysC0vebRX94PjSE98DP0Cjtm6cvsyRo6RlyI19v6tM%2F356Mxpe3TiQFRnDfZPbWcnOCSl%2BD20X%2FaQExY76HzmMx9%2FFmTsDq5bmcasjHNXqZgMvcbJ%2BYWnjkPvmCFEhe20FYe2NAdllU%2BH%2FcZaTO%2FQu3Hm%2Bc6%2F2I6LccVI3Erjcut%2FDzDQsn7t%2FENEhi3rW6YCQRittx%2Fuy5y8iEUGa5zscWnVv%2FR9z41kK9glNalkH9bCfJncVK%2B8ei%2B3cBAMYs1nqsa3KcfEMLCEvL8GOqUBc%2FHWBMjx6L8lpvCg%2FBBiImFz%2F7aQ1cP001EiVcB8QSxANvIf5f3sbnOJsA%2FH7TgTEKtwVLPDUpnLIbLfVjF5A9zpe50nMPuSJsDrTop7%2BbW%2FU5IFBmIqNVH6ZopQ80CRBaV8vCDFCAfC5ZeJgxxMKmTwFoGYD7kER%2FPkoVZXjXOKs9ql5YXATiczaSpKqmmexlaxUmPP%2FCPpw2lWFXyxRLT6%2FvBo&X-Amz-Signature=da6bfb2bb6168ec281f8f55725fc386026bacd6c38fe4569c50bec518fe46278&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJFMHHP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1YRAhxuBcnHprz1aHpWO%2BW94AJLu0LRmBDpZWbmbwwAIgN%2F5ufARXAvlaz%2BIN8A%2BNIPbcoyUvE1LQJkdwL6xSc%2BcqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYEgbeZdWVzWyMMcircA5xN243RzLxWtF0w1NPBI2gDELIKKGY8HdCLsi%2B14XLUWDoobQNirG4QbRSxcol32IZDGxjW47g8FcaD9nGnxbnWiHeG%2Ft8sWaRg2kRqJbwO5pk66%2BxwMxLXoLiWjNrE4vO1EYeZiHXzp5cNaGy%2BYxzcciRULvCmcIOUN8IYzMT39cDwlH33NGdBnmvZOKy5zHxIcdkFawIGnQpenI%2BHPd3EB4XOknYWCivMw2HvOQ6tiB%2FCGUF8AJsFY5Bl3z5VLWYd2HQZCDNGYbKfLKIWjJRBTbECTsql9p2ZQkVzVMsK0s5yaFL7tL0iHNsAddeWGmcLAt5my4z2NZT%2B1agU9S9nZbId1%2FtC2667V%2FSIsdldPUDm%2FNKysC0vebRX94PjSE98DP0Cjtm6cvsyRo6RlyI19v6tM%2F356Mxpe3TiQFRnDfZPbWcnOCSl%2BD20X%2FaQExY76HzmMx9%2FFmTsDq5bmcasjHNXqZgMvcbJ%2BYWnjkPvmCFEhe20FYe2NAdllU%2BH%2FcZaTO%2FQu3Hm%2Bc6%2F2I6LccVI3Erjcut%2FDzDQsn7t%2FENEhi3rW6YCQRittx%2Fuy5y8iEUGa5zscWnVv%2FR9z41kK9glNalkH9bCfJncVK%2B8ei%2B3cBAMYs1nqsa3KcfEMLCEvL8GOqUBc%2FHWBMjx6L8lpvCg%2FBBiImFz%2F7aQ1cP001EiVcB8QSxANvIf5f3sbnOJsA%2FH7TgTEKtwVLPDUpnLIbLfVjF5A9zpe50nMPuSJsDrTop7%2BbW%2FU5IFBmIqNVH6ZopQ80CRBaV8vCDFCAfC5ZeJgxxMKmTwFoGYD7kER%2FPkoVZXjXOKs9ql5YXATiczaSpKqmmexlaxUmPP%2FCPpw2lWFXyxRLT6%2FvBo&X-Amz-Signature=d54756eb33255eb9be519b188f0dda3e6014183c7d603d27ef92030a9d29e635&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJFMHHP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1YRAhxuBcnHprz1aHpWO%2BW94AJLu0LRmBDpZWbmbwwAIgN%2F5ufARXAvlaz%2BIN8A%2BNIPbcoyUvE1LQJkdwL6xSc%2BcqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYEgbeZdWVzWyMMcircA5xN243RzLxWtF0w1NPBI2gDELIKKGY8HdCLsi%2B14XLUWDoobQNirG4QbRSxcol32IZDGxjW47g8FcaD9nGnxbnWiHeG%2Ft8sWaRg2kRqJbwO5pk66%2BxwMxLXoLiWjNrE4vO1EYeZiHXzp5cNaGy%2BYxzcciRULvCmcIOUN8IYzMT39cDwlH33NGdBnmvZOKy5zHxIcdkFawIGnQpenI%2BHPd3EB4XOknYWCivMw2HvOQ6tiB%2FCGUF8AJsFY5Bl3z5VLWYd2HQZCDNGYbKfLKIWjJRBTbECTsql9p2ZQkVzVMsK0s5yaFL7tL0iHNsAddeWGmcLAt5my4z2NZT%2B1agU9S9nZbId1%2FtC2667V%2FSIsdldPUDm%2FNKysC0vebRX94PjSE98DP0Cjtm6cvsyRo6RlyI19v6tM%2F356Mxpe3TiQFRnDfZPbWcnOCSl%2BD20X%2FaQExY76HzmMx9%2FFmTsDq5bmcasjHNXqZgMvcbJ%2BYWnjkPvmCFEhe20FYe2NAdllU%2BH%2FcZaTO%2FQu3Hm%2Bc6%2F2I6LccVI3Erjcut%2FDzDQsn7t%2FENEhi3rW6YCQRittx%2Fuy5y8iEUGa5zscWnVv%2FR9z41kK9glNalkH9bCfJncVK%2B8ei%2B3cBAMYs1nqsa3KcfEMLCEvL8GOqUBc%2FHWBMjx6L8lpvCg%2FBBiImFz%2F7aQ1cP001EiVcB8QSxANvIf5f3sbnOJsA%2FH7TgTEKtwVLPDUpnLIbLfVjF5A9zpe50nMPuSJsDrTop7%2BbW%2FU5IFBmIqNVH6ZopQ80CRBaV8vCDFCAfC5ZeJgxxMKmTwFoGYD7kER%2FPkoVZXjXOKs9ql5YXATiczaSpKqmmexlaxUmPP%2FCPpw2lWFXyxRLT6%2FvBo&X-Amz-Signature=3f24e17fe5df898a9df1cfbabf90aa5a0f8bd535a7f83a261343330f91878e73&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJFMHHP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1YRAhxuBcnHprz1aHpWO%2BW94AJLu0LRmBDpZWbmbwwAIgN%2F5ufARXAvlaz%2BIN8A%2BNIPbcoyUvE1LQJkdwL6xSc%2BcqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYEgbeZdWVzWyMMcircA5xN243RzLxWtF0w1NPBI2gDELIKKGY8HdCLsi%2B14XLUWDoobQNirG4QbRSxcol32IZDGxjW47g8FcaD9nGnxbnWiHeG%2Ft8sWaRg2kRqJbwO5pk66%2BxwMxLXoLiWjNrE4vO1EYeZiHXzp5cNaGy%2BYxzcciRULvCmcIOUN8IYzMT39cDwlH33NGdBnmvZOKy5zHxIcdkFawIGnQpenI%2BHPd3EB4XOknYWCivMw2HvOQ6tiB%2FCGUF8AJsFY5Bl3z5VLWYd2HQZCDNGYbKfLKIWjJRBTbECTsql9p2ZQkVzVMsK0s5yaFL7tL0iHNsAddeWGmcLAt5my4z2NZT%2B1agU9S9nZbId1%2FtC2667V%2FSIsdldPUDm%2FNKysC0vebRX94PjSE98DP0Cjtm6cvsyRo6RlyI19v6tM%2F356Mxpe3TiQFRnDfZPbWcnOCSl%2BD20X%2FaQExY76HzmMx9%2FFmTsDq5bmcasjHNXqZgMvcbJ%2BYWnjkPvmCFEhe20FYe2NAdllU%2BH%2FcZaTO%2FQu3Hm%2Bc6%2F2I6LccVI3Erjcut%2FDzDQsn7t%2FENEhi3rW6YCQRittx%2Fuy5y8iEUGa5zscWnVv%2FR9z41kK9glNalkH9bCfJncVK%2B8ei%2B3cBAMYs1nqsa3KcfEMLCEvL8GOqUBc%2FHWBMjx6L8lpvCg%2FBBiImFz%2F7aQ1cP001EiVcB8QSxANvIf5f3sbnOJsA%2FH7TgTEKtwVLPDUpnLIbLfVjF5A9zpe50nMPuSJsDrTop7%2BbW%2FU5IFBmIqNVH6ZopQ80CRBaV8vCDFCAfC5ZeJgxxMKmTwFoGYD7kER%2FPkoVZXjXOKs9ql5YXATiczaSpKqmmexlaxUmPP%2FCPpw2lWFXyxRLT6%2FvBo&X-Amz-Signature=5df77c5da9d669312f560cf484bda137f0ceb2827189507f533a9a0f95b41f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
