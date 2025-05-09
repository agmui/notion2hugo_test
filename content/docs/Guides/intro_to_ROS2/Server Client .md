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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHSBMEG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBTS9PihIWpjfJPaaUy2rtrS45KcGyVFa9tQGBHscmkAiEAugFkJQapYk5mvrbxQP3Sxr0BbRTHxQqEk6GgoZ2vA6IqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbuuZZj3Wh%2FDEX1XSrcA5HbN9vFjiNNM3mV2p1qM0LhIulhEcJxz%2B9tT8P42%2FwgqFkxCwpWpCwfZePkEACDZMP2ZgCrkp1KQ8MZcvg8wsHrbtjIOnEIemKqzdyhodXgbVrnmmTud1oFEg4b%2Bd7CQtFoLnTmxMisUjkUfrtYlJQKaRB5dplRgV7U%2F9tITLd2FNC7uo53AuxQ%2FS2AInMOHK9IjL2fQoKfeayZcWY2jIoX2Sk%2FkVIojaiB3dM3m8ZuLR1Je3B%2Beg6UfssLLUxAv4pt%2BiZcDqEqgU6N71kTXEOtmkG22EoPVSA0vROqhhaLwbgdUzsKuos5OzyfoTIr5%2BPC77GTsVF7fzBLNkqXM%2B4tDVcy4y9VB7Li67cCKRP7jhzrPkVatks%2BVTAfcINZY2pumfeqVaQ7k6kRBXJDVHvFuPZa1gyTLqFmpsDTsbsG%2BPDChoWk4waAMCdI059mjRe2Ehg8Z9uJs4zlFl9%2BIR6mqZR6oKd%2B0qzcil4filg3gwW2U2f3Hr15BWT6pq4A6FucSIZaxtgFocmg4HtH6xbdVeq3I35tmKkilTByWJFmvpMj5Cnae%2BcYDd0HrcR5klnOEJgwAufd0Znz8MN%2FNjmKiu%2FJy9q2qP3gLYzxcKwwY7ervRqQA0kBs9VHMOzM9cAGOqUB1iBWFvz8ZdHKRqEdUCovAKqurd0PIZvGDi5O%2ByLWgNtK7JnA27kAtlFlEJR699bXkM0l2ioJ9eZaFGJOetF87pup81XtGEBspv2TQX1dNpronps6XgqOL%2FIv7MO%2B1%2FwQtQKnxUPzDibP9kX3ITHG37EpTiV4e9JwH4rEbQD12T4hQpdVzpZERlGzbEBxFe4lZkctwM%2FdtTQy8T0g5I5UXoMvJGn6&X-Amz-Signature=74d361921db683f869bd311a0403c1c0a721dbfff915de4856e8f07430a50d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHSBMEG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBTS9PihIWpjfJPaaUy2rtrS45KcGyVFa9tQGBHscmkAiEAugFkJQapYk5mvrbxQP3Sxr0BbRTHxQqEk6GgoZ2vA6IqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbuuZZj3Wh%2FDEX1XSrcA5HbN9vFjiNNM3mV2p1qM0LhIulhEcJxz%2B9tT8P42%2FwgqFkxCwpWpCwfZePkEACDZMP2ZgCrkp1KQ8MZcvg8wsHrbtjIOnEIemKqzdyhodXgbVrnmmTud1oFEg4b%2Bd7CQtFoLnTmxMisUjkUfrtYlJQKaRB5dplRgV7U%2F9tITLd2FNC7uo53AuxQ%2FS2AInMOHK9IjL2fQoKfeayZcWY2jIoX2Sk%2FkVIojaiB3dM3m8ZuLR1Je3B%2Beg6UfssLLUxAv4pt%2BiZcDqEqgU6N71kTXEOtmkG22EoPVSA0vROqhhaLwbgdUzsKuos5OzyfoTIr5%2BPC77GTsVF7fzBLNkqXM%2B4tDVcy4y9VB7Li67cCKRP7jhzrPkVatks%2BVTAfcINZY2pumfeqVaQ7k6kRBXJDVHvFuPZa1gyTLqFmpsDTsbsG%2BPDChoWk4waAMCdI059mjRe2Ehg8Z9uJs4zlFl9%2BIR6mqZR6oKd%2B0qzcil4filg3gwW2U2f3Hr15BWT6pq4A6FucSIZaxtgFocmg4HtH6xbdVeq3I35tmKkilTByWJFmvpMj5Cnae%2BcYDd0HrcR5klnOEJgwAufd0Znz8MN%2FNjmKiu%2FJy9q2qP3gLYzxcKwwY7ervRqQA0kBs9VHMOzM9cAGOqUB1iBWFvz8ZdHKRqEdUCovAKqurd0PIZvGDi5O%2ByLWgNtK7JnA27kAtlFlEJR699bXkM0l2ioJ9eZaFGJOetF87pup81XtGEBspv2TQX1dNpronps6XgqOL%2FIv7MO%2B1%2FwQtQKnxUPzDibP9kX3ITHG37EpTiV4e9JwH4rEbQD12T4hQpdVzpZERlGzbEBxFe4lZkctwM%2FdtTQy8T0g5I5UXoMvJGn6&X-Amz-Signature=f986849c8abebca0ab7c282170b61a6b2906eae6c1ca86d88fcec01a94b346f9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHSBMEG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBTS9PihIWpjfJPaaUy2rtrS45KcGyVFa9tQGBHscmkAiEAugFkJQapYk5mvrbxQP3Sxr0BbRTHxQqEk6GgoZ2vA6IqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbuuZZj3Wh%2FDEX1XSrcA5HbN9vFjiNNM3mV2p1qM0LhIulhEcJxz%2B9tT8P42%2FwgqFkxCwpWpCwfZePkEACDZMP2ZgCrkp1KQ8MZcvg8wsHrbtjIOnEIemKqzdyhodXgbVrnmmTud1oFEg4b%2Bd7CQtFoLnTmxMisUjkUfrtYlJQKaRB5dplRgV7U%2F9tITLd2FNC7uo53AuxQ%2FS2AInMOHK9IjL2fQoKfeayZcWY2jIoX2Sk%2FkVIojaiB3dM3m8ZuLR1Je3B%2Beg6UfssLLUxAv4pt%2BiZcDqEqgU6N71kTXEOtmkG22EoPVSA0vROqhhaLwbgdUzsKuos5OzyfoTIr5%2BPC77GTsVF7fzBLNkqXM%2B4tDVcy4y9VB7Li67cCKRP7jhzrPkVatks%2BVTAfcINZY2pumfeqVaQ7k6kRBXJDVHvFuPZa1gyTLqFmpsDTsbsG%2BPDChoWk4waAMCdI059mjRe2Ehg8Z9uJs4zlFl9%2BIR6mqZR6oKd%2B0qzcil4filg3gwW2U2f3Hr15BWT6pq4A6FucSIZaxtgFocmg4HtH6xbdVeq3I35tmKkilTByWJFmvpMj5Cnae%2BcYDd0HrcR5klnOEJgwAufd0Znz8MN%2FNjmKiu%2FJy9q2qP3gLYzxcKwwY7ervRqQA0kBs9VHMOzM9cAGOqUB1iBWFvz8ZdHKRqEdUCovAKqurd0PIZvGDi5O%2ByLWgNtK7JnA27kAtlFlEJR699bXkM0l2ioJ9eZaFGJOetF87pup81XtGEBspv2TQX1dNpronps6XgqOL%2FIv7MO%2B1%2FwQtQKnxUPzDibP9kX3ITHG37EpTiV4e9JwH4rEbQD12T4hQpdVzpZERlGzbEBxFe4lZkctwM%2FdtTQy8T0g5I5UXoMvJGn6&X-Amz-Signature=36fb82b5c6f26f6fed41edc94a6ce579262a6646344f528725884d9f6dcba125&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHSBMEG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBTS9PihIWpjfJPaaUy2rtrS45KcGyVFa9tQGBHscmkAiEAugFkJQapYk5mvrbxQP3Sxr0BbRTHxQqEk6GgoZ2vA6IqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbuuZZj3Wh%2FDEX1XSrcA5HbN9vFjiNNM3mV2p1qM0LhIulhEcJxz%2B9tT8P42%2FwgqFkxCwpWpCwfZePkEACDZMP2ZgCrkp1KQ8MZcvg8wsHrbtjIOnEIemKqzdyhodXgbVrnmmTud1oFEg4b%2Bd7CQtFoLnTmxMisUjkUfrtYlJQKaRB5dplRgV7U%2F9tITLd2FNC7uo53AuxQ%2FS2AInMOHK9IjL2fQoKfeayZcWY2jIoX2Sk%2FkVIojaiB3dM3m8ZuLR1Je3B%2Beg6UfssLLUxAv4pt%2BiZcDqEqgU6N71kTXEOtmkG22EoPVSA0vROqhhaLwbgdUzsKuos5OzyfoTIr5%2BPC77GTsVF7fzBLNkqXM%2B4tDVcy4y9VB7Li67cCKRP7jhzrPkVatks%2BVTAfcINZY2pumfeqVaQ7k6kRBXJDVHvFuPZa1gyTLqFmpsDTsbsG%2BPDChoWk4waAMCdI059mjRe2Ehg8Z9uJs4zlFl9%2BIR6mqZR6oKd%2B0qzcil4filg3gwW2U2f3Hr15BWT6pq4A6FucSIZaxtgFocmg4HtH6xbdVeq3I35tmKkilTByWJFmvpMj5Cnae%2BcYDd0HrcR5klnOEJgwAufd0Znz8MN%2FNjmKiu%2FJy9q2qP3gLYzxcKwwY7ervRqQA0kBs9VHMOzM9cAGOqUB1iBWFvz8ZdHKRqEdUCovAKqurd0PIZvGDi5O%2ByLWgNtK7JnA27kAtlFlEJR699bXkM0l2ioJ9eZaFGJOetF87pup81XtGEBspv2TQX1dNpronps6XgqOL%2FIv7MO%2B1%2FwQtQKnxUPzDibP9kX3ITHG37EpTiV4e9JwH4rEbQD12T4hQpdVzpZERlGzbEBxFe4lZkctwM%2FdtTQy8T0g5I5UXoMvJGn6&X-Amz-Signature=57074abc17e57f602c9405728b3432afd5465025240dcc7ac0aa12082d937b73&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHSBMEG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBTS9PihIWpjfJPaaUy2rtrS45KcGyVFa9tQGBHscmkAiEAugFkJQapYk5mvrbxQP3Sxr0BbRTHxQqEk6GgoZ2vA6IqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbuuZZj3Wh%2FDEX1XSrcA5HbN9vFjiNNM3mV2p1qM0LhIulhEcJxz%2B9tT8P42%2FwgqFkxCwpWpCwfZePkEACDZMP2ZgCrkp1KQ8MZcvg8wsHrbtjIOnEIemKqzdyhodXgbVrnmmTud1oFEg4b%2Bd7CQtFoLnTmxMisUjkUfrtYlJQKaRB5dplRgV7U%2F9tITLd2FNC7uo53AuxQ%2FS2AInMOHK9IjL2fQoKfeayZcWY2jIoX2Sk%2FkVIojaiB3dM3m8ZuLR1Je3B%2Beg6UfssLLUxAv4pt%2BiZcDqEqgU6N71kTXEOtmkG22EoPVSA0vROqhhaLwbgdUzsKuos5OzyfoTIr5%2BPC77GTsVF7fzBLNkqXM%2B4tDVcy4y9VB7Li67cCKRP7jhzrPkVatks%2BVTAfcINZY2pumfeqVaQ7k6kRBXJDVHvFuPZa1gyTLqFmpsDTsbsG%2BPDChoWk4waAMCdI059mjRe2Ehg8Z9uJs4zlFl9%2BIR6mqZR6oKd%2B0qzcil4filg3gwW2U2f3Hr15BWT6pq4A6FucSIZaxtgFocmg4HtH6xbdVeq3I35tmKkilTByWJFmvpMj5Cnae%2BcYDd0HrcR5klnOEJgwAufd0Znz8MN%2FNjmKiu%2FJy9q2qP3gLYzxcKwwY7ervRqQA0kBs9VHMOzM9cAGOqUB1iBWFvz8ZdHKRqEdUCovAKqurd0PIZvGDi5O%2ByLWgNtK7JnA27kAtlFlEJR699bXkM0l2ioJ9eZaFGJOetF87pup81XtGEBspv2TQX1dNpronps6XgqOL%2FIv7MO%2B1%2FwQtQKnxUPzDibP9kX3ITHG37EpTiV4e9JwH4rEbQD12T4hQpdVzpZERlGzbEBxFe4lZkctwM%2FdtTQy8T0g5I5UXoMvJGn6&X-Amz-Signature=1439708d6d94aee8f4a07b205e3d3da1c7ccc68af2f9638193ff6dc8c41a0615&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
