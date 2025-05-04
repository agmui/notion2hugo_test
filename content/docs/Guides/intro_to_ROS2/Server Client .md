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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KHMK7CQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDpcQZmZRdgEC5gH53XtRMysddpatG%2BLi8h5%2FXrgmiDLwIhAMA98J9IW9ldz9RLdKxHDKdYAt9eNAF6hDVvuwUXYSR2Kv8DCBgQABoMNjM3NDIzMTgzODA1IgwYh5TIHTmnrDoXiPgq3APK3gFNdXlY7A4FaZXS7qHjmqP4fRVQw4uRDKbhf7WGFlD8XHX3HSceMzNd5k%2Fvguw%2FJIZ%2BP8CtQsIDP%2BhgSLfN8DnmKAeUediGVZW8aZaZB2O3mKpMovqYiERFjT%2BcKToECvd9B5wADSePVby8yTzYkbZP8vuIx5RTNevCn%2BX4efVFgnewdvp6lGNEypLSmxfjEX5w0P76VcLgIm2Co3x5NE%2FWRa%2BS9L3x4YvJaUw6dwhu2PyfsXdlvHm2zvZfyJNhuA3A5iMO1r5ymXgS12irycnyJzSHWXeYRSo2MTPTtXfscXuFyyH3YMkQ2sI2noWBv7bVsEMbYAQmPS0%2B85jPvq5i9CHnv1j6IGmAmjbX%2F91jct9RSNOy%2FMx2P79uBxWAswCrJ7%2F3pXVUkkO%2BsYoJZD5Gs9j2UqE6OqKrGoyVFJK2M%2BLVkx8ZZfq5D0%2BFtK%2F1lhhPLQayDIpIZ6abZDy2f90%2Bt1lJr4b6HDONs%2FbHxGUN%2BODbsnZVz9cL3hy1aODLlykAug3%2B8nAsQc5JWN5xiyXVIO3blmqhU6RFB8WPcipFKWD849XNE34ngpHg3i%2B3Qj4cxjyFAiLDMAAxANk4LV3E%2F26wm5TwMlMaRRDHMxDWHSL7KX3ogllT0jC8iN7ABjqkAct9Jay2CE3tsc8cZFyijNmvro7HZoc7uBv69L%2BKra4aMZNZlhFYTU4WYISqVIaxrS3MPZzHT715Y22PPSELeQPV%2F9NulhQfFs9LX1aiIw2zq0Eo%2BzBTXTnimFnaDcQTp%2BsoA48LBTzWIWn6frYGhO%2Bae3Pximz8ANPTmfVKUZ3FINWXwoYVkds%2BdvDhn3RPuW%2F2LJrWn%2BXFq2rMEyJupB6A0U%2By&X-Amz-Signature=fecbb1c9ca5c453631e0ac0e389b1393b5023ac3f0bebfbb02c9ef6e1dc1d679&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KHMK7CQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDpcQZmZRdgEC5gH53XtRMysddpatG%2BLi8h5%2FXrgmiDLwIhAMA98J9IW9ldz9RLdKxHDKdYAt9eNAF6hDVvuwUXYSR2Kv8DCBgQABoMNjM3NDIzMTgzODA1IgwYh5TIHTmnrDoXiPgq3APK3gFNdXlY7A4FaZXS7qHjmqP4fRVQw4uRDKbhf7WGFlD8XHX3HSceMzNd5k%2Fvguw%2FJIZ%2BP8CtQsIDP%2BhgSLfN8DnmKAeUediGVZW8aZaZB2O3mKpMovqYiERFjT%2BcKToECvd9B5wADSePVby8yTzYkbZP8vuIx5RTNevCn%2BX4efVFgnewdvp6lGNEypLSmxfjEX5w0P76VcLgIm2Co3x5NE%2FWRa%2BS9L3x4YvJaUw6dwhu2PyfsXdlvHm2zvZfyJNhuA3A5iMO1r5ymXgS12irycnyJzSHWXeYRSo2MTPTtXfscXuFyyH3YMkQ2sI2noWBv7bVsEMbYAQmPS0%2B85jPvq5i9CHnv1j6IGmAmjbX%2F91jct9RSNOy%2FMx2P79uBxWAswCrJ7%2F3pXVUkkO%2BsYoJZD5Gs9j2UqE6OqKrGoyVFJK2M%2BLVkx8ZZfq5D0%2BFtK%2F1lhhPLQayDIpIZ6abZDy2f90%2Bt1lJr4b6HDONs%2FbHxGUN%2BODbsnZVz9cL3hy1aODLlykAug3%2B8nAsQc5JWN5xiyXVIO3blmqhU6RFB8WPcipFKWD849XNE34ngpHg3i%2B3Qj4cxjyFAiLDMAAxANk4LV3E%2F26wm5TwMlMaRRDHMxDWHSL7KX3ogllT0jC8iN7ABjqkAct9Jay2CE3tsc8cZFyijNmvro7HZoc7uBv69L%2BKra4aMZNZlhFYTU4WYISqVIaxrS3MPZzHT715Y22PPSELeQPV%2F9NulhQfFs9LX1aiIw2zq0Eo%2BzBTXTnimFnaDcQTp%2BsoA48LBTzWIWn6frYGhO%2Bae3Pximz8ANPTmfVKUZ3FINWXwoYVkds%2BdvDhn3RPuW%2F2LJrWn%2BXFq2rMEyJupB6A0U%2By&X-Amz-Signature=e8bf84f8d3d53e735dbbefea69c8748187ddf007c821c8ec9a0b3e1a51795117&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KHMK7CQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDpcQZmZRdgEC5gH53XtRMysddpatG%2BLi8h5%2FXrgmiDLwIhAMA98J9IW9ldz9RLdKxHDKdYAt9eNAF6hDVvuwUXYSR2Kv8DCBgQABoMNjM3NDIzMTgzODA1IgwYh5TIHTmnrDoXiPgq3APK3gFNdXlY7A4FaZXS7qHjmqP4fRVQw4uRDKbhf7WGFlD8XHX3HSceMzNd5k%2Fvguw%2FJIZ%2BP8CtQsIDP%2BhgSLfN8DnmKAeUediGVZW8aZaZB2O3mKpMovqYiERFjT%2BcKToECvd9B5wADSePVby8yTzYkbZP8vuIx5RTNevCn%2BX4efVFgnewdvp6lGNEypLSmxfjEX5w0P76VcLgIm2Co3x5NE%2FWRa%2BS9L3x4YvJaUw6dwhu2PyfsXdlvHm2zvZfyJNhuA3A5iMO1r5ymXgS12irycnyJzSHWXeYRSo2MTPTtXfscXuFyyH3YMkQ2sI2noWBv7bVsEMbYAQmPS0%2B85jPvq5i9CHnv1j6IGmAmjbX%2F91jct9RSNOy%2FMx2P79uBxWAswCrJ7%2F3pXVUkkO%2BsYoJZD5Gs9j2UqE6OqKrGoyVFJK2M%2BLVkx8ZZfq5D0%2BFtK%2F1lhhPLQayDIpIZ6abZDy2f90%2Bt1lJr4b6HDONs%2FbHxGUN%2BODbsnZVz9cL3hy1aODLlykAug3%2B8nAsQc5JWN5xiyXVIO3blmqhU6RFB8WPcipFKWD849XNE34ngpHg3i%2B3Qj4cxjyFAiLDMAAxANk4LV3E%2F26wm5TwMlMaRRDHMxDWHSL7KX3ogllT0jC8iN7ABjqkAct9Jay2CE3tsc8cZFyijNmvro7HZoc7uBv69L%2BKra4aMZNZlhFYTU4WYISqVIaxrS3MPZzHT715Y22PPSELeQPV%2F9NulhQfFs9LX1aiIw2zq0Eo%2BzBTXTnimFnaDcQTp%2BsoA48LBTzWIWn6frYGhO%2Bae3Pximz8ANPTmfVKUZ3FINWXwoYVkds%2BdvDhn3RPuW%2F2LJrWn%2BXFq2rMEyJupB6A0U%2By&X-Amz-Signature=0365089911570e979b247e71cc10c1ff511455fb7873e7bd988e60755f61c1c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KHMK7CQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDpcQZmZRdgEC5gH53XtRMysddpatG%2BLi8h5%2FXrgmiDLwIhAMA98J9IW9ldz9RLdKxHDKdYAt9eNAF6hDVvuwUXYSR2Kv8DCBgQABoMNjM3NDIzMTgzODA1IgwYh5TIHTmnrDoXiPgq3APK3gFNdXlY7A4FaZXS7qHjmqP4fRVQw4uRDKbhf7WGFlD8XHX3HSceMzNd5k%2Fvguw%2FJIZ%2BP8CtQsIDP%2BhgSLfN8DnmKAeUediGVZW8aZaZB2O3mKpMovqYiERFjT%2BcKToECvd9B5wADSePVby8yTzYkbZP8vuIx5RTNevCn%2BX4efVFgnewdvp6lGNEypLSmxfjEX5w0P76VcLgIm2Co3x5NE%2FWRa%2BS9L3x4YvJaUw6dwhu2PyfsXdlvHm2zvZfyJNhuA3A5iMO1r5ymXgS12irycnyJzSHWXeYRSo2MTPTtXfscXuFyyH3YMkQ2sI2noWBv7bVsEMbYAQmPS0%2B85jPvq5i9CHnv1j6IGmAmjbX%2F91jct9RSNOy%2FMx2P79uBxWAswCrJ7%2F3pXVUkkO%2BsYoJZD5Gs9j2UqE6OqKrGoyVFJK2M%2BLVkx8ZZfq5D0%2BFtK%2F1lhhPLQayDIpIZ6abZDy2f90%2Bt1lJr4b6HDONs%2FbHxGUN%2BODbsnZVz9cL3hy1aODLlykAug3%2B8nAsQc5JWN5xiyXVIO3blmqhU6RFB8WPcipFKWD849XNE34ngpHg3i%2B3Qj4cxjyFAiLDMAAxANk4LV3E%2F26wm5TwMlMaRRDHMxDWHSL7KX3ogllT0jC8iN7ABjqkAct9Jay2CE3tsc8cZFyijNmvro7HZoc7uBv69L%2BKra4aMZNZlhFYTU4WYISqVIaxrS3MPZzHT715Y22PPSELeQPV%2F9NulhQfFs9LX1aiIw2zq0Eo%2BzBTXTnimFnaDcQTp%2BsoA48LBTzWIWn6frYGhO%2Bae3Pximz8ANPTmfVKUZ3FINWXwoYVkds%2BdvDhn3RPuW%2F2LJrWn%2BXFq2rMEyJupB6A0U%2By&X-Amz-Signature=8c4ae93feb19d256ce18e7119d2b97263d23aef96bce1e0ad7157c47428ad1f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KHMK7CQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDpcQZmZRdgEC5gH53XtRMysddpatG%2BLi8h5%2FXrgmiDLwIhAMA98J9IW9ldz9RLdKxHDKdYAt9eNAF6hDVvuwUXYSR2Kv8DCBgQABoMNjM3NDIzMTgzODA1IgwYh5TIHTmnrDoXiPgq3APK3gFNdXlY7A4FaZXS7qHjmqP4fRVQw4uRDKbhf7WGFlD8XHX3HSceMzNd5k%2Fvguw%2FJIZ%2BP8CtQsIDP%2BhgSLfN8DnmKAeUediGVZW8aZaZB2O3mKpMovqYiERFjT%2BcKToECvd9B5wADSePVby8yTzYkbZP8vuIx5RTNevCn%2BX4efVFgnewdvp6lGNEypLSmxfjEX5w0P76VcLgIm2Co3x5NE%2FWRa%2BS9L3x4YvJaUw6dwhu2PyfsXdlvHm2zvZfyJNhuA3A5iMO1r5ymXgS12irycnyJzSHWXeYRSo2MTPTtXfscXuFyyH3YMkQ2sI2noWBv7bVsEMbYAQmPS0%2B85jPvq5i9CHnv1j6IGmAmjbX%2F91jct9RSNOy%2FMx2P79uBxWAswCrJ7%2F3pXVUkkO%2BsYoJZD5Gs9j2UqE6OqKrGoyVFJK2M%2BLVkx8ZZfq5D0%2BFtK%2F1lhhPLQayDIpIZ6abZDy2f90%2Bt1lJr4b6HDONs%2FbHxGUN%2BODbsnZVz9cL3hy1aODLlykAug3%2B8nAsQc5JWN5xiyXVIO3blmqhU6RFB8WPcipFKWD849XNE34ngpHg3i%2B3Qj4cxjyFAiLDMAAxANk4LV3E%2F26wm5TwMlMaRRDHMxDWHSL7KX3ogllT0jC8iN7ABjqkAct9Jay2CE3tsc8cZFyijNmvro7HZoc7uBv69L%2BKra4aMZNZlhFYTU4WYISqVIaxrS3MPZzHT715Y22PPSELeQPV%2F9NulhQfFs9LX1aiIw2zq0Eo%2BzBTXTnimFnaDcQTp%2BsoA48LBTzWIWn6frYGhO%2Bae3Pximz8ANPTmfVKUZ3FINWXwoYVkds%2BdvDhn3RPuW%2F2LJrWn%2BXFq2rMEyJupB6A0U%2By&X-Amz-Signature=40b629c1d5b9426ec4e8ee768ceeac17b972758903b21b0f65003bd53d4fd0b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
