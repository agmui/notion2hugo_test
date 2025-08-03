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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NZFD3F%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfAY%2F44GqSvpZd3nCELYpSu44KWf1rRBqyV9EhuBr%2BpQIhAJtkNw7GoFbS%2BqE%2FfRzTT2C2%2BATOyoeFmAv4WQF%2FiIZ0Kv8DCDQQABoMNjM3NDIzMTgzODA1IgzgNXsr64tGIys8j0Iq3APiVJgGgxLoMT48bL%2Bm69r342c6ghE7OwFfMtVK%2ByNP9XQtpsAKhxbdKmzNUC70NGx04ICFFhIQ%2FYpN4MJlDD0rtELiKCvaFzLjy%2FxMuKKGD%2BlqmL2XhxY2Nw0clc5MXOi60JdG8dh6wBNE0sdiuRc2a2tLIzOF4xsLhSOVKDkpEDrf13eYpvNCISZQNdTvWowTBf3CUU0SNAkz9mTe73JV6MYu6Szs%2FqP61A3Fv7VIRT7KYcxHAr79SEWuhUfuShckPzCbJLRd4PZLC1rSM2fZfBqTF%2F%2F0wOWehfxpvyiZC%2BaF2cwNXguiSbAn5zHvGHjhNF6geS1aJrGYks9axl5dv8B2pLZvZDO5cK4lVRc%2FMFZhTWPf65lrkQR6hML8gtxpjYxDeAI5eZ720fYunCax4jxHF3LUhJQ5nfEyVofWI7rsOekxWr92SJwwHqozerMZ1Q%2FqErt6gj7ou2ZKMJQtkq5EufqbUB6U1j3ys4ywFnp0huxTDJ%2F38gw44tEksIjq5bsT%2Bs9QLIxWFXNDqmy1NpWyugN%2FibvdWIZA8JVOWCd9K%2FmLZV5wMNtc6NtumbysuqgVXHZ4IcO4%2FtMH7WjV7AOyKpBxe1k%2F4clPdDUe7lBgLdN%2BWsNCakwRWDDM2b7EBjqkAaWwkcDcpntx8Bs30cUuI3XpGJpj3fsUIdmTZzK1YbBb4Ny60a59XK4l%2BTKeY3Td9IFhNg%2BPlVL4xev%2BbLJGFitIhh1SJDUeQ9uVh6TFvfVI5UUzw8vXPtNDrUB5zeurcZyy3KWMdmfx2XhKkwPUb8ChWRp95HbtebyWBbG1TLfj9RvHEH55JoiVtstjZoLPKStYbXM0CSOB%2F6jTIMYIiV9JLbp6&X-Amz-Signature=a376a3f4a4cc566ca49faabde70123c4b45a41956d163183c20bf8f784f09313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NZFD3F%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfAY%2F44GqSvpZd3nCELYpSu44KWf1rRBqyV9EhuBr%2BpQIhAJtkNw7GoFbS%2BqE%2FfRzTT2C2%2BATOyoeFmAv4WQF%2FiIZ0Kv8DCDQQABoMNjM3NDIzMTgzODA1IgzgNXsr64tGIys8j0Iq3APiVJgGgxLoMT48bL%2Bm69r342c6ghE7OwFfMtVK%2ByNP9XQtpsAKhxbdKmzNUC70NGx04ICFFhIQ%2FYpN4MJlDD0rtELiKCvaFzLjy%2FxMuKKGD%2BlqmL2XhxY2Nw0clc5MXOi60JdG8dh6wBNE0sdiuRc2a2tLIzOF4xsLhSOVKDkpEDrf13eYpvNCISZQNdTvWowTBf3CUU0SNAkz9mTe73JV6MYu6Szs%2FqP61A3Fv7VIRT7KYcxHAr79SEWuhUfuShckPzCbJLRd4PZLC1rSM2fZfBqTF%2F%2F0wOWehfxpvyiZC%2BaF2cwNXguiSbAn5zHvGHjhNF6geS1aJrGYks9axl5dv8B2pLZvZDO5cK4lVRc%2FMFZhTWPf65lrkQR6hML8gtxpjYxDeAI5eZ720fYunCax4jxHF3LUhJQ5nfEyVofWI7rsOekxWr92SJwwHqozerMZ1Q%2FqErt6gj7ou2ZKMJQtkq5EufqbUB6U1j3ys4ywFnp0huxTDJ%2F38gw44tEksIjq5bsT%2Bs9QLIxWFXNDqmy1NpWyugN%2FibvdWIZA8JVOWCd9K%2FmLZV5wMNtc6NtumbysuqgVXHZ4IcO4%2FtMH7WjV7AOyKpBxe1k%2F4clPdDUe7lBgLdN%2BWsNCakwRWDDM2b7EBjqkAaWwkcDcpntx8Bs30cUuI3XpGJpj3fsUIdmTZzK1YbBb4Ny60a59XK4l%2BTKeY3Td9IFhNg%2BPlVL4xev%2BbLJGFitIhh1SJDUeQ9uVh6TFvfVI5UUzw8vXPtNDrUB5zeurcZyy3KWMdmfx2XhKkwPUb8ChWRp95HbtebyWBbG1TLfj9RvHEH55JoiVtstjZoLPKStYbXM0CSOB%2F6jTIMYIiV9JLbp6&X-Amz-Signature=f0679fa9cdc54ca294cf012628881d4338b84f276f0f39acd3d561d6120e5702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NZFD3F%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfAY%2F44GqSvpZd3nCELYpSu44KWf1rRBqyV9EhuBr%2BpQIhAJtkNw7GoFbS%2BqE%2FfRzTT2C2%2BATOyoeFmAv4WQF%2FiIZ0Kv8DCDQQABoMNjM3NDIzMTgzODA1IgzgNXsr64tGIys8j0Iq3APiVJgGgxLoMT48bL%2Bm69r342c6ghE7OwFfMtVK%2ByNP9XQtpsAKhxbdKmzNUC70NGx04ICFFhIQ%2FYpN4MJlDD0rtELiKCvaFzLjy%2FxMuKKGD%2BlqmL2XhxY2Nw0clc5MXOi60JdG8dh6wBNE0sdiuRc2a2tLIzOF4xsLhSOVKDkpEDrf13eYpvNCISZQNdTvWowTBf3CUU0SNAkz9mTe73JV6MYu6Szs%2FqP61A3Fv7VIRT7KYcxHAr79SEWuhUfuShckPzCbJLRd4PZLC1rSM2fZfBqTF%2F%2F0wOWehfxpvyiZC%2BaF2cwNXguiSbAn5zHvGHjhNF6geS1aJrGYks9axl5dv8B2pLZvZDO5cK4lVRc%2FMFZhTWPf65lrkQR6hML8gtxpjYxDeAI5eZ720fYunCax4jxHF3LUhJQ5nfEyVofWI7rsOekxWr92SJwwHqozerMZ1Q%2FqErt6gj7ou2ZKMJQtkq5EufqbUB6U1j3ys4ywFnp0huxTDJ%2F38gw44tEksIjq5bsT%2Bs9QLIxWFXNDqmy1NpWyugN%2FibvdWIZA8JVOWCd9K%2FmLZV5wMNtc6NtumbysuqgVXHZ4IcO4%2FtMH7WjV7AOyKpBxe1k%2F4clPdDUe7lBgLdN%2BWsNCakwRWDDM2b7EBjqkAaWwkcDcpntx8Bs30cUuI3XpGJpj3fsUIdmTZzK1YbBb4Ny60a59XK4l%2BTKeY3Td9IFhNg%2BPlVL4xev%2BbLJGFitIhh1SJDUeQ9uVh6TFvfVI5UUzw8vXPtNDrUB5zeurcZyy3KWMdmfx2XhKkwPUb8ChWRp95HbtebyWBbG1TLfj9RvHEH55JoiVtstjZoLPKStYbXM0CSOB%2F6jTIMYIiV9JLbp6&X-Amz-Signature=a0dd959c8e18b45fdfe1fba16f63f6cf80d2d1f63c6363d63b5e0d88241e9a03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NZFD3F%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfAY%2F44GqSvpZd3nCELYpSu44KWf1rRBqyV9EhuBr%2BpQIhAJtkNw7GoFbS%2BqE%2FfRzTT2C2%2BATOyoeFmAv4WQF%2FiIZ0Kv8DCDQQABoMNjM3NDIzMTgzODA1IgzgNXsr64tGIys8j0Iq3APiVJgGgxLoMT48bL%2Bm69r342c6ghE7OwFfMtVK%2ByNP9XQtpsAKhxbdKmzNUC70NGx04ICFFhIQ%2FYpN4MJlDD0rtELiKCvaFzLjy%2FxMuKKGD%2BlqmL2XhxY2Nw0clc5MXOi60JdG8dh6wBNE0sdiuRc2a2tLIzOF4xsLhSOVKDkpEDrf13eYpvNCISZQNdTvWowTBf3CUU0SNAkz9mTe73JV6MYu6Szs%2FqP61A3Fv7VIRT7KYcxHAr79SEWuhUfuShckPzCbJLRd4PZLC1rSM2fZfBqTF%2F%2F0wOWehfxpvyiZC%2BaF2cwNXguiSbAn5zHvGHjhNF6geS1aJrGYks9axl5dv8B2pLZvZDO5cK4lVRc%2FMFZhTWPf65lrkQR6hML8gtxpjYxDeAI5eZ720fYunCax4jxHF3LUhJQ5nfEyVofWI7rsOekxWr92SJwwHqozerMZ1Q%2FqErt6gj7ou2ZKMJQtkq5EufqbUB6U1j3ys4ywFnp0huxTDJ%2F38gw44tEksIjq5bsT%2Bs9QLIxWFXNDqmy1NpWyugN%2FibvdWIZA8JVOWCd9K%2FmLZV5wMNtc6NtumbysuqgVXHZ4IcO4%2FtMH7WjV7AOyKpBxe1k%2F4clPdDUe7lBgLdN%2BWsNCakwRWDDM2b7EBjqkAaWwkcDcpntx8Bs30cUuI3XpGJpj3fsUIdmTZzK1YbBb4Ny60a59XK4l%2BTKeY3Td9IFhNg%2BPlVL4xev%2BbLJGFitIhh1SJDUeQ9uVh6TFvfVI5UUzw8vXPtNDrUB5zeurcZyy3KWMdmfx2XhKkwPUb8ChWRp95HbtebyWBbG1TLfj9RvHEH55JoiVtstjZoLPKStYbXM0CSOB%2F6jTIMYIiV9JLbp6&X-Amz-Signature=47c84ad56e48f2db29b74c4c2c1a1549cfd0f1379f3c00fac2ff497284644665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NZFD3F%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfAY%2F44GqSvpZd3nCELYpSu44KWf1rRBqyV9EhuBr%2BpQIhAJtkNw7GoFbS%2BqE%2FfRzTT2C2%2BATOyoeFmAv4WQF%2FiIZ0Kv8DCDQQABoMNjM3NDIzMTgzODA1IgzgNXsr64tGIys8j0Iq3APiVJgGgxLoMT48bL%2Bm69r342c6ghE7OwFfMtVK%2ByNP9XQtpsAKhxbdKmzNUC70NGx04ICFFhIQ%2FYpN4MJlDD0rtELiKCvaFzLjy%2FxMuKKGD%2BlqmL2XhxY2Nw0clc5MXOi60JdG8dh6wBNE0sdiuRc2a2tLIzOF4xsLhSOVKDkpEDrf13eYpvNCISZQNdTvWowTBf3CUU0SNAkz9mTe73JV6MYu6Szs%2FqP61A3Fv7VIRT7KYcxHAr79SEWuhUfuShckPzCbJLRd4PZLC1rSM2fZfBqTF%2F%2F0wOWehfxpvyiZC%2BaF2cwNXguiSbAn5zHvGHjhNF6geS1aJrGYks9axl5dv8B2pLZvZDO5cK4lVRc%2FMFZhTWPf65lrkQR6hML8gtxpjYxDeAI5eZ720fYunCax4jxHF3LUhJQ5nfEyVofWI7rsOekxWr92SJwwHqozerMZ1Q%2FqErt6gj7ou2ZKMJQtkq5EufqbUB6U1j3ys4ywFnp0huxTDJ%2F38gw44tEksIjq5bsT%2Bs9QLIxWFXNDqmy1NpWyugN%2FibvdWIZA8JVOWCd9K%2FmLZV5wMNtc6NtumbysuqgVXHZ4IcO4%2FtMH7WjV7AOyKpBxe1k%2F4clPdDUe7lBgLdN%2BWsNCakwRWDDM2b7EBjqkAaWwkcDcpntx8Bs30cUuI3XpGJpj3fsUIdmTZzK1YbBb4Ny60a59XK4l%2BTKeY3Td9IFhNg%2BPlVL4xev%2BbLJGFitIhh1SJDUeQ9uVh6TFvfVI5UUzw8vXPtNDrUB5zeurcZyy3KWMdmfx2XhKkwPUb8ChWRp95HbtebyWBbG1TLfj9RvHEH55JoiVtstjZoLPKStYbXM0CSOB%2F6jTIMYIiV9JLbp6&X-Amz-Signature=8b8a9ad2e615315cb829df4be192100c1cf1b9aed9dc4732fa6689c5bc31a76f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
