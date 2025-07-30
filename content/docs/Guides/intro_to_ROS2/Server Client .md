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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFVADKGH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPJ%2BL21Hbr5CyzOgjwFmTrBi0Pf4A%2FmipElJVYHY7QhAiEA1OEQbKUEJ3qeU%2Fe9lbqLX0t50gPGbc8mSmJg7fonCWMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4RJCzv5fHMVR32FSrcAwgEI77khQauWKFbsY13dje2jV1trGTb6yV3LohKVz1%2BiFVSn66L3xYMGnVAS1TcoIgKSei7Pvu0y6IziEU9gKbB0nM8xoj6EvkiO%2BaCbzFjlRbNGAbpvf2hXfK18BkYRGJa1PMK3YSh9retYBNqvEgFxiJd2IdcSgDMzYtvj5RYA5tmQTj%2FlUacivrsQ8ELhqDEpYRh%2FJzJyaPWWy8V7i7Li6tV4i28lFqZSL%2BURgZJ4eqD3SaeAUrU4GAxXBhOWcxK48V1EpLT%2FqYZ2cN5JRGVq0Wdv5PU66YQpm5%2F0Yda4g%2BbzRVV9LRnOCmoLCBDUSaGjdcxuB9VYplvRt64MqkgyC2YyONS0bF%2Bj2QWxmOYEkiUte6RCvc51JWTJQcQBbme21KQemcfViQbC6%2BkxBsB9IeImmDn1Z8ZydBs%2FS6m792gcEhbadf979PA6AofEGRUEyeWFGE3xEya%2BPemy3EnnjJfDXep0E%2B4n0kRX6%2BXwYsXnUCTFUJE6FHW1j9ZogSvlqVdLmdtY7B2lF0tjBIajHZid4tdIKu2PikOfdSfvhCkxpfH426s7pi%2FkzGNdvGke29feIrpUZoCPyWO7aEjYauWiO5u5wEy4P%2FL37PX17UmBhYngEyA7uwbMOTZpsQGOqUBka4TH%2F7o1plpkY8JdGnNB43Q0Ul5WJ8rAXdfR5KENH03VqzfVsPo%2FVKa1vV7dG1W2qWSpDMN9zOJFO1pGzxBUCB9stXnwB1P0FKAIFFKNTlHyJdYPbI31PtsX0heNe2xWzH2kt5NwcQN5ekB%2FdVcPGkYTx%2Bx%2BGD9edhotxustCyIv%2F0e9DFonGfp%2Bg7iTwC7fwOPKKvfhrZTwUbDpvHP1y4J57jJ&X-Amz-Signature=20edffa152a12bb31c68f9a428a8b3486fe3dc6f51ab744f083c25cbd2ec9734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFVADKGH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPJ%2BL21Hbr5CyzOgjwFmTrBi0Pf4A%2FmipElJVYHY7QhAiEA1OEQbKUEJ3qeU%2Fe9lbqLX0t50gPGbc8mSmJg7fonCWMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4RJCzv5fHMVR32FSrcAwgEI77khQauWKFbsY13dje2jV1trGTb6yV3LohKVz1%2BiFVSn66L3xYMGnVAS1TcoIgKSei7Pvu0y6IziEU9gKbB0nM8xoj6EvkiO%2BaCbzFjlRbNGAbpvf2hXfK18BkYRGJa1PMK3YSh9retYBNqvEgFxiJd2IdcSgDMzYtvj5RYA5tmQTj%2FlUacivrsQ8ELhqDEpYRh%2FJzJyaPWWy8V7i7Li6tV4i28lFqZSL%2BURgZJ4eqD3SaeAUrU4GAxXBhOWcxK48V1EpLT%2FqYZ2cN5JRGVq0Wdv5PU66YQpm5%2F0Yda4g%2BbzRVV9LRnOCmoLCBDUSaGjdcxuB9VYplvRt64MqkgyC2YyONS0bF%2Bj2QWxmOYEkiUte6RCvc51JWTJQcQBbme21KQemcfViQbC6%2BkxBsB9IeImmDn1Z8ZydBs%2FS6m792gcEhbadf979PA6AofEGRUEyeWFGE3xEya%2BPemy3EnnjJfDXep0E%2B4n0kRX6%2BXwYsXnUCTFUJE6FHW1j9ZogSvlqVdLmdtY7B2lF0tjBIajHZid4tdIKu2PikOfdSfvhCkxpfH426s7pi%2FkzGNdvGke29feIrpUZoCPyWO7aEjYauWiO5u5wEy4P%2FL37PX17UmBhYngEyA7uwbMOTZpsQGOqUBka4TH%2F7o1plpkY8JdGnNB43Q0Ul5WJ8rAXdfR5KENH03VqzfVsPo%2FVKa1vV7dG1W2qWSpDMN9zOJFO1pGzxBUCB9stXnwB1P0FKAIFFKNTlHyJdYPbI31PtsX0heNe2xWzH2kt5NwcQN5ekB%2FdVcPGkYTx%2Bx%2BGD9edhotxustCyIv%2F0e9DFonGfp%2Bg7iTwC7fwOPKKvfhrZTwUbDpvHP1y4J57jJ&X-Amz-Signature=a664a7538d8ebd025a6dc84e2772a4b15b178c2f16a9d44c62825beae6ea48a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFVADKGH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPJ%2BL21Hbr5CyzOgjwFmTrBi0Pf4A%2FmipElJVYHY7QhAiEA1OEQbKUEJ3qeU%2Fe9lbqLX0t50gPGbc8mSmJg7fonCWMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4RJCzv5fHMVR32FSrcAwgEI77khQauWKFbsY13dje2jV1trGTb6yV3LohKVz1%2BiFVSn66L3xYMGnVAS1TcoIgKSei7Pvu0y6IziEU9gKbB0nM8xoj6EvkiO%2BaCbzFjlRbNGAbpvf2hXfK18BkYRGJa1PMK3YSh9retYBNqvEgFxiJd2IdcSgDMzYtvj5RYA5tmQTj%2FlUacivrsQ8ELhqDEpYRh%2FJzJyaPWWy8V7i7Li6tV4i28lFqZSL%2BURgZJ4eqD3SaeAUrU4GAxXBhOWcxK48V1EpLT%2FqYZ2cN5JRGVq0Wdv5PU66YQpm5%2F0Yda4g%2BbzRVV9LRnOCmoLCBDUSaGjdcxuB9VYplvRt64MqkgyC2YyONS0bF%2Bj2QWxmOYEkiUte6RCvc51JWTJQcQBbme21KQemcfViQbC6%2BkxBsB9IeImmDn1Z8ZydBs%2FS6m792gcEhbadf979PA6AofEGRUEyeWFGE3xEya%2BPemy3EnnjJfDXep0E%2B4n0kRX6%2BXwYsXnUCTFUJE6FHW1j9ZogSvlqVdLmdtY7B2lF0tjBIajHZid4tdIKu2PikOfdSfvhCkxpfH426s7pi%2FkzGNdvGke29feIrpUZoCPyWO7aEjYauWiO5u5wEy4P%2FL37PX17UmBhYngEyA7uwbMOTZpsQGOqUBka4TH%2F7o1plpkY8JdGnNB43Q0Ul5WJ8rAXdfR5KENH03VqzfVsPo%2FVKa1vV7dG1W2qWSpDMN9zOJFO1pGzxBUCB9stXnwB1P0FKAIFFKNTlHyJdYPbI31PtsX0heNe2xWzH2kt5NwcQN5ekB%2FdVcPGkYTx%2Bx%2BGD9edhotxustCyIv%2F0e9DFonGfp%2Bg7iTwC7fwOPKKvfhrZTwUbDpvHP1y4J57jJ&X-Amz-Signature=3d695599874f088a24ed6358861f8b4e4ee1b70e9495fedcda40b40f04c19c49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFVADKGH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPJ%2BL21Hbr5CyzOgjwFmTrBi0Pf4A%2FmipElJVYHY7QhAiEA1OEQbKUEJ3qeU%2Fe9lbqLX0t50gPGbc8mSmJg7fonCWMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4RJCzv5fHMVR32FSrcAwgEI77khQauWKFbsY13dje2jV1trGTb6yV3LohKVz1%2BiFVSn66L3xYMGnVAS1TcoIgKSei7Pvu0y6IziEU9gKbB0nM8xoj6EvkiO%2BaCbzFjlRbNGAbpvf2hXfK18BkYRGJa1PMK3YSh9retYBNqvEgFxiJd2IdcSgDMzYtvj5RYA5tmQTj%2FlUacivrsQ8ELhqDEpYRh%2FJzJyaPWWy8V7i7Li6tV4i28lFqZSL%2BURgZJ4eqD3SaeAUrU4GAxXBhOWcxK48V1EpLT%2FqYZ2cN5JRGVq0Wdv5PU66YQpm5%2F0Yda4g%2BbzRVV9LRnOCmoLCBDUSaGjdcxuB9VYplvRt64MqkgyC2YyONS0bF%2Bj2QWxmOYEkiUte6RCvc51JWTJQcQBbme21KQemcfViQbC6%2BkxBsB9IeImmDn1Z8ZydBs%2FS6m792gcEhbadf979PA6AofEGRUEyeWFGE3xEya%2BPemy3EnnjJfDXep0E%2B4n0kRX6%2BXwYsXnUCTFUJE6FHW1j9ZogSvlqVdLmdtY7B2lF0tjBIajHZid4tdIKu2PikOfdSfvhCkxpfH426s7pi%2FkzGNdvGke29feIrpUZoCPyWO7aEjYauWiO5u5wEy4P%2FL37PX17UmBhYngEyA7uwbMOTZpsQGOqUBka4TH%2F7o1plpkY8JdGnNB43Q0Ul5WJ8rAXdfR5KENH03VqzfVsPo%2FVKa1vV7dG1W2qWSpDMN9zOJFO1pGzxBUCB9stXnwB1P0FKAIFFKNTlHyJdYPbI31PtsX0heNe2xWzH2kt5NwcQN5ekB%2FdVcPGkYTx%2Bx%2BGD9edhotxustCyIv%2F0e9DFonGfp%2Bg7iTwC7fwOPKKvfhrZTwUbDpvHP1y4J57jJ&X-Amz-Signature=0fd92a36151cd9fe66c9020811729f1d2eefc432bf533412395a34cd33c6b5f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFVADKGH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPJ%2BL21Hbr5CyzOgjwFmTrBi0Pf4A%2FmipElJVYHY7QhAiEA1OEQbKUEJ3qeU%2Fe9lbqLX0t50gPGbc8mSmJg7fonCWMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4RJCzv5fHMVR32FSrcAwgEI77khQauWKFbsY13dje2jV1trGTb6yV3LohKVz1%2BiFVSn66L3xYMGnVAS1TcoIgKSei7Pvu0y6IziEU9gKbB0nM8xoj6EvkiO%2BaCbzFjlRbNGAbpvf2hXfK18BkYRGJa1PMK3YSh9retYBNqvEgFxiJd2IdcSgDMzYtvj5RYA5tmQTj%2FlUacivrsQ8ELhqDEpYRh%2FJzJyaPWWy8V7i7Li6tV4i28lFqZSL%2BURgZJ4eqD3SaeAUrU4GAxXBhOWcxK48V1EpLT%2FqYZ2cN5JRGVq0Wdv5PU66YQpm5%2F0Yda4g%2BbzRVV9LRnOCmoLCBDUSaGjdcxuB9VYplvRt64MqkgyC2YyONS0bF%2Bj2QWxmOYEkiUte6RCvc51JWTJQcQBbme21KQemcfViQbC6%2BkxBsB9IeImmDn1Z8ZydBs%2FS6m792gcEhbadf979PA6AofEGRUEyeWFGE3xEya%2BPemy3EnnjJfDXep0E%2B4n0kRX6%2BXwYsXnUCTFUJE6FHW1j9ZogSvlqVdLmdtY7B2lF0tjBIajHZid4tdIKu2PikOfdSfvhCkxpfH426s7pi%2FkzGNdvGke29feIrpUZoCPyWO7aEjYauWiO5u5wEy4P%2FL37PX17UmBhYngEyA7uwbMOTZpsQGOqUBka4TH%2F7o1plpkY8JdGnNB43Q0Ul5WJ8rAXdfR5KENH03VqzfVsPo%2FVKa1vV7dG1W2qWSpDMN9zOJFO1pGzxBUCB9stXnwB1P0FKAIFFKNTlHyJdYPbI31PtsX0heNe2xWzH2kt5NwcQN5ekB%2FdVcPGkYTx%2Bx%2BGD9edhotxustCyIv%2F0e9DFonGfp%2Bg7iTwC7fwOPKKvfhrZTwUbDpvHP1y4J57jJ&X-Amz-Signature=10d4725fdd5d23b9a4bc8fd099e597c7c0a28b9b16c33dd14b440be5c7aa9538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
