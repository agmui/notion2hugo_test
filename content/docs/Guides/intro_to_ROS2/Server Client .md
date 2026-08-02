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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UXKKUKS%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICx%2B%2BQzNrCISUu3DlOaNHCTDZYlQo1byWl2mjmKbs4NAAiEA%2FF9uB%2FKksYxFuSloOylPN6u7AqN8dMW0oCkr2t64MG8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYcnMLTvuDbuwMbTCrcA0%2F%2FQU3VaYbEGETUgKXFENrljNm6Lsac15%2BDLQdQr4CI%2FgLWICfy7MCAunvjaClDjsLDUPVbnkxgR6%2FdvjVzFBIbOU7h8TSUkZJ%2FNUGbGVUU8OHRiRELf1MFvfEOwRHL9%2B%2Fp8V%2BrnhPRhMltJ5jsT%2F5klFpkeyS66xa%2BF%2B7YzrP0HHEWPhiGMxPaxqXOmCFfAyQyQGJRbZFcXXKj8xbp2g%2FY91B%2FjG%2BjLaPy2cSJkb7x1LUmjvBKviJVXJEBiw6UQ1gyJEOmqWdtrx7UYLU3jecYR3udvtPKRH%2FACq%2B40mUM9aC8OHF6CDjK9b%2BTFRiWZURqAveHxrgpNumeRwPjG4ysqlOnBMlnpJaNg1k0V%2FGmSrmkoBocF6I%2B6WuG5XaPf2Gibg7H1k%2FdvBTa8rSfh3ryEoqKXZvZDMdaLZsEZrwiQOMCDMKwkwTtSU3tg0KT5N07%2F74AQbUGZzuQtWNr6iRsjNHc1%2Bb77umWWk%2Bn0aJSCJpZ0a%2Fqiga4Bng2zEQtbLPjrvo72nfdQ1LjTBOAzus%2BUVe6tgd5R4qbwfawNAu5bUlTAVcyT1XOwaILCgBpuDG60UfRaAPa%2B3oHuPKEafUuF8aNNrjJq7yVwKUYKDYUQZzlpYTEdrKXCdk1MOvCutMGOqUBXyELpuBuMIhqang0SbgHiv6sGTt9w3Yw3otuItUe%2FQqE4XWcDmEsr6%2BhmxdHqMwqmZXt5kPu250EKYD7r4x5UyrF5q9oMy6DOotdOXOnsqo5fL1xDWsBryiczi8Md561%2FTwwZgdNC%2BVxkNNUDxPol6HXaNeMUSG6TR9025u5%2FgR03g%2FGbcCumgqictUGAGCs3aE6kaQxNVcHPqjiU7L6gFPGnxXZ&X-Amz-Signature=ca48274712766e7c083036f01fb70110732419dc7e69222412783cd83420663b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UXKKUKS%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICx%2B%2BQzNrCISUu3DlOaNHCTDZYlQo1byWl2mjmKbs4NAAiEA%2FF9uB%2FKksYxFuSloOylPN6u7AqN8dMW0oCkr2t64MG8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYcnMLTvuDbuwMbTCrcA0%2F%2FQU3VaYbEGETUgKXFENrljNm6Lsac15%2BDLQdQr4CI%2FgLWICfy7MCAunvjaClDjsLDUPVbnkxgR6%2FdvjVzFBIbOU7h8TSUkZJ%2FNUGbGVUU8OHRiRELf1MFvfEOwRHL9%2B%2Fp8V%2BrnhPRhMltJ5jsT%2F5klFpkeyS66xa%2BF%2B7YzrP0HHEWPhiGMxPaxqXOmCFfAyQyQGJRbZFcXXKj8xbp2g%2FY91B%2FjG%2BjLaPy2cSJkb7x1LUmjvBKviJVXJEBiw6UQ1gyJEOmqWdtrx7UYLU3jecYR3udvtPKRH%2FACq%2B40mUM9aC8OHF6CDjK9b%2BTFRiWZURqAveHxrgpNumeRwPjG4ysqlOnBMlnpJaNg1k0V%2FGmSrmkoBocF6I%2B6WuG5XaPf2Gibg7H1k%2FdvBTa8rSfh3ryEoqKXZvZDMdaLZsEZrwiQOMCDMKwkwTtSU3tg0KT5N07%2F74AQbUGZzuQtWNr6iRsjNHc1%2Bb77umWWk%2Bn0aJSCJpZ0a%2Fqiga4Bng2zEQtbLPjrvo72nfdQ1LjTBOAzus%2BUVe6tgd5R4qbwfawNAu5bUlTAVcyT1XOwaILCgBpuDG60UfRaAPa%2B3oHuPKEafUuF8aNNrjJq7yVwKUYKDYUQZzlpYTEdrKXCdk1MOvCutMGOqUBXyELpuBuMIhqang0SbgHiv6sGTt9w3Yw3otuItUe%2FQqE4XWcDmEsr6%2BhmxdHqMwqmZXt5kPu250EKYD7r4x5UyrF5q9oMy6DOotdOXOnsqo5fL1xDWsBryiczi8Md561%2FTwwZgdNC%2BVxkNNUDxPol6HXaNeMUSG6TR9025u5%2FgR03g%2FGbcCumgqictUGAGCs3aE6kaQxNVcHPqjiU7L6gFPGnxXZ&X-Amz-Signature=c4df916e52eb460ba88cb41add9b28f77e9a8d2bc9c32b5530dda1ccafc9141e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UXKKUKS%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICx%2B%2BQzNrCISUu3DlOaNHCTDZYlQo1byWl2mjmKbs4NAAiEA%2FF9uB%2FKksYxFuSloOylPN6u7AqN8dMW0oCkr2t64MG8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYcnMLTvuDbuwMbTCrcA0%2F%2FQU3VaYbEGETUgKXFENrljNm6Lsac15%2BDLQdQr4CI%2FgLWICfy7MCAunvjaClDjsLDUPVbnkxgR6%2FdvjVzFBIbOU7h8TSUkZJ%2FNUGbGVUU8OHRiRELf1MFvfEOwRHL9%2B%2Fp8V%2BrnhPRhMltJ5jsT%2F5klFpkeyS66xa%2BF%2B7YzrP0HHEWPhiGMxPaxqXOmCFfAyQyQGJRbZFcXXKj8xbp2g%2FY91B%2FjG%2BjLaPy2cSJkb7x1LUmjvBKviJVXJEBiw6UQ1gyJEOmqWdtrx7UYLU3jecYR3udvtPKRH%2FACq%2B40mUM9aC8OHF6CDjK9b%2BTFRiWZURqAveHxrgpNumeRwPjG4ysqlOnBMlnpJaNg1k0V%2FGmSrmkoBocF6I%2B6WuG5XaPf2Gibg7H1k%2FdvBTa8rSfh3ryEoqKXZvZDMdaLZsEZrwiQOMCDMKwkwTtSU3tg0KT5N07%2F74AQbUGZzuQtWNr6iRsjNHc1%2Bb77umWWk%2Bn0aJSCJpZ0a%2Fqiga4Bng2zEQtbLPjrvo72nfdQ1LjTBOAzus%2BUVe6tgd5R4qbwfawNAu5bUlTAVcyT1XOwaILCgBpuDG60UfRaAPa%2B3oHuPKEafUuF8aNNrjJq7yVwKUYKDYUQZzlpYTEdrKXCdk1MOvCutMGOqUBXyELpuBuMIhqang0SbgHiv6sGTt9w3Yw3otuItUe%2FQqE4XWcDmEsr6%2BhmxdHqMwqmZXt5kPu250EKYD7r4x5UyrF5q9oMy6DOotdOXOnsqo5fL1xDWsBryiczi8Md561%2FTwwZgdNC%2BVxkNNUDxPol6HXaNeMUSG6TR9025u5%2FgR03g%2FGbcCumgqictUGAGCs3aE6kaQxNVcHPqjiU7L6gFPGnxXZ&X-Amz-Signature=dbc4698403f80f03dc0ea60df262d5ad840be203cdeb62626c9c6786cab0754b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UXKKUKS%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICx%2B%2BQzNrCISUu3DlOaNHCTDZYlQo1byWl2mjmKbs4NAAiEA%2FF9uB%2FKksYxFuSloOylPN6u7AqN8dMW0oCkr2t64MG8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYcnMLTvuDbuwMbTCrcA0%2F%2FQU3VaYbEGETUgKXFENrljNm6Lsac15%2BDLQdQr4CI%2FgLWICfy7MCAunvjaClDjsLDUPVbnkxgR6%2FdvjVzFBIbOU7h8TSUkZJ%2FNUGbGVUU8OHRiRELf1MFvfEOwRHL9%2B%2Fp8V%2BrnhPRhMltJ5jsT%2F5klFpkeyS66xa%2BF%2B7YzrP0HHEWPhiGMxPaxqXOmCFfAyQyQGJRbZFcXXKj8xbp2g%2FY91B%2FjG%2BjLaPy2cSJkb7x1LUmjvBKviJVXJEBiw6UQ1gyJEOmqWdtrx7UYLU3jecYR3udvtPKRH%2FACq%2B40mUM9aC8OHF6CDjK9b%2BTFRiWZURqAveHxrgpNumeRwPjG4ysqlOnBMlnpJaNg1k0V%2FGmSrmkoBocF6I%2B6WuG5XaPf2Gibg7H1k%2FdvBTa8rSfh3ryEoqKXZvZDMdaLZsEZrwiQOMCDMKwkwTtSU3tg0KT5N07%2F74AQbUGZzuQtWNr6iRsjNHc1%2Bb77umWWk%2Bn0aJSCJpZ0a%2Fqiga4Bng2zEQtbLPjrvo72nfdQ1LjTBOAzus%2BUVe6tgd5R4qbwfawNAu5bUlTAVcyT1XOwaILCgBpuDG60UfRaAPa%2B3oHuPKEafUuF8aNNrjJq7yVwKUYKDYUQZzlpYTEdrKXCdk1MOvCutMGOqUBXyELpuBuMIhqang0SbgHiv6sGTt9w3Yw3otuItUe%2FQqE4XWcDmEsr6%2BhmxdHqMwqmZXt5kPu250EKYD7r4x5UyrF5q9oMy6DOotdOXOnsqo5fL1xDWsBryiczi8Md561%2FTwwZgdNC%2BVxkNNUDxPol6HXaNeMUSG6TR9025u5%2FgR03g%2FGbcCumgqictUGAGCs3aE6kaQxNVcHPqjiU7L6gFPGnxXZ&X-Amz-Signature=be7c0b356f9298f0c30f0b0dab0af5670b447deabe79215c25eaa9a54d689568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UXKKUKS%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICx%2B%2BQzNrCISUu3DlOaNHCTDZYlQo1byWl2mjmKbs4NAAiEA%2FF9uB%2FKksYxFuSloOylPN6u7AqN8dMW0oCkr2t64MG8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYcnMLTvuDbuwMbTCrcA0%2F%2FQU3VaYbEGETUgKXFENrljNm6Lsac15%2BDLQdQr4CI%2FgLWICfy7MCAunvjaClDjsLDUPVbnkxgR6%2FdvjVzFBIbOU7h8TSUkZJ%2FNUGbGVUU8OHRiRELf1MFvfEOwRHL9%2B%2Fp8V%2BrnhPRhMltJ5jsT%2F5klFpkeyS66xa%2BF%2B7YzrP0HHEWPhiGMxPaxqXOmCFfAyQyQGJRbZFcXXKj8xbp2g%2FY91B%2FjG%2BjLaPy2cSJkb7x1LUmjvBKviJVXJEBiw6UQ1gyJEOmqWdtrx7UYLU3jecYR3udvtPKRH%2FACq%2B40mUM9aC8OHF6CDjK9b%2BTFRiWZURqAveHxrgpNumeRwPjG4ysqlOnBMlnpJaNg1k0V%2FGmSrmkoBocF6I%2B6WuG5XaPf2Gibg7H1k%2FdvBTa8rSfh3ryEoqKXZvZDMdaLZsEZrwiQOMCDMKwkwTtSU3tg0KT5N07%2F74AQbUGZzuQtWNr6iRsjNHc1%2Bb77umWWk%2Bn0aJSCJpZ0a%2Fqiga4Bng2zEQtbLPjrvo72nfdQ1LjTBOAzus%2BUVe6tgd5R4qbwfawNAu5bUlTAVcyT1XOwaILCgBpuDG60UfRaAPa%2B3oHuPKEafUuF8aNNrjJq7yVwKUYKDYUQZzlpYTEdrKXCdk1MOvCutMGOqUBXyELpuBuMIhqang0SbgHiv6sGTt9w3Yw3otuItUe%2FQqE4XWcDmEsr6%2BhmxdHqMwqmZXt5kPu250EKYD7r4x5UyrF5q9oMy6DOotdOXOnsqo5fL1xDWsBryiczi8Md561%2FTwwZgdNC%2BVxkNNUDxPol6HXaNeMUSG6TR9025u5%2FgR03g%2FGbcCumgqictUGAGCs3aE6kaQxNVcHPqjiU7L6gFPGnxXZ&X-Amz-Signature=6b00c2a6a6bd49e9b2a1167b882676523e2b32407fdc9db1b000609d1553cb3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
