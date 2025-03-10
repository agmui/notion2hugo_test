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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZD47MC%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDVkSYOrPnsghgJUBhricJcjSnpcN56Bldf6Cg%2FAKhjegIhAO0hQDm8NqdzynoJhIskex8TVO2iPn4wH5ElK7WwKdGyKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH54i7vMBS4AGftuEq3ANITs3IY%2B6hIIFO%2ByMjAjuuEkSxvdDkIrLIkcs%2FMNsf7pzN1nCI9Ss%2FOTU811Hv9Q5IfIoF%2BY6cdnhwidZIG0%2FudGQyiyr%2FlYim5GuzuCwggA%2Fb%2BIobSFWFeHK8p%2F%2Fss%2F8Got1GxMBREfErWHrNXrTN066ADcofMJ%2BPAgVhySBdbG2qFvxToYvHn4NEqQIKO%2FRTra2nDjJoktxTsBJhkmxfaYevPWoTAnwA5x6i%2FcrXEAPaoAb12AlJtVhlOo%2FkhvLqR9bhR2VnqXJOwenFSHUrUxm7A6AfHu0XunVOeMbYCWPHKrjlXhLlfnwY4WD1qFWWbDwSdEnXEmXrmKLncod3NUJty7GAIJVYPKOsCS%2BNZKxE%2FeuQttNSFO7kYw2mH09aIIcmtp2fNc%2FbSj03oZKEgXKIqaI82h9NaPBcswGcEV5q%2BBmbOTsBpJWk%2FGzHxMvAMwhE1xu8O7Wf6%2BeGoC%2BJN%2FiQ35PpAhS8jyI%2FKBJa0rIjIHYbr%2Fr8KxIQDtebANyax8H0Kqd4ppZo6X26Lw%2FXUnUwtg%2BxxTeJvO17qMaqKNmPrYGbYlvIrl5xafkZEOlQG0a0ihCkA4QB3XdbCEMtLrTdNNP0tUFEV7kPkklZvaepGU15WnxZEPRVUjCFrL2%2BBjqkAXpmiJKrreIvQnHb69KZ5kQyhiQaF7%2Fo75TfYJljYSvwPTnUzQEVFuEovzIWfLuuQWmOFyl1ygme0cPcM9fAOuUTlcjBLwn9QBKhYjWXLswt4E6J2bNi4Bic%2FDMdm0QlaKxRPdn6a%2F7mdBfh9XKiN32hAh0ON4WoyYW%2Ba8c1II5g8gaeazYrgimC7tGvT0mBos6BYbXjYi1flwPi8Fw7FgD1A1o%2B&X-Amz-Signature=47fed7f24421397b45d93aa6e7b5b48255f5d56fc96cd72f8bcf9299c5494f07&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZD47MC%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDVkSYOrPnsghgJUBhricJcjSnpcN56Bldf6Cg%2FAKhjegIhAO0hQDm8NqdzynoJhIskex8TVO2iPn4wH5ElK7WwKdGyKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH54i7vMBS4AGftuEq3ANITs3IY%2B6hIIFO%2ByMjAjuuEkSxvdDkIrLIkcs%2FMNsf7pzN1nCI9Ss%2FOTU811Hv9Q5IfIoF%2BY6cdnhwidZIG0%2FudGQyiyr%2FlYim5GuzuCwggA%2Fb%2BIobSFWFeHK8p%2F%2Fss%2F8Got1GxMBREfErWHrNXrTN066ADcofMJ%2BPAgVhySBdbG2qFvxToYvHn4NEqQIKO%2FRTra2nDjJoktxTsBJhkmxfaYevPWoTAnwA5x6i%2FcrXEAPaoAb12AlJtVhlOo%2FkhvLqR9bhR2VnqXJOwenFSHUrUxm7A6AfHu0XunVOeMbYCWPHKrjlXhLlfnwY4WD1qFWWbDwSdEnXEmXrmKLncod3NUJty7GAIJVYPKOsCS%2BNZKxE%2FeuQttNSFO7kYw2mH09aIIcmtp2fNc%2FbSj03oZKEgXKIqaI82h9NaPBcswGcEV5q%2BBmbOTsBpJWk%2FGzHxMvAMwhE1xu8O7Wf6%2BeGoC%2BJN%2FiQ35PpAhS8jyI%2FKBJa0rIjIHYbr%2Fr8KxIQDtebANyax8H0Kqd4ppZo6X26Lw%2FXUnUwtg%2BxxTeJvO17qMaqKNmPrYGbYlvIrl5xafkZEOlQG0a0ihCkA4QB3XdbCEMtLrTdNNP0tUFEV7kPkklZvaepGU15WnxZEPRVUjCFrL2%2BBjqkAXpmiJKrreIvQnHb69KZ5kQyhiQaF7%2Fo75TfYJljYSvwPTnUzQEVFuEovzIWfLuuQWmOFyl1ygme0cPcM9fAOuUTlcjBLwn9QBKhYjWXLswt4E6J2bNi4Bic%2FDMdm0QlaKxRPdn6a%2F7mdBfh9XKiN32hAh0ON4WoyYW%2Ba8c1II5g8gaeazYrgimC7tGvT0mBos6BYbXjYi1flwPi8Fw7FgD1A1o%2B&X-Amz-Signature=71d04bd8f44153dcc689e729715a3e42af7d259d6562d1ae2f3240abe9bdd570&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZD47MC%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDVkSYOrPnsghgJUBhricJcjSnpcN56Bldf6Cg%2FAKhjegIhAO0hQDm8NqdzynoJhIskex8TVO2iPn4wH5ElK7WwKdGyKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH54i7vMBS4AGftuEq3ANITs3IY%2B6hIIFO%2ByMjAjuuEkSxvdDkIrLIkcs%2FMNsf7pzN1nCI9Ss%2FOTU811Hv9Q5IfIoF%2BY6cdnhwidZIG0%2FudGQyiyr%2FlYim5GuzuCwggA%2Fb%2BIobSFWFeHK8p%2F%2Fss%2F8Got1GxMBREfErWHrNXrTN066ADcofMJ%2BPAgVhySBdbG2qFvxToYvHn4NEqQIKO%2FRTra2nDjJoktxTsBJhkmxfaYevPWoTAnwA5x6i%2FcrXEAPaoAb12AlJtVhlOo%2FkhvLqR9bhR2VnqXJOwenFSHUrUxm7A6AfHu0XunVOeMbYCWPHKrjlXhLlfnwY4WD1qFWWbDwSdEnXEmXrmKLncod3NUJty7GAIJVYPKOsCS%2BNZKxE%2FeuQttNSFO7kYw2mH09aIIcmtp2fNc%2FbSj03oZKEgXKIqaI82h9NaPBcswGcEV5q%2BBmbOTsBpJWk%2FGzHxMvAMwhE1xu8O7Wf6%2BeGoC%2BJN%2FiQ35PpAhS8jyI%2FKBJa0rIjIHYbr%2Fr8KxIQDtebANyax8H0Kqd4ppZo6X26Lw%2FXUnUwtg%2BxxTeJvO17qMaqKNmPrYGbYlvIrl5xafkZEOlQG0a0ihCkA4QB3XdbCEMtLrTdNNP0tUFEV7kPkklZvaepGU15WnxZEPRVUjCFrL2%2BBjqkAXpmiJKrreIvQnHb69KZ5kQyhiQaF7%2Fo75TfYJljYSvwPTnUzQEVFuEovzIWfLuuQWmOFyl1ygme0cPcM9fAOuUTlcjBLwn9QBKhYjWXLswt4E6J2bNi4Bic%2FDMdm0QlaKxRPdn6a%2F7mdBfh9XKiN32hAh0ON4WoyYW%2Ba8c1II5g8gaeazYrgimC7tGvT0mBos6BYbXjYi1flwPi8Fw7FgD1A1o%2B&X-Amz-Signature=cef49edf66c2896933fe94a8f49320d1b5a367e3ccbeddd9761b7af408fe1375&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZD47MC%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDVkSYOrPnsghgJUBhricJcjSnpcN56Bldf6Cg%2FAKhjegIhAO0hQDm8NqdzynoJhIskex8TVO2iPn4wH5ElK7WwKdGyKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH54i7vMBS4AGftuEq3ANITs3IY%2B6hIIFO%2ByMjAjuuEkSxvdDkIrLIkcs%2FMNsf7pzN1nCI9Ss%2FOTU811Hv9Q5IfIoF%2BY6cdnhwidZIG0%2FudGQyiyr%2FlYim5GuzuCwggA%2Fb%2BIobSFWFeHK8p%2F%2Fss%2F8Got1GxMBREfErWHrNXrTN066ADcofMJ%2BPAgVhySBdbG2qFvxToYvHn4NEqQIKO%2FRTra2nDjJoktxTsBJhkmxfaYevPWoTAnwA5x6i%2FcrXEAPaoAb12AlJtVhlOo%2FkhvLqR9bhR2VnqXJOwenFSHUrUxm7A6AfHu0XunVOeMbYCWPHKrjlXhLlfnwY4WD1qFWWbDwSdEnXEmXrmKLncod3NUJty7GAIJVYPKOsCS%2BNZKxE%2FeuQttNSFO7kYw2mH09aIIcmtp2fNc%2FbSj03oZKEgXKIqaI82h9NaPBcswGcEV5q%2BBmbOTsBpJWk%2FGzHxMvAMwhE1xu8O7Wf6%2BeGoC%2BJN%2FiQ35PpAhS8jyI%2FKBJa0rIjIHYbr%2Fr8KxIQDtebANyax8H0Kqd4ppZo6X26Lw%2FXUnUwtg%2BxxTeJvO17qMaqKNmPrYGbYlvIrl5xafkZEOlQG0a0ihCkA4QB3XdbCEMtLrTdNNP0tUFEV7kPkklZvaepGU15WnxZEPRVUjCFrL2%2BBjqkAXpmiJKrreIvQnHb69KZ5kQyhiQaF7%2Fo75TfYJljYSvwPTnUzQEVFuEovzIWfLuuQWmOFyl1ygme0cPcM9fAOuUTlcjBLwn9QBKhYjWXLswt4E6J2bNi4Bic%2FDMdm0QlaKxRPdn6a%2F7mdBfh9XKiN32hAh0ON4WoyYW%2Ba8c1II5g8gaeazYrgimC7tGvT0mBos6BYbXjYi1flwPi8Fw7FgD1A1o%2B&X-Amz-Signature=c57d364263ca6c76f0cf5abdf545da4b4b047cef6c7cc10e11f796ce96955b6a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZD47MC%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDVkSYOrPnsghgJUBhricJcjSnpcN56Bldf6Cg%2FAKhjegIhAO0hQDm8NqdzynoJhIskex8TVO2iPn4wH5ElK7WwKdGyKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH54i7vMBS4AGftuEq3ANITs3IY%2B6hIIFO%2ByMjAjuuEkSxvdDkIrLIkcs%2FMNsf7pzN1nCI9Ss%2FOTU811Hv9Q5IfIoF%2BY6cdnhwidZIG0%2FudGQyiyr%2FlYim5GuzuCwggA%2Fb%2BIobSFWFeHK8p%2F%2Fss%2F8Got1GxMBREfErWHrNXrTN066ADcofMJ%2BPAgVhySBdbG2qFvxToYvHn4NEqQIKO%2FRTra2nDjJoktxTsBJhkmxfaYevPWoTAnwA5x6i%2FcrXEAPaoAb12AlJtVhlOo%2FkhvLqR9bhR2VnqXJOwenFSHUrUxm7A6AfHu0XunVOeMbYCWPHKrjlXhLlfnwY4WD1qFWWbDwSdEnXEmXrmKLncod3NUJty7GAIJVYPKOsCS%2BNZKxE%2FeuQttNSFO7kYw2mH09aIIcmtp2fNc%2FbSj03oZKEgXKIqaI82h9NaPBcswGcEV5q%2BBmbOTsBpJWk%2FGzHxMvAMwhE1xu8O7Wf6%2BeGoC%2BJN%2FiQ35PpAhS8jyI%2FKBJa0rIjIHYbr%2Fr8KxIQDtebANyax8H0Kqd4ppZo6X26Lw%2FXUnUwtg%2BxxTeJvO17qMaqKNmPrYGbYlvIrl5xafkZEOlQG0a0ihCkA4QB3XdbCEMtLrTdNNP0tUFEV7kPkklZvaepGU15WnxZEPRVUjCFrL2%2BBjqkAXpmiJKrreIvQnHb69KZ5kQyhiQaF7%2Fo75TfYJljYSvwPTnUzQEVFuEovzIWfLuuQWmOFyl1ygme0cPcM9fAOuUTlcjBLwn9QBKhYjWXLswt4E6J2bNi4Bic%2FDMdm0QlaKxRPdn6a%2F7mdBfh9XKiN32hAh0ON4WoyYW%2Ba8c1II5g8gaeazYrgimC7tGvT0mBos6BYbXjYi1flwPi8Fw7FgD1A1o%2B&X-Amz-Signature=f7ab9b56ead01a6e7105cf587735da479753487c4f89b006d2d8f24245ec8cb9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
