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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHS4TJHE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdLu8Lr38HrqTcu0t4WQcQe9S1cosOwL2XQfgox%2BbghAiEAgA6%2BfF%2BuBRZpBvst4prJjGrfyHHC510AOE9Byt4mQjQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxh31Vq59ZrN9RP%2BircA1qnZG89Q2aiW%2BS3Eprw%2Fhnz2%2FPbumNpXcBlNzJk2BHUbiwZZhTjKvuATNMJ7b%2FDYLGG%2BX0kg%2BfJpTN%2Fo3U6MNC2grm2EXSPd1OYqOZfC%2BXmzFvr%2Bh%2FQDUo7r8%2B100g34e69VaS5uN1SrsPtypgtWyIMy4NV9Qv3QdK8mQhK%2FrO5YBvaQlcIitOJYgT9aSoUhzGnTbXYw0gHJ1n%2FqKCKQnUk3%2FookdaNH5KJUPZiFJI0A6xYVYNWBNns3jzh7h4S%2FUzzxqpiXnAt0OeUctQZII9sxWx4f2yk7oIPhHki2LlmTugZU8UPwyMaTqzFH0Qaj7QbZobPe4jeeBM%2Ft1ZUixazPkol3DY2UcJP%2FnAG9wxEwGc6KJUbm3qc5dpy7k9c4SoOk3QKopfBFzRdhFzmNRUO5wmou1U%2BnLw%2Bbq7rZkHnCBrLY70KMdqX%2FcLdzJZVd%2BenD4osm%2FoQAHpzA663NO%2BMxrX7RdvTho2lbIMwoF48TuPE3XQN3avW0hA8dmC5CXdB9u7MPvzswkdOHsFffuHwyGsTdbvwK7lv25cFGiwesPKBmtfCWSTWA1a3A9Uyhf5zzVMCbOkbGmZuq3jq3yCNHyVHMJ4cuqSYZlRHJVcB1VjXrOtHuZBpeEwnMODFusMGOqUBA23Wqw9pRcvzBEXm3vuz8l%2Bkmbbej36X02BymqjKwLxPOfeq78MBPPv3IzDdM7AC7MNTi68nT2ekczvvI7ctqdjSNweoXhr9T27EYOonyPaDI%2F%2Bs7gCaiu9CmP9pRJDOVVze1AKFvUeoDxHWehm2q2Pw5gwpCCU0jiGsH7YyklctoAg%2FSwqbyVPRJxw1BMdtMOrDsxzPABDZ8UJFjiqJoZkSVE7j&X-Amz-Signature=17ef234f3cf9147936db012be11d1a1a536cf1db7bb9a67c46b683599cd219bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHS4TJHE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdLu8Lr38HrqTcu0t4WQcQe9S1cosOwL2XQfgox%2BbghAiEAgA6%2BfF%2BuBRZpBvst4prJjGrfyHHC510AOE9Byt4mQjQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxh31Vq59ZrN9RP%2BircA1qnZG89Q2aiW%2BS3Eprw%2Fhnz2%2FPbumNpXcBlNzJk2BHUbiwZZhTjKvuATNMJ7b%2FDYLGG%2BX0kg%2BfJpTN%2Fo3U6MNC2grm2EXSPd1OYqOZfC%2BXmzFvr%2Bh%2FQDUo7r8%2B100g34e69VaS5uN1SrsPtypgtWyIMy4NV9Qv3QdK8mQhK%2FrO5YBvaQlcIitOJYgT9aSoUhzGnTbXYw0gHJ1n%2FqKCKQnUk3%2FookdaNH5KJUPZiFJI0A6xYVYNWBNns3jzh7h4S%2FUzzxqpiXnAt0OeUctQZII9sxWx4f2yk7oIPhHki2LlmTugZU8UPwyMaTqzFH0Qaj7QbZobPe4jeeBM%2Ft1ZUixazPkol3DY2UcJP%2FnAG9wxEwGc6KJUbm3qc5dpy7k9c4SoOk3QKopfBFzRdhFzmNRUO5wmou1U%2BnLw%2Bbq7rZkHnCBrLY70KMdqX%2FcLdzJZVd%2BenD4osm%2FoQAHpzA663NO%2BMxrX7RdvTho2lbIMwoF48TuPE3XQN3avW0hA8dmC5CXdB9u7MPvzswkdOHsFffuHwyGsTdbvwK7lv25cFGiwesPKBmtfCWSTWA1a3A9Uyhf5zzVMCbOkbGmZuq3jq3yCNHyVHMJ4cuqSYZlRHJVcB1VjXrOtHuZBpeEwnMODFusMGOqUBA23Wqw9pRcvzBEXm3vuz8l%2Bkmbbej36X02BymqjKwLxPOfeq78MBPPv3IzDdM7AC7MNTi68nT2ekczvvI7ctqdjSNweoXhr9T27EYOonyPaDI%2F%2Bs7gCaiu9CmP9pRJDOVVze1AKFvUeoDxHWehm2q2Pw5gwpCCU0jiGsH7YyklctoAg%2FSwqbyVPRJxw1BMdtMOrDsxzPABDZ8UJFjiqJoZkSVE7j&X-Amz-Signature=03da4f7a6c9758654904d8da5d7df8fe1afef54db3341c4e396d76b5b6cb0d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHS4TJHE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdLu8Lr38HrqTcu0t4WQcQe9S1cosOwL2XQfgox%2BbghAiEAgA6%2BfF%2BuBRZpBvst4prJjGrfyHHC510AOE9Byt4mQjQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxh31Vq59ZrN9RP%2BircA1qnZG89Q2aiW%2BS3Eprw%2Fhnz2%2FPbumNpXcBlNzJk2BHUbiwZZhTjKvuATNMJ7b%2FDYLGG%2BX0kg%2BfJpTN%2Fo3U6MNC2grm2EXSPd1OYqOZfC%2BXmzFvr%2Bh%2FQDUo7r8%2B100g34e69VaS5uN1SrsPtypgtWyIMy4NV9Qv3QdK8mQhK%2FrO5YBvaQlcIitOJYgT9aSoUhzGnTbXYw0gHJ1n%2FqKCKQnUk3%2FookdaNH5KJUPZiFJI0A6xYVYNWBNns3jzh7h4S%2FUzzxqpiXnAt0OeUctQZII9sxWx4f2yk7oIPhHki2LlmTugZU8UPwyMaTqzFH0Qaj7QbZobPe4jeeBM%2Ft1ZUixazPkol3DY2UcJP%2FnAG9wxEwGc6KJUbm3qc5dpy7k9c4SoOk3QKopfBFzRdhFzmNRUO5wmou1U%2BnLw%2Bbq7rZkHnCBrLY70KMdqX%2FcLdzJZVd%2BenD4osm%2FoQAHpzA663NO%2BMxrX7RdvTho2lbIMwoF48TuPE3XQN3avW0hA8dmC5CXdB9u7MPvzswkdOHsFffuHwyGsTdbvwK7lv25cFGiwesPKBmtfCWSTWA1a3A9Uyhf5zzVMCbOkbGmZuq3jq3yCNHyVHMJ4cuqSYZlRHJVcB1VjXrOtHuZBpeEwnMODFusMGOqUBA23Wqw9pRcvzBEXm3vuz8l%2Bkmbbej36X02BymqjKwLxPOfeq78MBPPv3IzDdM7AC7MNTi68nT2ekczvvI7ctqdjSNweoXhr9T27EYOonyPaDI%2F%2Bs7gCaiu9CmP9pRJDOVVze1AKFvUeoDxHWehm2q2Pw5gwpCCU0jiGsH7YyklctoAg%2FSwqbyVPRJxw1BMdtMOrDsxzPABDZ8UJFjiqJoZkSVE7j&X-Amz-Signature=49e64f112a7e6ec2046c34682d121dc348ecb396425d783e7a46b902abe772ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHS4TJHE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdLu8Lr38HrqTcu0t4WQcQe9S1cosOwL2XQfgox%2BbghAiEAgA6%2BfF%2BuBRZpBvst4prJjGrfyHHC510AOE9Byt4mQjQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxh31Vq59ZrN9RP%2BircA1qnZG89Q2aiW%2BS3Eprw%2Fhnz2%2FPbumNpXcBlNzJk2BHUbiwZZhTjKvuATNMJ7b%2FDYLGG%2BX0kg%2BfJpTN%2Fo3U6MNC2grm2EXSPd1OYqOZfC%2BXmzFvr%2Bh%2FQDUo7r8%2B100g34e69VaS5uN1SrsPtypgtWyIMy4NV9Qv3QdK8mQhK%2FrO5YBvaQlcIitOJYgT9aSoUhzGnTbXYw0gHJ1n%2FqKCKQnUk3%2FookdaNH5KJUPZiFJI0A6xYVYNWBNns3jzh7h4S%2FUzzxqpiXnAt0OeUctQZII9sxWx4f2yk7oIPhHki2LlmTugZU8UPwyMaTqzFH0Qaj7QbZobPe4jeeBM%2Ft1ZUixazPkol3DY2UcJP%2FnAG9wxEwGc6KJUbm3qc5dpy7k9c4SoOk3QKopfBFzRdhFzmNRUO5wmou1U%2BnLw%2Bbq7rZkHnCBrLY70KMdqX%2FcLdzJZVd%2BenD4osm%2FoQAHpzA663NO%2BMxrX7RdvTho2lbIMwoF48TuPE3XQN3avW0hA8dmC5CXdB9u7MPvzswkdOHsFffuHwyGsTdbvwK7lv25cFGiwesPKBmtfCWSTWA1a3A9Uyhf5zzVMCbOkbGmZuq3jq3yCNHyVHMJ4cuqSYZlRHJVcB1VjXrOtHuZBpeEwnMODFusMGOqUBA23Wqw9pRcvzBEXm3vuz8l%2Bkmbbej36X02BymqjKwLxPOfeq78MBPPv3IzDdM7AC7MNTi68nT2ekczvvI7ctqdjSNweoXhr9T27EYOonyPaDI%2F%2Bs7gCaiu9CmP9pRJDOVVze1AKFvUeoDxHWehm2q2Pw5gwpCCU0jiGsH7YyklctoAg%2FSwqbyVPRJxw1BMdtMOrDsxzPABDZ8UJFjiqJoZkSVE7j&X-Amz-Signature=795bf0de1c55beac7e4fba571ca62cccda3f40c1e9ab2902f27529120ef4961e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHS4TJHE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdLu8Lr38HrqTcu0t4WQcQe9S1cosOwL2XQfgox%2BbghAiEAgA6%2BfF%2BuBRZpBvst4prJjGrfyHHC510AOE9Byt4mQjQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxh31Vq59ZrN9RP%2BircA1qnZG89Q2aiW%2BS3Eprw%2Fhnz2%2FPbumNpXcBlNzJk2BHUbiwZZhTjKvuATNMJ7b%2FDYLGG%2BX0kg%2BfJpTN%2Fo3U6MNC2grm2EXSPd1OYqOZfC%2BXmzFvr%2Bh%2FQDUo7r8%2B100g34e69VaS5uN1SrsPtypgtWyIMy4NV9Qv3QdK8mQhK%2FrO5YBvaQlcIitOJYgT9aSoUhzGnTbXYw0gHJ1n%2FqKCKQnUk3%2FookdaNH5KJUPZiFJI0A6xYVYNWBNns3jzh7h4S%2FUzzxqpiXnAt0OeUctQZII9sxWx4f2yk7oIPhHki2LlmTugZU8UPwyMaTqzFH0Qaj7QbZobPe4jeeBM%2Ft1ZUixazPkol3DY2UcJP%2FnAG9wxEwGc6KJUbm3qc5dpy7k9c4SoOk3QKopfBFzRdhFzmNRUO5wmou1U%2BnLw%2Bbq7rZkHnCBrLY70KMdqX%2FcLdzJZVd%2BenD4osm%2FoQAHpzA663NO%2BMxrX7RdvTho2lbIMwoF48TuPE3XQN3avW0hA8dmC5CXdB9u7MPvzswkdOHsFffuHwyGsTdbvwK7lv25cFGiwesPKBmtfCWSTWA1a3A9Uyhf5zzVMCbOkbGmZuq3jq3yCNHyVHMJ4cuqSYZlRHJVcB1VjXrOtHuZBpeEwnMODFusMGOqUBA23Wqw9pRcvzBEXm3vuz8l%2Bkmbbej36X02BymqjKwLxPOfeq78MBPPv3IzDdM7AC7MNTi68nT2ekczvvI7ctqdjSNweoXhr9T27EYOonyPaDI%2F%2Bs7gCaiu9CmP9pRJDOVVze1AKFvUeoDxHWehm2q2Pw5gwpCCU0jiGsH7YyklctoAg%2FSwqbyVPRJxw1BMdtMOrDsxzPABDZ8UJFjiqJoZkSVE7j&X-Amz-Signature=bef71a9c9d653ce17dada482fcc971ec29aed3c80c6a5a512bde8486f1fad4a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
