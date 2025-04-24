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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOOIZYJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsFxOa79ekdP4KFgjaJZw6QtizK0MY1rAPsLFC4QPRrAIgZ2LV8v5vbslX8W38VcTlih2G3b2GcJHkU2roZViA2Q0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDRPuyhVNc6JG1yAoSrcA4Ke0xKert3jMzdZN4z8MV5FleCyLwXGJDjYooX529%2B7JMS3dWOh8rXreEc1kSHzV7Zdmac8yVY0uoLqJjFp6bvyiL8y8zFqGFxGE5pnDZdFS942cB%2F8k%2BHaFUHHHc00VP4rHH%2BX1We6MsyjfmrtNnCgX7cNekwUX0RdumN93OXAFYFbSK3xkzaTBAxp9LlnnMGNh4rHytCkeG9L9ATMMBW%2FfkKX80OM0hCrYU%2BjXNREONcp5rLhIoibnuKXv050sXt9VjQ5fKhYnAG%2FdNlRgurUHEsESiyimoHZJRiucRvODAGLSk2Fz8VuBkJC2Rn4eGK%2FxOtJ3QuD%2BfL%2BYwTeiNTtXplU1e8OM%2F4OGRuc12DV08uPu0puxsF0gD8PiWo24qnXDxSkuK4MtYLD5DyCz0zvr9DnjUrxIOWqC6m7%2FduPL%2F6qJN7qCXeCt1cTn%2FsVWWEuEBsahaLcjngpEyhaZm9pvXjyl5kBW9G7wbKRkPjpWObVoDjLxQB6IPI0R0gwCOz5vQ0RfEt9Zke9tXVOu9VirkHbQSabkfKmF8Zy9e37T2Cjdkaw805HgNnFkWaK04B7P5XPw%2FIpHB7BWe3K6BwKn9%2FYsD2AyQxcOiqSTlQo%2BEd0SdWT4xhsy4x1MLKkqsAGOqUBFzeiAOqzl%2B3GecwfMsT5XDjgE0kcym%2BIjp4MF6VVg5Vv5ObTSOleP%2FxLzy2YvmPvk5HW9QPfqwsQl3VW3wizlBmVLZXh6lCIjW%2F5Y6b4uRTsvCL5HirPNSnpv8lHxZeMHSlT%2BI%2FvN35f%2FG4fjjtgK21R10ayzM7uXJjuehLjE5vkJZCQAzNRpS8bEwFernZ%2BGXxC0gdAmpzH3lXU5uz62sYMfTy9&X-Amz-Signature=f0536aed97a43de8a785610e9b90ef40e04ad864ec76c018cfd016e69468ba1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOOIZYJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsFxOa79ekdP4KFgjaJZw6QtizK0MY1rAPsLFC4QPRrAIgZ2LV8v5vbslX8W38VcTlih2G3b2GcJHkU2roZViA2Q0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDRPuyhVNc6JG1yAoSrcA4Ke0xKert3jMzdZN4z8MV5FleCyLwXGJDjYooX529%2B7JMS3dWOh8rXreEc1kSHzV7Zdmac8yVY0uoLqJjFp6bvyiL8y8zFqGFxGE5pnDZdFS942cB%2F8k%2BHaFUHHHc00VP4rHH%2BX1We6MsyjfmrtNnCgX7cNekwUX0RdumN93OXAFYFbSK3xkzaTBAxp9LlnnMGNh4rHytCkeG9L9ATMMBW%2FfkKX80OM0hCrYU%2BjXNREONcp5rLhIoibnuKXv050sXt9VjQ5fKhYnAG%2FdNlRgurUHEsESiyimoHZJRiucRvODAGLSk2Fz8VuBkJC2Rn4eGK%2FxOtJ3QuD%2BfL%2BYwTeiNTtXplU1e8OM%2F4OGRuc12DV08uPu0puxsF0gD8PiWo24qnXDxSkuK4MtYLD5DyCz0zvr9DnjUrxIOWqC6m7%2FduPL%2F6qJN7qCXeCt1cTn%2FsVWWEuEBsahaLcjngpEyhaZm9pvXjyl5kBW9G7wbKRkPjpWObVoDjLxQB6IPI0R0gwCOz5vQ0RfEt9Zke9tXVOu9VirkHbQSabkfKmF8Zy9e37T2Cjdkaw805HgNnFkWaK04B7P5XPw%2FIpHB7BWe3K6BwKn9%2FYsD2AyQxcOiqSTlQo%2BEd0SdWT4xhsy4x1MLKkqsAGOqUBFzeiAOqzl%2B3GecwfMsT5XDjgE0kcym%2BIjp4MF6VVg5Vv5ObTSOleP%2FxLzy2YvmPvk5HW9QPfqwsQl3VW3wizlBmVLZXh6lCIjW%2F5Y6b4uRTsvCL5HirPNSnpv8lHxZeMHSlT%2BI%2FvN35f%2FG4fjjtgK21R10ayzM7uXJjuehLjE5vkJZCQAzNRpS8bEwFernZ%2BGXxC0gdAmpzH3lXU5uz62sYMfTy9&X-Amz-Signature=86f9547907458967bd6f97b267b0382a6e61ebda2e638ce98c8d60c83bc087ac&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOOIZYJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsFxOa79ekdP4KFgjaJZw6QtizK0MY1rAPsLFC4QPRrAIgZ2LV8v5vbslX8W38VcTlih2G3b2GcJHkU2roZViA2Q0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDRPuyhVNc6JG1yAoSrcA4Ke0xKert3jMzdZN4z8MV5FleCyLwXGJDjYooX529%2B7JMS3dWOh8rXreEc1kSHzV7Zdmac8yVY0uoLqJjFp6bvyiL8y8zFqGFxGE5pnDZdFS942cB%2F8k%2BHaFUHHHc00VP4rHH%2BX1We6MsyjfmrtNnCgX7cNekwUX0RdumN93OXAFYFbSK3xkzaTBAxp9LlnnMGNh4rHytCkeG9L9ATMMBW%2FfkKX80OM0hCrYU%2BjXNREONcp5rLhIoibnuKXv050sXt9VjQ5fKhYnAG%2FdNlRgurUHEsESiyimoHZJRiucRvODAGLSk2Fz8VuBkJC2Rn4eGK%2FxOtJ3QuD%2BfL%2BYwTeiNTtXplU1e8OM%2F4OGRuc12DV08uPu0puxsF0gD8PiWo24qnXDxSkuK4MtYLD5DyCz0zvr9DnjUrxIOWqC6m7%2FduPL%2F6qJN7qCXeCt1cTn%2FsVWWEuEBsahaLcjngpEyhaZm9pvXjyl5kBW9G7wbKRkPjpWObVoDjLxQB6IPI0R0gwCOz5vQ0RfEt9Zke9tXVOu9VirkHbQSabkfKmF8Zy9e37T2Cjdkaw805HgNnFkWaK04B7P5XPw%2FIpHB7BWe3K6BwKn9%2FYsD2AyQxcOiqSTlQo%2BEd0SdWT4xhsy4x1MLKkqsAGOqUBFzeiAOqzl%2B3GecwfMsT5XDjgE0kcym%2BIjp4MF6VVg5Vv5ObTSOleP%2FxLzy2YvmPvk5HW9QPfqwsQl3VW3wizlBmVLZXh6lCIjW%2F5Y6b4uRTsvCL5HirPNSnpv8lHxZeMHSlT%2BI%2FvN35f%2FG4fjjtgK21R10ayzM7uXJjuehLjE5vkJZCQAzNRpS8bEwFernZ%2BGXxC0gdAmpzH3lXU5uz62sYMfTy9&X-Amz-Signature=76f4b88d9613c0b742cb6de4bb555f8a1dde3f551198bd3cb324005524ba7b12&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOOIZYJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsFxOa79ekdP4KFgjaJZw6QtizK0MY1rAPsLFC4QPRrAIgZ2LV8v5vbslX8W38VcTlih2G3b2GcJHkU2roZViA2Q0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDRPuyhVNc6JG1yAoSrcA4Ke0xKert3jMzdZN4z8MV5FleCyLwXGJDjYooX529%2B7JMS3dWOh8rXreEc1kSHzV7Zdmac8yVY0uoLqJjFp6bvyiL8y8zFqGFxGE5pnDZdFS942cB%2F8k%2BHaFUHHHc00VP4rHH%2BX1We6MsyjfmrtNnCgX7cNekwUX0RdumN93OXAFYFbSK3xkzaTBAxp9LlnnMGNh4rHytCkeG9L9ATMMBW%2FfkKX80OM0hCrYU%2BjXNREONcp5rLhIoibnuKXv050sXt9VjQ5fKhYnAG%2FdNlRgurUHEsESiyimoHZJRiucRvODAGLSk2Fz8VuBkJC2Rn4eGK%2FxOtJ3QuD%2BfL%2BYwTeiNTtXplU1e8OM%2F4OGRuc12DV08uPu0puxsF0gD8PiWo24qnXDxSkuK4MtYLD5DyCz0zvr9DnjUrxIOWqC6m7%2FduPL%2F6qJN7qCXeCt1cTn%2FsVWWEuEBsahaLcjngpEyhaZm9pvXjyl5kBW9G7wbKRkPjpWObVoDjLxQB6IPI0R0gwCOz5vQ0RfEt9Zke9tXVOu9VirkHbQSabkfKmF8Zy9e37T2Cjdkaw805HgNnFkWaK04B7P5XPw%2FIpHB7BWe3K6BwKn9%2FYsD2AyQxcOiqSTlQo%2BEd0SdWT4xhsy4x1MLKkqsAGOqUBFzeiAOqzl%2B3GecwfMsT5XDjgE0kcym%2BIjp4MF6VVg5Vv5ObTSOleP%2FxLzy2YvmPvk5HW9QPfqwsQl3VW3wizlBmVLZXh6lCIjW%2F5Y6b4uRTsvCL5HirPNSnpv8lHxZeMHSlT%2BI%2FvN35f%2FG4fjjtgK21R10ayzM7uXJjuehLjE5vkJZCQAzNRpS8bEwFernZ%2BGXxC0gdAmpzH3lXU5uz62sYMfTy9&X-Amz-Signature=57b68fcf5ad51d93d1b8a2a1b640aca08bafb73ade94fb52d7be4d390921513d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOOIZYJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsFxOa79ekdP4KFgjaJZw6QtizK0MY1rAPsLFC4QPRrAIgZ2LV8v5vbslX8W38VcTlih2G3b2GcJHkU2roZViA2Q0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDRPuyhVNc6JG1yAoSrcA4Ke0xKert3jMzdZN4z8MV5FleCyLwXGJDjYooX529%2B7JMS3dWOh8rXreEc1kSHzV7Zdmac8yVY0uoLqJjFp6bvyiL8y8zFqGFxGE5pnDZdFS942cB%2F8k%2BHaFUHHHc00VP4rHH%2BX1We6MsyjfmrtNnCgX7cNekwUX0RdumN93OXAFYFbSK3xkzaTBAxp9LlnnMGNh4rHytCkeG9L9ATMMBW%2FfkKX80OM0hCrYU%2BjXNREONcp5rLhIoibnuKXv050sXt9VjQ5fKhYnAG%2FdNlRgurUHEsESiyimoHZJRiucRvODAGLSk2Fz8VuBkJC2Rn4eGK%2FxOtJ3QuD%2BfL%2BYwTeiNTtXplU1e8OM%2F4OGRuc12DV08uPu0puxsF0gD8PiWo24qnXDxSkuK4MtYLD5DyCz0zvr9DnjUrxIOWqC6m7%2FduPL%2F6qJN7qCXeCt1cTn%2FsVWWEuEBsahaLcjngpEyhaZm9pvXjyl5kBW9G7wbKRkPjpWObVoDjLxQB6IPI0R0gwCOz5vQ0RfEt9Zke9tXVOu9VirkHbQSabkfKmF8Zy9e37T2Cjdkaw805HgNnFkWaK04B7P5XPw%2FIpHB7BWe3K6BwKn9%2FYsD2AyQxcOiqSTlQo%2BEd0SdWT4xhsy4x1MLKkqsAGOqUBFzeiAOqzl%2B3GecwfMsT5XDjgE0kcym%2BIjp4MF6VVg5Vv5ObTSOleP%2FxLzy2YvmPvk5HW9QPfqwsQl3VW3wizlBmVLZXh6lCIjW%2F5Y6b4uRTsvCL5HirPNSnpv8lHxZeMHSlT%2BI%2FvN35f%2FG4fjjtgK21R10ayzM7uXJjuehLjE5vkJZCQAzNRpS8bEwFernZ%2BGXxC0gdAmpzH3lXU5uz62sYMfTy9&X-Amz-Signature=a01a52cadebcdbcf7eb0b29c47db181de2d806a49dcf22f566f456e12adaabfb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
