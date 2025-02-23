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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FTUXXGD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYKcAH1XY6BLC0dJcb6O0QzzZVXrtmLfMgvxUb%2BkovGAiB52JAorlT7w8JysbgAAnplb5zeK%2BpMqztVaNEYD5YK3SqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOKyCwAeP9OLk0gpfKtwDwXViyukT%2Bf5eze6yRiP%2FFoNgim2A1nznlr1Ct7bZ4cAjNOBqnx6jagQfaPr2ZdAWGvRXCrPmEj0ECuVVOIpNeHIFCvLxZtxPio0ShYepKjaHORSQuM4XbXh4jV22cV7Twj2v7Hwa2eT3CnSmPt1LY%2BCngheULj2703SvkyJXUhmnR2s9HNxBMtdmgQJM%2FMaZGYD6901R%2Bldf4Ign8YZiyH8qh6oMnMhVmgff2id8S1bSsFkmP%2Fvn4aKgUXjCFUD9EYQEBdIsg11Aznv1GETSIBHInjvOa7VRrBADc6pFc0vLiGCnqRX3PAe173YhA6TVukdfLEHQBcRd5IQaM3xLB8Z0Aoq342jwtIkfkYUN9MbNlj8uNCM5PAj2i1mdnrfpCNIo3u9fii1pCUnqRHB%2BK7JDL8kzQ36W%2FvY2Nhd0WQKuiKMBc%2BKqZ2bn%2B%2BCk8K%2FYCOuOu0e52nShCv1Sj6DHrvAfEtb0%2FOg9X%2FRvJsbGfSlC%2FK4rb124jLT6pDlIyJXdZEnAT3Wyev6a2omvLE8hD7F3jGjabGg8e6ZLgQYSqeUPVaTQ0OwR1uxNu0JKOTCxSyq9N1DbYsLWqrx9AhinkqJrXYs1qmy97kPKlK19AEijRwKU%2BZSJ2FI0m3IwkLTpvQY6pgGrrDmsReXsJryID8eCh7l20Ev7lVkbYgIHRsJiI7Qwa3m6gHCqOorJAUFcpRktW30eKu8t%2FJ%2FF6ZJo6a1TwmZbQs3M5Dj8Z5yrgWqA9Tyqgv1lduiXwu5D%2BP1Uy%2FwIc20u3fOIdOvu2r0ai42PhYQF9ZMPLKE%2BigMefD7ZpqDF4mgVb%2FQ2kTBWuOVKmzWXdgMj%2BLUfym7r4E5E3bYvpqK9W6V0WMp%2F&X-Amz-Signature=083fecdc8bdd1a216ce98999ad2b7dfde6c7968b8d978d680cfbfcbdf19f9e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FTUXXGD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYKcAH1XY6BLC0dJcb6O0QzzZVXrtmLfMgvxUb%2BkovGAiB52JAorlT7w8JysbgAAnplb5zeK%2BpMqztVaNEYD5YK3SqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOKyCwAeP9OLk0gpfKtwDwXViyukT%2Bf5eze6yRiP%2FFoNgim2A1nznlr1Ct7bZ4cAjNOBqnx6jagQfaPr2ZdAWGvRXCrPmEj0ECuVVOIpNeHIFCvLxZtxPio0ShYepKjaHORSQuM4XbXh4jV22cV7Twj2v7Hwa2eT3CnSmPt1LY%2BCngheULj2703SvkyJXUhmnR2s9HNxBMtdmgQJM%2FMaZGYD6901R%2Bldf4Ign8YZiyH8qh6oMnMhVmgff2id8S1bSsFkmP%2Fvn4aKgUXjCFUD9EYQEBdIsg11Aznv1GETSIBHInjvOa7VRrBADc6pFc0vLiGCnqRX3PAe173YhA6TVukdfLEHQBcRd5IQaM3xLB8Z0Aoq342jwtIkfkYUN9MbNlj8uNCM5PAj2i1mdnrfpCNIo3u9fii1pCUnqRHB%2BK7JDL8kzQ36W%2FvY2Nhd0WQKuiKMBc%2BKqZ2bn%2B%2BCk8K%2FYCOuOu0e52nShCv1Sj6DHrvAfEtb0%2FOg9X%2FRvJsbGfSlC%2FK4rb124jLT6pDlIyJXdZEnAT3Wyev6a2omvLE8hD7F3jGjabGg8e6ZLgQYSqeUPVaTQ0OwR1uxNu0JKOTCxSyq9N1DbYsLWqrx9AhinkqJrXYs1qmy97kPKlK19AEijRwKU%2BZSJ2FI0m3IwkLTpvQY6pgGrrDmsReXsJryID8eCh7l20Ev7lVkbYgIHRsJiI7Qwa3m6gHCqOorJAUFcpRktW30eKu8t%2FJ%2FF6ZJo6a1TwmZbQs3M5Dj8Z5yrgWqA9Tyqgv1lduiXwu5D%2BP1Uy%2FwIc20u3fOIdOvu2r0ai42PhYQF9ZMPLKE%2BigMefD7ZpqDF4mgVb%2FQ2kTBWuOVKmzWXdgMj%2BLUfym7r4E5E3bYvpqK9W6V0WMp%2F&X-Amz-Signature=a5348b66a493462dc464377e676a418e515889d8eb34338d9fd993c517e05832&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FTUXXGD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYKcAH1XY6BLC0dJcb6O0QzzZVXrtmLfMgvxUb%2BkovGAiB52JAorlT7w8JysbgAAnplb5zeK%2BpMqztVaNEYD5YK3SqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOKyCwAeP9OLk0gpfKtwDwXViyukT%2Bf5eze6yRiP%2FFoNgim2A1nznlr1Ct7bZ4cAjNOBqnx6jagQfaPr2ZdAWGvRXCrPmEj0ECuVVOIpNeHIFCvLxZtxPio0ShYepKjaHORSQuM4XbXh4jV22cV7Twj2v7Hwa2eT3CnSmPt1LY%2BCngheULj2703SvkyJXUhmnR2s9HNxBMtdmgQJM%2FMaZGYD6901R%2Bldf4Ign8YZiyH8qh6oMnMhVmgff2id8S1bSsFkmP%2Fvn4aKgUXjCFUD9EYQEBdIsg11Aznv1GETSIBHInjvOa7VRrBADc6pFc0vLiGCnqRX3PAe173YhA6TVukdfLEHQBcRd5IQaM3xLB8Z0Aoq342jwtIkfkYUN9MbNlj8uNCM5PAj2i1mdnrfpCNIo3u9fii1pCUnqRHB%2BK7JDL8kzQ36W%2FvY2Nhd0WQKuiKMBc%2BKqZ2bn%2B%2BCk8K%2FYCOuOu0e52nShCv1Sj6DHrvAfEtb0%2FOg9X%2FRvJsbGfSlC%2FK4rb124jLT6pDlIyJXdZEnAT3Wyev6a2omvLE8hD7F3jGjabGg8e6ZLgQYSqeUPVaTQ0OwR1uxNu0JKOTCxSyq9N1DbYsLWqrx9AhinkqJrXYs1qmy97kPKlK19AEijRwKU%2BZSJ2FI0m3IwkLTpvQY6pgGrrDmsReXsJryID8eCh7l20Ev7lVkbYgIHRsJiI7Qwa3m6gHCqOorJAUFcpRktW30eKu8t%2FJ%2FF6ZJo6a1TwmZbQs3M5Dj8Z5yrgWqA9Tyqgv1lduiXwu5D%2BP1Uy%2FwIc20u3fOIdOvu2r0ai42PhYQF9ZMPLKE%2BigMefD7ZpqDF4mgVb%2FQ2kTBWuOVKmzWXdgMj%2BLUfym7r4E5E3bYvpqK9W6V0WMp%2F&X-Amz-Signature=9376b998a2d2519fa748e549f0a7ceec378e0cef5de31e363fd1eb13149221bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FTUXXGD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYKcAH1XY6BLC0dJcb6O0QzzZVXrtmLfMgvxUb%2BkovGAiB52JAorlT7w8JysbgAAnplb5zeK%2BpMqztVaNEYD5YK3SqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOKyCwAeP9OLk0gpfKtwDwXViyukT%2Bf5eze6yRiP%2FFoNgim2A1nznlr1Ct7bZ4cAjNOBqnx6jagQfaPr2ZdAWGvRXCrPmEj0ECuVVOIpNeHIFCvLxZtxPio0ShYepKjaHORSQuM4XbXh4jV22cV7Twj2v7Hwa2eT3CnSmPt1LY%2BCngheULj2703SvkyJXUhmnR2s9HNxBMtdmgQJM%2FMaZGYD6901R%2Bldf4Ign8YZiyH8qh6oMnMhVmgff2id8S1bSsFkmP%2Fvn4aKgUXjCFUD9EYQEBdIsg11Aznv1GETSIBHInjvOa7VRrBADc6pFc0vLiGCnqRX3PAe173YhA6TVukdfLEHQBcRd5IQaM3xLB8Z0Aoq342jwtIkfkYUN9MbNlj8uNCM5PAj2i1mdnrfpCNIo3u9fii1pCUnqRHB%2BK7JDL8kzQ36W%2FvY2Nhd0WQKuiKMBc%2BKqZ2bn%2B%2BCk8K%2FYCOuOu0e52nShCv1Sj6DHrvAfEtb0%2FOg9X%2FRvJsbGfSlC%2FK4rb124jLT6pDlIyJXdZEnAT3Wyev6a2omvLE8hD7F3jGjabGg8e6ZLgQYSqeUPVaTQ0OwR1uxNu0JKOTCxSyq9N1DbYsLWqrx9AhinkqJrXYs1qmy97kPKlK19AEijRwKU%2BZSJ2FI0m3IwkLTpvQY6pgGrrDmsReXsJryID8eCh7l20Ev7lVkbYgIHRsJiI7Qwa3m6gHCqOorJAUFcpRktW30eKu8t%2FJ%2FF6ZJo6a1TwmZbQs3M5Dj8Z5yrgWqA9Tyqgv1lduiXwu5D%2BP1Uy%2FwIc20u3fOIdOvu2r0ai42PhYQF9ZMPLKE%2BigMefD7ZpqDF4mgVb%2FQ2kTBWuOVKmzWXdgMj%2BLUfym7r4E5E3bYvpqK9W6V0WMp%2F&X-Amz-Signature=18ad520de9c8eec0e758600c2697330994fa2e8461e72570c3a098a91e92c4f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FTUXXGD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYKcAH1XY6BLC0dJcb6O0QzzZVXrtmLfMgvxUb%2BkovGAiB52JAorlT7w8JysbgAAnplb5zeK%2BpMqztVaNEYD5YK3SqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOKyCwAeP9OLk0gpfKtwDwXViyukT%2Bf5eze6yRiP%2FFoNgim2A1nznlr1Ct7bZ4cAjNOBqnx6jagQfaPr2ZdAWGvRXCrPmEj0ECuVVOIpNeHIFCvLxZtxPio0ShYepKjaHORSQuM4XbXh4jV22cV7Twj2v7Hwa2eT3CnSmPt1LY%2BCngheULj2703SvkyJXUhmnR2s9HNxBMtdmgQJM%2FMaZGYD6901R%2Bldf4Ign8YZiyH8qh6oMnMhVmgff2id8S1bSsFkmP%2Fvn4aKgUXjCFUD9EYQEBdIsg11Aznv1GETSIBHInjvOa7VRrBADc6pFc0vLiGCnqRX3PAe173YhA6TVukdfLEHQBcRd5IQaM3xLB8Z0Aoq342jwtIkfkYUN9MbNlj8uNCM5PAj2i1mdnrfpCNIo3u9fii1pCUnqRHB%2BK7JDL8kzQ36W%2FvY2Nhd0WQKuiKMBc%2BKqZ2bn%2B%2BCk8K%2FYCOuOu0e52nShCv1Sj6DHrvAfEtb0%2FOg9X%2FRvJsbGfSlC%2FK4rb124jLT6pDlIyJXdZEnAT3Wyev6a2omvLE8hD7F3jGjabGg8e6ZLgQYSqeUPVaTQ0OwR1uxNu0JKOTCxSyq9N1DbYsLWqrx9AhinkqJrXYs1qmy97kPKlK19AEijRwKU%2BZSJ2FI0m3IwkLTpvQY6pgGrrDmsReXsJryID8eCh7l20Ev7lVkbYgIHRsJiI7Qwa3m6gHCqOorJAUFcpRktW30eKu8t%2FJ%2FF6ZJo6a1TwmZbQs3M5Dj8Z5yrgWqA9Tyqgv1lduiXwu5D%2BP1Uy%2FwIc20u3fOIdOvu2r0ai42PhYQF9ZMPLKE%2BigMefD7ZpqDF4mgVb%2FQ2kTBWuOVKmzWXdgMj%2BLUfym7r4E5E3bYvpqK9W6V0WMp%2F&X-Amz-Signature=e2768bddfaef6fe521da25b3855ea66b919d80847c57703fe3f0f2e315fe59c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
