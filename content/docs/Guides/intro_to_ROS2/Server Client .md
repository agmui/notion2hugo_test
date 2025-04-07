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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRJYENOJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDowgafFNQrdOj8ah%2FyB5KtXrnePGmv0rlNB4Gq6riwlQIhAOK1cCv9kZzHt0XNrC0CMqNupTozI9jlJIVGNOAWCD1GKv8DCFwQABoMNjM3NDIzMTgzODA1Igzp3UtCC3BBrDwhgksq3APgmiOH67%2Bl9gWvUQv8eP7NAp5U7WWrQhbH8GX9soClxdSG4dYBUyZWyNyJsyW69kqXCo%2FWQixJhWMG3EiiZ78auGJ9d2ToedQNGbbKGKTQoR6mwkUrwqUNORhVjoPnyQ3xUNzw%2B5GK%2Bv6Z8NQSNMqgClzoq1SHhyglDyl4jd03Y6kxkoNVd50yd30DdLgQBSybAfq8RU6g9Pj%2B%2BFpxX0%2B%2BHx7KxMUIuKAK5KYBWXwru7fAvFQwo3j8Y8J8f4wAG%2FIjtvoi0ozqi9NS6UWXFAECS8zyzrWve6fCrX8kdzc3hMp6AxYr9AN%2Fa6LENYYKGOb3t5oPGwFmT%2BHR8wala56T6YD06A4ND0E00tbYIkog1JGDvyDlBhJh58124RScygHhpxWdahAnvYxvQ1FywzLSLoyhzS4%2FiF1xb7L4wHf2rkqrcCCqA4zx96LdQOsbGTsOKAg7h1QXunXB7wn5ypmL2JiijwfahosmiRqai6FPp5DrqiGTYwxPpTPYxohJsnouB3hywH7rowMJBWkB9eGxprlm%2BKvwX7aPxiu8eNz6tCab0jiQMjC1QPPLxYQYXNJSeeOix%2FtXDAREaCCxCGCu2ZzgjDCHe5SG21BtpVokAR6L5PscmJhVRQXn5zCF1M6%2FBjqkAWUyY6J2aNtrpXLDulReWr3qutfBffuBr8urkOfCb%2FhAtE2umKHmX1CfkXrqALcU3Fby0a1gDS%2F%2Fg1t1zJuhJZqzTZOke%2Fb4M3RnneE%2FpgZDbkqhdrECvJTpoFMnq5fTE%2FNT9q6MYSvFea1kPLBme6NqE17JzCjjxpoA1VSKo1QqVxuwBpHurTVBtfjczXhiPe5Yuwsw5%2FQgIpkuzHiLFv2aKxve&X-Amz-Signature=cc65f99e4665f0ed778ce35e9b84ff30e0806a0b186621e393a5345da636b8b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRJYENOJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDowgafFNQrdOj8ah%2FyB5KtXrnePGmv0rlNB4Gq6riwlQIhAOK1cCv9kZzHt0XNrC0CMqNupTozI9jlJIVGNOAWCD1GKv8DCFwQABoMNjM3NDIzMTgzODA1Igzp3UtCC3BBrDwhgksq3APgmiOH67%2Bl9gWvUQv8eP7NAp5U7WWrQhbH8GX9soClxdSG4dYBUyZWyNyJsyW69kqXCo%2FWQixJhWMG3EiiZ78auGJ9d2ToedQNGbbKGKTQoR6mwkUrwqUNORhVjoPnyQ3xUNzw%2B5GK%2Bv6Z8NQSNMqgClzoq1SHhyglDyl4jd03Y6kxkoNVd50yd30DdLgQBSybAfq8RU6g9Pj%2B%2BFpxX0%2B%2BHx7KxMUIuKAK5KYBWXwru7fAvFQwo3j8Y8J8f4wAG%2FIjtvoi0ozqi9NS6UWXFAECS8zyzrWve6fCrX8kdzc3hMp6AxYr9AN%2Fa6LENYYKGOb3t5oPGwFmT%2BHR8wala56T6YD06A4ND0E00tbYIkog1JGDvyDlBhJh58124RScygHhpxWdahAnvYxvQ1FywzLSLoyhzS4%2FiF1xb7L4wHf2rkqrcCCqA4zx96LdQOsbGTsOKAg7h1QXunXB7wn5ypmL2JiijwfahosmiRqai6FPp5DrqiGTYwxPpTPYxohJsnouB3hywH7rowMJBWkB9eGxprlm%2BKvwX7aPxiu8eNz6tCab0jiQMjC1QPPLxYQYXNJSeeOix%2FtXDAREaCCxCGCu2ZzgjDCHe5SG21BtpVokAR6L5PscmJhVRQXn5zCF1M6%2FBjqkAWUyY6J2aNtrpXLDulReWr3qutfBffuBr8urkOfCb%2FhAtE2umKHmX1CfkXrqALcU3Fby0a1gDS%2F%2Fg1t1zJuhJZqzTZOke%2Fb4M3RnneE%2FpgZDbkqhdrECvJTpoFMnq5fTE%2FNT9q6MYSvFea1kPLBme6NqE17JzCjjxpoA1VSKo1QqVxuwBpHurTVBtfjczXhiPe5Yuwsw5%2FQgIpkuzHiLFv2aKxve&X-Amz-Signature=83cbdfc3bddc62c0f0045ec13fc7efa6d2c7d849873e5d1703ba4b98cf71c445&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRJYENOJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDowgafFNQrdOj8ah%2FyB5KtXrnePGmv0rlNB4Gq6riwlQIhAOK1cCv9kZzHt0XNrC0CMqNupTozI9jlJIVGNOAWCD1GKv8DCFwQABoMNjM3NDIzMTgzODA1Igzp3UtCC3BBrDwhgksq3APgmiOH67%2Bl9gWvUQv8eP7NAp5U7WWrQhbH8GX9soClxdSG4dYBUyZWyNyJsyW69kqXCo%2FWQixJhWMG3EiiZ78auGJ9d2ToedQNGbbKGKTQoR6mwkUrwqUNORhVjoPnyQ3xUNzw%2B5GK%2Bv6Z8NQSNMqgClzoq1SHhyglDyl4jd03Y6kxkoNVd50yd30DdLgQBSybAfq8RU6g9Pj%2B%2BFpxX0%2B%2BHx7KxMUIuKAK5KYBWXwru7fAvFQwo3j8Y8J8f4wAG%2FIjtvoi0ozqi9NS6UWXFAECS8zyzrWve6fCrX8kdzc3hMp6AxYr9AN%2Fa6LENYYKGOb3t5oPGwFmT%2BHR8wala56T6YD06A4ND0E00tbYIkog1JGDvyDlBhJh58124RScygHhpxWdahAnvYxvQ1FywzLSLoyhzS4%2FiF1xb7L4wHf2rkqrcCCqA4zx96LdQOsbGTsOKAg7h1QXunXB7wn5ypmL2JiijwfahosmiRqai6FPp5DrqiGTYwxPpTPYxohJsnouB3hywH7rowMJBWkB9eGxprlm%2BKvwX7aPxiu8eNz6tCab0jiQMjC1QPPLxYQYXNJSeeOix%2FtXDAREaCCxCGCu2ZzgjDCHe5SG21BtpVokAR6L5PscmJhVRQXn5zCF1M6%2FBjqkAWUyY6J2aNtrpXLDulReWr3qutfBffuBr8urkOfCb%2FhAtE2umKHmX1CfkXrqALcU3Fby0a1gDS%2F%2Fg1t1zJuhJZqzTZOke%2Fb4M3RnneE%2FpgZDbkqhdrECvJTpoFMnq5fTE%2FNT9q6MYSvFea1kPLBme6NqE17JzCjjxpoA1VSKo1QqVxuwBpHurTVBtfjczXhiPe5Yuwsw5%2FQgIpkuzHiLFv2aKxve&X-Amz-Signature=727aa12803381d7c6bc11b19d261144a98343a8ede5f8cc1cc4b980158574d46&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRJYENOJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDowgafFNQrdOj8ah%2FyB5KtXrnePGmv0rlNB4Gq6riwlQIhAOK1cCv9kZzHt0XNrC0CMqNupTozI9jlJIVGNOAWCD1GKv8DCFwQABoMNjM3NDIzMTgzODA1Igzp3UtCC3BBrDwhgksq3APgmiOH67%2Bl9gWvUQv8eP7NAp5U7WWrQhbH8GX9soClxdSG4dYBUyZWyNyJsyW69kqXCo%2FWQixJhWMG3EiiZ78auGJ9d2ToedQNGbbKGKTQoR6mwkUrwqUNORhVjoPnyQ3xUNzw%2B5GK%2Bv6Z8NQSNMqgClzoq1SHhyglDyl4jd03Y6kxkoNVd50yd30DdLgQBSybAfq8RU6g9Pj%2B%2BFpxX0%2B%2BHx7KxMUIuKAK5KYBWXwru7fAvFQwo3j8Y8J8f4wAG%2FIjtvoi0ozqi9NS6UWXFAECS8zyzrWve6fCrX8kdzc3hMp6AxYr9AN%2Fa6LENYYKGOb3t5oPGwFmT%2BHR8wala56T6YD06A4ND0E00tbYIkog1JGDvyDlBhJh58124RScygHhpxWdahAnvYxvQ1FywzLSLoyhzS4%2FiF1xb7L4wHf2rkqrcCCqA4zx96LdQOsbGTsOKAg7h1QXunXB7wn5ypmL2JiijwfahosmiRqai6FPp5DrqiGTYwxPpTPYxohJsnouB3hywH7rowMJBWkB9eGxprlm%2BKvwX7aPxiu8eNz6tCab0jiQMjC1QPPLxYQYXNJSeeOix%2FtXDAREaCCxCGCu2ZzgjDCHe5SG21BtpVokAR6L5PscmJhVRQXn5zCF1M6%2FBjqkAWUyY6J2aNtrpXLDulReWr3qutfBffuBr8urkOfCb%2FhAtE2umKHmX1CfkXrqALcU3Fby0a1gDS%2F%2Fg1t1zJuhJZqzTZOke%2Fb4M3RnneE%2FpgZDbkqhdrECvJTpoFMnq5fTE%2FNT9q6MYSvFea1kPLBme6NqE17JzCjjxpoA1VSKo1QqVxuwBpHurTVBtfjczXhiPe5Yuwsw5%2FQgIpkuzHiLFv2aKxve&X-Amz-Signature=33688714acbac1b0350e9586031ec6f03be38a12edd236fd91ea31343c7f7a16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRJYENOJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDowgafFNQrdOj8ah%2FyB5KtXrnePGmv0rlNB4Gq6riwlQIhAOK1cCv9kZzHt0XNrC0CMqNupTozI9jlJIVGNOAWCD1GKv8DCFwQABoMNjM3NDIzMTgzODA1Igzp3UtCC3BBrDwhgksq3APgmiOH67%2Bl9gWvUQv8eP7NAp5U7WWrQhbH8GX9soClxdSG4dYBUyZWyNyJsyW69kqXCo%2FWQixJhWMG3EiiZ78auGJ9d2ToedQNGbbKGKTQoR6mwkUrwqUNORhVjoPnyQ3xUNzw%2B5GK%2Bv6Z8NQSNMqgClzoq1SHhyglDyl4jd03Y6kxkoNVd50yd30DdLgQBSybAfq8RU6g9Pj%2B%2BFpxX0%2B%2BHx7KxMUIuKAK5KYBWXwru7fAvFQwo3j8Y8J8f4wAG%2FIjtvoi0ozqi9NS6UWXFAECS8zyzrWve6fCrX8kdzc3hMp6AxYr9AN%2Fa6LENYYKGOb3t5oPGwFmT%2BHR8wala56T6YD06A4ND0E00tbYIkog1JGDvyDlBhJh58124RScygHhpxWdahAnvYxvQ1FywzLSLoyhzS4%2FiF1xb7L4wHf2rkqrcCCqA4zx96LdQOsbGTsOKAg7h1QXunXB7wn5ypmL2JiijwfahosmiRqai6FPp5DrqiGTYwxPpTPYxohJsnouB3hywH7rowMJBWkB9eGxprlm%2BKvwX7aPxiu8eNz6tCab0jiQMjC1QPPLxYQYXNJSeeOix%2FtXDAREaCCxCGCu2ZzgjDCHe5SG21BtpVokAR6L5PscmJhVRQXn5zCF1M6%2FBjqkAWUyY6J2aNtrpXLDulReWr3qutfBffuBr8urkOfCb%2FhAtE2umKHmX1CfkXrqALcU3Fby0a1gDS%2F%2Fg1t1zJuhJZqzTZOke%2Fb4M3RnneE%2FpgZDbkqhdrECvJTpoFMnq5fTE%2FNT9q6MYSvFea1kPLBme6NqE17JzCjjxpoA1VSKo1QqVxuwBpHurTVBtfjczXhiPe5Yuwsw5%2FQgIpkuzHiLFv2aKxve&X-Amz-Signature=71dfa16482ac04b3b9d5a0bf2c58ed6ce9a09a754d9395daaa99a92d045455f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
