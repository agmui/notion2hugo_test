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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM4CVLEH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAePQGSvRoCHUr55PnUcD9FP5JqxBhp4681QxeKP%2FCORAiEAriD4gdTTATS6acJhHv84gRriMfQ48FqcXVt1xa0BTRAqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQ%2F9KFiE3qwpjMtCyrcA3W05dY1gCk%2BvgnhJ9YBi%2F2UqY9zO%2FsboCOfXmzhClpuvrlOwML7OCn%2FV4iDkNX08F91PkBSH4fQWReleDRoc6buDQzeiXNsmhlPcR1icDGqaBVwOXV121NcYcGWXr29ws3Ld84kqRJaIKUA2mPShtrDqFiQKRFoxNttFoZqz8LRGGq4ApE7otZm42qmJ6EcNZsv%2FPwYYv4G9Uq0qqI52Sa%2BXkBgg9Lo6Z93cHhdk3wlLkN7VSZsRjWK7hxXAf3U0apqlJ36uOEetwVqGtiefDzl01QCHC3RY47MFJNn%2Fb5wFclAFcagQ3OC6rbUgoGaG0WR9fcM%2B5LVheHq8VpygrCeNgkl14PiwTuAgJpAgJE9p1mHTSLSOlpNtznhofQL5AgkNjrPOolX%2F4m1k5TSgry5vltvdCUG78b0qVK%2FUHx00Hk6eBKjMn5cIRrHZR6uHWYR6HUxW6kfC3aZPS3yC7DBK1US5lbcRmLkfrZP6xyOSGZqzbNlHkt4Y0vsaBK0nbz20C8reCtkUAMQ1uORWgDbvYGkRH5ajS5zN%2BIjUWs0u2gHzrvF%2FAqo%2FAIfqU%2FKkAQRRtiROdi3n33IyPoW8fyFv%2BSXX2yrCV9oL70CTl3kZFHB3I80hngwmdLKMJmn7MEGOqUB59wlkHWSPAETYE2mxY6xuoR%2F%2B%2F5YakhdW9%2BwMnZIueOgCDZDKoIF28Jg43e5fMmDnmwTWv0cQt0xarz1UJzuzYZX8Zyi%2FxL0WOJZ%2Fs8GHm9ttz%2FNIoknBjzdkZQY3Adj8fKCeQoRqg9MPgPSedVBIjviA7GKi%2FqIcQrWEsRc3PdiPgz9daGfK3JJ5IkmFijqjOCa9I7M%2B5Kb2vHoWUV47EFFGCCu&X-Amz-Signature=87274e80e86ee9978b27a6777903ea56ac22032096c459cac6b8d4d96df31aa7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM4CVLEH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAePQGSvRoCHUr55PnUcD9FP5JqxBhp4681QxeKP%2FCORAiEAriD4gdTTATS6acJhHv84gRriMfQ48FqcXVt1xa0BTRAqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQ%2F9KFiE3qwpjMtCyrcA3W05dY1gCk%2BvgnhJ9YBi%2F2UqY9zO%2FsboCOfXmzhClpuvrlOwML7OCn%2FV4iDkNX08F91PkBSH4fQWReleDRoc6buDQzeiXNsmhlPcR1icDGqaBVwOXV121NcYcGWXr29ws3Ld84kqRJaIKUA2mPShtrDqFiQKRFoxNttFoZqz8LRGGq4ApE7otZm42qmJ6EcNZsv%2FPwYYv4G9Uq0qqI52Sa%2BXkBgg9Lo6Z93cHhdk3wlLkN7VSZsRjWK7hxXAf3U0apqlJ36uOEetwVqGtiefDzl01QCHC3RY47MFJNn%2Fb5wFclAFcagQ3OC6rbUgoGaG0WR9fcM%2B5LVheHq8VpygrCeNgkl14PiwTuAgJpAgJE9p1mHTSLSOlpNtznhofQL5AgkNjrPOolX%2F4m1k5TSgry5vltvdCUG78b0qVK%2FUHx00Hk6eBKjMn5cIRrHZR6uHWYR6HUxW6kfC3aZPS3yC7DBK1US5lbcRmLkfrZP6xyOSGZqzbNlHkt4Y0vsaBK0nbz20C8reCtkUAMQ1uORWgDbvYGkRH5ajS5zN%2BIjUWs0u2gHzrvF%2FAqo%2FAIfqU%2FKkAQRRtiROdi3n33IyPoW8fyFv%2BSXX2yrCV9oL70CTl3kZFHB3I80hngwmdLKMJmn7MEGOqUB59wlkHWSPAETYE2mxY6xuoR%2F%2B%2F5YakhdW9%2BwMnZIueOgCDZDKoIF28Jg43e5fMmDnmwTWv0cQt0xarz1UJzuzYZX8Zyi%2FxL0WOJZ%2Fs8GHm9ttz%2FNIoknBjzdkZQY3Adj8fKCeQoRqg9MPgPSedVBIjviA7GKi%2FqIcQrWEsRc3PdiPgz9daGfK3JJ5IkmFijqjOCa9I7M%2B5Kb2vHoWUV47EFFGCCu&X-Amz-Signature=c7baa919f3be9adb2c805259a2ab2931f16a897d5ed60fc30c05a14db26e158a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM4CVLEH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAePQGSvRoCHUr55PnUcD9FP5JqxBhp4681QxeKP%2FCORAiEAriD4gdTTATS6acJhHv84gRriMfQ48FqcXVt1xa0BTRAqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQ%2F9KFiE3qwpjMtCyrcA3W05dY1gCk%2BvgnhJ9YBi%2F2UqY9zO%2FsboCOfXmzhClpuvrlOwML7OCn%2FV4iDkNX08F91PkBSH4fQWReleDRoc6buDQzeiXNsmhlPcR1icDGqaBVwOXV121NcYcGWXr29ws3Ld84kqRJaIKUA2mPShtrDqFiQKRFoxNttFoZqz8LRGGq4ApE7otZm42qmJ6EcNZsv%2FPwYYv4G9Uq0qqI52Sa%2BXkBgg9Lo6Z93cHhdk3wlLkN7VSZsRjWK7hxXAf3U0apqlJ36uOEetwVqGtiefDzl01QCHC3RY47MFJNn%2Fb5wFclAFcagQ3OC6rbUgoGaG0WR9fcM%2B5LVheHq8VpygrCeNgkl14PiwTuAgJpAgJE9p1mHTSLSOlpNtznhofQL5AgkNjrPOolX%2F4m1k5TSgry5vltvdCUG78b0qVK%2FUHx00Hk6eBKjMn5cIRrHZR6uHWYR6HUxW6kfC3aZPS3yC7DBK1US5lbcRmLkfrZP6xyOSGZqzbNlHkt4Y0vsaBK0nbz20C8reCtkUAMQ1uORWgDbvYGkRH5ajS5zN%2BIjUWs0u2gHzrvF%2FAqo%2FAIfqU%2FKkAQRRtiROdi3n33IyPoW8fyFv%2BSXX2yrCV9oL70CTl3kZFHB3I80hngwmdLKMJmn7MEGOqUB59wlkHWSPAETYE2mxY6xuoR%2F%2B%2F5YakhdW9%2BwMnZIueOgCDZDKoIF28Jg43e5fMmDnmwTWv0cQt0xarz1UJzuzYZX8Zyi%2FxL0WOJZ%2Fs8GHm9ttz%2FNIoknBjzdkZQY3Adj8fKCeQoRqg9MPgPSedVBIjviA7GKi%2FqIcQrWEsRc3PdiPgz9daGfK3JJ5IkmFijqjOCa9I7M%2B5Kb2vHoWUV47EFFGCCu&X-Amz-Signature=b19602459656765e418d71a60d876ad598f2990158cc08611ce6e8ce26bd0bd1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM4CVLEH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAePQGSvRoCHUr55PnUcD9FP5JqxBhp4681QxeKP%2FCORAiEAriD4gdTTATS6acJhHv84gRriMfQ48FqcXVt1xa0BTRAqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQ%2F9KFiE3qwpjMtCyrcA3W05dY1gCk%2BvgnhJ9YBi%2F2UqY9zO%2FsboCOfXmzhClpuvrlOwML7OCn%2FV4iDkNX08F91PkBSH4fQWReleDRoc6buDQzeiXNsmhlPcR1icDGqaBVwOXV121NcYcGWXr29ws3Ld84kqRJaIKUA2mPShtrDqFiQKRFoxNttFoZqz8LRGGq4ApE7otZm42qmJ6EcNZsv%2FPwYYv4G9Uq0qqI52Sa%2BXkBgg9Lo6Z93cHhdk3wlLkN7VSZsRjWK7hxXAf3U0apqlJ36uOEetwVqGtiefDzl01QCHC3RY47MFJNn%2Fb5wFclAFcagQ3OC6rbUgoGaG0WR9fcM%2B5LVheHq8VpygrCeNgkl14PiwTuAgJpAgJE9p1mHTSLSOlpNtznhofQL5AgkNjrPOolX%2F4m1k5TSgry5vltvdCUG78b0qVK%2FUHx00Hk6eBKjMn5cIRrHZR6uHWYR6HUxW6kfC3aZPS3yC7DBK1US5lbcRmLkfrZP6xyOSGZqzbNlHkt4Y0vsaBK0nbz20C8reCtkUAMQ1uORWgDbvYGkRH5ajS5zN%2BIjUWs0u2gHzrvF%2FAqo%2FAIfqU%2FKkAQRRtiROdi3n33IyPoW8fyFv%2BSXX2yrCV9oL70CTl3kZFHB3I80hngwmdLKMJmn7MEGOqUB59wlkHWSPAETYE2mxY6xuoR%2F%2B%2F5YakhdW9%2BwMnZIueOgCDZDKoIF28Jg43e5fMmDnmwTWv0cQt0xarz1UJzuzYZX8Zyi%2FxL0WOJZ%2Fs8GHm9ttz%2FNIoknBjzdkZQY3Adj8fKCeQoRqg9MPgPSedVBIjviA7GKi%2FqIcQrWEsRc3PdiPgz9daGfK3JJ5IkmFijqjOCa9I7M%2B5Kb2vHoWUV47EFFGCCu&X-Amz-Signature=da7a081cbda228b76fcf198bfe42528844993404cca93ef06220f1c84eded7bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM4CVLEH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAePQGSvRoCHUr55PnUcD9FP5JqxBhp4681QxeKP%2FCORAiEAriD4gdTTATS6acJhHv84gRriMfQ48FqcXVt1xa0BTRAqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQ%2F9KFiE3qwpjMtCyrcA3W05dY1gCk%2BvgnhJ9YBi%2F2UqY9zO%2FsboCOfXmzhClpuvrlOwML7OCn%2FV4iDkNX08F91PkBSH4fQWReleDRoc6buDQzeiXNsmhlPcR1icDGqaBVwOXV121NcYcGWXr29ws3Ld84kqRJaIKUA2mPShtrDqFiQKRFoxNttFoZqz8LRGGq4ApE7otZm42qmJ6EcNZsv%2FPwYYv4G9Uq0qqI52Sa%2BXkBgg9Lo6Z93cHhdk3wlLkN7VSZsRjWK7hxXAf3U0apqlJ36uOEetwVqGtiefDzl01QCHC3RY47MFJNn%2Fb5wFclAFcagQ3OC6rbUgoGaG0WR9fcM%2B5LVheHq8VpygrCeNgkl14PiwTuAgJpAgJE9p1mHTSLSOlpNtznhofQL5AgkNjrPOolX%2F4m1k5TSgry5vltvdCUG78b0qVK%2FUHx00Hk6eBKjMn5cIRrHZR6uHWYR6HUxW6kfC3aZPS3yC7DBK1US5lbcRmLkfrZP6xyOSGZqzbNlHkt4Y0vsaBK0nbz20C8reCtkUAMQ1uORWgDbvYGkRH5ajS5zN%2BIjUWs0u2gHzrvF%2FAqo%2FAIfqU%2FKkAQRRtiROdi3n33IyPoW8fyFv%2BSXX2yrCV9oL70CTl3kZFHB3I80hngwmdLKMJmn7MEGOqUB59wlkHWSPAETYE2mxY6xuoR%2F%2B%2F5YakhdW9%2BwMnZIueOgCDZDKoIF28Jg43e5fMmDnmwTWv0cQt0xarz1UJzuzYZX8Zyi%2FxL0WOJZ%2Fs8GHm9ttz%2FNIoknBjzdkZQY3Adj8fKCeQoRqg9MPgPSedVBIjviA7GKi%2FqIcQrWEsRc3PdiPgz9daGfK3JJ5IkmFijqjOCa9I7M%2B5Kb2vHoWUV47EFFGCCu&X-Amz-Signature=e9a0c9b10731c413bb9e9d161e50e4fbb5ff6fb7e3e7b4673f57300e9e6817fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
