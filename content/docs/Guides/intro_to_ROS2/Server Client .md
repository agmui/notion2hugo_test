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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOJQPWKD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHcEpdOdag3KN7ErSJCWUTJwttHf5ydMKdqzRbvVFAwUAiAo5WW9LokISdDk3CMAroWTd4ZdWcWKxo2LXxoXtSDbiiqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NRuVAL0UnJAdSy2KtwDtmKzsrkxL2f4NrcmHx4zTCLi0xaq%2Bkgn9%2F%2Fu2UvQ0hq4EFZ3lu8WUZIdevBCM3CS0X8BJ8ueLH6f7xQ0gMGI1euTNk6ldxz%2BvJgIZcqEzrjP51OXQHhBQdDOfHOCK2%2F%2FZS8qMTU6zUY4ZkUKfDkh0hD0qVG5vev1zpbs1ZExBvdbd0YeDAFC3TDklCK0UN1TF7TgVThtGJxFLeBnOHVoSac5KPgwQaVPl%2BV0YXNe2aFOuvBuXFa8QdPkaIgcKTv8N0iWtqCiwt%2F7A5wc9vr%2FvcQ4lNQzA5tGuYCk6BcIDE2x2n6AVI3HPauJI6A9GeSUji1p6y6ghaecW%2B%2FMW8khioFRX%2BKtVmmsNcO1%2BlP70spLsLH5yj0Gsvrbcv2Q2olqAMDfd1BafggPpeBDHmG%2FA415qVxdl7sHoaGueQBfJRkxkoXXvi%2BM7eNH4SYXPYbDAdGSTz9%2BjBdh0dhETs9BTIVOSHkBDMYVTViAhnBQCO%2BUznD0Q6sp9SPWs2aSxdbrxYIQkGFDeFclhNH1OB1IQObMff3AtGeLXu9bG2%2BdbdDaIvilF9XgkBRdSbw1DuD8%2BboX0fn5GEV6YcGizutI1fnehioPEitLSZyFTrVaVUXIe1ChmYU61aZxL4Mw5sHZwAY6pgFQ1Rf4B6fXrRJFUJYzzd9PWGwXEw1oYjagU6L6spVrtc9BSl%2BpFGMW%2Bl5RGM%2FPDrcoF3uwdft4lpobh1X9TZ1wbVfw8IsCxrximp0Uu0fr400w2dK7OZdC5e%2FEELL3lb%2B1pHeSn%2FYFTTEiCtFTS%2FqcEoQjltYUKJJi0EhE0XjAP99xL9c50UuZ4tI1w%2Ba9GvtQsEzq%2BfmLRyKr8KSmDak3hG%2FcVrnc&X-Amz-Signature=2c71df816a52b86a02550818680b799012eb356a37026d44978d30adf7d757f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOJQPWKD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHcEpdOdag3KN7ErSJCWUTJwttHf5ydMKdqzRbvVFAwUAiAo5WW9LokISdDk3CMAroWTd4ZdWcWKxo2LXxoXtSDbiiqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NRuVAL0UnJAdSy2KtwDtmKzsrkxL2f4NrcmHx4zTCLi0xaq%2Bkgn9%2F%2Fu2UvQ0hq4EFZ3lu8WUZIdevBCM3CS0X8BJ8ueLH6f7xQ0gMGI1euTNk6ldxz%2BvJgIZcqEzrjP51OXQHhBQdDOfHOCK2%2F%2FZS8qMTU6zUY4ZkUKfDkh0hD0qVG5vev1zpbs1ZExBvdbd0YeDAFC3TDklCK0UN1TF7TgVThtGJxFLeBnOHVoSac5KPgwQaVPl%2BV0YXNe2aFOuvBuXFa8QdPkaIgcKTv8N0iWtqCiwt%2F7A5wc9vr%2FvcQ4lNQzA5tGuYCk6BcIDE2x2n6AVI3HPauJI6A9GeSUji1p6y6ghaecW%2B%2FMW8khioFRX%2BKtVmmsNcO1%2BlP70spLsLH5yj0Gsvrbcv2Q2olqAMDfd1BafggPpeBDHmG%2FA415qVxdl7sHoaGueQBfJRkxkoXXvi%2BM7eNH4SYXPYbDAdGSTz9%2BjBdh0dhETs9BTIVOSHkBDMYVTViAhnBQCO%2BUznD0Q6sp9SPWs2aSxdbrxYIQkGFDeFclhNH1OB1IQObMff3AtGeLXu9bG2%2BdbdDaIvilF9XgkBRdSbw1DuD8%2BboX0fn5GEV6YcGizutI1fnehioPEitLSZyFTrVaVUXIe1ChmYU61aZxL4Mw5sHZwAY6pgFQ1Rf4B6fXrRJFUJYzzd9PWGwXEw1oYjagU6L6spVrtc9BSl%2BpFGMW%2Bl5RGM%2FPDrcoF3uwdft4lpobh1X9TZ1wbVfw8IsCxrximp0Uu0fr400w2dK7OZdC5e%2FEELL3lb%2B1pHeSn%2FYFTTEiCtFTS%2FqcEoQjltYUKJJi0EhE0XjAP99xL9c50UuZ4tI1w%2Ba9GvtQsEzq%2BfmLRyKr8KSmDak3hG%2FcVrnc&X-Amz-Signature=39ff8023d4fe6cd93dacfe7df1302aa022e1a80f70252d1773bca123526572ed&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOJQPWKD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHcEpdOdag3KN7ErSJCWUTJwttHf5ydMKdqzRbvVFAwUAiAo5WW9LokISdDk3CMAroWTd4ZdWcWKxo2LXxoXtSDbiiqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NRuVAL0UnJAdSy2KtwDtmKzsrkxL2f4NrcmHx4zTCLi0xaq%2Bkgn9%2F%2Fu2UvQ0hq4EFZ3lu8WUZIdevBCM3CS0X8BJ8ueLH6f7xQ0gMGI1euTNk6ldxz%2BvJgIZcqEzrjP51OXQHhBQdDOfHOCK2%2F%2FZS8qMTU6zUY4ZkUKfDkh0hD0qVG5vev1zpbs1ZExBvdbd0YeDAFC3TDklCK0UN1TF7TgVThtGJxFLeBnOHVoSac5KPgwQaVPl%2BV0YXNe2aFOuvBuXFa8QdPkaIgcKTv8N0iWtqCiwt%2F7A5wc9vr%2FvcQ4lNQzA5tGuYCk6BcIDE2x2n6AVI3HPauJI6A9GeSUji1p6y6ghaecW%2B%2FMW8khioFRX%2BKtVmmsNcO1%2BlP70spLsLH5yj0Gsvrbcv2Q2olqAMDfd1BafggPpeBDHmG%2FA415qVxdl7sHoaGueQBfJRkxkoXXvi%2BM7eNH4SYXPYbDAdGSTz9%2BjBdh0dhETs9BTIVOSHkBDMYVTViAhnBQCO%2BUznD0Q6sp9SPWs2aSxdbrxYIQkGFDeFclhNH1OB1IQObMff3AtGeLXu9bG2%2BdbdDaIvilF9XgkBRdSbw1DuD8%2BboX0fn5GEV6YcGizutI1fnehioPEitLSZyFTrVaVUXIe1ChmYU61aZxL4Mw5sHZwAY6pgFQ1Rf4B6fXrRJFUJYzzd9PWGwXEw1oYjagU6L6spVrtc9BSl%2BpFGMW%2Bl5RGM%2FPDrcoF3uwdft4lpobh1X9TZ1wbVfw8IsCxrximp0Uu0fr400w2dK7OZdC5e%2FEELL3lb%2B1pHeSn%2FYFTTEiCtFTS%2FqcEoQjltYUKJJi0EhE0XjAP99xL9c50UuZ4tI1w%2Ba9GvtQsEzq%2BfmLRyKr8KSmDak3hG%2FcVrnc&X-Amz-Signature=8bb482271d10a8b6f47db42adf900a2e63307deffcb0429cfbb6677706fa315b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOJQPWKD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHcEpdOdag3KN7ErSJCWUTJwttHf5ydMKdqzRbvVFAwUAiAo5WW9LokISdDk3CMAroWTd4ZdWcWKxo2LXxoXtSDbiiqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NRuVAL0UnJAdSy2KtwDtmKzsrkxL2f4NrcmHx4zTCLi0xaq%2Bkgn9%2F%2Fu2UvQ0hq4EFZ3lu8WUZIdevBCM3CS0X8BJ8ueLH6f7xQ0gMGI1euTNk6ldxz%2BvJgIZcqEzrjP51OXQHhBQdDOfHOCK2%2F%2FZS8qMTU6zUY4ZkUKfDkh0hD0qVG5vev1zpbs1ZExBvdbd0YeDAFC3TDklCK0UN1TF7TgVThtGJxFLeBnOHVoSac5KPgwQaVPl%2BV0YXNe2aFOuvBuXFa8QdPkaIgcKTv8N0iWtqCiwt%2F7A5wc9vr%2FvcQ4lNQzA5tGuYCk6BcIDE2x2n6AVI3HPauJI6A9GeSUji1p6y6ghaecW%2B%2FMW8khioFRX%2BKtVmmsNcO1%2BlP70spLsLH5yj0Gsvrbcv2Q2olqAMDfd1BafggPpeBDHmG%2FA415qVxdl7sHoaGueQBfJRkxkoXXvi%2BM7eNH4SYXPYbDAdGSTz9%2BjBdh0dhETs9BTIVOSHkBDMYVTViAhnBQCO%2BUznD0Q6sp9SPWs2aSxdbrxYIQkGFDeFclhNH1OB1IQObMff3AtGeLXu9bG2%2BdbdDaIvilF9XgkBRdSbw1DuD8%2BboX0fn5GEV6YcGizutI1fnehioPEitLSZyFTrVaVUXIe1ChmYU61aZxL4Mw5sHZwAY6pgFQ1Rf4B6fXrRJFUJYzzd9PWGwXEw1oYjagU6L6spVrtc9BSl%2BpFGMW%2Bl5RGM%2FPDrcoF3uwdft4lpobh1X9TZ1wbVfw8IsCxrximp0Uu0fr400w2dK7OZdC5e%2FEELL3lb%2B1pHeSn%2FYFTTEiCtFTS%2FqcEoQjltYUKJJi0EhE0XjAP99xL9c50UuZ4tI1w%2Ba9GvtQsEzq%2BfmLRyKr8KSmDak3hG%2FcVrnc&X-Amz-Signature=714d65592556d86b602995615faef5ab550b13d7a226450a8bac1a02711be801&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOJQPWKD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHcEpdOdag3KN7ErSJCWUTJwttHf5ydMKdqzRbvVFAwUAiAo5WW9LokISdDk3CMAroWTd4ZdWcWKxo2LXxoXtSDbiiqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NRuVAL0UnJAdSy2KtwDtmKzsrkxL2f4NrcmHx4zTCLi0xaq%2Bkgn9%2F%2Fu2UvQ0hq4EFZ3lu8WUZIdevBCM3CS0X8BJ8ueLH6f7xQ0gMGI1euTNk6ldxz%2BvJgIZcqEzrjP51OXQHhBQdDOfHOCK2%2F%2FZS8qMTU6zUY4ZkUKfDkh0hD0qVG5vev1zpbs1ZExBvdbd0YeDAFC3TDklCK0UN1TF7TgVThtGJxFLeBnOHVoSac5KPgwQaVPl%2BV0YXNe2aFOuvBuXFa8QdPkaIgcKTv8N0iWtqCiwt%2F7A5wc9vr%2FvcQ4lNQzA5tGuYCk6BcIDE2x2n6AVI3HPauJI6A9GeSUji1p6y6ghaecW%2B%2FMW8khioFRX%2BKtVmmsNcO1%2BlP70spLsLH5yj0Gsvrbcv2Q2olqAMDfd1BafggPpeBDHmG%2FA415qVxdl7sHoaGueQBfJRkxkoXXvi%2BM7eNH4SYXPYbDAdGSTz9%2BjBdh0dhETs9BTIVOSHkBDMYVTViAhnBQCO%2BUznD0Q6sp9SPWs2aSxdbrxYIQkGFDeFclhNH1OB1IQObMff3AtGeLXu9bG2%2BdbdDaIvilF9XgkBRdSbw1DuD8%2BboX0fn5GEV6YcGizutI1fnehioPEitLSZyFTrVaVUXIe1ChmYU61aZxL4Mw5sHZwAY6pgFQ1Rf4B6fXrRJFUJYzzd9PWGwXEw1oYjagU6L6spVrtc9BSl%2BpFGMW%2Bl5RGM%2FPDrcoF3uwdft4lpobh1X9TZ1wbVfw8IsCxrximp0Uu0fr400w2dK7OZdC5e%2FEELL3lb%2B1pHeSn%2FYFTTEiCtFTS%2FqcEoQjltYUKJJi0EhE0XjAP99xL9c50UuZ4tI1w%2Ba9GvtQsEzq%2BfmLRyKr8KSmDak3hG%2FcVrnc&X-Amz-Signature=c2abef2f13d98cb0b42b3be7834a1259098bcc6fae0925a40c26e653b5891112&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
