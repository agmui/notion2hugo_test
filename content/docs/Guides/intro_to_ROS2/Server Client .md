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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ID2OHGC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3WIULck3Z4xcZJNZnB1AREPNeC%2BNoMvzjAYSYV9GjqAiAKYb0ifttC%2BjbK1LucaQDx2ZkkLZQIw0m8oGDuNebhDiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOXghddZ0tMzMAOPKtwD6lioDHo7%2FggUGZFQUhz%2FWlV8mWIFEeWBypbojGyug3EUfQnRzNgWQftfs%2F7gdmECWWqPU0J1x1h6Cw6%2FpJtcVPj0PoBz4%2FCTrvDQZkijsFR38aHsYL7aJmrggpZnyxLDDa3at7NhOgKC3F%2FMdQNpk6e5pzU9szWrCG7ur3d668VnwjKoWeQcBu9oWWeRfWQOc3JDEXp349av1I%2F1La%2Fo0BxbYP0FLIwbutT0UbYVrYrWn0ND8YvF%2FvE%2Fo%2F%2BMkiOYAsDse58T5%2FEVuOWIpNxEgm0XFDD1k5HWs15tjJOk%2FAzgRP%2F8QT87Dsi%2Bg4vdV8JF0rKJWmiNV1jKSjMV7LykCJLEwFwsbsHsv7PwHh0aVwVHbgM7W57ZZpIDPONwK%2BN9Hwj0FPc6LkuKAtWINzNEaB5pFR9OAeJ6wBTjuJACqpLz2HKsWT26NRXpfcsOQrkEgb48mvsF7mm0MwRAQT3KxqrwntVq58VIndA17ijmJ1jJza7iWrWshGJ0J7rPgdjwKxRWctLqTKO8G0fsguQ0TRkctNhC6EeIvHqIupf1tO5bW63YOaPsTXmM8pFczh4wm4piT7fKA5X2lkJx4n2259Ils9YPOGKG0ghCWkRCxpPH57LLqFMXog1nOIowg82MwwY6pgFlRJuB6tOHSOL9fdYxKL5n99BrGF7MjmHAXEP8vS%2BxcNsLw4mXfbp5EJQUyl9Oi1sAt3lydflBGFMP7ES8K4F3phtwxRxlAjn0ZVzyqIUa68gO4wMvjJxmioinNXNkDMeZGUnQFAeIhKc26mNUpkOjpx137BTRTPTVcaIwQb1rdubLVZAMaTigDaeJtfgQ5crhejwcwpxawHyj%2B3bTINz%2BvKAblwrJ&X-Amz-Signature=c6779baee098104ed64eb03f28824d744242c3aa8bc309426d75cad97295903f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ID2OHGC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3WIULck3Z4xcZJNZnB1AREPNeC%2BNoMvzjAYSYV9GjqAiAKYb0ifttC%2BjbK1LucaQDx2ZkkLZQIw0m8oGDuNebhDiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOXghddZ0tMzMAOPKtwD6lioDHo7%2FggUGZFQUhz%2FWlV8mWIFEeWBypbojGyug3EUfQnRzNgWQftfs%2F7gdmECWWqPU0J1x1h6Cw6%2FpJtcVPj0PoBz4%2FCTrvDQZkijsFR38aHsYL7aJmrggpZnyxLDDa3at7NhOgKC3F%2FMdQNpk6e5pzU9szWrCG7ur3d668VnwjKoWeQcBu9oWWeRfWQOc3JDEXp349av1I%2F1La%2Fo0BxbYP0FLIwbutT0UbYVrYrWn0ND8YvF%2FvE%2Fo%2F%2BMkiOYAsDse58T5%2FEVuOWIpNxEgm0XFDD1k5HWs15tjJOk%2FAzgRP%2F8QT87Dsi%2Bg4vdV8JF0rKJWmiNV1jKSjMV7LykCJLEwFwsbsHsv7PwHh0aVwVHbgM7W57ZZpIDPONwK%2BN9Hwj0FPc6LkuKAtWINzNEaB5pFR9OAeJ6wBTjuJACqpLz2HKsWT26NRXpfcsOQrkEgb48mvsF7mm0MwRAQT3KxqrwntVq58VIndA17ijmJ1jJza7iWrWshGJ0J7rPgdjwKxRWctLqTKO8G0fsguQ0TRkctNhC6EeIvHqIupf1tO5bW63YOaPsTXmM8pFczh4wm4piT7fKA5X2lkJx4n2259Ils9YPOGKG0ghCWkRCxpPH57LLqFMXog1nOIowg82MwwY6pgFlRJuB6tOHSOL9fdYxKL5n99BrGF7MjmHAXEP8vS%2BxcNsLw4mXfbp5EJQUyl9Oi1sAt3lydflBGFMP7ES8K4F3phtwxRxlAjn0ZVzyqIUa68gO4wMvjJxmioinNXNkDMeZGUnQFAeIhKc26mNUpkOjpx137BTRTPTVcaIwQb1rdubLVZAMaTigDaeJtfgQ5crhejwcwpxawHyj%2B3bTINz%2BvKAblwrJ&X-Amz-Signature=ed437f96ed71e82ed928e8b02c1f864ad4cf914eedd6096c36549a811aa249bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ID2OHGC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3WIULck3Z4xcZJNZnB1AREPNeC%2BNoMvzjAYSYV9GjqAiAKYb0ifttC%2BjbK1LucaQDx2ZkkLZQIw0m8oGDuNebhDiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOXghddZ0tMzMAOPKtwD6lioDHo7%2FggUGZFQUhz%2FWlV8mWIFEeWBypbojGyug3EUfQnRzNgWQftfs%2F7gdmECWWqPU0J1x1h6Cw6%2FpJtcVPj0PoBz4%2FCTrvDQZkijsFR38aHsYL7aJmrggpZnyxLDDa3at7NhOgKC3F%2FMdQNpk6e5pzU9szWrCG7ur3d668VnwjKoWeQcBu9oWWeRfWQOc3JDEXp349av1I%2F1La%2Fo0BxbYP0FLIwbutT0UbYVrYrWn0ND8YvF%2FvE%2Fo%2F%2BMkiOYAsDse58T5%2FEVuOWIpNxEgm0XFDD1k5HWs15tjJOk%2FAzgRP%2F8QT87Dsi%2Bg4vdV8JF0rKJWmiNV1jKSjMV7LykCJLEwFwsbsHsv7PwHh0aVwVHbgM7W57ZZpIDPONwK%2BN9Hwj0FPc6LkuKAtWINzNEaB5pFR9OAeJ6wBTjuJACqpLz2HKsWT26NRXpfcsOQrkEgb48mvsF7mm0MwRAQT3KxqrwntVq58VIndA17ijmJ1jJza7iWrWshGJ0J7rPgdjwKxRWctLqTKO8G0fsguQ0TRkctNhC6EeIvHqIupf1tO5bW63YOaPsTXmM8pFczh4wm4piT7fKA5X2lkJx4n2259Ils9YPOGKG0ghCWkRCxpPH57LLqFMXog1nOIowg82MwwY6pgFlRJuB6tOHSOL9fdYxKL5n99BrGF7MjmHAXEP8vS%2BxcNsLw4mXfbp5EJQUyl9Oi1sAt3lydflBGFMP7ES8K4F3phtwxRxlAjn0ZVzyqIUa68gO4wMvjJxmioinNXNkDMeZGUnQFAeIhKc26mNUpkOjpx137BTRTPTVcaIwQb1rdubLVZAMaTigDaeJtfgQ5crhejwcwpxawHyj%2B3bTINz%2BvKAblwrJ&X-Amz-Signature=b5c03ad632b06295a4f1f7c4247a4fa436ffb664b9984beabb0d9b60659b8a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ID2OHGC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3WIULck3Z4xcZJNZnB1AREPNeC%2BNoMvzjAYSYV9GjqAiAKYb0ifttC%2BjbK1LucaQDx2ZkkLZQIw0m8oGDuNebhDiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOXghddZ0tMzMAOPKtwD6lioDHo7%2FggUGZFQUhz%2FWlV8mWIFEeWBypbojGyug3EUfQnRzNgWQftfs%2F7gdmECWWqPU0J1x1h6Cw6%2FpJtcVPj0PoBz4%2FCTrvDQZkijsFR38aHsYL7aJmrggpZnyxLDDa3at7NhOgKC3F%2FMdQNpk6e5pzU9szWrCG7ur3d668VnwjKoWeQcBu9oWWeRfWQOc3JDEXp349av1I%2F1La%2Fo0BxbYP0FLIwbutT0UbYVrYrWn0ND8YvF%2FvE%2Fo%2F%2BMkiOYAsDse58T5%2FEVuOWIpNxEgm0XFDD1k5HWs15tjJOk%2FAzgRP%2F8QT87Dsi%2Bg4vdV8JF0rKJWmiNV1jKSjMV7LykCJLEwFwsbsHsv7PwHh0aVwVHbgM7W57ZZpIDPONwK%2BN9Hwj0FPc6LkuKAtWINzNEaB5pFR9OAeJ6wBTjuJACqpLz2HKsWT26NRXpfcsOQrkEgb48mvsF7mm0MwRAQT3KxqrwntVq58VIndA17ijmJ1jJza7iWrWshGJ0J7rPgdjwKxRWctLqTKO8G0fsguQ0TRkctNhC6EeIvHqIupf1tO5bW63YOaPsTXmM8pFczh4wm4piT7fKA5X2lkJx4n2259Ils9YPOGKG0ghCWkRCxpPH57LLqFMXog1nOIowg82MwwY6pgFlRJuB6tOHSOL9fdYxKL5n99BrGF7MjmHAXEP8vS%2BxcNsLw4mXfbp5EJQUyl9Oi1sAt3lydflBGFMP7ES8K4F3phtwxRxlAjn0ZVzyqIUa68gO4wMvjJxmioinNXNkDMeZGUnQFAeIhKc26mNUpkOjpx137BTRTPTVcaIwQb1rdubLVZAMaTigDaeJtfgQ5crhejwcwpxawHyj%2B3bTINz%2BvKAblwrJ&X-Amz-Signature=85eaca35ef46829787f55f376e95f3150c5802a4eb1bc92064c51f9a7167b8f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ID2OHGC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3WIULck3Z4xcZJNZnB1AREPNeC%2BNoMvzjAYSYV9GjqAiAKYb0ifttC%2BjbK1LucaQDx2ZkkLZQIw0m8oGDuNebhDiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOXghddZ0tMzMAOPKtwD6lioDHo7%2FggUGZFQUhz%2FWlV8mWIFEeWBypbojGyug3EUfQnRzNgWQftfs%2F7gdmECWWqPU0J1x1h6Cw6%2FpJtcVPj0PoBz4%2FCTrvDQZkijsFR38aHsYL7aJmrggpZnyxLDDa3at7NhOgKC3F%2FMdQNpk6e5pzU9szWrCG7ur3d668VnwjKoWeQcBu9oWWeRfWQOc3JDEXp349av1I%2F1La%2Fo0BxbYP0FLIwbutT0UbYVrYrWn0ND8YvF%2FvE%2Fo%2F%2BMkiOYAsDse58T5%2FEVuOWIpNxEgm0XFDD1k5HWs15tjJOk%2FAzgRP%2F8QT87Dsi%2Bg4vdV8JF0rKJWmiNV1jKSjMV7LykCJLEwFwsbsHsv7PwHh0aVwVHbgM7W57ZZpIDPONwK%2BN9Hwj0FPc6LkuKAtWINzNEaB5pFR9OAeJ6wBTjuJACqpLz2HKsWT26NRXpfcsOQrkEgb48mvsF7mm0MwRAQT3KxqrwntVq58VIndA17ijmJ1jJza7iWrWshGJ0J7rPgdjwKxRWctLqTKO8G0fsguQ0TRkctNhC6EeIvHqIupf1tO5bW63YOaPsTXmM8pFczh4wm4piT7fKA5X2lkJx4n2259Ils9YPOGKG0ghCWkRCxpPH57LLqFMXog1nOIowg82MwwY6pgFlRJuB6tOHSOL9fdYxKL5n99BrGF7MjmHAXEP8vS%2BxcNsLw4mXfbp5EJQUyl9Oi1sAt3lydflBGFMP7ES8K4F3phtwxRxlAjn0ZVzyqIUa68gO4wMvjJxmioinNXNkDMeZGUnQFAeIhKc26mNUpkOjpx137BTRTPTVcaIwQb1rdubLVZAMaTigDaeJtfgQ5crhejwcwpxawHyj%2B3bTINz%2BvKAblwrJ&X-Amz-Signature=085308c2d31bd041b314d5f240c2b7dc04c65de3412656cd1994fcc58c6ea485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
