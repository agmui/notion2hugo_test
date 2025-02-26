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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3EQFT4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBYXZeBmMGuOvLbydR%2BmII%2FFD3HeVv0UB2JzolHpGJ3zAiBuzjYyPMtHrjZBJg5luy17v1vRL6eALilsCbF1LKZDISr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMFav7jQ3bihEtan%2BhKtwDeoipA%2BdHTkZtErIqGGQOYzTLuC9UhL9FQRywic7MFnFcJCgDSxUJY6IzlbaUMlJLmUanyBQ28zxyrJGWVmHok%2F1Q1G0X2DLlEy4sV8a8woxeIUgak407g%2B4T3C0GYgDhvk768khFKJ9YMLWPNJXTC8iIyNZVyDf58H8hh9S6LANUe50HS63rrA0nOGPucCfKPDlVxW8mpV0F8kYKP%2BVMZLZLVaHVI7%2BOsA4eYmf8cPOV6xeHImz3fWIAyBRyb1JPgX%2Fto5IRe8zVOyaGZr0nrqnuDsi7Jjjq%2By%2FURzTcEEue3z6bGwr1IfenCbueL2JvukKezKyLNaZ7%2FGZWWNI9X15xtHW5JVz5BRFPhryUPXsSc6WqRYJNIsZ5Yv8m4zSp4Hf6etJt7oRNfGauGxYXQ9f6ge%2Fi7KnVIOSyw%2FdEgCqeKjbOWgCddY9BaVRVhe%2BKL%2FRPs5wADnK6crVTJ3fQXfJJVN5n4zrgRyYvlsLGIFb9%2FneTsIAsxGY4Uovnqy%2Bxm89EHoucjhz6YxRelW4ApNyLNp8nRFEzj85o%2B4lVlOGZaF3olqI2URkEde2FnkYBeYPj3%2FCMJ%2F8NQpY1TdaSu5hgUtiO3eBg9iYZ3IaMf1hoN2liHAsBPoibx7Aw6Lz5vQY6pgF7Il%2BRZfkMCyOlG8wWBEV6zqGfIgVQ5ibBqIbk6Lrd3mG%2BU%2Bb6mAISsA5psqF8cN2bg%2FazBVBaDI%2FJsm%2BKYVDfknzC4yTaYAE26EjQ%2FnMXanboOnHd4zx7mPLoPdEXFs%2BzkctAzcDTQ1Ue7uZPfaIL63Zdj77p%2Fvx6ydgqneZ1y3w%2BeRuEAG56ubBRAlZHliWrZ3sksUoTdKQBeFNmSvuUqWnqjbm%2B&X-Amz-Signature=317a030df2ca83ffdc8ed8b6f7c37b18c9a40d9a54fb8d27814b30d261e4bac6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3EQFT4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBYXZeBmMGuOvLbydR%2BmII%2FFD3HeVv0UB2JzolHpGJ3zAiBuzjYyPMtHrjZBJg5luy17v1vRL6eALilsCbF1LKZDISr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMFav7jQ3bihEtan%2BhKtwDeoipA%2BdHTkZtErIqGGQOYzTLuC9UhL9FQRywic7MFnFcJCgDSxUJY6IzlbaUMlJLmUanyBQ28zxyrJGWVmHok%2F1Q1G0X2DLlEy4sV8a8woxeIUgak407g%2B4T3C0GYgDhvk768khFKJ9YMLWPNJXTC8iIyNZVyDf58H8hh9S6LANUe50HS63rrA0nOGPucCfKPDlVxW8mpV0F8kYKP%2BVMZLZLVaHVI7%2BOsA4eYmf8cPOV6xeHImz3fWIAyBRyb1JPgX%2Fto5IRe8zVOyaGZr0nrqnuDsi7Jjjq%2By%2FURzTcEEue3z6bGwr1IfenCbueL2JvukKezKyLNaZ7%2FGZWWNI9X15xtHW5JVz5BRFPhryUPXsSc6WqRYJNIsZ5Yv8m4zSp4Hf6etJt7oRNfGauGxYXQ9f6ge%2Fi7KnVIOSyw%2FdEgCqeKjbOWgCddY9BaVRVhe%2BKL%2FRPs5wADnK6crVTJ3fQXfJJVN5n4zrgRyYvlsLGIFb9%2FneTsIAsxGY4Uovnqy%2Bxm89EHoucjhz6YxRelW4ApNyLNp8nRFEzj85o%2B4lVlOGZaF3olqI2URkEde2FnkYBeYPj3%2FCMJ%2F8NQpY1TdaSu5hgUtiO3eBg9iYZ3IaMf1hoN2liHAsBPoibx7Aw6Lz5vQY6pgF7Il%2BRZfkMCyOlG8wWBEV6zqGfIgVQ5ibBqIbk6Lrd3mG%2BU%2Bb6mAISsA5psqF8cN2bg%2FazBVBaDI%2FJsm%2BKYVDfknzC4yTaYAE26EjQ%2FnMXanboOnHd4zx7mPLoPdEXFs%2BzkctAzcDTQ1Ue7uZPfaIL63Zdj77p%2Fvx6ydgqneZ1y3w%2BeRuEAG56ubBRAlZHliWrZ3sksUoTdKQBeFNmSvuUqWnqjbm%2B&X-Amz-Signature=f43cc4a0f707f373fd10eccec3ed5b846ffe033c94eb039058c4d69a5215dd38&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3EQFT4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBYXZeBmMGuOvLbydR%2BmII%2FFD3HeVv0UB2JzolHpGJ3zAiBuzjYyPMtHrjZBJg5luy17v1vRL6eALilsCbF1LKZDISr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMFav7jQ3bihEtan%2BhKtwDeoipA%2BdHTkZtErIqGGQOYzTLuC9UhL9FQRywic7MFnFcJCgDSxUJY6IzlbaUMlJLmUanyBQ28zxyrJGWVmHok%2F1Q1G0X2DLlEy4sV8a8woxeIUgak407g%2B4T3C0GYgDhvk768khFKJ9YMLWPNJXTC8iIyNZVyDf58H8hh9S6LANUe50HS63rrA0nOGPucCfKPDlVxW8mpV0F8kYKP%2BVMZLZLVaHVI7%2BOsA4eYmf8cPOV6xeHImz3fWIAyBRyb1JPgX%2Fto5IRe8zVOyaGZr0nrqnuDsi7Jjjq%2By%2FURzTcEEue3z6bGwr1IfenCbueL2JvukKezKyLNaZ7%2FGZWWNI9X15xtHW5JVz5BRFPhryUPXsSc6WqRYJNIsZ5Yv8m4zSp4Hf6etJt7oRNfGauGxYXQ9f6ge%2Fi7KnVIOSyw%2FdEgCqeKjbOWgCddY9BaVRVhe%2BKL%2FRPs5wADnK6crVTJ3fQXfJJVN5n4zrgRyYvlsLGIFb9%2FneTsIAsxGY4Uovnqy%2Bxm89EHoucjhz6YxRelW4ApNyLNp8nRFEzj85o%2B4lVlOGZaF3olqI2URkEde2FnkYBeYPj3%2FCMJ%2F8NQpY1TdaSu5hgUtiO3eBg9iYZ3IaMf1hoN2liHAsBPoibx7Aw6Lz5vQY6pgF7Il%2BRZfkMCyOlG8wWBEV6zqGfIgVQ5ibBqIbk6Lrd3mG%2BU%2Bb6mAISsA5psqF8cN2bg%2FazBVBaDI%2FJsm%2BKYVDfknzC4yTaYAE26EjQ%2FnMXanboOnHd4zx7mPLoPdEXFs%2BzkctAzcDTQ1Ue7uZPfaIL63Zdj77p%2Fvx6ydgqneZ1y3w%2BeRuEAG56ubBRAlZHliWrZ3sksUoTdKQBeFNmSvuUqWnqjbm%2B&X-Amz-Signature=58ed71d77157117347e948efd2bdeb636a76836d08c9cf384ebbaeb37635605d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3EQFT4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBYXZeBmMGuOvLbydR%2BmII%2FFD3HeVv0UB2JzolHpGJ3zAiBuzjYyPMtHrjZBJg5luy17v1vRL6eALilsCbF1LKZDISr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMFav7jQ3bihEtan%2BhKtwDeoipA%2BdHTkZtErIqGGQOYzTLuC9UhL9FQRywic7MFnFcJCgDSxUJY6IzlbaUMlJLmUanyBQ28zxyrJGWVmHok%2F1Q1G0X2DLlEy4sV8a8woxeIUgak407g%2B4T3C0GYgDhvk768khFKJ9YMLWPNJXTC8iIyNZVyDf58H8hh9S6LANUe50HS63rrA0nOGPucCfKPDlVxW8mpV0F8kYKP%2BVMZLZLVaHVI7%2BOsA4eYmf8cPOV6xeHImz3fWIAyBRyb1JPgX%2Fto5IRe8zVOyaGZr0nrqnuDsi7Jjjq%2By%2FURzTcEEue3z6bGwr1IfenCbueL2JvukKezKyLNaZ7%2FGZWWNI9X15xtHW5JVz5BRFPhryUPXsSc6WqRYJNIsZ5Yv8m4zSp4Hf6etJt7oRNfGauGxYXQ9f6ge%2Fi7KnVIOSyw%2FdEgCqeKjbOWgCddY9BaVRVhe%2BKL%2FRPs5wADnK6crVTJ3fQXfJJVN5n4zrgRyYvlsLGIFb9%2FneTsIAsxGY4Uovnqy%2Bxm89EHoucjhz6YxRelW4ApNyLNp8nRFEzj85o%2B4lVlOGZaF3olqI2URkEde2FnkYBeYPj3%2FCMJ%2F8NQpY1TdaSu5hgUtiO3eBg9iYZ3IaMf1hoN2liHAsBPoibx7Aw6Lz5vQY6pgF7Il%2BRZfkMCyOlG8wWBEV6zqGfIgVQ5ibBqIbk6Lrd3mG%2BU%2Bb6mAISsA5psqF8cN2bg%2FazBVBaDI%2FJsm%2BKYVDfknzC4yTaYAE26EjQ%2FnMXanboOnHd4zx7mPLoPdEXFs%2BzkctAzcDTQ1Ue7uZPfaIL63Zdj77p%2Fvx6ydgqneZ1y3w%2BeRuEAG56ubBRAlZHliWrZ3sksUoTdKQBeFNmSvuUqWnqjbm%2B&X-Amz-Signature=cb635f2e977002e49b12a844a673d4b5e35cf2739fa31d3165173eb128cb38e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3EQFT4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBYXZeBmMGuOvLbydR%2BmII%2FFD3HeVv0UB2JzolHpGJ3zAiBuzjYyPMtHrjZBJg5luy17v1vRL6eALilsCbF1LKZDISr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMFav7jQ3bihEtan%2BhKtwDeoipA%2BdHTkZtErIqGGQOYzTLuC9UhL9FQRywic7MFnFcJCgDSxUJY6IzlbaUMlJLmUanyBQ28zxyrJGWVmHok%2F1Q1G0X2DLlEy4sV8a8woxeIUgak407g%2B4T3C0GYgDhvk768khFKJ9YMLWPNJXTC8iIyNZVyDf58H8hh9S6LANUe50HS63rrA0nOGPucCfKPDlVxW8mpV0F8kYKP%2BVMZLZLVaHVI7%2BOsA4eYmf8cPOV6xeHImz3fWIAyBRyb1JPgX%2Fto5IRe8zVOyaGZr0nrqnuDsi7Jjjq%2By%2FURzTcEEue3z6bGwr1IfenCbueL2JvukKezKyLNaZ7%2FGZWWNI9X15xtHW5JVz5BRFPhryUPXsSc6WqRYJNIsZ5Yv8m4zSp4Hf6etJt7oRNfGauGxYXQ9f6ge%2Fi7KnVIOSyw%2FdEgCqeKjbOWgCddY9BaVRVhe%2BKL%2FRPs5wADnK6crVTJ3fQXfJJVN5n4zrgRyYvlsLGIFb9%2FneTsIAsxGY4Uovnqy%2Bxm89EHoucjhz6YxRelW4ApNyLNp8nRFEzj85o%2B4lVlOGZaF3olqI2URkEde2FnkYBeYPj3%2FCMJ%2F8NQpY1TdaSu5hgUtiO3eBg9iYZ3IaMf1hoN2liHAsBPoibx7Aw6Lz5vQY6pgF7Il%2BRZfkMCyOlG8wWBEV6zqGfIgVQ5ibBqIbk6Lrd3mG%2BU%2Bb6mAISsA5psqF8cN2bg%2FazBVBaDI%2FJsm%2BKYVDfknzC4yTaYAE26EjQ%2FnMXanboOnHd4zx7mPLoPdEXFs%2BzkctAzcDTQ1Ue7uZPfaIL63Zdj77p%2Fvx6ydgqneZ1y3w%2BeRuEAG56ubBRAlZHliWrZ3sksUoTdKQBeFNmSvuUqWnqjbm%2B&X-Amz-Signature=9b892610d24e7ffdba3e5b2f187c110cb4ba5a603090007f541a9d3e05a3f5f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
