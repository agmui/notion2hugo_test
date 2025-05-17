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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJB7QHP5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClPNrq%2BDFthSB5zELktu0dieUXyqF%2F4TF3SjVH5i0oMgIgfPmouoBL4VQ4wDHLD3%2F7Lv47KMyhYn6zmqUxupVT1bMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPogCLnvGOiaXi0l6SrcA%2FiiN%2FCBR2XumrujF7QacHRmnOpclaKHGAQsuxnkvOsYZzgBz7Z7ZLqolkzn4K2zKzYEsktsJWoinhQioLXDMvy5%2F1RuvdazgSdPSUEfgmfi26n6j5mztg1Y327zLY1z2LyJ3j5fY54%2BiI8eTxMTPAiHvZEt6xp6hLxpHLafFvnZm4T4GDnBkkgeFJd3MQVG1PWImwb05PwX8MHobPHASb40R6em2fHVIHawlm5lFTQOxKtdvVU%2FYH76zSbEZwuICsRjAFXy4MhlLsMg%2Fi6un8FaqKsuyw7JageyhK60Jm3kc%2BT%2BnV0dl922BZSjKaNjimqLggv5%2BBJT70529GEHM828SNo10VYGeEdc2WR9GawIM89O0%2FqIDnnKA4OX0ll7JW2GH30MesuqYFl9fKoZs92Y7IkiE4tmVrMfGObFSxzbuE3DdT%2F8ZgfkFx1snA0wxMQ5RV6z4WqaiPyH7772rLhQt66Li6PKmgi8eTTab%2BtZSMJbWizFyV12KB4r29McFyZXdc3ky7hu4s%2Bj%2FAdz1Q23NH1pHFbZlam%2FlLP9itM%2F0gYOAP8yrpvCEnCZ4ZeJYpXOd%2BnBBaUCmh4h6Z1X%2Br7hRE6j7vLLQvyT2td%2BQ9FYx4vXSnTildhUoTb6MNe1osEGOqUByodMZu7objiiydCedog6dTtINS%2FHF8XKq8aIfxo31MbbnpQf2g0hUCyEPiNf5ZSOCnppNmovyEN9MztZ4y3RaZEM7EBGBn%2BePZ52NFkpSxqJyhLudnt9DWAc5A%2FSsnLVh03RQ1aADAqh6UlMsReH7D0NLahhyKciv1bp%2F%2FTpnjUx3ZqFNVqFZIaNJwQBV5aKxMrgLVeReIoiaDbnEyGOO5SFnC%2F2&X-Amz-Signature=7c2368842828736651888629f87096a41a391220682e1c150a6181f7e1473e93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJB7QHP5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClPNrq%2BDFthSB5zELktu0dieUXyqF%2F4TF3SjVH5i0oMgIgfPmouoBL4VQ4wDHLD3%2F7Lv47KMyhYn6zmqUxupVT1bMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPogCLnvGOiaXi0l6SrcA%2FiiN%2FCBR2XumrujF7QacHRmnOpclaKHGAQsuxnkvOsYZzgBz7Z7ZLqolkzn4K2zKzYEsktsJWoinhQioLXDMvy5%2F1RuvdazgSdPSUEfgmfi26n6j5mztg1Y327zLY1z2LyJ3j5fY54%2BiI8eTxMTPAiHvZEt6xp6hLxpHLafFvnZm4T4GDnBkkgeFJd3MQVG1PWImwb05PwX8MHobPHASb40R6em2fHVIHawlm5lFTQOxKtdvVU%2FYH76zSbEZwuICsRjAFXy4MhlLsMg%2Fi6un8FaqKsuyw7JageyhK60Jm3kc%2BT%2BnV0dl922BZSjKaNjimqLggv5%2BBJT70529GEHM828SNo10VYGeEdc2WR9GawIM89O0%2FqIDnnKA4OX0ll7JW2GH30MesuqYFl9fKoZs92Y7IkiE4tmVrMfGObFSxzbuE3DdT%2F8ZgfkFx1snA0wxMQ5RV6z4WqaiPyH7772rLhQt66Li6PKmgi8eTTab%2BtZSMJbWizFyV12KB4r29McFyZXdc3ky7hu4s%2Bj%2FAdz1Q23NH1pHFbZlam%2FlLP9itM%2F0gYOAP8yrpvCEnCZ4ZeJYpXOd%2BnBBaUCmh4h6Z1X%2Br7hRE6j7vLLQvyT2td%2BQ9FYx4vXSnTildhUoTb6MNe1osEGOqUByodMZu7objiiydCedog6dTtINS%2FHF8XKq8aIfxo31MbbnpQf2g0hUCyEPiNf5ZSOCnppNmovyEN9MztZ4y3RaZEM7EBGBn%2BePZ52NFkpSxqJyhLudnt9DWAc5A%2FSsnLVh03RQ1aADAqh6UlMsReH7D0NLahhyKciv1bp%2F%2FTpnjUx3ZqFNVqFZIaNJwQBV5aKxMrgLVeReIoiaDbnEyGOO5SFnC%2F2&X-Amz-Signature=c196b7e34b4bbb356ab324ce0111d7bcf633d3b045e1278936a98f4271a9069e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJB7QHP5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClPNrq%2BDFthSB5zELktu0dieUXyqF%2F4TF3SjVH5i0oMgIgfPmouoBL4VQ4wDHLD3%2F7Lv47KMyhYn6zmqUxupVT1bMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPogCLnvGOiaXi0l6SrcA%2FiiN%2FCBR2XumrujF7QacHRmnOpclaKHGAQsuxnkvOsYZzgBz7Z7ZLqolkzn4K2zKzYEsktsJWoinhQioLXDMvy5%2F1RuvdazgSdPSUEfgmfi26n6j5mztg1Y327zLY1z2LyJ3j5fY54%2BiI8eTxMTPAiHvZEt6xp6hLxpHLafFvnZm4T4GDnBkkgeFJd3MQVG1PWImwb05PwX8MHobPHASb40R6em2fHVIHawlm5lFTQOxKtdvVU%2FYH76zSbEZwuICsRjAFXy4MhlLsMg%2Fi6un8FaqKsuyw7JageyhK60Jm3kc%2BT%2BnV0dl922BZSjKaNjimqLggv5%2BBJT70529GEHM828SNo10VYGeEdc2WR9GawIM89O0%2FqIDnnKA4OX0ll7JW2GH30MesuqYFl9fKoZs92Y7IkiE4tmVrMfGObFSxzbuE3DdT%2F8ZgfkFx1snA0wxMQ5RV6z4WqaiPyH7772rLhQt66Li6PKmgi8eTTab%2BtZSMJbWizFyV12KB4r29McFyZXdc3ky7hu4s%2Bj%2FAdz1Q23NH1pHFbZlam%2FlLP9itM%2F0gYOAP8yrpvCEnCZ4ZeJYpXOd%2BnBBaUCmh4h6Z1X%2Br7hRE6j7vLLQvyT2td%2BQ9FYx4vXSnTildhUoTb6MNe1osEGOqUByodMZu7objiiydCedog6dTtINS%2FHF8XKq8aIfxo31MbbnpQf2g0hUCyEPiNf5ZSOCnppNmovyEN9MztZ4y3RaZEM7EBGBn%2BePZ52NFkpSxqJyhLudnt9DWAc5A%2FSsnLVh03RQ1aADAqh6UlMsReH7D0NLahhyKciv1bp%2F%2FTpnjUx3ZqFNVqFZIaNJwQBV5aKxMrgLVeReIoiaDbnEyGOO5SFnC%2F2&X-Amz-Signature=524ab410d05dd4a96e984afd2f3260fedcc401fab84b027c2f2b8795b78391d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJB7QHP5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClPNrq%2BDFthSB5zELktu0dieUXyqF%2F4TF3SjVH5i0oMgIgfPmouoBL4VQ4wDHLD3%2F7Lv47KMyhYn6zmqUxupVT1bMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPogCLnvGOiaXi0l6SrcA%2FiiN%2FCBR2XumrujF7QacHRmnOpclaKHGAQsuxnkvOsYZzgBz7Z7ZLqolkzn4K2zKzYEsktsJWoinhQioLXDMvy5%2F1RuvdazgSdPSUEfgmfi26n6j5mztg1Y327zLY1z2LyJ3j5fY54%2BiI8eTxMTPAiHvZEt6xp6hLxpHLafFvnZm4T4GDnBkkgeFJd3MQVG1PWImwb05PwX8MHobPHASb40R6em2fHVIHawlm5lFTQOxKtdvVU%2FYH76zSbEZwuICsRjAFXy4MhlLsMg%2Fi6un8FaqKsuyw7JageyhK60Jm3kc%2BT%2BnV0dl922BZSjKaNjimqLggv5%2BBJT70529GEHM828SNo10VYGeEdc2WR9GawIM89O0%2FqIDnnKA4OX0ll7JW2GH30MesuqYFl9fKoZs92Y7IkiE4tmVrMfGObFSxzbuE3DdT%2F8ZgfkFx1snA0wxMQ5RV6z4WqaiPyH7772rLhQt66Li6PKmgi8eTTab%2BtZSMJbWizFyV12KB4r29McFyZXdc3ky7hu4s%2Bj%2FAdz1Q23NH1pHFbZlam%2FlLP9itM%2F0gYOAP8yrpvCEnCZ4ZeJYpXOd%2BnBBaUCmh4h6Z1X%2Br7hRE6j7vLLQvyT2td%2BQ9FYx4vXSnTildhUoTb6MNe1osEGOqUByodMZu7objiiydCedog6dTtINS%2FHF8XKq8aIfxo31MbbnpQf2g0hUCyEPiNf5ZSOCnppNmovyEN9MztZ4y3RaZEM7EBGBn%2BePZ52NFkpSxqJyhLudnt9DWAc5A%2FSsnLVh03RQ1aADAqh6UlMsReH7D0NLahhyKciv1bp%2F%2FTpnjUx3ZqFNVqFZIaNJwQBV5aKxMrgLVeReIoiaDbnEyGOO5SFnC%2F2&X-Amz-Signature=efe4bed8cdac0c2ba1afc6678a757dfd9ac3a7d8fe906aa8e59507a2e9e81cac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJB7QHP5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClPNrq%2BDFthSB5zELktu0dieUXyqF%2F4TF3SjVH5i0oMgIgfPmouoBL4VQ4wDHLD3%2F7Lv47KMyhYn6zmqUxupVT1bMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPogCLnvGOiaXi0l6SrcA%2FiiN%2FCBR2XumrujF7QacHRmnOpclaKHGAQsuxnkvOsYZzgBz7Z7ZLqolkzn4K2zKzYEsktsJWoinhQioLXDMvy5%2F1RuvdazgSdPSUEfgmfi26n6j5mztg1Y327zLY1z2LyJ3j5fY54%2BiI8eTxMTPAiHvZEt6xp6hLxpHLafFvnZm4T4GDnBkkgeFJd3MQVG1PWImwb05PwX8MHobPHASb40R6em2fHVIHawlm5lFTQOxKtdvVU%2FYH76zSbEZwuICsRjAFXy4MhlLsMg%2Fi6un8FaqKsuyw7JageyhK60Jm3kc%2BT%2BnV0dl922BZSjKaNjimqLggv5%2BBJT70529GEHM828SNo10VYGeEdc2WR9GawIM89O0%2FqIDnnKA4OX0ll7JW2GH30MesuqYFl9fKoZs92Y7IkiE4tmVrMfGObFSxzbuE3DdT%2F8ZgfkFx1snA0wxMQ5RV6z4WqaiPyH7772rLhQt66Li6PKmgi8eTTab%2BtZSMJbWizFyV12KB4r29McFyZXdc3ky7hu4s%2Bj%2FAdz1Q23NH1pHFbZlam%2FlLP9itM%2F0gYOAP8yrpvCEnCZ4ZeJYpXOd%2BnBBaUCmh4h6Z1X%2Br7hRE6j7vLLQvyT2td%2BQ9FYx4vXSnTildhUoTb6MNe1osEGOqUByodMZu7objiiydCedog6dTtINS%2FHF8XKq8aIfxo31MbbnpQf2g0hUCyEPiNf5ZSOCnppNmovyEN9MztZ4y3RaZEM7EBGBn%2BePZ52NFkpSxqJyhLudnt9DWAc5A%2FSsnLVh03RQ1aADAqh6UlMsReH7D0NLahhyKciv1bp%2F%2FTpnjUx3ZqFNVqFZIaNJwQBV5aKxMrgLVeReIoiaDbnEyGOO5SFnC%2F2&X-Amz-Signature=86483beeba34b370944ffb7d62ab134e790a912c5c2016cff1b3c73b206f1f68&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
