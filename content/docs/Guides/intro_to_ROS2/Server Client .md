---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSRZFOS%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrmg0JEs5%2B3cSU9mmlzuRpqmY%2FKubu7ea3jMpM4qxPCwIhALuzNmG9rVC2T4QVrA8dkvSzaOpIdqMavPl9ek7t%2BWaVKv8DCHMQABoMNjM3NDIzMTgzODA1IgyqCXGXsZ%2Bb81tio4Eq3AMX7JxlBFyRaGRP2xa4s0D21VvLdsq7OyrGH9ikoNieTBPXkqSrPGZlnwdMAGnGvfVtxrBhB3rGmC1MmXKzqinmdCKSwLlczaWtHUtwyJnokprpltKC3oll2mVVJvAlT9CiXWwhoNQPxZvZpzISmaWQ5biuBDHns0C675suTV9MkMEl6O3tyLBbIedOFc7vJkoTL5f%2FFULoG%2F4WJSpXzALxYcbxjdXzpPual2nx0jkOFagfbrcP%2BYjsNvZ75Hsaf9Ecbz0%2BJKgbNJsH8h1k1UFe9vsjvmN1Hisl5QTdkHThvTlhv8nKdp1HEGdNg1i6ZCMc8jR9kMDkV9aj97vqttxmbFv86TF4XmYm8VrnbV1i7gFiUFAPVa4RjlXGKivaO5Ro44mxmqcy%2FRpLaEYDSxhd5kEjIp2eK2JiRoE29ADKdhpWe0cVFL1gwTjy3kEEtz4FAmtro7gxXxcjWI505sZXGGPDI8bx7scbC8pnciU%2BDrZfkCjp3RR1yLJHiy0AUjlijlt2CfeXwgz5isItoGkN2fg3Kz3uwiUIdCWtUHchl5aQNGEAewt66zP6EyJJXXXh9Ff2FpeW4CV3HUPaZQ9OM%2BRd5YxgdZHFJoR7YOM0oBINoTNL9ZV8mwpS9DCz99PQBjqkAYHzYW9CQuQi2pGEzVTTutoOsqe%2FrkldNm%2FJRtqBqGtabo5vceBV5Pf7wM1KvNxbIOuJQPEF5akxrdG6hBhliBnpYFBFDe5i%2BJmbCHpeDl2bKILExD3kZPJIF780pQ1V6WrQMECNDVwxMlpnulga8Sfa2zcjrNGXizuH0xYrnm07IXlowA3wtofvWkCGmvvMZP%2Fo6eeed78kJU4htaBfstt%2FjdS8&X-Amz-Signature=22edfa88f2071167e087cb27144995178d83da1364031719913ea90e622e8893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSRZFOS%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrmg0JEs5%2B3cSU9mmlzuRpqmY%2FKubu7ea3jMpM4qxPCwIhALuzNmG9rVC2T4QVrA8dkvSzaOpIdqMavPl9ek7t%2BWaVKv8DCHMQABoMNjM3NDIzMTgzODA1IgyqCXGXsZ%2Bb81tio4Eq3AMX7JxlBFyRaGRP2xa4s0D21VvLdsq7OyrGH9ikoNieTBPXkqSrPGZlnwdMAGnGvfVtxrBhB3rGmC1MmXKzqinmdCKSwLlczaWtHUtwyJnokprpltKC3oll2mVVJvAlT9CiXWwhoNQPxZvZpzISmaWQ5biuBDHns0C675suTV9MkMEl6O3tyLBbIedOFc7vJkoTL5f%2FFULoG%2F4WJSpXzALxYcbxjdXzpPual2nx0jkOFagfbrcP%2BYjsNvZ75Hsaf9Ecbz0%2BJKgbNJsH8h1k1UFe9vsjvmN1Hisl5QTdkHThvTlhv8nKdp1HEGdNg1i6ZCMc8jR9kMDkV9aj97vqttxmbFv86TF4XmYm8VrnbV1i7gFiUFAPVa4RjlXGKivaO5Ro44mxmqcy%2FRpLaEYDSxhd5kEjIp2eK2JiRoE29ADKdhpWe0cVFL1gwTjy3kEEtz4FAmtro7gxXxcjWI505sZXGGPDI8bx7scbC8pnciU%2BDrZfkCjp3RR1yLJHiy0AUjlijlt2CfeXwgz5isItoGkN2fg3Kz3uwiUIdCWtUHchl5aQNGEAewt66zP6EyJJXXXh9Ff2FpeW4CV3HUPaZQ9OM%2BRd5YxgdZHFJoR7YOM0oBINoTNL9ZV8mwpS9DCz99PQBjqkAYHzYW9CQuQi2pGEzVTTutoOsqe%2FrkldNm%2FJRtqBqGtabo5vceBV5Pf7wM1KvNxbIOuJQPEF5akxrdG6hBhliBnpYFBFDe5i%2BJmbCHpeDl2bKILExD3kZPJIF780pQ1V6WrQMECNDVwxMlpnulga8Sfa2zcjrNGXizuH0xYrnm07IXlowA3wtofvWkCGmvvMZP%2Fo6eeed78kJU4htaBfstt%2FjdS8&X-Amz-Signature=389aefea794b14b02855d1dccd2adb106fd3c140ec0959eb36879e7d5f9263c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSRZFOS%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrmg0JEs5%2B3cSU9mmlzuRpqmY%2FKubu7ea3jMpM4qxPCwIhALuzNmG9rVC2T4QVrA8dkvSzaOpIdqMavPl9ek7t%2BWaVKv8DCHMQABoMNjM3NDIzMTgzODA1IgyqCXGXsZ%2Bb81tio4Eq3AMX7JxlBFyRaGRP2xa4s0D21VvLdsq7OyrGH9ikoNieTBPXkqSrPGZlnwdMAGnGvfVtxrBhB3rGmC1MmXKzqinmdCKSwLlczaWtHUtwyJnokprpltKC3oll2mVVJvAlT9CiXWwhoNQPxZvZpzISmaWQ5biuBDHns0C675suTV9MkMEl6O3tyLBbIedOFc7vJkoTL5f%2FFULoG%2F4WJSpXzALxYcbxjdXzpPual2nx0jkOFagfbrcP%2BYjsNvZ75Hsaf9Ecbz0%2BJKgbNJsH8h1k1UFe9vsjvmN1Hisl5QTdkHThvTlhv8nKdp1HEGdNg1i6ZCMc8jR9kMDkV9aj97vqttxmbFv86TF4XmYm8VrnbV1i7gFiUFAPVa4RjlXGKivaO5Ro44mxmqcy%2FRpLaEYDSxhd5kEjIp2eK2JiRoE29ADKdhpWe0cVFL1gwTjy3kEEtz4FAmtro7gxXxcjWI505sZXGGPDI8bx7scbC8pnciU%2BDrZfkCjp3RR1yLJHiy0AUjlijlt2CfeXwgz5isItoGkN2fg3Kz3uwiUIdCWtUHchl5aQNGEAewt66zP6EyJJXXXh9Ff2FpeW4CV3HUPaZQ9OM%2BRd5YxgdZHFJoR7YOM0oBINoTNL9ZV8mwpS9DCz99PQBjqkAYHzYW9CQuQi2pGEzVTTutoOsqe%2FrkldNm%2FJRtqBqGtabo5vceBV5Pf7wM1KvNxbIOuJQPEF5akxrdG6hBhliBnpYFBFDe5i%2BJmbCHpeDl2bKILExD3kZPJIF780pQ1V6WrQMECNDVwxMlpnulga8Sfa2zcjrNGXizuH0xYrnm07IXlowA3wtofvWkCGmvvMZP%2Fo6eeed78kJU4htaBfstt%2FjdS8&X-Amz-Signature=28aaaa3afcf2649a50f306999afc4c6ba91b8c79d5cd62e44e1d911cb2621954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSRZFOS%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrmg0JEs5%2B3cSU9mmlzuRpqmY%2FKubu7ea3jMpM4qxPCwIhALuzNmG9rVC2T4QVrA8dkvSzaOpIdqMavPl9ek7t%2BWaVKv8DCHMQABoMNjM3NDIzMTgzODA1IgyqCXGXsZ%2Bb81tio4Eq3AMX7JxlBFyRaGRP2xa4s0D21VvLdsq7OyrGH9ikoNieTBPXkqSrPGZlnwdMAGnGvfVtxrBhB3rGmC1MmXKzqinmdCKSwLlczaWtHUtwyJnokprpltKC3oll2mVVJvAlT9CiXWwhoNQPxZvZpzISmaWQ5biuBDHns0C675suTV9MkMEl6O3tyLBbIedOFc7vJkoTL5f%2FFULoG%2F4WJSpXzALxYcbxjdXzpPual2nx0jkOFagfbrcP%2BYjsNvZ75Hsaf9Ecbz0%2BJKgbNJsH8h1k1UFe9vsjvmN1Hisl5QTdkHThvTlhv8nKdp1HEGdNg1i6ZCMc8jR9kMDkV9aj97vqttxmbFv86TF4XmYm8VrnbV1i7gFiUFAPVa4RjlXGKivaO5Ro44mxmqcy%2FRpLaEYDSxhd5kEjIp2eK2JiRoE29ADKdhpWe0cVFL1gwTjy3kEEtz4FAmtro7gxXxcjWI505sZXGGPDI8bx7scbC8pnciU%2BDrZfkCjp3RR1yLJHiy0AUjlijlt2CfeXwgz5isItoGkN2fg3Kz3uwiUIdCWtUHchl5aQNGEAewt66zP6EyJJXXXh9Ff2FpeW4CV3HUPaZQ9OM%2BRd5YxgdZHFJoR7YOM0oBINoTNL9ZV8mwpS9DCz99PQBjqkAYHzYW9CQuQi2pGEzVTTutoOsqe%2FrkldNm%2FJRtqBqGtabo5vceBV5Pf7wM1KvNxbIOuJQPEF5akxrdG6hBhliBnpYFBFDe5i%2BJmbCHpeDl2bKILExD3kZPJIF780pQ1V6WrQMECNDVwxMlpnulga8Sfa2zcjrNGXizuH0xYrnm07IXlowA3wtofvWkCGmvvMZP%2Fo6eeed78kJU4htaBfstt%2FjdS8&X-Amz-Signature=21883701deddf646942d10d792a4768c5da85bd02ee4bfbce160d409920123fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSRZFOS%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrmg0JEs5%2B3cSU9mmlzuRpqmY%2FKubu7ea3jMpM4qxPCwIhALuzNmG9rVC2T4QVrA8dkvSzaOpIdqMavPl9ek7t%2BWaVKv8DCHMQABoMNjM3NDIzMTgzODA1IgyqCXGXsZ%2Bb81tio4Eq3AMX7JxlBFyRaGRP2xa4s0D21VvLdsq7OyrGH9ikoNieTBPXkqSrPGZlnwdMAGnGvfVtxrBhB3rGmC1MmXKzqinmdCKSwLlczaWtHUtwyJnokprpltKC3oll2mVVJvAlT9CiXWwhoNQPxZvZpzISmaWQ5biuBDHns0C675suTV9MkMEl6O3tyLBbIedOFc7vJkoTL5f%2FFULoG%2F4WJSpXzALxYcbxjdXzpPual2nx0jkOFagfbrcP%2BYjsNvZ75Hsaf9Ecbz0%2BJKgbNJsH8h1k1UFe9vsjvmN1Hisl5QTdkHThvTlhv8nKdp1HEGdNg1i6ZCMc8jR9kMDkV9aj97vqttxmbFv86TF4XmYm8VrnbV1i7gFiUFAPVa4RjlXGKivaO5Ro44mxmqcy%2FRpLaEYDSxhd5kEjIp2eK2JiRoE29ADKdhpWe0cVFL1gwTjy3kEEtz4FAmtro7gxXxcjWI505sZXGGPDI8bx7scbC8pnciU%2BDrZfkCjp3RR1yLJHiy0AUjlijlt2CfeXwgz5isItoGkN2fg3Kz3uwiUIdCWtUHchl5aQNGEAewt66zP6EyJJXXXh9Ff2FpeW4CV3HUPaZQ9OM%2BRd5YxgdZHFJoR7YOM0oBINoTNL9ZV8mwpS9DCz99PQBjqkAYHzYW9CQuQi2pGEzVTTutoOsqe%2FrkldNm%2FJRtqBqGtabo5vceBV5Pf7wM1KvNxbIOuJQPEF5akxrdG6hBhliBnpYFBFDe5i%2BJmbCHpeDl2bKILExD3kZPJIF780pQ1V6WrQMECNDVwxMlpnulga8Sfa2zcjrNGXizuH0xYrnm07IXlowA3wtofvWkCGmvvMZP%2Fo6eeed78kJU4htaBfstt%2FjdS8&X-Amz-Signature=95023a3bf95ef2d8690de0415de3f3a206cc8f2515cfb3d985df2ba8a58ad198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
