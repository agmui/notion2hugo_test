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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGRZHLF5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdVDJw2XM4avDthPvDGR7YbYH7%2Fh7Xven0s54H8FmGAAiEAzQs%2F8CJXdxRucYChkqoNi2vqzEYf%2FzZ6PlpyxUQ7ggAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEmNQbbnthQlhErcSrcA54OZp6zQVhAlL5NL5oidif%2FHXCPu%2BsO72XO6SB%2FH9dIfMW2osqA3EiWUZNxtifjn8q110a%2BZHjjFLWVsLX%2FrASGUfltzFUot4wgKSChV3F7ei60VbKKzFIoWHd9ZdMIQhAIXRqdbHWUirWk3yUwXlVnM5bjX6YZy%2Fmz4%2FDBrHOLC%2B8Rt4SuBRpXWitfHNA8HsYNECS9wvnKLavtiDpPs1V1F0klqt61UKv3kWztkEdoxjaNnetTnwe7h58lWBnfZRzdJpS5sGmlMvBdo%2F6EzGB7dZ3Ge0CHUo5EJQsgf0Q%2BtUJNWZWGlOmagA8Gym0kG5NR0YAWH0Tu0Rbx89IklNkI0dFwEAQBv3KGKyBoAzw%2FhTQbNG1o6GJnN4FgHAShB%2F2BAzQUmJzIJ2q133eqBHIejw6TAAunhd9FYiL52PZlb5iNkjN4fCxeXVNmzBm5Yufq6lgV5Jf7CmzAZ0w%2Fvmmnk9fF3uq0Ylk%2BvfsV4eW9j8kMaQM6mI0QLflGFU6EFqUs%2BF7a4a8rzeBTO8LZkLq82YN%2BTYBNI%2BFh0EVeHnAwv1sqSG1VwtNrMuOhAKklCtCOensMpCXEvIz%2B9e1tBMAKF0vBsb0UR4tRKHtRQ5uuq8suDjcXoo6uUdItMNaem8IGOqUBJP1ewA6zlTHqZeUVkczCj5T1qSbaNQ4mmMyVoN6slMr89QGNK%2BFu9YPTxOoqYUEUIusVbSXT6clemRJn7S6tXgUOrAXFbiOyDH9%2BYTAfCUJzBQ3gYTHeQsKaFheLqXoUCmL33RdNKklgxoPTDLndZRSMkbkBcEgK3dT11Ohbm63RjROQ42Hmd3AMl9QM5bhfhEYdN3PAxoOFl0lgSy4KaLgv5U5L&X-Amz-Signature=f68130bdccded6ad21044dc12ba111bc13e540af809a701edb4dad3daa865bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGRZHLF5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdVDJw2XM4avDthPvDGR7YbYH7%2Fh7Xven0s54H8FmGAAiEAzQs%2F8CJXdxRucYChkqoNi2vqzEYf%2FzZ6PlpyxUQ7ggAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEmNQbbnthQlhErcSrcA54OZp6zQVhAlL5NL5oidif%2FHXCPu%2BsO72XO6SB%2FH9dIfMW2osqA3EiWUZNxtifjn8q110a%2BZHjjFLWVsLX%2FrASGUfltzFUot4wgKSChV3F7ei60VbKKzFIoWHd9ZdMIQhAIXRqdbHWUirWk3yUwXlVnM5bjX6YZy%2Fmz4%2FDBrHOLC%2B8Rt4SuBRpXWitfHNA8HsYNECS9wvnKLavtiDpPs1V1F0klqt61UKv3kWztkEdoxjaNnetTnwe7h58lWBnfZRzdJpS5sGmlMvBdo%2F6EzGB7dZ3Ge0CHUo5EJQsgf0Q%2BtUJNWZWGlOmagA8Gym0kG5NR0YAWH0Tu0Rbx89IklNkI0dFwEAQBv3KGKyBoAzw%2FhTQbNG1o6GJnN4FgHAShB%2F2BAzQUmJzIJ2q133eqBHIejw6TAAunhd9FYiL52PZlb5iNkjN4fCxeXVNmzBm5Yufq6lgV5Jf7CmzAZ0w%2Fvmmnk9fF3uq0Ylk%2BvfsV4eW9j8kMaQM6mI0QLflGFU6EFqUs%2BF7a4a8rzeBTO8LZkLq82YN%2BTYBNI%2BFh0EVeHnAwv1sqSG1VwtNrMuOhAKklCtCOensMpCXEvIz%2B9e1tBMAKF0vBsb0UR4tRKHtRQ5uuq8suDjcXoo6uUdItMNaem8IGOqUBJP1ewA6zlTHqZeUVkczCj5T1qSbaNQ4mmMyVoN6slMr89QGNK%2BFu9YPTxOoqYUEUIusVbSXT6clemRJn7S6tXgUOrAXFbiOyDH9%2BYTAfCUJzBQ3gYTHeQsKaFheLqXoUCmL33RdNKklgxoPTDLndZRSMkbkBcEgK3dT11Ohbm63RjROQ42Hmd3AMl9QM5bhfhEYdN3PAxoOFl0lgSy4KaLgv5U5L&X-Amz-Signature=f1ef70a5cc7887bd7d9ea423a7ed8340636ca89f01e1f82cd65b476c8b38790d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGRZHLF5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdVDJw2XM4avDthPvDGR7YbYH7%2Fh7Xven0s54H8FmGAAiEAzQs%2F8CJXdxRucYChkqoNi2vqzEYf%2FzZ6PlpyxUQ7ggAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEmNQbbnthQlhErcSrcA54OZp6zQVhAlL5NL5oidif%2FHXCPu%2BsO72XO6SB%2FH9dIfMW2osqA3EiWUZNxtifjn8q110a%2BZHjjFLWVsLX%2FrASGUfltzFUot4wgKSChV3F7ei60VbKKzFIoWHd9ZdMIQhAIXRqdbHWUirWk3yUwXlVnM5bjX6YZy%2Fmz4%2FDBrHOLC%2B8Rt4SuBRpXWitfHNA8HsYNECS9wvnKLavtiDpPs1V1F0klqt61UKv3kWztkEdoxjaNnetTnwe7h58lWBnfZRzdJpS5sGmlMvBdo%2F6EzGB7dZ3Ge0CHUo5EJQsgf0Q%2BtUJNWZWGlOmagA8Gym0kG5NR0YAWH0Tu0Rbx89IklNkI0dFwEAQBv3KGKyBoAzw%2FhTQbNG1o6GJnN4FgHAShB%2F2BAzQUmJzIJ2q133eqBHIejw6TAAunhd9FYiL52PZlb5iNkjN4fCxeXVNmzBm5Yufq6lgV5Jf7CmzAZ0w%2Fvmmnk9fF3uq0Ylk%2BvfsV4eW9j8kMaQM6mI0QLflGFU6EFqUs%2BF7a4a8rzeBTO8LZkLq82YN%2BTYBNI%2BFh0EVeHnAwv1sqSG1VwtNrMuOhAKklCtCOensMpCXEvIz%2B9e1tBMAKF0vBsb0UR4tRKHtRQ5uuq8suDjcXoo6uUdItMNaem8IGOqUBJP1ewA6zlTHqZeUVkczCj5T1qSbaNQ4mmMyVoN6slMr89QGNK%2BFu9YPTxOoqYUEUIusVbSXT6clemRJn7S6tXgUOrAXFbiOyDH9%2BYTAfCUJzBQ3gYTHeQsKaFheLqXoUCmL33RdNKklgxoPTDLndZRSMkbkBcEgK3dT11Ohbm63RjROQ42Hmd3AMl9QM5bhfhEYdN3PAxoOFl0lgSy4KaLgv5U5L&X-Amz-Signature=ec3f573d7cd5c6ffb9eeff4ba9f0d32450187a59ba103b8d5fa50c9c6a082a31&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGRZHLF5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdVDJw2XM4avDthPvDGR7YbYH7%2Fh7Xven0s54H8FmGAAiEAzQs%2F8CJXdxRucYChkqoNi2vqzEYf%2FzZ6PlpyxUQ7ggAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEmNQbbnthQlhErcSrcA54OZp6zQVhAlL5NL5oidif%2FHXCPu%2BsO72XO6SB%2FH9dIfMW2osqA3EiWUZNxtifjn8q110a%2BZHjjFLWVsLX%2FrASGUfltzFUot4wgKSChV3F7ei60VbKKzFIoWHd9ZdMIQhAIXRqdbHWUirWk3yUwXlVnM5bjX6YZy%2Fmz4%2FDBrHOLC%2B8Rt4SuBRpXWitfHNA8HsYNECS9wvnKLavtiDpPs1V1F0klqt61UKv3kWztkEdoxjaNnetTnwe7h58lWBnfZRzdJpS5sGmlMvBdo%2F6EzGB7dZ3Ge0CHUo5EJQsgf0Q%2BtUJNWZWGlOmagA8Gym0kG5NR0YAWH0Tu0Rbx89IklNkI0dFwEAQBv3KGKyBoAzw%2FhTQbNG1o6GJnN4FgHAShB%2F2BAzQUmJzIJ2q133eqBHIejw6TAAunhd9FYiL52PZlb5iNkjN4fCxeXVNmzBm5Yufq6lgV5Jf7CmzAZ0w%2Fvmmnk9fF3uq0Ylk%2BvfsV4eW9j8kMaQM6mI0QLflGFU6EFqUs%2BF7a4a8rzeBTO8LZkLq82YN%2BTYBNI%2BFh0EVeHnAwv1sqSG1VwtNrMuOhAKklCtCOensMpCXEvIz%2B9e1tBMAKF0vBsb0UR4tRKHtRQ5uuq8suDjcXoo6uUdItMNaem8IGOqUBJP1ewA6zlTHqZeUVkczCj5T1qSbaNQ4mmMyVoN6slMr89QGNK%2BFu9YPTxOoqYUEUIusVbSXT6clemRJn7S6tXgUOrAXFbiOyDH9%2BYTAfCUJzBQ3gYTHeQsKaFheLqXoUCmL33RdNKklgxoPTDLndZRSMkbkBcEgK3dT11Ohbm63RjROQ42Hmd3AMl9QM5bhfhEYdN3PAxoOFl0lgSy4KaLgv5U5L&X-Amz-Signature=4d96d6ec97c9587b9f7e134c86d453000605cf89d82506d11556d9509c759635&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGRZHLF5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdVDJw2XM4avDthPvDGR7YbYH7%2Fh7Xven0s54H8FmGAAiEAzQs%2F8CJXdxRucYChkqoNi2vqzEYf%2FzZ6PlpyxUQ7ggAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEmNQbbnthQlhErcSrcA54OZp6zQVhAlL5NL5oidif%2FHXCPu%2BsO72XO6SB%2FH9dIfMW2osqA3EiWUZNxtifjn8q110a%2BZHjjFLWVsLX%2FrASGUfltzFUot4wgKSChV3F7ei60VbKKzFIoWHd9ZdMIQhAIXRqdbHWUirWk3yUwXlVnM5bjX6YZy%2Fmz4%2FDBrHOLC%2B8Rt4SuBRpXWitfHNA8HsYNECS9wvnKLavtiDpPs1V1F0klqt61UKv3kWztkEdoxjaNnetTnwe7h58lWBnfZRzdJpS5sGmlMvBdo%2F6EzGB7dZ3Ge0CHUo5EJQsgf0Q%2BtUJNWZWGlOmagA8Gym0kG5NR0YAWH0Tu0Rbx89IklNkI0dFwEAQBv3KGKyBoAzw%2FhTQbNG1o6GJnN4FgHAShB%2F2BAzQUmJzIJ2q133eqBHIejw6TAAunhd9FYiL52PZlb5iNkjN4fCxeXVNmzBm5Yufq6lgV5Jf7CmzAZ0w%2Fvmmnk9fF3uq0Ylk%2BvfsV4eW9j8kMaQM6mI0QLflGFU6EFqUs%2BF7a4a8rzeBTO8LZkLq82YN%2BTYBNI%2BFh0EVeHnAwv1sqSG1VwtNrMuOhAKklCtCOensMpCXEvIz%2B9e1tBMAKF0vBsb0UR4tRKHtRQ5uuq8suDjcXoo6uUdItMNaem8IGOqUBJP1ewA6zlTHqZeUVkczCj5T1qSbaNQ4mmMyVoN6slMr89QGNK%2BFu9YPTxOoqYUEUIusVbSXT6clemRJn7S6tXgUOrAXFbiOyDH9%2BYTAfCUJzBQ3gYTHeQsKaFheLqXoUCmL33RdNKklgxoPTDLndZRSMkbkBcEgK3dT11Ohbm63RjROQ42Hmd3AMl9QM5bhfhEYdN3PAxoOFl0lgSy4KaLgv5U5L&X-Amz-Signature=b733abc2bebf0e28d839e1c234fbea968263e1559f41894428fe8c5c7ba99b0f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
