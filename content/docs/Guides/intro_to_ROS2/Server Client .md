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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663N4JXGB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDCHb11RwKoBgDJcnfLj6%2F9k5Z1J5P%2Bmq6NAqgIv19ipQIhAKcSSsFIdvDyUD%2B0iWc7BdSGcnCiLQGnTHjNaWelXkpxKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyuvx9Qs76Hv58Oxgwq3AP39qUZGc%2FV8gnMpSNOfLuGova0eJ11XthuB%2Fp5QpxJlXZ1xxB5GWagO3LLrdQ659H0BSqJXiVK15DxoUkTGt29a7jFgvpHRmlTNmWzM%2F8T4BM3cfkFi9fjsmQV%2FkrICsp0r6x5%2FemnjIw2zlQ8jwUrZa994fh1cr%2FnP5%2Bd76xksTAfeIZtaiuXZ3XYtUlHilp2tyh4pAUxYqcWyvfYecpmLL0%2Bd9CdAwS86HFszLD0Biw4%2Bi7xp40cN1b%2FM0JHRAAlMwFY1AMkejdruYT7bWVNjd8bN4KzsDj0uJtfTJGU%2Ftb2pDsI50RZPj0nFAy4pKyFIpC3QmSI7g96gYQRubi7BY2pd2eMIbuBG7MHTfUadj2z56ZZZ4xK5dmI8jgFwyd6C6CjN5MshjS9HLsXZZH9Q52OcgrB5bmPz5Wdji1gPnGcOEiGvUBmghJF9J3rO0pwmhFnR4uGZnzoiUjqfyfdh1glefXZ%2Bqu%2BzeFs4I3fmjFd1hCU%2ForvHJ87knrgCuqRgOKsolYlS5%2FjGtSv7Rv%2Bu8jv0b6uMMIzGDyHht6xGn%2FzCzb89ILa71evbSDRPDzAHJJtKqaq5wZHfJy4nkrCL%2F4BiPZosCMMu2GkWM01ZrGDYfEVyldNGzalWTDyxLzBBjqkAdyRMAWcvaNRb08DWlcbDLP1JD%2FrrsK3z%2FpXNJZ4EtdtlyByhtLRgeeh9%2B3bGHdPi69vuPjp8Sv3IIBRrCpDwy4FzQO2%2Bn%2FaBpz7JSWGohy3ioT%2Fk8jlcAAVpNmhsZeOc5%2F1k2mRUN%2Brn%2FMUi1tV9oi8%2FFFHXVNGb0qXn4CHtLTsqkrIoh5qS9OLhUB8DOKHEu3tloowUslW0FAABcyItMIHMLzG&X-Amz-Signature=a2b6af932b61df29e271bec4f1343c2231cbb19a2b06c2f92152b3dfffbd2038&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663N4JXGB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDCHb11RwKoBgDJcnfLj6%2F9k5Z1J5P%2Bmq6NAqgIv19ipQIhAKcSSsFIdvDyUD%2B0iWc7BdSGcnCiLQGnTHjNaWelXkpxKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyuvx9Qs76Hv58Oxgwq3AP39qUZGc%2FV8gnMpSNOfLuGova0eJ11XthuB%2Fp5QpxJlXZ1xxB5GWagO3LLrdQ659H0BSqJXiVK15DxoUkTGt29a7jFgvpHRmlTNmWzM%2F8T4BM3cfkFi9fjsmQV%2FkrICsp0r6x5%2FemnjIw2zlQ8jwUrZa994fh1cr%2FnP5%2Bd76xksTAfeIZtaiuXZ3XYtUlHilp2tyh4pAUxYqcWyvfYecpmLL0%2Bd9CdAwS86HFszLD0Biw4%2Bi7xp40cN1b%2FM0JHRAAlMwFY1AMkejdruYT7bWVNjd8bN4KzsDj0uJtfTJGU%2Ftb2pDsI50RZPj0nFAy4pKyFIpC3QmSI7g96gYQRubi7BY2pd2eMIbuBG7MHTfUadj2z56ZZZ4xK5dmI8jgFwyd6C6CjN5MshjS9HLsXZZH9Q52OcgrB5bmPz5Wdji1gPnGcOEiGvUBmghJF9J3rO0pwmhFnR4uGZnzoiUjqfyfdh1glefXZ%2Bqu%2BzeFs4I3fmjFd1hCU%2ForvHJ87knrgCuqRgOKsolYlS5%2FjGtSv7Rv%2Bu8jv0b6uMMIzGDyHht6xGn%2FzCzb89ILa71evbSDRPDzAHJJtKqaq5wZHfJy4nkrCL%2F4BiPZosCMMu2GkWM01ZrGDYfEVyldNGzalWTDyxLzBBjqkAdyRMAWcvaNRb08DWlcbDLP1JD%2FrrsK3z%2FpXNJZ4EtdtlyByhtLRgeeh9%2B3bGHdPi69vuPjp8Sv3IIBRrCpDwy4FzQO2%2Bn%2FaBpz7JSWGohy3ioT%2Fk8jlcAAVpNmhsZeOc5%2F1k2mRUN%2Brn%2FMUi1tV9oi8%2FFFHXVNGb0qXn4CHtLTsqkrIoh5qS9OLhUB8DOKHEu3tloowUslW0FAABcyItMIHMLzG&X-Amz-Signature=463f4cb2f6e15d5982ed133242826f70d300184b0ed874cfdf581af0699531e6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663N4JXGB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDCHb11RwKoBgDJcnfLj6%2F9k5Z1J5P%2Bmq6NAqgIv19ipQIhAKcSSsFIdvDyUD%2B0iWc7BdSGcnCiLQGnTHjNaWelXkpxKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyuvx9Qs76Hv58Oxgwq3AP39qUZGc%2FV8gnMpSNOfLuGova0eJ11XthuB%2Fp5QpxJlXZ1xxB5GWagO3LLrdQ659H0BSqJXiVK15DxoUkTGt29a7jFgvpHRmlTNmWzM%2F8T4BM3cfkFi9fjsmQV%2FkrICsp0r6x5%2FemnjIw2zlQ8jwUrZa994fh1cr%2FnP5%2Bd76xksTAfeIZtaiuXZ3XYtUlHilp2tyh4pAUxYqcWyvfYecpmLL0%2Bd9CdAwS86HFszLD0Biw4%2Bi7xp40cN1b%2FM0JHRAAlMwFY1AMkejdruYT7bWVNjd8bN4KzsDj0uJtfTJGU%2Ftb2pDsI50RZPj0nFAy4pKyFIpC3QmSI7g96gYQRubi7BY2pd2eMIbuBG7MHTfUadj2z56ZZZ4xK5dmI8jgFwyd6C6CjN5MshjS9HLsXZZH9Q52OcgrB5bmPz5Wdji1gPnGcOEiGvUBmghJF9J3rO0pwmhFnR4uGZnzoiUjqfyfdh1glefXZ%2Bqu%2BzeFs4I3fmjFd1hCU%2ForvHJ87knrgCuqRgOKsolYlS5%2FjGtSv7Rv%2Bu8jv0b6uMMIzGDyHht6xGn%2FzCzb89ILa71evbSDRPDzAHJJtKqaq5wZHfJy4nkrCL%2F4BiPZosCMMu2GkWM01ZrGDYfEVyldNGzalWTDyxLzBBjqkAdyRMAWcvaNRb08DWlcbDLP1JD%2FrrsK3z%2FpXNJZ4EtdtlyByhtLRgeeh9%2B3bGHdPi69vuPjp8Sv3IIBRrCpDwy4FzQO2%2Bn%2FaBpz7JSWGohy3ioT%2Fk8jlcAAVpNmhsZeOc5%2F1k2mRUN%2Brn%2FMUi1tV9oi8%2FFFHXVNGb0qXn4CHtLTsqkrIoh5qS9OLhUB8DOKHEu3tloowUslW0FAABcyItMIHMLzG&X-Amz-Signature=98d12430060a250335742136b0ed280c2ec1160cbfb12989c55cfe1e4ace1e98&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663N4JXGB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDCHb11RwKoBgDJcnfLj6%2F9k5Z1J5P%2Bmq6NAqgIv19ipQIhAKcSSsFIdvDyUD%2B0iWc7BdSGcnCiLQGnTHjNaWelXkpxKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyuvx9Qs76Hv58Oxgwq3AP39qUZGc%2FV8gnMpSNOfLuGova0eJ11XthuB%2Fp5QpxJlXZ1xxB5GWagO3LLrdQ659H0BSqJXiVK15DxoUkTGt29a7jFgvpHRmlTNmWzM%2F8T4BM3cfkFi9fjsmQV%2FkrICsp0r6x5%2FemnjIw2zlQ8jwUrZa994fh1cr%2FnP5%2Bd76xksTAfeIZtaiuXZ3XYtUlHilp2tyh4pAUxYqcWyvfYecpmLL0%2Bd9CdAwS86HFszLD0Biw4%2Bi7xp40cN1b%2FM0JHRAAlMwFY1AMkejdruYT7bWVNjd8bN4KzsDj0uJtfTJGU%2Ftb2pDsI50RZPj0nFAy4pKyFIpC3QmSI7g96gYQRubi7BY2pd2eMIbuBG7MHTfUadj2z56ZZZ4xK5dmI8jgFwyd6C6CjN5MshjS9HLsXZZH9Q52OcgrB5bmPz5Wdji1gPnGcOEiGvUBmghJF9J3rO0pwmhFnR4uGZnzoiUjqfyfdh1glefXZ%2Bqu%2BzeFs4I3fmjFd1hCU%2ForvHJ87knrgCuqRgOKsolYlS5%2FjGtSv7Rv%2Bu8jv0b6uMMIzGDyHht6xGn%2FzCzb89ILa71evbSDRPDzAHJJtKqaq5wZHfJy4nkrCL%2F4BiPZosCMMu2GkWM01ZrGDYfEVyldNGzalWTDyxLzBBjqkAdyRMAWcvaNRb08DWlcbDLP1JD%2FrrsK3z%2FpXNJZ4EtdtlyByhtLRgeeh9%2B3bGHdPi69vuPjp8Sv3IIBRrCpDwy4FzQO2%2Bn%2FaBpz7JSWGohy3ioT%2Fk8jlcAAVpNmhsZeOc5%2F1k2mRUN%2Brn%2FMUi1tV9oi8%2FFFHXVNGb0qXn4CHtLTsqkrIoh5qS9OLhUB8DOKHEu3tloowUslW0FAABcyItMIHMLzG&X-Amz-Signature=b8c0fd23d438e8ad9343583e186062777c74c03985025900dd09f5632b3a59b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663N4JXGB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDCHb11RwKoBgDJcnfLj6%2F9k5Z1J5P%2Bmq6NAqgIv19ipQIhAKcSSsFIdvDyUD%2B0iWc7BdSGcnCiLQGnTHjNaWelXkpxKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyuvx9Qs76Hv58Oxgwq3AP39qUZGc%2FV8gnMpSNOfLuGova0eJ11XthuB%2Fp5QpxJlXZ1xxB5GWagO3LLrdQ659H0BSqJXiVK15DxoUkTGt29a7jFgvpHRmlTNmWzM%2F8T4BM3cfkFi9fjsmQV%2FkrICsp0r6x5%2FemnjIw2zlQ8jwUrZa994fh1cr%2FnP5%2Bd76xksTAfeIZtaiuXZ3XYtUlHilp2tyh4pAUxYqcWyvfYecpmLL0%2Bd9CdAwS86HFszLD0Biw4%2Bi7xp40cN1b%2FM0JHRAAlMwFY1AMkejdruYT7bWVNjd8bN4KzsDj0uJtfTJGU%2Ftb2pDsI50RZPj0nFAy4pKyFIpC3QmSI7g96gYQRubi7BY2pd2eMIbuBG7MHTfUadj2z56ZZZ4xK5dmI8jgFwyd6C6CjN5MshjS9HLsXZZH9Q52OcgrB5bmPz5Wdji1gPnGcOEiGvUBmghJF9J3rO0pwmhFnR4uGZnzoiUjqfyfdh1glefXZ%2Bqu%2BzeFs4I3fmjFd1hCU%2ForvHJ87knrgCuqRgOKsolYlS5%2FjGtSv7Rv%2Bu8jv0b6uMMIzGDyHht6xGn%2FzCzb89ILa71evbSDRPDzAHJJtKqaq5wZHfJy4nkrCL%2F4BiPZosCMMu2GkWM01ZrGDYfEVyldNGzalWTDyxLzBBjqkAdyRMAWcvaNRb08DWlcbDLP1JD%2FrrsK3z%2FpXNJZ4EtdtlyByhtLRgeeh9%2B3bGHdPi69vuPjp8Sv3IIBRrCpDwy4FzQO2%2Bn%2FaBpz7JSWGohy3ioT%2Fk8jlcAAVpNmhsZeOc5%2F1k2mRUN%2Brn%2FMUi1tV9oi8%2FFFHXVNGb0qXn4CHtLTsqkrIoh5qS9OLhUB8DOKHEu3tloowUslW0FAABcyItMIHMLzG&X-Amz-Signature=cda2f745501ea56855724a3eaeac4224675ea80ba8341f147a1dd2f65fc76aad&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
