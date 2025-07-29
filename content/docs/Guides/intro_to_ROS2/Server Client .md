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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2HYTTX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGLskjnLu6moYum6Oi%2FNaV%2B14ymhkZFmf8IOXsi51Q7QAiB6qrCFsqfAnsOe9RsvFzZPUoK2TJ%2FPm47WfqzFEit3wCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm1P6qW0M%2BIS%2FY2rtKtwDISdzny4iLimV5iUeZ2XskSqQ29g3vTsXQDqE6AYdTg5S2RSMO84T03ZyuA9CiXfVbo%2BtaA%2BIU35zRTCUM8IeIHrQBwHCIB1XTK13FsZtmA1DV9IgslO9NonH6aXNlRwlpuCgWouMmJG84AERqQ0yt8dRrhD8O62rFWUI6sfuvXXuPjKp26nnvguGEdPQWPklgvedi64gLORkBr2IWBYFtmr6pyrCepcybZ5fRhwSEtzz2LXWNwuDL43JVZfV5ZOVqqLBeLlDkAwF87r6PRer%2BB4pkpMYpOqlydlrB2YGIBRJA746mV72gyP12Qgh6AjdekK%2BJ6X9L2l%2BvCUVRQYSMGVekPzAnOcEcxPUuaiWXZ9w3A6tOJWMGOE1QOwPCHbikuqUB%2BVE%2Fc%2BFVskylfTWekzcvzuV49ZAuaZliY01otIpZijNwQc0lJ6tG0eV4IVQNy9bgaLM14pohBxSHmArBbdxnY77KzbIlyhW13R0LwUjiDfmdZnb5vJaouH9Ak6HuyuYCV1QJf5iXzQUXEdiyjDfCzzzXJgnAlVnipjOxVw%2Bii94tAebZLT9TcEaJ2vIuTe10dIH1OWhZZoPa6ZW1ia7cGp1F3g309Zqex2lX2j%2B1%2BODz9ol86LBHGkwn4OixAY6pgFRMwAGvkntFXMSiXiWQQYyO1N%2FG%2Bz5tbT9%2B%2FN4ht0AV5RpgwB7X1B2jzlmMbMeIE3E8fTxLKfWGIZlPa7%2BD5oQiF6YdrlfEfYUwDuyBpK8i%2FuA6%2FYuyPF6%2FYZX61iYk8gHBbMBi8nSE9xrZ3RrQnpfm8BRcqyGGpP6iI%2BVc58tv1i6qTIyXx3pFaWAdGB0Ic1OfSB6Xy4vRiO1ZNer2bnCgGhcAWaS&X-Amz-Signature=9cb5d34f02086507b057df827c434d51f4791002b312b0c32e7103819b77c6b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2HYTTX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGLskjnLu6moYum6Oi%2FNaV%2B14ymhkZFmf8IOXsi51Q7QAiB6qrCFsqfAnsOe9RsvFzZPUoK2TJ%2FPm47WfqzFEit3wCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm1P6qW0M%2BIS%2FY2rtKtwDISdzny4iLimV5iUeZ2XskSqQ29g3vTsXQDqE6AYdTg5S2RSMO84T03ZyuA9CiXfVbo%2BtaA%2BIU35zRTCUM8IeIHrQBwHCIB1XTK13FsZtmA1DV9IgslO9NonH6aXNlRwlpuCgWouMmJG84AERqQ0yt8dRrhD8O62rFWUI6sfuvXXuPjKp26nnvguGEdPQWPklgvedi64gLORkBr2IWBYFtmr6pyrCepcybZ5fRhwSEtzz2LXWNwuDL43JVZfV5ZOVqqLBeLlDkAwF87r6PRer%2BB4pkpMYpOqlydlrB2YGIBRJA746mV72gyP12Qgh6AjdekK%2BJ6X9L2l%2BvCUVRQYSMGVekPzAnOcEcxPUuaiWXZ9w3A6tOJWMGOE1QOwPCHbikuqUB%2BVE%2Fc%2BFVskylfTWekzcvzuV49ZAuaZliY01otIpZijNwQc0lJ6tG0eV4IVQNy9bgaLM14pohBxSHmArBbdxnY77KzbIlyhW13R0LwUjiDfmdZnb5vJaouH9Ak6HuyuYCV1QJf5iXzQUXEdiyjDfCzzzXJgnAlVnipjOxVw%2Bii94tAebZLT9TcEaJ2vIuTe10dIH1OWhZZoPa6ZW1ia7cGp1F3g309Zqex2lX2j%2B1%2BODz9ol86LBHGkwn4OixAY6pgFRMwAGvkntFXMSiXiWQQYyO1N%2FG%2Bz5tbT9%2B%2FN4ht0AV5RpgwB7X1B2jzlmMbMeIE3E8fTxLKfWGIZlPa7%2BD5oQiF6YdrlfEfYUwDuyBpK8i%2FuA6%2FYuyPF6%2FYZX61iYk8gHBbMBi8nSE9xrZ3RrQnpfm8BRcqyGGpP6iI%2BVc58tv1i6qTIyXx3pFaWAdGB0Ic1OfSB6Xy4vRiO1ZNer2bnCgGhcAWaS&X-Amz-Signature=a0badbc9927b29de23daa0d770491c640ce3ab69526eaceec9e1490310a3604d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2HYTTX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGLskjnLu6moYum6Oi%2FNaV%2B14ymhkZFmf8IOXsi51Q7QAiB6qrCFsqfAnsOe9RsvFzZPUoK2TJ%2FPm47WfqzFEit3wCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm1P6qW0M%2BIS%2FY2rtKtwDISdzny4iLimV5iUeZ2XskSqQ29g3vTsXQDqE6AYdTg5S2RSMO84T03ZyuA9CiXfVbo%2BtaA%2BIU35zRTCUM8IeIHrQBwHCIB1XTK13FsZtmA1DV9IgslO9NonH6aXNlRwlpuCgWouMmJG84AERqQ0yt8dRrhD8O62rFWUI6sfuvXXuPjKp26nnvguGEdPQWPklgvedi64gLORkBr2IWBYFtmr6pyrCepcybZ5fRhwSEtzz2LXWNwuDL43JVZfV5ZOVqqLBeLlDkAwF87r6PRer%2BB4pkpMYpOqlydlrB2YGIBRJA746mV72gyP12Qgh6AjdekK%2BJ6X9L2l%2BvCUVRQYSMGVekPzAnOcEcxPUuaiWXZ9w3A6tOJWMGOE1QOwPCHbikuqUB%2BVE%2Fc%2BFVskylfTWekzcvzuV49ZAuaZliY01otIpZijNwQc0lJ6tG0eV4IVQNy9bgaLM14pohBxSHmArBbdxnY77KzbIlyhW13R0LwUjiDfmdZnb5vJaouH9Ak6HuyuYCV1QJf5iXzQUXEdiyjDfCzzzXJgnAlVnipjOxVw%2Bii94tAebZLT9TcEaJ2vIuTe10dIH1OWhZZoPa6ZW1ia7cGp1F3g309Zqex2lX2j%2B1%2BODz9ol86LBHGkwn4OixAY6pgFRMwAGvkntFXMSiXiWQQYyO1N%2FG%2Bz5tbT9%2B%2FN4ht0AV5RpgwB7X1B2jzlmMbMeIE3E8fTxLKfWGIZlPa7%2BD5oQiF6YdrlfEfYUwDuyBpK8i%2FuA6%2FYuyPF6%2FYZX61iYk8gHBbMBi8nSE9xrZ3RrQnpfm8BRcqyGGpP6iI%2BVc58tv1i6qTIyXx3pFaWAdGB0Ic1OfSB6Xy4vRiO1ZNer2bnCgGhcAWaS&X-Amz-Signature=47ab355421987c55cd174dc2c0226d25a1741f9c0d509e7e155db616a7d53837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2HYTTX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGLskjnLu6moYum6Oi%2FNaV%2B14ymhkZFmf8IOXsi51Q7QAiB6qrCFsqfAnsOe9RsvFzZPUoK2TJ%2FPm47WfqzFEit3wCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm1P6qW0M%2BIS%2FY2rtKtwDISdzny4iLimV5iUeZ2XskSqQ29g3vTsXQDqE6AYdTg5S2RSMO84T03ZyuA9CiXfVbo%2BtaA%2BIU35zRTCUM8IeIHrQBwHCIB1XTK13FsZtmA1DV9IgslO9NonH6aXNlRwlpuCgWouMmJG84AERqQ0yt8dRrhD8O62rFWUI6sfuvXXuPjKp26nnvguGEdPQWPklgvedi64gLORkBr2IWBYFtmr6pyrCepcybZ5fRhwSEtzz2LXWNwuDL43JVZfV5ZOVqqLBeLlDkAwF87r6PRer%2BB4pkpMYpOqlydlrB2YGIBRJA746mV72gyP12Qgh6AjdekK%2BJ6X9L2l%2BvCUVRQYSMGVekPzAnOcEcxPUuaiWXZ9w3A6tOJWMGOE1QOwPCHbikuqUB%2BVE%2Fc%2BFVskylfTWekzcvzuV49ZAuaZliY01otIpZijNwQc0lJ6tG0eV4IVQNy9bgaLM14pohBxSHmArBbdxnY77KzbIlyhW13R0LwUjiDfmdZnb5vJaouH9Ak6HuyuYCV1QJf5iXzQUXEdiyjDfCzzzXJgnAlVnipjOxVw%2Bii94tAebZLT9TcEaJ2vIuTe10dIH1OWhZZoPa6ZW1ia7cGp1F3g309Zqex2lX2j%2B1%2BODz9ol86LBHGkwn4OixAY6pgFRMwAGvkntFXMSiXiWQQYyO1N%2FG%2Bz5tbT9%2B%2FN4ht0AV5RpgwB7X1B2jzlmMbMeIE3E8fTxLKfWGIZlPa7%2BD5oQiF6YdrlfEfYUwDuyBpK8i%2FuA6%2FYuyPF6%2FYZX61iYk8gHBbMBi8nSE9xrZ3RrQnpfm8BRcqyGGpP6iI%2BVc58tv1i6qTIyXx3pFaWAdGB0Ic1OfSB6Xy4vRiO1ZNer2bnCgGhcAWaS&X-Amz-Signature=faee356b73679dfe6cc9886553a29c0d6a3081aec9ee2f2f4944a67f757e7351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2HYTTX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGLskjnLu6moYum6Oi%2FNaV%2B14ymhkZFmf8IOXsi51Q7QAiB6qrCFsqfAnsOe9RsvFzZPUoK2TJ%2FPm47WfqzFEit3wCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm1P6qW0M%2BIS%2FY2rtKtwDISdzny4iLimV5iUeZ2XskSqQ29g3vTsXQDqE6AYdTg5S2RSMO84T03ZyuA9CiXfVbo%2BtaA%2BIU35zRTCUM8IeIHrQBwHCIB1XTK13FsZtmA1DV9IgslO9NonH6aXNlRwlpuCgWouMmJG84AERqQ0yt8dRrhD8O62rFWUI6sfuvXXuPjKp26nnvguGEdPQWPklgvedi64gLORkBr2IWBYFtmr6pyrCepcybZ5fRhwSEtzz2LXWNwuDL43JVZfV5ZOVqqLBeLlDkAwF87r6PRer%2BB4pkpMYpOqlydlrB2YGIBRJA746mV72gyP12Qgh6AjdekK%2BJ6X9L2l%2BvCUVRQYSMGVekPzAnOcEcxPUuaiWXZ9w3A6tOJWMGOE1QOwPCHbikuqUB%2BVE%2Fc%2BFVskylfTWekzcvzuV49ZAuaZliY01otIpZijNwQc0lJ6tG0eV4IVQNy9bgaLM14pohBxSHmArBbdxnY77KzbIlyhW13R0LwUjiDfmdZnb5vJaouH9Ak6HuyuYCV1QJf5iXzQUXEdiyjDfCzzzXJgnAlVnipjOxVw%2Bii94tAebZLT9TcEaJ2vIuTe10dIH1OWhZZoPa6ZW1ia7cGp1F3g309Zqex2lX2j%2B1%2BODz9ol86LBHGkwn4OixAY6pgFRMwAGvkntFXMSiXiWQQYyO1N%2FG%2Bz5tbT9%2B%2FN4ht0AV5RpgwB7X1B2jzlmMbMeIE3E8fTxLKfWGIZlPa7%2BD5oQiF6YdrlfEfYUwDuyBpK8i%2FuA6%2FYuyPF6%2FYZX61iYk8gHBbMBi8nSE9xrZ3RrQnpfm8BRcqyGGpP6iI%2BVc58tv1i6qTIyXx3pFaWAdGB0Ic1OfSB6Xy4vRiO1ZNer2bnCgGhcAWaS&X-Amz-Signature=1dc884f58ca2a70336af7712d69a1c867c9cb690b790771a166a98d03b5e284e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
