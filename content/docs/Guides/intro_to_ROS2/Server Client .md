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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WQH25P%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDnOq8bHM6yi%2FQeWY84dsceqgL3LmaICgQohRkYzuXpzQIhAKiUNxx1liWltnGh9B48tYE7ocQZu69mOdwDDcGqcyslKv8DCHsQABoMNjM3NDIzMTgzODA1IgzvNf9gpSX%2FTPSFmUoq3AOKgSlqRqsUBhAWrz5IBsUh4hyBOJ2aniTyfEnHCndT1Fiou1DcllUhDqOCpIvu%2BnO8l1unqF6QAMjZLW68Ik%2FUUWqGATWqAnSpM7zG5W4uReNW49JqbwEbrex83zmCj%2B6HNFOUpELJ2TZL1Jn7vfW6STB3GHV5O9LeNPRcz2a2K7p4Mivgo4tc1qgTiGt%2FZwE45FAFZpRAPF7E7p34BtoRkgBLH%2BEd%2BRTFymtO61hxd9noaZbconc%2Foun%2BPiH1nZaILgd1BFvPeSjgFa%2BUde3FxIT4%2Fordz%2BxJ7iySo7ZFrAQzhsD6aJuN4zAsKb32w5%2BkO9HEl4nQNmydw1Tr7m3qHvvsrYlnmTNW6DT%2BaK7ITHqeSHvV66bDZHOQ%2BE80wWEExmaQI6jCFNt1Kf6UGD69yYZpY9LVfiU%2BepUI9KMRDDfEo6kbAHhJObBJf4tRrnY%2F6fkNsztYToJtoGu%2F5NWhdc%2F3%2FvTyRUuC5kcRgA12noqScYoSWdrJ0LZZbwUp%2FIumL2aZM%2FxfI3LW%2FiB5%2FEXdtpfq27XwSlO%2FzoglsZ1pN966q2uDRMBE%2BY%2FoPiatBjj1k%2B5RYrNq0%2BRx4B0diYhqV0h%2BsL5deiA8neE79E1ge09S27DqkUCr64DpqDCEl7DDBjqkAWQatyFPW6N7rUMNW0X8K8xaxgryBSkPz6xKY%2Fb4Sc5vDkiPaAsmZzxZ%2FOzWC4qfZ8dqbboomNkiy3%2BOXTcuyrO0AwqrNNHDZiPvlgssrLWpks79bY%2BMGS0l5kx1x%2BqYsZ5iPfet86GZ4HU2Sn8445g%2FAmm9CX3mK0QihoHGc9HhRLNatgM5tQs6Bw%2B8yOTYrZl2IQY8nz2tAjaxt0OXZFqtzDga&X-Amz-Signature=354a77417c825dbcf4575ebda39cd6ea1fae216d0ac2be6ef5fd996c809dc96d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WQH25P%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDnOq8bHM6yi%2FQeWY84dsceqgL3LmaICgQohRkYzuXpzQIhAKiUNxx1liWltnGh9B48tYE7ocQZu69mOdwDDcGqcyslKv8DCHsQABoMNjM3NDIzMTgzODA1IgzvNf9gpSX%2FTPSFmUoq3AOKgSlqRqsUBhAWrz5IBsUh4hyBOJ2aniTyfEnHCndT1Fiou1DcllUhDqOCpIvu%2BnO8l1unqF6QAMjZLW68Ik%2FUUWqGATWqAnSpM7zG5W4uReNW49JqbwEbrex83zmCj%2B6HNFOUpELJ2TZL1Jn7vfW6STB3GHV5O9LeNPRcz2a2K7p4Mivgo4tc1qgTiGt%2FZwE45FAFZpRAPF7E7p34BtoRkgBLH%2BEd%2BRTFymtO61hxd9noaZbconc%2Foun%2BPiH1nZaILgd1BFvPeSjgFa%2BUde3FxIT4%2Fordz%2BxJ7iySo7ZFrAQzhsD6aJuN4zAsKb32w5%2BkO9HEl4nQNmydw1Tr7m3qHvvsrYlnmTNW6DT%2BaK7ITHqeSHvV66bDZHOQ%2BE80wWEExmaQI6jCFNt1Kf6UGD69yYZpY9LVfiU%2BepUI9KMRDDfEo6kbAHhJObBJf4tRrnY%2F6fkNsztYToJtoGu%2F5NWhdc%2F3%2FvTyRUuC5kcRgA12noqScYoSWdrJ0LZZbwUp%2FIumL2aZM%2FxfI3LW%2FiB5%2FEXdtpfq27XwSlO%2FzoglsZ1pN966q2uDRMBE%2BY%2FoPiatBjj1k%2B5RYrNq0%2BRx4B0diYhqV0h%2BsL5deiA8neE79E1ge09S27DqkUCr64DpqDCEl7DDBjqkAWQatyFPW6N7rUMNW0X8K8xaxgryBSkPz6xKY%2Fb4Sc5vDkiPaAsmZzxZ%2FOzWC4qfZ8dqbboomNkiy3%2BOXTcuyrO0AwqrNNHDZiPvlgssrLWpks79bY%2BMGS0l5kx1x%2BqYsZ5iPfet86GZ4HU2Sn8445g%2FAmm9CX3mK0QihoHGc9HhRLNatgM5tQs6Bw%2B8yOTYrZl2IQY8nz2tAjaxt0OXZFqtzDga&X-Amz-Signature=381ab5262f0413ba8f29769448f0afbc4f3b99aa4f5139c3aa806c4ac1e70668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WQH25P%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDnOq8bHM6yi%2FQeWY84dsceqgL3LmaICgQohRkYzuXpzQIhAKiUNxx1liWltnGh9B48tYE7ocQZu69mOdwDDcGqcyslKv8DCHsQABoMNjM3NDIzMTgzODA1IgzvNf9gpSX%2FTPSFmUoq3AOKgSlqRqsUBhAWrz5IBsUh4hyBOJ2aniTyfEnHCndT1Fiou1DcllUhDqOCpIvu%2BnO8l1unqF6QAMjZLW68Ik%2FUUWqGATWqAnSpM7zG5W4uReNW49JqbwEbrex83zmCj%2B6HNFOUpELJ2TZL1Jn7vfW6STB3GHV5O9LeNPRcz2a2K7p4Mivgo4tc1qgTiGt%2FZwE45FAFZpRAPF7E7p34BtoRkgBLH%2BEd%2BRTFymtO61hxd9noaZbconc%2Foun%2BPiH1nZaILgd1BFvPeSjgFa%2BUde3FxIT4%2Fordz%2BxJ7iySo7ZFrAQzhsD6aJuN4zAsKb32w5%2BkO9HEl4nQNmydw1Tr7m3qHvvsrYlnmTNW6DT%2BaK7ITHqeSHvV66bDZHOQ%2BE80wWEExmaQI6jCFNt1Kf6UGD69yYZpY9LVfiU%2BepUI9KMRDDfEo6kbAHhJObBJf4tRrnY%2F6fkNsztYToJtoGu%2F5NWhdc%2F3%2FvTyRUuC5kcRgA12noqScYoSWdrJ0LZZbwUp%2FIumL2aZM%2FxfI3LW%2FiB5%2FEXdtpfq27XwSlO%2FzoglsZ1pN966q2uDRMBE%2BY%2FoPiatBjj1k%2B5RYrNq0%2BRx4B0diYhqV0h%2BsL5deiA8neE79E1ge09S27DqkUCr64DpqDCEl7DDBjqkAWQatyFPW6N7rUMNW0X8K8xaxgryBSkPz6xKY%2Fb4Sc5vDkiPaAsmZzxZ%2FOzWC4qfZ8dqbboomNkiy3%2BOXTcuyrO0AwqrNNHDZiPvlgssrLWpks79bY%2BMGS0l5kx1x%2BqYsZ5iPfet86GZ4HU2Sn8445g%2FAmm9CX3mK0QihoHGc9HhRLNatgM5tQs6Bw%2B8yOTYrZl2IQY8nz2tAjaxt0OXZFqtzDga&X-Amz-Signature=287bf0341686ec5f6df357c05997ed5e2e323f239c24de7957e42f0b3174bb8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WQH25P%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDnOq8bHM6yi%2FQeWY84dsceqgL3LmaICgQohRkYzuXpzQIhAKiUNxx1liWltnGh9B48tYE7ocQZu69mOdwDDcGqcyslKv8DCHsQABoMNjM3NDIzMTgzODA1IgzvNf9gpSX%2FTPSFmUoq3AOKgSlqRqsUBhAWrz5IBsUh4hyBOJ2aniTyfEnHCndT1Fiou1DcllUhDqOCpIvu%2BnO8l1unqF6QAMjZLW68Ik%2FUUWqGATWqAnSpM7zG5W4uReNW49JqbwEbrex83zmCj%2B6HNFOUpELJ2TZL1Jn7vfW6STB3GHV5O9LeNPRcz2a2K7p4Mivgo4tc1qgTiGt%2FZwE45FAFZpRAPF7E7p34BtoRkgBLH%2BEd%2BRTFymtO61hxd9noaZbconc%2Foun%2BPiH1nZaILgd1BFvPeSjgFa%2BUde3FxIT4%2Fordz%2BxJ7iySo7ZFrAQzhsD6aJuN4zAsKb32w5%2BkO9HEl4nQNmydw1Tr7m3qHvvsrYlnmTNW6DT%2BaK7ITHqeSHvV66bDZHOQ%2BE80wWEExmaQI6jCFNt1Kf6UGD69yYZpY9LVfiU%2BepUI9KMRDDfEo6kbAHhJObBJf4tRrnY%2F6fkNsztYToJtoGu%2F5NWhdc%2F3%2FvTyRUuC5kcRgA12noqScYoSWdrJ0LZZbwUp%2FIumL2aZM%2FxfI3LW%2FiB5%2FEXdtpfq27XwSlO%2FzoglsZ1pN966q2uDRMBE%2BY%2FoPiatBjj1k%2B5RYrNq0%2BRx4B0diYhqV0h%2BsL5deiA8neE79E1ge09S27DqkUCr64DpqDCEl7DDBjqkAWQatyFPW6N7rUMNW0X8K8xaxgryBSkPz6xKY%2Fb4Sc5vDkiPaAsmZzxZ%2FOzWC4qfZ8dqbboomNkiy3%2BOXTcuyrO0AwqrNNHDZiPvlgssrLWpks79bY%2BMGS0l5kx1x%2BqYsZ5iPfet86GZ4HU2Sn8445g%2FAmm9CX3mK0QihoHGc9HhRLNatgM5tQs6Bw%2B8yOTYrZl2IQY8nz2tAjaxt0OXZFqtzDga&X-Amz-Signature=22888a66993caff0d1a815daf1868934cbe9d7fa5c032deb73135171d86db779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WQH25P%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDnOq8bHM6yi%2FQeWY84dsceqgL3LmaICgQohRkYzuXpzQIhAKiUNxx1liWltnGh9B48tYE7ocQZu69mOdwDDcGqcyslKv8DCHsQABoMNjM3NDIzMTgzODA1IgzvNf9gpSX%2FTPSFmUoq3AOKgSlqRqsUBhAWrz5IBsUh4hyBOJ2aniTyfEnHCndT1Fiou1DcllUhDqOCpIvu%2BnO8l1unqF6QAMjZLW68Ik%2FUUWqGATWqAnSpM7zG5W4uReNW49JqbwEbrex83zmCj%2B6HNFOUpELJ2TZL1Jn7vfW6STB3GHV5O9LeNPRcz2a2K7p4Mivgo4tc1qgTiGt%2FZwE45FAFZpRAPF7E7p34BtoRkgBLH%2BEd%2BRTFymtO61hxd9noaZbconc%2Foun%2BPiH1nZaILgd1BFvPeSjgFa%2BUde3FxIT4%2Fordz%2BxJ7iySo7ZFrAQzhsD6aJuN4zAsKb32w5%2BkO9HEl4nQNmydw1Tr7m3qHvvsrYlnmTNW6DT%2BaK7ITHqeSHvV66bDZHOQ%2BE80wWEExmaQI6jCFNt1Kf6UGD69yYZpY9LVfiU%2BepUI9KMRDDfEo6kbAHhJObBJf4tRrnY%2F6fkNsztYToJtoGu%2F5NWhdc%2F3%2FvTyRUuC5kcRgA12noqScYoSWdrJ0LZZbwUp%2FIumL2aZM%2FxfI3LW%2FiB5%2FEXdtpfq27XwSlO%2FzoglsZ1pN966q2uDRMBE%2BY%2FoPiatBjj1k%2B5RYrNq0%2BRx4B0diYhqV0h%2BsL5deiA8neE79E1ge09S27DqkUCr64DpqDCEl7DDBjqkAWQatyFPW6N7rUMNW0X8K8xaxgryBSkPz6xKY%2Fb4Sc5vDkiPaAsmZzxZ%2FOzWC4qfZ8dqbboomNkiy3%2BOXTcuyrO0AwqrNNHDZiPvlgssrLWpks79bY%2BMGS0l5kx1x%2BqYsZ5iPfet86GZ4HU2Sn8445g%2FAmm9CX3mK0QihoHGc9HhRLNatgM5tQs6Bw%2B8yOTYrZl2IQY8nz2tAjaxt0OXZFqtzDga&X-Amz-Signature=72c6a27e1ff6285193228a661952992c20d0e618d800e7577e9b0ea4b4ec68cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
