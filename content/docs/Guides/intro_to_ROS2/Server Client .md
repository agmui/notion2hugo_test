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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ABPX2ME%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCytqOH4fz4kJMy0ZSA7cXYF5WiWd2vJjDPcC41V0nxNgIgJDhtkQDyLZRkSwVIJ7QqqWby%2BgZ0c9W12WkN0Ba5ZAoqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMwCGDs1%2FPZoB1fPSrcA8T7iAcnE9wNIHOrdo7cCIn%2Fyr59OgfDbQrd3SsHz9JEOi%2BZrLCVlGfhIdKzixjzmtb1ge8%2BuoeJbBq%2F2eUDJwyT%2FehEkHddHdpeK5%2BsY%2BUvJcDFSz6vsAA7fM2paHusFBqXI%2Fbw8XF53JwSAjKqGvlwD%2Fzu8OLQn9xeA65wb4CD3rKvrqp%2B345mjjbkQbIsogoILny58l5cmmzhDDJo3PEkuO90FCFWkugCxMmRf81CX3dJo1jf7QLoeG01T4ON8YmUjY8QXVOaHvrjSPlSHQ8H4QPIWZIEq9isrxEKsR47EhACUWdvDnQFZJPez7OQVYDmQvlHJ1yzDDjVN9euVV4O40DxoK5CgHBkHw7h%2BSaqhegzQywlRnU4HQ4Mijrae4BRhsh0WTdGYVv1VnKwJJgXWKhiN8nGnuI21VxueIzLfk81gasoyk4D%2BV0il5S46CtdTsJDdjxHskORLNptJHzbVszxhTneyrfIbYzbPWIyAy4moqznQsSTjJCf%2FfYOQsuN67OuoCGUflHLExFaV3vxeWaT%2BNRUYn1JChageEntfeL0a1nn5ksI9KeCFwYzofW35PMshgmh%2Ftw5qXaMm1tjOOetyg7mfOdzaQqEPnbOaem8zNMRYShYwuXaMNzvo78GOqUBNMP%2Bf6bXqCk1O%2FIfhq6kxM4vU45r2dW8%2BNQiAfTbjsyFYN%2BCadnrSrA61qNxnFoxp%2FHMyr4CTa%2FjH8to330qeGonlbWShq13uBKdccOeCEqCsIL3DCZxgoZBAbD03V7ycgDkqEITRl3hBjUH1RyFeTyjPCiqIq7axmhRgBj9fMsBHUhjpWYKpa1b19eiQRm1l%2BCr6rJYguUnGEIvtl0gOGJ3nYHY&X-Amz-Signature=5d82b54c975e78b19422f8a68e1f24a409fc5e8e4b7793cfd6642d8363eda554&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ABPX2ME%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCytqOH4fz4kJMy0ZSA7cXYF5WiWd2vJjDPcC41V0nxNgIgJDhtkQDyLZRkSwVIJ7QqqWby%2BgZ0c9W12WkN0Ba5ZAoqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMwCGDs1%2FPZoB1fPSrcA8T7iAcnE9wNIHOrdo7cCIn%2Fyr59OgfDbQrd3SsHz9JEOi%2BZrLCVlGfhIdKzixjzmtb1ge8%2BuoeJbBq%2F2eUDJwyT%2FehEkHddHdpeK5%2BsY%2BUvJcDFSz6vsAA7fM2paHusFBqXI%2Fbw8XF53JwSAjKqGvlwD%2Fzu8OLQn9xeA65wb4CD3rKvrqp%2B345mjjbkQbIsogoILny58l5cmmzhDDJo3PEkuO90FCFWkugCxMmRf81CX3dJo1jf7QLoeG01T4ON8YmUjY8QXVOaHvrjSPlSHQ8H4QPIWZIEq9isrxEKsR47EhACUWdvDnQFZJPez7OQVYDmQvlHJ1yzDDjVN9euVV4O40DxoK5CgHBkHw7h%2BSaqhegzQywlRnU4HQ4Mijrae4BRhsh0WTdGYVv1VnKwJJgXWKhiN8nGnuI21VxueIzLfk81gasoyk4D%2BV0il5S46CtdTsJDdjxHskORLNptJHzbVszxhTneyrfIbYzbPWIyAy4moqznQsSTjJCf%2FfYOQsuN67OuoCGUflHLExFaV3vxeWaT%2BNRUYn1JChageEntfeL0a1nn5ksI9KeCFwYzofW35PMshgmh%2Ftw5qXaMm1tjOOetyg7mfOdzaQqEPnbOaem8zNMRYShYwuXaMNzvo78GOqUBNMP%2Bf6bXqCk1O%2FIfhq6kxM4vU45r2dW8%2BNQiAfTbjsyFYN%2BCadnrSrA61qNxnFoxp%2FHMyr4CTa%2FjH8to330qeGonlbWShq13uBKdccOeCEqCsIL3DCZxgoZBAbD03V7ycgDkqEITRl3hBjUH1RyFeTyjPCiqIq7axmhRgBj9fMsBHUhjpWYKpa1b19eiQRm1l%2BCr6rJYguUnGEIvtl0gOGJ3nYHY&X-Amz-Signature=2104e1b65b3a89639b1cd8288e50d04e78eb91af55062ab6a5f5a484047a1dae&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ABPX2ME%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCytqOH4fz4kJMy0ZSA7cXYF5WiWd2vJjDPcC41V0nxNgIgJDhtkQDyLZRkSwVIJ7QqqWby%2BgZ0c9W12WkN0Ba5ZAoqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMwCGDs1%2FPZoB1fPSrcA8T7iAcnE9wNIHOrdo7cCIn%2Fyr59OgfDbQrd3SsHz9JEOi%2BZrLCVlGfhIdKzixjzmtb1ge8%2BuoeJbBq%2F2eUDJwyT%2FehEkHddHdpeK5%2BsY%2BUvJcDFSz6vsAA7fM2paHusFBqXI%2Fbw8XF53JwSAjKqGvlwD%2Fzu8OLQn9xeA65wb4CD3rKvrqp%2B345mjjbkQbIsogoILny58l5cmmzhDDJo3PEkuO90FCFWkugCxMmRf81CX3dJo1jf7QLoeG01T4ON8YmUjY8QXVOaHvrjSPlSHQ8H4QPIWZIEq9isrxEKsR47EhACUWdvDnQFZJPez7OQVYDmQvlHJ1yzDDjVN9euVV4O40DxoK5CgHBkHw7h%2BSaqhegzQywlRnU4HQ4Mijrae4BRhsh0WTdGYVv1VnKwJJgXWKhiN8nGnuI21VxueIzLfk81gasoyk4D%2BV0il5S46CtdTsJDdjxHskORLNptJHzbVszxhTneyrfIbYzbPWIyAy4moqznQsSTjJCf%2FfYOQsuN67OuoCGUflHLExFaV3vxeWaT%2BNRUYn1JChageEntfeL0a1nn5ksI9KeCFwYzofW35PMshgmh%2Ftw5qXaMm1tjOOetyg7mfOdzaQqEPnbOaem8zNMRYShYwuXaMNzvo78GOqUBNMP%2Bf6bXqCk1O%2FIfhq6kxM4vU45r2dW8%2BNQiAfTbjsyFYN%2BCadnrSrA61qNxnFoxp%2FHMyr4CTa%2FjH8to330qeGonlbWShq13uBKdccOeCEqCsIL3DCZxgoZBAbD03V7ycgDkqEITRl3hBjUH1RyFeTyjPCiqIq7axmhRgBj9fMsBHUhjpWYKpa1b19eiQRm1l%2BCr6rJYguUnGEIvtl0gOGJ3nYHY&X-Amz-Signature=da2d0610ec3594f5ac7fce4d990f66018cb622fcf8a1a0268ad44c53f057ceb5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ABPX2ME%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCytqOH4fz4kJMy0ZSA7cXYF5WiWd2vJjDPcC41V0nxNgIgJDhtkQDyLZRkSwVIJ7QqqWby%2BgZ0c9W12WkN0Ba5ZAoqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMwCGDs1%2FPZoB1fPSrcA8T7iAcnE9wNIHOrdo7cCIn%2Fyr59OgfDbQrd3SsHz9JEOi%2BZrLCVlGfhIdKzixjzmtb1ge8%2BuoeJbBq%2F2eUDJwyT%2FehEkHddHdpeK5%2BsY%2BUvJcDFSz6vsAA7fM2paHusFBqXI%2Fbw8XF53JwSAjKqGvlwD%2Fzu8OLQn9xeA65wb4CD3rKvrqp%2B345mjjbkQbIsogoILny58l5cmmzhDDJo3PEkuO90FCFWkugCxMmRf81CX3dJo1jf7QLoeG01T4ON8YmUjY8QXVOaHvrjSPlSHQ8H4QPIWZIEq9isrxEKsR47EhACUWdvDnQFZJPez7OQVYDmQvlHJ1yzDDjVN9euVV4O40DxoK5CgHBkHw7h%2BSaqhegzQywlRnU4HQ4Mijrae4BRhsh0WTdGYVv1VnKwJJgXWKhiN8nGnuI21VxueIzLfk81gasoyk4D%2BV0il5S46CtdTsJDdjxHskORLNptJHzbVszxhTneyrfIbYzbPWIyAy4moqznQsSTjJCf%2FfYOQsuN67OuoCGUflHLExFaV3vxeWaT%2BNRUYn1JChageEntfeL0a1nn5ksI9KeCFwYzofW35PMshgmh%2Ftw5qXaMm1tjOOetyg7mfOdzaQqEPnbOaem8zNMRYShYwuXaMNzvo78GOqUBNMP%2Bf6bXqCk1O%2FIfhq6kxM4vU45r2dW8%2BNQiAfTbjsyFYN%2BCadnrSrA61qNxnFoxp%2FHMyr4CTa%2FjH8to330qeGonlbWShq13uBKdccOeCEqCsIL3DCZxgoZBAbD03V7ycgDkqEITRl3hBjUH1RyFeTyjPCiqIq7axmhRgBj9fMsBHUhjpWYKpa1b19eiQRm1l%2BCr6rJYguUnGEIvtl0gOGJ3nYHY&X-Amz-Signature=78f34888c82e7d08f1dee52c4dce2715efca089f2d6e60554c9114721da0763e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ABPX2ME%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCytqOH4fz4kJMy0ZSA7cXYF5WiWd2vJjDPcC41V0nxNgIgJDhtkQDyLZRkSwVIJ7QqqWby%2BgZ0c9W12WkN0Ba5ZAoqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMwCGDs1%2FPZoB1fPSrcA8T7iAcnE9wNIHOrdo7cCIn%2Fyr59OgfDbQrd3SsHz9JEOi%2BZrLCVlGfhIdKzixjzmtb1ge8%2BuoeJbBq%2F2eUDJwyT%2FehEkHddHdpeK5%2BsY%2BUvJcDFSz6vsAA7fM2paHusFBqXI%2Fbw8XF53JwSAjKqGvlwD%2Fzu8OLQn9xeA65wb4CD3rKvrqp%2B345mjjbkQbIsogoILny58l5cmmzhDDJo3PEkuO90FCFWkugCxMmRf81CX3dJo1jf7QLoeG01T4ON8YmUjY8QXVOaHvrjSPlSHQ8H4QPIWZIEq9isrxEKsR47EhACUWdvDnQFZJPez7OQVYDmQvlHJ1yzDDjVN9euVV4O40DxoK5CgHBkHw7h%2BSaqhegzQywlRnU4HQ4Mijrae4BRhsh0WTdGYVv1VnKwJJgXWKhiN8nGnuI21VxueIzLfk81gasoyk4D%2BV0il5S46CtdTsJDdjxHskORLNptJHzbVszxhTneyrfIbYzbPWIyAy4moqznQsSTjJCf%2FfYOQsuN67OuoCGUflHLExFaV3vxeWaT%2BNRUYn1JChageEntfeL0a1nn5ksI9KeCFwYzofW35PMshgmh%2Ftw5qXaMm1tjOOetyg7mfOdzaQqEPnbOaem8zNMRYShYwuXaMNzvo78GOqUBNMP%2Bf6bXqCk1O%2FIfhq6kxM4vU45r2dW8%2BNQiAfTbjsyFYN%2BCadnrSrA61qNxnFoxp%2FHMyr4CTa%2FjH8to330qeGonlbWShq13uBKdccOeCEqCsIL3DCZxgoZBAbD03V7ycgDkqEITRl3hBjUH1RyFeTyjPCiqIq7axmhRgBj9fMsBHUhjpWYKpa1b19eiQRm1l%2BCr6rJYguUnGEIvtl0gOGJ3nYHY&X-Amz-Signature=5e6b2b7233754b11d8f742e5adfcf79b9c028a4a1605831581e15a1d2c69030e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
