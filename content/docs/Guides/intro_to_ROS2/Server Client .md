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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDDZBRG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHZ7N%2BGR7MnP2d0%2BaSzzLVjTdwikK%2Fa31PB0H%2FyDwGIuAiAx5MT8liv5%2BxOslTGcDmG6g9nytP3EVB0qlb14W468USqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz9NeFC8QIB90o8ZsKtwDmQIt4LWNu9hEAQx8ugVUas4xvWOP02W1mNiLuFYVtrtZf6XoFhYzQ63clmIhJMxHcPX6z2KnB0s%2BFHgj8WJB2xQETnqzsrQOsnVN4SXPZr7eyl%2BWtM%2B7Z9y6o0d52EvWGA0eO6qVHxEX0oK0CN1Xhz7gucnnV5%2BVsExf4lMfON5W2mqULf65fHj7vEYNTXP%2BYViE5tgWmVxBWFJQrEodwwAh935jH196mxdRqu2mP80Q4o4H8raCJhFWa3qxpHFJtm8Xa7G3MEPMDeIWJkSBs4su1Agw4yWZAy8FULRN93KgbUhwu8ZihvCUHidHPIeJPCjG5DFxzeTyyPaBJot4eois%2BNfpWCRgb6A9aO%2BCKdWATWQFDtrAxtfsidceLcdJisXTTItWl5XWwy5Z1bUJrEeWATw9XvAtASbF9KNlTfRtCKsM1c39sv%2BXQuSpkfrPD3ZRqaPdS7po5qXKc0p9jgjiqGOK1ovSNJ0V6%2Bki6qQf3CEYJ9ih90Zkx6y2v1ZQJr5RflqYsbVXcgYyFXcTLC6thqpHu%2Bn%2B2a5rX5xfM2GiLkDD%2BNHKN56BYeSRTqBADSqPjP2Hq9cF3gfYCEfGhzCAUnDrcH855HVk6xJih7csKzLt9qg%2BNL9Jma8whvP%2BvgY6pgHqyJfXJymHYRXZs%2B8kKPFXprB8kSKdd6IRBMOZBzHxIIvCNZ%2BqH%2FpeR6Pou1CyHjjq6oMjwkjGcJffUA2NIO%2FIPWTkBtjq3J3wCAV6e7YmUiDQHuGxrUAYs7GRo11wK19qcCp7ANup7Jhypv8%2F7mzfini9iMUl6JQJV0jF1Noz1UP6sNjqYBdQJwrZlqv2%2BGTYzofN17imY4fJDclSV1mjw0TfnraC&X-Amz-Signature=65fd61f06330de32f2bace7e1b960bdc366049358b5b74dc132ecbee4a227e19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDDZBRG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHZ7N%2BGR7MnP2d0%2BaSzzLVjTdwikK%2Fa31PB0H%2FyDwGIuAiAx5MT8liv5%2BxOslTGcDmG6g9nytP3EVB0qlb14W468USqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz9NeFC8QIB90o8ZsKtwDmQIt4LWNu9hEAQx8ugVUas4xvWOP02W1mNiLuFYVtrtZf6XoFhYzQ63clmIhJMxHcPX6z2KnB0s%2BFHgj8WJB2xQETnqzsrQOsnVN4SXPZr7eyl%2BWtM%2B7Z9y6o0d52EvWGA0eO6qVHxEX0oK0CN1Xhz7gucnnV5%2BVsExf4lMfON5W2mqULf65fHj7vEYNTXP%2BYViE5tgWmVxBWFJQrEodwwAh935jH196mxdRqu2mP80Q4o4H8raCJhFWa3qxpHFJtm8Xa7G3MEPMDeIWJkSBs4su1Agw4yWZAy8FULRN93KgbUhwu8ZihvCUHidHPIeJPCjG5DFxzeTyyPaBJot4eois%2BNfpWCRgb6A9aO%2BCKdWATWQFDtrAxtfsidceLcdJisXTTItWl5XWwy5Z1bUJrEeWATw9XvAtASbF9KNlTfRtCKsM1c39sv%2BXQuSpkfrPD3ZRqaPdS7po5qXKc0p9jgjiqGOK1ovSNJ0V6%2Bki6qQf3CEYJ9ih90Zkx6y2v1ZQJr5RflqYsbVXcgYyFXcTLC6thqpHu%2Bn%2B2a5rX5xfM2GiLkDD%2BNHKN56BYeSRTqBADSqPjP2Hq9cF3gfYCEfGhzCAUnDrcH855HVk6xJih7csKzLt9qg%2BNL9Jma8whvP%2BvgY6pgHqyJfXJymHYRXZs%2B8kKPFXprB8kSKdd6IRBMOZBzHxIIvCNZ%2BqH%2FpeR6Pou1CyHjjq6oMjwkjGcJffUA2NIO%2FIPWTkBtjq3J3wCAV6e7YmUiDQHuGxrUAYs7GRo11wK19qcCp7ANup7Jhypv8%2F7mzfini9iMUl6JQJV0jF1Noz1UP6sNjqYBdQJwrZlqv2%2BGTYzofN17imY4fJDclSV1mjw0TfnraC&X-Amz-Signature=007c6fc56c5cc7928399da24db198aa371366caf591edfb553480360efc3da32&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDDZBRG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHZ7N%2BGR7MnP2d0%2BaSzzLVjTdwikK%2Fa31PB0H%2FyDwGIuAiAx5MT8liv5%2BxOslTGcDmG6g9nytP3EVB0qlb14W468USqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz9NeFC8QIB90o8ZsKtwDmQIt4LWNu9hEAQx8ugVUas4xvWOP02W1mNiLuFYVtrtZf6XoFhYzQ63clmIhJMxHcPX6z2KnB0s%2BFHgj8WJB2xQETnqzsrQOsnVN4SXPZr7eyl%2BWtM%2B7Z9y6o0d52EvWGA0eO6qVHxEX0oK0CN1Xhz7gucnnV5%2BVsExf4lMfON5W2mqULf65fHj7vEYNTXP%2BYViE5tgWmVxBWFJQrEodwwAh935jH196mxdRqu2mP80Q4o4H8raCJhFWa3qxpHFJtm8Xa7G3MEPMDeIWJkSBs4su1Agw4yWZAy8FULRN93KgbUhwu8ZihvCUHidHPIeJPCjG5DFxzeTyyPaBJot4eois%2BNfpWCRgb6A9aO%2BCKdWATWQFDtrAxtfsidceLcdJisXTTItWl5XWwy5Z1bUJrEeWATw9XvAtASbF9KNlTfRtCKsM1c39sv%2BXQuSpkfrPD3ZRqaPdS7po5qXKc0p9jgjiqGOK1ovSNJ0V6%2Bki6qQf3CEYJ9ih90Zkx6y2v1ZQJr5RflqYsbVXcgYyFXcTLC6thqpHu%2Bn%2B2a5rX5xfM2GiLkDD%2BNHKN56BYeSRTqBADSqPjP2Hq9cF3gfYCEfGhzCAUnDrcH855HVk6xJih7csKzLt9qg%2BNL9Jma8whvP%2BvgY6pgHqyJfXJymHYRXZs%2B8kKPFXprB8kSKdd6IRBMOZBzHxIIvCNZ%2BqH%2FpeR6Pou1CyHjjq6oMjwkjGcJffUA2NIO%2FIPWTkBtjq3J3wCAV6e7YmUiDQHuGxrUAYs7GRo11wK19qcCp7ANup7Jhypv8%2F7mzfini9iMUl6JQJV0jF1Noz1UP6sNjqYBdQJwrZlqv2%2BGTYzofN17imY4fJDclSV1mjw0TfnraC&X-Amz-Signature=53c8c7a1d9fb860ba51f3a9ca48fb6218c5a6b60636c3015c6207e3f01e6ae44&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDDZBRG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHZ7N%2BGR7MnP2d0%2BaSzzLVjTdwikK%2Fa31PB0H%2FyDwGIuAiAx5MT8liv5%2BxOslTGcDmG6g9nytP3EVB0qlb14W468USqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz9NeFC8QIB90o8ZsKtwDmQIt4LWNu9hEAQx8ugVUas4xvWOP02W1mNiLuFYVtrtZf6XoFhYzQ63clmIhJMxHcPX6z2KnB0s%2BFHgj8WJB2xQETnqzsrQOsnVN4SXPZr7eyl%2BWtM%2B7Z9y6o0d52EvWGA0eO6qVHxEX0oK0CN1Xhz7gucnnV5%2BVsExf4lMfON5W2mqULf65fHj7vEYNTXP%2BYViE5tgWmVxBWFJQrEodwwAh935jH196mxdRqu2mP80Q4o4H8raCJhFWa3qxpHFJtm8Xa7G3MEPMDeIWJkSBs4su1Agw4yWZAy8FULRN93KgbUhwu8ZihvCUHidHPIeJPCjG5DFxzeTyyPaBJot4eois%2BNfpWCRgb6A9aO%2BCKdWATWQFDtrAxtfsidceLcdJisXTTItWl5XWwy5Z1bUJrEeWATw9XvAtASbF9KNlTfRtCKsM1c39sv%2BXQuSpkfrPD3ZRqaPdS7po5qXKc0p9jgjiqGOK1ovSNJ0V6%2Bki6qQf3CEYJ9ih90Zkx6y2v1ZQJr5RflqYsbVXcgYyFXcTLC6thqpHu%2Bn%2B2a5rX5xfM2GiLkDD%2BNHKN56BYeSRTqBADSqPjP2Hq9cF3gfYCEfGhzCAUnDrcH855HVk6xJih7csKzLt9qg%2BNL9Jma8whvP%2BvgY6pgHqyJfXJymHYRXZs%2B8kKPFXprB8kSKdd6IRBMOZBzHxIIvCNZ%2BqH%2FpeR6Pou1CyHjjq6oMjwkjGcJffUA2NIO%2FIPWTkBtjq3J3wCAV6e7YmUiDQHuGxrUAYs7GRo11wK19qcCp7ANup7Jhypv8%2F7mzfini9iMUl6JQJV0jF1Noz1UP6sNjqYBdQJwrZlqv2%2BGTYzofN17imY4fJDclSV1mjw0TfnraC&X-Amz-Signature=24c5db6d3992fd07dbd17a99b88db056986531eae858cfac513caa8a521102fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDDZBRG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHZ7N%2BGR7MnP2d0%2BaSzzLVjTdwikK%2Fa31PB0H%2FyDwGIuAiAx5MT8liv5%2BxOslTGcDmG6g9nytP3EVB0qlb14W468USqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz9NeFC8QIB90o8ZsKtwDmQIt4LWNu9hEAQx8ugVUas4xvWOP02W1mNiLuFYVtrtZf6XoFhYzQ63clmIhJMxHcPX6z2KnB0s%2BFHgj8WJB2xQETnqzsrQOsnVN4SXPZr7eyl%2BWtM%2B7Z9y6o0d52EvWGA0eO6qVHxEX0oK0CN1Xhz7gucnnV5%2BVsExf4lMfON5W2mqULf65fHj7vEYNTXP%2BYViE5tgWmVxBWFJQrEodwwAh935jH196mxdRqu2mP80Q4o4H8raCJhFWa3qxpHFJtm8Xa7G3MEPMDeIWJkSBs4su1Agw4yWZAy8FULRN93KgbUhwu8ZihvCUHidHPIeJPCjG5DFxzeTyyPaBJot4eois%2BNfpWCRgb6A9aO%2BCKdWATWQFDtrAxtfsidceLcdJisXTTItWl5XWwy5Z1bUJrEeWATw9XvAtASbF9KNlTfRtCKsM1c39sv%2BXQuSpkfrPD3ZRqaPdS7po5qXKc0p9jgjiqGOK1ovSNJ0V6%2Bki6qQf3CEYJ9ih90Zkx6y2v1ZQJr5RflqYsbVXcgYyFXcTLC6thqpHu%2Bn%2B2a5rX5xfM2GiLkDD%2BNHKN56BYeSRTqBADSqPjP2Hq9cF3gfYCEfGhzCAUnDrcH855HVk6xJih7csKzLt9qg%2BNL9Jma8whvP%2BvgY6pgHqyJfXJymHYRXZs%2B8kKPFXprB8kSKdd6IRBMOZBzHxIIvCNZ%2BqH%2FpeR6Pou1CyHjjq6oMjwkjGcJffUA2NIO%2FIPWTkBtjq3J3wCAV6e7YmUiDQHuGxrUAYs7GRo11wK19qcCp7ANup7Jhypv8%2F7mzfini9iMUl6JQJV0jF1Noz1UP6sNjqYBdQJwrZlqv2%2BGTYzofN17imY4fJDclSV1mjw0TfnraC&X-Amz-Signature=4cf77e14b411b3cb11942af2c5d40894b04ccc7f2503dc5017e1c4ed3881a1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
