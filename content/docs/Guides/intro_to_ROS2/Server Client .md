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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W5CWYJK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD4sRCvmD4lD%2Fktv0Ww7t2SMgBjPfAr0BPjqAglQY8vjAIhANLnYS8qfVOcaYUBFr6PO0aKUx%2FQbjCNjvR2fWLzQ83WKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZiudDQfp55m1eSxAq3AO%2BY%2B5BSdyaJN4swg6FXIQBRWgndhl7Qxthdha3WeSlg0KdIettqNLBXhoLuSw2UrfeF9Xeq6Uu3gz2YR4rUJPBe572liVczGzofuZRXk0rOYYOCeNv%2B4Hrh0ud8Ah36BB%2FmUcUtWhxHpR1VvEZSCq9yaYTXN%2BE8rYeFldHOoPfKqHCPXN0Zw96GSe5ERC1wNT5eMufjgwjcJSHeE3vpKIGECTLGsnJwXTpZ1oblbFFhU30IUhm2kglDncZLyUeqcMb3OfjTLJhitXLcCYJsF2WkfBBjLCJrwBWKjbRM%2FkXCpEIrtQNoMrL6XC4LJntUCaDtvTHo0kShTnBHw%2Bv0He49yitEpDAJKT%2BkCXjBbFZ0OvrmC%2F7uOBYp4LG%2BJEMIXRGeA2UerlJdHkE2Rjuae85AcYe7oa6x1j3v9dzpQOnmGaPamJStfRHj2Lnj%2F2T5oY91fOJeNWZq9eBz%2B8eatH%2F99q8iM%2F4b9j0cpnWDOf7GQpbYdMlxvZ4cTBIM%2FrrWurs76Ebx8Zmr%2BsEI%2BQXcGheCJqbBO7fGhI%2F3YMX1wS1UZ3qr07873zvxAv3jKEdCgMKdvvYO7XVw%2B%2B8ZwhrU%2FT2wCCfzFmBcclahuoFX8LiilD1%2FkirqX1V1f4SBDC%2FtMPBBjqkARufK%2BPXHqeyW9GuGDIHiRiEYjdo0AjEts5sJg8eeYJBzfdfwk4hGFzqsHjSbm%2FIbw9in2Q0XcaXcoQieb1sHcxA%2Bb%2BUHCpmZhtBWWzyG03tUov29M1XBPAlcu%2B7wTMUBXdw1VVmDR8vArirGl7d2NgcjsMUnPJhGuhr2XAQ0pwPIhylUNhm%2FvmElIwKEFh4kXlXP1UZVNWPsMrTAcx2qmjYwTCy&X-Amz-Signature=d4a3c7ba172487239991481d666aa0dcab34f7505b8dce31de6abfd421d35d61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W5CWYJK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD4sRCvmD4lD%2Fktv0Ww7t2SMgBjPfAr0BPjqAglQY8vjAIhANLnYS8qfVOcaYUBFr6PO0aKUx%2FQbjCNjvR2fWLzQ83WKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZiudDQfp55m1eSxAq3AO%2BY%2B5BSdyaJN4swg6FXIQBRWgndhl7Qxthdha3WeSlg0KdIettqNLBXhoLuSw2UrfeF9Xeq6Uu3gz2YR4rUJPBe572liVczGzofuZRXk0rOYYOCeNv%2B4Hrh0ud8Ah36BB%2FmUcUtWhxHpR1VvEZSCq9yaYTXN%2BE8rYeFldHOoPfKqHCPXN0Zw96GSe5ERC1wNT5eMufjgwjcJSHeE3vpKIGECTLGsnJwXTpZ1oblbFFhU30IUhm2kglDncZLyUeqcMb3OfjTLJhitXLcCYJsF2WkfBBjLCJrwBWKjbRM%2FkXCpEIrtQNoMrL6XC4LJntUCaDtvTHo0kShTnBHw%2Bv0He49yitEpDAJKT%2BkCXjBbFZ0OvrmC%2F7uOBYp4LG%2BJEMIXRGeA2UerlJdHkE2Rjuae85AcYe7oa6x1j3v9dzpQOnmGaPamJStfRHj2Lnj%2F2T5oY91fOJeNWZq9eBz%2B8eatH%2F99q8iM%2F4b9j0cpnWDOf7GQpbYdMlxvZ4cTBIM%2FrrWurs76Ebx8Zmr%2BsEI%2BQXcGheCJqbBO7fGhI%2F3YMX1wS1UZ3qr07873zvxAv3jKEdCgMKdvvYO7XVw%2B%2B8ZwhrU%2FT2wCCfzFmBcclahuoFX8LiilD1%2FkirqX1V1f4SBDC%2FtMPBBjqkARufK%2BPXHqeyW9GuGDIHiRiEYjdo0AjEts5sJg8eeYJBzfdfwk4hGFzqsHjSbm%2FIbw9in2Q0XcaXcoQieb1sHcxA%2Bb%2BUHCpmZhtBWWzyG03tUov29M1XBPAlcu%2B7wTMUBXdw1VVmDR8vArirGl7d2NgcjsMUnPJhGuhr2XAQ0pwPIhylUNhm%2FvmElIwKEFh4kXlXP1UZVNWPsMrTAcx2qmjYwTCy&X-Amz-Signature=ae9b22555919d1b69d7184ccd3175f4b931481f941b3d4e2767164c84cd60f31&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W5CWYJK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD4sRCvmD4lD%2Fktv0Ww7t2SMgBjPfAr0BPjqAglQY8vjAIhANLnYS8qfVOcaYUBFr6PO0aKUx%2FQbjCNjvR2fWLzQ83WKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZiudDQfp55m1eSxAq3AO%2BY%2B5BSdyaJN4swg6FXIQBRWgndhl7Qxthdha3WeSlg0KdIettqNLBXhoLuSw2UrfeF9Xeq6Uu3gz2YR4rUJPBe572liVczGzofuZRXk0rOYYOCeNv%2B4Hrh0ud8Ah36BB%2FmUcUtWhxHpR1VvEZSCq9yaYTXN%2BE8rYeFldHOoPfKqHCPXN0Zw96GSe5ERC1wNT5eMufjgwjcJSHeE3vpKIGECTLGsnJwXTpZ1oblbFFhU30IUhm2kglDncZLyUeqcMb3OfjTLJhitXLcCYJsF2WkfBBjLCJrwBWKjbRM%2FkXCpEIrtQNoMrL6XC4LJntUCaDtvTHo0kShTnBHw%2Bv0He49yitEpDAJKT%2BkCXjBbFZ0OvrmC%2F7uOBYp4LG%2BJEMIXRGeA2UerlJdHkE2Rjuae85AcYe7oa6x1j3v9dzpQOnmGaPamJStfRHj2Lnj%2F2T5oY91fOJeNWZq9eBz%2B8eatH%2F99q8iM%2F4b9j0cpnWDOf7GQpbYdMlxvZ4cTBIM%2FrrWurs76Ebx8Zmr%2BsEI%2BQXcGheCJqbBO7fGhI%2F3YMX1wS1UZ3qr07873zvxAv3jKEdCgMKdvvYO7XVw%2B%2B8ZwhrU%2FT2wCCfzFmBcclahuoFX8LiilD1%2FkirqX1V1f4SBDC%2FtMPBBjqkARufK%2BPXHqeyW9GuGDIHiRiEYjdo0AjEts5sJg8eeYJBzfdfwk4hGFzqsHjSbm%2FIbw9in2Q0XcaXcoQieb1sHcxA%2Bb%2BUHCpmZhtBWWzyG03tUov29M1XBPAlcu%2B7wTMUBXdw1VVmDR8vArirGl7d2NgcjsMUnPJhGuhr2XAQ0pwPIhylUNhm%2FvmElIwKEFh4kXlXP1UZVNWPsMrTAcx2qmjYwTCy&X-Amz-Signature=d2f87d825ea4c64092c067e59d9db199c0cac83e28be23d67a5f0e45e8a8692f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W5CWYJK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD4sRCvmD4lD%2Fktv0Ww7t2SMgBjPfAr0BPjqAglQY8vjAIhANLnYS8qfVOcaYUBFr6PO0aKUx%2FQbjCNjvR2fWLzQ83WKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZiudDQfp55m1eSxAq3AO%2BY%2B5BSdyaJN4swg6FXIQBRWgndhl7Qxthdha3WeSlg0KdIettqNLBXhoLuSw2UrfeF9Xeq6Uu3gz2YR4rUJPBe572liVczGzofuZRXk0rOYYOCeNv%2B4Hrh0ud8Ah36BB%2FmUcUtWhxHpR1VvEZSCq9yaYTXN%2BE8rYeFldHOoPfKqHCPXN0Zw96GSe5ERC1wNT5eMufjgwjcJSHeE3vpKIGECTLGsnJwXTpZ1oblbFFhU30IUhm2kglDncZLyUeqcMb3OfjTLJhitXLcCYJsF2WkfBBjLCJrwBWKjbRM%2FkXCpEIrtQNoMrL6XC4LJntUCaDtvTHo0kShTnBHw%2Bv0He49yitEpDAJKT%2BkCXjBbFZ0OvrmC%2F7uOBYp4LG%2BJEMIXRGeA2UerlJdHkE2Rjuae85AcYe7oa6x1j3v9dzpQOnmGaPamJStfRHj2Lnj%2F2T5oY91fOJeNWZq9eBz%2B8eatH%2F99q8iM%2F4b9j0cpnWDOf7GQpbYdMlxvZ4cTBIM%2FrrWurs76Ebx8Zmr%2BsEI%2BQXcGheCJqbBO7fGhI%2F3YMX1wS1UZ3qr07873zvxAv3jKEdCgMKdvvYO7XVw%2B%2B8ZwhrU%2FT2wCCfzFmBcclahuoFX8LiilD1%2FkirqX1V1f4SBDC%2FtMPBBjqkARufK%2BPXHqeyW9GuGDIHiRiEYjdo0AjEts5sJg8eeYJBzfdfwk4hGFzqsHjSbm%2FIbw9in2Q0XcaXcoQieb1sHcxA%2Bb%2BUHCpmZhtBWWzyG03tUov29M1XBPAlcu%2B7wTMUBXdw1VVmDR8vArirGl7d2NgcjsMUnPJhGuhr2XAQ0pwPIhylUNhm%2FvmElIwKEFh4kXlXP1UZVNWPsMrTAcx2qmjYwTCy&X-Amz-Signature=b422e0b3e2e463c7d48d54f3c53a1cf8eddb1cdcea95c2015e839fa7962501c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W5CWYJK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD4sRCvmD4lD%2Fktv0Ww7t2SMgBjPfAr0BPjqAglQY8vjAIhANLnYS8qfVOcaYUBFr6PO0aKUx%2FQbjCNjvR2fWLzQ83WKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZiudDQfp55m1eSxAq3AO%2BY%2B5BSdyaJN4swg6FXIQBRWgndhl7Qxthdha3WeSlg0KdIettqNLBXhoLuSw2UrfeF9Xeq6Uu3gz2YR4rUJPBe572liVczGzofuZRXk0rOYYOCeNv%2B4Hrh0ud8Ah36BB%2FmUcUtWhxHpR1VvEZSCq9yaYTXN%2BE8rYeFldHOoPfKqHCPXN0Zw96GSe5ERC1wNT5eMufjgwjcJSHeE3vpKIGECTLGsnJwXTpZ1oblbFFhU30IUhm2kglDncZLyUeqcMb3OfjTLJhitXLcCYJsF2WkfBBjLCJrwBWKjbRM%2FkXCpEIrtQNoMrL6XC4LJntUCaDtvTHo0kShTnBHw%2Bv0He49yitEpDAJKT%2BkCXjBbFZ0OvrmC%2F7uOBYp4LG%2BJEMIXRGeA2UerlJdHkE2Rjuae85AcYe7oa6x1j3v9dzpQOnmGaPamJStfRHj2Lnj%2F2T5oY91fOJeNWZq9eBz%2B8eatH%2F99q8iM%2F4b9j0cpnWDOf7GQpbYdMlxvZ4cTBIM%2FrrWurs76Ebx8Zmr%2BsEI%2BQXcGheCJqbBO7fGhI%2F3YMX1wS1UZ3qr07873zvxAv3jKEdCgMKdvvYO7XVw%2B%2B8ZwhrU%2FT2wCCfzFmBcclahuoFX8LiilD1%2FkirqX1V1f4SBDC%2FtMPBBjqkARufK%2BPXHqeyW9GuGDIHiRiEYjdo0AjEts5sJg8eeYJBzfdfwk4hGFzqsHjSbm%2FIbw9in2Q0XcaXcoQieb1sHcxA%2Bb%2BUHCpmZhtBWWzyG03tUov29M1XBPAlcu%2B7wTMUBXdw1VVmDR8vArirGl7d2NgcjsMUnPJhGuhr2XAQ0pwPIhylUNhm%2FvmElIwKEFh4kXlXP1UZVNWPsMrTAcx2qmjYwTCy&X-Amz-Signature=cf4ac40eb5df39f27b9f74487b42c713b6fa70317fbcf009fb774ed0e81e676c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
