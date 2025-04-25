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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ3CM25U%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEJuJtQbbGi2UEkU8r0IlopYOtq%2FlPwufQ%2FBT92VKcIAiEAqDYbJvXJ%2BC3mpEJTXmrTs56FM6jZVChs075QW2pZ1jEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIUZul7TUZ3Lv1DR3ircAzCm7aHMNXaNGzMolAfUSx1Gq5OG9AF3%2FEjZslvHfZAufHFbTbzWpnEE%2FwjJFzqjHaf5rZSqOodNzk0EqqM5r0t8f5Y0VfnL%2F%2FxO4XEl2c%2BiiQYFgCN9fk4bQcyR%2FcaS8FUmiMSrc3ydaDbQE1D09ObYNq5qkxaEHH8MNbRhHbL%2BM4lKnJYW%2FOqRNWdwk8m4ZkCYHSXMGv76jMJRqUYEonjTxW1BftfjdKgcc9cQ4Nlz1WuuaLvWm34XkWeBnSon4yDeyF3QTfkzpuZwrvjXAzzakMIb4CMFsmXn5DOwNcNBAGJ8dL9Ac1OU51swH5Kzeu90EwiXud03mgk2UP9IJ5nSiCW13vYvvZzPV%2F6ZLhq3yngST9mDakhVX0PKQmXi%2FXUW%2FNt%2Fc%2Bk2gJlAWJ4VeZHHWCZ%2BAsx017E1EbGsVAlJHESH2F40nyhGE0Pe84lYCBJtedz4ycwUclASJYuFfmc2N7j8fWZJ7Ti836SK0pSFDZaVBjfJOsdD8yTWsNpo7vlFHajygJ3SZrtlDXMG2KDbn%2F6%2FG5pQAet2n4PXKj6lvF7utPYrU1Ma1fbjgsx9t5%2BaiDXpmjTtRbAgUbSRlmx0uvtNlvKLJmZLRCQdyqDQOaZgTiX0nF7sstXTMIXmrMAGOqUBIL5Z3QdncgAZZR96%2FE3nbNQxqFGQGBVS21r5bU66psvuT%2FpF3XBdofgb4%2FOvZbX3g7O0ZNpBG8bDKDp6B4a9p7U7RBXwKV7%2B4PqMGAfoqeYHK9lqaqT%2FsRAzYpPmq0lLH4TaqzY%2Bqh5XKI7OtHEeJYWAjyQDDdrXFmKwJTrh87cx6Zs9hkBKPT8MbJMvJbRSlGYgf7dyMQh%2BfWb2ukr2Be%2FKjx%2F1&X-Amz-Signature=43a0f537e34593754357ce9ad4b0905d07ff949a28b04fafdc437e0b494539a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ3CM25U%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEJuJtQbbGi2UEkU8r0IlopYOtq%2FlPwufQ%2FBT92VKcIAiEAqDYbJvXJ%2BC3mpEJTXmrTs56FM6jZVChs075QW2pZ1jEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIUZul7TUZ3Lv1DR3ircAzCm7aHMNXaNGzMolAfUSx1Gq5OG9AF3%2FEjZslvHfZAufHFbTbzWpnEE%2FwjJFzqjHaf5rZSqOodNzk0EqqM5r0t8f5Y0VfnL%2F%2FxO4XEl2c%2BiiQYFgCN9fk4bQcyR%2FcaS8FUmiMSrc3ydaDbQE1D09ObYNq5qkxaEHH8MNbRhHbL%2BM4lKnJYW%2FOqRNWdwk8m4ZkCYHSXMGv76jMJRqUYEonjTxW1BftfjdKgcc9cQ4Nlz1WuuaLvWm34XkWeBnSon4yDeyF3QTfkzpuZwrvjXAzzakMIb4CMFsmXn5DOwNcNBAGJ8dL9Ac1OU51swH5Kzeu90EwiXud03mgk2UP9IJ5nSiCW13vYvvZzPV%2F6ZLhq3yngST9mDakhVX0PKQmXi%2FXUW%2FNt%2Fc%2Bk2gJlAWJ4VeZHHWCZ%2BAsx017E1EbGsVAlJHESH2F40nyhGE0Pe84lYCBJtedz4ycwUclASJYuFfmc2N7j8fWZJ7Ti836SK0pSFDZaVBjfJOsdD8yTWsNpo7vlFHajygJ3SZrtlDXMG2KDbn%2F6%2FG5pQAet2n4PXKj6lvF7utPYrU1Ma1fbjgsx9t5%2BaiDXpmjTtRbAgUbSRlmx0uvtNlvKLJmZLRCQdyqDQOaZgTiX0nF7sstXTMIXmrMAGOqUBIL5Z3QdncgAZZR96%2FE3nbNQxqFGQGBVS21r5bU66psvuT%2FpF3XBdofgb4%2FOvZbX3g7O0ZNpBG8bDKDp6B4a9p7U7RBXwKV7%2B4PqMGAfoqeYHK9lqaqT%2FsRAzYpPmq0lLH4TaqzY%2Bqh5XKI7OtHEeJYWAjyQDDdrXFmKwJTrh87cx6Zs9hkBKPT8MbJMvJbRSlGYgf7dyMQh%2BfWb2ukr2Be%2FKjx%2F1&X-Amz-Signature=74ea34aa444ad49b09b7867a38b2ec32599dd6d8d1e40551a56627c6eaf079a8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ3CM25U%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEJuJtQbbGi2UEkU8r0IlopYOtq%2FlPwufQ%2FBT92VKcIAiEAqDYbJvXJ%2BC3mpEJTXmrTs56FM6jZVChs075QW2pZ1jEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIUZul7TUZ3Lv1DR3ircAzCm7aHMNXaNGzMolAfUSx1Gq5OG9AF3%2FEjZslvHfZAufHFbTbzWpnEE%2FwjJFzqjHaf5rZSqOodNzk0EqqM5r0t8f5Y0VfnL%2F%2FxO4XEl2c%2BiiQYFgCN9fk4bQcyR%2FcaS8FUmiMSrc3ydaDbQE1D09ObYNq5qkxaEHH8MNbRhHbL%2BM4lKnJYW%2FOqRNWdwk8m4ZkCYHSXMGv76jMJRqUYEonjTxW1BftfjdKgcc9cQ4Nlz1WuuaLvWm34XkWeBnSon4yDeyF3QTfkzpuZwrvjXAzzakMIb4CMFsmXn5DOwNcNBAGJ8dL9Ac1OU51swH5Kzeu90EwiXud03mgk2UP9IJ5nSiCW13vYvvZzPV%2F6ZLhq3yngST9mDakhVX0PKQmXi%2FXUW%2FNt%2Fc%2Bk2gJlAWJ4VeZHHWCZ%2BAsx017E1EbGsVAlJHESH2F40nyhGE0Pe84lYCBJtedz4ycwUclASJYuFfmc2N7j8fWZJ7Ti836SK0pSFDZaVBjfJOsdD8yTWsNpo7vlFHajygJ3SZrtlDXMG2KDbn%2F6%2FG5pQAet2n4PXKj6lvF7utPYrU1Ma1fbjgsx9t5%2BaiDXpmjTtRbAgUbSRlmx0uvtNlvKLJmZLRCQdyqDQOaZgTiX0nF7sstXTMIXmrMAGOqUBIL5Z3QdncgAZZR96%2FE3nbNQxqFGQGBVS21r5bU66psvuT%2FpF3XBdofgb4%2FOvZbX3g7O0ZNpBG8bDKDp6B4a9p7U7RBXwKV7%2B4PqMGAfoqeYHK9lqaqT%2FsRAzYpPmq0lLH4TaqzY%2Bqh5XKI7OtHEeJYWAjyQDDdrXFmKwJTrh87cx6Zs9hkBKPT8MbJMvJbRSlGYgf7dyMQh%2BfWb2ukr2Be%2FKjx%2F1&X-Amz-Signature=554e16b504f316ade04fce949ec6332cee24ed5b8a508372fbef410e4ae72664&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ3CM25U%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEJuJtQbbGi2UEkU8r0IlopYOtq%2FlPwufQ%2FBT92VKcIAiEAqDYbJvXJ%2BC3mpEJTXmrTs56FM6jZVChs075QW2pZ1jEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIUZul7TUZ3Lv1DR3ircAzCm7aHMNXaNGzMolAfUSx1Gq5OG9AF3%2FEjZslvHfZAufHFbTbzWpnEE%2FwjJFzqjHaf5rZSqOodNzk0EqqM5r0t8f5Y0VfnL%2F%2FxO4XEl2c%2BiiQYFgCN9fk4bQcyR%2FcaS8FUmiMSrc3ydaDbQE1D09ObYNq5qkxaEHH8MNbRhHbL%2BM4lKnJYW%2FOqRNWdwk8m4ZkCYHSXMGv76jMJRqUYEonjTxW1BftfjdKgcc9cQ4Nlz1WuuaLvWm34XkWeBnSon4yDeyF3QTfkzpuZwrvjXAzzakMIb4CMFsmXn5DOwNcNBAGJ8dL9Ac1OU51swH5Kzeu90EwiXud03mgk2UP9IJ5nSiCW13vYvvZzPV%2F6ZLhq3yngST9mDakhVX0PKQmXi%2FXUW%2FNt%2Fc%2Bk2gJlAWJ4VeZHHWCZ%2BAsx017E1EbGsVAlJHESH2F40nyhGE0Pe84lYCBJtedz4ycwUclASJYuFfmc2N7j8fWZJ7Ti836SK0pSFDZaVBjfJOsdD8yTWsNpo7vlFHajygJ3SZrtlDXMG2KDbn%2F6%2FG5pQAet2n4PXKj6lvF7utPYrU1Ma1fbjgsx9t5%2BaiDXpmjTtRbAgUbSRlmx0uvtNlvKLJmZLRCQdyqDQOaZgTiX0nF7sstXTMIXmrMAGOqUBIL5Z3QdncgAZZR96%2FE3nbNQxqFGQGBVS21r5bU66psvuT%2FpF3XBdofgb4%2FOvZbX3g7O0ZNpBG8bDKDp6B4a9p7U7RBXwKV7%2B4PqMGAfoqeYHK9lqaqT%2FsRAzYpPmq0lLH4TaqzY%2Bqh5XKI7OtHEeJYWAjyQDDdrXFmKwJTrh87cx6Zs9hkBKPT8MbJMvJbRSlGYgf7dyMQh%2BfWb2ukr2Be%2FKjx%2F1&X-Amz-Signature=645585671e98f5e12e458aa15de07f94bb107007e1517197c3f5d4884b69c76d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ3CM25U%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEJuJtQbbGi2UEkU8r0IlopYOtq%2FlPwufQ%2FBT92VKcIAiEAqDYbJvXJ%2BC3mpEJTXmrTs56FM6jZVChs075QW2pZ1jEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIUZul7TUZ3Lv1DR3ircAzCm7aHMNXaNGzMolAfUSx1Gq5OG9AF3%2FEjZslvHfZAufHFbTbzWpnEE%2FwjJFzqjHaf5rZSqOodNzk0EqqM5r0t8f5Y0VfnL%2F%2FxO4XEl2c%2BiiQYFgCN9fk4bQcyR%2FcaS8FUmiMSrc3ydaDbQE1D09ObYNq5qkxaEHH8MNbRhHbL%2BM4lKnJYW%2FOqRNWdwk8m4ZkCYHSXMGv76jMJRqUYEonjTxW1BftfjdKgcc9cQ4Nlz1WuuaLvWm34XkWeBnSon4yDeyF3QTfkzpuZwrvjXAzzakMIb4CMFsmXn5DOwNcNBAGJ8dL9Ac1OU51swH5Kzeu90EwiXud03mgk2UP9IJ5nSiCW13vYvvZzPV%2F6ZLhq3yngST9mDakhVX0PKQmXi%2FXUW%2FNt%2Fc%2Bk2gJlAWJ4VeZHHWCZ%2BAsx017E1EbGsVAlJHESH2F40nyhGE0Pe84lYCBJtedz4ycwUclASJYuFfmc2N7j8fWZJ7Ti836SK0pSFDZaVBjfJOsdD8yTWsNpo7vlFHajygJ3SZrtlDXMG2KDbn%2F6%2FG5pQAet2n4PXKj6lvF7utPYrU1Ma1fbjgsx9t5%2BaiDXpmjTtRbAgUbSRlmx0uvtNlvKLJmZLRCQdyqDQOaZgTiX0nF7sstXTMIXmrMAGOqUBIL5Z3QdncgAZZR96%2FE3nbNQxqFGQGBVS21r5bU66psvuT%2FpF3XBdofgb4%2FOvZbX3g7O0ZNpBG8bDKDp6B4a9p7U7RBXwKV7%2B4PqMGAfoqeYHK9lqaqT%2FsRAzYpPmq0lLH4TaqzY%2Bqh5XKI7OtHEeJYWAjyQDDdrXFmKwJTrh87cx6Zs9hkBKPT8MbJMvJbRSlGYgf7dyMQh%2BfWb2ukr2Be%2FKjx%2F1&X-Amz-Signature=e7aca9de019924903380eae366c6a742e2e7b5db0bc59c79e5a17ab99e58bf38&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
