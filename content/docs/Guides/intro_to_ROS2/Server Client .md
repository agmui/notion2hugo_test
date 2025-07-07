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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5WIKAM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCaBIgeM6WGaf2oUhMOlgAsF8AHpYWDSBuiqGpIRveAQwIhANtnLLxywD7dpaAJ52OeSzOllNdRbijUP6DUBbwfuPeRKv8DCGkQABoMNjM3NDIzMTgzODA1Igw2vx31rM8Ybdv66PIq3ANYreYEpS6dRdOPl5Q7b1im6WLBtThzhE9wj0lcVs3xZ3Z5q%2FVad5MVJIQ4DuybSioomwXcq5pwfO58EbLXRbphJqLSxgH1677PkkeKrn%2BgC%2B6xy1O2zeEQIxrqJoX4m1DoZ5T81Znl07%2B1JsfHwzMiNHpIU0QOwAOSqaQW9VLTkmEG1LuxZG8Fvbm28mGOoVBG3Jiml7unoRgGbDMDkg5hkJ%2BTTZw1UE7%2FW4jhzR5P6bbCnDOQWbfQPMu8H%2BpFVbmTh8y9PsR0Lu6CFUXx7fsq%2BUhc%2BT5500W6RfvHJL8mG%2FJpb7Hh%2FnEvMmZ7CPytSYXxFUOg5H3IDH7P0Ts%2FYvJyDOLW2a2EYvqIINo3u9Zoquh6CN1Z68u1dtsqpTMkNqXBpkQjYecHnlvlFyceX4alW8RIB28KWVaeEPA5QEfKyKxge9qGAnE2QMZ%2FWA8Lg6hHtRcXcXMbsnaFXiYnYU1%2BilH5YTjFl2U0P4cILsDELF4C1OkROdUpcpVRM3Or1SVTnye78t5Fvzm7U02DKEJcAjbBCsR2cTaE4WFI%2BbZDx3xEizKkODihvAAG5hNYcQGWHK7rKIdyoJCxCJ3%2FG%2BPo2sZ1fLSA6JygSKW8Q7FyXk%2FkqApqeGjU6D5svjDykqzDBjqkAUy%2B7vLO0DGNbJL7AJXNyFYj27iEPOgbxFbuOne0%2FZLi%2FeqhDO4fCupEF6UdXFG%2BILMcgdUqULmYB1aaZkvkJm%2F6GQQoeaA6rnup8byR3etXKEiI8ofpAm8h2vhAiGum1c44OpydG6ONbQEPCaEGDuR5tixvVwrkxnryEhuj0ZxMahx7yKtWGCEHmnDSMciheq7cmWK5gkXmQNlhREusvkgt8jky&X-Amz-Signature=e0ac79695de1194952a80301418a8b10724a7d72fa127a1133a5caa4acb93ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5WIKAM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCaBIgeM6WGaf2oUhMOlgAsF8AHpYWDSBuiqGpIRveAQwIhANtnLLxywD7dpaAJ52OeSzOllNdRbijUP6DUBbwfuPeRKv8DCGkQABoMNjM3NDIzMTgzODA1Igw2vx31rM8Ybdv66PIq3ANYreYEpS6dRdOPl5Q7b1im6WLBtThzhE9wj0lcVs3xZ3Z5q%2FVad5MVJIQ4DuybSioomwXcq5pwfO58EbLXRbphJqLSxgH1677PkkeKrn%2BgC%2B6xy1O2zeEQIxrqJoX4m1DoZ5T81Znl07%2B1JsfHwzMiNHpIU0QOwAOSqaQW9VLTkmEG1LuxZG8Fvbm28mGOoVBG3Jiml7unoRgGbDMDkg5hkJ%2BTTZw1UE7%2FW4jhzR5P6bbCnDOQWbfQPMu8H%2BpFVbmTh8y9PsR0Lu6CFUXx7fsq%2BUhc%2BT5500W6RfvHJL8mG%2FJpb7Hh%2FnEvMmZ7CPytSYXxFUOg5H3IDH7P0Ts%2FYvJyDOLW2a2EYvqIINo3u9Zoquh6CN1Z68u1dtsqpTMkNqXBpkQjYecHnlvlFyceX4alW8RIB28KWVaeEPA5QEfKyKxge9qGAnE2QMZ%2FWA8Lg6hHtRcXcXMbsnaFXiYnYU1%2BilH5YTjFl2U0P4cILsDELF4C1OkROdUpcpVRM3Or1SVTnye78t5Fvzm7U02DKEJcAjbBCsR2cTaE4WFI%2BbZDx3xEizKkODihvAAG5hNYcQGWHK7rKIdyoJCxCJ3%2FG%2BPo2sZ1fLSA6JygSKW8Q7FyXk%2FkqApqeGjU6D5svjDykqzDBjqkAUy%2B7vLO0DGNbJL7AJXNyFYj27iEPOgbxFbuOne0%2FZLi%2FeqhDO4fCupEF6UdXFG%2BILMcgdUqULmYB1aaZkvkJm%2F6GQQoeaA6rnup8byR3etXKEiI8ofpAm8h2vhAiGum1c44OpydG6ONbQEPCaEGDuR5tixvVwrkxnryEhuj0ZxMahx7yKtWGCEHmnDSMciheq7cmWK5gkXmQNlhREusvkgt8jky&X-Amz-Signature=0da33370f0c4a8239e2875bdd4db5a3076828b5c80b52cf8da095dcc5b4cc6c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5WIKAM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCaBIgeM6WGaf2oUhMOlgAsF8AHpYWDSBuiqGpIRveAQwIhANtnLLxywD7dpaAJ52OeSzOllNdRbijUP6DUBbwfuPeRKv8DCGkQABoMNjM3NDIzMTgzODA1Igw2vx31rM8Ybdv66PIq3ANYreYEpS6dRdOPl5Q7b1im6WLBtThzhE9wj0lcVs3xZ3Z5q%2FVad5MVJIQ4DuybSioomwXcq5pwfO58EbLXRbphJqLSxgH1677PkkeKrn%2BgC%2B6xy1O2zeEQIxrqJoX4m1DoZ5T81Znl07%2B1JsfHwzMiNHpIU0QOwAOSqaQW9VLTkmEG1LuxZG8Fvbm28mGOoVBG3Jiml7unoRgGbDMDkg5hkJ%2BTTZw1UE7%2FW4jhzR5P6bbCnDOQWbfQPMu8H%2BpFVbmTh8y9PsR0Lu6CFUXx7fsq%2BUhc%2BT5500W6RfvHJL8mG%2FJpb7Hh%2FnEvMmZ7CPytSYXxFUOg5H3IDH7P0Ts%2FYvJyDOLW2a2EYvqIINo3u9Zoquh6CN1Z68u1dtsqpTMkNqXBpkQjYecHnlvlFyceX4alW8RIB28KWVaeEPA5QEfKyKxge9qGAnE2QMZ%2FWA8Lg6hHtRcXcXMbsnaFXiYnYU1%2BilH5YTjFl2U0P4cILsDELF4C1OkROdUpcpVRM3Or1SVTnye78t5Fvzm7U02DKEJcAjbBCsR2cTaE4WFI%2BbZDx3xEizKkODihvAAG5hNYcQGWHK7rKIdyoJCxCJ3%2FG%2BPo2sZ1fLSA6JygSKW8Q7FyXk%2FkqApqeGjU6D5svjDykqzDBjqkAUy%2B7vLO0DGNbJL7AJXNyFYj27iEPOgbxFbuOne0%2FZLi%2FeqhDO4fCupEF6UdXFG%2BILMcgdUqULmYB1aaZkvkJm%2F6GQQoeaA6rnup8byR3etXKEiI8ofpAm8h2vhAiGum1c44OpydG6ONbQEPCaEGDuR5tixvVwrkxnryEhuj0ZxMahx7yKtWGCEHmnDSMciheq7cmWK5gkXmQNlhREusvkgt8jky&X-Amz-Signature=a88b50d2c4c66910907b398629de28abd44d0ca8b05759bfab8b9c5603595c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5WIKAM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCaBIgeM6WGaf2oUhMOlgAsF8AHpYWDSBuiqGpIRveAQwIhANtnLLxywD7dpaAJ52OeSzOllNdRbijUP6DUBbwfuPeRKv8DCGkQABoMNjM3NDIzMTgzODA1Igw2vx31rM8Ybdv66PIq3ANYreYEpS6dRdOPl5Q7b1im6WLBtThzhE9wj0lcVs3xZ3Z5q%2FVad5MVJIQ4DuybSioomwXcq5pwfO58EbLXRbphJqLSxgH1677PkkeKrn%2BgC%2B6xy1O2zeEQIxrqJoX4m1DoZ5T81Znl07%2B1JsfHwzMiNHpIU0QOwAOSqaQW9VLTkmEG1LuxZG8Fvbm28mGOoVBG3Jiml7unoRgGbDMDkg5hkJ%2BTTZw1UE7%2FW4jhzR5P6bbCnDOQWbfQPMu8H%2BpFVbmTh8y9PsR0Lu6CFUXx7fsq%2BUhc%2BT5500W6RfvHJL8mG%2FJpb7Hh%2FnEvMmZ7CPytSYXxFUOg5H3IDH7P0Ts%2FYvJyDOLW2a2EYvqIINo3u9Zoquh6CN1Z68u1dtsqpTMkNqXBpkQjYecHnlvlFyceX4alW8RIB28KWVaeEPA5QEfKyKxge9qGAnE2QMZ%2FWA8Lg6hHtRcXcXMbsnaFXiYnYU1%2BilH5YTjFl2U0P4cILsDELF4C1OkROdUpcpVRM3Or1SVTnye78t5Fvzm7U02DKEJcAjbBCsR2cTaE4WFI%2BbZDx3xEizKkODihvAAG5hNYcQGWHK7rKIdyoJCxCJ3%2FG%2BPo2sZ1fLSA6JygSKW8Q7FyXk%2FkqApqeGjU6D5svjDykqzDBjqkAUy%2B7vLO0DGNbJL7AJXNyFYj27iEPOgbxFbuOne0%2FZLi%2FeqhDO4fCupEF6UdXFG%2BILMcgdUqULmYB1aaZkvkJm%2F6GQQoeaA6rnup8byR3etXKEiI8ofpAm8h2vhAiGum1c44OpydG6ONbQEPCaEGDuR5tixvVwrkxnryEhuj0ZxMahx7yKtWGCEHmnDSMciheq7cmWK5gkXmQNlhREusvkgt8jky&X-Amz-Signature=e2e9773dd5f68ef9c266f63cfd3e943f1f29a23ff671c0c271325e59a94e4c61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5WIKAM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCaBIgeM6WGaf2oUhMOlgAsF8AHpYWDSBuiqGpIRveAQwIhANtnLLxywD7dpaAJ52OeSzOllNdRbijUP6DUBbwfuPeRKv8DCGkQABoMNjM3NDIzMTgzODA1Igw2vx31rM8Ybdv66PIq3ANYreYEpS6dRdOPl5Q7b1im6WLBtThzhE9wj0lcVs3xZ3Z5q%2FVad5MVJIQ4DuybSioomwXcq5pwfO58EbLXRbphJqLSxgH1677PkkeKrn%2BgC%2B6xy1O2zeEQIxrqJoX4m1DoZ5T81Znl07%2B1JsfHwzMiNHpIU0QOwAOSqaQW9VLTkmEG1LuxZG8Fvbm28mGOoVBG3Jiml7unoRgGbDMDkg5hkJ%2BTTZw1UE7%2FW4jhzR5P6bbCnDOQWbfQPMu8H%2BpFVbmTh8y9PsR0Lu6CFUXx7fsq%2BUhc%2BT5500W6RfvHJL8mG%2FJpb7Hh%2FnEvMmZ7CPytSYXxFUOg5H3IDH7P0Ts%2FYvJyDOLW2a2EYvqIINo3u9Zoquh6CN1Z68u1dtsqpTMkNqXBpkQjYecHnlvlFyceX4alW8RIB28KWVaeEPA5QEfKyKxge9qGAnE2QMZ%2FWA8Lg6hHtRcXcXMbsnaFXiYnYU1%2BilH5YTjFl2U0P4cILsDELF4C1OkROdUpcpVRM3Or1SVTnye78t5Fvzm7U02DKEJcAjbBCsR2cTaE4WFI%2BbZDx3xEizKkODihvAAG5hNYcQGWHK7rKIdyoJCxCJ3%2FG%2BPo2sZ1fLSA6JygSKW8Q7FyXk%2FkqApqeGjU6D5svjDykqzDBjqkAUy%2B7vLO0DGNbJL7AJXNyFYj27iEPOgbxFbuOne0%2FZLi%2FeqhDO4fCupEF6UdXFG%2BILMcgdUqULmYB1aaZkvkJm%2F6GQQoeaA6rnup8byR3etXKEiI8ofpAm8h2vhAiGum1c44OpydG6ONbQEPCaEGDuR5tixvVwrkxnryEhuj0ZxMahx7yKtWGCEHmnDSMciheq7cmWK5gkXmQNlhREusvkgt8jky&X-Amz-Signature=fb1203c6f8cbe6d44c9c57f7131ae620bbfe4e5697345e5147f81a0ddcd850ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
