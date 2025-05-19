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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXRTQIGN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeZaRnX0pStXXdQT%2FDwimpitpb4rgwmak4eWCyTZtILAIhAMbDpUdJm3HxRRn4UBf5VxvoufYvhCUWseMYeOjX0tMMKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAjHalkBKMZWz8f4Aq3ANfc1r1fOr1LbibmAuOjyhToQtYJ225O6O5aAyEN9jaIMJ2owwY3axsZPjVyaZKg1MpMvnECQRsCORoq06%2BvlZ0tKbLD8EkEZt7ja3dpTFuyXucB6Pe9fYfERpV%2BAyLHdMLUYfnCqM5cyXTKQYHO%2FXJXjyl9RjtHWoR1uu3q1q9M9V1BtKz0SFezRfx65aIfnBVPVaFIuP2Iewr2x7a0E5kBmceZhhjOb%2BfjK5kfg1CeG02oUbC%2BQHti7Yn1m%2FwvTP%2ByKH%2F%2FElwafYKOe1rhYNRs7So8Cr1WjrV0Kl%2FlxOlxm7cLupVQE47B7GjoWilvdRvGN%2BtfPoABk%2F7wxZKQht6nSYHbHdskUSzBrMfnV0isv%2Fx1mMOLCJYXU4ssFRMb8xPokE1blrITeUsZGrdNvuTlmG2WL4WwLWscYKtARo8%2Bi1ZloXLN2JiO%2F9CjVCrxNLikvmwnPzfdfl68OKGQcPuFD%2FFCqy4Z9egfyliX%2BL3TNxsmAas7B1bluWpBkGKR7%2BN9KKvy6YE1tBRCuLBL0cdlEQXXJnSwxLFjQBi1wJMhbImlKJ3Z8JQx37D5pADSisi7MR%2BWsXDPHFai9K2uZrvxD7YzDuOteBw2IT3%2FT6UtGbllzPURfyeQMAvjDD4sazBBjqkAZqkQSOfhaPo7sdaJxwJEwFNRaGp4bwdqMEv57AquRzOzAre5QWzuYrQzUWntvqqaEDCF4Z0yB5Qvkjpc2oMJVmDM%2B5d0cZ1kwPErZfjHXFdAEVVjJo2OXhwQzHG80s6e3msmTyj4AZsnRKJbdX23Ca5GFf8Ea3HOLbkLXChbQboc69uOd63pgW8qSVjMZh0Bs%2BbC%2FhC0uJRwy1JxQe4Awk8xQet&X-Amz-Signature=e3c2b64530875883be4974cebeafe8172a50a611db309716a7c34ce892133a40&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXRTQIGN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeZaRnX0pStXXdQT%2FDwimpitpb4rgwmak4eWCyTZtILAIhAMbDpUdJm3HxRRn4UBf5VxvoufYvhCUWseMYeOjX0tMMKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAjHalkBKMZWz8f4Aq3ANfc1r1fOr1LbibmAuOjyhToQtYJ225O6O5aAyEN9jaIMJ2owwY3axsZPjVyaZKg1MpMvnECQRsCORoq06%2BvlZ0tKbLD8EkEZt7ja3dpTFuyXucB6Pe9fYfERpV%2BAyLHdMLUYfnCqM5cyXTKQYHO%2FXJXjyl9RjtHWoR1uu3q1q9M9V1BtKz0SFezRfx65aIfnBVPVaFIuP2Iewr2x7a0E5kBmceZhhjOb%2BfjK5kfg1CeG02oUbC%2BQHti7Yn1m%2FwvTP%2ByKH%2F%2FElwafYKOe1rhYNRs7So8Cr1WjrV0Kl%2FlxOlxm7cLupVQE47B7GjoWilvdRvGN%2BtfPoABk%2F7wxZKQht6nSYHbHdskUSzBrMfnV0isv%2Fx1mMOLCJYXU4ssFRMb8xPokE1blrITeUsZGrdNvuTlmG2WL4WwLWscYKtARo8%2Bi1ZloXLN2JiO%2F9CjVCrxNLikvmwnPzfdfl68OKGQcPuFD%2FFCqy4Z9egfyliX%2BL3TNxsmAas7B1bluWpBkGKR7%2BN9KKvy6YE1tBRCuLBL0cdlEQXXJnSwxLFjQBi1wJMhbImlKJ3Z8JQx37D5pADSisi7MR%2BWsXDPHFai9K2uZrvxD7YzDuOteBw2IT3%2FT6UtGbllzPURfyeQMAvjDD4sazBBjqkAZqkQSOfhaPo7sdaJxwJEwFNRaGp4bwdqMEv57AquRzOzAre5QWzuYrQzUWntvqqaEDCF4Z0yB5Qvkjpc2oMJVmDM%2B5d0cZ1kwPErZfjHXFdAEVVjJo2OXhwQzHG80s6e3msmTyj4AZsnRKJbdX23Ca5GFf8Ea3HOLbkLXChbQboc69uOd63pgW8qSVjMZh0Bs%2BbC%2FhC0uJRwy1JxQe4Awk8xQet&X-Amz-Signature=91094b70ed4f829ffa5b00a91369c766c005430a73e8cee63ddd2de039089985&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXRTQIGN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeZaRnX0pStXXdQT%2FDwimpitpb4rgwmak4eWCyTZtILAIhAMbDpUdJm3HxRRn4UBf5VxvoufYvhCUWseMYeOjX0tMMKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAjHalkBKMZWz8f4Aq3ANfc1r1fOr1LbibmAuOjyhToQtYJ225O6O5aAyEN9jaIMJ2owwY3axsZPjVyaZKg1MpMvnECQRsCORoq06%2BvlZ0tKbLD8EkEZt7ja3dpTFuyXucB6Pe9fYfERpV%2BAyLHdMLUYfnCqM5cyXTKQYHO%2FXJXjyl9RjtHWoR1uu3q1q9M9V1BtKz0SFezRfx65aIfnBVPVaFIuP2Iewr2x7a0E5kBmceZhhjOb%2BfjK5kfg1CeG02oUbC%2BQHti7Yn1m%2FwvTP%2ByKH%2F%2FElwafYKOe1rhYNRs7So8Cr1WjrV0Kl%2FlxOlxm7cLupVQE47B7GjoWilvdRvGN%2BtfPoABk%2F7wxZKQht6nSYHbHdskUSzBrMfnV0isv%2Fx1mMOLCJYXU4ssFRMb8xPokE1blrITeUsZGrdNvuTlmG2WL4WwLWscYKtARo8%2Bi1ZloXLN2JiO%2F9CjVCrxNLikvmwnPzfdfl68OKGQcPuFD%2FFCqy4Z9egfyliX%2BL3TNxsmAas7B1bluWpBkGKR7%2BN9KKvy6YE1tBRCuLBL0cdlEQXXJnSwxLFjQBi1wJMhbImlKJ3Z8JQx37D5pADSisi7MR%2BWsXDPHFai9K2uZrvxD7YzDuOteBw2IT3%2FT6UtGbllzPURfyeQMAvjDD4sazBBjqkAZqkQSOfhaPo7sdaJxwJEwFNRaGp4bwdqMEv57AquRzOzAre5QWzuYrQzUWntvqqaEDCF4Z0yB5Qvkjpc2oMJVmDM%2B5d0cZ1kwPErZfjHXFdAEVVjJo2OXhwQzHG80s6e3msmTyj4AZsnRKJbdX23Ca5GFf8Ea3HOLbkLXChbQboc69uOd63pgW8qSVjMZh0Bs%2BbC%2FhC0uJRwy1JxQe4Awk8xQet&X-Amz-Signature=51c9958d525e7b5332b7474faacdb6b8cbe1f024a84741d9c1a4d85c518440b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXRTQIGN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeZaRnX0pStXXdQT%2FDwimpitpb4rgwmak4eWCyTZtILAIhAMbDpUdJm3HxRRn4UBf5VxvoufYvhCUWseMYeOjX0tMMKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAjHalkBKMZWz8f4Aq3ANfc1r1fOr1LbibmAuOjyhToQtYJ225O6O5aAyEN9jaIMJ2owwY3axsZPjVyaZKg1MpMvnECQRsCORoq06%2BvlZ0tKbLD8EkEZt7ja3dpTFuyXucB6Pe9fYfERpV%2BAyLHdMLUYfnCqM5cyXTKQYHO%2FXJXjyl9RjtHWoR1uu3q1q9M9V1BtKz0SFezRfx65aIfnBVPVaFIuP2Iewr2x7a0E5kBmceZhhjOb%2BfjK5kfg1CeG02oUbC%2BQHti7Yn1m%2FwvTP%2ByKH%2F%2FElwafYKOe1rhYNRs7So8Cr1WjrV0Kl%2FlxOlxm7cLupVQE47B7GjoWilvdRvGN%2BtfPoABk%2F7wxZKQht6nSYHbHdskUSzBrMfnV0isv%2Fx1mMOLCJYXU4ssFRMb8xPokE1blrITeUsZGrdNvuTlmG2WL4WwLWscYKtARo8%2Bi1ZloXLN2JiO%2F9CjVCrxNLikvmwnPzfdfl68OKGQcPuFD%2FFCqy4Z9egfyliX%2BL3TNxsmAas7B1bluWpBkGKR7%2BN9KKvy6YE1tBRCuLBL0cdlEQXXJnSwxLFjQBi1wJMhbImlKJ3Z8JQx37D5pADSisi7MR%2BWsXDPHFai9K2uZrvxD7YzDuOteBw2IT3%2FT6UtGbllzPURfyeQMAvjDD4sazBBjqkAZqkQSOfhaPo7sdaJxwJEwFNRaGp4bwdqMEv57AquRzOzAre5QWzuYrQzUWntvqqaEDCF4Z0yB5Qvkjpc2oMJVmDM%2B5d0cZ1kwPErZfjHXFdAEVVjJo2OXhwQzHG80s6e3msmTyj4AZsnRKJbdX23Ca5GFf8Ea3HOLbkLXChbQboc69uOd63pgW8qSVjMZh0Bs%2BbC%2FhC0uJRwy1JxQe4Awk8xQet&X-Amz-Signature=c151c0414954efcd23739fc0029b07028417b27986f8976346530d354c6c484e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXRTQIGN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeZaRnX0pStXXdQT%2FDwimpitpb4rgwmak4eWCyTZtILAIhAMbDpUdJm3HxRRn4UBf5VxvoufYvhCUWseMYeOjX0tMMKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAjHalkBKMZWz8f4Aq3ANfc1r1fOr1LbibmAuOjyhToQtYJ225O6O5aAyEN9jaIMJ2owwY3axsZPjVyaZKg1MpMvnECQRsCORoq06%2BvlZ0tKbLD8EkEZt7ja3dpTFuyXucB6Pe9fYfERpV%2BAyLHdMLUYfnCqM5cyXTKQYHO%2FXJXjyl9RjtHWoR1uu3q1q9M9V1BtKz0SFezRfx65aIfnBVPVaFIuP2Iewr2x7a0E5kBmceZhhjOb%2BfjK5kfg1CeG02oUbC%2BQHti7Yn1m%2FwvTP%2ByKH%2F%2FElwafYKOe1rhYNRs7So8Cr1WjrV0Kl%2FlxOlxm7cLupVQE47B7GjoWilvdRvGN%2BtfPoABk%2F7wxZKQht6nSYHbHdskUSzBrMfnV0isv%2Fx1mMOLCJYXU4ssFRMb8xPokE1blrITeUsZGrdNvuTlmG2WL4WwLWscYKtARo8%2Bi1ZloXLN2JiO%2F9CjVCrxNLikvmwnPzfdfl68OKGQcPuFD%2FFCqy4Z9egfyliX%2BL3TNxsmAas7B1bluWpBkGKR7%2BN9KKvy6YE1tBRCuLBL0cdlEQXXJnSwxLFjQBi1wJMhbImlKJ3Z8JQx37D5pADSisi7MR%2BWsXDPHFai9K2uZrvxD7YzDuOteBw2IT3%2FT6UtGbllzPURfyeQMAvjDD4sazBBjqkAZqkQSOfhaPo7sdaJxwJEwFNRaGp4bwdqMEv57AquRzOzAre5QWzuYrQzUWntvqqaEDCF4Z0yB5Qvkjpc2oMJVmDM%2B5d0cZ1kwPErZfjHXFdAEVVjJo2OXhwQzHG80s6e3msmTyj4AZsnRKJbdX23Ca5GFf8Ea3HOLbkLXChbQboc69uOd63pgW8qSVjMZh0Bs%2BbC%2FhC0uJRwy1JxQe4Awk8xQet&X-Amz-Signature=48e92b538e95e3d7bcf1d2c560ee2291c8f5568390df6a60ab59b9904bcbb205&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
