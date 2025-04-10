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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN64VL7S%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQC6wtjc%2FYmH3gDfiE8zfuk4TKjufR43hBSRgEigK%2FV3tAIgbjyENM9jta8IcBQ4WC1it%2Bq8HBpQK1vC5Z2x5Wu5vlkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5oUsnGyUQWNQJdbyrcA7vODyfCxNUIxmD1%2BNwGbYHphQSXJ0t3praUPiBNN38XlAz0ZGEO%2B58QqrUKohvwlDy%2B9531OTU%2BUOF%2FiK2Okz6HkyVha9kg1cKN706gJrvNnLhj%2B%2BTVeSj5IE1CvAwm8bqIRy%2B2v7kfjRY9n1NZbYl%2F1CegOfr9Sjmz6a8uemdG%2FVumMX%2BJ1IpVISX53SqQYNEkCfHSuXAQ3KbjFftbJ7vpTOssBNf8jCpAO6NKvEtJMQDETUGmzd2ULRSzsqSTmrc8V8fiE0KtHfgQYf7EouTGBmtkQz6z1vo5izZKV8tXtolVmdjt%2Fg4IdimwuyePiJJBqJt0JyhwKGfVaGg8GK9DugAR4RMHs%2FXT3VYsh%2BoHzr%2FPFNPU1bCafajJ7Yz6B7RPZ35GD%2BsppXKBL%2Fk6O%2BSl2YuwUpPCxjbwCBf%2FcMCcMqZJ6k05gcYKXfH7Tr7PVRQo0J1N0zdxD0zYEhMvyCkJ%2BERKxmISvvZNE1PsmztUGrvG%2FGiPrqTVegWSzu6Q6UoAQ30BNrCh7j7%2B1K9MIj46t9utwGslvUE7x%2BI%2FWMJAC3bL53kOsadGI2ell8XFoYZuXtpUSQBZlFUWfkg%2FnD8fJi0MIOqVquwBzWc607HKXknNXnimWSCev%2Fd6MMCx4L8GOqUBoPS%2FgvgFbH9c6L9Yzm2DXAIx2pXJA1VG0lzJFySupYQYeRCzMAcv4nbMQ0b604VL76J%2FgJZdB2JcSzSgUMMhKCKYTWJS3DYI2VScN9MGLs6jws4We9tbFIpWWwMCHsKwteX6C8HP1aTfGf9BuLUDIHdGN3GedFgRt2X5T6rZSzfGIaVPj13ufDxgnEVyakHihugf4p3AU%2FAy59XnBK8QEKx9lsMt&X-Amz-Signature=22c10c3b3cdfcc8e1453ea64911aa4b90dd25566550c7a3f9cf1876866d46ef4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN64VL7S%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQC6wtjc%2FYmH3gDfiE8zfuk4TKjufR43hBSRgEigK%2FV3tAIgbjyENM9jta8IcBQ4WC1it%2Bq8HBpQK1vC5Z2x5Wu5vlkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5oUsnGyUQWNQJdbyrcA7vODyfCxNUIxmD1%2BNwGbYHphQSXJ0t3praUPiBNN38XlAz0ZGEO%2B58QqrUKohvwlDy%2B9531OTU%2BUOF%2FiK2Okz6HkyVha9kg1cKN706gJrvNnLhj%2B%2BTVeSj5IE1CvAwm8bqIRy%2B2v7kfjRY9n1NZbYl%2F1CegOfr9Sjmz6a8uemdG%2FVumMX%2BJ1IpVISX53SqQYNEkCfHSuXAQ3KbjFftbJ7vpTOssBNf8jCpAO6NKvEtJMQDETUGmzd2ULRSzsqSTmrc8V8fiE0KtHfgQYf7EouTGBmtkQz6z1vo5izZKV8tXtolVmdjt%2Fg4IdimwuyePiJJBqJt0JyhwKGfVaGg8GK9DugAR4RMHs%2FXT3VYsh%2BoHzr%2FPFNPU1bCafajJ7Yz6B7RPZ35GD%2BsppXKBL%2Fk6O%2BSl2YuwUpPCxjbwCBf%2FcMCcMqZJ6k05gcYKXfH7Tr7PVRQo0J1N0zdxD0zYEhMvyCkJ%2BERKxmISvvZNE1PsmztUGrvG%2FGiPrqTVegWSzu6Q6UoAQ30BNrCh7j7%2B1K9MIj46t9utwGslvUE7x%2BI%2FWMJAC3bL53kOsadGI2ell8XFoYZuXtpUSQBZlFUWfkg%2FnD8fJi0MIOqVquwBzWc607HKXknNXnimWSCev%2Fd6MMCx4L8GOqUBoPS%2FgvgFbH9c6L9Yzm2DXAIx2pXJA1VG0lzJFySupYQYeRCzMAcv4nbMQ0b604VL76J%2FgJZdB2JcSzSgUMMhKCKYTWJS3DYI2VScN9MGLs6jws4We9tbFIpWWwMCHsKwteX6C8HP1aTfGf9BuLUDIHdGN3GedFgRt2X5T6rZSzfGIaVPj13ufDxgnEVyakHihugf4p3AU%2FAy59XnBK8QEKx9lsMt&X-Amz-Signature=3927c14b1ef968f6ae17351106f03cc54a9a618582e7379fe873f8a861a3c0dc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN64VL7S%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQC6wtjc%2FYmH3gDfiE8zfuk4TKjufR43hBSRgEigK%2FV3tAIgbjyENM9jta8IcBQ4WC1it%2Bq8HBpQK1vC5Z2x5Wu5vlkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5oUsnGyUQWNQJdbyrcA7vODyfCxNUIxmD1%2BNwGbYHphQSXJ0t3praUPiBNN38XlAz0ZGEO%2B58QqrUKohvwlDy%2B9531OTU%2BUOF%2FiK2Okz6HkyVha9kg1cKN706gJrvNnLhj%2B%2BTVeSj5IE1CvAwm8bqIRy%2B2v7kfjRY9n1NZbYl%2F1CegOfr9Sjmz6a8uemdG%2FVumMX%2BJ1IpVISX53SqQYNEkCfHSuXAQ3KbjFftbJ7vpTOssBNf8jCpAO6NKvEtJMQDETUGmzd2ULRSzsqSTmrc8V8fiE0KtHfgQYf7EouTGBmtkQz6z1vo5izZKV8tXtolVmdjt%2Fg4IdimwuyePiJJBqJt0JyhwKGfVaGg8GK9DugAR4RMHs%2FXT3VYsh%2BoHzr%2FPFNPU1bCafajJ7Yz6B7RPZ35GD%2BsppXKBL%2Fk6O%2BSl2YuwUpPCxjbwCBf%2FcMCcMqZJ6k05gcYKXfH7Tr7PVRQo0J1N0zdxD0zYEhMvyCkJ%2BERKxmISvvZNE1PsmztUGrvG%2FGiPrqTVegWSzu6Q6UoAQ30BNrCh7j7%2B1K9MIj46t9utwGslvUE7x%2BI%2FWMJAC3bL53kOsadGI2ell8XFoYZuXtpUSQBZlFUWfkg%2FnD8fJi0MIOqVquwBzWc607HKXknNXnimWSCev%2Fd6MMCx4L8GOqUBoPS%2FgvgFbH9c6L9Yzm2DXAIx2pXJA1VG0lzJFySupYQYeRCzMAcv4nbMQ0b604VL76J%2FgJZdB2JcSzSgUMMhKCKYTWJS3DYI2VScN9MGLs6jws4We9tbFIpWWwMCHsKwteX6C8HP1aTfGf9BuLUDIHdGN3GedFgRt2X5T6rZSzfGIaVPj13ufDxgnEVyakHihugf4p3AU%2FAy59XnBK8QEKx9lsMt&X-Amz-Signature=e1a74f14b3db45019e66f10ce2dfa5a3f05996a016516f90d3298fa3d2dbb59c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN64VL7S%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQC6wtjc%2FYmH3gDfiE8zfuk4TKjufR43hBSRgEigK%2FV3tAIgbjyENM9jta8IcBQ4WC1it%2Bq8HBpQK1vC5Z2x5Wu5vlkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5oUsnGyUQWNQJdbyrcA7vODyfCxNUIxmD1%2BNwGbYHphQSXJ0t3praUPiBNN38XlAz0ZGEO%2B58QqrUKohvwlDy%2B9531OTU%2BUOF%2FiK2Okz6HkyVha9kg1cKN706gJrvNnLhj%2B%2BTVeSj5IE1CvAwm8bqIRy%2B2v7kfjRY9n1NZbYl%2F1CegOfr9Sjmz6a8uemdG%2FVumMX%2BJ1IpVISX53SqQYNEkCfHSuXAQ3KbjFftbJ7vpTOssBNf8jCpAO6NKvEtJMQDETUGmzd2ULRSzsqSTmrc8V8fiE0KtHfgQYf7EouTGBmtkQz6z1vo5izZKV8tXtolVmdjt%2Fg4IdimwuyePiJJBqJt0JyhwKGfVaGg8GK9DugAR4RMHs%2FXT3VYsh%2BoHzr%2FPFNPU1bCafajJ7Yz6B7RPZ35GD%2BsppXKBL%2Fk6O%2BSl2YuwUpPCxjbwCBf%2FcMCcMqZJ6k05gcYKXfH7Tr7PVRQo0J1N0zdxD0zYEhMvyCkJ%2BERKxmISvvZNE1PsmztUGrvG%2FGiPrqTVegWSzu6Q6UoAQ30BNrCh7j7%2B1K9MIj46t9utwGslvUE7x%2BI%2FWMJAC3bL53kOsadGI2ell8XFoYZuXtpUSQBZlFUWfkg%2FnD8fJi0MIOqVquwBzWc607HKXknNXnimWSCev%2Fd6MMCx4L8GOqUBoPS%2FgvgFbH9c6L9Yzm2DXAIx2pXJA1VG0lzJFySupYQYeRCzMAcv4nbMQ0b604VL76J%2FgJZdB2JcSzSgUMMhKCKYTWJS3DYI2VScN9MGLs6jws4We9tbFIpWWwMCHsKwteX6C8HP1aTfGf9BuLUDIHdGN3GedFgRt2X5T6rZSzfGIaVPj13ufDxgnEVyakHihugf4p3AU%2FAy59XnBK8QEKx9lsMt&X-Amz-Signature=2f7a0c971602906e6eeedf2b8c66bbf123b4dd08675661f3040984ce04a1d67b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN64VL7S%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQC6wtjc%2FYmH3gDfiE8zfuk4TKjufR43hBSRgEigK%2FV3tAIgbjyENM9jta8IcBQ4WC1it%2Bq8HBpQK1vC5Z2x5Wu5vlkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5oUsnGyUQWNQJdbyrcA7vODyfCxNUIxmD1%2BNwGbYHphQSXJ0t3praUPiBNN38XlAz0ZGEO%2B58QqrUKohvwlDy%2B9531OTU%2BUOF%2FiK2Okz6HkyVha9kg1cKN706gJrvNnLhj%2B%2BTVeSj5IE1CvAwm8bqIRy%2B2v7kfjRY9n1NZbYl%2F1CegOfr9Sjmz6a8uemdG%2FVumMX%2BJ1IpVISX53SqQYNEkCfHSuXAQ3KbjFftbJ7vpTOssBNf8jCpAO6NKvEtJMQDETUGmzd2ULRSzsqSTmrc8V8fiE0KtHfgQYf7EouTGBmtkQz6z1vo5izZKV8tXtolVmdjt%2Fg4IdimwuyePiJJBqJt0JyhwKGfVaGg8GK9DugAR4RMHs%2FXT3VYsh%2BoHzr%2FPFNPU1bCafajJ7Yz6B7RPZ35GD%2BsppXKBL%2Fk6O%2BSl2YuwUpPCxjbwCBf%2FcMCcMqZJ6k05gcYKXfH7Tr7PVRQo0J1N0zdxD0zYEhMvyCkJ%2BERKxmISvvZNE1PsmztUGrvG%2FGiPrqTVegWSzu6Q6UoAQ30BNrCh7j7%2B1K9MIj46t9utwGslvUE7x%2BI%2FWMJAC3bL53kOsadGI2ell8XFoYZuXtpUSQBZlFUWfkg%2FnD8fJi0MIOqVquwBzWc607HKXknNXnimWSCev%2Fd6MMCx4L8GOqUBoPS%2FgvgFbH9c6L9Yzm2DXAIx2pXJA1VG0lzJFySupYQYeRCzMAcv4nbMQ0b604VL76J%2FgJZdB2JcSzSgUMMhKCKYTWJS3DYI2VScN9MGLs6jws4We9tbFIpWWwMCHsKwteX6C8HP1aTfGf9BuLUDIHdGN3GedFgRt2X5T6rZSzfGIaVPj13ufDxgnEVyakHihugf4p3AU%2FAy59XnBK8QEKx9lsMt&X-Amz-Signature=e2a82d1e4e2ffbc04bcadebd8b83c2dc47beb896831fcd708906437b7b2da725&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
