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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJMDW5H%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCDZ3jqA01aMcWoXfQCAi6fjCHtmZAkCMftVDtpF5MfqwIgMssP%2FvL5pZI0QPnx6nWYGaQU14qGkZ4KZNevxlHolZkqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmdud%2FHZNYuR8ECrSrcA2J9wGFCrqQGsw0EcxcgVsWWCFgt7d9SsDf0WkvZUBbxNx0Z2k3jpOcq0WYvfoFUyxv4ldh1wN98QRKoT4TIvF4zJX5JSmLmk51k%2B7b2ja%2F9e1%2BmdBrCOQajPCwNa1gVQzW%2Fx71X%2Fa8JmsOmEQmFQrF2KUK6x5fyXy3uw02n5E5bKBBKyIQs2DoUfaCs0%2FjD78ORST%2FM3ZR35Vxlv149kUIwTDhyC13WPKxWJfkIj5bCuJK9GIRqcbwfGuLTXNbYIySfuCTz7CTxG2%2B58mOmxPl73U6kzrOBCOTHsq98LLTS8WZMQ2%2BRvLn6J5vq6s0VAZ29BgEF8czXqjv%2BhqErFU3kCdfpB8MUedXlG01e36XcqDK0CAUaJHVOw9G9297ZK%2Bmv8CRIch85PRxWqJuKN%2B3MFw%2BsBxTaXAhPAGoXYiUE2mezqAa3bCNfHlp1wNyBUvYvKRTJKUFPTqdDvk6PcJGSN6gQlINW%2F%2FW7wq8Zzbt9%2BYCgkvyvzIcK8wCVsiZlypP80K93aQsqSBJCqtSci8BmQPooj25VbXFC79a%2BOy%2FB%2BNbyAujSrXfir1BN%2FFBS%2B0ELKao9wn4jz7z1uFqWhjUnCy4ZOPVprjiZ79mWh19syvrrPEC6C2Jd49dgMJzj1b0GOqUBA8isfd8sPmxpNnwwy5NDAOG8cSvJPwMV75WeLX8Dv8BXL6RBqyUOrpmteZhuXX5l6lJUIQ2%2BmqJFCcAr5z%2F4USw5fYuT3ylXAU8szupQ3yKo3sNDL3ldvE%2FED1rYoxYlLqLRLWyoSkkLp5Q2x8QNCh69DafW1kyLErz0wFHF4NeJenWPEflAlRFRRXH0rGg3k780l0drlatX5byVFbUpYkJU9T9p&X-Amz-Signature=fcfb0c98ebbcd3980b0eb3b46f5e1bc399d0e1fa68fc6427b3185247e0807c68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJMDW5H%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCDZ3jqA01aMcWoXfQCAi6fjCHtmZAkCMftVDtpF5MfqwIgMssP%2FvL5pZI0QPnx6nWYGaQU14qGkZ4KZNevxlHolZkqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmdud%2FHZNYuR8ECrSrcA2J9wGFCrqQGsw0EcxcgVsWWCFgt7d9SsDf0WkvZUBbxNx0Z2k3jpOcq0WYvfoFUyxv4ldh1wN98QRKoT4TIvF4zJX5JSmLmk51k%2B7b2ja%2F9e1%2BmdBrCOQajPCwNa1gVQzW%2Fx71X%2Fa8JmsOmEQmFQrF2KUK6x5fyXy3uw02n5E5bKBBKyIQs2DoUfaCs0%2FjD78ORST%2FM3ZR35Vxlv149kUIwTDhyC13WPKxWJfkIj5bCuJK9GIRqcbwfGuLTXNbYIySfuCTz7CTxG2%2B58mOmxPl73U6kzrOBCOTHsq98LLTS8WZMQ2%2BRvLn6J5vq6s0VAZ29BgEF8czXqjv%2BhqErFU3kCdfpB8MUedXlG01e36XcqDK0CAUaJHVOw9G9297ZK%2Bmv8CRIch85PRxWqJuKN%2B3MFw%2BsBxTaXAhPAGoXYiUE2mezqAa3bCNfHlp1wNyBUvYvKRTJKUFPTqdDvk6PcJGSN6gQlINW%2F%2FW7wq8Zzbt9%2BYCgkvyvzIcK8wCVsiZlypP80K93aQsqSBJCqtSci8BmQPooj25VbXFC79a%2BOy%2FB%2BNbyAujSrXfir1BN%2FFBS%2B0ELKao9wn4jz7z1uFqWhjUnCy4ZOPVprjiZ79mWh19syvrrPEC6C2Jd49dgMJzj1b0GOqUBA8isfd8sPmxpNnwwy5NDAOG8cSvJPwMV75WeLX8Dv8BXL6RBqyUOrpmteZhuXX5l6lJUIQ2%2BmqJFCcAr5z%2F4USw5fYuT3ylXAU8szupQ3yKo3sNDL3ldvE%2FED1rYoxYlLqLRLWyoSkkLp5Q2x8QNCh69DafW1kyLErz0wFHF4NeJenWPEflAlRFRRXH0rGg3k780l0drlatX5byVFbUpYkJU9T9p&X-Amz-Signature=c52c02b2aae51bbe212e47a8dc68fc90b35babdfe3cb0ec8f9e83a38587a3d06&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJMDW5H%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCDZ3jqA01aMcWoXfQCAi6fjCHtmZAkCMftVDtpF5MfqwIgMssP%2FvL5pZI0QPnx6nWYGaQU14qGkZ4KZNevxlHolZkqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmdud%2FHZNYuR8ECrSrcA2J9wGFCrqQGsw0EcxcgVsWWCFgt7d9SsDf0WkvZUBbxNx0Z2k3jpOcq0WYvfoFUyxv4ldh1wN98QRKoT4TIvF4zJX5JSmLmk51k%2B7b2ja%2F9e1%2BmdBrCOQajPCwNa1gVQzW%2Fx71X%2Fa8JmsOmEQmFQrF2KUK6x5fyXy3uw02n5E5bKBBKyIQs2DoUfaCs0%2FjD78ORST%2FM3ZR35Vxlv149kUIwTDhyC13WPKxWJfkIj5bCuJK9GIRqcbwfGuLTXNbYIySfuCTz7CTxG2%2B58mOmxPl73U6kzrOBCOTHsq98LLTS8WZMQ2%2BRvLn6J5vq6s0VAZ29BgEF8czXqjv%2BhqErFU3kCdfpB8MUedXlG01e36XcqDK0CAUaJHVOw9G9297ZK%2Bmv8CRIch85PRxWqJuKN%2B3MFw%2BsBxTaXAhPAGoXYiUE2mezqAa3bCNfHlp1wNyBUvYvKRTJKUFPTqdDvk6PcJGSN6gQlINW%2F%2FW7wq8Zzbt9%2BYCgkvyvzIcK8wCVsiZlypP80K93aQsqSBJCqtSci8BmQPooj25VbXFC79a%2BOy%2FB%2BNbyAujSrXfir1BN%2FFBS%2B0ELKao9wn4jz7z1uFqWhjUnCy4ZOPVprjiZ79mWh19syvrrPEC6C2Jd49dgMJzj1b0GOqUBA8isfd8sPmxpNnwwy5NDAOG8cSvJPwMV75WeLX8Dv8BXL6RBqyUOrpmteZhuXX5l6lJUIQ2%2BmqJFCcAr5z%2F4USw5fYuT3ylXAU8szupQ3yKo3sNDL3ldvE%2FED1rYoxYlLqLRLWyoSkkLp5Q2x8QNCh69DafW1kyLErz0wFHF4NeJenWPEflAlRFRRXH0rGg3k780l0drlatX5byVFbUpYkJU9T9p&X-Amz-Signature=f2882d3c40b1dcfd2a19face114e8b35839eb4574725fd1bcb3289d98f413de2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJMDW5H%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCDZ3jqA01aMcWoXfQCAi6fjCHtmZAkCMftVDtpF5MfqwIgMssP%2FvL5pZI0QPnx6nWYGaQU14qGkZ4KZNevxlHolZkqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmdud%2FHZNYuR8ECrSrcA2J9wGFCrqQGsw0EcxcgVsWWCFgt7d9SsDf0WkvZUBbxNx0Z2k3jpOcq0WYvfoFUyxv4ldh1wN98QRKoT4TIvF4zJX5JSmLmk51k%2B7b2ja%2F9e1%2BmdBrCOQajPCwNa1gVQzW%2Fx71X%2Fa8JmsOmEQmFQrF2KUK6x5fyXy3uw02n5E5bKBBKyIQs2DoUfaCs0%2FjD78ORST%2FM3ZR35Vxlv149kUIwTDhyC13WPKxWJfkIj5bCuJK9GIRqcbwfGuLTXNbYIySfuCTz7CTxG2%2B58mOmxPl73U6kzrOBCOTHsq98LLTS8WZMQ2%2BRvLn6J5vq6s0VAZ29BgEF8czXqjv%2BhqErFU3kCdfpB8MUedXlG01e36XcqDK0CAUaJHVOw9G9297ZK%2Bmv8CRIch85PRxWqJuKN%2B3MFw%2BsBxTaXAhPAGoXYiUE2mezqAa3bCNfHlp1wNyBUvYvKRTJKUFPTqdDvk6PcJGSN6gQlINW%2F%2FW7wq8Zzbt9%2BYCgkvyvzIcK8wCVsiZlypP80K93aQsqSBJCqtSci8BmQPooj25VbXFC79a%2BOy%2FB%2BNbyAujSrXfir1BN%2FFBS%2B0ELKao9wn4jz7z1uFqWhjUnCy4ZOPVprjiZ79mWh19syvrrPEC6C2Jd49dgMJzj1b0GOqUBA8isfd8sPmxpNnwwy5NDAOG8cSvJPwMV75WeLX8Dv8BXL6RBqyUOrpmteZhuXX5l6lJUIQ2%2BmqJFCcAr5z%2F4USw5fYuT3ylXAU8szupQ3yKo3sNDL3ldvE%2FED1rYoxYlLqLRLWyoSkkLp5Q2x8QNCh69DafW1kyLErz0wFHF4NeJenWPEflAlRFRRXH0rGg3k780l0drlatX5byVFbUpYkJU9T9p&X-Amz-Signature=4052030a7f3dda419a6cbe22226ad9823c9a0a93b098931b52a8bf2e24ff1317&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJMDW5H%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCDZ3jqA01aMcWoXfQCAi6fjCHtmZAkCMftVDtpF5MfqwIgMssP%2FvL5pZI0QPnx6nWYGaQU14qGkZ4KZNevxlHolZkqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmdud%2FHZNYuR8ECrSrcA2J9wGFCrqQGsw0EcxcgVsWWCFgt7d9SsDf0WkvZUBbxNx0Z2k3jpOcq0WYvfoFUyxv4ldh1wN98QRKoT4TIvF4zJX5JSmLmk51k%2B7b2ja%2F9e1%2BmdBrCOQajPCwNa1gVQzW%2Fx71X%2Fa8JmsOmEQmFQrF2KUK6x5fyXy3uw02n5E5bKBBKyIQs2DoUfaCs0%2FjD78ORST%2FM3ZR35Vxlv149kUIwTDhyC13WPKxWJfkIj5bCuJK9GIRqcbwfGuLTXNbYIySfuCTz7CTxG2%2B58mOmxPl73U6kzrOBCOTHsq98LLTS8WZMQ2%2BRvLn6J5vq6s0VAZ29BgEF8czXqjv%2BhqErFU3kCdfpB8MUedXlG01e36XcqDK0CAUaJHVOw9G9297ZK%2Bmv8CRIch85PRxWqJuKN%2B3MFw%2BsBxTaXAhPAGoXYiUE2mezqAa3bCNfHlp1wNyBUvYvKRTJKUFPTqdDvk6PcJGSN6gQlINW%2F%2FW7wq8Zzbt9%2BYCgkvyvzIcK8wCVsiZlypP80K93aQsqSBJCqtSci8BmQPooj25VbXFC79a%2BOy%2FB%2BNbyAujSrXfir1BN%2FFBS%2B0ELKao9wn4jz7z1uFqWhjUnCy4ZOPVprjiZ79mWh19syvrrPEC6C2Jd49dgMJzj1b0GOqUBA8isfd8sPmxpNnwwy5NDAOG8cSvJPwMV75WeLX8Dv8BXL6RBqyUOrpmteZhuXX5l6lJUIQ2%2BmqJFCcAr5z%2F4USw5fYuT3ylXAU8szupQ3yKo3sNDL3ldvE%2FED1rYoxYlLqLRLWyoSkkLp5Q2x8QNCh69DafW1kyLErz0wFHF4NeJenWPEflAlRFRRXH0rGg3k780l0drlatX5byVFbUpYkJU9T9p&X-Amz-Signature=a2875fbec536df87bd652e9bb4661a0465e54d8f32254b006057833c61850652&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
