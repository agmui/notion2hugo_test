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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWJXMCG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDZmxnBQdeQwMSIGBB6NP1dai%2FiRmSDiFtvWoS4%2B0zgygIhANiNztCiI38ER0jE4dnANwyNnlQ85lGGzCE9t3pnG%2BfYKv8DCG4QABoMNjM3NDIzMTgzODA1Igy1qT2vRn2oDtQFDQcq3APw9ehLt5BprvL%2FqzOd1eK6MQE%2FywNXAfhNqXHSyZRjQAeeclx99YXcxWZCiGTIXAEwu%2B7HBJeKxdSQNm4lDrGIi60jSHALlz8NGs%2BE4f33VkFaqfZZBoaSP10Nz9mCqh5VXPe2ibitF1sDuRqtwE1S%2BLLVxGeFdI1r2YJ1BgEPCQVa4WBiTwj7VYCIqc9%2F4Vz2oy1xjxR6%2Fmu2iEVXxGxjMbQ%2FeRklP%2Bjeybhmhu%2Bm49BI5NaeKiyCbAAKo42kat7y%2FeAdtX3Es80L2xiZDYRA2znqDKNlP%2FdOkNp3p99BOrbdmLtR7LJRIV97ybCZRaRiYXxRd6rGOxbYcFM4xVOzL7%2FEawh1WXiYgi1XXKiF6K1CZ7fuBdrmVw1IfK%2BqROo24oZO4DnL%2FLY%2BK%2BI14uWb7beyE9jgIf76%2Bz6oJHkP9pkk3B3%2B0yQVBkyYEn%2FE%2Fz4cjLZGXLKYWXFH1Yz%2FvM5CqkuqfgM2uk1ZRstEOI%2BAUfP%2FzIwkC6G8bBpcAvzcl1m1FW4WV%2F2Ub5l04bfoRDgex%2BkSHRTV28G5ELBwR9nwU7cfCKR3wNO2a0Lkx%2FesRkVytKI%2B1cA0OmwLZNm%2FIJmN3i5DtA%2BStKwmaNGM7uhWVRTEx2LUuhfZDh0ApjCdy8vEBjqkAROw3Q%2B%2Flx6cT9X1ofLGOAcIt4W8FTXL1X4UfzWzjDCGCZqVf%2FDfKDTGRQrT%2B8I7JcIPMArBIgC3OZUvxxP%2Fb9dAo%2F7lUHsLcB2nXZPlvRdk8nj3c2gG2cWu5YcuneZZ77OfgLps%2BG0ttJ6qwHA%2BkrNP30meDGWY7W1sw7WuELnHnvg6urReTpNB9Lbx3wCHw0t3A8Ry3xSrkEm%2BfHL12Rf%2BW0ND&X-Amz-Signature=471ee54c00621e3cd07671f7b603fd5b994360e39777bcd8ae458a790ad9f578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWJXMCG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDZmxnBQdeQwMSIGBB6NP1dai%2FiRmSDiFtvWoS4%2B0zgygIhANiNztCiI38ER0jE4dnANwyNnlQ85lGGzCE9t3pnG%2BfYKv8DCG4QABoMNjM3NDIzMTgzODA1Igy1qT2vRn2oDtQFDQcq3APw9ehLt5BprvL%2FqzOd1eK6MQE%2FywNXAfhNqXHSyZRjQAeeclx99YXcxWZCiGTIXAEwu%2B7HBJeKxdSQNm4lDrGIi60jSHALlz8NGs%2BE4f33VkFaqfZZBoaSP10Nz9mCqh5VXPe2ibitF1sDuRqtwE1S%2BLLVxGeFdI1r2YJ1BgEPCQVa4WBiTwj7VYCIqc9%2F4Vz2oy1xjxR6%2Fmu2iEVXxGxjMbQ%2FeRklP%2Bjeybhmhu%2Bm49BI5NaeKiyCbAAKo42kat7y%2FeAdtX3Es80L2xiZDYRA2znqDKNlP%2FdOkNp3p99BOrbdmLtR7LJRIV97ybCZRaRiYXxRd6rGOxbYcFM4xVOzL7%2FEawh1WXiYgi1XXKiF6K1CZ7fuBdrmVw1IfK%2BqROo24oZO4DnL%2FLY%2BK%2BI14uWb7beyE9jgIf76%2Bz6oJHkP9pkk3B3%2B0yQVBkyYEn%2FE%2Fz4cjLZGXLKYWXFH1Yz%2FvM5CqkuqfgM2uk1ZRstEOI%2BAUfP%2FzIwkC6G8bBpcAvzcl1m1FW4WV%2F2Ub5l04bfoRDgex%2BkSHRTV28G5ELBwR9nwU7cfCKR3wNO2a0Lkx%2FesRkVytKI%2B1cA0OmwLZNm%2FIJmN3i5DtA%2BStKwmaNGM7uhWVRTEx2LUuhfZDh0ApjCdy8vEBjqkAROw3Q%2B%2Flx6cT9X1ofLGOAcIt4W8FTXL1X4UfzWzjDCGCZqVf%2FDfKDTGRQrT%2B8I7JcIPMArBIgC3OZUvxxP%2Fb9dAo%2F7lUHsLcB2nXZPlvRdk8nj3c2gG2cWu5YcuneZZ77OfgLps%2BG0ttJ6qwHA%2BkrNP30meDGWY7W1sw7WuELnHnvg6urReTpNB9Lbx3wCHw0t3A8Ry3xSrkEm%2BfHL12Rf%2BW0ND&X-Amz-Signature=e5ce7d88bbedf34e6e5ae620f78a96902275f18b82d1dffacbf422231988a533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWJXMCG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDZmxnBQdeQwMSIGBB6NP1dai%2FiRmSDiFtvWoS4%2B0zgygIhANiNztCiI38ER0jE4dnANwyNnlQ85lGGzCE9t3pnG%2BfYKv8DCG4QABoMNjM3NDIzMTgzODA1Igy1qT2vRn2oDtQFDQcq3APw9ehLt5BprvL%2FqzOd1eK6MQE%2FywNXAfhNqXHSyZRjQAeeclx99YXcxWZCiGTIXAEwu%2B7HBJeKxdSQNm4lDrGIi60jSHALlz8NGs%2BE4f33VkFaqfZZBoaSP10Nz9mCqh5VXPe2ibitF1sDuRqtwE1S%2BLLVxGeFdI1r2YJ1BgEPCQVa4WBiTwj7VYCIqc9%2F4Vz2oy1xjxR6%2Fmu2iEVXxGxjMbQ%2FeRklP%2Bjeybhmhu%2Bm49BI5NaeKiyCbAAKo42kat7y%2FeAdtX3Es80L2xiZDYRA2znqDKNlP%2FdOkNp3p99BOrbdmLtR7LJRIV97ybCZRaRiYXxRd6rGOxbYcFM4xVOzL7%2FEawh1WXiYgi1XXKiF6K1CZ7fuBdrmVw1IfK%2BqROo24oZO4DnL%2FLY%2BK%2BI14uWb7beyE9jgIf76%2Bz6oJHkP9pkk3B3%2B0yQVBkyYEn%2FE%2Fz4cjLZGXLKYWXFH1Yz%2FvM5CqkuqfgM2uk1ZRstEOI%2BAUfP%2FzIwkC6G8bBpcAvzcl1m1FW4WV%2F2Ub5l04bfoRDgex%2BkSHRTV28G5ELBwR9nwU7cfCKR3wNO2a0Lkx%2FesRkVytKI%2B1cA0OmwLZNm%2FIJmN3i5DtA%2BStKwmaNGM7uhWVRTEx2LUuhfZDh0ApjCdy8vEBjqkAROw3Q%2B%2Flx6cT9X1ofLGOAcIt4W8FTXL1X4UfzWzjDCGCZqVf%2FDfKDTGRQrT%2B8I7JcIPMArBIgC3OZUvxxP%2Fb9dAo%2F7lUHsLcB2nXZPlvRdk8nj3c2gG2cWu5YcuneZZ77OfgLps%2BG0ttJ6qwHA%2BkrNP30meDGWY7W1sw7WuELnHnvg6urReTpNB9Lbx3wCHw0t3A8Ry3xSrkEm%2BfHL12Rf%2BW0ND&X-Amz-Signature=2f9a5d0a0d192d89956cf2f0a7f43c5a717ab5629733fb0b41032e07533ea35d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWJXMCG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDZmxnBQdeQwMSIGBB6NP1dai%2FiRmSDiFtvWoS4%2B0zgygIhANiNztCiI38ER0jE4dnANwyNnlQ85lGGzCE9t3pnG%2BfYKv8DCG4QABoMNjM3NDIzMTgzODA1Igy1qT2vRn2oDtQFDQcq3APw9ehLt5BprvL%2FqzOd1eK6MQE%2FywNXAfhNqXHSyZRjQAeeclx99YXcxWZCiGTIXAEwu%2B7HBJeKxdSQNm4lDrGIi60jSHALlz8NGs%2BE4f33VkFaqfZZBoaSP10Nz9mCqh5VXPe2ibitF1sDuRqtwE1S%2BLLVxGeFdI1r2YJ1BgEPCQVa4WBiTwj7VYCIqc9%2F4Vz2oy1xjxR6%2Fmu2iEVXxGxjMbQ%2FeRklP%2Bjeybhmhu%2Bm49BI5NaeKiyCbAAKo42kat7y%2FeAdtX3Es80L2xiZDYRA2znqDKNlP%2FdOkNp3p99BOrbdmLtR7LJRIV97ybCZRaRiYXxRd6rGOxbYcFM4xVOzL7%2FEawh1WXiYgi1XXKiF6K1CZ7fuBdrmVw1IfK%2BqROo24oZO4DnL%2FLY%2BK%2BI14uWb7beyE9jgIf76%2Bz6oJHkP9pkk3B3%2B0yQVBkyYEn%2FE%2Fz4cjLZGXLKYWXFH1Yz%2FvM5CqkuqfgM2uk1ZRstEOI%2BAUfP%2FzIwkC6G8bBpcAvzcl1m1FW4WV%2F2Ub5l04bfoRDgex%2BkSHRTV28G5ELBwR9nwU7cfCKR3wNO2a0Lkx%2FesRkVytKI%2B1cA0OmwLZNm%2FIJmN3i5DtA%2BStKwmaNGM7uhWVRTEx2LUuhfZDh0ApjCdy8vEBjqkAROw3Q%2B%2Flx6cT9X1ofLGOAcIt4W8FTXL1X4UfzWzjDCGCZqVf%2FDfKDTGRQrT%2B8I7JcIPMArBIgC3OZUvxxP%2Fb9dAo%2F7lUHsLcB2nXZPlvRdk8nj3c2gG2cWu5YcuneZZ77OfgLps%2BG0ttJ6qwHA%2BkrNP30meDGWY7W1sw7WuELnHnvg6urReTpNB9Lbx3wCHw0t3A8Ry3xSrkEm%2BfHL12Rf%2BW0ND&X-Amz-Signature=c18df91e33c1b2c735a645aef0922a75f7bb2675ab14e0cc11802e5028061666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWJXMCG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDZmxnBQdeQwMSIGBB6NP1dai%2FiRmSDiFtvWoS4%2B0zgygIhANiNztCiI38ER0jE4dnANwyNnlQ85lGGzCE9t3pnG%2BfYKv8DCG4QABoMNjM3NDIzMTgzODA1Igy1qT2vRn2oDtQFDQcq3APw9ehLt5BprvL%2FqzOd1eK6MQE%2FywNXAfhNqXHSyZRjQAeeclx99YXcxWZCiGTIXAEwu%2B7HBJeKxdSQNm4lDrGIi60jSHALlz8NGs%2BE4f33VkFaqfZZBoaSP10Nz9mCqh5VXPe2ibitF1sDuRqtwE1S%2BLLVxGeFdI1r2YJ1BgEPCQVa4WBiTwj7VYCIqc9%2F4Vz2oy1xjxR6%2Fmu2iEVXxGxjMbQ%2FeRklP%2Bjeybhmhu%2Bm49BI5NaeKiyCbAAKo42kat7y%2FeAdtX3Es80L2xiZDYRA2znqDKNlP%2FdOkNp3p99BOrbdmLtR7LJRIV97ybCZRaRiYXxRd6rGOxbYcFM4xVOzL7%2FEawh1WXiYgi1XXKiF6K1CZ7fuBdrmVw1IfK%2BqROo24oZO4DnL%2FLY%2BK%2BI14uWb7beyE9jgIf76%2Bz6oJHkP9pkk3B3%2B0yQVBkyYEn%2FE%2Fz4cjLZGXLKYWXFH1Yz%2FvM5CqkuqfgM2uk1ZRstEOI%2BAUfP%2FzIwkC6G8bBpcAvzcl1m1FW4WV%2F2Ub5l04bfoRDgex%2BkSHRTV28G5ELBwR9nwU7cfCKR3wNO2a0Lkx%2FesRkVytKI%2B1cA0OmwLZNm%2FIJmN3i5DtA%2BStKwmaNGM7uhWVRTEx2LUuhfZDh0ApjCdy8vEBjqkAROw3Q%2B%2Flx6cT9X1ofLGOAcIt4W8FTXL1X4UfzWzjDCGCZqVf%2FDfKDTGRQrT%2B8I7JcIPMArBIgC3OZUvxxP%2Fb9dAo%2F7lUHsLcB2nXZPlvRdk8nj3c2gG2cWu5YcuneZZ77OfgLps%2BG0ttJ6qwHA%2BkrNP30meDGWY7W1sw7WuELnHnvg6urReTpNB9Lbx3wCHw0t3A8Ry3xSrkEm%2BfHL12Rf%2BW0ND&X-Amz-Signature=b2347ccc0183880c8e216a2a0adcce689b651ba22e783824aace5782aa1e6c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
