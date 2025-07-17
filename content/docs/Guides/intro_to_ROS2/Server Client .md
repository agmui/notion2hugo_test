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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERVVEYN%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCRhu2w9wUSLeTL%2FIkReeFtrgCb8olVtqYyCOr3kdAqdgIgZicxvEysmbW4q0UrJwKmMI2hiMgksd08GTN1bM%2Fu9j0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBWolnxENMyupRvBsSrcA0q1mbVzNxXbhJy8snwnI70%2FVFNGLT%2BBuopetdLjLVH6EZkJwMLN00oZVoMYWQLThxcmFswud2ce3NAkolQeJeRwtM%2BDCqa0VsuYYLFGz8qcJpunmKeHm8%2FFrD6AZo9DH8lBAIubaBnEccsgyLA0QP2yUfg181HnJAmjBxNK5Z9Yi8aiCtBtMr%2FpWXKBslUcsaE7xmgFJljueh%2FT87YdsHbWVYXrRxsXm%2BuKJrWgn2RwZON238j%2B6ignKuBNke6iNYkEliG3W8%2FtzdpAU23ia8hJC9uAF0QPWocPCLxpTgTB6nXebk8TsfQp0rrYBBwYmqLdqZhWt8Hfu37Vf0Q9ndiHXGs6UOl%2BixMOhc1EvmrU6q3whgRyUILf9vH67mSXSbP0F89RdC400UqxRysLFK7YgMSdcLgqpA3blY7pm2%2F4jLvk2RFNTlS6U%2BsVQAFSFPJEAcpbVdu1gY8bE04wDeh0wAHWmUYM4joQ6UJuycUr5E%2Fl5DnjK5VKNu741YQiQ0AD3Qcyly1mdFvgNVWaZiswI848TqUxWWmnQyMs1AGIO2ORmw4t%2BETnH9cXosJzgh0YcLukV2c2DzMWhmBp%2Bn9aX4%2FoKQNzC621nC8OpD11KVZUUCnuia8m9ZNQMPWR48MGOqUB5VxQsTAniVMZrHQbT2p%2FbRU9HJMAL3%2F6cmZBdLz91%2Fnn1MDV9mt81DkW6MWdyFHbfIAkYghchiTh7Gtv5Kv8Mz1v7O3hAFYF%2Fy9siymXT5QsC43qOcqDWQdui7gGWrEVuOcc8vGvmvzl1Fs63cgNx2CaRpKFJDxWmkoC2aPLe6fuKGeJK4ni7aGxcEuwmirRQjsh25aA7iiD5Jk%2FusWFfvGq63Tl&X-Amz-Signature=c1e00c3221914b41379d3ec4e8ac9827d36f19a6cd8ddb1bbd4ad1c21a28909d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERVVEYN%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCRhu2w9wUSLeTL%2FIkReeFtrgCb8olVtqYyCOr3kdAqdgIgZicxvEysmbW4q0UrJwKmMI2hiMgksd08GTN1bM%2Fu9j0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBWolnxENMyupRvBsSrcA0q1mbVzNxXbhJy8snwnI70%2FVFNGLT%2BBuopetdLjLVH6EZkJwMLN00oZVoMYWQLThxcmFswud2ce3NAkolQeJeRwtM%2BDCqa0VsuYYLFGz8qcJpunmKeHm8%2FFrD6AZo9DH8lBAIubaBnEccsgyLA0QP2yUfg181HnJAmjBxNK5Z9Yi8aiCtBtMr%2FpWXKBslUcsaE7xmgFJljueh%2FT87YdsHbWVYXrRxsXm%2BuKJrWgn2RwZON238j%2B6ignKuBNke6iNYkEliG3W8%2FtzdpAU23ia8hJC9uAF0QPWocPCLxpTgTB6nXebk8TsfQp0rrYBBwYmqLdqZhWt8Hfu37Vf0Q9ndiHXGs6UOl%2BixMOhc1EvmrU6q3whgRyUILf9vH67mSXSbP0F89RdC400UqxRysLFK7YgMSdcLgqpA3blY7pm2%2F4jLvk2RFNTlS6U%2BsVQAFSFPJEAcpbVdu1gY8bE04wDeh0wAHWmUYM4joQ6UJuycUr5E%2Fl5DnjK5VKNu741YQiQ0AD3Qcyly1mdFvgNVWaZiswI848TqUxWWmnQyMs1AGIO2ORmw4t%2BETnH9cXosJzgh0YcLukV2c2DzMWhmBp%2Bn9aX4%2FoKQNzC621nC8OpD11KVZUUCnuia8m9ZNQMPWR48MGOqUB5VxQsTAniVMZrHQbT2p%2FbRU9HJMAL3%2F6cmZBdLz91%2Fnn1MDV9mt81DkW6MWdyFHbfIAkYghchiTh7Gtv5Kv8Mz1v7O3hAFYF%2Fy9siymXT5QsC43qOcqDWQdui7gGWrEVuOcc8vGvmvzl1Fs63cgNx2CaRpKFJDxWmkoC2aPLe6fuKGeJK4ni7aGxcEuwmirRQjsh25aA7iiD5Jk%2FusWFfvGq63Tl&X-Amz-Signature=7c0dda5a984dbbc01801e5e9356235f84e5a8b37e76b318178eb9ce0fb8af8c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERVVEYN%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCRhu2w9wUSLeTL%2FIkReeFtrgCb8olVtqYyCOr3kdAqdgIgZicxvEysmbW4q0UrJwKmMI2hiMgksd08GTN1bM%2Fu9j0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBWolnxENMyupRvBsSrcA0q1mbVzNxXbhJy8snwnI70%2FVFNGLT%2BBuopetdLjLVH6EZkJwMLN00oZVoMYWQLThxcmFswud2ce3NAkolQeJeRwtM%2BDCqa0VsuYYLFGz8qcJpunmKeHm8%2FFrD6AZo9DH8lBAIubaBnEccsgyLA0QP2yUfg181HnJAmjBxNK5Z9Yi8aiCtBtMr%2FpWXKBslUcsaE7xmgFJljueh%2FT87YdsHbWVYXrRxsXm%2BuKJrWgn2RwZON238j%2B6ignKuBNke6iNYkEliG3W8%2FtzdpAU23ia8hJC9uAF0QPWocPCLxpTgTB6nXebk8TsfQp0rrYBBwYmqLdqZhWt8Hfu37Vf0Q9ndiHXGs6UOl%2BixMOhc1EvmrU6q3whgRyUILf9vH67mSXSbP0F89RdC400UqxRysLFK7YgMSdcLgqpA3blY7pm2%2F4jLvk2RFNTlS6U%2BsVQAFSFPJEAcpbVdu1gY8bE04wDeh0wAHWmUYM4joQ6UJuycUr5E%2Fl5DnjK5VKNu741YQiQ0AD3Qcyly1mdFvgNVWaZiswI848TqUxWWmnQyMs1AGIO2ORmw4t%2BETnH9cXosJzgh0YcLukV2c2DzMWhmBp%2Bn9aX4%2FoKQNzC621nC8OpD11KVZUUCnuia8m9ZNQMPWR48MGOqUB5VxQsTAniVMZrHQbT2p%2FbRU9HJMAL3%2F6cmZBdLz91%2Fnn1MDV9mt81DkW6MWdyFHbfIAkYghchiTh7Gtv5Kv8Mz1v7O3hAFYF%2Fy9siymXT5QsC43qOcqDWQdui7gGWrEVuOcc8vGvmvzl1Fs63cgNx2CaRpKFJDxWmkoC2aPLe6fuKGeJK4ni7aGxcEuwmirRQjsh25aA7iiD5Jk%2FusWFfvGq63Tl&X-Amz-Signature=fcbdab887f08411c821ce6d986db85568ffa7b0f0764af25eb00538fec068d6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERVVEYN%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCRhu2w9wUSLeTL%2FIkReeFtrgCb8olVtqYyCOr3kdAqdgIgZicxvEysmbW4q0UrJwKmMI2hiMgksd08GTN1bM%2Fu9j0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBWolnxENMyupRvBsSrcA0q1mbVzNxXbhJy8snwnI70%2FVFNGLT%2BBuopetdLjLVH6EZkJwMLN00oZVoMYWQLThxcmFswud2ce3NAkolQeJeRwtM%2BDCqa0VsuYYLFGz8qcJpunmKeHm8%2FFrD6AZo9DH8lBAIubaBnEccsgyLA0QP2yUfg181HnJAmjBxNK5Z9Yi8aiCtBtMr%2FpWXKBslUcsaE7xmgFJljueh%2FT87YdsHbWVYXrRxsXm%2BuKJrWgn2RwZON238j%2B6ignKuBNke6iNYkEliG3W8%2FtzdpAU23ia8hJC9uAF0QPWocPCLxpTgTB6nXebk8TsfQp0rrYBBwYmqLdqZhWt8Hfu37Vf0Q9ndiHXGs6UOl%2BixMOhc1EvmrU6q3whgRyUILf9vH67mSXSbP0F89RdC400UqxRysLFK7YgMSdcLgqpA3blY7pm2%2F4jLvk2RFNTlS6U%2BsVQAFSFPJEAcpbVdu1gY8bE04wDeh0wAHWmUYM4joQ6UJuycUr5E%2Fl5DnjK5VKNu741YQiQ0AD3Qcyly1mdFvgNVWaZiswI848TqUxWWmnQyMs1AGIO2ORmw4t%2BETnH9cXosJzgh0YcLukV2c2DzMWhmBp%2Bn9aX4%2FoKQNzC621nC8OpD11KVZUUCnuia8m9ZNQMPWR48MGOqUB5VxQsTAniVMZrHQbT2p%2FbRU9HJMAL3%2F6cmZBdLz91%2Fnn1MDV9mt81DkW6MWdyFHbfIAkYghchiTh7Gtv5Kv8Mz1v7O3hAFYF%2Fy9siymXT5QsC43qOcqDWQdui7gGWrEVuOcc8vGvmvzl1Fs63cgNx2CaRpKFJDxWmkoC2aPLe6fuKGeJK4ni7aGxcEuwmirRQjsh25aA7iiD5Jk%2FusWFfvGq63Tl&X-Amz-Signature=d027160010b9123861e477886cf05e55e188358ee742ab529a78f6151ee91504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERVVEYN%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCRhu2w9wUSLeTL%2FIkReeFtrgCb8olVtqYyCOr3kdAqdgIgZicxvEysmbW4q0UrJwKmMI2hiMgksd08GTN1bM%2Fu9j0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBWolnxENMyupRvBsSrcA0q1mbVzNxXbhJy8snwnI70%2FVFNGLT%2BBuopetdLjLVH6EZkJwMLN00oZVoMYWQLThxcmFswud2ce3NAkolQeJeRwtM%2BDCqa0VsuYYLFGz8qcJpunmKeHm8%2FFrD6AZo9DH8lBAIubaBnEccsgyLA0QP2yUfg181HnJAmjBxNK5Z9Yi8aiCtBtMr%2FpWXKBslUcsaE7xmgFJljueh%2FT87YdsHbWVYXrRxsXm%2BuKJrWgn2RwZON238j%2B6ignKuBNke6iNYkEliG3W8%2FtzdpAU23ia8hJC9uAF0QPWocPCLxpTgTB6nXebk8TsfQp0rrYBBwYmqLdqZhWt8Hfu37Vf0Q9ndiHXGs6UOl%2BixMOhc1EvmrU6q3whgRyUILf9vH67mSXSbP0F89RdC400UqxRysLFK7YgMSdcLgqpA3blY7pm2%2F4jLvk2RFNTlS6U%2BsVQAFSFPJEAcpbVdu1gY8bE04wDeh0wAHWmUYM4joQ6UJuycUr5E%2Fl5DnjK5VKNu741YQiQ0AD3Qcyly1mdFvgNVWaZiswI848TqUxWWmnQyMs1AGIO2ORmw4t%2BETnH9cXosJzgh0YcLukV2c2DzMWhmBp%2Bn9aX4%2FoKQNzC621nC8OpD11KVZUUCnuia8m9ZNQMPWR48MGOqUB5VxQsTAniVMZrHQbT2p%2FbRU9HJMAL3%2F6cmZBdLz91%2Fnn1MDV9mt81DkW6MWdyFHbfIAkYghchiTh7Gtv5Kv8Mz1v7O3hAFYF%2Fy9siymXT5QsC43qOcqDWQdui7gGWrEVuOcc8vGvmvzl1Fs63cgNx2CaRpKFJDxWmkoC2aPLe6fuKGeJK4ni7aGxcEuwmirRQjsh25aA7iiD5Jk%2FusWFfvGq63Tl&X-Amz-Signature=4662f0610d9090393c57bb1f7597da44332f91c62dd299235af25ea48f926258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
