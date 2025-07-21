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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACMAWPJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz4LxrYriVrA78yFYAF94T2JH8lzZw93ifkIOBa1Ps5wIhAIWnwEujdVxg0uAwbemgCk4RexKlYVyLtSwVk970ZgNeKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhYc%2BMXfKWMxAdOocq3AO%2BWboX%2F57AIkJ5IcW1sB05cbaPB%2ByMiH40qf3egMniZK1Y1OCiA5uiN%2FZ1YNP9tavZSrRLeEfMNdC6BJ1LcjUApaJgslq4%2B0peF%2FUAzcBIFxKtPf3WmeicYC0GuMQSb7X26hkqieKNOP%2BMMmw6rEj90yCRh2O4LHwckGzdpmuamqMxsW20b3SnjdZCn70yaGMGBQe0PnhAfMEHqnu4k0mkNuggDa1ADniiRT7D1bNk8DpEq4nwsELPyRgwtjanYHwKnl2thX7qC6U41E0r%2FjlTwzGrNGHdkkuDxxk1Zq1ZtyQDSj4QuJOdCABbGEeWssLKsyDvtwxX5eq5gwVyPNZWM7aB1BSesFpeKsT7m03Ug41Q9ZVNokne4o8QctPTtixffZrdPkIH9cIoF9KpA%2FUnb0xMB0Hy1z7jIfqX%2Fw77ZnwF7ADm5YNF4i%2FaaJoiUIafcbc%2B98QigVfoyDFBvMcD62eUN2I1W7WTtOODSrubYY0wEFRo5Ul8xSALjT2MAecj44243JeVkfbYFDdt3AuUYO0DEa6KWhPuSoE4HaCmaxeKFDKtwJaxISGhOj89gSbzUDITabnZqpdSSIPw055nKkcgeg%2FYTHSPiKzGV2sxrC1MqFFe1E8irwXcDDDZk%2FfDBjqkAYiSuKfopvoTt2bUBuDB9WlKpG3QxWa7lf0HX%2FUrsUfQSzXVljoqB8Yc2VpvaFRV6iXJ5TFb%2Bx5gMziFQTi6ryLu7wnZJHFimpth4vK2Mon2I7ggDHDFoAntV0dSl26Uz0RnC0lE%2Ff%2BiNNDD9jFCnKP%2BPhzPdTo2rnnwb5NYimUdDf6F4ltJv9wx6tnwgy3OYe%2FXwZlyrvc9rhOVMtkpfLIyiKzN&X-Amz-Signature=7ad6c6aa68b8865d1f5466462d568151a1f07e469e7a71019fb383fdba79ce90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACMAWPJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz4LxrYriVrA78yFYAF94T2JH8lzZw93ifkIOBa1Ps5wIhAIWnwEujdVxg0uAwbemgCk4RexKlYVyLtSwVk970ZgNeKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhYc%2BMXfKWMxAdOocq3AO%2BWboX%2F57AIkJ5IcW1sB05cbaPB%2ByMiH40qf3egMniZK1Y1OCiA5uiN%2FZ1YNP9tavZSrRLeEfMNdC6BJ1LcjUApaJgslq4%2B0peF%2FUAzcBIFxKtPf3WmeicYC0GuMQSb7X26hkqieKNOP%2BMMmw6rEj90yCRh2O4LHwckGzdpmuamqMxsW20b3SnjdZCn70yaGMGBQe0PnhAfMEHqnu4k0mkNuggDa1ADniiRT7D1bNk8DpEq4nwsELPyRgwtjanYHwKnl2thX7qC6U41E0r%2FjlTwzGrNGHdkkuDxxk1Zq1ZtyQDSj4QuJOdCABbGEeWssLKsyDvtwxX5eq5gwVyPNZWM7aB1BSesFpeKsT7m03Ug41Q9ZVNokne4o8QctPTtixffZrdPkIH9cIoF9KpA%2FUnb0xMB0Hy1z7jIfqX%2Fw77ZnwF7ADm5YNF4i%2FaaJoiUIafcbc%2B98QigVfoyDFBvMcD62eUN2I1W7WTtOODSrubYY0wEFRo5Ul8xSALjT2MAecj44243JeVkfbYFDdt3AuUYO0DEa6KWhPuSoE4HaCmaxeKFDKtwJaxISGhOj89gSbzUDITabnZqpdSSIPw055nKkcgeg%2FYTHSPiKzGV2sxrC1MqFFe1E8irwXcDDDZk%2FfDBjqkAYiSuKfopvoTt2bUBuDB9WlKpG3QxWa7lf0HX%2FUrsUfQSzXVljoqB8Yc2VpvaFRV6iXJ5TFb%2Bx5gMziFQTi6ryLu7wnZJHFimpth4vK2Mon2I7ggDHDFoAntV0dSl26Uz0RnC0lE%2Ff%2BiNNDD9jFCnKP%2BPhzPdTo2rnnwb5NYimUdDf6F4ltJv9wx6tnwgy3OYe%2FXwZlyrvc9rhOVMtkpfLIyiKzN&X-Amz-Signature=e1b6adb2257d67f2aa1e432dc4d90e9ecf86864dbe55d01c15e231f8473bb6c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACMAWPJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz4LxrYriVrA78yFYAF94T2JH8lzZw93ifkIOBa1Ps5wIhAIWnwEujdVxg0uAwbemgCk4RexKlYVyLtSwVk970ZgNeKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhYc%2BMXfKWMxAdOocq3AO%2BWboX%2F57AIkJ5IcW1sB05cbaPB%2ByMiH40qf3egMniZK1Y1OCiA5uiN%2FZ1YNP9tavZSrRLeEfMNdC6BJ1LcjUApaJgslq4%2B0peF%2FUAzcBIFxKtPf3WmeicYC0GuMQSb7X26hkqieKNOP%2BMMmw6rEj90yCRh2O4LHwckGzdpmuamqMxsW20b3SnjdZCn70yaGMGBQe0PnhAfMEHqnu4k0mkNuggDa1ADniiRT7D1bNk8DpEq4nwsELPyRgwtjanYHwKnl2thX7qC6U41E0r%2FjlTwzGrNGHdkkuDxxk1Zq1ZtyQDSj4QuJOdCABbGEeWssLKsyDvtwxX5eq5gwVyPNZWM7aB1BSesFpeKsT7m03Ug41Q9ZVNokne4o8QctPTtixffZrdPkIH9cIoF9KpA%2FUnb0xMB0Hy1z7jIfqX%2Fw77ZnwF7ADm5YNF4i%2FaaJoiUIafcbc%2B98QigVfoyDFBvMcD62eUN2I1W7WTtOODSrubYY0wEFRo5Ul8xSALjT2MAecj44243JeVkfbYFDdt3AuUYO0DEa6KWhPuSoE4HaCmaxeKFDKtwJaxISGhOj89gSbzUDITabnZqpdSSIPw055nKkcgeg%2FYTHSPiKzGV2sxrC1MqFFe1E8irwXcDDDZk%2FfDBjqkAYiSuKfopvoTt2bUBuDB9WlKpG3QxWa7lf0HX%2FUrsUfQSzXVljoqB8Yc2VpvaFRV6iXJ5TFb%2Bx5gMziFQTi6ryLu7wnZJHFimpth4vK2Mon2I7ggDHDFoAntV0dSl26Uz0RnC0lE%2Ff%2BiNNDD9jFCnKP%2BPhzPdTo2rnnwb5NYimUdDf6F4ltJv9wx6tnwgy3OYe%2FXwZlyrvc9rhOVMtkpfLIyiKzN&X-Amz-Signature=0891a8a1be6cfd710d667115b06617dd966c42dc738d21e1ebb249c2a088d701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACMAWPJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz4LxrYriVrA78yFYAF94T2JH8lzZw93ifkIOBa1Ps5wIhAIWnwEujdVxg0uAwbemgCk4RexKlYVyLtSwVk970ZgNeKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhYc%2BMXfKWMxAdOocq3AO%2BWboX%2F57AIkJ5IcW1sB05cbaPB%2ByMiH40qf3egMniZK1Y1OCiA5uiN%2FZ1YNP9tavZSrRLeEfMNdC6BJ1LcjUApaJgslq4%2B0peF%2FUAzcBIFxKtPf3WmeicYC0GuMQSb7X26hkqieKNOP%2BMMmw6rEj90yCRh2O4LHwckGzdpmuamqMxsW20b3SnjdZCn70yaGMGBQe0PnhAfMEHqnu4k0mkNuggDa1ADniiRT7D1bNk8DpEq4nwsELPyRgwtjanYHwKnl2thX7qC6U41E0r%2FjlTwzGrNGHdkkuDxxk1Zq1ZtyQDSj4QuJOdCABbGEeWssLKsyDvtwxX5eq5gwVyPNZWM7aB1BSesFpeKsT7m03Ug41Q9ZVNokne4o8QctPTtixffZrdPkIH9cIoF9KpA%2FUnb0xMB0Hy1z7jIfqX%2Fw77ZnwF7ADm5YNF4i%2FaaJoiUIafcbc%2B98QigVfoyDFBvMcD62eUN2I1W7WTtOODSrubYY0wEFRo5Ul8xSALjT2MAecj44243JeVkfbYFDdt3AuUYO0DEa6KWhPuSoE4HaCmaxeKFDKtwJaxISGhOj89gSbzUDITabnZqpdSSIPw055nKkcgeg%2FYTHSPiKzGV2sxrC1MqFFe1E8irwXcDDDZk%2FfDBjqkAYiSuKfopvoTt2bUBuDB9WlKpG3QxWa7lf0HX%2FUrsUfQSzXVljoqB8Yc2VpvaFRV6iXJ5TFb%2Bx5gMziFQTi6ryLu7wnZJHFimpth4vK2Mon2I7ggDHDFoAntV0dSl26Uz0RnC0lE%2Ff%2BiNNDD9jFCnKP%2BPhzPdTo2rnnwb5NYimUdDf6F4ltJv9wx6tnwgy3OYe%2FXwZlyrvc9rhOVMtkpfLIyiKzN&X-Amz-Signature=f4e33627f682b1a4df437ad971e8591ff10530a885e715e3ae5f4a1d1ce50355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACMAWPJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz4LxrYriVrA78yFYAF94T2JH8lzZw93ifkIOBa1Ps5wIhAIWnwEujdVxg0uAwbemgCk4RexKlYVyLtSwVk970ZgNeKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhYc%2BMXfKWMxAdOocq3AO%2BWboX%2F57AIkJ5IcW1sB05cbaPB%2ByMiH40qf3egMniZK1Y1OCiA5uiN%2FZ1YNP9tavZSrRLeEfMNdC6BJ1LcjUApaJgslq4%2B0peF%2FUAzcBIFxKtPf3WmeicYC0GuMQSb7X26hkqieKNOP%2BMMmw6rEj90yCRh2O4LHwckGzdpmuamqMxsW20b3SnjdZCn70yaGMGBQe0PnhAfMEHqnu4k0mkNuggDa1ADniiRT7D1bNk8DpEq4nwsELPyRgwtjanYHwKnl2thX7qC6U41E0r%2FjlTwzGrNGHdkkuDxxk1Zq1ZtyQDSj4QuJOdCABbGEeWssLKsyDvtwxX5eq5gwVyPNZWM7aB1BSesFpeKsT7m03Ug41Q9ZVNokne4o8QctPTtixffZrdPkIH9cIoF9KpA%2FUnb0xMB0Hy1z7jIfqX%2Fw77ZnwF7ADm5YNF4i%2FaaJoiUIafcbc%2B98QigVfoyDFBvMcD62eUN2I1W7WTtOODSrubYY0wEFRo5Ul8xSALjT2MAecj44243JeVkfbYFDdt3AuUYO0DEa6KWhPuSoE4HaCmaxeKFDKtwJaxISGhOj89gSbzUDITabnZqpdSSIPw055nKkcgeg%2FYTHSPiKzGV2sxrC1MqFFe1E8irwXcDDDZk%2FfDBjqkAYiSuKfopvoTt2bUBuDB9WlKpG3QxWa7lf0HX%2FUrsUfQSzXVljoqB8Yc2VpvaFRV6iXJ5TFb%2Bx5gMziFQTi6ryLu7wnZJHFimpth4vK2Mon2I7ggDHDFoAntV0dSl26Uz0RnC0lE%2Ff%2BiNNDD9jFCnKP%2BPhzPdTo2rnnwb5NYimUdDf6F4ltJv9wx6tnwgy3OYe%2FXwZlyrvc9rhOVMtkpfLIyiKzN&X-Amz-Signature=54509740c3b24e5f753a1f040c5fbc5282ce86ba73c8d066326cf2cd38f85224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
