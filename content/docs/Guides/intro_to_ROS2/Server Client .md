---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNVXME6%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCIxIk28ctgbIAlIx98YSefOQt%2FCY3ObR9%2BL4cA8nc%2BTAIgF7f%2FfxNh7PzC26YCrgqH15oaxsI3qnqwXdUC1UtJ4EUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FU9ydtYJ%2FR7I%2B5oCrcA%2BHI%2BsTCYOkXDR%2Bz94QIPEMqNBcrnwnJNY557kVpTwjzo6ZVuojCF%2Bl%2BuaYAjxV9j%2B0ynSJ309qQ55SvXn%2FXALuCCZQy0qjqHDYCvOl7xWn1li%2B0FqDS%2FPedxMBKePUGTzTkyeNip3uEuEBzZA5U5WGGQ2UpN8du52gd%2BxLOWFNERV9KU2t5NRft0Kdy243lhDeJGm4L9vexBS72Az67GZm%2BXyxxuVJMACjkySlp3tsUQ5oLLqDk97qXLPzx1wHZC2wNxCGJiVUUXeqD32pJoAf0OYgWrkR1TyxvkeHcWrtWuIJ6j2Yfb2KTHfoKDY93QnGL2OdYxcAQhaT%2FN%2BPL6swAJCD4K6CLmuJiRodbw3329wP3G6o0BeE4ToA%2FvpEAkbGqo7bE1TBSPcUBikYU6pfV7JIRD7laie1ZjZqtQ9zJEIaJhYeREYw0g0av9%2B%2B4oglYrxihoyeuXWXjwv9Gz9pDI63n9uIQcic10nmiGWinK3ukz8RSE2H%2FitwRtmF5zW2JeOv1jbaNuK0RgQHQNalgyepEjtvA1aJJRBs2Zgu%2BaiZuB0KXJje%2BS%2FKQy4%2F7NCb%2BWV3naFvjgpIzG9IbkdoeR2a9BKPLT%2Fu%2BV0dHo3ffvay0megadH%2FH%2BKKEMMu0%2BdMGOqUBZBjL9MfognPSXHC7f9De%2BUAgQP1xvYHK7IHAKPpEM3zmhE1GYTSlzITuvWT2EKPC9orVqOkAQA5XTrrgTWtzaCFLWA7xhiYdGDIHkfYiuaMEuZIxzSpej33bs%2FM8%2FD8n7UCYW46%2BoCk5aLMHgcmV0cEBNZZk2qI2F3vH2%2FmrFSWjVOFqD7CS1PCJtN5JFs1DFtqyIlEr%2FDp%2BZg5q2tGNjMv1f4ha&X-Amz-Signature=21594b08a6fde46708ac3889a2d88517d6891a29a5d376c12839a493ab8fda66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNVXME6%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCIxIk28ctgbIAlIx98YSefOQt%2FCY3ObR9%2BL4cA8nc%2BTAIgF7f%2FfxNh7PzC26YCrgqH15oaxsI3qnqwXdUC1UtJ4EUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FU9ydtYJ%2FR7I%2B5oCrcA%2BHI%2BsTCYOkXDR%2Bz94QIPEMqNBcrnwnJNY557kVpTwjzo6ZVuojCF%2Bl%2BuaYAjxV9j%2B0ynSJ309qQ55SvXn%2FXALuCCZQy0qjqHDYCvOl7xWn1li%2B0FqDS%2FPedxMBKePUGTzTkyeNip3uEuEBzZA5U5WGGQ2UpN8du52gd%2BxLOWFNERV9KU2t5NRft0Kdy243lhDeJGm4L9vexBS72Az67GZm%2BXyxxuVJMACjkySlp3tsUQ5oLLqDk97qXLPzx1wHZC2wNxCGJiVUUXeqD32pJoAf0OYgWrkR1TyxvkeHcWrtWuIJ6j2Yfb2KTHfoKDY93QnGL2OdYxcAQhaT%2FN%2BPL6swAJCD4K6CLmuJiRodbw3329wP3G6o0BeE4ToA%2FvpEAkbGqo7bE1TBSPcUBikYU6pfV7JIRD7laie1ZjZqtQ9zJEIaJhYeREYw0g0av9%2B%2B4oglYrxihoyeuXWXjwv9Gz9pDI63n9uIQcic10nmiGWinK3ukz8RSE2H%2FitwRtmF5zW2JeOv1jbaNuK0RgQHQNalgyepEjtvA1aJJRBs2Zgu%2BaiZuB0KXJje%2BS%2FKQy4%2F7NCb%2BWV3naFvjgpIzG9IbkdoeR2a9BKPLT%2Fu%2BV0dHo3ffvay0megadH%2FH%2BKKEMMu0%2BdMGOqUBZBjL9MfognPSXHC7f9De%2BUAgQP1xvYHK7IHAKPpEM3zmhE1GYTSlzITuvWT2EKPC9orVqOkAQA5XTrrgTWtzaCFLWA7xhiYdGDIHkfYiuaMEuZIxzSpej33bs%2FM8%2FD8n7UCYW46%2BoCk5aLMHgcmV0cEBNZZk2qI2F3vH2%2FmrFSWjVOFqD7CS1PCJtN5JFs1DFtqyIlEr%2FDp%2BZg5q2tGNjMv1f4ha&X-Amz-Signature=bd589174cd0313f7fbb0f374f377904504ef6465d16b89ca2e17454f7266a5a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNVXME6%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCIxIk28ctgbIAlIx98YSefOQt%2FCY3ObR9%2BL4cA8nc%2BTAIgF7f%2FfxNh7PzC26YCrgqH15oaxsI3qnqwXdUC1UtJ4EUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FU9ydtYJ%2FR7I%2B5oCrcA%2BHI%2BsTCYOkXDR%2Bz94QIPEMqNBcrnwnJNY557kVpTwjzo6ZVuojCF%2Bl%2BuaYAjxV9j%2B0ynSJ309qQ55SvXn%2FXALuCCZQy0qjqHDYCvOl7xWn1li%2B0FqDS%2FPedxMBKePUGTzTkyeNip3uEuEBzZA5U5WGGQ2UpN8du52gd%2BxLOWFNERV9KU2t5NRft0Kdy243lhDeJGm4L9vexBS72Az67GZm%2BXyxxuVJMACjkySlp3tsUQ5oLLqDk97qXLPzx1wHZC2wNxCGJiVUUXeqD32pJoAf0OYgWrkR1TyxvkeHcWrtWuIJ6j2Yfb2KTHfoKDY93QnGL2OdYxcAQhaT%2FN%2BPL6swAJCD4K6CLmuJiRodbw3329wP3G6o0BeE4ToA%2FvpEAkbGqo7bE1TBSPcUBikYU6pfV7JIRD7laie1ZjZqtQ9zJEIaJhYeREYw0g0av9%2B%2B4oglYrxihoyeuXWXjwv9Gz9pDI63n9uIQcic10nmiGWinK3ukz8RSE2H%2FitwRtmF5zW2JeOv1jbaNuK0RgQHQNalgyepEjtvA1aJJRBs2Zgu%2BaiZuB0KXJje%2BS%2FKQy4%2F7NCb%2BWV3naFvjgpIzG9IbkdoeR2a9BKPLT%2Fu%2BV0dHo3ffvay0megadH%2FH%2BKKEMMu0%2BdMGOqUBZBjL9MfognPSXHC7f9De%2BUAgQP1xvYHK7IHAKPpEM3zmhE1GYTSlzITuvWT2EKPC9orVqOkAQA5XTrrgTWtzaCFLWA7xhiYdGDIHkfYiuaMEuZIxzSpej33bs%2FM8%2FD8n7UCYW46%2BoCk5aLMHgcmV0cEBNZZk2qI2F3vH2%2FmrFSWjVOFqD7CS1PCJtN5JFs1DFtqyIlEr%2FDp%2BZg5q2tGNjMv1f4ha&X-Amz-Signature=02085d1653a626c8ae1a8b12c68c0c753f4d15285fcf237103868ead7537222c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNVXME6%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCIxIk28ctgbIAlIx98YSefOQt%2FCY3ObR9%2BL4cA8nc%2BTAIgF7f%2FfxNh7PzC26YCrgqH15oaxsI3qnqwXdUC1UtJ4EUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FU9ydtYJ%2FR7I%2B5oCrcA%2BHI%2BsTCYOkXDR%2Bz94QIPEMqNBcrnwnJNY557kVpTwjzo6ZVuojCF%2Bl%2BuaYAjxV9j%2B0ynSJ309qQ55SvXn%2FXALuCCZQy0qjqHDYCvOl7xWn1li%2B0FqDS%2FPedxMBKePUGTzTkyeNip3uEuEBzZA5U5WGGQ2UpN8du52gd%2BxLOWFNERV9KU2t5NRft0Kdy243lhDeJGm4L9vexBS72Az67GZm%2BXyxxuVJMACjkySlp3tsUQ5oLLqDk97qXLPzx1wHZC2wNxCGJiVUUXeqD32pJoAf0OYgWrkR1TyxvkeHcWrtWuIJ6j2Yfb2KTHfoKDY93QnGL2OdYxcAQhaT%2FN%2BPL6swAJCD4K6CLmuJiRodbw3329wP3G6o0BeE4ToA%2FvpEAkbGqo7bE1TBSPcUBikYU6pfV7JIRD7laie1ZjZqtQ9zJEIaJhYeREYw0g0av9%2B%2B4oglYrxihoyeuXWXjwv9Gz9pDI63n9uIQcic10nmiGWinK3ukz8RSE2H%2FitwRtmF5zW2JeOv1jbaNuK0RgQHQNalgyepEjtvA1aJJRBs2Zgu%2BaiZuB0KXJje%2BS%2FKQy4%2F7NCb%2BWV3naFvjgpIzG9IbkdoeR2a9BKPLT%2Fu%2BV0dHo3ffvay0megadH%2FH%2BKKEMMu0%2BdMGOqUBZBjL9MfognPSXHC7f9De%2BUAgQP1xvYHK7IHAKPpEM3zmhE1GYTSlzITuvWT2EKPC9orVqOkAQA5XTrrgTWtzaCFLWA7xhiYdGDIHkfYiuaMEuZIxzSpej33bs%2FM8%2FD8n7UCYW46%2BoCk5aLMHgcmV0cEBNZZk2qI2F3vH2%2FmrFSWjVOFqD7CS1PCJtN5JFs1DFtqyIlEr%2FDp%2BZg5q2tGNjMv1f4ha&X-Amz-Signature=ad04d2371bc294dd9d863f513197929c7d1a9538a8e777bb6b49450c7192c5c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNVXME6%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCIxIk28ctgbIAlIx98YSefOQt%2FCY3ObR9%2BL4cA8nc%2BTAIgF7f%2FfxNh7PzC26YCrgqH15oaxsI3qnqwXdUC1UtJ4EUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FU9ydtYJ%2FR7I%2B5oCrcA%2BHI%2BsTCYOkXDR%2Bz94QIPEMqNBcrnwnJNY557kVpTwjzo6ZVuojCF%2Bl%2BuaYAjxV9j%2B0ynSJ309qQ55SvXn%2FXALuCCZQy0qjqHDYCvOl7xWn1li%2B0FqDS%2FPedxMBKePUGTzTkyeNip3uEuEBzZA5U5WGGQ2UpN8du52gd%2BxLOWFNERV9KU2t5NRft0Kdy243lhDeJGm4L9vexBS72Az67GZm%2BXyxxuVJMACjkySlp3tsUQ5oLLqDk97qXLPzx1wHZC2wNxCGJiVUUXeqD32pJoAf0OYgWrkR1TyxvkeHcWrtWuIJ6j2Yfb2KTHfoKDY93QnGL2OdYxcAQhaT%2FN%2BPL6swAJCD4K6CLmuJiRodbw3329wP3G6o0BeE4ToA%2FvpEAkbGqo7bE1TBSPcUBikYU6pfV7JIRD7laie1ZjZqtQ9zJEIaJhYeREYw0g0av9%2B%2B4oglYrxihoyeuXWXjwv9Gz9pDI63n9uIQcic10nmiGWinK3ukz8RSE2H%2FitwRtmF5zW2JeOv1jbaNuK0RgQHQNalgyepEjtvA1aJJRBs2Zgu%2BaiZuB0KXJje%2BS%2FKQy4%2F7NCb%2BWV3naFvjgpIzG9IbkdoeR2a9BKPLT%2Fu%2BV0dHo3ffvay0megadH%2FH%2BKKEMMu0%2BdMGOqUBZBjL9MfognPSXHC7f9De%2BUAgQP1xvYHK7IHAKPpEM3zmhE1GYTSlzITuvWT2EKPC9orVqOkAQA5XTrrgTWtzaCFLWA7xhiYdGDIHkfYiuaMEuZIxzSpej33bs%2FM8%2FD8n7UCYW46%2BoCk5aLMHgcmV0cEBNZZk2qI2F3vH2%2FmrFSWjVOFqD7CS1PCJtN5JFs1DFtqyIlEr%2FDp%2BZg5q2tGNjMv1f4ha&X-Amz-Signature=1890d0ce346e8b2c2ae71fb85047601ff03eae2ecc18123f4384a55439ba0083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
