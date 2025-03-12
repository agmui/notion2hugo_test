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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBPBMG4H%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDrcpBCFpFQLP%2BaiH%2FfjQ8P%2BRaBw1uwlyy0%2BHygZ94knAiEA5tLZ2INs5YKI7G7bCUQ%2FzWYJnwYEFyqH62FQ4Xj0rOYqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtNJhASNQ6RgCOYdCrcA68m5rd3ZfGGRrLzkAwQvrEeW1Vcfo7XWZmnZOXqUurnQFcAZZ0Y8Xy%2B56rGp8b%2FCafAJTLX%2Bz217fYNaaCSdOxwluUhCddFejwevXKWjaP0iRHgFGnr5NGAAKnKL%2FcF8MN46emMm5uEzJs%2BuPJfs7sB4JHAZnR%2F8QjEJWJREtLNlVetuQttWUxiQMHwxF2XVqPuYfg38IpakAZqxeZnV55oU2xH%2BxbTJ7Lfa1QJJam9%2BDZSnj6PAI7sKL5%2BEfychNKduU2VVxgP3ZUxUC6I8vYHZ7%2B9dQEsUnalJ0TWHs7R%2Blsdc2ib9kYc5R1Ejh%2Fr3ABG2YzPa3zyC1TplsUQD5uawcl5SLyIL1rhQ96ApbwRF7lK5zIUbxBfd%2Bqv1d6xLRW3%2BPLRdT34LnNgTxBc0oPv1WwYJ0NhFXjdFDXdBn%2BUaXCa146g3jpxFF5YmubSfMFt9UL9AvcpCXLJQgFgfa%2B9UtyR%2B%2FyAAfilOHD0YHH2SYF0NO%2F8O1uRBp0Fc2LNJ4%2BN78yx4YPgYxBO5PvAmvenlboEuNj%2FjTh0VYZ8w%2BCM2Wa8P1HWPviVB8ytFfrUPUelon8Hy1eP%2FpCVR6ox1ebAnYR37qUb1Vt0wCUex1YMleoSssY55Y9BUWc%2FMOD7xL4GOqUBF0n6ivJf8zCuZeLT8RQQ2xFxWIrFxmWX068lATEgnm9VJGCcLdSSP4xiTwIIGLVFafc%2FUoI7dqvAGDT5OB%2FpfEkLk87J6bVzeh%2BULHQlglkvh0eoOgY51QjFXSRKasO4uLLYL8nebx4to1sj6x3k9xtpgbVg%2FeQmxP6WWCJRl1jjV%2B%2FC%2B2A4GHmJiuKgkqDFAVE0fZ2KdVTqC9dKQmMfH7qKlPxg&X-Amz-Signature=0452177ef42d060dac7bbc387de40faf8303a10bc9e67950297309045b206b07&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBPBMG4H%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDrcpBCFpFQLP%2BaiH%2FfjQ8P%2BRaBw1uwlyy0%2BHygZ94knAiEA5tLZ2INs5YKI7G7bCUQ%2FzWYJnwYEFyqH62FQ4Xj0rOYqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtNJhASNQ6RgCOYdCrcA68m5rd3ZfGGRrLzkAwQvrEeW1Vcfo7XWZmnZOXqUurnQFcAZZ0Y8Xy%2B56rGp8b%2FCafAJTLX%2Bz217fYNaaCSdOxwluUhCddFejwevXKWjaP0iRHgFGnr5NGAAKnKL%2FcF8MN46emMm5uEzJs%2BuPJfs7sB4JHAZnR%2F8QjEJWJREtLNlVetuQttWUxiQMHwxF2XVqPuYfg38IpakAZqxeZnV55oU2xH%2BxbTJ7Lfa1QJJam9%2BDZSnj6PAI7sKL5%2BEfychNKduU2VVxgP3ZUxUC6I8vYHZ7%2B9dQEsUnalJ0TWHs7R%2Blsdc2ib9kYc5R1Ejh%2Fr3ABG2YzPa3zyC1TplsUQD5uawcl5SLyIL1rhQ96ApbwRF7lK5zIUbxBfd%2Bqv1d6xLRW3%2BPLRdT34LnNgTxBc0oPv1WwYJ0NhFXjdFDXdBn%2BUaXCa146g3jpxFF5YmubSfMFt9UL9AvcpCXLJQgFgfa%2B9UtyR%2B%2FyAAfilOHD0YHH2SYF0NO%2F8O1uRBp0Fc2LNJ4%2BN78yx4YPgYxBO5PvAmvenlboEuNj%2FjTh0VYZ8w%2BCM2Wa8P1HWPviVB8ytFfrUPUelon8Hy1eP%2FpCVR6ox1ebAnYR37qUb1Vt0wCUex1YMleoSssY55Y9BUWc%2FMOD7xL4GOqUBF0n6ivJf8zCuZeLT8RQQ2xFxWIrFxmWX068lATEgnm9VJGCcLdSSP4xiTwIIGLVFafc%2FUoI7dqvAGDT5OB%2FpfEkLk87J6bVzeh%2BULHQlglkvh0eoOgY51QjFXSRKasO4uLLYL8nebx4to1sj6x3k9xtpgbVg%2FeQmxP6WWCJRl1jjV%2B%2FC%2B2A4GHmJiuKgkqDFAVE0fZ2KdVTqC9dKQmMfH7qKlPxg&X-Amz-Signature=89f338f585b08dff6b68ee5503a95ba3e505915060e1b86ffcaa4b0e1e76405a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBPBMG4H%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDrcpBCFpFQLP%2BaiH%2FfjQ8P%2BRaBw1uwlyy0%2BHygZ94knAiEA5tLZ2INs5YKI7G7bCUQ%2FzWYJnwYEFyqH62FQ4Xj0rOYqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtNJhASNQ6RgCOYdCrcA68m5rd3ZfGGRrLzkAwQvrEeW1Vcfo7XWZmnZOXqUurnQFcAZZ0Y8Xy%2B56rGp8b%2FCafAJTLX%2Bz217fYNaaCSdOxwluUhCddFejwevXKWjaP0iRHgFGnr5NGAAKnKL%2FcF8MN46emMm5uEzJs%2BuPJfs7sB4JHAZnR%2F8QjEJWJREtLNlVetuQttWUxiQMHwxF2XVqPuYfg38IpakAZqxeZnV55oU2xH%2BxbTJ7Lfa1QJJam9%2BDZSnj6PAI7sKL5%2BEfychNKduU2VVxgP3ZUxUC6I8vYHZ7%2B9dQEsUnalJ0TWHs7R%2Blsdc2ib9kYc5R1Ejh%2Fr3ABG2YzPa3zyC1TplsUQD5uawcl5SLyIL1rhQ96ApbwRF7lK5zIUbxBfd%2Bqv1d6xLRW3%2BPLRdT34LnNgTxBc0oPv1WwYJ0NhFXjdFDXdBn%2BUaXCa146g3jpxFF5YmubSfMFt9UL9AvcpCXLJQgFgfa%2B9UtyR%2B%2FyAAfilOHD0YHH2SYF0NO%2F8O1uRBp0Fc2LNJ4%2BN78yx4YPgYxBO5PvAmvenlboEuNj%2FjTh0VYZ8w%2BCM2Wa8P1HWPviVB8ytFfrUPUelon8Hy1eP%2FpCVR6ox1ebAnYR37qUb1Vt0wCUex1YMleoSssY55Y9BUWc%2FMOD7xL4GOqUBF0n6ivJf8zCuZeLT8RQQ2xFxWIrFxmWX068lATEgnm9VJGCcLdSSP4xiTwIIGLVFafc%2FUoI7dqvAGDT5OB%2FpfEkLk87J6bVzeh%2BULHQlglkvh0eoOgY51QjFXSRKasO4uLLYL8nebx4to1sj6x3k9xtpgbVg%2FeQmxP6WWCJRl1jjV%2B%2FC%2B2A4GHmJiuKgkqDFAVE0fZ2KdVTqC9dKQmMfH7qKlPxg&X-Amz-Signature=6cf1fcff52d4222125e05dd1c13a4e7b0109046ca0bbd3d4065f34f77e94230c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBPBMG4H%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDrcpBCFpFQLP%2BaiH%2FfjQ8P%2BRaBw1uwlyy0%2BHygZ94knAiEA5tLZ2INs5YKI7G7bCUQ%2FzWYJnwYEFyqH62FQ4Xj0rOYqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtNJhASNQ6RgCOYdCrcA68m5rd3ZfGGRrLzkAwQvrEeW1Vcfo7XWZmnZOXqUurnQFcAZZ0Y8Xy%2B56rGp8b%2FCafAJTLX%2Bz217fYNaaCSdOxwluUhCddFejwevXKWjaP0iRHgFGnr5NGAAKnKL%2FcF8MN46emMm5uEzJs%2BuPJfs7sB4JHAZnR%2F8QjEJWJREtLNlVetuQttWUxiQMHwxF2XVqPuYfg38IpakAZqxeZnV55oU2xH%2BxbTJ7Lfa1QJJam9%2BDZSnj6PAI7sKL5%2BEfychNKduU2VVxgP3ZUxUC6I8vYHZ7%2B9dQEsUnalJ0TWHs7R%2Blsdc2ib9kYc5R1Ejh%2Fr3ABG2YzPa3zyC1TplsUQD5uawcl5SLyIL1rhQ96ApbwRF7lK5zIUbxBfd%2Bqv1d6xLRW3%2BPLRdT34LnNgTxBc0oPv1WwYJ0NhFXjdFDXdBn%2BUaXCa146g3jpxFF5YmubSfMFt9UL9AvcpCXLJQgFgfa%2B9UtyR%2B%2FyAAfilOHD0YHH2SYF0NO%2F8O1uRBp0Fc2LNJ4%2BN78yx4YPgYxBO5PvAmvenlboEuNj%2FjTh0VYZ8w%2BCM2Wa8P1HWPviVB8ytFfrUPUelon8Hy1eP%2FpCVR6ox1ebAnYR37qUb1Vt0wCUex1YMleoSssY55Y9BUWc%2FMOD7xL4GOqUBF0n6ivJf8zCuZeLT8RQQ2xFxWIrFxmWX068lATEgnm9VJGCcLdSSP4xiTwIIGLVFafc%2FUoI7dqvAGDT5OB%2FpfEkLk87J6bVzeh%2BULHQlglkvh0eoOgY51QjFXSRKasO4uLLYL8nebx4to1sj6x3k9xtpgbVg%2FeQmxP6WWCJRl1jjV%2B%2FC%2B2A4GHmJiuKgkqDFAVE0fZ2KdVTqC9dKQmMfH7qKlPxg&X-Amz-Signature=0476637898e19b5075b2380c98cfe4334ee11c98c5d819121b34b8d0f8f076bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBPBMG4H%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDrcpBCFpFQLP%2BaiH%2FfjQ8P%2BRaBw1uwlyy0%2BHygZ94knAiEA5tLZ2INs5YKI7G7bCUQ%2FzWYJnwYEFyqH62FQ4Xj0rOYqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtNJhASNQ6RgCOYdCrcA68m5rd3ZfGGRrLzkAwQvrEeW1Vcfo7XWZmnZOXqUurnQFcAZZ0Y8Xy%2B56rGp8b%2FCafAJTLX%2Bz217fYNaaCSdOxwluUhCddFejwevXKWjaP0iRHgFGnr5NGAAKnKL%2FcF8MN46emMm5uEzJs%2BuPJfs7sB4JHAZnR%2F8QjEJWJREtLNlVetuQttWUxiQMHwxF2XVqPuYfg38IpakAZqxeZnV55oU2xH%2BxbTJ7Lfa1QJJam9%2BDZSnj6PAI7sKL5%2BEfychNKduU2VVxgP3ZUxUC6I8vYHZ7%2B9dQEsUnalJ0TWHs7R%2Blsdc2ib9kYc5R1Ejh%2Fr3ABG2YzPa3zyC1TplsUQD5uawcl5SLyIL1rhQ96ApbwRF7lK5zIUbxBfd%2Bqv1d6xLRW3%2BPLRdT34LnNgTxBc0oPv1WwYJ0NhFXjdFDXdBn%2BUaXCa146g3jpxFF5YmubSfMFt9UL9AvcpCXLJQgFgfa%2B9UtyR%2B%2FyAAfilOHD0YHH2SYF0NO%2F8O1uRBp0Fc2LNJ4%2BN78yx4YPgYxBO5PvAmvenlboEuNj%2FjTh0VYZ8w%2BCM2Wa8P1HWPviVB8ytFfrUPUelon8Hy1eP%2FpCVR6ox1ebAnYR37qUb1Vt0wCUex1YMleoSssY55Y9BUWc%2FMOD7xL4GOqUBF0n6ivJf8zCuZeLT8RQQ2xFxWIrFxmWX068lATEgnm9VJGCcLdSSP4xiTwIIGLVFafc%2FUoI7dqvAGDT5OB%2FpfEkLk87J6bVzeh%2BULHQlglkvh0eoOgY51QjFXSRKasO4uLLYL8nebx4to1sj6x3k9xtpgbVg%2FeQmxP6WWCJRl1jjV%2B%2FC%2B2A4GHmJiuKgkqDFAVE0fZ2KdVTqC9dKQmMfH7qKlPxg&X-Amz-Signature=7f1dd56216b2ca8b3ed482b12020560b64ac5e77c47db2e2d7929c83b04c4415&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
