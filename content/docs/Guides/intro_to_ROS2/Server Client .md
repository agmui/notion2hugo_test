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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XZZGVO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDZdPMYaLtYTgTeI6RY6y%2BZCnarQNMwVuG3pRHEzoC9dwIhAKnXqcXyQSeAO0ya6Srxu0BBRlRuKjkxLT%2FzkJSssQvAKv8DCGoQABoMNjM3NDIzMTgzODA1IgyZL8TWxkkd5ROeesMq3AP0CZgVdZ%2FG2PpV%2Fgl3O008hcCr7AbuBrPPF3M9Ah41zA0Xpi7TiaPPP4fOhrSxWwdY9ekyijLW4endKpiRTrktgZfN6dOdQ%2F9kRbGtMcvdFYIjhyZm5KT4tsTTaxO%2BnsM4HYpfhpKest9rMzEZyj0yNeF%2BCfusD4faFPeGEqAWnI%2BqW4iLlfdO9u1B37ATUUp%2BCk21XzDwgvUC%2Bs1ICL2hJ0J9PfF2mF5%2FkWhdGigtQcu3Svleip832jBKG%2FCxFVtcfQqs5VKtTefwmbtr%2FRW%2BsHR6S4htJ609Pn204BOX0VO199UlFrzYrH4VzmZlkGtqLpBuJmmtGx2p1olpClmzgOJWfTqVQTnRxqQdf0FxWcf0AfYQu3dVFJip%2FoRug7iimMZLYeiLq%2BNNPGV42gqajkVYfmb4Rb8hOCA4fZ2eJdQMg3lU8t8Rwj%2BoOSojNE1iQw42oQgsdzdTiL9eOcaGeRfMxSM57HQ0rhj9Aj%2BmiZaPtTDZstHIPKuj55OHtWwXq5n4sCtwg0oA%2Bv9HZOBckknkvqxtpE%2FX4IPLEFr%2BNydC4%2FmfKE9j7PFvkXHu8a5yvn%2BPRcAhGRlhEQlNTRumowWieb0x%2BhUyZMIYTpzYeJ%2BWr9pHufe50ZHBUjCqm8q9BjqkAeo2kGGJ9vTisMeQ7dVSQMbtzjmllZgoVGhVEGfB%2FcEqsEkpvYc9JZEBk1454WnXdSoenDFdJYLzpuPqzCybjDnZRnvOKlWFOPVa1QMXSmNdsCNvUF1grZMBRlOTzCdGHk%2FuQFBcCe1%2B1bX%2F5GJaLkVoQGwKWoNOQ5cj7dH%2F1XLab0z%2FTtWE9NBiiA8xXeT4uXSI0qyid6BhEOAs8Sg2E9Yw9bhk&X-Amz-Signature=736822a06ac9ee887e11e13a3d47c052a8cd7cf99fd588f358af5084acdd5cb6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XZZGVO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDZdPMYaLtYTgTeI6RY6y%2BZCnarQNMwVuG3pRHEzoC9dwIhAKnXqcXyQSeAO0ya6Srxu0BBRlRuKjkxLT%2FzkJSssQvAKv8DCGoQABoMNjM3NDIzMTgzODA1IgyZL8TWxkkd5ROeesMq3AP0CZgVdZ%2FG2PpV%2Fgl3O008hcCr7AbuBrPPF3M9Ah41zA0Xpi7TiaPPP4fOhrSxWwdY9ekyijLW4endKpiRTrktgZfN6dOdQ%2F9kRbGtMcvdFYIjhyZm5KT4tsTTaxO%2BnsM4HYpfhpKest9rMzEZyj0yNeF%2BCfusD4faFPeGEqAWnI%2BqW4iLlfdO9u1B37ATUUp%2BCk21XzDwgvUC%2Bs1ICL2hJ0J9PfF2mF5%2FkWhdGigtQcu3Svleip832jBKG%2FCxFVtcfQqs5VKtTefwmbtr%2FRW%2BsHR6S4htJ609Pn204BOX0VO199UlFrzYrH4VzmZlkGtqLpBuJmmtGx2p1olpClmzgOJWfTqVQTnRxqQdf0FxWcf0AfYQu3dVFJip%2FoRug7iimMZLYeiLq%2BNNPGV42gqajkVYfmb4Rb8hOCA4fZ2eJdQMg3lU8t8Rwj%2BoOSojNE1iQw42oQgsdzdTiL9eOcaGeRfMxSM57HQ0rhj9Aj%2BmiZaPtTDZstHIPKuj55OHtWwXq5n4sCtwg0oA%2Bv9HZOBckknkvqxtpE%2FX4IPLEFr%2BNydC4%2FmfKE9j7PFvkXHu8a5yvn%2BPRcAhGRlhEQlNTRumowWieb0x%2BhUyZMIYTpzYeJ%2BWr9pHufe50ZHBUjCqm8q9BjqkAeo2kGGJ9vTisMeQ7dVSQMbtzjmllZgoVGhVEGfB%2FcEqsEkpvYc9JZEBk1454WnXdSoenDFdJYLzpuPqzCybjDnZRnvOKlWFOPVa1QMXSmNdsCNvUF1grZMBRlOTzCdGHk%2FuQFBcCe1%2B1bX%2F5GJaLkVoQGwKWoNOQ5cj7dH%2F1XLab0z%2FTtWE9NBiiA8xXeT4uXSI0qyid6BhEOAs8Sg2E9Yw9bhk&X-Amz-Signature=fe481376383bbb42178afd7075975bb846631f6fcace873eac76697c2f0a994f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XZZGVO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDZdPMYaLtYTgTeI6RY6y%2BZCnarQNMwVuG3pRHEzoC9dwIhAKnXqcXyQSeAO0ya6Srxu0BBRlRuKjkxLT%2FzkJSssQvAKv8DCGoQABoMNjM3NDIzMTgzODA1IgyZL8TWxkkd5ROeesMq3AP0CZgVdZ%2FG2PpV%2Fgl3O008hcCr7AbuBrPPF3M9Ah41zA0Xpi7TiaPPP4fOhrSxWwdY9ekyijLW4endKpiRTrktgZfN6dOdQ%2F9kRbGtMcvdFYIjhyZm5KT4tsTTaxO%2BnsM4HYpfhpKest9rMzEZyj0yNeF%2BCfusD4faFPeGEqAWnI%2BqW4iLlfdO9u1B37ATUUp%2BCk21XzDwgvUC%2Bs1ICL2hJ0J9PfF2mF5%2FkWhdGigtQcu3Svleip832jBKG%2FCxFVtcfQqs5VKtTefwmbtr%2FRW%2BsHR6S4htJ609Pn204BOX0VO199UlFrzYrH4VzmZlkGtqLpBuJmmtGx2p1olpClmzgOJWfTqVQTnRxqQdf0FxWcf0AfYQu3dVFJip%2FoRug7iimMZLYeiLq%2BNNPGV42gqajkVYfmb4Rb8hOCA4fZ2eJdQMg3lU8t8Rwj%2BoOSojNE1iQw42oQgsdzdTiL9eOcaGeRfMxSM57HQ0rhj9Aj%2BmiZaPtTDZstHIPKuj55OHtWwXq5n4sCtwg0oA%2Bv9HZOBckknkvqxtpE%2FX4IPLEFr%2BNydC4%2FmfKE9j7PFvkXHu8a5yvn%2BPRcAhGRlhEQlNTRumowWieb0x%2BhUyZMIYTpzYeJ%2BWr9pHufe50ZHBUjCqm8q9BjqkAeo2kGGJ9vTisMeQ7dVSQMbtzjmllZgoVGhVEGfB%2FcEqsEkpvYc9JZEBk1454WnXdSoenDFdJYLzpuPqzCybjDnZRnvOKlWFOPVa1QMXSmNdsCNvUF1grZMBRlOTzCdGHk%2FuQFBcCe1%2B1bX%2F5GJaLkVoQGwKWoNOQ5cj7dH%2F1XLab0z%2FTtWE9NBiiA8xXeT4uXSI0qyid6BhEOAs8Sg2E9Yw9bhk&X-Amz-Signature=5d44e26b5498eb235cae722aea5b4aa74dfeaec6751d2b4d00beaf5e4c9accb1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XZZGVO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDZdPMYaLtYTgTeI6RY6y%2BZCnarQNMwVuG3pRHEzoC9dwIhAKnXqcXyQSeAO0ya6Srxu0BBRlRuKjkxLT%2FzkJSssQvAKv8DCGoQABoMNjM3NDIzMTgzODA1IgyZL8TWxkkd5ROeesMq3AP0CZgVdZ%2FG2PpV%2Fgl3O008hcCr7AbuBrPPF3M9Ah41zA0Xpi7TiaPPP4fOhrSxWwdY9ekyijLW4endKpiRTrktgZfN6dOdQ%2F9kRbGtMcvdFYIjhyZm5KT4tsTTaxO%2BnsM4HYpfhpKest9rMzEZyj0yNeF%2BCfusD4faFPeGEqAWnI%2BqW4iLlfdO9u1B37ATUUp%2BCk21XzDwgvUC%2Bs1ICL2hJ0J9PfF2mF5%2FkWhdGigtQcu3Svleip832jBKG%2FCxFVtcfQqs5VKtTefwmbtr%2FRW%2BsHR6S4htJ609Pn204BOX0VO199UlFrzYrH4VzmZlkGtqLpBuJmmtGx2p1olpClmzgOJWfTqVQTnRxqQdf0FxWcf0AfYQu3dVFJip%2FoRug7iimMZLYeiLq%2BNNPGV42gqajkVYfmb4Rb8hOCA4fZ2eJdQMg3lU8t8Rwj%2BoOSojNE1iQw42oQgsdzdTiL9eOcaGeRfMxSM57HQ0rhj9Aj%2BmiZaPtTDZstHIPKuj55OHtWwXq5n4sCtwg0oA%2Bv9HZOBckknkvqxtpE%2FX4IPLEFr%2BNydC4%2FmfKE9j7PFvkXHu8a5yvn%2BPRcAhGRlhEQlNTRumowWieb0x%2BhUyZMIYTpzYeJ%2BWr9pHufe50ZHBUjCqm8q9BjqkAeo2kGGJ9vTisMeQ7dVSQMbtzjmllZgoVGhVEGfB%2FcEqsEkpvYc9JZEBk1454WnXdSoenDFdJYLzpuPqzCybjDnZRnvOKlWFOPVa1QMXSmNdsCNvUF1grZMBRlOTzCdGHk%2FuQFBcCe1%2B1bX%2F5GJaLkVoQGwKWoNOQ5cj7dH%2F1XLab0z%2FTtWE9NBiiA8xXeT4uXSI0qyid6BhEOAs8Sg2E9Yw9bhk&X-Amz-Signature=1f5f9cbf0776e25a17d36bd72633f66cd101f33d02c06a80f200ff6f3e69b149&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XZZGVO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDZdPMYaLtYTgTeI6RY6y%2BZCnarQNMwVuG3pRHEzoC9dwIhAKnXqcXyQSeAO0ya6Srxu0BBRlRuKjkxLT%2FzkJSssQvAKv8DCGoQABoMNjM3NDIzMTgzODA1IgyZL8TWxkkd5ROeesMq3AP0CZgVdZ%2FG2PpV%2Fgl3O008hcCr7AbuBrPPF3M9Ah41zA0Xpi7TiaPPP4fOhrSxWwdY9ekyijLW4endKpiRTrktgZfN6dOdQ%2F9kRbGtMcvdFYIjhyZm5KT4tsTTaxO%2BnsM4HYpfhpKest9rMzEZyj0yNeF%2BCfusD4faFPeGEqAWnI%2BqW4iLlfdO9u1B37ATUUp%2BCk21XzDwgvUC%2Bs1ICL2hJ0J9PfF2mF5%2FkWhdGigtQcu3Svleip832jBKG%2FCxFVtcfQqs5VKtTefwmbtr%2FRW%2BsHR6S4htJ609Pn204BOX0VO199UlFrzYrH4VzmZlkGtqLpBuJmmtGx2p1olpClmzgOJWfTqVQTnRxqQdf0FxWcf0AfYQu3dVFJip%2FoRug7iimMZLYeiLq%2BNNPGV42gqajkVYfmb4Rb8hOCA4fZ2eJdQMg3lU8t8Rwj%2BoOSojNE1iQw42oQgsdzdTiL9eOcaGeRfMxSM57HQ0rhj9Aj%2BmiZaPtTDZstHIPKuj55OHtWwXq5n4sCtwg0oA%2Bv9HZOBckknkvqxtpE%2FX4IPLEFr%2BNydC4%2FmfKE9j7PFvkXHu8a5yvn%2BPRcAhGRlhEQlNTRumowWieb0x%2BhUyZMIYTpzYeJ%2BWr9pHufe50ZHBUjCqm8q9BjqkAeo2kGGJ9vTisMeQ7dVSQMbtzjmllZgoVGhVEGfB%2FcEqsEkpvYc9JZEBk1454WnXdSoenDFdJYLzpuPqzCybjDnZRnvOKlWFOPVa1QMXSmNdsCNvUF1grZMBRlOTzCdGHk%2FuQFBcCe1%2B1bX%2F5GJaLkVoQGwKWoNOQ5cj7dH%2F1XLab0z%2FTtWE9NBiiA8xXeT4uXSI0qyid6BhEOAs8Sg2E9Yw9bhk&X-Amz-Signature=210f1238d40d59ab3bd32f47dd5efbf1038f6838f27cdae3e6dc81e78b49b363&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
