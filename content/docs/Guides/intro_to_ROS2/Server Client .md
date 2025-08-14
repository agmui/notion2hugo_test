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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7PLQA7C%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXRObGAkaYXBdEzV9g3eqVlD%2Faoo4vhuODlvrsuyZccAiEAgr3Xp846AGldcc6Loe8%2Fr0rzbzzk6jQr1RoJlWT1G5Yq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDE2QM4FxEmbCfqMVmircAz9msMJhkosSzA3woTg0IiIdYcRb2SHmXVtL7Ufp0d9iz5vwjnLGp3Y2f5udvSVaRAKkwtQ8ebiBJ72XFgghy55Qj3YJOWstLX3sbuXbGBP2KXBHGut6Q7Bk3v4q7Bp%2FYrMwfMULu7OtbPJGKO9UOeKV0Xyn9mjGx2yYkRpzXjR%2F1twwjoBY04bFseERgGo4SH1aDnAESE%2BEaq3rpgXuwlMhwnI30ZaY8CKOd3edDGnHC9r%2FdvzCr%2BCf%2BznN6zLKuGYNr6Hf379gg6XRrubiB5cpfutIKFjjE4%2BUhC1NtxhwfVPT1XanF2Js8KDA2qTGFD7b%2FP7tsxIt9bu0VsfLYkaXcCIdZosK2totHPfd8Z5IXlzRHdOaTJCSSUlN09SVQXtPHHn9kE7u7%2B6VnloWcjqHX5ZaoeJgRXmzgRb9CJcEwhX4HAH7TRQKeBynDD0zkzjso6QshSB8akn%2FXINuQNF%2F6Ht2ZraY2vQhztt4dUE6%2B9U7hYf88sgWjJtPTUYdFYbEQwrEnzwLHO2Tp5o4qmSBZKkxBz2XWNWrV8rlOuWbiJQOot2U%2BSsgESnKeAIKUKrebgJmC3IYTo1Yzem2MR0xXkldWuRXLrvV1V5em07xunLZVve5R5dqvdkJMMOE98QGOqUBBp5j%2F%2FvfniUqGnbtcw4iAtPktJJJFvz4nptSH6jhJUy%2FmFYrHcys9d2dK4CBY2Rra0%2FYaiyc4sceo8Nc%2BfMBnmFnzhtdMoa5ZfCkqrtjhruF1fUvaNd3xfBGSWkDk%2BdfqIUyU6schevc2CPSrtDWFgkXrWzab6ygPkSuPkZkUpUV%2FPNEXrRKrWBQpTUSL3chIJKlB%2FfQ%2Fu12l536ufZNe4WRhKQW&X-Amz-Signature=12fe25687bdf6a12cf0c35603ee6bbb33f79574313113902d62050f60cd20733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7PLQA7C%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXRObGAkaYXBdEzV9g3eqVlD%2Faoo4vhuODlvrsuyZccAiEAgr3Xp846AGldcc6Loe8%2Fr0rzbzzk6jQr1RoJlWT1G5Yq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDE2QM4FxEmbCfqMVmircAz9msMJhkosSzA3woTg0IiIdYcRb2SHmXVtL7Ufp0d9iz5vwjnLGp3Y2f5udvSVaRAKkwtQ8ebiBJ72XFgghy55Qj3YJOWstLX3sbuXbGBP2KXBHGut6Q7Bk3v4q7Bp%2FYrMwfMULu7OtbPJGKO9UOeKV0Xyn9mjGx2yYkRpzXjR%2F1twwjoBY04bFseERgGo4SH1aDnAESE%2BEaq3rpgXuwlMhwnI30ZaY8CKOd3edDGnHC9r%2FdvzCr%2BCf%2BznN6zLKuGYNr6Hf379gg6XRrubiB5cpfutIKFjjE4%2BUhC1NtxhwfVPT1XanF2Js8KDA2qTGFD7b%2FP7tsxIt9bu0VsfLYkaXcCIdZosK2totHPfd8Z5IXlzRHdOaTJCSSUlN09SVQXtPHHn9kE7u7%2B6VnloWcjqHX5ZaoeJgRXmzgRb9CJcEwhX4HAH7TRQKeBynDD0zkzjso6QshSB8akn%2FXINuQNF%2F6Ht2ZraY2vQhztt4dUE6%2B9U7hYf88sgWjJtPTUYdFYbEQwrEnzwLHO2Tp5o4qmSBZKkxBz2XWNWrV8rlOuWbiJQOot2U%2BSsgESnKeAIKUKrebgJmC3IYTo1Yzem2MR0xXkldWuRXLrvV1V5em07xunLZVve5R5dqvdkJMMOE98QGOqUBBp5j%2F%2FvfniUqGnbtcw4iAtPktJJJFvz4nptSH6jhJUy%2FmFYrHcys9d2dK4CBY2Rra0%2FYaiyc4sceo8Nc%2BfMBnmFnzhtdMoa5ZfCkqrtjhruF1fUvaNd3xfBGSWkDk%2BdfqIUyU6schevc2CPSrtDWFgkXrWzab6ygPkSuPkZkUpUV%2FPNEXrRKrWBQpTUSL3chIJKlB%2FfQ%2Fu12l536ufZNe4WRhKQW&X-Amz-Signature=2b0a9e19c673e84922e479ce63da67e872ab04ab9127896c12dc4f95ee7461a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7PLQA7C%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXRObGAkaYXBdEzV9g3eqVlD%2Faoo4vhuODlvrsuyZccAiEAgr3Xp846AGldcc6Loe8%2Fr0rzbzzk6jQr1RoJlWT1G5Yq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDE2QM4FxEmbCfqMVmircAz9msMJhkosSzA3woTg0IiIdYcRb2SHmXVtL7Ufp0d9iz5vwjnLGp3Y2f5udvSVaRAKkwtQ8ebiBJ72XFgghy55Qj3YJOWstLX3sbuXbGBP2KXBHGut6Q7Bk3v4q7Bp%2FYrMwfMULu7OtbPJGKO9UOeKV0Xyn9mjGx2yYkRpzXjR%2F1twwjoBY04bFseERgGo4SH1aDnAESE%2BEaq3rpgXuwlMhwnI30ZaY8CKOd3edDGnHC9r%2FdvzCr%2BCf%2BznN6zLKuGYNr6Hf379gg6XRrubiB5cpfutIKFjjE4%2BUhC1NtxhwfVPT1XanF2Js8KDA2qTGFD7b%2FP7tsxIt9bu0VsfLYkaXcCIdZosK2totHPfd8Z5IXlzRHdOaTJCSSUlN09SVQXtPHHn9kE7u7%2B6VnloWcjqHX5ZaoeJgRXmzgRb9CJcEwhX4HAH7TRQKeBynDD0zkzjso6QshSB8akn%2FXINuQNF%2F6Ht2ZraY2vQhztt4dUE6%2B9U7hYf88sgWjJtPTUYdFYbEQwrEnzwLHO2Tp5o4qmSBZKkxBz2XWNWrV8rlOuWbiJQOot2U%2BSsgESnKeAIKUKrebgJmC3IYTo1Yzem2MR0xXkldWuRXLrvV1V5em07xunLZVve5R5dqvdkJMMOE98QGOqUBBp5j%2F%2FvfniUqGnbtcw4iAtPktJJJFvz4nptSH6jhJUy%2FmFYrHcys9d2dK4CBY2Rra0%2FYaiyc4sceo8Nc%2BfMBnmFnzhtdMoa5ZfCkqrtjhruF1fUvaNd3xfBGSWkDk%2BdfqIUyU6schevc2CPSrtDWFgkXrWzab6ygPkSuPkZkUpUV%2FPNEXrRKrWBQpTUSL3chIJKlB%2FfQ%2Fu12l536ufZNe4WRhKQW&X-Amz-Signature=2f852697b35391794daa0148c2edb1997e0ec2633b9a89de4132a18e84c19632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7PLQA7C%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXRObGAkaYXBdEzV9g3eqVlD%2Faoo4vhuODlvrsuyZccAiEAgr3Xp846AGldcc6Loe8%2Fr0rzbzzk6jQr1RoJlWT1G5Yq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDE2QM4FxEmbCfqMVmircAz9msMJhkosSzA3woTg0IiIdYcRb2SHmXVtL7Ufp0d9iz5vwjnLGp3Y2f5udvSVaRAKkwtQ8ebiBJ72XFgghy55Qj3YJOWstLX3sbuXbGBP2KXBHGut6Q7Bk3v4q7Bp%2FYrMwfMULu7OtbPJGKO9UOeKV0Xyn9mjGx2yYkRpzXjR%2F1twwjoBY04bFseERgGo4SH1aDnAESE%2BEaq3rpgXuwlMhwnI30ZaY8CKOd3edDGnHC9r%2FdvzCr%2BCf%2BznN6zLKuGYNr6Hf379gg6XRrubiB5cpfutIKFjjE4%2BUhC1NtxhwfVPT1XanF2Js8KDA2qTGFD7b%2FP7tsxIt9bu0VsfLYkaXcCIdZosK2totHPfd8Z5IXlzRHdOaTJCSSUlN09SVQXtPHHn9kE7u7%2B6VnloWcjqHX5ZaoeJgRXmzgRb9CJcEwhX4HAH7TRQKeBynDD0zkzjso6QshSB8akn%2FXINuQNF%2F6Ht2ZraY2vQhztt4dUE6%2B9U7hYf88sgWjJtPTUYdFYbEQwrEnzwLHO2Tp5o4qmSBZKkxBz2XWNWrV8rlOuWbiJQOot2U%2BSsgESnKeAIKUKrebgJmC3IYTo1Yzem2MR0xXkldWuRXLrvV1V5em07xunLZVve5R5dqvdkJMMOE98QGOqUBBp5j%2F%2FvfniUqGnbtcw4iAtPktJJJFvz4nptSH6jhJUy%2FmFYrHcys9d2dK4CBY2Rra0%2FYaiyc4sceo8Nc%2BfMBnmFnzhtdMoa5ZfCkqrtjhruF1fUvaNd3xfBGSWkDk%2BdfqIUyU6schevc2CPSrtDWFgkXrWzab6ygPkSuPkZkUpUV%2FPNEXrRKrWBQpTUSL3chIJKlB%2FfQ%2Fu12l536ufZNe4WRhKQW&X-Amz-Signature=baecd796d38c03508e342bcb9cd3107480ca4a6c8de62ea31994e47639f8a409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7PLQA7C%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXRObGAkaYXBdEzV9g3eqVlD%2Faoo4vhuODlvrsuyZccAiEAgr3Xp846AGldcc6Loe8%2Fr0rzbzzk6jQr1RoJlWT1G5Yq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDE2QM4FxEmbCfqMVmircAz9msMJhkosSzA3woTg0IiIdYcRb2SHmXVtL7Ufp0d9iz5vwjnLGp3Y2f5udvSVaRAKkwtQ8ebiBJ72XFgghy55Qj3YJOWstLX3sbuXbGBP2KXBHGut6Q7Bk3v4q7Bp%2FYrMwfMULu7OtbPJGKO9UOeKV0Xyn9mjGx2yYkRpzXjR%2F1twwjoBY04bFseERgGo4SH1aDnAESE%2BEaq3rpgXuwlMhwnI30ZaY8CKOd3edDGnHC9r%2FdvzCr%2BCf%2BznN6zLKuGYNr6Hf379gg6XRrubiB5cpfutIKFjjE4%2BUhC1NtxhwfVPT1XanF2Js8KDA2qTGFD7b%2FP7tsxIt9bu0VsfLYkaXcCIdZosK2totHPfd8Z5IXlzRHdOaTJCSSUlN09SVQXtPHHn9kE7u7%2B6VnloWcjqHX5ZaoeJgRXmzgRb9CJcEwhX4HAH7TRQKeBynDD0zkzjso6QshSB8akn%2FXINuQNF%2F6Ht2ZraY2vQhztt4dUE6%2B9U7hYf88sgWjJtPTUYdFYbEQwrEnzwLHO2Tp5o4qmSBZKkxBz2XWNWrV8rlOuWbiJQOot2U%2BSsgESnKeAIKUKrebgJmC3IYTo1Yzem2MR0xXkldWuRXLrvV1V5em07xunLZVve5R5dqvdkJMMOE98QGOqUBBp5j%2F%2FvfniUqGnbtcw4iAtPktJJJFvz4nptSH6jhJUy%2FmFYrHcys9d2dK4CBY2Rra0%2FYaiyc4sceo8Nc%2BfMBnmFnzhtdMoa5ZfCkqrtjhruF1fUvaNd3xfBGSWkDk%2BdfqIUyU6schevc2CPSrtDWFgkXrWzab6ygPkSuPkZkUpUV%2FPNEXrRKrWBQpTUSL3chIJKlB%2FfQ%2Fu12l536ufZNe4WRhKQW&X-Amz-Signature=a66420576072948476e2abd985c3c22a62ce2c7b480932456a9437fc9c70a41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
