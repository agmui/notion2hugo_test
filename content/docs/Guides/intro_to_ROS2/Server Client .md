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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZEGULVG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcVhWOicK%2B6hBSOOiQN%2FN7Bz5X9yDA7t1ajtZ0o7aGGAIgBBlGh0AbSzJu1QvZachN%2Fx%2BZgbUyatGFtGJgz4m27TYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7rzeI6fof1yxhGFCrcA52y%2FlJ35LS6Dbb8H9cwL93jeFNqAxIJ39UOI7vllOJ5wvc%2BNH01LOj4LxYzYflEm6b4wsmuxNSsTqw7hPad%2B8orLx65%2Fg2OHbKoLnSVkd1%2FVOQDa%2FfreFxQskQ1wihMe6Mmj3ajgOzb00M03dmqYQJFhPYtDG%2B%2BprHuLXLtMmFQQEVYcWYyyvxJi%2FF1udkzxhKM7aYUIVzyHlXwoGCoEVj7DlK0f7TboaBlkfn6ohJ%2BKNWThXKnwkJxQ7wobzt5uU8L3Ed8cTGyASahUB1EUueIYn3unNaQqpXzvlNKZkLzeUOLvFfVZhbLUx2XgD6%2FpJdUQ0nXXhwe6pS5pMWrsABF7l2QPPX2UFXtWNTezxKILXBN7liOpr6mFOWPNgN8dxY1m002Rj%2BGAagC04S4MiPmmOVr%2BqhHJCi99mgSIXXyXp%2BFDfkvB57KhUhmDz7ACOkNCXbP5S5UmcUOlOPDu%2FqGWZvZfFjCiV7o%2FXjacL0zaD1SfexC9e34j2wbrRGrTdr7HPgEaG3H4Ulg%2FepWX8opi9ctHjqoQxK%2BtWToyjxoxgElxSW5nCARKWW%2FCnOuM2R%2BDQQ8HhwOvh1lNdHQ%2FHEyYCaQUk%2Fg1hUbpOvrX0VgI6q%2FeQ1%2B5z1ATnbLMN7s5r0GOqUBBbzhaQk8DE2TvHQ%2Fi5%2Bhfv7TMFW9sfPl90FBeJGEA9L8KBC%2B90okVkNfateZfFhM89xcz5SRCyEJkRULWm3HcCN4iWIbN%2Bwhox4Ar%2Bl5hp7%2F8rRSPUO8WtPK%2B2rXPxNGwQsRr8sSkDMp4Bxt02efqsz7c0pv9jvgZf9FNPr1fOjBTVafT2EHCA9WfbsrQYZ29J2h1Th3YJtuc%2FzRKZCddyCFJ2bj&X-Amz-Signature=37f3498337eb4758a015776425301f4756cbe0248cd552f992908e34a8c03535&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZEGULVG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcVhWOicK%2B6hBSOOiQN%2FN7Bz5X9yDA7t1ajtZ0o7aGGAIgBBlGh0AbSzJu1QvZachN%2Fx%2BZgbUyatGFtGJgz4m27TYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7rzeI6fof1yxhGFCrcA52y%2FlJ35LS6Dbb8H9cwL93jeFNqAxIJ39UOI7vllOJ5wvc%2BNH01LOj4LxYzYflEm6b4wsmuxNSsTqw7hPad%2B8orLx65%2Fg2OHbKoLnSVkd1%2FVOQDa%2FfreFxQskQ1wihMe6Mmj3ajgOzb00M03dmqYQJFhPYtDG%2B%2BprHuLXLtMmFQQEVYcWYyyvxJi%2FF1udkzxhKM7aYUIVzyHlXwoGCoEVj7DlK0f7TboaBlkfn6ohJ%2BKNWThXKnwkJxQ7wobzt5uU8L3Ed8cTGyASahUB1EUueIYn3unNaQqpXzvlNKZkLzeUOLvFfVZhbLUx2XgD6%2FpJdUQ0nXXhwe6pS5pMWrsABF7l2QPPX2UFXtWNTezxKILXBN7liOpr6mFOWPNgN8dxY1m002Rj%2BGAagC04S4MiPmmOVr%2BqhHJCi99mgSIXXyXp%2BFDfkvB57KhUhmDz7ACOkNCXbP5S5UmcUOlOPDu%2FqGWZvZfFjCiV7o%2FXjacL0zaD1SfexC9e34j2wbrRGrTdr7HPgEaG3H4Ulg%2FepWX8opi9ctHjqoQxK%2BtWToyjxoxgElxSW5nCARKWW%2FCnOuM2R%2BDQQ8HhwOvh1lNdHQ%2FHEyYCaQUk%2Fg1hUbpOvrX0VgI6q%2FeQ1%2B5z1ATnbLMN7s5r0GOqUBBbzhaQk8DE2TvHQ%2Fi5%2Bhfv7TMFW9sfPl90FBeJGEA9L8KBC%2B90okVkNfateZfFhM89xcz5SRCyEJkRULWm3HcCN4iWIbN%2Bwhox4Ar%2Bl5hp7%2F8rRSPUO8WtPK%2B2rXPxNGwQsRr8sSkDMp4Bxt02efqsz7c0pv9jvgZf9FNPr1fOjBTVafT2EHCA9WfbsrQYZ29J2h1Th3YJtuc%2FzRKZCddyCFJ2bj&X-Amz-Signature=9aeebe03db75f751b48afff151ece33c564f17dd2359ad1d673b77a0cca55540&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZEGULVG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcVhWOicK%2B6hBSOOiQN%2FN7Bz5X9yDA7t1ajtZ0o7aGGAIgBBlGh0AbSzJu1QvZachN%2Fx%2BZgbUyatGFtGJgz4m27TYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7rzeI6fof1yxhGFCrcA52y%2FlJ35LS6Dbb8H9cwL93jeFNqAxIJ39UOI7vllOJ5wvc%2BNH01LOj4LxYzYflEm6b4wsmuxNSsTqw7hPad%2B8orLx65%2Fg2OHbKoLnSVkd1%2FVOQDa%2FfreFxQskQ1wihMe6Mmj3ajgOzb00M03dmqYQJFhPYtDG%2B%2BprHuLXLtMmFQQEVYcWYyyvxJi%2FF1udkzxhKM7aYUIVzyHlXwoGCoEVj7DlK0f7TboaBlkfn6ohJ%2BKNWThXKnwkJxQ7wobzt5uU8L3Ed8cTGyASahUB1EUueIYn3unNaQqpXzvlNKZkLzeUOLvFfVZhbLUx2XgD6%2FpJdUQ0nXXhwe6pS5pMWrsABF7l2QPPX2UFXtWNTezxKILXBN7liOpr6mFOWPNgN8dxY1m002Rj%2BGAagC04S4MiPmmOVr%2BqhHJCi99mgSIXXyXp%2BFDfkvB57KhUhmDz7ACOkNCXbP5S5UmcUOlOPDu%2FqGWZvZfFjCiV7o%2FXjacL0zaD1SfexC9e34j2wbrRGrTdr7HPgEaG3H4Ulg%2FepWX8opi9ctHjqoQxK%2BtWToyjxoxgElxSW5nCARKWW%2FCnOuM2R%2BDQQ8HhwOvh1lNdHQ%2FHEyYCaQUk%2Fg1hUbpOvrX0VgI6q%2FeQ1%2B5z1ATnbLMN7s5r0GOqUBBbzhaQk8DE2TvHQ%2Fi5%2Bhfv7TMFW9sfPl90FBeJGEA9L8KBC%2B90okVkNfateZfFhM89xcz5SRCyEJkRULWm3HcCN4iWIbN%2Bwhox4Ar%2Bl5hp7%2F8rRSPUO8WtPK%2B2rXPxNGwQsRr8sSkDMp4Bxt02efqsz7c0pv9jvgZf9FNPr1fOjBTVafT2EHCA9WfbsrQYZ29J2h1Th3YJtuc%2FzRKZCddyCFJ2bj&X-Amz-Signature=d8285abc460f330b491177fae8c2312d32d6873c1341df8627ed084f69ab4bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZEGULVG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcVhWOicK%2B6hBSOOiQN%2FN7Bz5X9yDA7t1ajtZ0o7aGGAIgBBlGh0AbSzJu1QvZachN%2Fx%2BZgbUyatGFtGJgz4m27TYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7rzeI6fof1yxhGFCrcA52y%2FlJ35LS6Dbb8H9cwL93jeFNqAxIJ39UOI7vllOJ5wvc%2BNH01LOj4LxYzYflEm6b4wsmuxNSsTqw7hPad%2B8orLx65%2Fg2OHbKoLnSVkd1%2FVOQDa%2FfreFxQskQ1wihMe6Mmj3ajgOzb00M03dmqYQJFhPYtDG%2B%2BprHuLXLtMmFQQEVYcWYyyvxJi%2FF1udkzxhKM7aYUIVzyHlXwoGCoEVj7DlK0f7TboaBlkfn6ohJ%2BKNWThXKnwkJxQ7wobzt5uU8L3Ed8cTGyASahUB1EUueIYn3unNaQqpXzvlNKZkLzeUOLvFfVZhbLUx2XgD6%2FpJdUQ0nXXhwe6pS5pMWrsABF7l2QPPX2UFXtWNTezxKILXBN7liOpr6mFOWPNgN8dxY1m002Rj%2BGAagC04S4MiPmmOVr%2BqhHJCi99mgSIXXyXp%2BFDfkvB57KhUhmDz7ACOkNCXbP5S5UmcUOlOPDu%2FqGWZvZfFjCiV7o%2FXjacL0zaD1SfexC9e34j2wbrRGrTdr7HPgEaG3H4Ulg%2FepWX8opi9ctHjqoQxK%2BtWToyjxoxgElxSW5nCARKWW%2FCnOuM2R%2BDQQ8HhwOvh1lNdHQ%2FHEyYCaQUk%2Fg1hUbpOvrX0VgI6q%2FeQ1%2B5z1ATnbLMN7s5r0GOqUBBbzhaQk8DE2TvHQ%2Fi5%2Bhfv7TMFW9sfPl90FBeJGEA9L8KBC%2B90okVkNfateZfFhM89xcz5SRCyEJkRULWm3HcCN4iWIbN%2Bwhox4Ar%2Bl5hp7%2F8rRSPUO8WtPK%2B2rXPxNGwQsRr8sSkDMp4Bxt02efqsz7c0pv9jvgZf9FNPr1fOjBTVafT2EHCA9WfbsrQYZ29J2h1Th3YJtuc%2FzRKZCddyCFJ2bj&X-Amz-Signature=e5348832cf0adc7aa807b419a79a7b7960b14e23285ca27537489aabeef98ba5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZEGULVG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcVhWOicK%2B6hBSOOiQN%2FN7Bz5X9yDA7t1ajtZ0o7aGGAIgBBlGh0AbSzJu1QvZachN%2Fx%2BZgbUyatGFtGJgz4m27TYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7rzeI6fof1yxhGFCrcA52y%2FlJ35LS6Dbb8H9cwL93jeFNqAxIJ39UOI7vllOJ5wvc%2BNH01LOj4LxYzYflEm6b4wsmuxNSsTqw7hPad%2B8orLx65%2Fg2OHbKoLnSVkd1%2FVOQDa%2FfreFxQskQ1wihMe6Mmj3ajgOzb00M03dmqYQJFhPYtDG%2B%2BprHuLXLtMmFQQEVYcWYyyvxJi%2FF1udkzxhKM7aYUIVzyHlXwoGCoEVj7DlK0f7TboaBlkfn6ohJ%2BKNWThXKnwkJxQ7wobzt5uU8L3Ed8cTGyASahUB1EUueIYn3unNaQqpXzvlNKZkLzeUOLvFfVZhbLUx2XgD6%2FpJdUQ0nXXhwe6pS5pMWrsABF7l2QPPX2UFXtWNTezxKILXBN7liOpr6mFOWPNgN8dxY1m002Rj%2BGAagC04S4MiPmmOVr%2BqhHJCi99mgSIXXyXp%2BFDfkvB57KhUhmDz7ACOkNCXbP5S5UmcUOlOPDu%2FqGWZvZfFjCiV7o%2FXjacL0zaD1SfexC9e34j2wbrRGrTdr7HPgEaG3H4Ulg%2FepWX8opi9ctHjqoQxK%2BtWToyjxoxgElxSW5nCARKWW%2FCnOuM2R%2BDQQ8HhwOvh1lNdHQ%2FHEyYCaQUk%2Fg1hUbpOvrX0VgI6q%2FeQ1%2B5z1ATnbLMN7s5r0GOqUBBbzhaQk8DE2TvHQ%2Fi5%2Bhfv7TMFW9sfPl90FBeJGEA9L8KBC%2B90okVkNfateZfFhM89xcz5SRCyEJkRULWm3HcCN4iWIbN%2Bwhox4Ar%2Bl5hp7%2F8rRSPUO8WtPK%2B2rXPxNGwQsRr8sSkDMp4Bxt02efqsz7c0pv9jvgZf9FNPr1fOjBTVafT2EHCA9WfbsrQYZ29J2h1Th3YJtuc%2FzRKZCddyCFJ2bj&X-Amz-Signature=22f84fb7e5e06f9075da70285a3243be2fa165644047c9c820b2a92192c9ef69&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
