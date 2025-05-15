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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJ7PHD2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCvXpdVbtQMA26Vj223bEAG2Cg5zwQES%2BbkFIeKTolmTwIgVQmeQ3X9%2B71bWmzSzA1p4KA7KnGQk8gw08d8s2BQMBYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFBoD%2Bfqq7%2FKTXCrASrcA2Mbu9ywsGd8gM5m46sohoFm9xWbCOXMj2FR1jCCFbNcXhUpDOhMsuJD%2FVkzF7luMwedtQnJMCNZdlspMFc%2ByGYZ31ghYbsxerp0%2B%2BcVuGjvoZR3pQFaFrAVEQmJaL08me6e9QlsdaJSsDhYW5umkA5mPVWG4ILlaz65HxJ%2FwEib1IHRTrGiLqtUpKlbUqOSFQp7E2VZoEQ0AvamJ9BIcbxQqUisNDDkyQ9M1HTO6Q4BhJKe4PzrkgXUAE7dywnJrsIr%2BwxYg0XTX4TWMxxfVFetUmCrDZZirIT%2Bcror0RWOa3UYljR37h4IrpJGf9cdzyM7Jl5Ok9Li145GV8mv8gj%2BNxWFyrWpY%2F3Ec5RXo5Yjo6xtAs7lmWgjZFrvwTyXa7cgE5jZxXQ%2FJrZnRVixqTVJREFtWMTK9hRm4PvFgbAQgajeQF3fFrTOZytU3LtBaZMdxZx67eld13L0t7zY%2BIj1nzQFBwoTf7rknAY0dhekTypJestM2nI44LFNPmo%2BSafParl06vqaETZhGRAhuy5vI%2Fi2040i5SVaFxRIE7CagXXAY6TUi1FwABlahjTdgGrZiDeQ5PyuSe6b9qf1ZC6kpBKSjU0HtQ3kDyWd4o6HzriiF1WNnc3DyS4UMIaGl8EGOqUBDU1Il0nNR8ohdtl1Ah4YR6M0tMLNzcSbAOnpFAR%2Bd39GbJoYh8TG%2Bb2LtHmc4sZ6JgU%2BF0oybOri6UsqOFtaV%2F1wg49zWLzmMoXrd7ior%2BMGieFEopWM%2FV7qE%2FQtfTrGoq1B28vyT34ZYEMrdsapnDok%2F1XpAjMMzN4hm5BsDprPfzGJ7Tk4OkUAG6IQ6Xgj9j%2Fac5D04hFnMKQ%2Bze5cHW4u5EvW&X-Amz-Signature=903d582619a6a2de6aeeb4a302d45ad8fe1d3c06e32ac663fee36a9d6dd783c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJ7PHD2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCvXpdVbtQMA26Vj223bEAG2Cg5zwQES%2BbkFIeKTolmTwIgVQmeQ3X9%2B71bWmzSzA1p4KA7KnGQk8gw08d8s2BQMBYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFBoD%2Bfqq7%2FKTXCrASrcA2Mbu9ywsGd8gM5m46sohoFm9xWbCOXMj2FR1jCCFbNcXhUpDOhMsuJD%2FVkzF7luMwedtQnJMCNZdlspMFc%2ByGYZ31ghYbsxerp0%2B%2BcVuGjvoZR3pQFaFrAVEQmJaL08me6e9QlsdaJSsDhYW5umkA5mPVWG4ILlaz65HxJ%2FwEib1IHRTrGiLqtUpKlbUqOSFQp7E2VZoEQ0AvamJ9BIcbxQqUisNDDkyQ9M1HTO6Q4BhJKe4PzrkgXUAE7dywnJrsIr%2BwxYg0XTX4TWMxxfVFetUmCrDZZirIT%2Bcror0RWOa3UYljR37h4IrpJGf9cdzyM7Jl5Ok9Li145GV8mv8gj%2BNxWFyrWpY%2F3Ec5RXo5Yjo6xtAs7lmWgjZFrvwTyXa7cgE5jZxXQ%2FJrZnRVixqTVJREFtWMTK9hRm4PvFgbAQgajeQF3fFrTOZytU3LtBaZMdxZx67eld13L0t7zY%2BIj1nzQFBwoTf7rknAY0dhekTypJestM2nI44LFNPmo%2BSafParl06vqaETZhGRAhuy5vI%2Fi2040i5SVaFxRIE7CagXXAY6TUi1FwABlahjTdgGrZiDeQ5PyuSe6b9qf1ZC6kpBKSjU0HtQ3kDyWd4o6HzriiF1WNnc3DyS4UMIaGl8EGOqUBDU1Il0nNR8ohdtl1Ah4YR6M0tMLNzcSbAOnpFAR%2Bd39GbJoYh8TG%2Bb2LtHmc4sZ6JgU%2BF0oybOri6UsqOFtaV%2F1wg49zWLzmMoXrd7ior%2BMGieFEopWM%2FV7qE%2FQtfTrGoq1B28vyT34ZYEMrdsapnDok%2F1XpAjMMzN4hm5BsDprPfzGJ7Tk4OkUAG6IQ6Xgj9j%2Fac5D04hFnMKQ%2Bze5cHW4u5EvW&X-Amz-Signature=fd4ffff6f76b86cac16a1d724ec47220f93d8e8e67bb46f7f1493d911be7fde5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJ7PHD2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCvXpdVbtQMA26Vj223bEAG2Cg5zwQES%2BbkFIeKTolmTwIgVQmeQ3X9%2B71bWmzSzA1p4KA7KnGQk8gw08d8s2BQMBYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFBoD%2Bfqq7%2FKTXCrASrcA2Mbu9ywsGd8gM5m46sohoFm9xWbCOXMj2FR1jCCFbNcXhUpDOhMsuJD%2FVkzF7luMwedtQnJMCNZdlspMFc%2ByGYZ31ghYbsxerp0%2B%2BcVuGjvoZR3pQFaFrAVEQmJaL08me6e9QlsdaJSsDhYW5umkA5mPVWG4ILlaz65HxJ%2FwEib1IHRTrGiLqtUpKlbUqOSFQp7E2VZoEQ0AvamJ9BIcbxQqUisNDDkyQ9M1HTO6Q4BhJKe4PzrkgXUAE7dywnJrsIr%2BwxYg0XTX4TWMxxfVFetUmCrDZZirIT%2Bcror0RWOa3UYljR37h4IrpJGf9cdzyM7Jl5Ok9Li145GV8mv8gj%2BNxWFyrWpY%2F3Ec5RXo5Yjo6xtAs7lmWgjZFrvwTyXa7cgE5jZxXQ%2FJrZnRVixqTVJREFtWMTK9hRm4PvFgbAQgajeQF3fFrTOZytU3LtBaZMdxZx67eld13L0t7zY%2BIj1nzQFBwoTf7rknAY0dhekTypJestM2nI44LFNPmo%2BSafParl06vqaETZhGRAhuy5vI%2Fi2040i5SVaFxRIE7CagXXAY6TUi1FwABlahjTdgGrZiDeQ5PyuSe6b9qf1ZC6kpBKSjU0HtQ3kDyWd4o6HzriiF1WNnc3DyS4UMIaGl8EGOqUBDU1Il0nNR8ohdtl1Ah4YR6M0tMLNzcSbAOnpFAR%2Bd39GbJoYh8TG%2Bb2LtHmc4sZ6JgU%2BF0oybOri6UsqOFtaV%2F1wg49zWLzmMoXrd7ior%2BMGieFEopWM%2FV7qE%2FQtfTrGoq1B28vyT34ZYEMrdsapnDok%2F1XpAjMMzN4hm5BsDprPfzGJ7Tk4OkUAG6IQ6Xgj9j%2Fac5D04hFnMKQ%2Bze5cHW4u5EvW&X-Amz-Signature=076b369153a1146c8636352b5ebd4337f8f81134d8832db4f2fa93ba218718b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJ7PHD2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCvXpdVbtQMA26Vj223bEAG2Cg5zwQES%2BbkFIeKTolmTwIgVQmeQ3X9%2B71bWmzSzA1p4KA7KnGQk8gw08d8s2BQMBYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFBoD%2Bfqq7%2FKTXCrASrcA2Mbu9ywsGd8gM5m46sohoFm9xWbCOXMj2FR1jCCFbNcXhUpDOhMsuJD%2FVkzF7luMwedtQnJMCNZdlspMFc%2ByGYZ31ghYbsxerp0%2B%2BcVuGjvoZR3pQFaFrAVEQmJaL08me6e9QlsdaJSsDhYW5umkA5mPVWG4ILlaz65HxJ%2FwEib1IHRTrGiLqtUpKlbUqOSFQp7E2VZoEQ0AvamJ9BIcbxQqUisNDDkyQ9M1HTO6Q4BhJKe4PzrkgXUAE7dywnJrsIr%2BwxYg0XTX4TWMxxfVFetUmCrDZZirIT%2Bcror0RWOa3UYljR37h4IrpJGf9cdzyM7Jl5Ok9Li145GV8mv8gj%2BNxWFyrWpY%2F3Ec5RXo5Yjo6xtAs7lmWgjZFrvwTyXa7cgE5jZxXQ%2FJrZnRVixqTVJREFtWMTK9hRm4PvFgbAQgajeQF3fFrTOZytU3LtBaZMdxZx67eld13L0t7zY%2BIj1nzQFBwoTf7rknAY0dhekTypJestM2nI44LFNPmo%2BSafParl06vqaETZhGRAhuy5vI%2Fi2040i5SVaFxRIE7CagXXAY6TUi1FwABlahjTdgGrZiDeQ5PyuSe6b9qf1ZC6kpBKSjU0HtQ3kDyWd4o6HzriiF1WNnc3DyS4UMIaGl8EGOqUBDU1Il0nNR8ohdtl1Ah4YR6M0tMLNzcSbAOnpFAR%2Bd39GbJoYh8TG%2Bb2LtHmc4sZ6JgU%2BF0oybOri6UsqOFtaV%2F1wg49zWLzmMoXrd7ior%2BMGieFEopWM%2FV7qE%2FQtfTrGoq1B28vyT34ZYEMrdsapnDok%2F1XpAjMMzN4hm5BsDprPfzGJ7Tk4OkUAG6IQ6Xgj9j%2Fac5D04hFnMKQ%2Bze5cHW4u5EvW&X-Amz-Signature=3fa0b9a319ed6881cde5bf2afdcd39501dc73abd02ddbc2273b9fa22859afe8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJ7PHD2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCvXpdVbtQMA26Vj223bEAG2Cg5zwQES%2BbkFIeKTolmTwIgVQmeQ3X9%2B71bWmzSzA1p4KA7KnGQk8gw08d8s2BQMBYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFBoD%2Bfqq7%2FKTXCrASrcA2Mbu9ywsGd8gM5m46sohoFm9xWbCOXMj2FR1jCCFbNcXhUpDOhMsuJD%2FVkzF7luMwedtQnJMCNZdlspMFc%2ByGYZ31ghYbsxerp0%2B%2BcVuGjvoZR3pQFaFrAVEQmJaL08me6e9QlsdaJSsDhYW5umkA5mPVWG4ILlaz65HxJ%2FwEib1IHRTrGiLqtUpKlbUqOSFQp7E2VZoEQ0AvamJ9BIcbxQqUisNDDkyQ9M1HTO6Q4BhJKe4PzrkgXUAE7dywnJrsIr%2BwxYg0XTX4TWMxxfVFetUmCrDZZirIT%2Bcror0RWOa3UYljR37h4IrpJGf9cdzyM7Jl5Ok9Li145GV8mv8gj%2BNxWFyrWpY%2F3Ec5RXo5Yjo6xtAs7lmWgjZFrvwTyXa7cgE5jZxXQ%2FJrZnRVixqTVJREFtWMTK9hRm4PvFgbAQgajeQF3fFrTOZytU3LtBaZMdxZx67eld13L0t7zY%2BIj1nzQFBwoTf7rknAY0dhekTypJestM2nI44LFNPmo%2BSafParl06vqaETZhGRAhuy5vI%2Fi2040i5SVaFxRIE7CagXXAY6TUi1FwABlahjTdgGrZiDeQ5PyuSe6b9qf1ZC6kpBKSjU0HtQ3kDyWd4o6HzriiF1WNnc3DyS4UMIaGl8EGOqUBDU1Il0nNR8ohdtl1Ah4YR6M0tMLNzcSbAOnpFAR%2Bd39GbJoYh8TG%2Bb2LtHmc4sZ6JgU%2BF0oybOri6UsqOFtaV%2F1wg49zWLzmMoXrd7ior%2BMGieFEopWM%2FV7qE%2FQtfTrGoq1B28vyT34ZYEMrdsapnDok%2F1XpAjMMzN4hm5BsDprPfzGJ7Tk4OkUAG6IQ6Xgj9j%2Fac5D04hFnMKQ%2Bze5cHW4u5EvW&X-Amz-Signature=c30b90d04754e35927b4a721a739f2ce054a7d2ccf450d344b76e474d2ab9157&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
