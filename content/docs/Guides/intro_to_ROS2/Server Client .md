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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYWJON5%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFoFljT%2FkB4aZKoiFg0QwjludfHjxMMtlo9JJ%2B7u13AnAiAnaQU%2B9b27hUaWnwnBk6RMLHIIQdLklp4UUtNW4%2FhLSyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMGfpOjwL4esXnlsaHKtwD1FOz40QWBF1u1MvfUqBdzuSCjF3JT4rnGbH%2Bhv9mHYu8OPBNrDwrBUSSww8mCWlSbw%2F3Uwaiiy9g0H75K068De0lTf4benudQsnbRUInfYeQxVh%2FjoOCccgRody9Kq0DI2V8G491G3e20A%2BL%2FDc8PZsAsaKrPVQ6qkKvhEAdpsZNuPskY%2FuSOxgfVOSW31U%2FAZgCAn2g6BwMD6pshQqrEh9WbEzNB1t47SekIWhsfQXj8le8tM7Y4Bt%2FpQSdHbKJOORIozRCaxs11uypkBmozKcGKnYyPT9pXbvprEp1rdMfpICzoCKzFlY23uwytwcJOGFxVLFA6wePKUk9L4nkmfkeEnaYs%2Fa2WIWvmlfFEjXtQipHUTcDw4oq8Hqmd5%2Be%2FY4ZR6SYoDlylZpKyLPfKWG1LeKXqcwmr3Py4HieIsTkPacmw2ZMnw83uOu19Fj5O1S%2FfZFQcaSmIHvXYiGtth86siwLp17N9XwPd9X9tgqHzDbQr9xlHeHXHtV%2F1feezkw7Lp9W6nTBFP3BETLkBbF%2BzrUcFudD8g0Qp9YFe2gjqg5E8UdemJ%2FuYjCivVwBCNu21IsqmRBAaCfE3brEXIkF2HeX9uqlxNaFhS%2BqqaxVJIAHmuCi0pYqANcwr8b6wQY6pgG1%2BmVseM1zOIIHmp4IFWYSOcO67jqj5su7JxpvRdODWKIBDZK6cgXPGd6NcSbZ3wzmOmGqLc9I4R7Ss0BcbB%2BjjILByRF3BtG3ghZFX2Jq7aK5Y%2BDyyo9vXO6xZqugv1NCfxYI6jUX5jgnwMQWCPTaArKn6RN2czxwyEC52u2BDJfkLuIp8ZA2XVuHWHybyAVGIbXMpqETtiXI5r0hotwkNNU9QyO9&X-Amz-Signature=23ac9533b24f85bbb182a6ad1c14cce1bd778091984129661bc73977e8945ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYWJON5%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFoFljT%2FkB4aZKoiFg0QwjludfHjxMMtlo9JJ%2B7u13AnAiAnaQU%2B9b27hUaWnwnBk6RMLHIIQdLklp4UUtNW4%2FhLSyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMGfpOjwL4esXnlsaHKtwD1FOz40QWBF1u1MvfUqBdzuSCjF3JT4rnGbH%2Bhv9mHYu8OPBNrDwrBUSSww8mCWlSbw%2F3Uwaiiy9g0H75K068De0lTf4benudQsnbRUInfYeQxVh%2FjoOCccgRody9Kq0DI2V8G491G3e20A%2BL%2FDc8PZsAsaKrPVQ6qkKvhEAdpsZNuPskY%2FuSOxgfVOSW31U%2FAZgCAn2g6BwMD6pshQqrEh9WbEzNB1t47SekIWhsfQXj8le8tM7Y4Bt%2FpQSdHbKJOORIozRCaxs11uypkBmozKcGKnYyPT9pXbvprEp1rdMfpICzoCKzFlY23uwytwcJOGFxVLFA6wePKUk9L4nkmfkeEnaYs%2Fa2WIWvmlfFEjXtQipHUTcDw4oq8Hqmd5%2Be%2FY4ZR6SYoDlylZpKyLPfKWG1LeKXqcwmr3Py4HieIsTkPacmw2ZMnw83uOu19Fj5O1S%2FfZFQcaSmIHvXYiGtth86siwLp17N9XwPd9X9tgqHzDbQr9xlHeHXHtV%2F1feezkw7Lp9W6nTBFP3BETLkBbF%2BzrUcFudD8g0Qp9YFe2gjqg5E8UdemJ%2FuYjCivVwBCNu21IsqmRBAaCfE3brEXIkF2HeX9uqlxNaFhS%2BqqaxVJIAHmuCi0pYqANcwr8b6wQY6pgG1%2BmVseM1zOIIHmp4IFWYSOcO67jqj5su7JxpvRdODWKIBDZK6cgXPGd6NcSbZ3wzmOmGqLc9I4R7Ss0BcbB%2BjjILByRF3BtG3ghZFX2Jq7aK5Y%2BDyyo9vXO6xZqugv1NCfxYI6jUX5jgnwMQWCPTaArKn6RN2czxwyEC52u2BDJfkLuIp8ZA2XVuHWHybyAVGIbXMpqETtiXI5r0hotwkNNU9QyO9&X-Amz-Signature=eda6cfc4ee0d65f9c900afc3ebcc610d225fdd3bb0943fefa87817e1102f1d37&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYWJON5%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFoFljT%2FkB4aZKoiFg0QwjludfHjxMMtlo9JJ%2B7u13AnAiAnaQU%2B9b27hUaWnwnBk6RMLHIIQdLklp4UUtNW4%2FhLSyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMGfpOjwL4esXnlsaHKtwD1FOz40QWBF1u1MvfUqBdzuSCjF3JT4rnGbH%2Bhv9mHYu8OPBNrDwrBUSSww8mCWlSbw%2F3Uwaiiy9g0H75K068De0lTf4benudQsnbRUInfYeQxVh%2FjoOCccgRody9Kq0DI2V8G491G3e20A%2BL%2FDc8PZsAsaKrPVQ6qkKvhEAdpsZNuPskY%2FuSOxgfVOSW31U%2FAZgCAn2g6BwMD6pshQqrEh9WbEzNB1t47SekIWhsfQXj8le8tM7Y4Bt%2FpQSdHbKJOORIozRCaxs11uypkBmozKcGKnYyPT9pXbvprEp1rdMfpICzoCKzFlY23uwytwcJOGFxVLFA6wePKUk9L4nkmfkeEnaYs%2Fa2WIWvmlfFEjXtQipHUTcDw4oq8Hqmd5%2Be%2FY4ZR6SYoDlylZpKyLPfKWG1LeKXqcwmr3Py4HieIsTkPacmw2ZMnw83uOu19Fj5O1S%2FfZFQcaSmIHvXYiGtth86siwLp17N9XwPd9X9tgqHzDbQr9xlHeHXHtV%2F1feezkw7Lp9W6nTBFP3BETLkBbF%2BzrUcFudD8g0Qp9YFe2gjqg5E8UdemJ%2FuYjCivVwBCNu21IsqmRBAaCfE3brEXIkF2HeX9uqlxNaFhS%2BqqaxVJIAHmuCi0pYqANcwr8b6wQY6pgG1%2BmVseM1zOIIHmp4IFWYSOcO67jqj5su7JxpvRdODWKIBDZK6cgXPGd6NcSbZ3wzmOmGqLc9I4R7Ss0BcbB%2BjjILByRF3BtG3ghZFX2Jq7aK5Y%2BDyyo9vXO6xZqugv1NCfxYI6jUX5jgnwMQWCPTaArKn6RN2czxwyEC52u2BDJfkLuIp8ZA2XVuHWHybyAVGIbXMpqETtiXI5r0hotwkNNU9QyO9&X-Amz-Signature=699f084ae7f3422cffc9ae2443a775f206a46b906cd9ae4b9ba576e4d8470f74&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYWJON5%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFoFljT%2FkB4aZKoiFg0QwjludfHjxMMtlo9JJ%2B7u13AnAiAnaQU%2B9b27hUaWnwnBk6RMLHIIQdLklp4UUtNW4%2FhLSyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMGfpOjwL4esXnlsaHKtwD1FOz40QWBF1u1MvfUqBdzuSCjF3JT4rnGbH%2Bhv9mHYu8OPBNrDwrBUSSww8mCWlSbw%2F3Uwaiiy9g0H75K068De0lTf4benudQsnbRUInfYeQxVh%2FjoOCccgRody9Kq0DI2V8G491G3e20A%2BL%2FDc8PZsAsaKrPVQ6qkKvhEAdpsZNuPskY%2FuSOxgfVOSW31U%2FAZgCAn2g6BwMD6pshQqrEh9WbEzNB1t47SekIWhsfQXj8le8tM7Y4Bt%2FpQSdHbKJOORIozRCaxs11uypkBmozKcGKnYyPT9pXbvprEp1rdMfpICzoCKzFlY23uwytwcJOGFxVLFA6wePKUk9L4nkmfkeEnaYs%2Fa2WIWvmlfFEjXtQipHUTcDw4oq8Hqmd5%2Be%2FY4ZR6SYoDlylZpKyLPfKWG1LeKXqcwmr3Py4HieIsTkPacmw2ZMnw83uOu19Fj5O1S%2FfZFQcaSmIHvXYiGtth86siwLp17N9XwPd9X9tgqHzDbQr9xlHeHXHtV%2F1feezkw7Lp9W6nTBFP3BETLkBbF%2BzrUcFudD8g0Qp9YFe2gjqg5E8UdemJ%2FuYjCivVwBCNu21IsqmRBAaCfE3brEXIkF2HeX9uqlxNaFhS%2BqqaxVJIAHmuCi0pYqANcwr8b6wQY6pgG1%2BmVseM1zOIIHmp4IFWYSOcO67jqj5su7JxpvRdODWKIBDZK6cgXPGd6NcSbZ3wzmOmGqLc9I4R7Ss0BcbB%2BjjILByRF3BtG3ghZFX2Jq7aK5Y%2BDyyo9vXO6xZqugv1NCfxYI6jUX5jgnwMQWCPTaArKn6RN2czxwyEC52u2BDJfkLuIp8ZA2XVuHWHybyAVGIbXMpqETtiXI5r0hotwkNNU9QyO9&X-Amz-Signature=9ebd3b657d41f62a92f0eafe9b2c82fb1937b765df70744921f57ac5091f12c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYWJON5%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFoFljT%2FkB4aZKoiFg0QwjludfHjxMMtlo9JJ%2B7u13AnAiAnaQU%2B9b27hUaWnwnBk6RMLHIIQdLklp4UUtNW4%2FhLSyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMGfpOjwL4esXnlsaHKtwD1FOz40QWBF1u1MvfUqBdzuSCjF3JT4rnGbH%2Bhv9mHYu8OPBNrDwrBUSSww8mCWlSbw%2F3Uwaiiy9g0H75K068De0lTf4benudQsnbRUInfYeQxVh%2FjoOCccgRody9Kq0DI2V8G491G3e20A%2BL%2FDc8PZsAsaKrPVQ6qkKvhEAdpsZNuPskY%2FuSOxgfVOSW31U%2FAZgCAn2g6BwMD6pshQqrEh9WbEzNB1t47SekIWhsfQXj8le8tM7Y4Bt%2FpQSdHbKJOORIozRCaxs11uypkBmozKcGKnYyPT9pXbvprEp1rdMfpICzoCKzFlY23uwytwcJOGFxVLFA6wePKUk9L4nkmfkeEnaYs%2Fa2WIWvmlfFEjXtQipHUTcDw4oq8Hqmd5%2Be%2FY4ZR6SYoDlylZpKyLPfKWG1LeKXqcwmr3Py4HieIsTkPacmw2ZMnw83uOu19Fj5O1S%2FfZFQcaSmIHvXYiGtth86siwLp17N9XwPd9X9tgqHzDbQr9xlHeHXHtV%2F1feezkw7Lp9W6nTBFP3BETLkBbF%2BzrUcFudD8g0Qp9YFe2gjqg5E8UdemJ%2FuYjCivVwBCNu21IsqmRBAaCfE3brEXIkF2HeX9uqlxNaFhS%2BqqaxVJIAHmuCi0pYqANcwr8b6wQY6pgG1%2BmVseM1zOIIHmp4IFWYSOcO67jqj5su7JxpvRdODWKIBDZK6cgXPGd6NcSbZ3wzmOmGqLc9I4R7Ss0BcbB%2BjjILByRF3BtG3ghZFX2Jq7aK5Y%2BDyyo9vXO6xZqugv1NCfxYI6jUX5jgnwMQWCPTaArKn6RN2czxwyEC52u2BDJfkLuIp8ZA2XVuHWHybyAVGIbXMpqETtiXI5r0hotwkNNU9QyO9&X-Amz-Signature=545e52e998ce1e4cdb40a69a79b3740b1b77e416cf232af0f75fcbe1bf1350c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
