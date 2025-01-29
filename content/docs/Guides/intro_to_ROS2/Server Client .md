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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOILPBVM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaq0Axa1EIs2s7mNoL%2FOI7ddh9F6Dk9q6QA0gUeY7MWAiBOlaCH8shGTUBBDgUD8bYt5lYdr9vlxkLfF7u9P88lWiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME3nvrn%2FEymx0CfGRKtwDnztDGPujPtnGlYWwZlcYhMzoJaPllY1sGTES7S8sTBQmOsJZXI5EyGXdBzZpqcC%2F1l1vVMw%2BUDht3VuV3xMB%2BL4syChoHljc9vCRW1X%2BMct%2FOmE8yCODsaz3OgF43v432NxxJMzk8IQW4HdUlV%2BkrYGGcUZOY0ihZSlOWhXPyCWEHHw9U4BEId%2FRABqyaFdSDaCtJOVX32eurFLGaOm1GNeAL1m1%2FlKmKlJsNXcTRsH4saYuxgcw7yUTxz04qtDNZQu4i5HhQ13tIHNBwC0r3Y%2FJ50iY5DZIGX%2F%2FEcjpJS0jLeL%2FdTtOqR9FQH8pQTIv6RQp87BAXcDCXWMRFNfFqumatwXAyBz3AUbD22xJ7frgLTf7LMXF9PCIXr4iuzZLj7z59jMBlWiplHLw6QeUfdYT86nRJgrg7ZoBkhNMiwkrYu1ojiKxUHDxULCb%2BT0E0iydimKoMqnZtN%2BfWYyxFAgRJKR1boXDbdpcEOH3vKUB7EUXAvgf%2Fmz4B30R%2FlisHRTuNI8y7sQMPjh21CpR8ZAap2El9McSKZ4%2Fs7YgSeABDpYSOz4ppXAX65GzzYvdSwtBzQf3OqlQHeDzygB4O9%2BrtFvA3Xi7m0SbSmXDDm7Sc8nwgiEzNvA8MZ4wlcnnvAY6pgG%2FjCusXIpQJWLYVel%2B6%2FGwVy7FGrw98L7pdfHN2Le41fqweJIvKcSDoFJnXyGt3ne2cO%2F6hmr%2FeVMdzvKZUaNAgBvMzaBT9WFVrqrUOgbVL62cEOogaMRGjGxK6O%2FhEohj2sbRwCkoxrTfWjKd%2Fn2XY1Ruk0tO12cRdlP2eQ7Nf1YM0wJZG46NEEIi8FTcqkn7dO%2BUDwau3gSF4O0SohAPVTx%2FjNLI&X-Amz-Signature=eb65ab3c1ca3c5eaf700f2cc7e9080ff9946c85d71e5a7b1053697d857cfcef9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOILPBVM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaq0Axa1EIs2s7mNoL%2FOI7ddh9F6Dk9q6QA0gUeY7MWAiBOlaCH8shGTUBBDgUD8bYt5lYdr9vlxkLfF7u9P88lWiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME3nvrn%2FEymx0CfGRKtwDnztDGPujPtnGlYWwZlcYhMzoJaPllY1sGTES7S8sTBQmOsJZXI5EyGXdBzZpqcC%2F1l1vVMw%2BUDht3VuV3xMB%2BL4syChoHljc9vCRW1X%2BMct%2FOmE8yCODsaz3OgF43v432NxxJMzk8IQW4HdUlV%2BkrYGGcUZOY0ihZSlOWhXPyCWEHHw9U4BEId%2FRABqyaFdSDaCtJOVX32eurFLGaOm1GNeAL1m1%2FlKmKlJsNXcTRsH4saYuxgcw7yUTxz04qtDNZQu4i5HhQ13tIHNBwC0r3Y%2FJ50iY5DZIGX%2F%2FEcjpJS0jLeL%2FdTtOqR9FQH8pQTIv6RQp87BAXcDCXWMRFNfFqumatwXAyBz3AUbD22xJ7frgLTf7LMXF9PCIXr4iuzZLj7z59jMBlWiplHLw6QeUfdYT86nRJgrg7ZoBkhNMiwkrYu1ojiKxUHDxULCb%2BT0E0iydimKoMqnZtN%2BfWYyxFAgRJKR1boXDbdpcEOH3vKUB7EUXAvgf%2Fmz4B30R%2FlisHRTuNI8y7sQMPjh21CpR8ZAap2El9McSKZ4%2Fs7YgSeABDpYSOz4ppXAX65GzzYvdSwtBzQf3OqlQHeDzygB4O9%2BrtFvA3Xi7m0SbSmXDDm7Sc8nwgiEzNvA8MZ4wlcnnvAY6pgG%2FjCusXIpQJWLYVel%2B6%2FGwVy7FGrw98L7pdfHN2Le41fqweJIvKcSDoFJnXyGt3ne2cO%2F6hmr%2FeVMdzvKZUaNAgBvMzaBT9WFVrqrUOgbVL62cEOogaMRGjGxK6O%2FhEohj2sbRwCkoxrTfWjKd%2Fn2XY1Ruk0tO12cRdlP2eQ7Nf1YM0wJZG46NEEIi8FTcqkn7dO%2BUDwau3gSF4O0SohAPVTx%2FjNLI&X-Amz-Signature=6c6b25832322a7a94689623028498d0a3a109f4c13090688065efbe80fc53e79&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOILPBVM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaq0Axa1EIs2s7mNoL%2FOI7ddh9F6Dk9q6QA0gUeY7MWAiBOlaCH8shGTUBBDgUD8bYt5lYdr9vlxkLfF7u9P88lWiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME3nvrn%2FEymx0CfGRKtwDnztDGPujPtnGlYWwZlcYhMzoJaPllY1sGTES7S8sTBQmOsJZXI5EyGXdBzZpqcC%2F1l1vVMw%2BUDht3VuV3xMB%2BL4syChoHljc9vCRW1X%2BMct%2FOmE8yCODsaz3OgF43v432NxxJMzk8IQW4HdUlV%2BkrYGGcUZOY0ihZSlOWhXPyCWEHHw9U4BEId%2FRABqyaFdSDaCtJOVX32eurFLGaOm1GNeAL1m1%2FlKmKlJsNXcTRsH4saYuxgcw7yUTxz04qtDNZQu4i5HhQ13tIHNBwC0r3Y%2FJ50iY5DZIGX%2F%2FEcjpJS0jLeL%2FdTtOqR9FQH8pQTIv6RQp87BAXcDCXWMRFNfFqumatwXAyBz3AUbD22xJ7frgLTf7LMXF9PCIXr4iuzZLj7z59jMBlWiplHLw6QeUfdYT86nRJgrg7ZoBkhNMiwkrYu1ojiKxUHDxULCb%2BT0E0iydimKoMqnZtN%2BfWYyxFAgRJKR1boXDbdpcEOH3vKUB7EUXAvgf%2Fmz4B30R%2FlisHRTuNI8y7sQMPjh21CpR8ZAap2El9McSKZ4%2Fs7YgSeABDpYSOz4ppXAX65GzzYvdSwtBzQf3OqlQHeDzygB4O9%2BrtFvA3Xi7m0SbSmXDDm7Sc8nwgiEzNvA8MZ4wlcnnvAY6pgG%2FjCusXIpQJWLYVel%2B6%2FGwVy7FGrw98L7pdfHN2Le41fqweJIvKcSDoFJnXyGt3ne2cO%2F6hmr%2FeVMdzvKZUaNAgBvMzaBT9WFVrqrUOgbVL62cEOogaMRGjGxK6O%2FhEohj2sbRwCkoxrTfWjKd%2Fn2XY1Ruk0tO12cRdlP2eQ7Nf1YM0wJZG46NEEIi8FTcqkn7dO%2BUDwau3gSF4O0SohAPVTx%2FjNLI&X-Amz-Signature=7f69ab84492736929bd08f529fcda2a33bc1d1b95feb816bf955cee958f1a14b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOILPBVM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaq0Axa1EIs2s7mNoL%2FOI7ddh9F6Dk9q6QA0gUeY7MWAiBOlaCH8shGTUBBDgUD8bYt5lYdr9vlxkLfF7u9P88lWiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME3nvrn%2FEymx0CfGRKtwDnztDGPujPtnGlYWwZlcYhMzoJaPllY1sGTES7S8sTBQmOsJZXI5EyGXdBzZpqcC%2F1l1vVMw%2BUDht3VuV3xMB%2BL4syChoHljc9vCRW1X%2BMct%2FOmE8yCODsaz3OgF43v432NxxJMzk8IQW4HdUlV%2BkrYGGcUZOY0ihZSlOWhXPyCWEHHw9U4BEId%2FRABqyaFdSDaCtJOVX32eurFLGaOm1GNeAL1m1%2FlKmKlJsNXcTRsH4saYuxgcw7yUTxz04qtDNZQu4i5HhQ13tIHNBwC0r3Y%2FJ50iY5DZIGX%2F%2FEcjpJS0jLeL%2FdTtOqR9FQH8pQTIv6RQp87BAXcDCXWMRFNfFqumatwXAyBz3AUbD22xJ7frgLTf7LMXF9PCIXr4iuzZLj7z59jMBlWiplHLw6QeUfdYT86nRJgrg7ZoBkhNMiwkrYu1ojiKxUHDxULCb%2BT0E0iydimKoMqnZtN%2BfWYyxFAgRJKR1boXDbdpcEOH3vKUB7EUXAvgf%2Fmz4B30R%2FlisHRTuNI8y7sQMPjh21CpR8ZAap2El9McSKZ4%2Fs7YgSeABDpYSOz4ppXAX65GzzYvdSwtBzQf3OqlQHeDzygB4O9%2BrtFvA3Xi7m0SbSmXDDm7Sc8nwgiEzNvA8MZ4wlcnnvAY6pgG%2FjCusXIpQJWLYVel%2B6%2FGwVy7FGrw98L7pdfHN2Le41fqweJIvKcSDoFJnXyGt3ne2cO%2F6hmr%2FeVMdzvKZUaNAgBvMzaBT9WFVrqrUOgbVL62cEOogaMRGjGxK6O%2FhEohj2sbRwCkoxrTfWjKd%2Fn2XY1Ruk0tO12cRdlP2eQ7Nf1YM0wJZG46NEEIi8FTcqkn7dO%2BUDwau3gSF4O0SohAPVTx%2FjNLI&X-Amz-Signature=645e825976c462ccf79f39f8b2ff3a7b9fd1e883b0171e4fe71fed1a3b6055f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOILPBVM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaq0Axa1EIs2s7mNoL%2FOI7ddh9F6Dk9q6QA0gUeY7MWAiBOlaCH8shGTUBBDgUD8bYt5lYdr9vlxkLfF7u9P88lWiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME3nvrn%2FEymx0CfGRKtwDnztDGPujPtnGlYWwZlcYhMzoJaPllY1sGTES7S8sTBQmOsJZXI5EyGXdBzZpqcC%2F1l1vVMw%2BUDht3VuV3xMB%2BL4syChoHljc9vCRW1X%2BMct%2FOmE8yCODsaz3OgF43v432NxxJMzk8IQW4HdUlV%2BkrYGGcUZOY0ihZSlOWhXPyCWEHHw9U4BEId%2FRABqyaFdSDaCtJOVX32eurFLGaOm1GNeAL1m1%2FlKmKlJsNXcTRsH4saYuxgcw7yUTxz04qtDNZQu4i5HhQ13tIHNBwC0r3Y%2FJ50iY5DZIGX%2F%2FEcjpJS0jLeL%2FdTtOqR9FQH8pQTIv6RQp87BAXcDCXWMRFNfFqumatwXAyBz3AUbD22xJ7frgLTf7LMXF9PCIXr4iuzZLj7z59jMBlWiplHLw6QeUfdYT86nRJgrg7ZoBkhNMiwkrYu1ojiKxUHDxULCb%2BT0E0iydimKoMqnZtN%2BfWYyxFAgRJKR1boXDbdpcEOH3vKUB7EUXAvgf%2Fmz4B30R%2FlisHRTuNI8y7sQMPjh21CpR8ZAap2El9McSKZ4%2Fs7YgSeABDpYSOz4ppXAX65GzzYvdSwtBzQf3OqlQHeDzygB4O9%2BrtFvA3Xi7m0SbSmXDDm7Sc8nwgiEzNvA8MZ4wlcnnvAY6pgG%2FjCusXIpQJWLYVel%2B6%2FGwVy7FGrw98L7pdfHN2Le41fqweJIvKcSDoFJnXyGt3ne2cO%2F6hmr%2FeVMdzvKZUaNAgBvMzaBT9WFVrqrUOgbVL62cEOogaMRGjGxK6O%2FhEohj2sbRwCkoxrTfWjKd%2Fn2XY1Ruk0tO12cRdlP2eQ7Nf1YM0wJZG46NEEIi8FTcqkn7dO%2BUDwau3gSF4O0SohAPVTx%2FjNLI&X-Amz-Signature=75be96dbf679d8127441f4a38a87eb10a577172c3e1783ab667f1e91c1f20653&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
