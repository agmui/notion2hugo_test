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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEZUXC5T%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCsJ%2B%2BduQesoYSFlxKAIFNaeYdYvVp08yu%2B352rcUIG2AIhAImLL8eKZycXU%2FDLzhjus2OkTyYRFJQrml9a1qfsIVBMKv8DCFoQABoMNjM3NDIzMTgzODA1IgxqBV54YHCDH%2Fqqvekq3AP1pSomhzA%2B0xwrLKbSwiAW94ormOgQpkz2WAA4NWZlnazt2iz1jlLg4xyE6H0Q2AedrxSGiB8L8RCMJDBnGD9SkcmXBJ03CF9K2emgQj%2FYaboigsyEaV6L48gm2I8UClxWllva5xTVMY7fCVHHbt4yT27digA%2FT7CnJ%2BOeJPAdxYLcXySLomYlMLYVzZj36lCouoxtBa7prfDtKU7kKJTxMSFLn11IR%2BX7NAAU3ABjKyFFxjq%2F60ebimkMqjLZwK4Y%2BBeSaLXYk1yQO0uiNrblQj4m9NvDsv76H2bh0mQW2UxjMpMHMYxcVDzHpBLzny14W0BZ1rwXVPW7%2Fu%2FG8otZFjjJnQN3L0LBnsfk5Hx5JJ0tfZCZHpdpz%2FyUI2h0iILOkglt91U675Vn%2FBWODndju6RapNxHipuNBKAcMvEpwxfx5DMI0ypKlleAE0N0QLtSIrqXBj7vj23cbQJ5qAm8sxoKQAFma6oq4YeyomyA0gwLdmPTK%2BMLDmh42NerQTrshN1wNb1rLKTd3cCKuxgWTV0zhjSH8%2FyAgqaSUxJLGEko9nwoBO1M2XqJj%2BpdDMwfWdEPo8BX3LspFeclOx7qLzzulm%2FJ5TqbNpL3HbCBw7mLwXwY9Xrv4j3PyzDs7ZG9BjqkAYlLPCUYZBe%2FDCb8kx79SjiIX%2FYRfngcTYDvUgAz5wklHvOES4mlruY9ud9AHqoP2YxUMKJD4nd9r2Q1gNyyCo8t%2FeC6os7xi%2FDUfEgpoM%2BhaEo1ihccUG9zsuMpc4f1ZtRrFVMcryqbJZWA5PzEtKY0IIRThfF6EjksEVcOcXnq1OyjaLMqK67L%2FkJlv41lEZhyrQ7FPB4klWNxym2YjS58CuEB&X-Amz-Signature=914c08117ad0f3a6224f1fbefcbccb234038f3862f66f1db76dc015c7177e8b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEZUXC5T%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCsJ%2B%2BduQesoYSFlxKAIFNaeYdYvVp08yu%2B352rcUIG2AIhAImLL8eKZycXU%2FDLzhjus2OkTyYRFJQrml9a1qfsIVBMKv8DCFoQABoMNjM3NDIzMTgzODA1IgxqBV54YHCDH%2Fqqvekq3AP1pSomhzA%2B0xwrLKbSwiAW94ormOgQpkz2WAA4NWZlnazt2iz1jlLg4xyE6H0Q2AedrxSGiB8L8RCMJDBnGD9SkcmXBJ03CF9K2emgQj%2FYaboigsyEaV6L48gm2I8UClxWllva5xTVMY7fCVHHbt4yT27digA%2FT7CnJ%2BOeJPAdxYLcXySLomYlMLYVzZj36lCouoxtBa7prfDtKU7kKJTxMSFLn11IR%2BX7NAAU3ABjKyFFxjq%2F60ebimkMqjLZwK4Y%2BBeSaLXYk1yQO0uiNrblQj4m9NvDsv76H2bh0mQW2UxjMpMHMYxcVDzHpBLzny14W0BZ1rwXVPW7%2Fu%2FG8otZFjjJnQN3L0LBnsfk5Hx5JJ0tfZCZHpdpz%2FyUI2h0iILOkglt91U675Vn%2FBWODndju6RapNxHipuNBKAcMvEpwxfx5DMI0ypKlleAE0N0QLtSIrqXBj7vj23cbQJ5qAm8sxoKQAFma6oq4YeyomyA0gwLdmPTK%2BMLDmh42NerQTrshN1wNb1rLKTd3cCKuxgWTV0zhjSH8%2FyAgqaSUxJLGEko9nwoBO1M2XqJj%2BpdDMwfWdEPo8BX3LspFeclOx7qLzzulm%2FJ5TqbNpL3HbCBw7mLwXwY9Xrv4j3PyzDs7ZG9BjqkAYlLPCUYZBe%2FDCb8kx79SjiIX%2FYRfngcTYDvUgAz5wklHvOES4mlruY9ud9AHqoP2YxUMKJD4nd9r2Q1gNyyCo8t%2FeC6os7xi%2FDUfEgpoM%2BhaEo1ihccUG9zsuMpc4f1ZtRrFVMcryqbJZWA5PzEtKY0IIRThfF6EjksEVcOcXnq1OyjaLMqK67L%2FkJlv41lEZhyrQ7FPB4klWNxym2YjS58CuEB&X-Amz-Signature=5d0d2e0f2064ce13569df1379467b48a102409912cfab1be34c94a89315b4e1a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEZUXC5T%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCsJ%2B%2BduQesoYSFlxKAIFNaeYdYvVp08yu%2B352rcUIG2AIhAImLL8eKZycXU%2FDLzhjus2OkTyYRFJQrml9a1qfsIVBMKv8DCFoQABoMNjM3NDIzMTgzODA1IgxqBV54YHCDH%2Fqqvekq3AP1pSomhzA%2B0xwrLKbSwiAW94ormOgQpkz2WAA4NWZlnazt2iz1jlLg4xyE6H0Q2AedrxSGiB8L8RCMJDBnGD9SkcmXBJ03CF9K2emgQj%2FYaboigsyEaV6L48gm2I8UClxWllva5xTVMY7fCVHHbt4yT27digA%2FT7CnJ%2BOeJPAdxYLcXySLomYlMLYVzZj36lCouoxtBa7prfDtKU7kKJTxMSFLn11IR%2BX7NAAU3ABjKyFFxjq%2F60ebimkMqjLZwK4Y%2BBeSaLXYk1yQO0uiNrblQj4m9NvDsv76H2bh0mQW2UxjMpMHMYxcVDzHpBLzny14W0BZ1rwXVPW7%2Fu%2FG8otZFjjJnQN3L0LBnsfk5Hx5JJ0tfZCZHpdpz%2FyUI2h0iILOkglt91U675Vn%2FBWODndju6RapNxHipuNBKAcMvEpwxfx5DMI0ypKlleAE0N0QLtSIrqXBj7vj23cbQJ5qAm8sxoKQAFma6oq4YeyomyA0gwLdmPTK%2BMLDmh42NerQTrshN1wNb1rLKTd3cCKuxgWTV0zhjSH8%2FyAgqaSUxJLGEko9nwoBO1M2XqJj%2BpdDMwfWdEPo8BX3LspFeclOx7qLzzulm%2FJ5TqbNpL3HbCBw7mLwXwY9Xrv4j3PyzDs7ZG9BjqkAYlLPCUYZBe%2FDCb8kx79SjiIX%2FYRfngcTYDvUgAz5wklHvOES4mlruY9ud9AHqoP2YxUMKJD4nd9r2Q1gNyyCo8t%2FeC6os7xi%2FDUfEgpoM%2BhaEo1ihccUG9zsuMpc4f1ZtRrFVMcryqbJZWA5PzEtKY0IIRThfF6EjksEVcOcXnq1OyjaLMqK67L%2FkJlv41lEZhyrQ7FPB4klWNxym2YjS58CuEB&X-Amz-Signature=bd3f78ee39aa9851e6643c9133d2b74744dc73e24ab0dae88d7deac628229e33&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEZUXC5T%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCsJ%2B%2BduQesoYSFlxKAIFNaeYdYvVp08yu%2B352rcUIG2AIhAImLL8eKZycXU%2FDLzhjus2OkTyYRFJQrml9a1qfsIVBMKv8DCFoQABoMNjM3NDIzMTgzODA1IgxqBV54YHCDH%2Fqqvekq3AP1pSomhzA%2B0xwrLKbSwiAW94ormOgQpkz2WAA4NWZlnazt2iz1jlLg4xyE6H0Q2AedrxSGiB8L8RCMJDBnGD9SkcmXBJ03CF9K2emgQj%2FYaboigsyEaV6L48gm2I8UClxWllva5xTVMY7fCVHHbt4yT27digA%2FT7CnJ%2BOeJPAdxYLcXySLomYlMLYVzZj36lCouoxtBa7prfDtKU7kKJTxMSFLn11IR%2BX7NAAU3ABjKyFFxjq%2F60ebimkMqjLZwK4Y%2BBeSaLXYk1yQO0uiNrblQj4m9NvDsv76H2bh0mQW2UxjMpMHMYxcVDzHpBLzny14W0BZ1rwXVPW7%2Fu%2FG8otZFjjJnQN3L0LBnsfk5Hx5JJ0tfZCZHpdpz%2FyUI2h0iILOkglt91U675Vn%2FBWODndju6RapNxHipuNBKAcMvEpwxfx5DMI0ypKlleAE0N0QLtSIrqXBj7vj23cbQJ5qAm8sxoKQAFma6oq4YeyomyA0gwLdmPTK%2BMLDmh42NerQTrshN1wNb1rLKTd3cCKuxgWTV0zhjSH8%2FyAgqaSUxJLGEko9nwoBO1M2XqJj%2BpdDMwfWdEPo8BX3LspFeclOx7qLzzulm%2FJ5TqbNpL3HbCBw7mLwXwY9Xrv4j3PyzDs7ZG9BjqkAYlLPCUYZBe%2FDCb8kx79SjiIX%2FYRfngcTYDvUgAz5wklHvOES4mlruY9ud9AHqoP2YxUMKJD4nd9r2Q1gNyyCo8t%2FeC6os7xi%2FDUfEgpoM%2BhaEo1ihccUG9zsuMpc4f1ZtRrFVMcryqbJZWA5PzEtKY0IIRThfF6EjksEVcOcXnq1OyjaLMqK67L%2FkJlv41lEZhyrQ7FPB4klWNxym2YjS58CuEB&X-Amz-Signature=2b12a3b68d047eb4e30bf76fc6c784f3bdcbc48c77c63e7c119fe2106392229f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEZUXC5T%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCsJ%2B%2BduQesoYSFlxKAIFNaeYdYvVp08yu%2B352rcUIG2AIhAImLL8eKZycXU%2FDLzhjus2OkTyYRFJQrml9a1qfsIVBMKv8DCFoQABoMNjM3NDIzMTgzODA1IgxqBV54YHCDH%2Fqqvekq3AP1pSomhzA%2B0xwrLKbSwiAW94ormOgQpkz2WAA4NWZlnazt2iz1jlLg4xyE6H0Q2AedrxSGiB8L8RCMJDBnGD9SkcmXBJ03CF9K2emgQj%2FYaboigsyEaV6L48gm2I8UClxWllva5xTVMY7fCVHHbt4yT27digA%2FT7CnJ%2BOeJPAdxYLcXySLomYlMLYVzZj36lCouoxtBa7prfDtKU7kKJTxMSFLn11IR%2BX7NAAU3ABjKyFFxjq%2F60ebimkMqjLZwK4Y%2BBeSaLXYk1yQO0uiNrblQj4m9NvDsv76H2bh0mQW2UxjMpMHMYxcVDzHpBLzny14W0BZ1rwXVPW7%2Fu%2FG8otZFjjJnQN3L0LBnsfk5Hx5JJ0tfZCZHpdpz%2FyUI2h0iILOkglt91U675Vn%2FBWODndju6RapNxHipuNBKAcMvEpwxfx5DMI0ypKlleAE0N0QLtSIrqXBj7vj23cbQJ5qAm8sxoKQAFma6oq4YeyomyA0gwLdmPTK%2BMLDmh42NerQTrshN1wNb1rLKTd3cCKuxgWTV0zhjSH8%2FyAgqaSUxJLGEko9nwoBO1M2XqJj%2BpdDMwfWdEPo8BX3LspFeclOx7qLzzulm%2FJ5TqbNpL3HbCBw7mLwXwY9Xrv4j3PyzDs7ZG9BjqkAYlLPCUYZBe%2FDCb8kx79SjiIX%2FYRfngcTYDvUgAz5wklHvOES4mlruY9ud9AHqoP2YxUMKJD4nd9r2Q1gNyyCo8t%2FeC6os7xi%2FDUfEgpoM%2BhaEo1ihccUG9zsuMpc4f1ZtRrFVMcryqbJZWA5PzEtKY0IIRThfF6EjksEVcOcXnq1OyjaLMqK67L%2FkJlv41lEZhyrQ7FPB4klWNxym2YjS58CuEB&X-Amz-Signature=04edd2665f54fdda6b0a7db15e4889b60419a9997121937cf5915b141411a321&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
