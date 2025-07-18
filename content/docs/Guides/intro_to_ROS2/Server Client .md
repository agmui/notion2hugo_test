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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX7O3CC7%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDaag8pCOXVwCp6u7xsrKEZ%2Bkvslhv1iZATmkxb23YMrwIhAP2QYKRGTmD%2BhHhEPgL1O%2BojICB1uuWnvpIfPq9ESjHPKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNS6CXSZfW8GxzTiMq3AOmCwgWlcutXLe4pFaJeO2q57XVWD6F8i29S2yPbcJ%2FUj7FXhgSQWzkASeMD8cxcY5nERzqCr1VQrrSloOFiEBSmOUqm2LKEAypTxNBzGO7Oa9nT7KQlT6d0U%2FjUNl31xwFKID6gp1zT6bOhWHVQRJzg3IKOCAJp7fNsNW23n%2FKc%2FN%2BcRIvuatX6vvNNJW00f92WaUPK5sONtsmTNUGKeHErrcdiMu0bFTPrZtpgjOmxduMNsvn9srStp9mf0buahFeG00EEp7K%2F6hjP2c8gysJZWiapFBbSdmnHJmMCGMUuCsAArZpVCCOr624o6Oy4rKzsX7kY%2FQ5k4cyP3vFHg8xJzCz90DzTrUTMGf%2BbPZ%2BriBKHb%2FeXng02UCzklp3NSeriwuDHgfe6VvH1ASY3A0s0T%2F8kw1rD655PDaULO9Oig0VvefBUk1XcdZ%2BDmcdrMqwLbUlqTMO26yp6emZ0eodAjAQYGAPRPVLRlDh8dugfPR6FeB2jnX3N3p9Rpfkg67tdRzCBJ%2BBeYo3qs4kk9cVIk1Fe2Djxv2FtYTD%2FkAiZ9uUS7gIqnEV189L4DGJnO%2FF58vB4u9WULXbNnE31DHILksqCmdUHIMlTbA0e9kXOEprxbLRmLvblqXYjTDFv%2BrDBjqkAUEJ5%2FIAgwjQMaDTUB43TXYhTpdBG%2F%2BIBUS6hzGj%2FZgfs%2F%2FsdNuLtsTuxiMc1hyF9LQsm2l5T464rc6uTBpE8W1t4aN%2B4gEJQdk%2B375p0F%2B7R%2FGtZpHUDfrziBfnNLQ5R0A5POjn98VCnuUII8SvCM06eayUCYweH9xJczqvylMJoNL%2FOXhJIYC8XEhHFmgpaVk966pbPASWqwU75t5kZ%2FUV167R&X-Amz-Signature=9378ca4c614af7b4136786e4eacf0ca081b51e949a3dc5ce31d2ba29ac0bacfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX7O3CC7%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDaag8pCOXVwCp6u7xsrKEZ%2Bkvslhv1iZATmkxb23YMrwIhAP2QYKRGTmD%2BhHhEPgL1O%2BojICB1uuWnvpIfPq9ESjHPKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNS6CXSZfW8GxzTiMq3AOmCwgWlcutXLe4pFaJeO2q57XVWD6F8i29S2yPbcJ%2FUj7FXhgSQWzkASeMD8cxcY5nERzqCr1VQrrSloOFiEBSmOUqm2LKEAypTxNBzGO7Oa9nT7KQlT6d0U%2FjUNl31xwFKID6gp1zT6bOhWHVQRJzg3IKOCAJp7fNsNW23n%2FKc%2FN%2BcRIvuatX6vvNNJW00f92WaUPK5sONtsmTNUGKeHErrcdiMu0bFTPrZtpgjOmxduMNsvn9srStp9mf0buahFeG00EEp7K%2F6hjP2c8gysJZWiapFBbSdmnHJmMCGMUuCsAArZpVCCOr624o6Oy4rKzsX7kY%2FQ5k4cyP3vFHg8xJzCz90DzTrUTMGf%2BbPZ%2BriBKHb%2FeXng02UCzklp3NSeriwuDHgfe6VvH1ASY3A0s0T%2F8kw1rD655PDaULO9Oig0VvefBUk1XcdZ%2BDmcdrMqwLbUlqTMO26yp6emZ0eodAjAQYGAPRPVLRlDh8dugfPR6FeB2jnX3N3p9Rpfkg67tdRzCBJ%2BBeYo3qs4kk9cVIk1Fe2Djxv2FtYTD%2FkAiZ9uUS7gIqnEV189L4DGJnO%2FF58vB4u9WULXbNnE31DHILksqCmdUHIMlTbA0e9kXOEprxbLRmLvblqXYjTDFv%2BrDBjqkAUEJ5%2FIAgwjQMaDTUB43TXYhTpdBG%2F%2BIBUS6hzGj%2FZgfs%2F%2FsdNuLtsTuxiMc1hyF9LQsm2l5T464rc6uTBpE8W1t4aN%2B4gEJQdk%2B375p0F%2B7R%2FGtZpHUDfrziBfnNLQ5R0A5POjn98VCnuUII8SvCM06eayUCYweH9xJczqvylMJoNL%2FOXhJIYC8XEhHFmgpaVk966pbPASWqwU75t5kZ%2FUV167R&X-Amz-Signature=9ab7e9d9fe8bb1ee486e837227e14d7c3ac8a9067e43fa8298581774427d949c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX7O3CC7%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDaag8pCOXVwCp6u7xsrKEZ%2Bkvslhv1iZATmkxb23YMrwIhAP2QYKRGTmD%2BhHhEPgL1O%2BojICB1uuWnvpIfPq9ESjHPKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNS6CXSZfW8GxzTiMq3AOmCwgWlcutXLe4pFaJeO2q57XVWD6F8i29S2yPbcJ%2FUj7FXhgSQWzkASeMD8cxcY5nERzqCr1VQrrSloOFiEBSmOUqm2LKEAypTxNBzGO7Oa9nT7KQlT6d0U%2FjUNl31xwFKID6gp1zT6bOhWHVQRJzg3IKOCAJp7fNsNW23n%2FKc%2FN%2BcRIvuatX6vvNNJW00f92WaUPK5sONtsmTNUGKeHErrcdiMu0bFTPrZtpgjOmxduMNsvn9srStp9mf0buahFeG00EEp7K%2F6hjP2c8gysJZWiapFBbSdmnHJmMCGMUuCsAArZpVCCOr624o6Oy4rKzsX7kY%2FQ5k4cyP3vFHg8xJzCz90DzTrUTMGf%2BbPZ%2BriBKHb%2FeXng02UCzklp3NSeriwuDHgfe6VvH1ASY3A0s0T%2F8kw1rD655PDaULO9Oig0VvefBUk1XcdZ%2BDmcdrMqwLbUlqTMO26yp6emZ0eodAjAQYGAPRPVLRlDh8dugfPR6FeB2jnX3N3p9Rpfkg67tdRzCBJ%2BBeYo3qs4kk9cVIk1Fe2Djxv2FtYTD%2FkAiZ9uUS7gIqnEV189L4DGJnO%2FF58vB4u9WULXbNnE31DHILksqCmdUHIMlTbA0e9kXOEprxbLRmLvblqXYjTDFv%2BrDBjqkAUEJ5%2FIAgwjQMaDTUB43TXYhTpdBG%2F%2BIBUS6hzGj%2FZgfs%2F%2FsdNuLtsTuxiMc1hyF9LQsm2l5T464rc6uTBpE8W1t4aN%2B4gEJQdk%2B375p0F%2B7R%2FGtZpHUDfrziBfnNLQ5R0A5POjn98VCnuUII8SvCM06eayUCYweH9xJczqvylMJoNL%2FOXhJIYC8XEhHFmgpaVk966pbPASWqwU75t5kZ%2FUV167R&X-Amz-Signature=05b631e6638dd6638f0e06ec4d0d228f8d316a2b430550a8de48dae8b66b4ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX7O3CC7%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDaag8pCOXVwCp6u7xsrKEZ%2Bkvslhv1iZATmkxb23YMrwIhAP2QYKRGTmD%2BhHhEPgL1O%2BojICB1uuWnvpIfPq9ESjHPKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNS6CXSZfW8GxzTiMq3AOmCwgWlcutXLe4pFaJeO2q57XVWD6F8i29S2yPbcJ%2FUj7FXhgSQWzkASeMD8cxcY5nERzqCr1VQrrSloOFiEBSmOUqm2LKEAypTxNBzGO7Oa9nT7KQlT6d0U%2FjUNl31xwFKID6gp1zT6bOhWHVQRJzg3IKOCAJp7fNsNW23n%2FKc%2FN%2BcRIvuatX6vvNNJW00f92WaUPK5sONtsmTNUGKeHErrcdiMu0bFTPrZtpgjOmxduMNsvn9srStp9mf0buahFeG00EEp7K%2F6hjP2c8gysJZWiapFBbSdmnHJmMCGMUuCsAArZpVCCOr624o6Oy4rKzsX7kY%2FQ5k4cyP3vFHg8xJzCz90DzTrUTMGf%2BbPZ%2BriBKHb%2FeXng02UCzklp3NSeriwuDHgfe6VvH1ASY3A0s0T%2F8kw1rD655PDaULO9Oig0VvefBUk1XcdZ%2BDmcdrMqwLbUlqTMO26yp6emZ0eodAjAQYGAPRPVLRlDh8dugfPR6FeB2jnX3N3p9Rpfkg67tdRzCBJ%2BBeYo3qs4kk9cVIk1Fe2Djxv2FtYTD%2FkAiZ9uUS7gIqnEV189L4DGJnO%2FF58vB4u9WULXbNnE31DHILksqCmdUHIMlTbA0e9kXOEprxbLRmLvblqXYjTDFv%2BrDBjqkAUEJ5%2FIAgwjQMaDTUB43TXYhTpdBG%2F%2BIBUS6hzGj%2FZgfs%2F%2FsdNuLtsTuxiMc1hyF9LQsm2l5T464rc6uTBpE8W1t4aN%2B4gEJQdk%2B375p0F%2B7R%2FGtZpHUDfrziBfnNLQ5R0A5POjn98VCnuUII8SvCM06eayUCYweH9xJczqvylMJoNL%2FOXhJIYC8XEhHFmgpaVk966pbPASWqwU75t5kZ%2FUV167R&X-Amz-Signature=3c67f2aadea01f2dff157dd611406a9cb66be95f3a9396d847ce07245920f071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX7O3CC7%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDaag8pCOXVwCp6u7xsrKEZ%2Bkvslhv1iZATmkxb23YMrwIhAP2QYKRGTmD%2BhHhEPgL1O%2BojICB1uuWnvpIfPq9ESjHPKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNS6CXSZfW8GxzTiMq3AOmCwgWlcutXLe4pFaJeO2q57XVWD6F8i29S2yPbcJ%2FUj7FXhgSQWzkASeMD8cxcY5nERzqCr1VQrrSloOFiEBSmOUqm2LKEAypTxNBzGO7Oa9nT7KQlT6d0U%2FjUNl31xwFKID6gp1zT6bOhWHVQRJzg3IKOCAJp7fNsNW23n%2FKc%2FN%2BcRIvuatX6vvNNJW00f92WaUPK5sONtsmTNUGKeHErrcdiMu0bFTPrZtpgjOmxduMNsvn9srStp9mf0buahFeG00EEp7K%2F6hjP2c8gysJZWiapFBbSdmnHJmMCGMUuCsAArZpVCCOr624o6Oy4rKzsX7kY%2FQ5k4cyP3vFHg8xJzCz90DzTrUTMGf%2BbPZ%2BriBKHb%2FeXng02UCzklp3NSeriwuDHgfe6VvH1ASY3A0s0T%2F8kw1rD655PDaULO9Oig0VvefBUk1XcdZ%2BDmcdrMqwLbUlqTMO26yp6emZ0eodAjAQYGAPRPVLRlDh8dugfPR6FeB2jnX3N3p9Rpfkg67tdRzCBJ%2BBeYo3qs4kk9cVIk1Fe2Djxv2FtYTD%2FkAiZ9uUS7gIqnEV189L4DGJnO%2FF58vB4u9WULXbNnE31DHILksqCmdUHIMlTbA0e9kXOEprxbLRmLvblqXYjTDFv%2BrDBjqkAUEJ5%2FIAgwjQMaDTUB43TXYhTpdBG%2F%2BIBUS6hzGj%2FZgfs%2F%2FsdNuLtsTuxiMc1hyF9LQsm2l5T464rc6uTBpE8W1t4aN%2B4gEJQdk%2B375p0F%2B7R%2FGtZpHUDfrziBfnNLQ5R0A5POjn98VCnuUII8SvCM06eayUCYweH9xJczqvylMJoNL%2FOXhJIYC8XEhHFmgpaVk966pbPASWqwU75t5kZ%2FUV167R&X-Amz-Signature=089e9c333f6e6236fc879c2dc46f31de6c7952ce1fe26bb713ae2f59dd204e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
