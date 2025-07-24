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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAOBWARE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDGtPznuygkzImNHYPQD0iX9anR8UlPYi3j4xuXNsDDKwIgcs914JMyq0%2Fz0XfZnBOph2xKoJVBQizZo1tpaKP1jTkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOuD34rBfmZpfSPQOircA%2F90QdMEtYxzN%2FX8vllq%2F6MkvQDG73ptmz9SPrIgJMt3bdbTA6I42ejq1Hn9reCIavf5H9YV8k6%2B2m7cRaoLp1IJVMyyXE9jiCJArB8eLiMwP8SGnCL7d%2FfsE%2F9uOHFFXBgU1%2F%2BbLto11XQK61Iyta4sXRsBKACXNo7sBwLM40FbR9F8k5N7hqRS%2FLRDcv5PF%2FRaAUWmsveDpWZUkUZCgPc05heiq2YALITPxwQlyULN1fp9KpAa%2FEBo2fcpVg78zvF9vkc7SiujSj7EFV0FRLn9sswVrnx94c8eEPtTpYhqqWFbP2KCz3wZFPJew8Uv2A83hPG1hRK4L7ohsXCqKJYYFgyJjIz9m3CcNKJyzqdycip3LRvZyl8VETVQ3IeWdGFk01FzsAtt2%2BmW3igNm7eodaA9ZbR4I%2F6KtdX5Fls0VPDuB73Ekz0SD3zzD7cByNH0Z%2F5MOXAQ93r9iDPl2M%2FlfEfRygHfHXAEPLszAGY8eTEEpV4fBFXZy%2F%2Bm9HNAiHmOtaoYTTmY0wMP%2FRyMg0bJnSFlxHOKwl%2Fvhu9I22l180a0gakyIdWfk0%2BFNygazecLyy26OJTPU8QqOsZZoNLGTGXkRbcmCwZ7GNCpW%2FwwhmQJFYkLX7AmU%2FXdMLjaiMQGOqUBmY18ttia7eez6VhuwXP%2F4S1vtWCOjY%2Fe%2B%2BfMGfvA8Bv54FIIpdFTDb2GKWt53zfgNw91pxIzmbunkx6FqEtp7kyhhK9QCJegVXCwexAEu3HSZy2manyDRNn7bAugvE4g2E9VAled8k91qANK902dOJy4zDjKcpEfxFMImmYFDIjPeL%2BPXHJevM2gzAa8eb6E5%2FaIc1RgB87MBKc%2FbPxmUG8%2FE1CE&X-Amz-Signature=46ca260a2ff24de8e2df816055f88f91cdbe5fce069eb1d328db5dc69979af6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAOBWARE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDGtPznuygkzImNHYPQD0iX9anR8UlPYi3j4xuXNsDDKwIgcs914JMyq0%2Fz0XfZnBOph2xKoJVBQizZo1tpaKP1jTkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOuD34rBfmZpfSPQOircA%2F90QdMEtYxzN%2FX8vllq%2F6MkvQDG73ptmz9SPrIgJMt3bdbTA6I42ejq1Hn9reCIavf5H9YV8k6%2B2m7cRaoLp1IJVMyyXE9jiCJArB8eLiMwP8SGnCL7d%2FfsE%2F9uOHFFXBgU1%2F%2BbLto11XQK61Iyta4sXRsBKACXNo7sBwLM40FbR9F8k5N7hqRS%2FLRDcv5PF%2FRaAUWmsveDpWZUkUZCgPc05heiq2YALITPxwQlyULN1fp9KpAa%2FEBo2fcpVg78zvF9vkc7SiujSj7EFV0FRLn9sswVrnx94c8eEPtTpYhqqWFbP2KCz3wZFPJew8Uv2A83hPG1hRK4L7ohsXCqKJYYFgyJjIz9m3CcNKJyzqdycip3LRvZyl8VETVQ3IeWdGFk01FzsAtt2%2BmW3igNm7eodaA9ZbR4I%2F6KtdX5Fls0VPDuB73Ekz0SD3zzD7cByNH0Z%2F5MOXAQ93r9iDPl2M%2FlfEfRygHfHXAEPLszAGY8eTEEpV4fBFXZy%2F%2Bm9HNAiHmOtaoYTTmY0wMP%2FRyMg0bJnSFlxHOKwl%2Fvhu9I22l180a0gakyIdWfk0%2BFNygazecLyy26OJTPU8QqOsZZoNLGTGXkRbcmCwZ7GNCpW%2FwwhmQJFYkLX7AmU%2FXdMLjaiMQGOqUBmY18ttia7eez6VhuwXP%2F4S1vtWCOjY%2Fe%2B%2BfMGfvA8Bv54FIIpdFTDb2GKWt53zfgNw91pxIzmbunkx6FqEtp7kyhhK9QCJegVXCwexAEu3HSZy2manyDRNn7bAugvE4g2E9VAled8k91qANK902dOJy4zDjKcpEfxFMImmYFDIjPeL%2BPXHJevM2gzAa8eb6E5%2FaIc1RgB87MBKc%2FbPxmUG8%2FE1CE&X-Amz-Signature=756fc7863a63c29a56b16986ebb64208cf3e6af3bd1f422842af41f96a41c02e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAOBWARE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDGtPznuygkzImNHYPQD0iX9anR8UlPYi3j4xuXNsDDKwIgcs914JMyq0%2Fz0XfZnBOph2xKoJVBQizZo1tpaKP1jTkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOuD34rBfmZpfSPQOircA%2F90QdMEtYxzN%2FX8vllq%2F6MkvQDG73ptmz9SPrIgJMt3bdbTA6I42ejq1Hn9reCIavf5H9YV8k6%2B2m7cRaoLp1IJVMyyXE9jiCJArB8eLiMwP8SGnCL7d%2FfsE%2F9uOHFFXBgU1%2F%2BbLto11XQK61Iyta4sXRsBKACXNo7sBwLM40FbR9F8k5N7hqRS%2FLRDcv5PF%2FRaAUWmsveDpWZUkUZCgPc05heiq2YALITPxwQlyULN1fp9KpAa%2FEBo2fcpVg78zvF9vkc7SiujSj7EFV0FRLn9sswVrnx94c8eEPtTpYhqqWFbP2KCz3wZFPJew8Uv2A83hPG1hRK4L7ohsXCqKJYYFgyJjIz9m3CcNKJyzqdycip3LRvZyl8VETVQ3IeWdGFk01FzsAtt2%2BmW3igNm7eodaA9ZbR4I%2F6KtdX5Fls0VPDuB73Ekz0SD3zzD7cByNH0Z%2F5MOXAQ93r9iDPl2M%2FlfEfRygHfHXAEPLszAGY8eTEEpV4fBFXZy%2F%2Bm9HNAiHmOtaoYTTmY0wMP%2FRyMg0bJnSFlxHOKwl%2Fvhu9I22l180a0gakyIdWfk0%2BFNygazecLyy26OJTPU8QqOsZZoNLGTGXkRbcmCwZ7GNCpW%2FwwhmQJFYkLX7AmU%2FXdMLjaiMQGOqUBmY18ttia7eez6VhuwXP%2F4S1vtWCOjY%2Fe%2B%2BfMGfvA8Bv54FIIpdFTDb2GKWt53zfgNw91pxIzmbunkx6FqEtp7kyhhK9QCJegVXCwexAEu3HSZy2manyDRNn7bAugvE4g2E9VAled8k91qANK902dOJy4zDjKcpEfxFMImmYFDIjPeL%2BPXHJevM2gzAa8eb6E5%2FaIc1RgB87MBKc%2FbPxmUG8%2FE1CE&X-Amz-Signature=e3658b8ca073031fd1ec73a1454c761e442fdc2fbd86436db4047aa93a128f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAOBWARE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDGtPznuygkzImNHYPQD0iX9anR8UlPYi3j4xuXNsDDKwIgcs914JMyq0%2Fz0XfZnBOph2xKoJVBQizZo1tpaKP1jTkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOuD34rBfmZpfSPQOircA%2F90QdMEtYxzN%2FX8vllq%2F6MkvQDG73ptmz9SPrIgJMt3bdbTA6I42ejq1Hn9reCIavf5H9YV8k6%2B2m7cRaoLp1IJVMyyXE9jiCJArB8eLiMwP8SGnCL7d%2FfsE%2F9uOHFFXBgU1%2F%2BbLto11XQK61Iyta4sXRsBKACXNo7sBwLM40FbR9F8k5N7hqRS%2FLRDcv5PF%2FRaAUWmsveDpWZUkUZCgPc05heiq2YALITPxwQlyULN1fp9KpAa%2FEBo2fcpVg78zvF9vkc7SiujSj7EFV0FRLn9sswVrnx94c8eEPtTpYhqqWFbP2KCz3wZFPJew8Uv2A83hPG1hRK4L7ohsXCqKJYYFgyJjIz9m3CcNKJyzqdycip3LRvZyl8VETVQ3IeWdGFk01FzsAtt2%2BmW3igNm7eodaA9ZbR4I%2F6KtdX5Fls0VPDuB73Ekz0SD3zzD7cByNH0Z%2F5MOXAQ93r9iDPl2M%2FlfEfRygHfHXAEPLszAGY8eTEEpV4fBFXZy%2F%2Bm9HNAiHmOtaoYTTmY0wMP%2FRyMg0bJnSFlxHOKwl%2Fvhu9I22l180a0gakyIdWfk0%2BFNygazecLyy26OJTPU8QqOsZZoNLGTGXkRbcmCwZ7GNCpW%2FwwhmQJFYkLX7AmU%2FXdMLjaiMQGOqUBmY18ttia7eez6VhuwXP%2F4S1vtWCOjY%2Fe%2B%2BfMGfvA8Bv54FIIpdFTDb2GKWt53zfgNw91pxIzmbunkx6FqEtp7kyhhK9QCJegVXCwexAEu3HSZy2manyDRNn7bAugvE4g2E9VAled8k91qANK902dOJy4zDjKcpEfxFMImmYFDIjPeL%2BPXHJevM2gzAa8eb6E5%2FaIc1RgB87MBKc%2FbPxmUG8%2FE1CE&X-Amz-Signature=f0c8cebefb06f3993b1473a3ed747bacb6f769110ec7bdd7577959818be34516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAOBWARE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDGtPznuygkzImNHYPQD0iX9anR8UlPYi3j4xuXNsDDKwIgcs914JMyq0%2Fz0XfZnBOph2xKoJVBQizZo1tpaKP1jTkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOuD34rBfmZpfSPQOircA%2F90QdMEtYxzN%2FX8vllq%2F6MkvQDG73ptmz9SPrIgJMt3bdbTA6I42ejq1Hn9reCIavf5H9YV8k6%2B2m7cRaoLp1IJVMyyXE9jiCJArB8eLiMwP8SGnCL7d%2FfsE%2F9uOHFFXBgU1%2F%2BbLto11XQK61Iyta4sXRsBKACXNo7sBwLM40FbR9F8k5N7hqRS%2FLRDcv5PF%2FRaAUWmsveDpWZUkUZCgPc05heiq2YALITPxwQlyULN1fp9KpAa%2FEBo2fcpVg78zvF9vkc7SiujSj7EFV0FRLn9sswVrnx94c8eEPtTpYhqqWFbP2KCz3wZFPJew8Uv2A83hPG1hRK4L7ohsXCqKJYYFgyJjIz9m3CcNKJyzqdycip3LRvZyl8VETVQ3IeWdGFk01FzsAtt2%2BmW3igNm7eodaA9ZbR4I%2F6KtdX5Fls0VPDuB73Ekz0SD3zzD7cByNH0Z%2F5MOXAQ93r9iDPl2M%2FlfEfRygHfHXAEPLszAGY8eTEEpV4fBFXZy%2F%2Bm9HNAiHmOtaoYTTmY0wMP%2FRyMg0bJnSFlxHOKwl%2Fvhu9I22l180a0gakyIdWfk0%2BFNygazecLyy26OJTPU8QqOsZZoNLGTGXkRbcmCwZ7GNCpW%2FwwhmQJFYkLX7AmU%2FXdMLjaiMQGOqUBmY18ttia7eez6VhuwXP%2F4S1vtWCOjY%2Fe%2B%2BfMGfvA8Bv54FIIpdFTDb2GKWt53zfgNw91pxIzmbunkx6FqEtp7kyhhK9QCJegVXCwexAEu3HSZy2manyDRNn7bAugvE4g2E9VAled8k91qANK902dOJy4zDjKcpEfxFMImmYFDIjPeL%2BPXHJevM2gzAa8eb6E5%2FaIc1RgB87MBKc%2FbPxmUG8%2FE1CE&X-Amz-Signature=0160be0eb7afe94edd36d83bcd44612df57c298977a113c561c37eec6eddbd51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
