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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XIXZRS7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkgNIcP3%2FcZtBOOVBV3XoLOIv%2BAli1z8Dnubk4ILSL1gIhAIipw9jDCK5NgJfHArJCo1msTUGz7kWv1h3OTI%2BLLXxcKv8DCCcQABoMNjM3NDIzMTgzODA1IgxtyF7s%2FFt8zWSrRO0q3APYkLUEfwGIPsQzUI%2BacbZEzVTCl4JS0aG0lcWnzjALLPP%2FqoTx%2FiirnnCCUQ%2FzNPQKu%2Ff%2FzAmJ1XHH4AmOQ30vSWCbSxCs7enzzM2QTfApKRmOVCPoD6kwE6PdoC0B694mBRR9ecYPpSPj%2F0yqNe5rhgERycKfFnMs1g5kMW2kmJWeeUzT%2FdG9fIQYeknVGn8qiO8VQ6UkL0ovAfIk32%2BF%2BrIFjbkCAczZ3CqdlMPEW%2BaySdtZ9rLUGZjljf0VAyxU%2BElFPzyo4DxzH7oH1pjuRexbN4A7yQzwvoFfL2NFqIShYrG2D6Jqw6NiC0i9G4YeBGoWBvKG0weBnmzF3YyPjtwjeLz61038%2Bwwc9OYCa71eBoI2m8OV2MDmrGwZZyp0YGUA2Bd2ry7DFLrDNCn%2F3ynj%2BwdqpfAv0DaOH54BGrNY3puHECSHJ8aun0gptl9dvBekdoMU%2B059AexQ8nk8GtLSBTt1wYBxQcAuMu1CNR1C0J7KOva6gzLFTCJpz1BHbBNJKVsMbfr5rhvkjtCykha5BfFpHLcjcFmXwfAkGC1B03J7NdlqV8hUP8bf6bP6Sh0x5gorKctpZJnRdZHZKm8lBUPIwKeuz8DnZPSBsOVNAD82N%2FYkkxx9MzCl0fDEBjqkAQudfKPqKSuI7NGOYDwIRqzZo4qSlj589Sb1FgMkBSk%2FAvZLo5gON05G1IwQVl3bjEukIYMGt1PtHXOFwuk8SKUyCsHrWeq83RadAucAl40PTAcUNvJDUgiXtd51pSl9PfJJPMLiw7ilkN0QezCYK9pR4iz3Vbfci8pmQfgkp5tI92AVMWUz2nbAwTeVyPCiABNAK7S1F6QMG7QVKdP89%2FpTrht5&X-Amz-Signature=593de7787ffad88a87f44e7712051857cd067c34f5bff0d64039f8e43686a866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XIXZRS7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkgNIcP3%2FcZtBOOVBV3XoLOIv%2BAli1z8Dnubk4ILSL1gIhAIipw9jDCK5NgJfHArJCo1msTUGz7kWv1h3OTI%2BLLXxcKv8DCCcQABoMNjM3NDIzMTgzODA1IgxtyF7s%2FFt8zWSrRO0q3APYkLUEfwGIPsQzUI%2BacbZEzVTCl4JS0aG0lcWnzjALLPP%2FqoTx%2FiirnnCCUQ%2FzNPQKu%2Ff%2FzAmJ1XHH4AmOQ30vSWCbSxCs7enzzM2QTfApKRmOVCPoD6kwE6PdoC0B694mBRR9ecYPpSPj%2F0yqNe5rhgERycKfFnMs1g5kMW2kmJWeeUzT%2FdG9fIQYeknVGn8qiO8VQ6UkL0ovAfIk32%2BF%2BrIFjbkCAczZ3CqdlMPEW%2BaySdtZ9rLUGZjljf0VAyxU%2BElFPzyo4DxzH7oH1pjuRexbN4A7yQzwvoFfL2NFqIShYrG2D6Jqw6NiC0i9G4YeBGoWBvKG0weBnmzF3YyPjtwjeLz61038%2Bwwc9OYCa71eBoI2m8OV2MDmrGwZZyp0YGUA2Bd2ry7DFLrDNCn%2F3ynj%2BwdqpfAv0DaOH54BGrNY3puHECSHJ8aun0gptl9dvBekdoMU%2B059AexQ8nk8GtLSBTt1wYBxQcAuMu1CNR1C0J7KOva6gzLFTCJpz1BHbBNJKVsMbfr5rhvkjtCykha5BfFpHLcjcFmXwfAkGC1B03J7NdlqV8hUP8bf6bP6Sh0x5gorKctpZJnRdZHZKm8lBUPIwKeuz8DnZPSBsOVNAD82N%2FYkkxx9MzCl0fDEBjqkAQudfKPqKSuI7NGOYDwIRqzZo4qSlj589Sb1FgMkBSk%2FAvZLo5gON05G1IwQVl3bjEukIYMGt1PtHXOFwuk8SKUyCsHrWeq83RadAucAl40PTAcUNvJDUgiXtd51pSl9PfJJPMLiw7ilkN0QezCYK9pR4iz3Vbfci8pmQfgkp5tI92AVMWUz2nbAwTeVyPCiABNAK7S1F6QMG7QVKdP89%2FpTrht5&X-Amz-Signature=d60a211e7898812a4fa71b8867e5da23fb2fbd6a020689438e36617f00342200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XIXZRS7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkgNIcP3%2FcZtBOOVBV3XoLOIv%2BAli1z8Dnubk4ILSL1gIhAIipw9jDCK5NgJfHArJCo1msTUGz7kWv1h3OTI%2BLLXxcKv8DCCcQABoMNjM3NDIzMTgzODA1IgxtyF7s%2FFt8zWSrRO0q3APYkLUEfwGIPsQzUI%2BacbZEzVTCl4JS0aG0lcWnzjALLPP%2FqoTx%2FiirnnCCUQ%2FzNPQKu%2Ff%2FzAmJ1XHH4AmOQ30vSWCbSxCs7enzzM2QTfApKRmOVCPoD6kwE6PdoC0B694mBRR9ecYPpSPj%2F0yqNe5rhgERycKfFnMs1g5kMW2kmJWeeUzT%2FdG9fIQYeknVGn8qiO8VQ6UkL0ovAfIk32%2BF%2BrIFjbkCAczZ3CqdlMPEW%2BaySdtZ9rLUGZjljf0VAyxU%2BElFPzyo4DxzH7oH1pjuRexbN4A7yQzwvoFfL2NFqIShYrG2D6Jqw6NiC0i9G4YeBGoWBvKG0weBnmzF3YyPjtwjeLz61038%2Bwwc9OYCa71eBoI2m8OV2MDmrGwZZyp0YGUA2Bd2ry7DFLrDNCn%2F3ynj%2BwdqpfAv0DaOH54BGrNY3puHECSHJ8aun0gptl9dvBekdoMU%2B059AexQ8nk8GtLSBTt1wYBxQcAuMu1CNR1C0J7KOva6gzLFTCJpz1BHbBNJKVsMbfr5rhvkjtCykha5BfFpHLcjcFmXwfAkGC1B03J7NdlqV8hUP8bf6bP6Sh0x5gorKctpZJnRdZHZKm8lBUPIwKeuz8DnZPSBsOVNAD82N%2FYkkxx9MzCl0fDEBjqkAQudfKPqKSuI7NGOYDwIRqzZo4qSlj589Sb1FgMkBSk%2FAvZLo5gON05G1IwQVl3bjEukIYMGt1PtHXOFwuk8SKUyCsHrWeq83RadAucAl40PTAcUNvJDUgiXtd51pSl9PfJJPMLiw7ilkN0QezCYK9pR4iz3Vbfci8pmQfgkp5tI92AVMWUz2nbAwTeVyPCiABNAK7S1F6QMG7QVKdP89%2FpTrht5&X-Amz-Signature=07ea299bf0f9e33dd267425636a1aa3456cc91cb3f2ad6f3fd7ebd7411a8b855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XIXZRS7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkgNIcP3%2FcZtBOOVBV3XoLOIv%2BAli1z8Dnubk4ILSL1gIhAIipw9jDCK5NgJfHArJCo1msTUGz7kWv1h3OTI%2BLLXxcKv8DCCcQABoMNjM3NDIzMTgzODA1IgxtyF7s%2FFt8zWSrRO0q3APYkLUEfwGIPsQzUI%2BacbZEzVTCl4JS0aG0lcWnzjALLPP%2FqoTx%2FiirnnCCUQ%2FzNPQKu%2Ff%2FzAmJ1XHH4AmOQ30vSWCbSxCs7enzzM2QTfApKRmOVCPoD6kwE6PdoC0B694mBRR9ecYPpSPj%2F0yqNe5rhgERycKfFnMs1g5kMW2kmJWeeUzT%2FdG9fIQYeknVGn8qiO8VQ6UkL0ovAfIk32%2BF%2BrIFjbkCAczZ3CqdlMPEW%2BaySdtZ9rLUGZjljf0VAyxU%2BElFPzyo4DxzH7oH1pjuRexbN4A7yQzwvoFfL2NFqIShYrG2D6Jqw6NiC0i9G4YeBGoWBvKG0weBnmzF3YyPjtwjeLz61038%2Bwwc9OYCa71eBoI2m8OV2MDmrGwZZyp0YGUA2Bd2ry7DFLrDNCn%2F3ynj%2BwdqpfAv0DaOH54BGrNY3puHECSHJ8aun0gptl9dvBekdoMU%2B059AexQ8nk8GtLSBTt1wYBxQcAuMu1CNR1C0J7KOva6gzLFTCJpz1BHbBNJKVsMbfr5rhvkjtCykha5BfFpHLcjcFmXwfAkGC1B03J7NdlqV8hUP8bf6bP6Sh0x5gorKctpZJnRdZHZKm8lBUPIwKeuz8DnZPSBsOVNAD82N%2FYkkxx9MzCl0fDEBjqkAQudfKPqKSuI7NGOYDwIRqzZo4qSlj589Sb1FgMkBSk%2FAvZLo5gON05G1IwQVl3bjEukIYMGt1PtHXOFwuk8SKUyCsHrWeq83RadAucAl40PTAcUNvJDUgiXtd51pSl9PfJJPMLiw7ilkN0QezCYK9pR4iz3Vbfci8pmQfgkp5tI92AVMWUz2nbAwTeVyPCiABNAK7S1F6QMG7QVKdP89%2FpTrht5&X-Amz-Signature=63ae9fefa0814a4b9c6826ee3d427403a3aa4d84318cad27f14307ed45186bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XIXZRS7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkgNIcP3%2FcZtBOOVBV3XoLOIv%2BAli1z8Dnubk4ILSL1gIhAIipw9jDCK5NgJfHArJCo1msTUGz7kWv1h3OTI%2BLLXxcKv8DCCcQABoMNjM3NDIzMTgzODA1IgxtyF7s%2FFt8zWSrRO0q3APYkLUEfwGIPsQzUI%2BacbZEzVTCl4JS0aG0lcWnzjALLPP%2FqoTx%2FiirnnCCUQ%2FzNPQKu%2Ff%2FzAmJ1XHH4AmOQ30vSWCbSxCs7enzzM2QTfApKRmOVCPoD6kwE6PdoC0B694mBRR9ecYPpSPj%2F0yqNe5rhgERycKfFnMs1g5kMW2kmJWeeUzT%2FdG9fIQYeknVGn8qiO8VQ6UkL0ovAfIk32%2BF%2BrIFjbkCAczZ3CqdlMPEW%2BaySdtZ9rLUGZjljf0VAyxU%2BElFPzyo4DxzH7oH1pjuRexbN4A7yQzwvoFfL2NFqIShYrG2D6Jqw6NiC0i9G4YeBGoWBvKG0weBnmzF3YyPjtwjeLz61038%2Bwwc9OYCa71eBoI2m8OV2MDmrGwZZyp0YGUA2Bd2ry7DFLrDNCn%2F3ynj%2BwdqpfAv0DaOH54BGrNY3puHECSHJ8aun0gptl9dvBekdoMU%2B059AexQ8nk8GtLSBTt1wYBxQcAuMu1CNR1C0J7KOva6gzLFTCJpz1BHbBNJKVsMbfr5rhvkjtCykha5BfFpHLcjcFmXwfAkGC1B03J7NdlqV8hUP8bf6bP6Sh0x5gorKctpZJnRdZHZKm8lBUPIwKeuz8DnZPSBsOVNAD82N%2FYkkxx9MzCl0fDEBjqkAQudfKPqKSuI7NGOYDwIRqzZo4qSlj589Sb1FgMkBSk%2FAvZLo5gON05G1IwQVl3bjEukIYMGt1PtHXOFwuk8SKUyCsHrWeq83RadAucAl40PTAcUNvJDUgiXtd51pSl9PfJJPMLiw7ilkN0QezCYK9pR4iz3Vbfci8pmQfgkp5tI92AVMWUz2nbAwTeVyPCiABNAK7S1F6QMG7QVKdP89%2FpTrht5&X-Amz-Signature=4b6f0fc564b9ca9fd0ee267a977552c6543d9297e29db8a41801abf73d660f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
