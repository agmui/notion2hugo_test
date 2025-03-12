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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RONDL3D%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIE36u8n01aPSGbtEiIjcIvfLLb16ANHFKItLEb1CgpU0AiEA3fW%2FuA1JuQaj%2F4mKSDZ5oDXjH7dejQSltA3ek%2BUDAQUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7YUH3i5xdqXH6uVSrcA9K%2FhQ5%2FSD2zE2HoVjR2O9PRs4P58b3xuhfoYpXzirIlrJCPPXhMJU61R05Jy9ZOjCdNEzo1wYYzrosZc5DzCHetQ4JjbUHVLvMXzy3IdyiL4ukmlqAHezhF7IRQGKYW4XnaG3oxLWIGX8%2B8kzZHnfRHdGDM9G1dyfECKlJvlm2ewlZi8VaQA3QZXMs%2BT1e98BL5IzPlJta9%2FsY77evB5GBYCLo8jl%2BKex2NuyJ5s1N6PRddetvD2uS0G0kAnFmyfJkaoBKDQ7r6Lj477i69kTjDMH03dQZXWiLkJmGzpnwuzdaLY4rI83EQoXN2jLrrkQOSOySlBcRnGpAFRetFDMh6QcMATH0wqDhq5T54DhFL0ZKLS79CA6BqzzX1vid%2BoTnlYCh40G%2B8HkbiEht%2BwbB9qjRFTiOS%2FiHdP4qgWGFbzh6MbzMoZlvFVDsyx3G77RvnmSgHV1pWfHjVyfq49iPKa5HMzc2Kb113BrR9Qq5%2FtlTncgpjuEqv00aCGgwr85yFaD8JxR0k%2FD1t5YmrJv%2F5%2BYAX%2FqHrjOvX%2F%2Bk4dp8ITJmJKjnEJSUyiqzNRjc9Qou1idH0dwFjmP%2FpvwqMCzE%2Ffa1EDps7%2FFqMerMVXJiDK5c3UA4tVL%2FhlX2LMKycxb4GOqUB5OoeNo2XBuUqJ09%2BN6Z9C%2BCsxEe5869kRL7u7z4jN8AdEPxuJxHfuj9kPnj866WT8H0rHKfrLqo%2BucvBUTDK3s%2BFppsJ8liPy78UfFYO6ohtBtxe%2BQk33IYhOcwfu%2BlEzvpNZqs2EmyrXjQsd4JK7Ih195aaDYPs8%2F%2BzMr79AOGleFrmk9Ins0OSIRVHAdZ3EuayVVrlmkRDfDbL%2Fg%2FomIxmcKOl&X-Amz-Signature=baccd8397229ddaa4a58cd3604e6ba4db4de543761ab702eb2ef126b0fb7bb15&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RONDL3D%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIE36u8n01aPSGbtEiIjcIvfLLb16ANHFKItLEb1CgpU0AiEA3fW%2FuA1JuQaj%2F4mKSDZ5oDXjH7dejQSltA3ek%2BUDAQUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7YUH3i5xdqXH6uVSrcA9K%2FhQ5%2FSD2zE2HoVjR2O9PRs4P58b3xuhfoYpXzirIlrJCPPXhMJU61R05Jy9ZOjCdNEzo1wYYzrosZc5DzCHetQ4JjbUHVLvMXzy3IdyiL4ukmlqAHezhF7IRQGKYW4XnaG3oxLWIGX8%2B8kzZHnfRHdGDM9G1dyfECKlJvlm2ewlZi8VaQA3QZXMs%2BT1e98BL5IzPlJta9%2FsY77evB5GBYCLo8jl%2BKex2NuyJ5s1N6PRddetvD2uS0G0kAnFmyfJkaoBKDQ7r6Lj477i69kTjDMH03dQZXWiLkJmGzpnwuzdaLY4rI83EQoXN2jLrrkQOSOySlBcRnGpAFRetFDMh6QcMATH0wqDhq5T54DhFL0ZKLS79CA6BqzzX1vid%2BoTnlYCh40G%2B8HkbiEht%2BwbB9qjRFTiOS%2FiHdP4qgWGFbzh6MbzMoZlvFVDsyx3G77RvnmSgHV1pWfHjVyfq49iPKa5HMzc2Kb113BrR9Qq5%2FtlTncgpjuEqv00aCGgwr85yFaD8JxR0k%2FD1t5YmrJv%2F5%2BYAX%2FqHrjOvX%2F%2Bk4dp8ITJmJKjnEJSUyiqzNRjc9Qou1idH0dwFjmP%2FpvwqMCzE%2Ffa1EDps7%2FFqMerMVXJiDK5c3UA4tVL%2FhlX2LMKycxb4GOqUB5OoeNo2XBuUqJ09%2BN6Z9C%2BCsxEe5869kRL7u7z4jN8AdEPxuJxHfuj9kPnj866WT8H0rHKfrLqo%2BucvBUTDK3s%2BFppsJ8liPy78UfFYO6ohtBtxe%2BQk33IYhOcwfu%2BlEzvpNZqs2EmyrXjQsd4JK7Ih195aaDYPs8%2F%2BzMr79AOGleFrmk9Ins0OSIRVHAdZ3EuayVVrlmkRDfDbL%2Fg%2FomIxmcKOl&X-Amz-Signature=ee0418d78c9828c24b339a34fb5884e8f83403c88e414973ef96bcadb18d2af9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RONDL3D%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIE36u8n01aPSGbtEiIjcIvfLLb16ANHFKItLEb1CgpU0AiEA3fW%2FuA1JuQaj%2F4mKSDZ5oDXjH7dejQSltA3ek%2BUDAQUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7YUH3i5xdqXH6uVSrcA9K%2FhQ5%2FSD2zE2HoVjR2O9PRs4P58b3xuhfoYpXzirIlrJCPPXhMJU61R05Jy9ZOjCdNEzo1wYYzrosZc5DzCHetQ4JjbUHVLvMXzy3IdyiL4ukmlqAHezhF7IRQGKYW4XnaG3oxLWIGX8%2B8kzZHnfRHdGDM9G1dyfECKlJvlm2ewlZi8VaQA3QZXMs%2BT1e98BL5IzPlJta9%2FsY77evB5GBYCLo8jl%2BKex2NuyJ5s1N6PRddetvD2uS0G0kAnFmyfJkaoBKDQ7r6Lj477i69kTjDMH03dQZXWiLkJmGzpnwuzdaLY4rI83EQoXN2jLrrkQOSOySlBcRnGpAFRetFDMh6QcMATH0wqDhq5T54DhFL0ZKLS79CA6BqzzX1vid%2BoTnlYCh40G%2B8HkbiEht%2BwbB9qjRFTiOS%2FiHdP4qgWGFbzh6MbzMoZlvFVDsyx3G77RvnmSgHV1pWfHjVyfq49iPKa5HMzc2Kb113BrR9Qq5%2FtlTncgpjuEqv00aCGgwr85yFaD8JxR0k%2FD1t5YmrJv%2F5%2BYAX%2FqHrjOvX%2F%2Bk4dp8ITJmJKjnEJSUyiqzNRjc9Qou1idH0dwFjmP%2FpvwqMCzE%2Ffa1EDps7%2FFqMerMVXJiDK5c3UA4tVL%2FhlX2LMKycxb4GOqUB5OoeNo2XBuUqJ09%2BN6Z9C%2BCsxEe5869kRL7u7z4jN8AdEPxuJxHfuj9kPnj866WT8H0rHKfrLqo%2BucvBUTDK3s%2BFppsJ8liPy78UfFYO6ohtBtxe%2BQk33IYhOcwfu%2BlEzvpNZqs2EmyrXjQsd4JK7Ih195aaDYPs8%2F%2BzMr79AOGleFrmk9Ins0OSIRVHAdZ3EuayVVrlmkRDfDbL%2Fg%2FomIxmcKOl&X-Amz-Signature=e27bbca8059b3767248c5e105546665061a42841700349323f9f6108481347ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RONDL3D%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIE36u8n01aPSGbtEiIjcIvfLLb16ANHFKItLEb1CgpU0AiEA3fW%2FuA1JuQaj%2F4mKSDZ5oDXjH7dejQSltA3ek%2BUDAQUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7YUH3i5xdqXH6uVSrcA9K%2FhQ5%2FSD2zE2HoVjR2O9PRs4P58b3xuhfoYpXzirIlrJCPPXhMJU61R05Jy9ZOjCdNEzo1wYYzrosZc5DzCHetQ4JjbUHVLvMXzy3IdyiL4ukmlqAHezhF7IRQGKYW4XnaG3oxLWIGX8%2B8kzZHnfRHdGDM9G1dyfECKlJvlm2ewlZi8VaQA3QZXMs%2BT1e98BL5IzPlJta9%2FsY77evB5GBYCLo8jl%2BKex2NuyJ5s1N6PRddetvD2uS0G0kAnFmyfJkaoBKDQ7r6Lj477i69kTjDMH03dQZXWiLkJmGzpnwuzdaLY4rI83EQoXN2jLrrkQOSOySlBcRnGpAFRetFDMh6QcMATH0wqDhq5T54DhFL0ZKLS79CA6BqzzX1vid%2BoTnlYCh40G%2B8HkbiEht%2BwbB9qjRFTiOS%2FiHdP4qgWGFbzh6MbzMoZlvFVDsyx3G77RvnmSgHV1pWfHjVyfq49iPKa5HMzc2Kb113BrR9Qq5%2FtlTncgpjuEqv00aCGgwr85yFaD8JxR0k%2FD1t5YmrJv%2F5%2BYAX%2FqHrjOvX%2F%2Bk4dp8ITJmJKjnEJSUyiqzNRjc9Qou1idH0dwFjmP%2FpvwqMCzE%2Ffa1EDps7%2FFqMerMVXJiDK5c3UA4tVL%2FhlX2LMKycxb4GOqUB5OoeNo2XBuUqJ09%2BN6Z9C%2BCsxEe5869kRL7u7z4jN8AdEPxuJxHfuj9kPnj866WT8H0rHKfrLqo%2BucvBUTDK3s%2BFppsJ8liPy78UfFYO6ohtBtxe%2BQk33IYhOcwfu%2BlEzvpNZqs2EmyrXjQsd4JK7Ih195aaDYPs8%2F%2BzMr79AOGleFrmk9Ins0OSIRVHAdZ3EuayVVrlmkRDfDbL%2Fg%2FomIxmcKOl&X-Amz-Signature=6e73d3e4812246349b522b1df50c4fce284027e15ef70a0e8d6b8e35ebee769d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RONDL3D%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIE36u8n01aPSGbtEiIjcIvfLLb16ANHFKItLEb1CgpU0AiEA3fW%2FuA1JuQaj%2F4mKSDZ5oDXjH7dejQSltA3ek%2BUDAQUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7YUH3i5xdqXH6uVSrcA9K%2FhQ5%2FSD2zE2HoVjR2O9PRs4P58b3xuhfoYpXzirIlrJCPPXhMJU61R05Jy9ZOjCdNEzo1wYYzrosZc5DzCHetQ4JjbUHVLvMXzy3IdyiL4ukmlqAHezhF7IRQGKYW4XnaG3oxLWIGX8%2B8kzZHnfRHdGDM9G1dyfECKlJvlm2ewlZi8VaQA3QZXMs%2BT1e98BL5IzPlJta9%2FsY77evB5GBYCLo8jl%2BKex2NuyJ5s1N6PRddetvD2uS0G0kAnFmyfJkaoBKDQ7r6Lj477i69kTjDMH03dQZXWiLkJmGzpnwuzdaLY4rI83EQoXN2jLrrkQOSOySlBcRnGpAFRetFDMh6QcMATH0wqDhq5T54DhFL0ZKLS79CA6BqzzX1vid%2BoTnlYCh40G%2B8HkbiEht%2BwbB9qjRFTiOS%2FiHdP4qgWGFbzh6MbzMoZlvFVDsyx3G77RvnmSgHV1pWfHjVyfq49iPKa5HMzc2Kb113BrR9Qq5%2FtlTncgpjuEqv00aCGgwr85yFaD8JxR0k%2FD1t5YmrJv%2F5%2BYAX%2FqHrjOvX%2F%2Bk4dp8ITJmJKjnEJSUyiqzNRjc9Qou1idH0dwFjmP%2FpvwqMCzE%2Ffa1EDps7%2FFqMerMVXJiDK5c3UA4tVL%2FhlX2LMKycxb4GOqUB5OoeNo2XBuUqJ09%2BN6Z9C%2BCsxEe5869kRL7u7z4jN8AdEPxuJxHfuj9kPnj866WT8H0rHKfrLqo%2BucvBUTDK3s%2BFppsJ8liPy78UfFYO6ohtBtxe%2BQk33IYhOcwfu%2BlEzvpNZqs2EmyrXjQsd4JK7Ih195aaDYPs8%2F%2BzMr79AOGleFrmk9Ins0OSIRVHAdZ3EuayVVrlmkRDfDbL%2Fg%2FomIxmcKOl&X-Amz-Signature=5030e0e48fbb0e15339d1176e4cd5ee5cd67d5ac660630d960d080564df9c307&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
