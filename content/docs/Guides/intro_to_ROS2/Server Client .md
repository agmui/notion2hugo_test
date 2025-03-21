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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622O7C6QR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEJCcRwCjcOnZpPgZC1kFleFKogZEQqsbcs3OFPFcukpAiBY1qlHYnCvKLfvL8LZJGrF0msEuew3l87ZKVX6bMgMuyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5nghtREYaNmYq9ukKtwDxmrlTgvxPjtvT0qhaFcdUfeGHwdAQTPIsSiXmJj1F4rnaDLaiBZ6AEf3tp%2Fmm3uExXoRGTcf7i%2FSiYq0x9X5Pdmr5psqu%2FeYcPUPXIyeP2ZjiuSoiCV%2Fv4eVmawPpzEBvHCOdqOAg4XMp3baxHRiFCWORG5313TojTERbcLx0RyW5Nh%2Fdu0ZGhX%2FFJbzkoaxnC%2B9i9PmfoQ3r6kx7nTqc34PpoIQLoYKGqunAyD%2FYEyJ1hSGFybIKUJ%2FRGFZv%2FdsGTby6CRheKu2X8d3KNyheZfLjcQj1EuKhS9tIqZRc6h1o2OMfh9iwEKr%2BdA9ApJDlMEGMMRbNcn7Qz7D69cJLcQM58saUgNr4bVG4T9PxkLFc995t19bDTGqtjr0yloXbOgGjKrf%2BEkVKqkv5kKMVbiAnY5mbIzw42N1Ij7kI%2F%2BFVRtLpvYZ0oGaV15dS%2FoRqm1BVghOKQD0HWfi7S2EV1VCOXrgJZerGF4Txx0bojDqTzMyBgPwoqXTLloAzMmVtg5HjifXQzRzp1LVo5mbyFBdUJVz5ZgNf0SwxGmfB3OO2iaJAPKtLd7Fasnu4UVXk%2Fga4WETDaazF9eSV09yfzDTrWrS5R9S6Wj3BJywiPyE7IU5XEQj0mPN%2FnYw4rn1vgY6pgE6vyWCeazFMQaWs7YSGjv7QIyMqoeER690sY5Pyhh60NoHL0888TLjmevxCMhPbNeLz%2BMpaiLGhRr4peQv%2Bmp5kTRIqJo2Oe7EUcUyYTBuVbpBFp6fai7csFrJHvSV9deHYifnqZ%2BASDHdtW4YqlpJ7rIPo2oMLiLMU2AkJY9%2FI4KJZOJblTRdG0MOfBfUPbDi3xb%2FWz4x6YXJaI6nzM5HNtCif%2Bf3&X-Amz-Signature=391f67484bcf1dcf0f7f2741436a0523a2c6285ed341c593846e759ba3bcaa82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622O7C6QR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEJCcRwCjcOnZpPgZC1kFleFKogZEQqsbcs3OFPFcukpAiBY1qlHYnCvKLfvL8LZJGrF0msEuew3l87ZKVX6bMgMuyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5nghtREYaNmYq9ukKtwDxmrlTgvxPjtvT0qhaFcdUfeGHwdAQTPIsSiXmJj1F4rnaDLaiBZ6AEf3tp%2Fmm3uExXoRGTcf7i%2FSiYq0x9X5Pdmr5psqu%2FeYcPUPXIyeP2ZjiuSoiCV%2Fv4eVmawPpzEBvHCOdqOAg4XMp3baxHRiFCWORG5313TojTERbcLx0RyW5Nh%2Fdu0ZGhX%2FFJbzkoaxnC%2B9i9PmfoQ3r6kx7nTqc34PpoIQLoYKGqunAyD%2FYEyJ1hSGFybIKUJ%2FRGFZv%2FdsGTby6CRheKu2X8d3KNyheZfLjcQj1EuKhS9tIqZRc6h1o2OMfh9iwEKr%2BdA9ApJDlMEGMMRbNcn7Qz7D69cJLcQM58saUgNr4bVG4T9PxkLFc995t19bDTGqtjr0yloXbOgGjKrf%2BEkVKqkv5kKMVbiAnY5mbIzw42N1Ij7kI%2F%2BFVRtLpvYZ0oGaV15dS%2FoRqm1BVghOKQD0HWfi7S2EV1VCOXrgJZerGF4Txx0bojDqTzMyBgPwoqXTLloAzMmVtg5HjifXQzRzp1LVo5mbyFBdUJVz5ZgNf0SwxGmfB3OO2iaJAPKtLd7Fasnu4UVXk%2Fga4WETDaazF9eSV09yfzDTrWrS5R9S6Wj3BJywiPyE7IU5XEQj0mPN%2FnYw4rn1vgY6pgE6vyWCeazFMQaWs7YSGjv7QIyMqoeER690sY5Pyhh60NoHL0888TLjmevxCMhPbNeLz%2BMpaiLGhRr4peQv%2Bmp5kTRIqJo2Oe7EUcUyYTBuVbpBFp6fai7csFrJHvSV9deHYifnqZ%2BASDHdtW4YqlpJ7rIPo2oMLiLMU2AkJY9%2FI4KJZOJblTRdG0MOfBfUPbDi3xb%2FWz4x6YXJaI6nzM5HNtCif%2Bf3&X-Amz-Signature=ce777f098d8c186b0be2f162024306b96e72a8db2c53e9e7a4f2efbc0f1b529b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622O7C6QR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEJCcRwCjcOnZpPgZC1kFleFKogZEQqsbcs3OFPFcukpAiBY1qlHYnCvKLfvL8LZJGrF0msEuew3l87ZKVX6bMgMuyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5nghtREYaNmYq9ukKtwDxmrlTgvxPjtvT0qhaFcdUfeGHwdAQTPIsSiXmJj1F4rnaDLaiBZ6AEf3tp%2Fmm3uExXoRGTcf7i%2FSiYq0x9X5Pdmr5psqu%2FeYcPUPXIyeP2ZjiuSoiCV%2Fv4eVmawPpzEBvHCOdqOAg4XMp3baxHRiFCWORG5313TojTERbcLx0RyW5Nh%2Fdu0ZGhX%2FFJbzkoaxnC%2B9i9PmfoQ3r6kx7nTqc34PpoIQLoYKGqunAyD%2FYEyJ1hSGFybIKUJ%2FRGFZv%2FdsGTby6CRheKu2X8d3KNyheZfLjcQj1EuKhS9tIqZRc6h1o2OMfh9iwEKr%2BdA9ApJDlMEGMMRbNcn7Qz7D69cJLcQM58saUgNr4bVG4T9PxkLFc995t19bDTGqtjr0yloXbOgGjKrf%2BEkVKqkv5kKMVbiAnY5mbIzw42N1Ij7kI%2F%2BFVRtLpvYZ0oGaV15dS%2FoRqm1BVghOKQD0HWfi7S2EV1VCOXrgJZerGF4Txx0bojDqTzMyBgPwoqXTLloAzMmVtg5HjifXQzRzp1LVo5mbyFBdUJVz5ZgNf0SwxGmfB3OO2iaJAPKtLd7Fasnu4UVXk%2Fga4WETDaazF9eSV09yfzDTrWrS5R9S6Wj3BJywiPyE7IU5XEQj0mPN%2FnYw4rn1vgY6pgE6vyWCeazFMQaWs7YSGjv7QIyMqoeER690sY5Pyhh60NoHL0888TLjmevxCMhPbNeLz%2BMpaiLGhRr4peQv%2Bmp5kTRIqJo2Oe7EUcUyYTBuVbpBFp6fai7csFrJHvSV9deHYifnqZ%2BASDHdtW4YqlpJ7rIPo2oMLiLMU2AkJY9%2FI4KJZOJblTRdG0MOfBfUPbDi3xb%2FWz4x6YXJaI6nzM5HNtCif%2Bf3&X-Amz-Signature=8adeba6ea5e0c874ef16bac46a49e237ac75e201333eddc9f6bd40f608a7e98e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622O7C6QR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEJCcRwCjcOnZpPgZC1kFleFKogZEQqsbcs3OFPFcukpAiBY1qlHYnCvKLfvL8LZJGrF0msEuew3l87ZKVX6bMgMuyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5nghtREYaNmYq9ukKtwDxmrlTgvxPjtvT0qhaFcdUfeGHwdAQTPIsSiXmJj1F4rnaDLaiBZ6AEf3tp%2Fmm3uExXoRGTcf7i%2FSiYq0x9X5Pdmr5psqu%2FeYcPUPXIyeP2ZjiuSoiCV%2Fv4eVmawPpzEBvHCOdqOAg4XMp3baxHRiFCWORG5313TojTERbcLx0RyW5Nh%2Fdu0ZGhX%2FFJbzkoaxnC%2B9i9PmfoQ3r6kx7nTqc34PpoIQLoYKGqunAyD%2FYEyJ1hSGFybIKUJ%2FRGFZv%2FdsGTby6CRheKu2X8d3KNyheZfLjcQj1EuKhS9tIqZRc6h1o2OMfh9iwEKr%2BdA9ApJDlMEGMMRbNcn7Qz7D69cJLcQM58saUgNr4bVG4T9PxkLFc995t19bDTGqtjr0yloXbOgGjKrf%2BEkVKqkv5kKMVbiAnY5mbIzw42N1Ij7kI%2F%2BFVRtLpvYZ0oGaV15dS%2FoRqm1BVghOKQD0HWfi7S2EV1VCOXrgJZerGF4Txx0bojDqTzMyBgPwoqXTLloAzMmVtg5HjifXQzRzp1LVo5mbyFBdUJVz5ZgNf0SwxGmfB3OO2iaJAPKtLd7Fasnu4UVXk%2Fga4WETDaazF9eSV09yfzDTrWrS5R9S6Wj3BJywiPyE7IU5XEQj0mPN%2FnYw4rn1vgY6pgE6vyWCeazFMQaWs7YSGjv7QIyMqoeER690sY5Pyhh60NoHL0888TLjmevxCMhPbNeLz%2BMpaiLGhRr4peQv%2Bmp5kTRIqJo2Oe7EUcUyYTBuVbpBFp6fai7csFrJHvSV9deHYifnqZ%2BASDHdtW4YqlpJ7rIPo2oMLiLMU2AkJY9%2FI4KJZOJblTRdG0MOfBfUPbDi3xb%2FWz4x6YXJaI6nzM5HNtCif%2Bf3&X-Amz-Signature=63db641fb5dad52b3177793a2f3b18cfa12dfcab4c31aa370e600075a105d0e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622O7C6QR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEJCcRwCjcOnZpPgZC1kFleFKogZEQqsbcs3OFPFcukpAiBY1qlHYnCvKLfvL8LZJGrF0msEuew3l87ZKVX6bMgMuyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5nghtREYaNmYq9ukKtwDxmrlTgvxPjtvT0qhaFcdUfeGHwdAQTPIsSiXmJj1F4rnaDLaiBZ6AEf3tp%2Fmm3uExXoRGTcf7i%2FSiYq0x9X5Pdmr5psqu%2FeYcPUPXIyeP2ZjiuSoiCV%2Fv4eVmawPpzEBvHCOdqOAg4XMp3baxHRiFCWORG5313TojTERbcLx0RyW5Nh%2Fdu0ZGhX%2FFJbzkoaxnC%2B9i9PmfoQ3r6kx7nTqc34PpoIQLoYKGqunAyD%2FYEyJ1hSGFybIKUJ%2FRGFZv%2FdsGTby6CRheKu2X8d3KNyheZfLjcQj1EuKhS9tIqZRc6h1o2OMfh9iwEKr%2BdA9ApJDlMEGMMRbNcn7Qz7D69cJLcQM58saUgNr4bVG4T9PxkLFc995t19bDTGqtjr0yloXbOgGjKrf%2BEkVKqkv5kKMVbiAnY5mbIzw42N1Ij7kI%2F%2BFVRtLpvYZ0oGaV15dS%2FoRqm1BVghOKQD0HWfi7S2EV1VCOXrgJZerGF4Txx0bojDqTzMyBgPwoqXTLloAzMmVtg5HjifXQzRzp1LVo5mbyFBdUJVz5ZgNf0SwxGmfB3OO2iaJAPKtLd7Fasnu4UVXk%2Fga4WETDaazF9eSV09yfzDTrWrS5R9S6Wj3BJywiPyE7IU5XEQj0mPN%2FnYw4rn1vgY6pgE6vyWCeazFMQaWs7YSGjv7QIyMqoeER690sY5Pyhh60NoHL0888TLjmevxCMhPbNeLz%2BMpaiLGhRr4peQv%2Bmp5kTRIqJo2Oe7EUcUyYTBuVbpBFp6fai7csFrJHvSV9deHYifnqZ%2BASDHdtW4YqlpJ7rIPo2oMLiLMU2AkJY9%2FI4KJZOJblTRdG0MOfBfUPbDi3xb%2FWz4x6YXJaI6nzM5HNtCif%2Bf3&X-Amz-Signature=d5ccc12d3f8d86f79fed967fedd4d4b69d138d7f970f9ff1ac6848667f648ce8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
