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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y3267MT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDN2dDoTcb8uSMnKlGrynDGD%2FCGQDhRn3U%2Fi%2BxAEYXNQgIgA5HvTgIeLdHnfi4MZp8eD%2FueY2XQrWKUGtbfMLzn0vIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvMJtKyRI5QxMDnfyrcA8sAQ5dQFhIy%2F86AqTT7sUb%2FCDMBBYub7%2FXD62WA1r83jzv8V1izzLnL%2Bk3SKEQ3BCsyAqFqWKqwn0kWgbDNSamvbVGq0WTHNLtbYAPHOsIqiOUxnqN2ev3kcp2wrDMMkGXL2sd5EK%2FGMts9hhrPA%2FPpgR7M4IkWFWS0nXdbM8gbd7a0oaKk4fWELbU695h39h4nokyNd%2F0viRhD8ee4m62ZZYDf3a0xHgTZRGQWxgrAaXr4gTlxjNDshS5MOkok2C25uMLxDet468z%2FO4j7ApbDnjL8RciJeK4clsjb%2BkVfTlD2a%2BX3FMwHVZdfJU6xMetq5DzfUB2rT16sFRUxAUXma%2BamK5cGubVrQTlX8kf49fmrUxffhD1yNM7iq9KZ4dfdbuJhOtFr4cVNERWMENAB5I%2BguSxVv1bkmiwgPKIXOMbKhwEft4qGt6p3XuYKvyAzOuGUpDoP7CpIkZAbU%2BNSYE4cENl37EYrURrJoPr0CmzM%2FsAR7xAOFzZ2vj%2B84eqbBmBRO9fzQ%2FFN%2F8NTsA3MBg%2B3ctQgNBgUChQewzpTMxi6Zy%2BGsVjMIhrpVKV6efR9GJV6AsbQZcNw3vZoSely44bdE64iPAXxhj78Hh42VfqUutGfhxm%2Ffp32MNf7ncQGOqUB20cncMIVerCJvzn9sE33QgQCkXNzNWweQITE7Gh1LkDTJ1X5sz70FobJfT8YvgqdnYx3WhW1qgi2DCqkwlgwlcSpX8Q%2FBOWtWXLmYKQyypkjbcoZZ8ty8cEYqO%2FFzWFD%2FfjinZFOO%2FXESvjaQJl8vaj5sh5LzMGo7VJnoxDY8Pr94BTnr5IKp9jp9T8wzJdf5IMutc4qPkZbCxYu3ynmQlP6qozs&X-Amz-Signature=87eea97a101c2e8d27a7bc08cd90946cb9f76e9d30535078f595d5353296b8da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y3267MT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDN2dDoTcb8uSMnKlGrynDGD%2FCGQDhRn3U%2Fi%2BxAEYXNQgIgA5HvTgIeLdHnfi4MZp8eD%2FueY2XQrWKUGtbfMLzn0vIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvMJtKyRI5QxMDnfyrcA8sAQ5dQFhIy%2F86AqTT7sUb%2FCDMBBYub7%2FXD62WA1r83jzv8V1izzLnL%2Bk3SKEQ3BCsyAqFqWKqwn0kWgbDNSamvbVGq0WTHNLtbYAPHOsIqiOUxnqN2ev3kcp2wrDMMkGXL2sd5EK%2FGMts9hhrPA%2FPpgR7M4IkWFWS0nXdbM8gbd7a0oaKk4fWELbU695h39h4nokyNd%2F0viRhD8ee4m62ZZYDf3a0xHgTZRGQWxgrAaXr4gTlxjNDshS5MOkok2C25uMLxDet468z%2FO4j7ApbDnjL8RciJeK4clsjb%2BkVfTlD2a%2BX3FMwHVZdfJU6xMetq5DzfUB2rT16sFRUxAUXma%2BamK5cGubVrQTlX8kf49fmrUxffhD1yNM7iq9KZ4dfdbuJhOtFr4cVNERWMENAB5I%2BguSxVv1bkmiwgPKIXOMbKhwEft4qGt6p3XuYKvyAzOuGUpDoP7CpIkZAbU%2BNSYE4cENl37EYrURrJoPr0CmzM%2FsAR7xAOFzZ2vj%2B84eqbBmBRO9fzQ%2FFN%2F8NTsA3MBg%2B3ctQgNBgUChQewzpTMxi6Zy%2BGsVjMIhrpVKV6efR9GJV6AsbQZcNw3vZoSely44bdE64iPAXxhj78Hh42VfqUutGfhxm%2Ffp32MNf7ncQGOqUB20cncMIVerCJvzn9sE33QgQCkXNzNWweQITE7Gh1LkDTJ1X5sz70FobJfT8YvgqdnYx3WhW1qgi2DCqkwlgwlcSpX8Q%2FBOWtWXLmYKQyypkjbcoZZ8ty8cEYqO%2FFzWFD%2FfjinZFOO%2FXESvjaQJl8vaj5sh5LzMGo7VJnoxDY8Pr94BTnr5IKp9jp9T8wzJdf5IMutc4qPkZbCxYu3ynmQlP6qozs&X-Amz-Signature=f5c4c9abc6cfe333589c5568a425d78cc83e830e631db92da26c0d1e8f76f2c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y3267MT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDN2dDoTcb8uSMnKlGrynDGD%2FCGQDhRn3U%2Fi%2BxAEYXNQgIgA5HvTgIeLdHnfi4MZp8eD%2FueY2XQrWKUGtbfMLzn0vIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvMJtKyRI5QxMDnfyrcA8sAQ5dQFhIy%2F86AqTT7sUb%2FCDMBBYub7%2FXD62WA1r83jzv8V1izzLnL%2Bk3SKEQ3BCsyAqFqWKqwn0kWgbDNSamvbVGq0WTHNLtbYAPHOsIqiOUxnqN2ev3kcp2wrDMMkGXL2sd5EK%2FGMts9hhrPA%2FPpgR7M4IkWFWS0nXdbM8gbd7a0oaKk4fWELbU695h39h4nokyNd%2F0viRhD8ee4m62ZZYDf3a0xHgTZRGQWxgrAaXr4gTlxjNDshS5MOkok2C25uMLxDet468z%2FO4j7ApbDnjL8RciJeK4clsjb%2BkVfTlD2a%2BX3FMwHVZdfJU6xMetq5DzfUB2rT16sFRUxAUXma%2BamK5cGubVrQTlX8kf49fmrUxffhD1yNM7iq9KZ4dfdbuJhOtFr4cVNERWMENAB5I%2BguSxVv1bkmiwgPKIXOMbKhwEft4qGt6p3XuYKvyAzOuGUpDoP7CpIkZAbU%2BNSYE4cENl37EYrURrJoPr0CmzM%2FsAR7xAOFzZ2vj%2B84eqbBmBRO9fzQ%2FFN%2F8NTsA3MBg%2B3ctQgNBgUChQewzpTMxi6Zy%2BGsVjMIhrpVKV6efR9GJV6AsbQZcNw3vZoSely44bdE64iPAXxhj78Hh42VfqUutGfhxm%2Ffp32MNf7ncQGOqUB20cncMIVerCJvzn9sE33QgQCkXNzNWweQITE7Gh1LkDTJ1X5sz70FobJfT8YvgqdnYx3WhW1qgi2DCqkwlgwlcSpX8Q%2FBOWtWXLmYKQyypkjbcoZZ8ty8cEYqO%2FFzWFD%2FfjinZFOO%2FXESvjaQJl8vaj5sh5LzMGo7VJnoxDY8Pr94BTnr5IKp9jp9T8wzJdf5IMutc4qPkZbCxYu3ynmQlP6qozs&X-Amz-Signature=92a1357dde5da0130f5d289ebd9f0bb01d0113e6d999c5ed4161c71a7449e52f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y3267MT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDN2dDoTcb8uSMnKlGrynDGD%2FCGQDhRn3U%2Fi%2BxAEYXNQgIgA5HvTgIeLdHnfi4MZp8eD%2FueY2XQrWKUGtbfMLzn0vIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvMJtKyRI5QxMDnfyrcA8sAQ5dQFhIy%2F86AqTT7sUb%2FCDMBBYub7%2FXD62WA1r83jzv8V1izzLnL%2Bk3SKEQ3BCsyAqFqWKqwn0kWgbDNSamvbVGq0WTHNLtbYAPHOsIqiOUxnqN2ev3kcp2wrDMMkGXL2sd5EK%2FGMts9hhrPA%2FPpgR7M4IkWFWS0nXdbM8gbd7a0oaKk4fWELbU695h39h4nokyNd%2F0viRhD8ee4m62ZZYDf3a0xHgTZRGQWxgrAaXr4gTlxjNDshS5MOkok2C25uMLxDet468z%2FO4j7ApbDnjL8RciJeK4clsjb%2BkVfTlD2a%2BX3FMwHVZdfJU6xMetq5DzfUB2rT16sFRUxAUXma%2BamK5cGubVrQTlX8kf49fmrUxffhD1yNM7iq9KZ4dfdbuJhOtFr4cVNERWMENAB5I%2BguSxVv1bkmiwgPKIXOMbKhwEft4qGt6p3XuYKvyAzOuGUpDoP7CpIkZAbU%2BNSYE4cENl37EYrURrJoPr0CmzM%2FsAR7xAOFzZ2vj%2B84eqbBmBRO9fzQ%2FFN%2F8NTsA3MBg%2B3ctQgNBgUChQewzpTMxi6Zy%2BGsVjMIhrpVKV6efR9GJV6AsbQZcNw3vZoSely44bdE64iPAXxhj78Hh42VfqUutGfhxm%2Ffp32MNf7ncQGOqUB20cncMIVerCJvzn9sE33QgQCkXNzNWweQITE7Gh1LkDTJ1X5sz70FobJfT8YvgqdnYx3WhW1qgi2DCqkwlgwlcSpX8Q%2FBOWtWXLmYKQyypkjbcoZZ8ty8cEYqO%2FFzWFD%2FfjinZFOO%2FXESvjaQJl8vaj5sh5LzMGo7VJnoxDY8Pr94BTnr5IKp9jp9T8wzJdf5IMutc4qPkZbCxYu3ynmQlP6qozs&X-Amz-Signature=2dc8316f4299b21c5bb927da2cc03d093774450108f95b2c47c9a8e8db33c155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y3267MT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDN2dDoTcb8uSMnKlGrynDGD%2FCGQDhRn3U%2Fi%2BxAEYXNQgIgA5HvTgIeLdHnfi4MZp8eD%2FueY2XQrWKUGtbfMLzn0vIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvMJtKyRI5QxMDnfyrcA8sAQ5dQFhIy%2F86AqTT7sUb%2FCDMBBYub7%2FXD62WA1r83jzv8V1izzLnL%2Bk3SKEQ3BCsyAqFqWKqwn0kWgbDNSamvbVGq0WTHNLtbYAPHOsIqiOUxnqN2ev3kcp2wrDMMkGXL2sd5EK%2FGMts9hhrPA%2FPpgR7M4IkWFWS0nXdbM8gbd7a0oaKk4fWELbU695h39h4nokyNd%2F0viRhD8ee4m62ZZYDf3a0xHgTZRGQWxgrAaXr4gTlxjNDshS5MOkok2C25uMLxDet468z%2FO4j7ApbDnjL8RciJeK4clsjb%2BkVfTlD2a%2BX3FMwHVZdfJU6xMetq5DzfUB2rT16sFRUxAUXma%2BamK5cGubVrQTlX8kf49fmrUxffhD1yNM7iq9KZ4dfdbuJhOtFr4cVNERWMENAB5I%2BguSxVv1bkmiwgPKIXOMbKhwEft4qGt6p3XuYKvyAzOuGUpDoP7CpIkZAbU%2BNSYE4cENl37EYrURrJoPr0CmzM%2FsAR7xAOFzZ2vj%2B84eqbBmBRO9fzQ%2FFN%2F8NTsA3MBg%2B3ctQgNBgUChQewzpTMxi6Zy%2BGsVjMIhrpVKV6efR9GJV6AsbQZcNw3vZoSely44bdE64iPAXxhj78Hh42VfqUutGfhxm%2Ffp32MNf7ncQGOqUB20cncMIVerCJvzn9sE33QgQCkXNzNWweQITE7Gh1LkDTJ1X5sz70FobJfT8YvgqdnYx3WhW1qgi2DCqkwlgwlcSpX8Q%2FBOWtWXLmYKQyypkjbcoZZ8ty8cEYqO%2FFzWFD%2FfjinZFOO%2FXESvjaQJl8vaj5sh5LzMGo7VJnoxDY8Pr94BTnr5IKp9jp9T8wzJdf5IMutc4qPkZbCxYu3ynmQlP6qozs&X-Amz-Signature=61394943c21073481228204da0cf9d1847fe31eb36acfdf475559b31612ed60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
