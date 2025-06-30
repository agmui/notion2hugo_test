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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CEGEIP3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHB7Dm8sJSajApzFEr4nynwHQwbJ4xrAmvye1fpCOzbXAiADNKZ%2F9Q%2BebIHcT9KLHI0iJUXzYXfNPLFF9dXlQcSHxCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMADzVs%2FoYHGWybFZSKtwDf2DtloGgTidoK3U90wD0YYFxSXW3z98tAeVgWRk64kBgHevAY502Prs9mc%2BkxSoBAzUB5YwJpUtwrJ70gLAkKy3zYPVHUNWrnkUSVwpIPRtH89PRtA4MGeSPmWSaaJvrUIOmN3WaK24j7P19hdCjKbPhtOHfeEsbHG6lxhIdFn%2BCcyifZ0OdafpIuOmmrpnr31Yb61cqUQRzu3e6hOqg7%2FPCbLurFbe1EwlpqXgx5aHpff1hA7qDXKc7LQzG2kqK7NhXqdQP7nz9K0t%2FkR2GPnM13znXD59USA7aWwR9E53cmafKWQzqzesEfdRxXa1lWKevWk80o0MwKSnC30QAQYh7aYUQ8Pm8yhhrq02dUTqL%2BqjYCH%2B45oAgJ9SL%2BL8wTiwI1t0enfTSumiQWkQscbZCWV0lZZrVp4hOpF%2F6YbS0e%2FDKK1OWbjh9KLKpvRYGZasPHh4I61nL5BMJt9MpJ4sjKlf8E2gY10n6UI%2BPorrWr23NajvrG1780ejvtUVoXpMAdSGMyfjtUwTzhMlM2tDq0cJc2s36T9LBIf0XE%2BAxTqit09tinfkZILdznjXrqkNrRNZD0FpK7OAKZvLdOuJmdyZ66kEHg%2Fp56yAmHaL2g17zdTA363u%2FP08wmuuKwwY6pgFyTiDWheALAnS%2B68Hv6zS%2B5C6SDaLZZ5LQDDDrmOZfSO3iyB19Zxx1CLeMHBc4a9ayTfl6vELSLyATq1cZypGUoPsL2GElS4Y%2F%2Br11MR1PuSkw2nhlJgekxRLXpFvY33jFlwE2plU%2FjK7rvvciIl6XPG23zwcBX0IIhVhDSVLou%2BSly66WOvaXW1jZqstiMzONwvz05WVjByb1%2FOMqyA%2FETQ%2BCuDL2&X-Amz-Signature=0187e7555166c12049c3d490c4a9782fbd43e704f29b7e1620b11a520229f064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CEGEIP3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHB7Dm8sJSajApzFEr4nynwHQwbJ4xrAmvye1fpCOzbXAiADNKZ%2F9Q%2BebIHcT9KLHI0iJUXzYXfNPLFF9dXlQcSHxCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMADzVs%2FoYHGWybFZSKtwDf2DtloGgTidoK3U90wD0YYFxSXW3z98tAeVgWRk64kBgHevAY502Prs9mc%2BkxSoBAzUB5YwJpUtwrJ70gLAkKy3zYPVHUNWrnkUSVwpIPRtH89PRtA4MGeSPmWSaaJvrUIOmN3WaK24j7P19hdCjKbPhtOHfeEsbHG6lxhIdFn%2BCcyifZ0OdafpIuOmmrpnr31Yb61cqUQRzu3e6hOqg7%2FPCbLurFbe1EwlpqXgx5aHpff1hA7qDXKc7LQzG2kqK7NhXqdQP7nz9K0t%2FkR2GPnM13znXD59USA7aWwR9E53cmafKWQzqzesEfdRxXa1lWKevWk80o0MwKSnC30QAQYh7aYUQ8Pm8yhhrq02dUTqL%2BqjYCH%2B45oAgJ9SL%2BL8wTiwI1t0enfTSumiQWkQscbZCWV0lZZrVp4hOpF%2F6YbS0e%2FDKK1OWbjh9KLKpvRYGZasPHh4I61nL5BMJt9MpJ4sjKlf8E2gY10n6UI%2BPorrWr23NajvrG1780ejvtUVoXpMAdSGMyfjtUwTzhMlM2tDq0cJc2s36T9LBIf0XE%2BAxTqit09tinfkZILdznjXrqkNrRNZD0FpK7OAKZvLdOuJmdyZ66kEHg%2Fp56yAmHaL2g17zdTA363u%2FP08wmuuKwwY6pgFyTiDWheALAnS%2B68Hv6zS%2B5C6SDaLZZ5LQDDDrmOZfSO3iyB19Zxx1CLeMHBc4a9ayTfl6vELSLyATq1cZypGUoPsL2GElS4Y%2F%2Br11MR1PuSkw2nhlJgekxRLXpFvY33jFlwE2plU%2FjK7rvvciIl6XPG23zwcBX0IIhVhDSVLou%2BSly66WOvaXW1jZqstiMzONwvz05WVjByb1%2FOMqyA%2FETQ%2BCuDL2&X-Amz-Signature=cf4ab1e7740e614ae6a557bc04ec78bb3d7ecdb4b103d32ec955608873c6be9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CEGEIP3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHB7Dm8sJSajApzFEr4nynwHQwbJ4xrAmvye1fpCOzbXAiADNKZ%2F9Q%2BebIHcT9KLHI0iJUXzYXfNPLFF9dXlQcSHxCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMADzVs%2FoYHGWybFZSKtwDf2DtloGgTidoK3U90wD0YYFxSXW3z98tAeVgWRk64kBgHevAY502Prs9mc%2BkxSoBAzUB5YwJpUtwrJ70gLAkKy3zYPVHUNWrnkUSVwpIPRtH89PRtA4MGeSPmWSaaJvrUIOmN3WaK24j7P19hdCjKbPhtOHfeEsbHG6lxhIdFn%2BCcyifZ0OdafpIuOmmrpnr31Yb61cqUQRzu3e6hOqg7%2FPCbLurFbe1EwlpqXgx5aHpff1hA7qDXKc7LQzG2kqK7NhXqdQP7nz9K0t%2FkR2GPnM13znXD59USA7aWwR9E53cmafKWQzqzesEfdRxXa1lWKevWk80o0MwKSnC30QAQYh7aYUQ8Pm8yhhrq02dUTqL%2BqjYCH%2B45oAgJ9SL%2BL8wTiwI1t0enfTSumiQWkQscbZCWV0lZZrVp4hOpF%2F6YbS0e%2FDKK1OWbjh9KLKpvRYGZasPHh4I61nL5BMJt9MpJ4sjKlf8E2gY10n6UI%2BPorrWr23NajvrG1780ejvtUVoXpMAdSGMyfjtUwTzhMlM2tDq0cJc2s36T9LBIf0XE%2BAxTqit09tinfkZILdznjXrqkNrRNZD0FpK7OAKZvLdOuJmdyZ66kEHg%2Fp56yAmHaL2g17zdTA363u%2FP08wmuuKwwY6pgFyTiDWheALAnS%2B68Hv6zS%2B5C6SDaLZZ5LQDDDrmOZfSO3iyB19Zxx1CLeMHBc4a9ayTfl6vELSLyATq1cZypGUoPsL2GElS4Y%2F%2Br11MR1PuSkw2nhlJgekxRLXpFvY33jFlwE2plU%2FjK7rvvciIl6XPG23zwcBX0IIhVhDSVLou%2BSly66WOvaXW1jZqstiMzONwvz05WVjByb1%2FOMqyA%2FETQ%2BCuDL2&X-Amz-Signature=3b2a1c8a4598f17bb86fb609d31f2247f1060becb0b6a755cec1752ab5575f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CEGEIP3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHB7Dm8sJSajApzFEr4nynwHQwbJ4xrAmvye1fpCOzbXAiADNKZ%2F9Q%2BebIHcT9KLHI0iJUXzYXfNPLFF9dXlQcSHxCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMADzVs%2FoYHGWybFZSKtwDf2DtloGgTidoK3U90wD0YYFxSXW3z98tAeVgWRk64kBgHevAY502Prs9mc%2BkxSoBAzUB5YwJpUtwrJ70gLAkKy3zYPVHUNWrnkUSVwpIPRtH89PRtA4MGeSPmWSaaJvrUIOmN3WaK24j7P19hdCjKbPhtOHfeEsbHG6lxhIdFn%2BCcyifZ0OdafpIuOmmrpnr31Yb61cqUQRzu3e6hOqg7%2FPCbLurFbe1EwlpqXgx5aHpff1hA7qDXKc7LQzG2kqK7NhXqdQP7nz9K0t%2FkR2GPnM13znXD59USA7aWwR9E53cmafKWQzqzesEfdRxXa1lWKevWk80o0MwKSnC30QAQYh7aYUQ8Pm8yhhrq02dUTqL%2BqjYCH%2B45oAgJ9SL%2BL8wTiwI1t0enfTSumiQWkQscbZCWV0lZZrVp4hOpF%2F6YbS0e%2FDKK1OWbjh9KLKpvRYGZasPHh4I61nL5BMJt9MpJ4sjKlf8E2gY10n6UI%2BPorrWr23NajvrG1780ejvtUVoXpMAdSGMyfjtUwTzhMlM2tDq0cJc2s36T9LBIf0XE%2BAxTqit09tinfkZILdznjXrqkNrRNZD0FpK7OAKZvLdOuJmdyZ66kEHg%2Fp56yAmHaL2g17zdTA363u%2FP08wmuuKwwY6pgFyTiDWheALAnS%2B68Hv6zS%2B5C6SDaLZZ5LQDDDrmOZfSO3iyB19Zxx1CLeMHBc4a9ayTfl6vELSLyATq1cZypGUoPsL2GElS4Y%2F%2Br11MR1PuSkw2nhlJgekxRLXpFvY33jFlwE2plU%2FjK7rvvciIl6XPG23zwcBX0IIhVhDSVLou%2BSly66WOvaXW1jZqstiMzONwvz05WVjByb1%2FOMqyA%2FETQ%2BCuDL2&X-Amz-Signature=be31916c044fd572f2c4f9e0db8d7fc0836aaeb67fb5cd974b90e493d58a8313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CEGEIP3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHB7Dm8sJSajApzFEr4nynwHQwbJ4xrAmvye1fpCOzbXAiADNKZ%2F9Q%2BebIHcT9KLHI0iJUXzYXfNPLFF9dXlQcSHxCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMADzVs%2FoYHGWybFZSKtwDf2DtloGgTidoK3U90wD0YYFxSXW3z98tAeVgWRk64kBgHevAY502Prs9mc%2BkxSoBAzUB5YwJpUtwrJ70gLAkKy3zYPVHUNWrnkUSVwpIPRtH89PRtA4MGeSPmWSaaJvrUIOmN3WaK24j7P19hdCjKbPhtOHfeEsbHG6lxhIdFn%2BCcyifZ0OdafpIuOmmrpnr31Yb61cqUQRzu3e6hOqg7%2FPCbLurFbe1EwlpqXgx5aHpff1hA7qDXKc7LQzG2kqK7NhXqdQP7nz9K0t%2FkR2GPnM13znXD59USA7aWwR9E53cmafKWQzqzesEfdRxXa1lWKevWk80o0MwKSnC30QAQYh7aYUQ8Pm8yhhrq02dUTqL%2BqjYCH%2B45oAgJ9SL%2BL8wTiwI1t0enfTSumiQWkQscbZCWV0lZZrVp4hOpF%2F6YbS0e%2FDKK1OWbjh9KLKpvRYGZasPHh4I61nL5BMJt9MpJ4sjKlf8E2gY10n6UI%2BPorrWr23NajvrG1780ejvtUVoXpMAdSGMyfjtUwTzhMlM2tDq0cJc2s36T9LBIf0XE%2BAxTqit09tinfkZILdznjXrqkNrRNZD0FpK7OAKZvLdOuJmdyZ66kEHg%2Fp56yAmHaL2g17zdTA363u%2FP08wmuuKwwY6pgFyTiDWheALAnS%2B68Hv6zS%2B5C6SDaLZZ5LQDDDrmOZfSO3iyB19Zxx1CLeMHBc4a9ayTfl6vELSLyATq1cZypGUoPsL2GElS4Y%2F%2Br11MR1PuSkw2nhlJgekxRLXpFvY33jFlwE2plU%2FjK7rvvciIl6XPG23zwcBX0IIhVhDSVLou%2BSly66WOvaXW1jZqstiMzONwvz05WVjByb1%2FOMqyA%2FETQ%2BCuDL2&X-Amz-Signature=6679ffc63ec1f50be17c04beaaeb4a730a78e480e1c56782b6bee246e948f7c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
