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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ7GHVNO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDFsAnwfGXrSenWmAfOBkL241LK%2BZAvPHz6b0YeCS%2F3GAIgJjOA2wLOB9FJgTcgjAndlzKptyrJgN3XEfuSgU38fk0qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpwdnxpSBs3j0w2nSrcA9JSu3sFASwtd7lOWVPBIq9QfiAmJXTkMtIcc%2FPdIEfKAr%2BVQJnJNe8BkiHTbDsl%2FL%2BblD3sXkoDVp%2B1mcH%2BKjlhXNmm%2FTkng0BM4J%2FiXabcqoBRpM202qYf3a0MB0U6BYb2dz3so1SLcN4NDWG%2F6vMXMofsWB8uLERQmzUT0PaIhVwi7uAYvRbtqpU1%2B28pV08exsihKnGqUtR9iHn33fvSv8UX4eRNUcpqiNmYgCJ077BcKfksZj08yCUCHd4jS3oRQiLxV%2BT%2BzhOo1svOl8t3z1zzyMBFMlYNFD8AHzHwFZ6fR4F%2FrXYVNj%2B2hj4cgusax8fDK0xYUvOCDArsOI2pJ7rY9P2y3MUtK7jueVd%2BTGan1Xa6G9KsuUAKBiAHWHvxOT%2FPc1yeO2uVu%2FTr4JzwpvL0CqHVcoxYbzavDXvG6SfTQ4xk02LlDpbVtXIU8dv7OW48EVhW7ZAK5%2BVPB6SPffKl5VHqWySP54c5a%2FuqmWb%2BxlRD6TuRflZoPuEAiHWwDEmGP0%2FOoh8h%2BMi5Ms8ErXATmkn7IwIyLqlhj%2BVUGdDInqsZfjly%2BhNjjpRs2f9vAYYhjLI%2FHI7EmY1Q2ibaN4sJAqeRZ%2Bx9jI8fhJ1%2Bwp1ugIzWnyVlE9QSMPegmcAGOqUBhLqKUT6feKGOlbEYs%2BWoMaXsa6uHKmtOrkrgAJghG9e5dwxzSp7kPNUQ%2FNbLzYHTtzntrbqAElPoOgEdsBjcmK%2BdXz%2FlvUUN7nkX%2FBX5lr%2BY42e3ei2Qkr7ceeAnr2XoMne7ffLOwVMVuEWyj4JXXb9kSaXWIkERh2APATbEKKDRA880DAHz46V%2F5ebPANZb9o%2BTQzMkzwAvveL9OrvaPcwwPL7v&X-Amz-Signature=23903d7fa4f8c6b80d6f5fa495fc7c980feeb465c097f6386ef25be0d7bbd76a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ7GHVNO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDFsAnwfGXrSenWmAfOBkL241LK%2BZAvPHz6b0YeCS%2F3GAIgJjOA2wLOB9FJgTcgjAndlzKptyrJgN3XEfuSgU38fk0qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpwdnxpSBs3j0w2nSrcA9JSu3sFASwtd7lOWVPBIq9QfiAmJXTkMtIcc%2FPdIEfKAr%2BVQJnJNe8BkiHTbDsl%2FL%2BblD3sXkoDVp%2B1mcH%2BKjlhXNmm%2FTkng0BM4J%2FiXabcqoBRpM202qYf3a0MB0U6BYb2dz3so1SLcN4NDWG%2F6vMXMofsWB8uLERQmzUT0PaIhVwi7uAYvRbtqpU1%2B28pV08exsihKnGqUtR9iHn33fvSv8UX4eRNUcpqiNmYgCJ077BcKfksZj08yCUCHd4jS3oRQiLxV%2BT%2BzhOo1svOl8t3z1zzyMBFMlYNFD8AHzHwFZ6fR4F%2FrXYVNj%2B2hj4cgusax8fDK0xYUvOCDArsOI2pJ7rY9P2y3MUtK7jueVd%2BTGan1Xa6G9KsuUAKBiAHWHvxOT%2FPc1yeO2uVu%2FTr4JzwpvL0CqHVcoxYbzavDXvG6SfTQ4xk02LlDpbVtXIU8dv7OW48EVhW7ZAK5%2BVPB6SPffKl5VHqWySP54c5a%2FuqmWb%2BxlRD6TuRflZoPuEAiHWwDEmGP0%2FOoh8h%2BMi5Ms8ErXATmkn7IwIyLqlhj%2BVUGdDInqsZfjly%2BhNjjpRs2f9vAYYhjLI%2FHI7EmY1Q2ibaN4sJAqeRZ%2Bx9jI8fhJ1%2Bwp1ugIzWnyVlE9QSMPegmcAGOqUBhLqKUT6feKGOlbEYs%2BWoMaXsa6uHKmtOrkrgAJghG9e5dwxzSp7kPNUQ%2FNbLzYHTtzntrbqAElPoOgEdsBjcmK%2BdXz%2FlvUUN7nkX%2FBX5lr%2BY42e3ei2Qkr7ceeAnr2XoMne7ffLOwVMVuEWyj4JXXb9kSaXWIkERh2APATbEKKDRA880DAHz46V%2F5ebPANZb9o%2BTQzMkzwAvveL9OrvaPcwwPL7v&X-Amz-Signature=66c981ffbdafa85d662a846fe42a728f9b747cb826e0eb8291d7cf8317e3f80f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ7GHVNO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDFsAnwfGXrSenWmAfOBkL241LK%2BZAvPHz6b0YeCS%2F3GAIgJjOA2wLOB9FJgTcgjAndlzKptyrJgN3XEfuSgU38fk0qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpwdnxpSBs3j0w2nSrcA9JSu3sFASwtd7lOWVPBIq9QfiAmJXTkMtIcc%2FPdIEfKAr%2BVQJnJNe8BkiHTbDsl%2FL%2BblD3sXkoDVp%2B1mcH%2BKjlhXNmm%2FTkng0BM4J%2FiXabcqoBRpM202qYf3a0MB0U6BYb2dz3so1SLcN4NDWG%2F6vMXMofsWB8uLERQmzUT0PaIhVwi7uAYvRbtqpU1%2B28pV08exsihKnGqUtR9iHn33fvSv8UX4eRNUcpqiNmYgCJ077BcKfksZj08yCUCHd4jS3oRQiLxV%2BT%2BzhOo1svOl8t3z1zzyMBFMlYNFD8AHzHwFZ6fR4F%2FrXYVNj%2B2hj4cgusax8fDK0xYUvOCDArsOI2pJ7rY9P2y3MUtK7jueVd%2BTGan1Xa6G9KsuUAKBiAHWHvxOT%2FPc1yeO2uVu%2FTr4JzwpvL0CqHVcoxYbzavDXvG6SfTQ4xk02LlDpbVtXIU8dv7OW48EVhW7ZAK5%2BVPB6SPffKl5VHqWySP54c5a%2FuqmWb%2BxlRD6TuRflZoPuEAiHWwDEmGP0%2FOoh8h%2BMi5Ms8ErXATmkn7IwIyLqlhj%2BVUGdDInqsZfjly%2BhNjjpRs2f9vAYYhjLI%2FHI7EmY1Q2ibaN4sJAqeRZ%2Bx9jI8fhJ1%2Bwp1ugIzWnyVlE9QSMPegmcAGOqUBhLqKUT6feKGOlbEYs%2BWoMaXsa6uHKmtOrkrgAJghG9e5dwxzSp7kPNUQ%2FNbLzYHTtzntrbqAElPoOgEdsBjcmK%2BdXz%2FlvUUN7nkX%2FBX5lr%2BY42e3ei2Qkr7ceeAnr2XoMne7ffLOwVMVuEWyj4JXXb9kSaXWIkERh2APATbEKKDRA880DAHz46V%2F5ebPANZb9o%2BTQzMkzwAvveL9OrvaPcwwPL7v&X-Amz-Signature=eae835cfe025cd5878d368e87251369cdf09b80460aa419f52aaf51b70e91885&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ7GHVNO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDFsAnwfGXrSenWmAfOBkL241LK%2BZAvPHz6b0YeCS%2F3GAIgJjOA2wLOB9FJgTcgjAndlzKptyrJgN3XEfuSgU38fk0qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpwdnxpSBs3j0w2nSrcA9JSu3sFASwtd7lOWVPBIq9QfiAmJXTkMtIcc%2FPdIEfKAr%2BVQJnJNe8BkiHTbDsl%2FL%2BblD3sXkoDVp%2B1mcH%2BKjlhXNmm%2FTkng0BM4J%2FiXabcqoBRpM202qYf3a0MB0U6BYb2dz3so1SLcN4NDWG%2F6vMXMofsWB8uLERQmzUT0PaIhVwi7uAYvRbtqpU1%2B28pV08exsihKnGqUtR9iHn33fvSv8UX4eRNUcpqiNmYgCJ077BcKfksZj08yCUCHd4jS3oRQiLxV%2BT%2BzhOo1svOl8t3z1zzyMBFMlYNFD8AHzHwFZ6fR4F%2FrXYVNj%2B2hj4cgusax8fDK0xYUvOCDArsOI2pJ7rY9P2y3MUtK7jueVd%2BTGan1Xa6G9KsuUAKBiAHWHvxOT%2FPc1yeO2uVu%2FTr4JzwpvL0CqHVcoxYbzavDXvG6SfTQ4xk02LlDpbVtXIU8dv7OW48EVhW7ZAK5%2BVPB6SPffKl5VHqWySP54c5a%2FuqmWb%2BxlRD6TuRflZoPuEAiHWwDEmGP0%2FOoh8h%2BMi5Ms8ErXATmkn7IwIyLqlhj%2BVUGdDInqsZfjly%2BhNjjpRs2f9vAYYhjLI%2FHI7EmY1Q2ibaN4sJAqeRZ%2Bx9jI8fhJ1%2Bwp1ugIzWnyVlE9QSMPegmcAGOqUBhLqKUT6feKGOlbEYs%2BWoMaXsa6uHKmtOrkrgAJghG9e5dwxzSp7kPNUQ%2FNbLzYHTtzntrbqAElPoOgEdsBjcmK%2BdXz%2FlvUUN7nkX%2FBX5lr%2BY42e3ei2Qkr7ceeAnr2XoMne7ffLOwVMVuEWyj4JXXb9kSaXWIkERh2APATbEKKDRA880DAHz46V%2F5ebPANZb9o%2BTQzMkzwAvveL9OrvaPcwwPL7v&X-Amz-Signature=6bb8eebaca298ba6a7037154ccc13ff5a902eb69b3bef7ff085fc18b8fb4481e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ7GHVNO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDFsAnwfGXrSenWmAfOBkL241LK%2BZAvPHz6b0YeCS%2F3GAIgJjOA2wLOB9FJgTcgjAndlzKptyrJgN3XEfuSgU38fk0qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpwdnxpSBs3j0w2nSrcA9JSu3sFASwtd7lOWVPBIq9QfiAmJXTkMtIcc%2FPdIEfKAr%2BVQJnJNe8BkiHTbDsl%2FL%2BblD3sXkoDVp%2B1mcH%2BKjlhXNmm%2FTkng0BM4J%2FiXabcqoBRpM202qYf3a0MB0U6BYb2dz3so1SLcN4NDWG%2F6vMXMofsWB8uLERQmzUT0PaIhVwi7uAYvRbtqpU1%2B28pV08exsihKnGqUtR9iHn33fvSv8UX4eRNUcpqiNmYgCJ077BcKfksZj08yCUCHd4jS3oRQiLxV%2BT%2BzhOo1svOl8t3z1zzyMBFMlYNFD8AHzHwFZ6fR4F%2FrXYVNj%2B2hj4cgusax8fDK0xYUvOCDArsOI2pJ7rY9P2y3MUtK7jueVd%2BTGan1Xa6G9KsuUAKBiAHWHvxOT%2FPc1yeO2uVu%2FTr4JzwpvL0CqHVcoxYbzavDXvG6SfTQ4xk02LlDpbVtXIU8dv7OW48EVhW7ZAK5%2BVPB6SPffKl5VHqWySP54c5a%2FuqmWb%2BxlRD6TuRflZoPuEAiHWwDEmGP0%2FOoh8h%2BMi5Ms8ErXATmkn7IwIyLqlhj%2BVUGdDInqsZfjly%2BhNjjpRs2f9vAYYhjLI%2FHI7EmY1Q2ibaN4sJAqeRZ%2Bx9jI8fhJ1%2Bwp1ugIzWnyVlE9QSMPegmcAGOqUBhLqKUT6feKGOlbEYs%2BWoMaXsa6uHKmtOrkrgAJghG9e5dwxzSp7kPNUQ%2FNbLzYHTtzntrbqAElPoOgEdsBjcmK%2BdXz%2FlvUUN7nkX%2FBX5lr%2BY42e3ei2Qkr7ceeAnr2XoMne7ffLOwVMVuEWyj4JXXb9kSaXWIkERh2APATbEKKDRA880DAHz46V%2F5ebPANZb9o%2BTQzMkzwAvveL9OrvaPcwwPL7v&X-Amz-Signature=2492f47ffd4690eb3d91ac62ec0a2278344a0d9d33f603ffdec3243d0128db3c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
