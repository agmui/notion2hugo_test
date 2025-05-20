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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZIBVPWZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhYWqmqDyxavGKvnzj9pDfS7dUfgQzm6T4QGT%2BzOnqRAiAzvqsjdBUxklg6oAEc%2FbiRFS%2FjAtm14iyuwuRgqsUMWyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGWGJVXVvm31mwHKLKtwDCTgC5UpbLtPD%2FFkviljBVNoEWAo%2BssV6qmcd0nIT1As5CxfcWg4yF%2FCVGsRQlKD1BG7sJfm52WrSqWvKYCQE5ViXnUEJbpGbtfBd7Zo9zfyyI063j%2FLc5nNa5EZ2VD4EWPpUtdjortBpwX1h5D93nCacFsbA0iKSjROwsIj2uozzrvFicYNfx%2BGQDGDz9Ur3Vj8iOTcfJr3kwjDQzqsQmRLB8JrKt%2F80JxXZSUW%2FjEHNqm3HexRfMcJSFn7lkcrRgQyHLAH859z0XltjkM7QfXGCirgji6UBYz9BxAzWK6%2BNWU1Y%2BP1iUiN77%2B4RRsO78t48BzoKMm%2FLV%2BUmO3wWLoGrxMLnLtpby1pPqhTYmP93dCiCh20b2lqoWx0l1ScgbdctYBMO26w3JY9EEr%2BKLZcumRsfGGieJ4Jn%2B%2FAGMmd7kGqY4EpqDQRoh2JmdROCDs0872hEhO2LLF%2B8lhBQlcbbMmmAMWV7gG5IRgn3KFM3JtMw7vjYp%2BgBs6oZTy1swxGz3Ek4YxwC3ZO9qXW3waU37XwcS7IhXbBMT%2BSImLTRjYXoYrPPaSdR2%2BLTIG%2Fi0vYFq6n6K59tbZJaHn%2FX7IdB9AHvw%2B%2FQ93LSSFug%2F35%2FfbN6HvS9sWil9OQwtbOywQY6pgEtciLyIOspLcCrLA6YPMua7exDiIsC4JwZxAnwUKDMzOLiYHW4guODPWeoauQNVeqxaEseo6FyCGVtvJJ7LJbHUnPBLUSBKDPVqmsYuIc26jJVK2vbrzG%2BzR9joEj2Fl5wne7lyEEjKd1NW1uEzOPVlhbH%2FuKv552h4Wf94FhhdMGJ85BpYFZFf1dM2W7gaL2E52skFtAtU6dcWeTx26Qvgq60S0Dj&X-Amz-Signature=233e38519a57b370d43f860476c05d167def8bac72187b95c8d3f0bb1aa94238&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZIBVPWZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhYWqmqDyxavGKvnzj9pDfS7dUfgQzm6T4QGT%2BzOnqRAiAzvqsjdBUxklg6oAEc%2FbiRFS%2FjAtm14iyuwuRgqsUMWyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGWGJVXVvm31mwHKLKtwDCTgC5UpbLtPD%2FFkviljBVNoEWAo%2BssV6qmcd0nIT1As5CxfcWg4yF%2FCVGsRQlKD1BG7sJfm52WrSqWvKYCQE5ViXnUEJbpGbtfBd7Zo9zfyyI063j%2FLc5nNa5EZ2VD4EWPpUtdjortBpwX1h5D93nCacFsbA0iKSjROwsIj2uozzrvFicYNfx%2BGQDGDz9Ur3Vj8iOTcfJr3kwjDQzqsQmRLB8JrKt%2F80JxXZSUW%2FjEHNqm3HexRfMcJSFn7lkcrRgQyHLAH859z0XltjkM7QfXGCirgji6UBYz9BxAzWK6%2BNWU1Y%2BP1iUiN77%2B4RRsO78t48BzoKMm%2FLV%2BUmO3wWLoGrxMLnLtpby1pPqhTYmP93dCiCh20b2lqoWx0l1ScgbdctYBMO26w3JY9EEr%2BKLZcumRsfGGieJ4Jn%2B%2FAGMmd7kGqY4EpqDQRoh2JmdROCDs0872hEhO2LLF%2B8lhBQlcbbMmmAMWV7gG5IRgn3KFM3JtMw7vjYp%2BgBs6oZTy1swxGz3Ek4YxwC3ZO9qXW3waU37XwcS7IhXbBMT%2BSImLTRjYXoYrPPaSdR2%2BLTIG%2Fi0vYFq6n6K59tbZJaHn%2FX7IdB9AHvw%2B%2FQ93LSSFug%2F35%2FfbN6HvS9sWil9OQwtbOywQY6pgEtciLyIOspLcCrLA6YPMua7exDiIsC4JwZxAnwUKDMzOLiYHW4guODPWeoauQNVeqxaEseo6FyCGVtvJJ7LJbHUnPBLUSBKDPVqmsYuIc26jJVK2vbrzG%2BzR9joEj2Fl5wne7lyEEjKd1NW1uEzOPVlhbH%2FuKv552h4Wf94FhhdMGJ85BpYFZFf1dM2W7gaL2E52skFtAtU6dcWeTx26Qvgq60S0Dj&X-Amz-Signature=6ae61a80682664b6ea0c8b26b4243edf84310342379e60e7a334b36636fed274&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZIBVPWZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhYWqmqDyxavGKvnzj9pDfS7dUfgQzm6T4QGT%2BzOnqRAiAzvqsjdBUxklg6oAEc%2FbiRFS%2FjAtm14iyuwuRgqsUMWyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGWGJVXVvm31mwHKLKtwDCTgC5UpbLtPD%2FFkviljBVNoEWAo%2BssV6qmcd0nIT1As5CxfcWg4yF%2FCVGsRQlKD1BG7sJfm52WrSqWvKYCQE5ViXnUEJbpGbtfBd7Zo9zfyyI063j%2FLc5nNa5EZ2VD4EWPpUtdjortBpwX1h5D93nCacFsbA0iKSjROwsIj2uozzrvFicYNfx%2BGQDGDz9Ur3Vj8iOTcfJr3kwjDQzqsQmRLB8JrKt%2F80JxXZSUW%2FjEHNqm3HexRfMcJSFn7lkcrRgQyHLAH859z0XltjkM7QfXGCirgji6UBYz9BxAzWK6%2BNWU1Y%2BP1iUiN77%2B4RRsO78t48BzoKMm%2FLV%2BUmO3wWLoGrxMLnLtpby1pPqhTYmP93dCiCh20b2lqoWx0l1ScgbdctYBMO26w3JY9EEr%2BKLZcumRsfGGieJ4Jn%2B%2FAGMmd7kGqY4EpqDQRoh2JmdROCDs0872hEhO2LLF%2B8lhBQlcbbMmmAMWV7gG5IRgn3KFM3JtMw7vjYp%2BgBs6oZTy1swxGz3Ek4YxwC3ZO9qXW3waU37XwcS7IhXbBMT%2BSImLTRjYXoYrPPaSdR2%2BLTIG%2Fi0vYFq6n6K59tbZJaHn%2FX7IdB9AHvw%2B%2FQ93LSSFug%2F35%2FfbN6HvS9sWil9OQwtbOywQY6pgEtciLyIOspLcCrLA6YPMua7exDiIsC4JwZxAnwUKDMzOLiYHW4guODPWeoauQNVeqxaEseo6FyCGVtvJJ7LJbHUnPBLUSBKDPVqmsYuIc26jJVK2vbrzG%2BzR9joEj2Fl5wne7lyEEjKd1NW1uEzOPVlhbH%2FuKv552h4Wf94FhhdMGJ85BpYFZFf1dM2W7gaL2E52skFtAtU6dcWeTx26Qvgq60S0Dj&X-Amz-Signature=47191b1dc3631529ab00af7ba8076c49ddfd2dda147744b2221c5f08046dd065&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZIBVPWZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhYWqmqDyxavGKvnzj9pDfS7dUfgQzm6T4QGT%2BzOnqRAiAzvqsjdBUxklg6oAEc%2FbiRFS%2FjAtm14iyuwuRgqsUMWyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGWGJVXVvm31mwHKLKtwDCTgC5UpbLtPD%2FFkviljBVNoEWAo%2BssV6qmcd0nIT1As5CxfcWg4yF%2FCVGsRQlKD1BG7sJfm52WrSqWvKYCQE5ViXnUEJbpGbtfBd7Zo9zfyyI063j%2FLc5nNa5EZ2VD4EWPpUtdjortBpwX1h5D93nCacFsbA0iKSjROwsIj2uozzrvFicYNfx%2BGQDGDz9Ur3Vj8iOTcfJr3kwjDQzqsQmRLB8JrKt%2F80JxXZSUW%2FjEHNqm3HexRfMcJSFn7lkcrRgQyHLAH859z0XltjkM7QfXGCirgji6UBYz9BxAzWK6%2BNWU1Y%2BP1iUiN77%2B4RRsO78t48BzoKMm%2FLV%2BUmO3wWLoGrxMLnLtpby1pPqhTYmP93dCiCh20b2lqoWx0l1ScgbdctYBMO26w3JY9EEr%2BKLZcumRsfGGieJ4Jn%2B%2FAGMmd7kGqY4EpqDQRoh2JmdROCDs0872hEhO2LLF%2B8lhBQlcbbMmmAMWV7gG5IRgn3KFM3JtMw7vjYp%2BgBs6oZTy1swxGz3Ek4YxwC3ZO9qXW3waU37XwcS7IhXbBMT%2BSImLTRjYXoYrPPaSdR2%2BLTIG%2Fi0vYFq6n6K59tbZJaHn%2FX7IdB9AHvw%2B%2FQ93LSSFug%2F35%2FfbN6HvS9sWil9OQwtbOywQY6pgEtciLyIOspLcCrLA6YPMua7exDiIsC4JwZxAnwUKDMzOLiYHW4guODPWeoauQNVeqxaEseo6FyCGVtvJJ7LJbHUnPBLUSBKDPVqmsYuIc26jJVK2vbrzG%2BzR9joEj2Fl5wne7lyEEjKd1NW1uEzOPVlhbH%2FuKv552h4Wf94FhhdMGJ85BpYFZFf1dM2W7gaL2E52skFtAtU6dcWeTx26Qvgq60S0Dj&X-Amz-Signature=20f178c41320bd6755c9f9c0efb191f8ea7a44f26e98babaed7abb4aeaa4fd6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZIBVPWZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhYWqmqDyxavGKvnzj9pDfS7dUfgQzm6T4QGT%2BzOnqRAiAzvqsjdBUxklg6oAEc%2FbiRFS%2FjAtm14iyuwuRgqsUMWyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGWGJVXVvm31mwHKLKtwDCTgC5UpbLtPD%2FFkviljBVNoEWAo%2BssV6qmcd0nIT1As5CxfcWg4yF%2FCVGsRQlKD1BG7sJfm52WrSqWvKYCQE5ViXnUEJbpGbtfBd7Zo9zfyyI063j%2FLc5nNa5EZ2VD4EWPpUtdjortBpwX1h5D93nCacFsbA0iKSjROwsIj2uozzrvFicYNfx%2BGQDGDz9Ur3Vj8iOTcfJr3kwjDQzqsQmRLB8JrKt%2F80JxXZSUW%2FjEHNqm3HexRfMcJSFn7lkcrRgQyHLAH859z0XltjkM7QfXGCirgji6UBYz9BxAzWK6%2BNWU1Y%2BP1iUiN77%2B4RRsO78t48BzoKMm%2FLV%2BUmO3wWLoGrxMLnLtpby1pPqhTYmP93dCiCh20b2lqoWx0l1ScgbdctYBMO26w3JY9EEr%2BKLZcumRsfGGieJ4Jn%2B%2FAGMmd7kGqY4EpqDQRoh2JmdROCDs0872hEhO2LLF%2B8lhBQlcbbMmmAMWV7gG5IRgn3KFM3JtMw7vjYp%2BgBs6oZTy1swxGz3Ek4YxwC3ZO9qXW3waU37XwcS7IhXbBMT%2BSImLTRjYXoYrPPaSdR2%2BLTIG%2Fi0vYFq6n6K59tbZJaHn%2FX7IdB9AHvw%2B%2FQ93LSSFug%2F35%2FfbN6HvS9sWil9OQwtbOywQY6pgEtciLyIOspLcCrLA6YPMua7exDiIsC4JwZxAnwUKDMzOLiYHW4guODPWeoauQNVeqxaEseo6FyCGVtvJJ7LJbHUnPBLUSBKDPVqmsYuIc26jJVK2vbrzG%2BzR9joEj2Fl5wne7lyEEjKd1NW1uEzOPVlhbH%2FuKv552h4Wf94FhhdMGJ85BpYFZFf1dM2W7gaL2E52skFtAtU6dcWeTx26Qvgq60S0Dj&X-Amz-Signature=36df54e2ac4bed7268f87399745214ad437954925a9d340990a84866ff2d652b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
