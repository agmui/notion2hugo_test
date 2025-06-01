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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EN4PS5E%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCTPAULCrm664mGDWGrtF%2BevfsvUrEvb3DltvY8V4KouwIgD8w9lrcTV%2BQnirdHATYq3Ktgld8VFtXnxq%2BFeI%2B9MqAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiAGa5NZG2EMqHjbyrcAwCyON0e8WdTmM4e2Vu8PlXcei%2FoT8Dx41KlQ9rvSnMTb4JCuRiRn2BLjF6WpSeTEgbzbYWIyNL9LRNCIwWh8uw7TeT2fcnTjgV9dWc%2FemZjk2CVzwbfS0jTuCOKlNkG%2FuDwPJ3nMze8cmjC0ukJXdQUsRpWrBEMMNQZVV66ADmNuNjOFsp5Hirz44IsJrd8viLcaZYch42vLMvtVjaKmPVycZ8OD%2BFvjVFZZn3pZeuLbRmhRuRejrKcl5VjvhKPA2Q0WB1tGNGyHCN46gYHxo3FULjDBHinJR7shuI3HegFwpV5MIAWRQfMZ%2BZTH3DfaA%2BzdNgVQ3UiMtSltP%2B9wEdSR%2F0zm2Urp%2BV1iRO1b73tNA4%2BhNYEgEcILtDfNTYJVms46J2JvaTXmTJAyar9V%2B3Q5YkHZUNEuIesILCMr%2BF%2BofmpjMCtK8qG%2FaNSf7EdFOZwdXxeANh9IWiGXvYeIzyOZha9h6VGBnEo5KK3z4xvH%2Bg74WkTh9x0uAdO7yrKv9xaNdJ9Qr1LU%2BOnli%2F0LK70Ecd7SO%2Bjg4sdGBCWPSicbSSXeedMzYJpS3QQGdIAtDtJdMhky0FoHNdo%2BIY9gvrk3GVYrxnOzHja5qEkEfEqqdQxZjSo8UtvEBhGMNfy78EGOqUBBtUplNJ7TybWhU6xcPF4Wug7CrNFvMIpyhmywz0A6T%2FrIgXzG0ix6YU%2FN73dGdaOOKrfyrE3DOw6nbvEk4Groj3k4fQoNtOGUsU8CwemCYg56YREZ4REhj1ufe8XRgOvdHHflZs8CSGmhWQ5TFp4Wsc1c2neR6T87QgznshJEVr1YewLZyPk8i7P52HXjwRv%2BV1b6Xw6Xr%2Fx1HIKB3tR52N7Q0sx&X-Amz-Signature=2a5d9b4c19268569dc7830c8a372a66534305043e20df0ae53af225b8107018d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EN4PS5E%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCTPAULCrm664mGDWGrtF%2BevfsvUrEvb3DltvY8V4KouwIgD8w9lrcTV%2BQnirdHATYq3Ktgld8VFtXnxq%2BFeI%2B9MqAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiAGa5NZG2EMqHjbyrcAwCyON0e8WdTmM4e2Vu8PlXcei%2FoT8Dx41KlQ9rvSnMTb4JCuRiRn2BLjF6WpSeTEgbzbYWIyNL9LRNCIwWh8uw7TeT2fcnTjgV9dWc%2FemZjk2CVzwbfS0jTuCOKlNkG%2FuDwPJ3nMze8cmjC0ukJXdQUsRpWrBEMMNQZVV66ADmNuNjOFsp5Hirz44IsJrd8viLcaZYch42vLMvtVjaKmPVycZ8OD%2BFvjVFZZn3pZeuLbRmhRuRejrKcl5VjvhKPA2Q0WB1tGNGyHCN46gYHxo3FULjDBHinJR7shuI3HegFwpV5MIAWRQfMZ%2BZTH3DfaA%2BzdNgVQ3UiMtSltP%2B9wEdSR%2F0zm2Urp%2BV1iRO1b73tNA4%2BhNYEgEcILtDfNTYJVms46J2JvaTXmTJAyar9V%2B3Q5YkHZUNEuIesILCMr%2BF%2BofmpjMCtK8qG%2FaNSf7EdFOZwdXxeANh9IWiGXvYeIzyOZha9h6VGBnEo5KK3z4xvH%2Bg74WkTh9x0uAdO7yrKv9xaNdJ9Qr1LU%2BOnli%2F0LK70Ecd7SO%2Bjg4sdGBCWPSicbSSXeedMzYJpS3QQGdIAtDtJdMhky0FoHNdo%2BIY9gvrk3GVYrxnOzHja5qEkEfEqqdQxZjSo8UtvEBhGMNfy78EGOqUBBtUplNJ7TybWhU6xcPF4Wug7CrNFvMIpyhmywz0A6T%2FrIgXzG0ix6YU%2FN73dGdaOOKrfyrE3DOw6nbvEk4Groj3k4fQoNtOGUsU8CwemCYg56YREZ4REhj1ufe8XRgOvdHHflZs8CSGmhWQ5TFp4Wsc1c2neR6T87QgznshJEVr1YewLZyPk8i7P52HXjwRv%2BV1b6Xw6Xr%2Fx1HIKB3tR52N7Q0sx&X-Amz-Signature=5b13477d62867bc171ea9eaafa54bb535caa323f562633a6a59c17aaa022c430&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EN4PS5E%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCTPAULCrm664mGDWGrtF%2BevfsvUrEvb3DltvY8V4KouwIgD8w9lrcTV%2BQnirdHATYq3Ktgld8VFtXnxq%2BFeI%2B9MqAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiAGa5NZG2EMqHjbyrcAwCyON0e8WdTmM4e2Vu8PlXcei%2FoT8Dx41KlQ9rvSnMTb4JCuRiRn2BLjF6WpSeTEgbzbYWIyNL9LRNCIwWh8uw7TeT2fcnTjgV9dWc%2FemZjk2CVzwbfS0jTuCOKlNkG%2FuDwPJ3nMze8cmjC0ukJXdQUsRpWrBEMMNQZVV66ADmNuNjOFsp5Hirz44IsJrd8viLcaZYch42vLMvtVjaKmPVycZ8OD%2BFvjVFZZn3pZeuLbRmhRuRejrKcl5VjvhKPA2Q0WB1tGNGyHCN46gYHxo3FULjDBHinJR7shuI3HegFwpV5MIAWRQfMZ%2BZTH3DfaA%2BzdNgVQ3UiMtSltP%2B9wEdSR%2F0zm2Urp%2BV1iRO1b73tNA4%2BhNYEgEcILtDfNTYJVms46J2JvaTXmTJAyar9V%2B3Q5YkHZUNEuIesILCMr%2BF%2BofmpjMCtK8qG%2FaNSf7EdFOZwdXxeANh9IWiGXvYeIzyOZha9h6VGBnEo5KK3z4xvH%2Bg74WkTh9x0uAdO7yrKv9xaNdJ9Qr1LU%2BOnli%2F0LK70Ecd7SO%2Bjg4sdGBCWPSicbSSXeedMzYJpS3QQGdIAtDtJdMhky0FoHNdo%2BIY9gvrk3GVYrxnOzHja5qEkEfEqqdQxZjSo8UtvEBhGMNfy78EGOqUBBtUplNJ7TybWhU6xcPF4Wug7CrNFvMIpyhmywz0A6T%2FrIgXzG0ix6YU%2FN73dGdaOOKrfyrE3DOw6nbvEk4Groj3k4fQoNtOGUsU8CwemCYg56YREZ4REhj1ufe8XRgOvdHHflZs8CSGmhWQ5TFp4Wsc1c2neR6T87QgznshJEVr1YewLZyPk8i7P52HXjwRv%2BV1b6Xw6Xr%2Fx1HIKB3tR52N7Q0sx&X-Amz-Signature=489589e22b858155953be659fd9e7cda0460eaec8109b299b071efd6d1a65c85&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EN4PS5E%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCTPAULCrm664mGDWGrtF%2BevfsvUrEvb3DltvY8V4KouwIgD8w9lrcTV%2BQnirdHATYq3Ktgld8VFtXnxq%2BFeI%2B9MqAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiAGa5NZG2EMqHjbyrcAwCyON0e8WdTmM4e2Vu8PlXcei%2FoT8Dx41KlQ9rvSnMTb4JCuRiRn2BLjF6WpSeTEgbzbYWIyNL9LRNCIwWh8uw7TeT2fcnTjgV9dWc%2FemZjk2CVzwbfS0jTuCOKlNkG%2FuDwPJ3nMze8cmjC0ukJXdQUsRpWrBEMMNQZVV66ADmNuNjOFsp5Hirz44IsJrd8viLcaZYch42vLMvtVjaKmPVycZ8OD%2BFvjVFZZn3pZeuLbRmhRuRejrKcl5VjvhKPA2Q0WB1tGNGyHCN46gYHxo3FULjDBHinJR7shuI3HegFwpV5MIAWRQfMZ%2BZTH3DfaA%2BzdNgVQ3UiMtSltP%2B9wEdSR%2F0zm2Urp%2BV1iRO1b73tNA4%2BhNYEgEcILtDfNTYJVms46J2JvaTXmTJAyar9V%2B3Q5YkHZUNEuIesILCMr%2BF%2BofmpjMCtK8qG%2FaNSf7EdFOZwdXxeANh9IWiGXvYeIzyOZha9h6VGBnEo5KK3z4xvH%2Bg74WkTh9x0uAdO7yrKv9xaNdJ9Qr1LU%2BOnli%2F0LK70Ecd7SO%2Bjg4sdGBCWPSicbSSXeedMzYJpS3QQGdIAtDtJdMhky0FoHNdo%2BIY9gvrk3GVYrxnOzHja5qEkEfEqqdQxZjSo8UtvEBhGMNfy78EGOqUBBtUplNJ7TybWhU6xcPF4Wug7CrNFvMIpyhmywz0A6T%2FrIgXzG0ix6YU%2FN73dGdaOOKrfyrE3DOw6nbvEk4Groj3k4fQoNtOGUsU8CwemCYg56YREZ4REhj1ufe8XRgOvdHHflZs8CSGmhWQ5TFp4Wsc1c2neR6T87QgznshJEVr1YewLZyPk8i7P52HXjwRv%2BV1b6Xw6Xr%2Fx1HIKB3tR52N7Q0sx&X-Amz-Signature=14f98b2789ef470ea365fbc14165da3d357788794afc66c5524badb7084ecbff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EN4PS5E%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCTPAULCrm664mGDWGrtF%2BevfsvUrEvb3DltvY8V4KouwIgD8w9lrcTV%2BQnirdHATYq3Ktgld8VFtXnxq%2BFeI%2B9MqAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiAGa5NZG2EMqHjbyrcAwCyON0e8WdTmM4e2Vu8PlXcei%2FoT8Dx41KlQ9rvSnMTb4JCuRiRn2BLjF6WpSeTEgbzbYWIyNL9LRNCIwWh8uw7TeT2fcnTjgV9dWc%2FemZjk2CVzwbfS0jTuCOKlNkG%2FuDwPJ3nMze8cmjC0ukJXdQUsRpWrBEMMNQZVV66ADmNuNjOFsp5Hirz44IsJrd8viLcaZYch42vLMvtVjaKmPVycZ8OD%2BFvjVFZZn3pZeuLbRmhRuRejrKcl5VjvhKPA2Q0WB1tGNGyHCN46gYHxo3FULjDBHinJR7shuI3HegFwpV5MIAWRQfMZ%2BZTH3DfaA%2BzdNgVQ3UiMtSltP%2B9wEdSR%2F0zm2Urp%2BV1iRO1b73tNA4%2BhNYEgEcILtDfNTYJVms46J2JvaTXmTJAyar9V%2B3Q5YkHZUNEuIesILCMr%2BF%2BofmpjMCtK8qG%2FaNSf7EdFOZwdXxeANh9IWiGXvYeIzyOZha9h6VGBnEo5KK3z4xvH%2Bg74WkTh9x0uAdO7yrKv9xaNdJ9Qr1LU%2BOnli%2F0LK70Ecd7SO%2Bjg4sdGBCWPSicbSSXeedMzYJpS3QQGdIAtDtJdMhky0FoHNdo%2BIY9gvrk3GVYrxnOzHja5qEkEfEqqdQxZjSo8UtvEBhGMNfy78EGOqUBBtUplNJ7TybWhU6xcPF4Wug7CrNFvMIpyhmywz0A6T%2FrIgXzG0ix6YU%2FN73dGdaOOKrfyrE3DOw6nbvEk4Groj3k4fQoNtOGUsU8CwemCYg56YREZ4REhj1ufe8XRgOvdHHflZs8CSGmhWQ5TFp4Wsc1c2neR6T87QgznshJEVr1YewLZyPk8i7P52HXjwRv%2BV1b6Xw6Xr%2Fx1HIKB3tR52N7Q0sx&X-Amz-Signature=662c488489508cbfb324412d8cf4e55a05b068f0cb8431462e538612b66aa0fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
