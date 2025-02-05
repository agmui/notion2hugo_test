---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Server Client .md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632QE2WTY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDWkku1hJJDPb076wLxk4pz%2B9YPRq5KZMIosOUA7v%2BAeAIgVACOpJsVWDOM3t2H60dZ2vkC6gXauzAQ2GOn%2F6qT%2Bz0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKdlaYsti0%2BoI7SIDyrcAyGhuJUV5%2F7ApwyDsXZGFgd0jV4aLoG0ByIhRJZh5G7DjctpvE%2Fi4fjzBFtwEkJN7puXLVgci6IwJ8NcRbvOW1ApQe76dfoRgCe5kffW6eBMW6xW%2FhdnXlm9ueK1A8zWVfx5Bxqbj%2BzyHIymtRy%2Fw1SivljV3PCKsYive2KnAryTUBeSvsqHFxt4vhrDaL9KzMSqSCAyoOXeCooHCp2MdhHOFYZD3Azrd291Ps4K%2BMz3UANE2vyNrRqbldrEBhb9cjYDnLih07%2FpAsmkLc3nUXxnfr0LkgKn2EcJoHA93bFd%2FsPnAYiY6v4zSKioOkKASbGpKgEpLizJA6UDkfiIhqbhyAGttAuG75DTGF29Edw%2Fs1ECW3JM%2BJ8MLJnz30%2FE8gBjr9XgGCw%2FS1Mw9jO%2BdFXHMnDr0h4DWdGXPEOwCTqh0Ky7oooTcM4vvi9T7EfyDR6Gi%2BALtIMDImLFTHspNXE9B7bZ%2B%2B263D%2F7xpqIxnrMZJnRF04OS7AvfOn00WU1OpnaKHDfSdpEFhLdokaXzyP5JCQU29E%2BE7%2FZ3qgX5VKrVN0HkXrCAzpRuKb2VA27L3aCprs5rbWIYBN6aCEKfKuvc%2F3doJnJjAIwsud5BrH6%2BS6uJJAz9kDukzkDMI%2FPir0GOqUB8fX5Fgp4pddiX%2Ft80rnDMCJ0a922YdZGlrBAJ0sB7XQowd2o5xiObBPYUIK%2BeJfAESy435C13DU80ebdI%2BaeHQoEHB81frN%2B08Iw9hU2v3Usoxe37kvaQY5AfglAJws4GWl6WMcbl3GqDU%2BjxOY2QvR9hLTMTh%2FOvQuXdYPlr%2BjR8%2FNZ4uchGjZ3yD4egr1NeOnLqS%2FtQV%2FrUGrKtYc%2FgnNh7OvH&X-Amz-Signature=70cd77a574e00f7043f6131d82a6a35687c8cf2ecf473638136fdc670b098cf3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632QE2WTY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDWkku1hJJDPb076wLxk4pz%2B9YPRq5KZMIosOUA7v%2BAeAIgVACOpJsVWDOM3t2H60dZ2vkC6gXauzAQ2GOn%2F6qT%2Bz0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKdlaYsti0%2BoI7SIDyrcAyGhuJUV5%2F7ApwyDsXZGFgd0jV4aLoG0ByIhRJZh5G7DjctpvE%2Fi4fjzBFtwEkJN7puXLVgci6IwJ8NcRbvOW1ApQe76dfoRgCe5kffW6eBMW6xW%2FhdnXlm9ueK1A8zWVfx5Bxqbj%2BzyHIymtRy%2Fw1SivljV3PCKsYive2KnAryTUBeSvsqHFxt4vhrDaL9KzMSqSCAyoOXeCooHCp2MdhHOFYZD3Azrd291Ps4K%2BMz3UANE2vyNrRqbldrEBhb9cjYDnLih07%2FpAsmkLc3nUXxnfr0LkgKn2EcJoHA93bFd%2FsPnAYiY6v4zSKioOkKASbGpKgEpLizJA6UDkfiIhqbhyAGttAuG75DTGF29Edw%2Fs1ECW3JM%2BJ8MLJnz30%2FE8gBjr9XgGCw%2FS1Mw9jO%2BdFXHMnDr0h4DWdGXPEOwCTqh0Ky7oooTcM4vvi9T7EfyDR6Gi%2BALtIMDImLFTHspNXE9B7bZ%2B%2B263D%2F7xpqIxnrMZJnRF04OS7AvfOn00WU1OpnaKHDfSdpEFhLdokaXzyP5JCQU29E%2BE7%2FZ3qgX5VKrVN0HkXrCAzpRuKb2VA27L3aCprs5rbWIYBN6aCEKfKuvc%2F3doJnJjAIwsud5BrH6%2BS6uJJAz9kDukzkDMI%2FPir0GOqUB8fX5Fgp4pddiX%2Ft80rnDMCJ0a922YdZGlrBAJ0sB7XQowd2o5xiObBPYUIK%2BeJfAESy435C13DU80ebdI%2BaeHQoEHB81frN%2B08Iw9hU2v3Usoxe37kvaQY5AfglAJws4GWl6WMcbl3GqDU%2BjxOY2QvR9hLTMTh%2FOvQuXdYPlr%2BjR8%2FNZ4uchGjZ3yD4egr1NeOnLqS%2FtQV%2FrUGrKtYc%2FgnNh7OvH&X-Amz-Signature=00ec9a7b2ac1bc95c5192f7cdd15e9e687c09f62682fd5b40c022aa6cedce882&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632QE2WTY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDWkku1hJJDPb076wLxk4pz%2B9YPRq5KZMIosOUA7v%2BAeAIgVACOpJsVWDOM3t2H60dZ2vkC6gXauzAQ2GOn%2F6qT%2Bz0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKdlaYsti0%2BoI7SIDyrcAyGhuJUV5%2F7ApwyDsXZGFgd0jV4aLoG0ByIhRJZh5G7DjctpvE%2Fi4fjzBFtwEkJN7puXLVgci6IwJ8NcRbvOW1ApQe76dfoRgCe5kffW6eBMW6xW%2FhdnXlm9ueK1A8zWVfx5Bxqbj%2BzyHIymtRy%2Fw1SivljV3PCKsYive2KnAryTUBeSvsqHFxt4vhrDaL9KzMSqSCAyoOXeCooHCp2MdhHOFYZD3Azrd291Ps4K%2BMz3UANE2vyNrRqbldrEBhb9cjYDnLih07%2FpAsmkLc3nUXxnfr0LkgKn2EcJoHA93bFd%2FsPnAYiY6v4zSKioOkKASbGpKgEpLizJA6UDkfiIhqbhyAGttAuG75DTGF29Edw%2Fs1ECW3JM%2BJ8MLJnz30%2FE8gBjr9XgGCw%2FS1Mw9jO%2BdFXHMnDr0h4DWdGXPEOwCTqh0Ky7oooTcM4vvi9T7EfyDR6Gi%2BALtIMDImLFTHspNXE9B7bZ%2B%2B263D%2F7xpqIxnrMZJnRF04OS7AvfOn00WU1OpnaKHDfSdpEFhLdokaXzyP5JCQU29E%2BE7%2FZ3qgX5VKrVN0HkXrCAzpRuKb2VA27L3aCprs5rbWIYBN6aCEKfKuvc%2F3doJnJjAIwsud5BrH6%2BS6uJJAz9kDukzkDMI%2FPir0GOqUB8fX5Fgp4pddiX%2Ft80rnDMCJ0a922YdZGlrBAJ0sB7XQowd2o5xiObBPYUIK%2BeJfAESy435C13DU80ebdI%2BaeHQoEHB81frN%2B08Iw9hU2v3Usoxe37kvaQY5AfglAJws4GWl6WMcbl3GqDU%2BjxOY2QvR9hLTMTh%2FOvQuXdYPlr%2BjR8%2FNZ4uchGjZ3yD4egr1NeOnLqS%2FtQV%2FrUGrKtYc%2FgnNh7OvH&X-Amz-Signature=f64b87e521c15a874f516c2f9f74ef34a1fce4c56cd55336d77687c730f076ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632QE2WTY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDWkku1hJJDPb076wLxk4pz%2B9YPRq5KZMIosOUA7v%2BAeAIgVACOpJsVWDOM3t2H60dZ2vkC6gXauzAQ2GOn%2F6qT%2Bz0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKdlaYsti0%2BoI7SIDyrcAyGhuJUV5%2F7ApwyDsXZGFgd0jV4aLoG0ByIhRJZh5G7DjctpvE%2Fi4fjzBFtwEkJN7puXLVgci6IwJ8NcRbvOW1ApQe76dfoRgCe5kffW6eBMW6xW%2FhdnXlm9ueK1A8zWVfx5Bxqbj%2BzyHIymtRy%2Fw1SivljV3PCKsYive2KnAryTUBeSvsqHFxt4vhrDaL9KzMSqSCAyoOXeCooHCp2MdhHOFYZD3Azrd291Ps4K%2BMz3UANE2vyNrRqbldrEBhb9cjYDnLih07%2FpAsmkLc3nUXxnfr0LkgKn2EcJoHA93bFd%2FsPnAYiY6v4zSKioOkKASbGpKgEpLizJA6UDkfiIhqbhyAGttAuG75DTGF29Edw%2Fs1ECW3JM%2BJ8MLJnz30%2FE8gBjr9XgGCw%2FS1Mw9jO%2BdFXHMnDr0h4DWdGXPEOwCTqh0Ky7oooTcM4vvi9T7EfyDR6Gi%2BALtIMDImLFTHspNXE9B7bZ%2B%2B263D%2F7xpqIxnrMZJnRF04OS7AvfOn00WU1OpnaKHDfSdpEFhLdokaXzyP5JCQU29E%2BE7%2FZ3qgX5VKrVN0HkXrCAzpRuKb2VA27L3aCprs5rbWIYBN6aCEKfKuvc%2F3doJnJjAIwsud5BrH6%2BS6uJJAz9kDukzkDMI%2FPir0GOqUB8fX5Fgp4pddiX%2Ft80rnDMCJ0a922YdZGlrBAJ0sB7XQowd2o5xiObBPYUIK%2BeJfAESy435C13DU80ebdI%2BaeHQoEHB81frN%2B08Iw9hU2v3Usoxe37kvaQY5AfglAJws4GWl6WMcbl3GqDU%2BjxOY2QvR9hLTMTh%2FOvQuXdYPlr%2BjR8%2FNZ4uchGjZ3yD4egr1NeOnLqS%2FtQV%2FrUGrKtYc%2FgnNh7OvH&X-Amz-Signature=80bbd96056742c1f6d5ad089c6b8f38dc11f895fb103d25c95f9097915d606d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632QE2WTY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDWkku1hJJDPb076wLxk4pz%2B9YPRq5KZMIosOUA7v%2BAeAIgVACOpJsVWDOM3t2H60dZ2vkC6gXauzAQ2GOn%2F6qT%2Bz0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKdlaYsti0%2BoI7SIDyrcAyGhuJUV5%2F7ApwyDsXZGFgd0jV4aLoG0ByIhRJZh5G7DjctpvE%2Fi4fjzBFtwEkJN7puXLVgci6IwJ8NcRbvOW1ApQe76dfoRgCe5kffW6eBMW6xW%2FhdnXlm9ueK1A8zWVfx5Bxqbj%2BzyHIymtRy%2Fw1SivljV3PCKsYive2KnAryTUBeSvsqHFxt4vhrDaL9KzMSqSCAyoOXeCooHCp2MdhHOFYZD3Azrd291Ps4K%2BMz3UANE2vyNrRqbldrEBhb9cjYDnLih07%2FpAsmkLc3nUXxnfr0LkgKn2EcJoHA93bFd%2FsPnAYiY6v4zSKioOkKASbGpKgEpLizJA6UDkfiIhqbhyAGttAuG75DTGF29Edw%2Fs1ECW3JM%2BJ8MLJnz30%2FE8gBjr9XgGCw%2FS1Mw9jO%2BdFXHMnDr0h4DWdGXPEOwCTqh0Ky7oooTcM4vvi9T7EfyDR6Gi%2BALtIMDImLFTHspNXE9B7bZ%2B%2B263D%2F7xpqIxnrMZJnRF04OS7AvfOn00WU1OpnaKHDfSdpEFhLdokaXzyP5JCQU29E%2BE7%2FZ3qgX5VKrVN0HkXrCAzpRuKb2VA27L3aCprs5rbWIYBN6aCEKfKuvc%2F3doJnJjAIwsud5BrH6%2BS6uJJAz9kDukzkDMI%2FPir0GOqUB8fX5Fgp4pddiX%2Ft80rnDMCJ0a922YdZGlrBAJ0sB7XQowd2o5xiObBPYUIK%2BeJfAESy435C13DU80ebdI%2BaeHQoEHB81frN%2B08Iw9hU2v3Usoxe37kvaQY5AfglAJws4GWl6WMcbl3GqDU%2BjxOY2QvR9hLTMTh%2FOvQuXdYPlr%2BjR8%2FNZ4uchGjZ3yD4egr1NeOnLqS%2FtQV%2FrUGrKtYc%2FgnNh7OvH&X-Amz-Signature=c26f3d9aeb3abc8fb3382a53a1fbe28ab96f349905fe3bbc5766e6b0336e32a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
