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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VKUM3K2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BcerGritWvi4XT3Q18ztKdzbPkvxZXSTe1tbzaAC6rwIgY6xXwz6s9mq4E7Tr6QXgO9v6tJiYGY8qTi8SCCvfXBwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5CajYqsqX7bYzK6SrcA81WIdg5GFTbfZLwDYutRQ1qhGt3wFVySZ9zNsTt%2BGeiVkq4h3kO9ebVg86Uhr2Ze1oxJX71TG4Fx%2FhE2o6UDguWO7Y7pYf%2BGSxLr%2Fgu7UKH3O%2FhR5PPSJYEYBBq76be4ngMxFuDMQY7xPvsx2Od%2FENVciCC1k1EHMv3vLc0gX04kMUnJqXrOHw10ZdsmG7KE%2BqUTI4nn7rM1dqIVXYhv4eG8wDdU1tjTA9V6gwMRnESI2MKZPScWlJyC5Y0ZVXg68EkHKh1R%2BUytqTOvGXlbbmqysIV01LiBQxm5EvLfnzgsa%2FtEYGZY0OH7AQUbZ2nL2F4eAd%2FdqJXqrhNBR4pkjVt5NudWfFGe1a7E%2FSMWTk89IE1QEsUbRnV%2BN0S90TpunlPZSzZtCTGTSRPJjrQ0voKJHdZrkfVKKDB%2Bx4lUPHcxzH1RRySzwrRpA2T%2Fny9yOLFEFpkRrwstHAyS%2FQOQpAhMqSvvTintNWCF4fKse3G9DdhdOpBVsKlM2PDwfLYdz4ia0Eey9Dd2vG1h0jbOoelmQI2CEMg18Tr0LaadqK7eLY0Jg8mTezPKJc4p%2FlllSpeg6kLHMg0zrr9%2Bid9Cd0HbipTFAVdtSr77oMCqP6%2FTLniAomEqP5L4YbqMNGv3MIGOqUBmzI51e9oF1pB40EVz7YEM8kD%2BxMKA06ZG749vV3IrCbp2kogoC8J4Q10vKo8VxR4fQW2pbdhjx4Wza39zmMOCEwjJsEL%2BSI1CWUv0GqMFmFgxT9GSeDn5FRHjVYxhZdVM7dXYH%2B83Oj34EWSuFPKnRwIiqgx4c3WdhYMVdMlkwPoL5tKAtC5a%2F9hTpA2DL2SHDLHP1ImfRB6%2F7e2LkzcMJUMFMnP&X-Amz-Signature=270112e16ab188feebae86ec10a7f4476d2ea468b2e596dffc2751b5d048e65a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VKUM3K2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BcerGritWvi4XT3Q18ztKdzbPkvxZXSTe1tbzaAC6rwIgY6xXwz6s9mq4E7Tr6QXgO9v6tJiYGY8qTi8SCCvfXBwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5CajYqsqX7bYzK6SrcA81WIdg5GFTbfZLwDYutRQ1qhGt3wFVySZ9zNsTt%2BGeiVkq4h3kO9ebVg86Uhr2Ze1oxJX71TG4Fx%2FhE2o6UDguWO7Y7pYf%2BGSxLr%2Fgu7UKH3O%2FhR5PPSJYEYBBq76be4ngMxFuDMQY7xPvsx2Od%2FENVciCC1k1EHMv3vLc0gX04kMUnJqXrOHw10ZdsmG7KE%2BqUTI4nn7rM1dqIVXYhv4eG8wDdU1tjTA9V6gwMRnESI2MKZPScWlJyC5Y0ZVXg68EkHKh1R%2BUytqTOvGXlbbmqysIV01LiBQxm5EvLfnzgsa%2FtEYGZY0OH7AQUbZ2nL2F4eAd%2FdqJXqrhNBR4pkjVt5NudWfFGe1a7E%2FSMWTk89IE1QEsUbRnV%2BN0S90TpunlPZSzZtCTGTSRPJjrQ0voKJHdZrkfVKKDB%2Bx4lUPHcxzH1RRySzwrRpA2T%2Fny9yOLFEFpkRrwstHAyS%2FQOQpAhMqSvvTintNWCF4fKse3G9DdhdOpBVsKlM2PDwfLYdz4ia0Eey9Dd2vG1h0jbOoelmQI2CEMg18Tr0LaadqK7eLY0Jg8mTezPKJc4p%2FlllSpeg6kLHMg0zrr9%2Bid9Cd0HbipTFAVdtSr77oMCqP6%2FTLniAomEqP5L4YbqMNGv3MIGOqUBmzI51e9oF1pB40EVz7YEM8kD%2BxMKA06ZG749vV3IrCbp2kogoC8J4Q10vKo8VxR4fQW2pbdhjx4Wza39zmMOCEwjJsEL%2BSI1CWUv0GqMFmFgxT9GSeDn5FRHjVYxhZdVM7dXYH%2B83Oj34EWSuFPKnRwIiqgx4c3WdhYMVdMlkwPoL5tKAtC5a%2F9hTpA2DL2SHDLHP1ImfRB6%2F7e2LkzcMJUMFMnP&X-Amz-Signature=22d8730c91e0656415ff269d5195173f089d16057e3838b345ec5fd7e0df6828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VKUM3K2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BcerGritWvi4XT3Q18ztKdzbPkvxZXSTe1tbzaAC6rwIgY6xXwz6s9mq4E7Tr6QXgO9v6tJiYGY8qTi8SCCvfXBwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5CajYqsqX7bYzK6SrcA81WIdg5GFTbfZLwDYutRQ1qhGt3wFVySZ9zNsTt%2BGeiVkq4h3kO9ebVg86Uhr2Ze1oxJX71TG4Fx%2FhE2o6UDguWO7Y7pYf%2BGSxLr%2Fgu7UKH3O%2FhR5PPSJYEYBBq76be4ngMxFuDMQY7xPvsx2Od%2FENVciCC1k1EHMv3vLc0gX04kMUnJqXrOHw10ZdsmG7KE%2BqUTI4nn7rM1dqIVXYhv4eG8wDdU1tjTA9V6gwMRnESI2MKZPScWlJyC5Y0ZVXg68EkHKh1R%2BUytqTOvGXlbbmqysIV01LiBQxm5EvLfnzgsa%2FtEYGZY0OH7AQUbZ2nL2F4eAd%2FdqJXqrhNBR4pkjVt5NudWfFGe1a7E%2FSMWTk89IE1QEsUbRnV%2BN0S90TpunlPZSzZtCTGTSRPJjrQ0voKJHdZrkfVKKDB%2Bx4lUPHcxzH1RRySzwrRpA2T%2Fny9yOLFEFpkRrwstHAyS%2FQOQpAhMqSvvTintNWCF4fKse3G9DdhdOpBVsKlM2PDwfLYdz4ia0Eey9Dd2vG1h0jbOoelmQI2CEMg18Tr0LaadqK7eLY0Jg8mTezPKJc4p%2FlllSpeg6kLHMg0zrr9%2Bid9Cd0HbipTFAVdtSr77oMCqP6%2FTLniAomEqP5L4YbqMNGv3MIGOqUBmzI51e9oF1pB40EVz7YEM8kD%2BxMKA06ZG749vV3IrCbp2kogoC8J4Q10vKo8VxR4fQW2pbdhjx4Wza39zmMOCEwjJsEL%2BSI1CWUv0GqMFmFgxT9GSeDn5FRHjVYxhZdVM7dXYH%2B83Oj34EWSuFPKnRwIiqgx4c3WdhYMVdMlkwPoL5tKAtC5a%2F9hTpA2DL2SHDLHP1ImfRB6%2F7e2LkzcMJUMFMnP&X-Amz-Signature=3e89446f4e315486355b1d851ed41bb2c5b0dbdd152c365fc576c420076a5f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VKUM3K2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BcerGritWvi4XT3Q18ztKdzbPkvxZXSTe1tbzaAC6rwIgY6xXwz6s9mq4E7Tr6QXgO9v6tJiYGY8qTi8SCCvfXBwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5CajYqsqX7bYzK6SrcA81WIdg5GFTbfZLwDYutRQ1qhGt3wFVySZ9zNsTt%2BGeiVkq4h3kO9ebVg86Uhr2Ze1oxJX71TG4Fx%2FhE2o6UDguWO7Y7pYf%2BGSxLr%2Fgu7UKH3O%2FhR5PPSJYEYBBq76be4ngMxFuDMQY7xPvsx2Od%2FENVciCC1k1EHMv3vLc0gX04kMUnJqXrOHw10ZdsmG7KE%2BqUTI4nn7rM1dqIVXYhv4eG8wDdU1tjTA9V6gwMRnESI2MKZPScWlJyC5Y0ZVXg68EkHKh1R%2BUytqTOvGXlbbmqysIV01LiBQxm5EvLfnzgsa%2FtEYGZY0OH7AQUbZ2nL2F4eAd%2FdqJXqrhNBR4pkjVt5NudWfFGe1a7E%2FSMWTk89IE1QEsUbRnV%2BN0S90TpunlPZSzZtCTGTSRPJjrQ0voKJHdZrkfVKKDB%2Bx4lUPHcxzH1RRySzwrRpA2T%2Fny9yOLFEFpkRrwstHAyS%2FQOQpAhMqSvvTintNWCF4fKse3G9DdhdOpBVsKlM2PDwfLYdz4ia0Eey9Dd2vG1h0jbOoelmQI2CEMg18Tr0LaadqK7eLY0Jg8mTezPKJc4p%2FlllSpeg6kLHMg0zrr9%2Bid9Cd0HbipTFAVdtSr77oMCqP6%2FTLniAomEqP5L4YbqMNGv3MIGOqUBmzI51e9oF1pB40EVz7YEM8kD%2BxMKA06ZG749vV3IrCbp2kogoC8J4Q10vKo8VxR4fQW2pbdhjx4Wza39zmMOCEwjJsEL%2BSI1CWUv0GqMFmFgxT9GSeDn5FRHjVYxhZdVM7dXYH%2B83Oj34EWSuFPKnRwIiqgx4c3WdhYMVdMlkwPoL5tKAtC5a%2F9hTpA2DL2SHDLHP1ImfRB6%2F7e2LkzcMJUMFMnP&X-Amz-Signature=0353383eb81560e621eebec62467ca5c4f12dfaeea2de58b0a2a61e817863551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VKUM3K2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BcerGritWvi4XT3Q18ztKdzbPkvxZXSTe1tbzaAC6rwIgY6xXwz6s9mq4E7Tr6QXgO9v6tJiYGY8qTi8SCCvfXBwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5CajYqsqX7bYzK6SrcA81WIdg5GFTbfZLwDYutRQ1qhGt3wFVySZ9zNsTt%2BGeiVkq4h3kO9ebVg86Uhr2Ze1oxJX71TG4Fx%2FhE2o6UDguWO7Y7pYf%2BGSxLr%2Fgu7UKH3O%2FhR5PPSJYEYBBq76be4ngMxFuDMQY7xPvsx2Od%2FENVciCC1k1EHMv3vLc0gX04kMUnJqXrOHw10ZdsmG7KE%2BqUTI4nn7rM1dqIVXYhv4eG8wDdU1tjTA9V6gwMRnESI2MKZPScWlJyC5Y0ZVXg68EkHKh1R%2BUytqTOvGXlbbmqysIV01LiBQxm5EvLfnzgsa%2FtEYGZY0OH7AQUbZ2nL2F4eAd%2FdqJXqrhNBR4pkjVt5NudWfFGe1a7E%2FSMWTk89IE1QEsUbRnV%2BN0S90TpunlPZSzZtCTGTSRPJjrQ0voKJHdZrkfVKKDB%2Bx4lUPHcxzH1RRySzwrRpA2T%2Fny9yOLFEFpkRrwstHAyS%2FQOQpAhMqSvvTintNWCF4fKse3G9DdhdOpBVsKlM2PDwfLYdz4ia0Eey9Dd2vG1h0jbOoelmQI2CEMg18Tr0LaadqK7eLY0Jg8mTezPKJc4p%2FlllSpeg6kLHMg0zrr9%2Bid9Cd0HbipTFAVdtSr77oMCqP6%2FTLniAomEqP5L4YbqMNGv3MIGOqUBmzI51e9oF1pB40EVz7YEM8kD%2BxMKA06ZG749vV3IrCbp2kogoC8J4Q10vKo8VxR4fQW2pbdhjx4Wza39zmMOCEwjJsEL%2BSI1CWUv0GqMFmFgxT9GSeDn5FRHjVYxhZdVM7dXYH%2B83Oj34EWSuFPKnRwIiqgx4c3WdhYMVdMlkwPoL5tKAtC5a%2F9hTpA2DL2SHDLHP1ImfRB6%2F7e2LkzcMJUMFMnP&X-Amz-Signature=a7f514ab05d6dbd8dfc4391676501da9c535617893b292c8f21037f995b99240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
