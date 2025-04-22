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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDR27RSQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIFu3x%2FWjV2pnwtdtvoPES1937fWsZ23eKbJUr%2B7EEsSSAiAmV2L5ozVhe4H0UCFMP%2FovOfn9KqLtOCZOveEEslo8DyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkxiko1Fz8UD7ZiA%2BKtwD7iJdWL61k3rnAYdPgR1DmISIDM5JiY1b5Zu9XAY2CFlX7VoQtlrL2kR%2BugbTlvdcMKOvvSG%2F8GrIJQl63d%2BC%2BTC9PuEDN50gYal7dWLWrrOXPTkvMenuKUsNPRcLzV0NlEMGZsP5sCNai8CN%2FbD9Wggq1BMAVVZhrhucRCY%2FCcggKXvhmc957CVgYIWj1YIO9th5MiSd45Xz7F8dir8RAtNXHA3WKJxrNOm0BGPWa2VlVzvgvPbV3nTh3gbZbf6pbZUJmUMKxIRtyOkaYTuu8SF20NyJnGfoiRCwqVjFcfEPHw6cA9cSg%2B%2BXOKu1pKb%2FfRLNtz7JXZKhd%2FcXKs7QpcIc8PVia9kLpGl2EjZmXGtn5BWaCgMh86kAQREl4N5PflroKt8hhihpsUuP2ypiYvHR4rBK7moL0Zrx9smcLUFidX0Ckad%2FvhJVfzb3bWG5BFp5TpZ0iBQsCwiLDcElrCztUf2ysjy2LfItVjwkGXZlEB91jkbQ8t4dK4Gcq9zim0MBgjM43cHYr6JdjQ%2Bfng7%2FFxKa1JX0cOuUQes%2FeoyPbGuxg0FIj4u8LXz9HLTBxh9%2F7Al2%2B%2ByVZvNJUEBP2H1SM%2FwqwmoU9HcQ6kZ6xS%2F5bb%2F86Q40TRwq204w4d%2BewAY6pgGlC0YzABLLM3PbgIxlr8v5WX5oUfstv5Tec7BQYu%2BbuxFvCG3aumhUAwhva8PuhGVClWp5ND4z%2FBFFhaegWTZ8NRMhvWDJzdTRphtLxJDrMZZnE7p69J4ioOM4lb%2Bdjb2xh1pauOk4gMdJXJp8VH9QFndKSp1v%2FP1zA7ulr8n84MqbRUIxH9ejg2AfLuZBae1Y3LuAXj1n5WEfLZPr4t6QDxQSaKwB&X-Amz-Signature=37090a147608e0b1676c96f9b9f68dea2806a068075ebfa3c55398da9c20f637&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDR27RSQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIFu3x%2FWjV2pnwtdtvoPES1937fWsZ23eKbJUr%2B7EEsSSAiAmV2L5ozVhe4H0UCFMP%2FovOfn9KqLtOCZOveEEslo8DyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkxiko1Fz8UD7ZiA%2BKtwD7iJdWL61k3rnAYdPgR1DmISIDM5JiY1b5Zu9XAY2CFlX7VoQtlrL2kR%2BugbTlvdcMKOvvSG%2F8GrIJQl63d%2BC%2BTC9PuEDN50gYal7dWLWrrOXPTkvMenuKUsNPRcLzV0NlEMGZsP5sCNai8CN%2FbD9Wggq1BMAVVZhrhucRCY%2FCcggKXvhmc957CVgYIWj1YIO9th5MiSd45Xz7F8dir8RAtNXHA3WKJxrNOm0BGPWa2VlVzvgvPbV3nTh3gbZbf6pbZUJmUMKxIRtyOkaYTuu8SF20NyJnGfoiRCwqVjFcfEPHw6cA9cSg%2B%2BXOKu1pKb%2FfRLNtz7JXZKhd%2FcXKs7QpcIc8PVia9kLpGl2EjZmXGtn5BWaCgMh86kAQREl4N5PflroKt8hhihpsUuP2ypiYvHR4rBK7moL0Zrx9smcLUFidX0Ckad%2FvhJVfzb3bWG5BFp5TpZ0iBQsCwiLDcElrCztUf2ysjy2LfItVjwkGXZlEB91jkbQ8t4dK4Gcq9zim0MBgjM43cHYr6JdjQ%2Bfng7%2FFxKa1JX0cOuUQes%2FeoyPbGuxg0FIj4u8LXz9HLTBxh9%2F7Al2%2B%2ByVZvNJUEBP2H1SM%2FwqwmoU9HcQ6kZ6xS%2F5bb%2F86Q40TRwq204w4d%2BewAY6pgGlC0YzABLLM3PbgIxlr8v5WX5oUfstv5Tec7BQYu%2BbuxFvCG3aumhUAwhva8PuhGVClWp5ND4z%2FBFFhaegWTZ8NRMhvWDJzdTRphtLxJDrMZZnE7p69J4ioOM4lb%2Bdjb2xh1pauOk4gMdJXJp8VH9QFndKSp1v%2FP1zA7ulr8n84MqbRUIxH9ejg2AfLuZBae1Y3LuAXj1n5WEfLZPr4t6QDxQSaKwB&X-Amz-Signature=d41632eeaa71af52dfab1d72610f8cd91e83068e82ac607e82c0fe973942c23c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDR27RSQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIFu3x%2FWjV2pnwtdtvoPES1937fWsZ23eKbJUr%2B7EEsSSAiAmV2L5ozVhe4H0UCFMP%2FovOfn9KqLtOCZOveEEslo8DyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkxiko1Fz8UD7ZiA%2BKtwD7iJdWL61k3rnAYdPgR1DmISIDM5JiY1b5Zu9XAY2CFlX7VoQtlrL2kR%2BugbTlvdcMKOvvSG%2F8GrIJQl63d%2BC%2BTC9PuEDN50gYal7dWLWrrOXPTkvMenuKUsNPRcLzV0NlEMGZsP5sCNai8CN%2FbD9Wggq1BMAVVZhrhucRCY%2FCcggKXvhmc957CVgYIWj1YIO9th5MiSd45Xz7F8dir8RAtNXHA3WKJxrNOm0BGPWa2VlVzvgvPbV3nTh3gbZbf6pbZUJmUMKxIRtyOkaYTuu8SF20NyJnGfoiRCwqVjFcfEPHw6cA9cSg%2B%2BXOKu1pKb%2FfRLNtz7JXZKhd%2FcXKs7QpcIc8PVia9kLpGl2EjZmXGtn5BWaCgMh86kAQREl4N5PflroKt8hhihpsUuP2ypiYvHR4rBK7moL0Zrx9smcLUFidX0Ckad%2FvhJVfzb3bWG5BFp5TpZ0iBQsCwiLDcElrCztUf2ysjy2LfItVjwkGXZlEB91jkbQ8t4dK4Gcq9zim0MBgjM43cHYr6JdjQ%2Bfng7%2FFxKa1JX0cOuUQes%2FeoyPbGuxg0FIj4u8LXz9HLTBxh9%2F7Al2%2B%2ByVZvNJUEBP2H1SM%2FwqwmoU9HcQ6kZ6xS%2F5bb%2F86Q40TRwq204w4d%2BewAY6pgGlC0YzABLLM3PbgIxlr8v5WX5oUfstv5Tec7BQYu%2BbuxFvCG3aumhUAwhva8PuhGVClWp5ND4z%2FBFFhaegWTZ8NRMhvWDJzdTRphtLxJDrMZZnE7p69J4ioOM4lb%2Bdjb2xh1pauOk4gMdJXJp8VH9QFndKSp1v%2FP1zA7ulr8n84MqbRUIxH9ejg2AfLuZBae1Y3LuAXj1n5WEfLZPr4t6QDxQSaKwB&X-Amz-Signature=e2bbbd2f7129e819c568e7a477671d0f3fe3aa3ce9ea65e3db933e0fcbe88723&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDR27RSQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIFu3x%2FWjV2pnwtdtvoPES1937fWsZ23eKbJUr%2B7EEsSSAiAmV2L5ozVhe4H0UCFMP%2FovOfn9KqLtOCZOveEEslo8DyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkxiko1Fz8UD7ZiA%2BKtwD7iJdWL61k3rnAYdPgR1DmISIDM5JiY1b5Zu9XAY2CFlX7VoQtlrL2kR%2BugbTlvdcMKOvvSG%2F8GrIJQl63d%2BC%2BTC9PuEDN50gYal7dWLWrrOXPTkvMenuKUsNPRcLzV0NlEMGZsP5sCNai8CN%2FbD9Wggq1BMAVVZhrhucRCY%2FCcggKXvhmc957CVgYIWj1YIO9th5MiSd45Xz7F8dir8RAtNXHA3WKJxrNOm0BGPWa2VlVzvgvPbV3nTh3gbZbf6pbZUJmUMKxIRtyOkaYTuu8SF20NyJnGfoiRCwqVjFcfEPHw6cA9cSg%2B%2BXOKu1pKb%2FfRLNtz7JXZKhd%2FcXKs7QpcIc8PVia9kLpGl2EjZmXGtn5BWaCgMh86kAQREl4N5PflroKt8hhihpsUuP2ypiYvHR4rBK7moL0Zrx9smcLUFidX0Ckad%2FvhJVfzb3bWG5BFp5TpZ0iBQsCwiLDcElrCztUf2ysjy2LfItVjwkGXZlEB91jkbQ8t4dK4Gcq9zim0MBgjM43cHYr6JdjQ%2Bfng7%2FFxKa1JX0cOuUQes%2FeoyPbGuxg0FIj4u8LXz9HLTBxh9%2F7Al2%2B%2ByVZvNJUEBP2H1SM%2FwqwmoU9HcQ6kZ6xS%2F5bb%2F86Q40TRwq204w4d%2BewAY6pgGlC0YzABLLM3PbgIxlr8v5WX5oUfstv5Tec7BQYu%2BbuxFvCG3aumhUAwhva8PuhGVClWp5ND4z%2FBFFhaegWTZ8NRMhvWDJzdTRphtLxJDrMZZnE7p69J4ioOM4lb%2Bdjb2xh1pauOk4gMdJXJp8VH9QFndKSp1v%2FP1zA7ulr8n84MqbRUIxH9ejg2AfLuZBae1Y3LuAXj1n5WEfLZPr4t6QDxQSaKwB&X-Amz-Signature=923e58b136242d95fb617253d956c688a20af91644e3b1b575c293844e06ef44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDR27RSQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIFu3x%2FWjV2pnwtdtvoPES1937fWsZ23eKbJUr%2B7EEsSSAiAmV2L5ozVhe4H0UCFMP%2FovOfn9KqLtOCZOveEEslo8DyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkxiko1Fz8UD7ZiA%2BKtwD7iJdWL61k3rnAYdPgR1DmISIDM5JiY1b5Zu9XAY2CFlX7VoQtlrL2kR%2BugbTlvdcMKOvvSG%2F8GrIJQl63d%2BC%2BTC9PuEDN50gYal7dWLWrrOXPTkvMenuKUsNPRcLzV0NlEMGZsP5sCNai8CN%2FbD9Wggq1BMAVVZhrhucRCY%2FCcggKXvhmc957CVgYIWj1YIO9th5MiSd45Xz7F8dir8RAtNXHA3WKJxrNOm0BGPWa2VlVzvgvPbV3nTh3gbZbf6pbZUJmUMKxIRtyOkaYTuu8SF20NyJnGfoiRCwqVjFcfEPHw6cA9cSg%2B%2BXOKu1pKb%2FfRLNtz7JXZKhd%2FcXKs7QpcIc8PVia9kLpGl2EjZmXGtn5BWaCgMh86kAQREl4N5PflroKt8hhihpsUuP2ypiYvHR4rBK7moL0Zrx9smcLUFidX0Ckad%2FvhJVfzb3bWG5BFp5TpZ0iBQsCwiLDcElrCztUf2ysjy2LfItVjwkGXZlEB91jkbQ8t4dK4Gcq9zim0MBgjM43cHYr6JdjQ%2Bfng7%2FFxKa1JX0cOuUQes%2FeoyPbGuxg0FIj4u8LXz9HLTBxh9%2F7Al2%2B%2ByVZvNJUEBP2H1SM%2FwqwmoU9HcQ6kZ6xS%2F5bb%2F86Q40TRwq204w4d%2BewAY6pgGlC0YzABLLM3PbgIxlr8v5WX5oUfstv5Tec7BQYu%2BbuxFvCG3aumhUAwhva8PuhGVClWp5ND4z%2FBFFhaegWTZ8NRMhvWDJzdTRphtLxJDrMZZnE7p69J4ioOM4lb%2Bdjb2xh1pauOk4gMdJXJp8VH9QFndKSp1v%2FP1zA7ulr8n84MqbRUIxH9ejg2AfLuZBae1Y3LuAXj1n5WEfLZPr4t6QDxQSaKwB&X-Amz-Signature=e3f89b2e219d1faf9f8744eb62d09e1ea740af915d3b14db096670539b7940c8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
