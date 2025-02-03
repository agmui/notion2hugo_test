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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646LCDWRF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEFIVpVCekS8iqafnzpBeY08PDOEg2%2FRXsESi7UFbzWMAiAxxEjP9mf6%2FR5P%2FPmJyP9kj0JTtbdshW7D9ngvYwLcJCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMZHZ%2F6GFyzT9JnUN3KtwDfcko%2FAIthw7iisfGTQ37esqtS8PvnS2VDtbFpFyxoxyK35PJaQyoGnCvTcHIbdeqhg3aqIexjGxtr9KdZtnVM%2BCgFAwCJa%2BCpzl6tJ24uS1iVD140jdy2xN0PXhUiAu8HFBzqWDZjEt0c3MkO%2B9cpUsJH%2BMH5CUe0aIg9ezhGuD9lSQMZKy%2FQ%2FSmTAxmg5Bj0Zo%2B0D0UnGOzQPRYrEfQfSCsdKhtCFhubRItj2U2Pmyj2dQeRmyh7py66n7HQKkgXtXih%2BQeSggkaZH4OqtABg33iqH%2BpE%2F9KhrulSCQYmws%2FHhjkJm3DKMQckFkQRvnGps08eazKtiWFbOf7xXgqTIrU%2BpMD%2F1NsNGRXpsRuCnq2cevbzq0yBrHIYS%2FmWOmuU1mwoYXe6Yi5ujO1nIFP1kV2LoYPoN%2B5mD4htG4NFqq1P%2FRJeaYB9gJqFYi2J996j0%2BdfyIJK4yoaWhMerrehWsIRSyL7ixxlo34f32U3KJFhDkmKDp7NSABGbrmLWuWW3wIJ8wvTI8zqXZ1cT4M730Zsz8B%2FZE5c9CL2VkS2u5b5UCK4jZthwYI9sfq%2FZqkx1ToaF3l4scU2urMsRCSj3UiGZ1%2Bs%2BaHZsPYGrjky6SJZQbDIwn%2BMy7AsUwr6KEvQY6pgH2Pq8D0DajMYIq5ZNdKURtEH3M5%2F8TEJfKz2wN362gXfAIhhdJ27ZY3P2zY3M7BSfDoYJZlCvhxmkeMnINHEh16s1ADfkwc7B9ny1XDl5b5rTeR78jkivrnWFTJpKgJF8KQnekdGBMnrdk2djVklxS45y4cvHrcignMXgJsKF81G9UP6fdpZQUpBEwUtOZ25%2FwFgmN5xe4bIWgI%2FYeBXtumebKdX5N&X-Amz-Signature=4cb8839a3b46a4b50b2f19a10e8e409c2e8c02ab0a03a4ec35475d716a421de4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646LCDWRF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEFIVpVCekS8iqafnzpBeY08PDOEg2%2FRXsESi7UFbzWMAiAxxEjP9mf6%2FR5P%2FPmJyP9kj0JTtbdshW7D9ngvYwLcJCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMZHZ%2F6GFyzT9JnUN3KtwDfcko%2FAIthw7iisfGTQ37esqtS8PvnS2VDtbFpFyxoxyK35PJaQyoGnCvTcHIbdeqhg3aqIexjGxtr9KdZtnVM%2BCgFAwCJa%2BCpzl6tJ24uS1iVD140jdy2xN0PXhUiAu8HFBzqWDZjEt0c3MkO%2B9cpUsJH%2BMH5CUe0aIg9ezhGuD9lSQMZKy%2FQ%2FSmTAxmg5Bj0Zo%2B0D0UnGOzQPRYrEfQfSCsdKhtCFhubRItj2U2Pmyj2dQeRmyh7py66n7HQKkgXtXih%2BQeSggkaZH4OqtABg33iqH%2BpE%2F9KhrulSCQYmws%2FHhjkJm3DKMQckFkQRvnGps08eazKtiWFbOf7xXgqTIrU%2BpMD%2F1NsNGRXpsRuCnq2cevbzq0yBrHIYS%2FmWOmuU1mwoYXe6Yi5ujO1nIFP1kV2LoYPoN%2B5mD4htG4NFqq1P%2FRJeaYB9gJqFYi2J996j0%2BdfyIJK4yoaWhMerrehWsIRSyL7ixxlo34f32U3KJFhDkmKDp7NSABGbrmLWuWW3wIJ8wvTI8zqXZ1cT4M730Zsz8B%2FZE5c9CL2VkS2u5b5UCK4jZthwYI9sfq%2FZqkx1ToaF3l4scU2urMsRCSj3UiGZ1%2Bs%2BaHZsPYGrjky6SJZQbDIwn%2BMy7AsUwr6KEvQY6pgH2Pq8D0DajMYIq5ZNdKURtEH3M5%2F8TEJfKz2wN362gXfAIhhdJ27ZY3P2zY3M7BSfDoYJZlCvhxmkeMnINHEh16s1ADfkwc7B9ny1XDl5b5rTeR78jkivrnWFTJpKgJF8KQnekdGBMnrdk2djVklxS45y4cvHrcignMXgJsKF81G9UP6fdpZQUpBEwUtOZ25%2FwFgmN5xe4bIWgI%2FYeBXtumebKdX5N&X-Amz-Signature=663e0a0e7f2adaa332ba2524b1f49a4a864e8d0a7f58c13510339d06930ac032&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646LCDWRF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEFIVpVCekS8iqafnzpBeY08PDOEg2%2FRXsESi7UFbzWMAiAxxEjP9mf6%2FR5P%2FPmJyP9kj0JTtbdshW7D9ngvYwLcJCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMZHZ%2F6GFyzT9JnUN3KtwDfcko%2FAIthw7iisfGTQ37esqtS8PvnS2VDtbFpFyxoxyK35PJaQyoGnCvTcHIbdeqhg3aqIexjGxtr9KdZtnVM%2BCgFAwCJa%2BCpzl6tJ24uS1iVD140jdy2xN0PXhUiAu8HFBzqWDZjEt0c3MkO%2B9cpUsJH%2BMH5CUe0aIg9ezhGuD9lSQMZKy%2FQ%2FSmTAxmg5Bj0Zo%2B0D0UnGOzQPRYrEfQfSCsdKhtCFhubRItj2U2Pmyj2dQeRmyh7py66n7HQKkgXtXih%2BQeSggkaZH4OqtABg33iqH%2BpE%2F9KhrulSCQYmws%2FHhjkJm3DKMQckFkQRvnGps08eazKtiWFbOf7xXgqTIrU%2BpMD%2F1NsNGRXpsRuCnq2cevbzq0yBrHIYS%2FmWOmuU1mwoYXe6Yi5ujO1nIFP1kV2LoYPoN%2B5mD4htG4NFqq1P%2FRJeaYB9gJqFYi2J996j0%2BdfyIJK4yoaWhMerrehWsIRSyL7ixxlo34f32U3KJFhDkmKDp7NSABGbrmLWuWW3wIJ8wvTI8zqXZ1cT4M730Zsz8B%2FZE5c9CL2VkS2u5b5UCK4jZthwYI9sfq%2FZqkx1ToaF3l4scU2urMsRCSj3UiGZ1%2Bs%2BaHZsPYGrjky6SJZQbDIwn%2BMy7AsUwr6KEvQY6pgH2Pq8D0DajMYIq5ZNdKURtEH3M5%2F8TEJfKz2wN362gXfAIhhdJ27ZY3P2zY3M7BSfDoYJZlCvhxmkeMnINHEh16s1ADfkwc7B9ny1XDl5b5rTeR78jkivrnWFTJpKgJF8KQnekdGBMnrdk2djVklxS45y4cvHrcignMXgJsKF81G9UP6fdpZQUpBEwUtOZ25%2FwFgmN5xe4bIWgI%2FYeBXtumebKdX5N&X-Amz-Signature=151dcfeca086da561fd55503297c869ab44bc78da0bd9e0bf1f3ff5b68dbfcbb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646LCDWRF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEFIVpVCekS8iqafnzpBeY08PDOEg2%2FRXsESi7UFbzWMAiAxxEjP9mf6%2FR5P%2FPmJyP9kj0JTtbdshW7D9ngvYwLcJCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMZHZ%2F6GFyzT9JnUN3KtwDfcko%2FAIthw7iisfGTQ37esqtS8PvnS2VDtbFpFyxoxyK35PJaQyoGnCvTcHIbdeqhg3aqIexjGxtr9KdZtnVM%2BCgFAwCJa%2BCpzl6tJ24uS1iVD140jdy2xN0PXhUiAu8HFBzqWDZjEt0c3MkO%2B9cpUsJH%2BMH5CUe0aIg9ezhGuD9lSQMZKy%2FQ%2FSmTAxmg5Bj0Zo%2B0D0UnGOzQPRYrEfQfSCsdKhtCFhubRItj2U2Pmyj2dQeRmyh7py66n7HQKkgXtXih%2BQeSggkaZH4OqtABg33iqH%2BpE%2F9KhrulSCQYmws%2FHhjkJm3DKMQckFkQRvnGps08eazKtiWFbOf7xXgqTIrU%2BpMD%2F1NsNGRXpsRuCnq2cevbzq0yBrHIYS%2FmWOmuU1mwoYXe6Yi5ujO1nIFP1kV2LoYPoN%2B5mD4htG4NFqq1P%2FRJeaYB9gJqFYi2J996j0%2BdfyIJK4yoaWhMerrehWsIRSyL7ixxlo34f32U3KJFhDkmKDp7NSABGbrmLWuWW3wIJ8wvTI8zqXZ1cT4M730Zsz8B%2FZE5c9CL2VkS2u5b5UCK4jZthwYI9sfq%2FZqkx1ToaF3l4scU2urMsRCSj3UiGZ1%2Bs%2BaHZsPYGrjky6SJZQbDIwn%2BMy7AsUwr6KEvQY6pgH2Pq8D0DajMYIq5ZNdKURtEH3M5%2F8TEJfKz2wN362gXfAIhhdJ27ZY3P2zY3M7BSfDoYJZlCvhxmkeMnINHEh16s1ADfkwc7B9ny1XDl5b5rTeR78jkivrnWFTJpKgJF8KQnekdGBMnrdk2djVklxS45y4cvHrcignMXgJsKF81G9UP6fdpZQUpBEwUtOZ25%2FwFgmN5xe4bIWgI%2FYeBXtumebKdX5N&X-Amz-Signature=e449f522c47e2c0b2dcaa7fa564a64f9c3fe7d381a1d707fbd2f634d4cbf7adf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646LCDWRF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEFIVpVCekS8iqafnzpBeY08PDOEg2%2FRXsESi7UFbzWMAiAxxEjP9mf6%2FR5P%2FPmJyP9kj0JTtbdshW7D9ngvYwLcJCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMZHZ%2F6GFyzT9JnUN3KtwDfcko%2FAIthw7iisfGTQ37esqtS8PvnS2VDtbFpFyxoxyK35PJaQyoGnCvTcHIbdeqhg3aqIexjGxtr9KdZtnVM%2BCgFAwCJa%2BCpzl6tJ24uS1iVD140jdy2xN0PXhUiAu8HFBzqWDZjEt0c3MkO%2B9cpUsJH%2BMH5CUe0aIg9ezhGuD9lSQMZKy%2FQ%2FSmTAxmg5Bj0Zo%2B0D0UnGOzQPRYrEfQfSCsdKhtCFhubRItj2U2Pmyj2dQeRmyh7py66n7HQKkgXtXih%2BQeSggkaZH4OqtABg33iqH%2BpE%2F9KhrulSCQYmws%2FHhjkJm3DKMQckFkQRvnGps08eazKtiWFbOf7xXgqTIrU%2BpMD%2F1NsNGRXpsRuCnq2cevbzq0yBrHIYS%2FmWOmuU1mwoYXe6Yi5ujO1nIFP1kV2LoYPoN%2B5mD4htG4NFqq1P%2FRJeaYB9gJqFYi2J996j0%2BdfyIJK4yoaWhMerrehWsIRSyL7ixxlo34f32U3KJFhDkmKDp7NSABGbrmLWuWW3wIJ8wvTI8zqXZ1cT4M730Zsz8B%2FZE5c9CL2VkS2u5b5UCK4jZthwYI9sfq%2FZqkx1ToaF3l4scU2urMsRCSj3UiGZ1%2Bs%2BaHZsPYGrjky6SJZQbDIwn%2BMy7AsUwr6KEvQY6pgH2Pq8D0DajMYIq5ZNdKURtEH3M5%2F8TEJfKz2wN362gXfAIhhdJ27ZY3P2zY3M7BSfDoYJZlCvhxmkeMnINHEh16s1ADfkwc7B9ny1XDl5b5rTeR78jkivrnWFTJpKgJF8KQnekdGBMnrdk2djVklxS45y4cvHrcignMXgJsKF81G9UP6fdpZQUpBEwUtOZ25%2FwFgmN5xe4bIWgI%2FYeBXtumebKdX5N&X-Amz-Signature=d8460fc71e831eb21fa8b56a2868aa9ae6ce9f2469117cd7e25502d50979d61d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
