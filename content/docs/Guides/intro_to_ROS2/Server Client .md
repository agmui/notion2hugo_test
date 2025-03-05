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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7MFUMH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FFxVITFFlKdj98Ep2izL5dGDkWtFbeySjMiItc8%2FTHAiEAyT6frtn7q9ewlUUubXBtVTpA8iGAjAW0n%2FmbZUk2VmYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGak%2FJdSjbPI5ZLiSCrcAzsps5xXnFI42pLwq5AL7HSZo4KdCzVXowAtA%2BtMZZ%2FvZaEdyQfMhhROp05M5bocxM2QndQ%2FUy5oCZ3yZ8FD1IXj3ox2RxJe5Abxsk1vyJxIZhjOZEw0RzpIyinUGtjrM77%2BjUZZZVdKFxLfNRBCfdmK%2BVHxth3DyWaTtvcxFOMYQKSgU87sOUyhQxNh4SyatEy4Yqy%2Bk9h8PdIjXttGPNn2rJBCFcc6TP%2BeF%2FV3r9s3CC4q5m9pKjYNN6nIYNkEZ1Q9JTLS6aye0Kp52pmKXd4BhTnHUdcG%2BjdHarEJmOpl7aVe5k0BosmdpUNeRLGoRQqSoRAXs5YZxQ2N0rqkFnE1ldU%2FqzKPstoolg5qiN8AD%2B3mqR97LFxCfMTxRNbEtwqh82%2B7ffDAHR8x5NcQcnRVlwY3379NYExoiots1HoDC0D00Pd0Yk%2FrmBsJ6oi2vUeSGhZF3YmN1FtdgErP1zFIKG3ZYS8bopOjk2Py7XoPMqOStj235E6A92CZ%2FAcDD8kQsUBl9KsKCCzUIdryx6hYqi%2FUMSuJoXDxgkrdOPhbJ3jBEqXAVhNgimWwu1M7lP3a%2FQjOpSXwFThyVSTdApp50zRSSLtYATCDJSfv9u9JrpLFNoCSk85NYtbSMJWEor4GOqUB0E2QP0KGyPz9z6gfkxx816IParvKeCrEbI9WIPT4r4tN87LLY7ApQkEwWBvBGfOUgOVzDTGjfNmZnuBLJ7gzwqd2tF6AHYRyKj8ioGjurRoC4Y71QuaOX3sazSCDhRQ05%2FYk99i8TAj0Ar%2Fw8z%2F5yegM3lXhsn4x2eD0HajIdSSjZIO2vAYVxprk%2B%2B3IXa7dXHFaUuZbxqiqkTiSjy%2Bm8YLPky18&X-Amz-Signature=72538ea425d0a73ee04568cf26db8cb75e4ad5a6d68a338211c497ec97fd9011&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7MFUMH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FFxVITFFlKdj98Ep2izL5dGDkWtFbeySjMiItc8%2FTHAiEAyT6frtn7q9ewlUUubXBtVTpA8iGAjAW0n%2FmbZUk2VmYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGak%2FJdSjbPI5ZLiSCrcAzsps5xXnFI42pLwq5AL7HSZo4KdCzVXowAtA%2BtMZZ%2FvZaEdyQfMhhROp05M5bocxM2QndQ%2FUy5oCZ3yZ8FD1IXj3ox2RxJe5Abxsk1vyJxIZhjOZEw0RzpIyinUGtjrM77%2BjUZZZVdKFxLfNRBCfdmK%2BVHxth3DyWaTtvcxFOMYQKSgU87sOUyhQxNh4SyatEy4Yqy%2Bk9h8PdIjXttGPNn2rJBCFcc6TP%2BeF%2FV3r9s3CC4q5m9pKjYNN6nIYNkEZ1Q9JTLS6aye0Kp52pmKXd4BhTnHUdcG%2BjdHarEJmOpl7aVe5k0BosmdpUNeRLGoRQqSoRAXs5YZxQ2N0rqkFnE1ldU%2FqzKPstoolg5qiN8AD%2B3mqR97LFxCfMTxRNbEtwqh82%2B7ffDAHR8x5NcQcnRVlwY3379NYExoiots1HoDC0D00Pd0Yk%2FrmBsJ6oi2vUeSGhZF3YmN1FtdgErP1zFIKG3ZYS8bopOjk2Py7XoPMqOStj235E6A92CZ%2FAcDD8kQsUBl9KsKCCzUIdryx6hYqi%2FUMSuJoXDxgkrdOPhbJ3jBEqXAVhNgimWwu1M7lP3a%2FQjOpSXwFThyVSTdApp50zRSSLtYATCDJSfv9u9JrpLFNoCSk85NYtbSMJWEor4GOqUB0E2QP0KGyPz9z6gfkxx816IParvKeCrEbI9WIPT4r4tN87LLY7ApQkEwWBvBGfOUgOVzDTGjfNmZnuBLJ7gzwqd2tF6AHYRyKj8ioGjurRoC4Y71QuaOX3sazSCDhRQ05%2FYk99i8TAj0Ar%2Fw8z%2F5yegM3lXhsn4x2eD0HajIdSSjZIO2vAYVxprk%2B%2B3IXa7dXHFaUuZbxqiqkTiSjy%2Bm8YLPky18&X-Amz-Signature=53c1b49d26e6543cd54eb32886aecf7d92ee592cccf279855ecea590a6ec629d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7MFUMH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FFxVITFFlKdj98Ep2izL5dGDkWtFbeySjMiItc8%2FTHAiEAyT6frtn7q9ewlUUubXBtVTpA8iGAjAW0n%2FmbZUk2VmYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGak%2FJdSjbPI5ZLiSCrcAzsps5xXnFI42pLwq5AL7HSZo4KdCzVXowAtA%2BtMZZ%2FvZaEdyQfMhhROp05M5bocxM2QndQ%2FUy5oCZ3yZ8FD1IXj3ox2RxJe5Abxsk1vyJxIZhjOZEw0RzpIyinUGtjrM77%2BjUZZZVdKFxLfNRBCfdmK%2BVHxth3DyWaTtvcxFOMYQKSgU87sOUyhQxNh4SyatEy4Yqy%2Bk9h8PdIjXttGPNn2rJBCFcc6TP%2BeF%2FV3r9s3CC4q5m9pKjYNN6nIYNkEZ1Q9JTLS6aye0Kp52pmKXd4BhTnHUdcG%2BjdHarEJmOpl7aVe5k0BosmdpUNeRLGoRQqSoRAXs5YZxQ2N0rqkFnE1ldU%2FqzKPstoolg5qiN8AD%2B3mqR97LFxCfMTxRNbEtwqh82%2B7ffDAHR8x5NcQcnRVlwY3379NYExoiots1HoDC0D00Pd0Yk%2FrmBsJ6oi2vUeSGhZF3YmN1FtdgErP1zFIKG3ZYS8bopOjk2Py7XoPMqOStj235E6A92CZ%2FAcDD8kQsUBl9KsKCCzUIdryx6hYqi%2FUMSuJoXDxgkrdOPhbJ3jBEqXAVhNgimWwu1M7lP3a%2FQjOpSXwFThyVSTdApp50zRSSLtYATCDJSfv9u9JrpLFNoCSk85NYtbSMJWEor4GOqUB0E2QP0KGyPz9z6gfkxx816IParvKeCrEbI9WIPT4r4tN87LLY7ApQkEwWBvBGfOUgOVzDTGjfNmZnuBLJ7gzwqd2tF6AHYRyKj8ioGjurRoC4Y71QuaOX3sazSCDhRQ05%2FYk99i8TAj0Ar%2Fw8z%2F5yegM3lXhsn4x2eD0HajIdSSjZIO2vAYVxprk%2B%2B3IXa7dXHFaUuZbxqiqkTiSjy%2Bm8YLPky18&X-Amz-Signature=268ff5bc97b73d8219650a56a977b80083b6f88d0faa9aafa0959d09145d71c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7MFUMH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FFxVITFFlKdj98Ep2izL5dGDkWtFbeySjMiItc8%2FTHAiEAyT6frtn7q9ewlUUubXBtVTpA8iGAjAW0n%2FmbZUk2VmYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGak%2FJdSjbPI5ZLiSCrcAzsps5xXnFI42pLwq5AL7HSZo4KdCzVXowAtA%2BtMZZ%2FvZaEdyQfMhhROp05M5bocxM2QndQ%2FUy5oCZ3yZ8FD1IXj3ox2RxJe5Abxsk1vyJxIZhjOZEw0RzpIyinUGtjrM77%2BjUZZZVdKFxLfNRBCfdmK%2BVHxth3DyWaTtvcxFOMYQKSgU87sOUyhQxNh4SyatEy4Yqy%2Bk9h8PdIjXttGPNn2rJBCFcc6TP%2BeF%2FV3r9s3CC4q5m9pKjYNN6nIYNkEZ1Q9JTLS6aye0Kp52pmKXd4BhTnHUdcG%2BjdHarEJmOpl7aVe5k0BosmdpUNeRLGoRQqSoRAXs5YZxQ2N0rqkFnE1ldU%2FqzKPstoolg5qiN8AD%2B3mqR97LFxCfMTxRNbEtwqh82%2B7ffDAHR8x5NcQcnRVlwY3379NYExoiots1HoDC0D00Pd0Yk%2FrmBsJ6oi2vUeSGhZF3YmN1FtdgErP1zFIKG3ZYS8bopOjk2Py7XoPMqOStj235E6A92CZ%2FAcDD8kQsUBl9KsKCCzUIdryx6hYqi%2FUMSuJoXDxgkrdOPhbJ3jBEqXAVhNgimWwu1M7lP3a%2FQjOpSXwFThyVSTdApp50zRSSLtYATCDJSfv9u9JrpLFNoCSk85NYtbSMJWEor4GOqUB0E2QP0KGyPz9z6gfkxx816IParvKeCrEbI9WIPT4r4tN87LLY7ApQkEwWBvBGfOUgOVzDTGjfNmZnuBLJ7gzwqd2tF6AHYRyKj8ioGjurRoC4Y71QuaOX3sazSCDhRQ05%2FYk99i8TAj0Ar%2Fw8z%2F5yegM3lXhsn4x2eD0HajIdSSjZIO2vAYVxprk%2B%2B3IXa7dXHFaUuZbxqiqkTiSjy%2Bm8YLPky18&X-Amz-Signature=bc42db1881941b7cdb0ba7a40d373d36f68b5b9b2d617a54352bba00f455cc18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7MFUMH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FFxVITFFlKdj98Ep2izL5dGDkWtFbeySjMiItc8%2FTHAiEAyT6frtn7q9ewlUUubXBtVTpA8iGAjAW0n%2FmbZUk2VmYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGak%2FJdSjbPI5ZLiSCrcAzsps5xXnFI42pLwq5AL7HSZo4KdCzVXowAtA%2BtMZZ%2FvZaEdyQfMhhROp05M5bocxM2QndQ%2FUy5oCZ3yZ8FD1IXj3ox2RxJe5Abxsk1vyJxIZhjOZEw0RzpIyinUGtjrM77%2BjUZZZVdKFxLfNRBCfdmK%2BVHxth3DyWaTtvcxFOMYQKSgU87sOUyhQxNh4SyatEy4Yqy%2Bk9h8PdIjXttGPNn2rJBCFcc6TP%2BeF%2FV3r9s3CC4q5m9pKjYNN6nIYNkEZ1Q9JTLS6aye0Kp52pmKXd4BhTnHUdcG%2BjdHarEJmOpl7aVe5k0BosmdpUNeRLGoRQqSoRAXs5YZxQ2N0rqkFnE1ldU%2FqzKPstoolg5qiN8AD%2B3mqR97LFxCfMTxRNbEtwqh82%2B7ffDAHR8x5NcQcnRVlwY3379NYExoiots1HoDC0D00Pd0Yk%2FrmBsJ6oi2vUeSGhZF3YmN1FtdgErP1zFIKG3ZYS8bopOjk2Py7XoPMqOStj235E6A92CZ%2FAcDD8kQsUBl9KsKCCzUIdryx6hYqi%2FUMSuJoXDxgkrdOPhbJ3jBEqXAVhNgimWwu1M7lP3a%2FQjOpSXwFThyVSTdApp50zRSSLtYATCDJSfv9u9JrpLFNoCSk85NYtbSMJWEor4GOqUB0E2QP0KGyPz9z6gfkxx816IParvKeCrEbI9WIPT4r4tN87LLY7ApQkEwWBvBGfOUgOVzDTGjfNmZnuBLJ7gzwqd2tF6AHYRyKj8ioGjurRoC4Y71QuaOX3sazSCDhRQ05%2FYk99i8TAj0Ar%2Fw8z%2F5yegM3lXhsn4x2eD0HajIdSSjZIO2vAYVxprk%2B%2B3IXa7dXHFaUuZbxqiqkTiSjy%2Bm8YLPky18&X-Amz-Signature=f9e3389333c566f3a83c66567e2f796788cf08ef0174848b8b2ce1adadb6be22&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
