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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UEZAGVP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy5dJdzxd4wQnupeJJ%2BG%2BM3ziYWOxHrqH8cvULQOgZkQIga6%2FnA2kdu9IU5UfmaIbo%2B0RQx4jxoUhuQez8Qafp4XIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcmCAAmJWHH0%2BxGHircA53a0Z5qkbR3S3Faq9QxErIwzTrTvtgr8RgxiH6Qf4q%2FjMa25bi7Qq2%2FLmriFu4kLCdQGtgU1YhKn1mtstqmkHx%2FpSr%2FqKntMZEuEdIEnVrYVlrANCbUzbSc4loCzYTlPSzlCwKLfPIBTOAv1IWcYofBExTcB%2BXxcJwYHFuoM9T1YPAsc2GEE5fiVUJTP5o4fcXD4nLCWUdGQqBi6fKMGuXMtAzvS2wMIuYpEBoktqqj368cIDxh%2BPtxVTxpnCMSdKXLf%2FW7bueLD3Ofp7oharWqhp10LDTlyPZ9hS54i%2BUT5B9IcdGKf0lgoLDO70YKIA3GywwLVTOJnfAleA3fTZPgUm8y2Z3a02NhfwfI6JjpNLv1S1wqEzEURXlpnr022Ml7PZbir6XE7ryDL2%2FJ%2Fx%2Fgb03WBHanM1lNhGYhImFnOO6E1zDU3qqEUGcJ%2FCnZw8yB5X8SLEIX4kaKBH%2FaK5Nc9M%2Fodqn2mGwB%2B6G5z9mficsDJHawN9%2BtgWlds8j3cEPRjNHUCfdhk43rIsI3laW79hiS0VIRE8SRPEKO2aPcw7ZfIDHg12MENc9C0ExBvWACrDnm1SUBZLCzk5HzNzjPbjtUHxKffpSXM5IQ9t3MjXhXIw2sI%2FuPXEv4MMHKub8GOqUBAysold9Z%2Fo%2BS%2FHk19pGq0OkYol%2FLeqnnBvqx3ETj18V%2BaK7AgO87OVbOKA8e5UQSC9CA4gkE8aJ1a3GgbhU5b5CWZxqnySWCpdo%2BpG4QubINkyJ8slwxIZj3zTzaEmehAOmpWQsL3gOPVBnTi2hKJ9N9DP5lK3G772TblnxPhkcOCWclxn3Srw1mUGA3YtcihDJgs5cEy56y8pRmoqJWeHkb52tz&X-Amz-Signature=129ff0dc1e39d21da2445ad9f7dbea938b031c8456aa0bbcb83a87d286dc7f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UEZAGVP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy5dJdzxd4wQnupeJJ%2BG%2BM3ziYWOxHrqH8cvULQOgZkQIga6%2FnA2kdu9IU5UfmaIbo%2B0RQx4jxoUhuQez8Qafp4XIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcmCAAmJWHH0%2BxGHircA53a0Z5qkbR3S3Faq9QxErIwzTrTvtgr8RgxiH6Qf4q%2FjMa25bi7Qq2%2FLmriFu4kLCdQGtgU1YhKn1mtstqmkHx%2FpSr%2FqKntMZEuEdIEnVrYVlrANCbUzbSc4loCzYTlPSzlCwKLfPIBTOAv1IWcYofBExTcB%2BXxcJwYHFuoM9T1YPAsc2GEE5fiVUJTP5o4fcXD4nLCWUdGQqBi6fKMGuXMtAzvS2wMIuYpEBoktqqj368cIDxh%2BPtxVTxpnCMSdKXLf%2FW7bueLD3Ofp7oharWqhp10LDTlyPZ9hS54i%2BUT5B9IcdGKf0lgoLDO70YKIA3GywwLVTOJnfAleA3fTZPgUm8y2Z3a02NhfwfI6JjpNLv1S1wqEzEURXlpnr022Ml7PZbir6XE7ryDL2%2FJ%2Fx%2Fgb03WBHanM1lNhGYhImFnOO6E1zDU3qqEUGcJ%2FCnZw8yB5X8SLEIX4kaKBH%2FaK5Nc9M%2Fodqn2mGwB%2B6G5z9mficsDJHawN9%2BtgWlds8j3cEPRjNHUCfdhk43rIsI3laW79hiS0VIRE8SRPEKO2aPcw7ZfIDHg12MENc9C0ExBvWACrDnm1SUBZLCzk5HzNzjPbjtUHxKffpSXM5IQ9t3MjXhXIw2sI%2FuPXEv4MMHKub8GOqUBAysold9Z%2Fo%2BS%2FHk19pGq0OkYol%2FLeqnnBvqx3ETj18V%2BaK7AgO87OVbOKA8e5UQSC9CA4gkE8aJ1a3GgbhU5b5CWZxqnySWCpdo%2BpG4QubINkyJ8slwxIZj3zTzaEmehAOmpWQsL3gOPVBnTi2hKJ9N9DP5lK3G772TblnxPhkcOCWclxn3Srw1mUGA3YtcihDJgs5cEy56y8pRmoqJWeHkb52tz&X-Amz-Signature=a3e7624d57ba9dd26fae9117a179abfd14669d003bb091782dced73be3136e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UEZAGVP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy5dJdzxd4wQnupeJJ%2BG%2BM3ziYWOxHrqH8cvULQOgZkQIga6%2FnA2kdu9IU5UfmaIbo%2B0RQx4jxoUhuQez8Qafp4XIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcmCAAmJWHH0%2BxGHircA53a0Z5qkbR3S3Faq9QxErIwzTrTvtgr8RgxiH6Qf4q%2FjMa25bi7Qq2%2FLmriFu4kLCdQGtgU1YhKn1mtstqmkHx%2FpSr%2FqKntMZEuEdIEnVrYVlrANCbUzbSc4loCzYTlPSzlCwKLfPIBTOAv1IWcYofBExTcB%2BXxcJwYHFuoM9T1YPAsc2GEE5fiVUJTP5o4fcXD4nLCWUdGQqBi6fKMGuXMtAzvS2wMIuYpEBoktqqj368cIDxh%2BPtxVTxpnCMSdKXLf%2FW7bueLD3Ofp7oharWqhp10LDTlyPZ9hS54i%2BUT5B9IcdGKf0lgoLDO70YKIA3GywwLVTOJnfAleA3fTZPgUm8y2Z3a02NhfwfI6JjpNLv1S1wqEzEURXlpnr022Ml7PZbir6XE7ryDL2%2FJ%2Fx%2Fgb03WBHanM1lNhGYhImFnOO6E1zDU3qqEUGcJ%2FCnZw8yB5X8SLEIX4kaKBH%2FaK5Nc9M%2Fodqn2mGwB%2B6G5z9mficsDJHawN9%2BtgWlds8j3cEPRjNHUCfdhk43rIsI3laW79hiS0VIRE8SRPEKO2aPcw7ZfIDHg12MENc9C0ExBvWACrDnm1SUBZLCzk5HzNzjPbjtUHxKffpSXM5IQ9t3MjXhXIw2sI%2FuPXEv4MMHKub8GOqUBAysold9Z%2Fo%2BS%2FHk19pGq0OkYol%2FLeqnnBvqx3ETj18V%2BaK7AgO87OVbOKA8e5UQSC9CA4gkE8aJ1a3GgbhU5b5CWZxqnySWCpdo%2BpG4QubINkyJ8slwxIZj3zTzaEmehAOmpWQsL3gOPVBnTi2hKJ9N9DP5lK3G772TblnxPhkcOCWclxn3Srw1mUGA3YtcihDJgs5cEy56y8pRmoqJWeHkb52tz&X-Amz-Signature=51cd5bfea5751e2e9132f495954338efc255a019c749655e5428aa99d32d844a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UEZAGVP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy5dJdzxd4wQnupeJJ%2BG%2BM3ziYWOxHrqH8cvULQOgZkQIga6%2FnA2kdu9IU5UfmaIbo%2B0RQx4jxoUhuQez8Qafp4XIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcmCAAmJWHH0%2BxGHircA53a0Z5qkbR3S3Faq9QxErIwzTrTvtgr8RgxiH6Qf4q%2FjMa25bi7Qq2%2FLmriFu4kLCdQGtgU1YhKn1mtstqmkHx%2FpSr%2FqKntMZEuEdIEnVrYVlrANCbUzbSc4loCzYTlPSzlCwKLfPIBTOAv1IWcYofBExTcB%2BXxcJwYHFuoM9T1YPAsc2GEE5fiVUJTP5o4fcXD4nLCWUdGQqBi6fKMGuXMtAzvS2wMIuYpEBoktqqj368cIDxh%2BPtxVTxpnCMSdKXLf%2FW7bueLD3Ofp7oharWqhp10LDTlyPZ9hS54i%2BUT5B9IcdGKf0lgoLDO70YKIA3GywwLVTOJnfAleA3fTZPgUm8y2Z3a02NhfwfI6JjpNLv1S1wqEzEURXlpnr022Ml7PZbir6XE7ryDL2%2FJ%2Fx%2Fgb03WBHanM1lNhGYhImFnOO6E1zDU3qqEUGcJ%2FCnZw8yB5X8SLEIX4kaKBH%2FaK5Nc9M%2Fodqn2mGwB%2B6G5z9mficsDJHawN9%2BtgWlds8j3cEPRjNHUCfdhk43rIsI3laW79hiS0VIRE8SRPEKO2aPcw7ZfIDHg12MENc9C0ExBvWACrDnm1SUBZLCzk5HzNzjPbjtUHxKffpSXM5IQ9t3MjXhXIw2sI%2FuPXEv4MMHKub8GOqUBAysold9Z%2Fo%2BS%2FHk19pGq0OkYol%2FLeqnnBvqx3ETj18V%2BaK7AgO87OVbOKA8e5UQSC9CA4gkE8aJ1a3GgbhU5b5CWZxqnySWCpdo%2BpG4QubINkyJ8slwxIZj3zTzaEmehAOmpWQsL3gOPVBnTi2hKJ9N9DP5lK3G772TblnxPhkcOCWclxn3Srw1mUGA3YtcihDJgs5cEy56y8pRmoqJWeHkb52tz&X-Amz-Signature=7b6c7bbdba498a541a7f6f7e56d99705339287d56136704abc71affe8c905a4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UEZAGVP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy5dJdzxd4wQnupeJJ%2BG%2BM3ziYWOxHrqH8cvULQOgZkQIga6%2FnA2kdu9IU5UfmaIbo%2B0RQx4jxoUhuQez8Qafp4XIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcmCAAmJWHH0%2BxGHircA53a0Z5qkbR3S3Faq9QxErIwzTrTvtgr8RgxiH6Qf4q%2FjMa25bi7Qq2%2FLmriFu4kLCdQGtgU1YhKn1mtstqmkHx%2FpSr%2FqKntMZEuEdIEnVrYVlrANCbUzbSc4loCzYTlPSzlCwKLfPIBTOAv1IWcYofBExTcB%2BXxcJwYHFuoM9T1YPAsc2GEE5fiVUJTP5o4fcXD4nLCWUdGQqBi6fKMGuXMtAzvS2wMIuYpEBoktqqj368cIDxh%2BPtxVTxpnCMSdKXLf%2FW7bueLD3Ofp7oharWqhp10LDTlyPZ9hS54i%2BUT5B9IcdGKf0lgoLDO70YKIA3GywwLVTOJnfAleA3fTZPgUm8y2Z3a02NhfwfI6JjpNLv1S1wqEzEURXlpnr022Ml7PZbir6XE7ryDL2%2FJ%2Fx%2Fgb03WBHanM1lNhGYhImFnOO6E1zDU3qqEUGcJ%2FCnZw8yB5X8SLEIX4kaKBH%2FaK5Nc9M%2Fodqn2mGwB%2B6G5z9mficsDJHawN9%2BtgWlds8j3cEPRjNHUCfdhk43rIsI3laW79hiS0VIRE8SRPEKO2aPcw7ZfIDHg12MENc9C0ExBvWACrDnm1SUBZLCzk5HzNzjPbjtUHxKffpSXM5IQ9t3MjXhXIw2sI%2FuPXEv4MMHKub8GOqUBAysold9Z%2Fo%2BS%2FHk19pGq0OkYol%2FLeqnnBvqx3ETj18V%2BaK7AgO87OVbOKA8e5UQSC9CA4gkE8aJ1a3GgbhU5b5CWZxqnySWCpdo%2BpG4QubINkyJ8slwxIZj3zTzaEmehAOmpWQsL3gOPVBnTi2hKJ9N9DP5lK3G772TblnxPhkcOCWclxn3Srw1mUGA3YtcihDJgs5cEy56y8pRmoqJWeHkb52tz&X-Amz-Signature=872045ac5ba624e735979d8d622063ffd098e5677ac26cbfee5fbfffe54bff2e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
