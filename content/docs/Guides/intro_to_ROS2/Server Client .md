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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKS4XBV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqZC5aXJr799I9G8keCzu6lLGfkyCW2td4k1Q1XpkYBAIgAMu6QvTLId9DhdF3M34%2F4JxkfY70aQgOhOF%2FRzMfU3kqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyf9Nq2UM%2BOTBV0iircA1n03koJAM9IFTey3ZRUi6MazKaCfirORDuSVfNsd8Lo0VZx7CQICD%2FK%2FqTbmgCD%2BMDkQu8VJhjB%2B230X9s0dWWaCE1ONQfFBnT7L7jB%2FngjQOyRLkOWXVC8c5zScYCs5cqpfBKj%2FhQiFolpkBF0pRuFcrW3n7iIV6AGViF%2FkSquLJE7YZE5aXEdgE54rKK2CxTDx7QiSS7MRxgDO7Z%2F4VRwgfDgRAwxclMkZqq3sIt1t4IjPncvDkl7MPTOHnwBXjT68lZrZs9myl107dd7x7mLJhIbBmWee8dT2c29%2F8u5fRP6Mqm0DXfvIiqx8wwxWVb3CnPtDf5kN9u7AfaUzIGNxEpEzUwoNgd0Q3OM1Y6fIG68NSqtbolTj%2BpISfWEUF%2B68Xbp6yMCi7zIZFdy%2Bq%2Brc6N4l2mMQV4BWSlGhg0Y9mg3P%2BiMRIDn8Cd%2FDKB3Rf8GBbY07t9uCAQd6vuLw%2BoFkNyU%2Bn6j5S5RvD52gWz3rgU%2FDBZOYUR3281aNUknLzqWxZEvnLRLpTW67Zp3K4Wy7ovnbId7h9ZhV64pFoz9wfehwStZwZ%2BTuHnheAkSqooPqJzw9Pda2TgucIfnguEYCIx7cnO3RbEGt9rqvXoEm75ZNOvpTbF3%2FXTPMMKarMQGOqUBBQ5A3EOwd%2BYAVOHMOaC3XaO1YaUmkH4CFTVUY1YYlKxzu9IUxOVRbQr0V82%2Fb177xuqt9h6SF8DtBEHW9tnwha6ZffI60TJKDpaVuTvGh5DjQJ6dPVRvGDkYY99I9wy3RtM%2FftBw%2B7GrLgAmt1gxFc2SngwQO4Nmc3VI6JHno5enCSJTEwwzpfAO2oSuW4zbD0Rwg64oJSvV9lfofYPmFOPgk5%2BM&X-Amz-Signature=e481064c36a736856bdcdd568a9e24cda062968ccbe722cc093e3b5a485b5401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKS4XBV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqZC5aXJr799I9G8keCzu6lLGfkyCW2td4k1Q1XpkYBAIgAMu6QvTLId9DhdF3M34%2F4JxkfY70aQgOhOF%2FRzMfU3kqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyf9Nq2UM%2BOTBV0iircA1n03koJAM9IFTey3ZRUi6MazKaCfirORDuSVfNsd8Lo0VZx7CQICD%2FK%2FqTbmgCD%2BMDkQu8VJhjB%2B230X9s0dWWaCE1ONQfFBnT7L7jB%2FngjQOyRLkOWXVC8c5zScYCs5cqpfBKj%2FhQiFolpkBF0pRuFcrW3n7iIV6AGViF%2FkSquLJE7YZE5aXEdgE54rKK2CxTDx7QiSS7MRxgDO7Z%2F4VRwgfDgRAwxclMkZqq3sIt1t4IjPncvDkl7MPTOHnwBXjT68lZrZs9myl107dd7x7mLJhIbBmWee8dT2c29%2F8u5fRP6Mqm0DXfvIiqx8wwxWVb3CnPtDf5kN9u7AfaUzIGNxEpEzUwoNgd0Q3OM1Y6fIG68NSqtbolTj%2BpISfWEUF%2B68Xbp6yMCi7zIZFdy%2Bq%2Brc6N4l2mMQV4BWSlGhg0Y9mg3P%2BiMRIDn8Cd%2FDKB3Rf8GBbY07t9uCAQd6vuLw%2BoFkNyU%2Bn6j5S5RvD52gWz3rgU%2FDBZOYUR3281aNUknLzqWxZEvnLRLpTW67Zp3K4Wy7ovnbId7h9ZhV64pFoz9wfehwStZwZ%2BTuHnheAkSqooPqJzw9Pda2TgucIfnguEYCIx7cnO3RbEGt9rqvXoEm75ZNOvpTbF3%2FXTPMMKarMQGOqUBBQ5A3EOwd%2BYAVOHMOaC3XaO1YaUmkH4CFTVUY1YYlKxzu9IUxOVRbQr0V82%2Fb177xuqt9h6SF8DtBEHW9tnwha6ZffI60TJKDpaVuTvGh5DjQJ6dPVRvGDkYY99I9wy3RtM%2FftBw%2B7GrLgAmt1gxFc2SngwQO4Nmc3VI6JHno5enCSJTEwwzpfAO2oSuW4zbD0Rwg64oJSvV9lfofYPmFOPgk5%2BM&X-Amz-Signature=49d966af3a53c1a544f941fb6387b03edaee46ab0be6f131535a4e4287abfdff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKS4XBV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqZC5aXJr799I9G8keCzu6lLGfkyCW2td4k1Q1XpkYBAIgAMu6QvTLId9DhdF3M34%2F4JxkfY70aQgOhOF%2FRzMfU3kqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyf9Nq2UM%2BOTBV0iircA1n03koJAM9IFTey3ZRUi6MazKaCfirORDuSVfNsd8Lo0VZx7CQICD%2FK%2FqTbmgCD%2BMDkQu8VJhjB%2B230X9s0dWWaCE1ONQfFBnT7L7jB%2FngjQOyRLkOWXVC8c5zScYCs5cqpfBKj%2FhQiFolpkBF0pRuFcrW3n7iIV6AGViF%2FkSquLJE7YZE5aXEdgE54rKK2CxTDx7QiSS7MRxgDO7Z%2F4VRwgfDgRAwxclMkZqq3sIt1t4IjPncvDkl7MPTOHnwBXjT68lZrZs9myl107dd7x7mLJhIbBmWee8dT2c29%2F8u5fRP6Mqm0DXfvIiqx8wwxWVb3CnPtDf5kN9u7AfaUzIGNxEpEzUwoNgd0Q3OM1Y6fIG68NSqtbolTj%2BpISfWEUF%2B68Xbp6yMCi7zIZFdy%2Bq%2Brc6N4l2mMQV4BWSlGhg0Y9mg3P%2BiMRIDn8Cd%2FDKB3Rf8GBbY07t9uCAQd6vuLw%2BoFkNyU%2Bn6j5S5RvD52gWz3rgU%2FDBZOYUR3281aNUknLzqWxZEvnLRLpTW67Zp3K4Wy7ovnbId7h9ZhV64pFoz9wfehwStZwZ%2BTuHnheAkSqooPqJzw9Pda2TgucIfnguEYCIx7cnO3RbEGt9rqvXoEm75ZNOvpTbF3%2FXTPMMKarMQGOqUBBQ5A3EOwd%2BYAVOHMOaC3XaO1YaUmkH4CFTVUY1YYlKxzu9IUxOVRbQr0V82%2Fb177xuqt9h6SF8DtBEHW9tnwha6ZffI60TJKDpaVuTvGh5DjQJ6dPVRvGDkYY99I9wy3RtM%2FftBw%2B7GrLgAmt1gxFc2SngwQO4Nmc3VI6JHno5enCSJTEwwzpfAO2oSuW4zbD0Rwg64oJSvV9lfofYPmFOPgk5%2BM&X-Amz-Signature=d8666447ea3dbe4b3c26a54b9686ba31763ee55a3ae7de4bfcad91e44682dd13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKS4XBV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqZC5aXJr799I9G8keCzu6lLGfkyCW2td4k1Q1XpkYBAIgAMu6QvTLId9DhdF3M34%2F4JxkfY70aQgOhOF%2FRzMfU3kqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyf9Nq2UM%2BOTBV0iircA1n03koJAM9IFTey3ZRUi6MazKaCfirORDuSVfNsd8Lo0VZx7CQICD%2FK%2FqTbmgCD%2BMDkQu8VJhjB%2B230X9s0dWWaCE1ONQfFBnT7L7jB%2FngjQOyRLkOWXVC8c5zScYCs5cqpfBKj%2FhQiFolpkBF0pRuFcrW3n7iIV6AGViF%2FkSquLJE7YZE5aXEdgE54rKK2CxTDx7QiSS7MRxgDO7Z%2F4VRwgfDgRAwxclMkZqq3sIt1t4IjPncvDkl7MPTOHnwBXjT68lZrZs9myl107dd7x7mLJhIbBmWee8dT2c29%2F8u5fRP6Mqm0DXfvIiqx8wwxWVb3CnPtDf5kN9u7AfaUzIGNxEpEzUwoNgd0Q3OM1Y6fIG68NSqtbolTj%2BpISfWEUF%2B68Xbp6yMCi7zIZFdy%2Bq%2Brc6N4l2mMQV4BWSlGhg0Y9mg3P%2BiMRIDn8Cd%2FDKB3Rf8GBbY07t9uCAQd6vuLw%2BoFkNyU%2Bn6j5S5RvD52gWz3rgU%2FDBZOYUR3281aNUknLzqWxZEvnLRLpTW67Zp3K4Wy7ovnbId7h9ZhV64pFoz9wfehwStZwZ%2BTuHnheAkSqooPqJzw9Pda2TgucIfnguEYCIx7cnO3RbEGt9rqvXoEm75ZNOvpTbF3%2FXTPMMKarMQGOqUBBQ5A3EOwd%2BYAVOHMOaC3XaO1YaUmkH4CFTVUY1YYlKxzu9IUxOVRbQr0V82%2Fb177xuqt9h6SF8DtBEHW9tnwha6ZffI60TJKDpaVuTvGh5DjQJ6dPVRvGDkYY99I9wy3RtM%2FftBw%2B7GrLgAmt1gxFc2SngwQO4Nmc3VI6JHno5enCSJTEwwzpfAO2oSuW4zbD0Rwg64oJSvV9lfofYPmFOPgk5%2BM&X-Amz-Signature=852845029ab35517c141de4e6fff47c874bd36176299747ad348ea5c9aa7bd23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKS4XBV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqZC5aXJr799I9G8keCzu6lLGfkyCW2td4k1Q1XpkYBAIgAMu6QvTLId9DhdF3M34%2F4JxkfY70aQgOhOF%2FRzMfU3kqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyf9Nq2UM%2BOTBV0iircA1n03koJAM9IFTey3ZRUi6MazKaCfirORDuSVfNsd8Lo0VZx7CQICD%2FK%2FqTbmgCD%2BMDkQu8VJhjB%2B230X9s0dWWaCE1ONQfFBnT7L7jB%2FngjQOyRLkOWXVC8c5zScYCs5cqpfBKj%2FhQiFolpkBF0pRuFcrW3n7iIV6AGViF%2FkSquLJE7YZE5aXEdgE54rKK2CxTDx7QiSS7MRxgDO7Z%2F4VRwgfDgRAwxclMkZqq3sIt1t4IjPncvDkl7MPTOHnwBXjT68lZrZs9myl107dd7x7mLJhIbBmWee8dT2c29%2F8u5fRP6Mqm0DXfvIiqx8wwxWVb3CnPtDf5kN9u7AfaUzIGNxEpEzUwoNgd0Q3OM1Y6fIG68NSqtbolTj%2BpISfWEUF%2B68Xbp6yMCi7zIZFdy%2Bq%2Brc6N4l2mMQV4BWSlGhg0Y9mg3P%2BiMRIDn8Cd%2FDKB3Rf8GBbY07t9uCAQd6vuLw%2BoFkNyU%2Bn6j5S5RvD52gWz3rgU%2FDBZOYUR3281aNUknLzqWxZEvnLRLpTW67Zp3K4Wy7ovnbId7h9ZhV64pFoz9wfehwStZwZ%2BTuHnheAkSqooPqJzw9Pda2TgucIfnguEYCIx7cnO3RbEGt9rqvXoEm75ZNOvpTbF3%2FXTPMMKarMQGOqUBBQ5A3EOwd%2BYAVOHMOaC3XaO1YaUmkH4CFTVUY1YYlKxzu9IUxOVRbQr0V82%2Fb177xuqt9h6SF8DtBEHW9tnwha6ZffI60TJKDpaVuTvGh5DjQJ6dPVRvGDkYY99I9wy3RtM%2FftBw%2B7GrLgAmt1gxFc2SngwQO4Nmc3VI6JHno5enCSJTEwwzpfAO2oSuW4zbD0Rwg64oJSvV9lfofYPmFOPgk5%2BM&X-Amz-Signature=b307bb0f388ef0f3469c79956a893e05c3e06dc6d5c1f96bb502283c84e79814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
