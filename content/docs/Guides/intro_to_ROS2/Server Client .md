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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363BIPBL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm133JGCLHk5LSH5Oy6WaZ%2B9tytvNr6EriYxIv1v4bfQIgEsX3WJreiyJPQRNcpqcsbHIQr9fUAbDAede0zALITj8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMQpwR3gBwt8VBMMhyrcA3pwBA39IuPkseuq59wCR4N%2BIjUtWQrKx6r501L3o7BwKAQsEt%2FsNFdlmVxskqOgMlscMF7ZoEWlJn6FsBEa0vp3QgMtcQX6bxb0nG1H8tHHC1R0mNVW%2BAdL5OqjiXRS3YaZq9IkVLtkJW2LzCF3ItT4G3nEPSVwGQnZE4UdDaPCU2HreCGUfr9U20aI7BFT0jLeroar6eWT0gsXfNkFNu8evLnPUno1kcvFhsEQX0%2F0fNB%2BjR2fsmsrP7Co6NlWzh44%2Bbk849RgbHUc883q2NMaa6qXhxnNsjm5p6WcLsejpS6sAum1Xb97KToCcUDrLjv9KKn6kNIUMYlVrUjqKD9ANyVCEO3yFryzaottWkez63BUZdpO7bPjR4wqISW5cdEbDU2lF%2BnsOpraev6%2BWD3KlPUOF5OWgE3YbXZPOw%2FD0urcd5E0a5DfUjKpKAttTWRRxoetqShv7SQg0WKKexPoa9T3RSvu9OeRNiMa593IDrlIlQ9kt1phi%2FsDRKy4JA4x2DFUxfDxefOH8Mmlp38Wm3oQMw0dfk%2F%2FYFQCo%2BQAZo1n1SflEeZqpT1394LpJoqAEfWVOn61iYHKTW2ctf3jBwYDW2kyUOYXMWrf4ocx7MgEfln9N8v%2BMZJfMOj9rcAGOqUB%2B9v4f1N5neBR0ZuJykd5oyz1wJHcG8CxLqdYQlvcndgKHt70jL5Y3IRV3W0k5x0ohc3n694GcrKexaDkSZOAW%2FE%2Bn%2BEWjcrTk2OvlNzZ1gFP13Sxk5kBd7B0gw3bxRQKHq%2BSnloA0FTYQ7C%2FtfDdGEAv0G7DzDK9miqrNOVLSngYxb%2Btcmp2CjtUEmGO5QsAIY5PdLAmmi92dsbBNMgL%2B73eyxQN&X-Amz-Signature=e88a4210bfbd6d9fb4df140ab3ab50951f8f1e3fbc2b7a7d47149deeeeb9ae84&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363BIPBL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm133JGCLHk5LSH5Oy6WaZ%2B9tytvNr6EriYxIv1v4bfQIgEsX3WJreiyJPQRNcpqcsbHIQr9fUAbDAede0zALITj8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMQpwR3gBwt8VBMMhyrcA3pwBA39IuPkseuq59wCR4N%2BIjUtWQrKx6r501L3o7BwKAQsEt%2FsNFdlmVxskqOgMlscMF7ZoEWlJn6FsBEa0vp3QgMtcQX6bxb0nG1H8tHHC1R0mNVW%2BAdL5OqjiXRS3YaZq9IkVLtkJW2LzCF3ItT4G3nEPSVwGQnZE4UdDaPCU2HreCGUfr9U20aI7BFT0jLeroar6eWT0gsXfNkFNu8evLnPUno1kcvFhsEQX0%2F0fNB%2BjR2fsmsrP7Co6NlWzh44%2Bbk849RgbHUc883q2NMaa6qXhxnNsjm5p6WcLsejpS6sAum1Xb97KToCcUDrLjv9KKn6kNIUMYlVrUjqKD9ANyVCEO3yFryzaottWkez63BUZdpO7bPjR4wqISW5cdEbDU2lF%2BnsOpraev6%2BWD3KlPUOF5OWgE3YbXZPOw%2FD0urcd5E0a5DfUjKpKAttTWRRxoetqShv7SQg0WKKexPoa9T3RSvu9OeRNiMa593IDrlIlQ9kt1phi%2FsDRKy4JA4x2DFUxfDxefOH8Mmlp38Wm3oQMw0dfk%2F%2FYFQCo%2BQAZo1n1SflEeZqpT1394LpJoqAEfWVOn61iYHKTW2ctf3jBwYDW2kyUOYXMWrf4ocx7MgEfln9N8v%2BMZJfMOj9rcAGOqUB%2B9v4f1N5neBR0ZuJykd5oyz1wJHcG8CxLqdYQlvcndgKHt70jL5Y3IRV3W0k5x0ohc3n694GcrKexaDkSZOAW%2FE%2Bn%2BEWjcrTk2OvlNzZ1gFP13Sxk5kBd7B0gw3bxRQKHq%2BSnloA0FTYQ7C%2FtfDdGEAv0G7DzDK9miqrNOVLSngYxb%2Btcmp2CjtUEmGO5QsAIY5PdLAmmi92dsbBNMgL%2B73eyxQN&X-Amz-Signature=11d25a1a1cf9d730b230bb55eb22940764cded94b26dbcd16caf93e12de8dd3a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363BIPBL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm133JGCLHk5LSH5Oy6WaZ%2B9tytvNr6EriYxIv1v4bfQIgEsX3WJreiyJPQRNcpqcsbHIQr9fUAbDAede0zALITj8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMQpwR3gBwt8VBMMhyrcA3pwBA39IuPkseuq59wCR4N%2BIjUtWQrKx6r501L3o7BwKAQsEt%2FsNFdlmVxskqOgMlscMF7ZoEWlJn6FsBEa0vp3QgMtcQX6bxb0nG1H8tHHC1R0mNVW%2BAdL5OqjiXRS3YaZq9IkVLtkJW2LzCF3ItT4G3nEPSVwGQnZE4UdDaPCU2HreCGUfr9U20aI7BFT0jLeroar6eWT0gsXfNkFNu8evLnPUno1kcvFhsEQX0%2F0fNB%2BjR2fsmsrP7Co6NlWzh44%2Bbk849RgbHUc883q2NMaa6qXhxnNsjm5p6WcLsejpS6sAum1Xb97KToCcUDrLjv9KKn6kNIUMYlVrUjqKD9ANyVCEO3yFryzaottWkez63BUZdpO7bPjR4wqISW5cdEbDU2lF%2BnsOpraev6%2BWD3KlPUOF5OWgE3YbXZPOw%2FD0urcd5E0a5DfUjKpKAttTWRRxoetqShv7SQg0WKKexPoa9T3RSvu9OeRNiMa593IDrlIlQ9kt1phi%2FsDRKy4JA4x2DFUxfDxefOH8Mmlp38Wm3oQMw0dfk%2F%2FYFQCo%2BQAZo1n1SflEeZqpT1394LpJoqAEfWVOn61iYHKTW2ctf3jBwYDW2kyUOYXMWrf4ocx7MgEfln9N8v%2BMZJfMOj9rcAGOqUB%2B9v4f1N5neBR0ZuJykd5oyz1wJHcG8CxLqdYQlvcndgKHt70jL5Y3IRV3W0k5x0ohc3n694GcrKexaDkSZOAW%2FE%2Bn%2BEWjcrTk2OvlNzZ1gFP13Sxk5kBd7B0gw3bxRQKHq%2BSnloA0FTYQ7C%2FtfDdGEAv0G7DzDK9miqrNOVLSngYxb%2Btcmp2CjtUEmGO5QsAIY5PdLAmmi92dsbBNMgL%2B73eyxQN&X-Amz-Signature=8b2f6e39405de0bb83f835a0f6ed41d926ead38a9c42b2abc9051abae51ce597&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363BIPBL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm133JGCLHk5LSH5Oy6WaZ%2B9tytvNr6EriYxIv1v4bfQIgEsX3WJreiyJPQRNcpqcsbHIQr9fUAbDAede0zALITj8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMQpwR3gBwt8VBMMhyrcA3pwBA39IuPkseuq59wCR4N%2BIjUtWQrKx6r501L3o7BwKAQsEt%2FsNFdlmVxskqOgMlscMF7ZoEWlJn6FsBEa0vp3QgMtcQX6bxb0nG1H8tHHC1R0mNVW%2BAdL5OqjiXRS3YaZq9IkVLtkJW2LzCF3ItT4G3nEPSVwGQnZE4UdDaPCU2HreCGUfr9U20aI7BFT0jLeroar6eWT0gsXfNkFNu8evLnPUno1kcvFhsEQX0%2F0fNB%2BjR2fsmsrP7Co6NlWzh44%2Bbk849RgbHUc883q2NMaa6qXhxnNsjm5p6WcLsejpS6sAum1Xb97KToCcUDrLjv9KKn6kNIUMYlVrUjqKD9ANyVCEO3yFryzaottWkez63BUZdpO7bPjR4wqISW5cdEbDU2lF%2BnsOpraev6%2BWD3KlPUOF5OWgE3YbXZPOw%2FD0urcd5E0a5DfUjKpKAttTWRRxoetqShv7SQg0WKKexPoa9T3RSvu9OeRNiMa593IDrlIlQ9kt1phi%2FsDRKy4JA4x2DFUxfDxefOH8Mmlp38Wm3oQMw0dfk%2F%2FYFQCo%2BQAZo1n1SflEeZqpT1394LpJoqAEfWVOn61iYHKTW2ctf3jBwYDW2kyUOYXMWrf4ocx7MgEfln9N8v%2BMZJfMOj9rcAGOqUB%2B9v4f1N5neBR0ZuJykd5oyz1wJHcG8CxLqdYQlvcndgKHt70jL5Y3IRV3W0k5x0ohc3n694GcrKexaDkSZOAW%2FE%2Bn%2BEWjcrTk2OvlNzZ1gFP13Sxk5kBd7B0gw3bxRQKHq%2BSnloA0FTYQ7C%2FtfDdGEAv0G7DzDK9miqrNOVLSngYxb%2Btcmp2CjtUEmGO5QsAIY5PdLAmmi92dsbBNMgL%2B73eyxQN&X-Amz-Signature=8f9eb85205c792141196b16aec48518ad732a7c4b0a5665e06d75f49f22b9d96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363BIPBL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm133JGCLHk5LSH5Oy6WaZ%2B9tytvNr6EriYxIv1v4bfQIgEsX3WJreiyJPQRNcpqcsbHIQr9fUAbDAede0zALITj8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMQpwR3gBwt8VBMMhyrcA3pwBA39IuPkseuq59wCR4N%2BIjUtWQrKx6r501L3o7BwKAQsEt%2FsNFdlmVxskqOgMlscMF7ZoEWlJn6FsBEa0vp3QgMtcQX6bxb0nG1H8tHHC1R0mNVW%2BAdL5OqjiXRS3YaZq9IkVLtkJW2LzCF3ItT4G3nEPSVwGQnZE4UdDaPCU2HreCGUfr9U20aI7BFT0jLeroar6eWT0gsXfNkFNu8evLnPUno1kcvFhsEQX0%2F0fNB%2BjR2fsmsrP7Co6NlWzh44%2Bbk849RgbHUc883q2NMaa6qXhxnNsjm5p6WcLsejpS6sAum1Xb97KToCcUDrLjv9KKn6kNIUMYlVrUjqKD9ANyVCEO3yFryzaottWkez63BUZdpO7bPjR4wqISW5cdEbDU2lF%2BnsOpraev6%2BWD3KlPUOF5OWgE3YbXZPOw%2FD0urcd5E0a5DfUjKpKAttTWRRxoetqShv7SQg0WKKexPoa9T3RSvu9OeRNiMa593IDrlIlQ9kt1phi%2FsDRKy4JA4x2DFUxfDxefOH8Mmlp38Wm3oQMw0dfk%2F%2FYFQCo%2BQAZo1n1SflEeZqpT1394LpJoqAEfWVOn61iYHKTW2ctf3jBwYDW2kyUOYXMWrf4ocx7MgEfln9N8v%2BMZJfMOj9rcAGOqUB%2B9v4f1N5neBR0ZuJykd5oyz1wJHcG8CxLqdYQlvcndgKHt70jL5Y3IRV3W0k5x0ohc3n694GcrKexaDkSZOAW%2FE%2Bn%2BEWjcrTk2OvlNzZ1gFP13Sxk5kBd7B0gw3bxRQKHq%2BSnloA0FTYQ7C%2FtfDdGEAv0G7DzDK9miqrNOVLSngYxb%2Btcmp2CjtUEmGO5QsAIY5PdLAmmi92dsbBNMgL%2B73eyxQN&X-Amz-Signature=f18cd1eb9b06b0eb5135b9449ce5804d10f96145e413fd5b7fddbf173acd4450&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
