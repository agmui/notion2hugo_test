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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QSTQMA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICX4UH2Bm7%2BKJUO5Lz0mIyN6442arKAsiHeJNaOUxuw1AiEAquR8nWbkN%2BglrIYPcMp7PLATD96I%2FfM25IllI7bQU2gqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACN2tHh9q%2B6zLRJLircA65J2J2fDWib0M8wKXXFTzppHNsg0hOe23k%2BGCkrAL9z%2Bay14iI24ES%2BZSJKP2QzkQ12rryeUHLF3ZvNvjjyANNbINqIuN6j36%2BVFtYIguYUad7s0YAkKdXyaBEp7Ojyl0nUtKKVoEE3TE6ZCXaXDvHPaFhFQkMMNi5D0VV2vTZEiDQaWuc7sOwqyBtHvmHOP8h%2F0kWQTwcTxqkhaoJV54%2Fi5GtPsMQFvf8WiFT294A%2FMwD5vVglDBkk5bnsTjde4UzN5KcmWG2M%2F5F6a7D3fJCg2Zfqx5gjAe88B5nwLX4Pbnc7LCYE3NGi%2F1OpG903MkHh4RxXQe9af%2BYH2eB6cfJhyXfCciU9uhLfyqoP3K2p3XZ0dtEfK%2FZuZ1Rj6rXropgefT%2FKqfrIjpgcS9NYFXBKkjzZiaiRrj%2F%2FYBX7XRL1wF%2F670titA1I0mt4x9HwMIO6I%2BDX0MnWcF8zswc5ll2CICc4ssqxm6LN4yXaOipokq20rZQ2RhKwLrOYxUzhN%2BOcp1AUSJkIA4SUok5RvVkFDIo0VUk4n56zlX8RV%2B6lllEfumwZ9qup%2F1HX7qz3SA9hj0vTE2gsy2opfgX6L36w0WMD3acqnKrjA7Tw7As0xnl%2BfDyj%2BHVJxgfWMOK7sL8GOqUBsmIgTcMCeT99Egd7FAG1Vv9y4UVAp3XSKs7P%2BnhTp2T%2FZLclz%2B785r0%2BDgRPqafOto8Mr%2BHBS2ESrFbnQXw0sEUvzR2WOYAlVtJeF0iNLrcN6j2jIHDzocLYSezfsOQqg7CTF8y9CDO0otu5Azbn2hppD%2FfuENOuuFwXqI7Bz3inRAnCDkeB7xorb9eDCB7egxiEPQ0wriAiJ3ojLSWMl%2B7YOFBt&X-Amz-Signature=dca1e800c5fcb0144e87294882e54c72b56d10898fb805bdf8db6debc1136f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QSTQMA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICX4UH2Bm7%2BKJUO5Lz0mIyN6442arKAsiHeJNaOUxuw1AiEAquR8nWbkN%2BglrIYPcMp7PLATD96I%2FfM25IllI7bQU2gqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACN2tHh9q%2B6zLRJLircA65J2J2fDWib0M8wKXXFTzppHNsg0hOe23k%2BGCkrAL9z%2Bay14iI24ES%2BZSJKP2QzkQ12rryeUHLF3ZvNvjjyANNbINqIuN6j36%2BVFtYIguYUad7s0YAkKdXyaBEp7Ojyl0nUtKKVoEE3TE6ZCXaXDvHPaFhFQkMMNi5D0VV2vTZEiDQaWuc7sOwqyBtHvmHOP8h%2F0kWQTwcTxqkhaoJV54%2Fi5GtPsMQFvf8WiFT294A%2FMwD5vVglDBkk5bnsTjde4UzN5KcmWG2M%2F5F6a7D3fJCg2Zfqx5gjAe88B5nwLX4Pbnc7LCYE3NGi%2F1OpG903MkHh4RxXQe9af%2BYH2eB6cfJhyXfCciU9uhLfyqoP3K2p3XZ0dtEfK%2FZuZ1Rj6rXropgefT%2FKqfrIjpgcS9NYFXBKkjzZiaiRrj%2F%2FYBX7XRL1wF%2F670titA1I0mt4x9HwMIO6I%2BDX0MnWcF8zswc5ll2CICc4ssqxm6LN4yXaOipokq20rZQ2RhKwLrOYxUzhN%2BOcp1AUSJkIA4SUok5RvVkFDIo0VUk4n56zlX8RV%2B6lllEfumwZ9qup%2F1HX7qz3SA9hj0vTE2gsy2opfgX6L36w0WMD3acqnKrjA7Tw7As0xnl%2BfDyj%2BHVJxgfWMOK7sL8GOqUBsmIgTcMCeT99Egd7FAG1Vv9y4UVAp3XSKs7P%2BnhTp2T%2FZLclz%2B785r0%2BDgRPqafOto8Mr%2BHBS2ESrFbnQXw0sEUvzR2WOYAlVtJeF0iNLrcN6j2jIHDzocLYSezfsOQqg7CTF8y9CDO0otu5Azbn2hppD%2FfuENOuuFwXqI7Bz3inRAnCDkeB7xorb9eDCB7egxiEPQ0wriAiJ3ojLSWMl%2B7YOFBt&X-Amz-Signature=71fa09f2c17d419004eb1c93f2163b6132a189cbbf64f46024e783fbd16c3b4b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QSTQMA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICX4UH2Bm7%2BKJUO5Lz0mIyN6442arKAsiHeJNaOUxuw1AiEAquR8nWbkN%2BglrIYPcMp7PLATD96I%2FfM25IllI7bQU2gqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACN2tHh9q%2B6zLRJLircA65J2J2fDWib0M8wKXXFTzppHNsg0hOe23k%2BGCkrAL9z%2Bay14iI24ES%2BZSJKP2QzkQ12rryeUHLF3ZvNvjjyANNbINqIuN6j36%2BVFtYIguYUad7s0YAkKdXyaBEp7Ojyl0nUtKKVoEE3TE6ZCXaXDvHPaFhFQkMMNi5D0VV2vTZEiDQaWuc7sOwqyBtHvmHOP8h%2F0kWQTwcTxqkhaoJV54%2Fi5GtPsMQFvf8WiFT294A%2FMwD5vVglDBkk5bnsTjde4UzN5KcmWG2M%2F5F6a7D3fJCg2Zfqx5gjAe88B5nwLX4Pbnc7LCYE3NGi%2F1OpG903MkHh4RxXQe9af%2BYH2eB6cfJhyXfCciU9uhLfyqoP3K2p3XZ0dtEfK%2FZuZ1Rj6rXropgefT%2FKqfrIjpgcS9NYFXBKkjzZiaiRrj%2F%2FYBX7XRL1wF%2F670titA1I0mt4x9HwMIO6I%2BDX0MnWcF8zswc5ll2CICc4ssqxm6LN4yXaOipokq20rZQ2RhKwLrOYxUzhN%2BOcp1AUSJkIA4SUok5RvVkFDIo0VUk4n56zlX8RV%2B6lllEfumwZ9qup%2F1HX7qz3SA9hj0vTE2gsy2opfgX6L36w0WMD3acqnKrjA7Tw7As0xnl%2BfDyj%2BHVJxgfWMOK7sL8GOqUBsmIgTcMCeT99Egd7FAG1Vv9y4UVAp3XSKs7P%2BnhTp2T%2FZLclz%2B785r0%2BDgRPqafOto8Mr%2BHBS2ESrFbnQXw0sEUvzR2WOYAlVtJeF0iNLrcN6j2jIHDzocLYSezfsOQqg7CTF8y9CDO0otu5Azbn2hppD%2FfuENOuuFwXqI7Bz3inRAnCDkeB7xorb9eDCB7egxiEPQ0wriAiJ3ojLSWMl%2B7YOFBt&X-Amz-Signature=6591344258ba53faec02895878617653afab704e848b61f5d0ea8b1685e65f81&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QSTQMA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICX4UH2Bm7%2BKJUO5Lz0mIyN6442arKAsiHeJNaOUxuw1AiEAquR8nWbkN%2BglrIYPcMp7PLATD96I%2FfM25IllI7bQU2gqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACN2tHh9q%2B6zLRJLircA65J2J2fDWib0M8wKXXFTzppHNsg0hOe23k%2BGCkrAL9z%2Bay14iI24ES%2BZSJKP2QzkQ12rryeUHLF3ZvNvjjyANNbINqIuN6j36%2BVFtYIguYUad7s0YAkKdXyaBEp7Ojyl0nUtKKVoEE3TE6ZCXaXDvHPaFhFQkMMNi5D0VV2vTZEiDQaWuc7sOwqyBtHvmHOP8h%2F0kWQTwcTxqkhaoJV54%2Fi5GtPsMQFvf8WiFT294A%2FMwD5vVglDBkk5bnsTjde4UzN5KcmWG2M%2F5F6a7D3fJCg2Zfqx5gjAe88B5nwLX4Pbnc7LCYE3NGi%2F1OpG903MkHh4RxXQe9af%2BYH2eB6cfJhyXfCciU9uhLfyqoP3K2p3XZ0dtEfK%2FZuZ1Rj6rXropgefT%2FKqfrIjpgcS9NYFXBKkjzZiaiRrj%2F%2FYBX7XRL1wF%2F670titA1I0mt4x9HwMIO6I%2BDX0MnWcF8zswc5ll2CICc4ssqxm6LN4yXaOipokq20rZQ2RhKwLrOYxUzhN%2BOcp1AUSJkIA4SUok5RvVkFDIo0VUk4n56zlX8RV%2B6lllEfumwZ9qup%2F1HX7qz3SA9hj0vTE2gsy2opfgX6L36w0WMD3acqnKrjA7Tw7As0xnl%2BfDyj%2BHVJxgfWMOK7sL8GOqUBsmIgTcMCeT99Egd7FAG1Vv9y4UVAp3XSKs7P%2BnhTp2T%2FZLclz%2B785r0%2BDgRPqafOto8Mr%2BHBS2ESrFbnQXw0sEUvzR2WOYAlVtJeF0iNLrcN6j2jIHDzocLYSezfsOQqg7CTF8y9CDO0otu5Azbn2hppD%2FfuENOuuFwXqI7Bz3inRAnCDkeB7xorb9eDCB7egxiEPQ0wriAiJ3ojLSWMl%2B7YOFBt&X-Amz-Signature=5f9e189f8027735e6dab14a0ff46e46d459d51dbe364dd68f66145852fd36d44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QSTQMA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICX4UH2Bm7%2BKJUO5Lz0mIyN6442arKAsiHeJNaOUxuw1AiEAquR8nWbkN%2BglrIYPcMp7PLATD96I%2FfM25IllI7bQU2gqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACN2tHh9q%2B6zLRJLircA65J2J2fDWib0M8wKXXFTzppHNsg0hOe23k%2BGCkrAL9z%2Bay14iI24ES%2BZSJKP2QzkQ12rryeUHLF3ZvNvjjyANNbINqIuN6j36%2BVFtYIguYUad7s0YAkKdXyaBEp7Ojyl0nUtKKVoEE3TE6ZCXaXDvHPaFhFQkMMNi5D0VV2vTZEiDQaWuc7sOwqyBtHvmHOP8h%2F0kWQTwcTxqkhaoJV54%2Fi5GtPsMQFvf8WiFT294A%2FMwD5vVglDBkk5bnsTjde4UzN5KcmWG2M%2F5F6a7D3fJCg2Zfqx5gjAe88B5nwLX4Pbnc7LCYE3NGi%2F1OpG903MkHh4RxXQe9af%2BYH2eB6cfJhyXfCciU9uhLfyqoP3K2p3XZ0dtEfK%2FZuZ1Rj6rXropgefT%2FKqfrIjpgcS9NYFXBKkjzZiaiRrj%2F%2FYBX7XRL1wF%2F670titA1I0mt4x9HwMIO6I%2BDX0MnWcF8zswc5ll2CICc4ssqxm6LN4yXaOipokq20rZQ2RhKwLrOYxUzhN%2BOcp1AUSJkIA4SUok5RvVkFDIo0VUk4n56zlX8RV%2B6lllEfumwZ9qup%2F1HX7qz3SA9hj0vTE2gsy2opfgX6L36w0WMD3acqnKrjA7Tw7As0xnl%2BfDyj%2BHVJxgfWMOK7sL8GOqUBsmIgTcMCeT99Egd7FAG1Vv9y4UVAp3XSKs7P%2BnhTp2T%2FZLclz%2B785r0%2BDgRPqafOto8Mr%2BHBS2ESrFbnQXw0sEUvzR2WOYAlVtJeF0iNLrcN6j2jIHDzocLYSezfsOQqg7CTF8y9CDO0otu5Azbn2hppD%2FfuENOuuFwXqI7Bz3inRAnCDkeB7xorb9eDCB7egxiEPQ0wriAiJ3ojLSWMl%2B7YOFBt&X-Amz-Signature=e5801865ad07936863ab57b34e0b18d2537c6a684368af2a817b10025739e3ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
