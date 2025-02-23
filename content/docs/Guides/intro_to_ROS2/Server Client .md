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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPVGCMZB%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp1EkKflo4ZsONDSW8UbXKNii6L8F0293yaA20bc%2FNUQIhAIRp9fqIkAhLYcgsEXqmz3Q2HcaS9bzFUt7U55M6hwKVKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQPWNvS9PInrFKUvoq3AMHZ%2B23SrD2%2Bbc1dBH6qTlhI%2FOHFP0%2B13HH5WnL23zH2MS3LoVqSOEiCrFAYFmET9UvgaCq864Xr9f25UezxDPlrYiu0K6%2FVLu7AMf4b%2FB1yR1xqKPXCVbVZYcOm3LQzOjMIKUDHEu%2FB7Jrm5fjXaZcKIC58G1Pb3Vg1FqFij%2FuJbTSKI%2F%2BCaKWYzJB5C53JUBwNIyyafsaxTqoAaDS04zgWdxOUecIv7oOPpV5KrjKxG%2Bt6onR3kGS0Nd73h4bjkaYGNKoiGfhBR9G0I19Q8KD%2BYwY5yDEx%2BVeG6SWhtPWX9vQDQpShwDtZbE%2BzjJxcVDcKw6IXO5Gj1GXmZ7Fju%2FcwUDQ8akUi1n5lJLtqP7u1vmm6AKV5sKzdEQooI6qablPlK71DIU7p8%2FAPQ7%2F5ySWUhnu0wp2L1GRj0dl%2BbfQTq8HBUH0mkOnAcQWXs5m%2B8RUayLpncoyy%2BP0gM07Z662oqg9kYAHVtbyAURNNbY4Ecz8cmiBLYcCt4N6o4bvj3EDdNROM3kDsfMzxYd7c1gPyESWreNgdv6lxOnNjbsYjh7UhF%2F7v%2BsFJtVMtjeGdpoKUetNoe0q4EAnD%2F3RD0Ll96Ar38cbfR%2B%2FzBYEXqnyDTce3M9yYGEBDYDjRTC6sem9BjqkAcMeJM5mrapfoqFoXWqWgGsbr9zeT6uj9AGChh%2BOkOZxSt%2F594a0uC9UuCvS%2BuzPqUZEyAiMxmjjFQm47nuIg7Jt1HbstF4%2BCpJIwvzPdTJ7HZ5ctKE7RnKMmFVRbu62V20u21Qyge%2B%2FwLT%2BbDs%2FQFWuzfbYtylLOs3AYiDhZa1tO9jDQuAgJaLfki4qHKFamd1xLXydSysxc5Q9vSjSJgnU3uZj&X-Amz-Signature=250683acb76550cf9581e118f3906f7b2f38423b6e7b4be256ccdf25c096eadc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPVGCMZB%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp1EkKflo4ZsONDSW8UbXKNii6L8F0293yaA20bc%2FNUQIhAIRp9fqIkAhLYcgsEXqmz3Q2HcaS9bzFUt7U55M6hwKVKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQPWNvS9PInrFKUvoq3AMHZ%2B23SrD2%2Bbc1dBH6qTlhI%2FOHFP0%2B13HH5WnL23zH2MS3LoVqSOEiCrFAYFmET9UvgaCq864Xr9f25UezxDPlrYiu0K6%2FVLu7AMf4b%2FB1yR1xqKPXCVbVZYcOm3LQzOjMIKUDHEu%2FB7Jrm5fjXaZcKIC58G1Pb3Vg1FqFij%2FuJbTSKI%2F%2BCaKWYzJB5C53JUBwNIyyafsaxTqoAaDS04zgWdxOUecIv7oOPpV5KrjKxG%2Bt6onR3kGS0Nd73h4bjkaYGNKoiGfhBR9G0I19Q8KD%2BYwY5yDEx%2BVeG6SWhtPWX9vQDQpShwDtZbE%2BzjJxcVDcKw6IXO5Gj1GXmZ7Fju%2FcwUDQ8akUi1n5lJLtqP7u1vmm6AKV5sKzdEQooI6qablPlK71DIU7p8%2FAPQ7%2F5ySWUhnu0wp2L1GRj0dl%2BbfQTq8HBUH0mkOnAcQWXs5m%2B8RUayLpncoyy%2BP0gM07Z662oqg9kYAHVtbyAURNNbY4Ecz8cmiBLYcCt4N6o4bvj3EDdNROM3kDsfMzxYd7c1gPyESWreNgdv6lxOnNjbsYjh7UhF%2F7v%2BsFJtVMtjeGdpoKUetNoe0q4EAnD%2F3RD0Ll96Ar38cbfR%2B%2FzBYEXqnyDTce3M9yYGEBDYDjRTC6sem9BjqkAcMeJM5mrapfoqFoXWqWgGsbr9zeT6uj9AGChh%2BOkOZxSt%2F594a0uC9UuCvS%2BuzPqUZEyAiMxmjjFQm47nuIg7Jt1HbstF4%2BCpJIwvzPdTJ7HZ5ctKE7RnKMmFVRbu62V20u21Qyge%2B%2FwLT%2BbDs%2FQFWuzfbYtylLOs3AYiDhZa1tO9jDQuAgJaLfki4qHKFamd1xLXydSysxc5Q9vSjSJgnU3uZj&X-Amz-Signature=5a64afde10458f71351948c3c3dfc188220efc8a6c6dac222829990441f9366c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPVGCMZB%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp1EkKflo4ZsONDSW8UbXKNii6L8F0293yaA20bc%2FNUQIhAIRp9fqIkAhLYcgsEXqmz3Q2HcaS9bzFUt7U55M6hwKVKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQPWNvS9PInrFKUvoq3AMHZ%2B23SrD2%2Bbc1dBH6qTlhI%2FOHFP0%2B13HH5WnL23zH2MS3LoVqSOEiCrFAYFmET9UvgaCq864Xr9f25UezxDPlrYiu0K6%2FVLu7AMf4b%2FB1yR1xqKPXCVbVZYcOm3LQzOjMIKUDHEu%2FB7Jrm5fjXaZcKIC58G1Pb3Vg1FqFij%2FuJbTSKI%2F%2BCaKWYzJB5C53JUBwNIyyafsaxTqoAaDS04zgWdxOUecIv7oOPpV5KrjKxG%2Bt6onR3kGS0Nd73h4bjkaYGNKoiGfhBR9G0I19Q8KD%2BYwY5yDEx%2BVeG6SWhtPWX9vQDQpShwDtZbE%2BzjJxcVDcKw6IXO5Gj1GXmZ7Fju%2FcwUDQ8akUi1n5lJLtqP7u1vmm6AKV5sKzdEQooI6qablPlK71DIU7p8%2FAPQ7%2F5ySWUhnu0wp2L1GRj0dl%2BbfQTq8HBUH0mkOnAcQWXs5m%2B8RUayLpncoyy%2BP0gM07Z662oqg9kYAHVtbyAURNNbY4Ecz8cmiBLYcCt4N6o4bvj3EDdNROM3kDsfMzxYd7c1gPyESWreNgdv6lxOnNjbsYjh7UhF%2F7v%2BsFJtVMtjeGdpoKUetNoe0q4EAnD%2F3RD0Ll96Ar38cbfR%2B%2FzBYEXqnyDTce3M9yYGEBDYDjRTC6sem9BjqkAcMeJM5mrapfoqFoXWqWgGsbr9zeT6uj9AGChh%2BOkOZxSt%2F594a0uC9UuCvS%2BuzPqUZEyAiMxmjjFQm47nuIg7Jt1HbstF4%2BCpJIwvzPdTJ7HZ5ctKE7RnKMmFVRbu62V20u21Qyge%2B%2FwLT%2BbDs%2FQFWuzfbYtylLOs3AYiDhZa1tO9jDQuAgJaLfki4qHKFamd1xLXydSysxc5Q9vSjSJgnU3uZj&X-Amz-Signature=66ab6b00ec327017545a00ce50c7d968cbb0d8bebb63386cd2a58be5ffb50041&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPVGCMZB%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp1EkKflo4ZsONDSW8UbXKNii6L8F0293yaA20bc%2FNUQIhAIRp9fqIkAhLYcgsEXqmz3Q2HcaS9bzFUt7U55M6hwKVKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQPWNvS9PInrFKUvoq3AMHZ%2B23SrD2%2Bbc1dBH6qTlhI%2FOHFP0%2B13HH5WnL23zH2MS3LoVqSOEiCrFAYFmET9UvgaCq864Xr9f25UezxDPlrYiu0K6%2FVLu7AMf4b%2FB1yR1xqKPXCVbVZYcOm3LQzOjMIKUDHEu%2FB7Jrm5fjXaZcKIC58G1Pb3Vg1FqFij%2FuJbTSKI%2F%2BCaKWYzJB5C53JUBwNIyyafsaxTqoAaDS04zgWdxOUecIv7oOPpV5KrjKxG%2Bt6onR3kGS0Nd73h4bjkaYGNKoiGfhBR9G0I19Q8KD%2BYwY5yDEx%2BVeG6SWhtPWX9vQDQpShwDtZbE%2BzjJxcVDcKw6IXO5Gj1GXmZ7Fju%2FcwUDQ8akUi1n5lJLtqP7u1vmm6AKV5sKzdEQooI6qablPlK71DIU7p8%2FAPQ7%2F5ySWUhnu0wp2L1GRj0dl%2BbfQTq8HBUH0mkOnAcQWXs5m%2B8RUayLpncoyy%2BP0gM07Z662oqg9kYAHVtbyAURNNbY4Ecz8cmiBLYcCt4N6o4bvj3EDdNROM3kDsfMzxYd7c1gPyESWreNgdv6lxOnNjbsYjh7UhF%2F7v%2BsFJtVMtjeGdpoKUetNoe0q4EAnD%2F3RD0Ll96Ar38cbfR%2B%2FzBYEXqnyDTce3M9yYGEBDYDjRTC6sem9BjqkAcMeJM5mrapfoqFoXWqWgGsbr9zeT6uj9AGChh%2BOkOZxSt%2F594a0uC9UuCvS%2BuzPqUZEyAiMxmjjFQm47nuIg7Jt1HbstF4%2BCpJIwvzPdTJ7HZ5ctKE7RnKMmFVRbu62V20u21Qyge%2B%2FwLT%2BbDs%2FQFWuzfbYtylLOs3AYiDhZa1tO9jDQuAgJaLfki4qHKFamd1xLXydSysxc5Q9vSjSJgnU3uZj&X-Amz-Signature=8de9897acb3a37a57b75cf033229f9665935bffb79d244c8b16f2c5770d50981&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPVGCMZB%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp1EkKflo4ZsONDSW8UbXKNii6L8F0293yaA20bc%2FNUQIhAIRp9fqIkAhLYcgsEXqmz3Q2HcaS9bzFUt7U55M6hwKVKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQPWNvS9PInrFKUvoq3AMHZ%2B23SrD2%2Bbc1dBH6qTlhI%2FOHFP0%2B13HH5WnL23zH2MS3LoVqSOEiCrFAYFmET9UvgaCq864Xr9f25UezxDPlrYiu0K6%2FVLu7AMf4b%2FB1yR1xqKPXCVbVZYcOm3LQzOjMIKUDHEu%2FB7Jrm5fjXaZcKIC58G1Pb3Vg1FqFij%2FuJbTSKI%2F%2BCaKWYzJB5C53JUBwNIyyafsaxTqoAaDS04zgWdxOUecIv7oOPpV5KrjKxG%2Bt6onR3kGS0Nd73h4bjkaYGNKoiGfhBR9G0I19Q8KD%2BYwY5yDEx%2BVeG6SWhtPWX9vQDQpShwDtZbE%2BzjJxcVDcKw6IXO5Gj1GXmZ7Fju%2FcwUDQ8akUi1n5lJLtqP7u1vmm6AKV5sKzdEQooI6qablPlK71DIU7p8%2FAPQ7%2F5ySWUhnu0wp2L1GRj0dl%2BbfQTq8HBUH0mkOnAcQWXs5m%2B8RUayLpncoyy%2BP0gM07Z662oqg9kYAHVtbyAURNNbY4Ecz8cmiBLYcCt4N6o4bvj3EDdNROM3kDsfMzxYd7c1gPyESWreNgdv6lxOnNjbsYjh7UhF%2F7v%2BsFJtVMtjeGdpoKUetNoe0q4EAnD%2F3RD0Ll96Ar38cbfR%2B%2FzBYEXqnyDTce3M9yYGEBDYDjRTC6sem9BjqkAcMeJM5mrapfoqFoXWqWgGsbr9zeT6uj9AGChh%2BOkOZxSt%2F594a0uC9UuCvS%2BuzPqUZEyAiMxmjjFQm47nuIg7Jt1HbstF4%2BCpJIwvzPdTJ7HZ5ctKE7RnKMmFVRbu62V20u21Qyge%2B%2FwLT%2BbDs%2FQFWuzfbYtylLOs3AYiDhZa1tO9jDQuAgJaLfki4qHKFamd1xLXydSysxc5Q9vSjSJgnU3uZj&X-Amz-Signature=b31fe7694fdc8636366ef11c6919c4756e83cf381cbfb5852778fed1604c1a60&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
