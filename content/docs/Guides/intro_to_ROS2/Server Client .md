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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVPGJ26A%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFF3fOQUX78JsoPLHQ6xdsdViYyy2bpny4NIuaSsZOGvAiEAoW5KZYGYcxivSJZRfLR84gmagJYsbC6Nfp%2FTT8scw48qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANImfjxPT1QEXoFRyrcAyeP%2Bcft7vKL9U0YSd12v7MjfGnDGJpapLqbgDPz50uceJ%2FlQwHO2maq4q4X%2FKX%2FrGKhVK8C4g41t09tH9EP8hqZXLPHv%2FkzvxYggRGd3HRjZWTxnT4kk4Kk400N9jEh3JknEde%2FcZLdSWLcgtYoyPnjUBb%2FKeIrN4SlDIWlL%2FEWf6I5g9at9awhnuNqNdrXSS%2FOi7D2IeeoK1%2FHry2lMKBMu0wzxdyDA1ftJn3M4scgJqXFP3D%2BdrS3%2BdEw1vo50Bza8O9bVUaZWsceaLmY3Iwj1OvqHyAP80C2Axd2jOpv92nMn8Ed%2FGcVzyT2%2F2wIz%2BR8Y0i%2BQlfcn54%2Fn09aDZmFek8wAczAXVwaVhqH3I8zgHjAAIn5W1no4GKVr7mW1Ol1UnXvNx0BRFZRA%2B3ova63s73QEdNV3q4p6p1sk%2BPC%2FsBiRgnF11gobRb5DF5%2F9A33LSug2ddKtPlDm5o4fUVzP0C5K4SiUNmHgYUD93ZuUuYeTgO9A%2FdXk9VfZx4yRpPVs00trtinlJ%2Br0oiIamvOcx0Zrr%2FgsiWXuAyBYY5R536R7HlRo6H8PL6ScTPNO8m8HgqoVLnVCJ99L0zL3J0FEHiXLYRC%2F257sSQRWVcOxJXA46nsLbZfPGgxMNzi4sEGOqUBfeJNyyQO8wE%2B8wzBqj5F0M4MooIbUwyZsaKL3veJZ44Jdr0AbGB4ipLkiGUp%2BUaxRTLu7o8%2BN3LPma4vSUNw6qbjLQt7%2F3c6DW2D4Q0lWF%2FypUGwGEvQ3jb2E2homzzmiuE7U5A8afhc2ydwUxNoFn2bPyaBvt0tegis4IHgPh550AFUb9AV6%2B1ajxuaTECWQYO%2FhZgrFj1WZOd2BRu6%2Fr5d5eZh&X-Amz-Signature=674602f2890ce9616c76a9da9a48244a8c6eb491670b08877045d1681a863f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVPGJ26A%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFF3fOQUX78JsoPLHQ6xdsdViYyy2bpny4NIuaSsZOGvAiEAoW5KZYGYcxivSJZRfLR84gmagJYsbC6Nfp%2FTT8scw48qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANImfjxPT1QEXoFRyrcAyeP%2Bcft7vKL9U0YSd12v7MjfGnDGJpapLqbgDPz50uceJ%2FlQwHO2maq4q4X%2FKX%2FrGKhVK8C4g41t09tH9EP8hqZXLPHv%2FkzvxYggRGd3HRjZWTxnT4kk4Kk400N9jEh3JknEde%2FcZLdSWLcgtYoyPnjUBb%2FKeIrN4SlDIWlL%2FEWf6I5g9at9awhnuNqNdrXSS%2FOi7D2IeeoK1%2FHry2lMKBMu0wzxdyDA1ftJn3M4scgJqXFP3D%2BdrS3%2BdEw1vo50Bza8O9bVUaZWsceaLmY3Iwj1OvqHyAP80C2Axd2jOpv92nMn8Ed%2FGcVzyT2%2F2wIz%2BR8Y0i%2BQlfcn54%2Fn09aDZmFek8wAczAXVwaVhqH3I8zgHjAAIn5W1no4GKVr7mW1Ol1UnXvNx0BRFZRA%2B3ova63s73QEdNV3q4p6p1sk%2BPC%2FsBiRgnF11gobRb5DF5%2F9A33LSug2ddKtPlDm5o4fUVzP0C5K4SiUNmHgYUD93ZuUuYeTgO9A%2FdXk9VfZx4yRpPVs00trtinlJ%2Br0oiIamvOcx0Zrr%2FgsiWXuAyBYY5R536R7HlRo6H8PL6ScTPNO8m8HgqoVLnVCJ99L0zL3J0FEHiXLYRC%2F257sSQRWVcOxJXA46nsLbZfPGgxMNzi4sEGOqUBfeJNyyQO8wE%2B8wzBqj5F0M4MooIbUwyZsaKL3veJZ44Jdr0AbGB4ipLkiGUp%2BUaxRTLu7o8%2BN3LPma4vSUNw6qbjLQt7%2F3c6DW2D4Q0lWF%2FypUGwGEvQ3jb2E2homzzmiuE7U5A8afhc2ydwUxNoFn2bPyaBvt0tegis4IHgPh550AFUb9AV6%2B1ajxuaTECWQYO%2FhZgrFj1WZOd2BRu6%2Fr5d5eZh&X-Amz-Signature=2d0aeab6cf47b69302f0ac0218e2915d28034d28aed5db689db62bd6e0238f8f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVPGJ26A%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFF3fOQUX78JsoPLHQ6xdsdViYyy2bpny4NIuaSsZOGvAiEAoW5KZYGYcxivSJZRfLR84gmagJYsbC6Nfp%2FTT8scw48qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANImfjxPT1QEXoFRyrcAyeP%2Bcft7vKL9U0YSd12v7MjfGnDGJpapLqbgDPz50uceJ%2FlQwHO2maq4q4X%2FKX%2FrGKhVK8C4g41t09tH9EP8hqZXLPHv%2FkzvxYggRGd3HRjZWTxnT4kk4Kk400N9jEh3JknEde%2FcZLdSWLcgtYoyPnjUBb%2FKeIrN4SlDIWlL%2FEWf6I5g9at9awhnuNqNdrXSS%2FOi7D2IeeoK1%2FHry2lMKBMu0wzxdyDA1ftJn3M4scgJqXFP3D%2BdrS3%2BdEw1vo50Bza8O9bVUaZWsceaLmY3Iwj1OvqHyAP80C2Axd2jOpv92nMn8Ed%2FGcVzyT2%2F2wIz%2BR8Y0i%2BQlfcn54%2Fn09aDZmFek8wAczAXVwaVhqH3I8zgHjAAIn5W1no4GKVr7mW1Ol1UnXvNx0BRFZRA%2B3ova63s73QEdNV3q4p6p1sk%2BPC%2FsBiRgnF11gobRb5DF5%2F9A33LSug2ddKtPlDm5o4fUVzP0C5K4SiUNmHgYUD93ZuUuYeTgO9A%2FdXk9VfZx4yRpPVs00trtinlJ%2Br0oiIamvOcx0Zrr%2FgsiWXuAyBYY5R536R7HlRo6H8PL6ScTPNO8m8HgqoVLnVCJ99L0zL3J0FEHiXLYRC%2F257sSQRWVcOxJXA46nsLbZfPGgxMNzi4sEGOqUBfeJNyyQO8wE%2B8wzBqj5F0M4MooIbUwyZsaKL3veJZ44Jdr0AbGB4ipLkiGUp%2BUaxRTLu7o8%2BN3LPma4vSUNw6qbjLQt7%2F3c6DW2D4Q0lWF%2FypUGwGEvQ3jb2E2homzzmiuE7U5A8afhc2ydwUxNoFn2bPyaBvt0tegis4IHgPh550AFUb9AV6%2B1ajxuaTECWQYO%2FhZgrFj1WZOd2BRu6%2Fr5d5eZh&X-Amz-Signature=7705db6321ed9a06adb2b76d0687760277ee38bb3a9b6caef541cbd4fb1d587c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVPGJ26A%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFF3fOQUX78JsoPLHQ6xdsdViYyy2bpny4NIuaSsZOGvAiEAoW5KZYGYcxivSJZRfLR84gmagJYsbC6Nfp%2FTT8scw48qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANImfjxPT1QEXoFRyrcAyeP%2Bcft7vKL9U0YSd12v7MjfGnDGJpapLqbgDPz50uceJ%2FlQwHO2maq4q4X%2FKX%2FrGKhVK8C4g41t09tH9EP8hqZXLPHv%2FkzvxYggRGd3HRjZWTxnT4kk4Kk400N9jEh3JknEde%2FcZLdSWLcgtYoyPnjUBb%2FKeIrN4SlDIWlL%2FEWf6I5g9at9awhnuNqNdrXSS%2FOi7D2IeeoK1%2FHry2lMKBMu0wzxdyDA1ftJn3M4scgJqXFP3D%2BdrS3%2BdEw1vo50Bza8O9bVUaZWsceaLmY3Iwj1OvqHyAP80C2Axd2jOpv92nMn8Ed%2FGcVzyT2%2F2wIz%2BR8Y0i%2BQlfcn54%2Fn09aDZmFek8wAczAXVwaVhqH3I8zgHjAAIn5W1no4GKVr7mW1Ol1UnXvNx0BRFZRA%2B3ova63s73QEdNV3q4p6p1sk%2BPC%2FsBiRgnF11gobRb5DF5%2F9A33LSug2ddKtPlDm5o4fUVzP0C5K4SiUNmHgYUD93ZuUuYeTgO9A%2FdXk9VfZx4yRpPVs00trtinlJ%2Br0oiIamvOcx0Zrr%2FgsiWXuAyBYY5R536R7HlRo6H8PL6ScTPNO8m8HgqoVLnVCJ99L0zL3J0FEHiXLYRC%2F257sSQRWVcOxJXA46nsLbZfPGgxMNzi4sEGOqUBfeJNyyQO8wE%2B8wzBqj5F0M4MooIbUwyZsaKL3veJZ44Jdr0AbGB4ipLkiGUp%2BUaxRTLu7o8%2BN3LPma4vSUNw6qbjLQt7%2F3c6DW2D4Q0lWF%2FypUGwGEvQ3jb2E2homzzmiuE7U5A8afhc2ydwUxNoFn2bPyaBvt0tegis4IHgPh550AFUb9AV6%2B1ajxuaTECWQYO%2FhZgrFj1WZOd2BRu6%2Fr5d5eZh&X-Amz-Signature=489a27655e4728ad24ecbcbaebe03a4306d3e6f8515a249e34d64263a75e67b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVPGJ26A%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFF3fOQUX78JsoPLHQ6xdsdViYyy2bpny4NIuaSsZOGvAiEAoW5KZYGYcxivSJZRfLR84gmagJYsbC6Nfp%2FTT8scw48qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANImfjxPT1QEXoFRyrcAyeP%2Bcft7vKL9U0YSd12v7MjfGnDGJpapLqbgDPz50uceJ%2FlQwHO2maq4q4X%2FKX%2FrGKhVK8C4g41t09tH9EP8hqZXLPHv%2FkzvxYggRGd3HRjZWTxnT4kk4Kk400N9jEh3JknEde%2FcZLdSWLcgtYoyPnjUBb%2FKeIrN4SlDIWlL%2FEWf6I5g9at9awhnuNqNdrXSS%2FOi7D2IeeoK1%2FHry2lMKBMu0wzxdyDA1ftJn3M4scgJqXFP3D%2BdrS3%2BdEw1vo50Bza8O9bVUaZWsceaLmY3Iwj1OvqHyAP80C2Axd2jOpv92nMn8Ed%2FGcVzyT2%2F2wIz%2BR8Y0i%2BQlfcn54%2Fn09aDZmFek8wAczAXVwaVhqH3I8zgHjAAIn5W1no4GKVr7mW1Ol1UnXvNx0BRFZRA%2B3ova63s73QEdNV3q4p6p1sk%2BPC%2FsBiRgnF11gobRb5DF5%2F9A33LSug2ddKtPlDm5o4fUVzP0C5K4SiUNmHgYUD93ZuUuYeTgO9A%2FdXk9VfZx4yRpPVs00trtinlJ%2Br0oiIamvOcx0Zrr%2FgsiWXuAyBYY5R536R7HlRo6H8PL6ScTPNO8m8HgqoVLnVCJ99L0zL3J0FEHiXLYRC%2F257sSQRWVcOxJXA46nsLbZfPGgxMNzi4sEGOqUBfeJNyyQO8wE%2B8wzBqj5F0M4MooIbUwyZsaKL3veJZ44Jdr0AbGB4ipLkiGUp%2BUaxRTLu7o8%2BN3LPma4vSUNw6qbjLQt7%2F3c6DW2D4Q0lWF%2FypUGwGEvQ3jb2E2homzzmiuE7U5A8afhc2ydwUxNoFn2bPyaBvt0tegis4IHgPh550AFUb9AV6%2B1ajxuaTECWQYO%2FhZgrFj1WZOd2BRu6%2Fr5d5eZh&X-Amz-Signature=a11b37e326a0f472ed5817993e3e8fc317f35e0e5b28e27823f4df33605d21e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
