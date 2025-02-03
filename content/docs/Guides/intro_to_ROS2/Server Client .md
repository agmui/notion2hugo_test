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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VENJBIZZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHz8GcISOXc3lIvQc%2FS9hmGmxfHEAAX9yw5yI%2B4nTjC4AiEA4kyGVGvBPCEvAE%2BU5fBVjtNGmZrC%2FIBsPnTSd30h0KEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDKC9Fa64khN4xlQaPyrcA0rWcaeCBbUF%2F1jRRJnL6eJ8njNWK8Ydo2fwklx%2FPVprht3TEh56RGaguaTEMWkTyZiV8pg9jHsOF41MKnPirxK9vaY0C9BCmcubBjdTRztRAaG3X8graWg4Kq7eke7cvAC1NKu3v15G0LJhFkwyEAwzu8SJ9ZtFgvqYyDTPIfOfS8cU0ub85JUWajLSqOJIIyPOFLCJuDj9GiQmcIAs0%2FYhlGGqZW6Hu56%2FAcZI8QmHuVmwDl%2FwuWVB6A309gquW1h7y3gFmDsXk4Gy3bMXuNn0eplcaiAy0gAbpDhnJiTJ%2BQeu9qcx%2Fsa8FM57HH5q9%2BlY%2Fb6mvB0IRTvqZFO7RwXO8x0BkieguYNKpQtgRn4Y7hmHjtQHsw9JlNyAokP0FabLutbQLrahM7NIl%2B5uauR7gR47hhat1roJam1bOMfR%2BCfQaA2io6h90cvdNjXkPj6XERy3HQg0hA%2FANa381as00aHHFMWTfmDhzFF7xFxKd9%2B0ApdQi%2BfCTlS91JgZURhERGXs%2FGOn0UpDAzrk%2Bjn2R40WgpFo1Q1LFE%2Feb1W0jnbr4R9zcAxs4CuA0lkBEhbuLmQY55NAhBtzIvfHk6QrF%2FGxrIZUkMh3c4LiHBPU6TWkdCs%2F79DrBLpTMKjMg70GOqUBT%2FNKfHIv3ZVK%2FBP8KTu2Ru1HPfvd%2BKGRCBOnUNUt2jg9QRxiS3Ay8w8Vzm41ck9wSOEgwtDDTR99uoa0oD3OjyyJROOFKiZfc797sY4j2YYFNRx8LiMQF%2By1esWgjWXJuOP04417ZSsNxBsrN9Z0ZCJ6PoJrq8dQ7A9VH71QarNmKOqIJx%2B6uBWHwE9q1UWKd8DelPrnjaGo1aG07eX3RsRt3er2&X-Amz-Signature=89d9b7e8aba2395a97c8ea0b2ad68c49c944e503218b6327c0eecdb7e6007cf9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VENJBIZZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHz8GcISOXc3lIvQc%2FS9hmGmxfHEAAX9yw5yI%2B4nTjC4AiEA4kyGVGvBPCEvAE%2BU5fBVjtNGmZrC%2FIBsPnTSd30h0KEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDKC9Fa64khN4xlQaPyrcA0rWcaeCBbUF%2F1jRRJnL6eJ8njNWK8Ydo2fwklx%2FPVprht3TEh56RGaguaTEMWkTyZiV8pg9jHsOF41MKnPirxK9vaY0C9BCmcubBjdTRztRAaG3X8graWg4Kq7eke7cvAC1NKu3v15G0LJhFkwyEAwzu8SJ9ZtFgvqYyDTPIfOfS8cU0ub85JUWajLSqOJIIyPOFLCJuDj9GiQmcIAs0%2FYhlGGqZW6Hu56%2FAcZI8QmHuVmwDl%2FwuWVB6A309gquW1h7y3gFmDsXk4Gy3bMXuNn0eplcaiAy0gAbpDhnJiTJ%2BQeu9qcx%2Fsa8FM57HH5q9%2BlY%2Fb6mvB0IRTvqZFO7RwXO8x0BkieguYNKpQtgRn4Y7hmHjtQHsw9JlNyAokP0FabLutbQLrahM7NIl%2B5uauR7gR47hhat1roJam1bOMfR%2BCfQaA2io6h90cvdNjXkPj6XERy3HQg0hA%2FANa381as00aHHFMWTfmDhzFF7xFxKd9%2B0ApdQi%2BfCTlS91JgZURhERGXs%2FGOn0UpDAzrk%2Bjn2R40WgpFo1Q1LFE%2Feb1W0jnbr4R9zcAxs4CuA0lkBEhbuLmQY55NAhBtzIvfHk6QrF%2FGxrIZUkMh3c4LiHBPU6TWkdCs%2F79DrBLpTMKjMg70GOqUBT%2FNKfHIv3ZVK%2FBP8KTu2Ru1HPfvd%2BKGRCBOnUNUt2jg9QRxiS3Ay8w8Vzm41ck9wSOEgwtDDTR99uoa0oD3OjyyJROOFKiZfc797sY4j2YYFNRx8LiMQF%2By1esWgjWXJuOP04417ZSsNxBsrN9Z0ZCJ6PoJrq8dQ7A9VH71QarNmKOqIJx%2B6uBWHwE9q1UWKd8DelPrnjaGo1aG07eX3RsRt3er2&X-Amz-Signature=c9012a498be1f0a21697cf7e123c64b15ec5aa7453b2768e2d9535ec4e7a6876&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VENJBIZZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHz8GcISOXc3lIvQc%2FS9hmGmxfHEAAX9yw5yI%2B4nTjC4AiEA4kyGVGvBPCEvAE%2BU5fBVjtNGmZrC%2FIBsPnTSd30h0KEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDKC9Fa64khN4xlQaPyrcA0rWcaeCBbUF%2F1jRRJnL6eJ8njNWK8Ydo2fwklx%2FPVprht3TEh56RGaguaTEMWkTyZiV8pg9jHsOF41MKnPirxK9vaY0C9BCmcubBjdTRztRAaG3X8graWg4Kq7eke7cvAC1NKu3v15G0LJhFkwyEAwzu8SJ9ZtFgvqYyDTPIfOfS8cU0ub85JUWajLSqOJIIyPOFLCJuDj9GiQmcIAs0%2FYhlGGqZW6Hu56%2FAcZI8QmHuVmwDl%2FwuWVB6A309gquW1h7y3gFmDsXk4Gy3bMXuNn0eplcaiAy0gAbpDhnJiTJ%2BQeu9qcx%2Fsa8FM57HH5q9%2BlY%2Fb6mvB0IRTvqZFO7RwXO8x0BkieguYNKpQtgRn4Y7hmHjtQHsw9JlNyAokP0FabLutbQLrahM7NIl%2B5uauR7gR47hhat1roJam1bOMfR%2BCfQaA2io6h90cvdNjXkPj6XERy3HQg0hA%2FANa381as00aHHFMWTfmDhzFF7xFxKd9%2B0ApdQi%2BfCTlS91JgZURhERGXs%2FGOn0UpDAzrk%2Bjn2R40WgpFo1Q1LFE%2Feb1W0jnbr4R9zcAxs4CuA0lkBEhbuLmQY55NAhBtzIvfHk6QrF%2FGxrIZUkMh3c4LiHBPU6TWkdCs%2F79DrBLpTMKjMg70GOqUBT%2FNKfHIv3ZVK%2FBP8KTu2Ru1HPfvd%2BKGRCBOnUNUt2jg9QRxiS3Ay8w8Vzm41ck9wSOEgwtDDTR99uoa0oD3OjyyJROOFKiZfc797sY4j2YYFNRx8LiMQF%2By1esWgjWXJuOP04417ZSsNxBsrN9Z0ZCJ6PoJrq8dQ7A9VH71QarNmKOqIJx%2B6uBWHwE9q1UWKd8DelPrnjaGo1aG07eX3RsRt3er2&X-Amz-Signature=307cd8eac2b90dec961077ae08ccc8344af85b545361502196b05691e11251e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VENJBIZZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHz8GcISOXc3lIvQc%2FS9hmGmxfHEAAX9yw5yI%2B4nTjC4AiEA4kyGVGvBPCEvAE%2BU5fBVjtNGmZrC%2FIBsPnTSd30h0KEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDKC9Fa64khN4xlQaPyrcA0rWcaeCBbUF%2F1jRRJnL6eJ8njNWK8Ydo2fwklx%2FPVprht3TEh56RGaguaTEMWkTyZiV8pg9jHsOF41MKnPirxK9vaY0C9BCmcubBjdTRztRAaG3X8graWg4Kq7eke7cvAC1NKu3v15G0LJhFkwyEAwzu8SJ9ZtFgvqYyDTPIfOfS8cU0ub85JUWajLSqOJIIyPOFLCJuDj9GiQmcIAs0%2FYhlGGqZW6Hu56%2FAcZI8QmHuVmwDl%2FwuWVB6A309gquW1h7y3gFmDsXk4Gy3bMXuNn0eplcaiAy0gAbpDhnJiTJ%2BQeu9qcx%2Fsa8FM57HH5q9%2BlY%2Fb6mvB0IRTvqZFO7RwXO8x0BkieguYNKpQtgRn4Y7hmHjtQHsw9JlNyAokP0FabLutbQLrahM7NIl%2B5uauR7gR47hhat1roJam1bOMfR%2BCfQaA2io6h90cvdNjXkPj6XERy3HQg0hA%2FANa381as00aHHFMWTfmDhzFF7xFxKd9%2B0ApdQi%2BfCTlS91JgZURhERGXs%2FGOn0UpDAzrk%2Bjn2R40WgpFo1Q1LFE%2Feb1W0jnbr4R9zcAxs4CuA0lkBEhbuLmQY55NAhBtzIvfHk6QrF%2FGxrIZUkMh3c4LiHBPU6TWkdCs%2F79DrBLpTMKjMg70GOqUBT%2FNKfHIv3ZVK%2FBP8KTu2Ru1HPfvd%2BKGRCBOnUNUt2jg9QRxiS3Ay8w8Vzm41ck9wSOEgwtDDTR99uoa0oD3OjyyJROOFKiZfc797sY4j2YYFNRx8LiMQF%2By1esWgjWXJuOP04417ZSsNxBsrN9Z0ZCJ6PoJrq8dQ7A9VH71QarNmKOqIJx%2B6uBWHwE9q1UWKd8DelPrnjaGo1aG07eX3RsRt3er2&X-Amz-Signature=e7117795567407893fcd87f643d32575cf2d87075e3202580d872da74602543d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VENJBIZZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHz8GcISOXc3lIvQc%2FS9hmGmxfHEAAX9yw5yI%2B4nTjC4AiEA4kyGVGvBPCEvAE%2BU5fBVjtNGmZrC%2FIBsPnTSd30h0KEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDKC9Fa64khN4xlQaPyrcA0rWcaeCBbUF%2F1jRRJnL6eJ8njNWK8Ydo2fwklx%2FPVprht3TEh56RGaguaTEMWkTyZiV8pg9jHsOF41MKnPirxK9vaY0C9BCmcubBjdTRztRAaG3X8graWg4Kq7eke7cvAC1NKu3v15G0LJhFkwyEAwzu8SJ9ZtFgvqYyDTPIfOfS8cU0ub85JUWajLSqOJIIyPOFLCJuDj9GiQmcIAs0%2FYhlGGqZW6Hu56%2FAcZI8QmHuVmwDl%2FwuWVB6A309gquW1h7y3gFmDsXk4Gy3bMXuNn0eplcaiAy0gAbpDhnJiTJ%2BQeu9qcx%2Fsa8FM57HH5q9%2BlY%2Fb6mvB0IRTvqZFO7RwXO8x0BkieguYNKpQtgRn4Y7hmHjtQHsw9JlNyAokP0FabLutbQLrahM7NIl%2B5uauR7gR47hhat1roJam1bOMfR%2BCfQaA2io6h90cvdNjXkPj6XERy3HQg0hA%2FANa381as00aHHFMWTfmDhzFF7xFxKd9%2B0ApdQi%2BfCTlS91JgZURhERGXs%2FGOn0UpDAzrk%2Bjn2R40WgpFo1Q1LFE%2Feb1W0jnbr4R9zcAxs4CuA0lkBEhbuLmQY55NAhBtzIvfHk6QrF%2FGxrIZUkMh3c4LiHBPU6TWkdCs%2F79DrBLpTMKjMg70GOqUBT%2FNKfHIv3ZVK%2FBP8KTu2Ru1HPfvd%2BKGRCBOnUNUt2jg9QRxiS3Ay8w8Vzm41ck9wSOEgwtDDTR99uoa0oD3OjyyJROOFKiZfc797sY4j2YYFNRx8LiMQF%2By1esWgjWXJuOP04417ZSsNxBsrN9Z0ZCJ6PoJrq8dQ7A9VH71QarNmKOqIJx%2B6uBWHwE9q1UWKd8DelPrnjaGo1aG07eX3RsRt3er2&X-Amz-Signature=5b229648fb6702c831ddab5d5e374981dcaf30607b9c8d4179593856711f3ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
