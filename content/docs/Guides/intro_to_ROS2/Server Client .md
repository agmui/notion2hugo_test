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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYMYJDO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvrey3n5%2BSoXx9gy9D6epsxRD6GLceM3J%2B8K4uf5A28AiBTldXWpJ3i86yfAYf9v%2FLz8X1K25ub4BuaejYmDwnDkCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM36a2yeh043xazXFWKtwDzIWvQnuMSZ5tjswLWOtCw8nnN%2FDKPHU%2F8gwLABAKQ%2BjlWTeL%2Fg7TFQBwONfns22kDdUKsFnwmx6vU4yl%2Btnq97L0NzOrIGibqpKXfXWZjsYzFeCwOO0uMdoGdKmf0rgnbb1l%2FTYHUuN2Rp1jorBzX55ybWpqiBKBvXx74gELMol9o8E%2BFpDOh%2F3lp9Va38VNN6oDspxIX11I2eAIxvfZKvYwu3Hyi1ztWpdeYbCA97tWhWjQUhon%2Bv%2FoAZORKJlP8C4bkmcQaeOVitV3CLO2ZwlfdF7Gzjs5DqxPMAh%2BAResYl12PTSH5kS7CM6ssymjN53yNRghptfHlAUpNSV%2BUmoKCGb3FEHt1lGPFYftrBRTRMintgN0H6WNdzJzL5jCHoJyUXWvfy64IjSdfP3BL6itzxwy%2FN935v4%2FcHajfphS%2Fjv4ujFjij3b5G%2BdZqza7j2WYE29lQHP3thdsduMXcb9j5X3CvZ6AjSUvp3fOt84SBW2Mz7xlpXguQxuVxHoxAgmXcDBbBpizcXa%2BKS7go5JJPVKRS9YkF%2BHihheJ6dxY9K%2FjDEx9zOt%2FodghY3ak%2FCQ1Xlmad4zQPmVdPF%2BzsUFqPS%2B8bRTJn0axn7R6pazEP%2BqILOgZyzwDx0wnIC6xAY6pgHmeqaLi2oCTCsf3FF1ZYbSv4GPGWRvCqmFeTYRRICGdR%2F84qlrhV3FXIb5urysxDUtzh66JYKj62Nc3ROmitt4PbmZhrKzEcDi1VKil0U0t6%2BX9EUjmrRzQ94iNGvyTy%2FhSXVDN1RrD4ozurggbIqqo3QUEZpihd4ZCOcOTxY9FspkYGhIWT1tVeuKF6y6kKSYvtwtyZnjwT3O8v1%2BjzYifxTe98ye&X-Amz-Signature=15a249a5d1a0a9470ded7f124f9d7b6e951a45600d29bbb0531381c145daf48e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYMYJDO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvrey3n5%2BSoXx9gy9D6epsxRD6GLceM3J%2B8K4uf5A28AiBTldXWpJ3i86yfAYf9v%2FLz8X1K25ub4BuaejYmDwnDkCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM36a2yeh043xazXFWKtwDzIWvQnuMSZ5tjswLWOtCw8nnN%2FDKPHU%2F8gwLABAKQ%2BjlWTeL%2Fg7TFQBwONfns22kDdUKsFnwmx6vU4yl%2Btnq97L0NzOrIGibqpKXfXWZjsYzFeCwOO0uMdoGdKmf0rgnbb1l%2FTYHUuN2Rp1jorBzX55ybWpqiBKBvXx74gELMol9o8E%2BFpDOh%2F3lp9Va38VNN6oDspxIX11I2eAIxvfZKvYwu3Hyi1ztWpdeYbCA97tWhWjQUhon%2Bv%2FoAZORKJlP8C4bkmcQaeOVitV3CLO2ZwlfdF7Gzjs5DqxPMAh%2BAResYl12PTSH5kS7CM6ssymjN53yNRghptfHlAUpNSV%2BUmoKCGb3FEHt1lGPFYftrBRTRMintgN0H6WNdzJzL5jCHoJyUXWvfy64IjSdfP3BL6itzxwy%2FN935v4%2FcHajfphS%2Fjv4ujFjij3b5G%2BdZqza7j2WYE29lQHP3thdsduMXcb9j5X3CvZ6AjSUvp3fOt84SBW2Mz7xlpXguQxuVxHoxAgmXcDBbBpizcXa%2BKS7go5JJPVKRS9YkF%2BHihheJ6dxY9K%2FjDEx9zOt%2FodghY3ak%2FCQ1Xlmad4zQPmVdPF%2BzsUFqPS%2B8bRTJn0axn7R6pazEP%2BqILOgZyzwDx0wnIC6xAY6pgHmeqaLi2oCTCsf3FF1ZYbSv4GPGWRvCqmFeTYRRICGdR%2F84qlrhV3FXIb5urysxDUtzh66JYKj62Nc3ROmitt4PbmZhrKzEcDi1VKil0U0t6%2BX9EUjmrRzQ94iNGvyTy%2FhSXVDN1RrD4ozurggbIqqo3QUEZpihd4ZCOcOTxY9FspkYGhIWT1tVeuKF6y6kKSYvtwtyZnjwT3O8v1%2BjzYifxTe98ye&X-Amz-Signature=e271fd2cde062c5cc16eb14b51f879260e6f5299ab02bb5d238506b1aeaac6fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYMYJDO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvrey3n5%2BSoXx9gy9D6epsxRD6GLceM3J%2B8K4uf5A28AiBTldXWpJ3i86yfAYf9v%2FLz8X1K25ub4BuaejYmDwnDkCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM36a2yeh043xazXFWKtwDzIWvQnuMSZ5tjswLWOtCw8nnN%2FDKPHU%2F8gwLABAKQ%2BjlWTeL%2Fg7TFQBwONfns22kDdUKsFnwmx6vU4yl%2Btnq97L0NzOrIGibqpKXfXWZjsYzFeCwOO0uMdoGdKmf0rgnbb1l%2FTYHUuN2Rp1jorBzX55ybWpqiBKBvXx74gELMol9o8E%2BFpDOh%2F3lp9Va38VNN6oDspxIX11I2eAIxvfZKvYwu3Hyi1ztWpdeYbCA97tWhWjQUhon%2Bv%2FoAZORKJlP8C4bkmcQaeOVitV3CLO2ZwlfdF7Gzjs5DqxPMAh%2BAResYl12PTSH5kS7CM6ssymjN53yNRghptfHlAUpNSV%2BUmoKCGb3FEHt1lGPFYftrBRTRMintgN0H6WNdzJzL5jCHoJyUXWvfy64IjSdfP3BL6itzxwy%2FN935v4%2FcHajfphS%2Fjv4ujFjij3b5G%2BdZqza7j2WYE29lQHP3thdsduMXcb9j5X3CvZ6AjSUvp3fOt84SBW2Mz7xlpXguQxuVxHoxAgmXcDBbBpizcXa%2BKS7go5JJPVKRS9YkF%2BHihheJ6dxY9K%2FjDEx9zOt%2FodghY3ak%2FCQ1Xlmad4zQPmVdPF%2BzsUFqPS%2B8bRTJn0axn7R6pazEP%2BqILOgZyzwDx0wnIC6xAY6pgHmeqaLi2oCTCsf3FF1ZYbSv4GPGWRvCqmFeTYRRICGdR%2F84qlrhV3FXIb5urysxDUtzh66JYKj62Nc3ROmitt4PbmZhrKzEcDi1VKil0U0t6%2BX9EUjmrRzQ94iNGvyTy%2FhSXVDN1RrD4ozurggbIqqo3QUEZpihd4ZCOcOTxY9FspkYGhIWT1tVeuKF6y6kKSYvtwtyZnjwT3O8v1%2BjzYifxTe98ye&X-Amz-Signature=d384c496b2489b5045f1ca7bc652ce050da4f93a18f051ff675d5815b44339bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYMYJDO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvrey3n5%2BSoXx9gy9D6epsxRD6GLceM3J%2B8K4uf5A28AiBTldXWpJ3i86yfAYf9v%2FLz8X1K25ub4BuaejYmDwnDkCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM36a2yeh043xazXFWKtwDzIWvQnuMSZ5tjswLWOtCw8nnN%2FDKPHU%2F8gwLABAKQ%2BjlWTeL%2Fg7TFQBwONfns22kDdUKsFnwmx6vU4yl%2Btnq97L0NzOrIGibqpKXfXWZjsYzFeCwOO0uMdoGdKmf0rgnbb1l%2FTYHUuN2Rp1jorBzX55ybWpqiBKBvXx74gELMol9o8E%2BFpDOh%2F3lp9Va38VNN6oDspxIX11I2eAIxvfZKvYwu3Hyi1ztWpdeYbCA97tWhWjQUhon%2Bv%2FoAZORKJlP8C4bkmcQaeOVitV3CLO2ZwlfdF7Gzjs5DqxPMAh%2BAResYl12PTSH5kS7CM6ssymjN53yNRghptfHlAUpNSV%2BUmoKCGb3FEHt1lGPFYftrBRTRMintgN0H6WNdzJzL5jCHoJyUXWvfy64IjSdfP3BL6itzxwy%2FN935v4%2FcHajfphS%2Fjv4ujFjij3b5G%2BdZqza7j2WYE29lQHP3thdsduMXcb9j5X3CvZ6AjSUvp3fOt84SBW2Mz7xlpXguQxuVxHoxAgmXcDBbBpizcXa%2BKS7go5JJPVKRS9YkF%2BHihheJ6dxY9K%2FjDEx9zOt%2FodghY3ak%2FCQ1Xlmad4zQPmVdPF%2BzsUFqPS%2B8bRTJn0axn7R6pazEP%2BqILOgZyzwDx0wnIC6xAY6pgHmeqaLi2oCTCsf3FF1ZYbSv4GPGWRvCqmFeTYRRICGdR%2F84qlrhV3FXIb5urysxDUtzh66JYKj62Nc3ROmitt4PbmZhrKzEcDi1VKil0U0t6%2BX9EUjmrRzQ94iNGvyTy%2FhSXVDN1RrD4ozurggbIqqo3QUEZpihd4ZCOcOTxY9FspkYGhIWT1tVeuKF6y6kKSYvtwtyZnjwT3O8v1%2BjzYifxTe98ye&X-Amz-Signature=675e2fb5ea8a0bddb38e045593b37a4d71b915da46226d342ccc3a17d369431c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYMYJDO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvrey3n5%2BSoXx9gy9D6epsxRD6GLceM3J%2B8K4uf5A28AiBTldXWpJ3i86yfAYf9v%2FLz8X1K25ub4BuaejYmDwnDkCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM36a2yeh043xazXFWKtwDzIWvQnuMSZ5tjswLWOtCw8nnN%2FDKPHU%2F8gwLABAKQ%2BjlWTeL%2Fg7TFQBwONfns22kDdUKsFnwmx6vU4yl%2Btnq97L0NzOrIGibqpKXfXWZjsYzFeCwOO0uMdoGdKmf0rgnbb1l%2FTYHUuN2Rp1jorBzX55ybWpqiBKBvXx74gELMol9o8E%2BFpDOh%2F3lp9Va38VNN6oDspxIX11I2eAIxvfZKvYwu3Hyi1ztWpdeYbCA97tWhWjQUhon%2Bv%2FoAZORKJlP8C4bkmcQaeOVitV3CLO2ZwlfdF7Gzjs5DqxPMAh%2BAResYl12PTSH5kS7CM6ssymjN53yNRghptfHlAUpNSV%2BUmoKCGb3FEHt1lGPFYftrBRTRMintgN0H6WNdzJzL5jCHoJyUXWvfy64IjSdfP3BL6itzxwy%2FN935v4%2FcHajfphS%2Fjv4ujFjij3b5G%2BdZqza7j2WYE29lQHP3thdsduMXcb9j5X3CvZ6AjSUvp3fOt84SBW2Mz7xlpXguQxuVxHoxAgmXcDBbBpizcXa%2BKS7go5JJPVKRS9YkF%2BHihheJ6dxY9K%2FjDEx9zOt%2FodghY3ak%2FCQ1Xlmad4zQPmVdPF%2BzsUFqPS%2B8bRTJn0axn7R6pazEP%2BqILOgZyzwDx0wnIC6xAY6pgHmeqaLi2oCTCsf3FF1ZYbSv4GPGWRvCqmFeTYRRICGdR%2F84qlrhV3FXIb5urysxDUtzh66JYKj62Nc3ROmitt4PbmZhrKzEcDi1VKil0U0t6%2BX9EUjmrRzQ94iNGvyTy%2FhSXVDN1RrD4ozurggbIqqo3QUEZpihd4ZCOcOTxY9FspkYGhIWT1tVeuKF6y6kKSYvtwtyZnjwT3O8v1%2BjzYifxTe98ye&X-Amz-Signature=32ac7935bf00ad17134954e687649772aefb34ba5c9b215d99b2007890f09220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
