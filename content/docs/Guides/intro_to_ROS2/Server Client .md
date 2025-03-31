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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLTQKDAK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCICOiH8hl%2F%2B67JZQD8CsmOaIUo0Hmgbiqiu4eboLSmQJ2AiEAw4LpKncQRpAYFCDlFdjD5ksM61aEJHhD5lMJqCXUHGAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFq5QCtktsnxFzQGQyrcA17xVvfI4jIaK63bk6HWbkF1tRCz6FR53nvxyr79TSWdyWXn8ZOhK5P5JK35higd%2FZz%2BDA1hPRYInlIuA4R1JjfKPIqNkh8LDE4dZ%2BoFtS2k8Tx6Z9TwHCLdCjhplAjSXSkTZfI4YA8RjSr9QiUt2gYLlPkljSO8VILTuQsChGNDgC97aFc%2BrgwDV2lge4eArnFbhfAR6duIZmErS%2FWyUWbKz1HLxW%2FhogCKsL66DWS7KzQtZQ5saLKZX1F5rm4wB9jTwzgP3tFR5DCirrpcBZXdWl5WP44F390oUxkQQlNCVZQcFc1jVYPE1kuX8FSr9CGrujjMV8EBEP0IFnHw9ctdFOJQvJKOZWdWwgBiJSFpuQjh1jEjHKxEBdXh9dJZC0nHy84id6H3XX%2BDgXI5z5NZgTsuqdsOOZJhZucu4OTcKFrx2n96YWwfAoMIPspd8PI18H3hnd33yXbVkgPtAhMK6rsWPxe2nnC%2FVI2TuaBsiee75MNfSlVEmdgnkHFZX0ii7ev25eQDDpdUiuhxZPKRiO7zQbGBrpFsD4XwRCl4ujzEDwxm8Jlm2w%2B3alVqVcrs4%2BxIdaex1qMKhm0UB8RvIYl435mrChTEggL8oAUQq1Vmxb02KywrTD2YMJHnqr8GOqUB4R7UNf3BpTHoWC1W5h80aTFWid3kgZ4pM%2BjLTP4vhl6qw3Xk0QBySKbLimVmYdQzhMkw%2Fgs0%2BzZTgwxclQs%2BKcMhubPlfDY2fh9vnRIAikvYVESs2W4ZV0Mp4GxH2MUrVozDBpYM6yeYHvf0Hz9NVfyeJoPIMqRUHeVeINfWbsc3jIbE%2BXhxfE53S8g%2B10axduOS%2FBWy0R7og5rE7hBIRkCjL0wo&X-Amz-Signature=0df638ef6e43c8c896035e09724a8f403fe4049496efde15225cfdccde918256&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLTQKDAK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCICOiH8hl%2F%2B67JZQD8CsmOaIUo0Hmgbiqiu4eboLSmQJ2AiEAw4LpKncQRpAYFCDlFdjD5ksM61aEJHhD5lMJqCXUHGAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFq5QCtktsnxFzQGQyrcA17xVvfI4jIaK63bk6HWbkF1tRCz6FR53nvxyr79TSWdyWXn8ZOhK5P5JK35higd%2FZz%2BDA1hPRYInlIuA4R1JjfKPIqNkh8LDE4dZ%2BoFtS2k8Tx6Z9TwHCLdCjhplAjSXSkTZfI4YA8RjSr9QiUt2gYLlPkljSO8VILTuQsChGNDgC97aFc%2BrgwDV2lge4eArnFbhfAR6duIZmErS%2FWyUWbKz1HLxW%2FhogCKsL66DWS7KzQtZQ5saLKZX1F5rm4wB9jTwzgP3tFR5DCirrpcBZXdWl5WP44F390oUxkQQlNCVZQcFc1jVYPE1kuX8FSr9CGrujjMV8EBEP0IFnHw9ctdFOJQvJKOZWdWwgBiJSFpuQjh1jEjHKxEBdXh9dJZC0nHy84id6H3XX%2BDgXI5z5NZgTsuqdsOOZJhZucu4OTcKFrx2n96YWwfAoMIPspd8PI18H3hnd33yXbVkgPtAhMK6rsWPxe2nnC%2FVI2TuaBsiee75MNfSlVEmdgnkHFZX0ii7ev25eQDDpdUiuhxZPKRiO7zQbGBrpFsD4XwRCl4ujzEDwxm8Jlm2w%2B3alVqVcrs4%2BxIdaex1qMKhm0UB8RvIYl435mrChTEggL8oAUQq1Vmxb02KywrTD2YMJHnqr8GOqUB4R7UNf3BpTHoWC1W5h80aTFWid3kgZ4pM%2BjLTP4vhl6qw3Xk0QBySKbLimVmYdQzhMkw%2Fgs0%2BzZTgwxclQs%2BKcMhubPlfDY2fh9vnRIAikvYVESs2W4ZV0Mp4GxH2MUrVozDBpYM6yeYHvf0Hz9NVfyeJoPIMqRUHeVeINfWbsc3jIbE%2BXhxfE53S8g%2B10axduOS%2FBWy0R7og5rE7hBIRkCjL0wo&X-Amz-Signature=8acbba8d2d0c9f5fdd9e4a201b50fbe9270574ac9cbdc83ab7f84cb24e535312&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLTQKDAK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCICOiH8hl%2F%2B67JZQD8CsmOaIUo0Hmgbiqiu4eboLSmQJ2AiEAw4LpKncQRpAYFCDlFdjD5ksM61aEJHhD5lMJqCXUHGAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFq5QCtktsnxFzQGQyrcA17xVvfI4jIaK63bk6HWbkF1tRCz6FR53nvxyr79TSWdyWXn8ZOhK5P5JK35higd%2FZz%2BDA1hPRYInlIuA4R1JjfKPIqNkh8LDE4dZ%2BoFtS2k8Tx6Z9TwHCLdCjhplAjSXSkTZfI4YA8RjSr9QiUt2gYLlPkljSO8VILTuQsChGNDgC97aFc%2BrgwDV2lge4eArnFbhfAR6duIZmErS%2FWyUWbKz1HLxW%2FhogCKsL66DWS7KzQtZQ5saLKZX1F5rm4wB9jTwzgP3tFR5DCirrpcBZXdWl5WP44F390oUxkQQlNCVZQcFc1jVYPE1kuX8FSr9CGrujjMV8EBEP0IFnHw9ctdFOJQvJKOZWdWwgBiJSFpuQjh1jEjHKxEBdXh9dJZC0nHy84id6H3XX%2BDgXI5z5NZgTsuqdsOOZJhZucu4OTcKFrx2n96YWwfAoMIPspd8PI18H3hnd33yXbVkgPtAhMK6rsWPxe2nnC%2FVI2TuaBsiee75MNfSlVEmdgnkHFZX0ii7ev25eQDDpdUiuhxZPKRiO7zQbGBrpFsD4XwRCl4ujzEDwxm8Jlm2w%2B3alVqVcrs4%2BxIdaex1qMKhm0UB8RvIYl435mrChTEggL8oAUQq1Vmxb02KywrTD2YMJHnqr8GOqUB4R7UNf3BpTHoWC1W5h80aTFWid3kgZ4pM%2BjLTP4vhl6qw3Xk0QBySKbLimVmYdQzhMkw%2Fgs0%2BzZTgwxclQs%2BKcMhubPlfDY2fh9vnRIAikvYVESs2W4ZV0Mp4GxH2MUrVozDBpYM6yeYHvf0Hz9NVfyeJoPIMqRUHeVeINfWbsc3jIbE%2BXhxfE53S8g%2B10axduOS%2FBWy0R7og5rE7hBIRkCjL0wo&X-Amz-Signature=dff854ebc779baefc13c7f52bfa092f452ad27b22dcfe9bea6e7cf2300de5c97&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLTQKDAK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCICOiH8hl%2F%2B67JZQD8CsmOaIUo0Hmgbiqiu4eboLSmQJ2AiEAw4LpKncQRpAYFCDlFdjD5ksM61aEJHhD5lMJqCXUHGAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFq5QCtktsnxFzQGQyrcA17xVvfI4jIaK63bk6HWbkF1tRCz6FR53nvxyr79TSWdyWXn8ZOhK5P5JK35higd%2FZz%2BDA1hPRYInlIuA4R1JjfKPIqNkh8LDE4dZ%2BoFtS2k8Tx6Z9TwHCLdCjhplAjSXSkTZfI4YA8RjSr9QiUt2gYLlPkljSO8VILTuQsChGNDgC97aFc%2BrgwDV2lge4eArnFbhfAR6duIZmErS%2FWyUWbKz1HLxW%2FhogCKsL66DWS7KzQtZQ5saLKZX1F5rm4wB9jTwzgP3tFR5DCirrpcBZXdWl5WP44F390oUxkQQlNCVZQcFc1jVYPE1kuX8FSr9CGrujjMV8EBEP0IFnHw9ctdFOJQvJKOZWdWwgBiJSFpuQjh1jEjHKxEBdXh9dJZC0nHy84id6H3XX%2BDgXI5z5NZgTsuqdsOOZJhZucu4OTcKFrx2n96YWwfAoMIPspd8PI18H3hnd33yXbVkgPtAhMK6rsWPxe2nnC%2FVI2TuaBsiee75MNfSlVEmdgnkHFZX0ii7ev25eQDDpdUiuhxZPKRiO7zQbGBrpFsD4XwRCl4ujzEDwxm8Jlm2w%2B3alVqVcrs4%2BxIdaex1qMKhm0UB8RvIYl435mrChTEggL8oAUQq1Vmxb02KywrTD2YMJHnqr8GOqUB4R7UNf3BpTHoWC1W5h80aTFWid3kgZ4pM%2BjLTP4vhl6qw3Xk0QBySKbLimVmYdQzhMkw%2Fgs0%2BzZTgwxclQs%2BKcMhubPlfDY2fh9vnRIAikvYVESs2W4ZV0Mp4GxH2MUrVozDBpYM6yeYHvf0Hz9NVfyeJoPIMqRUHeVeINfWbsc3jIbE%2BXhxfE53S8g%2B10axduOS%2FBWy0R7og5rE7hBIRkCjL0wo&X-Amz-Signature=83a3d5c57e6d49424dcd9b2190b9f379721141716e40df18dfac7a48c3022487&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLTQKDAK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCICOiH8hl%2F%2B67JZQD8CsmOaIUo0Hmgbiqiu4eboLSmQJ2AiEAw4LpKncQRpAYFCDlFdjD5ksM61aEJHhD5lMJqCXUHGAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFq5QCtktsnxFzQGQyrcA17xVvfI4jIaK63bk6HWbkF1tRCz6FR53nvxyr79TSWdyWXn8ZOhK5P5JK35higd%2FZz%2BDA1hPRYInlIuA4R1JjfKPIqNkh8LDE4dZ%2BoFtS2k8Tx6Z9TwHCLdCjhplAjSXSkTZfI4YA8RjSr9QiUt2gYLlPkljSO8VILTuQsChGNDgC97aFc%2BrgwDV2lge4eArnFbhfAR6duIZmErS%2FWyUWbKz1HLxW%2FhogCKsL66DWS7KzQtZQ5saLKZX1F5rm4wB9jTwzgP3tFR5DCirrpcBZXdWl5WP44F390oUxkQQlNCVZQcFc1jVYPE1kuX8FSr9CGrujjMV8EBEP0IFnHw9ctdFOJQvJKOZWdWwgBiJSFpuQjh1jEjHKxEBdXh9dJZC0nHy84id6H3XX%2BDgXI5z5NZgTsuqdsOOZJhZucu4OTcKFrx2n96YWwfAoMIPspd8PI18H3hnd33yXbVkgPtAhMK6rsWPxe2nnC%2FVI2TuaBsiee75MNfSlVEmdgnkHFZX0ii7ev25eQDDpdUiuhxZPKRiO7zQbGBrpFsD4XwRCl4ujzEDwxm8Jlm2w%2B3alVqVcrs4%2BxIdaex1qMKhm0UB8RvIYl435mrChTEggL8oAUQq1Vmxb02KywrTD2YMJHnqr8GOqUB4R7UNf3BpTHoWC1W5h80aTFWid3kgZ4pM%2BjLTP4vhl6qw3Xk0QBySKbLimVmYdQzhMkw%2Fgs0%2BzZTgwxclQs%2BKcMhubPlfDY2fh9vnRIAikvYVESs2W4ZV0Mp4GxH2MUrVozDBpYM6yeYHvf0Hz9NVfyeJoPIMqRUHeVeINfWbsc3jIbE%2BXhxfE53S8g%2B10axduOS%2FBWy0R7og5rE7hBIRkCjL0wo&X-Amz-Signature=4c5e127457ce3a5f612130aa8c079c8f2ecc2edeb99e14f4b63eca927cedce2f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
