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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATKDCRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGdPJt5DmE%2FGuZxSBSn96GSOPgE5txzbMVsa8B8IRs%2BTAiAuDcC6jdvZ%2FHAT9wty2q2Cda2X%2F2WryPcoJy7FHHN2NiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzRR0%2BZRIAABNgt2XKtwDyZzEqVz%2BZD19k7QGIqg9bYKKQ8yM%2B7tOKCyVVZhNWMZFSGgUvsDgRyRn3APdGhFiKGXRlmUIswoEDr8N%2BsBChgORsNopLB8iYzgC2u%2FI0c08Suk1Vm3LGY4ulJT0BMg8cHSi0Gj50hkdpuDuEEQ6vUQtHa0dOsM416nZ0aFNczMOkfBnMzwujqcTR%2B%2BGznqgI%2Frm8%2FcSqlt0SAIsnVwSrnpDaDfh1zh2uNeBK1hMt9JrlpGS1f%2FutttO%2BKsPn1REBaCckHTxC9hE4G1DK8mz5pZcBIHI70H4iXTfhA8wOM8o85o8d6EQ0%2BRKScsRQZNrKvknaYy6KtUzxHonG7a%2BbF45WhmGQNcAUYZtJDFFNLj8eHnrK9AP0Xu1jWJOjY9EIYJ8e67DHyGEPoTDv4ro0rWJZRbmw0N0sK94ZmWoNwlJ5OCuqGT5kuaPKGKmSkt0FErclg0tzg4mVLy7saWBjEsrdv1XDNK2iJOOgUA2DbxAxjXCZKD3QQC1EoZ3duOs9Ex%2FH6GI3uKh52KbWIyHrFI64XkslL%2FY9dL5QDRl00vbiNS1nzzn6SEZjn%2BWPfktDsayr8MzMsmxUxvh%2Fe6leqtiCWfId8C2ibCJWOyFpqMzDMOR%2Fx6KcZTCF%2Fkwn42dxAY6pgFJJ%2BP8ZBIFjF4CelH1hkTPsJ1vtdc9PAPyGq6DJz1mmQnCmLXVn8wCR1pNLJ%2BmU%2BvE4iu363HTaPI4u1V%2B20WSZNxFl%2BGSqRT0ASmCLOry%2FVoyT4dk1o50lRxHSE%2FvFXzdlDiaS6nd5sDLQe07j9m094gKy5un6WJgMEG%2BjqfSfbnDPCjuJwoVB1Thoy4b8D%2BhX6EG8208AWEz2CCXWkZXPFN1AxT3&X-Amz-Signature=c12c0dd162492d899b7143004cceb0673399b2f168b469b5634bb30c8d02a160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATKDCRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGdPJt5DmE%2FGuZxSBSn96GSOPgE5txzbMVsa8B8IRs%2BTAiAuDcC6jdvZ%2FHAT9wty2q2Cda2X%2F2WryPcoJy7FHHN2NiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzRR0%2BZRIAABNgt2XKtwDyZzEqVz%2BZD19k7QGIqg9bYKKQ8yM%2B7tOKCyVVZhNWMZFSGgUvsDgRyRn3APdGhFiKGXRlmUIswoEDr8N%2BsBChgORsNopLB8iYzgC2u%2FI0c08Suk1Vm3LGY4ulJT0BMg8cHSi0Gj50hkdpuDuEEQ6vUQtHa0dOsM416nZ0aFNczMOkfBnMzwujqcTR%2B%2BGznqgI%2Frm8%2FcSqlt0SAIsnVwSrnpDaDfh1zh2uNeBK1hMt9JrlpGS1f%2FutttO%2BKsPn1REBaCckHTxC9hE4G1DK8mz5pZcBIHI70H4iXTfhA8wOM8o85o8d6EQ0%2BRKScsRQZNrKvknaYy6KtUzxHonG7a%2BbF45WhmGQNcAUYZtJDFFNLj8eHnrK9AP0Xu1jWJOjY9EIYJ8e67DHyGEPoTDv4ro0rWJZRbmw0N0sK94ZmWoNwlJ5OCuqGT5kuaPKGKmSkt0FErclg0tzg4mVLy7saWBjEsrdv1XDNK2iJOOgUA2DbxAxjXCZKD3QQC1EoZ3duOs9Ex%2FH6GI3uKh52KbWIyHrFI64XkslL%2FY9dL5QDRl00vbiNS1nzzn6SEZjn%2BWPfktDsayr8MzMsmxUxvh%2Fe6leqtiCWfId8C2ibCJWOyFpqMzDMOR%2Fx6KcZTCF%2Fkwn42dxAY6pgFJJ%2BP8ZBIFjF4CelH1hkTPsJ1vtdc9PAPyGq6DJz1mmQnCmLXVn8wCR1pNLJ%2BmU%2BvE4iu363HTaPI4u1V%2B20WSZNxFl%2BGSqRT0ASmCLOry%2FVoyT4dk1o50lRxHSE%2FvFXzdlDiaS6nd5sDLQe07j9m094gKy5un6WJgMEG%2BjqfSfbnDPCjuJwoVB1Thoy4b8D%2BhX6EG8208AWEz2CCXWkZXPFN1AxT3&X-Amz-Signature=2f1aea811322ac0ba6614cea168487bd1625bcf1ca483a63f0d0c4edb5583a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATKDCRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGdPJt5DmE%2FGuZxSBSn96GSOPgE5txzbMVsa8B8IRs%2BTAiAuDcC6jdvZ%2FHAT9wty2q2Cda2X%2F2WryPcoJy7FHHN2NiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzRR0%2BZRIAABNgt2XKtwDyZzEqVz%2BZD19k7QGIqg9bYKKQ8yM%2B7tOKCyVVZhNWMZFSGgUvsDgRyRn3APdGhFiKGXRlmUIswoEDr8N%2BsBChgORsNopLB8iYzgC2u%2FI0c08Suk1Vm3LGY4ulJT0BMg8cHSi0Gj50hkdpuDuEEQ6vUQtHa0dOsM416nZ0aFNczMOkfBnMzwujqcTR%2B%2BGznqgI%2Frm8%2FcSqlt0SAIsnVwSrnpDaDfh1zh2uNeBK1hMt9JrlpGS1f%2FutttO%2BKsPn1REBaCckHTxC9hE4G1DK8mz5pZcBIHI70H4iXTfhA8wOM8o85o8d6EQ0%2BRKScsRQZNrKvknaYy6KtUzxHonG7a%2BbF45WhmGQNcAUYZtJDFFNLj8eHnrK9AP0Xu1jWJOjY9EIYJ8e67DHyGEPoTDv4ro0rWJZRbmw0N0sK94ZmWoNwlJ5OCuqGT5kuaPKGKmSkt0FErclg0tzg4mVLy7saWBjEsrdv1XDNK2iJOOgUA2DbxAxjXCZKD3QQC1EoZ3duOs9Ex%2FH6GI3uKh52KbWIyHrFI64XkslL%2FY9dL5QDRl00vbiNS1nzzn6SEZjn%2BWPfktDsayr8MzMsmxUxvh%2Fe6leqtiCWfId8C2ibCJWOyFpqMzDMOR%2Fx6KcZTCF%2Fkwn42dxAY6pgFJJ%2BP8ZBIFjF4CelH1hkTPsJ1vtdc9PAPyGq6DJz1mmQnCmLXVn8wCR1pNLJ%2BmU%2BvE4iu363HTaPI4u1V%2B20WSZNxFl%2BGSqRT0ASmCLOry%2FVoyT4dk1o50lRxHSE%2FvFXzdlDiaS6nd5sDLQe07j9m094gKy5un6WJgMEG%2BjqfSfbnDPCjuJwoVB1Thoy4b8D%2BhX6EG8208AWEz2CCXWkZXPFN1AxT3&X-Amz-Signature=7616b34a3d4b650e1f05119b796add4e86f04aadb1598f6245c34c325352b7b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATKDCRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGdPJt5DmE%2FGuZxSBSn96GSOPgE5txzbMVsa8B8IRs%2BTAiAuDcC6jdvZ%2FHAT9wty2q2Cda2X%2F2WryPcoJy7FHHN2NiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzRR0%2BZRIAABNgt2XKtwDyZzEqVz%2BZD19k7QGIqg9bYKKQ8yM%2B7tOKCyVVZhNWMZFSGgUvsDgRyRn3APdGhFiKGXRlmUIswoEDr8N%2BsBChgORsNopLB8iYzgC2u%2FI0c08Suk1Vm3LGY4ulJT0BMg8cHSi0Gj50hkdpuDuEEQ6vUQtHa0dOsM416nZ0aFNczMOkfBnMzwujqcTR%2B%2BGznqgI%2Frm8%2FcSqlt0SAIsnVwSrnpDaDfh1zh2uNeBK1hMt9JrlpGS1f%2FutttO%2BKsPn1REBaCckHTxC9hE4G1DK8mz5pZcBIHI70H4iXTfhA8wOM8o85o8d6EQ0%2BRKScsRQZNrKvknaYy6KtUzxHonG7a%2BbF45WhmGQNcAUYZtJDFFNLj8eHnrK9AP0Xu1jWJOjY9EIYJ8e67DHyGEPoTDv4ro0rWJZRbmw0N0sK94ZmWoNwlJ5OCuqGT5kuaPKGKmSkt0FErclg0tzg4mVLy7saWBjEsrdv1XDNK2iJOOgUA2DbxAxjXCZKD3QQC1EoZ3duOs9Ex%2FH6GI3uKh52KbWIyHrFI64XkslL%2FY9dL5QDRl00vbiNS1nzzn6SEZjn%2BWPfktDsayr8MzMsmxUxvh%2Fe6leqtiCWfId8C2ibCJWOyFpqMzDMOR%2Fx6KcZTCF%2Fkwn42dxAY6pgFJJ%2BP8ZBIFjF4CelH1hkTPsJ1vtdc9PAPyGq6DJz1mmQnCmLXVn8wCR1pNLJ%2BmU%2BvE4iu363HTaPI4u1V%2B20WSZNxFl%2BGSqRT0ASmCLOry%2FVoyT4dk1o50lRxHSE%2FvFXzdlDiaS6nd5sDLQe07j9m094gKy5un6WJgMEG%2BjqfSfbnDPCjuJwoVB1Thoy4b8D%2BhX6EG8208AWEz2CCXWkZXPFN1AxT3&X-Amz-Signature=2d1060a8b1bfd2bfb6afbaeb2225f9d3b01ebec0b9ff92fbe5792e1e141adf6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATKDCRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGdPJt5DmE%2FGuZxSBSn96GSOPgE5txzbMVsa8B8IRs%2BTAiAuDcC6jdvZ%2FHAT9wty2q2Cda2X%2F2WryPcoJy7FHHN2NiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzRR0%2BZRIAABNgt2XKtwDyZzEqVz%2BZD19k7QGIqg9bYKKQ8yM%2B7tOKCyVVZhNWMZFSGgUvsDgRyRn3APdGhFiKGXRlmUIswoEDr8N%2BsBChgORsNopLB8iYzgC2u%2FI0c08Suk1Vm3LGY4ulJT0BMg8cHSi0Gj50hkdpuDuEEQ6vUQtHa0dOsM416nZ0aFNczMOkfBnMzwujqcTR%2B%2BGznqgI%2Frm8%2FcSqlt0SAIsnVwSrnpDaDfh1zh2uNeBK1hMt9JrlpGS1f%2FutttO%2BKsPn1REBaCckHTxC9hE4G1DK8mz5pZcBIHI70H4iXTfhA8wOM8o85o8d6EQ0%2BRKScsRQZNrKvknaYy6KtUzxHonG7a%2BbF45WhmGQNcAUYZtJDFFNLj8eHnrK9AP0Xu1jWJOjY9EIYJ8e67DHyGEPoTDv4ro0rWJZRbmw0N0sK94ZmWoNwlJ5OCuqGT5kuaPKGKmSkt0FErclg0tzg4mVLy7saWBjEsrdv1XDNK2iJOOgUA2DbxAxjXCZKD3QQC1EoZ3duOs9Ex%2FH6GI3uKh52KbWIyHrFI64XkslL%2FY9dL5QDRl00vbiNS1nzzn6SEZjn%2BWPfktDsayr8MzMsmxUxvh%2Fe6leqtiCWfId8C2ibCJWOyFpqMzDMOR%2Fx6KcZTCF%2Fkwn42dxAY6pgFJJ%2BP8ZBIFjF4CelH1hkTPsJ1vtdc9PAPyGq6DJz1mmQnCmLXVn8wCR1pNLJ%2BmU%2BvE4iu363HTaPI4u1V%2B20WSZNxFl%2BGSqRT0ASmCLOry%2FVoyT4dk1o50lRxHSE%2FvFXzdlDiaS6nd5sDLQe07j9m094gKy5un6WJgMEG%2BjqfSfbnDPCjuJwoVB1Thoy4b8D%2BhX6EG8208AWEz2CCXWkZXPFN1AxT3&X-Amz-Signature=1e5bd89dc7b35fbd5a75bfb41a6869a7e46d9d0a1e2725392246e6fde515ae7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
