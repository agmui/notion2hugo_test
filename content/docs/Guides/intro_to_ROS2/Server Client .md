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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SS222N%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnj4MO6rsyNUn3F0%2BNiRENqse5LwWiDLiJ0u47iCzemAiB6J0Ju9vTnqhZ4%2FZicgNQTpBv%2F4YJcnNxNWg1GaTdIBiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu1PW%2F0UDek8sivdCKtwDVQq39ViJl4r3JCQ7BncItmbDxJyJ6GOBkx3vdd7Umk8CNzABRU6p7FBnJrZRe6n1Sh9IW%2B4Eiwr9%2B4Pd4utulaLa0LwVXeYWYM5NrJeW5JOfYrpXDr4M2bfSWIm7MyfrJjSh3Ac0sgOESeMdA2JXakyBaqlY8NJkOVRjoxiEfyYYB%2F3NwrkuNABR9pYzXq5eJHWvbk6n%2Fb3rhRwQg7c%2F8aDG9XgIY3IQf5s6VRTARcL%2BZXNubgvemZ4QEN9gAX88rkiwQsPcosNGxbUUbRY7SCeKNfmdN5HNe7wJ0Pu5s%2FnmiPuVywmPMwZaA3Rs6LVtStl%2BZgjqzTcqYiq6aI7covRdaE8we9nrEQ4nV2VOyapwJnnk3aP8%2FgEypt1cTwdDK9r%2F9s0Q5fKC2%2FAOauaAec3uCe1S6S36oB0QkBAHdO4OX3swmQODETJa%2FQhsyxlO6rP3h4pNHkuesIbnAtxg5LXVg2AEsbVLapzt5z35F2VohOhK5QlhqXGCQrd9N28MRPx4klrudcWFjh7PC92I%2BwK3bUCkPmnzBNFnXnOI%2Bs8xwD5W1jbQjPuOnlkRKSYE7apS98jXdRp6KuGgI%2BNhW7YRZSEOdOOoKKMw%2BxJtCnmBNnxkihHwzQS4L58w26j%2FwgY6pgEqo%2B2h1l%2Fv7Aq38bCO30NyQ3LXw29fPbNm65x24lewvt%2FYGSK5Myi6xTO1Ph2O2h0j3etDRqQp9nneJNUAEyxVQ%2B%2Bsxdeat9a3syF2TMApuoeqUq7YTlA7gx7SMWkwWe8cJ2wHh7D8KvpRaLULqafiHgLGFglnKqS%2BplwI9B1v37DkAcpGtWdjdG5u88EYhpoIFCfhm51xRL4aNWlsQHHvkl7TMjJw&X-Amz-Signature=5f97d5593666f669d7e25c50978a87124fcb734e87158699c6cc2d4222a74374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SS222N%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnj4MO6rsyNUn3F0%2BNiRENqse5LwWiDLiJ0u47iCzemAiB6J0Ju9vTnqhZ4%2FZicgNQTpBv%2F4YJcnNxNWg1GaTdIBiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu1PW%2F0UDek8sivdCKtwDVQq39ViJl4r3JCQ7BncItmbDxJyJ6GOBkx3vdd7Umk8CNzABRU6p7FBnJrZRe6n1Sh9IW%2B4Eiwr9%2B4Pd4utulaLa0LwVXeYWYM5NrJeW5JOfYrpXDr4M2bfSWIm7MyfrJjSh3Ac0sgOESeMdA2JXakyBaqlY8NJkOVRjoxiEfyYYB%2F3NwrkuNABR9pYzXq5eJHWvbk6n%2Fb3rhRwQg7c%2F8aDG9XgIY3IQf5s6VRTARcL%2BZXNubgvemZ4QEN9gAX88rkiwQsPcosNGxbUUbRY7SCeKNfmdN5HNe7wJ0Pu5s%2FnmiPuVywmPMwZaA3Rs6LVtStl%2BZgjqzTcqYiq6aI7covRdaE8we9nrEQ4nV2VOyapwJnnk3aP8%2FgEypt1cTwdDK9r%2F9s0Q5fKC2%2FAOauaAec3uCe1S6S36oB0QkBAHdO4OX3swmQODETJa%2FQhsyxlO6rP3h4pNHkuesIbnAtxg5LXVg2AEsbVLapzt5z35F2VohOhK5QlhqXGCQrd9N28MRPx4klrudcWFjh7PC92I%2BwK3bUCkPmnzBNFnXnOI%2Bs8xwD5W1jbQjPuOnlkRKSYE7apS98jXdRp6KuGgI%2BNhW7YRZSEOdOOoKKMw%2BxJtCnmBNnxkihHwzQS4L58w26j%2FwgY6pgEqo%2B2h1l%2Fv7Aq38bCO30NyQ3LXw29fPbNm65x24lewvt%2FYGSK5Myi6xTO1Ph2O2h0j3etDRqQp9nneJNUAEyxVQ%2B%2Bsxdeat9a3syF2TMApuoeqUq7YTlA7gx7SMWkwWe8cJ2wHh7D8KvpRaLULqafiHgLGFglnKqS%2BplwI9B1v37DkAcpGtWdjdG5u88EYhpoIFCfhm51xRL4aNWlsQHHvkl7TMjJw&X-Amz-Signature=3208e754d2b0a34213e9707b6d177c167dd489021c4427596db2e32fd249ebaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SS222N%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnj4MO6rsyNUn3F0%2BNiRENqse5LwWiDLiJ0u47iCzemAiB6J0Ju9vTnqhZ4%2FZicgNQTpBv%2F4YJcnNxNWg1GaTdIBiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu1PW%2F0UDek8sivdCKtwDVQq39ViJl4r3JCQ7BncItmbDxJyJ6GOBkx3vdd7Umk8CNzABRU6p7FBnJrZRe6n1Sh9IW%2B4Eiwr9%2B4Pd4utulaLa0LwVXeYWYM5NrJeW5JOfYrpXDr4M2bfSWIm7MyfrJjSh3Ac0sgOESeMdA2JXakyBaqlY8NJkOVRjoxiEfyYYB%2F3NwrkuNABR9pYzXq5eJHWvbk6n%2Fb3rhRwQg7c%2F8aDG9XgIY3IQf5s6VRTARcL%2BZXNubgvemZ4QEN9gAX88rkiwQsPcosNGxbUUbRY7SCeKNfmdN5HNe7wJ0Pu5s%2FnmiPuVywmPMwZaA3Rs6LVtStl%2BZgjqzTcqYiq6aI7covRdaE8we9nrEQ4nV2VOyapwJnnk3aP8%2FgEypt1cTwdDK9r%2F9s0Q5fKC2%2FAOauaAec3uCe1S6S36oB0QkBAHdO4OX3swmQODETJa%2FQhsyxlO6rP3h4pNHkuesIbnAtxg5LXVg2AEsbVLapzt5z35F2VohOhK5QlhqXGCQrd9N28MRPx4klrudcWFjh7PC92I%2BwK3bUCkPmnzBNFnXnOI%2Bs8xwD5W1jbQjPuOnlkRKSYE7apS98jXdRp6KuGgI%2BNhW7YRZSEOdOOoKKMw%2BxJtCnmBNnxkihHwzQS4L58w26j%2FwgY6pgEqo%2B2h1l%2Fv7Aq38bCO30NyQ3LXw29fPbNm65x24lewvt%2FYGSK5Myi6xTO1Ph2O2h0j3etDRqQp9nneJNUAEyxVQ%2B%2Bsxdeat9a3syF2TMApuoeqUq7YTlA7gx7SMWkwWe8cJ2wHh7D8KvpRaLULqafiHgLGFglnKqS%2BplwI9B1v37DkAcpGtWdjdG5u88EYhpoIFCfhm51xRL4aNWlsQHHvkl7TMjJw&X-Amz-Signature=3e4a69d1a4535508e4360c0c7c2c4f703f465a92f98b8521ede1ef8a09644c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SS222N%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnj4MO6rsyNUn3F0%2BNiRENqse5LwWiDLiJ0u47iCzemAiB6J0Ju9vTnqhZ4%2FZicgNQTpBv%2F4YJcnNxNWg1GaTdIBiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu1PW%2F0UDek8sivdCKtwDVQq39ViJl4r3JCQ7BncItmbDxJyJ6GOBkx3vdd7Umk8CNzABRU6p7FBnJrZRe6n1Sh9IW%2B4Eiwr9%2B4Pd4utulaLa0LwVXeYWYM5NrJeW5JOfYrpXDr4M2bfSWIm7MyfrJjSh3Ac0sgOESeMdA2JXakyBaqlY8NJkOVRjoxiEfyYYB%2F3NwrkuNABR9pYzXq5eJHWvbk6n%2Fb3rhRwQg7c%2F8aDG9XgIY3IQf5s6VRTARcL%2BZXNubgvemZ4QEN9gAX88rkiwQsPcosNGxbUUbRY7SCeKNfmdN5HNe7wJ0Pu5s%2FnmiPuVywmPMwZaA3Rs6LVtStl%2BZgjqzTcqYiq6aI7covRdaE8we9nrEQ4nV2VOyapwJnnk3aP8%2FgEypt1cTwdDK9r%2F9s0Q5fKC2%2FAOauaAec3uCe1S6S36oB0QkBAHdO4OX3swmQODETJa%2FQhsyxlO6rP3h4pNHkuesIbnAtxg5LXVg2AEsbVLapzt5z35F2VohOhK5QlhqXGCQrd9N28MRPx4klrudcWFjh7PC92I%2BwK3bUCkPmnzBNFnXnOI%2Bs8xwD5W1jbQjPuOnlkRKSYE7apS98jXdRp6KuGgI%2BNhW7YRZSEOdOOoKKMw%2BxJtCnmBNnxkihHwzQS4L58w26j%2FwgY6pgEqo%2B2h1l%2Fv7Aq38bCO30NyQ3LXw29fPbNm65x24lewvt%2FYGSK5Myi6xTO1Ph2O2h0j3etDRqQp9nneJNUAEyxVQ%2B%2Bsxdeat9a3syF2TMApuoeqUq7YTlA7gx7SMWkwWe8cJ2wHh7D8KvpRaLULqafiHgLGFglnKqS%2BplwI9B1v37DkAcpGtWdjdG5u88EYhpoIFCfhm51xRL4aNWlsQHHvkl7TMjJw&X-Amz-Signature=e78055d4bac0a60c6480187aebd37625239a8cbbe5cf167e8aff5f522e872ae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SS222N%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnj4MO6rsyNUn3F0%2BNiRENqse5LwWiDLiJ0u47iCzemAiB6J0Ju9vTnqhZ4%2FZicgNQTpBv%2F4YJcnNxNWg1GaTdIBiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu1PW%2F0UDek8sivdCKtwDVQq39ViJl4r3JCQ7BncItmbDxJyJ6GOBkx3vdd7Umk8CNzABRU6p7FBnJrZRe6n1Sh9IW%2B4Eiwr9%2B4Pd4utulaLa0LwVXeYWYM5NrJeW5JOfYrpXDr4M2bfSWIm7MyfrJjSh3Ac0sgOESeMdA2JXakyBaqlY8NJkOVRjoxiEfyYYB%2F3NwrkuNABR9pYzXq5eJHWvbk6n%2Fb3rhRwQg7c%2F8aDG9XgIY3IQf5s6VRTARcL%2BZXNubgvemZ4QEN9gAX88rkiwQsPcosNGxbUUbRY7SCeKNfmdN5HNe7wJ0Pu5s%2FnmiPuVywmPMwZaA3Rs6LVtStl%2BZgjqzTcqYiq6aI7covRdaE8we9nrEQ4nV2VOyapwJnnk3aP8%2FgEypt1cTwdDK9r%2F9s0Q5fKC2%2FAOauaAec3uCe1S6S36oB0QkBAHdO4OX3swmQODETJa%2FQhsyxlO6rP3h4pNHkuesIbnAtxg5LXVg2AEsbVLapzt5z35F2VohOhK5QlhqXGCQrd9N28MRPx4klrudcWFjh7PC92I%2BwK3bUCkPmnzBNFnXnOI%2Bs8xwD5W1jbQjPuOnlkRKSYE7apS98jXdRp6KuGgI%2BNhW7YRZSEOdOOoKKMw%2BxJtCnmBNnxkihHwzQS4L58w26j%2FwgY6pgEqo%2B2h1l%2Fv7Aq38bCO30NyQ3LXw29fPbNm65x24lewvt%2FYGSK5Myi6xTO1Ph2O2h0j3etDRqQp9nneJNUAEyxVQ%2B%2Bsxdeat9a3syF2TMApuoeqUq7YTlA7gx7SMWkwWe8cJ2wHh7D8KvpRaLULqafiHgLGFglnKqS%2BplwI9B1v37DkAcpGtWdjdG5u88EYhpoIFCfhm51xRL4aNWlsQHHvkl7TMjJw&X-Amz-Signature=c841e1e4f204e8a8f36dac8264be76ca63d4b9bd5cb4388d680a95e09899605d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
