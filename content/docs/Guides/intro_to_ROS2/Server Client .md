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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZF5XKS6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIArTxmfCHvCW2IYBLxBMPp6suRzW7UNJ%2BU%2FWqQf9NPU1AiEA5XmvsB526FBSmRXyy%2Fj8ur7UuPlSWxkg20s427b0ql4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGkQiPzZdP2LZ5dOiircA%2BJhusrKk1tjuspRnDNHajs7ozuC9MeMBSa3RpNy5xja0u41eqfBA%2FNmvl%2BX4a2PWSLtnfNcMfhpnTyQtK%2BE0CKM262rcclCbNVAEHZhRBLp51J1ywdny%2FMLgfUtV5ANCPydSWfl%2Bd5cwE62tt7YUnpVcwEwZdWj7znVHSV%2B%2BQNqn10XVytd2XRbfqx7dEqJsKwmW8XkDmHGnBsx5bdGhiLj1x1NhT%2F%2BcEvVHVnDcukSRA3t65XfKy7eQngZtAFy6i4EEoS470HL%2BAjwVFrGq059KnV1gwT6QeCfWu4CW%2FB3%2BfKJhZdQhGf%2FPNFmqtKDILdA3b6ZndYf5j4Se6auYVKqPU605zDUcjA20fv7gBGLwVe2wpzHrMtI2L2ZDJVct7d0%2FDXXQZ6%2B1C1HzI5Gqpr1uc3zkc6bbgiStSQKABhdQ8FxYLX%2FGZR1C9w%2FJ%2BVfAyd3vyJL99YtTUxfpAZKyHhghAJRSHiMUm9t5SwnYmXrL2eqYGcqHjNOe0PjApxdqyBSQhmaQ0GvAk729lB2YwcuNY%2BQm9cUaBWfnzAJ3zHxzkVFzEKsilftleumR1KQhi32TzDb%2FWDlkM2ZSms5fjSPzK9ixdvuqT7WcZ7GoprdFrATVHc4pzfYYC4tMPiG3cAGOqUBY%2BdxEGL0To6jIDJJ%2F20y2Y%2BMiar2Ws%2FI93ZJwLNn8qzwEvWZd92D1ZPpE5SngCwnZB23lZGhGib5CpCutNtcula9n7BDp0gilgMT%2Ba4UQWWR68lXsS7Oeh8HJ0O8ITu%2BFlSdh3etI%2FXGBG2yOlm%2BRVbtQdFYvJVRXnVQHHkatfTD6ftMXKyiBOObgKVB9h3%2BoW4IAdHBxrSFspMtS9dHmnx6tuFP&X-Amz-Signature=5fe0b9c544326e69501f1b7fb50f81c72fc8d11fc6c32c9907a02d9c22d4a6d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZF5XKS6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIArTxmfCHvCW2IYBLxBMPp6suRzW7UNJ%2BU%2FWqQf9NPU1AiEA5XmvsB526FBSmRXyy%2Fj8ur7UuPlSWxkg20s427b0ql4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGkQiPzZdP2LZ5dOiircA%2BJhusrKk1tjuspRnDNHajs7ozuC9MeMBSa3RpNy5xja0u41eqfBA%2FNmvl%2BX4a2PWSLtnfNcMfhpnTyQtK%2BE0CKM262rcclCbNVAEHZhRBLp51J1ywdny%2FMLgfUtV5ANCPydSWfl%2Bd5cwE62tt7YUnpVcwEwZdWj7znVHSV%2B%2BQNqn10XVytd2XRbfqx7dEqJsKwmW8XkDmHGnBsx5bdGhiLj1x1NhT%2F%2BcEvVHVnDcukSRA3t65XfKy7eQngZtAFy6i4EEoS470HL%2BAjwVFrGq059KnV1gwT6QeCfWu4CW%2FB3%2BfKJhZdQhGf%2FPNFmqtKDILdA3b6ZndYf5j4Se6auYVKqPU605zDUcjA20fv7gBGLwVe2wpzHrMtI2L2ZDJVct7d0%2FDXXQZ6%2B1C1HzI5Gqpr1uc3zkc6bbgiStSQKABhdQ8FxYLX%2FGZR1C9w%2FJ%2BVfAyd3vyJL99YtTUxfpAZKyHhghAJRSHiMUm9t5SwnYmXrL2eqYGcqHjNOe0PjApxdqyBSQhmaQ0GvAk729lB2YwcuNY%2BQm9cUaBWfnzAJ3zHxzkVFzEKsilftleumR1KQhi32TzDb%2FWDlkM2ZSms5fjSPzK9ixdvuqT7WcZ7GoprdFrATVHc4pzfYYC4tMPiG3cAGOqUBY%2BdxEGL0To6jIDJJ%2F20y2Y%2BMiar2Ws%2FI93ZJwLNn8qzwEvWZd92D1ZPpE5SngCwnZB23lZGhGib5CpCutNtcula9n7BDp0gilgMT%2Ba4UQWWR68lXsS7Oeh8HJ0O8ITu%2BFlSdh3etI%2FXGBG2yOlm%2BRVbtQdFYvJVRXnVQHHkatfTD6ftMXKyiBOObgKVB9h3%2BoW4IAdHBxrSFspMtS9dHmnx6tuFP&X-Amz-Signature=cf2b9ce0063b4f005efc987a8954b6ecd18264ab65a46db796e76b2c4df9f51f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZF5XKS6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIArTxmfCHvCW2IYBLxBMPp6suRzW7UNJ%2BU%2FWqQf9NPU1AiEA5XmvsB526FBSmRXyy%2Fj8ur7UuPlSWxkg20s427b0ql4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGkQiPzZdP2LZ5dOiircA%2BJhusrKk1tjuspRnDNHajs7ozuC9MeMBSa3RpNy5xja0u41eqfBA%2FNmvl%2BX4a2PWSLtnfNcMfhpnTyQtK%2BE0CKM262rcclCbNVAEHZhRBLp51J1ywdny%2FMLgfUtV5ANCPydSWfl%2Bd5cwE62tt7YUnpVcwEwZdWj7znVHSV%2B%2BQNqn10XVytd2XRbfqx7dEqJsKwmW8XkDmHGnBsx5bdGhiLj1x1NhT%2F%2BcEvVHVnDcukSRA3t65XfKy7eQngZtAFy6i4EEoS470HL%2BAjwVFrGq059KnV1gwT6QeCfWu4CW%2FB3%2BfKJhZdQhGf%2FPNFmqtKDILdA3b6ZndYf5j4Se6auYVKqPU605zDUcjA20fv7gBGLwVe2wpzHrMtI2L2ZDJVct7d0%2FDXXQZ6%2B1C1HzI5Gqpr1uc3zkc6bbgiStSQKABhdQ8FxYLX%2FGZR1C9w%2FJ%2BVfAyd3vyJL99YtTUxfpAZKyHhghAJRSHiMUm9t5SwnYmXrL2eqYGcqHjNOe0PjApxdqyBSQhmaQ0GvAk729lB2YwcuNY%2BQm9cUaBWfnzAJ3zHxzkVFzEKsilftleumR1KQhi32TzDb%2FWDlkM2ZSms5fjSPzK9ixdvuqT7WcZ7GoprdFrATVHc4pzfYYC4tMPiG3cAGOqUBY%2BdxEGL0To6jIDJJ%2F20y2Y%2BMiar2Ws%2FI93ZJwLNn8qzwEvWZd92D1ZPpE5SngCwnZB23lZGhGib5CpCutNtcula9n7BDp0gilgMT%2Ba4UQWWR68lXsS7Oeh8HJ0O8ITu%2BFlSdh3etI%2FXGBG2yOlm%2BRVbtQdFYvJVRXnVQHHkatfTD6ftMXKyiBOObgKVB9h3%2BoW4IAdHBxrSFspMtS9dHmnx6tuFP&X-Amz-Signature=9dd9a9549e98f1952605419cfd93d5597ab83d597570e5b7f21cf8cf74318fd2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZF5XKS6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIArTxmfCHvCW2IYBLxBMPp6suRzW7UNJ%2BU%2FWqQf9NPU1AiEA5XmvsB526FBSmRXyy%2Fj8ur7UuPlSWxkg20s427b0ql4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGkQiPzZdP2LZ5dOiircA%2BJhusrKk1tjuspRnDNHajs7ozuC9MeMBSa3RpNy5xja0u41eqfBA%2FNmvl%2BX4a2PWSLtnfNcMfhpnTyQtK%2BE0CKM262rcclCbNVAEHZhRBLp51J1ywdny%2FMLgfUtV5ANCPydSWfl%2Bd5cwE62tt7YUnpVcwEwZdWj7znVHSV%2B%2BQNqn10XVytd2XRbfqx7dEqJsKwmW8XkDmHGnBsx5bdGhiLj1x1NhT%2F%2BcEvVHVnDcukSRA3t65XfKy7eQngZtAFy6i4EEoS470HL%2BAjwVFrGq059KnV1gwT6QeCfWu4CW%2FB3%2BfKJhZdQhGf%2FPNFmqtKDILdA3b6ZndYf5j4Se6auYVKqPU605zDUcjA20fv7gBGLwVe2wpzHrMtI2L2ZDJVct7d0%2FDXXQZ6%2B1C1HzI5Gqpr1uc3zkc6bbgiStSQKABhdQ8FxYLX%2FGZR1C9w%2FJ%2BVfAyd3vyJL99YtTUxfpAZKyHhghAJRSHiMUm9t5SwnYmXrL2eqYGcqHjNOe0PjApxdqyBSQhmaQ0GvAk729lB2YwcuNY%2BQm9cUaBWfnzAJ3zHxzkVFzEKsilftleumR1KQhi32TzDb%2FWDlkM2ZSms5fjSPzK9ixdvuqT7WcZ7GoprdFrATVHc4pzfYYC4tMPiG3cAGOqUBY%2BdxEGL0To6jIDJJ%2F20y2Y%2BMiar2Ws%2FI93ZJwLNn8qzwEvWZd92D1ZPpE5SngCwnZB23lZGhGib5CpCutNtcula9n7BDp0gilgMT%2Ba4UQWWR68lXsS7Oeh8HJ0O8ITu%2BFlSdh3etI%2FXGBG2yOlm%2BRVbtQdFYvJVRXnVQHHkatfTD6ftMXKyiBOObgKVB9h3%2BoW4IAdHBxrSFspMtS9dHmnx6tuFP&X-Amz-Signature=4d5970bc265f82f487a658c01d2f6c1ac1ae012cba598ed752d00bcf3f6b178e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZF5XKS6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIArTxmfCHvCW2IYBLxBMPp6suRzW7UNJ%2BU%2FWqQf9NPU1AiEA5XmvsB526FBSmRXyy%2Fj8ur7UuPlSWxkg20s427b0ql4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGkQiPzZdP2LZ5dOiircA%2BJhusrKk1tjuspRnDNHajs7ozuC9MeMBSa3RpNy5xja0u41eqfBA%2FNmvl%2BX4a2PWSLtnfNcMfhpnTyQtK%2BE0CKM262rcclCbNVAEHZhRBLp51J1ywdny%2FMLgfUtV5ANCPydSWfl%2Bd5cwE62tt7YUnpVcwEwZdWj7znVHSV%2B%2BQNqn10XVytd2XRbfqx7dEqJsKwmW8XkDmHGnBsx5bdGhiLj1x1NhT%2F%2BcEvVHVnDcukSRA3t65XfKy7eQngZtAFy6i4EEoS470HL%2BAjwVFrGq059KnV1gwT6QeCfWu4CW%2FB3%2BfKJhZdQhGf%2FPNFmqtKDILdA3b6ZndYf5j4Se6auYVKqPU605zDUcjA20fv7gBGLwVe2wpzHrMtI2L2ZDJVct7d0%2FDXXQZ6%2B1C1HzI5Gqpr1uc3zkc6bbgiStSQKABhdQ8FxYLX%2FGZR1C9w%2FJ%2BVfAyd3vyJL99YtTUxfpAZKyHhghAJRSHiMUm9t5SwnYmXrL2eqYGcqHjNOe0PjApxdqyBSQhmaQ0GvAk729lB2YwcuNY%2BQm9cUaBWfnzAJ3zHxzkVFzEKsilftleumR1KQhi32TzDb%2FWDlkM2ZSms5fjSPzK9ixdvuqT7WcZ7GoprdFrATVHc4pzfYYC4tMPiG3cAGOqUBY%2BdxEGL0To6jIDJJ%2F20y2Y%2BMiar2Ws%2FI93ZJwLNn8qzwEvWZd92D1ZPpE5SngCwnZB23lZGhGib5CpCutNtcula9n7BDp0gilgMT%2Ba4UQWWR68lXsS7Oeh8HJ0O8ITu%2BFlSdh3etI%2FXGBG2yOlm%2BRVbtQdFYvJVRXnVQHHkatfTD6ftMXKyiBOObgKVB9h3%2BoW4IAdHBxrSFspMtS9dHmnx6tuFP&X-Amz-Signature=a1ee9de1571317acbe55b9ae750ae8df106f503e4b43e1d4a8de7b2eebeff37e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
