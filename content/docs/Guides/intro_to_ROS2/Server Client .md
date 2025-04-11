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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHGIRB6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCID2C3JXwzD3cWfh4oFDTqYvvXFXiRNLhrMuT1ugRxw8FAiA%2Ba%2ButvXdOLgthYU4lQTMcc%2B1Xh2TI3zTSQAUvQ6RBsyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHyRVR%2Fc70xZM%2FPXVKtwDCf%2B6hbtpiID2MABFvLmZd%2FIIgxVhHDW06KuTQIqbLcxVYvT4t8o3jo7YmeX%2BS1S2fB%2BPbhyGlMrCwxSFX%2FDgHwiq23AiL0fR2I3bPkcRdtkii%2F67zQ2ITbAKGmO53MIRJE0IRbXL6I2chp8Z%2Fuxhc4CNGV8xCP9vOx23z2z6%2FqqUTg%2BbAyzWXNiloe1x3urRkg6oMFyIWM93SZ4Lf9ARa7wtSe01JhxetNrUL54S%2FB30ig0CD%2FK1ZeHZzAuxTpvNJ8MdVPnvj%2B67e8FUbumEHIzcG7zaN%2Bq%2BsjuMhQENFmqQo2ulTG%2B9ishN3hy5id%2FrMtL%2BHj9tQ49BKyr%2F0LVrVVrs1DuvusW3wqGKid5g0Qot3jE6yM0KiLjH16olqJ5ZsSH%2BLJ1pix6NK9aH8uA3zQGkhuDqMNJjt6MVq5Ig4gpLWwczTF96LZ8qHQgtHGkgxsRQTewUi%2Bdkb2FEzCH4setyZlx8LN%2B3zPb3MFmYkeWWcoN1nPKLrv4SRi6%2BAqQw4s1jngfhEDymRFIsapTEgzYqdO80pjEQV6TeY5495qotIOblr1q%2B3TvLpEnlpthXmonuCLivc4SQ38vWlgWyFeT1TFlYjxLHRVKiYYQtNuvQHz7UzQzhzweBlmcwyt3ivwY6pgGCgLOU8yhFgO%2BYIsnhCMP7TdKKS7xx7PxC7L%2BAWXBSoeIG3AbiJJtySJjfhGKThIPo6fhl6fYF%2B2TcEgfFmBOa8rBZDyp0LLUzNcmEaXnNqyzN21CLOKb4RyIVAl%2BS3bzossKCQH4GU7TDgKM21BQEHK8fxVd%2BjBxgxJFTqN5uCLo7ILU2%2F1353OsXRYSj7H%2FXAQGHLbvFQqcqUZSPoelYWpcFZvlr&X-Amz-Signature=1d3cd2fc0f3e0e079a6505cf7a32853215af4254de13b5b6a3bc917038083c23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHGIRB6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCID2C3JXwzD3cWfh4oFDTqYvvXFXiRNLhrMuT1ugRxw8FAiA%2Ba%2ButvXdOLgthYU4lQTMcc%2B1Xh2TI3zTSQAUvQ6RBsyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHyRVR%2Fc70xZM%2FPXVKtwDCf%2B6hbtpiID2MABFvLmZd%2FIIgxVhHDW06KuTQIqbLcxVYvT4t8o3jo7YmeX%2BS1S2fB%2BPbhyGlMrCwxSFX%2FDgHwiq23AiL0fR2I3bPkcRdtkii%2F67zQ2ITbAKGmO53MIRJE0IRbXL6I2chp8Z%2Fuxhc4CNGV8xCP9vOx23z2z6%2FqqUTg%2BbAyzWXNiloe1x3urRkg6oMFyIWM93SZ4Lf9ARa7wtSe01JhxetNrUL54S%2FB30ig0CD%2FK1ZeHZzAuxTpvNJ8MdVPnvj%2B67e8FUbumEHIzcG7zaN%2Bq%2BsjuMhQENFmqQo2ulTG%2B9ishN3hy5id%2FrMtL%2BHj9tQ49BKyr%2F0LVrVVrs1DuvusW3wqGKid5g0Qot3jE6yM0KiLjH16olqJ5ZsSH%2BLJ1pix6NK9aH8uA3zQGkhuDqMNJjt6MVq5Ig4gpLWwczTF96LZ8qHQgtHGkgxsRQTewUi%2Bdkb2FEzCH4setyZlx8LN%2B3zPb3MFmYkeWWcoN1nPKLrv4SRi6%2BAqQw4s1jngfhEDymRFIsapTEgzYqdO80pjEQV6TeY5495qotIOblr1q%2B3TvLpEnlpthXmonuCLivc4SQ38vWlgWyFeT1TFlYjxLHRVKiYYQtNuvQHz7UzQzhzweBlmcwyt3ivwY6pgGCgLOU8yhFgO%2BYIsnhCMP7TdKKS7xx7PxC7L%2BAWXBSoeIG3AbiJJtySJjfhGKThIPo6fhl6fYF%2B2TcEgfFmBOa8rBZDyp0LLUzNcmEaXnNqyzN21CLOKb4RyIVAl%2BS3bzossKCQH4GU7TDgKM21BQEHK8fxVd%2BjBxgxJFTqN5uCLo7ILU2%2F1353OsXRYSj7H%2FXAQGHLbvFQqcqUZSPoelYWpcFZvlr&X-Amz-Signature=6b54ae5fe4e9d5beeafba87eddbf643e721e46fd1e7d1557c86903fab29f9707&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHGIRB6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCID2C3JXwzD3cWfh4oFDTqYvvXFXiRNLhrMuT1ugRxw8FAiA%2Ba%2ButvXdOLgthYU4lQTMcc%2B1Xh2TI3zTSQAUvQ6RBsyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHyRVR%2Fc70xZM%2FPXVKtwDCf%2B6hbtpiID2MABFvLmZd%2FIIgxVhHDW06KuTQIqbLcxVYvT4t8o3jo7YmeX%2BS1S2fB%2BPbhyGlMrCwxSFX%2FDgHwiq23AiL0fR2I3bPkcRdtkii%2F67zQ2ITbAKGmO53MIRJE0IRbXL6I2chp8Z%2Fuxhc4CNGV8xCP9vOx23z2z6%2FqqUTg%2BbAyzWXNiloe1x3urRkg6oMFyIWM93SZ4Lf9ARa7wtSe01JhxetNrUL54S%2FB30ig0CD%2FK1ZeHZzAuxTpvNJ8MdVPnvj%2B67e8FUbumEHIzcG7zaN%2Bq%2BsjuMhQENFmqQo2ulTG%2B9ishN3hy5id%2FrMtL%2BHj9tQ49BKyr%2F0LVrVVrs1DuvusW3wqGKid5g0Qot3jE6yM0KiLjH16olqJ5ZsSH%2BLJ1pix6NK9aH8uA3zQGkhuDqMNJjt6MVq5Ig4gpLWwczTF96LZ8qHQgtHGkgxsRQTewUi%2Bdkb2FEzCH4setyZlx8LN%2B3zPb3MFmYkeWWcoN1nPKLrv4SRi6%2BAqQw4s1jngfhEDymRFIsapTEgzYqdO80pjEQV6TeY5495qotIOblr1q%2B3TvLpEnlpthXmonuCLivc4SQ38vWlgWyFeT1TFlYjxLHRVKiYYQtNuvQHz7UzQzhzweBlmcwyt3ivwY6pgGCgLOU8yhFgO%2BYIsnhCMP7TdKKS7xx7PxC7L%2BAWXBSoeIG3AbiJJtySJjfhGKThIPo6fhl6fYF%2B2TcEgfFmBOa8rBZDyp0LLUzNcmEaXnNqyzN21CLOKb4RyIVAl%2BS3bzossKCQH4GU7TDgKM21BQEHK8fxVd%2BjBxgxJFTqN5uCLo7ILU2%2F1353OsXRYSj7H%2FXAQGHLbvFQqcqUZSPoelYWpcFZvlr&X-Amz-Signature=1c0c78848d42bea28aa768b6f49a17c1085d87fd0d3c3e6df62db38acc4104c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHGIRB6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCID2C3JXwzD3cWfh4oFDTqYvvXFXiRNLhrMuT1ugRxw8FAiA%2Ba%2ButvXdOLgthYU4lQTMcc%2B1Xh2TI3zTSQAUvQ6RBsyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHyRVR%2Fc70xZM%2FPXVKtwDCf%2B6hbtpiID2MABFvLmZd%2FIIgxVhHDW06KuTQIqbLcxVYvT4t8o3jo7YmeX%2BS1S2fB%2BPbhyGlMrCwxSFX%2FDgHwiq23AiL0fR2I3bPkcRdtkii%2F67zQ2ITbAKGmO53MIRJE0IRbXL6I2chp8Z%2Fuxhc4CNGV8xCP9vOx23z2z6%2FqqUTg%2BbAyzWXNiloe1x3urRkg6oMFyIWM93SZ4Lf9ARa7wtSe01JhxetNrUL54S%2FB30ig0CD%2FK1ZeHZzAuxTpvNJ8MdVPnvj%2B67e8FUbumEHIzcG7zaN%2Bq%2BsjuMhQENFmqQo2ulTG%2B9ishN3hy5id%2FrMtL%2BHj9tQ49BKyr%2F0LVrVVrs1DuvusW3wqGKid5g0Qot3jE6yM0KiLjH16olqJ5ZsSH%2BLJ1pix6NK9aH8uA3zQGkhuDqMNJjt6MVq5Ig4gpLWwczTF96LZ8qHQgtHGkgxsRQTewUi%2Bdkb2FEzCH4setyZlx8LN%2B3zPb3MFmYkeWWcoN1nPKLrv4SRi6%2BAqQw4s1jngfhEDymRFIsapTEgzYqdO80pjEQV6TeY5495qotIOblr1q%2B3TvLpEnlpthXmonuCLivc4SQ38vWlgWyFeT1TFlYjxLHRVKiYYQtNuvQHz7UzQzhzweBlmcwyt3ivwY6pgGCgLOU8yhFgO%2BYIsnhCMP7TdKKS7xx7PxC7L%2BAWXBSoeIG3AbiJJtySJjfhGKThIPo6fhl6fYF%2B2TcEgfFmBOa8rBZDyp0LLUzNcmEaXnNqyzN21CLOKb4RyIVAl%2BS3bzossKCQH4GU7TDgKM21BQEHK8fxVd%2BjBxgxJFTqN5uCLo7ILU2%2F1353OsXRYSj7H%2FXAQGHLbvFQqcqUZSPoelYWpcFZvlr&X-Amz-Signature=dbf5d21c9d222d4ab62acd1ff923bc1edcbd817872e7f11fbd2044133400699e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHGIRB6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCID2C3JXwzD3cWfh4oFDTqYvvXFXiRNLhrMuT1ugRxw8FAiA%2Ba%2ButvXdOLgthYU4lQTMcc%2B1Xh2TI3zTSQAUvQ6RBsyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHyRVR%2Fc70xZM%2FPXVKtwDCf%2B6hbtpiID2MABFvLmZd%2FIIgxVhHDW06KuTQIqbLcxVYvT4t8o3jo7YmeX%2BS1S2fB%2BPbhyGlMrCwxSFX%2FDgHwiq23AiL0fR2I3bPkcRdtkii%2F67zQ2ITbAKGmO53MIRJE0IRbXL6I2chp8Z%2Fuxhc4CNGV8xCP9vOx23z2z6%2FqqUTg%2BbAyzWXNiloe1x3urRkg6oMFyIWM93SZ4Lf9ARa7wtSe01JhxetNrUL54S%2FB30ig0CD%2FK1ZeHZzAuxTpvNJ8MdVPnvj%2B67e8FUbumEHIzcG7zaN%2Bq%2BsjuMhQENFmqQo2ulTG%2B9ishN3hy5id%2FrMtL%2BHj9tQ49BKyr%2F0LVrVVrs1DuvusW3wqGKid5g0Qot3jE6yM0KiLjH16olqJ5ZsSH%2BLJ1pix6NK9aH8uA3zQGkhuDqMNJjt6MVq5Ig4gpLWwczTF96LZ8qHQgtHGkgxsRQTewUi%2Bdkb2FEzCH4setyZlx8LN%2B3zPb3MFmYkeWWcoN1nPKLrv4SRi6%2BAqQw4s1jngfhEDymRFIsapTEgzYqdO80pjEQV6TeY5495qotIOblr1q%2B3TvLpEnlpthXmonuCLivc4SQ38vWlgWyFeT1TFlYjxLHRVKiYYQtNuvQHz7UzQzhzweBlmcwyt3ivwY6pgGCgLOU8yhFgO%2BYIsnhCMP7TdKKS7xx7PxC7L%2BAWXBSoeIG3AbiJJtySJjfhGKThIPo6fhl6fYF%2B2TcEgfFmBOa8rBZDyp0LLUzNcmEaXnNqyzN21CLOKb4RyIVAl%2BS3bzossKCQH4GU7TDgKM21BQEHK8fxVd%2BjBxgxJFTqN5uCLo7ILU2%2F1353OsXRYSj7H%2FXAQGHLbvFQqcqUZSPoelYWpcFZvlr&X-Amz-Signature=d2ee5060cd036cacd1e6ae88ef71e41bf72beb3b97188448fa9a98a33173d2ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
