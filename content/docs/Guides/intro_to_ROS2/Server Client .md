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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAEOE7KS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCfaRDY2MfGTy8tfjbAIzQ%2FaTdkr46pHPLbDGAXfDbnkQIhAKClM9R4NTW78DmoIeRG9Lf1YfOPpNFsScx00Rq6A9ghKv8DCF0QABoMNjM3NDIzMTgzODA1IgxRsIGrNILx3ssS3eMq3AM0AlZxOW%2BgZANWTUVufZ%2F5bCnztUEQs8%2B2NP2BuDhgfMOBRge32aTR5VUDuGugkdCGJXaRHIgV5S6Is5t7peFny9lKPnjJTxeb5Hj18iVwroiCbuhRvEu23sF%2BIdcAGirB3roZXZ%2FTmIfWGgKMzzlo5OWNNoeh%2FsUr4AIbRVwKyFWmI8gtNpmIPGSjSThVuelRht1RVovZpmlVgyb7LElOPyFDuNdCZ10MMrfu77fueUTSaQtmRJIC0%2FOp9Gg6NroZ1FSCynT4TqkdvvNpG3iB99K%2BLt9qNrwQBLkcgNwm2qRYL%2BmttBD7NiI7cuFxB8lDFXah3Mpd6ZVuqH2RlZWZnHn4%2F63zAxERAZt4ZQiT38fohjsbjwrwK2HCyYQp%2BDNwgq3a%2BQ7sxwab0spcXFZVME5wu5JL%2BRW8WpFVRfUkkS35RaTn8AuXeSFWyarsVSPdl%2BXrkkzkITQobvAYEwZN0Yrxz5p0ZrN6TMlbF6iWUA1NDaEki9Kr8446MynVEfb8rgXPtEL2TD785DvdzkT30Myj%2Ffe4Y%2Fpy%2Bc8%2FYDq%2BdCJcy1f7VvKpw%2Ffu12DHNUW032QpsVncv8uwjgwJqfThU%2BuYj5OssALCckOa9gbCQJhI7UXLLTOGj7UZMDDch%2Fy9BjqkAQhSNfHAoPd527O%2B%2B617fvFde7bZs6Reowyku6vcbXlYe7V%2BV%2FRSa0LbeDqiXzjRToobKJr8M9RSO8AYO2mNf17H20YX6vkNJNiNLq6ztoUF5rl5xDIGgSyzD5WFaqT0FnnHDGhqKIzj%2Fk89Pf7CUzBn4FW6UinkuQHgock%2FxmTgmZ0BgPcNUJ5CXI6vmoOguIDnicYnLE%2FtE3LqXQVUwxNiVpvh&X-Amz-Signature=5147e0ddb5d0f0470d9007ff03bcfa097fd1f6a31530e18ef90b6761f3567a21&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAEOE7KS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCfaRDY2MfGTy8tfjbAIzQ%2FaTdkr46pHPLbDGAXfDbnkQIhAKClM9R4NTW78DmoIeRG9Lf1YfOPpNFsScx00Rq6A9ghKv8DCF0QABoMNjM3NDIzMTgzODA1IgxRsIGrNILx3ssS3eMq3AM0AlZxOW%2BgZANWTUVufZ%2F5bCnztUEQs8%2B2NP2BuDhgfMOBRge32aTR5VUDuGugkdCGJXaRHIgV5S6Is5t7peFny9lKPnjJTxeb5Hj18iVwroiCbuhRvEu23sF%2BIdcAGirB3roZXZ%2FTmIfWGgKMzzlo5OWNNoeh%2FsUr4AIbRVwKyFWmI8gtNpmIPGSjSThVuelRht1RVovZpmlVgyb7LElOPyFDuNdCZ10MMrfu77fueUTSaQtmRJIC0%2FOp9Gg6NroZ1FSCynT4TqkdvvNpG3iB99K%2BLt9qNrwQBLkcgNwm2qRYL%2BmttBD7NiI7cuFxB8lDFXah3Mpd6ZVuqH2RlZWZnHn4%2F63zAxERAZt4ZQiT38fohjsbjwrwK2HCyYQp%2BDNwgq3a%2BQ7sxwab0spcXFZVME5wu5JL%2BRW8WpFVRfUkkS35RaTn8AuXeSFWyarsVSPdl%2BXrkkzkITQobvAYEwZN0Yrxz5p0ZrN6TMlbF6iWUA1NDaEki9Kr8446MynVEfb8rgXPtEL2TD785DvdzkT30Myj%2Ffe4Y%2Fpy%2Bc8%2FYDq%2BdCJcy1f7VvKpw%2Ffu12DHNUW032QpsVncv8uwjgwJqfThU%2BuYj5OssALCckOa9gbCQJhI7UXLLTOGj7UZMDDch%2Fy9BjqkAQhSNfHAoPd527O%2B%2B617fvFde7bZs6Reowyku6vcbXlYe7V%2BV%2FRSa0LbeDqiXzjRToobKJr8M9RSO8AYO2mNf17H20YX6vkNJNiNLq6ztoUF5rl5xDIGgSyzD5WFaqT0FnnHDGhqKIzj%2Fk89Pf7CUzBn4FW6UinkuQHgock%2FxmTgmZ0BgPcNUJ5CXI6vmoOguIDnicYnLE%2FtE3LqXQVUwxNiVpvh&X-Amz-Signature=87c9f7d64c951c6de7ecb0c41eb651216e6b48709ee244d1377cdf4b99b4c3aa&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAEOE7KS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCfaRDY2MfGTy8tfjbAIzQ%2FaTdkr46pHPLbDGAXfDbnkQIhAKClM9R4NTW78DmoIeRG9Lf1YfOPpNFsScx00Rq6A9ghKv8DCF0QABoMNjM3NDIzMTgzODA1IgxRsIGrNILx3ssS3eMq3AM0AlZxOW%2BgZANWTUVufZ%2F5bCnztUEQs8%2B2NP2BuDhgfMOBRge32aTR5VUDuGugkdCGJXaRHIgV5S6Is5t7peFny9lKPnjJTxeb5Hj18iVwroiCbuhRvEu23sF%2BIdcAGirB3roZXZ%2FTmIfWGgKMzzlo5OWNNoeh%2FsUr4AIbRVwKyFWmI8gtNpmIPGSjSThVuelRht1RVovZpmlVgyb7LElOPyFDuNdCZ10MMrfu77fueUTSaQtmRJIC0%2FOp9Gg6NroZ1FSCynT4TqkdvvNpG3iB99K%2BLt9qNrwQBLkcgNwm2qRYL%2BmttBD7NiI7cuFxB8lDFXah3Mpd6ZVuqH2RlZWZnHn4%2F63zAxERAZt4ZQiT38fohjsbjwrwK2HCyYQp%2BDNwgq3a%2BQ7sxwab0spcXFZVME5wu5JL%2BRW8WpFVRfUkkS35RaTn8AuXeSFWyarsVSPdl%2BXrkkzkITQobvAYEwZN0Yrxz5p0ZrN6TMlbF6iWUA1NDaEki9Kr8446MynVEfb8rgXPtEL2TD785DvdzkT30Myj%2Ffe4Y%2Fpy%2Bc8%2FYDq%2BdCJcy1f7VvKpw%2Ffu12DHNUW032QpsVncv8uwjgwJqfThU%2BuYj5OssALCckOa9gbCQJhI7UXLLTOGj7UZMDDch%2Fy9BjqkAQhSNfHAoPd527O%2B%2B617fvFde7bZs6Reowyku6vcbXlYe7V%2BV%2FRSa0LbeDqiXzjRToobKJr8M9RSO8AYO2mNf17H20YX6vkNJNiNLq6ztoUF5rl5xDIGgSyzD5WFaqT0FnnHDGhqKIzj%2Fk89Pf7CUzBn4FW6UinkuQHgock%2FxmTgmZ0BgPcNUJ5CXI6vmoOguIDnicYnLE%2FtE3LqXQVUwxNiVpvh&X-Amz-Signature=2988cb87a9047a83335075888d6248268acff5250820098638ce7fc36689dbad&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAEOE7KS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCfaRDY2MfGTy8tfjbAIzQ%2FaTdkr46pHPLbDGAXfDbnkQIhAKClM9R4NTW78DmoIeRG9Lf1YfOPpNFsScx00Rq6A9ghKv8DCF0QABoMNjM3NDIzMTgzODA1IgxRsIGrNILx3ssS3eMq3AM0AlZxOW%2BgZANWTUVufZ%2F5bCnztUEQs8%2B2NP2BuDhgfMOBRge32aTR5VUDuGugkdCGJXaRHIgV5S6Is5t7peFny9lKPnjJTxeb5Hj18iVwroiCbuhRvEu23sF%2BIdcAGirB3roZXZ%2FTmIfWGgKMzzlo5OWNNoeh%2FsUr4AIbRVwKyFWmI8gtNpmIPGSjSThVuelRht1RVovZpmlVgyb7LElOPyFDuNdCZ10MMrfu77fueUTSaQtmRJIC0%2FOp9Gg6NroZ1FSCynT4TqkdvvNpG3iB99K%2BLt9qNrwQBLkcgNwm2qRYL%2BmttBD7NiI7cuFxB8lDFXah3Mpd6ZVuqH2RlZWZnHn4%2F63zAxERAZt4ZQiT38fohjsbjwrwK2HCyYQp%2BDNwgq3a%2BQ7sxwab0spcXFZVME5wu5JL%2BRW8WpFVRfUkkS35RaTn8AuXeSFWyarsVSPdl%2BXrkkzkITQobvAYEwZN0Yrxz5p0ZrN6TMlbF6iWUA1NDaEki9Kr8446MynVEfb8rgXPtEL2TD785DvdzkT30Myj%2Ffe4Y%2Fpy%2Bc8%2FYDq%2BdCJcy1f7VvKpw%2Ffu12DHNUW032QpsVncv8uwjgwJqfThU%2BuYj5OssALCckOa9gbCQJhI7UXLLTOGj7UZMDDch%2Fy9BjqkAQhSNfHAoPd527O%2B%2B617fvFde7bZs6Reowyku6vcbXlYe7V%2BV%2FRSa0LbeDqiXzjRToobKJr8M9RSO8AYO2mNf17H20YX6vkNJNiNLq6ztoUF5rl5xDIGgSyzD5WFaqT0FnnHDGhqKIzj%2Fk89Pf7CUzBn4FW6UinkuQHgock%2FxmTgmZ0BgPcNUJ5CXI6vmoOguIDnicYnLE%2FtE3LqXQVUwxNiVpvh&X-Amz-Signature=b79b2361458cb71622274da588c84fc6b0970a3afd664da0104801c48c81fb05&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAEOE7KS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCfaRDY2MfGTy8tfjbAIzQ%2FaTdkr46pHPLbDGAXfDbnkQIhAKClM9R4NTW78DmoIeRG9Lf1YfOPpNFsScx00Rq6A9ghKv8DCF0QABoMNjM3NDIzMTgzODA1IgxRsIGrNILx3ssS3eMq3AM0AlZxOW%2BgZANWTUVufZ%2F5bCnztUEQs8%2B2NP2BuDhgfMOBRge32aTR5VUDuGugkdCGJXaRHIgV5S6Is5t7peFny9lKPnjJTxeb5Hj18iVwroiCbuhRvEu23sF%2BIdcAGirB3roZXZ%2FTmIfWGgKMzzlo5OWNNoeh%2FsUr4AIbRVwKyFWmI8gtNpmIPGSjSThVuelRht1RVovZpmlVgyb7LElOPyFDuNdCZ10MMrfu77fueUTSaQtmRJIC0%2FOp9Gg6NroZ1FSCynT4TqkdvvNpG3iB99K%2BLt9qNrwQBLkcgNwm2qRYL%2BmttBD7NiI7cuFxB8lDFXah3Mpd6ZVuqH2RlZWZnHn4%2F63zAxERAZt4ZQiT38fohjsbjwrwK2HCyYQp%2BDNwgq3a%2BQ7sxwab0spcXFZVME5wu5JL%2BRW8WpFVRfUkkS35RaTn8AuXeSFWyarsVSPdl%2BXrkkzkITQobvAYEwZN0Yrxz5p0ZrN6TMlbF6iWUA1NDaEki9Kr8446MynVEfb8rgXPtEL2TD785DvdzkT30Myj%2Ffe4Y%2Fpy%2Bc8%2FYDq%2BdCJcy1f7VvKpw%2Ffu12DHNUW032QpsVncv8uwjgwJqfThU%2BuYj5OssALCckOa9gbCQJhI7UXLLTOGj7UZMDDch%2Fy9BjqkAQhSNfHAoPd527O%2B%2B617fvFde7bZs6Reowyku6vcbXlYe7V%2BV%2FRSa0LbeDqiXzjRToobKJr8M9RSO8AYO2mNf17H20YX6vkNJNiNLq6ztoUF5rl5xDIGgSyzD5WFaqT0FnnHDGhqKIzj%2Fk89Pf7CUzBn4FW6UinkuQHgock%2FxmTgmZ0BgPcNUJ5CXI6vmoOguIDnicYnLE%2FtE3LqXQVUwxNiVpvh&X-Amz-Signature=0975a2c0b06a51d8572b0766d2cda9090a0d6a8f24d5bb5b1e5bea82d6607743&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
