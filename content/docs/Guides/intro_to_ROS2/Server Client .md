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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2D2HWAC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCQ8Mg6ZO31UdTpKfMQYat8LzoIWnVcMyDoDFAx6JOOjAIhAJzb4jXeOt0RyIcpqQzYtJiECvZLWzxHUM%2FoADk9wZLNKv8DCHAQABoMNjM3NDIzMTgzODA1Igyd2DxcRW4SyVg9opcq3ANECdPU2ALJ%2BiykQqjnqi2wFVgtDPwfm%2Fv1VBV5EPFBFr5J3zBpqiIv75Z79IMYbL3EFAOg1bT8BTl6SeJugsq%2BIysp0r9pXadV4fA1SJsZW9AfGXiCuDhuBFdjI6fOSRYpQAtbQJyaMC%2F0KkDjp9MexT%2BuYhw5Ek%2Fk0OE8CvUu9aE%2F5a9x2qfkUGzmlA52iw74Mwsh7vKTiBcrx6wZPiEppSCEow6Py8NEyK%2BwtVuiO8PhWDXL3ph2BMyoN7UiJm40n3LiHdF8TinU%2BC6kZavEMidVHNAnSqa7GD4V57iIhDW7Wy7TqYEeKMB10zBQpgaSVNuvNXJxP3YX5JllqO%2FG4KCwhj9o6uv4fiwowvvqEvl%2BJb7ttQi1rDq3AKAqhxRj3LrtKHjIkNCM3yWNNUQvuTFcMnDC3zaN0FsL36fB%2Fgpp%2BbI7o5osMr1kqf3X3b%2BMXWBHCtsklDIF%2BB%2B3GOBh%2BRaUfvuo2C40mByqpXqCltvJu8XW5ZQMbKwR1q3yCFHKW42dorO50I69%2BI6V3Moko3%2FaCbirSYD3Do%2FA%2BUnBQA1RVk09HpbXDGiY1i2ZX3L%2F%2Fj8rxHuzMa7ryPlwq1x00BTpXCywGFz8fLxWrEX56vL0RuJS%2BVIb1JyAVjCBjIC%2BBjqkASkwJZjBYYmOZiF5vK4GsArlw%2BLcDGCcgUNMLjWFfc75eBxA4rS4l9xRNPfibKs%2BRNoVFPlKb9Tk12UHlUxK3GGuloE1CyDXg5qWEr7VNFAPwxaBclZ20tv3Qt6mncgS5AIAC36WhiSeVJ%2FrqcXQ4VidNakSXsgCufqBWv65hvafd24HrPBm4rbwWZF9vjv488uwG0F1wjmzzq1Wa3LSCL7Z4MyU&X-Amz-Signature=1cbaccd2a74c7d4703bad08aafe940df85b0b52785b67f2ff0887ca60d7f9c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2D2HWAC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCQ8Mg6ZO31UdTpKfMQYat8LzoIWnVcMyDoDFAx6JOOjAIhAJzb4jXeOt0RyIcpqQzYtJiECvZLWzxHUM%2FoADk9wZLNKv8DCHAQABoMNjM3NDIzMTgzODA1Igyd2DxcRW4SyVg9opcq3ANECdPU2ALJ%2BiykQqjnqi2wFVgtDPwfm%2Fv1VBV5EPFBFr5J3zBpqiIv75Z79IMYbL3EFAOg1bT8BTl6SeJugsq%2BIysp0r9pXadV4fA1SJsZW9AfGXiCuDhuBFdjI6fOSRYpQAtbQJyaMC%2F0KkDjp9MexT%2BuYhw5Ek%2Fk0OE8CvUu9aE%2F5a9x2qfkUGzmlA52iw74Mwsh7vKTiBcrx6wZPiEppSCEow6Py8NEyK%2BwtVuiO8PhWDXL3ph2BMyoN7UiJm40n3LiHdF8TinU%2BC6kZavEMidVHNAnSqa7GD4V57iIhDW7Wy7TqYEeKMB10zBQpgaSVNuvNXJxP3YX5JllqO%2FG4KCwhj9o6uv4fiwowvvqEvl%2BJb7ttQi1rDq3AKAqhxRj3LrtKHjIkNCM3yWNNUQvuTFcMnDC3zaN0FsL36fB%2Fgpp%2BbI7o5osMr1kqf3X3b%2BMXWBHCtsklDIF%2BB%2B3GOBh%2BRaUfvuo2C40mByqpXqCltvJu8XW5ZQMbKwR1q3yCFHKW42dorO50I69%2BI6V3Moko3%2FaCbirSYD3Do%2FA%2BUnBQA1RVk09HpbXDGiY1i2ZX3L%2F%2Fj8rxHuzMa7ryPlwq1x00BTpXCywGFz8fLxWrEX56vL0RuJS%2BVIb1JyAVjCBjIC%2BBjqkASkwJZjBYYmOZiF5vK4GsArlw%2BLcDGCcgUNMLjWFfc75eBxA4rS4l9xRNPfibKs%2BRNoVFPlKb9Tk12UHlUxK3GGuloE1CyDXg5qWEr7VNFAPwxaBclZ20tv3Qt6mncgS5AIAC36WhiSeVJ%2FrqcXQ4VidNakSXsgCufqBWv65hvafd24HrPBm4rbwWZF9vjv488uwG0F1wjmzzq1Wa3LSCL7Z4MyU&X-Amz-Signature=a90644ea5bc65997923b7b7fe03fa4a6a6308fbde7f86ffd7e08d02cfa86c02a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2D2HWAC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCQ8Mg6ZO31UdTpKfMQYat8LzoIWnVcMyDoDFAx6JOOjAIhAJzb4jXeOt0RyIcpqQzYtJiECvZLWzxHUM%2FoADk9wZLNKv8DCHAQABoMNjM3NDIzMTgzODA1Igyd2DxcRW4SyVg9opcq3ANECdPU2ALJ%2BiykQqjnqi2wFVgtDPwfm%2Fv1VBV5EPFBFr5J3zBpqiIv75Z79IMYbL3EFAOg1bT8BTl6SeJugsq%2BIysp0r9pXadV4fA1SJsZW9AfGXiCuDhuBFdjI6fOSRYpQAtbQJyaMC%2F0KkDjp9MexT%2BuYhw5Ek%2Fk0OE8CvUu9aE%2F5a9x2qfkUGzmlA52iw74Mwsh7vKTiBcrx6wZPiEppSCEow6Py8NEyK%2BwtVuiO8PhWDXL3ph2BMyoN7UiJm40n3LiHdF8TinU%2BC6kZavEMidVHNAnSqa7GD4V57iIhDW7Wy7TqYEeKMB10zBQpgaSVNuvNXJxP3YX5JllqO%2FG4KCwhj9o6uv4fiwowvvqEvl%2BJb7ttQi1rDq3AKAqhxRj3LrtKHjIkNCM3yWNNUQvuTFcMnDC3zaN0FsL36fB%2Fgpp%2BbI7o5osMr1kqf3X3b%2BMXWBHCtsklDIF%2BB%2B3GOBh%2BRaUfvuo2C40mByqpXqCltvJu8XW5ZQMbKwR1q3yCFHKW42dorO50I69%2BI6V3Moko3%2FaCbirSYD3Do%2FA%2BUnBQA1RVk09HpbXDGiY1i2ZX3L%2F%2Fj8rxHuzMa7ryPlwq1x00BTpXCywGFz8fLxWrEX56vL0RuJS%2BVIb1JyAVjCBjIC%2BBjqkASkwJZjBYYmOZiF5vK4GsArlw%2BLcDGCcgUNMLjWFfc75eBxA4rS4l9xRNPfibKs%2BRNoVFPlKb9Tk12UHlUxK3GGuloE1CyDXg5qWEr7VNFAPwxaBclZ20tv3Qt6mncgS5AIAC36WhiSeVJ%2FrqcXQ4VidNakSXsgCufqBWv65hvafd24HrPBm4rbwWZF9vjv488uwG0F1wjmzzq1Wa3LSCL7Z4MyU&X-Amz-Signature=b40f854c5d0256f6c31409754b6ebf0cd81b9bf3efbc170302ad248342f6885a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2D2HWAC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCQ8Mg6ZO31UdTpKfMQYat8LzoIWnVcMyDoDFAx6JOOjAIhAJzb4jXeOt0RyIcpqQzYtJiECvZLWzxHUM%2FoADk9wZLNKv8DCHAQABoMNjM3NDIzMTgzODA1Igyd2DxcRW4SyVg9opcq3ANECdPU2ALJ%2BiykQqjnqi2wFVgtDPwfm%2Fv1VBV5EPFBFr5J3zBpqiIv75Z79IMYbL3EFAOg1bT8BTl6SeJugsq%2BIysp0r9pXadV4fA1SJsZW9AfGXiCuDhuBFdjI6fOSRYpQAtbQJyaMC%2F0KkDjp9MexT%2BuYhw5Ek%2Fk0OE8CvUu9aE%2F5a9x2qfkUGzmlA52iw74Mwsh7vKTiBcrx6wZPiEppSCEow6Py8NEyK%2BwtVuiO8PhWDXL3ph2BMyoN7UiJm40n3LiHdF8TinU%2BC6kZavEMidVHNAnSqa7GD4V57iIhDW7Wy7TqYEeKMB10zBQpgaSVNuvNXJxP3YX5JllqO%2FG4KCwhj9o6uv4fiwowvvqEvl%2BJb7ttQi1rDq3AKAqhxRj3LrtKHjIkNCM3yWNNUQvuTFcMnDC3zaN0FsL36fB%2Fgpp%2BbI7o5osMr1kqf3X3b%2BMXWBHCtsklDIF%2BB%2B3GOBh%2BRaUfvuo2C40mByqpXqCltvJu8XW5ZQMbKwR1q3yCFHKW42dorO50I69%2BI6V3Moko3%2FaCbirSYD3Do%2FA%2BUnBQA1RVk09HpbXDGiY1i2ZX3L%2F%2Fj8rxHuzMa7ryPlwq1x00BTpXCywGFz8fLxWrEX56vL0RuJS%2BVIb1JyAVjCBjIC%2BBjqkASkwJZjBYYmOZiF5vK4GsArlw%2BLcDGCcgUNMLjWFfc75eBxA4rS4l9xRNPfibKs%2BRNoVFPlKb9Tk12UHlUxK3GGuloE1CyDXg5qWEr7VNFAPwxaBclZ20tv3Qt6mncgS5AIAC36WhiSeVJ%2FrqcXQ4VidNakSXsgCufqBWv65hvafd24HrPBm4rbwWZF9vjv488uwG0F1wjmzzq1Wa3LSCL7Z4MyU&X-Amz-Signature=bfa5cae8177a1080b1cbcbbf4e2bab114066a5207ab79f026efc81d9cf49af5f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2D2HWAC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCQ8Mg6ZO31UdTpKfMQYat8LzoIWnVcMyDoDFAx6JOOjAIhAJzb4jXeOt0RyIcpqQzYtJiECvZLWzxHUM%2FoADk9wZLNKv8DCHAQABoMNjM3NDIzMTgzODA1Igyd2DxcRW4SyVg9opcq3ANECdPU2ALJ%2BiykQqjnqi2wFVgtDPwfm%2Fv1VBV5EPFBFr5J3zBpqiIv75Z79IMYbL3EFAOg1bT8BTl6SeJugsq%2BIysp0r9pXadV4fA1SJsZW9AfGXiCuDhuBFdjI6fOSRYpQAtbQJyaMC%2F0KkDjp9MexT%2BuYhw5Ek%2Fk0OE8CvUu9aE%2F5a9x2qfkUGzmlA52iw74Mwsh7vKTiBcrx6wZPiEppSCEow6Py8NEyK%2BwtVuiO8PhWDXL3ph2BMyoN7UiJm40n3LiHdF8TinU%2BC6kZavEMidVHNAnSqa7GD4V57iIhDW7Wy7TqYEeKMB10zBQpgaSVNuvNXJxP3YX5JllqO%2FG4KCwhj9o6uv4fiwowvvqEvl%2BJb7ttQi1rDq3AKAqhxRj3LrtKHjIkNCM3yWNNUQvuTFcMnDC3zaN0FsL36fB%2Fgpp%2BbI7o5osMr1kqf3X3b%2BMXWBHCtsklDIF%2BB%2B3GOBh%2BRaUfvuo2C40mByqpXqCltvJu8XW5ZQMbKwR1q3yCFHKW42dorO50I69%2BI6V3Moko3%2FaCbirSYD3Do%2FA%2BUnBQA1RVk09HpbXDGiY1i2ZX3L%2F%2Fj8rxHuzMa7ryPlwq1x00BTpXCywGFz8fLxWrEX56vL0RuJS%2BVIb1JyAVjCBjIC%2BBjqkASkwJZjBYYmOZiF5vK4GsArlw%2BLcDGCcgUNMLjWFfc75eBxA4rS4l9xRNPfibKs%2BRNoVFPlKb9Tk12UHlUxK3GGuloE1CyDXg5qWEr7VNFAPwxaBclZ20tv3Qt6mncgS5AIAC36WhiSeVJ%2FrqcXQ4VidNakSXsgCufqBWv65hvafd24HrPBm4rbwWZF9vjv488uwG0F1wjmzzq1Wa3LSCL7Z4MyU&X-Amz-Signature=d49ebdf76fe635a0a69417e085bfdfd361b0cddff710bebd03c93b0688f480f3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
