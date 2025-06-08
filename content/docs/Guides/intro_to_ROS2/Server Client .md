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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q24MWHMN%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDic1hMn9WIodhwRk2hur%2BrwrGA1MNfVPPnVCeDC2j7hQIhAKJGRTFU8t5ieNXhd1tFgPF8JAK2bSVeawc5UD2AD%2BHXKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBLs%2FJEwDymUHrT0gq3AM2IF9q8v6iFwIaPmIEeEVg5zr95V3g0lW0FJrUZH5uDi6mzWzqAtZrxFrpdpQ4Pw07PURYZ7eBjAUU%2BRFFe%2B3GJlVwErXP0sDq9t4zYsi7gRc1cpIDvkU92k%2BI5Dirp0RtXSJh8m1n2zTCV4ecnhhd4eYtNEgnakSKc7JblxAHDAjlqKqlyhqXUm7zpUlthz0gun9KYqHRvpLtBRrq4WrolpqzBGCHUd5q4EMIAVe69RlqQAkuSJJvD65j82yAHZ9Lh%2BXwWs3RWx4h6%2FrjMwGa8%2FpsZqWxJGReNg1NVM3QKOE5tFmoL%2BpSv6cWZcJ9iwMAv1FOYEeML858T4ki5ch%2FZJGNrAGDqEl3Bwj31w4IxqSznIW7oEMMiuxd52gpDRoE2aHUxaSTEvzpwO06FI85wiq9Gmi8ptJKa1z9UaxFrLPrYWZrY3JWZQYUfMaVwkmF9oi%2Fs3fsLwsblNkeVptm0uEHsUmGNnZwSXOu7KByLhI4V9n%2FrgrjVwmfjsqRp99J9GmdJiFitTKV%2BbEiKxO1BU1UirThdQKExnsy5SGe7exJf%2BpNcCewZKWVLKI7PZMHYG2DhzOUfb8IOeHTi42ggZpG9JwTgfwlJuQ9cheqZXx9OCxbaYtG73QlhDCJ4pfCBjqkAXNdoRmBHK0uMT9IHxqYzM0mYE159aZM9agasSIAF1ZpT%2B12HosbYBuDlLg5TXAQkkJO9KFw1plfV3IPJnSS1CNkHOIL2VhUbMKZfqcNN%2FzbuxRCj9BEPUoHw54lSxoxwG86n%2FgBYV6DZjc8nMUYMkOQu8ZYtQuvgq0Z7bqTzpSOZ5x4R%2FGdmgbQMF%2F0qa0ctJ5yI7QVdk8uVd3G3cQfFRAZt%2BJh&X-Amz-Signature=8d8add45ade338db62f3c21bf6c7ba02a7cbdc214774c1d8f4ef1d5e35827416&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q24MWHMN%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDic1hMn9WIodhwRk2hur%2BrwrGA1MNfVPPnVCeDC2j7hQIhAKJGRTFU8t5ieNXhd1tFgPF8JAK2bSVeawc5UD2AD%2BHXKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBLs%2FJEwDymUHrT0gq3AM2IF9q8v6iFwIaPmIEeEVg5zr95V3g0lW0FJrUZH5uDi6mzWzqAtZrxFrpdpQ4Pw07PURYZ7eBjAUU%2BRFFe%2B3GJlVwErXP0sDq9t4zYsi7gRc1cpIDvkU92k%2BI5Dirp0RtXSJh8m1n2zTCV4ecnhhd4eYtNEgnakSKc7JblxAHDAjlqKqlyhqXUm7zpUlthz0gun9KYqHRvpLtBRrq4WrolpqzBGCHUd5q4EMIAVe69RlqQAkuSJJvD65j82yAHZ9Lh%2BXwWs3RWx4h6%2FrjMwGa8%2FpsZqWxJGReNg1NVM3QKOE5tFmoL%2BpSv6cWZcJ9iwMAv1FOYEeML858T4ki5ch%2FZJGNrAGDqEl3Bwj31w4IxqSznIW7oEMMiuxd52gpDRoE2aHUxaSTEvzpwO06FI85wiq9Gmi8ptJKa1z9UaxFrLPrYWZrY3JWZQYUfMaVwkmF9oi%2Fs3fsLwsblNkeVptm0uEHsUmGNnZwSXOu7KByLhI4V9n%2FrgrjVwmfjsqRp99J9GmdJiFitTKV%2BbEiKxO1BU1UirThdQKExnsy5SGe7exJf%2BpNcCewZKWVLKI7PZMHYG2DhzOUfb8IOeHTi42ggZpG9JwTgfwlJuQ9cheqZXx9OCxbaYtG73QlhDCJ4pfCBjqkAXNdoRmBHK0uMT9IHxqYzM0mYE159aZM9agasSIAF1ZpT%2B12HosbYBuDlLg5TXAQkkJO9KFw1plfV3IPJnSS1CNkHOIL2VhUbMKZfqcNN%2FzbuxRCj9BEPUoHw54lSxoxwG86n%2FgBYV6DZjc8nMUYMkOQu8ZYtQuvgq0Z7bqTzpSOZ5x4R%2FGdmgbQMF%2F0qa0ctJ5yI7QVdk8uVd3G3cQfFRAZt%2BJh&X-Amz-Signature=61664266ddbd7268a9339e022b33bef4d73ef4db1bf8d8b06e0abf6305f1f408&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q24MWHMN%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDic1hMn9WIodhwRk2hur%2BrwrGA1MNfVPPnVCeDC2j7hQIhAKJGRTFU8t5ieNXhd1tFgPF8JAK2bSVeawc5UD2AD%2BHXKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBLs%2FJEwDymUHrT0gq3AM2IF9q8v6iFwIaPmIEeEVg5zr95V3g0lW0FJrUZH5uDi6mzWzqAtZrxFrpdpQ4Pw07PURYZ7eBjAUU%2BRFFe%2B3GJlVwErXP0sDq9t4zYsi7gRc1cpIDvkU92k%2BI5Dirp0RtXSJh8m1n2zTCV4ecnhhd4eYtNEgnakSKc7JblxAHDAjlqKqlyhqXUm7zpUlthz0gun9KYqHRvpLtBRrq4WrolpqzBGCHUd5q4EMIAVe69RlqQAkuSJJvD65j82yAHZ9Lh%2BXwWs3RWx4h6%2FrjMwGa8%2FpsZqWxJGReNg1NVM3QKOE5tFmoL%2BpSv6cWZcJ9iwMAv1FOYEeML858T4ki5ch%2FZJGNrAGDqEl3Bwj31w4IxqSznIW7oEMMiuxd52gpDRoE2aHUxaSTEvzpwO06FI85wiq9Gmi8ptJKa1z9UaxFrLPrYWZrY3JWZQYUfMaVwkmF9oi%2Fs3fsLwsblNkeVptm0uEHsUmGNnZwSXOu7KByLhI4V9n%2FrgrjVwmfjsqRp99J9GmdJiFitTKV%2BbEiKxO1BU1UirThdQKExnsy5SGe7exJf%2BpNcCewZKWVLKI7PZMHYG2DhzOUfb8IOeHTi42ggZpG9JwTgfwlJuQ9cheqZXx9OCxbaYtG73QlhDCJ4pfCBjqkAXNdoRmBHK0uMT9IHxqYzM0mYE159aZM9agasSIAF1ZpT%2B12HosbYBuDlLg5TXAQkkJO9KFw1plfV3IPJnSS1CNkHOIL2VhUbMKZfqcNN%2FzbuxRCj9BEPUoHw54lSxoxwG86n%2FgBYV6DZjc8nMUYMkOQu8ZYtQuvgq0Z7bqTzpSOZ5x4R%2FGdmgbQMF%2F0qa0ctJ5yI7QVdk8uVd3G3cQfFRAZt%2BJh&X-Amz-Signature=f997722c2ce03f378c8d670d1042ce82df6acbac1b6a65c132b24dfa8fb4ff8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q24MWHMN%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDic1hMn9WIodhwRk2hur%2BrwrGA1MNfVPPnVCeDC2j7hQIhAKJGRTFU8t5ieNXhd1tFgPF8JAK2bSVeawc5UD2AD%2BHXKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBLs%2FJEwDymUHrT0gq3AM2IF9q8v6iFwIaPmIEeEVg5zr95V3g0lW0FJrUZH5uDi6mzWzqAtZrxFrpdpQ4Pw07PURYZ7eBjAUU%2BRFFe%2B3GJlVwErXP0sDq9t4zYsi7gRc1cpIDvkU92k%2BI5Dirp0RtXSJh8m1n2zTCV4ecnhhd4eYtNEgnakSKc7JblxAHDAjlqKqlyhqXUm7zpUlthz0gun9KYqHRvpLtBRrq4WrolpqzBGCHUd5q4EMIAVe69RlqQAkuSJJvD65j82yAHZ9Lh%2BXwWs3RWx4h6%2FrjMwGa8%2FpsZqWxJGReNg1NVM3QKOE5tFmoL%2BpSv6cWZcJ9iwMAv1FOYEeML858T4ki5ch%2FZJGNrAGDqEl3Bwj31w4IxqSznIW7oEMMiuxd52gpDRoE2aHUxaSTEvzpwO06FI85wiq9Gmi8ptJKa1z9UaxFrLPrYWZrY3JWZQYUfMaVwkmF9oi%2Fs3fsLwsblNkeVptm0uEHsUmGNnZwSXOu7KByLhI4V9n%2FrgrjVwmfjsqRp99J9GmdJiFitTKV%2BbEiKxO1BU1UirThdQKExnsy5SGe7exJf%2BpNcCewZKWVLKI7PZMHYG2DhzOUfb8IOeHTi42ggZpG9JwTgfwlJuQ9cheqZXx9OCxbaYtG73QlhDCJ4pfCBjqkAXNdoRmBHK0uMT9IHxqYzM0mYE159aZM9agasSIAF1ZpT%2B12HosbYBuDlLg5TXAQkkJO9KFw1plfV3IPJnSS1CNkHOIL2VhUbMKZfqcNN%2FzbuxRCj9BEPUoHw54lSxoxwG86n%2FgBYV6DZjc8nMUYMkOQu8ZYtQuvgq0Z7bqTzpSOZ5x4R%2FGdmgbQMF%2F0qa0ctJ5yI7QVdk8uVd3G3cQfFRAZt%2BJh&X-Amz-Signature=08bd5efa9f803dc2f84952e3235f13abcda30504d5e2f9bf3c4df2d2ccfb130d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q24MWHMN%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDic1hMn9WIodhwRk2hur%2BrwrGA1MNfVPPnVCeDC2j7hQIhAKJGRTFU8t5ieNXhd1tFgPF8JAK2bSVeawc5UD2AD%2BHXKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBLs%2FJEwDymUHrT0gq3AM2IF9q8v6iFwIaPmIEeEVg5zr95V3g0lW0FJrUZH5uDi6mzWzqAtZrxFrpdpQ4Pw07PURYZ7eBjAUU%2BRFFe%2B3GJlVwErXP0sDq9t4zYsi7gRc1cpIDvkU92k%2BI5Dirp0RtXSJh8m1n2zTCV4ecnhhd4eYtNEgnakSKc7JblxAHDAjlqKqlyhqXUm7zpUlthz0gun9KYqHRvpLtBRrq4WrolpqzBGCHUd5q4EMIAVe69RlqQAkuSJJvD65j82yAHZ9Lh%2BXwWs3RWx4h6%2FrjMwGa8%2FpsZqWxJGReNg1NVM3QKOE5tFmoL%2BpSv6cWZcJ9iwMAv1FOYEeML858T4ki5ch%2FZJGNrAGDqEl3Bwj31w4IxqSznIW7oEMMiuxd52gpDRoE2aHUxaSTEvzpwO06FI85wiq9Gmi8ptJKa1z9UaxFrLPrYWZrY3JWZQYUfMaVwkmF9oi%2Fs3fsLwsblNkeVptm0uEHsUmGNnZwSXOu7KByLhI4V9n%2FrgrjVwmfjsqRp99J9GmdJiFitTKV%2BbEiKxO1BU1UirThdQKExnsy5SGe7exJf%2BpNcCewZKWVLKI7PZMHYG2DhzOUfb8IOeHTi42ggZpG9JwTgfwlJuQ9cheqZXx9OCxbaYtG73QlhDCJ4pfCBjqkAXNdoRmBHK0uMT9IHxqYzM0mYE159aZM9agasSIAF1ZpT%2B12HosbYBuDlLg5TXAQkkJO9KFw1plfV3IPJnSS1CNkHOIL2VhUbMKZfqcNN%2FzbuxRCj9BEPUoHw54lSxoxwG86n%2FgBYV6DZjc8nMUYMkOQu8ZYtQuvgq0Z7bqTzpSOZ5x4R%2FGdmgbQMF%2F0qa0ctJ5yI7QVdk8uVd3G3cQfFRAZt%2BJh&X-Amz-Signature=bc5b71d18bd2e83109d250e730bf6b2eb19831d3786caaaeff870eb1c3aed799&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
