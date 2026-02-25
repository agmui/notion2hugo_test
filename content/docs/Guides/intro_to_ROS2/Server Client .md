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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQNC6PH%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEnxbdT5PC8ZKeWwVVUvDnjcsMG2ojgvUFWqNQRJ1DKjAiBv7Nv0IjZHGsApOI03Y%2F12h68cdCl5oSxMGK2yKjZ3XSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM1bv%2FtU5R%2B45xs%2BTfKtwDsyS4GFzi8sIHCqroIVB1bg8zObBLnXhNDz5GEJbkix%2B7tYPaRzXAllPQnpsF2wJTmRQSte9Sk36jgUF1ZX%2BCrTIARtydZfpWjDFFf7E2HCLX590QJXq%2B0ciTrUF5d5M7J9hux3GTHti5%2BTIPXOP2iuOLAmPNEg9FaH8AbLn7zXSeSWEkevE9c2K4L6OSzVB9QuW87cdoIjgale82Ru0a6yekcwqenu6MK7xL1HLPHwzO8P2r0tIgKZ8huunLZtgHmIS2tMMOcsD4SdsR1FedMRP7D1Siy1Gvqyo1fbhAM5vL3KfkHDNvgZDUS3CCKLIQ%2FTLDYiFG5fgWfhan6tJZ7yKGcWYSUsgA6wUg%2F3rVQ3s41vFUK02xfHJOmKs9LxaA6x5XYLdMB7ILF1CDbbvIZHlFB2yQablAzP2NARUZPPaMr6kUaM%2BCKcgjNpjTYzUsdOJcoTCk39FoqUuEA47lFHrbHtBZCoTJ2m5z9YfwQyyi3CVjxt4DWOX7fH%2Fg%2BFNc8BiY0%2BZA0Zz7sFqsa7u90s7Knu%2FLN%2BLcqWtldomClIhn%2BQLL7viP80G5moBIzGolRTE0l25%2Fo%2FkeBnx%2ByPkknJJ3vKA4FGIMbBoeb1zyXuKlt%2FWshmuPXDzhdIEwyYT5zAY6pgFrqkpNfFYRgZEsPWVxoXQF1br2uanyM2nU2nkVRvnFT25DmXd1eedL7tB32NoVKtZqXhgA3k6NXvAGJpoznQ9J5sJW5tYVZil7urRS842DV27rwc%2FjuT0dnQBEgORuaxTbkcVZZDXckD9XQsL35Mnb9dqAKOo8knP1xHV5%2ByatOypiG4OA61PzuI0pdJ9s74AfCu0AAfl%2B%2F6aUOH6sXs44K%2FQYBJCL&X-Amz-Signature=e5f3020ce7a30f09db8c848cda38689864c3ca62ebd5741634d97474b9431cb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQNC6PH%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEnxbdT5PC8ZKeWwVVUvDnjcsMG2ojgvUFWqNQRJ1DKjAiBv7Nv0IjZHGsApOI03Y%2F12h68cdCl5oSxMGK2yKjZ3XSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM1bv%2FtU5R%2B45xs%2BTfKtwDsyS4GFzi8sIHCqroIVB1bg8zObBLnXhNDz5GEJbkix%2B7tYPaRzXAllPQnpsF2wJTmRQSte9Sk36jgUF1ZX%2BCrTIARtydZfpWjDFFf7E2HCLX590QJXq%2B0ciTrUF5d5M7J9hux3GTHti5%2BTIPXOP2iuOLAmPNEg9FaH8AbLn7zXSeSWEkevE9c2K4L6OSzVB9QuW87cdoIjgale82Ru0a6yekcwqenu6MK7xL1HLPHwzO8P2r0tIgKZ8huunLZtgHmIS2tMMOcsD4SdsR1FedMRP7D1Siy1Gvqyo1fbhAM5vL3KfkHDNvgZDUS3CCKLIQ%2FTLDYiFG5fgWfhan6tJZ7yKGcWYSUsgA6wUg%2F3rVQ3s41vFUK02xfHJOmKs9LxaA6x5XYLdMB7ILF1CDbbvIZHlFB2yQablAzP2NARUZPPaMr6kUaM%2BCKcgjNpjTYzUsdOJcoTCk39FoqUuEA47lFHrbHtBZCoTJ2m5z9YfwQyyi3CVjxt4DWOX7fH%2Fg%2BFNc8BiY0%2BZA0Zz7sFqsa7u90s7Knu%2FLN%2BLcqWtldomClIhn%2BQLL7viP80G5moBIzGolRTE0l25%2Fo%2FkeBnx%2ByPkknJJ3vKA4FGIMbBoeb1zyXuKlt%2FWshmuPXDzhdIEwyYT5zAY6pgFrqkpNfFYRgZEsPWVxoXQF1br2uanyM2nU2nkVRvnFT25DmXd1eedL7tB32NoVKtZqXhgA3k6NXvAGJpoznQ9J5sJW5tYVZil7urRS842DV27rwc%2FjuT0dnQBEgORuaxTbkcVZZDXckD9XQsL35Mnb9dqAKOo8knP1xHV5%2ByatOypiG4OA61PzuI0pdJ9s74AfCu0AAfl%2B%2F6aUOH6sXs44K%2FQYBJCL&X-Amz-Signature=03b75cb74886766bba4be66e50ff7b1969f2b537fe66b1dca23d7a2ced8e1be9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQNC6PH%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEnxbdT5PC8ZKeWwVVUvDnjcsMG2ojgvUFWqNQRJ1DKjAiBv7Nv0IjZHGsApOI03Y%2F12h68cdCl5oSxMGK2yKjZ3XSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM1bv%2FtU5R%2B45xs%2BTfKtwDsyS4GFzi8sIHCqroIVB1bg8zObBLnXhNDz5GEJbkix%2B7tYPaRzXAllPQnpsF2wJTmRQSte9Sk36jgUF1ZX%2BCrTIARtydZfpWjDFFf7E2HCLX590QJXq%2B0ciTrUF5d5M7J9hux3GTHti5%2BTIPXOP2iuOLAmPNEg9FaH8AbLn7zXSeSWEkevE9c2K4L6OSzVB9QuW87cdoIjgale82Ru0a6yekcwqenu6MK7xL1HLPHwzO8P2r0tIgKZ8huunLZtgHmIS2tMMOcsD4SdsR1FedMRP7D1Siy1Gvqyo1fbhAM5vL3KfkHDNvgZDUS3CCKLIQ%2FTLDYiFG5fgWfhan6tJZ7yKGcWYSUsgA6wUg%2F3rVQ3s41vFUK02xfHJOmKs9LxaA6x5XYLdMB7ILF1CDbbvIZHlFB2yQablAzP2NARUZPPaMr6kUaM%2BCKcgjNpjTYzUsdOJcoTCk39FoqUuEA47lFHrbHtBZCoTJ2m5z9YfwQyyi3CVjxt4DWOX7fH%2Fg%2BFNc8BiY0%2BZA0Zz7sFqsa7u90s7Knu%2FLN%2BLcqWtldomClIhn%2BQLL7viP80G5moBIzGolRTE0l25%2Fo%2FkeBnx%2ByPkknJJ3vKA4FGIMbBoeb1zyXuKlt%2FWshmuPXDzhdIEwyYT5zAY6pgFrqkpNfFYRgZEsPWVxoXQF1br2uanyM2nU2nkVRvnFT25DmXd1eedL7tB32NoVKtZqXhgA3k6NXvAGJpoznQ9J5sJW5tYVZil7urRS842DV27rwc%2FjuT0dnQBEgORuaxTbkcVZZDXckD9XQsL35Mnb9dqAKOo8knP1xHV5%2ByatOypiG4OA61PzuI0pdJ9s74AfCu0AAfl%2B%2F6aUOH6sXs44K%2FQYBJCL&X-Amz-Signature=af63213e1d551dfe9a3849d033bb58ccc69ca93ad6eb6799046e282375ce1923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQNC6PH%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEnxbdT5PC8ZKeWwVVUvDnjcsMG2ojgvUFWqNQRJ1DKjAiBv7Nv0IjZHGsApOI03Y%2F12h68cdCl5oSxMGK2yKjZ3XSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM1bv%2FtU5R%2B45xs%2BTfKtwDsyS4GFzi8sIHCqroIVB1bg8zObBLnXhNDz5GEJbkix%2B7tYPaRzXAllPQnpsF2wJTmRQSte9Sk36jgUF1ZX%2BCrTIARtydZfpWjDFFf7E2HCLX590QJXq%2B0ciTrUF5d5M7J9hux3GTHti5%2BTIPXOP2iuOLAmPNEg9FaH8AbLn7zXSeSWEkevE9c2K4L6OSzVB9QuW87cdoIjgale82Ru0a6yekcwqenu6MK7xL1HLPHwzO8P2r0tIgKZ8huunLZtgHmIS2tMMOcsD4SdsR1FedMRP7D1Siy1Gvqyo1fbhAM5vL3KfkHDNvgZDUS3CCKLIQ%2FTLDYiFG5fgWfhan6tJZ7yKGcWYSUsgA6wUg%2F3rVQ3s41vFUK02xfHJOmKs9LxaA6x5XYLdMB7ILF1CDbbvIZHlFB2yQablAzP2NARUZPPaMr6kUaM%2BCKcgjNpjTYzUsdOJcoTCk39FoqUuEA47lFHrbHtBZCoTJ2m5z9YfwQyyi3CVjxt4DWOX7fH%2Fg%2BFNc8BiY0%2BZA0Zz7sFqsa7u90s7Knu%2FLN%2BLcqWtldomClIhn%2BQLL7viP80G5moBIzGolRTE0l25%2Fo%2FkeBnx%2ByPkknJJ3vKA4FGIMbBoeb1zyXuKlt%2FWshmuPXDzhdIEwyYT5zAY6pgFrqkpNfFYRgZEsPWVxoXQF1br2uanyM2nU2nkVRvnFT25DmXd1eedL7tB32NoVKtZqXhgA3k6NXvAGJpoznQ9J5sJW5tYVZil7urRS842DV27rwc%2FjuT0dnQBEgORuaxTbkcVZZDXckD9XQsL35Mnb9dqAKOo8knP1xHV5%2ByatOypiG4OA61PzuI0pdJ9s74AfCu0AAfl%2B%2F6aUOH6sXs44K%2FQYBJCL&X-Amz-Signature=ff4b7eeb2078f92cf43663e0f33f9e55c05a398a93e2e37849b0da5bfd2a0a2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQNC6PH%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEnxbdT5PC8ZKeWwVVUvDnjcsMG2ojgvUFWqNQRJ1DKjAiBv7Nv0IjZHGsApOI03Y%2F12h68cdCl5oSxMGK2yKjZ3XSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM1bv%2FtU5R%2B45xs%2BTfKtwDsyS4GFzi8sIHCqroIVB1bg8zObBLnXhNDz5GEJbkix%2B7tYPaRzXAllPQnpsF2wJTmRQSte9Sk36jgUF1ZX%2BCrTIARtydZfpWjDFFf7E2HCLX590QJXq%2B0ciTrUF5d5M7J9hux3GTHti5%2BTIPXOP2iuOLAmPNEg9FaH8AbLn7zXSeSWEkevE9c2K4L6OSzVB9QuW87cdoIjgale82Ru0a6yekcwqenu6MK7xL1HLPHwzO8P2r0tIgKZ8huunLZtgHmIS2tMMOcsD4SdsR1FedMRP7D1Siy1Gvqyo1fbhAM5vL3KfkHDNvgZDUS3CCKLIQ%2FTLDYiFG5fgWfhan6tJZ7yKGcWYSUsgA6wUg%2F3rVQ3s41vFUK02xfHJOmKs9LxaA6x5XYLdMB7ILF1CDbbvIZHlFB2yQablAzP2NARUZPPaMr6kUaM%2BCKcgjNpjTYzUsdOJcoTCk39FoqUuEA47lFHrbHtBZCoTJ2m5z9YfwQyyi3CVjxt4DWOX7fH%2Fg%2BFNc8BiY0%2BZA0Zz7sFqsa7u90s7Knu%2FLN%2BLcqWtldomClIhn%2BQLL7viP80G5moBIzGolRTE0l25%2Fo%2FkeBnx%2ByPkknJJ3vKA4FGIMbBoeb1zyXuKlt%2FWshmuPXDzhdIEwyYT5zAY6pgFrqkpNfFYRgZEsPWVxoXQF1br2uanyM2nU2nkVRvnFT25DmXd1eedL7tB32NoVKtZqXhgA3k6NXvAGJpoznQ9J5sJW5tYVZil7urRS842DV27rwc%2FjuT0dnQBEgORuaxTbkcVZZDXckD9XQsL35Mnb9dqAKOo8knP1xHV5%2ByatOypiG4OA61PzuI0pdJ9s74AfCu0AAfl%2B%2F6aUOH6sXs44K%2FQYBJCL&X-Amz-Signature=fbf25403243af0efe3b4fe00b71816e448bcb271e0f7eb354f37796d400430e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
