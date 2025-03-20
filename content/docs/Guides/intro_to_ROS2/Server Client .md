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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF422G3M%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIAGI0WvnsmiTPOt%2BLFAKWu5YDjdwjTWNH3kf31hIBPBvAiEArrcx4FrdFwSwvcmFSsRV7JX0BTMzcdOQwjNnJzRFRs0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5VoPSrgxwa4uWy%2BircA7p49KI%2FG8vmfmMOO3OD%2Fv7Xo18tasgQvsa0iuZpC7tccmtvlRzvVKzO6%2BePBMLHv77bFA68xKZHJ0nLgQ8kz3LTE%2FNpTrnCAhc3zYd5UCpWBCW4BwibwMbMIUM1MvrKme15gLnq%2Birp3RVz7obzUPXp0%2BmNjmRTlU2zN6SSARI1xUb%2FK3jvXam2b1%2Fq0aYrGrpFU%2BhGUFX%2BVy2%2FcbklfjmWdeOaojrjfqTlNBsQRoQkYuD1cMGrxrPR784jkbEoi0YNouNZl5n798Iwyct2S9OsHmacNTcNx4F6tNXNrKVmL6bbwVkBeWsG1eTU8Ty76skNaBuK8k2w2XkC8Jh2mkqByme1lNWa6TDgy1McLS52X3T9X5oQxQ4tySq2wzeeA%2B2K5pL3o7Pf3zWhAhtVpu6goP3jSgklo52IhSrkbZQOeLzVMCZd6vR1T2MX%2BQX8B1zLWXl4Ga5xdcD1hkQx6X6dMbMsZrhiihu7A%2FVR8GWwNW6e5UcI%2FVxeZ%2FH5c8YXr7otaj6AO5bNroFhVHuHzqbOCFqhpMFLriJuFKkEqlYCC5g0ZY%2B9bG6irHM0X1xilsHxXM3nrwiai6xsS9LlyiwznRtZ2V8A7vIbA%2FxalR74%2FVuOggad1WA%2FnsxZMIPH774GOqUBqL1Ps7q5gnbWKltI4GuVp2bfhpGWhO6y4luclxiX4jXotfF08m%2BfwzwZTCyiR09aFFioOHL6NanZJJUBD88hT9a79tWDvEoIVfzrZMzvU4UFTrefVdeNLHC01ibQBcqJ3uAwS%2B%2BwVeD6Id0Ytx2svCjSmsN6Wp2OUJvq9Hptw3Qqi37M9DmpHiQl8499bRDfkE0LZiUW5%2Bhp0dLLYQ8e8tp%2Bpdhs&X-Amz-Signature=12e876cf48bac93693856c11655d521635f0e012bc59fe5669d5df387e36950d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF422G3M%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIAGI0WvnsmiTPOt%2BLFAKWu5YDjdwjTWNH3kf31hIBPBvAiEArrcx4FrdFwSwvcmFSsRV7JX0BTMzcdOQwjNnJzRFRs0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5VoPSrgxwa4uWy%2BircA7p49KI%2FG8vmfmMOO3OD%2Fv7Xo18tasgQvsa0iuZpC7tccmtvlRzvVKzO6%2BePBMLHv77bFA68xKZHJ0nLgQ8kz3LTE%2FNpTrnCAhc3zYd5UCpWBCW4BwibwMbMIUM1MvrKme15gLnq%2Birp3RVz7obzUPXp0%2BmNjmRTlU2zN6SSARI1xUb%2FK3jvXam2b1%2Fq0aYrGrpFU%2BhGUFX%2BVy2%2FcbklfjmWdeOaojrjfqTlNBsQRoQkYuD1cMGrxrPR784jkbEoi0YNouNZl5n798Iwyct2S9OsHmacNTcNx4F6tNXNrKVmL6bbwVkBeWsG1eTU8Ty76skNaBuK8k2w2XkC8Jh2mkqByme1lNWa6TDgy1McLS52X3T9X5oQxQ4tySq2wzeeA%2B2K5pL3o7Pf3zWhAhtVpu6goP3jSgklo52IhSrkbZQOeLzVMCZd6vR1T2MX%2BQX8B1zLWXl4Ga5xdcD1hkQx6X6dMbMsZrhiihu7A%2FVR8GWwNW6e5UcI%2FVxeZ%2FH5c8YXr7otaj6AO5bNroFhVHuHzqbOCFqhpMFLriJuFKkEqlYCC5g0ZY%2B9bG6irHM0X1xilsHxXM3nrwiai6xsS9LlyiwznRtZ2V8A7vIbA%2FxalR74%2FVuOggad1WA%2FnsxZMIPH774GOqUBqL1Ps7q5gnbWKltI4GuVp2bfhpGWhO6y4luclxiX4jXotfF08m%2BfwzwZTCyiR09aFFioOHL6NanZJJUBD88hT9a79tWDvEoIVfzrZMzvU4UFTrefVdeNLHC01ibQBcqJ3uAwS%2B%2BwVeD6Id0Ytx2svCjSmsN6Wp2OUJvq9Hptw3Qqi37M9DmpHiQl8499bRDfkE0LZiUW5%2Bhp0dLLYQ8e8tp%2Bpdhs&X-Amz-Signature=d5050da2d1b633badbd985a0fe9b2a6f626c132cb4789a7604cfcdd0b3a7a381&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF422G3M%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIAGI0WvnsmiTPOt%2BLFAKWu5YDjdwjTWNH3kf31hIBPBvAiEArrcx4FrdFwSwvcmFSsRV7JX0BTMzcdOQwjNnJzRFRs0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5VoPSrgxwa4uWy%2BircA7p49KI%2FG8vmfmMOO3OD%2Fv7Xo18tasgQvsa0iuZpC7tccmtvlRzvVKzO6%2BePBMLHv77bFA68xKZHJ0nLgQ8kz3LTE%2FNpTrnCAhc3zYd5UCpWBCW4BwibwMbMIUM1MvrKme15gLnq%2Birp3RVz7obzUPXp0%2BmNjmRTlU2zN6SSARI1xUb%2FK3jvXam2b1%2Fq0aYrGrpFU%2BhGUFX%2BVy2%2FcbklfjmWdeOaojrjfqTlNBsQRoQkYuD1cMGrxrPR784jkbEoi0YNouNZl5n798Iwyct2S9OsHmacNTcNx4F6tNXNrKVmL6bbwVkBeWsG1eTU8Ty76skNaBuK8k2w2XkC8Jh2mkqByme1lNWa6TDgy1McLS52X3T9X5oQxQ4tySq2wzeeA%2B2K5pL3o7Pf3zWhAhtVpu6goP3jSgklo52IhSrkbZQOeLzVMCZd6vR1T2MX%2BQX8B1zLWXl4Ga5xdcD1hkQx6X6dMbMsZrhiihu7A%2FVR8GWwNW6e5UcI%2FVxeZ%2FH5c8YXr7otaj6AO5bNroFhVHuHzqbOCFqhpMFLriJuFKkEqlYCC5g0ZY%2B9bG6irHM0X1xilsHxXM3nrwiai6xsS9LlyiwznRtZ2V8A7vIbA%2FxalR74%2FVuOggad1WA%2FnsxZMIPH774GOqUBqL1Ps7q5gnbWKltI4GuVp2bfhpGWhO6y4luclxiX4jXotfF08m%2BfwzwZTCyiR09aFFioOHL6NanZJJUBD88hT9a79tWDvEoIVfzrZMzvU4UFTrefVdeNLHC01ibQBcqJ3uAwS%2B%2BwVeD6Id0Ytx2svCjSmsN6Wp2OUJvq9Hptw3Qqi37M9DmpHiQl8499bRDfkE0LZiUW5%2Bhp0dLLYQ8e8tp%2Bpdhs&X-Amz-Signature=7e9c115a25965a3d34f89645fcbf62fd457cb9d0c3e4266f4ba31c8efc0375e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF422G3M%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIAGI0WvnsmiTPOt%2BLFAKWu5YDjdwjTWNH3kf31hIBPBvAiEArrcx4FrdFwSwvcmFSsRV7JX0BTMzcdOQwjNnJzRFRs0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5VoPSrgxwa4uWy%2BircA7p49KI%2FG8vmfmMOO3OD%2Fv7Xo18tasgQvsa0iuZpC7tccmtvlRzvVKzO6%2BePBMLHv77bFA68xKZHJ0nLgQ8kz3LTE%2FNpTrnCAhc3zYd5UCpWBCW4BwibwMbMIUM1MvrKme15gLnq%2Birp3RVz7obzUPXp0%2BmNjmRTlU2zN6SSARI1xUb%2FK3jvXam2b1%2Fq0aYrGrpFU%2BhGUFX%2BVy2%2FcbklfjmWdeOaojrjfqTlNBsQRoQkYuD1cMGrxrPR784jkbEoi0YNouNZl5n798Iwyct2S9OsHmacNTcNx4F6tNXNrKVmL6bbwVkBeWsG1eTU8Ty76skNaBuK8k2w2XkC8Jh2mkqByme1lNWa6TDgy1McLS52X3T9X5oQxQ4tySq2wzeeA%2B2K5pL3o7Pf3zWhAhtVpu6goP3jSgklo52IhSrkbZQOeLzVMCZd6vR1T2MX%2BQX8B1zLWXl4Ga5xdcD1hkQx6X6dMbMsZrhiihu7A%2FVR8GWwNW6e5UcI%2FVxeZ%2FH5c8YXr7otaj6AO5bNroFhVHuHzqbOCFqhpMFLriJuFKkEqlYCC5g0ZY%2B9bG6irHM0X1xilsHxXM3nrwiai6xsS9LlyiwznRtZ2V8A7vIbA%2FxalR74%2FVuOggad1WA%2FnsxZMIPH774GOqUBqL1Ps7q5gnbWKltI4GuVp2bfhpGWhO6y4luclxiX4jXotfF08m%2BfwzwZTCyiR09aFFioOHL6NanZJJUBD88hT9a79tWDvEoIVfzrZMzvU4UFTrefVdeNLHC01ibQBcqJ3uAwS%2B%2BwVeD6Id0Ytx2svCjSmsN6Wp2OUJvq9Hptw3Qqi37M9DmpHiQl8499bRDfkE0LZiUW5%2Bhp0dLLYQ8e8tp%2Bpdhs&X-Amz-Signature=b8a702466b2057b782abda368e7cea5d993698380f4cb9193846b6547ed76260&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF422G3M%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIAGI0WvnsmiTPOt%2BLFAKWu5YDjdwjTWNH3kf31hIBPBvAiEArrcx4FrdFwSwvcmFSsRV7JX0BTMzcdOQwjNnJzRFRs0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5VoPSrgxwa4uWy%2BircA7p49KI%2FG8vmfmMOO3OD%2Fv7Xo18tasgQvsa0iuZpC7tccmtvlRzvVKzO6%2BePBMLHv77bFA68xKZHJ0nLgQ8kz3LTE%2FNpTrnCAhc3zYd5UCpWBCW4BwibwMbMIUM1MvrKme15gLnq%2Birp3RVz7obzUPXp0%2BmNjmRTlU2zN6SSARI1xUb%2FK3jvXam2b1%2Fq0aYrGrpFU%2BhGUFX%2BVy2%2FcbklfjmWdeOaojrjfqTlNBsQRoQkYuD1cMGrxrPR784jkbEoi0YNouNZl5n798Iwyct2S9OsHmacNTcNx4F6tNXNrKVmL6bbwVkBeWsG1eTU8Ty76skNaBuK8k2w2XkC8Jh2mkqByme1lNWa6TDgy1McLS52X3T9X5oQxQ4tySq2wzeeA%2B2K5pL3o7Pf3zWhAhtVpu6goP3jSgklo52IhSrkbZQOeLzVMCZd6vR1T2MX%2BQX8B1zLWXl4Ga5xdcD1hkQx6X6dMbMsZrhiihu7A%2FVR8GWwNW6e5UcI%2FVxeZ%2FH5c8YXr7otaj6AO5bNroFhVHuHzqbOCFqhpMFLriJuFKkEqlYCC5g0ZY%2B9bG6irHM0X1xilsHxXM3nrwiai6xsS9LlyiwznRtZ2V8A7vIbA%2FxalR74%2FVuOggad1WA%2FnsxZMIPH774GOqUBqL1Ps7q5gnbWKltI4GuVp2bfhpGWhO6y4luclxiX4jXotfF08m%2BfwzwZTCyiR09aFFioOHL6NanZJJUBD88hT9a79tWDvEoIVfzrZMzvU4UFTrefVdeNLHC01ibQBcqJ3uAwS%2B%2BwVeD6Id0Ytx2svCjSmsN6Wp2OUJvq9Hptw3Qqi37M9DmpHiQl8499bRDfkE0LZiUW5%2Bhp0dLLYQ8e8tp%2Bpdhs&X-Amz-Signature=cd2518e8240cd5ba323b07da9e19d70b6179f007a93745e10416e57ab1277a65&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
