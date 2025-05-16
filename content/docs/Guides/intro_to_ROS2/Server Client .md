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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVEX7NYN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB352Sh%2F8bD5SPlaY4BWq4u9H7DA%2BhDmwhqkI9BH5HdtAiABb5UZw%2Fjs%2BgASjCfhWgYxnP6TGs%2Bm254zhJjbb5JyzSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMK43v2KWFLdJ47BZeKtwDhmgZns3OUPy370yIbfT4VhzRybxkgf1xg4NNZVLq4APBESq%2BlB3DE2fTXxhXp9C57AS788pT%2BRtLNujlisa7nASugso2ScK%2FEItbRrgURKFjYAQDKejIUus4D%2FMrMh1XoBvmdfHKsS2obhGCM90sSTKIgswfvcRh%2FRCFRVwmyvvGDhPX3O0vbmOgkNlwS1f9nowM75vBkBI9lcVhb9ubMl1jfbQEpyCB6gvwkCRiaUCZUoYBAAJ3awPhTxHCeY8%2FNvP%2BYlXYJJxkoE3%2BuV9zYZA7zvdY%2FlFpow7sOuPA%2BAnywQ3sIG%2F1f9FnXW29hg8fU9qXIkfkEl7rTuIuU1LDwYlVZRH4Fxnc04X0qffh9Cd0CmogYIzew50wnpINg58JcH%2FjyiYKyZ2ZS0WYs%2BwFBuNdCVg6Qi6aeu7e%2B0Wr0X%2FJcBbBIwnbc%2F57%2BL8UWHKTTOvbDkdT1RJHO6MUg6MWq900ch9gR%2FAtVXF%2Bq%2BtThA8XfsD6MgE3Pdd%2BuJ7Jxnddxy4P922M8Xw%2FpUQQV2VzAU2hAUxjJ%2BROixtirNHFMFnOEvc9%2FiL8wM4Cqd%2BlWDOSXweWkId%2BULAe%2FwUXUPNfz1QIN0N4E9UC5sSByqUp%2BqIDlBdiYE%2FQgoxSygowh8OcwQY6pgGC658k1vzUM1TAJWVgFOt%2Bf%2FPWNogT%2BG4Nub9bpoMTUz7e6rUfGbwMmSzek4oOZAzH9Chh7%2F0PxAVmNJNwa78G7LgxzdXrObclKVkfz0pIxJoD3uPVhh7Lo1ChV4a1Wk4lOU%2F1pvAvR0R5Py1TdzpzXGgYVk0Hr69taRo%2Bbv0dYqo8402Xj%2BaTmh2chWNjaaQdPEqjvCBLIv0Hc%2FjCD0a8Od13Ddw3&X-Amz-Signature=4ebf2b802dcd421dd6fac07dbf93770f77d9e0957dd907ff4a178a055c1b64fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVEX7NYN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB352Sh%2F8bD5SPlaY4BWq4u9H7DA%2BhDmwhqkI9BH5HdtAiABb5UZw%2Fjs%2BgASjCfhWgYxnP6TGs%2Bm254zhJjbb5JyzSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMK43v2KWFLdJ47BZeKtwDhmgZns3OUPy370yIbfT4VhzRybxkgf1xg4NNZVLq4APBESq%2BlB3DE2fTXxhXp9C57AS788pT%2BRtLNujlisa7nASugso2ScK%2FEItbRrgURKFjYAQDKejIUus4D%2FMrMh1XoBvmdfHKsS2obhGCM90sSTKIgswfvcRh%2FRCFRVwmyvvGDhPX3O0vbmOgkNlwS1f9nowM75vBkBI9lcVhb9ubMl1jfbQEpyCB6gvwkCRiaUCZUoYBAAJ3awPhTxHCeY8%2FNvP%2BYlXYJJxkoE3%2BuV9zYZA7zvdY%2FlFpow7sOuPA%2BAnywQ3sIG%2F1f9FnXW29hg8fU9qXIkfkEl7rTuIuU1LDwYlVZRH4Fxnc04X0qffh9Cd0CmogYIzew50wnpINg58JcH%2FjyiYKyZ2ZS0WYs%2BwFBuNdCVg6Qi6aeu7e%2B0Wr0X%2FJcBbBIwnbc%2F57%2BL8UWHKTTOvbDkdT1RJHO6MUg6MWq900ch9gR%2FAtVXF%2Bq%2BtThA8XfsD6MgE3Pdd%2BuJ7Jxnddxy4P922M8Xw%2FpUQQV2VzAU2hAUxjJ%2BROixtirNHFMFnOEvc9%2FiL8wM4Cqd%2BlWDOSXweWkId%2BULAe%2FwUXUPNfz1QIN0N4E9UC5sSByqUp%2BqIDlBdiYE%2FQgoxSygowh8OcwQY6pgGC658k1vzUM1TAJWVgFOt%2Bf%2FPWNogT%2BG4Nub9bpoMTUz7e6rUfGbwMmSzek4oOZAzH9Chh7%2F0PxAVmNJNwa78G7LgxzdXrObclKVkfz0pIxJoD3uPVhh7Lo1ChV4a1Wk4lOU%2F1pvAvR0R5Py1TdzpzXGgYVk0Hr69taRo%2Bbv0dYqo8402Xj%2BaTmh2chWNjaaQdPEqjvCBLIv0Hc%2FjCD0a8Od13Ddw3&X-Amz-Signature=cc2019025de147e0f97197837c5b8557e257b02b409e44963d768baca641992a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVEX7NYN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB352Sh%2F8bD5SPlaY4BWq4u9H7DA%2BhDmwhqkI9BH5HdtAiABb5UZw%2Fjs%2BgASjCfhWgYxnP6TGs%2Bm254zhJjbb5JyzSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMK43v2KWFLdJ47BZeKtwDhmgZns3OUPy370yIbfT4VhzRybxkgf1xg4NNZVLq4APBESq%2BlB3DE2fTXxhXp9C57AS788pT%2BRtLNujlisa7nASugso2ScK%2FEItbRrgURKFjYAQDKejIUus4D%2FMrMh1XoBvmdfHKsS2obhGCM90sSTKIgswfvcRh%2FRCFRVwmyvvGDhPX3O0vbmOgkNlwS1f9nowM75vBkBI9lcVhb9ubMl1jfbQEpyCB6gvwkCRiaUCZUoYBAAJ3awPhTxHCeY8%2FNvP%2BYlXYJJxkoE3%2BuV9zYZA7zvdY%2FlFpow7sOuPA%2BAnywQ3sIG%2F1f9FnXW29hg8fU9qXIkfkEl7rTuIuU1LDwYlVZRH4Fxnc04X0qffh9Cd0CmogYIzew50wnpINg58JcH%2FjyiYKyZ2ZS0WYs%2BwFBuNdCVg6Qi6aeu7e%2B0Wr0X%2FJcBbBIwnbc%2F57%2BL8UWHKTTOvbDkdT1RJHO6MUg6MWq900ch9gR%2FAtVXF%2Bq%2BtThA8XfsD6MgE3Pdd%2BuJ7Jxnddxy4P922M8Xw%2FpUQQV2VzAU2hAUxjJ%2BROixtirNHFMFnOEvc9%2FiL8wM4Cqd%2BlWDOSXweWkId%2BULAe%2FwUXUPNfz1QIN0N4E9UC5sSByqUp%2BqIDlBdiYE%2FQgoxSygowh8OcwQY6pgGC658k1vzUM1TAJWVgFOt%2Bf%2FPWNogT%2BG4Nub9bpoMTUz7e6rUfGbwMmSzek4oOZAzH9Chh7%2F0PxAVmNJNwa78G7LgxzdXrObclKVkfz0pIxJoD3uPVhh7Lo1ChV4a1Wk4lOU%2F1pvAvR0R5Py1TdzpzXGgYVk0Hr69taRo%2Bbv0dYqo8402Xj%2BaTmh2chWNjaaQdPEqjvCBLIv0Hc%2FjCD0a8Od13Ddw3&X-Amz-Signature=a11abeb19a0fb87dfbffd4ad9b27071685e41878e65d50fbd611aeb5033a9241&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVEX7NYN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB352Sh%2F8bD5SPlaY4BWq4u9H7DA%2BhDmwhqkI9BH5HdtAiABb5UZw%2Fjs%2BgASjCfhWgYxnP6TGs%2Bm254zhJjbb5JyzSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMK43v2KWFLdJ47BZeKtwDhmgZns3OUPy370yIbfT4VhzRybxkgf1xg4NNZVLq4APBESq%2BlB3DE2fTXxhXp9C57AS788pT%2BRtLNujlisa7nASugso2ScK%2FEItbRrgURKFjYAQDKejIUus4D%2FMrMh1XoBvmdfHKsS2obhGCM90sSTKIgswfvcRh%2FRCFRVwmyvvGDhPX3O0vbmOgkNlwS1f9nowM75vBkBI9lcVhb9ubMl1jfbQEpyCB6gvwkCRiaUCZUoYBAAJ3awPhTxHCeY8%2FNvP%2BYlXYJJxkoE3%2BuV9zYZA7zvdY%2FlFpow7sOuPA%2BAnywQ3sIG%2F1f9FnXW29hg8fU9qXIkfkEl7rTuIuU1LDwYlVZRH4Fxnc04X0qffh9Cd0CmogYIzew50wnpINg58JcH%2FjyiYKyZ2ZS0WYs%2BwFBuNdCVg6Qi6aeu7e%2B0Wr0X%2FJcBbBIwnbc%2F57%2BL8UWHKTTOvbDkdT1RJHO6MUg6MWq900ch9gR%2FAtVXF%2Bq%2BtThA8XfsD6MgE3Pdd%2BuJ7Jxnddxy4P922M8Xw%2FpUQQV2VzAU2hAUxjJ%2BROixtirNHFMFnOEvc9%2FiL8wM4Cqd%2BlWDOSXweWkId%2BULAe%2FwUXUPNfz1QIN0N4E9UC5sSByqUp%2BqIDlBdiYE%2FQgoxSygowh8OcwQY6pgGC658k1vzUM1TAJWVgFOt%2Bf%2FPWNogT%2BG4Nub9bpoMTUz7e6rUfGbwMmSzek4oOZAzH9Chh7%2F0PxAVmNJNwa78G7LgxzdXrObclKVkfz0pIxJoD3uPVhh7Lo1ChV4a1Wk4lOU%2F1pvAvR0R5Py1TdzpzXGgYVk0Hr69taRo%2Bbv0dYqo8402Xj%2BaTmh2chWNjaaQdPEqjvCBLIv0Hc%2FjCD0a8Od13Ddw3&X-Amz-Signature=cdca29b5a2a97873e09e649236adb8d5f595b26fc65bd15a730c9b7557141e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVEX7NYN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB352Sh%2F8bD5SPlaY4BWq4u9H7DA%2BhDmwhqkI9BH5HdtAiABb5UZw%2Fjs%2BgASjCfhWgYxnP6TGs%2Bm254zhJjbb5JyzSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMK43v2KWFLdJ47BZeKtwDhmgZns3OUPy370yIbfT4VhzRybxkgf1xg4NNZVLq4APBESq%2BlB3DE2fTXxhXp9C57AS788pT%2BRtLNujlisa7nASugso2ScK%2FEItbRrgURKFjYAQDKejIUus4D%2FMrMh1XoBvmdfHKsS2obhGCM90sSTKIgswfvcRh%2FRCFRVwmyvvGDhPX3O0vbmOgkNlwS1f9nowM75vBkBI9lcVhb9ubMl1jfbQEpyCB6gvwkCRiaUCZUoYBAAJ3awPhTxHCeY8%2FNvP%2BYlXYJJxkoE3%2BuV9zYZA7zvdY%2FlFpow7sOuPA%2BAnywQ3sIG%2F1f9FnXW29hg8fU9qXIkfkEl7rTuIuU1LDwYlVZRH4Fxnc04X0qffh9Cd0CmogYIzew50wnpINg58JcH%2FjyiYKyZ2ZS0WYs%2BwFBuNdCVg6Qi6aeu7e%2B0Wr0X%2FJcBbBIwnbc%2F57%2BL8UWHKTTOvbDkdT1RJHO6MUg6MWq900ch9gR%2FAtVXF%2Bq%2BtThA8XfsD6MgE3Pdd%2BuJ7Jxnddxy4P922M8Xw%2FpUQQV2VzAU2hAUxjJ%2BROixtirNHFMFnOEvc9%2FiL8wM4Cqd%2BlWDOSXweWkId%2BULAe%2FwUXUPNfz1QIN0N4E9UC5sSByqUp%2BqIDlBdiYE%2FQgoxSygowh8OcwQY6pgGC658k1vzUM1TAJWVgFOt%2Bf%2FPWNogT%2BG4Nub9bpoMTUz7e6rUfGbwMmSzek4oOZAzH9Chh7%2F0PxAVmNJNwa78G7LgxzdXrObclKVkfz0pIxJoD3uPVhh7Lo1ChV4a1Wk4lOU%2F1pvAvR0R5Py1TdzpzXGgYVk0Hr69taRo%2Bbv0dYqo8402Xj%2BaTmh2chWNjaaQdPEqjvCBLIv0Hc%2FjCD0a8Od13Ddw3&X-Amz-Signature=33aa1c542623881d4c0181985d1ea6564be98957c379645a26ff648e754afbda&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
