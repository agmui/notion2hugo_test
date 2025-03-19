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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPBY67T%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIBCayCBHwZ6bUS41tW2XqbzJLPLhaE3Pt4wUYHne8riMAiAgr3fzHxcih8sBYqlDb6cxqL0t3PMxMnYsBlxP3kF6Myr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMeEovYJdHg5xmjXT1KtwDQaoydtgbmoi0iB5cMSsHSgO6i85H2n0ydvA9WlFG2q6qvBj0ynNmFNl5hyZEA85%2BZw7nKjP4MBrFp2X4hvae83zwrQlEFQhPwvPdYynpcZaMPCcOu09cqPf5fLV2X8YbuVTbISfTT4Nt%2F0kqm8EVYY012nZU6JCMY79GmG7BbdOnWgVEeHzy%2F4d%2BG3t6bNPdoGUv9k028ZRZIkcM4GlR0ePW88IJxcJJU%2BVxYcXeSTz6S4CZ0cMZ18YAJAeB7PPLpq7aIUoW%2Be6uhTcXE2mTX9%2B%2FEdbkW342hmxNc%2BQ49U7l9n8gtFwBCb8rzzVhDYg63VX7RrLa7SsmlTPh1oP5gxPyylevaBTVUxI7JXqtE2U%2BowrOy3x2h5eqyvJg14rKjLbgkUgu61WGYvytr8wvPrsfOgqQEE0deus%2FFFwFy6VtT%2F7ZTdwJGcyyRCatBmoYoYxL13ETS%2FEQgYB32FyTNoVaPONQ8A4OLMA2SYHnolw8gAYQ063aQOOPzDnPt2ZQw0dQVRderQCEyuhh0I73jvKXao7B9n5AoBwX9xkZM7C4MlpHfRJOgphDxYgHQrRGeemEaT90k%2B68neCr9Een5BoMSgUdYkX0wyuatCryAm8qX8%2Bt5E8tayIO7u8wntnsvgY6pgGFmqWxoGH6IOb%2BEAKtBFzNRcX3T0eytDQ%2B0L0G9Hg95SOs3kSWKhgtqkaz2uRoXtrONCJ%2Br7E%2BICMjCKpbjxZn6uTVrODnH%2FHKZwUTAvuwoqbPF0XP80NjKFu%2FeEO6aGqrLLXV7rAm064fAUREJmqOVAtmCvKIXX5jbm8Xb2iHYeuI9vkgWXodGJ5OJuBseWcotPrRjsJyxo%2BZHE%2FrtQswt8g57yb1&X-Amz-Signature=8648b651d1292c91c0521a588c5dd5608ee6a52b1d45fd743a7964063d0e9602&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPBY67T%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIBCayCBHwZ6bUS41tW2XqbzJLPLhaE3Pt4wUYHne8riMAiAgr3fzHxcih8sBYqlDb6cxqL0t3PMxMnYsBlxP3kF6Myr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMeEovYJdHg5xmjXT1KtwDQaoydtgbmoi0iB5cMSsHSgO6i85H2n0ydvA9WlFG2q6qvBj0ynNmFNl5hyZEA85%2BZw7nKjP4MBrFp2X4hvae83zwrQlEFQhPwvPdYynpcZaMPCcOu09cqPf5fLV2X8YbuVTbISfTT4Nt%2F0kqm8EVYY012nZU6JCMY79GmG7BbdOnWgVEeHzy%2F4d%2BG3t6bNPdoGUv9k028ZRZIkcM4GlR0ePW88IJxcJJU%2BVxYcXeSTz6S4CZ0cMZ18YAJAeB7PPLpq7aIUoW%2Be6uhTcXE2mTX9%2B%2FEdbkW342hmxNc%2BQ49U7l9n8gtFwBCb8rzzVhDYg63VX7RrLa7SsmlTPh1oP5gxPyylevaBTVUxI7JXqtE2U%2BowrOy3x2h5eqyvJg14rKjLbgkUgu61WGYvytr8wvPrsfOgqQEE0deus%2FFFwFy6VtT%2F7ZTdwJGcyyRCatBmoYoYxL13ETS%2FEQgYB32FyTNoVaPONQ8A4OLMA2SYHnolw8gAYQ063aQOOPzDnPt2ZQw0dQVRderQCEyuhh0I73jvKXao7B9n5AoBwX9xkZM7C4MlpHfRJOgphDxYgHQrRGeemEaT90k%2B68neCr9Een5BoMSgUdYkX0wyuatCryAm8qX8%2Bt5E8tayIO7u8wntnsvgY6pgGFmqWxoGH6IOb%2BEAKtBFzNRcX3T0eytDQ%2B0L0G9Hg95SOs3kSWKhgtqkaz2uRoXtrONCJ%2Br7E%2BICMjCKpbjxZn6uTVrODnH%2FHKZwUTAvuwoqbPF0XP80NjKFu%2FeEO6aGqrLLXV7rAm064fAUREJmqOVAtmCvKIXX5jbm8Xb2iHYeuI9vkgWXodGJ5OJuBseWcotPrRjsJyxo%2BZHE%2FrtQswt8g57yb1&X-Amz-Signature=ac52669f795dca9cf31d8aeb5b64dbb22723a2bc9d0aed497b05d90332048b82&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPBY67T%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIBCayCBHwZ6bUS41tW2XqbzJLPLhaE3Pt4wUYHne8riMAiAgr3fzHxcih8sBYqlDb6cxqL0t3PMxMnYsBlxP3kF6Myr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMeEovYJdHg5xmjXT1KtwDQaoydtgbmoi0iB5cMSsHSgO6i85H2n0ydvA9WlFG2q6qvBj0ynNmFNl5hyZEA85%2BZw7nKjP4MBrFp2X4hvae83zwrQlEFQhPwvPdYynpcZaMPCcOu09cqPf5fLV2X8YbuVTbISfTT4Nt%2F0kqm8EVYY012nZU6JCMY79GmG7BbdOnWgVEeHzy%2F4d%2BG3t6bNPdoGUv9k028ZRZIkcM4GlR0ePW88IJxcJJU%2BVxYcXeSTz6S4CZ0cMZ18YAJAeB7PPLpq7aIUoW%2Be6uhTcXE2mTX9%2B%2FEdbkW342hmxNc%2BQ49U7l9n8gtFwBCb8rzzVhDYg63VX7RrLa7SsmlTPh1oP5gxPyylevaBTVUxI7JXqtE2U%2BowrOy3x2h5eqyvJg14rKjLbgkUgu61WGYvytr8wvPrsfOgqQEE0deus%2FFFwFy6VtT%2F7ZTdwJGcyyRCatBmoYoYxL13ETS%2FEQgYB32FyTNoVaPONQ8A4OLMA2SYHnolw8gAYQ063aQOOPzDnPt2ZQw0dQVRderQCEyuhh0I73jvKXao7B9n5AoBwX9xkZM7C4MlpHfRJOgphDxYgHQrRGeemEaT90k%2B68neCr9Een5BoMSgUdYkX0wyuatCryAm8qX8%2Bt5E8tayIO7u8wntnsvgY6pgGFmqWxoGH6IOb%2BEAKtBFzNRcX3T0eytDQ%2B0L0G9Hg95SOs3kSWKhgtqkaz2uRoXtrONCJ%2Br7E%2BICMjCKpbjxZn6uTVrODnH%2FHKZwUTAvuwoqbPF0XP80NjKFu%2FeEO6aGqrLLXV7rAm064fAUREJmqOVAtmCvKIXX5jbm8Xb2iHYeuI9vkgWXodGJ5OJuBseWcotPrRjsJyxo%2BZHE%2FrtQswt8g57yb1&X-Amz-Signature=6a04c6f1122b541eb583f745f117c25bb9d9fbfbd8e128bd9d3fdcda7ed8c96e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPBY67T%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIBCayCBHwZ6bUS41tW2XqbzJLPLhaE3Pt4wUYHne8riMAiAgr3fzHxcih8sBYqlDb6cxqL0t3PMxMnYsBlxP3kF6Myr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMeEovYJdHg5xmjXT1KtwDQaoydtgbmoi0iB5cMSsHSgO6i85H2n0ydvA9WlFG2q6qvBj0ynNmFNl5hyZEA85%2BZw7nKjP4MBrFp2X4hvae83zwrQlEFQhPwvPdYynpcZaMPCcOu09cqPf5fLV2X8YbuVTbISfTT4Nt%2F0kqm8EVYY012nZU6JCMY79GmG7BbdOnWgVEeHzy%2F4d%2BG3t6bNPdoGUv9k028ZRZIkcM4GlR0ePW88IJxcJJU%2BVxYcXeSTz6S4CZ0cMZ18YAJAeB7PPLpq7aIUoW%2Be6uhTcXE2mTX9%2B%2FEdbkW342hmxNc%2BQ49U7l9n8gtFwBCb8rzzVhDYg63VX7RrLa7SsmlTPh1oP5gxPyylevaBTVUxI7JXqtE2U%2BowrOy3x2h5eqyvJg14rKjLbgkUgu61WGYvytr8wvPrsfOgqQEE0deus%2FFFwFy6VtT%2F7ZTdwJGcyyRCatBmoYoYxL13ETS%2FEQgYB32FyTNoVaPONQ8A4OLMA2SYHnolw8gAYQ063aQOOPzDnPt2ZQw0dQVRderQCEyuhh0I73jvKXao7B9n5AoBwX9xkZM7C4MlpHfRJOgphDxYgHQrRGeemEaT90k%2B68neCr9Een5BoMSgUdYkX0wyuatCryAm8qX8%2Bt5E8tayIO7u8wntnsvgY6pgGFmqWxoGH6IOb%2BEAKtBFzNRcX3T0eytDQ%2B0L0G9Hg95SOs3kSWKhgtqkaz2uRoXtrONCJ%2Br7E%2BICMjCKpbjxZn6uTVrODnH%2FHKZwUTAvuwoqbPF0XP80NjKFu%2FeEO6aGqrLLXV7rAm064fAUREJmqOVAtmCvKIXX5jbm8Xb2iHYeuI9vkgWXodGJ5OJuBseWcotPrRjsJyxo%2BZHE%2FrtQswt8g57yb1&X-Amz-Signature=a2ee0f4ae8901b26d240dae1e8eee79ad4b3dd2705f2916cfae8a5ffe0c4d3eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPBY67T%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIBCayCBHwZ6bUS41tW2XqbzJLPLhaE3Pt4wUYHne8riMAiAgr3fzHxcih8sBYqlDb6cxqL0t3PMxMnYsBlxP3kF6Myr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMeEovYJdHg5xmjXT1KtwDQaoydtgbmoi0iB5cMSsHSgO6i85H2n0ydvA9WlFG2q6qvBj0ynNmFNl5hyZEA85%2BZw7nKjP4MBrFp2X4hvae83zwrQlEFQhPwvPdYynpcZaMPCcOu09cqPf5fLV2X8YbuVTbISfTT4Nt%2F0kqm8EVYY012nZU6JCMY79GmG7BbdOnWgVEeHzy%2F4d%2BG3t6bNPdoGUv9k028ZRZIkcM4GlR0ePW88IJxcJJU%2BVxYcXeSTz6S4CZ0cMZ18YAJAeB7PPLpq7aIUoW%2Be6uhTcXE2mTX9%2B%2FEdbkW342hmxNc%2BQ49U7l9n8gtFwBCb8rzzVhDYg63VX7RrLa7SsmlTPh1oP5gxPyylevaBTVUxI7JXqtE2U%2BowrOy3x2h5eqyvJg14rKjLbgkUgu61WGYvytr8wvPrsfOgqQEE0deus%2FFFwFy6VtT%2F7ZTdwJGcyyRCatBmoYoYxL13ETS%2FEQgYB32FyTNoVaPONQ8A4OLMA2SYHnolw8gAYQ063aQOOPzDnPt2ZQw0dQVRderQCEyuhh0I73jvKXao7B9n5AoBwX9xkZM7C4MlpHfRJOgphDxYgHQrRGeemEaT90k%2B68neCr9Een5BoMSgUdYkX0wyuatCryAm8qX8%2Bt5E8tayIO7u8wntnsvgY6pgGFmqWxoGH6IOb%2BEAKtBFzNRcX3T0eytDQ%2B0L0G9Hg95SOs3kSWKhgtqkaz2uRoXtrONCJ%2Br7E%2BICMjCKpbjxZn6uTVrODnH%2FHKZwUTAvuwoqbPF0XP80NjKFu%2FeEO6aGqrLLXV7rAm064fAUREJmqOVAtmCvKIXX5jbm8Xb2iHYeuI9vkgWXodGJ5OJuBseWcotPrRjsJyxo%2BZHE%2FrtQswt8g57yb1&X-Amz-Signature=a36c0d2a78acbc1a174c8d5a3497db032492939ada3e4bdc3f4ed23c8223e788&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
