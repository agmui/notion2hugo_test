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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCNMF7EE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGOlFBlCiVurdwIwWxqWRL0j1zifohpByoYX%2FhkEyCTNAiAe%2F7IBUHlk7NIIEE9szlD3zZ8bSr3pW5Q0V%2FEYWSLdpCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM%2FIWN8irnWF3PPmliKtwDOQaLagO8v%2FynfHVI5GSl5jWprZbCuJrHRbXgvgF6ftPet0MvHLQkOz7GUbcE%2BsMpf6ZvEtMmJPjulFEaXEdGVUkTdNLZGqq5zUJk3uXfF7kTvWScwepOMgBZSmXNOun8HLRSp4rO%2FMUekQs3X%2Fct1%2BGZVBGKM%2Fg0MIhrXtbLG%2F7GWttDZas1pZQ1a5b0Xii6hFNo0SsH3qkUbFdiwGImd8FxwZqwkoACFUUkt262KHKybqRUKv7jS5klRtWW57bo3qltJK2d%2FTE0gmJ%2Bz54%2Bl7OWVvLFEgcNFm8qDLX%2BNxPLn0vYlu9UGcTVFzOcaWdEe%2Bit4zW1zfbipV6giw%2Bk31%2Btr3idoSr5VISlraraD5DJe9fHXDl8di61KSituq5K%2B6yEFU5RFCW1uzBRFu%2F0QXGWlSjiEEWXU6mP%2F0iDwiyNh44jePBop7E9SN690XQY1Bd1xevS8EFTvoYjWxqfyWb%2FsZ8HcfBorQI%2F7StCgwdDjsIXBDwnoHluwTAyQcBXzeNK%2Fdb%2Bq%2FdnQU42QZWURkfoMnZp6W7IzCqUhSi%2FtVoP1w%2FDFvzrlrBwgS4L%2Bxte%2Bsfr97L7w%2B62sANYWag6GR7B67w4L5KOmPT4WoDtUnQD5Rxf8YD6RYf1wOcw%2BJqZvQY6pgHrD85a3%2B%2F1rmJ4WDplB0EqWT%2F9ZEFHFL5tTq64zVOih7CYTnnqLDjXWDTwf55%2FyRZLZcB5wvdJpytP7VtPuaHQHzntl0BCLwMPetLPTfm98z5CBpIHUhWe1VioNzyYHN4iccp8FnnTY1YdQ10sFKnGoToRk5mApEHvmq2OG%2BZ6fygE7P8CV6sLLwDEKQJNc6CCecJ6lwjwj4bj9jNWpAJI0IsQn4Xt&X-Amz-Signature=f94fe87e46f4c222a61af5cf93d9418a564cb526319b3ae22f2e41adeb300f05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCNMF7EE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGOlFBlCiVurdwIwWxqWRL0j1zifohpByoYX%2FhkEyCTNAiAe%2F7IBUHlk7NIIEE9szlD3zZ8bSr3pW5Q0V%2FEYWSLdpCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM%2FIWN8irnWF3PPmliKtwDOQaLagO8v%2FynfHVI5GSl5jWprZbCuJrHRbXgvgF6ftPet0MvHLQkOz7GUbcE%2BsMpf6ZvEtMmJPjulFEaXEdGVUkTdNLZGqq5zUJk3uXfF7kTvWScwepOMgBZSmXNOun8HLRSp4rO%2FMUekQs3X%2Fct1%2BGZVBGKM%2Fg0MIhrXtbLG%2F7GWttDZas1pZQ1a5b0Xii6hFNo0SsH3qkUbFdiwGImd8FxwZqwkoACFUUkt262KHKybqRUKv7jS5klRtWW57bo3qltJK2d%2FTE0gmJ%2Bz54%2Bl7OWVvLFEgcNFm8qDLX%2BNxPLn0vYlu9UGcTVFzOcaWdEe%2Bit4zW1zfbipV6giw%2Bk31%2Btr3idoSr5VISlraraD5DJe9fHXDl8di61KSituq5K%2B6yEFU5RFCW1uzBRFu%2F0QXGWlSjiEEWXU6mP%2F0iDwiyNh44jePBop7E9SN690XQY1Bd1xevS8EFTvoYjWxqfyWb%2FsZ8HcfBorQI%2F7StCgwdDjsIXBDwnoHluwTAyQcBXzeNK%2Fdb%2Bq%2FdnQU42QZWURkfoMnZp6W7IzCqUhSi%2FtVoP1w%2FDFvzrlrBwgS4L%2Bxte%2Bsfr97L7w%2B62sANYWag6GR7B67w4L5KOmPT4WoDtUnQD5Rxf8YD6RYf1wOcw%2BJqZvQY6pgHrD85a3%2B%2F1rmJ4WDplB0EqWT%2F9ZEFHFL5tTq64zVOih7CYTnnqLDjXWDTwf55%2FyRZLZcB5wvdJpytP7VtPuaHQHzntl0BCLwMPetLPTfm98z5CBpIHUhWe1VioNzyYHN4iccp8FnnTY1YdQ10sFKnGoToRk5mApEHvmq2OG%2BZ6fygE7P8CV6sLLwDEKQJNc6CCecJ6lwjwj4bj9jNWpAJI0IsQn4Xt&X-Amz-Signature=3eafeec0f3312d70ee6a9a1082e8632c648fc69aea87138409fdcaf164beb889&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCNMF7EE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGOlFBlCiVurdwIwWxqWRL0j1zifohpByoYX%2FhkEyCTNAiAe%2F7IBUHlk7NIIEE9szlD3zZ8bSr3pW5Q0V%2FEYWSLdpCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM%2FIWN8irnWF3PPmliKtwDOQaLagO8v%2FynfHVI5GSl5jWprZbCuJrHRbXgvgF6ftPet0MvHLQkOz7GUbcE%2BsMpf6ZvEtMmJPjulFEaXEdGVUkTdNLZGqq5zUJk3uXfF7kTvWScwepOMgBZSmXNOun8HLRSp4rO%2FMUekQs3X%2Fct1%2BGZVBGKM%2Fg0MIhrXtbLG%2F7GWttDZas1pZQ1a5b0Xii6hFNo0SsH3qkUbFdiwGImd8FxwZqwkoACFUUkt262KHKybqRUKv7jS5klRtWW57bo3qltJK2d%2FTE0gmJ%2Bz54%2Bl7OWVvLFEgcNFm8qDLX%2BNxPLn0vYlu9UGcTVFzOcaWdEe%2Bit4zW1zfbipV6giw%2Bk31%2Btr3idoSr5VISlraraD5DJe9fHXDl8di61KSituq5K%2B6yEFU5RFCW1uzBRFu%2F0QXGWlSjiEEWXU6mP%2F0iDwiyNh44jePBop7E9SN690XQY1Bd1xevS8EFTvoYjWxqfyWb%2FsZ8HcfBorQI%2F7StCgwdDjsIXBDwnoHluwTAyQcBXzeNK%2Fdb%2Bq%2FdnQU42QZWURkfoMnZp6W7IzCqUhSi%2FtVoP1w%2FDFvzrlrBwgS4L%2Bxte%2Bsfr97L7w%2B62sANYWag6GR7B67w4L5KOmPT4WoDtUnQD5Rxf8YD6RYf1wOcw%2BJqZvQY6pgHrD85a3%2B%2F1rmJ4WDplB0EqWT%2F9ZEFHFL5tTq64zVOih7CYTnnqLDjXWDTwf55%2FyRZLZcB5wvdJpytP7VtPuaHQHzntl0BCLwMPetLPTfm98z5CBpIHUhWe1VioNzyYHN4iccp8FnnTY1YdQ10sFKnGoToRk5mApEHvmq2OG%2BZ6fygE7P8CV6sLLwDEKQJNc6CCecJ6lwjwj4bj9jNWpAJI0IsQn4Xt&X-Amz-Signature=a5764d958eac21723e14bd70daa4ca083f1a1c12b63a9c6a5ca62431b0d20d16&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCNMF7EE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGOlFBlCiVurdwIwWxqWRL0j1zifohpByoYX%2FhkEyCTNAiAe%2F7IBUHlk7NIIEE9szlD3zZ8bSr3pW5Q0V%2FEYWSLdpCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM%2FIWN8irnWF3PPmliKtwDOQaLagO8v%2FynfHVI5GSl5jWprZbCuJrHRbXgvgF6ftPet0MvHLQkOz7GUbcE%2BsMpf6ZvEtMmJPjulFEaXEdGVUkTdNLZGqq5zUJk3uXfF7kTvWScwepOMgBZSmXNOun8HLRSp4rO%2FMUekQs3X%2Fct1%2BGZVBGKM%2Fg0MIhrXtbLG%2F7GWttDZas1pZQ1a5b0Xii6hFNo0SsH3qkUbFdiwGImd8FxwZqwkoACFUUkt262KHKybqRUKv7jS5klRtWW57bo3qltJK2d%2FTE0gmJ%2Bz54%2Bl7OWVvLFEgcNFm8qDLX%2BNxPLn0vYlu9UGcTVFzOcaWdEe%2Bit4zW1zfbipV6giw%2Bk31%2Btr3idoSr5VISlraraD5DJe9fHXDl8di61KSituq5K%2B6yEFU5RFCW1uzBRFu%2F0QXGWlSjiEEWXU6mP%2F0iDwiyNh44jePBop7E9SN690XQY1Bd1xevS8EFTvoYjWxqfyWb%2FsZ8HcfBorQI%2F7StCgwdDjsIXBDwnoHluwTAyQcBXzeNK%2Fdb%2Bq%2FdnQU42QZWURkfoMnZp6W7IzCqUhSi%2FtVoP1w%2FDFvzrlrBwgS4L%2Bxte%2Bsfr97L7w%2B62sANYWag6GR7B67w4L5KOmPT4WoDtUnQD5Rxf8YD6RYf1wOcw%2BJqZvQY6pgHrD85a3%2B%2F1rmJ4WDplB0EqWT%2F9ZEFHFL5tTq64zVOih7CYTnnqLDjXWDTwf55%2FyRZLZcB5wvdJpytP7VtPuaHQHzntl0BCLwMPetLPTfm98z5CBpIHUhWe1VioNzyYHN4iccp8FnnTY1YdQ10sFKnGoToRk5mApEHvmq2OG%2BZ6fygE7P8CV6sLLwDEKQJNc6CCecJ6lwjwj4bj9jNWpAJI0IsQn4Xt&X-Amz-Signature=aaa46308cbcc9526fcd234056a495d62e53782053c3cc89342bb43b02fbd8541&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCNMF7EE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGOlFBlCiVurdwIwWxqWRL0j1zifohpByoYX%2FhkEyCTNAiAe%2F7IBUHlk7NIIEE9szlD3zZ8bSr3pW5Q0V%2FEYWSLdpCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM%2FIWN8irnWF3PPmliKtwDOQaLagO8v%2FynfHVI5GSl5jWprZbCuJrHRbXgvgF6ftPet0MvHLQkOz7GUbcE%2BsMpf6ZvEtMmJPjulFEaXEdGVUkTdNLZGqq5zUJk3uXfF7kTvWScwepOMgBZSmXNOun8HLRSp4rO%2FMUekQs3X%2Fct1%2BGZVBGKM%2Fg0MIhrXtbLG%2F7GWttDZas1pZQ1a5b0Xii6hFNo0SsH3qkUbFdiwGImd8FxwZqwkoACFUUkt262KHKybqRUKv7jS5klRtWW57bo3qltJK2d%2FTE0gmJ%2Bz54%2Bl7OWVvLFEgcNFm8qDLX%2BNxPLn0vYlu9UGcTVFzOcaWdEe%2Bit4zW1zfbipV6giw%2Bk31%2Btr3idoSr5VISlraraD5DJe9fHXDl8di61KSituq5K%2B6yEFU5RFCW1uzBRFu%2F0QXGWlSjiEEWXU6mP%2F0iDwiyNh44jePBop7E9SN690XQY1Bd1xevS8EFTvoYjWxqfyWb%2FsZ8HcfBorQI%2F7StCgwdDjsIXBDwnoHluwTAyQcBXzeNK%2Fdb%2Bq%2FdnQU42QZWURkfoMnZp6W7IzCqUhSi%2FtVoP1w%2FDFvzrlrBwgS4L%2Bxte%2Bsfr97L7w%2B62sANYWag6GR7B67w4L5KOmPT4WoDtUnQD5Rxf8YD6RYf1wOcw%2BJqZvQY6pgHrD85a3%2B%2F1rmJ4WDplB0EqWT%2F9ZEFHFL5tTq64zVOih7CYTnnqLDjXWDTwf55%2FyRZLZcB5wvdJpytP7VtPuaHQHzntl0BCLwMPetLPTfm98z5CBpIHUhWe1VioNzyYHN4iccp8FnnTY1YdQ10sFKnGoToRk5mApEHvmq2OG%2BZ6fygE7P8CV6sLLwDEKQJNc6CCecJ6lwjwj4bj9jNWpAJI0IsQn4Xt&X-Amz-Signature=8a63fc9495afd09125a5093d7d44b7e623b3a8358e35736b08c8cc71b6cee14a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
