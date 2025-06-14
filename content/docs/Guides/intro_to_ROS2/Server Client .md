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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765LLPTO%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDCUJxpHoB0KPPggB7O4TPIrr7Zro7Hbyj9KUcwxOTE5QIhALMDyZJv5CurcKru%2BhNwGHBFv5ldeOHdrY%2FhA6tvqjYeKv8DCDgQABoMNjM3NDIzMTgzODA1Igyw81JjSALwh3CXzQUq3APbAEEdL1Srhvzqz5JpkZj7mUlnIr2Zapn1LIqmxXjlSU1KqImKAMb5shs286K973eUP1VCWxuWupwkyo7VtOMwbn0jHwCrD9ATzu%2Bc5oXodeM70YDUSlT8r34Ys389%2B4BxDXCg8Ls%2FGYRwXy4eFlX3mOyAxuKFZnQESC6Gaz7ahua%2BHkSM57E1t9Q95kUg%2BQEQYN5Gqn09dq9eP1FD2ggwF4nlJn85Uc64V06ouWogBC8Qe9BcznHRtj8WMVBgZoyysINUcUzHgyR7bi3EDYsdOZhu2VsCFXbPT058i%2BE1q%2FBqqukMAbnnQaM8iWLvtJ8M2XkKI4IpSt%2FYlsJUxoPYzFYIHzQVQuUhe0DsQN7H5yksU00tVZpRsZIIBezSjIiYlsmLf3afc9Fqe%2Bzp33CKHv83TrDQUhKZFLFhbH6Lr1F18ywQM5LtIZ8oND%2FZx73o9uReprM7M9zCdmmUOTpTeKKgw5q%2FLxOpX1U5o%2BbJjX59LVw5qwn1BOZOH9xsoZmDK20OXfCxxDSWlG16nRd8dSW7dGa5y%2FhvZ1TcEUqHHemqlucw5lp9anKoYwgoMICU%2BmtPe8dNAQ3MK8PUG9n7tkxoh9AYN%2BKRD%2BqJ3LF3zaskW%2BJ7zbUnhfSuLTCB9rfCBjqkAe66BFi1ZrFrtfarY5Ydh7L5B7OKFBO8CX%2FywzX8P9TXJP24cUefPiFmSECumnpACnyIIS95RiMWIHWumaKVwn74HADLivqjeQVuj3Zpj9LPsRqDJd%2FXVmeFSl%2FYUgcVLYiljWWIyDZIsUV0IxHpSJFZ9Uk7O%2Bf2D%2BUwUrazQznAIt%2FWt7x2fgUdJhgxNRYwx%2BZ6ykSdalNhd8oxKwtS7UneBz3f&X-Amz-Signature=311d007c319aa699c427216b3440b654b7fb73ac1d4e873aa81dfe54b0ff3291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765LLPTO%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDCUJxpHoB0KPPggB7O4TPIrr7Zro7Hbyj9KUcwxOTE5QIhALMDyZJv5CurcKru%2BhNwGHBFv5ldeOHdrY%2FhA6tvqjYeKv8DCDgQABoMNjM3NDIzMTgzODA1Igyw81JjSALwh3CXzQUq3APbAEEdL1Srhvzqz5JpkZj7mUlnIr2Zapn1LIqmxXjlSU1KqImKAMb5shs286K973eUP1VCWxuWupwkyo7VtOMwbn0jHwCrD9ATzu%2Bc5oXodeM70YDUSlT8r34Ys389%2B4BxDXCg8Ls%2FGYRwXy4eFlX3mOyAxuKFZnQESC6Gaz7ahua%2BHkSM57E1t9Q95kUg%2BQEQYN5Gqn09dq9eP1FD2ggwF4nlJn85Uc64V06ouWogBC8Qe9BcznHRtj8WMVBgZoyysINUcUzHgyR7bi3EDYsdOZhu2VsCFXbPT058i%2BE1q%2FBqqukMAbnnQaM8iWLvtJ8M2XkKI4IpSt%2FYlsJUxoPYzFYIHzQVQuUhe0DsQN7H5yksU00tVZpRsZIIBezSjIiYlsmLf3afc9Fqe%2Bzp33CKHv83TrDQUhKZFLFhbH6Lr1F18ywQM5LtIZ8oND%2FZx73o9uReprM7M9zCdmmUOTpTeKKgw5q%2FLxOpX1U5o%2BbJjX59LVw5qwn1BOZOH9xsoZmDK20OXfCxxDSWlG16nRd8dSW7dGa5y%2FhvZ1TcEUqHHemqlucw5lp9anKoYwgoMICU%2BmtPe8dNAQ3MK8PUG9n7tkxoh9AYN%2BKRD%2BqJ3LF3zaskW%2BJ7zbUnhfSuLTCB9rfCBjqkAe66BFi1ZrFrtfarY5Ydh7L5B7OKFBO8CX%2FywzX8P9TXJP24cUefPiFmSECumnpACnyIIS95RiMWIHWumaKVwn74HADLivqjeQVuj3Zpj9LPsRqDJd%2FXVmeFSl%2FYUgcVLYiljWWIyDZIsUV0IxHpSJFZ9Uk7O%2Bf2D%2BUwUrazQznAIt%2FWt7x2fgUdJhgxNRYwx%2BZ6ykSdalNhd8oxKwtS7UneBz3f&X-Amz-Signature=a40d7bc65b2bae13a43ff109cd2aca5e39f9d22049a11f38b705d3acd429b8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765LLPTO%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDCUJxpHoB0KPPggB7O4TPIrr7Zro7Hbyj9KUcwxOTE5QIhALMDyZJv5CurcKru%2BhNwGHBFv5ldeOHdrY%2FhA6tvqjYeKv8DCDgQABoMNjM3NDIzMTgzODA1Igyw81JjSALwh3CXzQUq3APbAEEdL1Srhvzqz5JpkZj7mUlnIr2Zapn1LIqmxXjlSU1KqImKAMb5shs286K973eUP1VCWxuWupwkyo7VtOMwbn0jHwCrD9ATzu%2Bc5oXodeM70YDUSlT8r34Ys389%2B4BxDXCg8Ls%2FGYRwXy4eFlX3mOyAxuKFZnQESC6Gaz7ahua%2BHkSM57E1t9Q95kUg%2BQEQYN5Gqn09dq9eP1FD2ggwF4nlJn85Uc64V06ouWogBC8Qe9BcznHRtj8WMVBgZoyysINUcUzHgyR7bi3EDYsdOZhu2VsCFXbPT058i%2BE1q%2FBqqukMAbnnQaM8iWLvtJ8M2XkKI4IpSt%2FYlsJUxoPYzFYIHzQVQuUhe0DsQN7H5yksU00tVZpRsZIIBezSjIiYlsmLf3afc9Fqe%2Bzp33CKHv83TrDQUhKZFLFhbH6Lr1F18ywQM5LtIZ8oND%2FZx73o9uReprM7M9zCdmmUOTpTeKKgw5q%2FLxOpX1U5o%2BbJjX59LVw5qwn1BOZOH9xsoZmDK20OXfCxxDSWlG16nRd8dSW7dGa5y%2FhvZ1TcEUqHHemqlucw5lp9anKoYwgoMICU%2BmtPe8dNAQ3MK8PUG9n7tkxoh9AYN%2BKRD%2BqJ3LF3zaskW%2BJ7zbUnhfSuLTCB9rfCBjqkAe66BFi1ZrFrtfarY5Ydh7L5B7OKFBO8CX%2FywzX8P9TXJP24cUefPiFmSECumnpACnyIIS95RiMWIHWumaKVwn74HADLivqjeQVuj3Zpj9LPsRqDJd%2FXVmeFSl%2FYUgcVLYiljWWIyDZIsUV0IxHpSJFZ9Uk7O%2Bf2D%2BUwUrazQznAIt%2FWt7x2fgUdJhgxNRYwx%2BZ6ykSdalNhd8oxKwtS7UneBz3f&X-Amz-Signature=b8a519c044fe9bb0b5d4653ec388cf9a03927c583a986fdc69e0c08e0b888cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765LLPTO%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDCUJxpHoB0KPPggB7O4TPIrr7Zro7Hbyj9KUcwxOTE5QIhALMDyZJv5CurcKru%2BhNwGHBFv5ldeOHdrY%2FhA6tvqjYeKv8DCDgQABoMNjM3NDIzMTgzODA1Igyw81JjSALwh3CXzQUq3APbAEEdL1Srhvzqz5JpkZj7mUlnIr2Zapn1LIqmxXjlSU1KqImKAMb5shs286K973eUP1VCWxuWupwkyo7VtOMwbn0jHwCrD9ATzu%2Bc5oXodeM70YDUSlT8r34Ys389%2B4BxDXCg8Ls%2FGYRwXy4eFlX3mOyAxuKFZnQESC6Gaz7ahua%2BHkSM57E1t9Q95kUg%2BQEQYN5Gqn09dq9eP1FD2ggwF4nlJn85Uc64V06ouWogBC8Qe9BcznHRtj8WMVBgZoyysINUcUzHgyR7bi3EDYsdOZhu2VsCFXbPT058i%2BE1q%2FBqqukMAbnnQaM8iWLvtJ8M2XkKI4IpSt%2FYlsJUxoPYzFYIHzQVQuUhe0DsQN7H5yksU00tVZpRsZIIBezSjIiYlsmLf3afc9Fqe%2Bzp33CKHv83TrDQUhKZFLFhbH6Lr1F18ywQM5LtIZ8oND%2FZx73o9uReprM7M9zCdmmUOTpTeKKgw5q%2FLxOpX1U5o%2BbJjX59LVw5qwn1BOZOH9xsoZmDK20OXfCxxDSWlG16nRd8dSW7dGa5y%2FhvZ1TcEUqHHemqlucw5lp9anKoYwgoMICU%2BmtPe8dNAQ3MK8PUG9n7tkxoh9AYN%2BKRD%2BqJ3LF3zaskW%2BJ7zbUnhfSuLTCB9rfCBjqkAe66BFi1ZrFrtfarY5Ydh7L5B7OKFBO8CX%2FywzX8P9TXJP24cUefPiFmSECumnpACnyIIS95RiMWIHWumaKVwn74HADLivqjeQVuj3Zpj9LPsRqDJd%2FXVmeFSl%2FYUgcVLYiljWWIyDZIsUV0IxHpSJFZ9Uk7O%2Bf2D%2BUwUrazQznAIt%2FWt7x2fgUdJhgxNRYwx%2BZ6ykSdalNhd8oxKwtS7UneBz3f&X-Amz-Signature=33e21fbb04553c9d5de59529f3e05f59c4a05d20c2274d6f951bd9941dadf7d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765LLPTO%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDCUJxpHoB0KPPggB7O4TPIrr7Zro7Hbyj9KUcwxOTE5QIhALMDyZJv5CurcKru%2BhNwGHBFv5ldeOHdrY%2FhA6tvqjYeKv8DCDgQABoMNjM3NDIzMTgzODA1Igyw81JjSALwh3CXzQUq3APbAEEdL1Srhvzqz5JpkZj7mUlnIr2Zapn1LIqmxXjlSU1KqImKAMb5shs286K973eUP1VCWxuWupwkyo7VtOMwbn0jHwCrD9ATzu%2Bc5oXodeM70YDUSlT8r34Ys389%2B4BxDXCg8Ls%2FGYRwXy4eFlX3mOyAxuKFZnQESC6Gaz7ahua%2BHkSM57E1t9Q95kUg%2BQEQYN5Gqn09dq9eP1FD2ggwF4nlJn85Uc64V06ouWogBC8Qe9BcznHRtj8WMVBgZoyysINUcUzHgyR7bi3EDYsdOZhu2VsCFXbPT058i%2BE1q%2FBqqukMAbnnQaM8iWLvtJ8M2XkKI4IpSt%2FYlsJUxoPYzFYIHzQVQuUhe0DsQN7H5yksU00tVZpRsZIIBezSjIiYlsmLf3afc9Fqe%2Bzp33CKHv83TrDQUhKZFLFhbH6Lr1F18ywQM5LtIZ8oND%2FZx73o9uReprM7M9zCdmmUOTpTeKKgw5q%2FLxOpX1U5o%2BbJjX59LVw5qwn1BOZOH9xsoZmDK20OXfCxxDSWlG16nRd8dSW7dGa5y%2FhvZ1TcEUqHHemqlucw5lp9anKoYwgoMICU%2BmtPe8dNAQ3MK8PUG9n7tkxoh9AYN%2BKRD%2BqJ3LF3zaskW%2BJ7zbUnhfSuLTCB9rfCBjqkAe66BFi1ZrFrtfarY5Ydh7L5B7OKFBO8CX%2FywzX8P9TXJP24cUefPiFmSECumnpACnyIIS95RiMWIHWumaKVwn74HADLivqjeQVuj3Zpj9LPsRqDJd%2FXVmeFSl%2FYUgcVLYiljWWIyDZIsUV0IxHpSJFZ9Uk7O%2Bf2D%2BUwUrazQznAIt%2FWt7x2fgUdJhgxNRYwx%2BZ6ykSdalNhd8oxKwtS7UneBz3f&X-Amz-Signature=4041fc144c1f63a675359745b349191dd2931dc09ee9e15b9b57c4b1493032bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
