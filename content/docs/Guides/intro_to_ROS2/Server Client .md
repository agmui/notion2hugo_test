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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPL2V6Q%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCor43OfJnG8YcFBYc5KdZmqoRKZhPQxoXLYfqHlS%2BS%2BgIhAOrnqutj6UqqIPRk5UQ1yqczLPVrJyZSXwHLm2JYB%2FbRKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ3jWRvgGXQeKmQ5wq3AMWBQ8qTpTVWzse5nnY4LBkLkL8ZV7GflZmsRynHAeVNLivx2%2BjcpI2hb4haAnAtUdrjiiaBPFp6aYfq6Vv7fugSpdSu5T%2By09S1B%2BDRgPo%2FP9E3faCAarUDoCyTFIqQbD312uD49L336ZgxWNKg5LuTvszPsSLMrb2kunTSu7ifReflvtNVIGJxpaH8rjkkjOi3EH0GISYnRtyglwRuSl63JmaTtZyo4oW8GGlmBfyJBwnaP%2F7SA5cFKaIvnIADeQwdr0zTrTiLzw0ttv4rT63iX8N7%2FQGYwRF8kPf3YdHazTSFaOkXuhqVV5xGJX2wSumo%2BD0Vx9Yc7rv8ddX7S05RR4nQP5oXtaycFfemekDw%2Bgo0GfaS6NdmcVU2WX77cx0r5oOpG4RVz1PpL%2Brn89XG2lI1zLgm5PXPziwLVA4VxjXLidzGQNWiR1dweDubdJ3FboXkJy5nwFk4SwKWGNRRgEdV2Fs7jtjBkmVeBiGyUvOn2%2Ftemp6JS45uBl97QV1HvWwzYy%2BWoXdPcFXosYo%2BjiHdDTL8hi6fjNO5zwObnt5ju617tfAn4FFrntjZq88scXzI0dqSLsH89PAoFauXlwdyVRVcPixnjAw2I5DGUy8Y5Vctq7Wc%2BLQMTDmxNW9BjqkAdFfS9xwqN6xagk6Xhv9mI2eJxBHt9K%2BArPUcQsXoBlfMrqtl6fRAcGKANaNf7CoL21Z8TlP7%2FdUa72PCpJpMxz4QJz475qIzjiDeCgUjlkVHAVpoZ9gNHj6bfVe%2FDd4wQvyFS7%2FAiQ%2Bari81Ls4FApbPtsFcEBM%2FR1%2B48tFP71gLzkSeTXmnrOovcFvnfIph0XpnqFW5qLa1zCjKrqHWG6Teg9%2B&X-Amz-Signature=196d76f8b01b45e448940172dfdb55cf82c92205fd508585633abb349519910c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPL2V6Q%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCor43OfJnG8YcFBYc5KdZmqoRKZhPQxoXLYfqHlS%2BS%2BgIhAOrnqutj6UqqIPRk5UQ1yqczLPVrJyZSXwHLm2JYB%2FbRKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ3jWRvgGXQeKmQ5wq3AMWBQ8qTpTVWzse5nnY4LBkLkL8ZV7GflZmsRynHAeVNLivx2%2BjcpI2hb4haAnAtUdrjiiaBPFp6aYfq6Vv7fugSpdSu5T%2By09S1B%2BDRgPo%2FP9E3faCAarUDoCyTFIqQbD312uD49L336ZgxWNKg5LuTvszPsSLMrb2kunTSu7ifReflvtNVIGJxpaH8rjkkjOi3EH0GISYnRtyglwRuSl63JmaTtZyo4oW8GGlmBfyJBwnaP%2F7SA5cFKaIvnIADeQwdr0zTrTiLzw0ttv4rT63iX8N7%2FQGYwRF8kPf3YdHazTSFaOkXuhqVV5xGJX2wSumo%2BD0Vx9Yc7rv8ddX7S05RR4nQP5oXtaycFfemekDw%2Bgo0GfaS6NdmcVU2WX77cx0r5oOpG4RVz1PpL%2Brn89XG2lI1zLgm5PXPziwLVA4VxjXLidzGQNWiR1dweDubdJ3FboXkJy5nwFk4SwKWGNRRgEdV2Fs7jtjBkmVeBiGyUvOn2%2Ftemp6JS45uBl97QV1HvWwzYy%2BWoXdPcFXosYo%2BjiHdDTL8hi6fjNO5zwObnt5ju617tfAn4FFrntjZq88scXzI0dqSLsH89PAoFauXlwdyVRVcPixnjAw2I5DGUy8Y5Vctq7Wc%2BLQMTDmxNW9BjqkAdFfS9xwqN6xagk6Xhv9mI2eJxBHt9K%2BArPUcQsXoBlfMrqtl6fRAcGKANaNf7CoL21Z8TlP7%2FdUa72PCpJpMxz4QJz475qIzjiDeCgUjlkVHAVpoZ9gNHj6bfVe%2FDd4wQvyFS7%2FAiQ%2Bari81Ls4FApbPtsFcEBM%2FR1%2B48tFP71gLzkSeTXmnrOovcFvnfIph0XpnqFW5qLa1zCjKrqHWG6Teg9%2B&X-Amz-Signature=4317a18e8cc40e93255be19b1ef4aa94c91e051956b1aa702aa8737d68e1fcf5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPL2V6Q%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCor43OfJnG8YcFBYc5KdZmqoRKZhPQxoXLYfqHlS%2BS%2BgIhAOrnqutj6UqqIPRk5UQ1yqczLPVrJyZSXwHLm2JYB%2FbRKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ3jWRvgGXQeKmQ5wq3AMWBQ8qTpTVWzse5nnY4LBkLkL8ZV7GflZmsRynHAeVNLivx2%2BjcpI2hb4haAnAtUdrjiiaBPFp6aYfq6Vv7fugSpdSu5T%2By09S1B%2BDRgPo%2FP9E3faCAarUDoCyTFIqQbD312uD49L336ZgxWNKg5LuTvszPsSLMrb2kunTSu7ifReflvtNVIGJxpaH8rjkkjOi3EH0GISYnRtyglwRuSl63JmaTtZyo4oW8GGlmBfyJBwnaP%2F7SA5cFKaIvnIADeQwdr0zTrTiLzw0ttv4rT63iX8N7%2FQGYwRF8kPf3YdHazTSFaOkXuhqVV5xGJX2wSumo%2BD0Vx9Yc7rv8ddX7S05RR4nQP5oXtaycFfemekDw%2Bgo0GfaS6NdmcVU2WX77cx0r5oOpG4RVz1PpL%2Brn89XG2lI1zLgm5PXPziwLVA4VxjXLidzGQNWiR1dweDubdJ3FboXkJy5nwFk4SwKWGNRRgEdV2Fs7jtjBkmVeBiGyUvOn2%2Ftemp6JS45uBl97QV1HvWwzYy%2BWoXdPcFXosYo%2BjiHdDTL8hi6fjNO5zwObnt5ju617tfAn4FFrntjZq88scXzI0dqSLsH89PAoFauXlwdyVRVcPixnjAw2I5DGUy8Y5Vctq7Wc%2BLQMTDmxNW9BjqkAdFfS9xwqN6xagk6Xhv9mI2eJxBHt9K%2BArPUcQsXoBlfMrqtl6fRAcGKANaNf7CoL21Z8TlP7%2FdUa72PCpJpMxz4QJz475qIzjiDeCgUjlkVHAVpoZ9gNHj6bfVe%2FDd4wQvyFS7%2FAiQ%2Bari81Ls4FApbPtsFcEBM%2FR1%2B48tFP71gLzkSeTXmnrOovcFvnfIph0XpnqFW5qLa1zCjKrqHWG6Teg9%2B&X-Amz-Signature=43fce12adfa88c056c0eafb47168d95574e45411df99cb94cce4373ed1a37baf&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPL2V6Q%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCor43OfJnG8YcFBYc5KdZmqoRKZhPQxoXLYfqHlS%2BS%2BgIhAOrnqutj6UqqIPRk5UQ1yqczLPVrJyZSXwHLm2JYB%2FbRKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ3jWRvgGXQeKmQ5wq3AMWBQ8qTpTVWzse5nnY4LBkLkL8ZV7GflZmsRynHAeVNLivx2%2BjcpI2hb4haAnAtUdrjiiaBPFp6aYfq6Vv7fugSpdSu5T%2By09S1B%2BDRgPo%2FP9E3faCAarUDoCyTFIqQbD312uD49L336ZgxWNKg5LuTvszPsSLMrb2kunTSu7ifReflvtNVIGJxpaH8rjkkjOi3EH0GISYnRtyglwRuSl63JmaTtZyo4oW8GGlmBfyJBwnaP%2F7SA5cFKaIvnIADeQwdr0zTrTiLzw0ttv4rT63iX8N7%2FQGYwRF8kPf3YdHazTSFaOkXuhqVV5xGJX2wSumo%2BD0Vx9Yc7rv8ddX7S05RR4nQP5oXtaycFfemekDw%2Bgo0GfaS6NdmcVU2WX77cx0r5oOpG4RVz1PpL%2Brn89XG2lI1zLgm5PXPziwLVA4VxjXLidzGQNWiR1dweDubdJ3FboXkJy5nwFk4SwKWGNRRgEdV2Fs7jtjBkmVeBiGyUvOn2%2Ftemp6JS45uBl97QV1HvWwzYy%2BWoXdPcFXosYo%2BjiHdDTL8hi6fjNO5zwObnt5ju617tfAn4FFrntjZq88scXzI0dqSLsH89PAoFauXlwdyVRVcPixnjAw2I5DGUy8Y5Vctq7Wc%2BLQMTDmxNW9BjqkAdFfS9xwqN6xagk6Xhv9mI2eJxBHt9K%2BArPUcQsXoBlfMrqtl6fRAcGKANaNf7CoL21Z8TlP7%2FdUa72PCpJpMxz4QJz475qIzjiDeCgUjlkVHAVpoZ9gNHj6bfVe%2FDd4wQvyFS7%2FAiQ%2Bari81Ls4FApbPtsFcEBM%2FR1%2B48tFP71gLzkSeTXmnrOovcFvnfIph0XpnqFW5qLa1zCjKrqHWG6Teg9%2B&X-Amz-Signature=a1a233e27936c2d3a4b76bfc3526eec42647fc93b494a1751c3c26758f5597d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPL2V6Q%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCor43OfJnG8YcFBYc5KdZmqoRKZhPQxoXLYfqHlS%2BS%2BgIhAOrnqutj6UqqIPRk5UQ1yqczLPVrJyZSXwHLm2JYB%2FbRKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ3jWRvgGXQeKmQ5wq3AMWBQ8qTpTVWzse5nnY4LBkLkL8ZV7GflZmsRynHAeVNLivx2%2BjcpI2hb4haAnAtUdrjiiaBPFp6aYfq6Vv7fugSpdSu5T%2By09S1B%2BDRgPo%2FP9E3faCAarUDoCyTFIqQbD312uD49L336ZgxWNKg5LuTvszPsSLMrb2kunTSu7ifReflvtNVIGJxpaH8rjkkjOi3EH0GISYnRtyglwRuSl63JmaTtZyo4oW8GGlmBfyJBwnaP%2F7SA5cFKaIvnIADeQwdr0zTrTiLzw0ttv4rT63iX8N7%2FQGYwRF8kPf3YdHazTSFaOkXuhqVV5xGJX2wSumo%2BD0Vx9Yc7rv8ddX7S05RR4nQP5oXtaycFfemekDw%2Bgo0GfaS6NdmcVU2WX77cx0r5oOpG4RVz1PpL%2Brn89XG2lI1zLgm5PXPziwLVA4VxjXLidzGQNWiR1dweDubdJ3FboXkJy5nwFk4SwKWGNRRgEdV2Fs7jtjBkmVeBiGyUvOn2%2Ftemp6JS45uBl97QV1HvWwzYy%2BWoXdPcFXosYo%2BjiHdDTL8hi6fjNO5zwObnt5ju617tfAn4FFrntjZq88scXzI0dqSLsH89PAoFauXlwdyVRVcPixnjAw2I5DGUy8Y5Vctq7Wc%2BLQMTDmxNW9BjqkAdFfS9xwqN6xagk6Xhv9mI2eJxBHt9K%2BArPUcQsXoBlfMrqtl6fRAcGKANaNf7CoL21Z8TlP7%2FdUa72PCpJpMxz4QJz475qIzjiDeCgUjlkVHAVpoZ9gNHj6bfVe%2FDd4wQvyFS7%2FAiQ%2Bari81Ls4FApbPtsFcEBM%2FR1%2B48tFP71gLzkSeTXmnrOovcFvnfIph0XpnqFW5qLa1zCjKrqHWG6Teg9%2B&X-Amz-Signature=1b323a25e0e012911746c6a516b97d7b8a6fa32b675d6552df6b4d025a7820d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
