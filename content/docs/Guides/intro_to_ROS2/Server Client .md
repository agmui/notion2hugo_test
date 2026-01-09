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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSFXOJZH%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1lxzGqjInoALy2eAAeabgX2DNmB4HlCbX1WHVuGQ7zAiEArx6fDRc4qMoxs7QfyUuzYONtx27Zf29%2FAAOczOO2HPYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBi%2BCleezneO08xq3yrcA%2BOvrW1FEMiJmhvLMQTT94lyO0QSkgp16OC2dtugSmzF%2B50u4N8ecBMFtoBwNd3H5v8kff8hBvf0awphuuscByRrjymUPU9VfqlA%2FJuh0HC8LnzWt9bvVBHLYhr4f4aheQXF6dGM6NkuWyZ2sxqVhYVlDmv%2FH3JfqZxxHlfuduvWgAgKKotICgLljvNuKntRVI1glqMG0z6SZjvxLgiputtQkJD4t2KweBZGtCHtCzBYUqGFD86uq2YTTAuQdVHJf5z5Bcbi4zYjx2XrBoIITCVC2cMW%2BLaUIuHZNMhiVKuk91LQgLIAe04uitVjgsYU%2F2JCN%2Ba1FZ%2FuCt3OUcb0%2F%2B0DzKUdwAixgkf7uTd4S8pPcMhXbYMrHqUM7jkDDhOdYR8sTby2rWNCOfqK%2BtwGlL9eamyTNb%2FFsUqUEfusxqv0HFGeKE07oXRReJWTKDf%2Fk8ZOluu7X5cokNK6my2S8aKDT2yFgkS3wdBBQ4tw8DWuWW3iRIgA4kVCcEO33ahIr72Kl5bLS%2FPJFgVe6xyRWyouk1Lc48z2PGOV5b1y07VQnx%2FzvWy1KSIHpBL%2FGDlJrmZILhmaKKlrLLiPeyMbnxBPKGS%2Fa5JG6%2BdRPB%2BRpOv8S9dXJS%2B4CMjNE9qQML%2BkgcsGOqUBMzG8RECZ9lh4lI6WEWs%2B19V0IDwG2T20CirODm134%2F3p4kavg8tKSFc7%2FVmPIb1aJpdAK5BGU%2BieWOyBekTbGuFP%2BxormKwgzdu5LmMnFBlPH61FsP0EkP32b1EvKl7Bn0bsli1O0SLvkk48CptU9Erkek%2Flp35Sh5TXAZZuxgJ%2B4nKZH%2B2A6ZNnGenzfEcPAIFODUn2yqs0XLkDcdtna5pSAXbX&X-Amz-Signature=c9ec06ec3ec91e3876dfdb441ff3ee21b821e7e6d2ba2e0df25502db7fa04959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSFXOJZH%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1lxzGqjInoALy2eAAeabgX2DNmB4HlCbX1WHVuGQ7zAiEArx6fDRc4qMoxs7QfyUuzYONtx27Zf29%2FAAOczOO2HPYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBi%2BCleezneO08xq3yrcA%2BOvrW1FEMiJmhvLMQTT94lyO0QSkgp16OC2dtugSmzF%2B50u4N8ecBMFtoBwNd3H5v8kff8hBvf0awphuuscByRrjymUPU9VfqlA%2FJuh0HC8LnzWt9bvVBHLYhr4f4aheQXF6dGM6NkuWyZ2sxqVhYVlDmv%2FH3JfqZxxHlfuduvWgAgKKotICgLljvNuKntRVI1glqMG0z6SZjvxLgiputtQkJD4t2KweBZGtCHtCzBYUqGFD86uq2YTTAuQdVHJf5z5Bcbi4zYjx2XrBoIITCVC2cMW%2BLaUIuHZNMhiVKuk91LQgLIAe04uitVjgsYU%2F2JCN%2Ba1FZ%2FuCt3OUcb0%2F%2B0DzKUdwAixgkf7uTd4S8pPcMhXbYMrHqUM7jkDDhOdYR8sTby2rWNCOfqK%2BtwGlL9eamyTNb%2FFsUqUEfusxqv0HFGeKE07oXRReJWTKDf%2Fk8ZOluu7X5cokNK6my2S8aKDT2yFgkS3wdBBQ4tw8DWuWW3iRIgA4kVCcEO33ahIr72Kl5bLS%2FPJFgVe6xyRWyouk1Lc48z2PGOV5b1y07VQnx%2FzvWy1KSIHpBL%2FGDlJrmZILhmaKKlrLLiPeyMbnxBPKGS%2Fa5JG6%2BdRPB%2BRpOv8S9dXJS%2B4CMjNE9qQML%2BkgcsGOqUBMzG8RECZ9lh4lI6WEWs%2B19V0IDwG2T20CirODm134%2F3p4kavg8tKSFc7%2FVmPIb1aJpdAK5BGU%2BieWOyBekTbGuFP%2BxormKwgzdu5LmMnFBlPH61FsP0EkP32b1EvKl7Bn0bsli1O0SLvkk48CptU9Erkek%2Flp35Sh5TXAZZuxgJ%2B4nKZH%2B2A6ZNnGenzfEcPAIFODUn2yqs0XLkDcdtna5pSAXbX&X-Amz-Signature=314e510467250f66a0e0048273da12406ad1caae83a11411eb87a65f877c133c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSFXOJZH%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1lxzGqjInoALy2eAAeabgX2DNmB4HlCbX1WHVuGQ7zAiEArx6fDRc4qMoxs7QfyUuzYONtx27Zf29%2FAAOczOO2HPYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBi%2BCleezneO08xq3yrcA%2BOvrW1FEMiJmhvLMQTT94lyO0QSkgp16OC2dtugSmzF%2B50u4N8ecBMFtoBwNd3H5v8kff8hBvf0awphuuscByRrjymUPU9VfqlA%2FJuh0HC8LnzWt9bvVBHLYhr4f4aheQXF6dGM6NkuWyZ2sxqVhYVlDmv%2FH3JfqZxxHlfuduvWgAgKKotICgLljvNuKntRVI1glqMG0z6SZjvxLgiputtQkJD4t2KweBZGtCHtCzBYUqGFD86uq2YTTAuQdVHJf5z5Bcbi4zYjx2XrBoIITCVC2cMW%2BLaUIuHZNMhiVKuk91LQgLIAe04uitVjgsYU%2F2JCN%2Ba1FZ%2FuCt3OUcb0%2F%2B0DzKUdwAixgkf7uTd4S8pPcMhXbYMrHqUM7jkDDhOdYR8sTby2rWNCOfqK%2BtwGlL9eamyTNb%2FFsUqUEfusxqv0HFGeKE07oXRReJWTKDf%2Fk8ZOluu7X5cokNK6my2S8aKDT2yFgkS3wdBBQ4tw8DWuWW3iRIgA4kVCcEO33ahIr72Kl5bLS%2FPJFgVe6xyRWyouk1Lc48z2PGOV5b1y07VQnx%2FzvWy1KSIHpBL%2FGDlJrmZILhmaKKlrLLiPeyMbnxBPKGS%2Fa5JG6%2BdRPB%2BRpOv8S9dXJS%2B4CMjNE9qQML%2BkgcsGOqUBMzG8RECZ9lh4lI6WEWs%2B19V0IDwG2T20CirODm134%2F3p4kavg8tKSFc7%2FVmPIb1aJpdAK5BGU%2BieWOyBekTbGuFP%2BxormKwgzdu5LmMnFBlPH61FsP0EkP32b1EvKl7Bn0bsli1O0SLvkk48CptU9Erkek%2Flp35Sh5TXAZZuxgJ%2B4nKZH%2B2A6ZNnGenzfEcPAIFODUn2yqs0XLkDcdtna5pSAXbX&X-Amz-Signature=c99c9e04c192ea81887f447f627a6a060f02e533118601af2ac5f0af03cbfaed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSFXOJZH%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1lxzGqjInoALy2eAAeabgX2DNmB4HlCbX1WHVuGQ7zAiEArx6fDRc4qMoxs7QfyUuzYONtx27Zf29%2FAAOczOO2HPYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBi%2BCleezneO08xq3yrcA%2BOvrW1FEMiJmhvLMQTT94lyO0QSkgp16OC2dtugSmzF%2B50u4N8ecBMFtoBwNd3H5v8kff8hBvf0awphuuscByRrjymUPU9VfqlA%2FJuh0HC8LnzWt9bvVBHLYhr4f4aheQXF6dGM6NkuWyZ2sxqVhYVlDmv%2FH3JfqZxxHlfuduvWgAgKKotICgLljvNuKntRVI1glqMG0z6SZjvxLgiputtQkJD4t2KweBZGtCHtCzBYUqGFD86uq2YTTAuQdVHJf5z5Bcbi4zYjx2XrBoIITCVC2cMW%2BLaUIuHZNMhiVKuk91LQgLIAe04uitVjgsYU%2F2JCN%2Ba1FZ%2FuCt3OUcb0%2F%2B0DzKUdwAixgkf7uTd4S8pPcMhXbYMrHqUM7jkDDhOdYR8sTby2rWNCOfqK%2BtwGlL9eamyTNb%2FFsUqUEfusxqv0HFGeKE07oXRReJWTKDf%2Fk8ZOluu7X5cokNK6my2S8aKDT2yFgkS3wdBBQ4tw8DWuWW3iRIgA4kVCcEO33ahIr72Kl5bLS%2FPJFgVe6xyRWyouk1Lc48z2PGOV5b1y07VQnx%2FzvWy1KSIHpBL%2FGDlJrmZILhmaKKlrLLiPeyMbnxBPKGS%2Fa5JG6%2BdRPB%2BRpOv8S9dXJS%2B4CMjNE9qQML%2BkgcsGOqUBMzG8RECZ9lh4lI6WEWs%2B19V0IDwG2T20CirODm134%2F3p4kavg8tKSFc7%2FVmPIb1aJpdAK5BGU%2BieWOyBekTbGuFP%2BxormKwgzdu5LmMnFBlPH61FsP0EkP32b1EvKl7Bn0bsli1O0SLvkk48CptU9Erkek%2Flp35Sh5TXAZZuxgJ%2B4nKZH%2B2A6ZNnGenzfEcPAIFODUn2yqs0XLkDcdtna5pSAXbX&X-Amz-Signature=6ce8b8c4efce368270c3cf1a5fa12a03916631ae02e839514bf98ab71e2aa85d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSFXOJZH%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1lxzGqjInoALy2eAAeabgX2DNmB4HlCbX1WHVuGQ7zAiEArx6fDRc4qMoxs7QfyUuzYONtx27Zf29%2FAAOczOO2HPYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBi%2BCleezneO08xq3yrcA%2BOvrW1FEMiJmhvLMQTT94lyO0QSkgp16OC2dtugSmzF%2B50u4N8ecBMFtoBwNd3H5v8kff8hBvf0awphuuscByRrjymUPU9VfqlA%2FJuh0HC8LnzWt9bvVBHLYhr4f4aheQXF6dGM6NkuWyZ2sxqVhYVlDmv%2FH3JfqZxxHlfuduvWgAgKKotICgLljvNuKntRVI1glqMG0z6SZjvxLgiputtQkJD4t2KweBZGtCHtCzBYUqGFD86uq2YTTAuQdVHJf5z5Bcbi4zYjx2XrBoIITCVC2cMW%2BLaUIuHZNMhiVKuk91LQgLIAe04uitVjgsYU%2F2JCN%2Ba1FZ%2FuCt3OUcb0%2F%2B0DzKUdwAixgkf7uTd4S8pPcMhXbYMrHqUM7jkDDhOdYR8sTby2rWNCOfqK%2BtwGlL9eamyTNb%2FFsUqUEfusxqv0HFGeKE07oXRReJWTKDf%2Fk8ZOluu7X5cokNK6my2S8aKDT2yFgkS3wdBBQ4tw8DWuWW3iRIgA4kVCcEO33ahIr72Kl5bLS%2FPJFgVe6xyRWyouk1Lc48z2PGOV5b1y07VQnx%2FzvWy1KSIHpBL%2FGDlJrmZILhmaKKlrLLiPeyMbnxBPKGS%2Fa5JG6%2BdRPB%2BRpOv8S9dXJS%2B4CMjNE9qQML%2BkgcsGOqUBMzG8RECZ9lh4lI6WEWs%2B19V0IDwG2T20CirODm134%2F3p4kavg8tKSFc7%2FVmPIb1aJpdAK5BGU%2BieWOyBekTbGuFP%2BxormKwgzdu5LmMnFBlPH61FsP0EkP32b1EvKl7Bn0bsli1O0SLvkk48CptU9Erkek%2Flp35Sh5TXAZZuxgJ%2B4nKZH%2B2A6ZNnGenzfEcPAIFODUn2yqs0XLkDcdtna5pSAXbX&X-Amz-Signature=f98d57928de16b848699809b52471a97c553ecdaa2a64cb98aa0019217e99d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
