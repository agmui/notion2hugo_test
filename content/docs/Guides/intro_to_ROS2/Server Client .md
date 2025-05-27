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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMI2G23X%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATwYnZZtLXtA%2B4Uo8wQJU8v9HldiiYDTwq5iPPKzCpYAiA%2BYhUVIjPMBVWvdP%2BoKz8GZognV7jr74pLnJ2LHeCDtyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMzCTnp3XzM8gD%2BCOYKtwDPBTLT8cTWm3irQotfBNE42xw6m8g1MrdbKSU5MaI3eadAFXdvPCAlqmeoaKu6NFzHOZbCBwphYPhJsEJ0QDSRylXYJXqB5ER0Wvk4uy%2Fp1wvLHcBCedv8zE9tM2iClU2NYDwh0jXWV%2FzW1dwc9UtHx1TxT8mM1jAVm5QRXXyZs5qMCM9%2BFpf5slGVDXzVxV1aP6AGPvYQ9n%2BDtefhqk3y8Sbk0CMgGjZnJc9DrBjEcvd2yd1hketzTpZQtwab7xCIP%2FTAkvuimE7XBoMkWkEB9fnlt76i9sKtBdZv1FRljXkYi0tbTNHIurtdDhp95m2OcZNvXw4yUyF%2BHwyn07oaf4W9ukrZYPFpOsZYzHp8BMmaTu9EhzcY%2Bh2oa7fGImXJljOawBJvYLu%2BNTFKu9gooth9XwNSjBrWZBP3n5okgKI57MrW%2Fasx%2B8rK68DTp4cmDEJV053aMlnG5rjjx9Dgou6xWT75qZlt2F5ZiTa20dQ1bzxXZlIHvkiuPeXkesto2tOwN6cQgiLrVG3iPB0HjAThz7seFkzH5BnT5MwFDU%2B1BfS9NcUQpS665hvz56D%2BOdUdCN0uWEr7mZws7EuA3g3qjsAMsuxeEzQ4km0n8tFIOG6BCGnJBGAFzowxeTXwQY6pgEfFTfZeWpmb%2FtnfkBU1hqjmynTIsUXFJ%2FqmACRmmNQYC9WBrbfBCLg%2BWZZ3vNK6HyQAQaL%2BfpfSPOXcO%2Fe6NJ0Xaex1M9sptpyKVcomoRdggkqOPLlMznEe6mFxAMQPq5QSoxK7DdoeXhyKGjDCsm6DVkHOPGBgbxqCTeQ7XwRhMQuFO8HHuErD0sRJDyHKBd5dRk2d8ai4FTHdIJu0fueWSI%2BGAjm&X-Amz-Signature=084d0c75b474de5de5398f24537c345cd7cf7dec0e1dbf26cb70ce34b3edb88d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMI2G23X%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATwYnZZtLXtA%2B4Uo8wQJU8v9HldiiYDTwq5iPPKzCpYAiA%2BYhUVIjPMBVWvdP%2BoKz8GZognV7jr74pLnJ2LHeCDtyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMzCTnp3XzM8gD%2BCOYKtwDPBTLT8cTWm3irQotfBNE42xw6m8g1MrdbKSU5MaI3eadAFXdvPCAlqmeoaKu6NFzHOZbCBwphYPhJsEJ0QDSRylXYJXqB5ER0Wvk4uy%2Fp1wvLHcBCedv8zE9tM2iClU2NYDwh0jXWV%2FzW1dwc9UtHx1TxT8mM1jAVm5QRXXyZs5qMCM9%2BFpf5slGVDXzVxV1aP6AGPvYQ9n%2BDtefhqk3y8Sbk0CMgGjZnJc9DrBjEcvd2yd1hketzTpZQtwab7xCIP%2FTAkvuimE7XBoMkWkEB9fnlt76i9sKtBdZv1FRljXkYi0tbTNHIurtdDhp95m2OcZNvXw4yUyF%2BHwyn07oaf4W9ukrZYPFpOsZYzHp8BMmaTu9EhzcY%2Bh2oa7fGImXJljOawBJvYLu%2BNTFKu9gooth9XwNSjBrWZBP3n5okgKI57MrW%2Fasx%2B8rK68DTp4cmDEJV053aMlnG5rjjx9Dgou6xWT75qZlt2F5ZiTa20dQ1bzxXZlIHvkiuPeXkesto2tOwN6cQgiLrVG3iPB0HjAThz7seFkzH5BnT5MwFDU%2B1BfS9NcUQpS665hvz56D%2BOdUdCN0uWEr7mZws7EuA3g3qjsAMsuxeEzQ4km0n8tFIOG6BCGnJBGAFzowxeTXwQY6pgEfFTfZeWpmb%2FtnfkBU1hqjmynTIsUXFJ%2FqmACRmmNQYC9WBrbfBCLg%2BWZZ3vNK6HyQAQaL%2BfpfSPOXcO%2Fe6NJ0Xaex1M9sptpyKVcomoRdggkqOPLlMznEe6mFxAMQPq5QSoxK7DdoeXhyKGjDCsm6DVkHOPGBgbxqCTeQ7XwRhMQuFO8HHuErD0sRJDyHKBd5dRk2d8ai4FTHdIJu0fueWSI%2BGAjm&X-Amz-Signature=36b2f1ae10148c0d45240870fb755cebbb006e57a3942cb4a83a4205e27c042a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMI2G23X%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATwYnZZtLXtA%2B4Uo8wQJU8v9HldiiYDTwq5iPPKzCpYAiA%2BYhUVIjPMBVWvdP%2BoKz8GZognV7jr74pLnJ2LHeCDtyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMzCTnp3XzM8gD%2BCOYKtwDPBTLT8cTWm3irQotfBNE42xw6m8g1MrdbKSU5MaI3eadAFXdvPCAlqmeoaKu6NFzHOZbCBwphYPhJsEJ0QDSRylXYJXqB5ER0Wvk4uy%2Fp1wvLHcBCedv8zE9tM2iClU2NYDwh0jXWV%2FzW1dwc9UtHx1TxT8mM1jAVm5QRXXyZs5qMCM9%2BFpf5slGVDXzVxV1aP6AGPvYQ9n%2BDtefhqk3y8Sbk0CMgGjZnJc9DrBjEcvd2yd1hketzTpZQtwab7xCIP%2FTAkvuimE7XBoMkWkEB9fnlt76i9sKtBdZv1FRljXkYi0tbTNHIurtdDhp95m2OcZNvXw4yUyF%2BHwyn07oaf4W9ukrZYPFpOsZYzHp8BMmaTu9EhzcY%2Bh2oa7fGImXJljOawBJvYLu%2BNTFKu9gooth9XwNSjBrWZBP3n5okgKI57MrW%2Fasx%2B8rK68DTp4cmDEJV053aMlnG5rjjx9Dgou6xWT75qZlt2F5ZiTa20dQ1bzxXZlIHvkiuPeXkesto2tOwN6cQgiLrVG3iPB0HjAThz7seFkzH5BnT5MwFDU%2B1BfS9NcUQpS665hvz56D%2BOdUdCN0uWEr7mZws7EuA3g3qjsAMsuxeEzQ4km0n8tFIOG6BCGnJBGAFzowxeTXwQY6pgEfFTfZeWpmb%2FtnfkBU1hqjmynTIsUXFJ%2FqmACRmmNQYC9WBrbfBCLg%2BWZZ3vNK6HyQAQaL%2BfpfSPOXcO%2Fe6NJ0Xaex1M9sptpyKVcomoRdggkqOPLlMznEe6mFxAMQPq5QSoxK7DdoeXhyKGjDCsm6DVkHOPGBgbxqCTeQ7XwRhMQuFO8HHuErD0sRJDyHKBd5dRk2d8ai4FTHdIJu0fueWSI%2BGAjm&X-Amz-Signature=bccf440c462d25b17f3c21b920ff384d1f7c440dbbc4808091654a31b306732b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMI2G23X%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATwYnZZtLXtA%2B4Uo8wQJU8v9HldiiYDTwq5iPPKzCpYAiA%2BYhUVIjPMBVWvdP%2BoKz8GZognV7jr74pLnJ2LHeCDtyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMzCTnp3XzM8gD%2BCOYKtwDPBTLT8cTWm3irQotfBNE42xw6m8g1MrdbKSU5MaI3eadAFXdvPCAlqmeoaKu6NFzHOZbCBwphYPhJsEJ0QDSRylXYJXqB5ER0Wvk4uy%2Fp1wvLHcBCedv8zE9tM2iClU2NYDwh0jXWV%2FzW1dwc9UtHx1TxT8mM1jAVm5QRXXyZs5qMCM9%2BFpf5slGVDXzVxV1aP6AGPvYQ9n%2BDtefhqk3y8Sbk0CMgGjZnJc9DrBjEcvd2yd1hketzTpZQtwab7xCIP%2FTAkvuimE7XBoMkWkEB9fnlt76i9sKtBdZv1FRljXkYi0tbTNHIurtdDhp95m2OcZNvXw4yUyF%2BHwyn07oaf4W9ukrZYPFpOsZYzHp8BMmaTu9EhzcY%2Bh2oa7fGImXJljOawBJvYLu%2BNTFKu9gooth9XwNSjBrWZBP3n5okgKI57MrW%2Fasx%2B8rK68DTp4cmDEJV053aMlnG5rjjx9Dgou6xWT75qZlt2F5ZiTa20dQ1bzxXZlIHvkiuPeXkesto2tOwN6cQgiLrVG3iPB0HjAThz7seFkzH5BnT5MwFDU%2B1BfS9NcUQpS665hvz56D%2BOdUdCN0uWEr7mZws7EuA3g3qjsAMsuxeEzQ4km0n8tFIOG6BCGnJBGAFzowxeTXwQY6pgEfFTfZeWpmb%2FtnfkBU1hqjmynTIsUXFJ%2FqmACRmmNQYC9WBrbfBCLg%2BWZZ3vNK6HyQAQaL%2BfpfSPOXcO%2Fe6NJ0Xaex1M9sptpyKVcomoRdggkqOPLlMznEe6mFxAMQPq5QSoxK7DdoeXhyKGjDCsm6DVkHOPGBgbxqCTeQ7XwRhMQuFO8HHuErD0sRJDyHKBd5dRk2d8ai4FTHdIJu0fueWSI%2BGAjm&X-Amz-Signature=8117bdd1b4381d2a586317a6df51851cba47574c578c17b4d2a01fe91bb1e58d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMI2G23X%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATwYnZZtLXtA%2B4Uo8wQJU8v9HldiiYDTwq5iPPKzCpYAiA%2BYhUVIjPMBVWvdP%2BoKz8GZognV7jr74pLnJ2LHeCDtyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMzCTnp3XzM8gD%2BCOYKtwDPBTLT8cTWm3irQotfBNE42xw6m8g1MrdbKSU5MaI3eadAFXdvPCAlqmeoaKu6NFzHOZbCBwphYPhJsEJ0QDSRylXYJXqB5ER0Wvk4uy%2Fp1wvLHcBCedv8zE9tM2iClU2NYDwh0jXWV%2FzW1dwc9UtHx1TxT8mM1jAVm5QRXXyZs5qMCM9%2BFpf5slGVDXzVxV1aP6AGPvYQ9n%2BDtefhqk3y8Sbk0CMgGjZnJc9DrBjEcvd2yd1hketzTpZQtwab7xCIP%2FTAkvuimE7XBoMkWkEB9fnlt76i9sKtBdZv1FRljXkYi0tbTNHIurtdDhp95m2OcZNvXw4yUyF%2BHwyn07oaf4W9ukrZYPFpOsZYzHp8BMmaTu9EhzcY%2Bh2oa7fGImXJljOawBJvYLu%2BNTFKu9gooth9XwNSjBrWZBP3n5okgKI57MrW%2Fasx%2B8rK68DTp4cmDEJV053aMlnG5rjjx9Dgou6xWT75qZlt2F5ZiTa20dQ1bzxXZlIHvkiuPeXkesto2tOwN6cQgiLrVG3iPB0HjAThz7seFkzH5BnT5MwFDU%2B1BfS9NcUQpS665hvz56D%2BOdUdCN0uWEr7mZws7EuA3g3qjsAMsuxeEzQ4km0n8tFIOG6BCGnJBGAFzowxeTXwQY6pgEfFTfZeWpmb%2FtnfkBU1hqjmynTIsUXFJ%2FqmACRmmNQYC9WBrbfBCLg%2BWZZ3vNK6HyQAQaL%2BfpfSPOXcO%2Fe6NJ0Xaex1M9sptpyKVcomoRdggkqOPLlMznEe6mFxAMQPq5QSoxK7DdoeXhyKGjDCsm6DVkHOPGBgbxqCTeQ7XwRhMQuFO8HHuErD0sRJDyHKBd5dRk2d8ai4FTHdIJu0fueWSI%2BGAjm&X-Amz-Signature=d2ef2ce8fd580a5ce84653b3535e714e92389da1606e2c4af853588cca2c92b9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
