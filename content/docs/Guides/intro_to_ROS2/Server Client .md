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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJIUGJZ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFTM5zrhonPZo7GiYNLU7qXq%2BAB5h7gT8ciD6PGWm7PfAiEAzdT33mLwJMwGkt1r6L37tZTS4URr%2FV%2FBpimIir1Axgoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIMx1v4cXdj5QZGohircA%2FRLzHqjTlGZrLXflB5uFGSiQuiytm0rltxD470AucxrixCGbupJP2XueFS1HB%2BG6wtQyOJpB7Mi5YOYPQZsW9f0dm5ztBtXycFMwq8%2BVMxGSu8H2d7cXaiM4R7P3%2Fzrp%2FUlaMS%2BOiXGOiE9MQgJHzfheXMGS%2BNQjq4p6JHJlVcCoT50nWULD5dZH8f39fqDaJVVjngIMxiHuziMY4yDXsHSVbLOkIqPZv%2BOrrSV0CIIk09Wg3GupIS3NNszyMTZxkwWV3m4qJz5j8O0jxBkqRl5R7ggO7ZuNwp1GBkqJUBd%2FAp%2FmNJbIrZ2RW4IO4gGTQt8XvAe0oWQxPCmljA3GzLolNPSbgQKuoRPJwzjcVgxim2XhYL4ZME%2Bj1o%2BaW1l3FJkVvgwGzNvHb0Wxwti4vFvxgsS0gEDA4HJoT5rlTZ7gVWVxx40BDXAGBHe0YvBIdfmtFN4mkG0COFUTCJ%2Fff53XugKNDsZz3xyw03DgJjF6y2%2BniI4hvEu15CSS9xgY09hAg0b6NhvUGDR%2FMSCRNsL4S0KalWxlLWagmjTdKuWNGba7NpRMBKiCvKIy1XGlCAHGJGtIR%2B0%2FObLhOjbCIKuNwOoGwaqId5m5UhvfLs26NPb0mHvFBOuYPc5MIal1sMGOqUB28Ia9Icf41YgXMkxipczk7NWi8xtUiji75xlvT5HrcbBkJ0zIf83xhzI2tvrop2zSub0HPz4UrLlesNOIGb6aSL6uLhyBjp%2FW7qASrgoxdXETlfIWU%2FN8cAIOWzWjp4tV65k0YGtflzv1vc%2FplianYWsIoTJ%2BaVlRndoBK9SStAcYmfaVRcREx5ficjaVIwdpUY7M%2Bzw6a6vITm7F%2BzbzuzbbCpc&X-Amz-Signature=82b348afb3a8c8bf89a9d31f2579a9960da332c7f5b14e978cc55bca3c5cef23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJIUGJZ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFTM5zrhonPZo7GiYNLU7qXq%2BAB5h7gT8ciD6PGWm7PfAiEAzdT33mLwJMwGkt1r6L37tZTS4URr%2FV%2FBpimIir1Axgoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIMx1v4cXdj5QZGohircA%2FRLzHqjTlGZrLXflB5uFGSiQuiytm0rltxD470AucxrixCGbupJP2XueFS1HB%2BG6wtQyOJpB7Mi5YOYPQZsW9f0dm5ztBtXycFMwq8%2BVMxGSu8H2d7cXaiM4R7P3%2Fzrp%2FUlaMS%2BOiXGOiE9MQgJHzfheXMGS%2BNQjq4p6JHJlVcCoT50nWULD5dZH8f39fqDaJVVjngIMxiHuziMY4yDXsHSVbLOkIqPZv%2BOrrSV0CIIk09Wg3GupIS3NNszyMTZxkwWV3m4qJz5j8O0jxBkqRl5R7ggO7ZuNwp1GBkqJUBd%2FAp%2FmNJbIrZ2RW4IO4gGTQt8XvAe0oWQxPCmljA3GzLolNPSbgQKuoRPJwzjcVgxim2XhYL4ZME%2Bj1o%2BaW1l3FJkVvgwGzNvHb0Wxwti4vFvxgsS0gEDA4HJoT5rlTZ7gVWVxx40BDXAGBHe0YvBIdfmtFN4mkG0COFUTCJ%2Fff53XugKNDsZz3xyw03DgJjF6y2%2BniI4hvEu15CSS9xgY09hAg0b6NhvUGDR%2FMSCRNsL4S0KalWxlLWagmjTdKuWNGba7NpRMBKiCvKIy1XGlCAHGJGtIR%2B0%2FObLhOjbCIKuNwOoGwaqId5m5UhvfLs26NPb0mHvFBOuYPc5MIal1sMGOqUB28Ia9Icf41YgXMkxipczk7NWi8xtUiji75xlvT5HrcbBkJ0zIf83xhzI2tvrop2zSub0HPz4UrLlesNOIGb6aSL6uLhyBjp%2FW7qASrgoxdXETlfIWU%2FN8cAIOWzWjp4tV65k0YGtflzv1vc%2FplianYWsIoTJ%2BaVlRndoBK9SStAcYmfaVRcREx5ficjaVIwdpUY7M%2Bzw6a6vITm7F%2BzbzuzbbCpc&X-Amz-Signature=7bd5304ce0999d835d57b0785e84f2511e9dff3f8b6ef715fc5a97b454128471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJIUGJZ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFTM5zrhonPZo7GiYNLU7qXq%2BAB5h7gT8ciD6PGWm7PfAiEAzdT33mLwJMwGkt1r6L37tZTS4URr%2FV%2FBpimIir1Axgoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIMx1v4cXdj5QZGohircA%2FRLzHqjTlGZrLXflB5uFGSiQuiytm0rltxD470AucxrixCGbupJP2XueFS1HB%2BG6wtQyOJpB7Mi5YOYPQZsW9f0dm5ztBtXycFMwq8%2BVMxGSu8H2d7cXaiM4R7P3%2Fzrp%2FUlaMS%2BOiXGOiE9MQgJHzfheXMGS%2BNQjq4p6JHJlVcCoT50nWULD5dZH8f39fqDaJVVjngIMxiHuziMY4yDXsHSVbLOkIqPZv%2BOrrSV0CIIk09Wg3GupIS3NNszyMTZxkwWV3m4qJz5j8O0jxBkqRl5R7ggO7ZuNwp1GBkqJUBd%2FAp%2FmNJbIrZ2RW4IO4gGTQt8XvAe0oWQxPCmljA3GzLolNPSbgQKuoRPJwzjcVgxim2XhYL4ZME%2Bj1o%2BaW1l3FJkVvgwGzNvHb0Wxwti4vFvxgsS0gEDA4HJoT5rlTZ7gVWVxx40BDXAGBHe0YvBIdfmtFN4mkG0COFUTCJ%2Fff53XugKNDsZz3xyw03DgJjF6y2%2BniI4hvEu15CSS9xgY09hAg0b6NhvUGDR%2FMSCRNsL4S0KalWxlLWagmjTdKuWNGba7NpRMBKiCvKIy1XGlCAHGJGtIR%2B0%2FObLhOjbCIKuNwOoGwaqId5m5UhvfLs26NPb0mHvFBOuYPc5MIal1sMGOqUB28Ia9Icf41YgXMkxipczk7NWi8xtUiji75xlvT5HrcbBkJ0zIf83xhzI2tvrop2zSub0HPz4UrLlesNOIGb6aSL6uLhyBjp%2FW7qASrgoxdXETlfIWU%2FN8cAIOWzWjp4tV65k0YGtflzv1vc%2FplianYWsIoTJ%2BaVlRndoBK9SStAcYmfaVRcREx5ficjaVIwdpUY7M%2Bzw6a6vITm7F%2BzbzuzbbCpc&X-Amz-Signature=dd41341825f0bed372e83a1f1c57c05608bb19050108db962abfed729f36fd52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJIUGJZ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFTM5zrhonPZo7GiYNLU7qXq%2BAB5h7gT8ciD6PGWm7PfAiEAzdT33mLwJMwGkt1r6L37tZTS4URr%2FV%2FBpimIir1Axgoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIMx1v4cXdj5QZGohircA%2FRLzHqjTlGZrLXflB5uFGSiQuiytm0rltxD470AucxrixCGbupJP2XueFS1HB%2BG6wtQyOJpB7Mi5YOYPQZsW9f0dm5ztBtXycFMwq8%2BVMxGSu8H2d7cXaiM4R7P3%2Fzrp%2FUlaMS%2BOiXGOiE9MQgJHzfheXMGS%2BNQjq4p6JHJlVcCoT50nWULD5dZH8f39fqDaJVVjngIMxiHuziMY4yDXsHSVbLOkIqPZv%2BOrrSV0CIIk09Wg3GupIS3NNszyMTZxkwWV3m4qJz5j8O0jxBkqRl5R7ggO7ZuNwp1GBkqJUBd%2FAp%2FmNJbIrZ2RW4IO4gGTQt8XvAe0oWQxPCmljA3GzLolNPSbgQKuoRPJwzjcVgxim2XhYL4ZME%2Bj1o%2BaW1l3FJkVvgwGzNvHb0Wxwti4vFvxgsS0gEDA4HJoT5rlTZ7gVWVxx40BDXAGBHe0YvBIdfmtFN4mkG0COFUTCJ%2Fff53XugKNDsZz3xyw03DgJjF6y2%2BniI4hvEu15CSS9xgY09hAg0b6NhvUGDR%2FMSCRNsL4S0KalWxlLWagmjTdKuWNGba7NpRMBKiCvKIy1XGlCAHGJGtIR%2B0%2FObLhOjbCIKuNwOoGwaqId5m5UhvfLs26NPb0mHvFBOuYPc5MIal1sMGOqUB28Ia9Icf41YgXMkxipczk7NWi8xtUiji75xlvT5HrcbBkJ0zIf83xhzI2tvrop2zSub0HPz4UrLlesNOIGb6aSL6uLhyBjp%2FW7qASrgoxdXETlfIWU%2FN8cAIOWzWjp4tV65k0YGtflzv1vc%2FplianYWsIoTJ%2BaVlRndoBK9SStAcYmfaVRcREx5ficjaVIwdpUY7M%2Bzw6a6vITm7F%2BzbzuzbbCpc&X-Amz-Signature=0a1e0ccfee25f14cce949ae4af392303e3f606439eed05e2b7d7624f473619ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJIUGJZ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFTM5zrhonPZo7GiYNLU7qXq%2BAB5h7gT8ciD6PGWm7PfAiEAzdT33mLwJMwGkt1r6L37tZTS4URr%2FV%2FBpimIir1Axgoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIMx1v4cXdj5QZGohircA%2FRLzHqjTlGZrLXflB5uFGSiQuiytm0rltxD470AucxrixCGbupJP2XueFS1HB%2BG6wtQyOJpB7Mi5YOYPQZsW9f0dm5ztBtXycFMwq8%2BVMxGSu8H2d7cXaiM4R7P3%2Fzrp%2FUlaMS%2BOiXGOiE9MQgJHzfheXMGS%2BNQjq4p6JHJlVcCoT50nWULD5dZH8f39fqDaJVVjngIMxiHuziMY4yDXsHSVbLOkIqPZv%2BOrrSV0CIIk09Wg3GupIS3NNszyMTZxkwWV3m4qJz5j8O0jxBkqRl5R7ggO7ZuNwp1GBkqJUBd%2FAp%2FmNJbIrZ2RW4IO4gGTQt8XvAe0oWQxPCmljA3GzLolNPSbgQKuoRPJwzjcVgxim2XhYL4ZME%2Bj1o%2BaW1l3FJkVvgwGzNvHb0Wxwti4vFvxgsS0gEDA4HJoT5rlTZ7gVWVxx40BDXAGBHe0YvBIdfmtFN4mkG0COFUTCJ%2Fff53XugKNDsZz3xyw03DgJjF6y2%2BniI4hvEu15CSS9xgY09hAg0b6NhvUGDR%2FMSCRNsL4S0KalWxlLWagmjTdKuWNGba7NpRMBKiCvKIy1XGlCAHGJGtIR%2B0%2FObLhOjbCIKuNwOoGwaqId5m5UhvfLs26NPb0mHvFBOuYPc5MIal1sMGOqUB28Ia9Icf41YgXMkxipczk7NWi8xtUiji75xlvT5HrcbBkJ0zIf83xhzI2tvrop2zSub0HPz4UrLlesNOIGb6aSL6uLhyBjp%2FW7qASrgoxdXETlfIWU%2FN8cAIOWzWjp4tV65k0YGtflzv1vc%2FplianYWsIoTJ%2BaVlRndoBK9SStAcYmfaVRcREx5ficjaVIwdpUY7M%2Bzw6a6vITm7F%2BzbzuzbbCpc&X-Amz-Signature=2c2a9a8ae8c875ac713ca61e9f7e9aa196c39a3b4135b9cfc14f7afcc494d27b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
