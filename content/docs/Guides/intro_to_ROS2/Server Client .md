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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDY3ION%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCu4zpiA6odZPGXHBBdRWB0dd4Q0W1SOgn5I%2BWG70g8DQIhAJwo%2BLmcGrFanAwCIOfGnthMzZty%2FNNm%2BwcJ%2BTQgnr%2FeKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwk2wFPcrgF7WaNJHwq3AOCVoxf2tBHFAwsUEEovLzRRQX1UnnxNz2n%2FMJEdv28mVsDO25Bpq6jNUYWiEXgqoTtBd%2B2JfbLn5AFy3HNP44bQtpK8fGZoGWYiqv9szcg1iVCzs4M4%2BP%2FIFHzZF3LzEI4%2BhdIVFQ3qLCrbTxlbw0Fu90viDieKeOwZltO8gFRxb%2Fi%2FWn41yCkGWRUfIBqwcJwb0oxF3eH7DpgIRvvoJKwSXPZ31jFDV210R8nDn7n0cmcsuPW3xRej33EWjeGcVoX3uQ81uES1VLmX4zCS8e2K%2BpU%2FDo%2FyxGCWKAwo%2B9Il2Rw1KOAFSM7VII3fa4lw%2FKcE56A4bnYIDZRTqYnpykTcTgRhAQDhNcLoLO91hKBjxhzjBkCRj8gz8LmABBnGuLaZPFc7X5REKIB7VRob8kRrstmfxeGaKVpitSfcZAgWIRxSMZQ3WItzU9fcz%2FF08REWLHQNLMK9H38jbEERwvYzqOlaFJGfDI8yrmQsuzGDrQfNV4mQQn6QNDDnuJst0VSUgQDW8rqRkXaLeHnN%2BQ3NAb6X7jPeacU05arFt87q7oAAcbIfxZiIFsKcJaB6oLUeTMp481MzJWo%2BdktKflQhmhqyyBbI7sfJ92ZihNfhYOFtB30ahGtLO%2FeojCZwvXBBjqkAUJd7BMIBSdvOwo7zNo3fk8O2x3g3yzBH2fO%2BRc5846C1EQEPx%2Bsx6wvu3uTE%2Fc0K3FrGFgJLkBEZ7or4ieIvOXwLkXKBjZ%2B77CdSf%2Fx1CdGvEBuY%2FCqtfR0ya4AjbATNYh1c5Z2Tbf5yZNCnhCgSqpU3Ez9Z7iY2CuWP1JeVYDymavVLLoPCARmZXR78Izkjit3DWcxihQJemWIdYnIx%2B2l8QvO&X-Amz-Signature=1a327ef3a404a0c47b4335ec3667e5d0a717222a70641a0df6f752be926713f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDY3ION%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCu4zpiA6odZPGXHBBdRWB0dd4Q0W1SOgn5I%2BWG70g8DQIhAJwo%2BLmcGrFanAwCIOfGnthMzZty%2FNNm%2BwcJ%2BTQgnr%2FeKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwk2wFPcrgF7WaNJHwq3AOCVoxf2tBHFAwsUEEovLzRRQX1UnnxNz2n%2FMJEdv28mVsDO25Bpq6jNUYWiEXgqoTtBd%2B2JfbLn5AFy3HNP44bQtpK8fGZoGWYiqv9szcg1iVCzs4M4%2BP%2FIFHzZF3LzEI4%2BhdIVFQ3qLCrbTxlbw0Fu90viDieKeOwZltO8gFRxb%2Fi%2FWn41yCkGWRUfIBqwcJwb0oxF3eH7DpgIRvvoJKwSXPZ31jFDV210R8nDn7n0cmcsuPW3xRej33EWjeGcVoX3uQ81uES1VLmX4zCS8e2K%2BpU%2FDo%2FyxGCWKAwo%2B9Il2Rw1KOAFSM7VII3fa4lw%2FKcE56A4bnYIDZRTqYnpykTcTgRhAQDhNcLoLO91hKBjxhzjBkCRj8gz8LmABBnGuLaZPFc7X5REKIB7VRob8kRrstmfxeGaKVpitSfcZAgWIRxSMZQ3WItzU9fcz%2FF08REWLHQNLMK9H38jbEERwvYzqOlaFJGfDI8yrmQsuzGDrQfNV4mQQn6QNDDnuJst0VSUgQDW8rqRkXaLeHnN%2BQ3NAb6X7jPeacU05arFt87q7oAAcbIfxZiIFsKcJaB6oLUeTMp481MzJWo%2BdktKflQhmhqyyBbI7sfJ92ZihNfhYOFtB30ahGtLO%2FeojCZwvXBBjqkAUJd7BMIBSdvOwo7zNo3fk8O2x3g3yzBH2fO%2BRc5846C1EQEPx%2Bsx6wvu3uTE%2Fc0K3FrGFgJLkBEZ7or4ieIvOXwLkXKBjZ%2B77CdSf%2Fx1CdGvEBuY%2FCqtfR0ya4AjbATNYh1c5Z2Tbf5yZNCnhCgSqpU3Ez9Z7iY2CuWP1JeVYDymavVLLoPCARmZXR78Izkjit3DWcxihQJemWIdYnIx%2B2l8QvO&X-Amz-Signature=d8a8bd9774704ee506fdd26d71bc65f1487b3aa5ce1d1b747d39bdc46a0dbd79&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDY3ION%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCu4zpiA6odZPGXHBBdRWB0dd4Q0W1SOgn5I%2BWG70g8DQIhAJwo%2BLmcGrFanAwCIOfGnthMzZty%2FNNm%2BwcJ%2BTQgnr%2FeKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwk2wFPcrgF7WaNJHwq3AOCVoxf2tBHFAwsUEEovLzRRQX1UnnxNz2n%2FMJEdv28mVsDO25Bpq6jNUYWiEXgqoTtBd%2B2JfbLn5AFy3HNP44bQtpK8fGZoGWYiqv9szcg1iVCzs4M4%2BP%2FIFHzZF3LzEI4%2BhdIVFQ3qLCrbTxlbw0Fu90viDieKeOwZltO8gFRxb%2Fi%2FWn41yCkGWRUfIBqwcJwb0oxF3eH7DpgIRvvoJKwSXPZ31jFDV210R8nDn7n0cmcsuPW3xRej33EWjeGcVoX3uQ81uES1VLmX4zCS8e2K%2BpU%2FDo%2FyxGCWKAwo%2B9Il2Rw1KOAFSM7VII3fa4lw%2FKcE56A4bnYIDZRTqYnpykTcTgRhAQDhNcLoLO91hKBjxhzjBkCRj8gz8LmABBnGuLaZPFc7X5REKIB7VRob8kRrstmfxeGaKVpitSfcZAgWIRxSMZQ3WItzU9fcz%2FF08REWLHQNLMK9H38jbEERwvYzqOlaFJGfDI8yrmQsuzGDrQfNV4mQQn6QNDDnuJst0VSUgQDW8rqRkXaLeHnN%2BQ3NAb6X7jPeacU05arFt87q7oAAcbIfxZiIFsKcJaB6oLUeTMp481MzJWo%2BdktKflQhmhqyyBbI7sfJ92ZihNfhYOFtB30ahGtLO%2FeojCZwvXBBjqkAUJd7BMIBSdvOwo7zNo3fk8O2x3g3yzBH2fO%2BRc5846C1EQEPx%2Bsx6wvu3uTE%2Fc0K3FrGFgJLkBEZ7or4ieIvOXwLkXKBjZ%2B77CdSf%2Fx1CdGvEBuY%2FCqtfR0ya4AjbATNYh1c5Z2Tbf5yZNCnhCgSqpU3Ez9Z7iY2CuWP1JeVYDymavVLLoPCARmZXR78Izkjit3DWcxihQJemWIdYnIx%2B2l8QvO&X-Amz-Signature=5b0e1872160b242024d42c4e1fdf64b58e589dca9de368bcabcf0f84b95b90de&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDY3ION%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCu4zpiA6odZPGXHBBdRWB0dd4Q0W1SOgn5I%2BWG70g8DQIhAJwo%2BLmcGrFanAwCIOfGnthMzZty%2FNNm%2BwcJ%2BTQgnr%2FeKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwk2wFPcrgF7WaNJHwq3AOCVoxf2tBHFAwsUEEovLzRRQX1UnnxNz2n%2FMJEdv28mVsDO25Bpq6jNUYWiEXgqoTtBd%2B2JfbLn5AFy3HNP44bQtpK8fGZoGWYiqv9szcg1iVCzs4M4%2BP%2FIFHzZF3LzEI4%2BhdIVFQ3qLCrbTxlbw0Fu90viDieKeOwZltO8gFRxb%2Fi%2FWn41yCkGWRUfIBqwcJwb0oxF3eH7DpgIRvvoJKwSXPZ31jFDV210R8nDn7n0cmcsuPW3xRej33EWjeGcVoX3uQ81uES1VLmX4zCS8e2K%2BpU%2FDo%2FyxGCWKAwo%2B9Il2Rw1KOAFSM7VII3fa4lw%2FKcE56A4bnYIDZRTqYnpykTcTgRhAQDhNcLoLO91hKBjxhzjBkCRj8gz8LmABBnGuLaZPFc7X5REKIB7VRob8kRrstmfxeGaKVpitSfcZAgWIRxSMZQ3WItzU9fcz%2FF08REWLHQNLMK9H38jbEERwvYzqOlaFJGfDI8yrmQsuzGDrQfNV4mQQn6QNDDnuJst0VSUgQDW8rqRkXaLeHnN%2BQ3NAb6X7jPeacU05arFt87q7oAAcbIfxZiIFsKcJaB6oLUeTMp481MzJWo%2BdktKflQhmhqyyBbI7sfJ92ZihNfhYOFtB30ahGtLO%2FeojCZwvXBBjqkAUJd7BMIBSdvOwo7zNo3fk8O2x3g3yzBH2fO%2BRc5846C1EQEPx%2Bsx6wvu3uTE%2Fc0K3FrGFgJLkBEZ7or4ieIvOXwLkXKBjZ%2B77CdSf%2Fx1CdGvEBuY%2FCqtfR0ya4AjbATNYh1c5Z2Tbf5yZNCnhCgSqpU3Ez9Z7iY2CuWP1JeVYDymavVLLoPCARmZXR78Izkjit3DWcxihQJemWIdYnIx%2B2l8QvO&X-Amz-Signature=9024494a24f1fd85e5b156fe89685e5fba9f89694b1cb9a1bda749e8861f1ecb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDY3ION%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCu4zpiA6odZPGXHBBdRWB0dd4Q0W1SOgn5I%2BWG70g8DQIhAJwo%2BLmcGrFanAwCIOfGnthMzZty%2FNNm%2BwcJ%2BTQgnr%2FeKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwk2wFPcrgF7WaNJHwq3AOCVoxf2tBHFAwsUEEovLzRRQX1UnnxNz2n%2FMJEdv28mVsDO25Bpq6jNUYWiEXgqoTtBd%2B2JfbLn5AFy3HNP44bQtpK8fGZoGWYiqv9szcg1iVCzs4M4%2BP%2FIFHzZF3LzEI4%2BhdIVFQ3qLCrbTxlbw0Fu90viDieKeOwZltO8gFRxb%2Fi%2FWn41yCkGWRUfIBqwcJwb0oxF3eH7DpgIRvvoJKwSXPZ31jFDV210R8nDn7n0cmcsuPW3xRej33EWjeGcVoX3uQ81uES1VLmX4zCS8e2K%2BpU%2FDo%2FyxGCWKAwo%2B9Il2Rw1KOAFSM7VII3fa4lw%2FKcE56A4bnYIDZRTqYnpykTcTgRhAQDhNcLoLO91hKBjxhzjBkCRj8gz8LmABBnGuLaZPFc7X5REKIB7VRob8kRrstmfxeGaKVpitSfcZAgWIRxSMZQ3WItzU9fcz%2FF08REWLHQNLMK9H38jbEERwvYzqOlaFJGfDI8yrmQsuzGDrQfNV4mQQn6QNDDnuJst0VSUgQDW8rqRkXaLeHnN%2BQ3NAb6X7jPeacU05arFt87q7oAAcbIfxZiIFsKcJaB6oLUeTMp481MzJWo%2BdktKflQhmhqyyBbI7sfJ92ZihNfhYOFtB30ahGtLO%2FeojCZwvXBBjqkAUJd7BMIBSdvOwo7zNo3fk8O2x3g3yzBH2fO%2BRc5846C1EQEPx%2Bsx6wvu3uTE%2Fc0K3FrGFgJLkBEZ7or4ieIvOXwLkXKBjZ%2B77CdSf%2Fx1CdGvEBuY%2FCqtfR0ya4AjbATNYh1c5Z2Tbf5yZNCnhCgSqpU3Ez9Z7iY2CuWP1JeVYDymavVLLoPCARmZXR78Izkjit3DWcxihQJemWIdYnIx%2B2l8QvO&X-Amz-Signature=6c564b34880483f02324f22e9ac8d62dda8e131095bcf4b09e25ce3107975f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
