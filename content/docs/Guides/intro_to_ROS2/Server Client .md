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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS6GKCL2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKZHOa2LYqgZ4G4f5%2F8gdjvy20woDCoubFzxQqOIS%2BWAiAYoOudhgUOIC504bBf5504VxDSjmxfXZw1RxRbIBJz4Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMDXuGIFEj33y%2B1oQbKtwDWi0uGC6HiAOhRAPHnyDm2gOz%2FF0%2B2ptdqINpvYhO25FOBuKesaMLWbL39ST9tiYfAt3w9tFSjkAFtZf%2BC%2BF1Wn5Llho2mxU6CbjR0yw3eWbwjO5aOI2m3ZJ0OsXwduT7Z7mdGCH48MQrlBiMxZGe5NRrjxGRpYM8svsY2GVZZW0v4BiiLTyKTJHid97XWf9CwtTh4rdyRYXpXwwQQxHF0jKC6GMJHV1tdZx5fVsOqQQrXIG993Luxq7GOLYm7Y6cdXQ5KCUnZ7fdMMC1klsHVCCZ3JcTid9f8G6BYoPrmZk8EWSuyhYrBJJMKGGUag4unasPpf1fbZl4Q9yJl3xoY4j4dwN270N6NqqFp4jwiWGTxAixO1ZpkbFO%2Ft7Wyg%2BKxCJu2adKEiKc116uKRYOsQRHErlpjgmkHUuZzvLdn9vvN8v40D6gCaXyiBqoKC9rxjZyxEP9HlRsEKMedNwQyfOqQrm0BD9S47HvsVG7ku%2FXondzgpBaUZjfMgl198cFH8U3nnwlc%2Fimn7ZvRv6mDJ65mnC10odan9XOcHr23VN4neORRfV03KeWn9g18BTfcB9ZXlDaVyzOLLArn%2BH3QxMRBz49u2GkbLTZ9TZN4nGSLYi%2FW0UgfoLja6Iw%2FcvowAY6pgG8sfjwY3Y%2Bzu88EMaRTHsxhrpA7QLJiLH%2BZ0JcBbW7tqiDctroMOS4Pk%2BwI7TXdgmtaDB336GeS3aiXwk6H6nREr6IERd4yDVqVxsQi8xBN%2BzrnLo2cVSCgnN69rhNRyjCgBGifSB3xEUi1Trp%2FWdXPGZPqBuwJTPcFQO4nqD%2BOvaTytS1WspTN%2BmgLuRX1YIwV2pjKCr0ZaQ21GMGJZFo1xxMm8iz&X-Amz-Signature=02e8be19821191b6fb27bfae52c81bc65b8b4e09372c9d7d3b904a23acbd709d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS6GKCL2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKZHOa2LYqgZ4G4f5%2F8gdjvy20woDCoubFzxQqOIS%2BWAiAYoOudhgUOIC504bBf5504VxDSjmxfXZw1RxRbIBJz4Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMDXuGIFEj33y%2B1oQbKtwDWi0uGC6HiAOhRAPHnyDm2gOz%2FF0%2B2ptdqINpvYhO25FOBuKesaMLWbL39ST9tiYfAt3w9tFSjkAFtZf%2BC%2BF1Wn5Llho2mxU6CbjR0yw3eWbwjO5aOI2m3ZJ0OsXwduT7Z7mdGCH48MQrlBiMxZGe5NRrjxGRpYM8svsY2GVZZW0v4BiiLTyKTJHid97XWf9CwtTh4rdyRYXpXwwQQxHF0jKC6GMJHV1tdZx5fVsOqQQrXIG993Luxq7GOLYm7Y6cdXQ5KCUnZ7fdMMC1klsHVCCZ3JcTid9f8G6BYoPrmZk8EWSuyhYrBJJMKGGUag4unasPpf1fbZl4Q9yJl3xoY4j4dwN270N6NqqFp4jwiWGTxAixO1ZpkbFO%2Ft7Wyg%2BKxCJu2adKEiKc116uKRYOsQRHErlpjgmkHUuZzvLdn9vvN8v40D6gCaXyiBqoKC9rxjZyxEP9HlRsEKMedNwQyfOqQrm0BD9S47HvsVG7ku%2FXondzgpBaUZjfMgl198cFH8U3nnwlc%2Fimn7ZvRv6mDJ65mnC10odan9XOcHr23VN4neORRfV03KeWn9g18BTfcB9ZXlDaVyzOLLArn%2BH3QxMRBz49u2GkbLTZ9TZN4nGSLYi%2FW0UgfoLja6Iw%2FcvowAY6pgG8sfjwY3Y%2Bzu88EMaRTHsxhrpA7QLJiLH%2BZ0JcBbW7tqiDctroMOS4Pk%2BwI7TXdgmtaDB336GeS3aiXwk6H6nREr6IERd4yDVqVxsQi8xBN%2BzrnLo2cVSCgnN69rhNRyjCgBGifSB3xEUi1Trp%2FWdXPGZPqBuwJTPcFQO4nqD%2BOvaTytS1WspTN%2BmgLuRX1YIwV2pjKCr0ZaQ21GMGJZFo1xxMm8iz&X-Amz-Signature=e3b1d8e7365ae8b684c9afc5a02f971636542ea6a2715b0895f07cf376f07f35&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS6GKCL2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKZHOa2LYqgZ4G4f5%2F8gdjvy20woDCoubFzxQqOIS%2BWAiAYoOudhgUOIC504bBf5504VxDSjmxfXZw1RxRbIBJz4Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMDXuGIFEj33y%2B1oQbKtwDWi0uGC6HiAOhRAPHnyDm2gOz%2FF0%2B2ptdqINpvYhO25FOBuKesaMLWbL39ST9tiYfAt3w9tFSjkAFtZf%2BC%2BF1Wn5Llho2mxU6CbjR0yw3eWbwjO5aOI2m3ZJ0OsXwduT7Z7mdGCH48MQrlBiMxZGe5NRrjxGRpYM8svsY2GVZZW0v4BiiLTyKTJHid97XWf9CwtTh4rdyRYXpXwwQQxHF0jKC6GMJHV1tdZx5fVsOqQQrXIG993Luxq7GOLYm7Y6cdXQ5KCUnZ7fdMMC1klsHVCCZ3JcTid9f8G6BYoPrmZk8EWSuyhYrBJJMKGGUag4unasPpf1fbZl4Q9yJl3xoY4j4dwN270N6NqqFp4jwiWGTxAixO1ZpkbFO%2Ft7Wyg%2BKxCJu2adKEiKc116uKRYOsQRHErlpjgmkHUuZzvLdn9vvN8v40D6gCaXyiBqoKC9rxjZyxEP9HlRsEKMedNwQyfOqQrm0BD9S47HvsVG7ku%2FXondzgpBaUZjfMgl198cFH8U3nnwlc%2Fimn7ZvRv6mDJ65mnC10odan9XOcHr23VN4neORRfV03KeWn9g18BTfcB9ZXlDaVyzOLLArn%2BH3QxMRBz49u2GkbLTZ9TZN4nGSLYi%2FW0UgfoLja6Iw%2FcvowAY6pgG8sfjwY3Y%2Bzu88EMaRTHsxhrpA7QLJiLH%2BZ0JcBbW7tqiDctroMOS4Pk%2BwI7TXdgmtaDB336GeS3aiXwk6H6nREr6IERd4yDVqVxsQi8xBN%2BzrnLo2cVSCgnN69rhNRyjCgBGifSB3xEUi1Trp%2FWdXPGZPqBuwJTPcFQO4nqD%2BOvaTytS1WspTN%2BmgLuRX1YIwV2pjKCr0ZaQ21GMGJZFo1xxMm8iz&X-Amz-Signature=75726065898b50a2d55d0a2708af8b799a9c1b4532c3e3c1050052c67eb8014d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS6GKCL2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKZHOa2LYqgZ4G4f5%2F8gdjvy20woDCoubFzxQqOIS%2BWAiAYoOudhgUOIC504bBf5504VxDSjmxfXZw1RxRbIBJz4Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMDXuGIFEj33y%2B1oQbKtwDWi0uGC6HiAOhRAPHnyDm2gOz%2FF0%2B2ptdqINpvYhO25FOBuKesaMLWbL39ST9tiYfAt3w9tFSjkAFtZf%2BC%2BF1Wn5Llho2mxU6CbjR0yw3eWbwjO5aOI2m3ZJ0OsXwduT7Z7mdGCH48MQrlBiMxZGe5NRrjxGRpYM8svsY2GVZZW0v4BiiLTyKTJHid97XWf9CwtTh4rdyRYXpXwwQQxHF0jKC6GMJHV1tdZx5fVsOqQQrXIG993Luxq7GOLYm7Y6cdXQ5KCUnZ7fdMMC1klsHVCCZ3JcTid9f8G6BYoPrmZk8EWSuyhYrBJJMKGGUag4unasPpf1fbZl4Q9yJl3xoY4j4dwN270N6NqqFp4jwiWGTxAixO1ZpkbFO%2Ft7Wyg%2BKxCJu2adKEiKc116uKRYOsQRHErlpjgmkHUuZzvLdn9vvN8v40D6gCaXyiBqoKC9rxjZyxEP9HlRsEKMedNwQyfOqQrm0BD9S47HvsVG7ku%2FXondzgpBaUZjfMgl198cFH8U3nnwlc%2Fimn7ZvRv6mDJ65mnC10odan9XOcHr23VN4neORRfV03KeWn9g18BTfcB9ZXlDaVyzOLLArn%2BH3QxMRBz49u2GkbLTZ9TZN4nGSLYi%2FW0UgfoLja6Iw%2FcvowAY6pgG8sfjwY3Y%2Bzu88EMaRTHsxhrpA7QLJiLH%2BZ0JcBbW7tqiDctroMOS4Pk%2BwI7TXdgmtaDB336GeS3aiXwk6H6nREr6IERd4yDVqVxsQi8xBN%2BzrnLo2cVSCgnN69rhNRyjCgBGifSB3xEUi1Trp%2FWdXPGZPqBuwJTPcFQO4nqD%2BOvaTytS1WspTN%2BmgLuRX1YIwV2pjKCr0ZaQ21GMGJZFo1xxMm8iz&X-Amz-Signature=468b5b9463dc0491dd727c52195f44b61f13e8d7efd0f1a88f431df588451619&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS6GKCL2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKZHOa2LYqgZ4G4f5%2F8gdjvy20woDCoubFzxQqOIS%2BWAiAYoOudhgUOIC504bBf5504VxDSjmxfXZw1RxRbIBJz4Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMDXuGIFEj33y%2B1oQbKtwDWi0uGC6HiAOhRAPHnyDm2gOz%2FF0%2B2ptdqINpvYhO25FOBuKesaMLWbL39ST9tiYfAt3w9tFSjkAFtZf%2BC%2BF1Wn5Llho2mxU6CbjR0yw3eWbwjO5aOI2m3ZJ0OsXwduT7Z7mdGCH48MQrlBiMxZGe5NRrjxGRpYM8svsY2GVZZW0v4BiiLTyKTJHid97XWf9CwtTh4rdyRYXpXwwQQxHF0jKC6GMJHV1tdZx5fVsOqQQrXIG993Luxq7GOLYm7Y6cdXQ5KCUnZ7fdMMC1klsHVCCZ3JcTid9f8G6BYoPrmZk8EWSuyhYrBJJMKGGUag4unasPpf1fbZl4Q9yJl3xoY4j4dwN270N6NqqFp4jwiWGTxAixO1ZpkbFO%2Ft7Wyg%2BKxCJu2adKEiKc116uKRYOsQRHErlpjgmkHUuZzvLdn9vvN8v40D6gCaXyiBqoKC9rxjZyxEP9HlRsEKMedNwQyfOqQrm0BD9S47HvsVG7ku%2FXondzgpBaUZjfMgl198cFH8U3nnwlc%2Fimn7ZvRv6mDJ65mnC10odan9XOcHr23VN4neORRfV03KeWn9g18BTfcB9ZXlDaVyzOLLArn%2BH3QxMRBz49u2GkbLTZ9TZN4nGSLYi%2FW0UgfoLja6Iw%2FcvowAY6pgG8sfjwY3Y%2Bzu88EMaRTHsxhrpA7QLJiLH%2BZ0JcBbW7tqiDctroMOS4Pk%2BwI7TXdgmtaDB336GeS3aiXwk6H6nREr6IERd4yDVqVxsQi8xBN%2BzrnLo2cVSCgnN69rhNRyjCgBGifSB3xEUi1Trp%2FWdXPGZPqBuwJTPcFQO4nqD%2BOvaTytS1WspTN%2BmgLuRX1YIwV2pjKCr0ZaQ21GMGJZFo1xxMm8iz&X-Amz-Signature=231f3b6fb10ae667295e7423b1b7e97154b5b1374dda7acd1fc3e8cdf79d04fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
