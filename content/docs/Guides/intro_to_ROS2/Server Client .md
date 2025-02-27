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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EN6D37D%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDKbDvnTTpVhiMtm%2BZKqe02aVYqpZJfP9XO5xFtPlLPbQIhAKpyQkVhYlFAwlivTFGQnORUKb6ui6mAhl5qbWEnqLl8Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwQl29EWabtBLHSa%2Bsq3AM1m44iVWSOIRx9bVqihpE1%2B34aqEIRGtbjmT5xGbw5UgztADXCvU3LfZE2gO7LkAufCLxg9hJkSqs6cuWVq2n2XMLJBagm29AIhAMLf5Yiimti0Wi%2FhAPGModnwaN980ochHoA392jsFu0AHL%2Bf4AZ833QRA7wFDT6hLzvMIgzd4jaakbsGUo6KKMtimSAlEygfxJ1Ppn8N8rNkMh9bDOZaOKXxJu%2BsEd1shJPvsgqOQDUIFJTZcS%2FpKfq4DjlQeyMusNNfknZSwf20kWWZg%2FwQ7x8nwrz6%2B61mdaTb7ZOJPfed7evlKT2i0s7ExppOIYLhPmQTdyVUk1%2BAy4PxPZjQN9QNqM8pjPGQLd07NB3TMt8R6wOTmhvAaonC%2FSoWZ%2BdY60R1L20V7gKpibw1yoNvdTJwMhdM2FDt4cdfJPGZBr6HZB4XnjWsEx1KKXA%2F61HaGFxsYXbycdJIpa0nPEbXsi5U6e7tS%2BVwMtseh1GNePEL%2BfCDarhJzxDjxSyqHI%2FdK%2BzEPKXAGZJCY7y4GYNxvDq3H9%2BofxalRKJsQ%2BF8t1NnXSfKwon7A6GBPKrVHZAPER3d9LUJLivPIpFUo%2BEHCU%2F4WA7hNk9rWUGyLsl159ZBLtDntE9IV2EozD1zIG%2BBjqkAfgEzLHbupl6TeCzvfo2bYSw6MR38erHKIXjHTv5z%2BFiboOA7JBuacnnq6vusz%2FdgUt271RZdcJ%2Fb4YtkNzTjFumFJ1qEuBFkiQ8gbUm9gLPCwrwDIadivnO9Q32pUxkJ3MFsiajAeHuKtmMUMFqpk5Oi1bK%2BUwRM4r2UWMNyRH0vE2Ybok1iKNy8W9o%2FN5rplx0WLqEDmip0dUSS%2FMwpIV%2FHr62&X-Amz-Signature=1845ae29f5130d1b1475f1721285c6b2240af183cf60a07eafc9225b98aedafb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EN6D37D%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDKbDvnTTpVhiMtm%2BZKqe02aVYqpZJfP9XO5xFtPlLPbQIhAKpyQkVhYlFAwlivTFGQnORUKb6ui6mAhl5qbWEnqLl8Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwQl29EWabtBLHSa%2Bsq3AM1m44iVWSOIRx9bVqihpE1%2B34aqEIRGtbjmT5xGbw5UgztADXCvU3LfZE2gO7LkAufCLxg9hJkSqs6cuWVq2n2XMLJBagm29AIhAMLf5Yiimti0Wi%2FhAPGModnwaN980ochHoA392jsFu0AHL%2Bf4AZ833QRA7wFDT6hLzvMIgzd4jaakbsGUo6KKMtimSAlEygfxJ1Ppn8N8rNkMh9bDOZaOKXxJu%2BsEd1shJPvsgqOQDUIFJTZcS%2FpKfq4DjlQeyMusNNfknZSwf20kWWZg%2FwQ7x8nwrz6%2B61mdaTb7ZOJPfed7evlKT2i0s7ExppOIYLhPmQTdyVUk1%2BAy4PxPZjQN9QNqM8pjPGQLd07NB3TMt8R6wOTmhvAaonC%2FSoWZ%2BdY60R1L20V7gKpibw1yoNvdTJwMhdM2FDt4cdfJPGZBr6HZB4XnjWsEx1KKXA%2F61HaGFxsYXbycdJIpa0nPEbXsi5U6e7tS%2BVwMtseh1GNePEL%2BfCDarhJzxDjxSyqHI%2FdK%2BzEPKXAGZJCY7y4GYNxvDq3H9%2BofxalRKJsQ%2BF8t1NnXSfKwon7A6GBPKrVHZAPER3d9LUJLivPIpFUo%2BEHCU%2F4WA7hNk9rWUGyLsl159ZBLtDntE9IV2EozD1zIG%2BBjqkAfgEzLHbupl6TeCzvfo2bYSw6MR38erHKIXjHTv5z%2BFiboOA7JBuacnnq6vusz%2FdgUt271RZdcJ%2Fb4YtkNzTjFumFJ1qEuBFkiQ8gbUm9gLPCwrwDIadivnO9Q32pUxkJ3MFsiajAeHuKtmMUMFqpk5Oi1bK%2BUwRM4r2UWMNyRH0vE2Ybok1iKNy8W9o%2FN5rplx0WLqEDmip0dUSS%2FMwpIV%2FHr62&X-Amz-Signature=48e4c7085d2d898329cdf3b5bd440be11d6e6a0bfa674ad3392cfcb3deb3e5b7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EN6D37D%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDKbDvnTTpVhiMtm%2BZKqe02aVYqpZJfP9XO5xFtPlLPbQIhAKpyQkVhYlFAwlivTFGQnORUKb6ui6mAhl5qbWEnqLl8Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwQl29EWabtBLHSa%2Bsq3AM1m44iVWSOIRx9bVqihpE1%2B34aqEIRGtbjmT5xGbw5UgztADXCvU3LfZE2gO7LkAufCLxg9hJkSqs6cuWVq2n2XMLJBagm29AIhAMLf5Yiimti0Wi%2FhAPGModnwaN980ochHoA392jsFu0AHL%2Bf4AZ833QRA7wFDT6hLzvMIgzd4jaakbsGUo6KKMtimSAlEygfxJ1Ppn8N8rNkMh9bDOZaOKXxJu%2BsEd1shJPvsgqOQDUIFJTZcS%2FpKfq4DjlQeyMusNNfknZSwf20kWWZg%2FwQ7x8nwrz6%2B61mdaTb7ZOJPfed7evlKT2i0s7ExppOIYLhPmQTdyVUk1%2BAy4PxPZjQN9QNqM8pjPGQLd07NB3TMt8R6wOTmhvAaonC%2FSoWZ%2BdY60R1L20V7gKpibw1yoNvdTJwMhdM2FDt4cdfJPGZBr6HZB4XnjWsEx1KKXA%2F61HaGFxsYXbycdJIpa0nPEbXsi5U6e7tS%2BVwMtseh1GNePEL%2BfCDarhJzxDjxSyqHI%2FdK%2BzEPKXAGZJCY7y4GYNxvDq3H9%2BofxalRKJsQ%2BF8t1NnXSfKwon7A6GBPKrVHZAPER3d9LUJLivPIpFUo%2BEHCU%2F4WA7hNk9rWUGyLsl159ZBLtDntE9IV2EozD1zIG%2BBjqkAfgEzLHbupl6TeCzvfo2bYSw6MR38erHKIXjHTv5z%2BFiboOA7JBuacnnq6vusz%2FdgUt271RZdcJ%2Fb4YtkNzTjFumFJ1qEuBFkiQ8gbUm9gLPCwrwDIadivnO9Q32pUxkJ3MFsiajAeHuKtmMUMFqpk5Oi1bK%2BUwRM4r2UWMNyRH0vE2Ybok1iKNy8W9o%2FN5rplx0WLqEDmip0dUSS%2FMwpIV%2FHr62&X-Amz-Signature=b327f133ce7e8ce35a39d93a239031e1cfc5a7f5660ab50bf822692d0b422cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EN6D37D%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDKbDvnTTpVhiMtm%2BZKqe02aVYqpZJfP9XO5xFtPlLPbQIhAKpyQkVhYlFAwlivTFGQnORUKb6ui6mAhl5qbWEnqLl8Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwQl29EWabtBLHSa%2Bsq3AM1m44iVWSOIRx9bVqihpE1%2B34aqEIRGtbjmT5xGbw5UgztADXCvU3LfZE2gO7LkAufCLxg9hJkSqs6cuWVq2n2XMLJBagm29AIhAMLf5Yiimti0Wi%2FhAPGModnwaN980ochHoA392jsFu0AHL%2Bf4AZ833QRA7wFDT6hLzvMIgzd4jaakbsGUo6KKMtimSAlEygfxJ1Ppn8N8rNkMh9bDOZaOKXxJu%2BsEd1shJPvsgqOQDUIFJTZcS%2FpKfq4DjlQeyMusNNfknZSwf20kWWZg%2FwQ7x8nwrz6%2B61mdaTb7ZOJPfed7evlKT2i0s7ExppOIYLhPmQTdyVUk1%2BAy4PxPZjQN9QNqM8pjPGQLd07NB3TMt8R6wOTmhvAaonC%2FSoWZ%2BdY60R1L20V7gKpibw1yoNvdTJwMhdM2FDt4cdfJPGZBr6HZB4XnjWsEx1KKXA%2F61HaGFxsYXbycdJIpa0nPEbXsi5U6e7tS%2BVwMtseh1GNePEL%2BfCDarhJzxDjxSyqHI%2FdK%2BzEPKXAGZJCY7y4GYNxvDq3H9%2BofxalRKJsQ%2BF8t1NnXSfKwon7A6GBPKrVHZAPER3d9LUJLivPIpFUo%2BEHCU%2F4WA7hNk9rWUGyLsl159ZBLtDntE9IV2EozD1zIG%2BBjqkAfgEzLHbupl6TeCzvfo2bYSw6MR38erHKIXjHTv5z%2BFiboOA7JBuacnnq6vusz%2FdgUt271RZdcJ%2Fb4YtkNzTjFumFJ1qEuBFkiQ8gbUm9gLPCwrwDIadivnO9Q32pUxkJ3MFsiajAeHuKtmMUMFqpk5Oi1bK%2BUwRM4r2UWMNyRH0vE2Ybok1iKNy8W9o%2FN5rplx0WLqEDmip0dUSS%2FMwpIV%2FHr62&X-Amz-Signature=17f9e6551a924a1bb649fae16a5fc0cc99f4279d938c3d3f002a1d7d6a787e76&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EN6D37D%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDKbDvnTTpVhiMtm%2BZKqe02aVYqpZJfP9XO5xFtPlLPbQIhAKpyQkVhYlFAwlivTFGQnORUKb6ui6mAhl5qbWEnqLl8Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwQl29EWabtBLHSa%2Bsq3AM1m44iVWSOIRx9bVqihpE1%2B34aqEIRGtbjmT5xGbw5UgztADXCvU3LfZE2gO7LkAufCLxg9hJkSqs6cuWVq2n2XMLJBagm29AIhAMLf5Yiimti0Wi%2FhAPGModnwaN980ochHoA392jsFu0AHL%2Bf4AZ833QRA7wFDT6hLzvMIgzd4jaakbsGUo6KKMtimSAlEygfxJ1Ppn8N8rNkMh9bDOZaOKXxJu%2BsEd1shJPvsgqOQDUIFJTZcS%2FpKfq4DjlQeyMusNNfknZSwf20kWWZg%2FwQ7x8nwrz6%2B61mdaTb7ZOJPfed7evlKT2i0s7ExppOIYLhPmQTdyVUk1%2BAy4PxPZjQN9QNqM8pjPGQLd07NB3TMt8R6wOTmhvAaonC%2FSoWZ%2BdY60R1L20V7gKpibw1yoNvdTJwMhdM2FDt4cdfJPGZBr6HZB4XnjWsEx1KKXA%2F61HaGFxsYXbycdJIpa0nPEbXsi5U6e7tS%2BVwMtseh1GNePEL%2BfCDarhJzxDjxSyqHI%2FdK%2BzEPKXAGZJCY7y4GYNxvDq3H9%2BofxalRKJsQ%2BF8t1NnXSfKwon7A6GBPKrVHZAPER3d9LUJLivPIpFUo%2BEHCU%2F4WA7hNk9rWUGyLsl159ZBLtDntE9IV2EozD1zIG%2BBjqkAfgEzLHbupl6TeCzvfo2bYSw6MR38erHKIXjHTv5z%2BFiboOA7JBuacnnq6vusz%2FdgUt271RZdcJ%2Fb4YtkNzTjFumFJ1qEuBFkiQ8gbUm9gLPCwrwDIadivnO9Q32pUxkJ3MFsiajAeHuKtmMUMFqpk5Oi1bK%2BUwRM4r2UWMNyRH0vE2Ybok1iKNy8W9o%2FN5rplx0WLqEDmip0dUSS%2FMwpIV%2FHr62&X-Amz-Signature=6a92b4315ada4e5e6802ee8ae63c1d22daaa54026d30b972b11a4d9c8402e622&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
