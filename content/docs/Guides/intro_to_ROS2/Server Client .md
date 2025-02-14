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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AP6YSFM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCFPgONE3TWsHTKPKTJUlPxzATz1hc3WhpE2VTSznWMnwIhAJ7JjXWAtqdmp5M%2BZ6RUUYVmA0UQ7kI988%2FroySOamUrKv8DCDUQABoMNjM3NDIzMTgzODA1IgyUTRm5ee%2BMCxvqw%2FMq3APV6PxStGL1BuS0kSjLG46WjxJTTht5h%2Fg7AhRgVcQYZK8OaJwR5YlK7Z8mhEoWOIWw4mep6%2BluhfAL45tgXvoA%2FP9gJqjjIOMLQsG6yTPdM88EABrEcYR2D4ZnYQAlIN9RV3OU0PYN2SsV3mjSn4uIDbJHuU0AiW1y%2B8HyAjTwjyySpAovE2%2FdqSdEZAZ09qTALOSsvCLfiwN8YyHmu8DH9sHUeaH3ZzSaH5RSYRapIOXbiQZAkRGWLvMgxmQEfgNahX7tIAeym0oSaGVE9kkRfgL6z6nZsjUb8vzMGPj5doN0Kl3x%2FdabY%2FEM1EngvDizPnAsvVEjf%2Bsw4k6oAx4RUNaTx2A2xGdmC%2BUiTHS%2Bvcz77wN%2BtzL1kj08hWcEOerNBmZjYGCsigeVkjEVlIvLKyXG2kNKNj2oM%2BeJgFwBYQtx1ba5e%2BYxjXU0Wr1Dl4yiq37ZiQ2mwO4OxumsldaD22ywShl4njyFQ4ZoNNBWpiQ9rPnXjIXq9n8GDAYksd2JDVSa64geWmDzxoo3Z611qBjPbW8lNtgenkgJt9HeW9kq65%2FntpJOmsBiwNGedYNICyUGs7ONnOVIxheMLggkIUWa4sLpLD%2FaoDNmyNa2nnlQg8tjxxJRkbuiWTC3tr69BjqkAeUBSc%2FFNHJTN50ldLz5InWH0%2Bqa%2B3ZeLDGHKCZg3Rd0HeRur0ChNZXBQVONGnb832Zy%2BlWo0WiIDHeGbOXjSvhxJcutJWXDo7c54pfsaxGrgUASTzBmPF9d7eru%2BuoWEYgAMjj0lLG2XWjgzJN3YX82pBWczZSIraD3xk98OSxpNaH4sNF%2Fqj76pRZtDqIK0MEIU3MEgkLNvOC2rohIaWTk1xH0&X-Amz-Signature=6ab996dba2c6434b75bed4702054063a34677ad51411e5f16a8d17d28c1acae0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AP6YSFM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCFPgONE3TWsHTKPKTJUlPxzATz1hc3WhpE2VTSznWMnwIhAJ7JjXWAtqdmp5M%2BZ6RUUYVmA0UQ7kI988%2FroySOamUrKv8DCDUQABoMNjM3NDIzMTgzODA1IgyUTRm5ee%2BMCxvqw%2FMq3APV6PxStGL1BuS0kSjLG46WjxJTTht5h%2Fg7AhRgVcQYZK8OaJwR5YlK7Z8mhEoWOIWw4mep6%2BluhfAL45tgXvoA%2FP9gJqjjIOMLQsG6yTPdM88EABrEcYR2D4ZnYQAlIN9RV3OU0PYN2SsV3mjSn4uIDbJHuU0AiW1y%2B8HyAjTwjyySpAovE2%2FdqSdEZAZ09qTALOSsvCLfiwN8YyHmu8DH9sHUeaH3ZzSaH5RSYRapIOXbiQZAkRGWLvMgxmQEfgNahX7tIAeym0oSaGVE9kkRfgL6z6nZsjUb8vzMGPj5doN0Kl3x%2FdabY%2FEM1EngvDizPnAsvVEjf%2Bsw4k6oAx4RUNaTx2A2xGdmC%2BUiTHS%2Bvcz77wN%2BtzL1kj08hWcEOerNBmZjYGCsigeVkjEVlIvLKyXG2kNKNj2oM%2BeJgFwBYQtx1ba5e%2BYxjXU0Wr1Dl4yiq37ZiQ2mwO4OxumsldaD22ywShl4njyFQ4ZoNNBWpiQ9rPnXjIXq9n8GDAYksd2JDVSa64geWmDzxoo3Z611qBjPbW8lNtgenkgJt9HeW9kq65%2FntpJOmsBiwNGedYNICyUGs7ONnOVIxheMLggkIUWa4sLpLD%2FaoDNmyNa2nnlQg8tjxxJRkbuiWTC3tr69BjqkAeUBSc%2FFNHJTN50ldLz5InWH0%2Bqa%2B3ZeLDGHKCZg3Rd0HeRur0ChNZXBQVONGnb832Zy%2BlWo0WiIDHeGbOXjSvhxJcutJWXDo7c54pfsaxGrgUASTzBmPF9d7eru%2BuoWEYgAMjj0lLG2XWjgzJN3YX82pBWczZSIraD3xk98OSxpNaH4sNF%2Fqj76pRZtDqIK0MEIU3MEgkLNvOC2rohIaWTk1xH0&X-Amz-Signature=8feb24c8e9d6557ab932259771a82a180f977d6d7ed379f83e373fc95b8e28d7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AP6YSFM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCFPgONE3TWsHTKPKTJUlPxzATz1hc3WhpE2VTSznWMnwIhAJ7JjXWAtqdmp5M%2BZ6RUUYVmA0UQ7kI988%2FroySOamUrKv8DCDUQABoMNjM3NDIzMTgzODA1IgyUTRm5ee%2BMCxvqw%2FMq3APV6PxStGL1BuS0kSjLG46WjxJTTht5h%2Fg7AhRgVcQYZK8OaJwR5YlK7Z8mhEoWOIWw4mep6%2BluhfAL45tgXvoA%2FP9gJqjjIOMLQsG6yTPdM88EABrEcYR2D4ZnYQAlIN9RV3OU0PYN2SsV3mjSn4uIDbJHuU0AiW1y%2B8HyAjTwjyySpAovE2%2FdqSdEZAZ09qTALOSsvCLfiwN8YyHmu8DH9sHUeaH3ZzSaH5RSYRapIOXbiQZAkRGWLvMgxmQEfgNahX7tIAeym0oSaGVE9kkRfgL6z6nZsjUb8vzMGPj5doN0Kl3x%2FdabY%2FEM1EngvDizPnAsvVEjf%2Bsw4k6oAx4RUNaTx2A2xGdmC%2BUiTHS%2Bvcz77wN%2BtzL1kj08hWcEOerNBmZjYGCsigeVkjEVlIvLKyXG2kNKNj2oM%2BeJgFwBYQtx1ba5e%2BYxjXU0Wr1Dl4yiq37ZiQ2mwO4OxumsldaD22ywShl4njyFQ4ZoNNBWpiQ9rPnXjIXq9n8GDAYksd2JDVSa64geWmDzxoo3Z611qBjPbW8lNtgenkgJt9HeW9kq65%2FntpJOmsBiwNGedYNICyUGs7ONnOVIxheMLggkIUWa4sLpLD%2FaoDNmyNa2nnlQg8tjxxJRkbuiWTC3tr69BjqkAeUBSc%2FFNHJTN50ldLz5InWH0%2Bqa%2B3ZeLDGHKCZg3Rd0HeRur0ChNZXBQVONGnb832Zy%2BlWo0WiIDHeGbOXjSvhxJcutJWXDo7c54pfsaxGrgUASTzBmPF9d7eru%2BuoWEYgAMjj0lLG2XWjgzJN3YX82pBWczZSIraD3xk98OSxpNaH4sNF%2Fqj76pRZtDqIK0MEIU3MEgkLNvOC2rohIaWTk1xH0&X-Amz-Signature=6c605bf3e2994e4a6b240f4abb01c3c717af7733b4ab9e9210f36bf275b27d40&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AP6YSFM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCFPgONE3TWsHTKPKTJUlPxzATz1hc3WhpE2VTSznWMnwIhAJ7JjXWAtqdmp5M%2BZ6RUUYVmA0UQ7kI988%2FroySOamUrKv8DCDUQABoMNjM3NDIzMTgzODA1IgyUTRm5ee%2BMCxvqw%2FMq3APV6PxStGL1BuS0kSjLG46WjxJTTht5h%2Fg7AhRgVcQYZK8OaJwR5YlK7Z8mhEoWOIWw4mep6%2BluhfAL45tgXvoA%2FP9gJqjjIOMLQsG6yTPdM88EABrEcYR2D4ZnYQAlIN9RV3OU0PYN2SsV3mjSn4uIDbJHuU0AiW1y%2B8HyAjTwjyySpAovE2%2FdqSdEZAZ09qTALOSsvCLfiwN8YyHmu8DH9sHUeaH3ZzSaH5RSYRapIOXbiQZAkRGWLvMgxmQEfgNahX7tIAeym0oSaGVE9kkRfgL6z6nZsjUb8vzMGPj5doN0Kl3x%2FdabY%2FEM1EngvDizPnAsvVEjf%2Bsw4k6oAx4RUNaTx2A2xGdmC%2BUiTHS%2Bvcz77wN%2BtzL1kj08hWcEOerNBmZjYGCsigeVkjEVlIvLKyXG2kNKNj2oM%2BeJgFwBYQtx1ba5e%2BYxjXU0Wr1Dl4yiq37ZiQ2mwO4OxumsldaD22ywShl4njyFQ4ZoNNBWpiQ9rPnXjIXq9n8GDAYksd2JDVSa64geWmDzxoo3Z611qBjPbW8lNtgenkgJt9HeW9kq65%2FntpJOmsBiwNGedYNICyUGs7ONnOVIxheMLggkIUWa4sLpLD%2FaoDNmyNa2nnlQg8tjxxJRkbuiWTC3tr69BjqkAeUBSc%2FFNHJTN50ldLz5InWH0%2Bqa%2B3ZeLDGHKCZg3Rd0HeRur0ChNZXBQVONGnb832Zy%2BlWo0WiIDHeGbOXjSvhxJcutJWXDo7c54pfsaxGrgUASTzBmPF9d7eru%2BuoWEYgAMjj0lLG2XWjgzJN3YX82pBWczZSIraD3xk98OSxpNaH4sNF%2Fqj76pRZtDqIK0MEIU3MEgkLNvOC2rohIaWTk1xH0&X-Amz-Signature=039d93ffc8ef5081ed654564d4ee1465b0f81a41c34132d00bfd4faf48020855&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AP6YSFM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCFPgONE3TWsHTKPKTJUlPxzATz1hc3WhpE2VTSznWMnwIhAJ7JjXWAtqdmp5M%2BZ6RUUYVmA0UQ7kI988%2FroySOamUrKv8DCDUQABoMNjM3NDIzMTgzODA1IgyUTRm5ee%2BMCxvqw%2FMq3APV6PxStGL1BuS0kSjLG46WjxJTTht5h%2Fg7AhRgVcQYZK8OaJwR5YlK7Z8mhEoWOIWw4mep6%2BluhfAL45tgXvoA%2FP9gJqjjIOMLQsG6yTPdM88EABrEcYR2D4ZnYQAlIN9RV3OU0PYN2SsV3mjSn4uIDbJHuU0AiW1y%2B8HyAjTwjyySpAovE2%2FdqSdEZAZ09qTALOSsvCLfiwN8YyHmu8DH9sHUeaH3ZzSaH5RSYRapIOXbiQZAkRGWLvMgxmQEfgNahX7tIAeym0oSaGVE9kkRfgL6z6nZsjUb8vzMGPj5doN0Kl3x%2FdabY%2FEM1EngvDizPnAsvVEjf%2Bsw4k6oAx4RUNaTx2A2xGdmC%2BUiTHS%2Bvcz77wN%2BtzL1kj08hWcEOerNBmZjYGCsigeVkjEVlIvLKyXG2kNKNj2oM%2BeJgFwBYQtx1ba5e%2BYxjXU0Wr1Dl4yiq37ZiQ2mwO4OxumsldaD22ywShl4njyFQ4ZoNNBWpiQ9rPnXjIXq9n8GDAYksd2JDVSa64geWmDzxoo3Z611qBjPbW8lNtgenkgJt9HeW9kq65%2FntpJOmsBiwNGedYNICyUGs7ONnOVIxheMLggkIUWa4sLpLD%2FaoDNmyNa2nnlQg8tjxxJRkbuiWTC3tr69BjqkAeUBSc%2FFNHJTN50ldLz5InWH0%2Bqa%2B3ZeLDGHKCZg3Rd0HeRur0ChNZXBQVONGnb832Zy%2BlWo0WiIDHeGbOXjSvhxJcutJWXDo7c54pfsaxGrgUASTzBmPF9d7eru%2BuoWEYgAMjj0lLG2XWjgzJN3YX82pBWczZSIraD3xk98OSxpNaH4sNF%2Fqj76pRZtDqIK0MEIU3MEgkLNvOC2rohIaWTk1xH0&X-Amz-Signature=35b4c3537914e1e121a465a438c1e1f2c44eb6b82d2a45e620d777a337276836&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
