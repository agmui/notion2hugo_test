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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJNB4M7B%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUnalUNaRUghDJOpMQ448z0lxggtMB%2FlTjdLwD9lESrQIhAJhCrqakkzLYH5%2FkeYNt2inSQgqKMK7bP9FY31nHCkR9Kv8DCFMQABoMNjM3NDIzMTgzODA1IgzdESK8VP2z3RJ8YMcq3AOC7VfPs9JCYT8jrsQCVCqcyf5KcPdX2g7ubTEkP9bqHrDfK1wz%2Fv4P%2BM9vfpzEH%2FBZXo6zGX%2F1mMASPYlu6YCTnp0aRKryuPkmV7Tk5YECJoKbavK4AN96vQhjeK1lLR7H4%2FiEFj3Fs9Q%2FfsXRBuhHr7kfpGbOG4ehsie8kCF2dHY0TgQJzzQgCiSKhPbUGuVknIfQSconryakaqrZzNWENS1GYMjtDuh5AKtXxdKKNi45yIuzSZv6mr1VrizjKozAOH3DVn4OQHs9XH7zV80LraA74Qfe5vMdil57xIq1CnXduefoi%2F46eXy7Z6AZ5FGhqazkgWKAt%2BzhYQUNdl1mpEXGitQI86%2BXv3u%2FGMz4Ja7p6O%2F44alvaa8LLKiteBJTEpGte7Y2kIOqQ8r3JKRmR7O%2FGUmJhxeLk1obsfNqVQt%2FUWitk35AcAv9amqlXvDTuKJdhMVJG7Hbg3Z9bcefnQ%2FOTOSoUIyjtmm7I8AKnkwVy%2BHNeFG7Db6y0RJaY9K9T9LSRqB9Fuwe%2Fr8jzTEIZLrRKpFnhyon8koLe9hbg%2BQveVWZ%2B59fn5Tp35W58WQB%2BOiP5dwK8npSKZL78GZksBiylejc%2BC0t%2FNMatzmzMBcdmYBEzISc5lxWfTDHq%2BO%2BBjqkAcSVcZevtvNGgCEpi%2BPAhFXzb3RSlVkDApCRZsYLx1nirTvpqvMwudvqtb37rKuv%2BYMCzLv1Q7jt8PimPQf4s1ZRGMemGbyegP1u2iYaY5aLD9U%2BpR1fmViQ97iUtbfU44ZVSSic40oEjG2ptTnTLL0w%2BIzVqNuaypolqGfJXGU4s1ersjOip7wtxm696G%2Bj5CRl7eve8%2BLVpEJyl%2BAH2bPLdWii&X-Amz-Signature=7417bc53bdc12c1af5b1bf657347b1b0f797caa8846a6477d108ec04ce0d413f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJNB4M7B%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUnalUNaRUghDJOpMQ448z0lxggtMB%2FlTjdLwD9lESrQIhAJhCrqakkzLYH5%2FkeYNt2inSQgqKMK7bP9FY31nHCkR9Kv8DCFMQABoMNjM3NDIzMTgzODA1IgzdESK8VP2z3RJ8YMcq3AOC7VfPs9JCYT8jrsQCVCqcyf5KcPdX2g7ubTEkP9bqHrDfK1wz%2Fv4P%2BM9vfpzEH%2FBZXo6zGX%2F1mMASPYlu6YCTnp0aRKryuPkmV7Tk5YECJoKbavK4AN96vQhjeK1lLR7H4%2FiEFj3Fs9Q%2FfsXRBuhHr7kfpGbOG4ehsie8kCF2dHY0TgQJzzQgCiSKhPbUGuVknIfQSconryakaqrZzNWENS1GYMjtDuh5AKtXxdKKNi45yIuzSZv6mr1VrizjKozAOH3DVn4OQHs9XH7zV80LraA74Qfe5vMdil57xIq1CnXduefoi%2F46eXy7Z6AZ5FGhqazkgWKAt%2BzhYQUNdl1mpEXGitQI86%2BXv3u%2FGMz4Ja7p6O%2F44alvaa8LLKiteBJTEpGte7Y2kIOqQ8r3JKRmR7O%2FGUmJhxeLk1obsfNqVQt%2FUWitk35AcAv9amqlXvDTuKJdhMVJG7Hbg3Z9bcefnQ%2FOTOSoUIyjtmm7I8AKnkwVy%2BHNeFG7Db6y0RJaY9K9T9LSRqB9Fuwe%2Fr8jzTEIZLrRKpFnhyon8koLe9hbg%2BQveVWZ%2B59fn5Tp35W58WQB%2BOiP5dwK8npSKZL78GZksBiylejc%2BC0t%2FNMatzmzMBcdmYBEzISc5lxWfTDHq%2BO%2BBjqkAcSVcZevtvNGgCEpi%2BPAhFXzb3RSlVkDApCRZsYLx1nirTvpqvMwudvqtb37rKuv%2BYMCzLv1Q7jt8PimPQf4s1ZRGMemGbyegP1u2iYaY5aLD9U%2BpR1fmViQ97iUtbfU44ZVSSic40oEjG2ptTnTLL0w%2BIzVqNuaypolqGfJXGU4s1ersjOip7wtxm696G%2Bj5CRl7eve8%2BLVpEJyl%2BAH2bPLdWii&X-Amz-Signature=b44ff48ee065e086c2fad95066f5dd9cf9a37525d1b738832a10364e69c147bc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJNB4M7B%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUnalUNaRUghDJOpMQ448z0lxggtMB%2FlTjdLwD9lESrQIhAJhCrqakkzLYH5%2FkeYNt2inSQgqKMK7bP9FY31nHCkR9Kv8DCFMQABoMNjM3NDIzMTgzODA1IgzdESK8VP2z3RJ8YMcq3AOC7VfPs9JCYT8jrsQCVCqcyf5KcPdX2g7ubTEkP9bqHrDfK1wz%2Fv4P%2BM9vfpzEH%2FBZXo6zGX%2F1mMASPYlu6YCTnp0aRKryuPkmV7Tk5YECJoKbavK4AN96vQhjeK1lLR7H4%2FiEFj3Fs9Q%2FfsXRBuhHr7kfpGbOG4ehsie8kCF2dHY0TgQJzzQgCiSKhPbUGuVknIfQSconryakaqrZzNWENS1GYMjtDuh5AKtXxdKKNi45yIuzSZv6mr1VrizjKozAOH3DVn4OQHs9XH7zV80LraA74Qfe5vMdil57xIq1CnXduefoi%2F46eXy7Z6AZ5FGhqazkgWKAt%2BzhYQUNdl1mpEXGitQI86%2BXv3u%2FGMz4Ja7p6O%2F44alvaa8LLKiteBJTEpGte7Y2kIOqQ8r3JKRmR7O%2FGUmJhxeLk1obsfNqVQt%2FUWitk35AcAv9amqlXvDTuKJdhMVJG7Hbg3Z9bcefnQ%2FOTOSoUIyjtmm7I8AKnkwVy%2BHNeFG7Db6y0RJaY9K9T9LSRqB9Fuwe%2Fr8jzTEIZLrRKpFnhyon8koLe9hbg%2BQveVWZ%2B59fn5Tp35W58WQB%2BOiP5dwK8npSKZL78GZksBiylejc%2BC0t%2FNMatzmzMBcdmYBEzISc5lxWfTDHq%2BO%2BBjqkAcSVcZevtvNGgCEpi%2BPAhFXzb3RSlVkDApCRZsYLx1nirTvpqvMwudvqtb37rKuv%2BYMCzLv1Q7jt8PimPQf4s1ZRGMemGbyegP1u2iYaY5aLD9U%2BpR1fmViQ97iUtbfU44ZVSSic40oEjG2ptTnTLL0w%2BIzVqNuaypolqGfJXGU4s1ersjOip7wtxm696G%2Bj5CRl7eve8%2BLVpEJyl%2BAH2bPLdWii&X-Amz-Signature=b4177148712a2b83782a151c56bf3f9abea4e8640ad59ffc6e13fd0df88d7690&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJNB4M7B%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUnalUNaRUghDJOpMQ448z0lxggtMB%2FlTjdLwD9lESrQIhAJhCrqakkzLYH5%2FkeYNt2inSQgqKMK7bP9FY31nHCkR9Kv8DCFMQABoMNjM3NDIzMTgzODA1IgzdESK8VP2z3RJ8YMcq3AOC7VfPs9JCYT8jrsQCVCqcyf5KcPdX2g7ubTEkP9bqHrDfK1wz%2Fv4P%2BM9vfpzEH%2FBZXo6zGX%2F1mMASPYlu6YCTnp0aRKryuPkmV7Tk5YECJoKbavK4AN96vQhjeK1lLR7H4%2FiEFj3Fs9Q%2FfsXRBuhHr7kfpGbOG4ehsie8kCF2dHY0TgQJzzQgCiSKhPbUGuVknIfQSconryakaqrZzNWENS1GYMjtDuh5AKtXxdKKNi45yIuzSZv6mr1VrizjKozAOH3DVn4OQHs9XH7zV80LraA74Qfe5vMdil57xIq1CnXduefoi%2F46eXy7Z6AZ5FGhqazkgWKAt%2BzhYQUNdl1mpEXGitQI86%2BXv3u%2FGMz4Ja7p6O%2F44alvaa8LLKiteBJTEpGte7Y2kIOqQ8r3JKRmR7O%2FGUmJhxeLk1obsfNqVQt%2FUWitk35AcAv9amqlXvDTuKJdhMVJG7Hbg3Z9bcefnQ%2FOTOSoUIyjtmm7I8AKnkwVy%2BHNeFG7Db6y0RJaY9K9T9LSRqB9Fuwe%2Fr8jzTEIZLrRKpFnhyon8koLe9hbg%2BQveVWZ%2B59fn5Tp35W58WQB%2BOiP5dwK8npSKZL78GZksBiylejc%2BC0t%2FNMatzmzMBcdmYBEzISc5lxWfTDHq%2BO%2BBjqkAcSVcZevtvNGgCEpi%2BPAhFXzb3RSlVkDApCRZsYLx1nirTvpqvMwudvqtb37rKuv%2BYMCzLv1Q7jt8PimPQf4s1ZRGMemGbyegP1u2iYaY5aLD9U%2BpR1fmViQ97iUtbfU44ZVSSic40oEjG2ptTnTLL0w%2BIzVqNuaypolqGfJXGU4s1ersjOip7wtxm696G%2Bj5CRl7eve8%2BLVpEJyl%2BAH2bPLdWii&X-Amz-Signature=c5409033ba2bc24e5784b258f7dc5bdde4dd9f563e62131c87b87ddee801e07b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJNB4M7B%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUnalUNaRUghDJOpMQ448z0lxggtMB%2FlTjdLwD9lESrQIhAJhCrqakkzLYH5%2FkeYNt2inSQgqKMK7bP9FY31nHCkR9Kv8DCFMQABoMNjM3NDIzMTgzODA1IgzdESK8VP2z3RJ8YMcq3AOC7VfPs9JCYT8jrsQCVCqcyf5KcPdX2g7ubTEkP9bqHrDfK1wz%2Fv4P%2BM9vfpzEH%2FBZXo6zGX%2F1mMASPYlu6YCTnp0aRKryuPkmV7Tk5YECJoKbavK4AN96vQhjeK1lLR7H4%2FiEFj3Fs9Q%2FfsXRBuhHr7kfpGbOG4ehsie8kCF2dHY0TgQJzzQgCiSKhPbUGuVknIfQSconryakaqrZzNWENS1GYMjtDuh5AKtXxdKKNi45yIuzSZv6mr1VrizjKozAOH3DVn4OQHs9XH7zV80LraA74Qfe5vMdil57xIq1CnXduefoi%2F46eXy7Z6AZ5FGhqazkgWKAt%2BzhYQUNdl1mpEXGitQI86%2BXv3u%2FGMz4Ja7p6O%2F44alvaa8LLKiteBJTEpGte7Y2kIOqQ8r3JKRmR7O%2FGUmJhxeLk1obsfNqVQt%2FUWitk35AcAv9amqlXvDTuKJdhMVJG7Hbg3Z9bcefnQ%2FOTOSoUIyjtmm7I8AKnkwVy%2BHNeFG7Db6y0RJaY9K9T9LSRqB9Fuwe%2Fr8jzTEIZLrRKpFnhyon8koLe9hbg%2BQveVWZ%2B59fn5Tp35W58WQB%2BOiP5dwK8npSKZL78GZksBiylejc%2BC0t%2FNMatzmzMBcdmYBEzISc5lxWfTDHq%2BO%2BBjqkAcSVcZevtvNGgCEpi%2BPAhFXzb3RSlVkDApCRZsYLx1nirTvpqvMwudvqtb37rKuv%2BYMCzLv1Q7jt8PimPQf4s1ZRGMemGbyegP1u2iYaY5aLD9U%2BpR1fmViQ97iUtbfU44ZVSSic40oEjG2ptTnTLL0w%2BIzVqNuaypolqGfJXGU4s1ersjOip7wtxm696G%2Bj5CRl7eve8%2BLVpEJyl%2BAH2bPLdWii&X-Amz-Signature=f66cae332e9833c107bfb8f0f4b91ab9b76b6f94a7e5a21db113fd9bc31fe412&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
