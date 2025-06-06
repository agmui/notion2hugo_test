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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCGE4YO6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvu658N76hXw%2BW2czovwARRI3XsUeqRCeb%2BqcJJjZU4AiEArQ38OSroISCChAT6IzuzjFpZltgSMbzoQ9dLFSTEVZwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAyYeGZEKukSAERk%2BSrcA8y58vL5RsF8f%2BnnggD%2BwfMSmV4iqS0KgVOKXxE6sVYUoo83DZS6iIsOgS1EPPM2l3b4lFpYLOwv1aRajC3NylrS8buxyPiv%2B1N2ixNdNAeVbszRjnH7LgNaGO1mUbBiYPD5W%2BpHOreRwgQKWa2mSr8lD8k9O6EbYLlNjeFFppQl2jgKpZNXn8yVFQ5EMjTT4k6%2BOe2LyraaTfDolWSlUjLufr2V8Nq5xnO2m4gOOFmGzYmWc%2BF13G5QbxUDnAd50bFDt2lfvQyCaaB5rsLEAB2QFBC%2FPWVlkccHsm50D9lpwP4msE0PJIyTrTh2HMaVq8VYb%2Fc6AUd0TOGRiAI3ttth%2FNI8Re6gEu8f34C%2FCJvscY3KKRN7IIfMKKrHBYiouDgjkfZOk%2B7fsSsm0V2Be7pWKTMtaoL9RJymlNwUv0tjdjNCEql0uPfxkSIy%2FNT8mZ4OCqkBLIiVh%2Fs9qVCwrPB5tOcgO7n%2FvgixzT5Wwy8Ip8OXvF5IYVHob9wlQps%2BOvsRreS%2Fwc03o2xa9xWEvEeeEGa6yUF1PA0SV3MXTBHUU2CN7hp864hxZYJavcJp1UMS5WeR%2F5Tf7ZIR0mPF289Vx299Hw%2FFLY7b%2FyzVcis7Cfbp8CmJAsjL3oR2MMSRjcIGOqUB0GZnB1iCWFrIBES1TQr2SKlRw1DucAMqiNSALncdpn89CbuD1%2Fcj5nD49VZmxCgHjxmCILv%2FGN1s27BJFSDipgvB73KSnmo%2BL0SL923J%2BWCE%2Br3uqBtLAsxMJqXsIhDki2cvTEWdrz2Ck%2BAWkRyjyHENDLd5rI%2BYRQihvWcdfBA0o6OcCxJAM6JOBDzAlQYX7le%2F1GWVJvGi4iSny71FG8KwUJqm&X-Amz-Signature=4ce48b23ef5e02e5d3b7f48ab63a0fa83ce4e0283bcf8074cce9d362a10a2f34&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCGE4YO6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvu658N76hXw%2BW2czovwARRI3XsUeqRCeb%2BqcJJjZU4AiEArQ38OSroISCChAT6IzuzjFpZltgSMbzoQ9dLFSTEVZwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAyYeGZEKukSAERk%2BSrcA8y58vL5RsF8f%2BnnggD%2BwfMSmV4iqS0KgVOKXxE6sVYUoo83DZS6iIsOgS1EPPM2l3b4lFpYLOwv1aRajC3NylrS8buxyPiv%2B1N2ixNdNAeVbszRjnH7LgNaGO1mUbBiYPD5W%2BpHOreRwgQKWa2mSr8lD8k9O6EbYLlNjeFFppQl2jgKpZNXn8yVFQ5EMjTT4k6%2BOe2LyraaTfDolWSlUjLufr2V8Nq5xnO2m4gOOFmGzYmWc%2BF13G5QbxUDnAd50bFDt2lfvQyCaaB5rsLEAB2QFBC%2FPWVlkccHsm50D9lpwP4msE0PJIyTrTh2HMaVq8VYb%2Fc6AUd0TOGRiAI3ttth%2FNI8Re6gEu8f34C%2FCJvscY3KKRN7IIfMKKrHBYiouDgjkfZOk%2B7fsSsm0V2Be7pWKTMtaoL9RJymlNwUv0tjdjNCEql0uPfxkSIy%2FNT8mZ4OCqkBLIiVh%2Fs9qVCwrPB5tOcgO7n%2FvgixzT5Wwy8Ip8OXvF5IYVHob9wlQps%2BOvsRreS%2Fwc03o2xa9xWEvEeeEGa6yUF1PA0SV3MXTBHUU2CN7hp864hxZYJavcJp1UMS5WeR%2F5Tf7ZIR0mPF289Vx299Hw%2FFLY7b%2FyzVcis7Cfbp8CmJAsjL3oR2MMSRjcIGOqUB0GZnB1iCWFrIBES1TQr2SKlRw1DucAMqiNSALncdpn89CbuD1%2Fcj5nD49VZmxCgHjxmCILv%2FGN1s27BJFSDipgvB73KSnmo%2BL0SL923J%2BWCE%2Br3uqBtLAsxMJqXsIhDki2cvTEWdrz2Ck%2BAWkRyjyHENDLd5rI%2BYRQihvWcdfBA0o6OcCxJAM6JOBDzAlQYX7le%2F1GWVJvGi4iSny71FG8KwUJqm&X-Amz-Signature=d2b1006abee63348dcaa9d3bc968d3b649bc4ef83712f592bdf850a1da5eecce&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCGE4YO6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvu658N76hXw%2BW2czovwARRI3XsUeqRCeb%2BqcJJjZU4AiEArQ38OSroISCChAT6IzuzjFpZltgSMbzoQ9dLFSTEVZwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAyYeGZEKukSAERk%2BSrcA8y58vL5RsF8f%2BnnggD%2BwfMSmV4iqS0KgVOKXxE6sVYUoo83DZS6iIsOgS1EPPM2l3b4lFpYLOwv1aRajC3NylrS8buxyPiv%2B1N2ixNdNAeVbszRjnH7LgNaGO1mUbBiYPD5W%2BpHOreRwgQKWa2mSr8lD8k9O6EbYLlNjeFFppQl2jgKpZNXn8yVFQ5EMjTT4k6%2BOe2LyraaTfDolWSlUjLufr2V8Nq5xnO2m4gOOFmGzYmWc%2BF13G5QbxUDnAd50bFDt2lfvQyCaaB5rsLEAB2QFBC%2FPWVlkccHsm50D9lpwP4msE0PJIyTrTh2HMaVq8VYb%2Fc6AUd0TOGRiAI3ttth%2FNI8Re6gEu8f34C%2FCJvscY3KKRN7IIfMKKrHBYiouDgjkfZOk%2B7fsSsm0V2Be7pWKTMtaoL9RJymlNwUv0tjdjNCEql0uPfxkSIy%2FNT8mZ4OCqkBLIiVh%2Fs9qVCwrPB5tOcgO7n%2FvgixzT5Wwy8Ip8OXvF5IYVHob9wlQps%2BOvsRreS%2Fwc03o2xa9xWEvEeeEGa6yUF1PA0SV3MXTBHUU2CN7hp864hxZYJavcJp1UMS5WeR%2F5Tf7ZIR0mPF289Vx299Hw%2FFLY7b%2FyzVcis7Cfbp8CmJAsjL3oR2MMSRjcIGOqUB0GZnB1iCWFrIBES1TQr2SKlRw1DucAMqiNSALncdpn89CbuD1%2Fcj5nD49VZmxCgHjxmCILv%2FGN1s27BJFSDipgvB73KSnmo%2BL0SL923J%2BWCE%2Br3uqBtLAsxMJqXsIhDki2cvTEWdrz2Ck%2BAWkRyjyHENDLd5rI%2BYRQihvWcdfBA0o6OcCxJAM6JOBDzAlQYX7le%2F1GWVJvGi4iSny71FG8KwUJqm&X-Amz-Signature=3ea1ef938b65b75f878cf478e8a58c61c20519d3698a7d51916b52519269c9b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCGE4YO6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvu658N76hXw%2BW2czovwARRI3XsUeqRCeb%2BqcJJjZU4AiEArQ38OSroISCChAT6IzuzjFpZltgSMbzoQ9dLFSTEVZwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAyYeGZEKukSAERk%2BSrcA8y58vL5RsF8f%2BnnggD%2BwfMSmV4iqS0KgVOKXxE6sVYUoo83DZS6iIsOgS1EPPM2l3b4lFpYLOwv1aRajC3NylrS8buxyPiv%2B1N2ixNdNAeVbszRjnH7LgNaGO1mUbBiYPD5W%2BpHOreRwgQKWa2mSr8lD8k9O6EbYLlNjeFFppQl2jgKpZNXn8yVFQ5EMjTT4k6%2BOe2LyraaTfDolWSlUjLufr2V8Nq5xnO2m4gOOFmGzYmWc%2BF13G5QbxUDnAd50bFDt2lfvQyCaaB5rsLEAB2QFBC%2FPWVlkccHsm50D9lpwP4msE0PJIyTrTh2HMaVq8VYb%2Fc6AUd0TOGRiAI3ttth%2FNI8Re6gEu8f34C%2FCJvscY3KKRN7IIfMKKrHBYiouDgjkfZOk%2B7fsSsm0V2Be7pWKTMtaoL9RJymlNwUv0tjdjNCEql0uPfxkSIy%2FNT8mZ4OCqkBLIiVh%2Fs9qVCwrPB5tOcgO7n%2FvgixzT5Wwy8Ip8OXvF5IYVHob9wlQps%2BOvsRreS%2Fwc03o2xa9xWEvEeeEGa6yUF1PA0SV3MXTBHUU2CN7hp864hxZYJavcJp1UMS5WeR%2F5Tf7ZIR0mPF289Vx299Hw%2FFLY7b%2FyzVcis7Cfbp8CmJAsjL3oR2MMSRjcIGOqUB0GZnB1iCWFrIBES1TQr2SKlRw1DucAMqiNSALncdpn89CbuD1%2Fcj5nD49VZmxCgHjxmCILv%2FGN1s27BJFSDipgvB73KSnmo%2BL0SL923J%2BWCE%2Br3uqBtLAsxMJqXsIhDki2cvTEWdrz2Ck%2BAWkRyjyHENDLd5rI%2BYRQihvWcdfBA0o6OcCxJAM6JOBDzAlQYX7le%2F1GWVJvGi4iSny71FG8KwUJqm&X-Amz-Signature=4fb4d82c48f27bbc37cee4ca9eb7cd5374b0d3eab7b86ae50eb5994d6bcf8a18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCGE4YO6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvu658N76hXw%2BW2czovwARRI3XsUeqRCeb%2BqcJJjZU4AiEArQ38OSroISCChAT6IzuzjFpZltgSMbzoQ9dLFSTEVZwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAyYeGZEKukSAERk%2BSrcA8y58vL5RsF8f%2BnnggD%2BwfMSmV4iqS0KgVOKXxE6sVYUoo83DZS6iIsOgS1EPPM2l3b4lFpYLOwv1aRajC3NylrS8buxyPiv%2B1N2ixNdNAeVbszRjnH7LgNaGO1mUbBiYPD5W%2BpHOreRwgQKWa2mSr8lD8k9O6EbYLlNjeFFppQl2jgKpZNXn8yVFQ5EMjTT4k6%2BOe2LyraaTfDolWSlUjLufr2V8Nq5xnO2m4gOOFmGzYmWc%2BF13G5QbxUDnAd50bFDt2lfvQyCaaB5rsLEAB2QFBC%2FPWVlkccHsm50D9lpwP4msE0PJIyTrTh2HMaVq8VYb%2Fc6AUd0TOGRiAI3ttth%2FNI8Re6gEu8f34C%2FCJvscY3KKRN7IIfMKKrHBYiouDgjkfZOk%2B7fsSsm0V2Be7pWKTMtaoL9RJymlNwUv0tjdjNCEql0uPfxkSIy%2FNT8mZ4OCqkBLIiVh%2Fs9qVCwrPB5tOcgO7n%2FvgixzT5Wwy8Ip8OXvF5IYVHob9wlQps%2BOvsRreS%2Fwc03o2xa9xWEvEeeEGa6yUF1PA0SV3MXTBHUU2CN7hp864hxZYJavcJp1UMS5WeR%2F5Tf7ZIR0mPF289Vx299Hw%2FFLY7b%2FyzVcis7Cfbp8CmJAsjL3oR2MMSRjcIGOqUB0GZnB1iCWFrIBES1TQr2SKlRw1DucAMqiNSALncdpn89CbuD1%2Fcj5nD49VZmxCgHjxmCILv%2FGN1s27BJFSDipgvB73KSnmo%2BL0SL923J%2BWCE%2Br3uqBtLAsxMJqXsIhDki2cvTEWdrz2Ck%2BAWkRyjyHENDLd5rI%2BYRQihvWcdfBA0o6OcCxJAM6JOBDzAlQYX7le%2F1GWVJvGi4iSny71FG8KwUJqm&X-Amz-Signature=effcc959ea41833fdb943227a0f1c7ff470e6103b0947bf70fca6261d0fa4711&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
