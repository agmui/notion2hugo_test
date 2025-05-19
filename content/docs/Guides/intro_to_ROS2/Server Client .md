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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOEVCFTU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGLfYiQNbrovMLJ5abCh7jr9Ma5BU9MG6ri6n5Rt0LcAiBQ%2F%2FQmbYPh2GZwZAN1mJAyPSK%2Fb575xKYctv4ovdOa%2ByqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTag6x8arHrbRD%2F6pKtwDu%2FZWyi6F6LdD8K8Moy2%2BRrT5G4ryTDE%2FSms3ugjfklfLV6dDmq8OYmuOr92t3FyMgkMMLwrzOVkyKrXEkY78pJ3w2IFT3hafGDdZTO2pk2KQccoTQ0RMcRsuKtMKi3onvo6w%2B62ynrPQs38TZ48AE4W%2FaOqbtXnHLtmUXY%2BouiXMtC0uNmlX%2BiZB8GpYmT6igq3xmECLJGrhecHXkkqOgHY%2FXlQHjHv%2FeO5Mkq7zJbL6TcQpH%2Fj38zeaaItx%2F6WMiiCI0gTZrkinB8yoQjTgaQuVTReXdECZYv4AFDHg3DfxzVwiENe5cQXmDMg3iI9E5fd3Uv2IQCUl5nGr6AcvR0p8Xx5uKoHn2TN%2BJttl3V5rvpOelCmuqVITU1ffTKVno9mcAfokfNgdkjHBxTlXNKIIfrLdUrdABg8TnAxr6K1ZXwBIVkNtU5X6vw12kIJ0QEs5IvtQvID0H7x4ztsHZJLRw9i9Vs2R3oPLuXiUqikCWFwSEFqDzAH57f8lH0Y%2FVM9F2s5OHGzMoS%2BxU5Kyl5IDpQwGJGILmaPb4m%2BIHz9Uj1QmDR8wXMwR6Q8sbC9OuDAx74mb0nGfgljm73ze1XzqwTvjmuy%2FDBPw8SAdQQaJ4gdq%2F1RaToxAkxYw1MitwQY6pgHk5KaEm35HQ7UZacEdt4EP%2FMWe9qgnoEG%2F1voFaa0Vr6j1RzCxNBQw5PeLTmpOPNPfCcJY8aVdJA7DoikFNH9oJR1Co0EDwkGzRjWEDm%2B22003QnzeirhXEsftCJbnTQtWmKxTX8RpWKx3hyjL1yrzyBxTj7CiNLqTKtciQJ9o1MXKiuSUnq%2FyWQ19Yt%2FS%2FE6ZE7lHDejiB8vLuKrRJII0yuktyrD%2F&X-Amz-Signature=00997cb977472d70a72eaf09603b82af473ff8d5c6eceb8682836ea8a649dc39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOEVCFTU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGLfYiQNbrovMLJ5abCh7jr9Ma5BU9MG6ri6n5Rt0LcAiBQ%2F%2FQmbYPh2GZwZAN1mJAyPSK%2Fb575xKYctv4ovdOa%2ByqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTag6x8arHrbRD%2F6pKtwDu%2FZWyi6F6LdD8K8Moy2%2BRrT5G4ryTDE%2FSms3ugjfklfLV6dDmq8OYmuOr92t3FyMgkMMLwrzOVkyKrXEkY78pJ3w2IFT3hafGDdZTO2pk2KQccoTQ0RMcRsuKtMKi3onvo6w%2B62ynrPQs38TZ48AE4W%2FaOqbtXnHLtmUXY%2BouiXMtC0uNmlX%2BiZB8GpYmT6igq3xmECLJGrhecHXkkqOgHY%2FXlQHjHv%2FeO5Mkq7zJbL6TcQpH%2Fj38zeaaItx%2F6WMiiCI0gTZrkinB8yoQjTgaQuVTReXdECZYv4AFDHg3DfxzVwiENe5cQXmDMg3iI9E5fd3Uv2IQCUl5nGr6AcvR0p8Xx5uKoHn2TN%2BJttl3V5rvpOelCmuqVITU1ffTKVno9mcAfokfNgdkjHBxTlXNKIIfrLdUrdABg8TnAxr6K1ZXwBIVkNtU5X6vw12kIJ0QEs5IvtQvID0H7x4ztsHZJLRw9i9Vs2R3oPLuXiUqikCWFwSEFqDzAH57f8lH0Y%2FVM9F2s5OHGzMoS%2BxU5Kyl5IDpQwGJGILmaPb4m%2BIHz9Uj1QmDR8wXMwR6Q8sbC9OuDAx74mb0nGfgljm73ze1XzqwTvjmuy%2FDBPw8SAdQQaJ4gdq%2F1RaToxAkxYw1MitwQY6pgHk5KaEm35HQ7UZacEdt4EP%2FMWe9qgnoEG%2F1voFaa0Vr6j1RzCxNBQw5PeLTmpOPNPfCcJY8aVdJA7DoikFNH9oJR1Co0EDwkGzRjWEDm%2B22003QnzeirhXEsftCJbnTQtWmKxTX8RpWKx3hyjL1yrzyBxTj7CiNLqTKtciQJ9o1MXKiuSUnq%2FyWQ19Yt%2FS%2FE6ZE7lHDejiB8vLuKrRJII0yuktyrD%2F&X-Amz-Signature=a1616bc7b2127fd650cf8f98dc17ddff094a98bd997ebb4eac6bed7204e15f39&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOEVCFTU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGLfYiQNbrovMLJ5abCh7jr9Ma5BU9MG6ri6n5Rt0LcAiBQ%2F%2FQmbYPh2GZwZAN1mJAyPSK%2Fb575xKYctv4ovdOa%2ByqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTag6x8arHrbRD%2F6pKtwDu%2FZWyi6F6LdD8K8Moy2%2BRrT5G4ryTDE%2FSms3ugjfklfLV6dDmq8OYmuOr92t3FyMgkMMLwrzOVkyKrXEkY78pJ3w2IFT3hafGDdZTO2pk2KQccoTQ0RMcRsuKtMKi3onvo6w%2B62ynrPQs38TZ48AE4W%2FaOqbtXnHLtmUXY%2BouiXMtC0uNmlX%2BiZB8GpYmT6igq3xmECLJGrhecHXkkqOgHY%2FXlQHjHv%2FeO5Mkq7zJbL6TcQpH%2Fj38zeaaItx%2F6WMiiCI0gTZrkinB8yoQjTgaQuVTReXdECZYv4AFDHg3DfxzVwiENe5cQXmDMg3iI9E5fd3Uv2IQCUl5nGr6AcvR0p8Xx5uKoHn2TN%2BJttl3V5rvpOelCmuqVITU1ffTKVno9mcAfokfNgdkjHBxTlXNKIIfrLdUrdABg8TnAxr6K1ZXwBIVkNtU5X6vw12kIJ0QEs5IvtQvID0H7x4ztsHZJLRw9i9Vs2R3oPLuXiUqikCWFwSEFqDzAH57f8lH0Y%2FVM9F2s5OHGzMoS%2BxU5Kyl5IDpQwGJGILmaPb4m%2BIHz9Uj1QmDR8wXMwR6Q8sbC9OuDAx74mb0nGfgljm73ze1XzqwTvjmuy%2FDBPw8SAdQQaJ4gdq%2F1RaToxAkxYw1MitwQY6pgHk5KaEm35HQ7UZacEdt4EP%2FMWe9qgnoEG%2F1voFaa0Vr6j1RzCxNBQw5PeLTmpOPNPfCcJY8aVdJA7DoikFNH9oJR1Co0EDwkGzRjWEDm%2B22003QnzeirhXEsftCJbnTQtWmKxTX8RpWKx3hyjL1yrzyBxTj7CiNLqTKtciQJ9o1MXKiuSUnq%2FyWQ19Yt%2FS%2FE6ZE7lHDejiB8vLuKrRJII0yuktyrD%2F&X-Amz-Signature=861fa1dd9a503fc92821fd5340c225896e1e952b436d945f736ffebd7b88542a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOEVCFTU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGLfYiQNbrovMLJ5abCh7jr9Ma5BU9MG6ri6n5Rt0LcAiBQ%2F%2FQmbYPh2GZwZAN1mJAyPSK%2Fb575xKYctv4ovdOa%2ByqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTag6x8arHrbRD%2F6pKtwDu%2FZWyi6F6LdD8K8Moy2%2BRrT5G4ryTDE%2FSms3ugjfklfLV6dDmq8OYmuOr92t3FyMgkMMLwrzOVkyKrXEkY78pJ3w2IFT3hafGDdZTO2pk2KQccoTQ0RMcRsuKtMKi3onvo6w%2B62ynrPQs38TZ48AE4W%2FaOqbtXnHLtmUXY%2BouiXMtC0uNmlX%2BiZB8GpYmT6igq3xmECLJGrhecHXkkqOgHY%2FXlQHjHv%2FeO5Mkq7zJbL6TcQpH%2Fj38zeaaItx%2F6WMiiCI0gTZrkinB8yoQjTgaQuVTReXdECZYv4AFDHg3DfxzVwiENe5cQXmDMg3iI9E5fd3Uv2IQCUl5nGr6AcvR0p8Xx5uKoHn2TN%2BJttl3V5rvpOelCmuqVITU1ffTKVno9mcAfokfNgdkjHBxTlXNKIIfrLdUrdABg8TnAxr6K1ZXwBIVkNtU5X6vw12kIJ0QEs5IvtQvID0H7x4ztsHZJLRw9i9Vs2R3oPLuXiUqikCWFwSEFqDzAH57f8lH0Y%2FVM9F2s5OHGzMoS%2BxU5Kyl5IDpQwGJGILmaPb4m%2BIHz9Uj1QmDR8wXMwR6Q8sbC9OuDAx74mb0nGfgljm73ze1XzqwTvjmuy%2FDBPw8SAdQQaJ4gdq%2F1RaToxAkxYw1MitwQY6pgHk5KaEm35HQ7UZacEdt4EP%2FMWe9qgnoEG%2F1voFaa0Vr6j1RzCxNBQw5PeLTmpOPNPfCcJY8aVdJA7DoikFNH9oJR1Co0EDwkGzRjWEDm%2B22003QnzeirhXEsftCJbnTQtWmKxTX8RpWKx3hyjL1yrzyBxTj7CiNLqTKtciQJ9o1MXKiuSUnq%2FyWQ19Yt%2FS%2FE6ZE7lHDejiB8vLuKrRJII0yuktyrD%2F&X-Amz-Signature=ba07a305cb17e3480c69d4d0446941df7fc8001cc49a852e42e0cfe28fa3ba00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOEVCFTU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGLfYiQNbrovMLJ5abCh7jr9Ma5BU9MG6ri6n5Rt0LcAiBQ%2F%2FQmbYPh2GZwZAN1mJAyPSK%2Fb575xKYctv4ovdOa%2ByqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTag6x8arHrbRD%2F6pKtwDu%2FZWyi6F6LdD8K8Moy2%2BRrT5G4ryTDE%2FSms3ugjfklfLV6dDmq8OYmuOr92t3FyMgkMMLwrzOVkyKrXEkY78pJ3w2IFT3hafGDdZTO2pk2KQccoTQ0RMcRsuKtMKi3onvo6w%2B62ynrPQs38TZ48AE4W%2FaOqbtXnHLtmUXY%2BouiXMtC0uNmlX%2BiZB8GpYmT6igq3xmECLJGrhecHXkkqOgHY%2FXlQHjHv%2FeO5Mkq7zJbL6TcQpH%2Fj38zeaaItx%2F6WMiiCI0gTZrkinB8yoQjTgaQuVTReXdECZYv4AFDHg3DfxzVwiENe5cQXmDMg3iI9E5fd3Uv2IQCUl5nGr6AcvR0p8Xx5uKoHn2TN%2BJttl3V5rvpOelCmuqVITU1ffTKVno9mcAfokfNgdkjHBxTlXNKIIfrLdUrdABg8TnAxr6K1ZXwBIVkNtU5X6vw12kIJ0QEs5IvtQvID0H7x4ztsHZJLRw9i9Vs2R3oPLuXiUqikCWFwSEFqDzAH57f8lH0Y%2FVM9F2s5OHGzMoS%2BxU5Kyl5IDpQwGJGILmaPb4m%2BIHz9Uj1QmDR8wXMwR6Q8sbC9OuDAx74mb0nGfgljm73ze1XzqwTvjmuy%2FDBPw8SAdQQaJ4gdq%2F1RaToxAkxYw1MitwQY6pgHk5KaEm35HQ7UZacEdt4EP%2FMWe9qgnoEG%2F1voFaa0Vr6j1RzCxNBQw5PeLTmpOPNPfCcJY8aVdJA7DoikFNH9oJR1Co0EDwkGzRjWEDm%2B22003QnzeirhXEsftCJbnTQtWmKxTX8RpWKx3hyjL1yrzyBxTj7CiNLqTKtciQJ9o1MXKiuSUnq%2FyWQ19Yt%2FS%2FE6ZE7lHDejiB8vLuKrRJII0yuktyrD%2F&X-Amz-Signature=4c4995205c667a481abe5d463be963f4727f35f88e9054d2a47325ff3ce8a6dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
