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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4ATZRW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtdvPAjMCCbP1alJgCWT4xReRIevj7R3sz%2FUk8jFJLWgIhANbJf6GSDiUzvJYle6yH072oZTZBs6%2FhiAUWkzgkxWs%2FKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzflF%2B%2BKdQ7dAeMoSQq3ANl%2BYGx%2F1ProI68m6NuKMFCYwm4BEJBp2Mf%2BAxdFYlUL7nYc46qKrgGr1%2FGBc7lxw0CW1cMdNE72quWRZJUKb%2Bz1AS6igxz5F5lDcJZYzBI0%2B7kpX8OCI%2FaVKysJ%2F3a%2FIalHVMGeiXIQKmLXyuz%2BQ9dYQt1umm7snx9mWhntw%2BCMWmjp3964dpyAseA1JQbpsG2l9yNNacgX42LJk%2BTY56U6LlYS7RBKmVvw%2FfXktEPOJyw3b9bbKGKAWi4uxMvUbETQ0ywSyEWtUtYfnBc8XKEnb5p5Zg4ZsynvZFB9HUjIy2IyuOb0nkkH7gZV728x2TRucJCZydmwQas42YqQp26G67LNqrXFgMG%2FNK%2F%2Fpp3JL83NPolj26JI4yn2bZXgXHCutFgYTrLOfYYs2iYbEhyrcTdGwjqKfKroNRtVFKirARtDEeayUi6TDZc%2BZSAl2SY22wHb%2FmAHCUAtrgGm%2BWYR3RlkGsBLhYtPQVT2QbEOKwXlZC0ORHA52wk%2FpwQVU6trZU7hhdW7a8f0%2F0SaVCiJ%2Bb5v1OgHgkjcmfsDEEXYCjmK3QTBabyKFJ2vnId59Nrh5dkc7vV9xYkJKjY13N24vRfIvcbYFcNfLUAs7uDkE9bZ%2FnCFOcDcAdBUjD%2Bg5u%2BBjqkAQNFdCrGls7r3ymzq0XyRAXAXerIkJWndAWrsRT2tw4RexrBkJzqA8%2FA1SJ59ECUGSPvKORmDkdjGw1xMHkZOTFj16luP%2BLK3Kg4sCf5mAmqUVUUXcwP8t4qnpzTtgK7UQpYhA8NjwSaf1JQbfKHCICcEFWwpf3HDsqIcMfYJIBGdYAFCj2HLGfG5OlFgpEdMztQ47TD5H7Qa%2F0ObgDIXKMe3Hhl&X-Amz-Signature=200a3dcf3fa6e8f0bbc35a1da6acfe1c871c19fbefb6eb8fe821354ebf4e97e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4ATZRW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtdvPAjMCCbP1alJgCWT4xReRIevj7R3sz%2FUk8jFJLWgIhANbJf6GSDiUzvJYle6yH072oZTZBs6%2FhiAUWkzgkxWs%2FKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzflF%2B%2BKdQ7dAeMoSQq3ANl%2BYGx%2F1ProI68m6NuKMFCYwm4BEJBp2Mf%2BAxdFYlUL7nYc46qKrgGr1%2FGBc7lxw0CW1cMdNE72quWRZJUKb%2Bz1AS6igxz5F5lDcJZYzBI0%2B7kpX8OCI%2FaVKysJ%2F3a%2FIalHVMGeiXIQKmLXyuz%2BQ9dYQt1umm7snx9mWhntw%2BCMWmjp3964dpyAseA1JQbpsG2l9yNNacgX42LJk%2BTY56U6LlYS7RBKmVvw%2FfXktEPOJyw3b9bbKGKAWi4uxMvUbETQ0ywSyEWtUtYfnBc8XKEnb5p5Zg4ZsynvZFB9HUjIy2IyuOb0nkkH7gZV728x2TRucJCZydmwQas42YqQp26G67LNqrXFgMG%2FNK%2F%2Fpp3JL83NPolj26JI4yn2bZXgXHCutFgYTrLOfYYs2iYbEhyrcTdGwjqKfKroNRtVFKirARtDEeayUi6TDZc%2BZSAl2SY22wHb%2FmAHCUAtrgGm%2BWYR3RlkGsBLhYtPQVT2QbEOKwXlZC0ORHA52wk%2FpwQVU6trZU7hhdW7a8f0%2F0SaVCiJ%2Bb5v1OgHgkjcmfsDEEXYCjmK3QTBabyKFJ2vnId59Nrh5dkc7vV9xYkJKjY13N24vRfIvcbYFcNfLUAs7uDkE9bZ%2FnCFOcDcAdBUjD%2Bg5u%2BBjqkAQNFdCrGls7r3ymzq0XyRAXAXerIkJWndAWrsRT2tw4RexrBkJzqA8%2FA1SJ59ECUGSPvKORmDkdjGw1xMHkZOTFj16luP%2BLK3Kg4sCf5mAmqUVUUXcwP8t4qnpzTtgK7UQpYhA8NjwSaf1JQbfKHCICcEFWwpf3HDsqIcMfYJIBGdYAFCj2HLGfG5OlFgpEdMztQ47TD5H7Qa%2F0ObgDIXKMe3Hhl&X-Amz-Signature=32c09b4f55b0220299450a20294baf765cfcc60d0a3d81c17bac3ae49dc51588&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4ATZRW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtdvPAjMCCbP1alJgCWT4xReRIevj7R3sz%2FUk8jFJLWgIhANbJf6GSDiUzvJYle6yH072oZTZBs6%2FhiAUWkzgkxWs%2FKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzflF%2B%2BKdQ7dAeMoSQq3ANl%2BYGx%2F1ProI68m6NuKMFCYwm4BEJBp2Mf%2BAxdFYlUL7nYc46qKrgGr1%2FGBc7lxw0CW1cMdNE72quWRZJUKb%2Bz1AS6igxz5F5lDcJZYzBI0%2B7kpX8OCI%2FaVKysJ%2F3a%2FIalHVMGeiXIQKmLXyuz%2BQ9dYQt1umm7snx9mWhntw%2BCMWmjp3964dpyAseA1JQbpsG2l9yNNacgX42LJk%2BTY56U6LlYS7RBKmVvw%2FfXktEPOJyw3b9bbKGKAWi4uxMvUbETQ0ywSyEWtUtYfnBc8XKEnb5p5Zg4ZsynvZFB9HUjIy2IyuOb0nkkH7gZV728x2TRucJCZydmwQas42YqQp26G67LNqrXFgMG%2FNK%2F%2Fpp3JL83NPolj26JI4yn2bZXgXHCutFgYTrLOfYYs2iYbEhyrcTdGwjqKfKroNRtVFKirARtDEeayUi6TDZc%2BZSAl2SY22wHb%2FmAHCUAtrgGm%2BWYR3RlkGsBLhYtPQVT2QbEOKwXlZC0ORHA52wk%2FpwQVU6trZU7hhdW7a8f0%2F0SaVCiJ%2Bb5v1OgHgkjcmfsDEEXYCjmK3QTBabyKFJ2vnId59Nrh5dkc7vV9xYkJKjY13N24vRfIvcbYFcNfLUAs7uDkE9bZ%2FnCFOcDcAdBUjD%2Bg5u%2BBjqkAQNFdCrGls7r3ymzq0XyRAXAXerIkJWndAWrsRT2tw4RexrBkJzqA8%2FA1SJ59ECUGSPvKORmDkdjGw1xMHkZOTFj16luP%2BLK3Kg4sCf5mAmqUVUUXcwP8t4qnpzTtgK7UQpYhA8NjwSaf1JQbfKHCICcEFWwpf3HDsqIcMfYJIBGdYAFCj2HLGfG5OlFgpEdMztQ47TD5H7Qa%2F0ObgDIXKMe3Hhl&X-Amz-Signature=b703db024d0e2306ece141a49cda65d6915f20e71b70051eca7ba8ed5d5ffe2d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4ATZRW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtdvPAjMCCbP1alJgCWT4xReRIevj7R3sz%2FUk8jFJLWgIhANbJf6GSDiUzvJYle6yH072oZTZBs6%2FhiAUWkzgkxWs%2FKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzflF%2B%2BKdQ7dAeMoSQq3ANl%2BYGx%2F1ProI68m6NuKMFCYwm4BEJBp2Mf%2BAxdFYlUL7nYc46qKrgGr1%2FGBc7lxw0CW1cMdNE72quWRZJUKb%2Bz1AS6igxz5F5lDcJZYzBI0%2B7kpX8OCI%2FaVKysJ%2F3a%2FIalHVMGeiXIQKmLXyuz%2BQ9dYQt1umm7snx9mWhntw%2BCMWmjp3964dpyAseA1JQbpsG2l9yNNacgX42LJk%2BTY56U6LlYS7RBKmVvw%2FfXktEPOJyw3b9bbKGKAWi4uxMvUbETQ0ywSyEWtUtYfnBc8XKEnb5p5Zg4ZsynvZFB9HUjIy2IyuOb0nkkH7gZV728x2TRucJCZydmwQas42YqQp26G67LNqrXFgMG%2FNK%2F%2Fpp3JL83NPolj26JI4yn2bZXgXHCutFgYTrLOfYYs2iYbEhyrcTdGwjqKfKroNRtVFKirARtDEeayUi6TDZc%2BZSAl2SY22wHb%2FmAHCUAtrgGm%2BWYR3RlkGsBLhYtPQVT2QbEOKwXlZC0ORHA52wk%2FpwQVU6trZU7hhdW7a8f0%2F0SaVCiJ%2Bb5v1OgHgkjcmfsDEEXYCjmK3QTBabyKFJ2vnId59Nrh5dkc7vV9xYkJKjY13N24vRfIvcbYFcNfLUAs7uDkE9bZ%2FnCFOcDcAdBUjD%2Bg5u%2BBjqkAQNFdCrGls7r3ymzq0XyRAXAXerIkJWndAWrsRT2tw4RexrBkJzqA8%2FA1SJ59ECUGSPvKORmDkdjGw1xMHkZOTFj16luP%2BLK3Kg4sCf5mAmqUVUUXcwP8t4qnpzTtgK7UQpYhA8NjwSaf1JQbfKHCICcEFWwpf3HDsqIcMfYJIBGdYAFCj2HLGfG5OlFgpEdMztQ47TD5H7Qa%2F0ObgDIXKMe3Hhl&X-Amz-Signature=ef0c731c325f605c7a9e669097e2d0f779d6ead47d8a714101b77bd083da7066&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4ATZRW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtdvPAjMCCbP1alJgCWT4xReRIevj7R3sz%2FUk8jFJLWgIhANbJf6GSDiUzvJYle6yH072oZTZBs6%2FhiAUWkzgkxWs%2FKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzflF%2B%2BKdQ7dAeMoSQq3ANl%2BYGx%2F1ProI68m6NuKMFCYwm4BEJBp2Mf%2BAxdFYlUL7nYc46qKrgGr1%2FGBc7lxw0CW1cMdNE72quWRZJUKb%2Bz1AS6igxz5F5lDcJZYzBI0%2B7kpX8OCI%2FaVKysJ%2F3a%2FIalHVMGeiXIQKmLXyuz%2BQ9dYQt1umm7snx9mWhntw%2BCMWmjp3964dpyAseA1JQbpsG2l9yNNacgX42LJk%2BTY56U6LlYS7RBKmVvw%2FfXktEPOJyw3b9bbKGKAWi4uxMvUbETQ0ywSyEWtUtYfnBc8XKEnb5p5Zg4ZsynvZFB9HUjIy2IyuOb0nkkH7gZV728x2TRucJCZydmwQas42YqQp26G67LNqrXFgMG%2FNK%2F%2Fpp3JL83NPolj26JI4yn2bZXgXHCutFgYTrLOfYYs2iYbEhyrcTdGwjqKfKroNRtVFKirARtDEeayUi6TDZc%2BZSAl2SY22wHb%2FmAHCUAtrgGm%2BWYR3RlkGsBLhYtPQVT2QbEOKwXlZC0ORHA52wk%2FpwQVU6trZU7hhdW7a8f0%2F0SaVCiJ%2Bb5v1OgHgkjcmfsDEEXYCjmK3QTBabyKFJ2vnId59Nrh5dkc7vV9xYkJKjY13N24vRfIvcbYFcNfLUAs7uDkE9bZ%2FnCFOcDcAdBUjD%2Bg5u%2BBjqkAQNFdCrGls7r3ymzq0XyRAXAXerIkJWndAWrsRT2tw4RexrBkJzqA8%2FA1SJ59ECUGSPvKORmDkdjGw1xMHkZOTFj16luP%2BLK3Kg4sCf5mAmqUVUUXcwP8t4qnpzTtgK7UQpYhA8NjwSaf1JQbfKHCICcEFWwpf3HDsqIcMfYJIBGdYAFCj2HLGfG5OlFgpEdMztQ47TD5H7Qa%2F0ObgDIXKMe3Hhl&X-Amz-Signature=91f82b8e09a2b3e580c02d35cf57a0ca8a3fdb82057152ee4bac9304cd89836b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
