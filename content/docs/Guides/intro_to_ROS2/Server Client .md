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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUANHXWN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FHAIQgo5tj3G2pS1t7t4ha92VJyzKUm1ggCJWiCD8SQIgcarlROAyB%2BN%2BL5f1uGkuEylct2JHnllgM6FKPjT7rQwq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEofitohWcIKHaOBMCrcAyWUQfSLlIvYUzRrHjsZQvy9qblu6N9kM7ocX3QDSlsImTVD8IxfVmk74K1KpZa%2B8Tt%2BB2vBol%2BOvicfTLfXwdXx7G5dv%2BPCxcXOyyJlvL2EvdeBwmHKInecoMyBJCtD3wNzCGnAThyKStFeKb0pM%2BDKFb5g1NUvEYZDmm8Yt9LIDpjgRWZowKEy2MAtnKCNeaTOfRZxRCH2MBtmfw%2BcMsXLPock%2FbJQZAMpXw7ZhIxMOAArrlmCUXOx2fVfZI5ttf1fojxbbyQ7Rrk8Y06dXyBkxVrP8vROGDrT9MDqsYgAH%2B0S%2BoAJWLMaYck%2BxlhgHMxjXG%2BjHZbalm74miDssai930Csts0TrTIw0WA34GFT57xw39Nt8MK0zzjIqI7RJNVn%2FfgR%2BwK2FJmbnvl9hNvFAGeN14WV%2FYIvtI0YbYbEpAFHC9zZTW9eE0uZMf%2BY9AeCrebsmHn5HN1mhjx7dDZYnKmbjNv2KrGKti1Bxzezme9TqZRKVIGaujbEP1i5v%2B9hMEFzr03iuFIakYKAL%2FtXAECsJNxiHYjTzCKjCFd9lTsGQ4uJrNwa%2FgaN71XL66pxvDbRxKvd4oYiDL45Bq%2BoYH3KGQt8klG32mrSsE%2BNQR7zLZ%2BblpyBUG2tML3dlr8GOqUBB5Avo1cKpghXxjmyP5BxwgtbH5jhu1Nzv3eL7OMB9mqkcpfAr9t4i7FwHFU1bZdizHWvJouPJc4VyWRCURtBk%2BmR%2FG%2FZ0u4jiH0d4fB7xh%2BIxqfxplCWO4fm%2Bf9iIKXgS6fpSAUtKbhQm3dz8OqMB%2FEN2CNapv%2FH4vyARzBTa%2FPJGoJgbMFxaZirtxJLQcNBeWGEMNXyzGKiOkwsRQGt8InXDFUr&X-Amz-Signature=8bd5333438b99079ac014cdcfdd6c29a63d60700d0be6f45a1799c1164f42de1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUANHXWN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FHAIQgo5tj3G2pS1t7t4ha92VJyzKUm1ggCJWiCD8SQIgcarlROAyB%2BN%2BL5f1uGkuEylct2JHnllgM6FKPjT7rQwq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEofitohWcIKHaOBMCrcAyWUQfSLlIvYUzRrHjsZQvy9qblu6N9kM7ocX3QDSlsImTVD8IxfVmk74K1KpZa%2B8Tt%2BB2vBol%2BOvicfTLfXwdXx7G5dv%2BPCxcXOyyJlvL2EvdeBwmHKInecoMyBJCtD3wNzCGnAThyKStFeKb0pM%2BDKFb5g1NUvEYZDmm8Yt9LIDpjgRWZowKEy2MAtnKCNeaTOfRZxRCH2MBtmfw%2BcMsXLPock%2FbJQZAMpXw7ZhIxMOAArrlmCUXOx2fVfZI5ttf1fojxbbyQ7Rrk8Y06dXyBkxVrP8vROGDrT9MDqsYgAH%2B0S%2BoAJWLMaYck%2BxlhgHMxjXG%2BjHZbalm74miDssai930Csts0TrTIw0WA34GFT57xw39Nt8MK0zzjIqI7RJNVn%2FfgR%2BwK2FJmbnvl9hNvFAGeN14WV%2FYIvtI0YbYbEpAFHC9zZTW9eE0uZMf%2BY9AeCrebsmHn5HN1mhjx7dDZYnKmbjNv2KrGKti1Bxzezme9TqZRKVIGaujbEP1i5v%2B9hMEFzr03iuFIakYKAL%2FtXAECsJNxiHYjTzCKjCFd9lTsGQ4uJrNwa%2FgaN71XL66pxvDbRxKvd4oYiDL45Bq%2BoYH3KGQt8klG32mrSsE%2BNQR7zLZ%2BblpyBUG2tML3dlr8GOqUBB5Avo1cKpghXxjmyP5BxwgtbH5jhu1Nzv3eL7OMB9mqkcpfAr9t4i7FwHFU1bZdizHWvJouPJc4VyWRCURtBk%2BmR%2FG%2FZ0u4jiH0d4fB7xh%2BIxqfxplCWO4fm%2Bf9iIKXgS6fpSAUtKbhQm3dz8OqMB%2FEN2CNapv%2FH4vyARzBTa%2FPJGoJgbMFxaZirtxJLQcNBeWGEMNXyzGKiOkwsRQGt8InXDFUr&X-Amz-Signature=7fd860834d311bbfb74a226b2fe71187f71af619394d6a06dd934c0471f1a20d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUANHXWN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FHAIQgo5tj3G2pS1t7t4ha92VJyzKUm1ggCJWiCD8SQIgcarlROAyB%2BN%2BL5f1uGkuEylct2JHnllgM6FKPjT7rQwq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEofitohWcIKHaOBMCrcAyWUQfSLlIvYUzRrHjsZQvy9qblu6N9kM7ocX3QDSlsImTVD8IxfVmk74K1KpZa%2B8Tt%2BB2vBol%2BOvicfTLfXwdXx7G5dv%2BPCxcXOyyJlvL2EvdeBwmHKInecoMyBJCtD3wNzCGnAThyKStFeKb0pM%2BDKFb5g1NUvEYZDmm8Yt9LIDpjgRWZowKEy2MAtnKCNeaTOfRZxRCH2MBtmfw%2BcMsXLPock%2FbJQZAMpXw7ZhIxMOAArrlmCUXOx2fVfZI5ttf1fojxbbyQ7Rrk8Y06dXyBkxVrP8vROGDrT9MDqsYgAH%2B0S%2BoAJWLMaYck%2BxlhgHMxjXG%2BjHZbalm74miDssai930Csts0TrTIw0WA34GFT57xw39Nt8MK0zzjIqI7RJNVn%2FfgR%2BwK2FJmbnvl9hNvFAGeN14WV%2FYIvtI0YbYbEpAFHC9zZTW9eE0uZMf%2BY9AeCrebsmHn5HN1mhjx7dDZYnKmbjNv2KrGKti1Bxzezme9TqZRKVIGaujbEP1i5v%2B9hMEFzr03iuFIakYKAL%2FtXAECsJNxiHYjTzCKjCFd9lTsGQ4uJrNwa%2FgaN71XL66pxvDbRxKvd4oYiDL45Bq%2BoYH3KGQt8klG32mrSsE%2BNQR7zLZ%2BblpyBUG2tML3dlr8GOqUBB5Avo1cKpghXxjmyP5BxwgtbH5jhu1Nzv3eL7OMB9mqkcpfAr9t4i7FwHFU1bZdizHWvJouPJc4VyWRCURtBk%2BmR%2FG%2FZ0u4jiH0d4fB7xh%2BIxqfxplCWO4fm%2Bf9iIKXgS6fpSAUtKbhQm3dz8OqMB%2FEN2CNapv%2FH4vyARzBTa%2FPJGoJgbMFxaZirtxJLQcNBeWGEMNXyzGKiOkwsRQGt8InXDFUr&X-Amz-Signature=d3c4683a4e2fdc8715350d195859901886bd758a946e1a3508fd2edc45b74389&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUANHXWN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FHAIQgo5tj3G2pS1t7t4ha92VJyzKUm1ggCJWiCD8SQIgcarlROAyB%2BN%2BL5f1uGkuEylct2JHnllgM6FKPjT7rQwq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEofitohWcIKHaOBMCrcAyWUQfSLlIvYUzRrHjsZQvy9qblu6N9kM7ocX3QDSlsImTVD8IxfVmk74K1KpZa%2B8Tt%2BB2vBol%2BOvicfTLfXwdXx7G5dv%2BPCxcXOyyJlvL2EvdeBwmHKInecoMyBJCtD3wNzCGnAThyKStFeKb0pM%2BDKFb5g1NUvEYZDmm8Yt9LIDpjgRWZowKEy2MAtnKCNeaTOfRZxRCH2MBtmfw%2BcMsXLPock%2FbJQZAMpXw7ZhIxMOAArrlmCUXOx2fVfZI5ttf1fojxbbyQ7Rrk8Y06dXyBkxVrP8vROGDrT9MDqsYgAH%2B0S%2BoAJWLMaYck%2BxlhgHMxjXG%2BjHZbalm74miDssai930Csts0TrTIw0WA34GFT57xw39Nt8MK0zzjIqI7RJNVn%2FfgR%2BwK2FJmbnvl9hNvFAGeN14WV%2FYIvtI0YbYbEpAFHC9zZTW9eE0uZMf%2BY9AeCrebsmHn5HN1mhjx7dDZYnKmbjNv2KrGKti1Bxzezme9TqZRKVIGaujbEP1i5v%2B9hMEFzr03iuFIakYKAL%2FtXAECsJNxiHYjTzCKjCFd9lTsGQ4uJrNwa%2FgaN71XL66pxvDbRxKvd4oYiDL45Bq%2BoYH3KGQt8klG32mrSsE%2BNQR7zLZ%2BblpyBUG2tML3dlr8GOqUBB5Avo1cKpghXxjmyP5BxwgtbH5jhu1Nzv3eL7OMB9mqkcpfAr9t4i7FwHFU1bZdizHWvJouPJc4VyWRCURtBk%2BmR%2FG%2FZ0u4jiH0d4fB7xh%2BIxqfxplCWO4fm%2Bf9iIKXgS6fpSAUtKbhQm3dz8OqMB%2FEN2CNapv%2FH4vyARzBTa%2FPJGoJgbMFxaZirtxJLQcNBeWGEMNXyzGKiOkwsRQGt8InXDFUr&X-Amz-Signature=d45253e40a2c387c883cac04ffcb8ac2d08888946f29c7f7e23830766dd393d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUANHXWN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FHAIQgo5tj3G2pS1t7t4ha92VJyzKUm1ggCJWiCD8SQIgcarlROAyB%2BN%2BL5f1uGkuEylct2JHnllgM6FKPjT7rQwq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEofitohWcIKHaOBMCrcAyWUQfSLlIvYUzRrHjsZQvy9qblu6N9kM7ocX3QDSlsImTVD8IxfVmk74K1KpZa%2B8Tt%2BB2vBol%2BOvicfTLfXwdXx7G5dv%2BPCxcXOyyJlvL2EvdeBwmHKInecoMyBJCtD3wNzCGnAThyKStFeKb0pM%2BDKFb5g1NUvEYZDmm8Yt9LIDpjgRWZowKEy2MAtnKCNeaTOfRZxRCH2MBtmfw%2BcMsXLPock%2FbJQZAMpXw7ZhIxMOAArrlmCUXOx2fVfZI5ttf1fojxbbyQ7Rrk8Y06dXyBkxVrP8vROGDrT9MDqsYgAH%2B0S%2BoAJWLMaYck%2BxlhgHMxjXG%2BjHZbalm74miDssai930Csts0TrTIw0WA34GFT57xw39Nt8MK0zzjIqI7RJNVn%2FfgR%2BwK2FJmbnvl9hNvFAGeN14WV%2FYIvtI0YbYbEpAFHC9zZTW9eE0uZMf%2BY9AeCrebsmHn5HN1mhjx7dDZYnKmbjNv2KrGKti1Bxzezme9TqZRKVIGaujbEP1i5v%2B9hMEFzr03iuFIakYKAL%2FtXAECsJNxiHYjTzCKjCFd9lTsGQ4uJrNwa%2FgaN71XL66pxvDbRxKvd4oYiDL45Bq%2BoYH3KGQt8klG32mrSsE%2BNQR7zLZ%2BblpyBUG2tML3dlr8GOqUBB5Avo1cKpghXxjmyP5BxwgtbH5jhu1Nzv3eL7OMB9mqkcpfAr9t4i7FwHFU1bZdizHWvJouPJc4VyWRCURtBk%2BmR%2FG%2FZ0u4jiH0d4fB7xh%2BIxqfxplCWO4fm%2Bf9iIKXgS6fpSAUtKbhQm3dz8OqMB%2FEN2CNapv%2FH4vyARzBTa%2FPJGoJgbMFxaZirtxJLQcNBeWGEMNXyzGKiOkwsRQGt8InXDFUr&X-Amz-Signature=82a0a6fec06269e4c50f17bfef4829d36b0ef48a288d72940c4b6f8c1dd71780&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
