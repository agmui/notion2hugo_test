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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGXDBIFS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaSGtqoSmI%2Be6BP%2BtvhGshofRgwjK%2Fm31Yh565lbnBhQIhAO%2FcO%2BuDV2KYKP4JEaZibEJxsH8%2FvyP9cuhtbUgduAOCKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUI3Y9oz8iUDUuNBUq3APdV9kYnhkcNCbTLiqyYkdcj9o6NvMIKYoycYWYz5UkxKXLlkl5n8sWVvq2%2FwXxEISF1vnvMVSD08kiHiWxy5V4E1mz4P1OSMbmiI85%2Fm4Q9Aq1lTpkXeX7RWRWly9lMYQsjQLoRpm1JtLdPJ4atb8de7Qugq9IUmeKbLM%2Bk1%2FrWJ2I41%2F4%2BjYrtV0oJOs5l9J53zGe1FmPcBef4lF2K4l2ju3uq%2FfVWwrRNwqC9Ld4cPsKIHXn2gWOuHg%2B6YtZiEjUbxWl6nuc72S7xCRkl4MXsKC4v3JKVvaFfubH9Zf%2FntYsYAEIziQWYztwicFNdApdMXixNH5l3Jr0FgVntqU83cgoTYJINRAIukQ9ZF75r9AEMiGFGuxYOxWERjix93mmNEzU0r2CZzaFCSFFuis3AmOG9DDzzzwuF8ZrXBV9wYIiurYjPnC2PGuDRzcVqqKwqfvjSeodrPmIhomiKloyGn2jFJ1zL7tGSf2ZYWywbir83KBt66nQDRdPE2Fa090d7%2FwiyNsFkEyzhtaSMcwYOTT0C2IPJF0aXUKO2q10kzpnBz%2Bu5JmKAc1qNgA6sqnDTXngMQCFpkm6ukpLx7XCxvWGDoXNkhJFlSC%2FUacKpdzr4YfilhjWnA0VJDDwtfrABjqkAW3F1Pin71EBAK6ZBhHBniXiwuOCIYZSDfVJVkArhdKr35S6175ugo5Y5jS0XThsueqCqdM%2BKzC3U%2BxmGnznj%2BQQtggBaERlc7heAgZQAkSiVDSyO2YfvOIXj2gt9SOlPglc7RMKyWdVxtrErlYWXB%2BtKMsuD1OOkLVFjBfwluHYqhn147XXdN7nTHDuOhNubYfU99JsV2Tv8gTXa28Rf29fOT2A&X-Amz-Signature=ef74c924c0eb284e6f6293cc09e5d5de36c12b942f9c2bf24d22ebd51d2218b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGXDBIFS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaSGtqoSmI%2Be6BP%2BtvhGshofRgwjK%2Fm31Yh565lbnBhQIhAO%2FcO%2BuDV2KYKP4JEaZibEJxsH8%2FvyP9cuhtbUgduAOCKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUI3Y9oz8iUDUuNBUq3APdV9kYnhkcNCbTLiqyYkdcj9o6NvMIKYoycYWYz5UkxKXLlkl5n8sWVvq2%2FwXxEISF1vnvMVSD08kiHiWxy5V4E1mz4P1OSMbmiI85%2Fm4Q9Aq1lTpkXeX7RWRWly9lMYQsjQLoRpm1JtLdPJ4atb8de7Qugq9IUmeKbLM%2Bk1%2FrWJ2I41%2F4%2BjYrtV0oJOs5l9J53zGe1FmPcBef4lF2K4l2ju3uq%2FfVWwrRNwqC9Ld4cPsKIHXn2gWOuHg%2B6YtZiEjUbxWl6nuc72S7xCRkl4MXsKC4v3JKVvaFfubH9Zf%2FntYsYAEIziQWYztwicFNdApdMXixNH5l3Jr0FgVntqU83cgoTYJINRAIukQ9ZF75r9AEMiGFGuxYOxWERjix93mmNEzU0r2CZzaFCSFFuis3AmOG9DDzzzwuF8ZrXBV9wYIiurYjPnC2PGuDRzcVqqKwqfvjSeodrPmIhomiKloyGn2jFJ1zL7tGSf2ZYWywbir83KBt66nQDRdPE2Fa090d7%2FwiyNsFkEyzhtaSMcwYOTT0C2IPJF0aXUKO2q10kzpnBz%2Bu5JmKAc1qNgA6sqnDTXngMQCFpkm6ukpLx7XCxvWGDoXNkhJFlSC%2FUacKpdzr4YfilhjWnA0VJDDwtfrABjqkAW3F1Pin71EBAK6ZBhHBniXiwuOCIYZSDfVJVkArhdKr35S6175ugo5Y5jS0XThsueqCqdM%2BKzC3U%2BxmGnznj%2BQQtggBaERlc7heAgZQAkSiVDSyO2YfvOIXj2gt9SOlPglc7RMKyWdVxtrErlYWXB%2BtKMsuD1OOkLVFjBfwluHYqhn147XXdN7nTHDuOhNubYfU99JsV2Tv8gTXa28Rf29fOT2A&X-Amz-Signature=1fd3394888e8874d6dd351b73430da0fd90291078c55c2049405620af81ab8de&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGXDBIFS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaSGtqoSmI%2Be6BP%2BtvhGshofRgwjK%2Fm31Yh565lbnBhQIhAO%2FcO%2BuDV2KYKP4JEaZibEJxsH8%2FvyP9cuhtbUgduAOCKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUI3Y9oz8iUDUuNBUq3APdV9kYnhkcNCbTLiqyYkdcj9o6NvMIKYoycYWYz5UkxKXLlkl5n8sWVvq2%2FwXxEISF1vnvMVSD08kiHiWxy5V4E1mz4P1OSMbmiI85%2Fm4Q9Aq1lTpkXeX7RWRWly9lMYQsjQLoRpm1JtLdPJ4atb8de7Qugq9IUmeKbLM%2Bk1%2FrWJ2I41%2F4%2BjYrtV0oJOs5l9J53zGe1FmPcBef4lF2K4l2ju3uq%2FfVWwrRNwqC9Ld4cPsKIHXn2gWOuHg%2B6YtZiEjUbxWl6nuc72S7xCRkl4MXsKC4v3JKVvaFfubH9Zf%2FntYsYAEIziQWYztwicFNdApdMXixNH5l3Jr0FgVntqU83cgoTYJINRAIukQ9ZF75r9AEMiGFGuxYOxWERjix93mmNEzU0r2CZzaFCSFFuis3AmOG9DDzzzwuF8ZrXBV9wYIiurYjPnC2PGuDRzcVqqKwqfvjSeodrPmIhomiKloyGn2jFJ1zL7tGSf2ZYWywbir83KBt66nQDRdPE2Fa090d7%2FwiyNsFkEyzhtaSMcwYOTT0C2IPJF0aXUKO2q10kzpnBz%2Bu5JmKAc1qNgA6sqnDTXngMQCFpkm6ukpLx7XCxvWGDoXNkhJFlSC%2FUacKpdzr4YfilhjWnA0VJDDwtfrABjqkAW3F1Pin71EBAK6ZBhHBniXiwuOCIYZSDfVJVkArhdKr35S6175ugo5Y5jS0XThsueqCqdM%2BKzC3U%2BxmGnznj%2BQQtggBaERlc7heAgZQAkSiVDSyO2YfvOIXj2gt9SOlPglc7RMKyWdVxtrErlYWXB%2BtKMsuD1OOkLVFjBfwluHYqhn147XXdN7nTHDuOhNubYfU99JsV2Tv8gTXa28Rf29fOT2A&X-Amz-Signature=cb23e4214df0420b8a77f356b969bc51617b20dea9dc2f2f0fd732052ba5a1ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGXDBIFS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaSGtqoSmI%2Be6BP%2BtvhGshofRgwjK%2Fm31Yh565lbnBhQIhAO%2FcO%2BuDV2KYKP4JEaZibEJxsH8%2FvyP9cuhtbUgduAOCKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUI3Y9oz8iUDUuNBUq3APdV9kYnhkcNCbTLiqyYkdcj9o6NvMIKYoycYWYz5UkxKXLlkl5n8sWVvq2%2FwXxEISF1vnvMVSD08kiHiWxy5V4E1mz4P1OSMbmiI85%2Fm4Q9Aq1lTpkXeX7RWRWly9lMYQsjQLoRpm1JtLdPJ4atb8de7Qugq9IUmeKbLM%2Bk1%2FrWJ2I41%2F4%2BjYrtV0oJOs5l9J53zGe1FmPcBef4lF2K4l2ju3uq%2FfVWwrRNwqC9Ld4cPsKIHXn2gWOuHg%2B6YtZiEjUbxWl6nuc72S7xCRkl4MXsKC4v3JKVvaFfubH9Zf%2FntYsYAEIziQWYztwicFNdApdMXixNH5l3Jr0FgVntqU83cgoTYJINRAIukQ9ZF75r9AEMiGFGuxYOxWERjix93mmNEzU0r2CZzaFCSFFuis3AmOG9DDzzzwuF8ZrXBV9wYIiurYjPnC2PGuDRzcVqqKwqfvjSeodrPmIhomiKloyGn2jFJ1zL7tGSf2ZYWywbir83KBt66nQDRdPE2Fa090d7%2FwiyNsFkEyzhtaSMcwYOTT0C2IPJF0aXUKO2q10kzpnBz%2Bu5JmKAc1qNgA6sqnDTXngMQCFpkm6ukpLx7XCxvWGDoXNkhJFlSC%2FUacKpdzr4YfilhjWnA0VJDDwtfrABjqkAW3F1Pin71EBAK6ZBhHBniXiwuOCIYZSDfVJVkArhdKr35S6175ugo5Y5jS0XThsueqCqdM%2BKzC3U%2BxmGnznj%2BQQtggBaERlc7heAgZQAkSiVDSyO2YfvOIXj2gt9SOlPglc7RMKyWdVxtrErlYWXB%2BtKMsuD1OOkLVFjBfwluHYqhn147XXdN7nTHDuOhNubYfU99JsV2Tv8gTXa28Rf29fOT2A&X-Amz-Signature=200083c75c4874f5d66b7fe496ad1b4063a7903d16f0f2397aa1ddf1ec188600&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGXDBIFS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaSGtqoSmI%2Be6BP%2BtvhGshofRgwjK%2Fm31Yh565lbnBhQIhAO%2FcO%2BuDV2KYKP4JEaZibEJxsH8%2FvyP9cuhtbUgduAOCKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUI3Y9oz8iUDUuNBUq3APdV9kYnhkcNCbTLiqyYkdcj9o6NvMIKYoycYWYz5UkxKXLlkl5n8sWVvq2%2FwXxEISF1vnvMVSD08kiHiWxy5V4E1mz4P1OSMbmiI85%2Fm4Q9Aq1lTpkXeX7RWRWly9lMYQsjQLoRpm1JtLdPJ4atb8de7Qugq9IUmeKbLM%2Bk1%2FrWJ2I41%2F4%2BjYrtV0oJOs5l9J53zGe1FmPcBef4lF2K4l2ju3uq%2FfVWwrRNwqC9Ld4cPsKIHXn2gWOuHg%2B6YtZiEjUbxWl6nuc72S7xCRkl4MXsKC4v3JKVvaFfubH9Zf%2FntYsYAEIziQWYztwicFNdApdMXixNH5l3Jr0FgVntqU83cgoTYJINRAIukQ9ZF75r9AEMiGFGuxYOxWERjix93mmNEzU0r2CZzaFCSFFuis3AmOG9DDzzzwuF8ZrXBV9wYIiurYjPnC2PGuDRzcVqqKwqfvjSeodrPmIhomiKloyGn2jFJ1zL7tGSf2ZYWywbir83KBt66nQDRdPE2Fa090d7%2FwiyNsFkEyzhtaSMcwYOTT0C2IPJF0aXUKO2q10kzpnBz%2Bu5JmKAc1qNgA6sqnDTXngMQCFpkm6ukpLx7XCxvWGDoXNkhJFlSC%2FUacKpdzr4YfilhjWnA0VJDDwtfrABjqkAW3F1Pin71EBAK6ZBhHBniXiwuOCIYZSDfVJVkArhdKr35S6175ugo5Y5jS0XThsueqCqdM%2BKzC3U%2BxmGnznj%2BQQtggBaERlc7heAgZQAkSiVDSyO2YfvOIXj2gt9SOlPglc7RMKyWdVxtrErlYWXB%2BtKMsuD1OOkLVFjBfwluHYqhn147XXdN7nTHDuOhNubYfU99JsV2Tv8gTXa28Rf29fOT2A&X-Amz-Signature=7abbdbb4d4d53aa47db2c1187bb341b7ac490d79a301cdab46c3082fea41aabd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
