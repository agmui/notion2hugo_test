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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWMAILE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCID%2F%2Fj0TOiApqt9jfziaIsTwjHjxRhIgjbyqbjvhq4YluAiEA9mZdA8cbS%2FaKQRypJ49s10bC7Y%2FFtZ9rdU8b1t6k6HIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyvLuZAxmX7rG5bcCrcAwCNyJxRGzMGcoMx%2Ff85qIGxcHzbz8Pjmvv9XdTlJdOjIvVIsqPQUPMq%2FOKtX5syRtXnlervqSr3lDbk2vs6NILJjHoiqr470bdGjQv6JG4tqMXb2PnKOsCCwbe16E6XALQpeO37TFJGUhTAb4XZBBmhMfByoU4rBQP7SolM%2FcMnNkOnJUWcrLBoLWrnkC7P2WQ6A0Oliop%2BgSb3B%2Bn8zDzkNJ%2B%2B6wuw88BIr8ka9RFt43iR8jggyk%2BVFCTEdiUneDPkL9YVNIL8Mvv6tkhFRHhb97gLSPnOOoys%2FRjFeSWrjv5oDmRlMfKMobqGhLBWrgNtiE96bDPtzVimNnGQla0OhHdNFWMSbAfTjbPTZ2DSTjM9Wj3wsrIXPNb1AxJ7eVtn%2B9hQWbJ0bN960l0FSrBa2Z9J2%2FiYPeL5QmQSXcN2xEt10iKwqJU4aPR693iqqNAIdQPux5jBcprdlWbrR%2BxJkLmklN7K0bHKkI1gSdVpTqn4zXiRepZZEacFLdv6AYyJGVql1S6zIwJkplysgWOfm7kjqjeq8bX%2B2S83HBq2RaQTncfi76LwRyG2xZq03T9SaJo3bWxRhVef%2FT7kmGJ0zIDRLT3%2BJla1Uc2QhJmmx%2FekiqWyiabb%2FI5FMMagj8AGOqUB52%2BI0Rl5EAG9QE9XiR5suGMX2m0qBU38vHUahdH7hAwtP%2FMzYaG8Qu4VFgmHLyR%2FOJIlUsSeRA9UEBBE%2Fe3%2FdaNpw8M3bey6LzkKzwE4FcuX9iMKsP5x1NCnpFrE739HcCFQ%2BOyG1uxw%2FFf05n4OIwymfGInPHmsH4ZvcEhJ0tYqAioS8A5kHBDrumTIdtwF3kckU30Jath%2FNqz6hggHa1%2BjJHQ1&X-Amz-Signature=9e88766d6d1156a7ed343fa721a888d5262986bc3913bbf6f4c7241dd9907611&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWMAILE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCID%2F%2Fj0TOiApqt9jfziaIsTwjHjxRhIgjbyqbjvhq4YluAiEA9mZdA8cbS%2FaKQRypJ49s10bC7Y%2FFtZ9rdU8b1t6k6HIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyvLuZAxmX7rG5bcCrcAwCNyJxRGzMGcoMx%2Ff85qIGxcHzbz8Pjmvv9XdTlJdOjIvVIsqPQUPMq%2FOKtX5syRtXnlervqSr3lDbk2vs6NILJjHoiqr470bdGjQv6JG4tqMXb2PnKOsCCwbe16E6XALQpeO37TFJGUhTAb4XZBBmhMfByoU4rBQP7SolM%2FcMnNkOnJUWcrLBoLWrnkC7P2WQ6A0Oliop%2BgSb3B%2Bn8zDzkNJ%2B%2B6wuw88BIr8ka9RFt43iR8jggyk%2BVFCTEdiUneDPkL9YVNIL8Mvv6tkhFRHhb97gLSPnOOoys%2FRjFeSWrjv5oDmRlMfKMobqGhLBWrgNtiE96bDPtzVimNnGQla0OhHdNFWMSbAfTjbPTZ2DSTjM9Wj3wsrIXPNb1AxJ7eVtn%2B9hQWbJ0bN960l0FSrBa2Z9J2%2FiYPeL5QmQSXcN2xEt10iKwqJU4aPR693iqqNAIdQPux5jBcprdlWbrR%2BxJkLmklN7K0bHKkI1gSdVpTqn4zXiRepZZEacFLdv6AYyJGVql1S6zIwJkplysgWOfm7kjqjeq8bX%2B2S83HBq2RaQTncfi76LwRyG2xZq03T9SaJo3bWxRhVef%2FT7kmGJ0zIDRLT3%2BJla1Uc2QhJmmx%2FekiqWyiabb%2FI5FMMagj8AGOqUB52%2BI0Rl5EAG9QE9XiR5suGMX2m0qBU38vHUahdH7hAwtP%2FMzYaG8Qu4VFgmHLyR%2FOJIlUsSeRA9UEBBE%2Fe3%2FdaNpw8M3bey6LzkKzwE4FcuX9iMKsP5x1NCnpFrE739HcCFQ%2BOyG1uxw%2FFf05n4OIwymfGInPHmsH4ZvcEhJ0tYqAioS8A5kHBDrumTIdtwF3kckU30Jath%2FNqz6hggHa1%2BjJHQ1&X-Amz-Signature=d0adc27394b4b33eb73b2e43c3f5ea9af0e2078e7b632aeb4ee8e8f7421f46fd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWMAILE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCID%2F%2Fj0TOiApqt9jfziaIsTwjHjxRhIgjbyqbjvhq4YluAiEA9mZdA8cbS%2FaKQRypJ49s10bC7Y%2FFtZ9rdU8b1t6k6HIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyvLuZAxmX7rG5bcCrcAwCNyJxRGzMGcoMx%2Ff85qIGxcHzbz8Pjmvv9XdTlJdOjIvVIsqPQUPMq%2FOKtX5syRtXnlervqSr3lDbk2vs6NILJjHoiqr470bdGjQv6JG4tqMXb2PnKOsCCwbe16E6XALQpeO37TFJGUhTAb4XZBBmhMfByoU4rBQP7SolM%2FcMnNkOnJUWcrLBoLWrnkC7P2WQ6A0Oliop%2BgSb3B%2Bn8zDzkNJ%2B%2B6wuw88BIr8ka9RFt43iR8jggyk%2BVFCTEdiUneDPkL9YVNIL8Mvv6tkhFRHhb97gLSPnOOoys%2FRjFeSWrjv5oDmRlMfKMobqGhLBWrgNtiE96bDPtzVimNnGQla0OhHdNFWMSbAfTjbPTZ2DSTjM9Wj3wsrIXPNb1AxJ7eVtn%2B9hQWbJ0bN960l0FSrBa2Z9J2%2FiYPeL5QmQSXcN2xEt10iKwqJU4aPR693iqqNAIdQPux5jBcprdlWbrR%2BxJkLmklN7K0bHKkI1gSdVpTqn4zXiRepZZEacFLdv6AYyJGVql1S6zIwJkplysgWOfm7kjqjeq8bX%2B2S83HBq2RaQTncfi76LwRyG2xZq03T9SaJo3bWxRhVef%2FT7kmGJ0zIDRLT3%2BJla1Uc2QhJmmx%2FekiqWyiabb%2FI5FMMagj8AGOqUB52%2BI0Rl5EAG9QE9XiR5suGMX2m0qBU38vHUahdH7hAwtP%2FMzYaG8Qu4VFgmHLyR%2FOJIlUsSeRA9UEBBE%2Fe3%2FdaNpw8M3bey6LzkKzwE4FcuX9iMKsP5x1NCnpFrE739HcCFQ%2BOyG1uxw%2FFf05n4OIwymfGInPHmsH4ZvcEhJ0tYqAioS8A5kHBDrumTIdtwF3kckU30Jath%2FNqz6hggHa1%2BjJHQ1&X-Amz-Signature=04c7df02f4d566223a3bb2692768b1fd230cd779de3740e8066cc79e4db40d31&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWMAILE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCID%2F%2Fj0TOiApqt9jfziaIsTwjHjxRhIgjbyqbjvhq4YluAiEA9mZdA8cbS%2FaKQRypJ49s10bC7Y%2FFtZ9rdU8b1t6k6HIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyvLuZAxmX7rG5bcCrcAwCNyJxRGzMGcoMx%2Ff85qIGxcHzbz8Pjmvv9XdTlJdOjIvVIsqPQUPMq%2FOKtX5syRtXnlervqSr3lDbk2vs6NILJjHoiqr470bdGjQv6JG4tqMXb2PnKOsCCwbe16E6XALQpeO37TFJGUhTAb4XZBBmhMfByoU4rBQP7SolM%2FcMnNkOnJUWcrLBoLWrnkC7P2WQ6A0Oliop%2BgSb3B%2Bn8zDzkNJ%2B%2B6wuw88BIr8ka9RFt43iR8jggyk%2BVFCTEdiUneDPkL9YVNIL8Mvv6tkhFRHhb97gLSPnOOoys%2FRjFeSWrjv5oDmRlMfKMobqGhLBWrgNtiE96bDPtzVimNnGQla0OhHdNFWMSbAfTjbPTZ2DSTjM9Wj3wsrIXPNb1AxJ7eVtn%2B9hQWbJ0bN960l0FSrBa2Z9J2%2FiYPeL5QmQSXcN2xEt10iKwqJU4aPR693iqqNAIdQPux5jBcprdlWbrR%2BxJkLmklN7K0bHKkI1gSdVpTqn4zXiRepZZEacFLdv6AYyJGVql1S6zIwJkplysgWOfm7kjqjeq8bX%2B2S83HBq2RaQTncfi76LwRyG2xZq03T9SaJo3bWxRhVef%2FT7kmGJ0zIDRLT3%2BJla1Uc2QhJmmx%2FekiqWyiabb%2FI5FMMagj8AGOqUB52%2BI0Rl5EAG9QE9XiR5suGMX2m0qBU38vHUahdH7hAwtP%2FMzYaG8Qu4VFgmHLyR%2FOJIlUsSeRA9UEBBE%2Fe3%2FdaNpw8M3bey6LzkKzwE4FcuX9iMKsP5x1NCnpFrE739HcCFQ%2BOyG1uxw%2FFf05n4OIwymfGInPHmsH4ZvcEhJ0tYqAioS8A5kHBDrumTIdtwF3kckU30Jath%2FNqz6hggHa1%2BjJHQ1&X-Amz-Signature=753b7925d59a8004eab4a90b1358089fe7745ae223ccce5d761b433b64d3fc52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWMAILE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCID%2F%2Fj0TOiApqt9jfziaIsTwjHjxRhIgjbyqbjvhq4YluAiEA9mZdA8cbS%2FaKQRypJ49s10bC7Y%2FFtZ9rdU8b1t6k6HIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyvLuZAxmX7rG5bcCrcAwCNyJxRGzMGcoMx%2Ff85qIGxcHzbz8Pjmvv9XdTlJdOjIvVIsqPQUPMq%2FOKtX5syRtXnlervqSr3lDbk2vs6NILJjHoiqr470bdGjQv6JG4tqMXb2PnKOsCCwbe16E6XALQpeO37TFJGUhTAb4XZBBmhMfByoU4rBQP7SolM%2FcMnNkOnJUWcrLBoLWrnkC7P2WQ6A0Oliop%2BgSb3B%2Bn8zDzkNJ%2B%2B6wuw88BIr8ka9RFt43iR8jggyk%2BVFCTEdiUneDPkL9YVNIL8Mvv6tkhFRHhb97gLSPnOOoys%2FRjFeSWrjv5oDmRlMfKMobqGhLBWrgNtiE96bDPtzVimNnGQla0OhHdNFWMSbAfTjbPTZ2DSTjM9Wj3wsrIXPNb1AxJ7eVtn%2B9hQWbJ0bN960l0FSrBa2Z9J2%2FiYPeL5QmQSXcN2xEt10iKwqJU4aPR693iqqNAIdQPux5jBcprdlWbrR%2BxJkLmklN7K0bHKkI1gSdVpTqn4zXiRepZZEacFLdv6AYyJGVql1S6zIwJkplysgWOfm7kjqjeq8bX%2B2S83HBq2RaQTncfi76LwRyG2xZq03T9SaJo3bWxRhVef%2FT7kmGJ0zIDRLT3%2BJla1Uc2QhJmmx%2FekiqWyiabb%2FI5FMMagj8AGOqUB52%2BI0Rl5EAG9QE9XiR5suGMX2m0qBU38vHUahdH7hAwtP%2FMzYaG8Qu4VFgmHLyR%2FOJIlUsSeRA9UEBBE%2Fe3%2FdaNpw8M3bey6LzkKzwE4FcuX9iMKsP5x1NCnpFrE739HcCFQ%2BOyG1uxw%2FFf05n4OIwymfGInPHmsH4ZvcEhJ0tYqAioS8A5kHBDrumTIdtwF3kckU30Jath%2FNqz6hggHa1%2BjJHQ1&X-Amz-Signature=5a28f71bb85243cd1afbc35934d91144721f541526be7694da1d673fc2140bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
