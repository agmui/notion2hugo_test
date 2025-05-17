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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3SKWAYE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNI1yZCm0IjCkv5%2FrgdlsMKXtu%2Fll506WeHispJiSJQAiBfgFCJw%2B3fdxBdI6EL6JKRC8%2FQbcqZnnnYb%2B8vrOMZNir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMnOVNXxswO3j6INU0KtwDbxc3%2BpzsR%2B83pPkhW%2BwiScYyHMBgPX%2BOXotjo6HfEd9FqEzg8G2zcT%2FdlqHVbzUyo%2FY4wy4pw19VBji3DIAw%2FitfCUPFi2GtrCFkyNCkxNHZxM2noftdPbQ93XjtNeOEj7AQ0XovBitpvtZZHIUxsg%2F5h5H2w9rok6PopxMO%2Bxk7tiVqhT%2BLDvzmqj%2F%2BJUf6hLaVJFlYNcATqsRQ64j%2FxfSAP8EEgvHlC4yhJh259E1wAYGMJPbKSQl7KSuOqcrAB5txJFTMsL9zczTmKiWL1Ar8dK0qPgh6cMqzh3Shop72prIRq7WBIAfUkuKkm6VWTVZj5bntSggT0f6NiUI5togoWZk2Z%2B%2FGtpyg%2B%2FXCUBnzNoGV8qKOG7cuNqA2l9n28Bc4O%2BErXsPbRqnD4sDJM%2FHqQg7Pn18ruUvWV707mRpSNSwfdQOUQgYoR8r0UqXmRqPcj9r4yRq6NXlU1L3hIQqCZx1GJHc07xwt2naUY0IJ0B8yvUHSypa6xLjuSsig4p3%2BsFpqL8XGEZU83i5hr54Gmm7gTP2eDR5CrrMQdbean4NIT1HB2tCJKsmfcBiLpweBqlTr%2F0iii5KJWuWWAP6YOqFAvJmO%2BjPT06wAjd8VvoLynBP9pZqaq8Awor2hwQY6pgFP43KaG6wehyjoU5QZ1z6kZ8Cxe75%2BEkSCpINLCD0b9Pmc9Uvgh8lGf4o0gh5wXgihmh%2BGwrZWiQym8p1XOMQ8UfjNEcoEddG%2BykCM%2Bo7tp3PESqgy3iIwTVoqmPTMgZMeoStQ0j4RG%2BFnWcx5Fmrnt72D7GsRn0v7eeOR%2Bj2JM8q1hD8MOKRtgIIgtP64kjQ7DKfNCiQ0Q9YCTEcznajvvWJAs%2BvH&X-Amz-Signature=4149771377bd7eab4d38346e9d5c5f279acffdf2e8c89bcd89ba75a47b42fb40&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3SKWAYE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNI1yZCm0IjCkv5%2FrgdlsMKXtu%2Fll506WeHispJiSJQAiBfgFCJw%2B3fdxBdI6EL6JKRC8%2FQbcqZnnnYb%2B8vrOMZNir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMnOVNXxswO3j6INU0KtwDbxc3%2BpzsR%2B83pPkhW%2BwiScYyHMBgPX%2BOXotjo6HfEd9FqEzg8G2zcT%2FdlqHVbzUyo%2FY4wy4pw19VBji3DIAw%2FitfCUPFi2GtrCFkyNCkxNHZxM2noftdPbQ93XjtNeOEj7AQ0XovBitpvtZZHIUxsg%2F5h5H2w9rok6PopxMO%2Bxk7tiVqhT%2BLDvzmqj%2F%2BJUf6hLaVJFlYNcATqsRQ64j%2FxfSAP8EEgvHlC4yhJh259E1wAYGMJPbKSQl7KSuOqcrAB5txJFTMsL9zczTmKiWL1Ar8dK0qPgh6cMqzh3Shop72prIRq7WBIAfUkuKkm6VWTVZj5bntSggT0f6NiUI5togoWZk2Z%2B%2FGtpyg%2B%2FXCUBnzNoGV8qKOG7cuNqA2l9n28Bc4O%2BErXsPbRqnD4sDJM%2FHqQg7Pn18ruUvWV707mRpSNSwfdQOUQgYoR8r0UqXmRqPcj9r4yRq6NXlU1L3hIQqCZx1GJHc07xwt2naUY0IJ0B8yvUHSypa6xLjuSsig4p3%2BsFpqL8XGEZU83i5hr54Gmm7gTP2eDR5CrrMQdbean4NIT1HB2tCJKsmfcBiLpweBqlTr%2F0iii5KJWuWWAP6YOqFAvJmO%2BjPT06wAjd8VvoLynBP9pZqaq8Awor2hwQY6pgFP43KaG6wehyjoU5QZ1z6kZ8Cxe75%2BEkSCpINLCD0b9Pmc9Uvgh8lGf4o0gh5wXgihmh%2BGwrZWiQym8p1XOMQ8UfjNEcoEddG%2BykCM%2Bo7tp3PESqgy3iIwTVoqmPTMgZMeoStQ0j4RG%2BFnWcx5Fmrnt72D7GsRn0v7eeOR%2Bj2JM8q1hD8MOKRtgIIgtP64kjQ7DKfNCiQ0Q9YCTEcznajvvWJAs%2BvH&X-Amz-Signature=bf6daa6589bdcaa526f61fa6764e0867dc498a02e99f42ff48d402efcf31b93f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3SKWAYE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNI1yZCm0IjCkv5%2FrgdlsMKXtu%2Fll506WeHispJiSJQAiBfgFCJw%2B3fdxBdI6EL6JKRC8%2FQbcqZnnnYb%2B8vrOMZNir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMnOVNXxswO3j6INU0KtwDbxc3%2BpzsR%2B83pPkhW%2BwiScYyHMBgPX%2BOXotjo6HfEd9FqEzg8G2zcT%2FdlqHVbzUyo%2FY4wy4pw19VBji3DIAw%2FitfCUPFi2GtrCFkyNCkxNHZxM2noftdPbQ93XjtNeOEj7AQ0XovBitpvtZZHIUxsg%2F5h5H2w9rok6PopxMO%2Bxk7tiVqhT%2BLDvzmqj%2F%2BJUf6hLaVJFlYNcATqsRQ64j%2FxfSAP8EEgvHlC4yhJh259E1wAYGMJPbKSQl7KSuOqcrAB5txJFTMsL9zczTmKiWL1Ar8dK0qPgh6cMqzh3Shop72prIRq7WBIAfUkuKkm6VWTVZj5bntSggT0f6NiUI5togoWZk2Z%2B%2FGtpyg%2B%2FXCUBnzNoGV8qKOG7cuNqA2l9n28Bc4O%2BErXsPbRqnD4sDJM%2FHqQg7Pn18ruUvWV707mRpSNSwfdQOUQgYoR8r0UqXmRqPcj9r4yRq6NXlU1L3hIQqCZx1GJHc07xwt2naUY0IJ0B8yvUHSypa6xLjuSsig4p3%2BsFpqL8XGEZU83i5hr54Gmm7gTP2eDR5CrrMQdbean4NIT1HB2tCJKsmfcBiLpweBqlTr%2F0iii5KJWuWWAP6YOqFAvJmO%2BjPT06wAjd8VvoLynBP9pZqaq8Awor2hwQY6pgFP43KaG6wehyjoU5QZ1z6kZ8Cxe75%2BEkSCpINLCD0b9Pmc9Uvgh8lGf4o0gh5wXgihmh%2BGwrZWiQym8p1XOMQ8UfjNEcoEddG%2BykCM%2Bo7tp3PESqgy3iIwTVoqmPTMgZMeoStQ0j4RG%2BFnWcx5Fmrnt72D7GsRn0v7eeOR%2Bj2JM8q1hD8MOKRtgIIgtP64kjQ7DKfNCiQ0Q9YCTEcznajvvWJAs%2BvH&X-Amz-Signature=e4833252ddf02ad21b4c9334e8e324df2e8c5f0bca1491432616d6f140b305f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3SKWAYE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNI1yZCm0IjCkv5%2FrgdlsMKXtu%2Fll506WeHispJiSJQAiBfgFCJw%2B3fdxBdI6EL6JKRC8%2FQbcqZnnnYb%2B8vrOMZNir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMnOVNXxswO3j6INU0KtwDbxc3%2BpzsR%2B83pPkhW%2BwiScYyHMBgPX%2BOXotjo6HfEd9FqEzg8G2zcT%2FdlqHVbzUyo%2FY4wy4pw19VBji3DIAw%2FitfCUPFi2GtrCFkyNCkxNHZxM2noftdPbQ93XjtNeOEj7AQ0XovBitpvtZZHIUxsg%2F5h5H2w9rok6PopxMO%2Bxk7tiVqhT%2BLDvzmqj%2F%2BJUf6hLaVJFlYNcATqsRQ64j%2FxfSAP8EEgvHlC4yhJh259E1wAYGMJPbKSQl7KSuOqcrAB5txJFTMsL9zczTmKiWL1Ar8dK0qPgh6cMqzh3Shop72prIRq7WBIAfUkuKkm6VWTVZj5bntSggT0f6NiUI5togoWZk2Z%2B%2FGtpyg%2B%2FXCUBnzNoGV8qKOG7cuNqA2l9n28Bc4O%2BErXsPbRqnD4sDJM%2FHqQg7Pn18ruUvWV707mRpSNSwfdQOUQgYoR8r0UqXmRqPcj9r4yRq6NXlU1L3hIQqCZx1GJHc07xwt2naUY0IJ0B8yvUHSypa6xLjuSsig4p3%2BsFpqL8XGEZU83i5hr54Gmm7gTP2eDR5CrrMQdbean4NIT1HB2tCJKsmfcBiLpweBqlTr%2F0iii5KJWuWWAP6YOqFAvJmO%2BjPT06wAjd8VvoLynBP9pZqaq8Awor2hwQY6pgFP43KaG6wehyjoU5QZ1z6kZ8Cxe75%2BEkSCpINLCD0b9Pmc9Uvgh8lGf4o0gh5wXgihmh%2BGwrZWiQym8p1XOMQ8UfjNEcoEddG%2BykCM%2Bo7tp3PESqgy3iIwTVoqmPTMgZMeoStQ0j4RG%2BFnWcx5Fmrnt72D7GsRn0v7eeOR%2Bj2JM8q1hD8MOKRtgIIgtP64kjQ7DKfNCiQ0Q9YCTEcznajvvWJAs%2BvH&X-Amz-Signature=1e60d6b857b84a9e7f1c44dfd84f0d675ef3dba439dbb3530cc707fa8abe1c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3SKWAYE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNI1yZCm0IjCkv5%2FrgdlsMKXtu%2Fll506WeHispJiSJQAiBfgFCJw%2B3fdxBdI6EL6JKRC8%2FQbcqZnnnYb%2B8vrOMZNir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMnOVNXxswO3j6INU0KtwDbxc3%2BpzsR%2B83pPkhW%2BwiScYyHMBgPX%2BOXotjo6HfEd9FqEzg8G2zcT%2FdlqHVbzUyo%2FY4wy4pw19VBji3DIAw%2FitfCUPFi2GtrCFkyNCkxNHZxM2noftdPbQ93XjtNeOEj7AQ0XovBitpvtZZHIUxsg%2F5h5H2w9rok6PopxMO%2Bxk7tiVqhT%2BLDvzmqj%2F%2BJUf6hLaVJFlYNcATqsRQ64j%2FxfSAP8EEgvHlC4yhJh259E1wAYGMJPbKSQl7KSuOqcrAB5txJFTMsL9zczTmKiWL1Ar8dK0qPgh6cMqzh3Shop72prIRq7WBIAfUkuKkm6VWTVZj5bntSggT0f6NiUI5togoWZk2Z%2B%2FGtpyg%2B%2FXCUBnzNoGV8qKOG7cuNqA2l9n28Bc4O%2BErXsPbRqnD4sDJM%2FHqQg7Pn18ruUvWV707mRpSNSwfdQOUQgYoR8r0UqXmRqPcj9r4yRq6NXlU1L3hIQqCZx1GJHc07xwt2naUY0IJ0B8yvUHSypa6xLjuSsig4p3%2BsFpqL8XGEZU83i5hr54Gmm7gTP2eDR5CrrMQdbean4NIT1HB2tCJKsmfcBiLpweBqlTr%2F0iii5KJWuWWAP6YOqFAvJmO%2BjPT06wAjd8VvoLynBP9pZqaq8Awor2hwQY6pgFP43KaG6wehyjoU5QZ1z6kZ8Cxe75%2BEkSCpINLCD0b9Pmc9Uvgh8lGf4o0gh5wXgihmh%2BGwrZWiQym8p1XOMQ8UfjNEcoEddG%2BykCM%2Bo7tp3PESqgy3iIwTVoqmPTMgZMeoStQ0j4RG%2BFnWcx5Fmrnt72D7GsRn0v7eeOR%2Bj2JM8q1hD8MOKRtgIIgtP64kjQ7DKfNCiQ0Q9YCTEcznajvvWJAs%2BvH&X-Amz-Signature=b7b1148b1fe4759ee0146a8be36fbb8d7a6e1c9444168a936a3682ec9b3f67e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
