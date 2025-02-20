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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GO6ILYE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVAxAWcvgT5ZHRHgd02xszp4H37Fo8MoD60HZ4bjF8ggIgZ4RD4CUzGTkvDfe9d8XIoCTYXdLMbPrYLgE1RNGGzFIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCnCEgCSjI279R1ECrcAxM6kBoTlETflrEcaCGW7d0JVkg6uJLbRGM4hYsGc6o0smAm4hFEFhspZQenzGAXV9FMs6Ww5oI0EMuPv9%2FPOzKsoDIKJP%2FZv25Dafb0%2F2p5GScHY%2FkCa0OPXpWVm292YgEqkkty99P7WxoVEySZXLuzEuNoxGVMUtF2q1Ei%2BM3NWiSLOiafutkXPX8IY1ktu8KbV2zdoqvc0AxZqmY1B1lPiaX5rGYDjqpAFDbZLrtMepygFYrw87xZ8G%2F6ggZlL2OGeBH64r6nTGXaq%2F%2FM67m7xJD08dFnKes04Jfz8H7Q809A5D6hTt8stvXU5Y6R3FYpQeeDZaFQ5zbj2%2Bv6NPoc4%2BCrNgbHjDSPhdWJRbIVe%2BPXcqbMCr9QFdtmQbJSQhpZGiblRu4ANzC4jGxJPfEU%2FARlN2geKfik019llXeBobgu4U7We%2BE5JNJobdUPfKU1zTUjh54KJu86TiqV042FyoGY9V2ZNI8Dd3ORgV7RWmtKeCj0fLrfH%2BcnsCbKZwJk4T%2FF61kkHkvaCSzDRQMuvJvmQZpiBFHebmapgePJEIbpdxA7n37imPYB%2BgHjJlCDeav%2FnyfH6EVUVIz44VhwWaNUPzwObI5cLrmMtFnjh1TvsBvUIt5L4B86MLbY270GOqUBsPzFYxXmcCQG3hrtMXtFAXHOFsCGH%2BrZ1vQwvibwJjN7hNtSmV2b8ZLrv411WrIuNC%2FKo1d5V%2BBhtXwceYUSqjC1FFVAJXCakF4A44FZRL%2BEIo4FutP3V3ESL9P9F9FD7w%2BLpc%2FNK5OLyPCEDmDZFaMGqoGPuQ%2B8WMJ5L29pLy7Fdyy81V13J23Cr8hHF0u6n5ALHYzwZ3VYVu0bXp1LVH0GQhw0&X-Amz-Signature=e3d59680a2b793cc1bf0cdae9a67d87bf2e313915288dc12846503d2b26cb21c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GO6ILYE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVAxAWcvgT5ZHRHgd02xszp4H37Fo8MoD60HZ4bjF8ggIgZ4RD4CUzGTkvDfe9d8XIoCTYXdLMbPrYLgE1RNGGzFIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCnCEgCSjI279R1ECrcAxM6kBoTlETflrEcaCGW7d0JVkg6uJLbRGM4hYsGc6o0smAm4hFEFhspZQenzGAXV9FMs6Ww5oI0EMuPv9%2FPOzKsoDIKJP%2FZv25Dafb0%2F2p5GScHY%2FkCa0OPXpWVm292YgEqkkty99P7WxoVEySZXLuzEuNoxGVMUtF2q1Ei%2BM3NWiSLOiafutkXPX8IY1ktu8KbV2zdoqvc0AxZqmY1B1lPiaX5rGYDjqpAFDbZLrtMepygFYrw87xZ8G%2F6ggZlL2OGeBH64r6nTGXaq%2F%2FM67m7xJD08dFnKes04Jfz8H7Q809A5D6hTt8stvXU5Y6R3FYpQeeDZaFQ5zbj2%2Bv6NPoc4%2BCrNgbHjDSPhdWJRbIVe%2BPXcqbMCr9QFdtmQbJSQhpZGiblRu4ANzC4jGxJPfEU%2FARlN2geKfik019llXeBobgu4U7We%2BE5JNJobdUPfKU1zTUjh54KJu86TiqV042FyoGY9V2ZNI8Dd3ORgV7RWmtKeCj0fLrfH%2BcnsCbKZwJk4T%2FF61kkHkvaCSzDRQMuvJvmQZpiBFHebmapgePJEIbpdxA7n37imPYB%2BgHjJlCDeav%2FnyfH6EVUVIz44VhwWaNUPzwObI5cLrmMtFnjh1TvsBvUIt5L4B86MLbY270GOqUBsPzFYxXmcCQG3hrtMXtFAXHOFsCGH%2BrZ1vQwvibwJjN7hNtSmV2b8ZLrv411WrIuNC%2FKo1d5V%2BBhtXwceYUSqjC1FFVAJXCakF4A44FZRL%2BEIo4FutP3V3ESL9P9F9FD7w%2BLpc%2FNK5OLyPCEDmDZFaMGqoGPuQ%2B8WMJ5L29pLy7Fdyy81V13J23Cr8hHF0u6n5ALHYzwZ3VYVu0bXp1LVH0GQhw0&X-Amz-Signature=dbf71880e1506112b8c2e6be76117568aab0c1dd59b0ceaa6e8bd965ed1e6012&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GO6ILYE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVAxAWcvgT5ZHRHgd02xszp4H37Fo8MoD60HZ4bjF8ggIgZ4RD4CUzGTkvDfe9d8XIoCTYXdLMbPrYLgE1RNGGzFIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCnCEgCSjI279R1ECrcAxM6kBoTlETflrEcaCGW7d0JVkg6uJLbRGM4hYsGc6o0smAm4hFEFhspZQenzGAXV9FMs6Ww5oI0EMuPv9%2FPOzKsoDIKJP%2FZv25Dafb0%2F2p5GScHY%2FkCa0OPXpWVm292YgEqkkty99P7WxoVEySZXLuzEuNoxGVMUtF2q1Ei%2BM3NWiSLOiafutkXPX8IY1ktu8KbV2zdoqvc0AxZqmY1B1lPiaX5rGYDjqpAFDbZLrtMepygFYrw87xZ8G%2F6ggZlL2OGeBH64r6nTGXaq%2F%2FM67m7xJD08dFnKes04Jfz8H7Q809A5D6hTt8stvXU5Y6R3FYpQeeDZaFQ5zbj2%2Bv6NPoc4%2BCrNgbHjDSPhdWJRbIVe%2BPXcqbMCr9QFdtmQbJSQhpZGiblRu4ANzC4jGxJPfEU%2FARlN2geKfik019llXeBobgu4U7We%2BE5JNJobdUPfKU1zTUjh54KJu86TiqV042FyoGY9V2ZNI8Dd3ORgV7RWmtKeCj0fLrfH%2BcnsCbKZwJk4T%2FF61kkHkvaCSzDRQMuvJvmQZpiBFHebmapgePJEIbpdxA7n37imPYB%2BgHjJlCDeav%2FnyfH6EVUVIz44VhwWaNUPzwObI5cLrmMtFnjh1TvsBvUIt5L4B86MLbY270GOqUBsPzFYxXmcCQG3hrtMXtFAXHOFsCGH%2BrZ1vQwvibwJjN7hNtSmV2b8ZLrv411WrIuNC%2FKo1d5V%2BBhtXwceYUSqjC1FFVAJXCakF4A44FZRL%2BEIo4FutP3V3ESL9P9F9FD7w%2BLpc%2FNK5OLyPCEDmDZFaMGqoGPuQ%2B8WMJ5L29pLy7Fdyy81V13J23Cr8hHF0u6n5ALHYzwZ3VYVu0bXp1LVH0GQhw0&X-Amz-Signature=ad7a8152ddef806cac14c516b6da6e0cf6664b9e6239a729dec0b76cc55f8dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GO6ILYE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVAxAWcvgT5ZHRHgd02xszp4H37Fo8MoD60HZ4bjF8ggIgZ4RD4CUzGTkvDfe9d8XIoCTYXdLMbPrYLgE1RNGGzFIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCnCEgCSjI279R1ECrcAxM6kBoTlETflrEcaCGW7d0JVkg6uJLbRGM4hYsGc6o0smAm4hFEFhspZQenzGAXV9FMs6Ww5oI0EMuPv9%2FPOzKsoDIKJP%2FZv25Dafb0%2F2p5GScHY%2FkCa0OPXpWVm292YgEqkkty99P7WxoVEySZXLuzEuNoxGVMUtF2q1Ei%2BM3NWiSLOiafutkXPX8IY1ktu8KbV2zdoqvc0AxZqmY1B1lPiaX5rGYDjqpAFDbZLrtMepygFYrw87xZ8G%2F6ggZlL2OGeBH64r6nTGXaq%2F%2FM67m7xJD08dFnKes04Jfz8H7Q809A5D6hTt8stvXU5Y6R3FYpQeeDZaFQ5zbj2%2Bv6NPoc4%2BCrNgbHjDSPhdWJRbIVe%2BPXcqbMCr9QFdtmQbJSQhpZGiblRu4ANzC4jGxJPfEU%2FARlN2geKfik019llXeBobgu4U7We%2BE5JNJobdUPfKU1zTUjh54KJu86TiqV042FyoGY9V2ZNI8Dd3ORgV7RWmtKeCj0fLrfH%2BcnsCbKZwJk4T%2FF61kkHkvaCSzDRQMuvJvmQZpiBFHebmapgePJEIbpdxA7n37imPYB%2BgHjJlCDeav%2FnyfH6EVUVIz44VhwWaNUPzwObI5cLrmMtFnjh1TvsBvUIt5L4B86MLbY270GOqUBsPzFYxXmcCQG3hrtMXtFAXHOFsCGH%2BrZ1vQwvibwJjN7hNtSmV2b8ZLrv411WrIuNC%2FKo1d5V%2BBhtXwceYUSqjC1FFVAJXCakF4A44FZRL%2BEIo4FutP3V3ESL9P9F9FD7w%2BLpc%2FNK5OLyPCEDmDZFaMGqoGPuQ%2B8WMJ5L29pLy7Fdyy81V13J23Cr8hHF0u6n5ALHYzwZ3VYVu0bXp1LVH0GQhw0&X-Amz-Signature=452b291c03d86281963a39c29cf0b9c301f17b44976689b5a5cbb905f7e4be4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GO6ILYE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVAxAWcvgT5ZHRHgd02xszp4H37Fo8MoD60HZ4bjF8ggIgZ4RD4CUzGTkvDfe9d8XIoCTYXdLMbPrYLgE1RNGGzFIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCnCEgCSjI279R1ECrcAxM6kBoTlETflrEcaCGW7d0JVkg6uJLbRGM4hYsGc6o0smAm4hFEFhspZQenzGAXV9FMs6Ww5oI0EMuPv9%2FPOzKsoDIKJP%2FZv25Dafb0%2F2p5GScHY%2FkCa0OPXpWVm292YgEqkkty99P7WxoVEySZXLuzEuNoxGVMUtF2q1Ei%2BM3NWiSLOiafutkXPX8IY1ktu8KbV2zdoqvc0AxZqmY1B1lPiaX5rGYDjqpAFDbZLrtMepygFYrw87xZ8G%2F6ggZlL2OGeBH64r6nTGXaq%2F%2FM67m7xJD08dFnKes04Jfz8H7Q809A5D6hTt8stvXU5Y6R3FYpQeeDZaFQ5zbj2%2Bv6NPoc4%2BCrNgbHjDSPhdWJRbIVe%2BPXcqbMCr9QFdtmQbJSQhpZGiblRu4ANzC4jGxJPfEU%2FARlN2geKfik019llXeBobgu4U7We%2BE5JNJobdUPfKU1zTUjh54KJu86TiqV042FyoGY9V2ZNI8Dd3ORgV7RWmtKeCj0fLrfH%2BcnsCbKZwJk4T%2FF61kkHkvaCSzDRQMuvJvmQZpiBFHebmapgePJEIbpdxA7n37imPYB%2BgHjJlCDeav%2FnyfH6EVUVIz44VhwWaNUPzwObI5cLrmMtFnjh1TvsBvUIt5L4B86MLbY270GOqUBsPzFYxXmcCQG3hrtMXtFAXHOFsCGH%2BrZ1vQwvibwJjN7hNtSmV2b8ZLrv411WrIuNC%2FKo1d5V%2BBhtXwceYUSqjC1FFVAJXCakF4A44FZRL%2BEIo4FutP3V3ESL9P9F9FD7w%2BLpc%2FNK5OLyPCEDmDZFaMGqoGPuQ%2B8WMJ5L29pLy7Fdyy81V13J23Cr8hHF0u6n5ALHYzwZ3VYVu0bXp1LVH0GQhw0&X-Amz-Signature=a5c31ecdc760b212b4d7ffac23a5deac714f02b2f4d905833f86b264df327905&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
